import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import SplashScreen from "../screens/SplashScreen";
import DonateForm from "../screens/DonateForm";
import SelectRole from "../screens/SelectRole";
import Location from "../screens/Location";
import HomePage from "../screens/HomePage";
import NGODetails from "../screens/NGODetails";

const Stacks = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DonateForm" component={DonateForm} />
        <Stack.Screen name="SelectRole" component={SelectRole} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="NGODetails" component={NGODetails} />
        <Stack.Screen name="#" component={Location} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;
