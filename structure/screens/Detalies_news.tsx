import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import COLORS from '../constants/thems';
import SharedStyles from '../constants/Share_style';
import {RFValue} from 'react-native-responsive-fontsize';
import Header_back_component from '../cmponents/Header_back_component';
import {useRoute} from '@react-navigation/native';

const Detalies_news = () => {
  const route: any = useRoute();

  const [items, setitems] = useState(route.params.item);
  return (
    <>
      <SafeAreaView style={SharedStyles.screenContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header_back_component />

          <View style={styles.image_container}>
            <Image
              source={{uri: items.urlToImage}}
              style={styles.Image_style}
              resizeMode={'cover'}
            />
          </View>

          <Text style={styles.text_title}>{items.title}</Text>

          <Text style={styles.text_description}> {items.description} </Text>
          <Text style={styles.text_description}> {items.content} </Text>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL(items.url);
            }}>
            <Text style={[styles.text_auther_name, {color: COLORS.grey}]}>
              <Text style={styles.text_auther_name}>Link News :</Text>{' '}
              {items.url}
            </Text>
          </TouchableOpacity>
          <Text style={[styles.text_auther_name, {color: COLORS.grey}]}>
            <Text style={styles.text_auther_name}>Auther Name :</Text>{' '}
            {items.author}
          </Text>

          <Text style={styles.text_date}> {items.publishedAt} </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Detalies_news;
const styles = StyleSheet.create({
  image_container: {
    width: '100%',
    height: RFValue(250),
    marginTop: RFValue(20),
    // backgroundColor:"red"
  },
  Image_style: {
    width: '100%',
    height: RFValue(250),
    borderRadius: RFValue(10),
  },

  text_title: {
    fontSize: RFValue(14),
    color: COLORS.black,
    fontWeight: '500',
    marginHorizontal: RFValue(5),
    marginTop: RFValue(10),
  },

  text_description: {
    fontSize: RFValue(11),
    color: COLORS.grey,
    fontWeight: '500',
    marginHorizontal: RFValue(5),
    marginTop: RFValue(15),
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
