"use strict";(self["webpackChunkprojet_immobilier"]=self["webpackChunkprojet_immobilier"]||[]).push([[610],{4379:function(e,l,s){var i,n=s(2482),t=s(125),o=s(6035),a=s(5866);const r=(i=class{},(0,n.Z)(i,"AddAgent",(async(e,l)=>{let s=l.email,i=l.password;return new Promise((async l=>{await(0,a.Xb)(t.I8,s,i).then((async s=>{(0,a.ck)(s.user,{displayName:"agent"}),await(0,o.pl)((0,o.JU)(t.mk,s.user.uid),e).then((()=>{(0,a.w7)(t.I8),l({success:"Enregistrer avec success"})})).catch((e=>{console.log(e.message)}))})).catch((e=>{console.log(e.code),l({erreur:e.code})}))}))})),(0,n.Z)(i,"Agentconnect",(async e=>{let l=e.email,s=e.password;return new Promise((async e=>{await(0,a.e5)(t.I8,l,s).then((l=>{"agent"!=l.user.displayName?((0,a.w7)(t.I8),e({alert:"Email ou le Mot de passe est incorrect !"})):((0,a.s)(t.I8.currentUser,"user@example.com"),e({success:l}))})).catch((l=>{e({erreur:l.code}),console.log("eee",l.code)}))}))})),(0,n.Z)(i,"LogoutAgent",(async()=>{(0,a.w7)(t.I8).then((()=>{console.log("user deconnecter")})).catch((e=>{console.log(e.message)}))})),(0,n.Z)(i,"updateAgent",(async e=>{await(0,a.e5)(t.I8,email,password).then((function(l){l.user.updateEmail(e)}))})),i);l["Z"]=r},8841:function(e,l,s){var i,n=s(2482),t=(s(7658),s(125)),o=s(6035);const a=(i=class{},(0,n.Z)(i,"InsertionUser",(e=>(console.log("sqfQSD",{...e}),new Promise((async l=>{await(0,o.ET)(t.K9,e).then((e=>{console.log("ss",e),l({resultat:e})})).catch((e=>{console.log("eee",e),l({erreur:e})}))}))))),(0,n.Z)(i,"AfficherUser",(()=>{let e=[];return new Promise((async l=>{await(0,o.PL)(t.K9).then((s=>{console.log("offf",s.docs),s.docs.length>0?s.forEach((s=>{let i=s.data();i.id=s.id,e.push(i),console.log("ssss",e),l({success:e})})):l({alert:"Aucun client n'a été postulé pour le moment !"})})).catch((e=>{console.log("eee",e),l({erreur:e})}))}))})),(0,n.Z)(i,"GetClientId",(e=>{let l=[];return console.log("sqfQSD",e),new Promise((async s=>{const i=(0,o.IO)(t.K9,(0,o.ar)("user_id","==",e));await(0,o.PL)(i).then((e=>{console.log("rrf",e),e.docs.length>0?e.forEach((e=>{let i=e.data();i.id=e.id,l.push(i),console.log("ssss",l),s({success:l})})):(console.log("df<df"),s({alert:"Aucun client n'a posté pour le moment !"}))})).catch((e=>{console.log("eee",e),s({erreur:e})}))}))})),i);l["Z"]=a},2836:function(e,l,s){s.d(l,{Z:function(){return J}});var i=s(3396),n=s(7139),t=s(9242);const o=e=>((0,i.dD)("data-v-3541c78e"),e=e(),(0,i.Cn)(),e),a={class:"modal-container"},r={class:"modal"},c=o((()=>(0,i._)("h1",null,"Modifier des biens immobiliers",-1))),d={class:"form_groupe"},u={class:"data-v"},m={key:0},p={class:"data-v"},g={key:0},v={class:"form_groupe"},h={class:"data-v"},_={key:0},w={class:"data-v"},$={key:0},b={class:"form_groupe"},y={class:"data-v"},f={key:0},k={class:"data-v"},D={key:0},C={class:"form_groupe"},x={class:"data-v"},q={key:0},z={class:"data-v"},A={key:0},Z={class:"textArea"},I={key:0},V={class:"textArea"},U={key:0},N={class:"custom-file-upload"},F=o((()=>(0,i._)("i",{class:"fa fa-cloud-upload"},null,-1))),L=(0,i.Uk)(" Téléchargement personnalisé "),G={class:"boutton"},j=["disabled"];function B(e,l,s,o,B,M){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",a,[(0,i._)("div",r,[c,(0,i._)("form",null,[(0,i._)("div",d,[(0,i._)("div",u,[B.v$.nom_bien.$error?((0,i.wg)(),(0,i.iD)("small",m,(0,n.zw)(B.v$.nom_bien.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Non du bien","onUpdate:modelValue":l[0]||(l[0]=e=>B.nom_bien=e)},null,512),[[t.nr,B.nom_bien]])]),(0,i._)("div",p,[B.v$.prix.$error?((0,i.wg)(),(0,i.iD)("small",g,(0,n.zw)(B.v$.prix.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Prix du bien","onUpdate:modelValue":l[1]||(l[1]=e=>B.prix=e)},null,512),[[t.nr,B.prix]])])]),(0,i._)("div",v,[(0,i._)("div",h,[B.v$.piece.$error?((0,i.wg)(),(0,i.iD)("small",_,(0,n.zw)(B.v$.piece.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Nombre de pieces","onUpdate:modelValue":l[2]||(l[2]=e=>B.piece=e)},null,512),[[t.nr,B.piece]])]),(0,i._)("div",w,[B.v$.superficie.$error?((0,i.wg)(),(0,i.iD)("small",$,(0,n.zw)(B.v$.superficie.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"superficie","onUpdate:modelValue":l[3]||(l[3]=e=>B.superficie=e)},null,512),[[t.nr,B.superficie]])])]),(0,i._)("div",b,[(0,i._)("div",y,[B.v$.chambre.$error?((0,i.wg)(),(0,i.iD)("small",f,(0,n.zw)(B.v$.chambre.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Nombre de chambre","onUpdate:modelValue":l[4]||(l[4]=e=>B.chambre=e)},null,512),[[t.nr,B.chambre]])]),(0,i._)("div",k,[B.v$.douche.$error?((0,i.wg)(),(0,i.iD)("small",D,(0,n.zw)(B.v$.douche.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Nombre de douche","onUpdate:modelValue":l[5]||(l[5]=e=>B.douche=e)},null,512),[[t.nr,B.douche]])])]),(0,i._)("div",C,[(0,i._)("div",x,[B.v$.ville.$error?((0,i.wg)(),(0,i.iD)("small",q,(0,n.zw)(B.v$.ville.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Ville ","onUpdate:modelValue":l[6]||(l[6]=e=>B.ville=e)},null,512),[[t.nr,B.ville]])]),(0,i._)("div",z,[B.v$.commune.$error?((0,i.wg)(),(0,i.iD)("small",A,(0,n.zw)(B.v$.commune.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Commune","onUpdate:modelValue":l[7]||(l[7]=e=>B.commune=e)},null,512),[[t.nr,B.commune]])])]),(0,i._)("div",Z,[B.v$.description.$error?((0,i.wg)(),(0,i.iD)("small",I,(0,n.zw)(B.v$.description.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("textarea",{name:"",id:"",cols:"71",rows:"4",placeholder:"Description","onUpdate:modelValue":l[8]||(l[8]=e=>B.description=e)},null,512),[[t.nr,B.description]])]),(0,i._)("div",V,[B.v$.service.$error?((0,i.wg)(),(0,i.iD)("small",U,(0,n.zw)(B.v$.service.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("textarea",{name:"",id:"",cols:"71",rows:"4",placeholder:"service","onUpdate:modelValue":l[9]||(l[9]=e=>B.service=e)},null,512),[[t.nr,B.service]])]),(0,i.wy)((0,i._)("input",{type:"hidden","onUpdate:modelValue":l[10]||(l[10]=l=>e.user_id=l)},null,512),[[t.nr,e.user_id]]),(0,i._)("label",N,[(0,i._)("input",{type:"file",onChange:l[11]||(l[11]=(...e)=>M.upload&&M.upload(...e)),multiple:""},null,32),F,L]),(0,i._)("div",G,[(0,i._)("button",{disabled:B.isActive,onClick:l[12]||(l[12]=(0,t.iM)(((...e)=>M.valider&&M.valider(...e)),["prevent"]))},"Ajouter un bien",8,j)])])])])])}s(7658);var M=s(1602),E=s(125),P=s(1992),W=s(3053),H=s(4188),T={name:"UpdateBien",props:["id"],components:{},data(){return{isActive:!1,nom_bien:"",prix:"",piece:"",superficie:"",chambre:"",douche:"",ville:"",commune:"",description:"",service:"",image:"",v$:(0,W.ZP)()}},validations:{nom_bien:{require:H.pF,lgmin:(0,H.Ge)(5),lgmax:(0,H.Cn)(20)},prix:{require:H.pF,ValidNumeri:H.zm,lgmin:(0,H.Ge)(6),lgmax:(0,H.Cn)(10)},piece:{require:H.pF,ValidNumeri:H.zm,lgmin:(0,H.Ge)(1),lgmax:(0,H.Cn)(2)},superficie:{require:H.pF,ValidNumeri:H.zm,lgmin:(0,H.Ge)(3),lgmax:(0,H.Cn)(5)},chambre:{require:H.pF,ValidNumeri:H.zm,lgmin:(0,H.Ge)(1),lgmax:(0,H.Cn)(2)},douche:{require:H.pF,ValidNumeri:H.zm,lgmin:(0,H.Ge)(1),lgmax:(0,H.Cn)(2)},ville:{require:H.pF,lgmin:(0,H.Ge)(4),lgmax:(0,H.Cn)(30)},commune:{require:H.pF,lgmin:(0,H.Ge)(4),lgmax:(0,H.Cn)(30)},description:{require:H.pF,lgmin:(0,H.Ge)(30),lgmax:(0,H.Cn)(500)},service:{require:H.pF,lgmin:(0,H.Ge)(30),lgmax:(0,H.Cn)(500)}},methods:{async valider(){if(this.v$.$touch(),0==this.v$.$errors.length){let e={nom_bien:this.nom_bien,prix:this.prix,piece:this.piece,superficie:this.superficie,chambre:this.chambre,douche:this.douche,ville:this.ville,commune:this.commune,description:this.description,service:this.service,images:this.image,user_id:this.user_id,status:this.status};console.log(e);let l=await M.Z.UpdateBien(this.id,e);l.success?this.$router.go(-1):console.log("error 404")}},async upload(e){const l=[];Object.values(e.target.files).forEach((e=>{console.log(e.name);const s=e,i={contentType:"image/jpeg"},n=(0,P.iH)(E.tO,"temp/"+s.name);l.push((0,P.KV)(n,s,i).then((e=>(0,P.Jt)(e.ref))))}));const s=await Promise.all(l);s&&(this.isActive=!1),this.image=s,console.log(this.image)}},async mounted(){let e=await M.Z.GetBienId(this.id);console.log(e.success.prix),e.success&&(this.nom_bien=e.success.nom_bien,this.prix=e.success.prix,this.piece=e.success.piece,this.superficie=e.success.superficie,this.chambre=e.success.chambre,this.douche=e.success.douche,this.ville=e.success.ville,this.commune=e.success.commune,this.description=e.success.description,this.service=e.success.service,this.user_id=e.success.user_id,this.status=e.success.status),this.$refs.input.addEventListener("click",(()=>{this.isActive=!0}))}},K=s(89);const O=(0,K.Z)(T,[["render",B],["__scopeId","data-v-3541c78e"]]);var J=O},3168:function(e,l,s){s.d(l,{Z:function(){return p}});var i=s(3396),n=s(9242),t=s(7139);const o={class:"container"},a={class:"boutton"};function r(e,l,s,r,c,d){return(0,i.wg)(),(0,i.iD)("div",null,[s.toggle?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"modal-container",id:"modal",onClick:l[2]||(l[2]=(0,n.iM)(((...e)=>s.agentDelete&&s.agentDelete(...e)),["self"]))},[(0,i._)("div",o,[(0,i._)("p",null,(0,t.zw)(s.texte),1),(0,i._)("div",a,[(0,i._)("button",{onClick:l[0]||(l[0]=(...e)=>d.supp&&d.supp(...e))},"Oui"),(0,i._)("button",{onClick:l[1]||(l[1]=(...e)=>d.close&&d.close(...e))},"Non")])])])):(0,i.kq)("",!0)])}s(7658),s(8418);var c=s(3079),d={name:"DeleteBien",props:["toggle","agentDelete","Iddelete","texte"],methods:{async supp(){let e=await c.Z.DeleteUser(this.Iddelete);e.success&&this.$router.push("/login")},close(){this.toggle=!1,console.log("ddd")}}},u=s(89);const m=(0,u.Z)(d,[["render",r],["__scopeId","data-v-17a0d7ff"]]);var p=m},2932:function(e,l,s){s.d(l,{Z:function(){return h}});var i=s(3396),n=s(9242);const t=e=>((0,i.dD)("data-v-59e11560"),e=e(),(0,i.Cn)(),e),o={class:"container"},a=t((()=>(0,i._)("p",null,"vous voulez-vous supprimer cette article ?",-1))),r={class:"boutton"},c={key:0,class:"loading"};function d(e,l,s,t,d,u){const m=(0,i.up)("ComponentLoading");return(0,i.wg)(),(0,i.iD)("div",null,[s.toggle?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"modal-container",id:"modal",onClick:l[2]||(l[2]=(0,n.iM)(((...e)=>s.bienDelete&&s.bienDelete(...e)),["self"]))},[(0,i._)("div",o,[a,(0,i._)("div",r,[(0,i._)("button",{onClick:l[0]||(l[0]=(...e)=>u.supp&&u.supp(...e))},"Oui"),(0,i._)("button",{onClick:l[1]||(l[1]=(...e)=>u.close&&u.close(...e))},"Non")])]),d.loading?((0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(m)])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])}var u=s(1602),m=s(8712),p={name:"DeleteBien",props:["toggle","bienDelete","Iddelete"],data(){return{loading:!1}},components:{ComponentLoading:m.Z},methods:{async supp(){this.loading=!0;let e=await u.Z.DeleteBien(this.Iddelete);e.success&&(location.reload(),this.loading=!1)},close(){this.$router.go(),console.log("ddd")}}},g=s(89);const v=(0,g.Z)(p,[["render",d],["__scopeId","data-v-59e11560"]]);var h=v},5235:function(e,l,s){s.d(l,{Z:function(){return Q}});var i=s(3396),n=s(9242),t=s(7139);const o=e=>((0,i.dD)("data-v-159f4242"),e=e(),(0,i.Cn)(),e),a={key:0,class:"loading"},r={key:1},c={class:"modal"},d=o((()=>(0,i._)("h1",null,"Enregistrement des biens immobiliers",-1))),u={class:"form_groupe"},m={class:"data-v"},p={key:0},g={class:"data-v"},v={key:0},h={class:"form_groupe"},_={class:"data-v"},w={key:0},$={class:"data-v"},b={key:0},y={class:"form_groupe"},f={class:"data-v"},k={key:0},D={class:"data-v"},C={key:0},x={class:"form_groupe"},q={class:"data-v"},z={key:0},A={class:"data-v"},Z={key:0},I={class:"textArea"},V={key:0},U={class:"textArea"},N={key:0},F={class:"custom-file-upload"},L=o((()=>(0,i._)("i",{class:"fa fa-cloud-upload"},null,-1))),G=(0,i.Uk)(" Téléchargement personnalisé "),j={class:"boutton"},B=["disabled"];function M(e,l,s,o,M,E){const P=(0,i.up)("ComponentLoading");return(0,i.wg)(),(0,i.iD)("div",null,[M.loading?((0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(P)])):((0,i.wg)(),(0,i.iD)("div",r,[s.revele?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"modal-container",id:"modal",onClick:l[13]||(l[13]=(0,n.iM)(((...e)=>s.submit&&s.submit(...e)),["self"]))},[(0,i._)("div",c,[d,(0,i._)("form",null,[(0,i._)("div",u,[(0,i._)("div",m,[M.v$.nom_bien.$error?((0,i.wg)(),(0,i.iD)("small",p,(0,t.zw)(M.v$.nom_bien.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Non du bien","onUpdate:modelValue":l[0]||(l[0]=e=>M.nom_bien=e)},null,512),[[n.nr,M.nom_bien]])]),(0,i._)("div",g,[M.v$.prix.$error?((0,i.wg)(),(0,i.iD)("small",v,(0,t.zw)(M.v$.prix.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Prix du bien","onUpdate:modelValue":l[1]||(l[1]=e=>M.prix=e)},null,512),[[n.nr,M.prix]])])]),(0,i._)("div",h,[(0,i._)("div",_,[M.v$.piece.$error?((0,i.wg)(),(0,i.iD)("small",w,(0,t.zw)(M.v$.piece.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Nombre de pieces","onUpdate:modelValue":l[2]||(l[2]=e=>M.piece=e)},null,512),[[n.nr,M.piece]])]),(0,i._)("div",$,[M.v$.superficie.$error?((0,i.wg)(),(0,i.iD)("small",b,(0,t.zw)(M.v$.superficie.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"superficie","onUpdate:modelValue":l[3]||(l[3]=e=>M.superficie=e)},null,512),[[n.nr,M.superficie]])])]),(0,i._)("div",y,[(0,i._)("div",f,[M.v$.chambre.$error?((0,i.wg)(),(0,i.iD)("small",k,(0,t.zw)(M.v$.chambre.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Nombre de chambre","onUpdate:modelValue":l[4]||(l[4]=e=>M.chambre=e)},null,512),[[n.nr,M.chambre]])]),(0,i._)("div",D,[M.v$.douche.$error?((0,i.wg)(),(0,i.iD)("small",C,(0,t.zw)(M.v$.douche.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Nombre de douche","onUpdate:modelValue":l[5]||(l[5]=e=>M.douche=e)},null,512),[[n.nr,M.douche]])])]),(0,i._)("div",x,[(0,i._)("div",q,[M.v$.ville.$error?((0,i.wg)(),(0,i.iD)("small",z,(0,t.zw)(M.v$.ville.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Ville ","onUpdate:modelValue":l[6]||(l[6]=e=>M.ville=e)},null,512),[[n.nr,M.ville]])]),(0,i._)("div",A,[M.v$.commune.$error?((0,i.wg)(),(0,i.iD)("small",Z,(0,t.zw)(M.v$.commune.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Commune","onUpdate:modelValue":l[7]||(l[7]=e=>M.commune=e)},null,512),[[n.nr,M.commune]])])]),(0,i._)("div",I,[M.v$.description.$error?((0,i.wg)(),(0,i.iD)("small",V,(0,t.zw)(M.v$.description.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("textarea",{name:"",id:"",cols:"71",rows:"4",placeholder:"Description","onUpdate:modelValue":l[8]||(l[8]=e=>M.description=e)},null,512),[[n.nr,M.description]])]),(0,i._)("div",U,[M.v$.service.$error?((0,i.wg)(),(0,i.iD)("small",N,(0,t.zw)(M.v$.service.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("textarea",{name:"",id:"",cols:"71",rows:"4",placeholder:"service","onUpdate:modelValue":l[9]||(l[9]=e=>M.service=e)},null,512),[[n.nr,M.service]])]),(0,i.wy)((0,i._)("input",{type:"hidden","onUpdate:modelValue":l[10]||(l[10]=l=>e.user_id=l)},null,512),[[n.nr,e.user_id]]),(0,i._)("label",F,[(0,i._)("input",{type:"file",onChange:l[11]||(l[11]=(...e)=>E.upload&&E.upload(...e)),multiple:""},null,32),L,G]),(0,i._)("div",j,[(0,i._)("button",{disabled:M.isActive,onClick:l[12]||(l[12]=(0,n.iM)(((...e)=>E.valider&&E.valider(...e)),["prevent"]))},"Ajouter un bien",8,B)])])])])):(0,i.kq)("",!0)]))])}s(7658);var E=s(1602),P=s(125),W=s(1992),H=s(8712),T=s(3053),K=s(4188),O={name:"ModalBien",props:["revele","submit","agentId"],components:{ComponentLoading:H.Z},data(){return{isActive:!1,nom_bien:"",prix:"",piece:"",superficie:"",chambre:"",douche:"",ville:"",commune:"",description:"",service:"",image:"",loading:!1,v$:(0,T.ZP)()}},validations:{nom_bien:{require:K.pF,lgmin:(0,K.Ge)(5),lgmax:(0,K.Cn)(20)},prix:{require:K.pF,ValidNumeri:K.zm,lgmin:(0,K.Ge)(6),lgmax:(0,K.Cn)(10)},piece:{require:K.pF,ValidNumeri:K.zm,lgmin:(0,K.Ge)(1),lgmax:(0,K.Cn)(2)},superficie:{require:K.pF,ValidNumeri:K.zm,lgmin:(0,K.Ge)(3),lgmax:(0,K.Cn)(5)},chambre:{require:K.pF,ValidNumeri:K.zm,lgmin:(0,K.Ge)(1),lgmax:(0,K.Cn)(2)},douche:{require:K.pF,ValidNumeri:K.zm,lgmin:(0,K.Ge)(1),lgmax:(0,K.Cn)(2)},ville:{require:K.pF,lgmin:(0,K.Ge)(4),lgmax:(0,K.Cn)(30)},commune:{require:K.pF,lgmin:(0,K.Ge)(4),lgmax:(0,K.Cn)(30)},description:{require:K.pF,lgmin:(0,K.Ge)(30),lgmax:(0,K.Cn)(500)},service:{require:K.pF,lgmin:(0,K.Ge)(30),lgmax:(0,K.Cn)(500)}},methods:{async valider(){if(this.v$.$touch(),0==this.v$.$errors.length){this.loading=!0;let e={nom_bien:this.nom_bien,prix:this.prix,piece:this.piece,superficie:this.superficie,chambre:this.chambre,douche:this.douche,ville:this.ville,commune:this.commune,description:this.description,service:this.service,images:this.image,user_id:this.agentId,status:!1};console.log(e);let l=await E.Z.InsertionBien(e);l.success?(this.$router.go(),this.loading=!1):console.log("error 404")}},async upload(e){const l=[];Object.values(e.target.files).forEach((e=>{console.log(e.name);const s=e,i={contentType:"image/jpeg"},n=(0,W.iH)(P.tO,"temp/"+s.name);l.push((0,W.KV)(n,s,i).then((e=>(0,W.Jt)(e.ref))))}));const s=await Promise.all(l);s&&(this.isActive=!1),this.image=s,console.log(this.image)}}},J=s(89);const Y=(0,J.Z)(O,[["render",M],["__scopeId","data-v-159f4242"]]);var Q=Y},9793:function(e,l,s){s.r(l),s.d(l,{default:function(){return vl}});var i=s(3396);function n(e,l,s,n,t,o){const a=(0,i.up)("ComponentDashbord");return(0,i.wg)(),(0,i.j4)(a)}var t=s(9202);const o=e=>((0,i.dD)("data-v-782c7777"),e=e(),(0,i.Cn)(),e),a={class:"container"},r={class:"menu"},c=o((()=>(0,i._)("div",{class:"image"},[(0,i._)("img",{src:t,alt:""})],-1))),d={class:"content"},u={class:"search"},m=o((()=>(0,i._)("form",{action:""},[(0,i._)("input",{type:"text",placeholder:"Recherchez"})],-1))),p={class:"btn"};function g(e,l,s,n,t,o){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",a,[(0,i._)("div",r,[c,(0,i._)("nav",null,[(0,i._)("p",{onClick:l[0]||(l[0]=e=>t.component="bien")},"Liste des Biens"),(0,i._)("p",{onClick:l[1]||(l[1]=e=>t.component="agent")},"Liste des Agents"),(0,i._)("p",{onClick:l[2]||(l[2]=e=>t.component="client")},"Liste des Clients")])]),(0,i._)("div",d,[(0,i._)("div",u,[m,(0,i._)("div",p,[(0,i._)("p",{onClick:l[3]||(l[3]=(...e)=>o.logout&&o.logout(...e))},"Deconnecter")])]),((0,i.wg)(),(0,i.j4)((0,i.LL)(t.component)))])])])}s(7658);var v=s(7139);const h=e=>((0,i.dD)("data-v-397ecd8d"),e=e(),(0,i.Cn)(),e),_={key:0,class:"loading"},w={key:1,class:"contenu"},$=h((()=>(0,i._)("p",null,"Ajouter un bien",-1))),b=[$],y={class:"contenu_card"},f={class:"carnet"},k={key:0,class:"alert"},D={key:1,class:"table-container"},C=h((()=>(0,i._)("h1",{class:"heading"}," La liste des biens Immobiliers ",-1))),x={class:"table"},q=h((()=>(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",null,"Nom du bien"),(0,i._)("th",null,"Prix"),(0,i._)("th",null,"Localite"),(0,i._)("th",null,"Action")])],-1))),z={"data-label":"Nom du bien et Image"},A={class:"doctor"},Z={class:"images"},I=["src"],V={"data-label":"Prix"},U={"data-label":"Ville"},N={"data-label":"Actions"},F={class:"doctors"},L=["onClick"],G=["onClick"],j=["onClick"];function B(e,l,s,n,t,o){const a=(0,i.up)("ModalBien"),r=(0,i.up)("DeleteBien"),c=(0,i.up)("ComponentLoading");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(a,{revele:t.revele,submit:o.submit,agentId:t.agentId},null,8,["revele","submit","agentId"]),(0,i.Wm)(r,{toggle:t.toggle,bienDelete:o.bienDelete,Iddelete:t.Iddelete},null,8,["toggle","bienDelete","Iddelete"]),((0,i.wg)(),(0,i.j4)((0,i.LL)(t.component))),t.loading?((0,i.wg)(),(0,i.iD)("div",_,[(0,i.Wm)(c)])):((0,i.wg)(),(0,i.iD)("div",w,[(0,i._)("div",{class:"boutton addbtn",onClick:l[0]||(l[0]=e=>o.submit())},b),(0,i._)("div",y,[(0,i._)("div",f,[t.alert?((0,i.wg)(),(0,i.iD)("div",k,(0,v.zw)(t.alert),1)):((0,i.wg)(),(0,i.iD)("div",D,[C,(0,i._)("table",x,[q,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.biens,(e=>((0,i.wg)(),(0,i.iD)("tbody",{key:e.id},[(0,i._)("tr",null,[(0,i._)("td",z,[(0,i._)("div",A,[(0,i._)("div",Z,[(0,i._)("img",{src:e.images[0],alt:""},null,8,I)]),(0,i._)("p",null,(0,v.zw)(e.nom_bien),1)])]),(0,i._)("td",V,(0,v.zw)(e.prix)+"FCFA ",1),(0,i._)("td",U,(0,v.zw)(e.ville)+" "+(0,v.zw)(e.commune),1),(0,i._)("td",N,[(0,i._)("div",F,[(0,i._)("i",{class:"fa-solid fa-eye",onClick:l=>o.detail(e.id)},null,8,L),(0,i._)("i",{class:"fa-solid fa-pen-to-square",onClick:l=>o.redirect(e.id)},null,8,G),(0,i._)("i",{class:"fa-solid fa-trash",onClick:l=>o.bienDelete(e.id)},null,8,j)])])])])))),128))])]))])])]))])}var M=s(1602),E=s(5235),P=s(2836),W=s(2932),H=s(8712),T={name:"ComponentBien",props:["bien","Iddelete","agentId"],components:{ModalBien:E.Z,UpdateBien:P.Z,DeleteBien:W.Z,ComponentLoading:H.Z},data(){return{revele:!1,toggle:!1,component:"",biens:"",Iddelete:"",alert:"",agentId:"",loading:!0}},methods:{submit(){this.revele=!this.revele,this.agentId="001"},redirect(e){this.$router.push(`/dashbord/updatebien/${e}`)},bienDelete(e){this.toggle=!this.toggle,this.Iddelete=e},detail(e){this.$router.push(`/dashbord/bien/${e}`)}},async mounted(){let e=await M.Z.AfficherBien();console.log(e),e.success?(console.log(e.success),this.biens=e.success,this.loading=!1):e.alert?(this.alert=e.alert,this.loading=!1):console.log("err 404")}},K=s(89);const O=(0,K.Z)(T,[["render",B],["__scopeId","data-v-397ecd8d"]]);var J=O;const Y=e=>((0,i.dD)("data-v-667a17ac"),e=e(),(0,i.Cn)(),e),Q={ref:"scroll"},S={key:0,class:"loading"},R={key:1,class:"contenu1"},X=Y((()=>(0,i._)("p",null,"Ajouter un Agent",-1))),ee=[X],le={class:"contenaire_card"},se={key:0,class:"alert"},ie={class:"card-image"},ne=["src"],te={class:"card-body"},oe={class:"body-text"},ae=Y((()=>(0,i._)("i",{class:"fa-solid fa-user"},null,-1))),re={class:"body-text"},ce=Y((()=>(0,i._)("i",{class:"fa-solid fa-envelope"},null,-1))),de={class:"body-text"},ue=Y((()=>(0,i._)("i",{class:"fa-solid fa-phone"},null,-1))),me={class:"icon"},pe=["onClick"],ge=["onClick"];function ve(e,l,s,n,t,o){const a=(0,i.up)("ModalAgent"),r=(0,i.up)("DeleteAgent"),c=(0,i.up)("ComponentLoading");return(0,i.wg)(),(0,i.iD)("div",Q,[(0,i.Wm)(a,{revele:t.revele,submit:o.submit},null,8,["revele","submit"]),(0,i.Wm)(r,{toggle:t.toggle,agentDelete:o.agentDelete,Iddelete:t.Iddelete},null,8,["toggle","agentDelete","Iddelete"]),t.loading?((0,i.wg)(),(0,i.iD)("div",S,[(0,i.Wm)(c)])):((0,i.wg)(),(0,i.iD)("div",R,[(0,i._)("div",{class:"boutton addbtn",onClick:l[0]||(l[0]=(...e)=>o.submit&&o.submit(...e))},ee),(0,i._)("div",le,[t.alert?((0,i.wg)(),(0,i.iD)("div",se,(0,v.zw)(t.alert),1)):((0,i.wg)(!0),(0,i.iD)(i.HY,{key:1},(0,i.Ko)(t.agents,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"content-card",key:e.id},[(0,i._)("div",ie,[(0,i._)("img",{src:e.image,alt:""},null,8,ne)]),(0,i._)("div",te,[(0,i._)("div",oe,[ae,(0,i._)("p",null,(0,v.zw)(e.nom)+" "+(0,v.zw)(e.prenom),1)]),(0,i._)("div",re,[ce,(0,i._)("p",null,(0,v.zw)(e.email),1)]),(0,i._)("div",de,[ue,(0,i._)("p",null,(0,v.zw)(e.numero),1)]),(0,i._)("div",me,[(0,i._)("i",{class:"fa-solid fa-pen-to-square",onClick:l=>o.update(e.id)},null,8,pe),(0,i._)("i",{class:"fa-solid fa-trash",onClick:l=>o.agentDelete(e.id)},null,8,ge)])])])))),128))])]))],512)}var he=s(8418),_e=s(9242);const we=e=>((0,i.dD)("data-v-eda0b190"),e=e(),(0,i.Cn)(),e),$e={class:"container"},be=we((()=>(0,i._)("h3",null,"Ajouter un agent",-1))),ye={key:0},fe={key:1},ke={key:2},De={key:3},Ce={key:4},xe={key:5};function qe(e,l,s,n,t,o){const a=(0,i.up)("ComponentModal"),r=(0,i.up)("ComponentLoading");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(a,{success:t.success,valider:o.valider,texte:t.texte},null,8,["success","valider","texte"]),s.revele?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"modal-container",id:"modal",onClick:l[6]||(l[6]=(0,_e.iM)(((...e)=>s.submit&&s.submit(...e)),["self"]))},[(0,i._)("div",$e,[(0,i._)("form",null,[(0,i._)("small",null,(0,v.zw)(t.erreur),1),be,t.v$.nom.$error?((0,i.wg)(),(0,i.iD)("small",ye,(0,v.zw)(t.v$.nom.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text ",placeholder:"Nom","onUpdate:modelValue":l[0]||(l[0]=e=>t.nom=e)},null,512),[[_e.nr,t.nom]]),t.v$.prenom.$error?((0,i.wg)(),(0,i.iD)("small",fe,(0,v.zw)(t.v$.prenom.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Prenom","onUpdate:modelValue":l[1]||(l[1]=e=>t.prenom=e)},null,512),[[_e.nr,t.prenom]]),t.v$.email.$error?((0,i.wg)(),(0,i.iD)("small",ke,(0,v.zw)(t.v$.email.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"email",name:"email",placeholder:"Adresse Email","onUpdate:modelValue":l[2]||(l[2]=e=>t.email=e)},null,512),[[_e.nr,t.email]]),t.v$.numero.$error?((0,i.wg)(),(0,i.iD)("small",De,(0,v.zw)(t.v$.numero.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"tel",name:"numero",placeholder:"Numero Téléphonique","onUpdate:modelValue":l[3]||(l[3]=e=>t.numero=e)},null,512),[[_e.nr,t.numero]]),t.v$.password.$error?((0,i.wg)(),(0,i.iD)("small",Ce,(0,v.zw)(t.v$.password.$errors[0].$message),1)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("input",{type:"password",name:"password",placeholder:"Mot de passe","onUpdate:modelValue":l[4]||(l[4]=e=>t.password=e)},null,512),[[_e.nr,t.password]]),(0,i._)("button",{onClick:l[5]||(l[5]=(0,_e.iM)(((...e)=>o.valider&&o.valider(...e)),["prevent"]))},"Enregistrer"),t.loading?((0,i.wg)(),(0,i.iD)("div",xe,[(0,i.Wm)(r)])):(0,i.kq)("",!0)])])])):(0,i.kq)("",!0)])}var ze=s(4379),Ae=s(3053),Ze=s(4188),Ie=s(3401),Ve={name:"ModalAgent",components:{ComponentModal:Ie.Z,ComponentLoading:H.Z},props:["revele","submit","count"],data(){return{isActive:!0,nom:"",prenom:"",email:"",numero:"",password:"",v$:(0,Ae.ZP)(),erreur:"",success:!1,texte:"Enregistrement de l'Agent éffectué avec success.",loading:!1}},validations:{nom:{require:Ze.pF,lgmin:(0,Ze.Ge)(4),lgmax:(0,Ze.Cn)(20)},prenom:{require:Ze.pF,lgmin:(0,Ze.Ge)(4),lgmax:(0,Ze.Cn)(20)},email:{require:Ze.pF,ValidEmail:Ze.hN},numero:{require:Ze.pF,ValidNumeri:Ze.zm,lgmin:(0,Ze.Ge)(10),lgmax:(0,Ze.Cn)(12)},password:{require:Ze.pF,lgmin:(0,Ze.Ge)(6),lgmax:(0,Ze.Cn)(12)}},methods:{async valider(){if(this.loading=!0,this.v$.$touch(),0==this.v$.$errors.length){let e={email:this.email,nom:this.nom,prenom:this.prenom,numero:this.numero,image:"https://previews.123rf.com/images/apoev/apoev1903/apoev190300009/124806570-personne-gris-espace-r%C3%A9serv%C3%A9-photo-homme-en-t-shirt-sur-fond-gris.jpg?fj=1"},l={email:this.email,password:this.password};console.log(e,l);let s=await ze.Z.AddAgent(e,l);console.log(s),s.success?(this.success=!this.success,this.loading=!1):(this.erreur="Votre Adresse Email existe  déjà donc veillez-vous connecté.",this.loading=!1)}}}};const Ue=(0,K.Z)(Ve,[["render",qe],["__scopeId","data-v-eda0b190"]]);var Ne=Ue,Fe=s(3168),Le={name:"ComponentAgent",props:["Iddelete"],components:{ModalAgent:Ne,DeleteAgent:Fe.Z,ComponentLoading:H.Z},data(){return{revele:!1,agents:"",alert:"",Iddelete:"",toggle:!1,loading:!0}},methods:{submit(){this.revele=!this.revele},agentDelete(e){console.log(e),this.toggle=!this.toggle,this.Iddelete=e},update(e){this.$router.push(`/update/${e}`)}},async mounted(){this.$refs.scroll.scrollTop=this.$refs.scroll.scrollHeight,this.$refs.scroll.scrollTo(0,document.body.scrollHeight);let e=await he.Z.AfficherAgent();console.log(e),e.success?(this.agents=e.success,this.loading=!1):e.alert?(this.alert=e.alert,this.loading=!1):console.log("erreu 404")}};const Ge=(0,K.Z)(Le,[["render",ve],["__scopeId","data-v-667a17ac"]]);var je=Ge;const Be=e=>((0,i.dD)("data-v-a6bd82a2"),e=e(),(0,i.Cn)(),e),Me={ref:"scroll"},Ee={key:0,class:"loading"},Pe={key:1,class:"contenu"},We={class:"contenu_card"},He={class:"carnet"},Te={key:0,class:"alert"},Ke={key:1,class:"table-container"},Oe=Be((()=>(0,i._)("h1",{class:"heading"}," La liste des clients ",-1))),Je={class:"table"},Ye=Be((()=>(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",null,"Nom du client"),(0,i._)("th",null,"Adresse Email"),(0,i._)("th",null,"Numero"),(0,i._)("th",null,"Voir le bien")])],-1))),Qe={"data-label":"Nom du client"},Se={"data-label":"Adresse Email"},Re={"data-label":"Numero"},Xe={class:"doctor","data-label":"Action"},el=["onClick"];function ll(e,l,s,n,t,o){const a=(0,i.up)("ComponentLoading");return(0,i.wg)(),(0,i.iD)("div",Me,[t.loading?((0,i.wg)(),(0,i.iD)("div",Ee,[(0,i.Wm)(a)])):((0,i.wg)(),(0,i.iD)("div",Pe,[(0,i._)("div",We,[(0,i._)("div",He,[t.alert?((0,i.wg)(),(0,i.iD)("div",Te,(0,v.zw)(t.alert),1)):((0,i.wg)(),(0,i.iD)("div",Ke,[Oe,(0,i._)("table",Je,[Ye,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.users,(e=>((0,i.wg)(),(0,i.iD)("tbody",{key:e.id},[(0,i._)("tr",null,[(0,i._)("td",Qe,[(0,i._)("p",null,(0,v.zw)(e.nom),1)]),(0,i._)("td",Se,(0,v.zw)(e.email),1),(0,i._)("td",Re,(0,v.zw)(e.numero),1),(0,i._)("td",Xe,[(0,i._)("i",{class:"fa-solid fa-eye",onClick:l=>o.redirect(e.bien_id)},null,8,el)])])])))),128))])]))])])]))],512)}var sl=s(8841),il=s(6401),nl={name:"ComponentBien",props:["id"],components:{UpdateBien:P.Z,detail:il.Z,ComponentLoading:H.Z},data(){return{revele:!1,component:"",users:"",alert:"",loading:!0}},methods:{redirect(e){this.$router.push(`/dashbord/bien/${e}`),console.log(e)}},async mounted(){this.$refs.scroll.scrollTop=this.$refs.scroll.scrollHeight,this.$refs.scroll.scrollTo(0,document.body.scrollHeight);let e=await sl.Z.AfficherUser();e.success?(this.users=e.success,this.loading=!1):e.alert?(this.alert=e.alert,this.loading=!1):console.log("eeeq")}};const tl=(0,K.Z)(nl,[["render",ll],["__scopeId","data-v-a6bd82a2"]]);var ol=tl,al=s(125),rl=s(1683),cl=s(3079),dl={name:"ComponentDashbord",components:{bien:J,agent:je,client:ol},data(){return{component:"bien"}},methods:{async logout(){await cl.Z.LogoutUser(),this.$router.push("/login")}},created(){(0,rl.Aj)(al.I8,(e=>{null==e&&"admin"!=e.displayName&&this.$router.push("/login")}))}};const ul=(0,K.Z)(dl,[["render",g],["__scopeId","data-v-782c7777"]]);var ml=ul,pl={name:"HomeAdmin",components:{ComponentDashbord:ml}};const gl=(0,K.Z)(pl,[["render",n]]);var vl=gl}}]);
//# sourceMappingURL=610.c910d34a.js.map