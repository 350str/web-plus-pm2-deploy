const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '..', '.env.deploy') });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPO,
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: `${DEPLOY_PATH}/frontend`,
      'post-deploy':
        '. "$HOME/.nvm/nvm.sh" 2>/dev/null || true; npm ci && npm run build',
    },
  },
};
