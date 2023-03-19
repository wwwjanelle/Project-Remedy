import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore, collection, 
    getDocs, addDoc, 
    deleteDoc, doc } from 'firebase/firestore';

const  firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET, 
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);

const datab = getFirestore()

// get collection data
const colRef = collection(datab, "proUserInfo")
getDocs(colRef).then((snapshot) => {
    // console.log(snapshot.docs)
    let pro = []
    snapshot.docs.forEach((doc) => {
        pro.push({ ...doc.data(), id: doc.id })
    })
    console.log(pro)
})
.catch(err => {
    console.log(err.message)
})

// adding docs
// const addPro = document.querySelector('.add')
// addPro.addEventListener('submit', (e) => {
//   e.preventDefault()

//   addDoc(colRef, {
//     fullName: addPro.fullName.value,
//     email: addPro.email.value,
//     hospitalID: addPro.hospitalID.value,
//     phoneNum: addPro.phoneNum.value,
//   })
//   .then(() => {
//     addPro.reset()
//   })
// })

// // deleting docs
// const deletePro = document.querySelector('.delete')
// deletePro.addEventListener('submit', (e) => {
//   e.preventDefault()

//   const docRef = doc(db, 'pro', deletePro.id.value)

//   deleteDoc(docRef)
//     .then(() => {
//       deletePro.reset()
//     })
// })

export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;