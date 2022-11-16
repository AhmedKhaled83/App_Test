import React from 'react'
import {   Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import COLORS from '../constants/thems';
import { useNavigation } from '@react-navigation/native';
function Header_back_component() {
    const navigation = useNavigation()
    return (
        <>
            <TouchableOpacity
                onPress={() => { navigation.goBack() }}
                style={styles.container_back} >
                <Text style={styles.text_back} >Back</Text>


            </TouchableOpacity>




        </>

    )
}

export default Header_back_component


const styles = StyleSheet.create({

    container_back: {
        // width: "25%",
        height: RFValue(25),
        backgroundColor: COLORS.white,
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        marginTop: RFValue(10),
        marginRight: RFValue(-5)
    },
    text_back: {
        color: COLORS.black,
        fontSize: RFValue(15),
        marginRight: RFValue(10)
    }

})