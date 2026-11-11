import { View, Text, TouchableOpacity } from "react-native";
import { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export default function TodoItem({ todo, onDelete, onToggle }: Props) {
  return (
    <View className="todo-item">
      <TouchableOpacity
        className="todo-item-left"
        onPress={() => onToggle(todo.id)}
      >
        <View
          className={
            todo.completed ? "checkbox checkbox-on" : "checkbox checkbox-off"
          }
        >
          {todo.completed && <Text className="checkmark">✓</Text>}
        </View>
        <Text
          className={
            todo.completed
              ? "todo-item-text line-through text-gray-400"
              : "todo-item-text"
          }
        >
          {todo.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onDelete(todo.id)}>
        <Text className="todo-delete-text">Delete</Text>
      </TouchableOpacity>
    </View>
  );
}