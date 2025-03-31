import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 2);  // +2 per press
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Counter App</Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <Button
        title="Press to Increment"
        onPress={incrementCount}
        color="#0066cc"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default App;
