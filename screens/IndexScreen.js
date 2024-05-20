import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import {Context} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

export default function IndexScreen() {
  const {state , addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      {/* <Text>IndexScreen </Text> */}
      <Button title="Add" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
          <View style={styles.Row} > 
            <Text style={styles.Title} >{item.title}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)} >
            <Feather name="trash" size={24} color="black" />
            </TouchableOpacity>
          </View>);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: 'gray',
  },
  Title:{
    fontSize: 18,
  }
});
