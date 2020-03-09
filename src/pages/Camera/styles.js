import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    camera: {
        flex: 1
    },
    groupButton: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    button: {
        position: 'absolute',
        bottom: 20,
        left:20
    },
    buttonType: {
        fontSize: 20,
        marginBottom:13,
        color: '#fff'
    },
    buttonPick: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        margin: 20,
        borderRadius: 10,
        height: 50
    }
});

export default styles;
