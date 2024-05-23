import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    AppContainer: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoConteiner:{
        flexDirection:'column',
        borderColor:'fff',
        borderRadius:2,
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:60,
        paddingTop:20,
        paddingBottom:10,
        backgroundColor:'#000'

    },
    inputConteiner:{
        width:'80%',
        alignItems:'center',
        flexDirection:'column',
    }
});
export default styles