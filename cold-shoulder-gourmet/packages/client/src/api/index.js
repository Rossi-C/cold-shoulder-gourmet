import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getBusinessInfo = async () => {
    const docRef = doc(db, "business", "info");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return false;
    }
}

export const getAdmins = async () => {
    const docRef = doc(db, "business", "admin");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return false;
    }
}

export const updateNewsLetter = async (email) => {
    const docRef = doc(db, "business", "newsletter");
    let obj = {}
    obj[email] = true;
    await setDoc(docRef, obj, { merge: true })
}

export const getIG = async () => {
    const response = await fetch('http://localhost:4000/env');
    const {key} = await response.json();
    return key
}

