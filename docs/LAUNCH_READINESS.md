# Glamping 런칭 준비도 점검 문서

## 목적
- 현재 프로젝트를 홍보/광고 유입에 안전하게 사용할 수 있는지 점검한다.
- 리드 누락, 법적 리스크, 성능 이슈를 사전에 차단한다.

## 현재 상태 요약
- 페이지 구조는 회원권 전환 중심으로 정리됨.
- 상담 신청 폼과 `/api/inquiries` 리드 수집 엔드포인트가 구현됨.
- `npm run lint` 및 `npm run build`(webpack) 통과.

## 현재 문제점 (우선순위 순)

### P0 (광고 집행 전 반드시 해결)
- 실제 리드 수신 경로가 미확정일 수 있음.
  - `LEAD_WEBHOOK_URL` 설정/운영 검증이 필요.
- 연락처/대표번호가 실제 운영 번호인지 확인 필요.
  - 예: Footer에 `031-1234-5678` 표기 중.
- 개인정보처리방침/이용약관 실문서 링크 부재.
  - 현재는 푸터에서 직접 노출/연결되지 않음.

### P1 (초기 광고 집행 전 해결 권장)
- SEO/검증값 placeholder 존재.
  - `google-site-verification-placeholder`
  - `naver-site-verification-placeholder`
- canonical/metadataBase/robots/sitemap 도메인값 검증 필요.
  - `https://the-western-glamping.com` 기준으로 고정되어 있음.
- 지도 API 키/운영 좌표 검증 필요.
  - `NEXT_PUBLIC_NAVER_MAP_CLIENT_ID` 미설정 시 기능 저하 가능.

### P2 (확장 집행 전 개선)
- 리드 수집 이벤트 분석 체계(GA4/Meta Pixel/서버 이벤트) 미정.
- 광고 캠페인별 랜딩 변형(A/B) 구조 미흡.
- 후기/신뢰 지표/실증 데이터(실제 수치) 강화 필요.

## 즉시 실행 체크리스트

### 1) 리드 수집 안정성
- `.env` 설정
  - `LEAD_WEBHOOK_URL`
  - `LEAD_WEBHOOK_FORMAT=json` 또는 `slack`
- 테스트 시나리오 5회 이상 수행
  - 정상 제출
  - 필수값 누락
  - 잘못된 전화번호
  - 중복 제출
  - 봇(honeypot) 입력
- 실패 시 운영 알림 채널 확보
  - Slack/문자/이메일 중 1개 이상

### 2) 법적/신뢰 요소
- 개인정보처리방침 페이지 생성 및 푸터 링크 연결
- 이용약관 페이지 생성 및 푸터 링크 연결
- 사업자 정보(상호/대표자/사업자번호/통신판매) 노출 여부 확정

### 3) 콘텐츠 정합성
- 주소/전화/이메일/브랜드 카피 단일화
- 멤버십 상품명/가격 범위/응대 시간 실제값 반영
- 허위/과장 소지 문구 검토

### 4) 기술/운영
- 프로덕션 빌드 기준은 `webpack` 사용 유지
  - 현재 환경에서 Turbopack 빌드 타임아웃 재현됨
- 오류 모니터링 도구(Sentry 등) 연결
- 서버 로그 보존 정책 확인

## 배포 전 최종 게이트
- 아래 5개가 모두 충족되면 광고 집행 가능
1. 리드 수집 실전 테스트 통과
2. 법적 문서 링크/동의 문구 완비
3. 연락처/도메인/SEO 검증값 실값 반영
4. 모바일 실기기 폼 제출 QA 통과
5. 담당자 응대 SLA 확정 (예: 24시간 이내)

## 참고 파일
- `glampingProject/app/api/inquiries/route.ts`
- `glampingProject/components/home/PrivateInquiry.tsx`
- `glampingProject/app/layout.tsx`
- `glampingProject/app/sitemap.ts`
- `glampingProject/app/robots.ts`
