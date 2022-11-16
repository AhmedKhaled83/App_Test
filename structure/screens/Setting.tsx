import React ,{useState} from 'react';
import {View, Text, TouchableOpacity, StatusBar,StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import COLORS from '../constants/thems';
import { change_color } from '../stroe/DarkSlice';
import { change_language } from '../stroe/Langaues';
import { useSelector, useDispatch } from 'react-redux'
export default function Setting() {
    const state = useSelector((state :any) => state.Dark.Color)
    const lang =  useSelector((state :any) => state.Langauge.language)
    const dispatch = useDispatch();
  return (
    <>
    <StatusBar backgroundColor={state? (COLORS.black): (COLORS.white) }  barStyle={state? 'light-content' :'dark-content'} />
      <View style={[style.container_screen , {backgroundColor :state? (COLORS.black): (COLORS.white) }]}>
      
        <TouchableOpacity
           onPress={()=>{
            lang ==='en'?   dispatch(change_language('ar')) :   dispatch(change_language('en'))
         
        console.log(lang)
        }}
         style={style.container_TouchableOpacity}>
          <Text style={style.text}>{lang ==='en'? 'English' :"عربي"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>{
            dispatch(change_color(!state))
        console.log(state)
        }}
         style={style.container_TouchableOpacity}>
          <Text style={style.text}>{state? "Dark" :"Light"}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const style = StyleSheet.create({
  container_screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
    backgroundColor: COLORS.white,
  },

  container_TouchableOpacity: {
    width: '100%',
    height: RFValue(40),
    backgroundColor: COLORS.white_3,
    borderRadius: RFValue(10),
    paddingHorizontal: RFValue(20),
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical :RFValue(20)
  },
  text: {
    color: COLORS.black,
    fontSize: RFValue(15),
    fontWeight: '500',
  },
});
