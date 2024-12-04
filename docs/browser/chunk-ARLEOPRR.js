import"./chunk-M77A4LGS.js";import{a as D,b as A,c as L,e as H,f as j,h as U,i as P,k as V,n as N,p as J,q as W,r as Z}from"./chunk-4TMJFCAF.js";import{C as S,D as y,E as C,F,P as _,Pa as O,Qa as B,S as a,T,Ua as v,_ as x,aa as c,cb as R,da as e,db as I,ea as t,eb as z,fa as l,hb as b,ia as M,ka as f,la as h,oa as k,ra as s,sa as g,x as d,za as u}from"./chunk-RM7OKFUN.js";function X(n,i){if(n&1&&(e(0,"div",13),l(1,"img",14),e(2,"h3",15),s(3),t(),e(4,"p",16),s(5),t(),e(6,"p",17),s(7),t(),e(8,"button",18),s(9," CONFERIR "),t()()),n&2){let r=i.$implicit;a(),k("alt",r.nome),c("src",r.imagem,_),a(2),g(r.nome),a(2),g(r.endereco),a(2),g(r.telefone)}}var $=(()=>{let i=class i{constructor(){this.estabelecimentos=[{id:1,nome:"Carrefour",email:"contato@carrefour.com",endereco:"Rua das Flores, 123 - Centro",telefone:"(41) 98765-4321",imagem:"https://via.placeholder.com/150/0000FF/808080?Text=Carrefour"},{id:2,nome:"Extra",email:"contato@extra.com",endereco:"Avenida Paulista, 456 - Bela Vista",telefone:"(11) 91234-5678",imagem:"https://via.placeholder.com/150/FF0000/FFFFFF?Text=Extra"},{id:3,nome:"Walmart",email:"contato@walmart.com",endereco:"Avenida Brasil, 789 - Jardim Bot\xE2nico",telefone:"(21) 92345-6789",imagem:"https://via.placeholder.com/150/008000/FFFFFF?Text=Walmart"},{id:4,nome:"P\xE3o de A\xE7\xFAcar",email:"contato@paodeacucar.com",endereco:"Rua Augusta, 321 - Jardins",telefone:"(11) 93456-7890",imagem:"https://via.placeholder.com/150/FFFF00/000000?Text=P\xE3o+de+A\xE7\xFAcar"}],this.estabelecimentosFiltrados=[...this.estabelecimentos]}buscarEstabelecimento(m){m=m.toLowerCase(),this.estabelecimentosFiltrados=this.estabelecimentos.filter(o=>o.nome.toLowerCase().includes(m))}ordenarEstabelecimentos(m){m==="az"?this.estabelecimentosFiltrados.sort((o,p)=>o.nome.localeCompare(p.nome)):m==="za"&&this.estabelecimentosFiltrados.sort((o,p)=>p.nome.localeCompare(o.nome))}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=d({type:i,selectors:[["app-busca-estabelecimento"]],standalone:!0,features:[u],decls:17,vars:1,consts:[[1,"p-6","w-full","bg-gray-100","w-screen"],[1,"flex","justify-between","items-center","mb-6"],[1,"flex","items-center","gap-2"],["type","text","placeholder","Buscar Estabelecimento",1,"border","border-gray-300","rounded-lg","p-2","w-64",3,"input"],[1,"p-2","bg-gray-300","rounded-lg"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-5","h-5","text-gray-700"],["stroke-linecap","round","stroke-linejoin","round","d","M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.606 0 7.5 7.5 0 0 0 10.606 0z"],["for","ordenar",1,"text-sm","font-medium"],["id","ordenar",1,"border","border-gray-300","rounded-lg","p-2",3,"change"],["value","az"],["value","za"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","gap-6"],["class","border border-gray-300 rounded-lg p-4 flex flex-col items-center bg-white shadow-sm",4,"ngFor","ngForOf"],[1,"border","border-gray-300","rounded-lg","p-4","flex","flex-col","items-center","bg-white","shadow-sm"],[1,"w-20","h-20","object-cover","mb-4",3,"src","alt"],[1,"text-sm","font-semibold","mb-2"],[1,"text-xs","text-gray-500","mb-1"],[1,"text-xs","text-gray-500","mb-2"],[1,"px-4","py-2","bg-green-500","text-white","text-sm","font-medium","rounded-lg","hover:bg-green-600"]],template:function(o,p){o&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"input",3),f("input",function(w){return p.buscarEstabelecimento(w.target.value)}),t(),e(4,"button",4),C(),e(5,"svg",5),l(6,"path",6),t()()(),F(),e(7,"div",2)(8,"label",7),s(9,"Ordenar por"),t(),e(10,"select",8),f("change",function(w){return p.ordenarEstabelecimentos(w.target.value)}),e(11,"option",9),s(12,"A-Z"),t(),e(13,"option",10),s(14,"Z-A"),t()()()(),e(15,"div",11),x(16,X,10,5,"div",12),t()()),o&2&&(a(16),c("ngForOf",p.estabelecimentosFiltrados))},dependencies:[v,O]});let n=i;return n})();function ee(n,i){if(n&1&&l(0,"fa-icon",9),n&2){let r=h();c("icon",r.faBars)}}function te(n,i){if(n&1){let r=M();e(0,"div",10)(1,"div",2)(2,"button",3),f("click",function(){S(r);let o=h();return y(o.toggleMenu())}),l(3,"fa-icon",11),t()(),e(4,"div",12)(5,"a",13)(6,"div",14),l(7,"fa-icon",15),t(),e(8,"span",16),s(9,"Buscar Produto"),t()(),e(10,"a",17)(11,"div",14),l(12,"fa-icon",15),t(),e(13,"span",16),s(14,"Estabelecimentos"),t()(),e(15,"a",18)(16,"div",14),l(17,"fa-icon",15),t(),e(18,"span",16),s(19,"Ranking de Usu\xE1rios"),t()(),e(20,"a",19)(21,"div",14),l(22,"fa-icon",15),t(),e(23,"span",16),s(24,"Favoritos"),t()(),e(25,"a",20)(26,"div",14),l(27,"fa-icon",15),t(),e(28,"span",16),s(29,"Carrinho"),t()(),e(30,"a",21)(31,"div",14),l(32,"fa-icon",15),t(),e(33,"span",16),s(34,"Sair"),t()()()()}if(n&2){let r=h();a(3),c("icon",r.faTimes),a(4),c("icon",r.faSearch),a(5),c("icon",r.faBuilding),a(5),c("icon",r.faChartBar),a(5),c("icon",r.faHeart),a(5),c("icon",r.faShoppingCart),a(5),c("icon",r.faSignOutAlt)}}var q=(()=>{let i=class i{toggleMenu(){this.menuOpen=!this.menuOpen}constructor(m){this.router=m,this.menuOpen=!1,this.faBars=j,this.faTimes=W,this.faUserCircle=J,this.faSearch=N,this.faBuilding=Z,this.faChartBar=U,this.faHeart=P,this.faShoppingCart=V,this.faSignOutAlt=H,this.selectedOption="promocoes"}ngOnInit(){this.router.url.includes("enderecos-estabelecimento")?this.selectedOption="enderecos":this.selectedOption="promocoes"}goToPromocoes(){this.selectedOption="promocoes",this.router.navigate(["estabelecimento/promocoes-estabelecimento"])}goToEnderecos(){this.selectedOption="enderecos",this.router.navigate(["estabelecimento/enderecos-estabelecimento"])}};i.\u0275fac=function(o){return new(o||i)(T(I))},i.\u0275cmp=d({type:i,selectors:[["app-header-estabelecimento"]],standalone:!0,features:[u],decls:12,vars:3,consts:[[1,"bg-green-600","text-white","py-4"],[1,"flex","justify-between","items-center","px-4","w-full"],[1,"absolute","top-4","left-11"],[1,"focus:outline-none",3,"click"],["class","text-white h-8 w-8",3,"icon",4,"ngIf"],[1,"text-2xl","font-bold"],[1,"flex","items-center","space-x-2"],[1,"h-6","w-6","text-white",3,"icon"],["class","fixed top-0 left-0 w-full bg-green-600 text-white p-8 flex flex-col justify-center items-center transition-all duration-300 z-50",4,"ngIf"],[1,"text-white","h-8","w-8",3,"icon"],[1,"fixed","top-0","left-0","w-full","bg-green-600","text-white","p-8","flex","flex-col","justify-center","items-center","transition-all","duration-300","z-50"],[1,"text-white","h-8","w-8","text-xl",3,"icon"],[1,"grid","grid-cols-3","gap-4"],["routerLink","/buscar-produto",1,"flex","flex-col","items-center","text-white"],[1,"bg-white","text-green-600","p-6","rounded-lg"],[1,"h-8","w-8",3,"icon"],[1,"mt-2","text-sm","font-semibold"],["routerLink","/estabelecimentos",1,"flex","flex-col","items-center","text-white"],["routerLink","/ranking-usuarios",1,"flex","flex-col","items-center","text-white"],["routerLink","/favoritos",1,"flex","flex-col","items-center","text-white"],["routerLink","/carrinho",1,"flex","flex-col","items-center","text-white"],["routerLink","/logout",1,"flex","flex-col","items-center","text-white"]],template:function(o,p){o&1&&(e(0,"header",0)(1,"div",1)(2,"div",2)(3,"button",3),f("click",function(){return p.toggleMenu()}),x(4,ee,1,1,"fa-icon",4),t()(),e(5,"div",5),s(6,"NS"),t(),e(7,"div",6),l(8,"fa-icon",7),e(9,"span"),s(10,"Usu\xE1rio"),t()()(),x(11,te,35,7,"div",8),t()),o&2&&(a(4),c("ngIf",!p.menuOpen),a(4),c("icon",p.faUserCircle),a(3),c("ngIf",p.menuOpen))},dependencies:[b,z,v,B,L,A]});let n=i;return n})();var K=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=d({type:i,selectors:[["app-estabelecimento-layout"]],standalone:!0,features:[u],decls:4,vars:0,consts:[[1,"container","mt-4"]],template:function(o,p){o&1&&(l(0,"app-header-estabelecimento"),e(1,"div",0),l(2,"router-outlet"),t(),l(3,"app-footer"))},dependencies:[q,D,b,R]});let n=i;return n})();var De=[{path:"",component:K,children:[{path:"visualizar",loadChildren:()=>import("./chunk-XYFVS4MN.js").then(n=>n.visualizarestabelecimentosRoutes)},{path:"buscar",component:$},{path:"**",redirectTo:"home"}]}];export{De as estabelecimentoRoutes};