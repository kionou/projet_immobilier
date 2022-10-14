import {auth, agentcollection} from "./Connect";
import {  addDoc , getDocs ,getDoc,doc,setDoc,deleteDoc } from 'firebase/firestore'
import {signInWithEmailAndPassword ,deleteUser} from "firebase/auth";
import dataBien from "./requeteBien";

const dataAgent = class{

    static InsertionAgent = (into)=>{
        return new Promise(async (next)=>{
        await addDoc(agentcollection,into)
        .then(docRef=>{
                //  console.log('ss',docRef);
                 next({success:docRef})
        }).catch(error=>{
                //  console.log("eee",error);
                 next ({ erreur:error})
            })
         })
       
    }

    static AfficherAgent = ()=>{
        let array =[]
        return new Promise(async (next)=>{
       await getDocs(agentcollection)
        .then(docRef=>{
          if (docRef.docs.length > 0) {
            docRef.forEach((doc) => {
                let data = doc.data()
                data.id =doc.id,
                array.push(data)
                next({success:array})  
              })
            
          } else {
            next({alert:"Aucun Agent inscri pour le moment !"}) 
            
          }

        }).catch(error=>{
                 console.log("eee",error);
                 next ({ erreur:error})
            })
         })
       
    }

    static GetAgnetId = (id)=>{
        return new Promise(async (next)=>{
        const docRef = doc(agentcollection, id);
         await getDoc(docRef)
        .then(docRef=>{
                //  console.log('ss',docRef.data());
                 next({success:docRef.data()})
        }).catch(error=>{
                //  console.log("eee",error);
                 next ({ erreur:error})
            })
         })
       
    }


    static DeleteAgent = (email,password,id)=>{

      return new Promise(async (next)=>{
        await  signInWithEmailAndPassword(auth,email,password)
        .then((cred)=>{
              deleteUser(auth.currentUser)
            .then( async (rs) => {
                await deleteDoc(doc(agentcollection, id))
                .then(resultat=>{
                  dataBien.DeleteBienAgent(id)
                  .then(docRef=>{
                    console.log('ss',docRef);
                     next({docRef})
                 }).catch(error=>{
                    console.log("eee",error);
                    next ({ erreur:error})
               })
                }).catch(error=>{
                console.log("eee",error);
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

      static UpdateAgent = (id,into)=>{
        return new Promise(async (next)=>{
          if (into.image === '') {
            const docRef = doc(agentcollection, id);
            await getDoc(docRef)
           .then(docRef=>{
                     let data = docRef.data().image
                     into.image = data
                    const update = doc(agentcollection, id);
                    setDoc(update,into,{ merge:true })
                      .then(rs=>{
                        next({success:"reussis"})         
                      }).catch(err=>{
                          // console.log("eee",err);
                          next ({ error:err})
                      })        
           }).catch(error=>{
                    // console.log("eee",error);
                    next ({ erreur:error})
               })
            
          } else {

            const update = doc(agentcollection, id);
            setDoc(update,into,{ merge:true })
            .then(docRef=>{
                    // console.log('ss',docRef);
                    next({success:"reussis"})
            }).catch(error=>{
                    // console.log("eee",error);
                    next ({ erreur:error})
                })
              
            
          }
         })
       
    }

}

export default dataAgent

