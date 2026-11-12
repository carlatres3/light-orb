import{b as Ci,c as ji,e as Gr,f as zi,g as Oi}from"./chunk-5I5HOOPQ.js";import{a as tn,b as an,c as Do,d as rn,e as on,f as nn,g as Gt,h as dr,i as cr}from"./chunk-OIL5RNA2.js";import"./chunk-63YMMEBD.js";import{$ as Fa,A as Hi,B as _i,C as Ar,D as eo,E as Wi,F as Yi,N as Ui,O as to,Q as Vi,U as Gi,V as Xi,W as Ki,X as Ji,Y as Qi,Z as Zi,_ as en,a as Ga,b as Ri,c as Di,d as qa,e as Bi,f as Kr,g as Io,h as ga,i as ka,j as sa,k as Jr,l as Qr,m as Et,n as Ba,o as Lr,p as Po,q as Fi,r as Aa,s as Zr,t as Ro,u as Tr,v as Mr,w as Ni,x as ta,y as Ca,z as qr}from"./chunk-43P4DBTB.js";import{a as Xr,b as zo,d as Va,e as Ii,f as Oo,g as lr,l as Vt,m as Ge,n as Pi}from"./chunk-CCI7BGPP.js";import"./chunk-I7AUKTXE.js";var sn=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),Tt={peak:.0045,curve:1.8,floor:.12,cutoff:320,cutoffSpan:120,highpass:70,q:.5,attack:.12,release:.07,sweep:.35,still:.09,seconds:7},ln={quiet:{peak:Tt.peak,curve:Tt.curve},A:{peak:.0135,curve:1.4},B:{peak:.024,curve:1.4}},dn="B";function ed(e,{talking:a=!1,loudness:o=ln[dn]}={}){if(a)return 0;let t=sn(e);return t<=Tt.floor?0:o.peak*Math.pow((t-Tt.floor)/(1-Tt.floor),o.curve)}function td(e,a){let o=Math.round(e.sampleRate*a),t=e.createBuffer(1,o,e.sampleRate),d=t.getChannelData(0),p=0,i=0;for(let c=0;c<o;c++)p=.995*p+.02*(Math.random()*2-1),d[c]=p,i=Math.max(i,Math.abs(p));let l=Math.round(e.sampleRate*.2);for(let c=0;c<l;c++){let f=c/l;d[c]=d[c]*f+d[o-l+c]*(1-f)}for(let c=0;c<o;c++)d[c]/=i||1;return t}function cn(e,a,{talking:o=()=>!1,loudness:t=ln[dn]}={}){let d=e.createBufferSource();d.buffer=td(e,Tt.seconds),d.loop=!0;let p=e.createBiquadFilter(),i=e.createBiquadFilter(),l=e.createBiquadFilter(),c=e.createGain();p.type="highpass",p.frequency.value=Tt.highpass,p.Q.value=Tt.q;for(let b of[i,l])b.type="lowpass",b.frequency.value=Tt.cutoff,b.Q.value=Tt.q;c.gain.value=0,d.connect(p).connect(i).connect(l).connect(c).connect(a),d.start();let f=0,h=-1;return{get level(){return f},update(b,$=e.currentTime){let K=ed(b,{talking:o(),loudness:t});if(c.gain.setTargetAtTime(K,$,K>f?Tt.attack:Tt.release),f=K,$-h>.1){h=$;let s=Tt.cutoff+Tt.cutoffSpan*sn(b);i.frequency.setTargetAtTime(s,$,Tt.sweep),l.frequency.setTargetAtTime(s,$,Tt.sweep)}},still(b=e.currentTime){f=0,c.gain.setTargetAtTime(0,b,Tt.release)}}}var pn=e=>Math.max(0,Math.min(1,Number.isFinite(e)?e:0));function ao(e,a=.008,o=.16){let t=0;for(let d of e)t+=d*d;return pn((Math.sqrt(t/Math.max(1,e.length))-a)/o)}function ro(e,a,o,t=.05,d=.18){let p=e+(a-e)*(1-Math.exp(-Math.max(0,o)/(a>e?t:d)));return p<.001?0:pn(p)}function un({getContext:e,onState:a=()=>{},onLevel:o=()=>{},mediaDevices:t=globalThis.navigator?.mediaDevices,lifecycle:d=globalThis.document,page:p=globalThis.window,now:i=()=>performance.now()}={}){let l={status:"off",error:"",level:0},c=0,f=null,h=null,b=null,$=null,K=null,s=i(),M=0,A=!1,P=()=>a({...l});function F(){for(let T of f?.getTracks()??[])T.onended=null,T.stop();f=null,h?.disconnect(),b?.disconnect(),$?.disconnect(),h=b=$=K=null,l.level=0,o(0)}function I(){c++,F(),l.status="off",l.error="",P()}async function B(){if(A)return!1;if(l.status==="listening")return!0;if(l.status==="requesting")return!1;let T=++c;l.status="requesting",l.error="",P();let E=null;try{if(!t?.getUserMedia)throw Object.assign(new Error,{name:"UnsupportedError"});let C=e();if(!C)throw Object.assign(new Error,{name:"UnsupportedError"});let _=Promise.resolve(C.resume()).then(()=>null,q=>q);if(E=await t.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!1},video:!1}),A||T!==c)return E.getTracks().forEach(q=>q.stop()),!1;f=E;let w=await _;if(A||T!==c)return!1;if(w)throw w;return h=C.createMediaStreamSource(f),b=C.createBiquadFilter(),b.type="highpass",b.frequency.value=90,$=C.createAnalyser(),$.fftSize=1024,$.smoothingTimeConstant=0,h.connect(b),b.connect($),K=new Float32Array($.fftSize),s=i(),f.getTracks().forEach(q=>{q.onended=I}),l.status="listening",P(),!0}catch(C){return T!==c||A||(F(),l.status="error",l.error=C.name==="NotAllowedError"||C.name==="SecurityError"?"Allow microphone access in your browser, then try again.":C.name==="NotFoundError"?"No microphone found. Connect one and try again.":C.name==="UnsupportedError"?"Microphone input needs a supported browser on HTTPS or localhost.":"The microphone is unavailable. Close other microphone apps and try again.",P()),!1}}function N(){if(!$||l.status!=="listening")return 0;let T=i(),E=Math.min(.1,Math.max(0,(T-s)/1e3));s=T,$.getFloatTimeDomainData(K);let C=ao(K,.006,.1);return l.level=ro(l.level,C,E,.045,.28),T-M>80&&(M=T,o(l.level)),l.level}let X=()=>{d.hidden&&I()};return d?.addEventListener("visibilitychange",X),p?.addEventListener("pagehide",I),{state:l,start:B,stop:I,sample:N,toggle(){return l.status==="requesting"||l.status==="listening"?I():B()},dispose(){A=!0,I(),d?.removeEventListener("visibilitychange",X),p?.removeEventListener("pagehide",I)}}}var Cr=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),Bo={voice:"samantha"};function gn({heart:e=a=>import("./chunk-27FTWSGL.js").then(o=>o.heart(a.text,a.lang))}={}){let a=Gr(Bo),o=a.prefs;o.voice!==Bo.voice&&a.set({voice:Bo.voice});let t=new Set,d=null,p=null,i=null,l=null,c=null,f=null,h=new Audio;h.preload="auto",h.crossOrigin="anonymous",h.setAttribute("playsinline","");let b=null,$={clip:null,voice:null,status:"idle",error:null,energy:0,journey:new Set},K=new Map,s=new Map,M=J=>{if(!s.has(J)){let ie=fetch(J).then(se=>{if(!se.ok)throw new Error(se.status);return se.blob()}).then(se=>URL.createObjectURL(se));s.set(J,ie),ie.catch(()=>s.delete(J))}return s.get(J)},A={},P=()=>t.forEach(J=>J(Je));function F(){if(d)return d;let J=window.AudioContext||window.webkitAudioContext;if(!J)return null;d=new J,p=d.createGain(),p.connect(d.destination),i=d.createGain();let ie=d.createDynamicsCompressor();ie.threshold.value=-30,ie.knee.value=10,ie.ratio.value=4,ie.attack.value=.003,ie.release.value=.25,i.connect(ie).connect(p),l=d.createGain(),l.connect(p),c=d.createAnalyser(),c.fftSize=1024,c.smoothingTimeConstant=0,c.connect(i),f=new Float32Array(c.fftSize);try{b=d.createMediaElementSource(h),b.connect(c)}catch{b=null}return I(),d}function I(){if(!d)return;let J=d.currentTime;p.gain.setTargetAtTime(o.master||$.kind==="audition"?o.volume??.8:0,J,.02),i.gain.setTargetAtTime(o.gain,J,.02),l.gain.setTargetAtTime(o.sfx?o.sfxGain:0,J,.02)}let B=()=>{let J=F();J&&J.state!=="running"&&J.state!=="closed"&&J.resume().catch(()=>{}),De(),a.voice&&!ke&&H()};for(let J of["pointerdown","keydown","touchend"])addEventListener(J,B,{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden&&(ne.on||!h.paused||$.status==="loading")?(ae(),$.hiddenPause=!0):$.hiddenPause&&($.hiddenPause=!1)}),h.addEventListener("ended",()=>{$.status="ended",P()}),h.addEventListener("pause",()=>{$.status==="playing"&&($.status="paused",P())}),h.addEventListener("playing",()=>{$.status="playing",$.error=null,P()}),h.addEventListener("error",()=>{$.clip&&($.status="error",$.error="The recording could not be loaded.",P())}),h.addEventListener("loadedmetadata",P);let N=null,X=null;function T(){u.cancel(),N?.(),X&&(h.removeEventListener("ended",X),X=null)}function E(){return T(),u.begin()}let C=J=>J==="audition"||a.voice,_=(J,{voice:ie=o.voice,from:se=0,kind:ve="guide"}={})=>V(`${J}.${ie}`,Ro(J,ie),{from:se,kind:ve,voice:ie}),w=(J,ie,{from:se=0}={})=>V(J,ie,{from:se,kind:"audition"}),q=0;async function V(J,ie,{from:se=0,kind:ve="guide",voice:Ee=null,token:Le=E(),onend:Be}={}){let me=q;if(!u.live(Le)||!C(ve))return!1;de(),h.pause(),$.clip=J,$.voice=Ee,$.kind=ve,$.url=ie,$.loaded=!1,$.status="loading",$.error=null,$.env=null,B(),I(),P();let oe;try{oe=await M(ie)}catch{oe=ie}if(!u.live(Le)||me!==q||!C(ve)||(h.src!==oe&&(h.src=oe),$.loaded=!0,ge(ie,200).then(we=>{u.live(Le)&&($.env=we)}).catch(()=>{}),se&&h.readyState<1&&(!await new Promise(pe=>{let Ue=We=>{h.removeEventListener("loadedmetadata",mt),h.removeEventListener("error",ft),N=null,pe(We)},mt=()=>Ue(!0),ft=()=>Ue(!1);N=()=>Ue(!1),h.addEventListener("loadedmetadata",mt),h.addEventListener("error",ft)})||!u.live(Le)))||!u.live(Le)||!C(ve)||(h.currentTime=se||0,Be&&(X=()=>{X=null,u.live(Le)&&Be()},h.addEventListener("ended",X,{once:!0})),P(),!u.live(Le)||me!==q||!C(ve)))return!1;try{return await h.play(),u.live(Le)&&C(ve)}catch{return u.live(Le)&&($.status="blocked",$.error="Playback was blocked. Press play to start it.",P()),!1}}function ae(){T(),de(),h.pause(),$.status="paused",P()}async function re(){return!$.url||$.clip==="speech"||!C($.kind)?!1:V($.clip,$.url,{from:$.loaded?h.currentTime:0,kind:$.kind,voice:$.voice})}let ne={on:!1};function de(){ne.u=null,ne.on=!1}let ke=null,$e="./media/voice/lines/",H=()=>ke??=fetch(`${$e}manifest.json`).then(J=>J.ok?J.json():null,()=>(ke=null,null)).catch(()=>null),u=zi();function O(J,{id:ie,onend:se,lang:ve}={}){if(!J||!o.master||!o.guide)return se?.(),!1;let Ee=E();if(ie){let Le=Aa(o.voice).lines??o.voice;return de(),h.pause(),$.kind="guide",$.url=null,$.clip=`line:${ie}`,$.status="loading",P(),H().then(async Be=>{let me=Be?.lines?.[ie]?.text===J?Be.lines[ie].files?.[Le]:null;if(!u.live(Ee))return;if(!me){W(J,{onend:se,lang:ve,token:Ee});return}let oe=$e+me;try{await M(oe)}catch{u.live(Ee)&&W(J,{onend:se,lang:ve,token:Ee});return}u.live(Ee)&&V(`line:${ie}.${Le}`,oe,{kind:"guide",voice:Le,token:Ee,onend:se})}),!0}return W(J,{onend:se,lang:ve,token:Ee})}function W(J,{onend:ie,lang:se,token:ve}={}){return!u.live(ve)||!J||!o.master||!o.guide?(ie?.(),!1):(de(),B(),h.pause(),$.kind="guide",$.url=null,$.clip="line:live",$.voice="samantha",$.status="loading",$.error=null,P(),(async()=>{let Ee=0;try{for await(let Le of await e({text:J,lang:se})){if(!u.live(ve)){URL.revokeObjectURL(Le);return}let me=await new Promise(oe=>{Ee++,V(`line:live.${Ee}`,Le,{kind:"guide",voice:"samantha",token:ve,onend:()=>oe(!0)}).then(we=>{we||oe(!1)})});if(URL.revokeObjectURL(Le),s.get(Le)?.then(oe=>{h.src!==oe&&URL.revokeObjectURL(oe)},()=>{}),s.delete(Le),!me||!u.live(ve))return}}catch{if(!u.live(ve))return;$.status="stopped",P()}u.live(ve)&&(Ee||($.status="stopped",P()),ie?.())})(),!0)}let D=()=>Aa("samantha").name;function R(){q++,T(),de(),h.pause(),$.status=$.clip?"stopped":"idle",P()}function ce(J){h.duration&&(h.currentTime=Cr(J)*h.duration,P())}let ze=performance.now();function Me(){let J=performance.now(),ie=Math.min(.1,(J-ze)/1e3);ze=J;let se=0;return!b&&$.env&&!h.paused&&(o.master||$.kind==="audition")&&h.duration?se=Cr($.env.bins[Math.min($.env.bins.length-1,Math.floor(h.currentTime/h.duration*$.env.bins.length))]*1.1):c&&!h.paused&&(o.master||$.kind==="audition")&&(c.getFloatTimeDomainData(f),se=ao(f)),$.energy=ro($.energy,se,ie),$.energy}let xe=(J,ie=o.voice,se=72)=>ge(Ro(J,ie),se);async function ge(J,ie=72){let se=`${J}|${ie}`;if(K.has(se))return K.get(se);let ve=(async()=>{let Ee;try{Ee=await M(J)}catch{Ee=J}let Le=await(await fetch(Ee)).arrayBuffer(),Be=window.OfflineAudioContext||window.webkitOfflineAudioContext,me=await new Be(1,44100,44100).decodeAudioData(Le),oe=me.getChannelData(0),we=Math.max(1,Math.floor(oe.length/ie)),pe=[],Ue=0;for(let mt=0;mt<ie;mt++){let ft=0;for(let it=mt*we;it<(mt+1)*we;it++)ft+=oe[it]*oe[it];let We=Math.sqrt(ft/we);pe.push(We),Ue=Math.max(Ue,We)}return{bins:pe.map(mt=>mt/(Ue||1)),duration:me.duration}})();return K.set(se,ve),ve.catch(()=>K.delete(se)),ve}let qe={press:"select",release:"select",volume:"level",case:"open"},Re={select:90,type:70,detent:50,level:110,open:220,close:220,confirm:400},Ke={select:.3,type:.2,detent:.28,level:.22,open:.28,close:.26,confirm:.32},ut={},at=0;function rt(J){ut[J]||!d||(ut[J]=fetch(`./media/sfx/${J}.wav`).then(ie=>ie.arrayBuffer()).then(ie=>d.decodeAudioData(ie)).then(ie=>ut[J]=ie).catch(()=>ut[J]=null))}function Ze(J,ie=.5){if(J=qe[J]||J,!o.master||!o.sfx)return;let se=F();if(!se||se.state!=="running")return;let ve=performance.now();if(ve-(A[J]??0)<(Re[J]??80)||at>3)return;A[J]=ve;let Ee=ut[J];if(!Ee||Ee instanceof Promise){rt(J);return}let Le=se.createBufferSource(),Be=se.createGain();Le.buffer=Ee,Be.gain.value=(Ke[J]??.6)*(J==="level"?.6+.4*Cr(ie):1),J==="level"&&(Le.playbackRate.value=.85+.3*Cr(ie)),Le.connect(Be),Be.connect(l),at++,Le.onended=()=>{at--,Be.disconnect()},Le.start()}let be=null;function ye(J=0){if(!o.master||!o.sfx)return;let ie=F();if(!ie||ie.state!=="running")return;if(!be){let Ee=ie.createBufferSource(),Le=ie.sampleRate*2,Be=ie.createBuffer(1,Le,ie.sampleRate),me=Be.getChannelData(0);for(let pe=0;pe<Le;pe++)me[pe]=Math.random()*2-1;Ee.buffer=Be,Ee.loop=!0;let oe=ie.createBiquadFilter(),we=ie.createGain();oe.type="lowpass",oe.Q.value=.4,oe.frequency.value=900,we.gain.value=0,Ee.connect(oe).connect(we).connect(l),Ee.start(),be={f:oe,g:we,stop:0}}let se=Cr(J),ve=ie.currentTime;be.g.gain.setTargetAtTime(se*.035,ve,.03),be.f.frequency.setTargetAtTime(700+600*se,ve,.06),clearTimeout(be.stop),be.stop=setTimeout(()=>be.g.gain.setTargetAtTime(0,ie.currentTime,.04),70)}let fe=null,Oe=0;function Ve(J=0,ie="air"){if(!o.master||!o.sfx||!d||d.state!=="running"){fe&&fe.still();return}fe??=cn(d,l,{talking:()=>!h.paused||ne.on}),fe.update(J),clearTimeout(Oe),Oe=setTimeout(()=>fe?.still(),Tt.still*1e3)}let De=()=>{if(d)for(let J of Object.keys(Re))rt(J)};a.on(()=>{(!o.master||!o.sfx)&&(clearTimeout(Oe),fe?.still()),!a.voice&&$.kind==="guide"&&(T(),de(),h.pause(),$.clip&&($.status="stopped")),I(),P()});let Je={prefs:o,state:$,el:h,get ready(){return!!d},get position(){return h.duration?h.currentTime/h.duration:0},get time(){return h.currentTime||0},get duration(){return h.duration||0},get playing(){return ne.on||!h.paused&&!h.ended},store:a,get voiceOn(){return a.voice},get soundsOn(){return a.sounds},set(J){let{voice:ie,...se}=J??{};a.set(se),B()},toggle(J,ie){a.toggle(J,ie),B()},play:_,playUrl:w,say:O,voiceName:D,pause:ae,resume:re,stop:R,seek:ce,energy:Me,peaks:xe,peaksUrl:ge,sfx:Ze,friction:ye,motion:Ve,unlock:B,get live(){return!!d&&d.state==="running"},microphone(J){return un({...J,getContext:F})},once(J){return $.journey.has(J)||!o.master||!o.guide?Promise.resolve(!1):($.journey.add(J),_(J).then(ie=>(ie||$.journey.delete(J),ie)))},on(J){return t.add(J),()=>t.delete(J)}};return Je}var Fo=ka.filter(e=>e.published!==!1),fn=e=>e.id==="orb"||e.code==="kit",ad=" Everything is free during early access, and Studio is open to try.",rd={"reply.missed":"I didn\u2019t catch that. Tap me and try again, or type.","reply.intro":`Hello, I\u2019m the Light Orb, your guide here. Tap me and speak, or type: ask me for recommendations, materials and textures, or say Products, Templates, Studio or Sound and I\u2019ll take you there.${ad}`,"reply.greet":"Hi, I\u2019m the Light Orb. Tap me whenever you want to talk.","reply.help":"Ask me which Orb suits your project, about its materials and textures, or how to get the free code. Or say Products, Templates, Studio or Sound and I\u2019ll take you there.","reply.thanks":"With pleasure. I\u2019m right here when you need me.","reply.who":"I\u2019m the Light Orb, the guide of this place. I can recommend a piece or a texture, answer your questions, and take you anywhere on the site.","reply.back":"Going back.","reply.unknown":"I\u2019m still learning words. Ask me for a recommendation, or say Products, Templates, Studio or Sound.","reply.mic":"The microphone is off. You can type to me instead."},od=" Todo es gratis durante el acceso anticipado, y Studio est\xE1 abierto para probarlo.",id={"reply.missed":"No te he entendido. T\xF3came e int\xE9ntalo otra vez, o escr\xEDbeme.","reply.intro":`Hola, soy la Light Orb, tu gu\xEDa aqu\xED. T\xF3came y habla, o escr\xEDbeme: p\xEDdeme recomendaciones, materiales y texturas, o di Productos, Plantillas, Studio o Sonido y te llevo.${od}`,"reply.greet":"Hola, soy la Light Orb. T\xF3came cuando quieras hablar.","reply.help":"Preg\xFAntame qu\xE9 Orb encaja con tu proyecto, por sus materiales y texturas, o c\xF3mo conseguir el c\xF3digo gratis. O di Productos, Plantillas, Studio o Sonido y te llevo.","reply.thanks":"Con gusto. Aqu\xED estoy cuando me necesites.","reply.who":"Soy la Light Orb, la gu\xEDa de este lugar. Te recomiendo piezas y texturas, respondo tus preguntas y te llevo a cualquier parte de la web.","reply.back":"Volvemos.","reply.unknown":"A\xFAn estoy aprendiendo palabras. P\xEDdeme una recomendaci\xF3n, o di Productos, Plantillas, Studio o Sonido.","reply.mic":"El micr\xF3fono est\xE1 desactivado. Puedes escribirme."},pr=(e,a="en")=>a==="es"?{id:null,text:id[e],lang:"es"}:{id:e,text:rd[e],lang:"en"},hn={profile:"your profile",downloads:"your downloads",saved:"what you have saved",designs:"the designs you made in Studio"};function nd(e,a){if(e==="products"&&a){let o=Fo.find(t=>t.id===a);if(o)return{id:`present.product.${o.id}`,text:`This is ${o.name}. ${fn(o)?"Try its versions; each one is free, with its code.":"Try its versions."}`}}if(e==="templates"&&a){let o=Et.find(t=>t.id===a);if(o)return{id:`present.template.${o.id}`,text:`You are looking at the template ${o.name}. ${o.line}`}}return e==="products"?{id:"present.products",text:`Products: ${Fo.length} pieces, ready to use. Choose one to see it alive.`}:e==="templates"?{id:"present.templates",text:Et.length===1?"Templates: a complete composition of light and glass to start from. Open it to see it move.":`Templates: ${Et.length} complete compositions of light and glass to start from. Open one to see it move.`}:e==="soon"||e==="studio"&&!lr?{id:"present.studio.soon",text:"Studio is coming soon. Leave your email and we will let you know when it opens."}:e==="studio"?{id:"present.studio",text:`This is Studio${", free while we build it"}. Drag me to turn me, move my light with the light tool, and shape my glass with the controls. Save your design when it feels right.`}:e==="sound"?{id:"present.sound",text:"This is Sound: choose the voice I speak with, and listen to the small sounds of the glass."}:e==="membership"?{id:"present.membership",text:Vt?"This is Membership. Create a free account, or choose a plan.":"This is Membership. Everything is free for now; leave your email to hear first when plans open."}:e==="account"?a&&hn[a]?{id:`present.account.${a}`,text:`This is your account, showing ${hn[a]}.`}:{id:"present.account",text:"This is your account."}:e==="privacy"?{id:"present.privacy",text:"This is the privacy page: what the site keeps, and what you can ask for."}:e==="terms"?{id:"present.terms",text:"These are the terms of use of the site."}:e==="licence"?{id:"present.licence",text:"This is the licence: what you can do with the free pieces, and with the paid pieces and templates."}:e==="signin"?{id:"present.signin",text:Vt?"Sign in with your email and password.":"Use the email you joined with to link this device to your early access."}:e==="signup"?{id:"present.signup",text:Vt?"Create your free account with your email and a password. We send one email to confirm it.":"Join early access with your email. Everything is free while we build it, and you will hear first when new pieces open."}:{id:"present.home",text:"This is The Light Orb: digital pieces, website templates and custom web design. Below, choose where to begin: Products, Templates, Studio or Sound. Tap me again to stop, or ask me anything."}}var mn={products:"Productos: piezas interactivas para tu web. Elige una para verla viva.",templates:"Plantillas: composiciones completas para empezar.",studio:"Esto es Studio, gratis mientras lo construimos. Da forma a la luz y guarda tu dise\xF1o.",sound:"Esto es Sonido: las voces y los sonidos del vidrio.",membership:Vt?"Esto es Membres\xEDa. Crea una cuenta gratis o elige un plan.":"Esto es Membres\xEDa. Ahora todo es gratis; deja tu email y sabr\xE1s primero cu\xE1ndo abren los planes.",home:"Bienvenida a The Light Orb. Soy tu gu\xEDa: t\xF3came para hablar."};function bn(e,a,o){let t=nd(a,o);if(e!=="es")return{...t,lang:"en"};if(a==="products"&&o){let d=Fo.find(p=>p.id===o);if(d)return{id:null,lang:"es",text:`Esto es ${d.name}. Prueba sus versiones${fn(d)?"; cada una es gratis, con su c\xF3digo":", o dale forma en Studio"}.`}}return mn[a]&&!o?{id:null,lang:"es",text:mn[a]}:{...t,lang:"en"}}var xn=e=>({id:`already.${e.id}`,text:`We are already here. ${e.text}`}),vn=e=>({id:`piece.${e.id}`,text:`Here is ${e.name}. ${e.line}`}),yn=e=>({id:`open.${e.id}`,text:`Opening ${e.name}.`}),wn=()=>({id:"piece.orb",text:`Here is the Orb. ${ka[0].line}`});var kn="lightorb:theme",No={light:{pearl:[243,243,241],top:[250,251,251],low:[214,217,220],sky:"255,255,255",skyA:.62,mass:"196,201,206",massA:.35,glow:"255,255,255",glowA:.7,shadow:"70,72,78",orbBackground:"#f3f3f1",orb:{dark:!1,world:"gallery",envBoost:1},cases:{bg:["#f3f3f1","#f1f1ef","#e9eae8"],room:"#6c6f6c",floor:"#eeefed",hemi:["#ffffff","#dcdedc",.6],env:1.35}},dark:{pearl:[7,7,8],top:[11,11,12],low:[2,2,3],sky:"232,226,212",skyA:.03,mass:"0,0,0",massA:.6,glow:"236,230,216",glowA:.07,shadow:"0,0,0",orbBackground:"#070708",orb:{dark:!0,world:"smoke",envBoost:1.15},cases:{bg:["#0e0e0f","#09090a","#040405"],room:"#141415",floor:"#2a2b2b",hemi:["#ffffff","#202222",.35],env:1.7}}},Sn=()=>{try{return localStorage.getItem(kn)}catch{return null}},ur=e=>e==="light"||e==="dark",$n="(prefers-color-scheme: dark)",En=()=>{try{return typeof matchMedia=="function"&&matchMedia($n).matches?"dark":"light"}catch{return"light"}};function sd(){let e=new URLSearchParams(location.search).get("theme");if(ur(e))return e;let a=Sn();return ur(a)?a:En()}var Xa=()=>document.documentElement.dataset.theme==="dark"?"dark":"light",ha=()=>No[Xa()];function Ln(e){document.documentElement.dataset.theme=e,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",e==="dark"?"#141515":"#F3F3F1")}function Ho(e,{remember:a=!0}={}){if(ur(e)){if(Ln(e),a)try{localStorage.setItem(kn,e)}catch{}document.dispatchEvent(new CustomEvent("lightorb:theme",{detail:{theme:e}}))}}typeof document<"u"&&Ln(ur(document.documentElement.dataset.theme)?Xa():sd());try{(typeof matchMedia=="function"?matchMedia($n):null)?.addEventListener?.("change",()=>{if(ur(Sn())||ur(new URLSearchParams(location.search).get("theme")))return;let a=En();a!==Xa()&&Ho(a,{remember:!1})})}catch{}var gr=(e,a,o)=>e+(a-e)*o,hr=e=>{let a=parseInt(String(e).replace("#",""),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]},rp=hr("#f3d8c5"),ld={fill:.08,lobe:.2,wall:.55,core:.034},Ht=e=>structuredClone(e??Bi);function oo(e,a,o={}){let t=(o.lightStage?No.light:ha()).orb,d=o.dark===!0,{envBoost:p=d?1:t.envBoost,exposure:i=0,left:l=.65,right:c=.55}=o,f=d||t.dark,h=a.shell,b=a.light,$=a.interior;e.setOptics({...ld,lobe:gr(.1,.3,b.spread),core:gr(.026,.044,b.spread)}),e.setInterior({kind:$.kind,amount:$.amount,size:$.size,motion:$.motion,fill:$.fill,colour:$.colour}),e.setElastic(h.elastic??0);let K=hr(h.tint);e.setMaterial({roughness:h.roughness,thickness:gr(.3,1.4,h.thickness),ior:h.ior,envMapIntensity:(f?1.9:2.1)*p*2**(i*.5),tint:K,tintDistance:h.tintAmount>.001?gr(8,.4,h.tintAmount):0}),e.setNeutral?.(!0);let s=hr(b.colour),M=Math.max(...s);e.setLight({tint:s.map(P=>P/Math.max(.05,M)*1.05),spread:gr(.7,1.6,b.spread)}),e.setBloom(gr(.004,.08,b.glow)),e.setFocus({x:b.x,y:b.y,z:b.z}),e.setTone(f?"dark":"light"),e.setVolumeWorld(0),e.lockFeather([.5,.515]);let A=P=>(Math.round(P*10)/10).toFixed(1);return e.setWorld(d?`chamber:${A(l)}:${A(c)}`:t.world),e.setEnvironmentLevel?.(o.envLevel??1),{emission:b.strength/.72*2**(i*.35)*(o.keyLevel??1),voice:a.voice}}var Mt=(e,a)=>a.split(".").reduce((o,t)=>o?.[t],e),jr=e=>Math.min(1,Math.max(0,e));function Tn(e={}){let a=e.material??{},o=e.interior??{},t=e.light??{},d=Ht(ga("original").config);if(a.tint){d.shell.tint=a.tint;let[p,i,l]=hr(a.tint),c=Math.max(p,i,l)-Math.min(p,i,l);c>.04&&(d.shell.tintAmount=Math.min(.97,.8+c*.2))}if(d.shell.ior=Math.min(2,Math.max(1,1+.58*(a.refraction??1))),d.shell.roughness=Math.min(.5,Math.max(0,.01+(a.frost??0)*.45)),d.interior.amount=jr(d.interior.amount*(1+(o.amount??0))),d.interior.size=jr(d.interior.size*(o.size??1)),d.interior.motion=jr(d.interior.motion*(o.speed??1)),d.light.strength=jr(d.light.strength*(o.glow??1)),d.light.glow=jr(d.light.glow*(t.key??1)),t.colour&&(d.light.colour=t.colour),a.tint){let p=hr(a.tint),i=hr(d.light.colour);Math.max(...p)-Math.min(...p)>.04&&(d.light.colour="#"+i.map((c,f)=>Math.round((c*.4+p[f]*.6)*255).toString(16).padStart(2,"0")).join(""))}return d}var Mn=`
:root{
  --bg:#F3F3F1; --surface:#E8E9E7; --surface-2:#D7DAD8; --ink:#262827; --muted:#616562; --faint:#8D918E; --line:rgba(38,40,39,.1);
  --greige:#CFC8BD;
  --dark:#171A19; --dark-panel:#222624; --dark-ink:#ECEEEB; --dark-muted:#9DA29F; --dark-line:rgba(236,238,235,.09);
  --font:"Helvetica Neue","Inter",ui-sans-serif,system-ui,-apple-system,Arial,sans-serif;
  --mono:ui-monospace,"SF Mono",Menlo,monospace;
  --ease:cubic-bezier(.22,.7,.12,1); --t-fast:.16s; --t-med:.38s; --t-slow:.7s;
}
/* \u2500\u2500 Light capsule (R11) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.gb{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:9px;height:44px;padding:0 22px;border-radius:999px;
  font:500 14px/1 var(--font);letter-spacing:0;color:var(--ink);text-decoration:none;cursor:pointer;-webkit-tap-highlight-color:transparent;white-space:nowrap;
  border:0;background:linear-gradient(180deg,#ffffff 0%,#f6f7f6 55%,#eceeec 100%);
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.9),inset 0 -3px 4px -2px rgba(150,156,152,.35),inset 0 2px 1px rgba(255,255,255,1),
    0 0 0 1px rgba(38,40,39,.06),0 1px 1px rgba(38,40,39,.08),0 8px 18px -10px rgba(38,40,39,.32);
  transition:transform var(--t-fast) var(--ease),box-shadow var(--t-fast) var(--ease),background var(--t-fast) ease,color var(--t-fast) ease,opacity var(--t-fast) ease}
.gb svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;flex:none}
.gb:hover{box-shadow:inset 0 0 0 1px rgba(255,255,255,.9),inset 0 -3px 4px -2px rgba(150,156,152,.35),inset 0 2px 1px #fff,0 0 0 1px rgba(38,40,39,.08),0 1px 1px rgba(38,40,39,.08),0 12px 24px -12px rgba(38,40,39,.38)}
.gb:active,.gb.pressed{transform:translateY(1px);box-shadow:inset 0 0 0 1px rgba(255,255,255,.8),inset 0 2px 4px rgba(150,156,152,.3),0 0 0 1px rgba(38,40,39,.08),0 2px 5px -3px rgba(38,40,39,.3)}
.gb:focus-visible,.gi:focus-visible,.gsel:focus-visible,.gsw:focus-visible,.pill:focus-visible,.tl:focus-visible{outline:2px solid #262827;outline-offset:3px}
.gb[disabled],.gb[aria-disabled=true]{opacity:.45;cursor:not-allowed;transform:none;box-shadow:inset 0 0 0 1px rgba(255,255,255,.9),0 0 0 1px rgba(38,40,39,.08)}
.gb[aria-busy=true]{color:transparent}
.gb[aria-busy=true]::after{content:"";position:absolute;width:14px;height:14px;border-radius:50%;border:1.5px solid rgba(38,40,39,.25);border-top-color:#262827;animation:spin .8s linear infinite}
@keyframes spin{to{transform:rotate(1turn)}}
/* primary: near-black glass with a light rim (R05 tone on light pages) */
.gb.primary{color:#F3F3F1;background:linear-gradient(180deg,#3a3d3c 0%,#262827 60%,#1e2120 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.18),inset 0 -2px 3px -1px rgba(255,255,255,.12),inset 0 0 0 1px rgba(255,255,255,.06),0 1px 1px rgba(0,0,0,.2),0 10px 20px -10px rgba(23,26,25,.55)}
.gb.primary:hover{background:linear-gradient(180deg,#444746 0%,#2c2e2d 60%,#222524 100%)}
.gb.primary:active{box-shadow:inset 0 2px 4px rgba(0,0,0,.4),0 2px 5px -3px rgba(0,0,0,.5)}
.gb.small{height:36px;padding:0 16px;font-size:13px}
.gb[aria-pressed=true],.gb.selected{box-shadow:inset 0 0 0 1.5px #262827,inset 0 2px 1px #fff,0 6px 14px -10px rgba(38,40,39,.4)}
/* round icon button */
.gc{width:44px;height:44px;padding:0;border-radius:50%;flex:none}
.gc.small{width:36px;height:36px;padding:0}
/* quiet text pill: segmented choices, chips */
.pill{display:inline-flex;align-items:center;gap:6px;height:34px;padding:0 14px;border-radius:999px;border:0;background:none;cursor:pointer;
  font:500 13px/1 var(--font);color:var(--muted);transition:color var(--t-fast),background var(--t-fast),box-shadow var(--t-fast)}
.pill:hover{color:var(--ink);background:rgba(38,40,39,.04)}
.pill[aria-checked=true],.pill[aria-pressed=true],.pill.on{color:var(--ink);background:linear-gradient(180deg,#fff,#f1f2f0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.9),0 0 0 1px rgba(38,40,39,.08),0 4px 10px -7px rgba(38,40,39,.4)}
.pill small{font-size:11px;color:var(--faint)}
.segbar{display:inline-flex;gap:2px;padding:3px;border-radius:999px;background:rgba(38,40,39,.05);box-shadow:inset 0 1px 2px rgba(38,40,39,.08)}
/* fields */
.gi,.gsel{height:44px;border-radius:12px;padding:0 14px;font:400 14px/1 var(--font);color:var(--ink);border:0;background:#fff;
  box-shadow:inset 0 0 0 1px rgba(38,40,39,.12),inset 0 1px 2px rgba(38,40,39,.06);transition:box-shadow var(--t-fast)}
.gi:hover,.gsel:hover{box-shadow:inset 0 0 0 1px rgba(38,40,39,.22)}
.gi::placeholder{color:#9a9e9b}
.gsel{appearance:none;-webkit-appearance:none;padding-right:34px;cursor:pointer;
  background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' fill='none' stroke='%23262827' stroke-width='1.4' stroke-linecap='round'%3E%3Cpath d='M1 1l4.5 4.5L10 1'/%3E%3C/svg%3E") no-repeat right 13px center}
/* switch: a glass bead in a clear track */
.gsw{position:relative;width:50px;height:30px;border-radius:999px;border:0;cursor:pointer;padding:0;flex:none;background:#dcdfdd;box-shadow:inset 0 1px 3px rgba(38,40,39,.18);transition:background var(--t-med) var(--ease)}
.gsw::after{content:"";position:absolute;top:3px;left:3px;width:24px;height:24px;border-radius:50%;background:linear-gradient(180deg,#fff,#eef0ee);
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.9),0 2px 5px -1px rgba(38,40,39,.35);transition:transform var(--t-med) var(--ease)}
.gsw[aria-checked=true]{background:#262827}
.gsw[aria-checked=true]::after{transform:translateX(20px)}
.gsw[disabled]{opacity:.45;cursor:not-allowed}
/* range (volume, R13 form in neutrals) */
.grange{-webkit-appearance:none;appearance:none;width:100%;height:22px;background:none;cursor:pointer;--p:50%}
.grange::-webkit-slider-runnable-track{height:4px;border-radius:4px;background:linear-gradient(90deg,#262827 var(--p),rgba(38,40,39,.14) var(--p))}
.grange::-moz-range-track{height:4px;border-radius:4px;background:rgba(38,40,39,.14)}
.grange::-moz-range-progress{height:4px;border-radius:4px;background:#262827}
.grange::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-7px;border-radius:50%;background:linear-gradient(180deg,#fff,#eceeec);box-shadow:0 0 0 1px rgba(38,40,39,.14),0 2px 5px -1px rgba(38,40,39,.4)}
.grange::-moz-range-thumb{width:18px;height:18px;border:0;border-radius:50%;background:#fff;box-shadow:0 0 0 1px rgba(38,40,39,.14),0 2px 5px -1px rgba(38,40,39,.4)}
.grange:focus-visible{outline:2px solid #262827;outline-offset:2px;border-radius:6px}
/* \u2500\u2500 Dark glass (Studio, R05/R10) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.dark .gb{color:var(--dark-ink);background:linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,.03) 60%,rgba(255,255,255,.06));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.14),inset 0 -1.5px 0 rgba(255,255,255,.1),inset 0 0 0 1px rgba(255,255,255,.07),0 6px 14px -10px rgba(0,0,0,.7)}
.dark .gb:hover{background:linear-gradient(180deg,rgba(255,255,255,.15),rgba(255,255,255,.05) 60%,rgba(255,255,255,.09))}
.dark .gb.primary{color:#171A19;background:linear-gradient(180deg,#f6f7f5,#dfe2df)}
.dark .gb:focus-visible,.dark .pill:focus-visible,.dark .gi:focus-visible,.dark .gsel:focus-visible{outline-color:#ECEEEB}
.dark .pill{color:var(--dark-muted)}
.dark .pill:hover{color:var(--dark-ink);background:rgba(255,255,255,.05)}
.dark .pill[aria-checked=true],.dark .pill.on{color:var(--dark-ink);background:rgba(255,255,255,.11);box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}
.dark .segbar{background:rgba(0,0,0,.25);box-shadow:inset 0 1px 2px rgba(0,0,0,.35)}
.dark .gi,.dark .gsel{color:var(--dark-ink);background-color:rgba(0,0,0,.28);box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
.dark .gsel{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' fill='none' stroke='%23ECEEEB' stroke-width='1.4' stroke-linecap='round'%3E%3Cpath d='M1 1l4.5 4.5L10 1'/%3E%3C/svg%3E")}
.dark .gsw{background:rgba(255,255,255,.12)}
.dark .gsw[aria-checked=true]{background:#ECEEEB}
.dark .gsw[aria-checked=true]::after{background:#262827}
.dark .grange::-webkit-slider-runnable-track{background:linear-gradient(90deg,#ECEEEB var(--p),rgba(255,255,255,.14) var(--p))}
/* translucent interface glass (R21): readable, quiet edge, no white bevel */
.pane{background:rgba(255,255,255,.62);-webkit-backdrop-filter:blur(18px) saturate(1.1);backdrop-filter:blur(18px) saturate(1.1);border-radius:20px;box-shadow:0 0 0 1px rgba(38,40,39,.07),0 24px 50px -30px rgba(38,40,39,.35)}
.pane-dark{background:rgba(30,34,32,.72);-webkit-backdrop-filter:blur(20px) saturate(1.1);backdrop-filter:blur(20px) saturate(1.1);border-radius:16px;color:var(--dark-ink);box-shadow:inset 0 1px 0 rgba(255,255,255,.07),0 0 0 1px rgba(255,255,255,.06),0 30px 60px -30px rgba(0,0,0,.8)}
@media (prefers-reduced-motion:reduce){.gb,.gsw::after,.gsw{transition:none}}

/* \u2500\u2500 Clear glass, like the Orb's shell (2026-10-12): every light control \u2500\u2500 */
.gb,.pill[aria-checked=true],.pill[aria-pressed=true],.pill[aria-selected=true],.pill.on,.gdd-b,.segbar{
  background:linear-gradient(180deg,rgba(255,255,255,.62) 0%,rgba(255,255,255,.14) 52%,rgba(255,255,255,.42) 100%);
  -webkit-backdrop-filter:blur(7px) saturate(1.5) brightness(1.03);backdrop-filter:blur(7px) saturate(1.5) brightness(1.03);
  box-shadow:inset 0 1.5px 1px rgba(255,255,255,.98),inset 0 -2px 2px rgba(255,255,255,.85),inset 0 0 0 1px rgba(255,255,255,.6),
    inset 1.5px 0 1.5px rgba(255,255,255,.7),inset -1.5px 0 1.5px rgba(255,255,255,.7),inset 0 -4px 3px -2px rgba(96,104,100,.32),
    inset 0 -10px 14px -10px rgba(96,104,100,.4),inset 0 10px 14px -12px rgba(255,255,255,.9),
    0 0 0 1px rgba(38,40,39,.09),0 1px 1px rgba(38,40,39,.16),0 3px 5px -2px rgba(38,40,39,.16),0 14px 24px -14px rgba(38,40,39,.45)}   /* 2026-10-21: thickness \u2014 curved sides, refraction band, contact */
.gb{position:relative;overflow:hidden}
.gb::before{content:"";position:absolute;left:10%;top:2px;width:42%;height:46%;border-radius:999px;pointer-events:none;
  background:radial-gradient(70% 90% at 40% 25%,rgba(255,255,255,.95),rgba(255,255,255,0) 72%)}
.gb::after{content:"";position:absolute;left:24%;right:24%;bottom:1px;height:34%;border-radius:999px;pointer-events:none;
  background:radial-gradient(60% 80% at 50% 100%,rgba(255,255,255,.95),rgba(255,255,255,0) 75%)}
.gb>*{position:relative;z-index:1}
.gb:hover{box-shadow:inset 0 1.5px 1px #fff,inset 0 -2px 2px rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.7),inset 1.5px 0 1.5px rgba(255,255,255,.8),inset -1.5px 0 1.5px rgba(255,255,255,.8),inset 0 -4px 3px -2px rgba(96,104,100,.34),inset 0 -10px 14px -10px rgba(96,104,100,.42),inset 0 10px 14px -12px #fff,0 0 0 1px rgba(38,40,39,.11),0 1px 1px rgba(38,40,39,.16),0 3px 4px -1px rgba(38,40,39,.16),0 18px 28px -14px rgba(38,40,39,.5)}
.gb:active{transform:translateY(1px) scale(.985);box-shadow:inset 0 2px 5px rgba(96,104,100,.35),inset 0 0 0 1px rgba(255,255,255,.6),0 0 0 1px rgba(38,40,39,.1),0 4px 8px -6px rgba(38,40,39,.4)}
/* Primary (owner 2026-10-14): one solid piece \u2014 no lit bottom rim, no lower glow, no
   darker ledge; depth is a soft shadow all round. Shared by every .gb.primary. */
.gb.primary{background:linear-gradient(180deg,rgba(62,66,64,.95) 0%,rgba(36,39,38,.96) 100%);
  box-shadow:inset 0 1px 1px rgba(255,255,255,.22),inset 1px 0 1px rgba(255,255,255,.07),inset -1px 0 1px rgba(255,255,255,.07),inset 0 -8px 10px -8px rgba(0,0,0,.35),
    0 0 0 1px rgba(0,0,0,.14),0 1px 1px rgba(0,0,0,.22),0 8px 22px -8px rgba(23,26,25,.42)}   /* one solid piece, with an edge and a contact */
.gb.primary:hover{background:linear-gradient(180deg,rgba(72,76,74,.95) 0%,rgba(42,45,44,.96) 100%);
  box-shadow:inset 0 1px 1px rgba(255,255,255,.26),0 0 0 1px rgba(0,0,0,.14),0 10px 26px -8px rgba(23,26,25,.48)}
.gb.primary:active{box-shadow:inset 0 1px 3px rgba(0,0,0,.3),0 0 0 1px rgba(0,0,0,.14),0 4px 12px -6px rgba(23,26,25,.4)}
.gb.primary::before,.gb.primary::after{display:none}   /* on dark glass the highlight read as a grey smudge at the top left */
.segbar{padding:4px;gap:2px}
.segbar .pill:not([aria-checked=true]):not([aria-selected=true]):not([aria-pressed=true]){background:none;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none}
.pill[aria-checked=true],.pill[aria-selected=true],.pill[aria-pressed=true],.pill.on{color:var(--ink)}
.dark .gb,.dark .gdd-b{background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.04) 52%,rgba(255,255,255,.1));
  box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 -1.5px 1.5px rgba(255,255,255,.16),inset 0 0 0 1px rgba(255,255,255,.1),0 10px 18px -10px rgba(0,0,0,.8)}
.dark .gb::before{opacity:.3}.dark .gb::after{opacity:.2}
.dark .gb.primary{color:#171a19;background:linear-gradient(180deg,#fafaf8,#e6e8e5);box-shadow:inset 0 1px 1px #fff,0 8px 22px -8px rgba(0,0,0,.6)}
.dark .gb.primary::after{display:none}
/* \u2500\u2500 Glass dropdown (replaces the browser's native menu) \u2500\u2500 */
.gdd{position:relative;display:inline-block}
.gdd-b{display:inline-flex;align-items:center;justify-content:space-between;gap:10px;height:36px;min-width:120px;padding:0 12px 0 14px;border:0;border-radius:12px;cursor:pointer;font:500 13px/1 var(--font);color:var(--ink)}
.gdd-b svg{width:11px;height:8px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;transition:transform .25s var(--ease)}
.gdd.open .gdd-b svg{transform:rotate(180deg)}
.gdd-b:focus-visible{outline:2px solid currentColor;outline-offset:2px}
.gdd-l{position:absolute;left:0;top:calc(100% + 6px);z-index:60;min-width:100%;max-height:260px;overflow:auto;padding:6px;border-radius:14px;display:grid;gap:2px;
  background:rgba(255,255,255,.72);-webkit-backdrop-filter:blur(22px) saturate(1.4);backdrop-filter:blur(22px) saturate(1.4);
  box-shadow:inset 0 1px 0 #fff,inset 0 0 0 1px rgba(255,255,255,.6),0 0 0 1px rgba(38,40,39,.08),0 24px 44px -20px rgba(38,40,39,.45);
  transform-origin:20px 0;animation:ddopen .28s var(--ease)}
.gdd-l.up{top:auto;bottom:calc(100% + 6px);transform-origin:20px 100%}
@keyframes ddopen{from{opacity:0;transform:translateY(-4px) scale(.97)}to{opacity:1;transform:none}}
.gdd-o{all:unset;box-sizing:border-box;display:block;padding:9px 12px;border-radius:9px;font:400 13.5px/1.2 var(--font);color:var(--ink);cursor:pointer;white-space:nowrap}
.gdd-o:hover,.gdd-o:focus-visible{background:rgba(38,40,39,.06)}
.gdd-o[aria-selected=true]{font-weight:500;background:rgba(255,255,255,.8);box-shadow:inset 0 0 0 1px rgba(255,255,255,.9),0 2px 6px -4px rgba(38,40,39,.35)}
.dark .gdd-b{color:var(--dark-ink)}
.dark .gdd-l{background:rgba(32,36,34,.82);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 0 0 1px rgba(255,255,255,.08),0 24px 44px -20px rgba(0,0,0,.8)}
.dark .gdd-o{color:var(--dark-ink)}.dark .gdd-o:hover,.dark .gdd-o:focus-visible{background:rgba(255,255,255,.07)}
.dark .gdd-o[aria-selected=true]{background:rgba(255,255,255,.12);box-shadow:none}
`;var qn=`
html.lo-on,html.lo-on body{overflow:hidden;background:var(--bg)}
.lo [hidden],.lo-top [hidden]{display:none!important}
.lo{position:fixed;inset:0;z-index:20;overflow-y:auto;overflow-x:hidden;color:var(--ink);font:400 16px/1.55 var(--font);-webkit-font-smoothing:antialiased;outline:none;scrollbar-width:thin;overscroll-behavior:contain}
.lo-top{position:fixed;inset:0;z-index:40;pointer-events:none;font:400 15px/1.45 var(--font);color:var(--ink)}
.lo-top>*{pointer-events:auto}
.lo a{color:inherit}
.vh{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.kicker{margin:0 0 10px;font:500 12px/1 var(--font);letter-spacing:.06em;color:var(--muted)}
.note{font-size:13px;line-height:1.5;color:var(--muted);margin:10px 0 0}
.tl{display:inline-flex;align-items:center;gap:6px;font:500 13.5px/1 var(--font);color:var(--muted);text-decoration:none;padding:8px 2px;background:none;border:0;cursor:pointer}
.tl:hover{color:var(--ink)}
.tl svg{width:15px;height:15px;stroke:currentColor;fill:none;stroke-width:1.6}
/* \u2500\u2500 Header \u2500\u2500 */
.hd{position:fixed;left:0;right:0;top:0;height:72px;display:flex;align-items:center;gap:28px;padding:0 clamp(16px,3.2vw,44px)}
/* The header's surface (tint, blur, fade) is its own layer behind the contents, so the menus that drop from it are never clipped or un-blurred by it. */
.hd::before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(180deg,rgba(243,243,241,.94),rgba(243,243,241,.78) 62%,rgba(243,243,241,0))}
.wm{display:inline-flex;align-items:center;gap:.06em;color:var(--ink);text-decoration:none;font:300 19px/1 var(--font);letter-spacing:.01em;white-space:nowrap}
.wm-t{display:inline-block}
.wm-o{width:.74em;height:.74em;margin:0 .02em 0 .32em;transform:translateY(.01em)}
.wm-rb{margin-left:.02em}
.wm.small{font-size:16px}
.nav{display:flex;gap:2px}
.nav a{position:relative;font:400 14px/1 var(--font);text-decoration:none;padding:10px 12px;color:var(--muted);transition:color .2s}
.nav a:hover{color:var(--ink)}
.nav a[aria-current]{color:var(--ink)}
.nav a[aria-current]::after{content:"";position:absolute;left:12px;right:12px;bottom:3px;height:1px;background:currentColor}
.hd-r{margin-left:auto;display:flex;align-items:center;gap:10px}
.nav-m{font:400 14px/1 var(--font);text-decoration:none;color:var(--muted);padding:10px 8px}
.nav-m:hover,.nav-m[aria-current]{color:var(--ink)}
.snd{position:relative}
.menu{position:absolute;right:0;top:48px;width:min(244px,calc(100vw - 24px));box-sizing:border-box;padding:12px 14px;display:grid;gap:10px;transform-origin:calc(100% - 18px) 0;animation:drop .34s var(--ease)}
@keyframes drop{from{opacity:0;transform:translateY(-6px) scale(.96)}to{opacity:1;transform:none}}
/* Words that speak: a hairline appears under them on hover/focus, and stays while they are spoken */
.lo :is(h1,h2,h3,h4,p,blockquote,figcaption,li,dt,dd,[data-speak]){text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:.16em;text-decoration-color:transparent;transition:text-decoration-color .45s var(--ease)}
.lo .rd{cursor:pointer;text-decoration-color:rgba(38,40,39,.22)}
.lo [tabindex]:is(h1,h2,h3,p,[data-speak]):focus-visible{text-decoration-color:rgba(38,40,39,.22)}
.lo [data-speaking]{text-decoration-color:rgba(38,40,39,.5)}
body[data-route=studio] .lo .rd{text-decoration-color:rgba(236,238,235,.3)}body[data-route=studio] .lo [data-speaking]{text-decoration-color:rgba(236,238,235,.55)}
.lo [tabindex]:is(h1,h2,h3,p,[data-speak]):focus-visible{outline:2px solid currentColor;outline-offset:6px;border-radius:4px}
/* The speaker: a small breath of light when it is switched */
.snd .gb.pulse{animation:sndpulse .5s var(--ease)}@keyframes sndpulse{40%{transform:scale(.92)}100%{transform:none}}
.mrow{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:13px;letter-spacing:-.005em;color:var(--ink)}
/* Small controls in the sound menu: the site's switch, at menu scale */
.menu .gsw{width:34px;height:20px}.menu .gsw::after{top:2px;left:2px;width:16px;height:16px}.menu .gsw[aria-checked=true]::after{transform:translateX(14px)}
.menu .grange{height:18px}
body[data-route=studio] .menu{background:rgba(30,34,32,.84);box-shadow:0 0 0 1px rgba(255,255,255,.08),0 24px 50px -24px rgba(0,0,0,.8)}
body[data-route=studio] .menu .mrow{color:var(--dark-ink)}body[data-route=studio] .menu .mrow output{color:var(--dark-muted)}
body[data-route=studio] .menu .gsw{background:rgba(255,255,255,.14);box-shadow:inset 0 1px 2px rgba(0,0,0,.4)}body[data-route=studio] .menu .gsw[aria-checked=true]{background:rgba(255,255,255,.5)}
body[data-route=studio] .menu .grange::-webkit-slider-runnable-track{background:linear-gradient(90deg,var(--dark-ink) var(--p),rgba(255,255,255,.14) var(--p))}
.mrow.col{flex-direction:column;align-items:stretch;gap:8px}
.mrow.col span{display:flex;justify-content:space-between}
.mrow output{color:var(--muted);font-variant-numeric:tabular-nums}
.guide-hit{position:fixed;border-radius:50%;border:0;background:transparent;cursor:pointer;padding:0}
.guide-hit:focus-visible{outline:2px solid var(--ink);outline-offset:4px}
.guide-hit.passive{pointer-events:none}
.caption{position:fixed;left:50%;bottom:22px;transform:translate(-50%,8px);max-width:min(560px,84vw);padding:9px 16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-radius:12px;font-size:14px;text-align:center;
  background:rgba(255,255,255,.72);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:0 0 0 1px rgba(38,40,39,.06);opacity:0;transition:opacity .3s,transform .4s var(--ease);pointer-events:none}
.caption.on{opacity:1;transform:translate(-50%,0)}
body[data-route=studio] .hd{color:var(--dark-ink)}body[data-route=studio] .hd::before{background:linear-gradient(180deg,rgba(23,26,25,.96),rgba(23,26,25,.7) 70%,rgba(23,26,25,0))}
body[data-route=studio] .wm,body[data-route=studio] .nav a[aria-current],body[data-route=studio] .nav a:hover{color:var(--dark-ink)}
body[data-route=studio] .nav a,body[data-route=studio] .nav-m{color:var(--dark-muted)}
body[data-route=studio] .hd-r .gb{color:var(--dark-ink);background:rgba(255,255,255,.08);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 0 0 1px rgba(255,255,255,.06)}
body[data-route=studio] .caption{background:rgba(30,34,32,.82);color:var(--dark-ink)}
/* \u2500\u2500 Welcome: centred, quiet; Hello is revealed once, then still \u2500\u2500 */
@keyframes write{to{clip-path:inset(0 -2% 0 0)}}
@keyframes fadeup{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.wel-ctl{position:absolute;left:clamp(16px,3.2vw,44px);bottom:24px;display:flex;gap:16px;align-items:center;white-space:nowrap}
/* \u2500\u2500 Quotation: typography and space only \u2500\u2500 */
.qt blockquote{margin:0}
.qt blockquote p{margin:0;font:200 clamp(28px,3.6vw,52px)/1.2 var(--font);letter-spacing:-.018em;text-wrap:balance}
.qt figcaption{margin-top:26px;font-size:14px;color:var(--muted)}
.qt figcaption a{color:var(--muted);text-decoration-color:rgba(38,40,39,.25)}
/* \u2500\u2500 Selector (R02): an arc of upright panels \u2500\u2500 */
.sel-t{margin:0 0 4vh;font:300 clamp(24px,2.4vw,34px)/1.2 var(--font);letter-spacing:-.01em}
.arc{position:relative;width:100%;height:min(470px,56vh);perspective:1400px;touch-action:pan-y;user-select:none;-webkit-user-select:none}
.arc-c{position:absolute;left:50%;top:0;width:min(300px,62vw);margin-left:calc(min(300px,62vw) / -2);text-decoration:none;color:var(--ink);text-align:center;
  transition:transform .7s var(--ease),opacity .4s;transform-style:preserve-3d;outline:none}
.arc-img{display:block;aspect-ratio:3/4;border-radius:18px;overflow:hidden;background:var(--surface);box-shadow:0 0 0 1px rgba(38,40,39,.06),0 30px 50px -34px rgba(38,40,39,.55);transition:box-shadow .4s}
.arc-c.on .arc-img{box-shadow:0 0 0 1px rgba(38,40,39,.08),0 40px 60px -34px rgba(38,40,39,.6)}
.arc-c:focus-visible .arc-img{outline:2px solid var(--ink);outline-offset:4px}
.arc-s{display:block;margin-top:4px;font-size:13.5px;color:var(--muted);opacity:0;transition:opacity .4s;text-wrap:balance}
.arc-c.on .arc-s{opacity:1}
.count{font-size:13px;color:var(--muted);font-variant-numeric:tabular-nums;min-width:44px;text-align:center}
/* \u2500\u2500 Footer \u2500\u2500 */
.ft{display:flex;align-items:center;gap:24px;flex-wrap:wrap;padding:30px clamp(16px,3.2vw,44px) 90px;border-top:1px solid var(--line);font-size:13.5px;color:var(--muted)}
.ft nav{display:flex;flex-wrap:wrap;gap:10px 18px;min-width:0}.ft nav a{text-decoration:none}.ft nav a:hover{color:var(--ink)}
.ft-n{margin-left:auto}
/* \u2500\u2500 Destinations \u2500\u2500 */
.dest{padding:110px clamp(16px,4vw,56px) 70px;max-width:1360px;margin:0 auto}
.dh{margin-bottom:30px}
.dh h1{margin:0;font:200 clamp(36px,4vw,56px)/1.05 var(--font);letter-spacing:-.025em}
.dh-l{margin:10px 0 0;color:var(--muted);max-width:60ch}
/* Products: a focus strip (R22/R08) */
.prods{text-align:center}
.prods .dh{text-align:left}
.strip{position:relative;height:min(560px,62vh);touch-action:pan-y;user-select:none;-webkit-user-select:none}
.pc{position:absolute;left:50%;top:0;width:min(440px,70vw);margin-left:calc(min(440px,70vw) / -2);text-decoration:none;color:var(--ink);transition:transform .65s var(--ease),opacity .4s;outline:none}
.pc-v{display:block;aspect-ratio:1;border-radius:24px;overflow:hidden;background:radial-gradient(80% 70% at 50% 40%,#fbfbfa,#e9eae8);position:relative}
.pc-v img{display:block;width:100%;height:100%;object-fit:cover;pointer-events:none}
.pc:focus-visible .pc-v{outline:2px solid var(--ink);outline-offset:4px}
.pc-n{display:block;margin-top:16px;font:400 19px/1.2 var(--font)}
.pc-k{display:block;font-size:13.5px;color:var(--muted)}
.pc:not(.on) .pc-n,.pc:not(.on) .pc-k{opacity:.55}
.prods .arc-ctl{margin-top:26px;justify-content:center}
.pc-act{margin-top:18px}
/* Detail (R16) */
.pd{padding:96px clamp(16px,4vw,56px) 70px;max-width:1360px;margin:0 auto}
.back{margin-bottom:14px}
.pd-grid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(300px,.85fr);gap:clamp(24px,5vw,72px);align-items:start}
.pd-stage{position:relative;aspect-ratio:1;max-height:76vh;width:100%;border-radius:24px;overflow:hidden;background:radial-gradient(80% 70% at 50% 42%,#fbfbfa,#e6e7e5);margin:0}
.pd-stage.cover-big{aspect-ratio:16/10;background:var(--surface)}
.pd-stage.cover-big img{display:block;width:100%;height:100%;object-fit:cover}
.pd-hint{position:absolute;left:0;right:0;bottom:18px;text-align:center;font-size:13px;color:var(--muted);z-index:2;pointer-events:none}
.bloom-mic.gb{position:absolute;right:18px;top:18px;width:44px;height:44px;z-index:3;padding:0}
.bloom-mic[hidden]{display:none}
.bloom-mic[aria-pressed=true]{color:#a64d6c;box-shadow:inset 0 0 0 1px rgba(180,92,120,.5),inset 0 2px 1px rgba(255,255,255,.8),0 6px 18px -10px rgba(151,67,96,.4)}
.bloom-mic[aria-pressed=true]::after{content:"";position:absolute;right:3px;top:3px;width:6px;height:6px;border-radius:50%;background:#ba6684;opacity:calc(.5 + var(--input-level,0) * .5)}
.bloom-mic[data-state=requesting]{opacity:.6}
.bloom-mic-status{position:absolute;right:72px;top:33px;max-width:min(65%,280px);z-index:3;font-size:12px;color:var(--muted);pointer-events:none}
.bloom-mic-status.is-error{top:70px;right:18px;padding:9px 12px;border-radius:12px;background:var(--bg)}
.pd-btn{position:absolute;left:50%;top:22px;transform:translateX(-50%);z-index:2}
.pd-seg{position:absolute;left:50%;top:22px;transform:translateX(-50%);z-index:2}
.pd-info{padding-top:8px}
.pd-info h1{margin:0 0 14px;font:200 clamp(36px,3.6vw,54px)/1.05 var(--font);letter-spacing:-.025em}
.lede{font:300 18px/1.5 var(--font);color:#3f4241;margin:0 0 24px;max-width:42ch}
.vars{margin:0 0 24px}
.lbl{font-size:12.5px;color:var(--muted);margin:0 0 8px}
.var-line{font-size:14px;color:var(--muted);margin:10px 0 0;min-height:1.4em}
.acts{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.facts{margin:30px 0 0;display:grid;grid-template-columns:110px 1fr;gap:12px 18px;font-size:14.5px;border-top:1px solid var(--line);padding-top:20px}
.facts dt{color:var(--muted)}.facts dd{margin:0}
.acc{margin-top:18px;border-top:1px solid var(--line);padding-top:14px;font-size:14.5px}
.acc summary{cursor:pointer;color:var(--ink);list-style:none;display:flex;justify-content:space-between}
.acc summary::after{content:"+";color:var(--muted)}.acc[open] summary::after{content:"\u2013"}
.acc p{color:var(--muted);margin:10px 0 0}
.cap{position:absolute;left:50%;top:50%;width:min(420px,74%);height:92px;transform:translate(-50%,-50%);border-radius:999px;cursor:grab;touch-action:none;
  background:linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,255,255,.2));box-shadow:inset 0 0 0 1px rgba(255,255,255,.9),inset 0 -6px 10px -6px rgba(150,156,152,.4),inset 0 2px 2px #fff,0 0 0 1px rgba(38,40,39,.06),0 24px 40px -26px rgba(38,40,39,.5);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}
.cap-l{position:absolute;right:34px;top:50%;transform:translateY(-50%);font:300 15px/1 var(--font);color:var(--muted)}
.cap:focus-visible{outline:2px solid var(--ink);outline-offset:4px}
.kit{position:absolute;inset:0;display:flex;flex-wrap:wrap;gap:16px;align-content:center;justify-content:center;padding:36px}
.kit .gi{width:200px}.kit .grange{width:200px}
/* Templates */
.tpl-grid{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(280px,.8fr);gap:clamp(24px,4vw,56px);align-items:start}
.tpl-cover{margin:0;border-radius:18px;overflow:hidden;box-shadow:0 0 0 1px rgba(38,40,39,.06),0 40px 70px -44px rgba(38,40,39,.6)}
.tpl-cover img{display:block;width:100%;height:auto}
.tpl-side{display:flex;flex-direction:column;gap:18px}
.cas-stage{position:relative;aspect-ratio:1.05;width:100%}
.cas-canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.tpl-info h2{margin:0 0 6px;font:300 26px/1.15 var(--font)}
.tpl-info p{margin:0 0 16px;color:var(--muted)}
.org-row{margin-top:30px;display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.org{display:flex;gap:4px;padding:3px;border-radius:999px;background:rgba(38,40,39,.05)}
.org .pill[aria-selected=true]{color:var(--ink);background:#fff;box-shadow:0 0 0 1px rgba(38,40,39,.08),0 4px 10px -7px rgba(38,40,39,.4)}
/* Sound (R17) */
.sg{margin:0 0 46px}
.sg header{display:flex;align-items:baseline;gap:16px;border-bottom:1px solid var(--line);padding-bottom:12px;margin-bottom:6px;flex-wrap:wrap}
.sg h2{margin:0;font:400 19px/1.2 var(--font)}
.sg header p{margin:0;color:var(--muted);font-size:14px}
.sgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:0 34px}
.si{display:grid;grid-template-columns:36px 1fr;grid-template-rows:auto auto auto;gap:6px 14px;padding:18px 0;border-bottom:1px solid var(--line)}
.si-play{grid-row:1/3}
.si-t h3{margin:0;font:400 15.5px/1.3 var(--font)}
.si-t p{margin:2px 0 0;font-size:13px;color:var(--muted);line-height:1.4}
.si-w{grid-column:2;height:44px;cursor:pointer;touch-action:none;border-radius:6px}
.si-w canvas{width:100%;height:100%;display:block}
.si-w:focus-visible{outline:2px solid var(--ink);outline-offset:3px}
.si-m{grid-column:2;display:flex;align-items:center;gap:8px}
.si-d{font-size:12.5px;color:var(--muted);font-variant-numeric:tabular-nums;margin-right:auto}
.si-h svg{width:15px;height:15px;stroke:currentColor;fill:none;stroke-width:1.6}
.si-h[aria-pressed=true] svg{fill:currentColor}
/* Account & membership */
.acct-tabs{margin-bottom:30px}
.acct-tabs .pill{text-decoration:none}
.form{display:grid;gap:16px;max-width:460px}
.fl{display:grid;gap:6px;font-size:13.5px;color:var(--muted)}
.kv{margin-top:34px;display:grid;grid-template-columns:140px 1fr;gap:10px 18px;font-size:14.5px;max-width:460px;border-top:1px solid var(--line);padding-top:20px}
.kv span{color:var(--muted)}.kv b{font-weight:400}
.dgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:26px}
.dc{display:grid;gap:8px}
.dc-img{display:block;aspect-ratio:4/3;border-radius:14px;overflow:hidden;background:var(--dark)}
.dc-img img{display:block;width:100%;height:100%;object-fit:cover}
.dc-n{height:38px}
.empty{padding:40px 0;max-width:48ch}.empty h2{font:300 26px/1.2 var(--font);margin:0 0 8px}.empty p{color:var(--muted);margin:0 0 18px}
.slist{list-style:none;padding:0;margin:0;max-width:640px}
.slist li{display:flex;align-items:center;gap:14px;padding:14px 0;border-bottom:1px solid var(--line)}
.slist li .kicker{margin:0;width:70px}.slist li a{text-decoration:none;flex:1}
.plans{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin:10px 0 50px}
.plan{padding:26px 24px;border-radius:20px;background:rgba(255,255,255,.5);box-shadow:0 0 0 1px rgba(38,40,39,.07);display:flex;flex-direction:column;gap:10px}
.plan.em{background:#fff;box-shadow:0 0 0 1px rgba(38,40,39,.1),0 30px 50px -36px rgba(38,40,39,.5)}
.plan h2{margin:0;font:300 26px/1.2 var(--font)}.plan p{margin:0;color:var(--muted)}
.plan ul{margin:6px 0 12px;padding-left:18px;font-size:14.5px;line-height:1.7;flex:1}
.plan .gb{align-self:flex-start}
.interest h2{margin:0;font:300 24px/1.2 var(--font)}
/* \u2500\u2500 Waitlist (Membership + footer), free Orb code, legal pages \u2500\u2500 */
.wl-row{display:flex;gap:10px}.wl-row .gi{flex:1;min-width:0}
.wl .note a,.free .note a,.legal-b a{color:var(--ink)}
.ft .wl-c{flex-basis:100%;max-width:520px;gap:8px}.ft .wl-c .gi{height:38px}.ft .wl-c .note{margin:0}
.free{margin-top:14px}
.free-p{margin-top:6px}
.free-c{margin:10px 0 12px;padding:14px 16px;border-radius:14px;overflow-x:auto;font:400 12.5px/1.6 ui-monospace,SFMono-Regular,Menlo,monospace;color:var(--ink);white-space:pre}
.free-c code{font:inherit}
.legal-b{max-width:68ch}
.legal-b h2{margin:30px 0 8px;font:300 22px/1.25 var(--font)}
.legal-b p{margin:0 0 10px;color:#3f4241}
/* \u2500\u2500 Studio: one dark workspace (R09/R10) \u2500\u2500 */
body.dark-ui{background:#171A19}
.r-studio{overflow:hidden}
.st{position:fixed;inset:0}
.st-view{position:absolute;cursor:grab;touch-action:none;outline:none}
.st-view.grab{cursor:grabbing}
.st-view:focus-visible{box-shadow:inset 0 0 0 2px rgba(236,238,235,.5)}
.st-screen{position:absolute;border-radius:16px;overflow:hidden;box-shadow:0 0 0 1px rgba(255,255,255,.07),0 40px 80px -30px rgba(0,0,0,.8)}
.st-cap{position:absolute;border-radius:999px;cursor:grab;touch-action:none;background:linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,.03));box-shadow:inset 0 1px 0 rgba(255,255,255,.18),inset 0 -2px 0 rgba(255,255,255,.08),0 0 0 1px rgba(255,255,255,.08),0 30px 40px -24px rgba(0,0,0,.8)}
.st-cap .cap-label{position:absolute;right:30px;top:50%;transform:translateY(-50%);font:300 15px/1 var(--font);color:var(--dark-muted)}
.st-kit{position:absolute;display:grid;place-items:center}
.kit-swatch{display:flex;flex-wrap:wrap;gap:16px;justify-content:center;align-items:center;max-width:620px;padding:40px;border-radius:24px;background:#F3F3F1;box-shadow:0 40px 80px -30px rgba(0,0,0,.8)}
.kit-swatch .gi,.kit-swatch .gsel{width:190px}
.st-bar{position:fixed;left:16px;top:80px;display:flex;flex-wrap:nowrap;gap:6px;align-items:center;padding:6px;border-radius:14px;background:rgba(30,34,32,.72);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:inset 0 1px 0 rgba(255,255,255,.07),0 0 0 1px rgba(255,255,255,.05);max-width:calc(100vw - 380px)}
.st-bar .gb{height:32px;padding:0 12px;font-size:12.5px}
.st-bar .gc{width:32px;padding:0}
.st-bar .gb svg{width:15px;height:15px;stroke:currentColor;fill:none;stroke-width:1.6}
.st-bar .gsel{height:32px;font-size:12.5px;border-radius:9px;padding-left:10px}
.st-bar .modes{display:flex;gap:2px;padding:2px;border-radius:10px;background:rgba(0,0,0,.25)}
.st-bar .modes .pill{height:28px;font-size:12px;border-radius:8px}
.st-bar .sp{flex:0 0 6px}
.ins{color:var(--dark-ink);position:fixed;right:14px;top:80px;bottom:14px;width:330px;display:flex;flex-direction:column;font:400 12px/1.35 var(--font);animation:slidein .5s var(--ease)}
@keyframes slidein{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:none}}
.ins-head{padding:16px 16px 12px;border-bottom:1px solid var(--dark-line)}
.ins-head .kicker{color:var(--dark-muted)}
.ins-head h2{margin:0;font:400 15px/1.2 var(--font)}
.ins-ea{padding:12px 16px 4px}.ins-ea .fl span,.ins-ea .note{color:var(--dark-muted)}.ins-ea .note a{color:var(--dark-ink)}.ins-ea .tl{color:var(--dark-ink)}.ins-ea .wl{margin-top:10px}.ins-ea textarea{width:100%;box-sizing:border-box;resize:vertical;min-height:64px}
.fb-p{margin-top:6px}.ea-wait{margin-top:14px}
.access{margin:6px 0 0;font-size:11.5px;line-height:1.4;color:var(--dark-muted)}
.ins-body{overflow-y:auto;padding:4px 0 16px;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.15) transparent}
.igrp{border-bottom:1px solid var(--dark-line)}
.igrp h3{margin:0}
.igrp h3 button{all:unset;box-sizing:border-box;display:flex;justify-content:space-between;width:100%;padding:11px 16px;cursor:pointer;font:500 12px/1 var(--font);color:var(--dark-ink)}
.igrp h3 button span{color:var(--dark-muted)}
.igrp h3 button:focus-visible{outline:2px solid var(--dark-ink);outline-offset:-2px}
.irows{padding:0 16px 12px;display:grid;gap:4px}
.irow{display:grid;grid-template-columns:88px 1fr 66px;gap:8px;align-items:center;min-height:30px}
.irow.wide{grid-template-columns:1fr}
.irow label{color:#c6cac7;font-size:12px}
.irow input[type=range]{width:100%;height:18px;accent-color:#ECEEEB}
.inum-w{position:relative;display:flex;align-items:center}
.inum{width:100%;height:26px;box-sizing:border-box;border-radius:7px;border:0;background:rgba(0,0,0,.3);color:var(--dark-ink);font:500 12px/1 var(--font);font-variant-numeric:tabular-nums;text-align:right;padding:0 22px 0 6px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.07);-moz-appearance:textfield}
.inum::-webkit-inner-spin-button,.inum::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
.inum:focus{outline:1px solid rgba(236,238,235,.6)}
.unit{position:absolute;right:6px;font-size:10.5px;color:var(--dark-muted);pointer-events:none}
.icol{grid-column:2/4;display:flex;gap:8px;align-items:center}
.icol input[type=color]{width:32px;height:26px;padding:0;border:0;border-radius:7px;background:none;cursor:pointer}
.icol .hex{padding:0 6px;text-align:left;font-family:var(--mono)}
.isel{grid-column:2/4;height:28px!important;font-size:12.5px!important;border-radius:8px!important}
/* \u2500\u2500 Responsive \u2500\u2500 */
@media (max-width:900px){
  .pd-grid,.tpl-grid{grid-template-columns:1fr}
  .plans{grid-template-columns:1fr}
  .nav-m{display:none}
}
@media (max-width:820px){
  .st-bar{top:auto!important;bottom:calc(46vh + 8px);left:8px;right:8px;max-width:none;flex-wrap:wrap;justify-content:center;padding:4px;gap:4px}
  .st-bar .modes{order:9;flex-basis:100%;justify-content:center}
  .st-bar [data-resetpre]{display:none}
  .st-bar>*{flex:none}
  .ins{left:0;right:0;bottom:0;top:auto!important;width:auto;height:46vh;border-radius:18px 18px 0 0;animation:sheet .5s var(--ease)}
  @keyframes sheet{from{transform:translateY(30px);opacity:0}to{transform:none;opacity:1}}
}
@media (max-width:640px){
  .hd{height:auto;flex-wrap:wrap;gap:4px 10px;padding:10px 14px 6px}
  .nav{order:3;width:100%;justify-content:space-between}
  .nav a{padding:8px 6px;font-size:13.5px}
  .dest,.pd{padding-top:118px}
  .wel{padding-bottom:110px}
  .wel-ctl{left:50%;transform:translateX(-50%);bottom:20px}
  .ft{padding-bottom:100px}.ft-n{margin-left:0}
  .arc{height:min(440px,60vh)}
  .sel .segbar{display:none}
  .arc-ctl{margin-top:96px}
}
@media (prefers-reduced-motion:reduce){.arc-c,.pc,.menu,.ins{transition:none!important;animation:none!important}}

/* \u2500\u2500 Welcome: Hello, line and action arrive together, under the Orb \u2500\u2500 */
.wel{box-sizing:border-box;height:100vh;height:100svh;position:relative;display:flex;align-items:flex-start;justify-content:center;text-align:center;padding-top:calc(46vh + 10px)}
.wel-copy{display:flex;flex-direction:column;align-items:center}
.wel-h{margin:0;font:200 clamp(56px,7vw,112px)/1 var(--font);letter-spacing:-.035em;color:var(--ink)}
.wel-h span{display:inline-block;padding:0 .04em}
.wel-line{margin:14px 0 0;font:300 clamp(17px,1.5vw,21px)/1.4 var(--font);color:var(--muted)}
.wel-go{margin-top:26px}
.wel-copy.reveal>*{opacity:0;transform:translateY(10px);filter:blur(6px);animation:arrive .9s var(--ease) .35s forwards}
/* One after another: Hello, then the line, then Let's go \u2014 and all three stay */
.wel-copy.reveal>:nth-child(2){animation-delay:.7s}.wel-copy.reveal>:nth-child(3){animation-delay:1.05s}
@keyframes arrive{to{opacity:1;transform:none;filter:none}}
@media (prefers-reduced-motion:reduce){.wel-copy.reveal>*{animation:none;opacity:1;transform:none;filter:none}}
@media (max-width:640px){.wel{padding-top:calc(44vh + 6px)}}
/* \u2500\u2500 Quotation: close behind the welcome; no empty screen \u2500\u2500 */
.qt{height:110vh;position:relative}
.qt-fig{position:sticky;top:max(26vh,110px);margin:0 auto;max-width:min(860px,86vw);text-align:center}
/* \u2500\u2500 Selector \u2500\u2500 */
.sel{padding:10vh 0 40px;display:flex;flex-direction:column;align-items:center}
.arc-ctl{display:flex;align-items:center;gap:14px;margin-top:112px}
/* Covers: a title and one whole object */
.cv{position:relative;display:flex!important;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:12%}
.cv-t{position:absolute;left:22px;top:20px;font:300 26px/1 var(--font);letter-spacing:-.01em;color:var(--ink)}
.cv-obj{display:block;width:82%;height:auto;object-fit:contain;pointer-events:none;mix-blend-mode:multiply;-webkit-mask:radial-gradient(closest-side,#000 82%,transparent);mask:radial-gradient(closest-side,#000 82%,transparent)}
.cv-studio .cv-obj{mix-blend-mode:screen}
.cv-products{background:radial-gradient(80% 60% at 50% 60%,#ffffff,#ecedeb)}
.cv-templates{background:radial-gradient(80% 60% at 50% 60%,#fbfbfa,#e6e7e5)}
.cv-studio{background:radial-gradient(70% 55% at 50% 62%,#262a28,#0f1110)}.cv-studio .cv-t{color:var(--dark-ink)}
.cv-sound{background:radial-gradient(80% 60% at 50% 60%,#ffffff,#e9eae8);justify-content:center;padding:0}
.cv-case{width:74%;aspect-ratio:1.42;border-radius:10px;position:relative;margin-bottom:6%;
  background:linear-gradient(135deg,rgba(255,255,255,.7),rgba(255,255,255,.15) 45%,rgba(255,255,255,.45));
  box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.95),inset 3px 3px 0 rgba(255,255,255,.6),inset -3px -3px 6px rgba(140,146,142,.25),0 0 0 1px rgba(38,40,39,.08),0 26px 36px -22px rgba(38,40,39,.45);transform:perspective(500px) rotateY(-14deg) rotateX(6deg)}
.cv-case-in{position:absolute;inset:9%;border-radius:6px;background:linear-gradient(160deg,rgba(255,255,255,.5),rgba(230,232,230,.25));box-shadow:inset 0 0 0 1px rgba(255,255,255,.8)}
.cv-wave{display:flex;align-items:center;gap:5px;height:40%;width:74%;margin-top:18%}
.cv-wave i{flex:1;height:calc(var(--h)*100%);border-radius:6px;background:linear-gradient(90deg,rgba(255,255,255,.95),rgba(214,218,216,.7));box-shadow:inset 0 0 0 1px rgba(255,255,255,.9),0 6px 10px -6px rgba(38,40,39,.4)}
.cv-wave i:nth-child(-n+9){background:linear-gradient(90deg,#3a3d3c,#262827)}
.ft{padding-bottom:40px}

/* Templates (2026-10-12): organizer first; the cover appears when a case is lifted */
.tpl-stage{position:relative;height:min(560px,62vh)}
.tpl-stage .cas-stage{position:absolute;inset:0;aspect-ratio:auto;width:auto}
.tpl-cover{display:none;position:absolute;right:0;top:6%;width:min(58%,700px);margin:0;border-radius:16px;overflow:hidden;pointer-events:none;
  box-shadow:0 0 0 1px rgba(255,255,255,.9),0 40px 70px -40px rgba(38,40,39,.6);opacity:0;transform:translateY(24px) scale(.96);transition:opacity .5s var(--ease),transform .7s var(--ease)}
.tpl-cover.on{opacity:1;transform:none}
.tpl-cover img{display:block;width:100%;height:auto}
.tpl-row{display:flex;gap:30px;align-items:flex-start;flex-wrap:wrap;margin-top:10px}
.tpl-info{flex:1;min-width:280px}
.tpl-info h2{margin:0 0 6px;font:300 26px/1.15 var(--font)}
.tpl-info p{margin:0 0 10px;color:var(--muted)}
.price{font:400 15px/1 var(--font);color:var(--ink);margin:6px 0 16px}
@media (max-width:900px){.tpl-cover{left:0;right:0;width:auto;top:auto;bottom:0}}
/* Shop */
.shop-g{margin:34px 0 14px;font:300 26px/1.1 var(--font);display:flex;gap:12px;align-items:baseline}.shop-g small{font-size:14px;color:var(--muted)}
.shop-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:22px}
.shop-c{display:flex;flex-direction:column;gap:10px;text-decoration:none;color:var(--ink)}
.shop-v{display:block;aspect-ratio:1;border-radius:18px;overflow:hidden;background:radial-gradient(80% 70% at 50% 42%,#fbfbfa,#e8e9e7);transition:transform .4s var(--ease),box-shadow .4s}
.shop-v img{display:block;width:100%;height:100%;object-fit:cover}
.shop-c:hover .shop-v{transform:translateY(-3px);box-shadow:0 26px 40px -30px rgba(38,40,39,.55)}
.shop-c:focus-visible .shop-v{outline:2px solid var(--ink);outline-offset:3px}
.shop-m{display:grid;gap:2px}.shop-n{font:400 16px/1.3 var(--font)}.shop-k{font-size:13px;color:var(--muted)}.shop-p{font-size:13.5px;margin-top:4px}
.shop-a{display:flex;gap:8px;align-items:center}
.studio-lock{display:flex;gap:12px;align-items:center;margin-top:18px;padding:12px 14px;border-radius:14px;text-decoration:none;color:var(--ink);background:rgba(255,255,255,.5);box-shadow:inset 0 0 0 1px rgba(255,255,255,.9),0 0 0 1px rgba(38,40,39,.07)}
.studio-lock svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:1.6}
.studio-lock span{display:grid}.studio-lock small{font-size:12.5px;color:var(--muted)}
/* Cart */
.cartw{position:relative}
.cart-n{position:absolute;right:-2px;top:-2px;min-width:16px;height:16px;border-radius:8px;background:#262827;color:#fff;font:600 10px/16px var(--font);text-align:center;padding:0 4px;z-index:2}
.cart-p{width:300px}
.cart-l{list-style:none;margin:0;padding:0;display:grid;gap:6px}.cart-l li{display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:14px}.cart-l a{text-decoration:none}
.cart-p .gb{width:100%;margin-top:6px}
/* Sound */
.snd-head{display:grid;grid-template-columns:1fr minmax(220px,300px);gap:30px;align-items:center}
.snd-stage{aspect-ratio:1;width:100%}
.si-x{grid-column:2;display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.si-x .tl{font-size:12.5px}
@media (max-width:700px){.snd-head{grid-template-columns:1fr}.snd-stage{width:60%;margin:0 auto}}
/* Studio */
.access{display:flex;gap:6px;align-items:flex-start;flex-wrap:wrap}.access svg{width:13px;height:13px;stroke:currentColor;fill:none;stroke-width:1.6;margin-top:1px}.access a{color:var(--dark-ink)}
.ins-snd{display:flex;gap:8px;margin-top:12px;align-items:center}.ins-snd .gdd{flex:1}.ins-snd .gdd-b{width:100%}
.ins-acts{display:flex;gap:6px;margin-top:12px;align-items:center}.ins-acts .sp{flex:1}
.st-bar .gdd-b{height:32px;min-width:110px}
.isel+.gdd-b,.irow .gdd{grid-column:2/4}.irow .gdd-b{width:100%;height:28px}

body[data-route=studio] .hd .gb{color:var(--dark-ink);background:linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,.03) 55%,rgba(255,255,255,.08));box-shadow:inset 0 1px 1px rgba(255,255,255,.28),inset 0 -1px 1px rgba(255,255,255,.12),inset 0 0 0 1px rgba(255,255,255,.09),0 8px 16px -10px rgba(0,0,0,.8)}
body[data-route=studio] .hd .gb::before{opacity:.25}body[data-route=studio] .hd .gb::after{opacity:.15}
.gdd-b span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ins-snd .gdd-b{height:32px}
/* \u2550\u2550 Owner round 2026-10-12 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
/* The guide: no ring around it when clicked */
.guide-hit,.guide-hit:focus,.guide-hit:focus-visible{outline:none!important;box-shadow:none}
.keyboard .guide-hit:focus-visible{box-shadow:0 0 0 1px rgba(255,255,255,.7),0 0 24px rgba(255,255,255,.6)}
/* Welcome \xB7 quotation \xB7 selector never share one view */
.qt{height:125vh}
.sel{padding-top:12vh}
/* Glass with volume (ref N3): a clear body, a bright rim, a darker lower wall, one soft shadow */
.glass{position:relative;border-radius:24px;
  background:linear-gradient(150deg,rgba(255,255,255,.62) 0%,rgba(255,255,255,.22) 42%,rgba(255,255,255,.34) 100%);
  -webkit-backdrop-filter:blur(22px) saturate(1.3);backdrop-filter:blur(22px) saturate(1.3);
  box-shadow:inset 0 1.5px 0 rgba(255,255,255,.95),inset 0 0 0 1px rgba(255,255,255,.55),inset 1.5px 0 0 rgba(255,255,255,.5),
    inset 0 -14px 28px -18px rgba(120,126,122,.28),inset 0 -1px 0 rgba(255,255,255,.7),
    0 1px 1px rgba(38,40,39,.04),0 30px 60px -34px rgba(38,40,39,.38)}
.glass.dark{color:var(--dark-ink);background:linear-gradient(150deg,rgba(60,64,62,.55),rgba(20,22,21,.45) 50%,rgba(40,44,42,.5));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.22),inset 0 0 0 1px rgba(255,255,255,.08),inset 0 -14px 28px -18px rgba(0,0,0,.5),0 40px 80px -30px rgba(0,0,0,.7)}
/* Something soft behind the glass so it reads as glass */
.lo.r-products::before,.lo.r-templates::before,.lo.r-sound::before{content:"";position:fixed;inset:0;z-index:-1;pointer-events:none;
  background:radial-gradient(38% 34% at 18% 30%,rgba(200,204,202,.55),transparent 70%),radial-gradient(34% 30% at 82% 68%,rgba(186,190,188,.5),transparent 70%),radial-gradient(30% 26% at 62% 18%,rgba(255,255,255,.9),transparent 70%)}
/* Equal buttons wherever actions sit together */
.eq{display:grid!important;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:8px;align-items:stretch}
.eq>.gb,.file-a .gb{box-sizing:border-box;width:100%;min-width:0;padding:0 10px}
.eq>.gb span{overflow:hidden;text-overflow:ellipsis}.eq>.gb svg{display:none}
/* \u2500\u2500 Selector covers: number, name, gradient, texture (no spoiler) \u2500\u2500 */
.cv{display:block!important;padding:0!important}
.cv-grain{position:absolute;inset:0;opacity:.32;mix-blend-mode:overlay;pointer-events:none;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 1.2 0'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)'/%3E%3C/svg%3E")}
.cv-n{position:absolute;left:22px;top:20px;font:300 14px/1 var(--font);letter-spacing:.04em;opacity:.7}
.cv-t{left:22px!important;top:auto!important;bottom:22px;font:200 34px/1 var(--font)!important;letter-spacing:-.02em}
.cv-products{background:radial-gradient(90% 70% at 30% 20%,#ffffff 0%,#e9eaea 40%,#b9bdbb 100%)!important}
.cv-templates{background:linear-gradient(160deg,#f6f5f2 0%,#d9d6d0 55%,#a9a6a0 100%)!important}
.cv-studio{background:radial-gradient(80% 60% at 70% 30%,#4a4e4c 0%,#1d201f 55%,#070808 100%)!important}
.cv-studio .cv-n,.cv-studio .cv-t{color:#ECEEEB}
.cv-sound{background:conic-gradient(from 210deg at 60% 70%,#dfe1e0,#ffffff,#c4c8c6,#eef0ef,#dfe1e0)!important}
.cv-templates .cv-grain{opacity:.42}.cv-studio .cv-grain{opacity:.5;mix-blend-mode:soft-light}
.cv::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;box-shadow:inset 0 1px 0 rgba(255,255,255,.7),inset 0 0 0 1px rgba(255,255,255,.25)}
/* \u2500\u2500 Products: one shop of files \u2500\u2500 */
.file-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:26px}
.file{display:flex;flex-direction:column;padding:12px 12px 16px;border-radius:26px}
.file-v{position:relative;aspect-ratio:1;border-radius:18px;overflow:hidden;background:radial-gradient(80% 70% at 50% 40%,rgba(255,255,255,.85),rgba(226,228,227,.6))}
.file-v img{display:block;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.04)}
.file-ext,.file-v .file-ext{position:absolute;left:12px;top:10px;font:500 11px/1 var(--mono);color:var(--muted);letter-spacing:.02em;padding:5px 7px;border-radius:7px;background:rgba(255,255,255,.6)}
.si-t .file-ext{position:static;margin-left:8px;vertical-align:2px}
.file-m{padding:14px 6px 12px;flex:1}
.file-m h3{margin:0;font:400 17px/1.25 var(--font)}
.file-m p{margin:3px 0 0;font-size:13.5px;color:var(--muted);line-height:1.4}
.file-m .file-p{color:var(--ink);margin-top:8px}
.file-a{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
.file-a .gb{width:100%;min-width:0;padding:0 6px;font-size:12.5px}.file-a .gb svg{display:none}
.sph-c{position:absolute;inset:0;width:100%;height:100%;display:block}
.file-v[data-sphere]::after{content:"";position:absolute;left:22%;right:22%;bottom:7%;height:6%;border-radius:50%;background:radial-gradient(closest-side,rgba(38,40,39,.28),transparent);pointer-events:none;z-index:-0}
.pd-stage.glass{background:radial-gradient(80% 70% at 50% 42%,rgba(255,255,255,.7),rgba(226,228,227,.45))}
.pd-sph{position:absolute;inset:8% 10% 12%}
.acts.eq{max-width:420px}
/* \u2500\u2500 Templates: a clear glass folder (ref N1) \u2500\u2500 */
.folder{position:relative;max-width:1080px;margin:40px auto 0}
.folder-tab{display:inline-flex;gap:12px;align-items:baseline;padding:14px 26px 22px;margin-bottom:-14px;border-radius:20px 20px 0 0;font:400 16px/1 var(--font)}
.folder-tab small{color:var(--muted);font-size:13px}
.folder-body{border-radius:0 28px 28px 28px;padding:40px 24px 26px;min-height:560px;overflow:hidden}
.folder-track{position:relative;height:440px;perspective:1400px;touch-action:pan-y;user-select:none;-webkit-user-select:none;outline:none}
.tcard{border:0;margin:0;font:inherit;text-align:left;box-sizing:border-box;position:absolute;left:50%;top:0;width:min(430px,72%);padding:16px 16px 20px;border-radius:22px;cursor:pointer;display:flex;flex-direction:column;gap:6px;
  transition:transform .65s var(--ease),opacity .4s;color:var(--ink)}
.tcard.glass{position:absolute}
.tcard:focus-visible{outline:2px solid var(--ink);outline-offset:4px}
.tcard-n{font:300 13px/1 var(--font);color:var(--muted);letter-spacing:.04em}
.tcard-cv{display:block;aspect-ratio:16/10;border-radius:14px;overflow:hidden;margin:6px 0 10px;background:linear-gradient(160deg,rgba(255,255,255,.6),rgba(220,222,221,.4));box-shadow:inset 0 0 0 1px rgba(255,255,255,.8)}
.tcard-cv img{display:block;width:100%;height:100%;object-fit:cover;pointer-events:none}
.tcard-t{font:300 24px/1.1 var(--font);letter-spacing:-.01em}
.tcard-l{font-size:13.5px;color:var(--muted);line-height:1.4}
.tcard.soon{cursor:default;opacity:.6}.tcard.soon .tcard-cv{background:repeating-linear-gradient(135deg,rgba(255,255,255,.5) 0 10px,rgba(230,232,231,.4) 10px 20px)}
.folder-ctl{display:flex;justify-content:center;align-items:center;gap:16px;margin-top:14px}
.folder-open{animation:none}
.folder-open.in{animation:unfold .6s var(--ease)}
@keyframes unfold{from{opacity:0;transform:translateY(16px) scale(.97)}to{opacity:1;transform:none}}
.folder-back{margin:-14px 0 14px}
.fo-grid{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(260px,.9fr);gap:34px;align-items:start}
.fo-cv{margin:0;padding:10px;border-radius:20px}.fo-cv img{display:block;width:100%;height:auto;border-radius:12px}
.fo-info h2{margin:0 0 8px;font:200 38px/1.05 var(--font);letter-spacing:-.02em}
.fo-info p{margin:0 0 12px;color:var(--muted)}
.fo-inc{margin:0 0 14px;padding-left:18px;font-size:14px;line-height:1.7}
.tcard-tag{display:block;margin:2px 0 4px;font:500 10.5px/1.3 var(--font);letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.fo-label{margin:-2px 0 12px;font:500 11.5px/1.4 var(--font);letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
@media (max-width:820px){.fo-grid{grid-template-columns:1fr}.folder-body{padding:30px 12px 20px}.folder-track{height:400px}.tcard{width:84%}}
/* \u2500\u2500 Sound: files only \u2500\u2500 */
.sgrid{gap:18px!important;grid-template-columns:repeat(auto-fill,minmax(min(100%,380px),1fr))!important}
.si.glass{border-bottom:0;padding:18px 18px 16px;border-radius:22px;grid-template-rows:auto auto auto auto}
.si-x.eq{grid-column:1/-1;margin-top:6px}
/* \u2500\u2500 Studio: for members, the inside stays hidden \u2500\u2500 */
.lo.r-studio{background:#0b0c0c}
.st-lock{position:relative;min-height:100vh;min-height:100svh;display:grid;place-items:center;overflow:hidden}
.lock-blur{position:absolute;inset:-40px;filter:blur(38px) saturate(.6);opacity:.85;pointer-events:none}
.lock-blur i{position:absolute;display:block}
.lb-bar{left:6%;top:16%;width:42%;height:7%;border-radius:20px;background:#2a2e2c}
.lb-sph{left:28%;top:28%;width:34vmin;height:34vmin;border-radius:50%;background:radial-gradient(circle at 40% 35%,#d9dcda,#5d6260 55%,#141615)}
.lb-ins{right:5%;top:14%;width:24%;height:72%;border-radius:22px;background:#202422}
.lock-card{position:relative;z-index:2;max-width:440px;margin:0 20px;padding:34px 32px 30px;border-radius:28px;text-align:left}
.lock-card .kicker{color:var(--dark-muted)}
.lock-card h1{margin:0 0 12px;font:200 44px/1.05 var(--font);letter-spacing:-.02em}
.lock-card p{margin:0 0 22px;color:#c4c8c6}
.lock-i{display:inline-grid;place-items:center;width:44px;height:44px;border-radius:50%;margin-bottom:16px;background:rgba(255,255,255,.08);box-shadow:inset 0 1px 0 rgba(255,255,255,.2)}
.lock-i svg{width:20px;height:20px;stroke:#ECEEEB;fill:none;stroke-width:1.6}
.studio-lock{margin-top:14px}

/* Reading (owner 2026-10-12): one clear order on every page \u2014 small label,
   large title, one lede of 45\u201370 characters per line, then the content.
   Body copy never under 14px; long text left-aligned; only short display
   lines are centred. */
.dh{max-width:760px}
.dh h1{margin-top:2px}
.dh-l{font:300 clamp(17px,1.35vw,19px)/1.55 var(--font);color:#4c504e;max-width:56ch}
.file-m p,.si-t p,.tcard-l{font-size:14px;line-height:1.5}
.arc-s{font-size:15px!important;margin-top:14px!important}
.sel-t{font-size:clamp(28px,3vw,42px)!important;font-weight:200!important;letter-spacing:-.02em!important;text-align:center;max-width:none;margin-left:auto;margin-right:auto;text-wrap:balance}
.wel-line{max-width:min(44em,100%);margin-left:auto;margin-right:auto;padding:0 clamp(16px,4vw,40px);box-sizing:border-box;text-wrap:balance}
.lede{max-width:46ch}
.fo-info p,.lock-card p{max-width:46ch;line-height:1.55}

/* \u2500\u2500 Header stays legible over scrolled titles \u2500\u2500 */
.hd{height:84px}
.hd::before{-webkit-backdrop-filter:blur(14px) saturate(1.2);backdrop-filter:blur(14px) saturate(1.2);
  -webkit-mask:linear-gradient(#000 78%,transparent);mask:linear-gradient(#000 78%,transparent)}
/* \u2500\u2500 Templates folder: depth, a big number, cards that fade at the edges \u2500\u2500 */
.folder-body{position:relative;min-height:0;padding-bottom:34px}
.folder-glow{position:absolute;left:50%;top:44%;width:620px;height:420px;margin:-210px 0 0 -310px;border-radius:50%;pointer-events:none;
  background:radial-gradient(closest-side,rgba(255,255,255,.95),rgba(226,236,255,.35) 55%,transparent);filter:blur(10px);animation:fglow 8s ease-in-out infinite}
@keyframes fglow{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.08);opacity:1}}
.folder-num{position:absolute;right:34px;top:6px;font:100 clamp(120px,14vw,200px)/1 var(--font);letter-spacing:-.04em;color:rgba(38,40,39,.05);pointer-events:none;transition:opacity .4s}
.folder-track{-webkit-mask:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent);mask:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent)}
.tcard{transition:transform .7s var(--ease),opacity .5s,box-shadow .4s}
.tcard.on{box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 40px 60px -36px rgba(38,40,39,.55)}
.tcard.on .tcard-cv img{animation:kb 14s ease-in-out infinite alternate}
@keyframes kb{from{transform:scale(1)}to{transform:scale(1.06) translateY(-1.5%)}}
/* Places for compositions to come: a forming orb instead of stripes */
.tcard.soon{opacity:1}
.tcard.soon .tcard-cv{position:relative;display:grid;place-items:center;background:radial-gradient(70% 80% at 50% 40%,#ffffff,#eceeed 60%,#dfe2e1)!important}
.soon-orb{width:26%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 36% 30%,#fff,rgba(255,255,255,.3) 40%,rgba(200,208,214,.35) 75%,rgba(255,255,255,.8));
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.9),0 20px 24px -18px rgba(38,40,39,.4);animation:sorb 4.5s ease-in-out infinite}
@keyframes sorb{0%,100%{transform:translateY(0) scale(.96);opacity:.7}50%{transform:translateY(-6%) scale(1);opacity:1}}
.tcard.soon .tcard-cv::after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.75) 50%,transparent 65%);background-size:250% 100%;animation:shim 3.2s linear infinite}
@keyframes shim{from{background-position:120% 0}to{background-position:-120% 0}}
.soon-lbl{position:absolute;bottom:12px;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.tcard.soon .tcard-t,.tcard.soon .tcard-l{color:var(--muted)}
@media (prefers-reduced-motion:reduce){.folder-glow,.soon-orb,.tcard.soon .tcard-cv::after,.tcard.on .tcard-cv img{animation:none!important}}

/* \u2500\u2500 Text never fades to grey: it stays ink and is wiped in/out by a soft mask \u2500\u2500 */
[data-welcopy],.wel-ctl,[data-qt]{opacity:1!important;
  -webkit-mask:linear-gradient(0deg,#000 calc(var(--wipe,1) * 130% - 30%),transparent calc(var(--wipe,1) * 130%));
  mask:linear-gradient(0deg,#000 calc(var(--wipe,1) * 130% - 30%),transparent calc(var(--wipe,1) * 130%))}
/* The mask only paints inside the box: give it room below so the Let's go button's shadow is not cut flat (owner 2026-11-11) */
[data-welcopy]{padding-bottom:36px;margin-bottom:-36px}
.qt blockquote p,.wel-h{color:#111312}
/* \u2500\u2500 More light, transparency and volume in the glass \u2500\u2500 */
.glass{background:linear-gradient(155deg,rgba(255,255,255,.78) 0%,rgba(255,255,255,.16) 38%,rgba(255,255,255,.08) 62%,rgba(255,255,255,.42) 100%);
  -webkit-backdrop-filter:blur(26px) saturate(1.6) brightness(1.06);backdrop-filter:blur(26px) saturate(1.6) brightness(1.06);
  box-shadow:inset 0 2px 0 #fff,inset 0 0 0 1px rgba(255,255,255,.7),inset 2px 0 0 rgba(255,255,255,.6),
    inset 0 18px 30px -20px rgba(255,255,255,.95),inset 0 -22px 34px -20px rgba(110,118,114,.38),inset -10px 0 24px -18px rgba(110,118,114,.22),
    inset 0 -1.5px 0 rgba(255,255,255,.9),0 2px 3px rgba(38,40,39,.06),0 18px 28px -18px rgba(38,40,39,.28),0 50px 90px -40px rgba(38,40,39,.45)}
.glass:not(.dark)::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;
  background:radial-gradient(120% 60% at 20% -10%,rgba(255,255,255,.7),transparent 55%),linear-gradient(115deg,transparent 40%,rgba(255,255,255,.26) 48%,transparent 56%)}
.lo.r-products::before,.lo.r-templates::before,.lo.r-sound::before{
  background:radial-gradient(40% 36% at 16% 28%,rgba(190,198,210,.7),transparent 70%),radial-gradient(36% 32% at 84% 70%,rgba(200,190,205,.55),transparent 70%),
    radial-gradient(34% 30% at 60% 16%,#fff,transparent 70%),radial-gradient(30% 28% at 40% 86%,rgba(205,215,212,.6),transparent 70%)}
/* Products, Templates, Sound (owner 2026-10-22): bright and clean \u2014 none of the tinted masses above, only the white light */
.lo.r-products::before,.lo.r-templates::before,.lo.r-sound::before{background:radial-gradient(34% 30% at 60% 16%,#fff,transparent 70%)}
:not(.dark)>.gb:not(.primary),.glass:not(.dark) .gb:not(.primary){background:linear-gradient(180deg,rgba(255,255,255,.95),rgba(255,255,255,.35) 55%,rgba(235,238,236,.6));
  box-shadow:inset 0 1.5px 0 #fff,inset 0 -8px 12px -8px rgba(110,118,114,.45),0 0 0 1px rgba(38,40,39,.07),0 10px 18px -10px rgba(38,40,39,.35)}


/* The selector is one whole screen: title, cards, Orb and controls fit together.
   The quotation hands over to it directly, with no blank screen between. */
.qt{height:100vh!important;height:100svh!important}
.sel{--cw:clamp(170px,calc((100svh - 440px) * .75),290px);box-sizing:border-box;min-height:100svh;padding:96px 0 22px!important;justify-content:center}
.sel .sel-t{margin-bottom:18px!important}
.sel .arc{height:calc(var(--cw) * 4.1 / 3 + 48px)!important}
.sel .arc-c{width:var(--cw)!important;margin-left:calc(var(--cw) / -2)!important}
.sel .arc-ctl{margin-top:84px!important}
/* Home scrolls freely and gradually (owner 2026-10-14): no snap, no automatic page turn. */
@media (prefers-reduced-motion:reduce){.lo.r-home{scroll-behavior:auto}}

/* Product cards open on a click anywhere; the title link carries the name for keyboards */
.file[data-href]{cursor:pointer;transition:transform .35s var(--ease),box-shadow .35s}
.file[data-href]:hover{transform:translateY(-3px)}
.file-link{color:inherit;text-decoration:none}.file-link:focus-visible{outline:2px solid var(--ink);outline-offset:3px;border-radius:4px}
.vars .segbar{flex-wrap:wrap;border-radius:22px;max-width:100%;row-gap:4px}.vars .pill{white-space:nowrap}
/* \u2500\u2500 Versions of the HTML products (stage and shop previews share them) \u2500\u2500 */
.v-dark{background:radial-gradient(80% 70% at 50% 40%,#2a2e2c,#111312)!important;color:var(--dark-ink)}
.v-dark .pd-hint,.v-dark .cap-l{color:var(--dark-muted)}
.v-dark .cap,.v-dark .mini-cap{background:linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,.03))!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.14),inset 0 1px 1px rgba(255,255,255,.25),0 24px 40px -26px rgba(0,0,0,.8)!important}
.v-frost .cap,.v-frost .mini-cap{background:linear-gradient(180deg,rgba(255,255,255,.92),rgba(246,247,246,.75))!important;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}
.v-frost .gb:not(.primary){background:linear-gradient(180deg,#fff,rgba(246,247,246,.9))!important;border-radius:14px}
.v-compact .cap{height:64px!important;width:min(320px,64%)!important}
.v-compact .kit{gap:10px;transform:scale(.82)}
.v-dark .gb:not(.primary){color:var(--dark-ink)!important;background:linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,.04))!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12),inset 0 1px 1px rgba(255,255,255,.2)!important}
.v-dark .gb.primary{color:#171A19!important;background:linear-gradient(180deg,#f6f7f5,#dfe2df)!important}
.v-dark .gi{color:var(--dark-ink);background:rgba(0,0,0,.28)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)!important}
.mini-cap{position:absolute;left:50%;top:50%;width:76%;height:30%;transform:translate(-50%,-50%);border-radius:999px;
  background:linear-gradient(180deg,rgba(255,255,255,.6),rgba(255,255,255,.2));box-shadow:inset 0 0 0 1px rgba(255,255,255,.9),inset 0 2px 2px #fff,0 0 0 1px rgba(38,40,39,.06),0 18px 30px -20px rgba(38,40,39,.5)}
.v-compact .mini-cap{height:21%;width:64%}
.mini-cap .cap-l{right:18px;font-size:12px}
.mini-orb{position:absolute;left:5%;top:10%;height:80%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 36% 30%,#fff,rgba(255,255,255,.35) 40%,rgba(200,208,214,.4) 75%,rgba(255,255,255,.85));box-shadow:inset 0 0 0 1px rgba(255,255,255,.9),0 8px 14px -8px rgba(38,40,39,.45)}
.mini-kit{position:absolute;inset:0;display:flex;flex-wrap:wrap;gap:10px;align-content:center;justify-content:center;padding:20px;pointer-events:none}
.mini-kit .gb{pointer-events:none}.mini-kit .gi{display:flex;align-items:center;width:70%;height:34px;padding:0 12px;font-size:13px;color:var(--muted);box-sizing:border-box}
.v-compact .mini-kit{transform:scale(.8)}

/* \u2500\u2500 Selector variant (?sel=grid): four destinations side by side, each showing what is inside \u2500\u2500 */
.sel-grid{--cw:auto}
.dg{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(14px,1.6vw,24px);width:min(1080px,calc(100% - 64px));margin-bottom:96px}
.dg-c{display:flex;flex-direction:column;text-decoration:none;color:var(--ink);transition:transform .45s var(--ease)}
.dg-img{position:relative;display:flex;align-items:center;justify-content:center;aspect-ratio:3/4;max-height:calc(100svh - 400px);border-radius:18px;overflow:hidden;background:radial-gradient(80% 60% at 50% 55%,#fff,#e9eae8);
  box-shadow:0 0 0 1px rgba(38,40,39,.06),0 24px 40px -30px rgba(38,40,39,.5);transition:box-shadow .45s}
.dg-img>img{width:100%;height:100%;object-fit:cover}
.dg-products>img{mix-blend-mode:multiply}
.dg-studio{background:radial-gradient(70% 50% at 50% 50%,#121413,#000 70%)}
.dg-studio>img{width:82%;height:auto;aspect-ratio:1;object-fit:contain;filter:contrast(1.18) brightness(1.06);-webkit-mask:radial-gradient(closest-side,#000 88%,transparent);mask:radial-gradient(closest-side,#000 88%,transparent)}
.dg-studio::after{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(60% 45% at 50% 50%,transparent 55%,rgba(0,0,0,.55))}
.dg-win{width:84%;border-radius:8px;overflow:hidden;background:#fff;box-shadow:0 0 0 1px rgba(38,40,39,.08),0 18px 28px -18px rgba(38,40,39,.5)}
.dg-win i{display:block;height:12px;background:linear-gradient(90deg,#d8dad8 0 6px,transparent 6px 10px,#d8dad8 10px 16px,transparent 16px 20px,#d8dad8 20px 26px,transparent 26px) 8px 50%/40px 6px no-repeat,#f2f3f2}
.dg-win img{display:block;width:100%}
.dg-sound .cv-wave{margin:0;height:16%;width:52%;gap:3px}.dg-sound .cv-wave i{border-radius:3px}
.dg-t{margin-top:16px;font:300 22px/1.1 var(--font);letter-spacing:-.01em}
.dg-s{margin-top:6px;font-size:14px;line-height:1.4;color:var(--muted)}
.dg-c.on{transform:translateY(-6px)}
.dg-c.on .dg-img{box-shadow:0 0 0 1px rgba(38,40,39,.1),0 36px 54px -30px rgba(38,40,39,.6)}
.dg-c:focus-visible{outline:none}.dg-c:focus-visible .dg-img{outline:2px solid var(--ink);outline-offset:4px}
@media (max-width:760px){
  .dg{grid-template-columns:repeat(2,minmax(0,1fr));width:calc(100% - 32px);gap:14px 12px;margin-bottom:80px}
  .dg-img{max-height:none;aspect-ratio:4/5}.dg-t{font-size:18px;margin-top:10px}.dg-s{font-size:13px}
}
@media (prefers-reduced-motion:reduce){.dg-c{transition:none}}

/* \u2500\u2500 Arc selector with glimpse covers: same places and motion, new insides \u2500\u2500 */
.arc .dg-img{max-height:none;width:100%}
.arc-l{display:block;margin-top:14px;font:300 22px/1.1 var(--font);letter-spacing:-.01em}
.arc-l+.arc-s{margin-top:6px!important}
/* Templates glimpse: the page alone, a floating sheet of glass on a soft light */
.dg-templates{background:radial-gradient(70% 55% at 50% 42%,#ffffff 0%,#eef0ee 55%,#dcdfdd 100%)}
.dg-templates::after{content:"";position:absolute;left:18%;right:18%;bottom:20%;height:10%;border-radius:50%;background:radial-gradient(closest-side,rgba(38,40,39,.22),transparent);filter:blur(6px);z-index:0}
.dg-win{position:relative;z-index:1;width:80%;border-radius:12px;overflow:hidden;background:#fff;transform:perspective(900px) rotateX(8deg) translateY(-4%);
  box-shadow:0 0 0 1px rgba(255,255,255,.9),0 0 0 2px rgba(38,40,39,.05),0 30px 40px -24px rgba(38,40,39,.45),0 8px 14px -10px rgba(38,40,39,.25);transition:transform .6s var(--ease)}
.dg-win::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:linear-gradient(155deg,rgba(255,255,255,.55) 0%,rgba(255,255,255,0) 38%);mix-blend-mode:screen}
.dg-win i{display:none}
.on .dg-win,.dg-c:hover .dg-win{transform:perspective(900px) rotateX(3deg) translateY(-6%)}
@media (prefers-reduced-motion:reduce){.dg-win{transition:none}}

/* \u2500\u2500 Every device \u2500\u2500 */
.sel{overflow-x:clip}                                   /* the arc's side panels never widen the page */
.caption{width:max-content;max-width:min(560px,calc(100vw - 48px));box-sizing:border-box}
@media (max-width:640px){
  .caption{bottom:calc(env(safe-area-inset-bottom) + 86px);font-size:13px;line-height:1.4;padding:9px 14px}
  .sel{--cw:clamp(170px,58vw,250px)}
  .arc-l{font-size:19px;margin-top:10px}
}
@media (max-height:560px) and (orientation:landscape){
  .sel{--cw:clamp(130px,calc((100svh - 230px) * .75),220px);padding-top:72px!important}
  .sel .arc-ctl{margin-top:56px!important}
}
/* \u2500\u2500 Products team 2026-10-14: glass kits (live iframe of the copyable file) \u2500\u2500 */
.kit-frame{display:block;width:100%;height:100%;border:0;background:transparent;color-scheme:normal}
.file-v.has-kit{background:none}
.file-v.has-kit .kit-frame{position:absolute;inset:0;pointer-events:none}
.file-v.is-dark .file-ext{background:rgba(255,255,255,.12);color:#cfd3d0}
.pd-stage.has-kit{padding:0;background:none}
.kit-code{max-height:320px;overflow:auto;font-size:11.5px}
.pd-grid>*{min-width:0}
.pd-stage.has-kit{aspect-ratio:auto;height:clamp(460px,64vh,620px)}
@media (max-width:600px){.pd-stage.has-kit{height:540px}}
.pd-stage.has-kit:has([data-kit^="orb-slider"]){height:clamp(320px,44vh,440px)}
/* \u2500\u2500 Template presentation: a floating glass display with a moving glare \u2500\u2500 */
.dev{position:relative;display:block;width:100%;height:100%;perspective:1100px;--rx:4deg;--ry:-6deg}
.dev-body{position:absolute;inset:9% 8% 15%;border-radius:16px;padding:7px;transform-style:preserve-3d;
  background:linear-gradient(160deg,rgba(255,255,255,.95),rgba(232,234,233,.7) 45%,rgba(206,210,208,.85));
  box-shadow:inset 0 1px 0 #fff,inset 0 -2px 4px rgba(120,126,123,.35),0 0 0 1px rgba(38,40,39,.08),0 30px 50px -26px rgba(38,40,39,.55),0 8px 16px -10px rgba(38,40,39,.3);
  transform:rotateX(var(--rx)) rotateY(var(--ry));transition:transform .9s cubic-bezier(.22,1.2,.36,1);animation:dev-float 7s ease-in-out infinite alternate}
.dev-screen{position:relative;display:block;width:100%;height:100%;border-radius:10px;overflow:hidden;background:#e9eae8;box-shadow:inset 0 0 0 1px rgba(38,40,39,.12)}
.dev-screen img{display:block;width:100%;height:100%;object-fit:cover;pointer-events:none;animation:kb 16s ease-in-out infinite alternate}
.dev-glare{position:absolute;inset:7px;border-radius:10px;pointer-events:none;mix-blend-mode:screen;
  background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.55) 44%,rgba(255,255,255,.12) 50%,transparent 62%);background-size:300% 100%;animation:dev-glare 6.5s ease-in-out infinite}
.dev-floor{position:absolute;left:16%;right:16%;bottom:6%;height:7%;border-radius:50%;background:radial-gradient(closest-side,rgba(38,40,39,.3),transparent);filter:blur(2px);animation:dev-shadow 7s ease-in-out infinite alternate}
@keyframes dev-float{from{translate:0 0}to{translate:0 -6px}}
@keyframes dev-shadow{from{transform:scaleX(1);opacity:1}to{transform:scaleX(.9);opacity:.7}}
@keyframes dev-glare{0%{background-position:120% 0}55%,100%{background-position:-60% 0}}
.tcard-cv:has(.dev){background:radial-gradient(80% 70% at 50% 40%,#ffffff,#eceeed 70%,#e1e4e3);box-shadow:inset 0 0 0 1px rgba(255,255,255,.8)}
.tcard.on .tcard-cv img{animation:kb 16s ease-in-out infinite alternate}
.fo-cv{aspect-ratio:16/11;padding:0;border-radius:20px;background:radial-gradient(80% 70% at 50% 40%,#ffffff,#eceeed 70%,#dfe2e1)}
.fo-cv .dev-body{inset:4% 4% 9%}
/* gallery cards (owner 2026-10-28): the preview fills its frame; same 16:10 screen, less empty margin */
.tcard-cv .dev-body{inset:3.5% 3.5% 8%;padding:5px;border-radius:12px}.tcard-cv .dev-screen{border-radius:8px}.tcard-cv .dev-floor{bottom:1.5%;height:5%}
.pd-stage.cover-big{background:radial-gradient(80% 70% at 50% 38%,#ffffff,#eceeed 65%,#dcdfde)}
.pd-stage.cover-big .dev-screen img{height:100%}
@media (prefers-reduced-motion:reduce){.dev-body,.dev-glare,.dev-floor,.dev-screen img{animation:none!important}}
/* Early access: join success, account CTA, membership (account.js, waitlist.js) */
.joined,.joincta{padding:24px;border-radius:20px;max-width:560px;margin:10px 0 24px;display:flex;flex-direction:column;gap:8px}
.joined h2,.joincta h2{margin:0;font:300 24px/1.2 var(--font)}.joined p,.joincta p{margin:0;color:var(--muted)}.joined .kicker{color:var(--ink)}
.joined .acts,.joincta .acts{margin-top:8px}.joined:focus{outline:none}
.ft .joined{flex-basis:100%}
.plan.now{max-width:620px;margin:10px 0 44px}.plan.now .acts{align-items:center}
.plan.soon{opacity:.86}.plans-h{font:300 26px/1.2 var(--font);margin:0}.plans-n{margin:6px 0 20px}
/* Membership with real accounts (account-live.js, Accounts v2.2): the price line, the plan actions, the account forms */
.plan .plan-price{color:var(--ink);font:300 20px/1.3 var(--font)}
.plan-badge{margin:0!important;align-self:flex-start;font:500 10.5px/1 var(--font);letter-spacing:.14em;text-transform:uppercase;padding:6px 10px;border-radius:999px;background:var(--ink);color:var(--bg)!important}
.memb-foot{margin-top:6px}.memb-foot a,.acct-who a{color:var(--ink)}
/* Owner 2026-11-11: no dark focus box while typing, no autofill tint (account forms and the Studio list) */
.sign .gi:focus-visible,.acct .gi:focus-visible,.sl .gi:focus-visible{outline:none;box-shadow:inset 0 0 0 1px rgba(38,40,39,.3)}
html[data-theme=dark] .sign .gi:focus-visible,html[data-theme=dark] .acct .gi:focus-visible,html[data-theme=dark] .sl .gi:focus-visible,.sl-dark .gi:focus-visible{outline:none;box-shadow:inset 0 0 0 1px rgba(255,255,255,.3)}
.gi:-webkit-autofill,.gi:-webkit-autofill:hover,.gi:-webkit-autofill:focus{-webkit-text-fill-color:var(--ink);caret-color:var(--ink);-webkit-box-shadow:0 0 0 1000px #fff inset;transition:background-color 600000s 0s}
html[data-theme=dark] .gi:-webkit-autofill,html[data-theme=dark] .gi:-webkit-autofill:hover,html[data-theme=dark] .gi:-webkit-autofill:focus{-webkit-box-shadow:0 0 0 1000px #151617 inset}
.sl-dark .gi:-webkit-autofill,.sl-dark .gi:-webkit-autofill:hover,.sl-dark .gi:-webkit-autofill:focus{-webkit-text-fill-color:#eceeeb;-webkit-box-shadow:0 0 0 1000px #2a2d2b inset}
/* Password with Show / Hide */
.pw{position:relative;display:block}.pw .gi{width:100%;padding-right:66px;box-sizing:border-box}
.pw-t{position:absolute;right:8px;top:50%;transform:translateY(-50%);border:0;background:none;font:500 12.5px/1 var(--font);color:var(--muted);cursor:pointer;padding:8px;border-radius:8px}.pw-t:hover{color:var(--ink)}
.pw-t:focus-visible{outline:1.5px solid var(--ink);outline-offset:0}
/* The person icon's menu (account-menu.js) */
.acctw{position:relative}.acct-p{width:260px}
.am-t{margin:0;font:500 10.5px/1 var(--font);letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}
.acct-p .gb{width:100%;justify-content:center;text-decoration:none}
.am-who{display:grid;gap:3px;padding-bottom:12px;border-bottom:1px solid var(--line)}.am-who b{font-weight:500;font-size:14.5px;overflow-wrap:anywhere}.am-who small{color:var(--muted);font-size:12.5px;overflow-wrap:anywhere}
.am-plan{display:inline-block;justify-self:start;margin-top:6px;font-size:11.5px;line-height:1;padding:5px 9px;border-radius:999px;box-shadow:inset 0 0 0 1px var(--line);color:var(--ink)}
.am-l{display:block;width:100%;text-align:left;background:none;border:0;padding:8px 8px;margin:0 -8px;font:400 14px/1.2 var(--font);color:var(--ink);text-decoration:none;cursor:pointer;border-radius:10px;box-sizing:content-box}
.am-l:hover,.am-l:focus-visible{background:rgba(38,40,39,.06);outline:none}html[data-theme=dark] .am-l:hover,html[data-theme=dark] .am-l:focus-visible{background:rgba(255,255,255,.07)}
/* Account: folding sections (account-live.js) */
.acct-who{margin:8px 0 0;color:var(--muted);display:flex;gap:10px;align-items:center;flex-wrap:wrap;font-size:14.5px}
.acxs{display:grid;gap:12px;max-width:640px}
.acx{border-radius:18px;background:rgba(255,255,255,.6);box-shadow:0 0 0 1px rgba(38,40,39,.07),0 18px 36px -30px rgba(38,40,39,.35)}
html[data-theme=dark] .acx{background:rgba(255,255,255,.04);box-shadow:0 0 0 1px var(--line)}
.acx summary{list-style:none;cursor:pointer;display:grid;grid-template-columns:1fr auto auto;align-items:center;gap:14px;padding:18px 22px;border-radius:18px}
.acx summary::-webkit-details-marker{display:none}.acx summary:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
.acx-t{font:400 17px/1.2 var(--font);color:var(--ink)}.acx-s{color:var(--muted);font-size:13.5px;text-align:right;overflow-wrap:anywhere}
.acx-i{width:8px;height:8px;border-right:1.5px solid var(--muted);border-bottom:1.5px solid var(--muted);transform:translateY(-3px) rotate(45deg);transition:transform .3s var(--ease)}
.acx[open] .acx-i{transform:translateY(2px) rotate(225deg)}
.acx-b{padding:2px 22px 22px;display:grid;gap:12px}.acx-b p{margin:0}.acx-b>p:not(.note){color:var(--muted)}
.acx-b ul{margin:0;padding-left:18px;line-height:1.7;font-size:14.5px}.acx-b .form{max-width:420px}
.acx-big{font:300 24px/1.2 var(--font);color:var(--ink)!important}.acx-h{font-weight:500;font-size:13.5px;color:var(--ink);margin:10px 0 0!important}
.acx-kv{margin:0;padding-top:0;border-top:0}
/* Waiting ("thinking", owner 2026-11-11): the words shimmer softly, three dots breathe in turn */
.think{display:inline-flex;align-items:baseline;background:linear-gradient(100deg,var(--ink) 0%,var(--ink) 38%,var(--faint) 50%,var(--ink) 62%,var(--ink) 100%);background-size:260% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:think-sh 2.6s linear infinite}
.think-d{display:inline-flex;gap:.14em;margin-left:.12em;-webkit-text-fill-color:initial}
.think-d i{display:block;width:.13em;height:.13em;border-radius:50%;background:var(--ink);opacity:.2;animation:think-b 1.3s ease-in-out infinite}
.think-d i:nth-child(2){animation-delay:.18s}.think-d i:nth-child(3){animation-delay:.36s}
@keyframes think-sh{from{background-position:100% 0}to{background-position:-160% 0}}
@keyframes think-b{0%,80%,100%{opacity:.2;transform:translateY(0)}40%{opacity:1;transform:translateY(-.18em)}}
@media (prefers-reduced-motion:reduce){.think{animation:none;-webkit-text-fill-color:currentColor}.think-d i{animation:none;opacity:.6}}
@media (max-width:560px){.acx summary{grid-template-columns:1fr auto;padding:16px 18px}.acx-s{display:none}.acx-b{padding:2px 18px 18px}}
@media (prefers-reduced-motion:reduce){.acx-i{transition:none}}
.acct-more{margin-top:34px}
.note.contact{margin-top:28px}.note.contact a{color:var(--ink)}
.fl .opt{font-style:normal;color:var(--muted)}
.si-t .note{margin:4px 0 0;font-size:12px}
/* Templates open fast on phones (owner 2026-10-14): the cards sit inside the folder's
   glass, so they need no blur of their own (nested 26px backdrop blurs are what made the
   page slow to appear on iPhone); only the card in front animates. */
.folder-track .tcard.glass{-webkit-backdrop-filter:none;backdrop-filter:none;background:linear-gradient(155deg,rgba(255,255,255,.86),rgba(255,255,255,.5) 45%,rgba(255,255,255,.62))}
.tcard:not(.on) *,.tcard:not(.on)::after,.tcard:not(.on) *::after{animation:none!important}
.arc-c:not(.on) .dg-img *{animation-play-state:paused}
/* Sound, compact (owner 2026-10-14): collapsible groups of dense rows */
.snd-dest .dh{margin-bottom:18px}
.sg{margin:0 0 12px;border-radius:20px}
.sg>summary{list-style:none;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;cursor:pointer;padding:12px 4px 10px;border-bottom:1px solid var(--line)}
.sg>summary::-webkit-details-marker{display:none}
.sg>summary::before{content:"";align-self:center;width:7px;height:7px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:rotate(-45deg);transition:transform .2s;margin:0 4px 0 2px;opacity:.6}
.sg[open]>summary::before{transform:rotate(45deg)}
.sg>summary h2{margin:0;font:400 18px/1.2 var(--font)}
.sg-n{font:500 11px/1 var(--mono);color:var(--muted);padding:4px 7px;border-radius:7px;background:rgba(38,40,39,.06)}
.sg>summary p{margin:0;color:var(--muted);font-size:13px;flex-basis:100%;padding-left:17px}
.sgrid{display:grid!important;grid-template-columns:1fr!important;gap:0!important}
.sgrid .si.si-row{display:grid;grid-template-columns:36px minmax(0,1fr) minmax(90px,180px) 44px auto;grid-template-rows:auto;grid-template-areas:'p t w d x';align-items:center;gap:0 14px;padding:8px 4px;border-bottom:1px solid var(--line);border-radius:0}
.si-row .si-play{grid-area:p}.si-row .si-t{grid-area:t;min-width:0}.sgrid .si-row .si-w{grid-area:w}.sgrid .si-row .si-m{grid-area:d}.sgrid .si-row .si-x{grid-area:x}
.si-row .si-t h3{font-size:14.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.si-row .si-t p{font-size:12.5px;line-height:1.35;margin:1px 0 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.si-row .si-t .note{display:none}
.si-row .si-w{grid-column:auto;height:26px}
.si-row .si-m{grid-column:auto}
.si-row .si-x,.si-row .si-x.eq{grid-column:auto;margin:0;flex-wrap:nowrap;display:flex;gap:6px;justify-content:flex-end}
.si-row .si-x .gb{width:auto}
.si-row:hover{background:rgba(255,255,255,.35)}
@media (max-width:700px){
  .sgrid .si.si-row{grid-template-columns:34px minmax(0,1fr) auto;grid-template-areas:'p t x' 'p w d';gap:4px 10px;padding:8px 0}
  .si-row .si-t p{display:none}
  .sgrid .si-row .si-w{height:20px}
  .sgrid .si-row .si-m{justify-content:flex-end}
  .si-row .si-x [data-save],.si-row .si-x .gb:not([data-use]){display:none}
  .si-row .si-t .file-ext{margin-left:6px;font-size:10px}
}
/* Products view toggle: Large cards or a compact grid */
.dh.dh-row{display:flex;align-items:center;justify-content:space-between;gap:16px;max-width:none;flex-wrap:wrap}
.view-tg .pill{height:32px;padding:0 14px;font-size:13px}
.file-grid.is-compact{grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:14px}
.file-grid.is-compact .file{padding:8px 8px 10px;border-radius:20px;cursor:pointer}
.file-grid.is-compact .file-v{border-radius:14px}
.file-grid.is-compact .file-ext{display:none}
.file-grid.is-compact .file-m{padding:8px 4px 0}
.file-grid.is-compact .file-m h3{font-size:14.5px;text-wrap:balance;overflow-wrap:anywhere}
.file-grid.is-compact .file-m p,.file-grid.is-compact .file-a{display:none}
@media (max-width:700px){.file-grid.is-compact{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}}
/* Proposal 2026-10-23: category filter, category line, Objects cards */
.shop-cats{margin:-4px 0 22px}
.shop-cats .segbar{max-width:100%;overflow-x:auto;scrollbar-width:none;flex-wrap:nowrap}
.shop-cats .segbar::-webkit-scrollbar{display:none}
.shop-cats .pill{white-space:nowrap;height:32px;padding:0 14px;font-size:13px}
.shop-cats .pill .n{margin-left:6px;font-size:11px;color:var(--muted)}
.file-grid .file[hidden]{display:none}
.file-m .file-c{margin:2px 0 0;font-size:12px;color:var(--muted)}
button.file-link{font:inherit;color:inherit;background:none;border:0;padding:0;cursor:pointer;text-align:left}
.file-a.obj-a{grid-template-columns:repeat(2,minmax(0,1fr))}
.file-grid.is-compact .file-m .file-c{display:block;margin-top:1px;font-size:11.5px}
.file-grid.is-compact .file-tag{display:none}
@media (max-width:700px){.shop-cats{margin:0 -16px 16px;padding:0 16px}.shop-cats .segbar{display:flex}.shop-cats .pill{height:36px}}
/* Gallery cards: the frosted look is baked in instead of blurring the animated surface behind 36 cards
   every frame (measured: 11 \u2192 27 fps on desktop). Same glass gradient over a pre-frosted base. */
.file-grid .file.glass{-webkit-backdrop-filter:none;backdrop-filter:none;background:linear-gradient(155deg,rgba(255,255,255,.78) 0%,rgba(255,255,255,.16) 38%,rgba(255,255,255,.08) 62%,rgba(255,255,255,.42) 100%),rgba(246,246,245,.74)}
@media (max-width:359px){.file-grid.is-compact{grid-template-columns:1fr;gap:8px}.file-grid.is-compact .file{flex-direction:row;align-items:center;gap:12px;padding:8px}.file-grid.is-compact .file-v{width:112px;flex:none;aspect-ratio:1}.file-grid.is-compact .file-m{padding:0;min-width:0}.file-grid.is-compact .file{min-width:0;max-width:100%}}
/* Review fixes 2026-10-19: templates show only the front card's words (side cards
   peeked out as cut fragments); phones keep the welcome controls on one line, the tabs
   off the edge, and footer links big enough to tap. */
.tcard .tcard-t,.tcard .tcard-l,.tcard .tcard-n{transition:opacity .4s}
.tcard:not(.on) .tcard-t,.tcard:not(.on) .tcard-l,.tcard:not(.on) .tcard-n{opacity:0}
@media (max-width:640px){
  .wel-ctl{width:max-content}
  .nav{padding:0 2px}
  .ft nav a{display:inline-block;padding:10px 2px}
}

/* Sector collections (2026-11-09): the Products grid for complete websites, titled in relief. */
.sector-h{align-items:flex-end;margin-bottom:34px}
.sector-h .kicker{margin:0 0 6px}.sector-line{margin:0;max-width:30em;color:var(--muted)}
.dh h1.relief{text-decoration:none;margin:0 -.04em 0 auto;font:200 clamp(52px,8vw,128px)/.86 var(--font);letter-spacing:.16em;user-select:none;
  color:color-mix(in srgb,var(--bg) 95%,#000);
  text-shadow:-1px -1px 0 rgba(255,255,255,.9),1px 1px 0 rgba(40,42,41,.1),0 12px 28px rgba(40,42,41,.05)}
html[data-theme=dark] .dh h1.relief{color:color-mix(in srgb,var(--bg) 90%,#fff);text-shadow:-1px -1px 0 rgba(255,255,255,.08),1px 1px 0 rgba(0,0,0,.75),0 12px 28px rgba(0,0,0,.4)}
.sector-grid{grid-template-columns:repeat(auto-fill,minmax(min(100%,340px),1fr))}
.sector-grid .file-v{aspect-ratio:16/10}.site-v img{width:100%;height:100%;object-fit:cover;object-position:50% 40%;display:block;filter:none;transition:transform .8s cubic-bezier(.2,.7,.2,1)}
.sector-grid .file:hover .site-v img{transform:scale(1.03)}
.sector-more{margin-top:28px}
@media (max-width:700px){.sector-h{flex-direction:column-reverse;align-items:stretch}.dh h1.relief{font-size:clamp(56px,20vw,96px);text-align:right;margin-left:0}}
@media (prefers-reduced-motion:reduce){.site-v img{transition:none}}
/* Text fields (owner 2026-11-10): on focus no square outline \u2014 the capsule's own thin border turns dark. */
.gi:focus,.gi:focus-visible{outline:none!important;box-shadow:inset 0 0 0 1.5px var(--ink)!important}
html[data-theme=dark] .gi:focus,html[data-theme=dark] .gi:focus-visible,.dark .gi:focus,.dark .gi:focus-visible,.v-dark .gi:focus{box-shadow:inset 0 0 0 1.5px #ecebe8!important}
.gi[aria-invalid]:focus,.gi[aria-invalid]:focus-visible{box-shadow:inset 0 0 0 1.5px #9b4a3f!important}
/* Touch screens wider than phones (tablets, phones in landscape): comfortable targets for the wordmark and back links. */
@media (pointer:coarse){.hd .wm{min-height:44px}.tl,.back.tl{min-height:44px;display:inline-flex;align-items:center}.wel-offer a{min-height:44px;display:inline-flex;align-items:center}}
/* Very narrow phones (folded screens, 280 px): footer form, facts and account tabs stay inside the screen. */
@media (max-width:320px){.ft .wl-c,.ft .wl-c .fl,.ft .wl-c .wl-row,.ft .wl-c .gi{min-width:0;max-width:100%;box-sizing:border-box}
  .facts,.facts.ds-facts{grid-template-columns:minmax(0,1fr)!important}.facts dd{margin:0 0 6px;min-width:0;overflow-wrap:anywhere}
  .acct-tabs{flex-wrap:wrap;row-gap:6px}}
/* Product page (owner 2026-11-10): on wide screens the viewer stays in view beside the details while they are read. */
@media (min-width:901px){.pd-grid>.pd-stage{position:sticky;top:104px;max-height:calc(100vh - 128px)}.pd-grid>.tpd-stage{position:sticky;top:104px}}
.tcard .tcard-tag-under{margin:6px 0 2px}
/* No zoom on touch screens (owner 2026-11-10): fields at 16 px so Safari never zooms in on focus; no double-tap zoom. */
html{touch-action:manipulation;-webkit-text-size-adjust:100%;text-size-adjust:100%}
@media (pointer:coarse){input,select,textarea,.gi{font-size:16px!important}}
/* While a cover is still arriving: a soft moving sheen instead of a flat grey box (the image paints over it). */
.dev-screen,.site-v{background:linear-gradient(110deg,#e6e7e5 30%,#f3f4f2 50%,#e6e7e5 70%) 0 0/250% 100%}
@media (prefers-reduced-motion:no-preference){.dev-screen,.site-v{animation:lo-sheen 1.6s linear 6}@keyframes lo-sheen{to{background-position:-150% 0}}}
html[data-theme=dark] .dev-screen,html[data-theme=dark] .site-v{background-image:linear-gradient(110deg,#1b1c1b 30%,#262726 50%,#1b1c1b 70%)}
[data-tcover].is-loading{position:relative}
[data-tcover].is-loading::after{content:"Loading live preview\u2026";position:absolute;left:50%;bottom:18px;transform:translateX(-50%);z-index:5;padding:9px 16px;border-radius:999px;font:400 13px/1 var(--font);color:var(--ink);white-space:nowrap;
  background:color-mix(in srgb,var(--bg,#f3f3f1) 82%,transparent);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 0 0 1px var(--line),0 10px 24px -14px rgba(0,0,0,.4)}
@media (prefers-reduced-motion:no-preference){[data-tcover].is-loading::after{animation:lo-pulse 1.4s ease-in-out infinite}@keyframes lo-pulse{50%{opacity:.55}}}
/* Solid fixed header everywhere (owner 2026-11-10): the whole bar \u2014 wordmark, controls and menu row \u2014 has one
   background in each theme, so the page never shows through or overlaps it while scrolling. */
.hd::before{background:rgba(243,243,241,.98)!important;-webkit-mask:none!important;mask:none!important;box-shadow:0 1px 0 rgba(38,40,39,.08)}
html[data-theme=dark] .hd::before{background:rgba(7,7,8,.98)!important;box-shadow:0 1px 0 rgba(255,255,255,.07)}
body[data-route=studio] .hd::before{background:rgba(23,26,25,.98)!important}
@media (max-width:900px){.hd{height:auto!important}}
.dest,.pd{padding-top:calc(var(--hd-h,84px) + clamp(36px,4vw,48px))!important}
@media (max-width:900px){.ab.nt,.ss{padding-top:calc(var(--hd-h,84px) + 36px)!important}}
/* "Soon" (owner 2026-11-10): just the word, no capsule; it drops in from above, rests, and leaves downward, on a loop. */
.hd .nav .nav-soon{position:relative;display:inline-block;overflow:hidden;vertical-align:4px;margin-left:6px;padding:0;height:1.25em;border-radius:0;box-shadow:none!important;background:none!important;opacity:1!important;
  font:600 9px/1.25 var(--font);letter-spacing:.14em;text-transform:uppercase;color:currentColor}
.hd .nav .nav-soon i{display:block;font-style:normal;opacity:.85}
@media (prefers-reduced-motion:no-preference){.hd .nav .nav-soon i{animation:soon-drop 3.6s cubic-bezier(.65,0,.35,1) infinite}
  @keyframes soon-drop{0%{transform:translateY(-110%);opacity:0}14%,70%{transform:none;opacity:.85}86%,100%{transform:translateY(110%);opacity:0}}}
@media (max-width:520px){.hd .nav a[data-nav=studio]{position:relative}
  .hd .nav a[data-nav=studio] .nav-soon{position:absolute;top:0;left:50%;right:auto;margin:0;padding:0;transform:translateX(-50%);font-size:8px}}
/* Header on every width (2026-11-10): menu labels never break inside; from 641 to 900 px the menu takes its own
   row under the wordmark and controls, as it already does on phones. */
.nav a{white-space:nowrap}
/* Very narrow windows (side panes, small phones): smaller controls, the menu scrolls sideways instead of overflowing. */
@media (max-width:360px){
  .hd .wm{font-size:17px}
  .hd-r{gap:6px}.hd-r .gb{width:38px;height:38px;min-width:38px;min-height:38px}
  .hd .nav{overflow-x:auto;scrollbar-width:none;justify-content:flex-start;-webkit-mask:linear-gradient(90deg,#000 88%,transparent);mask:linear-gradient(90deg,#000 88%,transparent)}
  .hd .nav::-webkit-scrollbar{display:none}
}
@media (max-width:420px){.tcard-t{font-size:20px;overflow-wrap:anywhere}}
@media (max-width:300px){.hd{gap:4px 8px}.hd .wm{font-size:15px}.hd-r{gap:4px}.hd-r .gb{width:32px;height:32px;min-width:32px;min-height:32px}}
@media (min-width:641px) and (max-width:900px){
  .hd{height:auto;flex-wrap:wrap;gap:2px 16px;padding:12px clamp(16px,3.2vw,44px) 6px}
  .nav{order:3;width:100%;justify-content:space-between;margin:0 -12px}
  .dest,.pd{padding-top:132px}
}

/* 2026-11-12 owner: template stage in our glass frame (not a white slab); play to scroll the real site in place */
.tpd-glass{padding:clamp(12px,1.6vw,22px);border-radius:30px}
.tpd-glass .pd-stage.cover-big,html[data-theme=dark] .tpd-glass .pd-stage.cover-big{background:#fff!important;box-shadow:none!important;border-radius:18px}
.tpd-glass .tpd-live{position:relative;z-index:1}
.tpd-glass .tpd-frame{border-radius:18px}
.tpd-play{position:absolute;left:50%;bottom:clamp(14px,4%,28px);transform:translateX(-50%);z-index:3;display:inline-flex;align-items:center;gap:8px}
.tpd-play svg{width:14px;height:14px}
.pd-stage.is-loading .tpd-play{opacity:.5;pointer-events:none}
/* Price: large and next to the actions \u2014 figure on one side, buttons on the other */
.buy{display:flex;align-items:center;justify-content:space-between;gap:14px 20px;flex-wrap:wrap;margin:22px 0 6px;padding:16px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.buy .acts{margin:0}
.price-big{margin:0;display:flex;align-items:baseline;flex-wrap:wrap;gap:4px 12px;color:var(--ink)}
.price-big b{font:300 clamp(34px,3.2vw,46px)/1 var(--font);letter-spacing:-.02em}
.price-big s{font:400 17px/1 var(--font);color:var(--muted)}
.price-tag{font:500 11px/1 var(--font);letter-spacing:.14em;text-transform:uppercase;color:#a50d2f}
html[data-theme=dark] .price-tag{color:#a50d2f}
.buy-note{margin:4px 0 0}
@media (max-width:520px){.buy{flex-direction:column;align-items:stretch}.buy .acts{width:100%}}

/* 2026-11-12 owner: every product is an individual piece, so every product tile shares one background, in light and dark */
:root{--prod-bg:radial-gradient(80% 70% at 50% 40%,#fbfbfa,#e3e5e4 70%,#d6d8d7)}
.file-v,.file-v.has-obj,.file-v.has-kit,html[data-theme=dark] .file-v,:root[data-theme=dark] .file-v.has-obj,html[data-theme=dark] .file-v.has-kit{background:var(--prod-bg)!important}
/* 2026-11-12 owner: product stages on the same light background as the tiles, for contrast with the glass (trial) */
html[data-theme=dark] .pd-stage:not(.cover-big):not(.has-kit),html[data-theme=dark] .pd-stage.glass:not(.cover-big):not(.has-kit){background:var(--prod-bg)!important}

/* 2026-11-12 owner: the microphone on product stages in the house red */
html .gb.gc.bloom-mic,html[data-theme] .gb.gc.bloom-mic,html .gb.lv-mic-b,html[data-theme] .gb.lv-mic-b{background-image:none!important;background-color:#a50d2f!important;color:#fff!important;box-shadow:0 8px 20px -10px rgba(165,13,47,.7),inset 0 1px 0 rgba(255,255,255,.25)!important}
.gb.bloom-mic::before,.gb.bloom-mic::after,.gb.lv-mic-b::before,.gb.lv-mic-b::after{opacity:.25}
.gb.bloom-mic svg,.gb.lv-mic-b svg{stroke:#fff;color:#fff}
.gb.bloom-mic[aria-pressed=true],.gb.lv-mic-b[aria-pressed=true]{background:#7d0a23!important}
/* Fine sliders for product controls (owner 2026-11-12): a hairline that fills in Studio granate up to a thin tick */
.obj-ctl input[type=range]{-webkit-appearance:none;appearance:none;height:20px;background:transparent;--p:50%}
.obj-ctl input[type=range]::-webkit-slider-runnable-track{height:2px;border-radius:2px;background:linear-gradient(90deg,#a50d2f var(--p),color-mix(in srgb,currentColor 24%,transparent) var(--p))}
.obj-ctl input[type=range]::-moz-range-track{height:2px;border-radius:2px;background:color-mix(in srgb,currentColor 24%,transparent)}
.obj-ctl input[type=range]::-moz-range-progress{height:2px;border-radius:2px;background:#a50d2f}
.obj-ctl input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:3px;height:14px;margin-top:-6px;border-radius:2px;border:0;background:#a50d2f;box-shadow:none}
.obj-ctl input[type=range]::-moz-range-thumb{width:3px;height:14px;border-radius:2px;border:0;background:#a50d2f;box-shadow:none}
.obj-ctl output{color:#a50d2f!important;font-size:12px}
.pd-info [data-export]{margin-top:28px}
.obj-pstage{aspect-ratio:1}.obj-pstage .obj-hint{position:absolute;left:0;right:0;bottom:16px;z-index:2;text-align:center;font-size:12px;color:#7a7c7b;pointer-events:none}
.pd-info .obj-custom{margin:22px 0 0;display:grid;gap:6px}.pd-info .obj-custom .lbl{margin:0 0 4px}
`;var An=`
:root{
  --ix-ack:90ms; --ix-settle:240ms; --ix-slide:280ms; --ix-press:120ms; --ix-relax:340ms;
  --ix-out:cubic-bezier(.2,.8,.2,1); --ix-in-out:cubic-bezier(.45,0,.2,1);
}
/* \u2500\u2500 Sliding selection: ONE glass indicator. It rests under the committed option, travels to
   the option under the pointer or keyboard focus, and returns when the preview ends. The
   pills themselves never paint a body (the html[...] selector outranks the dark theme's
   !important pill glass, which otherwise left a second highlight under the old option). \u2500\u2500 */
.segbar.ix-seg{position:relative;isolation:isolate}
.segbar.ix-seg>.pill{position:relative;z-index:2}
html .segbar.ix-seg.ix-seg>.pill.pill{background:none!important;box-shadow:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;
  transition:color var(--ix-ack) linear}
.ix-sel,.ix-hov{position:absolute;left:0;top:0;z-index:1;pointer-events:none;border-radius:999px;transform-origin:0 50%;will-change:transform,width}
/* committed: the clear capsule the old active pill used, so "applied" still reads at rest */
.ix-sel{background:linear-gradient(180deg,rgba(255,255,255,.78) 0%,rgba(255,255,255,.22) 52%,rgba(255,255,255,.52) 100%);
  box-shadow:inset 0 1px .5px rgba(255,255,255,1),inset 0 -1.5px 1.5px rgba(255,255,255,.8),inset 0 0 0 .5px rgba(255,255,255,.7),inset 0 -5px 6px -5px rgba(96,104,100,.35),
    0 0 0 .5px rgba(38,40,39,.12),0 1px 1px rgba(38,40,39,.1),0 6px 12px -8px rgba(38,40,39,.45)}
/* specular that sits where the pointer is on the committed glass */
.ix-sel::after{content:"";position:absolute;inset:0;border-radius:inherit;opacity:calc(.35 + var(--ix-on,0) * .65);
  background:radial-gradient(60% 120% at calc(var(--ix-sx,.4) * 100%) 0%,rgba(255,255,255,.95),rgba(255,255,255,0) 70%);transition:opacity var(--ix-settle) var(--ix-out)}
/* preview: a thinner film \u2014 rim only, almost no body \u2014 so it never reads as applied */
.ix-hov{opacity:0;background:linear-gradient(180deg,rgba(255,255,255,.34),rgba(255,255,255,.04) 60%,rgba(255,255,255,.16));
  box-shadow:inset 0 .5px 0 rgba(255,255,255,.95),inset 0 0 0 .5px rgba(255,255,255,.55),0 0 0 .5px rgba(38,40,39,.07);
  transition:opacity var(--ix-relax) var(--ix-out)}
.ix-hov.on{opacity:1;transition:opacity var(--ix-ack) linear}
.ix-hov::after{content:"";position:absolute;inset:0;border-radius:inherit;
  background:radial-gradient(40% 140% at calc(var(--ix-hx,.5) * 100%) 0%,rgba(255,255,255,.85),rgba(255,255,255,0) 72%)}
.segbar.ix-seg>.pill:hover,.segbar.ix-seg>.pill.ix-cand{color:var(--ink)}
.segbar.ix-seg>.pill[aria-checked=true],.segbar.ix-seg>.pill[aria-pressed=true],.segbar.ix-seg>.pill[aria-selected=true]{font-weight:500}
.segbar.ix-seg>.pill:active{transform:scale(.97);transition:transform var(--ix-press) var(--ix-out)}
.dark .ix-sel,html[data-theme=dark] .ix-sel{background:linear-gradient(180deg,rgba(255,255,255,.2),rgba(255,255,255,.06) 55%,rgba(255,255,255,.12));
  box-shadow:inset 0 1px .5px rgba(255,255,255,.35),inset 0 0 0 .5px rgba(255,255,255,.14),0 6px 14px -8px rgba(0,0,0,.8)}
.dark .ix-sel::after,html[data-theme=dark] .ix-sel::after{opacity:calc(.12 + var(--ix-on,0) * .3)}
.dark .ix-hov,html[data-theme=dark] .ix-hov{background:rgba(255,255,255,.05);box-shadow:inset 0 .5px 0 rgba(255,255,255,.3),inset 0 0 0 .5px rgba(255,255,255,.12)}
.dark .ix-hov::after,html[data-theme=dark] .ix-hov::after{opacity:.25}
.dark .segbar.ix-seg>.pill:hover,.dark .segbar.ix-seg>.pill.ix-cand,html[data-theme=dark] .segbar.ix-seg>.pill:hover{color:var(--dark-ink)}

/* Buttons (.gb): no layer here. Creative Experience V2 (glass-v2.css.js, bindGlass) owns the
   button material and its pointer-following specular; a second reflection would compete. */

/* \u2500\u2500 Product cards: a sheen and a lit edge that follow the pointer; the object stays the hero.
   Material profiles change only radius, softness and strength (one system, small accents). \u2500\u2500 */
.ix-sheen{position:absolute;inset:0;z-index:3;border-radius:inherit;pointer-events:none;opacity:var(--ix-on,0);
  --r:calc(var(--ix-r,46%) * (1 - var(--ix-p,0) * .3));--k:var(--ix-k,.55);
  /* a breath of light on the card body near the pointer, kept off the object (masked to the edges) */
  background:radial-gradient(calc(var(--r) + 30%) calc(var(--r) + 30%) at calc(var(--ix-x,.5) * 100%) calc(var(--ix-y,.4) * 100%),rgba(255,255,255,calc(var(--k) * .9)),rgba(255,255,255,0) 70%);
  -webkit-mask:radial-gradient(closest-side at 50% 34%,transparent 82%,#000 100%);mask:radial-gradient(closest-side at 50% 34%,transparent 82%,#000 100%)}
/* the edge: a thin rim lit near the pointer \u2014 bright face, a darker refracted line just inside, so it reads on a light page */
.ix-sheen::before{content:"";position:absolute;inset:0;border-radius:inherit;padding:1.5px;
  background:radial-gradient(calc(var(--r) + 70%) calc(var(--r) + 70%) at calc(var(--ix-x,.5) * 100%) calc(var(--ix-y,.4) * 100%),rgba(38,40,39,calc(.2 + var(--k) * .2 + var(--ix-p,0) * .12)) 25%,rgba(38,40,39,calc(.04 + var(--k) * .05)) 65%,rgba(38,40,39,0) 100%);
  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}
/* the card's hover lift belongs to the gallery / system.css; V3 adds light only */
.file[data-ix-mat=gel] .ix-sheen{--ix-r:62%;--ix-k:.5}      /* soft, organic, wide */
.file[data-ix-mat=glass] .ix-sheen{--ix-r:32%;--ix-k:.75}   /* crisp, small, bright */
.file[data-ix-mat=chrome] .ix-sheen{--ix-r:26%;--ix-k:.85}  /* tight, directional */
.file[data-ix-mat=type] .ix-sheen{--ix-r:40%;--ix-k:.5}
.file[data-ix-mat=control] .ix-sheen{--ix-r:30%;--ix-k:.6}
.dark .ix-sheen,html[data-theme=dark] .ix-sheen{background:none}   /* on smoke a body glow reads as fog: rim only */
.dark .ix-sheen::before,html[data-theme=dark] .ix-sheen::before{background:radial-gradient(calc(var(--r) + 70%) calc(var(--r) + 70%) at calc(var(--ix-x,.5) * 100%) calc(var(--ix-y,.4) * 100%),rgba(255,255,255,.34) 25%,rgba(255,255,255,0) 100%)}

@media (hover:none){.ix-hov,.ix-sheen{display:none}}
/* touch: the pills stay visually compact, but each one answers to a taller finger target that
   reaches into the bar's own padding (36px pill + 4px + 4px = 44px), so nothing overlaps */
@media (pointer:coarse){.segbar.ix-seg>.pill::after{content:"";position:absolute;left:0;right:0;top:-4px;bottom:-4px}}
@media (prefers-reduced-motion:reduce){
  .ix-sel,.ix-hov,.ix-sheen{transition:none!important}
}
`;var Cn=matchMedia("(prefers-reduced-motion: reduce)"),dd={gel:"gel",lens:"glass",type:"type",mag:"control"},cd={gel:7,glass:16,chrome:18,type:12,control:20,base:13},pd=e=>dd[e.dataset.objCard]??(e.querySelector(".has-kit")?"control":e.querySelector("[data-sphere]")?/chrome|liquid|mirror/i.test(e.querySelector("[data-sphere]").dataset.sphere)?"chrome":"glass":"base");function jn(e=document){let a=document.createElement("style");a.dataset.ix="",a.textContent=An,document.head.append(a);let o=new Map,t=new Set,d=0,p=0,i=()=>{d||(p=performance.now(),d=requestAnimationFrame(T))},l=420,c=2*Math.sqrt(l),f=(u,O)=>{let W=l*(u.t-u.x)-c*u.v;return u.v+=W*O,u.x+=u.v*O,Math.abs(u.t-u.x)<.2&&Math.abs(u.v)<4&&(u.x=u.t,u.v=0),u.x!==u.t||u.v!==0},h=u=>({x:u,v:0,t:u}),b=u=>[...u.children].filter(O=>O.classList?.contains("pill")),$=u=>["aria-checked","aria-pressed","aria-selected"].some(O=>u.getAttribute(O)==="true")||u.classList.contains("on"),K=u=>({x:u.offsetLeft,w:u.offsetWidth,y:u.offsetTop,h:u.offsetHeight});function s(u,O,W){let D=Math.min(.07,Math.abs(O.x.v)/9e3);u.style.transform=`translate3d(${O.x.x}px,${W.y}px,0) scaleY(${1-D})`,u.style.width=`${Math.max(8,O.w.x)}px`,u.style.height=`${W.h}px`}function M(u){if(o.has(u)||!b(u).length)return;let O=document.createElement("span");O.className="ix-sel",O.setAttribute("aria-hidden","true"),u.prepend(O),u.classList.add("ix-seg");let W={bar:u,sel:O,S:{x:h(0),w:h(0)},cand:null,act:null,box:{y:0,h:0},shown:!1};W.mo=new MutationObserver(()=>A(W,!0)),W.mo.observe(u,{attributes:!0,subtree:!0,attributeFilter:["aria-checked","aria-pressed","aria-selected"]}),W.ro=new ResizeObserver(()=>A(W,!1)),W.ro.observe(u),o.set(u,W),A(W,!1)}function A(u,O){u.act=b(u.bar).find($)??null,P(u,u.cand??u.act,O)}function P(u,O,W){if(u.sel.style.opacity=O?"":"0",!O)return;let D=K(O);u.box=D,u.S.x.t=D.x,u.S.w.t=D.w,!W||Cn.matches||!u.shown?(u.S.x.x=D.x,u.S.w.x=D.w,u.S.x.v=u.S.w.v=0,s(u.sel,u.S,D),u.shown=!0):(t.add(u),i())}function F(u,O){u&&(u.cand?.classList.remove("ix-cand"),u.cand=O,O?.classList.add("ix-cand"),P(u,O??u.act,!0))}let I=new Map;function B(u,O){let W=I.get(u);return W||(W={x:.5,y:.4,on:0,p:0,tx:.5,ty:.4,ton:0,tp:0,follow:O},I.set(u,W)),W.rect=u.getBoundingClientRect(),W}function N(u,O,W){u.rect||(u.rect=W.getBoundingClientRect()),u.still=!1,u.tx=Math.min(1,Math.max(0,(O.clientX-u.rect.left)/u.rect.width)),u.ty=Math.min(1,Math.max(0,(O.clientY-u.rect.top)/u.rect.height))}function X(u){if(u.querySelector(":scope>.ix-sheen"))return;let O=document.createElement("span");O.className="ix-sheen",O.setAttribute("aria-hidden","true"),u.append(O),u.classList.add("ix-card"),u.dataset.ixMat=pd(u)}function T(u){let O=Math.min(.05,(u-p)/1e3);p=u;for(let D of t){let R=f(D.S.x,O)|f(D.S.w,O);s(D.sel,D.S,D.box),R||t.delete(D)}let W=!1;for(let[D,R]of I){if(R.still)continue;let ce=Cn.matches?1:1-Math.exp(-R.follow*O),ze=1-Math.exp(-(R.ton>R.on?14:7)*O);R.x+=(R.tx-R.x)*ce,R.y+=(R.ty-R.y)*ce,R.on+=(R.ton-R.on)*ze,R.p+=(R.tp-R.p)*(1-Math.exp(-(R.tp>R.p?18:5)*O));let Me=Math.abs(R.tx-R.x)<.002&&Math.abs(R.ty-R.y)<.002&&Math.abs(R.ton-R.on)<.01&&Math.abs(R.tp-R.p)<.01;Me&&(R.x=R.tx,R.y=R.ty,R.on=R.ton,R.p=R.tp),D.style.setProperty("--ix-x",R.x.toFixed(4)),D.style.setProperty("--ix-y",R.y.toFixed(4)),D.style.setProperty("--ix-on",R.on.toFixed(3)),D.style.setProperty("--ix-p",R.p.toFixed(3)),Me&&R.ton===0&&R.tp===0?(D.style.removeProperty("--ix-on"),D.style.removeProperty("--ix-p"),I.delete(D)):Me&&!D.isConnected?I.delete(D):Me?R.still=!0:W=!0}d=t.size||W?requestAnimationFrame(T):0}let E=u=>{let O=u.target.closest?.(".ix-seg>.pill");return O?[o.get(O.parentElement),O]:[null,null]},C=u=>{if(u.pointerType!=="mouse"&&u.pointerType!=="pen")return;let O=u.target.closest?.(".segbar");O&&!o.has(O)&&M(O);let[W,D]=E(u);W&&D!==W.cand&&F(W,D);let R=u.target.closest?.(".file");if(R){X(R);let ce=B(R,cd[R.dataset.ixMat]??13);ce.ton=1,N(ce,u,R),i()}},_=u=>{let O=u.relatedTarget,W=u.target.closest?.(".ix-seg");if(W&&!W.contains(O)){let R=o.get(W);F(R,null)}let D=u.target.closest?.(".file");if(D&&!D.contains(O)){let R=I.get(D);R&&(R.ton=0,R.tp=0,R.still=!1,i())}},w=u=>{if(u.pointerType!=="mouse"&&u.pointerType!=="pen")return;let O=u.target.closest?.(".file");if(O){let D=I.get(O);D&&(N(D,u,O),i())}let W=u.target.closest?.(".ix-seg");if(W){let D=o.get(W);D.left||(D.left=W.getBoundingClientRect().left-W.scrollLeft);let R=u.clientX-D.left;D.sel.style.setProperty("--ix-sx",((R-D.S.x.x)/Math.max(1,D.S.w.x)).toFixed(3)),D.sel.style.setProperty("--ix-on","1")}},q=u=>{let O=u.target.closest?.(".file");if(O&&u.target.closest(".file-v")){let W=I.get(O)??B(O,13);W.tp=1,u.pointerType==="mouse"&&(W.ton=1),N(W,u,O),i()}},V=()=>{for(let u of I.values())u.tp&&(u.tp=0,u.still=!1);I.size&&i()},ae=u=>{let O=u.target.closest?.(".ix-seg");if(O&&!O.contains(u.relatedTarget)){let W=o.get(O);W&&(W.left=0,W.sel.style.removeProperty("--ix-on"))}},re=u=>{let O=u.target.closest?.(".segbar");if(!O)return;M(O);let W=o.get(O);u.target.matches(":focus-visible")&&u.target.classList.contains("pill")&&F(W,u.target)},ne=u=>{let O=u.target.closest?.(".ix-seg");O&&!O.contains(u.relatedTarget)&&F(o.get(O),null)};e.addEventListener("pointerover",C,{passive:!0}),e.addEventListener("pointerout",_,{passive:!0}),e.addEventListener("pointerout",ae,{passive:!0}),e.addEventListener("pointermove",w,{passive:!0}),e.addEventListener("pointerdown",q,{passive:!0}),addEventListener("pointerup",V,{passive:!0}),addEventListener("pointercancel",V,{passive:!0}),e.addEventListener("focusin",re),e.addEventListener("focusout",ne);let de=()=>{for(let u of I.values())u.rect=null;for(let u of o.values())u.left=0};addEventListener("scroll",de,{passive:!0,capture:!0});let ke=0,$e=()=>{ke=0;for(let[u,O]of o)u.isConnected||(O.mo.disconnect(),O.ro.disconnect(),O.cand=null,t.delete(O),o.delete(u));document.querySelectorAll(".segbar:not(.ix-seg)").forEach(M),document.querySelectorAll(".file:not(.ix-card)").forEach(X)},H=new MutationObserver(()=>{ke||(ke=requestAnimationFrame($e))});return H.observe(document.body,{childList:!0,subtree:!0}),$e(),{dispose(){H.disconnect(),cancelAnimationFrame(d);for(let u of o.values())u.mo.disconnect(),u.ro.disconnect();o.clear(),I.clear(),t.clear(),a.remove(),e.removeEventListener("pointerover",C),e.removeEventListener("pointerout",_),e.removeEventListener("pointerout",ae),e.removeEventListener("pointermove",w),e.removeEventListener("pointerdown",q),removeEventListener("pointerup",V),removeEventListener("pointercancel",V),e.removeEventListener("focusin",re),e.removeEventListener("focusout",ne),removeEventListener("scroll",de,!0)}}}var Y="html[data-theme=dark]",zn=`
${Y}{
  --bg:#070708; --surface:#101112; --surface-2:#18191A; --ink:#ECEDEA; --muted:#9A9E9B; --faint:#929693; --line:rgba(236,237,234,.1);
  --greige:#5A5752; --champagne:#E6DCC8;
  --glass-hi:rgba(255,255,255,.16); --glass-rim:rgba(255,255,255,.1); --glass-body:rgba(255,255,255,.05);
  color-scheme:dark;
}
${Y} body{background:var(--bg)}
/* header surface */
${Y} .hd::before{background:linear-gradient(180deg,rgba(7,7,8,.94),rgba(7,7,8,.74) 62%,rgba(7,7,8,0))}
/* light capsule \u2192 clear glass on smoke: transparent body, bright top rim, champagne lower edge */
${Y} .gb{color:var(--ink);background:linear-gradient(180deg,rgba(255,255,255,.1) 0%,rgba(255,255,255,.045) 55%,rgba(255,255,255,.07) 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.22),inset 0 -2px 3px -1px rgba(200,202,201,.18),inset 0 0 0 1px rgba(255,255,255,.08),0 1px 1px rgba(0,0,0,.3),0 10px 22px -12px rgba(0,0,0,.7)}
${Y} .gb:hover{box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 -2px 3px -1px rgba(200,202,201,.24),inset 0 0 0 1px rgba(255,255,255,.12),0 1px 1px rgba(0,0,0,.3),0 14px 26px -12px rgba(0,0,0,.75)}
${Y} .gb:active,${Y} .gb.pressed{box-shadow:inset 0 2px 4px rgba(0,0,0,.5),inset 0 0 0 1px rgba(255,255,255,.08)}
${Y} .gb.primary{color:#0b0b0c;background:linear-gradient(180deg,#f4f4f2 0%,#e3e4e1 60%,#d6d8d5 100%);
  box-shadow:inset 0 1px 0 #fff,inset 1px 0 1px rgba(255,255,255,.8),inset -1px 0 1px rgba(255,255,255,.8),inset 0 -1px 0 rgba(255,255,255,.7),inset 0 -6px 8px -5px rgba(120,112,98,.38),
    0 1px 0 rgba(0,0,0,.8),0 2px 4px -1px rgba(0,0,0,.6),0 12px 24px -10px rgba(0,0,0,.85)}
${Y} .gb.primary:hover{background:linear-gradient(180deg,#fff 0%,#eceeeb 60%,#dfe1de 100%)}
${Y} .gb[aria-pressed=true],${Y} .gb.selected{box-shadow:inset 0 0 0 1.5px var(--ink),inset 0 1px 0 rgba(255,255,255,.2),0 6px 14px -10px rgba(0,0,0,.6)}
${Y} .gb[disabled],${Y} .gb[aria-disabled=true]{box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
${Y} .gb[aria-busy=true]::after{border-color:rgba(236,237,234,.25);border-top-color:var(--ink)}
${Y} .gb:focus-visible,${Y} .gi:focus-visible,${Y} .gsel:focus-visible,${Y} .gsw:focus-visible,${Y} .grange:focus-visible,${Y} .pill:focus-visible,${Y} .tl:focus-visible{outline-color:var(--ink)}
/* captions, menus, words that speak */
${Y} .caption{background:rgba(14,14,15,.84);color:var(--ink);box-shadow:0 0 0 1px rgba(255,255,255,.07)}
${Y} .orb-ask{background:rgba(30,32,32,.9);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 0 0 1px rgba(255,255,255,.1),0 8px 30px rgba(0,0,0,.3)}
${Y} .orb-ask button{background:rgba(255,255,255,.08)}
${Y} .orb-ask button[aria-pressed=true]{color:#141515}
${Y} .orb-ask button:focus-visible{outline:2px solid var(--ink);outline-offset:3px}
/* Track B's independently mounted popover declares local light defaults. Keep
   this selector more specific; its stylesheet may be injected after ours. */
${Y} .sndc-site,${Y} .complete .sndc-intro{
  --snd-ink:#ECEDEA;--snd-muted:#9A9E9B;--snd-glass-top:rgba(255,255,255,.14);--snd-glass-bot:rgba(255,255,255,.04);
  --snd-edge:rgba(255,255,255,.12);--snd-hi:rgba(255,255,255,.3);--snd-shadow:rgba(0,0,0,.75);--snd-pane:rgba(30,32,32,.96);
  --snd-track:rgba(255,255,255,.14);--snd-on:#ECEDEA;--snd-knob:#141515;--snd-focus:#ECEDEA;
}
${Y} .sndc-site .sndc-t[aria-pressed=false] .sndc-sw::after,${Y} .complete .sndc-intro .sndc-t[aria-pressed=false] .sndc-sw::after{background:var(--snd-ink)}
${Y} .menu{background:rgba(14,14,15,.9);box-shadow:0 0 0 1px rgba(255,255,255,.08),0 24px 50px -24px rgba(0,0,0,.8)}
${Y} [data-speak]:hover,${Y} [data-speak]:focus-visible{text-decoration-color:rgba(236,237,234,.3)}
${Y} [data-speak][data-speaking]{text-decoration-color:rgba(236,237,234,.6)}
${Y} .qt figcaption a{text-decoration-color:rgba(236,237,234,.3)}
/* cards and panels: smoke, hairline rims instead of soft shadows */
${Y} .arc-img{box-shadow:0 0 0 1px rgba(255,255,255,.08),0 30px 50px -34px rgba(0,0,0,.9)}
${Y} .arc-c.on .arc-img{box-shadow:0 0 0 1px rgba(255,255,255,.14),0 40px 60px -34px rgba(0,0,0,.95)}
/* The glass layer (glass.css.js "clear glass" pass) on smoke: same clear body, rims
   lit from above, a faint champagne lower edge. !important only to beat that pass's
   high-specificity :not(.dark) selectors without touching them. */
${Y} .gb:not(.primary),${Y} .pill[aria-checked=true],${Y} .pill[aria-pressed=true],${Y} .pill[aria-selected=true],${Y} .pill.on,${Y} .gdd-b,${Y} .segbar{
  color:var(--ink);background:linear-gradient(180deg,rgba(255,255,255,.14) 0%,rgba(255,255,255,.035) 44%,rgba(0,0,0,.22) 56%,rgba(255,255,255,.07) 100%)!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.5),inset 0 0 0 1px rgba(255,255,255,.1),inset 1px 0 1px rgba(255,255,255,.1),inset -1px 0 1px rgba(255,255,255,.1),
    inset 0 -1px 0 rgba(200,202,201,.32),inset 0 -6px 8px -6px rgba(200,202,201,.14),inset 0 -10px 12px -10px rgba(0,0,0,.7),
    0 1px 0 rgba(0,0,0,.7),0 2px 4px -1px rgba(0,0,0,.65),0 14px 26px -12px rgba(0,0,0,.9)!important}
${Y} .gb:not(.primary):hover{box-shadow:inset 0 1px 0 rgba(255,255,255,.62),inset 0 0 0 1px rgba(255,255,255,.14),inset 1px 0 1px rgba(255,255,255,.14),inset -1px 0 1px rgba(255,255,255,.14),
    inset 0 -1px 0 rgba(200,202,201,.4),inset 0 -6px 8px -6px rgba(200,202,201,.18),inset 0 -10px 12px -10px rgba(0,0,0,.7),
    0 1px 0 rgba(0,0,0,.7),0 3px 6px -1px rgba(0,0,0,.65),0 18px 30px -12px rgba(0,0,0,.9)!important}
${Y} .gb:not(.primary):active{box-shadow:inset 0 2px 5px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,255,255,.1),inset 0 -1px 0 rgba(200,202,201,.2),0 1px 1px rgba(0,0,0,.7)!important}
${Y} .gb:not(.primary)::before{left:14%;top:2px;width:38%;height:38%;background:radial-gradient(70% 80% at 45% 20%,rgba(255,255,255,.42),rgba(255,255,255,0) 70%)}
${Y} .gb:not(.primary)::after{background:radial-gradient(60% 80% at 50% 100%,rgba(200,202,201,.26),rgba(200,202,201,0) 75%)}
${Y} .gb.primary::before,${Y} .gb.primary::after{opacity:.5}
${Y} .glass,${Y} .folder-track .tcard.glass{
  background:linear-gradient(180deg,rgba(255,255,255,.06) 0%,rgba(255,255,255,.02) 34%,rgba(255,255,255,.008) 70%,rgba(255,255,255,.025) 100%)!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 0 0 1px rgba(255,255,255,.09),inset 1px 0 0 rgba(255,255,255,.12),inset 0 -1px 0 rgba(200,202,201,.14),0 30px 60px -36px rgba(0,0,0,.9)!important}
/* The light folder glow used .95 white behind transparent cards, washing out
   the dark description. Keep its depth, with text above the decorative glare. */
${Y} .folder-glow{background:radial-gradient(closest-side,rgba(255,255,255,.1),rgba(236,237,234,.035) 55%,transparent)}
/* Shared glass sheen on smoke (post-launch 2026-10-27): the light pass's .glass::after (a .7 white
   glare + a .26 white 115deg band) was never overridden here, so every dark card, the inquiry panel and
   the showcase carried a broad white stripe. On smoke the material reads from the rim (box-shadow above)
   and a faint fall-off from the top edge; no band, nothing animated. */
${Y} .glass::after{background:radial-gradient(130% 55% at 50% -12%,rgba(255,255,255,.055),rgba(255,255,255,0) 62%)!important}
${Y} .folder .glass::after{z-index:0;background:radial-gradient(120% 60% at 20% -10%,rgba(255,255,255,.1),transparent 55%),linear-gradient(115deg,transparent 40%,rgba(255,255,255,.04) 48%,transparent 56%)}
${Y} .folder-track{z-index:1}
${Y} .tcard.on .tcard-n,${Y} .tcard.on .tcard-t,${Y} .tcard.on .tcard-l{position:relative;z-index:1}
${Y} .tcard.on .tcard-n,${Y} .tcard.on .tcard-l{color:#B4B8B5}
${Y} .pane,${Y} .gdd-l{background:rgba(14,14,15,.8);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 0 0 1px rgba(255,255,255,.07),0 24px 50px -24px rgba(0,0,0,.85)}
${Y} .gdd-o[aria-selected=true]{background:rgba(255,255,255,.1);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
${Y} .gi,${Y} .gsel{background-color:rgba(255,255,255,.05);color:var(--ink);box-shadow:inset 0 0 0 1px rgba(255,255,255,.14)}
${Y} .gsel{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' fill='none' stroke='%23ECEDEA' stroke-width='1.4' stroke-linecap='round'%3E%3Cpath d='M1 1l4.5 4.5L10 1'/%3E%3C/svg%3E")}
${Y} .gsw{background:rgba(255,255,255,.14);box-shadow:inset 0 1px 2px rgba(0,0,0,.5)}${Y} .gsw[aria-checked=true]{background:rgba(255,255,255,.5)}
${Y} .gsw[aria-checked=true]::after{background:#141515;box-shadow:inset 0 0 0 1px rgba(255,255,255,.15)}
${Y} .grange::-webkit-slider-runnable-track{background:linear-gradient(90deg,var(--ink) var(--p),rgba(255,255,255,.2) var(--p))}
${Y} .grange::-moz-range-track{background:rgba(255,255,255,.2)}${Y} .grange::-moz-range-progress{background:var(--ink)}
${Y} .org .pill[aria-selected=true]{background:rgba(255,255,255,.12)}
${Y} .plan{background:rgba(255,255,255,.04);box-shadow:0 0 0 1px rgba(255,255,255,.08)}
${Y} .plan.em{background:rgba(255,255,255,.08);box-shadow:0 0 0 1px rgba(255,255,255,.16),0 30px 50px -36px rgba(0,0,0,.9)}
${Y} .si-row:hover{background:rgba(255,255,255,.05)}
/* stages and thumbnails: smoke behind the objects (product photos themselves are unchanged) */
${Y} .pc-v,${Y} .shop-v,${Y} .pd-stage,${Y} .pd-stage.glass,${Y} .tcard-cv{background:radial-gradient(80% 70% at 50% 42%,#2a2c2c,#141515)}
${Y} .cv-products,${Y} .cv-sound{background:radial-gradient(90% 70% at 30% 20%,#3a3c3c 0%,#1e2020 45%,#0f1010 100%)!important}
${Y} .cv-templates{background:linear-gradient(160deg,#2c2d2d 0%,#1a1b1b 55%,#0e0f0f 100%)!important}
/* the welcome and quotation type (site.css.js sets a fixed near-black) */
${Y} .qt blockquote p,${Y} .wel-h{color:var(--ink)}
/* ambient light behind products / templates / sound: charcoal smoke, no colour */
${Y} .lo.r-products::before,${Y} .lo.r-templates::before,${Y} .lo.r-sound::before{
  background:radial-gradient(34% 30% at 60% 16%,rgba(200,202,201,.022),transparent 70%)}   /* owner 2026-10-21: no broad grey glow */
/* fixed text greys and small chips in site.css.js */
${Y} .lede,${Y} .legal-b p,${Y} .dh-l{color:#B4B8B5}
${Y} .file-ext,${Y} .file-v .file-ext{background:rgba(255,255,255,.1);color:var(--muted)}
${Y} .studio-lock{background:rgba(255,255,255,.05);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 0 0 1px rgba(255,255,255,.08)}
${Y} .cart-n{background:var(--ink);color:#141515}
/* \u2500\u2500 Home selector cards in dark (owner 2026-10-21): black translucent glass, not milky slabs \u2500\u2500 */
/* !important: card rules such as .dg-win img{display:block} must not show the twin */
.lo-dark-only{display:none!important}${Y} .lo-dark-only{display:block!important}${Y} .lo-light-only{display:none!important}
${Y} .dg-img,${Y} .dg-templates{background:radial-gradient(80% 60% at 50% 38%,rgba(255,255,255,.045),rgba(255,255,255,0) 62%),linear-gradient(180deg,#0f0f11 0%,#08080a 60%,#050506 100%);
  box-shadow:0 1px 0 rgba(0,0,0,.85),0 2px 6px -2px rgba(0,0,0,.8),0 30px 50px -30px rgba(0,0,0,.95)}
/* the glass itself, above the picture: lit top edge, curved sides, a faint champagne lower lip, one restrained sheen */
${Y} .dg-img::before{content:"";position:absolute;inset:0;z-index:3;border-radius:inherit;pointer-events:none;
  background:linear-gradient(155deg,rgba(255,255,255,.075) 0%,rgba(255,255,255,0) 30%,rgba(255,255,255,0) 78%,rgba(255,255,255,.025) 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 1px 0 1px rgba(255,255,255,.09),inset -1px 0 1px rgba(255,255,255,.09),inset 0 -1px 0 rgba(200,202,201,.18),
    inset 0 0 0 1px rgba(255,255,255,.07),inset 0 22px 34px -28px rgba(255,255,255,.16),inset 0 -26px 34px -28px rgba(0,0,0,.8)}
${Y} .dg-c.on .dg-img{box-shadow:0 1px 0 rgba(0,0,0,.85),0 3px 8px -2px rgba(0,0,0,.85),0 36px 56px -30px rgba(0,0,0,1)}
${Y} .dg-c.on .dg-img::before{box-shadow:inset 0 1px 0 rgba(255,255,255,.4),inset 1px 0 1px rgba(255,255,255,.12),inset -1px 0 1px rgba(255,255,255,.12),inset 0 -1px 0 rgba(200,202,201,.24),
    inset 0 0 0 1px rgba(255,255,255,.1),inset 0 22px 34px -28px rgba(255,255,255,.2),inset 0 -26px 34px -28px rgba(0,0,0,.8)}
${Y} .dg-products>img{mix-blend-mode:normal}
${Y} .dg-win{background:#fff;box-shadow:0 0 0 1px rgba(255,255,255,.12),0 18px 30px -16px rgba(0,0,0,.95)}
/* owner 2026-11-10: in the dark theme only the card is dark \u2014 the template window inside stays white */
${Y} .dg-templates .lo-light-only{display:block!important}${Y} .dg-templates .lo-dark-only{display:none!important}
${Y} .dg-win::after{background:linear-gradient(155deg,rgba(255,255,255,.14) 0%,rgba(255,255,255,0) 36%)}
${Y} .dg-templates::after{background:radial-gradient(closest-side,rgba(0,0,0,.7),transparent)}
${Y} .cv-wave i{background:linear-gradient(90deg,rgba(255,255,255,.14),rgba(255,255,255,.05));box-shadow:inset 0 0 0 1px rgba(255,255,255,.12),0 6px 10px -6px rgba(0,0,0,.8)}
${Y} .cv-wave i:nth-child(-n+9){background:linear-gradient(90deg,#f1f1ee,#c9cbc8);box-shadow:inset 0 1px 0 #fff,0 6px 10px -6px rgba(0,0,0,.8)}
/* the theme switch sits beside the sound control (Track B owns .snd) */
.thm{position:relative}
/* Templates (owner 2026-10-28): graphite structure, light preview surfaces, so the work reads first. */
${Y} .tcard-cv,${Y} .fo-cv,${Y} .pd-stage.cover-big{background:radial-gradient(85% 75% at 50% 38%,#f3f3f1,#d9dbd8 72%,#c9cbc8)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.35),0 18px 34px -22px rgba(0,0,0,.9)!important}
${Y} .tcard-cv .dev-floor,${Y} .fo-cv .dev-floor{background:radial-gradient(closest-side,rgba(38,40,39,.35),transparent)}
${Y} .folder-track .tcard.glass.on{box-shadow:inset 0 1px 0 rgba(255,255,255,.22),inset 0 0 0 1px rgba(255,255,255,.12),0 40px 70px -34px rgba(0,0,0,.95)!important}
${Y} .tcard-tag{color:#a9aca9}
`;var ma="html.ds2:not([data-theme=dark])",On=`
:root{
  --lo-safe-bottom:env(safe-area-inset-bottom,0px);
  /* motion: one shared language (see DESIGN_SYSTEM.md) */
  --m-instant:120ms;--m-quick:200ms;--m-move:420ms;--m-scene:720ms;
  --e-out:cubic-bezier(.2,.7,.2,1);--e-inout:cubic-bezier(.65,0,.15,1);
  /* depth */
  --z-rest:0 1px 1px rgba(38,40,39,.05),0 10px 24px -18px rgba(38,40,39,.35);
  --z-lift:0 1px 1px rgba(38,40,39,.06),0 22px 40px -26px rgba(38,40,39,.45);
  --hair:rgba(38,40,39,.09);
  --dock:84px;   /* the docked Orb's footprint at the bottom-right corner */
}

/* \u2500\u2500 fixes (always on) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* the docked Orb sits bottom-right; the footer's last line must never run under it */
.ft{padding-right:calc(clamp(16px,3.2vw,44px) + var(--dock))}
@media (max-width:700px){.ft{padding-right:clamp(16px,3.2vw,44px)}}
/* product card actions: two equal buttons, Studio as a quiet link beneath \u2014 no cramped third pill */
.file-a.ds-a{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:4px}
.file-a.ds-a .file-studio{grid-column:1 / -1;justify-self:center;display:inline-flex;align-items:center;gap:6px;padding:8px 4px 2px;
  font:500 13px/1 var(--font);color:var(--muted);text-decoration:none;transition:color var(--m-quick) ease}
.file-a.ds-a .file-studio:hover{color:var(--ink)}
.file-a.ds-a .file-studio svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:1.6;transition:transform var(--m-quick) var(--e-out)}
.file-a.ds-a .file-studio:hover svg{transform:translateX(2px)}

/* \u2500\u2500 Home: say what the platform offers, quietly, under the greeting \u2500\u2500 */
.wel-offer{display:flex;flex-wrap:wrap;justify-content:center;gap:4px 0;margin:18px 0 0;font:400 14px/1.4 var(--font);color:var(--muted);pointer-events:auto}
.wel-offer a{color:inherit;text-decoration:none;padding:6px 10px;border-radius:999px;transition:color var(--m-quick) ease,background var(--m-quick) ease}
.wel-offer a:hover{color:var(--ink);background:rgba(38,40,39,.04)}
.wel-offer a:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
.wel-offer span[aria-hidden]{padding:6px 0;opacity:.5}
@keyframes wel-turn{0%{opacity:0;visibility:visible;transform:translateY(4px)}7%,27%{opacity:1;visibility:visible;transform:none}33.3%{opacity:0;visibility:visible;transform:translateY(-4px)}33.4%,100%{opacity:0;visibility:hidden}}

/* \u2500\u2500 product facts: a calm two-column sheet \u2500\u2500 */
.facts.ds-facts{display:grid;grid-template-columns:minmax(110px,auto) 1fr;gap:10px 18px;margin:22px 0 0;padding:18px 0 0;border-top:1px solid var(--hair);font-size:14px}
.facts.ds-facts dt{color:var(--muted)}
.facts.ds-facts dd{margin:0;color:var(--ink)}
.facts.ds-facts dd a{color:inherit}

/* \u2500\u2500 buttons (design choice): optical glass, not gloss \u2500\u2500
   A clear body that lets the page through (backdrop blur + a touch of saturation),
   a bright specular rim on the top edge, a faint refracted edge at the bottom where
   the glass is thickest, and a contact shadow that stays close. No multi-stop gradients. */
${ma} .gb{background:linear-gradient(180deg,rgba(255,255,255,.74) 0%,rgba(248,249,248,.4) 52%,rgba(255,255,255,.62) 100%);
  -webkit-backdrop-filter:blur(14px) saturate(1.4);backdrop-filter:blur(14px) saturate(1.4);
  /* top specular line \xB7 bright base caustic \xB7 hairline edge \xB7 refracted darkening inside the thick rim \xB7 close contact shadow */
  box-shadow:inset 0 1px 0 #fff,inset 0 -1.5px 0 rgba(255,255,255,.95),inset 0 0 0 1px rgba(38,40,39,.085),inset 0 0 9px rgba(38,40,39,.075),
    0 .5px 0 rgba(38,40,39,.1),0 6px 14px -9px rgba(38,40,39,.32)}
${ma} .gb:hover{background:linear-gradient(180deg,rgba(255,255,255,.86) 0%,rgba(250,251,250,.5) 52%,rgba(255,255,255,.72) 100%);
  box-shadow:inset 0 1px 0 #fff,inset 0 -1.5px 0 #fff,inset 0 0 0 1px rgba(38,40,39,.11),inset 0 0 10px rgba(38,40,39,.085),
    0 .5px 0 rgba(38,40,39,.12),0 10px 20px -11px rgba(38,40,39,.38)}
${ma} .gb:active,${ma} .gb.pressed{background:linear-gradient(180deg,rgba(242,243,242,.7),rgba(252,252,252,.6));
  box-shadow:inset 0 1.5px 3px rgba(38,40,39,.16),inset 0 0 0 1px rgba(38,40,39,.1),inset 0 0 6px rgba(38,40,39,.06),0 .5px 0 rgba(255,255,255,.9)}
${ma} .gb.primary{color:#f6f6f4;background:linear-gradient(180deg,rgba(44,47,46,.94),rgba(24,26,25,.96));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.22),inset 0 0 0 1px rgba(255,255,255,.06),inset 0 -1px 0 rgba(0,0,0,.25),
    0 0 0 .5px rgba(0,0,0,.4),0 1px 2px rgba(0,0,0,.14),0 8px 18px -10px rgba(23,26,25,.55)}
${ma} .gb.primary:hover{background:linear-gradient(180deg,rgba(54,57,56,.94),rgba(30,32,31,.96))}
${ma} .gb.primary:active{background:#171918;box-shadow:inset 0 1px 3px rgba(0,0,0,.45),0 0 0 .5px rgba(0,0,0,.4)}
${ma} .gb[disabled],${ma} .gb[aria-disabled=true]{box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 0 0 .5px rgba(38,40,39,.1)}

/* \u2500\u2500 cards: the existing glass stays; only a measured lift on hover \u2500\u2500 */
@media (hover:hover){${ma} .file.glass{transition:transform var(--m-move) var(--e-out)}${ma} .file.glass:hover{transform:translateY(-2px)}}
@media (prefers-reduced-motion:reduce){.file.glass,.file-a.ds-a .file-studio svg{transition:none!important}.file.glass:hover{transform:none!important}}
/* \u2500\u2500 template detail \u2500\u2500 */
.tpd-stage{display:flex;flex-direction:column;gap:14px;min-width:0}
.tpd-live{width:100%;display:flex;justify-content:center}
.tpd-frame{position:relative;overflow:hidden;border-radius:18px;background:#fff;box-shadow:inset 0 0 0 1px var(--hair),var(--z-lift)}
.tpd-frame iframe{position:absolute;left:0;top:0;border:0;transform-origin:0 0;background:#fff}
.tpd-bar{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
.tpd-bar .note{margin:0}
.tpd .studio-lock{margin-top:22px}
::view-transition-old(tpl-device),::view-transition-new(tpl-device){animation-duration:var(--m-scene);animation-timing-function:var(--e-inout)}
@media (max-width:700px){.tpd-bar{justify-content:center}}

/* \u2500\u2500 Web Design: proof and quote \u2500\u2500 */
.wd-proof{padding:clamp(56px,9vh,110px) clamp(16px,6vw,100px) 0;max-width:1240px;margin:0 auto}
.wd-proof h2,.wd-quote h2{margin:0;font:200 clamp(30px,3.4vw,48px)/1.08 var(--font);letter-spacing:-.02em}
.wd-proof-l{max-width:38em;color:var(--muted);margin:14px 0 30px}
.wd-proof-g{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.wd-pc{display:flex;flex-direction:column;gap:8px;padding:24px 22px 20px;border-radius:22px;color:var(--ink);text-decoration:none;min-height:190px;transition:transform var(--m-move) var(--e-out)}
.wd-pc-k{font:500 11.5px/1 var(--font);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.wd-pc b{font:300 26px/1.1 var(--font);letter-spacing:-.01em;margin-top:6px}
.wd-pc span:not(.wd-pc-k){color:var(--muted);font-size:14.5px;line-height:1.5}
.wd-pc i{margin-top:auto;font-style:normal;font-size:13.5px;font-weight:500}
@media (hover:hover){.wd-pc:hover{transform:translateY(-3px)}}
.wd-pc:focus-visible{outline:2px solid var(--ink);outline-offset:4px}
.wd-quote{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);gap:24px 60px;align-items:start;max-width:1240px;margin:0 auto;padding:clamp(56px,9vh,110px) clamp(16px,6vw,100px) 0}
.wd-quote p{margin:0 0 12px;max-width:36em}
@media (max-width:820px){.wd-proof-g{grid-template-columns:1fr}.wd-pc{min-height:0}.wd-quote{grid-template-columns:1fr}}
@media (prefers-reduced-motion:reduce){.wd-pc{transition:none}.wd-pc:hover{transform:none}}

/* \u2500\u2500 phones: touch targets of at least 40px without changing how the bar reads \u2500\u2500 */
@media (max-width:700px){
  .nav a{padding-top:13px!important;padding-bottom:13px!important}
  .nv-x{min-width:40px;min-height:40px;display:inline-flex;align-items:center;justify-content:center}
  .ptabs a{display:inline-flex;align-items:center;min-height:40px}
  .wm{padding:11px 0}
  .wel-offer{flex-direction:column;align-items:center;gap:0;margin-top:14px}.wel-offer span[aria-hidden]{display:none}.wel-offer a{padding:7px 12px}
  /* the three offers share one line and take turns (owner 2026-10-27); a static list under reduced motion */
  @media (prefers-reduced-motion:no-preference){
    .wel-offer{display:grid;justify-items:center}
    .wel-offer a{grid-area:1/1;white-space:nowrap;opacity:0;visibility:hidden;animation:wel-turn 9s linear infinite}
    .wel-offer a:nth-of-type(2){animation-delay:3s}.wel-offer a:nth-of-type(3){animation-delay:6s}
    .wel-offer:is(:hover,:focus-within) a{animation-play-state:paused}
  }
  .tl{min-height:40px}
  .sx-ib{width:40px!important;height:40px!important}
  .sx-tb{min-height:36px}
  .sx-name{min-height:36px!important}
  .sx-grab{min-height:32px}
}

/* \u2500\u2500 template offer: what can be taken today vs what is still in the making \u2500\u2500 */
.tpd-offer{display:grid;gap:14px;margin:22px 0 0}
.tpd-o{padding:18px 20px;border-radius:18px;box-shadow:inset 0 0 0 1px var(--hair)}
.tpd-o.now{background:rgba(255,255,255,.7)}
.tpd-o.later{background:transparent;border:1px dashed rgba(38,40,39,.16);box-shadow:none}
.tpd-o h2{margin:4px 0 8px;font:300 22px/1.15 var(--font);letter-spacing:-.01em}
.tpd-o ul{margin:0 0 12px;padding-left:18px;color:var(--muted);font-size:14px;line-height:1.6}
.tpd-o.later h2,.tpd-o.later ul{color:var(--muted)}
.tpd-o .note{margin:8px 0 0}
html[data-theme=dark] .tpd-o.now{background:rgba(255,255,255,.04)}
html[data-theme=dark] .tpd-o.later{border-color:rgba(255,255,255,.14)}

/* \u2500\u2500 inquiry: delivery still being connected \u2500\u2500 */
.iq-pending{margin:14px 0 0;padding:12px 14px;border-radius:14px;font-size:13.5px;line-height:1.5;color:var(--muted);box-shadow:inset 0 0 0 1px var(--hair);background:rgba(255,255,255,.55)}
.iq-pending b{color:var(--ink);font-weight:500}
html[data-theme=dark] .iq-pending{background:rgba(255,255,255,.04)}

/* Confirmed mobile audit corrections, 23 Oct. Materials and desktop composition stay intact. */
.pd-sph{touch-action:none}
@media (max-width:820px) and (pointer:coarse){
  .iq .gi,.ft input{font-size:16px}
  .iq .ch span{min-height:44px;box-sizing:border-box;max-width:100%;padding-top:8px;padding-bottom:8px}
  .iq .ch{max-width:100%}.iq .ch span{white-space:normal}
  .hd-r .gb{min-width:40px;min-height:40px}
}
@media (max-width:360px){
  .nav{box-sizing:border-box;gap:0;padding:0}
  .nav a{font-size:13px;padding-left:4px;padding-right:4px;white-space:nowrap}
  .wd-stage{min-height:240px}
  .tpd-o .acts.eq{grid-auto-flow:row;grid-auto-columns:auto;grid-template-columns:minmax(0,1fr)}
  .tpd-o .acts .gb{width:100%;box-sizing:border-box}
}
@media (min-width:701px) and (max-width:820px) and (pointer:coarse){
  .nv-x{min-width:40px;min-height:40px}
  .nav > a,.nv-g > a{display:inline-flex;align-items:center;box-sizing:border-box;min-height:40px}
  .ft nav a{display:inline-flex;align-items:center;min-height:40px;padding:6px 2px}
}
@media (min-width:361px) and (max-width:430px){
  .tpd-o .acts.eq{grid-auto-columns:auto;grid-template-columns:minmax(188px,1.5fr) minmax(70px,1fr)}
}

/* Account tabs at the narrowest phones (\u2264360px): the four labels fit the screen without
   horizontal scrolling. Same labels, order, height (34px) and look; each label stays on one line. */
@media (max-width:360px){
  .acct-tabs{max-width:100%;box-sizing:border-box}
  .acct-tabs{gap:0}
  .acct-tabs .pill{padding:0 8px;font-size:13px;white-space:nowrap;flex:none}
}

/* Very short portrait phones (\u2264650px tall; from Codex 3472177, owner-approved scope): the Home
   primary action and the selector arrows stay on screen. Replay intro stays in the footer, sound in
   the header's speaker button, and Digital Pieces / Sound / Studio in the Products menu. */
@media (max-width:640px) and (max-height:650px){
  .wel-ctl,.sel-more{display:none}
  .sel{--cw:clamp(128px,calc((100svh - 330px) * .58),176px)}
  .sel .arc-ctl{margin-top:90px!important}
  .arc-ctl .gb{min-width:40px;min-height:40px}
}
`;var Ka="html.ds2:not([data-theme=dark]) body:not([data-route=studio])",In=`
/* \u2500\u2500 crystal controls (crystal.css.js) \u2500\u2500 */
.gb{transition:transform .55s cubic-bezier(.3,1.45,.5,1),box-shadow .3s ease,background .3s ease,color .2s}
.gb:active,.gb.pressed{transform:scale(.97,.94);transition-duration:.12s;transition-timing-function:cubic-bezier(.2,.7,.2,1)}
.gb::before{display:block!important;content:"";position:absolute;left:14%;right:14%;top:1px;height:1.5px;border-radius:999px;pointer-events:none;z-index:0;
  background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.95) 30%,rgba(255,255,255,.7) 62%,rgba(255,255,255,0));opacity:.9;transition:transform .5s cubic-bezier(.3,1.45,.5,1),opacity .3s}
.gb::after{display:block!important;content:"";position:absolute;inset:0;left:auto;right:auto;bottom:auto;width:100%;height:100%;border-radius:inherit;pointer-events:none;z-index:0;
  background:linear-gradient(108deg,transparent 38%,rgba(255,255,255,.6) 47%,rgba(255,255,255,.12) 52%,transparent 60%);background-size:320% 100%;background-position:135% 0;opacity:0}
.gb:hover::after,.gb:focus-visible::after{animation:cx-glint 1.15s cubic-bezier(.45,0,.2,1) 1}
.gb:active::before,.gb.pressed::before{transform:translateY(1px) scaleX(.8);opacity:.55}
@keyframes cx-glint{0%{background-position:135% 0;opacity:0}18%{opacity:1}100%{background-position:-35% 0;opacity:0}}
.gb>*{position:relative;z-index:1}

${Ka} .gb:not(.dark *){color:var(--ink);
  background:linear-gradient(180deg,rgba(255,255,255,.42) 0%,rgba(255,255,255,.05) 48%,rgba(255,255,255,.02) 62%,rgba(255,255,255,.3) 100%);
  -webkit-backdrop-filter:blur(2px) saturate(1.6) brightness(1.04);backdrop-filter:blur(2px) saturate(1.6) brightness(1.04);
  /* specular top \xB7 bright base caustic \xB7 hairline edge (visibility on white) \xB7 refracted band at the thick base \xB7 inner top light \xB7 contact */
  box-shadow:inset 0 1px 0 rgba(255,255,255,.98),inset 0 -1px 0 rgba(255,255,255,.9),inset 0 0 0 .5px rgba(38,40,39,.2),
    inset 0 -7px 9px -7px rgba(70,76,73,.3),inset 0 8px 10px -9px rgba(255,255,255,.95),inset 1px 0 2px -1px rgba(255,255,255,.9),inset -1px 0 2px -1px rgba(255,255,255,.9),
    0 1px 1.5px rgba(38,40,39,.12),0 7px 14px -9px rgba(38,40,39,.32)}
${Ka} .gb:not(.dark *):hover{background:linear-gradient(180deg,rgba(255,255,255,.55) 0%,rgba(255,255,255,.1) 48%,rgba(255,255,255,.05) 62%,rgba(255,255,255,.4) 100%);
  box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 #fff,inset 0 0 0 .5px rgba(38,40,39,.26),
    inset 0 -8px 10px -7px rgba(70,76,73,.34),inset 0 8px 10px -9px #fff,inset 1px 0 2px -1px #fff,inset -1px 0 2px -1px #fff,
    0 1px 1.5px rgba(38,40,39,.14),0 10px 18px -10px rgba(38,40,39,.38)}
${Ka} .gb:not(.dark *):is(:active,.pressed){background:linear-gradient(180deg,rgba(240,241,240,.4),rgba(255,255,255,.2));
  box-shadow:inset 0 1.5px 3px rgba(38,40,39,.16),inset 0 0 0 .5px rgba(38,40,39,.24),inset 0 -1px 0 rgba(255,255,255,.9),0 .5px 1px rgba(38,40,39,.12)}

/* smoked glass: transparent charcoal with a barely visible luminous rim */
${Ka} .gb.primary:not(.dark *){color:#f7f7f5;
  background:radial-gradient(38% 70% at 74% 82%,rgba(255,255,255,.1),transparent 70%),linear-gradient(180deg,rgba(52,56,54,.74) 0%,rgba(28,31,30,.8) 50%,rgba(20,22,21,.9) 100%);
  -webkit-backdrop-filter:blur(2px) saturate(1.3);backdrop-filter:blur(2px) saturate(1.3);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 0 0 .5px rgba(255,255,255,.16),inset 0 -1px 0 rgba(255,255,255,.08),
    inset 0 9px 12px -10px rgba(255,255,255,.2),inset 0 -9px 12px -8px rgba(0,0,0,.45),
    0 0 0 .5px rgba(0,0,0,.4),0 1px 2px rgba(0,0,0,.16),0 9px 18px -10px rgba(23,26,25,.55)}
${Ka} .gb.primary:not(.dark *):hover{background:radial-gradient(38% 70% at 70% 82%,rgba(255,255,255,.13),transparent 70%),linear-gradient(180deg,rgba(62,66,64,.76) 0%,rgba(32,35,34,.82) 50%,rgba(22,24,23,.92) 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.36),inset 0 0 0 .5px rgba(255,255,255,.2),inset 0 -1px 0 rgba(255,255,255,.1),
    inset 0 9px 12px -10px rgba(255,255,255,.26),inset 0 -9px 12px -8px rgba(0,0,0,.45),
    0 0 0 .5px rgba(0,0,0,.4),0 1px 2px rgba(0,0,0,.18),0 12px 22px -11px rgba(23,26,25,.6)}
${Ka} .gb.primary:not(.dark *):active{background:linear-gradient(180deg,rgba(24,26,25,.88),rgba(30,33,32,.84));
  box-shadow:inset 0 1.5px 4px rgba(0,0,0,.5),inset 0 0 0 .5px rgba(255,255,255,.12),0 0 0 .5px rgba(0,0,0,.4),0 2px 5px -3px rgba(0,0,0,.4)}
.gb.primary:not(.dark *)::before{background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.5) 28%,rgba(255,255,255,.22) 66%,rgba(255,255,255,0));opacity:1}
.gb.primary:not(.dark *)::after{background:linear-gradient(108deg,transparent 38%,rgba(255,255,255,.28) 47%,rgba(255,255,255,.06) 52%,transparent 60%);background-size:320% 100%}

/* clear crystal with more body, for primary actions on a dark canvas (Studio) */
.gb.crystal{color:#f4f5f3;background:linear-gradient(180deg,rgba(255,255,255,.2),rgba(255,255,255,.04) 50%,rgba(255,255,255,.12));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.55),inset 0 0 0 .5px rgba(255,255,255,.28),inset 0 -8px 10px -8px rgba(255,255,255,.18),0 10px 20px -10px rgba(0,0,0,.7)}

/* icon controls and compact */
${Ka} .gb.gc:not(.dark *){box-shadow:inset 0 1px 0 rgba(255,255,255,.98),inset 0 0 0 .5px rgba(38,40,39,.18),inset 0 -6px 8px -6px rgba(70,76,73,.28),0 1px 1.5px rgba(38,40,39,.1),0 6px 12px -8px rgba(38,40,39,.3)}
.gb.gc::before{left:26%;right:26%}

/* dark theme (explicit choice only): the same pieces, lit from inside */
html[data-theme=dark] .gb:not(.primary){background:linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,.025) 50%,rgba(255,255,255,.08));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 0 0 .5px rgba(255,255,255,.14),inset 0 -8px 10px -8px rgba(255,255,255,.12),0 10px 18px -10px rgba(0,0,0,.8)}
html[data-theme=dark] .gb::before{opacity:.28}
html[data-theme=dark] .gb.primary{color:#171a19;background:linear-gradient(180deg,rgba(250,250,248,.94),rgba(226,229,226,.88));
  box-shadow:inset 0 1px 0 #fff,inset 0 -6px 9px -6px rgba(90,96,93,.35),0 0 0 .5px rgba(255,255,255,.3),0 8px 22px -8px rgba(0,0,0,.6)}
html[data-theme=dark] .gb.primary:not(.dark *)::before{background:linear-gradient(90deg,rgba(255,255,255,0),#fff 40%,rgba(255,255,255,0));opacity:.9}

.gb[aria-busy=true]::after{inset:auto;left:calc(50% - 7px);top:calc(50% - 7px);width:14px;height:14px;background:none;opacity:1;animation:spin .8s linear infinite!important}
.gb[disabled]::after,.gb[aria-disabled=true]::after,.gb[disabled]:active,.gb[aria-disabled=true]:active{animation:none;transform:none}
@media (prefers-reduced-motion:reduce){.gb,.gb::before{transition:none}.gb:active,.gb.pressed{transform:none}.gb::after{animation:none!important}}
`;var Pn=Va?Va.replace(/\/inquiry$/,"/request-code"):"",aa=!0,Rn={name:100,use:1500},io=e=>String(e??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),ud=()=>crypto.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,12)}`,mr=(e,a,{cls:o="gb small primary",label:t="Request code",mode:d="code"}={})=>`<button class="${o}" type="button" data-request-code="${io(e)}|${io(a)}"${d==="price"?' data-rc-mode="price"':""}><span>${t}</span></button>`,gd={kicker:"Ask for price",lede:"This piece is priced for each project. Tell me who you are and, if you like, where you would use it: I\u2019ll reply with a price.",send:"Ask for a price",done:"I\u2019ll reply with a price."};function hd(e,a="code"){let o=a==="price"?gd:null;return`<dialog class="rc glass" aria-labelledby="rc-h">
    <form class="rc-f" novalidate>
      <button class="rc-x gb gc small" type="button" data-rc-close aria-label="Close"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg></button>
      <p class="kicker">${o?o.kicker:"Request code"}</p>
      <h2 id="rc-h">${io(e)}</h2>
      <p class="rc-l">${o?o.lede:"The interactive piece stays free to try on this site \u2014 nothing here is needed for that. This is only for its source code: tell me who you are and I\u2019ll be in touch about access."}</p>
      <label class="fl"><span>Name</span><input class="gi" name="name" autocomplete="name" maxlength="${Rn.name}" required><em class="err" data-err="name"></em></label>
      <label class="fl"><span>Email</span><input class="gi" name="email" type="email" autocomplete="email" inputmode="email" maxlength="254" required><em class="err" data-err="email"></em></label>
      <label class="fl"><span>How you\u2019d like to use it <small>optional</small></span><textarea class="gi" name="use" rows="3" maxlength="${Rn.use}"></textarea></label>
      <label class="rc-hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
      <div class="rc-send"><button class="gb primary" type="submit"><span>${o?o.send:"Send request"}</span></button>
        <p class="rc-s" role="status" aria-live="polite"></p></div>
      <p class="note">Your name, email and note go to Carla Tres (The Light Orb) only to answer this request, and are kept as a record of it. Not added to any mailing list. Ask at hello@thelightorb.com to have them deleted. <a href="#/privacy">Privacy</a></p>
    </form>
    <div class="rc-done" hidden tabindex="-1"><p class="kicker">${io(e)}</p><h2>Request received.</h2><p>${o?o.done:"I\u2019ll be in touch about access."}</p>
      <div class="acts"><button class="gb" type="button" data-rc-close><span>Close</span></button></div></div>
  </dialog>`}function fr(e,{audio:a,variant:o=()=>"",autoOpen:t=!1}={}){let d=p=>{let[i,l]=p.dataset.requestCode.split("|"),c=p.dataset.rcMode==="price"?"price":"code",f=document.createElement("div");f.innerHTML=hd(l,c);let h=f.firstElementChild;document.body.append(h);let b=h.querySelector("form"),$=h.querySelector(".rc-s"),K=b.querySelector("[type=submit]"),s=performance.now(),M=ud(),A=!1,P=()=>h.close();h.addEventListener("close",()=>{h.remove(),p.focus({preventScroll:!0}),a?.sfx?.("close")}),h.addEventListener("click",I=>{I.target===h&&P()}),h.querySelectorAll("[data-rc-close]").forEach(I=>I.addEventListener("click",P));let F=(I,B)=>{let N=b.elements[I],X=b.querySelector(`[data-err=${I}]`);B?(N.setAttribute("aria-invalid","true"),X.textContent=B):(N.removeAttribute("aria-invalid"),X.textContent="")};b.addEventListener("submit",async I=>{if(I.preventDefault(),A)return;let B={name:b.elements.name.value.trim(),email:b.elements.email.value.trim(),use:b.elements.use.value.trim()};if(F("name",B.name?"":"Please add your name."),F("email",Ca(B.email)?"":"Please enter a valid email address."),!B.name){b.elements.name.focus();return}if(!Ca(B.email)){b.elements.email.focus();return}if(!Pn){$.textContent="Requests are not open yet. You can write to hello@thelightorb.com.";return}A=!0,K.disabled=!0,K.setAttribute("aria-busy","true"),$.removeAttribute("role"),$.textContent="Sending\u2026";let N=!1,X="";try{let T=await fetch(Pn,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({product:i,productName:c==="price"?`${l} \u2014 price request`:l,variant:c==="price"?"price-request":o()||"",...B,key:M,elapsed:Math.round(performance.now()-s),website:b.elements.website.value,lang:(navigator.language||"en").slice(0,5)})}),E=await T.json().catch(()=>null);N=T.ok&&E?.ok===!0,X=N?"":T.status===429?"Too many requests for now \u2014 please try again in a while.":"Your request was not sent. Please try again, or write to hello@thelightorb.com."}catch{X="Your request was not sent \u2014 the connection failed. Please try again, or write to hello@thelightorb.com."}if(A=!1,K.disabled=!1,K.removeAttribute("aria-busy"),N){Ge("code_request",{product:i}),a?.sfx?.("confirm"),b.hidden=!0;let T=h.querySelector(".rc-done");T.hidden=!1,T.focus();return}$.textContent=X,$.setAttribute("role","alert"),Ge("code_request_failed",{product:i})}),h.showModal(),a?.sfx?.("open"),Ge("code_request_open",{product:i}),requestAnimationFrame(()=>b.elements.name.focus())};if(e.querySelectorAll("[data-request-code]").forEach(p=>p.addEventListener("click",()=>d(p))),t){let p=e.querySelector("[data-request-code]");p&&setTimeout(()=>d(p),80)}}var Dn=`
/* \u2500\u2500 Request code (request-code.js) \u2500\u2500 */
.rc{width:min(440px,calc(100vw - 32px));max-height:calc(100svh - 32px);padding:0;border:0;border-radius:24px;color:var(--ink);overflow:auto;
  background:linear-gradient(180deg,rgba(255,255,255,.94),rgba(250,250,249,.9));box-shadow:inset 0 1px 0 #fff,inset 0 0 0 .5px rgba(38,40,39,.14),0 30px 60px -30px rgba(38,40,39,.5)}
.rc::backdrop{background:rgba(246,246,244,.62);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}
.rc[open]{animation:rc-in .5s cubic-bezier(.2,.75,.15,1)}
@keyframes rc-in{from{opacity:0;transform:translateY(10px) scale(.985)}}
.rc-f,.rc-done{display:grid;gap:14px;padding:clamp(22px,4vw,32px);position:relative;outline:none}
.rc [hidden]{display:none}
.rc{font-family:var(--font);-webkit-font-smoothing:antialiased}.rc a{color:var(--ink);text-underline-offset:3px}
.rc h2{margin:0;font:250 26px/1.15 var(--font);letter-spacing:-.015em}
.rc .kicker{margin:0}
.rc-l,.rc-done>p:not(.kicker){margin:0 0 4px;color:var(--muted);font-size:14.5px;line-height:1.55}
.rc .fl{display:grid;gap:6px}.rc .fl>span{font:500 13px/1.3 var(--font)}.rc .fl small{font-weight:400;color:var(--faint);margin-left:6px}
.rc .gi{width:100%;box-sizing:border-box;font-size:15px}.rc textarea.gi{height:auto;min-height:78px;padding:10px 12px;line-height:1.5;resize:vertical}
.rc .gi[aria-invalid]{box-shadow:inset 0 0 0 1.5px #9b4a3f}
.rc-x{position:absolute;top:14px;right:14px;width:36px;padding:0}
.rc-x svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round}
.rc-hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.rc-send{display:flex;flex-wrap:wrap;align-items:center;gap:10px 16px;margin-top:4px}
.rc-s{margin:0;font-size:13px;color:var(--muted);flex:1;min-width:150px}.rc-s[role=alert]{color:#9b4a3f}
.rc .note{margin:0;font-size:12.5px;color:var(--faint)}
html[data-theme=dark] .rc{background:linear-gradient(180deg,rgba(28,30,29,.96),rgba(18,20,19,.95));box-shadow:inset 0 1px 0 rgba(255,255,255,.12),inset 0 0 0 .5px rgba(255,255,255,.1),0 30px 60px -30px #000}
html[data-theme=dark] .rc::backdrop{background:rgba(8,9,9,.6)}
@media (prefers-reduced-motion:reduce){.rc[open]{animation:none}}
`;var Bn=zo?zo.replace(/\/waitlist$/,"/studio-waitlist"):"",md=!0,zr=()=>md||/[?&]list=1\b/.test(location.search),fd=0,bd=e=>String(e).replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),_o=e=>`<div class="sl-done" tabindex="-1" role="status"><p class="sl-h sl-h3">You\u2019re on the list.</p>
  <p class="sl-l">We\u2019ll email you${e?` at <b>${bd(e)}</b>`:""} when Studio opens. That is the only email this list sends.</p>
  <p class="sl-out">Changed your mind? Every email from this list has a <b>Leave the list</b> link: one click and your address is removed.</p></div>`;function Or({tone:e="light",heading:a=!0,soon:o=!1}={}){let t=`sl-${++fd}`,d=Qi();return d?`<section class="sl sl-${e}" aria-labelledby="${t}-h" data-studio-list>
    ${o?`<h2 class="sl-h sl-h3 sl-sr" id="${t}-h">Studio list</h2>`:a?`<p class="sl-k">Studio</p><h2 class="sl-h" id="${t}-h">Something new is taking shape.</h2>`:`<h3 class="sl-h sl-h3" id="${t}-h">Studio</h3>`}
    ${_o(d.email)}
  </section>`:`<section class="sl sl-${e}" aria-labelledby="${t}-h" data-studio-list>
    ${o?`<h2 class="sl-h sl-h3" id="${t}-h">Be the first to know when Studio opens.</h2>`:a?`<p class="sl-k">Studio</p><h2 class="sl-h" id="${t}-h">Something new is taking shape.</h2>`:`<h3 class="sl-h sl-h3" id="${t}-h">Studio</h3>`}
    ${o?"":'<p class="sl-l">Be the first to know when Studio opens.</p>'}
    <form class="sl-f" novalidate>
      <label class="sl-fl" for="${t}-e"><span class="sl-sr">Email address</span></label>
      <div class="sl-row"><input class="gi"${zr()?"":" disabled"} id="${t}-e" name="email" type="email" autocomplete="email" inputmode="email" maxlength="254" placeholder="you@example.com" required aria-describedby="${t}-c ${t}-m">
        <button class="gb${e==="dark"?" crystal":" primary"}" type="submit"${zr()?"":" disabled"}><span>Notify me</span></button></div>
      <label class="sl-c" id="${t}-c"><input type="checkbox" name="consent" required${zr()?"":" disabled"}> <span>Yes, email me when Studio opens. Sent by Carla Tres (The Light Orb); your address is used only for this, kept apart from every other list, and every email has a link to leave. <a href="#/privacy">Privacy</a></span></label>
      <label class="sl-hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
      <p class="sl-m" id="${t}-m" role="status" aria-live="polite">${zr()?"":"Sign-up opens soon \u2014 nothing typed here is sent yet."}</p>
    </form>
  </section>`}function br(e,{sfx:a=()=>{}}={}){e.querySelector("[data-studio-list] form")&&en().then(o=>{o&&e.querySelectorAll("[data-studio-list] form").forEach(t=>{t.closest("[data-studio-list]").querySelector(".sl-l")?.remove(),t.outerHTML=_o(o.email)})}),e.querySelectorAll("[data-studio-list] form").forEach(o=>o.addEventListener("submit",async t=>{t.preventDefault();let d=o.elements.email,p=o.elements.consent,i=o.querySelector("[type=submit]"),l=o.querySelector(".sl-m"),c=d.value.trim();l.removeAttribute("data-err");let f=(M,A)=>{l.textContent=M,l.dataset.err="",A?.focus(),A&&A.setAttribute("aria-invalid","true")};if(d.removeAttribute("aria-invalid"),p.removeAttribute("aria-invalid"),!Ca(c))return f("Please enter a valid email address.",d);if(!p.checked)return f("Please tick the box so I know you\u2019d like that one email.",p);if(!Bn||!zr())return f("The list is not open yet. Nothing was sent.");i.disabled=!0,i.setAttribute("aria-busy","true"),l.textContent="";let h=!1,b=0;try{let M=await fetch(Bn,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:c,consent:!0,website:o.elements.website.value,lang:(navigator.language||"en").slice(0,5)})});b=M.status,h=M.ok&&(await M.json().catch(()=>null))?.ok===!0}catch{}if(i.disabled=!1,i.removeAttribute("aria-busy"),!h)return f(b===429?"Too many tries \u2014 please wait a little and try again.":"That did not go through, so you are not on the list yet. Please try again in a moment.");Ge("studio_list_join"),a("confirm"),Zi(c);let $=o.closest("[data-studio-list]"),K=document.createElement("div");K.innerHTML=_o(c);let s=K.firstElementChild;$.querySelector(".sl-l")?.remove(),o.replaceWith(s),s.focus({preventScroll:!0})}))}var Fn=()=>`<section class="ss" aria-labelledby="ss-h">
  <div class="ss-in">
    <p class="ss-k">Studio</p>
    <h1 class="ss-h" id="ss-h">Coming soon.</h1>
    <p class="ss-l">A creative space to explore, experiment and bring digital ideas to life.</p>
    <p class="ss-n">Studio is not open yet. <a href="#/products">Browse the products</a> in the meantime.</p>
    <div class="ss-f glass">${Or({soon:!0})}</div>
  </div>
</section>`,Nn=`
/* \u2500\u2500 Studio \xB7 Coming soon (studioSoonHTML) \u2500\u2500 */
.ss{min-height:calc(100svh - 120px);display:grid;place-items:center;padding:clamp(96px,14vh,150px) 16px 64px;box-sizing:border-box}
.ss-in{width:100%;max-width:560px;display:grid;gap:14px;text-align:left}
.ss-k{margin:0;font:500 11px/1 var(--font);letter-spacing:.18em;text-transform:uppercase;color:var(--faint)}
.ss-h{margin:0;font:250 clamp(40px,6vw,64px)/1.02 var(--font);letter-spacing:-.025em;color:var(--ink)}
.ss-l{margin:0;font-size:clamp(16px,1.6vw,18px);line-height:1.5;color:var(--muted);max-width:30em}
.ss-n{margin:0;font-size:13.5px;color:var(--faint)}.ss-n a{color:inherit}
.ss-f{margin-top:18px;padding:clamp(20px,3vw,28px);border-radius:22px}
.ss-f .sl{max-width:none}
/* \u2500\u2500 Studio Membership launch list (studio-list.js) \u2500\u2500 */
.sl{display:grid;gap:10px;max-width:520px}
.sl-k{margin:0;font:500 11px/1 var(--font);letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}
.sl-h{margin:0;font:250 clamp(24px,2.6vw,34px)/1.15 var(--font);letter-spacing:-.015em}
.sl-h3{font:400 15px/1.3 var(--font);letter-spacing:0}
.sl-l{margin:0;color:var(--muted);font-size:14.5px;line-height:1.55}
.sl-f{display:grid;gap:10px;margin-top:6px}
.sl-sr,.sl-fl{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}
.sl-row{display:flex;flex-wrap:wrap;gap:10px}.sl-row .gi{flex:1 1 200px;min-width:0;font-size:15px}
.sl-c{display:flex;gap:10px;align-items:flex-start;font-size:12.5px;line-height:1.5;color:var(--muted);cursor:pointer}
.sl-c input{margin:2px 0 0;width:16px;height:16px;flex:none;accent-color:#262827}
.sl-c input:focus-visible{outline:2px solid currentColor;outline-offset:2px}
.sl-c input[aria-invalid]{outline:1.5px solid #a50d2f;outline-offset:2px}
.sl-hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.sl-m{margin:0;font-size:13px;color:var(--muted);min-height:1em}.sl-m[data-err]{color:#a50d2f}
.sl-out{margin:6px 0 0;font-size:12.5px;line-height:1.5;color:var(--faint)}.sl-dark .sl-out{color:var(--dark-muted,#a4a8a5)}
.sl-done{display:grid;gap:4px;outline:none;animation:sl-in .6s cubic-bezier(.2,.75,.15,1)}
@keyframes sl-in{from{opacity:0;transform:translateY(6px)}}
.memb-sl{padding:clamp(22px,4vw,36px);border-radius:24px;margin:0 0 36px;max-width:640px}
/* in Studio's dark canvas */
.sl-dark{color:var(--dark-ink,#eceeeb);gap:8px;padding:16px 0 4px;border-top:1px solid rgba(255,255,255,.08);margin-top:16px}
.sl-dark .sl-l,.sl-dark .sl-c{color:var(--dark-muted,#a4a8a5)}.sl-dark .sl-c a{color:inherit}
.sl-dark .sl-c input{accent-color:#eceeeb}
.sl-dark .sl-m{color:var(--dark-muted,#a4a8a5)}.sl-dark .sl-m[data-err]{color:#e0a397}
.sl-dark .sl-row .gb{height:40px;font-size:13px;flex:1 1 auto}
/* above the light layers (system.css), which otherwise reach into Studio's panel */
html body .sl.sl-dark .gb.crystal{color:#f4f5f3;background:linear-gradient(180deg,rgba(255,255,255,.2),rgba(255,255,255,.04) 50%,rgba(255,255,255,.12));-webkit-backdrop-filter:none;backdrop-filter:none;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.5),inset 0 0 0 .5px rgba(255,255,255,.26),inset 0 -8px 10px -8px rgba(255,255,255,.16),0 10px 20px -10px rgba(0,0,0,.7)}
html body .sl.sl-dark .gb.crystal:hover{background:linear-gradient(180deg,rgba(255,255,255,.26),rgba(255,255,255,.06) 50%,rgba(255,255,255,.16))}
.sl-dark .gi{background:rgba(255,255,255,.05);color:var(--dark-ink,#eceeeb);box-shadow:inset 0 0 0 1px rgba(255,255,255,.14)}
.sl-dark .gi::placeholder{color:rgba(236,238,235,.4)}
html[data-theme=dark] .sl-m[data-err]{color:#e0a397}
@media (prefers-reduced-motion:reduce){.sl-done{animation:none}}
`;var Pt=null,la=null,xr=null,Ir=0,xd=performance.now()/1e3,qt={exposure:1,target:1,impacts:[null,null],next:0,strength:1,scale:90,horizon:.27,lamp:.9,orb:null};function no(e){if(!la){la=document.createElement("canvas"),la.className="world-preview",la.setAttribute("aria-hidden","true"),la.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:inherit";try{Pt=ji(la)}catch{Pt=null}}return Pt&&(xr=e,e.prepend(la),Wo(),vd()),la}function Pr(){cancelAnimationFrame(Ir),Ir=0,la?.remove(),xr=null}function Wo(){if(!xr||!Pt)return;let e=xr.getBoundingClientRect();Pt.resize(Math.max(2,e.width),Math.max(2,e.height),Math.min(devicePixelRatio||1,1.5))}addEventListener("resize",Wo);var wt={state:qt,setExposure(e,a=!1){qt.target=e,a&&(qt.exposure=e)},impact(e,a,o=qt.strength){let t=qt.next++%2;qt.impacts[t]={x:e,y:a,at:performance.now()/1e3,strength:o}},set(e){Object.assign(qt,e)},setOrb(e){qt.orb=e},get canvas(){return la}};function vd(){cancelAnimationFrame(Ir);let e=()=>{if(!xr||!Pt)return;let a=performance.now()/1e3,o=xr.getBoundingClientRect();Math.abs(o.width-la.width/Pt.ratio)>2&&Wo(),qt.exposure+=(qt.target-qt.exposure)*.05;let t=o.height,d=qt.orb;Pt.setHorizon(qt.horizon),Pt.setExposure(qt.exposure),Pt.setNightGain(1),d?(Pt.setOrb(d.x,d.y,d.d),Pt.setLamp(d.x,d.y,d.d*3,qt.lamp*(1-qt.exposure)),Pt.setReveal(d.x,d.y,Math.hypot(o.width,t),qt.exposure*60)):(Pt.setReveal(0,0,1,0),Pt.setLamp(0,0,1,0)),qt.impacts.forEach((p,i)=>Pt.setImpact(i,p?.x??0,p?.y??0,p?a-p.at:-1,p?.strength??0,qt.scale)),Pt.render(a-xd),Ir=requestAnimationFrame(e)};Ir=requestAnimationFrame(e)}var Hn=`
.sx,.sx-modal{--sx-bg:#0b0c0c;--sx-p:#111313;--sx-p2:#151717;--sx-f:#0d0e0e;--sx-l:rgba(255,255,255,.075);--sx-l2:rgba(255,255,255,.12);--sx-ink:#e8eae8;--sx-m:#8b918e;--sx-m2:#5f6563;--sx-hi:#f4f5f3}
.sx{position:fixed;left:0;right:0;bottom:0;top:var(--sx-top,72px);display:grid;grid-template-columns:48px minmax(0,1fr) 316px;grid-template-rows:44px minmax(0,1fr);
  background:var(--sx-bg);color:var(--sx-ink);font:400 12px/1.35 var(--font);-webkit-font-smoothing:antialiased;border-top:1px solid var(--sx-l)}
body.sx-on{background:#0b0c0c}
body.sx-on .lo{background:#0b0c0c}
.sx button{font:inherit}
.sx :focus-visible{outline:1.5px solid rgba(236,238,235,.75);outline-offset:-1.5px}
/* top bar */
.sx-top{grid-column:1/-1;display:flex;align-items:center;gap:6px;padding:0 8px 0 10px;border-bottom:1px solid var(--sx-l);background:linear-gradient(180deg,#141616,#101212);min-width:0}
.sx-doc{display:flex;align-items:center;gap:6px;min-width:0}
.sx-name{all:unset;box-sizing:border-box;width:190px;max-width:28vw;height:28px;padding:0 8px;border-radius:7px;font:500 13px/28px var(--font);color:var(--sx-ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sx-name:hover{box-shadow:inset 0 0 0 1px var(--sx-l2)}.sx-name:focus{box-shadow:inset 0 0 0 1px rgba(236,238,235,.5);background:rgba(0,0,0,.3)}
.sx-dirty{width:6px;height:6px;border-radius:50%;background:var(--sx-m2);flex:none}.sx-dirty.on{background:#d9b26a}
.sx-sel{height:28px;max-width:170px;padding:0 24px 0 9px;border:0;border-radius:7px;font:400 12px var(--font);color:var(--sx-ink);background:rgba(255,255,255,.05) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='6' fill='none' stroke='%23aab0ad' stroke-width='1.3'%3E%3Cpath d='M1 1l3.5 3.5L8 1'/%3E%3C/svg%3E") no-repeat right 8px center;box-shadow:inset 0 0 0 1px var(--sx-l);-webkit-appearance:none;appearance:none;cursor:pointer}
.sx-sel:hover{background-color:rgba(255,255,255,.08)}
.sx-sel option{background:#151717;color:#e8eae8}
.sx-sep{width:1px;height:20px;background:var(--sx-l2);margin:0 4px;flex:none}
.sx-sp{flex:1}
.sx-ib{display:inline-grid;place-items:center;width:30px;height:30px;padding:0;border:0;border-radius:7px;background:none;color:#c9cdcb;cursor:pointer;position:relative;flex:none}
.sx-ib:hover{background:rgba(255,255,255,.07);color:var(--sx-hi)}
.sx-ib[disabled]{opacity:.32;cursor:default;background:none}
.sx-ib svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.sx-ib[aria-pressed=true]{background:rgba(255,255,255,.12);color:var(--sx-hi);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),inset 0 0 0 1px rgba(255,255,255,.06)}
.sx-tb{height:28px;padding:0 11px;border:0;border-radius:7px;color:var(--sx-ink);cursor:pointer;white-space:nowrap;flex:none;
  background:linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,.03) 60%,rgba(255,255,255,.06));box-shadow:inset 0 1px 0 rgba(255,255,255,.13),inset 0 0 0 1px rgba(255,255,255,.07)}
.sx-tb:hover{background:linear-gradient(180deg,rgba(255,255,255,.15),rgba(255,255,255,.05) 60%,rgba(255,255,255,.09))}
.sx-tb.pri{color:#121414;background:linear-gradient(180deg,#f7f8f6,#dadedb);box-shadow:inset 0 1px 0 #fff,0 0 0 1px rgba(0,0,0,.4)}
.sx-tb.pri:hover{background:linear-gradient(180deg,#fff,#e6e9e6)}
/* tooltips */
[data-tip]{position:relative}
[data-tip]:hover::after,[data-tip]:focus-visible::after{content:attr(data-tip);position:absolute;z-index:40;left:50%;top:calc(100% + 6px);transform:translateX(-50%);white-space:nowrap;padding:5px 8px;border-radius:6px;
  font:400 11px/1.2 var(--font);color:#e8eae8;background:#1c1f1e;box-shadow:0 0 0 1px rgba(255,255,255,.08),0 8px 18px -6px rgba(0,0,0,.8);pointer-events:none}
.sx-rail [data-tip]:hover::after,.sx-rail [data-tip]:focus-visible::after{left:calc(100% + 8px);top:50%;transform:translateY(-50%)}
/* rail */
.sx-rail{display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 0;border-right:1px solid var(--sx-l);background:var(--sx-p)}
.sx-rail hr{width:22px;border:0;border-top:1px solid var(--sx-l2);margin:4px 0}
/* canvas */
.sx-cv{position:relative;overflow:hidden;background:radial-gradient(70% 60% at 50% 46%,#131515,#0b0c0c 70%);touch-action:none;outline:none}
.sx-cv.t-orbit{cursor:grab}.sx-cv.t-light{cursor:crosshair}.sx-cv.t-zoom{cursor:zoom-in}.sx-cv.grab{cursor:grabbing}
.sx-cv.checker .sx-stage{background:repeating-conic-gradient(#161818 0 25%,#0f1111 0 50%) 0 0/16px 16px}
.sx-stage{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:4px}
.sx-stage .sph-c{position:absolute;inset:0;width:100%;height:100%;display:block}
.sx-frame{position:absolute;inset:0;border-radius:4px;box-shadow:0 0 0 1px rgba(255,255,255,.06);pointer-events:none}
.sx-hud{position:absolute;left:10px;bottom:10px;display:flex;gap:6px;align-items:center;font:400 11px var(--mono);color:var(--sx-m);pointer-events:none}
.sx-hud b{font-weight:400;color:#c9cdcb;padding:3px 6px;border-radius:5px;background:rgba(0,0,0,.45);box-shadow:inset 0 0 0 1px var(--sx-l)}
.sx-zoom{position:absolute;right:10px;bottom:10px;display:flex;gap:2px;padding:2px;border-radius:8px;background:rgba(17,19,19,.85);box-shadow:inset 0 0 0 1px var(--sx-l)}
.sx-zoom .sx-ib{width:26px;height:26px}
.sx-cv .st-screen,.sx-cv .st-cap,.sx-cv .st-kit{position:fixed}
/* inspector */
.sx-ins{display:flex;flex-direction:column;min-height:0;border-left:1px solid var(--sx-l);background:var(--sx-p)}
.sx-tabs{display:flex;gap:2px;padding:6px 8px;border-bottom:1px solid var(--sx-l);flex:none;overflow-x:auto;scrollbar-width:none}
.sx-tab{height:26px;padding:0 10px;border:0;border-radius:6px;background:none;color:var(--sx-m);cursor:pointer;white-space:nowrap;font:500 11.5px var(--font)}
.sx-tab:hover{color:var(--sx-ink)}
.sx-tab[aria-selected=true]{color:var(--sx-hi);background:rgba(255,255,255,.08);box-shadow:inset 0 1px 0 rgba(255,255,255,.08)}
.sx-chips{display:none}
.sx-body{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.14) transparent}
.sx-sec{border-bottom:1px solid var(--sx-l)}
.sx-sh{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:8px;width:100%;height:32px;padding:0 12px;cursor:pointer;font:600 10px/1 var(--font);letter-spacing:.09em;text-transform:uppercase;color:#aeb4b1}
.sx-sh:hover{color:var(--sx-hi);background:rgba(255,255,255,.02)}
.sx-sh svg{width:9px;height:9px;stroke:currentColor;fill:none;stroke-width:1.6;transition:transform .16s}
.sx-sh[aria-expanded=false] svg{transform:rotate(-90deg)}
.sx-sh .n{margin-left:auto;font:400 10px var(--mono);letter-spacing:0;text-transform:none;color:var(--sx-m2)}
.sx-rows{padding:2px 12px 10px;display:grid;gap:2px}
.sx-row{display:grid;grid-template-columns:92px minmax(0,1fr) 58px;gap:8px;align-items:center;min-height:26px}
.sx-row.full{grid-template-columns:92px minmax(0,1fr)}
.sx-row.one{grid-template-columns:1fr}
.sx-lab{color:#b9bebb;font-size:11.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;user-select:none;-webkit-user-select:none}
.sx-lab[data-scrub]{cursor:ew-resize}
.sx-lab[data-scrub]:hover{color:var(--sx-hi)}
.sx-lab.mod{color:var(--sx-hi)}
.sx-lab.mod::before{content:"";display:inline-block;width:4px;height:4px;border-radius:50%;background:#d9b26a;margin:0 5px 1px 0;vertical-align:middle}
.sx-rng{-webkit-appearance:none;appearance:none;width:100%;height:18px;margin:0;background:none;cursor:pointer;--p:50%}
.sx-rng::-webkit-slider-runnable-track{height:2px;border-radius:2px;background:linear-gradient(90deg,#cfd3d0 var(--p),rgba(255,255,255,.12) var(--p))}
.sx-rng::-moz-range-track{height:2px;background:rgba(255,255,255,.12)}
.sx-rng::-moz-range-progress{height:2px;background:#cfd3d0}
.sx-rng::-webkit-slider-thumb{-webkit-appearance:none;width:11px;height:11px;margin-top:-4.5px;border-radius:50%;background:#f1f2f0;box-shadow:0 0 0 1px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.6)}
.sx-rng::-moz-range-thumb{width:11px;height:11px;border:0;border-radius:50%;background:#f1f2f0}
.sx-num{box-sizing:border-box;width:100%;height:22px;padding:0 5px;border:0;border-radius:5px;background:var(--sx-f);color:var(--sx-ink);font:400 11px var(--mono);text-align:right;box-shadow:inset 0 0 0 1px var(--sx-l);-moz-appearance:textfield}
.sx-num::-webkit-inner-spin-button,.sx-num::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
.sx-num:focus{outline:0;box-shadow:inset 0 0 0 1px rgba(236,238,235,.55)}
.sx-nw{position:relative}.sx-nw i{position:absolute;left:5px;top:50%;transform:translateY(-50%);font:normal 9.5px var(--mono);color:var(--sx-m2);pointer-events:none}
.sx-col{display:flex;gap:6px;align-items:center}
.sx-col input[type=color]{flex:none;width:26px;height:22px;padding:0;border:0;border-radius:5px;background:none;cursor:pointer}
.sx-col input[type=color]::-webkit-color-swatch-wrapper{padding:0}.sx-col input[type=color]::-webkit-color-swatch{border:0;border-radius:5px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.15)}
.sx-col .sx-num{text-align:left;width:84px}
.sx-row .sx-sel{width:100%;max-width:none;height:24px}
.sx-seg{display:flex;gap:2px;padding:2px;border-radius:7px;background:var(--sx-f);box-shadow:inset 0 0 0 1px var(--sx-l)}
.sx-seg button{flex:1;height:20px;border:0;border-radius:5px;background:none;color:var(--sx-m);cursor:pointer;font:500 11px var(--font)}
.sx-seg button[aria-pressed=true]{color:var(--sx-hi);background:rgba(255,255,255,.1)}
.sx-acts{display:flex;flex-wrap:wrap;gap:6px;padding:4px 0 2px}
.sx-hint{color:var(--sx-m);font-size:11px;margin:2px 0 6px}
.sx-kbd{font:400 10px var(--mono);color:var(--sx-m);padding:1px 4px;border-radius:4px;box-shadow:inset 0 0 0 1px var(--sx-l2)}
/* designs */
.sx-pad{padding:12px}
.sx-h{margin:0 0 8px;font:600 10px/1 var(--font);letter-spacing:.09em;text-transform:uppercase;color:#aeb4b1}
.sx-ds{display:grid;gap:6px;margin-bottom:16px}
.sx-d{display:grid;grid-template-columns:44px minmax(0,1fr) auto;gap:8px;align-items:center;padding:6px;border-radius:8px;background:var(--sx-p2);box-shadow:inset 0 0 0 1px var(--sx-l)}
.sx-d.cur{box-shadow:inset 0 0 0 1px rgba(236,238,235,.4)}
.sx-d img,.sx-d .ph{width:44px;height:44px;border-radius:6px;object-fit:cover;background:#0b0c0c}
.sx-d input{all:unset;box-sizing:border-box;width:100%;padding:3px 5px;border-radius:5px;font:500 12px var(--font);color:var(--sx-ink)}
.sx-d input:focus{background:var(--sx-f);box-shadow:inset 0 0 0 1px rgba(236,238,235,.4)}
.sx-d small{display:block;padding:0 5px;color:var(--sx-m);font-size:10.5px}
.sx-d .ab{display:flex;gap:0}
.sx-d .sx-ib{width:26px;height:26px}
.sx-empty{color:var(--sx-m);margin:0 0 14px}
.sx-vers{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px}
.sx-ver{height:26px;padding:0 4px;border:0;border-radius:6px;background:var(--sx-p2);color:#c9cdcb;cursor:pointer;font:400 11px var(--font);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-shadow:inset 0 0 0 1px var(--sx-l)}
.sx-ver:hover{color:var(--sx-hi);background:#1b1e1d}.sx-ver[aria-pressed=true]{color:var(--sx-hi);box-shadow:inset 0 0 0 1px rgba(236,238,235,.45)}
.sx-ea{padding:12px}.sx-ea .fl span,.sx-ea .note{color:var(--sx-m)}.sx-ea .note a{color:var(--sx-ink)}.sx-ea .tl{color:var(--sx-ink)}.sx-ea .wl{margin-top:12px}.sx-ea textarea{width:100%;box-sizing:border-box;resize:vertical;min-height:64px}
.sx-ea .access{color:var(--sx-m);margin:0 0 12px}
/* export dialog */
.sx-modal{position:fixed;inset:0;z-index:60;display:grid;place-items:center;padding:16px;background:rgba(0,0,0,.6);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}
.sx-dlg{box-sizing:border-box;width:min(680px,100%);max-height:calc(100vh - 32px);max-height:calc(100svh - 32px);display:flex;flex-direction:column;border-radius:14px;color:var(--sx-ink);
  background:linear-gradient(180deg,#171a19,#111313);box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 0 0 1px rgba(255,255,255,.08),0 40px 90px -30px #000;font:400 12.5px/1.45 var(--font)}
.sx-dh{display:flex;align-items:center;gap:8px;padding:12px 12px 0 16px}
.sx-dh h2{margin:0;font:500 14px var(--font);flex:1}
.sx-dlg .sx-tabs{border:0;padding:10px 12px 0}
.sx-db{padding:10px 16px 16px;overflow:auto;min-height:0}
.sx-db p{margin:0 0 10px;color:#aeb4b1}
.sx-code{box-sizing:border-box;width:100%;height:190px;padding:10px 12px;border:0;border-radius:8px;resize:vertical;background:#0a0b0b;color:#d6dad7;font:400 11.5px/1.5 var(--mono);box-shadow:inset 0 0 0 1px var(--sx-l);white-space:pre;overflow:auto}
.sx-db .sx-acts{margin-top:10px}
.sx-prev{display:block;width:120px;height:120px;border-radius:8px;margin:0 0 10px;background:#0b0c0c;box-shadow:inset 0 0 0 1px var(--sx-l)}
/* mobile: canvas on top, inspector as a bottom sheet with tabs */
@media (max-width:820px){
  .sx{grid-template-columns:minmax(0,1fr);grid-template-rows:auto minmax(0,1fr) auto 50%}
  .sx-top{grid-column:1;flex-wrap:wrap;row-gap:4px;padding:6px 8px;overflow:hidden}
  .sx-name{width:auto;flex:1;max-width:none;min-width:80px}
  .sx-doc{flex:1 1 100%}
  .sx-top .sx-sel{flex:1;min-width:0;max-width:none}
  .sx-top .sx-sp,.sx-top .hide-m{display:none}
  .sx-rail{grid-row:3;flex-direction:row;justify-content:center;border:0;border-top:1px solid var(--sx-l);padding:4px 8px;gap:2px;overflow-x:auto}
  .sx-rail hr{width:1px;height:18px;border:0;border-left:1px solid var(--sx-l2);margin:0 4px}
  .sx-rail [data-tip]:hover::after{display:none}
  .sx-cv{grid-row:2;grid-column:1}
  .sx-ins{grid-row:4;border:0;border-top:1px solid var(--sx-l2);border-radius:14px 14px 0 0;box-shadow:0 -18px 40px -20px #000}
  .sx-ins::before{content:"";display:block;width:36px;height:4px;border-radius:4px;background:rgba(255,255,255,.18);margin:6px auto 0}
  .sx-chips{display:flex;gap:4px;padding:6px 8px;overflow-x:auto;scrollbar-width:none;border-bottom:1px solid var(--sx-l)}
  .sx-chips button{flex:none;height:26px;padding:0 10px;border:0;border-radius:999px;background:var(--sx-p2);color:var(--sx-m);font:500 11.5px var(--font);box-shadow:inset 0 0 0 1px var(--sx-l)}
  .sx-chips button[aria-pressed=true]{color:#121414;background:#e8eae8}
  .sx-sec.m-off{display:none}
  .sx-sh{pointer-events:none}.sx-sh svg{display:none}
  .sx-rows[hidden]{display:grid!important}
  .sx-row{grid-template-columns:86px minmax(0,1fr) 56px;min-height:32px}
  .sx-rng{height:28px}
  .sx-hud{display:none}
  [data-tip]:hover::after{display:none}
}
/* depth pass (owner 2026-10-14): no box around the Orb; a deep studio space with a light pool, floor and vignette */
.sx-cv{background:radial-gradient(60% 55% at 50% 44%,#1a1d1c 0,#0e100f 55%,#060707 100%)}
.sx-frame{display:none}
.sx-cv.checker .sx-frame{display:block}
.sx-stage{border-radius:50%}
.sx-cv.checker .sx-stage{border-radius:4px}
.sx-pool,.sx-floor,.sx-vig{position:absolute;pointer-events:none}
.sx-pool{left:50%;top:46%;width:min(92%,92vh);aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(closest-side,rgba(226,232,229,.16),rgba(200,208,205,.06) 55%,transparent)}
.sx-floor{left:50%;top:calc(50% + min(26vh,24vw));width:min(62%,60vh);height:min(7%,7vh);transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.75),rgba(0,0,0,.3) 60%,transparent),radial-gradient(closest-side,rgba(235,240,238,.1),transparent);filter:blur(2px)}
.sx-floor::after{content:"";position:absolute;left:15%;right:15%;top:-30%;height:100%;border-radius:50%;background:radial-gradient(closest-side,rgba(240,244,242,.12),transparent)}
.sx-vig{inset:0;background:radial-gradient(120% 90% at 50% 45%,transparent 55%,rgba(0,0,0,.55))}
.sx-cv.checker .sx-pool,.sx-cv.checker .sx-floor,.sx-cv.checker .sx-vig{display:none}
.sx-hud,.sx-zoom{z-index:2}
.sx-zoom{background:none;box-shadow:none;opacity:.55;transition:opacity .2s}
.sx-zoom:hover,.sx-zoom:focus-within{opacity:1}
.sx-top{position:relative;z-index:3;box-shadow:0 10px 24px -14px #000}
.sx-rail{position:relative;z-index:2;box-shadow:8px 0 24px -16px #000}
.sx-ins{position:relative;z-index:2;background:linear-gradient(180deg,#141616,#101212);box-shadow:-14px 0 34px -18px #000,inset 1px 0 0 rgba(255,255,255,.03)}
.sx-sec{background:linear-gradient(180deg,rgba(255,255,255,.012),transparent)}
/* glass read on black: deeper core, brighter rim, a soft specular (viewport only; exports are untouched) */
.sx-cv:not(.checker) .sx-stage .sph-c{filter:contrast(1.32) brightness(.9)}
.sx-cv:not(.checker) .sx-stage::before,.sx-cv:not(.checker) .sx-stage::after{content:"";position:absolute;inset:11.5%;border-radius:50%;pointer-events:none;mix-blend-mode:screen}
.sx-cv:not(.checker) .sx-stage::before{background:radial-gradient(22% 15% at 34% 24%,rgba(255,255,255,.55),rgba(255,255,255,.12) 60%,transparent),radial-gradient(30% 10% at 58% 88%,rgba(236,242,240,.22),transparent)}
.sx-cv:not(.checker) .sx-stage::after{background:radial-gradient(circle,transparent 60%,rgba(230,238,236,.05) 66%,rgba(255,255,255,.28) 70.6%,transparent 71%)}
.sx-stage[hidden]{display:none}
.sx-more,.sx-grab{display:none}
@media (max-width:820px){
  .sx{grid-template-rows:auto minmax(0,1fr) auto auto}
  .sx-top{flex-wrap:nowrap;padding:5px 6px;gap:2px}
  .sx-doc{flex:1 1 auto;min-width:0}
  .sx-doc .sx-sel,.sx-top [data-resetall]{display:none}
  .sx-more{display:inline-grid}
  .sx.more-open .sx-top{flex-wrap:wrap}
  .sx.more-open .sx-doc{flex:1 1 100%;order:9;flex-wrap:wrap;padding-top:4px}
  .sx.more-open .sx-doc .sx-sel,.sx.more-open .sx-top [data-resetall]{display:inline-block}
  .sx.more-open .sx-top [data-resetall]{display:inline-grid}
  .sx-name{min-width:60px}
  .sx-tb{padding:0 9px}
  .sx-cv{grid-row:2;grid-column:1}
  .sx-rail{grid-row:2;grid-column:1;align-self:start;justify-self:start;flex-direction:column;margin:10px;padding:4px;border:0;border-radius:12px;gap:2px;overflow:visible;z-index:3;
    background:rgba(18,20,20,.62);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:inset 0 0 0 1px rgba(255,255,255,.07),0 10px 26px -12px #000}
  .sx-rail hr{width:18px;height:0;border:0;border-top:1px solid var(--sx-l2);margin:2px 0}
  .sx-rail .sx-ib{width:36px;height:36px}
  .sx-zoom{opacity:.7}.sx-zoom .sx-ib{width:36px;height:36px}
  .sx-pool{width:min(96%,70vh)}
  .sx-floor{top:calc(50% + min(22vh,34vw));width:70%}
  .sx-grab{display:grid;place-items:center;grid-row:3;grid-column:1;height:22px;border:0;padding:0;margin-top:-12px;border-radius:16px 16px 0 0;z-index:4;cursor:grab;touch-action:none;
    background:linear-gradient(180deg,#191c1b,#141616);box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 -16px 36px -14px #000}
  .sx-grab i{width:38px;height:4px;border-radius:4px;background:rgba(255,255,255,.28)}
  .sx-ins{grid-row:4;height:min(46vh,46svh);border-radius:0;border:0;box-shadow:none;background:#141616;transition:height .28s cubic-bezier(.2,.8,.2,1)}
  .sx-ins::before{display:none}
  .sx.peek .sx-ins{height:auto}
  .sx.peek .sx-body{display:none}
  .sx-tab{height:34px;padding:0 13px;font-size:12.5px}
  .sx-chips button{height:32px;padding:0 13px}
  .sx-num{height:28px}
  .sx-rng::-webkit-slider-thumb{width:20px;height:20px;margin-top:-9px}
}
/* Touch screens have no hover: the design name always shows it can be renamed. */
@media (hover:none){.sx-name{box-shadow:inset 0 0 0 1px var(--sx-l2)}}
/* Clear on the real Orb: controls it does not have yet stay visible, dimmed. */
.sx-row.sx-off{display:none}
.sx-offn{margin:6px 0 2px;font-size:12px;line-height:1.4;color:rgba(255,255,255,.42)}

/* Touch workspace: controls remain reachable above a phone's home indicator. */
@media (max-width:820px){
  .sx{bottom:env(safe-area-inset-bottom,0px)}
  .sx:not(.peek) .sx-rail{flex-direction:row;max-width:calc(100% - 20px);box-sizing:border-box;overflow-x:auto;overflow-y:hidden;align-self:start}
  .sx:not(.peek) .sx-rail hr{width:0;height:18px;border:0;border-left:1px solid var(--sx-l2);margin:0 2px;flex:none}
  .sx-chips{flex-wrap:wrap;overflow:visible}
  .sx-chips button{min-height:40px}
  .sx-tab{min-height:40px}
  .sx-rng{height:40px;touch-action:none}
  .sx-row{min-height:44px}
  .sx-num,.sx-row .sx-sel{min-height:36px;font-size:16px}
  .sx-grab{min-height:40px}
  .sx-ib{min-width:40px;min-height:40px}
  .sx-name,.sx-tb{min-height:36px}
}

/* Short touch screens (from Codex 3472177, owner-approved): the tool rail stays inside the canvas
   and scrolls, so it never runs into the inspector, its tabs or the sound control. */
@media (max-width:820px) and (max-height:700px){
  .sx-rail{max-height:calc(100% - 32px);overflow-y:auto;scrollbar-width:none}   /* clear of the sheet handle's touch area */
}
.sx-k{flex-wrap:wrap;row-gap:4px}.sx-k button{flex:1 0 auto}
.sx-adv{justify-content:space-between;padding-top:2px}.sx-adv .sx-tb{font-size:11.5px}
.sx-lab[for]{cursor:ew-resize}
`;var Rr=[{id:"light-orb",name:"Light Orb",cat:"Orbs",sphere:"dawn",badge:"Live light",line:"The site\u2019s own light-in-glass Orb, with its light in your hands.",lede:"The Orb the site is built around: one real light inside thick glass. Move it, soften it, warm it, and watch the glass answer.",does:"Drag inside the glass to place the light. Intensity, size, glow, colour temperature and surface roughness change the same renderer the site uses \u2014 no pre-rendered frames.",hint:"Drag inside the glass to move the light."},{id:"voice-orb",name:"Talking Orb",cat:"Interaction",sphere:"core",badge:"Voice",line:"An Orb that answers your voice, live, after you turn the microphone on.",lede:"The guide Orb\u2019s voice response, open to you: speak and the light inside the glass answers your voice.",does:"Turn the microphone on and speak. Your voice level moves the Orb exactly as the guide moves when it talks. The sound is analysed in this tab only: never played back, recorded or sent.",hint:"Turn the microphone on, then speak."}],_n=e=>Rr.find(a=>a.id===e);function vr(e){let a=e/100,o=i=>Math.max(0,Math.min(255,Math.round(i))),t=a<=66?255:329.698727446*(a-60)**-.1332047592,d=a<=66?99.4708025861*Math.log(a)-161.1195681661:288.1221695283*(a-60)**-.0755148492,p=a>=66?255:a<=19?0:138.5177312231*Math.log(a-10)-305.0447927307;return"#"+[t,d,p].map(i=>o(i).toString(16).padStart(2,"0")).join("")}var Yo=[{k:"strength",l:"Intensity",min:0,max:1,step:.01,path:["light","strength"]},{k:"spread",l:"Size & softness",min:0,max:1,step:.01,path:["light","spread"]},{k:"glow",l:"Glow",min:0,max:1,step:.01,path:["light","glow"]},{k:"kelvin",l:"Temperature",min:2200,max:7500,step:50,unit:" K"},{k:"roughness",l:"Surface roughness",min:0,max:.5,step:.01,path:["shell","roughness"]}],so={idle:["Microphone off","Not activated. Nothing is heard until you turn it on."],requesting:["Asking permission\u2026","Your browser is asking whether this page may use the microphone."],listening:["Listening","Speak \u2014 the Orb answers your voice."],responding:["Responding","The Orb is answering your voice."],muted:["Muted","The microphone is off. Turn it on to continue."],denied:["Permission denied","Allow microphone access for this site in your browser, then try again."],unavailable:["Unavailable",""]};function Wn(e,a){let{page:o,product:t,audio:d,esc:p,ICON:i,footer:l,cleanup:c,track:f}=a,{deskHTML:h,bindDesk:b,storyOf:$}=a.desk,K=e.id==="voice-orb",s=Ht(ga("original").config),M=Ht(s),A=3600;if(K||(Object.assign(M.light,{strength:.95,glow:.55,spread:.6}),M.light.colour=vr(A),Object.assign(s.light,M.light)),o.innerHTML=`
    <section class="pd lv">
      <a class="back tl" href="#/products">${i.back}<span>Products</span></a>
      <div class="pd-grid">
        <div class="pd-stage glass lv-stage" data-stage><div class="lv-host" data-live role="${K?"img":"application"}" aria-label="${p(e.name)}: ${K?"responds to your voice":"drag to move the light; arrow keys work too"}"${K?"":' tabindex="0"'}></div>
          ${K?"":`<span class="pd-hint">${p(e.hint)}</span>`}
          ${K?`<div class="lv-mic" data-state="idle"><button class="gb gc lv-mic-b" type="button" data-mic aria-pressed="false" aria-describedby="lv-mic-d"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg></button>
            <div class="lv-mic-t" aria-live="polite"><b data-mic-s>${so.idle[0]}</b><small id="lv-mic-d" data-mic-d>${so.idle[1]}</small></div><i class="lv-meter" aria-hidden="true"><i></i></i></div>`:""}
        </div>
        <div class="pd-info info-dark">
          <p class="kicker">${K?"Voice \xB7 Interaction":"Light \xB7 Orbs"}</p><h1>${p(e.name)}</h1>
          <p class="lede">${p(e.lede)}</p>
          ${K?"":`<div class="lv-ctl" data-ctl>${Yo.map(N=>{let X=N.k==="kelvin"?A:N.path.reduce((T,E)=>T[E],M);return`<label class="lv-row"><span>${N.l}</span><input type="range" min="${N.min}" max="${N.max}" step="${N.step}" value="${X}" data-k="${N.k}"><output>${Uo(X,N)}</output></label>`}).join("")}<div class="lv-acts"><button class="gb small" type="button" data-reset>Reset</button></div></div>`}
          <p class="price">Price on request</p>
          <div class="acts eq">${mr(e.id,e.name,{label:"Ask for price",mode:"price"})}</div>
          <dl class="facts ds-facts"><dt>What it does</dt><dd>${p(e.does)}</dd>
            <dt>Availability</dt><dd>Try it here, free, no sign-up. It is priced for each project: use Ask for price and I\u2019ll reply by email.</dd>
            ${K?"<dt>Privacy</dt><dd>The microphone starts only when you press its button and stops when you leave the page or hide the tab. The sound stays in this tab.</dd>":""}
            <dt>Questions</dt><dd><a href="mailto:hello@thelightorb.com">hello@thelightorb.com</a></dd></dl>
        </div>
      </div>
    </section>${$(e.id,e.name)?h($(e.id,e.name)):""}${l()}`,fr(o,{audio:d}),$(e.id,e.name)){let N=b(o,{story:$(e.id,e.name),reduced:a.reduced,demos:{},act:{top:()=>o.querySelector(".pd")?.scrollIntoView({behavior:a.reduced?"auto":"smooth",block:"start"})}});c.push(()=>N.dispose())}let P=o.querySelector("[data-stage]"),F=o.querySelector("[data-live]"),I={};t.show(M,I),f?.("product_open",{product:e.id});let B=()=>t.update(M,I);if(K){let de=function(){w=requestAnimationFrame(de),q=ne.sample(),t.orb?.setSpeech(Math.min(1,q*1.6)),C.style.transform=`scaleX(${Math.min(1,q*2).toFixed(3)})`,ae(q>.12?"responding":"listening")},N=P.querySelector(".lv-mic"),X=N.querySelector("[data-mic]"),T=N.querySelector("[data-mic-s]"),E=N.querySelector("[data-mic-d]"),C=N.querySelector(".lv-meter>i"),_=!1,w=0,q=0,V="",ae=(ke,$e)=>{V===ke&&!$e||(V=ke,N.dataset.state=ke,T.textContent=so[ke][0],E.textContent=$e||so[ke][1],X.setAttribute("aria-pressed",String(ke==="listening"||ke==="responding")),X.setAttribute("aria-label",ke==="listening"||ke==="responding"?"Turn the microphone off":ke==="requesting"?"Cancel the microphone request":"Turn the microphone on"))},re=!globalThis.navigator?.mediaDevices?.getUserMedia,ne=d.microphone({onState({status:ke,error:$e}){if(ke==="listening"){_=!0,ae("listening"),w||(w=requestAnimationFrame(de));return}cancelAnimationFrame(w),w=0,q=0,t.orb?.setSpeech(0),C.style.transform="scaleX(0)",ke==="requesting"?ae("requesting"):ke==="error"?ae(/^Allow/.test($e)?"denied":"unavailable",$e):ae(_?"muted":"idle")}});re&&(ae("unavailable","This browser does not offer microphone input here (it needs HTTPS or localhost and a supported browser)."),X.disabled=!0),X.addEventListener("click",()=>{d.sfx("select"),ne.toggle()}),c.push(()=>{cancelAnimationFrame(w),ne.dispose(),t.orb?.setSpeech(0)})}else{let N=(C,_)=>{let w=F.getBoundingClientRect(),q=Math.min(w.width,w.height)*.8,V=2/q;M.light.x=Math.max(-.62,Math.min(.62,(C-w.left-w.width/2)*V)),M.light.y=Math.max(-.62,Math.min(.62,-(_-w.top-w.height/2)*V)),B()},X=!1;F.addEventListener("pointerdown",C=>{X=!0,F.setPointerCapture(C.pointerId),N(C.clientX,C.clientY),d.sfx("select")}),F.addEventListener("pointermove",C=>{X&&N(C.clientX,C.clientY)});let T=()=>{X=!1};F.addEventListener("pointerup",T),F.addEventListener("pointercancel",T),F.addEventListener("keydown",C=>{let _={ArrowLeft:[-.05,0],ArrowRight:[.05,0],ArrowUp:[0,.05],ArrowDown:[0,-.05]}[C.key];_&&(C.preventDefault(),M.light.x=Math.max(-.62,Math.min(.62,M.light.x+_[0])),M.light.y=Math.max(-.62,Math.min(.62,M.light.y+_[1])),B())});let E=o.querySelector("[data-ctl]");E.addEventListener("input",C=>{let _=Yo.find(q=>q.k===C.target.dataset.k);if(!_)return;let w=+C.target.value;if(_.k==="kelvin")A=w,M.light.colour=vr(w);else{let[q,V]=_.path;M[q][V]=w}C.target.nextElementSibling.textContent=Uo(w,_),B()}),E.querySelector("[data-reset]").addEventListener("click",()=>{Object.assign(M.light,structuredClone(s.light)),Object.assign(M.shell,structuredClone(s.shell)),A=3600,M.light.colour=vr(A),E.querySelectorAll("input").forEach(C=>{let _=Yo.find(q=>q.k===C.dataset.k),w=_.k==="kelvin"?A:_.path.reduce((q,V)=>q[V],M);C.value=w,C.nextElementSibling.textContent=Uo(w,_)}),B(),d.sfx("select")})}return c.push(()=>t.hide()),{id:e.id,el:P,host:F}}var Uo=(e,a)=>a.k==="kelvin"?`${e} K`:a.max<=1?e.toFixed(2):String(e),Yn=`
.lv-stage{position:relative;display:grid;place-items:center;min-height:min(560px,70vh)}
.lv-host{position:absolute;inset:8% 8% 22%;border-radius:50%;cursor:crosshair;touch-action:none;outline:none}
.lv-host:focus-visible{box-shadow:0 0 0 2px var(--ink)}
.lv-ctl{display:flex;flex-direction:column;gap:10px;margin:18px 0 6px;padding:14px 0;border-top:1px solid var(--line,rgba(38,40,39,.1));border-bottom:1px solid var(--line,rgba(38,40,39,.1))}
.lv-row{display:grid;grid-template-columns:minmax(110px,1fr) 2fr 60px;align-items:center;gap:12px;font-size:13px;color:var(--muted)}
.lv-row input{width:100%;accent-color:var(--ink)}.lv-row output{text-align:right;font-variant-numeric:tabular-nums;color:var(--soft,var(--muted))}
.lv-acts{display:flex;gap:8px;flex-wrap:wrap;padding-top:4px}
.lv-mic{position:absolute;left:50%;bottom:18px;translate:-50% 0;display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:8px 16px 8px 8px;border-radius:999px;background:rgba(255,255,255,.55);box-shadow:0 0 0 1px rgba(38,40,39,.08);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}
.lv-mic-t{display:flex;flex-direction:column;gap:2px;min-width:0}.lv-mic-t b{font:500 13px/1.2 var(--font)}.lv-mic-t small{font-size:11.5px;line-height:1.3;color:var(--muted)}
.lv-meter{position:absolute;left:24px;right:24px;bottom:4px;height:2px;border-radius:2px;overflow:hidden;opacity:0;transition:opacity .3s}.lv-meter>i{display:block;height:100%;background:var(--ink);transform-origin:0 50%;transform:scaleX(0)}
.lv-mic[data-state=listening] .lv-meter,.lv-mic[data-state=responding] .lv-meter{opacity:.6}
.lv-mic[data-state=listening] .lv-mic-b,.lv-mic[data-state=responding] .lv-mic-b{box-shadow:0 0 0 2px var(--ink)}
.lv-mic[data-state=denied] b,.lv-mic[data-state=unavailable] b{color:#9a3b2e}
html[data-theme=dark] .lv-mic{background:rgba(20,21,22,.6);box-shadow:0 0 0 1px rgba(255,255,255,.1)}
html[data-theme=dark] .lv-mic[data-state=denied] b,html[data-theme=dark] .lv-mic[data-state=unavailable] b{color:#e7a091}
.file-v .lv-badge{position:absolute;right:10px;top:10px;z-index:2;display:inline-flex;align-items:center;gap:6px;font:500 10px/1 var(--mono,ui-monospace,monospace);padding:5px 7px;border-radius:7px;background:rgba(255,255,255,.72);color:var(--ink);pointer-events:none}
html[data-theme=dark] .file-v .lv-badge{background:rgba(22,23,24,.62);color:#e9eae8}
.file-v .lv-badge svg{width:11px;height:11px}
@media (max-width:700px){.lv-row{grid-template-columns:1fr 54px}.lv-row span{grid-column:1/-1}.lv-stage{min-height:420px}}
`;var xt=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),yd=(e,a,o)=>e+(a-e)*o,Qo=.25,Kn=3,wd=40,kd=e=>Math.max(1,.9*(Number.isFinite(e)?e:1)),Sd=(e,a,o)=>Math.hypot(Math.max(o.l-e,0,e-o.r),Math.max(o.t-a,0,a-o.b));function $d(e,a,o,t){let d=(e.l+e.r)/2,p=(e.t+e.b)/2,i=Math.min(e.r-e.l,e.b-e.t)/2-o;for(let l of a)i=Math.min(i,Sd(d,p,l)-o);return Math.max(0,2*i/t)}function Zo(e,a,o){let t=Math.max(Qo,Math.min(Kn,o/Math.max(1,e))),d=xt(Number.isFinite(a)?a:1,Qo,t);return{zoom:d,size:Math.max(Math.min(wd,o),Math.min(e*d,o))}}function Ed(e,a,o,t){a!==e.shown&&(e.want=a);let d=Zo(o,e.want,t);return e.shown=d.zoom,d}var Un="lo:studio2",Jn=2,Vn=Math.PI/180,Ld="https://thelightorb.com/embed/v1/orb.js",At=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),Qn=e=>Gt.find(a=>a.id===e)??Gt[0];function Ja(e="orb",a="clear"){let o=Qn(a).id;return{v:Jn,version:1,family:sa(e)?e:"orb",preset:o,sph:dr(o),zoom:1,orb:Ht(ga("original").config),scene:{exposure:0,left:.65,right:.55,env:.5},view:{yaw:0,pitch:0,zoom:1},rot:0,slider:{length:420,height:92,tint:"#ffffff",tintAmount:0,preset:"original"},wave:{strength:.9,scale:80,exposure:1},bg:{exposure:1,horizon:.27,lamp:.8},ctl:{tint:"#ffffff",tintAmount:.1,depth:5,radius:999,blur:8}}}function Vo(e){let a=Ja(e?.family,e?.sph?.variant||(Gt.some(t=>t.id===e?.preset)?e.preset:"clear"));if(!e||typeof e!="object")return a;let o={...a};for(let t of["orb","scene","view","slider","wave","bg","ctl"])e[t]&&typeof e[t]=="object"&&(o[t]={...a[t],...structuredClone(e[t])});return e.orb?.light&&(o.orb=structuredClone(e.orb)),e.sph&&(o.sph=rn(dr(e.sph.variant||a.preset),e.sph)),typeof e.rot=="number"&&(o.rot=e.rot),typeof e.zoom=="number"&&(o.zoom=xt(Number.isFinite(e.zoom)?e.zoom:1,Qo,Kn)),o.preset=o.sph.variant,o}var Td=["bloom","core","points","glitter","beads","liquid"],Md=[["material","Material",()=>[["sph.base","Material","select",tn.map(([e,a])=>[e,a]),"What the sphere is made of"],["sph.material.tint","Tint","color","Main colour of the glass, metal or cloud"],["sph.material.accent","Accent","color","Second colour: porcelain edges, cloud highlights, bead sheen, liquid surface"],["sph.material.refraction","Refraction",0,2.5,.01,"\xD7","How strongly the glass bends the room (index of refraction)"],["sph.material.dispersion","Dispersion",0,1,.01,"%","Colour fringes: the rainbow split of light through glass"],["sph.material.frost","Frost",0,1,.01,"%","Roughness: from polished to frosted, diffuse reflections"],["sph.material.rim","Fresnel rim",0,3,.01,"\xD7","Brightness of reflections at the edge"],["sph.material.iridescence","Iridescence",0,1,.01,"%","Thin-film rainbow sheen at the rim"],["sph.material.opacity","Opacity",0,1,.01,"%","How much of the background shows through"],["sph.material.exposure","Exposure",.2,2.5,.01,"\xD7","Overall brightness of the sphere"]]],["interior","Interior",e=>Td.includes(e.sph.base)?[["sph.interior.amount",e.sph.base==="liquid"?"Density":"Amount",-1,1,.01,"%","How much is inside: more points, flakes, beads or cloud"],["sph.interior.size","Size",.3,2.5,.01,"\xD7","Scale of what is inside"],["sph.interior.speed","Motion",0,4,.01,"\xD7","Speed of the inner movement (also the metal and porcelain flow)"],["sph.interior.glow","Glow",0,3,.01,"\xD7","Brightness of what is inside"],...e.sph.base==="liquid"?[["sph.interior.fill","Fill level",0,1,.01,"%","How full the sphere is"]]:[]]:[["sph.interior.speed","Flow speed",0,4,.01,"\xD7","Speed of the surface flow and inner movement"]]],["light","Lighting",()=>[["sph.light.angle","Key angle",-180,180,1,"\xB0","Direction of the main soft box around the sphere"],["sph.light.height","Key height",-30,90,1,"\xB0","Height of the main soft box"],["sph.light.key","Key light",0,3,.01,"\xD7","Strength of the main soft box"],["sph.light.rim","Rim light",0,3,.01,"\xD7","Strength of the second (rim) soft box"],["sph.light.environment","Environment",0,2,.01,"\xD7","Brightness of the studio room reflected in the sphere"],["sph.light.horizon","Horizon",0,3,.01,"\xD7","The bright horizon line in reflections"],["sph.light.colour","Light colour","color","Colour of all the light"]]],["motion","Motion",()=>[["sph.motion.spin","Idle spin",-1.5,1.5,.01,"r/s","Turntable speed when nobody touches it (negative turns the other way)"],["sph.motion.tilt","Axis tilt",-1.2,1.2,.01,"rad","Rest tilt of the spin axis towards the viewer"],["sph.motion.roll","Axis roll",-1.6,1.6,.01,"rad","Sideways tilt of the spin axis"],["sph.motion.bob","Float",0,.4,.005,"r","Up-and-down float amplitude"],["sph.motion.bobSpeed","Float speed",0,3,.01,"Hz","Float cycles per second"],["sph.motion.breathe","Breathing",0,.12,.001,"%","Slow pulse of the size"],["sph.motion.pointer","Pointer follow",0,3,.01,"\xD7","How much it leans towards the pointer"],["sph.motion.stir","Tap stir",0,3,.01,"\xD7","How much a tap stirs what is inside"],["sph.motion.inertia","Drag inertia",0,2,.01,"\xD7","How long it keeps turning after a drag"],["sph.motion.speech","Speech pulse",0,3,.01,"\xD7","How much it pulses with a voice (test below)"]]],["scene","Scene",()=>[["sph.scene.background","Background","seg",[["none","None"],["solid","Solid"],["gradient","Gradient"]],"Transparent, a solid colour or a soft radial gradient"],["sph.scene.colour","Colour","color","Background colour (outer colour of the gradient)"],["sph.scene.colour2","Centre colour","color","Inner colour of the gradient"],["sph.scene.size","Sphere size",.3,1.2,.01,"%","Size of the sphere in its frame (leave room for the shadow)"],["sph.scene.shadow","Floor shadow",0,1,.01,"%","Soft contact shadow under the sphere"],["sph.scene.reflection","Reflection",0,1,.01,"%","Mirror reflection on the floor"]]]],Gn={scene:["Studio light",[["scene.exposure","Exposure",-2,2,.1,"EV"],["scene.left","Left light",0,1,.01,"%"],["scene.right","Right light",0,1,.01,"%"],["scene.env","Environment",0,1,.01,"%"]]],light:["Orb light",[["orb.light.colour","Colour","color"],["orb.light.strength","Strength",0,1,.01,"%"],["orb.light.x","Position X",-.6,.6,.01,"r"],["orb.light.y","Position Y",-.8,.6,.01,"r"]]],slider:["Capsule",[["slider.length","Length",240,600,1,"px"],["slider.height","Height",60,130,1,"px"],["slider.tint","Glass tint","color"],["slider.tintAmount","Tint amount",0,1,.01,"%"],["slider.preset","Orb thumb","select",Kr.map(e=>[e.id,e.name])]]],wave:["Wave",[["wave.strength","Strength",.1,1,.01,"%"],["wave.scale","Ring scale",40,140,1,"px"],["wave.exposure","Environment",0,1,.01,"%"]]],bg:["Environment",[["bg.exposure","Dark \u2192 warm",0,1,.01,"%"],["bg.horizon","Horizon",.15,.45,.01,"%"],["bg.lamp","Orb lamp (dark)",0,1,.01,"%"]]],ctl:["Crystal controls",[["ctl.tint","Tint","color"],["ctl.tintAmount","Tint amount",0,1,.01,"%"],["ctl.depth","Optical depth",0,10,.5,"px"],["ctl.radius","Corner radius",6,999,1,"px"],["ctl.blur","Backdrop blur",0,24,1,"px"]]]},qd={"orb-slider":["slider","light","scene"],"orb-wave":["wave"],"background-pack":["bg"],"crystal-controls":["ctl"]},Go=e=>e.family==="orb"?Md.map(([a,o,t])=>[a,o,t(e)]):qd[e.family].map(a=>[a,Gn[a][0],Gn[a][1]]),Xn=new Set(["sph.material.dispersion","sph.material.iridescence","sph.material.opacity","sph.material.rim","sph.interior.glow","sph.light.rim","sph.light.horizon","sph.motion.roll","sph.motion.bobSpeed","sph.motion.pointer","sph.motion.stir","sph.motion.inertia","sph.motion.speech","sph.scene.colour2","sph.scene.reflection"]),Ad=[[1900,"Candle"],[2700,"Warm"],[4e3,"Neutral"],[5600,"Daylight"],[6500,"Cool"],[8500,"Sky"]],Cd=e=>typeof e[2]=="number",Xo=e=>e[5]==="%"?100:1,jd={undo:'<path d="M9 7H4V2"/><path d="M4 7a9 9 0 1 1-1 7"/>',redo:'<path d="M15 7h5V2"/><path d="M20 7a9 9 0 1 0 1 7"/>',orbit:'<circle cx="12" cy="12" r="8"/><ellipse cx="12" cy="12" rx="8" ry="3"/>',light:'<circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',zoom:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M8.5 11h5M11 8.5v5"/>',reset:'<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>',stir:'<path d="M4 15c3-6 6 6 9 0s6-6 7 0"/>',bg:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/>',fit:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',more:'<circle cx="6" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18" cy="12" r="1"/>',plus:'<path d="M12 6v12M6 12h12"/>',minus:'<path d="M6 12h12"/>',chev:'<path d="M2 3.5l2.5 2.5L7 3.5"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',open:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v6H4V6h6"/>',dup:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',del:'<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"/>',sound:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'},Rt=(e,a="0 0 24 24")=>`<svg viewBox="${a}" aria-hidden="true">${jd[e]}</svg>`,zd=typeof navigator<"u"&&/Mac|iP/.test(navigator.platform||navigator.userAgent),Na=zd?"\u2318":"Ctrl+",Ko=!1;function Od(){if(Ko||document.getElementById("sx-css")){Ko=!0;return}let e=document.createElement("style");e.id="sx-css",e.textContent=Hn,document.head.append(e),Ko=!0}function Zn({api:e,audio:a,top:o,page:t,query:d,ICON:p,flash:i,product:l,store:c}){Od();let f=new Proxy({},{get:(m,g)=>(...v)=>l.orb?.[g]?.(...v)});function h(){return s.family==="orb"&&s.preset==="clear"&&s.sph?.base==="clear"}let b=new Set(["sph.base","sph.material.tint","sph.material.refraction","sph.material.frost","sph.material.exposure","sph.interior.amount","sph.interior.size","sph.interior.speed","sph.interior.glow","sph.light.key","sph.light.environment","sph.light.colour","sph.motion.spin","sph.motion.stir","sph.motion.speech"]),$=()=>Tn(s.sph),K=()=>({dark:!0,envBoost:s.sph.light.environment,envLevel:s.sph.light.environment,keyLevel:s.sph.light.key,exposure:Math.log2(Math.max(.05,s.sph.material.exposure))*2,left:.65,right:.55}),s;try{let m=JSON.parse(sessionStorage.getItem(Un));s=m&&m.v===Jn?Vo(m):null}catch{s=null}if(s||(s=Ja()),d.design&&c.design(d.design)){let m=c.design(d.design);s=Vo({...structuredClone(m.draft),family:m.family}),s.designId=m.id,s.designName=m.name}else d.family&&sa(d.family)&&(d.family!==s.family||d.preset&&d.preset!==s.preset)&&(s=Ja(d.family,Gt.some(m=>m.id===d.preset)?d.preset:"clear"));let M=s.designId?JSON.stringify(ue(s)):null,A=[JSON.stringify(s)],P=0,F=[["voice_audition.samantha","Voice \xB7 Samantha"],["voice_audition.daniel","Voice \xB7 Daniel"],["home.samantha","Welcome narration"],...Mr.map(m=>[`sfx.${m.id}`,`Sound \xB7 ${m.name}`])],I=d.sound&&F.some(m=>m[0]===d.sound)?d.sound:F[0][0];function B(){let[m,g]=I.split(".");m==="sfx"?a.playUrl(I,Mr.find(v=>v.id===g).file,{from:0}):a.play(m,{voice:g,kind:"audition",from:0}),a.sfx("select")}let N=d.sound?setTimeout(()=>{N=null,B()},900):null,X=()=>{clearTimeout(N),N=null},T=a.store.on((m,g)=>{(g.voice&&!a.voiceOn||g.sounds&&!a.soundsOn)&&X()}),E="orbit",C="props",_="material",w=!1,q={material:!0,interior:!0,light:!0,motion:!1,scene:!1,slider:!0,wave:!0,bg:!0,ctl:!0,scene_:!0},V={},ae=()=>{try{sessionStorage.setItem(Un,JSON.stringify(s))}catch{}};function re(){let m=JSON.stringify(s);m!==A[P]&&(A.splice(P+1),A.push(m),P=A.length-1,A.length>120&&(A.shift(),P--)),ae(),Re()}document.body.classList.add("dark-ui","sx-on"),t.innerHTML=`
    <section class="sx" aria-label="Studio">
      <header class="sx-top" data-top></header>
      <nav class="sx-rail" aria-label="Tools" data-rail></nav>
      <div class="sx-cv t-orbit" data-view tabindex="0" aria-label="Canvas. Drag to use the selected tool; arrow keys also work.">
        <div class="sx-pool" aria-hidden="true"></div><div class="sx-floor" aria-hidden="true"></div>
        <div class="sx-stage" data-stage><div class="sx-frame"></div></div><div class="sx-vig" aria-hidden="true"></div>
        <div class="st-screen" data-screen hidden></div>
        <div class="st-cap" data-scap hidden></div>
        <div class="st-kit" data-kit hidden></div>
        <div class="sx-hud" data-hud></div>
        <div class="sx-zoom" data-zoombar>
          <button class="sx-ib" type="button" data-zo="-1" aria-label="Zoom out" data-tip="Zoom out">${Rt("minus")}</button>
          <button class="sx-ib" type="button" data-zo="0" aria-label="Fit" data-tip="Fit (R)">${Rt("fit")}</button>
          <button class="sx-ib" type="button" data-zo="1" aria-label="Zoom in" data-tip="Zoom in">${Rt("plus")}</button>
        </div>
      </div>
      <button class="sx-grab" type="button" data-grab aria-label="Show or hide the controls" aria-expanded="false"><i></i></button>
      <aside class="sx-ins" aria-label="Inspector" data-ins></aside>
    </section>
    <div class="sx-modal" data-modal hidden></div>`;let ne=t.querySelector(".sx"),de=t.querySelector("[data-top]"),ke=t.querySelector("[data-rail]"),$e=t.querySelector("[data-view]"),H=t.querySelector("[data-stage]"),u=t.querySelector("[data-ins]"),O=t.querySelector("[data-modal]"),W=t.querySelector("[data-hud]"),D=t.querySelector("[data-grab]"),R=m=>{ne.classList.toggle("peek",!m),D.setAttribute("aria-expanded",m)};matchMedia("(max-width: 820px)").matches&&R(!1);{let m=null;D.addEventListener("pointerdown",g=>{m=g.clientY,D.setPointerCapture(g.pointerId)}),D.addEventListener("click",g=>{g.detail===0&&R(ne.classList.contains("peek"))}),D.addEventListener("pointercancel",()=>{m=null}),D.addEventListener("pointerup",g=>{if(m==null)return;let v=g.clientY-m;m=null,R(Math.abs(v)<12?ne.classList.contains("peek"):v<0)}),u.addEventListener("click",g=>{g.target.closest("[data-tab],[data-chip]")&&R(!0)},!0)}let ce=cr(H,s.preset,{config:s.sph}),ze=0,Me=0,xe=new Proxy(ce,{get(m,g){if(h()){if(g==="rotate")return U=>{ze+=U*.01,f.setObjectYaw(ze)};if(g==="stir")return()=>f.nudge(xt(.8*(s.sph.motion.stir??1),0,1.5));if(g==="setSpeech")return U=>f.setSpeech(xt(U*(s.sph.motion.speech??1)));if(g==="resetView")return()=>{ze=0,f.setObjectYaw(0)};if(g==="canvas")return null}let v=m[g];return typeof v=="function"?v.bind(m):v}});xe.canvas?.addEventListener("pointerdown",()=>{E!=="orbit"||it||(Oa=!0)});let ge=()=>s.designName||(s.family==="orb"?`${Qn(s.preset).name} Orb`:sa(s.family).name);function qe(){de.innerHTML=`
      <h1 class="vh">Studio</h1>
      <div class="sx-doc">
        <span class="sx-dirty" data-dirty title="Unsaved changes"></span>
        <input class="sx-name" data-name value="${At(ge())}" aria-label="Design name" maxlength="48" spellcheck="false" data-tip="Rename">
        <select class="sx-sel" data-fam aria-label="Object">${ka.map(g=>`<option value="${g.id}"${g.id===s.family?" selected":""}>${At(g.name)}</option>`).join("")}</select>
        ${s.family==="orb"?`<select class="sx-sel" data-pre aria-label="Start from a version">${Gt.map(g=>`<option value="${g.id}"${g.id===s.preset?" selected":""}>${At(g.name)}</option>`).join("")}</select>`:""}
      </div>
      <span class="sx-sp"></span>
      <button class="sx-ib sx-more" type="button" data-more aria-label="More: object, version, reset" aria-expanded="false">${Rt("more")}</button>
      <button class="sx-ib" type="button" data-undo aria-label="Undo" data-tip="Undo (${Na}Z)">${Rt("undo")}</button>
      <button class="sx-ib" type="button" data-redo aria-label="Redo" data-tip="Redo (${Na}\u21E7Z)">${Rt("redo")}</button>
      <button class="sx-ib" type="button" data-resetall aria-label="Reset to the version" data-tip="Reset to the version">${Rt("reset")}</button>
      <span class="sx-sep hide-m"></span>
      <button class="sx-tb" type="button" data-save data-tip="Save to My designs (${Na}S)">Save</button>
      <button class="sx-tb pri" type="button" data-export data-tip="Export code (${Na}E)">Export</button>`,de.querySelector("[data-fam]").addEventListener("change",g=>{let v=s.preset;s=Ja(g.target.value,v),a.sfx("press"),pe(),re()}),de.querySelector("[data-pre]")?.addEventListener("change",g=>ut(g.target.value));let m=de.querySelector("[data-name]");m.addEventListener("change",()=>{s.designName=m.value.trim().slice(0,48)||void 0,s.designId&&c.renameDesign(s.designId,ge()),m.value=ge(),ae(),De()}),m.addEventListener("keydown",g=>{g.key==="Enter"&&m.blur()}),de.querySelector("[data-more]").addEventListener("click",g=>{let v=ne.classList.toggle("more-open");g.currentTarget.setAttribute("aria-expanded",v),a.sfx("press")}),de.querySelector("[data-undo]").addEventListener("click",()=>Ke(-1)),de.querySelector("[data-redo]").addEventListener("click",()=>Ke(1)),de.querySelector("[data-resetall]").addEventListener("click",()=>{let g={designId:s.designId,designName:s.designName,zoom:s.zoom};s={...Ja(s.family,s.preset),...g},a.sfx("press"),pe(),re(),i("Reset to the version\u2019s defaults.")}),de.querySelector("[data-save]").addEventListener("click",()=>lt()),de.querySelector("[data-export]").addEventListener("click",()=>Ot()),Re()}function Re(){let m=de.querySelector("[data-undo]"),g=de.querySelector("[data-redo]");m&&(m.disabled=P<=0),g&&(g.disabled=P>=A.length-1),de.querySelector("[data-dirty]")?.classList.toggle("on",JSON.stringify(ue(s))!==M)}function Ke(m){let g=xt(P+m,0,A.length-1);g!==P&&(P=g,s=JSON.parse(A[g]),a.sfx("press"),ae(),pe(),Re())}function ut(m){let g={zoom:s.zoom};s={...Ja("orb",m),...g},a.sfx("press"),xe.stir(),pe(),re()}function at(){let m=s.family==="orb",g=[["orbit","Orbit (V) \xB7 or hold space and drag"],["light",m?"Move the key light (L)":"Move the light (L)"],["zoom","Zoom: drag up/down (Z)"]].filter(([v])=>m||v==="orbit"||v==="light"&&s.family==="orb-slider");ke.innerHTML=g.map(([v,U])=>`<button class="sx-ib" type="button" data-tool="${v}" aria-pressed="${v===E}" aria-label="${U}" data-tip="${U}">${Rt(v)}</button>`).join("")+(m?`<hr><button class="sx-ib" type="button" data-stir aria-label="Stir" data-tip="Stir what is inside">${Rt("stir")}</button>
        <button class="sx-ib" type="button" data-checker aria-pressed="${w}" aria-label="Transparency grid" data-tip="Transparency grid">${Rt("bg")}</button>
        <button class="sx-ib" type="button" data-snap aria-label="Download PNG" data-tip="Download a PNG">${Rt("camera")}</button>
        <button class="sx-ib" type="button" data-speak aria-label="Test with a voice" data-tip="Test the speech pulse">${Rt("sound")}</button>`:""),ke.querySelectorAll("[data-tool]").forEach(v=>v.addEventListener("click",()=>rt(v.dataset.tool))),ke.querySelector("[data-stir]")?.addEventListener("click",()=>{xe.stir(),a.sfx("press")}),ke.querySelector("[data-checker]")?.addEventListener("click",()=>{w=!w,$e.classList.toggle("checker",w),at()}),ke.querySelector("[data-snap]")?.addEventListener("click",()=>Kt()),ke.querySelector("[data-speak]")?.addEventListener("click",()=>B())}function rt(m,g=!1){E=m,$e.className=$e.className.replace(/\bt-\w+/g,"")+` t-${m}`,$e.classList.toggle("checker",w),H.style.pointerEvents=m==="orbit"&&!it?"":"none",g||a.sfx("press"),at(),we()}let Ze=(m,g)=>{let v=m*Xo(g),U=g[4]*Xo(g),ee=U>=1?0:U>=.1?1:U>=.01?2:3;return(+v.toFixed(ee)).toString()},be=()=>s.family==="orb"?{sph:dr(s.preset)}:Ja(s.family);function ye(m,g){let[v,U]=m,ee=Mt(s,v),_e=`sx-${v.replace(/\./g,"-")}`,Ne=Cd(m)?m[6]:m[3+(m[2]==="select"||m[2]==="seg"?1:0)],It=Mt(g,v)!==void 0&&JSON.stringify(Mt(g,v))!==JSON.stringify(ee)?" mod":"",Bt=$t=>`<label class="sx-lab${It}" for="${_e}"${$t?" data-scrub":""}${Ne?` title="${At(Ne)}${$t?" \u2014 drag to scrub":""}"`:""}>${At(U)}</label>`;if(h()&&v.startsWith("sph.")&&!b.has(v))return zt().replace(/^<div class="sx-row/,'<div inert title="Not available on the real Orb yet" class="sx-row sx-off');if(v==="sph.material.dispersion"&&["chrome","porcelain","bloom"].includes(s.sph?.base))return zt().replace(/^<div class="sx-row/,'<div inert title="Opaque material: no light passes through to split" class="sx-row sx-off');return zt();function zt(){if(m[2]==="color")return`<div class="sx-row full">${Bt()}<span class="sx-col"><input type="color" id="${_e}" data-path="${v}" value="${ee}"><input class="sx-num" data-hex="${v}" value="${ee}" aria-label="${At(U)} hex" spellcheck="false" maxlength="7"></span></div>`;if(m[2]==="select")return`<div class="sx-row full">${Bt()}<select class="sx-sel" id="${_e}" data-path="${v}">${m[3].map(([tt,Qt])=>`<option value="${tt}"${tt===ee?" selected":""}>${At(Qt)}</option>`).join("")}</select></div>`;if(m[2]==="seg")return`<div class="sx-row full">${Bt()}<span class="sx-seg" role="group" id="${_e}">${m[3].map(([tt,Qt])=>`<button type="button" data-seg="${v}" data-v="${tt}" aria-pressed="${tt===ee}">${Qt}</button>`).join("")}</span></div>`;let[,,$t,et,ct,nt]=m,Ce=(ee-$t)/(et-$t)*100;return`<div class="sx-row">${Bt(!0)}<input class="sx-rng" type="range" id="${_e}" data-path="${v}" min="${$t}" max="${et}" step="${ct}" value="${ee}" style="--p:${Ce}%" aria-label="${At(U)}">
      <span class="sx-nw"><input class="sx-num" type="text" inputmode="decimal" data-num="${v}" value="${Ze(ee,m)}" aria-label="${At(U)}${nt?` (${nt})`:""}"><i>${nt}</i></span></div>`}}let fe=()=>Go(s).flatMap(m=>m[2]),Oe=m=>fe().find(g=>g[0]===m),Ve=()=>matchMedia("(max-width: 820px)").matches;function De(){let m=u.querySelector(".sx-body")?.scrollTop??0,g=Go(s),v=be();g.some(ee=>ee[0]===_)||(_=g[0][0]);let U=[["props","Properties"],["designs","My designs"],["feedback","Feedback"]];u.innerHTML=`
      <div class="sx-tabs" role="tablist" aria-label="Inspector">${U.map(([ee,_e])=>`<button class="sx-tab" role="tab" type="button" data-tab="${ee}" aria-selected="${ee===C}">${_e}</button>`).join("")}</div>
      ${C==="props"?`<div class="sx-chips" role="group" aria-label="Section">${g.map(([ee,_e])=>`<button type="button" data-chip="${ee}" aria-pressed="${ee===_}">${_e}</button>`).join("")}</div>`:""}
      <div class="sx-body" data-body>${C==="props"?g.map(([ee,_e,Ne])=>{let It=q[ee]??!0,Bt=Ne.filter(Ce=>Mt(v,Ce[0])!==void 0&&JSON.stringify(Mt(v,Ce[0]))!==JSON.stringify(Mt(s,Ce[0]))).length,zt=Ce=>Mt(v,Ce[0])!==void 0&&JSON.stringify(Mt(v,Ce[0]))!==JSON.stringify(Mt(s,Ce[0])),$t=V[ee]?[]:Ne.filter(Ce=>Xn.has(Ce[0])&&!zt(Ce)),et=Ne.filter(Ce=>!$t.includes(Ce)),ct=Ce=>!(h()&&Ce[0].startsWith("sph.")&&!b.has(Ce[0])),nt=Ne.filter(Ce=>Xn.has(Ce[0])&&ct(Ce)).length;return`<section class="sx-sec${ee===_?"":" m-off"}" data-sec="${ee}"><button class="sx-sh" type="button" data-tog="${ee}" aria-expanded="${It}">${Rt("chev","0 0 9 9")}${_e}<span class="n">${Bt?`${Bt} changed`:""}</span></button>
          <div class="sx-rows" ${It?"":"hidden"}>${et.map(Ce=>ye(Ce,v)).join("")}
          ${ee==="light"&&s.family==="orb"?`<div class="sx-row full"><span class="sx-lab">Temperature</span><span class="sx-seg sx-k" role="group" aria-label="Light colour temperature">${Ad.map(([Ce,tt])=>`<button type="button" data-kelvin="${Ce}" title="${Ce} K" aria-pressed="${vr(Ce)===Mt(s,"sph.light.colour")}">${tt}</button>`).join("")}</span></div>`:""}
          ${nt||Bt?`<div class="sx-acts sx-adv">${nt?`<button class="sx-tb" type="button" data-more="${ee}" aria-expanded="${!!V[ee]}">${V[ee]?"Fewer controls":`More controls (${$t.filter(ct).length})`}</button>`:""}${Bt?`<button class="sx-tb" type="button" data-secreset="${ee}">Reset ${At(_e.toLowerCase())}</button>`:""}</div>`:""}
          ${(()=>{let Ce=h()?Ne.filter(tt=>tt[0].startsWith("sph.")&&!b.has(tt[0])).length:0;return Ce?`<p class="sx-offn">${Ce} more ${Ce===1?"control applies":"controls apply"} to the other versions of the Orb.</p>`:ee==="material"&&["chrome","porcelain","bloom"].includes(s.sph?.base)?'<p class="sx-offn">Dispersion applies to glass; this material is opaque.</p>':""})()}
          ${ee==="motion"?`<div class="sx-row full"><span class="sx-lab">Test sound</span><select class="sx-sel" data-snd aria-label="Sound to test">${F.map(([Ce,tt])=>`<option value="${Ce}"${Ce===I?" selected":""}>${At(tt)}</option>`).join("")}</select></div>
            <div class="sx-acts"><button class="sx-tb" type="button" data-testsnd>Play to test the pulse</button><button class="sx-tb" type="button" data-stir2>Stir</button></div>`:""}
          ${ee==="wave"?'<div class="sx-acts"><button class="sx-tb" type="button" data-trigger>Trigger a wave</button></div>':""}
          </div></section>`}).join("")+'<p class="sx-hint sx-pad">Drag a label to scrub (<span class="sx-kbd">\u21E7</span> \xD710, <span class="sx-kbd">\u2325</span> fine). Gold dots mark values changed from the version; double-click a label to restore it.</p>':C==="designs"?Je():J()}</div>`,u.querySelector("[data-body]").scrollTop=m,ie()}function Je(){let m=c.designs();return`<div class="sx-pad">
      <h3 class="sx-h">My designs</h3>
      ${m.length?`<div class="sx-ds">${m.map(g=>`<article class="sx-d${g.id===s.designId?" cur":""}" data-did="${At(g.id)}">
        ${g.thumb?`<img src="${g.thumb}" alt="">`:'<span class="ph"></span>'}
        <div><input value="${At(g.name)}" aria-label="Design name" maxlength="48" data-dn><small>${At(g.familyName||"")} \xB7 ${new Date(g.at).toLocaleDateString()}</small></div>
        <div class="ab"><button class="sx-ib" type="button" data-dopen aria-label="Open" data-tip="Open">${Rt("open")}</button><button class="sx-ib" type="button" data-ddup aria-label="Duplicate" data-tip="Duplicate">${Rt("dup")}</button><button class="sx-ib" type="button" data-ddel aria-label="Delete" data-tip="Delete">${Rt("del")}</button></div>
      </article>`).join("")}</div>`:'<p class="sx-empty">Nothing saved yet. Save keeps the design on this device; it also appears in Account \u2192 My Designs.</p>'}
      <div class="sx-acts" style="margin-bottom:16px"><button class="sx-tb pri" type="button" data-savenew>Save as new design</button>${s.designId?'<button class="sx-tb" type="button" data-new>New from version</button>':""}</div>
      ${s.family==="orb"?`<h3 class="sx-h">Start from a version</h3><div class="sx-vers">${Gt.map(g=>`<button class="sx-ver" type="button" data-ver="${g.id}" aria-pressed="${g.id===s.preset&&!s.designId}" title="${At(g.line)}">${At(g.name)}</button>`).join("")}</div>`:""}
    </div>`}function J(){return`<div class="sx-ea">
      ${'<p class="access">Studio is in early access \u2014 free while we build it. Designs stay on this device.</p>'}
      ${Wi("studio")}${Or({tone:"dark",heading:!1})}
      <h3 class="sx-h" style="margin-top:18px">Shortcuts</h3>
      <p class="sx-hint"><span class="sx-kbd">${Na}Z</span> undo \xB7 <span class="sx-kbd">${Na}\u21E7Z</span> redo \xB7 <span class="sx-kbd">${Na}S</span> save \xB7 <span class="sx-kbd">${Na}E</span> export \xB7 <span class="sx-kbd">V</span> orbit \xB7 <span class="sx-kbd">L</span> light \xB7 <span class="sx-kbd">Z</span> zoom \xB7 <span class="sx-kbd">R</span> reset view \xB7 <span class="sx-kbd">space</span>+drag orbit</p>
    </div>`}function ie(){u.querySelectorAll("[data-tab]").forEach(g=>g.addEventListener("click",()=>{C=g.dataset.tab,a.sfx("press"),De()})),u.querySelectorAll("[data-chip]").forEach(g=>g.addEventListener("click",()=>{_=g.dataset.chip,a.sfx("press"),De()})),u.querySelectorAll("[data-tog]").forEach(g=>g.addEventListener("click",()=>{Ve()||(q[g.dataset.tog]=!(q[g.dataset.tog]??!0),a.sfx("press"),De())})),C==="feedback"&&(Yi(u,{sfx:g=>a.sfx(g)}),eo(u),br(u,{sfx:g=>a.sfx(g)})),C==="designs"&&se(),u.querySelectorAll("input[type=range][data-path]").forEach(g=>{g.addEventListener("input",()=>{me(g.dataset.path,+g.value),Le(g.dataset.path)}),g.addEventListener("change",()=>{re(),Be(),a.sfx("release")})}),u.querySelectorAll("input[type=color][data-path]").forEach(g=>{g.addEventListener("input",()=>{me(g.dataset.path,g.value);let v=u.querySelector(`[data-hex="${g.dataset.path}"]`);v&&(v.value=g.value)}),g.addEventListener("change",()=>{re(),Be()})}),u.querySelectorAll("[data-hex]").forEach(g=>{g.addEventListener("input",()=>{/^#[0-9a-f]{6}$/i.test(g.value)&&(me(g.dataset.hex,g.value.toLowerCase()),u.querySelector(`input[type=color][data-path="${g.dataset.hex}"]`).value=g.value)}),g.addEventListener("change",()=>{/^#[0-9a-f]{6}$/i.test(g.value)||(g.value=Mt(s,g.dataset.hex)),re(),Be()})}),u.querySelectorAll("select[data-path]").forEach(g=>g.addEventListener("change",()=>{if(g.dataset.path==="sph.base"){let[v,U]=an[g.value];s.sph.material.tint=Do(v),s.sph.material.accent=Do(U)}me(g.dataset.path,g.value),a.sfx("press"),xe.stir(),De(),re()})),u.querySelectorAll("[data-seg]").forEach(g=>g.addEventListener("click",()=>{me(g.dataset.seg,g.dataset.v),a.sfx("press"),De(),re()})),u.querySelectorAll("[data-num]").forEach(g=>{let v=Oe(g.dataset.num);if(!v)return;let[,,U,ee]=v,_e=Xo(v);g.addEventListener("input",()=>{let Ne=parseFloat(g.value);Number.isFinite(Ne)&&(me(g.dataset.num,xt(Ne/_e,U,ee)),Ee(g.dataset.num))}),g.addEventListener("change",()=>{Le(g.dataset.num),re(),Be()}),g.addEventListener("keydown",Ne=>{if(Ne.key==="Enter"&&g.blur(),Ne.key==="ArrowUp"||Ne.key==="ArrowDown"){Ne.preventDefault();let It=v[4]*(Ne.shiftKey?10:Ne.altKey?.1:1);me(g.dataset.num,xt(Mt(s,g.dataset.num)+(Ne.key==="ArrowUp"?It:-It),U,ee)),Le(g.dataset.num),re()}}),g.addEventListener("focus",()=>g.select())}),u.querySelectorAll("[data-scrub]").forEach(g=>{let v=g.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),U=Oe(v);if(!U)return;let[,,ee,_e,Ne]=U;g.addEventListener("pointerdown",It=>{if(It.button)return;It.preventDefault(),g.setPointerCapture(It.pointerId);let Bt=It.clientX,zt=Mt(s,v),$t=(_e-ee)/240,et=nt=>{let Ce=nt.shiftKey?10:nt.altKey?.1:1,tt=xt(zt+(nt.clientX-Bt)*$t*Ce,ee,_e);tt=Math.round(tt/Ne)*Ne,me(v,+tt.toFixed(5)),Le(v)},ct=()=>{g.removeEventListener("pointermove",et),g.removeEventListener("pointerup",ct),g.removeEventListener("pointercancel",ct),re(),Be()};g.addEventListener("pointermove",et),g.addEventListener("pointerup",ct),g.addEventListener("pointercancel",ct)})});let m=g=>{let v=be();for(let U of g){let ee=Mt(v,U);ee!==void 0&&me(U,structuredClone(ee))}re(),a.sfx("release"),De()};u.querySelectorAll(".sx-lab[for]").forEach(g=>g.addEventListener("dblclick",v=>{v.preventDefault(),m([g.getAttribute("for").replace(/^sx-/,"").replace(/-/g,".")])})),u.querySelectorAll("[data-secreset]").forEach(g=>g.addEventListener("click",()=>m((Go(s).find(v=>v[0]===g.dataset.secreset)?.[2]??[]).map(v=>v[0])))),u.querySelectorAll("[data-more]").forEach(g=>g.addEventListener("click",()=>{V[g.dataset.more]=!V[g.dataset.more],a.sfx("press"),De()})),u.querySelectorAll("[data-kelvin]").forEach(g=>g.addEventListener("click",()=>{me("sph.light.colour",vr(+g.dataset.kelvin)),re(),a.sfx("press"),De()})),u.querySelector("[data-snd]")?.addEventListener("change",g=>{I=g.target.value}),u.querySelector("[data-testsnd]")?.addEventListener("click",()=>B()),u.querySelector("[data-stir2]")?.addEventListener("click",()=>xe.stir()),u.querySelector("[data-trigger]")?.addEventListener("click",()=>Ya())}function se(){u.querySelectorAll("[data-did]").forEach(m=>{let g=m.dataset.did,v=()=>c.design(g);m.querySelector("[data-dn]").addEventListener("change",U=>{let ee=U.target.value.trim()||"Untitled design";c.renameDesign(g,ee),s.designId===g&&(s.designName=ee,ae(),qe()),a.sfx("confirm")}),m.querySelector("[data-dopen]").addEventListener("click",()=>ve(v())),m.querySelector("[data-ddup]").addEventListener("click",()=>{let U=v();if(!U)return;if(c.designs().length>=40){i("You have 40 designs, the most this browser keeps. Delete one first.");return}let ee={...structuredClone(U),id:Date.now().toString(36),name:`${U.name} copy`.slice(0,48),at:new Date().toISOString()};c.saveDesign(ee)&&(a.sfx("confirm"),De())}),m.querySelector("[data-ddel]").addEventListener("click",()=>{let U=v();U&&confirm(`Delete \u201C${U.name}\u201D? This cannot be undone.`)&&(c.deleteDesign(g),s.designId===g&&(delete s.designId,M=null,ae(),Re()),a.sfx("close"),De())})}),u.querySelector("[data-savenew]")?.addEventListener("click",()=>lt(!0)),u.querySelector("[data-new]")?.addEventListener("click",()=>ut(s.preset)),u.querySelectorAll("[data-ver]").forEach(m=>m.addEventListener("click",()=>ut(m.dataset.ver)))}function ve(m){m&&(s=Vo({...structuredClone(m.draft),family:m.family}),s.designId=m.id,s.designName=m.name,M=JSON.stringify(ue(s)),a.sfx("press"),pe(),re(),i(`Opened \u201C${m.name}\u201D.`))}function Ee(m){let g=u.querySelector(`input[type=range][data-path="${m}"]`);g&&(g.value=Mt(s,m),g.style.setProperty("--p",`${(g.value-g.min)/(g.max-g.min)*100}%`))}function Le(m){let g=u.querySelector(`[data-num="${m}"]`),v=Oe(m);g&&v&&document.activeElement!==g&&(g.value=Ze(Mt(s,m),v)),Ee(m)}function Be(){let m=be();u.querySelectorAll(".sx-lab[for]").forEach(g=>{let v=g.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),U=Mt(m,v);U!==void 0&&g.classList.toggle("mod",JSON.stringify(U)!==JSON.stringify(Mt(s,v)))}),u.querySelectorAll("[data-sec]").forEach(g=>{let v=g.querySelectorAll(".sx-lab.mod").length,U=g.querySelector(".n");U&&(U.textContent=v?`${v} changed`:"")}),Re()}function me(m,g){let v=m.split("."),U=s;for(let ee of v.slice(0,-1))U=U[ee];U[v.at(-1)]=g,oe()}function oe(){let m=s.family;if(m==="orb"){let g=h();for(let v of H.children)v.style.visibility=g?"hidden":"";g?l.show($(),K()):(ce.setConfig({...s.sph,variant:s.preset}),l.hide())}else{let g=e.chamber,v=s.scene;Object.assign(g,{left:v.left,right:v.right,exposure:v.exposure,yaw:s.view.yaw*Vn,pitch:s.view.pitch*Vn,platform:!1});let U={dark:!0,envBoost:yd(.55,1.6,v.env),exposure:v.exposure,left:v.left,right:v.right};if(m==="orb-slider"){let ee=Ht(ga(s.slider.preset).config);Object.assign(ee.light,{strength:s.orb.light.strength,colour:s.orb.light.colour,x:s.orb.light.x,y:s.orb.light.y}),l.show(ee,U)}else m==="orb-wave"||m==="background-pack"?l.show(Ht(ga("original").config),U):l.hide();f.setView({yaw:0,pitch:0}),wt.set({strength:s.wave.strength,scale:s.wave.scale,horizon:m==="background-pack"?s.bg.horizon:.3,lamp:s.bg.lamp}),m==="orb-wave"&&wt.setExposure(s.wave.exposure),m==="background-pack"&&wt.setExposure(s.bg.exposure),mt(),ft()}we(),ae()}function we(){let m=Math.round(s.zoom*100);W.innerHTML=s.family==="orb"?`<b>${m}%</b><b>${{orbit:"Orbit",light:"Key light",zoom:"Zoom"}[E]}</b>${E==="light"?`<b>${Math.round(s.sph.light.angle)}\xB0 \xB7 ${Math.round(s.sph.light.height)}\xB0</b>`:""}`:""}function pe(){let m=s.family,g=t.querySelector("[data-screen]"),v=t.querySelector("[data-scap]"),U=t.querySelector("[data-kit]");H.hidden=m!=="orb",t.querySelector("[data-zoombar]").hidden=m!=="orb",g.hidden=!(m==="orb-wave"||m==="background-pack"),v.hidden=m!=="orb-slider",U.hidden=m!=="crystal-controls",Pr(),e.removeBackdrop(wt.canvas),g.hidden||(no(g),e.addBackdrop(wt.canvas),wt.setExposure(m==="background-pack"?s.bg.exposure:s.wave.exposure,!0)),m==="orb-slider"&&(v.innerHTML='<span class="cap-label">slide to enter</span>',v.setAttribute("role","slider"),v.tabIndex=0,v.setAttribute("aria-label","Slide to enter")),m==="crystal-controls"&&(U.innerHTML=`<div class="kit-swatch"><button class="gb primary" type="button">Start project</button><button class="gb" type="button">Secondary</button><input class="gi" placeholder="Enter text" aria-label="Example field"><select class="gsel" aria-label="Example select"><option>Select</option><option>Clear</option></select><button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><button class="gb gc" type="button" aria-label="Confirm">${p.check}</button></div>`),U.querySelector(".gsw")?.addEventListener("click",ee=>{ee.currentTarget.setAttribute("aria-checked",String(ee.currentTarget.getAttribute("aria-checked")!=="true")),a.sfx("press")}),m!=="orb"&&E==="zoom"&&(E="orbit"),qe(),at(),De(),oe(),rt(E,!0)}let Ue=0;function mt(){let m=t.querySelector("[data-scap]");if(!m||m.hidden)return;let g=s.slider,v=g.tint,U=g.tintAmount;m.style.background=`linear-gradient(180deg, ${yr(v,.1+U*.35)}, ${yr(v,.03+U*.2)} 50%, ${yr(v,.08+U*.3)})`}function ft(){let m=t.querySelector("[data-kit]");if(!m||m.hidden)return;let g=s.ctl,v=g.depth,U=m.querySelector("style");U||(U=document.createElement("style"),m.append(U)),U.textContent=`.st-kit .gb,.st-kit .gi,.st-kit .gsel{border-radius:${g.radius}px;-webkit-backdrop-filter:blur(${g.blur}px) saturate(1.5);backdrop-filter:blur(${g.blur}px) saturate(1.5)}
      .st-kit .gb:not(.primary){background:linear-gradient(180deg,${yr(g.tint,.3+g.tintAmount*.4)},${yr(g.tint,.08+g.tintAmount*.3)} 50%,${yr(g.tint,.25+g.tintAmount*.35)});
        box-shadow:inset 0 ${v*.3}px ${v*.2}px rgba(255,255,255,.95),inset 0 -${v*.6}px ${v}px -1px rgba(255,255,255,.75),inset 0 0 0 1px rgba(150,158,166,.18),inset 0 -${v*2}px ${v*2.8}px -${v*2}px rgba(120,128,136,.35),0 1px 1px rgba(40,44,50,.1),0 ${v*2}px ${v*4}px -${v*2}px rgba(40,44,50,.38)}`}let We=null,it=!1,Oa=!1;$e.addEventListener("pointerdown",m=>{if(m.target.closest("[data-zoombar],.st-cap,.st-kit,.st-screen"))return;let g=Oa;Oa=!1,!(s.family==="orb"&&E==="orbit"&&g&&!it)&&(We={x:m.clientX,y:m.clientY,lx:m.clientX,ly:m.clientY,v:{...s.view},z:s.zoom,l:{...s.sph.light},ol:{...s.orb.light}},$e.setPointerCapture(m.pointerId),$e.classList.add("grab"))}),$e.addEventListener("pointermove",m=>{if(!We)return;let g=m.clientX-We.x,v=m.clientY-We.y,U=it?"orbit":E;if(s.family==="orb")U==="orbit"&&xe.rotate(m.clientX-We.lx,m.clientY-We.ly),U==="light"&&(s.sph.light.angle=(We.l.angle+g*.5+540)%360-180,s.sph.light.height=xt(We.l.height-v*.35,-30,90),oe(),Le("sph.light.angle"),Le("sph.light.height")),U==="zoom"&&Fe(We.z*Math.exp(-v*.005));else{if(U==="orbit"&&(s.view.yaw=xt(We.v.yaw-g*.25,-60,60),s.view.pitch=xt(We.v.pitch+v*.2,-20,35)),U==="light"){let ee=l.pose.d||300;s.orb.light.x=xt(We.ol.x+g/ee*1.6,-.6,.6),s.orb.light.y=xt(We.ol.y-v/ee*1.6,-.8,.6),Le("orb.light.x"),Le("orb.light.y")}oe()}We.lx=m.clientX,We.ly=m.clientY});let oa=1,Ct=1/0,je={want:NaN,shown:NaN};function Fe(m){s.zoom=Zo(oa,m,Ct).zoom,we()}let Ie=()=>{We&&(We=null,$e.classList.remove("grab"),re(),Be())};$e.addEventListener("pointerup",Ie),$e.addEventListener("pointercancel",Ie),$e.addEventListener("wheel",m=>{s.family==="orb"&&(m.preventDefault(),Fe(s.zoom*Math.exp(-m.deltaY*.0015)),clearTimeout($e._t),$e._t=setTimeout(ae,300))},{passive:!1}),t.querySelectorAll("[data-zo]").forEach(m=>m.addEventListener("click",()=>{let g=+m.dataset.zo;Fe(g?s.zoom*(g>0?1.25:.8):1),g||xe.resetView(),ae(),a.sfx("press")})),$e.addEventListener("keydown",m=>{let g={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[m.key];if(g){if(m.preventDefault(),s.family==="orb"){E==="light"?(s.sph.light.angle=xt(s.sph.light.angle+g[0]*5,-180,180),s.sph.light.height=xt(s.sph.light.height-g[1]*5,-30,90),oe(),De(),re()):E==="zoom"?Fe(s.zoom*(g[1]<0?1.1:g[1]>0?.9:1)):xe.rotate(g[0]*12,g[1]*12);return}E==="orbit"&&(s.view.yaw=xt(s.view.yaw-g[0]*5,-60,60),s.view.pitch=xt(s.view.pitch+g[1]*3,-20,35)),E==="light"&&(s.orb.light.x=xt(s.orb.light.x+g[0]*.05,-.6,.6),s.orb.light.y=xt(s.orb.light.y-g[1]*.05,-.8,.6)),oe(),De(),re()}});let Ft=m=>m&&(m.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(m.tagName))&&!(m.type==="range"||m.type==="color");function jt(m){if(!O.hidden){m.key==="Escape"&&Ea();return}let g=m.metaKey||m.ctrlKey,v=m.key.toLowerCase();if(g&&v==="s"){m.preventDefault(),lt();return}if(g&&v==="e"){m.preventDefault(),Ot();return}if(!Ft(m.target)){if(g&&v==="z"){m.preventDefault(),Ke(m.shiftKey?1:-1);return}if(g&&v==="y"){m.preventDefault(),Ke(1);return}if(!(g||m.altKey)){if(m.key===" "){it||(it=!0,$e.classList.add("t-orbit"),H.style.pointerEvents="none"),(m.target===document.body||$e.contains(m.target))&&m.preventDefault();return}v==="v"?rt("orbit"):v==="l"&&(s.family==="orb"||s.family==="orb-slider")?rt("light"):v==="z"&&s.family==="orb"?rt("zoom"):v==="r"&&(Fe(1),xe.resetView(),s.family!=="orb"&&(s.view={yaw:0,pitch:0,zoom:1},oe(),re()),we(),ae())}}}function Dt(m){m.key===" "&&(it=!1,rt(E))}document.addEventListener("keydown",jt),document.addEventListener("keyup",Dt);let yt=t.querySelector("[data-scap]"),gt=null;yt.addEventListener("pointerdown",m=>{m.stopPropagation(),gt={x:m.clientX,v:Ue},yt.setPointerCapture(m.pointerId),a.sfx("press")}),yt.addEventListener("pointermove",m=>{gt&&(Ue=xt(gt.v+(m.clientX-gt.x)/(yt.offsetWidth-yt.offsetHeight)))});let Wt=()=>{gt&&(gt=null,a.sfx("release"),f.nudge(.5),Ue>.92?(Ue=1,a.sfx("confirm")):Ue=0)};yt.addEventListener("pointerup",Wt),yt.addEventListener("pointercancel",Wt),yt.addEventListener("keydown",m=>{m.key==="ArrowRight"&&(Ue=xt(Ue+.1)),m.key==="ArrowLeft"&&(Ue=xt(Ue-.1))});function Ya(){let m=t.querySelector("[data-screen]"),g=m.getBoundingClientRect();wt.impact(g.width/2,g.height*(1-.3)+10,s.wave.strength),f.nudge(.8),a.sfx("detent")}t.querySelector("[data-screen]").addEventListener("pointerdown",m=>{if(s.family!=="orb-wave")return;let g=m.currentTarget.getBoundingClientRect();wt.impact(m.clientX-g.left,m.clientY-g.top,s.wave.strength),a.sfx("detent")});function ue(m){let{designId:g,designName:v,zoom:U,...ee}=m;return ee}async function kt(){try{if(s.family==="orb"&&xe.canvas){let v=xe.canvas,U=Math.min(v.width,v.height),ee=document.createElement("canvas");ee.width=ee.height=240;let _e=ee.getContext("2d");return _e.fillStyle="#0b0c0c",_e.fillRect(0,0,240,240),_e.drawImage(v,(v.width-U)/2,(v.height-U)/2,U,U,0,0,240,240),ee.toDataURL("image/jpeg",.8)}let m=Ut(),g=await e.exportPNG(m,l.element||document.createElement("div"));if(g){let v=await createImageBitmap(g),U=document.createElement("canvas"),ee=360;return U.width=ee,U.height=Math.round(ee*m.h/m.w),U.getContext("2d").drawImage(v,0,0,U.width,U.height),U.toDataURL("image/jpeg",.78)}}catch{}return null}async function lt(m=!1){let g=sa(s.family),v=!m&&s.designId||Date.now().toString(36),U=m&&s.designId?`${ge()} copy`.slice(0,48):ge(),ee=await kt();c.saveDesign({id:v,name:U,family:s.family,familyName:g.name,preset:s.preset,schema:1,at:new Date().toISOString(),draft:ue(s),thumb:ee})?(s.designId=v,s.designName=U,M=JSON.stringify(ue(s)),ae(),a.sfx("confirm"),i("Saved to My designs (on this device)."),qe(),C==="designs"&&De()):i("Could not save: this browser\u2019s storage is full or unavailable.")}let Lt=()=>({...s.sph,variant:s.preset}),Ia=()=>nn(Lt(),dr(s.preset));function va(m=Ld){let g=Ia(),v=360;return`<div data-light-orb data-variant="${s.preset}"${g==="e30"?"":` data-config="${g}"`} style="width:${v}px;height:${v}px"></div>
<script type="module" src="${m}"><\/script>`}function ua(){let m=s.sph.scene,g=m.background==="none"?"#0b0c0c":m.colour;return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${At(ge())} \xB7 The Light Orb</title>
<style>
  html,body{margin:0;height:100%;background:${g}}
  body{display:grid;place-items:center}
  [data-light-orb]{width:min(82vmin,560px)!important;height:min(82vmin,560px)!important}
</style>
</head>
<body>
${va()}
</body>
</html>
`}function Ua(){return s.family==="orb"?JSON.stringify({product:"orb",schema:1,name:ge(),variant:s.preset,config:Lt(),changed:on(dr(s.preset),Lt()),embed:{attribute:"data-config",value:Ia()}},null,2):JSON.stringify({schema:1,product:s.family,name:ge(),config:s[{"orb-slider":"slider","orb-wave":"wave","background-pack":"bg","crystal-controls":"ctl"}[s.family]],scene:s.scene,note:"Configuration for The Light Orb renderer. Development export; not a licensed product package."},null,2)}let St="embed",ot=()=>ge().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"light-orb";function Ot(){s.family!=="orb"&&(St="json"),Nt(),O.hidden=!1,a.sfx("open"),O.querySelector("[data-xtab][aria-selected=true]")?.focus()}function Ea(){O.hidden=!0,a.sfx("close"),$e.focus({preventScroll:!0})}function Nt(){let m=s.family==="orb",g=m?[["embed","Embed code"],["html","HTML page"],["json","JSON"]]:[["json","JSON"]],v={embed:[va(),"Paste into any page. The data-config attribute holds your design (only what differs from the version), so it looks and moves exactly like this.",[["copy","Copy code","pri"],["dlsnip","Download snippet"]]],html:[ua(),"A complete page with your Orb, ready to open or upload.",[["dlhtml","Download .html","pri"],["copy","Copy"]]],json:[Ua(),m?"The full configuration. The embed accepts it as data-config too (plain JSON or base64).":"The configuration of this object.",[["dljson","Download .json","pri"],["copy","Copy"]]]}[St];O.innerHTML=`<div class="sx-dlg" role="dialog" aria-modal="true" aria-labelledby="sx-xt">
      <div class="sx-dh"><h2 id="sx-xt">Export \xB7 ${At(ge())}</h2><button class="sx-ib" type="button" data-xclose aria-label="Close">${Rt("close")}</button></div>
      <div class="sx-tabs" role="tablist">${g.map(([ee,_e])=>`<button class="sx-tab" role="tab" type="button" data-xtab="${ee}" aria-selected="${ee===St}">${_e}</button>`).join("")}</div>
      <div class="sx-db"><p>${v[1]}</p><textarea class="sx-code" readonly spellcheck="false" aria-label="Code">${At(v[0])}</textarea>
        <div class="sx-acts">${v[2].map(([ee,_e,Ne])=>`<button class="sx-tb${Ne?" "+Ne:""}" type="button" data-xa="${ee}">${_e}</button>`).join("")}${m?'<button class="sx-tb" type="button" data-xa="png">Download PNG</button>':""}</div></div></div>`,O.querySelector("[data-xclose]").addEventListener("click",Ea),O.onclick=ee=>{ee.target===O&&Ea()},O.querySelectorAll("[data-xtab]").forEach(ee=>ee.addEventListener("click",()=>{St=ee.dataset.xtab,a.sfx("press"),Nt(),O.querySelector(`[data-xtab="${St}"]`).focus()}));let U=v[0];O.querySelectorAll("[data-xa]").forEach(ee=>ee.addEventListener("click",async()=>{let _e=ee.dataset.xa;if(_e==="copy"){let Ne=!1;try{await navigator.clipboard.writeText(U),Ne=!0}catch{O.querySelector("textarea").select(),Ne=document.execCommand?.("copy")}ee.textContent=Ne?"Copied":"Select and copy",a.sfx("confirm"),setTimeout(()=>{ee.textContent=_e==="copy"&&St==="embed"?"Copy code":"Copy"},1600)}_e==="dlsnip"&&Yt(new Blob([U],{type:"text/plain"}),`${ot()}-embed.txt`),_e==="dlhtml"&&Yt(new Blob([U],{type:"text/html"}),`${ot()}.html`),_e==="dljson"&&Yt(new Blob([U],{type:"application/json"}),`${ot()}.json`),_e==="png"&&Kt()}))}async function Kt(){if(s.family==="orb"&&xe.canvas){xe.canvas.toBlob(m=>{m&&(Yt(m,`${ot()}.png`),i("Downloaded a PNG of the Orb."))});return}if(l.element){let m=await e.exportPNG(Ut(),l.element);m&&Yt(m,`${ot()}.png`)}}function Yt(m,g){let v=document.createElement("a");v.href=URL.createObjectURL(m),v.download=g,document.body.append(v),v.click(),setTimeout(()=>{URL.revokeObjectURL(v.href),v.remove()},1e3),a.sfx("confirm")}function Ut(){let m=$e.getBoundingClientRect();return{x:m.left,y:m.top,w:m.width,h:m.height}}function Jt(){let m=document.querySelector(".hd"),g=m?Math.round(m.getBoundingClientRect().bottom):72;ne._hh!==g&&(ne._hh=g,ne.style.setProperty("--sx-top",`${Math.max(0,g)}px`));let v=Ut(),U=s.family,ee=v.x+v.w/2,_e=t.querySelector("[data-screen]"),Ne=t.querySelector("[data-scap]"),It=t.querySelector("[data-kit]"),Bt=innerHeight,zt={warm:0,room:"chamber",stage:v,emission:1,orb:{x:50,y:Bt-52,d:46,vis:0}},$t=et=>({...zt,product:et,grounds:et&&et.ground?[{y:et.ground,x:et.x,d:et.d}]:[]});if(U==="orb"){let et=Math.min(v.w-48,v.h-48)*.74,ct=$o=>{let Ta=$o?.getBoundingClientRect();return Ta&&Ta.width>0&&Ta.height>0?{l:Ta.left,t:Ta.top,r:Ta.right,b:Ta.bottom}:null},nt=[ke,t.querySelector("[data-zoombar]"),W,D,u,de].map(ct).filter(Boolean),Ce=$d({l:v.x,t:v.y,r:v.x+v.w,b:v.y+v.h},nt,innerWidth<=820?16:24,kd(s.sph.scene.size)),tt=v.w>80&&v.h>80,Qt=tt?Ed(je,s.zoom,et,Ce):Zo(et,s.zoom,Ce);tt&&(oa=et,Ct=Ce,Qt.zoom!==s.zoom&&(s.zoom=Qt.zoom,we()));let ia=Math.floor(Qt.size);if(H._s!==ia&&(H._s=ia,H.style.width=H.style.height=`${ia}px`),xe.setSpeech(a.playing?a.energy():0),!h())return $t(null);let ya=performance.now()/1e3,La=Me?Math.min(.05,ya-Me):0;Me=ya,We||(ze+=(s.sph.motion.spin??0)*Math.PI*2*La*.25,f.setObjectYaw(ze));let Pa=H.getBoundingClientRect();return $t({x:Pa.left+Pa.width/2,y:Pa.top+Pa.height/2,d:Pa.width*.9*(s.sph.scene.size??1),vis:1,snap:!0})}if(U==="orb-slider"){let et=s.slider,ct=Math.min(1,(v.w-40)/et.length),nt=et.length*ct,Ce=et.height*ct;Object.assign(Ne.style,{left:`${ee-nt/2}px`,top:`${v.y+v.h*.5-Ce/2}px`,width:`${nt}px`,height:`${Ce}px`});let tt=Ce*.84,Qt=(Ce-tt)/2;return $t({x:ee-nt/2+Qt+tt/2+Ue*(nt-Ce),y:v.y+v.h*.5,d:tt,vis:1,snap:!0})}if(U==="orb-wave"||U==="background-pack"){let et=Math.min(v.w*.86,900),ct=Math.min(v.h*.72,et*.62);Object.assign(_e.style,{left:`${ee-et/2}px`,top:`${v.y+v.h*.5-ct/2}px`,width:`${et}px`,height:`${ct}px`});let nt=U==="background-pack"?s.bg.horizon:.3,Ce=Math.min(90,et*.12),tt=ct*(1-nt)+Ce*.1-Ce/2;return wt.setOrb({x:et/2,y:tt,d:Ce}),$t({x:ee,y:v.y+v.h*.5-ct/2+tt,d:Ce,vis:1})}return U==="crystal-controls"&&Object.assign(It.style,{left:`${v.x+20}px`,top:`${v.y+20}px`,width:`${v.w-40}px`,height:`${v.h-40}px`}),$t(null)}return pe(),{frame:Jt,reapply:()=>oe(),voiceResponse:()=>s.family==="orb"?xt(s.sph.motion.speech*.6):.6,leave(){X(),T(),document.removeEventListener("keydown",jt),document.removeEventListener("keyup",Dt),xe.dispose(),Pr(),e.removeBackdrop(wt.canvas),document.body.classList.remove("dark-ui","sx-on"),l.hide(),Object.assign(e.chamber,{yaw:0,pitch:0})},get draft(){return s}}}function yr(e,a){let o=parseInt(e.slice(1),16);return`rgba(${o>>16&255},${o>>8&255},${o&255},${a.toFixed(3)})`}function es(e){let a=null,o=null,t=null,d={},p={emission:1},i=document.createElement("div");i.className="x-product",i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:31",document.body.append(i);let l={x:-999,y:-999,d:100,vis:0},c={x:-999,y:-999,d:100,vis:0,vx:0,vy:0,vd:0},f=!0,h=!1,b=M=>{M.persisted||$()};addEventListener("pagehide",b);function $(){h||(h=!0,f=!0,removeEventListener("pagehide",b),a?.dispose(),a=null,t=null,d={},i.remove())}function K(){return h||a||o||(o=Ci({container:i,diameter:240,driven:!0,background:ha().orbBackground}).then(M=>{if(h){M.dispose(),o=null;return}return a=M,o=null,M.attachPointer(document.createElement("div"))(),M.setBackdrop((A,P)=>{if(d.dark===!0)return e.drawBackdrop(A,P,c);let F=A.createRadialGradient(P.extent*.5,P.extent*.4,0,P.extent*.5,P.extent*.4,P.extent*.75);F.addColorStop(0,"#fbfbfa"),F.addColorStop(.7,"#e3e5e4"),F.addColorStop(1,"#d6d8d7"),A.fillStyle=F,A.fillRect(0,0,P.extent,P.extent)}),M.setVisibility(0),M.tick(performance.now()),t&&s(),M}).catch(()=>{o=null})),o}function s(){a&&t&&(p=oo(a,t,{lightStage:d.dark!==!0,...d}),a.setEmission(Math.min(1.4,p.emission)))}return{dispose:$,get orb(){return a},get element(){return a?.element},get output(){return p},show(M,A={}){h||(t=Ht(M),d=A,f=!1,K(),s())},update(M,A=d){h||(t=Ht(M),d=A,s())},reapply(){h||s()},hide(){f=!0,a&&(a.setVisibility(0),a.setView({yaw:0,pitch:0}),a.setObjectYaw(0),a.setSpeech(0),a.tick(performance.now())),c.vis=0,c.x=-999},attachPointer(M){return a?a.attachPointer(M,{range:"volume"}):(K()?.then(A=>A?.attachPointer(M,{range:"volume"})),null)},frame(M){if(!a)return;if(!M||f){(c.vis>0||a.element.style.visibility!=="hidden")&&(c.vis=0,a.setVisibility(0),a.tick(performance.now()));return}let A=1/60,P=9;if(M.snap||c.x<-900)Object.assign(c,{x:M.x,y:M.y,d:M.d,vx:0,vy:0,vd:0});else for(let F of["x","y","d"]){let I="v"+F;c[I]+=(P*P*(M[F]-c[F])-2*P*c[I])*A,c[F]+=c[I]*A}c.vis+=((M.vis??1)-c.vis)*.2,a.holdRaster(Math.ceil(Math.max(c.d,M.d,120)*1.06)),a.setPose({x:c.x,y:c.y,diameter:c.d}),a.setVisibility(c.vis),a.tick(performance.now())},pose:c}}var ei=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null,ti=!!ei;function as({onresult:e,onend:a,onerror:o,lang:t}){if(!ei)return o?.("unsupported"),null;let d=new ei;d.lang=t||navigator.language||"en-US",d.interimResults=!0,d.maxAlternatives=1,d.continuous=!1;let p="",i="";d.onresult=l=>{i=[...l.results].map(c=>c[0].transcript).join(" "),l.results[l.results.length-1].isFinal&&(p=i),e?.(i,!!p)},d.onerror=l=>o?.(l.error),d.onend=()=>a?.(p||i);try{d.start()}catch{return o?.("busy"),null}return d}var ts=e=>String(e).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),Sa=(e,...a)=>a.some(o=>new RegExp(`\\b${o}\\b`).test(e)),Id={home:["home","start","beginning","inicio","principio","portada"],products:[...Ga[0].words,"productos","producto","tienda","objetos"],templates:[...Ga[1].words,"plantillas","plantilla","composiciones"],studio:[...Ga[2].words,"estudio","editar","personalizar","disenar"],sound:[...Ga[3].words,"sonido","sonidos","voces","escuchar","audio"],membership:["membership","member","plans","plan","pricing","price","prices","membresia","miembro","planes","precio","precios","cuesta","cost"],account:["account","profile","downloads","cuenta","perfil","descargas"],signin:["sign in","log in","login","iniciar sesion","entrar"]},Pd={home:"#/",membership:"#/membership",account:"#/account",signin:"#/signin"},Rd={"orb-slider":["slider","deslizador"],"orb-wave":["wave","ola","onda","ripple"],"background-pack":["background","backgrounds","fondo","fondos"],"crystal-controls":["controls","buttons","controles","botones","crystal"]},da=(e,a={})=>({say:e.text,id:e.id,lang:e.lang??"en",...a});function lo(){return"en"}function rs(e,{here:a,presentation:o,lang:t="en"}){let d=ts(e),p=lo(e,t),i=c=>pr(c,p);if(!d)return da(i("reply.missed"),{intent:"fallback"});if(d.split(" ").length<=3&&Sa(d,"stop","quiet","silence","shh","para","calla","callate","silencio","basta"))return{say:"",stop:!0,command:!0};if(Sa(d,"where am i","where are we","donde estoy","donde estamos","que es esto","what is this","what is here","que hay aqui"))return da(o(p),{intent:"where"});if(Sa(d,"help","what can you do","what can i do","ayuda","ayudame","que puedes hacer","que puedo hacer"))return da(i("reply.help"),{intent:"help"});if(Sa(d,"thank you","thanks","gracias"))return da(i("reply.thanks"),{intent:"thanks"});if(Sa(d,"who are you","what are you","quien eres","que eres","como te llamas","your name"))return da(i("reply.who"),{intent:"who"});if(Sa(d,"back","go back","atras","volver","vuelve"))return da(i("reply.back"),{back:!0,command:!0});for(let[c,f]of Object.entries(Rd))if(Sa(d,...f)){let h=ka.find(b=>b.id===c&&b.published!==!1);if(h)return da(vn(h),{go:`#/products/${c}`,quiet:!0,command:!0})}let l=Et.find(c=>d.includes(ts(c.name)));if(l)return da(yn(l),{go:`#/templates/${l.id}`,quiet:!0,command:!0});for(let[c,f]of Object.entries(Id))if(Sa(d,...f)){if(c===a){let h=o(p);return da(p==="es"?{text:`Ya estamos aqu\xED. ${h.text}`,lang:"es"}:xn(h),{command:!0})}return{go:Pd[c]??`#/${c}`,command:!0}}return d.split(" ").length<=5&&Sa(d,"hello","hi","hey","hola","buenas","buenos dias","buenas tardes","buenas noches","good morning","good evening")?da(i("reply.intro"),{intent:"hello"}):Sa(d,"the orb","orb","esfera","la orb","bola")?da(p==="es"?{text:"Aqu\xED est\xE1 la Orb. Prueba sus veinte versiones.",lang:"es"}:wn(),{go:`#/products/${ka[0].id}`,quiet:!0}):da(i("reply.unknown"),{intent:"fallback"})}var os=()=>!!Xr,Dd=/^#\/(products(\/[a-z0-9-]+(\?variant=[a-z0-9-]+)?)?|templates(\/[a-z0-9-]+)?|studio|sound|membership|account|licence)?$/;async function is(e,a,{timeout:o=8e3}={}){if(!Xr)throw new Error("disabled");let t=new AbortController,d=setTimeout(()=>t.abort(),o);try{let p=await fetch(Xr,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({messages:e,page:a}),signal:t.signal});if(!p.ok)throw new Error(`http ${p.status}`);let i=await p.json(),l=typeof i.say=="string"?i.say.trim().slice(0,600):"";if(!l)throw new Error("empty");return{say:l,go:typeof i.go=="string"&&Dd.test(i.go)?i.go:void 0}}finally{clearTimeout(d)}}var ai=()=>import("./chunk-7NDVV2WO.js"),_t={saved:"lightorb:saved",designs:"lightorb:designs",profile:"lightorb:profile"},ja=(e,a)=>{try{return JSON.parse(localStorage.getItem(e))??a}catch{return a}},Dr=(e,a)=>{try{return localStorage.setItem(e,JSON.stringify(a)),!0}catch{return!1}},vt={saved:()=>ja(_t.saved,[]),isSaved:(e,a)=>ja(_t.saved,[]).some(o=>o.type===e&&o.id===a),toggleSaved(e,a,o,t){let d=ja(_t.saved,[]),p=d.findIndex(i=>i.type===e&&i.id===a);return p>=0?d.splice(p,1):d.unshift({type:e,id:a,name:o,href:t,at:new Date().toISOString()}),Dr(_t.saved,d),p<0},designs:()=>ja(_t.designs,[]),design:e=>ja(_t.designs,[]).find(a=>a.id===e),saveDesign(e){let a=ja(_t.designs,[]),o=a.findIndex(t=>t.id===e.id);return o>=0?a[o]=e:a.unshift(e),Dr(_t.designs,a.slice(0,40))},renameDesign(e,a){let o=ja(_t.designs,[]),t=o.find(d=>d.id===e);t&&(t.name=a,Dr(_t.designs,o))},deleteDesign(e){Dr(_t.designs,ja(_t.designs,[]).filter(a=>a.id!==e))},profile:()=>ja(_t.profile,null),setProfile:e=>Dr(_t.profile,e)},ns=[["profile","Profile"],["designs","My Designs"],["saved","Saved"],["downloads","Downloads"]],Bd='<p class="note">Your designs and saved items are kept in this browser. Accounts that sync across devices come later; your early-access email will carry over.</p>';function Qa(e,a,o="profile"){if(Vt){ai().then(l=>l.accountLive(e,a,o,ss));return}let{esc:t,audio:d}=a;ns.some(l=>l[0]===o)||(o="profile");let p=vt.profile();e.innerHTML=`
    <section class="dest acct">
      <header class="dh"><p class="kicker">Account${p?.email?" \xB7 Early access":""}</p><h1>${p?.name?t(p.name):"Your space"}</h1>${Bd}</header>
      <nav class="segbar acct-tabs" aria-label="Account">${ns.map(([l,c])=>`<a class="pill" href="#/account/${l}" ${l===o?'aria-current="page" aria-pressed="true"':""}>${c}</a>`).join("")}</nav>
      <div class="acct-body" data-body></div>
      ${qr()}
    </section>${a.footer()}`;let i=e.querySelector("[data-body]");if(o==="profile"){let l=p?.email;i.innerHTML=`${l?"":`<div class="joincta glass"><h2>Join early access</h2><p>Free. Leave your email and we tell you when new pieces and Studio updates open. Your designs stay on this device either way.</p>
        <div class="acts eq"><a class="gb small primary" href="#/signup">Join early access</a><a class="gb small" href="#/signin">I already joined</a></div></div>`}
      <form class="form" data-prof>
        <label class="fl"><span>Display name</span><input class="gi" name="name" value="${t(p?.name||"")}" placeholder="How the site greets you" maxlength="40" autocomplete="name"></label>
        <div class="acts"><button class="gb primary" type="submit">Save on this device</button>${p?'<button class="gb" type="button" data-forget>Sign out on this device</button>':""}</div>
        <p class="note" data-profmsg role="status" aria-live="polite"></p>
      </form>
      <div class="kv"><span>Email</span><b>${l?t(p.email):"Not joined yet"}</b>${p?.joined?`<span>Joined</span><b>${new Date(p.joined).toLocaleDateString()}</b>`:""}<span>Plan</span><b>${"Early access \xB7 free"}</b><span>Sound</span><b>${d.prefs.master?"On":"Off"}</b><span>Narration</span><b>${d.prefs.guide?"On":"Off"}</b><span>Guide voice</span><b><a href="#/sound">${t(Aa(d.prefs.voice).name)}</a></b></div>`,i.querySelector("[data-prof]").addEventListener("submit",c=>{c.preventDefault();let f=c.target.name.value.trim(),h={...vt.profile()??{},name:f};f||delete h.name,vt.setProfile(Object.keys(h).length?h:null),d.sfx("confirm"),Qa(e,a,"profile"),e.querySelector("[data-profmsg]").textContent="Saved on this device."}),i.querySelector("[data-prof] .gi").addEventListener("input",c=>{c.isTrusted&&d.sfx("type")}),i.querySelector("[data-forget]")?.addEventListener("click",()=>{if(confirm("Forget your name and email on this browser? Your designs and saved items stay.")){try{localStorage.removeItem(_t.profile)}catch{}Qa(e,a,"profile")}})}ss(e,a,i,o)}function ss(e,a,o,t){let{esc:d,audio:p}=a;if(t==="designs"){let i=vt.designs();o.innerHTML=i.length?`<div class="dgrid">${i.map(l=>`<article class="dc" data-d="${l.id}">
        <a class="dc-img" href="#/studio?design=${l.id}" aria-label="Open ${d(l.name)} in Studio">${l.thumb?`<img src="${l.thumb}" alt="">`:""}</a>
        <input class="dc-n gi" value="${d(l.name)}" aria-label="Design name" maxlength="48">
        <p class="note">${d(l.familyName)} \xB7 ${new Date(l.at).toLocaleDateString()}</p>
        <div class="acts"><a class="gb small primary" href="#/studio?design=${l.id}">Open in Studio</a><button class="gb small" type="button" data-dup>Duplicate</button><button class="gb small" type="button" data-del>Delete</button></div></article>`).join("")}</div>`:'<div class="empty"><h2>No designs yet</h2><p>Designs you save in Studio appear here, with a picture of each one.</p><a class="gb primary" href="#/products">Browse products</a></div>',o.querySelectorAll("[data-d]").forEach(l=>{let c=l.dataset.d,f=l.querySelector(".dc-n");f.addEventListener("change",()=>{vt.renameDesign(c,f.value.trim()||"Untitled design"),p.sfx("confirm")}),f.addEventListener("input",h=>{h.isTrusted&&p.sfx("type")}),l.querySelector("[data-dup]").addEventListener("click",()=>{let h=vt.designs().find($=>$.id===c);if(!h)return;if(vt.designs().length>=40){let $=l.querySelector("[data-dup]");$.textContent="Limit of 40 \u2014 delete one first",$.disabled=!0;return}let b={...structuredClone(h),id:Date.now().toString(36),name:`${h.name} copy`.slice(0,48),at:new Date().toISOString()};vt.saveDesign(b)&&(p.sfx("confirm"),Qa(e,a,"designs"))}),l.querySelector("[data-del]").addEventListener("click",()=>{confirm(`Delete \u201C${f.value}\u201D? This cannot be undone.`)&&(vt.deleteDesign(c),p.sfx("close"),Qa(e,a,"designs"))})})}if(t==="saved"){let i=vt.saved();o.innerHTML=i.length?`<ul class="slist">${i.map((l,c)=>`<li><span class="kicker">${l.type}</span><a href="${l.href}">${d(l.name)}</a><button class="pill" type="button" data-rm="${c}">Remove</button></li>`).join("")}</ul>`:'<div class="empty"><h2>Nothing saved yet</h2><p>Save products, templates and sounds to find them here.</p><a class="gb primary" href="#/products">Explore products</a></div>',o.querySelectorAll("[data-rm]").forEach(l=>l.addEventListener("click",()=>{let c=i[+l.dataset.rm];vt.toggleSaved(c.type,c.id),p.sfx("close"),Qa(e,a,"saved")}))}t==="downloads"&&(o.innerHTML=aa?'<div class="empty"><h2>Nothing to buy right now</h2><p>During early access there is nothing to buy: explore every piece and request a piece\u2019s source code from its page.</p><div class="acts eq"><a class="gb primary" href="#/products">Browse products</a><a class="gb" href="#/studio">Studio \xB7 coming soon</a></div></div>':'<div class="empty"><h2>Everything is free right now</h2><p>During early access there is nothing to buy: take The Orb with its embed code from its product page.</p><div class="acts eq"><a class="gb primary" href="#/products">Browse products</a><a class="gb" href="#/studio">Studio \xB7 coming soon</a></div></div>',o.querySelector("[data-restore]")?.addEventListener("click",()=>Fa.restore()))}function ri(e,a,o){if(Vt){ai().then(i=>i.signLive(e,a,o));return}let t=o==="up",d=vt.profile();e.innerHTML=`
    <section class="dest sign">
      <header class="dh"><p class="kicker">Early access \xB7 free</p><h1>${t?"Join early access":"Welcome back"}</h1>
        <p class="dh-l">${t?"Everything is free while we build it. Leave your email and we write when new pieces and Studio updates open. Your designs are saved on this device.":"There are no passwords yet. Enter the email you joined with to use it on this device; your designs from another browser stay there until accounts sync."}</p></header>
      ${d?.email?`<div class="joined glass"><p class="kicker">Already in</p><h2>You joined as ${a.esc(d.email)}</h2><div class="acts eq"><a class="gb small primary" href="#/products">Browse products</a><a class="gb small" href="#/account">Your account</a></div></div>`:""}
      <form class="form" data-sign novalidate${d?.email?" hidden":""}>
        ${t?'<label class="fl"><span>Name <i class="opt">(optional)</i></span><input class="gi" name="name" autocomplete="name" maxlength="40" placeholder="How the site greets you"></label>':""}
        <label class="fl"><span>Email</span><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"></label>
        <div class="acts"><button class="gb primary" type="submit"><span>${t?"Join early access":"Continue"}</span></button><a class="gb" href="#/products">Browse products without joining</a></div>
        <p class="note" data-signmsg role="status" aria-live="polite">We only keep your email${t?" and name":""} to tell you about new pieces and Studio updates. See <a href="#/privacy">privacy</a>; leave any time.</p>
        <p class="note">${t?'Already joined? <a href="#/signin">Use your email here</a>':'New here? <a href="#/signup">Join early access</a>'}</p>
      </form>
      ${qr()}
    </section>${a.footer()}`;let p=e.querySelector("[data-sign]");p.addEventListener("submit",async i=>{i.preventDefault();let l=p.querySelector("[data-signmsg]"),c=p.querySelector("button[type=submit]"),f=p.email.value.trim();if(!Ca(f)){l.textContent="Please enter a valid email address.",p.email.focus();return}c.disabled=!0,c.setAttribute("aria-busy","true");let h=await Hi({email:f,name:p.name?.value,source:"signup"});if(!h.ok){l.textContent=h.error,c.disabled=!1,c.removeAttribute("aria-busy");return}a.audio.sfx("confirm");let b=document.createElement("div");b.innerHTML=_i(f);let $=b.firstElementChild;p.replaceWith($),$.focus({preventScroll:!0})})}function ls(e,a){if(Vt){ai().then(p=>p.membershipLive(e,a));return}let o=Ni,t=vt.profile(),d=o.plans.map(p=>`<article class="plan soon"><p class="kicker">After launch \xB7 preview</p><h2>${p.name}</h2><p>${p.line}</p><ul>${p.points.map(i=>`<li>${i}</li>`).join("")}</ul></article>`).join("");e.innerHTML=`
    <section class="dest memb">
      ${aa?'<header class="dh"><p class="kicker">Membership</p><h1>Free to explore, while it takes shape</h1><p class="dh-l">The pieces are open to try while The Light Orb is being built. Source code is available on request, piece by piece. Membership is not open yet.</p></header>':'<header class="dh"><p class="kicker">Membership</p><h1>Early access is free</h1><p class="dh-l">Everything is open while we build it: Studio, The Orb with its embed code, and each piece as it arrives. What you take now stays free to use. Paid plans come later.</p></header>'}
      <div class="memb-sl glass">${Or()}</div>
      ${aa?`<article class="plan em now"><p class="kicker">Current plan</p><h2>Early access</h2><p>Everything on the site is open to explore, for everyone.</p>
        <ul><li>Studio: coming soon \u2014 join its list above</li><li>The Orb in twenty versions</li><li>New pieces as they open</li><li>Source code on request, piece by piece</li></ul>`:`<article class="plan em now"><p class="kicker">Current plan</p><h2>Early access \u2014 free</h2><p>Everything on the site, for everyone.</p>
        <ul><li>Studio: coming soon \u2014 join its list above</li><li>The Orb in twenty versions, with its embed code</li><li>New pieces as they open, free while in early access</li></ul>`}
        <div class="acts eq">${t?.email?'<span class="pill" aria-disabled="true">You\u2019re in</span>':'<a class="gb primary" href="#/signup">Join early access</a>'}<a class="gb" href="#/studio">Studio \xB7 coming soon</a></div></article>
      <h2 class="plans-h">Plans after launch</h2><p class="note plans-n">A preview of how The Light Orb will work after early access. Prices are not set yet.</p>
      <div class="plans">${d}</div>
      ${qr()}
    </section>${a.footer()}`,e.querySelectorAll("[data-join]").forEach(p=>p.addEventListener("click",()=>Fa.subscribe(p.dataset.join))),br(e,{sfx:p=>a.audio?.sfx?.(p)})}var ds=e=>String(e).replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),cs=`<p class="am-t">Your account</p>
  <a class="gb small primary" href="#/signin" role="menuitem">Sign in</a>
  <a class="gb small" href="#/signup" role="menuitem">Create a free account</a>
  <a class="am-l" href="#/membership" role="menuitem">See plans</a>`;function ps(e,{sfx:a=()=>{}}={}){if(!Vt)return;let o=e.querySelector("[data-acctbtn]"),t=e.querySelector("[data-acctp]");if(!o||!t)return;let d=0,p=()=>{t.hidden=!0,o.setAttribute("aria-expanded","false")},i=c=>{let f=c.profile.display_name;t.innerHTML=`<div class="am-who"><b>${ds(f||c.user.email)}</b>${f?`<small>${ds(c.user.email)}</small>`:""}<span class="am-plan">${c.plan.name}</span></div>
      <a class="am-l" href="#/account" role="menuitem">Account</a>
      <a class="am-l" href="#/membership" role="menuitem">${c.plan.id==="free"?"Plans":"Your plan"}</a>
      <button class="am-l" type="button" role="menuitem" data-amout>Sign out</button>`,t.querySelector("[data-amout]").addEventListener("click",async()=>{await Ui().signOut("local"),a("close"),p(),location.hash="#/signin"})};async function l(){let c=++d;if(t.hidden=!1,o.setAttribute("aria-expanded","true"),!to()){t.innerHTML=cs;return}let f=Xi();f?i(f):t.innerHTML='<p class="am-t">Your account</p><p class="note"><span class="think" role="status">One moment<span class="think-d" aria-hidden="true"><i></i><i></i><i></i></span></span></p>';let h=await Gi().catch(()=>f);if(!(c!==d||t.hidden)){if(!h){t.innerHTML=cs;return}Ki(h,f)||i(h)}}o.addEventListener("click",c=>{c.preventDefault(),t.hidden?(a("open"),l()):p()}),document.addEventListener("click",c=>{!t.hidden&&!c.target.closest(".acctw")&&p()}),addEventListener("keydown",c=>{c.key==="Escape"&&!t.hidden&&(p(),o.focus())}),addEventListener("hashchange",p),Ji()}var us=`<svg class="wm-o" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><defs><mask id="wm-counter"><rect width="100" height="100" fill="#fff"/>
  <path fill="#000" d="M49 9C31 9 23 29 23 50c0 24 12 42 30 42 15 0 23-9 23-20 0-9-7-12-11-21-4-9-2-19 0-27 1-9-5-15-16-15z"/></mask></defs>
  <circle cx="50" cy="50" r="46" fill="currentColor" mask="url(#wm-counter)"/></svg>`,Br=`<span class="wm-t">The Light</span>${us}<span class="wm-t wm-rb">rb</span>`,co=us;var po=e=>String(e).replace(/[&<>"]/g,a=>`&#${a.charCodeAt(0)};`),uo={orb:{is:"A real-time 3D sphere you can place in your own page. It is drawn live in the browser, not a video or image, and it answers the visitor\u2019s hand.",qualities:["Twenty versions: clear glass, liquid metal, porcelain, bloom, and glass holding a light, points of light, glitter or beads","Turns when dragged and keeps a slow motion of its own","A tap stirs whatever is inside","Respects reduced-motion settings"],use:["A hero centrepiece for a studio, product or portfolio home page","A quiet, tactile signature beside a headline","A brand object on a launch or coming-soon page"],custom:["Choose the version: material and what it holds inside","Size and placement are set by the element you mount it in","More detailed shaping (light, material, movement) is planned for Studio, which is not open yet"],tech:["An ES module built on Three.js r186 (WebGL 2)","Current Chrome, Safari, Edge and Firefox","Integration notes explain how to place it and choose a version"],limits:["Needs WebGL 2; on devices without it, show a still image instead","A 3D scene costs more battery than a static image on phones: one per page is the intended use"]},"orb-slider":{is:"A slide-to-confirm control: a glass capsule whose thumb is a small orb with its own slow inner light.",qualities:["A spring carries the orb home when released, or to the end to confirm","Sends a confirm event your page can listen for","Arrow keys, Enter, Home and End work as well as touch and mouse","Six glass materials"],use:["An \u201Center\u201D gesture for an intro or a gated page","A deliberate confirmation: book, send, unlock","A memorable call to action on a landing page"],custom:["Six materials, each a set of CSS variables you can edit","The label text is plain HTML","Colours and size follow ordinary CSS"],tech:["One self-contained HTML file per material: HTML, CSS variables and a few lines of plain JavaScript","No framework, no WebGL","Current Chrome, Safari, Edge and Firefox"],limits:["A slide gesture is slower than a click: use it where the pause is the point, not for everyday buttons"]},"crystal-controls":{is:"An interface kit of buttons, switches, fields and sliders in glass, with a highlight that follows the pointer and presses that give like glass on a spring.",qualities:["Every state: default, hover, focus, pressed, selected, disabled and loading","Six materials: Clear, Smoke, Chrome, Porcelain, Gel and Bloom","Visible keyboard focus on every control"],use:["The controls of a product or booking page with a premium, tactile feel","Forms and settings panels that match a glass or light visual identity","A consistent button set across a whole site"],custom:["Each material is a set of CSS variables: change colour, depth and highlight","Mix materials on one page","Labels and icons are ordinary HTML"],tech:["One self-contained HTML file per material: plain CSS and a little JavaScript for the pointer light and slider spring","No framework; drops into any site or framework","Current Chrome, Safari, Edge and Firefox"],limits:["The pointer light is a hover effect: on touch screens the controls stay fully usable, without the moving highlight"]},"light-orb":{is:"The Orb this website is built around: one real light inside thick glass, rendered live, with its light in the visitor\u2019s hands.",qualities:["Drag inside the glass to place the light","Intensity, size, glow, colour temperature and surface roughness change the real renderer","No pre-rendered frames"],use:["A signature hero for a studio or brand site","An interactive object on an about or launch page","A calm, living background element beside text"],custom:["Light position, intensity, size, glow, colour temperature and roughness, with the controls on this page","Reset returns the original look"],tech:["The same WebGL renderer the site uses","Current Chrome, Safari, Edge and Firefox","Source code on request"],limits:["Needs WebGL 2","Heavier than a static image: one per page is the intended use"]},"voice-orb":{is:"An Orb whose inner light answers your voice level, the same response the site\u2019s guide shows when it speaks.",qualities:["Starts only when you turn the microphone on","Your voice level moves the light live","Sound is analysed in this tab only: never played back, recorded or sent"],use:["A voice or audio product\u2019s landing page","A listening indicator for a voice interface","An interactive moment on an event or campaign page"],custom:["Sensitivity and look follow the controls on this page"],tech:["Web Audio level analysis in the browser; WebGL rendering","Needs microphone permission and a secure (https) page","Source code on request"],limits:["It reacts to loudness, not words: it does not understand speech","Without microphone permission it stays still"]},lens:{is:"A disc of thick optical glass that bends the page beneath it: it enlarges the centre, folds the edge with a trace of colour and leaves a point of focused light in its shadow.",qualities:["Moves with the pointer or by dragging","Real-time refraction of the content under it","Keyboard, touch and reduced-motion support"],use:["A product-detail magnifier","An exploratory hero over an image or typography","A playful focus effect on a portfolio"],custom:["Size and optical settings with the controls in this panel","Export your settings as a file"],tech:["Web Component and React module","An offline demo page","Source code on request"],limits:["A preview piece: the packaged download is not assembled yet"]},type:{is:"Lettering whose glyphs themselves stretch: grab any part of a letter and pull, strokes thin and lengthen, then snap back past rest and settle.",qualities:["Physical, spring-based motion","Your own word, typed in the panel","Keyboard, touch and reduced-motion support"],use:["A headline people want to touch on a studio or campaign site","An interactive logo moment","A playful 404 or coming-soon page"],custom:["The word and the motion settings, with the controls in this panel","Export your settings as a file"],tech:["Web Component and React module","An offline demo page","Source code on request"],limits:["Best with short words (up to 14 characters)","A preview piece: the packaged download is not assembled yet"]}},Fd=[["is","What it is"],["qualities","Qualities and features"],["use","In a real website"],["custom","Customisation"],["tech","Integration and technical details"],["limits","Demo and limitations"]],Nd=e=>Array.isArray(e)?`<ul>${e.map(a=>`<li>${po(a)}</li>`).join("")}</ul>`:`<p>${po(e)}</p>`;function gs(e,a){let o=uo[e];return o?`<section class="pi" id="pd-more" aria-label="About ${po(a)}">
    ${Fd.map(([t,d],p)=>`<article class="pi-s"><p class="pi-n">${String(p+1).padStart(2,"0")}</p><h2>${d}</h2>${Nd(o[t])}</article>`).join("")}
    <aside class="pi-cta"><p>Want ${po(a)} at the heart of a website made for you?</p><a class="gb small primary" href="#/design">Start a custom web design project</a></aside>
  </section>`:""}var hs=`
/* \u2500\u2500 Extended product information (product-info.js) \u2500\u2500 */
.pd-scroll{margin:clamp(36px,5vw,64px) 0 0;text-align:center}
/* "The full story" (owner 2026-11-10): a capsule with a round arrow that nudges downward */
.pd-scroll a{display:inline-flex;align-items:center;gap:14px;min-height:48px;padding:6px 6px 6px 22px;box-sizing:border-box;border-radius:999px;font:400 15px/1 var(--font);letter-spacing:.005em;color:var(--ink);text-decoration:none;
  background:color-mix(in srgb,var(--ink) 4%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 14%,transparent),0 14px 30px -22px rgba(0,0,0,.45);transition:background .25s,box-shadow .25s,transform .25s}
.pd-scroll a:hover{background:color-mix(in srgb,var(--ink) 8%,transparent);transform:translateY(-1px)}
.pd-scroll a:focus-visible{outline:2px solid var(--ink);outline-offset:3px}
.pd-scroll svg{box-sizing:border-box;width:36px;height:36px;padding:10px;border-radius:50%;background:var(--ink);color:var(--bg,#f3f3f1);fill:none;stroke:currentColor;stroke-width:2}
@media (prefers-reduced-motion:no-preference){.pd-scroll svg{animation:pd-nudge 2.2s cubic-bezier(.45,0,.55,1) infinite}@keyframes pd-nudge{0%,60%,100%{transform:none}30%{transform:translateY(3px)}}}
.pi{max-width:1080px;margin:0 auto;padding:clamp(40px,7vw,88px) 16px clamp(48px,8vw,96px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:clamp(28px,4vw,48px) clamp(24px,4vw,56px);scroll-margin-top:84px}
.pi-s{border-top:1px solid var(--line, rgba(0,0,0,.12));padding-top:18px}
.pi-n{margin:0 0 10px;font:500 11px/1 var(--font);letter-spacing:.16em;color:var(--faint)}
.pi-s h2{margin:0 0 10px;font:400 clamp(19px,1.8vw,22px)/1.25 var(--font);letter-spacing:-.01em;color:var(--ink)}
.pi-s p,.pi-s li{margin:0;color:var(--muted);font-size:15px;line-height:1.6}
.pi-s ul{margin:0;padding-left:1.1em;display:grid;gap:6px}
.pi-cta{grid-column:1/-1;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;padding:22px 0 0;border-top:1px solid var(--line, rgba(0,0,0,.12))}
.pi-cta p{margin:0;color:var(--ink);font-size:16px}
.pi-c{display:grid;gap:2px;margin-top:4px}
.pi-c details{border-top:1px solid rgba(0,0,0,.1);padding:10px 0}
.pi-c summary{cursor:pointer;font-size:13.5px;font-weight:500;min-height:28px;display:flex;align-items:center}
.pi-c p,.pi-c li{font-size:13px;line-height:1.55;margin:6px 0 0;opacity:.82}
.pi-c ul{margin:0;padding-left:1.1em}
`;var Hd=new Set(["orb","orb-slider","crystal-controls"]),go={orbVersion:ta["orb-version"].eur,orbAll:ta["orb-all"].eur,"orb-slider":ta["orb-slider"].eur,"crystal-controls":ta["crystal-controls"].eur,lens:ta.lens.eur,type:ta.type.eur,"the-light-orb":ta["the-light-orb"].eur,berries:ta.berries.eur,brunito:ta.brunito.eur},_d=new Set(["light-orb","voice-orb"]),Wd=new Set(["berries","brunito","beauty"]),Yd=e=>e==="orb"?"orb-version":e,ms=e=>ta[Yd(e)]?.later??null,wr=(e,a,o="")=>`<p class="price-big"${o}><b data-price>${e.label}</b>${!e.free&&!e.ask&&ms(a)?`<s data-was>${ms(a)} \u20AC</s><span class="price-tag">Launch price</span>`:""}</p>`,fs=e=>ta[e]?.later?`Launch price \xB7 later ${ta[e].later} \u20AC. `:"";function ca(e,a=null){if(_d.has(e))return{free:!1,ask:!0,eur:null,label:"Price on request",note:"Ask for a price: one email, a reply from me."};if(Hd.has(e)&&(!a||a==="clear"))return{free:!0,ask:!1,eur:0,label:"Free",note:"Free, with its code, for anyone with a free account."};if(e==="orb")return{free:!1,ask:!1,eur:go.orbVersion,label:`${go.orbVersion} \u20AC`,note:`${fs("orb-version")}All 20 versions: ${go.orbAll} \u20AC. Included in the Lifetime Pass.`};let o=go[e];return o==null?{free:!1,ask:!1,eur:null,label:"Price soon",note:""}:{free:!1,ask:!1,eur:o,label:`${o} \u20AC`,note:fs(e)+(Wd.has(e)?"A complete website. Not part of the Lifetime Pass.":"Included in the Lifetime Pass.")}}var Fr="Checkout opens soon \u2014 nothing can be bought yet.";var Ha=Math.min(2,window.devicePixelRatio||1),ys=matchMedia("(prefers-reduced-motion: reduce)").matches,ht=(e,a,o)=>e<a?a:e>o?o:e,fa=Math.random,Za=null,ws=e=>{Za=e},ho=(e,a=.5)=>{ks&&Za&&Za.sfx(e,Number.isFinite(a)?a:.5)},er={squish(e){ho(e>.45?"level":"detent",ht(e,0,1))},glass(){ho("select")},twang(e){ho("level",ht(e/160,0,1))},thunk(e){ho("detent",ht(1/e,0,1))}},Nr=new Set;new MutationObserver(()=>Nr.forEach(e=>e.retheme?.())).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});var oi=0,ii=0,ks=!1,bs=0,Ud=matchMedia("(pointer: coarse)").matches,Ss=-1e9;addEventListener("scroll",()=>{Ss=performance.now()},{capture:!0,passive:!0});function $s(e){let a=Math.min(.033,(e-ii)/1e3);ii=e;let o=e/1e3,t=e-Ss<140;if(!document.hidden){bs++;let d=0;for(let p of Nr)if(p.vis&&(!ks||p.detail)){if(!p.detail&&t){p.acc=Math.min(.1,(p.acc||0)+a);continue}if(!p.detail&&Ud&&(d+++bs)%2){p.acc=(p.acc||0)+a;continue}p.step(a+(p.detail?0:p.acc||0),o),p.acc=0}}oi=Nr.size?requestAnimationFrame($s):0}function Vd(e,a,o={}){let t=a(e,o);t.cv=e,t.vis=!1,t.lastUser=-1e9,t.detail=!!o.detail,t.autoOn=i=>o.auto!==!1&&!ys&&i-t.lastUser>2400,t.io=new IntersectionObserver(i=>i.forEach(l=>t.vis=l.isIntersecting),{rootMargin:"80px"}),t.io.observe(e),t.ro=new ResizeObserver(()=>{let i=e.getBoundingClientRect();i.width>2&&i.height>2&&(t.resize(i.width,i.height),t.step(0,performance.now()/1e3))}),t.ro.observe(e);let d=i=>{let l=e.getBoundingClientRect();return[i.clientX-l.left,i.clientY-l.top]},p=(i,l)=>e.addEventListener(i,c=>{if(!t.ptr)return;let[f,h]=d(c);if(t.ptr(l,f,h,c)!==!1&&(t.lastUser=performance.now()/1e3),l==="down"&&t.detail){try{e.setPointerCapture(c.pointerId)}catch{}t.drag={x:f,y:h,t:performance.now()}}if(t.detail&&Za)if(l==="move"&&t.drag){let b=performance.now(),$=Math.hypot(f-t.drag.x,h-t.drag.y)/Math.max(8,b-t.drag.t)*1e3;t.drag={x:f,y:h,t:b},Za.friction(Number.isFinite($)?Math.min(1,$/700):0)}else(l==="up"||l==="leave")&&(t.drag=null,Za.friction(0))});return p("pointerdown","down"),p("pointermove","move"),p("pointerup","up"),p("pointercancel","up"),p("pointerleave","leave"),Nr.add(t),oi||(ii=performance.now(),oi=requestAnimationFrame($s)),t}function Gd(e){e.io.disconnect(),e.ro.disconnect(),Nr.delete(e)}function Xd(e,a){let o=!a.detail,t=e.getContext("2d"),d=document.createElement("canvas"),p=d.getContext("2d"),i=[{abs:[.035,.014,.008],inner:0,scatter:0,sc:[0,0,0],fres:.85,shadow:.09,caustic:22},{abs:[0,0,0],inner:.08,scatter:.82,sc:[250,250,248],fres:.35,shadow:.14,caustic:6},{abs:[1.25,1.2,1.12],inner:.12,scatter:.04,sc:[90,92,95],fres:.7,shadow:.2,caustic:4}],l={tint:0,stiff:220,damp:7},c=o?72:112,f=5200*Math.pow((c-1)/(o?63:103),2),h=.34,b={x:0,y:0,down:!1,press:0,max:1,cx:0,cy:0,t0:0,was:!1},$,K,s,M,A,P,F,I,B,N,X,T,E,C,_,w,q,V,ae,re,ne,de,ke,$e,H,u,O=.01,W=1,D=0,R,ce,ze,Me,xe,ge=!1,qe=!1,Re=!1,Ke=()=>document.documentElement.dataset.theme==="dark",ut=Ke(),at=(be,ye,fe)=>{let Oe=be/.14,Ve=ye/.14,De=Math.abs(Oe-Math.round(Oe)),Je=Math.abs(Ve-Math.round(Ve)),J=De<.022||Je<.022;return 246-6*(ye+1)/2-3*Math.min(1,be*be/(M*M))-(J?4.5*fe:0)},rt=()=>{let be=0;for(let ye=0;ye<ne;ye++){let fe=ye/(ne-1)*2-1;for(let Oe=0;Oe<re;Oe++,be++)H[be]=at((Oe/(re-1)*2-1)*M,fe,1)}qe=!1,Re=!1},Ze={S:l,resize(be,ye){$=be,K=ye,e.width=Math.round(be*Ha),e.height=Math.round(ye*Ha),M=be/ye,s=Math.max(24,Math.round(c/M)),A=2*M/(c-1);let fe=c*s;I=new Float32Array(fe),T=new Float32Array(fe),E=new Float32Array(fe),C=new Float32Array(fe),_=new Float32Array(fe),w=new Float32Array(fe),q=new Float32Array(fe),V=new Float32Array(fe),ae=new Float32Array(fe),R=new Float32Array(fe),ce=new Float32Array(fe),ze=new Uint8Array(fe),Me=new Uint8Array(fe),xe=new Uint8Array(fe),P=M>=1?Math.min(M*.66,1.4):M*.78,F=M>=1?.7:.62;let Oe=(ve,Ee)=>{let Le=Math.atan2(Ee,ve),Be=1+.035*Math.sin(Le*3+.6)+.02*Math.sin(Le*5+2.1),me=Math.pow(Math.pow(Math.abs(ve)/(P*Be),3.2)+Math.pow(Math.abs(Ee)/(F*Be),3.2),1/3.2),oe=ht((1-me)/.26,0,1);return h*Math.sqrt(1-Math.pow(1-oe,2))};for(let ve=0;ve<s;ve++)for(let Ee=0;Ee<c;Ee++)I[ve*c+Ee]=Oe((Ee/(c-1)*2-1)*M,ve/(s-1)*2-1);let Ve=o?14e4:66e4,De=Math.min(Ha,1.25,Math.sqrt(Ve/(be*ye)))*W;re=Math.max(8,Math.round(be*De)),ne=Math.max(8,Math.round(ye*De)),d.width=re,d.height=ne,de=p.createImageData(re,ne),O=2*M/(re-1);let Je=re*ne,J=new Uint8Array(c*s);ke=new Int32Array(Je*3),$e=new Float32Array(Je*6),H=new Float32Array(Je),u=new Uint8Array(Je),B=new Float32Array(Je),N=new Float32Array(Je),X=new Float32Array(Je);for(let ve=0;ve<s;ve++)for(let Ee=0;Ee<c;Ee++)if(!(I[ve*c+Ee]<=0))for(let Le=-5;Le<=5;Le++)for(let Be=-5;Be<=5;Be++){let me=ve+Le,oe=Ee+Be;me>=0&&me<s&&oe>=0&&oe<c&&(J[me*c+oe]=1)}let ie=[[0,0],[-.06/A,-.1/A],[-.16/A,-.26/A]],se=0;for(let ve=0;ve<ne;ve++){let Ee=ve/(ne-1)*2-1;for(let Le=0;Le<re;Le++,se++){let Be=(Le/(re-1)*2-1)*M,me=(Be/M+1)/2*(c-1),oe=(Ee+1)/2*(s-1);H[se]=at(Be,Ee,1);let we=0;for(let pe=0;pe<3;pe++){let Ue=ht(me+ie[pe][0],0,c-1.001),mt=ht(oe+ie[pe][1],0,s-1.001),ft=Ue|0,We=mt|0,it=We*c+ft;ke[se*3+pe]=it,$e[se*6+pe*2]=Ue-ft,$e[se*6+pe*2+1]=mt-We,we|=J[it]}if(u[se]=we,we){let pe=O*.5,Ue=Oe(Be,Ee);B[se]=Ue,N[se]=(Oe(Be+pe,Ee)-Ue)/pe,X[se]=(Oe(Be,Ee+pe)-Ue)/pe}}}qe=!1,Re=!1},set(){Re=!1},ptr(be,ye,fe,Oe){let Ve=(ye/$*2-1)*M,De=fe/K*2-1;if(o){if(Oe.pointerType!=="mouse")return!1;be==="move"?(b.down=!0,b.max=.5,b.x=Ve,b.y=De):be==="leave"&&(b.down=!1);return}be==="down"?(b.down=!0,b.max=1,b.x=Ve,b.y=De,b.was=!1,er.squish(.25)):be==="move"&&b.down?(b.x=Ve,b.y=De):(be==="up"||be==="leave")&&(b.down&&b.press>.3&&er.squish(b.press*.5),b.down=!1)},step(be,ye){if(Ke()!==ut&&(ut=Ke(),H&&rt()),Ze.autoOn(ye)){let me=ye%3.6,oe=me<1.6;if(oe&&!b.auto&&(b.auto=!0,b.down=!0,b.max=o?.8:.9,b.cx=(fa()-.5)*P*.9,b.cy=(fa()-.5)*F*.6,b.t0=ye),oe){let we=ye-b.t0;b.x=b.cx+Math.sin(we*1.2)*P*.16,b.y=b.cy+Math.cos(we)*F*.1}else b.auto&&(b.auto=!1,b.down=!1)}else b.auto&&(b.auto=!1,o&&(b.down=!1));let fe=b.down?b.max:0;b.press+=(fe-b.press)*Math.min(1,be*(b.down?ys?8:1.6:6)),b.press>.85&&!b.was&&!o&&(b.was=!0,er.squish(.6));let Oe=Math.max(1,Math.ceil(be*240)),Ve=be/Oe,De=f,Je=.17,J=b.press*(110+l.stiff*.55);if(Re&&!b.down&&b.press<1e-4)return;let ie=0,se=0;for(let me=1;me<s-1;me++)for(let oe=1;oe<c-1;oe++){let we=me*c+oe;if(I[we]<=0)continue;let pe=(oe/(c-1)*2-1)*M-b.x,Ue=me/(s-1)*2-1-b.y,mt=pe*pe+Ue*Ue,ft=Math.exp(-mt/(Je*Je)),We=I[we]/h;V[we]=-J*ft*We,ie+=V[we];let it=Math.sqrt(mt)-Je*2;ae[we]=Math.exp(-it*it/(Je*Je*1.6))*We,se+=ae[we]}let ve=se>0?-ie/se:0;for(let me=0;me<Oe&&be>0;me++){for(let oe=1;oe<s-1;oe++)for(let we=1;we<c-1;we++){let pe=oe*c+we;if(I[pe]<=0){T[pe]=0,E[pe]=0;continue}E[pe]+=(De*(T[pe-1]+T[pe+1]+T[pe-c]+T[pe+c]-4*T[pe])-l.stiff*T[pe]-l.damp*E[pe]+V[pe]+ae[pe]*ve)*Ve}for(let oe=0;oe<T.length;oe++)I[oe]<=0||(T[oe]+=E[oe]*Ve,T[oe]<-I[oe]*.82&&(T[oe]=-I[oe]*.82,E[oe]*=-.2))}let Ee=0;for(let me=0;me<T.length;me++){C[me]=Math.max(0,I[me]+T[me]),q[me]=C[me];let oe=Math.abs(T[me])+Math.abs(E[me]);oe>Ee&&(Ee=oe)}let Le=Re;if(Re=!b.down&&b.press<1e-4&&Ee<2e-5,Re&&Le)return;for(let me=1;me<s-1;me++)for(let oe=1;oe<c-1;oe++){let we=me*c+oe;_[we]=(T[we+1]-T[we-1])/(2*A),w[we]=(T[we+c]-T[we-c])/(2*A)}for(let me=0;me<3;me++){for(let oe=1;oe<s-1;oe++)for(let we=1;we<c-1;we++){let pe=oe*c+we;q[pe]=(q[pe-1]+q[pe]*2+q[pe+1])/4}for(let oe=1;oe<c-1;oe++)for(let we=1;we<s-1;we++){let pe=we*c+oe;q[pe]=(q[pe-c]+q[pe]*2+q[pe+c])/4}}let Be=performance.now();Ze.render(),Ze.cost(performance.now()-Be)},render(){let be=de.data,ye=[-.42,-.62,.66],fe=[-.22,-.34,.91],Oe=Math.hypot(...fe);fe[0]/=Oe,fe[1]/=Oe,fe[2]/=Oe;let Ve=i[l.tint],De=(je,Fe,Ie)=>{Fe=ht(Fe,0,c-1.001),Ie=ht(Ie,0,s-1.001);let Ft=Fe|0,jt=Ie|0,Dt=Fe-Ft,yt=Ie-jt,gt=jt*c+Ft;return(je[gt]*(1-Dt)+je[gt+1]*Dt)*(1-yt)+(je[gt+c]*(1-Dt)+je[gt+c+1]*Dt)*yt},Je=(je,Fe,Ie)=>{let Ft=ke[Fe*3+Ie],jt=$e[Fe*6+Ie*2],Dt=$e[Fe*6+Ie*2+1];return(je[Ft]*(1-jt)+je[Ft+1]*jt)*(1-Dt)+(je[Ft+c]*(1-jt)+je[Ft+c+1]*jt)*Dt};if(!qe){for(let je=0,Fe=0;je<H.length;je++,Fe+=4)be[Fe]=H[je],be[Fe+1]=H[je],be[Fe+2]=H[je]-1,be[Fe+3]=255;qe=!0,ge=!1,R.fill(-1)}let J=!1;for(let je=0;je<C.length;je++){let Fe=Math.abs(C[je]-R[je])>2e-6||Math.abs(q[je]-ce[je])>2e-6;ze[je]=Fe,Fe&&(J=!0,R[je]=C[je],ce[je]=q[je])}if(!J&&ge)return;ge=!0;let ie=Math.ceil(.46/A)+2;for(let je=0;je<s;je++){let Fe=-1e9;for(let Ie=0;Ie<c;Ie++)ze[je*c+Ie]&&(Fe=Ie),Me[je*c+Ie]=Ie-Fe<=ie;Fe=1e9;for(let Ie=c-1;Ie>=0;Ie--)ze[je*c+Ie]&&(Fe=Ie),Fe-Ie<=ie&&(Me[je*c+Ie]=1)}for(let je=0;je<c;je++){let Fe=-1e9;for(let Ie=0;Ie<s;Ie++)Me[Ie*c+je]&&(Fe=Ie),xe[Ie*c+je]=Ie-Fe<=ie;Fe=1e9;for(let Ie=s-1;Ie>=0;Ie--)Me[Ie*c+je]&&(Fe=Ie),Fe-Ie<=ie&&(xe[Ie*c+je]=1)}let se=Ve.abs,ve=Ve.scatter,Ee=Ve.shadow,Le=Ve.caustic,Be=Ve.inner,me=Ve.fres,oe=1-ve*.12,we=ve*.16,pe=1/h,Ue=.06/A,mt=.1/A,ft=(c-1)/2,We=(s-1)/2,it=1/M,Oa=O*1.3,oa=0,Ct=0;for(let je=0;je<ne;je++){let Fe=je/(ne-1)*2-1;for(let Ie=0;Ie<re;Ie++,oa+=4,Ct++){if(!u[Ct]||!xe[ke[Ct*3]])continue;let Ft=(Ie/(re-1)*2-1)*M,jt=B[Ct],Dt=jt>0?Math.max(0,jt+Je(T,Ct,0)):0,yt=Je(q,Ct,1)*pe;yt=yt<0?0:yt>1?1:yt;let gt=Je(q,Ct,2)*pe;gt=gt<0?0:gt>1?1:gt,gt*=gt;let Wt=H[Ct]*(1-yt*Ee)+(yt>.25?gt*gt*(yt-.25)*Le:0);if(Dt<1e-4){be[oa]=Wt,be[oa+1]=Wt,be[oa+2]=Wt-1;continue}let Ya=N[Ct]+Je(_,Ct,0),ue=X[Ct]+Je(w,Ct,0),kt=-Ya*.7,lt=-ue*.7,Lt=1/Math.sqrt(kt*kt+lt*lt+1),Ia=kt*Lt,va=lt*Lt,ua=Dt*pe,Ua=.16+ua*.28,St=Ft+Ia*Ua,ot=Fe+va*Ua,Ot=De(q,(St*it+1)*ft-Ue,(ot+1)*We-mt)*pe;Ot=Ot<0?0:Ot>1?1:Ot;let Ea=Lt*Lt,Nt=at(St,ot,Ea*Ea*Lt*1.6)*(1-Ot*Be),Kt=se[0]?Nt*Math.exp(-se[0]*ua):Nt,Yt=se[1]?Nt*Math.exp(-se[1]*ua):Nt,Ut=se[2]?Nt*Math.exp(-se[2]*ua):Nt;if(ve){let U=ve*(1-Math.exp(-ua*2.2));Kt+=(Ve.sc[0]-Kt)*U,Yt+=(Ve.sc[1]-Yt)*U,Ut+=(Ve.sc[2]-Ut)*U}let Jt=Ia*ye[0]+va*ye[1]+Lt*ye[2],m=oe+we*(Jt>0?Jt:0);if(Kt*=m,Yt*=m,Ut*=m,Lt<.9995){let U=-va*1.5+.25;U=U<0?0:U>1?1:U;let ee=112+130*U,_e=Math.pow(1-Lt,2.6)*me;Kt+=(ee-Kt)*_e,Yt+=(ee-Yt)*_e,Ut+=(ee+2-Ut)*_e}let g=Ia*fe[0]+va*fe[1]+Lt*fe[2];if(g>.95){let U=Math.pow(g,90),ee=(U*1.1+(g>.985?Math.pow(g,400)*1.2:0))*255;Kt+=ee,Yt+=ee,Ut+=ee}let v=Dt/(Math.sqrt(Ya*Ya+ue*ue)*Oa+1e-4);v>1&&(v=1),be[oa]=Wt+(Kt-Wt)*v,be[oa+1]=Wt+(Yt-Wt)*v,be[oa+2]=Wt-1+(Ut-Wt+1)*v}}p.putImageData(de,0,0),t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(d,0,0,e.width,e.height)},cost(be){Ze.ms=be,window.__gelCost&&window.__gelCost.push(be),be>(o?7:13)?D++:D=Math.max(0,D-1),D>12&&W>.56&&!b.down&&b.press<.05&&(W=Math.max(.55,W*.82),D=0,Ze.resize($,K))}};return Ze}function Kd(e,a){let o=!a.detail,t=e.getContext("2d"),d=document.createElement("canvas"),p=d.getContext("2d"),i=document.createElement("canvas"),l=i.getContext("2d"),c={size:0,mag:.7,ca:.35},f,h,b,$,K=80,s={x:0,y:0},M={x:0,y:0},A={x:0,y:0},P=!1,F=!0,I={},B=!1;function N(){let T=p;if(T.setTransform(b,0,0,b,0,0),T.fillStyle="#f1f1ef",T.fillRect(0,0,f,h),o&&Math.min(f,h)<300){let H=Math.min(f*.25,h*.21);T.fillStyle="#262827",T.font=`200 ${H}px "Helvetica Neue",Inter,Arial`,T.textBaseline="alphabetic";let u=f*.11,O=h*.44;T.fillText("Look",u,O),T.fillText("closer.",u,O+H*1.02),T.strokeStyle="rgba(38,40,39,.65)",T.lineWidth=.6;let W=f*.72,D=h*.84,R=Math.min(f,h)*.2;for(let ce=0;ce<12;ce++){T.beginPath();for(let ze=0;ze<=48;ze++){let Me=ze/48*Math.PI*2,xe=R*(.18+ce*.07)*(1+.12*Math.sin(Me*3+ce*.4)),ge=W+Math.cos(Me)*xe*1.15,qe=D+Math.sin(Me)*xe*.78;ze?T.lineTo(ge,qe):T.moveTo(ge,qe)}T.stroke()}A={x:f*.42,y:h*.42},$=T.getImageData(0,0,d.width,d.height);return}let E=f/h>1.15,C=Math.max(o?30:20,Math.min(f,h)*.08),_=Math.min(f*(E?o?.075:.09:.13),h*.15,84);T.fillStyle="#262827",T.font=`200 ${_}px "Helvetica Neue",Inter,Arial`,T.textBaseline="top",(E?["Light bends","here."]:["Light","bends here."]).forEach((H,u)=>T.fillText(H,C,C+u*_*1.02));let w="A lens does not add anything to the page. It only redistributes what is already there, pulling the centre toward you and folding the edge away. Every line keeps its weight; only its position changes.".split(" "),q=ht(Math.min(f,h)*.032,9,12);T.font=`${q}px "Helvetica Neue",Arial`,T.fillStyle="#4a4c4b";let V=E?f*.53:C,ae=E?f*.24:f-2*C,re=E?C+6:C+_*2.4,ne="";A={x:V+Math.min(ae*.4,70),y:re+q*4};for(let H of w){let u=ne?ne+" "+H:H;T.measureText(u).width>ae?(T.fillText(ne,V,re),re+=q*1.45,ne=H):ne=u}T.fillText(ne,V,re),T.strokeStyle="rgba(38,40,39,.72)",T.lineWidth=.7;let de=E?f*.78:f*.62,ke=E?h*.68:h*.78,$e=Math.min(f,h)*(E?.25:.2);for(let H=0;H<20;H++){T.beginPath();for(let u=0;u<=64;u++){let O=u/64*Math.PI*2,W=$e*(.15+H*.043)*(1+.12*Math.sin(O*3+H*.4)+.05*Math.sin(O*7)),D=de+Math.cos(O)*W*1.15,R=ke+Math.sin(O)*W*.78;u?T.lineTo(D,R):T.moveTo(D,R)}T.stroke()}T.strokeStyle="rgba(38,40,39,.16)";for(let H=0;H<8;H++)T.beginPath(),T.moveTo(C,h*(E?.58:.62)+H*7),T.lineTo(f*(E?.4:.42),h*(E?.58:.62)+H*7),T.stroke();$=T.getImageData(0,0,d.width,d.height)}let X={S:c,resize(T,E){f=T,h=E,b=Math.min(Ha,o?1.5:2),e.width=d.width=Math.round(T*b),e.height=d.height=Math.round(E*b),N(),K=c.size?c.size/2:ht(Math.min(T,E)*.24,46,140),(!B||!o)&&(s={...A},M={...A},B=!0),F=!0},set(T){T==="size"&&(K=c.size/2),F=!0},retheme(){f&&(N(),F=!0)},ptr(T,E,C,_){if(o&&_.pointerType!=="mouse")return!1;if(T==="leave"){P=!1;return}if(o&&T==="down")return!1;(T==="move"||T==="down")&&(!P&&!o&&er.glass(),P=!0,M={x:E,y:C})},step(T,E){o&&X.autoOn(E)&&(M={x:f*(.5+.3*Math.sin(E*.38)),y:h*(.5+.2*Math.sin(E*.53+1))});let C=1-Math.exp(-T*(P?20:o?2.2:3));s.x+=(M.x-s.x)*C,s.y+=(M.y-s.y)*C,!(!F&&Math.abs(s.x-I.x)<.05&&Math.abs(s.y-I.y)<.05)&&(I={x:s.x,y:s.y},F=!1,X.render(E))},render(T){t.setTransform(1,0,0,1,0,0),t.drawImage(d,0,0),t.setTransform(b,0,0,b,0,0);let E=s.x,C=s.y,_=E+K*.16,w=C+K*.3,q=t.createRadialGradient(_,w,K*.2,_,w,K*1.15);q.addColorStop(0,"rgba(0,0,0,.10)"),q.addColorStop(.75,"rgba(0,0,0,.05)"),q.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=q,t.beginPath(),t.ellipse(_,w,K*1.15,K,0,0,7),t.fill(),q=t.createRadialGradient(_+K*.1,w+K*.12,0,_+K*.1,w+K*.12,K*.45),q.addColorStop(0,"rgba(255,255,255,.75)"),q.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=q,t.beginPath(),t.arc(_+K*.1,w+K*.12,K*.45,0,7),t.fill();let V=Math.round(K*b),ae=V*2+2;i.width!==ae&&(i.width=i.height=ae),(!X.ob||X.ob.width!==ae)&&(X.ob=l.createImageData(ae,ae));let re=X.ob,ne=re.data,de=$.data,ke=$.width,$e=$.height,H=E*b,u=C*b,O=c.mag,W=c.ca;for(let D=0;D<ae;D++)for(let R=0;R<ae;R++){let ce=R-V-1,ze=D-V-1,Me=Math.hypot(ce,ze)/V;if(Me>1.003)continue;let xe=(D*ae+R)*4,ge=Math.sqrt(Math.max(0,1-Me*Me)),qe=1/(1+O*Math.pow(ge,.7)),Re=Math.pow(1-ge,3)*.55,Ke=Me>0?ce/(Me*V):0,ut=Me>0?ze/(Me*V):0;for(let Oe=0;Oe<3;Oe++){let Ve=1+(Oe-1)*W*.06*(1-ge),De=ht(H+ce*qe*Ve+Ke*Re*V|0,0,ke-1),Je=ht(u+ze*qe*Ve+ut*Re*V|0,0,$e-1);ne[xe+Oe]=de[(Je*ke+De)*4+Oe]*(Me>.9?.985-(Me-.9)*1.6:.985)}let at=ce/V+.38,rt=ze/V+.42,Ze=Math.exp(-(at*at+rt*rt)/.004)*.75+Math.exp(-(at*at*4+rt*rt)/.25)*.04,be=Math.exp(-Math.pow((Me-.955)/.012,2))*Math.max(0,-(ce+ze)/V)*.55,ye=Math.exp(-(Math.pow(ce/V-.45,2)+Math.pow(ze/V-.5,2))/.012)*.12,fe=(Ze+be+ye)*255;ne[xe]+=fe,ne[xe+1]+=fe,ne[xe+2]+=fe+1,ne[xe+3]=255*ht((1.003-Me)/.012,0,1)}l.putImageData(re,0,0),t.setTransform(1,0,0,1,0,0),t.drawImage(i,H-V-1,u-V-1),t.setTransform(b,0,0,b,0,0),t.strokeStyle="rgba(0,0,0,.08)",t.lineWidth=.6,t.beginPath(),t.arc(E,C,K,0,7),t.stroke()}};return X}function Jd(e,a){let o=!a.detail,t=e.getContext("2d"),d=document.createElement("canvas"),p=d.getContext("2d"),i={word:a.word||"Elastic",reach:80,snap:12},l,c,f,h,b=null,$=null,K={x:0,y:0},s={x:0,y:0},M={x:0,y:0},A=null,P=!1,F={next:0},I=!1;function B(){p.setTransform(1,0,0,1,0,0),p.fillStyle="#f6f6f5",p.fillRect(0,0,d.width,d.height),p.setTransform(f,0,0,f,0,0);let E=Math.min(c*.46,l*.25);p.font=`300 ${E}px "Helvetica Neue",Inter,Arial`,p.letterSpacing="-0.04em";let C=p.measureText(i.word).width;C>l*.84&&(E*=l*.84/C,p.font=`300 ${E}px "Helvetica Neue",Inter,Arial`),p.fillStyle="#262827",p.textAlign="center",p.textBaseline="middle",p.fillText(i.word,l/2,c*.5),h=p.getImageData(0,0,d.width,d.height);let _=h.data,w=h.width,q=1e9,V=1e9,ae=-1,re=-1;for(let ne=0;ne<h.height;ne++)for(let de=0;de<w;de++)_[(ne*w+de)*4]<238&&(de<q&&(q=de),de>ae&&(ae=de),ne<V&&(V=ne),ne>re&&(re=ne));b=ae<0?null:{x0:q-1,y0:V-1,x1:ae+2,y1:re+2},$=t.createImageData(d.width,d.height)}let N=()=>i.reach*ht(Math.min(l,c)/380,.45,1.3),X=E=>{let C=Math.hypot(E.x,E.y),_=Math.min(Math.min(l,c)*.5,N()*1.8),w=C>0?_*Math.tanh(C/_)/C:0;return{x:E.x*w,y:E.y*w}},T={S:i,resize(E,C){l=E,c=C,f=Math.min(Ha,o?1.25:1.5),e.width=d.width=Math.round(E*f),e.height=d.height=Math.round(C*f),B(),I=!1},set(E){E==="word"&&B(),I=!1},retheme(){l&&(B(),I=!1)},ptr(E,C,_,w){if(o)return!1;E==="down"?(Math.hypot(s.x,s.y)<2&&(K={x:C,y:_},s={x:0,y:0}),A={x:C-s.x,y:_-s.y},M={x:0,y:0},P=!1,I=!1):E==="move"&&A?(s=X({x:C-A.x,y:_-A.y}),I=!1):(E==="up"||E==="leave")&&A&&(er.twang(Math.hypot(s.x,s.y)),A=null)},step(E,C){if(!A&&T.autoOn(C)){if(!P&&C>F.next){P=!0,F.t0=C,K={x:l*(.28+.44*fa()),y:c*(.42+.16*fa())};{let _=N()*.85;F.tx=ht((fa()-.5)*l*.14,-_,_),F.ty=(fa()<.6?-1:1)*Math.min(_,c*(.15+.08*fa()))}s={x:0,y:0},M={x:0,y:0}}if(P){let _=(C-F.t0)/.75;if(_<1){let w=1-Math.pow(1-_,3);s={x:F.tx*w,y:F.ty*w}}else _>1.3&&(P=!1,F.next=C+1.4+fa()*1.2)}I=!1}else P&&(P=!1);if(!A&&!P){let _=i.snap*i.snap*1.6,w=i.snap*.55;for(let q=0;q<4;q++){let V=E/4;M.x+=(-_*s.x-w*M.x)*V,M.y+=(-_*s.y-w*M.y)*V,s.x+=M.x*V,s.y+=M.y*V}}if(!A&&!P&&Math.hypot(s.x,s.y)<.15&&Math.hypot(M.x,M.y)<.5){if(I)return;s={x:0,y:0},I=!0}T.render()},render(){if(t.setTransform(1,0,0,1,0,0),t.drawImage(d,0,0),Math.hypot(s.x,s.y)<.15||!b)return;let E=N()*f,C=K.x*f,_=K.y*f,w=s.x*f,q=s.y*f,V=Math.hypot(w,q),ae=E*3+V,re=ht(Math.floor(Math.max(Math.min(C,C+w)-ae,b.x0-V-1)),0,e.width),ne=ht(Math.ceil(Math.min(Math.max(C,C+w)+ae,b.x1+V+1)),0,e.width),de=ht(Math.floor(Math.max(Math.min(_,_+q)-ae,b.y0-V-1)),0,e.height),ke=ht(Math.ceil(Math.min(Math.max(_,_+q)+ae,b.y1+V+1)),0,e.height),$e=ne-re,H=ke-de;if($e<2||H<2)return;let u=$.data,O=$.width,W=h.data,D=h.width,R=h.height,ce=1/(2*E*E);for(let ze=0;ze<H;ze++)for(let Me=0;Me<$e;Me++){let xe=re+Me,ge=de+ze,qe=xe,Re=ge;for(let fe=0;fe<3;fe++){let Oe=qe-C,Ve=Re-_,De=Math.exp(-(Oe*Oe+Ve*Ve)*ce);qe=xe-w*De,Re=ge-q*De}qe=ht(qe,0,D-1.001),Re=ht(Re,0,R-1.001);let Ke=qe|0,ut=Re|0,at=qe-Ke,rt=Re-ut,Ze=(ut*D+Ke)*4,be=Ze+D*4,ye=(ge*O+xe)*4;for(let fe=0;fe<3;fe++)u[ye+fe]=(W[Ze+fe]*(1-at)+W[Ze+4+fe]*at)*(1-rt)+(W[be+fe]*(1-at)+W[be+4+fe]*at)*rt;u[ye+3]=255}t.putImageData($,0,0,re,de,$e,H)}};return T}function Qd(e,a){let o=!a.detail,t=e.getContext("2d"),d={k:100,lines:!0},p,i,l,c=[],f=[],h=null,b={next:0},$,K=[{n:"graphite",m:1.8,g:"420 g"},{n:"ceramic",m:.8,g:"180 g"},{n:"alu",m:1.1,g:"240 g"},{n:"graphite",m:1.8,g:"420 g"},{n:"ceramic",m:.8,g:"180 g"}];function s(P,F){let I=null,B=1e9;for(let N of c){if(N.t&&N.t!==P)continue;let X=Math.hypot(N.x-P.x,N.y-P.y);X<B&&(B=X,I=N)}return F||B<l*.9?I:null}function M(P,F,I,B,N){t.beginPath(),t.roundRect?t.roundRect(P,F,I,B,N):t.rect(P,F,I,B)}let A={S:d,resize(P,F){p=P,i=F,e.width=Math.round(P*Ha),e.height=Math.round(F*Ha);let I=P>=F,B=I?o?3:4:2,N=I?2:o?3:4;l=Math.min(P/(B+1.1),F/(N+.9))*.84;let X=l*1.2;c=[];for(let C=0;C<N;C++)for(let _=0;_<B;_++)c.push({x:P/2+(_-(B-1)/2)*X,y:F/2+(C-(N-1)/2)*X,t:null});let T=Math.min(o?4:5,c.length-1);f=K.slice(0,T).map((C,_)=>({...C,i:_,x:0,y:0,vx:0,vy:0,z:0,slot:null}));let E=I?[0,1,3+(o?1:2),2].concat([4]):[0,1,2,4,5];f.forEach((C,_)=>{let w=c[E[_]%c.length];C.slot=w,w.t=C,C.x=w.x,C.y=w.y}),h=null,A.drawn=!1},ptr(P,F,I,B){if(o)return!1;if(P==="down"){let N=null;for(let X of f)Math.abs(F-X.x)<l*.5&&Math.abs(I-X.y)<l*.5&&(!N||X.z>=N.z)&&(N=X);if(!N)return!1;h={t:N,px:F,py:I,ox:F-(N.slot?N.slot.x:N.x),oy:I-(N.slot?N.slot.y:N.y)}}else P==="move"&&h&&!h.auto?(h.px=F,h.py=I):(P==="up"||P==="leave")&&h&&!h.auto&&(h=null)},step(P,F){if(A.autoOn(F)&&(!h||h.auto)){if(!h&&F>b.next){let T=f[fa()*f.length|0],E=c.filter(C=>!C.t);if(T&&T.slot&&E.length){let C=E[fa()*E.length|0];h={t:T,auto:!0,px:T.x,py:T.y,ox:0,oy:0,fx:T.x,fy:T.y,tx:C.x,ty:C.y,t0:F}}}if(h&&h.auto){let T=(F-h.t0)/1.15;if(T>=1)h=null,b.next=F+1.3+fa();else{let E=T<.5?4*T*T*T:1-Math.pow(-2*T+2,3)/2,C=Math.sin(T*Math.PI)*l*.18;h.px=h.fx+(h.tx-h.fx)*E,h.py=h.fy+(h.ty-h.fy)*E-C}}}else h&&h.auto&&!A.autoOn(F)&&(h=null);let I=3,B=P/I,N=d.k;for(let T=0;T<I&&P>0;T++)for(let E of f){let C=0,_=0;if(h&&h.t===E){let q=h.px-h.ox,V=h.py-h.oy;if(E.slot){let ne=q-E.slot.x,de=V-E.slot.y;if(Math.hypot(ne,de)<l*.42*(N/100)){E.x=E.slot.x+ne*.14,E.y=E.slot.y+de*.14,E.vx=E.vy=0;continue}E.slot.t=null,E.slot=null,er.thunk(E.m*1.6)}let ae=260/E.m;C+=(q-E.x)*ae,_+=(V-E.y)*ae;let re=s(E);if(re){let ne=re.x-E.x,de=re.y-E.y,ke=Math.hypot(ne,de);if(ke<l*.9){let $e=N*14*(1-ke/(l*.9))/E.m;C+=ne/(ke+1)*$e*l*.12,_+=de/(ke+1)*$e*l*.12}}E.z+=(1-E.z)*.2}else if(E.slot){let q=N*6/E.m;C+=(E.slot.x-E.x)*q,_+=(E.slot.y-E.y)*q,E.z+=(0-E.z)*.25}else{let q=s(E,!0);q&&(q.t=E,E.slot=q,er.thunk(E.m))}for(let q of f)if(q!==E){let V=E.x-q.x,ae=E.y-q.y,re=Math.hypot(V,ae);if(re<l*1.02&&re>0){let ne=(l*1.02-re)*900;C+=V/re*ne,_+=ae/re*ne}}let w=2*Math.sqrt(260/E.m)*.9;E.vx+=(C/E.m-w*E.vx)*B,E.vy+=(_/E.m-w*E.vy)*B,E.x+=E.vx*B,E.y+=E.vy*B}let X=!!h;for(let T of f)(Math.abs(T.vx)+Math.abs(T.vy)>.02||T.z>.002||T.slot&&Math.abs(T.x-T.slot.x)+Math.abs(T.y-T.slot.y)>.05)&&(X=!0);!X&&A.drawn||(A.drawn=!X,A.render())},set(){A.drawn=!1},retheme(){A.drawn=!1},render(){let P=Ha;t.setTransform(P,0,0,P,0,0);let F=t.createLinearGradient(0,0,0,i);if(F.addColorStop(0,"#e9eae9"),F.addColorStop(1,"#dddfde"),t.fillStyle=F,t.fillRect(0,0,p,i),d.lines){t.strokeStyle="#262827",t.lineWidth=.8,t.lineCap="round";let I=ht(l*.17,11,16);for(let B=I/2;B<i;B+=I)for(let N=I/2;N<p;N+=I){let X=0,T=0,E=!1;for(let w of f){let q=N-w.x,V=B-w.y;if(Math.abs(q)<l*.52&&Math.abs(V)<l*.52){E=!0;break}let ae=q*q+V*V,re=Math.sqrt(ae),ne=ae*ae*re,de=-V*l*l*w.m;X+=3*de*q/ne,T+=3*de*V/ne+l*l*w.m/(ae*re)}if(E)continue;let C=Math.hypot(X,T);if(C<1e-4)continue;t.globalAlpha=ht(C*l*.3*(d.k/100),.03,.5);let _=I*.36;t.beginPath(),t.moveTo(N-X/C*_,B-T/C*_),t.lineTo(N+X/C*_,B+T/C*_),t.stroke()}t.globalAlpha=1}for(let I of c)t.strokeStyle="rgba(38,40,39,.2)",t.lineWidth=1,t.beginPath(),t.arc(I.x,I.y,2.5,0,7),t.stroke(),t.strokeStyle="rgba(38,40,39,.07)",M(I.x-l/2,I.y-l/2,l,l,l*.12),t.stroke();[...f].sort((I,B)=>I.z-B.z).forEach(I=>{let B=l*.48,N=1+I.z*.04,X=l*.13;t.save(),t.translate(I.x,I.y),t.scale(N,N),t.shadowColor="rgba(0,0,0,"+(.14+I.z*.12)+")",t.shadowBlur=8+I.z*30,t.shadowOffsetY=3+I.z*16;let T=t.createLinearGradient(0,-B,0,B);if(I.n==="graphite"?(T.addColorStop(0,"#3d3f40"),T.addColorStop(1,"#252627")):I.n==="ceramic"?(T.addColorStop(0,"#fff"),T.addColorStop(1,"#ececea")):(T.addColorStop(0,"#dcdddf"),T.addColorStop(1,"#bfc1c3")),t.fillStyle=T,M(-B,-B,B*2,B*2,X),t.fill(),t.shadowColor="transparent",I.n==="alu"){t.save(),M(-B,-B,B*2,B*2,X),t.clip(),t.strokeStyle="rgba(255,255,255,.35)",t.lineWidth=.5;for(let E=-B;E<B;E+=2.2)t.beginPath(),t.moveTo(-B,E),t.lineTo(B,E),t.stroke();t.restore()}t.strokeStyle=I.n==="graphite"?"rgba(255,255,255,.16)":"rgba(255,255,255,.95)",t.beginPath(),t.moveTo(-B+X,-B+.5),t.lineTo(B-X,-B+.5),t.stroke(),I.n!=="graphite"&&(t.strokeStyle="rgba(0,0,0,.07)",M(-B,-B,B*2,B*2,X),t.stroke()),l>70&&(t.fillStyle=I.n==="graphite"?"rgba(243,243,241,.5)":"rgba(38,40,39,.42)",t.font='10px "Helvetica Neue",Arial',t.textAlign="right",t.fillText(I.g,B-10,B-10)),t.beginPath(),t.arc(0,0,B*.16,0,7),t.strokeStyle=I.n==="graphite"?"rgba(255,255,255,.1)":"rgba(0,0,0,.08)",t.stroke(),t.restore()})}};return A}var Zd={gel:Xd,lens:Kd,type:Jd,mag:Qd},kr=[{id:"gel",name:"Gel Press",cat:"Materials",line:"Clear gel that sinks under pressure and slowly recovers.",lead:"A slab of clear gel that keeps its volume. Press and it sinks, the displaced mass rises around your finger, and it settles back on its own time.",hint:"Press, hold and drag",ctl:[{t:"sw",k:"tint",l:"Material",o:[["Clear","#eef3f4"],["Milk","#fafaf8"],["Smoke","#5c5f61"]]},{t:"r",k:"stiff",l:"Firmness",min:60,max:600},{t:"r",k:"damp",l:"Viscosity",min:2,max:30}]},{id:"lens",name:"Interactive Lens",cat:"Materials",line:"Thick optical glass that bends the page beneath it.",lead:"A disc of thick optical glass. It enlarges the centre, folds the edge with a trace of colour and leaves a point of focused light in its shadow.",hint:"Move or drag the lens",ctl:[{t:"r",k:"size",l:"Diameter",min:120,max:320},{t:"r",k:"mag",l:"Power",min:0,max:1.4,step:.01},{t:"r",k:"ca",l:"Dispersion",min:0,max:1,step:.01}]},{id:"type",name:"Elastic Lettering",cat:"Typography",line:"Letters that stretch under tension and snap back.",lead:"The glyphs themselves stretch. Grab any part of a letter and pull: strokes thin and lengthen, then snap back past rest and settle.",hint:"Grab a letter and pull",ctl:[{t:"txt",k:"word",l:"Word"},{t:"r",k:"reach",l:"Reach",min:30,max:160},{t:"r",k:"snap",l:"Snap",min:4,max:40}]},{id:"mag",name:"Magnetic Stack",cat:"Interaction",line:"Weighted pieces that pull, resist and settle into place.",lead:"Weighted modules on a magnetic rack. Graphite lags behind your hand, ceramic follows quickly, and every slot holds on before it lets go.",hint:"Drag a piece to another slot",ctl:[{t:"r",k:"k",l:"Field strength",min:20,max:200},{t:"chk",k:"lines",l:"Show field"}]}];function Hr(e,a,o={}){Ls();let t=document.createElement("canvas");t.className="obj-cv",t.setAttribute("aria-hidden","true"),e.prepend(t);let d=Vd(t,Zd[a],o);return{piece:d,dispose(){Gd(d),t.remove()}}}var xs=e=>typeof e=="number"&&e%1?e.toFixed(2):e;function Es(e,a,o,t){Ls();let d=kr.find(c=>c.id===o),p=Hr(e,o,{detail:!0,auto:!1}),i=p.piece.S;o==="lens"&&(i.size=Math.round(ht(e.clientWidth*.38,140,240)),p.piece.set("size")),a.insertAdjacentHTML("beforeend",d.ctl.map(c=>{let f=i[c.k];return c.t==="sw"?`<div class="obj-ctl"><span>${c.l}</span><div class="obj-sw">${c.o.map((h,b)=>`<button type="button" aria-label="${h[0]}" aria-pressed="${b===f}" data-k="${c.k}" data-v="${b}" style="background:${h[1]}"></button>`).join("")}</div></div>`:c.t==="txt"?`<label class="obj-ctl"><span>${c.l}</span><input class="obj-txt" data-k="${c.k}" value="${f}" maxlength="14"></label>`:c.t==="chk"?`<label class="obj-ctl"><span>${c.l}</span><input type="checkbox" data-k="${c.k}"${f?" checked":""}></label>`:`<label class="obj-ctl"><span>${c.l}</span><input type="range" data-k="${c.k}" min="${c.min}" max="${c.max}" step="${c.step||1}" value="${f}"><output>${xs(f)}</output></label>`}).join(""));let l=c=>c.style.setProperty("--p",`${(c.value-c.min)/(c.max-c.min)*100}%`);return a.querySelectorAll("input[type=range]").forEach(l),a.addEventListener("input",c=>{c.target.type==="range"&&l(c.target);let f=c.target.dataset.k;if(!f)return;let h=c.target.type==="checkbox"?c.target.checked:c.target.type==="range"?+c.target.value:c.target.value||" ";i[f]=h,p.piece.set?.(f);let b=c.target.nextElementSibling;b?.tagName==="OUTPUT"&&(b.textContent=xs(h))}),a.addEventListener("click",c=>{let f=c.target.closest(".obj-sw button");f&&(i[f.dataset.k]=+f.dataset.v,p.piece.set?.(f.dataset.k),f.parentElement.querySelectorAll("button").forEach(h=>h.setAttribute("aria-pressed",String(h===f))))}),t?.addEventListener("click",()=>{let c=document.createElement("a");c.href=URL.createObjectURL(new Blob([JSON.stringify({product:o,name:d.name,version:"preview",settings:{...i}},null,2)],{type:"application/json"})),c.download=`${o}-settings.json`,c.click(),setTimeout(()=>URL.revokeObjectURL(c.href),1e3)}),{dispose:()=>{Za?.friction(0),p.dispose()}}}var vs=!1;function Ls(){if(vs)return;vs=!0;let e=document.createElement("style");e.textContent=`
.obj-cv{position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:inherit}
.file-v.has-obj{background:#efefed}
:root[data-theme=dark] .file-v.has-obj,:root[data-theme=dark] .obj-stage{background:#efefed}
.file-v.has-obj::after{display:none}
.file-tag{position:absolute;right:10px;top:10px;z-index:2;font:500 10px/1 var(--mono,ui-monospace,monospace);padding:5px 7px;border-radius:7px;background:rgba(255,255,255,.72);color:var(--ink,#262827);letter-spacing:.02em;pointer-events:none}
.file-p.soon{color:var(--muted,#8a8c8b)}
:root[data-theme=dark] .file-tag{background:rgba(22,23,24,.62);color:#e9eae8}
.obj-detail{font-family:var(--font,"Helvetica Neue",Inter,Arial,sans-serif);color:var(--ink,#262827);-webkit-font-smoothing:antialiased;position:fixed;inset:0;z-index:80;display:flex;align-items:center;justify-content:center;padding:28px;background:rgba(243,243,241,.5);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px);animation:obj-f .25s ease both}
@keyframes obj-f{from{opacity:0}}
.obj-sheet{position:relative;display:grid;grid-template-columns:minmax(0,1fr) 340px;width:min(1240px,100%);height:min(760px,100%);border-radius:30px;overflow:hidden;animation:obj-r .4s cubic-bezier(.2,.7,.2,1) both}
@keyframes obj-r{from{opacity:0;transform:translateY(14px) scale(.985)}}
.obj-stage{position:relative;margin:10px;border-radius:22px;overflow:hidden;background:#efefed}
.obj-stage .obj-cv{touch-action:none;cursor:grab}
.obj-hint{position:absolute;left:16px;bottom:14px;z-index:2;font-size:11px;color:var(--muted,#8a8c8b);pointer-events:none}
.obj-panel{display:flex;flex-direction:column;gap:16px;padding:28px 26px 22px 16px;overflow:auto}
.obj-crumb{font-size:11px;color:var(--muted,#8a8c8b)}
.obj-panel h2{font-weight:200;font-size:38px;letter-spacing:-.03em;line-height:1;margin:0}
.obj-lead{font-size:13px;color:var(--soft,#5d5f5e);margin:0}
.obj-status{display:inline-flex;align-items:center;gap:8px;font-size:12px;color:var(--soft,#5d5f5e)}.obj-status i{width:6px;height:6px;border-radius:50%;background:#b8bab9}
.obj-group{border-top:1px solid rgba(38,40,39,.1);padding-top:14px;display:flex;flex-direction:column;gap:12px}
.obj-group h4{font-size:11px;font-weight:400;color:var(--muted,#8a8c8b);margin:0}
.obj-ctl{display:flex;align-items:center;justify-content:space-between;gap:14px;font-size:12px;color:var(--soft,#5d5f5e);min-height:28px}
.obj-ctl input[type=range]{flex:1;min-width:0;accent-color:#262827}.obj-ctl output{min-width:30px;text-align:right;color:var(--muted,#8a8c8b);font-variant-numeric:tabular-nums}
.obj-txt{flex:1;font:13px inherit;border:0;border-bottom:1px solid rgba(38,40,39,.15);background:transparent;padding:4px 0;color:inherit;outline:0}
.obj-sw{display:flex;gap:9px}.obj-sw button{width:22px;height:22px;border-radius:50%;border:0;cursor:pointer;box-shadow:0 0 0 1px rgba(0,0,0,.1),inset 0 -3px 6px rgba(0,0,0,.12),inset 0 2px 3px rgba(255,255,255,.9)}.obj-sw button[aria-pressed=true]{outline:1px solid #262827;outline-offset:3px}
.obj-inc{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px;font-size:12px;color:var(--soft,#5d5f5e)}.obj-inc li:before{content:"";display:inline-block;width:4px;height:4px;border-radius:50%;background:#b8bab9;margin:0 9px 2px 0}
.obj-acts{display:flex;gap:8px;flex-wrap:wrap;margin-top:auto;padding-top:6px}
.obj-x{position:absolute;right:16px;top:16px;z-index:3;width:34px;padding:0}
html.obj-lock,html.obj-lock body{overflow:hidden}
@media (max-width:700px){.obj-detail{padding:0;align-items:stretch}.obj-sheet{display:block;height:100%;border-radius:0;overflow:auto;background:#f6f6f5}.obj-stage{height:min(62vh,125vw)}.obj-panel{overflow:visible;padding:16px 20px calc(28px + env(safe-area-inset-bottom))}.obj-panel h2{font-size:32px}.obj-ctl{min-height:42px}.obj-x{position:fixed;right:16px;top:16px;width:40px;height:40px}}
/* Information panel (2026-10-28): the sheet is graphite in both themes (info-panel.css.js styles the panel);
   the stage keeps its tone. Dark theme (2026-10-27): a graphite sheet over a dark scrim. The shared dark .glass rule left the sheet
   translucent over a pale scrim, so white headings and grey copy sat on light grey. */
:root[data-theme=dark] .obj-detail{color:#ecedea;background:rgba(6,6,7,.62)}
.obj-detail .obj-sheet.glass,:root[data-theme=dark] .obj-detail .obj-sheet.glass{background:linear-gradient(180deg,#1b1c1d,#141516 60%,#111213)!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.1),inset 0 0 0 1px rgba(255,255,255,.07),0 40px 90px -30px rgba(0,0,0,.9)!important}
.obj-detail .obj-sheet.glass::after{display:none}
.obj-detail .obj-sheet.glass{color:#eeefec}
:root .obj-panel.info-dark.info-dark{background:none;box-shadow:none}
.obj-x.gb{color:#eeefec!important;background:rgba(22,23,24,.78)!important;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);box-shadow:inset 0 1px 0 rgba(255,255,255,.25),inset 0 0 0 1px rgba(255,255,255,.1)!important}
:root[data-theme=dark] .obj-panel h2{color:#f1f2ef}
:root[data-theme=dark] .obj-lead,:root[data-theme=dark] .obj-status,:root[data-theme=dark] .obj-ctl,:root[data-theme=dark] .obj-inc{color:#b4b7b4}
:root[data-theme=dark] .obj-crumb,:root[data-theme=dark] .obj-group h4,:root[data-theme=dark] .obj-ctl output,:root[data-theme=dark] .obj-hint{color:#8c8f8d}
:root[data-theme=dark] .obj-group{border-top-color:rgba(255,255,255,.09)}
:root[data-theme=dark] .obj-status i,:root[data-theme=dark] .obj-inc li:before{background:#6f7270}
:root[data-theme=dark] .obj-ctl input[type=range],:root[data-theme=dark] .obj-ctl input[type=checkbox]{accent-color:#e9eae8}
:root[data-theme=dark] .obj-txt{border-bottom-color:rgba(255,255,255,.18)}
:root[data-theme=dark] .obj-sw button{box-shadow:0 0 0 1px rgba(255,255,255,.14),inset 0 -3px 6px rgba(0,0,0,.25),inset 0 2px 3px rgba(255,255,255,.5)}
:root[data-theme=dark] .obj-sw button[aria-pressed=true]{outline-color:#ecedea}
:root[data-theme=dark] .obj-stage{box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}
@media (max-width:700px){.obj-detail .obj-sheet.glass,:root[data-theme=dark] .obj-detail .obj-sheet.glass{background:#141516!important}}
@media (prefers-reduced-motion:reduce){.obj-detail,.obj-sheet{animation:none}}
`,document.head.append(e)}var _r=[{id:"clear",name:"Clear",line:"Thick clear glass with a bright lower rim, for light pages.",dark:!1,v:{page:"#F3F3F1",ink:"#262827",muted:"#6b6f6c",line:"rgba(38,40,39,.07)",body:"linear-gradient(180deg,rgba(255,255,255,.96),rgba(246,247,246,.72) 52%,rgba(226,230,228,.78))",edge:"#ffffff",depth:"rgba(130,142,138,.5)",shadow:"rgba(38,40,39,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(176,212,228,.6)",tint:"linear-gradient(180deg,#43484a,#1f2322 60%,#2c302f)",tintInk:"#f4f5f3",fill:"#2a2e2d",well:"linear-gradient(180deg,rgba(214,218,216,.7),rgba(246,247,246,.9))",orb:"radial-gradient(circle at 50% 62%,rgba(214,232,240,.55),rgba(255,255,255,.22) 58%,rgba(186,200,206,.65))",squish:"1"}},{id:"smoke",name:"Smoke",line:"Smoked glass that darkens to the rim, for dark pages.",dark:!0,v:{page:"#141716",ink:"#ECEEEB",muted:"#9DA29F",line:"rgba(255,255,255,.08)",body:"linear-gradient(180deg,rgba(255,255,255,.17),rgba(255,255,255,.05) 50%,rgba(0,0,0,.22))",edge:"rgba(255,255,255,.38)",depth:"rgba(0,0,0,.6)",shadow:"rgba(0,0,0,.75)",spec:"rgba(255,255,255,.4)",caustic:"rgba(150,186,200,.4)",tint:"linear-gradient(180deg,#fbfbfa,#d6d9d6)",tintInk:"#161918",fill:"#e7e9e6",well:"linear-gradient(180deg,rgba(0,0,0,.45),rgba(255,255,255,.04))",orb:"radial-gradient(circle at 50% 62%,rgba(120,130,136,.55),rgba(40,44,46,.35) 58%,rgba(10,12,12,.75))",squish:"1"}},{id:"chrome",name:"Chrome",line:"Liquid chrome that folds the room it reflects.",dark:!1,v:{page:"#E2E4E3",ink:"#1c1e1d",muted:"#5d6260",line:"rgba(0,0,0,.1)",body:"linear-gradient(180deg,#ffffff 0%,#c3c8c7 24%,#f5f6f6 46%,#8f9594 72%,#e4e7e6 100%)",edge:"#ffffff",depth:"rgba(60,66,64,.6)",shadow:"rgba(30,34,33,.42)",spec:"rgba(255,255,255,1)",caustic:"rgba(255,255,255,.7)",tint:"linear-gradient(180deg,#6c7271 0%,#1d201f 48%,#4a4f4e 100%)",tintInk:"#f3f4f3",fill:"#3a3f3e",well:"linear-gradient(180deg,#a9aeac,#eef0ef)",orb:"conic-gradient(from 210deg,#fdfdfd,#8e9493,#f2f3f3,#5d6362,#e9ebea,#a3a8a7,#fdfdfd)",squish:"1"}},{id:"porcelain",name:"Porcelain",line:"Opaque glazed porcelain with a warm greige accent.",dark:!1,v:{page:"#EFEDE8",ink:"#2e2c29",muted:"#6e6a63",line:"rgba(60,50,40,.08)",body:"linear-gradient(180deg,#fffefb,#f4f1eb 58%,#e5e0d6)",edge:"#ffffff",depth:"rgba(170,158,140,.45)",shadow:"rgba(80,68,52,.26)",spec:"rgba(255,255,255,.9)",caustic:"rgba(207,200,189,.55)",tint:"linear-gradient(180deg,#ddd6ca,#bdb3a3)",tintInk:"#2e2c29",fill:"#bfb5a5",well:"linear-gradient(180deg,#e2ddd3,#faf8f4)",orb:"radial-gradient(circle at 50% 60%,#fbf9f5,#ece7de 60%,#d2cabc)",squish:"1"}},{id:"gel",name:"Gel",line:"Soft sea-glass gel that gives a little when you press it.",dark:!1,v:{page:"#E8EEEC",ink:"#1f302b",muted:"#5b6f69",line:"rgba(30,70,60,.08)",body:"linear-gradient(180deg,rgba(244,252,249,.94),rgba(198,228,218,.62) 56%,rgba(156,200,186,.7))",edge:"rgba(255,255,255,.95)",depth:"rgba(70,124,108,.5)",shadow:"rgba(30,70,60,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(130,226,196,.65)",tint:"linear-gradient(180deg,#a6dccb,#5d9c89)",tintInk:"#0f2a22",fill:"#6aa894",well:"linear-gradient(180deg,rgba(170,206,194,.6),rgba(240,250,246,.9))",orb:"radial-gradient(circle at 50% 60%,rgba(190,240,222,.75),rgba(150,214,192,.45) 58%,rgba(90,160,138,.7))",squish:"1.6"}},{id:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud.",dark:!1,v:{page:"#F2EEEE",ink:"#33282b",muted:"#7a6a6e",line:"rgba(80,40,50,.07)",body:"linear-gradient(180deg,rgba(255,252,252,.96),rgba(246,232,236,.72) 54%,rgba(230,206,214,.75))",edge:"#ffffff",depth:"rgba(190,140,156,.45)",shadow:"rgba(90,50,62,.26)",spec:"rgba(255,255,255,.95)",caustic:"rgba(255,170,198,.6)",tint:"linear-gradient(180deg,#f3c9d6,#d9909f)",tintInk:"#3a1d25",fill:"#df9fb0",well:"linear-gradient(180deg,rgba(226,206,212,.7),rgba(255,250,251,.9))",orb:"radial-gradient(circle at 46% 58%,rgba(255,188,208,.85),rgba(255,236,242,.5) 50%,rgba(222,190,200,.7))",squish:"1.2"}}],ec=e=>_r.find(a=>a.id===e)??_r[0],tc=e=>Object.entries(e.v).map(([a,o])=>`--cc-${a.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}:${o};`).join(`
  `),ac=`
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--cc-page);color:var(--cc-ink);
  font:400 15px/1.4 "Helvetica Neue",Inter,system-ui,-apple-system,Arial,sans-serif;-webkit-font-smoothing:antialiased}
.cc-stage{display:flex;flex-wrap:wrap;gap:18px;align-items:center;justify-content:center;max-width:560px;padding:32px}
/* Shared glass: a body, a bright upper refraction band, a caustic gathered at the
   lower rim, and a highlight that follows the pointer (--mx/--my, set by the script). */
.cc-glass{position:relative;isolation:isolate;overflow:hidden;border:0;color:var(--cc-ink);background:var(--cc-body);
  box-shadow:inset 0 1px 0 var(--cc-edge),inset 0 -10px 16px -10px var(--cc-depth),inset 0 0 0 1px var(--cc-line),
    0 1px 1px var(--cc-shadow),0 14px 26px -16px var(--cc-shadow);
  transform:translateY(var(--lift,0px)) scale(var(--sx,1),var(--sy,1));
  transition:transform .55s cubic-bezier(.3,1.7,.45,1),box-shadow .3s ease,background .3s ease}
.cc-glass::before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;border-radius:inherit;
  background:radial-gradient(90px circle at var(--mx,30%) var(--my,0%),var(--cc-spec),transparent 70%);opacity:.45;transition:opacity .3s}
.cc-glass::after{content:"";position:absolute;inset:1px;z-index:-1;pointer-events:none;border-radius:inherit;
  background:linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,255,255,0) 46%),
    radial-gradient(60% 55% at var(--cx,50%) 108%,var(--cc-caustic),transparent 70%);
  animation:cc-drift 9s ease-in-out infinite alternate}
@keyframes cc-drift{from{--cx:38%}to{--cx:62%}}
@property --cx{syntax:"<percentage>";inherits:false;initial-value:50%}
.cc-glass:hover{--lift:-1px}.cc-glass:hover::before{opacity:1}
.cc-glass:focus-visible{outline:none;box-shadow:inset 0 1px 0 var(--cc-edge),inset 0 0 0 1px var(--cc-line),0 0 0 3px var(--cc-page),0 0 0 5px var(--cc-fill)}
/* Button */
.cc-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;height:46px;padding:0 24px;border-radius:999px;cursor:pointer;
  font-family:inherit;font-size:14px;font-weight:500;line-height:1;letter-spacing:.005em;-webkit-tap-highlight-color:transparent;white-space:nowrap}
.cc-btn:active,.cc-btn.is-down{--sx:calc(1 + .015 * var(--cc-squish));--sy:calc(1 - .05 * var(--cc-squish));--lift:1px;transition-duration:.12s}
.cc-btn.primary{background:var(--cc-tint);color:var(--cc-tint-ink)}
.cc-btn.round{width:46px;padding:0}
.cc-btn svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
.cc-btn[disabled]{opacity:.42;cursor:not-allowed;--lift:0px}
.cc-btn[aria-busy=true]{color:transparent}
.cc-btn[aria-busy=true] .cc-spin{position:absolute;inset:0;margin:auto;width:16px;height:16px;border-radius:50%;border:1.5px solid var(--cc-muted);border-top-color:var(--cc-ink);animation:cc-spin .8s linear infinite}
@keyframes cc-spin{to{transform:rotate(1turn)}}
/* Switch: the knob is a small orb with a springy travel and a stretch while pressed. */
.cc-switch{width:62px;height:36px;border-radius:999px;padding:0;cursor:pointer;background:var(--cc-well)}
.cc-switch[aria-checked=true]{background:var(--cc-tint)}
.cc-knob{position:absolute;left:4px;top:4px;width:28px;height:28px;border-radius:999px;background:var(--cc-body);
  box-shadow:inset 0 1px 0 var(--cc-edge),inset 0 -4px 6px -3px var(--cc-depth),0 4px 8px -3px var(--cc-shadow);
  transition:transform .6s cubic-bezier(.3,1.8,.4,1),width .25s ease}
.cc-switch:active .cc-knob{width:34px}
.cc-switch[aria-checked=true] .cc-knob{transform:translateX(26px)}
.cc-switch[aria-checked=true]:active .cc-knob{transform:translateX(20px)}
/* Field: recessed glass with a caret in the material's colour. */
.cc-field{width:230px;height:46px;padding:0 18px;border-radius:999px;font:inherit;color:var(--cc-ink);caret-color:var(--cc-fill);background:var(--cc-well);
  box-shadow:inset 0 2px 5px var(--cc-depth),inset 0 0 0 1px var(--cc-line),0 1px 0 var(--cc-edge)}
.cc-field::placeholder{color:var(--cc-muted)}
.cc-field:focus{outline:none;box-shadow:inset 0 2px 5px var(--cc-depth),inset 0 0 0 1px var(--cc-line),0 0 0 3px var(--cc-page),0 0 0 5px var(--cc-fill)}
/* Range: a glass groove filled with light, and an orb for a thumb. */
.cc-range{-webkit-appearance:none;appearance:none;width:230px;height:30px;margin:0;background:transparent;cursor:pointer;--p:60%}
.cc-range::-webkit-slider-runnable-track{height:10px;border-radius:99px;background:linear-gradient(90deg,var(--cc-fill) var(--p),transparent var(--p)),var(--cc-well);box-shadow:inset 0 1px 3px var(--cc-depth),0 1px 0 var(--cc-edge)}
.cc-range::-moz-range-track{height:10px;border-radius:99px;background:linear-gradient(90deg,var(--cc-fill) var(--p),transparent var(--p)),var(--cc-well);box-shadow:inset 0 1px 3px var(--cc-depth),0 1px 0 var(--cc-edge)}
.cc-range::-webkit-slider-thumb{-webkit-appearance:none;width:26px;height:26px;margin-top:-8px;border-radius:50%;border:0;background:radial-gradient(circle at 34% 28%,#fff 0 8%,rgba(255,255,255,0) 26%),radial-gradient(circle at 64% 82%,var(--cc-caustic),transparent 46%),var(--cc-orb);box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),0 5px 10px -4px var(--cc-shadow);transition:transform .4s cubic-bezier(.3,1.8,.4,1)}
.cc-range::-moz-range-thumb{width:26px;height:26px;border-radius:50%;border:0;background:radial-gradient(circle at 34% 28%,#fff 0 8%,rgba(255,255,255,0) 26%),radial-gradient(circle at 64% 82%,var(--cc-caustic),transparent 46%),var(--cc-orb);box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),0 5px 10px -4px var(--cc-shadow)}
.cc-range:active::-webkit-slider-thumb{transform:scale(1.15)}
.cc-range:focus-visible{outline:2px solid var(--cc-fill);outline-offset:4px;border-radius:99px}
/* The orb (slider thumb): specular point, refraction ring, caustic and a slow inner light. */
.cc-orb{position:absolute;border-radius:50%;background:var(--cc-orb);overflow:hidden;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.75),inset 0 -6px 12px -4px var(--cc-depth),0 10px 18px -8px var(--cc-shadow)}
.cc-orb::before{content:"";position:absolute;inset:-30%;background:conic-gradient(from 0deg,transparent,var(--cc-caustic),transparent 30%,rgba(255,255,255,.5),transparent 60%);filter:blur(6px);opacity:.75;animation:cc-turn 7s linear infinite}
.cc-orb::after{content:"";position:absolute;inset:0;border-radius:50%;
  background:radial-gradient(circle at 33% 26%,#fff 0 7%,rgba(255,255,255,.55) 12%,rgba(255,255,255,0) 30%),
    radial-gradient(circle at 50% 50%,transparent 58%,rgba(255,255,255,.55) 70%,transparent 78%),
    radial-gradient(circle at 62% 84%,var(--cc-caustic),transparent 42%)}
@keyframes cc-turn{to{transform:rotate(1turn)}}
/* Slide to confirm */
.cc-slide{width:min(420px,86vw);height:var(--h,84px);border-radius:999px;cursor:grab;touch-action:none;background:var(--cc-well);user-select:none;-webkit-user-select:none;
  box-shadow:inset 0 2px 6px var(--cc-depth),inset 0 0 0 1px var(--cc-line),0 1px 0 var(--cc-edge),0 18px 34px -24px var(--cc-shadow)}
.cc-slide:active{cursor:grabbing}
.cc-slide .cc-trail{position:absolute;left:0;top:0;bottom:0;width:calc(var(--h,84px) + var(--x,0px));border-radius:999px;background:var(--cc-body);opacity:.85;
  box-shadow:inset 0 1px 0 var(--cc-edge),inset 0 -8px 14px -10px var(--cc-depth)}
.cc-slide .cc-label{position:absolute;inset:0;display:grid;place-items:center;padding-left:var(--h,84px);font-family:inherit;font-size:16px;font-weight:300;line-height:1;letter-spacing:.02em;
  color:transparent;background:linear-gradient(100deg,var(--cc-muted) 35%,var(--cc-ink) 50%,var(--cc-muted) 65%);background-size:250% 100%;-webkit-background-clip:text;background-clip:text;
  animation:cc-shine 3.4s linear infinite;opacity:calc(1 - var(--k,0) * 1.4)}
@keyframes cc-shine{from{background-position:100% 0}to{background-position:-150% 0}}
.cc-slide .cc-orb{left:6px;top:6px;width:calc(var(--h,84px) - 12px);height:calc(var(--h,84px) - 12px);transform:translateX(var(--x,0px)) scale(var(--os,1))}
.cc-slide.done .cc-label{animation:none;opacity:1;padding-left:0;padding-right:var(--h,84px);color:var(--cc-ink);background:none}
.cc-slide:focus-visible{outline:2px solid var(--cc-fill);outline-offset:4px}
.cc-row{display:flex;gap:14px;align-items:center;justify-content:center;flex-wrap:wrap;width:100%}
body.mini .cc-stage{transform:scale(.78);padding:0}
body.mini{overflow:hidden;background:transparent!important}
body.mini{margin:0;height:100vh;display:flex;align-items:center;justify-content:center}body.mini .cc-stage{flex:none;width:340px;max-width:none}
@media (max-width:320px){body.mini .cc-stage{transform:scale(.62)}}
@media (max-width:220px){body.mini .cc-stage{transform:scale(.42)}}
@media (max-width:140px){body.mini .cc-stage{transform:scale(.29)}}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition-duration:.01s!important}}
`,rc=`
// Pointer light: the highlight follows the pointer over any glass element.
document.querySelectorAll('.cc-glass').forEach(el => el.addEventListener('pointermove', e => {
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px');
}));
document.querySelectorAll('.cc-switch').forEach(s => s.addEventListener('click', () => s.setAttribute('aria-checked', String(s.getAttribute('aria-checked') !== 'true'))));
document.querySelectorAll('.cc-range').forEach(r => { const lo = +(r.min || 0), hi = +(r.max || 100), f = () => r.style.setProperty('--p', ((r.value - lo) / (hi - lo) * 100) + '%'); r.addEventListener('input', f); f(); });
// Slide to confirm: drag the orb; on release a spring carries it home or to the end.
document.querySelectorAll('.cc-slide').forEach(s => {
  const orb = s.querySelector('.cc-orb'), label = s.querySelector('.cc-label'), text = label.textContent;
  let x = 0, v = 0, target = 0, drag = null, raf = 0;
  const max = () => s.clientWidth - s.clientHeight;
  const paint = () => { const m = max(), k = m ? x / m : 0; s.style.setProperty('--x', x + 'px'); s.style.setProperty('--k', k.toFixed(3)); s.setAttribute('aria-valuenow', Math.round(k * 100)); };
  const tick = () => {           // damped spring: stiffness 260, damping 20
    const a = (target - x) * 260 - v * 20; v += a / 60; x += v / 60; paint();
    if (Math.abs(target - x) < .3 && Math.abs(v) < .3) { x = target; paint(); raf = 0; return; }
    raf = requestAnimationFrame(tick);
  };
  const settle = to => { target = to; if (!raf) raf = requestAnimationFrame(tick); };
  const finish = ok => {
    s.classList.toggle('done', ok); label.textContent = ok ? (s.dataset.done || 'Welcome') : text; settle(ok ? max() : 0);
    if (ok) { s.dispatchEvent(new CustomEvent('confirm', { bubbles: true })); setTimeout(() => finish(false), 2200); }
  };
  s.addEventListener('pointerdown', e => { if (s.classList.contains('done')) return; cancelAnimationFrame(raf); raf = 0; drag = { x: e.clientX - x }; s.setPointerCapture(e.pointerId); orb.style.setProperty('--os', '1.06'); });
  s.addEventListener('pointermove', e => { if (!drag) return; const n = Math.max(0, Math.min(max(), e.clientX - drag.x)); v = (n - x) * 60; x = n; paint(); });
  const up = () => { if (!drag) return; drag = null; orb.style.setProperty('--os', '1'); finish(x > max() * .86); };
  s.addEventListener('pointerup', up); s.addEventListener('pointercancel', up);
  s.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === 'End') { finish(true); e.preventDefault(); }
    if (e.key === 'ArrowRight') { settle(Math.min(max(), target + max() / 8)); if (target >= max()) finish(true); e.preventDefault(); }
    if (e.key === 'ArrowLeft' || e.key === 'Home') { settle(0); e.preventDefault(); }
  });
  addEventListener('resize', () => { if (s.classList.contains('done')) { x = target = max(); paint(); } });
});
`,oc=`
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let on = true, n = 0; const t0 = performance.now(), coarse = matchMedia('(pointer: coarse)').matches;
  addEventListener('message', e => { if (e.data === 'lo:pause') on = false; if (e.data === 'lo:play') on = true; });
  const glass = [...document.querySelectorAll('.cc-glass')], sw = document.querySelector('.cc-switch'), rg = document.querySelector('.cc-range'), sl = document.querySelector('.cc-slide');
  let flip = 2.2;
  requestAnimationFrame(function f(now) {
    requestAnimationFrame(f); if (!on || (coarse && (n++ & 1))) return; const t = (now - t0) / 1000;
    glass.forEach((el, i) => { el.style.setProperty('--mx', (el.clientWidth * (.5 + .46 * Math.sin(t * .6 + i * 1.7))) + 'px'); el.style.setProperty('--my', (el.clientHeight * (.45 + .4 * Math.cos(t * .8 + i))) + 'px'); });
    if (rg) { rg.value = 50 + 32 * Math.sin(t * .7); rg.style.setProperty('--p', rg.value + '%'); }
    if (sw && t > flip) { flip = t + 2.6; sw.setAttribute('aria-checked', String(sw.getAttribute('aria-checked') !== 'true')); }
    if (sl) { const m = sl.clientWidth - sl.clientHeight, c = (t % 4.2) / 4.2, k = c < .45 ? .5 - .5 * Math.cos(c / .45 * Math.PI) : c < .6 ? 1 : c < .95 ? .5 + .5 * Math.cos((c - .6) / .35 * Math.PI) : 0;
      sl.style.setProperty('--x', (k * m) + 'px'); sl.style.setProperty('--k', k.toFixed(3)); }
  });
})();`,ic="addEventListener('message', e => { if (e.data === 'lo:theme:dark' || e.data === 'lo:theme:light') document.body.classList.toggle('dark', e.data === 'lo:theme:dark'); });",qs='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',nc={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row">
    <button class="cc-btn cc-glass primary" type="button">Continue</button>
    <button class="cc-btn cc-glass" type="button">Secondary</button>
    <button class="cc-btn cc-glass round" type="button" aria-label="Confirm">${qs}</button>
  </div>
  <div class="cc-row">
    <button class="cc-switch cc-glass" role="switch" type="button" aria-checked="true" aria-label="Notifications"><span class="cc-knob"></span></button>
    <input class="cc-field" placeholder="Your name" aria-label="Your name">
  </div>
  <div class="cc-row">
    <input class="cc-range" type="range" min="0" max="100" value="60" aria-label="Level">
  </div>
  <div class="cc-row">
    <button class="cc-btn cc-glass" type="button" disabled>Disabled</button>
    <button class="cc-btn cc-glass" type="button" aria-busy="true">Loading<span class="cc-spin"></span></button>
  </div>
</div>`,"orb-slider":`<div class="cc-stage">
  <div class="cc-slide cc-glass" role="slider" tabindex="0" aria-label="Slide to enter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" data-done="Welcome">
    <span class="cc-trail"></span><span class="cc-label">slide to enter</span><span class="cc-orb"></span>
  </div>
</div>`},sc={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row"><button class="cc-btn cc-glass primary" type="button" tabindex="-1">Continue</button><button class="cc-btn cc-glass round" type="button" tabindex="-1" aria-label="Confirm">${qs}</button></div>
  <div class="cc-row"><button class="cc-switch cc-glass" role="switch" type="button" tabindex="-1" aria-checked="true" aria-label="Switch"><span class="cc-knob"></span></button><input class="cc-range" type="range" value="62" tabindex="-1" aria-label="Level" style="width:150px"></div>
</div>`,"orb-slider":'<div class="cc-stage"><div class="cc-slide cc-glass" style="--h:64px;width:280px" aria-hidden="true"><span class="cc-trail"></span><span class="cc-label">slide to enter</span><span class="cc-orb"></span></div></div>'},Ts={"crystal-controls":"Crystal Controls","orb-slider":"Orb Slider"},Ms={clear:"radial-gradient(90% 80% at 50% 38%,#a9adae,#6c7071 82%)",chrome:"linear-gradient(180deg,#8f9293,#55585a)",porcelain:"radial-gradient(90% 80% at 50% 40%,#aca8a2,#76726c 82%)",gel:"radial-gradient(90% 80% at 50% 40%,#9ea6a4,#646c6a 82%)",bloom:"radial-gradient(90% 80% at 50% 40%,#aaa1a5,#736b6f 82%)"};function tr(e,a,{mini:o=!1,dark:t=!1}={}){let d=ec(a);return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${Ts[e]} \xB7 ${d.name} \u2014 The Light Orb</title>
<!-- ${Ts[e]} \xB7 ${d.name}. Free for personal and commercial use (The Light Orb licence).
     Change the material by editing the --cc-* variables below. -->
<style>
:root{
  ${tc(d)}
}${ac}</style>
</head>
<body${o?` class="mini${t?" dark":""}"`:""}>
${(o?sc:nc)[e]}
${o&&Ms[d.id]?`<style>body.mini.dark{background:${Ms[d.id]}}</style>`:""}
<script>${rc}${o?oc+ic:""}<\/script>
</body>
</html>
`}var As=`
.v3{--paper:#F4F3EF;--paper-2:#ECEBE6;--smoke:#DCDBD5;--stone:#8F8C84;--ink:#23241F;--ink-2:#4A4B45;--line:rgba(35,36,31,.12);
  --champagne:#B89E6A;--champagne-soft:rgba(184,158,106,.16);--room:#181715;--room-ink:#EDEAE2;--warm:#FFE9C2;--lamp:255,236,200;
  --stage:#1A1B19;--stage-ink:#ECEBE6;
  --display:"Fraunces",Georgia,"Times New Roman",serif;--text:"Inter","Helvetica Neue",ui-sans-serif,system-ui,sans-serif;--mono:ui-monospace,SFMono-Regular,Menlo,monospace;
  --ease-out:cubic-bezier(.2,.7,.1,1);--ease-io:cubic-bezier(.6,0,.2,1);--gut:clamp(16px,3.2vw,48px);
  position:relative;color:var(--ink);font:400 16px/1.55 var(--text);-webkit-font-smoothing:antialiased;overflow-x:clip}
html[data-theme=dark] .v3{--paper:#151614;--paper-2:#1C1D1A;--smoke:#2A2B27;--stone:#8E8B83;--ink:#ECEBE6;--ink-2:#B9B7B0;--line:rgba(236,235,230,.12)}
.v3 *,.v3 *::before,.v3 *::after{box-sizing:border-box}
.v3 a{color:inherit}.v3 img,.v3 canvas,.v3 iframe{display:block;max-width:100%}
.v3 :focus-visible{outline:1.5px solid var(--champagne);outline-offset:3px;border-radius:4px}
.v3 .v3-vh{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
/* Type: Fraunces for display (large sizes only), Inter for text, mono for labels. Wordmark untouched. */
.v3 .v3-label,.v3 .v3-honest{font:500 11px/1.4 var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--stone)}
.v3 .v3-h-xl,.v3 .v3-h-l,.v3 .v3-num,.v3 .v3-disp{font-family:var(--display);font-weight:300;font-variation-settings:"opsz" 144,"SOFT" 30;letter-spacing:-.035em;margin:0}
.v3 .v3-h-l{font-size:clamp(40px,5.4vw,88px);line-height:.95}
.v3 .v3-h-m{font:400 clamp(22px,2.2vw,32px)/1.08 var(--text);letter-spacing:-.02em;margin:0}
.v3 .v3-lede{font:400 clamp(16px,1.2vw,19px)/1.5 var(--text);color:var(--ink-2);max-width:36ch;margin:0}
.v3 .v3-small{font-size:13px;color:var(--stone)}
.v3 .v3-btn{display:inline-flex;align-items:center;gap:10px;height:44px;padding:0 20px;border-radius:99px;font:500 14px/1 var(--text);text-decoration:none;border:0;cursor:pointer;
  background:var(--ink);color:var(--paper);transition:transform .24s var(--ease-out)}
.v3 .v3-btn:hover{transform:translateY(-1px)}.v3 .v3-btn:active{transform:scale(.98)}
.v3 .v3-btn.v3-ghost{background:transparent;color:inherit;box-shadow:inset 0 0 0 1px currentColor}
.v3 .v3-btn.v3-small{height:40px;padding:0 15px;font-size:13px}.v3 .v3-btn.v3-lamp{background:var(--warm);color:#1a1916}
.v3 .v3-btn[hidden]{display:none}
.v3 .v3-st{display:inline-flex;align-items:center;gap:7px;font:500 11px/1 var(--mono);letter-spacing:.06em;text-transform:uppercase;padding:6px 9px;border-radius:99px;box-shadow:inset 0 0 0 1px var(--line)}
.v3 .v3-st i{width:6px;height:6px;border-radius:50%;background:currentColor}
.v3 .v3-st.v3-live{color:#3d7a52}.v3 .v3-st.v3-dev{color:#9a7432}.v3 .v3-st.v3-plan{color:var(--stone)}
.v3 .v3-rv{opacity:0;transform:translateY(16px);transition:opacity .8s var(--ease-out),transform .8s var(--ease-out);transition-delay:var(--d,0ms)}
.v3 .v3-rv.v3-in{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){.v3 .v3-rv{opacity:1;transform:none;transition:none}.v3 .v3-beam-line{animation:none!important}}
.v3 .v3-sec{padding:clamp(72px,10vh,128px) var(--gut)}

/* \u2500\u2500 Room light (fixed layers inside the view): dark opening \u2192 chapters \u2192 dark close \u2500\u2500 */
.v3 .v3-tint{position:fixed;inset:0;z-index:-2;background:var(--tint,var(--paper));transition:background 1.4s var(--ease-io);pointer-events:none}
.v3 .v3-room{position:fixed;inset:0;z-index:-1;background:radial-gradient(80vmax 70vmax at var(--bx,60%) var(--by,40%),#26231f,var(--room) 70%);opacity:var(--dark,1);pointer-events:none}
.v3.v3-is-dark,.v3.v3-is-dusk{color:var(--room-ink)}
.v3.v3-is-dark .v3-label,.v3.v3-is-dark .v3-honest,.v3.v3-is-dusk .v3-label,.v3.v3-is-dusk .v3-honest{color:#a7a296}
.v3.v3-is-dark .v3-lede,.v3.v3-is-dusk .v3-lede,.v3.v3-is-dusk .v3-chap-l{color:#cfcabd}

/* \u2500\u2500 01 Light table: one dominant surface (refinement: scale and impact) \u2500\u2500 */
.v3 .v3-table{position:relative;min-height:100svh;padding:92px var(--gut) 32px;display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:1fr auto;gap:20px}
.v3 .v3-surf{position:relative;border-radius:10px;overflow:hidden;background:#eee;box-shadow:0 50px 100px -50px rgba(0,0,0,.8)}
.v3 .v3-surf .v3-cap{position:absolute;left:12px;bottom:10px;z-index:3;color:#a39f95}
.v3 .v3-site{grid-column:4/13;grid-row:1;align-self:start;margin-top:4px;aspect-ratio:16/9.4;background:#fff}
.v3 .v3-site .v3-bar{height:28px;display:flex;align-items:center;gap:6px;padding:0 10px;background:#ececea;border-bottom:1px solid #d9d9d6;font:500 11px/1 var(--mono);color:#8a8a86}
.v3 .v3-site .v3-bar i{width:7px;height:7px;border-radius:50%;background:#cfcfcb}.v3 .v3-site .v3-bar span{margin-left:10px}
.v3 .v3-site img{width:100%;height:calc(100% - 28px);object-fit:cover;object-position:top}
.v3 .v3-ui{grid-column:7/10;grid-row:1;align-self:end;aspect-ratio:4/3;z-index:2;background:#e9e8e4;transform:translateY(18%)}
.v3 .v3-ui iframe{position:absolute;inset:0;width:62.5%;height:62.5%;transform:scale(1.6);transform-origin:0 0;border:0;pointer-events:none}
.v3 .v3-hmat{grid-column:10/13;grid-row:1;align-self:end;aspect-ratio:1;z-index:2;background:#f2f1ee;transform:translateY(12%)}
.v3 .v3-shade{position:fixed;inset:0;z-index:4;background:rgba(24,23,21,.86);pointer-events:none;opacity:var(--open,1);
  -webkit-mask:radial-gradient(circle var(--br,26vmax) at var(--bx,60%) var(--by,40%),transparent 0,transparent 35%,#000 100%);
          mask:radial-gradient(circle var(--br,26vmax) at var(--bx,60%) var(--by,40%),transparent 0,transparent 35%,#000 100%)}
.v3 .v3-warmth{position:fixed;inset:0;z-index:5;pointer-events:none;mix-blend-mode:soft-light;opacity:calc(var(--open,1)*.9);
  background:radial-gradient(circle calc(var(--br,26vmax)*.8) at var(--bx,60%) var(--by,40%),rgba(var(--lamp),.75),transparent 70%)}
.v3 .v3-copy{grid-column:1/8;grid-row:1/3;align-self:end;position:relative;z-index:6;display:grid;gap:20px;padding-bottom:6px}
.v3 .v3-copy h1{position:relative;font-size:clamp(56px,8.2vw,148px);line-height:.9;color:rgba(237,234,226,.82)}
/* The light on the headline: a second, warmer copy of the text revealed by a radial mask at the beam
   (2026-11-09). Replaces background-clip:text, whose per-line background painted a hairline between lines. */
.v3 .v3-h1-glow{position:absolute;inset:0;color:#fff6e2;pointer-events:none;user-select:none;
  -webkit-mask:radial-gradient(circle calc(var(--br,26vmax)*.9) at var(--tx,50%) var(--ty,50%),#000 0,rgba(0,0,0,.7) 30%,transparent 70%);
          mask:radial-gradient(circle calc(var(--br,26vmax)*.9) at var(--tx,50%) var(--ty,50%),#000 0,rgba(0,0,0,.7) 30%,transparent 70%)}
.v3:not(.v3-is-dark) .v3-copy h1{color:var(--ink)}.v3:not(.v3-is-dark) .v3-h1-glow{display:none}
.v3 .v3-copy .v3-acts{display:flex;gap:10px;flex-wrap:wrap}
.v3 .v3-rail{display:flex;gap:6px;flex-wrap:wrap;margin-top:4px}
.v3 .v3-rail a{font:500 11px/1 var(--mono);letter-spacing:.06em;text-transform:uppercase;text-decoration:none;padding:13px 12px;border-radius:99px;box-shadow:inset 0 0 0 1px rgba(237,234,226,.2);color:#cfcabd}
.v3:not(.v3-is-dark) .v3-rail a{color:var(--ink-2);box-shadow:inset 0 0 0 1px var(--line)}
.v3 .v3-rail a b{font-weight:500;color:var(--warm);margin-right:6px}
.v3 .v3-table .v3-hint{position:absolute;right:var(--gut);bottom:30px;z-index:6;color:#8f8b82;display:flex;gap:10px;align-items:center}
.v3 .v3-table .v3-hint i{width:22px;height:22px;border-radius:50%;background:radial-gradient(circle,#fff3dc,rgba(255,236,200,0) 70%)}
.v3:not(.v3-is-dark) .v3-table .v3-hint{opacity:0}
@media (max-width:860px){
  .v3 .v3-table{grid-template-rows:auto auto auto;padding-top:84px;gap:14px}
  .v3 .v3-site{grid-column:1/-1}.v3 .v3-ui{grid-column:1/8;grid-row:2;transform:none;margin-top:-56px}.v3 .v3-hmat{grid-column:8/13;grid-row:2;transform:none;margin-top:-20px}
  .v3 .v3-copy{grid-column:1/-1;grid-row:3}.v3 .v3-table .v3-hint{display:none}.v3 .v3-copy h1{font-size:clamp(46px,13vw,72px)}
}

/* \u2500\u2500 Chapters \u2500\u2500 */
.v3 .v3-chap-hd{display:grid;grid-template-columns:2fr 5fr 5fr;gap:24px;align-items:end;margin-bottom:48px;position:relative;padding-bottom:24px}
.v3 .v3-chap-hd .v3-num{font-size:clamp(76px,9vw,152px);line-height:.78;color:var(--stone)}
.v3 .v3-chap-hd .v3-label{display:block;margin-bottom:10px}
.v3 .v3-chap-l{margin:0;color:var(--ink-2);max-width:40ch;justify-self:end}
.v3 .v3-beam-line{position:absolute;left:0;right:0;bottom:0;height:1px;background:linear-gradient(90deg,transparent,rgba(var(--lamp),1) 50%,transparent),var(--line);background-size:30% 100%,100% 100%;background-repeat:no-repeat;background-position:-40% 0,0 0}
.v3 .v3-chap-hd.v3-in .v3-beam-line{animation:v3sweep 1.8s var(--ease-out) forwards}
@keyframes v3sweep{to{background-position:140% 0,0 0}}
@media (max-width:860px){.v3 .v3-chap-hd{grid-template-columns:auto 1fr;gap:8px 16px}.v3 .v3-chap-l{grid-column:1/-1;justify-self:start}}

/* Work */
.v3 .v3-work{display:grid;grid-template-columns:repeat(12,1fr);gap:24px}
.v3 .v3-browser{grid-column:1/-1;border-radius:14px;overflow:hidden;background:#fff;box-shadow:0 60px 120px -60px rgba(35,36,31,.45),0 0 0 1px var(--line)}
.v3 .v3-browser .v3-bar{height:38px;display:flex;align-items:center;gap:7px;padding:0 14px;background:#efeeea;border-bottom:1px solid var(--line);font:500 11px/1 var(--mono);color:var(--stone)}
.v3 .v3-browser .v3-bar i{width:9px;height:9px;border-radius:50%;background:#d6d5d0}.v3 .v3-browser .v3-bar span{margin:0 auto}
.v3 .v3-browser iframe{width:100%;height:min(76vh,740px);border:0;background:#fff}
.v3 .v3-wcap{grid-column:1/-1;display:grid;grid-template-columns:repeat(12,1fr);gap:24px;margin:16px 0 40px}
.v3 .v3-wcap h3{grid-column:1/5}.v3 .v3-wcap p{grid-column:5/10;margin:0;color:var(--ink-2)}.v3 .v3-wcap .v3-honest{grid-column:10/13;justify-self:end;text-align:right}
.v3 .v3-case{grid-column:1/-1;display:grid;grid-template-columns:7fr 5fr;gap:32px;align-items:center}
.v3 .v3-still{position:relative;margin:0;border-radius:14px;overflow:hidden;background:var(--smoke);aspect-ratio:16/10}
.v3 .v3-still img{width:100%;height:100%;object-fit:cover;object-position:top}
.v3 .v3-still::after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 35%,rgba(var(--lamp),.35) 50%,transparent 65%);transform:translateX(-120%);pointer-events:none}
.v3 .v3-still.v3-in::after{transition:transform 1.6s var(--ease-out);transform:translateX(120%)}
.v3 .v3-case-t{display:grid;gap:12px;align-content:center}.v3 .v3-case-t p{margin:0;color:var(--ink-2);max-width:44ch}
.v3 .v3-facts{display:grid;grid-template-columns:auto 1fr;gap:8px 16px;margin:4px 0 6px;font-size:14px;border-top:1px solid var(--line);padding-top:14px}
.v3 .v3-facts dt{font:500 11px/1.7 var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--stone)}.v3 .v3-facts dd{margin:0}
.v3 .v3-case-t .v3-btn{justify-self:start}
/* Ombra: a single line now (refinement: page length), still visibly unfinished */
.v3 .v3-wip{grid-column:1/-1;display:flex;align-items:center;gap:20px;margin-top:32px;padding:14px 16px;border-radius:14px;border:1px dashed color-mix(in srgb,var(--ink) 28%,transparent)}
.v3 .v3-wip img{width:120px;aspect-ratio:16/10;object-fit:cover;object-position:left top;border-radius:6px;flex:none}
.v3 .v3-wip p{margin:0;color:var(--ink-2);font-size:14.5px}.v3 .v3-wip b{font-weight:500;color:var(--ink)}
.v3 .v3-contact{grid-column:1/-1;margin-top:48px;display:flex;justify-content:space-between;align-items:end;gap:24px;flex-wrap:wrap}
@media (max-width:860px){.v3 .v3-wcap h3,.v3 .v3-wcap p,.v3 .v3-wcap .v3-honest{grid-column:1/-1;justify-self:start;text-align:left}.v3 .v3-case{grid-template-columns:1fr}.v3 .v3-browser iframe{height:66vh}.v3 .v3-wip img{width:84px}}

/* Creed */
.v3 .v3-creed h2{max-width:20ch;margin-bottom:40px}
.v3 .v3-proofs{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;border-top:1px solid var(--line)}
.v3 .v3-pf{display:grid;gap:8px;align-content:start;padding-top:20px}
.v3 .v3-pf .v3-num{font-size:clamp(52px,5.4vw,88px);line-height:.85;font-variant-numeric:tabular-nums;color:var(--ink)}
.v3 .v3-pf p{margin:0;color:var(--ink-2);font-size:14.5px;max-width:30ch}
@media (max-width:860px){.v3 .v3-proofs{grid-template-columns:1fr 1fr}}

/* Products on the homepage */
.v3 .v3-bento{display:grid;grid-template-columns:repeat(12,1fr);grid-auto-rows:minmax(150px,auto);gap:16px}
.v3 .v3-pm{position:relative;border-radius:16px;overflow:hidden;display:block;text-decoration:none;color:inherit;isolation:isolate;transition:transform .7s var(--ease-out)}
.v3 .v3-pm:hover,.v3 .v3-pm:focus-visible{transform:translateY(-3px)}
.v3 .v3-pm .v3-live{position:absolute;inset:0}
.v3 .v3-pm .v3-live iframe{position:absolute;inset:0;width:62.5%;height:62.5%;transform:scale(1.6);transform-origin:0 0;border:0}
.v3 .v3-pm .v3-tag{position:absolute;left:16px;right:16px;bottom:14px;z-index:3;display:flex;justify-content:space-between;align-items:baseline;gap:10px;pointer-events:none}
.v3 .v3-pm .v3-tag b{font:400 19px/1.1 var(--text);letter-spacing:-.01em}.v3 .v3-pm .v3-tag .v3-honest{color:inherit;opacity:.7}
.v3 .v3-pm.v3-orb{grid-column:1/6;grid-row:span 4;background:radial-gradient(80% 60% at 50% 42%,#2b2925,#1B1B19);color:var(--room-ink)}
.v3 .v3-pm.v3-type{grid-column:6/13;grid-row:span 2;background:#F1EEE6;color:#23241F}
.v3 .v3-pm.v3-lens{grid-column:6/10;grid-row:span 2;background:#E3E2DD;color:#23241F}
.v3 .v3-pm.v3-kit{grid-column:10/13;grid-row:span 2;background:#D4D5D2;color:#23241F}
.v3 .v3-pm.v3-more{grid-column:1/13;grid-row:span 1;min-height:88px;box-shadow:inset 0 0 0 1px var(--line);display:flex;align-items:center;justify-content:space-between;padding:0 24px}
@media (max-width:860px){.v3 .v3-bento{grid-auto-rows:minmax(120px,auto)}.v3 .v3-pm{grid-column:1/-1!important}.v3 .v3-pm.v3-orb{grid-row:span 3}.v3 .v3-pm.v3-lens,.v3 .v3-pm.v3-kit{grid-column:span 6!important}.v3 .v3-pm.v3-more{padding:20px}}

/* Studio (real engine) \u2014 refinement: grouped tabs, help on demand, a calmer instrument */

/* Lights out */
.v3 .v3-close{position:relative;min-height:92vh;display:grid;place-items:center;text-align:center;padding:96px var(--gut)}
.v3 .v3-close .v3-big{font-size:clamp(64px,12vw,210px);line-height:.9;letter-spacing:-.055em;display:inline-flex;align-items:center;gap:.04em;color:var(--room-ink);font-family:"Helvetica Neue","Inter",sans-serif;font-weight:300}
.v3:not(.v3-is-dark) .v3-close .v3-big{color:var(--ink)}
.v3 .v3-close .v3-big .wm-o{width:.74em;height:.74em;margin:0 .02em 0 .26em;color:var(--warm);filter:drop-shadow(0 0 calc(var(--glow,0) * 30px) rgba(var(--lamp),.9)) drop-shadow(0 0 calc(var(--glow,0) * 90px) rgba(var(--lamp),.55));transform:translate(var(--ox,0),var(--oy,0))}
.v3 .v3-close .v3-cin{display:grid;gap:30px;justify-items:center}.v3 .v3-close .v3-acts{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}

/* \u2500\u2500 Header in V3's dark rooms (the site's own header, recoloured; nothing replaced) \u2500\u2500 */
body.v3-dark .lo-top{--ink:#EDEAE2;--muted:#B9B5AB;color:#EDEAE2}
body.v3-dark .lo-top .hd::before{background:linear-gradient(180deg,rgba(24,23,21,.94),rgba(24,23,21,.72) 62%,rgba(24,23,21,0))}
body.v3-dark .lo-top .wm-o{color:#FFE9C2;filter:drop-shadow(0 0 6px rgba(255,236,200,.85)) drop-shadow(0 0 18px rgba(255,236,200,.45))}

/* \u2500\u2500 Touch and phones: 44px targets, 12px minimum labels \u2500\u2500 */
/* Studio \xB7 Coming soon on the home page (non-interactive) */
.v3 .v3-soon{display:grid;grid-template-columns:5fr 7fr;align-items:center;border-radius:24px;overflow:hidden;background:rgba(10,9,8,.55);box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}
.v3 .v3-soon-v{aspect-ratio:1;display:grid;place-items:center;background:radial-gradient(60% 55% at 50% 45%,rgba(233,211,166,.10),transparent 70%)}
.v3 .v3-soon-v i{width:46%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 38% 32%,rgba(255,246,226,.55),rgba(233,211,166,.16) 38%,rgba(255,255,255,.03) 64%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12),0 0 80px rgba(233,211,166,.12)}
.v3 .v3-soon-i{padding:clamp(22px,4vw,48px);display:grid;gap:14px;color:var(--room-ink)}
.v3 .v3-soon-i p{margin:0;max-width:34em;color:#cfcabd;line-height:1.55}
.v3 .v3-soon-i .v3-soon-h{font:300 clamp(24px,2.6vw,34px)/1.15 var(--display);color:var(--room-ink)}
@media (max-width:860px){.v3 .v3-soon{grid-template-columns:1fr}.v3 .v3-soon-v{aspect-ratio:auto;height:180px}.v3 .v3-soon-v i{width:auto;height:70%}}
@media (pointer:coarse),(max-width:860px){.v3 .v3-btn.v3-small{height:44px}}
@media (max-width:700px){.v3 .v3-label,.v3 .v3-honest,.v3 .v3-st,.v3 .v3-facts dt,.v3 .v3-rail a,.v3 .v3-site .v3-bar,.v3 .v3-browser .v3-bar{font-size:12px}}
`;var Sr=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,ni=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),Cs=!1,js=!1;function zs(){if(!Cs){let e=document.createElement("style");e.dataset.v3="",e.textContent=As,document.head.append(e),Cs=!0}if(!js){let e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300&family=Inter:wght@400;500&display=swap",document.head.append(e),js=!0}}function Os(){let e=[];return{add(a){return e.push(a),a},dispose(){for(;e.length;)try{e.pop()()}catch{}},get size(){return e.length}}}function ar(e,a,o){let t=new IntersectionObserver(a,o);return e.add(()=>t.disconnect()),t}function $r(e,a,o,t,d){a.addEventListener(o,t,d),e.add(()=>a.removeEventListener(o,t,d))}function Is(e,a){let o=a.querySelectorAll(".v3-rv");if(Sr){o.forEach(d=>d.classList.add("v3-in"));return}let t=ar(e,d=>d.forEach(p=>{p.isIntersecting&&(p.target.classList.add("v3-in"),t.unobserve(p.target))}),{rootMargin:"0px 0px -8% 0px"});o.forEach(d=>t.observe(d))}var Ps=(e,a,o=!0)=>e(a,"clear",{mini:o}).replace("<style>","<style>html,body{background:transparent!important}");function Rs(e,{budget:a,mount:o}){let t=new Map,d=0,p={get size(){return t.size},get spent(){return d},ids:()=>[...t.keys()].map(i=>i.dataset.id??i.dataset.live??i.dataset.kit??"orb"),async activate(i,l=1){if(t.has(i)||d+l>a)return;d+=l,t.set(i,{h:null,cost:l});let c=await o(i),f=t.get(i);if(!f){c?.dispose?.();return}f.h=c,i.classList.add("v3-is-live")},release(i){let l=t.get(i);l&&(l.h?.dispose?.(),t.delete(i),d-=l.cost,i.classList.remove("v3-is-live"))},each(i){t.forEach((l,c)=>i(l.h,c))}};return e.add(()=>{[...t.keys()].forEach(i=>p.release(i))}),p}var lc={day:"#F4F3EF",gallery:"#E9E8E3",dusk:"#26241F"};function Ds(e,{audio:a,footer:o}){zs();let t=Os(),d=(w,q)=>{try{a?.sfx?.(w,q)}catch{}},p=Gr();e.innerHTML=`<div class="v3 v3-is-dark" data-v3-home>
  <div class="v3-tint"></div><div class="v3-room"></div>
  <section class="v3-table" id="v3-table" aria-labelledby="v3-h1">
    <figure class="v3-surf v3-site" style="margin:0" aria-label="Volta, an invented journal designed and built by the studio"><div class="v3-bar"><i></i><i></i><i></i><span>volta \u2014 an invented journal</span></div><img src="./media/work/volta-opening.jpg" alt=""><span class="v3-cap v3-honest">Website</span></figure>
    <div class="v3-surf v3-ui" aria-hidden="true"><span class="v3-cap v3-honest">Interface</span></div>
    <div class="v3-surf v3-hmat" data-live="lens" aria-hidden="true"><span class="v3-cap v3-honest">Material</span></div>
    <div class="v3-shade" aria-hidden="true"></div><div class="v3-warmth" aria-hidden="true"></div>
    <div class="v3-copy">
      <span class="v3-label">Independent digital design studio</span>
      <h1 id="v3-h1" class="v3-h-xl" style="--d:80ms">Digital things,<br>made to feel alive.<span class="v3-h1-glow" aria-hidden="true">Digital things,<br>made to feel alive.</span></h1>
      <p class="v3-lede" style="--d:160ms">Websites, interactive products and the tools between them \u2014 designed and built by one studio, with light as its material.</p>
      <div class="v3-acts" style="--d:240ms"><a class="v3-btn v3-lamp" href="#v3-work" data-jump>See the work</a><a class="v3-btn v3-ghost" href="#/products">Products</a></div>
      <nav class="v3-rail" style="--d:300ms" aria-label="Chapters"><a href="#v3-work" data-jump><b>01</b>Websites</a><a href="#v3-products" data-jump><b>02</b>Products</a><a href="#v3-studio" data-jump><b>03</b>Studio</a></nav>
    </div>
    <span class="v3-hint v3-honest" aria-hidden="true"><i></i>Move the light</span>
  </section>

  <section class="v3-sec v3-chap" id="v3-work" data-light="day" aria-labelledby="v3-w">
    <header class="v3-chap-hd"><span class="v3-num v3-rv">01</span><div class="v3-rv"><span class="v3-label">Chapter one \xB7 in daylight</span><h2 class="v3-h-l" id="v3-w">Websites</h2></div><p class="v3-rv v3-chap-l">Sites designed and built end to end. Each one shown for exactly what it is.</p><i class="v3-beam-line" aria-hidden="true"></i></header>
    <div class="v3-work">
      <div class="v3-browser v3-rv"><div class="v3-bar"><i></i><i></i><i></i><span>volta \u2014 scroll inside, pull a letter, move the lens</span></div><iframe src="./work/volta/example-volta.html" title="Volta, a live demonstration website" loading="lazy"></iframe></div>
      <div class="v3-wcap"><h3 class="v3-h-m">Volta</h3><p>A journal about material things. Editorial typography, a masthead you can stretch and an essay under a lens \u2014 two studio products installed on one site.</p><span class="v3-honest">Studio demonstration \xB7 invented journal \xB7 not a client commission</span></div>
      <article class="v3-case v3-rv" aria-labelledby="v3-b">
        <figure class="v3-still"><img src="./media/templates/brunito.cover.jpg" alt="Brunito ecommerce website: home page with an editorial hero and collection links" loading="lazy"></figure>
        <div class="v3-case-t"><span class="v3-honest">Ecommerce design &amp; development \xB7 independent demo project</span><h3 class="v3-h-m" id="v3-b">Brunito</h3>
          <p>A complete shop, designed and built as a working demonstration of what we make for commerce: an editorial homepage, collections, product pages with real variants and galleries, and a cart.</p>
          <dl class="v3-facts"><dt>Pages</dt><dd>Home, collections, product, cart drawer, cart</dd><dt>Devices</dt><dd>Desktop, tablet and mobile</dd><dt>Checkout</dt><dd>Purchases disabled \u2014 it is a demonstration</dd><dt>Client</dt><dd>None \u2014 an independent project</dd></dl>
          <a class="v3-btn v3-ghost v3-small" href="https://carlatres3.github.io/brunito/" target="_blank" rel="noopener">Open the live demo \u2197</a></div>
      </article>
      <aside class="v3-wip v3-rv" aria-label="Ombra, in progress"><img src="./media/work/ombra-opening.jpg" alt="" loading="lazy"><p><b>Ombra</b> \u2014 an editorial site for an invented furniture studio, <b>in progress</b>. Not shown until it is finished.</p></aside>
      <div class="v3-contact"><h3 class="v3-h-l v3-rv" style="max-width:13ch">Have a site that should feel alive?</h3><a class="v3-btn v3-rv" href="#/design">Start a project \u2192</a></div>
    </div>
  </section>

  <section class="v3-sec v3-creed" data-light="day" aria-labelledby="v3-cr">
    <h2 class="v3-h-l v3-rv" id="v3-cr">We design with light, motion and sound \u2014 and we measure it.</h2>
    <div class="v3-proofs" data-creed>
      <div class="v3-pf v3-rv"><span class="v3-label">Real, not recorded</span><b class="v3-num" data-proof="live">\u2014</b><p><span data-proof="liveword">pieces running live on this page right now.</span> <span data-proof="video">\u2014</span> videos pretending to be interactive.</p></div>
      <div class="v3-pf v3-rv" style="--d:100ms"><span class="v3-label">Measured, not claimed</span><b class="v3-num" data-proof="lcp">\u2014</b><p>seconds until this page's largest element appeared on <em>your</em> device, before you first scrolled \u2014 read from your browser.</p></div>
      <div class="v3-pf v3-rv" style="--d:200ms"><span class="v3-label">Light before layout</span><b class="v3-num" data-proof="kb">\u2014</b><p>kilobytes this page has transferred so far, fonts and the live site included.</p></div>
      <div class="v3-pf v3-rv" style="--d:300ms"><span class="v3-label">Quiet by default</span><b class="v3-num" data-proof="snd">\u2014</b><p>is your interface-sound setting. Sound is part of the work, and it is always yours to switch off.</p></div>
    </div>
  </section>

  <section class="v3-sec v3-chap" id="v3-products" data-light="gallery" aria-labelledby="v3-p">
    <header class="v3-chap-hd"><span class="v3-num v3-rv">02</span><div class="v3-rv"><span class="v3-label">Chapter two \xB7 gallery light</span><h2 class="v3-h-l" id="v3-p">Products</h2></div><p class="v3-rv v3-chap-l">Objects and interface pieces for other people's websites. Every one below is the real piece, running.</p><i class="v3-beam-line" aria-hidden="true"></i></header>
    <div class="v3-bento">
      <a class="v3-pm v3-orb v3-rv" href="#/products/orb" data-orb><div class="v3-live"></div><span class="v3-tag"><b>The Orb</b><span class="v3-honest">Flagship \xB7 conversational \xB7 in development</span></span></a>
      <a class="v3-pm v3-type v3-rv" href="#/products?obj=type" data-live="type"><span class="v3-tag"><b>Elastic Lettering</b><span class="v3-honest">Effect</span></span></a>
      <a class="v3-pm v3-lens v3-rv" href="#/products?obj=lens" data-live="lens"><span class="v3-tag"><b>Interactive Lens</b><span class="v3-honest">Material</span></span></a>
      <a class="v3-pm v3-kit v3-rv" href="#/products/crystal-controls" data-kit="crystal-controls"><div class="v3-live"></div><span class="v3-tag"><b>Crystal Controls</b><span class="v3-honest">Interface kit</span></span></a>
      <a class="v3-pm v3-more v3-rv" href="#/products"><span class="v3-h-m">The whole collection</span><span class="v3-honest">5 published \xB7 free to try \xB7 code on request</span></a>
    </div>
  </section>

  <section class="v3-sec v3-chap" id="v3-studio" data-light="dusk" aria-labelledby="v3-s">
    <header class="v3-chap-hd"><span class="v3-num v3-rv">03</span><div class="v3-rv"><span class="v3-label">Chapter three \xB7 at dusk</span><h2 class="v3-h-l" id="v3-s">Studio</h2></div><p class="v3-rv v3-chap-l">The instrument we design with. It is closed to the public while it takes shape.</p><i class="v3-beam-line" aria-hidden="true"></i></header>
    <div class="v3-soon v3-rv">
      <div class="v3-soon-v" aria-hidden="true"><i></i></div>
      <div class="v3-soon-i">
        <span class="v3-label">Coming soon</span>
        <p class="v3-soon-h">Studio is not open yet.</p>
        <p>A creative space to explore, experiment and bring digital ideas to life. Until it opens, the products are here to use.</p>
        <div class="v3-acts"><a class="v3-btn v3-ghost v3-small" href="#/studio">Get notified</a><a class="v3-btn v3-ghost v3-small" href="#/products">Browse the products</a></div>
      </div>
    </div>
  </section>

  <section class="v3-close" data-close aria-labelledby="v3-c">
    <div class="v3-cin"><span class="v3-label">The Light Orb</span><h2 class="v3-vh" id="v3-c">The Light Orb</h2>
      <div class="v3-big" aria-hidden="true" data-bigwm></div>
      <p class="v3-lede" style="margin:auto;color:inherit;opacity:.75">When the page goes dark, one light is left. Bring us the rest.</p>
      <div class="v3-acts"><a class="v3-btn v3-lamp" href="#/design">Start a project</a><a class="v3-btn v3-ghost" href="#/products">Explore products</a></div></div>
  </section>
  ${o()}
</div>`;let i=e.querySelector("[data-v3-home]"),l=i.querySelector("#v3-table"),c=i.querySelector("[data-close]");i.querySelector("[data-bigwm]").innerHTML=Br.replaceAll("wm-counter","wm-counter-v3big"),Is(t,i),t.add(()=>document.body.classList.remove("v3-dark")),$r(t,i,"click",w=>{let q=w.target.closest("[data-jump]");q&&(w.preventDefault(),i.querySelector(q.getAttribute("href"))?.scrollIntoView({behavior:Sr?"auto":"smooth"}))});let f=1,h=0,b=!1,$=!1,K=()=>{let w=Math.max(f,h);i.style.setProperty("--dark",w.toFixed(3)),i.style.setProperty("--open",f.toFixed(3)),i.classList.toggle("v3-is-dark",w>.5),document.body.classList.toggle("v3-dark",w>.5||b),i.querySelector("[data-bigwm]").style.setProperty("--glow",h.toFixed(2));let q=h>.9;q&&!$&&d("close",.25),$=q},s=()=>{let w=l.getBoundingClientRect();f=1-ni((-w.top/w.height-.08)/.5);let q=c.getBoundingClientRect();h=ni(1.15-q.top/(innerHeight*.75)),K()};$r(t,e,"scroll",s,{passive:!0}),s();let M=ar(t,w=>w.forEach(q=>{if(!q.isIntersecting)return;let V=q.target.dataset.light;i.style.setProperty("--tint",lc[V]),b=V==="dusk",i.classList.toggle("v3-is-dusk",b),K()}),{rootMargin:"-50% 0px -50% 0px"});i.querySelectorAll("[data-light]").forEach(w=>M.observe(w)),i.querySelectorAll(".v3-chap-hd").forEach(w=>{let q=ar(t,([V])=>{V.isIntersecting&&(w.classList.add("v3-in"),q.disconnect())},{threshold:.6});q.observe(w)}),i.querySelectorAll(".v3-still").forEach(w=>{let q=ar(t,([V])=>{V.isIntersecting&&(w.classList.add("v3-in"),q.disconnect())},{threshold:.4});q.observe(w)});let A={x:innerWidth*.62,y:innerHeight*.38,tx:innerWidth*.62,ty:innerHeight*.38},P=0,F=0;$r(t,window,"pointermove",w=>{w.pointerType!=="touch"&&(A.tx=w.clientX,A.ty=w.clientY,P=performance.now())},{passive:!0}),$r(t,l,"pointerdown",w=>{A.tx=w.clientX,A.ty=w.clientY,P=performance.now(),d("select",.2)});let I=i.querySelector("#v3-h1"),B=[...l.querySelectorAll(".v3-surf")],N=w=>{if(F=requestAnimationFrame(N),f<.02)return;if(performance.now()-P>2600&&!Sr){let ae=B.map(u=>{let O=u.getBoundingClientRect();return[O.left+O.width*.5,O.top+O.height*.45]}),re=w/4200%ae.length,ne=Math.floor(re),de=re-ne,ke=ae[ne],$e=ae[(ne+1)%ae.length],H=de*de*(3-2*de);A.tx=ke[0]+($e[0]-ke[0])*H+Math.sin(w/1300)*30,A.ty=ke[1]+($e[1]-ke[1])*H+Math.cos(w/1700)*24}let q=Sr?1:.085;A.x+=(A.tx-A.x)*q,A.y+=(A.ty-A.y)*q,i.style.setProperty("--bx",`${A.x}px`),i.style.setProperty("--by",`${A.y}px`);let V=I.getBoundingClientRect();I.style.setProperty("--tx",`${A.x-V.left}px`),I.style.setProperty("--ty",`${A.y-V.top}px`)};F=requestAnimationFrame(N),t.add(()=>cancelAnimationFrame(F)),$r(t,window,"pointermove",w=>{if(h<.3||Sr)return;let q=i.querySelector("[data-bigwm]");q.style.setProperty("--ox",`${(w.clientX/innerWidth-.5)*10}px`),q.style.setProperty("--oy",`${(w.clientY/innerHeight-.5)*10}px`)},{passive:!0});let X=Rs(t,{budget:matchMedia("(pointer: coarse)").matches?4:8,mount:async w=>{if(w.dataset.live)return Hr(w,w.dataset.live);if(w.dataset.kit!==void 0||w.classList.contains("v3-ui")){let q=document.createElement("iframe");return q.title="Crystal Controls, live",q.srcdoc=Ps(tr,"crystal-controls"),(w.querySelector(".v3-live")??w).prepend(q),{dispose:()=>q.remove()}}if(w.dataset.orb!==void 0){let{mountSphere:q}=await import("./chunk-YOG5YMMH.js"),V=q(w.querySelector(".v3-live"),"dawn");return{dispose:()=>V.dispose()}}}}),T=ar(t,w=>w.forEach(q=>q.isIntersecting?X.activate(q.target,q.target.dataset.orb!==void 0?2:1):X.release(q.target)),{rootMargin:"150px"});i.querySelectorAll("[data-live],[data-kit],[data-orb],.v3-surf.v3-ui").forEach(w=>T.observe(w));let E=null;try{let w=new PerformanceObserver(q=>{let V=q.getEntries().at(-1);V&&(E=V.startTime)});w.observe({type:"largest-contentful-paint",buffered:!0}),t.add(()=>w.disconnect())}catch{}let C=w=>i.querySelector(`[data-proof="${w}"]`),_=()=>{let w=X.size+i.querySelectorAll(".v3-browser iframe").length;C("live").textContent=w,C("liveword").textContent=w===1?"piece running live on this page right now.":"pieces running live on this page right now.",C("video").textContent=i.querySelectorAll("video").length,C("lcp").textContent=E==null?"n/a":(E/1e3).toFixed(2);let q=performance.getEntriesByType("resource").reduce((V,ae)=>V+(ae.transferSize||0),0)+(performance.getEntriesByType("navigation")[0]?.transferSize||0);C("kb").textContent=q?Math.round(q/1024).toLocaleString("en"):"n/a",C("snd").textContent=p.sounds?"On":"Off"};ar(t,([q])=>{q.isIntersecting&&_()}).observe(i.querySelector("[data-creed]"));{let w=p.on?.(_);w&&t.add(w)}return window.__v3home={pool:X},t.add(()=>{window.__v3home?.pool===X&&delete window.__v3home}),()=>t.dispose()}var Fs="lightorb:cart",mo=()=>{try{return JSON.parse(localStorage.getItem(Fs))??[]}catch{return[]}},Bs=e=>{try{localStorage.setItem(Fs,JSON.stringify(e))}catch{}si.forEach(a=>a(e))},si=new Set,ra={items:mo,has:e=>mo().some(a=>a.id===e),add(e){let a=mo();a.some(o=>o.id===e.id)||(a.push({...e,at:new Date().toISOString()}),Bs(a))},remove(e){Bs(mo().filter(a=>a.id!==e))},toggle(e){return ra.has(e.id)?(ra.remove(e.id),!1):(ra.add(e),!0)},on(e){return si.add(e),()=>si.delete(e)}};var Wr="Carla Tres Garc\xEDa",Ns="39934017Z",Hs="hello@thelightorb.com",dc="11 November 2026",_s="Avenida Duque de Loul\xE9 91, Lisboa, Portugal",ba=`<a href="mailto:${Hs}">${Hs}</a>`,cc={privacy:{kicker:"Privacy",title:"Privacy",lede:"What this site collects, why, and what you can ask for. Short version: very little, and nothing is sold.",body:`
    <h2>Who is responsible</h2>
    <p>The Light Orb is run by ${Wr} (NIF ${Ns}), a sole trader (the data controller). Address: ${_s}. Contact: ${ba}.</p>
    <h2>Visiting the site</h2>
    <p>We count visits with GoatCounter, a privacy-friendly analytics service that sets no cookies and does not track you across sites. It records the page address, referrer, browser type, screen size and an approximate country, without storing your IP address. If your browser sends Do Not Track or Global Privacy Control, nothing is counted at all. Legal basis: our legitimate interest in knowing which pages are used.</p>
    <h2>Early access and the waitlist</h2>
    <p>If you join early access (or the waitlist) we keep your email address, the name you give if any, the date, where you signed up (for example "footer") and your browser language \u2014 nothing else. It is stored in Cloudflare Workers KV, the owner receives one notification email about each new sign-up (sent through Resend), and it is used only to tell you when pieces and Studio updates open. Your display name, designs and saved items stay in your browser. Legal basis: your consent, which you can withdraw at any time by writing to ${ba}; we then delete your address.</p>
    <h2>Your account</h2>
    <p>If you create an account we keep your email address, the display name you choose (if any), the date you confirmed your email, your plan (which plan, how you got it, when it started and ends, and whether it was refunded) and, if you joined the Studio list, the fact that you did so, so the site does not ask you again. Your password is never seen or stored by us: sign-in is run by Supabase, which keeps it only as a secure one-way hash. Accounts are stored by Supabase in the European Union (Paris). The email that confirms your address and any password-reset email are sent through Resend from hello@thelightorb.com. To keep you signed in, a sign-in token is stored in your browser; signing out removes it. Legal basis: providing the account you asked for (a contract). We keep your account while it exists. You can delete it at any time from Account \u2192 Sign-in &amp; security, or by writing to ${ba}: your account, profile and plan records are removed straight away; payment records that the law requires us to keep (see Payments) stay with Stripe and in our accounts.</p>
    <h2>Payments</h2>
    <p>Payments are processed by Stripe. We never see or store your card details. When you pay we receive from Stripe that the payment was made, the plan, the amount, a Stripe reference and the account it belongs to (we pass your account's internal id to Stripe so the plan reaches the right account). Stripe also processes your payment data as an independent controller under its own privacy policy. Legal basis: the contract, and our legal obligation to keep invoices and tax records, which are kept for as long as tax law requires (in general several years).</p>
    <h2>Web design inquiries</h2>
    <p>If you send a project through the Web Design form, what you write (your name, email, project details and any optional answers) and the time of sending are delivered as one email to ${Wr}, sent through Resend from our Cloudflare Worker. It is used only to reply to you and discuss your project; it is not added to any mailing list. The Worker does not store the message itself, only a random submission code for one day so the same message is not sent twice. Legal basis: steps you ask us to take before a possible contract. You can ask for the email to be deleted at any time by writing to ${ba}.</p>
    <h2>Requesting code</h2>
    <p>If you use Request Code on a product we keep your name, email, the product and version you asked about, what you wrote about its use (if anything), your browser language and the time. It is stored in Cloudflare Workers KV before anything else happens, so the request is not lost if an email fails, and it is sent as one email to ${Wr} through Resend. It is used only to answer that request; it is not added to any mailing list. Legal basis: steps you ask us to take before a possible agreement. It is kept no longer than two years, or less if you ask us to delete it by writing to ${ba}.</p>
    <h2>Studio Membership list</h2>
    <p>If you join the Studio Membership list we keep your email address, the date, your browser language, the version of the consent you ticked and a random code that lets you leave. It is kept apart from every other list and used only to email you when Studio Membership opens. You receive a confirmation email (sent through Resend) with a link to leave; leaving removes your address from this list only. Legal basis: your consent, which you can withdraw at any time through that link or by writing to ${ba}. It is kept until Studio Membership opens and the announcement is sent, and no longer than two years.</p>
    <h2>Talking with the Orb</h2>
    <p>When you ask the guide Orb a question, the text of the conversation and the page you are on are sent through our Cloudflare Worker to Anthropic, which generates the reply. We do not store or log these conversations. Anthropic processes them as our service provider under its own commercial terms. Please do not share personal information in the conversation.</p>
    <h2>Voice</h2>
    <p>Speech recognition is done by your browser. Depending on your browser, the recognised audio may be processed by its maker (for example Google or Apple). We never receive or keep your voice.</p>
    <p>The guide always speaks with one voice. Lines without a recording are spoken on your device: the first time, your browser downloads the open voice model (about 90 MB) from Hugging Face, which sees an ordinary download request. The text being spoken is never sent anywhere.</p>
    <h2>Orb microphone</h2>
    <p>Every version of The Orb can react to sound from your microphone after you turn it on and allow browser access. The sound is analysed locally in your browser, without recording, storage or upload. Input stops when you turn it off, leave the product or hide the page.</p>
    <h2>Stored on your device</h2>
    <p>The site uses your browser's local storage to remember your preferences (sound, voice, light or dark), saved items, your display name and your designs, plus short-lived session storage for scroll position. If you have an account, it also keeps your sign-in token and a copy of your name, email and plan so your account opens instantly; signing out stops them being used. This stays on your device; we cannot see it. You can clear it from your browser settings.</p>
    <h2>Providers and transfers</h2>
    <p>Vercel and GitHub (site hosting), Supabase (accounts, stored in the EU), Stripe (payments), Cloudflare (Worker and waitlist storage), Resend (account emails sent to you, sign-up notifications, code requests and web design inquiries emailed to the owner, and the Studio Membership confirmation emailed to you), GoatCounter (visit counts) and Anthropic (Orb replies). Some of them are based in the United States; transfers rely on the EU\u2013US Data Privacy Framework or standard contractual clauses.</p>
    <h2>How long</h2>
    <p>Waitlist emails are kept until the pieces open and the announcement is sent, or until you ask us to delete them, and in any case no longer than two years. Visit counts are aggregated.</p>
    <h2>Your rights</h2>
    <p>Under the GDPR you can ask for access, correction, deletion, restriction, portability, or object to processing, and withdraw consent, by writing to ${ba}. You can also complain to the Spanish Data Protection Agency (AEPD, aepd.es).</p>`},terms:{kicker:"Terms",title:"Terms of use",lede:"The rules for using this website.",body:`
    <h2>Who we are</h2>
    <p>This website is run by ${Wr} (NIF ${Ns}), a sole trader. Address: ${_s}. Contact: ${ba}.</p>
    <h2>Using the site</h2>
    <p>You may browse the site, try the previews, and use Studio and the guide Orb for your own personal or professional exploration. Please do not misuse it: no attempts to break, overload or scrape it, and no unlawful or abusive use of the guide Orb.</p>
    <h2>The guide Orb</h2>
    <p>The Orb's replies are generated automatically and may be incomplete or wrong. They are not professional advice and do not bind us; prices and terms are only those shown on the site.</p>
    <h2>Content and pieces</h2>
    <p>The design, text, images, sounds and code of this site belong to ${Wr} unless stated otherwise. Using any piece or template you obtain, free or paid, is governed by the <a href="#/licence">licence</a>.</p>
    <h2>Your account</h2>
    <p>An account is for one person. Use a real email address you can read, keep your password to yourself and sign out on shared computers. You are responsible for what is done with your account. We may suspend an account that is used to break these terms or the law, and we will tell you why. You can delete your account at any time from Account \u2192 Sign-in &amp; security.</p>
    <h2>Plans</h2>
    <p><b>Free account</b> \u2014 free. You can try every piece and take the free pieces with their code. Paid pieces and templates are not included.</p>
    <p><b>Lifetime Pass</b> \u2014 one payment, no subscription. It gives your account every piece on the site, free and paid, with its code, and the complete The Light Orb template, for as long as The Light Orb offers them. Sector and ecommerce websites (for example Berries and Brunito) are sold separately and are not part of the Pass. "Lifetime" means the life of the service, not a promise that it will run forever; if it ever closes, we will tell you in advance so you can download what is yours. Use of each piece follows the <a href="#/licence">licence</a>.</p>
    <p><b>Studio</b> \u2014 a subscription, monthly or yearly. It can only be bought once Studio opens. It renews automatically at the end of each period until you cancel; you can cancel at any time and keep access until the end of the period you have paid.</p>
    <h2>Purchases</h2>
    <p>Prices are shown in euros on the Membership page. Any taxes are shown at checkout, before you pay. Payment is handled by Stripe; your plan is added to the account you were signed in with, normally within a minute. If you bought while signed out, or the plan does not appear, write to ${ba} with your Stripe receipt and we will add it.</p>
    <h2>Right of withdrawal and refunds</h2>
    <p>If you are a consumer in the EU you normally have 14 days to withdraw from an online purchase. The Lifetime Pass gives you digital content straight away: at checkout you ask for immediate access and acknowledge that, once access has started, you lose the right of withdrawal. For a Studio subscription you can withdraw within 14 days; if you asked for it to start straight away, we refund the unused part. Beyond this, write to ${ba} and we will look at every request fairly. A refunded plan ends when the refund is made.</p>
    <h2>Availability and liability</h2>
    <p>The site is offered as it is and may change or be unavailable at times. We are not liable for indirect losses arising from its use, except where the law does not allow this to be limited. Nothing here limits your rights as a consumer.</p>
    <h2>Law</h2>
    <p>These terms are governed by Spanish law. If you are a consumer, you keep the protection of the law and the courts of your place of residence.</p>`},licence:{kicker:"Licence",title:"Licence",lede:"What you can do with the free pieces, and with the paid pieces and templates.",body:`
    <h2>The free Orb (Original version)</h2>
    <p>Free for personal and commercial use: websites, apps, client work, products. Attribution ("Orb by The Light Orb") is appreciated, not required. You may not resell or redistribute the code itself as a product, template or asset pack, or present it as your own. It includes Three.js (MIT licence).</p>
    <h2>Early access</h2>
    <p>While The Light Orb is being built, every piece can be tried on the site, and the free pieces come with their code. Anything you obtain for free stays free to use under the licence that applies to it, also after paid plans open. Paid pieces and The Light Orb template come with the Lifetime Pass; sector and ecommerce websites are sold separately; Studio opens later.</p>
    <h2>Paid pieces \u2014 personal</h2>
    <p>For your own projects, personal or commercial, by one person. Use the piece in as many of your own projects as you like.</p>
    <h2>Paid pieces \u2014 commercial</h2>
    <p>For one person's client and commercial work: you may build the piece into work you deliver to clients or sell, as long as it is part of a larger work and not offered on its own.</p>
    <h2>Team licence</h2>
    <p>Everyone in one team or company may use the pieces under the commercial terms above.</p>
    <h2>Never allowed</h2>
    <p>Reselling, sharing or redistributing the source files, alone or in a pack, template, library or marketplace, even modified or for free; or using them to build a product that competes with The Light Orb.</p>
    <h2>No warranty</h2>
    <p>Code is provided as it is. Questions about a use not covered here: ${ba}.</p>`}},Ws={privacy:"Privacy",terms:"Terms of use",licence:"Licence"};function fo(e,a,o){let t=cc[o];e.innerHTML=`
    <section class="dest legal">
      <header class="dh"><p class="kicker">${t.kicker}</p><h1>${t.title}</h1><p class="dh-l">${t.lede}</p></header>
      <div class="legal-b">${t.body}
        <p class="note">Last updated ${dc}. <a href="#/privacy">Privacy</a> \xB7 <a href="#/terms">Terms</a> \xB7 <a href="#/licence">Licence</a></p></div>
    </section>${a.footer()}`}var Ys={now:"Available now",site:"On this website",dev:"In development",future:"Future capability",note:"Good to know"},pc={clear:"Clear glass",chrome:"Liquid metal",porcelain:"Porcelain",bloom:"Bloom",core:"Core",points:"Points of light",glitter:"Glitter",beads:"Beads"},uc=()=>Object.entries(pc).map(([e,a])=>{let o=Gt.filter(t=>t.base===e);return{id:o[0].id,name:a,line:o[0].line,also:o.slice(1).map(t=>t.name)}}),gc={orb:{capabilities:[{status:"now",ask:"Can I move it?",title:"Turns under your hand",line:"Yes. Drag it and it turns with weight and inertia; let go and it settles back into a slow turn of its own."},{status:"now",ask:"What happens if I tap it?",title:"Stirs when tapped",line:"Whatever is inside \u2014 light, cloud, flakes or beads \u2014 moves faster for a moment, then calms down again."},{status:"now",ask:"Does it react to my voice?",title:"Answers your voice",line:"On the product page, turn the microphone on: Bloom moves its cloud with your voice and every other version answers with a gentle pulse. The sound is analysed in your browser only \u2014 never recorded or sent."},{status:"now",ask:"What if I prefer less motion?",title:"Calm when asked",line:"It follows the reduced-motion setting of your device and stays still and quiet."},{status:"site",ask:"Can it talk with me?",title:"A guide you can talk to",line:"The guide Orb on this website answers typed or spoken questions. That guide belongs to this site; it is not part of The Orb you receive."},{status:"dev",ask:"Could it talk with my own visitors?",title:"Conversational",line:"That is the next step: an Orb that holds a conversation on your website. It is being designed and cannot be taken yet."},{status:"future",ask:"Could it do things for them?",title:"Agent",line:"Planned: carrying out simple tasks for a visitor, always with their permission. Not built yet."},{status:"future",ask:"And work with my business information?",title:"Connected",line:"Planned: linking the Orb to your own content and tools. Not built yet."}],delivery:()=>[["Access","Try every version free on the product page \u2014 no sign-up."],["Code",aa?"Source code on request, from the product page. The demo never needs it.":"The embed code is on the product page."],["You receive",sa("orb").receives.join(" \xB7 ")],["Technology","Three.js r186 \xB7 WebGL 2."],["Compatibility","Current Chrome, Safari, Edge and Firefox."],["Requirements","WebGL 2. Without it, show a still image instead."],["Limitations","One per page is the intended use: a live 3D object costs more battery than an image on phones."],["Licence",'Personal and commercial use; no resale of the source. <a href="#/licence">Read the licence</a>']],unverified:["Web component / React / Next.js packages","Conversational, Agent and Connected levels","Studio customisation (Studio is closed)"],families:uc,versions:()=>Gt.length}},Us=e=>gc[e]??null;var Ye=e=>String(e).replace(/[&<>"]/g,a=>`&#${a.charCodeAt(0)};`),_a=(e,a)=>`<h3 class="dk-k dk-r" id="dk-${e.id}"><span>${a}</span>${Ye(e.kicker)}</h3>${e.statement?`<p class="dk-big dk-r">${Ye(e.statement)}</p>`:""}`,Vs=e=>`<span class="dk-chip dk-chip-${e}">${Ys[e]}</span>`,Gs={hero:(e,a)=>`<div class="dk-hero"><div class="dk-hero-t">${_a(e,a)}${e.body.map((o,t)=>`<p class="dk-p dk-r${t===e.body.length-1&&e.emphasis?" dk-em":""}">${Ye(o)}</p>`).join("")}</div>
    ${e.media?`<figure class="dk-hero-v dk-r"><img src="${e.media.src}" alt="${Ye(e.media.alt)}" loading="lazy" decoding="async"><figcaption>${Ye(e.media.caption)}</figcaption></figure>`:""}</div>`,capabilities:(e,a)=>{let o=["now","site","dev","future","note"],t=o.flatMap(p=>e.items.filter(i=>i.status===p)),d=o.map(p=>[p,t.filter(i=>i.status===p)]).filter(p=>p[1].length);return`<div class="dk-cx"><div class="dk-cx-l">${_a(e,a)}<p class="dk-p dk-r">${Ye(e.lead)}</p>
      <ul class="dk-legend dk-legend-row dk-r">${d.map(([p,i])=>`<li>${Vs(p)}<span>${i.length}</span></li>`).join("")}</ul></div>
      <div class="dk-chatbox dk-r" data-dk-chat>
        <div class="dk-chat-top"><i class="dk-av" aria-hidden="true">${co}</i><div><b>${Ye(e.who||"The Orb")}</b><span>Illustrated answers \xB7 written in advance</span></div></div>
        <ol class="dk-chat" data-dk-log aria-live="polite" aria-label="Questions and answers about ${Ye(e.who||"The Orb")}"></ol>
        <div class="dk-chat-ask"><p>Ask about</p><div class="dk-chat-qs">${t.map((p,i)=>`<button type="button" class="dk-qbtn" data-dk-q="${i}">${Ye(p.ask)}</button>`).join("")}</div></div>
      </div></div>
      <p class="dk-note dk-r">${Ye(e.note)}</p>`},demo:(e,a)=>`<div class="dk-demo"><div class="dk-demo-v" data-dk-demo-view><div class="dk-demo-host" data-dk-demo aria-hidden="true"></div><p class="dk-demo-cur" aria-live="polite"><b data-dk-state-name></b><span class="dk-demo-tip"> \xB7 ${e.tip?Ye(e.tip):""}</span></p></div>
    <div class="dk-demo-l">${_a(e,a)}<p class="dk-p dk-r">${Ye(e.lead)}</p>${e.states.map(o=>`<button type="button" class="dk-state dk-r" data-dk-state="${o.id}" aria-pressed="false"><b>${Ye(o.name)}</b><span>${Ye(o.line)}${o.also?.length?` Also ${Ye(o.also.join(", "))}.`:""}</span></button>`).join("")}
    ${e.unavailable?`<p class="dk-unavail dk-r">${Ye(e.unavailable)}</p>`:""}</div></div>`,uses:(e,a)=>`<div class="dk-uses-h">${_a(e,a)}<p class="dk-p dk-r">${Ye(e.lead)}</p></div>
    <div class="dk-uses">${e.items.map((o,t)=>`<figure class="dk-use dk-r${t===0||o.real?" dk-use-wide":""}${o.real?" dk-use-real":""}">${o.real?`<div class="dk-ex dk-ex-real"><img src="${o.real.img}" alt="${Ye(o.real.alt)}" loading="lazy" decoding="async"></div>`:hc(o.example)}
      <figcaption><b>${Ye(o.title)}</b><span>${Ye(o.line)}</span><em>${o.real?`<a href="${o.real.href}">${Ye(o.real.label)}</a>`:"Design example \xB7 not an available template"}</em></figcaption></figure>`).join("")}</div>`,facts:(e,a)=>`${_a(e,a)}<dl class="dk-facts">${e.rows.map(([o,t])=>`<div class="dk-f dk-r"><dt>${Ye(o)}</dt><dd>${t}</dd></div>`).join("")}</dl>`,actions:(e,a)=>`${_a(e,a)}<div class="dk-acts dk-r">${e.actions.map(o=>o.href?`<a class="gb small${o.primary?" primary":""}" href="${o.href}">${Ye(o.label)}</a>`:`<button class="gb small${o.primary?" primary":""}" type="button" data-dk-act="${o.act}">${Ye(o.label)}</button>`).join("")}</div>`,custom:(e,a)=>`${_a(e,a)}${e.html}`,list:(e,a)=>`${_a(e,a)}<ul class="dk-list">${e.items.map(o=>`<li class="dk-r">${Ye(o)}</li>`).join("")}</ul>`};function hc(e){return`<div class="dk-ex dk-ex-${e.tone} dk-ex-${e.align||"split"}" aria-hidden="true">
    <div class="dk-ex-nav"><b>${Ye(e.brand)}</b><span class="dk-ex-links"><span>${e.nav.map(Ye).join("</span><span>")}</span></span></div>
    <div class="dk-ex-body"><div class="dk-ex-t"><small>${Ye(e.eyebrow)}</small><strong>${Ye(e.headline)}</strong><p>${Ye(e.sub)}</p><i>${Ye(e.cta)}</i></div>
      <div class="dk-ex-img"><img src="${e.img}" alt="" loading="lazy" decoding="async"></div></div></div>`}var Xs={capabilities(e,a,o){let t=["now","site","dev","future","note"],d=t.flatMap(b=>a.items.filter($=>$.status===b)),p=e.querySelector("[data-dk-log]"),i=[...e.querySelectorAll("[data-dk-q]")],l=[],c=()=>{p.scrollTop=p.scrollHeight},f=b=>`<li class="dk-a dk-a-${b.status}"><i class="dk-av" aria-hidden="true">${co}</i><div><p class="dk-a-h"><b>${Ye(b.title)}</b>${Vs(b.status)}</p><p class="dk-a-l">${Ye(b.line)}</p></div></li>`,h=(b,$)=>{let K=d[b];if(i[b].setAttribute("aria-pressed","true"),i[b].classList.add("is-asked"),p.insertAdjacentHTML("beforeend",`<li class="dk-q"><span>${Ye(K.ask)}</span></li>`),$||o.reduced){p.insertAdjacentHTML("beforeend",f(K)),c();return}p.insertAdjacentHTML("beforeend",`<li class="dk-a dk-typing" aria-hidden="true"><i class="dk-av">${co}</i><div><span></span><span></span><span></span></div></li>`),c(),l.push(setTimeout(()=>{p.querySelector(".dk-typing")?.remove(),p.insertAdjacentHTML("beforeend",f(K)),c()},650))};return i.forEach((b,$)=>{b.setAttribute("aria-pressed","false"),b.addEventListener("click",()=>{p.querySelector(".dk-typing")||h($)})}),h(0,!0),()=>l.forEach(clearTimeout)},demo(e,a,o){let t=e.querySelector("[data-dk-demo]"),d=e.querySelector("[data-dk-demo-view]"),p=e.querySelector("[data-dk-state-name]"),i=[...e.querySelectorAll("[data-dk-state]")],l=o.demos[a.demo],c=null,f="",h=!1,b=(M,{force:A=!1}={})=>{M!==f&&(!A&&!h||(f=M,c?.show(M),p.textContent=a.states.find(P=>P.id===M)?.name??"",i.forEach(P=>P.setAttribute("aria-pressed",String(P.dataset.dkState===M)))))},$=new IntersectionObserver(([M])=>{h=M.intersectionRatio>.6,h&&s()},{threshold:[0,.6,1]});$.observe(d);let K=new IntersectionObserver(M=>{M.some(A=>A.isIntersecting)&&!c&&(c=l.mount(t,{reduced:o.reduced,initial:f||a.states[0].id}),K.disconnect())},{rootMargin:"400px"});K.observe(t),b(a.states[0].id,{force:!0}),i.forEach(M=>{M.addEventListener("click",()=>b(M.dataset.dkState,{force:!0})),M.addEventListener("pointerenter",A=>{A.pointerType==="mouse"&&b(M.dataset.dkState,{force:!0})})});function s(){if(o.reduced)return;let M=o.viewport(),A=M.top+M.height*.55,P=null,F=1e9;for(let I of i){let B=I.getBoundingClientRect();if(B.bottom<M.top||B.top>M.top+M.height)continue;let N=Math.abs(B.top+B.height/2-A);N<F&&(F=N,P=I)}P&&b(P.dataset.dkState)}return o.onScroll(s),()=>{$.disconnect(),K.disconnect(),c?.dispose()}}};function bo(e){let a=String(e.blocks.length).padStart(2,"0");return`<section class="dk dk-surf-${e.surface||"stone"}" id="pd-more" aria-label="${Ye(e.name)} \u2014 the full story">
  <div class="dk-intro"><h2 class="dk-title">${Ye(e.name)}, in detail.</h2></div>
  <div class="dk-ws">
    <div class="dk-mon">
      <div class="dk-chrome" aria-hidden="true"><span class="dk-dots"><i></i><i></i><i></i></span><span class="dk-navi"><svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg><svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></span><span class="dk-url"><svg viewBox="0 0 24 24"><rect x="6" y="11" width="12" height="9" rx="2"/><path d="M9 11V8a3 3 0 0 1 6 0v3"/></svg><span>thelightorb.com/products/${Ye(e.id)}</span></span><svg class="dk-rel" viewBox="0 0 24 24"><path d="M19 12a7 7 0 1 1-2.05-4.95M19 5v4h-4"/></svg></div>
      <div class="dk-screen" data-dk-screen tabindex="0" role="region" aria-label="${Ye(e.name)} story. Scrolls on its own; at the end, scrolling continues down the page.">
        <header class="dk-bar"><span class="dk-bar-n">${Ye(e.name)}</span><span class="dk-bar-cur" data-dk-cur></span><span class="dk-bar-s" aria-hidden="true"><i data-dk-progress></i></span><span class="dk-bar-c"><b data-dk-num>01</b> / ${a}</span></header>
        ${e.blocks.map((o,t)=>`<section class="dk-sec dk-t-${o.type}" data-dk-block="${t}" aria-labelledby="dk-${o.id}">${Gs[o.type](o,String(t+1).padStart(2,"0"))}</section>`).join("")}
        <p class="dk-end">End of the story \u2014 keep scrolling to continue.</p>
      </div>
      <p class="dk-hint" data-dk-hint aria-hidden="true">Scroll inside <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></p>
    </div>
  </div>
</section>`}function xo(e,{story:a,reduced:o,demos:t,act:d={}}){let p=e.querySelector(".dk");if(!p)return{dispose(){}};let i=p.querySelector("[data-dk-screen]"),l=p.querySelector("[data-dk-progress]"),c=p.querySelector("[data-dk-num]"),f=p.querySelector("[data-dk-cur]"),h=()=>getComputedStyle(i).overflowY==="auto",b=e.closest("main")??e,$=[],K=[],s=()=>Math.max(0,document.querySelector(".hd")?.getBoundingClientRect().bottom??0),M=()=>p.style.setProperty("--dk-top",h()?`${Math.round(p.querySelector(".dk-bar")?.getBoundingClientRect().height??40)}px`:`${Math.round(s())+8}px`);M();let A=()=>{if(h()){let q=i.getBoundingClientRect();return{top:q.top+48,height:q.height-48}}let _=p.querySelector("[data-dk-demo-view]"),w=s()+(_?_.getBoundingClientRect().height:0);return{top:w,height:innerHeight-w}},P={reduced:o,demos:t,viewport:A,onScroll:_=>K.push(_)};p.querySelectorAll("[data-dk-block]").forEach(_=>{let w=a.blocks[+_.dataset.dkBlock],q=Xs[w.type]?.(_,w,P);q&&$.push(q)});let F,I=()=>{if(F?.disconnect(),o){p.classList.add("dk-still");return}F=new IntersectionObserver(_=>_.forEach(w=>{w.isIntersecting&&(w.target.classList.add("in"),F.unobserve(w.target))}),{root:h()?i:null,rootMargin:"0px 0px -6% 0px",threshold:.05}),p.querySelectorAll(".dk-r:not(.in)").forEach(_=>F.observe(_))};I();let B=[...p.querySelectorAll("[data-dk-block]")],N=0,X=()=>{N||(N=requestAnimationFrame(()=>{if(N=0,h()){let V=i.scrollTop/Math.max(1,i.scrollHeight-i.clientHeight);l.style.transform=`scaleX(${V.toFixed(3)})`,p.classList.toggle("dk-moved",i.scrollTop>24)}let _=A(),w=_.top+_.height*.3,q=0;B.forEach((V,ae)=>{V.getBoundingClientRect().top<=w&&(q=ae)}),c.textContent=String(q+1).padStart(2,"0"),f.textContent=a.blocks[q].kicker,K.forEach(V=>V())}))};i.addEventListener("scroll",X,{passive:!0}),b.addEventListener("scroll",X,{passive:!0}),addEventListener("scroll",X,{passive:!0});let T=()=>{M(),X()};addEventListener("resize",T);let E=matchMedia("(min-width: 761px) and (pointer: fine)"),C=()=>{I(),T()};return E.addEventListener("change",C),p.querySelectorAll("[data-dk-act]").forEach(_=>_.addEventListener("click",()=>d[_.dataset.dkAct]?.())),X(),$.push(()=>{F?.disconnect(),cancelAnimationFrame(N),i.removeEventListener("scroll",X),b.removeEventListener("scroll",X),removeEventListener("scroll",X),removeEventListener("resize",T),E.removeEventListener("change",C)}),{dispose:()=>$.forEach(_=>_())}}var Ks=`url("data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='520' height='520'><filter id='a'><feTurbulence type='fractalNoise' baseFrequency='.006' numOctaves='4' seed='7'/><feColorMatrix values='0 0 0 0 .55  0 0 0 0 .53  0 0 0 0 .5  0 0 0 .55 0'/></filter><filter id='b'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' seed='3'/><feColorMatrix values='0 0 0 0 .4  0 0 0 0 .38  0 0 0 0 .36  0 0 0 .16 0'/></filter><rect width='100%' height='100%' filter='url(#a)' opacity='.34'/><rect width='100%' height='100%' filter='url(#b)'/></svg>")}")`,Js=`
/* \u2500\u2500 Desk Story (desk/desk.js) \u2500\u2500 */
.dk{--stone:#ece8e2;--stone-2:#e2ddd5;--frame:#3d3c39;--frame-2:#2b2a28;--alu:#d9d6d0;--alu-2:#b9b5ae;--scr:#f8f7f4;--ink:#1c1d1c;--mut:#5c5f5d;--faint:#8a8c8a;--rule:rgba(0,0,0,.07);--red:#a50d2f;--dk-top:72px;
  position:relative;isolation:isolate;margin-top:clamp(24px,3vw,40px);padding:clamp(28px,4vw,56px) 16px clamp(72px,8vw,120px);scroll-margin-top:72px;color:var(--ink)}
.dk::before{content:"";position:absolute;inset:0;z-index:-1;background:${Ks},linear-gradient(180deg,#f0ede8,var(--stone) 40%,var(--stone-2));background-size:520px 520px,auto;
  -webkit-mask-image:linear-gradient(180deg,transparent,#000 140px,#000 calc(100% - 260px),transparent);mask-image:linear-gradient(180deg,transparent,#000 140px,#000 calc(100% - 260px),transparent)}
html[data-theme=dark] .dk{--stone:#2a2927;--stone-2:#21201e;--frame:#111;--frame-2:#0a0a0a;--alu:#4a4845;--alu-2:#353432;--scr:#171817;--ink:#ecebe8;--mut:#a7a9a6;--faint:#7a7c79;--rule:rgba(255,255,255,.08);--red:#a50d2f}
html[data-theme=dark] .dk::before{background:${Ks},linear-gradient(180deg,#2e2d2b,var(--stone) 40%,var(--stone-2));background-size:520px 520px,auto}
.dk-intro{max-width:1180px;margin:0 auto clamp(26px,3vw,40px);display:grid;gap:10px}
.dk-eyebrow{margin:0;font:500 11px/1 var(--font);letter-spacing:.18em;text-transform:uppercase;color:#837d74}
.dk-title{margin:0;font:250 clamp(28px,3.2vw,44px)/1.05 var(--font);letter-spacing:-.025em}
/* the container: a clean panel with its own scroll (owner 2026-11-10: no monitor frame, neck or base) */
.dk-ws{max-width:1180px;margin:0 auto}
.dk-mon{position:relative;border-radius:16px;overflow:hidden;background:var(--scr);box-shadow:0 0 0 1px rgba(0,0,0,.09),0 1px 0 rgba(255,255,255,.7),0 50px 90px -50px rgba(50,42,32,.45),0 22px 40px -28px rgba(50,42,32,.3)}
/* the window: a static browser frame; only the page inside it scrolls (owner 2026-11-10) */
.dk-chrome{display:grid;grid-template-columns:auto auto 1fr auto;align-items:center;gap:18px;padding:12px 18px;background:color-mix(in srgb,var(--scr) 92%,var(--stone));border-bottom:1px solid var(--rule)}
.dk-dots{display:flex;gap:7px}.dk-dots i{width:11px;height:11px;border-radius:50%;background:color-mix(in srgb,var(--ink) 14%,transparent)}
.dk-navi{display:flex;gap:10px;color:var(--faint)}.dk-chrome svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
.dk-url{justify-self:center;display:flex;align-items:center;gap:8px;width:min(100%,460px);justify-content:center;padding:8px 14px;border-radius:9px;background:var(--scr);box-shadow:inset 0 0 0 1px var(--rule);font:400 13px/1.2 var(--font);letter-spacing:.01em;color:var(--mut);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;box-sizing:border-box}
.dk-url svg{width:12px;height:12px;flex:none}.dk-url span{overflow:hidden;text-overflow:ellipsis}.dk-rel{color:var(--faint)}
.dk-screen{position:relative;height:min(72vh,700px);overflow-y:auto;overscroll-behavior:auto;border-radius:0;background:var(--scr);color:var(--ink);scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.22) transparent}
.dk-screen:focus-visible{outline:2px solid #fff;outline-offset:3px}
/* top bar */
.dk-bar{position:sticky;top:0;z-index:3;display:flex;align-items:center;gap:14px;padding:13px clamp(20px,3vw,40px);font:500 11.5px/1 var(--font);letter-spacing:.04em;color:var(--mut);
  background:color-mix(in srgb,var(--scr) 88%,transparent);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid var(--rule)}
.dk-bar-n{color:var(--ink)}.dk-bar-cur{color:var(--faint)}.dk-bar-cur:not(:empty)::before{content:"\xB7";margin-right:10px}
.dk-bar-s{flex:1;height:1px;background:var(--rule);overflow:hidden}.dk-bar-s i{display:block;height:100%;background:var(--ink);transform:scaleX(0);transform-origin:0 50%}
.dk-bar-c{font-variant-numeric:tabular-nums}.dk-bar-c b{color:var(--ink);font-weight:500}
.dk-hint{position:absolute;right:28px;bottom:24px;margin:0;display:flex;align-items:center;gap:6px;padding:7px 12px;border-radius:999px;font:500 11.5px/1 var(--font);color:var(--ink);
  background:color-mix(in srgb,var(--scr) 82%,transparent);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);box-shadow:0 0 0 1px var(--rule),0 8px 20px -12px rgba(0,0,0,.3);pointer-events:none;transition:opacity .5s}
.dk-hint svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:1.6}
@media (prefers-reduced-motion:no-preference){.dk-hint svg{animation:dk-nudge 1.8s ease-in-out infinite}@keyframes dk-nudge{50%{transform:translateY(3px)}}}
.dk-moved .dk-hint{opacity:0}
/* type and rhythm */
.dk-sec{padding:clamp(48px,5.6vw,84px) clamp(24px,5vw,80px);border-top:1px solid var(--rule)}.dk-sec:first-of-type{border-top:0}
.dk-k{display:flex;gap:12px;margin:0 0 18px;font:500 11px/1 var(--font);letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}.dk-k span{color:var(--ink)}
.dk-big{margin:0 0 22px;font:250 clamp(30px,3.6vw,52px)/1.04 var(--font);letter-spacing:-.03em;max-width:15em;text-wrap:balance}
.dk-p{margin:0 0 14px;font-size:16px;line-height:1.62;color:var(--mut);max-width:34em}.dk-em{color:var(--ink)}
.dk-note{margin:18px 0 0;font-size:13px;line-height:1.5;color:var(--faint)}
/* 01 hero */
.dk-hero{display:grid;grid-template-columns:1.08fr .92fr;gap:clamp(28px,4.5vw,64px);align-items:center}
.dk-hero-v{margin:0}.dk-hero-v img{display:block;width:100%;aspect-ratio:1;object-fit:cover;border-radius:16px;background:#efefee}
.dk-hero:not(:has(.dk-hero-v)){grid-template-columns:minmax(0,46em)}
.dk-list{margin:18px 0 0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:12px}
.dk-list li{padding:16px 18px;border-radius:14px;background:color-mix(in srgb,var(--ink) 4%,transparent);box-shadow:inset 0 0 0 1px var(--rule);color:var(--mut);font-size:15px;line-height:1.55}
.dk-hero-v figcaption{margin-top:10px;font-size:12px;color:var(--faint)}
/* 02 capabilities: statement left (pinned while the list moves), groups by status right */
.dk-two{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(28px,5vw,72px);align-items:start}
.dk-two-l{position:sticky;top:72px}
.dk-legend{list-style:none;margin:8px 0 0;padding:0;display:grid;gap:8px}.dk-legend li{display:flex;align-items:center;gap:10px;font-size:13px;color:var(--faint);font-variant-numeric:tabular-nums}
.dk-chip{display:inline-block;white-space:nowrap;font:500 10.5px/1 var(--font);letter-spacing:.06em;text-transform:uppercase;padding:5px 8px;border-radius:999px;box-shadow:inset 0 0 0 1px currentColor}
/* status tags in the Studio granate (owner 2026-11-10): available filled, the rest outlined */
.dk-chip-now{color:#fff;background:var(--red);box-shadow:none}.dk-chip-note{color:var(--red);opacity:.85}.dk-chip-site,.dk-chip-dev,.dk-chip-future{color:var(--red)}.dk-chip-future{opacity:.72}
html[data-theme=dark] .dk-chip-now{color:#fff}
.dk-grp{padding:6px 0 18px}.dk-grp+.dk-grp{border-top:1px solid var(--rule);padding-top:18px}.dk-grp-h{margin:0 0 6px}
.dk-grp ul{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:4px 28px}
.dk-grp li{display:grid;gap:4px;padding:10px 0}.dk-grp b{font-weight:500;font-size:15.5px}.dk-grp li span{font-size:14px;line-height:1.55;color:var(--mut)}
/* 02 as a chat: heading left, a message window right with question buttons under it */
.dk-cx{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:clamp(28px,5vw,72px);align-items:start}
.dk-cx-l{position:sticky;top:72px}
.dk-legend-row{display:flex;flex-wrap:wrap;gap:8px 14px}
.dk-chatbox{display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:auto minmax(0,1fr) auto;min-width:0;height:min(560px,62vh);min-height:420px;border-radius:22px;background:var(--scr);box-shadow:0 0 0 1px var(--rule),0 30px 60px -40px rgba(50,42,32,.45);overflow:hidden}
.dk-chat-top{display:flex;align-items:center;gap:12px;padding:14px 18px;border-bottom:1px solid var(--rule)}
.dk-chat-top b{display:block;font-weight:500;font-size:14.5px}.dk-chat-top span{display:block;margin-top:2px;font-size:12px;color:var(--faint)}
.dk-chat{list-style:none;margin:0;padding:18px;display:flex;flex-direction:column;min-width:0;box-sizing:border-box;gap:10px;overflow-y:auto;scroll-behavior:smooth;scrollbar-width:thin}
.dk-q{align-self:flex-end;max-width:80%}.dk-q span{display:block;padding:10px 15px;border-radius:18px 18px 4px 18px;background:var(--ink);color:var(--scr);font-size:14.5px;line-height:1.45}
.dk-a{display:grid;grid-template-columns:26px minmax(0,1fr);gap:9px;align-items:end;max-width:92%;min-width:0;box-sizing:border-box}.dk-a>div{min-width:0}.dk-q span{overflow-wrap:anywhere}
.dk-av{display:grid;place-items:center;width:26px;height:26px;flex:none;color:var(--ink)}.dk-av svg{width:22px;height:22px;display:block}
.dk-chat-top .dk-av{width:30px;height:30px}.dk-chat-top .dk-av svg{width:28px;height:28px}
.dk-a>div{padding:12px 15px;border-radius:18px 18px 18px 4px;background:color-mix(in srgb,var(--stone) 50%,var(--scr));box-shadow:inset 0 0 0 1px var(--rule)}
.dk-a-h{display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;margin:0 0 5px}.dk-a-h b{font-weight:500;font-size:15px}
.dk-a-l{margin:0;font-size:14px;line-height:1.55;color:var(--mut)}
.dk-a-dev>div,.dk-a-future>div{background:transparent}
.dk-typing>div{display:flex;gap:4px;padding:14px 16px}.dk-typing span{width:6px;height:6px;border-radius:50%;background:var(--faint);animation:dk-dot 1s infinite ease-in-out}
.dk-typing span:nth-child(2){animation-delay:.15s}.dk-typing span:nth-child(3){animation-delay:.3s}@keyframes dk-dot{0%,80%,100%{opacity:.25;transform:none}40%{opacity:1;transform:translateY(-2px)}}
@media (prefers-reduced-motion:no-preference){.dk-chat>li{animation:dk-in .35s cubic-bezier(.2,.7,.2,1)}@keyframes dk-in{from{opacity:0;transform:translateY(6px)}}}
.dk-chat-ask{padding:12px 14px 14px;border-top:1px solid var(--rule)}.dk-chat-ask p{margin:0 0 8px;font:500 10.5px/1 var(--font);letter-spacing:.14em;text-transform:uppercase;color:var(--faint)}
.dk-chat-qs{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px;-webkit-mask:linear-gradient(90deg,#000 90%,transparent);mask:linear-gradient(90deg,#000 90%,transparent)}.dk-chat-qs::-webkit-scrollbar{display:none}
.dk-qbtn{flex:none;font:inherit;font-size:13.5px;padding:9px 14px;border-radius:999px;border:0;cursor:pointer;color:var(--ink);background:color-mix(in srgb,var(--stone) 55%,var(--scr));box-shadow:inset 0 0 0 1px var(--rule);transition:background .2s,opacity .2s}
.dk-qbtn:hover{background:color-mix(in srgb,var(--stone) 85%,var(--scr))}.dk-qbtn.is-asked{opacity:.5}.dk-qbtn:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
.dk-t-capabilities>.dk-note{margin-top:18px}
/* 03 live demo */
.dk-demo{display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr);gap:clamp(28px,5vw,72px);align-items:start}
.dk-demo-v{position:sticky;top:64px}.dk-demo-host{aspect-ratio:1;width:100%;max-width:400px;border-radius:50%}
.dk-demo-cur{margin:8px 0 0;font-size:13px;color:var(--faint)}.dk-demo-cur b{font-weight:500;color:var(--ink)}
.dk-state{display:grid;gap:4px;width:100%;text-align:left;font:inherit;color:inherit;background:none;border:0;border-left:2px solid var(--rule);padding:12px 0 12px 16px;cursor:pointer;transition:border-color .35s,opacity .35s;opacity:.6}
.dk-state[aria-pressed=true]{border-color:var(--ink);opacity:1}.dk-state:hover{opacity:1}.dk-state:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
.dk-state b{font-weight:500;font-size:15.5px}.dk-state span{font-size:14px;line-height:1.5;color:var(--mut)}
.dk-unavail{margin:22px 0 0;font-size:13.5px;line-height:1.5;color:var(--red)}
/* 04 design examples: one wide, then a pair */
.dk-uses-h{max-width:640px}
.dk-uses{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(22px,2.6vw,36px) clamp(18px,2.2vw,30px);margin-top:clamp(16px,2vw,26px)}
.dk-use{margin:0}.dk-use-wide{grid-column:1/-1}
.dk-use figcaption{display:grid;gap:3px;margin-top:12px}.dk-use figcaption b{font-weight:500;font-size:15px}.dk-use figcaption span{color:var(--mut);font-size:14px;line-height:1.5}
.dk-use figcaption em{font-style:normal;font-size:12px;color:var(--faint)}.dk-use figcaption em a{color:var(--ink)}
.dk-ex{--ex-bg:#f4f2ee;--ex-ink:#1b1b1a;--ex-mut:#6d6c69;position:relative;overflow:hidden;border-radius:12px;background:var(--ex-bg);color:var(--ex-ink);box-shadow:0 0 0 1px rgba(0,0,0,.06),0 20px 44px -30px rgba(0,0,0,.4);aspect-ratio:16/10;display:grid;grid-template-rows:auto 1fr}
.dk-use-wide .dk-ex{aspect-ratio:21/9}
.dk-ex-ink{--ex-bg:#151615;--ex-ink:#f1efea;--ex-mut:#9c9a95}.dk-ex-sand{--ex-bg:#ebe4d8;--ex-ink:#2a241c;--ex-mut:#7b7163}
.dk-ex-nav{display:flex;justify-content:space-between;align-items:center;padding:14px 20px;font-size:11px;letter-spacing:.06em}.dk-ex-nav b{font-weight:600;letter-spacing:.12em}.dk-ex-links{display:flex;gap:16px;color:var(--ex-mut)}
.dk-ex-body{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:12px;padding:0 20px 18px;min-height:0}
.dk-ex-t{display:grid;gap:8px;align-content:center}.dk-ex-t small{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ex-mut)}
.dk-ex-t strong{font:250 clamp(20px,2.4vw,34px)/1.02 var(--font);letter-spacing:-.025em}.dk-use-wide .dk-ex-t strong{font-size:clamp(26px,3.4vw,50px)}
.dk-ex-t p{margin:0;font-size:12px;color:var(--ex-mut)}.dk-ex-t i{justify-self:start;font-style:normal;font-size:11px;padding:7px 12px;border-radius:999px;background:var(--ex-ink);color:var(--ex-bg);margin-top:4px}
.dk-ex-img{height:100%;min-height:0;display:grid;place-items:center}.dk-ex-img img{max-height:100%;width:auto;max-width:100%;aspect-ratio:1;object-fit:cover;border-radius:10px}
.dk-ex-ink .dk-ex-img img{border-radius:50%}
.dk-use-real .dk-ex{aspect-ratio:21/8}.dk-ex-real{display:block}.dk-ex-real img{display:block;width:100%;height:100%;object-fit:cover}
/* 05 facts, 06 actions */
.dk-facts{margin:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 48px}
.dk-f{padding:16px 0;border-top:1px solid var(--rule)}.dk-f dt{font:500 10.5px/1 var(--font);letter-spacing:.14em;text-transform:uppercase;color:var(--faint);margin-bottom:8px}
.dk-f dd{margin:0;font-size:15px;line-height:1.55}.dk-f dd a{color:inherit}
.dk-acts{display:flex;flex-wrap:wrap;gap:10px}
.dk-end{margin:0;padding:26px 16px 36px;text-align:center;font-size:12px;color:var(--faint)}
/* motion: reveal once, quietly */
@media (prefers-reduced-motion:no-preference){.dk:not(.dk-still) .dk-r{opacity:0;transform:translateY(12px);transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .6s cubic-bezier(.2,.7,.2,1)}
  .dk:not(.dk-still) .dk-r.in{opacity:1;transform:none}.dk:not(.dk-still) .dk-state.dk-r.in{opacity:.6}.dk:not(.dk-still) .dk-state.dk-r.in[aria-pressed=true]{opacity:1}}
/* phones, portrait tablets, touch-only: the same display in the page's own scroll */
@media (max-width:760px),(pointer:coarse){
  .dk{padding:24px 12px 72px}
  .dk-mon{border-radius:12px}.dk-screen{height:min(74svh,640px)}
  .dk-chrome{grid-template-columns:auto 1fr;gap:12px;padding:10px 12px}.dk-navi,.dk-rel{display:none}.dk-url{font-size:11px;padding:7px 10px}
  .dk-bar-cur,.dk-hint{display:none}
  .dk-sec{padding:44px 20px}
  .dk-hero,.dk-two,.dk-demo,.dk-facts{grid-template-columns:1fr}.dk-two-l{position:static}
  .dk-cx{grid-template-columns:1fr}.dk-cx-l{position:static}.dk-chatbox{height:min(520px,64svh);min-height:380px}.dk-q{max-width:88%}.dk-a{max-width:100%}
  .dk-demo-v{position:sticky;top:var(--dk-top);z-index:2;display:grid;grid-template-columns:76px minmax(0,1fr);align-items:center;column-gap:14px;box-sizing:border-box;width:calc(100% + 40px);margin:0 -20px;padding:10px 20px;background:color-mix(in srgb,var(--scr) 94%,transparent);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--rule)}
  .dk-demo-host{position:relative;width:76px;height:76px;max-width:none;overflow:hidden}.dk-demo-host canvas{width:100%!important;height:100%!important}.dk-demo-cur{margin:0;font-size:15px}
  .dk-demo{display:flex;flex-direction:column;gap:0}.dk-demo-l{display:contents}.dk-demo-l>.dk-k,.dk-demo-l>.dk-big,.dk-demo-l>.dk-p{order:0}.dk-demo-v{order:1;margin-bottom:8px}.dk-state,.dk-unavail{order:2}
  .dk-uses{grid-template-columns:1fr}.dk-ex,.dk-use-wide .dk-ex{aspect-ratio:auto}.dk-use-real .dk-ex{aspect-ratio:16/10}.dk-ex-img{min-height:150px}.dk-ex-body{padding-bottom:20px}
  .dk-ex-body{grid-template-columns:1.1fr .9fr}
}
`;var Qs=e=>({mount(a,{reduced:o,initial:t}){let d=e(a,t,{reduced:o,interactive:!0});return{show:p=>d.setKind(p),dispose:()=>d.dispose()}}});function Zs(){let e=Us("orb"),a=e.families();return{id:"orb",name:"The Orb",surface:"stone",blocks:[{type:"hero",id:"meet",kicker:"Meet The Orb",statement:"A sphere of glass and light, made to live in your page.",body:["The Orb is a real-time 3D object for websites. It is drawn live in the visitor\u2019s browser \u2014 not a video loop, not a still image \u2014 so it answers every gesture and keeps a slow, natural motion of its own.",`${e.versions()} versions in ${a.length} material families, from clear glass to liquid metal and porcelain, all drawn by one lightweight renderer.`,"Most 3D on the web is a picture you look at. The Orb is an object you touch."],emphasis:!0,media:{src:"./media/products/orb-original.jpg",alt:"The Orb in clear glass",caption:"The Orb \xB7 Clear"}},{type:"capabilities",id:"do",kicker:"Interaction & capabilities",statement:"Ask it what it can do.",lead:"Every answer carries its real status. Only what you can try today is marked available; everything else says plainly that it is still to come.",items:e.capabilities,note:"An illustrated conversation: the questions are examples. Conversational, Agent and Connected cannot be taken yet."},{type:"demo",id:"mat",demo:"sphere",kicker:"Materials & appearance",statement:`${e.versions()} versions in ${a.length} families.`,lead:"Choose a family \u2014 or simply keep scrolling \u2014 and the Orb beside it changes, live. Every family is drawn by the same renderer, so you can compare them side by side before you choose.",tip:"drag to turn",states:a,unavailable:"Shaping your own material, light and movement in Studio is not available yet \u2014 Studio is coming soon."},{type:"uses",id:"use",kicker:"In a real website",statement:"Built into this website.",lead:"The Light Orb is designed around this object: it greets you on the home page, guides you through the site and answers your questions. The opening of this website is available as a template.",items:[{title:"This website",line:"The Orb as host: a quiet greeting, the quotation and the four destinations.",real:{img:"./media/templates/the-light-orb.cover.jpg",alt:"The Light Orb website opening",href:"#/templates/the-light-orb",label:"See the template"}}]},{type:"facts",id:"get",kicker:"What you receive",statement:"Clear terms, nothing implied.",rows:e.delivery()},{type:"actions",id:"next",kicker:"Explore further",statement:"Turn it, ask for the code \u2014 or have a website made around it.",actions:[{act:"request",label:"Request code",primary:!0},{act:"top",label:"Back to The Orb"},{href:"#/products",label:"All products"},{href:"#/design",label:"Custom web design"}]}]}}var mc={"orb-slider":"./media/products/orb-slider.jpg","crystal-controls":"./media/products/crystal-controls.jpg","light-orb":"./media/cards/orb.jpg","voice-orb":"./media/cards/orb.jpg"},el={lens:{title:"Cosmetics \xB7 Berries",line:"In the Cosmetics template the product lens magnifies the labels of the Berries products, so a visitor can read them up close.",real:{img:"./media/templates/berries.cover.jpg",alt:"The Berries website, Cosmetics template",href:"#/beauty/berries",label:"See it in the Cosmetics template"}}},Yr=e=>e.replace(/\.$/,""),vo=e=>e.map(Yr).join(". ")+".";function fc(e,a){let o=uo[e],t=mc[e],d=[{status:"now",ask:`What is ${a}?`,title:"What it is",line:o.is},{status:"now",ask:"What does it do?",title:"Qualities",line:vo(o.qualities)},{status:"now",ask:"Can I make it mine?",title:"Customisation",line:vo(o.custom)},{status:"now",ask:"How do I add it to my site?",title:"Integration",line:vo(o.tech)},...o.limits.map((p,i)=>({status:"note",ask:i?"Anything else?":"Anything I should know?",title:"Good to know",line:Yr(p)+"."}))];return{id:e,name:a,surface:"stone",blocks:[{type:"hero",id:"meet",kicker:`Meet ${a}`,statement:o.is,emphasis:!0,body:[vo(o.qualities.slice(0,2))],media:t?{src:t,alt:a,caption:a}:null},{type:"capabilities",id:"ask",who:a,kicker:"Ask it",statement:"Ask it what it can do.",lead:"Pick a question. Every answer is written in advance from what the piece really does today \u2014 and what it does not.",items:d,note:"An illustrated conversation: the questions are examples, the answers are the product\u2019s facts."},...el[e]?[{type:"uses",id:"use",kicker:"In a real website",statement:"Proven in a real website.",lead:`${a} already works inside one of our own templates.`,items:[el[e]]}]:[],{type:"facts",id:"get",kicker:"What you receive",statement:"Clear terms, nothing implied.",rows:[["Integration",o.tech.map(Yr).join(" \xB7 ")],["Customise",o.custom.map(Yr).join(" \xB7 ")],["Limits",o.limits.map(Yr).join(" \xB7 ")]]},{type:"actions",id:"next",kicker:"Explore further",statement:`Try ${a} again \u2014 or have a website made around it.`,actions:[{act:"top",label:`Back to ${a}`,primary:!0},{href:"#/products",label:"All products"},{href:"#/design",label:"Custom web design"}]}]}}var tl={},Wa=(e,a=e)=>e==="orb"?tl.orb??=Zs():uo[e]?tl[e]??=fc(e,a):null;var He=":root .info-dark.info-dark",al=`
${He}{--ink:#eeefec;--soft:#c3c6c3;--muted:#a3a6a3;--faint:#8b8e8c;--line:rgba(255,255,255,.1);--hair:rgba(255,255,255,.1);--dark-ink:#eeefec;
  color:var(--ink);background:linear-gradient(180deg,#1a1b1c 0%,#141516 55%,#111213 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.08),inset 0 0 0 1px rgba(255,255,255,.06),0 30px 60px -36px rgba(0,0,0,.55);color-scheme:dark}
/* product pages: the column becomes the panel */
${He}.pd-info{padding:clamp(22px,2.4vw,34px);border-radius:24px;align-self:start}
${He} h1,${He} h2{color:var(--ink)}
${He} .kicker,${He} .lbl,${He} .var-line,${He} .facts dt,${He} .acc p,${He} .studio-lock small{color:var(--muted)}
${He} .lede,${He} .facts dd{color:var(--soft)}
${He} a:not(.gb){color:inherit}
${He} .facts,${He} .acc,${He} .facts.ds-facts{border-top-color:var(--line)}
/* buttons: graphite glass with a crisp top rim; the primary is the light one (as in the dark theme) */
${He} .gb:not(.primary){color:var(--ink)!important;background:linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,.04) 55%,rgba(255,255,255,.07))!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.28),inset 0 0 0 1px rgba(255,255,255,.1),0 1px 0 rgba(0,0,0,.6),0 8px 18px -10px rgba(0,0,0,.8)!important}
${He} .gb:not(.primary):hover{background:linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,.06) 55%,rgba(255,255,255,.09))!important}
${He} .gb.primary{color:#141516!important;background:linear-gradient(180deg,#f6f7f5,#e1e3e0)!important;box-shadow:inset 0 1px 1px #fff,0 8px 22px -10px rgba(0,0,0,.7)!important}
${He} .gb::before,${He} .gb::after{display:none}
${He} .gb[disabled]{opacity:.5}
/* versions, environments: the segbar and its single travelling indicator */
${He} .segbar{background:rgba(0,0,0,.35)!important;box-shadow:inset 0 1px 2px rgba(0,0,0,.5),inset 0 0 0 1px rgba(255,255,255,.06)!important}
${He} .segbar .pill{color:var(--muted)}
${He} .segbar .pill[aria-checked=true],${He} .segbar .pill[aria-pressed=true],${He} .segbar .pill.ix-cand,${He} .segbar .pill:hover{color:var(--ink)}
${He} .ix-sel{background:linear-gradient(180deg,rgba(255,255,255,.2),rgba(255,255,255,.07) 55%,rgba(255,255,255,.12));box-shadow:inset 0 1px .5px rgba(255,255,255,.35),inset 0 0 0 .5px rgba(255,255,255,.14),0 6px 14px -8px rgba(0,0,0,.8)}
${He} .ix-sel::after{opacity:calc(.12 + var(--ix-on,0) * .3)}
/* cards inside the panel */
${He} .studio-lock{background:rgba(255,255,255,.05)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)!important;color:var(--ink)}
${He} .free-c{background:rgba(0,0,0,.35)!important;color:#dfe1de;box-shadow:inset 0 0 0 1px rgba(255,255,255,.07)!important}
${He} .gi,${He} input:not([type=range]):not([type=checkbox]):not([type=radio]),${He} textarea,${He} select{color:var(--ink);background:rgba(255,255,255,.06)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)!important;border-color:rgba(255,255,255,.14)}
${He} input::placeholder,${He} textarea::placeholder{color:var(--faint)}
${He} input[type=range],${He} input[type=checkbox]{accent-color:#e9eae8}
${He} :focus-visible{outline-color:#eeefec}
${He} .obj-sw button[aria-pressed=true]{outline-color:#eeefec}
${He} .obj-sw button{box-shadow:0 0 0 1px rgba(255,255,255,.14),inset 0 -3px 6px rgba(0,0,0,.25),inset 0 2px 3px rgba(255,255,255,.5)}
`;var bc="https://thelightorb.com",li=typeof document<"u"&&!!document.querySelector('meta[name="lo-entries"]')&&location.hostname!=="carlatres3.github.io",rl="The Light Orb is a creative digital design studio creating interactive digital products, website templates and custom web experiences.",ol={products:"Products",templates:"Templates",design:"Web Design",about:"About",studio:"Studio",sound:"Sound",changelog:"What\u2019s new"},xc=e=>e.toLowerCase().replace(/\s+/g,"-"),vc=e=>Ga.find(a=>a.id===e)?.line;function il(e){let a=/^#\/([^?]*)(?:\?(.*))?$/.exec(e||"#/");if(!a)return null;let o=a[1].split("/").filter(Boolean),t=new URLSearchParams(a[2]||"");if(!o.length)return a[2]?null:{path:"/",name:"The Light Orb",desc:rl};let[d,p]=o;if(d==="products"&&!p&&t.has("obj")&&[...t.keys()].length===1){let i=kr.find(l=>l.id===t.get("obj"));return i&&{path:`/products/${xc(i.name)}`,name:i.name,desc:i.line}}if(a[2]||o.length>2)return null;if(!p)return ol[d]?{path:`/${d}`,name:ol[d],desc:vc(d)||rl}:null;if(d==="products"){let i=Qr.find(l=>l.id===p)??Rr.find(l=>l.id===p);return i&&{path:`/products/${p}`,name:i.name,desc:i.line}}if(d==="templates"){let i=Et.find(l=>l.id===p);return i&&{path:`/templates/${p}`,name:i.label??i.name,desc:i.line}}return null}function di(e){if(!(!li||!e))for(let a of e.querySelectorAll('a[href^="#/"]')){let o=il(a.getAttribute("href"));o&&(a.dataset.hash=a.getAttribute("href"),a.setAttribute("href",o.path))}}function nl(e){if(!li)return;let a=il(e);if(!a)return;let o=a.path==="/"?"The Light Orb":`${a.name} \xB7 The Light Orb`,t=bc+(a.path==="/"?"/":a.path);document.title=o;let d=(p,i,l)=>{let c=document.querySelector(p);c&&l&&c.setAttribute(i,l)};d('meta[name="description"]',"content",a.desc),d('link[rel="canonical"]',"href",t),d('meta[property="og:url"]',"content",t),d('meta[property="og:title"]',"content",o),d('meta[property="og:description"]',"content",a.desc)}li&&addEventListener("click",e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let a=e.target.closest?.("a[data-hash]");!a||a.target&&a.target!=="_self"||(e.preventDefault(),location.hash!==a.dataset.hash&&(location.hash=a.dataset.hash))});var pa=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function ci(e){let a=[],o=t=>[...t.childNodes].forEach(d=>{if(d.nodeType===3){let p=document.createDocumentFragment();d.textContent.split(/(\s+)/).forEach(i=>{if(!i)return;if(/^\s+$/.test(i)){p.append(" ");return}let l=document.createElement("span");l.className="tm-w";let c=document.createElement("span");c.className="tm-i",c.textContent=i,l.append(c),p.append(l),a.push(l)}),d.replaceWith(p)}else d.nodeType===1&&o(d)});return o(e),a.forEach((t,d)=>t.style.setProperty("--k",d)),a}var sl="aeosnrtlcdmuhgpbfy\xB7\u2014/\u25E6";function ll(e,{duration:a=620,delay:o=0}={}){let t=e.textContent;if(!t.trim()||t.length>40||pa())return;e.setAttribute("aria-label",t);let d=[...t].map((c,f)=>({c,i:f,at:c===" "?0:o+f/t.length*a*.7+Math.random()*a*.3})),p=performance.now(),i=0,l=c=>{let f=c-p,h=!0;e.textContent=d.map(b=>f>=b.at?b.c:(h=!1,f<o?"\u2007":sl[Math.random()*sl.length|0])).join(""),!h&&e.isConnected?i=requestAnimationFrame(l):e.textContent=t};return i=requestAnimationFrame(l),()=>{cancelAnimationFrame(i),e.textContent=t}}function pi(e,a,{ratio:o=.35,margin:t="0px"}={}){if(!("IntersectionObserver"in window))return a(e),()=>{};let d=new IntersectionObserver(p=>{p.some(i=>i.isIntersecting)&&(d.disconnect(),a(e))},{threshold:o,rootMargin:t});return d.observe(e),()=>d.disconnect()}function yo(e,a,{speed:o=1,onParagraph:t=()=>{},onDone:d=()=>{}}={}){let p=document.createElement("div");p.className="tm-sr",p.innerHTML=a.map(w=>`<p>${w.html}</p>`).join(""),p.querySelectorAll("a").forEach(w=>{w.tabIndex=-1});let i=document.createElement("div");i.className="tm-live",i.setAttribute("aria-hidden","true");let l=document.createElement("span");l.className="tm-caret";let c=document.createElement("div");c.className="tm-ghost",c.setAttribute("aria-hidden","true"),c.innerHTML=p.innerHTML,c.querySelectorAll("a").forEach(w=>{w.tabIndex=-1}),e.replaceChildren(p,c,i);let f,h=new Promise(w=>{f=w}),b=0,$=0,K=!1,s=()=>{K||(K=!0,clearTimeout(b),cancelAnimationFrame($),i.innerHTML=a.map(w=>`<p>${w.html}</p>`).join(""),i.lastElementChild?.append(l),l.classList.add("rest"),setTimeout(()=>l.classList.add("gone"),2600),p.remove(),i.removeAttribute("aria-hidden"),i.querySelectorAll("a").forEach(w=>w.removeAttribute("tabindex")),e.classList.add("tm-done"),d(),f())};if(pa())return s(),l.remove(),{skip(){},done:h};let M=a.reduce((w,q)=>w+q.text.length,0),A=[],P=300,F=0;a.forEach((w,q)=>{q&&(P+=q===1?320:220),A.push({at:P,para:q}),(w.runs??[{t:"text",s:w.text}]).forEach(V=>{A.push({at:P,run:V}),[...V.s].forEach((ae,re)=>{let ne=V.s[re+1]??"",de=10*(.6+Math.random()*.8);/[a-z]/i.test(ae)&&/[a-z]/i.test(ne)&&(de*=.8),ae===","&&(de+=80),".?!".includes(ae)&&(de+=150),ae==="\u2014"&&(de+=50),de*=++F>M*.35?.5:1,A.push({at:P,ch:ae}),P+=de})})});let I=null,B=null,N=0,X=0,T=0,E=w=>{if(w.para!==void 0){I=document.createElement("p"),i.append(I),I.append(l),t(w.para);return}if(w.run){if(w.run.t==="a"){let q=document.createElement("a");q.href=w.run.href,q.tabIndex=-1,I.insertBefore(q,l),B=q.appendChild(document.createTextNode(""))}else B=I.insertBefore(document.createTextNode(""),l);return}B.data+=w.ch,T=w.at},C=w=>{if(K)return;X||(X=w);let q=(w-X)*o;for(;N<A.length&&A[N].at<=q;)E(A[N++]);if(l.classList.toggle("rest",q-T>120),N>=A.length){b=setTimeout(s,350);return}$=requestAnimationFrame(C)};l.classList.add("rest"),i.append(l),$=requestAnimationFrame(C);let _=s;return{skip:()=>{cancelAnimationFrame($),_()},done:h}}var dl=`
/* \u2500\u2500 type-motion.js (Creative Experience V2) \u2500\u2500 */
/* The mask clips the bottom edge only (the word rises through it): top and sides are open, so
   tight tracking, overhangs and accents never lose a sliver, during the reveal or after it. The
   bottom edge sits below the descender (padding cancelled by the margin, so layout is unchanged). */
.tm-w{display:inline-block;vertical-align:top;padding-bottom:.26em;margin-bottom:-.26em;clip-path:inset(-1em -.5em 0 -.5em)}
.tm-i{display:inline-block;transform:translateY(135%);transition:transform 1.05s cubic-bezier(.2,.75,.15,1) calc(var(--d,0ms) + var(--k) * 70ms)}
.tm-on .tm-i{transform:none}
.tm-ghost{visibility:hidden}
.tm-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}
.tm-caret{display:inline-block;width:1px;height:1.05em;margin-left:1px;vertical-align:-.16em;background:currentColor;opacity:.85}
.tm-caret.rest{animation:tm-blink 1.06s steps(1) infinite}
.tm-caret.gone{opacity:0;transition:opacity .6s;animation:none}
@keyframes tm-blink{50%{opacity:0}}
@media (prefers-reduced-motion:reduce){.tm-i{transform:none;transition:none}.tm-caret{display:none}}
`;var ul=["Personal Website / Portfolio","Business Website","Online Store","Landing Page","Interactive Experience","Something Else","I\u2019m Not Sure Yet"],yc=["Present a business","Display products","Sell products online","Accept bookings or inquiries","Showcase creative work","Include interactive experiences","Something else","I need advice"],wc=["As soon as possible","Within 1\u20133 months","Flexible","Not sure yet"],Xt={name:100,email:254,idea:5e3,ideaMin:20,design:2e3,refs:2e3,budget:200},hi="lo:inquiry",kc=[["Visual identity","A look for the website, made from your brand, your references and what you love."],["Structure & UX/UI","How the site is organised, how it reads and how it feels to move through."],["Responsive layouts","Compositions designed for phones, tablets and large screens \u2014 not shrunk."],["Interaction & motion","Components, animations and small moments that make it feel alive."],["Online stores","Product catalogues, product presentation and setup, selling online."],["Portfolios & business sites","Creative portfolios, studios, shops, services, landing pages."],["Experimental experiences","Materials, light, sound and 3D, when the idea asks for it."],["Integrations","Other tools the project needs, agreed together."]],Sc=[["Your Idea","Tell me what you want to create, what you like, and what matters to your project."],["The Direction","We define the visual approach, structure, functionality and scope."],["Design & Development","I turn the agreed concept into a fully designed, functional digital experience."],["The Final Experience","The website is reviewed, refined and prepared for launch."]],$a=e=>String(e??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),gl=()=>{try{return JSON.parse(sessionStorage.getItem(hi))??{}}catch{return{}}},$c=e=>{try{sessionStorage.setItem(hi,JSON.stringify(e))}catch{}},Ec=()=>{try{sessionStorage.removeItem(hi)}catch{}},cl=()=>crypto.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,12)}`;function pl(e){let a={};String(e.name??"").trim()?e.name.trim().length>Xt.name&&(a.name=`Please keep your name under ${Xt.name} characters.`):a.name="Please tell me your name.",Ca(String(e.email??""))||(a.email="Please enter a valid email address, so I can reply."),ul.includes(e.type)||(a.type="Choose the option closest to what you have in mind.");let o=String(e.idea??"").trim();o.length<Xt.ideaMin?a.idea="Tell me a little about your idea \u2014 a few sentences are enough.":o.length>Xt.idea&&(a.idea=`Please keep it under ${Xt.idea} characters.`);for(let t of["design","refs","budget"])String(e[t]??"").length>Xt[t]&&(a[t]=`Please keep this under ${Xt[t]} characters.`);return a}var ui=(e,a,o,t)=>a.map((d,p)=>{let i=o==="radio"?t===d:(t??[]).includes(d);return`<label class="ch"><input type="${o}" name="${e}" value="${$a(d)}"${i?" checked":""}${o==="radio"&&e==="type"&&p===0?" required":""}><span>${$a(d)}</span></label>`}).join("");function Lc(e){let a=!!Va;return`<form class="iq" data-iq novalidate aria-describedby="iq-privacy">
    <div class="iq-row2">
      <label class="fl"><span>Name</span><input class="gi" name="name" autocomplete="name" maxlength="${Xt.name}" required aria-required="true" value="${$a(e.name)}"><em class="err" data-err="name" id="e-name"></em></label>
      <label class="fl"><span>Email</span><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" maxlength="${Xt.email}" required aria-required="true" value="${$a(e.email)}"><em class="err" data-err="email" id="e-email"></em></label>
    </div>
    <fieldset class="iq-set" data-set="type"><legend>What are you looking to create?</legend>
      <div class="chs" role="radiogroup" aria-required="true">${ui("type",ul,"radio",e.type)}</div><em class="err" data-err="type" id="e-type"></em></fieldset>
    <label class="fl"><span>Tell me about your idea</span>
      <textarea class="gi iq-ta" name="idea" rows="7" maxlength="${Xt.idea}" required aria-required="true" placeholder="What is it, who is it for, what would make it feel right?">${$a(e.idea)}</textarea>
      <span class="iq-meta"><em class="err" data-err="idea" id="e-idea"></em><small data-count></small></span></label>
    <details class="iq-more" data-more${e.more?" open":""}><summary><span>A little more, if you like</span><small>Optional \xB7 design, references, timing, budget</small></summary>
      <div class="iq-more-b">
        <label class="fl"><span>What kind of design do you like?</span><textarea class="gi" name="design" rows="3" maxlength="${Xt.design}" placeholder="Colours, materials, styles, moods\u2026">${$a(e.design)}</textarea><em class="err" data-err="design"></em></label>
        <label class="fl"><span>Any websites or references you love?</span><textarea class="gi" name="refs" rows="3" maxlength="${Xt.refs}" placeholder="Links, or a few words about them">${$a(e.refs)}</textarea><em class="err" data-err="refs"></em></label>
        <fieldset class="iq-set"><legend>What should your website do?</legend><div class="chs">${ui("functions",yc,"checkbox",e.functions)}</div></fieldset>
        <fieldset class="iq-set"><legend>When would you like to launch?</legend><div class="chs" role="radiogroup">${ui("timeline",wc,"radio",e.timeline)}</div></fieldset>
        <label class="fl"><span>Do you have a budget in mind? <i class="opt">Optional \u2014 a rough idea is fine</i></span><input class="gi" name="budget" maxlength="${Xt.budget}" value="${$a(e.budget)}"><em class="err" data-err="budget"></em></label>
      </div></details>
    <label class="iq-hp" aria-hidden="true">Leave this empty<input name="website" tabindex="-1" autocomplete="off"></label>
    <div class="iq-send"><button class="gb primary" type="submit" data-send${a?"":" disabled"}><span>Send My Project</span></button>
      <p class="iq-status" data-status role="status" aria-live="polite">${a?"":"Project inquiries open soon \u2014 nothing typed here is sent yet."}</p></div>
    <p class="note" id="iq-privacy">What you write here is sent by email to Carla only, to reply to you and talk about your project. It is not added to any mailing list. See <a href="#/privacy">privacy</a>.</p>
  </form>`}var Tc=`<div class="iq-done" role="status" tabindex="-1" data-done><span class="iq-done-orb" aria-hidden="true"></span>
  <p class="kicker">Sent</p><h3>Your idea is on its way.</h3><p>Thank you for sharing it \u2014 I\u2019ll be in touch soon.</p>
  <div class="acts eq"><a class="tl" href="#/templates">Explore Templates</a><a class="tl" href="#/products">Discover Products</a></div></div>`;function Mc(e,{audio:a}){let o=e.querySelector("[data-iq]");if(!o)return;let t=o.querySelector("[data-status]"),d=o.querySelector("[data-send]"),p=o.querySelector("[data-count]"),i=o.elements.idea,l=Date.now(),c=gl().key||cl(),f=!1,h=()=>({name:o.elements.name.value,email:o.elements.email.value,type:o.querySelector("[name=type]:checked")?.value??"",idea:i.value,design:o.elements.design.value,refs:o.elements.refs.value,functions:[...o.querySelectorAll("[name=functions]:checked")].map(s=>s.value),timeline:o.querySelector("[name=timeline]:checked")?.value??"",budget:o.elements.budget.value}),b=()=>$c({...h(),key:c,more:o.querySelector("[data-more]").open}),$=()=>{let s=i.value.trim().length;p.textContent=s?`${s} / ${Xt.idea}`:""},K=s=>{o.querySelectorAll("[data-err]").forEach(M=>{let A=M.dataset.err,P=s[A]??"";M.textContent=P;let F=A==="type"?o.querySelector("[data-set=type]"):o.elements[A];F&&(F.toggleAttribute("aria-invalid",!!P),F.setAttribute&&(P&&M.id?F.setAttribute("aria-describedby",M.id):F.removeAttribute?.("aria-describedby")))})};$(),o.addEventListener("input",s=>{b(),s.target===i&&$();let M=s.target.name,A=o.querySelector(`[data-err="${M}"]`);if(A?.textContent&&!pl(h())[M]){A.textContent="";let P=M==="type"?o.querySelector("[data-set=type]"):s.target;P.removeAttribute("aria-invalid"),P.removeAttribute("aria-describedby")}}),o.querySelector("[data-more]").addEventListener("toggle",s=>{b(),a?.sfx(s.target.open?"open":"close")}),o.addEventListener("submit",async s=>{if(s.preventDefault(),f||!Va)return;let M=h(),A=pl(M);K(A);let P=Object.keys(A)[0];if(P){t.textContent="A few details are missing \u2014 see the highlighted fields.",(P==="type"?o.querySelector("[name=type]"):o.elements[P])?.focus(),["design","refs","budget"].includes(P)&&(o.querySelector("[data-more]").open=!0);return}f=!0,d.disabled=!0,d.setAttribute("aria-busy","true"),o.setAttribute("aria-busy","true"),t.textContent="Sending\u2026";let F=!1,I="";try{let B=await fetch(Va,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({...M,website:o.elements.website.value,key:c,elapsed:Date.now()-l,lang:(navigator.language||"en").slice(0,5)})}),N=await B.json().catch(()=>({}));F=B.ok&&N?.ok===!0,F||(I=B.status===429?"Your message was not sent: too many tries for now. Please wait a little and try again \u2014 everything you wrote is still here.":B.status===400&&N?.field?"Your message was not sent: please check the highlighted field.":"Your message was not sent. Please try again in a moment, or write to hello@thelightorb.com \u2014 everything you wrote is still here."),!F&&N?.field&&K({[N.field]:"Please check this field."})}catch{I="Your message was not sent \u2014 the connection failed. Please try again; everything you wrote is still here."}if(f=!1,d.removeAttribute("aria-busy"),o.removeAttribute("aria-busy"),F){Ec(),c=cl(),Ge("inquiry_sent",{type:M.type}),a?.sfx("confirm");let B=document.createElement("div");B.innerHTML=Tc;let N=B.firstElementChild;o.replaceWith(N),N.focus({preventScroll:!0}),N.scrollIntoView({block:"center",behavior:pa()?"auto":"smooth"});return}d.disabled=!1,t.textContent=I,t.setAttribute("role","alert"),Ge("inquiry_failed")})}function qc(e,a){let o=a.querySelector(".hx-h");if(ci(o),a.querySelectorAll("[data-decrypt]").forEach((p,i)=>ll(p,{delay:120+i*900})),requestAnimationFrame(()=>requestAnimationFrame(()=>a.classList.add("tm-on"))),pa())return;let t=0,d=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>{let p=a.getBoundingClientRect(),i=Math.min(1,Math.max(0,-p.top/Math.max(1,p.height)));a.style.setProperty("--sp",i.toFixed(3))})};e.addEventListener("scroll",d,{passive:!0})}var Ac=[[".wd-custom",".wd-custom-t",".wd-custom-t>p",".wd-list>li",".wd-poss>.kicker, .wd-poss>.note"],[".wd-proc",null,null,null,null],[".wd-proof",null,".wd-proof-l",null,".wd-pc"],[".wd-quote",".wd-quote>div:first-child",".wd-quote>div:last-child>p",null,null],[".wd-form",".wd-form-t",".wd-form-t>p:not(.kicker)",null,".wd-form-b, .iq>*"]];function Cc(e){if(pa()||!("IntersectionObserver"in window))return;let a=e.querySelector(".wd");if(!a)return;a.classList.add("mo-on");let o=(l,c)=>setTimeout(()=>{l.classList.remove("mo-pre","mo-in","mo-row"),l.style.removeProperty("--md")},c),t=(l,c)=>{l.classList.add("mo-pre"),l.style.setProperty("--md",`${Math.round(c)}ms`)},d=(l,c=1500)=>{l.classList.add("mo-in"),o(l,c+(parseFloat(l.style.getPropertyValue("--md"))||0))},p=new IntersectionObserver(l=>l.forEach(c=>{c.isIntersecting&&(p.unobserve(c.target),c.target.__mo?.())}),{threshold:.15,rootMargin:"0px 0px -8% 0px"}),i=(l,c)=>{l.__mo=c,p.observe(l)};for(let[l,c,f,h,b]of Ac){let $=e.querySelector(l);if(!$)continue;let K=c?$.querySelector(c):$,s=K.querySelector(":scope>.kicker"),M=K.querySelector(":scope>h2"),A=M?ci(M):[],P=f?[...$.querySelectorAll(f)]:[];s&&t(s,0),M&&(M.classList.add("mo-h"),M.style.setProperty("--d","180ms"));let F=180+Math.min(A.length,9)*70+260;P.forEach((B,N)=>t(B,F+N*120));let I=b?[...$.querySelectorAll(b)]:[];if(I.forEach((B,N)=>t(B,(P.length?F+140:220)+Math.min(N,8)*95)),i(K,()=>{s&&d(s),M&&(M.classList.add("tm-on"),setTimeout(()=>{M.classList.remove("mo-h")},F+1200)),P.forEach(B=>d(B)),I.length&&K===$&&I.forEach(B=>d(B,1700))}),I.length&&K!==$){let B=I[0].closest(".wd-poss, .wd-form-b")??I[0];i(B,()=>I.forEach(N=>d(N,1700)))}h&&$.querySelectorAll(h).forEach(B=>{B.classList.add("mo-row"),t(B,0),i(B,()=>d(B,1300))})}jc(e),zc(e)}function jc(e){matchMedia("(hover:hover) and (pointer:fine)").matches&&e.querySelectorAll(".wd-pc").forEach(a=>{let o=0,t=.5,d=.5,p=()=>{o=0,a.style.setProperty("--tx",(t-.5).toFixed(3)),a.style.setProperty("--ty",(d-.5).toFixed(3))};a.addEventListener("pointermove",i=>{if(i.pointerType!=="mouse")return;let l=a.getBoundingClientRect();t=(i.clientX-l.left)/l.width,d=(i.clientY-l.top)/l.height,a.classList.add("mo-tilt"),o||(o=requestAnimationFrame(p))}),a.addEventListener("pointerleave",()=>{cancelAnimationFrame(o),o=0,a.classList.remove("mo-tilt"),a.style.removeProperty("--tx"),a.style.removeProperty("--ty")})})}function zc(e){matchMedia("(hover:hover) and (pointer:fine)").matches&&e.querySelectorAll(".wd .acts .gb.primary").forEach(a=>{let o=0,t=0,d=0,p=()=>{o=0,a.style.setProperty("--mx",`${t.toFixed(1)}px`),a.style.setProperty("--my",`${d.toFixed(1)}px`)};a.addEventListener("pointermove",i=>{let l=a.getBoundingClientRect();t=((i.clientX-l.left)/l.width-.5)*8,d=((i.clientY-l.top)/l.height-.5)*6,o||(o=requestAnimationFrame(p))}),a.addEventListener("pointerleave",()=>{cancelAnimationFrame(o),o=0,a.style.removeProperty("--mx"),a.style.removeProperty("--my")})})}function Oc(e){let a=[...e.querySelectorAll(".wd-step")],o=e.querySelector(".wd-path"),t=e.querySelector(".wd-steps-w"),d=0,p=()=>{let c=getComputedStyle(e.querySelector(".wd-steps")).gridTemplateColumns.split(" ").length===1,f=e.querySelector(".wd-steps"),h=s=>{let M=s.querySelector(".wd-bead");return[f.offsetLeft+s.offsetLeft+M.offsetLeft,f.offsetTop+s.offsetTop+M.offsetTop]},b=a.map(h),$=b.map(s=>s[c?1:0]),K=$[$.length-1]-$[0];o.style.left=`${b[0][0]+9}px`,o.style.top=`${b[0][1]+9}px`,o.style.setProperty("--len",`${K}px`),o.style.setProperty("--to",String(K?($[d]-$[0])/K:0))},i=c=>{d=c,a.forEach((f,h)=>{f.classList.toggle("on",h===c),f.classList.toggle("past",h<c),h===c?f.setAttribute("aria-current","step"):f.removeAttribute("aria-current")}),p(),pa()||(o.classList.remove("glint"),o.offsetWidth,o.classList.add("glint"))};if(a.forEach((c,f)=>{c.addEventListener("pointerenter",h=>{h.pointerType==="mouse"&&e.classList.contains("in")&&i(f)}),c.addEventListener("focus",()=>i(f)),c.addEventListener("click",()=>i(f))}),new ResizeObserver(()=>p()).observe(t),pa()){e.classList.add("in"),i(0);return}e.classList.add("pre"),pi(e,()=>{e.classList.add("in"),setTimeout(()=>i(0),1100)},{ratio:.25})}function hl(e,a,o={}){let t=gl();e.innerHTML=`
    <article class="wd">
      <section class="wd-hero hx" aria-labelledby="wd-h">
        <p class="kicker hx-k"><span data-decrypt>Web Design</span></p>
        <h1 id="wd-h" class="hx-h"><span class="hx-l hx-a">A website</span> <span class="hx-l hx-b">that feels like</span> <span class="hx-l hx-c"><em>yours.</em></span></h1>
        <p class="hx-note" aria-hidden="true"><span data-decrypt>Designed &amp; developed</span><span data-decrypt>one project at a time</span></p>
        <div class="hx-foot">
          <p class="lede">Your ideas, your vision, your identity. I design and develop custom websites, built around what makes your project different.</p>
          <div class="acts"><button class="gb primary" type="button" data-to-form>Start a Project</button><a class="tl" href="#wd-proof" data-to-proof>See what I build <span aria-hidden="true">\u2192</span></a></div>
        </div>
      </section>

      <section class="wd-custom" aria-labelledby="wd-c">
        <div class="wd-custom-t">
          <p class="kicker">Custom</p>
          <h2 id="wd-c">Not just a template. Something entirely yours.</h2>
          <p>The templates on this site are ready to explore. But you don\u2019t have to start from one: I can design a website around you \u2014 your content, your products, your brand, the interactions you imagine and what the site needs to do.</p>
          <p>Both sides are part of the work: the visual design, and the development that makes it real, responsive and ready to use.</p>
        </div>
        <div class="wd-poss"><p class="kicker">What it can include</p>
          <ul class="wd-list">${kc.map(([p,i])=>`<li><b>${p}</b><span>${i}</span></li>`).join("")}</ul>
          <p class="note">Every project is different; what is included is agreed together, one project at a time.</p></div>
      </section>

      <section class="wd-proc" aria-labelledby="wd-p">
        <p class="kicker">Working together</p><h2 id="wd-p">From an idea to a finished website.</h2>
        <div class="wd-steps-w"><span class="wd-path" aria-hidden="true"><i></i></span><ol class="wd-steps">${Sc.map(([p,i],l)=>`<li class="wd-step" tabindex="0" style="--i:${l}"><span class="wd-bead" aria-hidden="true"></span><span class="wd-n">${String(l+1).padStart(2,"0")}</span><h3>${p}</h3><p>${i}</p></li>`).join("")}</ol></div>
      </section>

      <section class="wd-proof" id="wd-proof" aria-labelledby="wd-pr">
        <p class="kicker">Made here</p><h2 id="wd-pr">The work speaks in materials.</h2>
        <p class="wd-proof-l">Every piece and template on this site \u2014 the interactive objects, the complete websites, the way each one answers your hand \u2014 was designed and built by me, from the first sketch to the last line of code. It is the clearest description of the custom websites I make for others: try them.</p>
        <div class="wd-proof-g">
          <a class="wd-pc glass" href="#/products"><span class="wd-pc-k">Pieces</span><b>Products</b><span>Interactive pieces for websites \u2014 glass, light, motion and sound \u2014 each one live on its own page.</span><i>Explore \u2192</i></a>
          <a class="wd-pc glass" href="#/templates"><span class="wd-pc-k">Composition</span><b>Templates</b><span>Complete websites, from a skincare brand to an online shop, each with a live preview on desktop and phone.</span><i>Browse \u2192</i></a>
          <a class="wd-pc glass" href="#/studio"><span class="wd-pc-k">Tool</span><b>Studio</b><span>A space to customise a piece \u2014 its light, material and movement \u2014 and export your own version.</span><i>Coming soon \u2192</i></a>
        </div>
      </section>

      <section class="wd-quote" aria-labelledby="wd-q">
        <div><p class="kicker">Investment</p><h2 id="wd-q">Quoted for each project.</h2></div>
        <div><p>There are no fixed packages: a one-page invitation and an online store are different projects. After a first conversation about what the site needs to do, its pages and your timing, you receive a quote for that project.</p>
          <p class="note">Mentioning a budget in the form is optional, and helps shape the proposal.</p></div>
      </section>

      <section class="wd-form" id="wd-inquiry" aria-labelledby="wd-f" tabindex="-1">
        <div class="wd-form-t"><p class="kicker">Start a project</p><h2 id="wd-f">Tell me what you\u2019re imagining.</h2>
          <p>Have something in mind? Tell me about your idea, the kind of website you\u2019d love to create, and anything that inspires you.</p>
          <p class="note">Four things are needed; everything else is optional. I read every message personally.</p>
          ${Ii?'<p class="note">Prefer email? Write to <a href="mailto:hello@thelightorb.com">hello@thelightorb.com</a>.</p>':'<p class="iq-pending" role="note"><b>Sending is being connected.</b> Until it is confirmed, the form only says \u201Csent\u201D when the message has really been delivered. You can also write directly to <a href="mailto:hello@thelightorb.com">hello@thelightorb.com</a>.</p>'}</div>
        <div class="wd-form-b glass">${Lc(t)}</div>
      </section>
    </article>${a.footer()}`;let d=(p=!0)=>{let i=e.querySelector("#wd-inquiry"),l=matchMedia("(pointer:coarse)").matches,c=p&&!l&&!pa();e.scrollTo({top:e.scrollTop+i.getBoundingClientRect().top-96,behavior:c?"smooth":"instant"}),setTimeout(()=>{i.isConnected&&i.querySelector("[name=name]")?.focus({preventScroll:!l})},c?600:0)};e.querySelector("[data-to-proof]")?.addEventListener("click",p=>{p.preventDefault();let i=e.querySelector("#wd-proof");e.scrollTo({top:e.scrollTop+i.getBoundingClientRect().top-96,behavior:pa()?"auto":"smooth"})}),e.querySelector("[data-to-form]").addEventListener("click",()=>{a.audio?.sfx("select"),Ge("inquiry_start"),d()}),Mc(e,a),qc(e,e.querySelector(".hx")),Oc(e.querySelector(".wd-proc")),Cc(e),o.to==="inquiry"&&requestAnimationFrame(()=>requestAnimationFrame(()=>d(!1)))}var wo=[[{t:"text",s:"Hi there,"}],[{t:"text",s:"I\u2019m Carla, a web designer and developer creating digital experiences that go beyond traditional layouts."}],[{t:"text",s:"I\u2019m drawn to design, movement, materials and interaction \u2014 to the way they can change how a website feels in your hands."}],[{t:"text",s:"The Light Orb is my creative digital design studio, where I develop my own ideas: the digital pieces in "},{t:"a",s:"Products",href:"#/products"},{t:"text",s:", and the interactive "},{t:"a",s:"Templates",href:"#/templates"},{t:"text",s:"."}],[{t:"text",s:"I also design and build custom websites for people and brands who want something that feels genuinely their own."}],[{t:"text",s:"\u2014 Carla"}]].map(e=>({runs:e,text:e.map(a=>a.s).join(""),html:e.map(a=>a.t==="a"?`<a href="${a.href}">${$a(a.s)}</a>`:$a(a.s)).join("")})),gi=!1;function ml(e,a){let o="";try{o=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Lisbon",hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{}e.innerHTML=`
    <article class="ab nt">
      <aside class="nt-meta" aria-label="About the author">
        <p class="nt-k">A note from</p>
        <p class="nt-name">Carla Tres</p>
        <p>Lisbon, Portugal</p>
        <p>Creative Web Designer &amp; Developer</p>
        ${o?`<p class="nt-time"><span class="nt-dot" aria-hidden="true"></span>${o} in Lisbon</p>`:""}
      </aside>
      <div class="nt-main">
        <p class="kicker">About</p>
        <h1>Behind the work.</h1>
        <div class="nt-body" data-note></div>
        <button class="tl nt-skip" type="button" data-skip>Read it all now</button>
        <div class="acts nt-acts"><a class="gb primary" href="#/design?to=inquiry">Let\u2019s Create Something</a><a class="tl" href="#/design">About Web Design <span aria-hidden="true">\u2192</span></a></div>
      </div>
    </article>${a.footer()}`;let t=e.querySelector(".nt"),d=e.querySelector("[data-note]"),p=e.querySelector("[data-skip]"),i=()=>{p.hidden=!0,t.classList.add("acts-in"),d.querySelectorAll(".tm-live a").forEach(h=>h.removeAttribute("tabindex"))};if(gi||pa()){yo(d,wo.map(h=>({...h})),{}).skip(),d.querySelector(".tm-caret")?.remove(),i();return}d.innerHTML=`<div class="tm-sr">${wo.map(h=>`<p>${h.html.replace(/<a /g,'<a tabindex="-1" ')}</p>`).join("")}</div>`;let l=null,c=pi(d,()=>{gi=!0,l=yo(d,wo,{onParagraph:h=>{h===2&&t.classList.add("acts-in")},onDone:i})},{ratio:.1});p.addEventListener("click",()=>{if(a.audio?.sfx?.("select"),l){l.skip();return}c(),gi=!0,yo(d,wo,{onDone:i}).skip()}),d.addEventListener("click",()=>{l&&!d.classList.contains("tm-done")&&l.skip()});let f=h=>{if(!t.isConnected){removeEventListener("keydown",f);return}l&&!d.classList.contains("tm-done")&&!h.metaKey&&!h.ctrlKey&&l.skip()};addEventListener("keydown",f)}var fl='<span class="wdm" aria-hidden="true"><span class="wdm-l">wd</span><em>Web Design</em></span>';if(typeof document<"u"&&!pa()){let e=0,a=null;document.addEventListener("pointermove",o=>{if(o.pointerType!=="mouse")return;let t=o.target.closest?.(".dg-design");if(!t){a&&(a.style.removeProperty("--mx"),a.style.removeProperty("--my"),a=null);return}a=t,cancelAnimationFrame(e),e=requestAnimationFrame(()=>{let d=t.getBoundingClientRect();t.style.setProperty("--mx",((o.clientX-d.left)/d.width-.5).toFixed(3)),t.style.setProperty("--my",((o.clientY-d.top)/d.height-.5).toFixed(3))})},{passive:!0})}var bl=`
/* \u2500\u2500 Web Design \xB7 About (2026-10-21) \u2014 same tokens, glass and type as the rest \u2500\u2500 */
.wd,.ab{padding:110px clamp(16px,4vw,56px) 40px;max-width:1240px;margin:0 auto}
.wd h1,.ab h1{margin:0 0 18px;font:200 clamp(34px,4vw,54px)/1.06 var(--font);letter-spacing:-.025em}
.wd h2{margin:0 0 16px;font:250 clamp(25px,2.4vw,34px)/1.15 var(--font);letter-spacing:-.015em;max-width:24ch}
.wd p,.ab p{line-height:1.6}
.wd .acts,.ab .acts{display:flex;flex-wrap:wrap;align-items:center;gap:14px 22px;margin-top:26px}
.wd .tl:hover,.ab .tl:hover{color:var(--ink)}
.wd section{margin-bottom:clamp(90px,11vw,150px)}
/* hero (V2): the headline is the visual \u2014 no mockup. Twelve columns, asymmetric. */
.hx{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(12px,2vw,28px);align-content:center;min-height:min(780px,calc(100svh - 130px))}
.hx-k{grid-column:1/-1;margin:0 0 clamp(18px,3vh,34px)}
.wd .hx-h{grid-column:1/-1;margin:0;font:200 clamp(38px,8.4vw,132px)/.96 var(--font);letter-spacing:-.048em;color:var(--ink)}
.hx-l{display:block;will-change:translate}
.hx-a{translate:calc(var(--sp,0) * -36px) 0}
.hx-b{padding-left:17%;translate:calc(var(--sp,0) * 64px) 0;transform:translateX(-2.2vw);transition:transform 1.5s cubic-bezier(.2,.7,.1,1) .75s}
.hx-c{text-align:right;translate:calc(var(--sp,0) * -20px) calc(var(--sp,0) * -26px)}
.hx-c em{display:inline-block;font-style:normal;font-weight:300;transform-origin:70% 80%;transform:scale(.9);letter-spacing:.01em;
  transition:transform 1.7s cubic-bezier(.16,.8,.12,1) 1s,letter-spacing 1.7s cubic-bezier(.16,.8,.12,1) 1s}
.hx-c .tm-i{--d:260ms}
.tm-on .hx-b{transform:none}.tm-on .hx-c em{transform:none;letter-spacing:-.05em}
.hx-note{grid-column:1/span 4;align-self:start;display:grid;gap:4px;margin:clamp(26px,5vh,54px) 0 0;padding-top:14px;position:relative;font:500 11px/1.4 var(--font);letter-spacing:.14em;text-transform:uppercase;color:var(--faint)}
.hx-note::before{content:"";position:absolute;top:0;left:0;width:56px;height:1px;background:var(--ink);opacity:.4;transform-origin:left;transform:scaleX(0);transition:transform 1.2s cubic-bezier(.2,.7,.1,1) 1.1s}
.tm-on .hx-note::before{transform:none}
.hx-foot{grid-column:7/-1;margin-top:clamp(26px,5vh,54px);opacity:0;transform:translateY(10px);transition:opacity 1s ease 1.35s,transform 1.2s cubic-bezier(.2,.7,.1,1) 1.35s}
.tm-on .hx-foot{opacity:1;transform:none}
.hx-foot .lede{max-width:40ch;margin:0;color:var(--muted);font-size:clamp(15.5px,1.2vw,17.5px)}
.hx-foot .acts{transition-delay:1.6s}
/* custom: text and an index of possibilities */
.wd-custom{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(28px,6vw,90px);align-items:start}
.wd-custom-t p{max-width:48ch;color:var(--muted)}
.wd-list{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}
.wd-list li{display:grid;grid-template-columns:minmax(120px,.8fr) 1.4fr;gap:16px;padding:14px 0;border-bottom:1px solid var(--line);font-size:14.5px;transition:padding .35s var(--ease)}
.wd-list b{font-weight:500}.wd-list span{color:var(--muted);line-height:1.5}
.wd-list li:hover{padding-left:8px}
/* process (V2): a path that is walked \u2014 the line draws to the active point */
.wd-steps-w{position:relative;margin-top:44px}
.wd-steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:28px;position:relative}
.wd-path{position:absolute;left:9px;top:9px;height:1px;width:var(--len,0px);background:var(--line);transform-origin:0 0;transform:scaleX(0);transition:transform 1.3s cubic-bezier(.3,.6,.1,1) .35s}
.wd-path i{position:absolute;inset:0;background:var(--ink);opacity:.55;transform-origin:0 0;transform:scaleX(var(--to,0));transition:transform 1.1s cubic-bezier(.3,.6,.1,1);overflow:hidden}
.wd-path i::after{content:"";position:absolute;top:-1px;bottom:-1px;width:80px;left:-80px;background:linear-gradient(90deg,transparent,#fff,transparent);opacity:0}
.wd-path.glint i::after{animation:wd-glint 1.1s cubic-bezier(.4,0,.2,1)}
@keyframes wd-glint{0%{left:-80px;opacity:0}20%{opacity:.9}100%{left:100%;opacity:0}}
.wd-proc.in .wd-path,.wd-proc:not(.pre) .wd-path{transform:none}
.wd-step{position:relative;padding-top:38px;outline:none;cursor:default;-webkit-tap-highlight-color:transparent}
.wd-bead{position:absolute;left:0;top:0;width:19px;height:19px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#e9ebe9 55%,#cdd1ce);box-shadow:inset 0 1px 1px #fff,0 0 0 1px rgba(38,40,39,.1),0 4px 10px -4px rgba(38,40,39,.3);transition:transform .7s cubic-bezier(.2,.8,.2,1),box-shadow .7s ease,background .7s ease}
.wd-bead::after{content:"";position:absolute;inset:3px 5px auto 4px;height:5px;border-radius:50%;background:linear-gradient(180deg,rgba(255,255,255,.95),rgba(255,255,255,0));opacity:.6;transition:transform .7s cubic-bezier(.2,.8,.2,1),opacity .7s}
.wd-step.past .wd-bead{background:radial-gradient(circle at 35% 30%,#fff,#dfe2df 60%,#c4c8c5)}
.wd-step.on .wd-bead{transform:scale(1.22);box-shadow:inset 0 1px 1px #fff,inset 0 -3px 5px rgba(140,146,142,.35),0 0 0 1px rgba(38,40,39,.16),0 0 22px 3px rgba(255,255,255,.95),0 8px 16px -6px rgba(38,40,39,.35)}
.wd-step.on .wd-bead::after{transform:translate(2px,1px);opacity:1}
.wd-step:focus-visible .wd-bead{outline:2px solid var(--ink);outline-offset:4px}
.wd-n{display:inline-block;font:500 12px/1 var(--mono);color:var(--faint);letter-spacing:.04em;transform-origin:0 100%;transition:color .5s,transform .7s cubic-bezier(.2,.8,.2,1)}
.wd-step.on .wd-n{color:var(--ink);transform:scale(1.25)}
.wd-step h3{margin:12px 0 8px;font:350 18px/1.25 var(--font);transition:font-weight .5s}
.wd-step.on h3{font-weight:450}
.wd-step p{margin:0;font-size:14.5px;color:var(--muted);max-width:30ch;transition:color .5s}
.wd-step.on p{color:var(--ink)}
/* entrance: label, headline, line, then each step */
.wd-proc.pre .wd-step{opacity:0;transform:translateY(12px)}
.wd-proc .wd-step{transition:opacity .9s ease,transform 1s cubic-bezier(.2,.7,.1,1)}
.wd-proc .wd-step{transition-delay:calc(.75s + var(--i) * .2s)}
.wd-proc.in .wd-step{opacity:1;transform:none}
/* a quiet pointer to the work already here */
/* inquiry */
.wd-form{display:grid;grid-template-columns:minmax(0,.75fr) minmax(0,1.25fr);gap:clamp(24px,5vw,70px);align-items:start;outline:none}
.wd-form-t{position:sticky;top:110px}.wd-form-t>p:not(.kicker):not(.note){color:var(--muted);max-width:38ch}
.wd-form-b{padding:clamp(20px,3vw,36px);border-radius:26px}
.iq{display:grid;gap:22px;position:relative;z-index:1}
.iq-row2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.iq .fl>span:first-child,.iq legend{font:500 13.5px/1.3 var(--font);color:var(--ink)}
.iq .gi{width:100%;box-sizing:border-box;font-size:15px;transition:box-shadow .2s var(--ease),background .2s}
.iq textarea.gi{height:auto;min-height:96px;padding:12px 14px;line-height:1.55;resize:vertical}
.iq .iq-ta{min-height:170px}
.iq .gi:focus{outline:none;box-shadow:inset 0 0 0 1.5px var(--ink),0 0 0 5px rgba(38,40,39,.06)}
.iq .gi[aria-invalid]{box-shadow:inset 0 0 0 1.5px #9b4a3f}
.iq-set{border:0;margin:0;padding:0;min-width:0}.iq-set legend{padding:0;margin-bottom:10px}
.iq-set[aria-invalid] .ch span{box-shadow:inset 0 0 0 1px rgba(155,74,63,.55)}
.chs{display:flex;flex-wrap:wrap;gap:8px}
.ch{position:relative;cursor:pointer}
.ch input{position:absolute;opacity:0;inset:0;margin:0;cursor:pointer}
.ch span{display:inline-flex;align-items:center;min-height:36px;padding:0 14px;border-radius:999px;font-size:13.5px;color:var(--muted);background:rgba(255,255,255,.5);box-shadow:inset 0 0 0 1px rgba(38,40,39,.12);transition:background .2s,color .2s,box-shadow .2s}
.ch:hover span{color:var(--ink);box-shadow:inset 0 0 0 1px rgba(38,40,39,.24)}
.ch input:checked+span{color:var(--ink);background:linear-gradient(180deg,#fff,#f1f2f0);box-shadow:inset 0 0 0 1.5px var(--ink),inset 0 2px 1px #fff,0 4px 10px -7px rgba(38,40,39,.4)}
.ch input:focus-visible+span{outline:2px solid var(--ink);outline-offset:3px}
.err{font-style:normal;font-size:12.5px;color:#9b4a3f;min-height:0}.err:empty{display:none}
.iq-meta{display:flex;justify-content:space-between;gap:10px}.iq-meta small{margin-left:auto;font-size:12px;color:var(--faint)}
.iq-more{border-top:1px solid var(--line);padding-top:16px}
.iq-more summary{cursor:pointer;list-style:none;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 12px;font:500 14px/1.3 var(--font)}
.iq-more summary::-webkit-details-marker{display:none}
.iq-more summary::before{content:"+";display:inline-grid;place-items:center;width:22px;height:22px;border-radius:50%;box-shadow:inset 0 0 0 1px rgba(38,40,39,.2);font-weight:300;transition:transform .35s var(--ease)}
.iq-more[open] summary::before{transform:rotate(45deg)}
.iq-more summary small{font-weight:400;color:var(--faint);font-size:12.5px}
.iq-more summary:focus-visible{outline:2px solid var(--ink);outline-offset:4px;border-radius:6px}
.iq-more-b{display:grid;gap:22px;padding-top:20px}
.iq-more[open] .iq-more-b{animation:iqin .45s var(--ease)}
@keyframes iqin{from{opacity:0;transform:translateY(-6px)}}
.iq-hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.iq-send{display:flex;flex-wrap:wrap;align-items:center;gap:12px 18px}
.iq-status{margin:0;font-size:13.5px;color:var(--muted);flex:1;min-width:200px}
.iq-status[role=alert]{color:#9b4a3f}
.iq-done{padding:clamp(8px,2vw,20px);border-radius:24px;text-align:left;outline:none}
.iq-done h3{margin:0 0 8px;font:250 26px/1.2 var(--font)}.iq-done p{color:var(--muted);margin:0}
.iq-done-orb{display:block;width:44px;height:44px;margin-bottom:20px;border-radius:50%;background:radial-gradient(circle at 40% 64%,#fff 0 14%,transparent 46%),radial-gradient(circle at 35% 28%,#fff,#dfe2df 55%,#bfc3c0);box-shadow:inset 0 -4px 8px rgba(120,126,122,.3),0 0 30px 6px rgba(255,255,255,.8);animation:iqglow 2.8s var(--ease) infinite alternate}
@keyframes iqglow{to{box-shadow:inset 0 -4px 8px rgba(120,126,122,.3),0 0 44px 12px rgba(255,255,255,.95)}}
/* about (V2): a note written live \u2014 metadata, a thin rule, the writing */
.nt{display:grid;grid-template-columns:minmax(150px,220px) minmax(0,1fr);gap:clamp(24px,5vw,80px);align-items:start;min-height:calc(100svh - 220px);padding-top:clamp(120px,18vh,180px)}
.nt-meta{position:sticky;top:120px;font-size:13px;color:var(--muted);padding-top:6px}
.nt-meta p{margin:0 0 3px;line-height:1.45}
.nt-k{font:500 10.5px/1 var(--font)!important;letter-spacing:.16em;text-transform:uppercase;color:var(--faint);margin-bottom:14px!important}
.nt-name{font-size:15px;color:var(--ink)}
.nt-time{margin-top:18px!important;font-variant-numeric:tabular-nums;color:var(--faint);display:flex;align-items:center;gap:8px}
.nt-dot{width:5px;height:5px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#bfc3c0);box-shadow:0 0 0 1px rgba(38,40,39,.12)}
.nt-main{border-left:1px solid var(--line);padding-left:clamp(22px,4vw,64px);max-width:64ch}
.nt-main h1{margin-bottom:clamp(26px,4vh,40px)}
.nt-body{position:relative;display:grid}
.nt-body .tm-live,.nt-body .tm-ghost{grid-area:1/1}
.tm-ghost{visibility:hidden}
.nt-body p{margin:0 0 .85em;font:300 clamp(17.5px,1.45vw,21px)/1.62 var(--font);color:var(--ink);letter-spacing:-.003em}
.nt-body p:first-child{margin-bottom:.6em}
.nt-body .tm-ghost p:last-child,.nt-body.tm-done p:last-child{color:var(--muted);margin:1.1em 0 0}
.nt-body a{color:inherit;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:4px;text-decoration-color:var(--line)}
.nt-body a:hover{text-decoration-color:currentColor}
.nt-skip{margin-top:14px;font-size:12.5px;color:var(--faint)}
.nt-acts{transition:opacity .9s ease,translate 1s cubic-bezier(.2,.7,.1,1)}
.nt:not(.acts-in) .nt-acts:not(:focus-within){opacity:0;translate:0 8px}
/* home: the Web Design card's glimpse, and what Products holds */
.dg-design{background:radial-gradient(80% 60% at 50% 42%,#fff,#e7e9e7)}
.wdm{position:relative;display:grid;place-items:center;width:100%;height:100%;container-type:inline-size}
.wdm-l{font:100 clamp(64px,44cqi,190px)/1 var(--font);letter-spacing:-.05em;color:#262827;padding-bottom:.08em}
.wdm em{position:absolute;left:10%;bottom:8%;font:500 10px/1 var(--font);letter-spacing:.18em;text-transform:uppercase;font-style:normal;color:var(--faint);opacity:0;transition:opacity .8s .3s}
:is(.dg-c,.arc-c):is(.on,:hover,:focus-visible) .wdm em,.arc-c[aria-current=true] .wdm em{opacity:1}
.sel-more{margin:8px auto 0;text-align:center;font-size:13px;color:var(--faint);display:flex;justify-content:center;flex-wrap:wrap;gap:4px 10px}
.sel-more a{color:var(--muted);text-decoration:none}.sel-more a:hover{color:var(--ink);text-decoration:underline;text-underline-offset:3px}
/* inside Products: a quiet row above the page title */
.ptabs{display:flex;gap:18px;margin:0 0 14px;font-size:13px}
.ptabs a{color:var(--faint);text-decoration:none;padding:4px 0;border-bottom:1px solid transparent}
.ptabs a:hover{color:var(--ink)}.ptabs a[aria-current]{color:var(--ink);border-bottom-color:currentColor}
/* header: the Products menu */
.nv-g{position:relative;display:flex;align-items:center}
.nv-g>a{padding-right:4px!important}
.nv-x{display:grid;place-items:center;width:22px;height:30px;padding:0;border:0;background:none;color:var(--muted);cursor:pointer;border-radius:6px}
.nv-x svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;transition:transform .3s var(--ease)}
.nv-g.open .nv-x svg{transform:rotate(180deg)}.nv-x:hover{color:var(--ink)}.nv-x:focus-visible{outline:2px solid var(--ink);outline-offset:1px}
.nv-p{left:0;right:auto;top:44px;width:260px;padding:8px;gap:2px;transform-origin:30px 0;z-index:40}
.nv-p a{display:grid;gap:3px;padding:10px 12px;border-radius:12px;text-decoration:none;color:var(--ink)}
.nv-p a b{font:500 14px/1.2 var(--font)}.nv-p a small{font-size:12.5px;color:var(--muted);line-height:1.35}
.nv-p a:hover,.nv-p a:focus-visible{background:rgba(38,40,39,.05);outline:none}
.nv-p a[aria-current]{box-shadow:inset 0 0 0 1px rgba(38,40,39,.14)}
body[data-route=studio] .nv-x{color:var(--dark-muted)}
body[data-route=studio] .nv-p{background:rgba(20,22,21,.92);color:var(--dark-ink)}
body[data-route=studio] .nv-p a{color:var(--dark-ink)}body[data-route=studio] .nv-p a small{color:var(--dark-muted)}
/* dark theme */
html[data-theme=dark] .iq-done-orb,html[data-theme=dark] .wd-bead{background:radial-gradient(circle at 42% 64%,rgba(255,255,255,.9) 0 12%,transparent 46%),radial-gradient(circle at 35% 28%,rgba(255,255,255,.5),rgba(255,255,255,.08) 55%,rgba(230,220,200,.12));box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 0 0 1px rgba(255,255,255,.12),0 10px 24px -10px rgba(0,0,0,.9)}
html[data-theme=dark] .ch span{background:rgba(255,255,255,.04);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
html[data-theme=dark] .ch input:checked+span{background:rgba(255,255,255,.12);box-shadow:inset 0 0 0 1.5px var(--ink),inset 0 1px 0 rgba(255,255,255,.2)}
html[data-theme=dark] .iq .gi:focus{box-shadow:inset 0 0 0 1.5px var(--ink),0 0 0 5px rgba(255,255,255,.05)}
html[data-theme=dark] .err,html[data-theme=dark] .iq-status[role=alert]{color:#e0a397}
html[data-theme=dark] .iq .gi[aria-invalid]{box-shadow:inset 0 0 0 1.5px #c98477}
html[data-theme=dark] .nv-p a:hover,html[data-theme=dark] .nv-p a:focus-visible{background:rgba(255,255,255,.06)}
html[data-theme=dark] .dg-design{background:radial-gradient(80% 60% at 50% 45%,#232425,#111213)}
html[data-theme=dark] .wdm-l{color:#eceeeb}
html[data-theme=dark] .wd-path i{background:var(--champagne,#E6DCC8)}html[data-theme=dark] .wd-path i::after{background:linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent)}
@media (max-width:900px){
  .wd-custom,.wd-form{grid-template-columns:1fr}
  .wd-form-t{position:static}
  .hx-b{padding-left:9%}
  .hx-note{grid-column:1/-1}.hx-foot{grid-column:1/-1}
  /* process: a vertical path */
  .wd-steps{grid-template-columns:1fr;gap:34px;padding-left:40px}
  .wd-path{width:1px;height:var(--len,0px);transform:scaleY(0)}
  .wd-path i{transform:scaleY(var(--to,0))}
  .wd-path i::after{left:-1px;right:-1px;width:auto;top:-80px;height:80px;background:linear-gradient(180deg,transparent,#fff,transparent)}
  .wd-path.glint i::after{animation-name:wd-glint-v}
  .wd-step{padding-top:0}.wd-bead{left:-40px}
  .nt{grid-template-columns:1fr;gap:28px}
  .nt-meta{position:static;display:flex;flex-wrap:wrap;gap:2px 14px;align-items:baseline}
  .nt-meta p{margin:0}.nt-k{flex-basis:100%;margin-bottom:6px!important}.nt-time{margin-top:0!important}
}
@keyframes wd-glint-v{0%{top:-80px;opacity:0}20%{opacity:.9}100%{top:100%;opacity:0}}
@media (max-width:640px){
  .wd,.ab{padding-top:128px}
  .hx{min-height:calc(100svh - 160px)}
  .wd .hx-h{font-size:clamp(36px,11.2vw,64px);letter-spacing:-.04em}
  .hx-b{padding-left:0}
  .nt{padding-top:128px}
  .nt-main{border-left:0;padding-left:0;border-top:1px solid var(--line);padding-top:24px}
  .iq-row2{grid-template-columns:1fr}
  .wd-list li{grid-template-columns:1fr;gap:4px}
  .wd-form-b{padding:18px;border-radius:20px}
  .nv-p{width:min(260px,calc(100vw - 24px))}
}
/* \u2500\u2500 motion system (perf/motion pass 2026-10-28): see bindMotion. Transform/opacity only. \u2500\u2500 */
.wd{--mo-e:cubic-bezier(.2,.75,.15,1);--mo-e2:cubic-bezier(.16,.84,.24,1)}
/* label: the hero note's hairline draws, the label follows it */
.wd.mo-on .kicker.mo-pre{position:relative}
.wd.mo-on .kicker.mo-pre::before{content:"";position:absolute;left:0;top:50%;width:22px;height:1px;background:currentColor;opacity:.5;transform-origin:0 50%;transform:scaleX(0);transition:transform .6s var(--mo-e) var(--md),opacity .5s ease calc(var(--md) + .55s)}
.wd.mo-on .kicker.mo-pre{opacity:0;transform:translateX(-10px);transition:opacity .7s ease calc(var(--md) + .25s),transform .9s var(--mo-e) calc(var(--md) + .25s)}
.wd.mo-on .kicker.mo-pre.mo-in{opacity:1;transform:none}
.wd.mo-on .kicker.mo-pre.mo-in::before{transform:scaleX(1);opacity:0}
/* heading: words through a mask (type-motion), a little faster than the hero */
.wd h2.mo-h .tm-i{transition-duration:.95s;transition-timing-function:var(--mo-e2)}
/* paragraphs, notes, group items: settle up into place */
.wd.mo-on .mo-pre:not(.kicker):not(.mo-row){opacity:0;transform:translateY(16px);transition:opacity .8s ease var(--md),transform 1.1s var(--mo-e) var(--md)}
.wd.mo-on .mo-pre.mo-in:not(.kicker):not(.mo-row){opacity:1;transform:none}
/* service rows: ruled as they are reached, then the text */
.wd.mo-on .wd-list>li.mo-row{position:relative;border-bottom-color:transparent}
.wd.mo-on .wd-list>li.mo-row::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:var(--line);transform-origin:0 50%;transform:scaleX(0);transition:transform .9s var(--mo-e)}
.wd.mo-on .wd-list>li.mo-row>*{opacity:0;transform:translateX(-8px);transition:opacity .6s ease .28s,transform .8s var(--mo-e) .28s}
.wd.mo-on .wd-list>li.mo-row>span{transition-delay:.4s}
.wd.mo-on .wd-list>li.mo-row.mo-in::after{transform:none}
.wd.mo-on .wd-list>li.mo-row.mo-in>*{opacity:1;transform:none}
/* cards: rise with depth, one after another */
.wd-proof-g{perspective:1200px}
.wd.mo-on .wd-pc.mo-pre{opacity:0;transform:translateY(38px) rotateX(9deg) scale(.97);transform-origin:50% 100%;transition:opacity .9s ease var(--md),transform 1.25s var(--mo-e2) var(--md)}
.wd.mo-on .wd-pc.mo-pre.mo-in{opacity:1;transform:none}
/* the backdrop behind these panels is the flat pearl surface: the blur only cost a re-render per moving frame */
.wd .wd-pc.glass,.wd .wd-form-b.glass{-webkit-backdrop-filter:none;backdrop-filter:none}
.wd-pc{position:relative;overflow:hidden;transform-style:preserve-3d}
.wd-pc::after{content:"";position:absolute;width:260px;height:260px;left:calc(50% - 130px);top:calc(50% - 130px);border-radius:50%;pointer-events:none;
  background:radial-gradient(closest-side,rgba(255,255,255,.55),rgba(255,255,255,0));opacity:0;transform:translate(calc(var(--tx,0) * 220px),calc(var(--ty,0) * 160px));transition:opacity .5s ease}
.wd-pc i{display:inline-block;transition:transform .45s var(--mo-e)}
@media (hover:hover) and (pointer:fine){
  .wd-pc.mo-tilt{transform:rotateX(calc(var(--ty,0) * -7deg)) rotateY(calc(var(--tx,0) * 8deg)) translateY(-3px);transition:transform .25s ease-out}
  .wd-pc:not(.mo-tilt){transition:transform .7s var(--mo-e)}
  .wd-pc.mo-tilt::after{opacity:1}
  .wd-pc:hover i,.wd-pc:focus-visible i{transform:translateX(5px)}
}
html[data-theme=dark] .wd-pc::after{background:radial-gradient(closest-side,rgba(255,255,255,.12),rgba(255,255,255,0))}
/* CTA: drawn toward the pointer, gives under a press; arrow links lead */
.wd .acts .gb.primary{translate:var(--mx,0) var(--my,0);transition:translate .5s var(--mo-e),transform .18s ease,box-shadow .3s,background .3s}
.wd .acts .gb.primary:active{transform:scale(.965)}
.wd .tl>span[aria-hidden]{display:inline-block;transition:transform .45s var(--mo-e)}
.wd .tl:hover>span[aria-hidden],.wd .tl:focus-visible>span[aria-hidden]{transform:translateX(5px)}
.wd .gb:focus-visible,.wd .tl:focus-visible,.wd-pc:focus-visible{transition:outline-offset .25s var(--mo-e)}
/* scroll-linked depth, compositor only: the three cards drift at different rates, Investment's
   heading leads its copy. Uses the translate property, so entrances and tilt (transform) are untouched. */
@supports (animation-timeline:view()){
  @media (min-width:821px){
    .wd-pc:nth-child(1){animation:wd-depth-a linear both;animation-timeline:view();animation-range:entry 0% exit 100%}
    .wd-pc:nth-child(3){animation:wd-depth-b linear both;animation-timeline:view();animation-range:entry 0% exit 100%}
    .wd-quote>div:first-child{animation:wd-depth-a linear both;animation-timeline:view();animation-range:entry 0% exit 100%}
  }
  @keyframes wd-depth-a{from{translate:0 22px}to{translate:0 -22px}}
  @keyframes wd-depth-b{from{translate:0 -14px}to{translate:0 14px}}
}
@media (prefers-reduced-motion:reduce){.wd-pc,.wd-pc i,.wd .tl>span[aria-hidden],.wd .acts .gb.primary,.wd-pc:nth-child(n),.wd-quote>div{transition:none;animation:none!important;translate:none!important}.wd-pc::after{display:none}.wd-bead,.wd-bead::after,.wd-n,.wd-path,.wd-path i,.wd-list li,.nv-x svg,.hx-b,.hx-c em,.hx-foot,.hx-note::before,.nt-acts{transition:none}.hx-l{translate:none}.wd-path i::after,.iq-more[open] .iq-more-b,.iq-done-orb{animation:none}}
${dl}
`;var Ic=[{date:"2026-10-27",items:["Every section, product and template now has its own address, such as thelightorb.com/products/orb, so it can be found and shared.","Opening a link to a product or page goes straight there, without the intro.","Four new interactive Objects in Products: Gel Press, Interactive Lens, Elastic Lettering and Magnetic Stack, coming to early access.","Products can be filtered by category and shown as a grid or large cards.","Bloom listens: with your permission, the Bloom Orb answers your voice through the microphone.","Web Design has a new typographic opening and an interactive look at the process.","Refined glass on buttons, filters and cards, and a dark mode with neutral graphite surfaces.","On phones, the three offers on the welcome take turns on one line.","A new site icon: the O of the wordmark."]},{date:"2026-10-23",items:["BRUNITO, an interactive ecommerce template, can be explored in Templates.","The Light Orb moved to its own address, thelightorb.com."]}],Pc=e=>new Date(`${e}T12:00:00Z`).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});function xl(e,a){e.innerHTML=`
    <section class="dest legal">
      <header class="dh"><p class="kicker">Changelog</p><h1>What\u2019s new</h1><p class="dh-l">New pieces and changes to The Light Orb, newest first.</p></header>
      <div class="legal-b">${Ic.map(o=>`<h2><time datetime="${o.date}">${Pc(o.date)}</time></h2><ul>${o.items.map(t=>`<li>${a.esc(t)}</li>`).join("")}</ul>`).join("")}</div>
    </section>${a.footer()}`}var mi=e=>e.free||e.ask?e.note:`${e.note} ${Fr}`.trim(),xa=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),Er=(e,a,o)=>e+(a-e)*o,za=e=>{let a=xa(e);return a*a*(3-2*a)},Rc=(e,a,o,t,d)=>za((e-a)/(o-a))*(1-za((e-t)/(d-t))),he=e=>String(e).replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),rr={get:(e,a)=>{try{return JSON.parse(sessionStorage.getItem(e))??a}catch{return a}},set:(e,a)=>{try{sessionStorage.setItem(e,JSON.stringify(a))}catch{}}},Xe={play:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>',replay:'<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/></svg>',prev:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',mute:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',moon:'<svg viewBox="0 0 24 24"><path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z"/></svg>',sun:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.8"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg>',user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M4.5 20c1.4-3.6 4.2-5.4 7.5-5.4s6.1 1.8 7.5 5.4"/></svg>',heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/></svg>',back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',down:'<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',bag:'<svg viewBox="0 0 24 24"><path d="M5.5 8.5h13l-1 11h-11z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5.5" y="10.5" width="13" height="9" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',orb:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="11" cy="15" r="1.6" fill="currentColor" stroke="none"/></svg>'},fi={pieces:"products",materials:"products"},Dc=`
.nav-soon{display:inline-block;margin-left:5px;padding:2px 6px 3px;border-radius:999px;font:500 9.5px/1 var(--font);letter-spacing:.06em;text-transform:uppercase;vertical-align:2px;color:var(--muted);box-shadow:inset 0 0 0 1px currentColor;opacity:.75}
.wel-acts{display:flex;flex-wrap:wrap;gap:10px;justify-content:inherit}
@media (max-width:520px){.nav a[data-nav=studio]{position:relative}.nav-soon{position:absolute;top:-3px;right:-6px;margin:0;padding:1px 4px 2px;font-size:7.5px;letter-spacing:.04em}}
.lo-on .skip{display:none}
.pd-studio-soon{margin:14px 0 0;font-size:13.5px;line-height:1.5;color:#a50d2f}.pd-studio-soon a{color:inherit}
/* Studio granate (owner 2026-11-10): one colour, the same in light and dark themes. */
.hd .nav a[data-nav=studio],html[data-theme=dark] .hd .nav a[data-nav=studio]{color:#a50d2f!important;font-weight:500}
.hd .nav a[data-nav=studio]::before{content:"";display:inline-block;width:6px;height:6px;margin-right:7px;vertical-align:2px;border-radius:50%;background:#a50d2f;box-shadow:0 0 0 3px rgba(165,13,47,.14),0 0 10px rgba(165,13,47,.5)}
.hd .nav a[data-nav=studio]:hover,.hd .nav a[data-nav=studio][aria-current],html[data-theme=dark] .hd .nav a[data-nav=studio]:hover{color:#860a26!important}
.hd .nav a[data-nav=studio][aria-current]::after{background:#a50d2f}
.ss .ss-f .sl-f button.gb,html[data-theme=dark] .ss .ss-f .sl-f button.gb{background:#a50d2f!important;color:#fff!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.22),0 8px 20px -10px rgba(165,13,47,.6)!important}
.ss .ss-f .sl-f button.gb:hover{background:#860a26!important}
.ss .ss-f .sl-f input[type=email],html[data-theme=dark] .ss .ss-f .sl-f input[type=email]{color:#a50d2f;caret-color:#a50d2f}
/* New label on a template card (owner 2026-11-11): only the word, in the Studio granate */
.tcard-new{position:absolute;top:20px;right:22px;z-index:3;font:600 10.5px/1 var(--font);letter-spacing:.16em;text-transform:uppercase;color:#a50d2f}`;function vl(e){document.getElementById("seo-entry")?.remove();try{localStorage.setItem("lo:intro-seen","1")}catch{}let{orb:a,reduced:o}=e,t=gn();ws(t);let d=document.createElement("style");d.textContent=Mn+qn+bl+On+zn+(/[?&]cx=0\b/.test(location.search)?"":In)+Dn+Nn+Yn+al+hs+Js+Dc,document.documentElement.classList.add("ds2"),document.head.append(d),jn(),document.documentElement.classList.add("lo-on");let p=es(e),i=bi("main","lo");i.setAttribute("aria-label","The Light Orb"),i.tabIndex=-1;let l=bi("div","lo-top");document.body.append(i,l),l.innerHTML=`
    <header class="hd" data-hd>
      <a class="wm" href="#/" aria-label="The Light Orb \u2014 Home" data-home>${Br}</a>
      <nav class="nav" aria-label="Main">${Ri.map(r=>r.children?`<div class="nv-g" data-nvg><a href="${r.route}" data-nav="${r.id}" data-top>${r.label}</a><button class="nv-x" type="button" data-nvx aria-expanded="false" aria-controls="nv-${r.id}" aria-label="${r.label}: ${r.children.map(n=>n.label).join(", ")}">${Xe.down}</button>
        <div class="menu pane nv-p" id="nv-${r.id}" data-nvp hidden>${r.children.map(n=>`<a href="${n.route}" data-sub="${n.id}"><b>${n.label}</b><small>${n.line}</small></a>`).join("")}</div></div>`:`<a href="${r.route}" data-nav="${r.id}" data-top${r.soon?` aria-label="${r.label}, coming soon"`:""}>${r.label}${r.soon?'<span class="nav-soon" aria-hidden="true"><i>Soon</i></span>':""}</a>`).join("")}</nav>
      <div class="hd-r">
        <a class="nav-m" href="#/membership" data-nav="membership">Membership</a>
        <div class="snd" data-sndhost></div>
        <div class="thm"><button class="gb gc small" type="button" data-theme-btn aria-pressed="false" aria-label="Dark mode" title="Dark mode">${Xe.moon}</button></div>
        <div class="cartw"${" hidden"}><button class="gb gc small" type="button" data-cartbtn aria-haspopup="dialog" aria-expanded="false" aria-label="Cart">${Xe.bag}<span class="cart-n" data-cartn hidden></span></button>
          <div class="menu pane cart-p" role="dialog" aria-label="Cart" data-cartp hidden></div></div>
        ${Vt?`<div class="acctw"><a class="gb gc small" href="#/account" aria-label="Account" data-nav="account" data-acctbtn aria-haspopup="menu" aria-expanded="false" aria-controls="acct-p">${Xe.user}</a>
          <div class="menu pane acct-p" id="acct-p" role="menu" aria-label="Account" data-acctp hidden></div></div>`:`<a class="gb gc small" href="#/account" aria-label="Account" data-nav="account">${Xe.user}</a>`}
      </div>
    </header>
    <button class="guide-hit" type="button" data-guide aria-label="Talk with the Orb"></button>
    <div class="caption" data-caption aria-live="polite"></div>`,l.querySelectorAll("[data-nvg]").forEach(r=>{let n=r.querySelector("[data-nvx]"),y=r.querySelector("[data-nvp]"),x=0,k=(S,Z)=>{clearTimeout(x),y.hidden!==!S&&(y.hidden=!S,n.setAttribute("aria-expanded",String(S)),r.classList.toggle("open",S),Z&&S&&y.querySelector("a")?.focus())};n.addEventListener("click",()=>{k(y.hidden),t.sfx(y.hidden?"close":"open")}),n.addEventListener("keydown",S=>{S.key==="ArrowDown"&&(S.preventDefault(),k(!0,!0))}),r.addEventListener("pointerenter",S=>{S.pointerType==="mouse"&&k(!0)}),r.addEventListener("pointerleave",S=>{S.pointerType==="mouse"&&(x=setTimeout(()=>k(!1),220))}),r.addEventListener("keydown",S=>{S.key==="Escape"&&!y.hidden&&(k(!1),n.focus())}),y.addEventListener("keydown",S=>{let Z=[...y.querySelectorAll("a")],Q=Z.indexOf(document.activeElement);(S.key==="ArrowDown"||S.key==="ArrowUp")&&(S.preventDefault(),Z[(Q+(S.key==="ArrowDown"?1:Z.length-1))%Z.length].focus())}),r.addEventListener("focusout",S=>{r.contains(S.relatedTarget)||k(!1)}),document.addEventListener("pointerdown",S=>{r.contains(S.target)||k(!1)}),addEventListener("hashchange",()=>k(!1))});let c=l.querySelector("[data-hd]"),f=l.querySelector("[data-caption]"),h=l.querySelector("[data-guide]"),b=l.querySelector("[data-theme-btn]"),$=()=>{let r=Xa()==="dark";b.setAttribute("aria-pressed",String(r)),b.innerHTML=r?Xe.sun:Xe.moon,b.setAttribute("aria-label","Dark mode"),b.title=r?"Switch to light mode":"Switch to dark mode"};$(),b.addEventListener("click",()=>{Ho(Xa()==="dark"?"light":"dark"),Ge(`theme_${Xa()}`)}),document.addEventListener("lightorb:theme",()=>{$(),ue.name!=="studio"&&(H(),p.reapply())});let K=Oi(l.querySelector("[data-sndhost]"),t.store,{buttonClass:"gb gc small",onToggle:(r,n)=>{Ge(`${r==="voice"?"voice":"sound"}_${n?"on":"off"}`),r==="sfx"&&n&&t.sfx("select")}}),s=0;t.store.on((r,n)=>{n.voice&&!t.voiceOn&&(fe=null,De())});let M=()=>{t.voiceOn||t.toggle("voice",!0)},A=0,P=0,F=null,I="a,button,input,select,textarea,summary,[role=slider],[role=tab],.arc-c,.dg-c,.file,.tcard",B="h1,h2,h3,p,li,dt,dd,blockquote,figcaption,label",N=NaN,X=null;function T(){let r=()=>{f.style.top="",f.style.bottom="",f.style.left=""};if(!f.classList.contains("on")){Number.isFinite(N)&&(r(),N=NaN);return}r();let n=f.getBoundingClientRect(),y=n.width,x=n.height,k=8,S=innerWidth,Z=n.top,Q=n.left+y/2,z=(c.getBoundingClientRect().bottom||0)+k,te=(window.visualViewport?.height??innerHeight)-10,Ae=Pe=>[...document.querySelectorAll(Pe)].filter(Qe=>Qe!==f&&!f.contains(Qe)&&Qe!==h&&!Qe.closest("[hidden],[inert]")).map(Qe=>Qe.getBoundingClientRect()).filter(Qe=>Qe.width&&Qe.height&&Qe.bottom>z&&Qe.top<te),j=Ae(I),L=Ae(B),G=X&&X.vis>.5?[{top:X.y-X.d/2,bottom:X.y+X.d/2,left:X.x-X.d/2,right:X.x+X.d/2}]:[],Se=[...new Set([Q,S-y/2-12,y/2+12].map(Pe=>Math.round(Math.min(S-y/2-12,Math.max(y/2+12,Pe)))))],le=(Pe,Qe)=>{let Zt=Pe.filter(st=>st.right>Qe-y/2-k&&st.left<Qe+y/2+k),Ra=st=>Zt.every(pt=>st+x+k<=pt.top||st-k>=pt.bottom);return Ra(Z)?Z:[z,te-x,...Zt.flatMap(st=>[st.bottom+k,st.top-k-x])].filter(st=>st>=z&&st+x<=te&&Ra(st)).sort((st,pt)=>Math.abs(st-Z)-Math.abs(pt-Z))[0]},Te=null;for(let Pe of[[...j,...L,...G],[...j,...L],j]){for(let Qe of Se){let Zt=le(Pe,Qe);if(Zt!==void 0){Te={x:Qe,y:Zt};break}}if(Te)break}if(!Te||Math.abs(Te.y-Z)<.5&&Math.abs(Te.x-Q)<.5){N=NaN;return}f.style.top=`${Te.y.toFixed(1)}px`,f.style.bottom="auto",f.style.left=`${Te.x}px`,N=Te.y}let E=0,C=()=>{E||(E=requestAnimationFrame(()=>{E=0,T()}))};new MutationObserver(C).observe(f,{attributes:!0,attributeFilter:["class"],childList:!0,characterData:!0,subtree:!0}),addEventListener("resize",C),window.visualViewport?.addEventListener("resize",C);let _=(()=>{let r=document.createElement("canvas").getContext("2d");return n=>(r.font=getComputedStyle(f).font,r.measureText(n).width)})();function w(r){let n=Math.min(560,innerWidth*.84)-34,y=[],x="";for(let k of String(r).split(/\s+/).filter(Boolean)){let S=x?`${x} ${k}`:k;x&&_(S)>n?(y.push(x),x=k):x=S}return x&&y.push(x),y.length?y:[""]}function q(r,{follow:n=!1}={}){let y=w(r),x=Math.max(1,String(r).length),k=++P,S=performance.now(),Z=Math.max(3200,x*70),Q=-1;clearTimeout(A),f.classList.add("on");let z=()=>{if(k!==P)return;let Ae=n&&t.playing&&t.state.kind==="guide"&&t.state.clip!=="speech"&&t.position>0?t.position:(performance.now()-S)/Z,j=0,L=0;for(;L<y.length-1&&(j+=y[L].length+1,!(Ae*x<j));L++);L!==Q&&(Q=L,f.textContent=y[L]),Ae<1||n&&t.playing&&t.state.kind==="guide"?requestAnimationFrame(z):A=setTimeout(()=>{k===P&&(f.classList.remove("on"),F=null,V())},900)};z()}function V(){let r=t.prefs;i.querySelectorAll("[data-enable]").forEach(y=>{y.hidden=r.master});let n=t.state.clip?.split(".")[0];if(Zr[n]&&n!=="home"){let y=t.state.kind==="guide"&&["playing","loading"].includes(t.state.status);y&&F!==n?(F=n,q(Zr[n],{follow:!0})):!y&&F===n&&(F=null,P++,f.classList.remove("on"))}}t.on(V),t.on(()=>{!t.playing&&t.state.status!=="loading"&&document.querySelectorAll("[data-speaking]").forEach(r=>r.removeAttribute("data-speaking"))}),ps(l,{sfx:r=>t.sfx(r)});let ae=l.querySelector("[data-cartbtn]"),re=l.querySelector("[data-cartp]"),ne=l.querySelector("[data-cartn]");function de(){let r=ra.items();ne.hidden=!r.length,ne.textContent=r.length,re.innerHTML=`<p class="kicker">Cart</p>${r.length?`<ul class="cart-l">${r.map(n=>`<li><a href="${n.href}">${he(n.name)}</a><button class="pill" type="button" data-cartrm="${n.id}">Remove</button></li>`).join("")}</ul>`:'<p class="note">Your cart is empty.</p>'}
      ${Fa.canCheckout(r)?'<button class="gb primary" type="button" data-checkout>Checkout</button>':'<button class="gb primary" type="button" disabled>Checkout opens soon</button><p class="note">No payment can be taken yet; items stay in this browser.</p>'}`,re.querySelector("[data-checkout]")?.addEventListener("click",()=>{let n=Fa.checkout(ra.items());n&&ra.remove(n)}),re.querySelectorAll("[data-cartrm]").forEach(n=>n.addEventListener("click",()=>{ra.remove(n.dataset.cartrm),t.sfx("close")}))}ra.on(de),de();let ke=r=>{re.hidden=!r,ae.setAttribute("aria-expanded",String(r)),t.sfx(r?"open":"close")};ae.addEventListener("click",()=>ke(re.hidden)),document.addEventListener("pointerdown",r=>{!re.hidden&&!r.target.closest(".cartw")&&ke(!1)}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!re.hidden&&(ke(!1),ae.focus())});let $e={emission:1,voice:Io.voice},H=()=>{$e=oo(a,Ht(Io)),a.setRibbon?.(0)};H();let u=()=>({home:"home",products:"products",templates:"templates",...lr?{studio:"studio"}:{},sound:"sound"})[ue.name],O=()=>matchMedia("(pointer: coarse)").matches&&Math.min(innerWidth,innerHeight)<820,W=r=>{try{return localStorage.getItem(r)}catch{return null}},D=r=>{try{localStorage.setItem(r,"1")}catch{}},R="en",ce=null,ze=document.createElement("style");ze.textContent=`.orb-ask{position:fixed;left:50%;bottom:calc(18px + env(safe-area-inset-bottom,0px));transform:translate(-50%,6px);z-index:30;display:flex;align-items:center;gap:8px;width:min(420px,calc(100vw - 32px));box-sizing:border-box;
  padding:6px 6px 6px 14px;border-radius:999px;background:rgba(255,255,255,.74);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 0 0 1px rgba(38,40,39,.08),0 8px 30px rgba(38,40,39,.08);opacity:0;transition:opacity .25s,transform .35s var(--ease)}
.orb-ask.on{opacity:1;transform:translate(-50%,0)}
.orb-ask[hidden]{display:none}
.orb-ask input{flex:1;min-width:0;border:0;background:transparent;font:inherit;font-size:16px;color:var(--ink);outline:none;padding:8px 0}
.orb-ask input::placeholder{color:var(--muted)}
.orb-ask .st{font-size:13px;color:var(--muted);white-space:nowrap}
.orb-ask .st:empty{display:none}
.orb-ask button{flex:none;width:36px;height:36px;border-radius:50%;border:0;background:rgba(38,40,39,.06);color:var(--ink);display:grid;place-items:center;cursor:pointer;padding:0}
.orb-ask button[aria-pressed=true]{background:var(--ink);color:#fff}
.orb-ask button svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.orb-ask button[hidden]{display:none}
body[data-route=studio] .orb-ask{background:rgba(30,34,32,.84);box-shadow:0 0 0 1px rgba(255,255,255,.08)}
body[data-route=studio] .orb-ask input{color:var(--dark-ink)}
body.orb-asking .caption{bottom:calc(76px + env(safe-area-inset-bottom,0px))}
@media (pointer:coarse) and (max-width:820px){.caption{font-size:13.5px;line-height:1.35}}`,document.head.append(ze);let Me='<svg viewBox="0 0 24 24"><rect x="9" y="3.5" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v2.5"/></svg>',xe='<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5"/></svg>',ge=bi("form","orb-ask");ge.hidden=!0,ge.setAttribute("role","search"),ge.setAttribute("aria-label","Ask the Orb"),ge.innerHTML=`<span class="st" data-st aria-live="polite"></span><input type="text" data-q placeholder="${R==="es"?"Pregunta a la Orb\u2026":"Ask the Orb\u2026"}" aria-label="Ask the Orb" autocomplete="off" enterkeyhint="send" maxlength="300">
    <button type="button" data-mic aria-label="Speak" aria-pressed="false"${ti?"":" hidden"}>${Me}</button><button type="submit" aria-label="Send">${xe}</button>`,l.append(ge);let qe=ge.querySelector("[data-st]"),Re=ge.querySelector("[data-q]"),Ke=ge.querySelector("[data-mic]");h.setAttribute("aria-label","Talk with the Orb");let ut=!ti,at=()=>{ge.hidden=!1,document.body.classList.add("orb-asking"),requestAnimationFrame(()=>ge.classList.add("on"))},rt=()=>{it++,Ze(),ge.classList.remove("on"),ge.hidden=!0,document.body.classList.remove("orb-asking"),Re.blur()};function Ze(){if(ye){let r=ye;ye=null,r.abort()}Ke.setAttribute("aria-pressed","false"),qe.textContent=""}function be(){ut||ye||(t.stop(),ce=null,qe.textContent=R==="es"?"Escuchando\u2026":"Listening\u2026",Ke.setAttribute("aria-pressed","true"),ye=as({lang:R==="es"?"es-ES":/^en/i.test(navigator.language)?navigator.language:"en-US",onresult:r=>{qe.textContent="",Re.value=r},onerror:r=>{ye=null,Ke.setAttribute("aria-pressed","false"),qe.textContent="",(r==="not-allowed"||r==="service-not-allowed"||r==="unsupported")&&(Ge("mic_denied"),ut=!0,Ke.hidden=!0,ft(pr("reply.mic",R),"answer"),O()||Re.focus())},onend:r=>{ye&&(ye=null,Ke.setAttribute("aria-pressed","false"),qe.textContent="",Re.value="",r.trim()&&Ct(r))}}),ye||(Ke.setAttribute("aria-pressed","false"),qe.textContent=""))}Ke.addEventListener("click",()=>{ye?Ze():be()}),Re.addEventListener("input",()=>{ye&&Ze()}),ge.addEventListener("submit",r=>{r.preventDefault();let n=Re.value.trim();Re.value="",Ze(),n&&(Ge("orb_typed"),Ct(n))}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!ge.hidden&&rt()}),document.addEventListener("pointerdown",r=>{!ge.hidden&&!r.target.closest(".orb-ask,[data-guide]")&&!Re.value&&!ye&&rt()});let ye=null,fe=null,Oe=null,Ve=null;h.addEventListener("pointerdown",r=>{Oe={x:r.clientX,y:r.clientY}}),h.addEventListener("click",()=>{if(M(),Ie=performance.now()/1e3,Ge("orb_tap"),ye){Ze();return}let r=Oe&&document.elementsFromPoint(Oe.x,Oe.y).map(ve).find(Boolean);if(Oe=null,r){me(r);return}if(t.playing||t.state.status==="loading"){De();return}t.sfx("select"),at(),D("lo:orb:greet");let n=location.hash||"#/";if(Ve===n){De();return}Ve=n,De(),ft(jt(),"answer")});function De(){s++,it++,Ze(),t.stop(),ce=null,Le=null,Be=null,Fe(""),document.querySelectorAll("[data-speaking]").forEach(r=>r.removeAttribute("data-speaking"))}document.addEventListener("keydown",r=>{r.key==="Escape"&&(t.playing||t.state.status==="loading")&&De()});let Je="h1,h2,h3,h4,p,blockquote,figcaption,li,dt,dd,[data-speak]",J="a,button,[data-href],[role=button]:not([data-speak]),[role=tab],summary,label,input,select,textarea,[contenteditable]",ie=`${J},form,.hd,.sndc,.orb-ask,.caption,[data-ins],[data-rail],[data-view],[data-modal],[data-hud],.menu,.cart-p,.arc,.dg`,se=r=>{let n=(r.getAttribute("aria-label")||r.innerText||r.textContent||"").replace(/\s+/g," ").trim();return/^\S+\.(m4a|wav|mp3|json|js|html|zip)$/i.test(n)?"":n},ve=r=>{let n=r?.closest?.(Je);return n&&i.contains(n)&&!n.closest(ie)&&!n.querySelector("input,select,textarea,button")&&se(n).length>1&&se(n).length<900?n:null},Ee=r=>{let n=2166136261;for(let y=0;y<r.length;y++)n^=r.charCodeAt(y),n=Math.imul(n,16777619);return`text.${(n>>>0).toString(36)}`},Le=null,Be=null;function me(r,n=se(r)){if(n){if(Be===r&&(t.playing||t.state.status==="loading")){De();return}M(),De(),Ge("words_spoken"),Be=r,Le=Ee(n),r.setAttribute("data-speaking",""),ft({id:Le,text:n,lang:"en"},"answer")}}i.addEventListener("click",r=>{if(r.target.closest?.(J)||String(getSelection?.()??"").trim())return;let n=ve(r.target);n&&me(n)}),i.addEventListener("keydown",r=>{if((r.key==="Enter"||r.key===" ")&&!r.altKey&&r.target.matches?.(Je)&&ve(r.target)===r.target&&(r.preventDefault(),me(r.target)),r.key==="Enter"&&r.altKey&&r.target.closest?.("a,button")){r.preventDefault();let n=r.target.closest("a,button");me(n,se(n))}});let oe=()=>i.querySelectorAll("h1,h2,h3,blockquote p,[data-speak]").forEach(r=>{ve(r)===r&&!r.hasAttribute("tabindex")&&r.setAttribute("tabindex","0")}),we=null;i.addEventListener("pointerover",r=>{let n=r.pointerType==="mouse"&&!r.target.closest?.(J)?ve(r.target):null;n!==we&&(we?.classList.remove("rd"),we=n,n?.classList.add("rd"))}),i.addEventListener("pointerleave",()=>{we?.classList.remove("rd"),we=null});let pe=null,Ue=!1;addEventListener("pointerdown",r=>{let n=r.target.closest?.("a,button,[data-href],.arc-c,.dg-c");!n||n.closest("[data-guide],[data-sound],.sndc,.sx,.orb-ask")||!se(n)||n.querySelector("svg")&&!n.innerText.trim()||(pe={t:n,x:r.clientX,y:r.clientY,timer:setTimeout(()=>{Ue=!0,me(n,se(n))},520)})},!0);let mt=r=>{pe&&(r.type!=="pointermove"||Math.hypot(r.clientX-pe.x,r.clientY-pe.y)>8)&&(clearTimeout(pe.timer),pe=null)};if(addEventListener("pointermove",mt,!0),addEventListener("pointerup",mt,!0),addEventListener("pointercancel",mt,!0),addEventListener("click",r=>{Ue&&(Ue=!1,r.preventDefault(),r.stopPropagation())},!0),addEventListener("contextmenu",r=>{(Ue||pe)&&r.preventDefault()},!0),!W("lo:orb:greet")){let r=n=>{if(n.target.closest?.("[data-guide],.orb-ask,.sndc")||(removeEventListener("pointerdown",r,!0),!O()))return;let y=s;setTimeout(()=>{y!==s||!t.voiceOn||W("lo:orb:greet")||ce||ye||(D("lo:orb:greet"),ft(pr("reply.greet",R),"answer"))},900)};addEventListener("pointerdown",r,!0)}function ft(r,n="answer"){if(!r?.text||!t.voiceOn)return;q(r.text,{follow:!0}),Ie=performance.now()/1e3,ce=n,t.say(r.text,{id:r.lang==="es"?void 0:r.id??void 0,lang:r.lang,onend:()=>{ce===n&&(ce=null)}})||(ce=null)}let We=[],it=0,Oa=(r,n)=>{for(We.push({role:r,content:n});We.length>12;)We.shift();for(;We.length&&We[0].role!=="user";)We.shift()};function oa(){let r=va(),n=r.name==="products"&&r.id?ka.find(y=>y.id===r.id):null;return{route:location.hash||"#/",title:document.title,presentation:jt("en").text,product:n?.name,variant:n?r.query.variant||(n.id==="orb"?"clear":void 0):void 0,lang:R}}async function Ct(r){R=lo(r,R);let n=rs(r,{here:ue.name,presentation:jt,lang:R});if(Ge(n.intent==="fallback"?"orb_fallback":"orb_command",{intent:n.intent||(n.stop?"stop":n.back?"back":n.go?`go:${n.go.split("?")[0].replace("#/","")}`:"answer")}),!(n.stop||n.back||n.command&&r.trim().split(/\s+/).length<=3)&&n.intent!=="hello"&&os()&&r.trim()){let x=++it;Fe("\u2026"),Oa("user",r.trim());try{let k=await is(We.slice(),oa());return x!==it?void 0:(Oa("assistant",k.say),je({say:k.say,go:k.go,lang:lo(k.say,R)}))}catch{if(x!==it)return;We.pop()}}je(n)}function je(r){if(r.stop){t.stop(),ce=null,Fe("");return}if(r.back&&history.back(),r.go&&location.hash!==r.go){fe=r.say?{text:r.say,id:r.id,lang:r.lang}:null,location.hash=r.go;return}r.say?ft({text:r.say,id:r.id,lang:r.lang},"answer"):r.go||Fe("")}function Fe(r){clearTimeout(A),P++,f.textContent=r,f.classList.toggle("on",!!r),r||V()}let Ie=-99,Ft=0,jt=(r=R)=>bn(r,ue.name,ue.id);function Dt(){ft(jt(),"arrival")}let yt=!1,gt=()=>i.scrollTop>innerHeight*.25;function Wt(){if(!t.voiceOn||yt||W("lo:orb:greet")||ce==="answer"||ye||gt())return;yt=!0,D("lo:orb:greet");let r=s,n=pr("reply.greet",R),y=()=>{r===s&&t.voiceOn&&ue.name==="home"&&!ce&&!ye&&!gt()&&ft(n,"arrival")};if(navigator.userActivation&&!navigator.userActivation.hasBeenActive){q(n.text);let x=k=>{removeEventListener("pointerdown",x,!0),removeEventListener("keydown",x,!0),!k.target.closest?.("[data-guide],.orb-ask,.sndc")&&setTimeout(y,250)};addEventListener("pointerdown",x,!0),addEventListener("keydown",x,!0);return}y()}function Ya(r){let n=fe,y=s;fe=null,ye&&!n&&Ze(),setTimeout(()=>{if(!(y!==s||location.hash!==r||!t.voiceOn)){if(n){ft(n,"answer");return}ue.name==="home"&&Wt()}},450)}let ue={name:""},kt=null,lt=[],Lt=Ba.find(r=>r.host===location.hostname)??null,Ia={products:"Products",templates:"Templates",studio:"Studio",soon:"Studio \xB7 Coming soon",sound:"Sound",membership:"Membership",account:"Account",signin:"Sign in",signup:"Sign up",design:"Web Design",about:"About",...Object.fromEntries(Ba.map(r=>[r.id,r.name])),changelog:"What\u2019s new",...Ws};function va(){let[r,n=""]=(location.hash.replace(/^#/,"")||"/").split("?"),y=r.split("/").filter(Boolean),x=Object.fromEntries(new URLSearchParams(n)),k=fi[y[0]]||y[0]||"home";return{name:k==="studio"&&!lr?"soon":k,id:y[1]||null,query:x,raw:y[0]}}function ua(){let r=va();if(r.raw&&fi[r.raw]){location.replace(`#/${fi[r.raw]}${r.id?"/"+r.id:""}`);return}if(!["home","products","templates","studio","soon","sound","membership","account","signin","signup","privacy","terms","licence","design","about","changelog",...Ba.map(k=>k.id)].includes(r.name)){location.replace("#/");return}if(Lt&&r.name!==Lt.id){location.replace(`https://thelightorb.com/${r.name==="home"?"":location.hash}`);return}lt.forEach(k=>k()),lt=[],dt=null,kt&&r.name!=="studio"&&(kt.leave(),kt=null),p.hide(),Pr(),e.removeBackdrop(wt.canvas),H();let n=ue.name;ue=r,s++,it++,document.title=ue.name==="home"?"The Light Orb":`${Ia[ue.name]??ue.name} \xB7 The Light Orb`,i.className=`lo r-${ue.name}`,document.body.dataset.route=ue.name,Pi(),ue.name==="studio"&&n!=="studio"&&Ge("studio_open"),l.querySelectorAll("[data-nav]").forEach(k=>k.toggleAttribute("aria-current",(Di[k.dataset.nav]??[k.dataset.nav]).includes(ue.name)||k.dataset.nav==="account"&&["account","signin","signup"].includes(ue.name))),l.querySelectorAll("[data-sub]").forEach(k=>k.toggleAttribute("aria-current",k.dataset.sub===ue.name)),n&&De(),({home:Oo?()=>lt.push(Ds(i,St)):Kt,products:ue.id?Ta:Pa,templates:ue.id?Il:zl,studio:_l,soon:Hl,sound:Fl,membership:()=>ls(i,St),account:()=>Qa(i,St,ue.id),signin:()=>ri(i,St,"in"),signup:()=>ri(i,St,"up"),privacy:()=>fo(i,St,"privacy"),terms:()=>fo(i,St,"terms"),licence:()=>fo(i,St,"licence"),changelog:()=>xl(i,St),design:()=>hl(i,St,ue.query),about:()=>ml(i,St),...Object.fromEntries(Ba.map(k=>[k.id,()=>(ue.id?Bl:Dl)(k)]))}[ue.name]??Kt)(),di(i),di(l),nl(location.hash),eo(i),oe();let x=rr.get(`lo:scroll:${location.hash}`,null);i.scrollTop=x??0,Ya(location.hash),n&&i.focus({preventScroll:!0})}let Ua=-1e9;i.addEventListener("scroll",C,{passive:!0}),addEventListener("hashchange",C),i.addEventListener("scroll",()=>{Ua=performance.now(),rr.set(`lo:scroll:${location.hash}`,i.scrollTop),ue.name==="home"&&ce==="arrival"&&gt()&&(t.stop(),ce=null,Fe("")),(O()||innerWidth<700)&&f.classList.contains("on")&&!t.playing&&i.scrollTop>40&&Fe("")},{passive:!0}),addEventListener("hashchange",ua),l.querySelector("[data-home]").addEventListener("click",r=>{r.preventDefault(),rr.set("lo:scroll:#/",0),ue.name==="home"?i.scrollTo({top:0,behavior:o?"auto":"smooth"}):location.hash="#/"});let St={page:i,audio:t,ICON:Xe,esc:he,store:vt,go:r=>{location.hash=r},flash:q,api:e,product:p,footer:()=>Ne()},ot=rr.get("lo:sel",0),Ot=[],Ea=new URLSearchParams(location.search).get("sel");Ea&&rr.set("lo:selv",Ea);let Nt=rr.get("lo:selv","arc")==="grid";function Kt(){if(i.innerHTML=`
      <section class="wel" aria-labelledby="hello">
        <div class="wel-copy ${o?"shown":"reveal"}" data-welcopy>
          <h1 id="hello" class="wel-h"><span>Hello.</span></h1>
          <p class="wel-line">Digital pieces, website templates, and custom web design. Made to be explored.</p>
          <p class="wel-offer" aria-label="What is here"><a href="#/products">Interactive digital pieces</a><span aria-hidden="true">\xB7</span><a href="#/templates">Website templates</a><span aria-hidden="true">\xB7</span><a href="#/design">Custom web design</a></p>
          <a class="gb primary wel-go" href="#select" data-go>Let\u2019s go</a>
        </div>
        <div class="wel-ctl"><button class="gb small" type="button" data-enable>${Xe.sound}<span>Enable sound</span></button><a class="tl" href="intro.html?replay">Replay intro</a></div>
      </section>
      <section class="qt" aria-label="Quotation">
        <figure class="qt-fig" data-qt><blockquote><p data-speak>${Tr.text}</p></blockquote>
          <figcaption>${Tr.author} \xB7 <a href="${Tr.source}" rel="noopener" target="_blank">${Tr.work}</a></figcaption></figure>
      </section>
      <section class="sel${Nt?" sel-grid":""}" id="select" aria-labelledby="sel-t">
        <h2 id="sel-t" class="sel-t"><span data-speak tabindex="0">Where would you like to begin?</span></h2>
        ${Nt?`<nav class="dg" aria-label="Destinations">${qa.map((r,n)=>`<a class="dg-c" href="${r.route}" data-c="${n}">${Ut(r)}<span class="dg-t">${r.label}</span><span class="dg-s">${r.line}</span></a>`).join("")}</nav>`:`<div class="arc" data-arc role="group" aria-roledescription="carousel" aria-label="Destinations">
          ${qa.map((r,n)=>`<a class="arc-c" href="${r.route}" data-c="${n}" aria-label="${r.label}: ${r.line}">${Ut(r,"arc-img")}<span class="arc-l">${r.label}</span><span class="arc-s">${r.line}</span></a>`).join("")}
        </div>
        <div class="arc-ctl"><button class="gb gc small" type="button" data-step="-1" aria-label="Previous">${Xe.prev}</button>
          <div class="segbar" role="tablist" aria-label="Choose destination">${qa.map((r,n)=>`<button class="pill" role="tab" type="button" data-dot="${n}">${r.label}</button>`).join("")}</div>
          <button class="gb gc small" type="button" data-step="1" aria-label="Next">${Xe.next}</button></div>`}
      </section>
      ${Ne()}`,Ot=[...i.querySelectorAll("[data-c]")],i.querySelector("[data-go]")?.addEventListener("click",r=>{r.preventDefault(),t.sfx("select"),i.scrollTo({top:i.scrollTop+i.querySelector("#sel-t").getBoundingClientRect().top-110,behavior:o?"auto":"smooth"})}),i.querySelector("[data-enable]").addEventListener("click",()=>{Ge("sound_enable"),t.set({guide:!0,sfx:!0}),t.sfx("confirm"),O()||Dt()}),Nt)Ot.forEach((r,n)=>{r.addEventListener("pointerenter",()=>Jt(n)),r.addEventListener("focus",()=>Jt(n)),r.addEventListener("click",()=>{t.sfx("open"),Ge("destination",{id:qa[n].id})})}),m(!0);else{i.querySelectorAll("[data-step]").forEach(n=>n.addEventListener("click",()=>Jt(ot+ +n.dataset.step))),i.querySelectorAll("[data-dot]").forEach(n=>n.addEventListener("click",()=>Jt(+n.dataset.dot))),Ot.forEach((n,y)=>n.addEventListener("click",x=>{if(U){x.preventDefault();return}y!==ot?(x.preventDefault(),Jt(y)):(t.sfx("open"),Ge("destination",{id:qa[y].id}))}));let r=i.querySelector("[data-arc]");r.addEventListener("keydown",n=>{n.key==="ArrowRight"&&(Jt(ot+1),n.preventDefault()),n.key==="ArrowLeft"&&(Jt(ot-1),n.preventDefault())}),ee(r,n=>Jt(ot+n),()=>m()),m(!0)}V()}function Yt(r){let n=String(qa.indexOf(r)+1).padStart(2,"0");return`<span class="arc-img cv cv-${r.id}"><span class="cv-grain"></span><span class="cv-n">${n}</span><span class="cv-t">${r.label}</span></span>`}function Ut(r,n=""){let y={products:'<img class="lo-light-only" src="./media/cards/products.jpg" alt="" decoding="async" fetchpriority="low"><img class="lo-dark-only" src="./media/cards/products-dark.jpg" alt="" decoding="async" loading="lazy" fetchpriority="low">',templates:'<span class="dg-win"><img class="lo-light-only" src="./media/templates/the-light-orb.cover.jpg" alt="" decoding="async" fetchpriority="low"><img class="lo-dark-only" src="./media/cards/templates-dark.jpg" alt="" decoding="async" loading="lazy" fetchpriority="low"></span>',studio:'<img src="./media/cards/orb-dark.jpg" alt="" decoding="async" fetchpriority="low">',design:fl,sound:`<span class="cv-wave">${[.3,.55,.8,.45,.95,.6,.35,.7,.5,.85,.4,.65,.3,.5].map(x=>`<i style="--h:${x}"></i>`).join("")}</span>`}[r.id];return`<span class="dg-img dg-${r.id} ${n}">${y}</span>`}function Jt(r,n=!0){let y=xa(r,0,qa.length-1);y!==ot&&(ot=y,rr.set("lo:sel",ot),n&&t.sfx("detent"),a.nudge?.(.5)),m()}function m(r){if(Nt){Ot.forEach((x,k)=>x.classList.toggle("on",k===ot));return}let n=Ot[0]?.offsetWidth||300,y=n*.7;Ot.forEach((x,k)=>{let S=k-ot+g/(y*1.2),Z=Math.abs(S);x.style.transition=r||v?"none":"",x.style.transform=`translateX(${S*y}px) translateZ(${-Z*150}px) rotateY(${xa(-S*30,-48,48)}deg) scale(${1-Math.min(Z,2)*.1})`,x.style.zIndex=String(10-Math.round(Z)),x.classList.toggle("on",k===ot),x.tabIndex=k===ot?0:-1,x.setAttribute("aria-current",k===ot?"true":"false")}),i.querySelectorAll("[data-dot]").forEach((x,k)=>x.setAttribute("aria-selected",String(k===ot))),i.querySelectorAll("[data-step]").forEach(x=>{x.disabled=+x.dataset.step<0&&ot===0||+x.dataset.step>0&&ot===qa.length-1})}let g=0,v=!1,U=!1;function ee(r,n,y){let x=0,k=0,S=null,Z=null,Q=0,z=0,te=null;r.addEventListener("touchstart",G=>{let Se=G.touches[0];Q=Se.clientX,z=Se.clientY,te=null},{passive:!0}),r.addEventListener("touchmove",G=>{if(G.touches.length>1)return;let Se=G.touches[0],le=Se.clientX-Q,Te=Se.clientY-z;!te&&Math.hypot(le,Te)>6&&(te=Math.abs(le)>Math.abs(Te)?"x":"y"),te==="x"&&G.cancelable&&G.preventDefault()},{passive:!1}),r.addEventListener("touchend",()=>{setTimeout(()=>{te=null},0)},{passive:!0}),r.addEventListener("pointerdown",G=>{G.button||(x=G.clientX,k=G.clientY,S=G.pointerId,Z=null,U=!1)}),r.addEventListener("pointermove",G=>{if(G.pointerId!==S)return;let Se=G.clientX-x,le=G.clientY-k;!Z&&Math.hypot(Se,le)>8&&(Z=te??(Math.abs(Se)>Math.abs(le)?"x":"y"),Z==="x"&&(r.setPointerCapture(S),v=!0)),Z==="x"&&(g=Se,U=!0,y())});let Ae=G=>{if(G.pointerId===S){if(S=null,v=!1,Z==="x"){let Se=g<-60?1:g>60?-1:0;g=0,n(Se),y(),setTimeout(()=>{U=!1},0)}Z=null}};r.addEventListener("pointerup",Ae),r.addEventListener("pointercancel",Ae),r.addEventListener("dragstart",G=>G.preventDefault());let j=0,L=0;r.addEventListener("wheel",G=>{if(Math.abs(G.deltaX)<=Math.abs(G.deltaY))return;G.preventDefault();let Se=performance.now();Se<L||(j+=G.deltaX,Math.abs(j)>60&&(n(Math.sign(j)),j=0,L=Se+380))},{passive:!1})}function _e(r){return""}function Ne(){return`<footer class="ft"><a href="#/" class="wm small" aria-label="The Light Orb \u2014 Home">${Br}</a>
      <nav aria-label="Footer"><a href="#/design">Web Design</a><a href="#/about">About</a><a href="#/sound">Sound</a><a href="#/membership">Membership</a><a href="#/changelog">What\u2019s new</a><a href="#/account">Account</a>${Vt?to()?"":'<a href="#/signup">Create account</a>':vt.profile()?.email?"":'<a href="#/signup">Join early access</a>'}<a href="intro.html?replay">Replay intro</a><a href="mailto:hello@thelightorb.com">Contact</a></nav>
      <nav aria-label="Legal"><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a><a href="#/licence">Licence</a></nav>
      <span class="ft-n">${"Early access \xB7 free to explore while it takes shape."}</span>
      ${["membership","signup","signin"].includes(ue.name)||vt.profile()?.email?"":Ar("footer",{compact:!0})}</footer>`}let It=0,Bt={"orb-slider":_r,"orb-wave":[{id:"gentle",name:"Gentle",line:"Wide, soft ripples.",p:{strength:.6,scale:110}},{id:"classic",name:"Classic",line:"The ripple from the intro.",p:{strength:1,scale:70}},{id:"deep",name:"Deep",line:"Tight, strong rings.",p:{strength:1.6,scale:45}},{id:"rain",name:"Rain",line:"Many small, quick rings, like drops on water.",p:{strength:.5,scale:28}}],"background-pack":[{id:"classic",name:"Classic",line:"The horizon as in the intro.",p:{horizon:.3,lamp:.9}},{id:"wide",name:"Wide floor",line:"A low horizon and more floor.",p:{horizon:.18,lamp:.9}},{id:"high",name:"High horizon",line:"A high horizon and more sky.",p:{horizon:.45,lamp:.9}},{id:"lantern",name:"Lantern",line:"A brighter lamp around the Orb in the dark world.",p:{horizon:.3,lamp:1.6}}],"crystal-controls":_r},zt=r=>r?.code==="kit",$t=(r,n,y)=>`<iframe class="kit-frame" data-kit="${r}|${n}|${y?1:0}" title="${y?"Preview":"Live preview"}"${y?' tabindex="-1" aria-hidden="true" loading="lazy"':""}></iframe>`,et=r=>r.querySelectorAll("[data-kit]").forEach(n=>{let[y,x,k]=n.dataset.kit.split("|");n.srcdoc=tr(y,x,{mini:k==="1"})}),ct=[...kr.filter(r=>Jr.includes(r.id)).map(r=>({id:`obj-${r.id}`,obj:r.id,fam:"obj",ext:".obj",cat:r.cat,name:r.name,kind:r.line})),...Rr.map(r=>({id:r.id,live:r.id,fam:"live",ext:".orb",cat:r.cat,name:r.name,kind:r.line,sphere:r.sphere,badge:r.badge,href:`#/products/${r.id}`})),...Gt.map(r=>({id:`orb-${r.id}`,fam:"orb",variant:r.id,sphere:r.id,ext:".orb",cat:"Orbs",name:r.id==="clear"?"The Orb":`The Orb \xB7 ${r.name}`,kind:r.line,href:`#/products/orb${r.id==="clear"?"":`?variant=${r.id}`}`})),...Qr.filter(r=>r.id!=="orb").flatMap(r=>Bt[r.id].map((n,y)=>({id:y?`${r.id}-${n.id}`:r.id,fam:r.id,variant:y?n.id:null,ext:zt(r)?".html":".kit",cat:zt(r)?"Controls":"Effects",name:`${r.name} \xB7 ${n.name}`,kind:n.line,mini:zt(r)?$t(r.id,n.id,!0):null,cls:n.cls,dark:n.dark,img:zt(r)?null:`./media/products/${r.id}.jpg`,pos:r.id==="background-pack"?`50% ${Math.round(30+(n.p.horizon-.3)*160)}%`:null,href:`#/products/${r.id}${y?`?variant=${n.id}`:""}`})))],nt=(()=>{let r=ct.filter(le=>le.fam==="orb"),n=ct.filter(le=>zt(sa(le.fam))),y=ct.filter(le=>le.obj),x={};r.forEach(le=>(x[Gt.find(Te=>Te.id===le.variant)?.base??"x"]||=[]).push(le));let k=Object.values(x),S=[];for(let le=0;S.length<r.length;le++)k.forEach(Te=>Te[le]&&S.push(Te[le]));let Z=[...new Set(n.map(le=>le.fam))],Q=[];for(let le=0;Q.length<n.length;le++)Z.forEach(Te=>{let Pe=n.filter(Qe=>Qe.fam===Te)[le];Pe&&Q.push(Pe)});let z={1:"lens",4:"type"},te={6:"light-orb",12:"voice-orb"},Ae=ct.length,j=[],L=0,G=0,Se=0;for(let le=0;le<Ae;le++){if(z[le]){j.push(y.find(Pe=>Pe.obj===z[le]));continue}if(te[le]){j.push(ct.find(Pe=>Pe.live===te[le]));continue}Se+=Q.length,Se>=S.length+Q.length-Se&&j.at(-1)?.fam!==Q[G]?.fam&&!zt(sa(j.at(-1)?.fam))&&G<Q.length||L>=S.length?(j.push(Q[G++]),Se-=S.length+Q.length):j.push(S[L++])}return j.filter(Boolean).concat(S.slice(L),Q.slice(G)).filter((le,Te,Pe)=>Pe.indexOf(le)===Te)})(),Ce=aa?"Free to try \xB7 Code on request":"Free \xB7 Early access",tt=(r,n="")=>"";function Qt(r){r.querySelectorAll("[data-cart]").forEach(n=>n.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation();let x=nt.find(S=>S.id===n.dataset.cart)||Yl().find(S=>S.id===n.dataset.cart),k=ra.toggle({id:x.id,name:x.name,href:x.href||"#/sound"});k&&Ge("add_to_cart",{item:x.id}),n.setAttribute("aria-pressed",String(k)),n.querySelector("span").textContent=k?"In cart":"Add to cart",t.sfx(k?"confirm":"select")}))}let ia=(r,n,y)=>`<button class="gb small" type="button" data-fsave="${r}|${n}" data-name="${he(y)}" aria-pressed="${vt.isSaved(r,n)}">${Xe.heart}<span>${vt.isSaved(r,n)?"Saved":"Save"}</span></button>`;function ya(r,n){r.querySelectorAll("[data-fsave]").forEach(y=>y.addEventListener("click",x=>{x.preventDefault(),x.stopPropagation();let[k,S]=y.dataset.fsave.split("|"),Z=vt.toggleSaved(k,S,y.dataset.name,n(k,S));Z&&Ge("save",{kind:k,item:S}),y.setAttribute("aria-pressed",String(Z)),y.querySelector("span").textContent=Z?"Saved":"Save",t.sfx(Z?"confirm":"select")}))}let La="All";function Pa(){let r;try{r=localStorage.getItem("lo.productsView")}catch{}nt.some(j=>!j.lookupOnly&&j.cat===La)||(La="All"),r!=="grid"&&r!=="large"&&(r=matchMedia("(max-width: 700px)").matches?"grid":"large");let n='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg>',y=j=>`<article class="file glass" data-href="${j.href}" data-cat="${j.cat}">
        <div class="file-v" data-sphere="${j.sphere}"><span class="file-ext">${j.ext}</span><span class="lv-badge">${j.live==="voice-orb"?n:""}${j.badge}</span></div>
        <div class="file-m"><h3><a class="file-link" href="${j.href}">${he(j.name)}</a></h3><p class="file-c">${j.cat}</p><p>${he(j.kind)}</p><p class="file-p">${ca(j.live).label}</p></div>
        <div class="file-a"><a class="gb small primary" href="${j.href}">${j.live==="voice-orb"?"Try it":"Open"}</a>${ia("product",j.id,j.name)}</div></article>`,x=j=>j.live?y(j):j.obj?`<article class="file glass" data-obj-card="${j.obj}" data-cat="${j.cat}" tabindex="0">
        <div class="file-v has-obj" data-obj="${j.obj}"><span class="file-ext">${j.ext}</span><span class="file-tag">New</span></div>
        <div class="file-m"><h3><a class="file-link" href="#/products?obj=${j.obj}" data-obj-open="${j.obj}">${he(j.name)}</a></h3><p class="file-c">${j.cat}</p><p>${he(j.kind)}</p><p class="file-p">${ca(j.obj).label}</p></div>
        <div class="file-a obj-a"><button class="gb small primary" type="button" data-obj-open="${j.obj}">Open</button>${ia("product",j.id,j.name)}</div></article>`:`<article class="file glass" data-href="${j.href}" data-cat="${j.cat}">
        <div class="file-v ${j.cls??""}${j.mini?" has-kit":""}${j.dark?" is-dark":""}"${j.sphere?` data-sphere="${j.sphere}"`:""}>${j.img?`<img src="${j.img}" alt="" draggable="false" loading="lazy"${j.pos?` style="object-position:${j.pos}"`:""}>`:""}${j.mini??""}<span class="file-ext">${j.ext}</span></div>
        <div class="file-m"><h3><a class="file-link" href="${j.href}">${he(j.name)}</a></h3><p class="file-c">${j.cat}</p><p>${he(j.kind)}</p><p class="file-p">${ca(j.fam,j.variant).label}</p></div>
        <div class="file-a ds-a">${`${j.fam==="orb"||zt(sa(j.fam))?`<a class="gb small" href="${j.href}${j.href.includes("?")?"&":"?"}${aa?'try=1">Try it \u2014 free':'get=1">Get it free'}</a>`:`<a class="gb small" href="${j.href}">Coming to early access</a>`}`}${ia("product",j.id,j.name)}</div></article>`;i.innerHTML=`
      <section class="dest shop">
        ${_e("products")}
        <header class="dh dh-row"><div><h1>All Products</h1><p class="dh-l">Interactive pieces for your website. Open any one to try it live.</p></div><div class="segbar view-tg" role="radiogroup" aria-label="View">${["grid","large"].map(j=>`<button class="pill" role="radio" type="button" data-pview="${j}" aria-checked="${j===r}">${j==="grid"?"Grid":"Large"}</button>`).join("")}</div></header>
        <div class="shop-cats" role="toolbar" aria-label="Filter by category"><div class="segbar">${["All",...["Orbs","Materials","Typography","Interaction","Controls"].filter(j=>nt.some(L=>!L.lookupOnly&&L.cat===j))].map(j=>`<button class="pill" type="button" data-cat="${j}" aria-pressed="${j===La}">${j}<span class="n">${j==="All"?nt.filter(L=>!L.lookupOnly).length:nt.filter(L=>!L.lookupOnly&&L.cat===j).length}</span></button>`).join("")}</div></div>
        <div class="file-grid${r==="grid"?" is-compact":""}">${nt.filter(j=>!j.lookupOnly).map(x).join("")}</div>
      </section>${Ne()}`,Qt(i),ya(i,(j,L)=>nt.find(G=>G.id===L)?.href??"#/products");let k=()=>document.documentElement.dataset.theme==="dark",S=j=>{let[L,G]=j.dataset.kit.split("|");return tr(L,G,{mini:!0,dark:k()})},Z=new IntersectionObserver(j=>j.forEach(L=>{let G=L.target;L.isIntersecting?G.srcdoc||(G.srcdoc=S(G)):G.srcdoc&&(G.removeAttribute("srcdoc"),G.src="about:blank")}),{rootMargin:"600px 0px"}),Q=new IntersectionObserver(j=>j.forEach(L=>L.target.contentWindow?.postMessage(L.isIntersecting?"lo:play":"lo:pause","*")));i.querySelectorAll(".file-v .kit-frame").forEach(j=>{Z.observe(j),Q.observe(j),j.addEventListener("load",()=>j.contentWindow?.postMessage("lo:play","*"))});let z=new MutationObserver(()=>i.querySelectorAll(".file-v .kit-frame[srcdoc]").forEach(j=>j.contentWindow?.postMessage(`lo:theme:${k()?"dark":"light"}`,"*")));z.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),lt.push(()=>{Z.disconnect(),Q.disconnect(),z.disconnect()}),i.querySelectorAll(".file[data-href]").forEach(j=>j.addEventListener("click",L=>{L.defaultPrevented||L.target.closest("button, a")||(t.sfx("open"),location.hash=j.dataset.href)})),i.querySelectorAll("[data-obj]").forEach(j=>{let L=Hr(j,j.dataset.obj);lt.push(()=>L.dispose())});let te=j=>{t.sfx("open"),location.hash=`#/products/${j}`};i.querySelectorAll("[data-obj-card]").forEach(j=>{j.addEventListener("click",L=>{if(!L.target.closest("[data-fsave]")){if(L.target.closest("a.file-link")){if(L.button||L.metaKey||L.ctrlKey||L.shiftKey)return;L.preventDefault()}te(j.dataset.objCard)}}),j.addEventListener("keydown",L=>{(L.key==="Enter"||L.key===" ")&&L.target===j&&(L.preventDefault(),te(j.dataset.objCard))})});let Ae=()=>{i.querySelectorAll(".shop-cats [data-cat]").forEach(j=>j.setAttribute("aria-pressed",String(j.dataset.cat===La))),i.querySelectorAll(".file-grid .file").forEach(j=>{j.hidden=La!=="All"&&j.dataset.cat!==La})};if(i.querySelectorAll(".shop-cats [data-cat]").forEach(j=>j.addEventListener("click",()=>{La=j.dataset.cat,t.sfx("select"),Ae()})),Ae(),ue.query.obj&&Jr.includes(ue.query.obj)){location.replace(`#/products/${ue.query.obj}`);return}i.querySelectorAll("[data-sphere]").forEach(j=>{let L=cr(j,j.dataset.sphere,{reduced:o,interactive:r!=="grid"});lt.push(()=>L.dispose())}),i.querySelectorAll("[data-pview]").forEach(j=>j.addEventListener("click",()=>{if(j.dataset.pview===r)return;try{localStorage.setItem("lo.productsView",j.dataset.pview)}catch{}t.sfx("press");let L=scrollY;lt.forEach(G=>G()),lt=[],Pa(),scrollTo(0,L)}))}function $o(r){let n=kr.find(S=>S.id===r),y=ca(r),x=Wa(r,n.name);document.title=`${n.name} \xB7 Products \xB7 The Light Orb`,i.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/products">${Xe.back}<span>Products</span></a>
        <div class="pd-grid">
          <div class="pd-stage glass obj-pstage" data-ostage><span class="obj-hint">${he(n.hint)}</span></div>
          <div class="pd-info info-dark">
            <p class="kicker">${he(n.cat)}</p><h1>${he(n.name)}</h1><p class="lede">${he(n.lead)}</p>
            <div class="buy">${wr(y,r)}<div class="acts eq">${mr(r,n.name)}${ia("product",`obj-${r}`,n.name)}</div></div>
            <p class="note pd-pnote buy-note">${he(mi(y))}</p>
            <div class="obj-custom" data-ocust><p class="lbl">Customise</p></div>
            <dl class="facts ds-facts"><dt>Includes</dt><dd>Web Component and React module \xB7 Offline demo page \xB7 A settings file you export from here \xB7 Keyboard, touch and reduced-motion support</dd>
              <dt>Questions</dt><dd><a href="mailto:hello@thelightorb.com">hello@thelightorb.com</a></dd></dl>
            <div class="acts"><button class="gb small" type="button" data-export>Export settings</button></div>
          </div>
        </div>
      </section>${x?bo(x):""}${Ne()}`;let k=Es(i.querySelector("[data-ostage]"),i.querySelector("[data-ocust]"),r,i.querySelector("[data-export]"));if(lt.push(()=>k.dispose()),fr(i,{audio:t}),ya(i,()=>`#/products/${r}`),x){let S=xo(i,{story:x,reduced:o,demos:{},act:{top:()=>i.querySelector(".pd")?.scrollIntoView({behavior:o?"auto":"smooth",block:"start"})}});lt.push(()=>S.dispose())}Ge("product_open",{product:r})}function Ta(){if(Jr.includes(ue.id)){$o(ue.id);return}let r=_n(ue.id);if(r){let z=Wn(r,{page:i,product:p,audio:t,esc:he,ICON:Xe,footer:Ne,cleanup:lt,track:Ge,reduced:o,desk:{deskHTML:bo,bindDesk:xo,storyOf:Wa}});dt={id:r.id,el:z.el,host:z.host,live:!0},ya(i,()=>`#/products/${r.id}`);return}let n=sa(ue.id);if(!n||n.published===!1){location.replace("#/products");return}let y=zt(n),x=n.id==="orb"?Gt:Bt[n.id],k=x.some(z=>z.id===ue.query.variant)?ue.query.variant:x[0].id,S=z=>x.find(te=>te.id===z),Z=z=>n.id==="orb"?`orb-${z}`:z===x[0].id?n.id:`${n.id}-${z}`;if(i.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/products">${Xe.back}<span>Products</span></a>
        <div class="pd-grid">
          <div class="pd-stage glass${y?" has-kit":""}" data-stage>${y?$t(n.id,k,!1):Tl(n.id)}</div>
          <div class="pd-info info-dark">
            <p class="kicker">${he(n.id==="orb"?"Sphere":n.kind)}</p><h1>${he(n.name)}</h1>
            <p class="lede">${he(Eo[n.id].lede)}</p>
            ${x?`<div class="vars"><p class="lbl">Version</p><div class="segbar" role="radiogroup" aria-label="Version">${x.map(z=>`<button class="pill" role="radio" type="button" data-variant="${z.id}" aria-checked="${z.id===k}">${z.name}</button>`).join("")}</div><p class="var-line" data-vline></p></div>`:""}
            <div class="buy">${wr(ca(n.id,k),n.id)}<div class="acts eq">${n.id==="orb"||y?aa?mr(n.id,n.name):`<button class="gb small primary" type="button" data-getfree>${Xe.check}<span>Get it free</span></button>`:'<button class="gb small primary" type="button" data-soon aria-expanded="false" aria-controls="ea-wait"><span>Coming to early access</span></button>'}${ia("product",Z(k),n.name)}</div></div><p class="note pd-pnote buy-note" data-pnote>${mi(ca(n.id,k))}</p>
            ${aa&&(n.id==="orb"||y)?"":n.id==="orb"?$l():y?El():`<div class="ea-wait" id="ea-wait" hidden>${Ar("product",{compact:!0,label:`Get an email when ${he(n.name)} is ready to take, free`})}</div>`}
            ${lr?`<a class="studio-lock" href="#/studio?family=${n.id}">${Xe.check}<span><b>Customise in Studio</b><small>Open to everyone \xB7 Beta</small></span></a>`:'<p class="pd-studio-soon">Customising in Studio is not available yet \u2014 Studio is coming soon. <a href="#/studio">Get notified</a></p>'}
            <dl class="facts ds-facts"><dt>What it does</dt><dd>${he(Eo[n.id].does)}</dd><dt>You receive</dt><dd>${n.receives.map(he).join(" \xB7 ")}</dd>
              <dt>Availability</dt><dd>${n.id==="orb"||y?aa?"Try every version free, right here, no sign-up. The Clear version is free with its code; the others have a price, and checkout opens soon.":"Free during early access \u2014 the code is on this page.":"Not available to take yet. Leave your email above to hear when it is."}</dd>
              <dt>Licence</dt><dd>Personal and commercial use; no resale of the source. <a href="#/licence">Read the licence</a></dd>
              <dt>Questions</dt><dd><a href="mailto:hello@thelightorb.com">hello@thelightorb.com</a></dd></dl>
            <details class="acc"><summary>Compatibility and installation</summary><p>${he(Eo[n.id].tech)}</p></details>
          </div>
        </div>
        ${Wa(n.id,n.name)?"":`<p class="pd-scroll"><a href="#pd-more" data-pdmore>More about ${he(n.name)} ${Xe.down}</a></p>`}
      </section>${Wa(n.id,n.name)?bo(Wa(n.id,n.name)):gs(n.id,n.name)}${Ne()}`,Qt(i),ya(i,(z,te)=>`#/products/${n.id}`),Al(n.id,i.querySelector("[data-stage]"),k),i.querySelector("[data-pdmore]")?.addEventListener("click",z=>{z.preventDefault(),i.querySelector("#pd-more")?.scrollIntoView({behavior:o?"auto":"smooth",block:"start"})}),Wa(n.id,n.name)){let z=xo(i,{story:Wa(n.id,n.name),reduced:o,demos:{sphere:Qs(cr)},act:{top:()=>i.querySelector(".pd")?.scrollIntoView({behavior:o?"auto":"smooth",block:"start"}),request:()=>{let te=i.querySelector("[data-request-code]");te?.scrollIntoView({behavior:o?"auto":"smooth",block:"center"}),setTimeout(()=>te?.click(),o?0:450)}}});lt.push(()=>z.dispose())}Ge("product_open",{product:n.id,variant:k});let Q=z=>{dt.sphere?.setKind(z),dt.bloomMic?.setVariant(z),n.id==="orb"&&dt&&ql(z===Ml);let te=S(z),Ae=i.querySelector("[data-stage]");if(y){Ae.querySelector("[data-kit]").dataset.kit=`${n.id}|${z}|0`,et(Ae);let le=i.querySelector(".free-c code");le&&(le.textContent=tr(n.id,z))}else n.id!=="orb"&&(Ae.classList.remove("v-dark","v-frost","v-compact"),te.cls&&Ae.classList.add(te.cls),te.p&&wt.set(te.p));i.querySelectorAll("[data-variant]").forEach(le=>le.setAttribute("aria-checked",String(le.dataset.variant===z)));let j=i.querySelector("[data-vline]");j&&(j.textContent=S(z).line);{let le=ca(n.id,z);i.querySelector(".price-big").outerHTML=wr(le,n.id),i.querySelector("[data-pnote]").textContent=mi(le)}if(n.id==="orb"){let le=z==="clear",Te=i.querySelector("[data-free]");Te&&(Te.hidden=!le);let Pe=i.querySelector(".free-c code");Pe&&(Pe.textContent=vi(z))}let L=i.querySelector("[data-cart]");if(L&&(L.dataset.cart=Z(z)),L){let le=ra.has(L.dataset.cart);L.setAttribute("aria-pressed",String(le)),L.querySelector("span").textContent=le?"In cart":"Add to cart"}let G=i.querySelector("[data-fsave]");G.dataset.fsave=`product|${Z(z)}`;let Se=vt.isSaved("product",Z(z));G.setAttribute("aria-pressed",String(Se)),G.querySelector("span").textContent=Se?"Saved":"Save",history.replaceState(null,"",`#/products/${n.id}${z===x[0].id?"":`?variant=${z}`}`)};Ll(i,y?n.id:"orb"),fr(i,{audio:t,variant:()=>i.querySelector("[data-variant][aria-checked=true]")?.dataset.variant??"",autoOpen:!!(ue.query.request||ue.query.get)}),ue.query.get&&setTimeout(()=>i.querySelector("[data-getfree]")?.click(),60),i.querySelector("[data-download]")?.addEventListener("click",()=>{let z=i.querySelector("[data-variant][aria-checked=true]")?.dataset.variant??x[0].id;yi(`${n.id}-${z}.html`,tr(n.id,z)),t.sfx("confirm"),Ge("free_code_download",{product:n.id,variant:z})}),i.querySelector("[data-getfree]")?.addEventListener("click",()=>{let z=i.querySelector("[data-freebtn]");z?.getAttribute("aria-expanded")!=="true"&&z?.click(),z?.scrollIntoView({block:"nearest",behavior:"smooth"})}),i.querySelector("[data-soon]")?.addEventListener("click",z=>{let te=i.querySelector("#ea-wait"),Ae=te.hidden;te.hidden=!Ae,z.currentTarget.setAttribute("aria-expanded",String(Ae)),t.sfx(Ae?"open":"close"),Ae&&te.querySelector("input")?.focus()}),i.querySelectorAll("[data-variant]").forEach(z=>z.addEventListener("click",()=>{Q(z.dataset.variant),t.sfx("select"),Ge("variant",{product:n.id,variant:z.dataset.variant})})),Q(k)}let vi=(r="clear")=>`<div data-light-orb${r==="clear"?"":` data-variant="${r}"`} style="width:320px;height:320px"></div>
<script type="module" src="https://thelightorb.com/embed/v1/orb.js"><\/script>`,Sl=vi();function $l(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${Xe.check}<span>Get the code \u2014 free</span></button>
      <p class="note pd-facts">Works on any website \xB7 one script tag, about 170 KB compressed \xB7 respects reduced motion</p>
      <div class="free-p" id="free-code" hidden><p class="note">Paste this where the Orb should appear. It fills the box you give it; drag to turn it, tap to stir it.</p>
        <pre class="free-c glass"><code>${he(Sl)}</code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function El(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${Xe.check}<span>Get the code \u2014 free</span></button>
      <p class="note pd-facts">Works on any website \xB7 one .html file, about 14 KB, no dependencies \xB7 respects reduced motion</p>
      <div class="free-p" id="free-code" hidden><p class="note">One self-contained file: open it in a browser, or paste its style, markup and script into your page. Change the material with the --cc-* variables at the top.</p>
        <pre class="free-c glass kit-code"><code></code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button><button class="gb small" type="button" data-download><span>Download .html</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function yi(r,n){let y=URL.createObjectURL(new Blob([n],{type:"text/html"})),x=document.createElement("a");x.href=y,x.download=r,document.body.append(x),x.click(),x.remove(),setTimeout(()=>URL.revokeObjectURL(y),1e3)}function Ll(r,n="orb"){let y=r.querySelector("[data-freebtn]");if(!y)return;let x=r.querySelector("#free-code"),k=r.querySelector("[data-copy]");y.addEventListener("click",()=>{let S=x.hidden;x.hidden=!S,y.setAttribute("aria-expanded",String(S)),t.sfx(S?"open":"select"),S&&Ge("free_code_open",{product:n})}),k.addEventListener("click",async()=>{let S=!1;try{await navigator.clipboard.writeText(r.querySelector(".free-c code").textContent),S=!0}catch{let Z=document.createRange();Z.selectNodeContents(r.querySelector(".free-c code"));let Q=getSelection();Q.removeAllRanges(),Q.addRange(Z)}k.querySelector("span").textContent=S?"Copied":"Selected \u2014 press Copy",S&&(t.sfx("select"),Ge("free_code_copy",{product:n})),setTimeout(()=>{k.isConnected&&(k.querySelector("span").textContent="Copy code")},2200)})}let Eo={orb:{lede:"A 3D sphere you can place in your own work. Choose the material and what it holds inside.",does:"Drag to turn it; it keeps turning slowly on its own. A tap makes whatever is in it move a little faster. Twenty versions: clear glass, liquid metal, porcelain, bloom, and glass holding a light, points of light, glitter or beads.",tech:"An ES module built on Three.js r186 (WebGL 2). Works in current Chrome, Safari, Edge and Firefox. The integration notes explain how to place it in a page and choose a version."},"orb-slider":{lede:"A glass capsule whose thumb is a small orb with its own slow inner light. Slide it to enter.",does:"A slide-to-confirm control. Drag the orb; let go and a spring carries it home, or to the end to confirm (it then sends a confirm event). Arrow keys, Enter, Home and End work too.",tech:"One HTML file: CSS variables for the material and a few lines of plain JavaScript. No framework, no WebGL. Current Chrome, Safari, Edge and Firefox."},"orb-wave":{lede:"The ripple the Orb leaves on the floor when it lands, drawn in light.",does:"Each touch raises a wave that spreads across the surface and fades.",tech:"A full-screen shader with an impact API: position, strength and scale. Needs WebGL 2."},"background-pack":{lede:"Two environments in one pack: a dark world and a light one, and the change between them.",does:"Moves smoothly from dark to light, controlled by a single exposure value.",tech:"A full-screen shader with exposure, horizon and lamp controls. Needs WebGL 2."},"crystal-controls":{lede:"Buttons, switches, fields and sliders in six glass materials. A highlight follows the pointer; presses give like glass on a spring.",does:"Every control has default, hover, focus, pressed, selected, disabled and loading states. Choose Clear, Smoke, Chrome, Porcelain, Gel or Bloom; each is a set of CSS variables.",tech:"One HTML file: plain CSS and a few lines of JavaScript for the pointer light and the slider spring. No framework. Current Chrome, Safari, Edge and Firefox."}};function Tl(r){return r==="orb"?'<div class="pd-sph" data-sph></div><span class="pd-hint">Drag to turn it. Tap to stir it.</span><button class="gb gc bloom-mic" data-bloom-mic type="button" aria-label="Turn the microphone on" aria-pressed="false" title="Let your voice move the Orb"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 10v1a6 6 0 0 0 12 0v-1M12 17v4M9 21h6"/></svg></button><span class="bloom-mic-status" data-bloom-mic-status role="status" aria-live="polite"></span>':r==="orb-slider"?'<div class="cap" data-cap role="slider" tabindex="0" aria-label="Slide to enter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="cap-l">slide to enter</span></div>':r==="orb-wave"?'<button class="gb small pd-btn" type="button" data-drop>Drop the Orb</button><span class="pd-hint">Or tap the floor.</span>':r==="background-pack"?'<div class="segbar pd-seg" role="radiogroup" aria-label="Environment"><button class="pill" role="radio" type="button" data-env="0" aria-checked="false">Dark world</button><button class="pill" role="radio" type="button" data-env="1" aria-checked="true">Light</button></div>':`<div class="kit"><button class="gb primary" type="button">Continue</button><button class="gb" type="button">Secondary</button><button class="gb gc" type="button" aria-label="Confirm">${Xe.check}</button>
      <button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><input class="gi" placeholder="Your name" aria-label="Example field">
      <input class="grange" type="range" value="60" aria-label="Example slider" style="--p:60%"><button class="gb" type="button" disabled>Disabled</button><button class="gb" type="button" aria-busy="true">Loading</button></div>`}let dt=null,Ml="clear";function ql(r){if(!dt)return;dt.real=r;let n=dt.el.querySelector("[data-sph]");if(n)for(let y of n.children)y.style.visibility=r?"hidden":"";r?p.show(Ht(ga("original").config)):p.hide()}function Al(r,n,y="clear"){if(dt={id:r,el:n,cap:0,drop:null},!(r==="crystal-controls"||r==="orb-slider")){if(r!=="orb"&&p.show(Ht(ga("original").config)),r==="orb"){dt.sphere=cr(n.querySelector("[data-sph]"),y,{reduced:o}),lt.push(()=>dt?.sphere?.dispose());let x=n.querySelector("[data-bloom-mic]"),k=n.querySelector("[data-bloom-mic-status]"),S=t.microphone({onState({status:G,error:Se}){let le=G==="listening",Te=G==="requesting";x.setAttribute("aria-pressed",String(le)),x.setAttribute("aria-label",le?"Turn the microphone off":Te?"Cancel the microphone request":"Turn the microphone on"),x.dataset.state=G,x.title=le?"Microphone on \u2014 your voice moves the Orb":Te?"Waiting for microphone permission":"Let your voice move the Orb",k.textContent=Se||(le?"Listening":""),k.classList.toggle("is-error",!!Se)},onLevel(G){x.style.setProperty("--input-level",G.toFixed(3))}});dt.sphere.setVoiceInput(()=>S.sample()),dt.bloomMic={setVariant(){x.hidden=!1}},x.addEventListener("click",G=>{G.stopPropagation(),t.sfx("select"),S.toggle()}),lt.push(()=>S.dispose());let Z=n.querySelector("[data-sph]"),Q=null,z=0,te=0,Ae=0,j=()=>{Ae=0,!(!dt?.real||Q)&&(z*=.94,te+=z,p.orb?.setObjectYaw(te),Math.abs(z)>5e-4&&(Ae=requestAnimationFrame(j)))};Z.addEventListener("pointerdown",G=>{dt?.real&&(Q={x:G.clientX,t:performance.now(),moved:0},Z.setPointerCapture(G.pointerId))}),Z.addEventListener("pointermove",G=>{if(!Q||!dt?.real)return;let Se=G.clientX-Q.x;Q.x=G.clientX,Q.moved+=Math.abs(Se),z=Se*.012,te+=z,p.orb?.setObjectYaw(te)});let L=()=>{if(!Q)return;let G=Q.moved<6;Q=null,G?(p.orb?.nudge(.8),t.sfx("detent")):Ae||(Ae=requestAnimationFrame(j))};Z.addEventListener("pointerup",L),Z.addEventListener("pointercancel",L),lt.push(()=>{cancelAnimationFrame(Ae),dt?.real&&p.hide()})}if(r==="orb-slider"){let x=n.querySelector("[data-cap]"),k=null,S=Q=>{dt.cap=xa(Q),x.setAttribute("aria-valuenow",Math.round(dt.cap*100))};x.addEventListener("pointerdown",Q=>{k={x:Q.clientX,v:dt.cap},x.setPointerCapture(Q.pointerId),t.sfx("select")}),x.addEventListener("pointermove",Q=>{k&&S(k.v+(Q.clientX-k.x)/(x.offsetWidth-x.offsetHeight))});let Z=()=>{k&&(k=null,p.orb?.nudge(.5),dt.cap>.9?(S(1),t.sfx("confirm")):(S(0),t.sfx("select")))};x.addEventListener("pointerup",Z),x.addEventListener("pointercancel",Z),x.addEventListener("keydown",Q=>{Q.key==="ArrowRight"&&S(dt.cap+.1),Q.key==="ArrowLeft"&&S(dt.cap-.1),Q.key==="End"&&S(1),Q.key==="Home"&&S(0)})}if((r==="orb-wave"||r==="background-pack")&&(no(n),e.addBackdrop(wt.canvas),wt.set({horizon:.3,strength:1,scale:70}),wt.setExposure(r==="background-pack"?1:0,!0),r==="orb-wave"&&(n.addEventListener("pointerdown",x=>{if(x.target.closest("button"))return;let k=n.getBoundingClientRect(),S=x.clientY-k.top;S>k.height*.55&&(wt.impact(x.clientX-k.left,S),p.orb?.nudge(.7),t.sfx("detent"))}),n.querySelector("[data-drop]").addEventListener("click",()=>{dt.drop={vy:0,y:null,contacts:0},t.sfx("select")})),r==="background-pack"&&n.querySelectorAll("[data-env]").forEach(x=>x.addEventListener("click",()=>{wt.setExposure(+x.dataset.env),t.sfx("open"),n.querySelectorAll("[data-env]").forEach(k=>k.setAttribute("aria-checked",String(k===x)))}))),r==="crystal-controls"){n.querySelectorAll(".gb:not([disabled])").forEach(k=>k.addEventListener("click",()=>t.sfx("select"))),n.querySelector(".gsw").addEventListener("click",k=>{let S=k.currentTarget;S.setAttribute("aria-checked",String(S.getAttribute("aria-checked")!=="true")),t.sfx("select")}),n.querySelector(".gi").addEventListener("input",k=>{k.isTrusted&&t.sfx("type")});let x=n.querySelector(".grange");x.addEventListener("input",()=>{x.style.setProperty("--p",`${x.value}%`),t.sfx("level",x.value/100)})}}}let Vr=2,Lo=(r,n="")=>`<span class="dev" data-dev><span class="dev-body"><span class="dev-screen"><img src="${r.cover.src}" alt="${he(n)}" draggable="false" decoding="async" fetchpriority="high"${n?' width="1600" height="1000"':""}></span><span class="dev-glare" aria-hidden="true"></span></span><span class="dev-floor" aria-hidden="true"></span></span>`;function wi(r){o||r.querySelectorAll("[data-dev]").forEach(n=>{n.addEventListener("pointermove",y=>{let x=n.getBoundingClientRect();n.style.setProperty("--ry",`${((y.clientX-x.left)/x.width-.5)*10}deg`),n.style.setProperty("--rx",`${((y.clientY-x.top)/x.height-.5)*-8}deg`)}),n.addEventListener("pointerleave",()=>{n.style.removeProperty("--ry"),n.style.removeProperty("--rx")})})}let Cl=r=>`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${r.name} \u2014 starter</title>
<!-- ${r.name} starter, from The Light Orb (free during early access; see the licence).
     The Orb comes from the hosted embed; change data-variant to any version, e.g. chrome. -->
<style>
:root{--bg:#F3F3F1;--ink:#262827;--muted:#616562;--line:rgba(38,40,39,.1)}
*{box-sizing:border-box}
body{margin:0;background:radial-gradient(90% 70% at 50% 30%,#ffffff,var(--bg) 70%);color:var(--ink);font:400 16px/1.5 "Helvetica Neue",Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
main{min-height:100vh;display:grid;place-items:center;align-content:center;gap:28px;padding:48px 20px;text-align:center}
.orb{width:min(300px,64vw);aspect-ratio:1}
h1{margin:0;font-weight:300;font-size:clamp(30px,6vw,52px);letter-spacing:-.02em}
blockquote{margin:0 auto;max-width:34em;color:var(--muted);font-weight:300}
blockquote cite{display:block;margin-top:8px;font-size:13px;font-style:normal}
nav{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
nav a{display:inline-flex;align-items:center;height:44px;padding:0 22px;border-radius:999px;color:var(--ink);text-decoration:none;font-weight:500;font-size:14px;
  background:linear-gradient(180deg,#fff,#f6f7f6 55%,#eceeec);box-shadow:inset 0 2px 1px #fff,inset 0 -3px 4px -2px rgba(150,156,152,.35),0 0 0 1px rgba(38,40,39,.06),0 8px 18px -10px rgba(38,40,39,.32);transition:transform .4s cubic-bezier(.3,1.7,.45,1)}
nav a:hover{transform:translateY(-1px)}nav a:active{transform:scale(.97)}
nav a:focus-visible{outline:2px solid var(--ink);outline-offset:3px}
</style>
</head>
<body>
<main>
  <div class="orb" data-light-orb data-variant="clear"></div>
  <h1>Hello.</h1>
  <blockquote>Your quotation here.<cite>Its author</cite></blockquote>
  <nav aria-label="Destinations"><a href="#products">Products</a><a href="#templates">Templates</a><a href="#studio">Studio</a><a href="#sound">Sound</a></nav>
</main>
<script type="module" src="https://thelightorb.com/embed/v1/orb.js"><\/script>
</body>
</html>
`,jl=()=>{let r=Et.filter(y=>y.sector).length,n=Et.length-r;return[`${n} ${n===1?"template":"templates"}`,r?`${r} ${r===1?"sector":"sectors"}`:""].filter(Boolean).join(" \xB7 ")};function zl(){let r=Et.length+Vr;i.innerHTML=`
      <section class="dest tpl">
        <header class="dh"><h1>Complete compositions</h1></header>
        <div class="folder" data-folder>
          <div class="folder-tab glass"><span>Templates</span><small>${jl()}${Vr?` \xB7 ${Vr} in the making`:""}</small></div>
          <div class="folder-body glass"><span class="folder-glow" aria-hidden="true"></span><span class="folder-num" data-fnum aria-hidden="true"></span>
            <div class="folder-track" data-track role="listbox" aria-label="Templates" tabindex="0">
              ${Et.map((z,te)=>`<button class="tcard glass" type="button" role="option" data-t="${te}" aria-label="Open ${he(z.label??z.name)}">
                <span class="tcard-n">${String(te+1).padStart(2,"0")}</span>
                <span class="tcard-cv">${Lo(z)}</span>
                ${z.isNew?'<span class="tcard-new">New</span>':""}${z.category?`<span class="tcard-tag">${he(z.category.toLowerCase())}</span>`:""}<span class="tcard-t">${he(z.label??z.name)}</span><span class="tcard-l">${he(z.line)}</span></button>`).join("")}
              ${Array.from({length:Vr},(z,te)=>`<div class="tcard glass soon" aria-hidden="true"><span class="tcard-n">${String(Et.length+te+1).padStart(2,"0")}</span><span class="tcard-cv"><span class="soon-orb"></span><span class="soon-lbl">In the making</span></span><span class="tcard-t">Next composition</span><span class="tcard-l">Joining the collection soon.</span></div>`).join("")}
            </div>
            <div class="folder-open" data-open hidden></div>
            <div class="folder-ctl" data-fctl><button class="gb gc small" type="button" data-fstep="-1" aria-label="Previous">${Xe.prev}</button><span class="count" data-fcount></span><button class="gb gc small" type="button" data-fstep="1" aria-label="Next">${Xe.next}</button></div>
          </div>
        </div>
      </section>${Ne()}`;let n=i.querySelector("[data-track]"),y=[...n.children],x=i.querySelector("[data-fctl]"),k=0,S=z=>{y.forEach((te,Ae)=>{let j=Ae-k+g/340,L=Math.abs(j);te.style.transition=z||v?"none":"",te.style.transform=`translateX(calc(-50% + ${j*96}%)) translateZ(${-L*120}px) rotateY(${xa(-j*18,-30,30)}deg) scale(${1-Math.min(L,2)*.08})`,te.style.zIndex=String(10-Math.round(L)),te.style.opacity=String(L>2.2?0:1-L*.22),te.classList.toggle("on",Ae===k),te.tagName==="BUTTON"&&te.setAttribute("aria-selected",String(Ae===k))}),i.querySelector("[data-fnum]").textContent=String(k+1).padStart(2,"0"),i.querySelector("[data-fcount]").textContent=k<Et.length?`${String(k+1).padStart(2,"0")} / ${String(Et.length).padStart(2,"0")}`:"In the making",i.querySelectorAll("[data-fstep]").forEach(te=>{te.disabled=+te.dataset.fstep<0&&k===0||+te.dataset.fstep>0&&k===r-1})},Z=z=>{let te=xa(k+z,0,r-1);te!==k&&(k=te,t.sfx("detent")),S()};i.querySelectorAll("[data-fstep]").forEach(z=>z.addEventListener("click",()=>Z(+z.dataset.fstep))),n.addEventListener("keydown",z=>{z.key==="ArrowRight"&&(Z(1),z.preventDefault()),z.key==="ArrowLeft"&&(Z(-1),z.preventDefault())}),ee(n,Z,()=>S());let Q=z=>{let te=Et[z];t.sfx("open"),location.hash=te.sector?Po(Ba.find(Ae=>Ae.id===te.sector)):`#/templates/${te.id}`};y.forEach((z,te)=>z.tagName==="BUTTON"&&z.addEventListener("click",Ae=>{if(U){Ae.preventDefault();return}Q(te)})),S(!0)}function Fc(r){r.querySelectorAll("[data-vt]").forEach(n=>n.addEventListener("click",y=>{if(o||!document.startViewTransition||y.metaKey||y.ctrlKey)return;y.preventDefault();let x=n.getAttribute("href");r.querySelector("[data-dev]")?.style.setProperty("view-transition-name","tpl-device"),document.startViewTransition(()=>{history.pushState(null,"",x),ua()})}))}let Ol={"the-light-orb":{what:"The opening of this website as a starting point: the Orb hosts the page, a greeting arrives under it, a quotation follows and the visitor chooses where to go.",special:"The Orb is a live WebGL glass object, not a picture: it turns when dragged and answers a tap. The rest is quiet HTML and CSS around it.",pages:["One page: welcome, quotation and destination selector","Hosted Orb embed (any of its versions via data-variant)","Four destination links ready to rename"],responsive:"Fluid type and spacing; the Orb scales with the viewport and the destinations wrap onto several lines on phones.",tech:"Plain HTML and CSS with one ES module script (the hosted Orb embed, Three.js r186, WebGL 2). No framework, no build step. Current Chrome, Edge, Firefox and Safari.",use:"Download the starter, open it in a browser, then edit the greeting, quotation and links. Change data-variant on the Orb to switch its material.",availability:"The starter file is free during early access. The full composition you see on this site is not packaged as a download yet.",starter:["One .html file you open in any browser","The live Orb from the hosted embed, any version","Greeting, quotation slot and four destination links, ready to edit","Fluid layout for phones and large screens"],full:["The arrival sequence: the Orb hosting the page as you scroll","Quotation scene and the destination selector with its motion","Narration and glass sound effects","Source files, documentation and a licence for the whole composition"]}};function Il(){let r=Et.find(L=>L.id===ue.id);if(!r){location.replace("#/templates");return}if(r.sector){location.replace(Po(Ba.find(L=>L.id===r.sector)));return}let n=Ol[r.id]??{},y=(L,G)=>G?`<dt>${L}</dt><dd>${G}</dd>`:"",x=ca(r.id),k=r.label?r.label.replace(/\b\w/g,L=>L.toUpperCase()):r.name,S=r.demo??"intro.html?skip#/",Z=r.demo?`<a class="gb small primary" href="${r.demo}" target="_blank" rel="noopener" aria-label="Open the full website, opens in a new tab">Open full website</a>`:r.starter&&!0?'<button class="gb small primary" type="button" data-starter>Download starter \u2014 free</button>':'<a class="gb small primary" href="#/">View it live</a>';i.innerHTML=`
      <section class="pd tpd">
        <a class="back tl" href="#/templates">${Xe.back}<span>Templates</span></a>
        <div class="pd-grid">
          <div class="tpd-stage">
            <div class="tpd-glass glass">
              <figure class="pd-stage cover-big" data-tcover>${Lo(r,`The beginning of the ${r.name} template.`)}
                <button class="gb small primary tpd-play" type="button" data-play-live aria-label="Play: scroll the real ${he(k)} website here">${Xe.play}<span>Scroll the website</span></button></figure>
              <div class="tpd-live" data-live hidden><div class="tpd-frame" data-frame><iframe title="${he(k)} \u2014 live preview" data-src="${S}"></iframe></div></div>
            </div>
            <div class="tpd-bar"><div class="segbar" role="radiogroup" aria-label="Preview">
              <button class="pill" role="radio" type="button" data-pv="cover" aria-checked="true">Cover</button>
              <button class="pill" role="radio" type="button" data-pv="1280" aria-checked="false">Desktop</button>
              <button class="pill" role="radio" type="button" data-pv="390" aria-checked="false">Phone</button></div>
              <span class="note" data-covermeta></span></div>
          </div>
          <div class="pd-info"><p class="kicker">${he(r.category??"Template")} \xB7 Templates ${String(Et.indexOf(r)+1).padStart(2,"0")}</p><h1>${he(k)}</h1>${r.credit?`<p class="fo-label">${he(r.credit)}</p>`:""}<p class="lede">${he(n.what??r.line)}</p>
            <div class="buy">${wr(x,r.id)}<div class="acts eq">${Z}${ia("template",r.id,r.name)}</div></div>
            <p class="note buy-note">${he(x.note.replace(/^Launch price · later \d+ €\. /,""))} ${Fr}${r.demo?" The demo runs on its own, with purchases disabled.":r.starter&&!0?" The starter (.html) is free now; the complete template is in development.":""}</p>
            <dl class="facts">
              ${y("Sections",(n.pages??r.includes).map(he).join(" \xB7 "))}
              ${y("What makes it",he(n.special??""))}
              ${y("Responsive",he(n.responsive??""))}
              ${y("Built with",he(n.tech??""))}
              ${y("Format",r.demo?"Ecommerce website \xB7 desktop, tablet and phone":"Single-page website \xB7 desktop and phone")}
            </dl>
            <a class="studio-lock" href="#/design"><span><b>Want one like it for your brand?</b><small>Custom web design by The Light Orb</small></span></a>
          </div>
        </div>
      </section>${Ne()}`,i.querySelector("[data-play-live]")?.addEventListener("click",()=>i.querySelector('[data-pv="1280"]').click()),wi(i),i.querySelector("[data-tcover] [data-dev]")?.style.setProperty("view-transition-name","tpl-device"),ya(i,(L,G)=>`#/templates/${G}`),i.querySelector("[data-starter]")?.addEventListener("click",()=>{yi(`${r.id}-starter.html`,Cl(r)),t.sfx("confirm"),Ge("template_starter_download",{template:r.id})});let Q=i.querySelector("[data-tcover]"),z=i.querySelector("[data-live]"),te=i.querySelector("[data-frame]"),Ae=te?.querySelector("iframe"),j=()=>{let L=+te.dataset.w||1280,G=L>700?800:844,Se=Math.min(1,z.clientWidth/L);Object.assign(Ae.style,{width:`${L}px`,height:`${G}px`,transform:`scale(${Se})`}),te.style.height=`${G*Se}px`,te.style.width=`${L*Se}px`};te&&i.querySelectorAll("[data-pv]").forEach(L=>L.addEventListener("click",()=>{te&&i.querySelectorAll("[data-pv]").forEach(le=>le.setAttribute("aria-checked",String(le===L))),t.sfx("press");let G=L.dataset.pv,Se=()=>{Q.hidden=!0,Q.classList.remove("is-loading"),z.hidden=!1,j()};if(G==="cover"){Q.hidden=!1,Q.classList.remove("is-loading"),z.hidden=!0;return}if(te.dataset.w=G,Ge("template_live_preview",{template:r.id,width:G}),Ae.src){Se();return}Q.hidden=!1,z.hidden=!0,Q.classList.add("is-loading"),Ae.addEventListener("load",()=>setTimeout(()=>{i.querySelector('[data-pv][aria-checked="true"]')?.dataset.pv!=="cover"?Se():Q.classList.remove("is-loading")},1400),{once:!0}),Ae.src=Ae.dataset.src})),te&&(addEventListener("resize",j),lt.push(()=>removeEventListener("resize",j))),fetch(r.cover.meta).then(L=>L.json()).then(L=>{let G=i.querySelector("[data-covermeta]");G&&(G.textContent=`Cover: a capture of the live website, ${L.captured}. Press play, or Desktop and Phone, to scroll the real site here.`)}).catch(()=>{})}let Pl=()=>Lt?"https://thelightorb.com/#/templates":"#/templates",Rl=()=>Lt?"https://thelightorb.com/":"#/";function Dl(r){let n=Lr(r.id),y=[...new Set(n.map(S=>S.category))],x=y.includes(ue.query.c)?ue.query.c:"All";i.innerHTML=`
      <section class="dest shop sector">
        <a class="back tl" href="${Pl()}">${Xe.back}<span>Templates</span></a>
        <header class="dh dh-row sector-h"><div><p class="kicker">Website templates</p><p class="sector-line">${he(r.line)}</p></div>
          <h1 class="relief" aria-label="${he(r.name)}"><span aria-hidden="true">${he(r.name.toUpperCase())}</span></h1></header>
        ${y.length>1?`<div class="shop-cats" role="toolbar" aria-label="Filter by category"><div class="segbar">${["All",...y].map(S=>`<button class="pill" type="button" data-cat="${he(S)}" aria-pressed="${S===x}">${he(S)}<span class="n">${S==="All"?n.length:n.filter(Z=>Z.category===S).length}</span></button>`).join("")}</div></div>`:""}
        <div class="file-grid sector-grid">${n.map(S=>`<article class="file glass" data-href="#/${r.id}/${S.id}" data-cat="${he(S.category)}">
          <div class="file-v site-v"><img src="${S.cover.src}" alt="" draggable="false" decoding="async" fetchpriority="high"><span class="file-ext">Website</span></div>
          <div class="file-m"><h3><a class="file-link" href="#/${r.id}/${S.id}">${he(S.name)}</a></h3><p class="file-c">${he(S.category)}</p><p>${he(S.line)}</p></div>
          <div class="file-a"><a class="gb small primary" href="#/${r.id}/${S.id}">Open</a><a class="gb small" href="${S.demo}" target="_blank" rel="noopener" aria-label="Full website, opens in a new tab">Full website</a></div></article>`).join("")}</div>
        <p class="note sector-more">More ${he(r.name.toLowerCase())} websites are in the making. Only finished, working websites are listed.</p>
      </section>${Ne()}`,i.querySelectorAll(".file[data-href]").forEach(S=>S.addEventListener("click",Z=>{Z.target.closest("button, a")||(t.sfx("open"),location.hash=S.dataset.href)}));let k=()=>{i.querySelectorAll(".shop-cats [data-cat]").forEach(S=>S.setAttribute("aria-pressed",String(S.dataset.cat===x))),i.querySelectorAll(".sector-grid .file").forEach(S=>{S.hidden=x!=="All"&&S.dataset.cat!==x})};i.querySelectorAll(".shop-cats [data-cat]").forEach(S=>S.addEventListener("click",()=>{x=S.dataset.cat,t.sfx("select"),k()})),k()}function Bl(r){let n=Lr(r.id).find(Q=>Q.id===ue.id);if(!n){location.replace(`#/${r.id}`);return}document.title=`${n.name} \xB7 ${r.name} \xB7 The Light Orb`,i.innerHTML=`
      <section class="pd tpd">
        <a class="back tl" href="#/${r.id}">${Xe.back}<span>${he(r.name)}</span></a>
        <div class="pd-grid">
          <div class="tpd-stage">
            <div class="tpd-glass glass">
              <figure class="pd-stage cover-big" data-tcover>${Lo(n,`The beginning of the ${n.name} website.`)}
                <button class="gb small primary tpd-play" type="button" data-play-live aria-label="Play: scroll the real ${he(n.name)} website here">${Xe.play}<span>Scroll the website</span></button></figure>
              <div class="tpd-live" data-live hidden><div class="tpd-frame" data-frame><iframe title="${he(n.name)} \u2014 live preview" data-src="${n.demo}"></iframe></div></div>
            </div>
            <div class="tpd-bar"><div class="segbar" role="radiogroup" aria-label="Preview">
              <button class="pill" role="radio" type="button" data-pv="cover" aria-checked="true">Cover</button>
              <button class="pill" role="radio" type="button" data-pv="1280" aria-checked="false">Desktop</button>
              <button class="pill" role="radio" type="button" data-pv="390" aria-checked="false">Phone</button></div>
              <span class="note" data-covermeta></span></div>
          </div>
          <div class="pd-info"><p class="kicker">${he(n.category)} \xB7 ${he(r.name)} ${String(Lr(r.id).indexOf(n)+1).padStart(2,"0")}</p><h1>${he(n.name)}</h1><p class="lede">${he(n.line)}</p>
            <div class="buy">${wr(ca(n.id),n.id)}<div class="acts eq"><a class="gb small primary" href="${n.demo}" target="_blank" rel="noopener" aria-label="Open the full website, opens in a new tab">Open full website</a>${ia("template",`${r.id}-${n.id}`,n.name)}</div></div>
            <p class="note buy-note">${ca(n.id).note.replace(/^Launch price · later \d+ €\. /,"")} ${Fr} In the demo, the shop keeps a local cart only, with no payments or orders.</p>
            <dl class="facts"><dt>Sections</dt><dd>${n.sections.map(he).join(" \xB7 ")}</dd><dt>Working features</dt><dd>${n.features.map(he).join(" \xB7 ")}</dd><dt>Format</dt><dd>Single-page website \xB7 desktop and phone</dd></dl>
            <a class="studio-lock" href="${Lt?"https://thelightorb.com/#/design":"#/design"}"><span><b>Want one like it for your brand?</b><small>Custom web design by The Light Orb</small></span></a>
            <p class="note"><a href="${Rl()}">\u2190 The Light Orb</a></p>
          </div>
        </div>
      </section>${Ne()}`,wi(i),ya(i,()=>`#/${r.id}/${n.id}`);let y=i.querySelector("[data-tcover]"),x=i.querySelector("[data-live]"),k=i.querySelector("[data-frame]"),S=k.querySelector("iframe"),Z=()=>{let Q=+k.dataset.w||1280,z=Q>700?800:844,te=Math.min(1,x.clientWidth/Q);Object.assign(S.style,{width:`${Q}px`,height:`${z}px`,transform:`scale(${te})`}),k.style.height=`${z*te}px`,k.style.width=`${Q*te}px`};i.querySelectorAll("[data-pv]").forEach(Q=>Q.addEventListener("click",()=>{i.querySelectorAll("[data-pv]").forEach(Ae=>Ae.setAttribute("aria-checked",String(Ae===Q))),t.sfx("press");let z=Q.dataset.pv,te=()=>{y.hidden=!0,y.classList.remove("is-loading"),x.hidden=!1,Z()};if(z==="cover"){y.hidden=!1,y.classList.remove("is-loading"),x.hidden=!0;return}if(k.dataset.w=z,Ge("template_live_preview",{template:n.id,width:z}),S.src){te();return}y.hidden=!1,x.hidden=!0,y.classList.add("is-loading"),S.addEventListener("load",()=>setTimeout(()=>{i.querySelector('[data-pv][aria-checked="true"]')?.dataset.pv!=="cover"?te():y.classList.remove("is-loading")},1400),{once:!0}),S.src=S.dataset.src})),i.querySelector("[data-play-live]").addEventListener("click",()=>i.querySelector('[data-pv="1280"]').click()),addEventListener("resize",Z),lt.push(()=>removeEventListener("resize",Z)),fetch(n.cover.meta).then(Q=>Q.json()).then(Q=>{let z=i.querySelector("[data-covermeta]");z&&(z.textContent=`Cover: a capture of the live website, ${Q.captured}. Press play, or Desktop and Phone, to scroll the real site here.`)}).catch(()=>{})}function Fl(){let r=t.prefs.voice,n=[...Fi.map(L=>({group:L.full?"voices":"more",key:`voice_audition.${L.id}`,clip:"voice_audition",voice:L.id,title:L.name,tag:`${L.accent} \xB7 ${L.gender}`,sub:L.line,use:L.id,note:L.full?"":`Page narration in ${L.name}; other guide lines in ${Aa(L.lines).name}.`})),...["home","products","templates","studio","sound"].map(L=>({group:"guide",key:`${L}.${r}`,clip:L,voice:r,title:L==="home"?"Welcome":L[0].toUpperCase()+L.slice(1),sub:Zr[L]})),...Mr.map(L=>({group:"sfx",key:`sfx.${L.id}`,url:L.file,title:L.name,sub:L.line}))],y=(L,G,Se,le=!0)=>`<details class="sg"${le?" open":""}><summary><h2>${G}</h2><span class="sg-n">${n.filter(Te=>Te.group===L).length}</span><p>${Se}</p></summary><div class="sgrid">${n.filter(Te=>Te.group===L).map(Te=>`
      <article class="si si-row"><button class="si-play gb gc small" type="button" data-play="${Te.key}" aria-label="Play ${he(Te.title)}">${Xe.play}</button>
        <div class="si-t"><h3>${he(Te.title)}${Te.tag?`<span class="file-ext">${he(Te.tag)}</span>`:'<span class="file-ext">.m4a</span>'}</h3><p>${he(Te.sub)}</p>${Te.note?`<p class="note">${he(Te.note)}</p>`:""}</div>
        <div class="si-w" data-wave="${Te.key}" role="slider" tabindex="0" aria-label="Position in ${he(Te.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><canvas></canvas></div>
        <div class="si-m"><span class="si-d" data-dur="${Te.key}">\u2013:\u2013\u2013</span></div>
        <div class="si-x eq">${Te.use===r?'<span class="gb small" aria-label="Heart is the guide\u2019s voice"><span>Guide voice</span></span>':""}${Te.group!=="guide"?tt({id:`sound-${Te.key}`}):""}${ia("sound",Te.key,Te.title)}</div></article>`).join("")}</div></details>`;i.innerHTML=`
      <section class="dest snd-dest">
        ${_e("sound")}
        <header class="dh"><h1>Voices and sounds</h1><p class="dh-l">Twelve neural voices, each reading the same line. The guide always speaks with <b>${he(Aa(r).name)}</b>, the voice that says hello.</p></header>
        ${y("voices","Guide voices","Each voice reading the same line. The guide itself always speaks with Heart.")}
        ${y("more","More voices","Different characters for the guide. Compare them on the same line.",!1)}
        ${y("guide","Guide narration",`What the guide says on each page, in ${he(Aa(r).name)}\u2019s voice.`,!1)}
        ${y("sfx","Interface sounds","Short, quiet sounds for touch, panels and wheels.")}
      </section>${Ne()}`,i.querySelectorAll(".si").forEach(L=>{L.querySelector('[data-play^="sfx."]')&&(L.querySelector(".file-ext").textContent=".wav")}),ya(i,()=>"#/sound");let x=new Map,k=(L,G)=>{let Se=i.querySelector(`[data-dur="${CSS.escape(L)}"]`);Se&&(Se.textContent=G)},S=new Set,Z=L=>{S.has(L.key)||(S.add(L.key),(L.url?t.peaksUrl(L.url,80):t.peaks(L.clip,L.voice,80)).then(G=>{x.set(L.key,G),k(L.key,Nl(G.duration))}).catch(()=>{S.delete(L.key),k(L.key,"Unavailable")}))},Q="IntersectionObserver"in window?new IntersectionObserver(L=>L.forEach(G=>{if(!G.target.isConnected){Q.unobserve(G.target);return}if(G.isIntersecting){Q.unobserve(G.target);let Se=n.find(le=>le.key===G.target.dataset.wave);Se&&Z(Se)}}),{rootMargin:"200px 0px"}):null;i.querySelectorAll("[data-wave]").forEach(L=>Q?Q.observe(L):Z(n.find(G=>G.key===L.dataset.wave))),To=n;let z=L=>L.url?L.key:`${L.clip}.${L.voice}`;Qt(i);let te=(L,G=0)=>(Z(L),L.url?t.playUrl(L.key,L.url,{from:G}):t.play(L.clip,{voice:L.voice,kind:"audition",from:G}));i.querySelectorAll("[data-play]").forEach(L=>L.addEventListener("click",()=>{let G=n.find(le=>le.key===L.dataset.play),Se=z(G);t.state.clip===Se&&t.playing?t.pause():t.state.clip===Se&&t.state.status==="paused"?t.resume():te(G)})),i.querySelectorAll("[data-wave]").forEach(L=>{let G=n.find(Pe=>Pe.key===L.dataset.wave),Se=z(G),le=!1,Te=Pe=>{let Qe=L.getBoundingClientRect();return xa((Pe.clientX-Qe.left)/Qe.width)};L.addEventListener("pointerdown",async Pe=>{le=!0,L.setPointerCapture(Pe.pointerId);let Qe=Te(Pe);t.state.clip!==Se&&await te(G),t.seek(Qe)}),L.addEventListener("pointermove",Pe=>{le&&t.state.clip===Se&&t.seek(Te(Pe))}),L.addEventListener("pointerup",()=>{le=!1}),L.addEventListener("keydown",Pe=>{t.state.clip!==Se||!t.duration||(Pe.key==="ArrowRight"&&t.seek(t.position+1/t.duration),Pe.key==="ArrowLeft"&&t.seek(t.position-1/t.duration))})});let Ae=0,j=()=>{if(Ae=requestAnimationFrame(j),To!==n){cancelAnimationFrame(Ae);return}for(let L of i.querySelectorAll("[data-wave]")){let G=n.find(Da=>Da.key===L.dataset.wave);if(!G)continue;let Se=z(G),le=x.get(G.key),Te=L.firstElementChild,Pe=L.getBoundingClientRect();if(Pe.bottom<0||Pe.top>innerHeight)continue;let Qe=t.state.clip===Se,Zt=Qe?t.position:0,Ra=Qe?t.state.energy:0,st=Qe&&t.playing;L.setAttribute("aria-valuenow",Math.round(Zt*100));let pt=i.querySelector(`[data-play="${CSS.escape(G.key)}"]`);if(pt&&pt.dataset.on!==String(st)&&(pt.dataset.on=String(st),pt.innerHTML=st?Xe.pause:Xe.play,pt.setAttribute("aria-label",`${st?"Pause":"Play"} ${G.title}`)),!le)continue;let na=Math.min(devicePixelRatio||1,2);Te.width!==Math.round(Pe.width*na)&&(Te.width=Math.round(Pe.width*na),Te.height=Math.round(Pe.height*na));let wa=Te.getContext("2d");wa.setTransform(na,0,0,na,0,0),wa.clearRect(0,0,Pe.width,Pe.height);let ea=le.bins.length,Mi=Math.min(2,Pe.width/ea*.4),jo=Math.max(.5,(Pe.width-Mi*(ea-1))/ea),Ql=Pe.height/2;for(let Da=0;Da<ea;Da++){let qi=(Da+.5)/ea<=Zt,Zl=qi&&Math.abs((Da+.5)/ea-Zt)<2.5/ea?Ra:0,Ai=Math.max(2,(le.bins[Da]*.9+Zl*.2)*(Pe.height-4));wa.fillStyle=qi?"#262827":"rgba(38,40,39,.2)",wa.beginPath(),wa.roundRect(Da*(jo+Mi),Ql-Ai/2,jo,Ai,jo/2),wa.fill()}}};j(),lt.push(()=>cancelAnimationFrame(Ae))}let Nl=r=>`${Math.floor(r/60)}:${String(Math.round(r%60)).padStart(2,"0")}`;function Hl(){i.innerHTML=Fn()+Ne(),br(i,{sfx:t.sfx})}function _l(){if(kt&&(kt.leave(),kt=null),!0){i.innerHTML="",kt=Zn({api:e,audio:t,top:l,page:i,query:ue.query,ICON:Xe,flash:q,product:p,store:vt});return}i.innerHTML=`
      <section class="st-lock">
        <div class="lock-blur" aria-hidden="true"><i class="lb-bar"></i><i class="lb-sph"></i><i class="lb-ins"></i></div>
        <div class="lock-card glass dark">
          <span class="lock-i">${Xe.lock}</span>
          <p class="kicker">Studio</p><h1>For members</h1>
          <p>Shape the sphere: its material, its colour and what moves inside it. Studio opens with membership.</p>
          <div class="acts eq"><a class="gb small primary" href="#/membership">See membership</a><a class="gb small" href="#/products">Browse products</a></div>
        </div>
      </section>`}function Wl(r,n,{W:y,H:x}){let k=t.energy(),S=t.playing&&(t.state.kind==="guide"||t.state.kind==="audition"&&ue.name==="sound");a.setSpeech(S&&!qo()?k*(o?.35:.9):0),Ft+=((S&&!qo()||ye?1:0)-Ft)*Math.min(1,n*(S?4:1.2));{let z=r-Ie,te=z<0?0:z<3.5?za(z/.4):1-za((z-3.5)/1.6);a.setRibbon?.(Math.max(te,Ft))}p.orb?.setSpeech(t.playing&&t.state.kind==="audition"&&qo()?k*(o?.35:1):0);let Z=y<700,Q;if(kt)Q=kt.frame(r,n,{W:y,H:x}),p.frame(Q.product??null);else if(ue.name==="home"&&!Oo)Q=Kl(y,x,Z);else{let z=Gl(y,x,Z);if(Z){let te=performance.now()-Ua;Ao+=((te<700?.7:1)-Ao)*Math.min(1,n*6),z.vis=Ao}r-$i>.18&&($i=r,Si=!(t.playing||ye)&&(Vl(z)||matchMedia("(pointer:coarse)").matches&&!!document.activeElement?.matches("input,textarea,select"))),sr+=((Si?1:0)-sr)*Math.min(1,n*7),z.x+=(y-(Z?15:17)-z.x)*sr,z.d+=((Z?30:34)-z.d)*sr,z.vis=Math.max(z.vis*(1-sr*.25),sr>.5?.62:0),Q={warm:0,orb:z,emission:$e.emission}}if(!kt){let z=Jl(y,x,n);p.frame(z),z?.ground&&(Q.grounds||=[]).push({y:z.ground,x:z.x,d:z.d})}return X=kt?null:Q.orb,Xl(kt?Q.product&&ue.name==="studio"&&Ul()==="orb"?{...Q.product,passive:!0}:null:Q.orb),Q}let ki=null,To=[],Yl=()=>To.map(r=>({id:`sound-${r.key}`,name:r.title,href:"#/sound"})),Ul=()=>kt?.draft?.family??"orb",Mo=null;addEventListener("pointerdown",r=>{Mo=ue.name==="studio"&&h.classList.contains("passive")&&!h.hidden?{x:r.clientX,y:r.clientY,t:performance.now()}:null},!0),addEventListener("pointerup",r=>{let n=Mo;if(Mo=null,!n||Math.hypot(r.clientX-n.x,r.clientY-n.y)>5||performance.now()-n.t>350)return;let y=h.getBoundingClientRect();Math.hypot(r.clientX-(y.left+y.width/2),r.clientY-(y.top+y.height/2))>y.width/2||r.target.closest?.("button,a,input,select,label,.sx-ins,.st-top")||h.click()},!0);let Ma={x:0,y:0,t:0,v:0};addEventListener("pointermove",r=>{if(r.pointerType!=="mouse"||r.buttons)return;let n=performance.now(),y=Math.hypot(r.clientX-Ma.x,r.clientY-Ma.y),x=Math.max(8,n-Ma.t);if(y<2)return;Ma.v+=(y/x*1e3-Ma.v)*.35,Ma.x=r.clientX,Ma.y=r.clientY,Ma.t=n;let k=r.target.closest?.("[data-guide]")?"orb":r.target.closest?.(".gb,.gsw,.gi,.gsel,.pill,.arc-c,.dg-c,button,a")?"glass":"air";t.motion(Math.min(1,Ma.v/2e3),k)},{passive:!0});let nr=null;addEventListener("pointermove",r=>{if(ue.name!=="studio"||!(r.buttons&1)||!r.target.closest?.("[data-view], input[type=range]")){nr=null;return}let n=performance.now();if(nr){let y=Math.hypot(r.clientX-nr.x,r.clientY-nr.y)/Math.max(8,n-nr.t)*1e3;t.friction(Math.min(1,y/700))}nr={x:r.clientX,y:r.clientY,t:n}},{passive:!0});let qo=()=>!1,Ao=1,sr=0,Si=!1,$i=0,Ei="p,h1,h2,h3,h4,li,dd,dt,a,button,input,select,textarea,label,img,figcaption,blockquote,small,b,em,i,code,pre,form,summary,iframe,[role=slider]";function Vl(r){let n=r.d/2+6;for(let[y,x]of[[0,0],[-n,0],[0,-n],[-n*.7,-n*.7],[-n,n*.5]])for(let k of document.elementsFromPoint(r.x+y,r.y+x))if(!(k===h||k.closest?.(".lo-top")||k.tagName==="CANVAS")){if(!i.contains(k)){if(k===document.body||k===document.documentElement)break;continue}if(k.matches(Ei)||k.closest(Ei))return!0;break}return!1}let Li=0,Co=()=>{Li=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--lo-safe-bottom"))||0};Co(),addEventListener("resize",Co),window.visualViewport?.addEventListener("resize",Co);let Gl=(r,n,y)=>({x:r-(y?34:50),y:n-Li-(y?38:52),d:y?40:50,vis:1});function Xl(r){let n=r&&(r.vis??1)>.5;if(h.hidden=!n,h.classList.toggle("passive",!!r?.passive),n){let y=Math.max(44,r.d);Object.assign(h.style,{left:`${xa(r.x-y/2,0,innerWidth-y)}px`,top:`${xa(r.y-y/2,0,innerHeight-y)}px`,width:`${y}px`,height:`${y}px`})}}function Kl(r,n,y){let x=i.scrollTop/n,k=i.querySelector("[data-welcopy]"),S=i.querySelector("[data-qt]"),Z=i.querySelector(".wel-ctl"),Q=1-za((x-.04)/.2),z=Ot[ot],te=z?.getBoundingClientRect(),Ae=(i.querySelector(".qt")?.offsetTop??n)/n,j=(i.querySelector("#select")?.offsetTop??2*n)/n,L=i.querySelector("#sel-t"),G=L?(L.getBoundingClientRect().top+i.scrollTop-i.getBoundingClientRect().top)/n:2,Se=G-.8,le=Rc(x,.13,.3,Se-.22,Se),Te=[...Q>.01?[k,Z]:[],...le>.01?[S]:[],L,...Ot,i.querySelector(".arc-ctl"),i.querySelector(".sel-more"),i.querySelector(".ft")].filter(Boolean).map(pt=>pt.getBoundingClientRect()).filter(pt=>pt.width&&pt.height&&pt.bottom>0&&pt.top<n&&pt.right>0&&pt.left<r).map(({left:pt,top:na,right:wa,bottom:ea})=>({left:pt,top:na,right:wa,bottom:ea}));k&&(k.style.setProperty("--wipe",Q.toFixed(3)),k.style.visibility=Q<.01?"hidden":""),Z&&(Z.style.setProperty("--wipe",Q.toFixed(3)),Z.style.visibility=Q<.01?"hidden":""),S&&(S.style.setProperty("--wipe",le.toFixed(3)),S.style.transform=`translateY(${(20*(1-za((x-.13)/.17))-24*za((x-Se+.22)/.22)).toFixed(1)}px)`,S.style.visibility=le<.01?"hidden":"");let Pe=xa(Math.min(r*(y?.46:.19),n*.28),120,280),Qe={x:r/2,y:n*(y?.3:.29),d:Pe},Zt={x:r/2,y:n*.87,d:Pe*.3},Ra=za((x-.08)/Math.max(.3,Ae-.5)),st={x:Er(Qe.x,Zt.x,Ra),y:Er(Qe.y,Zt.y,Ra),d:Er(Qe.d,Zt.d,Ra)};if(z){let pt=te,na=za((x-Se+.1)/.2);if(na>0){let wa=y?40:50,ea={x:Nt?pt.left+pt.width/2:r/2,y:pt.bottom+44,d:wa};st={x:Er(st.x,ea.x,na),y:Er(st.y,ea.y,na),d:Er(st.d,ea.d,na)}}}return{orb:{...st,vis:1},guideAvoid:Te,warm:1,ground:{y:st.y+st.d/2},emission:$e.emission}}function Jl(r,n,y){if(ue.name==="sound"&&ki?.isConnected){let x=ki.getBoundingClientRect(),k=Math.min(x.width,x.height)*.78;return x.bottom>0?{x:x.left+x.width/2,y:x.top+x.height/2,d:k,vis:1,ground:x.top+x.height/2+k/2}:null}if(ue.name==="products"&&!ue.id){let x=i.querySelector("[data-orbslot]");if(!x)return null;let k=x.getBoundingClientRect(),S=x.closest(".pc")?.classList.contains("on"),Z=Math.min(k.width,k.height)*.74;return k.width>10?{x:k.left+k.width/2,y:k.top+k.height/2,d:Z,vis:S?1:.7,ground:k.top+k.height/2+Z/2}:null}if(ue.name==="products"&&ue.id&&dt?.el?.isConnected){let x=dt,k=x.el.getBoundingClientRect();if(x.live){let S=x.host.getBoundingClientRect();if(S.width<10||S.bottom<0||S.top>n)return null;let Z=Math.min(S.width,S.height)*.8;return{x:S.left+S.width/2,y:S.top+S.height/2,d:Z,vis:1,ground:S.top+S.height/2+Z/2}}if(x.id==="orb"){if(!x.real)return null;let S=x.el.querySelector("[data-sph]")?.getBoundingClientRect();if(!S||S.width<10||S.bottom<0||S.top>n)return null;let Z=Math.min(S.width,S.height)*.8;return{x:S.left+S.width/2,y:S.top+S.height/2,d:Z,vis:1,snap:!0}}if(x.id==="orb-slider"){let S=x.el.querySelector("[data-cap]");if(!S)return null;let Z=S.getBoundingClientRect(),Q=Z.height*.84,z=(Z.height-Q)/2;return{x:Z.left+z+Q/2+x.cap*(Z.width-Z.height),y:Z.top+Z.height/2,d:Q,vis:1,snap:!0}}if(x.id==="orb-wave"||x.id==="background-pack"){let S=Math.min(96,k.width*.16),Z=k.height*.7+S*.1,Q=Z-S/2;if(x.drop){let z=x.drop;z.y==null&&(z.y=-k.height*.45),z.vy+=2600*y,z.y+=z.vy*y,z.y>=0&&(z.y=0,wt.impact(k.width/2,Z,xa(z.vy/1400)),p.orb?.nudge(.8),t.sfx("detent"),z.vy*=-.38,(++z.contacts>2||Math.abs(z.vy)<120)&&(x.drop=null)),Q+=x.drop?x.drop.y:0}return wt.setOrb({x:k.width/2,y:Q,d:S}),{x:k.left+k.width/2,y:k.top+Q,d:S,vis:1,snap:!!x.drop}}}return null}let Ti=()=>{let r=document.activeElement;if(ue.name!=="design"||!matchMedia("(pointer:coarse)").matches||!r?.matches(".iq input:not([type=radio]):not([type=checkbox]),.iq textarea")||!i.contains(r))return;let n=window.visualViewport,y=r.getBoundingClientRect(),x=Math.max(n?.offsetTop||0,c.getBoundingClientRect().bottom)+12,k=(n?.offsetTop||0)+(n?.height||innerHeight)-16;(y.top<x||y.bottom>k)&&(i.scrollTop+=y.top-(x+Math.max(0,(k-x-Math.min(y.height,k-x))/2)))};i.addEventListener("focusin",()=>requestAnimationFrame(Ti)),window.visualViewport?.addEventListener("resize",()=>requestAnimationFrame(Ti)),addEventListener("resize",()=>{ue.name==="home"&&m(!0)}),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__lo={audio:t,worldPreview:wt,product:p,store:vt,readableTexts:()=>[...new Set([...i.querySelectorAll(Je)].map(ve).filter(Boolean))].map(r=>{let n=se(r);return{id:Ee(n),text:n}}),linkLabels:()=>[...i.querySelectorAll("a,button,[data-href],.arc-c,.dg-c")].filter(r=>!r.closest(".hd,.sx")&&se(r)).map(r=>{let n=se(r);return{id:Ee(n),text:n}}),get studio(){return kt},get route(){return ue},get sel(){return ot},get psel(){return It}});try{Object.keys(sessionStorage).filter(r=>r.startsWith("lo:scroll:")||r==="lo:sel").forEach(r=>sessionStorage.removeItem(r))}catch{}ot=0,Vi();{let r=l.querySelector(".hd"),n=()=>document.documentElement.style.setProperty("--hd-h",`${Math.round(r.getBoundingClientRect().height)}px`);n(),window.ResizeObserver?new ResizeObserver(n).observe(r):addEventListener("resize",n)}ua(),V();{let r=()=>[...new Set([...Et,...Ba.flatMap(n=>Lr(n.id))].map(n=>n.cover?.src).filter(Boolean))].forEach(n=>{let y=new Image;y.decoding="async",y.src=n});(window.requestIdleCallback??(n=>setTimeout(n,1500)))(r,{timeout:4e3})}return{frame:Wl,audio:t,get route(){return ue},get studio(){return kt},reapply:()=>H()}}function bi(e,a){let o=document.createElement(e);return o.className=a,o}var ko={hostDuration:.95,follow:10,damping:.92,pearl:[243,243,241],chamber:[23,26,25],whiten:2.2},or=matchMedia("(prefers-reduced-motion: reduce)").matches,Ur=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),ir=(e,a,o)=>e+(a-e)*o,yl=e=>{let a=Ur(e);return a<.5?4*a*a*a:1-(-2*a+2)**3/2},wl=(e,a,o)=>e.map((t,d)=>ir(t,a[d],o)),So=(e,a=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${a})`,kl=!1;document.addEventListener("lightorb:intro-complete",e=>xi(e.detail));window.__lightorbIntroComplete&&xi(window.__lightorbIntroComplete.detail);document.body.classList.contains("static")&&xi(null);function Bc(){let e=document.createElement("div");e.style.cssText="position:absolute;left:0;top:0;border-radius:50%;pointer-events:none;will-change:transform;background:radial-gradient(circle at 34% 28%,#fff 0 10%,rgba(255,255,255,.55) 24%,rgba(225,228,230,.35) 58%,rgba(170,176,180,.45) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),inset 0 -12px 24px rgba(120,126,130,.18),0 18px 30px -18px rgba(38,40,39,.45)";let a=()=>a,o={element:e,place(t){e.style.width=e.style.height=`${t.d}px`,e.style.transform=`translate(${t.x-t.d/2}px,${t.y-t.d/2}px)`,e.style.opacity=t.visibility??1}};return new Proxy(o,{get:(t,d)=>d in t?t[d]:a})}function xi(e){if(kl)return;let o=document.querySelector(".intro").querySelector(".intro-world"),t=e?.orb??Bc();kl=!0;for(let H of document.querySelectorAll(".intro .cue, .skip"))H.setAttribute("aria-hidden","true"),H.inert=!0;let d=document.createElement("style");d.textContent=".x-surface,.x-orb{position:fixed;inset:0;pointer-events:none}.x-surface{z-index:6;width:100%;height:100%}.x-orb{z-index:30}",document.head.append(d);let p=document.createElement("canvas");p.className="x-surface",p.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="x-orb",document.body.append(p,i),i.append(t.element),t.attachPointer(document.createElement("div"))();let l=p.getContext("2d");t.prepareTone("ivory"),t.prepareTone("dark");let c=0,f=0,h=1,b="",$=()=>{b="",c=Math.max(1,innerWidth),f=Math.max(1,innerHeight),h=Math.min(devicePixelRatio||1,1.5),p.width=Math.round(c*h),p.height=Math.round(f*h)};$(),addEventListener("resize",$),p.addEventListener("contextrestored",()=>{b=""});let K=performance.now()/1e3,s={x:0,y:0,d:0,vx:0,vy:0,vd:0,from:null,hosted:!1},M=new Set,A=null,P=null,F=0,I=1,B=1,N=1,X=K,T={left:.65,right:.55,env:.5,exposure:0,yaw:0,pitch:0,platform:!0},E=(H,u)=>{let O=performance.now()/1e3,W=Ur(O-X,0,.05);X=O,s.from||(s.from={x:H.x,y:H.y,d:H.d}),A=P?.frame(O,W,{W:c,H:f})??null;let D=A?.orb??{x:c/2,y:f*.42,d:Math.min(c*.3,f*.42)},R=or?1:yl((O-K)/ko.hostDuration);if(!s.hosted)s.x=ir(s.from.x,D.x,R),s.y=ir(s.from.y,D.y,R),s.d=ir(s.from.d,D.d,R),R>=1&&(s.hosted=!0,t.attachPointer(document.createElement("div"))(),P?.reapply?.(),t.setMono?.(!1));else if(or||A?.snap)s.x=D.x,s.y=D.y,s.d=D.d,s.vx=s.vy=s.vd=0;else{let qe=ko.follow,Re=ko.damping;s.vx+=(qe*qe*(D.x-s.x)-2*Re*qe*s.vx)*W,s.x+=s.vx*W,s.vy+=(qe*qe*(D.y-s.y)-2*Re*qe*s.vy)*W,s.y+=s.vy*W,s.vd+=(qe*qe*(D.d-s.d)-2*Re*qe*s.vd)*W,s.d+=s.vd*W}s.hosted&&!s.hostedAt&&(s.hostedAt=O);let ce=or?1:yl((O-K-.25)/ko.whiten),ze=Math.min(A?.warm??1,1-ce);I=or?ze:ir(I,ze,.2),F=ir(F,A?.room==="chamber"?1:0,or?1:.12),B=ir(B,A?.orb?.vis??1,or?1:.14);let Me=1;for(let qe of A?.guideAvoid??[]){let Re=Ur(s.x,qe.left,qe.right),Ke=Ur(s.y,qe.top,qe.bottom);Me=Math.min(Me,Ur((Math.hypot(s.x-Re,s.y-Ke)-s.d/2)/4))}N=B*Me,Number.isFinite(s.x+s.y+s.d)||(console.warn("orb pose NaN",JSON.stringify(D),JSON.stringify(s)),Object.assign(s,{x:D.x,y:D.y,d:D.d,vx:0,vy:0,vd:0}));let xe=b;ae();let ge=I<.002;return s.hosted&&(t.setIdleSkip?.(!0),(b!==xe||!ge||M.size)&&t.refresh?.()),{...H,x:s.x,y:s.y,d:s.d,squash:0,contact:0,worldY:ge?-9999:s.y,hideWorld:ge,visibility:N,emission:H.emission*(A?.emission??1),raster:Math.ceil(Math.max(s.d,D.d,140)*1.06)}};if(e?.orb)e.takeOver(E);else{let H=()=>{t.place(E({x:c/2,y:f/2,d:0,emission:1})),requestAnimationFrame(H)};requestAnimationFrame(H)}try{ae()}catch{}try{t.setBackdrop((H,u)=>V(H,u,s))}catch(H){console.warn("backdrop",H)}let C=(()=>{try{let H=document.createElement("canvas").getContext("2d");return H.filter="blur(1px)",H.filter==="blur(1px)"}catch{return!1}})(),_=document.createElement("canvas"),w=_.getContext("2d");function q(H,u,O,W){return _.width!==W&&(_.width=_.height=W),w.globalCompositeOperation="copy",w.drawImage(o,H,u,O,O,0,0,W,W),w.globalCompositeOperation="saturation",w.fillStyle="#808080",w.fillRect(0,0,W,W),w.globalCompositeOperation="destination-in",w.drawImage(o,H,u,O,O,0,0,W,W),w.globalCompositeOperation="source-over",_}function V(H,u,O){let W=O.d/u.diameter,D=u.extent*W,R=O.x-D/2,ce=O.y-D/2,ze=u.extent/D,Me=xe=>xe.width>0&&xe.height>0;if(H.fillStyle=So(ha().pearl),H.fillRect(0,0,u.extent,u.extent),I>.002&&Me(o)){let xe=o.width/Math.max(1,innerWidth),ge=!document.documentElement.classList.contains("warm");ge&&C&&(H.filter="grayscale(1) contrast(1.06)"),ge&&!C?H.drawImage(q(R*xe,ce*xe,D*xe,u.extent),0,0):H.drawImage(o,R*xe,ce*xe,D*xe,D*xe,0,0,u.extent,u.extent),ge&&C&&(H.filter="none")}Me(p)&&H.drawImage(p,R*h,ce*h,D*h,D*h,0,0,u.extent,u.extent);for(let xe of M){if(!xe.isConnected||!Me(xe))continue;let ge=xe.getBoundingClientRect();ge.right<R||ge.left>R+D||ge.bottom<ce||ge.top>ce+D||H.drawImage(xe,(ge.left-R)*ze,(ge.top-ce)*ze,ge.width*ze,ge.height*ze)}}function ae(){let H=1-I,u=H>0&&H<.999,O=JSON.stringify([ha(),c,f,h,H>0,u||A?.glows?.length?H:0,F>.002?F:0,u?[s.x,s.y]:0,A?.glows,A?.grounds,F>.002?[T,A?.stage,A?.product?.x,A?.product?.d,A?.product?.ground]:0]);if(O===b)return;if(l.setTransform(h,0,0,h,0,0),l.clearRect(0,0,c,f),H>0){l.globalAlpha=1;let D=ha(),R=D.pearl,ce=l.createLinearGradient(0,0,0,f);if(ce.addColorStop(0,So(wl(R,D.top,.5))),ce.addColorStop(.6,So(R)),ce.addColorStop(1,So(wl(R,D.low,.55))),l.fillStyle=ce,l.fillRect(0,0,c,f),re(c*.62,-f*.12,Math.max(c*.85,f*.55),D.sky,D.skyA),re(c*.05,f*1.05,c*.45,D.mass,D.massA),l.globalAlpha=1,H<.999){let ze=Math.hypot(c,f),Me=s.x||c/2,xe=s.y||f/2,ge=H*H*(3-2*H),qe=Math.max(0,ze*1.15*ge-ze*.45),Re=qe+ze*.55,Ke=l.createRadialGradient(Me,xe,qe,Me,xe,Re);Ke.addColorStop(0,`rgba(0,0,0,${Math.min(1,ge*1.6)})`),Ke.addColorStop(1,"rgba(0,0,0,0)"),l.globalCompositeOperation="destination-in",l.fillStyle=Ke,l.fillRect(0,0,c,f),l.globalCompositeOperation="source-over"}}let W=ha();for(let D of A?.glows??[]){l.save(),l.globalAlpha=D.k*H,l.translate(D.x,D.y),l.scale(1,D.h/D.w);let R=l.createRadialGradient(0,0,0,0,0,D.w);R.addColorStop(0,`rgba(${W.glow},${W.glowA})`),R.addColorStop(.5,`rgba(${W.glow},${W.glowA*.31})`),R.addColorStop(1,`rgba(${W.glow},0)`),l.fillStyle=R,l.fillRect(-D.w,-D.w,D.w*2,D.w*2),l.restore()}F>.002&&de(F);for(let D of A?.grounds??[])ke(D,D,1);b=O}function re(H,u,O,W,D){let R=l.createRadialGradient(H,u,0,H,u,O);R.addColorStop(0,`rgba(${W},${D})`),R.addColorStop(1,`rgba(${W},0)`),l.fillStyle=R,l.fillRect(H-O,u-O,O*2,O*2)}let ne=Array.from({length:160},(H,u)=>{let O=Math.sin(u*12.9898)*43758.5453,W=O-Math.floor(O),D=Math.sin(u*78.233)*12345.678%1;return[W*Math.PI*2,Math.abs(D)*.9-.25,.3+u%7/10]});function de(H){let u=A?.stage??{x:0,y:0,w:c,h:f},O=2**(T.exposure*.5),W=T.left,D=T.right,R=u.x+u.w/2,ce=u.y+u.h*.52,ze=T.yaw,Me=T.pitch;l.save(),l.globalAlpha=H,l.fillStyle="#070808",l.fillRect(0,0,c,f),l.fillStyle="#ffffff";for(let[at,rt,Ze]of ne){let be=at-ze*Ze,ye=R+Math.sin(be)*u.w*.9,fe=ce-(rt+Me*.6*Ze)*u.h;Math.cos(be)<-.2||ye<u.x||ye>u.x+u.w||(l.globalAlpha=H*.1*Ze*O,l.fillRect(ye,fe,1.1,1.1))}l.globalAlpha=H;let xe=ce+u.h*(.12-Me*.55),ge=A?.product?.ground??ce+u.h*.18,qe=l.createLinearGradient(0,xe,0,u.y+u.h);qe.addColorStop(0,"rgba(255,255,255,0)"),qe.addColorStop(.25,`rgba(255,255,255,${.035*O})`),qe.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=qe,l.fillRect(u.x,xe,u.w,u.y+u.h-xe);let Re=A?.product?.x??R,Ke=A?.product?.d??u.h*.4;for(let[at,rt]of[[-1,W],[1,D]]){if(rt<=.01)continue;let Ze=Re+at*Ke*(1.1+.5*Math.sin(ze*at+.4)),be=.18+.3*Math.max(0,Math.sin(.15+Me));l.save(),l.translate(Ze,ge),l.scale(1,be);let ye=l.createRadialGradient(0,0,0,0,0,Ke*1.3);ye.addColorStop(0,`rgba(240,242,240,${.12*rt*O})`),ye.addColorStop(1,"rgba(240,242,240,0)"),l.fillStyle=ye,l.beginPath(),l.arc(0,0,Ke*1.3,0,Math.PI*2),l.fill(),l.restore();let fe=at<0?u.x:u.x+u.w,Oe=l.createRadialGradient(fe,ce,0,fe,ce,u.w*.45);Oe.addColorStop(0,`rgba(230,234,232,${.07*rt*O})`),Oe.addColorStop(1,"rgba(230,234,232,0)"),l.fillStyle=Oe,l.fillRect(u.x,u.y,u.w,u.h)}let ut=l.createRadialGradient(R,ce,u.h*.2,R,ce,Math.hypot(u.w,u.h)*.62);ut.addColorStop(0,"rgba(0,0,0,0)"),ut.addColorStop(1,"rgba(0,0,0,.55)"),l.fillStyle=ut,l.fillRect(0,0,c,f),l.restore()}function ke(H,u,O){if(!Number.isFinite(u.d+u.x+H.y)||u.d<=0)return;let W=u.d/2,D=F>.5||ha().orb.dark;l.save(),l.globalAlpha=O,l.translate(u.x,H.y),l.scale(1,.2);let R=l.createRadialGradient(0,0,0,0,0,W*1.5);D?(R.addColorStop(0,"rgba(240,240,236,.12)"),R.addColorStop(1,"rgba(240,240,236,0)"),l.globalCompositeOperation="lighter"):(R.addColorStop(0,"rgba(70,72,78,.22)"),R.addColorStop(.5,"rgba(70,72,78,.07)"),R.addColorStop(1,"rgba(70,72,78,0)")),l.fillStyle=R,l.beginPath(),l.arc(0,0,W*1.5,0,Math.PI*2),l.fill(),l.restore()}let $e={orb:t,reduced:or,chamber:T,body:{get x(){return s.x},get y(){return s.y},get d(){return s.d},get hosted(){return s.hosted}},addBackdrop:H=>M.add(H),removeBackdrop:H=>M.delete(H),drawBackdrop:V,exportPNG(H,u=t.element){let W=document.createElement("canvas");W.width=Math.round(H.w*2),W.height=Math.round(H.h*2);let D=W.getContext("2d");D.drawImage(p,H.x*h,H.y*h,H.w*h,H.h*h,0,0,W.width,W.height);for(let R of u.querySelectorAll("canvas")){let ce=R.getBoundingClientRect();D.drawImage(R,(ce.left-H.x)*2,(ce.top-H.y)*2,ce.width*2,ce.height*2)}return new Promise(R=>W.toBlob(R,"image/png"))}};P=vl($e),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__exit={api:$e,body:s,site:P,get scene(){return A},get visibility(){return N}})}export{ko as EXIT};
