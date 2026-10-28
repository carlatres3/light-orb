import{A as Ra,B as Pr,C as _a,D as Di,E as We,F as Ni,e as Ir,f as Mo,h as qi,i as Ai,j as Lo,k as To,n as Ci,o as Oi,p as qo,r as Ao,t as ji,u as zi,w as Ii,x as Ri,y as Pi,z as Rr}from"./chunk-B4OVTKPG.js";var ar=[{id:"products",label:"Products",route:"#/products",line:"Objects, buttons and pieces, ready to use.",action:"Explore products",clip:"products",words:["products","product","pieces","piece","objects","gallery","shop"]},{id:"templates",label:"Templates",route:"#/templates",line:"Complete compositions to start from.",action:"Browse templates",clip:"templates",words:["templates","template","compositions","websites","cassettes"]},{id:"studio",label:"Studio",route:"#/studio",line:"Shape the light. Make it yours.",action:"Open Studio",clip:"studio",words:["studio","editor","customize","customise","edit","workshop"]},{id:"sound",label:"Sound",route:"#/sound",line:"Voices and the quiet sounds of glass.",action:"Listen",clip:"sound",words:["sound","sounds","voice","voices","audio","listen"]},{id:"design",label:"Web Design",route:"#/design",line:"A website designed and built around your idea.",action:"Start a project",clip:null,words:["design","commission","hire","custom","bespoke","project","inquiry","enquiry"]},{id:"about",label:"About",route:"#/about",line:"The person behind the work.",action:"Meet Carla",clip:null,words:["about","carla"]}],Wa=e=>ar.find(a=>a.id===e),Co=[{...Wa("products"),children:[{id:"products",label:"Digital Pieces",route:"#/products",line:"Objects, buttons, textures and effects"},{id:"sound",label:"Sound",route:"#/sound",line:"Voices and the quiet sounds of glass"},{id:"studio",label:"Studio",route:"#/studio",line:"Shape the light. Make it yours."}]},Wa("templates"),Wa("design"),Wa("about")],Fi={products:["products","sound","studio"],templates:["templates"],design:["design"],about:["about"]},Aa=[{...Wa("products"),line:"Digital pieces, sound and Studio."},{...Wa("templates"),line:"Complete website experiences to explore."},{...Wa("design"),line:"A website made around your idea."}];var Oo=e=>(Object.values(e).forEach(a=>a&&typeof a=="object"&&Oo(a)),Object.freeze(e)),Dr=Oo({version:1,shell:{roughness:.01,thickness:.78,ior:1.58,tint:"#cdd2cf",tintAmount:.72,elastic:0},interior:{kind:"light",amount:.5,size:.5,motion:.4,fill:.5,colour:"#f1f0ec"},light:{colour:"#f6f6f3",strength:.9,x:-.04,y:-.3,z:.12,spread:.8,glow:.3},motion:{idle:0},voice:{enabled:!0,response:.6}}),hr=(e,a,o,t)=>Oo({id:e,name:a,line:o,family:"orb",config:{...structuredClone(Dr),...Object.fromEntries(Object.entries(t).map(([s,g])=>[s,{...Dr[s],...g}]))}}),Pa=[hr("original","Light","Clear glass holding one soft white light.",{}),hr("beads","Beads","Small glass beads resting and rolling inside the shell.",{interior:{kind:"beads",amount:.6,size:.55,motion:.45},light:{strength:.7},shell:{thickness:.15,ior:1.3}}),hr("glitter","Glitter","Fine reflective flecks suspended in the volume.",{interior:{kind:"glitter",amount:.6,size:.35,motion:.35,colour:"#f4f4f2"}}),hr("liquid","Liquid","A clear liquid with a meniscus that moves with the glass.",{interior:{kind:"liquid",fill:.42,motion:.5,colour:"#dfe3e1"},light:{strength:.78}}),hr("gel","Gel","A soft gel body; the shell answers with a damped give.",{interior:{kind:"gel",amount:.55,motion:.45,colour:"#e4e6e3"},shell:{elastic:.55}})],jo=Pa[0].config,pa=e=>Pa.find(a=>a.id===e)??Pa[0],ra=[{id:"orb",name:"The Orb",kind:"Interactive object",published:!0,line:"A 3D sphere for your own work, in twenty versions: glass, metal, porcelain, bloom, and glass with light, sparkle or beads inside.",receives:["ES module (Three.js r186) with the sphere and its material","The version you choose","Integration notes and dependency list"],source:["dist/light-orb.js","dist/orb-three.js","dist/orb-lighting.js","dist/orb-floor.js"],preview:"orb",studio:!0,presets:Pa.map(e=>e.id),readiness:"preview_ready",missing:["price","checkout provider","packaged download (source export not yet assembled)"],price:null},{id:"orb-slider",name:"Orb Slider",kind:"Interactive control",published:!0,code:"kit",line:"A glass capsule whose thumb is a small orb. Slide it to enter; a spring brings it home.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Keyboard and pointer support","Six materials"],source:["dist/intro/activation.js","dist/intro/glass-control.js"],preview:"slider",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package (currently embedded in the intro)"],price:null},{id:"orb-wave",name:"Orb Wave",kind:"Surface effect",published:!1,line:"The ripple the Orb leaves on the floor when it lands, drawn in light.",receives:["Light-world shader source","Impact trigger API","Integration notes"],source:["dist/intro/light-world.js"],preview:"wave",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"background-pack",name:"Background Pack",kind:"Two environments",published:!1,line:"A dark world and a light one, and the change between them.",receives:["Dark and warm environment shader","Exposure transition","Integration notes"],source:["dist/intro/light-world.js"],preview:"backgrounds",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"crystal-controls",name:"Crystal Controls",kind:"Interface kit",published:!0,code:"kit",line:"Buttons, switches, fields and sliders in six glass materials, with light that follows the pointer.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Every state: hover, focus, pressed, selected, disabled, loading","Six materials"],source:["dist/app/glass.css.js"],preview:"controls",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged download"],price:null}],ka=e=>ra.find(a=>a.id===e),Bi=ra.filter(e=>e.published!==!1),nl=[{id:"the-light-orb",name:"The Light Orb",line:"This website\u2019s own beginning: the Orb as host, a quiet greeting, the quotation and the four destinations.",cover:{src:"./media/templates/the-light-orb.cover.jpg",from:"dist/intro.html (post-intro welcome, live render)",meta:"./media/templates/the-light-orb.cover.json"},route:"#/",includes:["Centred welcome with the hosting Orb","Quotation scene","Destination selector"],published:!0,starter:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged source export"],price:null},{id:"brunito",name:"BRUNITO",label:"ecommerce",credit:"Example project: Brunito, an independent ecommerce demo",category:"Ecommerce design & development",subtitle:"Ecommerce Design & Development",showcase:!0,line:"An interactive ecommerce experience featuring responsive layouts, customised product pages and a refined shopping interface.",cover:{src:"./media/templates/brunito.cover.jpg",from:"BRUNITO demo homepage (live render)",meta:"./media/templates/brunito.cover.json"},demo:"https://carlatres3.github.io/brunito/",cta:"Explore Demo",includes:["Editorial homepage and collections","Product pages with real variants and galleries","Cart drawer and cart (purchases disabled)","Desktop, tablet and mobile"],published:!0,readiness:"showcase",price:null}],zt=nl.filter(e=>e.published!==!1),aa={engine:"Kokoro-82M v1.0",licence:"Apache-2.0",rights:{onSite:"yes",download:"not offered"}},Va=[{id:"samantha",name:"Heart",kokoro:"af_heart",grade:"A",locale:"en-US",accent:"American",gender:"female",line:"Warm and clear. The guide\u2019s own voice.",full:!0,...aa},{id:"bella",name:"Bella",kokoro:"af_bella",grade:"A\u2212",locale:"en-US",accent:"American",gender:"female",line:"Bright and expressive, with a smile in it.",full:!0,...aa},{id:"emma",name:"Emma",kokoro:"bf_emma",grade:"B\u2212",locale:"en-GB",accent:"British",gender:"female",line:"Composed and precise. A gallery voice.",full:!0,...aa},{id:"daniel",name:"Michael",kokoro:"am_michael",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Calm and grounded. Steady narration.",full:!0,...aa},{id:"nicole",name:"Nicole",kokoro:"af_nicole",grade:"B\u2212",locale:"en-US",accent:"American",gender:"female",line:"Close and hushed, almost a whisper.",lines:"samantha",...aa},{id:"aoede",name:"Aoede",kokoro:"af_aoede",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Soft and lyrical.",lines:"samantha",...aa},{id:"kore",name:"Kore",kokoro:"af_kore",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Even and confident.",lines:"bella",...aa},{id:"isabella",name:"Isabella",kokoro:"bf_isabella",grade:"C",locale:"en-GB",accent:"British",gender:"female",line:"Light and friendly.",lines:"emma",...aa},{id:"fenrir",name:"Fenrir",kokoro:"am_fenrir",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Deep and resonant.",lines:"daniel",...aa},{id:"puck",name:"Puck",kokoro:"am_puck",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Lively and quick.",lines:"daniel",...aa},{id:"george",name:"George",kokoro:"bm_george",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"Measured and classic.",lines:"daniel",...aa},{id:"fable",name:"Fable",kokoro:"bm_fable",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"A storyteller\u2019s warmth.",lines:"daniel",...aa}],Sa=e=>Va.find(a=>a.id===e)??Va[0],Nr={home:"Welcome to The Light Orb. A space for creative possibilities. Let\u2019s explore.",products:"Explore the pieces. Each one is designed to become part of something of your own.",templates:"Start with a complete composition. Select a cassette to preview the design.",studio:"Choose a piece, then shape its light, material and movement.",sound:"Listen before you choose. Find the voice and sounds that fit your work.",voice_audition:"A little light. A new idea. Something of your own."},zo=(e,a)=>`./media/voice/${e}.${a}.m4a`,mr={text:"I don\u2019t know why people expect art to make sense when they accept the fact that life doesn\u2019t make sense.",author:"David Lynch",work:"interview with Kristine McKenna, Los Angeles Times, 20 August 1989",source:"https://www.latimes.com/archives/la-xpm-1989-08-20-ca-1327-story.html"};var fr=[{id:"select",name:"Select",line:"A soft glass touch for choosing.",file:"./media/sfx/select.wav"},{id:"open",name:"Open",line:"A breath of air as a panel opens.",file:"./media/sfx/open.wav"},{id:"close",name:"Close",line:"The same air, settling.",file:"./media/sfx/close.wav"},{id:"confirm",name:"Confirm",line:"Two quiet touches: done.",file:"./media/sfx/confirm.wav"},{id:"detent",name:"Detent",line:"A precise tick for wheels and steps.",file:"./media/sfx/detent.wav"},{id:"type",name:"Type",line:"A dry, very quiet key.",file:"./media/sfx/type.wav"},{id:"level",name:"Level",line:"A small touch as a level moves.",file:"./media/sfx/level.wav"}],Hi={promise:"A new drop every two weeks.",open:!1,price:null,interval:null,quota:null,plans:[{id:"ready",name:"Ready-made",line:"Choose a curated piece and use it as it is.",points:["One finished piece","Its source and integration notes"]},{id:"studio",name:"Studio",line:"Customise a piece and export your own version.",points:["Light, material and movement controls","Saved designs"]},{id:"member",name:"Membership",line:"Follow the collection as it grows.",points:["A new drop every two weeks"]}]};var _i=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),Mt={peak:.0045,curve:1.8,floor:.12,cutoff:320,cutoffSpan:120,highpass:70,q:.5,attack:.12,release:.07,sweep:.35,still:.09,seconds:7},Wi={quiet:{peak:Mt.peak,curve:Mt.curve},A:{peak:.0135,curve:1.4},B:{peak:.024,curve:1.4}},Vi="B";function sl(e,{talking:a=!1,loudness:o=Wi[Vi]}={}){if(a)return 0;let t=_i(e);return t<=Mt.floor?0:o.peak*Math.pow((t-Mt.floor)/(1-Mt.floor),o.curve)}function ll(e,a){let o=Math.round(e.sampleRate*a),t=e.createBuffer(1,o,e.sampleRate),s=t.getChannelData(0),g=0,i=0;for(let d=0;d<o;d++)g=.995*g+.02*(Math.random()*2-1),s[d]=g,i=Math.max(i,Math.abs(g));let c=Math.round(e.sampleRate*.2);for(let d=0;d<c;d++){let h=d/c;s[d]=s[d]*h+s[o-c+d]*(1-h)}for(let d=0;d<o;d++)s[d]/=i||1;return t}function Yi(e,a,{talking:o=()=>!1,loudness:t=Wi[Vi]}={}){let s=e.createBufferSource();s.buffer=ll(e,Mt.seconds),s.loop=!0;let g=e.createBiquadFilter(),i=e.createBiquadFilter(),c=e.createBiquadFilter(),d=e.createGain();g.type="highpass",g.frequency.value=Mt.highpass,g.Q.value=Mt.q;for(let m of[i,c])m.type="lowpass",m.frequency.value=Mt.cutoff,m.Q.value=Mt.q;d.gain.value=0,s.connect(g).connect(i).connect(c).connect(d).connect(a),s.start();let h=0,p=-1;return{get level(){return h},update(m,F=e.currentTime){let Q=sl(m,{talking:o(),loudness:t});if(d.gain.setTargetAtTime(Q,F,Q>h?Mt.attack:Mt.release),h=Q,F-p>.1){p=F;let n=Mt.cutoff+Mt.cutoffSpan*_i(m);i.frequency.setTargetAtTime(n,F,Mt.sweep),c.frequency.setTargetAtTime(n,F,Mt.sweep)}},still(m=e.currentTime){h=0,d.gain.setTargetAtTime(0,m,Mt.release)}}}var Gi=e=>Math.max(0,Math.min(1,Number.isFinite(e)?e:0));function Fr(e,a=.008,o=.16){let t=0;for(let s of e)t+=s*s;return Gi((Math.sqrt(t/Math.max(1,e.length))-a)/o)}function Br(e,a,o,t=.05,s=.18){let g=e+(a-e)*(1-Math.exp(-Math.max(0,o)/(a>e?t:s)));return g<.001?0:Gi(g)}function Ui({getContext:e,onState:a=()=>{},onLevel:o=()=>{},mediaDevices:t=globalThis.navigator?.mediaDevices,lifecycle:s=globalThis.document,page:g=globalThis.window,now:i=()=>performance.now()}={}){let c={status:"off",error:"",level:0},d=0,h=null,p=null,m=null,F=null,Q=null,n=i(),A=0,O=!1,W=()=>a({...c});function $(){for(let x of h?.getTracks()??[])x.onended=null,x.stop();h=null,p?.disconnect(),m?.disconnect(),F?.disconnect(),p=m=F=Q=null,c.level=0,o(0)}function q(){d++,$(),c.status="off",c.error="",W()}async function U(){if(O)return!1;if(c.status==="listening")return!0;if(c.status==="requesting")return!1;let x=++d;c.status="requesting",c.error="",W();let y=null;try{if(!t?.getUserMedia)throw Object.assign(new Error,{name:"UnsupportedError"});let C=e();if(!C)throw Object.assign(new Error,{name:"UnsupportedError"});let Z=Promise.resolve(C.resume()).then(()=>null,J=>J);if(y=await t.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!1},video:!1}),O||x!==d)return y.getTracks().forEach(J=>J.stop()),!1;h=y;let Y=await Z;if(O||x!==d)return!1;if(Y)throw Y;return p=C.createMediaStreamSource(h),m=C.createBiquadFilter(),m.type="highpass",m.frequency.value=90,F=C.createAnalyser(),F.fftSize=1024,F.smoothingTimeConstant=0,p.connect(m),m.connect(F),Q=new Float32Array(F.fftSize),n=i(),h.getTracks().forEach(J=>{J.onended=q}),c.status="listening",W(),!0}catch(C){return x!==d||O||($(),c.status="error",c.error=C.name==="NotAllowedError"||C.name==="SecurityError"?"Allow microphone access in your browser, then try again.":C.name==="NotFoundError"?"No microphone found. Connect one and try again.":C.name==="UnsupportedError"?"Microphone input needs a supported browser on HTTPS or localhost.":"The microphone is unavailable. Close other microphone apps and try again.",W()),!1}}function R(){if(!F||c.status!=="listening")return 0;let x=i(),y=Math.min(.1,Math.max(0,(x-n)/1e3));n=x,F.getFloatTimeDomainData(Q);let C=Fr(Q,.006,.1);return c.level=Br(c.level,C,y,.045,.28),x-A>80&&(A=x,o(c.level)),c.level}let N=()=>{s.hidden&&q()};return s?.addEventListener("visibilitychange",N),g?.addEventListener("pagehide",q),{state:c,start:U,stop:q,sample:R,toggle(){return c.status==="requesting"||c.status==="listening"?q():U()},dispose(){O=!0,q(),s?.removeEventListener("visibilitychange",N),g?.removeEventListener("pagehide",q)}}}var rr=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),Ki={voice:Va[0].id};function Xi(){let e=Ii(Ki),a=e.prefs;Va.some(P=>P.id===a.voice)||(a.voice=Ki.voice);let o=new Set,t=null,s=null,g=null,i=null,c=null,d=null,h=new Audio;h.preload="auto",h.crossOrigin="anonymous",h.setAttribute("playsinline","");let p=null,m={clip:null,voice:null,status:"idle",error:null,energy:0,journey:new Set},F=new Map,Q=new Map,n=P=>{if(!Q.has(P)){let H=fetch(P).then(V=>{if(!V.ok)throw new Error(V.status);return V.blob()}).then(V=>URL.createObjectURL(V));Q.set(P,H),H.catch(()=>Q.delete(P))}return Q.get(P)},A={},O=()=>o.forEach(P=>P(tt));function W(){if(t)return t;let P=window.AudioContext||window.webkitAudioContext;if(!P)return null;t=new P,s=t.createGain(),s.connect(t.destination),g=t.createGain();let H=t.createDynamicsCompressor();H.threshold.value=-30,H.knee.value=10,H.ratio.value=4,H.attack.value=.003,H.release.value=.25,g.connect(H).connect(s),i=t.createGain(),i.connect(s),c=t.createAnalyser(),c.fftSize=1024,c.smoothingTimeConstant=0,c.connect(g),d=new Float32Array(c.fftSize);try{p=t.createMediaElementSource(h),p.connect(c)}catch{p=null}return $(),t}function $(){if(!t)return;let P=t.currentTime;s.gain.setTargetAtTime(a.master||m.kind==="audition"?a.volume??.8:0,P,.02),g.gain.setTargetAtTime(a.gain,P,.02),i.gain.setTargetAtTime(a.sfx?a.sfxGain:0,P,.02)}let q=()=>{let P=W();P&&P.state!=="running"&&P.state!=="closed"&&P.resume().catch(()=>{}),Ue(),e.voice&&!j&&pe()};for(let P of["pointerdown","keydown","touchend"])addEventListener(P,q,{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden&&(le.on||!h.paused||m.status==="loading")?(ie(),m.hiddenPause=!0):m.hiddenPause&&(m.hiddenPause=!1)}),h.addEventListener("ended",()=>{m.status="ended",O()}),h.addEventListener("pause",()=>{m.status==="playing"&&(m.status="paused",O())}),h.addEventListener("playing",()=>{m.status="playing",m.error=null,O()}),h.addEventListener("error",()=>{m.clip&&(m.status="error",m.error="The recording could not be loaded.",O())}),h.addEventListener("loadedmetadata",O);let U=null,R=null;function N(){me.cancel(),U?.(),R&&(h.removeEventListener("ended",R),R=null)}function x(){return N(),me.begin()}let y=P=>P==="audition"||e.voice,C=(P,{voice:H=a.voice,from:V=0,kind:oe="guide"}={})=>J(`${P}.${H}`,zo(P,H),{from:V,kind:oe,voice:H}),Z=(P,H,{from:V=0}={})=>J(P,H,{from:V,kind:"audition"}),Y=0;async function J(P,H,{from:V=0,kind:oe="guide",voice:ae=null,token:Se=x(),onend:_e}={}){let Xe=Y;if(!me.live(Se)||!y(oe))return!1;Ie(),h.pause(),m.clip=P,m.voice=ae,m.kind=oe,m.url=H,m.loaded=!1,m.status="loading",m.error=null,m.env=null,q(),$(),O();let Le;try{Le=await n(H)}catch{Le=H}if(!me.live(Se)||Xe!==Y||!y(oe)||(h.src!==Le&&(h.src=Le),m.loaded=!0,rt(H,200).then(Re=>{me.live(Se)&&(m.env=Re)}).catch(()=>{}),V&&h.readyState<1&&(!await new Promise(Dt=>{let $t=Ce=>{h.removeEventListener("loadedmetadata",ot),h.removeEventListener("error",ye),U=null,Dt(Ce)},ot=()=>$t(!0),ye=()=>$t(!1);U=()=>$t(!1),h.addEventListener("loadedmetadata",ot),h.addEventListener("error",ye)})||!me.live(Se)))||!me.live(Se)||!y(oe)||(h.currentTime=V||0,_e&&(R=()=>{R=null,me.live(Se)&&_e()},h.addEventListener("ended",R,{once:!0})),O(),!me.live(Se)||Xe!==Y||!y(oe)))return!1;try{return await h.play(),me.live(Se)&&y(oe)}catch{return me.live(Se)&&(m.status="blocked",m.error="Playback was blocked. Press play to start it.",O()),!1}}function ie(){N(),Ie(),h.pause(),m.status="paused",O()}async function ce(){return!m.url||m.clip==="speech"||!y(m.kind)?!1:J(m.clip,m.url,{from:m.loaded?h.currentTime:0,kind:m.kind,voice:m.voice})}let ee=typeof speechSynthesis<"u"?speechSynthesis:null,ne=0,le={on:!1};function Ie(){le.u=null,ee&&le.on&&(le.on=!1,ee.cancel())}let qe={samantha:[/ava.*premium/i,/zoe.*premium/i,/samantha.*(enhanced|premium)/i,/(aria|jenny|emma|ava).*natural/i,/natural.*(female|aria|jenny)/i,/google us english/i,/google uk english female/i,/^(ava|zoe|allison|susan)\b/i,/^samantha/i],daniel:[/(evan|nathan|tom).*premium/i,/daniel.*(enhanced|premium)/i,/(guy|ryan|andrew|brian|christopher).*natural/i,/natural.*male/i,/google uk english male/i,/^(evan|nathan|tom|aaron)\b/i,/^daniel/i]},D=[],f=()=>{D=ee?.getVoices()??[]};ee&&(f(),ee.addEventListener?.("voiceschanged",f));let T=[/(paulina|monica|m[oó]nica|marisol|isabela).*(premium|enhanced)/i,/(elvira|dalia|helena|ximena|paloma).*natural/i,/natural.*(spanish|espa)/i,/google espa[nñ]ol/i,/^(paulina|monica|m[oó]nica|marisol|jorge|diego)\b/i];function B(P){if(D.length||f(),P==="es"){let V=D.filter(oe=>/^es[-_]/i.test(oe.lang));if(V.length){for(let oe of T){let ae=V.find(Se=>oe.test(Se.name));if(ae)return ae}return V.find(oe=>oe.localService===!1)??V[0]}}let H=D.filter(V=>/^en[-_]/i.test(V.lang));for(let V of qe[Sa(a.voice).gender==="male"?"daniel":"samantha"]){let oe=H.find(ae=>V.test(ae.name));if(oe)return oe}return H.find(V=>V.localService===!1)??H[0]}let j=null,z="./media/voice/lines/",pe=()=>j??=fetch(`${z}manifest.json`).then(P=>P.ok?P.json():null,()=>(j=null,null)).catch(()=>null),me=Ri();function Me(P,{id:H,onend:V,lang:oe}={}){if(!P||!a.master||!a.guide)return V?.(),!1;let ae=x();if(H){let Se=Sa(a.voice).lines??a.voice;return Ie(),h.pause(),m.kind="guide",m.url=null,m.clip=`line:${H}`,m.status="loading",O(),pe().then(async _e=>{let Xe=_e?.lines?.[H]?.text===P?_e.lines[H].files?.[Se]:null;if(!me.live(ae))return;if(!Xe){ge(P,{onend:V,lang:oe,token:ae});return}let Le=z+Xe;try{await n(Le)}catch{me.live(ae)&&ge(P,{onend:V,lang:oe,token:ae});return}me.live(ae)&&J(`line:${H}.${Se}`,Le,{kind:"guide",voice:Se,token:ae,onend:V})}),!0}return ge(P,{onend:V,lang:oe,token:ae})}function ge(P,{onend:H,lang:V,token:oe}={}){if(!me.live(oe)||!ee||!P||!a.master||!a.guide)return H?.(),!1;Ie(),q(),h.pause(),ee.cancel();let ae=B(V),Se=ae&&(!ae.localService||/premium|enhanced|natural/i.test(ae.name)),_e=P.match(/[^.!?]+[.!?]*\s*/g)?.map(Xe=>Xe.trim()).filter(Boolean)??[P];return le.u=oe,le.on=!0,m.kind="guide",m.url=null,m.clip="speech",m.status="playing",O(),_e.forEach((Xe,Le)=>{let Re=new SpeechSynthesisUtterance(Xe);ae&&(Re.voice=ae,Re.lang=ae.lang),Re.rate=Se?1:.94,Re.pitch=1,Re.volume=a.volume??.8,Re.onboundary=()=>{ne=1},Re.onstart=()=>{ne=1},Le===_e.length-1&&(Re.onend=Re.onerror=()=>{me.live(oe)&&le.u===oe&&(le.on=!1,m.status="stopped",O(),H?.())}),ee.speak(Re)}),!0}let se=()=>B()?.name??null;function je(){Y++,N(),Ie(),h.pause(),m.status=m.clip?"stopped":"idle",O()}function De(P){h.duration&&(h.currentTime=rr(P)*h.duration,O())}let Ke=performance.now();function St(){let P=performance.now(),H=Math.min(.1,(P-Ke)/1e3);Ke=P;let V=0;return le.on&&e.voice?(ne=Math.max(0,ne-H*3.2),V=rr(.35+.45*ne+.15*Math.sin(P/90))):!p&&m.env&&!h.paused&&(a.master||m.kind==="audition")&&h.duration?V=rr(m.env.bins[Math.min(m.env.bins.length-1,Math.floor(h.currentTime/h.duration*m.env.bins.length))]*1.1):c&&!h.paused&&(a.master||m.kind==="audition")&&(c.getFloatTimeDomainData(d),V=Fr(d)),m.energy=Br(m.energy,V,H),m.energy}let it=(P,H=a.voice,V=72)=>rt(zo(P,H),V);async function rt(P,H=72){let V=`${P}|${H}`;if(F.has(V))return F.get(V);let oe=(async()=>{let ae;try{ae=await n(P)}catch{ae=P}let Se=await(await fetch(ae)).arrayBuffer(),_e=window.OfflineAudioContext||window.webkitOfflineAudioContext,Xe=await new _e(1,44100,44100).decodeAudioData(Se),Le=Xe.getChannelData(0),Re=Math.max(1,Math.floor(Le.length/H)),Dt=[],$t=0;for(let ot=0;ot<H;ot++){let ye=0;for(let Te=ot*Re;Te<(ot+1)*Re;Te++)ye+=Le[Te]*Le[Te];let Ce=Math.sqrt(ye/Re);Dt.push(Ce),$t=Math.max($t,Ce)}return{bins:Dt.map(ot=>ot/($t||1)),duration:Xe.duration}})();return F.set(V,oe),oe.catch(()=>F.delete(V)),oe}let Qe={press:"select",release:"select",volume:"level",case:"open"},ve={select:90,type:70,detent:50,level:110,open:220,close:220,confirm:400},be={select:.3,type:.2,detent:.28,level:.22,open:.28,close:.26,confirm:.32},he={},Ae=0;function Ne(P){he[P]||!t||(he[P]=fetch(`./media/sfx/${P}.wav`).then(H=>H.arrayBuffer()).then(H=>t.decodeAudioData(H)).then(H=>he[P]=H).catch(()=>he[P]=null))}function Fe(P,H=.5){if(P=Qe[P]||P,!a.master||!a.sfx)return;let V=W();if(!V||V.state!=="running")return;let oe=performance.now();if(oe-(A[P]??0)<(ve[P]??80)||Ae>3)return;A[P]=oe;let ae=he[P];if(!ae||ae instanceof Promise){Ne(P);return}let Se=V.createBufferSource(),_e=V.createGain();Se.buffer=ae,_e.gain.value=(be[P]??.6)*(P==="level"?.6+.4*rr(H):1),P==="level"&&(Se.playbackRate.value=.85+.3*rr(H)),Se.connect(_e),_e.connect(i),Ae++,Se.onended=()=>{Ae--,_e.disconnect()},Se.start()}let He=null;function Pt(P=0){if(!a.master||!a.sfx)return;let H=W();if(!H||H.state!=="running")return;if(!He){let ae=H.createBufferSource(),Se=H.sampleRate*2,_e=H.createBuffer(1,Se,H.sampleRate),Xe=_e.getChannelData(0);for(let Dt=0;Dt<Se;Dt++)Xe[Dt]=Math.random()*2-1;ae.buffer=_e,ae.loop=!0;let Le=H.createBiquadFilter(),Re=H.createGain();Le.type="lowpass",Le.Q.value=.4,Le.frequency.value=900,Re.gain.value=0,ae.connect(Le).connect(Re).connect(i),ae.start(),He={f:Le,g:Re,stop:0}}let V=rr(P),oe=H.currentTime;He.g.gain.setTargetAtTime(V*.035,oe,.03),He.f.frequency.setTargetAtTime(700+600*V,oe,.06),clearTimeout(He.stop),He.stop=setTimeout(()=>He.g.gain.setTargetAtTime(0,H.currentTime,.04),70)}let et=null,Ge=0;function Ze(P=0,H="air"){if(!a.master||!a.sfx||!t||t.state!=="running"){et&&et.still();return}et??=Yi(t,i,{talking:()=>!h.paused||le.on}),et.update(P),clearTimeout(Ge),Ge=setTimeout(()=>et?.still(),Mt.still*1e3)}let Ue=()=>{if(t)for(let P of Object.keys(ve))Ne(P)};e.on(()=>{(!a.master||!a.sfx)&&(clearTimeout(Ge),et?.still()),!e.voice&&m.kind==="guide"&&(N(),Ie(),h.pause(),m.clip&&(m.status="stopped"),ne=0),$(),O()});let tt={prefs:a,state:m,el:h,get ready(){return!!t},get position(){return h.duration?h.currentTime/h.duration:0},get time(){return h.currentTime||0},get duration(){return h.duration||0},get playing(){return le.on||!h.paused&&!h.ended},store:e,get voiceOn(){return e.voice},get soundsOn(){return e.sounds},set(P){e.set(P),q()},toggle(P,H){e.toggle(P,H),q()},play:C,playUrl:Z,say:Me,voiceName:se,pause:ie,resume:ce,stop:je,seek:De,energy:St,peaks:it,peaksUrl:rt,sfx:Fe,friction:Pt,motion:Ze,unlock:q,get live(){return!!t&&t.state==="running"},microphone(P){return Ui({...P,getContext:W})},once(P){return m.journey.has(P)||!a.master||!a.guide?Promise.resolve(!1):(m.journey.add(P),C(P).then(H=>(H||m.journey.delete(P),H)))},on(P){return o.add(P),()=>o.delete(P)}};return tt}var Io=ra.filter(e=>e.published!==!1),Zi=e=>e.id==="orb"||e.code==="kit",dl=" Everything is free during early access, and Studio is open to try.",cl={"reply.missed":"I didn\u2019t catch that. Tap me and try again, or type.","reply.intro":`Hello, I\u2019m the Light Orb, your guide here. Tap me and speak, or type: ask me for recommendations, materials and textures, or say Products, Templates, Studio or Sound and I\u2019ll take you there.${dl}`,"reply.greet":"Hi, I\u2019m the Light Orb. Tap me whenever you want to talk.","reply.help":"Ask me which Orb suits your project, about its materials and textures, or how to get the free code. Or say Products, Templates, Studio or Sound and I\u2019ll take you there.","reply.thanks":"With pleasure. I\u2019m right here when you need me.","reply.who":"I\u2019m the Light Orb, the guide of this place. I can recommend a piece or a texture, answer your questions, and take you anywhere on the site.","reply.back":"Going back.","reply.unknown":"I\u2019m still learning words. Ask me for a recommendation, or say Products, Templates, Studio or Sound.","reply.mic":"The microphone is off. You can type to me instead."},pl=" Todo es gratis durante el acceso anticipado, y Studio est\xE1 abierto para probarlo.",ul={"reply.missed":"No te he entendido. T\xF3came e int\xE9ntalo otra vez, o escr\xEDbeme.","reply.intro":`Hola, soy la Light Orb, tu gu\xEDa aqu\xED. T\xF3came y habla, o escr\xEDbeme: p\xEDdeme recomendaciones, materiales y texturas, o di Productos, Plantillas, Studio o Sonido y te llevo.${pl}`,"reply.greet":"Hola, soy la Light Orb. T\xF3came cuando quieras hablar.","reply.help":"Preg\xFAntame qu\xE9 Orb encaja con tu proyecto, por sus materiales y texturas, o c\xF3mo conseguir el c\xF3digo gratis. O di Productos, Plantillas, Studio o Sonido y te llevo.","reply.thanks":"Con gusto. Aqu\xED estoy cuando me necesites.","reply.who":"Soy la Light Orb, la gu\xEDa de este lugar. Te recomiendo piezas y texturas, respondo tus preguntas y te llevo a cualquier parte de la web.","reply.back":"Volvemos.","reply.unknown":"A\xFAn estoy aprendiendo palabras. P\xEDdeme una recomendaci\xF3n, o di Productos, Plantillas, Studio o Sonido.","reply.mic":"El micr\xF3fono est\xE1 desactivado. Puedes escribirme."},or=(e,a="en")=>a==="es"?{id:null,text:ul[e],lang:"es"}:{id:e,text:cl[e],lang:"en"},Ji={profile:"your profile",downloads:"your downloads",saved:"what you have saved",designs:"the designs you made in Studio"};function gl(e,a){if(e==="products"&&a){let o=Io.find(t=>t.id===a);if(o)return{id:`present.product.${o.id}`,text:`This is ${o.name}. ${Zi(o)?"Try its versions; each one is free, with its code.":"Try its versions, or shape it in Studio."}`}}if(e==="templates"&&a){let o=zt.find(t=>t.id===a);if(o)return{id:`present.template.${o.id}`,text:`You are looking at the template ${o.name}. ${o.line}`}}return e==="products"?{id:"present.products",text:`Products: ${Io.length} pieces, ready to use. Choose one to see it alive.`}:e==="templates"?{id:"present.templates",text:zt.length===1?"Templates: a complete composition of light and glass to start from. Open it to see it move.":`Templates: ${zt.length} complete compositions of light and glass to start from. Open one to see it move.`}:e==="studio"?{id:"present.studio",text:`This is Studio${", free while we build it"}. Drag me to turn me, move my light with the light tool, and shape my glass with the controls. Save your design when it feels right.`}:e==="sound"?{id:"present.sound",text:"This is Sound: choose the voice I speak with, and listen to the small sounds of the glass."}:e==="membership"?{id:"present.membership",text:"This is Membership. Everything is free for now; leave your email to hear first when plans open."}:e==="account"?a&&Ji[a]?{id:`present.account.${a}`,text:`This is your account, showing ${Ji[a]}.`}:{id:"present.account",text:"This is your account."}:e==="privacy"?{id:"present.privacy",text:"This is the privacy page: what the site keeps, and what you can ask for."}:e==="terms"?{id:"present.terms",text:"These are the terms of use of the site."}:e==="licence"?{id:"present.licence",text:"This is the licence: what you can do with the free Orb and with the pieces."}:e==="signin"?{id:"present.signin",text:"Use the email you joined with to link this device to your early access."}:e==="signup"?{id:"present.signup",text:"Join early access with your email. Everything is free while we build it, and you will hear first when new pieces open."}:{id:"present.home",text:"This is The Light Orb: objects of light and glass. Below, choose where to begin: Products, Templates, Studio or Sound. Tap me again to stop, or ask me anything."}}var Qi={products:"Productos: objetos de luz y vidrio. Elige uno para verlo vivo.",templates:"Plantillas: composiciones completas para empezar.",studio:"Esto es Studio, gratis mientras lo construimos. Da forma a la luz y guarda tu dise\xF1o.",sound:"Esto es Sonido: las voces y los sonidos del vidrio.",membership:"Esto es Membres\xEDa. Ahora todo es gratis; deja tu email y sabr\xE1s primero cu\xE1ndo abren los planes.",home:"Bienvenida a The Light Orb. Soy tu gu\xEDa: t\xF3came para hablar."};function en(e,a,o){let t=gl(a,o);if(e!=="es")return{...t,lang:"en"};if(a==="products"&&o){let s=Io.find(g=>g.id===o);if(s)return{id:null,lang:"es",text:`Esto es ${s.name}. Prueba sus versiones${Zi(s)?"; cada una es gratis, con su c\xF3digo":", o dale forma en Studio"}.`}}return Qi[a]&&!o?{id:null,lang:"es",text:Qi[a]}:{...t,lang:"en"}}var tn=e=>({id:`already.${e.id}`,text:`We are already here. ${e.text}`}),an=e=>({id:`piece.${e.id}`,text:`Here is ${e.name}. ${e.line}`}),rn=e=>({id:`open.${e.id}`,text:`Opening ${e.name}.`}),on=()=>({id:"piece.orb",text:`Here is the Orb. ${ra[0].line}`});var nn="lightorb:theme",hl={light:{pearl:[243,243,241],top:[250,251,251],low:[214,217,220],sky:"255,255,255",skyA:.62,mass:"196,201,206",massA:.35,glow:"255,255,255",glowA:.7,shadow:"70,72,78",orbBackground:"#f3f3f1",orb:{dark:!1,world:"gallery",envBoost:1},cases:{bg:["#f3f3f1","#f1f1ef","#e9eae8"],room:"#6c6f6c",floor:"#eeefed",hemi:["#ffffff","#dcdedc",.6],env:1.35}},dark:{pearl:[7,7,8],top:[11,11,12],low:[2,2,3],sky:"232,226,212",skyA:.03,mass:"0,0,0",massA:.6,glow:"236,230,216",glowA:.07,shadow:"0,0,0",orbBackground:"#070708",orb:{dark:!0,world:"smoke",envBoost:1.15},cases:{bg:["#0e0e0f","#09090a","#040405"],room:"#141415",floor:"#2a2b2b",hemi:["#ffffff","#202222",.35],env:1.7}}},ml=()=>{try{return localStorage.getItem(nn)}catch{return null}},Hr=e=>e==="light"||e==="dark";function fl(){let e=new URLSearchParams(location.search).get("theme");if(Hr(e))return e;let a=ml();return Hr(a)?a:"light"}var ir=()=>document.documentElement.dataset.theme==="dark"?"dark":"light",ua=()=>hl[ir()];function sn(e){document.documentElement.dataset.theme=e,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",e==="dark"?"#141515":"#F3F3F1")}function ln(e,{remember:a=!0}={}){if(Hr(e)){if(sn(e),a)try{localStorage.setItem(nn,e)}catch{}document.dispatchEvent(new CustomEvent("lightorb:theme",{detail:{theme:e}}))}}typeof document<"u"&&sn(Hr(document.documentElement.dataset.theme)?ir():fl());var nr=(e,a,o)=>e+(a-e)*o,sr=e=>{let a=parseInt(String(e).replace("#",""),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]},dc=sr("#f3d8c5"),bl={fill:.08,lobe:.2,wall:.55,core:.034},Wt=e=>structuredClone(e??Dr);function _r(e,a,o={}){let t=ua().orb,s=o.dark===!0,{envBoost:g=s?1:t.envBoost,exposure:i=0,left:c=.65,right:d=.55}=o,h=s||t.dark,p=a.shell,m=a.light,F=a.interior;e.setOptics({...bl,lobe:nr(.1,.3,m.spread),core:nr(.026,.044,m.spread)}),e.setInterior({kind:F.kind,amount:F.amount,size:F.size,motion:F.motion,fill:F.fill,colour:F.colour}),e.setElastic(p.elastic??0);let Q=sr(p.tint);e.setMaterial({roughness:p.roughness,thickness:nr(.3,1.4,p.thickness),ior:p.ior,envMapIntensity:(h?1.9:2.1)*g*2**(i*.5),tint:Q,tintDistance:p.tintAmount>.001?nr(8,.4,p.tintAmount):0}),e.setNeutral?.(!0);let n=sr(m.colour),A=Math.max(...n);e.setLight({tint:n.map(W=>W/Math.max(.05,A)*1.05),spread:nr(.7,1.6,m.spread)}),e.setBloom(nr(.004,.08,m.glow)),e.setFocus({x:m.x,y:m.y,z:m.z}),e.setTone(h?"dark":"light"),e.setVolumeWorld(0),e.lockFeather([.5,.515]);let O=W=>(Math.round(W*10)/10).toFixed(1);return e.setWorld(s?`chamber:${O(c)}:${O(d)}`:t.world),e.setEnvironmentLevel?.(o.envLevel??1),{emission:m.strength/.72*2**(i*.35)*(o.keyLevel??1),voice:a.voice}}var Lt=(e,a)=>a.split(".").reduce((o,t)=>o?.[t],e),br=e=>Math.min(1,Math.max(0,e));function dn(e={}){let a=e.material??{},o=e.interior??{},t=e.light??{},s=Wt(pa("original").config);if(a.tint){s.shell.tint=a.tint;let[g,i,c]=sr(a.tint),d=Math.max(g,i,c)-Math.min(g,i,c);d>.04&&(s.shell.tintAmount=Math.min(.97,.8+d*.2))}if(s.shell.ior=Math.min(2,Math.max(1,1+.58*(a.refraction??1))),s.shell.roughness=Math.min(.5,Math.max(0,.01+(a.frost??0)*.45)),s.interior.amount=br(s.interior.amount*(1+(o.amount??0))),s.interior.size=br(s.interior.size*(o.size??1)),s.interior.motion=br(s.interior.motion*(o.speed??1)),s.light.strength=br(s.light.strength*(o.glow??1)),s.light.glow=br(s.light.glow*(t.key??1)),t.colour&&(s.light.colour=t.colour),a.tint){let g=sr(a.tint),i=sr(s.light.colour);Math.max(...g)-Math.min(...g)>.04&&(s.light.colour="#"+i.map((d,h)=>Math.round((d*.4+g[h]*.6)*255).toString(16).padStart(2,"0")).join(""))}return s}var cn=`
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
`;var pn=`
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
.arc-s{display:block;margin-top:4px;font-size:13.5px;color:var(--muted);opacity:0;transition:opacity .4s}
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
.wel-line{max-width:28ch}
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
.file-grid.is-compact .file-m h3{font-size:14.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
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
`;var un=`
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
`;var gn=matchMedia("(prefers-reduced-motion: reduce)"),xl={gel:"gel",lens:"glass",type:"type",mag:"control"},vl={gel:7,glass:16,chrome:18,type:12,control:20,base:13},yl=e=>xl[e.dataset.objCard]??(e.querySelector(".has-kit")?"control":e.querySelector("[data-sphere]")?/chrome|liquid|mirror/i.test(e.querySelector("[data-sphere]").dataset.sphere)?"chrome":"glass":"base");function hn(e=document){let a=document.createElement("style");a.dataset.ix="",a.textContent=un,document.head.append(a);let o=new Map,t=new Set,s=0,g=0,i=()=>{s||(g=performance.now(),s=requestAnimationFrame(x))},c=420,d=2*Math.sqrt(c),h=(f,T)=>{let B=c*(f.t-f.x)-d*f.v;return f.v+=B*T,f.x+=f.v*T,Math.abs(f.t-f.x)<.2&&Math.abs(f.v)<4&&(f.x=f.t,f.v=0),f.x!==f.t||f.v!==0},p=f=>({x:f,v:0,t:f}),m=f=>[...f.children].filter(T=>T.classList?.contains("pill")),F=f=>["aria-checked","aria-pressed","aria-selected"].some(T=>f.getAttribute(T)==="true")||f.classList.contains("on"),Q=f=>({x:f.offsetLeft,w:f.offsetWidth,y:f.offsetTop,h:f.offsetHeight});function n(f,T,B){let j=Math.min(.07,Math.abs(T.x.v)/9e3);f.style.transform=`translate3d(${T.x.x}px,${B.y}px,0) scaleY(${1-j})`,f.style.width=`${Math.max(8,T.w.x)}px`,f.style.height=`${B.h}px`}function A(f){if(o.has(f)||!m(f).length)return;let T=document.createElement("span");T.className="ix-sel",T.setAttribute("aria-hidden","true"),f.prepend(T),f.classList.add("ix-seg");let B={bar:f,sel:T,S:{x:p(0),w:p(0)},cand:null,act:null,box:{y:0,h:0},shown:!1};B.mo=new MutationObserver(()=>O(B,!0)),B.mo.observe(f,{attributes:!0,subtree:!0,attributeFilter:["aria-checked","aria-pressed","aria-selected"]}),B.ro=new ResizeObserver(()=>O(B,!1)),B.ro.observe(f),o.set(f,B),O(B,!1)}function O(f,T){f.act=m(f.bar).find(F)??null,W(f,f.cand??f.act,T)}function W(f,T,B){if(f.sel.style.opacity=T?"":"0",!T)return;let j=Q(T);f.box=j,f.S.x.t=j.x,f.S.w.t=j.w,!B||gn.matches||!f.shown?(f.S.x.x=j.x,f.S.w.x=j.w,f.S.x.v=f.S.w.v=0,n(f.sel,f.S,j),f.shown=!0):(t.add(f),i())}function $(f,T){f&&(f.cand?.classList.remove("ix-cand"),f.cand=T,T?.classList.add("ix-cand"),W(f,T??f.act,!0))}let q=new Map;function U(f,T){let B=q.get(f);return B||(B={x:.5,y:.4,on:0,p:0,tx:.5,ty:.4,ton:0,tp:0,follow:T},q.set(f,B)),B.rect=f.getBoundingClientRect(),B}function R(f,T,B){f.rect||(f.rect=B.getBoundingClientRect()),f.still=!1,f.tx=Math.min(1,Math.max(0,(T.clientX-f.rect.left)/f.rect.width)),f.ty=Math.min(1,Math.max(0,(T.clientY-f.rect.top)/f.rect.height))}function N(f){if(f.querySelector(":scope>.ix-sheen"))return;let T=document.createElement("span");T.className="ix-sheen",T.setAttribute("aria-hidden","true"),f.append(T),f.classList.add("ix-card"),f.dataset.ixMat=yl(f)}function x(f){let T=Math.min(.05,(f-g)/1e3);g=f;for(let j of t){let z=h(j.S.x,T)|h(j.S.w,T);n(j.sel,j.S,j.box),z||t.delete(j)}let B=!1;for(let[j,z]of q){if(z.still)continue;let pe=gn.matches?1:1-Math.exp(-z.follow*T),me=1-Math.exp(-(z.ton>z.on?14:7)*T);z.x+=(z.tx-z.x)*pe,z.y+=(z.ty-z.y)*pe,z.on+=(z.ton-z.on)*me,z.p+=(z.tp-z.p)*(1-Math.exp(-(z.tp>z.p?18:5)*T));let Me=Math.abs(z.tx-z.x)<.002&&Math.abs(z.ty-z.y)<.002&&Math.abs(z.ton-z.on)<.01&&Math.abs(z.tp-z.p)<.01;Me&&(z.x=z.tx,z.y=z.ty,z.on=z.ton,z.p=z.tp),j.style.setProperty("--ix-x",z.x.toFixed(4)),j.style.setProperty("--ix-y",z.y.toFixed(4)),j.style.setProperty("--ix-on",z.on.toFixed(3)),j.style.setProperty("--ix-p",z.p.toFixed(3)),Me&&z.ton===0&&z.tp===0?(j.style.removeProperty("--ix-on"),j.style.removeProperty("--ix-p"),q.delete(j)):Me&&!j.isConnected?q.delete(j):Me?z.still=!0:B=!0}s=t.size||B?requestAnimationFrame(x):0}let y=f=>{let T=f.target.closest?.(".ix-seg>.pill");return T?[o.get(T.parentElement),T]:[null,null]},C=f=>{if(f.pointerType!=="mouse"&&f.pointerType!=="pen")return;let T=f.target.closest?.(".segbar");T&&!o.has(T)&&A(T);let[B,j]=y(f);B&&j!==B.cand&&$(B,j);let z=f.target.closest?.(".file");if(z){N(z);let pe=U(z,vl[z.dataset.ixMat]??13);pe.ton=1,R(pe,f,z),i()}},Z=f=>{let T=f.relatedTarget,B=f.target.closest?.(".ix-seg");if(B&&!B.contains(T)){let z=o.get(B);$(z,null)}let j=f.target.closest?.(".file");if(j&&!j.contains(T)){let z=q.get(j);z&&(z.ton=0,z.tp=0,z.still=!1,i())}},Y=f=>{if(f.pointerType!=="mouse"&&f.pointerType!=="pen")return;let T=f.target.closest?.(".file");if(T){let j=q.get(T);j&&(R(j,f,T),i())}let B=f.target.closest?.(".ix-seg");if(B){let j=o.get(B);j.left||(j.left=B.getBoundingClientRect().left-B.scrollLeft);let z=f.clientX-j.left;j.sel.style.setProperty("--ix-sx",((z-j.S.x.x)/Math.max(1,j.S.w.x)).toFixed(3)),j.sel.style.setProperty("--ix-on","1")}},J=f=>{let T=f.target.closest?.(".file");if(T&&f.target.closest(".file-v")){let B=q.get(T)??U(T,13);B.tp=1,f.pointerType==="mouse"&&(B.ton=1),R(B,f,T),i()}},ie=()=>{for(let f of q.values())f.tp&&(f.tp=0,f.still=!1);q.size&&i()},ce=f=>{let T=f.target.closest?.(".ix-seg");if(T&&!T.contains(f.relatedTarget)){let B=o.get(T);B&&(B.left=0,B.sel.style.removeProperty("--ix-on"))}},ee=f=>{let T=f.target.closest?.(".segbar");if(!T)return;A(T);let B=o.get(T);f.target.matches(":focus-visible")&&f.target.classList.contains("pill")&&$(B,f.target)},ne=f=>{let T=f.target.closest?.(".ix-seg");T&&!T.contains(f.relatedTarget)&&$(o.get(T),null)};e.addEventListener("pointerover",C,{passive:!0}),e.addEventListener("pointerout",Z,{passive:!0}),e.addEventListener("pointerout",ce,{passive:!0}),e.addEventListener("pointermove",Y,{passive:!0}),e.addEventListener("pointerdown",J,{passive:!0}),addEventListener("pointerup",ie,{passive:!0}),addEventListener("pointercancel",ie,{passive:!0}),e.addEventListener("focusin",ee),e.addEventListener("focusout",ne);let le=()=>{for(let f of q.values())f.rect=null;for(let f of o.values())f.left=0};addEventListener("scroll",le,{passive:!0,capture:!0});let Ie=0,qe=()=>{Ie=0;for(let[f,T]of o)f.isConnected||(T.mo.disconnect(),T.ro.disconnect(),T.cand=null,t.delete(T),o.delete(f));document.querySelectorAll(".segbar:not(.ix-seg)").forEach(A),document.querySelectorAll(".file:not(.ix-card)").forEach(N)},D=new MutationObserver(()=>{Ie||(Ie=requestAnimationFrame(qe))});return D.observe(document.body,{childList:!0,subtree:!0}),qe(),{dispose(){D.disconnect(),cancelAnimationFrame(s);for(let f of o.values())f.mo.disconnect(),f.ro.disconnect();o.clear(),q.clear(),t.clear(),a.remove(),e.removeEventListener("pointerover",C),e.removeEventListener("pointerout",Z),e.removeEventListener("pointerout",ce),e.removeEventListener("pointermove",Y),e.removeEventListener("pointerdown",J),removeEventListener("pointerup",ie),removeEventListener("pointercancel",ie),e.removeEventListener("focusin",ee),e.removeEventListener("focusout",ne),removeEventListener("scroll",le,!0)}}}var _="html[data-theme=dark]",mn=`
${_}{
  --bg:#070708; --surface:#101112; --surface-2:#18191A; --ink:#ECEDEA; --muted:#9A9E9B; --faint:#929693; --line:rgba(236,237,234,.1);
  --greige:#5A5752; --champagne:#E6DCC8;
  --glass-hi:rgba(255,255,255,.16); --glass-rim:rgba(255,255,255,.1); --glass-body:rgba(255,255,255,.05);
  color-scheme:dark;
}
${_} body{background:var(--bg)}
/* header surface */
${_} .hd::before{background:linear-gradient(180deg,rgba(7,7,8,.94),rgba(7,7,8,.74) 62%,rgba(7,7,8,0))}
/* light capsule \u2192 clear glass on smoke: transparent body, bright top rim, champagne lower edge */
${_} .gb{color:var(--ink);background:linear-gradient(180deg,rgba(255,255,255,.1) 0%,rgba(255,255,255,.045) 55%,rgba(255,255,255,.07) 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.22),inset 0 -2px 3px -1px rgba(200,202,201,.18),inset 0 0 0 1px rgba(255,255,255,.08),0 1px 1px rgba(0,0,0,.3),0 10px 22px -12px rgba(0,0,0,.7)}
${_} .gb:hover{box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 -2px 3px -1px rgba(200,202,201,.24),inset 0 0 0 1px rgba(255,255,255,.12),0 1px 1px rgba(0,0,0,.3),0 14px 26px -12px rgba(0,0,0,.75)}
${_} .gb:active,${_} .gb.pressed{box-shadow:inset 0 2px 4px rgba(0,0,0,.5),inset 0 0 0 1px rgba(255,255,255,.08)}
${_} .gb.primary{color:#0b0b0c;background:linear-gradient(180deg,#f4f4f2 0%,#e3e4e1 60%,#d6d8d5 100%);
  box-shadow:inset 0 1px 0 #fff,inset 1px 0 1px rgba(255,255,255,.8),inset -1px 0 1px rgba(255,255,255,.8),inset 0 -1px 0 rgba(255,255,255,.7),inset 0 -6px 8px -5px rgba(120,112,98,.38),
    0 1px 0 rgba(0,0,0,.8),0 2px 4px -1px rgba(0,0,0,.6),0 12px 24px -10px rgba(0,0,0,.85)}
${_} .gb.primary:hover{background:linear-gradient(180deg,#fff 0%,#eceeeb 60%,#dfe1de 100%)}
${_} .gb[aria-pressed=true],${_} .gb.selected{box-shadow:inset 0 0 0 1.5px var(--ink),inset 0 1px 0 rgba(255,255,255,.2),0 6px 14px -10px rgba(0,0,0,.6)}
${_} .gb[disabled],${_} .gb[aria-disabled=true]{box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
${_} .gb[aria-busy=true]::after{border-color:rgba(236,237,234,.25);border-top-color:var(--ink)}
${_} .gb:focus-visible,${_} .gi:focus-visible,${_} .gsel:focus-visible,${_} .gsw:focus-visible,${_} .grange:focus-visible,${_} .pill:focus-visible,${_} .tl:focus-visible{outline-color:var(--ink)}
/* captions, menus, words that speak */
${_} .caption{background:rgba(14,14,15,.84);color:var(--ink);box-shadow:0 0 0 1px rgba(255,255,255,.07)}
${_} .orb-ask{background:rgba(30,32,32,.9);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 0 0 1px rgba(255,255,255,.1),0 8px 30px rgba(0,0,0,.3)}
${_} .orb-ask button{background:rgba(255,255,255,.08)}
${_} .orb-ask button[aria-pressed=true]{color:#141515}
${_} .orb-ask button:focus-visible{outline:2px solid var(--ink);outline-offset:3px}
/* Track B's independently mounted popover declares local light defaults. Keep
   this selector more specific; its stylesheet may be injected after ours. */
${_} .sndc-site,${_} .complete .sndc-intro{
  --snd-ink:#ECEDEA;--snd-muted:#9A9E9B;--snd-glass-top:rgba(255,255,255,.14);--snd-glass-bot:rgba(255,255,255,.04);
  --snd-edge:rgba(255,255,255,.12);--snd-hi:rgba(255,255,255,.3);--snd-shadow:rgba(0,0,0,.75);--snd-pane:rgba(30,32,32,.96);
  --snd-track:rgba(255,255,255,.14);--snd-on:#ECEDEA;--snd-knob:#141515;--snd-focus:#ECEDEA;
}
${_} .sndc-site .sndc-t[aria-pressed=false] .sndc-sw::after,${_} .complete .sndc-intro .sndc-t[aria-pressed=false] .sndc-sw::after{background:var(--snd-ink)}
${_} .menu{background:rgba(14,14,15,.9);box-shadow:0 0 0 1px rgba(255,255,255,.08),0 24px 50px -24px rgba(0,0,0,.8)}
${_} [data-speak]:hover,${_} [data-speak]:focus-visible{text-decoration-color:rgba(236,237,234,.3)}
${_} [data-speak][data-speaking]{text-decoration-color:rgba(236,237,234,.6)}
${_} .qt figcaption a{text-decoration-color:rgba(236,237,234,.3)}
/* cards and panels: smoke, hairline rims instead of soft shadows */
${_} .arc-img{box-shadow:0 0 0 1px rgba(255,255,255,.08),0 30px 50px -34px rgba(0,0,0,.9)}
${_} .arc-c.on .arc-img{box-shadow:0 0 0 1px rgba(255,255,255,.14),0 40px 60px -34px rgba(0,0,0,.95)}
/* The glass layer (glass.css.js "clear glass" pass) on smoke: same clear body, rims
   lit from above, a faint champagne lower edge. !important only to beat that pass's
   high-specificity :not(.dark) selectors without touching them. */
${_} .gb:not(.primary),${_} .pill[aria-checked=true],${_} .pill[aria-pressed=true],${_} .pill[aria-selected=true],${_} .pill.on,${_} .gdd-b,${_} .segbar{
  color:var(--ink);background:linear-gradient(180deg,rgba(255,255,255,.14) 0%,rgba(255,255,255,.035) 44%,rgba(0,0,0,.22) 56%,rgba(255,255,255,.07) 100%)!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.5),inset 0 0 0 1px rgba(255,255,255,.1),inset 1px 0 1px rgba(255,255,255,.1),inset -1px 0 1px rgba(255,255,255,.1),
    inset 0 -1px 0 rgba(200,202,201,.32),inset 0 -6px 8px -6px rgba(200,202,201,.14),inset 0 -10px 12px -10px rgba(0,0,0,.7),
    0 1px 0 rgba(0,0,0,.7),0 2px 4px -1px rgba(0,0,0,.65),0 14px 26px -12px rgba(0,0,0,.9)!important}
${_} .gb:not(.primary):hover{box-shadow:inset 0 1px 0 rgba(255,255,255,.62),inset 0 0 0 1px rgba(255,255,255,.14),inset 1px 0 1px rgba(255,255,255,.14),inset -1px 0 1px rgba(255,255,255,.14),
    inset 0 -1px 0 rgba(200,202,201,.4),inset 0 -6px 8px -6px rgba(200,202,201,.18),inset 0 -10px 12px -10px rgba(0,0,0,.7),
    0 1px 0 rgba(0,0,0,.7),0 3px 6px -1px rgba(0,0,0,.65),0 18px 30px -12px rgba(0,0,0,.9)!important}
${_} .gb:not(.primary):active{box-shadow:inset 0 2px 5px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,255,255,.1),inset 0 -1px 0 rgba(200,202,201,.2),0 1px 1px rgba(0,0,0,.7)!important}
${_} .gb:not(.primary)::before{left:14%;top:2px;width:38%;height:38%;background:radial-gradient(70% 80% at 45% 20%,rgba(255,255,255,.42),rgba(255,255,255,0) 70%)}
${_} .gb:not(.primary)::after{background:radial-gradient(60% 80% at 50% 100%,rgba(200,202,201,.26),rgba(200,202,201,0) 75%)}
${_} .gb.primary::before,${_} .gb.primary::after{opacity:.5}
${_} .glass,${_} .folder-track .tcard.glass{
  background:linear-gradient(180deg,rgba(255,255,255,.06) 0%,rgba(255,255,255,.02) 34%,rgba(255,255,255,.008) 70%,rgba(255,255,255,.025) 100%)!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 0 0 1px rgba(255,255,255,.09),inset 1px 0 0 rgba(255,255,255,.12),inset 0 -1px 0 rgba(200,202,201,.14),0 30px 60px -36px rgba(0,0,0,.9)!important}
/* The light folder glow used .95 white behind transparent cards, washing out
   the dark description. Keep its depth, with text above the decorative glare. */
${_} .folder-glow{background:radial-gradient(closest-side,rgba(255,255,255,.1),rgba(236,237,234,.035) 55%,transparent)}
/* Shared glass sheen on smoke (post-launch 2026-10-27): the light pass's .glass::after (a .7 white
   glare + a .26 white 115deg band) was never overridden here, so every dark card, the inquiry panel and
   the showcase carried a broad white stripe. On smoke the material reads from the rim (box-shadow above)
   and a faint fall-off from the top edge; no band, nothing animated. */
${_} .glass::after{background:radial-gradient(130% 55% at 50% -12%,rgba(255,255,255,.055),rgba(255,255,255,0) 62%)!important}
${_} .folder .glass::after{z-index:0;background:radial-gradient(120% 60% at 20% -10%,rgba(255,255,255,.1),transparent 55%),linear-gradient(115deg,transparent 40%,rgba(255,255,255,.04) 48%,transparent 56%)}
${_} .folder-track{z-index:1}
${_} .tcard.on .tcard-n,${_} .tcard.on .tcard-t,${_} .tcard.on .tcard-l{position:relative;z-index:1}
${_} .tcard.on .tcard-n,${_} .tcard.on .tcard-l{color:#B4B8B5}
${_} .pane,${_} .gdd-l{background:rgba(14,14,15,.8);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 0 0 1px rgba(255,255,255,.07),0 24px 50px -24px rgba(0,0,0,.85)}
${_} .gdd-o[aria-selected=true]{background:rgba(255,255,255,.1);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
${_} .gi,${_} .gsel{background-color:rgba(255,255,255,.05);color:var(--ink);box-shadow:inset 0 0 0 1px rgba(255,255,255,.14)}
${_} .gsel{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' fill='none' stroke='%23ECEDEA' stroke-width='1.4' stroke-linecap='round'%3E%3Cpath d='M1 1l4.5 4.5L10 1'/%3E%3C/svg%3E")}
${_} .gsw{background:rgba(255,255,255,.14);box-shadow:inset 0 1px 2px rgba(0,0,0,.5)}${_} .gsw[aria-checked=true]{background:rgba(255,255,255,.5)}
${_} .gsw[aria-checked=true]::after{background:#141515;box-shadow:inset 0 0 0 1px rgba(255,255,255,.15)}
${_} .grange::-webkit-slider-runnable-track{background:linear-gradient(90deg,var(--ink) var(--p),rgba(255,255,255,.2) var(--p))}
${_} .grange::-moz-range-track{background:rgba(255,255,255,.2)}${_} .grange::-moz-range-progress{background:var(--ink)}
${_} .org .pill[aria-selected=true]{background:rgba(255,255,255,.12)}
${_} .plan{background:rgba(255,255,255,.04);box-shadow:0 0 0 1px rgba(255,255,255,.08)}
${_} .plan.em{background:rgba(255,255,255,.08);box-shadow:0 0 0 1px rgba(255,255,255,.16),0 30px 50px -36px rgba(0,0,0,.9)}
${_} .si-row:hover{background:rgba(255,255,255,.05)}
/* stages and thumbnails: smoke behind the objects (product photos themselves are unchanged) */
${_} .pc-v,${_} .shop-v,${_} .pd-stage,${_} .pd-stage.glass,${_} .tcard-cv{background:radial-gradient(80% 70% at 50% 42%,#2a2c2c,#141515)}
${_} .cv-products,${_} .cv-sound{background:radial-gradient(90% 70% at 30% 20%,#3a3c3c 0%,#1e2020 45%,#0f1010 100%)!important}
${_} .cv-templates{background:linear-gradient(160deg,#2c2d2d 0%,#1a1b1b 55%,#0e0f0f 100%)!important}
/* the welcome and quotation type (site.css.js sets a fixed near-black) */
${_} .qt blockquote p,${_} .wel-h{color:var(--ink)}
/* ambient light behind products / templates / sound: charcoal smoke, no colour */
${_} .lo.r-products::before,${_} .lo.r-templates::before,${_} .lo.r-sound::before{
  background:radial-gradient(34% 30% at 60% 16%,rgba(200,202,201,.022),transparent 70%)}   /* owner 2026-10-21: no broad grey glow */
/* fixed text greys and small chips in site.css.js */
${_} .lede,${_} .legal-b p,${_} .dh-l{color:#B4B8B5}
${_} .file-ext,${_} .file-v .file-ext{background:rgba(255,255,255,.1);color:var(--muted)}
${_} .studio-lock{background:rgba(255,255,255,.05);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 0 0 1px rgba(255,255,255,.08)}
${_} .cart-n{background:var(--ink);color:#141515}
/* \u2500\u2500 Home selector cards in dark (owner 2026-10-21): black translucent glass, not milky slabs \u2500\u2500 */
/* !important: card rules such as .dg-win img{display:block} must not show the twin */
.lo-dark-only{display:none!important}${_} .lo-dark-only{display:block!important}${_} .lo-light-only{display:none!important}
${_} .dg-img,${_} .dg-templates{background:radial-gradient(80% 60% at 50% 38%,rgba(255,255,255,.045),rgba(255,255,255,0) 62%),linear-gradient(180deg,#0f0f11 0%,#08080a 60%,#050506 100%);
  box-shadow:0 1px 0 rgba(0,0,0,.85),0 2px 6px -2px rgba(0,0,0,.8),0 30px 50px -30px rgba(0,0,0,.95)}
/* the glass itself, above the picture: lit top edge, curved sides, a faint champagne lower lip, one restrained sheen */
${_} .dg-img::before{content:"";position:absolute;inset:0;z-index:3;border-radius:inherit;pointer-events:none;
  background:linear-gradient(155deg,rgba(255,255,255,.075) 0%,rgba(255,255,255,0) 30%,rgba(255,255,255,0) 78%,rgba(255,255,255,.025) 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 1px 0 1px rgba(255,255,255,.09),inset -1px 0 1px rgba(255,255,255,.09),inset 0 -1px 0 rgba(200,202,201,.18),
    inset 0 0 0 1px rgba(255,255,255,.07),inset 0 22px 34px -28px rgba(255,255,255,.16),inset 0 -26px 34px -28px rgba(0,0,0,.8)}
${_} .dg-c.on .dg-img{box-shadow:0 1px 0 rgba(0,0,0,.85),0 3px 8px -2px rgba(0,0,0,.85),0 36px 56px -30px rgba(0,0,0,1)}
${_} .dg-c.on .dg-img::before{box-shadow:inset 0 1px 0 rgba(255,255,255,.4),inset 1px 0 1px rgba(255,255,255,.12),inset -1px 0 1px rgba(255,255,255,.12),inset 0 -1px 0 rgba(200,202,201,.24),
    inset 0 0 0 1px rgba(255,255,255,.1),inset 0 22px 34px -28px rgba(255,255,255,.2),inset 0 -26px 34px -28px rgba(0,0,0,.8)}
${_} .dg-products>img{mix-blend-mode:normal}
${_} .dg-win{background:#0a0a0b;box-shadow:0 0 0 1px rgba(255,255,255,.12),0 18px 30px -16px rgba(0,0,0,.95)}
${_} .dg-win::after{background:linear-gradient(155deg,rgba(255,255,255,.14) 0%,rgba(255,255,255,0) 36%)}
${_} .dg-templates::after{background:radial-gradient(closest-side,rgba(0,0,0,.7),transparent)}
${_} .cv-wave i{background:linear-gradient(90deg,rgba(255,255,255,.14),rgba(255,255,255,.05));box-shadow:inset 0 0 0 1px rgba(255,255,255,.12),0 6px 10px -6px rgba(0,0,0,.8)}
${_} .cv-wave i:nth-child(-n+9){background:linear-gradient(90deg,#f1f1ee,#c9cbc8);box-shadow:inset 0 1px 0 #fff,0 6px 10px -6px rgba(0,0,0,.8)}
/* the theme switch sits beside the sound control (Track B owns .snd) */
.thm{position:relative}
/* Templates (owner 2026-10-28): graphite structure, light preview surfaces, so the work reads first. */
${_} .tcard-cv,${_} .fo-cv,${_} .pd-stage.cover-big{background:radial-gradient(85% 75% at 50% 38%,#f3f3f1,#d9dbd8 72%,#c9cbc8)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.35),0 18px 34px -22px rgba(0,0,0,.9)!important}
${_} .tcard-cv .dev-floor,${_} .fo-cv .dev-floor{background:radial-gradient(closest-side,rgba(38,40,39,.35),transparent)}
${_} .folder-track .tcard.glass.on{box-shadow:inset 0 1px 0 rgba(255,255,255,.22),inset 0 0 0 1px rgba(255,255,255,.12),0 40px 70px -34px rgba(0,0,0,.95)!important}
${_} .tcard-tag{color:#a9aca9}
`;var ga="html.ds2:not([data-theme=dark])",fn=`
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
${ga} .gb{background:linear-gradient(180deg,rgba(255,255,255,.74) 0%,rgba(248,249,248,.4) 52%,rgba(255,255,255,.62) 100%);
  -webkit-backdrop-filter:blur(14px) saturate(1.4);backdrop-filter:blur(14px) saturate(1.4);
  /* top specular line \xB7 bright base caustic \xB7 hairline edge \xB7 refracted darkening inside the thick rim \xB7 close contact shadow */
  box-shadow:inset 0 1px 0 #fff,inset 0 -1.5px 0 rgba(255,255,255,.95),inset 0 0 0 1px rgba(38,40,39,.085),inset 0 0 9px rgba(38,40,39,.075),
    0 .5px 0 rgba(38,40,39,.1),0 6px 14px -9px rgba(38,40,39,.32)}
${ga} .gb:hover{background:linear-gradient(180deg,rgba(255,255,255,.86) 0%,rgba(250,251,250,.5) 52%,rgba(255,255,255,.72) 100%);
  box-shadow:inset 0 1px 0 #fff,inset 0 -1.5px 0 #fff,inset 0 0 0 1px rgba(38,40,39,.11),inset 0 0 10px rgba(38,40,39,.085),
    0 .5px 0 rgba(38,40,39,.12),0 10px 20px -11px rgba(38,40,39,.38)}
${ga} .gb:active,${ga} .gb.pressed{background:linear-gradient(180deg,rgba(242,243,242,.7),rgba(252,252,252,.6));
  box-shadow:inset 0 1.5px 3px rgba(38,40,39,.16),inset 0 0 0 1px rgba(38,40,39,.1),inset 0 0 6px rgba(38,40,39,.06),0 .5px 0 rgba(255,255,255,.9)}
${ga} .gb.primary{color:#f6f6f4;background:linear-gradient(180deg,rgba(44,47,46,.94),rgba(24,26,25,.96));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.22),inset 0 0 0 1px rgba(255,255,255,.06),inset 0 -1px 0 rgba(0,0,0,.25),
    0 0 0 .5px rgba(0,0,0,.4),0 1px 2px rgba(0,0,0,.14),0 8px 18px -10px rgba(23,26,25,.55)}
${ga} .gb.primary:hover{background:linear-gradient(180deg,rgba(54,57,56,.94),rgba(30,32,31,.96))}
${ga} .gb.primary:active{background:#171918;box-shadow:inset 0 1px 3px rgba(0,0,0,.45),0 0 0 .5px rgba(0,0,0,.4)}
${ga} .gb[disabled],${ga} .gb[aria-disabled=true]{box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 0 0 .5px rgba(38,40,39,.1)}

/* \u2500\u2500 cards: the existing glass stays; only a measured lift on hover \u2500\u2500 */
@media (hover:hover){${ga} .file.glass{transition:transform var(--m-move) var(--e-out)}${ga} .file.glass:hover{transform:translateY(-2px)}}
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
`;var Ya="html.ds2:not([data-theme=dark]) body:not([data-route=studio])",bn=`
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

${Ya} .gb:not(.dark *){color:var(--ink);
  background:linear-gradient(180deg,rgba(255,255,255,.42) 0%,rgba(255,255,255,.05) 48%,rgba(255,255,255,.02) 62%,rgba(255,255,255,.3) 100%);
  -webkit-backdrop-filter:blur(2px) saturate(1.6) brightness(1.04);backdrop-filter:blur(2px) saturate(1.6) brightness(1.04);
  /* specular top \xB7 bright base caustic \xB7 hairline edge (visibility on white) \xB7 refracted band at the thick base \xB7 inner top light \xB7 contact */
  box-shadow:inset 0 1px 0 rgba(255,255,255,.98),inset 0 -1px 0 rgba(255,255,255,.9),inset 0 0 0 .5px rgba(38,40,39,.2),
    inset 0 -7px 9px -7px rgba(70,76,73,.3),inset 0 8px 10px -9px rgba(255,255,255,.95),inset 1px 0 2px -1px rgba(255,255,255,.9),inset -1px 0 2px -1px rgba(255,255,255,.9),
    0 1px 1.5px rgba(38,40,39,.12),0 7px 14px -9px rgba(38,40,39,.32)}
${Ya} .gb:not(.dark *):hover{background:linear-gradient(180deg,rgba(255,255,255,.55) 0%,rgba(255,255,255,.1) 48%,rgba(255,255,255,.05) 62%,rgba(255,255,255,.4) 100%);
  box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 #fff,inset 0 0 0 .5px rgba(38,40,39,.26),
    inset 0 -8px 10px -7px rgba(70,76,73,.34),inset 0 8px 10px -9px #fff,inset 1px 0 2px -1px #fff,inset -1px 0 2px -1px #fff,
    0 1px 1.5px rgba(38,40,39,.14),0 10px 18px -10px rgba(38,40,39,.38)}
${Ya} .gb:not(.dark *):is(:active,.pressed){background:linear-gradient(180deg,rgba(240,241,240,.4),rgba(255,255,255,.2));
  box-shadow:inset 0 1.5px 3px rgba(38,40,39,.16),inset 0 0 0 .5px rgba(38,40,39,.24),inset 0 -1px 0 rgba(255,255,255,.9),0 .5px 1px rgba(38,40,39,.12)}

/* smoked glass: transparent charcoal with a barely visible luminous rim */
${Ya} .gb.primary:not(.dark *){color:#f7f7f5;
  background:radial-gradient(38% 70% at 74% 82%,rgba(255,255,255,.1),transparent 70%),linear-gradient(180deg,rgba(52,56,54,.74) 0%,rgba(28,31,30,.8) 50%,rgba(20,22,21,.9) 100%);
  -webkit-backdrop-filter:blur(2px) saturate(1.3);backdrop-filter:blur(2px) saturate(1.3);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 0 0 .5px rgba(255,255,255,.16),inset 0 -1px 0 rgba(255,255,255,.08),
    inset 0 9px 12px -10px rgba(255,255,255,.2),inset 0 -9px 12px -8px rgba(0,0,0,.45),
    0 0 0 .5px rgba(0,0,0,.4),0 1px 2px rgba(0,0,0,.16),0 9px 18px -10px rgba(23,26,25,.55)}
${Ya} .gb.primary:not(.dark *):hover{background:radial-gradient(38% 70% at 70% 82%,rgba(255,255,255,.13),transparent 70%),linear-gradient(180deg,rgba(62,66,64,.76) 0%,rgba(32,35,34,.82) 50%,rgba(22,24,23,.92) 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.36),inset 0 0 0 .5px rgba(255,255,255,.2),inset 0 -1px 0 rgba(255,255,255,.1),
    inset 0 9px 12px -10px rgba(255,255,255,.26),inset 0 -9px 12px -8px rgba(0,0,0,.45),
    0 0 0 .5px rgba(0,0,0,.4),0 1px 2px rgba(0,0,0,.18),0 12px 22px -11px rgba(23,26,25,.6)}
${Ya} .gb.primary:not(.dark *):active{background:linear-gradient(180deg,rgba(24,26,25,.88),rgba(30,33,32,.84));
  box-shadow:inset 0 1.5px 4px rgba(0,0,0,.5),inset 0 0 0 .5px rgba(255,255,255,.12),0 0 0 .5px rgba(0,0,0,.4),0 2px 5px -3px rgba(0,0,0,.4)}
.gb.primary:not(.dark *)::before{background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.5) 28%,rgba(255,255,255,.22) 66%,rgba(255,255,255,0));opacity:1}
.gb.primary:not(.dark *)::after{background:linear-gradient(108deg,transparent 38%,rgba(255,255,255,.28) 47%,rgba(255,255,255,.06) 52%,transparent 60%);background-size:320% 100%}

/* clear crystal with more body, for primary actions on a dark canvas (Studio) */
.gb.crystal{color:#f4f5f3;background:linear-gradient(180deg,rgba(255,255,255,.2),rgba(255,255,255,.04) 50%,rgba(255,255,255,.12));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.55),inset 0 0 0 .5px rgba(255,255,255,.28),inset 0 -8px 10px -8px rgba(255,255,255,.18),0 10px 20px -10px rgba(0,0,0,.7)}

/* icon controls and compact */
${Ya} .gb.gc:not(.dark *){box-shadow:inset 0 1px 0 rgba(255,255,255,.98),inset 0 0 0 .5px rgba(38,40,39,.18),inset 0 -6px 8px -6px rgba(70,76,73,.28),0 1px 1.5px rgba(38,40,39,.1),0 6px 12px -8px rgba(38,40,39,.3)}
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
`;var wl=/^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/,ha=e=>typeof e=="string"&&e.length<=254&&wl.test(e.trim()),xn="trescarla@gmail.com",xr=()=>`<p class="note contact">Questions? <a href="mailto:${xn}">${xn}</a></p>`,vn="lightorb:profile",kl=e=>String(e).replace(/[&<>"]/g,a=>`&#${a.charCodeAt(0)};`);async function Ro({email:e,name:a="",source:o}){if(e=String(e??"").trim(),a=String(a??"").trim().slice(0,40),!ha(e))return{ok:!1,error:"Please enter a valid email address."};if(!Ra)return{ok:!1,error:"Early access sign-up opens soon. Nothing was sent."};try{let t=await fetch(Ra,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,...a?{name:a}:{},source:o,lang:(navigator.language||"en").slice(0,5)})});if(!t.ok)return{ok:!1,error:t.status===429?"Too many tries \u2014 please wait a minute.":"That did not go through. Please try again later."}}catch{return{ok:!1,error:"That did not go through. Please check your connection and try again."}}try{let t=JSON.parse(localStorage.getItem(vn))??{};localStorage.setItem(vn,JSON.stringify({...t,email:e,...a?{name:a}:{},joined:t.joined??new Date().toISOString()}))}catch{}return We("waitlist_join",{source:o}),{ok:!0}}var Po=e=>`<div class="joined glass" role="status" tabindex="-1"><p class="kicker">You\u2019re in</p>
  <h2>Welcome to early access</h2><p>We\u2019ll write to <b>${kl(e)}</b> when new pieces and Studio updates open. Everything stays free to explore while we build it.</p>
  <div class="acts eq"><a class="gb small primary" href="#/studio">Open Studio</a><a class="gb small" href="#/account">Your account</a></div></div>`;function vr(e,{compact:a=!1,label:o="",title:t="Join early access"}={}){let s=!!Ra;return`<form class="form interest wl${a?" wl-c":""}" data-waitlist="${e}" novalidate>
    ${a?"":`<h2>${t}</h2>`}
    <label class="fl"><span>${o||(a?"Join early access \u2014 free; one email when new pieces open":"Free. We email you when new pieces and Studio updates open.")}</span>
      <span class="wl-row"><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"${s?"":" disabled"}>
      <button class="gb${a?" small":""}" type="submit"${s?"":" disabled"}><span>Join</span></button></span></label>
    <p class="note" data-wlmsg role="status" aria-live="polite">${s?'We only keep your email to tell you about new pieces and Studio updates. See <a href="#/privacy">privacy</a>; leave any time.':'Sign-up opens soon \u2014 nothing typed here is sent yet. See <a href="#/privacy">privacy</a>.'}</p>
  </form>`}function Vr(e){e.querySelectorAll("[data-waitlist]").forEach(a=>a.addEventListener("submit",async o=>{if(o.preventDefault(),!Ra)return;let t=a.querySelector("[data-wlmsg]"),s=a.querySelector("input"),g=a.querySelector("button"),i=s.value.trim();if(!ha(i)){t.textContent="Please enter a valid email address.",s.focus();return}g.disabled=!0,g.setAttribute("aria-busy","true");let c=await Ro({email:i,source:a.dataset.waitlist});if(c.ok){let d=document.createElement("div");d.innerHTML=Po(i);let h=d.firstElementChild;a.replaceWith(h),h.focus({preventScroll:!0});return}t.textContent=c.error,g.disabled=!1,g.removeAttribute("aria-busy")}))}var Wr=500;function yn(e){return`<div class="fb" data-fbwrap><button class="tl" type="button" data-fbbtn aria-expanded="false" aria-controls="fb-p"><span>What's missing?</span></button>
    <form class="form fb-p" id="fb-p" data-feedback="${e}" novalidate hidden>
      <label class="fl"><span>Tell us what Studio or the pieces still need</span>
        <textarea class="gi" name="text" rows="3" maxlength="${Wr}" required></textarea></label>
      <div class="acts"><button class="gb small" type="submit"${Pr?"":" disabled"}><span>Send</span></button></div>
      <p class="note" data-fbmsg role="status" aria-live="polite">Up to ${Wr} characters. Only the text and the page are kept.</p>
    </form></div>`}function wn(e,{sfx:a=()=>{}}={}){e.querySelectorAll("[data-fbwrap]").forEach(o=>{let t=o.querySelector("[data-fbbtn]"),s=o.querySelector("[data-feedback]");t.addEventListener("click",()=>{let g=s.hidden;s.hidden=!g,t.setAttribute("aria-expanded",String(g)),a(g?"open":"close"),g&&s.querySelector("textarea").focus()}),s.addEventListener("submit",async g=>{if(g.preventDefault(),!Pr)return;let i=s.querySelector("[data-fbmsg]"),c=s.querySelector("textarea"),d=s.querySelector("button"),h=c.value.trim();if(!h){i.textContent="Write a few words first.",c.focus();return}if(h.length>Wr){i.textContent=`Please keep it under ${Wr} characters.`;return}d.disabled=!0;try{let p=await fetch(Pr,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:h,page:s.dataset.feedback})});p.ok?(i.textContent="Thank you \u2014 we read every note.",c.value="",We("feedback_send",{page:s.dataset.feedback})):i.textContent=p.status===429?"Too many notes for now \u2014 please try again later.":"That did not go through. Please try again later."}catch{i.textContent="That did not go through. Please try again later."}d.disabled=!1})})}var kn=_a?_a.replace(/\/inquiry$/,"/request-code"):"",Kt=!0,Sn={name:100,use:1500},Yr=e=>String(e??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),Sl=()=>crypto.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,12)}`,Gr=(e,a,{cls:o="gb small primary",label:t="Request code"}={})=>`<button class="${o}" type="button" data-request-code="${Yr(e)}|${Yr(a)}"><span>${t}</span></button>`;function $l(e){return`<dialog class="rc glass" aria-labelledby="rc-h">
    <form class="rc-f" novalidate>
      <button class="rc-x gb gc small" type="button" data-rc-close aria-label="Close"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg></button>
      <p class="kicker">Request code</p>
      <h2 id="rc-h">${Yr(e)}</h2>
      <p class="rc-l">The interactive piece stays free to try on this site \u2014 nothing here is needed for that. This is only for its source code: tell me who you are and I\u2019ll be in touch about access.</p>
      <label class="fl"><span>Name</span><input class="gi" name="name" autocomplete="name" maxlength="${Sn.name}" required><em class="err" data-err="name"></em></label>
      <label class="fl"><span>Email</span><input class="gi" name="email" type="email" autocomplete="email" inputmode="email" maxlength="254" required><em class="err" data-err="email"></em></label>
      <label class="fl"><span>How you\u2019d like to use it <small>optional</small></span><textarea class="gi" name="use" rows="3" maxlength="${Sn.use}"></textarea></label>
      <label class="rc-hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
      <div class="rc-send"><button class="gb primary" type="submit"><span>Send request</span></button>
        <p class="rc-s" role="status" aria-live="polite"></p></div>
      <p class="note">Your name, email and note go to Carla Tres (THE ORB LIGHT) only to answer this request, and are kept as a record of it. Not added to any mailing list. Ask at trescarla@gmail.com to have them deleted. <a href="#/privacy">Privacy</a></p>
    </form>
    <div class="rc-done" hidden tabindex="-1"><p class="kicker">${Yr(e)}</p><h2>Request received.</h2><p>I\u2019ll be in touch about access.</p>
      <div class="acts"><button class="gb" type="button" data-rc-close><span>Close</span></button></div></div>
  </dialog>`}function Ur(e,{audio:a,variant:o=()=>"",autoOpen:t=!1}={}){let s=g=>{let[i,c]=g.dataset.requestCode.split("|"),d=document.createElement("div");d.innerHTML=$l(c);let h=d.firstElementChild;document.body.append(h);let p=h.querySelector("form"),m=h.querySelector(".rc-s"),F=p.querySelector("[type=submit]"),Q=performance.now(),n=Sl(),A=!1,O=()=>h.close();h.addEventListener("close",()=>{h.remove(),g.focus({preventScroll:!0}),a?.sfx?.("close")}),h.addEventListener("click",$=>{$.target===h&&O()}),h.querySelectorAll("[data-rc-close]").forEach($=>$.addEventListener("click",O));let W=($,q)=>{let U=p.elements[$],R=p.querySelector(`[data-err=${$}]`);q?(U.setAttribute("aria-invalid","true"),R.textContent=q):(U.removeAttribute("aria-invalid"),R.textContent="")};p.addEventListener("submit",async $=>{if($.preventDefault(),A)return;let q={name:p.elements.name.value.trim(),email:p.elements.email.value.trim(),use:p.elements.use.value.trim()};if(W("name",q.name?"":"Please add your name."),W("email",ha(q.email)?"":"Please enter a valid email address."),!q.name){p.elements.name.focus();return}if(!ha(q.email)){p.elements.email.focus();return}if(!kn){m.textContent="Requests are not open yet. You can write to trescarla@gmail.com.";return}A=!0,F.disabled=!0,F.setAttribute("aria-busy","true"),m.removeAttribute("role"),m.textContent="Sending\u2026";let U=!1,R="";try{let N=await fetch(kn,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({product:i,productName:c,variant:o()||"",...q,key:n,elapsed:Math.round(performance.now()-Q),website:p.elements.website.value,lang:(navigator.language||"en").slice(0,5)})}),x=await N.json().catch(()=>null);U=N.ok&&x?.ok===!0,R=U?"":N.status===429?"Too many requests for now \u2014 please try again in a while.":"Your request was not sent. Please try again, or write to trescarla@gmail.com."}catch{R="Your request was not sent \u2014 the connection failed. Please try again, or write to trescarla@gmail.com."}if(A=!1,F.disabled=!1,F.removeAttribute("aria-busy"),U){We("code_request",{product:i}),a?.sfx?.("confirm"),p.hidden=!0;let N=h.querySelector(".rc-done");N.hidden=!1,N.focus();return}m.textContent=R,m.setAttribute("role","alert"),We("code_request_failed",{product:i})}),h.showModal(),a?.sfx?.("open"),We("code_request_open",{product:i}),requestAnimationFrame(()=>p.elements.name.focus())};if(e.querySelectorAll("[data-request-code]").forEach(g=>g.addEventListener("click",()=>s(g))),t){let g=e.querySelector("[data-request-code]");g&&setTimeout(()=>s(g),80)}}var $n=`
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
`;var En=Ra?Ra.replace(/\/waitlist$/,"/studio-waitlist"):"",El=!0,yr=()=>El||/[?&]list=1\b/.test(location.search),Ml=0;function Kr({tone:e="light",heading:a=!0}={}){let o=`sl-${++Ml}`;return`<section class="sl sl-${e}" aria-labelledby="${o}-h" data-studio-list>
    ${a?`<p class="sl-k">Studio Membership</p><h2 class="sl-h" id="${o}-h">Something new is taking shape.</h2>`:`<h3 class="sl-h sl-h3" id="${o}-h">Studio Membership</h3>`}
    <p class="sl-l">Be the first to know when Studio Membership opens.</p>
    <form class="sl-f" novalidate>
      <label class="sl-fl" for="${o}-e"><span class="sl-sr">Email</span></label>
      <div class="sl-row"><input class="gi"${yr()?"":" disabled"} id="${o}-e" name="email" type="email" autocomplete="email" inputmode="email" maxlength="254" placeholder="you@example.com" required aria-describedby="${o}-c ${o}-m">
        <button class="gb${e==="dark"?" crystal":" primary"}" type="submit"${yr()?"":" disabled"}><span>Notify me at launch</span></button></div>
      <label class="sl-c" id="${o}-c"><input type="checkbox" name="consent" required${yr()?"":" disabled"}> <span>Yes, email me once when Studio Membership opens. Sent by Carla Tres (THE ORB LIGHT); your address is kept only for this, apart from every other list, and every email has a link to leave. <a href="#/privacy">Privacy</a></span></label>
      <label class="sl-hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
      <p class="sl-m" id="${o}-m" role="status" aria-live="polite">${yr()?"":"Sign-up opens soon \u2014 nothing typed here is sent yet."}</p>
    </form>
  </section>`}function Xr(e,{sfx:a=()=>{}}={}){e.querySelectorAll("[data-studio-list] form").forEach(o=>o.addEventListener("submit",async t=>{t.preventDefault();let s=o.elements.email,g=o.elements.consent,i=o.querySelector("[type=submit]"),c=o.querySelector(".sl-m"),d=s.value.trim();c.removeAttribute("data-err");let h=(n,A)=>{c.textContent=n,c.dataset.err="",A?.focus(),A&&A.setAttribute("aria-invalid","true")};if(s.removeAttribute("aria-invalid"),g.removeAttribute("aria-invalid"),!ha(d))return h("Please enter a valid email address.",s);if(!g.checked)return h("Please tick the box so I know you\u2019d like that one email.",g);if(!En||!yr())return h("The list is not open yet. Nothing was sent.");i.disabled=!0,i.setAttribute("aria-busy","true"),c.textContent="";let p=!1,m=0;try{let n=await fetch(En,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:d,consent:!0,website:o.elements.website.value,lang:(navigator.language||"en").slice(0,5)})});m=n.status,p=n.ok&&(await n.json().catch(()=>null))?.ok===!0}catch{}if(i.disabled=!1,i.removeAttribute("aria-busy"),!p)return h(m===429?"Too many tries \u2014 please wait a little and try again.":"That did not go through, so you are not on the list yet. Please try again in a moment.");We("studio_list_join"),a("confirm");let F=o.closest("[data-studio-list]"),Q=document.createElement("div");Q.className="sl-done",Q.tabIndex=-1,Q.setAttribute("role","status"),Q.innerHTML='<p class="sl-h sl-h3">You\u2019re on the list.</p><p class="sl-l">I\u2019ll write to <b></b> once, when Studio Membership opens.</p>',Q.querySelector("b").textContent=d,F.querySelector(".sl-l").remove(),o.replaceWith(Q),Q.focus({preventScroll:!0})}))}var Mn=`
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
.sl-c input[aria-invalid]{outline:1.5px solid #9b4a3f;outline-offset:2px}
.sl-hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.sl-m{margin:0;font-size:13px;color:var(--muted);min-height:1em}.sl-m[data-err]{color:#9b4a3f}
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
`;var It=null,oa=null,lr=null,wr=0,Ll=performance.now()/1e3,Tt={exposure:1,target:1,impacts:[null,null],next:0,strength:1,scale:90,horizon:.27,lamp:.9,orb:null};function Jr(e){if(!oa){oa=document.createElement("canvas"),oa.className="world-preview",oa.setAttribute("aria-hidden","true"),oa.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:inherit";try{It=zi(oa)}catch{It=null}}return It&&(lr=e,e.prepend(oa),Do(),Tl()),oa}function kr(){cancelAnimationFrame(wr),wr=0,oa?.remove(),lr=null}function Do(){if(!lr||!It)return;let e=lr.getBoundingClientRect();It.resize(Math.max(2,e.width),Math.max(2,e.height),Math.min(devicePixelRatio||1,1.5))}addEventListener("resize",Do);var kt={state:Tt,setExposure(e,a=!1){Tt.target=e,a&&(Tt.exposure=e)},impact(e,a,o=Tt.strength){let t=Tt.next++%2;Tt.impacts[t]={x:e,y:a,at:performance.now()/1e3,strength:o}},set(e){Object.assign(Tt,e)},setOrb(e){Tt.orb=e},get canvas(){return oa}};function Tl(){cancelAnimationFrame(wr);let e=()=>{if(!lr||!It)return;let a=performance.now()/1e3,o=lr.getBoundingClientRect();Math.abs(o.width-oa.width/It.ratio)>2&&Do(),Tt.exposure+=(Tt.target-Tt.exposure)*.05;let t=o.height,s=Tt.orb;It.setHorizon(Tt.horizon),It.setExposure(Tt.exposure),It.setNightGain(1),s?(It.setOrb(s.x,s.y,s.d),It.setLamp(s.x,s.y,s.d*3,Tt.lamp*(1-Tt.exposure)),It.setReveal(s.x,s.y,Math.hypot(o.width,t),Tt.exposure*60)):(It.setReveal(0,0,1,0),It.setLamp(0,0,1,0)),Tt.impacts.forEach((g,i)=>It.setImpact(i,g?.x??0,g?.y??0,g?a-g.at:-1,g?.strength??0,Tt.scale)),It.render(a-Ll),wr=requestAnimationFrame(e)};wr=requestAnimationFrame(e)}var No=[["clear","Clear glass",0],["chrome","Liquid metal",1],["porcelain","Porcelain over glass",2],["bloom","Milky glass \xB7 cloud",3],["core","Glass \xB7 light core",4],["points","Glass \xB7 points of light",5],["glitter","Glass \xB7 glitter",6],["beads","Glass \xB7 beads",7],["liquid","Glass \xB7 liquid",8]],eo=Object.fromEntries(No.map(([e,,a])=>[e,a])),Fo={clear:[[1,1,1],[1,1,1]],chrome:[[1,1,1],[1,1,1]],porcelain:[[.13,.17,.18],[.86,.64,.3]],bloom:[[1,.42,.45],[1,.72,.68]],core:[[1,.97,.92],[1,1,1]],points:[[.92,.96,1],[1,1,1]],glitter:[[.95,.96,1],[1,1,1]],beads:[[.97,.97,.96],[1,.9,.95]],liquid:[[.55,.78,.95],[.9,.97,1]]},Zr=[-.6,.55,.6],ql=Math.hypot(...Zr),Al=Math.atan2(Zr[0],Zr[2])*180/Math.PI,Cl=Math.asin(Zr[1]/ql)*180/Math.PI,Sr=e=>"#"+e.map(a=>Math.round(Math.min(1,Math.max(0,a))*255).toString(16).padStart(2,"0")).join(""),to=e=>{let a=parseInt(String(e).replace("#",""),16)||0;return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]};function Ln(e={id:"clear",base:"clear"}){let a=eo[e.base]===void 0?"clear":e.base,[o,t]=Fo[a];return{v:1,variant:e.id||a,base:a,material:{tint:Sr(e.tint??o),accent:Sr(e.accent??t),refraction:1,dispersion:0,frost:0,rim:1,opacity:1,iridescence:0,exposure:1},interior:{amount:0,size:1,speed:1,glow:1,fill:.55},light:{angle:+Al.toFixed(2),height:+Cl.toFixed(2),key:1,rim:1,environment:1,horizon:1,colour:"#ffffff"},motion:{spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},scene:{background:"none",colour:"#0b0c0c",colour2:"#2a2d2c",size:1,shadow:0,reflection:0}}}var Qr=e=>e&&typeof e=="object"&&!Array.isArray(e);function dr(e,a){let o=structuredClone(e);if(!Qr(a))return o;for(let[t,s]of Object.entries(a))t in o&&(Qr(o[t])?Qr(s)&&(o[t]=dr(o[t],s)):typeof s==typeof o[t]&&(typeof s!="number"||Number.isFinite(s))&&(o[t]=s));return eo[o.base]===void 0&&(o.base="clear"),o}function ao(e,a){let o={};for(let[t,s]of Object.entries(a))if(Qr(s)){let g=ao(e?.[t]??{},s);Object.keys(g).length&&(o[t]=g)}else if(typeof s=="number"){let g=Math.round(s*1e3)/1e3;(e?.[t]===void 0||Math.round(e[t]*1e3)/1e3!==g)&&(o[t]=g)}else e?.[t]!==s&&(o[t]=s);return o}var Ol=e=>btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var Tn=(e,a)=>Ol(JSON.stringify(ao(a,e)));var Vt=[{id:"clear",base:"clear",name:"Clear",line:"Thick clear glass, nothing inside but its own depth."},{id:"smoke",base:"clear",name:"Smoke",line:"Smoked glass, a grey depth that darkens to the rim.",tint:[.6,.62,.65]},{id:"amber",base:"clear",name:"Amber",line:"Warm amber glass, like light through honey.",tint:[1,.8,.52]},{id:"chrome",base:"chrome",name:"Chrome",line:"Liquid chrome that keeps folding the room it reflects."},{id:"gold",base:"chrome",name:"Liquid Gold",line:"Molten gold folding over itself.",tint:[1,.79,.45]},{id:"gunmetal",base:"chrome",name:"Gunmetal",line:"Dark liquid metal with cold highlights.",tint:[.5,.53,.57]},{id:"porcelain",base:"porcelain",name:"Porcelain",line:"Raised porcelain bands with gold edges over dark glass."},{id:"silverline",base:"porcelain",name:"Silverline",line:"Porcelain bands edged in silver over dark glass.",accent:[.82,.84,.88]},{id:"celadon",base:"porcelain",name:"Celadon",line:"Porcelain bands over green celadon glass.",tint:[.22,.36,.3]},{id:"bloom",base:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud."},{id:"lilac",base:"bloom",name:"Lilac",line:"Milky glass holding a slow violet cloud.",tint:[.62,.45,1],accent:[.86,.76,1]},{id:"lagoon",base:"bloom",name:"Lagoon",line:"Milky glass holding a slow sea-blue cloud.",tint:[.2,.62,.9],accent:[.6,.92,.9]},{id:"core",base:"core",name:"Core",line:"Clear glass holding one soft white light at its centre."},{id:"dawn",base:"core",name:"Dawn",line:"Clear glass holding a warm, low light.",tint:[1,.72,.45]},{id:"starlight",base:"points",name:"Starlight",line:"Clear glass full of small points of light that drift and twinkle."},{id:"firefly",base:"points",name:"Firefly",line:"Warm points of light drifting slowly inside the glass.",tint:[1,.78,.4]},{id:"glitter",base:"glitter",name:"Glitter",line:"Fine silver flecks that catch the light as the sphere turns."},{id:"goldleaf",base:"glitter",name:"Gold Leaf",line:"Flakes of gold suspended in clear glass.",tint:[1,.78,.4]},{id:"beads",base:"beads",name:"Beads",line:"Small milky glass beads floating inside the shell."},{id:"pearls",base:"beads",name:"Pearls",line:"Soft pearls with a faint rainbow sheen, floating inside.",tint:[1,.95,.97],accent:[.85,.9,1]}],Cn=eo,qn={0:{tint:[1,1,1],accent:[1,1,1]},1:{tint:[1,1,1],accent:[1,1,1]},2:{tint:[.13,.17,.18],accent:[.86,.64,.3]},3:{tint:[1,.42,.45],accent:[1,.72,.68]},4:{tint:[1,.97,.92],accent:[1,1,1]},5:{tint:[.92,.96,1],accent:[1,1,1]},6:{tint:[.95,.96,1],accent:[1,1,1]},7:{tint:[.97,.97,.96],accent:[1,.9,.95]},8:{tint:[.55,.78,.95],accent:[.9,.97,1]}},Da=e=>Ln(Vt.find(a=>a.id===e)??Vt[0]),zl=e=>{let a=Vt.find(t=>t.id===e)??Vt[0],o=Cn[a.base];return{k:o,tint:a.tint??qn[o].tint,accent:a.accent??qn[o].accent}},Il=`
  uniform mat3 uRot;
  varying vec3 vN; varying vec3 vP; varying vec3 vObj;
  void main() {
    vObj = uRot * position;              // the material turns with the drag
    vN = normalize(normalMatrix * normal);
    vec4 wp = modelViewMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    gl_Position = projectionMatrix * wp;
  }`,Rl=`
  precision highp float;
  uniform int uKind; uniform vec3 uTint; uniform vec3 uAccent; uniform float uTime; uniform float uStir; uniform mat3 uRot;
  uniform float uVoice; uniform float uVoiceFlow;
  // Design parameters (sphere-config.js); the defaults leave every version unchanged.
  uniform float uIor; uniform float uDisp; uniform float uFrost; uniform float uRim; uniform float uOpacity; uniform float uIrid; uniform float uExp;
  uniform float uAmt; uniform float uSize; uniform float uGlow; uniform float uFill;
  uniform vec3 uKeyDir; uniform float uKey; uniform float uRimL; uniform float uEnv; uniform float uHorizon; uniform vec3 uLightCol;
  varying vec3 vN; varying vec3 vP; varying vec3 vObj;

  float h3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float noise(vec3 x) {
    vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
  float fbm(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; } return s; }

  // A neutral photographic studio: dark floor, bright sky, two soft boxes.
  float envSharp(vec3 d) {
    float sky = smoothstep(-0.05, 0.7, d.y);
    float floorTone = 0.06 + 0.12 * smoothstep(-1.0, -0.05, d.y);
    float v = mix(floorTone, 0.82, sky) * uEnv;
    v += 0.9 * uHorizon * exp(-pow((d.y - 0.08) * 9.0, 2.0));                // horizon line
    v += 1.4 * uKey * smoothstep(0.86, 0.95, dot(d, uKeyDir));               // key box
    v += 0.7 * uRimL * smoothstep(0.9, 0.97, dot(d, normalize(vec3(0.75, 0.25, 0.3))));    // rim box
    return v;
  }
  // Frost: the same room seen through a diffuser (broad, soft light).
  float envSoft(vec3 d) {
    return (0.1 + 0.62 * smoothstep(-0.6, 0.9, d.y)) * uEnv + 0.12 * uHorizon * exp(-pow((d.y - 0.08) * 3.0, 2.0))
      + 0.45 * uKey * smoothstep(0.2, 1.0, dot(d, uKeyDir)) + 0.2 * uRimL * smoothstep(0.4, 1.0, dot(d, normalize(vec3(0.75, 0.25, 0.3))));
  }
  float env(vec3 d) { return uFrost > 0.0 ? mix(envSharp(d), envSoft(d), uFrost) : envSharp(d); }
  // Dispersion: the refracted room per channel, around the green (centre) ray.
  vec3 dispersed(vec3 V, vec3 N, float eta) {
    float k = 0.06 * uDisp;   // 100 % \u2248 dense flint glass: a clear fringe at the edges, never a rainbow
    return vec3(env(normalize(refract(-V, N, eta * (1.0 - k)) * vec3(1.0, -1.0, 1.0))), 0.0, env(normalize(refract(-V, N, eta * (1.0 + k)) * vec3(1.0, -1.0, 1.0))));
  }
  vec3 toObj(vec3 v) { return uRot * v; }

  void main() {
    vec3 N = normalize(vN), V = normalize(-vP);
    float ndv = clamp(dot(N, V), 0.0, 1.0);
    float fres = (0.04 + 0.96 * pow(1.0 - ndv, 5.0)) * uRim;
    vec3 R = reflect(-V, N);
    vec3 n = normalize(vObj);            // object-space point on the sphere
    float t = uTime;
    vec3 col; float alpha = 1.0;

    if (uKind == 0) {
      // Clear glass with volume: refracted studio, darker inner wall, bright rim, caustic pool.
      float eta = 1.0 / (1.0 + 0.5 * uIor);
      vec3 T = refract(-V, N, eta);
      float through = env(normalize(T * vec3(1.0, -1.0, 1.0)));           // the image turns over in the glass
      float wall = smoothstep(0.55, 0.15, ndv);
      float caustic = exp(-pow((n.y + 0.72) * 4.0, 2.0)) * smoothstep(0.2, 0.9, ndv) * 0.6;
      float v = mix(0.94, through * 0.55 + 0.4, 0.55) - wall * 0.28 + caustic + env(R) * fres * 1.2;
      v += 0.35 * pow(1.0 - ndv, 2.5);
      vec3 vc = vec3(v);
      if (uDisp > 0.0) { vec3 d3 = dispersed(V, N, eta); vc += (vec3(d3.r, through, d3.b) - through) * 0.55; }
      col = vc * vec3(0.985, 0.99, 1.0) * mix(vec3(1.0), uTint, 0.35 + 0.65 * smoothstep(0.9, 0.2, ndv));
      alpha = clamp(0.34 + 0.66 * pow(1.0 - ndv, 1.6) + caustic * 0.4 + fres, 0.0, 1.0);
    } else if (uKind >= 4) {
      // Clear glass with something inside: a soft core, points of light, flecks or beads.
      float eta = 1.0 / (1.0 + 0.45 * uIor);
      vec3 T = refract(-V, N, eta);
      float wall = smoothstep(0.55, 0.15, ndv);
      float thr = env(normalize(T * vec3(1.0, -1.0, 1.0)));
      vec3 dsp = vec3(0.0);
      if (uDisp > 0.0) { vec3 d3 = dispersed(V, N, eta); dsp = (vec3(d3.r, thr, d3.b) - thr) * 0.5; }
      float base = mix(0.93, thr * 0.5 + 0.42, 0.5) - wall * 0.22 + env(R) * fres * 1.1 + 0.3 * pow(1.0 - ndv, 2.5);
      vec3 p = n * 0.95, rd = toObj(normalize(T));
      vec3 glow = vec3(0.0); float occ = 0.0;
      for (int i = 0; i < 24; i++) {
        p += rd * 0.08;
        float r2 = dot(p, p); if (r2 > 0.9) break;
        if (uKind == 4) {
          glow += uTint * exp(-r2 * 14.0 / (uSize * uSize)) * 0.07 * (1.0 + uAmt) * (1.0 + 0.15 * sin(t * 1.3) + uStir * 0.5);
        } else if (uKind == 8) {                  // liquid: a level surface in world space, sloshing with time and stir
          vec3 w = transpose(uRot) * p;
          float level = mix(-0.92, 0.92, uFill) + (0.035 + 0.12 * uStir) * sin(w.x * 3.0 / uSize + t * 1.4) * cos(w.z * 2.0 + t * 0.9);
          float inl = 1.0 - smoothstep(level - 0.015, level + 0.015, w.y);
          float a = inl * 0.09 * (1.0 + uAmt);
          glow += uTint * a * (1.0 - occ) * 0.55 + uAccent * exp(-pow((w.y - level) * 26.0, 2.0)) * 0.05;
          occ = clamp(occ + a * 0.5, 0.0, 1.0);
        } else {
          vec3 q = p * (uKind == 7 ? 3.2 : 6.0) / uSize + vec3(0.0, t * (uKind == 5 ? 0.12 : 0.05), t * 0.03) * (1.0 + uStir * 2.0);
          vec3 c = floor(q), f = fract(q) - 0.5;
          vec3 o = vec3(h3(c), h3(c + 3.1), h3(c + 7.7)) - 0.5;
          float d = length(f - o * 0.6), rnd = h3(c + 1.7);
          if (uKind == 5) {                        // points of light
            float on = step(0.55 - 0.45 * uAmt, rnd);
            glow += uTint * on * (exp(-d * d * 700.0) * 2.4 + exp(-d * d * 90.0) * 0.12) * (0.55 + 0.45 * sin(t * 2.0 + rnd * 30.0));
          } else if (uKind == 6) {                 // flakes that flash as they face the light
            float on = step(0.4 - 0.4 * uAmt, rnd);
            float face = pow(abs(sin(rnd * 40.0 + t * 0.7 + dot(n, vec3(3.0)))), 24.0);
            glow += uTint * on * exp(-d * d * 500.0) * (0.35 + 3.0 * face);
          } else {                                 // beads: small milky spheres
            float on = step(0.5 - 0.45 * uAmt, rnd), rb = 0.16 + 0.06 * h3(c + 5.0);
            float inb = on * (1.0 - smoothstep(rb - 0.03, rb, d));
            vec3 bc = mix(uTint, uAccent, 0.5 + 0.5 * sin(rnd * 20.0 + d * 30.0));
            float k = clamp(d / rb, 0.0, 1.0);
            float shade = 0.35 + 0.5 * sqrt(1.0 - k * k) + 0.6 * exp(-pow(k - 0.55, 2.0) * 60.0) * 0.4;   // rounded body, soft rim
            glow += bc * inb * (1.0 - occ) * shade * 0.45;
            occ = clamp(occ + inb * 0.35, 0.0, 1.0);
          }
        }
      }
      glow *= uGlow;
      col = (vec3(base) + dsp) * vec3(0.985, 0.99, 1.0) * (1.0 - occ * 0.75) + glow;
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
      vec3 T = normalize(refract(-V, N, 1.0 / (1.0 + 0.35 * uIor)));
      vec3 p = n * 0.96, rd = toObj(T);
      float dens = 0.0; vec3 cloud = vec3(0.0);
      for (int i = 0; i < 14; i++) {
        p += rd * 0.13;
        if (dot(p, p) > 0.93) break;
        // Voice deforms only the coordinates of the cloud inside the glass.
        // At zero input these terms are exactly neutral: the original Bloom stays intact.
        vec3 fluid = p;
        float twist = uVoice * (p.y * 1.65 + 0.45 * sin(uVoiceFlow * 0.8 + p.y * 2.0));
        fluid.xz = mat2(cos(twist), -sin(twist), sin(twist), cos(twist)) * fluid.xz;
        fluid *= vec3(1.0 - 0.22 * uVoice, 1.0 + 0.42 * uVoice, 1.0 - 0.13 * uVoice);
        fluid += uVoice * 0.22 * sin(p.zxy * 3.0 + vec3(uVoiceFlow * 0.7, -uVoiceFlow * 0.5, uVoiceFlow * 0.6));
        vec3 fp = fluid * 1.5 / uSize + vec3(t * 0.06, -t * 0.04, t * 0.05) + uStir * 0.4
          + uVoice * 0.22 * vec3(sin(uVoiceFlow * 0.6), cos(uVoiceFlow * 0.4), sin(uVoiceFlow * 0.5));
        float sw = fbm(fp + fbm(fp * 1.7) * 1.6);
        float d = smoothstep(0.42 - 0.2 * uAmt - 0.05 * uVoice, 0.72 - 0.2 * uAmt, sw) * (1.0 - smoothstep(0.55, 0.95, length(p)));
        vec3 c = mix(uTint, uAccent, smoothstep(0.5, 0.75, sw));
        c = mix(c, vec3(0.86, 0.6, 1.0), 0.18 * sin(sw * 9.0 + t * 0.3) + 0.08);
        cloud += c * d * (1.0 - dens) * 0.42; dens += d * (1.0 - dens) * 0.42;
      }
      vec3 milk = vec3(0.985, 0.975, 0.98) * (0.86 + 0.14 * env(R));
      col = mix(milk, cloud / max(dens, 0.001) * uGlow, clamp(dens * 1.1, 0.0, 0.92));
      vec3 irid = 0.5 + 0.5 * cos(6.2832 * (pow(1.0 - ndv, 1.5) * 1.2 + vec3(0.0, 0.33, 0.67)));
      col += irid * 0.16 * pow(1.0 - ndv, 2.0) + env(R) * fres * 0.5;
      alpha = clamp(0.8 + 0.2 * pow(1.0 - ndv, 1.2), 0.0, 1.0);
    }
    if (uIrid > 0.0) col += (0.5 + 0.5 * cos(6.2832 * (pow(1.0 - ndv, 1.5) * 1.2 + vec3(0.0, 0.33, 0.67)))) * uIrid * 0.35 * pow(1.0 - ndv, 1.5);
    col *= uLightCol * uExp;
    alpha *= uOpacity;
    col = col / (1.0 + col * 0.12);   // gentle highlight roll-off
    gl_FragColor = vec4(col * alpha, alpha);
  }`,$r=null;function Pl(){if($r)return $r;let e=typeof OffscreenCanvas=="function"&&"transferToImageBitmap"in OffscreenCanvas.prototype,a=e?new OffscreenCanvas(2,2):document.createElement("canvas"),o=new Ao({canvas:a,alpha:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0});o.setClearColor(0,0);let t=new Lo,s=new qo(30,1,.1,20);s.position.set(0,0,4.9);let g=new Oi({vertexShader:Il,fragmentShader:Rl,transparent:!0,premultipliedAlpha:!0,uniforms:{uKind:{value:0},uTint:{value:new Ir(1,1,1)},uAccent:{value:new Ir(1,1,1)},uTime:{value:0},uStir:{value:0},uVoice:{value:0},uVoiceFlow:{value:0},uRot:{value:new Mo},...Object.fromEntries(Object.entries(On).map(([c,d])=>[c,{value:Array.isArray(d)?new Ir(...d):d}]))}}),i=new To(new Ci(1,128,96),g);return t.add(i),$r={r:o,scene:t,camera:s,mat:g,mesh:i,list:new Set,raf:0,off:e},$r}var On={uIor:1,uDisp:0,uFrost:0,uRim:1,uOpacity:1,uIrid:0,uExp:1,uAmt:0,uSize:1,uGlow:1,uFill:.55,uKeyDir:[-.6/Math.hypot(.6,.55,.6),.55/Math.hypot(.6,.55,.6),.6/Math.hypot(.6,.55,.6)],uKey:1,uRimL:1,uEnv:1,uHorizon:1,uLightCol:[1,1,1]},An=Math.tan(Math.asin(1/4.9))/Math.tan(15*Math.PI/180),Dl=1/(4.9*Math.tan(15*Math.PI/180));function Nl(e){let a=e.cfg;if(!a){let c=zl(e.kind);return{...On,uKind:c.k,uTint:c.tint,uAccent:c.accent}}let o=a.material,t=a.interior,s=a.light,g=s.angle*Math.PI/180,i=s.height*Math.PI/180;return{uKind:Cn[a.base]??0,uTint:to(o.tint),uAccent:to(o.accent),uIor:o.refraction,uDisp:o.dispersion,uFrost:o.frost,uRim:o.rim,uOpacity:o.opacity,uIrid:o.iridescence,uExp:o.exposure,uAmt:t.amount,uSize:Math.max(.2,t.size),uGlow:t.glow,uFill:t.fill,uKeyDir:[Math.cos(i)*Math.sin(g),Math.sin(i),Math.cos(i)*Math.cos(g)],uKey:s.key,uRimL:s.rim,uEnv:s.environment,uHorizon:s.horizon,uLightCol:to(s.colour)}}var Fl=matchMedia("(pointer: coarse)").matches;function Bo(){let e=$r;e.raf=0;let a=performance.now()/1e3,o=Math.min(devicePixelRatio||1,1.5),t=[...e.list].filter(d=>d.visible&&d.canvas.isConnected),s=t.length,g=e.lastNow?a-e.lastNow:1/60;e.lastNow=a,s<=2?e.k=s:(e.k=Math.min(s,Math.max(1,e.k||(Fl?2:3))),e.avg=(e.avg??g)*.9+g*.1,++e.adj>20&&(e.adj=0,e.avg>1/50&&e.k>1?e.k--:e.avg<1/58&&e.k<s&&e.k++)),e.adj||=0,e.cursor=(e.cursor||0)%Math.max(1,s);let i=new Set;for(let d=0;d<e.k;d++)i.add(t[(e.cursor+d)%s]);e.cursor+=e.k;for(let d of t){if(!i.has(d))continue;d.step(a);let h=Math.max(2,Math.round(d.canvas.clientWidth*o)),p=Math.max(2,Math.round(d.canvas.clientHeight*o));(d.canvas.width!==h||d.canvas.height!==p)&&(d.canvas.width=h,d.canvas.height=p),(e.w!==h||e.h!==p)&&(e.r.setSize(h,p,!1),e.w=h,e.h=p,e.camera.aspect=h/p,e.camera.updateProjectionMatrix());let m=e.mat.uniforms;for(let[n,A]of Object.entries(Nl(d)))Array.isArray(A)?m[n].value.fromArray(A):m[n].value=A;m.uTime.value=d.time,m.uStir.value=d.stir,m.uVoice.value=d.kind==="bloom"?d.voice:0,m.uVoiceFlow.value=d.voiceFlow,m.uRot.value.copy(d.rot),e.mesh.scale.setScalar(d.scale),e.mesh.position.y=d.lift,e.r.render(e.scene,e.camera);let F=d.cfg?.scene;if(d.bmp){d.bmp.transferFromImageBitmap(e.r.domElement.transferToImageBitmap());continue}let Q=d.ctx;Q.clearRect(0,0,h,p),F?Bl(d,Q,h,p,e.r.domElement,F):Q.drawImage(e.r.domElement,0,0,h,p)}let c=!1;for(let d of e.list)if(d.visible&&d.canvas.isConnected){c=!0;break}c&&(e.raf=requestAnimationFrame(Bo))}var Ga=null;function Bl(e,a,o,t,s,g){if(g.background==="solid")a.fillStyle=g.colour,a.fillRect(0,0,o,t);else if(g.background==="gradient"){let h=a.createRadialGradient(o/2,t*.42,0,o/2,t*.5,Math.hypot(o,t)*.6);h.addColorStop(0,g.colour2),h.addColorStop(1,g.colour),a.fillStyle=h,a.fillRect(0,0,o,t)}let i=An*e.scale*t/2,c=t/2-e.lift*Dl*t/2,d=t/2+An*g.size*t/2;if(g.shadow>0){let h=Math.max(0,d-(c+i)),p=1/(1+h/i*2);a.save(),a.translate(o/2,d),a.scale(1,.16);let m=a.createRadialGradient(0,0,0,0,0,i*(1.05+(1-p)*.5));m.addColorStop(0,`rgba(0,0,0,${(.55*g.shadow*p).toFixed(3)})`),m.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=m,a.beginPath(),a.arc(0,0,i*1.6,0,Math.PI*2),a.fill(),a.restore()}if(g.reflection>0&&d<t){let h=Math.min(t-d,i*2);Ga||=document.createElement("canvas"),(Ga.width!==o||Ga.height!==t)&&(Ga.width=o,Ga.height=t);let p=Ga.getContext("2d");p.clearRect(0,0,o,t),p.save(),p.translate(0,d*2),p.scale(1,-1),p.drawImage(s,0,0,o,t),p.restore(),p.globalCompositeOperation="destination-in";let m=p.createLinearGradient(0,d,0,d+h);m.addColorStop(0,`rgba(0,0,0,${(.5*g.reflection).toFixed(3)})`),m.addColorStop(1,"rgba(0,0,0,0)"),p.fillStyle=m,p.fillRect(0,0,o,t),p.globalCompositeOperation="source-over",a.drawImage(Ga,0,0)}a.drawImage(s,0,0,o,t)}function Er(e,a="clear",{interactive:o=!0,reduced:t=matchMedia("(prefers-reduced-motion: reduce)").matches,config:s=null}={}){let g;try{g=Pl()}catch{let R=()=>{};return new Proxy({},{get:()=>R})}let i=document.createElement("canvas");i.className="sph-c",i.setAttribute("aria-hidden","true"),e.append(i);let c={spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},d=()=>$.cfg?.motion??c,h={v:.4,vel:t?0:.12},p={v:-.15,vel:0},m={x:0,y:0,tx:0,ty:0},F=new qi,Q=new Ai,n=performance.now()/1e3,A=null,O=0,W=!s&&g.off?i.getContext("bitmaprenderer"):null,$={canvas:i,bmp:W,ctx:W?null:i.getContext("2d"),kind:a,cfg:s?dr(Da(s.variant||a),s):null,visible:!1,time:Math.random()*40,stir:0,speech:0,voice:0,voiceFlow:0,voiceInput:null,scale:1,lift:0,rot:new Mo,step(R){let N=Math.min(.25,R-n);n=R,O+=N;let x=d(),y=t?0:x.spin;A||(h.vel+=(y-h.vel)*N*.8,p.vel*=Math.exp(-N*3),p.v+=(x.tilt-p.v)*N*.8),h.v+=h.vel*N,p.v=Math.max(-1.2,Math.min(1.2,p.v+p.vel*N)),m.x+=(m.tx*x.pointer-m.x)*N*5,m.y+=(m.ty*x.pointer-m.y)*N*5,$.stir*=Math.exp(-N*1.6);let C=$.kind==="bloom"?$.voiceInput?.():0;$.voice=Math.max(0,Math.min(1,Number.isFinite(C)?C:0))*(t?.35:1),$.voiceFlow+=N*$.voice*3,$.time+=N*(t?.3:1)*(1+$.stir*3)*($.cfg?$.cfg.interior.speed:1),Q.set(p.v+m.y*.25,h.v+m.x*.35,x.roll,"YXZ"),F.makeRotationFromEuler(Q),$.rot.setFromMatrix4(F);let Z=$.cfg?$.cfg.scene.size:1,Y=t?0:1;$.scale=Z*(1+Y*x.breathe*Math.sin(O*1.3)+$.speech*x.speech*.06),$.lift=Y*x.bob*Z*Math.sin(O*Math.PI*2*x.bobSpeed)}};$.cfg&&($.kind=$.cfg.variant);let q=(R,N,x=.016)=>{let y=d().inertia;h.v+=R*.01,p.v+=N*.01,h.vel=R*.01/x*.6*y,p.vel=N*.01/x*.6*y};if(o){i.style.touchAction="pan-y",i.style.cursor="grab",i.addEventListener("pointerdown",x=>{A={x:x.clientX,y:x.clientY,t:performance.now(),moved:!1},i.setPointerCapture(x.pointerId),i.style.cursor="grabbing"}),i.addEventListener("pointermove",x=>{let y=i.getBoundingClientRect();if(m.tx=((x.clientX-y.left)/y.width-.5)*2,m.ty=((x.clientY-y.top)/y.height-.5)*2,!A)return;let C=performance.now(),Z=x.clientX-A.x,Y=x.clientY-A.y,J=Math.max(8,C-A.t)/1e3;Math.hypot(Z,Y)>3&&(A.moved=!0),q(Z,Y,J),A.x=x.clientX,A.y=x.clientY,A.t=C});let R=()=>{A&&(A.moved||($.stir=Math.min(1.5,$.stir+d().stir)),A=null,i.style.cursor="grab")};i.addEventListener("pointerup",R),i.addEventListener("pointercancel",R),i.addEventListener("pointerleave",()=>{m.tx=m.ty=0});let N=!1;i.addEventListener("pointerdown",()=>{N=!1},!0),i.addEventListener("pointermove",()=>{A?.moved&&(N=!0)}),i.addEventListener("click",x=>{N&&(x.preventDefault(),x.stopPropagation())})}let U=new IntersectionObserver(([R])=>{$.visible=R.isIntersecting,$.visible&&!g.raf&&(g.raf=requestAnimationFrame(Bo))});return U.observe(i),g.list.add($),g.raf||(g.raf=requestAnimationFrame(Bo)),{canvas:i,setKind(R){$.kind=R,$.stir=1},setConfig(R){$.cfg=R?dr(Da(R.variant||$.kind),R):null,$.cfg&&($.kind=$.cfg.variant)},setSpeech(R){$.speech=Math.max(0,Math.min(1,R||0))},setVoiceInput(R){$.voiceInput=typeof R=="function"?R:null,$.voice=0},rotate(R,N){q(R,N)},resetView(){h.v=.4,p.v=d().tilt,h.vel=t?0:d().spin,p.vel=0},stir(){$.stir=Math.min(1.5,$.stir+d().stir)},dispose(){$.voiceInput=null,U.disconnect(),g.list.delete($),i.remove()}}}var jn=`
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
`;var Wo=[{id:"light-orb",name:"Light Orb",cat:"Orbs",sphere:"dawn",badge:"Live light",line:"The site\u2019s own light-in-glass Orb, with its light in your hands.",lede:"The Orb the site is built around: one real light inside thick glass. Move it, soften it, warm it, and watch the glass answer.",does:"Drag inside the glass to place the light. Intensity, size, glow, colour temperature and surface roughness change the same renderer the site uses \u2014 no pre-rendered frames.",hint:"Drag inside the glass to move the light."},{id:"voice-orb",name:"Talking Orb",cat:"Interaction",sphere:"core",badge:"Voice",line:"An Orb that answers your voice, live, after you turn the microphone on.",lede:"The guide Orb\u2019s voice response, open to you: speak and the light inside the glass answers your voice.",does:"Turn the microphone on and speak. Your voice level moves the Orb exactly as the guide moves when it talks. The sound is analysed in this tab only: never played back, recorded or sent.",hint:"Turn the microphone on, then speak."}],zn=e=>Wo.find(a=>a.id===e),Vo="Interactive demo \xB7 source not packaged yet";function cr(e){let a=e/100,o=i=>Math.max(0,Math.min(255,Math.round(i))),t=a<=66?255:329.698727446*(a-60)**-.1332047592,s=a<=66?99.4708025861*Math.log(a)-161.1195681661:288.1221695283*(a-60)**-.0755148492,g=a>=66?255:a<=19?0:138.5177312231*Math.log(a-10)-305.0447927307;return"#"+[t,s,g].map(i=>o(i).toString(16).padStart(2,"0")).join("")}var Ho=[{k:"strength",l:"Intensity",min:0,max:1,step:.01,path:["light","strength"]},{k:"spread",l:"Size & softness",min:0,max:1,step:.01,path:["light","spread"]},{k:"glow",l:"Glow",min:0,max:1,step:.01,path:["light","glow"]},{k:"kelvin",l:"Temperature",min:2200,max:7500,step:50,unit:" K"},{k:"roughness",l:"Surface roughness",min:0,max:.5,step:.01,path:["shell","roughness"]}],ro={idle:["Microphone off","Not activated. Nothing is heard until you turn it on."],requesting:["Asking permission\u2026","Your browser is asking whether this page may use the microphone."],listening:["Listening","Speak \u2014 the Orb answers your voice."],responding:["Responding","The Orb is answering your voice."],muted:["Muted","The microphone is off. Turn it on to continue."],denied:["Permission denied","Allow microphone access for this site in your browser, then try again."],unavailable:["Unavailable",""]};function In(e,a){let{page:o,product:t,audio:s,esc:g,ICON:i,footer:c,cleanup:d,track:h}=a,p=e.id==="voice-orb",m=Wt(pa("original").config),F=Wt(m),Q=3600;p||(Object.assign(F.light,{strength:.95,glow:.55,spread:.6}),F.light.colour=cr(Q),Object.assign(m.light,F.light)),o.innerHTML=`
    <section class="pd lv">
      <a class="back tl" href="#/products">${i.back}<span>Products</span></a>
      <div class="pd-grid">
        <div class="pd-stage glass lv-stage" data-stage><div class="lv-host" data-live role="${p?"img":"application"}" aria-label="${g(e.name)}: ${p?"responds to your voice":"drag to move the light; arrow keys work too"}"${p?"":' tabindex="0"'}></div>
          ${p?"":`<span class="pd-hint">${g(e.hint)}</span>`}
          ${p?`<div class="lv-mic" data-state="idle"><button class="gb gc lv-mic-b" type="button" data-mic aria-pressed="false" aria-describedby="lv-mic-d"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg></button>
            <div class="lv-mic-t" aria-live="polite"><b data-mic-s>${ro.idle[0]}</b><small id="lv-mic-d" data-mic-d>${ro.idle[1]}</small></div><i class="lv-meter" aria-hidden="true"><i></i></i></div>`:""}
        </div>
        <div class="pd-info info-dark">
          <p class="kicker">${p?"Voice \xB7 Interaction":"Light \xB7 Orbs"}</p><h1>${g(e.name)}</h1>
          <p class="lede">${g(e.lede)}</p>
          ${p?"":`<div class="lv-ctl" data-ctl>${Ho.map($=>{let q=$.k==="kelvin"?Q:$.path.reduce((U,R)=>U[R],F);return`<label class="lv-row"><span>${$.l}</span><input type="range" min="${$.min}" max="${$.max}" step="${$.step}" value="${q}" data-k="${$.k}"><output>${_o(q,$)}</output></label>`}).join("")}<div class="lv-acts"><button class="gb small" type="button" data-reset>Reset</button><a class="gb small" href="#/studio">Open in Studio</a></div></div>`}
          <p class="price">${Vo}</p>
          <dl class="facts ds-facts"><dt>What it does</dt><dd>${g(e.does)}</dd>
            <dt>Availability</dt><dd>Try it here, free, no sign-up. The source is not packaged for download yet; this page will say when it is.</dd>
            ${p?"<dt>Privacy</dt><dd>The microphone starts only when you press its button and stops when you leave the page or hide the tab. The sound stays in this tab.</dd>":""}
            <dt>Questions</dt><dd><a href="mailto:trescarla@gmail.com">trescarla@gmail.com</a></dd></dl>
        </div>
      </div>
    </section>${c()}`;let n=o.querySelector("[data-stage]"),A=o.querySelector("[data-live]"),O={};t.show(F,O),h?.("product_open",{product:e.id});let W=()=>t.update(F,O);if(p){let ce=function(){y=requestAnimationFrame(ce),C=ie.sample(),t.orb?.setSpeech(Math.min(1,C*1.6)),N.style.transform=`scaleX(${Math.min(1,C*2).toFixed(3)})`,Y(C>.12?"responding":"listening")},$=n.querySelector(".lv-mic"),q=$.querySelector("[data-mic]"),U=$.querySelector("[data-mic-s]"),R=$.querySelector("[data-mic-d]"),N=$.querySelector(".lv-meter>i"),x=!1,y=0,C=0,Z="",Y=(ee,ne)=>{Z===ee&&!ne||(Z=ee,$.dataset.state=ee,U.textContent=ro[ee][0],R.textContent=ne||ro[ee][1],q.setAttribute("aria-pressed",String(ee==="listening"||ee==="responding")),q.setAttribute("aria-label",ee==="listening"||ee==="responding"?"Turn the microphone off":ee==="requesting"?"Cancel the microphone request":"Turn the microphone on"))},J=!globalThis.navigator?.mediaDevices?.getUserMedia,ie=s.microphone({onState({status:ee,error:ne}){if(ee==="listening"){x=!0,Y("listening"),y||(y=requestAnimationFrame(ce));return}cancelAnimationFrame(y),y=0,C=0,t.orb?.setSpeech(0),N.style.transform="scaleX(0)",ee==="requesting"?Y("requesting"):ee==="error"?Y(/^Allow/.test(ne)?"denied":"unavailable",ne):Y(x?"muted":"idle")}});J&&(Y("unavailable","This browser does not offer microphone input here (it needs HTTPS or localhost and a supported browser)."),q.disabled=!0),q.addEventListener("click",()=>{s.sfx("select"),ie.toggle()}),d.push(()=>{cancelAnimationFrame(y),ie.dispose(),t.orb?.setSpeech(0)})}else{let $=(N,x)=>{let y=A.getBoundingClientRect(),C=Math.min(y.width,y.height)*.8,Z=2/C;F.light.x=Math.max(-.62,Math.min(.62,(N-y.left-y.width/2)*Z)),F.light.y=Math.max(-.62,Math.min(.62,-(x-y.top-y.height/2)*Z)),W()},q=!1;A.addEventListener("pointerdown",N=>{q=!0,A.setPointerCapture(N.pointerId),$(N.clientX,N.clientY),s.sfx("select")}),A.addEventListener("pointermove",N=>{q&&$(N.clientX,N.clientY)});let U=()=>{q=!1};A.addEventListener("pointerup",U),A.addEventListener("pointercancel",U),A.addEventListener("keydown",N=>{let x={ArrowLeft:[-.05,0],ArrowRight:[.05,0],ArrowUp:[0,.05],ArrowDown:[0,-.05]}[N.key];x&&(N.preventDefault(),F.light.x=Math.max(-.62,Math.min(.62,F.light.x+x[0])),F.light.y=Math.max(-.62,Math.min(.62,F.light.y+x[1])),W())});let R=o.querySelector("[data-ctl]");R.addEventListener("input",N=>{let x=Ho.find(C=>C.k===N.target.dataset.k);if(!x)return;let y=+N.target.value;if(x.k==="kelvin")Q=y,F.light.colour=cr(y);else{let[C,Z]=x.path;F[C][Z]=y}N.target.nextElementSibling.textContent=_o(y,x),W()}),R.querySelector("[data-reset]").addEventListener("click",()=>{Object.assign(F.light,structuredClone(m.light)),Object.assign(F.shell,structuredClone(m.shell)),Q=3600,F.light.colour=cr(Q),R.querySelectorAll("input").forEach(N=>{let x=Ho.find(C=>C.k===N.dataset.k),y=x.k==="kelvin"?Q:x.path.reduce((C,Z)=>C[Z],F);N.value=y,N.nextElementSibling.textContent=_o(y,x)}),W(),s.sfx("select")})}return d.push(()=>t.hide()),{id:e.id,el:n,host:A}}var _o=(e,a)=>a.k==="kelvin"?`${e} K`:a.max<=1?e.toFixed(2):String(e),Rn=`
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
`;var xt=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),Hl=(e,a,o)=>e+(a-e)*o,Jo=.25,Bn=3,_l=40,Wl=e=>Math.max(1,.9*(Number.isFinite(e)?e:1)),Vl=(e,a,o)=>Math.hypot(Math.max(o.l-e,0,e-o.r),Math.max(o.t-a,0,a-o.b));function Yl(e,a,o,t){let s=(e.l+e.r)/2,g=(e.t+e.b)/2,i=Math.min(e.r-e.l,e.b-e.t)/2-o;for(let c of a)i=Math.min(i,Vl(s,g,c)-o);return Math.max(0,2*i/t)}function Qo(e,a,o){let t=Math.max(Jo,Math.min(Bn,o/Math.max(1,e))),s=xt(Number.isFinite(a)?a:1,Jo,t);return{zoom:s,size:Math.max(Math.min(_l,o),Math.min(e*s,o))}}function Gl(e,a,o,t){a!==e.shown&&(e.want=a);let s=Qo(o,e.want,t);return e.shown=s.zoom,s}var Pn="lo:studio2",Hn=2,Dn=Math.PI/180,Ul="https://thelightorb.com/embed/v1/orb.js",qt=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),_n=e=>Vt.find(a=>a.id===e)??Vt[0];function Ua(e="orb",a="clear"){let o=_n(a).id;return{v:Hn,version:1,family:ka(e)?e:"orb",preset:o,sph:Da(o),zoom:1,orb:Wt(pa("original").config),scene:{exposure:0,left:.65,right:.55,env:.5},view:{yaw:0,pitch:0,zoom:1},rot:0,slider:{length:420,height:92,tint:"#ffffff",tintAmount:0,preset:"original"},wave:{strength:.9,scale:80,exposure:1},bg:{exposure:1,horizon:.27,lamp:.8},ctl:{tint:"#ffffff",tintAmount:.1,depth:5,radius:999,blur:8}}}function Yo(e){let a=Ua(e?.family,e?.sph?.variant||(Vt.some(t=>t.id===e?.preset)?e.preset:"clear"));if(!e||typeof e!="object")return a;let o={...a};for(let t of["orb","scene","view","slider","wave","bg","ctl"])e[t]&&typeof e[t]=="object"&&(o[t]={...a[t],...structuredClone(e[t])});return e.orb?.light&&(o.orb=structuredClone(e.orb)),e.sph&&(o.sph=dr(Da(e.sph.variant||a.preset),e.sph)),typeof e.rot=="number"&&(o.rot=e.rot),typeof e.zoom=="number"&&(o.zoom=xt(Number.isFinite(e.zoom)?e.zoom:1,Jo,Bn)),o.preset=o.sph.variant,o}var Kl=["bloom","core","points","glitter","beads","liquid"],Xl=[["material","Material",()=>[["sph.base","Material","select",No.map(([e,a])=>[e,a]),"What the sphere is made of"],["sph.material.tint","Tint","color","Main colour of the glass, metal or cloud"],["sph.material.accent","Accent","color","Second colour: porcelain edges, cloud highlights, bead sheen, liquid surface"],["sph.material.refraction","Refraction",0,2.5,.01,"\xD7","How strongly the glass bends the room (index of refraction)"],["sph.material.dispersion","Dispersion",0,1,.01,"%","Colour fringes: the rainbow split of light through glass"],["sph.material.frost","Frost",0,1,.01,"%","Roughness: from polished to frosted, diffuse reflections"],["sph.material.rim","Fresnel rim",0,3,.01,"\xD7","Brightness of reflections at the edge"],["sph.material.iridescence","Iridescence",0,1,.01,"%","Thin-film rainbow sheen at the rim"],["sph.material.opacity","Opacity",0,1,.01,"%","How much of the background shows through"],["sph.material.exposure","Exposure",.2,2.5,.01,"\xD7","Overall brightness of the sphere"]]],["interior","Interior",e=>Kl.includes(e.sph.base)?[["sph.interior.amount",e.sph.base==="liquid"?"Density":"Amount",-1,1,.01,"%","How much is inside: more points, flakes, beads or cloud"],["sph.interior.size","Size",.3,2.5,.01,"\xD7","Scale of what is inside"],["sph.interior.speed","Motion",0,4,.01,"\xD7","Speed of the inner movement (also the metal and porcelain flow)"],["sph.interior.glow","Glow",0,3,.01,"\xD7","Brightness of what is inside"],...e.sph.base==="liquid"?[["sph.interior.fill","Fill level",0,1,.01,"%","How full the sphere is"]]:[]]:[["sph.interior.speed","Flow speed",0,4,.01,"\xD7","Speed of the surface flow and inner movement"]]],["light","Lighting",()=>[["sph.light.angle","Key angle",-180,180,1,"\xB0","Direction of the main soft box around the sphere"],["sph.light.height","Key height",-30,90,1,"\xB0","Height of the main soft box"],["sph.light.key","Key light",0,3,.01,"\xD7","Strength of the main soft box"],["sph.light.rim","Rim light",0,3,.01,"\xD7","Strength of the second (rim) soft box"],["sph.light.environment","Environment",0,2,.01,"\xD7","Brightness of the studio room reflected in the sphere"],["sph.light.horizon","Horizon",0,3,.01,"\xD7","The bright horizon line in reflections"],["sph.light.colour","Light colour","color","Colour of all the light"]]],["motion","Motion",()=>[["sph.motion.spin","Idle spin",-1.5,1.5,.01,"r/s","Turntable speed when nobody touches it (negative turns the other way)"],["sph.motion.tilt","Axis tilt",-1.2,1.2,.01,"rad","Rest tilt of the spin axis towards the viewer"],["sph.motion.roll","Axis roll",-1.6,1.6,.01,"rad","Sideways tilt of the spin axis"],["sph.motion.bob","Float",0,.4,.005,"r","Up-and-down float amplitude"],["sph.motion.bobSpeed","Float speed",0,3,.01,"Hz","Float cycles per second"],["sph.motion.breathe","Breathing",0,.12,.001,"%","Slow pulse of the size"],["sph.motion.pointer","Pointer follow",0,3,.01,"\xD7","How much it leans towards the pointer"],["sph.motion.stir","Tap stir",0,3,.01,"\xD7","How much a tap stirs what is inside"],["sph.motion.inertia","Drag inertia",0,2,.01,"\xD7","How long it keeps turning after a drag"],["sph.motion.speech","Speech pulse",0,3,.01,"\xD7","How much it pulses with a voice (test below)"]]],["scene","Scene",()=>[["sph.scene.background","Background","seg",[["none","None"],["solid","Solid"],["gradient","Gradient"]],"Transparent, a solid colour or a soft radial gradient"],["sph.scene.colour","Colour","color","Background colour (outer colour of the gradient)"],["sph.scene.colour2","Centre colour","color","Inner colour of the gradient"],["sph.scene.size","Sphere size",.3,1.2,.01,"%","Size of the sphere in its frame (leave room for the shadow)"],["sph.scene.shadow","Floor shadow",0,1,.01,"%","Soft contact shadow under the sphere"],["sph.scene.reflection","Reflection",0,1,.01,"%","Mirror reflection on the floor"]]]],Nn={scene:["Studio light",[["scene.exposure","Exposure",-2,2,.1,"EV"],["scene.left","Left light",0,1,.01,"%"],["scene.right","Right light",0,1,.01,"%"],["scene.env","Environment",0,1,.01,"%"]]],light:["Orb light",[["orb.light.colour","Colour","color"],["orb.light.strength","Strength",0,1,.01,"%"],["orb.light.x","Position X",-.6,.6,.01,"r"],["orb.light.y","Position Y",-.8,.6,.01,"r"]]],slider:["Capsule",[["slider.length","Length",240,600,1,"px"],["slider.height","Height",60,130,1,"px"],["slider.tint","Glass tint","color"],["slider.tintAmount","Tint amount",0,1,.01,"%"],["slider.preset","Orb thumb","select",Pa.map(e=>[e.id,e.name])]]],wave:["Wave",[["wave.strength","Strength",.1,1,.01,"%"],["wave.scale","Ring scale",40,140,1,"px"],["wave.exposure","Environment",0,1,.01,"%"]]],bg:["Environment",[["bg.exposure","Dark \u2192 warm",0,1,.01,"%"],["bg.horizon","Horizon",.15,.45,.01,"%"],["bg.lamp","Orb lamp (dark)",0,1,.01,"%"]]],ctl:["Crystal controls",[["ctl.tint","Tint","color"],["ctl.tintAmount","Tint amount",0,1,.01,"%"],["ctl.depth","Optical depth",0,10,.5,"px"],["ctl.radius","Corner radius",6,999,1,"px"],["ctl.blur","Backdrop blur",0,24,1,"px"]]]},Jl={"orb-slider":["slider","light","scene"],"orb-wave":["wave"],"background-pack":["bg"],"crystal-controls":["ctl"]},Go=e=>e.family==="orb"?Xl.map(([a,o,t])=>[a,o,t(e)]):Jl[e.family].map(a=>[a,Nn[a][0],Nn[a][1]]),Fn=new Set(["sph.material.dispersion","sph.material.iridescence","sph.material.opacity","sph.material.rim","sph.interior.glow","sph.light.rim","sph.light.horizon","sph.motion.roll","sph.motion.bobSpeed","sph.motion.pointer","sph.motion.stir","sph.motion.inertia","sph.motion.speech","sph.scene.colour2","sph.scene.reflection"]),Ql=[[1900,"Candle"],[2700,"Warm"],[4e3,"Neutral"],[5600,"Daylight"],[6500,"Cool"],[8500,"Sky"]],Zl=e=>typeof e[2]=="number",Uo=e=>e[5]==="%"?100:1,ed={undo:'<path d="M9 7H4V2"/><path d="M4 7a9 9 0 1 1-1 7"/>',redo:'<path d="M15 7h5V2"/><path d="M20 7a9 9 0 1 0 1 7"/>',orbit:'<circle cx="12" cy="12" r="8"/><ellipse cx="12" cy="12" rx="8" ry="3"/>',light:'<circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',zoom:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M8.5 11h5M11 8.5v5"/>',reset:'<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>',stir:'<path d="M4 15c3-6 6 6 9 0s6-6 7 0"/>',bg:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/>',fit:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',more:'<circle cx="6" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18" cy="12" r="1"/>',plus:'<path d="M12 6v12M6 12h12"/>',minus:'<path d="M6 12h12"/>',chev:'<path d="M2 3.5l2.5 2.5L7 3.5"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',open:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v6H4V6h6"/>',dup:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',del:'<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"/>',sound:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'},Rt=(e,a="0 0 24 24")=>`<svg viewBox="${a}" aria-hidden="true">${ed[e]}</svg>`,td=typeof navigator<"u"&&/Mac|iP/.test(navigator.platform||navigator.userAgent),Na=td?"\u2318":"Ctrl+",Ko=!1;function ad(){if(Ko||document.getElementById("sx-css")){Ko=!0;return}let e=document.createElement("style");e.id="sx-css",e.textContent=jn,document.head.append(e),Ko=!0}function Wn({api:e,audio:a,top:o,page:t,query:s,ICON:g,flash:i,product:c,store:d}){ad();let h=new Proxy({},{get:(b,u)=>(...w)=>c.orb?.[u]?.(...w)});function p(){return n.family==="orb"&&n.preset==="clear"&&n.sph?.base==="clear"}let m=new Set(["sph.base","sph.material.tint","sph.material.refraction","sph.material.frost","sph.material.exposure","sph.interior.amount","sph.interior.size","sph.interior.speed","sph.interior.glow","sph.light.key","sph.light.environment","sph.light.colour","sph.motion.spin","sph.motion.stir","sph.motion.speech"]),F=()=>dn(n.sph),Q=()=>({dark:!0,envBoost:n.sph.light.environment,envLevel:n.sph.light.environment,keyLevel:n.sph.light.key,exposure:Math.log2(Math.max(.05,n.sph.material.exposure))*2,left:.65,right:.55}),n;try{let b=JSON.parse(sessionStorage.getItem(Pn));n=b&&b.v===Hn?Yo(b):null}catch{n=null}if(n||(n=Ua()),s.design&&d.design(s.design)){let b=d.design(s.design);n=Yo({...structuredClone(b.draft),family:b.family}),n.designId=b.id,n.designName=b.name}else s.family&&ka(s.family)&&(s.family!==n.family||s.preset&&s.preset!==n.preset)&&(n=Ua(s.family,Vt.some(b=>b.id===s.preset)?s.preset:"clear"));let A=n.designId?JSON.stringify(dt(n)):null,O=[JSON.stringify(n)],W=0,$=[["voice_audition.samantha","Voice \xB7 Samantha"],["voice_audition.daniel","Voice \xB7 Daniel"],["home.samantha","Welcome narration"],...fr.map(b=>[`sfx.${b.id}`,`Sound \xB7 ${b.name}`])],q=s.sound&&$.some(b=>b[0]===s.sound)?s.sound:$[0][0];function U(){let[b,u]=q.split(".");b==="sfx"?a.playUrl(q,fr.find(w=>w.id===u).file,{from:0}):a.play(b,{voice:u,kind:"audition",from:0}),a.sfx("select")}let R=s.sound?setTimeout(()=>{R=null,U()},900):null,N=()=>{clearTimeout(R),R=null},x=a.store.on((b,u)=>{(u.voice&&!a.voiceOn||u.sounds&&!a.soundsOn)&&N()}),y="orbit",C="props",Z="material",Y=!1,J={material:!0,interior:!0,light:!0,motion:!1,scene:!1,slider:!0,wave:!0,bg:!0,ctl:!0,scene_:!0},ie={},ce=()=>{try{sessionStorage.setItem(Pn,JSON.stringify(n))}catch{}};function ee(){let b=JSON.stringify(n);b!==O[W]&&(O.splice(W+1),O.push(b),W=O.length-1,O.length>120&&(O.shift(),W--)),ce(),De()}document.body.classList.add("dark-ui","sx-on"),t.innerHTML=`
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
    <div class="sx-modal" data-modal hidden></div>`;let ne=t.querySelector(".sx"),le=t.querySelector("[data-top]"),Ie=t.querySelector("[data-rail]"),qe=t.querySelector("[data-view]"),D=t.querySelector("[data-stage]"),f=t.querySelector("[data-ins]"),T=t.querySelector("[data-modal]"),B=t.querySelector("[data-hud]"),j=t.querySelector("[data-grab]"),z=b=>{ne.classList.toggle("peek",!b),j.setAttribute("aria-expanded",b)};matchMedia("(max-width: 820px)").matches&&z(!1);{let b=null;j.addEventListener("pointerdown",u=>{b=u.clientY,j.setPointerCapture(u.pointerId)}),j.addEventListener("click",u=>{u.detail===0&&z(ne.classList.contains("peek"))}),j.addEventListener("pointercancel",()=>{b=null}),j.addEventListener("pointerup",u=>{if(b==null)return;let w=u.clientY-b;b=null,z(Math.abs(w)<12?ne.classList.contains("peek"):w<0)}),f.addEventListener("click",u=>{u.target.closest("[data-tab],[data-chip]")&&z(!0)},!0)}let pe=Er(D,n.preset,{config:n.sph}),me=0,Me=0,ge=new Proxy(pe,{get(b,u){if(p()){if(u==="rotate")return G=>{me+=G*.01,h.setObjectYaw(me)};if(u==="stir")return()=>h.nudge(xt(.8*(n.sph.motion.stir??1),0,1.5));if(u==="setSpeech")return G=>h.setSpeech(xt(G*(n.sph.motion.speech??1)));if(u==="resetView")return()=>{me=0,h.setObjectYaw(0)};if(u==="canvas")return null}let w=b[u];return typeof w=="function"?w.bind(b):w}});ge.canvas?.addEventListener("pointerdown",()=>{y!=="orbit"||Re||(Dt=!0)});let se=()=>n.designName||(n.family==="orb"?`${_n(n.preset).name} Orb`:ka(n.family).name);function je(){le.innerHTML=`
      <h1 class="vh">Studio</h1>
      <div class="sx-doc">
        <span class="sx-dirty" data-dirty title="Unsaved changes"></span>
        <input class="sx-name" data-name value="${qt(se())}" aria-label="Design name" maxlength="48" spellcheck="false" data-tip="Rename">
        <select class="sx-sel" data-fam aria-label="Object">${ra.map(u=>`<option value="${u.id}"${u.id===n.family?" selected":""}>${qt(u.name)}</option>`).join("")}</select>
        ${n.family==="orb"?`<select class="sx-sel" data-pre aria-label="Start from a version">${Vt.map(u=>`<option value="${u.id}"${u.id===n.preset?" selected":""}>${qt(u.name)}</option>`).join("")}</select>`:""}
      </div>
      <span class="sx-sp"></span>
      <button class="sx-ib sx-more" type="button" data-more aria-label="More: object, version, reset" aria-expanded="false">${Rt("more")}</button>
      <button class="sx-ib" type="button" data-undo aria-label="Undo" data-tip="Undo (${Na}Z)">${Rt("undo")}</button>
      <button class="sx-ib" type="button" data-redo aria-label="Redo" data-tip="Redo (${Na}\u21E7Z)">${Rt("redo")}</button>
      <button class="sx-ib" type="button" data-resetall aria-label="Reset to the version" data-tip="Reset to the version">${Rt("reset")}</button>
      <span class="sx-sep hide-m"></span>
      <button class="sx-tb" type="button" data-save data-tip="Save to My designs (${Na}S)">Save</button>
      <button class="sx-tb pri" type="button" data-export data-tip="Export code (${Na}E)">Export</button>`,le.querySelector("[data-fam]").addEventListener("change",u=>{let w=n.preset;n=Ua(u.target.value,w),a.sfx("press"),ae(),ee()}),le.querySelector("[data-pre]")?.addEventListener("change",u=>St(u.target.value));let b=le.querySelector("[data-name]");b.addEventListener("change",()=>{n.designName=b.value.trim().slice(0,48)||void 0,n.designId&&d.renameDesign(n.designId,se()),b.value=se(),ce(),Fe()}),b.addEventListener("keydown",u=>{u.key==="Enter"&&b.blur()}),le.querySelector("[data-more]").addEventListener("click",u=>{let w=ne.classList.toggle("more-open");u.currentTarget.setAttribute("aria-expanded",w),a.sfx("press")}),le.querySelector("[data-undo]").addEventListener("click",()=>Ke(-1)),le.querySelector("[data-redo]").addEventListener("click",()=>Ke(1)),le.querySelector("[data-resetall]").addEventListener("click",()=>{let u={designId:n.designId,designName:n.designName,zoom:n.zoom};n={...Ua(n.family,n.preset),...u},a.sfx("press"),ae(),ee(),i("Reset to the version\u2019s defaults.")}),le.querySelector("[data-save]").addEventListener("click",()=>Ma()),le.querySelector("[data-export]").addEventListener("click",()=>Ut()),De()}function De(){let b=le.querySelector("[data-undo]"),u=le.querySelector("[data-redo]");b&&(b.disabled=W<=0),u&&(u.disabled=W>=O.length-1),le.querySelector("[data-dirty]")?.classList.toggle("on",JSON.stringify(dt(n))!==A)}function Ke(b){let u=xt(W+b,0,O.length-1);u!==W&&(W=u,n=JSON.parse(O[u]),a.sfx("press"),ce(),ae(),De())}function St(b){let u={zoom:n.zoom};n={...Ua("orb",b),...u},a.sfx("press"),ge.stir(),ae(),ee()}function it(){let b=n.family==="orb",u=[["orbit","Orbit (V) \xB7 or hold space and drag"],["light",b?"Move the key light (L)":"Move the light (L)"],["zoom","Zoom: drag up/down (Z)"]].filter(([w])=>b||w==="orbit"||w==="light"&&n.family==="orb-slider");Ie.innerHTML=u.map(([w,G])=>`<button class="sx-ib" type="button" data-tool="${w}" aria-pressed="${w===y}" aria-label="${G}" data-tip="${G}">${Rt(w)}</button>`).join("")+(b?`<hr><button class="sx-ib" type="button" data-stir aria-label="Stir" data-tip="Stir what is inside">${Rt("stir")}</button>
        <button class="sx-ib" type="button" data-checker aria-pressed="${Y}" aria-label="Transparency grid" data-tip="Transparency grid">${Rt("bg")}</button>
        <button class="sx-ib" type="button" data-snap aria-label="Download PNG" data-tip="Download a PNG">${Rt("camera")}</button>
        <button class="sx-ib" type="button" data-speak aria-label="Test with a voice" data-tip="Test the speech pulse">${Rt("sound")}</button>`:""),Ie.querySelectorAll("[data-tool]").forEach(w=>w.addEventListener("click",()=>rt(w.dataset.tool))),Ie.querySelector("[data-stir]")?.addEventListener("click",()=>{ge.stir(),a.sfx("press")}),Ie.querySelector("[data-checker]")?.addEventListener("click",()=>{Y=!Y,qe.classList.toggle("checker",Y),it()}),Ie.querySelector("[data-snap]")?.addEventListener("click",()=>Jt()),Ie.querySelector("[data-speak]")?.addEventListener("click",()=>U())}function rt(b,u=!1){y=b,qe.className=qe.className.replace(/\bt-\w+/g,"")+` t-${b}`,qe.classList.toggle("checker",Y),D.style.pointerEvents=b==="orbit"&&!Re?"":"none",u||a.sfx("press"),it(),oe()}let Qe=(b,u)=>{let w=b*Uo(u),G=u[4]*Uo(u),X=G>=1?0:G>=.1?1:G>=.01?2:3;return(+w.toFixed(X)).toString()},ve=()=>n.family==="orb"?{sph:Da(n.preset)}:Ua(n.family);function be(b,u){let[w,G]=b,X=Lt(n,w),Pe=`sx-${w.replace(/\./g,"-")}`,Ve=Zl(b)?b[6]:b[3+(b[2]==="select"||b[2]==="seg"?1:0)],gt=Lt(u,w)!==void 0&&JSON.stringify(Lt(u,w))!==JSON.stringify(X)?" mod":"",Bt=bt=>`<label class="sx-lab${gt}" for="${Pe}"${bt?" data-scrub":""}${Ve?` title="${qt(Ve)}${bt?" \u2014 drag to scrub":""}"`:""}>${qt(G)}</label>`;if(p()&&w.startsWith("sph.")&&!m.has(w))return da().replace(/^<div class="sx-row/,'<div inert title="Not available on the real Orb yet" class="sx-row sx-off');if(w==="sph.material.dispersion"&&["chrome","porcelain","bloom"].includes(n.sph?.base))return da().replace(/^<div class="sx-row/,'<div inert title="Opaque material: no light passes through to split" class="sx-row sx-off');return da();function da(){if(b[2]==="color")return`<div class="sx-row full">${Bt()}<span class="sx-col"><input type="color" id="${Pe}" data-path="${w}" value="${X}"><input class="sx-num" data-hex="${w}" value="${X}" aria-label="${qt(G)} hex" spellcheck="false" maxlength="7"></span></div>`;if(b[2]==="select")return`<div class="sx-row full">${Bt()}<select class="sx-sel" id="${Pe}" data-path="${w}">${b[3].map(([Ye,Ht])=>`<option value="${Ye}"${Ye===X?" selected":""}>${qt(Ht)}</option>`).join("")}</select></div>`;if(b[2]==="seg")return`<div class="sx-row full">${Bt()}<span class="sx-seg" role="group" id="${Pe}">${b[3].map(([Ye,Ht])=>`<button type="button" data-seg="${w}" data-v="${Ye}" aria-pressed="${Ye===X}">${Ht}</button>`).join("")}</span></div>`;let[,,bt,Be,ct,ht]=b,Ee=(X-bt)/(Be-bt)*100;return`<div class="sx-row">${Bt(!0)}<input class="sx-rng" type="range" id="${Pe}" data-path="${w}" min="${bt}" max="${Be}" step="${ct}" value="${X}" style="--p:${Ee}%" aria-label="${qt(G)}">
      <span class="sx-nw"><input class="sx-num" type="text" inputmode="decimal" data-num="${w}" value="${Qe(X,b)}" aria-label="${qt(G)}${ht?` (${ht})`:""}"><i>${ht}</i></span></div>`}}let he=()=>Go(n).flatMap(b=>b[2]),Ae=b=>he().find(u=>u[0]===b),Ne=()=>matchMedia("(max-width: 820px)").matches;function Fe(){let b=f.querySelector(".sx-body")?.scrollTop??0,u=Go(n),w=ve();u.some(X=>X[0]===Z)||(Z=u[0][0]);let G=[["props","Properties"],["designs","My designs"],["feedback","Feedback"]];f.innerHTML=`
      <div class="sx-tabs" role="tablist" aria-label="Inspector">${G.map(([X,Pe])=>`<button class="sx-tab" role="tab" type="button" data-tab="${X}" aria-selected="${X===C}">${Pe}</button>`).join("")}</div>
      ${C==="props"?`<div class="sx-chips" role="group" aria-label="Section">${u.map(([X,Pe])=>`<button type="button" data-chip="${X}" aria-pressed="${X===Z}">${Pe}</button>`).join("")}</div>`:""}
      <div class="sx-body" data-body>${C==="props"?u.map(([X,Pe,Ve])=>{let gt=J[X]??!0,Bt=Ve.filter(Ee=>Lt(w,Ee[0])!==void 0&&JSON.stringify(Lt(w,Ee[0]))!==JSON.stringify(Lt(n,Ee[0]))).length,da=Ee=>Lt(w,Ee[0])!==void 0&&JSON.stringify(Lt(w,Ee[0]))!==JSON.stringify(Lt(n,Ee[0])),bt=ie[X]?[]:Ve.filter(Ee=>Fn.has(Ee[0])&&!da(Ee)),Be=Ve.filter(Ee=>!bt.includes(Ee)),ct=Ee=>!(p()&&Ee[0].startsWith("sph.")&&!m.has(Ee[0])),ht=Ve.filter(Ee=>Fn.has(Ee[0])&&ct(Ee)).length;return`<section class="sx-sec${X===Z?"":" m-off"}" data-sec="${X}"><button class="sx-sh" type="button" data-tog="${X}" aria-expanded="${gt}">${Rt("chev","0 0 9 9")}${Pe}<span class="n">${Bt?`${Bt} changed`:""}</span></button>
          <div class="sx-rows" ${gt?"":"hidden"}>${Be.map(Ee=>be(Ee,w)).join("")}
          ${X==="light"&&n.family==="orb"?`<div class="sx-row full"><span class="sx-lab">Temperature</span><span class="sx-seg sx-k" role="group" aria-label="Light colour temperature">${Ql.map(([Ee,Ye])=>`<button type="button" data-kelvin="${Ee}" title="${Ee} K" aria-pressed="${cr(Ee)===Lt(n,"sph.light.colour")}">${Ye}</button>`).join("")}</span></div>`:""}
          ${ht||Bt?`<div class="sx-acts sx-adv">${ht?`<button class="sx-tb" type="button" data-more="${X}" aria-expanded="${!!ie[X]}">${ie[X]?"Fewer controls":`More controls (${bt.filter(ct).length})`}</button>`:""}${Bt?`<button class="sx-tb" type="button" data-secreset="${X}">Reset ${qt(Pe.toLowerCase())}</button>`:""}</div>`:""}
          ${(()=>{let Ee=p()?Ve.filter(Ye=>Ye[0].startsWith("sph.")&&!m.has(Ye[0])).length:0;return Ee?`<p class="sx-offn">${Ee} more ${Ee===1?"control applies":"controls apply"} to the other versions of the Orb.</p>`:X==="material"&&["chrome","porcelain","bloom"].includes(n.sph?.base)?'<p class="sx-offn">Dispersion applies to glass; this material is opaque.</p>':""})()}
          ${X==="motion"?`<div class="sx-row full"><span class="sx-lab">Test sound</span><select class="sx-sel" data-snd aria-label="Sound to test">${$.map(([Ee,Ye])=>`<option value="${Ee}"${Ee===q?" selected":""}>${qt(Ye)}</option>`).join("")}</select></div>
            <div class="sx-acts"><button class="sx-tb" type="button" data-testsnd>Play to test the pulse</button><button class="sx-tb" type="button" data-stir2>Stir</button></div>`:""}
          ${X==="wave"?'<div class="sx-acts"><button class="sx-tb" type="button" data-trigger>Trigger a wave</button></div>':""}
          </div></section>`}).join("")+'<p class="sx-hint sx-pad">Drag a label to scrub (<span class="sx-kbd">\u21E7</span> \xD710, <span class="sx-kbd">\u2325</span> fine). Gold dots mark values changed from the version; double-click a label to restore it.</p>':C==="designs"?He():Pt()}</div>`,f.querySelector("[data-body]").scrollTop=b,et()}function He(){let b=d.designs();return`<div class="sx-pad">
      <h3 class="sx-h">My designs</h3>
      ${b.length?`<div class="sx-ds">${b.map(u=>`<article class="sx-d${u.id===n.designId?" cur":""}" data-did="${qt(u.id)}">
        ${u.thumb?`<img src="${u.thumb}" alt="">`:'<span class="ph"></span>'}
        <div><input value="${qt(u.name)}" aria-label="Design name" maxlength="48" data-dn><small>${qt(u.familyName||"")} \xB7 ${new Date(u.at).toLocaleDateString()}</small></div>
        <div class="ab"><button class="sx-ib" type="button" data-dopen aria-label="Open" data-tip="Open">${Rt("open")}</button><button class="sx-ib" type="button" data-ddup aria-label="Duplicate" data-tip="Duplicate">${Rt("dup")}</button><button class="sx-ib" type="button" data-ddel aria-label="Delete" data-tip="Delete">${Rt("del")}</button></div>
      </article>`).join("")}</div>`:'<p class="sx-empty">Nothing saved yet. Save keeps the design on this device; it also appears in Account \u2192 My Designs.</p>'}
      <div class="sx-acts" style="margin-bottom:16px"><button class="sx-tb pri" type="button" data-savenew>Save as new design</button>${n.designId?'<button class="sx-tb" type="button" data-new>New from version</button>':""}</div>
      ${n.family==="orb"?`<h3 class="sx-h">Start from a version</h3><div class="sx-vers">${Vt.map(u=>`<button class="sx-ver" type="button" data-ver="${u.id}" aria-pressed="${u.id===n.preset&&!n.designId}" title="${qt(u.line)}">${qt(u.name)}</button>`).join("")}</div>`:""}
    </div>`}function Pt(){return`<div class="sx-ea">
      ${'<p class="access">Studio is in early access \u2014 free while we build it. Designs stay on this device.</p>'}
      ${yn("studio")}${Kr({tone:"dark",heading:!1})}
      <h3 class="sx-h" style="margin-top:18px">Shortcuts</h3>
      <p class="sx-hint"><span class="sx-kbd">${Na}Z</span> undo \xB7 <span class="sx-kbd">${Na}\u21E7Z</span> redo \xB7 <span class="sx-kbd">${Na}S</span> save \xB7 <span class="sx-kbd">${Na}E</span> export \xB7 <span class="sx-kbd">V</span> orbit \xB7 <span class="sx-kbd">L</span> light \xB7 <span class="sx-kbd">Z</span> zoom \xB7 <span class="sx-kbd">R</span> reset view \xB7 <span class="sx-kbd">space</span>+drag orbit</p>
    </div>`}function et(){f.querySelectorAll("[data-tab]").forEach(u=>u.addEventListener("click",()=>{C=u.dataset.tab,a.sfx("press"),Fe()})),f.querySelectorAll("[data-chip]").forEach(u=>u.addEventListener("click",()=>{Z=u.dataset.chip,a.sfx("press"),Fe()})),f.querySelectorAll("[data-tog]").forEach(u=>u.addEventListener("click",()=>{Ne()||(J[u.dataset.tog]=!(J[u.dataset.tog]??!0),a.sfx("press"),Fe())})),C==="feedback"&&(wn(f,{sfx:u=>a.sfx(u)}),Vr(f),Xr(f,{sfx:u=>a.sfx(u)})),C==="designs"&&Ge(),f.querySelectorAll("input[type=range][data-path]").forEach(u=>{u.addEventListener("input",()=>{H(u.dataset.path,+u.value),tt(u.dataset.path)}),u.addEventListener("change",()=>{ee(),P(),a.sfx("release")})}),f.querySelectorAll("input[type=color][data-path]").forEach(u=>{u.addEventListener("input",()=>{H(u.dataset.path,u.value);let w=f.querySelector(`[data-hex="${u.dataset.path}"]`);w&&(w.value=u.value)}),u.addEventListener("change",()=>{ee(),P()})}),f.querySelectorAll("[data-hex]").forEach(u=>{u.addEventListener("input",()=>{/^#[0-9a-f]{6}$/i.test(u.value)&&(H(u.dataset.hex,u.value.toLowerCase()),f.querySelector(`input[type=color][data-path="${u.dataset.hex}"]`).value=u.value)}),u.addEventListener("change",()=>{/^#[0-9a-f]{6}$/i.test(u.value)||(u.value=Lt(n,u.dataset.hex)),ee(),P()})}),f.querySelectorAll("select[data-path]").forEach(u=>u.addEventListener("change",()=>{if(u.dataset.path==="sph.base"){let[w,G]=Fo[u.value];n.sph.material.tint=Sr(w),n.sph.material.accent=Sr(G)}H(u.dataset.path,u.value),a.sfx("press"),ge.stir(),Fe(),ee()})),f.querySelectorAll("[data-seg]").forEach(u=>u.addEventListener("click",()=>{H(u.dataset.seg,u.dataset.v),a.sfx("press"),Fe(),ee()})),f.querySelectorAll("[data-num]").forEach(u=>{let w=Ae(u.dataset.num);if(!w)return;let[,,G,X]=w,Pe=Uo(w);u.addEventListener("input",()=>{let Ve=parseFloat(u.value);Number.isFinite(Ve)&&(H(u.dataset.num,xt(Ve/Pe,G,X)),Ue(u.dataset.num))}),u.addEventListener("change",()=>{tt(u.dataset.num),ee(),P()}),u.addEventListener("keydown",Ve=>{if(Ve.key==="Enter"&&u.blur(),Ve.key==="ArrowUp"||Ve.key==="ArrowDown"){Ve.preventDefault();let gt=w[4]*(Ve.shiftKey?10:Ve.altKey?.1:1);H(u.dataset.num,xt(Lt(n,u.dataset.num)+(Ve.key==="ArrowUp"?gt:-gt),G,X)),tt(u.dataset.num),ee()}}),u.addEventListener("focus",()=>u.select())}),f.querySelectorAll("[data-scrub]").forEach(u=>{let w=u.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),G=Ae(w);if(!G)return;let[,,X,Pe,Ve]=G;u.addEventListener("pointerdown",gt=>{if(gt.button)return;gt.preventDefault(),u.setPointerCapture(gt.pointerId);let Bt=gt.clientX,da=Lt(n,w),bt=(Pe-X)/240,Be=ht=>{let Ee=ht.shiftKey?10:ht.altKey?.1:1,Ye=xt(da+(ht.clientX-Bt)*bt*Ee,X,Pe);Ye=Math.round(Ye/Ve)*Ve,H(w,+Ye.toFixed(5)),tt(w)},ct=()=>{u.removeEventListener("pointermove",Be),u.removeEventListener("pointerup",ct),u.removeEventListener("pointercancel",ct),ee(),P()};u.addEventListener("pointermove",Be),u.addEventListener("pointerup",ct),u.addEventListener("pointercancel",ct)})});let b=u=>{let w=ve();for(let G of u){let X=Lt(w,G);X!==void 0&&H(G,structuredClone(X))}ee(),a.sfx("release"),Fe()};f.querySelectorAll(".sx-lab[for]").forEach(u=>u.addEventListener("dblclick",w=>{w.preventDefault(),b([u.getAttribute("for").replace(/^sx-/,"").replace(/-/g,".")])})),f.querySelectorAll("[data-secreset]").forEach(u=>u.addEventListener("click",()=>b((Go(n).find(w=>w[0]===u.dataset.secreset)?.[2]??[]).map(w=>w[0])))),f.querySelectorAll("[data-more]").forEach(u=>u.addEventListener("click",()=>{ie[u.dataset.more]=!ie[u.dataset.more],a.sfx("press"),Fe()})),f.querySelectorAll("[data-kelvin]").forEach(u=>u.addEventListener("click",()=>{H("sph.light.colour",cr(+u.dataset.kelvin)),ee(),a.sfx("press"),Fe()})),f.querySelector("[data-snd]")?.addEventListener("change",u=>{q=u.target.value}),f.querySelector("[data-testsnd]")?.addEventListener("click",()=>U()),f.querySelector("[data-stir2]")?.addEventListener("click",()=>ge.stir()),f.querySelector("[data-trigger]")?.addEventListener("click",()=>$e())}function Ge(){f.querySelectorAll("[data-did]").forEach(b=>{let u=b.dataset.did,w=()=>d.design(u);b.querySelector("[data-dn]").addEventListener("change",G=>{let X=G.target.value.trim()||"Untitled design";d.renameDesign(u,X),n.designId===u&&(n.designName=X,ce(),je()),a.sfx("confirm")}),b.querySelector("[data-dopen]").addEventListener("click",()=>Ze(w())),b.querySelector("[data-ddup]").addEventListener("click",()=>{let G=w();if(!G)return;if(d.designs().length>=40){i("You have 40 designs, the most this browser keeps. Delete one first.");return}let X={...structuredClone(G),id:Date.now().toString(36),name:`${G.name} copy`.slice(0,48),at:new Date().toISOString()};d.saveDesign(X)&&(a.sfx("confirm"),Fe())}),b.querySelector("[data-ddel]").addEventListener("click",()=>{let G=w();G&&confirm(`Delete \u201C${G.name}\u201D? This cannot be undone.`)&&(d.deleteDesign(u),n.designId===u&&(delete n.designId,A=null,ce(),De()),a.sfx("close"),Fe())})}),f.querySelector("[data-savenew]")?.addEventListener("click",()=>Ma(!0)),f.querySelector("[data-new]")?.addEventListener("click",()=>St(n.preset)),f.querySelectorAll("[data-ver]").forEach(b=>b.addEventListener("click",()=>St(b.dataset.ver)))}function Ze(b){b&&(n=Yo({...structuredClone(b.draft),family:b.family}),n.designId=b.id,n.designName=b.name,A=JSON.stringify(dt(n)),a.sfx("press"),ae(),ee(),i(`Opened \u201C${b.name}\u201D.`))}function Ue(b){let u=f.querySelector(`input[type=range][data-path="${b}"]`);u&&(u.value=Lt(n,b),u.style.setProperty("--p",`${(u.value-u.min)/(u.max-u.min)*100}%`))}function tt(b){let u=f.querySelector(`[data-num="${b}"]`),w=Ae(b);u&&w&&document.activeElement!==u&&(u.value=Qe(Lt(n,b),w)),Ue(b)}function P(){let b=ve();f.querySelectorAll(".sx-lab[for]").forEach(u=>{let w=u.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),G=Lt(b,w);G!==void 0&&u.classList.toggle("mod",JSON.stringify(G)!==JSON.stringify(Lt(n,w)))}),f.querySelectorAll("[data-sec]").forEach(u=>{let w=u.querySelectorAll(".sx-lab.mod").length,G=u.querySelector(".n");G&&(G.textContent=w?`${w} changed`:"")}),De()}function H(b,u){let w=b.split("."),G=n;for(let X of w.slice(0,-1))G=G[X];G[w.at(-1)]=u,V()}function V(){let b=n.family;if(b==="orb"){let u=p();for(let w of D.children)w.style.visibility=u?"hidden":"";u?c.show(F(),Q()):(pe.setConfig({...n.sph,variant:n.preset}),c.hide())}else{let u=e.chamber,w=n.scene;Object.assign(u,{left:w.left,right:w.right,exposure:w.exposure,yaw:n.view.yaw*Dn,pitch:n.view.pitch*Dn,platform:!1});let G={dark:!0,envBoost:Hl(.55,1.6,w.env),exposure:w.exposure,left:w.left,right:w.right};if(b==="orb-slider"){let X=Wt(pa(n.slider.preset).config);Object.assign(X.light,{strength:n.orb.light.strength,colour:n.orb.light.colour,x:n.orb.light.x,y:n.orb.light.y}),c.show(X,G)}else b==="orb-wave"||b==="background-pack"?c.show(Wt(pa("original").config),G):c.hide();h.setView({yaw:0,pitch:0}),kt.set({strength:n.wave.strength,scale:n.wave.scale,horizon:b==="background-pack"?n.bg.horizon:.3,lamp:n.bg.lamp}),b==="orb-wave"&&kt.setExposure(n.wave.exposure),b==="background-pack"&&kt.setExposure(n.bg.exposure),_e(),Xe()}oe(),ce()}function oe(){let b=Math.round(n.zoom*100);B.innerHTML=n.family==="orb"?`<b>${b}%</b><b>${{orbit:"Orbit",light:"Key light",zoom:"Zoom"}[y]}</b>${y==="light"?`<b>${Math.round(n.sph.light.angle)}\xB0 \xB7 ${Math.round(n.sph.light.height)}\xB0</b>`:""}`:""}function ae(){let b=n.family,u=t.querySelector("[data-screen]"),w=t.querySelector("[data-scap]"),G=t.querySelector("[data-kit]");D.hidden=b!=="orb",t.querySelector("[data-zoombar]").hidden=b!=="orb",u.hidden=!(b==="orb-wave"||b==="background-pack"),w.hidden=b!=="orb-slider",G.hidden=b!=="crystal-controls",kr(),e.removeBackdrop(kt.canvas),u.hidden||(Jr(u),e.addBackdrop(kt.canvas),kt.setExposure(b==="background-pack"?n.bg.exposure:n.wave.exposure,!0)),b==="orb-slider"&&(w.innerHTML='<span class="cap-label">slide to enter</span>',w.setAttribute("role","slider"),w.tabIndex=0,w.setAttribute("aria-label","Slide to enter")),b==="crystal-controls"&&(G.innerHTML=`<div class="kit-swatch"><button class="gb primary" type="button">Start project</button><button class="gb" type="button">Secondary</button><input class="gi" placeholder="Enter text" aria-label="Example field"><select class="gsel" aria-label="Example select"><option>Select</option><option>Clear</option></select><button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><button class="gb gc" type="button" aria-label="Confirm">${g.check}</button></div>`),G.querySelector(".gsw")?.addEventListener("click",X=>{X.currentTarget.setAttribute("aria-checked",String(X.currentTarget.getAttribute("aria-checked")!=="true")),a.sfx("press")}),b!=="orb"&&y==="zoom"&&(y="orbit"),je(),it(),Fe(),V(),rt(y,!0)}let Se=0;function _e(){let b=t.querySelector("[data-scap]");if(!b||b.hidden)return;let u=n.slider,w=u.tint,G=u.tintAmount;b.style.background=`linear-gradient(180deg, ${pr(w,.1+G*.35)}, ${pr(w,.03+G*.2)} 50%, ${pr(w,.08+G*.3)})`}function Xe(){let b=t.querySelector("[data-kit]");if(!b||b.hidden)return;let u=n.ctl,w=u.depth,G=b.querySelector("style");G||(G=document.createElement("style"),b.append(G)),G.textContent=`.st-kit .gb,.st-kit .gi,.st-kit .gsel{border-radius:${u.radius}px;-webkit-backdrop-filter:blur(${u.blur}px) saturate(1.5);backdrop-filter:blur(${u.blur}px) saturate(1.5)}
      .st-kit .gb:not(.primary){background:linear-gradient(180deg,${pr(u.tint,.3+u.tintAmount*.4)},${pr(u.tint,.08+u.tintAmount*.3)} 50%,${pr(u.tint,.25+u.tintAmount*.35)});
        box-shadow:inset 0 ${w*.3}px ${w*.2}px rgba(255,255,255,.95),inset 0 -${w*.6}px ${w}px -1px rgba(255,255,255,.75),inset 0 0 0 1px rgba(150,158,166,.18),inset 0 -${w*2}px ${w*2.8}px -${w*2}px rgba(120,128,136,.35),0 1px 1px rgba(40,44,50,.1),0 ${w*2}px ${w*4}px -${w*2}px rgba(40,44,50,.38)}`}let Le=null,Re=!1,Dt=!1;qe.addEventListener("pointerdown",b=>{if(b.target.closest("[data-zoombar],.st-cap,.st-kit,.st-screen"))return;let u=Dt;Dt=!1,!(n.family==="orb"&&y==="orbit"&&u&&!Re)&&(Le={x:b.clientX,y:b.clientY,lx:b.clientX,ly:b.clientY,v:{...n.view},z:n.zoom,l:{...n.sph.light},ol:{...n.orb.light}},qe.setPointerCapture(b.pointerId),qe.classList.add("grab"))}),qe.addEventListener("pointermove",b=>{if(!Le)return;let u=b.clientX-Le.x,w=b.clientY-Le.y,G=Re?"orbit":y;if(n.family==="orb")G==="orbit"&&ge.rotate(b.clientX-Le.lx,b.clientY-Le.ly),G==="light"&&(n.sph.light.angle=(Le.l.angle+u*.5+540)%360-180,n.sph.light.height=xt(Le.l.height-w*.35,-30,90),V(),tt("sph.light.angle"),tt("sph.light.height")),G==="zoom"&&Ce(Le.z*Math.exp(-w*.005));else{if(G==="orbit"&&(n.view.yaw=xt(Le.v.yaw-u*.25,-60,60),n.view.pitch=xt(Le.v.pitch+w*.2,-20,35)),G==="light"){let X=c.pose.d||300;n.orb.light.x=xt(Le.ol.x+u/X*1.6,-.6,.6),n.orb.light.y=xt(Le.ol.y-w/X*1.6,-.8,.6),tt("orb.light.x"),tt("orb.light.y")}V()}Le.lx=b.clientX,Le.ly=b.clientY});let $t=1,ot=1/0,ye={want:NaN,shown:NaN};function Ce(b){n.zoom=Qo($t,b,ot).zoom,oe()}let Te=()=>{Le&&(Le=null,qe.classList.remove("grab"),ee(),P())};qe.addEventListener("pointerup",Te),qe.addEventListener("pointercancel",Te),qe.addEventListener("wheel",b=>{n.family==="orb"&&(b.preventDefault(),Ce(n.zoom*Math.exp(-b.deltaY*.0015)),clearTimeout(qe._t),qe._t=setTimeout(ce,300))},{passive:!1}),t.querySelectorAll("[data-zo]").forEach(b=>b.addEventListener("click",()=>{let u=+b.dataset.zo;Ce(u?n.zoom*(u>0?1.25:.8):1),u||ge.resetView(),ce(),a.sfx("press")})),qe.addEventListener("keydown",b=>{let u={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[b.key];if(u){if(b.preventDefault(),n.family==="orb"){y==="light"?(n.sph.light.angle=xt(n.sph.light.angle+u[0]*5,-180,180),n.sph.light.height=xt(n.sph.light.height-u[1]*5,-30,90),V(),Fe(),ee()):y==="zoom"?Ce(n.zoom*(u[1]<0?1.1:u[1]>0?.9:1)):ge.rotate(u[0]*12,u[1]*12);return}y==="orbit"&&(n.view.yaw=xt(n.view.yaw-u[0]*5,-60,60),n.view.pitch=xt(n.view.pitch+u[1]*3,-20,35)),y==="light"&&(n.orb.light.x=xt(n.orb.light.x+u[0]*.05,-.6,.6),n.orb.light.y=xt(n.orb.light.y-u[1]*.05,-.8,.6)),V(),Fe(),ee()}});let Nt=b=>b&&(b.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(b.tagName))&&!(b.type==="range"||b.type==="color");function _t(b){if(!T.hidden){b.key==="Escape"&&La();return}let u=b.metaKey||b.ctrlKey,w=b.key.toLowerCase();if(u&&w==="s"){b.preventDefault(),Ma();return}if(u&&w==="e"){b.preventDefault(),Ut();return}if(!Nt(b.target)){if(u&&w==="z"){b.preventDefault(),Ke(b.shiftKey?1:-1);return}if(u&&w==="y"){b.preventDefault(),Ke(1);return}if(!(u||b.altKey)){if(b.key===" "){Re||(Re=!0,qe.classList.add("t-orbit"),D.style.pointerEvents="none"),(b.target===document.body||qe.contains(b.target))&&b.preventDefault();return}w==="v"?rt("orbit"):w==="l"&&(n.family==="orb"||n.family==="orb-slider")?rt("light"):w==="z"&&n.family==="orb"?rt("zoom"):w==="r"&&(Ce(1),ge.resetView(),n.family!=="orb"&&(n.view={yaw:0,pitch:0,zoom:1},V(),ee()),oe(),ce())}}}function Ot(b){b.key===" "&&(Re=!1,rt(y))}document.addEventListener("keydown",_t),document.addEventListener("keyup",Ot);let ft=t.querySelector("[data-scap]"),yt=null;ft.addEventListener("pointerdown",b=>{b.stopPropagation(),yt={x:b.clientX,v:Se},ft.setPointerCapture(b.pointerId),a.sfx("press")}),ft.addEventListener("pointermove",b=>{yt&&(Se=xt(yt.v+(b.clientX-yt.x)/(ft.offsetWidth-ft.offsetHeight)))});let Gt=()=>{yt&&(yt=null,a.sfx("release"),h.nudge(.5),Se>.92?(Se=1,a.sfx("confirm")):Se=0)};ft.addEventListener("pointerup",Gt),ft.addEventListener("pointercancel",Gt),ft.addEventListener("keydown",b=>{b.key==="ArrowRight"&&(Se=xt(Se+.1)),b.key==="ArrowLeft"&&(Se=xt(Se-.1))});function $e(){let b=t.querySelector("[data-screen]"),u=b.getBoundingClientRect();kt.impact(u.width/2,u.height*(1-.3)+10,n.wave.strength),h.nudge(.8),a.sfx("detent")}t.querySelector("[data-screen]").addEventListener("pointerdown",b=>{if(n.family!=="orb-wave")return;let u=b.currentTarget.getBoundingClientRect();kt.impact(b.clientX-u.left,b.clientY-u.top,n.wave.strength),a.sfx("detent")});function dt(b){let{designId:u,designName:w,zoom:G,...X}=b;return X}async function Et(){try{if(n.family==="orb"&&ge.canvas){let w=ge.canvas,G=Math.min(w.width,w.height),X=document.createElement("canvas");X.width=X.height=240;let Pe=X.getContext("2d");return Pe.fillStyle="#0b0c0c",Pe.fillRect(0,0,240,240),Pe.drawImage(w,(w.width-G)/2,(w.height-G)/2,G,G,0,0,240,240),X.toDataURL("image/jpeg",.8)}let b=jt(),u=await e.exportPNG(b,c.element||document.createElement("div"));if(u){let w=await createImageBitmap(u),G=document.createElement("canvas"),X=360;return G.width=X,G.height=Math.round(X*b.h/b.w),G.getContext("2d").drawImage(w,0,0,G.width,G.height),G.toDataURL("image/jpeg",.78)}}catch{}return null}async function Ma(b=!1){let u=ka(n.family),w=!b&&n.designId||Date.now().toString(36),G=b&&n.designId?`${se()} copy`.slice(0,48):se(),X=await Et();d.saveDesign({id:w,name:G,family:n.family,familyName:u.name,preset:n.preset,schema:1,at:new Date().toISOString(),draft:dt(n),thumb:X})?(n.designId=w,n.designName=G,A=JSON.stringify(dt(n)),ce(),a.sfx("confirm"),i("Saved to My designs (on this device)."),je(),C==="designs"&&Fe()):i("Could not save: this browser\u2019s storage is full or unavailable.")}let Ft=()=>({...n.sph,variant:n.preset}),xa=()=>Tn(Ft(),Da(n.preset));function va(b=Ul){let u=xa(),w=360;return`<div data-light-orb data-variant="${n.preset}"${u==="e30"?"":` data-config="${u}"`} style="width:${w}px;height:${w}px"></div>
<script type="module" src="${b}"><\/script>`}function At(){let b=n.sph.scene,u=b.background==="none"?"#0b0c0c":b.colour;return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${qt(se())} \xB7 The Light Orb</title>
<style>
  html,body{margin:0;height:100%;background:${u}}
  body{display:grid;place-items:center}
  [data-light-orb]{width:min(82vmin,560px)!important;height:min(82vmin,560px)!important}
</style>
</head>
<body>
${va()}
</body>
</html>
`}function ut(){return n.family==="orb"?JSON.stringify({product:"orb",schema:1,name:se(),variant:n.preset,config:Ft(),changed:ao(Da(n.preset),Ft()),embed:{attribute:"data-config",value:xa()}},null,2):JSON.stringify({schema:1,product:n.family,name:se(),config:n[{"orb-slider":"slider","orb-wave":"wave","background-pack":"bg","crystal-controls":"ctl"}[n.family]],scene:n.scene,note:"Configuration for The Light Orb renderer. Development export; not a licensed product package."},null,2)}let Ct="embed",sa=()=>se().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"light-orb";function Ut(){n.family!=="orb"&&(Ct="json"),ya(),T.hidden=!1,a.sfx("open"),T.querySelector("[data-xtab][aria-selected=true]")?.focus()}function La(){T.hidden=!0,a.sfx("close"),qe.focus({preventScroll:!0})}function ya(){let b=n.family==="orb",u=b?[["embed","Embed code"],["html","HTML page"],["json","JSON"]]:[["json","JSON"]],w={embed:[va(),"Paste into any page. The data-config attribute holds your design (only what differs from the version), so it looks and moves exactly like this.",[["copy","Copy code","pri"],["dlsnip","Download snippet"]]],html:[At(),"A complete page with your Orb, ready to open or upload.",[["dlhtml","Download .html","pri"],["copy","Copy"]]],json:[ut(),b?"The full configuration. The embed accepts it as data-config too (plain JSON or base64).":"The configuration of this object.",[["dljson","Download .json","pri"],["copy","Copy"]]]}[Ct];T.innerHTML=`<div class="sx-dlg" role="dialog" aria-modal="true" aria-labelledby="sx-xt">
      <div class="sx-dh"><h2 id="sx-xt">Export \xB7 ${qt(se())}</h2><button class="sx-ib" type="button" data-xclose aria-label="Close">${Rt("close")}</button></div>
      <div class="sx-tabs" role="tablist">${u.map(([X,Pe])=>`<button class="sx-tab" role="tab" type="button" data-xtab="${X}" aria-selected="${X===Ct}">${Pe}</button>`).join("")}</div>
      <div class="sx-db"><p>${w[1]}</p><textarea class="sx-code" readonly spellcheck="false" aria-label="Code">${qt(w[0])}</textarea>
        <div class="sx-acts">${w[2].map(([X,Pe,Ve])=>`<button class="sx-tb${Ve?" "+Ve:""}" type="button" data-xa="${X}">${Pe}</button>`).join("")}${b?'<button class="sx-tb" type="button" data-xa="png">Download PNG</button>':""}</div></div></div>`,T.querySelector("[data-xclose]").addEventListener("click",La),T.onclick=X=>{X.target===T&&La()},T.querySelectorAll("[data-xtab]").forEach(X=>X.addEventListener("click",()=>{Ct=X.dataset.xtab,a.sfx("press"),ya(),T.querySelector(`[data-xtab="${Ct}"]`).focus()}));let G=w[0];T.querySelectorAll("[data-xa]").forEach(X=>X.addEventListener("click",async()=>{let Pe=X.dataset.xa;if(Pe==="copy"){let Ve=!1;try{await navigator.clipboard.writeText(G),Ve=!0}catch{T.querySelector("textarea").select(),Ve=document.execCommand?.("copy")}X.textContent=Ve?"Copied":"Select and copy",a.sfx("confirm"),setTimeout(()=>{X.textContent=Pe==="copy"&&Ct==="embed"?"Copy code":"Copy"},1600)}Pe==="dlsnip"&&wt(new Blob([G],{type:"text/plain"}),`${sa()}-embed.txt`),Pe==="dlhtml"&&wt(new Blob([G],{type:"text/html"}),`${sa()}.html`),Pe==="dljson"&&wt(new Blob([G],{type:"application/json"}),`${sa()}.json`),Pe==="png"&&Jt()}))}async function Jt(){if(n.family==="orb"&&ge.canvas){ge.canvas.toBlob(b=>{b&&(wt(b,`${sa()}.png`),i("Downloaded a PNG of the Orb."))});return}if(c.element){let b=await e.exportPNG(jt(),c.element);b&&wt(b,`${sa()}.png`)}}function wt(b,u){let w=document.createElement("a");w.href=URL.createObjectURL(b),w.download=u,document.body.append(w),w.click(),setTimeout(()=>{URL.revokeObjectURL(w.href),w.remove()},1e3),a.sfx("confirm")}function jt(){let b=qe.getBoundingClientRect();return{x:b.left,y:b.top,w:b.width,h:b.height}}function la(){let b=document.querySelector(".hd"),u=b?Math.round(b.getBoundingClientRect().bottom):72;ne._hh!==u&&(ne._hh=u,ne.style.setProperty("--sx-top",`${Math.max(0,u)}px`));let w=jt(),G=n.family,X=w.x+w.w/2,Pe=t.querySelector("[data-screen]"),Ve=t.querySelector("[data-scap]"),gt=t.querySelector("[data-kit]"),Bt=innerHeight,da={warm:0,room:"chamber",stage:w,emission:1,orb:{x:50,y:Bt-52,d:46,vis:0}},bt=Be=>({...da,product:Be,grounds:Be&&Be.ground?[{y:Be.ground,x:Be.x,d:Be.d}]:[]});if(G==="orb"){let Be=Math.min(w.w-48,w.h-48)*.74,ct=xo=>{let Ta=xo?.getBoundingClientRect();return Ta&&Ta.width>0&&Ta.height>0?{l:Ta.left,t:Ta.top,r:Ta.right,b:Ta.bottom}:null},ht=[Ie,t.querySelector("[data-zoombar]"),B,j,f,le].map(ct).filter(Boolean),Ee=Yl({l:w.x,t:w.y,r:w.x+w.w,b:w.y+w.h},ht,innerWidth<=820?16:24,Wl(n.sph.scene.size)),Ye=w.w>80&&w.h>80,Ht=Ye?Gl(ye,n.zoom,Be,Ee):Qo(Be,n.zoom,Ee);Ye&&($t=Be,ot=Ee,Ht.zoom!==n.zoom&&(n.zoom=Ht.zoom,oe()));let ca=Math.floor(Ht.size);if(D._s!==ca&&(D._s=ca,D.style.width=D.style.height=`${ca}px`),ge.setSpeech(a.playing?a.energy():0),!p())return bt(null);let gr=performance.now()/1e3,bo=Me?Math.min(.05,gr-Me):0;Me=gr,Le||(me+=(n.sph.motion.spin??0)*Math.PI*2*bo*.25,h.setObjectYaw(me));let ja=D.getBoundingClientRect();return bt({x:ja.left+ja.width/2,y:ja.top+ja.height/2,d:ja.width*.9*(n.sph.scene.size??1),vis:1,snap:!0})}if(G==="orb-slider"){let Be=n.slider,ct=Math.min(1,(w.w-40)/Be.length),ht=Be.length*ct,Ee=Be.height*ct;Object.assign(Ve.style,{left:`${X-ht/2}px`,top:`${w.y+w.h*.5-Ee/2}px`,width:`${ht}px`,height:`${Ee}px`});let Ye=Ee*.84,Ht=(Ee-Ye)/2;return bt({x:X-ht/2+Ht+Ye/2+Se*(ht-Ee),y:w.y+w.h*.5,d:Ye,vis:1,snap:!0})}if(G==="orb-wave"||G==="background-pack"){let Be=Math.min(w.w*.86,900),ct=Math.min(w.h*.72,Be*.62);Object.assign(Pe.style,{left:`${X-Be/2}px`,top:`${w.y+w.h*.5-ct/2}px`,width:`${Be}px`,height:`${ct}px`});let ht=G==="background-pack"?n.bg.horizon:.3,Ee=Math.min(90,Be*.12),Ye=ct*(1-ht)+Ee*.1-Ee/2;return kt.setOrb({x:Be/2,y:Ye,d:Ee}),bt({x:X,y:w.y+w.h*.5-ct/2+Ye,d:Ee,vis:1})}return G==="crystal-controls"&&Object.assign(gt.style,{left:`${w.x+20}px`,top:`${w.y+20}px`,width:`${w.w-40}px`,height:`${w.h-40}px`}),bt(null)}return ae(),{frame:la,reapply:()=>V(),voiceResponse:()=>n.family==="orb"?xt(n.sph.motion.speech*.6):.6,leave(){N(),x(),document.removeEventListener("keydown",_t),document.removeEventListener("keyup",Ot),ge.dispose(),kr(),e.removeBackdrop(kt.canvas),document.body.classList.remove("dark-ui","sx-on"),c.hide(),Object.assign(e.chamber,{yaw:0,pitch:0})},get draft(){return n}}}function pr(e,a){let o=parseInt(e.slice(1),16);return`rgba(${o>>16&255},${o>>8&255},${o&255},${a.toFixed(3)})`}function Vn(e){let a=null,o=null,t=null,s={},g={emission:1},i=document.createElement("div");i.className="x-product",i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:31",document.body.append(i);let c={x:-999,y:-999,d:100,vis:0},d={x:-999,y:-999,d:100,vis:0,vx:0,vy:0,vd:0},h=!0,p=!1,m=A=>{A.persisted||F()};addEventListener("pagehide",m);function F(){p||(p=!0,h=!0,removeEventListener("pagehide",m),a?.dispose(),a=null,t=null,s={},i.remove())}function Q(){return p||a||o||(o=ji({container:i,diameter:240,driven:!0,background:ua().orbBackground}).then(A=>{if(p){A.dispose(),o=null;return}return a=A,o=null,A.attachPointer(document.createElement("div"))(),A.setBackdrop((O,W)=>e.drawBackdrop(O,W,d)),A.setVisibility(0),A.tick(performance.now()),t&&n(),A}).catch(()=>{o=null})),o}function n(){a&&t&&(g=_r(a,t,s),a.setEmission(Math.min(1.4,g.emission)))}return{dispose:F,get orb(){return a},get element(){return a?.element},get output(){return g},show(A,O={}){p||(t=Wt(A),s=O,h=!1,Q(),n())},update(A,O=s){p||(t=Wt(A),s=O,n())},reapply(){p||n()},hide(){h=!0,a&&(a.setVisibility(0),a.setView({yaw:0,pitch:0}),a.setObjectYaw(0),a.setSpeech(0),a.tick(performance.now())),d.vis=0,d.x=-999},attachPointer(A){return a?a.attachPointer(A,{range:"volume"}):(Q()?.then(O=>O?.attachPointer(A,{range:"volume"})),null)},frame(A){if(!a)return;if(!A||h){(d.vis>0||a.element.style.visibility!=="hidden")&&(d.vis=0,a.setVisibility(0),a.tick(performance.now()));return}let O=1/60,W=9;if(A.snap||d.x<-900)Object.assign(d,{x:A.x,y:A.y,d:A.d,vx:0,vy:0,vd:0});else for(let $ of["x","y","d"]){let q="v"+$;d[q]+=(W*W*(A[$]-d[$])-2*W*d[q])*O,d[$]+=d[q]*O}d.vis+=((A.vis??1)-d.vis)*.2,a.holdRaster(Math.ceil(Math.max(d.d,A.d,120)*1.06)),a.setPose({x:d.x,y:d.y,diameter:d.d}),a.setVisibility(d.vis),a.tick(performance.now())},pose:d}}var Zo=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null,ti=!!Zo;function Yn({onresult:e,onend:a,onerror:o,lang:t}){if(!Zo)return o?.("unsupported"),null;let s=new Zo;s.lang=t||navigator.language||"en-US",s.interimResults=!0,s.maxAlternatives=1,s.continuous=!1;let g="",i="";s.onresult=c=>{i=[...c.results].map(d=>d[0].transcript).join(" "),c.results[c.results.length-1].isFinal&&(g=i),e?.(i,!!g)},s.onerror=c=>o?.(c.error),s.onend=()=>a?.(g||i);try{s.start()}catch{return o?.("busy"),null}return s}var ei=e=>String(e).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),$a=(e,...a)=>a.some(o=>new RegExp(`\\b${o}\\b`).test(e)),rd={home:["home","start","beginning","inicio","principio","portada"],products:[...ar[0].words,"productos","producto","tienda","objetos"],templates:[...ar[1].words,"plantillas","plantilla","composiciones"],studio:[...ar[2].words,"estudio","editar","personalizar","disenar"],sound:[...ar[3].words,"sonido","sonidos","voces","escuchar","audio"],membership:["membership","member","plans","plan","pricing","price","prices","membresia","miembro","planes","precio","precios","cuesta","cost"],account:["account","profile","downloads","cuenta","perfil","descargas"],signin:["sign in","log in","login","iniciar sesion","entrar"]},od={home:"#/",membership:"#/membership",account:"#/account",signin:"#/signin"},id={"orb-slider":["slider","deslizador"],"orb-wave":["wave","ola","onda","ripple"],"background-pack":["background","backgrounds","fondo","fondos"],"crystal-controls":["controls","buttons","controles","botones","crystal"]},ia=(e,a={})=>({say:e.text,id:e.id,lang:e.lang??"en",...a}),nd=/\b(hola|gracias|buenas|ayuda|ayudame|quien|que|como|donde|cual|quiero|puedes|llevame|ensename|muestrame|recomiendas|recomienda|textura|texturas|materiales|precio|cuanto|plantillas|productos|sonido|estudio|por favor|si|vale|el|la|los|las|una|para|con|del|mi|me)\b/g,sd=/\b(hello|hi|hey|thanks|thank|help|who|what|which|how|where|want|can|could|show|take|recommend|texture|textures|materials|price|the|a|an|is|are|you|me|my|please|yes|for|with|of)\b/g;function oo(e,a="en"){if(/[ñ¿¡]/i.test(String(e)))return"es";let o=ei(e),t=o.match(nd)?.length??0,s=o.match(sd)?.length??0;return t>s?"es":s>t?"en":a}function Gn(e,{here:a,presentation:o,lang:t="en"}){let s=ei(e),g=oo(e,t),i=d=>or(d,g);if(!s)return ia(i("reply.missed"),{intent:"fallback"});if(s.split(" ").length<=3&&$a(s,"stop","quiet","silence","shh","para","calla","callate","silencio","basta"))return{say:"",stop:!0,command:!0};if($a(s,"where am i","where are we","donde estoy","donde estamos","que es esto","what is this","what is here","que hay aqui"))return ia(o(g),{intent:"where"});if($a(s,"help","what can you do","what can i do","ayuda","ayudame","que puedes hacer","que puedo hacer"))return ia(i("reply.help"),{intent:"help"});if($a(s,"thank you","thanks","gracias"))return ia(i("reply.thanks"),{intent:"thanks"});if($a(s,"who are you","what are you","quien eres","que eres","como te llamas","your name"))return ia(i("reply.who"),{intent:"who"});if($a(s,"back","go back","atras","volver","vuelve"))return ia(i("reply.back"),{back:!0,command:!0});for(let[d,h]of Object.entries(id))if($a(s,...h)){let p=ra.find(m=>m.id===d&&m.published!==!1);if(p)return ia(an(p),{go:`#/products/${d}`,quiet:!0,command:!0})}let c=zt.find(d=>s.includes(ei(d.name)));if(c)return ia(rn(c),{go:`#/templates/${c.id}`,quiet:!0,command:!0});for(let[d,h]of Object.entries(rd))if($a(s,...h)){if(d===a){let p=o(g);return ia(g==="es"?{text:`Ya estamos aqu\xED. ${p.text}`,lang:"es"}:tn(p),{command:!0})}return{go:od[d]??`#/${d}`,command:!0}}return s.split(" ").length<=5&&$a(s,"hello","hi","hey","hola","buenas","buenos dias","buenas tardes","buenas noches","good morning","good evening")?ia(i("reply.intro"),{intent:"hello"}):$a(s,"the orb","orb","esfera","la orb","bola")?ia(g==="es"?{text:"Aqu\xED est\xE1 la Orb. Prueba sus veinte versiones.",lang:"es"}:on(),{go:`#/products/${ra[0].id}`,quiet:!0}):ia(i("reply.unknown"),{intent:"fallback"})}var Un=()=>!!Rr,ld=/^#\/(products(\/[a-z0-9-]+(\?variant=[a-z0-9-]+)?)?|templates(\/[a-z0-9-]+)?|studio|sound|membership|account|licence)?$/;async function Kn(e,a,{timeout:o=8e3}={}){if(!Rr)throw new Error("disabled");let t=new AbortController,s=setTimeout(()=>t.abort(),o);try{let g=await fetch(Rr,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({messages:e,page:a}),signal:t.signal});if(!g.ok)throw new Error(`http ${g.status}`);let i=await g.json(),c=typeof i.say=="string"?i.say.trim().slice(0,600):"";if(!c)throw new Error("empty");return{say:c,go:typeof i.go=="string"&&ld.test(i.go)?i.go:void 0}}finally{clearTimeout(s)}}var Xn={},Jn={member:""},Qn="",Zn=e=>"",ai=e=>(location.assign(e),!0),ma={get enabled(){return!1},canCheckout:e=>!!e.length&&e.every(a=>Zn(a.id)),canSubscribe:e=>!!!1,canRestore:()=>!!!1,checkout(e){return ma.canCheckout(e)?(ai(Zn(e[0].id)),e[0].id):null},subscribe(e){return ma.canSubscribe(e)?ai(Jn[e]):!1},restore(){return ma.canRestore()?ai(Qn):!1}};var Yt={saved:"lightorb:saved",designs:"lightorb:designs",profile:"lightorb:profile"},Ca=(e,a)=>{try{return JSON.parse(localStorage.getItem(e))??a}catch{return a}},Mr=(e,a)=>{try{return localStorage.setItem(e,JSON.stringify(a)),!0}catch{return!1}},vt={saved:()=>Ca(Yt.saved,[]),isSaved:(e,a)=>Ca(Yt.saved,[]).some(o=>o.type===e&&o.id===a),toggleSaved(e,a,o,t){let s=Ca(Yt.saved,[]),g=s.findIndex(i=>i.type===e&&i.id===a);return g>=0?s.splice(g,1):s.unshift({type:e,id:a,name:o,href:t,at:new Date().toISOString()}),Mr(Yt.saved,s),g<0},designs:()=>Ca(Yt.designs,[]),design:e=>Ca(Yt.designs,[]).find(a=>a.id===e),saveDesign(e){let a=Ca(Yt.designs,[]),o=a.findIndex(t=>t.id===e.id);return o>=0?a[o]=e:a.unshift(e),Mr(Yt.designs,a.slice(0,40))},renameDesign(e,a){let o=Ca(Yt.designs,[]),t=o.find(s=>s.id===e);t&&(t.name=a,Mr(Yt.designs,o))},deleteDesign(e){Mr(Yt.designs,Ca(Yt.designs,[]).filter(a=>a.id!==e))},profile:()=>Ca(Yt.profile,null),setProfile:e=>Mr(Yt.profile,e)},es=[["profile","Profile"],["designs","My Designs"],["saved","Saved"],["downloads","Downloads"]],dd='<p class="note">Your designs and saved items are kept in this browser. Accounts that sync across devices come later; your early-access email will carry over.</p>';function Ka(e,a,o="profile"){let{esc:t,audio:s}=a;es.some(c=>c[0]===o)||(o="profile");let g=vt.profile();e.innerHTML=`
    <section class="dest acct">
      <header class="dh"><p class="kicker">Account${g?.email?" \xB7 Early access":""}</p><h1>${g?.name?t(g.name):"Your space"}</h1>${dd}</header>
      <nav class="segbar acct-tabs" aria-label="Account">${es.map(([c,d])=>`<a class="pill" href="#/account/${c}" ${c===o?'aria-current="page" aria-pressed="true"':""}>${d}</a>`).join("")}</nav>
      <div class="acct-body" data-body></div>
      ${xr()}
    </section>${a.footer()}`;let i=e.querySelector("[data-body]");if(o==="profile"){let c=g?.email;i.innerHTML=`${c?"":`<div class="joincta glass"><h2>Join early access</h2><p>Free. Leave your email and we tell you when new pieces and Studio updates open. Your designs stay on this device either way.</p>
        <div class="acts eq"><a class="gb small primary" href="#/signup">Join early access</a><a class="gb small" href="#/signin">I already joined</a></div></div>`}
      <form class="form" data-prof>
        <label class="fl"><span>Display name</span><input class="gi" name="name" value="${t(g?.name||"")}" placeholder="How the site greets you" maxlength="40" autocomplete="name"></label>
        <div class="acts"><button class="gb primary" type="submit">Save on this device</button>${g?'<button class="gb" type="button" data-forget>Sign out on this device</button>':""}</div>
        <p class="note" data-profmsg role="status" aria-live="polite"></p>
      </form>
      <div class="kv"><span>Email</span><b>${c?t(g.email):"Not joined yet"}</b>${g?.joined?`<span>Joined</span><b>${new Date(g.joined).toLocaleDateString()}</b>`:""}<span>Plan</span><b>${"Early access \xB7 free"}</b><span>Sound</span><b>${s.prefs.master?"On":"Off"}</b><span>Narration</span><b>${s.prefs.guide?"On":"Off"}</b><span>Guide voice</span><b><a href="#/sound">${t(Sa(s.prefs.voice).name)}</a></b></div>`,i.querySelector("[data-prof]").addEventListener("submit",d=>{d.preventDefault();let h=d.target.name.value.trim(),p={...vt.profile()??{},name:h};h||delete p.name,vt.setProfile(Object.keys(p).length?p:null),s.sfx("confirm"),Ka(e,a,"profile"),e.querySelector("[data-profmsg]").textContent="Saved on this device."}),i.querySelector("[data-prof] .gi").addEventListener("input",d=>{d.isTrusted&&s.sfx("type")}),i.querySelector("[data-forget]")?.addEventListener("click",()=>{if(confirm("Forget your name and email on this browser? Your designs and saved items stay.")){try{localStorage.removeItem(Yt.profile)}catch{}Ka(e,a,"profile")}})}if(o==="designs"){let c=vt.designs();i.innerHTML=c.length?`<div class="dgrid">${c.map(d=>`<article class="dc" data-d="${d.id}">
        <a class="dc-img" href="#/studio?design=${d.id}" aria-label="Open ${t(d.name)} in Studio">${d.thumb?`<img src="${d.thumb}" alt="">`:""}</a>
        <input class="dc-n gi" value="${t(d.name)}" aria-label="Design name" maxlength="48">
        <p class="note">${t(d.familyName)} \xB7 ${new Date(d.at).toLocaleDateString()}</p>
        <div class="acts"><a class="gb small primary" href="#/studio?design=${d.id}">Open in Studio</a><button class="gb small" type="button" data-dup>Duplicate</button><button class="gb small" type="button" data-del>Delete</button></div></article>`).join("")}</div>`:'<div class="empty"><h2>No designs yet</h2><p>Designs you save in Studio appear here, with a picture of each one.</p><a class="gb primary" href="#/studio">Open Studio</a></div>',i.querySelectorAll("[data-d]").forEach(d=>{let h=d.dataset.d,p=d.querySelector(".dc-n");p.addEventListener("change",()=>{vt.renameDesign(h,p.value.trim()||"Untitled design"),s.sfx("confirm")}),p.addEventListener("input",m=>{m.isTrusted&&s.sfx("type")}),d.querySelector("[data-dup]").addEventListener("click",()=>{let m=vt.designs().find(Q=>Q.id===h);if(!m)return;if(vt.designs().length>=40){let Q=d.querySelector("[data-dup]");Q.textContent="Limit of 40 \u2014 delete one first",Q.disabled=!0;return}let F={...structuredClone(m),id:Date.now().toString(36),name:`${m.name} copy`.slice(0,48),at:new Date().toISOString()};vt.saveDesign(F)&&(s.sfx("confirm"),Ka(e,a,"designs"))}),d.querySelector("[data-del]").addEventListener("click",()=>{confirm(`Delete \u201C${p.value}\u201D? This cannot be undone.`)&&(vt.deleteDesign(h),s.sfx("close"),Ka(e,a,"designs"))})})}if(o==="saved"){let c=vt.saved();i.innerHTML=c.length?`<ul class="slist">${c.map((d,h)=>`<li><span class="kicker">${d.type}</span><a href="${d.href}">${t(d.name)}</a><button class="pill" type="button" data-rm="${h}">Remove</button></li>`).join("")}</ul>`:'<div class="empty"><h2>Nothing saved yet</h2><p>Save products, templates and sounds to find them here.</p><a class="gb primary" href="#/products">Explore products</a></div>',i.querySelectorAll("[data-rm]").forEach(d=>d.addEventListener("click",()=>{let h=c[+d.dataset.rm];vt.toggleSaved(h.type,h.id),s.sfx("close"),Ka(e,a,"saved")}))}o==="downloads"&&(i.innerHTML=Kt?'<div class="empty"><h2>Nothing to buy right now</h2><p>During early access there is nothing to buy: explore every piece, request a piece\u2019s source code from its page, and export your own versions from Studio \u2014 exports save directly to your computer.</p><div class="acts eq"><a class="gb primary" href="#/products/orb">Get The Orb</a><a class="gb" href="#/studio">Open Studio</a></div></div>':'<div class="empty"><h2>Everything is free right now</h2><p>During early access there is nothing to buy: take The Orb with its embed code from its product page, and export your own versions from Studio \u2014 exports save directly to your computer.</p><div class="acts eq"><a class="gb primary" href="#/products/orb">Get The Orb</a><a class="gb" href="#/studio">Open Studio</a></div></div>',i.querySelector("[data-restore]")?.addEventListener("click",()=>ma.restore()))}function ri(e,a,o){let t=o==="up",s=vt.profile();e.innerHTML=`
    <section class="dest sign">
      <header class="dh"><p class="kicker">Early access \xB7 free</p><h1>${t?"Join early access":"Welcome back"}</h1>
        <p class="dh-l">${t?"Everything is free while we build it. Leave your email and we write when new pieces and Studio updates open. Your designs are saved on this device.":"There are no passwords yet. Enter the email you joined with to use it on this device; your designs from another browser stay there until accounts sync."}</p></header>
      ${s?.email?`<div class="joined glass"><p class="kicker">Already in</p><h2>You joined as ${a.esc(s.email)}</h2><div class="acts eq"><a class="gb small primary" href="#/studio">Open Studio</a><a class="gb small" href="#/account">Your account</a></div></div>`:""}
      <form class="form" data-sign novalidate${s?.email?" hidden":""}>
        ${t?'<label class="fl"><span>Name <i class="opt">(optional)</i></span><input class="gi" name="name" autocomplete="name" maxlength="40" placeholder="How the site greets you"></label>':""}
        <label class="fl"><span>Email</span><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"></label>
        <div class="acts"><button class="gb primary" type="submit"><span>${t?"Join early access":"Continue"}</span></button><a class="gb" href="#/studio">Open Studio without joining</a></div>
        <p class="note" data-signmsg role="status" aria-live="polite">We only keep your email${t?" and name":""} to tell you about new pieces and Studio updates. See <a href="#/privacy">privacy</a>; leave any time.</p>
        <p class="note">${t?'Already joined? <a href="#/signin">Use your email here</a>':'New here? <a href="#/signup">Join early access</a>'}</p>
      </form>
      ${xr()}
    </section>${a.footer()}`;let g=e.querySelector("[data-sign]");g.addEventListener("submit",async i=>{i.preventDefault();let c=g.querySelector("[data-signmsg]"),d=g.querySelector("button[type=submit]"),h=g.email.value.trim();if(!ha(h)){c.textContent="Please enter a valid email address.",g.email.focus();return}d.disabled=!0,d.setAttribute("aria-busy","true");let p=await Ro({email:h,name:g.name?.value,source:"signup"});if(!p.ok){c.textContent=p.error,d.disabled=!1,d.removeAttribute("aria-busy");return}a.audio.sfx("confirm");let m=document.createElement("div");m.innerHTML=Po(h);let F=m.firstElementChild;g.replaceWith(F),F.focus({preventScroll:!0})})}function ts(e,a){let o=Hi,t=vt.profile(),s=o.plans.map(g=>`<article class="plan soon"><p class="kicker">After launch \xB7 preview</p><h2>${g.name}</h2><p>${g.line}</p><ul>${g.points.map(i=>`<li>${i}</li>`).join("")}</ul></article>`).join("");e.innerHTML=`
    <section class="dest memb">
      ${Kt?'<header class="dh"><p class="kicker">Membership</p><h1>Free to explore, while it takes shape</h1><p class="dh-l">Studio and the pieces are open to try while The Light Orb is being built. Source code is available on request, piece by piece. Membership is not open yet.</p></header>':'<header class="dh"><p class="kicker">Membership</p><h1>Early access is free</h1><p class="dh-l">Everything is open while we build it: Studio, The Orb with its embed code, and each piece as it arrives. What you take now stays free to use. Paid plans come later.</p></header>'}
      <div class="memb-sl glass">${Kr()}</div>
      ${Kt?`<article class="plan em now"><p class="kicker">Current plan</p><h2>Early access</h2><p>Everything on the site is open to explore, for everyone.</p>
        <ul><li>Studio: shape light, material and movement; save and export your designs</li><li>The Orb in twenty versions</li><li>New pieces as they open</li><li>Source code on request, piece by piece</li></ul>`:`<article class="plan em now"><p class="kicker">Current plan</p><h2>Early access \u2014 free</h2><p>Everything on the site, for everyone.</p>
        <ul><li>Studio: shape light, material and movement; save and export your designs</li><li>The Orb in twenty versions, with its embed code</li><li>New pieces as they open, free while in early access</li></ul>`}
        <div class="acts eq">${t?.email?'<span class="pill" aria-disabled="true">You\u2019re in</span>':'<a class="gb primary" href="#/signup">Join early access</a>'}<a class="gb" href="#/studio">Open Studio</a></div></article>
      <h2 class="plans-h">Plans after launch</h2><p class="note plans-n">A preview of how The Light Orb will work after early access. Prices are not set yet.</p>
      <div class="plans">${s}</div>
      ${xr()}
    </section>${a.footer()}`,e.querySelectorAll("[data-join]").forEach(g=>g.addEventListener("click",()=>ma.subscribe(g.dataset.join))),Xr(e,{sfx:g=>a.audio?.sfx?.(g)})}var cd=`<svg class="wm-o" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><defs><mask id="wm-counter"><rect width="100" height="100" fill="#fff"/>
  <path fill="#000" d="M49 9C31 9 23 29 23 50c0 24 12 42 30 42 15 0 23-9 23-20 0-9-7-12-11-21-4-9-2-19 0-27 1-9-5-15-16-15z"/></mask></defs>
  <circle cx="50" cy="50" r="46" fill="currentColor" mask="url(#wm-counter)"/></svg>`,oi=`<span class="wm-t">The Light</span>${cd}<span class="wm-t wm-rb">rb</span>`;var rs="lightorb:cart",no=()=>{try{return JSON.parse(localStorage.getItem(rs))??[]}catch{return[]}},as=e=>{try{localStorage.setItem(rs,JSON.stringify(e))}catch{}ii.forEach(a=>a(e))},ii=new Set,ea={items:no,has:e=>no().some(a=>a.id===e),add(e){let a=no();a.some(o=>o.id===e.id)||(a.push({...e,at:new Date().toISOString()}),as(a))},remove(e){as(no().filter(a=>a.id!==e))},toggle(e){return ea.has(e.id)?(ea.remove(e.id),!1):(ea.add(e),!0)},on(e){return ii.add(e),()=>ii.delete(e)}};var Lr="Carla Tres Garc\xEDa",os="39934017Z",is="trescarla@gmail.com",pd="26 October 2026",ns="Avenida Duque de Loul\xE9 91, Lisboa, Portugal",Fa=`<a href="mailto:${is}">${is}</a>`,ud={privacy:{kicker:"Privacy",title:"Privacy",lede:"What this site collects, why, and what you can ask for. Short version: very little, and nothing is sold.",body:`
    <h2>Who is responsible</h2>
    <p>The Light Orb is run by ${Lr} (NIF ${os}), a sole trader (the data controller). Address: ${ns}. Contact: ${Fa}.</p>
    <h2>Visiting the site</h2>
    <p>We count visits with GoatCounter, a privacy-friendly analytics service that sets no cookies and does not track you across sites. It records the page address, referrer, browser type, screen size and an approximate country, without storing your IP address. If your browser sends Do Not Track or Global Privacy Control, nothing is counted at all. Legal basis: our legitimate interest in knowing which pages are used.</p>
    <h2>Early access and the waitlist</h2>
    <p>If you join early access (or the waitlist) we keep your email address, the name you give if any, the date, where you signed up (for example "footer") and your browser language \u2014 nothing else. It is stored in Cloudflare Workers KV, the owner receives one notification email about each new sign-up (sent through Resend), and it is used only to tell you when pieces and Studio updates open. Your display name, designs and saved items stay in your browser. Legal basis: your consent, which you can withdraw at any time by writing to ${Fa}; we then delete your address.</p>
    <h2>Web design inquiries</h2>
    <p>If you send a project through the Web Design form, what you write (your name, email, project details and any optional answers) and the time of sending are delivered as one email to ${Lr}, sent through Resend from our Cloudflare Worker. It is used only to reply to you and discuss your project; it is not added to any mailing list. The Worker does not store the message itself, only a random submission code for one day so the same message is not sent twice. Legal basis: steps you ask us to take before a possible contract. You can ask for the email to be deleted at any time by writing to ${Fa}.</p>
    <h2>Requesting code</h2>
    <p>If you use Request Code on a product we keep your name, email, the product and version you asked about, what you wrote about its use (if anything), your browser language and the time. It is stored in Cloudflare Workers KV before anything else happens, so the request is not lost if an email fails, and it is sent as one email to ${Lr} through Resend. It is used only to answer that request; it is not added to any mailing list. Legal basis: steps you ask us to take before a possible agreement. It is kept no longer than two years, or less if you ask us to delete it by writing to ${Fa}.</p>
    <h2>Studio Membership list</h2>
    <p>If you join the Studio Membership list we keep your email address, the date, your browser language, the version of the consent you ticked and a random code that lets you leave. It is kept apart from every other list and used only to email you when Studio Membership opens. You receive a confirmation email (sent through Resend) with a link to leave; leaving removes your address from this list only. Legal basis: your consent, which you can withdraw at any time through that link or by writing to ${Fa}. It is kept until Studio Membership opens and the announcement is sent, and no longer than two years.</p>
    <h2>Talking with the Orb</h2>
    <p>When you ask the guide Orb a question, the text of the conversation and the page you are on are sent through our Cloudflare Worker to Anthropic, which generates the reply. We do not store or log these conversations. Anthropic processes them as our service provider under its own commercial terms. Please do not share personal information in the conversation.</p>
    <h2>Voice</h2>
    <p>Speech recognition and speech synthesis are done by your browser. Depending on your browser, the recognised audio may be processed by its maker (for example Google or Apple). We never receive or keep your voice.</p>
    <h2>Bloom microphone</h2>
    <p>Bloom can react to sound from your microphone after you turn it on and allow browser access. The sound is analysed locally in your browser, without recording, storage or upload. Input stops when you turn it off, switch away from Bloom, leave the product or hide the page.</p>
    <h2>Stored on your device</h2>
    <p>The site uses your browser's local storage to remember your preferences (sound, voice), saved items, your display name and your designs, plus short-lived session storage for scroll position. This stays on your device; we cannot see it. You can clear it from your browser settings.</p>
    <h2>Providers and transfers</h2>
    <p>GitHub (site hosting), Cloudflare (Worker and waitlist storage), Resend (sign-up notifications, code requests and web design inquiries emailed to the owner, and the Studio Membership confirmation emailed to you), GoatCounter (visit counts) and Anthropic (Orb replies). Some of them are based in the United States; transfers rely on the EU\u2013US Data Privacy Framework or standard contractual clauses.</p>
    <h2>How long</h2>
    <p>Waitlist emails are kept until the pieces open and the announcement is sent, or until you ask us to delete them, and in any case no longer than two years. Visit counts are aggregated.</p>
    <h2>Your rights</h2>
    <p>Under the GDPR you can ask for access, correction, deletion, restriction, portability, or object to processing, and withdraw consent, by writing to ${Fa}. You can also complain to the Spanish Data Protection Agency (AEPD, aepd.es).</p>`},terms:{kicker:"Terms",title:"Terms of use",lede:"The rules for using this website.",body:`
    <h2>Who we are</h2>
    <p>This website is run by ${Lr} (NIF ${os}), a sole trader. Address: ${ns}. Contact: ${Fa}.</p>
    <h2>Using the site</h2>
    <p>You may browse the site, try the previews, and use Studio and the guide Orb for your own personal or professional exploration. Please do not misuse it: no attempts to break, overload or scrape it, and no unlawful or abusive use of the guide Orb.</p>
    <h2>The guide Orb</h2>
    <p>The Orb's replies are generated automatically and may be incomplete or wrong. They are not professional advice and do not bind us; prices and terms are only those shown on the site.</p>
    <h2>Content and pieces</h2>
    <p>The design, text, images, sounds and code of this site belong to ${Lr} unless stated otherwise. Using the free Orb and any piece you obtain is governed by the <a href="#/licence">licence</a>.</p>
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
    <p>Code is provided as it is. Questions about a use not covered here: ${Fa}.</p>`}},ss={privacy:"Privacy",terms:"Terms of use",licence:"Licence"};function so(e,a,o){let t=ud[o];e.innerHTML=`
    <section class="dest legal">
      <header class="dh"><p class="kicker">${t.kicker}</p><h1>${t.title}</h1><p class="dh-l">${t.lede}</p></header>
      <div class="legal-b">${t.body}
        <p class="note">Last updated ${pd}. <a href="#/privacy">Privacy</a> \xB7 <a href="#/terms">Terms</a> \xB7 <a href="#/licence">Licence</a></p></div>
    </section>${a.footer()}`}var Tr=[{id:"clear",name:"Clear",line:"Thick clear glass with a bright lower rim, for light pages.",dark:!1,v:{page:"#F3F3F1",ink:"#262827",muted:"#6b6f6c",line:"rgba(38,40,39,.07)",body:"linear-gradient(180deg,rgba(255,255,255,.96),rgba(246,247,246,.72) 52%,rgba(226,230,228,.78))",edge:"#ffffff",depth:"rgba(130,142,138,.5)",shadow:"rgba(38,40,39,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(176,212,228,.6)",tint:"linear-gradient(180deg,#43484a,#1f2322 60%,#2c302f)",tintInk:"#f4f5f3",fill:"#2a2e2d",well:"linear-gradient(180deg,rgba(214,218,216,.7),rgba(246,247,246,.9))",orb:"radial-gradient(circle at 50% 62%,rgba(214,232,240,.55),rgba(255,255,255,.22) 58%,rgba(186,200,206,.65))",squish:"1"}},{id:"smoke",name:"Smoke",line:"Smoked glass that darkens to the rim, for dark pages.",dark:!0,v:{page:"#141716",ink:"#ECEEEB",muted:"#9DA29F",line:"rgba(255,255,255,.08)",body:"linear-gradient(180deg,rgba(255,255,255,.17),rgba(255,255,255,.05) 50%,rgba(0,0,0,.22))",edge:"rgba(255,255,255,.38)",depth:"rgba(0,0,0,.6)",shadow:"rgba(0,0,0,.75)",spec:"rgba(255,255,255,.4)",caustic:"rgba(150,186,200,.4)",tint:"linear-gradient(180deg,#fbfbfa,#d6d9d6)",tintInk:"#161918",fill:"#e7e9e6",well:"linear-gradient(180deg,rgba(0,0,0,.45),rgba(255,255,255,.04))",orb:"radial-gradient(circle at 50% 62%,rgba(120,130,136,.55),rgba(40,44,46,.35) 58%,rgba(10,12,12,.75))",squish:"1"}},{id:"chrome",name:"Chrome",line:"Liquid chrome that folds the room it reflects.",dark:!1,v:{page:"#E2E4E3",ink:"#1c1e1d",muted:"#5d6260",line:"rgba(0,0,0,.1)",body:"linear-gradient(180deg,#ffffff 0%,#c3c8c7 24%,#f5f6f6 46%,#8f9594 72%,#e4e7e6 100%)",edge:"#ffffff",depth:"rgba(60,66,64,.6)",shadow:"rgba(30,34,33,.42)",spec:"rgba(255,255,255,1)",caustic:"rgba(255,255,255,.7)",tint:"linear-gradient(180deg,#6c7271 0%,#1d201f 48%,#4a4f4e 100%)",tintInk:"#f3f4f3",fill:"#3a3f3e",well:"linear-gradient(180deg,#a9aeac,#eef0ef)",orb:"conic-gradient(from 210deg,#fdfdfd,#8e9493,#f2f3f3,#5d6362,#e9ebea,#a3a8a7,#fdfdfd)",squish:"1"}},{id:"porcelain",name:"Porcelain",line:"Opaque glazed porcelain with a warm greige accent.",dark:!1,v:{page:"#EFEDE8",ink:"#2e2c29",muted:"#6e6a63",line:"rgba(60,50,40,.08)",body:"linear-gradient(180deg,#fffefb,#f4f1eb 58%,#e5e0d6)",edge:"#ffffff",depth:"rgba(170,158,140,.45)",shadow:"rgba(80,68,52,.26)",spec:"rgba(255,255,255,.9)",caustic:"rgba(207,200,189,.55)",tint:"linear-gradient(180deg,#ddd6ca,#bdb3a3)",tintInk:"#2e2c29",fill:"#bfb5a5",well:"linear-gradient(180deg,#e2ddd3,#faf8f4)",orb:"radial-gradient(circle at 50% 60%,#fbf9f5,#ece7de 60%,#d2cabc)",squish:"1"}},{id:"gel",name:"Gel",line:"Soft sea-glass gel that gives a little when you press it.",dark:!1,v:{page:"#E8EEEC",ink:"#1f302b",muted:"#5b6f69",line:"rgba(30,70,60,.08)",body:"linear-gradient(180deg,rgba(244,252,249,.94),rgba(198,228,218,.62) 56%,rgba(156,200,186,.7))",edge:"rgba(255,255,255,.95)",depth:"rgba(70,124,108,.5)",shadow:"rgba(30,70,60,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(130,226,196,.65)",tint:"linear-gradient(180deg,#a6dccb,#5d9c89)",tintInk:"#0f2a22",fill:"#6aa894",well:"linear-gradient(180deg,rgba(170,206,194,.6),rgba(240,250,246,.9))",orb:"radial-gradient(circle at 50% 60%,rgba(190,240,222,.75),rgba(150,214,192,.45) 58%,rgba(90,160,138,.7))",squish:"1.6"}},{id:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud.",dark:!1,v:{page:"#F2EEEE",ink:"#33282b",muted:"#7a6a6e",line:"rgba(80,40,50,.07)",body:"linear-gradient(180deg,rgba(255,252,252,.96),rgba(246,232,236,.72) 54%,rgba(230,206,214,.75))",edge:"#ffffff",depth:"rgba(190,140,156,.45)",shadow:"rgba(90,50,62,.26)",spec:"rgba(255,255,255,.95)",caustic:"rgba(255,170,198,.6)",tint:"linear-gradient(180deg,#f3c9d6,#d9909f)",tintInk:"#3a1d25",fill:"#df9fb0",well:"linear-gradient(180deg,rgba(226,206,212,.7),rgba(255,250,251,.9))",orb:"radial-gradient(circle at 46% 58%,rgba(255,188,208,.85),rgba(255,236,242,.5) 50%,rgba(222,190,200,.7))",squish:"1.2"}}],gd=e=>Tr.find(a=>a.id===e)??Tr[0],hd=e=>Object.entries(e.v).map(([a,o])=>`--cc-${a.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}:${o};`).join(`
  `),md=`
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
body.mini{overflow:hidden}
body.mini{margin:0;height:100vh;display:flex;align-items:center;justify-content:center}body.mini .cc-stage{flex:none;width:340px;max-width:none}
@media (max-width:320px){body.mini .cc-stage{transform:scale(.62)}}
@media (max-width:220px){body.mini .cc-stage{transform:scale(.42)}}
@media (max-width:140px){body.mini .cc-stage{transform:scale(.29)}}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition-duration:.01s!important}}
`,fd=`
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
`,bd=`
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
})();`,xd="addEventListener('message', e => { if (e.data === 'lo:theme:dark' || e.data === 'lo:theme:light') document.body.classList.toggle('dark', e.data === 'lo:theme:dark'); });",cs='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',vd={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row">
    <button class="cc-btn cc-glass primary" type="button">Continue</button>
    <button class="cc-btn cc-glass" type="button">Secondary</button>
    <button class="cc-btn cc-glass round" type="button" aria-label="Confirm">${cs}</button>
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
</div>`},yd={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row"><button class="cc-btn cc-glass primary" type="button" tabindex="-1">Continue</button><button class="cc-btn cc-glass round" type="button" tabindex="-1" aria-label="Confirm">${cs}</button></div>
  <div class="cc-row"><button class="cc-switch cc-glass" role="switch" type="button" tabindex="-1" aria-checked="true" aria-label="Switch"><span class="cc-knob"></span></button><input class="cc-range" type="range" value="62" tabindex="-1" aria-label="Level" style="width:150px"></div>
</div>`,"orb-slider":'<div class="cc-stage"><div class="cc-slide cc-glass" style="--h:64px;width:280px" aria-hidden="true"><span class="cc-trail"></span><span class="cc-label">slide to enter</span><span class="cc-orb"></span></div></div>'},ls={"crystal-controls":"Crystal Controls","orb-slider":"Orb Slider"},ds={clear:"radial-gradient(90% 80% at 50% 38%,#a9adae,#6c7071 82%)",chrome:"linear-gradient(180deg,#8f9293,#55585a)",porcelain:"radial-gradient(90% 80% at 50% 40%,#aca8a2,#76726c 82%)",gel:"radial-gradient(90% 80% at 50% 40%,#9ea6a4,#646c6a 82%)",bloom:"radial-gradient(90% 80% at 50% 40%,#aaa1a5,#736b6f 82%)"};function qr(e,a,{mini:o=!1,dark:t=!1}={}){let s=gd(a);return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${ls[e]} \xB7 ${s.name} \u2014 The Light Orb</title>
<!-- ${ls[e]} \xB7 ${s.name}. Free for personal and commercial use (The Light Orb licence).
     Change the material by editing the --cc-* variables below. -->
<style>
:root{
  ${hd(s)}
}${md}</style>
</head>
<body${o?` class="mini${t?" dark":""}"`:""}>
${(o?yd:vd)[e]}
${o&&ds[s.id]?`<style>body.mini.dark{background:${ds[s.id]}}</style>`:""}
<script>${fd}${o?bd+xd:""}<\/script>
</body>
</html>
`}var Ba=Math.min(2,window.devicePixelRatio||1),hs=matchMedia("(prefers-reduced-motion: reduce)").matches,mt=(e,a,o)=>e<a?a:e>o?o:e,fa=Math.random,Ha=null,ms=e=>{Ha=e},Ar=(e,a=.5)=>{co&&Ha&&Ha.sfx(e,Number.isFinite(a)?a:.5)},Xa={squish(e){Ar(e>.45?"level":"detent",mt(e,0,1))},glass(){Ar("select")},twang(e){Ar("level",mt(e/160,0,1))},thunk(e){Ar("detent",mt(1/e,0,1))}},Cr=new Set,lo=()=>document.documentElement.dataset.theme==="dark";new MutationObserver(()=>Cr.forEach(e=>e.retheme?.())).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});var ni=0,si=0,co=!1,ps=0,wd=matchMedia("(pointer: coarse)").matches;function fs(e){let a=Math.min(.033,(e-si)/1e3);si=e;let o=e/1e3;if(!document.hidden){ps++;let t=0;for(let s of Cr)if(s.vis&&(!co||s.detail)){if(!s.detail&&wd&&(t+++ps)%2){s.acc=(s.acc||0)+a;continue}s.step(a+(s.detail?0:s.acc||0),o),s.acc=0}}ni=Cr.size?requestAnimationFrame(fs):0}function kd(e,a,o={}){let t=a(e,o);t.cv=e,t.vis=!1,t.lastUser=-1e9,t.detail=!!o.detail,t.autoOn=i=>o.auto!==!1&&!hs&&i-t.lastUser>2400,t.io=new IntersectionObserver(i=>i.forEach(c=>t.vis=c.isIntersecting),{rootMargin:"80px"}),t.io.observe(e),t.ro=new ResizeObserver(()=>{let i=e.getBoundingClientRect();i.width>2&&i.height>2&&(t.resize(i.width,i.height),t.step(0,performance.now()/1e3))}),t.ro.observe(e);let s=i=>{let c=e.getBoundingClientRect();return[i.clientX-c.left,i.clientY-c.top]},g=(i,c)=>e.addEventListener(i,d=>{if(!t.ptr)return;let[h,p]=s(d);if(t.ptr(c,h,p,d)!==!1&&(t.lastUser=performance.now()/1e3),c==="down"&&t.detail){try{e.setPointerCapture(d.pointerId)}catch{}t.drag={x:h,y:p,t:performance.now()}}if(t.detail&&Ha)if(c==="move"&&t.drag){let m=performance.now(),F=Math.hypot(h-t.drag.x,p-t.drag.y)/Math.max(8,m-t.drag.t)*1e3;t.drag={x:h,y:p,t:m},Ha.friction(Number.isFinite(F)?Math.min(1,F/700):0)}else(c==="up"||c==="leave")&&(t.drag=null,Ha.friction(0))});return g("pointerdown","down"),g("pointermove","move"),g("pointerup","up"),g("pointercancel","up"),g("pointerleave","leave"),Cr.add(t),ni||(si=performance.now(),ni=requestAnimationFrame(fs)),t}function Sd(e){e.io.disconnect(),e.ro.disconnect(),Cr.delete(e)}function $d(e,a){let o=!a.detail,t=e.getContext("2d"),s=document.createElement("canvas"),g=s.getContext("2d"),i=[{abs:[.035,.014,.008],inner:0,scatter:0,sc:[0,0,0],fres:.85,shadow:.09,caustic:22},{abs:[0,0,0],inner:.08,scatter:.82,sc:[250,250,248],fres:.35,shadow:.14,caustic:6},{abs:[1.25,1.2,1.12],inner:.12,scatter:.04,sc:[90,92,95],fres:.7,shadow:.2,caustic:4}],c={tint:0,stiff:220,damp:7},d=o?72:112,h=5200*Math.pow((d-1)/(o?63:103),2),p=.34,m={x:0,y:0,down:!1,press:0,max:1,cx:0,cy:0,t0:0,was:!1},F,Q,n,A,O,W,$,q,U,R,N,x,y,C,Z,Y,J,ie,ce,ee,ne,le,Ie,qe,D,f,T=.01,B=1,j=0,z,pe,me,Me,ge,se=!1,je=!1,De=!1,Ke=()=>document.documentElement.dataset.theme==="dark",St=Ke(),it=(ve,be,he)=>{let Ae=ve/.14,Ne=be/.14,Fe=Math.abs(Ae-Math.round(Ae)),He=Math.abs(Ne-Math.round(Ne)),Pt=Fe<.022||He<.022;return St?152-26*(be+1)/2-12*Math.min(1,ve*ve/(A*A))+(Pt?7*he:0):246-6*(be+1)/2-3*Math.min(1,ve*ve/(A*A))-(Pt?4.5*he:0)},rt=()=>{let ve=0;for(let be=0;be<ne;be++){let he=be/(ne-1)*2-1;for(let Ae=0;Ae<ee;Ae++,ve++)D[ve]=it((Ae/(ee-1)*2-1)*A,he,1)}je=!1,De=!1},Qe={S:c,resize(ve,be){F=ve,Q=be,e.width=Math.round(ve*Ba),e.height=Math.round(be*Ba),A=ve/be,n=Math.max(24,Math.round(d/A)),O=2*A/(d-1);let he=d*n;q=new Float32Array(he),x=new Float32Array(he),y=new Float32Array(he),C=new Float32Array(he),Z=new Float32Array(he),Y=new Float32Array(he),J=new Float32Array(he),ie=new Float32Array(he),ce=new Float32Array(he),z=new Float32Array(he),pe=new Float32Array(he),me=new Uint8Array(he),Me=new Uint8Array(he),ge=new Uint8Array(he),W=A>=1?Math.min(A*.66,1.4):A*.78,$=A>=1?.7:.62;let Ae=(Ze,Ue)=>{let tt=Math.atan2(Ue,Ze),P=1+.035*Math.sin(tt*3+.6)+.02*Math.sin(tt*5+2.1),H=Math.pow(Math.pow(Math.abs(Ze)/(W*P),3.2)+Math.pow(Math.abs(Ue)/($*P),3.2),1/3.2),V=mt((1-H)/.26,0,1);return p*Math.sqrt(1-Math.pow(1-V,2))};for(let Ze=0;Ze<n;Ze++)for(let Ue=0;Ue<d;Ue++)q[Ze*d+Ue]=Ae((Ue/(d-1)*2-1)*A,Ze/(n-1)*2-1);let Ne=o?14e4:66e4,Fe=Math.min(Ba,1.25,Math.sqrt(Ne/(ve*be)))*B;ee=Math.max(8,Math.round(ve*Fe)),ne=Math.max(8,Math.round(be*Fe)),s.width=ee,s.height=ne,le=g.createImageData(ee,ne),T=2*A/(ee-1);let He=ee*ne,Pt=new Uint8Array(d*n);Ie=new Int32Array(He*3),qe=new Float32Array(He*6),D=new Float32Array(He),f=new Uint8Array(He),U=new Float32Array(He),R=new Float32Array(He),N=new Float32Array(He);for(let Ze=0;Ze<n;Ze++)for(let Ue=0;Ue<d;Ue++)if(!(q[Ze*d+Ue]<=0))for(let tt=-5;tt<=5;tt++)for(let P=-5;P<=5;P++){let H=Ze+tt,V=Ue+P;H>=0&&H<n&&V>=0&&V<d&&(Pt[H*d+V]=1)}let et=[[0,0],[-.06/O,-.1/O],[-.16/O,-.26/O]],Ge=0;for(let Ze=0;Ze<ne;Ze++){let Ue=Ze/(ne-1)*2-1;for(let tt=0;tt<ee;tt++,Ge++){let P=(tt/(ee-1)*2-1)*A,H=(P/A+1)/2*(d-1),V=(Ue+1)/2*(n-1);D[Ge]=it(P,Ue,1);let oe=0;for(let ae=0;ae<3;ae++){let Se=mt(H+et[ae][0],0,d-1.001),_e=mt(V+et[ae][1],0,n-1.001),Xe=Se|0,Le=_e|0,Re=Le*d+Xe;Ie[Ge*3+ae]=Re,qe[Ge*6+ae*2]=Se-Xe,qe[Ge*6+ae*2+1]=_e-Le,oe|=Pt[Re]}if(f[Ge]=oe,oe){let ae=T*.5,Se=Ae(P,Ue);U[Ge]=Se,R[Ge]=(Ae(P+ae,Ue)-Se)/ae,N[Ge]=(Ae(P,Ue+ae)-Se)/ae}}}je=!1,De=!1},set(){De=!1},ptr(ve,be,he,Ae){let Ne=(be/F*2-1)*A,Fe=he/Q*2-1;if(o){if(Ae.pointerType!=="mouse")return!1;ve==="move"?(m.down=!0,m.max=.5,m.x=Ne,m.y=Fe):ve==="leave"&&(m.down=!1);return}ve==="down"?(m.down=!0,m.max=1,m.x=Ne,m.y=Fe,m.was=!1,Xa.squish(.25)):ve==="move"&&m.down?(m.x=Ne,m.y=Fe):(ve==="up"||ve==="leave")&&(m.down&&m.press>.3&&Xa.squish(m.press*.5),m.down=!1)},step(ve,be){if(Ke()!==St&&(St=Ke(),D&&rt()),Qe.autoOn(be)){let H=be%3.6,V=H<1.6;if(V&&!m.auto&&(m.auto=!0,m.down=!0,m.max=o?.8:.9,m.cx=(fa()-.5)*W*.9,m.cy=(fa()-.5)*$*.6,m.t0=be),V){let oe=be-m.t0;m.x=m.cx+Math.sin(oe*1.2)*W*.16,m.y=m.cy+Math.cos(oe)*$*.1}else m.auto&&(m.auto=!1,m.down=!1)}else m.auto&&(m.auto=!1,o&&(m.down=!1));let he=m.down?m.max:0;m.press+=(he-m.press)*Math.min(1,ve*(m.down?hs?8:1.6:6)),m.press>.85&&!m.was&&!o&&(m.was=!0,Xa.squish(.6));let Ae=Math.max(1,Math.ceil(ve*240)),Ne=ve/Ae,Fe=h,He=.17,Pt=m.press*(110+c.stiff*.55);if(De&&!m.down&&m.press<1e-4)return;let et=0,Ge=0;for(let H=1;H<n-1;H++)for(let V=1;V<d-1;V++){let oe=H*d+V;if(q[oe]<=0)continue;let ae=(V/(d-1)*2-1)*A-m.x,Se=H/(n-1)*2-1-m.y,_e=ae*ae+Se*Se,Xe=Math.exp(-_e/(He*He)),Le=q[oe]/p;ie[oe]=-Pt*Xe*Le,et+=ie[oe];let Re=Math.sqrt(_e)-He*2;ce[oe]=Math.exp(-Re*Re/(He*He*1.6))*Le,Ge+=ce[oe]}let Ze=Ge>0?-et/Ge:0;for(let H=0;H<Ae&&ve>0;H++){for(let V=1;V<n-1;V++)for(let oe=1;oe<d-1;oe++){let ae=V*d+oe;if(q[ae]<=0){x[ae]=0,y[ae]=0;continue}y[ae]+=(Fe*(x[ae-1]+x[ae+1]+x[ae-d]+x[ae+d]-4*x[ae])-c.stiff*x[ae]-c.damp*y[ae]+ie[ae]+ce[ae]*Ze)*Ne}for(let V=0;V<x.length;V++)q[V]<=0||(x[V]+=y[V]*Ne,x[V]<-q[V]*.82&&(x[V]=-q[V]*.82,y[V]*=-.2))}let Ue=0;for(let H=0;H<x.length;H++){C[H]=Math.max(0,q[H]+x[H]),J[H]=C[H];let V=Math.abs(x[H])+Math.abs(y[H]);V>Ue&&(Ue=V)}let tt=De;if(De=!m.down&&m.press<1e-4&&Ue<2e-5,De&&tt)return;for(let H=1;H<n-1;H++)for(let V=1;V<d-1;V++){let oe=H*d+V;Z[oe]=(x[oe+1]-x[oe-1])/(2*O),Y[oe]=(x[oe+d]-x[oe-d])/(2*O)}for(let H=0;H<3;H++){for(let V=1;V<n-1;V++)for(let oe=1;oe<d-1;oe++){let ae=V*d+oe;J[ae]=(J[ae-1]+J[ae]*2+J[ae+1])/4}for(let V=1;V<d-1;V++)for(let oe=1;oe<n-1;oe++){let ae=oe*d+V;J[ae]=(J[ae-d]+J[ae]*2+J[ae+d])/4}}let P=performance.now();Qe.render(),Qe.cost(performance.now()-P)},render(){let ve=le.data,be=[-.42,-.62,.66],he=[-.22,-.34,.91],Ae=Math.hypot(...he);he[0]/=Ae,he[1]/=Ae,he[2]/=Ae;let Ne=i[c.tint],Fe=(ye,Ce,Te)=>{Ce=mt(Ce,0,d-1.001),Te=mt(Te,0,n-1.001);let Nt=Ce|0,_t=Te|0,Ot=Ce-Nt,ft=Te-_t,yt=_t*d+Nt;return(ye[yt]*(1-Ot)+ye[yt+1]*Ot)*(1-ft)+(ye[yt+d]*(1-Ot)+ye[yt+d+1]*Ot)*ft},He=(ye,Ce,Te)=>{let Nt=Ie[Ce*3+Te],_t=qe[Ce*6+Te*2],Ot=qe[Ce*6+Te*2+1];return(ye[Nt]*(1-_t)+ye[Nt+1]*_t)*(1-Ot)+(ye[Nt+d]*(1-_t)+ye[Nt+d+1]*_t)*Ot};if(!je){for(let ye=0,Ce=0;ye<D.length;ye++,Ce+=4)ve[Ce]=D[ye],ve[Ce+1]=D[ye],ve[Ce+2]=D[ye]-1,ve[Ce+3]=255;je=!0,se=!1,z.fill(-1)}let Pt=!1;for(let ye=0;ye<C.length;ye++){let Ce=Math.abs(C[ye]-z[ye])>2e-6||Math.abs(J[ye]-pe[ye])>2e-6;me[ye]=Ce,Ce&&(Pt=!0,z[ye]=C[ye],pe[ye]=J[ye])}if(!Pt&&se)return;se=!0;let et=Math.ceil(.46/O)+2;for(let ye=0;ye<n;ye++){let Ce=-1e9;for(let Te=0;Te<d;Te++)me[ye*d+Te]&&(Ce=Te),Me[ye*d+Te]=Te-Ce<=et;Ce=1e9;for(let Te=d-1;Te>=0;Te--)me[ye*d+Te]&&(Ce=Te),Ce-Te<=et&&(Me[ye*d+Te]=1)}for(let ye=0;ye<d;ye++){let Ce=-1e9;for(let Te=0;Te<n;Te++)Me[Te*d+ye]&&(Ce=Te),ge[Te*d+ye]=Te-Ce<=et;Ce=1e9;for(let Te=n-1;Te>=0;Te--)Me[Te*d+ye]&&(Ce=Te),Ce-Te<=et&&(ge[Te*d+ye]=1)}let Ge=Ne.abs,Ze=Ne.scatter,Ue=Ne.shadow,tt=Ne.caustic,P=Ne.inner,H=Ne.fres,V=1-Ze*.12,oe=Ze*.16,ae=1/p,Se=.06/O,_e=.1/O,Xe=(d-1)/2,Le=(n-1)/2,Re=1/A,Dt=T*1.3,$t=0,ot=0;for(let ye=0;ye<ne;ye++){let Ce=ye/(ne-1)*2-1;for(let Te=0;Te<ee;Te++,$t+=4,ot++){if(!f[ot]||!ge[Ie[ot*3]])continue;let Nt=(Te/(ee-1)*2-1)*A,_t=U[ot],Ot=_t>0?Math.max(0,_t+He(x,ot,0)):0,ft=He(J,ot,1)*ae;ft=ft<0?0:ft>1?1:ft;let yt=He(J,ot,2)*ae;yt=yt<0?0:yt>1?1:yt,yt*=yt;let Gt=D[ot]*(1-ft*Ue)+(ft>.25?yt*yt*(ft-.25)*tt:0);if(Ot<1e-4){ve[$t]=Gt,ve[$t+1]=Gt,ve[$t+2]=Gt-1;continue}let $e=R[ot]+He(Z,ot,0),dt=N[ot]+He(Y,ot,0),Et=-$e*.7,Ma=-dt*.7,Ft=1/Math.sqrt(Et*Et+Ma*Ma+1),xa=Et*Ft,va=Ma*Ft,At=Ot*ae,ut=.16+At*.28,Ct=Nt+xa*ut,sa=Ce+va*ut,Ut=Fe(J,(Ct*Re+1)*Xe-Se,(sa+1)*Le-_e)*ae;Ut=Ut<0?0:Ut>1?1:Ut;let La=Ft*Ft,ya=it(Ct,sa,La*La*Ft*1.6)*(1-Ut*P),Jt=Ge[0]?ya*Math.exp(-Ge[0]*At):ya,wt=Ge[1]?ya*Math.exp(-Ge[1]*At):ya,jt=Ge[2]?ya*Math.exp(-Ge[2]*At):ya;if(Ze){let G=Ze*(1-Math.exp(-At*2.2));Jt+=(Ne.sc[0]-Jt)*G,wt+=(Ne.sc[1]-wt)*G,jt+=(Ne.sc[2]-jt)*G}let la=xa*be[0]+va*be[1]+Ft*be[2],b=V+oe*(la>0?la:0);if(Jt*=b,wt*=b,jt*=b,Ft<.9995){let G=-va*1.5+.25;G=G<0?0:G>1?1:G;let X=112+130*G,Pe=Math.pow(1-Ft,2.6)*H;Jt+=(X-Jt)*Pe,wt+=(X-wt)*Pe,jt+=(X+2-jt)*Pe}let u=xa*he[0]+va*he[1]+Ft*he[2];if(u>.95){let G=Math.pow(u,90),X=(G*1.1+(u>.985?Math.pow(u,400)*1.2:0))*255;Jt+=X,wt+=X,jt+=X}let w=Ot/(Math.sqrt($e*$e+dt*dt)*Dt+1e-4);w>1&&(w=1),ve[$t]=Gt+(Jt-Gt)*w,ve[$t+1]=Gt+(wt-Gt)*w,ve[$t+2]=Gt-1+(jt-Gt+1)*w}}g.putImageData(le,0,0),t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(s,0,0,e.width,e.height)},cost(ve){Qe.ms=ve,window.__gelCost&&window.__gelCost.push(ve),ve>(o?7:13)?j++:j=Math.max(0,j-1),j>12&&B>.56&&!m.down&&m.press<.05&&(B=Math.max(.55,B*.82),j=0,Qe.resize(F,Q))}};return Qe}function Ed(e,a){let o=!a.detail,t=e.getContext("2d"),s=document.createElement("canvas"),g=s.getContext("2d"),i=document.createElement("canvas"),c=i.getContext("2d"),d={size:0,mag:.7,ca:.35},h,p,m,F,Q=80,n={x:0,y:0},A={x:0,y:0},O={x:0,y:0},W=!1,$=!0,q={},U=!1;function R(){let x=g;if(x.setTransform(m,0,0,m,0,0),x.fillStyle=lo()?"#a3a5a4":"#f1f1ef",x.fillRect(0,0,h,p),o&&Math.min(h,p)<300){let D=Math.min(h*.25,p*.21);x.fillStyle="#262827",x.font=`200 ${D}px "Helvetica Neue",Inter,Arial`,x.textBaseline="alphabetic";let f=h*.11,T=p*.44;x.fillText("Look",f,T),x.fillText("closer.",f,T+D*1.02),x.strokeStyle="rgba(38,40,39,.65)",x.lineWidth=.6;let B=h*.72,j=p*.84,z=Math.min(h,p)*.2;for(let pe=0;pe<12;pe++){x.beginPath();for(let me=0;me<=48;me++){let Me=me/48*Math.PI*2,ge=z*(.18+pe*.07)*(1+.12*Math.sin(Me*3+pe*.4)),se=B+Math.cos(Me)*ge*1.15,je=j+Math.sin(Me)*ge*.78;me?x.lineTo(se,je):x.moveTo(se,je)}x.stroke()}O={x:h*.42,y:p*.42},F=x.getImageData(0,0,s.width,s.height);return}let y=h/p>1.15,C=Math.max(o?30:20,Math.min(h,p)*.08),Z=Math.min(h*(y?o?.075:.09:.13),p*.15,84);x.fillStyle="#262827",x.font=`200 ${Z}px "Helvetica Neue",Inter,Arial`,x.textBaseline="top",(y?["Light bends","here."]:["Light","bends here."]).forEach((D,f)=>x.fillText(D,C,C+f*Z*1.02));let Y="A lens does not add anything to the page. It only redistributes what is already there, pulling the centre toward you and folding the edge away. Every line keeps its weight; only its position changes.".split(" "),J=mt(Math.min(h,p)*.032,9,12);x.font=`${J}px "Helvetica Neue",Arial`,x.fillStyle="#4a4c4b";let ie=y?h*.53:C,ce=y?h*.24:h-2*C,ee=y?C+6:C+Z*2.4,ne="";O={x:ie+Math.min(ce*.4,70),y:ee+J*4};for(let D of Y){let f=ne?ne+" "+D:D;x.measureText(f).width>ce?(x.fillText(ne,ie,ee),ee+=J*1.45,ne=D):ne=f}x.fillText(ne,ie,ee),x.strokeStyle="rgba(38,40,39,.72)",x.lineWidth=.7;let le=y?h*.78:h*.62,Ie=y?p*.68:p*.78,qe=Math.min(h,p)*(y?.25:.2);for(let D=0;D<20;D++){x.beginPath();for(let f=0;f<=64;f++){let T=f/64*Math.PI*2,B=qe*(.15+D*.043)*(1+.12*Math.sin(T*3+D*.4)+.05*Math.sin(T*7)),j=le+Math.cos(T)*B*1.15,z=Ie+Math.sin(T)*B*.78;f?x.lineTo(j,z):x.moveTo(j,z)}x.stroke()}x.strokeStyle="rgba(38,40,39,.16)";for(let D=0;D<8;D++)x.beginPath(),x.moveTo(C,p*(y?.58:.62)+D*7),x.lineTo(h*(y?.4:.42),p*(y?.58:.62)+D*7),x.stroke();F=x.getImageData(0,0,s.width,s.height)}let N={S:d,resize(x,y){h=x,p=y,m=Math.min(Ba,o?1.5:2),e.width=s.width=Math.round(x*m),e.height=s.height=Math.round(y*m),R(),Q=d.size?d.size/2:mt(Math.min(x,y)*.24,46,140),(!U||!o)&&(n={...O},A={...O},U=!0),$=!0},set(x){x==="size"&&(Q=d.size/2),$=!0},retheme(){h&&(R(),$=!0)},ptr(x,y,C,Z){if(o&&Z.pointerType!=="mouse")return!1;if(x==="leave"){W=!1;return}if(o&&x==="down")return!1;(x==="move"||x==="down")&&(!W&&!o&&Xa.glass(),W=!0,A={x:y,y:C})},step(x,y){o&&N.autoOn(y)&&(A={x:h*(.5+.3*Math.sin(y*.38)),y:p*(.5+.2*Math.sin(y*.53+1))});let C=1-Math.exp(-x*(W?20:o?2.2:3));n.x+=(A.x-n.x)*C,n.y+=(A.y-n.y)*C,!(!$&&Math.abs(n.x-q.x)<.05&&Math.abs(n.y-q.y)<.05)&&(q={x:n.x,y:n.y},$=!1,N.render(y))},render(x){t.setTransform(1,0,0,1,0,0),t.drawImage(s,0,0),t.setTransform(m,0,0,m,0,0);let y=n.x,C=n.y,Z=y+Q*.16,Y=C+Q*.3,J=t.createRadialGradient(Z,Y,Q*.2,Z,Y,Q*1.15);J.addColorStop(0,"rgba(0,0,0,.10)"),J.addColorStop(.75,"rgba(0,0,0,.05)"),J.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=J,t.beginPath(),t.ellipse(Z,Y,Q*1.15,Q,0,0,7),t.fill(),J=t.createRadialGradient(Z+Q*.1,Y+Q*.12,0,Z+Q*.1,Y+Q*.12,Q*.45),J.addColorStop(0,"rgba(255,255,255,.75)"),J.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=J,t.beginPath(),t.arc(Z+Q*.1,Y+Q*.12,Q*.45,0,7),t.fill();let ie=Math.round(Q*m),ce=ie*2+2;i.width!==ce&&(i.width=i.height=ce),(!N.ob||N.ob.width!==ce)&&(N.ob=c.createImageData(ce,ce));let ee=N.ob,ne=ee.data,le=F.data,Ie=F.width,qe=F.height,D=y*m,f=C*m,T=d.mag,B=d.ca;for(let j=0;j<ce;j++)for(let z=0;z<ce;z++){let pe=z-ie-1,me=j-ie-1,Me=Math.hypot(pe,me)/ie;if(Me>1.003)continue;let ge=(j*ce+z)*4,se=Math.sqrt(Math.max(0,1-Me*Me)),je=1/(1+T*Math.pow(se,.7)),De=Math.pow(1-se,3)*.55,Ke=Me>0?pe/(Me*ie):0,St=Me>0?me/(Me*ie):0;for(let Ae=0;Ae<3;Ae++){let Ne=1+(Ae-1)*B*.06*(1-se),Fe=mt(D+pe*je*Ne+Ke*De*ie|0,0,Ie-1),He=mt(f+me*je*Ne+St*De*ie|0,0,qe-1);ne[ge+Ae]=le[(He*Ie+Fe)*4+Ae]*(Me>.9?.985-(Me-.9)*1.6:.985)}let it=pe/ie+.38,rt=me/ie+.42,Qe=Math.exp(-(it*it+rt*rt)/.004)*.75+Math.exp(-(it*it*4+rt*rt)/.25)*.04,ve=Math.exp(-Math.pow((Me-.955)/.012,2))*Math.max(0,-(pe+me)/ie)*.55,be=Math.exp(-(Math.pow(pe/ie-.45,2)+Math.pow(me/ie-.5,2))/.012)*.12,he=(Qe+ve+be)*255;ne[ge]+=he,ne[ge+1]+=he,ne[ge+2]+=he+1,ne[ge+3]=255*mt((1.003-Me)/.012,0,1)}c.putImageData(ee,0,0),t.setTransform(1,0,0,1,0,0),t.drawImage(i,D-ie-1,f-ie-1),t.setTransform(m,0,0,m,0,0),t.strokeStyle="rgba(0,0,0,.08)",t.lineWidth=.6,t.beginPath(),t.arc(y,C,Q,0,7),t.stroke()}};return N}function Md(e,a){let o=!a.detail,t=e.getContext("2d"),s=document.createElement("canvas"),g=s.getContext("2d"),i={word:a.word||"Elastic",reach:80,snap:12},c,d,h,p,m=null,F=null,Q={x:0,y:0},n={x:0,y:0},A={x:0,y:0},O=null,W=!1,$={next:0},q=!1;function U(){g.setTransform(1,0,0,1,0,0),g.fillStyle=lo()?"#a3a5a4":"#f6f6f5",g.fillRect(0,0,s.width,s.height),g.setTransform(h,0,0,h,0,0);let y=Math.min(d*.46,c*.25);g.font=`300 ${y}px "Helvetica Neue",Inter,Arial`,g.letterSpacing="-0.04em";let C=g.measureText(i.word).width;C>c*.84&&(y*=c*.84/C,g.font=`300 ${y}px "Helvetica Neue",Inter,Arial`),g.fillStyle="#262827",g.textAlign="center",g.textBaseline="middle",g.fillText(i.word,c/2,d*.5),p=g.getImageData(0,0,s.width,s.height);let Z=p.data,Y=p.width,J=1e9,ie=1e9,ce=-1,ee=-1;for(let ne=0;ne<p.height;ne++)for(let le=0;le<Y;le++)Z[(ne*Y+le)*4]<238&&(le<J&&(J=le),le>ce&&(ce=le),ne<ie&&(ie=ne),ne>ee&&(ee=ne));m=ce<0?null:{x0:J-1,y0:ie-1,x1:ce+2,y1:ee+2},F=t.createImageData(s.width,s.height)}let R=()=>i.reach*mt(Math.min(c,d)/380,.45,1.3),N=y=>{let C=Math.hypot(y.x,y.y),Z=Math.min(Math.min(c,d)*.5,R()*1.8),Y=C>0?Z*Math.tanh(C/Z)/C:0;return{x:y.x*Y,y:y.y*Y}},x={S:i,resize(y,C){c=y,d=C,h=Math.min(Ba,o?1.25:1.5),e.width=s.width=Math.round(y*h),e.height=s.height=Math.round(C*h),U(),q=!1},set(y){y==="word"&&U(),q=!1},retheme(){c&&(U(),q=!1)},ptr(y,C,Z,Y){if(o)return!1;y==="down"?(Math.hypot(n.x,n.y)<2&&(Q={x:C,y:Z},n={x:0,y:0}),O={x:C-n.x,y:Z-n.y},A={x:0,y:0},W=!1,q=!1):y==="move"&&O?(n=N({x:C-O.x,y:Z-O.y}),q=!1):(y==="up"||y==="leave")&&O&&(Xa.twang(Math.hypot(n.x,n.y)),O=null)},step(y,C){if(!O&&x.autoOn(C)){if(!W&&C>$.next){W=!0,$.t0=C,Q={x:c*(.28+.44*fa()),y:d*(.42+.16*fa())};{let Z=R()*.85;$.tx=mt((fa()-.5)*c*.14,-Z,Z),$.ty=(fa()<.6?-1:1)*Math.min(Z,d*(.15+.08*fa()))}n={x:0,y:0},A={x:0,y:0}}if(W){let Z=(C-$.t0)/.75;if(Z<1){let Y=1-Math.pow(1-Z,3);n={x:$.tx*Y,y:$.ty*Y}}else Z>1.3&&(W=!1,$.next=C+1.4+fa()*1.2)}q=!1}else W&&(W=!1);if(!O&&!W){let Z=i.snap*i.snap*1.6,Y=i.snap*.55;for(let J=0;J<4;J++){let ie=y/4;A.x+=(-Z*n.x-Y*A.x)*ie,A.y+=(-Z*n.y-Y*A.y)*ie,n.x+=A.x*ie,n.y+=A.y*ie}}if(!O&&!W&&Math.hypot(n.x,n.y)<.15&&Math.hypot(A.x,A.y)<.5){if(q)return;n={x:0,y:0},q=!0}x.render()},render(){if(t.setTransform(1,0,0,1,0,0),t.drawImage(s,0,0),Math.hypot(n.x,n.y)<.15||!m)return;let y=R()*h,C=Q.x*h,Z=Q.y*h,Y=n.x*h,J=n.y*h,ie=Math.hypot(Y,J),ce=y*3+ie,ee=mt(Math.floor(Math.max(Math.min(C,C+Y)-ce,m.x0-ie-1)),0,e.width),ne=mt(Math.ceil(Math.min(Math.max(C,C+Y)+ce,m.x1+ie+1)),0,e.width),le=mt(Math.floor(Math.max(Math.min(Z,Z+J)-ce,m.y0-ie-1)),0,e.height),Ie=mt(Math.ceil(Math.min(Math.max(Z,Z+J)+ce,m.y1+ie+1)),0,e.height),qe=ne-ee,D=Ie-le;if(qe<2||D<2)return;let f=F.data,T=F.width,B=p.data,j=p.width,z=p.height,pe=1/(2*y*y);for(let me=0;me<D;me++)for(let Me=0;Me<qe;Me++){let ge=ee+Me,se=le+me,je=ge,De=se;for(let he=0;he<3;he++){let Ae=je-C,Ne=De-Z,Fe=Math.exp(-(Ae*Ae+Ne*Ne)*pe);je=ge-Y*Fe,De=se-J*Fe}je=mt(je,0,j-1.001),De=mt(De,0,z-1.001);let Ke=je|0,St=De|0,it=je-Ke,rt=De-St,Qe=(St*j+Ke)*4,ve=Qe+j*4,be=(se*T+ge)*4;for(let he=0;he<3;he++)f[be+he]=(B[Qe+he]*(1-it)+B[Qe+4+he]*it)*(1-rt)+(B[ve+he]*(1-it)+B[ve+4+he]*it)*rt;f[be+3]=255}t.putImageData(F,0,0,ee,le,qe,D)}};return x}function Ld(e,a){let o=!a.detail,t=e.getContext("2d"),s={k:100,lines:!0},g,i,c,d=[],h=[],p=null,m={next:0},F,Q=[{n:"graphite",m:1.8,g:"420 g"},{n:"ceramic",m:.8,g:"180 g"},{n:"alu",m:1.1,g:"240 g"},{n:"graphite",m:1.8,g:"420 g"},{n:"ceramic",m:.8,g:"180 g"}];function n(W,$){let q=null,U=1e9;for(let R of d){if(R.t&&R.t!==W)continue;let N=Math.hypot(R.x-W.x,R.y-W.y);N<U&&(U=N,q=R)}return $||U<c*.9?q:null}function A(W,$,q,U,R){t.beginPath(),t.roundRect?t.roundRect(W,$,q,U,R):t.rect(W,$,q,U)}let O={S:s,resize(W,$){g=W,i=$,e.width=Math.round(W*Ba),e.height=Math.round($*Ba);let q=W>=$,U=q?o?3:4:2,R=q?2:o?3:4;c=Math.min(W/(U+1.1),$/(R+.9))*.84;let N=c*1.2;d=[];for(let C=0;C<R;C++)for(let Z=0;Z<U;Z++)d.push({x:W/2+(Z-(U-1)/2)*N,y:$/2+(C-(R-1)/2)*N,t:null});let x=Math.min(o?4:5,d.length-1);h=Q.slice(0,x).map((C,Z)=>({...C,i:Z,x:0,y:0,vx:0,vy:0,z:0,slot:null}));let y=q?[0,1,3+(o?1:2),2].concat([4]):[0,1,2,4,5];h.forEach((C,Z)=>{let Y=d[y[Z]%d.length];C.slot=Y,Y.t=C,C.x=Y.x,C.y=Y.y}),p=null,O.drawn=!1},ptr(W,$,q,U){if(o)return!1;if(W==="down"){let R=null;for(let N of h)Math.abs($-N.x)<c*.5&&Math.abs(q-N.y)<c*.5&&(!R||N.z>=R.z)&&(R=N);if(!R)return!1;p={t:R,px:$,py:q,ox:$-(R.slot?R.slot.x:R.x),oy:q-(R.slot?R.slot.y:R.y)}}else W==="move"&&p&&!p.auto?(p.px=$,p.py=q):(W==="up"||W==="leave")&&p&&!p.auto&&(p=null)},step(W,$){if(O.autoOn($)&&(!p||p.auto)){if(!p&&$>m.next){let x=h[fa()*h.length|0],y=d.filter(C=>!C.t);if(x&&x.slot&&y.length){let C=y[fa()*y.length|0];p={t:x,auto:!0,px:x.x,py:x.y,ox:0,oy:0,fx:x.x,fy:x.y,tx:C.x,ty:C.y,t0:$}}}if(p&&p.auto){let x=($-p.t0)/1.15;if(x>=1)p=null,m.next=$+1.3+fa();else{let y=x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,C=Math.sin(x*Math.PI)*c*.18;p.px=p.fx+(p.tx-p.fx)*y,p.py=p.fy+(p.ty-p.fy)*y-C}}}else p&&p.auto&&!O.autoOn($)&&(p=null);let q=3,U=W/q,R=s.k;for(let x=0;x<q&&W>0;x++)for(let y of h){let C=0,Z=0;if(p&&p.t===y){let J=p.px-p.ox,ie=p.py-p.oy;if(y.slot){let ne=J-y.slot.x,le=ie-y.slot.y;if(Math.hypot(ne,le)<c*.42*(R/100)){y.x=y.slot.x+ne*.14,y.y=y.slot.y+le*.14,y.vx=y.vy=0;continue}y.slot.t=null,y.slot=null,Xa.thunk(y.m*1.6)}let ce=260/y.m;C+=(J-y.x)*ce,Z+=(ie-y.y)*ce;let ee=n(y);if(ee){let ne=ee.x-y.x,le=ee.y-y.y,Ie=Math.hypot(ne,le);if(Ie<c*.9){let qe=R*14*(1-Ie/(c*.9))/y.m;C+=ne/(Ie+1)*qe*c*.12,Z+=le/(Ie+1)*qe*c*.12}}y.z+=(1-y.z)*.2}else if(y.slot){let J=R*6/y.m;C+=(y.slot.x-y.x)*J,Z+=(y.slot.y-y.y)*J,y.z+=(0-y.z)*.25}else{let J=n(y,!0);J&&(J.t=y,y.slot=J,Xa.thunk(y.m))}for(let J of h)if(J!==y){let ie=y.x-J.x,ce=y.y-J.y,ee=Math.hypot(ie,ce);if(ee<c*1.02&&ee>0){let ne=(c*1.02-ee)*900;C+=ie/ee*ne,Z+=ce/ee*ne}}let Y=2*Math.sqrt(260/y.m)*.9;y.vx+=(C/y.m-Y*y.vx)*U,y.vy+=(Z/y.m-Y*y.vy)*U,y.x+=y.vx*U,y.y+=y.vy*U}let N=!!p;for(let x of h)(Math.abs(x.vx)+Math.abs(x.vy)>.02||x.z>.002||x.slot&&Math.abs(x.x-x.slot.x)+Math.abs(x.y-x.slot.y)>.05)&&(N=!0);!N&&O.drawn||(O.drawn=!N,O.render())},set(){O.drawn=!1},retheme(){O.drawn=!1},render(){let W=Ba;t.setTransform(W,0,0,W,0,0);let $=t.createLinearGradient(0,0,0,i);if($.addColorStop(0,lo()?"#a6a8a7":"#e9eae9"),$.addColorStop(1,lo()?"#929493":"#dddfde"),t.fillStyle=$,t.fillRect(0,0,g,i),s.lines){t.strokeStyle="#262827",t.lineWidth=.8,t.lineCap="round";let q=mt(c*.17,11,16);for(let U=q/2;U<i;U+=q)for(let R=q/2;R<g;R+=q){let N=0,x=0,y=!1;for(let Y of h){let J=R-Y.x,ie=U-Y.y;if(Math.abs(J)<c*.52&&Math.abs(ie)<c*.52){y=!0;break}let ce=J*J+ie*ie,ee=Math.sqrt(ce),ne=ce*ce*ee,le=-ie*c*c*Y.m;N+=3*le*J/ne,x+=3*le*ie/ne+c*c*Y.m/(ce*ee)}if(y)continue;let C=Math.hypot(N,x);if(C<1e-4)continue;t.globalAlpha=mt(C*c*.3*(s.k/100),.03,.5);let Z=q*.36;t.beginPath(),t.moveTo(R-N/C*Z,U-x/C*Z),t.lineTo(R+N/C*Z,U+x/C*Z),t.stroke()}t.globalAlpha=1}for(let q of d)t.strokeStyle="rgba(38,40,39,.2)",t.lineWidth=1,t.beginPath(),t.arc(q.x,q.y,2.5,0,7),t.stroke(),t.strokeStyle="rgba(38,40,39,.07)",A(q.x-c/2,q.y-c/2,c,c,c*.12),t.stroke();[...h].sort((q,U)=>q.z-U.z).forEach(q=>{let U=c*.48,R=1+q.z*.04,N=c*.13;t.save(),t.translate(q.x,q.y),t.scale(R,R),t.shadowColor="rgba(0,0,0,"+(.14+q.z*.12)+")",t.shadowBlur=8+q.z*30,t.shadowOffsetY=3+q.z*16;let x=t.createLinearGradient(0,-U,0,U);if(q.n==="graphite"?(x.addColorStop(0,"#3d3f40"),x.addColorStop(1,"#252627")):q.n==="ceramic"?(x.addColorStop(0,"#fff"),x.addColorStop(1,"#ececea")):(x.addColorStop(0,"#dcdddf"),x.addColorStop(1,"#bfc1c3")),t.fillStyle=x,A(-U,-U,U*2,U*2,N),t.fill(),t.shadowColor="transparent",q.n==="alu"){t.save(),A(-U,-U,U*2,U*2,N),t.clip(),t.strokeStyle="rgba(255,255,255,.35)",t.lineWidth=.5;for(let y=-U;y<U;y+=2.2)t.beginPath(),t.moveTo(-U,y),t.lineTo(U,y),t.stroke();t.restore()}t.strokeStyle=q.n==="graphite"?"rgba(255,255,255,.16)":"rgba(255,255,255,.95)",t.beginPath(),t.moveTo(-U+N,-U+.5),t.lineTo(U-N,-U+.5),t.stroke(),q.n!=="graphite"&&(t.strokeStyle="rgba(0,0,0,.07)",A(-U,-U,U*2,U*2,N),t.stroke()),c>70&&(t.fillStyle=q.n==="graphite"?"rgba(243,243,241,.5)":"rgba(38,40,39,.42)",t.font='10px "Helvetica Neue",Arial',t.textAlign="right",t.fillText(q.g,U-10,U-10)),t.beginPath(),t.arc(0,0,U*.16,0,7),t.strokeStyle=q.n==="graphite"?"rgba(255,255,255,.1)":"rgba(0,0,0,.08)",t.stroke(),t.restore()})}};return O}var Td={gel:$d,lens:Ed,type:Md,mag:Ld},li=[{id:"gel",name:"Gel Press",cat:"Materials",line:"Clear gel that sinks under pressure and slowly recovers.",lead:"A slab of clear gel that keeps its volume. Press and it sinks, the displaced mass rises around your finger, and it settles back on its own time.",hint:"Press, hold and drag",ctl:[{t:"sw",k:"tint",l:"Material",o:[["Clear","#eef3f4"],["Milk","#fafaf8"],["Smoke","#5c5f61"]]},{t:"r",k:"stiff",l:"Firmness",min:60,max:600},{t:"r",k:"damp",l:"Viscosity",min:2,max:30}]},{id:"lens",name:"Interactive Lens",cat:"Materials",line:"Thick optical glass that bends the page beneath it.",lead:"A disc of thick optical glass. It enlarges the centre, folds the edge with a trace of colour and leaves a point of focused light in its shadow.",hint:"Move or drag the lens",ctl:[{t:"r",k:"size",l:"Diameter",min:120,max:320},{t:"r",k:"mag",l:"Power",min:0,max:1.4,step:.01},{t:"r",k:"ca",l:"Dispersion",min:0,max:1,step:.01}]},{id:"type",name:"Elastic Lettering",cat:"Typography",line:"Letters that stretch under tension and snap back.",lead:"The glyphs themselves stretch. Grab any part of a letter and pull: strokes thin and lengthen, then snap back past rest and settle.",hint:"Grab a letter and pull",ctl:[{t:"txt",k:"word",l:"Word"},{t:"r",k:"reach",l:"Reach",min:30,max:160},{t:"r",k:"snap",l:"Snap",min:4,max:40}]},{id:"mag",name:"Magnetic Stack",cat:"Interaction",line:"Weighted pieces that pull, resist and settle into place.",lead:"Weighted modules on a magnetic rack. Graphite lags behind your hand, ceramic follows quickly, and every slot holds on before it lets go.",hint:"Drag a piece to another slot",ctl:[{t:"r",k:"k",l:"Field strength",min:20,max:200},{t:"chk",k:"lines",l:"Show field"}]}],po=Kt?"Free to try \xB7 Code on request":"Coming to early access";function di(e,a,o={}){xs();let t=document.createElement("canvas");t.className="obj-cv",t.setAttribute("aria-hidden","true"),e.prepend(t);let s=kd(t,Td[a],o);return{piece:s,dispose(){Sd(s),t.remove()}}}var us=e=>typeof e=="number"&&e%1?e.toFixed(2):e;function bs(e,{onClose:a}={}){xs();let o=li.find(p=>p.id===e);if(!o)return;let t=document.activeElement,s=document.createElement("div");s.className="obj-detail",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",o.name),s.innerHTML=`<div class="obj-sheet glass">
    <button class="gb small obj-x" type="button" aria-label="Close"><svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" stroke-width="1.2" fill="none"><path d="M2 2l8 8M10 2l-8 8"/></svg></button>
    <div class="obj-stage"><span class="obj-hint">${o.hint}</span></div>
    <div class="obj-panel info-dark">
      <span class="obj-crumb">Products \xB7 ${o.cat}</span><h2>${o.name}</h2><p class="obj-lead">${o.lead}</p>
      <span class="obj-status"><i></i>${po}</span>
      <div class="obj-group obj-custom"><h4>Customise</h4></div>
      <div class="obj-group"><h4>Includes</h4><ul class="obj-inc"><li>Web Component and React module</li><li>Offline demo page</li><li>Settings file you can export from here</li><li>Keyboard, touch and reduced-motion support</li></ul></div>
      <div class="obj-acts"><button class="gb small primary" type="button" data-export>Export settings</button>${Kt?Gr(o.id,o.name,{cls:"gb small"}):`<button class="gb small" type="button" disabled>${po}</button>`}</div>
    </div></div>`,document.body.append(s),document.documentElement.classList.add("obj-lock"),co=!0;let g=di(s.querySelector(".obj-stage"),e,{detail:!0,auto:!1}),i=g.piece.S;if(e==="lens"){let p=s.querySelector(".obj-stage").clientWidth;i.size=Math.round(mt(p*.42,140,220)),g.piece.set("size")}s.querySelector(".obj-custom").insertAdjacentHTML("beforeend",o.ctl.map(p=>{let m=i[p.k];return p.t==="sw"?`<div class="obj-ctl"><span>${p.l}</span><div class="obj-sw">${p.o.map((F,Q)=>`<button type="button" aria-label="${F[0]}" aria-pressed="${Q===m}" data-k="${p.k}" data-v="${Q}" style="background:${F[1]}"></button>`).join("")}</div></div>`:p.t==="txt"?`<label class="obj-ctl"><span>${p.l}</span><input class="obj-txt" data-k="${p.k}" value="${m}" maxlength="14"></label>`:p.t==="chk"?`<label class="obj-ctl"><span>${p.l}</span><input type="checkbox" data-k="${p.k}"${m?" checked":""}></label>`:`<label class="obj-ctl"><span>${p.l}</span><input type="range" data-k="${p.k}" min="${p.min}" max="${p.max}" step="${p.step||1}" value="${m}"><output>${us(m)}</output></label>`}).join(""));let c=s.querySelector(".obj-custom");c.addEventListener("input",p=>{let m=p.target.dataset.k;if(!m)return;let F=p.target.type==="checkbox"?p.target.checked:p.target.type==="range"?+p.target.value:p.target.value||" ";i[m]=F,g.piece.set?.(m);let Q=p.target.nextElementSibling;Q?.tagName==="OUTPUT"&&(Q.textContent=us(F))}),c.addEventListener("click",p=>{let m=p.target.closest(".obj-sw button");m&&(i[m.dataset.k]=+m.dataset.v,g.piece.set?.(m.dataset.k),m.parentElement.querySelectorAll("button").forEach(F=>F.setAttribute("aria-pressed",String(F===m))))}),s.querySelector("[data-export]").addEventListener("click",()=>{let p=document.createElement("a");p.href=URL.createObjectURL(new Blob([JSON.stringify({product:e,name:o.name,version:"preview",settings:{...i}},null,2)],{type:"application/json"})),p.download=`${e}-settings.json`,p.click(),setTimeout(()=>URL.revokeObjectURL(p.href),1e3)});let d=()=>{Ar("close"),Ha?.friction(0),g.dispose(),s.remove(),document.documentElement.classList.remove("obj-lock"),co=!1,removeEventListener("keydown",h),t?.focus?.(),a?.()},h=p=>{p.key==="Escape"&&!document.querySelector("dialog.rc[open]")&&d()};return addEventListener("keydown",h),Kt&&Ur(s,{audio:Ha}),s.querySelector(".obj-x").addEventListener("click",d),s.addEventListener("click",p=>{p.target===s&&d()}),setTimeout(()=>s.querySelector(".obj-x").focus(),30),d}var gs=!1;function xs(){if(gs)return;gs=!0;let e=document.createElement("style");e.textContent=`
.obj-cv{position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:inherit}
.file-v.has-obj{background:#efefed}
:root[data-theme=dark] .file-v.has-obj,:root[data-theme=dark] .obj-stage{background:#8e9191}
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
`,document.head.append(e)}var ze=":root .info-dark.info-dark",vs=`
${ze}{--ink:#eeefec;--soft:#c3c6c3;--muted:#a3a6a3;--faint:#8b8e8c;--line:rgba(255,255,255,.1);--hair:rgba(255,255,255,.1);--dark-ink:#eeefec;
  color:var(--ink);background:linear-gradient(180deg,#1a1b1c 0%,#141516 55%,#111213 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.08),inset 0 0 0 1px rgba(255,255,255,.06),0 30px 60px -36px rgba(0,0,0,.55);color-scheme:dark}
/* product pages: the column becomes the panel */
${ze}.pd-info{padding:clamp(22px,2.4vw,34px);border-radius:24px;align-self:start}
${ze} h1,${ze} h2{color:var(--ink)}
${ze} .kicker,${ze} .lbl,${ze} .var-line,${ze} .facts dt,${ze} .acc p,${ze} .studio-lock small{color:var(--muted)}
${ze} .lede,${ze} .facts dd{color:var(--soft)}
${ze} a:not(.gb){color:inherit}
${ze} .facts,${ze} .acc,${ze} .facts.ds-facts{border-top-color:var(--line)}
/* buttons: graphite glass with a crisp top rim; the primary is the light one (as in the dark theme) */
${ze} .gb:not(.primary){color:var(--ink)!important;background:linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,.04) 55%,rgba(255,255,255,.07))!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.28),inset 0 0 0 1px rgba(255,255,255,.1),0 1px 0 rgba(0,0,0,.6),0 8px 18px -10px rgba(0,0,0,.8)!important}
${ze} .gb:not(.primary):hover{background:linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,.06) 55%,rgba(255,255,255,.09))!important}
${ze} .gb.primary{color:#141516!important;background:linear-gradient(180deg,#f6f7f5,#e1e3e0)!important;box-shadow:inset 0 1px 1px #fff,0 8px 22px -10px rgba(0,0,0,.7)!important}
${ze} .gb::before,${ze} .gb::after{display:none}
${ze} .gb[disabled]{opacity:.5}
/* versions, environments: the segbar and its single travelling indicator */
${ze} .segbar{background:rgba(0,0,0,.35)!important;box-shadow:inset 0 1px 2px rgba(0,0,0,.5),inset 0 0 0 1px rgba(255,255,255,.06)!important}
${ze} .segbar .pill{color:var(--muted)}
${ze} .segbar .pill[aria-checked=true],${ze} .segbar .pill[aria-pressed=true],${ze} .segbar .pill.ix-cand,${ze} .segbar .pill:hover{color:var(--ink)}
${ze} .ix-sel{background:linear-gradient(180deg,rgba(255,255,255,.2),rgba(255,255,255,.07) 55%,rgba(255,255,255,.12));box-shadow:inset 0 1px .5px rgba(255,255,255,.35),inset 0 0 0 .5px rgba(255,255,255,.14),0 6px 14px -8px rgba(0,0,0,.8)}
${ze} .ix-sel::after{opacity:calc(.12 + var(--ix-on,0) * .3)}
/* cards inside the panel */
${ze} .studio-lock{background:rgba(255,255,255,.05)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)!important;color:var(--ink)}
${ze} .free-c{background:rgba(0,0,0,.35)!important;color:#dfe1de;box-shadow:inset 0 0 0 1px rgba(255,255,255,.07)!important}
${ze} .gi,${ze} input:not([type=range]):not([type=checkbox]):not([type=radio]),${ze} textarea,${ze} select{color:var(--ink);background:rgba(255,255,255,.06)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)!important;border-color:rgba(255,255,255,.14)}
${ze} input::placeholder,${ze} textarea::placeholder{color:var(--faint)}
${ze} input[type=range],${ze} input[type=checkbox]{accent-color:#e9eae8}
${ze} :focus-visible{outline-color:#eeefec}
${ze} .obj-sw button[aria-pressed=true]{outline-color:#eeefec}
${ze} .obj-sw button{box-shadow:0 0 0 1px rgba(255,255,255,.14),inset 0 -3px 6px rgba(0,0,0,.25),inset 0 2px 3px rgba(255,255,255,.5)}
`;var na=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function ws(e){let a=[],o=t=>[...t.childNodes].forEach(s=>{if(s.nodeType===3){let g=document.createDocumentFragment();s.textContent.split(/(\s+)/).forEach(i=>{if(!i)return;if(/^\s+$/.test(i)){g.append(" ");return}let c=document.createElement("span");c.className="tm-w";let d=document.createElement("span");d.className="tm-i",d.textContent=i,c.append(d),g.append(c),a.push(c)}),s.replaceWith(g)}else s.nodeType===1&&o(s)});return o(e),a.forEach((t,s)=>t.style.setProperty("--k",s)),a}var ys="aeosnrtlcdmuhgpbfy\xB7\u2014/\u25E6";function ks(e,{duration:a=620,delay:o=0}={}){let t=e.textContent;if(!t.trim()||t.length>40||na())return;e.setAttribute("aria-label",t);let s=[...t].map((d,h)=>({c:d,i:h,at:d===" "?0:o+h/t.length*a*.7+Math.random()*a*.3})),g=performance.now(),i=0,c=d=>{let h=d-g,p=!0;e.textContent=s.map(m=>h>=m.at?m.c:(p=!1,h<o?"\u2007":ys[Math.random()*ys.length|0])).join(""),!p&&e.isConnected?i=requestAnimationFrame(c):e.textContent=t};return i=requestAnimationFrame(c),()=>{cancelAnimationFrame(i),e.textContent=t}}function uo(e,a,{ratio:o=.35,margin:t="0px"}={}){if(!("IntersectionObserver"in window))return a(e),()=>{};let s=new IntersectionObserver(g=>{g.some(i=>i.isIntersecting)&&(s.disconnect(),a(e))},{threshold:o,rootMargin:t});return s.observe(e),()=>s.disconnect()}function go(e,a,{speed:o=1,onParagraph:t=()=>{},onDone:s=()=>{}}={}){let g=document.createElement("div");g.className="tm-sr",g.innerHTML=a.map(Y=>`<p>${Y.html}</p>`).join(""),g.querySelectorAll("a").forEach(Y=>{Y.tabIndex=-1});let i=document.createElement("div");i.className="tm-live",i.setAttribute("aria-hidden","true");let c=document.createElement("span");c.className="tm-caret";let d=document.createElement("div");d.className="tm-ghost",d.setAttribute("aria-hidden","true"),d.innerHTML=g.innerHTML,d.querySelectorAll("a").forEach(Y=>{Y.tabIndex=-1}),e.replaceChildren(g,d,i);let h,p=new Promise(Y=>{h=Y}),m=0,F=0,Q=!1,n=()=>{Q||(Q=!0,clearTimeout(m),cancelAnimationFrame(F),i.innerHTML=a.map(Y=>`<p>${Y.html}</p>`).join(""),i.lastElementChild?.append(c),c.classList.add("rest"),setTimeout(()=>c.classList.add("gone"),2600),g.remove(),i.removeAttribute("aria-hidden"),i.querySelectorAll("a").forEach(Y=>Y.removeAttribute("tabindex")),e.classList.add("tm-done"),s(),h())};if(na())return n(),c.remove(),{skip(){},done:p};let A=a.reduce((Y,J)=>Y+J.text.length,0),O=[],W=300,$=0;a.forEach((Y,J)=>{J&&(W+=J===1?320:220),O.push({at:W,para:J}),(Y.runs??[{t:"text",s:Y.text}]).forEach(ie=>{O.push({at:W,run:ie}),[...ie.s].forEach((ce,ee)=>{let ne=ie.s[ee+1]??"",le=10*(.6+Math.random()*.8);/[a-z]/i.test(ce)&&/[a-z]/i.test(ne)&&(le*=.8),ce===","&&(le+=80),".?!".includes(ce)&&(le+=150),ce==="\u2014"&&(le+=50),le*=++$>A*.35?.5:1,O.push({at:W,ch:ce}),W+=le})})});let q=null,U=null,R=0,N=0,x=0,y=Y=>{if(Y.para!==void 0){q=document.createElement("p"),i.append(q),q.append(c),t(Y.para);return}if(Y.run){if(Y.run.t==="a"){let J=document.createElement("a");J.href=Y.run.href,J.tabIndex=-1,q.insertBefore(J,c),U=J.appendChild(document.createTextNode(""))}else U=q.insertBefore(document.createTextNode(""),c);return}U.data+=Y.ch,x=Y.at},C=Y=>{if(Q)return;N||(N=Y);let J=(Y-N)*o;for(;R<O.length&&O[R].at<=J;)y(O[R++]);if(c.classList.toggle("rest",J-x>120),R>=O.length){m=setTimeout(n,350);return}F=requestAnimationFrame(C)};c.classList.add("rest"),i.append(c),F=requestAnimationFrame(C);let Z=n;return{skip:()=>{cancelAnimationFrame(F),Z()},done:p}}var Ss=`
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
`;var Ms=["Personal Website / Portfolio","Business Website","Online Store","Landing Page","Interactive Experience","Something Else","I\u2019m Not Sure Yet"],qd=["Present a business","Display products","Sell products online","Accept bookings or inquiries","Showcase creative work","Include interactive experiences","Something else","I need advice"],Ad=["As soon as possible","Within 1\u20133 months","Flexible","Not sure yet"],Xt={name:100,email:254,idea:5e3,ideaMin:20,design:2e3,refs:2e3,budget:200},ui="lo:inquiry",Cd=[["Visual identity","A look for the website, made from your brand, your references and what you love."],["Structure & UX/UI","How the site is organised, how it reads and how it feels to move through."],["Responsive layouts","Compositions designed for phones, tablets and large screens \u2014 not shrunk."],["Interaction & motion","Components, animations and small moments that make it feel alive."],["Online stores","Product catalogues, product presentation and setup, selling online."],["Portfolios & business sites","Creative portfolios, studios, shops, services, landing pages."],["Experimental experiences","Materials, light, sound and 3D, when the idea asks for it."],["Integrations","Other tools the project needs, agreed together."]],Od=[["Your Idea","Tell me what you want to create, what you like, and what matters to your project."],["The Direction","We define the visual approach, structure, functionality and scope."],["Design & Development","I turn the agreed concept into a fully designed, functional digital experience."],["The Final Experience","The website is reviewed, refined and prepared for launch."]],Ea=e=>String(e??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),Ls=()=>{try{return JSON.parse(sessionStorage.getItem(ui))??{}}catch{return{}}},jd=e=>{try{sessionStorage.setItem(ui,JSON.stringify(e))}catch{}},zd=()=>{try{sessionStorage.removeItem(ui)}catch{}},$s=()=>crypto.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,12)}`;function Es(e){let a={};String(e.name??"").trim()?e.name.trim().length>Xt.name&&(a.name=`Please keep your name under ${Xt.name} characters.`):a.name="Please tell me your name.",ha(String(e.email??""))||(a.email="Please enter a valid email address, so I can reply."),Ms.includes(e.type)||(a.type="Choose the option closest to what you have in mind.");let o=String(e.idea??"").trim();o.length<Xt.ideaMin?a.idea="Tell me a little about your idea \u2014 a few sentences are enough.":o.length>Xt.idea&&(a.idea=`Please keep it under ${Xt.idea} characters.`);for(let t of["design","refs","budget"])String(e[t]??"").length>Xt[t]&&(a[t]=`Please keep this under ${Xt[t]} characters.`);return a}var ci=(e,a,o,t)=>a.map((s,g)=>{let i=o==="radio"?t===s:(t??[]).includes(s);return`<label class="ch"><input type="${o}" name="${e}" value="${Ea(s)}"${i?" checked":""}${o==="radio"&&e==="type"&&g===0?" required":""}><span>${Ea(s)}</span></label>`}).join("");function Id(e){let a=!!_a;return`<form class="iq" data-iq novalidate aria-describedby="iq-privacy">
    <div class="iq-row2">
      <label class="fl"><span>Name</span><input class="gi" name="name" autocomplete="name" maxlength="${Xt.name}" required aria-required="true" value="${Ea(e.name)}"><em class="err" data-err="name" id="e-name"></em></label>
      <label class="fl"><span>Email</span><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" maxlength="${Xt.email}" required aria-required="true" value="${Ea(e.email)}"><em class="err" data-err="email" id="e-email"></em></label>
    </div>
    <fieldset class="iq-set" data-set="type"><legend>What are you looking to create?</legend>
      <div class="chs" role="radiogroup" aria-required="true">${ci("type",Ms,"radio",e.type)}</div><em class="err" data-err="type" id="e-type"></em></fieldset>
    <label class="fl"><span>Tell me about your idea</span>
      <textarea class="gi iq-ta" name="idea" rows="7" maxlength="${Xt.idea}" required aria-required="true" placeholder="What is it, who is it for, what would make it feel right?">${Ea(e.idea)}</textarea>
      <span class="iq-meta"><em class="err" data-err="idea" id="e-idea"></em><small data-count></small></span></label>
    <details class="iq-more" data-more${e.more?" open":""}><summary><span>A little more, if you like</span><small>Optional \xB7 design, references, timing, budget</small></summary>
      <div class="iq-more-b">
        <label class="fl"><span>What kind of design do you like?</span><textarea class="gi" name="design" rows="3" maxlength="${Xt.design}" placeholder="Colours, materials, styles, moods\u2026">${Ea(e.design)}</textarea><em class="err" data-err="design"></em></label>
        <label class="fl"><span>Any websites or references you love?</span><textarea class="gi" name="refs" rows="3" maxlength="${Xt.refs}" placeholder="Links, or a few words about them">${Ea(e.refs)}</textarea><em class="err" data-err="refs"></em></label>
        <fieldset class="iq-set"><legend>What should your website do?</legend><div class="chs">${ci("functions",qd,"checkbox",e.functions)}</div></fieldset>
        <fieldset class="iq-set"><legend>When would you like to launch?</legend><div class="chs" role="radiogroup">${ci("timeline",Ad,"radio",e.timeline)}</div></fieldset>
        <label class="fl"><span>Do you have a budget in mind? <i class="opt">Optional \u2014 a rough idea is fine</i></span><input class="gi" name="budget" maxlength="${Xt.budget}" value="${Ea(e.budget)}"><em class="err" data-err="budget"></em></label>
      </div></details>
    <label class="iq-hp" aria-hidden="true">Leave this empty<input name="website" tabindex="-1" autocomplete="off"></label>
    <div class="iq-send"><button class="gb primary" type="submit" data-send${a?"":" disabled"}><span>Send My Project</span></button>
      <p class="iq-status" data-status role="status" aria-live="polite">${a?"":"Project inquiries open soon \u2014 nothing typed here is sent yet."}</p></div>
    <p class="note" id="iq-privacy">What you write here is sent by email to Carla only, to reply to you and talk about your project. It is not added to any mailing list. See <a href="#/privacy">privacy</a>.</p>
  </form>`}var Rd=`<div class="iq-done" role="status" tabindex="-1" data-done><span class="iq-done-orb" aria-hidden="true"></span>
  <p class="kicker">Sent</p><h3>Your idea is on its way.</h3><p>Thank you for sharing it \u2014 I\u2019ll be in touch soon.</p>
  <div class="acts eq"><a class="tl" href="#/templates">Explore Templates</a><a class="tl" href="#/products">Discover Products</a></div></div>`;function Pd(e,{audio:a}){let o=e.querySelector("[data-iq]");if(!o)return;let t=o.querySelector("[data-status]"),s=o.querySelector("[data-send]"),g=o.querySelector("[data-count]"),i=o.elements.idea,c=Date.now(),d=Ls().key||$s(),h=!1,p=()=>({name:o.elements.name.value,email:o.elements.email.value,type:o.querySelector("[name=type]:checked")?.value??"",idea:i.value,design:o.elements.design.value,refs:o.elements.refs.value,functions:[...o.querySelectorAll("[name=functions]:checked")].map(n=>n.value),timeline:o.querySelector("[name=timeline]:checked")?.value??"",budget:o.elements.budget.value}),m=()=>jd({...p(),key:d,more:o.querySelector("[data-more]").open}),F=()=>{let n=i.value.trim().length;g.textContent=n?`${n} / ${Xt.idea}`:""},Q=n=>{o.querySelectorAll("[data-err]").forEach(A=>{let O=A.dataset.err,W=n[O]??"";A.textContent=W;let $=O==="type"?o.querySelector("[data-set=type]"):o.elements[O];$&&($.toggleAttribute("aria-invalid",!!W),$.setAttribute&&(W&&A.id?$.setAttribute("aria-describedby",A.id):$.removeAttribute?.("aria-describedby")))})};F(),o.addEventListener("input",n=>{m(),n.target===i&&F();let A=n.target.name,O=o.querySelector(`[data-err="${A}"]`);if(O?.textContent&&!Es(p())[A]){O.textContent="";let W=A==="type"?o.querySelector("[data-set=type]"):n.target;W.removeAttribute("aria-invalid"),W.removeAttribute("aria-describedby")}}),o.querySelector("[data-more]").addEventListener("toggle",n=>{m(),a?.sfx(n.target.open?"open":"close")}),o.addEventListener("submit",async n=>{if(n.preventDefault(),h||!_a)return;let A=p(),O=Es(A);Q(O);let W=Object.keys(O)[0];if(W){t.textContent="A few details are missing \u2014 see the highlighted fields.",(W==="type"?o.querySelector("[name=type]"):o.elements[W])?.focus(),["design","refs","budget"].includes(W)&&(o.querySelector("[data-more]").open=!0);return}h=!0,s.disabled=!0,s.setAttribute("aria-busy","true"),o.setAttribute("aria-busy","true"),t.textContent="Sending\u2026";let $=!1,q="";try{let U=await fetch(_a,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({...A,website:o.elements.website.value,key:d,elapsed:Date.now()-c,lang:(navigator.language||"en").slice(0,5)})}),R=await U.json().catch(()=>({}));$=U.ok&&R?.ok===!0,$||(q=U.status===429?"Your message was not sent: too many tries for now. Please wait a little and try again \u2014 everything you wrote is still here.":U.status===400&&R?.field?"Your message was not sent: please check the highlighted field.":"Your message was not sent. Please try again in a moment, or write to trescarla@gmail.com \u2014 everything you wrote is still here."),!$&&R?.field&&Q({[R.field]:"Please check this field."})}catch{q="Your message was not sent \u2014 the connection failed. Please try again; everything you wrote is still here."}if(h=!1,s.removeAttribute("aria-busy"),o.removeAttribute("aria-busy"),$){zd(),d=$s(),We("inquiry_sent",{type:A.type}),a?.sfx("confirm");let U=document.createElement("div");U.innerHTML=Rd;let R=U.firstElementChild;o.replaceWith(R),R.focus({preventScroll:!0}),R.scrollIntoView({block:"center",behavior:na()?"auto":"smooth"});return}s.disabled=!1,t.textContent=q,t.setAttribute("role","alert"),We("inquiry_failed")})}function Dd(e,a){let o=a.querySelector(".hx-h");if(ws(o),a.querySelectorAll("[data-decrypt]").forEach((g,i)=>ks(g,{delay:120+i*900})),requestAnimationFrame(()=>requestAnimationFrame(()=>a.classList.add("tm-on"))),na())return;let t=0,s=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>{let g=a.getBoundingClientRect(),i=Math.min(1,Math.max(0,-g.top/Math.max(1,g.height)));a.style.setProperty("--sp",i.toFixed(3))})};e.addEventListener("scroll",s,{passive:!0})}var Nd=[[".wd-custom",".wd-custom-t>.kicker, .wd-custom-t>h2, .wd-custom-t>p, .wd-poss>.kicker, .wd-list>li, .wd-poss>.note"],[".wd-proof",":scope>.kicker, :scope>h2, .wd-proof-l, .wd-pc"],[".wd-quote",".kicker, h2, p"],[".wd-form",".wd-form-t>*, .wd-form-b"]];function Fd(e){if(na()||!("IntersectionObserver"in window))return;let a=e.querySelector(".wd");if(a){a.classList.add("rv-on");for(let[o,t]of Nd){let s=e.querySelector(o);if(!s)continue;let g=[...s.querySelectorAll(t)];g.forEach((c,d)=>{c.classList.add("rv"),c.style.setProperty("--rd",String(Math.min(d*70,640)))});let i=c=>{c.classList.remove("rv","in"),c.style.removeProperty("--rd")};uo(s,()=>g.forEach(c=>{c.classList.add("in"),c.addEventListener("transitionend",d=>{d.target===c&&d.propertyName==="transform"&&i(c)},{once:!1}),setTimeout(()=>i(c),1900)}),{ratio:.12,margin:"0px 0px -6% 0px"})}}}function Bd(e){let a=[...e.querySelectorAll(".wd-step")],o=e.querySelector(".wd-path"),t=e.querySelector(".wd-steps-w"),s=0,g=()=>{let d=getComputedStyle(e.querySelector(".wd-steps")).gridTemplateColumns.split(" ").length===1,h=e.querySelector(".wd-steps"),p=n=>{let A=n.querySelector(".wd-bead");return[h.offsetLeft+n.offsetLeft+A.offsetLeft,h.offsetTop+n.offsetTop+A.offsetTop]},m=a.map(p),F=m.map(n=>n[d?1:0]),Q=F[F.length-1]-F[0];o.style.left=`${m[0][0]+9}px`,o.style.top=`${m[0][1]+9}px`,o.style.setProperty("--len",`${Q}px`),o.style.setProperty("--to",String(Q?(F[s]-F[0])/Q:0))},i=d=>{s=d,a.forEach((h,p)=>{h.classList.toggle("on",p===d),h.classList.toggle("past",p<d),p===d?h.setAttribute("aria-current","step"):h.removeAttribute("aria-current")}),g(),na()||(o.classList.remove("glint"),o.offsetWidth,o.classList.add("glint"))};if(a.forEach((d,h)=>{d.addEventListener("pointerenter",p=>{p.pointerType==="mouse"&&e.classList.contains("in")&&i(h)}),d.addEventListener("focus",()=>i(h)),d.addEventListener("click",()=>i(h))}),new ResizeObserver(()=>g()).observe(t),na()){e.classList.add("in"),i(0);return}e.classList.add("pre"),uo(e,()=>{e.classList.add("in"),setTimeout(()=>i(0),1100)},{ratio:.25})}function Ts(e,a,o={}){let t=Ls();e.innerHTML=`
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
          <ul class="wd-list">${Cd.map(([g,i])=>`<li><b>${g}</b><span>${i}</span></li>`).join("")}</ul>
          <p class="note">Every project is different; what is included is agreed together, one project at a time.</p></div>
      </section>

      <section class="wd-proc" aria-labelledby="wd-p">
        <p class="kicker">Working together</p><h2 id="wd-p">From an idea to a finished website.</h2>
        <div class="wd-steps-w"><span class="wd-path" aria-hidden="true"><i></i></span><ol class="wd-steps">${Od.map(([g,i],c)=>`<li class="wd-step" tabindex="0" style="--i:${c}"><span class="wd-bead" aria-hidden="true"></span><span class="wd-n">${String(c+1).padStart(2,"0")}</span><h3>${g}</h3><p>${i}</p></li>`).join("")}</ol></div>
      </section>

      <section class="wd-proof" id="wd-proof" aria-labelledby="wd-pr">
        <p class="kicker">Made here</p><h2 id="wd-pr">The work speaks in materials.</h2>
        <p class="wd-proof-l">Every object on this site \u2014 the glass, the light, the way it answers your hand \u2014 was designed and built by me, from the first sketch to the last shader. It is the clearest description of the custom websites I make for others: touch it.</p>
        <div class="wd-proof-g">
          <a class="wd-pc glass" href="#/products/orb"><span class="wd-pc-k">Object</span><b>The Orb</b><span>Real-time glass in WebGL: refraction, light and an interior you can stir.</span><i>Try it \u2192</i></a>
          <a class="wd-pc glass" href="#/templates"><span class="wd-pc-k">Composition</span><b>Templates</b><span>Whole pages built around one object, with a live, responsive preview.</span><i>Browse \u2192</i></a>
          <a class="wd-pc glass" href="#/studio"><span class="wd-pc-k">Tool</span><b>Studio</b><span>A material and lighting editor with save, reopen and export.</span><i>Open \u2192</i></a>
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
          ${Di?'<p class="note">Prefer email? Write to <a href="mailto:trescarla@gmail.com">trescarla@gmail.com</a>.</p>':'<p class="iq-pending" role="note"><b>Sending is being connected.</b> Until it is confirmed, the form only says \u201Csent\u201D when the message has really been delivered. You can also write directly to <a href="mailto:trescarla@gmail.com">trescarla@gmail.com</a>.</p>'}</div>
        <div class="wd-form-b glass">${Id(t)}</div>
      </section>
    </article>${a.footer()}`;let s=(g=!0)=>{let i=e.querySelector("#wd-inquiry"),c=matchMedia("(pointer:coarse)").matches,d=g&&!c&&!na();e.scrollTo({top:e.scrollTop+i.getBoundingClientRect().top-96,behavior:d?"smooth":"instant"}),setTimeout(()=>{i.isConnected&&i.querySelector("[name=name]")?.focus({preventScroll:!c})},d?600:0)};e.querySelector("[data-to-proof]")?.addEventListener("click",g=>{g.preventDefault();let i=e.querySelector("#wd-proof");e.scrollTo({top:e.scrollTop+i.getBoundingClientRect().top-96,behavior:na()?"auto":"smooth"})}),e.querySelector("[data-to-form]").addEventListener("click",()=>{a.audio?.sfx("select"),We("inquiry_start"),s()}),Pd(e,a),Dd(e,e.querySelector(".hx")),Bd(e.querySelector(".wd-proc")),Fd(e),o.to==="inquiry"&&requestAnimationFrame(()=>requestAnimationFrame(()=>s(!1)))}var ho=[[{t:"text",s:"Hi there,"}],[{t:"text",s:"I\u2019m Carla, a web designer and developer creating digital experiences that go beyond traditional layouts."}],[{t:"text",s:"I\u2019m drawn to design, movement, materials and interaction \u2014 to the way they can change how a website feels in your hands."}],[{t:"text",s:"THE ORB LIGHT is my creative digital design studio, where I develop my own ideas: the digital pieces in "},{t:"a",s:"Products",href:"#/products"},{t:"text",s:", and the interactive "},{t:"a",s:"Templates",href:"#/templates"},{t:"text",s:"."}],[{t:"text",s:"I also design and build custom websites for people and brands who want something that feels genuinely their own."}],[{t:"text",s:"\u2014 Carla"}]].map(e=>({runs:e,text:e.map(a=>a.s).join(""),html:e.map(a=>a.t==="a"?`<a href="${a.href}">${Ea(a.s)}</a>`:Ea(a.s)).join("")})),pi=!1;function qs(e,a){let o="";try{o=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Lisbon",hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{}e.innerHTML=`
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
    </article>${a.footer()}`;let t=e.querySelector(".nt"),s=e.querySelector("[data-note]"),g=e.querySelector("[data-skip]"),i=()=>{g.hidden=!0,t.classList.add("acts-in"),s.querySelectorAll(".tm-live a").forEach(p=>p.removeAttribute("tabindex"))};if(pi||na()){go(s,ho.map(p=>({...p})),{}).skip(),s.querySelector(".tm-caret")?.remove(),i();return}s.innerHTML=`<div class="tm-sr">${ho.map(p=>`<p>${p.html.replace(/<a /g,'<a tabindex="-1" ')}</p>`).join("")}</div>`;let c=null,d=uo(s,()=>{pi=!0,c=go(s,ho,{onParagraph:p=>{p===2&&t.classList.add("acts-in")},onDone:i})},{ratio:.1});g.addEventListener("click",()=>{if(a.audio?.sfx?.("select"),c){c.skip();return}d(),pi=!0,go(s,ho,{onDone:i}).skip()}),s.addEventListener("click",()=>{c&&!s.classList.contains("tm-done")&&c.skip()});let h=p=>{if(!t.isConnected){removeEventListener("keydown",h);return}c&&!s.classList.contains("tm-done")&&!p.metaKey&&!p.ctrlKey&&c.skip()};addEventListener("keydown",h)}var As='<span class="wdm" aria-hidden="true"><span class="wdm-l">wd</span><em>Web Design</em></span>';if(typeof document<"u"&&!na()){let e=0,a=null;document.addEventListener("pointermove",o=>{if(o.pointerType!=="mouse")return;let t=o.target.closest?.(".dg-design");if(!t){a&&(a.style.removeProperty("--mx"),a.style.removeProperty("--my"),a=null);return}a=t,cancelAnimationFrame(e),e=requestAnimationFrame(()=>{let s=t.getBoundingClientRect();t.style.setProperty("--mx",((o.clientX-s.left)/s.width-.5).toFixed(3)),t.style.setProperty("--my",((o.clientY-s.top)/s.height-.5).toFixed(3))})},{passive:!0})}var Cs=`
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
.wd.rv-on .rv{opacity:0;transform:translateY(14px);transition:opacity .8s cubic-bezier(.25,.7,.2,1) calc(var(--rd,0) * 1ms),transform 1s cubic-bezier(.2,.75,.15,1) calc(var(--rd,0) * 1ms)}
.wd.rv-on .rv.in{opacity:1;transform:none}
.wd.rv-on .wd-list>li.rv{transform:translateY(8px)}.wd.rv-on .wd-list>li.rv.in{transform:none}
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
.wd-proc.pre>.kicker,.wd-proc.pre>h2,.wd-proc.pre .wd-step{opacity:0;transform:translateY(12px)}
.wd-proc>.kicker,.wd-proc>h2,.wd-proc .wd-step{transition:opacity .9s ease,transform 1s cubic-bezier(.2,.7,.1,1)}
.wd-proc>h2{transition-delay:.12s}
.wd-proc .wd-step{transition-delay:calc(.75s + var(--i) * .2s)}
.wd-proc.in>.kicker,.wd-proc.in>h2,.wd-proc.in .wd-step{opacity:1;transform:none}
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
@media (prefers-reduced-motion:reduce){.wd-bead,.wd-bead::after,.wd-n,.wd-path,.wd-path i,.wd-list li,.nv-x svg,.hx-b,.hx-c em,.hx-foot,.hx-note::before,.nt-acts{transition:none}.hx-l{translate:none}.wd-path i::after,.iq-more[open] .iq-more-b,.iq-done-orb{animation:none}}
${Ss}
`;var Hd=[{date:"2026-10-27",items:["Every section, product and template now has its own address, such as thelightorb.com/products/orb, so it can be found and shared.","Opening a link to a product or page goes straight there, without the intro.","Four new interactive Objects in Products: Gel Press, Interactive Lens, Elastic Lettering and Magnetic Stack, coming to early access.","Products can be filtered by category and shown as a grid or large cards.","Bloom listens: with your permission, the Bloom Orb answers your voice through the microphone.","Web Design has a new typographic opening and an interactive look at the process.","Refined glass on buttons, filters and cards, and a dark mode with neutral graphite surfaces.","On phones, the three offers on the welcome take turns on one line.","A new site icon: the O of the wordmark."]},{date:"2026-10-23",items:["BRUNITO, an interactive ecommerce template, can be explored in Templates.","The Light Orb moved to its own address, thelightorb.com."]}],_d=e=>new Date(`${e}T12:00:00Z`).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});function Os(e,a){e.innerHTML=`
    <section class="dest legal">
      <header class="dh"><p class="kicker">Changelog</p><h1>What\u2019s new</h1><p class="dh-l">New pieces and changes to The Light Orb, newest first.</p></header>
      <div class="legal-b">${Hd.map(o=>`<h2><time datetime="${o.date}">${_d(o.date)}</time></h2><ul>${o.items.map(t=>`<li>${a.esc(t)}</li>`).join("")}</ul>`).join("")}</div>
    </section>${a.footer()}`}var ba=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),ur=(e,a,o)=>e+(a-e)*o,Oa=e=>{let a=ba(e);return a*a*(3-2*a)},Wd=(e,a,o,t,s)=>Oa((e-a)/(o-a))*(1-Oa((e-t)/(s-t))),ke=e=>String(e).replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),Ja={get:(e,a)=>{try{return JSON.parse(sessionStorage.getItem(e))??a}catch{return a}},set:(e,a)=>{try{sessionStorage.setItem(e,JSON.stringify(a))}catch{}}},at={play:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>',replay:'<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/></svg>',prev:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',mute:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',moon:'<svg viewBox="0 0 24 24"><path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z"/></svg>',sun:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.8"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg>',user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M4.5 20c1.4-3.6 4.2-5.4 7.5-5.4s6.1 1.8 7.5 5.4"/></svg>',heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/></svg>',back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',down:'<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',bag:'<svg viewBox="0 0 24 24"><path d="M5.5 8.5h13l-1 11h-11z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5.5" y="10.5" width="13" height="9" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',orb:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="11" cy="15" r="1.6" fill="currentColor" stroke="none"/></svg>'},gi={pieces:"products",materials:"products"};function js(e){let{orb:a,reduced:o}=e,t=Xi();ms(t);let s=document.createElement("style");s.textContent=cn+pn+Cs+fn+mn+(/[?&]cx=0\b/.test(location.search)?"":bn)+$n+Mn+Rn+vs,document.documentElement.classList.add("ds2"),document.head.append(s),hn(),document.documentElement.classList.add("lo-on");let g=Vn(e),i=hi("main","lo");i.setAttribute("aria-label","The Light Orb"),i.tabIndex=-1;let c=hi("div","lo-top");document.body.append(i,c),c.innerHTML=`
    <header class="hd" data-hd>
      <a class="wm" href="#/" aria-label="The Light Orb \u2014 Home" data-home>${oi}</a>
      <nav class="nav" aria-label="Main">${Co.map(r=>r.children?`<div class="nv-g" data-nvg><a href="${r.route}" data-nav="${r.id}" data-top>${r.label}</a><button class="nv-x" type="button" data-nvx aria-expanded="false" aria-controls="nv-${r.id}" aria-label="${r.label}: ${r.children.map(l=>l.label).join(", ")}">${at.down}</button>
        <div class="menu pane nv-p" id="nv-${r.id}" data-nvp hidden>${r.children.map(l=>`<a href="${l.route}" data-sub="${l.id}"><b>${l.label}</b><small>${l.line}</small></a>`).join("")}</div></div>`:`<a href="${r.route}" data-nav="${r.id}" data-top>${r.label}</a>`).join("")}</nav>
      <div class="hd-r">
        <a class="nav-m" href="#/membership" data-nav="membership">Membership</a>
        <div class="snd" data-sndhost></div>
        <div class="thm"><button class="gb gc small" type="button" data-theme-btn aria-pressed="false" aria-label="Dark mode" title="Dark mode">${at.moon}</button></div>
        <div class="cartw"${" hidden"}><button class="gb gc small" type="button" data-cartbtn aria-haspopup="dialog" aria-expanded="false" aria-label="Cart">${at.bag}<span class="cart-n" data-cartn hidden></span></button>
          <div class="menu pane cart-p" role="dialog" aria-label="Cart" data-cartp hidden></div></div>
        <a class="gb gc small" href="#/account" aria-label="Account" data-nav="account">${at.user}</a>
      </div>
    </header>
    <button class="guide-hit" type="button" data-guide aria-label="Talk with the Orb"></button>
    <div class="caption" data-caption aria-live="polite"></div>`,c.querySelectorAll("[data-nvg]").forEach(r=>{let l=r.querySelector("[data-nvx]"),S=r.querySelector("[data-nvp]"),v=0,M=(E,te)=>{clearTimeout(v),S.hidden!==!E&&(S.hidden=!E,l.setAttribute("aria-expanded",String(E)),r.classList.toggle("open",E),te&&E&&S.querySelector("a")?.focus())};l.addEventListener("click",()=>{M(S.hidden),t.sfx(S.hidden?"close":"open")}),l.addEventListener("keydown",E=>{E.key==="ArrowDown"&&(E.preventDefault(),M(!0,!0))}),r.addEventListener("pointerenter",E=>{E.pointerType==="mouse"&&M(!0)}),r.addEventListener("pointerleave",E=>{E.pointerType==="mouse"&&(v=setTimeout(()=>M(!1),220))}),r.addEventListener("keydown",E=>{E.key==="Escape"&&!S.hidden&&(M(!1),l.focus())}),S.addEventListener("keydown",E=>{let te=[...S.querySelectorAll("a")],re=te.indexOf(document.activeElement);(E.key==="ArrowDown"||E.key==="ArrowUp")&&(E.preventDefault(),te[(re+(E.key==="ArrowDown"?1:te.length-1))%te.length].focus())}),r.addEventListener("focusout",E=>{r.contains(E.relatedTarget)||M(!1)}),document.addEventListener("pointerdown",E=>{r.contains(E.target)||M(!1)}),addEventListener("hashchange",()=>M(!1))});let d=c.querySelector("[data-hd]"),h=c.querySelector("[data-caption]"),p=c.querySelector("[data-guide]"),m=c.querySelector("[data-theme-btn]"),F=()=>{let r=ir()==="dark";m.setAttribute("aria-pressed",String(r)),m.innerHTML=r?at.sun:at.moon,m.setAttribute("aria-label","Dark mode"),m.title=r?"Switch to light mode":"Switch to dark mode"};F(),m.addEventListener("click",()=>{ln(ir()==="dark"?"light":"dark"),We(`theme_${ir()}`)}),document.addEventListener("lightorb:theme",()=>{F(),$e.name!=="studio"&&(D(),g.reapply())});let Q=Pi(c.querySelector("[data-sndhost]"),t.store,{buttonClass:"gb gc small",onToggle:(r,l)=>{We(`${r==="voice"?"voice":"sound"}_${l?"on":"off"}`),r==="sfx"&&l&&t.sfx("select")}}),n=0;t.store.on((r,l)=>{l.voice&&!t.voiceOn&&(he=null,Ne())});let A=()=>{t.voiceOn||t.toggle("voice",!0)},O=0,W=0,$=null,q="a,button,input,select,textarea,summary,[role=slider],[role=tab],.arc-c,.dg-c,.file,.tcard",U="h1,h2,h3,p,li,dt,dd,blockquote,figcaption,label",R=NaN,N=null;function x(){let r=()=>{h.style.top="",h.style.bottom="",h.style.left=""};if(!h.classList.contains("on")){Number.isFinite(R)&&(r(),R=NaN);return}r();let l=h.getBoundingClientRect(),S=l.width,v=l.height,M=8,E=innerWidth,te=l.top,re=l.left+S/2,I=(d.getBoundingClientRect().bottom||0)+M,fe=(window.visualViewport?.height??innerHeight)-10,de=Oe=>[...document.querySelectorAll(Oe)].filter(Je=>Je!==h&&!h.contains(Je)&&Je!==p&&!Je.closest("[hidden],[inert]")).map(Je=>Je.getBoundingClientRect()).filter(Je=>Je.width&&Je.height&&Je.bottom>I&&Je.top<fe),k=de(q),L=de(U),K=N&&N.vis>.5?[{top:N.y-N.d/2,bottom:N.y+N.d/2,left:N.x-N.d/2,right:N.x+N.d/2}]:[],we=[...new Set([re,E-S/2-12,S/2+12].map(Oe=>Math.round(Math.min(E-S/2-12,Math.max(S/2+12,Oe)))))],ue=(Oe,Je)=>{let Qt=Oe.filter(nt=>nt.right>Je-S/2-M&&nt.left<Je+S/2+M),za=nt=>Qt.every(pt=>nt+v+M<=pt.top||nt-M>=pt.bottom);return za(te)?te:[I,fe-v,...Qt.flatMap(nt=>[nt.bottom+M,nt.top-M-v])].filter(nt=>nt>=I&&nt+v<=fe&&za(nt)).sort((nt,pt)=>Math.abs(nt-te)-Math.abs(pt-te))[0]},xe=null;for(let Oe of[[...k,...L,...K],[...k,...L],k]){for(let Je of we){let Qt=ue(Oe,Je);if(Qt!==void 0){xe={x:Je,y:Qt};break}}if(xe)break}if(!xe||Math.abs(xe.y-te)<.5&&Math.abs(xe.x-re)<.5){R=NaN;return}h.style.top=`${xe.y.toFixed(1)}px`,h.style.bottom="auto",h.style.left=`${xe.x}px`,R=xe.y}let y=0,C=()=>{y||(y=requestAnimationFrame(()=>{y=0,x()}))};new MutationObserver(C).observe(h,{attributes:!0,attributeFilter:["class"],childList:!0,characterData:!0,subtree:!0}),addEventListener("resize",C),window.visualViewport?.addEventListener("resize",C);let Z=(()=>{let r=document.createElement("canvas").getContext("2d");return l=>(r.font=getComputedStyle(h).font,r.measureText(l).width)})();function Y(r){let l=Math.min(560,innerWidth*.84)-34,S=[],v="";for(let M of String(r).split(/\s+/).filter(Boolean)){let E=v?`${v} ${M}`:M;v&&Z(E)>l?(S.push(v),v=M):v=E}return v&&S.push(v),S.length?S:[""]}function J(r,{follow:l=!1}={}){let S=Y(r),v=Math.max(1,String(r).length),M=++W,E=performance.now(),te=Math.max(3200,v*70),re=-1;clearTimeout(O),h.classList.add("on");let I=()=>{if(M!==W)return;let de=l&&t.playing&&t.state.kind==="guide"&&t.state.clip!=="speech"&&t.position>0?t.position:(performance.now()-E)/te,k=0,L=0;for(;L<S.length-1&&(k+=S[L].length+1,!(de*v<k));L++);L!==re&&(re=L,h.textContent=S[L]),de<1||l&&t.playing&&t.state.kind==="guide"?requestAnimationFrame(I):O=setTimeout(()=>{M===W&&(h.classList.remove("on"),$=null,ie())},900)};I()}function ie(){let r=t.prefs;i.querySelectorAll("[data-enable]").forEach(S=>{S.hidden=r.master});let l=t.state.clip?.split(".")[0];if(Nr[l]&&l!=="home"){let S=t.state.kind==="guide"&&["playing","loading"].includes(t.state.status);S&&$!==l?($=l,J(Nr[l],{follow:!0})):!S&&$===l&&($=null,W++,h.classList.remove("on"))}}t.on(ie),t.on(()=>{!t.playing&&t.state.status!=="loading"&&document.querySelectorAll("[data-speaking]").forEach(r=>r.removeAttribute("data-speaking"))});let ce=c.querySelector("[data-cartbtn]"),ee=c.querySelector("[data-cartp]"),ne=c.querySelector("[data-cartn]");function le(){let r=ea.items();ne.hidden=!r.length,ne.textContent=r.length,ee.innerHTML=`<p class="kicker">Cart</p>${r.length?`<ul class="cart-l">${r.map(l=>`<li><a href="${l.href}">${ke(l.name)}</a><button class="pill" type="button" data-cartrm="${l.id}">Remove</button></li>`).join("")}</ul>`:'<p class="note">Your cart is empty.</p>'}
      ${ma.canCheckout(r)?'<button class="gb primary" type="button" data-checkout>Checkout</button>':'<button class="gb primary" type="button" disabled>Checkout opens soon</button><p class="note">No payment can be taken yet; items stay in this browser.</p>'}`,ee.querySelector("[data-checkout]")?.addEventListener("click",()=>{let l=ma.checkout(ea.items());l&&ea.remove(l)}),ee.querySelectorAll("[data-cartrm]").forEach(l=>l.addEventListener("click",()=>{ea.remove(l.dataset.cartrm),t.sfx("close")}))}ea.on(le),le();let Ie=r=>{ee.hidden=!r,ce.setAttribute("aria-expanded",String(r)),t.sfx(r?"open":"close")};ce.addEventListener("click",()=>Ie(ee.hidden)),document.addEventListener("pointerdown",r=>{!ee.hidden&&!r.target.closest(".cartw")&&Ie(!1)}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!ee.hidden&&(Ie(!1),ce.focus())});let qe={emission:1,voice:jo.voice},D=()=>{qe=_r(a,Wt(jo)),a.setRibbon?.(0)};D();let f=()=>({home:"home",products:"products",templates:"templates",studio:"studio",sound:"sound"})[$e.name],T=()=>matchMedia("(pointer: coarse)").matches&&Math.min(innerWidth,innerHeight)<820,B=r=>{try{return localStorage.getItem(r)}catch{return null}},j=r=>{try{localStorage.setItem(r,"1")}catch{}},z="en",pe=null,me=document.createElement("style");me.textContent=`.orb-ask{position:fixed;left:50%;bottom:calc(18px + env(safe-area-inset-bottom,0px));transform:translate(-50%,6px);z-index:30;display:flex;align-items:center;gap:8px;width:min(420px,calc(100vw - 32px));box-sizing:border-box;
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
@media (pointer:coarse) and (max-width:820px){.caption{font-size:13.5px;line-height:1.35}}`,document.head.append(me);let Me='<svg viewBox="0 0 24 24"><rect x="9" y="3.5" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v2.5"/></svg>',ge='<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5"/></svg>',se=hi("form","orb-ask");se.hidden=!0,se.setAttribute("role","search"),se.setAttribute("aria-label","Ask the Orb"),se.innerHTML=`<span class="st" data-st aria-live="polite"></span><input type="text" data-q placeholder="${z==="es"?"Pregunta a la Orb\u2026":"Ask the Orb\u2026"}" aria-label="Ask the Orb" autocomplete="off" enterkeyhint="send" maxlength="300">
    <button type="button" data-mic aria-label="Speak" aria-pressed="false"${ti?"":" hidden"}>${Me}</button><button type="submit" aria-label="Send">${ge}</button>`,c.append(se);let je=se.querySelector("[data-st]"),De=se.querySelector("[data-q]"),Ke=se.querySelector("[data-mic]");p.setAttribute("aria-label","Talk with the Orb");let St=!ti,it=()=>{se.hidden=!1,document.body.classList.add("orb-asking"),requestAnimationFrame(()=>se.classList.add("on"))},rt=()=>{Le++,Qe(),se.classList.remove("on"),se.hidden=!0,document.body.classList.remove("orb-asking"),De.blur()};function Qe(){if(be){let r=be;be=null,r.abort()}Ke.setAttribute("aria-pressed","false"),je.textContent=""}function ve(){St||be||(t.stop(),pe=null,je.textContent=z==="es"?"Escuchando\u2026":"Listening\u2026",Ke.setAttribute("aria-pressed","true"),be=Yn({lang:z==="es"?"es-ES":/^en/i.test(navigator.language)?navigator.language:"en-US",onresult:r=>{je.textContent="",De.value=r},onerror:r=>{be=null,Ke.setAttribute("aria-pressed","false"),je.textContent="",(r==="not-allowed"||r==="service-not-allowed"||r==="unsupported")&&(We("mic_denied"),St=!0,Ke.hidden=!0,_e(or("reply.mic",z),"answer"),T()||De.focus())},onend:r=>{be&&(be=null,Ke.setAttribute("aria-pressed","false"),je.textContent="",De.value="",r.trim()&&$t(r))}}),be||(Ke.setAttribute("aria-pressed","false"),je.textContent=""))}Ke.addEventListener("click",()=>{be?Qe():ve()}),De.addEventListener("input",()=>{be&&Qe()}),se.addEventListener("submit",r=>{r.preventDefault();let l=De.value.trim();De.value="",Qe(),l&&(We("orb_typed"),$t(l))}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!se.hidden&&rt()}),document.addEventListener("pointerdown",r=>{!se.hidden&&!r.target.closest(".orb-ask,[data-guide]")&&!De.value&&!be&&rt()});let be=null,he=null,Ae=null;p.addEventListener("pointerdown",r=>{Ae={x:r.clientX,y:r.clientY}}),p.addEventListener("click",()=>{if(A(),Ce=performance.now()/1e3,We("orb_tap"),be){Qe();return}let r=Ae&&document.elementsFromPoint(Ae.x,Ae.y).map(Ge).find(Boolean);if(Ae=null,r){P(r);return}if(t.playing||t.state.status==="loading"){Ne();return}t.sfx("select"),it(),j("lo:orb:greet"),Ne(),_e(Nt(),"answer")});function Ne(){n++,Le++,Qe(),t.stop(),pe=null,Ue=null,tt=null,ye(""),document.querySelectorAll("[data-speaking]").forEach(r=>r.removeAttribute("data-speaking"))}document.addEventListener("keydown",r=>{r.key==="Escape"&&(t.playing||t.state.status==="loading")&&Ne()});let Fe="h1,h2,h3,h4,p,blockquote,figcaption,li,dt,dd,[data-speak]",He="a,button,[data-href],[role=button]:not([data-speak]),[role=tab],summary,label,input,select,textarea,[contenteditable]",Pt=`${He},form,.hd,.sndc,.orb-ask,.caption,[data-ins],[data-rail],[data-view],[data-modal],[data-hud],.menu,.cart-p,.arc,.dg`,et=r=>{let l=(r.getAttribute("aria-label")||r.innerText||r.textContent||"").replace(/\s+/g," ").trim();return/^\S+\.(m4a|wav|mp3|json|js|html|zip)$/i.test(l)?"":l},Ge=r=>{let l=r?.closest?.(Fe);return l&&i.contains(l)&&!l.closest(Pt)&&!l.querySelector("input,select,textarea,button")&&et(l).length>1&&et(l).length<900?l:null},Ze=r=>{let l=2166136261;for(let S=0;S<r.length;S++)l^=r.charCodeAt(S),l=Math.imul(l,16777619);return`text.${(l>>>0).toString(36)}`},Ue=null,tt=null;function P(r,l=et(r)){if(l){if(tt===r&&(t.playing||t.state.status==="loading")){Ne();return}A(),Ne(),We("words_spoken"),tt=r,Ue=Ze(l),r.setAttribute("data-speaking",""),_e({id:Ue,text:l,lang:"en"},"answer")}}i.addEventListener("click",r=>{if(r.target.closest?.(He)||String(getSelection?.()??"").trim())return;let l=Ge(r.target);l&&P(l)}),i.addEventListener("keydown",r=>{if((r.key==="Enter"||r.key===" ")&&!r.altKey&&r.target.matches?.(Fe)&&Ge(r.target)===r.target&&(r.preventDefault(),P(r.target)),r.key==="Enter"&&r.altKey&&r.target.closest?.("a,button")){r.preventDefault();let l=r.target.closest("a,button");P(l,et(l))}});let H=()=>i.querySelectorAll("h1,h2,h3,blockquote p,[data-speak]").forEach(r=>{Ge(r)===r&&!r.hasAttribute("tabindex")&&r.setAttribute("tabindex","0")}),V=null;i.addEventListener("pointerover",r=>{let l=r.pointerType==="mouse"&&!r.target.closest?.(He)?Ge(r.target):null;l!==V&&(V?.classList.remove("rd"),V=l,l?.classList.add("rd"))}),i.addEventListener("pointerleave",()=>{V?.classList.remove("rd"),V=null});let oe=null,ae=!1;addEventListener("pointerdown",r=>{let l=r.target.closest?.("a,button,[data-href],.arc-c,.dg-c");!l||l.closest("[data-guide],[data-sound],.sndc,.sx,.orb-ask")||!et(l)||l.querySelector("svg")&&!l.innerText.trim()||(oe={t:l,x:r.clientX,y:r.clientY,timer:setTimeout(()=>{ae=!0,P(l,et(l))},520)})},!0);let Se=r=>{oe&&(r.type!=="pointermove"||Math.hypot(r.clientX-oe.x,r.clientY-oe.y)>8)&&(clearTimeout(oe.timer),oe=null)};if(addEventListener("pointermove",Se,!0),addEventListener("pointerup",Se,!0),addEventListener("pointercancel",Se,!0),addEventListener("click",r=>{ae&&(ae=!1,r.preventDefault(),r.stopPropagation())},!0),addEventListener("contextmenu",r=>{(ae||oe)&&r.preventDefault()},!0),!B("lo:orb:greet")){let r=l=>{if(l.target.closest?.("[data-guide],.orb-ask,.sndc")||(removeEventListener("pointerdown",r,!0),!T()))return;let S=n;setTimeout(()=>{S!==n||!t.voiceOn||B("lo:orb:greet")||pe||be||(j("lo:orb:greet"),_e(or("reply.greet",z),"answer"))},900)};addEventListener("pointerdown",r,!0)}function _e(r,l="answer"){if(!r?.text||!t.voiceOn)return;J(r.text,{follow:!0}),Ce=performance.now()/1e3,pe=l,t.say(r.text,{id:r.lang==="es"?void 0:r.id??void 0,lang:r.lang,onend:()=>{pe===l&&(pe=null)}})||(pe=null)}let Xe=[],Le=0,Re=(r,l)=>{for(Xe.push({role:r,content:l});Xe.length>12;)Xe.shift();for(;Xe.length&&Xe[0].role!=="user";)Xe.shift()};function Dt(){let r=Ft(),l=r.name==="products"&&r.id?ra.find(S=>S.id===r.id):null;return{route:location.hash||"#/",title:document.title,presentation:Nt("en").text,product:l?.name,variant:l?r.query.variant||(l.id==="orb"?"clear":void 0):void 0,lang:z}}async function $t(r){z=oo(r,z);let l=Gn(r,{here:$e.name,presentation:Nt,lang:z});if(We(l.intent==="fallback"?"orb_fallback":"orb_command",{intent:l.intent||(l.stop?"stop":l.back?"back":l.go?`go:${l.go.split("?")[0].replace("#/","")}`:"answer")}),!l.command&&l.intent!=="hello"&&Un()&&r.trim()){let S=++Le;ye("\u2026"),Re("user",r.trim());try{let v=await Kn(Xe.slice(),Dt());return S!==Le?void 0:(Re("assistant",v.say),ot({say:v.say,go:v.go,lang:oo(v.say,z)}))}catch{if(S!==Le)return;Xe.pop()}}ot(l)}function ot(r){if(r.stop){t.stop(),pe=null,ye("");return}if(r.back&&history.back(),r.go&&location.hash!==r.go){he=r.say?{text:r.say,id:r.id,lang:r.lang}:null,location.hash=r.go;return}r.say?_e({text:r.say,id:r.id,lang:r.lang},"answer"):r.go||ye("")}function ye(r){clearTimeout(O),W++,h.textContent=r,h.classList.toggle("on",!!r),r||ie()}let Ce=-99,Te=0,Nt=(r=z)=>en(r,$e.name,$e.id);function _t(){_e(Nt(),"arrival")}let Ot=!1,ft=()=>i.scrollTop>innerHeight*.25;function yt(){if(!t.voiceOn||Ot||B("lo:orb:greet")||pe==="answer"||be||ft())return;Ot=!0,j("lo:orb:greet");let r=n,l=or("reply.greet",z),S=()=>{r===n&&t.voiceOn&&$e.name==="home"&&!pe&&!be&&!ft()&&_e(l,"arrival")};if(navigator.userActivation&&!navigator.userActivation.hasBeenActive){J(l.text);let v=M=>{removeEventListener("pointerdown",v,!0),removeEventListener("keydown",v,!0),!M.target.closest?.("[data-guide],.orb-ask,.sndc")&&setTimeout(S,250)};addEventListener("pointerdown",v,!0),addEventListener("keydown",v,!0);return}S()}function Gt(r){let l=he,S=n;he=null,be&&!l&&Qe(),setTimeout(()=>{if(!(S!==n||location.hash!==r||!t.voiceOn)){if(l){_e(l,"answer");return}$e.name==="home"&&yt()}},450)}let $e={name:""},dt=null,Et=[],Ma={products:"Products",templates:"Templates",studio:"Studio",sound:"Sound",membership:"Membership",account:"Account",signin:"Sign in",signup:"Sign up",design:"Web Design",about:"About",changelog:"What\u2019s new",...ss};function Ft(){let[r,l=""]=(location.hash.replace(/^#/,"")||"/").split("?"),S=r.split("/").filter(Boolean),v=Object.fromEntries(new URLSearchParams(l));return{name:gi[S[0]]||S[0]||"home",id:S[1]||null,query:v,raw:S[0]}}function xa(){let r=Ft();if(r.raw&&gi[r.raw]){location.replace(`#/${gi[r.raw]}${r.id?"/"+r.id:""}`);return}if(!["home","products","templates","studio","sound","membership","account","signin","signup","privacy","terms","licence","design","about","changelog"].includes(r.name)){location.replace("#/");return}Et.forEach(M=>M()),Et=[],lt=null,dt&&r.name!=="studio"&&(dt.leave(),dt=null),g.hide(),kr(),e.removeBackdrop(kt.canvas),D();let l=$e.name;$e=r,n++,Le++,document.title=$e.name==="home"?"The Light Orb":`${Ma[$e.name]??$e.name} \xB7 The Light Orb`,i.className=`lo r-${$e.name}`,document.body.dataset.route=$e.name,Ni(),$e.name==="studio"&&l!=="studio"&&We("studio_open"),c.querySelectorAll("[data-nav]").forEach(M=>M.toggleAttribute("aria-current",(Fi[M.dataset.nav]??[M.dataset.nav]).includes($e.name)||M.dataset.nav==="account"&&["account","signin","signup"].includes($e.name))),c.querySelectorAll("[data-sub]").forEach(M=>M.toggleAttribute("aria-current",M.dataset.sub===$e.name)),l&&Ne(),({home:La,products:$e.id?bo:gr,templates:$e.id?Gs:Ws,studio:Ks,sound:xi,membership:()=>ts(i,At),account:()=>Ka(i,At,$e.id),signin:()=>ri(i,At,"in"),signup:()=>ri(i,At,"up"),privacy:()=>so(i,At,"privacy"),terms:()=>so(i,At,"terms"),licence:()=>so(i,At,"licence"),changelog:()=>Os(i,At),design:()=>Ts(i,At,$e.query),about:()=>qs(i,At)}[$e.name]??La)(),Vr(i),H();let v=Ja.get(`lo:scroll:${location.hash}`,null);i.scrollTop=v??0,Gt(location.hash),l&&i.focus({preventScroll:!0})}let va=-1e9;i.addEventListener("scroll",C,{passive:!0}),addEventListener("hashchange",C),i.addEventListener("scroll",()=>{va=performance.now(),Ja.set(`lo:scroll:${location.hash}`,i.scrollTop),$e.name==="home"&&pe==="arrival"&&ft()&&(t.stop(),pe=null,ye("")),(T()||innerWidth<700)&&h.classList.contains("on")&&!t.playing&&i.scrollTop>40&&ye("")},{passive:!0}),addEventListener("hashchange",xa),c.querySelector("[data-home]").addEventListener("click",r=>{r.preventDefault(),Ja.set("lo:scroll:#/",0),$e.name==="home"?i.scrollTo({top:0,behavior:o?"auto":"smooth"}):location.hash="#/"});let At={page:i,audio:t,ICON:at,esc:ke,store:vt,go:r=>{location.hash=r},flash:J,api:e,product:g,footer:()=>X()},ut=Ja.get("lo:sel",0),Ct=[],sa=new URLSearchParams(location.search).get("sel");sa&&Ja.set("lo:selv",sa);let Ut=Ja.get("lo:selv","arc")==="grid";function La(){if(i.innerHTML=`
      <section class="wel" aria-labelledby="hello">
        <div class="wel-copy ${o?"shown":"reveal"}" data-welcopy>
          <h1 id="hello" class="wel-h"><span>Hello.</span></h1>
          <p class="wel-line">Digital pieces, website templates, and custom web design. Made to be explored.</p>
          <p class="wel-offer" aria-label="What is here"><a href="#/products">Interactive digital pieces</a><span aria-hidden="true">\xB7</span><a href="#/templates">Website templates</a><span aria-hidden="true">\xB7</span><a href="#/design">Custom web design</a></p>
          <a class="gb primary wel-go" href="#select" data-go>Let\u2019s go</a>
        </div>
        <div class="wel-ctl"><button class="gb small" type="button" data-enable>${at.sound}<span>Enable sound</span></button><a class="tl" href="intro.html?replay">Replay intro</a></div>
      </section>
      <section class="qt" aria-label="Quotation">
        <figure class="qt-fig" data-qt><blockquote><p data-speak>${mr.text}</p></blockquote>
          <figcaption>${mr.author} \xB7 <a href="${mr.source}" rel="noopener" target="_blank">${mr.work}</a></figcaption></figure>
      </section>
      <section class="sel${Ut?" sel-grid":""}" id="select" aria-labelledby="sel-t">
        <h2 id="sel-t" class="sel-t"><span data-speak tabindex="0">Where would you like to begin?</span></h2>
        ${Ut?`<nav class="dg" aria-label="Destinations">${Aa.map((r,l)=>`<a class="dg-c" href="${r.route}" data-c="${l}">${Jt(r)}<span class="dg-t">${r.label}</span><span class="dg-s">${r.line}</span></a>`).join("")}</nav>`:`<div class="arc" data-arc role="group" aria-roledescription="carousel" aria-label="Destinations">
          ${Aa.map((r,l)=>`<a class="arc-c" href="${r.route}" data-c="${l}" aria-label="${r.label}: ${r.line}">${Jt(r,"arc-img")}<span class="arc-l">${r.label}</span><span class="arc-s">${r.line}</span></a>`).join("")}
        </div>
        <div class="arc-ctl"><button class="gb gc small" type="button" data-step="-1" aria-label="Previous">${at.prev}</button>
          <div class="segbar" role="tablist" aria-label="Choose destination">${Aa.map((r,l)=>`<button class="pill" role="tab" type="button" data-dot="${l}">${r.label}</button>`).join("")}</div>
          <button class="gb gc small" type="button" data-step="1" aria-label="Next">${at.next}</button></div>`}
        <p class="sel-more">Inside Products: <a href="#/products">Digital Pieces</a><span aria-hidden="true">\xB7</span><a href="#/sound">Sound</a><span aria-hidden="true">\xB7</span><a href="#/studio">Studio</a></p>
      </section>
      ${X()}`,Ct=[...i.querySelectorAll("[data-c]")],i.querySelector("[data-go]").addEventListener("click",r=>{r.preventDefault(),t.sfx("select"),i.scrollTo({top:i.scrollTop+i.querySelector("#sel-t").getBoundingClientRect().top-110,behavior:o?"auto":"smooth"})}),i.querySelector("[data-enable]").addEventListener("click",()=>{We("sound_enable"),t.set({guide:!0,sfx:!0}),t.sfx("confirm"),T()||_t()}),Ut)Ct.forEach((r,l)=>{r.addEventListener("pointerenter",()=>wt(l)),r.addEventListener("focus",()=>wt(l)),r.addEventListener("click",()=>{t.sfx("open"),We("destination",{id:Aa[l].id})})}),jt(!0);else{i.querySelectorAll("[data-step]").forEach(l=>l.addEventListener("click",()=>wt(ut+ +l.dataset.step))),i.querySelectorAll("[data-dot]").forEach(l=>l.addEventListener("click",()=>wt(+l.dataset.dot))),Ct.forEach((l,S)=>l.addEventListener("click",v=>{if(u){v.preventDefault();return}S!==ut?(v.preventDefault(),wt(S)):(t.sfx("open"),We("destination",{id:Aa[S].id}))}));let r=i.querySelector("[data-arc]");r.addEventListener("keydown",l=>{l.key==="ArrowRight"&&(wt(ut+1),l.preventDefault()),l.key==="ArrowLeft"&&(wt(ut-1),l.preventDefault())}),w(r,l=>wt(ut+l),()=>jt()),jt(!0)}ie()}function ya(r){let l=String(Aa.indexOf(r)+1).padStart(2,"0");return`<span class="arc-img cv cv-${r.id}"><span class="cv-grain"></span><span class="cv-n">${l}</span><span class="cv-t">${r.label}</span></span>`}function Jt(r,l=""){let S={products:'<img class="lo-light-only" src="./media/cards/products.jpg" alt="" decoding="async" fetchpriority="low"><img class="lo-dark-only" src="./media/cards/products-dark.jpg" alt="" decoding="async" loading="lazy" fetchpriority="low">',templates:'<span class="dg-win"><img class="lo-light-only" src="./media/templates/the-light-orb.cover.jpg" alt="" decoding="async" fetchpriority="low"><img class="lo-dark-only" src="./media/cards/templates-dark.jpg" alt="" decoding="async" loading="lazy" fetchpriority="low"></span>',studio:'<img src="./media/cards/orb-dark.jpg" alt="" decoding="async" fetchpriority="low">',design:As,sound:`<span class="cv-wave">${[.3,.55,.8,.45,.95,.6,.35,.7,.5,.85,.4,.65,.3,.5].map(v=>`<i style="--h:${v}"></i>`).join("")}</span>`}[r.id];return`<span class="dg-img dg-${r.id} ${l}">${S}</span>`}function wt(r,l=!0){let S=ba(r,0,Aa.length-1);S!==ut&&(ut=S,Ja.set("lo:sel",ut),l&&t.sfx("detent"),a.nudge?.(.5)),jt()}function jt(r){if(Ut){Ct.forEach((v,M)=>v.classList.toggle("on",M===ut));return}let l=Ct[0]?.offsetWidth||300,S=l*.7;Ct.forEach((v,M)=>{let E=M-ut+la/(S*1.2),te=Math.abs(E);v.style.transition=r||b?"none":"",v.style.transform=`translateX(${E*S}px) translateZ(${-te*150}px) rotateY(${ba(-E*30,-48,48)}deg) scale(${1-Math.min(te,2)*.1})`,v.style.zIndex=String(10-Math.round(te)),v.classList.toggle("on",M===ut),v.tabIndex=M===ut?0:-1,v.setAttribute("aria-current",M===ut?"true":"false")}),i.querySelectorAll("[data-dot]").forEach((v,M)=>v.setAttribute("aria-selected",String(M===ut))),i.querySelectorAll("[data-step]").forEach(v=>{v.disabled=+v.dataset.step<0&&ut===0||+v.dataset.step>0&&ut===Aa.length-1})}let la=0,b=!1,u=!1;function w(r,l,S){let v=0,M=0,E=null,te=null,re=0,I=0,fe=null;r.addEventListener("touchstart",K=>{let we=K.touches[0];re=we.clientX,I=we.clientY,fe=null},{passive:!0}),r.addEventListener("touchmove",K=>{if(K.touches.length>1)return;let we=K.touches[0],ue=we.clientX-re,xe=we.clientY-I;!fe&&Math.hypot(ue,xe)>6&&(fe=Math.abs(ue)>Math.abs(xe)?"x":"y"),fe==="x"&&K.cancelable&&K.preventDefault()},{passive:!1}),r.addEventListener("touchend",()=>{setTimeout(()=>{fe=null},0)},{passive:!0}),r.addEventListener("pointerdown",K=>{K.button||(v=K.clientX,M=K.clientY,E=K.pointerId,te=null,u=!1)}),r.addEventListener("pointermove",K=>{if(K.pointerId!==E)return;let we=K.clientX-v,ue=K.clientY-M;!te&&Math.hypot(we,ue)>8&&(te=fe??(Math.abs(we)>Math.abs(ue)?"x":"y"),te==="x"&&(r.setPointerCapture(E),b=!0)),te==="x"&&(la=we,u=!0,S())});let de=K=>{if(K.pointerId===E){if(E=null,b=!1,te==="x"){let we=la<-60?1:la>60?-1:0;la=0,l(we),S(),setTimeout(()=>{u=!1},0)}te=null}};r.addEventListener("pointerup",de),r.addEventListener("pointercancel",de),r.addEventListener("dragstart",K=>K.preventDefault());let k=0,L=0;r.addEventListener("wheel",K=>{if(Math.abs(K.deltaX)<=Math.abs(K.deltaY))return;K.preventDefault();let we=performance.now();we<L||(k+=K.deltaX,Math.abs(k)>60&&(l(Math.sign(k)),k=0,L=we+380))},{passive:!1})}function G(r){return`<nav class="ptabs" aria-label="Products">${Co[0].children.map(l=>`<a href="${l.route}"${l.id===r?' aria-current="page"':""}>${l.label}</a>`).join("")}</nav>`}function X(){return`<footer class="ft"><a href="#/" class="wm small" aria-label="The Light Orb \u2014 Home">${oi}</a>
      <nav aria-label="Footer"><a href="#/design">Web Design</a><a href="#/about">About</a><a href="#/sound">Sound</a><a href="#/membership">Membership</a><a href="#/changelog">What\u2019s new</a><a href="#/account">Account</a>${vt.profile()?.email?"":'<a href="#/signup">Join early access</a>'}<a href="intro.html?replay">Replay intro</a><a href="mailto:trescarla@gmail.com">Contact</a></nav>
      <nav aria-label="Legal"><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a><a href="#/licence">Licence</a></nav>
      <span class="ft-n">${"Early access \xB7 free to explore while it takes shape."}</span>
      ${["membership","signup","signin"].includes($e.name)||vt.profile()?.email?"":vr("footer",{compact:!0})}</footer>`}let Pe=0,Ve={"orb-slider":Tr,"orb-wave":[{id:"gentle",name:"Gentle",line:"Wide, soft ripples.",p:{strength:.6,scale:110}},{id:"classic",name:"Classic",line:"The ripple from the intro.",p:{strength:1,scale:70}},{id:"deep",name:"Deep",line:"Tight, strong rings.",p:{strength:1.6,scale:45}},{id:"rain",name:"Rain",line:"Many small, quick rings, like drops on water.",p:{strength:.5,scale:28}}],"background-pack":[{id:"classic",name:"Classic",line:"The horizon as in the intro.",p:{horizon:.3,lamp:.9}},{id:"wide",name:"Wide floor",line:"A low horizon and more floor.",p:{horizon:.18,lamp:.9}},{id:"high",name:"High horizon",line:"A high horizon and more sky.",p:{horizon:.45,lamp:.9}},{id:"lantern",name:"Lantern",line:"A brighter lamp around the Orb in the dark world.",p:{horizon:.3,lamp:1.6}}],"crystal-controls":Tr},gt=r=>r?.code==="kit",Bt=(r,l,S)=>`<iframe class="kit-frame" data-kit="${r}|${l}|${S?1:0}" title="${S?"Preview":"Live preview"}"${S?' tabindex="-1" aria-hidden="true" loading="lazy"':""}></iframe>`,da=r=>r.querySelectorAll("[data-kit]").forEach(l=>{let[S,v,M]=l.dataset.kit.split("|");l.srcdoc=qr(S,v,{mini:M==="1"})}),bt=[...li.map(r=>({id:`obj-${r.id}`,obj:r.id,fam:"obj",ext:".obj",cat:r.cat,name:r.name,kind:r.line})),...Wo.map(r=>({id:r.id,live:r.id,fam:"live",ext:".orb",cat:r.cat,name:r.name,kind:r.line,sphere:r.sphere,badge:r.badge,href:`#/products/${r.id}`})),...Vt.map(r=>({id:`orb-${r.id}`,fam:"orb",variant:r.id,sphere:r.id,ext:".orb",cat:"Orbs",name:r.id==="clear"?"The Orb":`The Orb \xB7 ${r.name}`,kind:r.line,href:`#/products/orb${r.id==="clear"?"":`?variant=${r.id}`}`})),...Bi.filter(r=>r.id!=="orb").flatMap(r=>Ve[r.id].map((l,S)=>({id:S?`${r.id}-${l.id}`:r.id,fam:r.id,variant:S?l.id:null,ext:gt(r)?".html":".kit",cat:gt(r)?"Controls":"Effects",name:`${r.name} \xB7 ${l.name}`,kind:l.line,mini:gt(r)?Bt(r.id,l.id,!0):null,cls:l.cls,dark:l.dark,img:gt(r)?null:`./media/products/${r.id}.jpg`,pos:r.id==="background-pack"?`50% ${Math.round(30+(l.p.horizon-.3)*160)}%`:null,href:`#/products/${r.id}${S?`?variant=${l.id}`:""}`})))],Be=(()=>{let r=bt.filter(ue=>ue.fam==="orb"),l=bt.filter(ue=>gt(ka(ue.fam))),S=bt.filter(ue=>ue.obj),v={};r.forEach(ue=>(v[Vt.find(xe=>xe.id===ue.variant)?.base??"x"]||=[]).push(ue));let M=Object.values(v),E=[];for(let ue=0;E.length<r.length;ue++)M.forEach(xe=>xe[ue]&&E.push(xe[ue]));let te=[...new Set(l.map(ue=>ue.fam))],re=[];for(let ue=0;re.length<l.length;ue++)te.forEach(xe=>{let Oe=l.filter(Je=>Je.fam===xe)[ue];Oe&&re.push(Oe)});let I={1:"gel",4:"type",9:"lens",15:"mag"},fe={6:"light-orb",12:"voice-orb"},de=bt.length,k=[],L=0,K=0,we=0;for(let ue=0;ue<de;ue++){if(I[ue]){k.push(S.find(Oe=>Oe.obj===I[ue]));continue}if(fe[ue]){k.push(bt.find(Oe=>Oe.live===fe[ue]));continue}we+=re.length,we>=E.length+re.length-we&&k.at(-1)?.fam!==re[K]?.fam&&!gt(ka(k.at(-1)?.fam))&&K<re.length||L>=E.length?(k.push(re[K++]),we-=E.length+re.length):k.push(E[L++])}return k.filter(Boolean).concat(E.slice(L),re.slice(K)).filter((ue,xe,Oe)=>Oe.indexOf(ue)===xe)})(),ct=Kt?"Free to try \xB7 Code on request":"Free \xB7 Early access",ht=(r,l="")=>"";function Ee(r){r.querySelectorAll("[data-cart]").forEach(l=>l.addEventListener("click",S=>{S.preventDefault(),S.stopPropagation();let v=Be.find(E=>E.id===l.dataset.cart)||Js().find(E=>E.id===l.dataset.cart),M=ea.toggle({id:v.id,name:v.name,href:v.href||"#/sound"});M&&We("add_to_cart",{item:v.id}),l.setAttribute("aria-pressed",String(M)),l.querySelector("span").textContent=M?"In cart":"Add to cart",t.sfx(M?"confirm":"select")}))}let Ye=(r,l,S)=>`<button class="gb small" type="button" data-fsave="${r}|${l}" data-name="${ke(S)}" aria-pressed="${vt.isSaved(r,l)}">${at.heart}<span>${vt.isSaved(r,l)?"Saved":"Save"}</span></button>`;function Ht(r,l){r.querySelectorAll("[data-fsave]").forEach(S=>S.addEventListener("click",v=>{v.preventDefault(),v.stopPropagation();let[M,E]=S.dataset.fsave.split("|"),te=vt.toggleSaved(M,E,S.dataset.name,l(M,E));te&&We("save",{kind:M,item:E}),S.setAttribute("aria-pressed",String(te)),S.querySelector("span").textContent=te?"Saved":"Save",t.sfx(te?"confirm":"select")}))}let ca="All";function gr(){let r;try{r=localStorage.getItem("lo.productsView")}catch{}Be.some(k=>k.cat===ca)||(ca="All"),r!=="grid"&&r!=="large"&&(r=matchMedia("(max-width: 700px)").matches?"grid":"large");let l='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg>',S=k=>`<article class="file glass" data-href="${k.href}" data-cat="${k.cat}">
        <div class="file-v" data-sphere="${k.sphere}"><span class="file-ext">${k.ext}</span><span class="lv-badge">${k.live==="voice-orb"?l:""}${k.badge}</span></div>
        <div class="file-m"><h3><a class="file-link" href="${k.href}">${ke(k.name)}</a></h3><p class="file-c">${k.cat}</p><p>${ke(k.kind)}</p><p class="file-p soon">${Vo}</p></div>
        <div class="file-a"><a class="gb small primary" href="${k.href}">${k.live==="voice-orb"?"Try it":"Open"}</a>${Ye("product",k.id,k.name)}</div></article>`,v=k=>k.live?S(k):k.obj?`<article class="file glass" data-obj-card="${k.obj}" data-cat="${k.cat}" tabindex="0">
        <div class="file-v has-obj" data-obj="${k.obj}"><span class="file-ext">${k.ext}</span><span class="file-tag">New</span></div>
        <div class="file-m"><h3><button class="file-link" type="button" data-obj-open="${k.obj}">${ke(k.name)}</button></h3><p class="file-c">${k.cat}</p><p>${ke(k.kind)}</p><p class="file-p soon">${po}</p></div>
        <div class="file-a obj-a"><button class="gb small primary" type="button" data-obj-open="${k.obj}">Open</button>${Ye("product",k.id,k.name)}</div></article>`:`<article class="file glass" data-href="${k.href}" data-cat="${k.cat}">
        <div class="file-v ${k.cls??""}${k.mini?" has-kit":""}${k.dark?" is-dark":""}"${k.sphere?` data-sphere="${k.sphere}"`:""}>${k.img?`<img src="${k.img}" alt="" draggable="false" loading="lazy"${k.pos?` style="object-position:${k.pos}"`:""}>`:""}${k.mini??""}<span class="file-ext">${k.ext}</span></div>
        <div class="file-m"><h3><a class="file-link" href="${k.href}">${ke(k.name)}</a></h3><p class="file-c">${k.cat}</p><p>${ke(k.kind)}</p><p class="file-p">${ct}</p></div>
        <div class="file-a ds-a">${`${k.fam==="orb"||gt(ka(k.fam))?`<a class="gb small" href="${k.href}${k.href.includes("?")?"&":"?"}${Kt?'try=1">Try it \u2014 free':'get=1">Get it free'}</a>`:`<a class="gb small" href="${k.href}">Coming to early access</a>`}`}${Ye("product",k.id,k.name)}<a class="file-studio" href="#/studio?family=${k.fam}${k.variant?`&preset=${k.variant}`:""}">Shape it in Studio ${at.next}</a></div></article>`;i.innerHTML=`
      <section class="dest shop">
        ${G("products")}
        <header class="dh dh-row"><h1>Products</h1><div class="segbar view-tg" role="radiogroup" aria-label="View">${["grid","large"].map(k=>`<button class="pill" role="radio" type="button" data-pview="${k}" aria-checked="${k===r}">${k==="grid"?"Grid":"Large"}</button>`).join("")}</div></header>
        <div class="shop-cats" role="toolbar" aria-label="Filter by category"><div class="segbar">${["All",...["Orbs","Materials","Typography","Interaction","Controls"].filter(k=>Be.some(L=>L.cat===k))].map(k=>`<button class="pill" type="button" data-cat="${k}" aria-pressed="${k===ca}">${k}<span class="n">${k==="All"?Be.length:Be.filter(L=>L.cat===k).length}</span></button>`).join("")}</div></div>
        <div class="file-grid${r==="grid"?" is-compact":""}">${Be.map(v).join("")}</div>
      </section>${X()}`,Ee(i),Ht(i,(k,L)=>Be.find(K=>K.id===L)?.href??"#/products");let M=()=>document.documentElement.dataset.theme==="dark",E=k=>{let[L,K]=k.dataset.kit.split("|");return qr(L,K,{mini:!0,dark:M()})},te=new IntersectionObserver(k=>k.forEach(L=>{let K=L.target;L.isIntersecting?K.srcdoc||(K.srcdoc=E(K)):K.srcdoc&&(K.removeAttribute("srcdoc"),K.src="about:blank")}),{rootMargin:"600px 0px"}),re=new IntersectionObserver(k=>k.forEach(L=>L.target.contentWindow?.postMessage(L.isIntersecting?"lo:play":"lo:pause","*")));i.querySelectorAll(".file-v .kit-frame").forEach(k=>{te.observe(k),re.observe(k),k.addEventListener("load",()=>k.contentWindow?.postMessage("lo:play","*"))});let I=new MutationObserver(()=>i.querySelectorAll(".file-v .kit-frame[srcdoc]").forEach(k=>k.contentWindow?.postMessage(`lo:theme:${M()?"dark":"light"}`,"*")));I.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),Et.push(()=>{te.disconnect(),re.disconnect(),I.disconnect()}),i.querySelectorAll(".file[data-href]").forEach(k=>k.addEventListener("click",L=>{L.defaultPrevented||L.target.closest("button, a")||(t.sfx("open"),location.hash=k.dataset.href)})),i.querySelectorAll("[data-obj]").forEach(k=>{let L=di(k,k.dataset.obj);Et.push(()=>L.dispose())});let fe=k=>{t.sfx("open"),bs(k)};i.querySelectorAll("[data-obj-card]").forEach(k=>{k.addEventListener("click",L=>{L.target.closest("[data-fsave]")||fe(k.dataset.objCard)}),k.addEventListener("keydown",L=>{(L.key==="Enter"||L.key===" ")&&L.target===k&&(L.preventDefault(),fe(k.dataset.objCard))})});let de=()=>{i.querySelectorAll(".shop-cats [data-cat]").forEach(k=>k.setAttribute("aria-pressed",String(k.dataset.cat===ca))),i.querySelectorAll(".file-grid .file").forEach(k=>{k.hidden=ca!=="All"&&k.dataset.cat!==ca})};i.querySelectorAll(".shop-cats [data-cat]").forEach(k=>k.addEventListener("click",()=>{ca=k.dataset.cat,t.sfx("select"),de()})),de(),i.querySelectorAll("[data-sphere]").forEach(k=>{let L=Er(k,k.dataset.sphere,{reduced:o,interactive:r!=="grid"});Et.push(()=>L.dispose())}),i.querySelectorAll("[data-pview]").forEach(k=>k.addEventListener("click",()=>{if(k.dataset.pview===r)return;try{localStorage.setItem("lo.productsView",k.dataset.pview)}catch{}t.sfx("press");let L=scrollY;Et.forEach(K=>K()),Et=[],gr(),scrollTo(0,L)}))}function bo(){let r=zn($e.id);if(r){let I=In(r,{page:i,product:g,audio:t,esc:ke,ICON:at,footer:X,cleanup:Et,track:We});lt={id:r.id,el:I.el,host:I.host,live:!0},Ht(i,()=>`#/products/${r.id}`);return}let l=ka($e.id);if(!l||l.published===!1){location.replace("#/products");return}let S=gt(l),v=l.id==="orb"?Vt:Ve[l.id],M=v.some(I=>I.id===$e.query.variant)?$e.query.variant:v[0].id,E=I=>v.find(fe=>fe.id===I),te=I=>l.id==="orb"?`orb-${I}`:I===v[0].id?l.id:`${l.id}-${I}`;i.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/products">${at.back}<span>Products</span></a>
        <div class="pd-grid">
          <div class="pd-stage glass${S?" has-kit":""}" data-stage>${S?Bt(l.id,M,!1):Ns(l.id)}</div>
          <div class="pd-info info-dark">
            <p class="kicker">${ke(l.id==="orb"?"Sphere":l.kind)}</p><h1>${ke(l.name)}</h1>
            <p class="lede">${ke(vo[l.id].lede)}</p>
            ${v?`<div class="vars"><p class="lbl">Version</p><div class="segbar" role="radiogroup" aria-label="Version">${v.map(I=>`<button class="pill" role="radio" type="button" data-variant="${I.id}" aria-checked="${I.id===M}">${I.name}</button>`).join("")}</div><p class="var-line" data-vline></p></div>`:""}
            <p class="price" data-price>${ct}</p>
            <div class="acts eq">${l.id==="orb"||S?Kt?Gr(l.id,l.name):`<button class="gb small primary" type="button" data-getfree>${at.check}<span>Get it free</span></button>`:'<button class="gb small primary" type="button" data-soon aria-expanded="false" aria-controls="ea-wait"><span>Coming to early access</span></button>'}${Ye("product",te(M),l.name)}</div>
            ${Kt&&(l.id==="orb"||S)?"":l.id==="orb"?Ta():S?Ps():`<div class="ea-wait" id="ea-wait" hidden>${vr("product",{compact:!0,label:`Get an email when ${ke(l.name)} is ready to take, free`})}</div>`}
            ${`<a class="studio-lock" href="#/studio?family=${l.id}">${at.check}<span><b>Customise in Studio</b><small>Open to everyone \xB7 Beta</small></span></a>`}
            <dl class="facts ds-facts"><dt>What it does</dt><dd>${ke(vo[l.id].does)}</dd><dt>You receive</dt><dd>${l.receives.map(ke).join(" \xB7 ")}</dd>
              <dt>Availability</dt><dd>${l.id==="orb"||S?Kt?"Try it: free, right here, no sign-up. Source code: on request \u2014 the demo never needs it.":"Free during early access \u2014 the code is on this page.":"Not available to take yet. Leave your email above to hear when it is."}</dd>
              <dt>Licence</dt><dd>Personal and commercial use; no resale of the source. <a href="#/licence">Read the licence</a></dd>
              <dt>Questions</dt><dd><a href="mailto:trescarla@gmail.com">trescarla@gmail.com</a></dd></dl>
            <details class="acc"><summary>Compatibility and installation</summary><p>${ke(vo[l.id].tech)}</p></details>
          </div>
        </div>
      </section>${X()}`,Ee(i),Ht(i,(I,fe)=>`#/products/${l.id}`),Hs(l.id,i.querySelector("[data-stage]"),M),We("product_open",{product:l.id,variant:M});let re=I=>{lt.sphere?.setKind(I),lt.bloomMic?.setVariant(I),l.id==="orb"&&lt&&Bs(I===Fs);let fe=E(I),de=i.querySelector("[data-stage]");if(S){de.querySelector("[data-kit]").dataset.kit=`${l.id}|${I}|0`,da(de);let ue=i.querySelector(".free-c code");ue&&(ue.textContent=qr(l.id,I))}else l.id!=="orb"&&(de.classList.remove("v-dark","v-frost","v-compact"),fe.cls&&de.classList.add(fe.cls),fe.p&&kt.set(fe.p));i.querySelectorAll("[data-variant]").forEach(ue=>ue.setAttribute("aria-checked",String(ue.dataset.variant===I)));let k=i.querySelector("[data-vline]");if(k&&(k.textContent=E(I).line),l.id==="orb"){let ue=!0;i.querySelector("[data-price]").textContent=ct;let xe=i.querySelector("[data-free]");xe&&(xe.hidden=!ue);let Oe=i.querySelector(".free-c code");Oe&&(Oe.textContent=ja(I))}let L=i.querySelector("[data-cart]");if(L&&(L.dataset.cart=te(I)),L){let ue=ea.has(L.dataset.cart);L.setAttribute("aria-pressed",String(ue)),L.querySelector("span").textContent=ue?"In cart":"Add to cart"}let K=i.querySelector("[data-fsave]");K.dataset.fsave=`product|${te(I)}`;let we=vt.isSaved("product",te(I));K.setAttribute("aria-pressed",String(we)),K.querySelector("span").textContent=we?"Saved":"Save",history.replaceState(null,"",`#/products/${l.id}${I===v[0].id?"":`?variant=${I}`}`)};Ds(i,S?l.id:"orb"),Ur(i,{audio:t,variant:()=>i.querySelector("[data-variant][aria-checked=true]")?.dataset.variant??"",autoOpen:!!($e.query.request||$e.query.get)}),$e.query.get&&setTimeout(()=>i.querySelector("[data-getfree]")?.click(),60),i.querySelector("[data-download]")?.addEventListener("click",()=>{let I=i.querySelector("[data-variant][aria-checked=true]")?.dataset.variant??v[0].id;fi(`${l.id}-${I}.html`,qr(l.id,I)),t.sfx("confirm"),We("free_code_download",{product:l.id,variant:I})}),i.querySelector("[data-getfree]")?.addEventListener("click",()=>{let I=i.querySelector("[data-freebtn]");I?.getAttribute("aria-expanded")!=="true"&&I?.click(),I?.scrollIntoView({block:"nearest",behavior:"smooth"})}),i.querySelector("[data-soon]")?.addEventListener("click",I=>{let fe=i.querySelector("#ea-wait"),de=fe.hidden;fe.hidden=!de,I.currentTarget.setAttribute("aria-expanded",String(de)),t.sfx(de?"open":"close"),de&&fe.querySelector("input")?.focus()}),i.querySelectorAll("[data-variant]").forEach(I=>I.addEventListener("click",()=>{re(I.dataset.variant),t.sfx("select"),We("variant",{product:l.id,variant:I.dataset.variant})})),re(M)}let ja=(r="clear")=>`<div data-light-orb${r==="clear"?"":` data-variant="${r}"`} style="width:320px;height:320px"></div>
<script type="module" src="https://thelightorb.com/embed/v1/orb.js"><\/script>`,xo=ja();function Ta(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${at.check}<span>Get the code \u2014 free</span></button>
      <p class="note pd-facts">Works on any website \xB7 one script tag, about 170 KB compressed \xB7 respects reduced motion</p>
      <div class="free-p" id="free-code" hidden><p class="note">Paste this where the Orb should appear. It fills the box you give it; drag to turn it, tap to stir it.</p>
        <pre class="free-c glass"><code>${ke(xo)}</code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function Ps(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${at.check}<span>Get the code \u2014 free</span></button>
      <p class="note pd-facts">Works on any website \xB7 one .html file, about 14 KB, no dependencies \xB7 respects reduced motion</p>
      <div class="free-p" id="free-code" hidden><p class="note">One self-contained file: open it in a browser, or paste its style, markup and script into your page. Change the material with the --cc-* variables at the top.</p>
        <pre class="free-c glass kit-code"><code></code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button><button class="gb small" type="button" data-download><span>Download .html</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function fi(r,l){let S=URL.createObjectURL(new Blob([l],{type:"text/html"})),v=document.createElement("a");v.href=S,v.download=r,document.body.append(v),v.click(),v.remove(),setTimeout(()=>URL.revokeObjectURL(S),1e3)}function Ds(r,l="orb"){let S=r.querySelector("[data-freebtn]");if(!S)return;let v=r.querySelector("#free-code"),M=r.querySelector("[data-copy]");S.addEventListener("click",()=>{let E=v.hidden;v.hidden=!E,S.setAttribute("aria-expanded",String(E)),t.sfx(E?"open":"select"),E&&We("free_code_open",{product:l})}),M.addEventListener("click",async()=>{let E=!1;try{await navigator.clipboard.writeText(r.querySelector(".free-c code").textContent),E=!0}catch{let te=document.createRange();te.selectNodeContents(r.querySelector(".free-c code"));let re=getSelection();re.removeAllRanges(),re.addRange(te)}M.querySelector("span").textContent=E?"Copied":"Selected \u2014 press Copy",E&&(t.sfx("select"),We("free_code_copy",{product:l})),setTimeout(()=>{M.isConnected&&(M.querySelector("span").textContent="Copy code")},2200)})}let vo={orb:{lede:"A 3D sphere you can place in your own work. Choose the material and what it holds inside.",does:"Drag to turn it; it keeps turning slowly on its own. A tap makes whatever is in it move a little faster. Twenty versions: clear glass, liquid metal, porcelain, bloom, and glass holding a light, points of light, glitter or beads.",tech:"An ES module built on Three.js r186 (WebGL 2). Works in current Chrome, Safari, Edge and Firefox. The integration notes explain how to place it in a page and choose a version."},"orb-slider":{lede:"A glass capsule whose thumb is a small orb with its own slow inner light. Slide it to enter.",does:"A slide-to-confirm control. Drag the orb; let go and a spring carries it home, or to the end to confirm (it then sends a confirm event). Arrow keys, Enter, Home and End work too.",tech:"One HTML file: CSS variables for the material and a few lines of plain JavaScript. No framework, no WebGL. Current Chrome, Safari, Edge and Firefox."},"orb-wave":{lede:"The ripple the Orb leaves on the floor when it lands, drawn in light.",does:"Each touch raises a wave that spreads across the surface and fades.",tech:"A full-screen shader with an impact API: position, strength and scale. Needs WebGL 2."},"background-pack":{lede:"Two environments in one pack: a dark world and a light one, and the change between them.",does:"Moves smoothly from dark to light, controlled by a single exposure value.",tech:"A full-screen shader with exposure, horizon and lamp controls. Needs WebGL 2."},"crystal-controls":{lede:"Buttons, switches, fields and sliders in six glass materials. A highlight follows the pointer; presses give like glass on a spring.",does:"Every control has default, hover, focus, pressed, selected, disabled and loading states. Choose Clear, Smoke, Chrome, Porcelain, Gel or Bloom; each is a set of CSS variables.",tech:"One HTML file: plain CSS and a few lines of JavaScript for the pointer light and the slider spring. No framework. Current Chrome, Safari, Edge and Firefox."}};function Ns(r){return r==="orb"?'<div class="pd-sph" data-sph></div><span class="pd-hint">Drag to turn it. Tap to stir it.</span><button class="gb gc bloom-mic" data-bloom-mic type="button" aria-label="Turn Bloom microphone on" aria-pressed="false" title="Let your voice move Bloom" hidden><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 10v1a6 6 0 0 0 12 0v-1M12 17v4M9 21h6"/></svg></button><span class="bloom-mic-status" data-bloom-mic-status role="status" aria-live="polite"></span>':r==="orb-slider"?'<div class="cap" data-cap role="slider" tabindex="0" aria-label="Slide to enter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="cap-l">slide to enter</span></div>':r==="orb-wave"?'<button class="gb small pd-btn" type="button" data-drop>Drop the Orb</button><span class="pd-hint">Or tap the floor.</span>':r==="background-pack"?'<div class="segbar pd-seg" role="radiogroup" aria-label="Environment"><button class="pill" role="radio" type="button" data-env="0" aria-checked="false">Dark world</button><button class="pill" role="radio" type="button" data-env="1" aria-checked="true">Light</button></div>':`<div class="kit"><button class="gb primary" type="button">Continue</button><button class="gb" type="button">Secondary</button><button class="gb gc" type="button" aria-label="Confirm">${at.check}</button>
      <button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><input class="gi" placeholder="Your name" aria-label="Example field">
      <input class="grange" type="range" value="60" aria-label="Example slider" style="--p:60%"><button class="gb" type="button" disabled>Disabled</button><button class="gb" type="button" aria-busy="true">Loading</button></div>`}let lt=null,Fs="clear";function Bs(r){if(!lt)return;lt.real=r;let l=lt.el.querySelector("[data-sph]");if(l)for(let S of l.children)S.style.visibility=r?"hidden":"";r?g.show(Wt(pa("original").config)):g.hide()}function Hs(r,l,S="clear"){if(lt={id:r,el:l,cap:0,drop:null},!(r==="crystal-controls"||r==="orb-slider")){if(r!=="orb"&&g.show(Wt(pa("original").config)),r==="orb"){lt.sphere=Er(l.querySelector("[data-sph]"),S,{reduced:o}),Et.push(()=>lt?.sphere?.dispose());let v=l.querySelector("[data-bloom-mic]"),M=l.querySelector("[data-bloom-mic-status]"),E=t.microphone({onState({status:K,error:we}){let ue=K==="listening",xe=K==="requesting";v.setAttribute("aria-pressed",String(ue)),v.setAttribute("aria-label",ue?"Turn Bloom microphone off":xe?"Cancel Bloom microphone request":"Turn Bloom microphone on"),v.dataset.state=K,v.title=ue?"Microphone on \u2014 your voice moves Bloom":xe?"Waiting for microphone permission":"Let your voice move Bloom",M.textContent=we||(ue?"Listening":""),M.classList.toggle("is-error",!!we)},onLevel(K){v.style.setProperty("--input-level",K.toFixed(3))}});lt.sphere.setVoiceInput(()=>E.sample()),lt.bloomMic={setVariant(K){v.hidden=K!=="bloom",K!=="bloom"&&E.stop()}},v.addEventListener("click",K=>{K.stopPropagation(),t.sfx("select"),E.toggle()}),Et.push(()=>E.dispose());let te=l.querySelector("[data-sph]"),re=null,I=0,fe=0,de=0,k=()=>{de=0,!(!lt?.real||re)&&(I*=.94,fe+=I,g.orb?.setObjectYaw(fe),Math.abs(I)>5e-4&&(de=requestAnimationFrame(k)))};te.addEventListener("pointerdown",K=>{lt?.real&&(re={x:K.clientX,t:performance.now(),moved:0},te.setPointerCapture(K.pointerId))}),te.addEventListener("pointermove",K=>{if(!re||!lt?.real)return;let we=K.clientX-re.x;re.x=K.clientX,re.moved+=Math.abs(we),I=we*.012,fe+=I,g.orb?.setObjectYaw(fe)});let L=()=>{if(!re)return;let K=re.moved<6;re=null,K?(g.orb?.nudge(.8),t.sfx("detent")):de||(de=requestAnimationFrame(k))};te.addEventListener("pointerup",L),te.addEventListener("pointercancel",L),Et.push(()=>{cancelAnimationFrame(de),lt?.real&&g.hide()})}if(r==="orb-slider"){let v=l.querySelector("[data-cap]"),M=null,E=re=>{lt.cap=ba(re),v.setAttribute("aria-valuenow",Math.round(lt.cap*100))};v.addEventListener("pointerdown",re=>{M={x:re.clientX,v:lt.cap},v.setPointerCapture(re.pointerId),t.sfx("select")}),v.addEventListener("pointermove",re=>{M&&E(M.v+(re.clientX-M.x)/(v.offsetWidth-v.offsetHeight))});let te=()=>{M&&(M=null,g.orb?.nudge(.5),lt.cap>.9?(E(1),t.sfx("confirm")):(E(0),t.sfx("select")))};v.addEventListener("pointerup",te),v.addEventListener("pointercancel",te),v.addEventListener("keydown",re=>{re.key==="ArrowRight"&&E(lt.cap+.1),re.key==="ArrowLeft"&&E(lt.cap-.1),re.key==="End"&&E(1),re.key==="Home"&&E(0)})}if((r==="orb-wave"||r==="background-pack")&&(Jr(l),e.addBackdrop(kt.canvas),kt.set({horizon:.3,strength:1,scale:70}),kt.setExposure(r==="background-pack"?1:0,!0),r==="orb-wave"&&(l.addEventListener("pointerdown",v=>{if(v.target.closest("button"))return;let M=l.getBoundingClientRect(),E=v.clientY-M.top;E>M.height*.55&&(kt.impact(v.clientX-M.left,E),g.orb?.nudge(.7),t.sfx("detent"))}),l.querySelector("[data-drop]").addEventListener("click",()=>{lt.drop={vy:0,y:null,contacts:0},t.sfx("select")})),r==="background-pack"&&l.querySelectorAll("[data-env]").forEach(v=>v.addEventListener("click",()=>{kt.setExposure(+v.dataset.env),t.sfx("open"),l.querySelectorAll("[data-env]").forEach(M=>M.setAttribute("aria-checked",String(M===v)))}))),r==="crystal-controls"){l.querySelectorAll(".gb:not([disabled])").forEach(M=>M.addEventListener("click",()=>t.sfx("select"))),l.querySelector(".gsw").addEventListener("click",M=>{let E=M.currentTarget;E.setAttribute("aria-checked",String(E.getAttribute("aria-checked")!=="true")),t.sfx("select")}),l.querySelector(".gi").addEventListener("input",M=>{M.isTrusted&&t.sfx("type")});let v=l.querySelector(".grange");v.addEventListener("input",()=>{v.style.setProperty("--p",`${v.value}%`),t.sfx("level",v.value/100)})}}}let jr=2,zr=(r,l="")=>`<span class="dev" data-dev><span class="dev-body"><span class="dev-screen"><img src="${r.cover.src}" alt="${ke(l)}" draggable="false" decoding="async"${l?' width="1600" height="1000"':""}></span><span class="dev-glare" aria-hidden="true"></span></span><span class="dev-floor" aria-hidden="true"></span></span>`;function bi(r){o||r.querySelectorAll("[data-dev]").forEach(l=>{l.addEventListener("pointermove",S=>{let v=l.getBoundingClientRect();l.style.setProperty("--ry",`${((S.clientX-v.left)/v.width-.5)*10}deg`),l.style.setProperty("--rx",`${((S.clientY-v.top)/v.height-.5)*-8}deg`)}),l.addEventListener("pointerleave",()=>{l.style.removeProperty("--ry"),l.style.removeProperty("--rx")})})}let _s=r=>`<!doctype html>
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
`;function Ws(){let r=zt.length+jr;i.innerHTML=`
      <section class="dest tpl">
        <header class="dh"><h1>Complete compositions</h1></header>
        <div class="folder" data-folder>
          <div class="folder-tab glass"><span>Templates</span><small>${zt.length} ${zt.length===1?"template":"templates"}${jr?` \xB7 ${jr} in the making`:""}</small></div>
          <div class="folder-body glass"><span class="folder-glow" aria-hidden="true"></span><span class="folder-num" data-fnum aria-hidden="true"></span>
            <div class="folder-track" data-track role="listbox" aria-label="Templates" tabindex="0">
              ${zt.map((de,k)=>`<button class="tcard glass" type="button" role="option" data-t="${k}" aria-label="Open ${ke(de.label??de.name)}">
                <span class="tcard-n">${String(k+1).padStart(2,"0")}</span>
                <span class="tcard-cv">${zr(de)}</span>
                ${de.showcase?`<span class="tcard-tag">${ke(de.category.toLowerCase())}</span>`:""}<span class="tcard-t">${ke(de.label??de.name)}</span><span class="tcard-l">${ke(de.line)}</span></button>`).join("")}
              ${Array.from({length:jr},(de,k)=>`<div class="tcard glass soon" aria-hidden="true"><span class="tcard-n">${String(zt.length+k+1).padStart(2,"0")}</span><span class="tcard-cv"><span class="soon-orb"></span><span class="soon-lbl">In the making</span></span><span class="tcard-t">Next composition</span><span class="tcard-l">Joining the collection soon.</span></div>`).join("")}
            </div>
            <div class="folder-open" data-open hidden></div>
            <div class="folder-ctl" data-fctl><button class="gb gc small" type="button" data-fstep="-1" aria-label="Previous">${at.prev}</button><span class="count" data-fcount></span><button class="gb gc small" type="button" data-fstep="1" aria-label="Next">${at.next}</button></div>
          </div>
        </div>
      </section>${X()}`;let l=i.querySelector("[data-track]"),S=[...l.children],v=i.querySelector("[data-open]"),M=i.querySelector("[data-fctl]"),E=0,te=de=>{S.forEach((k,L)=>{let K=L-E+la/340,we=Math.abs(K);k.style.transition=de||b?"none":"",k.style.transform=`translateX(calc(-50% + ${K*96}%)) translateZ(${-we*120}px) rotateY(${ba(-K*18,-30,30)}deg) scale(${1-Math.min(we,2)*.08})`,k.style.zIndex=String(10-Math.round(we)),k.style.opacity=String(we>2.2?0:1-we*.22),k.classList.toggle("on",L===E),k.tagName==="BUTTON"&&k.setAttribute("aria-selected",String(L===E))}),i.querySelector("[data-fnum]").textContent=String(E+1).padStart(2,"0"),i.querySelector("[data-fcount]").textContent=E<zt.length?`${String(E+1).padStart(2,"0")} / ${String(zt.length).padStart(2,"0")}`:"In the making",i.querySelectorAll("[data-fstep]").forEach(k=>{k.disabled=+k.dataset.fstep<0&&E===0||+k.dataset.fstep>0&&E===r-1})},re=de=>{let k=ba(E+de,0,r-1);k!==E&&(E=k,t.sfx("detent")),te()};i.querySelectorAll("[data-fstep]").forEach(de=>de.addEventListener("click",()=>re(+de.dataset.fstep))),l.addEventListener("keydown",de=>{de.key==="ArrowRight"&&(re(1),de.preventDefault()),de.key==="ArrowLeft"&&(re(-1),de.preventDefault())}),w(l,re,()=>te());let I=de=>{let k=zt[de],L={id:`template-${k.id}`,name:k.name,href:`#/templates/${k.id}`};Be.some(K=>K.id===L.id)||Be.push(L),v.innerHTML=`<button class="tl folder-back" type="button" data-close>${at.back}<span>All templates</span></button>
        <div class="fo-grid"><figure class="fo-cv">${zr(k,`The beginning of the ${k.name} template.`)}</figure>
          <div class="fo-info"><p class="kicker">${String(de+1).padStart(2,"0")} \xB7 ${k.showcase?ke(k.category.toLowerCase()):"Template"}</p><h2>${ke(k.label??k.name)}</h2>${k.credit?`<p class="fo-label">${ke(k.credit)}</p>`:""}<p>${ke(k.line)}</p>
            <ul class="fo-inc">${k.includes.map(K=>`<li>${ke(K)}</li>`).join("")}</ul>${k.showcase?'<p class="note">Showcase \xB7 not for sale.</p>':`<p class="price">${ct}</p>`}
            <div class="acts eq">${k.showcase?`<a class="gb small primary" href="${k.demo}" target="_blank" rel="noopener" aria-label="${ke(k.cta)}, opens in a new tab">${ke(k.cta)}</a><a class="gb small" href="#/templates/${k.id}">Details</a>`:`<a class="gb small primary" href="#/templates/${k.id}" data-vt>Open template</a>${ht(L)}`}${Ye("template",k.id,k.name)}</div></div></div>`,Ee(v),Ht(v,(K,we)=>`#/templates/${we}`),bi(v),Vs(v),v.querySelector("[data-close]").addEventListener("click",fe),l.hidden=!0,M.hidden=!0,v.hidden=!1,v.classList.remove("in"),v.offsetWidth,v.classList.add("in"),t.sfx("open"),v.querySelector("[data-close]").focus({preventScroll:!0})},fe=()=>{v.hidden=!0,l.hidden=!1,M.hidden=!1,te(!0),t.sfx("close"),l.focus({preventScroll:!0})};S.forEach((de,k)=>de.tagName==="BUTTON"&&de.addEventListener("click",L=>{if(u){L.preventDefault();return}k!==E?(E=k,te(),t.sfx("detent")):I(k)})),te(!0)}function Vs(r){r.querySelectorAll("[data-vt]").forEach(l=>l.addEventListener("click",S=>{if(o||!document.startViewTransition||S.metaKey||S.ctrlKey)return;S.preventDefault();let v=l.getAttribute("href");r.querySelector("[data-dev]")?.style.setProperty("view-transition-name","tpl-device"),document.startViewTransition(()=>{history.pushState(null,"",v),xa()})}))}let Ys={"the-light-orb":{what:"The opening of this website as a starting point: the Orb hosts the page, a greeting arrives under it, a quotation follows and the visitor chooses where to go.",special:"The Orb is a live WebGL glass object, not a picture: it turns when dragged and answers a tap. The rest is quiet HTML and CSS around it.",pages:["One page: welcome, quotation and destination selector","Hosted Orb embed (any of its versions via data-variant)","Four destination links ready to rename"],responsive:"Fluid type and spacing; the Orb scales with the viewport and the destinations wrap onto several lines on phones.",tech:"Plain HTML and CSS with one ES module script (the hosted Orb embed, Three.js r186, WebGL 2). No framework, no build step. Current Chrome, Edge, Firefox and Safari.",use:"Download the starter, open it in a browser, then edit the greeting, quotation and links. Change data-variant on the Orb to switch its material.",availability:"The starter file is free during early access. The full composition you see on this site is not packaged as a download yet.",starter:["One .html file you open in any browser","The live Orb from the hosted embed, any version","Greeting, quotation slot and four destination links, ready to edit","Fluid layout for phones and large screens"],full:["The arrival sequence: the Orb hosting the page as you scroll","Quotation scene and the destination selector with its motion","Narration and glass sound effects","Source files, documentation and a licence for the whole composition"]}};function Gs(){let r=zt.find(I=>I.id===$e.id);if(!r){location.replace("#/templates");return}let l=Ys[r.id]??{},S=(I,fe)=>fe?`<dt>${I}</dt><dd>${fe}</dd>`:"";i.innerHTML=`
      <section class="pd tpd">
        <a class="back tl" href="#/templates">${at.back}<span>Templates</span></a>
        <div class="pd-grid">
          ${r.showcase?`
          <figure class="pd-stage cover-big" data-tcover>${zr(r,`The beginning of the ${r.name} template.`)}</figure>
          <div class="pd-info"><p class="kicker">${r.showcase?ke(r.category.toLowerCase()):"Template"}</p><h1>${ke(r.label??r.name)}</h1>${r.credit?`<p class="fo-label">${ke(r.credit)}</p>`:""}<p class="lede">${ke(r.line)}</p>
            <div class="acts eq">${r.showcase?`<a class="gb small primary" href="${r.demo}" target="_blank" rel="noopener" aria-label="${ke(r.cta)}, opens in a new tab">${ke(r.cta)}</a>`:'<a class="gb small" href="#/">View it live</a>'}${r.starter&&!0?'<button class="gb small primary" type="button" data-starter>Download starter \u2014 free</button>':""}</div>
            ${r.showcase?'<p class="note">Showcase \xB7 not for sale. Originally designed and built for a maternity and postpartum brand; the demo runs on its own, with purchases disabled.</p>':r.starter&&!0?'<p class="note">A single .html file: the Orb (hosted embed), a greeting, a quotation slot and four destinations, ready to edit. <a href="#/licence">Licence</a></p>':'<p class="note">Purchase opens soon.</p>'}
            <dl class="facts"><dt>Includes</dt><dd>${r.includes.map(ke).join(" \xB7 ")}</dd></dl>
            <p class="note" data-covermeta></p></div>
          `:`
          <div class="tpd-stage">
            <figure class="pd-stage cover-big" data-tcover>${zr(r,`The beginning of the ${r.name} template.`)}</figure>
            <div class="tpd-live" data-live hidden><div class="tpd-frame" data-frame><iframe title="${ke(r.name)} \u2014 live preview" loading="lazy" data-src="intro.html?skip#/"></iframe></div></div>
            <div class="tpd-bar"><div class="segbar" role="radiogroup" aria-label="Preview">
              <button class="pill" role="radio" type="button" data-pv="cover" aria-checked="true">Cover</button>
              <button class="pill" role="radio" type="button" data-pv="1280" aria-checked="false">Desktop</button>
              <button class="pill" role="radio" type="button" data-pv="390" aria-checked="false">Phone</button></div>
              <span class="note" data-covermeta></span></div>
          </div>
          <div class="pd-info"><p class="kicker">Template \xB7 ${String(zt.indexOf(r)+1).padStart(2,"0")}</p><h1>${ke(r.name)}</h1><p class="lede">${ke(l.what??r.line)}</p>
            <div class="tpd-offer">
              <section class="tpd-o now" aria-labelledby="tpd-o1"><p class="kicker">Available now \xB7 free during early access</p><h2 id="tpd-o1">Starter file</h2>
                ${l.starter?`<ul>${l.starter.map(I=>`<li>${ke(I)}</li>`).join("")}</ul>`:""}
                <div class="acts eq">${r.starter&&!0?'<button class="gb small primary" type="button" data-starter>Download starter (.html)</button>':""}${Ye("template",r.id,r.name)}</div>
                <p class="note"><a href="#/licence">Licence</a></p></section>
              <section class="tpd-o later" aria-labelledby="tpd-o2"><p class="kicker">In development \xB7 not downloadable</p><h2 id="tpd-o2">Complete template</h2>
                ${l.full?`<ul>${l.full.map(I=>`<li>${ke(I)}</li>`).join("")}</ul>`:""}
                <p class="note">You can explore it live on this site today. It will be offered once its source, sounds and texts are cleared for redistribution.</p></section>
            </div>
            <dl class="facts ds-facts">
              ${S("What makes it",ke(l.special??""))}
              ${S("Pages and features",(l.pages??r.includes).map(ke).join("<br>"))}
              ${S("Responsive",ke(l.responsive??""))}
              ${S("Built with",ke(l.tech??""))}
              ${S("How to use it",ke(l.use??""))}
              ${S("Availability",ke(l.availability??""))}
              ${S("Questions",'<a href="mailto:trescarla@gmail.com">trescarla@gmail.com</a>')}
            </dl>
            <a class="studio-lock" href="#/design"><span><b>Want one made for you?</b><small>Custom web design, built around your idea</small></span></a>
          </div>
          `}
        </div>
      </section>${X()}`,bi(i),i.querySelector("[data-tcover] [data-dev]")?.style.setProperty("view-transition-name","tpl-device"),Ht(i,(I,fe)=>`#/templates/${fe}`),i.querySelector("[data-starter]")?.addEventListener("click",()=>{fi(`${r.id}-starter.html`,_s(r)),t.sfx("confirm"),We("template_starter_download",{template:r.id})});let v=i.querySelector("[data-tcover]"),M=i.querySelector("[data-live]"),E=i.querySelector("[data-frame]"),te=E?.querySelector("iframe"),re=()=>{let I=+E.dataset.w||1280,fe=I>700?800:844,de=Math.min(1,M.clientWidth/I);Object.assign(te.style,{width:`${I}px`,height:`${fe}px`,transform:`scale(${de})`}),E.style.height=`${fe*de}px`,E.style.width=`${I*de}px`};E&&i.querySelectorAll("[data-pv]").forEach(I=>I.addEventListener("click",()=>{E&&i.querySelectorAll("[data-pv]").forEach(de=>de.setAttribute("aria-checked",String(de===I))),t.sfx("press");let fe=I.dataset.pv;v.hidden=fe!=="cover",M.hidden=fe==="cover",fe!=="cover"&&(E.dataset.w=fe,te.src||(te.src=te.dataset.src),re(),We("template_live_preview",{template:r.id,width:fe}))})),E&&(addEventListener("resize",re),Et.push(()=>removeEventListener("resize",re))),fetch(r.cover.meta).then(I=>I.json()).then(I=>{let fe=i.querySelector("[data-covermeta]");fe&&(fe.textContent=r.showcase?`Preview: a capture of the live demo, ${I.captured}.`:`Preview: a capture of this website, ${I.captured}.`)}).catch(()=>{})}function xi(){let r=t.prefs.voice,l=[...Va.map(L=>({group:L.full?"voices":"more",key:`voice_audition.${L.id}`,clip:"voice_audition",voice:L.id,title:L.name,tag:`${L.accent} \xB7 ${L.gender}`,sub:L.line,use:L.id,note:L.full?"":`Page narration in ${L.name}; other guide lines in ${Sa(L.lines).name}.`})),...["home","products","templates","studio","sound"].map(L=>({group:"guide",key:`${L}.${r}`,clip:L,voice:r,title:L==="home"?"Welcome":L[0].toUpperCase()+L.slice(1),sub:Nr[L]})),...fr.map(L=>({group:"sfx",key:`sfx.${L.id}`,url:L.file,title:L.name,sub:L.line}))],S=(L,K,we,ue=!0)=>`<details class="sg"${ue?" open":""}><summary><h2>${K}</h2><span class="sg-n">${l.filter(xe=>xe.group===L).length}</span><p>${we}</p></summary><div class="sgrid">${l.filter(xe=>xe.group===L).map(xe=>`
      <article class="si si-row"><button class="si-play gb gc small" type="button" data-play="${xe.key}" aria-label="Play ${ke(xe.title)}">${at.play}</button>
        <div class="si-t"><h3>${ke(xe.title)}${xe.tag?`<span class="file-ext">${ke(xe.tag)}</span>`:'<span class="file-ext">.m4a</span>'}</h3><p>${ke(xe.sub)}</p>${xe.note?`<p class="note">${ke(xe.note)}</p>`:""}</div>
        <div class="si-w" data-wave="${xe.key}" role="slider" tabindex="0" aria-label="Position in ${ke(xe.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><canvas></canvas></div>
        <div class="si-m"><span class="si-d" data-dur="${xe.key}">\u2013:\u2013\u2013</span></div>
        <div class="si-x eq">${xe.use?`<button class="gb small" type="button" data-use="${xe.use}" aria-pressed="${r===xe.use}"><span>${r===xe.use?"In use":"Use voice"}</span></button>`:""}${xe.group!=="guide"?ht({id:`sound-${xe.key}`}):""}${Ye("sound",xe.key,xe.title)}</div></article>`).join("")}</div></details>`;i.innerHTML=`
      <section class="dest snd-dest">
        ${G("sound")}
        <header class="dh"><h1>Voices and sounds</h1><p class="dh-l">Twelve neural voices, each reading the same line. Choose one and the guide speaks with it across the site. Current guide voice: <b>${ke(Sa(r).name)}</b>.</p></header>
        ${S("voices","Guide voices","Every line the guide says, rendered in each of these voices.")}
        ${S("more","More voices","Different characters for the guide. Compare them on the same line.",!1)}
        ${S("guide","Guide narration",`What the guide says on each page, in ${ke(Sa(r).name)}\u2019s voice.`,!1)}
        ${S("sfx","Interface sounds","Short, quiet sounds for touch, panels and wheels.")}
      </section>${X()}`,i.querySelectorAll(".si").forEach(L=>{L.querySelector('[data-play^="sfx."]')&&(L.querySelector(".file-ext").textContent=".wav")}),Ht(i,()=>"#/sound");let v=new Map,M=(L,K)=>{let we=i.querySelector(`[data-dur="${CSS.escape(L)}"]`);we&&(we.textContent=K)},E=new Set,te=L=>{E.has(L.key)||(E.add(L.key),(L.url?t.peaksUrl(L.url,80):t.peaks(L.clip,L.voice,80)).then(K=>{v.set(L.key,K),M(L.key,Us(K.duration))}).catch(()=>{E.delete(L.key),M(L.key,"Unavailable")}))},re="IntersectionObserver"in window?new IntersectionObserver(L=>L.forEach(K=>{if(!K.target.isConnected){re.unobserve(K.target);return}if(K.isIntersecting){re.unobserve(K.target);let we=l.find(ue=>ue.key===K.target.dataset.wave);we&&te(we)}}),{rootMargin:"200px 0px"}):null;i.querySelectorAll("[data-wave]").forEach(L=>re?re.observe(L):te(l.find(K=>K.key===L.dataset.wave))),yo=l;let I=L=>L.url?L.key:`${L.clip}.${L.voice}`;Ee(i);let fe=(L,K=0)=>(te(L),L.url?t.playUrl(L.key,L.url,{from:K}):t.play(L.clip,{voice:L.voice,kind:"audition",from:K}));i.querySelectorAll("[data-play]").forEach(L=>L.addEventListener("click",()=>{let K=l.find(ue=>ue.key===L.dataset.play),we=I(K);t.state.clip===we&&t.playing?t.pause():t.state.clip===we&&t.state.status==="paused"?t.resume():fe(K)})),i.querySelectorAll("[data-wave]").forEach(L=>{let K=l.find(Oe=>Oe.key===L.dataset.wave),we=I(K),ue=!1,xe=Oe=>{let Je=L.getBoundingClientRect();return ba((Oe.clientX-Je.left)/Je.width)};L.addEventListener("pointerdown",async Oe=>{ue=!0,L.setPointerCapture(Oe.pointerId);let Je=xe(Oe);t.state.clip!==we&&await fe(K),t.seek(Je)}),L.addEventListener("pointermove",Oe=>{ue&&t.state.clip===we&&t.seek(xe(Oe))}),L.addEventListener("pointerup",()=>{ue=!1}),L.addEventListener("keydown",Oe=>{t.state.clip!==we||!t.duration||(Oe.key==="ArrowRight"&&t.seek(t.position+1/t.duration),Oe.key==="ArrowLeft"&&t.seek(t.position-1/t.duration))})}),i.querySelectorAll("[data-use]").forEach(L=>L.addEventListener("click",()=>{let K=scrollY;t.stop(),t.set({voice:L.dataset.use}),t.sfx("confirm"),We("voice_use",{voice:L.dataset.use}),xi(),scrollTo(0,K),J(`${Sa(L.dataset.use).name} is now the guide\u2019s voice.`)}));let de=0,k=()=>{if(de=requestAnimationFrame(k),yo!==l){cancelAnimationFrame(de);return}for(let L of i.querySelectorAll("[data-wave]")){let K=l.find(Ia=>Ia.key===L.dataset.wave);if(!K)continue;let we=I(K),ue=v.get(K.key),xe=L.firstElementChild,Oe=L.getBoundingClientRect();if(Oe.bottom<0||Oe.top>innerHeight)continue;let Je=t.state.clip===we,Qt=Je?t.position:0,za=Je?t.state.energy:0,nt=Je&&t.playing;L.setAttribute("aria-valuenow",Math.round(Qt*100));let pt=i.querySelector(`[data-play="${CSS.escape(K.key)}"]`);if(pt&&pt.dataset.on!==String(nt)&&(pt.dataset.on=String(nt),pt.innerHTML=nt?at.pause:at.play,pt.setAttribute("aria-label",`${nt?"Pause":"Play"} ${K.title}`)),!ue)continue;let ta=Math.min(devicePixelRatio||1,2);xe.width!==Math.round(Oe.width*ta)&&(xe.width=Math.round(Oe.width*ta),xe.height=Math.round(Oe.height*ta));let wa=xe.getContext("2d");wa.setTransform(ta,0,0,ta,0,0),wa.clearRect(0,0,Oe.width,Oe.height);let Zt=ue.bins.length,Mi=Math.min(2,Oe.width/Zt*.4),Eo=Math.max(.5,(Oe.width-Mi*(Zt-1))/Zt),ol=Oe.height/2;for(let Ia=0;Ia<Zt;Ia++){let Li=(Ia+.5)/Zt<=Qt,il=Li&&Math.abs((Ia+.5)/Zt-Qt)<2.5/Zt?za:0,Ti=Math.max(2,(ue.bins[Ia]*.9+il*.2)*(Oe.height-4));wa.fillStyle=Li?"#262827":"rgba(38,40,39,.2)",wa.beginPath(),wa.roundRect(Ia*(Eo+Mi),ol-Ti/2,Eo,Ti,Eo/2),wa.fill()}}};k(),Et.push(()=>cancelAnimationFrame(de))}let Us=r=>`${Math.floor(r/60)}:${String(Math.round(r%60)).padStart(2,"0")}`;function Ks(){if(dt&&(dt.leave(),dt=null),!0){i.innerHTML="",dt=Wn({api:e,audio:t,top:c,page:i,query:$e.query,ICON:at,flash:J,product:g,store:vt});return}i.innerHTML=`
      <section class="st-lock">
        <div class="lock-blur" aria-hidden="true"><i class="lb-bar"></i><i class="lb-sph"></i><i class="lb-ins"></i></div>
        <div class="lock-card glass dark">
          <span class="lock-i">${at.lock}</span>
          <p class="kicker">Studio</p><h1>For members</h1>
          <p>Shape the sphere: its material, its colour and what moves inside it. Studio opens with membership.</p>
          <div class="acts eq"><a class="gb small primary" href="#/membership">See membership</a><a class="gb small" href="#/products">Browse products</a></div>
        </div>
      </section>`}function Xs(r,l,{W:S,H:v}){let M=t.energy(),E=t.playing&&(t.state.kind==="guide"||t.state.kind==="audition"&&$e.name==="sound");a.setSpeech(E&&!ko()?M*(o?.35:.9):0),Te+=((E&&!ko()||be?1:0)-Te)*Math.min(1,l*(E?4:1.2));{let I=r-Ce,fe=I<0?0:I<3.5?Oa(I/.4):1-Oa((I-3.5)/1.6);a.setRibbon?.(Math.max(fe,Te))}g.orb?.setSpeech(t.playing&&t.state.kind==="audition"&&ko()?M*(o?.35:1):0);let te=S<700,re;if(dt)re=dt.frame(r,l,{W:S,H:v}),g.frame(re.product??null);else if($e.name==="home")re=al(S,v,te);else{let I=el(S,v,te);if(te){let fe=performance.now()-va;So+=((fe<700?.18:1)-So)*Math.min(1,l*6),I.vis=So}r-wi>.18&&(wi=r,yi=!(t.playing||be)&&Zs(I),ki=matchMedia("(pointer:coarse)").matches&&!!document.activeElement?.matches("input,textarea,select")),tr+=((yi?1:0)-tr)*Math.min(1,l*7),I.x+=(S-(te?15:17)-I.x)*tr,I.d+=((te?30:34)-I.d)*tr,I.vis=Math.max(I.vis*(1-tr*.25),tr>.5?.62:0),ki&&(I.vis=0),re={warm:0,orb:I,emission:qe.emission}}if(!dt){let I=rl(S,v,l);g.frame(I),I?.ground&&(re.grounds||=[]).push({y:I.ground,x:I.x,d:I.d})}return N=dt?null:re.orb,tl(dt?re.product&&$e.name==="studio"&&Qs()==="orb"?{...re.product,passive:!0}:null:re.orb),re}let vi=null,yo=[],Js=()=>yo.map(r=>({id:`sound-${r.key}`,name:r.title,href:"#/sound"})),Qs=()=>dt?.draft?.family??"orb",wo=null;addEventListener("pointerdown",r=>{wo=$e.name==="studio"&&p.classList.contains("passive")&&!p.hidden?{x:r.clientX,y:r.clientY,t:performance.now()}:null},!0),addEventListener("pointerup",r=>{let l=wo;if(wo=null,!l||Math.hypot(r.clientX-l.x,r.clientY-l.y)>5||performance.now()-l.t>350)return;let S=p.getBoundingClientRect();Math.hypot(r.clientX-(S.left+S.width/2),r.clientY-(S.top+S.height/2))>S.width/2||r.target.closest?.("button,a,input,select,label,.sx-ins,.st-top")||p.click()},!0);let qa={x:0,y:0,t:0,v:0};addEventListener("pointermove",r=>{if(r.pointerType!=="mouse"||r.buttons)return;let l=performance.now(),S=Math.hypot(r.clientX-qa.x,r.clientY-qa.y),v=Math.max(8,l-qa.t);if(S<2)return;qa.v+=(S/v*1e3-qa.v)*.35,qa.x=r.clientX,qa.y=r.clientY,qa.t=l;let M=r.target.closest?.("[data-guide]")?"orb":r.target.closest?.(".gb,.gsw,.gi,.gsel,.pill,.arc-c,.dg-c,button,a")?"glass":"air";t.motion(Math.min(1,qa.v/2e3),M)},{passive:!0});let er=null;addEventListener("pointermove",r=>{if($e.name!=="studio"||!(r.buttons&1)||!r.target.closest?.("[data-view], input[type=range]")){er=null;return}let l=performance.now();if(er){let S=Math.hypot(r.clientX-er.x,r.clientY-er.y)/Math.max(8,l-er.t)*1e3;t.friction(Math.min(1,S/700))}er={x:r.clientX,y:r.clientY,t:l}},{passive:!0});let ko=()=>!1,So=1,tr=0,yi=!1,wi=0,ki=!1,Si="p,h1,h2,h3,h4,li,dd,dt,a,button,input,select,textarea,label,img,figcaption,blockquote,small,b,em,i,code,pre,form,summary,iframe,[role=slider]";function Zs(r){let l=r.d/2+6;for(let[S,v]of[[0,0],[-l,0],[0,-l],[-l*.7,-l*.7],[-l,l*.5]])for(let M of document.elementsFromPoint(r.x+S,r.y+v))if(!(M===p||M.closest?.(".lo-top")||M.tagName==="CANVAS")){if(!i.contains(M)){if(M===document.body||M===document.documentElement)break;continue}if(M.matches(Si)||M.closest(Si))return!0;break}return!1}let $i=0,$o=()=>{$i=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--lo-safe-bottom"))||0};$o(),addEventListener("resize",$o),window.visualViewport?.addEventListener("resize",$o);let el=(r,l,S)=>({x:r-(S?34:50),y:l-$i-(S?38:52),d:S?40:50,vis:1});function tl(r){let l=r&&(r.vis??1)>.5&&!!f();if(p.hidden=!l,p.classList.toggle("passive",!!r?.passive),l){let S=Math.max(44,r.d);Object.assign(p.style,{left:`${ba(r.x-S/2,0,innerWidth-S)}px`,top:`${ba(r.y-S/2,0,innerHeight-S)}px`,width:`${S}px`,height:`${S}px`})}}function al(r,l,S){let v=i.scrollTop/l,M=i.querySelector("[data-welcopy]"),E=i.querySelector("[data-qt]"),te=i.querySelector(".wel-ctl"),re=1-Oa((v-.04)/.2),I=Ct[ut],fe=I?.getBoundingClientRect(),de=(i.querySelector(".qt")?.offsetTop??l)/l,k=(i.querySelector("#select")?.offsetTop??2*l)/l,L=i.querySelector("#sel-t"),K=L?(L.getBoundingClientRect().top+i.scrollTop-i.getBoundingClientRect().top)/l:2,we=K-.8,ue=Wd(v,.13,.3,we-.22,we),xe=[...re>.01?[M,te]:[],...ue>.01?[E]:[],L,...Ct,i.querySelector(".arc-ctl"),i.querySelector(".sel-more"),i.querySelector(".ft")].filter(Boolean).map(pt=>pt.getBoundingClientRect()).filter(pt=>pt.width&&pt.height&&pt.bottom>0&&pt.top<l&&pt.right>0&&pt.left<r).map(({left:pt,top:ta,right:wa,bottom:Zt})=>({left:pt,top:ta,right:wa,bottom:Zt}));M&&(M.style.setProperty("--wipe",re.toFixed(3)),M.style.visibility=re<.01?"hidden":""),te&&(te.style.setProperty("--wipe",re.toFixed(3)),te.style.visibility=re<.01?"hidden":""),E&&(E.style.setProperty("--wipe",ue.toFixed(3)),E.style.transform=`translateY(${(20*(1-Oa((v-.13)/.17))-24*Oa((v-we+.22)/.22)).toFixed(1)}px)`,E.style.visibility=ue<.01?"hidden":"");let Oe=ba(Math.min(r*(S?.46:.19),l*.28),120,280),Je={x:r/2,y:l*(S?.3:.29),d:Oe},Qt={x:r/2,y:l*.87,d:Oe*.3},za=Oa((v-.08)/Math.max(.3,de-.5)),nt={x:ur(Je.x,Qt.x,za),y:ur(Je.y,Qt.y,za),d:ur(Je.d,Qt.d,za)};if(I){let pt=fe,ta=Oa((v-we+.1)/.2);if(ta>0){let wa=S?40:50,Zt={x:Ut?pt.left+pt.width/2:r/2,y:pt.bottom+44,d:wa};nt={x:ur(nt.x,Zt.x,ta),y:ur(nt.y,Zt.y,ta),d:ur(nt.d,Zt.d,ta)}}}return{orb:{...nt,vis:1},guideAvoid:xe,warm:1,ground:{y:nt.y+nt.d/2},emission:qe.emission}}function rl(r,l,S){if($e.name==="sound"&&vi?.isConnected){let v=vi.getBoundingClientRect(),M=Math.min(v.width,v.height)*.78;return v.bottom>0?{x:v.left+v.width/2,y:v.top+v.height/2,d:M,vis:1,ground:v.top+v.height/2+M/2}:null}if($e.name==="products"&&!$e.id){let v=i.querySelector("[data-orbslot]");if(!v)return null;let M=v.getBoundingClientRect(),E=v.closest(".pc")?.classList.contains("on"),te=Math.min(M.width,M.height)*.74;return M.width>10?{x:M.left+M.width/2,y:M.top+M.height/2,d:te,vis:E?1:.7,ground:M.top+M.height/2+te/2}:null}if($e.name==="products"&&$e.id&&lt?.el?.isConnected){let v=lt,M=v.el.getBoundingClientRect();if(v.live){let E=v.host.getBoundingClientRect();if(E.width<10||E.bottom<0||E.top>l)return null;let te=Math.min(E.width,E.height)*.8;return{x:E.left+E.width/2,y:E.top+E.height/2,d:te,vis:1,ground:E.top+E.height/2+te/2}}if(v.id==="orb"){if(!v.real)return null;let E=v.el.querySelector("[data-sph]")?.getBoundingClientRect();if(!E||E.width<10||E.bottom<0||E.top>l)return null;let te=Math.min(E.width,E.height)*.8;return{x:E.left+E.width/2,y:E.top+E.height/2,d:te,vis:1,snap:!0}}if(v.id==="orb-slider"){let E=v.el.querySelector("[data-cap]");if(!E)return null;let te=E.getBoundingClientRect(),re=te.height*.84,I=(te.height-re)/2;return{x:te.left+I+re/2+v.cap*(te.width-te.height),y:te.top+te.height/2,d:re,vis:1,snap:!0}}if(v.id==="orb-wave"||v.id==="background-pack"){let E=Math.min(96,M.width*.16),te=M.height*.7+E*.1,re=te-E/2;if(v.drop){let I=v.drop;I.y==null&&(I.y=-M.height*.45),I.vy+=2600*S,I.y+=I.vy*S,I.y>=0&&(I.y=0,kt.impact(M.width/2,te,ba(I.vy/1400)),g.orb?.nudge(.8),t.sfx("detent"),I.vy*=-.38,(++I.contacts>2||Math.abs(I.vy)<120)&&(v.drop=null)),re+=v.drop?v.drop.y:0}return kt.setOrb({x:M.width/2,y:re,d:E}),{x:M.left+M.width/2,y:M.top+re,d:E,vis:1,snap:!!v.drop}}}return null}let Ei=()=>{let r=document.activeElement;if($e.name!=="design"||!matchMedia("(pointer:coarse)").matches||!r?.matches(".iq input:not([type=radio]):not([type=checkbox]),.iq textarea")||!i.contains(r))return;let l=window.visualViewport,S=r.getBoundingClientRect(),v=Math.max(l?.offsetTop||0,d.getBoundingClientRect().bottom)+12,M=(l?.offsetTop||0)+(l?.height||innerHeight)-16;(S.top<v||S.bottom>M)&&(i.scrollTop+=S.top-(v+Math.max(0,(M-v-Math.min(S.height,M-v))/2)))};i.addEventListener("focusin",()=>requestAnimationFrame(Ei)),window.visualViewport?.addEventListener("resize",()=>requestAnimationFrame(Ei)),addEventListener("resize",()=>{$e.name==="home"&&jt(!0)}),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__lo={audio:t,worldPreview:kt,product:g,store:vt,readableTexts:()=>[...new Set([...i.querySelectorAll(Fe)].map(Ge).filter(Boolean))].map(r=>{let l=et(r);return{id:Ze(l),text:l}}),linkLabels:()=>[...i.querySelectorAll("a,button,[data-href],.arc-c,.dg-c")].filter(r=>!r.closest(".hd,.sx")&&et(r)).map(r=>{let l=et(r);return{id:Ze(l),text:l}}),get studio(){return dt},get route(){return $e},get sel(){return ut},get psel(){return Pe}});try{Object.keys(sessionStorage).filter(r=>r.startsWith("lo:scroll:")||r==="lo:sel").forEach(r=>sessionStorage.removeItem(r))}catch{}return ut=0,xa(),ie(),{frame:Xs,audio:t,get route(){return $e},get studio(){return dt},reapply:()=>D()}}function hi(e,a){let o=document.createElement(e);return o.className=a,o}var mo={hostDuration:.95,follow:10,damping:.92,pearl:[243,243,241],chamber:[23,26,25],whiten:2.2},Qa=matchMedia("(prefers-reduced-motion: reduce)").matches,Or=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),Za=(e,a,o)=>e+(a-e)*o,zs=e=>{let a=Or(e);return a<.5?4*a*a*a:1-(-2*a+2)**3/2},Is=(e,a,o)=>e.map((t,s)=>Za(t,a[s],o)),fo=(e,a=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${a})`,Rs=!1;document.addEventListener("lightorb:intro-complete",e=>mi(e.detail));window.__lightorbIntroComplete&&mi(window.__lightorbIntroComplete.detail);document.body.classList.contains("static")&&mi(null);function Vd(){let e=document.createElement("div");e.style.cssText="position:absolute;left:0;top:0;border-radius:50%;pointer-events:none;will-change:transform;background:radial-gradient(circle at 34% 28%,#fff 0 10%,rgba(255,255,255,.55) 24%,rgba(225,228,230,.35) 58%,rgba(170,176,180,.45) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),inset 0 -12px 24px rgba(120,126,130,.18),0 18px 30px -18px rgba(38,40,39,.45)";let a=()=>a,o={element:e,place(t){e.style.width=e.style.height=`${t.d}px`,e.style.transform=`translate(${t.x-t.d/2}px,${t.y-t.d/2}px)`,e.style.opacity=t.visibility??1}};return new Proxy(o,{get:(t,s)=>s in t?t[s]:a})}function mi(e){if(Rs)return;let o=document.querySelector(".intro").querySelector(".intro-world"),t=e?.orb??Vd();Rs=!0;for(let D of document.querySelectorAll(".intro .cue, .skip"))D.setAttribute("aria-hidden","true"),D.inert=!0;let s=document.createElement("style");s.textContent=".x-surface,.x-orb{position:fixed;inset:0;pointer-events:none}.x-surface{z-index:6;width:100%;height:100%}.x-orb{z-index:30}",document.head.append(s);let g=document.createElement("canvas");g.className="x-surface",g.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="x-orb",document.body.append(g,i),i.append(t.element),t.attachPointer(document.createElement("div"))();let c=g.getContext("2d");t.prepareTone("ivory"),t.prepareTone("dark");let d=0,h=0,p=1,m="",F=()=>{m="",d=Math.max(1,innerWidth),h=Math.max(1,innerHeight),p=Math.min(devicePixelRatio||1,1.5),g.width=Math.round(d*p),g.height=Math.round(h*p)};F(),addEventListener("resize",F),g.addEventListener("contextrestored",()=>{m=""});let Q=performance.now()/1e3,n={x:0,y:0,d:0,vx:0,vy:0,vd:0,from:null,hosted:!1},A=new Set,O=null,W=null,$=0,q=1,U=1,R=1,N=Q,x={left:.65,right:.55,env:.5,exposure:0,yaw:0,pitch:0,platform:!0},y=(D,f)=>{let T=performance.now()/1e3,B=Or(T-N,0,.05);N=T,n.from||(n.from={x:D.x,y:D.y,d:D.d}),O=W?.frame(T,B,{W:d,H:h})??null;let j=O?.orb??{x:d/2,y:h*.42,d:Math.min(d*.3,h*.42)},z=Qa?1:zs((T-Q)/mo.hostDuration);if(!n.hosted)n.x=Za(n.from.x,j.x,z),n.y=Za(n.from.y,j.y,z),n.d=Za(n.from.d,j.d,z),z>=1&&(n.hosted=!0,t.attachPointer(document.createElement("div"))(),W?.reapply?.(),t.setMono?.(!1));else if(Qa||O?.snap)n.x=j.x,n.y=j.y,n.d=j.d,n.vx=n.vy=n.vd=0;else{let se=mo.follow,je=mo.damping;n.vx+=(se*se*(j.x-n.x)-2*je*se*n.vx)*B,n.x+=n.vx*B,n.vy+=(se*se*(j.y-n.y)-2*je*se*n.vy)*B,n.y+=n.vy*B,n.vd+=(se*se*(j.d-n.d)-2*je*se*n.vd)*B,n.d+=n.vd*B}n.hosted&&!n.hostedAt&&(n.hostedAt=T);let pe=Qa?1:zs((T-Q-.25)/mo.whiten),me=Math.min(O?.warm??1,1-pe);q=Qa?me:Za(q,me,.2),$=Za($,O?.room==="chamber"?1:0,Qa?1:.12),U=Za(U,O?.orb?.vis??1,Qa?1:.14);let Me=1;for(let se of O?.guideAvoid??[]){let je=Or(n.x,se.left,se.right),De=Or(n.y,se.top,se.bottom);Me=Math.min(Me,Or((Math.hypot(n.x-je,n.y-De)-n.d/2)/4))}R=U*Me,Number.isFinite(n.x+n.y+n.d)||(console.warn("orb pose NaN",JSON.stringify(j),JSON.stringify(n)),Object.assign(n,{x:j.x,y:j.y,d:j.d,vx:0,vy:0,vd:0})),ce();let ge=q<.002;return{...D,x:n.x,y:n.y,d:n.d,squash:0,contact:0,worldY:ge?-9999:n.y,hideWorld:ge,visibility:R,emission:D.emission*(O?.emission??1),raster:Math.ceil(Math.max(n.d,j.d,140)*1.06)}};if(e?.orb)e.takeOver(y);else{let D=()=>{t.place(y({x:d/2,y:h/2,d:0,emission:1})),requestAnimationFrame(D)};requestAnimationFrame(D)}try{ce()}catch{}try{t.setBackdrop((D,f)=>ie(D,f,n))}catch(D){console.warn("backdrop",D)}let C=(()=>{try{let D=document.createElement("canvas").getContext("2d");return D.filter="blur(1px)",D.filter==="blur(1px)"}catch{return!1}})(),Z=document.createElement("canvas"),Y=Z.getContext("2d");function J(D,f,T,B){return Z.width!==B&&(Z.width=Z.height=B),Y.globalCompositeOperation="copy",Y.drawImage(o,D,f,T,T,0,0,B,B),Y.globalCompositeOperation="saturation",Y.fillStyle="#808080",Y.fillRect(0,0,B,B),Y.globalCompositeOperation="destination-in",Y.drawImage(o,D,f,T,T,0,0,B,B),Y.globalCompositeOperation="source-over",Z}function ie(D,f,T){let B=T.d/f.diameter,j=f.extent*B,z=T.x-j/2,pe=T.y-j/2,me=f.extent/j,Me=ge=>ge.width>0&&ge.height>0;if(D.fillStyle=fo(ua().pearl),D.fillRect(0,0,f.extent,f.extent),q>.002&&Me(o)){let ge=o.width/Math.max(1,innerWidth),se=!document.documentElement.classList.contains("warm");se&&C&&(D.filter="grayscale(1) contrast(1.06)"),se&&!C?D.drawImage(J(z*ge,pe*ge,j*ge,f.extent),0,0):D.drawImage(o,z*ge,pe*ge,j*ge,j*ge,0,0,f.extent,f.extent),se&&C&&(D.filter="none")}Me(g)&&D.drawImage(g,z*p,pe*p,j*p,j*p,0,0,f.extent,f.extent);for(let ge of A){if(!ge.isConnected||!Me(ge))continue;let se=ge.getBoundingClientRect();se.right<z||se.left>z+j||se.bottom<pe||se.top>pe+j||D.drawImage(ge,(se.left-z)*me,(se.top-pe)*me,se.width*me,se.height*me)}}function ce(){let D=1-q,f=D>0&&D<.999,T=JSON.stringify([ua(),d,h,p,D>0,f||O?.glows?.length?D:0,$>.002?$:0,f?[n.x,n.y]:0,O?.glows,O?.grounds,$>.002?[x,O?.stage,O?.product?.x,O?.product?.d,O?.product?.ground]:0]);if(T===m)return;if(c.setTransform(p,0,0,p,0,0),c.clearRect(0,0,d,h),D>0){c.globalAlpha=1;let j=ua(),z=j.pearl,pe=c.createLinearGradient(0,0,0,h);if(pe.addColorStop(0,fo(Is(z,j.top,.5))),pe.addColorStop(.6,fo(z)),pe.addColorStop(1,fo(Is(z,j.low,.55))),c.fillStyle=pe,c.fillRect(0,0,d,h),ee(d*.62,-h*.12,Math.max(d*.85,h*.55),j.sky,j.skyA),ee(d*.05,h*1.05,d*.45,j.mass,j.massA),c.globalAlpha=1,D<.999){let me=Math.hypot(d,h),Me=n.x||d/2,ge=n.y||h/2,se=D*D*(3-2*D),je=Math.max(0,me*1.15*se-me*.45),De=je+me*.55,Ke=c.createRadialGradient(Me,ge,je,Me,ge,De);Ke.addColorStop(0,`rgba(0,0,0,${Math.min(1,se*1.6)})`),Ke.addColorStop(1,"rgba(0,0,0,0)"),c.globalCompositeOperation="destination-in",c.fillStyle=Ke,c.fillRect(0,0,d,h),c.globalCompositeOperation="source-over"}}let B=ua();for(let j of O?.glows??[]){c.save(),c.globalAlpha=j.k*D,c.translate(j.x,j.y),c.scale(1,j.h/j.w);let z=c.createRadialGradient(0,0,0,0,0,j.w);z.addColorStop(0,`rgba(${B.glow},${B.glowA})`),z.addColorStop(.5,`rgba(${B.glow},${B.glowA*.31})`),z.addColorStop(1,`rgba(${B.glow},0)`),c.fillStyle=z,c.fillRect(-j.w,-j.w,j.w*2,j.w*2),c.restore()}$>.002&&le($);for(let j of O?.grounds??[])Ie(j,j,1);m=T}function ee(D,f,T,B,j){let z=c.createRadialGradient(D,f,0,D,f,T);z.addColorStop(0,`rgba(${B},${j})`),z.addColorStop(1,`rgba(${B},0)`),c.fillStyle=z,c.fillRect(D-T,f-T,T*2,T*2)}let ne=Array.from({length:160},(D,f)=>{let T=Math.sin(f*12.9898)*43758.5453,B=T-Math.floor(T),j=Math.sin(f*78.233)*12345.678%1;return[B*Math.PI*2,Math.abs(j)*.9-.25,.3+f%7/10]});function le(D){let f=O?.stage??{x:0,y:0,w:d,h},T=2**(x.exposure*.5),B=x.left,j=x.right,z=f.x+f.w/2,pe=f.y+f.h*.52,me=x.yaw,Me=x.pitch;c.save(),c.globalAlpha=D,c.fillStyle="#070808",c.fillRect(0,0,d,h),c.fillStyle="#ffffff";for(let[it,rt,Qe]of ne){let ve=it-me*Qe,be=z+Math.sin(ve)*f.w*.9,he=pe-(rt+Me*.6*Qe)*f.h;Math.cos(ve)<-.2||be<f.x||be>f.x+f.w||(c.globalAlpha=D*.1*Qe*T,c.fillRect(be,he,1.1,1.1))}c.globalAlpha=D;let ge=pe+f.h*(.12-Me*.55),se=O?.product?.ground??pe+f.h*.18,je=c.createLinearGradient(0,ge,0,f.y+f.h);je.addColorStop(0,"rgba(255,255,255,0)"),je.addColorStop(.25,`rgba(255,255,255,${.035*T})`),je.addColorStop(1,"rgba(255,255,255,0)"),c.fillStyle=je,c.fillRect(f.x,ge,f.w,f.y+f.h-ge);let De=O?.product?.x??z,Ke=O?.product?.d??f.h*.4;for(let[it,rt]of[[-1,B],[1,j]]){if(rt<=.01)continue;let Qe=De+it*Ke*(1.1+.5*Math.sin(me*it+.4)),ve=.18+.3*Math.max(0,Math.sin(.15+Me));c.save(),c.translate(Qe,se),c.scale(1,ve);let be=c.createRadialGradient(0,0,0,0,0,Ke*1.3);be.addColorStop(0,`rgba(240,242,240,${.12*rt*T})`),be.addColorStop(1,"rgba(240,242,240,0)"),c.fillStyle=be,c.beginPath(),c.arc(0,0,Ke*1.3,0,Math.PI*2),c.fill(),c.restore();let he=it<0?f.x:f.x+f.w,Ae=c.createRadialGradient(he,pe,0,he,pe,f.w*.45);Ae.addColorStop(0,`rgba(230,234,232,${.07*rt*T})`),Ae.addColorStop(1,"rgba(230,234,232,0)"),c.fillStyle=Ae,c.fillRect(f.x,f.y,f.w,f.h)}let St=c.createRadialGradient(z,pe,f.h*.2,z,pe,Math.hypot(f.w,f.h)*.62);St.addColorStop(0,"rgba(0,0,0,0)"),St.addColorStop(1,"rgba(0,0,0,.55)"),c.fillStyle=St,c.fillRect(0,0,d,h),c.restore()}function Ie(D,f,T){if(!Number.isFinite(f.d+f.x+D.y)||f.d<=0)return;let B=f.d/2,j=$>.5||ua().orb.dark;c.save(),c.globalAlpha=T,c.translate(f.x,D.y),c.scale(1,.2);let z=c.createRadialGradient(0,0,0,0,0,B*1.5);j?(z.addColorStop(0,"rgba(240,240,236,.12)"),z.addColorStop(1,"rgba(240,240,236,0)"),c.globalCompositeOperation="lighter"):(z.addColorStop(0,"rgba(70,72,78,.22)"),z.addColorStop(.5,"rgba(70,72,78,.07)"),z.addColorStop(1,"rgba(70,72,78,0)")),c.fillStyle=z,c.beginPath(),c.arc(0,0,B*1.5,0,Math.PI*2),c.fill(),c.restore()}let qe={orb:t,reduced:Qa,chamber:x,body:{get x(){return n.x},get y(){return n.y},get d(){return n.d},get hosted(){return n.hosted}},addBackdrop:D=>A.add(D),removeBackdrop:D=>A.delete(D),drawBackdrop:ie,exportPNG(D,f=t.element){let B=document.createElement("canvas");B.width=Math.round(D.w*2),B.height=Math.round(D.h*2);let j=B.getContext("2d");j.drawImage(g,D.x*p,D.y*p,D.w*p,D.h*p,0,0,B.width,B.height);for(let z of f.querySelectorAll("canvas")){let pe=z.getBoundingClientRect();j.drawImage(z,(pe.left-D.x)*2,(pe.top-D.y)*2,pe.width*2,pe.height*2)}return new Promise(z=>B.toBlob(z,"image/png"))}};W=js(qe),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__exit={api:qe,body:n,site:W,get scene(){return O},get visibility(){return R}})}export{mo as EXIT};
