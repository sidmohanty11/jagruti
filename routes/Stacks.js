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
import UserAccount from "../screens/UserAccount";
import NgoHomePage from "../screens/NgoHomePage";
import Events from "../screens/Events";
import NGODetails from "../screens/NGODetails";
import MyDonations from "../screens/MyDonations";
import UploadProfileImage from "../screens/UploadProfileImage";

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
        <Stack.Screen name="UserAccount" component={UserAccount} />
        <Stack.Screen name="NgoHomePage" component={NgoHomePage} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="NGODetails" component={NGODetails} />
        <Stack.Screen name="MyDonations" component={MyDonations} />
        <Stack.Screen
          name="UploadProfileImage"
          component={UploadProfileImage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;
