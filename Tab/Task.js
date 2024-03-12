import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const Task = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState('');
    const [editableTaskId, setEditableTaskId] = useState(null);

    const addTask = () => {
        if (currentTask !== '') {
            setTasks([...tasks, { id: Date.now(), text: currentTask }]);
            setCurrentTask('');
        }
    };

    const editTask = (taskId, newText) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, text: newText } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={{ fontSize: 15 }}
                value={currentTask}
                onChangeText={(text) => setCurrentTask(text)}
                placeholder="Enter task"
            />
            <Button title="Add Task" color={"black"} onPress={addTask} />
            <Text style={{ textAlign: "center", 
            borderBottomWidth: 1, 
            marginTop: 20, 
            fontSize: 25, 
            textDecorationLine: "underline",
            textDecorationStyle:"double" }}>List of Task</Text>

            <View style={{ width: 500, 
                height: 900, 
                backgroundColor: "lightblue",
                borderTopRightRadius:130,
                borderTopLeftRadius:50, }}>

                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{marginLeft:20, marginTop:30}}>
                            {editableTaskId === item.id ? (
                                <>
                                    <TextInput
                                        value={item.text}
                                        onChangeText={(text) => editTask(item.id, text)}
                                    />
                                    <Button
                                        title="Done Editing"
                                        onPress={() => setEditableTaskId(null)}
                                    />
                                </>
                            ) : (
                                <>
                                    <Text>{item.text}</Text>
                                    <View style={{flexDirection:"row", justifyContent:"center", marginRight:100}}>
                                    <Button
                                        title="Edit"
                                        onPress={() => setEditableTaskId(item.id)}
                                    />
                                    <Button
                                        title="Delete"
                                        onPress={() => deleteTask(item.id)}
                                    />
                                    </View>
                                    
                                </>
                                
                            )}
                        </View>
                    )}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
    },
    taskbox: {
        textAlign: "center"
    },
    taskboxtext: {

    }
});

export default Task;
