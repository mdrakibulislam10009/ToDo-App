import { useState } from "react";
import { View, FlatList, Text } from "react-native";
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
    <View className="screen">
      <TodoInput onAdd={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} onDelete={deleteTodo} />
        )}
        ListEmptyComponent={
          <Text className="empty-text">Task List Empty</Text>
        }
      />
    </View>
  );
}