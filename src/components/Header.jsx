import {View, Text, StyleSheet} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function Header(){
    return (
        <View style={styles.container}>
            <FontAwesome style={styles.logo} name="users" size={26} color="#e7612b" />
            <Text style={styles.logotipo}>Logo</Text>
        </View>
    )
}

const styles = StyleSheet.create({ // CSS in JS
    container: {
        flexDirection: "row",
        backgroundColor: "#000000",
        width: "100%",
        height: 46,
        marginBottom: 16,
        alignItems: "center",
        paddingHorizontal: 16
        //justifyContent: "center",
    },
    logo:{
        marginRight: 14
    },
    logotipo: {
        color: "#FFF"
    }
})