import React from "react";
import {View, Text, StyleSheet, ScrollView, Image, Dimensions} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";


const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText style={{fontSize: 23}}>The Game is Over!</TitleText>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/success.png')} style={styles.image}/>
                    {/*<Image source={{uri: 'https://image.freepik.com/free-vector/explorer-with-backpack-background_23-2148159527.jpg'}} style={styles.image}/>*/}
                </View>
                <View style={styles.infoContainer}>
                    <BodyText style={styles.resultText}>
                        Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess the
                        number <Text style={styles.highlight}>{props.userNumber}</Text>
                    </BodyText>
                    <View style={styles.buttonContainer}>
                        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: (Dimensions.get('window').width * 0.7) / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    infoContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    buttonContainer: {
        marginTop: 10,
        width: Dimensions.get('window').width / 2
    }
});

export default GameOverScreen