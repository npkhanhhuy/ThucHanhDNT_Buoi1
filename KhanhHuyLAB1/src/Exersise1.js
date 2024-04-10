    import {StyleSheet, Text, View } from "react-native"; 

    const Exersise1 =()=>{
        return (
            <View style={myStyle.Viewstyle}>
            <Text style={myStyle.Textstyle}>
                Hello World!
            </Text>
        </View>
        )
    }
    export default Exersise1;
    const myStyle= StyleSheet.create(
        {
            Viewstyle:{
                width:100,
                height:100,
                backgroundColor:"yellow",
                alignItems:"center",
                justifyContent:"center",
            },
            Textstyle:{
                color:"black",
                fontWeight: "bold"
            }
        }
    )