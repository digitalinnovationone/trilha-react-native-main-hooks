import React, { useRef } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

const Referencia = () => {
  const textInputRef = useRef<TextInput>(null);

  const resetButton = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
      textInputRef.current.setNativeProps({ text: "" });
    }
  };

  return (
    <View>
      <TextInput
        ref={textInputRef}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          marginTop: 20,
          paddingTop: 10,
          paddingHorizontal: 10,
        }}
      />
      <Button title="resetar" onPress={resetButton} />
    </View>
  );
};

export default Referencia;
