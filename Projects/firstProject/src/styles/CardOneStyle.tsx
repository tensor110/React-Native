import { StyleSheet, Platform } from "react-native";

const CardOneStyle = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios:{
                shadowOffset:{ width: 2, height: 2 },
                shadowColor: '#333',
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android:{
                elevation:5
            }
        })
    },
    nameContainer:{
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 32
    },
    name:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    hp:{
        fontSize: 22,
        color: 'black'
    },
    image:{
        width: '100%',
        height: 200,
        marginBottom: 16
    },
    typeContainer:{
        alignItems: "center",
        marginBottom: 40
    },
    badge:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4
    },
    typeEmoji:{
        fontSize: 30,
        marginRight: 12,
        color: 'black'
    },
    typeText:{
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black'
    },
    moveContainer:{
        marginBottom: 16
    },
    move:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },
    weaknessContainer:{
        marginBottom: 8
    },
    weakness:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
})

export default CardOneStyle