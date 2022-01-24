import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    container: {
        padding: 12,
        borderColor: 'black',
        borderRadius: 8,
        borderWidth: 1,
        width: wp('95%'),
        marginVertical: wp('2.5%'),
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        textTransform: 'capitalize',
        textAlign: 'center',
    },
});
