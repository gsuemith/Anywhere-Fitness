export const initialState = {
  user: {},
//   ex: {
//     "id": 1,
//     "username": "DavidGoggins"
// },
  instructors: [],
  clients: [],
  classes: [],
// ex:  {
//     "id": 1,
//     "name": "Group Power",
//     "type": "Strength Training",
//     "level": "Advanced",
//     "duration": "2.5 hours",
//     "classSize": "15",
//     "attendees": "10",
//     "location": 1
// },
  locations: [],
//   ex:  {
//     "id": 1,
//     "location": "AnyWhere Fitness West",
//     "date": "3/29/2021",
//     "startTime": "5:00 a.m."
// },
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
    type: '',
    level: '',
    location: '',
    name: '',
    startDateTime: '',
    endDateTime: '',
    maxDuration: '',
  },
}