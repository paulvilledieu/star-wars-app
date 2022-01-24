import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    container: {
        padding: wp('2.5%'),
        paddingBottom: wp('5%'),
    },
    noFavoritesContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noFavoritesText: {
        fontSize: 16,
        fontWeight: '500',
    },
});
