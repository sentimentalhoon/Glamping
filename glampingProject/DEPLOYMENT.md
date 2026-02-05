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
