import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    container: {
        padding: 12,
        borderColor: 'black',
        borderRadius: 8,
        borderWidth: 1,
        width: wp('95%'),
        margin: wp('2.5%'),
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        textTransform: 'capitalize',
        textAlign: 'center',
        height: hp('5%'),
    },
    releaseDate: {
        fontWeight: '400',
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginBottom: hp('1%')
    },
    openingCrawl: {
        fontWeight: '400',
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },
});
