import { StyleSheet, Text, View } from "react-native";
export default function HomeScreen() {
  return(
    <View>
      <Text style={style.title}> Task Manager </Text>
      <Text> My Tasks </Text>
    </View>
  );
}
  const style =StyleSheet.create({
    title:{
      color:"green",
      fontSize:35,
    },
  });