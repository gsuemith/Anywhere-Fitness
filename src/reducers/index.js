const initialState = {
  user: {},
  instructors: [],
  clients: [],
  classes: [],
  attending: [],
  enrolling: [],
  createClassForm: {
    name: '',
    type: '',
    level: '',
    location: '',
    dateTime: '',
    duration: 0,
  },
  searchForm: {
    instructor: '',
    type: '',
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