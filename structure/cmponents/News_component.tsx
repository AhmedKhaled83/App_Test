import React  from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import COLORS from '../constants/thems';
import {RFValue} from 'react-native-responsive-fontsize';
import { useSelector, useDispatch } from 'react-redux'
const Newscomponent = (props: any) => {
  const state = useSelector((state :any) => state.Dark.Color)
  const dispatch = useDispatch();
  return (
    <>
      <TouchableOpacity onPress={props.onPress} style={[styles.container_screen,{
        backgroundColor :state? (COLORS.black): (COLORS.white)
      }]}>
        <View style={styles.container_image}>
          <Image
            source={props.image}
            style={styles.Image_style}
            resizeMode={'cover'}
          />
        </View>
        <Text numberOfLines={2} style={[styles.text_title ,{color:state?(COLORS.white): (COLORS.black) } ]}>
          {props.title}
        </Text>

        <Text numberOfLines={4} style={[styles.text_description,{color:state?(COLORS.white): (COLORS.black) } ]}>
          {props.description}
        </Text>

        <Text style={[styles.text_auther_name,{color:state?(COLORS.white): (COLORS.black) }]}>{props.author}</Text>

        <Text style={[styles.text_date,{color:state?(COLORS.white): (COLORS.black) }]}>{props.date}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Newscomponent;

const styles = StyleSheet.create({
  container_screen: {
    width: '100%',
    backgroundColor: COLORS.white_3,
    borderRadius: RFValue(10),
    paddingBottom: RFValue(10),
    marginVertical: RFValue(15),
    shadowColor: COLORS.white_3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
  },

  container_image: {
    width: '100%',
    height: RFValue(120),
  },
  Image_style: {
    width: '100%',
    height: RFValue(120),
    borderTopRightRadius: RFValue(10),
    borderTopLeftRadius: RFValue(10),
  },
  text_title: {
    fontSize: RFValue(14),
    color: COLORS.black,
    fontWeight: '500',
    marginHorizontal: RFValue(5),
  },

  text_description: {
    fontSize: RFValue(11),
    color: COLORS.grey,
    fontWeight: '500',
    marginHorizontal: RFValue(5),
  },

  text_auther_name: {
    marginTop: RFValue(10),
    fontSize: RFValue(13),
    color: COLORS.black,
    fontWeight: '500',
    marginHorizontal: RFValue(5),
  },
  text_date: {
    alignSelf: 'flex-start',
    marginTop: RFValue(3),
    fontSize: RFValue(12),
    color: COLORS.grey,
    fontWeight: '500',
    marginHorizontal: RFValue(5),
  },
});
