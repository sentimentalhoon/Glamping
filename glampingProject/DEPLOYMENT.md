# Deployment Guide - Glamping Project

This guide outlines the steps to deploy the Glamping project to your Ubuntu server using the shared `infrastructure` setup.

## Prerequisites

- The server must have the `web-proxy-net` Docker network created.
  ```bash
  docker network create web-proxy-net
  ```
  _(This likely already exists if you are running other projects)._

## Step 1: Infrastructure Configuration

Navigate to your **`infrastructure`** workspace.

1.  **Update Environment Config**:
    Run the setup script to generate a new `.env` file including the Glamping domain.

    ```bash
    cd /path/to/infrastructure
    ./setup-env.sh
    ```

    - **Primary Domain**: Enter your main domain (e.g., `psmo.community`).
    - **Email**: Enter your email for Certbot.
    - **CampStation Domain**: (Enter if applicable, or skip).
    - **Glamping Domain**: Enter `glamping.duckdns.org`.

2.  **Generate SSL & Configs**:
    Run the initialization script to request SSL certificates and generate Nginx configurations.
    ```bash
    ./init-ssl.sh
    ```

    - This will stop Nginx briefly.
    - It triggers Certbot to request a certificate for `glamping.duckdns.org` (and others).
    - It generates `nginx/conf.d/glamping.conf` from the template.
    - It restarts Nginx.

## Step 2: Deploy Glamping Application

Navigate to your **`Glamping`** workspace.

1.  **Build and Start**:

    ```bash
    cd /path/to/Glamping/glampingProject
    docker compose up -d --build
    ```

2.  **Verify**:
    - Check if the container is running:
      ```bash
      docker ps | grep glamping
      ```
    - Visit **https://glamping.duckdns.org** in your browser.

## Troubleshooting

- **502 Bad Gateway**:
  - Ensure the `glamping-frontend` container is running.
  - Check Nginx logs:
    ```bash
    cd /path/to/infrastructure
    docker compose logs -f nginx
    ```
- **SSL Issues**:
  - If the certificate failed, check initialization logs:
    ```bash
    cd /path/to/infrastructure
    ./init-ssl.sh
    ```
