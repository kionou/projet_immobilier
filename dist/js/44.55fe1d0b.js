"use strict";(self["webpackChunkprojet_immobilier"]=self["webpackChunkprojet_immobilier"]||[]).push([[44],{3044:function(e,r,s){s.r(r),s.d(r,{default:function(){return N}});var a=s(3396);function o(e,r,s,o,l,i){const n=(0,a.up)("ComponentNavbar"),t=(0,a.up)("ComponentLogin");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(n),(0,a.Wm)(t)])}var l=s(7559),i=s(7139),n=s(9242),t=s(9202);const u=e=>((0,a.dD)("data-v-a92f817c"),e=e(),(0,a.Cn)(),e),c={class:"ImageHeader"},m={class:"container"},p=u((()=>(0,a._)("div",{class:"image"},[(0,a._)("img",{src:t,alt:""})],-1))),d=u((()=>(0,a._)("div",{class:"texte"},[(0,a._)("h2",null,"CONNEXION")],-1))),v={key:0},g={key:1},w={class:"texte"},h=(0,a.Uk)("Vous aviez pas de compte? ");function $(e,r,s,o,l,t){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",c,[(0,a._)("div",m,[p,d,(0,a._)("small",null,(0,i.zw)(l.erreur),1),(0,a._)("form",null,[l.v$.email.$error?((0,a.wg)(),(0,a.iD)("small",v,(0,i.zw)(l.v$.email.$errors[0].$message),1)):(0,a.kq)("",!0),(0,a.wy)((0,a._)("input",{type:"email",name:"email",placeholder:"Adresse Email","onUpdate:modelValue":r[0]||(r[0]=e=>l.email=e)},null,512),[[n.nr,l.email]]),l.v$.password.$error?((0,a.wg)(),(0,a.iD)("small",g,(0,i.zw)(l.v$.password.$errors[0].$message),1)):(0,a.kq)("",!0),(0,a.wy)((0,a._)("input",{type:"password",name:"password",placeholder:"Mot de passe","onUpdate:modelValue":r[1]||(r[1]=e=>l.password=e)},null,512),[[n.nr,l.password]]),(0,a._)("button",{onClick:r[2]||(r[2]=(0,n.iM)(((...e)=>t.submit&&t.submit(...e)),["prevent"]))},"Connecter")]),(0,a._)("div",w,[(0,a._)("p",null,[h,(0,a._)("span",{class:"sanp",onClick:r[3]||(r[3]=(...e)=>t.redirect&&t.redirect(...e))},"Cliquer ici")])])])])])}s(7658);var _=s(3053),f=s(4188),C=s(3079),k={name:"Componentlogin",data(){return{email:"",password:"",v$:(0,_.ZP)(),erreur:""}},validations:{email:{require:f.pF,ValidEmail:f.hN},password:{require:f.pF,lgmin:(0,f.Ge)(6),lgmax:(0,f.Cn)(12)}},methods:{MessageErreur(e){"auth/wrong-password"===e?(console.log("pazssword"),this.erreur="Mot de passe incorrect"):(console.log("email"),this.erreur="Email ou le Mot de passe est incorrect !")},redirect(){this.$router.push("/sign")},async submit(){if(console.log("rrr"),console.log("fsqjfblqkf",this.v$.$errors.length),this.v$.$touch(),0==this.v$.$errors.length){let e={email:this.email,password:this.password};console.log(e);let r=await C.Z.Userconnect(e);r.success?this.$router.push("/profil"):r.alert?this.erreur=r.alert:this.MessageErreur(r.erreur)}}}},b=s(89);const q=(0,b.Z)(k,[["render",$],["__scopeId","data-v-a92f817c"]]);var y=q,E={name:"LoginView",components:{ComponentNavbar:l.Z,ComponentLogin:y}};const M=(0,b.Z)(E,[["render",o]]);var N=M}}]);
//# sourceMappingURL=44.55fe1d0b.js.map