import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Stack } from 'expo-router'

function Course() {
    return (
        <View style={styles.container}>

            <View style={{ paddingLeft: 16 }}>
                <Text style={styles.title}>Bienvenue !</Text>
                <Text style={styles.message}>
                    Voici le premier cour sur React Native
                </Text>
            </View>

            {/* Cours */}
            <View style={styles.placeholder}>
                <Text style={{
                    color: 'white',
                    fontSize: 28,
                    fontWeight: 'bold',
                    width: 260,
                    marginBottom: 20
                }}>Tutoriel sur la syntaxe du JSX</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 18
                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nesciunt sit laboriosam reiciendis quam delectus.</Text>


                <TouchableOpacity
                    onPress={() => Alert.alert("Message")}
                    activeOpacity={.7}
                    style={styles.courseButton}>
                    <Text style={{
                        color: 'purple',
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>Visiter maintenant</Text>
                </TouchableOpacity>

                <View style={styles.informations}>
                    <View style={styles.instructeur}>
                        <View style={styles.pp} />
                        <View style={{
                            marginLeft: 16
                        }}>
                            <Text style={{
                                fontWeight: 'bold'
                            }}>Instructeur</Text>
                            <Text>KEMBEU Daniel</Text>
                        </View>
                    </View>

                    <View style={styles.meta}>
                        <Text>Description: </Text>
                        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odio velit optio rem illum repellendus adipisci explicabo dolorum.</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Note:</Text>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            {Array.from({ length: 3 }).map((_, index) =>
                                <Ionicons name='star' key={index} color={'yellow'} />
                            )}
                        </View>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default function Page() {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen options={{ headerShown: false }} />

            <Course />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        paddingVertical: 40
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "purple"
    },
    message: {
        fontSize: 22,
        marginBottom: 24
    },
    placeholder: {
        width: '100%',
        backgroundColor: 'purple',
        height: '36%',
        padding: 20
    },
    courseButton: {
        backgroundColor: "white",
        marginVertical: 20,
        height: 40,
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        alignSelf: 'flex-end'
    },
    informations: {
        marginVertical: 20
    },
    instructeur: {
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 10
    },
    pp: {
        width: 50,
        aspectRatio: 1,
        backgroundColor: "gray",
        margin: 4,
        borderRadius: 50
    },
    meta: {

    }
})