import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import {Context} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

export default function IndexScreen( {navigation} ) {
  const {state , addBlogPost, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(()=>{
    getBlogPosts();
  },[]);

  return (
    <View>
      {/* <Button title="Add" onPress={addBlogPost} /> */}
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=> navigation.navigate('Show',{id:item.id})} >
              <View style={styles.Row} > 
                <Text style={styles.Title} >{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)} >
                <Feather name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>
          </TouchableOpacity>
          );
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
