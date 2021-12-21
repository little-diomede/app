import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Calender from "./Components/Pages/Calender";
import Counter from "./Components/Pages/Counter";
import Settings from "./Components/Pages/Settings";
import AboutUs from "./Components/Pages/AboutUs";
import Home from "./Components/Pages/Home";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: "#202124" }}
      >
        <Tab.Screen
          name="Calender"
          component={Calender}
          options={{
            tabBarLabel: "Calender",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="calendar-month"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Counter"
          component={Counter}
          options={{
            tabBarLabel: "Counter",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="counter" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cogs" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="About us"
          component={AboutUs}
          options={{
            tabBarLabel: "About us",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
