import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {black, primary} from '../utils/theme';
import Home from '../assets/Home';
import Search from '../assets/Search';
import File from '../assets/File';
import Profile from '../assets/Profile';
import Setting from '../assets/Setting';

type TabBarProps = {
  state: BottomTabBarProps['state'];
  descriptors: BottomTabBarProps['descriptors'];
  navigation: BottomTabBarProps['navigation'];
};

type Route = {
  key: string;
  name: string;
};

const TabBar: React.FC<TabBarProps> = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'black',
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
      }}>
      {state.routes.map((route: Route, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const Icon = () => {
          if (route.name === 'Home')
            return <Home color={!isFocused ? 'white' : primary} />;
          if (route.name === 'Search')
            return <Search color={!isFocused ? 'white' : primary} />;
          if (route.name === 'Project')
            return <File color={!isFocused ? 'white' : primary} />;
          if (route.name === 'Profile')
            return <Profile color={!isFocused ? 'white' : primary} />;
          if (route.name === 'Setting')
            return <Setting color={!isFocused ? 'white' : primary} />;
        };
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}
            key={route.key} // Added key to suppress React warning
          >
            <Icon />
            {isFocused && (
              <View
                style={{
                  backgroundColor: primary,
                  width: 5,
                  height: 5,
                  marginTop: 10,
                  borderRadius: 10,
                }}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
