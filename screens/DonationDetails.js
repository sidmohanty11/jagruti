import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
  Link,
  StatusBar
} from 'react-native';
import FocusedStatusBar from '../components/FocusedStatusBar';
import BackIcon from '../assets/back.png';
import NotificationIcon from '../assets/images/notification.png';



const images = [
  require('../assets/images/rice.png'),
  require('../assets/logo.png'),
]
 

class DonationDetails extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }

  change(nativeEvent) {
    // console.log("nativeEvent:", nativeEvent)
    if(nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== this.state.active) {
      this.setState({
        active:slide
      })
      }
    }
  
  }

  render() {
    const { active } = this.state;
    return (
        <><FocusedStatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true} />
            <View style={styles.header}>
               
                <Image source={BackIcon} style={{alignSelf:'flex-start', top:7,left:-20}} />
                
               
              <Text style={{ fontSize: 24, alignSelf:'center' }}>DonationDetails</Text>
              <Image source={NotificationIcon} style={{alignSelf:'flex-end', top:-3}}/>
            </View>
            <SafeAreaView style={styles.container}>
                {/* <View style={{ padding: 20, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white' }}>HomeScreen</Text>
    </View> */}
                <View style={styles.wrap}>
                    <ScrollView
                        onScroll={({ nativeEvent }) => this.change(nativeEvent)}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        style={styles.wrap}
                    >
                        {images.map((e, index) => <Image
                            key={e}
                            resizeMode="stretch"
                            style={styles.wrap}
                            source={e} />
                        )}
                    </ScrollView>
                    <View style={styles.wrapDot}>
                        {images.map((e, index) => <Text
                            key={e}
                            style={active === index ? styles.dotActive : styles.dot}>●</Text>)}
                    </View>
                </View>

            </SafeAreaView></>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrap: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.35 // 25% window
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dot: {
    margin: 3,
    color: '#888'
  },
  dotActive: {
    margin: 3,
    color: 'black'
  },
  backBtn: {
    marginTop: 12,
    marginRight: 20,
  },
  header: {
    flexDirection:'row',
    
    paddingBottom: 25,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent:'space-around'
  },

});

export default DonationDetails;