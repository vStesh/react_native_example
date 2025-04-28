import React from 'react';
import { PaperProvider } from 'react-native-paper';
import {
  createNavigationContainerRef,
  NavigationContainer,
  NavigationContainerRefWithCurrent,
} from '@react-navigation/native';
import {
  logger,
} from '../services';
import { RootNavigation, TCombinedParamList } from './RootNavigation';
import { getAppPermissions } from '../services/appPermissions/getAppPermissions';

export const navigationRef: NavigationContainerRefWithCurrent<TCombinedParamList> =
  createNavigationContainerRef();

export const RootNavigationContainer = () => {

  const handleNavigationReady = async () => {
    await getAppPermissions()
      .then(() => {
        // other start logic
      })
      .catch(() => {})
      .finally(() => {
        //
      });
  };

  logger.render('-----> RootNavigationContainer');
  return (
    <PaperProvider>
      <NavigationContainer
        onReady={handleNavigationReady}
        ref={navigationRef}>
        <RootNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
};
