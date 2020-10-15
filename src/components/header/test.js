import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('pnajeXypauCjS43jE13A').collection('cartItems').doc('ZEfJtgW5XygMsQ34tfcV');
firestore.doc('users/pnajeXypauCjS43jE13A/cartItems/ZEfJtgW5XygMsQ34tfcV');
firestore.collection('users/pnajeXypauCjS43jE13A/cartItems');
