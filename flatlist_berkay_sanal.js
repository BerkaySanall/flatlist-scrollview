import { FlatList, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, RefreshControl } from "react-native";

const DATA = [
  {
    id: '10',
    title: 'First Item',
  },
  {
    id: '11',
    title: 'Second Item',
  },
  {
    id: '12',
    title: 'Third Item',
  },
  {
    id: '13',
    title: 'First Item',
  },
  {
    id: '14',
    title: 'Second Item',
  },
  {
    id: '15',
    title: 'Third Item',
  },
  {
    id: '16',
    title: 'First Item',
  },
  {
    id: '17',
    title: 'Second Item',
  },
  {
    id: '18',
    title: 'Third Item',
  },
];

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <Text>Header</Text>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={styles.footer}>
              <Text>Footer</Text>
            </View>
          )}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={() => {}} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  header: {
    padding: 20,
    backgroundColor: "yellow",
  },
  footer: {
    padding: 20,
    backgroundColor: "red",
  },
});

export default App