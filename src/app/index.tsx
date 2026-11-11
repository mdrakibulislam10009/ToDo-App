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
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <View className="screen">
      <TodoInput onAdd={addTodo} />

      <Text className="counter-text">
        {remaining} task{remaining !== 1 ? "s" : ""} remaining
      </Text>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} onDelete={deleteTodo} onToggle={toggleTodo} />
        )}
        ListEmptyComponent={
          <Text className="empty-text">Empty List</Text>
        }
      />
    </View>
  );
}