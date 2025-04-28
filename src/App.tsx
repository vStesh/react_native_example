import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import * as Sentry from '@sentry/react-native';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { RootNavigationContainer } from './navigation';
import { envConfig } from './config';
import { Amplify } from 'aws-amplify';
import { useAppRestart } from './hooks';
import { logger } from './services';
import Config from 'react-native-config';

Sentry.init({
  dsn: __DEV__
    ? 'https://<development-sentry-dsn-url>'
    : envConfig.sentryDsnUrl,
  tracesSampleRate: 1.0,
});

Amplify.getConfig();

function App(): React.JSX.Element {
  const { rebuildAppState } = useAppRestart();

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
          children={bootstrapped => {
            if (!bootstrapped) {
              logger.info('-----> PERSIST STATE LOADING ...... <------');
              return;
            }

            logger.info('-----> PERSIST STATE LOADED <------');
            logger.info('Config: ', Config);
            rebuildAppState();
            return <RootNavigationContainer />;
          }}
        />
      </Provider>
    </SafeAreaProvider>
  );
}

export default Sentry.wrap(App);
