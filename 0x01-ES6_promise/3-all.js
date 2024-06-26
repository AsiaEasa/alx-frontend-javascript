import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([P, U]) => {
      console.log(`${P.body} ${U.firstName} ${U.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
