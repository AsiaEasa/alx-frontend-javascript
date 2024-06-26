import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const { photo: Photo, user: User } = await Promise.all({
      photo: uploadPhoto(),
      user: createUser()
    });

    return { Photo, User };
  } catch (error) {
    return { Photo: null, User: null };
  }
}
