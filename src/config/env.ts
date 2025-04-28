import Config from 'react-native-config';
export const envConfig = {
  apiUrl: Config.API_URL,
  appCdnUrl: Config.AP_CDN_URL,
  cognitoUserPoolId: Config.COGNITO_USER_POOL_ID,
  cognitoUserClientId: Config.COGNITO_USER_CLIENT_ID,
  sentryDsnUrl: Config.SENTRY_DSN_URL,
  cognitoDomain: Config.COGNITO_DOMAIN,
};
