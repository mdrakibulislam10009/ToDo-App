import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

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
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Write Your New Task Here"
                value={text}
                onChangeText={setText}
                onSubmitEditing={handleAdd}
            />
            <TouchableOpacity style={styles.button} onPress={handleAdd}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: "#fff",
    },
    button: {
        marginLeft: 10,
        backgroundColor: "#4f46e5",
        paddingHorizontal: 20,
        justifyContent: "center",
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});