import { useState } from 'react';
import { TouchableOpacity, Alert, TextInput, Button, TouchableWithoutFeedback, Keyboard, TouchableHighlight, Modal, View, Text, Image, SectionList, Switch, StyleSheet, ScrollView, FlatList, Animated } from 'react-native';

// First App component
// const App = () => {
//   return (
//     <View style={{ backgroundColor: 'lightgray', marginTop: 55, padding: 20, borderRadius: 10 }}></View>
//   );
// };

// Second App component
const App = () => {
  return (
    <View style={{ padding: 20, height: 200, width: 410, backgroundColor: 'grey', marginTop: 55 }}>
      <Text style={{ fontSize: 20, color: 'blue', fontWeight: 'bold', margin: 50 }}>
        Hello, React Native!
      </Text>
    </View>
  );
};

// Third App component
// const App = () => {
//   return (
//     <View style={{ alignItems: 'center', marginTop: 20 }}>
//       <Image
//         source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
//         style={{ marginTop: 55, width: 100, height: 100, borderRadius: 50 }}
//       />
//     </View>
//   );
// };

// Fourth App component
// const App = () => {
//   return (
//     <View style={{ marginTop: 55, padding: 20 }}>
//       <TextInput style={{ borderWidth: 1, padding: 10, borderRadius: 5 }} placeholder="Enter your name" />
//     </View>
//   );
// };

//Fifth App component with TouchableOpacity
// const App = () => {
//   return (
//     <View style={{ paddingTop: 55, padding: 10 }}>
//       <TouchableOpacity
//         style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
//         onPress={() => Alert.alert('Custom Button Clicked!')}
//       >
//         <Text style={{ color: 'white', textAlign: 'center' }}>Press Me</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// Sixth App component with TouchableHighlight
// const App = () => {
//   return (
//     <View style={{ margin: 60, padding: 20, alignItems: 'center' }}>
//       <TouchableHighlight
//         style={{ backgroundColor: 'blue', padding: 15, borderRadius: 10 }}
//         underlayColor="darkblue"
//         onPress={() => Alert.alert('Button Pressed!')}
//       >
//         <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Press Me</Text>
//       </TouchableHighlight>
//     </View>
//   );
// };

// Seventh App component with Keyboard dismiss
// const App = () => {
//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
//         <TextInput style={{ borderWidth: 1, padding: 10, borderRadius: 5 }} placeholder="Type here..." />
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// Eighth App component with styles
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, React Native!</Text>
//     </View>
//   );
// };

// Ninth App component with flex row styling
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.boxRed} />
//       <View style={styles.boxBlue} />
//       <View style={styles.boxBlue} />
//     </View>
//   );
// };

// Tenth App component with flex column styling
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.boxRed} />
//       <View style={styles.boxBlue} />
//       <View style={styles.boxRed} />
//     </View>
//   );
// };

// Eleventh App component with a Card
// const App = () => {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.title}>React Native</Text>
//       <Text style={styles.description}>Build cross-platform mobile apps easily!</Text>
//       <Button title="Learn More" onPress={() => Alert.alert('You clicked Learn More!')} />
//     </View>
//   );
// };

// Twelfth App component with a ScrollView
// const App = () => {
//   return (
//     <View>
//       <View style={styles.upper}></View>
//       <ScrollView style={styles.container}>
//         <Text style={styles.text}>Item 1</Text>
//         <Text style={styles.text}>Item 2</Text>
//         <Text style={styles.text}>Item 3</Text>
//         <Text style={styles.text}>Item 4</Text>
//       </ScrollView>
//     </View>
//   );
// };

//Thirteenth App component with FlatList
// const App = () => {
//   return (
//     <FlatList
//       data={DATA}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => (
//         <View style={styles.item}>
//           <Text style={styles.text}>{item.title}</Text>
//         </View>
//       )}
//     />
//   );
// };

// Fourteenth App component with SectionList
// const App = () => {
//   return (
//     <View style={styles.upper}>
//       <SectionList
//         sections={DATA}
//         keyExtractor={(item, index) => item + index}
//         renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
//         renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
//       />
//     </View>
//   );
// };

// Fifteenth App component with a Switch
// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>{isEnabled ? 'Switch is ON' : 'Switch is OFF'}</Text>
//       <Switch value={isEnabled} onValueChange={(newValue) => setIsEnabled(newValue)} />
//     </View>
//   );
// };

// Sixteenth App component with a Counter
// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Count: {count}</Text>
//       <Button title="Increase Count" onPress={() => setCount(count + 1)} />
//     </View>
//   );
// };

// Seventeenth App component with a Modal
// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <View style={styles.container}>
//       <Button title="Open Modal" onPress={() => setVisible(true)} />
//       <Modal visible={visible} transparent animationType="slide">
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContent}>
//             <Text style={styles.text}>This is a Modal!</Text>
//             <Button title="Close" onPress={() => setVisible(false)} />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

export default App;
