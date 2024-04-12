import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants/theme'

const Forminput = ({ value, onChangeText, placeholder }) => {
    return (
        <View>

            <TextInput
                style={[styles.box, styles.boxShadow, styles.boxShadow]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                multiline={true} />


        </View>
    )
}

export default Forminput

const styles = StyleSheet.create({
    box: {
        height: SIZES.width * 0.16,
        width: SIZES.width * 0.7,
        borderWidth: 0.5,
        borderRadius: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.h5,
        ...FONTS.body4
    },
    boxShadow: {
        shadowColor: "white",
        elevation: SIZES.base
    }
})