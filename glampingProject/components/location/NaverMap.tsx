"use client";

import { useEffect, useRef, useState } from "react";

// TODO: 환경변수에서 네이버 지도 API 키를 가져오도록 변경
// 현재는 정적 데이터로 샘플 좌표를 사용
const NAVER_MAP_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || "";

// TODO: 실제 글램핑장 좌표로 변경 (DB에서 가져오거나 환경변수로 설정)
// 35.656426, 126.501408
const GLAMPING_LOCATION = {
    lat: 35.656426, // 부안 고사포 해수욕장 인근
    lng: 126.501408, 
    name: "루미나 프라이빗 에스테이트",
    address: "전북 부안군 변산면 노루목길 8-8",
};

interface NaverMapProps {
    className?: string;
}

export function NaverMap({ className = "" }: NaverMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<naver.maps.Map | null>(null);
    const [is3D, setIs3D] = useState(true);

    useEffect(() => {
        // 네이버 지도 스크립트 로드
        if (!window.naver) {
            const script = document.createElement("script");
            script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_MAP_CLIENT_ID}&submodules=panorama`;
            script.async = true;
            script.onload = initMap;
            document.head.appendChild(script);
        } else {
            initMap();
        }

        return () => {
            // Cleanup handled by Naver Map internally usually
        };
    }, []);

    const initMap = () => {
        if (!mapRef.current || !window.naver) return;

        const location = new naver.maps.LatLng(
            GLAMPING_LOCATION.lat,
            GLAMPING_LOCATION.lng
        );

        const mapOptions: naver.maps.MapOptions = {
            center: location,
            zoom: 17,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            logoControl: false,
            mapDataControl: false,
            mapTypeId: naver.maps.MapTypeId.HYBRID,
        };

        const map = new naver.maps.Map(mapRef.current, mapOptions);
        mapInstanceRef.current = map;

        // 마커 추가
        new naver.maps.Marker({
            position: location,
            map: map,
            title: GLAMPING_LOCATION.name,
            animation: naver.maps.Animation.BOUNCE
        });
    };

    const toggle3D = () => {
        if (!mapInstanceRef.current || !window.naver) return;
        const map = mapInstanceRef.current;

        if (!is3D) {
            // Switch to Satellite (Hybrid) View for "3D-like" experience
            map.setMapTypeId(naver.maps.MapTypeId.HYBRID);
        } else {
            // Switch back to Normal View
            map.setMapTypeId(naver.maps.MapTypeId.NORMAL);
        }
        setIs3D(!is3D);
    };

    const toggleRoadView = () => {
        // 네이버 지도 로드뷰 새 창 연결
        // 줌 레벨과 좌표를 포함하여 정확한 위치로 이동
        const center = mapInstanceRef.current?.getCenter();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const lat = center ? (center as any)._lat || (center as any).lat() : GLAMPING_LOCATION.lat;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const lng = center ? (center as any)._lng || (center as any).lng() : GLAMPING_LOCATION.lng;
        
        const url = `https://map.naver.com/v5/?c=${lng},${lat},17,0,0,0,dh`;
        window.open(url, '_blank');
    };

    return (
        <div className={`relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-border/50 shadow-2xl ${className}`}>
            <div ref={mapRef} className="w-full h-full" />
            
            {/* Custom Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                <button 
                    onClick={toggle3D}
                    className={`bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 ${is3D ? 'text-secondary ring-2 ring-secondary' : 'text-primary'}`}
                    title="Satellite View"
                >
                    {is3D ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> // Moon/Night icon for Hybrid
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg> // Layers icon
                    )}
                    <span className="sr-only">Satellite View</span>
                </button>
                
                <button 
                    onClick={toggleRoadView}
                    className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-primary transition-all hover:scale-110 active:scale-95 hover:text-secondary"
                    title="Road View (Naver Map)"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                    <span className="sr-only">Road View</span>
                </button>
            </div>

            {/* Overlay Info */}
            <div className="absolute bottom-6 left-6 z-10">
                <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-white/20">
                    <h3 className="font-serif font-bold text-lg text-primary mb-1">{GLAMPING_LOCATION.name}</h3>
                    <p className="text-sm text-muted-foreground">{GLAMPING_LOCATION.address}</p>
                    <div className="mt-3 flex gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary/10 text-secondary px-2 py-1 rounded-md">Beach Front</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md">Pine Forest</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 네이버 지도 타입 선언 (글로벌)
declare global {
    interface Window {
        naver: typeof naver;
    }
}
