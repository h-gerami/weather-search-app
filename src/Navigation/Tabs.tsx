import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/home/Home';
import Overview from '../pages/overview/Overview';
import Setting from '../pages/setting/Setting';
import {MyTabBar} from './MyTabbar';
import HomeHeader from './HomeHeader';
import Statistics from '../pages/statistics/Statistics';
import City from '../pages/city/City';
const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      initialRouteName="Home">
      <Tab.Screen name="Overview" component={Overview} />
      <Tab.Screen name="City" component={City} />
      <Tab.Screen
        options={{
          header: () => <HomeHeader />,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};
export default Tabs;
