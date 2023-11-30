import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

const Estado = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState(10.9);
  const basePrice = 10.9;

  useEffect(() => {
    console.log("efeito colateral executado");
  }, []);

  const removeNumber = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity - 1;
      console.log(newQuantity);
      setPrice(basePrice * newQuantity);
      return newQuantity;
    });
  };

  const addNumber = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      setPrice(basePrice * newQuantity);
      console.log(newQuantity);
      return newQuantity;
    });
    console.log(quantity);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title="-" onPress={removeNumber} />
        <Text style={styles.textLabel}>{quantity}</Text>
        <Button title="+" onPress={addNumber} />
      </View>
      <Text>{price}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textLabel: {
    fontSize: 22,
  },
  buttonRow: {
    flexDirection: "row",
    padding: 15,
  },
});

export default Estado;
