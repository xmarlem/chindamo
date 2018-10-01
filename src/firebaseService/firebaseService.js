import config from './firebaseServiceConfig';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

import hash from 'object-hash';

class firebaseService {

    init()
    {
        !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
        this.db = firebase.database();
        this.auth = firebase.auth();
        //console.log("firebase db: " + this.db);
        //console.log("firebase auth: " + this.auth);
        this.dbc = firebase.firestore();
        this.dbc.settings({
            timestampsInSnapshots: true
        });
        // dbc.collection('employees').get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         console.log(`${doc.id} => ${doc.data()}`);
        //     });
        // });
    }

    saveIGPAIM = (form) => {
        if ( !firebase.apps.length )
        {
            return;
        }
        this.dbc.collection("assicurazioni").doc(`${form.name}-${hash(form)}`).set(form.values)
            .then(function(){
                console.log("Document succesfully written!");
            })
            .catch(function(error){
                console.error("Error writing document: ", error);
            });
    }

    getUserData = (userId) => {
        if ( !firebase.apps.length )
        {
            return;
        }
        return new Promise((resolve, reject) => {
            this.db.ref(`users/${userId}`)
                .once('value')
                .then((snapshot) => {
                    const user = snapshot.val();
                    resolve(user);
                });
        });
    };

    updateUserData = (user) => {
        if ( !firebase.apps.length )
        {
            return;
        }
        return this.db.ref(`users/${user.uid}`)
            .set(user);
    };

    onAuthStateChanged = (callback) => {
        if ( !this.auth )
        {
            return;
        }
        this.auth.onAuthStateChanged(callback);
    };

    signOut = () => {
        if ( !this.auth )
        {
            return;
        }
        this.auth.signOut();
    }
}

const instance = new firebaseService();

export default instance;
