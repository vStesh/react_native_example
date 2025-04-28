declare module 'react-native-config' {
  export interface NativeConfig {
    ENV: string;
    APP_ID: string;
    APP_NAME: string;
    API_URL: string;
    AP_CDN_URL: string;
    COGNITO_USER_POOL_ID: string;
    COGNITO_USER_CLIENT_ID: string;
    SENTRY_DSN_URL: string;
    COGNITO_DOMAIN: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
