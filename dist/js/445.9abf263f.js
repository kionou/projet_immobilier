"use strict";(self["webpackChunkprojet_immobilier"]=self["webpackChunkprojet_immobilier"]||[]).push([[445],{4379:function(e,l,t){var n,s=t(2482),o=t(125),i=t(6035),a=t(5866);const r=(n=class{},(0,s.Z)(n,"AddAgent",(async(e,l)=>{let t=l.email,n=l.password;return new Promise((async l=>{await(0,a.Xb)(o.I8,t,n).then((async t=>{(0,a.ck)(t.user,{displayName:"agent"}),await(0,i.pl)((0,i.JU)(o.mk,t.user.uid),e).then((()=>{(0,a.w7)(o.I8),l({success:"Enregistrer avec success"})})).catch((e=>{console.log(e.message)}))})).catch((e=>{console.log(e.code),l({erreur:e.code})}))}))})),(0,s.Z)(n,"Agentconnect",(async e=>{let l=e.email,t=e.password;return new Promise((async e=>{await(0,a.e5)(o.I8,l,t).then((l=>{"agent"!=l.user.displayName?((0,a.w7)(o.I8),e({alert:"Email ou le Mot de passe est incorrect !"})):((0,a.s)(o.I8.currentUser,"user@example.com"),e({success:l}))})).catch((l=>{e({erreur:l.code}),console.log("eee",l.code)}))}))})),(0,s.Z)(n,"LogoutAgent",(async()=>{(0,a.w7)(o.I8).then((()=>{console.log("user deconnecter")})).catch((e=>{console.log(e.message)}))})),(0,s.Z)(n,"updateAgent",(async e=>{await(0,a.e5)(o.I8,email,password).then((function(l){l.user.updateEmail(e)}))})),n);l["Z"]=r},8841:function(e,l,t){var n,s=t(2482),o=(t(7658),t(125)),i=t(6035);const a=(n=class{},(0,s.Z)(n,"InsertionUser",(e=>(console.log("sqfQSD",{...e}),new Promise((async l=>{await(0,i.ET)(o.K9,e).then((e=>{console.log("ss",e),l({resultat:e})})).catch((e=>{console.log("eee",e),l({erreur:e})}))}))))),(0,s.Z)(n,"AfficherUser",(()=>{let e=[];return new Promise((async l=>{await(0,i.PL)(o.K9).then((t=>{console.log("offf",t.docs),t.docs.length>0?t.forEach((t=>{let n=t.data();n.id=t.id,e.push(n),console.log("ssss",e),l({success:e})})):l({alert:"Aucun client n'a posté pour le moment !"})})).catch((e=>{console.log("eee",e),l({erreur:e})}))}))})),(0,s.Z)(n,"GetClientId",(e=>{let l=[];return console.log("sqfQSD",e),new Promise((async t=>{const n=(0,i.IO)(o.K9,(0,i.ar)("user_id","==",e));await(0,i.PL)(n).then((e=>{console.log("rrf",e),e.docs.length>0?e.forEach((e=>{let n=e.data();n.id=e.id,l.push(n),console.log("ssss",l),t({success:l})})):(console.log("df<df"),t({alert:"Aucun client n'a posté pour le moment !"}))})).catch((e=>{console.log("eee",e),t({erreur:e})}))}))})),n);l["Z"]=a},156:function(e,l,t){t.d(l,{Z:function(){return I}});var n=t(3396),s=t(9242);const o=e=>((0,n.dD)("data-v-01378a45"),e=e(),(0,n.Cn)(),e),i={class:"modal-container"},a={class:"modal"},r=o((()=>(0,n._)("h1",null,"Modifier des biens immobiliers",-1))),c={action:""},d={class:"form_groupe"},u={class:"form_groupe"},p={class:"form_groupe"},m={class:"form_groupe"},g={class:"textArea"},h={class:"textArea"},v={class:"custom-file-upload"},_=o((()=>(0,n._)("i",{class:"fa fa-cloud-upload"},null,-1))),b=(0,n.Uk)(" Téléchargement personnalisé "),w={class:"boutton"},f=["disabled"];function y(e,l,t,o,y,D){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",i,[(0,n._)("div",a,[r,(0,n._)("form",c,[(0,n._)("div",d,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Non du bien","onUpdate:modelValue":l[0]||(l[0]=e=>y.nom_bien=e)},null,512),[[s.nr,y.nom_bien]]),(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Prix du bien","onUpdate:modelValue":l[1]||(l[1]=e=>y.prix=e)},null,512),[[s.nr,y.prix]])]),(0,n._)("div",u,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Nombre de pieces","onUpdate:modelValue":l[2]||(l[2]=e=>y.piece=e)},null,512),[[s.nr,y.piece]]),(0,n.wy)((0,n._)("input",{type:"text",placeholder:"superficie","onUpdate:modelValue":l[3]||(l[3]=e=>y.superficie=e)},null,512),[[s.nr,y.superficie]])]),(0,n._)("div",p,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Nombre de chambre","onUpdate:modelValue":l[4]||(l[4]=e=>y.chambre=e)},null,512),[[s.nr,y.chambre]]),(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Nombre de douche","onUpdate:modelValue":l[5]||(l[5]=e=>y.douche=e)},null,512),[[s.nr,y.douche]])]),(0,n._)("div",m,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Ville ","onUpdate:modelValue":l[6]||(l[6]=e=>y.ville=e)},null,512),[[s.nr,y.ville]]),(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Commune","onUpdate:modelValue":l[7]||(l[7]=e=>y.commune=e)},null,512),[[s.nr,y.commune]])]),(0,n._)("div",g,[(0,n.wy)((0,n._)("textarea",{name:"",id:"",cols:"71",rows:"4",placeholder:"Description","onUpdate:modelValue":l[8]||(l[8]=e=>y.description=e)},null,512),[[s.nr,y.description]])]),(0,n._)("div",h,[(0,n.wy)((0,n._)("textarea",{name:"",id:"",cols:"71",rows:"4",placeholder:"service","onUpdate:modelValue":l[9]||(l[9]=e=>y.service=e)},null,512),[[s.nr,y.service]])]),(0,n.wy)((0,n._)("input",{type:"hidden","onUpdate:modelValue":l[10]||(l[10]=l=>e.user_id=l)},null,512),[[s.nr,e.user_id]]),(0,n._)("label",v,[(0,n._)("input",{type:"file",onChange:l[11]||(l[11]=(...e)=>D.upload&&D.upload(...e)),multiple:"",ref:"input"},null,544),_,b]),(0,n._)("div",w,[(0,n._)("button",{disabled:y.isActive,onClick:l[12]||(l[12]=(0,s.iM)(((...e)=>D.valider&&D.valider(...e)),["prevent"]))},"Modifier un bien",8,f)])])])])])}t(7658);var D=t(1602),k=t(125),C=t(1992),x={name:"UpdateBien",props:["id"],components:{},data(){return{isActive:!1,nom_bien:"",prix:"",piece:"",superficie:"",chambre:"",douche:"",ville:"",commune:"",description:"",service:"",image:""}},methods:{async valider(){let e={nom_bien:this.nom_bien,prix:this.prix,piece:this.piece,superficie:this.superficie,chambre:this.chambre,douche:this.douche,ville:this.ville,commune:this.commune,description:this.description,service:this.service,images:this.image,user_id:this.user_id,status:this.status};console.log(e);let l=await D.Z.UpdateBien(this.id,e);l.success?this.$router.go(-1):console.log("error 404")},async upload(e){const l=[];Object.values(e.target.files).forEach((e=>{console.log(e.name);const t=e,n={contentType:"image/jpeg"},s=(0,C.iH)(k.tO,"temp/"+t.name);l.push((0,C.KV)(s,t,n).then((e=>(0,C.Jt)(e.ref))))}));const t=await Promise.all(l);t&&(this.isActive=!1),this.image=t,console.log(this.image)}},async mounted(){let e=await D.Z.GetBienId(this.id);console.log(e.success.prix),e.success&&(this.nom_bien=e.success.nom_bien,this.prix=e.success.prix,this.piece=e.success.piece,this.superficie=e.success.superficie,this.chambre=e.success.chambre,this.douche=e.success.douche,this.ville=e.success.ville,this.commune=e.success.commune,this.description=e.success.description,this.service=e.success.service,this.user_id=e.success.user_id,this.status=e.success.status),this.$refs.input.addEventListener("click",(()=>{this.isActive=!0}))}},A=t(89);const $=(0,A.Z)(x,[["render",y],["__scopeId","data-v-01378a45"]]);var I=$},9432:function(e,l,t){t.d(l,{Z:function(){return g}});var n=t(3396),s=t(9242);const o=e=>((0,n.dD)("data-v-2cf2e9ce"),e=e(),(0,n.Cn)(),e),i={class:"container"},a=o((()=>(0,n._)("p",null,"vous voulez-vous supprimer ce agent ?",-1))),r={class:"boutton"};function c(e,l,t,o,c,d){return(0,n.wg)(),(0,n.iD)("div",null,[t.toggle?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"modal-container",id:"modal",onClick:l[2]||(l[2]=(0,s.iM)(((...e)=>t.agentDelete&&t.agentDelete(...e)),["self"]))},[(0,n._)("div",i,[a,(0,n._)("div",r,[(0,n._)("button",{onClick:l[0]||(l[0]=(...e)=>d.supp&&d.supp(...e))},"Oui"),(0,n._)("button",{onClick:l[1]||(l[1]=(...e)=>d.close&&d.close(...e))},"Non")])])])):(0,n.kq)("",!0)])}var d=t(8418),u={name:"DeleteBien",props:["toggle","agentDelete","Iddelete"],methods:{async supp(){let e=await d.Z.DeleteAgent(this.Iddelete);e.success&&location.reload()},close(){this.toggle=!1,console.log("ddd")}}},p=t(89);const m=(0,p.Z)(u,[["render",c],["__scopeId","data-v-2cf2e9ce"]]);var g=m},3682:function(e,l,t){t.d(l,{Z:function(){return v}});var n=t(3396),s=t(9242);const o=e=>((0,n.dD)("data-v-c87488d6"),e=e(),(0,n.Cn)(),e),i={class:"container"},a=o((()=>(0,n._)("p",null,"vous voulez-vous supprimer cette article ?",-1))),r={class:"boutton"},c={key:0,class:"loading"};function d(e,l,t,o,d,u){const p=(0,n.up)("ComponentLoading");return(0,n.wg)(),(0,n.iD)("div",null,[t.toggle?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"modal-container",id:"modal",onClick:l[2]||(l[2]=(0,s.iM)(((...e)=>t.bienDelete&&t.bienDelete(...e)),["self"]))},[(0,n._)("div",i,[a,(0,n._)("div",r,[(0,n._)("button",{onClick:l[0]||(l[0]=(...e)=>u.supp&&u.supp(...e))},"Oui"),(0,n._)("button",{onClick:l[1]||(l[1]=(...e)=>u.close&&u.close(...e))},"Non")])]),d.loading?((0,n.wg)(),(0,n.iD)("div",c,[(0,n.Wm)(p)])):(0,n.kq)("",!0)])):(0,n.kq)("",!0)])}var u=t(1602),p=t(8712),m={name:"DeleteBien",props:["toggle","bienDelete","Iddelete"],data(){return{loading:!1}},components:{ComponentLoading:p.Z},methods:{async supp(){this.loading=!0;let e=await u.Z.DeleteBien(this.Iddelete);e.success&&(location.reload(),this.loading=!1)},close(){this.$router.go(),console.log("ddd")}}},g=t(89);const h=(0,g.Z)(m,[["render",d],["__scopeId","data-v-c87488d6"]]);var v=h},7794:function(e,l,t){t.d(l,{Z:function(){return Z}});var n=t(3396),s=t(9242);const o=e=>((0,n.dD)("data-v-405fc256"),e=e(),(0,n.Cn)(),e),i={key:0,class:"loading"},a={key:1},r={class:"modal"},c=o((()=>(0,n._)("h1",null,"Enregistrement des biens immobiliers",-1))),d={class:"form_groupe"},u={class:"form_groupe"},p={class:"form_groupe"},m={class:"form_groupe"},g={class:"textArea"},h={class:"textArea"},v={class:"custom-file-upload"},_=o((()=>(0,n._)("i",{class:"fa fa-cloud-upload"},null,-1))),b=(0,n.Uk)(" Téléchargement personnalisé "),w={class:"boutton"},f=["disabled"];function y(e,l,t,o,y,D){const k=(0,n.up)("ComponentLoading");return(0,n.wg)(),(0,n.iD)("div",null,[y.loading?((0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(k)])):((0,n.wg)(),(0,n.iD)("div",a,[t.revele?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"modal-container",id:"modal",onClick:l[13]||(l[13]=(0,s.iM)(((...e)=>t.submit&&t.submit(...e)),["self"]))},[(0,n._)("div",r,[c,(0,n._)("form",null,[(0,n._)("div",d,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Non du bien","onUpdate:modelValue":l[0]||(l[0]=e=>y.nom_bien=e)},null,512),[[s.nr,y.nom_bien]]),(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Prix du bien","onUpdate:modelValue":l[1]||(l[1]=e=>y.prix=e)},null,512),[[s.nr,y.prix]])]),(0,n._)("div",u,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Nombre de pieces","onUpdate:modelValue":l[2]||(l[2]=e=>y.piece=e)},null,512),[[s.nr,y.piece]]),(0,n.wy)((0,n._)("input",{type:"text",placeholder:"superficie","onUpdate:modelValue":l[3]||(l[3]=e=>y.superficie=e)},null,512),[[s.nr,y.superficie]])]),(0,n._)("div",p,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Nombre de chambre","onUpdate:modelValue":l[4]||(l[4]=e=>y.chambre=e)},null,512),[[s.nr,y.chambre]]),(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Nombre de douche","onUpdate:modelValue":l[5]||(l[5]=e=>y.douche=e)},null,512),[[s.nr,y.douche]])]),(0,n._)("div",m,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Ville ","onUpdate:modelValue":l[6]||(l[6]=e=>y.ville=e)},null,512),[[s.nr,y.ville]]),(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Commune","onUpdate:modelValue":l[7]||(l[7]=e=>y.commune=e)},null,512),[[s.nr,y.commune]])]),(0,n._)("div",g,[(0,n.wy)((0,n._)("textarea",{name:"",id:"",cols:"71",rows:"4",placeholder:"Description","onUpdate:modelValue":l[8]||(l[8]=e=>y.description=e)},null,512),[[s.nr,y.description]])]),(0,n._)("div",h,[(0,n.wy)((0,n._)("textarea",{name:"",id:"",cols:"71",rows:"4",placeholder:"service","onUpdate:modelValue":l[9]||(l[9]=e=>y.service=e)},null,512),[[s.nr,y.service]])]),(0,n.wy)((0,n._)("input",{type:"hidden","onUpdate:modelValue":l[10]||(l[10]=l=>e.user_id=l)},null,512),[[s.nr,e.user_id]]),(0,n._)("label",v,[(0,n._)("input",{type:"file",onChange:l[11]||(l[11]=(...e)=>D.upload&&D.upload(...e)),multiple:""},null,32),_,b]),(0,n._)("div",w,[(0,n._)("button",{disabled:y.isActive,onClick:l[12]||(l[12]=(0,s.iM)(((...e)=>D.valider&&D.valider(...e)),["prevent"]))},"Ajouter un bien",8,f)])])])])):(0,n.kq)("",!0)]))])}t(7658);var D=t(1602),k=t(125),C=t(1992),x=t(8712),A={name:"ModalBien",props:["revele","submit","agentId"],components:{ComponentLoading:x.Z},data(){return{isActive:!0,nom_bien:"",prix:"",piece:"",superficie:"",chambre:"",douche:"",ville:"",commune:"",description:"",service:"",image:"",loading:!1}},methods:{async valider(){this.loading=!0;let e={nom_bien:this.nom_bien,prix:this.prix,piece:this.piece,superficie:this.superficie,chambre:this.chambre,douche:this.douche,ville:this.ville,commune:this.commune,description:this.description,service:this.service,images:this.image,user_id:this.agentId,status:!1};console.log(e);let l=await D.Z.InsertionBien(e);l.success?(this.$router.go(),this.loading=!1):console.log("error 404")},async upload(e){const l=[];Object.values(e.target.files).forEach((e=>{console.log(e.name);const t=e,n={contentType:"image/jpeg"},s=(0,C.iH)(k.tO,"temp/"+t.name);l.push((0,C.KV)(s,t,n).then((e=>(0,C.Jt)(e.ref))))}));const t=await Promise.all(l);t&&(this.isActive=!1),this.image=t,console.log(this.image)}}},$=t(89);const I=(0,$.Z)(A,[["render",y],["__scopeId","data-v-405fc256"]]);var Z=I},408:function(e,l,t){t.r(l),t.d(l,{default:function(){return gl}});var n=t(3396);function s(e,l,t,s,o,i){const a=(0,n.up)("ComponentDashbord");return(0,n.wg)(),(0,n.j4)(a)}var o=t(9202);const i=e=>((0,n.dD)("data-v-526a3f1f"),e=e(),(0,n.Cn)(),e),a={class:"container"},r={class:"menu"},c=i((()=>(0,n._)("div",{class:"image"},[(0,n._)("img",{src:o,alt:""})],-1))),d={class:"content"},u={class:"search"},p=i((()=>(0,n._)("form",{action:""},[(0,n._)("input",{type:"text",placeholder:"Recherchez"})],-1))),m={class:"btn"};function g(e,l,t,s,o,i){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",a,[(0,n._)("div",r,[c,(0,n._)("nav",null,[(0,n._)("p",{onClick:l[0]||(l[0]=e=>o.component="bien")},"Liste des Biens"),(0,n._)("p",{onClick:l[1]||(l[1]=e=>o.component="agent")},"Liste des Agents"),(0,n._)("p",{onClick:l[2]||(l[2]=e=>o.component="client")},"Liste des Clients")])]),(0,n._)("div",d,[(0,n._)("div",u,[p,(0,n._)("div",m,[(0,n._)("p",{onClick:l[3]||(l[3]=(...e)=>i.logout&&i.logout(...e))},"Deconnecter")])]),((0,n.wg)(),(0,n.j4)((0,n.LL)(o.component)))])])])}t(7658);var h=t(7139);const v=e=>((0,n.dD)("data-v-13005d62"),e=e(),(0,n.Cn)(),e),_={key:0,class:"loading"},b={key:1,class:"contenu"},w=v((()=>(0,n._)("p",null,"Ajouter un bien",-1))),f=[w],y={class:"contenu_card"},D={class:"carnet"},k={key:0,class:"alert"},C={key:1,class:"table-container"},x=v((()=>(0,n._)("h1",{class:"heading"}," La liste des biens Immobiliers ",-1))),A={class:"table"},$=v((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Nom du bien"),(0,n._)("th",null,"Prix"),(0,n._)("th",null,"Localite"),(0,n._)("th",null,"Action")])],-1))),I={"data-label":"date de l'acte"},Z={class:"doctor"},U={class:"images"},V=["src"],L={"data-label":"Vaccin utilisé"},z={"data-label":"Protège contre"},q={class:"doctor"},N=["onClick"],M=["onClick"],B=["onClick"];function j(e,l,t,s,o,i){const a=(0,n.up)("ModalBien"),r=(0,n.up)("DeleteBien"),c=(0,n.up)("ComponentLoading");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(a,{revele:o.revele,submit:i.submit,agentId:o.agentId},null,8,["revele","submit","agentId"]),(0,n.Wm)(r,{toggle:o.toggle,bienDelete:i.bienDelete,Iddelete:o.Iddelete},null,8,["toggle","bienDelete","Iddelete"]),((0,n.wg)(),(0,n.j4)((0,n.LL)(o.component))),o.loading?((0,n.wg)(),(0,n.iD)("div",_,[(0,n.Wm)(c)])):((0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("div",{class:"boutton",onClick:l[0]||(l[0]=e=>i.submit())},f),(0,n._)("div",y,[(0,n._)("div",D,[o.alert?((0,n.wg)(),(0,n.iD)("div",k,(0,h.zw)(o.alert),1)):((0,n.wg)(),(0,n.iD)("div",C,[x,(0,n._)("table",A,[$,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.biens,(e=>((0,n.wg)(),(0,n.iD)("tbody",{key:e.id},[(0,n._)("tr",null,[(0,n._)("td",I,[(0,n._)("div",Z,[(0,n._)("div",U,[(0,n._)("img",{src:e.images[0],alt:""},null,8,V)]),(0,n._)("p",null,(0,h.zw)(e.nom_bien),1)])]),(0,n._)("td",L,(0,h.zw)(e.prix)+"FCFA ",1),(0,n._)("td",z,(0,h.zw)(e.ville)+" "+(0,h.zw)(e.commune),1),(0,n._)("td",q,[(0,n._)("i",{class:"fa-solid fa-eye",onClick:l=>i.detail(e.id)},null,8,N),(0,n._)("i",{class:"fa-solid fa-pen-to-square",onClick:l=>i.redirect(e.id)},null,8,M),(0,n._)("i",{class:"fa-solid fa-trash",onClick:l=>i.bienDelete(e.id)},null,8,B)])])])))),128))])]))])])]))])}var E=t(1602),P=t(7794),W=t(156),H=t(3682),T=t(8712),F={name:"ComponentBien",props:["bien","Iddelete","agentId"],components:{ModalBien:P.Z,UpdateBien:W.Z,DeleteBien:H.Z,ComponentLoading:T.Z},data(){return{revele:!1,toggle:!1,component:"",biens:"",Iddelete:"",alert:"",agentId:"",loading:!0}},methods:{submit(){this.revele=!this.revele,this.agentId="001"},redirect(e){this.$router.push(`/dashbord/updatebien/${e}`)},bienDelete(e){this.toggle=!this.toggle,this.Iddelete=e},detail(e){this.$router.push(`/dashbord/bien/${e}`)}},async mounted(){let e=await E.Z.AfficherBien();console.log(e),e.success?(console.log(e.success),this.biens=e.success,this.loading=!1):e.alert?(this.alert=e.alert,this.loading=!1):console.log("err 404")}},K=t(89);const O=(0,K.Z)(F,[["render",j],["__scopeId","data-v-13005d62"]]);var G=O;const J=e=>((0,n.dD)("data-v-065beae6"),e=e(),(0,n.Cn)(),e),Y={ref:"scroll"},Q={key:0,class:"loading"},S={key:1,class:"contenu1"},R=J((()=>(0,n._)("p",null,"Ajouter un Agent",-1))),X=[R],ee={class:"contenaire_card"},le={key:0,class:"alert"},te={class:"card-image"},ne=["src"],se={class:"card-body"},oe={class:"body-text"},ie=J((()=>(0,n._)("i",{class:"fa-solid fa-user"},null,-1))),ae={class:"body-text"},re=J((()=>(0,n._)("i",{class:"fa-solid fa-envelope"},null,-1))),ce={class:"body-text"},de=J((()=>(0,n._)("i",{class:"fa-solid fa-phone"},null,-1))),ue={class:"icon"},pe=["onClick"],me=["onClick"];function ge(e,l,t,s,o,i){const a=(0,n.up)("ModalAgent"),r=(0,n.up)("DeleteAgent"),c=(0,n.up)("ComponentLoading");return(0,n.wg)(),(0,n.iD)("div",Y,[(0,n.Wm)(a,{revele:o.revele,submit:i.submit},null,8,["revele","submit"]),(0,n.Wm)(r,{toggle:o.toggle,agentDelete:i.agentDelete,Iddelete:o.Iddelete},null,8,["toggle","agentDelete","Iddelete"]),o.loading?((0,n.wg)(),(0,n.iD)("div",Q,[(0,n.Wm)(c)])):((0,n.wg)(),(0,n.iD)("div",S,[(0,n._)("div",{class:"boutton",onClick:l[0]||(l[0]=(...e)=>i.submit&&i.submit(...e))},X),(0,n._)("div",ee,[o.alert?((0,n.wg)(),(0,n.iD)("div",le,(0,h.zw)(o.alert),1)):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)(o.agents,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"content-card",key:e.id},[(0,n._)("div",te,[(0,n._)("img",{src:e.image,alt:""},null,8,ne)]),(0,n._)("div",se,[(0,n._)("div",oe,[ie,(0,n._)("p",null,(0,h.zw)(e.nom)+" "+(0,h.zw)(e.prenom),1)]),(0,n._)("div",ae,[re,(0,n._)("p",null,(0,h.zw)(e.email),1)]),(0,n._)("div",ce,[de,(0,n._)("p",null,(0,h.zw)(e.numero),1)]),(0,n._)("div",ue,[(0,n._)("i",{class:"fa-solid fa-pen-to-square",onClick:l=>i.update(e.id)},null,8,pe),(0,n._)("i",{class:"fa-solid fa-trash",onClick:l=>i.agentDelete(e.id)},null,8,me)])])])))),128))])]))],512)}var he=t(8418),ve=t(9242);const _e=e=>((0,n.dD)("data-v-fb87abbe"),e=e(),(0,n.Cn)(),e),be={class:"container"},we=_e((()=>(0,n._)("h3",null,"Ajouter un agent",-1))),fe={key:0},ye={key:1},De={key:2},ke={key:3},Ce={key:4},xe={key:5};function Ae(e,l,t,s,o,i){const a=(0,n.up)("ComponentModal"),r=(0,n.up)("ComponentLoading");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(a,{success:o.success,valider:i.valider,texte:o.texte},null,8,["success","valider","texte"]),t.revele?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"modal-container",id:"modal",onClick:l[6]||(l[6]=(0,ve.iM)(((...e)=>t.submit&&t.submit(...e)),["self"]))},[(0,n._)("div",be,[(0,n._)("form",null,[(0,n._)("small",null,(0,h.zw)(o.erreur),1),we,o.v$.nom.$error?((0,n.wg)(),(0,n.iD)("small",fe,(0,h.zw)(o.v$.nom.$errors[0].$message),1)):(0,n.kq)("",!0),(0,n.wy)((0,n._)("input",{type:"text ",placeholder:"Nom","onUpdate:modelValue":l[0]||(l[0]=e=>o.nom=e)},null,512),[[ve.nr,o.nom]]),o.v$.prenom.$error?((0,n.wg)(),(0,n.iD)("small",ye,(0,h.zw)(o.v$.prenom.$errors[0].$message),1)):(0,n.kq)("",!0),(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Prenom","onUpdate:modelValue":l[1]||(l[1]=e=>o.prenom=e)},null,512),[[ve.nr,o.prenom]]),o.v$.email.$error?((0,n.wg)(),(0,n.iD)("small",De,(0,h.zw)(o.v$.email.$errors[0].$message),1)):(0,n.kq)("",!0),(0,n.wy)((0,n._)("input",{type:"email",name:"email",placeholder:"Adresse Email","onUpdate:modelValue":l[2]||(l[2]=e=>o.email=e)},null,512),[[ve.nr,o.email]]),o.v$.numero.$error?((0,n.wg)(),(0,n.iD)("small",ke,(0,h.zw)(o.v$.numero.$errors[0].$message),1)):(0,n.kq)("",!0),(0,n.wy)((0,n._)("input",{type:"tel",name:"numero",placeholder:"Numero Téléphonique","onUpdate:modelValue":l[3]||(l[3]=e=>o.numero=e)},null,512),[[ve.nr,o.numero]]),o.v$.password.$error?((0,n.wg)(),(0,n.iD)("small",Ce,(0,h.zw)(o.v$.password.$errors[0].$message),1)):(0,n.kq)("",!0),(0,n.wy)((0,n._)("input",{type:"password",name:"password",placeholder:"Mot de passe","onUpdate:modelValue":l[4]||(l[4]=e=>o.password=e)},null,512),[[ve.nr,o.password]]),(0,n._)("button",{onClick:l[5]||(l[5]=(0,ve.iM)(((...e)=>i.valider&&i.valider(...e)),["prevent"]))},"Enregistrer"),o.loading?((0,n.wg)(),(0,n.iD)("div",xe,[(0,n.Wm)(r)])):(0,n.kq)("",!0)])])])):(0,n.kq)("",!0)])}var $e=t(4379),Ie=t(3053),Ze=t(4188),Ue=t(3401),Ve={name:"ModalAgent",components:{ComponentModal:Ue.Z,ComponentLoading:T.Z},props:["revele","submit","count"],data(){return{isActive:!0,nom:"",prenom:"",email:"",numero:"",password:"",v$:(0,Ie.ZP)(),erreur:"",success:!1,texte:"Enregistrement de l'Agent éffectué avec success.",loading:!1}},validations:{nom:{require:Ze.pF,lgmin:(0,Ze.Ge)(4),lgmax:(0,Ze.Cn)(20)},prenom:{require:Ze.pF,lgmin:(0,Ze.Ge)(4),lgmax:(0,Ze.Cn)(20)},email:{require:Ze.pF,ValidEmail:Ze.hN},numero:{require:Ze.pF,ValidNumeri:Ze.zm,lgmin:(0,Ze.Ge)(10),lgmax:(0,Ze.Cn)(12)},password:{require:Ze.pF,lgmin:(0,Ze.Ge)(6),lgmax:(0,Ze.Cn)(12)}},methods:{async valider(){if(this.loading=!0,this.v$.$touch(),0==this.v$.$errors.length){let e={email:this.email,nom:this.nom,prenom:this.prenom,numero:this.numero,image:"https://previews.123rf.com/images/apoev/apoev1903/apoev190300009/124806570-personne-gris-espace-r%C3%A9serv%C3%A9-photo-homme-en-t-shirt-sur-fond-gris.jpg?fj=1"},l={email:this.email,password:this.password};console.log(e,l);let t=await $e.Z.AddAgent(e,l);console.log(t),t.success?(this.success=!this.success,this.loading=!1):(this.erreur="Votre Adresse Email existe  déjà donc veillez-vous connecté.",this.loading=!1)}}}};const Le=(0,K.Z)(Ve,[["render",Ae],["__scopeId","data-v-fb87abbe"]]);var ze=Le,qe=t(9432),Ne={name:"ComponentAgent",props:["Iddelete"],components:{ModalAgent:ze,DeleteAgent:qe.Z,ComponentLoading:T.Z},data(){return{revele:!1,agents:"",alert:"",Iddelete:"",toggle:!1,loading:!0}},methods:{submit(){this.revele=!this.revele},agentDelete(e){console.log(e),this.toggle=!this.toggle,this.Iddelete=e},update(e){this.$router.push(`/update/${e}`)}},async mounted(){this.$refs.scroll.scrollTop=this.$refs.scroll.scrollHeight,this.$refs.scroll.scrollTo(0,document.body.scrollHeight);let e=await he.Z.AfficherAgent();console.log(e),e.success?(this.agents=e.success,this.loading=!1):e.alert?(this.alert=e.alert,this.loading=!1):console.log("erreu 404")}};const Me=(0,K.Z)(Ne,[["render",ge],["__scopeId","data-v-065beae6"]]);var Be=Me;const je=e=>((0,n.dD)("data-v-90d3ee8c"),e=e(),(0,n.Cn)(),e),Ee={ref:"scroll"},Pe={key:0,class:"loading"},We={key:1,class:"contenu"},He={class:"contenu_card"},Te={class:"carnet"},Fe={key:0,class:"alert"},Ke={key:1,class:"table-container"},Oe=je((()=>(0,n._)("h1",{class:"heading"}," La liste des clients ",-1))),Ge={class:"table"},Je=je((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Nom du client"),(0,n._)("th",null,"Adresse Email"),(0,n._)("th",null,"Numero"),(0,n._)("th",null,"Voir le bien")])],-1))),Ye={"data-label":"date de l'acte"},Qe={"data-label":"Vaccin utilisé"},Se={"data-label":"Protège contre"},Re={class:"doctor"},Xe=["onClick"];function el(e,l,t,s,o,i){const a=(0,n.up)("ComponentLoading");return(0,n.wg)(),(0,n.iD)("div",Ee,[o.loading?((0,n.wg)(),(0,n.iD)("div",Pe,[(0,n.Wm)(a)])):((0,n.wg)(),(0,n.iD)("div",We,[(0,n._)("div",He,[(0,n._)("div",Te,[o.alert?((0,n.wg)(),(0,n.iD)("div",Fe,(0,h.zw)(o.alert),1)):((0,n.wg)(),(0,n.iD)("div",Ke,[Oe,(0,n._)("table",Ge,[Je,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.users,(e=>((0,n.wg)(),(0,n.iD)("tbody",{key:e.id},[(0,n._)("tr",null,[(0,n._)("td",Ye,[(0,n._)("p",null,(0,h.zw)(e.nom),1)]),(0,n._)("td",Qe,(0,h.zw)(e.email)+"FCFA ",1),(0,n._)("td",Se,(0,h.zw)(e.numero),1),(0,n._)("td",Re,[(0,n._)("i",{class:"fa-solid fa-eye",onClick:l=>i.redirect(e.bien_id)},null,8,Xe)])])])))),128))])]))])])]))],512)}var ll=t(8841),tl=t(650),nl={name:"ComponentBien",props:["id"],components:{UpdateBien:W.Z,detail:tl.Z,ComponentLoading:T.Z},data(){return{revele:!1,component:"",users:"",alert:"",loading:!0}},methods:{redirect(e){this.$router.push(`/dashbord/bien/${e}`),console.log(e)}},async mounted(){this.$refs.scroll.scrollTop=this.$refs.scroll.scrollHeight,this.$refs.scroll.scrollTo(0,document.body.scrollHeight);let e=await ll.Z.AfficherUser();e.success?(this.users=e.success,this.loading=!1):e.alert?(this.alert=e.alert,this.loading=!1):console.log("eeeq")}};const sl=(0,K.Z)(nl,[["render",el],["__scopeId","data-v-90d3ee8c"]]);var ol=sl,il=t(125),al=t(1683),rl=t(3079),cl={name:"ComponentDashbord",components:{bien:G,agent:Be,client:ol},data(){return{component:"bien"}},methods:{async logout(){await rl.Z.LogoutUser(),this.$router.push("/login")}},created(){(0,al.Aj)(il.I8,(e=>{null==e&&"admin"!=e.displayName&&this.$router.push("/login")}))}};const dl=(0,K.Z)(cl,[["render",g],["__scopeId","data-v-526a3f1f"]]);var ul=dl,pl={name:"HomeAdmin",components:{ComponentDashbord:ul}};const ml=(0,K.Z)(pl,[["render",s]]);var gl=ml}}]);
//# sourceMappingURL=445.9abf263f.js.map