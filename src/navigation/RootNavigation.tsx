import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  UnderConstructionScreen,
  HowItWorksScreen,
  PersonalInfoScreen,
  CreateAccountScreen,
  LogInScreen,
  UpgradeToPremiumScreen,
  TermsOfUseScreen,
  AppVersionScreen,
  DeleteAccountScreen,
  ResetPasswordScreen,
  EmailVerificationScreen,
  AboutAppScreen,
} from '../screens';
import { BottomTabParamList, TabBarNavigator } from './TabBarNavigation';
import { DeveloperStack } from './DeveloperStack';
import { useAppSelector, _howItWorksCompleted } from '../store';

export type RootStackParamList = {
  HowItWorksScreen: {};
  AuthStack: {};
  TabBarNavigator: {};
  DeveloperStack: {};
};


export type SettingsGroupParamList = {
  ConnectedAccountsScreen: {};
  UpgradeToPremiumScreen: {};
  PersonalInfoScreen: {};
  TermsOfUseScreen: {};
  AppVersionScreen: {};
  AboutAppScreen: {};
};

export type AuthGroupParamList = {
  CreateAccountScreen: {};
  EmailVerificationScreen: { userName: string };
  LogInScreen: {};
  ResetPasswordScreen: {};
  CheckYourEmailScreen: {};
  DeleteAccountScreen: {};
};


export type TCombinedParamList = RootStackParamList &
  BottomTabParamList &
  SettingsGroupParamList &
  AuthGroupParamList;

export const RootStack = createNativeStackNavigator<
  RootStackParamList &
    SettingsGroupParamList &
    AuthGroupParamList
>();

export const RootNavigation = () => {
  const isFirstStart = !useAppSelector(_howItWorksCompleted);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isFirstStart && (
        <RootStack.Screen
          name="HowItWorksScreen"
          component={HowItWorksScreen}
        />
      )}
      <RootStack.Screen name="TabBarNavigator" component={TabBarNavigator} />
      <RootStack.Screen name="DeveloperStack" component={DeveloperStack} />

      <RootStack.Group>
        <RootStack.Screen
          name="PersonalInfoScreen"
          component={PersonalInfoScreen}
        />
        <RootStack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
        <RootStack.Screen name="LogInScreen" component={LogInScreen} />
        <RootStack.Screen
          name="UpgradeToPremiumScreen"
          component={UpgradeToPremiumScreen}
        />
        <RootStack.Screen name="AboutAppScreen" component={AboutAppScreen} />
        <RootStack.Screen
          name="TermsOfUseScreen"
          component={TermsOfUseScreen}
        />
        <RootStack.Screen
          name="AppVersionScreen"
          component={AppVersionScreen}
        />
        <RootStack.Screen
          name="DeleteAccountScreen"
          component={DeleteAccountScreen}
        />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
        />
        <RootStack.Screen
          name="EmailVerificationScreen"
          component={EmailVerificationScreen}
        />
      </RootStack.Group>

      <RootStack.Screen name="AuthStack" component={UnderConstructionScreen} />
    </RootStack.Navigator>
  );
};
