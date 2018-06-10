FROM nginx:latest
LABEL maintainer Brian Wiborg <baccenfutter@c-base.org>

COPY dist /usr/share/nginx/html