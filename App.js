import React, { useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";

const App = () => {
  const moveAnimation = new Animated.ValueXY({ x: 10, y: 450 });
  useEffect(() => {
    moveAnimation;
  }, []);

  const _moveBallLeft = () => {
    Animated.spring(moveAnimation, {
      toValue: { x: 250, y: 450 },
    }).start();
  };
  const _moveBallRight = () => {
    Animated.spring(moveAnimation, {
      toValue: { x: 10, y: 450 },
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.tennisBall, moveAnimation.getLayout()]}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>ball</Text>
        </View>
      </Animated.View>

      <View
        style={{
          flexDirection: "row-reverse",
          justifyContent: "space-evenly",
        }}
      >
        <View style={{ alignSelf: "center" }}>
          <Button title=">" onPress={_moveBallLeft}></Button>
        </View>
        <View style={{ alignSelf: "center", marginLeft: "2%" }}>
          <Button title="<" onPress={_moveBallRight}></Button>
        </View>
      </View>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#ecf0f1",
  },
  tennisBall: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "greenyellow",
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  button: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  buttonText: {
    fontSize: 24,
    color: "#333",
  },
});
