import React from "react";
import {View, Text, StyleSheet} from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Game is Over!</Text>
            <NumberContainer>{props.rounds}</NumberContainer>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default GameOverScreen