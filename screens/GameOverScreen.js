import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

import Card from "../components/Card";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Card>
                <Text>Game is Over!</Text>
                <Text>Number of rounds: {props.rounds}</Text>
                <Text>Number was : {props.userNumber}</Text>
                <Button title="NEW GAME" onPress={props.onRestart} />
            </Card>
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