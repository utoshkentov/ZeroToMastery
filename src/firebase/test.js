import firebase from "firebase";
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('oBzCFeVqpcjuWTKGlK7m').collection('cartItems').doc('zJGoJtDhkzcVOmcvZF5T');
firestore.doc('/users/oBzCFeVqpcjuWTKGlK7m/cartItems/zJGoJtDhkzcVOmcvZF5T');
firestore.collection('/users/oBzCFeVqpcjuWTKGlK7m/cartItems');



