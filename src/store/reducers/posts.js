import { ADD_POST } from '../actions/actionTypes'

const initialState = {
  posts: [
    {
      id: Math.random(),
      nickname: 'Rafa zika',
      email: 'rafaelprr@policia.gov.sp',
      image: require('../../../assets/fruits.jpg'),
      comments: [
        {
          nickname: 'Matador de galinha',
          comment: 'Delicioso, não tanto quanto galinhas.'
        },
        {
          nickname: 'Luisa Sonsa',
          comment: 'Só minha cara é de sonsa ok?',
        }]
    },
    {
      id: Math.random(),
      nickname: 'Natanael Bom Corte',
      email: 'natanqintana.ulala@gmail.com',
      image: require('../../../assets/doidao.jpg'),
      comments: [
        {
          nickname: 'Matador de galinha',
          comment: 'Delicioso, não tanto quanto galinhas.'
        },
        {
          nickname: 'Luisa Sonsa',
          comment: 'Só minha cara é de sonsa ok?',
        }]
    },

  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload

        })
      }
    default:
      return state
  }
}

export default reducer