import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
}
    from 'react-native';

export default class Regform extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',
        };
    }

    clearHandle = () => {
        this.setState({
            firstName: '',
            lastName: '',
            emailAddress: '',
        });
    };

    submitHandle = () => {
        console.log('First Name:', this.state.firstName);
        console.log('Last Name:', this.state.lastName);
        console.log('Email Address', this.state.emailAddress);
    };

    render() {
        return (
            <View style={StyleSheet.regform}>
                <Text style={styles.header}>Registration Form</Text>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={(text) => this.setState({ firstName: text })}
                    value={this.state.firstName}
                />

                <Text style={styles.label}>Last Name</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={(text) => this.setState({ lastName: text })}
                    value={this.state.lastName}
                />

                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={(text) => this.setState({ emailAddress: text })}
                    value={this.state.emailAddress}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: '#028599' }]}
                        onPress={this.submitHandle}
                    >
                        <Text style={[styles.sendbtntext, { color: 'white' }]}>Send</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: '#fdd620' }]}
                        onPress={this.clearHandle}
                    >
                        <Text style={[styles.btntext, { color: '#028599' }]}>Clear</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    regform: {
        flex: 1,

        padding: 16
    },
    header: {
        alignSelf: 'center',
        fontSize: 24,
        paddingBottom: 8,
        color: '#028599',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#028599',
        marginBottom: 16,
    },
    textinput: {
        height: 40,
        borderColor: '#028599',
        borderWidth: 1,
        marginBottom: 16,

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        height: 40,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginHorizontal: 8,
        marginTop: 30,
    },
    btntext: {
        fontSize: 16,
    },
});