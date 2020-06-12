import { StyleSheet } from 'react-native';


const Styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#3B7CBE',
        paddingTop: '15%',
        alignItems: 'center',
    },

    title: {
        color: '#fff',
        marginTop: '5%',
        fontWeight: 'bold',
        fontSize: 26,
        alignItems: 'center',
        marginBottom: '10%'
    },

    logo: {
        width: '100%',
        height: '15%',
        resizeMode: 'stretch',
        marginBottom: '2%'
    },
    
    categoryButton: {
        borderTopColor: '#D3D3D3',
        borderTopWidth: 1,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
        padding: '5%',
        alignItems: 'center'
    },

    titleButtonCategory: {
        color: '#fff'
    },

    list: {
        width: '100%',
    },
    
    thumbs:{
        width: '40%',
        height: '35%',
        resizeMode: 'stretch'
    }
});

export default Styles;