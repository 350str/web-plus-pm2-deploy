#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"

cd /home/owner/web-plus-pm2-deploy/current/frontend
npm i
npm run build
pm2 startOrRestart ecosystem.config.js --env production