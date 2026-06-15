require('dotenv').config({ path: '.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPO,
} = process.env;

module.exports = {
  apps: [{
    name: 'frontend',
    script: 'node_modules/react-scripts/scripts/start.js',
    env: {
      NODE_ENV: 'production',
    },
  }],

  deploy: {
    production: {
      key: '~/.ssh/deploy.key',
      user: DEPLOY_USER,
      host: [DEPLOY_HOST],
      ssh_options: 'StrictHostKeyChecking=no',
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      'post-setup': 'npm run build',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};