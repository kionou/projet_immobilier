"use strict";(self["webpackChunkprojet_immobilier"]=self["webpackChunkprojet_immobilier"]||[]).push([[234],{4379:function(e,s,r){var a,n=r(2482),o=r(125),t=r(6035),l=r(5866);const i=(a=class{},(0,n.Z)(a,"AddAgent",(async(e,s)=>{let r=s.email,a=s.password;return new Promise((async s=>{await(0,l.Xb)(o.I8,r,a).then((async r=>{(0,l.ck)(r.user,{displayName:"agent"}),await(0,t.pl)((0,t.JU)(o.mk,r.user.uid),e).then((()=>{(0,l.w7)(o.I8),s({success:"Enregistrer avec success"})})).catch((e=>{console.log(e.message)}))})).catch((e=>{console.log(e.code),s({erreur:e.code})}))}))})),(0,n.Z)(a,"Agentconnect",(async e=>{let s=e.email,r=e.password;return new Promise((async e=>{await(0,l.e5)(o.I8,s,r).then((s=>{"agent"!=s.user.displayName?((0,l.w7)(o.I8),e({alert:"Email ou le Mot de passe est incorrect !"})):((0,l.s)(o.I8.currentUser,"user@example.com"),e({success:s}))})).catch((s=>{e({erreur:s.code}),console.log("eee",s.code)}))}))})),(0,n.Z)(a,"LogoutAgent",(async()=>{(0,l.w7)(o.I8).then((()=>{console.log("user deconnecter")})).catch((e=>{console.log(e.message)}))})),(0,n.Z)(a,"updateAgent",(async e=>{await(0,l.e5)(o.I8,email,password).then((function(s){s.user.updateEmail(e)}))})),a);s["Z"]=i},1234:function(e,s,r){r.r(s),r.d(s,{default:function(){return I}});var a=r(3396);function n(e,s,r,n,o,t){const l=(0,a.up)("ComponentNavbar"),i=(0,a.up)("ComponentLoginAgent");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(l),(0,a.Wm)(i)])}var o=r(7559),t=r(7139),l=r(9242),i=r(9202);const c=e=>((0,a.dD)("data-v-441466b8"),e=e(),(0,a.Cn)(),e),u={class:"ImageHeader"},m={class:"container"},d=c((()=>(0,a._)("div",{class:"image"},[(0,a._)("img",{src:i,alt:""})],-1))),p=c((()=>(0,a._)("div",{class:"texte"},[(0,a._)("h2",null,"CONNEXION")],-1))),g={key:0},w={key:1};function h(e,s,r,n,o,i){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",u,[(0,a._)("div",m,[d,p,(0,a._)("small",null,(0,t.zw)(o.erreur),1),(0,a._)("form",null,[o.v$.email.$error?((0,a.wg)(),(0,a.iD)("small",g,(0,t.zw)(o.v$.email.$errors[0].$message),1)):(0,a.kq)("",!0),(0,a.wy)((0,a._)("input",{type:"email",name:"email",placeholder:"Adresse Email","onUpdate:modelValue":s[0]||(s[0]=e=>o.email=e)},null,512),[[l.nr,o.email]]),o.v$.password.$error?((0,a.wg)(),(0,a.iD)("small",w,(0,t.zw)(o.v$.password.$errors[0].$message),1)):(0,a.kq)("",!0),(0,a.wy)((0,a._)("input",{type:"password",name:"password",placeholder:"Mot de passe","onUpdate:modelValue":s[1]||(s[1]=e=>o.password=e)},null,512),[[l.nr,o.password]]),(0,a._)("button",{onClick:s[2]||(s[2]=(0,l.iM)(((...e)=>i.submit&&i.submit(...e)),["prevent"]))},"Connecter")])])])])}r(7658);var v=r(3053),$=r(4188),y=r(4379),_={name:"ComponentLoginAgent",data(){return{email:"",password:"",v$:(0,v.ZP)(),erreur:""}},validations:{email:{require:$.pF,ValidEmail:$.hN},password:{require:$.pF,lgmin:(0,$.Ge)(6),lgmax:(0,$.Cn)(12)}},methods:{MessageErreur(e){"auth/wrong-password"===e?(console.log("pazssword"),this.erreur="Mot de passe incorrect"):(console.log("email"),this.erreur="Email ou le Mot de passe est incorrect !")},async submit(){if(console.log("rrr"),console.log("fsqjfblqkf",this.v$.$errors.length),this.v$.$touch(),0==this.v$.$errors.length){let e={email:this.email,password:this.password};console.log(e);let s=await y.Z.Agentconnect(e);s.success?(console.log(s.success.user.uid),this.$router.push(`/agent/${s.success.user.uid}`)):s.alert?this.erreur=s.alert:this.MessageErreur(s.erreur)}}}},b=r(89);const f=(0,b.Z)(_,[["render",h],["__scopeId","data-v-441466b8"]]);var k=f,C={name:"LoginAgent",components:{ComponentNavbar:o.Z,ComponentLoginAgent:k}};const A=(0,b.Z)(C,[["render",n]]);var I=A}}]);
//# sourceMappingURL=234.058bdcb8.js.map