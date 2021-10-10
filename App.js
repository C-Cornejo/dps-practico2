import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';

function App(){
    return(
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>

    );
  }



export default App;

