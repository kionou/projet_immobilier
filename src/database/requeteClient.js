import { usercollection} from "./Connect";
import {  addDoc , getDocs } from 'firebase/firestore'


const dataUser = class{

    static InsertionUser = (into)=>{
        console.log('sqfQSD',{...into});
        return new Promise(async (next)=>{
        await addDoc(usercollection,into)
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
       await getDocs(usercollection)
        .then(docRef=>{
          console.log('of',docRef.length);
          if (docRef) {
            console.log('of');
            
          } else {
            console.log('non');
            
          }
          
            console.log('ssss',docRef.doc); 
            docRef.forEach((doc) => {
              console.log('dd',doc);
           

            let data = doc.data()
            data.id =doc.id,
            array.push(data)
            console.log('ssss',array);
            next({success:array})  
          })
       
      
        }).catch(error=>{
                 console.log("eee",error);
                 next ({ erreur:error})
            })
         })
       
    }



}

export default dataUser