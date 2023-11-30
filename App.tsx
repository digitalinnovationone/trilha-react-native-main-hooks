import { useRef, useReducer } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

const ActionsTypes = {
  RESET: "RESET",
  WRITE: "WRITE",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionsTypes.RESET:
      state.textInputRef.current.focus();
      state.textInputRef.current.setNativeProps({ text: "" });
      return state;

    case ActionsTypes.WRITE:
      state.textInputRef.current.setNativeProps({ text: "felipe" });

      return state;
  }
};

export default function App() {
  const initialState = {
    textInputRef: useRef<TextInput>(null),
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <TextInput
        ref={state.textInputRef}
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
      <Button
        title="resetar"
        onPress={() => dispatch({ type: ActionsTypes.RESET })}
      />
      <Button
        title="Escrever"
        onPress={() => dispatch({ type: ActionsTypes.WRITE })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
