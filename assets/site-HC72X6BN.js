import{e as Ft,f as Gt,h as Sa,i as Ea,j as Wt,k as Vt,n as $a,o as Ta,p as _t,r as Yt,t as La,u as Ca,v as qt,w as Rt,x as de,y as Ma}from"./chunk-EYSW7VZQ.js";var ue=[{id:"products",label:"Products",route:"#/products",line:"Objects of light and glass, ready to use.",action:"Explore products",clip:"products",words:["products","product","pieces","piece","objects","gallery","shop"]},{id:"templates",label:"Templates",route:"#/templates",line:"Complete compositions to start from.",action:"Browse templates",clip:"templates",words:["templates","template","compositions","websites","cassettes"]},{id:"studio",label:"Studio",route:"#/studio",line:"Shape the light. Make it yours.",action:"Open Studio",clip:"studio",words:["studio","editor","customize","customise","edit","workshop"]},{id:"sound",label:"Sound",route:"#/sound",line:"Voices and the quiet sounds of glass.",action:"Listen",clip:"sound",words:["sound","sounds","voice","voices","audio","listen"]}];var Ut=e=>(Object.values(e).forEach(r=>r&&typeof r=="object"&&Ut(r)),Object.freeze(e)),Ot=Ut({version:1,shell:{roughness:.01,thickness:.78,ior:1.58,tint:"#cdd2cf",tintAmount:.72,elastic:0},interior:{kind:"light",amount:.5,size:.5,motion:.4,fill:.5,colour:"#f1f0ec"},light:{colour:"#f6f6f3",strength:.9,x:-.04,y:-.3,z:.12,spread:.8,glow:.3},motion:{idle:0},voice:{enabled:!0,response:.6}}),yt=(e,r,i,a)=>Ut({id:e,name:r,line:i,family:"orb",config:{...structuredClone(Ot),...Object.fromEntries(Object.entries(a).map(([c,p])=>[c,{...Ot[c],...p}]))}}),rt=[yt("original","Light","Clear glass holding one soft white light.",{}),yt("beads","Beads","Small glass beads resting and rolling inside the shell.",{interior:{kind:"beads",amount:.6,size:.55,motion:.45},light:{strength:.7},shell:{thickness:.15,ior:1.3}}),yt("glitter","Glitter","Fine reflective flecks suspended in the volume.",{interior:{kind:"glitter",amount:.6,size:.35,motion:.35,colour:"#f4f4f2"}}),yt("liquid","Liquid","A clear liquid with a meniscus that moves with the glass.",{interior:{kind:"liquid",fill:.42,motion:.5,colour:"#dfe3e1"},light:{strength:.78}}),yt("gel","Gel","A soft gel body; the shell answers with a damped give.",{interior:{kind:"gel",amount:.55,motion:.45,colour:"#e4e6e3"},shell:{elastic:.55}})],Xt=rt[0].config,Kt=e=>rt.find(r=>r.id===e)??rt[0],Me=[{id:"orb",name:"The Orb",kind:"Interactive object",line:"A 3D sphere for your own work, in twenty versions: glass, metal, porcelain, bloom, and glass with light, sparkle or beads inside.",receives:["ES module (Three.js r186) with the sphere and its material","The version you choose","Integration notes and dependency list"],source:["dist/light-orb.js","dist/orb-three.js","dist/orb-lighting.js","dist/orb-floor.js"],preview:"orb",studio:!0,presets:rt.map(e=>e.id),readiness:"preview_ready",missing:["price","checkout provider","packaged download (source export not yet assembled)"],price:null},{id:"orb-slider",name:"Orb Slider",kind:"Interactive control",line:"A clear glass capsule whose thumb is the Orb itself. Slide it to enter.",receives:["Slider component source","Orb thumb integration","Integration notes"],source:["dist/intro/activation.js","dist/intro/glass-control.js"],preview:"slider",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package (currently embedded in the intro)"],price:null},{id:"orb-wave",name:"Orb Wave",kind:"Surface effect",line:"The ripple the Orb leaves on the floor when it lands, drawn in light.",receives:["Light-world shader source","Impact trigger API","Integration notes"],source:["dist/intro/light-world.js"],preview:"wave",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"background-pack",name:"Background Pack",kind:"Two environments",line:"A dark world and a light one, and the change between them.",receives:["Dark and warm environment shader","Exposure transition","Integration notes"],source:["dist/intro/light-world.js"],preview:"backgrounds",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"crystal-controls",name:"Crystal Controls",kind:"Interface kit",line:"Buttons, switches, fields and sliders in clear glass, with every state designed.",receives:["CSS component source","Every state: hover, focus, pressed, selected, disabled, loading","Integration notes"],source:["dist/app/glass.css.js"],preview:"controls",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged download"],price:null}],Jt=e=>Me.find(r=>r.id===e),Ee=[{id:"the-light-orb",name:"The Light Orb",line:"This website\u2019s own beginning: the Orb as host, a quiet greeting, the quotation and the four destinations.",cover:{src:"./media/templates/the-light-orb.cover.jpg",from:"dist/intro.html (post-intro welcome, live render)",meta:"./media/templates/the-light-orb.cover.json"},route:"#/",includes:["Centred welcome with the hosting Orb","Quotation scene","Destination selector"],readiness:"preview_ready",missing:["price","checkout provider","packaged source export"],price:null}],wt=[{id:"samantha",name:"Samantha",locale:"en-US",provider:"macOS system speech (development)",rights:{onSite:"development preview only",download:"not permitted"},readiness:"blocked",missing:"licensed voice from a chosen provider"},{id:"daniel",name:"Daniel",locale:"en-GB",provider:"macOS system speech (development)",rights:{onSite:"development preview only",download:"not permitted"},readiness:"blocked",missing:"licensed voice from a chosen provider"}],Qt={home:"Welcome to The Light Orb. A space for creative possibilities. Let\u2019s explore.",products:"Explore the pieces. Each one is designed to become part of something of your own.",templates:"Start with a complete composition. Select a cassette to preview the design.",studio:"Choose a piece, then shape its light, material and movement.",sound:"Listen before you choose. Find the voice and sounds that fit your work.",voice_audition:"A little light. A new idea. Something of your own."},Zt=(e,r)=>`./media/voice/${e}.${r}.m4a`,kt={text:"I don\u2019t know why people expect art to make sense when they accept the fact that life doesn\u2019t make sense.",author:"David Lynch",work:"interview with Kristine McKenna, Los Angeles Times, 20 August 1989",source:"https://www.latimes.com/archives/la-xpm-1989-08-20-ca-1327-story.html"};var ea=[{id:"select",name:"Select",line:"A soft glass touch for choosing.",file:"./media/sfx/select.wav"},{id:"open",name:"Open",line:"A breath of air as a panel opens.",file:"./media/sfx/open.wav"},{id:"close",name:"Close",line:"The same air, settling.",file:"./media/sfx/close.wav"},{id:"confirm",name:"Confirm",line:"Two quiet glass tones.",file:"./media/sfx/confirm.wav"},{id:"detent",name:"Detent",line:"A precise tick for wheels and steps.",file:"./media/sfx/detent.wav"},{id:"type",name:"Type",line:"A dry, very quiet key.",file:"./media/sfx/type.wav"},{id:"level",name:"Level",line:"A short tone for volume changes.",file:"./media/sfx/level.wav"}],Aa={promise:"A new drop every two weeks.",open:!1,price:null,interval:null,quota:null,plans:[{id:"ready",name:"Ready-made",line:"Choose a curated piece and use it as it is.",points:["One finished piece","Its source and integration notes"]},{id:"studio",name:"Studio",line:"Customise a piece and export your own version.",points:["Light, material and movement controls","Saved designs"]},{id:"member",name:"Membership",line:"Follow the collection as it grows.",points:["A new drop every two weeks"]}]};var qa="lightorb:audio",ut=(e,r=0,i=1)=>Math.min(i,Math.max(r,e)),ta={master:!1,guide:!0,sfx:!0,voice:wt[0].id,gain:.8,sfxGain:.5,volume:.8};function Ar(){try{return{...ta,...JSON.parse(localStorage.getItem(qa)||"{}")}}catch{return{...ta}}}function Ra(){let e=Ar();wt.some(g=>g.id===e.voice)||(e.voice=ta.voice);let r=new Set,i=null,a=null,c=null,p=null,n=null,d=null,s=new Audio;s.preload="auto",s.crossOrigin="anonymous",s.setAttribute("playsinline","");let R=null,x={clip:null,voice:null,status:"idle",error:null,energy:0,journey:new Set},W=new Map,M=new Map,m=g=>{if(!M.has(g)){let A=fetch(g).then(L=>{if(!L.ok)throw new Error(L.status);return L.blob()}).then(L=>URL.createObjectURL(L));M.set(g,A),A.catch(()=>M.delete(g))}return M.get(g)},V={},T=()=>r.forEach(g=>g(Ce)),B=()=>{try{localStorage.setItem(qa,JSON.stringify(e))}catch{}};function N(){if(i)return i;let g=window.AudioContext||window.webkitAudioContext;if(!g)return null;i=new g,a=i.createGain(),a.connect(i.destination),c=i.createGain(),c.connect(a),p=i.createGain(),p.connect(a),n=i.createAnalyser(),n.fftSize=1024,n.smoothingTimeConstant=0,n.connect(c),d=new Float32Array(n.fftSize);try{R=i.createMediaElementSource(s),R.connect(n)}catch{R=null}return ie(),i}function ie(){if(!i)return;let g=i.currentTime;a.gain.setTargetAtTime(e.master?e.volume??.8:0,g,.02),c.gain.setTargetAtTime((e.guide||x.clip?.startsWith("voice_audition"),e.gain),g,.02),p.gain.setTargetAtTime(e.sfx?e.sfxGain:0,g,.02)}let se=()=>{let g=N();g&&g.state!=="running"&&g.state!=="closed"&&g.resume().catch(()=>{}),pe()};for(let g of["pointerdown","keydown","touchend"])addEventListener(g,se,{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden?s.paused||(s.pause(),x.status="paused",x.hiddenPause=!0,T()):x.hiddenPause&&(x.hiddenPause=!1)}),s.addEventListener("ended",()=>{x.status="ended",T()}),s.addEventListener("pause",()=>{x.status==="playing"&&(x.status="paused",T())}),s.addEventListener("playing",()=>{x.status="playing",x.error=null,T()}),s.addEventListener("error",()=>{x.clip&&(x.status="error",x.error="The recording could not be loaded.",T())}),s.addEventListener("loadedmetadata",T);let ve=(g,{voice:A=e.voice,from:L=0,kind:D="guide"}={})=>(f=null,ye(`${g}.${A}`,Zt(g,A),{from:L,kind:D,voice:A})),le=(g,A,{from:L=0}={})=>(f=null,ye(g,A,{from:L,kind:"audition"}));async function ye(g,A,{from:L=0,kind:D="guide",voice:H=null}={}){if(D==="guide"&&(!e.master||!e.guide))return!1;if(He(),se(),x.clip!==g){s.pause(),x.clip=g,x.voice=H,x.status="loading",T();try{s.src=await m(A)}catch{s.src=A}if(x.clip!==g)return!1}if(x.env=null,we(A,200).then(U=>{x.clip===g&&(x.env=U)}).catch(()=>{}),x.kind=D,L?(s.readyState<1&&await new Promise(U=>s.addEventListener("loadedmetadata",U,{once:!0})),s.currentTime=L):s.currentTime&&(s.currentTime=0),T(),!e.master||D==="guide"&&!e.guide||x.clip!==g)return!1;try{return await s.play(),!0}catch{return x.status="blocked",x.error="Playback was blocked. Press play to start it.",T(),!1}}function ot(){s.paused||s.pause(),x.status="paused",T()}async function te(){se();try{await s.play()}catch{x.status="blocked",T()}}let J=typeof speechSynthesis<"u"?speechSynthesis:null,Ne=0,ee={on:!1};function He(){J&&ee.on&&(ee.on=!1,J.cancel())}let Ke={samantha:[/ava.*premium/i,/zoe.*premium/i,/samantha.*(enhanced|premium)/i,/(aria|jenny|emma|ava).*natural/i,/natural.*(female|aria|jenny)/i,/google us english/i,/google uk english female/i,/^(ava|zoe|allison|susan)\b/i,/^samantha/i],daniel:[/(evan|nathan|tom).*premium/i,/daniel.*(enhanced|premium)/i,/(guy|ryan|andrew|brian|christopher).*natural/i,/natural.*male/i,/google uk english male/i,/^(evan|nathan|tom|aaron)\b/i,/^daniel/i]},Je=[],Qe=()=>{Je=J?.getVoices()??[]};J&&(Qe(),J.addEventListener?.("voiceschanged",Qe));let Oe=[/(paulina|monica|m[oó]nica|marisol|isabela).*(premium|enhanced)/i,/(elvira|dalia|helena|ximena|paloma).*natural/i,/natural.*(spanish|espa)/i,/google espa[nñ]ol/i,/^(paulina|monica|m[oó]nica|marisol|jorge|diego)\b/i];function ze(g){if(Je.length||Qe(),g==="es"){let L=Je.filter(D=>/^es[-_]/i.test(D.lang));if(L.length){for(let D of Oe){let H=L.find(U=>D.test(U.name));if(H)return H}return L.find(D=>D.localService===!1)??L[0]}}let A=Je.filter(L=>/^en[-_]/i.test(L.lang));for(let L of Ke[e.voice]??Ke.samantha){let D=A.find(H=>L.test(H.name));if(D)return D}return A.find(L=>L.localService===!1)??A[0]}let E=null,k="./media/voice/lines/",$=()=>E??=fetch(`${k}manifest.json`).then(g=>g.ok?g.json():null).catch(()=>null);$();let f=null;function q(g,{id:A,onend:L,lang:D}={}){if(!g||!e.master||!e.guide)return L?.(),!1;let H=f={};if(A){let U=e.voice;return He(),s.pause(),x.kind="guide",x.clip=`line:${A}`,x.status="loading",T(),$().then(async Q=>{let ke=Q?.lines?.[A]?.text===g?Q.lines[A].files?.[U]:null;if(f!==H)return;if(!ke){z(g,{onend:L,lang:D});return}let me=k+ke;try{await m(me)}catch{f===H&&z(g,{onend:L,lang:D});return}f===H&&(x.clip=null,L&&s.addEventListener("ended",()=>{f===H&&L()},{once:!0}),ye(`line:${A}.${U}`,me,{kind:"guide",voice:U}))}),!0}return z(g,{onend:L,lang:D})}function z(g,{onend:A,lang:L}={}){if(!J||!g||!e.master||!e.guide)return A?.(),!1;se(),s.pause(),J.cancel();let D=ze(L),H=D&&(!D.localService||/premium|enhanced|natural/i.test(D.name)),U=g.match(/[^.!?]+[.!?]*\s*/g)?.map(ke=>ke.trim()).filter(Boolean)??[g],Q={};return ee.u=Q,ee.on=!0,x.kind="guide",x.clip="speech",x.status="playing",T(),U.forEach((ke,me)=>{let re=new SpeechSynthesisUtterance(ke);D&&(re.voice=D,re.lang=D.lang),re.rate=H?1:.94,re.pitch=1,re.volume=e.volume??.8,re.onboundary=()=>{Ne=1},re.onstart=()=>{Ne=1},me===U.length-1&&(re.onend=re.onerror=()=>{ee.u===Q&&(ee.on=!1,x.status="stopped",T(),A?.())}),J.speak(re)}),!0}let _=()=>ze()?.name??null;function fe(){f=null,He(),s.pause(),x.status=x.clip?"stopped":"idle",T()}function ce(g){s.duration&&(s.currentTime=ut(g)*s.duration,T())}let j=performance.now();function X(){let g=performance.now(),A=Math.min(.1,(g-j)/1e3);j=g;let L=0;if(ee.on&&e.master)Ne=Math.max(0,Ne-A*3.2),L=ut(.35+.45*Ne+.15*Math.sin(g/90));else if(!R&&x.env&&!s.paused&&e.master&&s.duration)L=ut(x.env.bins[Math.min(x.env.bins.length-1,Math.floor(s.currentTime/s.duration*x.env.bins.length))]*1.1);else if(n&&!s.paused&&e.master){n.getFloatTimeDomainData(d);let H=0;for(let Q=0;Q<d.length;Q++)H+=d[Q]*d[Q];let U=Math.sqrt(H/d.length);L=ut((U-.008)/.16)}let D=L>x.energy?.05:.18;return x.energy+=(L-x.energy)*(1-Math.exp(-A/D)),x.energy<.001&&(x.energy=0),x.energy}let Be=(g,A=e.voice,L=72)=>we(Zt(g,A),L);async function we(g,A=72){let L=`${g}|${A}`;if(W.has(L))return W.get(L);let D=(async()=>{let H=await(await fetch(g)).arrayBuffer(),U=window.OfflineAudioContext||window.webkitOfflineAudioContext,Q=await new U(1,44100,44100).decodeAudioData(H),ke=Q.getChannelData(0),me=Math.max(1,Math.floor(ke.length/A)),re=[],et=0;for(let Pe=0;Pe<A;Pe++){let nt=0;for(let ct=Pe*me;ct<(Pe+1)*me;ct++)nt+=ke[ct]*ke[ct];let Mt=Math.sqrt(nt/me);re.push(Mt),et=Math.max(et,Mt)}return{bins:re.map(Pe=>Pe/(et||1)),duration:Q.duration}})();return W.set(L,D),D.catch(()=>W.delete(L)),D}let Y={press:"select",release:"select",volume:"level",case:"open"},he={select:90,type:70,detent:50,level:110,open:220,close:220,confirm:400},Fe={select:.7,type:.45,detent:.6,level:.5,open:.6,close:.55,confirm:.7},oe={},Te=0;function Ze(g){oe[g]||!i||(oe[g]=fetch(`./media/sfx/${g}.wav`).then(A=>A.arrayBuffer()).then(A=>i.decodeAudioData(A)).then(A=>oe[g]=A).catch(()=>oe[g]=null))}function Le(g,A=.5){if(g=Y[g]||g,!e.master||!e.sfx)return;let L=N();if(!L||L.state!=="running")return;let D=performance.now();if(D-(V[g]??0)<(he[g]??80)||Te>3)return;V[g]=D;let H=oe[g];if(!H||H instanceof Promise){Ze(g);return}let U=L.createBufferSource(),Q=L.createGain();U.buffer=H,Q.gain.value=(Fe[g]??.6)*(g==="level"?.6+.4*ut(A):1),g==="level"&&(U.playbackRate.value=.85+.3*ut(A)),U.connect(Q),Q.connect(p),Te++,U.onended=()=>{Te--,Q.disconnect()},U.start()}let pe=()=>{if(i)for(let g of Object.keys(he))Ze(g)},Ce={prefs:e,state:x,el:s,get ready(){return!!i},get position(){return s.duration?s.currentTime/s.duration:0},get time(){return s.currentTime||0},get duration(){return s.duration||0},get playing(){return ee.on||!s.paused&&!s.ended},set(g){Object.assign(e,g),B(),se(),ie(),(!e.master||!e.guide&&x.kind==="guide")&&(s.paused||s.pause(),He()),T()},play:ve,playUrl:le,say:q,voiceName:_,pause:ot,resume:te,stop:fe,seek:ce,energy:X,peaks:Be,peaksUrl:we,sfx:Le,unlock:se,once(g){return x.journey.has(g)||!e.master||!e.guide?Promise.resolve(!1):(x.journey.add(g),ve(g).then(A=>(A||x.journey.delete(g),A)))},on(g){return r.add(g),()=>r.delete(g)}};return Ce}var qr={"reply.missed":"I didn\u2019t catch that. Tap me and try again.","reply.help":"I can take you anywhere here. Say Products, Templates, Studio, Sound or Membership, or name a piece, like the Slider or the Wave. You can also ask me where you are.","reply.thanks":"With pleasure. I\u2019m right here when you need me.","reply.who":"I\u2019m the Light Orb, the guide of this place. A little light made of glass. I show you around and I answer when you call.","reply.back":"Going back.","reply.hello":"Hello. It\u2019s lovely to hear you. Where would you like to go? Products, Templates, Studio or Sound?","reply.unknown":"I\u2019m still learning words. Try Products, Templates, Studio, Sound, or ask me where you are.","reply.mic":"Allow the microphone to talk with me."},We=e=>({id:e,text:qr[e]}),Oa={profile:"your profile",downloads:"your downloads",saved:"what you have saved",designs:"the designs you made in Studio"};function za(e,r){if(e==="products"&&r){let i=Me.find(a=>a.id===r);if(i)return{id:`present.product.${i.id}`,text:`This is ${i.name}. ${i.kind}. ${i.line} Try its versions, then add it to your cart, save it, or take it to Studio.`}}if(e==="templates"&&r){let i=Ee.find(a=>a.id===r);if(i)return{id:`present.template.${i.id}`,text:`You are looking at the template ${i.name}. ${i.line}`}}return e==="products"?{id:"present.products",text:`Welcome to Products. ${Me.length} objects of light and glass, ready to use: ${Me.map(i=>i.name).join(", ")}. Choose one to see it alive.`}:e==="templates"?{id:"present.templates",text:`These are the Templates. Complete compositions to start from: ${Ee.map(i=>i.name).join(", ")}.`}:e==="studio"?{id:"present.studio",text:"You are in Studio. Here you shape the light: material, colour and movement. Make it yours, then save or export it."}:e==="sound"?{id:"present.sound",text:"This is Sound. Listen to the voices and the quiet sounds of glass that live across the site."}:e==="membership"?{id:"present.membership",text:"This is Membership. Choose how you want to work with the collection: ready-made pieces, Studio, or the full membership with a new drop every two weeks."}:e==="account"?r&&Oa[r]?{id:`present.account.${r}`,text:`This is your account, showing ${Oa[r]}.`}:{id:"present.account",text:"This is your account."}:e==="privacy"?{id:"present.privacy",text:"This is the privacy page: what the site keeps, and what you can ask for."}:e==="terms"?{id:"present.terms",text:"These are the terms of use of the site."}:e==="licence"?{id:"present.licence",text:"This is the licence: what you can do with the free Orb and with the pieces."}:e==="signin"?{id:"present.signin",text:"Sign in to find your saved pieces and designs."}:e==="signup"?{id:"present.signup",text:"Create an account to save pieces and keep your designs."}:{id:"present.home",text:"Welcome to The Light Orb. I will be your guide. Choose Products, Templates, Studio or Sound, and I will show you around."}}var Pa=e=>({id:`already.${e.id}`,text:`We are already here. ${e.text}`}),Ia=e=>({id:`piece.${e.id}`,text:`Here is ${e.name}. ${e.line}`}),ja=e=>({id:`open.${e.id}`,text:`Opening ${e.name}.`}),Da=()=>({id:"piece.orb",text:`Here is the Orb. ${Me[0].line}`});var gt=(e,r,i)=>e+(r-e)*i,aa=e=>{let r=parseInt(String(e).replace("#",""),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]},so=aa("#f3d8c5"),Rr={fill:.08,lobe:.2,wall:.55,core:.034},st=e=>structuredClone(e??Ot);function zt(e,r,{dark:i=!1,envBoost:a=1,exposure:c=0,left:p=.65,right:n=.55}={}){let d=r.shell,s=r.light,R=r.interior;e.setOptics({...Rr,lobe:gt(.1,.3,s.spread),core:gt(.026,.044,s.spread)}),e.setInterior({kind:R.kind,amount:R.amount,size:R.size,motion:R.motion,fill:R.fill,colour:R.colour}),e.setElastic(d.elastic??0);let x=aa(d.tint);e.setMaterial({roughness:d.roughness,thickness:gt(.3,1.4,d.thickness),ior:d.ior,envMapIntensity:(i?1.9:2.1)*a*2**(c*.5),tint:x,tintDistance:d.tintAmount>.001?gt(8,.4,d.tintAmount):0}),e.setNeutral?.(!0);let W=aa(s.colour),M=Math.max(...W);e.setLight({tint:W.map(V=>V/Math.max(.05,M)*1.05),spread:gt(.7,1.6,s.spread)}),e.setBloom(gt(.004,.08,s.glow)),e.setFocus({x:s.x,y:s.y,z:s.z}),e.setTone(i?"dark":"light"),e.setVolumeWorld(0),e.lockFeather([.5,.515]);let m=V=>(Math.round(V*10)/10).toFixed(1);return e.setWorld(i?`chamber:${m(p)}:${m(n)}`:"gallery"),{emission:s.strength/.72*2**(c*.35),voice:r.voice}}var Na=`
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
`;var Ha=`
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
`;var ne=null,Ae=null,ft=null,St=0,Or=performance.now()/1e3,ae={exposure:1,target:1,impacts:[null,null],next:0,strength:1,scale:90,horizon:.27,lamp:.9,orb:null};function ra(e){if(!Ae){Ae=document.createElement("canvas"),Ae.className="world-preview",Ae.setAttribute("aria-hidden","true"),Ae.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:inherit";try{ne=Ca(Ae)}catch{ne=null}}return ne&&(ft=e,e.prepend(Ae),na(),zr()),Ae}function oa(){cancelAnimationFrame(St),St=0,Ae?.remove(),ft=null}function na(){if(!ft||!ne)return;let e=ft.getBoundingClientRect();ne.resize(Math.max(2,e.width),Math.max(2,e.height),Math.min(devicePixelRatio||1,1.5))}addEventListener("resize",na);var qe={state:ae,setExposure(e,r=!1){ae.target=e,r&&(ae.exposure=e)},impact(e,r,i=ae.strength){let a=ae.next++%2;ae.impacts[a]={x:e,y:r,at:performance.now()/1e3,strength:i}},set(e){Object.assign(ae,e)},setOrb(e){ae.orb=e},get canvas(){return Ae}};function zr(){cancelAnimationFrame(St);let e=()=>{if(!ft||!ne)return;let r=performance.now()/1e3,i=ft.getBoundingClientRect();Math.abs(i.width-Ae.width/ne.ratio)>2&&na(),ae.exposure+=(ae.target-ae.exposure)*.05;let a=i.height,c=ae.orb;ne.setHorizon(ae.horizon),ne.setExposure(ae.exposure),ne.setNightGain(1),c?(ne.setOrb(c.x,c.y,c.d),ne.setLamp(c.x,c.y,c.d*3,ae.lamp*(1-ae.exposure)),ne.setReveal(c.x,c.y,Math.hypot(i.width,a),ae.exposure*60)):(ne.setReveal(0,0,1,0),ne.setLamp(0,0,1,0)),ae.impacts.forEach((p,n)=>ne.setImpact(n,p?.x??0,p?.y??0,p?r-p.at:-1,p?.strength??0,ae.scale)),ne.render(r-Or),St=requestAnimationFrame(e)};St=requestAnimationFrame(e)}var Fa="lightorb:cart",Pt=()=>{try{return JSON.parse(localStorage.getItem(Fa))??[]}catch{return[]}},Ba=e=>{try{localStorage.setItem(Fa,JSON.stringify(e))}catch{}ia.forEach(r=>r(e))},ia=new Set,$e={items:Pt,has:e=>Pt().some(r=>r.id===e),add(e){let r=Pt();r.some(i=>i.id===e.id)||(r.push({...e,at:new Date().toISOString()}),Ba(r))},remove(e){Ba(Pt().filter(r=>r.id!==e))},toggle(e){return $e.has(e.id)?($e.remove(e.id),!1):($e.add(e),!0)},on(e){return ia.add(e),()=>ia.delete(e)}};var Pr=(e,r,i)=>e+(r-e)*i;var Eo=Math.PI/180;var G=[e=>Math.round(e*100),e=>e/100],$o={scene:["Scene",[["scene.exposure","Exposure",-2,2,.1,"EV"],["scene.left","Left light",0,1,.01,"%",...G],["scene.right","Right light",0,1,.01,"%",...G],["scene.env","Environment",0,1,.01,"%",...G]]],light:["Light",[["orb.light.colour","Colour","color"],["orb.light.strength","Strength",0,1,.01,"%",...G],["orb.light.x","Position X",-.6,.6,.01,"r"],["orb.light.y","Position Y",-.8,.6,.01,"r"],["orb.light.z","Position Z",-.4,.4,.01,"r"],["orb.light.spread","Spread",0,1,.01,"%",...G],["orb.light.glow","Glow",0,1,.01,"%",...G]]],material:["Material",[["orb.shell.tint","Shell tint","color"],["orb.shell.tintAmount","Tint amount",0,1,.01,"%",...G],["orb.shell.roughness","Roughness",0,.5,.005,""],["orb.shell.thickness","Optical depth",0,1,.01,"r",e=>+Pr(.3,1.4,e).toFixed(2),e=>(e-.3)/1.1],["orb.shell.ior","IOR",1,2,.01,""]]],interior:["Interior",[["orb.interior.kind","Type","select",[["light","Light"],["beads","Beads"],["glitter","Glitter"],["liquid","Liquid"],["gel","Gel"]]]]],voice:["Voice response",[["orb.voice.response","Response",0,1,.01,"%",...G]]],transform:["Transform",[["rot","Rotation",-180,180,1,"\xB0"]]],view:["View",[["view.yaw","Orbit",-60,60,1,"\xB0"],["view.pitch","Elevation",-20,35,1,"\xB0"],["view.zoom","Zoom",.6,1.4,.01,"%",...G]]],slider:["Capsule",[["slider.length","Length",240,600,1,"px"],["slider.height","Height",60,130,1,"px"],["slider.tint","Glass tint","color"],["slider.tintAmount","Tint amount",0,1,.01,"%",...G],["slider.preset","Orb thumb","select",rt.map(e=>[e.id,e.name])]]],wave:["Wave",[["wave.strength","Strength",.1,1,.01,"%",...G],["wave.scale","Ring scale",40,140,1,"px"],["wave.exposure","Environment",0,1,.01,"%",...G]]],bg:["Environment",[["bg.exposure","Dark \u2192 warm",0,1,.01,"%",...G],["bg.horizon","Horizon",.15,.45,.01,"%",...G],["bg.lamp","Orb lamp (dark)",0,1,.01,"%",...G]]],ctl:["Crystal controls",[["ctl.tint","Tint","color"],["ctl.tintAmount","Tint amount",0,1,.01,"%",...G],["ctl.depth","Optical depth",0,10,.5,"px"],["ctl.radius","Corner radius",6,999,1,"px"],["ctl.blur","Backdrop blur",0,24,1,"px"]]]},To={beads:[["orb.interior.amount","Count",0,1,.01,"",e=>Math.round(8+e*36),e=>(e-8)/36],["orb.interior.size","Bead size",0,1,.01,"%",...G],["orb.interior.motion","Motion",0,1,.01,"%",...G]],glitter:[["orb.interior.amount","Density",0,1,.01,"%",...G],["orb.interior.size","Fleck size",0,1,.01,"%",...G],["orb.interior.motion","Sparkle drift",0,1,.01,"%",...G],["orb.interior.colour","Colour","color"]],liquid:[["orb.interior.fill","Fill",0,1,.01,"%",...G],["orb.interior.motion","Slosh",0,1,.01,"%",...G],["orb.interior.colour","Colour","color"]],gel:[["orb.shell.elastic","Elasticity",0,1,.01,"%",...G],["orb.interior.amount","Body size",0,1,.01,"%",...G],["orb.interior.motion","Motion",0,1,.01,"%",...G],["orb.interior.colour","Colour","color"]],light:[]};function Ga(e){let r=null,i=null,a=null,c={},p={emission:1},n=document.createElement("div");n.className="x-product",n.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:31",document.body.append(n);let d={x:-999,y:-999,d:100,vis:0},s={x:-999,y:-999,d:100,vis:0,vx:0,vy:0,vd:0},R=!0;function x(){return r||i||(i=La({container:n,diameter:240,driven:!0,background:"#f3f3f1"}).then(M=>(r=M,i=null,M.attachPointer(document.createElement("div"))(),M.setBackdrop((m,V)=>e.drawBackdrop(m,V,s)),M.setVisibility(0),M.tick(performance.now()),a&&W(),M)).catch(()=>{i=null})),i}function W(){r&&a&&(p=zt(r,a,c),r.setEmission(Math.min(1.4,p.emission)))}return{get orb(){return r},get element(){return r?.element},get output(){return p},show(M,m={}){a=st(M),c=m,R=!1,x(),W()},update(M,m=c){a=st(M),c=m,W()},hide(){R=!0,r&&(r.setVisibility(0),r.setView({yaw:0,pitch:0}),r.setObjectYaw(0),r.setSpeech(0),r.tick(performance.now())),s.vis=0,s.x=-999},attachPointer(M){return r?r.attachPointer(M,{range:"volume"}):(x()?.then(m=>m?.attachPointer(M,{range:"volume"})),null)},frame(M){if(!r)return;if(!M||R){(s.vis>0||r.element.style.visibility!=="hidden")&&(s.vis=0,r.setVisibility(0),r.tick(performance.now()));return}let m=1/60,V=9;if(M.snap||s.x<-900)Object.assign(s,{x:M.x,y:M.y,d:M.d,vx:0,vy:0,vd:0});else for(let T of["x","y","d"]){let B="v"+T;s[B]+=(V*V*(M[T]-s[T])-2*V*s[B])*m,s[T]+=s[B]*m}s.vis+=((M.vis??1)-s.vis)*.2,r.holdRaster(Math.ceil(Math.max(s.d,M.d,120)*1.06)),r.setPose({x:s.x,y:s.y,diameter:s.d}),r.setVisibility(s.vis),r.tick(performance.now())},pose:s}}var sa=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null,Va=!!sa;function _a({onresult:e,onend:r,onerror:i}){if(!sa)return i?.("unsupported"),null;let a=new sa;a.lang=navigator.language||"en-US",a.interimResults=!0,a.maxAlternatives=1,a.continuous=!1;let c="",p="";a.onresult=n=>{p=[...n.results].map(d=>d[0].transcript).join(" "),n.results[n.results.length-1].isFinal&&(c=p),e?.(p,!!c)},a.onerror=n=>i?.(n.error),a.onend=()=>r?.(c||p);try{a.start()}catch{return i?.("busy"),null}return a}var Wa=e=>String(e).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),Ve=(e,...r)=>r.some(i=>new RegExp(`\\b${i}\\b`).test(e)),Ir={home:["home","start","beginning","inicio","principio","portada"],products:[...ue[0].words,"productos","producto","tienda","objetos"],templates:[...ue[1].words,"plantillas","plantilla","composiciones"],studio:[...ue[2].words,"estudio","editar","personalizar","disenar"],sound:[...ue[3].words,"sonido","sonidos","voces","escuchar","audio"],membership:["membership","member","plans","plan","pricing","price","prices","membresia","miembro","planes","precio","precios","cuesta","cost"],account:["account","profile","downloads","cuenta","perfil","descargas"],signin:["sign in","log in","login","iniciar sesion","entrar"]},jr={home:"#/",membership:"#/membership",account:"#/account",signin:"#/signin"},Dr={"orb-slider":["slider","deslizador"],"orb-wave":["wave","ola","onda","ripple"],"background-pack":["background","backgrounds","fondo","fondos"],"crystal-controls":["controls","buttons","controles","botones","crystal"]},Re=(e,r={})=>({say:e.text,id:e.id,...r});function Ya(e,{here:r,presentation:i}){let a=Wa(e);if(!a)return Re(We("reply.missed"),{intent:"fallback"});if(a.split(" ").length<=3&&Ve(a,"stop","quiet","silence","shh","para","calla","callate","silencio","basta"))return{say:"",stop:!0,command:!0};if(Ve(a,"where am i","where are we","donde estoy","donde estamos","que es esto","what is this","what is here","que hay aqui"))return Re(i(),{intent:"where"});if(Ve(a,"help","what can you do","what can i do","ayuda","ayudame","que puedes hacer","que puedo hacer"))return Re(We("reply.help"),{intent:"help"});if(Ve(a,"thank you","thanks","gracias"))return Re(We("reply.thanks"),{intent:"thanks"});if(Ve(a,"who are you","what are you","quien eres","que eres","como te llamas","your name"))return Re(We("reply.who"),{intent:"who"});if(Ve(a,"back","go back","atras","volver","vuelve"))return Re(We("reply.back"),{back:!0,command:!0});for(let[p,n]of Object.entries(Dr))if(Ve(a,...n)){let d=Me.find(s=>s.id===p);if(d)return Re(Ia(d),{go:`#/products/${p}`,quiet:!0,command:!0})}let c=Ee.find(p=>a.includes(Wa(p.name)));if(c)return Re(ja(c),{go:`#/templates/${c.id}`,quiet:!0,command:!0});for(let[p,n]of Object.entries(Ir))if(Ve(a,...n))return p===r?Re(Pa(i()),{command:!0}):{go:jr[p]??`#/${p}`,command:!0};return Ve(a,"the orb","orb","esfera","la orb","bola")?Re(Da(),{go:`#/products/${Me[0].id}`,quiet:!0}):Ve(a,"hello","hi","hey","hola","buenas","buenos dias","buenas tardes","buenas noches")?Re(We("reply.hello"),{intent:"hello"}):Re(We("reply.unknown"),{intent:"fallback"})}var Ua=()=>!!qt,Nr=/^#\/(products(\/[a-z0-9-]+)?|templates(\/[a-z0-9-]+)?|studio|sound|membership|account)?$/;async function Xa(e,r,{timeout:i=8e3}={}){if(!qt)throw new Error("disabled");let a=new AbortController,c=setTimeout(()=>a.abort(),i);try{let p=await fetch(qt,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({messages:e,page:r}),signal:a.signal});if(!p.ok)throw new Error(`http ${p.status}`);let n=await p.json(),d=typeof n.say=="string"?n.say.trim().slice(0,600):"";if(!d)throw new Error("empty");return{say:d,go:typeof n.go=="string"&&Nr.test(n.go)?n.go:void 0}}finally{clearTimeout(c)}}var Hr=/\b(el|la|los|las|que|para|con|una|un|es|est[aá]|aqu[ií]|hola|puedes|quieres|de|y|tu|te|me|por|del)\b/gi,Ka=e=>/[ñ¿¡]/i.test(e)||(String(e).match(Hr)?.length??0)>=3;var Ja={},Qa={member:""},Za="",er=e=>"",la=e=>(location.assign(e),!0),De={get enabled(){return!1},canCheckout:e=>!!e.length&&e.every(r=>er(r.id)),canSubscribe:e=>!!!1,canRestore:()=>!!!1,checkout(e){return De.canCheckout(e)?(la(er(e[0].id)),e[0].id):null},subscribe(e){return De.canSubscribe(e)?la(Qa[e]):!1},restore(){return De.canRestore()?la(Za):!1}};var Fr=/^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/,Gr=e=>typeof e=="string"&&e.length<=254&&Fr.test(e.trim());function jt(e,{compact:r=!1}={}){let i=!!Rt;return`<form class="form interest wl${r?" wl-c":""}" data-waitlist="${e}" novalidate>
    ${r?"":"<h2>Join the waitlist</h2>"}
    <label class="fl"><span>${r?"Join the waitlist \u2014 be first when pieces open":"Be first when pieces open"}</span>
      <span class="wl-row"><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"${i?"":" disabled"}>
      <button class="gb${r?" small":""}" type="submit"${i?"":" disabled"}><span>Join</span></button></span></label>
    <p class="note" data-wlmsg role="status" aria-live="polite">${i?'We only keep your email to tell you when pieces open. See <a href="#/privacy">privacy</a>; leave any time.':'The waitlist opens soon \u2014 nothing typed here is sent yet. See <a href="#/privacy">privacy</a>.'}</p>
  </form>`}function tr(e){e.querySelectorAll("[data-waitlist]").forEach(r=>r.addEventListener("submit",async i=>{if(i.preventDefault(),!Rt)return;let a=r.querySelector("[data-wlmsg]"),c=r.querySelector("input"),p=r.querySelector("button"),n=c.value.trim();if(!Gr(n)){a.textContent="Please enter a valid email address.",c.focus();return}p.disabled=!0,p.setAttribute("aria-busy","true");try{let d=await fetch(Rt,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:n,source:r.dataset.waitlist,lang:(navigator.language||"en").slice(0,5)})});d.ok?(a.textContent="You are on the list. Thank you.",c.value="",de("waitlist_join",{source:r.dataset.waitlist})):a.textContent=d.status===429?"Too many tries \u2014 please wait a minute.":"That did not go through. Please try again later."}catch{a.textContent="That did not go through. Please try again later."}p.disabled=!1,p.removeAttribute("aria-busy")}))}var ge={saved:"lightorb:saved",designs:"lightorb:designs",profile:"lightorb:profile"},Ye=(e,r)=>{try{return JSON.parse(localStorage.getItem(e))??r}catch{return r}},Et=(e,r)=>{try{return localStorage.setItem(e,JSON.stringify(r)),!0}catch{return!1}},xe={saved:()=>Ye(ge.saved,[]),isSaved:(e,r)=>Ye(ge.saved,[]).some(i=>i.type===e&&i.id===r),toggleSaved(e,r,i,a){let c=Ye(ge.saved,[]),p=c.findIndex(n=>n.type===e&&n.id===r);return p>=0?c.splice(p,1):c.unshift({type:e,id:r,name:i,href:a,at:new Date().toISOString()}),Et(ge.saved,c),p<0},designs:()=>Ye(ge.designs,[]),design:e=>Ye(ge.designs,[]).find(r=>r.id===e),saveDesign(e){let r=Ye(ge.designs,[]),i=r.findIndex(a=>a.id===e.id);return i>=0?r[i]=e:r.unshift(e),Et(ge.designs,r.slice(0,40))},renameDesign(e,r){let i=Ye(ge.designs,[]),a=i.find(c=>c.id===e);a&&(a.name=r,Et(ge.designs,i))},deleteDesign(e){Et(ge.designs,Ye(ge.designs,[]).filter(r=>r.id!==e))},profile:()=>Ye(ge.profile,null),setProfile:e=>Et(ge.profile,e)},ar=[["profile","Profile"],["designs","My Designs"],["saved","Saved"],["downloads","Downloads"]],Wr='<p class="note">Local preview: accounts are not connected yet. What you see here is kept in this browser only.</p>';function ht(e,r,i="profile"){let{esc:a,audio:c}=r;ar.some(d=>d[0]===i)||(i="profile");let p=xe.profile();e.innerHTML=`
    <section class="dest acct">
      <header class="dh"><p class="kicker">Account</p><h1>${p?.name?a(p.name):"Your space"}</h1>${Wr}</header>
      <nav class="segbar acct-tabs" aria-label="Account">${ar.map(([d,s])=>`<a class="pill" href="#/account/${d}" ${d===i?'aria-current="page" aria-pressed="true"':""}>${s}</a>`).join("")}</nav>
      <div class="acct-body" data-body></div>
    </section>${r.footer()}`;let n=e.querySelector("[data-body]");if(i==="profile"&&(n.innerHTML=`<form class="form" data-prof>
        <label class="fl"><span>Display name</span><input class="gi" name="name" value="${a(p?.name||"")}" placeholder="How the site greets you" maxlength="40"></label>
        <div class="acts"><button class="gb primary" type="submit">Save on this device</button>${p?'<button class="gb" type="button" data-forget>Forget</button>':""}</div>
        <p class="note">Sign-in and email are not available yet. <a href="#/signin">About signing in</a></p>
      </form>
      <div class="kv"><span>Sound</span><b>${c.prefs.master?"On":"Off"}</b><span>Narration</span><b>${c.prefs.guide?"On":"Off"}</b><span>Guide voice</span><b>${a(c.prefs.voice)}</b><span>Membership</span><b>Not available yet</b></div>`,n.querySelector("[data-prof]").addEventListener("submit",d=>{d.preventDefault();let s=d.target.name.value.trim();xe.setProfile(s?{name:s}:null),c.sfx("confirm"),ht(e,r,"profile")}),n.querySelector("[data-prof] .gi").addEventListener("input",d=>{d.isTrusted&&c.sfx("type")}),n.querySelector("[data-forget]")?.addEventListener("click",()=>{try{localStorage.removeItem(ge.profile)}catch{}ht(e,r,"profile")})),i==="designs"){let d=xe.designs();n.innerHTML=d.length?`<div class="dgrid">${d.map(s=>`<article class="dc" data-d="${s.id}">
        <a class="dc-img" href="#/studio?design=${s.id}" aria-label="Open ${a(s.name)} in Studio">${s.thumb?`<img src="${s.thumb}" alt="">`:""}</a>
        <input class="dc-n gi" value="${a(s.name)}" aria-label="Design name" maxlength="48">
        <p class="note">${a(s.familyName)} \xB7 ${new Date(s.at).toLocaleDateString()}</p>
        <div class="acts"><a class="gb small primary" href="#/studio?design=${s.id}">Open in Studio</a><button class="gb small" type="button" data-del>Delete</button></div></article>`).join("")}</div>`:'<div class="empty"><h2>No designs yet</h2><p>Designs you save in Studio appear here, with a picture of each one.</p><a class="gb primary" href="#/studio">Open Studio</a></div>',n.querySelectorAll("[data-d]").forEach(s=>{let R=s.dataset.d,x=s.querySelector(".dc-n");x.addEventListener("change",()=>{xe.renameDesign(R,x.value.trim()||"Untitled design"),c.sfx("confirm")}),x.addEventListener("input",W=>{W.isTrusted&&c.sfx("type")}),s.querySelector("[data-del]").addEventListener("click",()=>{confirm(`Delete \u201C${x.value}\u201D? This cannot be undone.`)&&(xe.deleteDesign(R),c.sfx("close"),ht(e,r,"designs"))})})}if(i==="saved"){let d=xe.saved();n.innerHTML=d.length?`<ul class="slist">${d.map((s,R)=>`<li><span class="kicker">${s.type}</span><a href="${s.href}">${a(s.name)}</a><button class="pill" type="button" data-rm="${R}">Remove</button></li>`).join("")}</ul>`:'<div class="empty"><h2>Nothing saved yet</h2><p>Save products, templates and sounds to find them here.</p><a class="gb primary" href="#/products">Explore products</a></div>',n.querySelectorAll("[data-rm]").forEach(s=>s.addEventListener("click",()=>{let R=d[+s.dataset.rm];xe.toggleSaved(R.type,R.id),c.sfx("close"),ht(e,r,"saved")}))}i==="downloads"&&(n.innerHTML=`<div class="empty"><h2>No downloads yet</h2><p>Pieces you buy will be listed here once purchasing opens. Studio exports are saved directly to your computer.</p>${De.canRestore()?'<a class="gb primary" href="#" data-restore>Find my purchases</a>':""}</div>`),n.querySelector("[data-restore]")?.addEventListener("click",d=>{d.preventDefault(),De.restore()})}function da(e,r,i){e.innerHTML=`
    <section class="dest sign">
      <header class="dh"><p class="kicker">Account</p><h1>${i==="in"?"Sign in":"Create an account"}</h1></header>
      <form class="form" data-sign novalidate>
        <label class="fl"><span>Email</span><input class="gi" type="email" name="email" autocomplete="email" disabled></label>
        <label class="fl"><span>Password</span><input class="gi" type="password" name="pw" autocomplete="${i==="in"?"current-password":"new-password"}" disabled></label>
        <div class="acts"><button class="gb primary" type="submit" disabled>${i==="in"?"Sign in":"Create account"}</button><a class="gb" href="#/account">Continue on this device</a></div>
        <p class="note">Accounts open with membership. Until then nothing is sent and no password is collected; your saved work stays in this browser.</p>
        <p class="note">${i==="in"?'New here? <a href="#/signup">Create an account</a>':'Already have one? <a href="#/signin">Sign in</a>'}</p>
      </form>
    </section>${r.footer()}`}function rr(e,r){let i=Aa;e.innerHTML=`
    <section class="dest memb">
      <header class="dh"><p class="kicker">Membership</p><h1>${i.promise}</h1><p class="dh-l">Three ways to work with The Light Orb. Prices, billing and what each plan includes are still being decided.</p></header>
      <div class="plans">${i.plans.map(a=>`<article class="plan${a.id==="member"?" em":""}"><h2>${a.name}</h2><p>${a.line}</p><ul>${a.points.map(c=>`<li>${c}</li>`).join("")}</ul>
        ${a.id==="ready"?'<a class="gb" href="#/products">Explore products</a>':a.id==="studio"?'<a class="gb" href="#/studio">About Studio</a>':De.canSubscribe(a.id)?`<button class="gb primary" type="button" data-join="${a.id}">Join</button>`:`<button class="gb primary" type="button" disabled aria-disabled="true">${i.open?"Join":"Membership opens soon"}</button>`}</article>`).join("")}</div>
      ${jt("membership")}
    </section>${r.footer()}`,e.querySelectorAll("[data-join]").forEach(a=>a.addEventListener("click",()=>De.subscribe(a.dataset.join)))}var Vr=`<svg class="wm-o" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><defs><mask id="wm-counter"><rect width="100" height="100" fill="#fff"/>
  <path fill="#000" d="M49 9C31 9 23 29 23 50c0 24 12 42 30 42 15 0 23-9 23-20 0-9-7-12-11-21-4-9-2-19 0-27 1-9-5-15-16-15z"/></mask></defs>
  <circle cx="50" cy="50" r="46" fill="currentColor" mask="url(#wm-counter)"/></svg>`,ca=`<span class="wm-t">The Light</span>${Vr}<span class="wm-t wm-rb">rb</span>`;var Tt=[{id:"clear",base:"clear",name:"Clear",line:"Thick clear glass, nothing inside but its own depth."},{id:"smoke",base:"clear",name:"Smoke",line:"Smoked glass, a grey depth that darkens to the rim.",tint:[.6,.62,.65]},{id:"amber",base:"clear",name:"Amber",line:"Warm amber glass, like light through honey.",tint:[1,.8,.52]},{id:"chrome",base:"chrome",name:"Chrome",line:"Liquid chrome that keeps folding the room it reflects."},{id:"gold",base:"chrome",name:"Liquid Gold",line:"Molten gold folding over itself.",tint:[1,.79,.45]},{id:"gunmetal",base:"chrome",name:"Gunmetal",line:"Dark liquid metal with cold highlights.",tint:[.5,.53,.57]},{id:"porcelain",base:"porcelain",name:"Porcelain",line:"Raised porcelain bands with gold edges over dark glass."},{id:"silverline",base:"porcelain",name:"Silverline",line:"Porcelain bands edged in silver over dark glass.",accent:[.82,.84,.88]},{id:"celadon",base:"porcelain",name:"Celadon",line:"Porcelain bands over green celadon glass.",tint:[.22,.36,.3]},{id:"bloom",base:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud."},{id:"lilac",base:"bloom",name:"Lilac",line:"Milky glass holding a slow violet cloud.",tint:[.62,.45,1],accent:[.86,.76,1]},{id:"lagoon",base:"bloom",name:"Lagoon",line:"Milky glass holding a slow sea-blue cloud.",tint:[.2,.62,.9],accent:[.6,.92,.9]},{id:"core",base:"core",name:"Core",line:"Clear glass holding one soft white light at its centre."},{id:"dawn",base:"core",name:"Dawn",line:"Clear glass holding a warm, low light.",tint:[1,.72,.45]},{id:"starlight",base:"points",name:"Starlight",line:"Clear glass full of small points of light that drift and twinkle."},{id:"firefly",base:"points",name:"Firefly",line:"Warm points of light drifting slowly inside the glass.",tint:[1,.78,.4]},{id:"glitter",base:"glitter",name:"Glitter",line:"Fine silver flecks that catch the light as the sphere turns."},{id:"goldleaf",base:"glitter",name:"Gold Leaf",line:"Flakes of gold suspended in clear glass.",tint:[1,.78,.4]},{id:"beads",base:"beads",name:"Beads",line:"Small milky glass beads floating inside the shell."},{id:"pearls",base:"beads",name:"Pearls",line:"Soft pearls with a faint rainbow sheen, floating inside.",tint:[1,.95,.97],accent:[.85,.9,1]}],_r={clear:0,chrome:1,porcelain:2,bloom:3,core:4,points:5,glitter:6,beads:7},or={0:{tint:[1,1,1],accent:[1,1,1]},1:{tint:[1,1,1],accent:[1,1,1]},2:{tint:[.13,.17,.18],accent:[.86,.64,.3]},3:{tint:[1,.42,.45],accent:[1,.72,.68]},4:{tint:[1,.97,.92],accent:[1,1,1]},5:{tint:[.92,.96,1],accent:[1,1,1]},6:{tint:[.95,.96,1],accent:[1,1,1]},7:{tint:[.97,.97,.96],accent:[1,.9,.95]}},Yr=e=>{let r=Tt.find(a=>a.id===e)??Tt[0],i=_r[r.base];return{k:i,tint:r.tint??or[i].tint,accent:r.accent??or[i].accent}},Ur=`
  uniform mat3 uRot;
  varying vec3 vN; varying vec3 vP; varying vec3 vObj;
  void main() {
    vObj = uRot * position;              // the material turns with the drag
    vN = normalize(normalMatrix * normal);
    vec4 wp = modelViewMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    gl_Position = projectionMatrix * wp;
  }`,Xr=`
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
  }`,$t=null;function Kr(){if($t)return $t;let e=document.createElement("canvas"),r=new Yt({canvas:e,alpha:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0});r.setClearColor(0,0);let i=new Wt,a=new _t(30,1,.1,20);a.position.set(0,0,4.9);let c=new Ta({vertexShader:Ur,fragmentShader:Xr,transparent:!0,premultipliedAlpha:!0,uniforms:{uKind:{value:0},uTint:{value:new Ft(1,1,1)},uAccent:{value:new Ft(1,1,1)},uTime:{value:0},uStir:{value:0},uRot:{value:new Gt}}});return i.add(new Vt(new $a(1,128,96),c)),$t={r,scene:i,camera:a,mat:c,list:new Set,raf:0},$t}function pa(){let e=$t;e.raf=0;let r=performance.now()/1e3,i=Math.min(devicePixelRatio||1,1.5);for(let c of e.list){if(!c.visible||!c.canvas.isConnected)continue;c.step(r);let p=Math.max(2,Math.round(c.canvas.clientWidth*i)),n=Math.max(2,Math.round(c.canvas.clientHeight*i));(c.canvas.width!==p||c.canvas.height!==n)&&(c.canvas.width=p,c.canvas.height=n),e.r.setSize(p,n,!1),e.camera.aspect=p/n,e.camera.updateProjectionMatrix();{let s=Yr(c.kind);e.mat.uniforms.uKind.value=s.k,e.mat.uniforms.uTint.value.fromArray(s.tint),e.mat.uniforms.uAccent.value.fromArray(s.accent)}e.mat.uniforms.uTime.value=c.time,e.mat.uniforms.uStir.value=c.stir,e.mat.uniforms.uRot.value.copy(c.rot),e.r.render(e.scene,e.camera);let d=c.ctx;d.clearRect(0,0,p,n),d.drawImage(e.r.domElement,0,0,p,n)}let a=!1;for(let c of e.list)if(c.visible&&c.canvas.isConnected){a=!0;break}a&&(e.raf=requestAnimationFrame(pa))}function ua(e,r="clear",{interactive:i=!0,reduced:a=matchMedia("(prefers-reduced-motion: reduce)").matches}={}){let c;try{c=Kr()}catch{let T=()=>{};return new Proxy({},{get:()=>T})}let p=document.createElement("canvas");p.className="sph-c",p.setAttribute("aria-hidden","true"),e.append(p);let n={v:.4,vel:a?0:.12},d={v:-.15,vel:0},s={x:0,y:0,tx:0,ty:0},R=new Sa,x=new Ea,W=performance.now()/1e3,M=null,m={canvas:p,ctx:p.getContext("2d"),kind:r,visible:!1,time:Math.random()*40,stir:0,rot:new Gt,step(T){let B=Math.min(.05,T-W);W=T,M||(n.vel+=((a?0:.12)-n.vel)*B*.8,d.vel*=Math.exp(-B*3),d.v+=(-.15-d.v)*B*.8),n.v+=n.vel*B,d.v=Math.max(-1.2,Math.min(1.2,d.v+d.vel*B)),s.x+=(s.tx-s.x)*B*5,s.y+=(s.ty-s.y)*B*5,m.stir*=Math.exp(-B*1.6),m.time+=B*(a?.3:1)*(1+m.stir*3),x.set(d.v+s.y*.25,n.v+s.x*.35,0,"YXZ"),R.makeRotationFromEuler(x),m.rot.setFromMatrix4(R)}};if(i){p.style.touchAction="pan-y",p.style.cursor="grab",p.addEventListener("pointerdown",N=>{M={x:N.clientX,y:N.clientY,t:performance.now(),moved:!1},p.setPointerCapture(N.pointerId),p.style.cursor="grabbing"}),p.addEventListener("pointermove",N=>{let ie=p.getBoundingClientRect();if(s.tx=((N.clientX-ie.left)/ie.width-.5)*2,s.ty=((N.clientY-ie.top)/ie.height-.5)*2,!M)return;let se=performance.now(),ve=N.clientX-M.x,le=N.clientY-M.y,ye=Math.max(8,se-M.t)/1e3;Math.hypot(ve,le)>3&&(M.moved=!0),n.v+=ve*.01,d.v+=le*.01,n.vel=ve*.01/ye*.6,d.vel=le*.01/ye*.6,M.x=N.clientX,M.y=N.clientY,M.t=se});let T=N=>{M&&(M.moved||(m.stir=Math.min(1.5,m.stir+1)),M=null,p.style.cursor="grab")};p.addEventListener("pointerup",T),p.addEventListener("pointercancel",T),p.addEventListener("pointerleave",()=>{s.tx=s.ty=0});let B=!1;p.addEventListener("pointerdown",()=>{B=!1},!0),p.addEventListener("pointermove",()=>{M?.moved&&(B=!0)}),p.addEventListener("click",N=>{B&&(N.preventDefault(),N.stopPropagation())})}let V=new IntersectionObserver(([T])=>{m.visible=T.isIntersecting,m.visible&&!c.raf&&(c.raf=requestAnimationFrame(pa))});return V.observe(p),c.list.add(m),c.raf||(c.raf=requestAnimationFrame(pa)),{setKind(T){m.kind=T,m.stir=1},stir(){m.stir=Math.min(1.5,m.stir+1)},dispose(){V.disconnect(),c.list.delete(m),p.remove()}}}var ga="Carla Tres",nr="trescarla@gmail.com",Jr="13 October 2026",Lt=`<a href="mailto:${nr}">${nr}</a>`,Qr={privacy:{kicker:"Privacy",title:"Privacy",lede:"What this site collects, why, and what you can ask for. Short version: very little, and nothing is sold.",body:`
    <h2>Who is responsible</h2>
    <p>The Light Orb is run by ${ga}, a sole trader based in Spain (the data controller). Contact: ${Lt}.</p>
    <h2>Visiting the site</h2>
    <p>We count visits with GoatCounter, a privacy-friendly analytics service that sets no cookies and does not track you across sites. It records the page address, referrer, browser type, screen size and an approximate country, without storing your IP address. If your browser sends Do Not Track or Global Privacy Control, nothing is counted at all. Legal basis: our legitimate interest in knowing which pages are used.</p>
    <h2>The waitlist</h2>
    <p>If you join the waitlist we keep your email address, the date, where you signed up (for example "footer") and your browser language \u2014 nothing else. It is stored in Cloudflare Workers KV and used only to tell you when pieces open. Legal basis: your consent, which you can withdraw at any time by writing to ${Lt}; we then delete your address.</p>
    <h2>Talking with the Orb</h2>
    <p>When you ask the guide Orb a question, the text of the conversation and the page you are on are sent through our Cloudflare Worker to Anthropic, which generates the reply. We do not store or log these conversations. Anthropic processes them as our service provider under its own commercial terms. Please do not share personal information in the conversation.</p>
    <h2>Voice</h2>
    <p>Speech recognition and speech synthesis are done by your browser. Depending on your browser, the recognised audio may be processed by its maker (for example Google or Apple). We never receive or keep your voice.</p>
    <h2>Stored on your device</h2>
    <p>The site uses your browser's local storage to remember your preferences (sound, voice), saved items, your display name and your designs, plus short-lived session storage for scroll position. This stays on your device; we cannot see it. You can clear it from your browser settings.</p>
    <h2>Providers and transfers</h2>
    <p>GitHub (site hosting), Cloudflare (Worker and waitlist storage), GoatCounter (visit counts) and Anthropic (Orb replies). Some of them are based in the United States; transfers rely on the EU\u2013US Data Privacy Framework or standard contractual clauses.</p>
    <h2>How long</h2>
    <p>Waitlist emails are kept until the pieces open and the announcement is sent, or until you ask us to delete them, and in any case no longer than two years. Visit counts are aggregated.</p>
    <h2>Your rights</h2>
    <p>Under the GDPR you can ask for access, correction, deletion, restriction, portability, or object to processing, and withdraw consent, by writing to ${Lt}. You can also complain to the Spanish Data Protection Agency (AEPD, aepd.es).</p>`},terms:{kicker:"Terms",title:"Terms of use",lede:"The rules for using this website.",body:`
    <h2>Who we are</h2>
    <p>This website is run by ${ga}, a sole trader in Spain. Contact: ${Lt}.</p>
    <h2>Using the site</h2>
    <p>You may browse the site, try the previews, and use Studio and the guide Orb for your own personal or professional exploration. Please do not misuse it: no attempts to break, overload or scrape it, and no unlawful or abusive use of the guide Orb.</p>
    <h2>The guide Orb</h2>
    <p>The Orb's replies are generated automatically and may be incomplete or wrong. They are not professional advice and do not bind us; prices and terms are only those shown on the site.</p>
    <h2>Content and pieces</h2>
    <p>The design, text, images, sounds and code of this site belong to ${ga} unless stated otherwise. Using the free Orb and any piece you obtain is governed by the <a href="#/licence">licence</a>.</p>
    <h2>Purchases</h2>
    <p>Purchasing and membership are not open yet. When they open, the price, what you receive and the conditions of each sale \u2014 including your rights as a consumer \u2014 will be shown before you pay.</p>
    <h2>Availability and liability</h2>
    <p>The site is offered as it is and may change or be unavailable at times. We are not liable for indirect losses arising from its use, except where the law does not allow this to be limited. Nothing here limits your rights as a consumer.</p>
    <h2>Law</h2>
    <p>These terms are governed by Spanish law. If you are a consumer, you keep the protection of the law and the courts of your place of residence.</p>`},licence:{kicker:"Licence",title:"Licence",lede:"What you can do with the free Orb and with the pieces when they open.",body:`
    <h2>The free Orb (Original version)</h2>
    <p>Free for personal and commercial use: websites, apps, client work, products. Attribution ("Orb by The Light Orb") is appreciated, not required. You may not resell or redistribute the code itself as a product, template or asset pack, or present it as your own. It includes Three.js (MIT licence).</p>
    <h2>Paid pieces \u2014 personal</h2>
    <p>For your own projects, personal or commercial, by one person. Use the piece in as many of your own projects as you like.</p>
    <h2>Paid pieces \u2014 commercial</h2>
    <p>For one person's client and commercial work: you may build the piece into work you deliver to clients or sell, as long as it is part of a larger work and not offered on its own.</p>
    <h2>Team licence</h2>
    <p>Everyone in one team or company may use the pieces under the commercial terms above.</p>
    <h2>Never allowed</h2>
    <p>Reselling, sharing or redistributing the source files, alone or in a pack, template, library or marketplace, even modified or for free; or using them to build a product that competes with The Light Orb.</p>
    <h2>No warranty</h2>
    <p>Code is provided as it is. Questions about a use not covered here: ${Lt}.</p>`}},ir={privacy:"Privacy",terms:"Terms of use",licence:"Licence"};function Dt(e,r,i){let a=Qr[i];e.innerHTML=`
    <section class="dest legal">
      <header class="dh"><p class="kicker">${a.kicker}</p><h1>${a.title}</h1><p class="dh-l">${a.lede}</p></header>
      <div class="legal-b">${a.body}
        <p class="note">Last updated ${Jr}. <a href="#/privacy">Privacy</a> \xB7 <a href="#/terms">Terms</a> \xB7 <a href="#/licence">Licence</a></p></div>
    </section>${r.footer()}`}var Ue=(e,r=0,i=1)=>Math.min(i,Math.max(r,e)),mt=(e,r,i)=>e+(r-e)*i,Xe=e=>{let r=Ue(e);return r*r*(3-2*r)},Zr=(e,r,i,a,c)=>Xe((e-r)/(i-r))*(1-Xe((e-a)/(c-a))),F=e=>String(e).replace(/[&<>"]/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[r]),lt={get:(e,r)=>{try{return JSON.parse(sessionStorage.getItem(e))??r}catch{return r}},set:(e,r)=>{try{sessionStorage.setItem(e,JSON.stringify(r))}catch{}}},K={play:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>',replay:'<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/></svg>',prev:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',mute:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M4.5 20c1.4-3.6 4.2-5.4 7.5-5.4s6.1 1.8 7.5 5.4"/></svg>',heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/></svg>',back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',down:'<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',bag:'<svg viewBox="0 0 24 24"><path d="M5.5 8.5h13l-1 11h-11z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5.5" y="10.5" width="13" height="9" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',orb:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="11" cy="15" r="1.6" fill="currentColor" stroke="none"/></svg>'},fa={pieces:"products",materials:"products"};function lr(e){let{orb:r,reduced:i}=e,a=Ra(),c=document.createElement("style");c.textContent=Na+Ha,document.head.append(c),document.documentElement.classList.add("lo-on");let p=Ga(e),n=sr("main","lo");n.setAttribute("aria-label","The Light Orb"),n.tabIndex=-1;let d=sr("div","lo-top");document.body.append(n,d),d.innerHTML=`
    <header class="hd" data-hd>
      <a class="wm" href="#/" aria-label="The Light Orb \u2014 Home" data-home>${ca}</a>
      <nav class="nav" aria-label="Main">${ue.map(t=>`<a href="${t.route}" data-nav="${t.id}">${t.label}</a>`).join("")}</nav>
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
    <div class="caption" data-caption aria-live="polite"></div>`;let s=d.querySelector("[data-hd]"),R=d.querySelector("[data-caption]"),x=d.querySelector("[data-guide]"),W=d.querySelector("[data-sound]"),M=d.querySelector("[data-menu]"),m=t=>{M.hidden=!t,W.setAttribute("aria-expanded",String(t)),a.sfx(t?"open":"close"),t&&M.querySelector(".gsw").focus()};W.addEventListener("click",()=>m(M.hidden)),document.addEventListener("pointerdown",t=>{!M.hidden&&!t.target.closest(".snd")&&m(!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!M.hidden&&(m(!1),W.focus())}),d.querySelectorAll("[data-pref]").forEach(t=>t.addEventListener("click",()=>{let o=t.dataset.pref;a.set({[o]:!a.prefs[o]}),a.sfx("select")}));let V=d.querySelector("[data-volume]");V.addEventListener("input",()=>{a.set({volume:+V.value}),a.sfx("level",+V.value)});function T(){let t=a.prefs;d.querySelectorAll("[data-pref]").forEach(l=>l.setAttribute("aria-checked",String(!!t[l.dataset.pref]))),V.value=t.volume??.8,V.style.setProperty("--p",`${(t.volume??.8)*100}%`),d.querySelector("[data-volout]").textContent=`${Math.round((t.volume??.8)*100)}%`,W.innerHTML=t.master?K.sound:K.mute,W.setAttribute("aria-label",t.master?"Sound on \u2014 settings":"Sound off \u2014 settings"),n.querySelectorAll("[data-enable]").forEach(l=>{l.hidden=t.master});let o=a.state.clip?.split(".")[0],h=o&&o!=="home"&&a.state.kind==="guide"&&["playing","loading"].includes(a.state.status);R.textContent=h?Qt[o]:"",R.classList.toggle("on",!!h)}a.on(T);let B=d.querySelector("[data-cartbtn]"),N=d.querySelector("[data-cartp]"),ie=d.querySelector("[data-cartn]");function se(){let t=$e.items();ie.hidden=!t.length,ie.textContent=t.length,N.innerHTML=`<p class="kicker">Cart</p>${t.length?`<ul class="cart-l">${t.map(o=>`<li><a href="${o.href}">${F(o.name)}</a><button class="pill" type="button" data-cartrm="${o.id}">Remove</button></li>`).join("")}</ul>`:'<p class="note">Your cart is empty.</p>'}
      ${De.canCheckout(t)?'<button class="gb primary" type="button" data-checkout>Checkout</button>':'<button class="gb primary" type="button" disabled>Checkout opens soon</button><p class="note">No payment can be taken yet; items stay in this browser.</p>'}`,N.querySelector("[data-checkout]")?.addEventListener("click",()=>{let o=De.checkout($e.items());o&&$e.remove(o)}),N.querySelectorAll("[data-cartrm]").forEach(o=>o.addEventListener("click",()=>{$e.remove(o.dataset.cartrm),a.sfx("close")}))}$e.on(se),se();let ve=t=>{N.hidden=!t,B.setAttribute("aria-expanded",String(t)),a.sfx(t?"open":"close")};B.addEventListener("click",()=>ve(N.hidden)),document.addEventListener("pointerdown",t=>{!N.hidden&&!t.target.closest(".cartw")&&ve(!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!N.hidden&&(ve(!1),B.focus())});let le={emission:1,voice:Xt.voice},ye=()=>{le=zt(r,st(Xt)),r.setRibbon?.(0)};ye();let ot=()=>({home:"home",products:"products",templates:"templates",studio:"studio",sound:"sound"})[f.name],te=null,J=null,Ne;x.addEventListener("click",()=>{if(a.prefs.master||a.set({master:!0}),a.prefs.guide||a.set({guide:!0}),ze=performance.now()/1e3,de("orb_tap"),te){te.abort(),te=null,Oe("");return}if(a.playing){a.stop();return}if(a.sfx("select"),!Va){$();return}Oe("Listening\u2026"),te=_a({onresult:t=>Oe(`\u201C${t}\u201D`),onerror:t=>{te=null,t==="not-allowed"||t==="service-not-allowed"?(de("mic_denied"),xt(We("reply.mic").text),$()):t!=="aborted"&&t!=="no-speech"&&Oe("")},onend:t=>{te&&(te=null,Je(t))}})});let ee=[],He=0,Ke=(t,o)=>{for(ee.push({role:t,content:o});ee.length>12;)ee.shift();for(;ee.length&&ee[0].role!=="user";)ee.shift()};async function Je(t){let o=Ya(t,{here:f.name,presentation:k});if(de(o.intent==="fallback"?"orb_fallback":"orb_command",{intent:o.intent||(o.stop?"stop":o.back?"back":o.go?`go:${o.go.split("?")[0].replace("#/","")}`:"answer")}),!o.command&&Ua()&&t.trim()){let h=++He;Oe("\u2026"),Ke("user",t.trim());try{let l=await Xa(ee.slice(),{route:location.hash||"#/",title:document.title,presentation:k().text});return h!==He?void 0:(Ke("assistant",l.say),Qe({say:l.say,go:l.go,lang:Ka(l.say)?"es":"en"}))}catch{if(h!==He)return;ee.pop()}}Qe(o)}function Qe(t){if(t.stop){a.stop(),Oe("");return}if(t.back&&history.back(),t.go&&location.hash!==t.go){J=t.say?{text:t.say,id:t.id,lang:t.lang}:null,location.hash=t.go;return}t.say?(xt(t.say),ze=performance.now()/1e3,a.say(t.say,{id:t.id,lang:t.lang})):t.go||Oe("")}function Oe(t){clearTimeout(Ht),R.textContent=t,R.classList.toggle("on",!!t),t||T()}let ze=-99,E=0,k=()=>za(f.name,f.id);function $(){let{id:t,text:o}=k();xt(o),ze=performance.now()/1e3,a.say(o,{id:t})}let f={name:""},q=null,z=[],_={products:"Products",templates:"Templates",studio:"Studio",sound:"Sound",membership:"Membership",account:"Account",signin:"Sign in",signup:"Sign up",...ir};function fe(){let[t,o=""]=(location.hash.replace(/^#/,"")||"/").split("?"),h=t.split("/").filter(Boolean),l=Object.fromEntries(new URLSearchParams(o));return{name:fa[h[0]]||h[0]||"home",id:h[1]||null,query:l,raw:h[0]}}function ce(){let t=fe();if(t.raw&&fa[t.raw]){location.replace(`#/${fa[t.raw]}${t.id?"/"+t.id:""}`);return}if(!["home","products","templates","studio","sound","membership","account","signin","signup","privacy","terms","licence"].includes(t.name)){location.replace("#/");return}z.forEach(C=>C()),z=[],be=null,q&&t.name!=="studio"&&(q.leave(),q=null),p.hide(),oa(),e.removeBackdrop(qe.canvas),ye();let o=f.name;f=t,document.title=f.name==="home"?"The Light Orb":`${_[f.name]??f.name} \xB7 The Light Orb`,n.className=`lo r-${f.name}`,document.body.dataset.route=f.name,Ma(),f.name==="studio"&&o!=="studio"&&de("studio_open"),d.querySelectorAll("[data-nav]").forEach(C=>C.toggleAttribute("aria-current",C.dataset.nav===f.name||C.dataset.nav==="account"&&["account","signin","signup"].includes(f.name))),o&&o!==f.name&&a.state.kind&&a.stop(),({home:Te,products:f.id?ct:Mt,templates:f.id?vr:xr,studio:wr,sound:xa,membership:()=>rr(n,we),account:()=>ht(n,we,f.id),signin:()=>da(n,we,"in"),signup:()=>da(n,we,"up"),privacy:()=>Dt(n,we,"privacy"),terms:()=>Dt(n,we,"terms"),licence:()=>Dt(n,we,"licence")}[f.name]??Te)(),tr(n);let l=lt.get(`lo:scroll:${location.hash}`,null);n.scrollTop=l??0;let u=location.hash,b=J,v=Ne;J=null,Ne=void 0,te&&(te.abort(),te=null),setTimeout(()=>{location.hash===u&&(b?(xt(b.text),ze=performance.now()/1e3,a.say(b.text,{id:b.id,lang:b.lang})):$())},450),o&&n.focus({preventScroll:!0})}n.addEventListener("scroll",()=>lt.set(`lo:scroll:${location.hash}`,n.scrollTop),{passive:!0});let j=0,X=0,Be=!1;n.addEventListener("scroll",()=>{if(f.name!=="home"||Be){j=n.scrollTop;return}let t=n.scrollTop>j;j=n.scrollTop,clearTimeout(X),X=setTimeout(()=>{let o=innerHeight,h=n.scrollTop/o,l=n.querySelector("#select")?.offsetTop??0,u=n.querySelector(".qt");if(!u||!l)return;let b=(u.offsetTop+u.offsetHeight-o)/o;h<=b+.02||n.scrollTop>=l-4||(Be=!0,n.scrollTo({top:t?l:u.offsetTop+u.offsetHeight-o,behavior:i?"auto":"smooth"}),setTimeout(()=>{Be=!1,j=n.scrollTop},i?50:900))},90)},{passive:!0}),addEventListener("hashchange",ce),d.querySelector("[data-home]").addEventListener("click",t=>{t.preventDefault(),lt.set("lo:scroll:#/",0),f.name==="home"?n.scrollTo({top:0,behavior:i?"auto":"smooth"}):location.hash="#/"});let we={page:n,audio:a,ICON:K,esc:F,store:xe,go:t=>{location.hash=t},flash:xt,api:e,product:p,footer:()=>H()},Y=lt.get("lo:sel",0),he=[],Fe=new URLSearchParams(location.search).get("sel");Fe&&lt.set("lo:selv",Fe);let oe=lt.get("lo:selv","arc")==="grid";function Te(){if(n.innerHTML=`
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
      <section class="sel${oe?" sel-grid":""}" id="select" aria-labelledby="sel-t">
        <h2 id="sel-t" class="sel-t">Where would you like to begin?</h2>
        ${oe?`<nav class="dg" aria-label="Destinations">${ue.map((t,o)=>`<a class="dg-c" href="${t.route}" data-c="${o}">${Le(t)}<span class="dg-t">${t.label}</span><span class="dg-s">${t.line}</span></a>`).join("")}</nav>`:`<div class="arc" data-arc role="group" aria-roledescription="carousel" aria-label="Destinations">
          ${ue.map((t,o)=>`<a class="arc-c" href="${t.route}" data-c="${o}" aria-label="${t.label}: ${t.line}">${Le(t,"arc-img")}<span class="arc-l">${t.label}</span><span class="arc-s">${t.line}</span></a>`).join("")}
        </div>
        <div class="arc-ctl"><button class="gb gc small" type="button" data-step="-1" aria-label="Previous">${K.prev}</button>
          <div class="segbar" role="tablist" aria-label="Choose destination">${ue.map((t,o)=>`<button class="pill" role="tab" type="button" data-dot="${o}">${t.label}</button>`).join("")}</div>
          <button class="gb gc small" type="button" data-step="1" aria-label="Next">${K.next}</button></div>`}
      </section>
      ${H()}`,he=[...n.querySelectorAll("[data-c]")],n.querySelector("[data-go]").addEventListener("click",t=>{t.preventDefault(),a.sfx("select"),n.scrollTo({top:n.scrollTop+n.querySelector("#sel-t").getBoundingClientRect().top-110,behavior:i?"auto":"smooth"})}),n.querySelector("[data-enable]").addEventListener("click",()=>{de("sound_enable"),a.set({master:!0}),a.sfx("confirm"),$()}),oe)he.forEach((t,o)=>{t.addEventListener("pointerenter",()=>pe(o)),t.addEventListener("focus",()=>pe(o)),t.addEventListener("click",()=>{a.sfx("open"),de("destination",{id:ue[o].id})})}),Ce(!0);else{n.querySelectorAll("[data-step]").forEach(o=>o.addEventListener("click",()=>pe(Y+ +o.dataset.step))),n.querySelectorAll("[data-dot]").forEach(o=>o.addEventListener("click",()=>pe(+o.dataset.dot))),he.forEach((o,h)=>o.addEventListener("click",l=>{if(L){l.preventDefault();return}h!==Y?(l.preventDefault(),pe(h)):(a.sfx("open"),de("destination",{id:ue[h].id}))}));let t=n.querySelector("[data-arc]");t.addEventListener("keydown",o=>{o.key==="ArrowRight"&&(pe(Y+1),o.preventDefault()),o.key==="ArrowLeft"&&(pe(Y-1),o.preventDefault())}),D(t,o=>pe(Y+o),()=>Ce()),Ce(!0)}n.querySelector("[data-welcopy]").classList.add(i?"shown":"reveal"),T()}function Ze(t){let o=String(ue.indexOf(t)+1).padStart(2,"0");return`<span class="arc-img cv cv-${t.id}"><span class="cv-grain"></span><span class="cv-n">${o}</span><span class="cv-t">${t.label}</span></span>`}function Le(t,o=""){let h={products:'<img src="./media/cards/products.jpg" alt="" loading="lazy">',templates:'<span class="dg-win"><img src="./media/templates/the-light-orb.cover.jpg" alt="" loading="lazy"></span>',studio:'<img src="./media/cards/orb-dark.jpg" alt="" loading="lazy">',sound:`<span class="cv-wave">${[.3,.55,.8,.45,.95,.6,.35,.7,.5,.85,.4,.65,.3,.5].map(l=>`<i style="--h:${l}"></i>`).join("")}</span>`}[t.id];return`<span class="dg-img dg-${t.id} ${o}">${h}</span>`}function pe(t,o=!0){let h=Ue(t,0,ue.length-1);h!==Y&&(Y=h,lt.set("lo:sel",Y),o&&a.sfx("detent"),r.nudge?.(.5)),Ce()}function Ce(t){if(oe){he.forEach((l,u)=>l.classList.toggle("on",u===Y));return}let o=he[0]?.offsetWidth||300,h=o*.7;he.forEach((l,u)=>{let b=u-Y+g/(h*1.2),v=Math.abs(b);l.style.transition=t||A?"none":"",l.style.transform=`translateX(${b*h}px) translateZ(${-v*150}px) rotateY(${Ue(-b*30,-48,48)}deg) scale(${1-Math.min(v,2)*.1})`,l.style.zIndex=String(10-Math.round(v)),l.classList.toggle("on",u===Y),l.tabIndex=u===Y?0:-1,l.setAttribute("aria-current",u===Y?"true":"false")}),n.querySelectorAll("[data-dot]").forEach((l,u)=>l.setAttribute("aria-selected",String(u===Y))),n.querySelectorAll("[data-step]").forEach(l=>{l.disabled=+l.dataset.step<0&&Y===0||+l.dataset.step>0&&Y===ue.length-1})}let g=0,A=!1,L=!1;function D(t,o,h){let l=0,u=0,b=null,v=null;t.addEventListener("pointerdown",w=>{w.button||(l=w.clientX,u=w.clientY,b=w.pointerId,v=null,L=!1)}),t.addEventListener("pointermove",w=>{if(w.pointerId!==b)return;let S=w.clientX-l,O=w.clientY-u;!v&&Math.hypot(S,O)>8&&(v=Math.abs(S)>Math.abs(O)*1.2?"x":"y",v==="x"&&(t.setPointerCapture(b),A=!0)),v==="x"&&(g=S,L=!0,h())});let C=w=>{if(w.pointerId===b){if(b=null,A=!1,v==="x"){let S=g<-60?1:g>60?-1:0;g=0,o(S),h(),setTimeout(()=>{L=!1},0)}v=null}};t.addEventListener("pointerup",C),t.addEventListener("pointercancel",C),t.addEventListener("dragstart",w=>w.preventDefault());let I=0,y=0;t.addEventListener("wheel",w=>{if(Math.abs(w.deltaX)<=Math.abs(w.deltaY))return;w.preventDefault();let S=performance.now();S<y||(I+=w.deltaX,Math.abs(I)>60&&(o(Math.sign(I)),I=0,y=S+380))},{passive:!1})}function H(){return`<footer class="ft"><a href="#/" class="wm small" aria-label="The Light Orb \u2014 Home">${ca}</a>
      <nav aria-label="Footer"><a href="#/membership">Membership</a><a href="#/account">Account</a><a href="intro.html">Replay intro</a></nav>
      <nav aria-label="Legal"><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a><a href="#/licence">Licence</a></nav>
      <span class="ft-n">Purchasing and membership open soon.</span>
      ${f.name==="membership"?"":jt("footer",{compact:!0})}</footer>`}let U=0,Q={"orb-slider":[{id:"light",name:"Light",line:"Clear glass on a light page."},{id:"dark",name:"Dark",line:"Smoked glass for dark pages.",cls:"v-dark"},{id:"frost",name:"Frost",line:"Frosted white glass, softer and brighter.",cls:"v-frost"},{id:"compact",name:"Compact",line:"A slimmer capsule for tight layouts.",cls:"v-compact"}],"orb-wave":[{id:"gentle",name:"Gentle",line:"Wide, soft ripples.",p:{strength:.6,scale:110}},{id:"classic",name:"Classic",line:"The ripple from the intro.",p:{strength:1,scale:70}},{id:"deep",name:"Deep",line:"Tight, strong rings.",p:{strength:1.6,scale:45}},{id:"rain",name:"Rain",line:"Many small, quick rings, like drops on water.",p:{strength:.5,scale:28}}],"background-pack":[{id:"classic",name:"Classic",line:"The horizon as in the intro.",p:{horizon:.3,lamp:.9}},{id:"wide",name:"Wide floor",line:"A low horizon and more floor.",p:{horizon:.18,lamp:.9}},{id:"high",name:"High horizon",line:"A high horizon and more sky.",p:{horizon:.45,lamp:.9}},{id:"lantern",name:"Lantern",line:"A brighter lamp around the Orb in the dark world.",p:{horizon:.3,lamp:1.6}}],"crystal-controls":[{id:"light",name:"Light",line:"Clear glass for light pages."},{id:"dark",name:"Dark",line:"Smoked glass for dark pages.",cls:"v-dark"},{id:"frost",name:"Frost",line:"Frosted white glass with softer edges.",cls:"v-frost"},{id:"compact",name:"Compact",line:"Smaller controls for dense interfaces.",cls:"v-compact"}]},ke={"orb-slider":'<span class="mini-cap"><span class="cap-l">slide to enter</span><i class="mini-orb"></i></span>',"crystal-controls":'<span class="mini-kit"><span class="gb primary small">Continue</span><span class="gb small">Secondary</span><span class="gsw" aria-checked="true"></span><span class="gi">Your name</span></span>'},me=[...Tt.map(t=>({id:`orb-${t.id}`,fam:"orb",variant:t.id,sphere:t.id,ext:".orb",name:t.id==="clear"?"The Orb":`The Orb \xB7 ${t.name}`,kind:t.line,href:`#/products/orb${t.id==="clear"?"":`?variant=${t.id}`}`})),...Me.filter(t=>t.id!=="orb").flatMap(t=>Q[t.id].map((o,h)=>({id:h?`${t.id}-${o.id}`:t.id,fam:t.id,variant:h?o.id:null,ext:".kit",name:`${t.name} \xB7 ${o.name}`,kind:o.line,mini:ke[t.id],cls:o.cls,img:ke[t.id]?null:`./media/products/${t.id}.jpg`,pos:t.id==="background-pack"?`50% ${Math.round(30+(o.p.horizon-.3)*160)}%`:null,href:`#/products/${t.id}${h?`?variant=${o.id}`:""}`})))],re=(t,o="")=>`<button class="gb small ${o}" type="button" data-cart="${t.id}" aria-pressed="${$e.has(t.id)}">${K.bag}<span>${$e.has(t.id)?"In cart":"Add to cart"}</span></button>`;function et(t){t.querySelectorAll("[data-cart]").forEach(o=>o.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation();let l=me.find(b=>b.id===o.dataset.cart)||Sr().find(b=>b.id===o.dataset.cart),u=$e.toggle({id:l.id,name:l.name,href:l.href||"#/sound"});u&&de("add_to_cart",{item:l.id}),o.setAttribute("aria-pressed",String(u)),o.querySelector("span").textContent=u?"In cart":"Add to cart",a.sfx(u?"confirm":"select")}))}let Pe=(t,o,h)=>`<button class="gb small" type="button" data-fsave="${t}|${o}" data-name="${F(h)}" aria-pressed="${xe.isSaved(t,o)}">${K.heart}<span>${xe.isSaved(t,o)?"Saved":"Save"}</span></button>`;function nt(t,o){t.querySelectorAll("[data-fsave]").forEach(h=>h.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation();let[u,b]=h.dataset.fsave.split("|"),v=xe.toggleSaved(u,b,h.dataset.name,o(u,b));v&&de("save",{kind:u,item:b}),h.setAttribute("aria-pressed",String(v)),h.querySelector("span").textContent=v?"Saved":"Save",a.sfx(v?"confirm":"select")}))}function Mt(){let t=o=>`<article class="file glass" data-href="${o.href}">
        <div class="file-v ${o.cls??""}"${o.sphere?` data-sphere="${o.sphere}"`:""}>${o.img?`<img src="${o.img}" alt="" draggable="false" loading="lazy"${o.pos?` style="object-position:${o.pos}"`:""}>`:""}${o.mini??""}<span class="file-ext">${o.ext}</span></div>
        <div class="file-m"><h3><a class="file-link" href="${o.href}">${F(o.name)}</a></h3><p>${F(o.kind)}</p><p class="file-p">Price soon</p></div>
        <div class="file-a">${re(o)}${Pe("product",o.id,o.name)}<a class="gb small primary" href="#/studio?family=${o.fam}${o.variant?`&preset=${o.variant}`:""}">Go to Studio</a></div></article>`;n.innerHTML=`
      <section class="dest shop">
        <header class="dh"><h1>Products</h1></header>
        <div class="file-grid">${me.map(t).join("")}</div>
      </section>${H()}`,et(n),nt(n,(o,h)=>me.find(l=>l.id===h)?.href??"#/products"),n.querySelectorAll(".file[data-href]").forEach(o=>o.addEventListener("click",h=>{h.defaultPrevented||h.target.closest("button, a")||(a.sfx("open"),location.hash=o.dataset.href)})),n.querySelectorAll("[data-sphere]").forEach(o=>{let h=ua(o,o.dataset.sphere,{reduced:i});z.push(()=>h.dispose())})}function ct(){let t=Jt(f.id);if(!t){location.replace("#/products");return}let o=t.id==="orb"?Tt:Q[t.id],h=o.some(v=>v.id===f.query.variant)?f.query.variant:o[0].id,l=v=>o.find(C=>C.id===v),u=v=>t.id==="orb"?`orb-${v}`:v===o[0].id?t.id:`${t.id}-${v}`;n.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/products">${K.back}<span>Products</span></a>
        <div class="pd-grid">
          <div class="pd-stage glass" data-stage>${mr(t.id)}</div>
          <div class="pd-info">
            <p class="kicker">${F(t.id==="orb"?"Sphere":t.kind)}</p><h1>${F(t.name)}</h1>
            <p class="lede">${F(Nt[t.id].lede)}</p>
            ${o?`<div class="vars"><p class="lbl">Version</p><div class="segbar" role="radiogroup" aria-label="Version">${o.map(v=>`<button class="pill" role="radio" type="button" data-variant="${v.id}" aria-checked="${v.id===h}">${v.name}</button>`).join("")}</div><p class="var-line" data-vline></p></div>`:""}
            <p class="price" data-price>Price soon</p>
            <div class="acts eq">${re({id:u(h)},"primary")}${Pe("product",u(h),t.name)}</div>
            ${t.id==="orb"?fr():""}
            <a class="studio-lock" href="#/studio">${K.lock}<span><b>Customise in Studio</b><small>For members</small></span></a>
            <dl class="facts"><dt>What it does</dt><dd>${F(Nt[t.id].does)}</dd><dt>You receive</dt><dd>${t.receives.map(F).join(" \xB7 ")}</dd></dl>
            <details class="acc"><summary>Compatibility and installation</summary><p>${F(Nt[t.id].tech)}</p></details>
          </div>
        </div>
      </section>${H()}`,et(n),nt(n,(v,C)=>`#/products/${t.id}`),br(t.id,n.querySelector("[data-stage]"),h),de("product_open",{product:t.id,variant:h});let b=v=>{be.sphere?.setKind(v);let C=l(v),I=n.querySelector("[data-stage]");t.id!=="orb"&&(I.classList.remove("v-dark","v-frost","v-compact"),C.cls&&I.classList.add(C.cls),C.p&&qe.set(C.p)),n.querySelectorAll("[data-variant]").forEach(P=>P.setAttribute("aria-checked",String(P.dataset.variant===v)));let y=n.querySelector("[data-vline]");if(y&&(y.textContent=l(v).line),t.id==="orb"){let P=v==="clear";n.querySelector("[data-price]").textContent=P?"Free \u2014 Original version":"Price soon",n.querySelector("[data-free]").hidden=!P}let w=n.querySelector("[data-cart]");w.dataset.cart=u(v);let S=$e.has(w.dataset.cart);w.setAttribute("aria-pressed",String(S)),w.querySelector("span").textContent=S?"In cart":"Add to cart";let O=n.querySelector("[data-fsave]");O.dataset.fsave=`product|${u(v)}`;let Z=xe.isSaved("product",u(v));O.setAttribute("aria-pressed",String(Z)),O.querySelector("span").textContent=Z?"Saved":"Save",history.replaceState(null,"",`#/products/${t.id}${v===o[0].id?"":`?variant=${v}`}`)};hr(n),n.querySelectorAll("[data-variant]").forEach(v=>v.addEventListener("click",()=>{b(v.dataset.variant),a.sfx("select"),de("variant",{product:t.id,variant:v.dataset.variant})})),b(h)}let ma=`<div data-light-orb style="width:320px;height:320px"></div>
<script type="module" src="https://carlatres3.github.io/light-orb/embed/v1/orb.js"><\/script>`;function fr(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${K.check}<span>Get the code \u2014 free</span></button>
      <div class="free-p" id="free-code" hidden><p class="note">Paste this where the Orb should appear. It fills the box you give it; drag to turn it, tap to stir it.</p>
        <pre class="free-c glass"><code>${F(ma)}</code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function hr(t){let o=t.querySelector("[data-freebtn]");if(!o)return;let h=t.querySelector("#free-code"),l=t.querySelector("[data-copy]");o.addEventListener("click",()=>{let u=h.hidden;h.hidden=!u,o.setAttribute("aria-expanded",String(u)),a.sfx(u?"open":"select"),u&&de("free_code_open",{product:"orb"})}),l.addEventListener("click",async()=>{let u=!1;try{await navigator.clipboard.writeText(ma),u=!0}catch{let b=document.createRange();b.selectNodeContents(t.querySelector(".free-c code"));let v=getSelection();v.removeAllRanges(),v.addRange(b)}l.querySelector("span").textContent=u?"Copied":"Selected \u2014 press Copy",u&&(a.sfx("select"),de("free_code_copy",{product:"orb"})),setTimeout(()=>{l.isConnected&&(l.querySelector("span").textContent="Copy code")},2200)})}let Nt={orb:{lede:"A 3D sphere you can place in your own work. Choose the material and what it holds inside.",does:"Drag to turn it; it keeps turning slowly on its own. A tap makes whatever is in it move a little faster. Twenty versions: clear glass, liquid metal, porcelain, bloom, and glass holding a light, points of light, glitter or beads.",tech:"An ES module built on Three.js r186 (WebGL 2). Works in current Chrome, Safari, Edge and Firefox. The integration notes explain how to place it in a page and choose a version."},"orb-slider":{lede:"A clear glass capsule whose thumb is the Orb itself. Slide it to enter.",does:"A slide-to-confirm control: the Orb travels along the track and settles at either end. It also works with the arrow keys.",tech:"Component source with the Orb as its thumb. Needs WebGL 2 for the Orb."},"orb-wave":{lede:"The ripple the Orb leaves on the floor when it lands, drawn in light.",does:"Each touch raises a wave that spreads across the surface and fades.",tech:"A full-screen shader with an impact API: position, strength and scale. Needs WebGL 2."},"background-pack":{lede:"Two environments in one pack: a dark world and a light one, and the change between them.",does:"Moves smoothly from dark to light, controlled by a single exposure value.",tech:"A full-screen shader with exposure, horizon and lamp controls. Needs WebGL 2."},"crystal-controls":{lede:"Buttons, switches, fields and sliders in clear glass, with every state designed.",does:"Each control has default, hover, focus, pressed, selected, disabled and loading states, on light and dark backgrounds.",tech:"Plain CSS components. No framework needed."}};function mr(t){return t==="orb"?'<div class="pd-sph" data-sph></div><span class="pd-hint">Drag to turn it. Tap to stir it.</span>':t==="orb-slider"?'<div class="cap" data-cap role="slider" tabindex="0" aria-label="Slide to enter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="cap-l">slide to enter</span></div>':t==="orb-wave"?'<button class="gb small pd-btn" type="button" data-drop>Drop the Orb</button><span class="pd-hint">Or tap the floor.</span>':t==="background-pack"?'<div class="segbar pd-seg" role="radiogroup" aria-label="Environment"><button class="pill" role="radio" type="button" data-env="0" aria-checked="false">Dark world</button><button class="pill" role="radio" type="button" data-env="1" aria-checked="true">Light</button></div>':`<div class="kit"><button class="gb primary" type="button">Continue</button><button class="gb" type="button">Secondary</button><button class="gb gc" type="button" aria-label="Confirm">${K.check}</button>
      <button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><input class="gi" placeholder="Your name" aria-label="Example field">
      <input class="grange" type="range" value="60" aria-label="Example slider" style="--p:60%"><button class="gb" type="button" disabled>Disabled</button><button class="gb" type="button" aria-busy="true">Loading</button></div>`}let be=null;function br(t,o,h="clear"){if(be={id:t,el:o,cap:0,drop:null},t!=="crystal-controls"&&t!=="orb"&&p.show(st(Kt("original").config)),t==="orb"&&(be.sphere=ua(o.querySelector("[data-sph]"),h,{reduced:i}),z.push(()=>be?.sphere?.dispose())),t==="orb-slider"){let l=o.querySelector("[data-cap]"),u=null,b=C=>{be.cap=Ue(C),l.setAttribute("aria-valuenow",Math.round(be.cap*100))};l.addEventListener("pointerdown",C=>{u={x:C.clientX,v:be.cap},l.setPointerCapture(C.pointerId),a.sfx("select")}),l.addEventListener("pointermove",C=>{u&&b(u.v+(C.clientX-u.x)/(l.offsetWidth-l.offsetHeight))});let v=()=>{u&&(u=null,p.orb?.nudge(.5),be.cap>.9?(b(1),a.sfx("confirm")):(b(0),a.sfx("select")))};l.addEventListener("pointerup",v),l.addEventListener("pointercancel",v),l.addEventListener("keydown",C=>{C.key==="ArrowRight"&&b(be.cap+.1),C.key==="ArrowLeft"&&b(be.cap-.1),C.key==="End"&&b(1),C.key==="Home"&&b(0)})}if((t==="orb-wave"||t==="background-pack")&&(ra(o),e.addBackdrop(qe.canvas),qe.set({horizon:.3,strength:1,scale:70}),qe.setExposure(t==="background-pack"?1:0,!0),t==="orb-wave"&&(o.addEventListener("pointerdown",l=>{if(l.target.closest("button"))return;let u=o.getBoundingClientRect(),b=l.clientY-u.top;b>u.height*.55&&(qe.impact(l.clientX-u.left,b),p.orb?.nudge(.7),a.sfx("detent"))}),o.querySelector("[data-drop]").addEventListener("click",()=>{be.drop={vy:0,y:null,contacts:0},a.sfx("select")})),t==="background-pack"&&o.querySelectorAll("[data-env]").forEach(l=>l.addEventListener("click",()=>{qe.setExposure(+l.dataset.env),a.sfx("open"),o.querySelectorAll("[data-env]").forEach(u=>u.setAttribute("aria-checked",String(u===l)))}))),t==="crystal-controls"){o.querySelectorAll(".gb:not([disabled])").forEach(u=>u.addEventListener("click",()=>a.sfx("select"))),o.querySelector(".gsw").addEventListener("click",u=>{let b=u.currentTarget;b.setAttribute("aria-checked",String(b.getAttribute("aria-checked")!=="true")),a.sfx("select")}),o.querySelector(".gi").addEventListener("input",u=>{u.isTrusted&&a.sfx("type")});let l=o.querySelector(".grange");l.addEventListener("input",()=>{l.style.setProperty("--p",`${l.value}%`),a.sfx("level",l.value/100)})}}let ba=2;function xr(){let t=Ee.length+ba;n.innerHTML=`
      <section class="dest tpl">
        <header class="dh"><h1>Complete compositions</h1></header>
        <div class="folder" data-folder>
          <div class="folder-tab glass"><span>Templates</span><small>${Ee.length} ${Ee.length===1?"composition":"compositions"}</small></div>
          <div class="folder-body glass"><span class="folder-glow" aria-hidden="true"></span><span class="folder-num" data-fnum aria-hidden="true"></span>
            <div class="folder-track" data-track role="listbox" aria-label="Templates" tabindex="0">
              ${Ee.map((w,S)=>`<button class="tcard glass" type="button" role="option" data-t="${S}" aria-label="Open ${F(w.name)}">
                <span class="tcard-n">${String(S+1).padStart(2,"0")}</span>
                <span class="tcard-cv"><img src="${w.cover.src}" alt="" draggable="false"></span>
                <span class="tcard-t">${F(w.name)}</span><span class="tcard-l">${F(w.line)}</span></button>`).join("")}
              ${Array.from({length:ba},(w,S)=>`<div class="tcard glass soon" aria-hidden="true"><span class="tcard-n">${String(Ee.length+S+1).padStart(2,"0")}</span><span class="tcard-cv"><span class="soon-orb"></span><span class="soon-lbl">In the making</span></span><span class="tcard-t">Next composition</span><span class="tcard-l">Joining the collection soon.</span></div>`).join("")}
            </div>
            <div class="folder-open" data-open hidden></div>
            <div class="folder-ctl" data-fctl><button class="gb gc small" type="button" data-fstep="-1" aria-label="Previous">${K.prev}</button><span class="count" data-fcount></span><button class="gb gc small" type="button" data-fstep="1" aria-label="Next">${K.next}</button></div>
          </div>
        </div>
      </section>${H()}`;let o=n.querySelector("[data-track]"),h=[...o.children],l=n.querySelector("[data-open]"),u=n.querySelector("[data-fctl]"),b=0,v=w=>{h.forEach((S,O)=>{let Z=O-b+g/340,P=Math.abs(Z);S.style.transition=w||A?"none":"",S.style.transform=`translateX(calc(-50% + ${Z*96}%)) translateZ(${-P*120}px) rotateY(${Ue(-Z*18,-30,30)}deg) scale(${1-Math.min(P,2)*.08})`,S.style.zIndex=String(10-Math.round(P)),S.style.opacity=String(P>2.2?0:1-P*.22),S.classList.toggle("on",O===b),S.tagName==="BUTTON"&&S.setAttribute("aria-selected",String(O===b))}),n.querySelector("[data-fnum]").textContent=String(b+1).padStart(2,"0"),n.querySelector("[data-fcount]").textContent=`${String(b+1).padStart(2,"0")} / ${String(t).padStart(2,"0")}`,n.querySelectorAll("[data-fstep]").forEach(S=>{S.disabled=+S.dataset.fstep<0&&b===0||+S.dataset.fstep>0&&b===t-1})},C=w=>{let S=Ue(b+w,0,t-1);S!==b&&(b=S,a.sfx("detent")),v()};n.querySelectorAll("[data-fstep]").forEach(w=>w.addEventListener("click",()=>C(+w.dataset.fstep))),o.addEventListener("keydown",w=>{w.key==="ArrowRight"&&(C(1),w.preventDefault()),w.key==="ArrowLeft"&&(C(-1),w.preventDefault())}),D(o,C,()=>v());let I=w=>{let S=Ee[w],O={id:`template-${S.id}`,name:S.name,href:`#/templates/${S.id}`};me.some(Z=>Z.id===O.id)||me.push(O),l.innerHTML=`<button class="tl folder-back" type="button" data-close>${K.back}<span>All templates</span></button>
        <div class="fo-grid"><figure class="fo-cv glass"><img src="${S.cover.src}" alt="The beginning of the ${F(S.name)} template." width="1600" height="1000"></figure>
          <div class="fo-info"><p class="kicker">${String(w+1).padStart(2,"0")} \xB7 Template</p><h2>${F(S.name)}</h2><p>${F(S.line)}</p>
            <ul class="fo-inc">${S.includes.map(Z=>`<li>${F(Z)}</li>`).join("")}</ul><p class="price">Price soon</p>
            <div class="acts eq"><a class="gb small primary" href="#/templates/${S.id}">Open template</a>${re(O)}${Pe("template",S.id,S.name)}</div></div></div>`,et(l),nt(l,(Z,P)=>`#/templates/${P}`),l.querySelector("[data-close]").addEventListener("click",y),o.hidden=!0,u.hidden=!0,l.hidden=!1,l.classList.remove("in"),l.offsetWidth,l.classList.add("in"),a.sfx("open"),l.querySelector("[data-close]").focus({preventScroll:!0})},y=()=>{l.hidden=!0,o.hidden=!1,u.hidden=!1,v(!0),a.sfx("close"),o.focus({preventScroll:!0})};h.forEach((w,S)=>w.tagName==="BUTTON"&&w.addEventListener("click",O=>{if(L){O.preventDefault();return}S!==b?(b=S,v(),a.sfx("detent")):I(S)})),v(!0)}function vr(){let t=Ee.find(o=>o.id===f.id);if(!t){location.replace("#/templates");return}n.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/templates">${K.back}<span>Templates</span></a>
        <div class="pd-grid">
          <figure class="pd-stage cover-big"><img src="${t.cover.src}" alt="The beginning of the ${F(t.name)} template." width="1600" height="1000"></figure>
          <div class="pd-info"><p class="kicker">Template</p><h1>${F(t.name)}</h1><p class="lede">${F(t.line)}</p>
            <div class="acts"><a class="gb primary" href="#/">View it live</a></div>
            <p class="note">Purchase opens soon.</p>
            <dl class="facts"><dt>Includes</dt><dd>${t.includes.map(F).join(" \xB7 ")}</dd></dl>
            <p class="note" data-covermeta></p></div>
        </div>
      </section>${H()}`,fetch(t.cover.meta).then(o=>o.json()).then(o=>{let h=n.querySelector("[data-covermeta]");h&&(h.textContent=`Preview: a capture of this website, ${o.captured}.`)}).catch(()=>{})}function xa(){let t=a.prefs.voice,o=[...wt.map(y=>({group:"voices",key:`voice_audition.${y.id}`,clip:"voice_audition",voice:y.id,title:y.name,sub:`${y.locale} \xB7 the same line in each voice`,use:y.id})),...["home","products","templates","studio","sound"].map(y=>({group:"guide",key:`${y}.${t}`,clip:y,voice:t,title:y==="home"?"Welcome":y[0].toUpperCase()+y.slice(1),sub:Qt[y]})),...ea.map(y=>({group:"sfx",key:`sfx.${y.id}`,url:y.file,title:y.name,sub:y.line}))],h=(y,w,S)=>`<section class="sg"><header><h2>${w}</h2><p>${S}</p></header><div class="sgrid">${o.filter(O=>O.group===y).map(O=>`
      <article class="si glass"><button class="si-play gb gc small" type="button" data-play="${O.key}" aria-label="Play ${F(O.title)}">${K.play}</button>
        <div class="si-t"><h3>${F(O.title)}<span class="file-ext">.m4a</span></h3><p>${F(O.sub)}</p></div>
        <div class="si-w" data-wave="${O.key}" role="slider" tabindex="0" aria-label="Position in ${F(O.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><canvas></canvas></div>
        <div class="si-m"><span class="si-d" data-dur="${O.key}">\u2013:\u2013\u2013</span></div>
        <div class="si-x eq">${O.use?`<button class="gb small" type="button" data-use="${O.use}" aria-pressed="${t===O.use}"><span>${t===O.use?"In use":"Use voice"}</span></button>`:""}${O.group!=="guide"?re({id:`sound-${O.key}`}):""}${Pe("sound",O.key,O.title)}</div></article>`).join("")}</div></section>`;n.innerHTML=`
      <section class="dest snd-dest">
        <header class="dh"><h1>Voices and sounds</h1></header>
        ${h("voices","Voices","Compare them on the same line.")}
        ${h("guide","Guide narration","What the guide says on each page, in the selected voice.")}
        ${h("sfx","Interface sounds","Short, quiet sounds for touch, panels and wheels.")}
      </section>${H()}`,n.querySelectorAll(".si").forEach(y=>{y.querySelector('[data-play^="sfx."]')&&(y.querySelector(".file-ext").textContent=".wav")}),nt(n,()=>"#/sound");let l=new Map,u=(y,w)=>{let S=n.querySelector(`[data-dur="${CSS.escape(y)}"]`);S&&(S.textContent=w)};for(let y of o)(y.url?a.peaksUrl(y.url,80):a.peaks(y.clip,y.voice,80)).then(w=>{l.set(y.key,w),u(y.key,yr(w.duration))}).catch(()=>u(y.key,"Unavailable"));ya=o;let b=y=>y.url?y.key:`${y.clip}.${y.voice}`;et(n);let v=(y,w=0)=>(a.prefs.master||a.set({master:!0}),y.url?a.playUrl(y.key,y.url,{from:w}):a.play(y.clip,{voice:y.voice,kind:"audition",from:w}));n.querySelectorAll("[data-play]").forEach(y=>y.addEventListener("click",()=>{let w=o.find(O=>O.key===y.dataset.play),S=b(w);a.state.clip===S&&a.playing?a.pause():a.state.clip===S&&a.state.status==="paused"?a.resume():v(w)})),n.querySelectorAll("[data-wave]").forEach(y=>{let w=o.find(P=>P.key===y.dataset.wave),S=b(w),O=!1,Z=P=>{let Ie=y.getBoundingClientRect();return Ue((P.clientX-Ie.left)/Ie.width)};y.addEventListener("pointerdown",async P=>{O=!0,y.setPointerCapture(P.pointerId);let Ie=Z(P);a.state.clip!==S&&await v(w),a.seek(Ie)}),y.addEventListener("pointermove",P=>{O&&a.state.clip===S&&a.seek(Z(P))}),y.addEventListener("pointerup",()=>{O=!1}),y.addEventListener("keydown",P=>{a.state.clip!==S||!a.duration||(P.key==="ArrowRight"&&a.seek(a.position+1/a.duration),P.key==="ArrowLeft"&&a.seek(a.position-1/a.duration))})}),n.querySelectorAll("[data-use]").forEach(y=>y.addEventListener("click",()=>{a.stop(),a.set({voice:y.dataset.use}),a.sfx("confirm"),xa()}));let C=0,I=()=>{C=requestAnimationFrame(I);for(let y of n.querySelectorAll("[data-wave]")){let w=o.find(at=>at.key===y.dataset.wave),S=b(w),O=l.get(w.key),Z=y.firstElementChild,P=y.getBoundingClientRect();if(P.bottom<0||P.top>innerHeight)continue;let Ie=a.state.clip===S,pt=Ie?a.position:0,vt=Ie?a.state.energy:0,tt=Ie&&a.playing;y.setAttribute("aria-valuenow",Math.round(pt*100));let _e=n.querySelector(`[data-play="${CSS.escape(w.key)}"]`);if(_e&&_e.dataset.on!==String(tt)&&(_e.dataset.on=String(tt),_e.innerHTML=tt?K.pause:K.play,_e.setAttribute("aria-label",`${tt?"Pause":"Play"} ${w.title}`)),!O)continue;let Se=Math.min(devicePixelRatio||1,2);Z.width!==Math.round(P.width*Se)&&(Z.width=Math.round(P.width*Se),Z.height=Math.round(P.height*Se));let Ge=Z.getContext("2d");Ge.setTransform(Se,0,0,Se,0,0),Ge.clearRect(0,0,P.width,P.height);let je=O.bins.length,At=2,it=(P.width-At*(je-1))/je,Cr=P.height/2;for(let at=0;at<je;at++){let wa=(at+.5)/je<=pt,Mr=wa&&Math.abs((at+.5)/je-pt)<2.5/je?vt:0,ka=Math.max(2,(O.bins[at]*.9+Mr*.2)*(P.height-4));Ge.fillStyle=wa?"#262827":"rgba(38,40,39,.2)",Ge.beginPath(),Ge.roundRect(at*(it+At),Cr-ka/2,it,ka,it/2),Ge.fill()}}};I(),z.push(()=>cancelAnimationFrame(C))}let yr=t=>`${Math.floor(t/60)}:${String(Math.round(t%60)).padStart(2,"0")}`;function wr(){q&&(q.leave(),q=null),n.innerHTML=`
      <section class="st-lock">
        <div class="lock-blur" aria-hidden="true"><i class="lb-bar"></i><i class="lb-sph"></i><i class="lb-ins"></i></div>
        <div class="lock-card glass dark">
          <span class="lock-i">${K.lock}</span>
          <p class="kicker">Studio</p><h1>For members</h1>
          <p>Shape the sphere: its material, its colour and what moves inside it. Studio opens with membership.</p>
          <div class="acts eq"><a class="gb small primary" href="#/membership">See membership</a><a class="gb small" href="#/products">Browse products</a></div>
        </div>
      </section>`}let Ht=0;function xt(t){R.textContent=t,R.classList.add("on"),clearTimeout(Ht),Ht=setTimeout(()=>{R.classList.remove("on"),T()},Math.max(3200,t.length*70))}function kr(t,o,{W:h,H:l}){let u=a.energy(),b=a.playing&&(a.state.kind==="guide"||a.state.kind==="audition"&&f.name==="sound");r.setSpeech(b&&!Bt()?u*(i?.35:.9):0),E+=((b&&!Bt()||te?1:0)-E)*Math.min(1,o*(b?4:1.2));{let I=t-ze,y=I<0?0:I<3.5?Xe(I/.4):1-Xe((I-3.5)/1.6);r.setRibbon?.(Math.max(y,E))}p.orb?.setSpeech(a.playing&&a.state.kind==="audition"&&Bt()?u*(i?.35:1):0);let v=h<700,C;if(q?(C=q.frame(t,o,{W:h,H:l}),p.frame(C.product??null)):f.name==="home"?C=Tr(h,l,v):C={warm:0,orb:Er(h,l,v),emission:le.emission},!q){let I=Lr(h,l,o);p.frame(I),I?.ground&&(C.grounds||=[]).push({y:I.ground,x:I.x,d:I.d})}return $r(C.orb),C}let va=null,ya=[],Sr=()=>ya.map(t=>({id:`sound-${t.key}`,name:t.title,href:"#/sound"})),Bt=()=>!1,Er=(t,o,h)=>({x:t-(h?34:50),y:o-(h?38:52),d:h?40:50,vis:1});function $r(t){let o=t&&(t.vis??1)>.5&&!!ot();x.hidden=!o,o&&Object.assign(x.style,{left:`${t.x-t.d/2}px`,top:`${t.y-t.d/2}px`,width:`${t.d}px`,height:`${t.d}px`})}function Tr(t,o,h){let l=n.scrollTop/o,u=n.querySelector("[data-welcopy]"),b=n.querySelector("[data-qt]"),v=n.querySelector(".wel-ctl"),C=1-Xe((l-.04)/.2),I=he[Y],y=I?.getBoundingClientRect(),w=(n.querySelector(".qt")?.offsetTop??o)/o,S=(n.querySelector("#select")?.offsetTop??2*o)/o,O=n.querySelector("#sel-t"),Z=O?(O.getBoundingClientRect().top+n.scrollTop-n.getBoundingClientRect().top)/o:2,P=Z-.8,Ie=Zr(l,.13,.3,P-.22,P);u&&(u.style.setProperty("--wipe",C.toFixed(3)),u.style.visibility=C<.01?"hidden":""),v&&(v.style.setProperty("--wipe",C.toFixed(3)),v.style.visibility=C<.01?"hidden":""),b&&(b.style.setProperty("--wipe",Ie.toFixed(3)),b.style.transform=`translateY(${(20*(1-Xe((l-.13)/.17))-24*Xe((l-P+.22)/.22)).toFixed(1)}px)`,b.style.visibility=Ie<.01?"hidden":"");let pt=Ue(Math.min(t*(h?.46:.19),o*.28),120,280),vt={x:t/2,y:o*(h?.3:.29),d:pt},tt={x:t/2,y:o*.87,d:pt*.3},_e=Xe((l-.08)/Math.max(.3,w-.5)),Se={x:mt(vt.x,tt.x,_e),y:mt(vt.y,tt.y,_e),d:mt(vt.d,tt.d,_e)};if(I){let Ge=y,je=Xe((l-P+.1)/.2);if(je>0){let At=h?40:50,it={x:oe?Ge.left+Ge.width/2:t/2,y:Ge.bottom+44,d:At};Se={x:mt(Se.x,it.x,je),y:mt(Se.y,it.y,je),d:mt(Se.d,it.d,je)}}}return{orb:{...Se,vis:1},warm:1,ground:{y:Se.y+Se.d/2},emission:le.emission}}function Lr(t,o,h){if(f.name==="sound"&&va?.isConnected){let l=va.getBoundingClientRect(),u=Math.min(l.width,l.height)*.78;return l.bottom>0?{x:l.left+l.width/2,y:l.top+l.height/2,d:u,vis:1,ground:l.top+l.height/2+u/2}:null}if(f.name==="products"&&!f.id){let l=n.querySelector("[data-orbslot]");if(!l)return null;let u=l.getBoundingClientRect(),b=l.closest(".pc")?.classList.contains("on"),v=Math.min(u.width,u.height)*.74;return u.width>10?{x:u.left+u.width/2,y:u.top+u.height/2,d:v,vis:b?1:.7,ground:u.top+u.height/2+v/2}:null}if(f.name==="products"&&f.id&&be?.el?.isConnected){let l=be,u=l.el.getBoundingClientRect();if(l.id==="orb-slider"){let b=l.el.querySelector("[data-cap]").getBoundingClientRect(),v=b.height*.84,C=(b.height-v)/2;return{x:b.left+C+v/2+l.cap*(b.width-b.height),y:b.top+b.height/2,d:v,vis:1,snap:!0}}if(l.id==="orb-wave"||l.id==="background-pack"){let b=Math.min(96,u.width*.16),v=u.height*.7+b*.1,C=v-b/2;if(l.drop){let I=l.drop;I.y==null&&(I.y=-u.height*.45),I.vy+=2600*h,I.y+=I.vy*h,I.y>=0&&(I.y=0,qe.impact(u.width/2,v,Ue(I.vy/1400)),p.orb?.nudge(.8),a.sfx("detent"),I.vy*=-.38,(++I.contacts>2||Math.abs(I.vy)<120)&&(l.drop=null)),C+=l.drop?l.drop.y:0}return qe.setOrb({x:u.width/2,y:C,d:b}),{x:u.left+u.width/2,y:u.top+C,d:b,vis:1,snap:!!l.drop}}}return null}addEventListener("resize",()=>{f.name==="home"&&Ce(!0)}),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__lo={audio:a,worldPreview:qe,product:p,store:xe,get studio(){return q},get route(){return f},get sel(){return Y},get psel(){return U}});try{Object.keys(sessionStorage).filter(t=>t.startsWith("lo:scroll:")||t==="lo:sel").forEach(t=>sessionStorage.removeItem(t))}catch{}return Y=0,ce(),T(),{frame:kr,audio:a,get route(){return f},get studio(){return q},reapply:()=>ye()}}function sr(e,r){let i=document.createElement(e);return i.className=r,i}var Ct={hostDuration:.95,follow:7,damping:.92,pearl:[243,243,241],chamber:[23,26,25],whiten:6.5},bt=matchMedia("(prefers-reduced-motion: reduce)").matches,ur=(e,r=0,i=1)=>Math.min(i,Math.max(r,e)),dt=(e,r,i)=>e+(r-e)*i,dr=e=>{let r=ur(e);return r<.5?4*r*r*r:1-(-2*r+2)**3/2},cr=(e,r,i)=>e.map((a,c)=>dt(a,r[c],i)),ha=(e,r=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${r})`,pr=!1;document.addEventListener("lightorb:intro-complete",e=>gr(e.detail));document.body.classList.contains("static")&&gr(null);function eo(){let e=document.createElement("div");e.style.cssText="position:absolute;left:0;top:0;border-radius:50%;pointer-events:none;will-change:transform;background:radial-gradient(circle at 34% 28%,#fff 0 10%,rgba(255,255,255,.55) 24%,rgba(225,228,230,.35) 58%,rgba(170,176,180,.45) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),inset 0 -12px 24px rgba(120,126,130,.18),0 18px 30px -18px rgba(38,40,39,.45)";let r=()=>r,i={element:e,place(a){e.style.width=e.style.height=`${a.d}px`,e.style.transform=`translate(${a.x-a.d/2}px,${a.y-a.d/2}px)`,e.style.opacity=a.visibility??1}};return new Proxy(i,{get:(a,c)=>c in a?a[c]:r})}function gr(e){if(pr)return;let i=document.querySelector(".intro").querySelector(".intro-world"),a=e?.orb??eo();pr=!0;let c=document.createElement("style");c.textContent=".x-surface,.x-orb{position:fixed;inset:0;pointer-events:none}.x-surface{z-index:6;width:100%;height:100%}.x-orb{z-index:30}",document.head.append(c);let p=document.createElement("canvas");p.className="x-surface",p.setAttribute("aria-hidden","true");let n=document.createElement("div");n.className="x-orb",document.body.append(p,n),n.append(a.element),a.attachPointer(document.createElement("div"))();let d=p.getContext("2d");a.prepareTone("ivory"),a.prepareTone("dark");let s=0,R=0,x=1,W=()=>{s=Math.max(1,innerWidth),R=Math.max(1,innerHeight),x=Math.min(devicePixelRatio||1,1.5),p.width=Math.round(s*x),p.height=Math.round(R*x)};W(),addEventListener("resize",W);let M=performance.now()/1e3,m={x:0,y:0,d:0,vx:0,vy:0,vd:0,from:null,hosted:!1},V=new Set,T=null,B=null,N=0,ie=1,se=1,ve=M,le={left:.65,right:.55,env:.5,exposure:0,yaw:0,pitch:0,platform:!0},ye=(E,k)=>{let $=performance.now()/1e3,f=ur($-ve,0,.05);ve=$,m.from||(m.from={x:E.x,y:E.y,d:E.d}),T=B?.frame($,f,{W:s,H:R})??null;let q=T?.orb??{x:s/2,y:R*.42,d:Math.min(s*.3,R*.42)},z=bt?1:dr(($-M)/Ct.hostDuration);if(!m.hosted)m.x=dt(m.from.x,q.x,z),m.y=dt(m.from.y,q.y,z),m.d=dt(m.from.d,q.d,z),z>=1&&(m.hosted=!0,a.attachPointer(document.createElement("div"))(),B?.reapply?.());else if(bt||T?.snap)m.x=q.x,m.y=q.y,m.d=q.d,m.vx=m.vy=m.vd=0;else{let j=Ct.follow,X=Ct.damping;m.vx+=(j*j*(q.x-m.x)-2*X*j*m.vx)*f,m.x+=m.vx*f,m.vy+=(j*j*(q.y-m.y)-2*X*j*m.vy)*f,m.y+=m.vy*f,m.vd+=(j*j*(q.d-m.d)-2*X*j*m.vd)*f,m.d+=m.vd*f}m.hosted&&!m.hostedAt&&(m.hostedAt=$);let _=m.hostedAt?dr(($-m.hostedAt)/Ct.whiten):0,fe=Math.min(T?.warm??1,1-_);ie=bt?fe:dt(ie,fe,.2),N=dt(N,T?.room==="chamber"?1:0,bt?1:.12),se=dt(se,T?.orb?.vis??1,bt?1:.14),Number.isFinite(m.x+m.y+m.d)||(console.warn("orb pose NaN",JSON.stringify(q),JSON.stringify(m)),Object.assign(m,{x:q.x,y:q.y,d:q.d,vx:0,vy:0,vd:0})),He();let ce=ie<.002;return{...E,x:m.x,y:m.y,d:m.d,squash:0,contact:0,worldY:ce?-9999:m.y,hideWorld:ce,visibility:se,emission:E.emission*(T?.emission??1),raster:Math.ceil(Math.max(m.d,q.d,140)*1.06)}};if(e?.orb)e.takeOver(ye);else{let E=()=>{a.place(ye({x:s/2,y:R/2,d:0,emission:1})),requestAnimationFrame(E)};requestAnimationFrame(E)}try{a.setBackdrop((E,k)=>ee(E,k,m))}catch(E){console.warn("backdrop",E)}let ot=(()=>{try{let E=document.createElement("canvas").getContext("2d");return E.filter="blur(1px)",E.filter==="blur(1px)"}catch{return!1}})(),te=document.createElement("canvas"),J=te.getContext("2d");function Ne(E,k,$,f){return te.width!==f&&(te.width=te.height=f),J.globalCompositeOperation="copy",J.drawImage(i,E,k,$,$,0,0,f,f),J.globalCompositeOperation="saturation",J.fillStyle="#808080",J.fillRect(0,0,f,f),J.globalCompositeOperation="destination-in",J.drawImage(i,E,k,$,$,0,0,f,f),J.globalCompositeOperation="source-over",te}function ee(E,k,$){let f=$.d/k.diameter,q=k.extent*f,z=$.x-q/2,_=$.y-q/2,fe=k.extent/q,ce=j=>j.width>0&&j.height>0;if(ie>.002&&ce(i)){let j=i.width/Math.max(1,innerWidth),X=!document.documentElement.classList.contains("warm");X&&ot&&(E.filter="grayscale(1) contrast(1.06)"),X&&!ot?E.drawImage(Ne(z*j,_*j,q*j,k.extent),0,0):E.drawImage(i,z*j,_*j,q*j,q*j,0,0,k.extent,k.extent),X&&ot&&(E.filter="none")}ce(p)&&E.drawImage(p,z*x,_*x,q*x,q*x,0,0,k.extent,k.extent);for(let j of V){if(!j.isConnected||!ce(j))continue;let X=j.getBoundingClientRect();X.right<z||X.left>z+q||X.bottom<_||X.top>_+q||E.drawImage(j,(X.left-z)*fe,(X.top-_)*fe,X.width*fe,X.height*fe)}}function He(){d.setTransform(x,0,0,x,0,0),d.clearRect(0,0,s,R);let E=1-ie;if(E>0){d.globalAlpha=E;let $=Ct.pearl,f=d.createLinearGradient(0,0,0,R);f.addColorStop(0,ha(cr($,[250,251,251],.5))),f.addColorStop(.6,ha($)),f.addColorStop(1,ha(cr($,[214,217,220],.55))),d.fillStyle=f,d.fillRect(0,0,s,R),Ke(s*.92,-R*.1,s*.55,"255,255,255",.7),Ke(s*.05,R*1.05,s*.45,"196,201,206",.35),d.globalAlpha=1}for(let $ of T?.glows??[]){d.save(),d.globalAlpha=$.k*E,d.translate($.x,$.y),d.scale(1,$.h/$.w);let f=d.createRadialGradient(0,0,0,0,0,$.w);f.addColorStop(0,"rgba(255,255,255,.7)"),f.addColorStop(.5,"rgba(255,255,255,.22)"),f.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=f,d.fillRect(-$.w,-$.w,$.w*2,$.w*2),d.restore()}N>.002&&Qe(N);let k=T?.ground;for(let $ of T?.grounds??[])Oe($,$,1)}function Ke(E,k,$,f,q){let z=d.createRadialGradient(E,k,0,E,k,$);z.addColorStop(0,`rgba(${f},${q})`),z.addColorStop(1,`rgba(${f},0)`),d.fillStyle=z,d.fillRect(E-$,k-$,$*2,$*2)}let Je=Array.from({length:160},(E,k)=>{let $=Math.sin(k*12.9898)*43758.5453,f=$-Math.floor($),q=Math.sin(k*78.233)*12345.678%1;return[f*Math.PI*2,Math.abs(q)*.9-.25,.3+k%7/10]});function Qe(E){let k=T?.stage??{x:0,y:0,w:s,h:R},$=2**(le.exposure*.5),f=le.left,q=le.right,z=k.x+k.w/2,_=k.y+k.h*.52,fe=le.yaw,ce=le.pitch;d.save(),d.globalAlpha=E,d.fillStyle="#070808",d.fillRect(0,0,s,R),d.fillStyle="#ffffff";for(let[Fe,oe,Te]of Je){let Ze=Fe-fe*Te,Le=z+Math.sin(Ze)*k.w*.9,pe=_-(oe+ce*.6*Te)*k.h;Math.cos(Ze)<-.2||Le<k.x||Le>k.x+k.w||(d.globalAlpha=E*.1*Te*$,d.fillRect(Le,pe,1.1,1.1))}d.globalAlpha=E;let j=_+k.h*(.12-ce*.55),X=T?.product?.ground??_+k.h*.18,Be=d.createLinearGradient(0,j,0,k.y+k.h);Be.addColorStop(0,"rgba(255,255,255,0)"),Be.addColorStop(.25,`rgba(255,255,255,${.035*$})`),Be.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=Be,d.fillRect(k.x,j,k.w,k.y+k.h-j);let we=T?.product?.x??z,Y=T?.product?.d??k.h*.4;for(let[Fe,oe]of[[-1,f],[1,q]]){if(oe<=.01)continue;let Te=we+Fe*Y*(1.1+.5*Math.sin(fe*Fe+.4)),Ze=.18+.3*Math.max(0,Math.sin(.15+ce));d.save(),d.translate(Te,X),d.scale(1,Ze);let Le=d.createRadialGradient(0,0,0,0,0,Y*1.3);Le.addColorStop(0,`rgba(240,242,240,${.12*oe*$})`),Le.addColorStop(1,"rgba(240,242,240,0)"),d.fillStyle=Le,d.beginPath(),d.arc(0,0,Y*1.3,0,Math.PI*2),d.fill(),d.restore();let pe=Fe<0?k.x:k.x+k.w,Ce=d.createRadialGradient(pe,_,0,pe,_,k.w*.45);Ce.addColorStop(0,`rgba(230,234,232,${.07*oe*$})`),Ce.addColorStop(1,"rgba(230,234,232,0)"),d.fillStyle=Ce,d.fillRect(k.x,k.y,k.w,k.h)}let he=d.createRadialGradient(z,_,k.h*.2,z,_,Math.hypot(k.w,k.h)*.62);he.addColorStop(0,"rgba(0,0,0,0)"),he.addColorStop(1,"rgba(0,0,0,.55)"),d.fillStyle=he,d.fillRect(0,0,s,R),d.restore()}function Oe(E,k,$){if(!Number.isFinite(k.d+k.x+E.y)||k.d<=0)return;let f=k.d/2,q=N>.5;d.save(),d.globalAlpha=$,d.translate(k.x,E.y),d.scale(1,.2);let z=d.createRadialGradient(0,0,0,0,0,f*1.5);q?(z.addColorStop(0,"rgba(240,240,236,.12)"),z.addColorStop(1,"rgba(240,240,236,0)"),d.globalCompositeOperation="lighter"):(z.addColorStop(0,"rgba(70,72,78,.22)"),z.addColorStop(.5,"rgba(70,72,78,.07)"),z.addColorStop(1,"rgba(70,72,78,0)")),d.fillStyle=z,d.beginPath(),d.arc(0,0,f*1.5,0,Math.PI*2),d.fill(),d.restore()}let ze={orb:a,reduced:bt,chamber:le,body:{get x(){return m.x},get y(){return m.y},get d(){return m.d},get hosted(){return m.hosted}},addBackdrop:E=>V.add(E),removeBackdrop:E=>V.delete(E),drawBackdrop:ee,exportPNG(E,k=a.element){let f=document.createElement("canvas");f.width=Math.round(E.w*2),f.height=Math.round(E.h*2);let q=f.getContext("2d");q.drawImage(p,E.x*x,E.y*x,E.w*x,E.h*x,0,0,f.width,f.height);for(let z of k.querySelectorAll("canvas")){let _=z.getBoundingClientRect();q.drawImage(z,(_.left-E.x)*2,(_.top-E.y)*2,_.width*2,_.height*2)}return new Promise(z=>f.toBlob(z,"image/png"))}};B=lr(ze),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__exit={api:ze,body:m,site:B,get scene(){return T}})}export{Ct as EXIT};
