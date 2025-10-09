import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'; 
import { expenseData } from '../screens/Home';




const ExpenseItemCard = ({item}) => {
  return (
    <View style={tw`bg-white rounded-2xl p-4 mx-5 mb-3 flex-row justify-between items-center shadow-sm`}>
      
    <View style={tw`flex-row items-center`}>
    <View style={tw` w-12 h-12 bg-gray-100 p-3 rounded-xl justify-center items-center mr-4`}>
      <Text>{item.emoji}</Text>
    </View>
    <View>
      <Text style={tw`text-base font-bold text-gray-800`}>{item.title}</Text>
      <View style={[tw` mt-1 px-2 py-1 rounded-lg self-start bg-orange-400`, { backgroundColor: item.color }]}>
      <Text style={tw`text-xs font-bold text-gray-700`}>{item.category}</Text>
     
    </View>
    </View>
    </View>
      <View style={tw`items-end`}>
        <Text style={tw`text-base font-bold text-black`}>{item.amount}</Text>
        <Text style={tw`text-xs text-gray-500 mt-1`}>{item.date}</Text>
      </View>
    </View>
  )
}

export default ExpenseItemCard