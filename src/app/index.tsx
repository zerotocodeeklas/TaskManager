import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
export default function HomeScreen() {
  const [task, setTask]=useState("");
  return(
    <View style={style.container}>
      <Text style={style.title}> Task Manager </Text>
      <Text> My Tasks </Text>
      <TextInput 
      style={style.input}
      placeholder="Enter a task..."
      value={task}
      onChangeText={setTask}
      />
      <Pressable>
        <Text> Add Task </Text>
      </Pressable>
    </View>
  );
}
  const style =StyleSheet.create({
    container:{
      padding:20,
      margin:10,
      flexDirection:"column",
      alignItems:"center",
      width:"100%",
      backgroundColor:"#F5F0E8",
      flex:1,
      justifyContent:"center",
    },
    title:{
      color:"#80699B",
      fontSize:35,
      marginBottom:20,
    },
    input:{
      borderWidth:1,
      padding:10,
      borderColor:"#80699B",
      borderRadius:10,
      width:250,

    },
  
  });