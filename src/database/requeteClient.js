import { clientcollection} from "./Connect";
import {  addDoc , getDocs,getDoc,doc , query, where} from 'firebase/firestore'


const dataUser = class{

    static InsertionUser = (into)=>{
        return new Promise(async (next)=>{
        await addDoc(clientcollection,into)
        .then(docRef=>{
               //   console.log('ss',docRef);
                 next({resultat:docRef})
        }).catch(error=>{
               //   console.log("eee",error);
                 next ({ erreur:error})
            })
         })
       
    }

    static AfficherUser = ()=>{
        let array =[]
        return new Promise(async (next)=>{
         await getDocs(clientcollection)
        .then(docRef=>{
          if (docRef.docs.length > 0) {

            docRef.forEach((doc) => {
              let data = doc.data()
              data.id =doc.id,
              array.push(data)
              next({success:array})  
            }) 
          } else {
            next({alert:"Aucun client n'\a été postulé pour le moment !"})   
          }
        }).catch(error=>{
               //   console.log("eee",error);
                 next ({ erreur:error})
            })
         })
       
    }

    static GetClientId = (id)=>{
      let array =[]
      return new Promise(async (next)=>{
      const q = query( clientcollection, where("user_id", "==", id));
      await getDocs(q)
      .then(docRef=>{
           if (docRef.docs.length > 0) {
                docRef.forEach((doc) => {
                let data = doc.data()
                data.id =doc.id,
                array.push(data)
                next({success:array})
                    });
           } else {
                next({alert: "Aucun client n'\a posté pour le moment !"})     
           }
              
      }).catch(error=>{
               // console.log("eee",error);
               next ({ erreur:error})
          })
       })
     
  }



}

export default dataUser