FROM node:20
WORKDIR /app

ENTRYPOINT [ ".docker/entrypoint.sh" ]
