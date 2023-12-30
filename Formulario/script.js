const firebaseConfig = {
    apiKey: "AIzaSyBfpc3USqRlJkbOEF_kCUptr-aqt-46xug",
  authDomain: "datos-de-formulario-2590c.firebaseapp.com",
  projectId: "datos-de-formulario-2590c",
  storageBucket: "datos-de-formulario-2590c.appspot.com",
  messagingSenderId: "908473660209",
  appId: "1:908473660209:web:48ba6b7e358e41fba2f610",
  measurementId: "G-3K66XQ9PWV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();


document.getElementById('formulario').addEventListener('submit', (event) =>{
   event.preventDefault()
let entradaNombre  = document.getElementById ('name') 
let errorNombre  = document.getElementById ('nameError')

if(entradaNombre.value.trim() === ''){
    errorNombre.textContent = 'Por favor, introduce tu nombre'
    errorNombre.classList.add('error-message')

}else{

    errorNombre.textContent = ''
    errorNombre.classList.remove('error-message')
}

let emailEntrada = document.getElementById('email')
let emailError = document.getElementById('emailError')
let emailPattern = /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/;
if(!emailPattern.test(emailEntrada.value)){
    emailError.textContent = 'Por favor, introduce un correo válido'
    emailError.classList.add('error-message')
}else{
    emailError.textContent = ''
    emailError.classList.remove('error-message')
}

let contrasenaEntrada = document.getElementById('password')
let contrasenaError = document.getElementById('passwordError')
let contrasenaPattern = /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/;

if(contrasenaEntrada.value.length < 8) {
    contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres, números, mayúsculas, minúsculas y caracteres especiales '
contrasenaError.classList.add('error-message')

}else{
    contrasenaError.textContent = ''
    contrasenaError.classList.remove('error-message')
}

if(!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){

    db.collection("users").add({
        nombre: entradaNombre.value,
        email: emailEntrada.value,
        password: contrasenaEntrada.value
    })
    .then((docRef) => {
        alert('El formulario se ha enviado con exito', docRef.id)
        document.getElementById('formulario').reset();
    })
    .catch((error) => {
        alert(error)
    });

}

})
