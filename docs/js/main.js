document.querySelector(".js-design-title");const f=document.querySelector(".js-design-form");document.querySelector(".js-fill-title");const g=document.querySelector(".js-fill-form");document.querySelector(".js-share-title");const p=document.querySelector(".js-share-form");function q(){v(),h(),f.classList.toggle("collapsed")}function L(){f.classList.add("collapsed")}function T(){L(),h(),g.classList.toggle("collapsed")}function v(){g.classList.add("collapsed")}function M(){L(),v(),p.classList.toggle("collapsed")}function h(){p.classList.add("collapsed")}const b=document.querySelectorAll(".js-design-header"),H=e=>{e.currentTarget.classList.contains("js-design-title")?q():e.currentTarget.classList.contains("js-fill-title")?T():M()};for(const e of b)e.addEventListener("click",H);const w=document.querySelector(".js-reset-btn");document.querySelector(".js-name-forms");document.querySelector(".js-list-name");const y=document.querySelector(".js-list-movies-title"),F=document.querySelector(".js__profile-image"),C=document.querySelector(".js-first-movie"),k=document.querySelector(".js-second-movie"),P=document.querySelector(".js-third-movie"),S=document.querySelector(".js-name-preview");document.querySelector(".js-card-list-title");const a=document.querySelector(".js-peli1"),d=document.querySelector(".js-peli2"),u=document.querySelector(".js-peli3"),D=document.querySelector(".js-user-photo"),s={field1:"",field2:"",field3:"",field4:"",field5:"",field6:"",photo:""},E=document.querySelector(".js-forms-design"),_=e=>{e.target.id==="name"?(S.innerHTML=e.target.value,s.field2=e.target.value):e.target.id==="list"&&(y.innerHTML=e.target.value,s.field3=e.target.value)};E.addEventListener("input",_);C.addEventListener("input",e=>{e.preventDefault(),e.target.value===""?a.innerHTML="1: peli 1":(a.innerHTML=e.target.value,s.field4=e.target.value)});k.addEventListener("input",e=>{e.preventDefault(),e.target.value===""?d.innerHTML="2: peli 2":(d.innerHTML=e.target.value,s.field5=e.target.value)});P.addEventListener("input",e=>{e.target.value===""?u.innerHTML="3: peli 3":(u.innerHTML=e.target.value,s.field6=e.target.value)});document.querySelector(".js-terror-movie");document.querySelector(".js-romantic-movie");document.querySelector("js-fiction-movie");const n=document.querySelector(".js-movie-category"),I=document.querySelector(".js-genre"),r=document.querySelector(".js-movie-background"),R=e=>{const t=parseInt(e.target.value);s.field1=e.target.value,t===1?(n.innerHTML="Terror",r.classList.add("terrorbg"),r.classList.remove("fictionbg"),r.classList.remove("romancebg")):t===2?(n.innerHTML="Ficción",r.classList.add("fictionbg"),r.classList.remove("romancebg"),r.classList.remove("terrorbg")):t===3?(n.innerHTML="Romántica",r.classList.add("romancebg"),r.classList.remove("fictionbg"),r.classList.remove("terrorbg")):n.innerHTML=""};I.addEventListener("input",R);const B=document.querySelector(".js-btn-create"),j=document.querySelector(".js-social-media"),O=e=>{e.preventDefault(),j.classList.remove("collapsed")};B.addEventListener("click",O);const m="/images/user.png";w.addEventListener("click",()=>{S.innerHTML="Tu nombre",n.innerHTML="",r.classList.remove("romancebg"),r.classList.remove("fictionbg"),r.classList.remove("terrorbg"),a.innerHTML="1: peli 1",d.innerHTML="2: peli 2",u.innerHTML="3: peli 3",y.innerHTML="Mis pelis chulas",D.src=m,F.src=m,j.classList.add("collapsed")});const i=new FileReader,G=document.querySelector(".js__profile-upload-btn"),U=document.querySelector(".js__profile-image"),A=document.querySelector(".js__profile-preview");function J(e){const t=e.currentTarget.files[0];i.addEventListener("load",N),i.readAsDataURL(t)}function N(){s.photo=i.result,U.src=i.result,A.src=i.result}G.addEventListener("change",J);const $=document.querySelector(".js-btn-create"),c=document.querySelector(".js-link-created"),V=document.querySelector(".js-link-whatsapp"),W=document.querySelector(".js-list-movies-title"),x=document.querySelector(".js-movie-background"),z=document.querySelector(".js-name-preview"),K=document.querySelector(".js-movie-category"),Q=document.querySelector(".js-peli1"),X=document.querySelector(".js-peli2"),Y=document.querySelector(".js-peli3"),Z=document.querySelector(".js-user-photo");let l=[];const ee=e=>{switch(e){case 1:return"Terror";case 2:return"Ficción";case 3:return"Romance"}},te=e=>{switch(e){case 1:return"terrorbg";case 2:return"fictionbg";case 3:return"romancebg"}},re=new URLSearchParams(window.location.search);re.get("id");function oe(e){e.preventDefault(),fetch("https://dev.adalab.es/api/info/data",{method:"POST",body:JSON.stringify(s),headers:{"Content-type":"application/json"}}).then(t=>t.json()).then(t=>{l=t.infoID,c.classList.remove("hidden"),c.href=`./card.html?id=${l}`,V.href+=encodeURI(c.href)}),fetch(`https://dev.adalab.es/api/info/${l}`).then(t=>t.json()).then(t=>{console.log(t);const o=t.data;W.innerHTML=o.field3,z.innerHTML=o.field2,K.innerHTML=ee(o.field1),x.classList.add(te(o.field1)),Q.innerHTML=o.field4,X.innerHTML=o.field5,Y.innerHTML=o.field6,Z.src=o.photo,localStorage.setItem("targetData",JSON.stringify(o))})}$.addEventListener("click",oe);
//# sourceMappingURL=main.js.map
