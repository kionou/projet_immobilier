import { bienCollection } from "./Connect";
import {  addDoc , getDocs,getDoc,doc,setDoc } from 'firebase/firestore'

const dataBien = class{

    static InsertionBien = (into)=>{
        console.log('sqfQSD',{...into});
        return new Promise(async (next)=>{
        await addDoc(bienCollection,into)
        .then(docRef=>{
                 console.log('ss',docRef);
                 next({success:docRef})
        }).catch(error=>{
                 console.log("eee",error);
                 next ({ erreur:error})
            })
         })
       
    }

    static AfficherBien = ()=>{
        let array =[]
        return new Promise(async (next)=>{
      await getDocs(bienCollection)
        .then(docRef=>{
            docRef.forEach((doc) => {
            let data = doc.data()
            data.id =doc.id,
            array.push(data)
            console.log('ssss',array);
            next({success:array})
           });
               
        }).catch(error=>{
                 console.log("eee",error);
                 next ({ erreur:error})
            })
         })
       
    }

    static GetBienId = (id)=>{
        // console.log('sqfQSD',id);
        return new Promise(async (next)=>{
        const docRef = doc(bienCollection, id);
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

    static UpdateBien = (id,into)=>{
        console.log('sqfQSD',id,into);
        return new Promise(async (next)=>{
        const docRef = doc(bienCollection, id);
          await setDoc(docRef,into,{ merge:true })
        .then(resultat=>{
                 console.log('ss',resultat);
                 next({success:resultat})
        }).catch(error=>{
                 console.log("eee",error);
                 next ({ erreur:error})
            })
         })
       
    }

}

export default dataBien





