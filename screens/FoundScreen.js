import React from 'react';
import {Text, View, StyleSheet, Image, KeyboardAvoidingView, ToastAndroid, ScrollView } from 'react-native';
import * as Permissions from 'expo-permissions';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase';
import db from '../config';

export default class FoundScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            buttonState:'normal',
            location:'',
            number:'',
            status:'',
            animal:''
        }
    }

    info=async(status, number, animal)=>{
        //alert('details entered');
        if(status && number && location){
            alert('This is a prototype, in the app the information will be sent to an organisation')
            db.collection("animal_details").add({
                'animal':this.state.animal,
                'status':this.state.status,
                'number':this.state.number
                
            })
        }
        else{
            alert("Fill the form and enter all needed information")
        }
    }

    render(){
        return(
            <ScrollView style={{backgroundColor:'#03ebfc'}}>
                
                <KeyboardAvoidingView style={{alignItems:'center', marginTop:20}}>
                    <View>
                        <Image
                        source = {require("../assets/paw.png")}
                        style={{width:200, height:200, justifyContent:'center', alignItems:'center', alignSelf:'center'}}/>
                        <Text style={{textAlign:'center', fontSize:40}}>Paw Patrol</Text>
                        <Text style={{alignSelf:'center', justifyContent:'center', fontSize:30}}>If you have to rescue a stray animal, please fill in the details here</Text>

                    </View>
                    <View>
                        <TextInput
                        style={styles.loginBox}
                        placeholder="Contact No."
                        onChangeText={(text)=>{
                            this.setState({
                                number:text
                            })
                        }}
                        />
                        <TextInput
                        style={styles.loginBox}
                        placeholder="Animal (dog, cat, pigeon, crow, etc)"
                        onChangeText={(text)=>{
                            this.setState({
                                animal:text
                            })
                        }}
                        />

                        <TextInput
                        style={styles.loginBox}
                        placeholder="Status (injured, malnourished, etc)"
                        onChangeText={(text)=>{
                            this.setState({
                                status:text
                            })
                        }}
                        />
                        
                    </View>
                    <View>
                        <TouchableOpacity style={{height:30, width:90, borderWidth:1, marginTop:20, paddingTop:5, borderRadius:7, backgroundColor:'#03fc20'}}
                        onPress={()=>{
                            this.info(this.state.number, this.state.animal, this.state.status)
                        }}>
                            <Text style={{textAlign:'center'}}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                    <Text style={{alignSelf:'center', justifyContent:'center', fontSize:33}}>If you have a missing pet to report, please head to the 'New' tab and fill in the details</Text>
                    <Text style={{alignSelf:'center', justifyContent:'center', fontSize:35}}>If you want to see the list of all missing pets, please head to the 'Missing' tab</Text>
                                        </View>
                </KeyboardAvoidingView>
                
                </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    loginBox:{
        width:500,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:5,
        paddingLeft:10,
        backgroundColor:'#03fcf8'
    }
})
