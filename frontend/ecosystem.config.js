require("dotenv").config({ path: "./.env.deploy" });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPO,
} = process.env;

const NVM_INIT = 'export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"';

module.exports = {
  apps: [
    {
      name: "frontend",
    },
  ],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: `${DEPLOY_PATH}`,
      "post-deploy": `${NVM_INIT} && cd ${DEPLOY_PATH}/source/frontend && npm i && npm run build`,
    },
  },
};
