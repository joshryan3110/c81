import React from "react"
import BottomTabNavigator from "./tabNavigator"
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/profile"

const Drawer = createDrawerNavigator()

const DrawerNavigator = () =>{
  return(
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name = "Home" component = {BottomTabNavigator}/>
      <Drawer.Screen name = "Profile" component = {Profile}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator