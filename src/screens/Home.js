import React from 'react';
import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import tw from 'twrnc'; // ✅ Correct import for twrnc
import ExpenseItemCard from '../components/ExpenseItemCard';
import EmptyList from '../components/EmptyList';

const Home = ({ navigation }) => {
  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={tw`px-5 pt-5 pb-3`}>
        <Text style={tw`text-4xl font-bold text-black`}>Hello 👋</Text>
        <Text style={tw`text-base text-gray-500 mt-1`}>
          Start tracking your expenses today
        </Text>
      </View>

      {/* Summary Card */}
      <View style={tw`bg-black rounded-3xl mx-5 p-6 my-5 items-center shadow-lg`}>
        <Text style={tw`text-base text-gray-400`}>Spend so far</Text>
        <Text style={tw`text-white text-4xl mt-2 font-bold`}>$ 400</Text>
      </View>

      {/* Expense List */}
      <FlatList
        data={[]} // empty for now
        // renderItem={({ item }) => <ExpenseItemCard item={item} />}
        // keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
