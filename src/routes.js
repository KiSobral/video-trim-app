import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CameraTab from "./pages/CameraTab";
import VideoTab from "./pages/VideoTab";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Camera" component={CameraTab} />
        <Tab.Screen name="Player de vídeo" component={VideoTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
