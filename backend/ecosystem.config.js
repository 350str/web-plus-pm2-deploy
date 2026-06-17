const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '..', '.env.deploy') });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPO,
} = process.env;

module.exports = {
  apps: [{ name: 'backend', script: './dist/app.js' }],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: `${DEPLOY_PATH}/backend`,
      'pre-deploy': `scp ${__dirname}/.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/backend/current/backend`,
      'post-deploy':
        'npm ci --omit=dev && npm run build && pm2 reload ecosystem.config.js --env production',
    },
  },
};
