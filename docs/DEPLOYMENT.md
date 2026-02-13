# 배포 가이드 - 글램핑 프로젝트 (Deployment Guide - Glamping Project)

이 가이드는 `Glamping` 프로젝트를 우분투 서버의 공유 `infrastructure` 환경에 배포하는 절차를 설명합니다.

## 필수 조건 (Prerequisites)

- 서버에 `web-proxy-net` 도커 네트워크가 생성되어 있어야 합니다.
  ```bash
  docker network create web-proxy-net
  ```
  _(다른 프로젝트를 이미 실행 중이라면 보통 생성되어 있습니다.)_

## 1단계: 글램핑 앱 실행 (Step 1: Start Glamping Application)

**주의: Nginx 설정을 적용하기 전에 반드시 앱이 먼저 실행되어 있어야 합니다.**

`Glamping` 프로젝트 폴더로 이동하여 실행합니다.

1.  **빌드 및 실행**:
    ```bash
    cd /path/to/Glamping/glampingProject
    docker compose up -d --build
    ```
    _참고: 다음 단계에서 Nginx가 이 앱을 감지할 수 있도록 컨테이너가 켜져 있어야 합니다._

### 리드 수집 웹훅 설정 (선택)

멤버십 상담 폼 리드를 외부 시스템으로 전송하려면 `glampingProject`에 `.env`를 생성하고 아래 값을 설정합니다.

```bash
LEAD_WEBHOOK_URL=https://your-webhook-endpoint
LEAD_WEBHOOK_FORMAT=json   # json | slack
```

- `json`: `{ lead, message }` 형태로 전송
- `slack`: `{ text }` 형태로 전송

## 2단계: 인프라 설정 (Step 2: Infrastructure Configuration)

`infrastructure` 폴더로 이동합니다.

1.  **환경 변수 업데이트** (아직 하지 않은 경우):
    설정 스크립트를 실행하여 `.env` 파일을 갱신하고 글램핑 도메인을 추가합니다.

    ```bash
    cd /path/to/infrastructure
    ./setup-env.sh
    ```

    - **Primary Domain**: 메인 도메인 입력 (예: `psmo.community`).
    - **Glamping Domain**: `glamping.duckdns.org` 입력.

2.  **SSL 및 설정 생성**:
    초기화 스크립트를 실행하여 SSL 인증서를 요청하고 Nginx 설정을 생성합니다.

    ```bash
    ./init-ssl.sh
    ```

    - Nginx가 잠시 중단됩니다.
    - `glamping.duckdns.org`에 대한 인증서를 Certbot으로 요청합니다.
    - 템플릿에서 `nginx/conf.d/glamping.conf` 파일을 생성합니다.
    - Nginx를 재시작합니다.

## 3단계: 배포 확인 (Step 3: Verify Deployment)

1.  **접속 확인**:
    - 컨테이너가 실행 중인지 확인:
      ```bash
      docker ps | grep glamping
      ```
    - 브라우저에서 **https://glamping.duckdns.org** 접속.

## 트러블슈팅 (Troubleshooting)

- **502 Bad Gateway**:
  - `glamping-frontend` 컨테이너가 켜져 있는지 확인하세요.
  - Nginx 로그 확인:
    ```bash
    cd /path/to/infrastructure
    docker compose logs -f nginx
    ```
- **SSL 인증서 오류**:
  - 인증서 발급 실패 시 초기화 로그 확인:
    ```bash
    cd /path/to/infrastructure
    ./init-ssl.sh
    ```

Glamping 프로젝트 배포 설정 완료 보고서
이 문서는 Glamping 프로젝트를 Docker 기반의 기존 인프라(infrastructure 공유 네트워크)에 통합하기 위해 수행된 작업 내역과 배포 절차를 설명합니다.

✅ 작업 내역

1. Next.js 프로젝트 설정 (Glamping)
   Standalone 모드 활성화:
   next.config.ts
   에 output: 'standalone'을 추가하여 Docker 이미지 크기를 최적화했습니다.
   Dockerfile 생성:
   Multi-stage build를 적용하여 빌드 결과물만 실행 이미지에 포함시켰습니다.
   Alpine Linux 기반의 경량화된 Node.js 20 이미지를 사용했습니다.
   Docker Compose 설정:
   glamping-frontend 서비스를 정의했습니다.
   web-proxy-net 외부 네트워크에 연결하여 Nginx가 접근할 수 있도록 설정했습니다.
2. 인프라 설정 (Infrastructure)
   Nginx 템플릿 추가: glamping.duckdns.org 도메인을 처리하기 위한
   glamping.conf.template
   파일을 생성했습니다. (SSL, 보안 헤더 포함)
   스크립트 업데이트:
   setup-env.sh
   : Glamping 및 CampStation 도메인을 입력받도록 개선했습니다.
   init-ssl.sh
   : Glamping 도메인에 대한 SSL 인증서를 발급받도록 로직을 추가했습니다.
   apply-nginx-config.sh
   : 템플릿을 기반으로 실제 Nginx 설정 파일을 생성하는 로직을 추가했습니다.
   🚀 배포 가이드 (우분투 서버) -- 순서 중요!
   반드시 'Glamping 앱'을 먼저 켜야 Nginx 설정이 적용됩니다. (Nginx가 실행 중인 앱을 찾지 못하면 설정 로드를 실패하기 때문입니다.)

1단계: Glamping 앱 실행
Glamping 프로젝트 폴더로 먼저 이동합니다.

bash
cd glampingProject

# 컨테이너 빌드 및 실행

docker compose up -d --build
glamping-frontend 컨테이너가 켜져 있어야 합니다.

2단계: 인프라 구성 업데이트
이제 infrastructure 폴더로 이동하여 도메인 설정을 적용합니다.

bash
cd ../infrastructure

# 1. 환경 변수 설정 (최초 1회, 또는 도메인 추가 시)

./setup-env.sh

# -> Glamping Domain 입력란에 'glamping.duckdns.org' 입력

# 2. Nginx 설정 적용 및 SSL (이미 앱이 켜져 있으므로 성공합니다)

./init-ssl.sh

# (이미 SSL을 받은 상태라면 ./apply-nginx-config.sh 만 실행해도 됩니다)

3단계: 접속 확인
브라우저에서 **https://glamping.duckdns.org**로 접속하여 확인합니다.
