import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    screen: {
        flex: 1,
    },
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        margin: wp('2.5%'),
    },
    toggleText: {
        marginRight: wp('2%'),
        fontSize: 16,
        fontWeight: '400',
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
