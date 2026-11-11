import { useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import TodoInput from "../../components/TodoInput";
import TodoItem from "../../components/TodoItem";
import { Todo } from "../../types/todo";

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <TodoInput onAdd={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} onDelete={deleteTodo} />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Task List Empty</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f3f4f6",
  },
  empty: {
    textAlign: "center",
    color: "#888",
    marginTop: 40,
    fontSize: 16,
  },
});