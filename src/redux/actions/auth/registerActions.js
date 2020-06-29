import * as firebase from "firebase/app"
import { history } from "../../../history"
import "firebase/auth"
import "firebase/database"
import axios from "axios"
import { config } from "../../../authServices/firebase/firebaseConfig"
import { api } from '../../config'

// Init firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

let firebaseAuth = firebase.auth()

export const signupWithFirebase = (email, password, name) => {
  return dispatch => {
    let userEmail = null,
      loggedIn = false
    // userName = null

    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        firebaseAuth.onAuthStateChanged(user => {
          result.user.updateProfile({
            displayName: name
          })
          if (user) {
            userEmail = user.email
            // let userName = user.displayName
            loggedIn = true
            dispatch({
              type: "SIGNUP_WITH_EMAIL",
              payload: {
                email: userEmail,
                name,
                isSignedIn: loggedIn
              }
            })
            dispatch({
              type: "LOGIN_WITH_EMAIL",
              payload: {
                email: userEmail,
                name
              }
            })
          }
        })
        history.push("/")
      })
      .catch(error => {
        console.log(error.message)
      })
  }
}

export const signupWithJWT = (perusahaan, nama_lengkap, email, password, password_c) => {
  return dispatch => {
    if(password === password_c){
      api
        .post("/register", {
          perusahaan: perusahaan,
          username: nama_lengkap,
          email: email,
          password: password,
          password_c: password_c,
        })
        .then(response => {
  
          if(response.data){
            alert("Register berhasil")
            history.push("/pages/login")
          }
  
        })
        .catch(err => {
          alert("Terjadi kesalahan")
        })
  
      }else{
        alert("Password tidak sama!")
      }
    }
}
