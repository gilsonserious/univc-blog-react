import React from "react";
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Routes from "./src/routes";

export default function App(){
  return(
<>
<NavigationContainer>
  <StatusBar backgroundColor="#032915" barStyle="light-content" />
 <Routes/>
 </NavigationContainer>
</>
  )
}

