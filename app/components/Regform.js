import React, { Regform } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
}
    from 'react-native';

export default class Regform extends React.Component{
    constructor(props){
        super(props);

        this.state={
            firstName:'',
            lastName:'',
            emailAddress:'',
        };
    }

    clearHandle = () => {
        this.setState({
            firstName:'',
            lastName:'',
            emailAddress:'',
        });
    };

    submitHandle = () => {
        console.log('First Name:', this.state.firstName);
        console.log('Last Name:', this.state.lastName);
        console.log('Email Address', this.state.emailAddress);
    };

    render(){
        return(
            <View style={StyleSheet.regform}>
                <Text style={styles.header}>Registration Form</Text>
                <Text style={styles.label}>First Name</Text>
                <TextInput 
                    style={styles.textinput}
                    onChangeText={(text) => this.setState({firstName:text})}
                    value={this.state.firstName}
                />

                <Text style={styles.label}>Last Name</Text>
                <TextInput 
                    style={styles.textinput}
                    onChangeText={(text) => this.setState({lastName:text})}
                    value={this.state.lastName}
                />

                <Text style={styles.label}>Email Address</Text>
                <TextInput 
                    style={styles.textinput}
                    onChangeText={(text) => this.setState({emailAddress:text})}
                    value={this.state.emailAddress}
                />

                <TouchableOpacity 
                    style={[styles.button, {backgroundColor: '#028599'}]}
                    onPress={this.submitHandle}
                >
                    <Text style={[styles.sendbtntext, {color: 'white'}]}>Send</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, {backgroundColor: '#fdd620'}]}
                    onPress={this.clearHandle}
                >
                    <Text style={[styles.btntext, {color: '#028599'}]}>Clear</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    regform:{
        flex:1,
        justifyContent: 'center',
        alignSelf:'center',
        color: '#028599',
        padding: 16,

    },
    header: {
        fontSize: 24,
        paddingBottom: 8,
        marginBottom: 40,
        borderBottomColor: 'blac',
        borderBottomWidth: 1,
    },
    label:{
        fontSize: 16,
        marginBottom: 16,
    },
    textinput:{
        width: '100%',
        height: 40,
        borderColor: '#028599',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    button:{
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop:30,
    },
    btntext:{
        fontSize: 16,
        fontWeight: 'bold',
    },
});