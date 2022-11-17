import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,RefreshControl
} from 'react-native';
import COLORS from '../constants/thems';
import SharedStyles from '../constants/Share_style';
import Newscomponent from '../cmponents/News_component';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

function Home(_props: any) {
  const navigation: any = useNavigation();
  const [news_array, setnews_array] = useState();

  const state = useSelector((state: any) => state.Dark.Color);
  
  const lang:string =  useSelector((state :any) => state.Langauge.language)
  const [keySearch, setkeySearch] = useState('');

  const [refreshing ,setrefreshing] = useState(false); 
  useEffect(() => {
  setrefreshing(true)
    data_fun();
   
  }, [lang]);

  const data_fun = async () => {
    try {
      const getdata: any = await fetch(
        `https://newsapi.org/v2/everything?q=20%&language=${lang}&apiKey=219e951344c34992855c717adffa06f7`,
      );
      const data: any = await getdata.json();
      setnews_array(data.articles);
      setrefreshing(false)
    } catch (error) {
      console.log(error);
    }
  };

  const search_fun = async (keySearch: string) => {
    try {
      const getdata: any = await fetch(
        `https://newsapi.org/v2/everything?q="${keySearch}"&searchIn=title&apiKey=219e951344c34992855c717adffa06f7`,
      );
      const data: any = await getdata.json();
      setnews_array(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SafeAreaView
        style={[
          SharedStyles.screenContainer,
          {backgroundColor: state ? COLORS.black : COLORS.white},
        ]}>
          { news_array?(
        <FlatList
          data={news_array}
          refreshing={true}
          refreshControl={
            <RefreshControl colors={["#0ff", "#689f38"]} refreshing={refreshing} onRefresh={data_fun} />
          }
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              {/* =========================StatusBar=================== */}
              <StatusBar
                backgroundColor={state ? COLORS.black : COLORS.white}
                barStyle={state ? 'light-content' : 'dark-content'}
              />

              {/* =========================container_sreach_buttondrawer=================== */}
              <View style={style.container_sreach_buttondrawer}>
           {lang === 'en'? (<>
           
                {/* =========================drawer english=================== */}
                <TouchableOpacity
                  onPress={() => {
                    navigation.openDrawer();
                    // navigation.navigate('Setting')
                  }}
                  style={[
                    style.buttom_darwer,
                    {backgroundColor: state ? COLORS.white : COLORS.black},
                  ]}>
                  <Text
                    style={[
                      style.drawer_text,
                      {color: state ? COLORS.black : COLORS.white},
                    ]}>
                    Drawer
                  </Text>
                </TouchableOpacity>

                {/* =========================search english=================== */}
                <TouchableOpacity style={style.search}>
                  <TextInput
                    style={style.text_input}
                    placeholder={'Search'}
                    placeholderTextColor={'#000'}
                    multiline={false}
                    value={keySearch}
                    onChangeText={value => {
                      setTimeout(() => {
                        search_fun(value);
                      }, 1000);
                      setkeySearch(keySearch => (keySearch = value));
                    }}
                  />
                  
                </TouchableOpacity>
               </> 



               ):(
<>
              {/* =========================search arbic=================== */}
              <TouchableOpacity style={style.search}>
             <TextInput
               style={style.text_input}
               placeholder={'بحث'}
               placeholderTextColor={'#000'}
               multiline={false}
               value={keySearch}
               onChangeText={value => {
                 setTimeout(() => {
                   search_fun(value);
                 }, 1000);
                 setkeySearch(keySearch => (keySearch = value));
               }}
             />
             
           </TouchableOpacity>
           {/* =========================drawer arbic =================== */}
           <TouchableOpacity
             onPress={() => {
               navigation.openDrawer();
               // navigation.navigate('Setting')
             }}
             style={[
               style.buttom_darwer,
               {backgroundColor: state ? COLORS.white : COLORS.black},
             ]}>
             <Text
               style={[
                 style.drawer_text,
                 {color: state ? COLORS.black : COLORS.white},
               ]}>
               القائمه
             </Text>
           </TouchableOpacity>

        
          </> 


                
               )}
              </View>
            </View>
          }
          contentContainerStyle={[
            style.contentContainer,
            {backgroundColor: state ? COLORS.black : COLORS.white},
          ]}
          renderItem={({item, index}) => (
            <Newscomponent
              onPress={() => {
                navigation.navigate('Detalies_news', {item: item});
              }}
              image={{uri: item.urlToImage}}
              title={item.title}
              description={item.description}
              author={item.author}
              date={item.publishedAt}
            />
          )}
        />
          ):(
            <ActivityIndicator color ="#f00" size={RFValue(30)} style={{alignSelf:'center',marginTop:RFValue(200)}}/>
          )}
      </SafeAreaView>
    </>
  );
}

export default Home;
const style = StyleSheet.create({
  contentContainer: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: COLORS.white,
    paddingBottom: RFValue(20),
  },
  container_sreach_buttondrawer: {
    width: '100%',

    height: RFValue(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: RFValue(10),
  },
  search: {
    width: '80%',
    height: RFValue(40),
    backgroundColor: COLORS.white_3,
    alignSelf: 'center',
    borderRadius: RFValue(8),
    alignItems: 'center',
    paddingHorizontal: RFValue(10),
  },

  text_input: {
    width: '100%',
    height: RFValue(40),
    borderRadius: RFValue(8),
    color: '#000',
    fontSize: RFValue(12),
  },

  buttom_darwer: {
    width: '15%',
    height: RFValue(35),
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(5),
  },
  drawer_text: {fontSize: RFValue(10), color: COLORS.white, fontWeight: '500'},
});
function alert(_status: any) {
  throw new Error('Function not implemented.');
}
