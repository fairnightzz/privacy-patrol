import firebase_app from "./config";
import { getFirestore, addDoc, collection, PartialWithFieldValue, DocumentData } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function addData(collectionName: string, data: PartialWithFieldValue<DocumentData>) {
  let result = null;
  let error = null;

  try {
    result = await addDoc(collection(db, collectionName), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}