import { StyleSheet } from 'react-native';

import {responsiveHeight, responsiveWidth } from '../../../constants/dimensions';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    paddingTop: (Platform.OS === 'iOS') ? 20 : 0
     
    },
  FlatList_Item: {
    padding: 10,
    fontSize: 18,
    height: 44,
},
 
header_footer_style:{
  width: '100%', 
  height: 44, 
  backgroundColor: '#56c9ca', 
  alignItems: 'center', 
  justifyContent: 'center',
 flexDirection:'row'
},
 
textStyle:{
  textAlign: 'center', 
  color: '#fff', 
  fontSize: 21
},
Deailsview:{
  width:'23%',
  borderRightWidth:2,
  borderColor:'#fff'
},
lastview:{
  width:'23%',
 overflow:'hidden',
 flexDirection:'row',
 alignSelf:'center'
},
lastHeader:{
  width:'23%',
 overflow:'hidden',
 alignSelf:'center'
},
Desview:{
  width:'30%',
  borderRightWidth:2,
  borderColor:'#fff'
},
itemstyle:{
  width: '100%', 
  height: 44, 
  alignItems: 'center', 
  justifyContent: 'center',
 flexDirection:'row',
 borderBottomColor:'#000',
 borderBottomWidth:1,
},
textItem:{
  textAlign: 'center', 
  color: '#000', 
  fontSize: 16,
  overflow:'hidden'
},
itemview:{
  width:'23%',
overflow:'hidden',
alignSelf:'center',

},
itemDesview:{
  width:'30%',
 overflow:'hidden'
},
crossimages:{
  height:30,
  width:30
},
Editimages:{
  height:20,
  width:20,
  marginTop:6,
},
ImgView:{
  borderRightWidth:2,
  borderColor:'#fff',
  marginHorizontal:15
},
Nodata:{
alignSelf:'center' ,
marginTop:20 
},
nodataText:{
fontSize:20
}
});

export default styles;
