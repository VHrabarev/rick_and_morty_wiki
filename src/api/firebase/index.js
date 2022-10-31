import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAgyY9zhFJksd6Y2qaY0Pre9sl--Z6snx8",
    authDomain: "rick-and-morty-wiki-e7b5d.firebaseapp.com",
    projectId: "rick-and-morty-wiki-e7b5d",
    storageBucket: "rick-and-morty-wiki-e7b5d.appspot.com",
    messagingSenderId: "116590371439",
    appId: "1:116590371439:web:a4e47c76ced9cec616a39a"
};

const app = initializeApp(firebaseConfig);

export default app;