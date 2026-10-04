import { StyleSheet, Text, View } from "react-native";
export default function HomeScreen() {
  return(
    <View style={style.container}>
      <Text style={style.title}> Task Manager </Text>
      <Text> My Tasks </Text>
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
  });