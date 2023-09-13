import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, RefreshControl, ScrollView,Button } from 'react-native';

const Main = ({navigation})=> {
    return(
        <View>
            <Text style={{ fontSize: 25, color: 'black' }}>Main</Text>
            <Button onPress={() => navigation.navigate('sign-in')} title="signin"></Button>
        </View>
    )
}

export default Main;