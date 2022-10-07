import { agentcollection} from "./Connect";
import {  addDoc , getDocs ,getDoc,doc,setDoc,deleteDoc } from 'firebase/firestore'

const dataAgent = class{

    static InsertionAgent = (into)=>{
        console.log('sqfQSD',{...into});
        return new Promise(async (next)=>{
        await addDoc(agentcollection,into)
        .then(docRef=>{
                 console.log('ss',docRef);
                 next({success:docRef})
        }).catch(error=>{
                 console.log("eee",error);
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
                console.log('ssss',array);
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
      console.log(id)
        return new Promise(async (next)=>{
        const docRef = doc(agentcollection, id);
         await getDoc(docRef)
        .then(docRef=>{
                 console.log('ss',docRef.data());
                 next({success:docRef.data()})
        }).catch(error=>{
                 console.log("eee",error);
                 next ({ erreur:error})
            })
         })
       
    }


    static DeleteAgent = (id)=>{
      console.log('sqfQSD',id);
      return new Promise(async (next)=>{
      await deleteDoc(doc(agentcollection, id))
      .then(resultat=>{
               console.log('ss',resultat);
               next({success:'supprimer avec success'})
      }).catch(error=>{
               console.log("eee",error);
               next ({ erreur:error})
          })
       })

      }

      static UpdateAgent = (id,into)=>{
        console.log('sqfQSD',id,into.image);
        console.log('sqfQdgsgsgSD',into.image);
        return new Promise(async (next)=>{
          if (into.image === '') {
            console.log('besion de image');

            const docRef = doc(agentcollection, id);
            await getDoc(docRef)
           .then(docRef=>{
                     let data = docRef.data().image
                     into.image = data
                    const update = doc(agentcollection, id);
                    setDoc(update,into,{ merge:true })
                    console.log( setDoc(update,into,{ merge:true }));
                    next({success:docRef.data()})         
           }).catch(error=>{
                    console.log("eee",error);
                    next ({ erreur:error})
               })
            
          } else {

            const update = doc(agentcollection, id);
            setDoc(update,into,{ merge:true })
            .then(docRef=>{
                    console.log('ss',docRef);
                    next({success:"reussis"})
            }).catch(error=>{
                    console.log("eee",error);
                    next ({ erreur:error})
                })
              
            
          }
         })
       
    }

}

export default dataAgent

