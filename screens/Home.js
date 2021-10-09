import React from 'react';
import {Button, Text,View} from 'react-native';

 function Home(props)
{
    const{navigation} = props; 
    return(
        <View> 
            <Text>Home: app desarrollada por Chris</Text>
        </View>
    );
}

export default Home;