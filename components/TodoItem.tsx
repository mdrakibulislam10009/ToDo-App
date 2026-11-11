import { View, Text, TouchableOpacity } from "react-native";
import { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onDelete }: Props) {
  return (
    <View className="todo-item">
      <Text className="todo-item-text">{todo.text}</Text>
      <TouchableOpacity onPress={() => onDelete(todo.id)}>
        <Text className="todo-delete-text">Delete</Text>
      </TouchableOpacity>
    </View>
  );
}