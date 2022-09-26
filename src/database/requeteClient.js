import { clientcollection} from "./Connect";
import {  addDoc , getDocs } from 'firebase/firestore'


const dataUser = class{

    static InsertionUser = (into)=>{
        console.log('sqfQSD',{...into});
        return new Promise(async (next)=>{
        await addDoc(clientcollection,into)
        .then(docRef=>{
                 console.log('ss',docRef);
                 next({success:docRef})
        }).catch(error=>{
                 console.log("eee",error);
                 next ({ erreur:error})
            })
         })
       
    }

    static AfficherUser = ()=>{
        let array =[]
        return new Promise(async (next)=>{
         await getDocs(clientcollection)
        .then(docRef=>{
          console.log('offf',docRef.docs);
          if (docRef.docs.length > 0) {

            docRef.forEach((doc) => {
              let data = doc.data()
              data.id =doc.id,
              array.push(data)
              console.log('ssss',array);
              next({success:array})  
            }) 
          } else {
            next({alert:"Aucun client n'\a posté pour le moment !"})   
          }
        }).catch(error=>{
                 console.log("eee",error);
                 next ({ erreur:error})
            })
         })
       
    }



}

export default dataUser