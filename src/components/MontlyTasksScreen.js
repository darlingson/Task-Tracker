import { Text, View } from "react-native"
import { useList } from "../context/ListContext";

const MonthlyTasksScreen = () => {
    const {list} = useList();
    return (
        <View>
            <Text>This Month's Tasks</Text>
            {list.map((task,index) => (
                <View key={index}>
                    <Text>{task.name}</Text>
                </View>
            ))}
        </View>
    )
}
export default MonthlyTasksScreen