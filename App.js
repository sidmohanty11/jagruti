import React, { useState, createContext } from 'react'
import Stacks from './routes/Stacks'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase-config';


export const UserContext = createContext()
const App = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: '',   //single_user(if user log in) or ngo(if ngo log in)
    location: '',
    isNgo: false,
    photoUrl: ''
  })
  return (
    <UserContext.Provider value={{
      user, setUser
    }}>
      <Stacks />
    </UserContext.Provider>
  )
}

export default App