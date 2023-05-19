
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, getAuth, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'
import { useEffect } from 'react';
import initializaAuthentication from '../firebase/firebase.init'
import { useState } from 'react';

initializaAuthentication();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);



    //googlesignin
    const googleSignIn = (history, location) => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                console.log(user)
                setUser(user)

                const destination = location?.state?.from || "/home";
                console.log(destination)
                history(destination);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => {
                setLoading(false)
            });
    }

    //facebookSignin
    const facebookSignIn = () => {
        setLoading(true)
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)

            }).finally(() => {
                setLoading(false)
            });
    }
    //signout
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }

    //register
    const register = (name, email, password, location, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setUser(user);
                    const destination = location?.state?.from || "/home";
                    console.log(destination)
                    history(destination);
                }).catch((error) => {

                })




            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);

            });
    }

    //login
    const logIn = (email, password, history, location) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                const destination = location?.state?.from || "/home";
                console.log(destination)
                history(destination);

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => {
                setLoading(false)
            });
    }
    useEffect(() => {
        const unsubscribed =
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                } else {
                    setUser({});
                }
                setLoading(false)
            })
        return unsubscribed;
    }, [])
    useEffect(() => {
        fetch(`https://jutecrafts-server1.onrender.com/user/${user.email}`).then(res => res.json()).then(data => {
            setAdmin(data?.admin);
            console.log(data)
        })
    }, [user.email])
    const savedUser = (displayName, email, method) => {
        const userInfo = { email, displayName };
        console.log(userInfo)
        fetch('https://jutecrafts-server1.onrender.com/user', {
            method: method, headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(userInfo)
        }).then(res => res.json()).then(data => console.log(data))
    }
    return { user, error, logOut, logIn, register, googleSignIn, facebookSignIn, loading, admin }
}
export default useFirebase;