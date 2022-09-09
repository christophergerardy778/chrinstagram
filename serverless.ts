// eslint-disable-next-line import/no-import-module-exports
import { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'cg-app',

  package: {
    individually: true,
    excludeDevDependencies: true,
  },

  frameworkVersion: '3',

  plugins: [
    'serverless-esbuild',
    'serverless-offline',
  ],

  custom: {
    esbuild: {
      bundle: true,
      minify: true,
      exclude: ['pg-native'],
      target: 'node14',
    },
  },

  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
  },

  functions: {
    users: {
      handler: './src/example/infrastructure/lambda/createExample.handler',
      events: [
        {
          http: {
            method: 'post',
            path: '/users/uno',
            cors: true,
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
