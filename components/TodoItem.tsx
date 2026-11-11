import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onDelete }: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{todo.text}</Text>
      <TouchableOpacity onPress={() => onDelete(todo.id)}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },
  delete: {
    color: "#ef4444",
    fontWeight: "bold",
  },
});