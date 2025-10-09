import React from 'react';
import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import tw from 'twrnc'; // ✅ Correct import for twrnc
import ExpenseItemCard from '../components/ExpenseItemCard';
import EmptyList from '../components/EmptyList';
export const expenseData = [
  {
    id: 1,
    emoji: "🍔",
    title: "Lunch",
    category: "Food",
    amount: 1200,
    date: "2025-10-09",
    color: "#FFB347" // orange shade
  },
  {
    id: 2,
    emoji: "🚕",
    title: "Taxi Ride",
    category: "Transport",
    amount: 800,
    date: "2025-10-08",
    color: "#77DD77" // green shade
  },
  {
    id: 3,
    emoji: "🛍️",
    title: "Shopping",
    category: "Clothes",
    amount: 3500,
    date: "2025-10-07",
    color: "#AEC6CF" // blue shade
  },
  {
    id: 4,
    emoji: "🏠",
    title: "Rent",
    category: "Housing",
    amount: 15000,
    date: "2025-10-05",
    color: "#FF6961" // red shade
  },
  {
    id: 5,
    emoji: "🎬",
    title: "Netflix Subscription",
    category: "Entertainment",
    amount: 1600,
    date: "2025-10-01",
    color: "#CBAACB" // purple shade
  }
];

const Home = ({ navigation }) => {
  
  const totalSpent = expenseData.reduce((sum, item) => sum + item.amount, 0);
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
        <Text style={tw`text-white text-4xl mt-2 font-bold`}>${totalSpent.toFixed(2)}</Text>
      </View>

      {/* Expense List */}
      <FlatList
        data={expenseData} // empty for now
        renderItem={({ item }) => <ExpenseItemCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
