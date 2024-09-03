#!/bin/sh

git config --global --add safe.directory /app
ln -sf .env.docker .env

yarn install

if [ "$DEV" = "1" ]; then
  exec yarn dev
else
  yarn build
  exec yarn preview
fi
