import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/Firebase.init";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);//eta use na korle page reload dile user ke abr login page e niye jabe

    const auth = getAuth();

    const singInUsingGoole = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user)
            }).catch((error) => {
                console.log(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);//eta jehetu ekta normal function tai ei khetre last e dite hobe
        });
        return () => unsubscribed; //eta use hoy performance Vhalo pawar jonno
    }, [])

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            setUser(error);
        })
            .finally(() => setIsLoading(false));

    }

    return {
        singInUsingGoole,
        user,
        logout,
        isLoading

    }
}


export default useFirebase;