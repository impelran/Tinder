import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import MatchesScreen from './Screens/MatchesScreen';
import ProfileScreen from './Screens/ProfileScreen';

type RootTabParamList = {
  Principal: undefined;
  Matches: undefined;
  Profil: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const NavigationBar: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Principal" component={HomeScreen} />
      <Tab.Screen name="Matches" component={MatchesScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default NavigationBar;