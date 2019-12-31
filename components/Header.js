import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import Colors from '../constants/colors';
import TitleText from "./TitleText";

const Header = props => {
    return (
        <View style={styles.header}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 25,
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
        borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
        borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: Platform.OS === 'ios' ? Colors.primary : 'white',
        fontSize: 18
    }
});

export default Header;
