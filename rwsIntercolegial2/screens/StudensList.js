import { View, Text, StyleSheet, FlatList, ViewBase } from "react-native";
import { Button, ListItem } from "@rneui/base";
import { getAllStudents } from "../rest_Students/Students"
import { useState } from "react";
//componentes
const StudensList = () => {
  const [studentList, setStudentList] = useState([]);

  const StudenItems = () => {
   return(<ListItem style={styles.container}>
      <ListItem.Content>
        <ListItem.Title >  nnnnn:</ListItem.Title>
        <ListItem.Subtitle> yyyyyy: </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron style={styles.chevron} />
    </ListItem>
  )};
  fnRefreshList = (students) => {
    console.log("Refrescar lista", students)
    setStudentList(students)

  }
  return (
    <View style={styles.container}>
      <Text> Lista de Contactos</Text>
      <Button
        title="Consultar"
        onPress={() => {
          getAllStudents(fnRefreshList);
        }} />

      <FlatList
        data={studentList}
        renderItem={({ item }) => {
          return <StudenItems student={item} />
        }}
      />
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
export default StudensList; // Exportar el componente
