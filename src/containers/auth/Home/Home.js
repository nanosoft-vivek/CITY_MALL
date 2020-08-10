
import React, { Component } from 'react';
import {
  Text,
   View, 
   TouchableOpacity,
  Image,
   SafeAreaView,
  FlatList
} from 'react-native';
import {deleteDetail } from "../../../actions/user-actions-types"
import styles from './styles';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:''
    }
  }

  render_FlatList_header = () => {
 
    var header_View = (
 
    <View style={styles.header_footer_style}>
 
      <View style={styles.Deailsview}>
      <Text style={styles.textStyle}> Name</Text>
      </View>
      <View style={styles.Deailsview}>
      <Text style={styles.textStyle}>Breed</Text>
      </View>
      <View style={styles.Desview}>
      <Text style={styles.textStyle}>Description</Text>
      </View>
      <View style={styles.lastHeader}>
      <Text style={styles.textStyle}>Action</Text>
      </View>
 
    </View>
 
    );
 
    return header_View ;
 
  };
  renderItem = (item) => {
    return(
      <View style={styles.itemstyle}>
 
        <View style={styles.itemview}>
          <Text style={styles.textItem}> {item.item.name}</Text>
        </View>
        <View style={styles.itemview}>
          <Text style={styles.textItem}>{item.item.breed}</Text>
        </View>
        <View style={styles.itemDesview}>
          <Text style={styles.textItem}>{item.item.description}</Text>
        </View>
        <View style={styles.lastview}>
        <TouchableOpacity 
        onPress={()=>{this.props.navigation.push('User',{item:item })}}
        style={styles.ImgView} >
          <Image
            style={styles.Editimages}
            resizeMode='contain'
            source={require('../../../images/download.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.deleteDetail(this.props.catObj, item.index)}}>
          <Image
            style={styles.crossimages}
            resizeMode='contain'
            source={require('../../../images/delete.jpg')}
        />
        </TouchableOpacity>
      </View>
    </View>
    ); 
  }
  render() {
    console.log(this.props.catObj, "catobj");
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer} >
        <FlatList
          data={this.props.catObj}
          renderItem={this.renderItem}
          keyExtractor={item => item.name}
          ListHeaderComponent={this.render_FlatList_header}
          ListEmptyComponent={<View style={styles.Nodata}><Text style={styles.nodataText}>No Data Found</Text></View>}
        />
        </View>
      </SafeAreaView>
    );
  }

}

const mapStateToProps = (state) => ({
  catObj: state.user.catObj
})

const mapDispatchToProps = {
  deleteDetail
};

export default connect(
mapStateToProps,
mapDispatchToProps,
)(Home);
