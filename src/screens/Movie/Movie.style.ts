import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    container: {
        padding: wp('2.5%'),
        paddingBottom: wp('5%'),
    },
    headerText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        marginBottom: wp('2.5%'),
        fontStyle: 'italic',
    }
});
