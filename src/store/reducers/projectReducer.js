const initState = {}

// const initState = {
//     projects: [
//         {id: '1', title: 'the first try project', content: 'Something bla bla and some more bla'},
//         {id: '2', title: 'Second project of nothing', content: 'Cool bla bla and some more bla'},
//         {id: '3', title: 'Third bla project', content: 'Ha ha ha, bla bla and some more bla'}
//     ]
// }

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
}

export default projectReducer