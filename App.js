import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./screens/Home";
import Gallery from "./screens/Gallery";
import Profile from "./screens/Profile";

import HomeIcon from "./components/icons/HomeIcon";
import GalleryIcon from "./components/icons/GalleryIcon";
import ProfileIcon from "./components/icons/ProfileIcon";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: HomeIcon,
            }}
          />
          <Tab.Screen
            name="Gallery"
            component={Gallery}
            options={{
              tabBarIcon: GalleryIcon,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ProfileIcon,
            }}
          />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
      <Footer />
    </>
  );
}

