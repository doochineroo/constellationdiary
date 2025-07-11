import {auth, db} from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const signupUser = async(email, password, zodia) =>{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "user", user.uid),{
        email,
        zodiac,
        createdAt : new Date(),
    });

    return user;

};
export const loginUser = async(email, password)=>{
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;

};

