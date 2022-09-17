import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getBusinessInfo = async () => {
    const docRef = doc(db, "business", "info");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Document data:", data);
        return data
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

