import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, ScrollView, Image, Dimensions} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";


const GameOverScreen = props => {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceHeight(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };

        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
       }
    });

    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText style={{fontSize: 23}}>The Game is Over!</TitleText>
                <View style={‌{...styles.imageContainer, ...{
                    width: availableDeviceWidth * 0.7,
                    height: availableDeviceWidth * 0.7,
                    borderRadius: (availableDeviceWidth * 0.7) / 2,
                    marginVertical: availableDeviceHeight / 30
                }}}>
                    <Image source={require('../assets/success.png')} style={styles.image}/>
                    {/*<Image source={{uri: 'https://image.freepik.com/free-vector/explorer-with-backpack-background_23-2148159527.jpg'}} style={styles.image}/>*/}
                </View>
                <View style={‌{...styles.infoContainer,
                    ...{marginVertical: availableDeviceHeight / 60}
                }}>
                    <BodyText style={‌{...styles.resultText, ...{
                        fontSize: availableDeviceHeight < 400 ? 16 : 20}}}>
                        Your phone needed{' '}
                        <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number{' '}
                        <Text style={styles.highlight}>{props.userNumber}</Text>
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
        justifyContent: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    infoContainer: {
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    resultText: {
        textAlign: 'center',
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    buttonContainer: {
        justifyContent: 'center',
        marginTop: 10,
        width: Dimensions.get('window').width / 2
    }
});

export default GameOverScreen