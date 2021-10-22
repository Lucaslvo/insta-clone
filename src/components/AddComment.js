import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../store/actions/posts'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback as TWF,
  Alert,
  Button
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


function AddComment(props) {
  const [editMode, setEditMode] = useState(false)
  const [comment, setComment] = useState('')
  let commentArea = null

  const handleAddComment = () => {
    props.onAddComment({
      postId: props.postId,
      comment: {
        nickname: props.name,
        comment: comment
      }
    })
    setComment('')
    setEditMode(false)
  }

  if (editMode) {
    commentArea = (
      <View style={{ flex: 1 }}>
        <TextInput
          autoFocus={true}
          value={comment}
          placeholder='Adicione um comentario'
          style={styles.input}
          onChangeText={comment => { setComment(comment) }}
          onSubmitEditing={handleAddComment}
        />
        {console.log(props)}
        <TWF onPress={() => setEditMode(false)}>
          <Icon name='times' size={15} color='#555' />
        </TWF>
      </View>
    )
  }

  else {
    commentArea = (
      <TWF onPress={() => setEditMode(true)}>
        <View style={styles.container}>
          <Icon name='comment-o' size={25} color='#555' />
          <Text style={styles.caption}>
            Adicione um comentário..
          </Text>
        </View>
      </TWF>
    )


  }

  return (<View style={{ flex: 1 }}>
    {commentArea}
  </View>)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#CCC'

  },
  input: {
    width: '90%'
  }
})

const mapStateToProps = ({ user }) => {
  return {
    name: user.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddComment: payload => dispatch(addComment(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment)