import { Component, OnInit } from '@angular/core';
import { getAuth, GoogleAuthProvider, signInWithPopup, user } from '@angular/fire/auth';


interface userInfo {
  email: String,
  name: String,
  accesToken: String
}
@Component({
  selector: 'app-fireadmin',
  templateUrl: './fireadmin.component.html',
  styleUrls: ['./fireadmin.component.css']
})

export class FireadminComponent implements OnInit {

  // if the admin is logged in or not
  public login: boolean;

  // create the object required to get auth from google
  private GoogleAuth: GoogleAuthProvider;

  // Plceholder for user data
  public userData: userInfo;

  // create the default values each time the component is created
  constructor() {
    this.GoogleAuth = new GoogleAuthProvider();
    this.login = false;
  }
  /**
   * 1.Do google authenication
   * 2. Set login value to true so the hidden components can be seen
   * 3. Receive data and serve data to the component
   */
  async loginWithGoogle() {

    const auth = getAuth();

    await signInWithPopup(auth, this.GoogleAuth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        this.userData = {
          name: user.displayName,
          email: user.email,
          accesToken: token
        }
        // change the login state to true so the welcome message can appear
        this.login = true

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  }
  ngOnInit(): void {
    console.log(this.userData)

  }

  // The following function is executed when the component is destroyed
  // ngOnDestroy(): void {
  //   this.login = false
  //   this.userData = null
  // }

}
