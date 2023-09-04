import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './src/screens';
import TabBar from './src/components/TabBar';
import {View} from 'react-native';
import { black } from './src/utils/theme';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <View style={{flex: 1, backgroundColor: black}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{headerShown: false}}
          tabBar={props => <TabBar {...props} />}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Message" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
