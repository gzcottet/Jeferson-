// src/services/api.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmlFd8n-rR5NBWuCcuzKO_w6RfNfB_F0o",
  authDomain: "gerenciadororcamento-8fdae.firebaseapp.com",
  projectId: "gerenciadororcamento-8fdae",
  storageBucket: "gerenciadororcamento-8fdae.appspot.com",
  messagingSenderId: "442802377925",
  appId: "1:442802377925:web:efaec7810246f1be1a0cac",
  measureementID: "G-43CZVHN459"
 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
