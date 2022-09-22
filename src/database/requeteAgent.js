import { agentcollection} from "./Connect";
import {  addDoc , getDocs ,getDoc,doc,setDoc } from 'firebase/firestore'


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
        // console.log('sqfQSD',id);
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



}

export default dataAgent