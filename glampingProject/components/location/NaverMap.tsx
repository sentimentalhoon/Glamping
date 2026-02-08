"use client";

import { useEffect, useRef } from "react";

// TODO: 환경변수에서 네이버 지도 API 키를 가져오도록 변경
// 현재는 정적 데이터로 샘플 좌표를 사용
const NAVER_MAP_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || "";

// TODO: 실제 글램핑장 좌표로 변경 (DB에서 가져오거나 환경변수로 설정)
const GLAMPING_LOCATION = {
    lat: 37.5665, // 위도 (샘플: 서울)
    lng: 126.978, // 경도 (샘플: 서울)
    name: "루미나 글램핑",
    address: "경기도 가평군 청평면 호반로 000-00",
};

interface NaverMapProps {
    className?: string;
}

export function NaverMap({ className = "" }: NaverMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<naver.maps.Map | null>(null);

    useEffect(() => {
        // 네이버 지도 스크립트 로드
        const script = document.createElement("script");
        script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_MAP_CLIENT_ID}`;
        script.async = true;
        script.onload = initMap;
        document.head.appendChild(script);

        return () => {
            // Cleanup
            if (mapInstanceRef.current) {
                mapInstanceRef.current.destroy();
            }
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
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };

        const map = new naver.maps.Map(mapRef.current, mapOptions);
        mapInstanceRef.current = map;

        // 마커 추가
        const marker = new naver.maps.Marker({
            position: location,
            map: map,
            title: GLAMPING_LOCATION.name,
        });

        // 정보창 (InfoWindow)
        const infoWindow = new naver.maps.InfoWindow({
            content: `
                <div style="padding: 12px; min-width: 200px;">
                    <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${GLAMPING_LOCATION.name}</h3>
                    <p style="margin: 0; font-size: 13px; color: #666;">${GLAMPING_LOCATION.address}</p>
                </div>
            `,
        });

        // 마커 클릭 시 정보창 열기
        naver.maps.Event.addListener(marker, "click", () => {
            if (infoWindow.getMap()) {
                infoWindow.close();
            } else {
                infoWindow.open(map, marker);
            }
        });

        // 초기에 정보창 열기
        infoWindow.open(map, marker);
    };

    return (
        <div
            ref={mapRef}
            className={`w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden ${className}`}
        />
    );
}

// 네이버 지도 타입 선언 (글로벌)
declare global {
    interface Window {
        naver: typeof naver;
    }
}
