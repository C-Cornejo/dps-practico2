
import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Home                        from './screens/Home';
import  Suma                        from './screens/Suma';
import  Resta                       from './screens/Resta';
import  Multiplicacion              from './screens/Multiplicacion';
import  Division                    from './screens/Division';
import  Factorial                   from './screens/Factorial';


const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
    <Tab.Navigator initialRouteName='Suma' >
        <Tab.Screen name="Home"             component={Home} />
        <Tab.Screen name="Suma"             component={Suma} />
        <Tab.Screen name="Resta"            component={Resta} />
        <Tab.Screen name="Multiplicacion"   component={Multiplicacion} />
        <Tab.Screen name="division"         component={Division} />
        <Tab.Screen name="factorial"        component={Factorial} />
    </Tab.Navigator>        
        );
}

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }