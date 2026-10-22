import{e as Ga,f as hr,h as Kr,i as Xr,j as fr,k as mr,n as Jr,o as Zr,p as br,r as xr,t as Qr,u as eo,v as Ya,w as $a,x as Ua,y as Te,z as to}from"./chunk-MONRGDUC.js";var at=[{id:"products",label:"Products",route:"#/products",line:"Objects, buttons and pieces, ready to use.",action:"Explore products",clip:"products",words:["products","product","pieces","piece","objects","gallery","shop"]},{id:"templates",label:"Templates",route:"#/templates",line:"Complete compositions to start from.",action:"Browse templates",clip:"templates",words:["templates","template","compositions","websites","cassettes"]},{id:"studio",label:"Studio",route:"#/studio",line:"Shape the light. Make it yours.",action:"Open Studio",clip:"studio",words:["studio","editor","customize","customise","edit","workshop"]},{id:"sound",label:"Sound",route:"#/sound",line:"Voices and the quiet sounds of glass.",action:"Listen",clip:"sound",words:["sound","sounds","voice","voices","audio","listen"]}];var vr=e=>(Object.values(e).forEach(a=>a&&typeof a=="object"&&vr(a)),Object.freeze(e)),Va=vr({version:1,shell:{roughness:.01,thickness:.78,ior:1.58,tint:"#cdd2cf",tintAmount:.72,elastic:0},interior:{kind:"light",amount:.5,size:.5,motion:.4,fill:.5,colour:"#f1f0ec"},light:{colour:"#f6f6f3",strength:.9,x:-.04,y:-.3,z:.12,spread:.8,glow:.3},motion:{idle:0},voice:{enabled:!0,response:.6}}),La=(e,a,i,r)=>vr({id:e,name:a,line:i,family:"orb",config:{...structuredClone(Va),...Object.fromEntries(Object.entries(r).map(([d,f])=>[d,{...Va[d],...f}]))}}),Vt=[La("original","Light","Clear glass holding one soft white light.",{}),La("beads","Beads","Small glass beads resting and rolling inside the shell.",{interior:{kind:"beads",amount:.6,size:.55,motion:.45},light:{strength:.7},shell:{thickness:.15,ior:1.3}}),La("glitter","Glitter","Fine reflective flecks suspended in the volume.",{interior:{kind:"glitter",amount:.6,size:.35,motion:.35,colour:"#f4f4f2"}}),La("liquid","Liquid","A clear liquid with a meniscus that moves with the glass.",{interior:{kind:"liquid",fill:.42,motion:.5,colour:"#dfe3e1"},light:{strength:.78}}),La("gel","Gel","A soft gel body; the shell answers with a damped give.",{interior:{kind:"gel",amount:.55,motion:.45,colour:"#e4e6e3"},shell:{elastic:.55}})],yr=Vt[0].config,jt=e=>Vt.find(a=>a.id===e)??Vt[0],ft=[{id:"orb",name:"The Orb",kind:"Interactive object",published:!0,line:"A 3D sphere for your own work, in twenty versions: glass, metal, porcelain, bloom, and glass with light, sparkle or beads inside.",receives:["ES module (Three.js r186) with the sphere and its material","The version you choose","Integration notes and dependency list"],source:["dist/light-orb.js","dist/orb-three.js","dist/orb-lighting.js","dist/orb-floor.js"],preview:"orb",studio:!0,presets:Vt.map(e=>e.id),readiness:"preview_ready",missing:["price","checkout provider","packaged download (source export not yet assembled)"],price:null},{id:"orb-slider",name:"Orb Slider",kind:"Interactive control",published:!0,code:"kit",line:"A glass capsule whose thumb is a small orb. Slide it to enter; a spring brings it home.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Keyboard and pointer support","Six materials"],source:["dist/intro/activation.js","dist/intro/glass-control.js"],preview:"slider",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package (currently embedded in the intro)"],price:null},{id:"orb-wave",name:"Orb Wave",kind:"Surface effect",published:!1,line:"The ripple the Orb leaves on the floor when it lands, drawn in light.",receives:["Light-world shader source","Impact trigger API","Integration notes"],source:["dist/intro/light-world.js"],preview:"wave",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"background-pack",name:"Background Pack",kind:"Two environments",published:!1,line:"A dark world and a light one, and the change between them.",receives:["Dark and warm environment shader","Exposure transition","Integration notes"],source:["dist/intro/light-world.js"],preview:"backgrounds",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"crystal-controls",name:"Crystal Controls",kind:"Interface kit",published:!0,code:"kit",line:"Buttons, switches, fields and sliders in six glass materials, with light that follows the pointer.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Every state: hover, focus, pressed, selected, disabled, loading","Six materials"],source:["dist/app/glass.css.js"],preview:"controls",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged download"],price:null}],Wt=e=>ft.find(a=>a.id===e),ao=ft.filter(e=>e.published!==!1),xi=[{id:"the-light-orb",name:"The Light Orb",line:"This website\u2019s own beginning: the Orb as host, a quiet greeting, the quotation and the four destinations.",cover:{src:"./media/templates/the-light-orb.cover.jpg",from:"dist/intro.html (post-intro welcome, live render)",meta:"./media/templates/the-light-orb.cover.json"},route:"#/",includes:["Centred welcome with the hosting Orb","Quotation scene","Destination selector"],published:!0,starter:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged source export"],price:null},{id:"brunito",name:"BRUNITO",category:"Ecommerce",subtitle:"Ecommerce Design & Development",showcase:!0,line:"An interactive ecommerce experience featuring responsive layouts, customised product pages and a refined shopping interface.",cover:{src:"./media/templates/brunito.cover.jpg",from:"BRUNITO demo homepage (live render)",meta:"./media/templates/brunito.cover.json"},demo:"https://carlatres3.github.io/brunito/",cta:"Explore Demo",includes:["Editorial homepage and collections","Product pages with real variants and galleries","Cart drawer and cart (purchases disabled)","Desktop, tablet and mobile"],published:!0,readiness:"showcase",price:null}],mt=xi.filter(e=>e.published!==!1),ht={engine:"Kokoro-82M v1.0",licence:"Apache-2.0",rights:{onSite:"yes",download:"not offered"}},oa=[{id:"samantha",name:"Heart",kokoro:"af_heart",grade:"A",locale:"en-US",accent:"American",gender:"female",line:"Warm and clear. The guide\u2019s own voice.",full:!0,...ht},{id:"bella",name:"Bella",kokoro:"af_bella",grade:"A\u2212",locale:"en-US",accent:"American",gender:"female",line:"Bright and expressive, with a smile in it.",full:!0,...ht},{id:"emma",name:"Emma",kokoro:"bf_emma",grade:"B\u2212",locale:"en-GB",accent:"British",gender:"female",line:"Composed and precise. A gallery voice.",full:!0,...ht},{id:"daniel",name:"Michael",kokoro:"am_michael",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Calm and grounded. Steady narration.",full:!0,...ht},{id:"nicole",name:"Nicole",kokoro:"af_nicole",grade:"B\u2212",locale:"en-US",accent:"American",gender:"female",line:"Close and hushed, almost a whisper.",lines:"samantha",...ht},{id:"aoede",name:"Aoede",kokoro:"af_aoede",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Soft and lyrical.",lines:"samantha",...ht},{id:"kore",name:"Kore",kokoro:"af_kore",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Even and confident.",lines:"bella",...ht},{id:"isabella",name:"Isabella",kokoro:"bf_isabella",grade:"C",locale:"en-GB",accent:"British",gender:"female",line:"Light and friendly.",lines:"emma",...ht},{id:"fenrir",name:"Fenrir",kokoro:"am_fenrir",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Deep and resonant.",lines:"daniel",...ht},{id:"puck",name:"Puck",kokoro:"am_puck",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Lively and quick.",lines:"daniel",...ht},{id:"george",name:"George",kokoro:"bm_george",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"Measured and classic.",lines:"daniel",...ht},{id:"fable",name:"Fable",kokoro:"bm_fable",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"A storyteller\u2019s warmth.",lines:"daniel",...ht}],Ct=e=>oa.find(a=>a.id===e)??oa[0],Wa={home:"Welcome to The Light Orb. A space for creative possibilities. Let\u2019s explore.",products:"Explore the pieces. Each one is designed to become part of something of your own.",templates:"Start with a complete composition. Select a cassette to preview the design.",studio:"Choose a piece, then shape its light, material and movement.",sound:"Listen before you choose. Find the voice and sounds that fit your work.",voice_audition:"A little light. A new idea. Something of your own."},wr=(e,a)=>`./media/voice/${e}.${a}.m4a`,Ca={text:"I don\u2019t know why people expect art to make sense when they accept the fact that life doesn\u2019t make sense.",author:"David Lynch",work:"interview with Kristine McKenna, Los Angeles Times, 20 August 1989",source:"https://www.latimes.com/archives/la-xpm-1989-08-20-ca-1327-story.html"};var Ta=[{id:"select",name:"Select",line:"A soft glass touch for choosing.",file:"./media/sfx/select.wav"},{id:"open",name:"Open",line:"A breath of air as a panel opens.",file:"./media/sfx/open.wav"},{id:"close",name:"Close",line:"The same air, settling.",file:"./media/sfx/close.wav"},{id:"confirm",name:"Confirm",line:"Two quiet glass tones.",file:"./media/sfx/confirm.wav"},{id:"detent",name:"Detent",line:"A precise tick for wheels and steps.",file:"./media/sfx/detent.wav"},{id:"type",name:"Type",line:"A dry, very quiet key.",file:"./media/sfx/type.wav"},{id:"level",name:"Level",line:"A short tone for volume changes.",file:"./media/sfx/level.wav"}],ro={promise:"A new drop every two weeks.",open:!1,price:null,interval:null,quota:null,plans:[{id:"ready",name:"Ready-made",line:"Choose a curated piece and use it as it is.",points:["One finished piece","Its source and integration notes"]},{id:"studio",name:"Studio",line:"Customise a piece and export your own version.",points:["Light, material and movement controls","Saved designs"]},{id:"member",name:"Membership",line:"Follow the collection as it grows.",points:["A new drop every two weeks"]}]};var oo="lightorb:audio",ha=(e,a=0,i=1)=>Math.min(i,Math.max(a,e)),kr={master:!1,guide:!0,sfx:!0,voice:oa[0].id,gain:.8,sfxGain:.5,volume:.8};function vi(){try{return{...kr,...JSON.parse(localStorage.getItem(oo)||"{}")}}catch{return{...kr}}}function io(){let e=vi();oa.some(k=>k.id===e.voice)||(e.voice=kr.voice);let a=new Set,i=null,r=null,d=null,f=null,n=null,g=null,p=new Audio;p.preload="auto",p.crossOrigin="anonymous",p.setAttribute("playsinline","");let y=null,b={clip:null,voice:null,status:"idle",error:null,energy:0,journey:new Set},F=new Map,V=new Map,C=k=>{if(!V.has(k)){let G=fetch(k).then(H=>{if(!H.ok)throw new Error(H.status);return H.blob()}).then(H=>URL.createObjectURL(H));V.set(k,G),G.catch(()=>V.delete(k))}return V.get(k)},l={},R=()=>a.forEach(k=>k(Le)),se=()=>{try{localStorage.setItem(oo,JSON.stringify(e))}catch{}};function N(){if(i)return i;let k=window.AudioContext||window.webkitAudioContext;if(!k)return null;i=new k,r=i.createGain(),r.connect(i.destination),d=i.createGain(),d.connect(r),f=i.createGain(),f.connect(r),n=i.createAnalyser(),n.fftSize=1024,n.smoothingTimeConstant=0,n.connect(d),g=new Float32Array(n.fftSize);try{y=i.createMediaElementSource(p),y.connect(n)}catch{y=null}return Ue(),i}function Ue(){if(!i)return;let k=i.currentTime;r.gain.setTargetAtTime(e.master?e.volume??.8:0,k,.02),d.gain.setTargetAtTime((e.guide||b.clip?.startsWith("voice_audition"),e.gain),k,.02),f.gain.setTargetAtTime(e.sfx?e.sfxGain:0,k,.02)}let qe=()=>{let k=N();k&&k.state!=="running"&&k.state!=="closed"&&k.resume().catch(()=>{}),yt()};for(let k of["pointerdown","keydown","touchend"])addEventListener(k,qe,{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden?p.paused||(p.pause(),b.status="paused",b.hiddenPause=!0,R()):b.hiddenPause&&(b.hiddenPause=!1)}),p.addEventListener("ended",()=>{b.status="ended",R()}),p.addEventListener("pause",()=>{b.status==="playing"&&(b.status="paused",R())}),p.addEventListener("playing",()=>{b.status="playing",b.error=null,R()}),p.addEventListener("error",()=>{b.clip&&(b.status="error",b.error="The recording could not be loaded.",R())}),p.addEventListener("loadedmetadata",R);let ee=(k,{voice:G=e.voice,from:H=0,kind:Z="guide"}={})=>(D=null,W(`${k}.${G}`,wr(k,G),{from:H,kind:Z,voice:G})),Y=(k,G,{from:H=0}={})=>(D=null,W(k,G,{from:H,kind:"audition"}));async function W(k,G,{from:H=0,kind:Z="guide",voice:fe=null}={}){if(Z==="guide"&&(!e.master||!e.guide))return!1;if(Be(),qe(),b.clip!==k){p.pause(),b.clip=k,b.voice=fe,b.status="loading",R();try{p.src=await C(G)}catch{p.src=G}if(b.clip!==k)return!1}if(b.env=null,ct(G,200).then(he=>{b.clip===k&&(b.env=he)}).catch(()=>{}),b.kind=Z,H?(p.readyState<1&&await new Promise(he=>p.addEventListener("loadedmetadata",he,{once:!0})),p.currentTime=H):p.currentTime&&(p.currentTime=0),R(),!e.master||Z==="guide"&&!e.guide||b.clip!==k)return!1;try{return await p.play(),!0}catch{return b.status="blocked",b.error="Playback was blocked. Press play to start it.",R(),!1}}function ue(){p.paused||p.pause(),b.status="paused",R()}async function $e(){qe();try{await p.play()}catch{b.status="blocked",R()}}let le=typeof speechSynthesis<"u"?speechSynthesis:null,ye=0,oe={on:!1};function Be(){le&&oe.on&&(oe.on=!1,le.cancel())}let Oe={samantha:[/ava.*premium/i,/zoe.*premium/i,/samantha.*(enhanced|premium)/i,/(aria|jenny|emma|ava).*natural/i,/natural.*(female|aria|jenny)/i,/google us english/i,/google uk english female/i,/^(ava|zoe|allison|susan)\b/i,/^samantha/i],daniel:[/(evan|nathan|tom).*premium/i,/daniel.*(enhanced|premium)/i,/(guy|ryan|andrew|brian|christopher).*natural/i,/natural.*male/i,/google uk english male/i,/^(evan|nathan|tom|aaron)\b/i,/^daniel/i]},Ie=[],de=()=>{Ie=le?.getVoices()??[]};le&&(de(),le.addEventListener?.("voiceschanged",de));let Pe=[/(paulina|monica|m[oó]nica|marisol|isabela).*(premium|enhanced)/i,/(elvira|dalia|helena|ximena|paloma).*natural/i,/natural.*(spanish|espa)/i,/google espa[nñ]ol/i,/^(paulina|monica|m[oó]nica|marisol|jorge|diego)\b/i];function U(k){if(Ie.length||de(),k==="es"){let H=Ie.filter(Z=>/^es[-_]/i.test(Z.lang));if(H.length){for(let Z of Pe){let fe=H.find(he=>Z.test(he.name));if(fe)return fe}return H.find(Z=>Z.localService===!1)??H[0]}}let G=Ie.filter(H=>/^en[-_]/i.test(H.lang));for(let H of Oe[Ct(e.voice).gender==="male"?"daniel":"samantha"]){let Z=G.find(fe=>H.test(fe.name));if(Z)return Z}return G.find(H=>H.localService===!1)??G[0]}let $=null,M="./media/voice/lines/",j=()=>$??=fetch(`${M}manifest.json`).then(k=>k.ok?k.json():null).catch(()=>null);j();let D=null;function P(k,{id:G,onend:H,lang:Z}={}){if(!k||!e.master||!e.guide)return H?.(),!1;let fe=D={};if(G){let he=Ct(e.voice).lines??e.voice;return Be(),p.pause(),b.kind="guide",b.clip=`line:${G}`,b.status="loading",R(),j().then(async ne=>{let je=ne?.lines?.[G]?.text===k?ne.lines[G].files?.[he]:null;if(D!==fe)return;if(!je){_(k,{onend:H,lang:Z});return}let De=M+je;try{await C(De)}catch{D===fe&&_(k,{onend:H,lang:Z});return}D===fe&&(b.clip=null,H&&p.addEventListener("ended",()=>{D===fe&&H()},{once:!0}),W(`line:${G}.${he}`,De,{kind:"guide",voice:he}))}),!0}return _(k,{onend:H,lang:Z})}function _(k,{onend:G,lang:H}={}){if(!le||!k||!e.master||!e.guide)return G?.(),!1;qe(),p.pause(),le.cancel();let Z=U(H),fe=Z&&(!Z.localService||/premium|enhanced|natural/i.test(Z.name)),he=k.match(/[^.!?]+[.!?]*\s*/g)?.map(je=>je.trim()).filter(Boolean)??[k],ne={};return oe.u=ne,oe.on=!0,b.kind="guide",b.clip="speech",b.status="playing",R(),he.forEach((je,De)=>{let I=new SpeechSynthesisUtterance(je);Z&&(I.voice=Z,I.lang=Z.lang),I.rate=fe?1:.94,I.pitch=1,I.volume=e.volume??.8,I.onboundary=()=>{ye=1},I.onstart=()=>{ye=1},De===he.length-1&&(I.onend=I.onerror=()=>{oe.u===ne&&(oe.on=!1,b.status="stopped",R(),G?.())}),le.speak(I)}),!0}let X=()=>U()?.name??null;function te(){D=null,Be(),p.pause(),b.status=b.clip?"stopped":"idle",R()}function ce(k){p.duration&&(p.currentTime=ha(k)*p.duration,R())}let J=performance.now();function ie(){let k=performance.now(),G=Math.min(.1,(k-J)/1e3);J=k;let H=0;if(oe.on&&e.master)ye=Math.max(0,ye-G*3.2),H=ha(.35+.45*ye+.15*Math.sin(k/90));else if(!y&&b.env&&!p.paused&&e.master&&p.duration)H=ha(b.env.bins[Math.min(b.env.bins.length-1,Math.floor(p.currentTime/p.duration*b.env.bins.length))]*1.1);else if(n&&!p.paused&&e.master){n.getFloatTimeDomainData(g);let fe=0;for(let ne=0;ne<g.length;ne++)fe+=g[ne]*g[ne];let he=Math.sqrt(fe/g.length);H=ha((he-.008)/.16)}let Z=H>b.energy?.05:.18;return b.energy+=(H-b.energy)*(1-Math.exp(-G/Z)),b.energy<.001&&(b.energy=0),b.energy}let Fe=(k,G=e.voice,H=72)=>ct(wr(k,G),H);async function ct(k,G=72){let H=`${k}|${G}`;if(F.has(H))return F.get(H);let Z=(async()=>{let fe=await(await fetch(k)).arrayBuffer(),he=window.OfflineAudioContext||window.webkitOfflineAudioContext,ne=await new he(1,44100,44100).decodeAudioData(fe),je=ne.getChannelData(0),De=Math.max(1,Math.floor(je.length/G)),I=[],we=0;for(let Ce=0;Ce<G;Ce++){let Qe=0;for(let Mt=Ce*De;Mt<(Ce+1)*De;Mt++)Qe+=je[Mt]*je[Mt];let Jt=Math.sqrt(Qe/De);I.push(Jt),we=Math.max(we,Jt)}return{bins:I.map(Ce=>Ce/(we||1)),duration:ne.duration}})();return F.set(H,Z),Z.catch(()=>F.delete(H)),Z}let ge={press:"select",release:"select",volume:"level",case:"open"},Ve={select:90,type:70,detent:50,level:110,open:220,close:220,confirm:400},_e={select:.7,type:.45,detent:.6,level:.5,open:.6,close:.55,confirm:.7},Se={},Je=0;function pt(k){Se[k]||!i||(Se[k]=fetch(`./media/sfx/${k}.wav`).then(G=>G.arrayBuffer()).then(G=>i.decodeAudioData(G)).then(G=>Se[k]=G).catch(()=>Se[k]=null))}function Ze(k,G=.5){if(k=ge[k]||k,!e.master||!e.sfx)return;let H=N();if(!H||H.state!=="running")return;let Z=performance.now();if(Z-(l[k]??0)<(Ve[k]??80)||Je>3)return;l[k]=Z;let fe=Se[k];if(!fe||fe instanceof Promise){pt(k);return}let he=H.createBufferSource(),ne=H.createGain();he.buffer=fe,ne.gain.value=(_e[k]??.6)*(k==="level"?.6+.4*ha(G):1),k==="level"&&(he.playbackRate.value=.85+.3*ha(G)),he.connect(ne),ne.connect(f),Je++,he.onended=()=>{Je--,ne.disconnect()},he.start()}let yt=()=>{if(i)for(let k of Object.keys(Ve))pt(k)},Le={prefs:e,state:b,el:p,get ready(){return!!i},get position(){return p.duration?p.currentTime/p.duration:0},get time(){return p.currentTime||0},get duration(){return p.duration||0},get playing(){return oe.on||!p.paused&&!p.ended},set(k){Object.assign(e,k),se(),qe(),Ue(),(!e.master||!e.guide&&b.kind==="guide")&&(p.paused||p.pause(),Be()),R()},play:ee,playUrl:Y,say:P,voiceName:X,pause:ue,resume:$e,stop:te,seek:ce,energy:ie,peaks:Fe,peaksUrl:ct,sfx:Ze,unlock:qe,once(k){return b.journey.has(k)||!e.master||!e.guide?Promise.resolve(!1):(b.journey.add(k),ee(k).then(G=>(G||b.journey.delete(k),G)))},on(k){return a.add(k),()=>a.delete(k)}};return Le}var Sr=ft.filter(e=>e.published!==!1),lo=e=>e.id==="orb"||e.code==="kit",yi=" Everything is free during early access, and Studio is open to try.",wi={"reply.missed":"I didn\u2019t catch that. Tap me and try again, or type.","reply.intro":`Hello, I\u2019m the Light Orb, your guide here. Tap me and speak, or type: ask me for recommendations, materials and textures, or say Products, Templates, Studio or Sound and I\u2019ll take you there.${yi}`,"reply.greet":"Hi, I\u2019m the Light Orb. Tap me whenever you want to talk.","reply.help":"Ask me which Orb suits your project, about its materials and textures, or how to get the free code. Or say Products, Templates, Studio or Sound and I\u2019ll take you there.","reply.thanks":"With pleasure. I\u2019m right here when you need me.","reply.who":"I\u2019m the Light Orb, the guide of this place. I can recommend a piece or a texture, answer your questions, and take you anywhere on the site.","reply.back":"Going back.","reply.unknown":"I\u2019m still learning words. Ask me for a recommendation, or say Products, Templates, Studio or Sound.","reply.mic":"The microphone is off. You can type to me instead."},ki=" Todo es gratis durante el acceso anticipado, y Studio est\xE1 abierto para probarlo.",Si={"reply.missed":"No te he entendido. T\xF3came e int\xE9ntalo otra vez, o escr\xEDbeme.","reply.intro":`Hola, soy la Light Orb, tu gu\xEDa aqu\xED. T\xF3came y habla, o escr\xEDbeme: p\xEDdeme recomendaciones, materiales y texturas, o di Productos, Plantillas, Studio o Sonido y te llevo.${ki}`,"reply.greet":"Hola, soy la Light Orb. T\xF3came cuando quieras hablar.","reply.help":"Preg\xFAntame qu\xE9 Orb encaja con tu proyecto, por sus materiales y texturas, o c\xF3mo conseguir el c\xF3digo gratis. O di Productos, Plantillas, Studio o Sonido y te llevo.","reply.thanks":"Con gusto. Aqu\xED estoy cuando me necesites.","reply.who":"Soy la Light Orb, la gu\xEDa de este lugar. Te recomiendo piezas y texturas, respondo tus preguntas y te llevo a cualquier parte de la web.","reply.back":"Volvemos.","reply.unknown":"A\xFAn estoy aprendiendo palabras. P\xEDdeme una recomendaci\xF3n, o di Productos, Plantillas, Studio o Sonido.","reply.mic":"El micr\xF3fono est\xE1 desactivado. Puedes escribirme."},ia=(e,a="en")=>a==="es"?{id:null,text:Si[e],lang:"es"}:{id:e,text:wi[e],lang:"en"},no={profile:"your profile",downloads:"your downloads",saved:"what you have saved",designs:"the designs you made in Studio"};function Ei(e,a){if(e==="products"&&a){let i=Sr.find(r=>r.id===a);if(i)return{id:`present.product.${i.id}`,text:`This is ${i.name}. ${lo(i)?"Try its versions; each one is free, with its code.":"Try its versions, or shape it in Studio."}`}}if(e==="templates"&&a){let i=mt.find(r=>r.id===a);if(i)return{id:`present.template.${i.id}`,text:`You are looking at the template ${i.name}. ${i.line}`}}return e==="products"?{id:"present.products",text:`Products: ${Sr.length} pieces, ready to use. Choose one to see it alive.`}:e==="templates"?{id:"present.templates",text:"Templates: complete compositions to start from."}:e==="studio"?{id:"present.studio",text:"This is Studio, free while we build it. Shape the light, then save your design."}:e==="sound"?{id:"present.sound",text:"This is Sound: the voices and quiet sounds of glass."}:e==="membership"?{id:"present.membership",text:"This is Membership. Everything is free for now; leave your email to hear first when plans open."}:e==="account"?a&&no[a]?{id:`present.account.${a}`,text:`This is your account, showing ${no[a]}.`}:{id:"present.account",text:"This is your account."}:e==="privacy"?{id:"present.privacy",text:"This is the privacy page: what the site keeps, and what you can ask for."}:e==="terms"?{id:"present.terms",text:"These are the terms of use of the site."}:e==="licence"?{id:"present.licence",text:"This is the licence: what you can do with the free Orb and with the pieces."}:e==="signin"?{id:"present.signin",text:"Use the email you joined with to link this device to your early access."}:e==="signup"?{id:"present.signup",text:"Join early access with your email. Everything is free while we build it, and you will hear first when new pieces open."}:{id:"present.home",text:"Welcome to The Light Orb. I\u2019m your guide: tap me to talk."}}var so={products:"Productos: objetos de luz y vidrio. Elige uno para verlo vivo.",templates:"Plantillas: composiciones completas para empezar.",studio:"Esto es Studio, gratis mientras lo construimos. Da forma a la luz y guarda tu dise\xF1o.",sound:"Esto es Sonido: las voces y los sonidos del vidrio.",membership:"Esto es Membres\xEDa. Ahora todo es gratis; deja tu email y sabr\xE1s primero cu\xE1ndo abren los planes.",home:"Bienvenida a The Light Orb. Soy tu gu\xEDa: t\xF3came para hablar."};function co(e,a,i){let r=Ei(a,i);if(e!=="es")return{...r,lang:"en"};if(a==="products"&&i){let d=Sr.find(f=>f.id===i);if(d)return{id:null,lang:"es",text:`Esto es ${d.name}. Prueba sus versiones${lo(d)?"; cada una es gratis, con su c\xF3digo":", o dale forma en Studio"}.`}}return so[a]&&!i?{id:null,lang:"es",text:so[a]}:{...r,lang:"en"}}var po=e=>({id:`already.${e.id}`,text:`We are already here. ${e.text}`}),uo=e=>({id:`piece.${e.id}`,text:`Here is ${e.name}. ${e.line}`}),go=e=>({id:`open.${e.id}`,text:`Opening ${e.name}.`}),ho=()=>({id:"piece.orb",text:`Here is the Orb. ${ft[0].line}`});var fa=(e,a,i)=>e+(a-e)*i,ma=e=>{let a=parseInt(String(e).replace("#",""),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]},Sn=ma("#f3d8c5"),$i={fill:.08,lobe:.2,wall:.55,core:.034},bt=e=>structuredClone(e??Va);function Ka(e,a,{dark:i=!1,envBoost:r=1,exposure:d=0,left:f=.65,right:n=.55}={}){let g=a.shell,p=a.light,y=a.interior;e.setOptics({...$i,lobe:fa(.1,.3,p.spread),core:fa(.026,.044,p.spread)}),e.setInterior({kind:y.kind,amount:y.amount,size:y.size,motion:y.motion,fill:y.fill,colour:y.colour}),e.setElastic(g.elastic??0);let b=ma(g.tint);e.setMaterial({roughness:g.roughness,thickness:fa(.3,1.4,g.thickness),ior:g.ior,envMapIntensity:(i?1.9:2.1)*r*2**(d*.5),tint:b,tintDistance:g.tintAmount>.001?fa(8,.4,g.tintAmount):0}),e.setNeutral?.(!0);let F=ma(p.colour),V=Math.max(...F);e.setLight({tint:F.map(l=>l/Math.max(.05,V)*1.05),spread:fa(.7,1.6,p.spread)}),e.setBloom(fa(.004,.08,p.glow)),e.setFocus({x:p.x,y:p.y,z:p.z}),e.setTone(i?"dark":"light"),e.setVolumeWorld(0),e.lockFeather([.5,.515]);let C=l=>(Math.round(l*10)/10).toFixed(1);return e.setWorld(i?`chamber:${C(f)}:${C(n)}`:"gallery"),{emission:p.strength/.72*2**(d*.35),voice:a.voice}}var ot=(e,a)=>a.split(".").reduce((i,r)=>i?.[r],e),Ma=e=>Math.min(1,Math.max(0,e));function fo(e={}){let a=e.material??{},i=e.interior??{},r=e.light??{},d=bt(jt("original").config);if(a.tint){d.shell.tint=a.tint;let[f,n,g]=ma(a.tint),p=Math.max(f,n,g)-Math.min(f,n,g);p>.04&&(d.shell.tintAmount=Math.min(.97,.8+p*.2))}if(d.shell.ior=Math.min(2,Math.max(1,1+.58*(a.refraction??1))),d.shell.roughness=Math.min(.5,Math.max(0,.01+(a.frost??0)*.45)),d.interior.amount=Ma(d.interior.amount*(1+(i.amount??0))),d.interior.size=Ma(d.interior.size*(i.size??1)),d.interior.motion=Ma(d.interior.motion*(i.speed??1)),d.light.strength=Ma(d.light.strength*(i.glow??1)),d.light.glow=Ma(d.light.glow*(r.key??1)),r.colour&&(d.light.colour=r.colour),a.tint){let f=ma(a.tint),n=ma(d.light.colour);Math.max(...f)-Math.min(...f)>.04&&(d.light.colour="#"+n.map((p,y)=>Math.round((p*.4+f[y]*.6)*255).toString(16).padStart(2,"0")).join(""))}return d}var mo=`
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
/* Primary (owner 2026-10-14): one solid piece \u2014 no lit bottom rim, no lower glow, no
   darker ledge; depth is a soft shadow all round. Shared by every .gb.primary. */
.gb.primary{background:linear-gradient(180deg,rgba(62,66,64,.95) 0%,rgba(36,39,38,.96) 100%);
  box-shadow:inset 0 1px 1px rgba(255,255,255,.22),0 0 0 1px rgba(0,0,0,.14),0 8px 22px -8px rgba(23,26,25,.42)}
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
`;var bo=`
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
.caption{position:fixed;left:50%;bottom:22px;transform:translate(-50%,8px);max-width:min(560px,84vw);padding:9px 16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-radius:12px;font-size:14px;text-align:center;
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
.fo-cv .dev-body{inset:7% 6% 13%}
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
`;var Ke=null,xt=null,ba=null,Aa=0,Li=performance.now()/1e3,He={exposure:1,target:1,impacts:[null,null],next:0,strength:1,scale:90,horizon:.27,lamp:.9,orb:null};function Xa(e){if(!xt){xt=document.createElement("canvas"),xt.className="world-preview",xt.setAttribute("aria-hidden","true"),xt.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:inherit";try{Ke=eo(xt)}catch{Ke=null}}return Ke&&(ba=e,e.prepend(xt),Er(),Ci()),xt}function qa(){cancelAnimationFrame(Aa),Aa=0,xt?.remove(),ba=null}function Er(){if(!ba||!Ke)return;let e=ba.getBoundingClientRect();Ke.resize(Math.max(2,e.width),Math.max(2,e.height),Math.min(devicePixelRatio||1,1.5))}addEventListener("resize",Er);var Me={state:He,setExposure(e,a=!1){He.target=e,a&&(He.exposure=e)},impact(e,a,i=He.strength){let r=He.next++%2;He.impacts[r]={x:e,y:a,at:performance.now()/1e3,strength:i}},set(e){Object.assign(He,e)},setOrb(e){He.orb=e},get canvas(){return xt}};function Ci(){cancelAnimationFrame(Aa);let e=()=>{if(!ba||!Ke)return;let a=performance.now()/1e3,i=ba.getBoundingClientRect();Math.abs(i.width-xt.width/Ke.ratio)>2&&Er(),He.exposure+=(He.target-He.exposure)*.05;let r=i.height,d=He.orb;Ke.setHorizon(He.horizon),Ke.setExposure(He.exposure),Ke.setNightGain(1),d?(Ke.setOrb(d.x,d.y,d.d),Ke.setLamp(d.x,d.y,d.d*3,He.lamp*(1-He.exposure)),Ke.setReveal(d.x,d.y,Math.hypot(i.width,r),He.exposure*60)):(Ke.setReveal(0,0,1,0),Ke.setLamp(0,0,1,0)),He.impacts.forEach((f,n)=>Ke.setImpact(n,f?.x??0,f?.y??0,f?a-f.at:-1,f?.strength??0,He.scale)),Ke.render(a-Li),Aa=requestAnimationFrame(e)};Aa=requestAnimationFrame(e)}var Ti=/^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/,Za=e=>typeof e=="string"&&e.length<=254&&Ti.test(e.trim()),xo="trescarla@gmail.com",Oa=()=>`<p class="note contact">Questions? <a href="mailto:${xo}">${xo}</a></p>`,vo="lightorb:profile",Mi=e=>String(e).replace(/[&<>"]/g,a=>`&#${a.charCodeAt(0)};`);async function $r({email:e,name:a="",source:i}){if(e=String(e??"").trim(),a=String(a??"").trim().slice(0,40),!Za(e))return{ok:!1,error:"Please enter a valid email address."};if(!$a)return{ok:!1,error:"Early access sign-up opens soon. Nothing was sent."};try{let r=await fetch($a,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,...a?{name:a}:{},source:i,lang:(navigator.language||"en").slice(0,5)})});if(!r.ok)return{ok:!1,error:r.status===429?"Too many tries \u2014 please wait a minute.":"That did not go through. Please try again later."}}catch{return{ok:!1,error:"That did not go through. Please check your connection and try again."}}try{let r=JSON.parse(localStorage.getItem(vo))??{};localStorage.setItem(vo,JSON.stringify({...r,email:e,...a?{name:a}:{},joined:r.joined??new Date().toISOString()}))}catch{}return Te("waitlist_join",{source:i}),{ok:!0}}var Lr=e=>`<div class="joined glass" role="status" tabindex="-1"><p class="kicker">You\u2019re in</p>
  <h2>Welcome to early access</h2><p>We\u2019ll write to <b>${Mi(e)}</b> when new pieces and Studio updates open. Everything stays free while we build it.</p>
  <div class="acts eq"><a class="gb small primary" href="#/studio">Open Studio</a><a class="gb small" href="#/account">Your account</a></div></div>`;function na(e,{compact:a=!1,label:i="",title:r="Join early access"}={}){let d=!!$a;return`<form class="form interest wl${a?" wl-c":""}" data-waitlist="${e}" novalidate>
    ${a?"":`<h2>${r}</h2>`}
    <label class="fl"><span>${i||(a?"Join early access \u2014 free; one email when new pieces open":"Free. We email you when new pieces and Studio updates open.")}</span>
      <span class="wl-row"><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"${d?"":" disabled"}>
      <button class="gb${a?" small":""}" type="submit"${d?"":" disabled"}><span>Join</span></button></span></label>
    <p class="note" data-wlmsg role="status" aria-live="polite">${d?'We only keep your email to tell you about new pieces and Studio updates. See <a href="#/privacy">privacy</a>; leave any time.':'Sign-up opens soon \u2014 nothing typed here is sent yet. See <a href="#/privacy">privacy</a>.'}</p>
  </form>`}function Qa(e){e.querySelectorAll("[data-waitlist]").forEach(a=>a.addEventListener("submit",async i=>{if(i.preventDefault(),!$a)return;let r=a.querySelector("[data-wlmsg]"),d=a.querySelector("input"),f=a.querySelector("button"),n=d.value.trim();if(!Za(n)){r.textContent="Please enter a valid email address.",d.focus();return}f.disabled=!0,f.setAttribute("aria-busy","true");let g=await $r({email:n,source:a.dataset.waitlist});if(g.ok){let p=document.createElement("div");p.innerHTML=Lr(n);let y=p.firstElementChild;a.replaceWith(y),y.focus({preventScroll:!0});return}r.textContent=g.error,f.disabled=!1,f.removeAttribute("aria-busy")}))}var Ja=500;function yo(e){return`<div class="fb" data-fbwrap><button class="tl" type="button" data-fbbtn aria-expanded="false" aria-controls="fb-p"><span>What's missing?</span></button>
    <form class="form fb-p" id="fb-p" data-feedback="${e}" novalidate hidden>
      <label class="fl"><span>Tell us what Studio or the pieces still need</span>
        <textarea class="gi" name="text" rows="3" maxlength="${Ja}" required></textarea></label>
      <div class="acts"><button class="gb small" type="submit"${Ua?"":" disabled"}><span>Send</span></button></div>
      <p class="note" data-fbmsg role="status" aria-live="polite">Up to ${Ja} characters. Only the text and the page are kept.</p>
    </form></div>`}function wo(e,{sfx:a=()=>{}}={}){e.querySelectorAll("[data-fbwrap]").forEach(i=>{let r=i.querySelector("[data-fbbtn]"),d=i.querySelector("[data-feedback]");r.addEventListener("click",()=>{let f=d.hidden;d.hidden=!f,r.setAttribute("aria-expanded",String(f)),a(f?"open":"close"),f&&d.querySelector("textarea").focus()}),d.addEventListener("submit",async f=>{if(f.preventDefault(),!Ua)return;let n=d.querySelector("[data-fbmsg]"),g=d.querySelector("textarea"),p=d.querySelector("button"),y=g.value.trim();if(!y){n.textContent="Write a few words first.",g.focus();return}if(y.length>Ja){n.textContent=`Please keep it under ${Ja} characters.`;return}p.disabled=!0;try{let b=await fetch(Ua,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:y,page:d.dataset.feedback})});b.ok?(n.textContent="Thank you \u2014 we read every note.",g.value="",Te("feedback_send",{page:d.dataset.feedback})):n.textContent=b.status===429?"Too many notes for now \u2014 please try again later.":"That did not go through. Please try again later."}catch{n.textContent="That did not go through. Please try again later."}p.disabled=!1})})}var Cr=[["clear","Clear glass",0],["chrome","Liquid metal",1],["porcelain","Porcelain over glass",2],["bloom","Milky glass \xB7 cloud",3],["core","Glass \xB7 light core",4],["points","Glass \xB7 points of light",5],["glitter","Glass \xB7 glitter",6],["beads","Glass \xB7 beads",7],["liquid","Glass \xB7 liquid",8]],ar=Object.fromEntries(Cr.map(([e,,a])=>[e,a])),Tr={clear:[[1,1,1],[1,1,1]],chrome:[[1,1,1],[1,1,1]],porcelain:[[.13,.17,.18],[.86,.64,.3]],bloom:[[1,.42,.45],[1,.72,.68]],core:[[1,.97,.92],[1,1,1]],points:[[.92,.96,1],[1,1,1]],glitter:[[.95,.96,1],[1,1,1]],beads:[[.97,.97,.96],[1,.9,.95]],liquid:[[.55,.78,.95],[.9,.97,1]]},tr=[-.6,.55,.6],Ai=Math.hypot(...tr),qi=Math.atan2(tr[0],tr[2])*180/Math.PI,Oi=Math.asin(tr[1]/Ai)*180/Math.PI,za=e=>"#"+e.map(a=>Math.round(Math.min(1,Math.max(0,a))*255).toString(16).padStart(2,"0")).join(""),rr=e=>{let a=parseInt(String(e).replace("#",""),16)||0;return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]};function ko(e={id:"clear",base:"clear"}){let a=ar[e.base]===void 0?"clear":e.base,[i,r]=Tr[a];return{v:1,variant:e.id||a,base:a,material:{tint:za(e.tint??i),accent:za(e.accent??r),refraction:1,dispersion:0,frost:0,rim:1,opacity:1,iridescence:0,exposure:1},interior:{amount:0,size:1,speed:1,glow:1,fill:.55},light:{angle:+qi.toFixed(2),height:+Oi.toFixed(2),key:1,rim:1,environment:1,horizon:1,colour:"#ffffff"},motion:{spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},scene:{background:"none",colour:"#0b0c0c",colour2:"#2a2d2c",size:1,shadow:0,reflection:0}}}var er=e=>e&&typeof e=="object"&&!Array.isArray(e);function xa(e,a){let i=structuredClone(e);if(!er(a))return i;for(let[r,d]of Object.entries(a))r in i&&(er(i[r])?er(d)&&(i[r]=xa(i[r],d)):typeof d==typeof i[r]&&(typeof d!="number"||Number.isFinite(d))&&(i[r]=d));return ar[i.base]===void 0&&(i.base="clear"),i}function or(e,a){let i={};for(let[r,d]of Object.entries(a))if(er(d)){let f=or(e?.[r]??{},d);Object.keys(f).length&&(i[r]=f)}else if(typeof d=="number"){let f=Math.round(d*1e3)/1e3;(e?.[r]===void 0||Math.round(e[r]*1e3)/1e3!==f)&&(i[r]=f)}else e?.[r]!==d&&(i[r]=d);return i}var zi=e=>btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var So=(e,a)=>zi(JSON.stringify(or(a,e)));var it=[{id:"clear",base:"clear",name:"Clear",line:"Thick clear glass, nothing inside but its own depth."},{id:"smoke",base:"clear",name:"Smoke",line:"Smoked glass, a grey depth that darkens to the rim.",tint:[.6,.62,.65]},{id:"amber",base:"clear",name:"Amber",line:"Warm amber glass, like light through honey.",tint:[1,.8,.52]},{id:"chrome",base:"chrome",name:"Chrome",line:"Liquid chrome that keeps folding the room it reflects."},{id:"gold",base:"chrome",name:"Liquid Gold",line:"Molten gold folding over itself.",tint:[1,.79,.45]},{id:"gunmetal",base:"chrome",name:"Gunmetal",line:"Dark liquid metal with cold highlights.",tint:[.5,.53,.57]},{id:"porcelain",base:"porcelain",name:"Porcelain",line:"Raised porcelain bands with gold edges over dark glass."},{id:"silverline",base:"porcelain",name:"Silverline",line:"Porcelain bands edged in silver over dark glass.",accent:[.82,.84,.88]},{id:"celadon",base:"porcelain",name:"Celadon",line:"Porcelain bands over green celadon glass.",tint:[.22,.36,.3]},{id:"bloom",base:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud."},{id:"lilac",base:"bloom",name:"Lilac",line:"Milky glass holding a slow violet cloud.",tint:[.62,.45,1],accent:[.86,.76,1]},{id:"lagoon",base:"bloom",name:"Lagoon",line:"Milky glass holding a slow sea-blue cloud.",tint:[.2,.62,.9],accent:[.6,.92,.9]},{id:"core",base:"core",name:"Core",line:"Clear glass holding one soft white light at its centre."},{id:"dawn",base:"core",name:"Dawn",line:"Clear glass holding a warm, low light.",tint:[1,.72,.45]},{id:"starlight",base:"points",name:"Starlight",line:"Clear glass full of small points of light that drift and twinkle."},{id:"firefly",base:"points",name:"Firefly",line:"Warm points of light drifting slowly inside the glass.",tint:[1,.78,.4]},{id:"glitter",base:"glitter",name:"Glitter",line:"Fine silver flecks that catch the light as the sphere turns."},{id:"goldleaf",base:"glitter",name:"Gold Leaf",line:"Flakes of gold suspended in clear glass.",tint:[1,.78,.4]},{id:"beads",base:"beads",name:"Beads",line:"Small milky glass beads floating inside the shell."},{id:"pearls",base:"beads",name:"Pearls",line:"Soft pearls with a faint rainbow sheen, floating inside.",tint:[1,.95,.97],accent:[.85,.9,1]}],Lo=ar,Eo={0:{tint:[1,1,1],accent:[1,1,1]},1:{tint:[1,1,1],accent:[1,1,1]},2:{tint:[.13,.17,.18],accent:[.86,.64,.3]},3:{tint:[1,.42,.45],accent:[1,.72,.68]},4:{tint:[1,.97,.92],accent:[1,1,1]},5:{tint:[.92,.96,1],accent:[1,1,1]},6:{tint:[.95,.96,1],accent:[1,1,1]},7:{tint:[.97,.97,.96],accent:[1,.9,.95]},8:{tint:[.55,.78,.95],accent:[.9,.97,1]}},Kt=e=>ko(it.find(a=>a.id===e)??it[0]),Ii=e=>{let a=it.find(r=>r.id===e)??it[0],i=Lo[a.base];return{k:i,tint:a.tint??Eo[i].tint,accent:a.accent??Eo[i].accent}},Pi=`
  uniform mat3 uRot;
  varying vec3 vN; varying vec3 vP; varying vec3 vObj;
  void main() {
    vObj = uRot * position;              // the material turns with the drag
    vN = normalize(normalMatrix * normal);
    vec4 wp = modelViewMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    gl_Position = projectionMatrix * wp;
  }`,ji=`
  precision highp float;
  uniform int uKind; uniform vec3 uTint; uniform vec3 uAccent; uniform float uTime; uniform float uStir; uniform mat3 uRot;
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
    float k = 0.035 * uDisp;
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
      if (uDisp > 0.0) { vec3 d3 = dispersed(V, N, eta); vc += (vec3(d3.r, through, d3.b) - through) * 0.3025; }
      col = vc * vec3(0.985, 0.99, 1.0) * mix(vec3(1.0), uTint, 0.35 + 0.65 * smoothstep(0.9, 0.2, ndv));
      alpha = clamp(0.34 + 0.66 * pow(1.0 - ndv, 1.6) + caustic * 0.4 + fres, 0.0, 1.0);
    } else if (uKind >= 4) {
      // Clear glass with something inside: a soft core, points of light, flecks or beads.
      float eta = 1.0 / (1.0 + 0.45 * uIor);
      vec3 T = refract(-V, N, eta);
      float wall = smoothstep(0.55, 0.15, ndv);
      float thr = env(normalize(T * vec3(1.0, -1.0, 1.0)));
      vec3 dsp = vec3(0.0);
      if (uDisp > 0.0) { vec3 d3 = dispersed(V, N, eta); dsp = (vec3(d3.r, thr, d3.b) - thr) * 0.25; }
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
        vec3 fp = p * 1.5 / uSize + vec3(t * 0.06, -t * 0.04, t * 0.05) + uStir * 0.4;
        float sw = fbm(fp + fbm(fp * 1.7) * 1.6);
        float d = smoothstep(0.42 - 0.2 * uAmt, 0.72 - 0.2 * uAmt, sw) * (1.0 - smoothstep(0.55, 0.95, length(p)));
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
  }`,Ra=null;function Di(){if(Ra)return Ra;let e=document.createElement("canvas"),a=new xr({canvas:e,alpha:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0});a.setClearColor(0,0);let i=new fr,r=new br(30,1,.1,20);r.position.set(0,0,4.9);let d=new Zr({vertexShader:Pi,fragmentShader:ji,transparent:!0,premultipliedAlpha:!0,uniforms:{uKind:{value:0},uTint:{value:new Ga(1,1,1)},uAccent:{value:new Ga(1,1,1)},uTime:{value:0},uStir:{value:0},uRot:{value:new hr},...Object.fromEntries(Object.entries(Co).map(([n,g])=>[n,{value:Array.isArray(g)?new Ga(...g):g}]))}}),f=new mr(new Jr(1,128,96),d);return i.add(f),Ra={r:a,scene:i,camera:r,mat:d,mesh:f,list:new Set,raf:0},Ra}var Co={uIor:1,uDisp:0,uFrost:0,uRim:1,uOpacity:1,uIrid:0,uExp:1,uAmt:0,uSize:1,uGlow:1,uFill:.55,uKeyDir:[-.6/Math.hypot(.6,.55,.6),.55/Math.hypot(.6,.55,.6),.6/Math.hypot(.6,.55,.6)],uKey:1,uRimL:1,uEnv:1,uHorizon:1,uLightCol:[1,1,1]},$o=Math.tan(Math.asin(1/4.9))/Math.tan(15*Math.PI/180),Ni=1/(4.9*Math.tan(15*Math.PI/180));function Hi(e){let a=e.cfg;if(!a){let g=Ii(e.kind);return{...Co,uKind:g.k,uTint:g.tint,uAccent:g.accent}}let i=a.material,r=a.interior,d=a.light,f=d.angle*Math.PI/180,n=d.height*Math.PI/180;return{uKind:Lo[a.base]??0,uTint:rr(i.tint),uAccent:rr(i.accent),uIor:i.refraction,uDisp:i.dispersion,uFrost:i.frost,uRim:i.rim,uOpacity:i.opacity,uIrid:i.iridescence,uExp:i.exposure,uAmt:r.amount,uSize:Math.max(.2,r.size),uGlow:r.glow,uFill:r.fill,uKeyDir:[Math.cos(n)*Math.sin(f),Math.sin(n),Math.cos(n)*Math.cos(f)],uKey:d.key,uRimL:d.rim,uEnv:d.environment,uHorizon:d.horizon,uLightCol:rr(d.colour)}}function Mr(){let e=Ra;e.raf=0;let a=performance.now()/1e3,i=Math.min(devicePixelRatio||1,1.5);for(let d of e.list){if(!d.visible||!d.canvas.isConnected)continue;d.step(a);let f=Math.max(2,Math.round(d.canvas.clientWidth*i)),n=Math.max(2,Math.round(d.canvas.clientHeight*i));(d.canvas.width!==f||d.canvas.height!==n)&&(d.canvas.width=f,d.canvas.height=n),e.r.setSize(f,n,!1),e.camera.aspect=f/n,e.camera.updateProjectionMatrix();let g=e.mat.uniforms;for(let[b,F]of Object.entries(Hi(d)))Array.isArray(F)?g[b].value.fromArray(F):g[b].value=F;g.uTime.value=d.time,g.uStir.value=d.stir,g.uRot.value.copy(d.rot),e.mesh.scale.setScalar(d.scale),e.mesh.position.y=d.lift,e.r.render(e.scene,e.camera);let p=d.ctx;p.clearRect(0,0,f,n);let y=d.cfg?.scene;y?Bi(d,p,f,n,e.r.domElement,y):p.drawImage(e.r.domElement,0,0,f,n)}let r=!1;for(let d of e.list)if(d.visible&&d.canvas.isConnected){r=!0;break}r&&(e.raf=requestAnimationFrame(Mr))}var sa=null;function Bi(e,a,i,r,d,f){if(f.background==="solid")a.fillStyle=f.colour,a.fillRect(0,0,i,r);else if(f.background==="gradient"){let y=a.createRadialGradient(i/2,r*.42,0,i/2,r*.5,Math.hypot(i,r)*.6);y.addColorStop(0,f.colour2),y.addColorStop(1,f.colour),a.fillStyle=y,a.fillRect(0,0,i,r)}let n=$o*e.scale*r/2,g=r/2-e.lift*Ni*r/2,p=r/2+$o*f.size*r/2;if(f.shadow>0){let y=Math.max(0,p-(g+n)),b=1/(1+y/n*2);a.save(),a.translate(i/2,p),a.scale(1,.16);let F=a.createRadialGradient(0,0,0,0,0,n*(1.05+(1-b)*.5));F.addColorStop(0,`rgba(0,0,0,${(.55*f.shadow*b).toFixed(3)})`),F.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=F,a.beginPath(),a.arc(0,0,n*1.6,0,Math.PI*2),a.fill(),a.restore()}if(f.reflection>0&&p<r){let y=Math.min(r-p,n*2);sa||=document.createElement("canvas"),(sa.width!==i||sa.height!==r)&&(sa.width=i,sa.height=r);let b=sa.getContext("2d");b.clearRect(0,0,i,r),b.save(),b.translate(0,p*2),b.scale(1,-1),b.drawImage(d,0,0,i,r),b.restore(),b.globalCompositeOperation="destination-in";let F=b.createLinearGradient(0,p,0,p+y);F.addColorStop(0,`rgba(0,0,0,${(.5*f.reflection).toFixed(3)})`),F.addColorStop(1,"rgba(0,0,0,0)"),b.fillStyle=F,b.fillRect(0,0,i,r),b.globalCompositeOperation="source-over",a.drawImage(sa,0,0)}a.drawImage(d,0,0,i,r)}function Ia(e,a="clear",{interactive:i=!0,reduced:r=matchMedia("(prefers-reduced-motion: reduce)").matches,config:d=null}={}){let f;try{f=Di()}catch{let ee=()=>{};return new Proxy({},{get:()=>ee})}let n=document.createElement("canvas");n.className="sph-c",n.setAttribute("aria-hidden","true"),e.append(n);let g={spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},p=()=>N.cfg?.motion??g,y={v:.4,vel:r?0:.12},b={v:-.15,vel:0},F={x:0,y:0,tx:0,ty:0},V=new Kr,C=new Xr,l=performance.now()/1e3,R=null,se=0,N={canvas:n,ctx:n.getContext("2d"),kind:a,cfg:d?xa(Kt(d.variant||a),d):null,visible:!1,time:Math.random()*40,stir:0,speech:0,scale:1,lift:0,rot:new hr,step(ee){let Y=Math.min(.05,ee-l);l=ee,se+=Y;let W=p(),ue=r?0:W.spin;R||(y.vel+=(ue-y.vel)*Y*.8,b.vel*=Math.exp(-Y*3),b.v+=(W.tilt-b.v)*Y*.8),y.v+=y.vel*Y,b.v=Math.max(-1.2,Math.min(1.2,b.v+b.vel*Y)),F.x+=(F.tx*W.pointer-F.x)*Y*5,F.y+=(F.ty*W.pointer-F.y)*Y*5,N.stir*=Math.exp(-Y*1.6),N.time+=Y*(r?.3:1)*(1+N.stir*3)*(N.cfg?N.cfg.interior.speed:1),C.set(b.v+F.y*.25,y.v+F.x*.35,W.roll,"YXZ"),V.makeRotationFromEuler(C),N.rot.setFromMatrix4(V);let $e=N.cfg?N.cfg.scene.size:1,le=r?0:1;N.scale=$e*(1+le*W.breathe*Math.sin(se*1.3)+N.speech*W.speech*.06),N.lift=le*W.bob*$e*Math.sin(se*Math.PI*2*W.bobSpeed)}};N.cfg&&(N.kind=N.cfg.variant);let Ue=(ee,Y,W=.016)=>{let ue=p().inertia;y.v+=ee*.01,b.v+=Y*.01,y.vel=ee*.01/W*.6*ue,b.vel=Y*.01/W*.6*ue};if(i){n.style.touchAction="pan-y",n.style.cursor="grab",n.addEventListener("pointerdown",W=>{R={x:W.clientX,y:W.clientY,t:performance.now(),moved:!1},n.setPointerCapture(W.pointerId),n.style.cursor="grabbing"}),n.addEventListener("pointermove",W=>{let ue=n.getBoundingClientRect();if(F.tx=((W.clientX-ue.left)/ue.width-.5)*2,F.ty=((W.clientY-ue.top)/ue.height-.5)*2,!R)return;let $e=performance.now(),le=W.clientX-R.x,ye=W.clientY-R.y,oe=Math.max(8,$e-R.t)/1e3;Math.hypot(le,ye)>3&&(R.moved=!0),Ue(le,ye,oe),R.x=W.clientX,R.y=W.clientY,R.t=$e});let ee=()=>{R&&(R.moved||(N.stir=Math.min(1.5,N.stir+p().stir)),R=null,n.style.cursor="grab")};n.addEventListener("pointerup",ee),n.addEventListener("pointercancel",ee),n.addEventListener("pointerleave",()=>{F.tx=F.ty=0});let Y=!1;n.addEventListener("pointerdown",()=>{Y=!1},!0),n.addEventListener("pointermove",()=>{R?.moved&&(Y=!0)}),n.addEventListener("click",W=>{Y&&(W.preventDefault(),W.stopPropagation())})}let qe=new IntersectionObserver(([ee])=>{N.visible=ee.isIntersecting,N.visible&&!f.raf&&(f.raf=requestAnimationFrame(Mr))});return qe.observe(n),f.list.add(N),f.raf||(f.raf=requestAnimationFrame(Mr)),{canvas:n,setKind(ee){N.kind=ee,N.stir=1},setConfig(ee){N.cfg=ee?xa(Kt(ee.variant||N.kind),ee):null,N.cfg&&(N.kind=N.cfg.variant)},setSpeech(ee){N.speech=Math.max(0,Math.min(1,ee||0))},rotate(ee,Y){Ue(ee,Y)},resetView(){y.v=.4,b.v=p().tilt,y.vel=r?0:p().spin,b.vel=0},stir(){N.stir=Math.min(1.5,N.stir+p().stir)},dispose(){qe.disconnect(),f.list.delete(N),n.remove()}}}var To=`
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
.sx-row.sx-off{opacity:.32;cursor:not-allowed}
`;var ve=(e,a=0,i=1)=>Math.min(i,Math.max(a,e)),Fi=(e,a,i)=>e+(a-e)*i,Mo="lo:studio2",zo=2,Ao=Math.PI/180,_i="https://carlatres3.github.io/light-orb/embed/v1/orb.js",Ye=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),Ro=e=>it.find(a=>a.id===e)??it[0];function la(e="orb",a="clear"){let i=Ro(a).id;return{v:zo,version:1,family:Wt(e)?e:"orb",preset:i,sph:Kt(i),zoom:1,orb:bt(jt("original").config),scene:{exposure:0,left:.65,right:.55,env:.5},view:{yaw:0,pitch:0,zoom:1},rot:0,slider:{length:420,height:92,tint:"#ffffff",tintAmount:0,preset:"original"},wave:{strength:.9,scale:80,exposure:1},bg:{exposure:1,horizon:.27,lamp:.8},ctl:{tint:"#ffffff",tintAmount:.1,depth:5,radius:999,blur:8}}}function Ar(e){let a=la(e?.family,e?.sph?.variant||(it.some(r=>r.id===e?.preset)?e.preset:"clear"));if(!e||typeof e!="object")return a;let i={...a};for(let r of["orb","scene","view","slider","wave","bg","ctl"])e[r]&&typeof e[r]=="object"&&(i[r]={...a[r],...structuredClone(e[r])});return e.orb?.light&&(i.orb=structuredClone(e.orb)),e.sph&&(i.sph=xa(Kt(e.sph.variant||a.preset),e.sph)),typeof e.rot=="number"&&(i.rot=e.rot),typeof e.zoom=="number"&&(i.zoom=ve(e.zoom,.25,3)),i.preset=i.sph.variant,i}var Gi=["bloom","core","points","glitter","beads","liquid"],Yi=[["material","Material",()=>[["sph.base","Material","select",Cr.map(([e,a])=>[e,a]),"What the sphere is made of"],["sph.material.tint","Tint","color","Main colour of the glass, metal or cloud"],["sph.material.accent","Accent","color","Second colour: porcelain edges, cloud highlights, bead sheen, liquid surface"],["sph.material.refraction","Refraction",0,2.5,.01,"\xD7","How strongly the glass bends the room (index of refraction)"],["sph.material.dispersion","Dispersion",0,1,.01,"%","Colour fringes: the rainbow split of light through glass"],["sph.material.frost","Frost",0,1,.01,"%","Roughness: from polished to frosted, diffuse reflections"],["sph.material.rim","Fresnel rim",0,3,.01,"\xD7","Brightness of reflections at the edge"],["sph.material.iridescence","Iridescence",0,1,.01,"%","Thin-film rainbow sheen at the rim"],["sph.material.opacity","Opacity",0,1,.01,"%","How much of the background shows through"],["sph.material.exposure","Exposure",.2,2.5,.01,"\xD7","Overall brightness of the sphere"]]],["interior","Interior",e=>Gi.includes(e.sph.base)?[["sph.interior.amount",e.sph.base==="liquid"?"Density":"Amount",-1,1,.01,"%","How much is inside: more points, flakes, beads or cloud"],["sph.interior.size","Size",.3,2.5,.01,"\xD7","Scale of what is inside"],["sph.interior.speed","Motion",0,4,.01,"\xD7","Speed of the inner movement (also the metal and porcelain flow)"],["sph.interior.glow","Glow",0,3,.01,"\xD7","Brightness of what is inside"],...e.sph.base==="liquid"?[["sph.interior.fill","Fill level",0,1,.01,"%","How full the sphere is"]]:[]]:[["sph.interior.speed","Flow speed",0,4,.01,"\xD7","Speed of the surface flow and inner movement"]]],["light","Lighting",()=>[["sph.light.angle","Key angle",-180,180,1,"\xB0","Direction of the main soft box around the sphere"],["sph.light.height","Key height",-30,90,1,"\xB0","Height of the main soft box"],["sph.light.key","Key light",0,3,.01,"\xD7","Strength of the main soft box"],["sph.light.rim","Rim light",0,3,.01,"\xD7","Strength of the second (rim) soft box"],["sph.light.environment","Environment",0,2,.01,"\xD7","Brightness of the studio room reflected in the sphere"],["sph.light.horizon","Horizon",0,3,.01,"\xD7","The bright horizon line in reflections"],["sph.light.colour","Light colour","color","Colour of all the light"]]],["motion","Motion",()=>[["sph.motion.spin","Idle spin",-1.5,1.5,.01,"r/s","Turntable speed when nobody touches it (negative turns the other way)"],["sph.motion.tilt","Axis tilt",-1.2,1.2,.01,"rad","Rest tilt of the spin axis towards the viewer"],["sph.motion.roll","Axis roll",-1.6,1.6,.01,"rad","Sideways tilt of the spin axis"],["sph.motion.bob","Float",0,.4,.005,"r","Up-and-down float amplitude"],["sph.motion.bobSpeed","Float speed",0,3,.01,"Hz","Float cycles per second"],["sph.motion.breathe","Breathing",0,.12,.001,"%","Slow pulse of the size"],["sph.motion.pointer","Pointer follow",0,3,.01,"\xD7","How much it leans towards the pointer"],["sph.motion.stir","Tap stir",0,3,.01,"\xD7","How much a tap stirs what is inside"],["sph.motion.inertia","Drag inertia",0,2,.01,"\xD7","How long it keeps turning after a drag"],["sph.motion.speech","Speech pulse",0,3,.01,"\xD7","How much it pulses with a voice (test below)"]]],["scene","Scene",()=>[["sph.scene.background","Background","seg",[["none","None"],["solid","Solid"],["gradient","Gradient"]],"Transparent, a solid colour or a soft radial gradient"],["sph.scene.colour","Colour","color","Background colour (outer colour of the gradient)"],["sph.scene.colour2","Centre colour","color","Inner colour of the gradient"],["sph.scene.size","Sphere size",.3,1.2,.01,"%","Size of the sphere in its frame (leave room for the shadow)"],["sph.scene.shadow","Floor shadow",0,1,.01,"%","Soft contact shadow under the sphere"],["sph.scene.reflection","Reflection",0,1,.01,"%","Mirror reflection on the floor"]]]],qo={scene:["Studio light",[["scene.exposure","Exposure",-2,2,.1,"EV"],["scene.left","Left light",0,1,.01,"%"],["scene.right","Right light",0,1,.01,"%"],["scene.env","Environment",0,1,.01,"%"]]],light:["Orb light",[["orb.light.colour","Colour","color"],["orb.light.strength","Strength",0,1,.01,"%"],["orb.light.x","Position X",-.6,.6,.01,"r"],["orb.light.y","Position Y",-.8,.6,.01,"r"]]],slider:["Capsule",[["slider.length","Length",240,600,1,"px"],["slider.height","Height",60,130,1,"px"],["slider.tint","Glass tint","color"],["slider.tintAmount","Tint amount",0,1,.01,"%"],["slider.preset","Orb thumb","select",Vt.map(e=>[e.id,e.name])]]],wave:["Wave",[["wave.strength","Strength",.1,1,.01,"%"],["wave.scale","Ring scale",40,140,1,"px"],["wave.exposure","Environment",0,1,.01,"%"]]],bg:["Environment",[["bg.exposure","Dark \u2192 warm",0,1,.01,"%"],["bg.horizon","Horizon",.15,.45,.01,"%"],["bg.lamp","Orb lamp (dark)",0,1,.01,"%"]]],ctl:["Crystal controls",[["ctl.tint","Tint","color"],["ctl.tintAmount","Tint amount",0,1,.01,"%"],["ctl.depth","Optical depth",0,10,.5,"px"],["ctl.radius","Corner radius",6,999,1,"px"],["ctl.blur","Backdrop blur",0,24,1,"px"]]]},Ui={"orb-slider":["slider","light","scene"],"orb-wave":["wave"],"background-pack":["bg"],"crystal-controls":["ctl"]},Oo=e=>e.family==="orb"?Yi.map(([a,i,r])=>[a,i,r(e)]):Ui[e.family].map(a=>[a,qo[a][0],qo[a][1]]),Vi=e=>typeof e[2]=="number",qr=e=>e[5]==="%"?100:1,Wi={undo:'<path d="M9 7H4V2"/><path d="M4 7a9 9 0 1 1-1 7"/>',redo:'<path d="M15 7h5V2"/><path d="M20 7a9 9 0 1 0 1 7"/>',orbit:'<circle cx="12" cy="12" r="8"/><ellipse cx="12" cy="12" rx="8" ry="3"/>',light:'<circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',zoom:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M8.5 11h5M11 8.5v5"/>',reset:'<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>',stir:'<path d="M4 15c3-6 6 6 9 0s6-6 7 0"/>',bg:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/>',fit:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',more:'<circle cx="6" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18" cy="12" r="1"/>',plus:'<path d="M12 6v12M6 12h12"/>',minus:'<path d="M6 12h12"/>',chev:'<path d="M2 3.5l2.5 2.5L7 3.5"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',open:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v6H4V6h6"/>',dup:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',del:'<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"/>',sound:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'},Xe=(e,a="0 0 24 24")=>`<svg viewBox="${a}" aria-hidden="true">${Wi[e]}</svg>`,Ki=typeof navigator<"u"&&/Mac|iP/.test(navigator.platform||navigator.userAgent),Xt=Ki?"\u2318":"Ctrl+",Or=!1;function Xi(){if(Or||document.getElementById("sx-css")){Or=!0;return}let e=document.createElement("style");e.id="sx-css",e.textContent=To,document.head.append(e),Or=!0}function Io({api:e,audio:a,top:i,page:r,query:d,ICON:f,flash:n,product:g,store:p}){Xi();let y=new Proxy({},{get:(o,c)=>(...h)=>g.orb?.[c]?.(...h)});function b(){return l.family==="orb"&&l.preset==="clear"&&l.sph?.base==="clear"}let F=new Set(["sph.base","sph.material.tint","sph.material.refraction","sph.material.frost","sph.material.exposure","sph.interior.amount","sph.interior.size","sph.interior.speed","sph.interior.glow","sph.light.key","sph.light.environment","sph.light.colour","sph.motion.spin","sph.motion.stir","sph.motion.speech"]),V=()=>fo(l.sph),C=()=>({dark:!0,envBoost:l.sph.light.environment,exposure:Math.log2(Math.max(.05,l.sph.material.exposure))*2,left:.65,right:.55}),l;try{let o=JSON.parse(sessionStorage.getItem(Mo));l=o&&o.v===zo?Ar(o):null}catch{l=null}if(l||(l=la()),d.design&&p.design(d.design)){let o=p.design(d.design);l=Ar({...structuredClone(o.draft),family:o.family}),l.designId=o.id,l.designName=o.name}else d.family&&Wt(d.family)&&(d.family!==l.family||d.preset&&d.preset!==l.preset)&&(l=la(d.family,it.some(o=>o.id===d.preset)?d.preset:"clear"));let R=l.designId?JSON.stringify(ut(l)):null,se=[JSON.stringify(l)],N=0,Ue=[["voice_audition.samantha","Voice \xB7 Samantha"],["voice_audition.daniel","Voice \xB7 Daniel"],["home.samantha","Welcome narration"],...Ta.map(o=>[`sfx.${o.id}`,`Sound \xB7 ${o.name}`])],qe=d.sound&&Ue.some(o=>o[0]===d.sound)?d.sound:Ue[0][0];function ee(){a.prefs.master||a.set({master:!0});let[o,c]=qe.split(".");o==="sfx"?a.playUrl(qe,Ta.find(h=>h.id===c).file,{from:0}):a.play(o,{voice:c,kind:"audition",from:0}),a.sfx("select")}d.sound&&setTimeout(ee,900);let Y="orbit",W="props",ue="material",$e=!1,le={material:!0,interior:!0,light:!0,motion:!1,scene:!1,slider:!0,wave:!0,bg:!0,ctl:!0,scene_:!0},ye=()=>{try{sessionStorage.setItem(Mo,JSON.stringify(l))}catch{}};function oe(){let o=JSON.stringify(l);o!==se[N]&&(se.splice(N+1),se.push(o),N=se.length-1,se.length>120&&(se.shift(),N--)),ye(),ie()}document.body.classList.add("dark-ui","sx-on"),r.innerHTML=`
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
          <button class="sx-ib" type="button" data-zo="-1" aria-label="Zoom out" data-tip="Zoom out">${Xe("minus")}</button>
          <button class="sx-ib" type="button" data-zo="0" aria-label="Fit" data-tip="Fit (R)">${Xe("fit")}</button>
          <button class="sx-ib" type="button" data-zo="1" aria-label="Zoom in" data-tip="Zoom in">${Xe("plus")}</button>
        </div>
      </div>
      <button class="sx-grab" type="button" data-grab aria-label="Show or hide the controls" aria-expanded="false"><i></i></button>
      <aside class="sx-ins" aria-label="Inspector" data-ins></aside>
    </section>
    <div class="sx-modal" data-modal hidden></div>`;let Be=r.querySelector(".sx"),Oe=r.querySelector("[data-top]"),Ie=r.querySelector("[data-rail]"),de=r.querySelector("[data-view]"),Pe=r.querySelector("[data-stage]"),U=r.querySelector("[data-ins]"),$=r.querySelector("[data-modal]"),M=r.querySelector("[data-hud]"),j=r.querySelector("[data-grab]"),D=o=>{Be.classList.toggle("peek",!o),j.setAttribute("aria-expanded",o)};matchMedia("(max-width: 820px)").matches&&D(!1);{let o=null;j.addEventListener("pointerdown",c=>{o=c.clientY,j.setPointerCapture(c.pointerId)}),j.addEventListener("pointerup",c=>{if(o==null)return;let h=c.clientY-o;o=null,D(Math.abs(h)<12?Be.classList.contains("peek"):h<0)}),U.addEventListener("click",c=>{c.target.closest("[data-tab],[data-chip]")&&D(!0)},!0)}let P=Ia(Pe,l.preset,{config:l.sph}),_=0,X=0,te=new Proxy(P,{get(o,c){if(b()){if(c==="rotate")return E=>{_+=E*.01,y.setObjectYaw(_)};if(c==="stir")return()=>y.nudge(ve(.8*(l.sph.motion.stir??1),0,1.5));if(c==="setSpeech")return E=>y.setSpeech(ve(E*(l.sph.motion.speech??1)));if(c==="resetView")return()=>{_=0,y.setObjectYaw(0)};if(c==="canvas")return null}let h=o[c];return typeof h=="function"?h.bind(o):h}});te.canvas?.addEventListener("pointerdown",()=>{Y!=="orbit"||et||(Ee=!0)});let ce=()=>l.designName||(l.family==="orb"?`${Ro(l.preset).name} Orb`:Wt(l.family).name);function J(){Oe.innerHTML=`
      <h1 class="vh">Studio</h1>
      <div class="sx-doc">
        <span class="sx-dirty" data-dirty title="Unsaved changes"></span>
        <input class="sx-name" data-name value="${Ye(ce())}" aria-label="Design name" maxlength="48" spellcheck="false" data-tip="Rename">
        <select class="sx-sel" data-fam aria-label="Object">${ft.map(c=>`<option value="${c.id}"${c.id===l.family?" selected":""}>${Ye(c.name)}</option>`).join("")}</select>
        ${l.family==="orb"?`<select class="sx-sel" data-pre aria-label="Start from a version">${it.map(c=>`<option value="${c.id}"${c.id===l.preset?" selected":""}>${Ye(c.name)}</option>`).join("")}</select>`:""}
      </div>
      <span class="sx-sp"></span>
      <button class="sx-ib sx-more" type="button" data-more aria-label="More: object, version, reset" aria-expanded="false">${Xe("more")}</button>
      <button class="sx-ib" type="button" data-undo aria-label="Undo" data-tip="Undo (${Xt}Z)">${Xe("undo")}</button>
      <button class="sx-ib" type="button" data-redo aria-label="Redo" data-tip="Redo (${Xt}\u21E7Z)">${Xe("redo")}</button>
      <button class="sx-ib" type="button" data-resetall aria-label="Reset to the version" data-tip="Reset to the version">${Xe("reset")}</button>
      <span class="sx-sep hide-m"></span>
      <button class="sx-tb" type="button" data-save data-tip="Save to My designs (${Xt}S)">Save</button>
      <button class="sx-tb pri" type="button" data-export data-tip="Export code (${Xt}E)">Export</button>`,Oe.querySelector("[data-fam]").addEventListener("change",c=>{let h=l.preset;l=la(c.target.value,h),a.sfx("press"),Ce(),oe()}),Oe.querySelector("[data-pre]")?.addEventListener("change",c=>ct(c.target.value));let o=Oe.querySelector("[data-name]");o.addEventListener("change",()=>{l.designName=o.value.trim().slice(0,48)||void 0,l.designId&&p.renameDesign(l.designId,ce()),o.value=ce(),ye(),Le()}),o.addEventListener("keydown",c=>{c.key==="Enter"&&o.blur()}),Oe.querySelector("[data-more]").addEventListener("click",c=>{let h=Be.classList.toggle("more-open");c.currentTarget.setAttribute("aria-expanded",h),a.sfx("press")}),Oe.querySelector("[data-undo]").addEventListener("click",()=>Fe(-1)),Oe.querySelector("[data-redo]").addEventListener("click",()=>Fe(1)),Oe.querySelector("[data-resetall]").addEventListener("click",()=>{let c={designId:l.designId,designName:l.designName,zoom:l.zoom};l={...la(l.family,l.preset),...c},a.sfx("press"),Ce(),oe(),n("Reset to the version\u2019s defaults.")}),Oe.querySelector("[data-save]").addEventListener("click",()=>Ot()),Oe.querySelector("[data-export]").addEventListener("click",()=>_t()),ie()}function ie(){let o=Oe.querySelector("[data-undo]"),c=Oe.querySelector("[data-redo]");o&&(o.disabled=N<=0),c&&(c.disabled=N>=se.length-1),Oe.querySelector("[data-dirty]")?.classList.toggle("on",JSON.stringify(ut(l))!==R)}function Fe(o){let c=ve(N+o,0,se.length-1);c!==N&&(N=c,l=JSON.parse(se[c]),a.sfx("press"),ye(),Ce(),ie())}function ct(o){let c={zoom:l.zoom};l={...la("orb",o),...c},a.sfx("press"),te.stir(),Ce(),oe()}function ge(){let o=l.family==="orb",c=[["orbit","Orbit (V) \xB7 or hold space and drag"],["light",o?"Move the key light (L)":"Move the light (L)"],["zoom","Zoom: drag up/down (Z)"]].filter(([h])=>o||h==="orbit"||h==="light"&&l.family==="orb-slider");Ie.innerHTML=c.map(([h,E])=>`<button class="sx-ib" type="button" data-tool="${h}" aria-pressed="${h===Y}" aria-label="${E}" data-tip="${E}">${Xe(h)}</button>`).join("")+(o?`<hr><button class="sx-ib" type="button" data-stir aria-label="Stir" data-tip="Stir what is inside">${Xe("stir")}</button>
        <button class="sx-ib" type="button" data-checker aria-pressed="${$e}" aria-label="Transparency grid" data-tip="Transparency grid">${Xe("bg")}</button>
        <button class="sx-ib" type="button" data-snap aria-label="Download PNG" data-tip="Download a PNG">${Xe("camera")}</button>
        <button class="sx-ib" type="button" data-speak aria-label="Test with a voice" data-tip="Test the speech pulse">${Xe("sound")}</button>`:""),Ie.querySelectorAll("[data-tool]").forEach(h=>h.addEventListener("click",()=>Ve(h.dataset.tool))),Ie.querySelector("[data-stir]")?.addEventListener("click",()=>{te.stir(),a.sfx("press")}),Ie.querySelector("[data-checker]")?.addEventListener("click",()=>{$e=!$e,de.classList.toggle("checker",$e),ge()}),Ie.querySelector("[data-snap]")?.addEventListener("click",()=>ta()),Ie.querySelector("[data-speak]")?.addEventListener("click",()=>ee())}function Ve(o){Y=o,de.className=de.className.replace(/\bt-\w+/g,"")+` t-${o}`,de.classList.toggle("checker",$e),Pe.style.pointerEvents=o==="orbit"&&!et?"":"none",a.sfx("press"),ge(),we()}let _e=(o,c)=>{let h=o*qr(c),E=c[4]*qr(c),L=E>=1?0:E>=.1?1:E>=.01?2:3;return(+h.toFixed(L)).toString()},Se=()=>l.family==="orb"?{sph:Kt(l.preset)}:la(l.family);function Je(o,c){let[h,E]=o,L=ot(l,h),K=`sx-${h.replace(/\./g,"-")}`,ke=Vi(o)?o[6]:o[3+(o[2]==="select"||o[2]==="seg"?1:0)],nt=ot(c,h)!==void 0&&JSON.stringify(ot(c,h))!==JSON.stringify(L)?" mod":"",st=Ne=>`<label class="sx-lab${nt}" for="${K}"${Ne?" data-scrub":""}${ke?` title="${Ye(ke)}${Ne?" \u2014 drag to scrub":""}"`:""}>${Ye(E)}</label>`;if(b()&&h.startsWith("sph.")&&!F.has(h))return ae().replace(/^<div class="sx-row/,'<div inert title="Not available on the real Orb yet" class="sx-row sx-off');return ae();function ae(){if(o[2]==="color")return`<div class="sx-row full">${st()}<span class="sx-col"><input type="color" id="${K}" data-path="${h}" value="${L}"><input class="sx-num" data-hex="${h}" value="${L}" aria-label="${Ye(E)} hex" spellcheck="false" maxlength="7"></span></div>`;if(o[2]==="select")return`<div class="sx-row full">${st()}<select class="sx-sel" id="${K}" data-path="${h}">${o[3].map(([tt,aa])=>`<option value="${tt}"${tt===L?" selected":""}>${Ye(aa)}</option>`).join("")}</select></div>`;if(o[2]==="seg")return`<div class="sx-row full">${st()}<span class="sx-seg" role="group" id="${K}">${o[3].map(([tt,aa])=>`<button type="button" data-seg="${h}" data-v="${tt}" aria-pressed="${tt===L}">${aa}</button>`).join("")}</span></div>`;let[,,Ne,pe,Ge,We]=o,be=(L-Ne)/(pe-Ne)*100;return`<div class="sx-row">${st(!0)}<input class="sx-rng" type="range" id="${K}" data-path="${h}" min="${Ne}" max="${pe}" step="${Ge}" value="${L}" style="--p:${be}%" aria-label="${Ye(E)}">
      <span class="sx-nw"><input class="sx-num" type="text" inputmode="decimal" data-num="${h}" value="${_e(L,o)}" aria-label="${Ye(E)}${We?` (${We})`:""}"><i>${We}</i></span></div>`}}let pt=()=>Oo(l).flatMap(o=>o[2]),Ze=o=>pt().find(c=>c[0]===o),yt=()=>matchMedia("(max-width: 820px)").matches;function Le(){let o=U.querySelector(".sx-body")?.scrollTop??0,c=Oo(l),h=Se();c.some(L=>L[0]===ue)||(ue=c[0][0]);let E=[["props","Properties"],["designs","My designs"],["feedback","Feedback"]];U.innerHTML=`
      <div class="sx-tabs" role="tablist" aria-label="Inspector">${E.map(([L,K])=>`<button class="sx-tab" role="tab" type="button" data-tab="${L}" aria-selected="${L===W}">${K}</button>`).join("")}</div>
      ${W==="props"?`<div class="sx-chips" role="group" aria-label="Section">${c.map(([L,K])=>`<button type="button" data-chip="${L}" aria-pressed="${L===ue}">${K}</button>`).join("")}</div>`:""}
      <div class="sx-body" data-body>${W==="props"?c.map(([L,K,ke])=>{let nt=le[L]??!0,st=ke.filter(ae=>ot(h,ae[0])!==void 0&&JSON.stringify(ot(h,ae[0]))!==JSON.stringify(ot(l,ae[0]))).length;return`<section class="sx-sec${L===ue?"":" m-off"}" data-sec="${L}"><button class="sx-sh" type="button" data-tog="${L}" aria-expanded="${nt}">${Xe("chev","0 0 9 9")}${K}<span class="n">${st?`${st} changed`:""}</span></button>
          <div class="sx-rows" ${nt?"":"hidden"}>${ke.map(ae=>Je(ae,h)).join("")}
          ${L==="motion"?`<div class="sx-row full"><span class="sx-lab">Test sound</span><select class="sx-sel" data-snd aria-label="Sound to test">${Ue.map(([ae,Ne])=>`<option value="${ae}"${ae===qe?" selected":""}>${Ye(Ne)}</option>`).join("")}</select></div>
            <div class="sx-acts"><button class="sx-tb" type="button" data-testsnd>Play to test the pulse</button><button class="sx-tb" type="button" data-stir2>Stir</button></div>`:""}
          ${L==="wave"?'<div class="sx-acts"><button class="sx-tb" type="button" data-trigger>Trigger a wave</button></div>':""}
          </div></section>`}).join("")+'<p class="sx-hint sx-pad">Drag a label to scrub (<span class="sx-kbd">\u21E7</span> \xD710, <span class="sx-kbd">\u2325</span> fine). Gold dots mark values changed from the version.</p>':W==="designs"?k():G()}</div>`,U.querySelector("[data-body]").scrollTop=o,H()}function k(){let o=p.designs();return`<div class="sx-pad">
      <h3 class="sx-h">My designs</h3>
      ${o.length?`<div class="sx-ds">${o.map(c=>`<article class="sx-d${c.id===l.designId?" cur":""}" data-did="${Ye(c.id)}">
        ${c.thumb?`<img src="${c.thumb}" alt="">`:'<span class="ph"></span>'}
        <div><input value="${Ye(c.name)}" aria-label="Design name" maxlength="48" data-dn><small>${Ye(c.familyName||"")} \xB7 ${new Date(c.at).toLocaleDateString()}</small></div>
        <div class="ab"><button class="sx-ib" type="button" data-dopen aria-label="Open" data-tip="Open">${Xe("open")}</button><button class="sx-ib" type="button" data-ddup aria-label="Duplicate" data-tip="Duplicate">${Xe("dup")}</button><button class="sx-ib" type="button" data-ddel aria-label="Delete" data-tip="Delete">${Xe("del")}</button></div>
      </article>`).join("")}</div>`:'<p class="sx-empty">Nothing saved yet. Save keeps the design on this device; it also appears in Account \u2192 My Designs.</p>'}
      <div class="sx-acts" style="margin-bottom:16px"><button class="sx-tb pri" type="button" data-savenew>Save as new design</button>${l.designId?'<button class="sx-tb" type="button" data-new>New from version</button>':""}</div>
      ${l.family==="orb"?`<h3 class="sx-h">Start from a version</h3><div class="sx-vers">${it.map(c=>`<button class="sx-ver" type="button" data-ver="${c.id}" aria-pressed="${c.id===l.preset&&!l.designId}" title="${Ye(c.line)}">${Ye(c.name)}</button>`).join("")}</div>`:""}
    </div>`}function G(){return`<div class="sx-ea">
      ${'<p class="access">Studio is in early access \u2014 free while we build it. Designs stay on this device.</p>'}
      ${yo("studio")}${na("studio",{compact:!0,label:"Get notified about Studio updates (optional)"})}
      <h3 class="sx-h" style="margin-top:18px">Shortcuts</h3>
      <p class="sx-hint"><span class="sx-kbd">${Xt}Z</span> undo \xB7 <span class="sx-kbd">${Xt}\u21E7Z</span> redo \xB7 <span class="sx-kbd">${Xt}S</span> save \xB7 <span class="sx-kbd">${Xt}E</span> export \xB7 <span class="sx-kbd">V</span> orbit \xB7 <span class="sx-kbd">L</span> light \xB7 <span class="sx-kbd">Z</span> zoom \xB7 <span class="sx-kbd">R</span> reset view \xB7 <span class="sx-kbd">space</span>+drag orbit</p>
    </div>`}function H(){U.querySelectorAll("[data-tab]").forEach(o=>o.addEventListener("click",()=>{W=o.dataset.tab,a.sfx("press"),Le()})),U.querySelectorAll("[data-chip]").forEach(o=>o.addEventListener("click",()=>{ue=o.dataset.chip,a.sfx("press"),Le()})),U.querySelectorAll("[data-tog]").forEach(o=>o.addEventListener("click",()=>{yt()||(le[o.dataset.tog]=!(le[o.dataset.tog]??!0),a.sfx("press"),Le())})),W==="feedback"&&(wo(U,{sfx:o=>a.sfx(o)}),Qa(U)),W==="designs"&&Z(),U.querySelectorAll("input[type=range][data-path]").forEach(o=>{o.addEventListener("input",()=>{De(o.dataset.path,+o.value),ne(o.dataset.path)}),o.addEventListener("change",()=>{oe(),je(),a.sfx("release")})}),U.querySelectorAll("input[type=color][data-path]").forEach(o=>{o.addEventListener("input",()=>{De(o.dataset.path,o.value);let c=U.querySelector(`[data-hex="${o.dataset.path}"]`);c&&(c.value=o.value)}),o.addEventListener("change",()=>{oe(),je()})}),U.querySelectorAll("[data-hex]").forEach(o=>{o.addEventListener("input",()=>{/^#[0-9a-f]{6}$/i.test(o.value)&&(De(o.dataset.hex,o.value.toLowerCase()),U.querySelector(`input[type=color][data-path="${o.dataset.hex}"]`).value=o.value)}),o.addEventListener("change",()=>{/^#[0-9a-f]{6}$/i.test(o.value)||(o.value=ot(l,o.dataset.hex)),oe(),je()})}),U.querySelectorAll("select[data-path]").forEach(o=>o.addEventListener("change",()=>{if(o.dataset.path==="sph.base"){let[c,h]=Tr[o.value];l.sph.material.tint=za(c),l.sph.material.accent=za(h)}De(o.dataset.path,o.value),a.sfx("press"),te.stir(),Le(),oe()})),U.querySelectorAll("[data-seg]").forEach(o=>o.addEventListener("click",()=>{De(o.dataset.seg,o.dataset.v),a.sfx("press"),Le(),oe()})),U.querySelectorAll("[data-num]").forEach(o=>{let c=Ze(o.dataset.num);if(!c)return;let[,,h,E]=c,L=qr(c);o.addEventListener("input",()=>{let K=parseFloat(o.value);Number.isFinite(K)&&(De(o.dataset.num,ve(K/L,h,E)),he(o.dataset.num))}),o.addEventListener("change",()=>{ne(o.dataset.num),oe(),je()}),o.addEventListener("keydown",K=>{if(K.key==="Enter"&&o.blur(),K.key==="ArrowUp"||K.key==="ArrowDown"){K.preventDefault();let ke=c[4]*(K.shiftKey?10:K.altKey?.1:1);De(o.dataset.num,ve(ot(l,o.dataset.num)+(K.key==="ArrowUp"?ke:-ke),h,E)),ne(o.dataset.num),oe()}}),o.addEventListener("focus",()=>o.select())}),U.querySelectorAll("[data-scrub]").forEach(o=>{let c=o.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),h=Ze(c);if(!h)return;let[,,E,L,K]=h;o.addEventListener("pointerdown",ke=>{if(ke.button)return;ke.preventDefault(),o.setPointerCapture(ke.pointerId);let nt=ke.clientX,st=ot(l,c),ae=(L-E)/240,Ne=Ge=>{let We=Ge.shiftKey?10:Ge.altKey?.1:1,be=ve(st+(Ge.clientX-nt)*ae*We,E,L);be=Math.round(be/K)*K,De(c,+be.toFixed(5)),ne(c)},pe=()=>{o.removeEventListener("pointermove",Ne),o.removeEventListener("pointerup",pe),o.removeEventListener("pointercancel",pe),oe(),je()};o.addEventListener("pointermove",Ne),o.addEventListener("pointerup",pe),o.addEventListener("pointercancel",pe)})}),U.querySelector("[data-snd]")?.addEventListener("change",o=>{qe=o.target.value}),U.querySelector("[data-testsnd]")?.addEventListener("click",()=>ee()),U.querySelector("[data-stir2]")?.addEventListener("click",()=>te.stir()),U.querySelector("[data-trigger]")?.addEventListener("click",()=>Zt())}function Z(){U.querySelectorAll("[data-did]").forEach(o=>{let c=o.dataset.did,h=()=>p.design(c);o.querySelector("[data-dn]").addEventListener("change",E=>{let L=E.target.value.trim()||"Untitled design";p.renameDesign(c,L),l.designId===c&&(l.designName=L,ye(),J()),a.sfx("confirm")}),o.querySelector("[data-dopen]").addEventListener("click",()=>fe(h())),o.querySelector("[data-ddup]").addEventListener("click",()=>{let E=h();if(!E)return;let L={...structuredClone(E),id:Date.now().toString(36),name:`${E.name} copy`.slice(0,48),at:new Date().toISOString()};p.saveDesign(L)&&(a.sfx("confirm"),Le())}),o.querySelector("[data-ddel]").addEventListener("click",()=>{let E=h();E&&confirm(`Delete \u201C${E.name}\u201D? This cannot be undone.`)&&(p.deleteDesign(c),l.designId===c&&(delete l.designId,R=null,ye(),ie()),a.sfx("close"),Le())})}),U.querySelector("[data-savenew]")?.addEventListener("click",()=>Ot(!0)),U.querySelector("[data-new]")?.addEventListener("click",()=>ct(l.preset)),U.querySelectorAll("[data-ver]").forEach(o=>o.addEventListener("click",()=>ct(o.dataset.ver)))}function fe(o){o&&(l=Ar({...structuredClone(o.draft),family:o.family}),l.designId=o.id,l.designName=o.name,R=JSON.stringify(ut(l)),a.sfx("press"),Ce(),oe(),n(`Opened \u201C${o.name}\u201D.`))}function he(o){let c=U.querySelector(`input[type=range][data-path="${o}"]`);c&&(c.value=ot(l,o),c.style.setProperty("--p",`${(c.value-c.min)/(c.max-c.min)*100}%`))}function ne(o){let c=U.querySelector(`[data-num="${o}"]`),h=Ze(o);c&&h&&document.activeElement!==c&&(c.value=_e(ot(l,o),h)),he(o)}function je(){let o=Se();U.querySelectorAll(".sx-lab[for]").forEach(c=>{let h=c.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),E=ot(o,h);E!==void 0&&c.classList.toggle("mod",JSON.stringify(E)!==JSON.stringify(ot(l,h)))}),U.querySelectorAll("[data-sec]").forEach(c=>{let h=c.querySelectorAll(".sx-lab.mod").length,E=c.querySelector(".n");E&&(E.textContent=h?`${h} changed`:"")}),ie()}function De(o,c){let h=o.split("."),E=l;for(let L of h.slice(0,-1))E=E[L];E[h.at(-1)]=c,I()}function I(){let o=l.family;if(o==="orb"){let c=b();for(let h of Pe.children)h.style.visibility=c?"hidden":"";c?g.show(V(),C()):(P.setConfig({...l.sph,variant:l.preset}),g.hide())}else{let c=e.chamber,h=l.scene;Object.assign(c,{left:h.left,right:h.right,exposure:h.exposure,yaw:l.view.yaw*Ao,pitch:l.view.pitch*Ao,platform:!1});let E={dark:!0,envBoost:Fi(.55,1.6,h.env),exposure:h.exposure,left:h.left,right:h.right};if(o==="orb-slider"){let L=bt(jt(l.slider.preset).config);Object.assign(L.light,{strength:l.orb.light.strength,colour:l.orb.light.colour,x:l.orb.light.x,y:l.orb.light.y}),g.show(L,E)}else o==="orb-wave"||o==="background-pack"?g.show(bt(jt("original").config),E):g.hide();y.setView({yaw:0,pitch:0}),Me.set({strength:l.wave.strength,scale:l.wave.scale,horizon:o==="background-pack"?l.bg.horizon:.3,lamp:l.bg.lamp}),o==="orb-wave"&&Me.setExposure(l.wave.exposure),o==="background-pack"&&Me.setExposure(l.bg.exposure),Jt(),Mt()}we(),ye()}function we(){let o=Math.round(l.zoom*100);M.innerHTML=l.family==="orb"?`<b>${o}%</b><b>${{orbit:"Orbit",light:"Key light",zoom:"Zoom"}[Y]}</b>${Y==="light"?`<b>${Math.round(l.sph.light.angle)}\xB0 \xB7 ${Math.round(l.sph.light.height)}\xB0</b>`:""}`:""}function Ce(){let o=l.family,c=r.querySelector("[data-screen]"),h=r.querySelector("[data-scap]"),E=r.querySelector("[data-kit]");Pe.hidden=o!=="orb",r.querySelector("[data-zoombar]").hidden=o!=="orb",c.hidden=!(o==="orb-wave"||o==="background-pack"),h.hidden=o!=="orb-slider",E.hidden=o!=="crystal-controls",qa(),e.removeBackdrop(Me.canvas),c.hidden||(Xa(c),e.addBackdrop(Me.canvas),Me.setExposure(o==="background-pack"?l.bg.exposure:l.wave.exposure,!0)),o==="orb-slider"&&(h.innerHTML='<span class="cap-label">slide to enter</span>',h.setAttribute("role","slider"),h.tabIndex=0,h.setAttribute("aria-label","Slide to enter")),o==="crystal-controls"&&(E.innerHTML=`<div class="kit-swatch"><button class="gb primary" type="button">Start project</button><button class="gb" type="button">Secondary</button><input class="gi" placeholder="Enter text" aria-label="Example field"><select class="gsel" aria-label="Example select"><option>Select</option><option>Clear</option></select><button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><button class="gb gc" type="button" aria-label="Confirm">${f.check}</button></div>`),E.querySelector(".gsw")?.addEventListener("click",L=>{L.currentTarget.setAttribute("aria-checked",String(L.currentTarget.getAttribute("aria-checked")!=="true")),a.sfx("press")}),o!=="orb"&&Y==="zoom"&&(Y="orbit"),J(),ge(),Le(),I(),Ve(Y)}let Qe=0;function Jt(){let o=r.querySelector("[data-scap]");if(!o||o.hidden)return;let c=l.slider,h=c.tint,E=c.tintAmount;o.style.background=`linear-gradient(180deg, ${va(h,.1+E*.35)}, ${va(h,.03+E*.2)} 50%, ${va(h,.08+E*.3)})`}function Mt(){let o=r.querySelector("[data-kit]");if(!o||o.hidden)return;let c=l.ctl,h=c.depth,E=o.querySelector("style");E||(E=document.createElement("style"),o.append(E)),E.textContent=`.st-kit .gb,.st-kit .gi,.st-kit .gsel{border-radius:${c.radius}px;-webkit-backdrop-filter:blur(${c.blur}px) saturate(1.5);backdrop-filter:blur(${c.blur}px) saturate(1.5)}
      .st-kit .gb:not(.primary){background:linear-gradient(180deg,${va(c.tint,.3+c.tintAmount*.4)},${va(c.tint,.08+c.tintAmount*.3)} 50%,${va(c.tint,.25+c.tintAmount*.35)});
        box-shadow:inset 0 ${h*.3}px ${h*.2}px rgba(255,255,255,.95),inset 0 -${h*.6}px ${h}px -1px rgba(255,255,255,.75),inset 0 0 0 1px rgba(150,158,166,.18),inset 0 -${h*2}px ${h*2.8}px -${h*2}px rgba(120,128,136,.35),0 1px 1px rgba(40,44,50,.1),0 ${h*2}px ${h*4}px -${h*2}px rgba(40,44,50,.38)}`}let Ae=null,et=!1,Ee=!1;de.addEventListener("pointerdown",o=>{if(o.target.closest("[data-zoombar],.st-cap,.st-kit,.st-screen"))return;let c=Ee;Ee=!1,!(l.family==="orb"&&Y==="orbit"&&c&&!et)&&(Ae={x:o.clientX,y:o.clientY,lx:o.clientX,ly:o.clientY,v:{...l.view},z:l.zoom,l:{...l.sph.light},ol:{...l.orb.light}},de.setPointerCapture(o.pointerId),de.classList.add("grab"))}),de.addEventListener("pointermove",o=>{if(!Ae)return;let c=o.clientX-Ae.x,h=o.clientY-Ae.y,E=et?"orbit":Y;if(l.family==="orb")E==="orbit"&&te.rotate(o.clientX-Ae.lx,o.clientY-Ae.ly),E==="light"&&(l.sph.light.angle=(Ae.l.angle+c*.5+540)%360-180,l.sph.light.height=ve(Ae.l.height-h*.35,-30,90),I(),ne("sph.light.angle"),ne("sph.light.height")),E==="zoom"&&(l.zoom=ve(Ae.z*Math.exp(-h*.005),.25,3),we());else{if(E==="orbit"&&(l.view.yaw=ve(Ae.v.yaw-c*.25,-60,60),l.view.pitch=ve(Ae.v.pitch+h*.2,-20,35)),E==="light"){let L=g.pose.d||300;l.orb.light.x=ve(Ae.ol.x+c/L*1.6,-.6,.6),l.orb.light.y=ve(Ae.ol.y-h/L*1.6,-.8,.6),ne("orb.light.x"),ne("orb.light.y")}I()}Ae.lx=o.clientX,Ae.ly=o.clientY});let St=()=>{Ae&&(Ae=null,de.classList.remove("grab"),oe(),je())};de.addEventListener("pointerup",St),de.addEventListener("pointercancel",St),de.addEventListener("wheel",o=>{l.family==="orb"&&(o.preventDefault(),l.zoom=ve(l.zoom*Math.exp(-o.deltaY*.0015),.25,3),we(),clearTimeout(de._t),de._t=setTimeout(ye,300))},{passive:!1}),r.querySelectorAll("[data-zo]").forEach(o=>o.addEventListener("click",()=>{let c=+o.dataset.zo;l.zoom=c?ve(l.zoom*(c>0?1.25:.8),.25,3):1,c||te.resetView(),we(),ye(),a.sfx("press")})),de.addEventListener("keydown",o=>{let c={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[o.key];if(c){if(o.preventDefault(),l.family==="orb"){Y==="light"?(l.sph.light.angle=ve(l.sph.light.angle+c[0]*5,-180,180),l.sph.light.height=ve(l.sph.light.height-c[1]*5,-30,90),I(),Le(),oe()):Y==="zoom"?(l.zoom=ve(l.zoom*(c[1]<0?1.1:c[1]>0?.9:1),.25,3),we()):te.rotate(c[0]*12,c[1]*12);return}Y==="orbit"&&(l.view.yaw=ve(l.view.yaw-c[0]*5,-60,60),l.view.pitch=ve(l.view.pitch+c[1]*3,-20,35)),Y==="light"&&(l.orb.light.x=ve(l.orb.light.x+c[0]*.05,-.6,.6),l.orb.light.y=ve(l.orb.light.y-c[1]*.05,-.8,.6)),I(),Le(),oe()}});let Na=o=>o&&(o.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(o.tagName))&&!(o.type==="range"||o.type==="color");function Bt(o){if(!$.hidden){o.key==="Escape"&&Rt();return}let c=o.metaKey||o.ctrlKey,h=o.key.toLowerCase();if(c&&h==="s"){o.preventDefault(),Ot();return}if(c&&h==="e"){o.preventDefault(),_t();return}if(!Na(o.target)){if(c&&h==="z"){o.preventDefault(),Fe(o.shiftKey?1:-1);return}if(c&&h==="y"){o.preventDefault(),Fe(1);return}if(!(c||o.altKey)){if(o.key===" "){et||(et=!0,de.classList.add("t-orbit"),Pe.style.pointerEvents="none"),(o.target===document.body||de.contains(o.target))&&o.preventDefault();return}h==="v"?Ve("orbit"):h==="l"&&(l.family==="orb"||l.family==="orb-slider")?Ve("light"):h==="z"&&l.family==="orb"?Ve("zoom"):h==="r"&&(l.zoom=1,te.resetView(),l.family!=="orb"&&(l.view={yaw:0,pitch:0,zoom:1},I(),oe()),we(),ye())}}}function Sa(o){o.key===" "&&(et=!1,Ve(Y))}document.addEventListener("keydown",Bt),document.addEventListener("keyup",Sa);let At=r.querySelector("[data-scap]"),qt=null;At.addEventListener("pointerdown",o=>{o.stopPropagation(),qt={x:o.clientX,v:Qe},At.setPointerCapture(o.pointerId),a.sfx("press")}),At.addEventListener("pointermove",o=>{qt&&(Qe=ve(qt.v+(o.clientX-qt.x)/(At.offsetWidth-At.offsetHeight)))});let wt=()=>{qt&&(qt=null,a.sfx("release"),y.nudge(.5),Qe>.92?(Qe=1,a.sfx("confirm")):Qe=0)};At.addEventListener("pointerup",wt),At.addEventListener("pointercancel",wt),At.addEventListener("keydown",o=>{o.key==="ArrowRight"&&(Qe=ve(Qe+.1)),o.key==="ArrowLeft"&&(Qe=ve(Qe-.1))});function Zt(){let o=r.querySelector("[data-screen]"),c=o.getBoundingClientRect();Me.impact(c.width/2,c.height*(1-.3)+10,l.wave.strength),y.nudge(.8),a.sfx("detent")}r.querySelector("[data-screen]").addEventListener("pointerdown",o=>{if(l.family!=="orb-wave")return;let c=o.currentTarget.getBoundingClientRect();Me.impact(o.clientX-c.left,o.clientY-c.top,l.wave.strength),a.sfx("detent")});function ut(o){let{designId:c,designName:h,zoom:E,...L}=o;return L}async function ua(){try{if(l.family==="orb"&&te.canvas){let h=te.canvas,E=Math.min(h.width,h.height),L=document.createElement("canvas");L.width=L.height=240;let K=L.getContext("2d");return K.fillStyle="#0b0c0c",K.fillRect(0,0,240,240),K.drawImage(h,(h.width-E)/2,(h.height-E)/2,E,E,0,0,240,240),L.toDataURL("image/jpeg",.8)}let o=Gt(),c=await e.exportPNG(o,g.element||document.createElement("div"));if(c){let h=await createImageBitmap(c),E=document.createElement("canvas"),L=360;return E.width=L,E.height=Math.round(L*o.h/o.w),E.getContext("2d").drawImage(h,0,0,E.width,E.height),E.toDataURL("image/jpeg",.78)}}catch{}return null}async function Ot(o=!1){let c=Wt(l.family),h=!o&&l.designId||Date.now().toString(36),E=o&&l.designId?`${ce()} copy`.slice(0,48):ce(),L=await ua();p.saveDesign({id:h,name:E,family:l.family,familyName:c.name,preset:l.preset,schema:1,at:new Date().toISOString(),draft:ut(l),thumb:L})?(l.designId=h,l.designName=E,R=JSON.stringify(ut(l)),ye(),a.sfx("confirm"),n("Saved to My designs (on this device)."),J(),W==="designs"&&Le()):n("Could not save: this browser\u2019s storage is full or unavailable.")}let ga=()=>({...l.sph,variant:l.preset}),Et=()=>So(ga(),Kt(l.preset));function Ha(o=_i){let c=Et(),h=360;return`<div data-light-orb data-variant="${l.preset}"${c==="e30"?"":` data-config="${c}"`} style="width:${h}px;height:${h}px"></div>
<script type="module" src="${o}"><\/script>`}function Ba(){let o=l.sph.scene,c=o.background==="none"?"#0b0c0c":o.colour;return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${Ye(ce())} \xB7 The Light Orb</title>
<style>
  html,body{margin:0;height:100%;background:${c}}
  body{display:grid;place-items:center}
  [data-light-orb]{width:min(82vmin,560px)!important;height:min(82vmin,560px)!important}
</style>
</head>
<body>
${Ha()}
</body>
</html>
`}function Qt(){return l.family==="orb"?JSON.stringify({product:"orb",schema:1,name:ce(),variant:l.preset,config:ga(),changed:or(Kt(l.preset),ga()),embed:{attribute:"data-config",value:Et()}},null,2):JSON.stringify({schema:1,product:l.family,name:ce(),config:l[{"orb-slider":"slider","orb-wave":"wave","background-pack":"bg","crystal-controls":"ctl"}[l.family]],scene:l.scene,note:"Configuration for The Light Orb renderer. Development export; not a licensed product package."},null,2)}let zt="embed",Ft=()=>ce().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"light-orb";function _t(){l.family!=="orb"&&(zt="json"),ea(),$.hidden=!1,a.sfx("open"),$.querySelector("[data-xtab][aria-selected=true]")?.focus()}function Rt(){$.hidden=!0,a.sfx("close"),de.focus({preventScroll:!0})}function ea(){let o=l.family==="orb",c=o?[["embed","Embed code"],["html","HTML page"],["json","JSON"]]:[["json","JSON"]],h={embed:[Ha(),"Paste into any page. The data-config attribute holds your design (only what differs from the version), so it looks and moves exactly like this.",[["copy","Copy code","pri"],["dlsnip","Download snippet"]]],html:[Ba(),"A complete page with your Orb, ready to open or upload.",[["dlhtml","Download .html","pri"],["copy","Copy"]]],json:[Qt(),o?"The full configuration. The embed accepts it as data-config too (plain JSON or base64).":"The configuration of this object.",[["dljson","Download .json","pri"],["copy","Copy"]]]}[zt];$.innerHTML=`<div class="sx-dlg" role="dialog" aria-modal="true" aria-labelledby="sx-xt">
      <div class="sx-dh"><h2 id="sx-xt">Export \xB7 ${Ye(ce())}</h2><button class="sx-ib" type="button" data-xclose aria-label="Close">${Xe("close")}</button></div>
      <div class="sx-tabs" role="tablist">${c.map(([L,K])=>`<button class="sx-tab" role="tab" type="button" data-xtab="${L}" aria-selected="${L===zt}">${K}</button>`).join("")}</div>
      <div class="sx-db"><p>${h[1]}</p><textarea class="sx-code" readonly spellcheck="false" aria-label="Code">${Ye(h[0])}</textarea>
        <div class="sx-acts">${h[2].map(([L,K,ke])=>`<button class="sx-tb${ke?" "+ke:""}" type="button" data-xa="${L}">${K}</button>`).join("")}${o?'<button class="sx-tb" type="button" data-xa="png">Download PNG</button>':""}</div></div></div>`,$.querySelector("[data-xclose]").addEventListener("click",Rt),$.onclick=L=>{L.target===$&&Rt()},$.querySelectorAll("[data-xtab]").forEach(L=>L.addEventListener("click",()=>{zt=L.dataset.xtab,a.sfx("press"),ea(),$.querySelector(`[data-xtab="${zt}"]`).focus()}));let E=h[0];$.querySelectorAll("[data-xa]").forEach(L=>L.addEventListener("click",async()=>{let K=L.dataset.xa;if(K==="copy"){let ke=!1;try{await navigator.clipboard.writeText(E),ke=!0}catch{$.querySelector("textarea").select(),ke=document.execCommand?.("copy")}L.textContent=ke?"Copied":"Select and copy",a.sfx("confirm"),setTimeout(()=>{L.textContent=K==="copy"&&zt==="embed"?"Copy code":"Copy"},1600)}K==="dlsnip"&&$t(new Blob([E],{type:"text/plain"}),`${Ft()}-embed.txt`),K==="dlhtml"&&$t(new Blob([E],{type:"text/html"}),`${Ft()}.html`),K==="dljson"&&$t(new Blob([E],{type:"application/json"}),`${Ft()}.json`),K==="png"&&ta()}))}async function ta(){if(l.family==="orb"&&te.canvas){te.canvas.toBlob(o=>{o&&($t(o,`${Ft()}.png`),n("Downloaded a PNG of the Orb."))});return}if(g.element){let o=await e.exportPNG(Gt(),g.element);o&&$t(o,`${Ft()}.png`)}}function $t(o,c){let h=document.createElement("a");h.href=URL.createObjectURL(o),h.download=c,document.body.append(h),h.click(),setTimeout(()=>{URL.revokeObjectURL(h.href),h.remove()},1e3),a.sfx("confirm")}function Gt(){let o=de.getBoundingClientRect();return{x:o.left,y:o.top,w:o.width,h:o.height}}function Fa(){let o=document.querySelector(".hd"),c=o?Math.round(o.getBoundingClientRect().bottom):72;Be._hh!==c&&(Be._hh=c,Be.style.setProperty("--sx-top",`${Math.max(0,c)}px`));let h=Gt(),E=l.family,L=h.x+h.w/2,K=r.querySelector("[data-screen]"),ke=r.querySelector("[data-scap]"),nt=r.querySelector("[data-kit]"),st=innerHeight,ae={warm:0,room:"chamber",stage:h,emission:1,orb:{x:50,y:st-52,d:46,vis:0}},Ne=pe=>({...ae,product:pe,grounds:pe&&pe.ground?[{y:pe.ground,x:pe.x,d:pe.d}]:[]});if(E==="orb"){let pe=Math.round(Math.min(h.w-48,h.h-48)*.74*l.zoom);if(Pe._s!==pe&&(Pe._s=pe,Pe.style.width=Pe.style.height=`${Math.max(40,pe)}px`),te.setSpeech(a.playing?a.energy():0),!b())return Ne(null);let Ge=performance.now()/1e3,We=X?Math.min(.05,Ge-X):0;X=Ge,Ae||(_+=(l.sph.motion.spin??0)*Math.PI*2*We*.25,y.setObjectYaw(_));let be=Pe.getBoundingClientRect();return Ne({x:be.left+be.width/2,y:be.top+be.height/2,d:be.width*.9*(l.sph.scene.size??1),vis:1,snap:!0})}if(E==="orb-slider"){let pe=l.slider,Ge=Math.min(1,(h.w-40)/pe.length),We=pe.length*Ge,be=pe.height*Ge;Object.assign(ke.style,{left:`${L-We/2}px`,top:`${h.y+h.h*.5-be/2}px`,width:`${We}px`,height:`${be}px`});let tt=be*.84,aa=(be-tt)/2;return Ne({x:L-We/2+aa+tt/2+Qe*(We-be),y:h.y+h.h*.5,d:tt,vis:1,snap:!0})}if(E==="orb-wave"||E==="background-pack"){let pe=Math.min(h.w*.86,900),Ge=Math.min(h.h*.72,pe*.62);Object.assign(K.style,{left:`${L-pe/2}px`,top:`${h.y+h.h*.5-Ge/2}px`,width:`${pe}px`,height:`${Ge}px`});let We=E==="background-pack"?l.bg.horizon:.3,be=Math.min(90,pe*.12),tt=Ge*(1-We)+be*.1-be/2;return Me.setOrb({x:pe/2,y:tt,d:be}),Ne({x:L,y:h.y+h.h*.5-Ge/2+tt,d:be,vis:1})}return E==="crystal-controls"&&Object.assign(nt.style,{left:`${h.x+20}px`,top:`${h.y+20}px`,width:`${h.w-40}px`,height:`${h.h-40}px`}),Ne(null)}return Ce(),{frame:Fa,reapply:()=>I(),voiceResponse:()=>l.family==="orb"?ve(l.sph.motion.speech*.6):.6,leave(){document.removeEventListener("keydown",Bt),document.removeEventListener("keyup",Sa),te.dispose(),qa(),e.removeBackdrop(Me.canvas),document.body.classList.remove("dark-ui","sx-on"),g.hide(),Object.assign(e.chamber,{yaw:0,pitch:0})},get draft(){return l}}}function va(e,a){let i=parseInt(e.slice(1),16);return`rgba(${i>>16&255},${i>>8&255},${i&255},${a.toFixed(3)})`}function Po(e){let a=null,i=null,r=null,d={},f={emission:1},n=document.createElement("div");n.className="x-product",n.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:31",document.body.append(n);let g={x:-999,y:-999,d:100,vis:0},p={x:-999,y:-999,d:100,vis:0,vx:0,vy:0,vd:0},y=!0;function b(){return a||i||(i=Qr({container:n,diameter:240,driven:!0,background:"#f3f3f1"}).then(V=>(a=V,i=null,V.attachPointer(document.createElement("div"))(),V.setBackdrop((C,l)=>e.drawBackdrop(C,l,p)),V.setVisibility(0),V.tick(performance.now()),r&&F(),V)).catch(()=>{i=null})),i}function F(){a&&r&&(f=Ka(a,r,d),a.setEmission(Math.min(1.4,f.emission)))}return{get orb(){return a},get element(){return a?.element},get output(){return f},show(V,C={}){r=bt(V),d=C,y=!1,b(),F()},update(V,C=d){r=bt(V),d=C,F()},hide(){y=!0,a&&(a.setVisibility(0),a.setView({yaw:0,pitch:0}),a.setObjectYaw(0),a.setSpeech(0),a.tick(performance.now())),p.vis=0,p.x=-999},attachPointer(V){return a?a.attachPointer(V,{range:"volume"}):(b()?.then(C=>C?.attachPointer(V,{range:"volume"})),null)},frame(V){if(!a)return;if(!V||y){(p.vis>0||a.element.style.visibility!=="hidden")&&(p.vis=0,a.setVisibility(0),a.tick(performance.now()));return}let C=1/60,l=9;if(V.snap||p.x<-900)Object.assign(p,{x:V.x,y:V.y,d:V.d,vx:0,vy:0,vd:0});else for(let R of["x","y","d"]){let se="v"+R;p[se]+=(l*l*(V[R]-p[R])-2*l*p[se])*C,p[R]+=p[se]*C}p.vis+=((V.vis??1)-p.vis)*.2,a.holdRaster(Math.ceil(Math.max(p.d,V.d,120)*1.06)),a.setPose({x:p.x,y:p.y,diameter:p.d}),a.setVisibility(p.vis),a.tick(performance.now())},pose:p}}var Rr=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null,Pr=!!Rr;function jo({onresult:e,onend:a,onerror:i,lang:r}){if(!Rr)return i?.("unsupported"),null;let d=new Rr;d.lang=r||navigator.language||"en-US",d.interimResults=!0,d.maxAlternatives=1,d.continuous=!1;let f="",n="";d.onresult=g=>{n=[...g.results].map(p=>p[0].transcript).join(" "),g.results[g.results.length-1].isFinal&&(f=n),e?.(n,!!f)},d.onerror=g=>i?.(g.error),d.onend=()=>a?.(f||n);try{d.start()}catch{return i?.("busy"),null}return d}var Ir=e=>String(e).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),Tt=(e,...a)=>a.some(i=>new RegExp(`\\b${i}\\b`).test(e)),Ji={home:["home","start","beginning","inicio","principio","portada"],products:[...at[0].words,"productos","producto","tienda","objetos"],templates:[...at[1].words,"plantillas","plantilla","composiciones"],studio:[...at[2].words,"estudio","editar","personalizar","disenar"],sound:[...at[3].words,"sonido","sonidos","voces","escuchar","audio"],membership:["membership","member","plans","plan","pricing","price","prices","membresia","miembro","planes","precio","precios","cuesta","cost"],account:["account","profile","downloads","cuenta","perfil","descargas"],signin:["sign in","log in","login","iniciar sesion","entrar"]},Zi={home:"#/",membership:"#/membership",account:"#/account",signin:"#/signin"},Qi={"orb-slider":["slider","deslizador"],"orb-wave":["wave","ola","onda","ripple"],"background-pack":["background","backgrounds","fondo","fondos"],"crystal-controls":["controls","buttons","controles","botones","crystal"]},vt=(e,a={})=>({say:e.text,id:e.id,lang:e.lang??"en",...a}),en=/\b(hola|gracias|buenas|ayuda|ayudame|quien|que|como|donde|cual|quiero|puedes|llevame|ensename|muestrame|recomiendas|recomienda|textura|texturas|materiales|precio|cuanto|plantillas|productos|sonido|estudio|por favor|si|vale|el|la|los|las|una|para|con|del|mi|me)\b/g,tn=/\b(hello|hi|hey|thanks|thank|help|who|what|which|how|where|want|can|could|show|take|recommend|texture|textures|materials|price|the|a|an|is|are|you|me|my|please|yes|for|with|of)\b/g;function ir(e,a="en"){if(/[ñ¿¡]/i.test(String(e)))return"es";let i=Ir(e),r=i.match(en)?.length??0,d=i.match(tn)?.length??0;return r>d?"es":d>r?"en":a}function Do(e,{here:a,presentation:i,lang:r="en"}){let d=Ir(e),f=ir(e,r),n=p=>ia(p,f);if(!d)return vt(n("reply.missed"),{intent:"fallback"});if(d.split(" ").length<=3&&Tt(d,"stop","quiet","silence","shh","para","calla","callate","silencio","basta"))return{say:"",stop:!0,command:!0};if(Tt(d,"where am i","where are we","donde estoy","donde estamos","que es esto","what is this","what is here","que hay aqui"))return vt(i(f),{intent:"where"});if(Tt(d,"help","what can you do","what can i do","ayuda","ayudame","que puedes hacer","que puedo hacer"))return vt(n("reply.help"),{intent:"help"});if(Tt(d,"thank you","thanks","gracias"))return vt(n("reply.thanks"),{intent:"thanks"});if(Tt(d,"who are you","what are you","quien eres","que eres","como te llamas","your name"))return vt(n("reply.who"),{intent:"who"});if(Tt(d,"back","go back","atras","volver","vuelve"))return vt(n("reply.back"),{back:!0,command:!0});for(let[p,y]of Object.entries(Qi))if(Tt(d,...y)){let b=ft.find(F=>F.id===p&&F.published!==!1);if(b)return vt(uo(b),{go:`#/products/${p}`,quiet:!0,command:!0})}let g=mt.find(p=>d.includes(Ir(p.name)));if(g)return vt(go(g),{go:`#/templates/${g.id}`,quiet:!0,command:!0});for(let[p,y]of Object.entries(Ji))if(Tt(d,...y)){if(p===a){let b=i(f);return vt(f==="es"?{text:`Ya estamos aqu\xED. ${b.text}`,lang:"es"}:po(b),{command:!0})}return{go:Zi[p]??`#/${p}`,command:!0}}return d.split(" ").length<=5&&Tt(d,"hello","hi","hey","hola","buenas","buenos dias","buenas tardes","buenas noches","good morning","good evening")?vt(n("reply.intro"),{intent:"hello"}):Tt(d,"the orb","orb","esfera","la orb","bola")?vt(f==="es"?{text:"Aqu\xED est\xE1 la Orb. Prueba sus veinte versiones.",lang:"es"}:ho(),{go:`#/products/${ft[0].id}`,quiet:!0}):vt(n("reply.unknown"),{intent:"fallback"})}var No=()=>!!Ya,an=/^#\/(products(\/[a-z0-9-]+(\?variant=[a-z0-9-]+)?)?|templates(\/[a-z0-9-]+)?|studio|sound|membership|account|licence)?$/;async function Ho(e,a,{timeout:i=8e3}={}){if(!Ya)throw new Error("disabled");let r=new AbortController,d=setTimeout(()=>r.abort(),i);try{let f=await fetch(Ya,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({messages:e,page:a}),signal:r.signal});if(!f.ok)throw new Error(`http ${f.status}`);let n=await f.json(),g=typeof n.say=="string"?n.say.trim().slice(0,600):"";if(!g)throw new Error("empty");return{say:g,go:typeof n.go=="string"&&an.test(n.go)?n.go:void 0}}finally{clearTimeout(d)}}var Bo={},Fo={member:""},_o="",Go=e=>"",jr=e=>(location.assign(e),!0),kt={get enabled(){return!1},canCheckout:e=>!!e.length&&e.every(a=>Go(a.id)),canSubscribe:e=>!!!1,canRestore:()=>!!!1,checkout(e){return kt.canCheckout(e)?(jr(Go(e[0].id)),e[0].id):null},subscribe(e){return kt.canSubscribe(e)?jr(Fo[e]):!1},restore(){return kt.canRestore()?jr(_o):!1}};var rt={saved:"lightorb:saved",designs:"lightorb:designs",profile:"lightorb:profile"},Dt=(e,a)=>{try{return JSON.parse(localStorage.getItem(e))??a}catch{return a}},Pa=(e,a)=>{try{return localStorage.setItem(e,JSON.stringify(a)),!0}catch{return!1}},Re={saved:()=>Dt(rt.saved,[]),isSaved:(e,a)=>Dt(rt.saved,[]).some(i=>i.type===e&&i.id===a),toggleSaved(e,a,i,r){let d=Dt(rt.saved,[]),f=d.findIndex(n=>n.type===e&&n.id===a);return f>=0?d.splice(f,1):d.unshift({type:e,id:a,name:i,href:r,at:new Date().toISOString()}),Pa(rt.saved,d),f<0},designs:()=>Dt(rt.designs,[]),design:e=>Dt(rt.designs,[]).find(a=>a.id===e),saveDesign(e){let a=Dt(rt.designs,[]),i=a.findIndex(r=>r.id===e.id);return i>=0?a[i]=e:a.unshift(e),Pa(rt.designs,a.slice(0,40))},renameDesign(e,a){let i=Dt(rt.designs,[]),r=i.find(d=>d.id===e);r&&(r.name=a,Pa(rt.designs,i))},deleteDesign(e){Pa(rt.designs,Dt(rt.designs,[]).filter(a=>a.id!==e))},profile:()=>Dt(rt.profile,null),setProfile:e=>Pa(rt.profile,e)},Yo=[["profile","Profile"],["designs","My Designs"],["saved","Saved"],["downloads","Downloads"]],rn='<p class="note">Your designs and saved items are kept in this browser. Accounts that sync across devices come later; your early-access email will carry over.</p>';function ya(e,a,i="profile"){let{esc:r,audio:d}=a;Yo.some(g=>g[0]===i)||(i="profile");let f=Re.profile();e.innerHTML=`
    <section class="dest acct">
      <header class="dh"><p class="kicker">Account${f?.email?" \xB7 Early access":""}</p><h1>${f?.name?r(f.name):"Your space"}</h1>${rn}</header>
      <nav class="segbar acct-tabs" aria-label="Account">${Yo.map(([g,p])=>`<a class="pill" href="#/account/${g}" ${g===i?'aria-current="page" aria-pressed="true"':""}>${p}</a>`).join("")}</nav>
      <div class="acct-body" data-body></div>
      ${Oa()}
    </section>${a.footer()}`;let n=e.querySelector("[data-body]");if(i==="profile"){let g=f?.email;n.innerHTML=`${g?"":`<div class="joincta glass"><h2>Join early access</h2><p>Free. Leave your email and we tell you when new pieces and Studio updates open. Your designs stay on this device either way.</p>
        <div class="acts eq"><a class="gb small primary" href="#/signup">Join early access</a><a class="gb small" href="#/signin">I already joined</a></div></div>`}
      <form class="form" data-prof>
        <label class="fl"><span>Display name</span><input class="gi" name="name" value="${r(f?.name||"")}" placeholder="How the site greets you" maxlength="40" autocomplete="name"></label>
        <div class="acts"><button class="gb primary" type="submit">Save on this device</button>${f?'<button class="gb" type="button" data-forget>Sign out on this device</button>':""}</div>
        <p class="note" data-profmsg role="status" aria-live="polite"></p>
      </form>
      <div class="kv"><span>Email</span><b>${g?r(f.email):"Not joined yet"}</b>${f?.joined?`<span>Joined</span><b>${new Date(f.joined).toLocaleDateString()}</b>`:""}<span>Plan</span><b>${"Early access \xB7 free"}</b><span>Sound</span><b>${d.prefs.master?"On":"Off"}</b><span>Narration</span><b>${d.prefs.guide?"On":"Off"}</b><span>Guide voice</span><b><a href="#/sound">${r(Ct(d.prefs.voice).name)}</a></b></div>`,n.querySelector("[data-prof]").addEventListener("submit",p=>{p.preventDefault();let y=p.target.name.value.trim(),b={...Re.profile()??{},name:y};y||delete b.name,Re.setProfile(Object.keys(b).length?b:null),d.sfx("confirm"),ya(e,a,"profile"),e.querySelector("[data-profmsg]").textContent="Saved on this device."}),n.querySelector("[data-prof] .gi").addEventListener("input",p=>{p.isTrusted&&d.sfx("type")}),n.querySelector("[data-forget]")?.addEventListener("click",()=>{if(confirm("Forget your name and email on this browser? Your designs and saved items stay.")){try{localStorage.removeItem(rt.profile)}catch{}ya(e,a,"profile")}})}if(i==="designs"){let g=Re.designs();n.innerHTML=g.length?`<div class="dgrid">${g.map(p=>`<article class="dc" data-d="${p.id}">
        <a class="dc-img" href="#/studio?design=${p.id}" aria-label="Open ${r(p.name)} in Studio">${p.thumb?`<img src="${p.thumb}" alt="">`:""}</a>
        <input class="dc-n gi" value="${r(p.name)}" aria-label="Design name" maxlength="48">
        <p class="note">${r(p.familyName)} \xB7 ${new Date(p.at).toLocaleDateString()}</p>
        <div class="acts"><a class="gb small primary" href="#/studio?design=${p.id}">Open in Studio</a><button class="gb small" type="button" data-del>Delete</button></div></article>`).join("")}</div>`:'<div class="empty"><h2>No designs yet</h2><p>Designs you save in Studio appear here, with a picture of each one.</p><a class="gb primary" href="#/studio">Open Studio</a></div>',n.querySelectorAll("[data-d]").forEach(p=>{let y=p.dataset.d,b=p.querySelector(".dc-n");b.addEventListener("change",()=>{Re.renameDesign(y,b.value.trim()||"Untitled design"),d.sfx("confirm")}),b.addEventListener("input",F=>{F.isTrusted&&d.sfx("type")}),p.querySelector("[data-del]").addEventListener("click",()=>{confirm(`Delete \u201C${b.value}\u201D? This cannot be undone.`)&&(Re.deleteDesign(y),d.sfx("close"),ya(e,a,"designs"))})})}if(i==="saved"){let g=Re.saved();n.innerHTML=g.length?`<ul class="slist">${g.map((p,y)=>`<li><span class="kicker">${p.type}</span><a href="${p.href}">${r(p.name)}</a><button class="pill" type="button" data-rm="${y}">Remove</button></li>`).join("")}</ul>`:'<div class="empty"><h2>Nothing saved yet</h2><p>Save products, templates and sounds to find them here.</p><a class="gb primary" href="#/products">Explore products</a></div>',n.querySelectorAll("[data-rm]").forEach(p=>p.addEventListener("click",()=>{let y=g[+p.dataset.rm];Re.toggleSaved(y.type,y.id),d.sfx("close"),ya(e,a,"saved")}))}i==="downloads"&&(n.innerHTML='<div class="empty"><h2>Everything is free right now</h2><p>During early access there is nothing to buy: take The Orb with its embed code from its product page, and export your own versions from Studio \u2014 exports save directly to your computer.</p><div class="acts eq"><a class="gb primary" href="#/products/orb">Get The Orb</a><a class="gb" href="#/studio">Open Studio</a></div></div>',n.querySelector("[data-restore]")?.addEventListener("click",()=>kt.restore()))}function Dr(e,a,i){let r=i==="up",d=Re.profile();e.innerHTML=`
    <section class="dest sign">
      <header class="dh"><p class="kicker">Early access \xB7 free</p><h1>${r?"Join early access":"Welcome back"}</h1>
        <p class="dh-l">${r?"Everything is free while we build it. Leave your email and we write when new pieces and Studio updates open. Your designs are saved on this device.":"There are no passwords yet. Enter the email you joined with to use it on this device; your designs from another browser stay there until accounts sync."}</p></header>
      ${d?.email?`<div class="joined glass"><p class="kicker">Already in</p><h2>You joined as ${a.esc(d.email)}</h2><div class="acts eq"><a class="gb small primary" href="#/studio">Open Studio</a><a class="gb small" href="#/account">Your account</a></div></div>`:""}
      <form class="form" data-sign novalidate${d?.email?" hidden":""}>
        ${r?'<label class="fl"><span>Name <i class="opt">(optional)</i></span><input class="gi" name="name" autocomplete="name" maxlength="40" placeholder="How the site greets you"></label>':""}
        <label class="fl"><span>Email</span><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"></label>
        <div class="acts"><button class="gb primary" type="submit"><span>${r?"Join early access":"Continue"}</span></button><a class="gb" href="#/studio">Open Studio without joining</a></div>
        <p class="note" data-signmsg role="status" aria-live="polite">We only keep your email${r?" and name":""} to tell you about new pieces and Studio updates. See <a href="#/privacy">privacy</a>; leave any time.</p>
        <p class="note">${r?'Already joined? <a href="#/signin">Use your email here</a>':'New here? <a href="#/signup">Join early access</a>'}</p>
      </form>
      ${Oa()}
    </section>${a.footer()}`;let f=e.querySelector("[data-sign]");f.addEventListener("submit",async n=>{n.preventDefault();let g=f.querySelector("[data-signmsg]"),p=f.querySelector("button[type=submit]"),y=f.email.value.trim();if(!Za(y)){g.textContent="Please enter a valid email address.",f.email.focus();return}p.disabled=!0,p.setAttribute("aria-busy","true");let b=await $r({email:y,name:f.name?.value,source:"signup"});if(!b.ok){g.textContent=b.error,p.disabled=!1,p.removeAttribute("aria-busy");return}a.audio.sfx("confirm");let F=document.createElement("div");F.innerHTML=Lr(y);let V=F.firstElementChild;f.replaceWith(V),V.focus({preventScroll:!0})})}function Uo(e,a){let i=ro,r=Re.profile(),d=i.plans.map(f=>`<article class="plan soon"><p class="kicker">After launch \xB7 preview</p><h2>${f.name}</h2><p>${f.line}</p><ul>${f.points.map(n=>`<li>${n}</li>`).join("")}</ul></article>`).join("");e.innerHTML=`
    <section class="dest memb">
      <header class="dh"><p class="kicker">Membership</p><h1>Early access is free</h1><p class="dh-l">Everything is open while we build it: Studio, The Orb with its embed code, and each piece as it arrives. What you take now stays free to use. Paid plans come later, and early users get a launch discount.</p></header>
      <article class="plan em now"><p class="kicker">Current plan</p><h2>Early access \u2014 free</h2><p>Everything on the site, for everyone.</p>
        <ul><li>Studio: shape light, material and movement; save and export your designs</li><li>The Orb in twenty versions, with its embed code</li><li>New pieces as they open, free while in early access</li><li>A launch discount on paid plans</li></ul>
        <div class="acts eq">${r?.email?'<span class="pill" aria-disabled="true">You\u2019re in</span>':'<a class="gb primary" href="#/signup">Join early access</a>'}<a class="gb" href="#/studio">Open Studio</a></div></article>
      <h2 class="plans-h">Plans after launch</h2><p class="note plans-n">A preview of how The Light Orb will work after early access. Prices are not set yet; early users get a launch discount.</p>
      <div class="plans">${d}</div>
      ${Oa()}
    </section>${a.footer()}`,e.querySelectorAll("[data-join]").forEach(f=>f.addEventListener("click",()=>kt.subscribe(f.dataset.join)))}var on=`<svg class="wm-o" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><defs><mask id="wm-counter"><rect width="100" height="100" fill="#fff"/>
  <path fill="#000" d="M49 9C31 9 23 29 23 50c0 24 12 42 30 42 15 0 23-9 23-20 0-9-7-12-11-21-4-9-2-19 0-27 1-9-5-15-16-15z"/></mask></defs>
  <circle cx="50" cy="50" r="46" fill="currentColor" mask="url(#wm-counter)"/></svg>`,Nr=`<span class="wm-t">The Light</span>${on}<span class="wm-t wm-rb">rb</span>`;var Wo="lightorb:cart",sr=()=>{try{return JSON.parse(localStorage.getItem(Wo))??[]}catch{return[]}},Vo=e=>{try{localStorage.setItem(Wo,JSON.stringify(e))}catch{}Hr.forEach(a=>a(e))},Hr=new Set,dt={items:sr,has:e=>sr().some(a=>a.id===e),add(e){let a=sr();a.some(i=>i.id===e.id)||(a.push({...e,at:new Date().toISOString()}),Vo(a))},remove(e){Vo(sr().filter(a=>a.id!==e))},toggle(e){return dt.has(e.id)?(dt.remove(e.id),!1):(dt.add(e),!0)},on(e){return Hr.add(e),()=>Hr.delete(e)}};var Br="Carla Tres Garc\xEDa",Ko="39934017Z",Xo="trescarla@gmail.com",nn="14 October 2026",Jo="Avenida Duque de Loul\xE9 91, Lisboa, Portugal",ja=`<a href="mailto:${Xo}">${Xo}</a>`,sn={privacy:{kicker:"Privacy",title:"Privacy",lede:"What this site collects, why, and what you can ask for. Short version: very little, and nothing is sold.",body:`
    <h2>Who is responsible</h2>
    <p>The Light Orb is run by ${Br} (NIF ${Ko}), a sole trader (the data controller). Address: ${Jo}. Contact: ${ja}.</p>
    <h2>Visiting the site</h2>
    <p>We count visits with GoatCounter, a privacy-friendly analytics service that sets no cookies and does not track you across sites. It records the page address, referrer, browser type, screen size and an approximate country, without storing your IP address. If your browser sends Do Not Track or Global Privacy Control, nothing is counted at all. Legal basis: our legitimate interest in knowing which pages are used.</p>
    <h2>Early access and the waitlist</h2>
    <p>If you join early access (or the waitlist) we keep your email address, the name you give if any, the date, where you signed up (for example "footer") and your browser language \u2014 nothing else. It is stored in Cloudflare Workers KV, the owner receives one notification email about each new sign-up (sent through Resend), and it is used only to tell you when pieces and Studio updates open. Your display name, designs and saved items stay in your browser. Legal basis: your consent, which you can withdraw at any time by writing to ${ja}; we then delete your address.</p>
    <h2>Talking with the Orb</h2>
    <p>When you ask the guide Orb a question, the text of the conversation and the page you are on are sent through our Cloudflare Worker to Anthropic, which generates the reply. We do not store or log these conversations. Anthropic processes them as our service provider under its own commercial terms. Please do not share personal information in the conversation.</p>
    <h2>Voice</h2>
    <p>Speech recognition and speech synthesis are done by your browser. Depending on your browser, the recognised audio may be processed by its maker (for example Google or Apple). We never receive or keep your voice.</p>
    <h2>Stored on your device</h2>
    <p>The site uses your browser's local storage to remember your preferences (sound, voice), saved items, your display name and your designs, plus short-lived session storage for scroll position. This stays on your device; we cannot see it. You can clear it from your browser settings.</p>
    <h2>Providers and transfers</h2>
    <p>GitHub (site hosting), Cloudflare (Worker and waitlist storage), Resend (sign-up notification emails to the owner), GoatCounter (visit counts) and Anthropic (Orb replies). Some of them are based in the United States; transfers rely on the EU\u2013US Data Privacy Framework or standard contractual clauses.</p>
    <h2>How long</h2>
    <p>Waitlist emails are kept until the pieces open and the announcement is sent, or until you ask us to delete them, and in any case no longer than two years. Visit counts are aggregated.</p>
    <h2>Your rights</h2>
    <p>Under the GDPR you can ask for access, correction, deletion, restriction, portability, or object to processing, and withdraw consent, by writing to ${ja}. You can also complain to the Spanish Data Protection Agency (AEPD, aepd.es).</p>`},terms:{kicker:"Terms",title:"Terms of use",lede:"The rules for using this website.",body:`
    <h2>Who we are</h2>
    <p>This website is run by ${Br} (NIF ${Ko}), a sole trader. Address: ${Jo}. Contact: ${ja}.</p>
    <h2>Using the site</h2>
    <p>You may browse the site, try the previews, and use Studio and the guide Orb for your own personal or professional exploration. Please do not misuse it: no attempts to break, overload or scrape it, and no unlawful or abusive use of the guide Orb.</p>
    <h2>The guide Orb</h2>
    <p>The Orb's replies are generated automatically and may be incomplete or wrong. They are not professional advice and do not bind us; prices and terms are only those shown on the site.</p>
    <h2>Content and pieces</h2>
    <p>The design, text, images, sounds and code of this site belong to ${Br} unless stated otherwise. Using the free Orb and any piece you obtain is governed by the <a href="#/licence">licence</a>.</p>
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
    <p>Code is provided as it is. Questions about a use not covered here: ${ja}.</p>`}},Zo={privacy:"Privacy",terms:"Terms of use",licence:"Licence"};function lr(e,a,i){let r=sn[i];e.innerHTML=`
    <section class="dest legal">
      <header class="dh"><p class="kicker">${r.kicker}</p><h1>${r.title}</h1><p class="dh-l">${r.lede}</p></header>
      <div class="legal-b">${r.body}
        <p class="note">Last updated ${nn}. <a href="#/privacy">Privacy</a> \xB7 <a href="#/terms">Terms</a> \xB7 <a href="#/licence">Licence</a></p></div>
    </section>${a.footer()}`}var Da=[{id:"clear",name:"Clear",line:"Thick clear glass with a bright lower rim, for light pages.",dark:!1,v:{page:"#F3F3F1",ink:"#262827",muted:"#6b6f6c",line:"rgba(38,40,39,.07)",body:"linear-gradient(180deg,rgba(255,255,255,.96),rgba(246,247,246,.72) 52%,rgba(226,230,228,.78))",edge:"#ffffff",depth:"rgba(130,142,138,.5)",shadow:"rgba(38,40,39,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(176,212,228,.6)",tint:"linear-gradient(180deg,#43484a,#1f2322 60%,#2c302f)",tintInk:"#f4f5f3",fill:"#2a2e2d",well:"linear-gradient(180deg,rgba(214,218,216,.7),rgba(246,247,246,.9))",orb:"radial-gradient(circle at 50% 62%,rgba(214,232,240,.55),rgba(255,255,255,.22) 58%,rgba(186,200,206,.65))",squish:"1"}},{id:"smoke",name:"Smoke",line:"Smoked glass that darkens to the rim, for dark pages.",dark:!0,v:{page:"#141716",ink:"#ECEEEB",muted:"#9DA29F",line:"rgba(255,255,255,.08)",body:"linear-gradient(180deg,rgba(255,255,255,.17),rgba(255,255,255,.05) 50%,rgba(0,0,0,.22))",edge:"rgba(255,255,255,.38)",depth:"rgba(0,0,0,.6)",shadow:"rgba(0,0,0,.75)",spec:"rgba(255,255,255,.4)",caustic:"rgba(150,186,200,.4)",tint:"linear-gradient(180deg,#fbfbfa,#d6d9d6)",tintInk:"#161918",fill:"#e7e9e6",well:"linear-gradient(180deg,rgba(0,0,0,.45),rgba(255,255,255,.04))",orb:"radial-gradient(circle at 50% 62%,rgba(120,130,136,.55),rgba(40,44,46,.35) 58%,rgba(10,12,12,.75))",squish:"1"}},{id:"chrome",name:"Chrome",line:"Liquid chrome that folds the room it reflects.",dark:!1,v:{page:"#E2E4E3",ink:"#1c1e1d",muted:"#5d6260",line:"rgba(0,0,0,.1)",body:"linear-gradient(180deg,#ffffff 0%,#c3c8c7 24%,#f5f6f6 46%,#8f9594 72%,#e4e7e6 100%)",edge:"#ffffff",depth:"rgba(60,66,64,.6)",shadow:"rgba(30,34,33,.42)",spec:"rgba(255,255,255,1)",caustic:"rgba(255,255,255,.7)",tint:"linear-gradient(180deg,#6c7271 0%,#1d201f 48%,#4a4f4e 100%)",tintInk:"#f3f4f3",fill:"#3a3f3e",well:"linear-gradient(180deg,#a9aeac,#eef0ef)",orb:"conic-gradient(from 210deg,#fdfdfd,#8e9493,#f2f3f3,#5d6362,#e9ebea,#a3a8a7,#fdfdfd)",squish:"1"}},{id:"porcelain",name:"Porcelain",line:"Opaque glazed porcelain with a warm greige accent.",dark:!1,v:{page:"#EFEDE8",ink:"#2e2c29",muted:"#6e6a63",line:"rgba(60,50,40,.08)",body:"linear-gradient(180deg,#fffefb,#f4f1eb 58%,#e5e0d6)",edge:"#ffffff",depth:"rgba(170,158,140,.45)",shadow:"rgba(80,68,52,.26)",spec:"rgba(255,255,255,.9)",caustic:"rgba(207,200,189,.55)",tint:"linear-gradient(180deg,#ddd6ca,#bdb3a3)",tintInk:"#2e2c29",fill:"#bfb5a5",well:"linear-gradient(180deg,#e2ddd3,#faf8f4)",orb:"radial-gradient(circle at 50% 60%,#fbf9f5,#ece7de 60%,#d2cabc)",squish:"1"}},{id:"gel",name:"Gel",line:"Soft sea-glass gel that gives a little when you press it.",dark:!1,v:{page:"#E8EEEC",ink:"#1f302b",muted:"#5b6f69",line:"rgba(30,70,60,.08)",body:"linear-gradient(180deg,rgba(244,252,249,.94),rgba(198,228,218,.62) 56%,rgba(156,200,186,.7))",edge:"rgba(255,255,255,.95)",depth:"rgba(70,124,108,.5)",shadow:"rgba(30,70,60,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(130,226,196,.65)",tint:"linear-gradient(180deg,#a6dccb,#5d9c89)",tintInk:"#0f2a22",fill:"#6aa894",well:"linear-gradient(180deg,rgba(170,206,194,.6),rgba(240,250,246,.9))",orb:"radial-gradient(circle at 50% 60%,rgba(190,240,222,.75),rgba(150,214,192,.45) 58%,rgba(90,160,138,.7))",squish:"1.6"}},{id:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud.",dark:!1,v:{page:"#F2EEEE",ink:"#33282b",muted:"#7a6a6e",line:"rgba(80,40,50,.07)",body:"linear-gradient(180deg,rgba(255,252,252,.96),rgba(246,232,236,.72) 54%,rgba(230,206,214,.75))",edge:"#ffffff",depth:"rgba(190,140,156,.45)",shadow:"rgba(90,50,62,.26)",spec:"rgba(255,255,255,.95)",caustic:"rgba(255,170,198,.6)",tint:"linear-gradient(180deg,#f3c9d6,#d9909f)",tintInk:"#3a1d25",fill:"#df9fb0",well:"linear-gradient(180deg,rgba(226,206,212,.7),rgba(255,250,251,.9))",orb:"radial-gradient(circle at 46% 58%,rgba(255,188,208,.85),rgba(255,236,242,.5) 50%,rgba(222,190,200,.7))",squish:"1.2"}}],ln=e=>Da.find(a=>a.id===e)??Da[0],dn=e=>Object.entries(e.v).map(([a,i])=>`--cc-${a.replace(/[A-Z]/g,r=>"-"+r.toLowerCase())}:${i};`).join(`
  `),cn=`
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
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition-duration:.01s!important}}
`,pn=`
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
`,ei='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',un={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row">
    <button class="cc-btn cc-glass primary" type="button">Continue</button>
    <button class="cc-btn cc-glass" type="button">Secondary</button>
    <button class="cc-btn cc-glass round" type="button" aria-label="Confirm">${ei}</button>
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
</div>`},gn={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row"><button class="cc-btn cc-glass primary" type="button" tabindex="-1">Continue</button><button class="cc-btn cc-glass round" type="button" tabindex="-1" aria-label="Confirm">${ei}</button></div>
  <div class="cc-row"><button class="cc-switch cc-glass" role="switch" type="button" tabindex="-1" aria-checked="true" aria-label="Switch"><span class="cc-knob"></span></button><input class="cc-range" type="range" value="62" tabindex="-1" aria-label="Level" style="width:150px"></div>
</div>`,"orb-slider":'<div class="cc-stage"><div class="cc-slide cc-glass" style="--h:64px;width:280px" aria-hidden="true"><span class="cc-trail"></span><span class="cc-label">slide to enter</span><span class="cc-orb"></span></div></div>'},Qo={"crystal-controls":"Crystal Controls","orb-slider":"Orb Slider"};function dr(e,a,{mini:i=!1}={}){let r=ln(a);return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${Qo[e]} \xB7 ${r.name} \u2014 The Light Orb</title>
<!-- ${Qo[e]} \xB7 ${r.name}. Free for personal and commercial use (The Light Orb licence).
     Change the material by editing the --cc-* variables below. -->
<style>
:root{
  ${dn(r)}
}${cn}</style>
</head>
<body${i?' class="mini"':""}>
${(i?gn:un)[e]}
<script>${pn}<\/script>
</body>
</html>
`}var Nt=(e,a=0,i=1)=>Math.min(i,Math.max(a,e)),wa=(e,a,i)=>e+(a-e)*i,Ht=e=>{let a=Nt(e);return a*a*(3-2*a)},hn=(e,a,i,r,d)=>Ht((e-a)/(i-a))*(1-Ht((e-r)/(d-r))),Q=e=>String(e).replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),da={get:(e,a)=>{try{return JSON.parse(sessionStorage.getItem(e))??a}catch{return a}},set:(e,a)=>{try{sessionStorage.setItem(e,JSON.stringify(a))}catch{}}},me={play:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>',replay:'<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/></svg>',prev:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',mute:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M4.5 20c1.4-3.6 4.2-5.4 7.5-5.4s6.1 1.8 7.5 5.4"/></svg>',heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/></svg>',back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',down:'<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',bag:'<svg viewBox="0 0 24 24"><path d="M5.5 8.5h13l-1 11h-11z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5.5" y="10.5" width="13" height="9" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',orb:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="11" cy="15" r="1.6" fill="currentColor" stroke="none"/></svg>'},Fr={pieces:"products",materials:"products"};function ti(e){let{orb:a,reduced:i}=e,r=io(),d=document.createElement("style");d.textContent=mo+bo,document.head.append(d),document.documentElement.classList.add("lo-on");let f=Po(e),n=_r("main","lo");n.setAttribute("aria-label","The Light Orb"),n.tabIndex=-1;let g=_r("div","lo-top");document.body.append(n,g),g.innerHTML=`
    <header class="hd" data-hd>
      <a class="wm" href="#/" aria-label="The Light Orb \u2014 Home" data-home>${Nr}</a>
      <nav class="nav" aria-label="Main">${at.map(t=>`<a href="${t.route}" data-nav="${t.id}">${t.label}</a>`).join("")}</nav>
      <div class="hd-r">
        <a class="nav-m" href="#/membership" data-nav="membership">Membership</a>
        <div class="snd">
          <button class="gb gc small" type="button" data-sound aria-haspopup="dialog" aria-expanded="false" aria-label="Sound settings">${me.mute}</button>
          <div class="menu pane" role="dialog" aria-label="Sound" data-menu hidden>
            <label class="mrow"><span>Sound</span><button class="gsw" role="switch" data-pref="master" aria-checked="false" aria-label="Sound"></button></label>
            <label class="mrow"><span>Narration</span><button class="gsw" role="switch" data-pref="guide" aria-checked="true" aria-label="Narration"></button></label>
            <label class="mrow"><span>Interface sounds</span><button class="gsw" role="switch" data-pref="sfx" aria-checked="true" aria-label="Interface sounds"></button></label>
            <div class="mrow col"><span>Volume <output data-volout></output></span><input class="grange" type="range" min="0" max="1" step=".01" data-volume aria-label="Volume"></div>
          </div>
        </div>
        <div class="cartw"${" hidden"}><button class="gb gc small" type="button" data-cartbtn aria-haspopup="dialog" aria-expanded="false" aria-label="Cart">${me.bag}<span class="cart-n" data-cartn hidden></span></button>
          <div class="menu pane cart-p" role="dialog" aria-label="Cart" data-cartp hidden></div></div>
        <a class="gb gc small" href="#/account" aria-label="Account" data-nav="account">${me.user}</a>
      </div>
    </header>
    <button class="guide-hit" type="button" data-guide aria-label="Talk with the Orb"></button>
    <div class="caption" data-caption aria-live="polite"></div>`;let p=g.querySelector("[data-hd]"),y=g.querySelector("[data-caption]"),b=g.querySelector("[data-guide]"),F=g.querySelector("[data-sound]"),V=g.querySelector("[data-menu]"),C=t=>{V.hidden=!t,F.setAttribute("aria-expanded",String(t)),r.sfx(t?"open":"close"),t&&V.querySelector(".gsw").focus()};F.addEventListener("click",()=>C(V.hidden)),document.addEventListener("pointerdown",t=>{!V.hidden&&!t.target.closest(".snd")&&C(!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!V.hidden&&(C(!1),F.focus())}),g.querySelectorAll("[data-pref]").forEach(t=>t.addEventListener("click",()=>{let s=t.dataset.pref;if(r.set({[s]:!r.prefs[s]}),r.sfx("select"),s==="master")try{r.prefs.master?localStorage.removeItem("lo:sound:off"):localStorage.setItem("lo:sound:off","1")}catch{}}));let l=g.querySelector("[data-volume]");l.addEventListener("input",()=>{r.set({volume:+l.value}),r.sfx("level",+l.value)});let R=0,se=0,N=null,Ue=(()=>{let t=document.createElement("canvas").getContext("2d");return s=>(t.font=getComputedStyle(y).font,t.measureText(s).width)})();function qe(t){let s=Math.min(560,innerWidth*.84)-34,m=[],u="";for(let x of String(t).split(/\s+/).filter(Boolean)){let v=u?`${u} ${x}`:x;u&&Ue(v)>s?(m.push(u),u=x):u=v}return u&&m.push(u),m.length?m:[""]}function ee(t,{follow:s=!1}={}){let m=qe(t),u=Math.max(1,String(t).length),x=++se,v=performance.now(),O=Math.max(3200,u*70),S=-1;clearTimeout(R),y.classList.add("on");let B=()=>{if(x!==se)return;let q=s&&r.playing&&r.state.kind==="guide"&&r.state.clip!=="speech"&&r.position>0?r.position:(performance.now()-v)/O,T=0,re=0;for(;re<m.length-1&&(T+=m[re].length+1,!(q*u<T));re++);re!==S&&(S=re,y.textContent=m[re]),q<1||s&&r.playing&&r.state.kind==="guide"?requestAnimationFrame(B):R=setTimeout(()=>{x===se&&(y.classList.remove("on"),N=null,Y())},900)};B()}function Y(){let t=r.prefs;g.querySelectorAll("[data-pref]").forEach(m=>m.setAttribute("aria-checked",String(!!t[m.dataset.pref]))),l.value=t.volume??.8,l.style.setProperty("--p",`${(t.volume??.8)*100}%`),g.querySelector("[data-volout]").textContent=`${Math.round((t.volume??.8)*100)}%`,F.innerHTML=t.master?me.sound:me.mute,F.setAttribute("aria-label",t.master?"Sound on \u2014 settings":"Sound off \u2014 settings"),n.querySelectorAll("[data-enable]").forEach(m=>{m.hidden=t.master});let s=r.state.clip?.split(".")[0];if(Wa[s]&&s!=="home"){let m=r.state.kind==="guide"&&["playing","loading"].includes(r.state.status);m&&N!==s?(N=s,ee(Wa[s],{follow:!0})):!m&&N===s&&(N=null,se++,y.classList.remove("on"))}}r.on(Y);let W=g.querySelector("[data-cartbtn]"),ue=g.querySelector("[data-cartp]"),$e=g.querySelector("[data-cartn]");function le(){let t=dt.items();$e.hidden=!t.length,$e.textContent=t.length,ue.innerHTML=`<p class="kicker">Cart</p>${t.length?`<ul class="cart-l">${t.map(s=>`<li><a href="${s.href}">${Q(s.name)}</a><button class="pill" type="button" data-cartrm="${s.id}">Remove</button></li>`).join("")}</ul>`:'<p class="note">Your cart is empty.</p>'}
      ${kt.canCheckout(t)?'<button class="gb primary" type="button" data-checkout>Checkout</button>':'<button class="gb primary" type="button" disabled>Checkout opens soon</button><p class="note">No payment can be taken yet; items stay in this browser.</p>'}`,ue.querySelector("[data-checkout]")?.addEventListener("click",()=>{let s=kt.checkout(dt.items());s&&dt.remove(s)}),ue.querySelectorAll("[data-cartrm]").forEach(s=>s.addEventListener("click",()=>{dt.remove(s.dataset.cartrm),r.sfx("close")}))}dt.on(le),le();let ye=t=>{ue.hidden=!t,W.setAttribute("aria-expanded",String(t)),r.sfx(t?"open":"close")};W.addEventListener("click",()=>ye(ue.hidden)),document.addEventListener("pointerdown",t=>{!ue.hidden&&!t.target.closest(".cartw")&&ye(!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!ue.hidden&&(ye(!1),W.focus())});let oe={emission:1,voice:yr.voice},Be=()=>{oe=Ka(a,bt(yr)),a.setRibbon?.(0)};Be();let Oe=()=>({home:"home",products:"products",templates:"templates",studio:"studio",sound:"sound"})[I.name],Ie=()=>matchMedia("(pointer: coarse)").matches&&Math.min(innerWidth,innerHeight)<820,de=t=>{try{return localStorage.getItem(t)}catch{return null}},Pe=t=>{try{localStorage.setItem(t,"1")}catch{}},U="en",$=null,M=document.createElement("style");M.textContent=`.orb-ask{position:fixed;left:50%;bottom:calc(18px + env(safe-area-inset-bottom,0px));transform:translate(-50%,6px);z-index:30;display:flex;align-items:center;gap:8px;width:min(420px,calc(100vw - 32px));box-sizing:border-box;
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
@media (pointer:coarse) and (max-width:820px){.caption{font-size:13.5px;line-height:1.35}}`,document.head.append(M);let j='<svg viewBox="0 0 24 24"><rect x="9" y="3.5" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v2.5"/></svg>',D='<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5"/></svg>',P=_r("form","orb-ask");P.hidden=!0,P.setAttribute("role","search"),P.setAttribute("aria-label","Ask the Orb"),P.innerHTML=`<span class="st" data-st aria-live="polite"></span><input type="text" data-q placeholder="${U==="es"?"Pregunta a la Orb\u2026":"Ask the Orb\u2026"}" aria-label="Ask the Orb" autocomplete="off" enterkeyhint="send" maxlength="300">
    <button type="button" data-mic aria-label="Speak" aria-pressed="false"${Pr?"":" hidden"}>${j}</button><button type="submit" aria-label="Send">${D}</button>`,g.append(P);let _=P.querySelector("[data-st]"),X=P.querySelector("[data-q]"),te=P.querySelector("[data-mic]");b.setAttribute("aria-label","Talk with the Orb");let ce=!Pr,J=()=>{P.hidden=!1,document.body.classList.add("orb-asking"),requestAnimationFrame(()=>P.classList.add("on"))},ie=()=>{Fe(),P.classList.remove("on"),P.hidden=!0,document.body.classList.remove("orb-asking"),X.blur()};function Fe(){if(ge){let t=ge;ge=null,t.abort()}te.setAttribute("aria-pressed","false"),_.textContent=""}function ct(){ce||ge||(r.stop(),$=null,_.textContent=U==="es"?"Escuchando\u2026":"Listening\u2026",te.setAttribute("aria-pressed","true"),ge=jo({lang:U==="es"?"es-ES":/^en/i.test(navigator.language)?navigator.language:"en-US",onresult:t=>{_.textContent="",X.value=t},onerror:t=>{ge=null,te.setAttribute("aria-pressed","false"),_.textContent="",(t==="not-allowed"||t==="service-not-allowed"||t==="unsupported")&&(Te("mic_denied"),ce=!0,te.hidden=!0,_e(ia("reply.mic",U),"answer"),Ie()||X.focus())},onend:t=>{ge&&(ge=null,te.setAttribute("aria-pressed","false"),_.textContent="",X.value="",t.trim()&&yt(t))}}),ge||(te.setAttribute("aria-pressed","false"),_.textContent=""))}te.addEventListener("click",()=>{ge?Fe():ct()}),X.addEventListener("input",()=>{ge&&Fe()}),P.addEventListener("submit",t=>{t.preventDefault();let s=X.value.trim();X.value="",Fe(),s&&(Te("orb_typed"),yt(s))}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!P.hidden&&ie()}),document.addEventListener("pointerdown",t=>{!P.hidden&&!t.target.closest(".orb-ask,[data-guide]")&&!X.value&&!ge&&ie()});let ge=null,Ve=null;if(b.addEventListener("click",()=>{if(r.prefs.master||r.set({master:!0}),r.prefs.guide||r.set({guide:!0}),G=performance.now()/1e3,Te("orb_tap"),ge){Fe();return}if(r.playing){r.stop(),$=null,k("");return}r.sfx("select");let t=!de("lo:orb:intro");if(J(),t){Pe("lo:orb:intro"),Pe("lo:orb:greet"),Te("orb_intro"),_e(ia("reply.intro",U),"answer");return}ce?Ie()||X.focus():ct()}),!de("lo:orb:greet")){let t=s=>{s.target.closest?.("[data-guide],.orb-ask")||(removeEventListener("pointerdown",t,!0),Ie()&&setTimeout(()=>{de("lo:orb:greet")||$||ge||(Pe("lo:orb:greet"),_e(ia("reply.greet",U),"answer"))},900))};addEventListener("pointerdown",t,!0)}function _e(t,s="answer"){if(!t?.text)return;ee(t.text,{follow:!0}),G=performance.now()/1e3,$=s,r.say(t.text,{id:t.lang==="es"?void 0:t.id??void 0,lang:t.lang,onend:()=>{$===s&&($=null)}})||($=null)}let Se=[],Je=0,pt=(t,s)=>{for(Se.push({role:t,content:s});Se.length>12;)Se.shift();for(;Se.length&&Se[0].role!=="user";)Se.shift()};function Ze(){let t=Jt(),s=t.name==="products"&&t.id?ft.find(m=>m.id===t.id):null;return{route:location.hash||"#/",title:document.title,presentation:Z("en").text,product:s?.name,variant:s?t.query.variant||(s.id==="orb"?"clear":void 0):void 0,lang:U}}async function yt(t){U=ir(t,U);let s=Do(t,{here:I.name,presentation:Z,lang:U});if(Te(s.intent==="fallback"?"orb_fallback":"orb_command",{intent:s.intent||(s.stop?"stop":s.back?"back":s.go?`go:${s.go.split("?")[0].replace("#/","")}`:"answer")}),!s.command&&s.intent!=="hello"&&No()&&t.trim()){let m=++Je;k("\u2026"),pt("user",t.trim());try{let u=await Ho(Se.slice(),Ze());return m!==Je?void 0:(pt("assistant",u.say),Le({say:u.say,go:u.go,lang:ir(u.say,U)}))}catch{if(m!==Je)return;Se.pop()}}Le(s)}function Le(t){if(t.stop){r.stop(),$=null,k("");return}if(t.back&&history.back(),t.go&&location.hash!==t.go){Ve=t.say?{text:t.say,id:t.id,lang:t.lang}:null,location.hash=t.go;return}t.say?_e({text:t.say,id:t.id,lang:t.lang},"answer"):t.go||k("")}function k(t){clearTimeout(R),se++,y.textContent=t,y.classList.toggle("on",!!t),t||Y()}let G=-99,H=0,Z=(t=U)=>co(t,I.name,I.id);function fe(){_e(Z(),"arrival")}let he=!1,ne=()=>n.scrollTop>innerHeight*.25;function je(){if(he||$==="answer"||ge||ne())return;he=!0,Pe("lo:orb:greet"),!r.prefs.master&&!de("lo:sound:off")&&r.set({master:!0});let t=ia("reply.greet",U),s=()=>{I.name==="home"&&!$&&!ge&&!ne()&&_e(t,"arrival")};if(navigator.userActivation&&!navigator.userActivation.hasBeenActive){ee(t.text);let m=u=>{removeEventListener("pointerdown",m,!0),removeEventListener("keydown",m,!0),!u.target.closest?.("[data-guide],.orb-ask")&&setTimeout(s,250)};addEventListener("pointerdown",m,!0),addEventListener("keydown",m,!0);return}s()}function De(t){let s=Ve;Ve=null,ge&&!s&&Fe(),setTimeout(()=>{if(location.hash===t){if(s){_e(s,"answer");return}if(I.name==="home"){je();return}Ie()||$==="answer"||ge||fe()}},450)}let I={name:""},we=null,Ce=[],Qe={products:"Products",templates:"Templates",studio:"Studio",sound:"Sound",membership:"Membership",account:"Account",signin:"Sign in",signup:"Sign up",...Zo};function Jt(){let[t,s=""]=(location.hash.replace(/^#/,"")||"/").split("?"),m=t.split("/").filter(Boolean),u=Object.fromEntries(new URLSearchParams(s));return{name:Fr[m[0]]||m[0]||"home",id:m[1]||null,query:u,raw:m[0]}}function Mt(){let t=Jt();if(t.raw&&Fr[t.raw]){location.replace(`#/${Fr[t.raw]}${t.id?"/"+t.id:""}`);return}if(!["home","products","templates","studio","sound","membership","account","signin","signup","privacy","terms","licence"].includes(t.name)){location.replace("#/");return}Ce.forEach(x=>x()),Ce=[],ae=null,we&&t.name!=="studio"&&(we.leave(),we=null),f.hide(),qa(),e.removeBackdrop(Me.canvas),Be();let s=I.name;I=t,document.title=I.name==="home"?"The Light Orb":`${Qe[I.name]??I.name} \xB7 The Light Orb`,n.className=`lo r-${I.name}`,document.body.dataset.route=I.name,to(),I.name==="studio"&&s!=="studio"&&Te("studio_open"),g.querySelectorAll("[data-nav]").forEach(x=>x.toggleAttribute("aria-current",x.dataset.nav===I.name||x.dataset.nav==="account"&&["account","signin","signup"].includes(I.name))),s&&s!==I.name&&r.state.kind&&$!=="answer"&&(r.stop(),$=null),({home:Sa,products:I.id?o:Fa,templates:I.id?si:ni,studio:di,sound:Yr,membership:()=>Uo(n,et),account:()=>ya(n,et,I.id),signin:()=>Dr(n,et,"in"),signup:()=>Dr(n,et,"up"),privacy:()=>lr(n,et,"privacy"),terms:()=>lr(n,et,"terms"),licence:()=>lr(n,et,"licence")}[I.name]??Sa)(),Qa(n);let u=da.get(`lo:scroll:${location.hash}`,null);n.scrollTop=u??0,De(location.hash),s&&n.focus({preventScroll:!0})}let Ae=-1e9;n.addEventListener("scroll",()=>{Ae=performance.now(),da.set(`lo:scroll:${location.hash}`,n.scrollTop),I.name==="home"&&$==="arrival"&&ne()&&(r.stop(),$=null,k(""))},{passive:!0}),addEventListener("hashchange",Mt),g.querySelector("[data-home]").addEventListener("click",t=>{t.preventDefault(),da.set("lo:scroll:#/",0),I.name==="home"?n.scrollTo({top:0,behavior:i?"auto":"smooth"}):location.hash="#/"});let et={page:n,audio:r,ICON:me,esc:Q,store:Re,go:t=>{location.hash=t},flash:ee,api:e,product:f,footer:()=>Et()},Ee=da.get("lo:sel",0),St=[],Na=new URLSearchParams(location.search).get("sel");Na&&da.set("lo:selv",Na);let Bt=da.get("lo:selv","arc")==="grid";function Sa(){if(n.innerHTML=`
      <section class="wel" aria-labelledby="hello">
        <div class="wel-copy ${i?"shown":"reveal"}" data-welcopy>
          <h1 id="hello" class="wel-h"><span>Hello.</span></h1>
          <p class="wel-line">A space for creative possibilities.</p>
          <a class="gb primary wel-go" href="#select" data-go>Let\u2019s go</a>
        </div>
        <div class="wel-ctl"><button class="gb small" type="button" data-enable>${me.sound}<span>Enable sound</span></button><a class="tl" href="intro.html?replay">Replay intro</a></div>
      </section>
      <section class="qt" aria-label="Quotation">
        <figure class="qt-fig" data-qt><blockquote><p>${Ca.text}</p></blockquote>
          <figcaption>${Ca.author} \xB7 <a href="${Ca.source}" rel="noopener" target="_blank">${Ca.work}</a></figcaption></figure>
      </section>
      <section class="sel${Bt?" sel-grid":""}" id="select" aria-labelledby="sel-t">
        <h2 id="sel-t" class="sel-t">Where would you like to begin?</h2>
        ${Bt?`<nav class="dg" aria-label="Destinations">${at.map((t,s)=>`<a class="dg-c" href="${t.route}" data-c="${s}">${qt(t)}<span class="dg-t">${t.label}</span><span class="dg-s">${t.line}</span></a>`).join("")}</nav>`:`<div class="arc" data-arc role="group" aria-roledescription="carousel" aria-label="Destinations">
          ${at.map((t,s)=>`<a class="arc-c" href="${t.route}" data-c="${s}" aria-label="${t.label}: ${t.line}">${qt(t,"arc-img")}<span class="arc-l">${t.label}</span><span class="arc-s">${t.line}</span></a>`).join("")}
        </div>
        <div class="arc-ctl"><button class="gb gc small" type="button" data-step="-1" aria-label="Previous">${me.prev}</button>
          <div class="segbar" role="tablist" aria-label="Choose destination">${at.map((t,s)=>`<button class="pill" role="tab" type="button" data-dot="${s}">${t.label}</button>`).join("")}</div>
          <button class="gb gc small" type="button" data-step="1" aria-label="Next">${me.next}</button></div>`}
      </section>
      ${Et()}`,St=[...n.querySelectorAll("[data-c]")],n.querySelector("[data-go]").addEventListener("click",t=>{t.preventDefault(),r.sfx("select"),n.scrollTo({top:n.scrollTop+n.querySelector("#sel-t").getBoundingClientRect().top-110,behavior:i?"auto":"smooth"})}),n.querySelector("[data-enable]").addEventListener("click",()=>{Te("sound_enable"),r.set({master:!0}),r.sfx("confirm"),Ie()||fe()}),Bt)St.forEach((t,s)=>{t.addEventListener("pointerenter",()=>wt(s)),t.addEventListener("focus",()=>wt(s)),t.addEventListener("click",()=>{r.sfx("open"),Te("destination",{id:at[s].id})})}),Zt(!0);else{n.querySelectorAll("[data-step]").forEach(s=>s.addEventListener("click",()=>wt(Ee+ +s.dataset.step))),n.querySelectorAll("[data-dot]").forEach(s=>s.addEventListener("click",()=>wt(+s.dataset.dot))),St.forEach((s,m)=>s.addEventListener("click",u=>{if(Ot){u.preventDefault();return}m!==Ee?(u.preventDefault(),wt(m)):(r.sfx("open"),Te("destination",{id:at[m].id}))}));let t=n.querySelector("[data-arc]");t.addEventListener("keydown",s=>{s.key==="ArrowRight"&&(wt(Ee+1),s.preventDefault()),s.key==="ArrowLeft"&&(wt(Ee-1),s.preventDefault())}),ga(t,s=>wt(Ee+s),()=>Zt()),Zt(!0)}Y()}function At(t){let s=String(at.indexOf(t)+1).padStart(2,"0");return`<span class="arc-img cv cv-${t.id}"><span class="cv-grain"></span><span class="cv-n">${s}</span><span class="cv-t">${t.label}</span></span>`}function qt(t,s=""){let m={products:'<img src="./media/cards/products.jpg" alt="" decoding="async" fetchpriority="low">',templates:'<span class="dg-win"><img src="./media/templates/the-light-orb.cover.jpg" alt="" decoding="async" fetchpriority="low"></span>',studio:'<img src="./media/cards/orb-dark.jpg" alt="" decoding="async" fetchpriority="low">',sound:`<span class="cv-wave">${[.3,.55,.8,.45,.95,.6,.35,.7,.5,.85,.4,.65,.3,.5].map(u=>`<i style="--h:${u}"></i>`).join("")}</span>`}[t.id];return`<span class="dg-img dg-${t.id} ${s}">${m}</span>`}function wt(t,s=!0){let m=Nt(t,0,at.length-1);m!==Ee&&(Ee=m,da.set("lo:sel",Ee),s&&r.sfx("detent"),a.nudge?.(.5)),Zt()}function Zt(t){if(Bt){St.forEach((u,x)=>u.classList.toggle("on",x===Ee));return}let s=St[0]?.offsetWidth||300,m=s*.7;St.forEach((u,x)=>{let v=x-Ee+ut/(m*1.2),O=Math.abs(v);u.style.transition=t||ua?"none":"",u.style.transform=`translateX(${v*m}px) translateZ(${-O*150}px) rotateY(${Nt(-v*30,-48,48)}deg) scale(${1-Math.min(O,2)*.1})`,u.style.zIndex=String(10-Math.round(O)),u.classList.toggle("on",x===Ee),u.tabIndex=x===Ee?0:-1,u.setAttribute("aria-current",x===Ee?"true":"false")}),n.querySelectorAll("[data-dot]").forEach((u,x)=>u.setAttribute("aria-selected",String(x===Ee))),n.querySelectorAll("[data-step]").forEach(u=>{u.disabled=+u.dataset.step<0&&Ee===0||+u.dataset.step>0&&Ee===at.length-1})}let ut=0,ua=!1,Ot=!1;function ga(t,s,m){let u=0,x=0,v=null,O=null,S=0,B=0,w=null;t.addEventListener("touchstart",A=>{let z=A.touches[0];S=z.clientX,B=z.clientY,w=null},{passive:!0}),t.addEventListener("touchmove",A=>{if(A.touches.length>1)return;let z=A.touches[0],ze=z.clientX-S,It=z.clientY-B;!w&&Math.hypot(ze,It)>6&&(w=Math.abs(ze)>Math.abs(It)?"x":"y"),w==="x"&&A.cancelable&&A.preventDefault()},{passive:!1}),t.addEventListener("touchend",()=>{setTimeout(()=>{w=null},0)},{passive:!0}),t.addEventListener("pointerdown",A=>{A.button||(u=A.clientX,x=A.clientY,v=A.pointerId,O=null,Ot=!1)}),t.addEventListener("pointermove",A=>{if(A.pointerId!==v)return;let z=A.clientX-u,ze=A.clientY-x;!O&&Math.hypot(z,ze)>8&&(O=w??(Math.abs(z)>Math.abs(ze)?"x":"y"),O==="x"&&(t.setPointerCapture(v),ua=!0)),O==="x"&&(ut=z,Ot=!0,m())});let q=A=>{if(A.pointerId===v){if(v=null,ua=!1,O==="x"){let z=ut<-60?1:ut>60?-1:0;ut=0,s(z),m(),setTimeout(()=>{Ot=!1},0)}O=null}};t.addEventListener("pointerup",q),t.addEventListener("pointercancel",q),t.addEventListener("dragstart",A=>A.preventDefault());let T=0,re=0;t.addEventListener("wheel",A=>{if(Math.abs(A.deltaX)<=Math.abs(A.deltaY))return;A.preventDefault();let z=performance.now();z<re||(T+=A.deltaX,Math.abs(T)>60&&(s(Math.sign(T)),T=0,re=z+380))},{passive:!1})}function Et(){return`<footer class="ft"><a href="#/" class="wm small" aria-label="The Light Orb \u2014 Home">${Nr}</a>
      <nav aria-label="Footer"><a href="#/sound">Sound</a><a href="#/membership">Membership</a><a href="#/account">Account</a>${Re.profile()?.email?"":'<a href="#/signup">Join early access</a>'}<a href="intro.html?replay">Replay intro</a><a href="mailto:trescarla@gmail.com">Contact</a></nav>
      <nav aria-label="Legal"><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a><a href="#/licence">Licence</a></nav>
      <span class="ft-n">${"Early access \xB7 everything is free while we build it."}</span>
      ${["membership","signup","signin"].includes(I.name)||Re.profile()?.email?"":na("footer",{compact:!0})}</footer>`}let Ha=0,Ba={"orb-slider":Da,"orb-wave":[{id:"gentle",name:"Gentle",line:"Wide, soft ripples.",p:{strength:.6,scale:110}},{id:"classic",name:"Classic",line:"The ripple from the intro.",p:{strength:1,scale:70}},{id:"deep",name:"Deep",line:"Tight, strong rings.",p:{strength:1.6,scale:45}},{id:"rain",name:"Rain",line:"Many small, quick rings, like drops on water.",p:{strength:.5,scale:28}}],"background-pack":[{id:"classic",name:"Classic",line:"The horizon as in the intro.",p:{horizon:.3,lamp:.9}},{id:"wide",name:"Wide floor",line:"A low horizon and more floor.",p:{horizon:.18,lamp:.9}},{id:"high",name:"High horizon",line:"A high horizon and more sky.",p:{horizon:.45,lamp:.9}},{id:"lantern",name:"Lantern",line:"A brighter lamp around the Orb in the dark world.",p:{horizon:.3,lamp:1.6}}],"crystal-controls":Da},Qt=t=>t?.code==="kit",zt=(t,s,m)=>`<iframe class="kit-frame" data-kit="${t}|${s}|${m?1:0}" title="${m?"Preview":"Live preview"}"${m?' tabindex="-1" aria-hidden="true" loading="lazy"':""}></iframe>`,Ft=t=>t.querySelectorAll("[data-kit]").forEach(s=>{let[m,u,x]=s.dataset.kit.split("|");s.srcdoc=dr(m,u,{mini:x==="1"})}),_t=[...it.map(t=>({id:`orb-${t.id}`,fam:"orb",variant:t.id,sphere:t.id,ext:".orb",name:t.id==="clear"?"The Orb":`The Orb \xB7 ${t.name}`,kind:t.line,href:`#/products/orb${t.id==="clear"?"":`?variant=${t.id}`}`})),...ao.filter(t=>t.id!=="orb").flatMap(t=>Ba[t.id].map((s,m)=>({id:m?`${t.id}-${s.id}`:t.id,fam:t.id,variant:m?s.id:null,ext:Qt(t)?".html":".kit",name:`${t.name} \xB7 ${s.name}`,kind:s.line,mini:Qt(t)?zt(t.id,s.id,!0):null,cls:s.cls,dark:s.dark,img:Qt(t)?null:`./media/products/${t.id}.jpg`,pos:t.id==="background-pack"?`50% ${Math.round(30+(s.p.horizon-.3)*160)}%`:null,href:`#/products/${t.id}${m?`?variant=${s.id}`:""}`})))],Rt="Free \xB7 Early access",ea=(t,s="")=>"";function ta(t){t.querySelectorAll("[data-cart]").forEach(s=>s.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation();let u=_t.find(v=>v.id===s.dataset.cart)||pi().find(v=>v.id===s.dataset.cart),x=dt.toggle({id:u.id,name:u.name,href:u.href||"#/sound"});x&&Te("add_to_cart",{item:u.id}),s.setAttribute("aria-pressed",String(x)),s.querySelector("span").textContent=x?"In cart":"Add to cart",r.sfx(x?"confirm":"select")}))}let $t=(t,s,m)=>`<button class="gb small" type="button" data-fsave="${t}|${s}" data-name="${Q(m)}" aria-pressed="${Re.isSaved(t,s)}">${me.heart}<span>${Re.isSaved(t,s)?"Saved":"Save"}</span></button>`;function Gt(t,s){t.querySelectorAll("[data-fsave]").forEach(m=>m.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation();let[x,v]=m.dataset.fsave.split("|"),O=Re.toggleSaved(x,v,m.dataset.name,s(x,v));O&&Te("save",{kind:x,item:v}),m.setAttribute("aria-pressed",String(O)),m.querySelector("span").textContent=O?"Saved":"Save",r.sfx(O?"confirm":"select")}))}function Fa(){let t;try{t=localStorage.getItem("lo.productsView")}catch{}t!=="grid"&&t!=="large"&&(t=matchMedia("(max-width: 700px)").matches?"grid":"large");let s=m=>`<article class="file glass" data-href="${m.href}">
        <div class="file-v ${m.cls??""}${m.mini?" has-kit":""}${m.dark?" is-dark":""}"${m.sphere?` data-sphere="${m.sphere}"`:""}>${m.img?`<img src="${m.img}" alt="" draggable="false" loading="lazy"${m.pos?` style="object-position:${m.pos}"`:""}>`:""}${m.mini??""}<span class="file-ext">${m.ext}</span></div>
        <div class="file-m"><h3><a class="file-link" href="${m.href}">${Q(m.name)}</a></h3><p>${Q(m.kind)}</p><p class="file-p">${Rt}</p></div>
        <div class="file-a">${`<a class="gb small" href="${m.href}">${m.fam==="orb"||Qt(Wt(m.fam))?"Get it free":"Coming to early access"}</a>`}${$t("product",m.id,m.name)}<a class="gb small primary" href="#/studio?family=${m.fam}${m.variant?`&preset=${m.variant}`:""}">Go to Studio</a></div></article>`;n.innerHTML=`
      <section class="dest shop">
        <header class="dh dh-row"><h1>Products</h1><div class="segbar view-tg" role="radiogroup" aria-label="View">${["grid","large"].map(m=>`<button class="pill" role="radio" type="button" data-pview="${m}" aria-checked="${m===t}">${m==="grid"?"Grid":"Large"}</button>`).join("")}</div></header>
        <div class="file-grid${t==="grid"?" is-compact":""}">${_t.map(s).join("")}</div>
      </section>${Et()}`,ta(n),Gt(n,(m,u)=>_t.find(x=>x.id===u)?.href??"#/products"),Ft(n),n.querySelectorAll(".file[data-href]").forEach(m=>m.addEventListener("click",u=>{u.defaultPrevented||u.target.closest("button, a")||(r.sfx("open"),location.hash=m.dataset.href)})),n.querySelectorAll("[data-sphere]").forEach(m=>{let u=Ia(m,m.dataset.sphere,{reduced:i,interactive:t!=="grid"});Ce.push(()=>u.dispose())}),n.querySelectorAll("[data-pview]").forEach(m=>m.addEventListener("click",()=>{if(m.dataset.pview===t)return;try{localStorage.setItem("lo.productsView",m.dataset.pview)}catch{}r.sfx("press");let u=scrollY;Ce.forEach(x=>x()),Ce=[],Fa(),scrollTo(0,u)}))}function o(){let t=Wt(I.id);if(!t||t.published===!1){location.replace("#/products");return}let s=Qt(t),m=t.id==="orb"?it:Ba[t.id],u=m.some(S=>S.id===I.query.variant)?I.query.variant:m[0].id,x=S=>m.find(B=>B.id===S),v=S=>t.id==="orb"?`orb-${S}`:S===m[0].id?t.id:`${t.id}-${S}`;n.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/products">${me.back}<span>Products</span></a>
        <div class="pd-grid">
          <div class="pd-stage glass${s?" has-kit":""}" data-stage>${s?zt(t.id,u,!1):st(t.id)}</div>
          <div class="pd-info">
            <p class="kicker">${Q(t.id==="orb"?"Sphere":t.kind)}</p><h1>${Q(t.name)}</h1>
            <p class="lede">${Q(nt[t.id].lede)}</p>
            ${m?`<div class="vars"><p class="lbl">Version</p><div class="segbar" role="radiogroup" aria-label="Version">${m.map(S=>`<button class="pill" role="radio" type="button" data-variant="${S.id}" aria-checked="${S.id===u}">${S.name}</button>`).join("")}</div><p class="var-line" data-vline></p></div>`:""}
            <p class="price" data-price>${Rt}</p>
            <div class="acts eq">${t.id==="orb"||s?`<button class="gb small primary" type="button" data-getfree>${me.check}<span>Get it free</span></button>`:'<button class="gb small primary" type="button" data-soon aria-expanded="false" aria-controls="ea-wait"><span>Coming to early access</span></button>'}${$t("product",v(u),t.name)}</div>
            ${t.id==="orb"?E():s?L():`<div class="ea-wait" id="ea-wait" hidden>${na("product",{compact:!0,label:`Get an email when ${Q(t.name)} is ready to take, free`})}</div>`}
            ${`<a class="studio-lock" href="#/studio?family=${t.id}">${me.check}<span><b>Customise in Studio</b><small>Open to everyone \xB7 Beta</small></span></a>`}
            <dl class="facts"><dt>What it does</dt><dd>${Q(nt[t.id].does)}</dd><dt>You receive</dt><dd>${t.receives.map(Q).join(" \xB7 ")}</dd></dl>
            <details class="acc"><summary>Compatibility and installation</summary><p>${Q(nt[t.id].tech)}</p></details>
          </div>
        </div>
      </section>${Et()}`,ta(n),Gt(n,(S,B)=>`#/products/${t.id}`),Ge(t.id,n.querySelector("[data-stage]"),u),Te("product_open",{product:t.id,variant:u});let O=S=>{ae.sphere?.setKind(S),t.id==="orb"&&ae&&pe(S===Ne);let B=x(S),w=n.querySelector("[data-stage]");if(s){w.querySelector("[data-kit]").dataset.kit=`${t.id}|${S}|0`,Ft(w);let z=n.querySelector(".free-c code");z&&(z.textContent=dr(t.id,S))}else t.id!=="orb"&&(w.classList.remove("v-dark","v-frost","v-compact"),B.cls&&w.classList.add(B.cls),B.p&&Me.set(B.p));n.querySelectorAll("[data-variant]").forEach(z=>z.setAttribute("aria-checked",String(z.dataset.variant===S)));let q=n.querySelector("[data-vline]");if(q&&(q.textContent=x(S).line),t.id==="orb"){let z=!0;n.querySelector("[data-price]").textContent=Rt,n.querySelector("[data-free]").hidden=!z;let ze=n.querySelector(".free-c code");ze&&(ze.textContent=c(S))}let T=n.querySelector("[data-cart]");if(T&&(T.dataset.cart=v(S)),T){let z=dt.has(T.dataset.cart);T.setAttribute("aria-pressed",String(z)),T.querySelector("span").textContent=z?"In cart":"Add to cart"}let re=n.querySelector("[data-fsave]");re.dataset.fsave=`product|${v(S)}`;let A=Re.isSaved("product",v(S));re.setAttribute("aria-pressed",String(A)),re.querySelector("span").textContent=A?"Saved":"Save",history.replaceState(null,"",`#/products/${t.id}${S===m[0].id?"":`?variant=${S}`}`)};ke(n,s?t.id:"orb"),n.querySelector("[data-download]")?.addEventListener("click",()=>{let S=n.querySelector("[data-variant][aria-checked=true]")?.dataset.variant??m[0].id;K(`${t.id}-${S}.html`,dr(t.id,S)),r.sfx("confirm"),Te("free_code_download",{product:t.id,variant:S})}),n.querySelector("[data-getfree]")?.addEventListener("click",()=>{let S=n.querySelector("[data-freebtn]");S?.getAttribute("aria-expanded")!=="true"&&S?.click(),S?.scrollIntoView({block:"nearest",behavior:"smooth"})}),n.querySelector("[data-soon]")?.addEventListener("click",S=>{let B=n.querySelector("#ea-wait"),w=B.hidden;B.hidden=!w,S.currentTarget.setAttribute("aria-expanded",String(w)),r.sfx(w?"open":"close"),w&&B.querySelector("input")?.focus()}),n.querySelectorAll("[data-variant]").forEach(S=>S.addEventListener("click",()=>{O(S.dataset.variant),r.sfx("select"),Te("variant",{product:t.id,variant:S.dataset.variant})})),O(u)}let c=(t="clear")=>`<div data-light-orb${t==="clear"?"":` data-variant="${t}"`} style="width:320px;height:320px"></div>
<script type="module" src="https://carlatres3.github.io/light-orb/embed/v1/orb.js"><\/script>`,h=c();function E(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${me.check}<span>Get the code \u2014 free</span></button>
      <div class="free-p" id="free-code" hidden><p class="note">Paste this where the Orb should appear. It fills the box you give it; drag to turn it, tap to stir it.</p>
        <pre class="free-c glass"><code>${Q(h)}</code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function L(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${me.check}<span>Get the code \u2014 free</span></button>
      <div class="free-p" id="free-code" hidden><p class="note">One self-contained file: open it in a browser, or paste its style, markup and script into your page. Change the material with the --cc-* variables at the top.</p>
        <pre class="free-c glass kit-code"><code></code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button><button class="gb small" type="button" data-download><span>Download .html</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function K(t,s){let m=URL.createObjectURL(new Blob([s],{type:"text/html"})),u=document.createElement("a");u.href=m,u.download=t,document.body.append(u),u.click(),u.remove(),setTimeout(()=>URL.revokeObjectURL(m),1e3)}function ke(t,s="orb"){let m=t.querySelector("[data-freebtn]");if(!m)return;let u=t.querySelector("#free-code"),x=t.querySelector("[data-copy]");m.addEventListener("click",()=>{let v=u.hidden;u.hidden=!v,m.setAttribute("aria-expanded",String(v)),r.sfx(v?"open":"select"),v&&Te("free_code_open",{product:s})}),x.addEventListener("click",async()=>{let v=!1;try{await navigator.clipboard.writeText(t.querySelector(".free-c code").textContent),v=!0}catch{let O=document.createRange();O.selectNodeContents(t.querySelector(".free-c code"));let S=getSelection();S.removeAllRanges(),S.addRange(O)}x.querySelector("span").textContent=v?"Copied":"Selected \u2014 press Copy",v&&(r.sfx("select"),Te("free_code_copy",{product:s})),setTimeout(()=>{x.isConnected&&(x.querySelector("span").textContent="Copy code")},2200)})}let nt={orb:{lede:"A 3D sphere you can place in your own work. Choose the material and what it holds inside.",does:"Drag to turn it; it keeps turning slowly on its own. A tap makes whatever is in it move a little faster. Twenty versions: clear glass, liquid metal, porcelain, bloom, and glass holding a light, points of light, glitter or beads.",tech:"An ES module built on Three.js r186 (WebGL 2). Works in current Chrome, Safari, Edge and Firefox. The integration notes explain how to place it in a page and choose a version."},"orb-slider":{lede:"A glass capsule whose thumb is a small orb with its own slow inner light. Slide it to enter.",does:"A slide-to-confirm control. Drag the orb; let go and a spring carries it home, or to the end to confirm (it then sends a confirm event). Arrow keys, Enter, Home and End work too.",tech:"One HTML file: CSS variables for the material and a few lines of plain JavaScript. No framework, no WebGL. Current Chrome, Safari, Edge and Firefox."},"orb-wave":{lede:"The ripple the Orb leaves on the floor when it lands, drawn in light.",does:"Each touch raises a wave that spreads across the surface and fades.",tech:"A full-screen shader with an impact API: position, strength and scale. Needs WebGL 2."},"background-pack":{lede:"Two environments in one pack: a dark world and a light one, and the change between them.",does:"Moves smoothly from dark to light, controlled by a single exposure value.",tech:"A full-screen shader with exposure, horizon and lamp controls. Needs WebGL 2."},"crystal-controls":{lede:"Buttons, switches, fields and sliders in six glass materials. A highlight follows the pointer; presses give like glass on a spring.",does:"Every control has default, hover, focus, pressed, selected, disabled and loading states. Choose Clear, Smoke, Chrome, Porcelain, Gel or Bloom; each is a set of CSS variables.",tech:"One HTML file: plain CSS and a few lines of JavaScript for the pointer light and the slider spring. No framework. Current Chrome, Safari, Edge and Firefox."}};function st(t){return t==="orb"?'<div class="pd-sph" data-sph></div><span class="pd-hint">Drag to turn it. Tap to stir it.</span>':t==="orb-slider"?'<div class="cap" data-cap role="slider" tabindex="0" aria-label="Slide to enter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="cap-l">slide to enter</span></div>':t==="orb-wave"?'<button class="gb small pd-btn" type="button" data-drop>Drop the Orb</button><span class="pd-hint">Or tap the floor.</span>':t==="background-pack"?'<div class="segbar pd-seg" role="radiogroup" aria-label="Environment"><button class="pill" role="radio" type="button" data-env="0" aria-checked="false">Dark world</button><button class="pill" role="radio" type="button" data-env="1" aria-checked="true">Light</button></div>':`<div class="kit"><button class="gb primary" type="button">Continue</button><button class="gb" type="button">Secondary</button><button class="gb gc" type="button" aria-label="Confirm">${me.check}</button>
      <button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><input class="gi" placeholder="Your name" aria-label="Example field">
      <input class="grange" type="range" value="60" aria-label="Example slider" style="--p:60%"><button class="gb" type="button" disabled>Disabled</button><button class="gb" type="button" aria-busy="true">Loading</button></div>`}let ae=null,Ne="clear";function pe(t){if(!ae)return;ae.real=t;let s=ae.el.querySelector("[data-sph]");if(s)for(let m of s.children)m.style.visibility=t?"hidden":"";t?f.show(bt(jt("original").config)):f.hide()}function Ge(t,s,m="clear"){if(ae={id:t,el:s,cap:0,drop:null},!(t==="crystal-controls"||t==="orb-slider")){if(t!=="orb"&&f.show(bt(jt("original").config)),t==="orb"){ae.sphere=Ia(s.querySelector("[data-sph]"),m,{reduced:i}),Ce.push(()=>ae?.sphere?.dispose());let u=s.querySelector("[data-sph]"),x=null,v=0,O=0,S=0,B=()=>{S=0,!(!ae?.real||x)&&(v*=.94,O+=v,f.orb?.setObjectYaw(O),Math.abs(v)>5e-4&&(S=requestAnimationFrame(B)))};u.addEventListener("pointerdown",q=>{ae?.real&&(x={x:q.clientX,t:performance.now(),moved:0},u.setPointerCapture(q.pointerId))}),u.addEventListener("pointermove",q=>{if(!x||!ae?.real)return;let T=q.clientX-x.x;x.x=q.clientX,x.moved+=Math.abs(T),v=T*.012,O+=v,f.orb?.setObjectYaw(O)});let w=()=>{if(!x)return;let q=x.moved<6;x=null,q?(f.orb?.nudge(.8),r.sfx("detent")):S||(S=requestAnimationFrame(B))};u.addEventListener("pointerup",w),u.addEventListener("pointercancel",w),Ce.push(()=>{cancelAnimationFrame(S),ae?.real&&f.hide()})}if(t==="orb-slider"){let u=s.querySelector("[data-cap]"),x=null,v=S=>{ae.cap=Nt(S),u.setAttribute("aria-valuenow",Math.round(ae.cap*100))};u.addEventListener("pointerdown",S=>{x={x:S.clientX,v:ae.cap},u.setPointerCapture(S.pointerId),r.sfx("select")}),u.addEventListener("pointermove",S=>{x&&v(x.v+(S.clientX-x.x)/(u.offsetWidth-u.offsetHeight))});let O=()=>{x&&(x=null,f.orb?.nudge(.5),ae.cap>.9?(v(1),r.sfx("confirm")):(v(0),r.sfx("select")))};u.addEventListener("pointerup",O),u.addEventListener("pointercancel",O),u.addEventListener("keydown",S=>{S.key==="ArrowRight"&&v(ae.cap+.1),S.key==="ArrowLeft"&&v(ae.cap-.1),S.key==="End"&&v(1),S.key==="Home"&&v(0)})}if((t==="orb-wave"||t==="background-pack")&&(Xa(s),e.addBackdrop(Me.canvas),Me.set({horizon:.3,strength:1,scale:70}),Me.setExposure(t==="background-pack"?1:0,!0),t==="orb-wave"&&(s.addEventListener("pointerdown",u=>{if(u.target.closest("button"))return;let x=s.getBoundingClientRect(),v=u.clientY-x.top;v>x.height*.55&&(Me.impact(u.clientX-x.left,v),f.orb?.nudge(.7),r.sfx("detent"))}),s.querySelector("[data-drop]").addEventListener("click",()=>{ae.drop={vy:0,y:null,contacts:0},r.sfx("select")})),t==="background-pack"&&s.querySelectorAll("[data-env]").forEach(u=>u.addEventListener("click",()=>{Me.setExposure(+u.dataset.env),r.sfx("open"),s.querySelectorAll("[data-env]").forEach(x=>x.setAttribute("aria-checked",String(x===u)))}))),t==="crystal-controls"){s.querySelectorAll(".gb:not([disabled])").forEach(x=>x.addEventListener("click",()=>r.sfx("select"))),s.querySelector(".gsw").addEventListener("click",x=>{let v=x.currentTarget;v.setAttribute("aria-checked",String(v.getAttribute("aria-checked")!=="true")),r.sfx("select")}),s.querySelector(".gi").addEventListener("input",x=>{x.isTrusted&&r.sfx("type")});let u=s.querySelector(".grange");u.addEventListener("input",()=>{u.style.setProperty("--p",`${u.value}%`),r.sfx("level",u.value/100)})}}}let We=2,be=(t,s="")=>`<span class="dev" data-dev><span class="dev-body"><span class="dev-screen"><img src="${t.cover.src}" alt="${Q(s)}" draggable="false" decoding="async"${s?' width="1600" height="1000"':""}></span><span class="dev-glare" aria-hidden="true"></span></span><span class="dev-floor" aria-hidden="true"></span></span>`;function tt(t){i||t.querySelectorAll("[data-dev]").forEach(s=>{s.addEventListener("pointermove",m=>{let u=s.getBoundingClientRect();s.style.setProperty("--ry",`${((m.clientX-u.left)/u.width-.5)*10}deg`),s.style.setProperty("--rx",`${((m.clientY-u.top)/u.height-.5)*-8}deg`)}),s.addEventListener("pointerleave",()=>{s.style.removeProperty("--ry"),s.style.removeProperty("--rx")})})}let aa=t=>`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.name} \u2014 starter</title>
<!-- ${t.name} starter, from The Light Orb (free during early access; see the licence).
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
<script type="module" src="https://carlatres3.github.io/light-orb/embed/v1/orb.js"><\/script>
</body>
</html>
`;function ni(){let t=mt.length+We;n.innerHTML=`
      <section class="dest tpl">
        <header class="dh"><h1>Complete compositions</h1></header>
        <div class="folder" data-folder>
          <div class="folder-tab glass"><span>Templates</span><small>${mt.length} ${mt.length===1?"composition":"compositions"}</small></div>
          <div class="folder-body glass"><span class="folder-glow" aria-hidden="true"></span><span class="folder-num" data-fnum aria-hidden="true"></span>
            <div class="folder-track" data-track role="listbox" aria-label="Templates" tabindex="0">
              ${mt.map((q,T)=>`<button class="tcard glass" type="button" role="option" data-t="${T}" aria-label="Open ${Q(q.name)}">
                <span class="tcard-n">${String(T+1).padStart(2,"0")}</span>
                <span class="tcard-cv">${be(q)}</span>
                ${q.showcase?`<span class="tcard-tag">${Q(q.category)}</span>`:""}<span class="tcard-t">${Q(q.name)}</span><span class="tcard-l">${Q(q.line)}</span></button>`).join("")}
              ${Array.from({length:We},(q,T)=>`<div class="tcard glass soon" aria-hidden="true"><span class="tcard-n">${String(mt.length+T+1).padStart(2,"0")}</span><span class="tcard-cv"><span class="soon-orb"></span><span class="soon-lbl">In the making</span></span><span class="tcard-t">Next composition</span><span class="tcard-l">Joining the collection soon.</span></div>`).join("")}
            </div>
            <div class="folder-open" data-open hidden></div>
            <div class="folder-ctl" data-fctl><button class="gb gc small" type="button" data-fstep="-1" aria-label="Previous">${me.prev}</button><span class="count" data-fcount></span><button class="gb gc small" type="button" data-fstep="1" aria-label="Next">${me.next}</button></div>
          </div>
        </div>
      </section>${Et()}`;let s=n.querySelector("[data-track]"),m=[...s.children],u=n.querySelector("[data-open]"),x=n.querySelector("[data-fctl]"),v=0,O=q=>{m.forEach((T,re)=>{let A=re-v+ut/340,z=Math.abs(A);T.style.transition=q||ua?"none":"",T.style.transform=`translateX(calc(-50% + ${A*96}%)) translateZ(${-z*120}px) rotateY(${Nt(-A*18,-30,30)}deg) scale(${1-Math.min(z,2)*.08})`,T.style.zIndex=String(10-Math.round(z)),T.style.opacity=String(z>2.2?0:1-z*.22),T.classList.toggle("on",re===v),T.tagName==="BUTTON"&&T.setAttribute("aria-selected",String(re===v))}),n.querySelector("[data-fnum]").textContent=String(v+1).padStart(2,"0"),n.querySelector("[data-fcount]").textContent=`${String(v+1).padStart(2,"0")} / ${String(t).padStart(2,"0")}`,n.querySelectorAll("[data-fstep]").forEach(T=>{T.disabled=+T.dataset.fstep<0&&v===0||+T.dataset.fstep>0&&v===t-1})},S=q=>{let T=Nt(v+q,0,t-1);T!==v&&(v=T,r.sfx("detent")),O()};n.querySelectorAll("[data-fstep]").forEach(q=>q.addEventListener("click",()=>S(+q.dataset.fstep))),s.addEventListener("keydown",q=>{q.key==="ArrowRight"&&(S(1),q.preventDefault()),q.key==="ArrowLeft"&&(S(-1),q.preventDefault())}),ga(s,S,()=>O());let B=q=>{let T=mt[q],re={id:`template-${T.id}`,name:T.name,href:`#/templates/${T.id}`};_t.some(A=>A.id===re.id)||_t.push(re),u.innerHTML=`<button class="tl folder-back" type="button" data-close>${me.back}<span>All templates</span></button>
        <div class="fo-grid"><figure class="fo-cv">${be(T,`The beginning of the ${T.name} template.`)}</figure>
          <div class="fo-info"><p class="kicker">${String(q+1).padStart(2,"0")} \xB7 ${T.showcase?Q(T.category):"Template"}</p><h2>${Q(T.name)}</h2>${T.showcase?`<p class="fo-label">${Q(T.subtitle)}</p>`:""}<p>${Q(T.line)}</p>
            <ul class="fo-inc">${T.includes.map(A=>`<li>${Q(A)}</li>`).join("")}</ul>${T.showcase?'<p class="note">Showcase \xB7 not for sale.</p>':`<p class="price">${Rt}</p>`}
            <div class="acts eq">${T.showcase?`<a class="gb small primary" href="${T.demo}" target="_blank" rel="noopener" aria-label="${Q(T.cta)}, opens in a new tab">${Q(T.cta)}</a><a class="gb small" href="#/templates/${T.id}">Details</a>`:`<a class="gb small primary" href="#/templates/${T.id}">Open template</a>${ea(re)}`}${$t("template",T.id,T.name)}</div></div></div>`,ta(u),Gt(u,(A,z)=>`#/templates/${z}`),tt(u),u.querySelector("[data-close]").addEventListener("click",w),s.hidden=!0,x.hidden=!0,u.hidden=!1,u.classList.remove("in"),u.offsetWidth,u.classList.add("in"),r.sfx("open"),u.querySelector("[data-close]").focus({preventScroll:!0})},w=()=>{u.hidden=!0,s.hidden=!1,x.hidden=!1,O(!0),r.sfx("close"),s.focus({preventScroll:!0})};m.forEach((q,T)=>q.tagName==="BUTTON"&&q.addEventListener("click",re=>{if(Ot){re.preventDefault();return}T!==v?(v=T,O(),r.sfx("detent")):B(T)})),O(!0)}function si(){let t=mt.find(s=>s.id===I.id);if(!t){location.replace("#/templates");return}n.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/templates">${me.back}<span>Templates</span></a>
        <div class="pd-grid">
          <figure class="pd-stage cover-big">${be(t,`The beginning of the ${t.name} template.`)}</figure>
          <div class="pd-info"><p class="kicker">${t.showcase?Q(t.category):"Template"}</p><h1>${Q(t.name)}</h1>${t.showcase?`<p class="fo-label">${Q(t.subtitle)}</p>`:""}<p class="lede">${Q(t.line)}</p>
            <div class="acts eq">${t.showcase?`<a class="gb small primary" href="${t.demo}" target="_blank" rel="noopener" aria-label="${Q(t.cta)}, opens in a new tab">${Q(t.cta)}</a>`:'<a class="gb small" href="#/">View it live</a>'}${t.starter&&!0?'<button class="gb small primary" type="button" data-starter>Download starter \u2014 free</button>':""}</div>
            ${t.showcase?'<p class="note">Showcase \xB7 not for sale. Originally designed and built for a maternity and postpartum brand; the demo runs on its own, with purchases disabled.</p>':t.starter&&!0?'<p class="note">A single .html file: the Orb (hosted embed), a greeting, a quotation slot and four destinations, ready to edit. <a href="#/licence">Licence</a></p>':'<p class="note">Purchase opens soon.</p>'}
            <dl class="facts"><dt>Includes</dt><dd>${t.includes.map(Q).join(" \xB7 ")}</dd></dl>
            <p class="note" data-covermeta></p></div>
        </div>
      </section>${Et()}`,tt(n),n.querySelector("[data-starter]")?.addEventListener("click",()=>{K(`${t.id}-starter.html`,aa(t)),r.sfx("confirm"),Te("template_starter_download",{template:t.id})}),fetch(t.cover.meta).then(s=>s.json()).then(s=>{let m=n.querySelector("[data-covermeta]");m&&(m.textContent=t.showcase?`Preview: a capture of the live demo, ${s.captured}.`:`Preview: a capture of this website, ${s.captured}.`)}).catch(()=>{})}function Yr(){let t=r.prefs.voice,s=[...oa.map(w=>({group:w.full?"voices":"more",key:`voice_audition.${w.id}`,clip:"voice_audition",voice:w.id,title:w.name,tag:`${w.accent} \xB7 ${w.gender}`,sub:w.line,use:w.id,note:w.full?"":`Page narration in ${w.name}; other guide lines in ${Ct(w.lines).name}.`})),...["home","products","templates","studio","sound"].map(w=>({group:"guide",key:`${w}.${t}`,clip:w,voice:t,title:w==="home"?"Welcome":w[0].toUpperCase()+w.slice(1),sub:Wa[w]})),...Ta.map(w=>({group:"sfx",key:`sfx.${w.id}`,url:w.file,title:w.name,sub:w.line}))],m=(w,q,T,re=!0)=>`<details class="sg"${re?" open":""}><summary><h2>${q}</h2><span class="sg-n">${s.filter(A=>A.group===w).length}</span><p>${T}</p></summary><div class="sgrid">${s.filter(A=>A.group===w).map(A=>`
      <article class="si si-row"><button class="si-play gb gc small" type="button" data-play="${A.key}" aria-label="Play ${Q(A.title)}">${me.play}</button>
        <div class="si-t"><h3>${Q(A.title)}${A.tag?`<span class="file-ext">${Q(A.tag)}</span>`:'<span class="file-ext">.m4a</span>'}</h3><p>${Q(A.sub)}</p>${A.note?`<p class="note">${Q(A.note)}</p>`:""}</div>
        <div class="si-w" data-wave="${A.key}" role="slider" tabindex="0" aria-label="Position in ${Q(A.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><canvas></canvas></div>
        <div class="si-m"><span class="si-d" data-dur="${A.key}">\u2013:\u2013\u2013</span></div>
        <div class="si-x eq">${A.use?`<button class="gb small" type="button" data-use="${A.use}" aria-pressed="${t===A.use}"><span>${t===A.use?"In use":"Use voice"}</span></button>`:""}${A.group!=="guide"?ea({id:`sound-${A.key}`}):""}${$t("sound",A.key,A.title)}</div></article>`).join("")}</div></details>`;n.innerHTML=`
      <section class="dest snd-dest">
        <header class="dh"><h1>Voices and sounds</h1><p class="dh-l">Twelve neural voices, each reading the same line. Choose one and the guide speaks with it across the site. Current guide voice: <b>${Q(Ct(t).name)}</b>.</p></header>
        ${m("voices","Guide voices","Every line the guide says, rendered in each of these voices.")}
        ${m("more","More voices","Different characters for the guide. Compare them on the same line.",!1)}
        ${m("guide","Guide narration",`What the guide says on each page, in ${Q(Ct(t).name)}\u2019s voice.`,!1)}
        ${m("sfx","Interface sounds","Short, quiet sounds for touch, panels and wheels.")}
      </section>${Et()}`,n.querySelectorAll(".si").forEach(w=>{w.querySelector('[data-play^="sfx."]')&&(w.querySelector(".file-ext").textContent=".wav")}),Gt(n,()=>"#/sound");let u=new Map,x=(w,q)=>{let T=n.querySelector(`[data-dur="${CSS.escape(w)}"]`);T&&(T.textContent=q)};for(let w of s)(w.url?r.peaksUrl(w.url,80):r.peaks(w.clip,w.voice,80)).then(q=>{u.set(w.key,q),x(w.key,li(q.duration))}).catch(()=>x(w.key,"Unavailable"));pr=s;let v=w=>w.url?w.key:`${w.clip}.${w.voice}`;ta(n);let O=(w,q=0)=>(r.prefs.master||r.set({master:!0}),w.url?r.playUrl(w.key,w.url,{from:q}):r.play(w.clip,{voice:w.voice,kind:"audition",from:q}));n.querySelectorAll("[data-play]").forEach(w=>w.addEventListener("click",()=>{let q=s.find(re=>re.key===w.dataset.play),T=v(q);r.state.clip===T&&r.playing?r.pause():r.state.clip===T&&r.state.status==="paused"?r.resume():O(q)})),n.querySelectorAll("[data-wave]").forEach(w=>{let q=s.find(z=>z.key===w.dataset.wave),T=v(q),re=!1,A=z=>{let ze=w.getBoundingClientRect();return Nt((z.clientX-ze.left)/ze.width)};w.addEventListener("pointerdown",async z=>{re=!0,w.setPointerCapture(z.pointerId);let ze=A(z);r.state.clip!==T&&await O(q),r.seek(ze)}),w.addEventListener("pointermove",z=>{re&&r.state.clip===T&&r.seek(A(z))}),w.addEventListener("pointerup",()=>{re=!1}),w.addEventListener("keydown",z=>{r.state.clip!==T||!r.duration||(z.key==="ArrowRight"&&r.seek(r.position+1/r.duration),z.key==="ArrowLeft"&&r.seek(r.position-1/r.duration))})}),n.querySelectorAll("[data-use]").forEach(w=>w.addEventListener("click",()=>{let q=scrollY;r.stop(),r.set({voice:w.dataset.use}),r.sfx("confirm"),Te("voice_use",{voice:w.dataset.use}),Yr(),scrollTo(0,q),ee(`${Ct(w.dataset.use).name} is now the guide\u2019s voice.`)}));let S=0,B=()=>{if(S=requestAnimationFrame(B),pr!==s){cancelAnimationFrame(S);return}for(let w of n.querySelectorAll("[data-wave]")){let q=s.find(Ut=>Ut.key===w.dataset.wave);if(!q)continue;let T=v(q),re=u.get(q.key),A=w.firstElementChild,z=w.getBoundingClientRect();if(z.bottom<0||z.top>innerHeight)continue;let ze=r.state.clip===T,It=ze?r.position:0,Ea=ze?r.state.energy:0,Yt=ze&&r.playing;w.setAttribute("aria-valuenow",Math.round(It*100));let Pt=n.querySelector(`[data-play="${CSS.escape(q.key)}"]`);if(Pt&&Pt.dataset.on!==String(Yt)&&(Pt.dataset.on=String(Yt),Pt.innerHTML=Yt?me.pause:me.play,Pt.setAttribute("aria-label",`${Yt?"Pause":"Play"} ${q.title}`)),!re)continue;let lt=Math.min(devicePixelRatio||1,2);A.width!==Math.round(z.width*lt)&&(A.width=Math.round(z.width*lt),A.height=Math.round(z.height*lt));let Lt=A.getContext("2d");Lt.setTransform(lt,0,0,lt,0,0),Lt.clearRect(0,0,z.width,z.height);let gt=re.bins.length,_a=Math.min(2,z.width/gt*.4),ra=Math.max(.5,(z.width-_a*(gt-1))/gt),mi=z.height/2;for(let Ut=0;Ut<gt;Ut++){let Vr=(Ut+.5)/gt<=It,bi=Vr&&Math.abs((Ut+.5)/gt-It)<2.5/gt?Ea:0,Wr=Math.max(2,(re.bins[Ut]*.9+bi*.2)*(z.height-4));Lt.fillStyle=Vr?"#262827":"rgba(38,40,39,.2)",Lt.beginPath(),Lt.roundRect(Ut*(ra+_a),mi-Wr/2,ra,Wr,ra/2),Lt.fill()}}};B(),Ce.push(()=>cancelAnimationFrame(S))}let li=t=>`${Math.floor(t/60)}:${String(Math.round(t%60)).padStart(2,"0")}`;function di(){if(we&&(we.leave(),we=null),!0){n.innerHTML="",we=Io({api:e,audio:r,top:g,page:n,query:I.query,ICON:me,flash:ee,product:f,store:Re});return}n.innerHTML=`
      <section class="st-lock">
        <div class="lock-blur" aria-hidden="true"><i class="lb-bar"></i><i class="lb-sph"></i><i class="lb-ins"></i></div>
        <div class="lock-card glass dark">
          <span class="lock-i">${me.lock}</span>
          <p class="kicker">Studio</p><h1>For members</h1>
          <p>Shape the sphere: its material, its colour and what moves inside it. Studio opens with membership.</p>
          <div class="acts eq"><a class="gb small primary" href="#/membership">See membership</a><a class="gb small" href="#/products">Browse products</a></div>
        </div>
      </section>`}function ci(t,s,{W:m,H:u}){let x=r.energy(),v=r.playing&&(r.state.kind==="guide"||r.state.kind==="audition"&&I.name==="sound");a.setSpeech(v&&!ur()?x*(i?.35:.9):0),H+=((v&&!ur()||ge?1:0)-H)*Math.min(1,s*(v?4:1.2));{let B=t-G,w=B<0?0:B<3.5?Ht(B/.4):1-Ht((B-3.5)/1.6);a.setRibbon?.(Math.max(w,H))}f.orb?.setSpeech(r.playing&&r.state.kind==="audition"&&ur()?x*(i?.35:1):0);let O=m<700,S;if(we)S=we.frame(t,s,{W:m,H:u}),f.frame(S.product??null);else if(I.name==="home")S=hi(m,u,O);else{let B=ui(m,u,O);if(O){let w=performance.now()-Ae;gr+=((w<700?.18:1)-gr)*Math.min(1,s*6),B.vis=gr}S={warm:0,orb:B,emission:oe.emission}}if(!we){let B=fi(m,u,s);f.frame(B),B?.ground&&(S.grounds||=[]).push({y:B.ground,x:B.x,d:B.d})}return gi(S.orb),S}let Ur=null,pr=[],pi=()=>pr.map(t=>({id:`sound-${t.key}`,name:t.title,href:"#/sound"})),ur=()=>!1,gr=1,ui=(t,s,m)=>({x:t-(m?34:50),y:s-(m?38:52),d:m?40:50,vis:1});function gi(t){let s=t&&(t.vis??1)>.5&&!!Oe();b.hidden=!s,s&&Object.assign(b.style,{left:`${t.x-t.d/2}px`,top:`${t.y-t.d/2}px`,width:`${t.d}px`,height:`${t.d}px`})}function hi(t,s,m){let u=n.scrollTop/s,x=n.querySelector("[data-welcopy]"),v=n.querySelector("[data-qt]"),O=n.querySelector(".wel-ctl"),S=1-Ht((u-.04)/.2),B=St[Ee],w=B?.getBoundingClientRect(),q=(n.querySelector(".qt")?.offsetTop??s)/s,T=(n.querySelector("#select")?.offsetTop??2*s)/s,re=n.querySelector("#sel-t"),A=re?(re.getBoundingClientRect().top+n.scrollTop-n.getBoundingClientRect().top)/s:2,z=A-.8,ze=hn(u,.13,.3,z-.22,z);x&&(x.style.setProperty("--wipe",S.toFixed(3)),x.style.visibility=S<.01?"hidden":""),O&&(O.style.setProperty("--wipe",S.toFixed(3)),O.style.visibility=S<.01?"hidden":""),v&&(v.style.setProperty("--wipe",ze.toFixed(3)),v.style.transform=`translateY(${(20*(1-Ht((u-.13)/.17))-24*Ht((u-z+.22)/.22)).toFixed(1)}px)`,v.style.visibility=ze<.01?"hidden":"");let It=Nt(Math.min(t*(m?.46:.19),s*.28),120,280),Ea={x:t/2,y:s*(m?.3:.29),d:It},Yt={x:t/2,y:s*.87,d:It*.3},Pt=Ht((u-.08)/Math.max(.3,q-.5)),lt={x:wa(Ea.x,Yt.x,Pt),y:wa(Ea.y,Yt.y,Pt),d:wa(Ea.d,Yt.d,Pt)};if(B){let Lt=w,gt=Ht((u-z+.1)/.2);if(gt>0){let _a=m?40:50,ra={x:Bt?Lt.left+Lt.width/2:t/2,y:Lt.bottom+44,d:_a};lt={x:wa(lt.x,ra.x,gt),y:wa(lt.y,ra.y,gt),d:wa(lt.d,ra.d,gt)}}}return{orb:{...lt,vis:1},warm:1,ground:{y:lt.y+lt.d/2},emission:oe.emission}}function fi(t,s,m){if(I.name==="sound"&&Ur?.isConnected){let u=Ur.getBoundingClientRect(),x=Math.min(u.width,u.height)*.78;return u.bottom>0?{x:u.left+u.width/2,y:u.top+u.height/2,d:x,vis:1,ground:u.top+u.height/2+x/2}:null}if(I.name==="products"&&!I.id){let u=n.querySelector("[data-orbslot]");if(!u)return null;let x=u.getBoundingClientRect(),v=u.closest(".pc")?.classList.contains("on"),O=Math.min(x.width,x.height)*.74;return x.width>10?{x:x.left+x.width/2,y:x.top+x.height/2,d:O,vis:v?1:.7,ground:x.top+x.height/2+O/2}:null}if(I.name==="products"&&I.id&&ae?.el?.isConnected){let u=ae,x=u.el.getBoundingClientRect();if(u.id==="orb"){if(!u.real)return null;let v=u.el.querySelector("[data-sph]")?.getBoundingClientRect();if(!v||v.width<10||v.bottom<0||v.top>s)return null;let O=Math.min(v.width,v.height)*.8;return{x:v.left+v.width/2,y:v.top+v.height/2,d:O,vis:1,snap:!0}}if(u.id==="orb-slider"){let v=u.el.querySelector("[data-cap]");if(!v)return null;let O=v.getBoundingClientRect(),S=O.height*.84,B=(O.height-S)/2;return{x:O.left+B+S/2+u.cap*(O.width-O.height),y:O.top+O.height/2,d:S,vis:1,snap:!0}}if(u.id==="orb-wave"||u.id==="background-pack"){let v=Math.min(96,x.width*.16),O=x.height*.7+v*.1,S=O-v/2;if(u.drop){let B=u.drop;B.y==null&&(B.y=-x.height*.45),B.vy+=2600*m,B.y+=B.vy*m,B.y>=0&&(B.y=0,Me.impact(x.width/2,O,Nt(B.vy/1400)),f.orb?.nudge(.8),r.sfx("detent"),B.vy*=-.38,(++B.contacts>2||Math.abs(B.vy)<120)&&(u.drop=null)),S+=u.drop?u.drop.y:0}return Me.setOrb({x:x.width/2,y:S,d:v}),{x:x.left+x.width/2,y:x.top+S,d:v,vis:1,snap:!!u.drop}}}return null}addEventListener("resize",()=>{I.name==="home"&&Zt(!0)}),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__lo={audio:r,worldPreview:Me,product:f,store:Re,get studio(){return we},get route(){return I},get sel(){return Ee},get psel(){return Ha}});try{Object.keys(sessionStorage).filter(t=>t.startsWith("lo:scroll:")||t==="lo:sel").forEach(t=>sessionStorage.removeItem(t))}catch{}return Ee=0,Mt(),Y(),{frame:ci,audio:r,get route(){return I},get studio(){return we},reapply:()=>Be()}}function _r(e,a){let i=document.createElement(e);return i.className=a,i}var ka={hostDuration:.95,follow:7,damping:.92,pearl:[243,243,241],chamber:[23,26,25],whiten:2.2},ca=matchMedia("(prefers-reduced-motion: reduce)").matches,ii=(e,a=0,i=1)=>Math.min(i,Math.max(a,e)),pa=(e,a,i)=>e+(a-e)*i,ai=e=>{let a=ii(e);return a<.5?4*a*a*a:1-(-2*a+2)**3/2},ri=(e,a,i)=>e.map((r,d)=>pa(r,a[d],i)),cr=(e,a=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${a})`,oi=!1;document.addEventListener("lightorb:intro-complete",e=>Gr(e.detail));window.__lightorbIntroComplete&&Gr(window.__lightorbIntroComplete.detail);document.body.classList.contains("static")&&Gr(null);function fn(){let e=document.createElement("div");e.style.cssText="position:absolute;left:0;top:0;border-radius:50%;pointer-events:none;will-change:transform;background:radial-gradient(circle at 34% 28%,#fff 0 10%,rgba(255,255,255,.55) 24%,rgba(225,228,230,.35) 58%,rgba(170,176,180,.45) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),inset 0 -12px 24px rgba(120,126,130,.18),0 18px 30px -18px rgba(38,40,39,.45)";let a=()=>a,i={element:e,place(r){e.style.width=e.style.height=`${r.d}px`,e.style.transform=`translate(${r.x-r.d/2}px,${r.y-r.d/2}px)`,e.style.opacity=r.visibility??1}};return new Proxy(i,{get:(r,d)=>d in r?r[d]:a})}function Gr(e){if(oi)return;let i=document.querySelector(".intro").querySelector(".intro-world"),r=e?.orb??fn();oi=!0;for(let $ of document.querySelectorAll(".intro .cue, .skip"))$.setAttribute("aria-hidden","true"),$.inert=!0;let d=document.createElement("style");d.textContent=".x-surface,.x-orb{position:fixed;inset:0;pointer-events:none}.x-surface{z-index:6;width:100%;height:100%}.x-orb{z-index:30}",document.head.append(d);let f=document.createElement("canvas");f.className="x-surface",f.setAttribute("aria-hidden","true");let n=document.createElement("div");n.className="x-orb",document.body.append(f,n),n.append(r.element),r.attachPointer(document.createElement("div"))();let g=f.getContext("2d");r.prepareTone("ivory"),r.prepareTone("dark");let p=0,y=0,b=1,F=()=>{p=Math.max(1,innerWidth),y=Math.max(1,innerHeight),b=Math.min(devicePixelRatio||1,1.5),f.width=Math.round(p*b),f.height=Math.round(y*b)};F(),addEventListener("resize",F);let V=performance.now()/1e3,C={x:0,y:0,d:0,vx:0,vy:0,vd:0,from:null,hosted:!1},l=new Set,R=null,se=null,N=0,Ue=1,qe=1,ee=V,Y={left:.65,right:.55,env:.5,exposure:0,yaw:0,pitch:0,platform:!0},W=($,M)=>{let j=performance.now()/1e3,D=ii(j-ee,0,.05);ee=j,C.from||(C.from={x:$.x,y:$.y,d:$.d}),R=se?.frame(j,D,{W:p,H:y})??null;let P=R?.orb??{x:p/2,y:y*.42,d:Math.min(p*.3,y*.42)},_=ca?1:ai((j-V)/ka.hostDuration);if(!C.hosted)C.x=pa(C.from.x,P.x,_),C.y=pa(C.from.y,P.y,_),C.d=pa(C.from.d,P.d,_),_>=1&&(C.hosted=!0,r.attachPointer(document.createElement("div"))(),se?.reapply?.(),r.setMono?.(!1));else if(ca||R?.snap)C.x=P.x,C.y=P.y,C.d=P.d,C.vx=C.vy=C.vd=0;else{let J=ka.follow,ie=ka.damping;C.vx+=(J*J*(P.x-C.x)-2*ie*J*C.vx)*D,C.x+=C.vx*D,C.vy+=(J*J*(P.y-C.y)-2*ie*J*C.vy)*D,C.y+=C.vy*D,C.vd+=(J*J*(P.d-C.d)-2*ie*J*C.vd)*D,C.d+=C.vd*D}C.hosted&&!C.hostedAt&&(C.hostedAt=j);let X=ca?1:ai((j-V-.25)/ka.whiten),te=Math.min(R?.warm??1,1-X);Ue=ca?te:pa(Ue,te,.2),N=pa(N,R?.room==="chamber"?1:0,ca?1:.12),qe=pa(qe,R?.orb?.vis??1,ca?1:.14),Number.isFinite(C.x+C.y+C.d)||(console.warn("orb pose NaN",JSON.stringify(P),JSON.stringify(C)),Object.assign(C,{x:P.x,y:P.y,d:P.d,vx:0,vy:0,vd:0})),Be();let ce=Ue<.002;return{...$,x:C.x,y:C.y,d:C.d,squash:0,contact:0,worldY:ce?-9999:C.y,hideWorld:ce,visibility:qe,emission:$.emission*(R?.emission??1),raster:Math.ceil(Math.max(C.d,P.d,140)*1.06)}};if(e?.orb)e.takeOver(W);else{let $=()=>{r.place(W({x:p/2,y:y/2,d:0,emission:1})),requestAnimationFrame($)};requestAnimationFrame($)}try{Be()}catch{}try{r.setBackdrop(($,M)=>oe($,M,C))}catch($){console.warn("backdrop",$)}let ue=(()=>{try{let $=document.createElement("canvas").getContext("2d");return $.filter="blur(1px)",$.filter==="blur(1px)"}catch{return!1}})(),$e=document.createElement("canvas"),le=$e.getContext("2d");function ye($,M,j,D){return $e.width!==D&&($e.width=$e.height=D),le.globalCompositeOperation="copy",le.drawImage(i,$,M,j,j,0,0,D,D),le.globalCompositeOperation="saturation",le.fillStyle="#808080",le.fillRect(0,0,D,D),le.globalCompositeOperation="destination-in",le.drawImage(i,$,M,j,j,0,0,D,D),le.globalCompositeOperation="source-over",$e}function oe($,M,j){let D=j.d/M.diameter,P=M.extent*D,_=j.x-P/2,X=j.y-P/2,te=M.extent/P,ce=J=>J.width>0&&J.height>0;if($.fillStyle=cr(ka.pearl),$.fillRect(0,0,M.extent,M.extent),Ue>.002&&ce(i)){let J=i.width/Math.max(1,innerWidth),ie=!document.documentElement.classList.contains("warm");ie&&ue&&($.filter="grayscale(1) contrast(1.06)"),ie&&!ue?$.drawImage(ye(_*J,X*J,P*J,M.extent),0,0):$.drawImage(i,_*J,X*J,P*J,P*J,0,0,M.extent,M.extent),ie&&ue&&($.filter="none")}ce(f)&&$.drawImage(f,_*b,X*b,P*b,P*b,0,0,M.extent,M.extent);for(let J of l){if(!J.isConnected||!ce(J))continue;let ie=J.getBoundingClientRect();ie.right<_||ie.left>_+P||ie.bottom<X||ie.top>X+P||$.drawImage(J,(ie.left-_)*te,(ie.top-X)*te,ie.width*te,ie.height*te)}}function Be(){g.setTransform(b,0,0,b,0,0),g.clearRect(0,0,p,y);let $=1-Ue;if($>0){g.globalAlpha=1;let j=ka.pearl,D=g.createLinearGradient(0,0,0,y);if(D.addColorStop(0,cr(ri(j,[250,251,251],.5))),D.addColorStop(.6,cr(j)),D.addColorStop(1,cr(ri(j,[214,217,220],.55))),g.fillStyle=D,g.fillRect(0,0,p,y),Oe(p*.62,-y*.12,Math.max(p*.85,y*.55),"255,255,255",.62),Oe(p*.05,y*1.05,p*.45,"196,201,206",.35),g.globalAlpha=1,$<.999){let P=Math.hypot(p,y),_=C.x||p/2,X=C.y||y/2,te=$*$*(3-2*$),ce=Math.max(0,P*1.15*te-P*.45),J=ce+P*.55,ie=g.createRadialGradient(_,X,ce,_,X,J);ie.addColorStop(0,`rgba(0,0,0,${Math.min(1,te*1.6)})`),ie.addColorStop(1,"rgba(0,0,0,0)"),g.globalCompositeOperation="destination-in",g.fillStyle=ie,g.fillRect(0,0,p,y),g.globalCompositeOperation="source-over"}}for(let j of R?.glows??[]){g.save(),g.globalAlpha=j.k*$,g.translate(j.x,j.y),g.scale(1,j.h/j.w);let D=g.createRadialGradient(0,0,0,0,0,j.w);D.addColorStop(0,"rgba(255,255,255,.7)"),D.addColorStop(.5,"rgba(255,255,255,.22)"),D.addColorStop(1,"rgba(255,255,255,0)"),g.fillStyle=D,g.fillRect(-j.w,-j.w,j.w*2,j.w*2),g.restore()}N>.002&&de(N);let M=R?.ground;for(let j of R?.grounds??[])Pe(j,j,1)}function Oe($,M,j,D,P){let _=g.createRadialGradient($,M,0,$,M,j);_.addColorStop(0,`rgba(${D},${P})`),_.addColorStop(1,`rgba(${D},0)`),g.fillStyle=_,g.fillRect($-j,M-j,j*2,j*2)}let Ie=Array.from({length:160},($,M)=>{let j=Math.sin(M*12.9898)*43758.5453,D=j-Math.floor(j),P=Math.sin(M*78.233)*12345.678%1;return[D*Math.PI*2,Math.abs(P)*.9-.25,.3+M%7/10]});function de($){let M=R?.stage??{x:0,y:0,w:p,h:y},j=2**(Y.exposure*.5),D=Y.left,P=Y.right,_=M.x+M.w/2,X=M.y+M.h*.52,te=Y.yaw,ce=Y.pitch;g.save(),g.globalAlpha=$,g.fillStyle="#070808",g.fillRect(0,0,p,y),g.fillStyle="#ffffff";for(let[_e,Se,Je]of Ie){let pt=_e-te*Je,Ze=_+Math.sin(pt)*M.w*.9,yt=X-(Se+ce*.6*Je)*M.h;Math.cos(pt)<-.2||Ze<M.x||Ze>M.x+M.w||(g.globalAlpha=$*.1*Je*j,g.fillRect(Ze,yt,1.1,1.1))}g.globalAlpha=$;let J=X+M.h*(.12-ce*.55),ie=R?.product?.ground??X+M.h*.18,Fe=g.createLinearGradient(0,J,0,M.y+M.h);Fe.addColorStop(0,"rgba(255,255,255,0)"),Fe.addColorStop(.25,`rgba(255,255,255,${.035*j})`),Fe.addColorStop(1,"rgba(255,255,255,0)"),g.fillStyle=Fe,g.fillRect(M.x,J,M.w,M.y+M.h-J);let ct=R?.product?.x??_,ge=R?.product?.d??M.h*.4;for(let[_e,Se]of[[-1,D],[1,P]]){if(Se<=.01)continue;let Je=ct+_e*ge*(1.1+.5*Math.sin(te*_e+.4)),pt=.18+.3*Math.max(0,Math.sin(.15+ce));g.save(),g.translate(Je,ie),g.scale(1,pt);let Ze=g.createRadialGradient(0,0,0,0,0,ge*1.3);Ze.addColorStop(0,`rgba(240,242,240,${.12*Se*j})`),Ze.addColorStop(1,"rgba(240,242,240,0)"),g.fillStyle=Ze,g.beginPath(),g.arc(0,0,ge*1.3,0,Math.PI*2),g.fill(),g.restore();let yt=_e<0?M.x:M.x+M.w,Le=g.createRadialGradient(yt,X,0,yt,X,M.w*.45);Le.addColorStop(0,`rgba(230,234,232,${.07*Se*j})`),Le.addColorStop(1,"rgba(230,234,232,0)"),g.fillStyle=Le,g.fillRect(M.x,M.y,M.w,M.h)}let Ve=g.createRadialGradient(_,X,M.h*.2,_,X,Math.hypot(M.w,M.h)*.62);Ve.addColorStop(0,"rgba(0,0,0,0)"),Ve.addColorStop(1,"rgba(0,0,0,.55)"),g.fillStyle=Ve,g.fillRect(0,0,p,y),g.restore()}function Pe($,M,j){if(!Number.isFinite(M.d+M.x+$.y)||M.d<=0)return;let D=M.d/2,P=N>.5;g.save(),g.globalAlpha=j,g.translate(M.x,$.y),g.scale(1,.2);let _=g.createRadialGradient(0,0,0,0,0,D*1.5);P?(_.addColorStop(0,"rgba(240,240,236,.12)"),_.addColorStop(1,"rgba(240,240,236,0)"),g.globalCompositeOperation="lighter"):(_.addColorStop(0,"rgba(70,72,78,.22)"),_.addColorStop(.5,"rgba(70,72,78,.07)"),_.addColorStop(1,"rgba(70,72,78,0)")),g.fillStyle=_,g.beginPath(),g.arc(0,0,D*1.5,0,Math.PI*2),g.fill(),g.restore()}let U={orb:r,reduced:ca,chamber:Y,body:{get x(){return C.x},get y(){return C.y},get d(){return C.d},get hosted(){return C.hosted}},addBackdrop:$=>l.add($),removeBackdrop:$=>l.delete($),drawBackdrop:oe,exportPNG($,M=r.element){let D=document.createElement("canvas");D.width=Math.round($.w*2),D.height=Math.round($.h*2);let P=D.getContext("2d");P.drawImage(f,$.x*b,$.y*b,$.w*b,$.h*b,0,0,D.width,D.height);for(let _ of M.querySelectorAll("canvas")){let X=_.getBoundingClientRect();P.drawImage(_,(X.left-$.x)*2,(X.top-$.y)*2,X.width*2,X.height*2)}return new Promise(_=>D.toBlob(_,"image/png"))}};se=ti(U),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__exit={api:U,body:C,site:se,get scene(){return R}})}export{ka as EXIT};
