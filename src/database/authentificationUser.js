import { auth,usercollection } from "./Connect";
import { doc, setDoc ,getDoc,deleteDoc} from "firebase/firestore"; 
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword , signOut , onAuthStateChanged,updateProfile,deleteUser} from "firebase/auth";




// const user = auth.currentUser;



const connectUser = class{

    static AddUser  =async (into,authentification)=>{

        let email = authentification.email;
        let password = authentification.password
        

        return new Promise(async (next)=>{
        await createUserWithEmailAndPassword(auth,email,password)
            .then(async (cred)=>{
                updateProfile(cred.user,{displayName: 'user'})
                await setDoc(doc(usercollection, cred.user.uid),into)
                .then(()=>{
                    signOut(auth)
                    next({success:"Enregistrer avec success"}) 
                })
                .catch((err)=>{
                    console.log(err.message);
                })
                
            })
            .catch((err)=>{
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
        })
         })
   
   }

    static LogoutUser  =async ()=>{
    signOut(auth)
        .then(()=>{
        return {rs:"user deconnecter"}
        })
        .catch((err)=>{
        })

   }

     static EtatUser  = async ()=>{
      await  onAuthStateChanged(auth,(user)=>{
        if (user != null) {

            return user
            
            
        } else {

            return 
        }
            
        })

      
        
      
   }

   static GetUserId = (id)=>{

      return new Promise(async (next)=>{
      const docRef = doc(usercollection, id);
       await getDoc(docRef)
      .then(docRef=>{
            //    console.log('ss',docRef.data());
               next({success:docRef.data()})
      }).catch(error=>{
            //    console.log("eee",error);
               next ({ erreur:error})
          })
       })
     
  }

  static DeleteUser =  (email,password,id)=>{



        return new Promise(async (next)=>{
            await  signInWithEmailAndPassword(auth,email,password)
            .then((cred)=>{
                 deleteUser(auth.currentUser)
                .then( async (rs) => {
                    await deleteDoc(doc(usercollection, id))
                    .then(resultat=>{

                 next ({ success:"supprimer avec success"})
            
                    }).catch(error=>{
                    next ({ error:error})
                    })
                })
                .catch((error) => {
                });
            
            })
            .catch((err)=>{
                 next ({ erreur:err.code})
                console.log("eee",err.code);
            })
        })

 

    }
  static UpdateUser = (id,into)=>{

    return new Promise(async (next)=>{
      if (into.image === '') {

        const docRef = doc(usercollection, id);
        await getDoc(docRef)
       .then(docRef=>{
                 let data = docRef.data().image
                 into.image = data
                const update = doc(usercollection, id);
                setDoc(update,into,{ merge:true })
                .then(rs=>{
                next({success:"reussis"})         
                }).catch(err=>{

                    next ({ error:err})
                })
       }).catch(error=>{

                next ({ erreur:error})
           })
        
      } else {

        const update = doc(usercollection, id);
        setDoc(update,into,{ merge:true })
        .then(docRef=>{
                next({success:"reussis"})
        }).catch(error=>{
                next ({ erreur:error})
            })
          
        
      }
     })
   
}



}



export default connectUser