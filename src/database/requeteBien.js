import { bienCollection} from "./Connect";
import {  addDoc , getDocs,getDoc,doc,setDoc,deleteDoc ,updateDoc, query, where} from 'firebase/firestore'

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
          if (docRef.docs.length > 0) {
               docRef.forEach((doc) => {
               let data = doc.data()
               data.id =doc.id,
               array.push(data)
               console.log('ssss',array);
               next({success:array})
                   });
          } else {
               next({alert:"Aucun bien immobilier disponible pour le moment !"})
               
          }
         
               
        }).catch(error=>{
                 console.log("eee",error);
                 next ({ erreur:error})
            })
         })
       
    }

    static GetBienId = (id)=>{
        console.log('sqfQSD',id);
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
    static GetBienUser = (id)=>{
     let array =[]
     console.log('sqfQSD',id);
     return new Promise(async (next)=>{
     const q = query(bienCollection, where("user_id", "==", id));
     await getDocs(q)
     .then(docRef=>{
          console.log('rrf',docRef)
          if (docRef.docs.length > 0) {
               docRef.forEach((doc) => {
               let data = doc.data()
               data.id =doc.id,
               array.push(data)
               console.log('ssss',array);
               next({success:array})
                   });
          } else {
               console.log('df<df');
               next({alert: 'Vous n\'aviez pas de bien immobilier pour l\'instant!'})     
          }
             
     }).catch(error=>{
              console.log("eee",error);
              next ({ erreur:error})
         })
      })
    
 }

//     static UpdateBien = (id,into)=>{
//         console.log('sqfQSD',id,into);
//         return new Promise(async (next)=>{
//         const docRef = doc(bienCollection, id);
//           await setDoc(docRef,into,{ merge:true })
//         .then(resultat=>{
//                  console.log('ss',resultat);
//                  next({success:resultat})
//         }).catch(error=>{
//                  console.log("eee",error);
//                  next ({ erreur:error})
//             })
//          })
       
//     }


    static UpdateBien = (id,into)=>{
     console.log('sqfQSD',id,into.images);
     console.log('sqfQdgsgsgSD',into.images);
     return new Promise(async (next)=>{
       if (into.images === '') {
         console.log('besion de image');

         const docRef = doc(bienCollection, id);
         await getDoc(docRef)
        .then(docRef=>{
                  let data = docRef.data().images
                  into.images = data
                 const update = doc(bienCollection, id);
                 setDoc(update,into,{ merge:true })
                 console.log( setDoc(update,into,{ merge:true }));
                 next({success:"reussi"})         
        }).catch(error=>{
                 console.log("eee",error);
                 next ({ erreur:error})
            })
         
       } else {

         const update = doc(bienCollection, id);
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

    static DeleteBien = (id)=>{
     console.log('sqfQSD',id);
     return new Promise(async (next)=>{
     await deleteDoc(doc(bienCollection, id))
     .then(resultat=>{
              console.log('ss',resultat);
              next({success:'supprimer avec success'})
     }).catch(error=>{
              console.log("eee",error);
              next ({ erreur:error})
         })
      })
    
 }


 static UpdateBienVendu = async (id)=>{
     console.log('sqfQSD',id);

     return new Promise(async (next)=>{
          const docRef = doc(bienCollection, id);
           await getDoc(docRef)
          .then(docRef=>{
                   let data = {...docRef.data()}
                   data.status = "true"
                   const update = doc(bienCollection, id);
                    setDoc(update,data,{ merge:true })
                    next({success:docRef.data()})
          }).catch(error=>{
                   console.log("eee",error);
                   next ({ erreur:error})
              })
           })


  
    
 }


}

export default dataBien









