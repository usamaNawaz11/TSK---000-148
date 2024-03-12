import * as React from 'react';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Event from '../Confrence/Event';
import Network from '../Confrence/Network';
import Message from '../Confrence/Message';
import Platinium from '../Confrence/Platinium';
import Gold from '../Confrence/Gold';
import Silver from '../Confrence/Silver';
import Bronze from '../Confrence/Bronze';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../Component/Search';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Profile from '../Confrence/Profile';
import Messagedetail from '../Confrence/Messagedetail';
import Login from '../Confrence/Login';
import Edit from '../Confrence/Edit';
import Searchname from '../Confrence/Searchname';
import Eventsdetailblack from '../Confrence/Eventsdetailblack';
import Eventsdetalwhite from '../Confrence/Eventsdetailwhite';

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function CircularText({ text, color, focused }) {
  return (
    <LinearGradient
      colors={color}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.circularTextContainer}
    >
      <Text style={[styles.circularText, { color: focused ? 'black' : 'black' }]}>{text}</Text>
    </LinearGradient>
  );
}
function Bottom_stack_top() {
  return (
    <NavigationContainer >
    <Stack.Navigator headerMode="none" initialRouteName='Login'>
    <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='home' component={Tabbar}/>
      <Stack.Screen name="edit" component={Edit} />
      <Stack.Screen name="search" component={Searchname} />
      <Stack.Screen name="detail" component={Eventsdetailblack} />
      <Stack.Screen name="detailwhite" component={Eventsdetalwhite} />
      <Stack.Screen name="messagedetail" component={Messagedetail} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


function TopTabNavigator() {
  const [activeTab, setActiveTab] = React.useState('Platinum');

  useFocusEffect(
    React.useCallback(() => {
      setActiveTab('Platinum');
    }, [])
  );

  return (
    <>
      <Search></Search>
      <TopTab.Navigator
        initialRouteName="Platinum"
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'black',
          labelStyle: { display: 'none' },
          style: { backgroundColor: 'white', marginTop: 40 },
          indicatorStyle: { display: 'none' },
        }}
      >

        <TopTab.Screen
          name="Platinum"
          component={Platinium}
          options={{
            tabBarLabel: ({ focused }) => (
              <CircularText
                text="Platinum"
                color={focused ? ['#010004', '#007BA2', '#000004'] : ['#F4F4F4', '#F4F4F4', '#F4F4F4']}
              />
            ),
          }}
        />
        <TopTab.Screen
          name="Gold"
          component={Gold}
          options={{
            tabBarLabel: ({ focused }) => (
              <CircularText
                text="Gold"
                color={focused ? ['#65A30D', '#65A30D', '#65A30D'] : ['#F4F4F4', '#F4F4F4', '#F4F4F4']}
              />
            ),
          }}
        />
        <TopTab.Screen
          name="Silver"
          component={Silver}
          options={{
            tabBarLabel: ({ focused }) => (
              <CircularText
                text="Silver"
                color={focused ? ['#DADADA', '#DBDBDB', '#A3A3A3'] : ['#F4F4F4', '#F4F4F4', '#F4F4F4']}
              />
            ),
          }}
        />
        <TopTab.Screen
          name="Bronze"
          component={Bronze}
          options={{
            tabBarLabel: ({ focused }) => (
              <CircularText
                text="Bronze"
                color={focused ? ['#DADADA', '#DBDBDB', '#A3A3A3'] : ['#F4F4F4', '#F4F4F4', '#F4F4F4']}
              />
            ),
          }}
        />
      </TopTab.Navigator>
    </>
  );
}

function Tabbar() {
  return (
      <Tab.Navigator
        initialRouteName="event"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'event') {
              iconName = focused ? 'calendar-outline' : 'calendar';
            } else if (route.name === 'network') {
              iconName = focused ? 'search-outline' : 'search';
            }else if (route.name === 'message') {
              iconName = focused ? 'chatbubble-ellipses' : 'chatbox-ellipses-outline';
            } else if (route.name === 'sponsor') {
              iconName = focused ? 'cash-outline' : 'cash';
            } 
           else if (route.name === 'profile') {
            iconName = focused ? 'person-outline' : 'person';
          } 

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'violet',
          inactiveTintColor: 'black',
          style: { backgroundColor: 'white' }, // Set background color for all tabs
        }}
      >
        <Tab.Screen name="event" component={Event} options={{ headerShown: false }} />
        <Tab.Screen name="network" component={Network} options={{ headerShown: false }} />
        <Tab.Screen name="sponsor" component={TopTabNavigator} options={{ headerShown: false }} />
        <Tab.Screen name="message" component={Message} options={{ headerShown: false }} />
        <Tab.Screen name="profile" component={Profile} options={{ headerShown: false }} />
       
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  circularTextContainer: {
    width: 89,
    height: 39,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
  },
  circularText: {
    fontSize: 12,
  },
});

export default Bottom_stack_top;
