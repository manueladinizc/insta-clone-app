// NOTE: replace '1' with your Firebase auth user id (can be taken from Firebase at the auth section! Look for User UID)
/* eslint-disable no-plusplus */
// NOTE: replace 'zOnnCKKEAwMduP3WXrCwtRrKUT92' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(FirebaseApp) {
  const users = [
    {
      userId: process.env.REACT_APP_FIREBASE_USER_ID,
      username: 'manu',
      fullName: 'Manuela Diniz',
      emailAddress: 'manuela.mdc@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },
    {
      userId: '2',
      username: 'raphael',
      fullName: 'Raffaello Sanzio da Urbino',
      emailAddress: 'raphael@sanzio.com',
      following: [],
      followers: [process.env.REACT_APP_FIREBASE_USER_ID],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'dali',
      fullName: 'Salvador Dalí',
      emailAddress: 'salvador@dali.com',
      following: [],
      followers: [process.env.REACT_APP_FIREBASE_USER_ID],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'orwell',
      fullName: 'George Orwell',
      emailAddress: 'george@orwell.com',
      following: [],
      followers: [process.env.REACT_APP_FIREBASE_USER_ID],
      dateCreated: Date.now()
    }
  ];

  // 2-26-21: `for (const user in users)` will not work
  for (let k = 0; k < users.length; k++) {
    FirebaseApp.firestore().collection('users').add(users[k]);
  }

  for (let i = 1; i <= 5; ++i) {
    FirebaseApp
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: 'Saint George and the Dragon',
        likes: [],
        comments: [
          {
            displayName: 'dali',
            comment: 'Love this place, looks like my animal farm!'
          },
          {
            displayName: 'orwell',
            comment: 'Would you mind if I used this picture?'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}
