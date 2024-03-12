import { View, Text, StyleSheet } from "react-native"
import { useList } from "../context/ListContext"
const TodaysTaskScreen = () => {
    const {list} = useList();
    return (
        <View>
            <Text>This Day's Tasks</Text>
            {list.map((task,index) => (
                <View key={index} style={styles.taskList}>
                    <Text>{task.name}</Text>
                    <Text>{task.date}</Text>
                    <Text>{task.status}</Text>
                </View>
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    taskList: {
        flexDirection: 'row',
    }
})
export default TodaysTaskScreen