import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

function AppButton({title, onPress}) {
    return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
   button:{
       backgroundColor:"paleturquoise",
       borderRadius: 10,
       justifyContent: "center",
       alignContent:  "center",
       paddingHorizontal: 10,
       paddingLeft: 13,
       elevation: 20,
       shadowColor: "grey",
       shadowOffset: {width: 2, height: 2 },
       shadowOpacity: 1,
       width: '22%',
       height: 31,
       marginLeft: 10
   },
   text:{
       color: "black",
       fontSize: 11,
       textTransform: "capitalize",
       fontWeight: "bold",
       alignContent: "center",
       justifyContent: "center",
   } 
})

export default AppButton;