import { View, Text } from "react-native"
import { useList } from "../context/ListContext"
const TodaysTaskScreen = () => {
    const {list} = useList();
    return (
        <View>
            <Text>This Day's Tasks</Text>
            {list.map((task,index) => (
                <View key={index}>
                    <Text>{task.name}</Text>
                </View>
            ))}
        </View>
    )
}
export default TodaysTaskScreen