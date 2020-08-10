import React, {useState} from 'react';
import {View,Text,ImageBackground, Image, TextInput,SafeAreaView,TouchableOpacity, Alert} from 'react-native';
import styles from './style';

import { connect } from 'react-redux';
import {saveDetail } from '../../actions/user-actions-types';

class User extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            catObj : {name:"", breed:"", description:""}
        }
    }
    handleChange(val, type) {
        console.log(val, type)
        let obj = Object.assign({}, this.state.catObj);
        obj[type] = val
        this.setState ({catObj: obj});
        console.log(obj);
    }
    componentDidMount() {
        console.log("hi")
        console.log(this.props.navigation.state.params);
        if (this.props.navigation.state.params != undefined  && this.props.navigation.state.params.item != undefined &&  this.props.navigation.state.params.item.item != undefined) {
            let obj = {
                name: this.props.navigation.state.params.item.item.name,
                breed: this.props.navigation.state.params.item.item.breed,
                description: this.props.navigation.state.params.item.item.description,
            }
            console.log(obj)
            this.setState({ 
                catObj : obj
            });
        }
    }
    render () {
        
        return (
            <ImageBackground style={styles.mainComponent}
            resizeMode='cover'
            source={require('../../images/white-marble.jpg')}
        >
            <View style={styles.firstView}>
                <View style={styles.OhmView}>
                    <Image
                        style={styles.Logo}
                        resizeMode='contain'
                        source={require('../../images/LOGOE2.png')}
                    />
                </View>
            </View>
            <View style={styles.secondView}>
                <View style={styles.usernameView}>
                    <TextInput
                        style={styles.userTextInput}
                        placeholder={"Cat Name"}
                        onChangeText={(eve)=>this.handleChange(eve, "name")}
                        value={this.state.catObj.name}
                         editable={true}
                    />
                </View>
                <View style={styles.usernameView}>
                    <TextInput
                    style={styles.userTextInput}
                    placeholder={"Cat Breed"}
                    onChangeText={(eve)=>this.handleChange(eve, "breed")}
                    value={this.state.catObj.breed}
                    editable={true}
                    />
                </View>
                <View style={styles.usernameView}>
                    <TextInput
                    style={styles.userTextInput}
                    placeholder={"Description"}
                    onChangeText={(eve)=>this.handleChange(eve, "description")}
                    editable={true}
                    value={this.state.catObj.description}
                    />
                </View>
                <TouchableOpacity style={styles.SinupButton} 
                    onPress={() => {
                        if (this.state.catObj["name"] == "" || this.state.catObj.breed == "" || this.state.catObj.description == "") {
                            Alert.alert("Please insert the values");
                            return;
                        }
                        let check = "none";
                        if (this.props.navigation.state.params != undefined  && this.props.navigation.state.params.item != undefined &&  this.props.navigation.state.params.item.item != undefined) {
                            check = this.props.navigation.state.params.item.index;
                        }
                        this.props.saveDetail(this.state.catObj, check, this.props.totalObj) ;
                        Alert.alert("Detail has been saved successfully");
                        this.props.navigation.push("Home");
                    }}
                >
                    <Text style={styles.SinupText}>Save</Text>        
                </TouchableOpacity>    
            </View>
        </ImageBackground>   
        )
    }
}

const mapStateToProps = (state) => ({
    //loading: state.user.loading
    totalObj: state.user.catObj
})

const mapDispatchToProps = {
    saveDetail
};
// To connect DrawerScreen from redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
