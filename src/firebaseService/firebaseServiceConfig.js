const prodConfig = {
    apiKey           : "AIzaSyAJw7V3PzSkOfE12a99y0vrztmMrx7NYTM",
    authDomain       : "chindamo-ws.firebaseapp.com",
    databaseURL      : "https://chindamo-ws.firebaseio.com",
    projectId        : "chindamo-ws",
    storageBucket    : "chindamo-ws.appspot.com",
    messagingSenderId: "487797189030"
};

const devConfig = {
    apiKey           : "AIzaSyAJw7V3PzSkOfE12a99y0vrztmMrx7NYTM",
    authDomain       : "chindamo-ws.firebaseapp.com",
    databaseURL      : "https://chindamo-ws.firebaseio.com",
    projectId        : "chindamo-ws",
    storageBucket    : "chindamo-ws.appspot.com",
    messagingSenderId: "487797189030"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
