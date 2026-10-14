import{e as ra,f as oa,h as za,i as Pa,j as na,k as ia,n as Ia,o as ja,p as sa,r as la,t as Da,u as Na,v as Ft,w as Gt,x as Wt,y as Se,z as Ha}from"./chunk-S3OFILRE.js";var Le=[{id:"products",label:"Products",route:"#/products",line:"Objects of light and glass, ready to use.",action:"Explore products",clip:"products",words:["products","product","pieces","piece","objects","gallery","shop"]},{id:"templates",label:"Templates",route:"#/templates",line:"Complete compositions to start from.",action:"Browse templates",clip:"templates",words:["templates","template","compositions","websites","cassettes"]},{id:"studio",label:"Studio",route:"#/studio",line:"Shape the light. Make it yours.",action:"Open Studio",clip:"studio",words:["studio","editor","customize","customise","edit","workshop"]},{id:"sound",label:"Sound",route:"#/sound",line:"Voices and the quiet sounds of glass.",action:"Listen",clip:"sound",words:["sound","sounds","voice","voices","audio","listen"]}];var da=e=>(Object.values(e).forEach(r=>r&&typeof r=="object"&&da(r)),Object.freeze(e)),_t=da({version:1,shell:{roughness:.01,thickness:.78,ior:1.58,tint:"#cdd2cf",tintAmount:.72,elastic:0},interior:{kind:"light",amount:.5,size:.5,motion:.4,fill:.5,colour:"#f1f0ec"},light:{colour:"#f6f6f3",strength:.9,x:-.04,y:-.3,z:.12,spread:.8,glow:.3},motion:{idle:0},voice:{enabled:!0,response:.6}}),At=(e,r,s,a)=>da({id:e,name:r,line:s,family:"orb",config:{...structuredClone(_t),...Object.fromEntries(Object.entries(a).map(([u,f])=>[u,{..._t[u],...f}]))}}),at=[At("original","Light","Clear glass holding one soft white light.",{}),At("beads","Beads","Small glass beads resting and rolling inside the shell.",{interior:{kind:"beads",amount:.6,size:.55,motion:.45},light:{strength:.7},shell:{thickness:.15,ior:1.3}}),At("glitter","Glitter","Fine reflective flecks suspended in the volume.",{interior:{kind:"glitter",amount:.6,size:.35,motion:.35,colour:"#f4f4f2"}}),At("liquid","Liquid","A clear liquid with a meniscus that moves with the glass.",{interior:{kind:"liquid",fill:.42,motion:.5,colour:"#dfe3e1"},light:{strength:.78}}),At("gel","Gel","A soft gel body; the shell answers with a damped give.",{interior:{kind:"gel",amount:.55,motion:.45,colour:"#e4e6e3"},shell:{elastic:.55}})],ca=at[0].config,lt=e=>at.find(r=>r.id===e)??at[0],je=[{id:"orb",name:"The Orb",kind:"Interactive object",line:"A 3D sphere for your own work, in twenty versions: glass, metal, porcelain, bloom, and glass with light, sparkle or beads inside.",receives:["ES module (Three.js r186) with the sphere and its material","The version you choose","Integration notes and dependency list"],source:["dist/light-orb.js","dist/orb-three.js","dist/orb-lighting.js","dist/orb-floor.js"],preview:"orb",studio:!0,presets:at.map(e=>e.id),readiness:"preview_ready",missing:["price","checkout provider","packaged download (source export not yet assembled)"],price:null},{id:"orb-slider",name:"Orb Slider",kind:"Interactive control",line:"A clear glass capsule whose thumb is the Orb itself. Slide it to enter.",receives:["Slider component source","Orb thumb integration","Integration notes"],source:["dist/intro/activation.js","dist/intro/glass-control.js"],preview:"slider",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package (currently embedded in the intro)"],price:null},{id:"orb-wave",name:"Orb Wave",kind:"Surface effect",line:"The ripple the Orb leaves on the floor when it lands, drawn in light.",receives:["Light-world shader source","Impact trigger API","Integration notes"],source:["dist/intro/light-world.js"],preview:"wave",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"background-pack",name:"Background Pack",kind:"Two environments",line:"A dark world and a light one, and the change between them.",receives:["Dark and warm environment shader","Exposure transition","Integration notes"],source:["dist/intro/light-world.js"],preview:"backgrounds",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"crystal-controls",name:"Crystal Controls",kind:"Interface kit",line:"Buttons, switches, fields and sliders in clear glass, with every state designed.",receives:["CSS component source","Every state: hover, focus, pressed, selected, disabled, loading","Integration notes"],source:["dist/app/glass.css.js"],preview:"controls",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged download"],price:null}],yt=e=>je.find(r=>r.id===e),De=[{id:"the-light-orb",name:"The Light Orb",line:"This website\u2019s own beginning: the Orb as host, a quiet greeting, the quotation and the four destinations.",cover:{src:"./media/templates/the-light-orb.cover.jpg",from:"dist/intro.html (post-intro welcome, live render)",meta:"./media/templates/the-light-orb.cover.json"},route:"#/",includes:["Centred welcome with the hosting Orb","Quotation scene","Destination selector"],readiness:"preview_ready",missing:["price","checkout provider","packaged source export"],price:null}],Mt=[{id:"samantha",name:"Samantha",locale:"en-US",provider:"macOS system speech (development)",rights:{onSite:"development preview only",download:"not permitted"},readiness:"blocked",missing:"licensed voice from a chosen provider"},{id:"daniel",name:"Daniel",locale:"en-GB",provider:"macOS system speech (development)",rights:{onSite:"development preview only",download:"not permitted"},readiness:"blocked",missing:"licensed voice from a chosen provider"}],pa={home:"Welcome to The Light Orb. A space for creative possibilities. Let\u2019s explore.",products:"Explore the pieces. Each one is designed to become part of something of your own.",templates:"Start with a complete composition. Select a cassette to preview the design.",studio:"Choose a piece, then shape its light, material and movement.",sound:"Listen before you choose. Find the voice and sounds that fit your work.",voice_audition:"A little light. A new idea. Something of your own."},ua=(e,r)=>`./media/voice/${e}.${r}.m4a`,qt={text:"I don\u2019t know why people expect art to make sense when they accept the fact that life doesn\u2019t make sense.",author:"David Lynch",work:"interview with Kristine McKenna, Los Angeles Times, 20 August 1989",source:"https://www.latimes.com/archives/la-xpm-1989-08-20-ca-1327-story.html"};var Rt=[{id:"select",name:"Select",line:"A soft glass touch for choosing.",file:"./media/sfx/select.wav"},{id:"open",name:"Open",line:"A breath of air as a panel opens.",file:"./media/sfx/open.wav"},{id:"close",name:"Close",line:"The same air, settling.",file:"./media/sfx/close.wav"},{id:"confirm",name:"Confirm",line:"Two quiet glass tones.",file:"./media/sfx/confirm.wav"},{id:"detent",name:"Detent",line:"A precise tick for wheels and steps.",file:"./media/sfx/detent.wav"},{id:"type",name:"Type",line:"A dry, very quiet key.",file:"./media/sfx/type.wav"},{id:"level",name:"Level",line:"A short tone for volume changes.",file:"./media/sfx/level.wav"}],Ba={promise:"A new drop every two weeks.",open:!1,price:null,interval:null,quota:null,plans:[{id:"ready",name:"Ready-made",line:"Choose a curated piece and use it as it is.",points:["One finished piece","Its source and integration notes"]},{id:"studio",name:"Studio",line:"Customise a piece and export your own version.",points:["Light, material and movement controls","Saved designs"]},{id:"member",name:"Membership",line:"Follow the collection as it grows.",points:["A new drop every two weeks"]}]};var Fa="lightorb:audio",wt=(e,r=0,s=1)=>Math.min(s,Math.max(r,e)),ga={master:!1,guide:!0,sfx:!0,voice:Mt[0].id,gain:.8,sfxGain:.5,volume:.8};function Jr(){try{return{...ga,...JSON.parse(localStorage.getItem(Fa)||"{}")}}catch{return{...ga}}}function Ga(){let e=Jr();Mt.some(h=>h.id===e.voice)||(e.voice=ga.voice);let r=new Set,s=null,a=null,u=null,f=null,i=null,d=null,c=new Audio;c.preload="auto",c.crossOrigin="anonymous",c.setAttribute("playsinline","");let A=null,o={clip:null,voice:null,status:"idle",error:null,energy:0,journey:new Set},N=new Map,L=new Map,v=h=>{if(!L.has(h)){let R=fetch(h).then(M=>{if(!M.ok)throw new Error(M.status);return M.blob()}).then(M=>URL.createObjectURL(M));L.set(h,R),R.catch(()=>L.delete(h))}return L.get(h)},ee={},P=()=>r.forEach(h=>h(Q)),Y=()=>{try{localStorage.setItem(Fa,JSON.stringify(e))}catch{}};function K(){if(s)return s;let h=window.AudioContext||window.webkitAudioContext;if(!h)return null;s=new h,a=s.createGain(),a.connect(s.destination),u=s.createGain(),u.connect(a),f=s.createGain(),f.connect(a),i=s.createAnalyser(),i.fftSize=1024,i.smoothingTimeConstant=0,i.connect(u),d=new Float32Array(i.fftSize);try{A=s.createMediaElementSource(c),A.connect(i)}catch{A=null}return be(),s}function be(){if(!s)return;let h=s.currentTime;a.gain.setTargetAtTime(e.master?e.volume??.8:0,h,.02),u.gain.setTargetAtTime((e.guide||o.clip?.startsWith("voice_audition"),e.gain),h,.02),f.gain.setTargetAtTime(e.sfx?e.sfxGain:0,h,.02)}let te=()=>{let h=K();h&&h.state!=="running"&&h.state!=="closed"&&h.resume().catch(()=>{}),D()};for(let h of["pointerdown","keydown","touchend"])addEventListener(h,te,{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden?c.paused||(c.pause(),o.status="paused",o.hiddenPause=!0,P()):o.hiddenPause&&(o.hiddenPause=!1)}),c.addEventListener("ended",()=>{o.status="ended",P()}),c.addEventListener("pause",()=>{o.status==="playing"&&(o.status="paused",P())}),c.addEventListener("playing",()=>{o.status="playing",o.error=null,P()}),c.addEventListener("error",()=>{o.clip&&(o.status="error",o.error="The recording could not be loaded.",P())}),c.addEventListener("loadedmetadata",P);let _=(h,{voice:R=e.voice,from:M=0,kind:H="guide"}={})=>(x=null,ie(`${h}.${R}`,ua(h,R),{from:M,kind:H,voice:R})),Z=(h,R,{from:M=0}={})=>(x=null,ie(h,R,{from:M,kind:"audition"}));async function ie(h,R,{from:M=0,kind:H="guide",voice:G=null}={}){if(H==="guide"&&(!e.master||!e.guide))return!1;if(ze(),te(),o.clip!==h){c.pause(),o.clip=h,o.voice=G,o.status="loading",P();try{c.src=await v(R)}catch{c.src=R}if(o.clip!==h)return!1}if(o.env=null,$e(R,200).then(j=>{o.clip===h&&(o.env=j)}).catch(()=>{}),o.kind=H,M?(c.readyState<1&&await new Promise(j=>c.addEventListener("loadedmetadata",j,{once:!0})),c.currentTime=M):c.currentTime&&(c.currentTime=0),P(),!e.master||H==="guide"&&!e.guide||o.clip!==h)return!1;try{return await c.play(),!0}catch{return o.status="blocked",o.error="Playback was blocked. Press play to start it.",P(),!1}}function Xe(){c.paused||c.pause(),o.status="paused",P()}async function ge(){te();try{await c.play()}catch{o.status="blocked",P()}}let ue=typeof speechSynthesis<"u"?speechSynthesis:null,He=0,fe={on:!1};function ze(){ue&&fe.on&&(fe.on=!1,ue.cancel())}let qe={samantha:[/ava.*premium/i,/zoe.*premium/i,/samantha.*(enhanced|premium)/i,/(aria|jenny|emma|ava).*natural/i,/natural.*(female|aria|jenny)/i,/google us english/i,/google uk english female/i,/^(ava|zoe|allison|susan)\b/i,/^samantha/i],daniel:[/(evan|nathan|tom).*premium/i,/daniel.*(enhanced|premium)/i,/(guy|ryan|andrew|brian|christopher).*natural/i,/natural.*male/i,/google uk english male/i,/^(evan|nathan|tom|aaron)\b/i,/^daniel/i]},Pe=[],Re=()=>{Pe=ue?.getVoices()??[]};ue&&(Re(),ue.addEventListener?.("voiceschanged",Re));let Te=[/(paulina|monica|m[oó]nica|marisol|isabela).*(premium|enhanced)/i,/(elvira|dalia|helena|ximena|paloma).*natural/i,/natural.*(spanish|espa)/i,/google espa[nñ]ol/i,/^(paulina|monica|m[oó]nica|marisol|jorge|diego)\b/i];function ve(h){if(Pe.length||Re(),h==="es"){let M=Pe.filter(H=>/^es[-_]/i.test(H.lang));if(M.length){for(let H of Te){let G=M.find(j=>H.test(j.name));if(G)return G}return M.find(H=>H.localService===!1)??M[0]}}let R=Pe.filter(M=>/^en[-_]/i.test(M.lang));for(let M of qe[e.voice]??qe.samantha){let H=R.find(G=>M.test(G.name));if(H)return H}return R.find(M=>M.localService===!1)??R[0]}let C=null,S="./media/voice/lines/",z=()=>C??=fetch(`${S}manifest.json`).then(h=>h.ok?h.json():null).catch(()=>null);z();let x=null;function q(h,{id:R,onend:M,lang:H}={}){if(!h||!e.master||!e.guide)return M?.(),!1;let G=x={};if(R){let j=e.voice;return ze(),c.pause(),o.kind="guide",o.clip=`line:${R}`,o.status="loading",P(),z().then(async X=>{let pe=X?.lines?.[R]?.text===h?X.lines[R].files?.[j]:null;if(x!==G)return;if(!pe){F(h,{onend:M,lang:H});return}let oe=S+pe;try{await v(oe)}catch{x===G&&F(h,{onend:M,lang:H});return}x===G&&(o.clip=null,M&&c.addEventListener("ended",()=>{x===G&&M()},{once:!0}),ie(`line:${R}.${j}`,oe,{kind:"guide",voice:j}))}),!0}return F(h,{onend:M,lang:H})}function F(h,{onend:R,lang:M}={}){if(!ue||!h||!e.master||!e.guide)return R?.(),!1;te(),c.pause(),ue.cancel();let H=ve(M),G=H&&(!H.localService||/premium|enhanced|natural/i.test(H.name)),j=h.match(/[^.!?]+[.!?]*\s*/g)?.map(pe=>pe.trim()).filter(Boolean)??[h],X={};return fe.u=X,fe.on=!0,o.kind="guide",o.clip="speech",o.status="playing",P(),j.forEach((pe,oe)=>{let se=new SpeechSynthesisUtterance(pe);H&&(se.voice=H,se.lang=H.lang),se.rate=G?1:.94,se.pitch=1,se.volume=e.volume??.8,se.onboundary=()=>{He=1},se.onstart=()=>{He=1},oe===j.length-1&&(se.onend=se.onerror=()=>{fe.u===X&&(fe.on=!1,o.status="stopped",P(),R?.())}),ue.speak(se)}),!0}let J=()=>ve()?.name??null;function xe(){x=null,ze(),c.pause(),o.status=o.clip?"stopped":"idle",P()}function we(h){c.duration&&(c.currentTime=wt(h)*c.duration,P())}let V=performance.now();function ce(){let h=performance.now(),R=Math.min(.1,(h-V)/1e3);V=h;let M=0;if(fe.on&&e.master)He=Math.max(0,He-R*3.2),M=wt(.35+.45*He+.15*Math.sin(h/90));else if(!A&&o.env&&!c.paused&&e.master&&c.duration)M=wt(o.env.bins[Math.min(o.env.bins.length-1,Math.floor(c.currentTime/c.duration*o.env.bins.length))]*1.1);else if(i&&!c.paused&&e.master){i.getFloatTimeDomainData(d);let G=0;for(let X=0;X<d.length;X++)G+=d[X]*d[X];let j=Math.sqrt(G/d.length);M=wt((j-.008)/.16)}let H=M>o.energy?.05:.18;return o.energy+=(M-o.energy)*(1-Math.exp(-R/H)),o.energy<.001&&(o.energy=0),o.energy}let Be=(h,R=e.voice,M=72)=>$e(ua(h,R),M);async function $e(h,R=72){let M=`${h}|${R}`;if(N.has(M))return N.get(M);let H=(async()=>{let G=await(await fetch(h)).arrayBuffer(),j=window.OfflineAudioContext||window.webkitOfflineAudioContext,X=await new j(1,44100,44100).decodeAudioData(G),pe=X.getChannelData(0),oe=Math.max(1,Math.floor(pe.length/R)),se=[],Ke=0;for(let _e=0;_e<R;_e++){let dt=0;for(let bt=_e*oe;bt<(_e+1)*oe;bt++)dt+=pe[bt]*pe[bt];let ct=Math.sqrt(dt/oe);se.push(ct),Ke=Math.max(Ke,ct)}return{bins:se.map(_e=>_e/(Ke||1)),duration:X.duration}})();return N.set(M,H),H.catch(()=>N.delete(M)),H}let re={press:"select",release:"select",volume:"level",case:"open"},ke={select:90,type:70,detent:50,level:110,open:220,close:220,confirm:400},Fe={select:.7,type:.45,detent:.6,level:.5,open:.6,close:.55,confirm:.7},l={},m=0;function p(h){l[h]||!s||(l[h]=fetch(`./media/sfx/${h}.wav`).then(R=>R.arrayBuffer()).then(R=>s.decodeAudioData(R)).then(R=>l[h]=R).catch(()=>l[h]=null))}function $(h,R=.5){if(h=re[h]||h,!e.master||!e.sfx)return;let M=K();if(!M||M.state!=="running")return;let H=performance.now();if(H-(ee[h]??0)<(ke[h]??80)||m>3)return;ee[h]=H;let G=l[h];if(!G||G instanceof Promise){p(h);return}let j=M.createBufferSource(),X=M.createGain();j.buffer=G,X.gain.value=(Fe[h]??.6)*(h==="level"?.6+.4*wt(R):1),h==="level"&&(j.playbackRate.value=.85+.3*wt(R)),j.connect(X),X.connect(f),m++,j.onended=()=>{m--,X.disconnect()},j.start()}let D=()=>{if(s)for(let h of Object.keys(ke))p(h)},Q={prefs:e,state:o,el:c,get ready(){return!!s},get position(){return c.duration?c.currentTime/c.duration:0},get time(){return c.currentTime||0},get duration(){return c.duration||0},get playing(){return fe.on||!c.paused&&!c.ended},set(h){Object.assign(e,h),Y(),te(),be(),(!e.master||!e.guide&&o.kind==="guide")&&(c.paused||c.pause(),ze()),P()},play:_,playUrl:Z,say:q,voiceName:J,pause:Xe,resume:ge,stop:xe,seek:we,energy:ce,peaks:Be,peaksUrl:$e,sfx:$,unlock:te,once(h){return o.journey.has(h)||!e.master||!e.guide?Promise.resolve(!1):(o.journey.add(h),_(h).then(R=>(R||o.journey.delete(h),R)))},on(h){return r.add(h),()=>r.delete(h)}};return Q}var Qr={"reply.missed":"I didn\u2019t catch that. Tap me and try again.","reply.help":"I can take you anywhere here. Say Products, Templates, Studio, Sound or Membership, or name a piece, like the Slider or the Wave. You can also ask me where you are.","reply.thanks":"With pleasure. I\u2019m right here when you need me.","reply.who":"I\u2019m the Light Orb, the guide of this place. A little light made of glass. I show you around and I answer when you call.","reply.back":"Going back.","reply.hello":"Hello. It\u2019s lovely to hear you. Where would you like to go? Products, Templates, Studio or Sound?","reply.unknown":"I\u2019m still learning words. Try Products, Templates, Studio, Sound, or ask me where you are.","reply.mic":"Allow the microphone to talk with me."},Qe=e=>({id:e,text:Qr[e]}),Wa={profile:"your profile",downloads:"your downloads",saved:"what you have saved",designs:"the designs you made in Studio"};function _a(e,r){if(e==="products"&&r){let s=je.find(a=>a.id===r);if(s)return{id:`present.product.${s.id}`,text:`This is ${s.name}. ${s.kind}. ${s.line} ${s.id==="orb"?"Try its versions; every one is free to take during early access, or shape it in Studio.":"Try its versions, save it, or shape it in Studio. It comes to early access soon."}`}}if(e==="templates"&&r){let s=De.find(a=>a.id===r);if(s)return{id:`present.template.${s.id}`,text:`You are looking at the template ${s.name}. ${s.line}`}}return e==="products"?{id:"present.products",text:`Welcome to Products. ${je.length} objects of light and glass, ready to use: ${je.map(s=>s.name).join(", ")}. Choose one to see it alive.`}:e==="templates"?{id:"present.templates",text:`These are the Templates. Complete compositions to start from: ${De.map(s=>s.name).join(", ")}.`}:e==="studio"?{id:"present.studio",text:"You are in Studio, open to everyone while we build it. Shape the light: material, colour and movement, then save or export it. Tell us what is missing."}:e==="sound"?{id:"present.sound",text:"This is Sound. Listen to the voices and the quiet sounds of glass that live across the site."}:e==="membership"?{id:"present.membership",text:"This is Membership. Right now everything is free while we build it. Leave your email and you will hear first when plans open."}:e==="account"?r&&Wa[r]?{id:`present.account.${r}`,text:`This is your account, showing ${Wa[r]}.`}:{id:"present.account",text:"This is your account."}:e==="privacy"?{id:"present.privacy",text:"This is the privacy page: what the site keeps, and what you can ask for."}:e==="terms"?{id:"present.terms",text:"These are the terms of use of the site."}:e==="licence"?{id:"present.licence",text:"This is the licence: what you can do with the free Orb and with the pieces."}:e==="signin"?{id:"present.signin",text:"Sign in to find your saved pieces and designs."}:e==="signup"?{id:"present.signup",text:"Create an account to save pieces and keep your designs."}:{id:"present.home",text:"Welcome to The Light Orb. I will be your guide. Choose Products, Templates, Studio or Sound, and I will show you around."}}var Va=e=>({id:`already.${e.id}`,text:`We are already here. ${e.text}`}),Ya=e=>({id:`piece.${e.id}`,text:`Here is ${e.name}. ${e.line}`}),Ua=e=>({id:`open.${e.id}`,text:`Opening ${e.name}.`}),Xa=()=>({id:"piece.orb",text:`Here is the Orb. ${je[0].line}`});var kt=(e,r,s)=>e+(r-e)*s,fa=e=>{let r=parseInt(String(e).replace("#",""),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]},Mo=fa("#f3d8c5"),Zr={fill:.08,lobe:.2,wall:.55,core:.034},Ze=e=>structuredClone(e??_t);function Vt(e,r,{dark:s=!1,envBoost:a=1,exposure:u=0,left:f=.65,right:i=.55}={}){let d=r.shell,c=r.light,A=r.interior;e.setOptics({...Zr,lobe:kt(.1,.3,c.spread),core:kt(.026,.044,c.spread)}),e.setInterior({kind:A.kind,amount:A.amount,size:A.size,motion:A.motion,fill:A.fill,colour:A.colour}),e.setElastic(d.elastic??0);let o=fa(d.tint);e.setMaterial({roughness:d.roughness,thickness:kt(.3,1.4,d.thickness),ior:d.ior,envMapIntensity:(s?1.9:2.1)*a*2**(u*.5),tint:o,tintDistance:d.tintAmount>.001?kt(8,.4,d.tintAmount):0}),e.setNeutral?.(!0);let N=fa(c.colour),L=Math.max(...N);e.setLight({tint:N.map(ee=>ee/Math.max(.05,L)*1.05),spread:kt(.7,1.6,c.spread)}),e.setBloom(kt(.004,.08,c.glow)),e.setFocus({x:c.x,y:c.y,z:c.z}),e.setTone(s?"dark":"light"),e.setVolumeWorld(0),e.lockFeather([.5,.515]);let v=ee=>(Math.round(ee*10)/10).toFixed(1);return e.setWorld(s?`chamber:${v(f)}:${v(i)}`:"gallery"),{emission:c.strength/.72*2**(u*.35),voice:r.voice}}var Ot=(e,r)=>r.split(".").reduce((s,a)=>s?.[a],e);var Ka=`
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
`;var Ja=`
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
`;var Ee=null,Ge=null,St=null,zt=0,eo=performance.now()/1e3,ye={exposure:1,target:1,impacts:[null,null],next:0,strength:1,scale:90,horizon:.27,lamp:.9,orb:null};function Yt(e){if(!Ge){Ge=document.createElement("canvas"),Ge.className="world-preview",Ge.setAttribute("aria-hidden","true"),Ge.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:inherit";try{Ee=Na(Ge)}catch{Ee=null}}return Ee&&(St=e,e.prepend(Ge),ha(),to()),Ge}function Pt(){cancelAnimationFrame(zt),zt=0,Ge?.remove(),St=null}function ha(){if(!St||!Ee)return;let e=St.getBoundingClientRect();Ee.resize(Math.max(2,e.width),Math.max(2,e.height),Math.min(devicePixelRatio||1,1.5))}addEventListener("resize",ha);var me={state:ye,setExposure(e,r=!1){ye.target=e,r&&(ye.exposure=e)},impact(e,r,s=ye.strength){let a=ye.next++%2;ye.impacts[a]={x:e,y:r,at:performance.now()/1e3,strength:s}},set(e){Object.assign(ye,e)},setOrb(e){ye.orb=e},get canvas(){return Ge}};function to(){cancelAnimationFrame(zt);let e=()=>{if(!St||!Ee)return;let r=performance.now()/1e3,s=St.getBoundingClientRect();Math.abs(s.width-Ge.width/Ee.ratio)>2&&ha(),ye.exposure+=(ye.target-ye.exposure)*.05;let a=s.height,u=ye.orb;Ee.setHorizon(ye.horizon),Ee.setExposure(ye.exposure),Ee.setNightGain(1),u?(Ee.setOrb(u.x,u.y,u.d),Ee.setLamp(u.x,u.y,u.d*3,ye.lamp*(1-ye.exposure)),Ee.setReveal(u.x,u.y,Math.hypot(s.width,a),ye.exposure*60)):(Ee.setReveal(0,0,1,0),Ee.setLamp(0,0,1,0)),ye.impacts.forEach((f,i)=>Ee.setImpact(i,f?.x??0,f?.y??0,f?r-f.at:-1,f?.strength??0,ye.scale)),Ee.render(r-eo),zt=requestAnimationFrame(e)};zt=requestAnimationFrame(e)}var Za="lightorb:cart",Ut=()=>{try{return JSON.parse(localStorage.getItem(Za))??[]}catch{return[]}},Qa=e=>{try{localStorage.setItem(Za,JSON.stringify(e))}catch{}ma.forEach(r=>r(e))},ma=new Set,Ne={items:Ut,has:e=>Ut().some(r=>r.id===e),add(e){let r=Ut();r.some(s=>s.id===e.id)||(r.push({...e,at:new Date().toISOString()}),Qa(r))},remove(e){Qa(Ut().filter(r=>r.id!==e))},toggle(e){return Ne.has(e.id)?(Ne.remove(e.id),!1):(Ne.add(e),!0)},on(e){return ma.add(e),()=>ma.delete(e)}};function ba(e,{sfx:r=()=>{}}={}){for(let s of e.querySelectorAll("select:not([data-glass])")){s.dataset.glass="1";let a=document.createElement("div");a.className="gdd";let u=document.createElement("button");u.type="button",u.className=`gdd-b ${s.className.replace("gsel","")}`.trim(),u.setAttribute("aria-haspopup","listbox"),u.setAttribute("aria-expanded","false");let f=s.getAttribute("aria-label")||s.id&&e.querySelector(`label[for="${s.id}"]`)?.textContent||"";f&&u.setAttribute("aria-label",f);let i=document.createElement("div");i.className="gdd-l",i.setAttribute("role","listbox"),i.hidden=!0,s.parentNode.insertBefore(a,s),a.append(s,u,i),s.hidden=!0,s.tabIndex=-1;let d=()=>{let o=s.selectedOptions[0];u.innerHTML=`<span>${o?o.textContent:""}</span><svg viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5l5 5 5-5"/></svg>`,i.innerHTML=[...s.options].map((N,L)=>`<button type="button" role="option" class="gdd-o" data-i="${L}" aria-selected="${N.selected}">${N.textContent}</button>`).join("")},c=o=>{if(i.hidden=!o,u.setAttribute("aria-expanded",String(o)),a.classList.toggle("open",o),r(o?"open":"close"),o){let N=u.getBoundingClientRect();i.classList.toggle("up",N.bottom+260>innerHeight&&N.top>260),(i.querySelector("[aria-selected=true]")||i.firstElementChild)?.focus()}},A=o=>{s.selectedIndex!==o&&(s.selectedIndex=o,s.dispatchEvent(new Event("change",{bubbles:!0}))),d(),c(!1),u.focus()};u.addEventListener("click",()=>c(i.hidden)),i.addEventListener("click",o=>{let N=o.target.closest(".gdd-o");N&&A(+N.dataset.i)}),i.addEventListener("keydown",o=>{let N=[...i.querySelectorAll(".gdd-o")],L=N.indexOf(document.activeElement);o.key==="ArrowDown"&&(o.preventDefault(),N[Math.min(N.length-1,L+1)]?.focus()),o.key==="ArrowUp"&&(o.preventDefault(),N[Math.max(0,L-1)]?.focus()),o.key==="Escape"&&(o.preventDefault(),c(!1),u.focus()),o.key==="Tab"&&c(!1)}),u.addEventListener("keydown",o=>{(o.key==="ArrowDown"||o.key==="ArrowUp")&&(o.preventDefault(),c(!0))}),document.addEventListener("pointerdown",o=>{!i.hidden&&!a.contains(o.target)&&c(!1)}),s.addEventListener("change",d),d()}}var ao=/^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/,ro=e=>typeof e=="string"&&e.length<=254&&ao.test(e.trim());function ut(e,{compact:r=!1,label:s="",title:a="Join the waitlist"}={}){let u=!!Gt;return`<form class="form interest wl${r?" wl-c":""}" data-waitlist="${e}" novalidate>
    ${r?"":`<h2>${a}</h2>`}
    <label class="fl"><span>${s||(r?"Join the waitlist \u2014 be first when pieces open":"Be first when pieces open")}</span>
      <span class="wl-row"><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"${u?"":" disabled"}>
      <button class="gb${r?" small":""}" type="submit"${u?"":" disabled"}><span>Join</span></button></span></label>
    <p class="note" data-wlmsg role="status" aria-live="polite">${u?'Optional. We only keep your email to tell you about new pieces and Studio updates. See <a href="#/privacy">privacy</a>; leave any time.':'The waitlist opens soon \u2014 nothing typed here is sent yet. See <a href="#/privacy">privacy</a>.'}</p>
  </form>`}function Kt(e){e.querySelectorAll("[data-waitlist]").forEach(r=>r.addEventListener("submit",async s=>{if(s.preventDefault(),!Gt)return;let a=r.querySelector("[data-wlmsg]"),u=r.querySelector("input"),f=r.querySelector("button"),i=u.value.trim();if(!ro(i)){a.textContent="Please enter a valid email address.",u.focus();return}f.disabled=!0,f.setAttribute("aria-busy","true");try{let d=await fetch(Gt,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:i,source:r.dataset.waitlist,lang:(navigator.language||"en").slice(0,5)})});d.ok?(a.textContent="You are on the list. Thank you.",u.value="",Se("waitlist_join",{source:r.dataset.waitlist})):a.textContent=d.status===429?"Too many tries \u2014 please wait a minute.":"That did not go through. Please try again later."}catch{a.textContent="That did not go through. Please try again later."}f.disabled=!1,f.removeAttribute("aria-busy")}))}var Xt=500;function er(e){return`<div class="fb" data-fbwrap><button class="tl" type="button" data-fbbtn aria-expanded="false" aria-controls="fb-p"><span>What's missing?</span></button>
    <form class="form fb-p" id="fb-p" data-feedback="${e}" novalidate hidden>
      <label class="fl"><span>Tell us what Studio or the pieces still need</span>
        <textarea class="gi" name="text" rows="3" maxlength="${Xt}" required></textarea></label>
      <div class="acts"><button class="gb small" type="submit"${Wt?"":" disabled"}><span>Send</span></button></div>
      <p class="note" data-fbmsg role="status" aria-live="polite">Up to ${Xt} characters. Only the text and the page are kept.</p>
    </form></div>`}function tr(e,{sfx:r=()=>{}}={}){e.querySelectorAll("[data-fbwrap]").forEach(s=>{let a=s.querySelector("[data-fbbtn]"),u=s.querySelector("[data-feedback]");a.addEventListener("click",()=>{let f=u.hidden;u.hidden=!f,a.setAttribute("aria-expanded",String(f)),r(f?"open":"close"),f&&u.querySelector("textarea").focus()}),u.addEventListener("submit",async f=>{if(f.preventDefault(),!Wt)return;let i=u.querySelector("[data-fbmsg]"),d=u.querySelector("textarea"),c=u.querySelector("button"),A=d.value.trim();if(!A){i.textContent="Write a few words first.",d.focus();return}if(A.length>Xt){i.textContent=`Please keep it under ${Xt} characters.`;return}c.disabled=!0;try{let o=await fetch(Wt,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:A,page:u.dataset.feedback})});o.ok?(i.textContent="Thank you \u2014 we read every note.",d.value="",Se("feedback_send",{page:u.dataset.feedback})):i.textContent=o.status===429?"Too many notes for now \u2014 please try again later.":"That did not go through. Please try again later."}catch{i.textContent="That did not go through. Please try again later."}c.disabled=!1})})}var Ce=(e,r=0,s=1)=>Math.min(s,Math.max(r,e)),nr=(e,r,s)=>e+(r-e)*s,ar="lo:studio";var gt=Math.PI/180;function ft(e="orb",r="original"){return{version:1,family:e,preset:r,orb:Ze(lt(r).config),scene:{exposure:0,left:.65,right:.55,env:.5},view:{yaw:0,pitch:0,zoom:1},rot:0,slider:{length:420,height:92,tint:"#ffffff",tintAmount:0,preset:"original"},wave:{strength:.9,scale:80,exposure:1},bg:{exposure:1,horizon:.27,lamp:.8},ctl:{tint:"#ffffff",tintAmount:.1,depth:5,radius:999,blur:8}}}var le=[e=>Math.round(e*100),e=>e/100],rr={scene:["Scene",[["scene.exposure","Exposure",-2,2,.1,"EV"],["scene.left","Left light",0,1,.01,"%",...le],["scene.right","Right light",0,1,.01,"%",...le],["scene.env","Environment",0,1,.01,"%",...le]]],light:["Light",[["orb.light.colour","Colour","color"],["orb.light.strength","Strength",0,1,.01,"%",...le],["orb.light.x","Position X",-.6,.6,.01,"r"],["orb.light.y","Position Y",-.8,.6,.01,"r"],["orb.light.z","Position Z",-.4,.4,.01,"r"],["orb.light.spread","Spread",0,1,.01,"%",...le],["orb.light.glow","Glow",0,1,.01,"%",...le]]],material:["Material",[["orb.shell.tint","Shell tint","color"],["orb.shell.tintAmount","Tint amount",0,1,.01,"%",...le],["orb.shell.roughness","Roughness",0,.5,.005,""],["orb.shell.thickness","Optical depth",0,1,.01,"r",e=>+nr(.3,1.4,e).toFixed(2),e=>(e-.3)/1.1],["orb.shell.ior","IOR",1,2,.01,""]]],interior:["Interior",[["orb.interior.kind","Type","select",[["light","Light"],["beads","Beads"],["glitter","Glitter"],["liquid","Liquid"],["gel","Gel"]]]]],voice:["Voice response",[["orb.voice.response","Response",0,1,.01,"%",...le]]],transform:["Transform",[["rot","Rotation",-180,180,1,"\xB0"]]],view:["View",[["view.yaw","Orbit",-60,60,1,"\xB0"],["view.pitch","Elevation",-20,35,1,"\xB0"],["view.zoom","Zoom",.6,1.4,.01,"%",...le]]],slider:["Capsule",[["slider.length","Length",240,600,1,"px"],["slider.height","Height",60,130,1,"px"],["slider.tint","Glass tint","color"],["slider.tintAmount","Tint amount",0,1,.01,"%",...le],["slider.preset","Orb thumb","select",at.map(e=>[e.id,e.name])]]],wave:["Wave",[["wave.strength","Strength",.1,1,.01,"%",...le],["wave.scale","Ring scale",40,140,1,"px"],["wave.exposure","Environment",0,1,.01,"%",...le]]],bg:["Environment",[["bg.exposure","Dark \u2192 warm",0,1,.01,"%",...le],["bg.horizon","Horizon",.15,.45,.01,"%",...le],["bg.lamp","Orb lamp (dark)",0,1,.01,"%",...le]]],ctl:["Crystal controls",[["ctl.tint","Tint","color"],["ctl.tintAmount","Tint amount",0,1,.01,"%",...le],["ctl.depth","Optical depth",0,10,.5,"px"],["ctl.radius","Corner radius",6,999,1,"px"],["ctl.blur","Backdrop blur",0,24,1,"px"]]]},or={beads:[["orb.interior.amount","Count",0,1,.01,"",e=>Math.round(8+e*36),e=>(e-8)/36],["orb.interior.size","Bead size",0,1,.01,"%",...le],["orb.interior.motion","Motion",0,1,.01,"%",...le]],glitter:[["orb.interior.amount","Density",0,1,.01,"%",...le],["orb.interior.size","Fleck size",0,1,.01,"%",...le],["orb.interior.motion","Sparkle drift",0,1,.01,"%",...le],["orb.interior.colour","Colour","color"]],liquid:[["orb.interior.fill","Fill",0,1,.01,"%",...le],["orb.interior.motion","Slosh",0,1,.01,"%",...le],["orb.interior.colour","Colour","color"]],gel:[["orb.shell.elastic","Elasticity",0,1,.01,"%",...le],["orb.interior.amount","Body size",0,1,.01,"%",...le],["orb.interior.motion","Motion",0,1,.01,"%",...le],["orb.interior.colour","Colour","color"]],light:[]},oo={orb:["scene","light","material","interior","voice","transform","view"],"orb-slider":["scene","slider","light"],"orb-wave":["wave"],"background-pack":["bg"],"crystal-controls":["ctl"]};function ir({api:e,audio:r,top:s,page:a,query:u,ICON:f,flash:i,product:d,store:c}){let A=new Proxy({},{get:(l,m)=>(...p)=>d.orb?.[m]?.(...p)}),o;try{o=JSON.parse(sessionStorage.getItem(ar))}catch{o=null}if((!o||o.version!==1)&&(o=ft()),u.design&&c.design(u.design)){let l=c.design(u.design);o={...ft(l.family,l.preset),...structuredClone(l.draft),designId:l.id,designName:l.name}}else if(u.family&&yt(u.family)&&(u.family!==o.family||u.preset&&u.preset!==o.preset)){let l=o;o=ft(u.family,u.preset||"original"),o.scene=l.scene}let N=[JSON.stringify(o)],L=0,v=[["voice_audition.samantha","Voice \xB7 Samantha"],["voice_audition.daniel","Voice \xB7 Daniel"],["home.samantha","Welcome narration"],...Rt.map(l=>[`sfx.${l.id}`,`Sound \xB7 ${l.name}`])],ee=u.sound&&v.some(l=>l[0]===u.sound)?u.sound:v[0][0];function P(){r.prefs.master||r.set({master:!0});let[l,m]=ee.split(".");l==="sfx"?r.playUrl(ee,Rt.find(p=>p.id===m).file,{from:0}):r.play(l,{voice:m,kind:"audition",from:0}),r.sfx("select")}u.sound&&setTimeout(P,900);let Y="orbit",K={scene:!0,light:!0,material:!0,interior:!0,slider:!0,wave:!0,bg:!0,ctl:!0},be=()=>{try{sessionStorage.setItem(ar,JSON.stringify(o))}catch{}};function te(){let l=JSON.stringify(o);l!==N[L]&&(N.splice(L+1),N.push(l),L=N.length-1,N.length>80&&(N.shift(),L--)),be(),ge()}document.body.classList.add("dark-ui"),a.innerHTML=`
    <section class="st" aria-label="Studio">
      <div class="st-view" data-view tabindex="0" aria-label="Studio viewport. Drag to use the selected mode; arrow keys also work."></div>
      <div class="st-screen" data-screen hidden></div>
      <div class="st-cap" data-scap hidden></div>
      <div class="st-kit" data-kit hidden></div>
    </section>`;let _=document.createElement("aside");_.className="ins pane-dark dark",_.setAttribute("aria-label","Inspector");let Z=document.createElement("div");Z.className="st-bar dark",s.append(Z,_);let ie=a.querySelector("[data-view]");function Xe(){Z.innerHTML=`
      <label class="vh" for="st-fam">Object</label>
      <select class="gsel" id="st-fam" data-fam>${je.map(l=>`<option value="${l.id}"${l.id===o.family?" selected":""}>${l.name}</option>`).join("")}</select>
      ${o.family==="orb"?`<label class="vh" for="st-pre">Version</label><select class="gsel" id="st-pre" data-pre>${at.map(l=>`<option value="${l.id}"${l.id===o.preset?" selected":""}>${l.name}</option>`).join("")}</select>`:""}
      <div class="modes" role="radiogroup" aria-label="Viewport mode">
        ${[["orbit","Orbit"],["rotate","Rotate object"],["light","Move light"]].filter(([l])=>o.family==="orb"||l==="orbit"||l==="light"&&o.family==="orb-slider").map(([l,m])=>`<button class="pill" role="radio" type="button" data-mode="${l}" aria-checked="${l===Y}">${m}</button>`).join("")}
      </div>
      <button class="gb small" type="button" data-resetview>Reset view</button>
      <button class="gb gc small" type="button" data-undo aria-label="Undo"><svg viewBox="0 0 24 24"><path d="M9 7H4V2M4 7a9 9 0 1 1-1 7"/></svg></button>
      <button class="gb gc small" type="button" data-redo aria-label="Redo"><svg viewBox="0 0 24 24"><path d="M15 7h5V2M20 7a9 9 0 1 0 1 7"/></svg></button>`,ba(Z,{sfx:l=>r.sfx(l)}),Z.querySelector("[data-fam]").addEventListener("change",l=>{let m=o.scene;o=ft(l.target.value),o.scene=m,Y="orbit",r.sfx("press"),C(),te()}),Z.querySelector("[data-pre]")?.addEventListener("change",l=>{let m={scene:o.scene,view:o.view};o={...ft("orb",l.target.value),...m},r.sfx("press"),A.nudge(.6),C(),te()}),Z.querySelectorAll("[data-mode]").forEach(l=>l.addEventListener("click",()=>{Y=l.dataset.mode,r.sfx("press"),Xe()})),Z.querySelector("[data-resetview]").addEventListener("click",()=>{o.view={yaw:0,pitch:0,zoom:1},r.sfx("press"),ve(),qe(),te()}),Z.querySelector("[data-undo]").addEventListener("click",()=>ue(-1)),Z.querySelector("[data-redo]").addEventListener("click",()=>ue(1)),ge()}function ge(){let l=Z.querySelector("[data-undo]"),m=Z.querySelector("[data-redo]");l&&(l.disabled=L<=0),m&&(m.disabled=L>=N.length-1)}function ue(l){let m=Ce(L+l,0,N.length-1);m!==L&&(L=m,o=JSON.parse(N[m]),r.sfx("press"),be(),C(),ge())}function He(l){return l.map(m=>{let[p,$,D]=m,Q=Ot(o,p),h=`f-${p.replace(/\./g,"-")}`;if(D==="color")return`<div class="irow"><label for="${h}">${$}</label><span class="icol"><input type="color" id="${h}" data-path="${p}" value="${Q}"><input class="inum hex" data-hex="${p}" value="${Q}" aria-label="${$} hex" spellcheck="false" maxlength="7"></span></div>`;if(D==="select")return`<div class="irow"><label for="${h}">${$}</label><select class="gsel isel" id="${h}" data-path="${p}">${m[3].map(([pe,oe])=>`<option value="${pe}"${pe===Q?" selected":""}>${oe}</option>`).join("")}</select></div>`;let[,,R,M,H,G,j=pe=>pe]=m,X=j(Q);return`<div class="irow"><label for="${h}">${$}</label><input type="range" id="${h}" data-path="${p}" min="${R}" max="${M}" step="${H}" value="${Q}">
        <span class="inum-w"><input class="inum" type="number" data-num="${p}" value="${fe(X)}" step="any" aria-label="${$}${G?` (${G})`:""}"><span class="unit">${G}</span></span></div>`}).join("")}let fe=l=>typeof l=="number"?Number.isInteger(l)?String(l):l.toFixed(Math.abs(l)<1?3:2).replace(/0+$/,"").replace(/\.$/,""):l,ze=l=>{for(let m of Object.values(rr)){let p=m[1].find($=>$[0]===l);if(p)return p}for(let m of Object.values(or)){let p=m.find($=>$[0]===l);if(p)return p}return null};function qe(){let l=yt(o.family),m=oo[o.family];_.innerHTML=`
      <div class="ins-head"><p class="kicker">Studio${" \xB7 Beta"}</p><h2>${l.name}${o.family==="orb"?` \xB7 ${lt(o.preset).name}`:""}</h2>
        ${'<p class="access"><span>Early access \u2014 free while we build it. Saves stay on this device.</span></p>'}
        ${o.family==="orb"?`<div class="ins-snd"><label class="vh" for="st-snd">Sound to test</label><select class="gsel" id="st-snd" data-snd>${v.map(([p,$])=>`<option value="${p}"${p===ee?" selected":""}>${$}</option>`).join("")}</select>
          <button class="gb small" type="button" data-testsnd>${f.play}<span>Test with sound</span></button></div>`:""}
        <div class="ins-acts"><button class="gb small" type="button" data-resetpre>Reset to preset</button><span class="sp"></span><button class="gb small" type="button" data-export>Export</button><button class="gb small primary" type="button" data-save>Save</button></div></div>
      <div class="ins-body">
      ${m.map(p=>{let[$,D]=rr[p],Q=p==="interior"?or[o.orb.interior.kind]:[],h=K[p]??!1;return`<section class="igrp"><h3><button type="button" data-tog="${p}" aria-expanded="${h}">${$}<span aria-hidden="true">${h?"\u2212":"+"}</span></button></h3>
          <div class="irows" ${h?"":"hidden"}>${He([...D,...Q])}
          ${p==="voice"?'<div class="irow wide"><button class="gb small" type="button" data-testvoice>Test with a voice sample</button></div>':""}
          ${p==="wave"?'<div class="irow wide"><button class="gb small" type="button" data-trigger>Trigger a wave</button></div>':""}
          </div></section>`}).join("")}
      ${`<div class="ins-ea">${er("studio")}${ut("studio",{compact:!0,label:"Get notified about Studio updates (optional)"})}</div>`}
      </div>`,tr(_,{sfx:p=>r.sfx(p)}),Kt(_),ba(_,{sfx:p=>r.sfx(p)}),_.querySelector("[data-resetpre]").addEventListener("click",()=>{let p={view:o.view,scene:ft().scene},$=o.family,D=o.preset;o={...ft($,D),...p},r.sfx("press"),C(),te()}),_.querySelector("[data-save]").addEventListener("click",ce),_.querySelector("[data-export]").addEventListener("click",Be),_.querySelector("[data-snd]")?.addEventListener("change",p=>{ee=p.target.value}),_.querySelector("[data-testsnd]")?.addEventListener("click",()=>P()),_.querySelectorAll("[data-tog]").forEach(p=>p.addEventListener("click",()=>{K[p.dataset.tog]=!(K[p.dataset.tog]??!1),r.sfx("press"),qe()})),_.querySelectorAll("input[type=range][data-path]").forEach(p=>{p.addEventListener("input",()=>{Re(p.dataset.path,+p.value),Pe(p.dataset.path)}),p.addEventListener("change",()=>{te(),r.sfx("release")})}),_.querySelectorAll("input[type=color][data-path]").forEach(p=>{p.addEventListener("input",()=>{Re(p.dataset.path,p.value);let $=_.querySelector(`[data-hex="${p.dataset.path}"]`);$&&($.value=p.value)}),p.addEventListener("change",te)}),_.querySelectorAll("[data-hex]").forEach(p=>{p.addEventListener("input",$=>{$.isTrusted&&r.sfx("type"),/^#[0-9a-f]{6}$/i.test(p.value)&&(Re(p.dataset.hex,p.value.toLowerCase()),_.querySelector(`input[type=color][data-path="${p.dataset.hex}"]`).value=p.value)}),p.addEventListener("change",()=>{/^#[0-9a-f]{6}$/i.test(p.value)||(p.value=Ot(o,p.dataset.hex)),te()})}),_.querySelectorAll("select[data-path]").forEach(p=>p.addEventListener("change",()=>{Re(p.dataset.path,p.value),r.sfx("press"),p.dataset.path==="orb.interior.kind"&&(A.nudge(.6),qe()),te()})),_.querySelectorAll("[data-num]").forEach(p=>{let $=ze(p.dataset.num),[,,D,Q,,,,h=R=>R]=$;p.addEventListener("input",R=>{R.isTrusted&&r.sfx("type");let M=parseFloat(p.value);if(Number.isFinite(M)){let H=Ce(h(M),D,Q);Re(p.dataset.num,H);let G=_.querySelector(`input[type=range][data-path="${p.dataset.num}"]`);G&&(G.value=H)}}),p.addEventListener("change",()=>{Pe(p.dataset.num),te()}),p.addEventListener("keydown",R=>{R.key==="Enter"&&p.blur()})}),_.querySelector("[data-testvoice]")?.addEventListener("click",()=>{r.prefs.master||r.set({master:!0}),r.play("voice_audition",{kind:"audition"})}),_.querySelector("[data-trigger]")?.addEventListener("click",()=>V())}function Pe(l){let m=_.querySelector(`[data-num="${l}"]`),p=ze(l);m&&p&&(m.value=fe((p[6]??($=>$))(Ot(o,l))))}function Re(l,m){let p=l.split("."),$=o;for(let D of p.slice(0,-1))$=$[D];$[p.at(-1)]=m,l==="rot"&&A.setObjectYaw(m*gt),ve()}let Te={emission:1,voice:{response:.6}};function ve(){let l=e.chamber,m=o.scene,p=o.family;Object.assign(l,{left:m.left,right:m.right,exposure:m.exposure,yaw:o.view.yaw*gt,pitch:o.view.pitch*gt,platform:!1});let D={dark:!0,envBoost:nr(.55,1.6,m.env),exposure:m.exposure,left:m.left,right:m.right};if(p==="orb")d.show(o.orb,D),Te=d.output;else if(p==="orb-slider"){let Q=Ze(lt(o.slider.preset).config);Q.light.strength=o.orb.light.strength,Q.light.colour=o.orb.light.colour,Q.light.x=o.orb.light.x,Q.light.y=o.orb.light.y,d.show(Q,D),Te=d.output}else p==="orb-wave"||p==="background-pack"?(d.show(Ze(lt("original").config),D),Te=d.output):d.hide();A.setView({yaw:p==="orb"?o.view.yaw*gt:0,pitch:p==="orb"?o.view.pitch*gt:0}),p==="orb"&&A.setObjectYaw(o.rot*gt),me.set({strength:o.wave.strength,scale:o.wave.scale,horizon:p==="background-pack"?o.bg.horizon:.3,lamp:o.bg.lamp}),p==="orb-wave"&&me.setExposure(o.wave.exposure),p==="background-pack"&&me.setExposure(o.bg.exposure),z(),x(),be()}function C(){let l=o.family,m=a.querySelector("[data-screen]"),p=a.querySelector("[data-scap]"),$=a.querySelector("[data-kit]");m.hidden=!(l==="orb-wave"||l==="background-pack"),p.hidden=l!=="orb-slider",$.hidden=l!=="crystal-controls",Pt(),e.removeBackdrop(me.canvas),m.hidden||(Yt(m),e.addBackdrop(me.canvas),me.setExposure(l==="background-pack"?o.bg.exposure:o.wave.exposure,!0)),l==="orb-slider"&&(p.innerHTML='<span class="cap-label">slide to enter</span>',p.setAttribute("role","slider"),p.tabIndex=0,p.setAttribute("aria-label","Slide to enter")),l==="crystal-controls"&&($.innerHTML=`<div class="kit-swatch"><button class="gb primary" type="button">Start project</button><button class="gb" type="button">Secondary</button><input class="gi" placeholder="Enter text" aria-label="Example field"><select class="gsel" aria-label="Example select"><option>Select</option><option>Clear</option></select><button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><button class="gb gc" type="button" aria-label="Confirm">${f.check}</button></div>`),$.querySelector(".gsw")?.addEventListener("click",D=>{D.currentTarget.setAttribute("aria-checked",String(D.currentTarget.getAttribute("aria-checked")!=="true")),r.sfx("press")}),$.querySelectorAll(".gb").forEach(D=>D.addEventListener("click",()=>r.sfx("press"))),$.querySelector(".gi")?.addEventListener("input",D=>{D.isTrusted&&r.sfx("type")}),Xe(),qe(),ve()}let S=0;function z(){let l=a.querySelector("[data-scap]");if(!l||l.hidden)return;let m=o.slider,p=m.tint,$=m.tintAmount;l.style.width=`${m.length}px`,l.style.height=`${m.height}px`,l.style.background=`linear-gradient(180deg, ${Et(p,.1+$*.35)}, ${Et(p,.03+$*.2)} 50%, ${Et(p,.08+$*.3)})`}function x(){let l=a.querySelector("[data-kit]");if(!l||l.hidden)return;let m=o.ctl,p=m.depth,$=l.querySelector("style");$||($=document.createElement("style"),l.append($)),$.textContent=`.st-kit .gb,.st-kit .gi,.st-kit .gsel{border-radius:${m.radius}px;-webkit-backdrop-filter:blur(${m.blur}px) saturate(1.5);backdrop-filter:blur(${m.blur}px) saturate(1.5)}
      .st-kit .gb:not(.primary){background:linear-gradient(180deg,${Et(m.tint,.3+m.tintAmount*.4)},${Et(m.tint,.08+m.tintAmount*.3)} 50%,${Et(m.tint,.25+m.tintAmount*.35)});
        box-shadow:inset 0 ${p*.3}px ${p*.2}px rgba(255,255,255,.95),inset 0 -${p*.6}px ${p}px -1px rgba(255,255,255,.75),inset 0 0 0 1px rgba(150,158,166,.18),inset 0 -${p*2}px ${p*2.8}px -${p*2}px rgba(120,128,136,.35),0 1px 1px rgba(40,44,50,.1),0 ${p*2}px ${p*4}px -${p*2}px rgba(40,44,50,.38)}`}let q=null;ie.addEventListener("pointerdown",l=>{q={x:l.clientX,y:l.clientY,v:{...o.view},rot:o.rot,l:{...o.orb.light}},ie.setPointerCapture(l.pointerId),ie.classList.add("grab")}),ie.addEventListener("pointermove",l=>{if(!q)return;let m=l.clientX-q.x,p=l.clientY-q.y;if(Y==="orbit"&&(o.view.yaw=Ce(q.v.yaw-m*.25,-60,60),o.view.pitch=Ce(q.v.pitch+p*.2,-20,35)),Y==="rotate"&&(o.rot=(q.rot+m*.5+540)%360-180,A.setObjectYaw(o.rot*gt)),Y==="light"){let $=d.pose.d||300;o.orb.light.x=Ce(q.l.x+m/$*1.6,-.6,.6),o.orb.light.y=Ce(q.l.y-p/$*1.6,-.8,.6)}ve(),["view.yaw","view.pitch","rot","orb.light.x","orb.light.y"].forEach($=>{Pe($);let D=_.querySelector(`input[type=range][data-path="${$}"]`);D&&(D.value=Ot(o,$))})});let F=()=>{q&&(q=null,ie.classList.remove("grab"),A.nudge(.4),te())};ie.addEventListener("pointerup",F),ie.addEventListener("pointercancel",F),ie.addEventListener("wheel",l=>{o.family==="orb"&&(l.preventDefault(),o.view.zoom=Ce(o.view.zoom-l.deltaY*.001,.6,1.4),Pe("view.zoom"),ve(),clearTimeout(ie._t),ie._t=setTimeout(te,300))},{passive:!1}),ie.addEventListener("keydown",l=>{let m={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[l.key];m&&(l.preventDefault(),Y==="orbit"&&(o.view.yaw=Ce(o.view.yaw-m[0]*5,-60,60),o.view.pitch=Ce(o.view.pitch+m[1]*3,-20,35)),Y==="rotate"&&(o.rot=Ce(o.rot+m[0]*10,-180,180)),Y==="light"&&(o.orb.light.x=Ce(o.orb.light.x+m[0]*.05,-.6,.6),o.orb.light.y=Ce(o.orb.light.y-m[1]*.05,-.8,.6)),ve(),qe(),te())});let J=a.querySelector("[data-scap]"),xe=null;J.addEventListener("pointerdown",l=>{xe={x:l.clientX,v:S},J.setPointerCapture(l.pointerId),r.sfx("press")}),J.addEventListener("pointermove",l=>{xe&&(S=Ce(xe.v+(l.clientX-xe.x)/(J.offsetWidth-J.offsetHeight)))});let we=()=>{xe&&(xe=null,r.sfx("release"),A.nudge(.5),S>.92?(S=1,r.sfx("confirm")):S=0)};J.addEventListener("pointerup",we),J.addEventListener("pointercancel",we),J.addEventListener("keydown",l=>{l.key==="ArrowRight"&&(S=Ce(S+.1)),l.key==="ArrowLeft"&&(S=Ce(S-.1))});function V(){let l=a.querySelector("[data-screen]"),m=l.getBoundingClientRect();me.impact(m.width/2,m.height*(1-.3)+10,o.wave.strength),A.nudge(.8),r.sfx("detent")}a.querySelector("[data-screen]").addEventListener("pointerdown",l=>{if(o.family!=="orb-wave")return;let m=l.currentTarget.getBoundingClientRect();me.impact(l.clientX-m.left,l.clientY-m.top,o.wave.strength),r.sfx("detent")});async function ce(){let l=ke(),m=o.designId||Date.now().toString(36),p=yt(o.family),$=null;try{let H=await e.exportPNG(l,d.element||document.createElement("div"));if(H){let G=await createImageBitmap(H),j=document.createElement("canvas"),X=360;j.width=X,j.height=Math.round(X*l.h/l.w),j.getContext("2d").drawImage(G,0,0,j.width,j.height),$=j.toDataURL("image/jpeg",.78)}}catch{}let D=o.designName||`${p.name}${o.family==="orb"?` \xB7 ${lt(o.preset).name}`:""}`,{designId:Q,designName:h,...R}=o;c.saveDesign({id:m,name:D,family:o.family,familyName:p.name,preset:o.preset,schema:1,at:new Date().toISOString(),draft:R,thumb:$})?(o.designId=m,o.designName=D,be(),r.sfx("confirm"),i("Saved to My Designs (on this device).")):i("Could not save: this browser\u2019s storage is full or unavailable.")}async function Be(){let l=ke(),m={schema:1,product:o.family,preset:o.family==="orb"?o.preset:void 0,config:o.family==="orb"?o.orb:o[{"orb-slider":"slider","orb-wave":"wave","background-pack":"bg","crystal-controls":"ctl"}[o.family]],scene:o.scene,note:"Configuration for The Light Orb renderer (dist/app/orb-config.js). Development export; not a licensed product package."};if($e(new Blob([JSON.stringify(m,null,2)],{type:"application/json"}),`light-orb-${o.family}.json`),d.element&&(o.family==="orb"||o.family==="orb-slider")){let p=await e.exportPNG(l,d.element);p&&$e(p,`light-orb-${o.family}.png`)}r.sfx("confirm"),i("Exported the configuration (JSON)"+(o.family==="orb"||o.family==="orb-slider"?" and a PNG of the view.":"."))}function $e(l,m){let p=document.createElement("a");p.href=URL.createObjectURL(l),p.download=m,document.body.append(p),p.click(),setTimeout(()=>{URL.revokeObjectURL(p.href),p.remove()},1e3)}let re=()=>(Z.offsetHeight||0)+12;function ke(){let l=innerWidth,m=innerHeight;if(l<820){let D=re(),Q=Math.round(m*.54)-D;return{x:0,y:70,w:l,h:Q-70}}let $=_.offsetWidth+32;return{x:0,y:0,w:l-$,h:m}}function Fe(){let l=ke(),m=o.family,p=l.x+l.w/2,$=a.querySelector("[data-screen]"),D=a.querySelector("[data-scap]"),Q=a.querySelector("[data-kit]");ie.style.cssText=`left:${l.x}px;top:${l.y}px;width:${l.w}px;height:${l.h}px`;let h=innerWidth,R=innerHeight,M=h<700,H={warm:0,room:"chamber",stage:l,emission:1,orb:{x:50,y:R-52,d:46,vis:M?0:1}},G=j=>({...H,product:j,grounds:j&&j.ground?[{y:j.ground,x:j.x,d:j.d}]:[]});if(m==="orb"){let j=Math.min(l.w*.4,l.h*.44,460)*o.view.zoom,X=l.y+l.h*.52;return G({x:p,y:X,d:j,vis:1,ground:X+j/2})}if(m==="orb-slider"){let j=o.slider,X=Math.min(1,(l.w-40)/j.length),pe=j.length*X,oe=j.height*X;D.style.left=`${p-pe/2}px`,D.style.top=`${l.y+l.h*.5-oe/2}px`,D.style.width=`${pe}px`,D.style.height=`${oe}px`;let se=oe*.84,Ke=(oe-se)/2;return G({x:p-pe/2+Ke+se/2+S*(pe-oe),y:l.y+l.h*.5,d:se,vis:1,snap:!0})}if(m==="orb-wave"||m==="background-pack"){let j=Math.min(l.w*.78,900),X=Math.min(l.h*.62,j*.62);Object.assign($.style,{left:`${p-j/2}px`,top:`${l.y+l.h*.5-X/2}px`,width:`${j}px`,height:`${X}px`});let pe=m==="background-pack"?o.bg.horizon:.3,oe=Math.min(90,j*.12),se=X*(1-pe)+oe*.1-oe/2;return me.setOrb({x:j/2,y:se,d:oe}),G({x:p,y:l.y+l.h*.5-X/2+se,d:oe,vis:1})}return m==="crystal-controls"&&Object.assign(Q.style,{left:`${l.x+20}px`,top:`${l.y+80}px`,width:`${l.w-40}px`,height:`${l.h-120}px`}),G(null)}return C(),{frame:Fe,reapply:()=>ve(),voiceResponse:()=>o.family==="orb"?o.orb.voice.response:.6,leave(){Pt(),e.removeBackdrop(me.canvas),Z.remove(),_.remove(),document.body.classList.remove("dark-ui"),d.hide(),Object.assign(e.chamber,{yaw:0,pitch:0})},get draft(){return o}}}function Et(e,r){let s=parseInt(e.slice(1),16);return`rgba(${s>>16&255},${s>>8&255},${s&255},${r.toFixed(3)})`}function sr(e){let r=null,s=null,a=null,u={},f={emission:1},i=document.createElement("div");i.className="x-product",i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:31",document.body.append(i);let d={x:-999,y:-999,d:100,vis:0},c={x:-999,y:-999,d:100,vis:0,vx:0,vy:0,vd:0},A=!0;function o(){return r||s||(s=Da({container:i,diameter:240,driven:!0,background:"#f3f3f1"}).then(L=>(r=L,s=null,L.attachPointer(document.createElement("div"))(),L.setBackdrop((v,ee)=>e.drawBackdrop(v,ee,c)),L.setVisibility(0),L.tick(performance.now()),a&&N(),L)).catch(()=>{s=null})),s}function N(){r&&a&&(f=Vt(r,a,u),r.setEmission(Math.min(1.4,f.emission)))}return{get orb(){return r},get element(){return r?.element},get output(){return f},show(L,v={}){a=Ze(L),u=v,A=!1,o(),N()},update(L,v=u){a=Ze(L),u=v,N()},hide(){A=!0,r&&(r.setVisibility(0),r.setView({yaw:0,pitch:0}),r.setObjectYaw(0),r.setSpeech(0),r.tick(performance.now())),c.vis=0,c.x=-999},attachPointer(L){return r?r.attachPointer(L,{range:"volume"}):(o()?.then(v=>v?.attachPointer(L,{range:"volume"})),null)},frame(L){if(!r)return;if(!L||A){(c.vis>0||r.element.style.visibility!=="hidden")&&(c.vis=0,r.setVisibility(0),r.tick(performance.now()));return}let v=1/60,ee=9;if(L.snap||c.x<-900)Object.assign(c,{x:L.x,y:L.y,d:L.d,vx:0,vy:0,vd:0});else for(let P of["x","y","d"]){let Y="v"+P;c[Y]+=(ee*ee*(L[P]-c[P])-2*ee*c[Y])*v,c[P]+=c[Y]*v}c.vis+=((L.vis??1)-c.vis)*.2,r.holdRaster(Math.ceil(Math.max(c.d,L.d,120)*1.06)),r.setPose({x:c.x,y:c.y,diameter:c.d}),r.setVisibility(c.vis),r.tick(performance.now())},pose:c}}var xa=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null,dr=!!xa;function cr({onresult:e,onend:r,onerror:s}){if(!xa)return s?.("unsupported"),null;let a=new xa;a.lang=navigator.language||"en-US",a.interimResults=!0,a.maxAlternatives=1,a.continuous=!1;let u="",f="";a.onresult=i=>{f=[...i.results].map(d=>d[0].transcript).join(" "),i.results[i.results.length-1].isFinal&&(u=f),e?.(f,!!u)},a.onerror=i=>s?.(i.error),a.onend=()=>r?.(u||f);try{a.start()}catch{return s?.("busy"),null}return a}var lr=e=>String(e).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),et=(e,...r)=>r.some(s=>new RegExp(`\\b${s}\\b`).test(e)),no={home:["home","start","beginning","inicio","principio","portada"],products:[...Le[0].words,"productos","producto","tienda","objetos"],templates:[...Le[1].words,"plantillas","plantilla","composiciones"],studio:[...Le[2].words,"estudio","editar","personalizar","disenar"],sound:[...Le[3].words,"sonido","sonidos","voces","escuchar","audio"],membership:["membership","member","plans","plan","pricing","price","prices","membresia","miembro","planes","precio","precios","cuesta","cost"],account:["account","profile","downloads","cuenta","perfil","descargas"],signin:["sign in","log in","login","iniciar sesion","entrar"]},io={home:"#/",membership:"#/membership",account:"#/account",signin:"#/signin"},so={"orb-slider":["slider","deslizador"],"orb-wave":["wave","ola","onda","ripple"],"background-pack":["background","backgrounds","fondo","fondos"],"crystal-controls":["controls","buttons","controles","botones","crystal"]},We=(e,r={})=>({say:e.text,id:e.id,...r});function pr(e,{here:r,presentation:s}){let a=lr(e);if(!a)return We(Qe("reply.missed"),{intent:"fallback"});if(a.split(" ").length<=3&&et(a,"stop","quiet","silence","shh","para","calla","callate","silencio","basta"))return{say:"",stop:!0,command:!0};if(et(a,"where am i","where are we","donde estoy","donde estamos","que es esto","what is this","what is here","que hay aqui"))return We(s(),{intent:"where"});if(et(a,"help","what can you do","what can i do","ayuda","ayudame","que puedes hacer","que puedo hacer"))return We(Qe("reply.help"),{intent:"help"});if(et(a,"thank you","thanks","gracias"))return We(Qe("reply.thanks"),{intent:"thanks"});if(et(a,"who are you","what are you","quien eres","que eres","como te llamas","your name"))return We(Qe("reply.who"),{intent:"who"});if(et(a,"back","go back","atras","volver","vuelve"))return We(Qe("reply.back"),{back:!0,command:!0});for(let[f,i]of Object.entries(so))if(et(a,...i)){let d=je.find(c=>c.id===f);if(d)return We(Ya(d),{go:`#/products/${f}`,quiet:!0,command:!0})}let u=De.find(f=>a.includes(lr(f.name)));if(u)return We(Ua(u),{go:`#/templates/${u.id}`,quiet:!0,command:!0});for(let[f,i]of Object.entries(no))if(et(a,...i))return f===r?We(Va(s()),{command:!0}):{go:io[f]??`#/${f}`,command:!0};return et(a,"the orb","orb","esfera","la orb","bola")?We(Xa(),{go:`#/products/${je[0].id}`,quiet:!0}):et(a,"hello","hi","hey","hola","buenas","buenos dias","buenas tardes","buenas noches")?We(Qe("reply.hello"),{intent:"hello"}):We(Qe("reply.unknown"),{intent:"fallback"})}var ur=()=>!!Ft,lo=/^#\/(products(\/[a-z0-9-]+)?|templates(\/[a-z0-9-]+)?|studio|sound|membership|account)?$/;async function gr(e,r,{timeout:s=8e3}={}){if(!Ft)throw new Error("disabled");let a=new AbortController,u=setTimeout(()=>a.abort(),s);try{let f=await fetch(Ft,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({messages:e,page:r}),signal:a.signal});if(!f.ok)throw new Error(`http ${f.status}`);let i=await f.json(),d=typeof i.say=="string"?i.say.trim().slice(0,600):"";if(!d)throw new Error("empty");return{say:d,go:typeof i.go=="string"&&lo.test(i.go)?i.go:void 0}}finally{clearTimeout(u)}}var co=/\b(el|la|los|las|que|para|con|una|un|es|est[aá]|aqu[ií]|hola|puedes|quieres|de|y|tu|te|me|por|del)\b/gi,fr=e=>/[ñ¿¡]/i.test(e)||(String(e).match(co)?.length??0)>=3;var hr={},mr={member:""},br="",xr=e=>"",va=e=>(location.assign(e),!0),Ue={get enabled(){return!1},canCheckout:e=>!!e.length&&e.every(r=>xr(r.id)),canSubscribe:e=>!!!1,canRestore:()=>!!!1,checkout(e){return Ue.canCheckout(e)?(va(xr(e[0].id)),e[0].id):null},subscribe(e){return Ue.canSubscribe(e)?va(mr[e]):!1},restore(){return Ue.canRestore()?va(br):!1}};var Ae={saved:"lightorb:saved",designs:"lightorb:designs",profile:"lightorb:profile"},rt=(e,r)=>{try{return JSON.parse(localStorage.getItem(e))??r}catch{return r}},It=(e,r)=>{try{return localStorage.setItem(e,JSON.stringify(r)),!0}catch{return!1}},Me={saved:()=>rt(Ae.saved,[]),isSaved:(e,r)=>rt(Ae.saved,[]).some(s=>s.type===e&&s.id===r),toggleSaved(e,r,s,a){let u=rt(Ae.saved,[]),f=u.findIndex(i=>i.type===e&&i.id===r);return f>=0?u.splice(f,1):u.unshift({type:e,id:r,name:s,href:a,at:new Date().toISOString()}),It(Ae.saved,u),f<0},designs:()=>rt(Ae.designs,[]),design:e=>rt(Ae.designs,[]).find(r=>r.id===e),saveDesign(e){let r=rt(Ae.designs,[]),s=r.findIndex(a=>a.id===e.id);return s>=0?r[s]=e:r.unshift(e),It(Ae.designs,r.slice(0,40))},renameDesign(e,r){let s=rt(Ae.designs,[]),a=s.find(u=>u.id===e);a&&(a.name=r,It(Ae.designs,s))},deleteDesign(e){It(Ae.designs,rt(Ae.designs,[]).filter(r=>r.id!==e))},profile:()=>rt(Ae.profile,null),setProfile:e=>It(Ae.profile,e)},vr=[["profile","Profile"],["designs","My Designs"],["saved","Saved"],["downloads","Downloads"]],uo='<p class="note">Local preview: accounts are not connected yet. What you see here is kept in this browser only.</p>';function $t(e,r,s="profile"){let{esc:a,audio:u}=r;vr.some(d=>d[0]===s)||(s="profile");let f=Me.profile();e.innerHTML=`
    <section class="dest acct">
      <header class="dh"><p class="kicker">Account</p><h1>${f?.name?a(f.name):"Your space"}</h1>${uo}</header>
      <nav class="segbar acct-tabs" aria-label="Account">${vr.map(([d,c])=>`<a class="pill" href="#/account/${d}" ${d===s?'aria-current="page" aria-pressed="true"':""}>${c}</a>`).join("")}</nav>
      <div class="acct-body" data-body></div>
    </section>${r.footer()}`;let i=e.querySelector("[data-body]");if(s==="profile"&&(i.innerHTML=`<form class="form" data-prof>
        <label class="fl"><span>Display name</span><input class="gi" name="name" value="${a(f?.name||"")}" placeholder="How the site greets you" maxlength="40"></label>
        <div class="acts"><button class="gb primary" type="submit">Save on this device</button>${f?'<button class="gb" type="button" data-forget>Forget</button>':""}</div>
        <p class="note">Sign-in and email are not available yet. <a href="#/signin">About signing in</a></p>
      </form>
      <div class="kv"><span>Sound</span><b>${u.prefs.master?"On":"Off"}</b><span>Narration</span><b>${u.prefs.guide?"On":"Off"}</b><span>Guide voice</span><b>${a(u.prefs.voice)}</b><span>Membership</span><b>Not available yet</b></div>`,i.querySelector("[data-prof]").addEventListener("submit",d=>{d.preventDefault();let c=d.target.name.value.trim();Me.setProfile(c?{name:c}:null),u.sfx("confirm"),$t(e,r,"profile")}),i.querySelector("[data-prof] .gi").addEventListener("input",d=>{d.isTrusted&&u.sfx("type")}),i.querySelector("[data-forget]")?.addEventListener("click",()=>{try{localStorage.removeItem(Ae.profile)}catch{}$t(e,r,"profile")})),s==="designs"){let d=Me.designs();i.innerHTML=d.length?`<div class="dgrid">${d.map(c=>`<article class="dc" data-d="${c.id}">
        <a class="dc-img" href="#/studio?design=${c.id}" aria-label="Open ${a(c.name)} in Studio">${c.thumb?`<img src="${c.thumb}" alt="">`:""}</a>
        <input class="dc-n gi" value="${a(c.name)}" aria-label="Design name" maxlength="48">
        <p class="note">${a(c.familyName)} \xB7 ${new Date(c.at).toLocaleDateString()}</p>
        <div class="acts"><a class="gb small primary" href="#/studio?design=${c.id}">Open in Studio</a><button class="gb small" type="button" data-del>Delete</button></div></article>`).join("")}</div>`:'<div class="empty"><h2>No designs yet</h2><p>Designs you save in Studio appear here, with a picture of each one.</p><a class="gb primary" href="#/studio">Open Studio</a></div>',i.querySelectorAll("[data-d]").forEach(c=>{let A=c.dataset.d,o=c.querySelector(".dc-n");o.addEventListener("change",()=>{Me.renameDesign(A,o.value.trim()||"Untitled design"),u.sfx("confirm")}),o.addEventListener("input",N=>{N.isTrusted&&u.sfx("type")}),c.querySelector("[data-del]").addEventListener("click",()=>{confirm(`Delete \u201C${o.value}\u201D? This cannot be undone.`)&&(Me.deleteDesign(A),u.sfx("close"),$t(e,r,"designs"))})})}if(s==="saved"){let d=Me.saved();i.innerHTML=d.length?`<ul class="slist">${d.map((c,A)=>`<li><span class="kicker">${c.type}</span><a href="${c.href}">${a(c.name)}</a><button class="pill" type="button" data-rm="${A}">Remove</button></li>`).join("")}</ul>`:'<div class="empty"><h2>Nothing saved yet</h2><p>Save products, templates and sounds to find them here.</p><a class="gb primary" href="#/products">Explore products</a></div>',i.querySelectorAll("[data-rm]").forEach(c=>c.addEventListener("click",()=>{let A=d[+c.dataset.rm];Me.toggleSaved(A.type,A.id),u.sfx("close"),$t(e,r,"saved")}))}s==="downloads"&&(i.innerHTML=`<div class="empty"><h2>No downloads yet</h2><p>Pieces you buy will be listed here once purchasing opens. Studio exports are saved directly to your computer.</p>${Ue.canRestore()?'<a class="gb primary" href="#" data-restore>Find my purchases</a>':""}</div>`),i.querySelector("[data-restore]")?.addEventListener("click",d=>{d.preventDefault(),Ue.restore()})}function ya(e,r,s){e.innerHTML=`
    <section class="dest sign">
      <header class="dh"><p class="kicker">Account</p><h1>${s==="in"?"Sign in":"Create an account"}</h1></header>
      <form class="form" data-sign novalidate>
        <label class="fl"><span>Email</span><input class="gi" type="email" name="email" autocomplete="email" disabled></label>
        <label class="fl"><span>Password</span><input class="gi" type="password" name="pw" autocomplete="${s==="in"?"current-password":"new-password"}" disabled></label>
        <div class="acts"><button class="gb primary" type="submit" disabled>${s==="in"?"Sign in":"Create account"}</button><a class="gb" href="#/account">Continue on this device</a></div>
        <p class="note">${"Accounts are not needed during early access."} Until then nothing is sent and no password is collected; your saved work stays in this browser.</p>
        <p class="note">${s==="in"?'New here? <a href="#/signup">Create an account</a>':'Already have one? <a href="#/signin">Sign in</a>'}</p>
      </form>
    </section>${r.footer()}`}function yr(e,r){let s=Ba;e.innerHTML=`
    <section class="dest memb">
      <header class="dh"><p class="kicker">Membership</p><h1>${s.promise}</h1>${'<p class="dh-l">Early access: everything is free while we build it. What you take now stays free to use. Paid plans come later, and early users get a launch discount.</p>'}</header>
      <div class="plans">${s.plans.map(a=>`<article class="plan${a.id==="member"?" em":""}"><h2>${a.name}</h2><p>${a.line}</p><ul>${a.points.map(u=>`<li>${u}</li>`).join("")}</ul>
        ${a.id==="ready"?'<a class="gb" href="#/products">Explore products</a>':a.id==="studio"?`<a class="gb" href="#/studio">${"Open Studio \xB7 free"}</a>`:Ue.canSubscribe(a.id)?`<button class="gb primary" type="button" data-join="${a.id}">Join</button>`:`<button class="gb primary" type="button" disabled aria-disabled="true">${s.open?"Join":"Membership opens soon"}</button>`}</article>`).join("")}</div>
      ${ut("membership")}
    </section>${r.footer()}`,e.querySelectorAll("[data-join]").forEach(a=>a.addEventListener("click",()=>Ue.subscribe(a.dataset.join)))}var go=`<svg class="wm-o" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><defs><mask id="wm-counter"><rect width="100" height="100" fill="#fff"/>
  <path fill="#000" d="M49 9C31 9 23 29 23 50c0 24 12 42 30 42 15 0 23-9 23-20 0-9-7-12-11-21-4-9-2-19 0-27 1-9-5-15-16-15z"/></mask></defs>
  <circle cx="50" cy="50" r="46" fill="currentColor" mask="url(#wm-counter)"/></svg>`,wa=`<span class="wm-t">The Light</span>${go}<span class="wm-t wm-rb">rb</span>`;var Dt=[{id:"clear",base:"clear",name:"Clear",line:"Thick clear glass, nothing inside but its own depth."},{id:"smoke",base:"clear",name:"Smoke",line:"Smoked glass, a grey depth that darkens to the rim.",tint:[.6,.62,.65]},{id:"amber",base:"clear",name:"Amber",line:"Warm amber glass, like light through honey.",tint:[1,.8,.52]},{id:"chrome",base:"chrome",name:"Chrome",line:"Liquid chrome that keeps folding the room it reflects."},{id:"gold",base:"chrome",name:"Liquid Gold",line:"Molten gold folding over itself.",tint:[1,.79,.45]},{id:"gunmetal",base:"chrome",name:"Gunmetal",line:"Dark liquid metal with cold highlights.",tint:[.5,.53,.57]},{id:"porcelain",base:"porcelain",name:"Porcelain",line:"Raised porcelain bands with gold edges over dark glass."},{id:"silverline",base:"porcelain",name:"Silverline",line:"Porcelain bands edged in silver over dark glass.",accent:[.82,.84,.88]},{id:"celadon",base:"porcelain",name:"Celadon",line:"Porcelain bands over green celadon glass.",tint:[.22,.36,.3]},{id:"bloom",base:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud."},{id:"lilac",base:"bloom",name:"Lilac",line:"Milky glass holding a slow violet cloud.",tint:[.62,.45,1],accent:[.86,.76,1]},{id:"lagoon",base:"bloom",name:"Lagoon",line:"Milky glass holding a slow sea-blue cloud.",tint:[.2,.62,.9],accent:[.6,.92,.9]},{id:"core",base:"core",name:"Core",line:"Clear glass holding one soft white light at its centre."},{id:"dawn",base:"core",name:"Dawn",line:"Clear glass holding a warm, low light.",tint:[1,.72,.45]},{id:"starlight",base:"points",name:"Starlight",line:"Clear glass full of small points of light that drift and twinkle."},{id:"firefly",base:"points",name:"Firefly",line:"Warm points of light drifting slowly inside the glass.",tint:[1,.78,.4]},{id:"glitter",base:"glitter",name:"Glitter",line:"Fine silver flecks that catch the light as the sphere turns."},{id:"goldleaf",base:"glitter",name:"Gold Leaf",line:"Flakes of gold suspended in clear glass.",tint:[1,.78,.4]},{id:"beads",base:"beads",name:"Beads",line:"Small milky glass beads floating inside the shell."},{id:"pearls",base:"beads",name:"Pearls",line:"Soft pearls with a faint rainbow sheen, floating inside.",tint:[1,.95,.97],accent:[.85,.9,1]}],fo={clear:0,chrome:1,porcelain:2,bloom:3,core:4,points:5,glitter:6,beads:7},wr={0:{tint:[1,1,1],accent:[1,1,1]},1:{tint:[1,1,1],accent:[1,1,1]},2:{tint:[.13,.17,.18],accent:[.86,.64,.3]},3:{tint:[1,.42,.45],accent:[1,.72,.68]},4:{tint:[1,.97,.92],accent:[1,1,1]},5:{tint:[.92,.96,1],accent:[1,1,1]},6:{tint:[.95,.96,1],accent:[1,1,1]},7:{tint:[.97,.97,.96],accent:[1,.9,.95]}},ho=e=>{let r=Dt.find(a=>a.id===e)??Dt[0],s=fo[r.base];return{k:s,tint:r.tint??wr[s].tint,accent:r.accent??wr[s].accent}},mo=`
  uniform mat3 uRot;
  varying vec3 vN; varying vec3 vP; varying vec3 vObj;
  void main() {
    vObj = uRot * position;              // the material turns with the drag
    vN = normalize(normalMatrix * normal);
    vec4 wp = modelViewMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    gl_Position = projectionMatrix * wp;
  }`,bo=`
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
  }`,jt=null;function xo(){if(jt)return jt;let e=document.createElement("canvas"),r=new la({canvas:e,alpha:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0});r.setClearColor(0,0);let s=new na,a=new sa(30,1,.1,20);a.position.set(0,0,4.9);let u=new ja({vertexShader:mo,fragmentShader:bo,transparent:!0,premultipliedAlpha:!0,uniforms:{uKind:{value:0},uTint:{value:new ra(1,1,1)},uAccent:{value:new ra(1,1,1)},uTime:{value:0},uStir:{value:0},uRot:{value:new oa}}});return s.add(new ia(new Ia(1,128,96),u)),jt={r,scene:s,camera:a,mat:u,list:new Set,raf:0},jt}function ka(){let e=jt;e.raf=0;let r=performance.now()/1e3,s=Math.min(devicePixelRatio||1,1.5);for(let u of e.list){if(!u.visible||!u.canvas.isConnected)continue;u.step(r);let f=Math.max(2,Math.round(u.canvas.clientWidth*s)),i=Math.max(2,Math.round(u.canvas.clientHeight*s));(u.canvas.width!==f||u.canvas.height!==i)&&(u.canvas.width=f,u.canvas.height=i),e.r.setSize(f,i,!1),e.camera.aspect=f/i,e.camera.updateProjectionMatrix();{let c=ho(u.kind);e.mat.uniforms.uKind.value=c.k,e.mat.uniforms.uTint.value.fromArray(c.tint),e.mat.uniforms.uAccent.value.fromArray(c.accent)}e.mat.uniforms.uTime.value=u.time,e.mat.uniforms.uStir.value=u.stir,e.mat.uniforms.uRot.value.copy(u.rot),e.r.render(e.scene,e.camera);let d=u.ctx;d.clearRect(0,0,f,i),d.drawImage(e.r.domElement,0,0,f,i)}let a=!1;for(let u of e.list)if(u.visible&&u.canvas.isConnected){a=!0;break}a&&(e.raf=requestAnimationFrame(ka))}function Sa(e,r="clear",{interactive:s=!0,reduced:a=matchMedia("(prefers-reduced-motion: reduce)").matches}={}){let u;try{u=xo()}catch{let P=()=>{};return new Proxy({},{get:()=>P})}let f=document.createElement("canvas");f.className="sph-c",f.setAttribute("aria-hidden","true"),e.append(f);let i={v:.4,vel:a?0:.12},d={v:-.15,vel:0},c={x:0,y:0,tx:0,ty:0},A=new za,o=new Pa,N=performance.now()/1e3,L=null,v={canvas:f,ctx:f.getContext("2d"),kind:r,visible:!1,time:Math.random()*40,stir:0,rot:new oa,step(P){let Y=Math.min(.05,P-N);N=P,L||(i.vel+=((a?0:.12)-i.vel)*Y*.8,d.vel*=Math.exp(-Y*3),d.v+=(-.15-d.v)*Y*.8),i.v+=i.vel*Y,d.v=Math.max(-1.2,Math.min(1.2,d.v+d.vel*Y)),c.x+=(c.tx-c.x)*Y*5,c.y+=(c.ty-c.y)*Y*5,v.stir*=Math.exp(-Y*1.6),v.time+=Y*(a?.3:1)*(1+v.stir*3),o.set(d.v+c.y*.25,i.v+c.x*.35,0,"YXZ"),A.makeRotationFromEuler(o),v.rot.setFromMatrix4(A)}};if(s){f.style.touchAction="pan-y",f.style.cursor="grab",f.addEventListener("pointerdown",K=>{L={x:K.clientX,y:K.clientY,t:performance.now(),moved:!1},f.setPointerCapture(K.pointerId),f.style.cursor="grabbing"}),f.addEventListener("pointermove",K=>{let be=f.getBoundingClientRect();if(c.tx=((K.clientX-be.left)/be.width-.5)*2,c.ty=((K.clientY-be.top)/be.height-.5)*2,!L)return;let te=performance.now(),_=K.clientX-L.x,Z=K.clientY-L.y,ie=Math.max(8,te-L.t)/1e3;Math.hypot(_,Z)>3&&(L.moved=!0),i.v+=_*.01,d.v+=Z*.01,i.vel=_*.01/ie*.6,d.vel=Z*.01/ie*.6,L.x=K.clientX,L.y=K.clientY,L.t=te});let P=K=>{L&&(L.moved||(v.stir=Math.min(1.5,v.stir+1)),L=null,f.style.cursor="grab")};f.addEventListener("pointerup",P),f.addEventListener("pointercancel",P),f.addEventListener("pointerleave",()=>{c.tx=c.ty=0});let Y=!1;f.addEventListener("pointerdown",()=>{Y=!1},!0),f.addEventListener("pointermove",()=>{L?.moved&&(Y=!0)}),f.addEventListener("click",K=>{Y&&(K.preventDefault(),K.stopPropagation())})}let ee=new IntersectionObserver(([P])=>{v.visible=P.isIntersecting,v.visible&&!u.raf&&(u.raf=requestAnimationFrame(ka))});return ee.observe(f),u.list.add(v),u.raf||(u.raf=requestAnimationFrame(ka)),{setKind(P){v.kind=P,v.stir=1},stir(){v.stir=Math.min(1.5,v.stir+1)},dispose(){ee.disconnect(),u.list.delete(v),f.remove()}}}var Ea="Carla Tres Garc\xEDa",kr="39934017Z",Sr="carlatresgarcia@gmail.com",vo="14 October 2026",Er="Avenida Duque de Loul\xE9 91, Lisboa, Portugal",Nt=`<a href="mailto:${Sr}">${Sr}</a>`,yo={privacy:{kicker:"Privacy",title:"Privacy",lede:"What this site collects, why, and what you can ask for. Short version: very little, and nothing is sold.",body:`
    <h2>Who is responsible</h2>
    <p>The Light Orb is run by ${Ea} (NIF ${kr}), a sole trader (the data controller). Address: ${Er}. Contact: ${Nt}.</p>
    <h2>Visiting the site</h2>
    <p>We count visits with GoatCounter, a privacy-friendly analytics service that sets no cookies and does not track you across sites. It records the page address, referrer, browser type, screen size and an approximate country, without storing your IP address. If your browser sends Do Not Track or Global Privacy Control, nothing is counted at all. Legal basis: our legitimate interest in knowing which pages are used.</p>
    <h2>The waitlist</h2>
    <p>If you join the waitlist we keep your email address, the date, where you signed up (for example "footer") and your browser language \u2014 nothing else. It is stored in Cloudflare Workers KV and used only to tell you when pieces open. Legal basis: your consent, which you can withdraw at any time by writing to ${Nt}; we then delete your address.</p>
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
    <p>Under the GDPR you can ask for access, correction, deletion, restriction, portability, or object to processing, and withdraw consent, by writing to ${Nt}. You can also complain to the Spanish Data Protection Agency (AEPD, aepd.es).</p>`},terms:{kicker:"Terms",title:"Terms of use",lede:"The rules for using this website.",body:`
    <h2>Who we are</h2>
    <p>This website is run by ${Ea} (NIF ${kr}), a sole trader. Address: ${Er}. Contact: ${Nt}.</p>
    <h2>Using the site</h2>
    <p>You may browse the site, try the previews, and use Studio and the guide Orb for your own personal or professional exploration. Please do not misuse it: no attempts to break, overload or scrape it, and no unlawful or abusive use of the guide Orb.</p>
    <h2>The guide Orb</h2>
    <p>The Orb's replies are generated automatically and may be incomplete or wrong. They are not professional advice and do not bind us; prices and terms are only those shown on the site.</p>
    <h2>Content and pieces</h2>
    <p>The design, text, images, sounds and code of this site belong to ${Ea} unless stated otherwise. Using the free Orb and any piece you obtain is governed by the <a href="#/licence">licence</a>.</p>
    <h2>Purchases</h2>
    <p>The site is in early access: everything is free and nothing is sold. Purchasing and membership are not open yet. When they open, the price, what you receive and the conditions of each sale \u2014 including your rights as a consumer \u2014 will be shown before you pay.</p>
    <h2>Availability and liability</h2>
    <p>The site is offered as it is and may change or be unavailable at times. We are not liable for indirect losses arising from its use, except where the law does not allow this to be limited. Nothing here limits your rights as a consumer.</p>
    <h2>Law</h2>
    <p>These terms are governed by Spanish law. If you are a consumer, you keep the protection of the law and the courts of your place of residence.</p>`},licence:{kicker:"Licence",title:"Licence",lede:"What you can do with the free Orb and with the pieces when they open.",body:`
    <h2>The free Orb (Original version)</h2>
    <p>Free for personal and commercial use: websites, apps, client work, products. Attribution ("Orb by The Light Orb") is appreciated, not required. You may not resell or redistribute the code itself as a product, template or asset pack, or present it as your own. It includes Three.js (MIT licence).</p>
    <h2>Early access</h2>
    <p>During early access everything on the site is free, including every version of the Orb and Studio. Anything you obtain during early access stays free to use under the licence that applies to it, also after paid plans open.</p>
    <h2>Paid pieces \u2014 personal</h2>
    <p>For your own projects, personal or commercial, by one person. Use the piece in as many of your own projects as you like.</p>
    <h2>Paid pieces \u2014 commercial</h2>
    <p>For one person's client and commercial work: you may build the piece into work you deliver to clients or sell, as long as it is part of a larger work and not offered on its own.</p>
    <h2>Team licence</h2>
    <p>Everyone in one team or company may use the pieces under the commercial terms above.</p>
    <h2>Never allowed</h2>
    <p>Reselling, sharing or redistributing the source files, alone or in a pack, template, library or marketplace, even modified or for free; or using them to build a product that competes with The Light Orb.</p>
    <h2>No warranty</h2>
    <p>Code is provided as it is. Questions about a use not covered here: ${Nt}.</p>`}},$r={privacy:"Privacy",terms:"Terms of use",licence:"Licence"};function Zt(e,r,s){let a=yo[s];e.innerHTML=`
    <section class="dest legal">
      <header class="dh"><p class="kicker">${a.kicker}</p><h1>${a.title}</h1><p class="dh-l">${a.lede}</p></header>
      <div class="legal-b">${a.body}
        <p class="note">Last updated ${vo}. <a href="#/privacy">Privacy</a> \xB7 <a href="#/terms">Terms</a> \xB7 <a href="#/licence">Licence</a></p></div>
    </section>${r.footer()}`}var ot=(e,r=0,s=1)=>Math.min(s,Math.max(r,e)),Tt=(e,r,s)=>e+(r-e)*s,nt=e=>{let r=ot(e);return r*r*(3-2*r)},wo=(e,r,s,a,u)=>nt((e-r)/(s-r))*(1-nt((e-a)/(u-a))),ae=e=>String(e).replace(/[&<>"]/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[r]),ht={get:(e,r)=>{try{return JSON.parse(sessionStorage.getItem(e))??r}catch{return r}},set:(e,r)=>{try{sessionStorage.setItem(e,JSON.stringify(r))}catch{}}},de={play:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>',replay:'<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/></svg>',prev:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',mute:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M4.5 20c1.4-3.6 4.2-5.4 7.5-5.4s6.1 1.8 7.5 5.4"/></svg>',heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/></svg>',back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',down:'<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',bag:'<svg viewBox="0 0 24 24"><path d="M5.5 8.5h13l-1 11h-11z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5.5" y="10.5" width="13" height="9" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',orb:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="11" cy="15" r="1.6" fill="currentColor" stroke="none"/></svg>'},$a={pieces:"products",materials:"products"};function Lr(e){let{orb:r,reduced:s}=e,a=Ga(),u=document.createElement("style");u.textContent=Ka+Ja,document.head.append(u),document.documentElement.classList.add("lo-on");let f=sr(e),i=Tr("main","lo");i.setAttribute("aria-label","The Light Orb"),i.tabIndex=-1;let d=Tr("div","lo-top");document.body.append(i,d),d.innerHTML=`
    <header class="hd" data-hd>
      <a class="wm" href="#/" aria-label="The Light Orb \u2014 Home" data-home>${wa}</a>
      <nav class="nav" aria-label="Main">${Le.map(t=>`<a href="${t.route}" data-nav="${t.id}">${t.label}</a>`).join("")}</nav>
      <div class="hd-r">
        <a class="nav-m" href="#/membership" data-nav="membership">Membership</a>
        <div class="snd">
          <button class="gb gc small" type="button" data-sound aria-haspopup="dialog" aria-expanded="false" aria-label="Sound settings">${de.mute}</button>
          <div class="menu pane" role="dialog" aria-label="Sound" data-menu hidden>
            <label class="mrow"><span>Sound</span><button class="gsw" role="switch" data-pref="master" aria-checked="false" aria-label="Sound"></button></label>
            <label class="mrow"><span>Narration</span><button class="gsw" role="switch" data-pref="guide" aria-checked="true" aria-label="Narration"></button></label>
            <label class="mrow"><span>Interface sounds</span><button class="gsw" role="switch" data-pref="sfx" aria-checked="true" aria-label="Interface sounds"></button></label>
            <div class="mrow col"><span>Volume <output data-volout></output></span><input class="grange" type="range" min="0" max="1" step=".01" data-volume aria-label="Volume"></div>
          </div>
        </div>
        <div class="cartw"${" hidden"}><button class="gb gc small" type="button" data-cartbtn aria-haspopup="dialog" aria-expanded="false" aria-label="Cart">${de.bag}<span class="cart-n" data-cartn hidden></span></button>
          <div class="menu pane cart-p" role="dialog" aria-label="Cart" data-cartp hidden></div></div>
        <a class="gb gc small" href="#/account" aria-label="Account" data-nav="account">${de.user}</a>
      </div>
    </header>
    <button class="guide-hit" type="button" data-guide aria-label="Replay this section"></button>
    <div class="caption" data-caption aria-live="polite"></div>`;let c=d.querySelector("[data-hd]"),A=d.querySelector("[data-caption]"),o=d.querySelector("[data-guide]"),N=d.querySelector("[data-sound]"),L=d.querySelector("[data-menu]"),v=t=>{L.hidden=!t,N.setAttribute("aria-expanded",String(t)),a.sfx(t?"open":"close"),t&&L.querySelector(".gsw").focus()};N.addEventListener("click",()=>v(L.hidden)),document.addEventListener("pointerdown",t=>{!L.hidden&&!t.target.closest(".snd")&&v(!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!L.hidden&&(v(!1),N.focus())}),d.querySelectorAll("[data-pref]").forEach(t=>t.addEventListener("click",()=>{let n=t.dataset.pref;a.set({[n]:!a.prefs[n]}),a.sfx("select")}));let ee=d.querySelector("[data-volume]");ee.addEventListener("input",()=>{a.set({volume:+ee.value}),a.sfx("level",+ee.value)});function P(){let t=a.prefs;d.querySelectorAll("[data-pref]").forEach(g=>g.setAttribute("aria-checked",String(!!t[g.dataset.pref]))),ee.value=t.volume??.8,ee.style.setProperty("--p",`${(t.volume??.8)*100}%`),d.querySelector("[data-volout]").textContent=`${Math.round((t.volume??.8)*100)}%`,N.innerHTML=t.master?de.sound:de.mute,N.setAttribute("aria-label",t.master?"Sound on \u2014 settings":"Sound off \u2014 settings"),i.querySelectorAll("[data-enable]").forEach(g=>{g.hidden=t.master});let n=a.state.clip?.split(".")[0],y=n&&n!=="home"&&a.state.kind==="guide"&&["playing","loading"].includes(a.state.status);A.textContent=y?pa[n]:"",A.classList.toggle("on",!!y)}a.on(P);let Y=d.querySelector("[data-cartbtn]"),K=d.querySelector("[data-cartp]"),be=d.querySelector("[data-cartn]");function te(){let t=Ne.items();be.hidden=!t.length,be.textContent=t.length,K.innerHTML=`<p class="kicker">Cart</p>${t.length?`<ul class="cart-l">${t.map(n=>`<li><a href="${n.href}">${ae(n.name)}</a><button class="pill" type="button" data-cartrm="${n.id}">Remove</button></li>`).join("")}</ul>`:'<p class="note">Your cart is empty.</p>'}
      ${Ue.canCheckout(t)?'<button class="gb primary" type="button" data-checkout>Checkout</button>':'<button class="gb primary" type="button" disabled>Checkout opens soon</button><p class="note">No payment can be taken yet; items stay in this browser.</p>'}`,K.querySelector("[data-checkout]")?.addEventListener("click",()=>{let n=Ue.checkout(Ne.items());n&&Ne.remove(n)}),K.querySelectorAll("[data-cartrm]").forEach(n=>n.addEventListener("click",()=>{Ne.remove(n.dataset.cartrm),a.sfx("close")}))}Ne.on(te),te();let _=t=>{K.hidden=!t,Y.setAttribute("aria-expanded",String(t)),a.sfx(t?"open":"close")};Y.addEventListener("click",()=>_(K.hidden)),document.addEventListener("pointerdown",t=>{!K.hidden&&!t.target.closest(".cartw")&&_(!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!K.hidden&&(_(!1),Y.focus())});let Z={emission:1,voice:ca.voice},ie=()=>{Z=Vt(r,Ze(ca)),r.setRibbon?.(0)};ie();let Xe=()=>({home:"home",products:"products",templates:"templates",studio:"studio",sound:"sound"})[x.name],ge=null,ue=null,He;o.addEventListener("click",()=>{if(a.prefs.master||a.set({master:!0}),a.prefs.guide||a.set({guide:!0}),ve=performance.now()/1e3,Se("orb_tap"),ge){ge.abort(),ge=null,Te("");return}if(a.playing){a.stop();return}if(a.sfx("select"),!dr){z();return}Te("Listening\u2026"),ge=cr({onresult:t=>Te(`\u201C${t}\u201D`),onerror:t=>{ge=null,t==="not-allowed"||t==="service-not-allowed"?(Se("mic_denied"),xt(Qe("reply.mic").text),z()):t!=="aborted"&&t!=="no-speech"&&Te("")},onend:t=>{ge&&(ge=null,Pe(t))}})});let fe=[],ze=0,qe=(t,n)=>{for(fe.push({role:t,content:n});fe.length>12;)fe.shift();for(;fe.length&&fe[0].role!=="user";)fe.shift()};async function Pe(t){let n=pr(t,{here:x.name,presentation:S});if(Se(n.intent==="fallback"?"orb_fallback":"orb_command",{intent:n.intent||(n.stop?"stop":n.back?"back":n.go?`go:${n.go.split("?")[0].replace("#/","")}`:"answer")}),!n.command&&ur()&&t.trim()){let y=++ze;Te("\u2026"),qe("user",t.trim());try{let g=await gr(fe.slice(),{route:location.hash||"#/",title:document.title,presentation:S().text});return y!==ze?void 0:(qe("assistant",g.say),Re({say:g.say,go:g.go,lang:fr(g.say)?"es":"en"}))}catch{if(y!==ze)return;fe.pop()}}Re(n)}function Re(t){if(t.stop){a.stop(),Te("");return}if(t.back&&history.back(),t.go&&location.hash!==t.go){ue=t.say?{text:t.say,id:t.id,lang:t.lang}:null,location.hash=t.go;return}t.say?(xt(t.say),ve=performance.now()/1e3,a.say(t.say,{id:t.id,lang:t.lang})):t.go||Te("")}function Te(t){clearTimeout(ta),A.textContent=t,A.classList.toggle("on",!!t),t||P()}let ve=-99,C=0,S=()=>_a(x.name,x.id);function z(){let{id:t,text:n}=S();xt(n),ve=performance.now()/1e3,a.say(n,{id:t})}let x={name:""},q=null,F=[],J={products:"Products",templates:"Templates",studio:"Studio",sound:"Sound",membership:"Membership",account:"Account",signin:"Sign in",signup:"Sign up",...$r};function xe(){let[t,n=""]=(location.hash.replace(/^#/,"")||"/").split("?"),y=t.split("/").filter(Boolean),g=Object.fromEntries(new URLSearchParams(n));return{name:$a[y[0]]||y[0]||"home",id:y[1]||null,query:g,raw:y[0]}}function we(){let t=xe();if(t.raw&&$a[t.raw]){location.replace(`#/${$a[t.raw]}${t.id?"/"+t.id:""}`);return}if(!["home","products","templates","studio","sound","membership","account","signin","signup","privacy","terms","licence"].includes(t.name)){location.replace("#/");return}F.forEach(I=>I()),F=[],Oe=null,q&&t.name!=="studio"&&(q.leave(),q=null),f.hide(),Pt(),e.removeBackdrop(me.canvas),ie();let n=x.name;x=t,document.title=x.name==="home"?"The Light Orb":`${J[x.name]??x.name} \xB7 The Light Orb`,i.className=`lo r-${x.name}`,document.body.dataset.route=x.name,Ha(),x.name==="studio"&&n!=="studio"&&Se("studio_open"),d.querySelectorAll("[data-nav]").forEach(I=>I.toggleAttribute("aria-current",I.dataset.nav===x.name||I.dataset.nav==="account"&&["account","signin","signup"].includes(x.name))),n&&n!==x.name&&a.state.kind&&a.stop(),({home:m,products:x.id?Or:bt,templates:x.id?Hr:Nr,studio:Fr,sound:Aa,membership:()=>yr(i,$e),account:()=>$t(i,$e,x.id),signin:()=>ya(i,$e,"in"),signup:()=>ya(i,$e,"up"),privacy:()=>Zt(i,$e,"privacy"),terms:()=>Zt(i,$e,"terms"),licence:()=>Zt(i,$e,"licence")}[x.name]??m)(),Kt(i);let g=ht.get(`lo:scroll:${location.hash}`,null);i.scrollTop=g??0;let b=location.hash,w=ue,k=He;ue=null,He=void 0,ge&&(ge.abort(),ge=null),setTimeout(()=>{location.hash===b&&(w?(xt(w.text),ve=performance.now()/1e3,a.say(w.text,{id:w.id,lang:w.lang})):z())},450),n&&i.focus({preventScroll:!0})}i.addEventListener("scroll",()=>ht.set(`lo:scroll:${location.hash}`,i.scrollTop),{passive:!0});let V=0,ce=0,Be=!1;i.addEventListener("scroll",()=>{if(x.name!=="home"||Be){V=i.scrollTop;return}let t=i.scrollTop>V;V=i.scrollTop,clearTimeout(ce),ce=setTimeout(()=>{let n=innerHeight,y=i.scrollTop/n,g=i.querySelector("#select")?.offsetTop??0,b=i.querySelector(".qt");if(!b||!g)return;let w=(b.offsetTop+b.offsetHeight-n)/n;y<=w+.02||i.scrollTop>=g-4||(Be=!0,i.scrollTo({top:t?g:b.offsetTop+b.offsetHeight-n,behavior:s?"auto":"smooth"}),setTimeout(()=>{Be=!1,V=i.scrollTop},s?50:900))},90)},{passive:!0}),addEventListener("hashchange",we),d.querySelector("[data-home]").addEventListener("click",t=>{t.preventDefault(),ht.set("lo:scroll:#/",0),x.name==="home"?i.scrollTo({top:0,behavior:s?"auto":"smooth"}):location.hash="#/"});let $e={page:i,audio:a,ICON:de,esc:ae,store:Me,go:t=>{location.hash=t},flash:xt,api:e,product:f,footer:()=>G()},re=ht.get("lo:sel",0),ke=[],Fe=new URLSearchParams(location.search).get("sel");Fe&&ht.set("lo:selv",Fe);let l=ht.get("lo:selv","arc")==="grid";function m(){if(i.innerHTML=`
      <section class="wel" aria-labelledby="hello">
        <div class="wel-copy" data-welcopy>
          <h1 id="hello" class="wel-h"><span>Hello.</span></h1>
          <p class="wel-line">A space for creative possibilities.</p>
          <a class="gb primary wel-go" href="#select" data-go>Let\u2019s go</a>
        </div>
        <div class="wel-ctl"><button class="gb small" type="button" data-enable>${de.sound}<span>Enable sound</span></button><a class="tl" href="intro.html">Replay intro</a></div>
      </section>
      <section class="qt" aria-label="Quotation">
        <figure class="qt-fig" data-qt><blockquote><p>${qt.text}</p></blockquote>
          <figcaption>${qt.author} \xB7 <a href="${qt.source}" rel="noopener" target="_blank">${qt.work}</a></figcaption></figure>
      </section>
      <section class="sel${l?" sel-grid":""}" id="select" aria-labelledby="sel-t">
        <h2 id="sel-t" class="sel-t">Where would you like to begin?</h2>
        ${l?`<nav class="dg" aria-label="Destinations">${Le.map((t,n)=>`<a class="dg-c" href="${t.route}" data-c="${n}">${$(t)}<span class="dg-t">${t.label}</span><span class="dg-s">${t.line}</span></a>`).join("")}</nav>`:`<div class="arc" data-arc role="group" aria-roledescription="carousel" aria-label="Destinations">
          ${Le.map((t,n)=>`<a class="arc-c" href="${t.route}" data-c="${n}" aria-label="${t.label}: ${t.line}">${$(t,"arc-img")}<span class="arc-l">${t.label}</span><span class="arc-s">${t.line}</span></a>`).join("")}
        </div>
        <div class="arc-ctl"><button class="gb gc small" type="button" data-step="-1" aria-label="Previous">${de.prev}</button>
          <div class="segbar" role="tablist" aria-label="Choose destination">${Le.map((t,n)=>`<button class="pill" role="tab" type="button" data-dot="${n}">${t.label}</button>`).join("")}</div>
          <button class="gb gc small" type="button" data-step="1" aria-label="Next">${de.next}</button></div>`}
      </section>
      ${G()}`,ke=[...i.querySelectorAll("[data-c]")],i.querySelector("[data-go]").addEventListener("click",t=>{t.preventDefault(),a.sfx("select"),i.scrollTo({top:i.scrollTop+i.querySelector("#sel-t").getBoundingClientRect().top-110,behavior:s?"auto":"smooth"})}),i.querySelector("[data-enable]").addEventListener("click",()=>{Se("sound_enable"),a.set({master:!0}),a.sfx("confirm"),z()}),l)ke.forEach((t,n)=>{t.addEventListener("pointerenter",()=>D(n)),t.addEventListener("focus",()=>D(n)),t.addEventListener("click",()=>{a.sfx("open"),Se("destination",{id:Le[n].id})})}),Q(!0);else{i.querySelectorAll("[data-step]").forEach(n=>n.addEventListener("click",()=>D(re+ +n.dataset.step))),i.querySelectorAll("[data-dot]").forEach(n=>n.addEventListener("click",()=>D(+n.dataset.dot))),ke.forEach((n,y)=>n.addEventListener("click",g=>{if(M){g.preventDefault();return}y!==re?(g.preventDefault(),D(y)):(a.sfx("open"),Se("destination",{id:Le[y].id}))}));let t=i.querySelector("[data-arc]");t.addEventListener("keydown",n=>{n.key==="ArrowRight"&&(D(re+1),n.preventDefault()),n.key==="ArrowLeft"&&(D(re-1),n.preventDefault())}),H(t,n=>D(re+n),()=>Q()),Q(!0)}i.querySelector("[data-welcopy]").classList.add(s?"shown":"reveal"),P()}function p(t){let n=String(Le.indexOf(t)+1).padStart(2,"0");return`<span class="arc-img cv cv-${t.id}"><span class="cv-grain"></span><span class="cv-n">${n}</span><span class="cv-t">${t.label}</span></span>`}function $(t,n=""){let y={products:'<img src="./media/cards/products.jpg" alt="" loading="lazy">',templates:'<span class="dg-win"><img src="./media/templates/the-light-orb.cover.jpg" alt="" loading="lazy"></span>',studio:'<img src="./media/cards/orb-dark.jpg" alt="" loading="lazy">',sound:`<span class="cv-wave">${[.3,.55,.8,.45,.95,.6,.35,.7,.5,.85,.4,.65,.3,.5].map(g=>`<i style="--h:${g}"></i>`).join("")}</span>`}[t.id];return`<span class="dg-img dg-${t.id} ${n}">${y}</span>`}function D(t,n=!0){let y=ot(t,0,Le.length-1);y!==re&&(re=y,ht.set("lo:sel",re),n&&a.sfx("detent"),r.nudge?.(.5)),Q()}function Q(t){if(l){ke.forEach((g,b)=>g.classList.toggle("on",b===re));return}let n=ke[0]?.offsetWidth||300,y=n*.7;ke.forEach((g,b)=>{let w=b-re+h/(y*1.2),k=Math.abs(w);g.style.transition=t||R?"none":"",g.style.transform=`translateX(${w*y}px) translateZ(${-k*150}px) rotateY(${ot(-w*30,-48,48)}deg) scale(${1-Math.min(k,2)*.1})`,g.style.zIndex=String(10-Math.round(k)),g.classList.toggle("on",b===re),g.tabIndex=b===re?0:-1,g.setAttribute("aria-current",b===re?"true":"false")}),i.querySelectorAll("[data-dot]").forEach((g,b)=>g.setAttribute("aria-selected",String(b===re))),i.querySelectorAll("[data-step]").forEach(g=>{g.disabled=+g.dataset.step<0&&re===0||+g.dataset.step>0&&re===Le.length-1})}let h=0,R=!1,M=!1;function H(t,n,y){let g=0,b=0,w=null,k=null;t.addEventListener("pointerdown",T=>{T.button||(g=T.clientX,b=T.clientY,w=T.pointerId,k=null,M=!1)}),t.addEventListener("pointermove",T=>{if(T.pointerId!==w)return;let O=T.clientX-g,B=T.clientY-b;!k&&Math.hypot(O,B)>8&&(k=Math.abs(O)>Math.abs(B)*1.2?"x":"y",k==="x"&&(t.setPointerCapture(w),R=!0)),k==="x"&&(h=O,M=!0,y())});let I=T=>{if(T.pointerId===w){if(w=null,R=!1,k==="x"){let O=h<-60?1:h>60?-1:0;h=0,n(O),y(),setTimeout(()=>{M=!1},0)}k=null}};t.addEventListener("pointerup",I),t.addEventListener("pointercancel",I),t.addEventListener("dragstart",T=>T.preventDefault());let W=0,E=0;t.addEventListener("wheel",T=>{if(Math.abs(T.deltaX)<=Math.abs(T.deltaY))return;T.preventDefault();let O=performance.now();O<E||(W+=T.deltaX,Math.abs(W)>60&&(n(Math.sign(W)),W=0,E=O+380))},{passive:!1})}function G(){return`<footer class="ft"><a href="#/" class="wm small" aria-label="The Light Orb \u2014 Home">${wa}</a>
      <nav aria-label="Footer"><a href="#/membership">Membership</a><a href="#/account">Account</a><a href="intro.html">Replay intro</a></nav>
      <nav aria-label="Legal"><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a><a href="#/licence">Licence</a></nav>
      <span class="ft-n">${"Early access \xB7 everything is free while we build it."}</span>
      ${x.name==="membership"?"":ut("footer",{compact:!0})}</footer>`}let j=0,X={"orb-slider":[{id:"light",name:"Light",line:"Clear glass on a light page."},{id:"dark",name:"Dark",line:"Smoked glass for dark pages.",cls:"v-dark"},{id:"frost",name:"Frost",line:"Frosted white glass, softer and brighter.",cls:"v-frost"},{id:"compact",name:"Compact",line:"A slimmer capsule for tight layouts.",cls:"v-compact"}],"orb-wave":[{id:"gentle",name:"Gentle",line:"Wide, soft ripples.",p:{strength:.6,scale:110}},{id:"classic",name:"Classic",line:"The ripple from the intro.",p:{strength:1,scale:70}},{id:"deep",name:"Deep",line:"Tight, strong rings.",p:{strength:1.6,scale:45}},{id:"rain",name:"Rain",line:"Many small, quick rings, like drops on water.",p:{strength:.5,scale:28}}],"background-pack":[{id:"classic",name:"Classic",line:"The horizon as in the intro.",p:{horizon:.3,lamp:.9}},{id:"wide",name:"Wide floor",line:"A low horizon and more floor.",p:{horizon:.18,lamp:.9}},{id:"high",name:"High horizon",line:"A high horizon and more sky.",p:{horizon:.45,lamp:.9}},{id:"lantern",name:"Lantern",line:"A brighter lamp around the Orb in the dark world.",p:{horizon:.3,lamp:1.6}}],"crystal-controls":[{id:"light",name:"Light",line:"Clear glass for light pages."},{id:"dark",name:"Dark",line:"Smoked glass for dark pages.",cls:"v-dark"},{id:"frost",name:"Frost",line:"Frosted white glass with softer edges.",cls:"v-frost"},{id:"compact",name:"Compact",line:"Smaller controls for dense interfaces.",cls:"v-compact"}]},pe={"orb-slider":'<span class="mini-cap"><span class="cap-l">slide to enter</span><i class="mini-orb"></i></span>',"crystal-controls":'<span class="mini-kit"><span class="gb primary small">Continue</span><span class="gb small">Secondary</span><span class="gsw" aria-checked="true"></span><span class="gi">Your name</span></span>'},oe=[...Dt.map(t=>({id:`orb-${t.id}`,fam:"orb",variant:t.id,sphere:t.id,ext:".orb",name:t.id==="clear"?"The Orb":`The Orb \xB7 ${t.name}`,kind:t.line,href:`#/products/orb${t.id==="clear"?"":`?variant=${t.id}`}`})),...je.filter(t=>t.id!=="orb").flatMap(t=>X[t.id].map((n,y)=>({id:y?`${t.id}-${n.id}`:t.id,fam:t.id,variant:y?n.id:null,ext:".kit",name:`${t.name} \xB7 ${n.name}`,kind:n.line,mini:pe[t.id],cls:n.cls,img:pe[t.id]?null:`./media/products/${t.id}.jpg`,pos:t.id==="background-pack"?`50% ${Math.round(30+(n.p.horizon-.3)*160)}%`:null,href:`#/products/${t.id}${y?`?variant=${n.id}`:""}`})))],se="Free \xB7 Early access",Ke=(t,n="")=>"";function _e(t){t.querySelectorAll("[data-cart]").forEach(n=>n.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation();let g=oe.find(w=>w.id===n.dataset.cart)||Wr().find(w=>w.id===n.dataset.cart),b=Ne.toggle({id:g.id,name:g.name,href:g.href||"#/sound"});b&&Se("add_to_cart",{item:g.id}),n.setAttribute("aria-pressed",String(b)),n.querySelector("span").textContent=b?"In cart":"Add to cart",a.sfx(b?"confirm":"select")}))}let dt=(t,n,y)=>`<button class="gb small" type="button" data-fsave="${t}|${n}" data-name="${ae(y)}" aria-pressed="${Me.isSaved(t,n)}">${de.heart}<span>${Me.isSaved(t,n)?"Saved":"Save"}</span></button>`;function ct(t,n){t.querySelectorAll("[data-fsave]").forEach(y=>y.addEventListener("click",g=>{g.preventDefault(),g.stopPropagation();let[b,w]=y.dataset.fsave.split("|"),k=Me.toggleSaved(b,w,y.dataset.name,n(b,w));k&&Se("save",{kind:b,item:w}),y.setAttribute("aria-pressed",String(k)),y.querySelector("span").textContent=k?"Saved":"Save",a.sfx(k?"confirm":"select")}))}function bt(){let t=n=>`<article class="file glass" data-href="${n.href}">
        <div class="file-v ${n.cls??""}"${n.sphere?` data-sphere="${n.sphere}"`:""}>${n.img?`<img src="${n.img}" alt="" draggable="false" loading="lazy"${n.pos?` style="object-position:${n.pos}"`:""}>`:""}${n.mini??""}<span class="file-ext">${n.ext}</span></div>
        <div class="file-m"><h3><a class="file-link" href="${n.href}">${ae(n.name)}</a></h3><p>${ae(n.kind)}</p><p class="file-p">${se}</p></div>
        <div class="file-a">${`<a class="gb small" href="${n.href}">${n.fam==="orb"?"Get it free":"Coming to early access"}</a>`}${dt("product",n.id,n.name)}<a class="gb small primary" href="#/studio?family=${n.fam}${n.variant?`&preset=${n.variant}`:""}">Go to Studio</a></div></article>`;i.innerHTML=`
      <section class="dest shop">
        <header class="dh"><h1>Products</h1></header>
        <div class="file-grid">${oe.map(t).join("")}</div>
      </section>${G()}`,_e(i),ct(i,(n,y)=>oe.find(g=>g.id===y)?.href??"#/products"),i.querySelectorAll(".file[data-href]").forEach(n=>n.addEventListener("click",y=>{y.defaultPrevented||y.target.closest("button, a")||(a.sfx("open"),location.hash=n.dataset.href)})),i.querySelectorAll("[data-sphere]").forEach(n=>{let y=Sa(n,n.dataset.sphere,{reduced:s});F.push(()=>y.dispose())})}function Or(){let t=yt(x.id);if(!t){location.replace("#/products");return}let n=t.id==="orb"?Dt:X[t.id],y=n.some(k=>k.id===x.query.variant)?x.query.variant:n[0].id,g=k=>n.find(I=>I.id===k),b=k=>t.id==="orb"?`orb-${k}`:k===n[0].id?t.id:`${t.id}-${k}`;i.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/products">${de.back}<span>Products</span></a>
        <div class="pd-grid">
          <div class="pd-stage glass" data-stage>${jr(t.id)}</div>
          <div class="pd-info">
            <p class="kicker">${ae(t.id==="orb"?"Sphere":t.kind)}</p><h1>${ae(t.name)}</h1>
            <p class="lede">${ae(ea[t.id].lede)}</p>
            ${n?`<div class="vars"><p class="lbl">Version</p><div class="segbar" role="radiogroup" aria-label="Version">${n.map(k=>`<button class="pill" role="radio" type="button" data-variant="${k.id}" aria-checked="${k.id===y}">${k.name}</button>`).join("")}</div><p class="var-line" data-vline></p></div>`:""}
            <p class="price" data-price>${se}</p>
            <div class="acts eq">${t.id==="orb"?`<button class="gb small primary" type="button" data-getfree>${de.check}<span>Get it free</span></button>`:'<button class="gb small primary" type="button" data-soon aria-expanded="false" aria-controls="ea-wait"><span>Coming to early access</span></button>'}${dt("product",b(y),t.name)}</div>
            ${t.id==="orb"?Pr():`<div class="ea-wait" id="ea-wait" hidden>${ut("product",{compact:!0,label:`Get an email when ${ae(t.name)} is ready to take, free`})}</div>`}
            ${`<a class="studio-lock" href="#/studio?family=${t.id}">${de.check}<span><b>Customise in Studio</b><small>Open to everyone \xB7 Beta</small></span></a>`}
            <dl class="facts"><dt>What it does</dt><dd>${ae(ea[t.id].does)}</dd><dt>You receive</dt><dd>${t.receives.map(ae).join(" \xB7 ")}</dd></dl>
            <details class="acc"><summary>Compatibility and installation</summary><p>${ae(ea[t.id].tech)}</p></details>
          </div>
        </div>
      </section>${G()}`,_e(i),ct(i,(k,I)=>`#/products/${t.id}`),Dr(t.id,i.querySelector("[data-stage]"),y),Se("product_open",{product:t.id,variant:y});let w=k=>{Oe.sphere?.setKind(k);let I=g(k),W=i.querySelector("[data-stage]");t.id!=="orb"&&(W.classList.remove("v-dark","v-frost","v-compact"),I.cls&&W.classList.add(I.cls),I.p&&me.set(I.p)),i.querySelectorAll("[data-variant]").forEach(ne=>ne.setAttribute("aria-checked",String(ne.dataset.variant===k)));let E=i.querySelector("[data-vline]");if(E&&(E.textContent=g(k).line),t.id==="orb"){let ne=!0;i.querySelector("[data-price]").textContent=se,i.querySelector("[data-free]").hidden=!ne;let U=i.querySelector(".free-c code");U&&(U.textContent=La(k))}let T=i.querySelector("[data-cart]");if(T&&(T.dataset.cart=b(k)),T){let ne=Ne.has(T.dataset.cart);T.setAttribute("aria-pressed",String(ne)),T.querySelector("span").textContent=ne?"In cart":"Add to cart"}let O=i.querySelector("[data-fsave]");O.dataset.fsave=`product|${b(k)}`;let B=Me.isSaved("product",b(k));O.setAttribute("aria-pressed",String(B)),O.querySelector("span").textContent=B?"Saved":"Save",history.replaceState(null,"",`#/products/${t.id}${k===n[0].id?"":`?variant=${k}`}`)};Ir(i),i.querySelector("[data-getfree]")?.addEventListener("click",()=>{let k=i.querySelector("[data-freebtn]");k?.getAttribute("aria-expanded")!=="true"&&k?.click(),k?.scrollIntoView({block:"nearest",behavior:"smooth"})}),i.querySelector("[data-soon]")?.addEventListener("click",k=>{let I=i.querySelector("#ea-wait"),W=I.hidden;I.hidden=!W,k.currentTarget.setAttribute("aria-expanded",String(W)),a.sfx(W?"open":"close"),W&&I.querySelector("input")?.focus()}),i.querySelectorAll("[data-variant]").forEach(k=>k.addEventListener("click",()=>{w(k.dataset.variant),a.sfx("select"),Se("variant",{product:t.id,variant:k.dataset.variant})})),w(y)}let La=(t="clear")=>`<div data-light-orb${t==="clear"?"":` data-variant="${t}"`} style="width:320px;height:320px"></div>
<script type="module" src="https://carlatres3.github.io/light-orb/embed/v1/orb.js"><\/script>`,zr=La();function Pr(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${de.check}<span>Get the code \u2014 free</span></button>
      <div class="free-p" id="free-code" hidden><p class="note">Paste this where the Orb should appear. It fills the box you give it; drag to turn it, tap to stir it.</p>
        <pre class="free-c glass"><code>${ae(zr)}</code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function Ir(t){let n=t.querySelector("[data-freebtn]");if(!n)return;let y=t.querySelector("#free-code"),g=t.querySelector("[data-copy]");n.addEventListener("click",()=>{let b=y.hidden;y.hidden=!b,n.setAttribute("aria-expanded",String(b)),a.sfx(b?"open":"select"),b&&Se("free_code_open",{product:"orb"})}),g.addEventListener("click",async()=>{let b=!1;try{await navigator.clipboard.writeText(t.querySelector(".free-c code").textContent),b=!0}catch{let w=document.createRange();w.selectNodeContents(t.querySelector(".free-c code"));let k=getSelection();k.removeAllRanges(),k.addRange(w)}g.querySelector("span").textContent=b?"Copied":"Selected \u2014 press Copy",b&&(a.sfx("select"),Se("free_code_copy",{product:"orb"})),setTimeout(()=>{g.isConnected&&(g.querySelector("span").textContent="Copy code")},2200)})}let ea={orb:{lede:"A 3D sphere you can place in your own work. Choose the material and what it holds inside.",does:"Drag to turn it; it keeps turning slowly on its own. A tap makes whatever is in it move a little faster. Twenty versions: clear glass, liquid metal, porcelain, bloom, and glass holding a light, points of light, glitter or beads.",tech:"An ES module built on Three.js r186 (WebGL 2). Works in current Chrome, Safari, Edge and Firefox. The integration notes explain how to place it in a page and choose a version."},"orb-slider":{lede:"A clear glass capsule whose thumb is the Orb itself. Slide it to enter.",does:"A slide-to-confirm control: the Orb travels along the track and settles at either end. It also works with the arrow keys.",tech:"Component source with the Orb as its thumb. Needs WebGL 2 for the Orb."},"orb-wave":{lede:"The ripple the Orb leaves on the floor when it lands, drawn in light.",does:"Each touch raises a wave that spreads across the surface and fades.",tech:"A full-screen shader with an impact API: position, strength and scale. Needs WebGL 2."},"background-pack":{lede:"Two environments in one pack: a dark world and a light one, and the change between them.",does:"Moves smoothly from dark to light, controlled by a single exposure value.",tech:"A full-screen shader with exposure, horizon and lamp controls. Needs WebGL 2."},"crystal-controls":{lede:"Buttons, switches, fields and sliders in clear glass, with every state designed.",does:"Each control has default, hover, focus, pressed, selected, disabled and loading states, on light and dark backgrounds.",tech:"Plain CSS components. No framework needed."}};function jr(t){return t==="orb"?'<div class="pd-sph" data-sph></div><span class="pd-hint">Drag to turn it. Tap to stir it.</span>':t==="orb-slider"?'<div class="cap" data-cap role="slider" tabindex="0" aria-label="Slide to enter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="cap-l">slide to enter</span></div>':t==="orb-wave"?'<button class="gb small pd-btn" type="button" data-drop>Drop the Orb</button><span class="pd-hint">Or tap the floor.</span>':t==="background-pack"?'<div class="segbar pd-seg" role="radiogroup" aria-label="Environment"><button class="pill" role="radio" type="button" data-env="0" aria-checked="false">Dark world</button><button class="pill" role="radio" type="button" data-env="1" aria-checked="true">Light</button></div>':`<div class="kit"><button class="gb primary" type="button">Continue</button><button class="gb" type="button">Secondary</button><button class="gb gc" type="button" aria-label="Confirm">${de.check}</button>
      <button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><input class="gi" placeholder="Your name" aria-label="Example field">
      <input class="grange" type="range" value="60" aria-label="Example slider" style="--p:60%"><button class="gb" type="button" disabled>Disabled</button><button class="gb" type="button" aria-busy="true">Loading</button></div>`}let Oe=null;function Dr(t,n,y="clear"){if(Oe={id:t,el:n,cap:0,drop:null},t!=="crystal-controls"&&t!=="orb"&&f.show(Ze(lt("original").config)),t==="orb"&&(Oe.sphere=Sa(n.querySelector("[data-sph]"),y,{reduced:s}),F.push(()=>Oe?.sphere?.dispose())),t==="orb-slider"){let g=n.querySelector("[data-cap]"),b=null,w=I=>{Oe.cap=ot(I),g.setAttribute("aria-valuenow",Math.round(Oe.cap*100))};g.addEventListener("pointerdown",I=>{b={x:I.clientX,v:Oe.cap},g.setPointerCapture(I.pointerId),a.sfx("select")}),g.addEventListener("pointermove",I=>{b&&w(b.v+(I.clientX-b.x)/(g.offsetWidth-g.offsetHeight))});let k=()=>{b&&(b=null,f.orb?.nudge(.5),Oe.cap>.9?(w(1),a.sfx("confirm")):(w(0),a.sfx("select")))};g.addEventListener("pointerup",k),g.addEventListener("pointercancel",k),g.addEventListener("keydown",I=>{I.key==="ArrowRight"&&w(Oe.cap+.1),I.key==="ArrowLeft"&&w(Oe.cap-.1),I.key==="End"&&w(1),I.key==="Home"&&w(0)})}if((t==="orb-wave"||t==="background-pack")&&(Yt(n),e.addBackdrop(me.canvas),me.set({horizon:.3,strength:1,scale:70}),me.setExposure(t==="background-pack"?1:0,!0),t==="orb-wave"&&(n.addEventListener("pointerdown",g=>{if(g.target.closest("button"))return;let b=n.getBoundingClientRect(),w=g.clientY-b.top;w>b.height*.55&&(me.impact(g.clientX-b.left,w),f.orb?.nudge(.7),a.sfx("detent"))}),n.querySelector("[data-drop]").addEventListener("click",()=>{Oe.drop={vy:0,y:null,contacts:0},a.sfx("select")})),t==="background-pack"&&n.querySelectorAll("[data-env]").forEach(g=>g.addEventListener("click",()=>{me.setExposure(+g.dataset.env),a.sfx("open"),n.querySelectorAll("[data-env]").forEach(b=>b.setAttribute("aria-checked",String(b===g)))}))),t==="crystal-controls"){n.querySelectorAll(".gb:not([disabled])").forEach(b=>b.addEventListener("click",()=>a.sfx("select"))),n.querySelector(".gsw").addEventListener("click",b=>{let w=b.currentTarget;w.setAttribute("aria-checked",String(w.getAttribute("aria-checked")!=="true")),a.sfx("select")}),n.querySelector(".gi").addEventListener("input",b=>{b.isTrusted&&a.sfx("type")});let g=n.querySelector(".grange");g.addEventListener("input",()=>{g.style.setProperty("--p",`${g.value}%`),a.sfx("level",g.value/100)})}}let Ca=2;function Nr(){let t=De.length+Ca;i.innerHTML=`
      <section class="dest tpl">
        <header class="dh"><h1>Complete compositions</h1></header>
        <div class="folder" data-folder>
          <div class="folder-tab glass"><span>Templates</span><small>${De.length} ${De.length===1?"composition":"compositions"}</small></div>
          <div class="folder-body glass"><span class="folder-glow" aria-hidden="true"></span><span class="folder-num" data-fnum aria-hidden="true"></span>
            <div class="folder-track" data-track role="listbox" aria-label="Templates" tabindex="0">
              ${De.map((T,O)=>`<button class="tcard glass" type="button" role="option" data-t="${O}" aria-label="Open ${ae(T.name)}">
                <span class="tcard-n">${String(O+1).padStart(2,"0")}</span>
                <span class="tcard-cv"><img src="${T.cover.src}" alt="" draggable="false"></span>
                <span class="tcard-t">${ae(T.name)}</span><span class="tcard-l">${ae(T.line)}</span></button>`).join("")}
              ${Array.from({length:Ca},(T,O)=>`<div class="tcard glass soon" aria-hidden="true"><span class="tcard-n">${String(De.length+O+1).padStart(2,"0")}</span><span class="tcard-cv"><span class="soon-orb"></span><span class="soon-lbl">In the making</span></span><span class="tcard-t">Next composition</span><span class="tcard-l">Joining the collection soon.</span></div>`).join("")}
            </div>
            <div class="folder-open" data-open hidden></div>
            <div class="folder-ctl" data-fctl><button class="gb gc small" type="button" data-fstep="-1" aria-label="Previous">${de.prev}</button><span class="count" data-fcount></span><button class="gb gc small" type="button" data-fstep="1" aria-label="Next">${de.next}</button></div>
          </div>
        </div>
      </section>${G()}`;let n=i.querySelector("[data-track]"),y=[...n.children],g=i.querySelector("[data-open]"),b=i.querySelector("[data-fctl]"),w=0,k=T=>{y.forEach((O,B)=>{let ne=B-w+h/340,U=Math.abs(ne);O.style.transition=T||R?"none":"",O.style.transform=`translateX(calc(-50% + ${ne*96}%)) translateZ(${-U*120}px) rotateY(${ot(-ne*18,-30,30)}deg) scale(${1-Math.min(U,2)*.08})`,O.style.zIndex=String(10-Math.round(U)),O.style.opacity=String(U>2.2?0:1-U*.22),O.classList.toggle("on",B===w),O.tagName==="BUTTON"&&O.setAttribute("aria-selected",String(B===w))}),i.querySelector("[data-fnum]").textContent=String(w+1).padStart(2,"0"),i.querySelector("[data-fcount]").textContent=`${String(w+1).padStart(2,"0")} / ${String(t).padStart(2,"0")}`,i.querySelectorAll("[data-fstep]").forEach(O=>{O.disabled=+O.dataset.fstep<0&&w===0||+O.dataset.fstep>0&&w===t-1})},I=T=>{let O=ot(w+T,0,t-1);O!==w&&(w=O,a.sfx("detent")),k()};i.querySelectorAll("[data-fstep]").forEach(T=>T.addEventListener("click",()=>I(+T.dataset.fstep))),n.addEventListener("keydown",T=>{T.key==="ArrowRight"&&(I(1),T.preventDefault()),T.key==="ArrowLeft"&&(I(-1),T.preventDefault())}),H(n,I,()=>k());let W=T=>{let O=De[T],B={id:`template-${O.id}`,name:O.name,href:`#/templates/${O.id}`};oe.some(ne=>ne.id===B.id)||oe.push(B),g.innerHTML=`<button class="tl folder-back" type="button" data-close>${de.back}<span>All templates</span></button>
        <div class="fo-grid"><figure class="fo-cv glass"><img src="${O.cover.src}" alt="The beginning of the ${ae(O.name)} template." width="1600" height="1000"></figure>
          <div class="fo-info"><p class="kicker">${String(T+1).padStart(2,"0")} \xB7 Template</p><h2>${ae(O.name)}</h2><p>${ae(O.line)}</p>
            <ul class="fo-inc">${O.includes.map(ne=>`<li>${ae(ne)}</li>`).join("")}</ul><p class="price">${se}</p>
            <div class="acts eq"><a class="gb small primary" href="#/templates/${O.id}">Open template</a>${Ke(B)}${dt("template",O.id,O.name)}</div></div></div>`,_e(g),ct(g,(ne,U)=>`#/templates/${U}`),g.querySelector("[data-close]").addEventListener("click",E),n.hidden=!0,b.hidden=!0,g.hidden=!1,g.classList.remove("in"),g.offsetWidth,g.classList.add("in"),a.sfx("open"),g.querySelector("[data-close]").focus({preventScroll:!0})},E=()=>{g.hidden=!0,n.hidden=!1,b.hidden=!1,k(!0),a.sfx("close"),n.focus({preventScroll:!0})};y.forEach((T,O)=>T.tagName==="BUTTON"&&T.addEventListener("click",B=>{if(M){B.preventDefault();return}O!==w?(w=O,k(),a.sfx("detent")):W(O)})),k(!0)}function Hr(){let t=De.find(n=>n.id===x.id);if(!t){location.replace("#/templates");return}i.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/templates">${de.back}<span>Templates</span></a>
        <div class="pd-grid">
          <figure class="pd-stage cover-big"><img src="${t.cover.src}" alt="The beginning of the ${ae(t.name)} template." width="1600" height="1000"></figure>
          <div class="pd-info"><p class="kicker">Template</p><h1>${ae(t.name)}</h1><p class="lede">${ae(t.line)}</p>
            <div class="acts"><a class="gb primary" href="#/">View it live</a></div>
            <p class="note">Purchase opens soon.</p>
            <dl class="facts"><dt>Includes</dt><dd>${t.includes.map(ae).join(" \xB7 ")}</dd></dl>
            <p class="note" data-covermeta></p></div>
        </div>
      </section>${G()}`,fetch(t.cover.meta).then(n=>n.json()).then(n=>{let y=i.querySelector("[data-covermeta]");y&&(y.textContent=`Preview: a capture of this website, ${n.captured}.`)}).catch(()=>{})}function Aa(){let t=a.prefs.voice,n=[...Mt.map(E=>({group:"voices",key:`voice_audition.${E.id}`,clip:"voice_audition",voice:E.id,title:E.name,sub:`${E.locale} \xB7 the same line in each voice`,use:E.id})),...["home","products","templates","studio","sound"].map(E=>({group:"guide",key:`${E}.${t}`,clip:E,voice:t,title:E==="home"?"Welcome":E[0].toUpperCase()+E.slice(1),sub:pa[E]})),...Rt.map(E=>({group:"sfx",key:`sfx.${E.id}`,url:E.file,title:E.name,sub:E.line}))],y=(E,T,O)=>`<section class="sg"><header><h2>${T}</h2><p>${O}</p></header><div class="sgrid">${n.filter(B=>B.group===E).map(B=>`
      <article class="si glass"><button class="si-play gb gc small" type="button" data-play="${B.key}" aria-label="Play ${ae(B.title)}">${de.play}</button>
        <div class="si-t"><h3>${ae(B.title)}<span class="file-ext">.m4a</span></h3><p>${ae(B.sub)}</p></div>
        <div class="si-w" data-wave="${B.key}" role="slider" tabindex="0" aria-label="Position in ${ae(B.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><canvas></canvas></div>
        <div class="si-m"><span class="si-d" data-dur="${B.key}">\u2013:\u2013\u2013</span></div>
        <div class="si-x eq">${B.use?`<button class="gb small" type="button" data-use="${B.use}" aria-pressed="${t===B.use}"><span>${t===B.use?"In use":"Use voice"}</span></button>`:""}${B.group!=="guide"?Ke({id:`sound-${B.key}`}):""}${dt("sound",B.key,B.title)}</div></article>`).join("")}</div></section>`;i.innerHTML=`
      <section class="dest snd-dest">
        <header class="dh"><h1>Voices and sounds</h1></header>
        ${y("voices","Voices","Compare them on the same line.")}
        ${y("guide","Guide narration","What the guide says on each page, in the selected voice.")}
        ${y("sfx","Interface sounds","Short, quiet sounds for touch, panels and wheels.")}
      </section>${G()}`,i.querySelectorAll(".si").forEach(E=>{E.querySelector('[data-play^="sfx."]')&&(E.querySelector(".file-ext").textContent=".wav")}),ct(i,()=>"#/sound");let g=new Map,b=(E,T)=>{let O=i.querySelector(`[data-dur="${CSS.escape(E)}"]`);O&&(O.textContent=T)};for(let E of n)(E.url?a.peaksUrl(E.url,80):a.peaks(E.clip,E.voice,80)).then(T=>{g.set(E.key,T),b(E.key,Br(T.duration))}).catch(()=>b(E.key,"Unavailable"));qa=n;let w=E=>E.url?E.key:`${E.clip}.${E.voice}`;_e(i);let k=(E,T=0)=>(a.prefs.master||a.set({master:!0}),E.url?a.playUrl(E.key,E.url,{from:T}):a.play(E.clip,{voice:E.voice,kind:"audition",from:T}));i.querySelectorAll("[data-play]").forEach(E=>E.addEventListener("click",()=>{let T=n.find(B=>B.key===E.dataset.play),O=w(T);a.state.clip===O&&a.playing?a.pause():a.state.clip===O&&a.state.status==="paused"?a.resume():k(T)})),i.querySelectorAll("[data-wave]").forEach(E=>{let T=n.find(U=>U.key===E.dataset.wave),O=w(T),B=!1,ne=U=>{let Ve=E.getBoundingClientRect();return ot((U.clientX-Ve.left)/Ve.width)};E.addEventListener("pointerdown",async U=>{B=!0,E.setPointerCapture(U.pointerId);let Ve=ne(U);a.state.clip!==O&&await k(T),a.seek(Ve)}),E.addEventListener("pointermove",U=>{B&&a.state.clip===O&&a.seek(ne(U))}),E.addEventListener("pointerup",()=>{B=!1}),E.addEventListener("keydown",U=>{a.state.clip!==O||!a.duration||(U.key==="ArrowRight"&&a.seek(a.position+1/a.duration),U.key==="ArrowLeft"&&a.seek(a.position-1/a.duration))})}),i.querySelectorAll("[data-use]").forEach(E=>E.addEventListener("click",()=>{a.stop(),a.set({voice:E.dataset.use}),a.sfx("confirm"),Aa()}));let I=0,W=()=>{I=requestAnimationFrame(W);for(let E of i.querySelectorAll("[data-wave]")){let T=n.find(st=>st.key===E.dataset.wave),O=w(T),B=g.get(T.key),ne=E.firstElementChild,U=E.getBoundingClientRect();if(U.bottom<0||U.top>innerHeight)continue;let Ve=a.state.clip===O,vt=Ve?a.position:0,Ct=Ve?a.state.energy:0,it=Ve&&a.playing;E.setAttribute("aria-valuenow",Math.round(vt*100));let tt=i.querySelector(`[data-play="${CSS.escape(T.key)}"]`);if(tt&&tt.dataset.on!==String(it)&&(tt.dataset.on=String(it),tt.innerHTML=it?de.pause:de.play,tt.setAttribute("aria-label",`${it?"Pause":"Play"} ${T.title}`)),!B)continue;let Ie=Math.min(devicePixelRatio||1,2);ne.width!==Math.round(U.width*Ie)&&(ne.width=Math.round(U.width*Ie),ne.height=Math.round(U.height*Ie));let Je=ne.getContext("2d");Je.setTransform(Ie,0,0,Ie,0,0),Je.clearRect(0,0,U.width,U.height);let Ye=B.bins.length,Bt=2,pt=(U.width-Bt*(Ye-1))/Ye,Xr=U.height/2;for(let st=0;st<Ye;st++){let Ra=(st+.5)/Ye<=vt,Kr=Ra&&Math.abs((st+.5)/Ye-vt)<2.5/Ye?Ct:0,Oa=Math.max(2,(B.bins[st]*.9+Kr*.2)*(U.height-4));Je.fillStyle=Ra?"#262827":"rgba(38,40,39,.2)",Je.beginPath(),Je.roundRect(st*(pt+Bt),Xr-Oa/2,pt,Oa,pt/2),Je.fill()}}};W(),F.push(()=>cancelAnimationFrame(I))}let Br=t=>`${Math.floor(t/60)}:${String(Math.round(t%60)).padStart(2,"0")}`;function Fr(){if(q&&(q.leave(),q=null),!0){i.innerHTML="",q=ir({api:e,audio:a,top:d,page:i,query:x.query,ICON:de,flash:xt,product:f,store:Me});return}i.innerHTML=`
      <section class="st-lock">
        <div class="lock-blur" aria-hidden="true"><i class="lb-bar"></i><i class="lb-sph"></i><i class="lb-ins"></i></div>
        <div class="lock-card glass dark">
          <span class="lock-i">${de.lock}</span>
          <p class="kicker">Studio</p><h1>For members</h1>
          <p>Shape the sphere: its material, its colour and what moves inside it. Studio opens with membership.</p>
          <div class="acts eq"><a class="gb small primary" href="#/membership">See membership</a><a class="gb small" href="#/products">Browse products</a></div>
        </div>
      </section>`}let ta=0;function xt(t){A.textContent=t,A.classList.add("on"),clearTimeout(ta),ta=setTimeout(()=>{A.classList.remove("on"),P()},Math.max(3200,t.length*70))}function Gr(t,n,{W:y,H:g}){let b=a.energy(),w=a.playing&&(a.state.kind==="guide"||a.state.kind==="audition"&&x.name==="sound");r.setSpeech(w&&!aa()?b*(s?.35:.9):0),C+=((w&&!aa()||ge?1:0)-C)*Math.min(1,n*(w?4:1.2));{let W=t-ve,E=W<0?0:W<3.5?nt(W/.4):1-nt((W-3.5)/1.6);r.setRibbon?.(Math.max(E,C))}f.orb?.setSpeech(a.playing&&a.state.kind==="audition"&&aa()?b*(s?.35:1):0);let k=y<700,I;if(q?(I=q.frame(t,n,{W:y,H:g}),f.frame(I.product??null)):x.name==="home"?I=Yr(y,g,k):I={warm:0,orb:_r(y,g,k),emission:Z.emission},!q){let W=Ur(y,g,n);f.frame(W),W?.ground&&(I.grounds||=[]).push({y:W.ground,x:W.x,d:W.d})}return Vr(I.orb),I}let Ma=null,qa=[],Wr=()=>qa.map(t=>({id:`sound-${t.key}`,name:t.title,href:"#/sound"})),aa=()=>!1,_r=(t,n,y)=>({x:t-(y?34:50),y:n-(y?38:52),d:y?40:50,vis:1});function Vr(t){let n=t&&(t.vis??1)>.5&&!!Xe();o.hidden=!n,n&&Object.assign(o.style,{left:`${t.x-t.d/2}px`,top:`${t.y-t.d/2}px`,width:`${t.d}px`,height:`${t.d}px`})}function Yr(t,n,y){let g=i.scrollTop/n,b=i.querySelector("[data-welcopy]"),w=i.querySelector("[data-qt]"),k=i.querySelector(".wel-ctl"),I=1-nt((g-.04)/.2),W=ke[re],E=W?.getBoundingClientRect(),T=(i.querySelector(".qt")?.offsetTop??n)/n,O=(i.querySelector("#select")?.offsetTop??2*n)/n,B=i.querySelector("#sel-t"),ne=B?(B.getBoundingClientRect().top+i.scrollTop-i.getBoundingClientRect().top)/n:2,U=ne-.8,Ve=wo(g,.13,.3,U-.22,U);b&&(b.style.setProperty("--wipe",I.toFixed(3)),b.style.visibility=I<.01?"hidden":""),k&&(k.style.setProperty("--wipe",I.toFixed(3)),k.style.visibility=I<.01?"hidden":""),w&&(w.style.setProperty("--wipe",Ve.toFixed(3)),w.style.transform=`translateY(${(20*(1-nt((g-.13)/.17))-24*nt((g-U+.22)/.22)).toFixed(1)}px)`,w.style.visibility=Ve<.01?"hidden":"");let vt=ot(Math.min(t*(y?.46:.19),n*.28),120,280),Ct={x:t/2,y:n*(y?.3:.29),d:vt},it={x:t/2,y:n*.87,d:vt*.3},tt=nt((g-.08)/Math.max(.3,T-.5)),Ie={x:Tt(Ct.x,it.x,tt),y:Tt(Ct.y,it.y,tt),d:Tt(Ct.d,it.d,tt)};if(W){let Je=E,Ye=nt((g-U+.1)/.2);if(Ye>0){let Bt=y?40:50,pt={x:l?Je.left+Je.width/2:t/2,y:Je.bottom+44,d:Bt};Ie={x:Tt(Ie.x,pt.x,Ye),y:Tt(Ie.y,pt.y,Ye),d:Tt(Ie.d,pt.d,Ye)}}}return{orb:{...Ie,vis:1},warm:1,ground:{y:Ie.y+Ie.d/2},emission:Z.emission}}function Ur(t,n,y){if(x.name==="sound"&&Ma?.isConnected){let g=Ma.getBoundingClientRect(),b=Math.min(g.width,g.height)*.78;return g.bottom>0?{x:g.left+g.width/2,y:g.top+g.height/2,d:b,vis:1,ground:g.top+g.height/2+b/2}:null}if(x.name==="products"&&!x.id){let g=i.querySelector("[data-orbslot]");if(!g)return null;let b=g.getBoundingClientRect(),w=g.closest(".pc")?.classList.contains("on"),k=Math.min(b.width,b.height)*.74;return b.width>10?{x:b.left+b.width/2,y:b.top+b.height/2,d:k,vis:w?1:.7,ground:b.top+b.height/2+k/2}:null}if(x.name==="products"&&x.id&&Oe?.el?.isConnected){let g=Oe,b=g.el.getBoundingClientRect();if(g.id==="orb-slider"){let w=g.el.querySelector("[data-cap]").getBoundingClientRect(),k=w.height*.84,I=(w.height-k)/2;return{x:w.left+I+k/2+g.cap*(w.width-w.height),y:w.top+w.height/2,d:k,vis:1,snap:!0}}if(g.id==="orb-wave"||g.id==="background-pack"){let w=Math.min(96,b.width*.16),k=b.height*.7+w*.1,I=k-w/2;if(g.drop){let W=g.drop;W.y==null&&(W.y=-b.height*.45),W.vy+=2600*y,W.y+=W.vy*y,W.y>=0&&(W.y=0,me.impact(b.width/2,k,ot(W.vy/1400)),f.orb?.nudge(.8),a.sfx("detent"),W.vy*=-.38,(++W.contacts>2||Math.abs(W.vy)<120)&&(g.drop=null)),I+=g.drop?g.drop.y:0}return me.setOrb({x:b.width/2,y:I,d:w}),{x:b.left+b.width/2,y:b.top+I,d:w,vis:1,snap:!!g.drop}}}return null}addEventListener("resize",()=>{x.name==="home"&&Q(!0)}),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__lo={audio:a,worldPreview:me,product:f,store:Me,get studio(){return q},get route(){return x},get sel(){return re},get psel(){return j}});try{Object.keys(sessionStorage).filter(t=>t.startsWith("lo:scroll:")||t==="lo:sel").forEach(t=>sessionStorage.removeItem(t))}catch{}return re=0,we(),P(),{frame:Gr,audio:a,get route(){return x},get studio(){return q},reapply:()=>ie()}}function Tr(e,r){let s=document.createElement(e);return s.className=r,s}var Ht={hostDuration:.95,follow:7,damping:.92,pearl:[243,243,241],chamber:[23,26,25],whiten:6.5},Lt=matchMedia("(prefers-reduced-motion: reduce)").matches,qr=(e,r=0,s=1)=>Math.min(s,Math.max(r,e)),mt=(e,r,s)=>e+(r-e)*s,Cr=e=>{let r=qr(e);return r<.5?4*r*r*r:1-(-2*r+2)**3/2},Ar=(e,r,s)=>e.map((a,u)=>mt(a,r[u],s)),Ta=(e,r=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${r})`,Mr=!1;document.addEventListener("lightorb:intro-complete",e=>Rr(e.detail));document.body.classList.contains("static")&&Rr(null);function ko(){let e=document.createElement("div");e.style.cssText="position:absolute;left:0;top:0;border-radius:50%;pointer-events:none;will-change:transform;background:radial-gradient(circle at 34% 28%,#fff 0 10%,rgba(255,255,255,.55) 24%,rgba(225,228,230,.35) 58%,rgba(170,176,180,.45) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),inset 0 -12px 24px rgba(120,126,130,.18),0 18px 30px -18px rgba(38,40,39,.45)";let r=()=>r,s={element:e,place(a){e.style.width=e.style.height=`${a.d}px`,e.style.transform=`translate(${a.x-a.d/2}px,${a.y-a.d/2}px)`,e.style.opacity=a.visibility??1}};return new Proxy(s,{get:(a,u)=>u in a?a[u]:r})}function Rr(e){if(Mr)return;let s=document.querySelector(".intro").querySelector(".intro-world"),a=e?.orb??ko();Mr=!0;let u=document.createElement("style");u.textContent=".x-surface,.x-orb{position:fixed;inset:0;pointer-events:none}.x-surface{z-index:6;width:100%;height:100%}.x-orb{z-index:30}",document.head.append(u);let f=document.createElement("canvas");f.className="x-surface",f.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="x-orb",document.body.append(f,i),i.append(a.element),a.attachPointer(document.createElement("div"))();let d=f.getContext("2d");a.prepareTone("ivory"),a.prepareTone("dark");let c=0,A=0,o=1,N=()=>{c=Math.max(1,innerWidth),A=Math.max(1,innerHeight),o=Math.min(devicePixelRatio||1,1.5),f.width=Math.round(c*o),f.height=Math.round(A*o)};N(),addEventListener("resize",N);let L=performance.now()/1e3,v={x:0,y:0,d:0,vx:0,vy:0,vd:0,from:null,hosted:!1},ee=new Set,P=null,Y=null,K=0,be=1,te=1,_=L,Z={left:.65,right:.55,env:.5,exposure:0,yaw:0,pitch:0,platform:!0},ie=(C,S)=>{let z=performance.now()/1e3,x=qr(z-_,0,.05);_=z,v.from||(v.from={x:C.x,y:C.y,d:C.d}),P=Y?.frame(z,x,{W:c,H:A})??null;let q=P?.orb??{x:c/2,y:A*.42,d:Math.min(c*.3,A*.42)},F=Lt?1:Cr((z-L)/Ht.hostDuration);if(!v.hosted)v.x=mt(v.from.x,q.x,F),v.y=mt(v.from.y,q.y,F),v.d=mt(v.from.d,q.d,F),F>=1&&(v.hosted=!0,a.attachPointer(document.createElement("div"))(),Y?.reapply?.());else if(Lt||P?.snap)v.x=q.x,v.y=q.y,v.d=q.d,v.vx=v.vy=v.vd=0;else{let V=Ht.follow,ce=Ht.damping;v.vx+=(V*V*(q.x-v.x)-2*ce*V*v.vx)*x,v.x+=v.vx*x,v.vy+=(V*V*(q.y-v.y)-2*ce*V*v.vy)*x,v.y+=v.vy*x,v.vd+=(V*V*(q.d-v.d)-2*ce*V*v.vd)*x,v.d+=v.vd*x}v.hosted&&!v.hostedAt&&(v.hostedAt=z);let J=v.hostedAt?Cr((z-v.hostedAt)/Ht.whiten):0,xe=Math.min(P?.warm??1,1-J);be=Lt?xe:mt(be,xe,.2),K=mt(K,P?.room==="chamber"?1:0,Lt?1:.12),te=mt(te,P?.orb?.vis??1,Lt?1:.14),Number.isFinite(v.x+v.y+v.d)||(console.warn("orb pose NaN",JSON.stringify(q),JSON.stringify(v)),Object.assign(v,{x:q.x,y:q.y,d:q.d,vx:0,vy:0,vd:0})),ze();let we=be<.002;return{...C,x:v.x,y:v.y,d:v.d,squash:0,contact:0,worldY:we?-9999:v.y,hideWorld:we,visibility:te,emission:C.emission*(P?.emission??1),raster:Math.ceil(Math.max(v.d,q.d,140)*1.06)}};if(e?.orb)e.takeOver(ie);else{let C=()=>{a.place(ie({x:c/2,y:A/2,d:0,emission:1})),requestAnimationFrame(C)};requestAnimationFrame(C)}try{a.setBackdrop((C,S)=>fe(C,S,v))}catch(C){console.warn("backdrop",C)}let Xe=(()=>{try{let C=document.createElement("canvas").getContext("2d");return C.filter="blur(1px)",C.filter==="blur(1px)"}catch{return!1}})(),ge=document.createElement("canvas"),ue=ge.getContext("2d");function He(C,S,z,x){return ge.width!==x&&(ge.width=ge.height=x),ue.globalCompositeOperation="copy",ue.drawImage(s,C,S,z,z,0,0,x,x),ue.globalCompositeOperation="saturation",ue.fillStyle="#808080",ue.fillRect(0,0,x,x),ue.globalCompositeOperation="destination-in",ue.drawImage(s,C,S,z,z,0,0,x,x),ue.globalCompositeOperation="source-over",ge}function fe(C,S,z){let x=z.d/S.diameter,q=S.extent*x,F=z.x-q/2,J=z.y-q/2,xe=S.extent/q,we=V=>V.width>0&&V.height>0;if(be>.002&&we(s)){let V=s.width/Math.max(1,innerWidth),ce=!document.documentElement.classList.contains("warm");ce&&Xe&&(C.filter="grayscale(1) contrast(1.06)"),ce&&!Xe?C.drawImage(He(F*V,J*V,q*V,S.extent),0,0):C.drawImage(s,F*V,J*V,q*V,q*V,0,0,S.extent,S.extent),ce&&Xe&&(C.filter="none")}we(f)&&C.drawImage(f,F*o,J*o,q*o,q*o,0,0,S.extent,S.extent);for(let V of ee){if(!V.isConnected||!we(V))continue;let ce=V.getBoundingClientRect();ce.right<F||ce.left>F+q||ce.bottom<J||ce.top>J+q||C.drawImage(V,(ce.left-F)*xe,(ce.top-J)*xe,ce.width*xe,ce.height*xe)}}function ze(){d.setTransform(o,0,0,o,0,0),d.clearRect(0,0,c,A);let C=1-be;if(C>0){d.globalAlpha=C;let z=Ht.pearl,x=d.createLinearGradient(0,0,0,A);x.addColorStop(0,Ta(Ar(z,[250,251,251],.5))),x.addColorStop(.6,Ta(z)),x.addColorStop(1,Ta(Ar(z,[214,217,220],.55))),d.fillStyle=x,d.fillRect(0,0,c,A),qe(c*.92,-A*.1,c*.55,"255,255,255",.7),qe(c*.05,A*1.05,c*.45,"196,201,206",.35),d.globalAlpha=1}for(let z of P?.glows??[]){d.save(),d.globalAlpha=z.k*C,d.translate(z.x,z.y),d.scale(1,z.h/z.w);let x=d.createRadialGradient(0,0,0,0,0,z.w);x.addColorStop(0,"rgba(255,255,255,.7)"),x.addColorStop(.5,"rgba(255,255,255,.22)"),x.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=x,d.fillRect(-z.w,-z.w,z.w*2,z.w*2),d.restore()}K>.002&&Re(K);let S=P?.ground;for(let z of P?.grounds??[])Te(z,z,1)}function qe(C,S,z,x,q){let F=d.createRadialGradient(C,S,0,C,S,z);F.addColorStop(0,`rgba(${x},${q})`),F.addColorStop(1,`rgba(${x},0)`),d.fillStyle=F,d.fillRect(C-z,S-z,z*2,z*2)}let Pe=Array.from({length:160},(C,S)=>{let z=Math.sin(S*12.9898)*43758.5453,x=z-Math.floor(z),q=Math.sin(S*78.233)*12345.678%1;return[x*Math.PI*2,Math.abs(q)*.9-.25,.3+S%7/10]});function Re(C){let S=P?.stage??{x:0,y:0,w:c,h:A},z=2**(Z.exposure*.5),x=Z.left,q=Z.right,F=S.x+S.w/2,J=S.y+S.h*.52,xe=Z.yaw,we=Z.pitch;d.save(),d.globalAlpha=C,d.fillStyle="#070808",d.fillRect(0,0,c,A),d.fillStyle="#ffffff";for(let[Fe,l,m]of Pe){let p=Fe-xe*m,$=F+Math.sin(p)*S.w*.9,D=J-(l+we*.6*m)*S.h;Math.cos(p)<-.2||$<S.x||$>S.x+S.w||(d.globalAlpha=C*.1*m*z,d.fillRect($,D,1.1,1.1))}d.globalAlpha=C;let V=J+S.h*(.12-we*.55),ce=P?.product?.ground??J+S.h*.18,Be=d.createLinearGradient(0,V,0,S.y+S.h);Be.addColorStop(0,"rgba(255,255,255,0)"),Be.addColorStop(.25,`rgba(255,255,255,${.035*z})`),Be.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=Be,d.fillRect(S.x,V,S.w,S.y+S.h-V);let $e=P?.product?.x??F,re=P?.product?.d??S.h*.4;for(let[Fe,l]of[[-1,x],[1,q]]){if(l<=.01)continue;let m=$e+Fe*re*(1.1+.5*Math.sin(xe*Fe+.4)),p=.18+.3*Math.max(0,Math.sin(.15+we));d.save(),d.translate(m,ce),d.scale(1,p);let $=d.createRadialGradient(0,0,0,0,0,re*1.3);$.addColorStop(0,`rgba(240,242,240,${.12*l*z})`),$.addColorStop(1,"rgba(240,242,240,0)"),d.fillStyle=$,d.beginPath(),d.arc(0,0,re*1.3,0,Math.PI*2),d.fill(),d.restore();let D=Fe<0?S.x:S.x+S.w,Q=d.createRadialGradient(D,J,0,D,J,S.w*.45);Q.addColorStop(0,`rgba(230,234,232,${.07*l*z})`),Q.addColorStop(1,"rgba(230,234,232,0)"),d.fillStyle=Q,d.fillRect(S.x,S.y,S.w,S.h)}let ke=d.createRadialGradient(F,J,S.h*.2,F,J,Math.hypot(S.w,S.h)*.62);ke.addColorStop(0,"rgba(0,0,0,0)"),ke.addColorStop(1,"rgba(0,0,0,.55)"),d.fillStyle=ke,d.fillRect(0,0,c,A),d.restore()}function Te(C,S,z){if(!Number.isFinite(S.d+S.x+C.y)||S.d<=0)return;let x=S.d/2,q=K>.5;d.save(),d.globalAlpha=z,d.translate(S.x,C.y),d.scale(1,.2);let F=d.createRadialGradient(0,0,0,0,0,x*1.5);q?(F.addColorStop(0,"rgba(240,240,236,.12)"),F.addColorStop(1,"rgba(240,240,236,0)"),d.globalCompositeOperation="lighter"):(F.addColorStop(0,"rgba(70,72,78,.22)"),F.addColorStop(.5,"rgba(70,72,78,.07)"),F.addColorStop(1,"rgba(70,72,78,0)")),d.fillStyle=F,d.beginPath(),d.arc(0,0,x*1.5,0,Math.PI*2),d.fill(),d.restore()}let ve={orb:a,reduced:Lt,chamber:Z,body:{get x(){return v.x},get y(){return v.y},get d(){return v.d},get hosted(){return v.hosted}},addBackdrop:C=>ee.add(C),removeBackdrop:C=>ee.delete(C),drawBackdrop:fe,exportPNG(C,S=a.element){let x=document.createElement("canvas");x.width=Math.round(C.w*2),x.height=Math.round(C.h*2);let q=x.getContext("2d");q.drawImage(f,C.x*o,C.y*o,C.w*o,C.h*o,0,0,x.width,x.height);for(let F of S.querySelectorAll("canvas")){let J=F.getBoundingClientRect();q.drawImage(F,(J.left-C.x)*2,(J.top-C.y)*2,J.width*2,J.height*2)}return new Promise(F=>x.toBlob(F,"image/png"))}};Y=Lr(ve),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__exit={api:ve,body:v,site:Y,get scene(){return P}})}export{Ht as EXIT};
