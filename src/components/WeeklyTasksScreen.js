import { View, Text, StyleSheet } from "react-native"
import { useList } from "../context/ListContext"
import { DataTable } from "react-native-paper";

const WeeklyTasksScreen = () => {
    const {list} = useList();
    return (
        <View>
            <Text>This Week's Tasks</Text>
            <DataTable style={styles.container}> 
                <DataTable.Header style={styles.tableHeader}> 
                    <DataTable.Title>Name</DataTable.Title> 
                    <DataTable.Title>Favourite Food</DataTable.Title> 
                    <DataTable.Title>Age</DataTable.Title> 
                </DataTable.Header>
                {list.map((task,index) => (
                <DataTable.Row key={index}>
                    <DataTable.Cell>{task.name}</DataTable.Cell>
                    <DataTable.Cell>{task.date}</DataTable.Cell>
                    <DataTable.Cell>{task.status}</DataTable.Cell>
                </DataTable.Row>
            ))}
            </DataTable>
        </View>
    )
}
const styles = StyleSheet.create({
    taskList: {
        flexDirection: 'row',
    },
    container: { 
        padding: 15, 
      }, 
      tableHeader: { 
        backgroundColor: '#DCDCDC', 
      },
})
export default WeeklyTasksScreen