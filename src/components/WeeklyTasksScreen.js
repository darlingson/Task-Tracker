import { Text, View } from "react-native"
import { useList } from "../context/ListContext";

const WeeklyTasksScreen = () => {
    const {list} = useList();
    return (
        <View>
            <Text>This Week's Tasks</Text>
            {list.map((task,index) => (
                <View key={index}>
                    <Text>{task.name}</Text>
                </View>
            ))}
        </View>
    )
}
export default WeeklyTasksScreen