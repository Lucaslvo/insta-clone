import { ADD_REPORT } from '../actions/actionTypes'

const initialState = {
  reports: [
    {
      id: Math.random(),
      nickname: 'Seu Jorge',
      email: 'jorgssdaevidaloka@gmail.com',
      image: require('../../../assets/fruits.jpg'),
      categoria: 'Elétrica',
      titulo: 'Falta de manutenção na área rural',
      endereco: 'Rodovia Comandante João Ribeiro, Chácara Pedro Neto',
      data: new Date('11/01/2003'),
      descricao: 'Já faz mais ou menos uns 15 dias que temos instabilidade na região e até agora ninguém deu algum posicionamento sobre isso, já tentamos informar os responsáveis',

    },
    {
      id: Math.random(),
      nickname: 'Seu Jorge',
      email: 'jorgssdaevidaloka@gmail.com',
      image: require('../../../assets/fruits.jpg'),
      categoria: 'Elétrica',
      titulo: 'Falta de manutenção na área rural',
      endereco: 'Rodovia Comandante João Ribeiro, Chácara Pedro Neto',
      data: new Date(),
      descricao: 'Já faz mais ou menos uns 15 dias que temos instabilidade na região e até agora ninguém deu algum posicionamento sobre isso, já tentamos informar os responsáveis',

    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REPORT:
      return {
        ...state,
        reports: state.reports.concat({
          ...action.payload
        })
      }
    default:
      return state

  }
}

export default reducer