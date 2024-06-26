import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Ionicons, AntDesign, Zocial } from '@expo/vector-icons';

export default function Tile({ index }: { index: number }) {

    const showMessage = (index: number) => {
        Alert.alert("Bienvenue !", `Boite N${index + 1}`);
    }


    return (
        <TouchableOpacity
            style={styles.chatTile} activeOpacity={0.8}
            onPress={() => showMessage(index)}
        >
            <Image source={require("@/assets/images/react-logo.png")} />
            <View>
                <Text style={styles.username}>Suzanne</Text>
                <Text>Hello! Comment vas-tu...</Text>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <Ionicons name='home' size={24} color={'yellow'} />
                    <AntDesign name="minuscircle" size={24} color="red" />
                    <Zocial name="github" size={24} color="purple" />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    chatTile: {
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: 'gainsboro',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        gap: 14,
        alignItems: 'center'
    },
    pp: {
        width: 30,
        aspectRatio: 1
    },
    username: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#444"
    }
})