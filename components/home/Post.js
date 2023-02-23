import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Divider} from 'react-native-elements'
import { TouchableOpacity } from 'react-native';


const Post = ({post}) => {
    return (
        <View style={{marginBottom:30}}>
            <Divider width={1} orientation='vertical' style={{color:'white'}} />
           <PostHeader post ={post} />
           <PostImage post={post}/>
           <View style={{marginHorizontal:15,marginTop:10}}>    
           <PostFooter/>
           </View>
        </View>
    );
}


const PostHeader = ({post}) => (

<View style={{flexDirection:'row', 
justifyContent:'space-between', 
margin:5, alignItems:'center'}}>

<View style={{flexDirection:'row', alignItems:'center'}}>
<Image source={{uri:post.profile_picture}} style={styles.story} />

<Text style={{color:'white'}}>{post.user}</Text>

</View>

<Text style={{color:'white', fontWeight:'900'}}>...</Text>



</View>

)

const PostImage =({post}) =>(
    <View style ={{width:'100', height:450,}}>

<Image source ={{uri: post.imageUrl}} style={{height:'100%',
    resizeMode: 'cover'}} />
    </View>
   

)



const PostFooter =() => (
<View style={{flexDirection:'row'}}>
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl}/>
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl}/>
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl}/>
    </View>



)


const Icon =({imgStyle,imgUrl}) => (

<TouchableOpacity>

<Image style={imgStyle} source={{uri:imgUrl}}/>

</TouchableOpacity>

)

const postFooterIcons=[

{
name:'Like',
imageUrl:'/assets/icons/icons8-heart-50.png',
likeImageUrl:'https://',
},

{name:'Comment',
   imageUrl: '/assets/icons/icons8-heart-50.png' 

},
{name:'share',
   imageUrl: 'https://' 

},

{
    name:'Save',
   imageUrl: 'https://' 

},

]











const styles = StyleSheet.create({

    story:{

        width:35,
        height:35,
        borderRadius:50,
        marginLeft:6,
        borderWidth:1.6,
        borderColor:'#ff8501'

    },
    footerIcon:{
        width:33,
        height:33

    }


})

export default Post;
