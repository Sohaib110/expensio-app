import { StyleSheet, Text, View,ScrollView, TextInput, Pressable, Alert } from 'react-native'
import tw from 'twrnc';
import React from 'react'
import { useState } from 'react';

const Create = () => {
  const [amount, setAmount] =useState('');
  const [title, setTitle] =useState('');
  const handleExpense = () => {
    if (!amount || !title) {
      Alert.alert('Missing Fields', 'Please enter both amount and title');
      return;
    }
  
    Alert.alert('Expense Added', `Amount: ${amount}\nTitle: ${title}`);
    setAmount('');
    setTitle('');
  };
  
  
  return (
    <View>
      <ScrollView contentContainerStyle={tw`p-6`}>
        <Text style={tw`text-3xl font-bold text-black`}>Add new expense</Text>
        <Text style={tw`text-base text-gray-500 mt-2 mb-8`}>Enter the details of your expense to help you track your spending.</Text>
        <View style={tw`mb-5 `}>
          <Text style={tw`text-lg font-semibold text-gray-600 mb-2`}>Enter Amount</Text>
          <TextInput
          placeholder='$0.00' style={tw`border-2 border-blue-500 rounded-xl p-4  text-lg`}
          value={amount}
          onChangeText={setAmount}
          />
        </View>

        <View style={tw`mb-5`}> 
        <Text style={tw`text-lg font-semibold text-gray-600 mb-2`}>Title</Text>
        <TextInput
          placeholder='What was it for?' style={tw`border-2 border-gray-300 rounded-xl p-4  text-lg`}
          value={title}
          onChangeText={setTitle}
          />
        </View>

        <Pressable style={tw`bg-black p-6 rounded-lg mt-8 `} onPress={handleExpense}>
           <Text style={tw`text-white text-center text-lg font-bold`}>Add Expense</Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}

export default Create

const styles = StyleSheet.create({})