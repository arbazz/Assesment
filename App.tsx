import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, Project} from './src/screens';
import TabBar from './src/components/TabBar';
import {View} from 'react-native';
import {black} from './src/utils/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <View style={{flex: 1, backgroundColor: black}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{headerShown: false}}
          tabBar={props => <TabBar {...props} />}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Project} />
          <Tab.Screen name="Project" component={StackNavigator} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Project" component={Project} />
    </Stack.Navigator>
  );
}

export default App;
