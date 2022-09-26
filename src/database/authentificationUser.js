import { auth } from "./Connect";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword , signOut , onAuthStateChanged} from "firebase/auth";


const connectUser = class{

   static AddUser  =async (into)=>{
    let email = into.email;
    let password = into.password
    createUserWithEmailAndPassword(auth,email,password)
    .then((cred)=>{
        console.log(cred.user);
    })
    .catch((err)=>{
        console.log(err.message);
    })
   }

  static ConnectUser  =async (into)=>{
    let email = into.email;
    let password = into.password
     signInWithEmailAndPassword(auth,email,password)
    .then((cred)=>{
        console.log(cred.user);
    })
    .catch((err)=>{
        console.log(err.message);
    })
   }

    static LogoutUser  =async ()=>{
    signOut(auth)
        .then(()=>{
        console.log("user deconnecter");
        })
        .catch((err)=>{
            console.log(err.message);
        })

   }

     static EtatUser  =async ()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user != nulll){
          console.log("user est:",user);
 
            }else{
                console.log('no');
            }
        })

      
        
      
   }



}



export default connectUser