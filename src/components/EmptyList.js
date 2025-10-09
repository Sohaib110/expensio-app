import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc'; // ✅ import twrnc properly

const EmptyList = ({ title, message }) => {
  title='No Expenses yet'
  message='Add a new expense to see it in your list'
  return (
    <View style={tw`justify-center items-center p-8 mt-10`}>
      <Text style={tw`text-6xl mb-4`}>📝</Text>
      <Text style={tw`text-xl font-bold text-gray-800 mb-3`}>
        {title}
      </Text>
      <Text style={tw`text-base text-gray-500 text-center mb-3`}>
        {message}
      </Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({});
