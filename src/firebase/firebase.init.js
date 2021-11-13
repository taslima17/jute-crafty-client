import firebaseConfig from "./firebase.config";
import { initializeApp } from 'firebase/app';

const initializaAuthentication = () => {
    initializeApp(firebaseConfig)
}
export default initializaAuthentication