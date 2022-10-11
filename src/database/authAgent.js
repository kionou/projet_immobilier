import { auth,agentcollection } from "./Connect";
import { doc, setDoc } from "firebase/firestore"; 
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword , signOut , updateProfile,onAuthStateChanged,updateEmail} from "firebase/auth";



const connectAgent = class{

    static AddAgent  =async (into,authentification)=>{

        let email = authentification.email;
        let password = authentification.password

        return new Promise(async (next)=>{
        await createUserWithEmailAndPassword(auth,email,password)
            .then(async (cred)=>{
                updateProfile(cred.user,{displayName: 'agent'})
                await setDoc(doc(agentcollection, cred.user.uid),into)
                .then(()=>{
                    signOut(auth)
                    next({success:"Enregistrer avec success"}) 
                })
                .catch((err)=>{

                })
                
            })
            .catch((err)=>{

                next ({ erreur:err.code})
            })
        
            })
    }


  static Agentconnect  =async (into)=>{
    let email = into.email;
    let password = into.password

    return new Promise(async (next)=>{

     await  signInWithEmailAndPassword(auth,email,password)
        .then((cred)=>{
            if (cred.user.displayName != "agent") { 
                signOut(auth)
                next({alert:"Email ou le Mot de passe est incorrect !"})
                
            } else {
                updateEmail(auth.currentUser, "user@example.com")
              next({success:cred})
                
            }

        })
        .catch((err)=>{

            next ({ erreur:err.code})
        })
         })
   
   }

    static LogoutAgent  =async ()=>{
    signOut(auth)
        .then(()=>{

        })
        .catch((err)=>{
            console.log(err.message);
        })

   }

   static updateAgent  =async (into)=>{
    
    await  signInWithEmailAndPassword(auth,email,password)
    .then(function(userCredential) {
        userCredential.user.updateEmail(into)
    })

   }

}



export default connectAgent