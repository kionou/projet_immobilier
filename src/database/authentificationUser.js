import { auth,usercollection } from "./Connect";
import { doc, setDoc } from "firebase/firestore"; 
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword , signOut , onAuthStateChanged,updateProfile} from "firebase/auth";



const connectUser = class{

    static AddUser  =async (into,authentification)=>{

        let email = authentification.email;
        let password = authentification.password
        

        return new Promise(async (next)=>{
        await createUserWithEmailAndPassword(auth,email,password)
            .then(async (cred)=>{
                updateProfile(cred.user,{displayName: 'user'})
                await setDoc(doc(usercollection, cred.user.uid),into)
                .then((user)=>{
                    signOut(auth)
                    next({success:"Enregistrer avec success"}) 
                })
                .catch((err)=>{
                    console.log(err.message);
                })
                
            })
            .catch((err)=>{
                console.log(err.code);
                next ({ erreur:err.code})
            })
        
            })
    }


  static Userconnect  =async (into)=>{
    let email = into.email;
    let password = into.password

    return new Promise(async (next)=>{

     await  signInWithEmailAndPassword(auth,email,password)
        .then((cred)=>{
            if (cred.user.displayName == "user") { 
                next({user:cred})
                
            }  else if (cred.user.displayName == "agent") {
              next({agent:cred})
                
            } else{
              next({admin:cred})

            }

        })
        .catch((err)=>{

            next ({ erreur:err.code})
            console.log("eee",err.code);
        })
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

     static EtatUser  = async ()=>{
      await  onAuthStateChanged(auth,(user)=>{
        if (user != null) {
            console.log('user connect',user);
            return user
            
            
        } else {
            console.log('user');
            return 
        }
            
        })

      
        
      
   }



}



export default connectUser