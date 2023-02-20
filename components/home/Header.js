import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require("../../assets/logoc.png")} />
      </TouchableOpacity>



      <View style={styles.iconContainer}>

<TouchableOpacity>
<Image source={require("../../assets/icons/icons8-plus-key-50.png")} style={styles.icon} />

</TouchableOpacity>

       
<TouchableOpacity>
<Image source={require("../../assets/icons/icons8-heart-50.png")} style={styles.icon} />

</TouchableOpacity>

<TouchableOpacity>
    <View style={styles.unreadBadge}>
    <Text style={styles.unreadbadgeText}> 11</Text>

    </View>
<Image source={require("../../assets/icons/icons8-facebook-messenger-50.png")} style={styles.icon} />

</TouchableOpacity>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 75,
    resizeMode: "contain",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    width:30,
    height:30,
    marginLeft:10,
    resizeMode:'contain',
    color:'white'

  },
unreadBadge:{

backgroundColor:'#FF3250',
position:'absolute',
left:20,
bottom:18,
width:25,
height:18,
borderRadius:25,
alignItems:'center',
justifyContent:'center',
zIndex:100



},
unreadbadgeText:{

    color: 'white',
    fontWeight:'600'

}

});

export default Header;
