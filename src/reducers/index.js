const initialState = {
  user: {},
  instructors: [],
  clients: [],
  classes: [],
  attending: [],
  enrolling: [],
  createClassForm: {
    sport: '',
    level: '',
    location: '',
    dateTime: '',
    duration: 0,
  },
  searchForm: {
    sport: '',
    level: '',
    location: '',
    startDateTime: '',
    endDateTime: '',
    maxDuration: '',
  },
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  // case typeName:
  //   return { ...state, ...payload }

  default:
    return state
  }
}

export default reducer