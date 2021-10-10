
import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Home                        from './screens/Home';
import  Suma                        from './screens/Suma';
import  Resta                       from './screens/Resta';
import  Multiplicacion              from './screens/Multiplicacion';
import  Division                    from './screens/Division';
import  Factorial                   from './screens/Factorial';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import colores from './utils/colors';

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
    <Tab.Navigator initialRouteName='Home' 
                   screenOptions={{
                       tabBarActiveTintColor: colores.ENFASIS_COLOR,
                       tabBarStyle:
                            {
                                backgroundColor: colores.BG_COLOR
                            }
                       }} > 
        <Tab.Screen name="Home"             
                    component={Home} 
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon:
                        ({color,size})=>(
                            <Icon name='home' color={color} size={size} />
                        ),
                    }}
        />
        <Tab.Screen name="Suma"             
                    component={Suma} 
                    options={{
                        tabBarLabel: 'Suma',
                        tabBarIcon:
                        ({color,size})=>(
                            <Icon name='plus' color={color} size={size} />
                        ),
                    }}
                    />
        <Tab.Screen name="Resta"            
                    component={Resta} 
                    options={{
                        tabBarIcon:
                        ({color,size})=>(
                            <Icon name='minus' color={color} size={size} />
                        ),
                    }}
        />
        <Tab.Screen name="Multiplicacion"   
                    component={Multiplicacion}
                     options={{
                        tabBarIcon:
                        ({color,size})=>(
                        <Icon name='close-outline' color={color} size={size} />
                        ),
                    }}/>
        <Tab.Screen name="division"         
                    component={Division}
                    options={{
                        tabBarIcon:
                        ({color,size})=>(
                            <Icon name='division' color={color} size={size} />
                        ),
                    }} />
        <Tab.Screen name="factorial"        
                    component={    Factorial     }
                    options={{
                        tabBarIcon:
                        ({color,size})=>(
                            <Icon name='alert-box-outline' color={color} size={size} />
                        ),
                    }} />
    </Tab.Navigator>        
        );
}

