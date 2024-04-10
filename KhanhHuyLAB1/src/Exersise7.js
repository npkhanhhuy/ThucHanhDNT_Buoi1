import { useState } from 'react'
import { StyleSheet, TextInput,Text,Button, View,OnchageText, Alert } from 'react-native'
const Exersise7 = ()=>{
    const[name , setName] = useState("");
    const onPress=()=>
    {
        Alert.alert(`Hello ${name}!`);
    }
    return(
        <View style={myStyle.container}>
            <Text style={myStyle.label}> What is your name ?</Text>
            <TextInput
            style={myStyle.input}
            placeholder='Khánh Huy'
            placeholderTextColor="rgba(0,0,0, 0.5)"
            OnchageText={setName}
            value={name}
            />
            <Button
            title='Say Hello'
            onPress={onPress}
            />
        </View>
    )
}
export default Exersise7;
const myStyle =StyleSheet.create(
    {
        container: 
        {
            padding:20,
        },
        label:
        {
            fontWeight:"bold",
            fontSize:18,
        },
        input:
        {
            marginTop:10,
            backgroundColor:"rgba(0,0,0, 0.1)",
            padding:10,
            borderRadius:5,
        },
    }
)
    