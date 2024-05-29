import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

export default function BlogPostForm({onSubmit, initialValues, isEditable}) {

    const [title, setTitle] = useState(initialValues ? initialValues.title : '') ;
    const [content, setContent] = useState(initialValues ? initialValues.content : '');

  return (
    <View style={styles.Main} >
      <Text style={styles.Label} >Enter The Title:</Text>
      <TextInput style={styles.Input}
        value={title}
        onChangeText={(text)=>setTitle(text)} 
        />
      <Text style={styles.Label} >Enter The Content:</Text>
      <TextInput style={styles.Input}
       value={content}
       onChangeText={(text)=>setContent(text)} 
       />
      <TouchableOpacity style={styles.ButtonMain}
        onPress={()=> onSubmit(title,content)}>
        <View style={styles.ButtonView}>
          { isEditable 
          ? ( <Text style={styles.ButtonText}>Update</Text> )
          : ( <Text style={styles.ButtonText}>Save</Text> ) } 
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    Main:{
    marginTop: 10,
    },
    Label:{
    fontSize: 20,
    marginLeft: 10,
    },
    Input:{
    borderWidth:1,
    margin: 10,
    borderRadius: 20,
    padding: 5,
    fontSize: 18,
    marginBottom: 15,
    },
    ButtonMain:{
    padding: 30,
    },
    ButtonView:{
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    justifyContent:  'center',
    borderRadius: 20,
    },
    ButtonText:{
    color: 'white', 
    fontSize: 20,
    },
})