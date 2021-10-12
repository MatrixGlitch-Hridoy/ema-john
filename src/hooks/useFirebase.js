import {useEffect, useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../components/firebase/firebase.init';

initializeAuthentication();
const useFirebase = ()=> {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            console.log(result.user);
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);  
          });
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
        })
    },[])

    return {
        user,
        error,
        signInUsingGoogle,
        logOut   
    }
}
export default useFirebase;