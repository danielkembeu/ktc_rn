import { StyleSheet, Text, SafeAreaView, Platform, ScrollView } from 'react-native'
import React from 'react'
import Tile from '@/components/tile'

export default function Page() {
    return (
        <SafeAreaView style={Platform.OS !== 'ios' && { paddingTop: 40 }}>
            <Text style={styles.titlePage}>Liste</Text>

            <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
                {
                    Array.from({ length: 20 }).map((_, index) => (
                        <Tile key={index} index={index} />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titlePage: {
        fontSize: 30,
        marginLeft: 20,
        fontWeight: "bold",
        marginVertical: 20
    }
})



// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Feather } from '@expo/vector-icons'

// export default function Page() {
//     return (
//         <View style={{ paddingTop: 40, alignItems: "center" }}>
//             <View style={styles.header}>
//                 <Text style={styles.title}>D2W</Text>

//                 <View style={styles.headerIcons}>
//                     <Feather name='search' size={26} />
//                     <Feather name='align-left' size={26} />
//                 </View>
//             </View>

//             <Text style={{
//                 marginTop: 100,
//                 fontSize: 16
//             }}>-- Drive2Ways --</Text>

//             <Text style={{ fontSize: 56, marginVertical: 24, textAlign: 'center' }}>
//                 WEBSITE DESIGN AND DIGITAL MARKETING AGENCY
//             </Text>

//             <View style={styles.blueBox}>
//                 <View style={styles.blueBoxHeader}>
//                     <Text style={{ color: "white", fontSize: 17 }}>-- Finance</Text>
//                     <View style={styles.iconContainer}>
//                         <Feather name='briefcase' size={20} color={'white'} />
//                     </View>
//                 </View>

//                 <Text style={styles.contentText}>Wallet Crunch</Text>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     header: {
//         marginVertical: 20,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 40,
//         width: '100%'
//     },
//     title: {
//         fontWeight: "bold",
//         fontSize: 22
//     },
//     headerIcons: {
//         flexDirection: 'row',
//         gap: 14,
//         alignItems: 'center',
//     },
//     blueBox: {
//         backgroundColor: "#0B6BF5",
//         width: '98%',
//         height: '20%',
//         marginTop: 100,
//         borderRadius: 20,
//         padding: 30
//     },
//     blueBoxHeader: {
//         flexDirection: 'row',
//         width: '100%',
//         justifyContent: "space-between",
//         alignItems: 'center',
//     },
//     iconContainer: {
//         width: 44,
//         aspectRatio: 1,
//         padding: 6,
//         backgroundColor: '#619DF5',
//         borderWidth: 2,
//         borderColor: "white",
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 44
//     },
//     contentText: { fontSize: 34, fontWeight: 'bold', color: 'white', marginVertical: 10 }
// })