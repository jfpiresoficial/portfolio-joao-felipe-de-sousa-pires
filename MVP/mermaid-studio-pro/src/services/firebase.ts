import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, where, orderBy, getDocFromServer } from 'firebase/firestore';
import { FileItem } from '@/src/types';

// Use dynamic import for the optional config
let firebaseConfig: any = null;
try {
  // In this environment, the file might not exist yet
  // We'll try to load it safely
} catch (e) {
  console.log("Firebase config not found");
}

const app = !getApps().length && firebaseConfig ? initializeApp(firebaseConfig) : (getApps().length ? getApp() : null);
export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
export const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  if (!auth) return null;
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Auth error:", error);
    return null;
  }
};

export const logout = async () => {
  if (!auth) return;
  await auth.signOut();
};

// Firestore helpers
export const subscribeToFiles = (userId: string, callback: (files: FileItem[]) => void) => {
  if (!db) return () => {};
  
  const q = query(
    collection(db, 'files'),
    where('userId', '==', userId),
    orderBy('updatedAt', 'desc')
  );
  
  return onSnapshot(q, (snapshot) => {
    const files = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    })) as FileItem[];
    callback(files);
  });
};

export async function testConnection() {
  if (!db) return;
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if(error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}
