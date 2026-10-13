import{e as Pt,f as Dt,h as ba,i as xa,j as Nt,k as Ht,n as va,o as wa,p as Bt,r as Ft,t as ya,u as ka,v as Te,w as Sa}from"./chunk-6YQNIKVX.js";var ce=[{id:"products",label:"Products",route:"#/products",line:"Objects of light and glass, ready to use.",action:"Explore products",clip:"products",words:["products","product","pieces","piece","objects","gallery","shop"]},{id:"templates",label:"Templates",route:"#/templates",line:"Complete compositions to start from.",action:"Browse templates",clip:"templates",words:["templates","template","compositions","websites","cassettes"]},{id:"studio",label:"Studio",route:"#/studio",line:"Shape the light. Make it yours.",action:"Open Studio",clip:"studio",words:["studio","editor","customize","customise","edit","workshop"]},{id:"sound",label:"Sound",route:"#/sound",line:"Voices and the quiet sounds of glass.",action:"Listen",clip:"sound",words:["sound","sounds","voice","voices","audio","listen"]}];var Gt=e=>(Object.values(e).forEach(n=>n&&typeof n=="object"&&Gt(n)),Object.freeze(e)),At=Gt({version:1,shell:{roughness:.01,thickness:.78,ior:1.58,tint:"#cdd2cf",tintAmount:.72,elastic:0},interior:{kind:"light",amount:.5,size:.5,motion:.4,fill:.5,colour:"#f1f0ec"},light:{colour:"#f6f6f3",strength:.9,x:-.04,y:-.3,z:.12,spread:.8,glow:.3},motion:{idle:0},voice:{enabled:!0,response:.6}}),wt=(e,n,i,a)=>Gt({id:e,name:n,line:i,family:"orb",config:{...structuredClone(At),...Object.fromEntries(Object.entries(a).map(([p,u])=>[p,{...At[p],...u}]))}}),rt=[wt("original","Light","Clear glass holding one soft white light.",{}),wt("beads","Beads","Small glass beads resting and rolling inside the shell.",{interior:{kind:"beads",amount:.6,size:.55,motion:.45},light:{strength:.7},shell:{thickness:.15,ior:1.3}}),wt("glitter","Glitter","Fine reflective flecks suspended in the volume.",{interior:{kind:"glitter",amount:.6,size:.35,motion:.35,colour:"#f4f4f2"}}),wt("liquid","Liquid","A clear liquid with a meniscus that moves with the glass.",{interior:{kind:"liquid",fill:.42,motion:.5,colour:"#dfe3e1"},light:{strength:.78}}),wt("gel","Gel","A soft gel body; the shell answers with a damped give.",{interior:{kind:"gel",amount:.55,motion:.45,colour:"#e4e6e3"},shell:{elastic:.55}})],Vt=rt[0].config,_t=e=>rt.find(n=>n.id===e)??rt[0],Le=[{id:"orb",name:"The Orb",kind:"Interactive object",line:"A 3D sphere for your own work, in twenty versions: glass, metal, porcelain, bloom, and glass with light, sparkle or beads inside.",receives:["ES module (Three.js r186) with the sphere and its material","The version you choose","Integration notes and dependency list"],source:["dist/light-orb.js","dist/orb-three.js","dist/orb-lighting.js","dist/orb-floor.js"],preview:"orb",studio:!0,presets:rt.map(e=>e.id),readiness:"preview_ready",missing:["price","checkout provider","packaged download (source export not yet assembled)"],price:null},{id:"orb-slider",name:"Orb Slider",kind:"Interactive control",line:"A clear glass capsule whose thumb is the Orb itself. Slide it to enter.",receives:["Slider component source","Orb thumb integration","Integration notes"],source:["dist/intro/activation.js","dist/intro/glass-control.js"],preview:"slider",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package (currently embedded in the intro)"],price:null},{id:"orb-wave",name:"Orb Wave",kind:"Surface effect",line:"The ripple the Orb leaves on the floor when it lands, drawn in light.",receives:["Light-world shader source","Impact trigger API","Integration notes"],source:["dist/intro/light-world.js"],preview:"wave",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"background-pack",name:"Background Pack",kind:"Two environments",line:"A dark world and a light one, and the change between them.",receives:["Dark and warm environment shader","Exposure transition","Integration notes"],source:["dist/intro/light-world.js"],preview:"backgrounds",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"crystal-controls",name:"Crystal Controls",kind:"Interface kit",line:"Buttons, switches, fields and sliders in clear glass, with every state designed.",receives:["CSS component source","Every state: hover, focus, pressed, selected, disabled, loading","Integration notes"],source:["dist/app/glass.css.js"],preview:"controls",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged download"],price:null}],Wt=e=>Le.find(n=>n.id===e),ye=[{id:"the-light-orb",name:"The Light Orb",line:"This website\u2019s own beginning: the Orb as host, a quiet greeting, the quotation and the four destinations.",cover:{src:"./media/templates/the-light-orb.cover.jpg",from:"dist/intro.html (post-intro welcome, live render)",meta:"./media/templates/the-light-orb.cover.json"},route:"#/",includes:["Centred welcome with the hosting Orb","Quotation scene","Destination selector"],readiness:"preview_ready",missing:["price","checkout provider","packaged source export"],price:null}],yt=[{id:"samantha",name:"Samantha",locale:"en-US",provider:"macOS system speech (development)",rights:{onSite:"development preview only",download:"not permitted"},readiness:"blocked",missing:"licensed voice from a chosen provider"},{id:"daniel",name:"Daniel",locale:"en-GB",provider:"macOS system speech (development)",rights:{onSite:"development preview only",download:"not permitted"},readiness:"blocked",missing:"licensed voice from a chosen provider"}],Yt={home:"Welcome to The Light Orb. A space for creative possibilities. Let\u2019s explore.",products:"Explore the pieces. Each one is designed to become part of something of your own.",templates:"Start with a complete composition. Select a cassette to preview the design.",studio:"Choose a piece, then shape its light, material and movement.",sound:"Listen before you choose. Find the voice and sounds that fit your work.",voice_audition:"A little light. A new idea. Something of your own."},Ut=(e,n)=>`./media/voice/${e}.${n}.m4a`,kt={text:"I don\u2019t know why people expect art to make sense when they accept the fact that life doesn\u2019t make sense.",author:"David Lynch",work:"interview with Kristine McKenna, Los Angeles Times, 20 August 1989",source:"https://www.latimes.com/archives/la-xpm-1989-08-20-ca-1327-story.html"};var Xt=[{id:"select",name:"Select",line:"A soft glass touch for choosing.",file:"./media/sfx/select.wav"},{id:"open",name:"Open",line:"A breath of air as a panel opens.",file:"./media/sfx/open.wav"},{id:"close",name:"Close",line:"The same air, settling.",file:"./media/sfx/close.wav"},{id:"confirm",name:"Confirm",line:"Two quiet glass tones.",file:"./media/sfx/confirm.wav"},{id:"detent",name:"Detent",line:"A precise tick for wheels and steps.",file:"./media/sfx/detent.wav"},{id:"type",name:"Type",line:"A dry, very quiet key.",file:"./media/sfx/type.wav"},{id:"level",name:"Level",line:"A short tone for volume changes.",file:"./media/sfx/level.wav"}],Ea={promise:"A new drop every two weeks.",open:!1,price:null,interval:null,quota:null,plans:[{id:"ready",name:"Ready-made",line:"Choose a curated piece and use it as it is.",points:["One finished piece","Its source and integration notes"]},{id:"studio",name:"Studio",line:"Customise a piece and export your own version.",points:["Light, material and movement controls","Saved designs"]},{id:"member",name:"Membership",line:"Follow the collection as it grows.",points:["A new drop every two weeks"]}]};var $a="lightorb:audio",ut=(e,n=0,i=1)=>Math.min(i,Math.max(n,e)),Kt={master:!1,guide:!0,sfx:!0,voice:yt[0].id,gain:.8,sfxGain:.5,volume:.8};function vr(){try{return{...Kt,...JSON.parse(localStorage.getItem($a)||"{}")}}catch{return{...Kt}}}function Ta(){let e=vr();yt.some(c=>c.id===e.voice)||(e.voice=Kt.voice);let n=new Set,i=null,a=null,p=null,u=null,o=null,l=null,s=new Audio;s.preload="auto",s.crossOrigin="anonymous",s.setAttribute("playsinline","");let q=null,b={clip:null,voice:null,status:"idle",error:null,energy:0,journey:new Set},V=new Map,C=new Map,m=c=>{if(!C.has(c)){let A=fetch(c).then(L=>{if(!L.ok)throw new Error(L.status);return L.blob()}).then(L=>URL.createObjectURL(L));C.set(c,A),A.catch(()=>C.delete(c))}return C.get(c)},_={},T=()=>n.forEach(c=>c($e)),B=()=>{try{localStorage.setItem($a,JSON.stringify(e))}catch{}};function N(){if(i)return i;let c=window.AudioContext||window.webkitAudioContext;if(!c)return null;i=new c,a=i.createGain(),a.connect(i.destination),p=i.createGain(),p.connect(a),u=i.createGain(),u.connect(a),o=i.createAnalyser(),o.fftSize=1024,o.smoothingTimeConstant=0,o.connect(p),l=new Float32Array(o.fftSize);try{q=i.createMediaElementSource(s),q.connect(o)}catch{q=null}return ie(),i}function ie(){if(!i)return;let c=i.currentTime;a.gain.setTargetAtTime(e.master?e.volume??.8:0,c,.02),p.gain.setTargetAtTime((e.guide||b.clip?.startsWith("voice_audition"),e.gain),c,.02),u.gain.setTargetAtTime(e.sfx?e.sfxGain:0,c,.02)}let se=()=>{let c=N();c&&c.state!=="running"&&c.state!=="closed"&&c.resume().catch(()=>{}),de()};for(let c of["pointerdown","keydown","touchend"])addEventListener(c,se,{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden?s.paused||(s.pause(),b.status="paused",b.hiddenPause=!0,T()):b.hiddenPause&&(b.hiddenPause=!1)}),s.addEventListener("ended",()=>{b.status="ended",T()}),s.addEventListener("pause",()=>{b.status==="playing"&&(b.status="paused",T())}),s.addEventListener("playing",()=>{b.status="playing",b.error=null,T()}),s.addEventListener("error",()=>{b.clip&&(b.status="error",b.error="The recording could not be loaded.",T())}),s.addEventListener("loadedmetadata",T);let be=(c,{voice:A=e.voice,from:L=0,kind:P="guide"}={})=>(g=null,xe(`${c}.${A}`,Ut(c,A),{from:L,kind:P,voice:A})),le=(c,A,{from:L=0}={})=>(g=null,xe(c,A,{from:L,kind:"audition"}));async function xe(c,A,{from:L=0,kind:P="guide",voice:H=null}={}){if(P==="guide"&&(!e.master||!e.guide))return!1;if(De(),se(),b.clip!==c){s.pause(),b.clip=c,b.voice=H,b.status="loading",T();try{s.src=await m(A)}catch{s.src=A}if(b.clip!==c)return!1}if(b.env=null,Be(A,200).then(U=>{b.clip===c&&(b.env=U)}).catch(()=>{}),b.kind=P,L?(s.readyState<1&&await new Promise(U=>s.addEventListener("loadedmetadata",U,{once:!0})),s.currentTime=L):s.currentTime&&(s.currentTime=0),T(),!e.master||P==="guide"&&!e.guide||b.clip!==c)return!1;try{return await s.play(),!0}catch{return b.status="blocked",b.error="Playback was blocked. Press play to start it.",T(),!1}}function nt(){s.paused||s.pause(),b.status="paused",T()}async function te(){se();try{await s.play()}catch{b.status="blocked",T()}}let J=typeof speechSynthesis<"u"?speechSynthesis:null,Pe=0,ee={on:!1};function De(){J&&ee.on&&(ee.on=!1,J.cancel())}let Ke={samantha:[/ava.*premium/i,/zoe.*premium/i,/samantha.*(enhanced|premium)/i,/(aria|jenny|emma|ava).*natural/i,/natural.*(female|aria|jenny)/i,/google us english/i,/google uk english female/i,/^(ava|zoe|allison|susan)\b/i,/^samantha/i],daniel:[/(evan|nathan|tom).*premium/i,/daniel.*(enhanced|premium)/i,/(guy|ryan|andrew|brian|christopher).*natural/i,/natural.*male/i,/google uk english male/i,/^(evan|nathan|tom|aaron)\b/i,/^daniel/i]},Je=[],Qe=()=>{Je=J?.getVoices()??[]};J&&(Qe(),J.addEventListener?.("voiceschanged",Qe));let Re=[/(paulina|monica|m[oó]nica|marisol|isabela).*(premium|enhanced)/i,/(elvira|dalia|helena|ximena|paloma).*natural/i,/natural.*(spanish|espa)/i,/google espa[nñ]ol/i,/^(paulina|monica|m[oó]nica|marisol|jorge|diego)\b/i];function qe(c){if(Je.length||Qe(),c==="es"){let L=Je.filter(P=>/^es[-_]/i.test(P.lang));if(L.length){for(let P of Re){let H=L.find(U=>P.test(U.name));if(H)return H}return L.find(P=>P.localService===!1)??L[0]}}let A=Je.filter(L=>/^en[-_]/i.test(L.lang));for(let L of Ke[e.voice]??Ke.samantha){let P=A.find(H=>L.test(H.name));if(P)return P}return A.find(L=>L.localService===!1)??A[0]}let E=null,k="./media/voice/lines/",$=()=>E??=fetch(`${k}manifest.json`).then(c=>c.ok?c.json():null).catch(()=>null);$();let g=null;function R(c,{id:A,onend:L,lang:P}={}){if(!c||!e.master||!e.guide)return L?.(),!1;let H=g={};if(A){let U=e.voice;return De(),s.pause(),b.kind="guide",b.clip=`line:${A}`,b.status="loading",T(),$().then(async Q=>{let ve=Q?.lines?.[A]?.text===c?Q.lines[A].files?.[U]:null;if(g!==H)return;if(!ve){z(c,{onend:L,lang:P});return}let fe=k+ve;try{await m(fe)}catch{g===H&&z(c,{onend:L,lang:P});return}g===H&&(b.clip=null,L&&s.addEventListener("ended",()=>{g===H&&L()},{once:!0}),xe(`line:${A}.${U}`,fe,{kind:"guide",voice:U}))}),!0}return z(c,{onend:L,lang:P})}function z(c,{onend:A,lang:L}={}){if(!J||!c||!e.master||!e.guide)return A?.(),!1;se(),s.pause(),J.cancel();let P=qe(L),H=P&&(!P.localService||/premium|enhanced|natural/i.test(P.name)),U=c.match(/[^.!?]+[.!?]*\s*/g)?.map(ve=>ve.trim()).filter(Boolean)??[c],Q={};return ee.u=Q,ee.on=!0,b.kind="guide",b.clip="speech",b.status="playing",T(),U.forEach((ve,fe)=>{let re=new SpeechSynthesisUtterance(ve);P&&(re.voice=P,re.lang=P.lang),re.rate=H?1:.94,re.pitch=1,re.volume=e.volume??.8,re.onboundary=()=>{Pe=1},re.onstart=()=>{Pe=1},fe===U.length-1&&(re.onend=re.onerror=()=>{ee.u===Q&&(ee.on=!1,b.status="stopped",T(),A?.())}),J.speak(re)}),!0}let W=()=>qe()?.name??null;function ue(){g=null,De(),s.pause(),b.status=b.clip?"stopped":"idle",T()}function X(c){s.duration&&(s.currentTime=ut(c)*s.duration,T())}let D=performance.now();function Ne(){let c=performance.now(),A=Math.min(.1,(c-D)/1e3);D=c;let L=0;if(ee.on&&e.master)Pe=Math.max(0,Pe-A*3.2),L=ut(.35+.45*Pe+.15*Math.sin(c/90));else if(!q&&b.env&&!s.paused&&e.master&&s.duration)L=ut(b.env.bins[Math.min(b.env.bins.length-1,Math.floor(s.currentTime/s.duration*b.env.bins.length))]*1.1);else if(o&&!s.paused&&e.master){o.getFloatTimeDomainData(l);let H=0;for(let Q=0;Q<l.length;Q++)H+=l[Q]*l[Q];let U=Math.sqrt(H/l.length);L=ut((U-.008)/.16)}let P=L>b.energy?.05:.18;return b.energy+=(L-b.energy)*(1-Math.exp(-A/P)),b.energy<.001&&(b.energy=0),b.energy}let He=(c,A=e.voice,L=72)=>Be(Ut(c,A),L);async function Be(c,A=72){let L=`${c}|${A}`;if(V.has(L))return V.get(L);let P=(async()=>{let H=await(await fetch(c)).arrayBuffer(),U=window.OfflineAudioContext||window.webkitOfflineAudioContext,Q=await new U(1,44100,44100).decodeAudioData(H),ve=Q.getChannelData(0),fe=Math.max(1,Math.floor(ve.length/A)),re=[],et=0;for(let Oe=0;Oe<A;Oe++){let ot=0;for(let ct=Oe*fe;ct<(Oe+1)*fe;ct++)ot+=ve[ct]*ve[ct];let Mt=Math.sqrt(ot/fe);re.push(Mt),et=Math.max(et,Mt)}return{bins:re.map(Oe=>Oe/(et||1)),duration:Q.duration}})();return V.set(L,P),P.catch(()=>V.delete(L)),P}let Y={press:"select",release:"select",volume:"level",case:"open"},ge={select:90,type:70,detent:50,level:110,open:220,close:220,confirm:400},Fe={select:.7,type:.45,detent:.6,level:.5,open:.6,close:.55,confirm:.7},ne={},Se=0;function Ze(c){ne[c]||!i||(ne[c]=fetch(`./media/sfx/${c}.wav`).then(A=>A.arrayBuffer()).then(A=>i.decodeAudioData(A)).then(A=>ne[c]=A).catch(()=>ne[c]=null))}function Ee(c,A=.5){if(c=Y[c]||c,!e.master||!e.sfx)return;let L=N();if(!L||L.state!=="running")return;let P=performance.now();if(P-(_[c]??0)<(ge[c]??80)||Se>3)return;_[c]=P;let H=ne[c];if(!H||H instanceof Promise){Ze(c);return}let U=L.createBufferSource(),Q=L.createGain();U.buffer=H,Q.gain.value=(Fe[c]??.6)*(c==="level"?.6+.4*ut(A):1),c==="level"&&(U.playbackRate.value=.85+.3*ut(A)),U.connect(Q),Q.connect(u),Se++,U.onended=()=>{Se--,Q.disconnect()},U.start()}let de=()=>{if(i)for(let c of Object.keys(ge))Ze(c)},$e={prefs:e,state:b,el:s,get ready(){return!!i},get position(){return s.duration?s.currentTime/s.duration:0},get time(){return s.currentTime||0},get duration(){return s.duration||0},get playing(){return ee.on||!s.paused&&!s.ended},set(c){Object.assign(e,c),B(),se(),ie(),(!e.master||!e.guide&&b.kind==="guide")&&(s.paused||s.pause(),De()),T()},play:be,playUrl:le,say:R,voiceName:W,pause:nt,resume:te,stop:ue,seek:X,energy:Ne,peaks:He,peaksUrl:Be,sfx:Ee,unlock:se,once(c){return b.journey.has(c)||!e.master||!e.guide?Promise.resolve(!1):(b.journey.add(c),be(c).then(A=>(A||b.journey.delete(c),A)))},on(c){return n.add(c),()=>n.delete(c)}};return $e}var wr={"reply.missed":"I didn\u2019t catch that. Tap me and try again.","reply.help":"I can take you anywhere here. Say Products, Templates, Studio, Sound or Membership, or name a piece, like the Slider or the Wave. You can also ask me where you are.","reply.thanks":"With pleasure. I\u2019m right here when you need me.","reply.who":"I\u2019m the Light Orb, the guide of this place. A little light made of glass. I show you around and I answer when you call.","reply.back":"Going back.","reply.hello":"Hello. It\u2019s lovely to hear you. Where would you like to go? Products, Templates, Studio or Sound?","reply.unknown":"I\u2019m still learning words. Try Products, Templates, Studio, Sound, or ask me where you are.","reply.mic":"Allow the microphone to talk with me."},Ve=e=>({id:e,text:wr[e]}),La={profile:"your profile",downloads:"your downloads",saved:"what you have saved",designs:"the designs you made in Studio"};function Ma(e,n){if(e==="products"&&n){let i=Le.find(a=>a.id===n);if(i)return{id:`present.product.${i.id}`,text:`This is ${i.name}. ${i.kind}. ${i.line} Try its versions, then add it to your cart, save it, or take it to Studio.`}}if(e==="templates"&&n){let i=ye.find(a=>a.id===n);if(i)return{id:`present.template.${i.id}`,text:`You are looking at the template ${i.name}. ${i.line}`}}return e==="products"?{id:"present.products",text:`Welcome to Products. ${Le.length} objects of light and glass, ready to use: ${Le.map(i=>i.name).join(", ")}. Choose one to see it alive.`}:e==="templates"?{id:"present.templates",text:`These are the Templates. Complete compositions to start from: ${ye.map(i=>i.name).join(", ")}.`}:e==="studio"?{id:"present.studio",text:"You are in Studio. Here you shape the light: material, colour and movement. Make it yours, then save or export it."}:e==="sound"?{id:"present.sound",text:"This is Sound. Listen to the voices and the quiet sounds of glass that live across the site."}:e==="membership"?{id:"present.membership",text:"This is Membership. Choose how you want to work with the collection: ready-made pieces, Studio, or the full membership with a new drop every two weeks."}:e==="account"?n&&La[n]?{id:`present.account.${n}`,text:`This is your account, showing ${La[n]}.`}:{id:"present.account",text:"This is your account."}:e==="signin"?{id:"present.signin",text:"Sign in to find your saved pieces and designs."}:e==="signup"?{id:"present.signup",text:"Create an account to save pieces and keep your designs."}:{id:"present.home",text:"Welcome to The Light Orb. I will be your guide. Choose Products, Templates, Studio or Sound, and I will show you around."}}var Ca=e=>({id:`already.${e.id}`,text:`We are already here. ${e.text}`}),Aa=e=>({id:`piece.${e.id}`,text:`Here is ${e.name}. ${e.line}`}),Ra=e=>({id:`open.${e.id}`,text:`Opening ${e.name}.`}),qa=()=>({id:"piece.orb",text:`Here is the Orb. ${Le[0].line}`});var gt=(e,n,i)=>e+(n-e)*i,Jt=e=>{let n=parseInt(String(e).replace("#",""),16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]},Wr=Jt("#f3d8c5"),yr={fill:.08,lobe:.2,wall:.55,core:.034},st=e=>structuredClone(e??At);function Rt(e,n,{dark:i=!1,envBoost:a=1,exposure:p=0,left:u=.65,right:o=.55}={}){let l=n.shell,s=n.light,q=n.interior;e.setOptics({...yr,lobe:gt(.1,.3,s.spread),core:gt(.026,.044,s.spread)}),e.setInterior({kind:q.kind,amount:q.amount,size:q.size,motion:q.motion,fill:q.fill,colour:q.colour}),e.setElastic(l.elastic??0);let b=Jt(l.tint);e.setMaterial({roughness:l.roughness,thickness:gt(.3,1.4,l.thickness),ior:l.ior,envMapIntensity:(i?1.9:2.1)*a*2**(p*.5),tint:b,tintDistance:l.tintAmount>.001?gt(8,.4,l.tintAmount):0}),e.setNeutral?.(!0);let V=Jt(s.colour),C=Math.max(...V);e.setLight({tint:V.map(_=>_/Math.max(.05,C)*1.05),spread:gt(.7,1.6,s.spread)}),e.setBloom(gt(.004,.08,s.glow)),e.setFocus({x:s.x,y:s.y,z:s.z}),e.setTone(i?"dark":"light"),e.setVolumeWorld(0),e.lockFeather([.5,.515]);let m=_=>(Math.round(_*10)/10).toFixed(1);return e.setWorld(i?`chamber:${m(u)}:${m(o)}`:"gallery"),{emission:s.strength/.72*2**(p*.35),voice:n.voice}}var Oa=`
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
    inset 0 -10px 14px -10px rgba(96,104,100,.4),inset 0 10px 14px -12px rgba(255,255,255,.9),
    0 0 0 1px rgba(38,40,39,.09),0 2px 3px -1px rgba(38,40,39,.14),0 14px 24px -14px rgba(38,40,39,.45)}
.gb{position:relative;overflow:hidden}
.gb::before{content:"";position:absolute;left:10%;top:2px;width:42%;height:46%;border-radius:999px;pointer-events:none;
  background:radial-gradient(70% 90% at 40% 25%,rgba(255,255,255,.95),rgba(255,255,255,0) 72%)}
.gb::after{content:"";position:absolute;left:24%;right:24%;bottom:1px;height:34%;border-radius:999px;pointer-events:none;
  background:radial-gradient(60% 80% at 50% 100%,rgba(255,255,255,.95),rgba(255,255,255,0) 75%)}
.gb>*{position:relative;z-index:1}
.gb:hover{box-shadow:inset 0 1.5px 1px #fff,inset 0 -2px 2px rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.7),inset 0 -10px 14px -10px rgba(96,104,100,.42),inset 0 10px 14px -12px #fff,0 0 0 1px rgba(38,40,39,.11),0 3px 4px -1px rgba(38,40,39,.16),0 18px 28px -14px rgba(38,40,39,.5)}
.gb:active{transform:translateY(1px) scale(.985);box-shadow:inset 0 2px 5px rgba(96,104,100,.35),inset 0 0 0 1px rgba(255,255,255,.6),0 0 0 1px rgba(38,40,39,.1),0 4px 8px -6px rgba(38,40,39,.4)}
.gb.primary{background:linear-gradient(180deg,rgba(70,74,72,.92) 0%,rgba(30,33,32,.94) 55%,rgba(52,56,54,.92) 100%);
  box-shadow:inset 0 1.5px 1px rgba(255,255,255,.35),inset 0 -2px 2px rgba(255,255,255,.18),inset 0 0 0 1px rgba(255,255,255,.1),0 0 0 1px rgba(0,0,0,.2),0 14px 24px -12px rgba(23,26,25,.6)}
.gb.primary::before{opacity:.35}.gb.primary::after{opacity:.25}
.segbar{padding:4px;gap:2px}
.segbar .pill:not([aria-checked=true]):not([aria-selected=true]):not([aria-pressed=true]){background:none;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none}
.pill[aria-checked=true],.pill[aria-selected=true],.pill[aria-pressed=true],.pill.on{color:var(--ink)}
.dark .gb,.dark .gdd-b{background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.04) 52%,rgba(255,255,255,.1));
  box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 -1.5px 1.5px rgba(255,255,255,.16),inset 0 0 0 1px rgba(255,255,255,.1),0 10px 18px -10px rgba(0,0,0,.8)}
.dark .gb::before{opacity:.3}.dark .gb::after{opacity:.2}
.dark .gb.primary{color:#171a19;background:linear-gradient(180deg,#fafaf8,#d9dcd9)}
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
`;var za=`
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
.hd{position:fixed;left:0;right:0;top:0;height:72px;display:flex;align-items:center;gap:28px;padding:0 clamp(16px,3.2vw,44px);
  background:linear-gradient(180deg,rgba(243,243,241,.94),rgba(243,243,241,.78) 62%,rgba(243,243,241,0))}
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
.menu{position:absolute;right:0;top:48px;width:270px;padding:14px 16px;display:grid;gap:12px;transform-origin:calc(100% - 18px) 0;animation:drop .34s var(--ease)}
@keyframes drop{from{opacity:0;transform:translateY(-6px) scale(.96)}to{opacity:1;transform:none}}
.mrow{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:14px}
.mrow.col{flex-direction:column;align-items:stretch;gap:8px}
.mrow.col span{display:flex;justify-content:space-between}
.mrow output{color:var(--muted);font-variant-numeric:tabular-nums}
.guide-hit{position:fixed;border-radius:50%;border:0;background:transparent;cursor:pointer;padding:0}
.guide-hit:focus-visible{outline:2px solid var(--ink);outline-offset:4px}
.caption{position:fixed;left:50%;bottom:22px;transform:translate(-50%,8px);max-width:min(560px,84vw);padding:9px 16px;border-radius:12px;font-size:14px;text-align:center;
  background:rgba(255,255,255,.72);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:0 0 0 1px rgba(38,40,39,.06);opacity:0;transition:opacity .3s,transform .4s var(--ease);pointer-events:none}
.caption.on{opacity:1;transform:translate(-50%,0)}
body[data-route=studio] .hd{background:linear-gradient(180deg,rgba(23,26,25,.96),rgba(23,26,25,.7) 70%,rgba(23,26,25,0));color:var(--dark-ink)}
body[data-route=studio] .wm,body[data-route=studio] .nav a[aria-current],body[data-route=studio] .nav a:hover{color:var(--dark-ink)}
body[data-route=studio] .nav a,body[data-route=studio] .nav-m{color:var(--dark-muted)}
body[data-route=studio] .hd-r .gb{color:var(--dark-ink);background:rgba(255,255,255,.08);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 0 0 1px rgba(255,255,255,.06)}
body[data-route=studio] .caption{background:rgba(30,34,32,.82);color:var(--dark-ink)}
/* \u2500\u2500 Welcome: centred, quiet; Hello is revealed once, then still \u2500\u2500 */
@keyframes write{to{clip-path:inset(0 -2% 0 0)}}
@keyframes fadeup{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.wel-ctl{position:absolute;left:clamp(16px,3.2vw,44px);bottom:24px;display:flex;gap:16px;align-items:center}
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
.arc-s{display:block;margin-top:4px;font-size:13.5px;color:var(--muted);opacity:0;transition:opacity .4s}
.arc-c.on .arc-s{opacity:1}
.count{font-size:13px;color:var(--muted);font-variant-numeric:tabular-nums;min-width:44px;text-align:center}
/* \u2500\u2500 Footer \u2500\u2500 */
.ft{display:flex;align-items:center;gap:24px;flex-wrap:wrap;padding:30px clamp(16px,3.2vw,44px) 90px;border-top:1px solid var(--line);font-size:13.5px;color:var(--muted)}
.ft nav{display:flex;gap:18px}.ft nav a{text-decoration:none}.ft nav a:hover{color:var(--ink)}
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
.wel-copy.reveal>*{opacity:0;transform:translateY(10px);filter:blur(6px);animation:arrive 1.1s var(--ease) 1.3s forwards}
/* One after another: Hello, then the line, then Let's go \u2014 and all three stay */
.wel-copy.reveal>:nth-child(2){animation-delay:2.2s}.wel-copy.reveal>:nth-child(3){animation-delay:3s}
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
.wel-line{max-width:28ch}
.lede{max-width:46ch}
.fo-info p,.lock-card p{max-width:46ch;line-height:1.55}

/* \u2500\u2500 Header stays legible over scrolled titles \u2500\u2500 */
.hd{-webkit-backdrop-filter:blur(14px) saturate(1.2);backdrop-filter:blur(14px) saturate(1.2);
  -webkit-mask:linear-gradient(#000 78%,transparent);mask:linear-gradient(#000 78%,transparent);height:84px}
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
/* Home scrolls section by section (welcome \xB7 quotation \xB7 selector \xB7 footer): it never
   comes to rest between two of them, so there is no half-empty screen. */
.lo.r-home{scroll-snap-type:y mandatory}
.r-home .wel,.r-home .qt,.r-home .sel{scroll-snap-align:start;scroll-snap-stop:always}
.r-home .ft{scroll-snap-align:end}
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
`;var oe=null,Me=null,ft=null,St=0,kr=performance.now()/1e3,ae={exposure:1,target:1,impacts:[null,null],next:0,strength:1,scale:90,horizon:.27,lamp:.9,orb:null};function Qt(e){if(!Me){Me=document.createElement("canvas"),Me.className="world-preview",Me.setAttribute("aria-hidden","true"),Me.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:inherit";try{oe=ka(Me)}catch{oe=null}}return oe&&(ft=e,e.prepend(Me),ea(),Sr()),Me}function Zt(){cancelAnimationFrame(St),St=0,Me?.remove(),ft=null}function ea(){if(!ft||!oe)return;let e=ft.getBoundingClientRect();oe.resize(Math.max(2,e.width),Math.max(2,e.height),Math.min(devicePixelRatio||1,1.5))}addEventListener("resize",ea);var Ce={state:ae,setExposure(e,n=!1){ae.target=e,n&&(ae.exposure=e)},impact(e,n,i=ae.strength){let a=ae.next++%2;ae.impacts[a]={x:e,y:n,at:performance.now()/1e3,strength:i}},set(e){Object.assign(ae,e)},setOrb(e){ae.orb=e},get canvas(){return Me}};function Sr(){cancelAnimationFrame(St);let e=()=>{if(!ft||!oe)return;let n=performance.now()/1e3,i=ft.getBoundingClientRect();Math.abs(i.width-Me.width/oe.ratio)>2&&ea(),ae.exposure+=(ae.target-ae.exposure)*.05;let a=i.height,p=ae.orb;oe.setHorizon(ae.horizon),oe.setExposure(ae.exposure),oe.setNightGain(1),p?(oe.setOrb(p.x,p.y,p.d),oe.setLamp(p.x,p.y,p.d*3,ae.lamp*(1-ae.exposure)),oe.setReveal(p.x,p.y,Math.hypot(i.width,a),ae.exposure*60)):(oe.setReveal(0,0,1,0),oe.setLamp(0,0,1,0)),ae.impacts.forEach((u,o)=>oe.setImpact(o,u?.x??0,u?.y??0,u?n-u.at:-1,u?.strength??0,ae.scale)),oe.render(n-kr),St=requestAnimationFrame(e)};St=requestAnimationFrame(e)}var Ia="lightorb:cart",qt=()=>{try{return JSON.parse(localStorage.getItem(Ia))??[]}catch{return[]}},ja=e=>{try{localStorage.setItem(Ia,JSON.stringify(e))}catch{}ta.forEach(n=>n(e))},ta=new Set,ke={items:qt,has:e=>qt().some(n=>n.id===e),add(e){let n=qt();n.some(i=>i.id===e.id)||(n.push({...e,at:new Date().toISOString()}),ja(n))},remove(e){ja(qt().filter(n=>n.id!==e))},toggle(e){return ke.has(e.id)?(ke.remove(e.id),!1):(ke.add(e),!0)},on(e){return ta.add(e),()=>ta.delete(e)}};var Er=(e,n,i)=>e+(n-e)*i;var dn=Math.PI/180;var F=[e=>Math.round(e*100),e=>e/100],cn={scene:["Scene",[["scene.exposure","Exposure",-2,2,.1,"EV"],["scene.left","Left light",0,1,.01,"%",...F],["scene.right","Right light",0,1,.01,"%",...F],["scene.env","Environment",0,1,.01,"%",...F]]],light:["Light",[["orb.light.colour","Colour","color"],["orb.light.strength","Strength",0,1,.01,"%",...F],["orb.light.x","Position X",-.6,.6,.01,"r"],["orb.light.y","Position Y",-.8,.6,.01,"r"],["orb.light.z","Position Z",-.4,.4,.01,"r"],["orb.light.spread","Spread",0,1,.01,"%",...F],["orb.light.glow","Glow",0,1,.01,"%",...F]]],material:["Material",[["orb.shell.tint","Shell tint","color"],["orb.shell.tintAmount","Tint amount",0,1,.01,"%",...F],["orb.shell.roughness","Roughness",0,.5,.005,""],["orb.shell.thickness","Optical depth",0,1,.01,"r",e=>+Er(.3,1.4,e).toFixed(2),e=>(e-.3)/1.1],["orb.shell.ior","IOR",1,2,.01,""]]],interior:["Interior",[["orb.interior.kind","Type","select",[["light","Light"],["beads","Beads"],["glitter","Glitter"],["liquid","Liquid"],["gel","Gel"]]]]],voice:["Voice response",[["orb.voice.response","Response",0,1,.01,"%",...F]]],transform:["Transform",[["rot","Rotation",-180,180,1,"\xB0"]]],view:["View",[["view.yaw","Orbit",-60,60,1,"\xB0"],["view.pitch","Elevation",-20,35,1,"\xB0"],["view.zoom","Zoom",.6,1.4,.01,"%",...F]]],slider:["Capsule",[["slider.length","Length",240,600,1,"px"],["slider.height","Height",60,130,1,"px"],["slider.tint","Glass tint","color"],["slider.tintAmount","Tint amount",0,1,.01,"%",...F],["slider.preset","Orb thumb","select",rt.map(e=>[e.id,e.name])]]],wave:["Wave",[["wave.strength","Strength",.1,1,.01,"%",...F],["wave.scale","Ring scale",40,140,1,"px"],["wave.exposure","Environment",0,1,.01,"%",...F]]],bg:["Environment",[["bg.exposure","Dark \u2192 warm",0,1,.01,"%",...F],["bg.horizon","Horizon",.15,.45,.01,"%",...F],["bg.lamp","Orb lamp (dark)",0,1,.01,"%",...F]]],ctl:["Crystal controls",[["ctl.tint","Tint","color"],["ctl.tintAmount","Tint amount",0,1,.01,"%",...F],["ctl.depth","Optical depth",0,10,.5,"px"],["ctl.radius","Corner radius",6,999,1,"px"],["ctl.blur","Backdrop blur",0,24,1,"px"]]]},pn={beads:[["orb.interior.amount","Count",0,1,.01,"",e=>Math.round(8+e*36),e=>(e-8)/36],["orb.interior.size","Bead size",0,1,.01,"%",...F],["orb.interior.motion","Motion",0,1,.01,"%",...F]],glitter:[["orb.interior.amount","Density",0,1,.01,"%",...F],["orb.interior.size","Fleck size",0,1,.01,"%",...F],["orb.interior.motion","Sparkle drift",0,1,.01,"%",...F],["orb.interior.colour","Colour","color"]],liquid:[["orb.interior.fill","Fill",0,1,.01,"%",...F],["orb.interior.motion","Slosh",0,1,.01,"%",...F],["orb.interior.colour","Colour","color"]],gel:[["orb.shell.elastic","Elasticity",0,1,.01,"%",...F],["orb.interior.amount","Body size",0,1,.01,"%",...F],["orb.interior.motion","Motion",0,1,.01,"%",...F],["orb.interior.colour","Colour","color"]],light:[]};function Pa(e){let n=null,i=null,a=null,p={},u={emission:1},o=document.createElement("div");o.className="x-product",o.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:31",document.body.append(o);let l={x:-999,y:-999,d:100,vis:0},s={x:-999,y:-999,d:100,vis:0,vx:0,vy:0,vd:0},q=!0;function b(){return n||i||(i=ya({container:o,diameter:240,driven:!0,background:"#f3f3f1"}).then(C=>(n=C,i=null,C.attachPointer(document.createElement("div"))(),C.setBackdrop((m,_)=>e.drawBackdrop(m,_,s)),C.setVisibility(0),C.tick(performance.now()),a&&V(),C)).catch(()=>{i=null})),i}function V(){n&&a&&(u=Rt(n,a,p),n.setEmission(Math.min(1.4,u.emission)))}return{get orb(){return n},get element(){return n?.element},get output(){return u},show(C,m={}){a=st(C),p=m,q=!1,b(),V()},update(C,m=p){a=st(C),p=m,V()},hide(){q=!0,n&&(n.setVisibility(0),n.setView({yaw:0,pitch:0}),n.setObjectYaw(0),n.setSpeech(0),n.tick(performance.now())),s.vis=0,s.x=-999},attachPointer(C){return n?n.attachPointer(C,{range:"volume"}):(b()?.then(m=>m?.attachPointer(C,{range:"volume"})),null)},frame(C){if(!n)return;if(!C||q){(s.vis>0||n.element.style.visibility!=="hidden")&&(s.vis=0,n.setVisibility(0),n.tick(performance.now()));return}let m=1/60,_=9;if(C.snap||s.x<-900)Object.assign(s,{x:C.x,y:C.y,d:C.d,vx:0,vy:0,vd:0});else for(let T of["x","y","d"]){let B="v"+T;s[B]+=(_*_*(C[T]-s[T])-2*_*s[B])*m,s[T]+=s[B]*m}s.vis+=((C.vis??1)-s.vis)*.2,n.holdRaster(Math.ceil(Math.max(s.d,C.d,120)*1.06)),n.setPose({x:s.x,y:s.y,diameter:s.d}),n.setVisibility(s.vis),n.tick(performance.now())},pose:s}}var ra=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null,Na=!!ra;function Ha({onresult:e,onend:n,onerror:i}){if(!ra)return i?.("unsupported"),null;let a=new ra;a.lang=navigator.language||"en-US",a.interimResults=!0,a.maxAlternatives=1,a.continuous=!1;let p="",u="";a.onresult=o=>{u=[...o.results].map(l=>l[0].transcript).join(" "),o.results[o.results.length-1].isFinal&&(p=u),e?.(u,!!p)},a.onerror=o=>i?.(o.error),a.onend=()=>n?.(p||u);try{a.start()}catch{return i?.("busy"),null}return a}var Da=e=>String(e).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),_e=(e,...n)=>n.some(i=>new RegExp(`\\b${i}\\b`).test(e)),$r={home:["home","start","beginning","inicio","principio","portada"],products:[...ce[0].words,"productos","producto","tienda","objetos"],templates:[...ce[1].words,"plantillas","plantilla","composiciones"],studio:[...ce[2].words,"estudio","editar","personalizar","disenar"],sound:[...ce[3].words,"sonido","sonidos","voces","escuchar","audio"],membership:["membership","member","plans","plan","pricing","price","prices","membresia","miembro","planes","precio","precios","cuesta","cost"],account:["account","profile","downloads","cuenta","perfil","descargas"],signin:["sign in","log in","login","iniciar sesion","entrar"]},Tr={home:"#/",membership:"#/membership",account:"#/account",signin:"#/signin"},Lr={"orb-slider":["slider","deslizador"],"orb-wave":["wave","ola","onda","ripple"],"background-pack":["background","backgrounds","fondo","fondos"],"crystal-controls":["controls","buttons","controles","botones","crystal"]},Ae=(e,n={})=>({say:e.text,id:e.id,...n});function Ba(e,{here:n,presentation:i}){let a=Da(e);if(!a)return Ae(Ve("reply.missed"),{intent:"fallback"});if(a.split(" ").length<=3&&_e(a,"stop","quiet","silence","shh","para","calla","callate","silencio","basta"))return{say:"",stop:!0,command:!0};if(_e(a,"where am i","where are we","donde estoy","donde estamos","que es esto","what is this","what is here","que hay aqui"))return Ae(i(),{intent:"where"});if(_e(a,"help","what can you do","what can i do","ayuda","ayudame","que puedes hacer","que puedo hacer"))return Ae(Ve("reply.help"),{intent:"help"});if(_e(a,"thank you","thanks","gracias"))return Ae(Ve("reply.thanks"),{intent:"thanks"});if(_e(a,"who are you","what are you","quien eres","que eres","como te llamas","your name"))return Ae(Ve("reply.who"),{intent:"who"});if(_e(a,"back","go back","atras","volver","vuelve"))return Ae(Ve("reply.back"),{back:!0,command:!0});for(let[u,o]of Object.entries(Lr))if(_e(a,...o)){let l=Le.find(s=>s.id===u);if(l)return Ae(Aa(l),{go:`#/products/${u}`,quiet:!0,command:!0})}let p=ye.find(u=>a.includes(Da(u.name)));if(p)return Ae(Ra(p),{go:`#/templates/${p.id}`,quiet:!0,command:!0});for(let[u,o]of Object.entries($r))if(_e(a,...o))return u===n?Ae(Ca(i()),{command:!0}):{go:Tr[u]??`#/${u}`,command:!0};return _e(a,"the orb","orb","esfera","la orb","bola")?Ae(qa(),{go:`#/products/${Le[0].id}`,quiet:!0}):_e(a,"hello","hi","hey","hola","buenas","buenos dias","buenas tardes","buenas noches")?Ae(Ve("reply.hello"),{intent:"hello"}):Ae(Ve("reply.unknown"),{intent:"fallback"})}var Fa=()=>!!"",Mr=/^#\/(products(\/[a-z0-9-]+)?|templates(\/[a-z0-9-]+)?|studio|sound|membership|account)?$/;async function Ga(e,n,{timeout:i=8e3}={}){if(!"")throw new Error("disabled");let a=new AbortController,p=setTimeout(()=>a.abort(),i);try{let u=await fetch("",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({messages:e,page:n}),signal:a.signal});if(!u.ok)throw new Error(`http ${u.status}`);let o=await u.json(),l=typeof o.say=="string"?o.say.trim().slice(0,600):"";if(!l)throw new Error("empty");return{say:l,go:typeof o.go=="string"&&Mr.test(o.go)?o.go:void 0}}finally{clearTimeout(p)}}var Cr=/\b(el|la|los|las|que|para|con|una|un|es|est[aá]|aqu[ií]|hola|puedes|quieres|de|y|tu|te|me|por|del)\b/gi,Va=e=>/[ñ¿¡]/i.test(e)||(String(e).match(Cr)?.length??0)>=3;var _a={},Wa={member:""},Ya="",Ua=e=>"",na=e=>(location.assign(e),!0),Ie={get enabled(){return!1},canCheckout:e=>!!e.length&&e.every(n=>Ua(n.id)),canSubscribe:e=>!!!1,canRestore:()=>!!!1,checkout(e){return Ie.canCheckout(e)?(na(Ua(e[0].id)),e[0].id):null},subscribe(e){return Ie.canSubscribe(e)?na(Wa[e]):!1},restore(){return Ie.canRestore()?na(Ya):!1}};var pe={saved:"lightorb:saved",designs:"lightorb:designs",profile:"lightorb:profile"},Ye=(e,n)=>{try{return JSON.parse(localStorage.getItem(e))??n}catch{return n}},Et=(e,n)=>{try{return localStorage.setItem(e,JSON.stringify(n)),!0}catch{return!1}},he={saved:()=>Ye(pe.saved,[]),isSaved:(e,n)=>Ye(pe.saved,[]).some(i=>i.type===e&&i.id===n),toggleSaved(e,n,i,a){let p=Ye(pe.saved,[]),u=p.findIndex(o=>o.type===e&&o.id===n);return u>=0?p.splice(u,1):p.unshift({type:e,id:n,name:i,href:a,at:new Date().toISOString()}),Et(pe.saved,p),u<0},designs:()=>Ye(pe.designs,[]),design:e=>Ye(pe.designs,[]).find(n=>n.id===e),saveDesign(e){let n=Ye(pe.designs,[]),i=n.findIndex(a=>a.id===e.id);return i>=0?n[i]=e:n.unshift(e),Et(pe.designs,n.slice(0,40))},renameDesign(e,n){let i=Ye(pe.designs,[]),a=i.find(p=>p.id===e);a&&(a.name=n,Et(pe.designs,i))},deleteDesign(e){Et(pe.designs,Ye(pe.designs,[]).filter(n=>n.id!==e))},profile:()=>Ye(pe.profile,null),setProfile:e=>Et(pe.profile,e)},Xa=[["profile","Profile"],["designs","My Designs"],["saved","Saved"],["downloads","Downloads"]],Rr='<p class="note">Local preview: accounts are not connected yet. What you see here is kept in this browser only.</p>';function mt(e,n,i="profile"){let{esc:a,audio:p}=n;Xa.some(l=>l[0]===i)||(i="profile");let u=he.profile();e.innerHTML=`
    <section class="dest acct">
      <header class="dh"><p class="kicker">Account</p><h1>${u?.name?a(u.name):"Your space"}</h1>${Rr}</header>
      <nav class="segbar acct-tabs" aria-label="Account">${Xa.map(([l,s])=>`<a class="pill" href="#/account/${l}" ${l===i?'aria-current="page" aria-pressed="true"':""}>${s}</a>`).join("")}</nav>
      <div class="acct-body" data-body></div>
    </section>${n.footer()}`;let o=e.querySelector("[data-body]");if(i==="profile"&&(o.innerHTML=`<form class="form" data-prof>
        <label class="fl"><span>Display name</span><input class="gi" name="name" value="${a(u?.name||"")}" placeholder="How the site greets you" maxlength="40"></label>
        <div class="acts"><button class="gb primary" type="submit">Save on this device</button>${u?'<button class="gb" type="button" data-forget>Forget</button>':""}</div>
        <p class="note">Sign-in and email are not available yet. <a href="#/signin">About signing in</a></p>
      </form>
      <div class="kv"><span>Sound</span><b>${p.prefs.master?"On":"Off"}</b><span>Narration</span><b>${p.prefs.guide?"On":"Off"}</b><span>Guide voice</span><b>${a(p.prefs.voice)}</b><span>Membership</span><b>Not available yet</b></div>`,o.querySelector("[data-prof]").addEventListener("submit",l=>{l.preventDefault();let s=l.target.name.value.trim();he.setProfile(s?{name:s}:null),p.sfx("confirm"),mt(e,n,"profile")}),o.querySelector("[data-prof] .gi").addEventListener("input",l=>{l.isTrusted&&p.sfx("type")}),o.querySelector("[data-forget]")?.addEventListener("click",()=>{try{localStorage.removeItem(pe.profile)}catch{}mt(e,n,"profile")})),i==="designs"){let l=he.designs();o.innerHTML=l.length?`<div class="dgrid">${l.map(s=>`<article class="dc" data-d="${s.id}">
        <a class="dc-img" href="#/studio?design=${s.id}" aria-label="Open ${a(s.name)} in Studio">${s.thumb?`<img src="${s.thumb}" alt="">`:""}</a>
        <input class="dc-n gi" value="${a(s.name)}" aria-label="Design name" maxlength="48">
        <p class="note">${a(s.familyName)} \xB7 ${new Date(s.at).toLocaleDateString()}</p>
        <div class="acts"><a class="gb small primary" href="#/studio?design=${s.id}">Open in Studio</a><button class="gb small" type="button" data-del>Delete</button></div></article>`).join("")}</div>`:'<div class="empty"><h2>No designs yet</h2><p>Designs you save in Studio appear here, with a picture of each one.</p><a class="gb primary" href="#/studio">Open Studio</a></div>',o.querySelectorAll("[data-d]").forEach(s=>{let q=s.dataset.d,b=s.querySelector(".dc-n");b.addEventListener("change",()=>{he.renameDesign(q,b.value.trim()||"Untitled design"),p.sfx("confirm")}),b.addEventListener("input",V=>{V.isTrusted&&p.sfx("type")}),s.querySelector("[data-del]").addEventListener("click",()=>{confirm(`Delete \u201C${b.value}\u201D? This cannot be undone.`)&&(he.deleteDesign(q),p.sfx("close"),mt(e,n,"designs"))})})}if(i==="saved"){let l=he.saved();o.innerHTML=l.length?`<ul class="slist">${l.map((s,q)=>`<li><span class="kicker">${s.type}</span><a href="${s.href}">${a(s.name)}</a><button class="pill" type="button" data-rm="${q}">Remove</button></li>`).join("")}</ul>`:'<div class="empty"><h2>Nothing saved yet</h2><p>Save products, templates and sounds to find them here.</p><a class="gb primary" href="#/products">Explore products</a></div>',o.querySelectorAll("[data-rm]").forEach(s=>s.addEventListener("click",()=>{let q=l[+s.dataset.rm];he.toggleSaved(q.type,q.id),p.sfx("close"),mt(e,n,"saved")}))}i==="downloads"&&(o.innerHTML=`<div class="empty"><h2>No downloads yet</h2><p>Pieces you buy will be listed here once purchasing opens. Studio exports are saved directly to your computer.</p>${Ie.canRestore()?'<a class="gb primary" href="#" data-restore>Find my purchases</a>':""}</div>`),o.querySelector("[data-restore]")?.addEventListener("click",l=>{l.preventDefault(),Ie.restore()})}function oa(e,n,i){e.innerHTML=`
    <section class="dest sign">
      <header class="dh"><p class="kicker">Account</p><h1>${i==="in"?"Sign in":"Create an account"}</h1></header>
      <form class="form" data-sign novalidate>
        <label class="fl"><span>Email</span><input class="gi" type="email" name="email" autocomplete="email" disabled></label>
        <label class="fl"><span>Password</span><input class="gi" type="password" name="pw" autocomplete="${i==="in"?"current-password":"new-password"}" disabled></label>
        <div class="acts"><button class="gb primary" type="submit" disabled>${i==="in"?"Sign in":"Create account"}</button><a class="gb" href="#/account">Continue on this device</a></div>
        <p class="note">Accounts open with membership. Until then nothing is sent and no password is collected; your saved work stays in this browser.</p>
        <p class="note">${i==="in"?'New here? <a href="#/signup">Create an account</a>':'Already have one? <a href="#/signin">Sign in</a>'}</p>
      </form>
    </section>${n.footer()}`}function Ka(e,n){let i=Ea;e.innerHTML=`
    <section class="dest memb">
      <header class="dh"><p class="kicker">Membership</p><h1>${i.promise}</h1><p class="dh-l">Three ways to work with The Light Orb. Prices, billing and what each plan includes are still being decided.</p></header>
      <div class="plans">${i.plans.map(a=>`<article class="plan${a.id==="member"?" em":""}"><h2>${a.name}</h2><p>${a.line}</p><ul>${a.points.map(p=>`<li>${p}</li>`).join("")}</ul>
        ${a.id==="ready"?'<a class="gb" href="#/products">Explore products</a>':a.id==="studio"?'<a class="gb" href="#/studio">About Studio</a>':Ie.canSubscribe(a.id)?`<button class="gb primary" type="button" data-join="${a.id}">Join</button>`:`<button class="gb primary" type="button" disabled aria-disabled="true">${i.open?"Join":"Membership opens soon"}</button>`}</article>`).join("")}</div>
      <form class="form interest" data-interest>
        <h2>Hear when it opens</h2>
        <label class="fl"><span>Email</span><input class="gi" type="email" name="email" disabled placeholder="Not collected yet"></label>
        <button class="gb" type="submit" disabled>Notify me</button>
        <p class="note">Sign-ups are not being collected yet \u2014 there is no mailing list connected, so nothing typed here would be sent.</p>
      </form>
    </section>${n.footer()}`,e.querySelectorAll("[data-join]").forEach(a=>a.addEventListener("click",()=>Ie.subscribe(a.dataset.join)))}var qr=`<svg class="wm-o" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><defs><mask id="wm-counter"><rect width="100" height="100" fill="#fff"/>
  <path fill="#000" d="M49 9C31 9 23 29 23 50c0 24 12 42 30 42 15 0 23-9 23-20 0-9-7-12-11-21-4-9-2-19 0-27 1-9-5-15-16-15z"/></mask></defs>
  <circle cx="50" cy="50" r="46" fill="currentColor" mask="url(#wm-counter)"/></svg>`,ia=`<span class="wm-t">The Light</span>${qr}<span class="wm-t wm-rb">rb</span>`;var Tt=[{id:"clear",base:"clear",name:"Clear",line:"Thick clear glass, nothing inside but its own depth."},{id:"smoke",base:"clear",name:"Smoke",line:"Smoked glass, a grey depth that darkens to the rim.",tint:[.6,.62,.65]},{id:"amber",base:"clear",name:"Amber",line:"Warm amber glass, like light through honey.",tint:[1,.8,.52]},{id:"chrome",base:"chrome",name:"Chrome",line:"Liquid chrome that keeps folding the room it reflects."},{id:"gold",base:"chrome",name:"Liquid Gold",line:"Molten gold folding over itself.",tint:[1,.79,.45]},{id:"gunmetal",base:"chrome",name:"Gunmetal",line:"Dark liquid metal with cold highlights.",tint:[.5,.53,.57]},{id:"porcelain",base:"porcelain",name:"Porcelain",line:"Raised porcelain bands with gold edges over dark glass."},{id:"silverline",base:"porcelain",name:"Silverline",line:"Porcelain bands edged in silver over dark glass.",accent:[.82,.84,.88]},{id:"celadon",base:"porcelain",name:"Celadon",line:"Porcelain bands over green celadon glass.",tint:[.22,.36,.3]},{id:"bloom",base:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud."},{id:"lilac",base:"bloom",name:"Lilac",line:"Milky glass holding a slow violet cloud.",tint:[.62,.45,1],accent:[.86,.76,1]},{id:"lagoon",base:"bloom",name:"Lagoon",line:"Milky glass holding a slow sea-blue cloud.",tint:[.2,.62,.9],accent:[.6,.92,.9]},{id:"core",base:"core",name:"Core",line:"Clear glass holding one soft white light at its centre."},{id:"dawn",base:"core",name:"Dawn",line:"Clear glass holding a warm, low light.",tint:[1,.72,.45]},{id:"starlight",base:"points",name:"Starlight",line:"Clear glass full of small points of light that drift and twinkle."},{id:"firefly",base:"points",name:"Firefly",line:"Warm points of light drifting slowly inside the glass.",tint:[1,.78,.4]},{id:"glitter",base:"glitter",name:"Glitter",line:"Fine silver flecks that catch the light as the sphere turns."},{id:"goldleaf",base:"glitter",name:"Gold Leaf",line:"Flakes of gold suspended in clear glass.",tint:[1,.78,.4]},{id:"beads",base:"beads",name:"Beads",line:"Small milky glass beads floating inside the shell."},{id:"pearls",base:"beads",name:"Pearls",line:"Soft pearls with a faint rainbow sheen, floating inside.",tint:[1,.95,.97],accent:[.85,.9,1]}],Or={clear:0,chrome:1,porcelain:2,bloom:3,core:4,points:5,glitter:6,beads:7},Ja={0:{tint:[1,1,1],accent:[1,1,1]},1:{tint:[1,1,1],accent:[1,1,1]},2:{tint:[.13,.17,.18],accent:[.86,.64,.3]},3:{tint:[1,.42,.45],accent:[1,.72,.68]},4:{tint:[1,.97,.92],accent:[1,1,1]},5:{tint:[.92,.96,1],accent:[1,1,1]},6:{tint:[.95,.96,1],accent:[1,1,1]},7:{tint:[.97,.97,.96],accent:[1,.9,.95]}},zr=e=>{let n=Tt.find(a=>a.id===e)??Tt[0],i=Or[n.base];return{k:i,tint:n.tint??Ja[i].tint,accent:n.accent??Ja[i].accent}},jr=`
  uniform mat3 uRot;
  varying vec3 vN; varying vec3 vP; varying vec3 vObj;
  void main() {
    vObj = uRot * position;              // the material turns with the drag
    vN = normalize(normalMatrix * normal);
    vec4 wp = modelViewMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    gl_Position = projectionMatrix * wp;
  }`,Ir=`
  precision highp float;
  uniform int uKind; uniform vec3 uTint; uniform vec3 uAccent; uniform float uTime; uniform float uStir; uniform mat3 uRot;
  varying vec3 vN; varying vec3 vP; varying vec3 vObj;

  float h3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float noise(vec3 x) {
    vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
  float fbm(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; } return s; }

  // A neutral photographic studio: dark floor, bright sky, two soft boxes.
  float env(vec3 d) {
    float sky = smoothstep(-0.05, 0.7, d.y);
    float floorTone = 0.06 + 0.12 * smoothstep(-1.0, -0.05, d.y);
    float v = mix(floorTone, 0.82, sky);
    v += 0.9 * exp(-pow((d.y - 0.08) * 9.0, 2.0));                          // horizon line
    v += 1.4 * smoothstep(0.86, 0.95, dot(d, normalize(vec3(-0.6, 0.55, 0.6))));   // key box
    v += 0.7 * smoothstep(0.9, 0.97, dot(d, normalize(vec3(0.75, 0.25, 0.3))));    // rim box
    return v;
  }
  vec3 toObj(vec3 v) { return uRot * v; }

  void main() {
    vec3 N = normalize(vN), V = normalize(-vP);
    float ndv = clamp(dot(N, V), 0.0, 1.0);
    float fres = 0.04 + 0.96 * pow(1.0 - ndv, 5.0);
    vec3 R = reflect(-V, N);
    vec3 n = normalize(vObj);            // object-space point on the sphere
    float t = uTime;
    vec3 col; float alpha = 1.0;

    if (uKind == 0) {
      // Clear glass with volume: refracted studio, darker inner wall, bright rim, caustic pool.
      vec3 T = refract(-V, N, 1.0 / 1.5);
      float through = env(normalize(T * vec3(1.0, -1.0, 1.0)));           // the image turns over in the glass
      float wall = smoothstep(0.55, 0.15, ndv);
      float caustic = exp(-pow((n.y + 0.72) * 4.0, 2.0)) * smoothstep(0.2, 0.9, ndv) * 0.6;
      float v = mix(0.94, through * 0.55 + 0.4, 0.55) - wall * 0.28 + caustic + env(R) * fres * 1.2;
      v += 0.35 * pow(1.0 - ndv, 2.5);
      col = vec3(v) * vec3(0.985, 0.99, 1.0) * mix(vec3(1.0), uTint, 0.35 + 0.65 * smoothstep(0.9, 0.2, ndv));
      alpha = clamp(0.34 + 0.66 * pow(1.0 - ndv, 1.6) + caustic * 0.4 + fres, 0.0, 1.0);
    } else if (uKind >= 4) {
      // Clear glass with something inside: a soft core, points of light, flecks or beads.
      vec3 T = refract(-V, N, 1.0 / 1.45);
      float wall = smoothstep(0.55, 0.15, ndv);
      float base = mix(0.93, env(normalize(T * vec3(1.0, -1.0, 1.0))) * 0.5 + 0.42, 0.5) - wall * 0.22 + env(R) * fres * 1.1 + 0.3 * pow(1.0 - ndv, 2.5);
      vec3 p = n * 0.95, rd = toObj(normalize(T));
      vec3 glow = vec3(0.0); float occ = 0.0;
      for (int i = 0; i < 24; i++) {
        p += rd * 0.08;
        float r2 = dot(p, p); if (r2 > 0.9) break;
        if (uKind == 4) {
          glow += uTint * exp(-r2 * 14.0) * 0.07 * (1.0 + 0.15 * sin(t * 1.3) + uStir * 0.5);
        } else {
          vec3 q = p * (uKind == 7 ? 3.2 : 6.0) + vec3(0.0, t * (uKind == 5 ? 0.12 : 0.05), t * 0.03) * (1.0 + uStir * 2.0);
          vec3 c = floor(q), f = fract(q) - 0.5;
          vec3 o = vec3(h3(c), h3(c + 3.1), h3(c + 7.7)) - 0.5;
          float d = length(f - o * 0.6), rnd = h3(c + 1.7);
          if (uKind == 5) {                        // points of light
            float on = step(0.55, rnd);
            glow += uTint * on * (exp(-d * d * 700.0) * 2.4 + exp(-d * d * 90.0) * 0.12) * (0.55 + 0.45 * sin(t * 2.0 + rnd * 30.0));
          } else if (uKind == 6) {                 // flakes that flash as they face the light
            float on = step(0.4, rnd);
            float face = pow(abs(sin(rnd * 40.0 + t * 0.7 + dot(n, vec3(3.0)))), 24.0);
            glow += uTint * on * exp(-d * d * 500.0) * (0.35 + 3.0 * face);
          } else {                                 // beads: small milky spheres
            float on = step(0.5, rnd), rb = 0.16 + 0.06 * h3(c + 5.0);
            float inb = on * (1.0 - smoothstep(rb - 0.03, rb, d));
            vec3 bc = mix(uTint, uAccent, 0.5 + 0.5 * sin(rnd * 20.0 + d * 30.0));
            float k = clamp(d / rb, 0.0, 1.0);
            float shade = 0.35 + 0.5 * sqrt(1.0 - k * k) + 0.6 * exp(-pow(k - 0.55, 2.0) * 60.0) * 0.4;   // rounded body, soft rim
            glow += bc * inb * (1.0 - occ) * shade * 0.45;
            occ = clamp(occ + inb * 0.35, 0.0, 1.0);
          }
        }
      }
      col = vec3(base) * vec3(0.985, 0.99, 1.0) * (1.0 - occ * 0.75) + glow;
      alpha = clamp(0.4 + 0.6 * pow(1.0 - ndv, 1.6) + fres + occ * 0.6 + dot(glow, vec3(0.3)), 0.0, 1.0);
    } else if (uKind == 1) {
      // Liquid chrome: bright silver, the reflection folded by a slow flow, fine dark veins.
      float w = fbm(n * 1.2 + vec3(0.0, t * 0.06, t * 0.04));
      float w2 = fbm(n * 2.2 - vec3(t * 0.04, 0.0, 0.0) + w * 2.4);
      vec3 Rw = normalize(R + vec3(sin(w * 8.0 + n.y * 2.0), cos(w2 * 6.0), sin(w * 5.0 - n.x * 3.0)) * (0.35 + 0.3 * uStir));
      float e = env(Rw);
      float f = w2 * 8.0 + w * 5.0;
      float vein = 1.0 - smoothstep(0.0, 0.3, abs(sin(f)));          // thin dark folds
      float lip = smoothstep(0.1, 0.0, abs(sin(f) - 0.32)) * 0.6;       // the bright lip beside each fold
      float silver = 0.28 + 0.62 * e;
      float v = silver * (1.0 - 0.82 * vein * smoothstep(0.35, 0.7, w2 + 0.2)) + lip * e;
      col = vec3(v) * vec3(0.96, 0.97, 0.99) * uTint + vec3(0.12) * fres;
    } else if (uKind == 2) {
      // Porcelain bands: a contour field, raised every other band, gold at each step.
      vec3 q = n * 1.25 + vec3(t * 0.015, 0.0, -t * 0.01);
      float f = fbm(q) + 0.35 * fbm(q * 2.0 + 4.0);
      float v = f * 11.0, fr = fract(v);
      float band = 1.0 - (1.0 - smoothstep(0.0, 0.2, fr)) * (1.0 - smoothstep(1.0, 0.8, fr)) * 0.0;
      float edge = 1.0 - smoothstep(0.012, 0.035, min(abs(fr - 0.2), abs(fr - 0.8)));
      float plateau = smoothstep(0.19, 0.26, fr) * smoothstep(0.81, 0.74, fr);
      // Normal from the plateau shape (bevelled porcelain).
      float e2 = 0.012;
      vec3 tx = normalize(cross(n, vec3(0.0, 1.0, 0.001))), ty = cross(n, tx);
      float fx = (fbm(q + tx * e2) + 0.35 * fbm((q + tx * e2) * 2.0 + 4.0)) * 11.0, fy = (fbm(q + ty * e2) + 0.35 * fbm((q + ty * e2) * 2.0 + 4.0)) * 11.0;
      vec2 g = vec2(fx - v, fy - v) / e2;
      float slope = (smoothstep(0.1, 0.3, fr) * (1.0 - smoothstep(0.1, 0.3, fr)) * 4.0 - smoothstep(0.7, 0.9, fr) * (1.0 - smoothstep(0.7, 0.9, fr)) * 4.0);
      vec3 bentObj = normalize(n - (tx * g.x + ty * g.y) * slope * 0.012);
      vec3 bN = normalize(transpose(uRot) * bentObj);
      bN = normalize(mix(N, bN, 0.9));
      vec3 bR = reflect(-V, bN);
      float diff = clamp(dot(bN, normalize(vec3(-0.5, 0.7, 0.6))), 0.0, 1.0);
      float spec = env(bR);
      float crack = smoothstep(0.03, 0.0, abs(fbm(n * 6.0) - 0.5)) * 0.5;
      vec3 porcelain = vec3(0.95, 0.94, 0.92) * (0.45 + 0.6 * diff) + spec * 0.22;
      vec3 glass = uTint * (0.6 + 0.6 * env(R)) + crack * vec3(0.5, 0.6, 0.62) + 0.05;
      vec3 gold = uAccent * (0.45 + 0.9 * env(bR));
      col = mix(glass, porcelain, plateau);
      col = mix(col, gold, edge * 0.95);
      col += fres * 0.25;
    } else {
      // Bloom: milky glass, a slow pink cloud inside (a short march through the volume).
      vec3 T = normalize(refract(-V, N, 1.0 / 1.35));
      vec3 p = n * 0.96, rd = toObj(T);
      float dens = 0.0; vec3 cloud = vec3(0.0);
      for (int i = 0; i < 14; i++) {
        p += rd * 0.13;
        if (dot(p, p) > 0.93) break;
        vec3 fp = p * 1.5 + vec3(t * 0.06, -t * 0.04, t * 0.05) + uStir * 0.4;
        float sw = fbm(fp + fbm(fp * 1.7) * 1.6);
        float d = smoothstep(0.42, 0.72, sw) * (1.0 - smoothstep(0.55, 0.95, length(p)));
        vec3 c = mix(uTint, uAccent, smoothstep(0.5, 0.75, sw));
        c = mix(c, vec3(0.86, 0.6, 1.0), 0.18 * sin(sw * 9.0 + t * 0.3) + 0.08);
        cloud += c * d * (1.0 - dens) * 0.42; dens += d * (1.0 - dens) * 0.42;
      }
      vec3 milk = vec3(0.985, 0.975, 0.98) * (0.86 + 0.14 * env(R));
      col = mix(milk, cloud / max(dens, 0.001), clamp(dens * 1.1, 0.0, 0.92));
      vec3 irid = 0.5 + 0.5 * cos(6.2832 * (pow(1.0 - ndv, 1.5) * 1.2 + vec3(0.0, 0.33, 0.67)));
      col += irid * 0.16 * pow(1.0 - ndv, 2.0) + env(R) * fres * 0.5;
      alpha = clamp(0.8 + 0.2 * pow(1.0 - ndv, 1.2), 0.0, 1.0);
    }
    col = col / (1.0 + col * 0.12);   // gentle highlight roll-off
    gl_FragColor = vec4(col * alpha, alpha);
  }`,$t=null;function Pr(){if($t)return $t;let e=document.createElement("canvas"),n=new Ft({canvas:e,alpha:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0});n.setClearColor(0,0);let i=new Nt,a=new Bt(30,1,.1,20);a.position.set(0,0,4.9);let p=new wa({vertexShader:jr,fragmentShader:Ir,transparent:!0,premultipliedAlpha:!0,uniforms:{uKind:{value:0},uTint:{value:new Pt(1,1,1)},uAccent:{value:new Pt(1,1,1)},uTime:{value:0},uStir:{value:0},uRot:{value:new Dt}}});return i.add(new Ht(new va(1,128,96),p)),$t={r:n,scene:i,camera:a,mat:p,list:new Set,raf:0},$t}function sa(){let e=$t;e.raf=0;let n=performance.now()/1e3,i=Math.min(devicePixelRatio||1,1.5);for(let p of e.list){if(!p.visible||!p.canvas.isConnected)continue;p.step(n);let u=Math.max(2,Math.round(p.canvas.clientWidth*i)),o=Math.max(2,Math.round(p.canvas.clientHeight*i));(p.canvas.width!==u||p.canvas.height!==o)&&(p.canvas.width=u,p.canvas.height=o),e.r.setSize(u,o,!1),e.camera.aspect=u/o,e.camera.updateProjectionMatrix();{let s=zr(p.kind);e.mat.uniforms.uKind.value=s.k,e.mat.uniforms.uTint.value.fromArray(s.tint),e.mat.uniforms.uAccent.value.fromArray(s.accent)}e.mat.uniforms.uTime.value=p.time,e.mat.uniforms.uStir.value=p.stir,e.mat.uniforms.uRot.value.copy(p.rot),e.r.render(e.scene,e.camera);let l=p.ctx;l.clearRect(0,0,u,o),l.drawImage(e.r.domElement,0,0,u,o)}let a=!1;for(let p of e.list)if(p.visible&&p.canvas.isConnected){a=!0;break}a&&(e.raf=requestAnimationFrame(sa))}function la(e,n="clear",{interactive:i=!0,reduced:a=matchMedia("(prefers-reduced-motion: reduce)").matches}={}){let p;try{p=Pr()}catch{let T=()=>{};return new Proxy({},{get:()=>T})}let u=document.createElement("canvas");u.className="sph-c",u.setAttribute("aria-hidden","true"),e.append(u);let o={v:.4,vel:a?0:.12},l={v:-.15,vel:0},s={x:0,y:0,tx:0,ty:0},q=new ba,b=new xa,V=performance.now()/1e3,C=null,m={canvas:u,ctx:u.getContext("2d"),kind:n,visible:!1,time:Math.random()*40,stir:0,rot:new Dt,step(T){let B=Math.min(.05,T-V);V=T,C||(o.vel+=((a?0:.12)-o.vel)*B*.8,l.vel*=Math.exp(-B*3),l.v+=(-.15-l.v)*B*.8),o.v+=o.vel*B,l.v=Math.max(-1.2,Math.min(1.2,l.v+l.vel*B)),s.x+=(s.tx-s.x)*B*5,s.y+=(s.ty-s.y)*B*5,m.stir*=Math.exp(-B*1.6),m.time+=B*(a?.3:1)*(1+m.stir*3),b.set(l.v+s.y*.25,o.v+s.x*.35,0,"YXZ"),q.makeRotationFromEuler(b),m.rot.setFromMatrix4(q)}};if(i){u.style.touchAction="pan-y",u.style.cursor="grab",u.addEventListener("pointerdown",N=>{C={x:N.clientX,y:N.clientY,t:performance.now(),moved:!1},u.setPointerCapture(N.pointerId),u.style.cursor="grabbing"}),u.addEventListener("pointermove",N=>{let ie=u.getBoundingClientRect();if(s.tx=((N.clientX-ie.left)/ie.width-.5)*2,s.ty=((N.clientY-ie.top)/ie.height-.5)*2,!C)return;let se=performance.now(),be=N.clientX-C.x,le=N.clientY-C.y,xe=Math.max(8,se-C.t)/1e3;Math.hypot(be,le)>3&&(C.moved=!0),o.v+=be*.01,l.v+=le*.01,o.vel=be*.01/xe*.6,l.vel=le*.01/xe*.6,C.x=N.clientX,C.y=N.clientY,C.t=se});let T=N=>{C&&(C.moved||(m.stir=Math.min(1.5,m.stir+1)),C=null,u.style.cursor="grab")};u.addEventListener("pointerup",T),u.addEventListener("pointercancel",T),u.addEventListener("pointerleave",()=>{s.tx=s.ty=0});let B=!1;u.addEventListener("pointerdown",()=>{B=!1},!0),u.addEventListener("pointermove",()=>{C?.moved&&(B=!0)}),u.addEventListener("click",N=>{B&&(N.preventDefault(),N.stopPropagation())})}let _=new IntersectionObserver(([T])=>{m.visible=T.isIntersecting,m.visible&&!p.raf&&(p.raf=requestAnimationFrame(sa))});return _.observe(u),p.list.add(m),p.raf||(p.raf=requestAnimationFrame(sa)),{setKind(T){m.kind=T,m.stir=1},stir(){m.stir=Math.min(1.5,m.stir+1)},dispose(){_.disconnect(),p.list.delete(m),u.remove()}}}var Ue=(e,n=0,i=1)=>Math.min(i,Math.max(n,e)),ht=(e,n,i)=>e+(n-e)*i,Xe=e=>{let n=Ue(e);return n*n*(3-2*n)},Dr=(e,n,i,a,p)=>Xe((e-n)/(i-n))*(1-Xe((e-a)/(p-a))),G=e=>String(e).replace(/[&<>"]/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[n]),lt={get:(e,n)=>{try{return JSON.parse(sessionStorage.getItem(e))??n}catch{return n}},set:(e,n)=>{try{sessionStorage.setItem(e,JSON.stringify(n))}catch{}}},K={play:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>',replay:'<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/></svg>',prev:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',mute:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M4.5 20c1.4-3.6 4.2-5.4 7.5-5.4s6.1 1.8 7.5 5.4"/></svg>',heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/></svg>',back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',down:'<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',bag:'<svg viewBox="0 0 24 24"><path d="M5.5 8.5h13l-1 11h-11z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5.5" y="10.5" width="13" height="9" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',orb:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="11" cy="15" r="1.6" fill="currentColor" stroke="none"/></svg>'},da={pieces:"products",materials:"products"};function Za(e){let{orb:n,reduced:i}=e,a=Ta(),p=document.createElement("style");p.textContent=Oa+za,document.head.append(p),document.documentElement.classList.add("lo-on");let u=Pa(e),o=Qa("main","lo");o.setAttribute("aria-label","The Light Orb"),o.tabIndex=-1;let l=Qa("div","lo-top");document.body.append(o,l),l.innerHTML=`
    <header class="hd" data-hd>
      <a class="wm" href="#/" aria-label="The Light Orb \u2014 Home" data-home>${ia}</a>
      <nav class="nav" aria-label="Main">${ce.map(t=>`<a href="${t.route}" data-nav="${t.id}">${t.label}</a>`).join("")}</nav>
      <div class="hd-r">
        <a class="nav-m" href="#/membership" data-nav="membership">Membership</a>
        <div class="snd">
          <button class="gb gc small" type="button" data-sound aria-haspopup="dialog" aria-expanded="false" aria-label="Sound settings">${K.mute}</button>
          <div class="menu pane" role="dialog" aria-label="Sound" data-menu hidden>
            <label class="mrow"><span>Sound</span><button class="gsw" role="switch" data-pref="master" aria-checked="false" aria-label="Sound"></button></label>
            <label class="mrow"><span>Narration</span><button class="gsw" role="switch" data-pref="guide" aria-checked="true" aria-label="Narration"></button></label>
            <label class="mrow"><span>Interface sounds</span><button class="gsw" role="switch" data-pref="sfx" aria-checked="true" aria-label="Interface sounds"></button></label>
            <div class="mrow col"><span>Volume <output data-volout></output></span><input class="grange" type="range" min="0" max="1" step=".01" data-volume aria-label="Volume"></div>
          </div>
        </div>
        <div class="cartw"><button class="gb gc small" type="button" data-cartbtn aria-haspopup="dialog" aria-expanded="false" aria-label="Cart">${K.bag}<span class="cart-n" data-cartn hidden></span></button>
          <div class="menu pane cart-p" role="dialog" aria-label="Cart" data-cartp hidden></div></div>
        <a class="gb gc small" href="#/account" aria-label="Account" data-nav="account">${K.user}</a>
      </div>
    </header>
    <button class="guide-hit" type="button" data-guide aria-label="Replay this section"></button>
    <div class="caption" data-caption aria-live="polite"></div>`;let s=l.querySelector("[data-hd]"),q=l.querySelector("[data-caption]"),b=l.querySelector("[data-guide]"),V=l.querySelector("[data-sound]"),C=l.querySelector("[data-menu]"),m=t=>{C.hidden=!t,V.setAttribute("aria-expanded",String(t)),a.sfx(t?"open":"close"),t&&C.querySelector(".gsw").focus()};V.addEventListener("click",()=>m(C.hidden)),document.addEventListener("pointerdown",t=>{!C.hidden&&!t.target.closest(".snd")&&m(!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!C.hidden&&(m(!1),V.focus())}),l.querySelectorAll("[data-pref]").forEach(t=>t.addEventListener("click",()=>{let r=t.dataset.pref;a.set({[r]:!a.prefs[r]}),a.sfx("select")}));let _=l.querySelector("[data-volume]");_.addEventListener("input",()=>{a.set({volume:+_.value}),a.sfx("level",+_.value)});function T(){let t=a.prefs;l.querySelectorAll("[data-pref]").forEach(d=>d.setAttribute("aria-checked",String(!!t[d.dataset.pref]))),_.value=t.volume??.8,_.style.setProperty("--p",`${(t.volume??.8)*100}%`),l.querySelector("[data-volout]").textContent=`${Math.round((t.volume??.8)*100)}%`,V.innerHTML=t.master?K.sound:K.mute,V.setAttribute("aria-label",t.master?"Sound on \u2014 settings":"Sound off \u2014 settings"),o.querySelectorAll("[data-enable]").forEach(d=>{d.hidden=t.master});let r=a.state.clip?.split(".")[0],h=r&&r!=="home"&&a.state.kind==="guide"&&["playing","loading"].includes(a.state.status);q.textContent=h?Yt[r]:"",q.classList.toggle("on",!!h)}a.on(T);let B=l.querySelector("[data-cartbtn]"),N=l.querySelector("[data-cartp]"),ie=l.querySelector("[data-cartn]");function se(){let t=ke.items();ie.hidden=!t.length,ie.textContent=t.length,N.innerHTML=`<p class="kicker">Cart</p>${t.length?`<ul class="cart-l">${t.map(r=>`<li><a href="${r.href}">${G(r.name)}</a><button class="pill" type="button" data-cartrm="${r.id}">Remove</button></li>`).join("")}</ul>`:'<p class="note">Your cart is empty.</p>'}
      ${Ie.canCheckout(t)?'<button class="gb primary" type="button" data-checkout>Checkout</button>':'<button class="gb primary" type="button" disabled>Checkout opens soon</button><p class="note">No payment can be taken yet; items stay in this browser.</p>'}`,N.querySelector("[data-checkout]")?.addEventListener("click",()=>{let r=Ie.checkout(ke.items());r&&ke.remove(r)}),N.querySelectorAll("[data-cartrm]").forEach(r=>r.addEventListener("click",()=>{ke.remove(r.dataset.cartrm),a.sfx("close")}))}ke.on(se),se();let be=t=>{N.hidden=!t,B.setAttribute("aria-expanded",String(t)),a.sfx(t?"open":"close")};B.addEventListener("click",()=>be(N.hidden)),document.addEventListener("pointerdown",t=>{!N.hidden&&!t.target.closest(".cartw")&&be(!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!N.hidden&&(be(!1),B.focus())});let le={emission:1,voice:Vt.voice},xe=()=>{le=Rt(n,st(Vt)),n.setRibbon?.(0)};xe();let nt=()=>({home:"home",products:"products",templates:"templates",studio:"studio",sound:"sound"})[g.name],te=null,J=null,Pe;b.addEventListener("click",()=>{if(a.prefs.master||a.set({master:!0}),a.prefs.guide||a.set({guide:!0}),qe=performance.now()/1e3,Te("orb_tap"),te){te.abort(),te=null,Re("");return}if(a.playing){a.stop();return}if(a.sfx("select"),!Na){$();return}Re("Listening\u2026"),te=Ha({onresult:t=>Re(`\u201C${t}\u201D`),onerror:t=>{te=null,t==="not-allowed"||t==="service-not-allowed"?(Te("mic_denied"),xt(Ve("reply.mic").text),$()):t!=="aborted"&&t!=="no-speech"&&Re("")},onend:t=>{te&&(te=null,Je(t))}})});let ee=[],De=0,Ke=(t,r)=>{for(ee.push({role:t,content:r});ee.length>12;)ee.shift();for(;ee.length&&ee[0].role!=="user";)ee.shift()};async function Je(t){let r=Ba(t,{here:g.name,presentation:k});if(Te(r.intent==="fallback"?"orb_fallback":"orb_command",{intent:r.intent||(r.stop?"stop":r.back?"back":r.go?`go:${r.go.split("?")[0].replace("#/","")}`:"answer")}),!r.command&&Fa()&&t.trim()){let h=++De;Re("\u2026"),Ke("user",t.trim());try{let d=await Ga(ee.slice(),{route:location.hash||"#/",title:document.title,presentation:k().text});return h!==De?void 0:(Ke("assistant",d.say),Qe({say:d.say,go:d.go,lang:Va(d.say)?"es":"en"}))}catch{if(h!==De)return;ee.pop()}}Qe(r)}function Qe(t){if(t.stop){a.stop(),Re("");return}if(t.back&&history.back(),t.go&&location.hash!==t.go){J=t.say?{text:t.say,id:t.id,lang:t.lang}:null,location.hash=t.go;return}t.say?(xt(t.say),qe=performance.now()/1e3,a.say(t.say,{id:t.id,lang:t.lang})):t.go||Re("")}function Re(t){clearTimeout(jt),q.textContent=t,q.classList.toggle("on",!!t),t||T()}let qe=-99,E=0,k=()=>Ma(g.name,g.id);function $(){let{id:t,text:r}=k();xt(r),qe=performance.now()/1e3,a.say(r,{id:t})}let g={name:""},R=null,z=[],W={products:"Products",templates:"Templates",studio:"Studio",sound:"Sound",membership:"Membership",account:"Account",signin:"Sign in",signup:"Sign up"};function ue(){let[t,r=""]=(location.hash.replace(/^#/,"")||"/").split("?"),h=t.split("/").filter(Boolean),d=Object.fromEntries(new URLSearchParams(r));return{name:da[h[0]]||h[0]||"home",id:h[1]||null,query:d,raw:h[0]}}function X(){let t=ue();if(t.raw&&da[t.raw]){location.replace(`#/${da[t.raw]}${t.id?"/"+t.id:""}`);return}if(!["home","products","templates","studio","sound","membership","account","signin","signup"].includes(t.name)){location.replace("#/");return}z.forEach(M=>M()),z=[],me=null,R&&t.name!=="studio"&&(R.leave(),R=null),u.hide(),Zt(),e.removeBackdrop(Ce.canvas),xe();let r=g.name;g=t,Sa(),g.name==="studio"&&r!=="studio"&&Te("studio_open"),o.className=`lo r-${g.name}`,document.body.dataset.route=g.name,document.title=g.name==="home"?"The Light Orb":`${W[g.name]??g.name} \xB7 The Light Orb`,l.querySelectorAll("[data-nav]").forEach(M=>M.toggleAttribute("aria-current",M.dataset.nav===g.name||M.dataset.nav==="account"&&["account","signin","signup"].includes(g.name))),r&&r!==g.name&&a.state.kind&&a.stop(),({home:Se,products:g.id?ct:Mt,templates:g.id?lr:sr,studio:cr,sound:ua,membership:()=>Ka(o,Be),account:()=>mt(o,Be,g.id),signin:()=>oa(o,Be,"in"),signup:()=>oa(o,Be,"up")}[g.name]??Se)();let d=lt.get(`lo:scroll:${location.hash}`,null);o.scrollTop=d??0;let f=location.hash,x=J,w=Pe;J=null,Pe=void 0,te&&(te.abort(),te=null),setTimeout(()=>{location.hash===f&&(x?(xt(x.text),qe=performance.now()/1e3,a.say(x.text,{id:x.id,lang:x.lang})):$())},450),r&&o.focus({preventScroll:!0})}o.addEventListener("scroll",()=>lt.set(`lo:scroll:${location.hash}`,o.scrollTop),{passive:!0});let D=0,Ne=0,He=!1;o.addEventListener("scroll",()=>{if(g.name!=="home"||He){D=o.scrollTop;return}let t=o.scrollTop>D;D=o.scrollTop,clearTimeout(Ne),Ne=setTimeout(()=>{let r=innerHeight,h=o.scrollTop/r,d=o.querySelector("#select")?.offsetTop??0,f=o.querySelector(".qt");if(!f||!d)return;let x=(f.offsetTop+f.offsetHeight-r)/r;h<=x+.02||o.scrollTop>=d-4||(He=!0,o.scrollTo({top:t?d:f.offsetTop+f.offsetHeight-r,behavior:i?"auto":"smooth"}),setTimeout(()=>{He=!1,D=o.scrollTop},i?50:900))},90)},{passive:!0}),addEventListener("hashchange",X),l.querySelector("[data-home]").addEventListener("click",t=>{t.preventDefault(),lt.set("lo:scroll:#/",0),g.name==="home"?o.scrollTo({top:0,behavior:i?"auto":"smooth"}):location.hash="#/"});let Be={page:o,audio:a,ICON:K,esc:G,store:he,go:t=>{location.hash=t},flash:xt,api:e,product:u,footer:()=>H()},Y=lt.get("lo:sel",0),ge=[],Fe=new URLSearchParams(location.search).get("sel");Fe&&lt.set("lo:selv",Fe);let ne=lt.get("lo:selv","arc")==="grid";function Se(){if(o.innerHTML=`
      <section class="wel" aria-labelledby="hello">
        <div class="wel-copy" data-welcopy>
          <h1 id="hello" class="wel-h"><span>Hello.</span></h1>
          <p class="wel-line">A space for creative possibilities.</p>
          <a class="gb primary wel-go" href="#select" data-go>Let\u2019s go</a>
        </div>
        <div class="wel-ctl"><button class="gb small" type="button" data-enable>${K.sound}<span>Enable sound</span></button><a class="tl" href="intro.html">Replay intro</a></div>
      </section>
      <section class="qt" aria-label="Quotation">
        <figure class="qt-fig" data-qt><blockquote><p>${kt.text}</p></blockquote>
          <figcaption>${kt.author} \xB7 <a href="${kt.source}" rel="noopener" target="_blank">${kt.work}</a></figcaption></figure>
      </section>
      <section class="sel${ne?" sel-grid":""}" id="select" aria-labelledby="sel-t">
        <h2 id="sel-t" class="sel-t">Where would you like to begin?</h2>
        ${ne?`<nav class="dg" aria-label="Destinations">${ce.map((t,r)=>`<a class="dg-c" href="${t.route}" data-c="${r}">${Ee(t)}<span class="dg-t">${t.label}</span><span class="dg-s">${t.line}</span></a>`).join("")}</nav>`:`<div class="arc" data-arc role="group" aria-roledescription="carousel" aria-label="Destinations">
          ${ce.map((t,r)=>`<a class="arc-c" href="${t.route}" data-c="${r}" aria-label="${t.label}: ${t.line}">${Ee(t,"arc-img")}<span class="arc-l">${t.label}</span><span class="arc-s">${t.line}</span></a>`).join("")}
        </div>
        <div class="arc-ctl"><button class="gb gc small" type="button" data-step="-1" aria-label="Previous">${K.prev}</button>
          <div class="segbar" role="tablist" aria-label="Choose destination">${ce.map((t,r)=>`<button class="pill" role="tab" type="button" data-dot="${r}">${t.label}</button>`).join("")}</div>
          <button class="gb gc small" type="button" data-step="1" aria-label="Next">${K.next}</button></div>`}
      </section>
      ${H()}`,ge=[...o.querySelectorAll("[data-c]")],o.querySelector("[data-go]").addEventListener("click",t=>{t.preventDefault(),a.sfx("select"),o.scrollTo({top:o.scrollTop+o.querySelector("#sel-t").getBoundingClientRect().top-110,behavior:i?"auto":"smooth"})}),o.querySelector("[data-enable]").addEventListener("click",()=>{Te("sound_enable"),a.set({master:!0}),a.sfx("confirm"),$()}),ne)ge.forEach((t,r)=>{t.addEventListener("pointerenter",()=>de(r)),t.addEventListener("focus",()=>de(r)),t.addEventListener("click",()=>{a.sfx("open"),Te("destination",{id:ce[r].id})})}),$e(!0);else{o.querySelectorAll("[data-step]").forEach(r=>r.addEventListener("click",()=>de(Y+ +r.dataset.step))),o.querySelectorAll("[data-dot]").forEach(r=>r.addEventListener("click",()=>de(+r.dataset.dot))),ge.forEach((r,h)=>r.addEventListener("click",d=>{if(L){d.preventDefault();return}h!==Y?(d.preventDefault(),de(h)):(a.sfx("open"),Te("destination",{id:ce[h].id}))}));let t=o.querySelector("[data-arc]");t.addEventListener("keydown",r=>{r.key==="ArrowRight"&&(de(Y+1),r.preventDefault()),r.key==="ArrowLeft"&&(de(Y-1),r.preventDefault())}),P(t,r=>de(Y+r),()=>$e()),$e(!0)}o.querySelector("[data-welcopy]").classList.add(i?"shown":"reveal"),T()}function Ze(t){let r=String(ce.indexOf(t)+1).padStart(2,"0");return`<span class="arc-img cv cv-${t.id}"><span class="cv-grain"></span><span class="cv-n">${r}</span><span class="cv-t">${t.label}</span></span>`}function Ee(t,r=""){let h={products:'<img src="./media/cards/products.jpg" alt="" loading="lazy">',templates:'<span class="dg-win"><img src="./media/templates/the-light-orb.cover.jpg" alt="" loading="lazy"></span>',studio:'<img src="./media/cards/orb-dark.jpg" alt="" loading="lazy">',sound:`<span class="cv-wave">${[.3,.55,.8,.45,.95,.6,.35,.7,.5,.85,.4,.65,.3,.5].map(d=>`<i style="--h:${d}"></i>`).join("")}</span>`}[t.id];return`<span class="dg-img dg-${t.id} ${r}">${h}</span>`}function de(t,r=!0){let h=Ue(t,0,ce.length-1);h!==Y&&(Y=h,lt.set("lo:sel",Y),r&&a.sfx("detent"),n.nudge?.(.5)),$e()}function $e(t){if(ne){ge.forEach((d,f)=>d.classList.toggle("on",f===Y));return}let r=ge[0]?.offsetWidth||300,h=r*.7;ge.forEach((d,f)=>{let x=f-Y+c/(h*1.2),w=Math.abs(x);d.style.transition=t||A?"none":"",d.style.transform=`translateX(${x*h}px) translateZ(${-w*150}px) rotateY(${Ue(-x*30,-48,48)}deg) scale(${1-Math.min(w,2)*.1})`,d.style.zIndex=String(10-Math.round(w)),d.classList.toggle("on",f===Y),d.tabIndex=f===Y?0:-1,d.setAttribute("aria-current",f===Y?"true":"false")}),o.querySelectorAll("[data-dot]").forEach((d,f)=>d.setAttribute("aria-selected",String(f===Y))),o.querySelectorAll("[data-step]").forEach(d=>{d.disabled=+d.dataset.step<0&&Y===0||+d.dataset.step>0&&Y===ce.length-1})}let c=0,A=!1,L=!1;function P(t,r,h){let d=0,f=0,x=null,w=null;t.addEventListener("pointerdown",y=>{y.button||(d=y.clientX,f=y.clientY,x=y.pointerId,w=null,L=!1)}),t.addEventListener("pointermove",y=>{if(y.pointerId!==x)return;let S=y.clientX-d,O=y.clientY-f;!w&&Math.hypot(S,O)>8&&(w=Math.abs(S)>Math.abs(O)*1.2?"x":"y",w==="x"&&(t.setPointerCapture(x),A=!0)),w==="x"&&(c=S,L=!0,h())});let M=y=>{if(y.pointerId===x){if(x=null,A=!1,w==="x"){let S=c<-60?1:c>60?-1:0;c=0,r(S),h(),setTimeout(()=>{L=!1},0)}w=null}};t.addEventListener("pointerup",M),t.addEventListener("pointercancel",M),t.addEventListener("dragstart",y=>y.preventDefault());let j=0,v=0;t.addEventListener("wheel",y=>{if(Math.abs(y.deltaX)<=Math.abs(y.deltaY))return;y.preventDefault();let S=performance.now();S<v||(j+=y.deltaX,Math.abs(j)>60&&(r(Math.sign(j)),j=0,v=S+380))},{passive:!1})}function H(){return`<footer class="ft"><a href="#/" class="wm small" aria-label="The Light Orb \u2014 Home">${ia}</a>
      <nav aria-label="Footer"><a href="#/membership">Membership</a><a href="#/account">Account</a><a href="intro.html">Replay intro</a></nav>
      <span class="ft-n">Purchasing and membership open soon.</span></footer>`}let U=0,Q={"orb-slider":[{id:"light",name:"Light",line:"Clear glass on a light page."},{id:"dark",name:"Dark",line:"Smoked glass for dark pages.",cls:"v-dark"},{id:"frost",name:"Frost",line:"Frosted white glass, softer and brighter.",cls:"v-frost"},{id:"compact",name:"Compact",line:"A slimmer capsule for tight layouts.",cls:"v-compact"}],"orb-wave":[{id:"gentle",name:"Gentle",line:"Wide, soft ripples.",p:{strength:.6,scale:110}},{id:"classic",name:"Classic",line:"The ripple from the intro.",p:{strength:1,scale:70}},{id:"deep",name:"Deep",line:"Tight, strong rings.",p:{strength:1.6,scale:45}},{id:"rain",name:"Rain",line:"Many small, quick rings, like drops on water.",p:{strength:.5,scale:28}}],"background-pack":[{id:"classic",name:"Classic",line:"The horizon as in the intro.",p:{horizon:.3,lamp:.9}},{id:"wide",name:"Wide floor",line:"A low horizon and more floor.",p:{horizon:.18,lamp:.9}},{id:"high",name:"High horizon",line:"A high horizon and more sky.",p:{horizon:.45,lamp:.9}},{id:"lantern",name:"Lantern",line:"A brighter lamp around the Orb in the dark world.",p:{horizon:.3,lamp:1.6}}],"crystal-controls":[{id:"light",name:"Light",line:"Clear glass for light pages."},{id:"dark",name:"Dark",line:"Smoked glass for dark pages.",cls:"v-dark"},{id:"frost",name:"Frost",line:"Frosted white glass with softer edges.",cls:"v-frost"},{id:"compact",name:"Compact",line:"Smaller controls for dense interfaces.",cls:"v-compact"}]},ve={"orb-slider":'<span class="mini-cap"><span class="cap-l">slide to enter</span><i class="mini-orb"></i></span>',"crystal-controls":'<span class="mini-kit"><span class="gb primary small">Continue</span><span class="gb small">Secondary</span><span class="gsw" aria-checked="true"></span><span class="gi">Your name</span></span>'},fe=[...Tt.map(t=>({id:`orb-${t.id}`,fam:"orb",variant:t.id,sphere:t.id,ext:".orb",name:t.id==="clear"?"The Orb":`The Orb \xB7 ${t.name}`,kind:t.line,href:`#/products/orb${t.id==="clear"?"":`?variant=${t.id}`}`})),...Le.filter(t=>t.id!=="orb").flatMap(t=>Q[t.id].map((r,h)=>({id:h?`${t.id}-${r.id}`:t.id,fam:t.id,variant:h?r.id:null,ext:".kit",name:`${t.name} \xB7 ${r.name}`,kind:r.line,mini:ve[t.id],cls:r.cls,img:ve[t.id]?null:`./media/products/${t.id}.jpg`,pos:t.id==="background-pack"?`50% ${Math.round(30+(r.p.horizon-.3)*160)}%`:null,href:`#/products/${t.id}${h?`?variant=${r.id}`:""}`})))],re=(t,r="")=>`<button class="gb small ${r}" type="button" data-cart="${t.id}" aria-pressed="${ke.has(t.id)}">${K.bag}<span>${ke.has(t.id)?"In cart":"Add to cart"}</span></button>`;function et(t){t.querySelectorAll("[data-cart]").forEach(r=>r.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation();let d=fe.find(x=>x.id===r.dataset.cart)||ur().find(x=>x.id===r.dataset.cart),f=ke.toggle({id:d.id,name:d.name,href:d.href||"#/sound"});f&&Te("add_to_cart",{item:d.id}),r.setAttribute("aria-pressed",String(f)),r.querySelector("span").textContent=f?"In cart":"Add to cart",a.sfx(f?"confirm":"select")}))}let Oe=(t,r,h)=>`<button class="gb small" type="button" data-fsave="${t}|${r}" data-name="${G(h)}" aria-pressed="${he.isSaved(t,r)}">${K.heart}<span>${he.isSaved(t,r)?"Saved":"Save"}</span></button>`;function ot(t,r){t.querySelectorAll("[data-fsave]").forEach(h=>h.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation();let[f,x]=h.dataset.fsave.split("|"),w=he.toggleSaved(f,x,h.dataset.name,r(f,x));w&&Te("save",{kind:f,item:x}),h.setAttribute("aria-pressed",String(w)),h.querySelector("span").textContent=w?"Saved":"Save",a.sfx(w?"confirm":"select")}))}function Mt(){let t=r=>`<article class="file glass" data-href="${r.href}">
        <div class="file-v ${r.cls??""}"${r.sphere?` data-sphere="${r.sphere}"`:""}>${r.img?`<img src="${r.img}" alt="" draggable="false" loading="lazy"${r.pos?` style="object-position:${r.pos}"`:""}>`:""}${r.mini??""}<span class="file-ext">${r.ext}</span></div>
        <div class="file-m"><h3><a class="file-link" href="${r.href}">${G(r.name)}</a></h3><p>${G(r.kind)}</p><p class="file-p">Price soon</p></div>
        <div class="file-a">${re(r)}${Oe("product",r.id,r.name)}<a class="gb small primary" href="#/studio?family=${r.fam}${r.variant?`&preset=${r.variant}`:""}">Go to Studio</a></div></article>`;o.innerHTML=`
      <section class="dest shop">
        <header class="dh"><h1>Products</h1></header>
        <div class="file-grid">${fe.map(t).join("")}</div>
      </section>${H()}`,et(o),ot(o,(r,h)=>fe.find(d=>d.id===h)?.href??"#/products"),o.querySelectorAll(".file[data-href]").forEach(r=>r.addEventListener("click",h=>{h.defaultPrevented||h.target.closest("button, a")||(a.sfx("open"),location.hash=r.dataset.href)})),o.querySelectorAll("[data-sphere]").forEach(r=>{let h=la(r,r.dataset.sphere,{reduced:i});z.push(()=>h.dispose())})}function ct(){let t=Wt(g.id);if(!t){location.replace("#/products");return}let r=t.id==="orb"?Tt:Q[t.id],h=r.some(w=>w.id===g.query.variant)?g.query.variant:r[0].id,d=w=>r.find(M=>M.id===w),f=w=>t.id==="orb"?`orb-${w}`:w===r[0].id?t.id:`${t.id}-${w}`;o.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/products">${K.back}<span>Products</span></a>
        <div class="pd-grid">
          <div class="pd-stage glass" data-stage>${or(t.id)}</div>
          <div class="pd-info">
            <p class="kicker">${G(t.id==="orb"?"Sphere":t.kind)}</p><h1>${G(t.name)}</h1>
            <p class="lede">${G(zt[t.id].lede)}</p>
            ${r?`<div class="vars"><p class="lbl">Version</p><div class="segbar" role="radiogroup" aria-label="Version">${r.map(w=>`<button class="pill" role="radio" type="button" data-variant="${w.id}" aria-checked="${w.id===h}">${w.name}</button>`).join("")}</div><p class="var-line" data-vline></p></div>`:""}
            <p class="price">Price soon</p>
            <div class="acts eq">${re({id:f(h)},"primary")}${Oe("product",f(h),t.name)}</div>
            <a class="studio-lock" href="#/studio">${K.lock}<span><b>Customise in Studio</b><small>For members</small></span></a>
            <dl class="facts"><dt>What it does</dt><dd>${G(zt[t.id].does)}</dd><dt>You receive</dt><dd>${t.receives.map(G).join(" \xB7 ")}</dd></dl>
            <details class="acc"><summary>Compatibility and installation</summary><p>${G(zt[t.id].tech)}</p></details>
          </div>
        </div>
      </section>${H()}`,et(o),ot(o,(w,M)=>`#/products/${t.id}`),ir(t.id,o.querySelector("[data-stage]"),h),Te("product_open",{product:t.id,variant:h});let x=w=>{me.sphere?.setKind(w);let M=d(w),j=o.querySelector("[data-stage]");t.id!=="orb"&&(j.classList.remove("v-dark","v-frost","v-compact"),M.cls&&j.classList.add(M.cls),M.p&&Ce.set(M.p)),o.querySelectorAll("[data-variant]").forEach(I=>I.setAttribute("aria-checked",String(I.dataset.variant===w)));let v=o.querySelector("[data-vline]");v&&(v.textContent=d(w).line);let y=o.querySelector("[data-cart]");y.dataset.cart=f(w);let S=ke.has(y.dataset.cart);y.setAttribute("aria-pressed",String(S)),y.querySelector("span").textContent=S?"In cart":"Add to cart";let O=o.querySelector("[data-fsave]");O.dataset.fsave=`product|${f(w)}`;let Z=he.isSaved("product",f(w));O.setAttribute("aria-pressed",String(Z)),O.querySelector("span").textContent=Z?"Saved":"Save",history.replaceState(null,"",`#/products/${t.id}${w===r[0].id?"":`?variant=${w}`}`)};o.querySelectorAll("[data-variant]").forEach(w=>w.addEventListener("click",()=>{x(w.dataset.variant),a.sfx("select"),Te("variant",{product:t.id,variant:w.dataset.variant})})),x(h)}let zt={orb:{lede:"A 3D sphere you can place in your own work. Choose the material and what it holds inside.",does:"Drag to turn it; it keeps turning slowly on its own. A tap makes whatever is in it move a little faster. Twenty versions: clear glass, liquid metal, porcelain, bloom, and glass holding a light, points of light, glitter or beads.",tech:"An ES module built on Three.js r186 (WebGL 2). Works in current Chrome, Safari, Edge and Firefox. The integration notes explain how to place it in a page and choose a version."},"orb-slider":{lede:"A clear glass capsule whose thumb is the Orb itself. Slide it to enter.",does:"A slide-to-confirm control: the Orb travels along the track and settles at either end. It also works with the arrow keys.",tech:"Component source with the Orb as its thumb. Needs WebGL 2 for the Orb."},"orb-wave":{lede:"The ripple the Orb leaves on the floor when it lands, drawn in light.",does:"Each touch raises a wave that spreads across the surface and fades.",tech:"A full-screen shader with an impact API: position, strength and scale. Needs WebGL 2."},"background-pack":{lede:"Two environments in one pack: a dark world and a light one, and the change between them.",does:"Moves smoothly from dark to light, controlled by a single exposure value.",tech:"A full-screen shader with exposure, horizon and lamp controls. Needs WebGL 2."},"crystal-controls":{lede:"Buttons, switches, fields and sliders in clear glass, with every state designed.",does:"Each control has default, hover, focus, pressed, selected, disabled and loading states, on light and dark backgrounds.",tech:"Plain CSS components. No framework needed."}};function or(t){return t==="orb"?'<div class="pd-sph" data-sph></div><span class="pd-hint">Drag to turn it. Tap to stir it.</span>':t==="orb-slider"?'<div class="cap" data-cap role="slider" tabindex="0" aria-label="Slide to enter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="cap-l">slide to enter</span></div>':t==="orb-wave"?'<button class="gb small pd-btn" type="button" data-drop>Drop the Orb</button><span class="pd-hint">Or tap the floor.</span>':t==="background-pack"?'<div class="segbar pd-seg" role="radiogroup" aria-label="Environment"><button class="pill" role="radio" type="button" data-env="0" aria-checked="false">Dark world</button><button class="pill" role="radio" type="button" data-env="1" aria-checked="true">Light</button></div>':`<div class="kit"><button class="gb primary" type="button">Continue</button><button class="gb" type="button">Secondary</button><button class="gb gc" type="button" aria-label="Confirm">${K.check}</button>
      <button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><input class="gi" placeholder="Your name" aria-label="Example field">
      <input class="grange" type="range" value="60" aria-label="Example slider" style="--p:60%"><button class="gb" type="button" disabled>Disabled</button><button class="gb" type="button" aria-busy="true">Loading</button></div>`}let me=null;function ir(t,r,h="clear"){if(me={id:t,el:r,cap:0,drop:null},t!=="crystal-controls"&&t!=="orb"&&u.show(st(_t("original").config)),t==="orb"&&(me.sphere=la(r.querySelector("[data-sph]"),h,{reduced:i}),z.push(()=>me?.sphere?.dispose())),t==="orb-slider"){let d=r.querySelector("[data-cap]"),f=null,x=M=>{me.cap=Ue(M),d.setAttribute("aria-valuenow",Math.round(me.cap*100))};d.addEventListener("pointerdown",M=>{f={x:M.clientX,v:me.cap},d.setPointerCapture(M.pointerId),a.sfx("select")}),d.addEventListener("pointermove",M=>{f&&x(f.v+(M.clientX-f.x)/(d.offsetWidth-d.offsetHeight))});let w=()=>{f&&(f=null,u.orb?.nudge(.5),me.cap>.9?(x(1),a.sfx("confirm")):(x(0),a.sfx("select")))};d.addEventListener("pointerup",w),d.addEventListener("pointercancel",w),d.addEventListener("keydown",M=>{M.key==="ArrowRight"&&x(me.cap+.1),M.key==="ArrowLeft"&&x(me.cap-.1),M.key==="End"&&x(1),M.key==="Home"&&x(0)})}if((t==="orb-wave"||t==="background-pack")&&(Qt(r),e.addBackdrop(Ce.canvas),Ce.set({horizon:.3,strength:1,scale:70}),Ce.setExposure(t==="background-pack"?1:0,!0),t==="orb-wave"&&(r.addEventListener("pointerdown",d=>{if(d.target.closest("button"))return;let f=r.getBoundingClientRect(),x=d.clientY-f.top;x>f.height*.55&&(Ce.impact(d.clientX-f.left,x),u.orb?.nudge(.7),a.sfx("detent"))}),r.querySelector("[data-drop]").addEventListener("click",()=>{me.drop={vy:0,y:null,contacts:0},a.sfx("select")})),t==="background-pack"&&r.querySelectorAll("[data-env]").forEach(d=>d.addEventListener("click",()=>{Ce.setExposure(+d.dataset.env),a.sfx("open"),r.querySelectorAll("[data-env]").forEach(f=>f.setAttribute("aria-checked",String(f===d)))}))),t==="crystal-controls"){r.querySelectorAll(".gb:not([disabled])").forEach(f=>f.addEventListener("click",()=>a.sfx("select"))),r.querySelector(".gsw").addEventListener("click",f=>{let x=f.currentTarget;x.setAttribute("aria-checked",String(x.getAttribute("aria-checked")!=="true")),a.sfx("select")}),r.querySelector(".gi").addEventListener("input",f=>{f.isTrusted&&a.sfx("type")});let d=r.querySelector(".grange");d.addEventListener("input",()=>{d.style.setProperty("--p",`${d.value}%`),a.sfx("level",d.value/100)})}}let pa=2;function sr(){let t=ye.length+pa;o.innerHTML=`
      <section class="dest tpl">
        <header class="dh"><h1>Complete compositions</h1></header>
        <div class="folder" data-folder>
          <div class="folder-tab glass"><span>Templates</span><small>${ye.length} ${ye.length===1?"composition":"compositions"}</small></div>
          <div class="folder-body glass"><span class="folder-glow" aria-hidden="true"></span><span class="folder-num" data-fnum aria-hidden="true"></span>
            <div class="folder-track" data-track role="listbox" aria-label="Templates" tabindex="0">
              ${ye.map((y,S)=>`<button class="tcard glass" type="button" role="option" data-t="${S}" aria-label="Open ${G(y.name)}">
                <span class="tcard-n">${String(S+1).padStart(2,"0")}</span>
                <span class="tcard-cv"><img src="${y.cover.src}" alt="" draggable="false"></span>
                <span class="tcard-t">${G(y.name)}</span><span class="tcard-l">${G(y.line)}</span></button>`).join("")}
              ${Array.from({length:pa},(y,S)=>`<div class="tcard glass soon" aria-hidden="true"><span class="tcard-n">${String(ye.length+S+1).padStart(2,"0")}</span><span class="tcard-cv"><span class="soon-orb"></span><span class="soon-lbl">In the making</span></span><span class="tcard-t">Next composition</span><span class="tcard-l">Joining the collection soon.</span></div>`).join("")}
            </div>
            <div class="folder-open" data-open hidden></div>
            <div class="folder-ctl" data-fctl><button class="gb gc small" type="button" data-fstep="-1" aria-label="Previous">${K.prev}</button><span class="count" data-fcount></span><button class="gb gc small" type="button" data-fstep="1" aria-label="Next">${K.next}</button></div>
          </div>
        </div>
      </section>${H()}`;let r=o.querySelector("[data-track]"),h=[...r.children],d=o.querySelector("[data-open]"),f=o.querySelector("[data-fctl]"),x=0,w=y=>{h.forEach((S,O)=>{let Z=O-x+c/340,I=Math.abs(Z);S.style.transition=y||A?"none":"",S.style.transform=`translateX(calc(-50% + ${Z*96}%)) translateZ(${-I*120}px) rotateY(${Ue(-Z*18,-30,30)}deg) scale(${1-Math.min(I,2)*.08})`,S.style.zIndex=String(10-Math.round(I)),S.style.opacity=String(I>2.2?0:1-I*.22),S.classList.toggle("on",O===x),S.tagName==="BUTTON"&&S.setAttribute("aria-selected",String(O===x))}),o.querySelector("[data-fnum]").textContent=String(x+1).padStart(2,"0"),o.querySelector("[data-fcount]").textContent=`${String(x+1).padStart(2,"0")} / ${String(t).padStart(2,"0")}`,o.querySelectorAll("[data-fstep]").forEach(S=>{S.disabled=+S.dataset.fstep<0&&x===0||+S.dataset.fstep>0&&x===t-1})},M=y=>{let S=Ue(x+y,0,t-1);S!==x&&(x=S,a.sfx("detent")),w()};o.querySelectorAll("[data-fstep]").forEach(y=>y.addEventListener("click",()=>M(+y.dataset.fstep))),r.addEventListener("keydown",y=>{y.key==="ArrowRight"&&(M(1),y.preventDefault()),y.key==="ArrowLeft"&&(M(-1),y.preventDefault())}),P(r,M,()=>w());let j=y=>{let S=ye[y],O={id:`template-${S.id}`,name:S.name,href:`#/templates/${S.id}`};fe.some(Z=>Z.id===O.id)||fe.push(O),d.innerHTML=`<button class="tl folder-back" type="button" data-close>${K.back}<span>All templates</span></button>
        <div class="fo-grid"><figure class="fo-cv glass"><img src="${S.cover.src}" alt="The beginning of the ${G(S.name)} template." width="1600" height="1000"></figure>
          <div class="fo-info"><p class="kicker">${String(y+1).padStart(2,"0")} \xB7 Template</p><h2>${G(S.name)}</h2><p>${G(S.line)}</p>
            <ul class="fo-inc">${S.includes.map(Z=>`<li>${G(Z)}</li>`).join("")}</ul><p class="price">Price soon</p>
            <div class="acts eq"><a class="gb small primary" href="#/templates/${S.id}">Open template</a>${re(O)}${Oe("template",S.id,S.name)}</div></div></div>`,et(d),ot(d,(Z,I)=>`#/templates/${I}`),d.querySelector("[data-close]").addEventListener("click",v),r.hidden=!0,f.hidden=!0,d.hidden=!1,d.classList.remove("in"),d.offsetWidth,d.classList.add("in"),a.sfx("open"),d.querySelector("[data-close]").focus({preventScroll:!0})},v=()=>{d.hidden=!0,r.hidden=!1,f.hidden=!1,w(!0),a.sfx("close"),r.focus({preventScroll:!0})};h.forEach((y,S)=>y.tagName==="BUTTON"&&y.addEventListener("click",O=>{if(L){O.preventDefault();return}S!==x?(x=S,w(),a.sfx("detent")):j(S)})),w(!0)}function lr(){let t=ye.find(r=>r.id===g.id);if(!t){location.replace("#/templates");return}o.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/templates">${K.back}<span>Templates</span></a>
        <div class="pd-grid">
          <figure class="pd-stage cover-big"><img src="${t.cover.src}" alt="The beginning of the ${G(t.name)} template." width="1600" height="1000"></figure>
          <div class="pd-info"><p class="kicker">Template</p><h1>${G(t.name)}</h1><p class="lede">${G(t.line)}</p>
            <div class="acts"><a class="gb primary" href="#/">View it live</a></div>
            <p class="note">Purchase opens soon.</p>
            <dl class="facts"><dt>Includes</dt><dd>${t.includes.map(G).join(" \xB7 ")}</dd></dl>
            <p class="note" data-covermeta></p></div>
        </div>
      </section>${H()}`,fetch(t.cover.meta).then(r=>r.json()).then(r=>{let h=o.querySelector("[data-covermeta]");h&&(h.textContent=`Preview: a capture of this website, ${r.captured}.`)}).catch(()=>{})}function ua(){let t=a.prefs.voice,r=[...yt.map(v=>({group:"voices",key:`voice_audition.${v.id}`,clip:"voice_audition",voice:v.id,title:v.name,sub:`${v.locale} \xB7 the same line in each voice`,use:v.id})),...["home","products","templates","studio","sound"].map(v=>({group:"guide",key:`${v}.${t}`,clip:v,voice:t,title:v==="home"?"Welcome":v[0].toUpperCase()+v.slice(1),sub:Yt[v]})),...Xt.map(v=>({group:"sfx",key:`sfx.${v.id}`,url:v.file,title:v.name,sub:v.line}))],h=(v,y,S)=>`<section class="sg"><header><h2>${y}</h2><p>${S}</p></header><div class="sgrid">${r.filter(O=>O.group===v).map(O=>`
      <article class="si glass"><button class="si-play gb gc small" type="button" data-play="${O.key}" aria-label="Play ${G(O.title)}">${K.play}</button>
        <div class="si-t"><h3>${G(O.title)}<span class="file-ext">.m4a</span></h3><p>${G(O.sub)}</p></div>
        <div class="si-w" data-wave="${O.key}" role="slider" tabindex="0" aria-label="Position in ${G(O.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><canvas></canvas></div>
        <div class="si-m"><span class="si-d" data-dur="${O.key}">\u2013:\u2013\u2013</span></div>
        <div class="si-x eq">${O.use?`<button class="gb small" type="button" data-use="${O.use}" aria-pressed="${t===O.use}"><span>${t===O.use?"In use":"Use voice"}</span></button>`:""}${O.group!=="guide"?re({id:`sound-${O.key}`}):""}${Oe("sound",O.key,O.title)}</div></article>`).join("")}</div></section>`;o.innerHTML=`
      <section class="dest snd-dest">
        <header class="dh"><h1>Voices and sounds</h1></header>
        ${h("voices","Voices","Compare them on the same line.")}
        ${h("guide","Guide narration","What the guide says on each page, in the selected voice.")}
        ${h("sfx","Interface sounds","Short, quiet sounds for touch, panels and wheels.")}
      </section>${H()}`,o.querySelectorAll(".si").forEach(v=>{v.querySelector('[data-play^="sfx."]')&&(v.querySelector(".file-ext").textContent=".wav")}),ot(o,()=>"#/sound");let d=new Map,f=(v,y)=>{let S=o.querySelector(`[data-dur="${CSS.escape(v)}"]`);S&&(S.textContent=y)};for(let v of r)(v.url?a.peaksUrl(v.url,80):a.peaks(v.clip,v.voice,80)).then(y=>{d.set(v.key,y),f(v.key,dr(y.duration))}).catch(()=>f(v.key,"Unavailable"));fa=r;let x=v=>v.url?v.key:`${v.clip}.${v.voice}`;et(o);let w=(v,y=0)=>(a.prefs.master||a.set({master:!0}),v.url?a.playUrl(v.key,v.url,{from:y}):a.play(v.clip,{voice:v.voice,kind:"audition",from:y}));o.querySelectorAll("[data-play]").forEach(v=>v.addEventListener("click",()=>{let y=r.find(O=>O.key===v.dataset.play),S=x(y);a.state.clip===S&&a.playing?a.pause():a.state.clip===S&&a.state.status==="paused"?a.resume():w(y)})),o.querySelectorAll("[data-wave]").forEach(v=>{let y=r.find(I=>I.key===v.dataset.wave),S=x(y),O=!1,Z=I=>{let ze=v.getBoundingClientRect();return Ue((I.clientX-ze.left)/ze.width)};v.addEventListener("pointerdown",async I=>{O=!0,v.setPointerCapture(I.pointerId);let ze=Z(I);a.state.clip!==S&&await w(y),a.seek(ze)}),v.addEventListener("pointermove",I=>{O&&a.state.clip===S&&a.seek(Z(I))}),v.addEventListener("pointerup",()=>{O=!1}),v.addEventListener("keydown",I=>{a.state.clip!==S||!a.duration||(I.key==="ArrowRight"&&a.seek(a.position+1/a.duration),I.key==="ArrowLeft"&&a.seek(a.position-1/a.duration))})}),o.querySelectorAll("[data-use]").forEach(v=>v.addEventListener("click",()=>{a.stop(),a.set({voice:v.dataset.use}),a.sfx("confirm"),ua()}));let M=0,j=()=>{M=requestAnimationFrame(j);for(let v of o.querySelectorAll("[data-wave]")){let y=r.find(at=>at.key===v.dataset.wave),S=x(y),O=d.get(y.key),Z=v.firstElementChild,I=v.getBoundingClientRect();if(I.bottom<0||I.top>innerHeight)continue;let ze=a.state.clip===S,pt=ze?a.position:0,vt=ze?a.state.energy:0,tt=ze&&a.playing;v.setAttribute("aria-valuenow",Math.round(pt*100));let We=o.querySelector(`[data-play="${CSS.escape(y.key)}"]`);if(We&&We.dataset.on!==String(tt)&&(We.dataset.on=String(tt),We.innerHTML=tt?K.pause:K.play,We.setAttribute("aria-label",`${tt?"Pause":"Play"} ${y.title}`)),!O)continue;let we=Math.min(devicePixelRatio||1,2);Z.width!==Math.round(I.width*we)&&(Z.width=Math.round(I.width*we),Z.height=Math.round(I.height*we));let Ge=Z.getContext("2d");Ge.setTransform(we,0,0,we,0,0),Ge.clearRect(0,0,I.width,I.height);let je=O.bins.length,Ct=2,it=(I.width-Ct*(je-1))/je,br=I.height/2;for(let at=0;at<je;at++){let ma=(at+.5)/je<=pt,xr=ma&&Math.abs((at+.5)/je-pt)<2.5/je?vt:0,ha=Math.max(2,(O.bins[at]*.9+xr*.2)*(I.height-4));Ge.fillStyle=ma?"#262827":"rgba(38,40,39,.2)",Ge.beginPath(),Ge.roundRect(at*(it+Ct),br-ha/2,it,ha,it/2),Ge.fill()}}};j(),z.push(()=>cancelAnimationFrame(M))}let dr=t=>`${Math.floor(t/60)}:${String(Math.round(t%60)).padStart(2,"0")}`;function cr(){R&&(R.leave(),R=null),o.innerHTML=`
      <section class="st-lock">
        <div class="lock-blur" aria-hidden="true"><i class="lb-bar"></i><i class="lb-sph"></i><i class="lb-ins"></i></div>
        <div class="lock-card glass dark">
          <span class="lock-i">${K.lock}</span>
          <p class="kicker">Studio</p><h1>For members</h1>
          <p>Shape the sphere: its material, its colour and what moves inside it. Studio opens with membership.</p>
          <div class="acts eq"><a class="gb small primary" href="#/membership">See membership</a><a class="gb small" href="#/products">Browse products</a></div>
        </div>
      </section>`}let jt=0;function xt(t){q.textContent=t,q.classList.add("on"),clearTimeout(jt),jt=setTimeout(()=>{q.classList.remove("on"),T()},Math.max(3200,t.length*70))}function pr(t,r,{W:h,H:d}){let f=a.energy(),x=a.playing&&(a.state.kind==="guide"||a.state.kind==="audition"&&g.name==="sound");n.setSpeech(x&&!It()?f*(i?.35:.9):0),E+=((x&&!It()||te?1:0)-E)*Math.min(1,r*(x?4:1.2));{let j=t-qe,v=j<0?0:j<3.5?Xe(j/.4):1-Xe((j-3.5)/1.6);n.setRibbon?.(Math.max(v,E))}u.orb?.setSpeech(a.playing&&a.state.kind==="audition"&&It()?f*(i?.35:1):0);let w=h<700,M;if(R?(M=R.frame(t,r,{W:h,H:d}),u.frame(M.product??null)):g.name==="home"?M=mr(h,d,w):M={warm:0,orb:gr(h,d,w),emission:le.emission},!R){let j=hr(h,d,r);u.frame(j),j?.ground&&(M.grounds||=[]).push({y:j.ground,x:j.x,d:j.d})}return fr(M.orb),M}let ga=null,fa=[],ur=()=>fa.map(t=>({id:`sound-${t.key}`,name:t.title,href:"#/sound"})),It=()=>!1,gr=(t,r,h)=>({x:t-(h?34:50),y:r-(h?38:52),d:h?40:50,vis:1});function fr(t){let r=t&&(t.vis??1)>.5&&!!nt();b.hidden=!r,r&&Object.assign(b.style,{left:`${t.x-t.d/2}px`,top:`${t.y-t.d/2}px`,width:`${t.d}px`,height:`${t.d}px`})}function mr(t,r,h){let d=o.scrollTop/r,f=o.querySelector("[data-welcopy]"),x=o.querySelector("[data-qt]"),w=o.querySelector(".wel-ctl"),M=1-Xe((d-.04)/.2),j=ge[Y],v=j?.getBoundingClientRect(),y=(o.querySelector(".qt")?.offsetTop??r)/r,S=(o.querySelector("#select")?.offsetTop??2*r)/r,O=o.querySelector("#sel-t"),Z=O?(O.getBoundingClientRect().top+o.scrollTop-o.getBoundingClientRect().top)/r:2,I=Z-.8,ze=Dr(d,.13,.3,I-.22,I);f&&(f.style.setProperty("--wipe",M.toFixed(3)),f.style.visibility=M<.01?"hidden":""),w&&(w.style.setProperty("--wipe",M.toFixed(3)),w.style.visibility=M<.01?"hidden":""),x&&(x.style.setProperty("--wipe",ze.toFixed(3)),x.style.transform=`translateY(${(20*(1-Xe((d-.13)/.17))-24*Xe((d-I+.22)/.22)).toFixed(1)}px)`,x.style.visibility=ze<.01?"hidden":"");let pt=Ue(Math.min(t*(h?.46:.19),r*.28),120,280),vt={x:t/2,y:r*(h?.3:.29),d:pt},tt={x:t/2,y:r*.87,d:pt*.3},We=Xe((d-.08)/Math.max(.3,y-.5)),we={x:ht(vt.x,tt.x,We),y:ht(vt.y,tt.y,We),d:ht(vt.d,tt.d,We)};if(j){let Ge=v,je=Xe((d-I+.1)/.2);if(je>0){let Ct=h?40:50,it={x:ne?Ge.left+Ge.width/2:t/2,y:Ge.bottom+44,d:Ct};we={x:ht(we.x,it.x,je),y:ht(we.y,it.y,je),d:ht(we.d,it.d,je)}}}return{orb:{...we,vis:1},warm:1,ground:{y:we.y+we.d/2},emission:le.emission}}function hr(t,r,h){if(g.name==="sound"&&ga?.isConnected){let d=ga.getBoundingClientRect(),f=Math.min(d.width,d.height)*.78;return d.bottom>0?{x:d.left+d.width/2,y:d.top+d.height/2,d:f,vis:1,ground:d.top+d.height/2+f/2}:null}if(g.name==="products"&&!g.id){let d=o.querySelector("[data-orbslot]");if(!d)return null;let f=d.getBoundingClientRect(),x=d.closest(".pc")?.classList.contains("on"),w=Math.min(f.width,f.height)*.74;return f.width>10?{x:f.left+f.width/2,y:f.top+f.height/2,d:w,vis:x?1:.7,ground:f.top+f.height/2+w/2}:null}if(g.name==="products"&&g.id&&me?.el?.isConnected){let d=me,f=d.el.getBoundingClientRect();if(d.id==="orb-slider"){let x=d.el.querySelector("[data-cap]").getBoundingClientRect(),w=x.height*.84,M=(x.height-w)/2;return{x:x.left+M+w/2+d.cap*(x.width-x.height),y:x.top+x.height/2,d:w,vis:1,snap:!0}}if(d.id==="orb-wave"||d.id==="background-pack"){let x=Math.min(96,f.width*.16),w=f.height*.7+x*.1,M=w-x/2;if(d.drop){let j=d.drop;j.y==null&&(j.y=-f.height*.45),j.vy+=2600*h,j.y+=j.vy*h,j.y>=0&&(j.y=0,Ce.impact(f.width/2,w,Ue(j.vy/1400)),u.orb?.nudge(.8),a.sfx("detent"),j.vy*=-.38,(++j.contacts>2||Math.abs(j.vy)<120)&&(d.drop=null)),M+=d.drop?d.drop.y:0}return Ce.setOrb({x:f.width/2,y:M,d:x}),{x:f.left+f.width/2,y:f.top+M,d:x,vis:1,snap:!!d.drop}}}return null}addEventListener("resize",()=>{g.name==="home"&&$e(!0)}),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__lo={audio:a,worldPreview:Ce,product:u,store:he,get studio(){return R},get route(){return g},get sel(){return Y},get psel(){return U}});try{Object.keys(sessionStorage).filter(t=>t.startsWith("lo:scroll:")||t==="lo:sel").forEach(t=>sessionStorage.removeItem(t))}catch{}return Y=0,X(),T(),{frame:pr,audio:a,get route(){return g},get studio(){return R},reapply:()=>xe()}}function Qa(e,n){let i=document.createElement(e);return i.className=n,i}var Lt={hostDuration:.95,follow:7,damping:.92,pearl:[243,243,241],chamber:[23,26,25],whiten:6.5},bt=matchMedia("(prefers-reduced-motion: reduce)").matches,rr=(e,n=0,i=1)=>Math.min(i,Math.max(n,e)),dt=(e,n,i)=>e+(n-e)*i,er=e=>{let n=rr(e);return n<.5?4*n*n*n:1-(-2*n+2)**3/2},tr=(e,n,i)=>e.map((a,p)=>dt(a,n[p],i)),ca=(e,n=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${n})`,ar=!1;document.addEventListener("lightorb:intro-complete",e=>nr(e.detail));document.body.classList.contains("static")&&nr(null);function Nr(){let e=document.createElement("div");e.style.cssText="position:absolute;left:0;top:0;border-radius:50%;pointer-events:none;will-change:transform;background:radial-gradient(circle at 34% 28%,#fff 0 10%,rgba(255,255,255,.55) 24%,rgba(225,228,230,.35) 58%,rgba(170,176,180,.45) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),inset 0 -12px 24px rgba(120,126,130,.18),0 18px 30px -18px rgba(38,40,39,.45)";let n=()=>n,i={element:e,place(a){e.style.width=e.style.height=`${a.d}px`,e.style.transform=`translate(${a.x-a.d/2}px,${a.y-a.d/2}px)`,e.style.opacity=a.visibility??1}};return new Proxy(i,{get:(a,p)=>p in a?a[p]:n})}function nr(e){if(ar)return;let i=document.querySelector(".intro").querySelector(".intro-world"),a=e?.orb??Nr();ar=!0;let p=document.createElement("style");p.textContent=".x-surface,.x-orb{position:fixed;inset:0;pointer-events:none}.x-surface{z-index:6;width:100%;height:100%}.x-orb{z-index:30}",document.head.append(p);let u=document.createElement("canvas");u.className="x-surface",u.setAttribute("aria-hidden","true");let o=document.createElement("div");o.className="x-orb",document.body.append(u,o),o.append(a.element),a.attachPointer(document.createElement("div"))();let l=u.getContext("2d");a.prepareTone("ivory"),a.prepareTone("dark");let s=0,q=0,b=1,V=()=>{s=Math.max(1,innerWidth),q=Math.max(1,innerHeight),b=Math.min(devicePixelRatio||1,1.5),u.width=Math.round(s*b),u.height=Math.round(q*b)};V(),addEventListener("resize",V);let C=performance.now()/1e3,m={x:0,y:0,d:0,vx:0,vy:0,vd:0,from:null,hosted:!1},_=new Set,T=null,B=null,N=0,ie=1,se=1,be=C,le={left:.65,right:.55,env:.5,exposure:0,yaw:0,pitch:0,platform:!0},xe=(E,k)=>{let $=performance.now()/1e3,g=rr($-be,0,.05);be=$,m.from||(m.from={x:E.x,y:E.y,d:E.d}),T=B?.frame($,g,{W:s,H:q})??null;let R=T?.orb??{x:s/2,y:q*.42,d:Math.min(s*.3,q*.42)},z=bt?1:er(($-C)/Lt.hostDuration);if(!m.hosted)m.x=dt(m.from.x,R.x,z),m.y=dt(m.from.y,R.y,z),m.d=dt(m.from.d,R.d,z),z>=1&&(m.hosted=!0,a.attachPointer(document.createElement("div"))(),B?.reapply?.());else if(bt||T?.snap)m.x=R.x,m.y=R.y,m.d=R.d,m.vx=m.vy=m.vd=0;else{let D=Lt.follow,Ne=Lt.damping;m.vx+=(D*D*(R.x-m.x)-2*Ne*D*m.vx)*g,m.x+=m.vx*g,m.vy+=(D*D*(R.y-m.y)-2*Ne*D*m.vy)*g,m.y+=m.vy*g,m.vd+=(D*D*(R.d-m.d)-2*Ne*D*m.vd)*g,m.d+=m.vd*g}m.hosted&&!m.hostedAt&&(m.hostedAt=$);let W=m.hostedAt?er(($-m.hostedAt)/Lt.whiten):0,ue=Math.min(T?.warm??1,1-W);ie=bt?ue:dt(ie,ue,.2),N=dt(N,T?.room==="chamber"?1:0,bt?1:.12),se=dt(se,T?.orb?.vis??1,bt?1:.14),Number.isFinite(m.x+m.y+m.d)||(console.warn("orb pose NaN",JSON.stringify(R),JSON.stringify(m)),Object.assign(m,{x:R.x,y:R.y,d:R.d,vx:0,vy:0,vd:0})),De();let X=ie<.002;return{...E,x:m.x,y:m.y,d:m.d,squash:0,contact:0,worldY:X?-9999:m.y,hideWorld:X,visibility:se,emission:E.emission*(T?.emission??1),raster:Math.ceil(Math.max(m.d,R.d,140)*1.06)}};if(e?.orb)e.takeOver(xe);else{let E=()=>{a.place(xe({x:s/2,y:q/2,d:0,emission:1})),requestAnimationFrame(E)};requestAnimationFrame(E)}a.setBackdrop((E,k)=>ee(E,k,m));let nt=(()=>{try{let E=document.createElement("canvas").getContext("2d");return E.filter="blur(1px)",E.filter==="blur(1px)"}catch{return!1}})(),te=document.createElement("canvas"),J=te.getContext("2d");function Pe(E,k,$,g){return te.width!==g&&(te.width=te.height=g),J.globalCompositeOperation="copy",J.drawImage(i,E,k,$,$,0,0,g,g),J.globalCompositeOperation="saturation",J.fillStyle="#808080",J.fillRect(0,0,g,g),J.globalCompositeOperation="destination-in",J.drawImage(i,E,k,$,$,0,0,g,g),J.globalCompositeOperation="source-over",te}function ee(E,k,$){let g=$.d/k.diameter,R=k.extent*g,z=$.x-R/2,W=$.y-R/2,ue=k.extent/R;if(ie>.002&&i.width){let X=i.width/Math.max(1,innerWidth),D=!document.documentElement.classList.contains("warm");D&&nt&&(E.filter="grayscale(1) contrast(1.06)"),D&&!nt?E.drawImage(Pe(z*X,W*X,R*X,k.extent),0,0):E.drawImage(i,z*X,W*X,R*X,R*X,0,0,k.extent,k.extent),D&&nt&&(E.filter="none")}E.drawImage(u,z*b,W*b,R*b,R*b,0,0,k.extent,k.extent);for(let X of _){if(!X.isConnected||!X.width)continue;let D=X.getBoundingClientRect();D.right<z||D.left>z+R||D.bottom<W||D.top>W+R||E.drawImage(X,(D.left-z)*ue,(D.top-W)*ue,D.width*ue,D.height*ue)}}function De(){l.setTransform(b,0,0,b,0,0),l.clearRect(0,0,s,q);let E=1-ie;if(E>0){l.globalAlpha=E;let $=Lt.pearl,g=l.createLinearGradient(0,0,0,q);g.addColorStop(0,ca(tr($,[250,251,251],.5))),g.addColorStop(.6,ca($)),g.addColorStop(1,ca(tr($,[214,217,220],.55))),l.fillStyle=g,l.fillRect(0,0,s,q),Ke(s*.92,-q*.1,s*.55,"255,255,255",.7),Ke(s*.05,q*1.05,s*.45,"196,201,206",.35),l.globalAlpha=1}for(let $ of T?.glows??[]){l.save(),l.globalAlpha=$.k*E,l.translate($.x,$.y),l.scale(1,$.h/$.w);let g=l.createRadialGradient(0,0,0,0,0,$.w);g.addColorStop(0,"rgba(255,255,255,.7)"),g.addColorStop(.5,"rgba(255,255,255,.22)"),g.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=g,l.fillRect(-$.w,-$.w,$.w*2,$.w*2),l.restore()}N>.002&&Qe(N);let k=T?.ground;for(let $ of T?.grounds??[])Re($,$,1)}function Ke(E,k,$,g,R){let z=l.createRadialGradient(E,k,0,E,k,$);z.addColorStop(0,`rgba(${g},${R})`),z.addColorStop(1,`rgba(${g},0)`),l.fillStyle=z,l.fillRect(E-$,k-$,$*2,$*2)}let Je=Array.from({length:160},(E,k)=>{let $=Math.sin(k*12.9898)*43758.5453,g=$-Math.floor($),R=Math.sin(k*78.233)*12345.678%1;return[g*Math.PI*2,Math.abs(R)*.9-.25,.3+k%7/10]});function Qe(E){let k=T?.stage??{x:0,y:0,w:s,h:q},$=2**(le.exposure*.5),g=le.left,R=le.right,z=k.x+k.w/2,W=k.y+k.h*.52,ue=le.yaw,X=le.pitch;l.save(),l.globalAlpha=E,l.fillStyle="#070808",l.fillRect(0,0,s,q),l.fillStyle="#ffffff";for(let[Fe,ne,Se]of Je){let Ze=Fe-ue*Se,Ee=z+Math.sin(Ze)*k.w*.9,de=W-(ne+X*.6*Se)*k.h;Math.cos(Ze)<-.2||Ee<k.x||Ee>k.x+k.w||(l.globalAlpha=E*.1*Se*$,l.fillRect(Ee,de,1.1,1.1))}l.globalAlpha=E;let D=W+k.h*(.12-X*.55),Ne=T?.product?.ground??W+k.h*.18,He=l.createLinearGradient(0,D,0,k.y+k.h);He.addColorStop(0,"rgba(255,255,255,0)"),He.addColorStop(.25,`rgba(255,255,255,${.035*$})`),He.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=He,l.fillRect(k.x,D,k.w,k.y+k.h-D);let Be=T?.product?.x??z,Y=T?.product?.d??k.h*.4;for(let[Fe,ne]of[[-1,g],[1,R]]){if(ne<=.01)continue;let Se=Be+Fe*Y*(1.1+.5*Math.sin(ue*Fe+.4)),Ze=.18+.3*Math.max(0,Math.sin(.15+X));l.save(),l.translate(Se,Ne),l.scale(1,Ze);let Ee=l.createRadialGradient(0,0,0,0,0,Y*1.3);Ee.addColorStop(0,`rgba(240,242,240,${.12*ne*$})`),Ee.addColorStop(1,"rgba(240,242,240,0)"),l.fillStyle=Ee,l.beginPath(),l.arc(0,0,Y*1.3,0,Math.PI*2),l.fill(),l.restore();let de=Fe<0?k.x:k.x+k.w,$e=l.createRadialGradient(de,W,0,de,W,k.w*.45);$e.addColorStop(0,`rgba(230,234,232,${.07*ne*$})`),$e.addColorStop(1,"rgba(230,234,232,0)"),l.fillStyle=$e,l.fillRect(k.x,k.y,k.w,k.h)}let ge=l.createRadialGradient(z,W,k.h*.2,z,W,Math.hypot(k.w,k.h)*.62);ge.addColorStop(0,"rgba(0,0,0,0)"),ge.addColorStop(1,"rgba(0,0,0,.55)"),l.fillStyle=ge,l.fillRect(0,0,s,q),l.restore()}function Re(E,k,$){if(!Number.isFinite(k.d+k.x+E.y)||k.d<=0)return;let g=k.d/2,R=N>.5;l.save(),l.globalAlpha=$,l.translate(k.x,E.y),l.scale(1,.2);let z=l.createRadialGradient(0,0,0,0,0,g*1.5);R?(z.addColorStop(0,"rgba(240,240,236,.12)"),z.addColorStop(1,"rgba(240,240,236,0)"),l.globalCompositeOperation="lighter"):(z.addColorStop(0,"rgba(70,72,78,.22)"),z.addColorStop(.5,"rgba(70,72,78,.07)"),z.addColorStop(1,"rgba(70,72,78,0)")),l.fillStyle=z,l.beginPath(),l.arc(0,0,g*1.5,0,Math.PI*2),l.fill(),l.restore()}let qe={orb:a,reduced:bt,chamber:le,body:{get x(){return m.x},get y(){return m.y},get d(){return m.d},get hosted(){return m.hosted}},addBackdrop:E=>_.add(E),removeBackdrop:E=>_.delete(E),drawBackdrop:ee,exportPNG(E,k=a.element){let g=document.createElement("canvas");g.width=Math.round(E.w*2),g.height=Math.round(E.h*2);let R=g.getContext("2d");R.drawImage(u,E.x*b,E.y*b,E.w*b,E.h*b,0,0,g.width,g.height);for(let z of k.querySelectorAll("canvas")){let W=z.getBoundingClientRect();R.drawImage(z,(W.left-E.x)*2,(W.top-E.y)*2,W.width*2,W.height*2)}return new Promise(z=>g.toBlob(z,"image/png"))}};B=Za(qe),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__exit={api:qe,body:m,site:B,get scene(){return T}})}export{Lt as EXIT};
