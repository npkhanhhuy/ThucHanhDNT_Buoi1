import {Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"; 

const Exersise3 =()=>{
    const onPress = ()=>
    {
        
    }
    return(
        <View style={myStyle.container}>
            <TouchableOpacity style={myStyle.button1} onPress ={()=>alert("Xin chào các bạn")}>
                <Text style={myStyle.textbutton}>
                    Xin chào
                </Text>
            </TouchableOpacity>
            <View style={myStyle.container}>
            <TouchableOpacity style={myStyle.button2} onPress ={()=>alert("Tạm biệt các bạn")}>
                <Text style={myStyle.textbutton}>
                    Tạm biệt
                </Text>
            </TouchableOpacity>
    </View>
    </View>
    
    )
}
export default Exersise3;
const myStyle= StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:"center",
        },
        button1:{
            width:100,
            height:50,
            border:2,
            backgroundColor: "red",
            alignItems:"center",
            justifyContent:"center",
        },
        button2:{
            width:150,
            height:50,
            border:2,
            backgroundColor: "blue",
            alignItems:"center",
            justifyContent:"center",
            margin:10
        },
        textbutton:{
            color:"black",
            fontWeight: "bold"
        }
    }
)