import React from "react";
import {View, Text, StyleSheet, Button, Image} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText style={{ fontSize: 23 }}>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')} style={styles.image}/>
                {/*<Image source={{uri: 'https://image.freepik.com/free-vector/explorer-with-backpack-background_23-2148159527.jpg'}} style={styles.image}/>*/}
            </View>
            <View style={styles.infoContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
                <View style={styles.buttonContainer}>
                    <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    infoContainer: {
        marginHorizontal: 30,
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    buttonContainer: {
        marginTop: 10,
        width: '50%'
    }
});

export default GameOverScreen