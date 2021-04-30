import 'firebase/firestore'

export const createProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    console.log('in projectAction', project)
    const firestore = firebase.firestore();
    const profile = getState().firebase.profile;
    console.log('profile', profile)
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};