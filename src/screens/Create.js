import { StyleSheet, Text, View,ScrollView, TextInput } from 'react-native'
import tw from 'twrnc';
import React from 'react'

const Create = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={tw`p-6`}>
        <Text style={tw`text-3xl font-bold text-black`}>Add new expense</Text>
        <Text style={tw`text-base text-gray-500 mt-2 mb-8`}>Enter the details of your expense to help you track your spending.</Text>
        <View style={tw`mb-5 `}>
          <Text style={tw`text-lg font-semibold text-gray-600 mb-2`}>Enter Amount</Text>
          <TextInput
          placeholder='$0.00' style={tw`border-2 border-blue-500 rounded-xl p-4  text-lg`}
          value={'amount'}
          onChangeText={(text) => console.log(text)}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Create

const styles = StyleSheet.create({})