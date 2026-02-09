"use client";

import { useEffect, useRef, useState } from "react";

// TODO: 환경변수에서 네이버 지도 API 키를 가져오도록 변경
// 현재는 정적 데이터로 샘플 좌표를 사용
const NAVER_MAP_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || "";

// TODO: 실제 글램핑장 좌표로 변경 (DB에서 가져오거나 환경변수로 설정)
const GLAMPING_LOCATION = {
    lat: 35.6536, // 부안 고사포 해수욕장 인근
    lng: 126.5442, 
    name: "루미나 프라이빗 에스테이트",
    address: "전북 부안군 변산면 노루목길 8-8",
};

interface NaverMapProps {
    className?: string;
}

export function NaverMap({ className = "" }: NaverMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<naver.maps.Map | null>(null);
    const [is3D, setIs3D] = useState(false);

    useEffect(() => {
        // 네이버 지도 스크립트 로드
        if (!window.naver) {
            const script = document.createElement("script");
            script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_MAP_CLIENT_ID}&submodules=panorama`;
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
            zoom: 16,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            logoControl: false,
            mapDataControl: false,
            mapTypeId: naver.maps.MapTypeId.NORMAL,
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
            // 3D Mode On
            map.morph({
                pitch: 60, // 기울기
                bearing: 45, // 회전
                zoom: 17
            }, { duration: 1000, easing: "easeOutCubic" });
        } else {
            // 2D Mode On
            map.morph({
                pitch: 0,
                bearing: 0,
                zoom: 16
            }, { duration: 1000, easing: "easeOutCubic" });
        }
        setIs3D(!is3D);
    };

    const toggleRoadView = () => {
        // 네이버 지도 로드뷰 새 창 연결
        const url = `https://map.naver.com/v5/?c=${GLAMPING_LOCATION.lng},${GLAMPING_LOCATION.lat},17,0,0,0,dh`;
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
                    title="3D View"
                >
                    {is3D ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                    )}
                    <span className="sr-only">3D View</span>
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
