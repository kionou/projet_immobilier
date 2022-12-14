import { bienCollection} from "./Connect";
import { addDoc , getDocs,getDoc,doc,setDoc,deleteDoc ,updateDoc, query, where} from 'firebase/firestore'

const dataBien = class{

    static InsertionBien = (into)=>{
        return new Promise(async (next)=>{
        await addDoc(bienCollection,into)
        .then(docRef=>{
               //   console.log('ss',docRef);
                 next({success:docRef})
        }).catch(error=>{
               //   console.log("eee",error);
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
               next({success:array})
                   });
          } else {
               next({alert:"Aucun bien immobilier disponible pour le moment !"})
               
          }
         
               
        }).catch(error=>{
                 next ({ erreur:error})
            })
         })
       
    }

    static GetBienId = (id)=>{
        return new Promise(async (next)=>{
        const docRef = doc(bienCollection, id);
         await getDoc(docRef)
        .then(docRef=>{
               //   console.log('ss',docRef.data());
                 next({success:docRef.data()})
        }).catch(error=>{
               //   console.log("eee",error);
                 next ({ erreur:error})
            })
         })
       
    }
    static GetBienUser = (id)=>{
     let array =[]
     return new Promise(async (next)=>{
     const q = query(bienCollection, where("user_id", "==", id));
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
               next({alert: 'Vous n\'aviez pas de bien immobilier pour l\'instant!'})     
          }
             
     }).catch(error=>{
          //     console.log("eee",error);
              next ({ erreur:error})
         })
      })
    
 }

    static RechercheBien = (into)=>{
       let array =[]
     return new Promise(async (next)=>{
     const q = query(bienCollection, where("nom_bien", "==", into.nom));
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
               next({alert: 'Aucun resultat trouv??'})     
          }
             
     }).catch(error=>{
          //     console.log("eee",error);
              next ({ erreur:error})
         })
      })
       
    }


    static UpdateBien = (id,into)=>{
     return new Promise(async (next)=>{
       if (into.images === '') {
         const docRef = doc(bienCollection, id);
         await getDoc(docRef)
        .then(docRef=>{
                  let data = docRef.data().images
                  into.images = data
                 const update = doc(bienCollection, id);
                 setDoc(update,into,{ merge:true })
                 next({success:"reussi"})         
        }).catch(error=>{
                 console.log("eee",error);
                 next ({ erreur:error})
            })
         
       } else {

         const update = doc(bienCollection, id);
         setDoc(update,into,{ merge:true })
         .then(docRef=>{
                 next({success:"reussis"})
         }).catch(error=>{
               //   console.log("eee",error);
                 next ({ erreur:error})
             })
           
         
       }
      })
    
 }

    static DeleteBien = (id)=>{
     return new Promise(async (next)=>{
     await deleteDoc(doc(bienCollection, id))
     .then(resultat=>{
              next({success:'supprimer avec success'})
     }).catch(error=>{
          //     console.log("eee",error);
              next ({ erreur:error})
         })
      })
    
 }


static DeleteBienAgent = (id)=>{
     return new Promise(async (next)=>{
     const q = query(bienCollection, where("user_id", "==", id));
     await getDocs(q)
     .then(docRef=>{
          if (docRef.docs.length > 0) {
               docRef.forEach( async (result) => {
               let data = result.data()
               data.id =result.id,
                await deleteDoc(doc(bienCollection, data.id))
                    .then(resultat=>{
                    }).catch(error=>{
                             console.log("eee",error);
                             next ({ erreur:error})
                        })

                   })
               next({success:'suppression de tous les biens  avec success'})

          } else {
               next({alert: 'Vous n\'aviez pas de bien immobilier pour l\'instant!'})     
          }
             
     }).catch(error=>{
          //     console.log("eee",error);
              next ({ erreur:error})
         })
      })
    
 }

 static UpdateBienVendu = async (id)=>{


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
               //     console.log("eee",error);
                   next ({ erreur:error})
              })
           })


  
    
 }


}

export default dataBien









