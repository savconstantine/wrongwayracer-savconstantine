const SET_PLAYERS = 'SET_PLAYERS'
const SET_CHAT = 'SET_CHAT'
const SET_ENEMY = 'SET_ENEMY'

const initialState = {
  records: [
    {
      id: 1,
      name: 'Miracle Levin',
      record: '2:44',
      rank: '1st'
    },
    {
      id: 2,
      name: 'Lindsey Bergson',
      record: '2:49',
      rank: '2nd'
    },
    {
      id: 3,
      name: 'Madelyn Levin',
      record: '2:54',
      rank: '3rd'
    },
    {
      id: 4,
      name: 'Leo Stanton',
      record: '3:22',
      rank: '4th'
    },
    {
      id: 5,
      name: 'Martin George',
      record: '3:24',
      rank: '5th'
    }
  ],
  players: [],
  chat: [],
  enemy: {
    isActive: false,
    direction: '',
    x: 0,
    y: 0
  }
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PLAYERS:
      return { ...state, players: action.payload }
    case SET_CHAT:
      return { ...state, chat: [...state.chat, action.payload] }
    case SET_ENEMY:
      return { ...state, enemy: action.payload }
    default:
      return state
  }
}

export const setPlayers = (players) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLAYERS,
      payload: players
    })
  }
}

export const setChat = (chat) => {
  return (dispatch) => {
    dispatch({
      type: SET_CHAT,
      payload: chat
    })
  }
}

export const setEnemy = (enemy) => {
  return (dispatch) => {
    dispatch({
      type: SET_ENEMY,
      payload: enemy
    })
  }
}
