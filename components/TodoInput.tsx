import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

type Props = {
  onAdd: (text: string) => void;
};

export default function TodoInput({ onAdd }: Props) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <View className="todo-input-container">
      <TextInput
        className="todo-input"
        placeholder="Write your task here..."
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAdd}
      />
      <TouchableOpacity className="todo-button" onPress={handleAdd}>
        <Text className="todo-button-text">Add</Text>
      </TouchableOpacity>
    </View>
  );
}