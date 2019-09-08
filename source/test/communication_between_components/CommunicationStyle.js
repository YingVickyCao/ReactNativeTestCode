import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: '#B0EBD0',
        alignItems: 'center'

    },
    container_4_child: {
        marginTop: 10,
        padding: 20,
        width: '100%',
        backgroundColor: '#F5B041',
        alignItems: 'center'
    },
    label: {
        width: 200,
        height: 30,
        textAlign: "center",
        marginTop: 10,
        ...Platform.select({
            ios: {
                lineHeight: 30,
            },
            android: {
            }
        }),
    },

    topic: {
        backgroundColor: "#ff0000",
        width: 200,
        height: 50,
        textAlign: "center",
        marginTop: 10,
        ...Platform.select({
            ios: {
                lineHeight: 50,
            },
            android: {
            }
        }),
    },

    btn: {
        backgroundColor: '#B0C0EB',
        width: 200,
        height: 50,
        textAlign: "center",
        marginTop: 10,
        ...Platform.select({
            ios: {
                lineHeight: 50,
            },
            android: {
            }
        }),
    }
})

