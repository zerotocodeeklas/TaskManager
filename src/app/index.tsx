import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
export default function HomeScreen() {
  const [task, setTask]=useState("");
  const [tasks,setTasks]=useState<{title:string ; completed:boolean}[]>([]);
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
      <Pressable
      style={style.button}
       onPress={()=>{
        if(task !==""){
        setTasks([...tasks,{title:task, completed:false}]);
        setTask("");
        }
      }}
        >
        <Text style={style.buttonText}> Add Task </Text>
      </Pressable>
      {tasks.map((item ,index)=>(
        <View key={index} style={style.taskItem}>
          <Pressable
          onPress={()=>{
            const updatedTasks=tasks.map((item ,i) =>
            i=== index
          ?{... item,completed: !item.completed}
          :item
        );
        setTasks(updatedTasks);
          }}
          >
            <Text
            style={{
              textDecorationColor:item? 'line-through' :'none'
            }}
            >
              {item.title}
              </Text>
          </Pressable>

          <Pressable
          onPress={()=> {
            setTasks(tasks.filter((_, i)=> i !== index));
          }}
          >
            <Text style={style.deleteText}> Delete </Text>
          </Pressable>
          </View>
      ))}

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
    taskItem:{
      padding:10,
      borderWidth:1,
      borderColor:"#80699B",
      borderRadius:10,
      marginBottom:10,
      width:250,
    },
    button:{
      padding:10,
      borderRadius:10,
      backgroundColor:"#80699B",
    },
    buttonText:{
      color:"white",
    },
    deleteText:{
      color:"#bb1c16",
    },
  
  });