import { Amplify } from 'aws-amplify';
import { envConfig } from './config';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: envConfig.cognitoUserPoolId,
      userPoolClientId: envConfig.cognitoUserClientId,
      loginWith: {
        oauth: {
          domain: envConfig.cognitoDomain,
          scopes: [
            'email',
            'profile',
            'openid',
            'aws.cognito.signin.user.admin',
          ],
          redirectSignIn: [
            'rnexample://',
            `https://${envConfig.cognitoDomain}/oauth2/idpresponse`,
          ],
          redirectSignOut: [
            'rnexample://',
            `https://${envConfig.cognitoDomain}/oauth2/idpresponse`,
          ],
          responseType: 'code',
          providers: ['Google', 'Facebook', 'Apple'],
        },
      },
    },
  },
});

export default Amplify;
