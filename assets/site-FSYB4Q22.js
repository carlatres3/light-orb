import{e as Ra,f as nr,h as Hr,i as Br,j as sr,k as lr,n as Fr,o as Gr,p as dr,r as cr,t as _r,u as Yr,v as Ia,w as xa,x as Pa,y as Le,z as Ur}from"./chunk-MONRGDUC.js";var Ye=[{id:"products",label:"Products",route:"#/products",line:"Objects of light and glass, ready to use.",action:"Explore products",clip:"products",words:["products","product","pieces","piece","objects","gallery","shop"]},{id:"templates",label:"Templates",route:"#/templates",line:"Complete compositions to start from.",action:"Browse templates",clip:"templates",words:["templates","template","compositions","websites","cassettes"]},{id:"studio",label:"Studio",route:"#/studio",line:"Shape the light. Make it yours.",action:"Open Studio",clip:"studio",words:["studio","editor","customize","customise","edit","workshop"]},{id:"sound",label:"Sound",route:"#/sound",line:"Voices and the quiet sounds of glass.",action:"Listen",clip:"sound",words:["sound","sounds","voice","voices","audio","listen"]}];var pr=e=>(Object.values(e).forEach(a=>a&&typeof a=="object"&&pr(a)),Object.freeze(e)),ja=pr({version:1,shell:{roughness:.01,thickness:.78,ior:1.58,tint:"#cdd2cf",tintAmount:.72,elastic:0},interior:{kind:"light",amount:.5,size:.5,motion:.4,fill:.5,colour:"#f1f0ec"},light:{colour:"#f6f6f3",strength:.9,x:-.04,y:-.3,z:.12,spread:.8,glow:.3},motion:{idle:0},voice:{enabled:!0,response:.6}}),va=(e,a,n,o)=>pr({id:e,name:a,line:n,family:"orb",config:{...structuredClone(ja),...Object.fromEntries(Object.entries(o).map(([c,f])=>[c,{...ja[c],...f}]))}}),jt=[va("original","Light","Clear glass holding one soft white light.",{}),va("beads","Beads","Small glass beads resting and rolling inside the shell.",{interior:{kind:"beads",amount:.6,size:.55,motion:.45},light:{strength:.7},shell:{thickness:.15,ior:1.3}}),va("glitter","Glitter","Fine reflective flecks suspended in the volume.",{interior:{kind:"glitter",amount:.6,size:.35,motion:.35,colour:"#f4f4f2"}}),va("liquid","Liquid","A clear liquid with a meniscus that moves with the glass.",{interior:{kind:"liquid",fill:.42,motion:.5,colour:"#dfe3e1"},light:{strength:.78}}),va("gel","Gel","A soft gel body; the shell answers with a damped give.",{interior:{kind:"gel",amount:.55,motion:.45,colour:"#e4e6e3"},shell:{elastic:.55}})],ur=jt[0].config,ra=e=>jt.find(a=>a.id===e)??jt[0],ut=[{id:"orb",name:"The Orb",kind:"Interactive object",published:!0,line:"A 3D sphere for your own work, in twenty versions: glass, metal, porcelain, bloom, and glass with light, sparkle or beads inside.",receives:["ES module (Three.js r186) with the sphere and its material","The version you choose","Integration notes and dependency list"],source:["dist/light-orb.js","dist/orb-three.js","dist/orb-lighting.js","dist/orb-floor.js"],preview:"orb",studio:!0,presets:jt.map(e=>e.id),readiness:"preview_ready",missing:["price","checkout provider","packaged download (source export not yet assembled)"],price:null},{id:"orb-slider",name:"Orb Slider",kind:"Interactive control",published:!0,code:"kit",line:"A glass capsule whose thumb is a small orb. Slide it to enter; a spring brings it home.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Keyboard and pointer support","Six materials"],source:["dist/intro/activation.js","dist/intro/glass-control.js"],preview:"slider",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package (currently embedded in the intro)"],price:null},{id:"orb-wave",name:"Orb Wave",kind:"Surface effect",published:!1,line:"The ripple the Orb leaves on the floor when it lands, drawn in light.",receives:["Light-world shader source","Impact trigger API","Integration notes"],source:["dist/intro/light-world.js"],preview:"wave",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"background-pack",name:"Background Pack",kind:"Two environments",published:!1,line:"A dark world and a light one, and the change between them.",receives:["Dark and warm environment shader","Exposure transition","Integration notes"],source:["dist/intro/light-world.js"],preview:"backgrounds",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"crystal-controls",name:"Crystal Controls",kind:"Interface kit",published:!0,code:"kit",line:"Buttons, switches, fields and sliders in six glass materials, with light that follows the pointer.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Every state: hover, focus, pressed, selected, disabled, loading","Six materials"],source:["dist/app/glass.css.js"],preview:"controls",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged download"],price:null}],Dt=e=>ut.find(a=>a.id===e),Vr=ut.filter(e=>e.published!==!1),ni=[{id:"the-light-orb",name:"The Light Orb",line:"This website\u2019s own beginning: the Orb as host, a quiet greeting, the quotation and the four destinations.",cover:{src:"./media/templates/the-light-orb.cover.jpg",from:"dist/intro.html (post-intro welcome, live render)",meta:"./media/templates/the-light-orb.cover.json"},route:"#/",includes:["Centred welcome with the hosting Orb","Quotation scene","Destination selector"],published:!0,starter:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged source export"],price:null}],gt=ni.filter(e=>e.published!==!1),pt={engine:"Kokoro-82M v1.0",licence:"Apache-2.0",rights:{onSite:"yes",download:"not offered"}},Wt=[{id:"samantha",name:"Heart",kokoro:"af_heart",grade:"A",locale:"en-US",accent:"American",gender:"female",line:"Warm and clear. The guide\u2019s own voice.",full:!0,...pt},{id:"bella",name:"Bella",kokoro:"af_bella",grade:"A\u2212",locale:"en-US",accent:"American",gender:"female",line:"Bright and expressive, with a smile in it.",full:!0,...pt},{id:"emma",name:"Emma",kokoro:"bf_emma",grade:"B\u2212",locale:"en-GB",accent:"British",gender:"female",line:"Composed and precise. A gallery voice.",full:!0,...pt},{id:"daniel",name:"Michael",kokoro:"am_michael",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Calm and grounded. Steady narration.",full:!0,...pt},{id:"nicole",name:"Nicole",kokoro:"af_nicole",grade:"B\u2212",locale:"en-US",accent:"American",gender:"female",line:"Close and hushed, almost a whisper.",lines:"samantha",...pt},{id:"aoede",name:"Aoede",kokoro:"af_aoede",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Soft and lyrical.",lines:"samantha",...pt},{id:"kore",name:"Kore",kokoro:"af_kore",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Even and confident.",lines:"bella",...pt},{id:"isabella",name:"Isabella",kokoro:"bf_isabella",grade:"C",locale:"en-GB",accent:"British",gender:"female",line:"Light and friendly.",lines:"emma",...pt},{id:"fenrir",name:"Fenrir",kokoro:"am_fenrir",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Deep and resonant.",lines:"daniel",...pt},{id:"puck",name:"Puck",kokoro:"am_puck",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Lively and quick.",lines:"daniel",...pt},{id:"george",name:"George",kokoro:"bm_george",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"Measured and classic.",lines:"daniel",...pt},{id:"fable",name:"Fable",kokoro:"bm_fable",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"A storyteller\u2019s warmth.",lines:"daniel",...pt}],yt=e=>Wt.find(a=>a.id===e)??Wt[0],Da={home:"Welcome to The Light Orb. A space for creative possibilities. Let\u2019s explore.",products:"Explore the pieces. Each one is designed to become part of something of your own.",templates:"Start with a complete composition. Select a cassette to preview the design.",studio:"Choose a piece, then shape its light, material and movement.",sound:"Listen before you choose. Find the voice and sounds that fit your work.",voice_audition:"A little light. A new idea. Something of your own."},gr=(e,a)=>`./media/voice/${e}.${a}.m4a`,ya={text:"I don\u2019t know why people expect art to make sense when they accept the fact that life doesn\u2019t make sense.",author:"David Lynch",work:"interview with Kristine McKenna, Los Angeles Times, 20 August 1989",source:"https://www.latimes.com/archives/la-xpm-1989-08-20-ca-1327-story.html"};var wa=[{id:"select",name:"Select",line:"A soft glass touch for choosing.",file:"./media/sfx/select.wav"},{id:"open",name:"Open",line:"A breath of air as a panel opens.",file:"./media/sfx/open.wav"},{id:"close",name:"Close",line:"The same air, settling.",file:"./media/sfx/close.wav"},{id:"confirm",name:"Confirm",line:"Two quiet glass tones.",file:"./media/sfx/confirm.wav"},{id:"detent",name:"Detent",line:"A precise tick for wheels and steps.",file:"./media/sfx/detent.wav"},{id:"type",name:"Type",line:"A dry, very quiet key.",file:"./media/sfx/type.wav"},{id:"level",name:"Level",line:"A short tone for volume changes.",file:"./media/sfx/level.wav"}],Wr={promise:"A new drop every two weeks.",open:!1,price:null,interval:null,quota:null,plans:[{id:"ready",name:"Ready-made",line:"Choose a curated piece and use it as it is.",points:["One finished piece","Its source and integration notes"]},{id:"studio",name:"Studio",line:"Customise a piece and export your own version.",points:["Light, material and movement controls","Saved designs"]},{id:"member",name:"Membership",line:"Follow the collection as it grows.",points:["A new drop every two weeks"]}]};var Kr="lightorb:audio",oa=(e,a=0,n=1)=>Math.min(n,Math.max(a,e)),hr={master:!1,guide:!0,sfx:!0,voice:Wt[0].id,gain:.8,sfxGain:.5,volume:.8};function si(){try{return{...hr,...JSON.parse(localStorage.getItem(Kr)||"{}")}}catch{return{...hr}}}function Jr(){let e=si();Wt.some(b=>b.id===e.voice)||(e.voice=hr.voice);let a=new Set,n=null,o=null,c=null,f=null,s=null,u=null,p=new Audio;p.preload="auto",p.crossOrigin="anonymous",p.setAttribute("playsinline","");let y=null,i={clip:null,voice:null,status:"idle",error:null,energy:0,journey:new Set},j=new Map,D=new Map,E=b=>{if(!D.has(b)){let M=fetch(b).then(A=>{if(!A.ok)throw new Error(A.status);return A.blob()}).then(A=>URL.createObjectURL(A));D.set(b,M),M.catch(()=>D.delete(b))}return D.get(b)},ce={},q=()=>a.forEach(b=>b(Pe)),ke=()=>{try{localStorage.setItem(Kr,JSON.stringify(e))}catch{}};function z(){if(n)return n;let b=window.AudioContext||window.webkitAudioContext;if(!b)return null;n=new b,o=n.createGain(),o.connect(n.destination),c=n.createGain(),c.connect(o),f=n.createGain(),f.connect(o),s=n.createAnalyser(),s.fftSize=1024,s.smoothingTimeConstant=0,s.connect(c),u=new Float32Array(s.fftSize);try{y=n.createMediaElementSource(p),y.connect(s)}catch{y=null}return we(),n}function we(){if(!n)return;let b=n.currentTime;o.gain.setTargetAtTime(e.master?e.volume??.8:0,b,.02),c.gain.setTargetAtTime((e.guide||i.clip?.startsWith("voice_audition"),e.gain),b,.02),f.gain.setTargetAtTime(e.sfx?e.sfxGain:0,b,.02)}let Se=()=>{let b=z();b&&b.state!=="running"&&b.state!=="closed"&&b.resume().catch(()=>{}),it()};for(let b of["pointerdown","keydown","touchend"])addEventListener(b,Se,{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden?p.paused||(p.pause(),i.status="paused",i.hiddenPause=!0,q()):i.hiddenPause&&(i.hiddenPause=!1)}),p.addEventListener("ended",()=>{i.status="ended",q()}),p.addEventListener("pause",()=>{i.status==="playing"&&(i.status="paused",q())}),p.addEventListener("playing",()=>{i.status="playing",i.error=null,q()}),p.addEventListener("error",()=>{i.clip&&(i.status="error",i.error="The recording could not be loaded.",q())}),p.addEventListener("loadedmetadata",q);let X=(b,{voice:M=e.voice,from:A=0,kind:W="guide"}={})=>(R=null,G(`${b}.${M}`,gr(b,M),{from:A,kind:W,voice:M})),te=(b,M,{from:A=0}={})=>(R=null,G(b,M,{from:A,kind:"audition"}));async function G(b,M,{from:A=0,kind:W="guide",voice:ne=null}={}){if(W==="guide"&&(!e.master||!e.guide))return!1;if(ue(),Se(),i.clip!==b){p.pause(),i.clip=b,i.voice=ne,i.status="loading",q();try{p.src=await E(M)}catch{p.src=M}if(i.clip!==b)return!1}if(i.env=null,rt(M,200).then(Q=>{i.clip===b&&(i.env=Q)}).catch(()=>{}),i.kind=W,A?(p.readyState<1&&await new Promise(Q=>p.addEventListener("loadedmetadata",Q,{once:!0})),p.currentTime=A):p.currentTime&&(p.currentTime=0),q(),!e.master||W==="guide"&&!e.guide||i.clip!==b)return!1;try{return await p.play(),!0}catch{return i.status="blocked",i.error="Playback was blocked. Press play to start it.",q(),!1}}function re(){p.paused||p.pause(),i.status="paused",q()}async function fe(){Se();try{await p.play()}catch{i.status="blocked",q()}}let K=typeof speechSynthesis<"u"?speechSynthesis:null,Te=0,Y={on:!1};function ue(){K&&Y.on&&(Y.on=!1,K.cancel())}let Z={samantha:[/ava.*premium/i,/zoe.*premium/i,/samantha.*(enhanced|premium)/i,/(aria|jenny|emma|ava).*natural/i,/natural.*(female|aria|jenny)/i,/google us english/i,/google uk english female/i,/^(ava|zoe|allison|susan)\b/i,/^samantha/i],daniel:[/(evan|nathan|tom).*premium/i,/daniel.*(enhanced|premium)/i,/(guy|ryan|andrew|brian|christopher).*natural/i,/natural.*male/i,/google uk english male/i,/^(evan|nathan|tom|aaron)\b/i,/^daniel/i]},Me=[],St=()=>{Me=K?.getVoices()??[]};K&&(St(),K.addEventListener?.("voiceschanged",St));let xe=[/(paulina|monica|m[oó]nica|marisol|isabela).*(premium|enhanced)/i,/(elvira|dalia|helena|ximena|paloma).*natural/i,/natural.*(spanish|espa)/i,/google espa[nñ]ol/i,/^(paulina|monica|m[oó]nica|marisol|jorge|diego)\b/i];function He(b){if(Me.length||St(),b==="es"){let A=Me.filter(W=>/^es[-_]/i.test(W.lang));if(A.length){for(let W of xe){let ne=A.find(Q=>W.test(Q.name));if(ne)return ne}return A.find(W=>W.localService===!1)??A[0]}}let M=Me.filter(A=>/^en[-_]/i.test(A.lang));for(let A of Z[yt(e.voice).gender==="male"?"daniel":"samantha"]){let W=M.find(ne=>A.test(ne.name));if(W)return W}return M.find(A=>A.localService===!1)??M[0]}let k=null,$="./media/voice/lines/",P=()=>k??=fetch(`${$}manifest.json`).then(b=>b.ok?b.json():null).catch(()=>null);P();let R=null;function B(b,{id:M,onend:A,lang:W}={}){if(!b||!e.master||!e.guide)return A?.(),!1;let ne=R={};if(M){let Q=yt(e.voice).lines??e.voice;return ue(),p.pause(),i.kind="guide",i.clip=`line:${M}`,i.status="loading",q(),P().then(async ge=>{let se=ge?.lines?.[M]?.text===b?ge.lines[M].files?.[Q]:null;if(R!==ne)return;if(!se){F(b,{onend:A,lang:W});return}let oe=$+se;try{await E(oe)}catch{R===ne&&F(b,{onend:A,lang:W});return}R===ne&&(i.clip=null,A&&p.addEventListener("ended",()=>{R===ne&&A()},{once:!0}),G(`line:${M}.${Q}`,oe,{kind:"guide",voice:Q}))}),!0}return F(b,{onend:A,lang:W})}function F(b,{onend:M,lang:A}={}){if(!K||!b||!e.master||!e.guide)return M?.(),!1;Se(),p.pause(),K.cancel();let W=He(A),ne=W&&(!W.localService||/premium|enhanced|natural/i.test(W.name)),Q=b.match(/[^.!?]+[.!?]*\s*/g)?.map(se=>se.trim()).filter(Boolean)??[b],ge={};return Y.u=ge,Y.on=!0,i.kind="guide",i.clip="speech",i.status="playing",q(),Q.forEach((se,oe)=>{let ve=new SpeechSynthesisUtterance(se);W&&(ve.voice=W,ve.lang=W.lang),ve.rate=ne?1:.94,ve.pitch=1,ve.volume=e.volume??.8,ve.onboundary=()=>{Te=1},ve.onstart=()=>{Te=1},oe===Q.length-1&&(ve.onend=ve.onerror=()=>{Y.u===ge&&(Y.on=!1,i.status="stopped",q(),M?.())}),K.speak(ve)}),!0}let ie=()=>He()?.name??null;function J(){R=null,ue(),p.pause(),i.status=i.clip?"stopped":"idle",q()}function Ee(b){p.duration&&(p.currentTime=oa(b)*p.duration,q())}let V=performance.now();function ae(){let b=performance.now(),M=Math.min(.1,(b-V)/1e3);V=b;let A=0;if(Y.on&&e.master)Te=Math.max(0,Te-M*3.2),A=oa(.35+.45*Te+.15*Math.sin(b/90));else if(!y&&i.env&&!p.paused&&e.master&&p.duration)A=oa(i.env.bins[Math.min(i.env.bins.length-1,Math.floor(p.currentTime/p.duration*i.env.bins.length))]*1.1);else if(s&&!p.paused&&e.master){s.getFloatTimeDomainData(u);let ne=0;for(let ge=0;ge<u.length;ge++)ne+=u[ge]*u[ge];let Q=Math.sqrt(ne/u.length);A=oa((Q-.008)/.16)}let W=A>i.energy?.05:.18;return i.energy+=(A-i.energy)*(1-Math.exp(-M/W)),i.energy<.001&&(i.energy=0),i.energy}let at=(b,M=e.voice,A=72)=>rt(gr(b,M),A);async function rt(b,M=72){let A=`${b}|${M}`;if(j.has(A))return j.get(A);let W=(async()=>{let ne=await(await fetch(b)).arrayBuffer(),Q=window.OfflineAudioContext||window.webkitOfflineAudioContext,ge=await new Q(1,44100,44100).decodeAudioData(ne),se=ge.getChannelData(0),oe=Math.max(1,Math.floor(se.length/M)),ve=[],Ze=0;for(let nt=0;nt<M;nt++){let ga=0;for(let Be=nt*oe;Be<(nt+1)*oe;Be++)ga+=se[Be]*se[Be];let qt=Math.sqrt(ga/oe);ve.push(qt),Ze=Math.max(Ze,qt)}return{bins:ve.map(nt=>nt/(Ze||1)),duration:ge.duration}})();return j.set(A,W),W.catch(()=>j.delete(A)),W}let Et={press:"select",release:"select",volume:"level",case:"open"},$e={select:90,type:70,detent:50,level:110,open:220,close:220,confirm:400},ot={select:.7,type:.45,detent:.6,level:.5,open:.6,close:.55,confirm:.7},Re={},Fe=0;function Xe(b){Re[b]||!n||(Re[b]=fetch(`./media/sfx/${b}.wav`).then(M=>M.arrayBuffer()).then(M=>n.decodeAudioData(M)).then(M=>Re[b]=M).catch(()=>Re[b]=null))}function Ge(b,M=.5){if(b=Et[b]||b,!e.master||!e.sfx)return;let A=z();if(!A||A.state!=="running")return;let W=performance.now();if(W-(ce[b]??0)<($e[b]??80)||Fe>3)return;ce[b]=W;let ne=Re[b];if(!ne||ne instanceof Promise){Xe(b);return}let Q=A.createBufferSource(),ge=A.createGain();Q.buffer=ne,ge.gain.value=(ot[b]??.6)*(b==="level"?.6+.4*oa(M):1),b==="level"&&(Q.playbackRate.value=.85+.3*oa(M)),Q.connect(ge),ge.connect(f),Fe++,Q.onended=()=>{Fe--,ge.disconnect()},Q.start()}let it=()=>{if(n)for(let b of Object.keys($e))Xe(b)},Pe={prefs:e,state:i,el:p,get ready(){return!!n},get position(){return p.duration?p.currentTime/p.duration:0},get time(){return p.currentTime||0},get duration(){return p.duration||0},get playing(){return Y.on||!p.paused&&!p.ended},set(b){Object.assign(e,b),ke(),Se(),we(),(!e.master||!e.guide&&i.kind==="guide")&&(p.paused||p.pause(),ue()),q()},play:X,playUrl:te,say:B,voiceName:ie,pause:re,resume:fe,stop:J,seek:Ee,energy:ae,peaks:at,peaksUrl:rt,sfx:Ge,unlock:Se,once(b){return i.journey.has(b)||!e.master||!e.guide?Promise.resolve(!1):(i.journey.add(b),X(b).then(M=>(M||i.journey.delete(b),M)))},on(b){return a.add(b),()=>a.delete(b)}};return Pe}var fr=ut.filter(e=>e.published!==!1),Qr=e=>e.id==="orb"||e.code==="kit",li=" Everything is free during early access, and Studio is open to try.",di={"reply.missed":"I didn\u2019t catch that. Tap me and try again, or type.","reply.intro":`Hello, I\u2019m the Light Orb, your guide here. Tap me and speak, or type: ask me for recommendations, materials and textures, or say Products, Templates, Studio or Sound and I\u2019ll take you there.${li}`,"reply.greet":"Hi, I\u2019m the Light Orb. Tap me whenever you want to talk.","reply.help":"Ask me which Orb suits your project, about its materials and textures, or how to get the free code. Or say Products, Templates, Studio or Sound and I\u2019ll take you there.","reply.thanks":"With pleasure. I\u2019m right here when you need me.","reply.who":"I\u2019m the Light Orb, the guide of this place. I can recommend a piece or a texture, answer your questions, and take you anywhere on the site.","reply.back":"Going back.","reply.unknown":"I\u2019m still learning words. Ask me for a recommendation, or say Products, Templates, Studio or Sound.","reply.mic":"The microphone is off. You can type to me instead."},ci=" Todo es gratis durante el acceso anticipado, y Studio est\xE1 abierto para probarlo.",pi={"reply.missed":"No te he entendido. T\xF3came e int\xE9ntalo otra vez, o escr\xEDbeme.","reply.intro":`Hola, soy la Light Orb, tu gu\xEDa aqu\xED. T\xF3came y habla, o escr\xEDbeme: p\xEDdeme recomendaciones, materiales y texturas, o di Productos, Plantillas, Studio o Sonido y te llevo.${ci}`,"reply.greet":"Hola, soy la Light Orb. T\xF3came cuando quieras hablar.","reply.help":"Preg\xFAntame qu\xE9 Orb encaja con tu proyecto, por sus materiales y texturas, o c\xF3mo conseguir el c\xF3digo gratis. O di Productos, Plantillas, Studio o Sonido y te llevo.","reply.thanks":"Con gusto. Aqu\xED estoy cuando me necesites.","reply.who":"Soy la Light Orb, la gu\xEDa de este lugar. Te recomiendo piezas y texturas, respondo tus preguntas y te llevo a cualquier parte de la web.","reply.back":"Volvemos.","reply.unknown":"A\xFAn estoy aprendiendo palabras. P\xEDdeme una recomendaci\xF3n, o di Productos, Plantillas, Studio o Sonido.","reply.mic":"El micr\xF3fono est\xE1 desactivado. Puedes escribirme."},ia=(e,a="en")=>a==="es"?{id:null,text:pi[e],lang:"es"}:{id:e,text:di[e],lang:"en"},Xr={profile:"your profile",downloads:"your downloads",saved:"what you have saved",designs:"the designs you made in Studio"};function ui(e,a){if(e==="products"&&a){let n=fr.find(o=>o.id===a);if(n)return{id:`present.product.${n.id}`,text:`This is ${n.name}. ${Qr(n)?"Try its versions; each one is free, with its code.":"Try its versions, or shape it in Studio."}`}}if(e==="templates"&&a){let n=gt.find(o=>o.id===a);if(n)return{id:`present.template.${n.id}`,text:`You are looking at the template ${n.name}. ${n.line}`}}return e==="products"?{id:"present.products",text:`Products: ${fr.length} objects of light and glass. Choose one to see it alive.`}:e==="templates"?{id:"present.templates",text:"Templates: complete compositions to start from."}:e==="studio"?{id:"present.studio",text:"This is Studio, free while we build it. Shape the light, then save your design."}:e==="sound"?{id:"present.sound",text:"This is Sound: the voices and quiet sounds of glass."}:e==="membership"?{id:"present.membership",text:"This is Membership. Everything is free for now; leave your email to hear first when plans open."}:e==="account"?a&&Xr[a]?{id:`present.account.${a}`,text:`This is your account, showing ${Xr[a]}.`}:{id:"present.account",text:"This is your account."}:e==="privacy"?{id:"present.privacy",text:"This is the privacy page: what the site keeps, and what you can ask for."}:e==="terms"?{id:"present.terms",text:"These are the terms of use of the site."}:e==="licence"?{id:"present.licence",text:"This is the licence: what you can do with the free Orb and with the pieces."}:e==="signin"?{id:"present.signin",text:"Use the email you joined with to link this device to your early access."}:e==="signup"?{id:"present.signup",text:"Join early access with your email. Everything is free while we build it, and you will hear first when new pieces open."}:{id:"present.home",text:"Welcome to The Light Orb. I\u2019m your guide: tap me to talk."}}var Zr={products:"Productos: objetos de luz y vidrio. Elige uno para verlo vivo.",templates:"Plantillas: composiciones completas para empezar.",studio:"Esto es Studio, gratis mientras lo construimos. Da forma a la luz y guarda tu dise\xF1o.",sound:"Esto es Sonido: las voces y los sonidos del vidrio.",membership:"Esto es Membres\xEDa. Ahora todo es gratis; deja tu email y sabr\xE1s primero cu\xE1ndo abren los planes.",home:"Bienvenida a The Light Orb. Soy tu gu\xEDa: t\xF3came para hablar."};function eo(e,a,n){let o=ui(a,n);if(e!=="es")return{...o,lang:"en"};if(a==="products"&&n){let c=fr.find(f=>f.id===n);if(c)return{id:null,lang:"es",text:`Esto es ${c.name}. Prueba sus versiones${Qr(c)?"; cada una es gratis, con su c\xF3digo":", o dale forma en Studio"}.`}}return Zr[a]&&!n?{id:null,lang:"es",text:Zr[a]}:{...o,lang:"en"}}var to=e=>({id:`already.${e.id}`,text:`We are already here. ${e.text}`}),ao=e=>({id:`piece.${e.id}`,text:`Here is ${e.name}. ${e.line}`}),ro=e=>({id:`open.${e.id}`,text:`Opening ${e.name}.`}),oo=()=>({id:"piece.orb",text:`Here is the Orb. ${ut[0].line}`});var na=(e,a,n)=>e+(a-e)*n,mr=e=>{let a=parseInt(String(e).replace("#",""),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]},pn=mr("#f3d8c5"),gi={fill:.08,lobe:.2,wall:.55,core:.034},wt=e=>structuredClone(e??ja);function Na(e,a,{dark:n=!1,envBoost:o=1,exposure:c=0,left:f=.65,right:s=.55}={}){let u=a.shell,p=a.light,y=a.interior;e.setOptics({...gi,lobe:na(.1,.3,p.spread),core:na(.026,.044,p.spread)}),e.setInterior({kind:y.kind,amount:y.amount,size:y.size,motion:y.motion,fill:y.fill,colour:y.colour}),e.setElastic(u.elastic??0);let i=mr(u.tint);e.setMaterial({roughness:u.roughness,thickness:na(.3,1.4,u.thickness),ior:u.ior,envMapIntensity:(n?1.9:2.1)*o*2**(c*.5),tint:i,tintDistance:u.tintAmount>.001?na(8,.4,u.tintAmount):0}),e.setNeutral?.(!0);let j=mr(p.colour),D=Math.max(...j);e.setLight({tint:j.map(ce=>ce/Math.max(.05,D)*1.05),spread:na(.7,1.6,p.spread)}),e.setBloom(na(.004,.08,p.glow)),e.setFocus({x:p.x,y:p.y,z:p.z}),e.setTone(n?"dark":"light"),e.setVolumeWorld(0),e.lockFeather([.5,.515]);let E=ce=>(Math.round(ce*10)/10).toFixed(1);return e.setWorld(n?`chamber:${E(f)}:${E(s)}`:"gallery"),{emission:p.strength/.72*2**(c*.35),voice:a.voice}}var Ke=(e,a)=>a.split(".").reduce((n,o)=>n?.[o],e);var io=`
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
`;var no=`
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
`;var De=null,ht=null,sa=null,ka=0,hi=performance.now()/1e3,Oe={exposure:1,target:1,impacts:[null,null],next:0,strength:1,scale:90,horizon:.27,lamp:.9,orb:null};function Ha(e){if(!ht){ht=document.createElement("canvas"),ht.className="world-preview",ht.setAttribute("aria-hidden","true"),ht.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:inherit";try{De=Yr(ht)}catch{De=null}}return De&&(sa=e,e.prepend(ht),br(),fi()),ht}function Sa(){cancelAnimationFrame(ka),ka=0,ht?.remove(),sa=null}function br(){if(!sa||!De)return;let e=sa.getBoundingClientRect();De.resize(Math.max(2,e.width),Math.max(2,e.height),Math.min(devicePixelRatio||1,1.5))}addEventListener("resize",br);var Ce={state:Oe,setExposure(e,a=!1){Oe.target=e,a&&(Oe.exposure=e)},impact(e,a,n=Oe.strength){let o=Oe.next++%2;Oe.impacts[o]={x:e,y:a,at:performance.now()/1e3,strength:n}},set(e){Object.assign(Oe,e)},setOrb(e){Oe.orb=e},get canvas(){return ht}};function fi(){cancelAnimationFrame(ka);let e=()=>{if(!sa||!De)return;let a=performance.now()/1e3,n=sa.getBoundingClientRect();Math.abs(n.width-ht.width/De.ratio)>2&&br(),Oe.exposure+=(Oe.target-Oe.exposure)*.05;let o=n.height,c=Oe.orb;De.setHorizon(Oe.horizon),De.setExposure(Oe.exposure),De.setNightGain(1),c?(De.setOrb(c.x,c.y,c.d),De.setLamp(c.x,c.y,c.d*3,Oe.lamp*(1-Oe.exposure)),De.setReveal(c.x,c.y,Math.hypot(n.width,o),Oe.exposure*60)):(De.setReveal(0,0,1,0),De.setLamp(0,0,1,0)),Oe.impacts.forEach((f,s)=>De.setImpact(s,f?.x??0,f?.y??0,f?a-f.at:-1,f?.strength??0,Oe.scale)),De.render(a-hi),ka=requestAnimationFrame(e)};ka=requestAnimationFrame(e)}var mi=/^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/,Fa=e=>typeof e=="string"&&e.length<=254&&mi.test(e.trim()),so="trescarla@gmail.com",Ea=()=>`<p class="note contact">Questions? <a href="mailto:${so}">${so}</a></p>`,lo="lightorb:profile",bi=e=>String(e).replace(/[&<>"]/g,a=>`&#${a.charCodeAt(0)};`);async function xr({email:e,name:a="",source:n}){if(e=String(e??"").trim(),a=String(a??"").trim().slice(0,40),!Fa(e))return{ok:!1,error:"Please enter a valid email address."};if(!xa)return{ok:!1,error:"Early access sign-up opens soon. Nothing was sent."};try{let o=await fetch(xa,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,...a?{name:a}:{},source:n,lang:(navigator.language||"en").slice(0,5)})});if(!o.ok)return{ok:!1,error:o.status===429?"Too many tries \u2014 please wait a minute.":"That did not go through. Please try again later."}}catch{return{ok:!1,error:"That did not go through. Please check your connection and try again."}}try{let o=JSON.parse(localStorage.getItem(lo))??{};localStorage.setItem(lo,JSON.stringify({...o,email:e,...a?{name:a}:{},joined:o.joined??new Date().toISOString()}))}catch{}return Le("waitlist_join",{source:n}),{ok:!0}}var vr=e=>`<div class="joined glass" role="status" tabindex="-1"><p class="kicker">You\u2019re in</p>
  <h2>Welcome to early access</h2><p>We\u2019ll write to <b>${bi(e)}</b> when new pieces and Studio updates open. Everything stays free while we build it.</p>
  <div class="acts eq"><a class="gb small primary" href="#/studio">Open Studio</a><a class="gb small" href="#/account">Your account</a></div></div>`;function Kt(e,{compact:a=!1,label:n="",title:o="Join early access"}={}){let c=!!xa;return`<form class="form interest wl${a?" wl-c":""}" data-waitlist="${e}" novalidate>
    ${a?"":`<h2>${o}</h2>`}
    <label class="fl"><span>${n||(a?"Join early access \u2014 free; one email when new pieces open":"Free. We email you when new pieces and Studio updates open.")}</span>
      <span class="wl-row"><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"${c?"":" disabled"}>
      <button class="gb${a?" small":""}" type="submit"${c?"":" disabled"}><span>Join</span></button></span></label>
    <p class="note" data-wlmsg role="status" aria-live="polite">${c?'We only keep your email to tell you about new pieces and Studio updates. See <a href="#/privacy">privacy</a>; leave any time.':'Sign-up opens soon \u2014 nothing typed here is sent yet. See <a href="#/privacy">privacy</a>.'}</p>
  </form>`}function Ga(e){e.querySelectorAll("[data-waitlist]").forEach(a=>a.addEventListener("submit",async n=>{if(n.preventDefault(),!xa)return;let o=a.querySelector("[data-wlmsg]"),c=a.querySelector("input"),f=a.querySelector("button"),s=c.value.trim();if(!Fa(s)){o.textContent="Please enter a valid email address.",c.focus();return}f.disabled=!0,f.setAttribute("aria-busy","true");let u=await xr({email:s,source:a.dataset.waitlist});if(u.ok){let p=document.createElement("div");p.innerHTML=vr(s);let y=p.firstElementChild;a.replaceWith(y),y.focus({preventScroll:!0});return}o.textContent=u.error,f.disabled=!1,f.removeAttribute("aria-busy")}))}var Ba=500;function co(e){return`<div class="fb" data-fbwrap><button class="tl" type="button" data-fbbtn aria-expanded="false" aria-controls="fb-p"><span>What's missing?</span></button>
    <form class="form fb-p" id="fb-p" data-feedback="${e}" novalidate hidden>
      <label class="fl"><span>Tell us what Studio or the pieces still need</span>
        <textarea class="gi" name="text" rows="3" maxlength="${Ba}" required></textarea></label>
      <div class="acts"><button class="gb small" type="submit"${Pa?"":" disabled"}><span>Send</span></button></div>
      <p class="note" data-fbmsg role="status" aria-live="polite">Up to ${Ba} characters. Only the text and the page are kept.</p>
    </form></div>`}function po(e,{sfx:a=()=>{}}={}){e.querySelectorAll("[data-fbwrap]").forEach(n=>{let o=n.querySelector("[data-fbbtn]"),c=n.querySelector("[data-feedback]");o.addEventListener("click",()=>{let f=c.hidden;c.hidden=!f,o.setAttribute("aria-expanded",String(f)),a(f?"open":"close"),f&&c.querySelector("textarea").focus()}),c.addEventListener("submit",async f=>{if(f.preventDefault(),!Pa)return;let s=c.querySelector("[data-fbmsg]"),u=c.querySelector("textarea"),p=c.querySelector("button"),y=u.value.trim();if(!y){s.textContent="Write a few words first.",u.focus();return}if(y.length>Ba){s.textContent=`Please keep it under ${Ba} characters.`;return}p.disabled=!0;try{let i=await fetch(Pa,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:y,page:c.dataset.feedback})});i.ok?(s.textContent="Thank you \u2014 we read every note.",u.value="",Le("feedback_send",{page:c.dataset.feedback})):s.textContent=i.status===429?"Too many notes for now \u2014 please try again later.":"That did not go through. Please try again later."}catch{s.textContent="That did not go through. Please try again later."}p.disabled=!1})})}var yr=[["clear","Clear glass",0],["chrome","Liquid metal",1],["porcelain","Porcelain over glass",2],["bloom","Milky glass \xB7 cloud",3],["core","Glass \xB7 light core",4],["points","Glass \xB7 points of light",5],["glitter","Glass \xB7 glitter",6],["beads","Glass \xB7 beads",7],["liquid","Glass \xB7 liquid",8]],Ua=Object.fromEntries(yr.map(([e,,a])=>[e,a])),wr={clear:[[1,1,1],[1,1,1]],chrome:[[1,1,1],[1,1,1]],porcelain:[[.13,.17,.18],[.86,.64,.3]],bloom:[[1,.42,.45],[1,.72,.68]],core:[[1,.97,.92],[1,1,1]],points:[[.92,.96,1],[1,1,1]],glitter:[[.95,.96,1],[1,1,1]],beads:[[.97,.97,.96],[1,.9,.95]],liquid:[[.55,.78,.95],[.9,.97,1]]},Ya=[-.6,.55,.6],xi=Math.hypot(...Ya),vi=Math.atan2(Ya[0],Ya[2])*180/Math.PI,yi=Math.asin(Ya[1]/xi)*180/Math.PI,$a=e=>"#"+e.map(a=>Math.round(Math.min(1,Math.max(0,a))*255).toString(16).padStart(2,"0")).join(""),Va=e=>{let a=parseInt(String(e).replace("#",""),16)||0;return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]};function uo(e={id:"clear",base:"clear"}){let a=Ua[e.base]===void 0?"clear":e.base,[n,o]=wr[a];return{v:1,variant:e.id||a,base:a,material:{tint:$a(e.tint??n),accent:$a(e.accent??o),refraction:1,dispersion:0,frost:0,rim:1,opacity:1,iridescence:0,exposure:1},interior:{amount:0,size:1,speed:1,glow:1,fill:.55},light:{angle:+vi.toFixed(2),height:+yi.toFixed(2),key:1,rim:1,environment:1,horizon:1,colour:"#ffffff"},motion:{spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},scene:{background:"none",colour:"#0b0c0c",colour2:"#2a2d2c",size:1,shadow:0,reflection:0}}}var _a=e=>e&&typeof e=="object"&&!Array.isArray(e);function la(e,a){let n=structuredClone(e);if(!_a(a))return n;for(let[o,c]of Object.entries(a))o in n&&(_a(n[o])?_a(c)&&(n[o]=la(n[o],c)):typeof c==typeof n[o]&&(typeof c!="number"||Number.isFinite(c))&&(n[o]=c));return Ua[n.base]===void 0&&(n.base="clear"),n}function Wa(e,a){let n={};for(let[o,c]of Object.entries(a))if(_a(c)){let f=Wa(e?.[o]??{},c);Object.keys(f).length&&(n[o]=f)}else if(typeof c=="number"){let f=Math.round(c*1e3)/1e3;(e?.[o]===void 0||Math.round(e[o]*1e3)/1e3!==f)&&(n[o]=f)}else e?.[o]!==c&&(n[o]=c);return n}var wi=e=>btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var go=(e,a)=>wi(JSON.stringify(Wa(a,e)));var Je=[{id:"clear",base:"clear",name:"Clear",line:"Thick clear glass, nothing inside but its own depth."},{id:"smoke",base:"clear",name:"Smoke",line:"Smoked glass, a grey depth that darkens to the rim.",tint:[.6,.62,.65]},{id:"amber",base:"clear",name:"Amber",line:"Warm amber glass, like light through honey.",tint:[1,.8,.52]},{id:"chrome",base:"chrome",name:"Chrome",line:"Liquid chrome that keeps folding the room it reflects."},{id:"gold",base:"chrome",name:"Liquid Gold",line:"Molten gold folding over itself.",tint:[1,.79,.45]},{id:"gunmetal",base:"chrome",name:"Gunmetal",line:"Dark liquid metal with cold highlights.",tint:[.5,.53,.57]},{id:"porcelain",base:"porcelain",name:"Porcelain",line:"Raised porcelain bands with gold edges over dark glass."},{id:"silverline",base:"porcelain",name:"Silverline",line:"Porcelain bands edged in silver over dark glass.",accent:[.82,.84,.88]},{id:"celadon",base:"porcelain",name:"Celadon",line:"Porcelain bands over green celadon glass.",tint:[.22,.36,.3]},{id:"bloom",base:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud."},{id:"lilac",base:"bloom",name:"Lilac",line:"Milky glass holding a slow violet cloud.",tint:[.62,.45,1],accent:[.86,.76,1]},{id:"lagoon",base:"bloom",name:"Lagoon",line:"Milky glass holding a slow sea-blue cloud.",tint:[.2,.62,.9],accent:[.6,.92,.9]},{id:"core",base:"core",name:"Core",line:"Clear glass holding one soft white light at its centre."},{id:"dawn",base:"core",name:"Dawn",line:"Clear glass holding a warm, low light.",tint:[1,.72,.45]},{id:"starlight",base:"points",name:"Starlight",line:"Clear glass full of small points of light that drift and twinkle."},{id:"firefly",base:"points",name:"Firefly",line:"Warm points of light drifting slowly inside the glass.",tint:[1,.78,.4]},{id:"glitter",base:"glitter",name:"Glitter",line:"Fine silver flecks that catch the light as the sphere turns."},{id:"goldleaf",base:"glitter",name:"Gold Leaf",line:"Flakes of gold suspended in clear glass.",tint:[1,.78,.4]},{id:"beads",base:"beads",name:"Beads",line:"Small milky glass beads floating inside the shell."},{id:"pearls",base:"beads",name:"Pearls",line:"Soft pearls with a faint rainbow sheen, floating inside.",tint:[1,.95,.97],accent:[.85,.9,1]}],mo=Ua,ho={0:{tint:[1,1,1],accent:[1,1,1]},1:{tint:[1,1,1],accent:[1,1,1]},2:{tint:[.13,.17,.18],accent:[.86,.64,.3]},3:{tint:[1,.42,.45],accent:[1,.72,.68]},4:{tint:[1,.97,.92],accent:[1,1,1]},5:{tint:[.92,.96,1],accent:[1,1,1]},6:{tint:[.95,.96,1],accent:[1,1,1]},7:{tint:[.97,.97,.96],accent:[1,.9,.95]},8:{tint:[.55,.78,.95],accent:[.9,.97,1]}},Nt=e=>uo(Je.find(a=>a.id===e)??Je[0]),Si=e=>{let a=Je.find(o=>o.id===e)??Je[0],n=mo[a.base];return{k:n,tint:a.tint??ho[n].tint,accent:a.accent??ho[n].accent}},Ei=`
  uniform mat3 uRot;
  varying vec3 vN; varying vec3 vP; varying vec3 vObj;
  void main() {
    vObj = uRot * position;              // the material turns with the drag
    vN = normalize(normalMatrix * normal);
    vec4 wp = modelViewMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    gl_Position = projectionMatrix * wp;
  }`,$i=`
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
  }`,La=null;function Li(){if(La)return La;let e=document.createElement("canvas"),a=new cr({canvas:e,alpha:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0});a.setClearColor(0,0);let n=new sr,o=new dr(30,1,.1,20);o.position.set(0,0,4.9);let c=new Gr({vertexShader:Ei,fragmentShader:$i,transparent:!0,premultipliedAlpha:!0,uniforms:{uKind:{value:0},uTint:{value:new Ra(1,1,1)},uAccent:{value:new Ra(1,1,1)},uTime:{value:0},uStir:{value:0},uRot:{value:new nr},...Object.fromEntries(Object.entries(bo).map(([s,u])=>[s,{value:Array.isArray(u)?new Ra(...u):u}]))}}),f=new lr(new Fr(1,128,96),c);return n.add(f),La={r:a,scene:n,camera:o,mat:c,mesh:f,list:new Set,raf:0},La}var bo={uIor:1,uDisp:0,uFrost:0,uRim:1,uOpacity:1,uIrid:0,uExp:1,uAmt:0,uSize:1,uGlow:1,uFill:.55,uKeyDir:[-.6/Math.hypot(.6,.55,.6),.55/Math.hypot(.6,.55,.6),.6/Math.hypot(.6,.55,.6)],uKey:1,uRimL:1,uEnv:1,uHorizon:1,uLightCol:[1,1,1]},fo=Math.tan(Math.asin(1/4.9))/Math.tan(15*Math.PI/180),Ci=1/(4.9*Math.tan(15*Math.PI/180));function Ti(e){let a=e.cfg;if(!a){let u=Si(e.kind);return{...bo,uKind:u.k,uTint:u.tint,uAccent:u.accent}}let n=a.material,o=a.interior,c=a.light,f=c.angle*Math.PI/180,s=c.height*Math.PI/180;return{uKind:mo[a.base]??0,uTint:Va(n.tint),uAccent:Va(n.accent),uIor:n.refraction,uDisp:n.dispersion,uFrost:n.frost,uRim:n.rim,uOpacity:n.opacity,uIrid:n.iridescence,uExp:n.exposure,uAmt:o.amount,uSize:Math.max(.2,o.size),uGlow:o.glow,uFill:o.fill,uKeyDir:[Math.cos(s)*Math.sin(f),Math.sin(s),Math.cos(s)*Math.cos(f)],uKey:c.key,uRimL:c.rim,uEnv:c.environment,uHorizon:c.horizon,uLightCol:Va(c.colour)}}function kr(){let e=La;e.raf=0;let a=performance.now()/1e3,n=Math.min(devicePixelRatio||1,1.5);for(let c of e.list){if(!c.visible||!c.canvas.isConnected)continue;c.step(a);let f=Math.max(2,Math.round(c.canvas.clientWidth*n)),s=Math.max(2,Math.round(c.canvas.clientHeight*n));(c.canvas.width!==f||c.canvas.height!==s)&&(c.canvas.width=f,c.canvas.height=s),e.r.setSize(f,s,!1),e.camera.aspect=f/s,e.camera.updateProjectionMatrix();let u=e.mat.uniforms;for(let[i,j]of Object.entries(Ti(c)))Array.isArray(j)?u[i].value.fromArray(j):u[i].value=j;u.uTime.value=c.time,u.uStir.value=c.stir,u.uRot.value.copy(c.rot),e.mesh.scale.setScalar(c.scale),e.mesh.position.y=c.lift,e.r.render(e.scene,e.camera);let p=c.ctx;p.clearRect(0,0,f,s);let y=c.cfg?.scene;y?Mi(c,p,f,s,e.r.domElement,y):p.drawImage(e.r.domElement,0,0,f,s)}let o=!1;for(let c of e.list)if(c.visible&&c.canvas.isConnected){o=!0;break}o&&(e.raf=requestAnimationFrame(kr))}var Jt=null;function Mi(e,a,n,o,c,f){if(f.background==="solid")a.fillStyle=f.colour,a.fillRect(0,0,n,o);else if(f.background==="gradient"){let y=a.createRadialGradient(n/2,o*.42,0,n/2,o*.5,Math.hypot(n,o)*.6);y.addColorStop(0,f.colour2),y.addColorStop(1,f.colour),a.fillStyle=y,a.fillRect(0,0,n,o)}let s=fo*e.scale*o/2,u=o/2-e.lift*Ci*o/2,p=o/2+fo*f.size*o/2;if(f.shadow>0){let y=Math.max(0,p-(u+s)),i=1/(1+y/s*2);a.save(),a.translate(n/2,p),a.scale(1,.16);let j=a.createRadialGradient(0,0,0,0,0,s*(1.05+(1-i)*.5));j.addColorStop(0,`rgba(0,0,0,${(.55*f.shadow*i).toFixed(3)})`),j.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=j,a.beginPath(),a.arc(0,0,s*1.6,0,Math.PI*2),a.fill(),a.restore()}if(f.reflection>0&&p<o){let y=Math.min(o-p,s*2);Jt||=document.createElement("canvas"),(Jt.width!==n||Jt.height!==o)&&(Jt.width=n,Jt.height=o);let i=Jt.getContext("2d");i.clearRect(0,0,n,o),i.save(),i.translate(0,p*2),i.scale(1,-1),i.drawImage(c,0,0,n,o),i.restore(),i.globalCompositeOperation="destination-in";let j=i.createLinearGradient(0,p,0,p+y);j.addColorStop(0,`rgba(0,0,0,${(.5*f.reflection).toFixed(3)})`),j.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=j,i.fillRect(0,0,n,o),i.globalCompositeOperation="source-over",a.drawImage(Jt,0,0)}a.drawImage(c,0,0,n,o)}function Ca(e,a="clear",{interactive:n=!0,reduced:o=matchMedia("(prefers-reduced-motion: reduce)").matches,config:c=null}={}){let f;try{f=Li()}catch{let X=()=>{};return new Proxy({},{get:()=>X})}let s=document.createElement("canvas");s.className="sph-c",s.setAttribute("aria-hidden","true"),e.append(s);let u={spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},p=()=>z.cfg?.motion??u,y={v:.4,vel:o?0:.12},i={v:-.15,vel:0},j={x:0,y:0,tx:0,ty:0},D=new Hr,E=new Br,ce=performance.now()/1e3,q=null,ke=0,z={canvas:s,ctx:s.getContext("2d"),kind:a,cfg:c?la(Nt(c.variant||a),c):null,visible:!1,time:Math.random()*40,stir:0,speech:0,scale:1,lift:0,rot:new nr,step(X){let te=Math.min(.05,X-ce);ce=X,ke+=te;let G=p(),re=o?0:G.spin;q||(y.vel+=(re-y.vel)*te*.8,i.vel*=Math.exp(-te*3),i.v+=(G.tilt-i.v)*te*.8),y.v+=y.vel*te,i.v=Math.max(-1.2,Math.min(1.2,i.v+i.vel*te)),j.x+=(j.tx*G.pointer-j.x)*te*5,j.y+=(j.ty*G.pointer-j.y)*te*5,z.stir*=Math.exp(-te*1.6),z.time+=te*(o?.3:1)*(1+z.stir*3)*(z.cfg?z.cfg.interior.speed:1),E.set(i.v+j.y*.25,y.v+j.x*.35,G.roll,"YXZ"),D.makeRotationFromEuler(E),z.rot.setFromMatrix4(D);let fe=z.cfg?z.cfg.scene.size:1,K=o?0:1;z.scale=fe*(1+K*G.breathe*Math.sin(ke*1.3)+z.speech*G.speech*.06),z.lift=K*G.bob*fe*Math.sin(ke*Math.PI*2*G.bobSpeed)}};z.cfg&&(z.kind=z.cfg.variant);let we=(X,te,G=.016)=>{let re=p().inertia;y.v+=X*.01,i.v+=te*.01,y.vel=X*.01/G*.6*re,i.vel=te*.01/G*.6*re};if(n){s.style.touchAction="pan-y",s.style.cursor="grab",s.addEventListener("pointerdown",G=>{q={x:G.clientX,y:G.clientY,t:performance.now(),moved:!1},s.setPointerCapture(G.pointerId),s.style.cursor="grabbing"}),s.addEventListener("pointermove",G=>{let re=s.getBoundingClientRect();if(j.tx=((G.clientX-re.left)/re.width-.5)*2,j.ty=((G.clientY-re.top)/re.height-.5)*2,!q)return;let fe=performance.now(),K=G.clientX-q.x,Te=G.clientY-q.y,Y=Math.max(8,fe-q.t)/1e3;Math.hypot(K,Te)>3&&(q.moved=!0),we(K,Te,Y),q.x=G.clientX,q.y=G.clientY,q.t=fe});let X=()=>{q&&(q.moved||(z.stir=Math.min(1.5,z.stir+p().stir)),q=null,s.style.cursor="grab")};s.addEventListener("pointerup",X),s.addEventListener("pointercancel",X),s.addEventListener("pointerleave",()=>{j.tx=j.ty=0});let te=!1;s.addEventListener("pointerdown",()=>{te=!1},!0),s.addEventListener("pointermove",()=>{q?.moved&&(te=!0)}),s.addEventListener("click",G=>{te&&(G.preventDefault(),G.stopPropagation())})}let Se=new IntersectionObserver(([X])=>{z.visible=X.isIntersecting,z.visible&&!f.raf&&(f.raf=requestAnimationFrame(kr))});return Se.observe(s),f.list.add(z),f.raf||(f.raf=requestAnimationFrame(kr)),{canvas:s,setKind(X){z.kind=X,z.stir=1},setConfig(X){z.cfg=X?la(Nt(X.variant||z.kind),X):null,z.cfg&&(z.kind=z.cfg.variant)},setSpeech(X){z.speech=Math.max(0,Math.min(1,X||0))},rotate(X,te){we(X,te)},resetView(){y.v=.4,i.v=p().tilt,y.vel=o?0:p().spin,i.vel=0},stir(){z.stir=Math.min(1.5,z.stir+p().stir)},dispose(){Se.disconnect(),f.list.delete(z),s.remove()}}}var xo=`
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
`;var ye=(e,a=0,n=1)=>Math.min(n,Math.max(a,e)),Ai=(e,a,n)=>e+(a-e)*n,vo="lo:studio2",So=2,yo=Math.PI/180,qi="https://carlatres3.github.io/light-orb/embed/v1/orb.js",Ie=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),Eo=e=>Je.find(a=>a.id===e)??Je[0];function Xt(e="orb",a="clear"){let n=Eo(a).id;return{v:So,version:1,family:Dt(e)?e:"orb",preset:n,sph:Nt(n),zoom:1,orb:wt(ra("original").config),scene:{exposure:0,left:.65,right:.55,env:.5},view:{yaw:0,pitch:0,zoom:1},rot:0,slider:{length:420,height:92,tint:"#ffffff",tintAmount:0,preset:"original"},wave:{strength:.9,scale:80,exposure:1},bg:{exposure:1,horizon:.27,lamp:.8},ctl:{tint:"#ffffff",tintAmount:.1,depth:5,radius:999,blur:8}}}function Sr(e){let a=Xt(e?.family,e?.sph?.variant||(Je.some(o=>o.id===e?.preset)?e.preset:"clear"));if(!e||typeof e!="object")return a;let n={...a};for(let o of["orb","scene","view","slider","wave","bg","ctl"])e[o]&&typeof e[o]=="object"&&(n[o]={...a[o],...structuredClone(e[o])});return e.orb?.light&&(n.orb=structuredClone(e.orb)),e.sph&&(n.sph=la(Nt(e.sph.variant||a.preset),e.sph)),typeof e.rot=="number"&&(n.rot=e.rot),typeof e.zoom=="number"&&(n.zoom=ye(e.zoom,.25,3)),n.preset=n.sph.variant,n}var zi=["bloom","core","points","glitter","beads","liquid"],Oi=[["material","Material",()=>[["sph.base","Material","select",yr.map(([e,a])=>[e,a]),"What the sphere is made of"],["sph.material.tint","Tint","color","Main colour of the glass, metal or cloud"],["sph.material.accent","Accent","color","Second colour: porcelain edges, cloud highlights, bead sheen, liquid surface"],["sph.material.refraction","Refraction",0,2.5,.01,"\xD7","How strongly the glass bends the room (index of refraction)"],["sph.material.dispersion","Dispersion",0,1,.01,"%","Colour fringes: the rainbow split of light through glass"],["sph.material.frost","Frost",0,1,.01,"%","Roughness: from polished to frosted, diffuse reflections"],["sph.material.rim","Fresnel rim",0,3,.01,"\xD7","Brightness of reflections at the edge"],["sph.material.iridescence","Iridescence",0,1,.01,"%","Thin-film rainbow sheen at the rim"],["sph.material.opacity","Opacity",0,1,.01,"%","How much of the background shows through"],["sph.material.exposure","Exposure",.2,2.5,.01,"\xD7","Overall brightness of the sphere"]]],["interior","Interior",e=>zi.includes(e.sph.base)?[["sph.interior.amount",e.sph.base==="liquid"?"Density":"Amount",-1,1,.01,"%","How much is inside: more points, flakes, beads or cloud"],["sph.interior.size","Size",.3,2.5,.01,"\xD7","Scale of what is inside"],["sph.interior.speed","Motion",0,4,.01,"\xD7","Speed of the inner movement (also the metal and porcelain flow)"],["sph.interior.glow","Glow",0,3,.01,"\xD7","Brightness of what is inside"],...e.sph.base==="liquid"?[["sph.interior.fill","Fill level",0,1,.01,"%","How full the sphere is"]]:[]]:[["sph.interior.speed","Flow speed",0,4,.01,"\xD7","Speed of the surface flow and inner movement"]]],["light","Lighting",()=>[["sph.light.angle","Key angle",-180,180,1,"\xB0","Direction of the main soft box around the sphere"],["sph.light.height","Key height",-30,90,1,"\xB0","Height of the main soft box"],["sph.light.key","Key light",0,3,.01,"\xD7","Strength of the main soft box"],["sph.light.rim","Rim light",0,3,.01,"\xD7","Strength of the second (rim) soft box"],["sph.light.environment","Environment",0,2,.01,"\xD7","Brightness of the studio room reflected in the sphere"],["sph.light.horizon","Horizon",0,3,.01,"\xD7","The bright horizon line in reflections"],["sph.light.colour","Light colour","color","Colour of all the light"]]],["motion","Motion",()=>[["sph.motion.spin","Idle spin",-1.5,1.5,.01,"r/s","Turntable speed when nobody touches it (negative turns the other way)"],["sph.motion.tilt","Axis tilt",-1.2,1.2,.01,"rad","Rest tilt of the spin axis towards the viewer"],["sph.motion.roll","Axis roll",-1.6,1.6,.01,"rad","Sideways tilt of the spin axis"],["sph.motion.bob","Float",0,.4,.005,"r","Up-and-down float amplitude"],["sph.motion.bobSpeed","Float speed",0,3,.01,"Hz","Float cycles per second"],["sph.motion.breathe","Breathing",0,.12,.001,"%","Slow pulse of the size"],["sph.motion.pointer","Pointer follow",0,3,.01,"\xD7","How much it leans towards the pointer"],["sph.motion.stir","Tap stir",0,3,.01,"\xD7","How much a tap stirs what is inside"],["sph.motion.inertia","Drag inertia",0,2,.01,"\xD7","How long it keeps turning after a drag"],["sph.motion.speech","Speech pulse",0,3,.01,"\xD7","How much it pulses with a voice (test below)"]]],["scene","Scene",()=>[["sph.scene.background","Background","seg",[["none","None"],["solid","Solid"],["gradient","Gradient"]],"Transparent, a solid colour or a soft radial gradient"],["sph.scene.colour","Colour","color","Background colour (outer colour of the gradient)"],["sph.scene.colour2","Centre colour","color","Inner colour of the gradient"],["sph.scene.size","Sphere size",.3,1.2,.01,"%","Size of the sphere in its frame (leave room for the shadow)"],["sph.scene.shadow","Floor shadow",0,1,.01,"%","Soft contact shadow under the sphere"],["sph.scene.reflection","Reflection",0,1,.01,"%","Mirror reflection on the floor"]]]],wo={scene:["Studio light",[["scene.exposure","Exposure",-2,2,.1,"EV"],["scene.left","Left light",0,1,.01,"%"],["scene.right","Right light",0,1,.01,"%"],["scene.env","Environment",0,1,.01,"%"]]],light:["Orb light",[["orb.light.colour","Colour","color"],["orb.light.strength","Strength",0,1,.01,"%"],["orb.light.x","Position X",-.6,.6,.01,"r"],["orb.light.y","Position Y",-.8,.6,.01,"r"]]],slider:["Capsule",[["slider.length","Length",240,600,1,"px"],["slider.height","Height",60,130,1,"px"],["slider.tint","Glass tint","color"],["slider.tintAmount","Tint amount",0,1,.01,"%"],["slider.preset","Orb thumb","select",jt.map(e=>[e.id,e.name])]]],wave:["Wave",[["wave.strength","Strength",.1,1,.01,"%"],["wave.scale","Ring scale",40,140,1,"px"],["wave.exposure","Environment",0,1,.01,"%"]]],bg:["Environment",[["bg.exposure","Dark \u2192 warm",0,1,.01,"%"],["bg.horizon","Horizon",.15,.45,.01,"%"],["bg.lamp","Orb lamp (dark)",0,1,.01,"%"]]],ctl:["Crystal controls",[["ctl.tint","Tint","color"],["ctl.tintAmount","Tint amount",0,1,.01,"%"],["ctl.depth","Optical depth",0,10,.5,"px"],["ctl.radius","Corner radius",6,999,1,"px"],["ctl.blur","Backdrop blur",0,24,1,"px"]]]},Ri={"orb-slider":["slider","light","scene"],"orb-wave":["wave"],"background-pack":["bg"],"crystal-controls":["ctl"]},ko=e=>e.family==="orb"?Oi.map(([a,n,o])=>[a,n,o(e)]):Ri[e.family].map(a=>[a,wo[a][0],wo[a][1]]),Ii=e=>typeof e[2]=="number",Er=e=>e[5]==="%"?100:1,Pi={undo:'<path d="M9 7H4V2"/><path d="M4 7a9 9 0 1 1-1 7"/>',redo:'<path d="M15 7h5V2"/><path d="M20 7a9 9 0 1 0 1 7"/>',orbit:'<circle cx="12" cy="12" r="8"/><ellipse cx="12" cy="12" rx="8" ry="3"/>',light:'<circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',zoom:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M8.5 11h5M11 8.5v5"/>',reset:'<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>',stir:'<path d="M4 15c3-6 6 6 9 0s6-6 7 0"/>',bg:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/>',fit:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',more:'<circle cx="6" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18" cy="12" r="1"/>',plus:'<path d="M12 6v12M6 12h12"/>',minus:'<path d="M6 12h12"/>',chev:'<path d="M2 3.5l2.5 2.5L7 3.5"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',open:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v6H4V6h6"/>',dup:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',del:'<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"/>',sound:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'},Ne=(e,a="0 0 24 24")=>`<svg viewBox="${a}" aria-hidden="true">${Pi[e]}</svg>`,ji=typeof navigator<"u"&&/Mac|iP/.test(navigator.platform||navigator.userAgent),Ht=ji?"\u2318":"Ctrl+",$r=!1;function Di(){if($r||document.getElementById("sx-css")){$r=!0;return}let e=document.createElement("style");e.id="sx-css",e.textContent=xo,document.head.append(e),$r=!0}function $o({api:e,audio:a,top:n,page:o,query:c,ICON:f,flash:s,product:u,store:p}){Di();let y=new Proxy({},{get:(r,d)=>(...g)=>u.orb?.[d]?.(...g)}),i;try{let r=JSON.parse(sessionStorage.getItem(vo));i=r&&r.v===So?Sr(r):null}catch{i=null}if(i||(i=Xt()),c.design&&p.design(c.design)){let r=p.design(c.design);i=Sr({...structuredClone(r.draft),family:r.family}),i.designId=r.id,i.designName=r.name}else c.family&&Dt(c.family)&&(c.family!==i.family||c.preset&&c.preset!==i.preset)&&(i=Xt(c.family,Je.some(r=>r.id===c.preset)?c.preset:"clear"));let j=i.designId?JSON.stringify(zt(i)):null,D=[JSON.stringify(i)],E=0,ce=[["voice_audition.samantha","Voice \xB7 Samantha"],["voice_audition.daniel","Voice \xB7 Daniel"],["home.samantha","Welcome narration"],...wa.map(r=>[`sfx.${r.id}`,`Sound \xB7 ${r.name}`])],q=c.sound&&ce.some(r=>r[0]===c.sound)?c.sound:ce[0][0];function ke(){a.prefs.master||a.set({master:!0});let[r,d]=q.split(".");r==="sfx"?a.playUrl(q,wa.find(g=>g.id===d).file,{from:0}):a.play(r,{voice:d,kind:"audition",from:0}),a.sfx("select")}c.sound&&setTimeout(ke,900);let z="orbit",we="props",Se="material",X=!1,te={material:!0,interior:!0,light:!0,motion:!1,scene:!1,slider:!0,wave:!0,bg:!0,ctl:!0,scene_:!0},G=()=>{try{sessionStorage.setItem(vo,JSON.stringify(i))}catch{}};function re(){let r=JSON.stringify(i);r!==D[E]&&(D.splice(E+1),D.push(r),E=D.length-1,D.length>120&&(D.shift(),E--)),G(),R()}document.body.classList.add("dark-ui","sx-on"),o.innerHTML=`
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
          <button class="sx-ib" type="button" data-zo="-1" aria-label="Zoom out" data-tip="Zoom out">${Ne("minus")}</button>
          <button class="sx-ib" type="button" data-zo="0" aria-label="Fit" data-tip="Fit (R)">${Ne("fit")}</button>
          <button class="sx-ib" type="button" data-zo="1" aria-label="Zoom in" data-tip="Zoom in">${Ne("plus")}</button>
        </div>
      </div>
      <button class="sx-grab" type="button" data-grab aria-label="Show or hide the controls" aria-expanded="false"><i></i></button>
      <aside class="sx-ins" aria-label="Inspector" data-ins></aside>
    </section>
    <div class="sx-modal" data-modal hidden></div>`;let fe=o.querySelector(".sx"),K=o.querySelector("[data-top]"),Te=o.querySelector("[data-rail]"),Y=o.querySelector("[data-view]"),ue=o.querySelector("[data-stage]"),Z=o.querySelector("[data-ins]"),Me=o.querySelector("[data-modal]"),St=o.querySelector("[data-hud]"),xe=o.querySelector("[data-grab]"),He=r=>{fe.classList.toggle("peek",!r),xe.setAttribute("aria-expanded",r)};matchMedia("(max-width: 820px)").matches&&He(!1);{let r=null;xe.addEventListener("pointerdown",d=>{r=d.clientY,xe.setPointerCapture(d.pointerId)}),xe.addEventListener("pointerup",d=>{if(r==null)return;let g=d.clientY-r;r=null,He(Math.abs(g)<12?fe.classList.contains("peek"):g<0)}),Z.addEventListener("click",d=>{d.target.closest("[data-tab],[data-chip]")&&He(!0)},!0)}let k=Ca(ue,i.preset,{config:i.sph});k.canvas?.addEventListener("pointerdown",()=>{z!=="orbit"||ve||(Ze=!0)});let $=()=>i.designName||(i.family==="orb"?`${Eo(i.preset).name} Orb`:Dt(i.family).name);function P(){K.innerHTML=`
      <div class="sx-doc">
        <span class="sx-dirty" data-dirty title="Unsaved changes"></span>
        <input class="sx-name" data-name value="${Ie($())}" aria-label="Design name" maxlength="48" spellcheck="false" data-tip="Rename">
        <select class="sx-sel" data-fam aria-label="Object">${ut.map(d=>`<option value="${d.id}"${d.id===i.family?" selected":""}>${Ie(d.name)}</option>`).join("")}</select>
        ${i.family==="orb"?`<select class="sx-sel" data-pre aria-label="Start from a version">${Je.map(d=>`<option value="${d.id}"${d.id===i.preset?" selected":""}>${Ie(d.name)}</option>`).join("")}</select>`:""}
      </div>
      <span class="sx-sp"></span>
      <button class="sx-ib sx-more" type="button" data-more aria-label="More: object, version, reset" aria-expanded="false">${Ne("more")}</button>
      <button class="sx-ib" type="button" data-undo aria-label="Undo" data-tip="Undo (${Ht}Z)">${Ne("undo")}</button>
      <button class="sx-ib" type="button" data-redo aria-label="Redo" data-tip="Redo (${Ht}\u21E7Z)">${Ne("redo")}</button>
      <button class="sx-ib" type="button" data-resetall aria-label="Reset to the version" data-tip="Reset to the version">${Ne("reset")}</button>
      <span class="sx-sep hide-m"></span>
      <button class="sx-tb" type="button" data-save data-tip="Save to My designs (${Ht}S)">Save</button>
      <button class="sx-tb pri" type="button" data-export data-tip="Export code (${Ht}E)">Export</button>`,K.querySelector("[data-fam]").addEventListener("change",d=>{let g=i.preset;i=Xt(d.target.value,g),a.sfx("press"),ne(),re()}),K.querySelector("[data-pre]")?.addEventListener("change",d=>F(d.target.value));let r=K.querySelector("[data-name]");r.addEventListener("change",()=>{i.designName=r.value.trim().slice(0,48)||void 0,i.designId&&p.renameDesign(i.designId,$()),r.value=$(),G(),$e()}),r.addEventListener("keydown",d=>{d.key==="Enter"&&r.blur()}),K.querySelector("[data-more]").addEventListener("click",d=>{let g=fe.classList.toggle("more-open");d.currentTarget.setAttribute("aria-expanded",g),a.sfx("press")}),K.querySelector("[data-undo]").addEventListener("click",()=>B(-1)),K.querySelector("[data-redo]").addEventListener("click",()=>B(1)),K.querySelector("[data-resetall]").addEventListener("click",()=>{let d={designId:i.designId,designName:i.designName,zoom:i.zoom};i={...Xt(i.family,i.preset),...d},a.sfx("press"),ne(),re(),s("Reset to the version\u2019s defaults.")}),K.querySelector("[data-save]").addEventListener("click",()=>ha()),K.querySelector("[data-export]").addEventListener("click",()=>_t()),R()}function R(){let r=K.querySelector("[data-undo]"),d=K.querySelector("[data-redo]");r&&(r.disabled=E<=0),d&&(d.disabled=E>=D.length-1),K.querySelector("[data-dirty]")?.classList.toggle("on",JSON.stringify(zt(i))!==j)}function B(r){let d=ye(E+r,0,D.length-1);d!==E&&(E=d,i=JSON.parse(D[d]),a.sfx("press"),G(),ne(),R())}function F(r){let d={zoom:i.zoom};i={...Xt("orb",r),...d},a.sfx("press"),k.stir(),ne(),re()}function ie(){let r=i.family==="orb",d=[["orbit","Orbit (V) \xB7 or hold space and drag"],["light",r?"Move the key light (L)":"Move the light (L)"],["zoom","Zoom: drag up/down (Z)"]].filter(([g])=>r||g==="orbit"||g==="light"&&i.family==="orb-slider");Te.innerHTML=d.map(([g,w])=>`<button class="sx-ib" type="button" data-tool="${g}" aria-pressed="${g===z}" aria-label="${w}" data-tip="${w}">${Ne(g)}</button>`).join("")+(r?`<hr><button class="sx-ib" type="button" data-stir aria-label="Stir" data-tip="Stir what is inside">${Ne("stir")}</button>
        <button class="sx-ib" type="button" data-checker aria-pressed="${X}" aria-label="Transparency grid" data-tip="Transparency grid">${Ne("bg")}</button>
        <button class="sx-ib" type="button" data-snap aria-label="Download PNG" data-tip="Download a PNG">${Ne("camera")}</button>
        <button class="sx-ib" type="button" data-speak aria-label="Test with a voice" data-tip="Test the speech pulse">${Ne("sound")}</button>`:""),Te.querySelectorAll("[data-tool]").forEach(g=>g.addEventListener("click",()=>J(g.dataset.tool))),Te.querySelector("[data-stir]")?.addEventListener("click",()=>{k.stir(),a.sfx("press")}),Te.querySelector("[data-checker]")?.addEventListener("click",()=>{X=!X,Y.classList.toggle("checker",X),ie()}),Te.querySelector("[data-snap]")?.addEventListener("click",()=>ma()),Te.querySelector("[data-speak]")?.addEventListener("click",()=>ke())}function J(r){z=r,Y.className=Y.className.replace(/\bt-\w+/g,"")+` t-${r}`,Y.classList.toggle("checker",X),ue.style.pointerEvents=r==="orbit"&&!ve?"":"none",a.sfx("press"),ie(),W()}let Ee=(r,d)=>{let g=r*Er(d),w=d[4]*Er(d),L=w>=1?0:w>=.1?1:w>=.01?2:3;return(+g.toFixed(L)).toString()},V=()=>i.family==="orb"?{sph:Nt(i.preset)}:Xt(i.family);function ae(r,d){let[g,w]=r,L=Ke(i,g),U=`sx-${g.replace(/\./g,"-")}`,ee=Ii(r)?r[6]:r[3+(r[2]==="select"||r[2]==="seg"?1:0)],mt=Ke(d,g)!==void 0&&JSON.stringify(Ke(d,g))!==JSON.stringify(L)?" mod":"",We=me=>`<label class="sx-lab${mt}" for="${U}"${me?" data-scrub":""}${ee?` title="${Ie(ee)}${me?" \u2014 drag to scrub":""}"`:""}>${Ie(w)}</label>`;if(r[2]==="color")return`<div class="sx-row full">${We()}<span class="sx-col"><input type="color" id="${U}" data-path="${g}" value="${L}"><input class="sx-num" data-hex="${g}" value="${L}" aria-label="${Ie(w)} hex" spellcheck="false" maxlength="7"></span></div>`;if(r[2]==="select")return`<div class="sx-row full">${We()}<select class="sx-sel" id="${U}" data-path="${g}">${r[3].map(([me,dt])=>`<option value="${me}"${me===L?" selected":""}>${Ie(dt)}</option>`).join("")}</select></div>`;if(r[2]==="seg")return`<div class="sx-row full">${We()}<span class="sx-seg" role="group" id="${U}">${r[3].map(([me,dt])=>`<button type="button" data-seg="${g}" data-v="${me}" aria-pressed="${me===L}">${dt}</button>`).join("")}</span></div>`;let[,,Ae,_e,pe,je]=r,lt=(L-Ae)/(_e-Ae)*100;return`<div class="sx-row">${We(!0)}<input class="sx-rng" type="range" id="${U}" data-path="${g}" min="${Ae}" max="${_e}" step="${pe}" value="${L}" style="--p:${lt}%" aria-label="${Ie(w)}">
      <span class="sx-nw"><input class="sx-num" type="text" inputmode="decimal" data-num="${g}" value="${Ee(L,r)}" aria-label="${Ie(w)}${je?` (${je})`:""}"><i>${je}</i></span></div>`}let at=()=>ko(i).flatMap(r=>r[2]),rt=r=>at().find(d=>d[0]===r),Et=()=>matchMedia("(max-width: 820px)").matches;function $e(){let r=Z.querySelector(".sx-body")?.scrollTop??0,d=ko(i),g=V();d.some(L=>L[0]===Se)||(Se=d[0][0]);let w=[["props","Properties"],["designs","My designs"],["feedback","Feedback"]];Z.innerHTML=`
      <div class="sx-tabs" role="tablist" aria-label="Inspector">${w.map(([L,U])=>`<button class="sx-tab" role="tab" type="button" data-tab="${L}" aria-selected="${L===we}">${U}</button>`).join("")}</div>
      ${we==="props"?`<div class="sx-chips" role="group" aria-label="Section">${d.map(([L,U])=>`<button type="button" data-chip="${L}" aria-pressed="${L===Se}">${U}</button>`).join("")}</div>`:""}
      <div class="sx-body" data-body>${we==="props"?d.map(([L,U,ee])=>{let mt=te[L]??!0,We=ee.filter(Ae=>Ke(g,Ae[0])!==void 0&&JSON.stringify(Ke(g,Ae[0]))!==JSON.stringify(Ke(i,Ae[0]))).length;return`<section class="sx-sec${L===Se?"":" m-off"}" data-sec="${L}"><button class="sx-sh" type="button" data-tog="${L}" aria-expanded="${mt}">${Ne("chev","0 0 9 9")}${U}<span class="n">${We?`${We} changed`:""}</span></button>
          <div class="sx-rows" ${mt?"":"hidden"}>${ee.map(Ae=>ae(Ae,g)).join("")}
          ${L==="motion"?`<div class="sx-row full"><span class="sx-lab">Test sound</span><select class="sx-sel" data-snd aria-label="Sound to test">${ce.map(([Ae,_e])=>`<option value="${Ae}"${Ae===q?" selected":""}>${Ie(_e)}</option>`).join("")}</select></div>
            <div class="sx-acts"><button class="sx-tb" type="button" data-testsnd>Play to test the pulse</button><button class="sx-tb" type="button" data-stir2>Stir</button></div>`:""}
          ${L==="wave"?'<div class="sx-acts"><button class="sx-tb" type="button" data-trigger>Trigger a wave</button></div>':""}
          </div></section>`}).join("")+'<p class="sx-hint sx-pad">Drag a label to scrub (<span class="sx-kbd">\u21E7</span> \xD710, <span class="sx-kbd">\u2325</span> fine). Gold dots mark values changed from the version.</p>':we==="designs"?ot():Re()}</div>`,Z.querySelector("[data-body]").scrollTop=r,Fe()}function ot(){let r=p.designs();return`<div class="sx-pad">
      <h3 class="sx-h">My designs</h3>
      ${r.length?`<div class="sx-ds">${r.map(d=>`<article class="sx-d${d.id===i.designId?" cur":""}" data-did="${Ie(d.id)}">
        ${d.thumb?`<img src="${d.thumb}" alt="">`:'<span class="ph"></span>'}
        <div><input value="${Ie(d.name)}" aria-label="Design name" maxlength="48" data-dn><small>${Ie(d.familyName||"")} \xB7 ${new Date(d.at).toLocaleDateString()}</small></div>
        <div class="ab"><button class="sx-ib" type="button" data-dopen aria-label="Open" data-tip="Open">${Ne("open")}</button><button class="sx-ib" type="button" data-ddup aria-label="Duplicate" data-tip="Duplicate">${Ne("dup")}</button><button class="sx-ib" type="button" data-ddel aria-label="Delete" data-tip="Delete">${Ne("del")}</button></div>
      </article>`).join("")}</div>`:'<p class="sx-empty">Nothing saved yet. Save keeps the design on this device; it also appears in Account \u2192 My Designs.</p>'}
      <div class="sx-acts" style="margin-bottom:16px"><button class="sx-tb pri" type="button" data-savenew>Save as new design</button>${i.designId?'<button class="sx-tb" type="button" data-new>New from version</button>':""}</div>
      ${i.family==="orb"?`<h3 class="sx-h">Start from a version</h3><div class="sx-vers">${Je.map(d=>`<button class="sx-ver" type="button" data-ver="${d.id}" aria-pressed="${d.id===i.preset&&!i.designId}" title="${Ie(d.line)}">${Ie(d.name)}</button>`).join("")}</div>`:""}
    </div>`}function Re(){return`<div class="sx-ea">
      ${'<p class="access">Studio is in early access \u2014 free while we build it. Designs stay on this device.</p>'}
      ${co("studio")}${Kt("studio",{compact:!0,label:"Get notified about Studio updates (optional)"})}
      <h3 class="sx-h" style="margin-top:18px">Shortcuts</h3>
      <p class="sx-hint"><span class="sx-kbd">${Ht}Z</span> undo \xB7 <span class="sx-kbd">${Ht}\u21E7Z</span> redo \xB7 <span class="sx-kbd">${Ht}S</span> save \xB7 <span class="sx-kbd">${Ht}E</span> export \xB7 <span class="sx-kbd">V</span> orbit \xB7 <span class="sx-kbd">L</span> light \xB7 <span class="sx-kbd">Z</span> zoom \xB7 <span class="sx-kbd">R</span> reset view \xB7 <span class="sx-kbd">space</span>+drag orbit</p>
    </div>`}function Fe(){Z.querySelectorAll("[data-tab]").forEach(r=>r.addEventListener("click",()=>{we=r.dataset.tab,a.sfx("press"),$e()})),Z.querySelectorAll("[data-chip]").forEach(r=>r.addEventListener("click",()=>{Se=r.dataset.chip,a.sfx("press"),$e()})),Z.querySelectorAll("[data-tog]").forEach(r=>r.addEventListener("click",()=>{Et()||(te[r.dataset.tog]=!(te[r.dataset.tog]??!0),a.sfx("press"),$e())})),we==="feedback"&&(po(Z,{sfx:r=>a.sfx(r)}),Ga(Z)),we==="designs"&&Xe(),Z.querySelectorAll("input[type=range][data-path]").forEach(r=>{r.addEventListener("input",()=>{M(r.dataset.path,+r.value),Pe(r.dataset.path)}),r.addEventListener("change",()=>{re(),b(),a.sfx("release")})}),Z.querySelectorAll("input[type=color][data-path]").forEach(r=>{r.addEventListener("input",()=>{M(r.dataset.path,r.value);let d=Z.querySelector(`[data-hex="${r.dataset.path}"]`);d&&(d.value=r.value)}),r.addEventListener("change",()=>{re(),b()})}),Z.querySelectorAll("[data-hex]").forEach(r=>{r.addEventListener("input",()=>{/^#[0-9a-f]{6}$/i.test(r.value)&&(M(r.dataset.hex,r.value.toLowerCase()),Z.querySelector(`input[type=color][data-path="${r.dataset.hex}"]`).value=r.value)}),r.addEventListener("change",()=>{/^#[0-9a-f]{6}$/i.test(r.value)||(r.value=Ke(i,r.dataset.hex)),re(),b()})}),Z.querySelectorAll("select[data-path]").forEach(r=>r.addEventListener("change",()=>{if(r.dataset.path==="sph.base"){let[d,g]=wr[r.value];i.sph.material.tint=$a(d),i.sph.material.accent=$a(g)}M(r.dataset.path,r.value),a.sfx("press"),k.stir(),$e(),re()})),Z.querySelectorAll("[data-seg]").forEach(r=>r.addEventListener("click",()=>{M(r.dataset.seg,r.dataset.v),a.sfx("press"),$e(),re()})),Z.querySelectorAll("[data-num]").forEach(r=>{let d=rt(r.dataset.num);if(!d)return;let[,,g,w]=d,L=Er(d);r.addEventListener("input",()=>{let U=parseFloat(r.value);Number.isFinite(U)&&(M(r.dataset.num,ye(U/L,g,w)),it(r.dataset.num))}),r.addEventListener("change",()=>{Pe(r.dataset.num),re(),b()}),r.addEventListener("keydown",U=>{if(U.key==="Enter"&&r.blur(),U.key==="ArrowUp"||U.key==="ArrowDown"){U.preventDefault();let ee=d[4]*(U.shiftKey?10:U.altKey?.1:1);M(r.dataset.num,ye(Ke(i,r.dataset.num)+(U.key==="ArrowUp"?ee:-ee),g,w)),Pe(r.dataset.num),re()}}),r.addEventListener("focus",()=>r.select())}),Z.querySelectorAll("[data-scrub]").forEach(r=>{let d=r.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),g=rt(d);if(!g)return;let[,,w,L,U]=g;r.addEventListener("pointerdown",ee=>{if(ee.button)return;ee.preventDefault(),r.setPointerCapture(ee.pointerId);let mt=ee.clientX,We=Ke(i,d),Ae=(L-w)/240,_e=je=>{let lt=je.shiftKey?10:je.altKey?.1:1,me=ye(We+(je.clientX-mt)*Ae*lt,w,L);me=Math.round(me/U)*U,M(d,+me.toFixed(5)),Pe(d)},pe=()=>{r.removeEventListener("pointermove",_e),r.removeEventListener("pointerup",pe),r.removeEventListener("pointercancel",pe),re(),b()};r.addEventListener("pointermove",_e),r.addEventListener("pointerup",pe),r.addEventListener("pointercancel",pe)})}),Z.querySelector("[data-snd]")?.addEventListener("change",r=>{q=r.target.value}),Z.querySelector("[data-testsnd]")?.addEventListener("click",()=>ke()),Z.querySelector("[data-stir2]")?.addEventListener("click",()=>k.stir()),Z.querySelector("[data-trigger]")?.addEventListener("click",()=>Ft())}function Xe(){Z.querySelectorAll("[data-did]").forEach(r=>{let d=r.dataset.did,g=()=>p.design(d);r.querySelector("[data-dn]").addEventListener("change",w=>{let L=w.target.value.trim()||"Untitled design";p.renameDesign(d,L),i.designId===d&&(i.designName=L,G(),P()),a.sfx("confirm")}),r.querySelector("[data-dopen]").addEventListener("click",()=>Ge(g())),r.querySelector("[data-ddup]").addEventListener("click",()=>{let w=g();if(!w)return;let L={...structuredClone(w),id:Date.now().toString(36),name:`${w.name} copy`.slice(0,48),at:new Date().toISOString()};p.saveDesign(L)&&(a.sfx("confirm"),$e())}),r.querySelector("[data-ddel]").addEventListener("click",()=>{let w=g();w&&confirm(`Delete \u201C${w.name}\u201D? This cannot be undone.`)&&(p.deleteDesign(d),i.designId===d&&(delete i.designId,j=null,G(),R()),a.sfx("close"),$e())})}),Z.querySelector("[data-savenew]")?.addEventListener("click",()=>ha(!0)),Z.querySelector("[data-new]")?.addEventListener("click",()=>F(i.preset)),Z.querySelectorAll("[data-ver]").forEach(r=>r.addEventListener("click",()=>F(r.dataset.ver)))}function Ge(r){r&&(i=Sr({...structuredClone(r.draft),family:r.family}),i.designId=r.id,i.designName=r.name,j=JSON.stringify(zt(i)),a.sfx("press"),ne(),re(),s(`Opened \u201C${r.name}\u201D.`))}function it(r){let d=Z.querySelector(`input[type=range][data-path="${r}"]`);d&&(d.value=Ke(i,r),d.style.setProperty("--p",`${(d.value-d.min)/(d.max-d.min)*100}%`))}function Pe(r){let d=Z.querySelector(`[data-num="${r}"]`),g=rt(r);d&&g&&document.activeElement!==d&&(d.value=Ee(Ke(i,r),g)),it(r)}function b(){let r=V();Z.querySelectorAll(".sx-lab[for]").forEach(d=>{let g=d.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),w=Ke(r,g);w!==void 0&&d.classList.toggle("mod",JSON.stringify(w)!==JSON.stringify(Ke(i,g)))}),Z.querySelectorAll("[data-sec]").forEach(d=>{let g=d.querySelectorAll(".sx-lab.mod").length,w=d.querySelector(".n");w&&(w.textContent=g?`${g} changed`:"")}),R()}function M(r,d){let g=r.split("."),w=i;for(let L of g.slice(0,-1))w=w[L];w[g.at(-1)]=d,A()}function A(){let r=i.family;if(r==="orb")k.setConfig({...i.sph,variant:i.preset}),u.hide();else{let d=e.chamber,g=i.scene;Object.assign(d,{left:g.left,right:g.right,exposure:g.exposure,yaw:i.view.yaw*yo,pitch:i.view.pitch*yo,platform:!1});let w={dark:!0,envBoost:Ai(.55,1.6,g.env),exposure:g.exposure,left:g.left,right:g.right};if(r==="orb-slider"){let L=wt(ra(i.slider.preset).config);Object.assign(L.light,{strength:i.orb.light.strength,colour:i.orb.light.colour,x:i.orb.light.x,y:i.orb.light.y}),u.show(L,w)}else r==="orb-wave"||r==="background-pack"?u.show(wt(ra("original").config),w):u.hide();y.setView({yaw:0,pitch:0}),Ce.set({strength:i.wave.strength,scale:i.wave.scale,horizon:r==="background-pack"?i.bg.horizon:.3,lamp:i.bg.lamp}),r==="orb-wave"&&Ce.setExposure(i.wave.exposure),r==="background-pack"&&Ce.setExposure(i.bg.exposure),ge(),se()}W(),G()}function W(){let r=Math.round(i.zoom*100);St.innerHTML=i.family==="orb"?`<b>${r}%</b><b>${{orbit:"Orbit",light:"Key light",zoom:"Zoom"}[z]}</b>${z==="light"?`<b>${Math.round(i.sph.light.angle)}\xB0 \xB7 ${Math.round(i.sph.light.height)}\xB0</b>`:""}`:""}function ne(){let r=i.family,d=o.querySelector("[data-screen]"),g=o.querySelector("[data-scap]"),w=o.querySelector("[data-kit]");ue.hidden=r!=="orb",o.querySelector("[data-zoombar]").hidden=r!=="orb",d.hidden=!(r==="orb-wave"||r==="background-pack"),g.hidden=r!=="orb-slider",w.hidden=r!=="crystal-controls",Sa(),e.removeBackdrop(Ce.canvas),d.hidden||(Ha(d),e.addBackdrop(Ce.canvas),Ce.setExposure(r==="background-pack"?i.bg.exposure:i.wave.exposure,!0)),r==="orb-slider"&&(g.innerHTML='<span class="cap-label">slide to enter</span>',g.setAttribute("role","slider"),g.tabIndex=0,g.setAttribute("aria-label","Slide to enter")),r==="crystal-controls"&&(w.innerHTML=`<div class="kit-swatch"><button class="gb primary" type="button">Start project</button><button class="gb" type="button">Secondary</button><input class="gi" placeholder="Enter text" aria-label="Example field"><select class="gsel" aria-label="Example select"><option>Select</option><option>Clear</option></select><button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><button class="gb gc" type="button" aria-label="Confirm">${f.check}</button></div>`),w.querySelector(".gsw")?.addEventListener("click",L=>{L.currentTarget.setAttribute("aria-checked",String(L.currentTarget.getAttribute("aria-checked")!=="true")),a.sfx("press")}),r!=="orb"&&z==="zoom"&&(z="orbit"),P(),ie(),$e(),A(),J(z)}let Q=0;function ge(){let r=o.querySelector("[data-scap]");if(!r||r.hidden)return;let d=i.slider,g=d.tint,w=d.tintAmount;r.style.background=`linear-gradient(180deg, ${da(g,.1+w*.35)}, ${da(g,.03+w*.2)} 50%, ${da(g,.08+w*.3)})`}function se(){let r=o.querySelector("[data-kit]");if(!r||r.hidden)return;let d=i.ctl,g=d.depth,w=r.querySelector("style");w||(w=document.createElement("style"),r.append(w)),w.textContent=`.st-kit .gb,.st-kit .gi,.st-kit .gsel{border-radius:${d.radius}px;-webkit-backdrop-filter:blur(${d.blur}px) saturate(1.5);backdrop-filter:blur(${d.blur}px) saturate(1.5)}
      .st-kit .gb:not(.primary){background:linear-gradient(180deg,${da(d.tint,.3+d.tintAmount*.4)},${da(d.tint,.08+d.tintAmount*.3)} 50%,${da(d.tint,.25+d.tintAmount*.35)});
        box-shadow:inset 0 ${g*.3}px ${g*.2}px rgba(255,255,255,.95),inset 0 -${g*.6}px ${g}px -1px rgba(255,255,255,.75),inset 0 0 0 1px rgba(150,158,166,.18),inset 0 -${g*2}px ${g*2.8}px -${g*2}px rgba(120,128,136,.35),0 1px 1px rgba(40,44,50,.1),0 ${g*2}px ${g*4}px -${g*2}px rgba(40,44,50,.38)}`}let oe=null,ve=!1,Ze=!1;Y.addEventListener("pointerdown",r=>{if(r.target.closest("[data-zoombar],.st-cap,.st-kit,.st-screen"))return;let d=Ze;Ze=!1,!(i.family==="orb"&&z==="orbit"&&d&&!ve)&&(oe={x:r.clientX,y:r.clientY,lx:r.clientX,ly:r.clientY,v:{...i.view},z:i.zoom,l:{...i.sph.light},ol:{...i.orb.light}},Y.setPointerCapture(r.pointerId),Y.classList.add("grab"))}),Y.addEventListener("pointermove",r=>{if(!oe)return;let d=r.clientX-oe.x,g=r.clientY-oe.y,w=ve?"orbit":z;if(i.family==="orb")w==="orbit"&&k.rotate(r.clientX-oe.lx,r.clientY-oe.ly),w==="light"&&(i.sph.light.angle=(oe.l.angle+d*.5+540)%360-180,i.sph.light.height=ye(oe.l.height-g*.35,-30,90),A(),Pe("sph.light.angle"),Pe("sph.light.height")),w==="zoom"&&(i.zoom=ye(oe.z*Math.exp(-g*.005),.25,3),W());else{if(w==="orbit"&&(i.view.yaw=ye(oe.v.yaw-d*.25,-60,60),i.view.pitch=ye(oe.v.pitch+g*.2,-20,35)),w==="light"){let L=u.pose.d||300;i.orb.light.x=ye(oe.ol.x+d/L*1.6,-.6,.6),i.orb.light.y=ye(oe.ol.y-g/L*1.6,-.8,.6),Pe("orb.light.x"),Pe("orb.light.y")}A()}oe.lx=r.clientX,oe.ly=r.clientY});let nt=()=>{oe&&(oe=null,Y.classList.remove("grab"),re(),b())};Y.addEventListener("pointerup",nt),Y.addEventListener("pointercancel",nt),Y.addEventListener("wheel",r=>{i.family==="orb"&&(r.preventDefault(),i.zoom=ye(i.zoom*Math.exp(-r.deltaY*.0015),.25,3),W(),clearTimeout(Y._t),Y._t=setTimeout(G,300))},{passive:!1}),o.querySelectorAll("[data-zo]").forEach(r=>r.addEventListener("click",()=>{let d=+r.dataset.zo;i.zoom=d?ye(i.zoom*(d>0?1.25:.8),.25,3):1,d||k.resetView(),W(),G(),a.sfx("press")})),Y.addEventListener("keydown",r=>{let d={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[r.key];if(d){if(r.preventDefault(),i.family==="orb"){z==="light"?(i.sph.light.angle=ye(i.sph.light.angle+d[0]*5,-180,180),i.sph.light.height=ye(i.sph.light.height-d[1]*5,-30,90),A(),$e(),re()):z==="zoom"?(i.zoom=ye(i.zoom*(d[1]<0?1.1:d[1]>0?.9:1),.25,3),W()):k.rotate(d[0]*12,d[1]*12);return}z==="orbit"&&(i.view.yaw=ye(i.view.yaw-d[0]*5,-60,60),i.view.pitch=ye(i.view.pitch+d[1]*3,-20,35)),z==="light"&&(i.orb.light.x=ye(i.orb.light.x+d[0]*.05,-.6,.6),i.orb.light.y=ye(i.orb.light.y-d[1]*.05,-.8,.6)),A(),$e(),re()}});let ga=r=>r&&(r.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(r.tagName))&&!(r.type==="range"||r.type==="color");function qt(r){if(!Me.hidden){r.key==="Escape"&&Rt();return}let d=r.metaKey||r.ctrlKey,g=r.key.toLowerCase();if(d&&g==="s"){r.preventDefault(),ha();return}if(d&&g==="e"){r.preventDefault(),_t();return}if(!ga(r.target)){if(d&&g==="z"){r.preventDefault(),B(r.shiftKey?1:-1);return}if(d&&g==="y"){r.preventDefault(),B(1);return}if(!(d||r.altKey)){if(r.key===" "){ve||(ve=!0,Y.classList.add("t-orbit"),ue.style.pointerEvents="none"),(r.target===document.body||Y.contains(r.target))&&r.preventDefault();return}g==="v"?J("orbit"):g==="l"&&(i.family==="orb"||i.family==="orb-slider")?J("light"):g==="z"&&i.family==="orb"?J("zoom"):g==="r"&&(i.zoom=1,k.resetView(),i.family!=="orb"&&(i.view={yaw:0,pitch:0,zoom:1},A(),re()),W(),G())}}}function Be(r){r.key===" "&&(ve=!1,J(z))}document.addEventListener("keydown",qt),document.addEventListener("keyup",Be);let Ve=o.querySelector("[data-scap]"),Qe=null;Ve.addEventListener("pointerdown",r=>{r.stopPropagation(),Qe={x:r.clientX,v:Q},Ve.setPointerCapture(r.pointerId),a.sfx("press")}),Ve.addEventListener("pointermove",r=>{Qe&&(Q=ye(Qe.v+(r.clientX-Qe.x)/(Ve.offsetWidth-Ve.offsetHeight)))});let Bt=()=>{Qe&&(Qe=null,a.sfx("release"),y.nudge(.5),Q>.92?(Q=1,a.sfx("confirm")):Q=0)};Ve.addEventListener("pointerup",Bt),Ve.addEventListener("pointercancel",Bt),Ve.addEventListener("keydown",r=>{r.key==="ArrowRight"&&(Q=ye(Q+.1)),r.key==="ArrowLeft"&&(Q=ye(Q-.1))});function Ft(){let r=o.querySelector("[data-screen]"),d=r.getBoundingClientRect();Ce.impact(d.width/2,d.height*(1-.3)+10,i.wave.strength),y.nudge(.8),a.sfx("detent")}o.querySelector("[data-screen]").addEventListener("pointerdown",r=>{if(i.family!=="orb-wave")return;let d=r.currentTarget.getBoundingClientRect();Ce.impact(r.clientX-d.left,r.clientY-d.top,i.wave.strength),a.sfx("detent")});function zt(r){let{designId:d,designName:g,zoom:w,...L}=r;return L}async function $t(){try{if(i.family==="orb"&&k.canvas){let g=k.canvas,w=Math.min(g.width,g.height),L=document.createElement("canvas");L.width=L.height=240;let U=L.getContext("2d");return U.fillStyle="#0b0c0c",U.fillRect(0,0,240,240),U.drawImage(g,(g.width-w)/2,(g.height-w)/2,w,w,0,0,240,240),L.toDataURL("image/jpeg",.8)}let r=aa(),d=await e.exportPNG(r,u.element||document.createElement("div"));if(d){let g=await createImageBitmap(d),w=document.createElement("canvas"),L=360;return w.width=L,w.height=Math.round(L*r.h/r.w),w.getContext("2d").drawImage(g,0,0,w.width,w.height),w.toDataURL("image/jpeg",.78)}}catch{}return null}async function ha(r=!1){let d=Dt(i.family),g=!r&&i.designId||Date.now().toString(36),w=r&&i.designId?`${$()} copy`.slice(0,48):$(),L=await $t();p.saveDesign({id:g,name:w,family:i.family,familyName:d.name,preset:i.preset,schema:1,at:new Date().toISOString(),draft:zt(i),thumb:L})?(i.designId=g,i.designName=w,j=JSON.stringify(zt(i)),G(),a.sfx("confirm"),s("Saved to My designs (on this device)."),P(),we==="designs"&&$e()):s("Could not save: this browser\u2019s storage is full or unavailable.")}let ta=()=>({...i.sph,variant:i.preset}),Ot=()=>go(ta(),Nt(i.preset));function fa(r=qi){let d=Ot(),g=360;return`<div data-light-orb data-variant="${i.preset}"${d==="e30"?"":` data-config="${d}"`} style="width:${g}px;height:${g}px"></div>
<script type="module" src="${r}"><\/script>`}function qa(){let r=i.sph.scene,d=r.background==="none"?"#0b0c0c":r.colour;return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${Ie($())} \xB7 The Light Orb</title>
<style>
  html,body{margin:0;height:100%;background:${d}}
  body{display:grid;place-items:center}
  [data-light-orb]{width:min(82vmin,560px)!important;height:min(82vmin,560px)!important}
</style>
</head>
<body>
${fa()}
</body>
</html>
`}function Gt(){return i.family==="orb"?JSON.stringify({product:"orb",schema:1,name:$(),variant:i.preset,config:ta(),changed:Wa(Nt(i.preset),ta()),embed:{attribute:"data-config",value:Ot()}},null,2):JSON.stringify({schema:1,product:i.family,name:$(),config:i[{"orb-slider":"slider","orb-wave":"wave","background-pack":"bg","crystal-controls":"ctl"}[i.family]],scene:i.scene,note:"Configuration for The Light Orb renderer. Development export; not a licensed product package."},null,2)}let st="embed",xt=()=>$().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"light-orb";function _t(){i.family!=="orb"&&(st="json"),Yt(),Me.hidden=!1,a.sfx("open"),Me.querySelector("[data-xtab][aria-selected=true]")?.focus()}function Rt(){Me.hidden=!0,a.sfx("close"),Y.focus({preventScroll:!0})}function Yt(){let r=i.family==="orb",d=r?[["embed","Embed code"],["html","HTML page"],["json","JSON"]]:[["json","JSON"]],g={embed:[fa(),"Paste into any page. The data-config attribute holds your design (only what differs from the version), so it looks and moves exactly like this.",[["copy","Copy code","pri"],["dlsnip","Download snippet"]]],html:[qa(),"A complete page with your Orb, ready to open or upload.",[["dlhtml","Download .html","pri"],["copy","Copy"]]],json:[Gt(),r?"The full configuration. The embed accepts it as data-config too (plain JSON or base64).":"The configuration of this object.",[["dljson","Download .json","pri"],["copy","Copy"]]]}[st];Me.innerHTML=`<div class="sx-dlg" role="dialog" aria-modal="true" aria-labelledby="sx-xt">
      <div class="sx-dh"><h2 id="sx-xt">Export \xB7 ${Ie($())}</h2><button class="sx-ib" type="button" data-xclose aria-label="Close">${Ne("close")}</button></div>
      <div class="sx-tabs" role="tablist">${d.map(([L,U])=>`<button class="sx-tab" role="tab" type="button" data-xtab="${L}" aria-selected="${L===st}">${U}</button>`).join("")}</div>
      <div class="sx-db"><p>${g[1]}</p><textarea class="sx-code" readonly spellcheck="false" aria-label="Code">${Ie(g[0])}</textarea>
        <div class="sx-acts">${g[2].map(([L,U,ee])=>`<button class="sx-tb${ee?" "+ee:""}" type="button" data-xa="${L}">${U}</button>`).join("")}${r?'<button class="sx-tb" type="button" data-xa="png">Download PNG</button>':""}</div></div></div>`,Me.querySelector("[data-xclose]").addEventListener("click",Rt),Me.onclick=L=>{L.target===Me&&Rt()},Me.querySelectorAll("[data-xtab]").forEach(L=>L.addEventListener("click",()=>{st=L.dataset.xtab,a.sfx("press"),Yt(),Me.querySelector(`[data-xtab="${st}"]`).focus()}));let w=g[0];Me.querySelectorAll("[data-xa]").forEach(L=>L.addEventListener("click",async()=>{let U=L.dataset.xa;if(U==="copy"){let ee=!1;try{await navigator.clipboard.writeText(w),ee=!0}catch{Me.querySelector("textarea").select(),ee=document.execCommand?.("copy")}L.textContent=ee?"Copied":"Select and copy",a.sfx("confirm"),setTimeout(()=>{L.textContent=U==="copy"&&st==="embed"?"Copy code":"Copy"},1600)}U==="dlsnip"&&Ut(new Blob([w],{type:"text/plain"}),`${xt()}-embed.txt`),U==="dlhtml"&&Ut(new Blob([w],{type:"text/html"}),`${xt()}.html`),U==="dljson"&&Ut(new Blob([w],{type:"application/json"}),`${xt()}.json`),U==="png"&&ma()}))}async function ma(){if(i.family==="orb"&&k.canvas){k.canvas.toBlob(r=>{r&&(Ut(r,`${xt()}.png`),s("Downloaded a PNG of the Orb."))});return}if(u.element){let r=await e.exportPNG(aa(),u.element);r&&Ut(r,`${xt()}.png`)}}function Ut(r,d){let g=document.createElement("a");g.href=URL.createObjectURL(r),g.download=d,document.body.append(g),g.click(),setTimeout(()=>{URL.revokeObjectURL(g.href),g.remove()},1e3),a.sfx("confirm")}function aa(){let r=Y.getBoundingClientRect();return{x:r.left,y:r.top,w:r.width,h:r.height}}function tr(){let r=document.querySelector(".hd"),d=r?Math.round(r.getBoundingClientRect().bottom):72;fe._hh!==d&&(fe._hh=d,fe.style.setProperty("--sx-top",`${Math.max(0,d)}px`));let g=aa(),w=i.family,L=g.x+g.w/2,U=o.querySelector("[data-screen]"),ee=o.querySelector("[data-scap]"),mt=o.querySelector("[data-kit]"),We=innerHeight,Ae={warm:0,room:"chamber",stage:g,emission:1,orb:{x:50,y:We-52,d:46,vis:0}},_e=pe=>({...Ae,product:pe,grounds:pe&&pe.ground?[{y:pe.ground,x:pe.x,d:pe.d}]:[]});if(w==="orb"){let pe=Math.round(Math.min(g.w-48,g.h-48)*.74*i.zoom);return ue._s!==pe&&(ue._s=pe,ue.style.width=ue.style.height=`${Math.max(40,pe)}px`),k.setSpeech(a.playing?a.energy():0),_e(null)}if(w==="orb-slider"){let pe=i.slider,je=Math.min(1,(g.w-40)/pe.length),lt=pe.length*je,me=pe.height*je;Object.assign(ee.style,{left:`${L-lt/2}px`,top:`${g.y+g.h*.5-me/2}px`,width:`${lt}px`,height:`${me}px`});let dt=me*.84,ar=(me-dt)/2;return _e({x:L-lt/2+ar+dt/2+Q*(lt-me),y:g.y+g.h*.5,d:dt,vis:1,snap:!0})}if(w==="orb-wave"||w==="background-pack"){let pe=Math.min(g.w*.86,900),je=Math.min(g.h*.72,pe*.62);Object.assign(U.style,{left:`${L-pe/2}px`,top:`${g.y+g.h*.5-je/2}px`,width:`${pe}px`,height:`${je}px`});let lt=w==="background-pack"?i.bg.horizon:.3,me=Math.min(90,pe*.12),dt=je*(1-lt)+me*.1-me/2;return Ce.setOrb({x:pe/2,y:dt,d:me}),_e({x:L,y:g.y+g.h*.5-je/2+dt,d:me,vis:1})}return w==="crystal-controls"&&Object.assign(mt.style,{left:`${g.x+20}px`,top:`${g.y+20}px`,width:`${g.w-40}px`,height:`${g.h-40}px`}),_e(null)}return ne(),{frame:tr,reapply:()=>A(),voiceResponse:()=>i.family==="orb"?ye(i.sph.motion.speech*.6):.6,leave(){document.removeEventListener("keydown",qt),document.removeEventListener("keyup",Be),k.dispose(),Sa(),e.removeBackdrop(Ce.canvas),document.body.classList.remove("dark-ui","sx-on"),u.hide(),Object.assign(e.chamber,{yaw:0,pitch:0})},get draft(){return i}}}function da(e,a){let n=parseInt(e.slice(1),16);return`rgba(${n>>16&255},${n>>8&255},${n&255},${a.toFixed(3)})`}function Lo(e){let a=null,n=null,o=null,c={},f={emission:1},s=document.createElement("div");s.className="x-product",s.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:31",document.body.append(s);let u={x:-999,y:-999,d:100,vis:0},p={x:-999,y:-999,d:100,vis:0,vx:0,vy:0,vd:0},y=!0;function i(){return a||n||(n=_r({container:s,diameter:240,driven:!0,background:"#f3f3f1"}).then(D=>(a=D,n=null,D.attachPointer(document.createElement("div"))(),D.setBackdrop((E,ce)=>e.drawBackdrop(E,ce,p)),D.setVisibility(0),D.tick(performance.now()),o&&j(),D)).catch(()=>{n=null})),n}function j(){a&&o&&(f=Na(a,o,c),a.setEmission(Math.min(1.4,f.emission)))}return{get orb(){return a},get element(){return a?.element},get output(){return f},show(D,E={}){o=wt(D),c=E,y=!1,i(),j()},update(D,E=c){o=wt(D),c=E,j()},hide(){y=!0,a&&(a.setVisibility(0),a.setView({yaw:0,pitch:0}),a.setObjectYaw(0),a.setSpeech(0),a.tick(performance.now())),p.vis=0,p.x=-999},attachPointer(D){return a?a.attachPointer(D,{range:"volume"}):(i()?.then(E=>E?.attachPointer(D,{range:"volume"})),null)},frame(D){if(!a)return;if(!D||y){(p.vis>0||a.element.style.visibility!=="hidden")&&(p.vis=0,a.setVisibility(0),a.tick(performance.now()));return}let E=1/60,ce=9;if(D.snap||p.x<-900)Object.assign(p,{x:D.x,y:D.y,d:D.d,vx:0,vy:0,vd:0});else for(let q of["x","y","d"]){let ke="v"+q;p[ke]+=(ce*ce*(D[q]-p[q])-2*ce*p[ke])*E,p[q]+=p[ke]*E}p.vis+=((D.vis??1)-p.vis)*.2,a.holdRaster(Math.ceil(Math.max(p.d,D.d,120)*1.06)),a.setPose({x:p.x,y:p.y,diameter:p.d}),a.setVisibility(p.vis),a.tick(performance.now())},pose:p}}var Cr=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null,Mr=!!Cr;function Co({onresult:e,onend:a,onerror:n,lang:o}){if(!Cr)return n?.("unsupported"),null;let c=new Cr;c.lang=o||navigator.language||"en-US",c.interimResults=!0,c.maxAlternatives=1,c.continuous=!1;let f="",s="";c.onresult=u=>{s=[...u.results].map(p=>p[0].transcript).join(" "),u.results[u.results.length-1].isFinal&&(f=s),e?.(s,!!f)},c.onerror=u=>n?.(u.error),c.onend=()=>a?.(f||s);try{c.start()}catch{return n?.("busy"),null}return c}var Tr=e=>String(e).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),kt=(e,...a)=>a.some(n=>new RegExp(`\\b${n}\\b`).test(e)),Ni={home:["home","start","beginning","inicio","principio","portada"],products:[...Ye[0].words,"productos","producto","tienda","objetos"],templates:[...Ye[1].words,"plantillas","plantilla","composiciones"],studio:[...Ye[2].words,"estudio","editar","personalizar","disenar"],sound:[...Ye[3].words,"sonido","sonidos","voces","escuchar","audio"],membership:["membership","member","plans","plan","pricing","price","prices","membresia","miembro","planes","precio","precios","cuesta","cost"],account:["account","profile","downloads","cuenta","perfil","descargas"],signin:["sign in","log in","login","iniciar sesion","entrar"]},Hi={home:"#/",membership:"#/membership",account:"#/account",signin:"#/signin"},Bi={"orb-slider":["slider","deslizador"],"orb-wave":["wave","ola","onda","ripple"],"background-pack":["background","backgrounds","fondo","fondos"],"crystal-controls":["controls","buttons","controles","botones","crystal"]},ft=(e,a={})=>({say:e.text,id:e.id,lang:e.lang??"en",...a}),Fi=/\b(hola|gracias|buenas|ayuda|ayudame|quien|que|como|donde|cual|quiero|puedes|llevame|ensename|muestrame|recomiendas|recomienda|textura|texturas|materiales|precio|cuanto|plantillas|productos|sonido|estudio|por favor|si|vale|el|la|los|las|una|para|con|del|mi|me)\b/g,Gi=/\b(hello|hi|hey|thanks|thank|help|who|what|which|how|where|want|can|could|show|take|recommend|texture|textures|materials|price|the|a|an|is|are|you|me|my|please|yes|for|with|of)\b/g;function Ka(e,a="en"){if(/[ñ¿¡]/i.test(String(e)))return"es";let n=Tr(e),o=n.match(Fi)?.length??0,c=n.match(Gi)?.length??0;return o>c?"es":c>o?"en":a}var To=()=>typeof navigator<"u"&&/^es\b/i.test(navigator.language||"")?"es":"en";function Mo(e,{here:a,presentation:n,lang:o="en"}){let c=Tr(e),f=Ka(e,o),s=p=>ia(p,f);if(!c)return ft(s("reply.missed"),{intent:"fallback"});if(c.split(" ").length<=3&&kt(c,"stop","quiet","silence","shh","para","calla","callate","silencio","basta"))return{say:"",stop:!0,command:!0};if(kt(c,"where am i","where are we","donde estoy","donde estamos","que es esto","what is this","what is here","que hay aqui"))return ft(n(f),{intent:"where"});if(kt(c,"help","what can you do","what can i do","ayuda","ayudame","que puedes hacer","que puedo hacer"))return ft(s("reply.help"),{intent:"help"});if(kt(c,"thank you","thanks","gracias"))return ft(s("reply.thanks"),{intent:"thanks"});if(kt(c,"who are you","what are you","quien eres","que eres","como te llamas","your name"))return ft(s("reply.who"),{intent:"who"});if(kt(c,"back","go back","atras","volver","vuelve"))return ft(s("reply.back"),{back:!0,command:!0});for(let[p,y]of Object.entries(Bi))if(kt(c,...y)){let i=ut.find(j=>j.id===p&&j.published!==!1);if(i)return ft(ao(i),{go:`#/products/${p}`,quiet:!0,command:!0})}let u=gt.find(p=>c.includes(Tr(p.name)));if(u)return ft(ro(u),{go:`#/templates/${u.id}`,quiet:!0,command:!0});for(let[p,y]of Object.entries(Ni))if(kt(c,...y)){if(p===a){let i=n(f);return ft(f==="es"?{text:`Ya estamos aqu\xED. ${i.text}`,lang:"es"}:to(i),{command:!0})}return{go:Hi[p]??`#/${p}`,command:!0}}return c.split(" ").length<=5&&kt(c,"hello","hi","hey","hola","buenas","buenos dias","buenas tardes","buenas noches","good morning","good evening")?ft(s("reply.intro"),{intent:"hello"}):kt(c,"the orb","orb","esfera","la orb","bola")?ft(f==="es"?{text:"Aqu\xED est\xE1 la Orb. Prueba sus veinte versiones.",lang:"es"}:oo(),{go:`#/products/${ut[0].id}`,quiet:!0}):ft(s("reply.unknown"),{intent:"fallback"})}var Ao=()=>!!Ia,_i=/^#\/(products(\/[a-z0-9-]+(\?variant=[a-z0-9-]+)?)?|templates(\/[a-z0-9-]+)?|studio|sound|membership|account|licence)?$/;async function qo(e,a,{timeout:n=8e3}={}){if(!Ia)throw new Error("disabled");let o=new AbortController,c=setTimeout(()=>o.abort(),n);try{let f=await fetch(Ia,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({messages:e,page:a}),signal:o.signal});if(!f.ok)throw new Error(`http ${f.status}`);let s=await f.json(),u=typeof s.say=="string"?s.say.trim().slice(0,600):"";if(!u)throw new Error("empty");return{say:u,go:typeof s.go=="string"&&_i.test(s.go)?s.go:void 0}}finally{clearTimeout(c)}}var zo={},Oo={member:""},Ro="",Io=e=>"",Ar=e=>(location.assign(e),!0),bt={get enabled(){return!1},canCheckout:e=>!!e.length&&e.every(a=>Io(a.id)),canSubscribe:e=>!!!1,canRestore:()=>!!!1,checkout(e){return bt.canCheckout(e)?(Ar(Io(e[0].id)),e[0].id):null},subscribe(e){return bt.canSubscribe(e)?Ar(Oo[e]):!1},restore(){return bt.canRestore()?Ar(Ro):!1}};var Ue={saved:"lightorb:saved",designs:"lightorb:designs",profile:"lightorb:profile"},Tt=(e,a)=>{try{return JSON.parse(localStorage.getItem(e))??a}catch{return a}},Ta=(e,a)=>{try{return localStorage.setItem(e,JSON.stringify(a)),!0}catch{return!1}},ze={saved:()=>Tt(Ue.saved,[]),isSaved:(e,a)=>Tt(Ue.saved,[]).some(n=>n.type===e&&n.id===a),toggleSaved(e,a,n,o){let c=Tt(Ue.saved,[]),f=c.findIndex(s=>s.type===e&&s.id===a);return f>=0?c.splice(f,1):c.unshift({type:e,id:a,name:n,href:o,at:new Date().toISOString()}),Ta(Ue.saved,c),f<0},designs:()=>Tt(Ue.designs,[]),design:e=>Tt(Ue.designs,[]).find(a=>a.id===e),saveDesign(e){let a=Tt(Ue.designs,[]),n=a.findIndex(o=>o.id===e.id);return n>=0?a[n]=e:a.unshift(e),Ta(Ue.designs,a.slice(0,40))},renameDesign(e,a){let n=Tt(Ue.designs,[]),o=n.find(c=>c.id===e);o&&(o.name=a,Ta(Ue.designs,n))},deleteDesign(e){Ta(Ue.designs,Tt(Ue.designs,[]).filter(a=>a.id!==e))},profile:()=>Tt(Ue.profile,null),setProfile:e=>Ta(Ue.profile,e)},Po=[["profile","Profile"],["designs","My Designs"],["saved","Saved"],["downloads","Downloads"]],Yi='<p class="note">Your designs and saved items are kept in this browser. Accounts that sync across devices come later; your early-access email will carry over.</p>';function ca(e,a,n="profile"){let{esc:o,audio:c}=a;Po.some(u=>u[0]===n)||(n="profile");let f=ze.profile();e.innerHTML=`
    <section class="dest acct">
      <header class="dh"><p class="kicker">Account${f?.email?" \xB7 Early access":""}</p><h1>${f?.name?o(f.name):"Your space"}</h1>${Yi}</header>
      <nav class="segbar acct-tabs" aria-label="Account">${Po.map(([u,p])=>`<a class="pill" href="#/account/${u}" ${u===n?'aria-current="page" aria-pressed="true"':""}>${p}</a>`).join("")}</nav>
      <div class="acct-body" data-body></div>
      ${Ea()}
    </section>${a.footer()}`;let s=e.querySelector("[data-body]");if(n==="profile"){let u=f?.email;s.innerHTML=`${u?"":`<div class="joincta glass"><h2>Join early access</h2><p>Free. Leave your email and we tell you when new pieces and Studio updates open. Your designs stay on this device either way.</p>
        <div class="acts eq"><a class="gb small primary" href="#/signup">Join early access</a><a class="gb small" href="#/signin">I already joined</a></div></div>`}
      <form class="form" data-prof>
        <label class="fl"><span>Display name</span><input class="gi" name="name" value="${o(f?.name||"")}" placeholder="How the site greets you" maxlength="40" autocomplete="name"></label>
        <div class="acts"><button class="gb primary" type="submit">Save on this device</button>${f?'<button class="gb" type="button" data-forget>Sign out on this device</button>':""}</div>
        <p class="note" data-profmsg role="status" aria-live="polite"></p>
      </form>
      <div class="kv"><span>Email</span><b>${u?o(f.email):"Not joined yet"}</b>${f?.joined?`<span>Joined</span><b>${new Date(f.joined).toLocaleDateString()}</b>`:""}<span>Plan</span><b>${"Early access \xB7 free"}</b><span>Sound</span><b>${c.prefs.master?"On":"Off"}</b><span>Narration</span><b>${c.prefs.guide?"On":"Off"}</b><span>Guide voice</span><b><a href="#/sound">${o(yt(c.prefs.voice).name)}</a></b></div>`,s.querySelector("[data-prof]").addEventListener("submit",p=>{p.preventDefault();let y=p.target.name.value.trim(),i={...ze.profile()??{},name:y};y||delete i.name,ze.setProfile(Object.keys(i).length?i:null),c.sfx("confirm"),ca(e,a,"profile"),e.querySelector("[data-profmsg]").textContent="Saved on this device."}),s.querySelector("[data-prof] .gi").addEventListener("input",p=>{p.isTrusted&&c.sfx("type")}),s.querySelector("[data-forget]")?.addEventListener("click",()=>{if(confirm("Forget your name and email on this browser? Your designs and saved items stay.")){try{localStorage.removeItem(Ue.profile)}catch{}ca(e,a,"profile")}})}if(n==="designs"){let u=ze.designs();s.innerHTML=u.length?`<div class="dgrid">${u.map(p=>`<article class="dc" data-d="${p.id}">
        <a class="dc-img" href="#/studio?design=${p.id}" aria-label="Open ${o(p.name)} in Studio">${p.thumb?`<img src="${p.thumb}" alt="">`:""}</a>
        <input class="dc-n gi" value="${o(p.name)}" aria-label="Design name" maxlength="48">
        <p class="note">${o(p.familyName)} \xB7 ${new Date(p.at).toLocaleDateString()}</p>
        <div class="acts"><a class="gb small primary" href="#/studio?design=${p.id}">Open in Studio</a><button class="gb small" type="button" data-del>Delete</button></div></article>`).join("")}</div>`:'<div class="empty"><h2>No designs yet</h2><p>Designs you save in Studio appear here, with a picture of each one.</p><a class="gb primary" href="#/studio">Open Studio</a></div>',s.querySelectorAll("[data-d]").forEach(p=>{let y=p.dataset.d,i=p.querySelector(".dc-n");i.addEventListener("change",()=>{ze.renameDesign(y,i.value.trim()||"Untitled design"),c.sfx("confirm")}),i.addEventListener("input",j=>{j.isTrusted&&c.sfx("type")}),p.querySelector("[data-del]").addEventListener("click",()=>{confirm(`Delete \u201C${i.value}\u201D? This cannot be undone.`)&&(ze.deleteDesign(y),c.sfx("close"),ca(e,a,"designs"))})})}if(n==="saved"){let u=ze.saved();s.innerHTML=u.length?`<ul class="slist">${u.map((p,y)=>`<li><span class="kicker">${p.type}</span><a href="${p.href}">${o(p.name)}</a><button class="pill" type="button" data-rm="${y}">Remove</button></li>`).join("")}</ul>`:'<div class="empty"><h2>Nothing saved yet</h2><p>Save products, templates and sounds to find them here.</p><a class="gb primary" href="#/products">Explore products</a></div>',s.querySelectorAll("[data-rm]").forEach(p=>p.addEventListener("click",()=>{let y=u[+p.dataset.rm];ze.toggleSaved(y.type,y.id),c.sfx("close"),ca(e,a,"saved")}))}n==="downloads"&&(s.innerHTML='<div class="empty"><h2>Everything is free right now</h2><p>During early access there is nothing to buy: take The Orb with its embed code from its product page, and export your own versions from Studio \u2014 exports save directly to your computer.</p><div class="acts eq"><a class="gb primary" href="#/products/orb">Get The Orb</a><a class="gb" href="#/studio">Open Studio</a></div></div>',s.querySelector("[data-restore]")?.addEventListener("click",()=>bt.restore()))}function qr(e,a,n){let o=n==="up",c=ze.profile();e.innerHTML=`
    <section class="dest sign">
      <header class="dh"><p class="kicker">Early access \xB7 free</p><h1>${o?"Join early access":"Welcome back"}</h1>
        <p class="dh-l">${o?"Everything is free while we build it. Leave your email and we write when new pieces and Studio updates open. Your designs are saved on this device.":"There are no passwords yet. Enter the email you joined with to use it on this device; your designs from another browser stay there until accounts sync."}</p></header>
      ${c?.email?`<div class="joined glass"><p class="kicker">Already in</p><h2>You joined as ${a.esc(c.email)}</h2><div class="acts eq"><a class="gb small primary" href="#/studio">Open Studio</a><a class="gb small" href="#/account">Your account</a></div></div>`:""}
      <form class="form" data-sign novalidate${c?.email?" hidden":""}>
        ${o?'<label class="fl"><span>Name <i class="opt">(optional)</i></span><input class="gi" name="name" autocomplete="name" maxlength="40" placeholder="How the site greets you"></label>':""}
        <label class="fl"><span>Email</span><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"></label>
        <div class="acts"><button class="gb primary" type="submit"><span>${o?"Join early access":"Continue"}</span></button><a class="gb" href="#/studio">Open Studio without joining</a></div>
        <p class="note" data-signmsg role="status" aria-live="polite">We only keep your email${o?" and name":""} to tell you about new pieces and Studio updates. See <a href="#/privacy">privacy</a>; leave any time.</p>
        <p class="note">${o?'Already joined? <a href="#/signin">Use your email here</a>':'New here? <a href="#/signup">Join early access</a>'}</p>
      </form>
      ${Ea()}
    </section>${a.footer()}`;let f=e.querySelector("[data-sign]");f.addEventListener("submit",async s=>{s.preventDefault();let u=f.querySelector("[data-signmsg]"),p=f.querySelector("button[type=submit]"),y=f.email.value.trim();if(!Fa(y)){u.textContent="Please enter a valid email address.",f.email.focus();return}p.disabled=!0,p.setAttribute("aria-busy","true");let i=await xr({email:y,name:f.name?.value,source:"signup"});if(!i.ok){u.textContent=i.error,p.disabled=!1,p.removeAttribute("aria-busy");return}a.audio.sfx("confirm");let j=document.createElement("div");j.innerHTML=vr(y);let D=j.firstElementChild;f.replaceWith(D),D.focus({preventScroll:!0})})}function jo(e,a){let n=Wr,o=ze.profile(),c=n.plans.map(f=>`<article class="plan soon"><p class="kicker">After launch \xB7 preview</p><h2>${f.name}</h2><p>${f.line}</p><ul>${f.points.map(s=>`<li>${s}</li>`).join("")}</ul></article>`).join("");e.innerHTML=`
    <section class="dest memb">
      <header class="dh"><p class="kicker">Membership</p><h1>Early access is free</h1><p class="dh-l">Everything is open while we build it: Studio, The Orb with its embed code, and each piece as it arrives. What you take now stays free to use. Paid plans come later, and early users get a launch discount.</p></header>
      <article class="plan em now"><p class="kicker">Current plan</p><h2>Early access \u2014 free</h2><p>Everything on the site, for everyone.</p>
        <ul><li>Studio: shape light, material and movement; save and export your designs</li><li>The Orb in twenty versions, with its embed code</li><li>New pieces as they open, free while in early access</li><li>A launch discount on paid plans</li></ul>
        <div class="acts eq">${o?.email?'<span class="pill" aria-disabled="true">You\u2019re in</span>':'<a class="gb primary" href="#/signup">Join early access</a>'}<a class="gb" href="#/studio">Open Studio</a></div></article>
      <h2 class="plans-h">Plans after launch</h2><p class="note plans-n">A preview of how The Light Orb will work after early access. Prices are not set yet; early users get a launch discount.</p>
      <div class="plans">${c}</div>
      ${Ea()}
    </section>${a.footer()}`,e.querySelectorAll("[data-join]").forEach(f=>f.addEventListener("click",()=>bt.subscribe(f.dataset.join)))}var Ui=`<svg class="wm-o" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><defs><mask id="wm-counter"><rect width="100" height="100" fill="#fff"/>
  <path fill="#000" d="M49 9C31 9 23 29 23 50c0 24 12 42 30 42 15 0 23-9 23-20 0-9-7-12-11-21-4-9-2-19 0-27 1-9-5-15-16-15z"/></mask></defs>
  <circle cx="50" cy="50" r="46" fill="currentColor" mask="url(#wm-counter)"/></svg>`,zr=`<span class="wm-t">The Light</span>${Ui}<span class="wm-t wm-rb">rb</span>`;var No="lightorb:cart",Xa=()=>{try{return JSON.parse(localStorage.getItem(No))??[]}catch{return[]}},Do=e=>{try{localStorage.setItem(No,JSON.stringify(e))}catch{}Or.forEach(a=>a(e))},Or=new Set,tt={items:Xa,has:e=>Xa().some(a=>a.id===e),add(e){let a=Xa();a.some(n=>n.id===e.id)||(a.push({...e,at:new Date().toISOString()}),Do(a))},remove(e){Do(Xa().filter(a=>a.id!==e))},toggle(e){return tt.has(e.id)?(tt.remove(e.id),!1):(tt.add(e),!0)},on(e){return Or.add(e),()=>Or.delete(e)}};var Rr="Carla Tres Garc\xEDa",Ho="39934017Z",Bo="carlatresgarcia@gmail.com",Vi="14 October 2026",Fo="Avenida Duque de Loul\xE9 91, Lisboa, Portugal",Ma=`<a href="mailto:${Bo}">${Bo}</a>`,Wi={privacy:{kicker:"Privacy",title:"Privacy",lede:"What this site collects, why, and what you can ask for. Short version: very little, and nothing is sold.",body:`
    <h2>Who is responsible</h2>
    <p>The Light Orb is run by ${Rr} (NIF ${Ho}), a sole trader (the data controller). Address: ${Fo}. Contact: ${Ma}.</p>
    <h2>Visiting the site</h2>
    <p>We count visits with GoatCounter, a privacy-friendly analytics service that sets no cookies and does not track you across sites. It records the page address, referrer, browser type, screen size and an approximate country, without storing your IP address. If your browser sends Do Not Track or Global Privacy Control, nothing is counted at all. Legal basis: our legitimate interest in knowing which pages are used.</p>
    <h2>Early access and the waitlist</h2>
    <p>If you join early access (or the waitlist) we keep your email address, the name you give if any, the date, where you signed up (for example "footer") and your browser language \u2014 nothing else. It is stored in Cloudflare Workers KV, the owner receives one notification email about each new sign-up (sent through Resend), and it is used only to tell you when pieces and Studio updates open. Your display name, designs and saved items stay in your browser. Legal basis: your consent, which you can withdraw at any time by writing to ${Ma}; we then delete your address.</p>
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
    <p>Under the GDPR you can ask for access, correction, deletion, restriction, portability, or object to processing, and withdraw consent, by writing to ${Ma}. You can also complain to the Spanish Data Protection Agency (AEPD, aepd.es).</p>`},terms:{kicker:"Terms",title:"Terms of use",lede:"The rules for using this website.",body:`
    <h2>Who we are</h2>
    <p>This website is run by ${Rr} (NIF ${Ho}), a sole trader. Address: ${Fo}. Contact: ${Ma}.</p>
    <h2>Using the site</h2>
    <p>You may browse the site, try the previews, and use Studio and the guide Orb for your own personal or professional exploration. Please do not misuse it: no attempts to break, overload or scrape it, and no unlawful or abusive use of the guide Orb.</p>
    <h2>The guide Orb</h2>
    <p>The Orb's replies are generated automatically and may be incomplete or wrong. They are not professional advice and do not bind us; prices and terms are only those shown on the site.</p>
    <h2>Content and pieces</h2>
    <p>The design, text, images, sounds and code of this site belong to ${Rr} unless stated otherwise. Using the free Orb and any piece you obtain is governed by the <a href="#/licence">licence</a>.</p>
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
    <p>Code is provided as it is. Questions about a use not covered here: ${Ma}.</p>`}},Go={privacy:"Privacy",terms:"Terms of use",licence:"Licence"};function Za(e,a,n){let o=Wi[n];e.innerHTML=`
    <section class="dest legal">
      <header class="dh"><p class="kicker">${o.kicker}</p><h1>${o.title}</h1><p class="dh-l">${o.lede}</p></header>
      <div class="legal-b">${o.body}
        <p class="note">Last updated ${Vi}. <a href="#/privacy">Privacy</a> \xB7 <a href="#/terms">Terms</a> \xB7 <a href="#/licence">Licence</a></p></div>
    </section>${a.footer()}`}var Aa=[{id:"clear",name:"Clear",line:"Thick clear glass with a bright lower rim, for light pages.",dark:!1,v:{page:"#F3F3F1",ink:"#262827",muted:"#6b6f6c",line:"rgba(38,40,39,.07)",body:"linear-gradient(180deg,rgba(255,255,255,.96),rgba(246,247,246,.72) 52%,rgba(226,230,228,.78))",edge:"#ffffff",depth:"rgba(130,142,138,.5)",shadow:"rgba(38,40,39,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(176,212,228,.6)",tint:"linear-gradient(180deg,#43484a,#1f2322 60%,#2c302f)",tintInk:"#f4f5f3",fill:"#2a2e2d",well:"linear-gradient(180deg,rgba(214,218,216,.7),rgba(246,247,246,.9))",orb:"radial-gradient(circle at 50% 62%,rgba(214,232,240,.55),rgba(255,255,255,.22) 58%,rgba(186,200,206,.65))",squish:"1"}},{id:"smoke",name:"Smoke",line:"Smoked glass that darkens to the rim, for dark pages.",dark:!0,v:{page:"#141716",ink:"#ECEEEB",muted:"#9DA29F",line:"rgba(255,255,255,.08)",body:"linear-gradient(180deg,rgba(255,255,255,.17),rgba(255,255,255,.05) 50%,rgba(0,0,0,.22))",edge:"rgba(255,255,255,.38)",depth:"rgba(0,0,0,.6)",shadow:"rgba(0,0,0,.75)",spec:"rgba(255,255,255,.4)",caustic:"rgba(150,186,200,.4)",tint:"linear-gradient(180deg,#fbfbfa,#d6d9d6)",tintInk:"#161918",fill:"#e7e9e6",well:"linear-gradient(180deg,rgba(0,0,0,.45),rgba(255,255,255,.04))",orb:"radial-gradient(circle at 50% 62%,rgba(120,130,136,.55),rgba(40,44,46,.35) 58%,rgba(10,12,12,.75))",squish:"1"}},{id:"chrome",name:"Chrome",line:"Liquid chrome that folds the room it reflects.",dark:!1,v:{page:"#E2E4E3",ink:"#1c1e1d",muted:"#5d6260",line:"rgba(0,0,0,.1)",body:"linear-gradient(180deg,#ffffff 0%,#c3c8c7 24%,#f5f6f6 46%,#8f9594 72%,#e4e7e6 100%)",edge:"#ffffff",depth:"rgba(60,66,64,.6)",shadow:"rgba(30,34,33,.42)",spec:"rgba(255,255,255,1)",caustic:"rgba(255,255,255,.7)",tint:"linear-gradient(180deg,#6c7271 0%,#1d201f 48%,#4a4f4e 100%)",tintInk:"#f3f4f3",fill:"#3a3f3e",well:"linear-gradient(180deg,#a9aeac,#eef0ef)",orb:"conic-gradient(from 210deg,#fdfdfd,#8e9493,#f2f3f3,#5d6362,#e9ebea,#a3a8a7,#fdfdfd)",squish:"1"}},{id:"porcelain",name:"Porcelain",line:"Opaque glazed porcelain with a warm greige accent.",dark:!1,v:{page:"#EFEDE8",ink:"#2e2c29",muted:"#6e6a63",line:"rgba(60,50,40,.08)",body:"linear-gradient(180deg,#fffefb,#f4f1eb 58%,#e5e0d6)",edge:"#ffffff",depth:"rgba(170,158,140,.45)",shadow:"rgba(80,68,52,.26)",spec:"rgba(255,255,255,.9)",caustic:"rgba(207,200,189,.55)",tint:"linear-gradient(180deg,#ddd6ca,#bdb3a3)",tintInk:"#2e2c29",fill:"#bfb5a5",well:"linear-gradient(180deg,#e2ddd3,#faf8f4)",orb:"radial-gradient(circle at 50% 60%,#fbf9f5,#ece7de 60%,#d2cabc)",squish:"1"}},{id:"gel",name:"Gel",line:"Soft sea-glass gel that gives a little when you press it.",dark:!1,v:{page:"#E8EEEC",ink:"#1f302b",muted:"#5b6f69",line:"rgba(30,70,60,.08)",body:"linear-gradient(180deg,rgba(244,252,249,.94),rgba(198,228,218,.62) 56%,rgba(156,200,186,.7))",edge:"rgba(255,255,255,.95)",depth:"rgba(70,124,108,.5)",shadow:"rgba(30,70,60,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(130,226,196,.65)",tint:"linear-gradient(180deg,#a6dccb,#5d9c89)",tintInk:"#0f2a22",fill:"#6aa894",well:"linear-gradient(180deg,rgba(170,206,194,.6),rgba(240,250,246,.9))",orb:"radial-gradient(circle at 50% 60%,rgba(190,240,222,.75),rgba(150,214,192,.45) 58%,rgba(90,160,138,.7))",squish:"1.6"}},{id:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud.",dark:!1,v:{page:"#F2EEEE",ink:"#33282b",muted:"#7a6a6e",line:"rgba(80,40,50,.07)",body:"linear-gradient(180deg,rgba(255,252,252,.96),rgba(246,232,236,.72) 54%,rgba(230,206,214,.75))",edge:"#ffffff",depth:"rgba(190,140,156,.45)",shadow:"rgba(90,50,62,.26)",spec:"rgba(255,255,255,.95)",caustic:"rgba(255,170,198,.6)",tint:"linear-gradient(180deg,#f3c9d6,#d9909f)",tintInk:"#3a1d25",fill:"#df9fb0",well:"linear-gradient(180deg,rgba(226,206,212,.7),rgba(255,250,251,.9))",orb:"radial-gradient(circle at 46% 58%,rgba(255,188,208,.85),rgba(255,236,242,.5) 50%,rgba(222,190,200,.7))",squish:"1.2"}}],Ki=e=>Aa.find(a=>a.id===e)??Aa[0],Ji=e=>Object.entries(e.v).map(([a,n])=>`--cc-${a.replace(/[A-Z]/g,o=>"-"+o.toLowerCase())}:${n};`).join(`
  `),Xi=`
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
`,Zi=`
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
`,Yo='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',Qi={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row">
    <button class="cc-btn cc-glass primary" type="button">Continue</button>
    <button class="cc-btn cc-glass" type="button">Secondary</button>
    <button class="cc-btn cc-glass round" type="button" aria-label="Confirm">${Yo}</button>
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
</div>`},en={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row"><button class="cc-btn cc-glass primary" type="button" tabindex="-1">Continue</button><button class="cc-btn cc-glass round" type="button" tabindex="-1" aria-label="Confirm">${Yo}</button></div>
  <div class="cc-row"><button class="cc-switch cc-glass" role="switch" type="button" tabindex="-1" aria-checked="true" aria-label="Switch"><span class="cc-knob"></span></button><input class="cc-range" type="range" value="62" tabindex="-1" aria-label="Level" style="width:150px"></div>
</div>`,"orb-slider":'<div class="cc-stage"><div class="cc-slide cc-glass" style="--h:64px;width:280px" aria-hidden="true"><span class="cc-trail"></span><span class="cc-label">slide to enter</span><span class="cc-orb"></span></div></div>'},_o={"crystal-controls":"Crystal Controls","orb-slider":"Orb Slider"};function Qa(e,a,{mini:n=!1}={}){let o=Ki(a);return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${_o[e]} \xB7 ${o.name} \u2014 The Light Orb</title>
<!-- ${_o[e]} \xB7 ${o.name}. Free for personal and commercial use (The Light Orb licence).
     Change the material by editing the --cc-* variables below. -->
<style>
:root{
  ${Ji(o)}
}${Xi}</style>
</head>
<body${n?' class="mini"':""}>
${(n?en:Qi)[e]}
<script>${Zi}<\/script>
</body>
</html>
`}var Mt=(e,a=0,n=1)=>Math.min(n,Math.max(a,e)),pa=(e,a,n)=>e+(a-e)*n,At=e=>{let a=Mt(e);return a*a*(3-2*a)},tn=(e,a,n,o,c)=>At((e-a)/(n-a))*(1-At((e-o)/(c-o))),de=e=>String(e).replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),Zt={get:(e,a)=>{try{return JSON.parse(sessionStorage.getItem(e))??a}catch{return a}},set:(e,a)=>{try{sessionStorage.setItem(e,JSON.stringify(a))}catch{}}},he={play:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>',replay:'<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/></svg>',prev:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',mute:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M4.5 20c1.4-3.6 4.2-5.4 7.5-5.4s6.1 1.8 7.5 5.4"/></svg>',heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/></svg>',back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',down:'<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',bag:'<svg viewBox="0 0 24 24"><path d="M5.5 8.5h13l-1 11h-11z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5.5" y="10.5" width="13" height="9" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',orb:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="11" cy="15" r="1.6" fill="currentColor" stroke="none"/></svg>'},Ir={pieces:"products",materials:"products"};function Uo(e){let{orb:a,reduced:n}=e,o=Jr(),c=document.createElement("style");c.textContent=io+no,document.head.append(c),document.documentElement.classList.add("lo-on");let f=Lo(e),s=Pr("main","lo");s.setAttribute("aria-label","The Light Orb"),s.tabIndex=-1;let u=Pr("div","lo-top");document.body.append(s,u),u.innerHTML=`
    <header class="hd" data-hd>
      <a class="wm" href="#/" aria-label="The Light Orb \u2014 Home" data-home>${zr}</a>
      <nav class="nav" aria-label="Main">${Ye.map(t=>`<a href="${t.route}" data-nav="${t.id}">${t.label}</a>`).join("")}</nav>
      <div class="hd-r">
        <a class="nav-m" href="#/membership" data-nav="membership">Membership</a>
        <div class="snd">
          <button class="gb gc small" type="button" data-sound aria-haspopup="dialog" aria-expanded="false" aria-label="Sound settings">${he.mute}</button>
          <div class="menu pane" role="dialog" aria-label="Sound" data-menu hidden>
            <label class="mrow"><span>Sound</span><button class="gsw" role="switch" data-pref="master" aria-checked="false" aria-label="Sound"></button></label>
            <label class="mrow"><span>Narration</span><button class="gsw" role="switch" data-pref="guide" aria-checked="true" aria-label="Narration"></button></label>
            <label class="mrow"><span>Interface sounds</span><button class="gsw" role="switch" data-pref="sfx" aria-checked="true" aria-label="Interface sounds"></button></label>
            <div class="mrow col"><span>Volume <output data-volout></output></span><input class="grange" type="range" min="0" max="1" step=".01" data-volume aria-label="Volume"></div>
          </div>
        </div>
        <div class="cartw"${" hidden"}><button class="gb gc small" type="button" data-cartbtn aria-haspopup="dialog" aria-expanded="false" aria-label="Cart">${he.bag}<span class="cart-n" data-cartn hidden></span></button>
          <div class="menu pane cart-p" role="dialog" aria-label="Cart" data-cartp hidden></div></div>
        <a class="gb gc small" href="#/account" aria-label="Account" data-nav="account">${he.user}</a>
      </div>
    </header>
    <button class="guide-hit" type="button" data-guide aria-label="Talk with the Orb"></button>
    <div class="caption" data-caption aria-live="polite"></div>`;let p=u.querySelector("[data-hd]"),y=u.querySelector("[data-caption]"),i=u.querySelector("[data-guide]"),j=u.querySelector("[data-sound]"),D=u.querySelector("[data-menu]"),E=t=>{D.hidden=!t,j.setAttribute("aria-expanded",String(t)),o.sfx(t?"open":"close"),t&&D.querySelector(".gsw").focus()};j.addEventListener("click",()=>E(D.hidden)),document.addEventListener("pointerdown",t=>{!D.hidden&&!t.target.closest(".snd")&&E(!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!D.hidden&&(E(!1),j.focus())}),u.querySelectorAll("[data-pref]").forEach(t=>t.addEventListener("click",()=>{let l=t.dataset.pref;o.set({[l]:!o.prefs[l]}),o.sfx("select")}));let ce=u.querySelector("[data-volume]");ce.addEventListener("input",()=>{o.set({volume:+ce.value}),o.sfx("level",+ce.value)});function q(){let t=o.prefs;u.querySelectorAll("[data-pref]").forEach(m=>m.setAttribute("aria-checked",String(!!t[m.dataset.pref]))),ce.value=t.volume??.8,ce.style.setProperty("--p",`${(t.volume??.8)*100}%`),u.querySelector("[data-volout]").textContent=`${Math.round((t.volume??.8)*100)}%`,j.innerHTML=t.master?he.sound:he.mute,j.setAttribute("aria-label",t.master?"Sound on \u2014 settings":"Sound off \u2014 settings"),s.querySelectorAll("[data-enable]").forEach(m=>{m.hidden=t.master});let l=o.state.clip?.split(".")[0];if(Da[l]&&l!=="home"){let m=o.state.kind==="guide"&&["playing","loading"].includes(o.state.status);y.textContent=m?Da[l]:"",y.classList.toggle("on",m)}}o.on(q);let ke=u.querySelector("[data-cartbtn]"),z=u.querySelector("[data-cartp]"),we=u.querySelector("[data-cartn]");function Se(){let t=tt.items();we.hidden=!t.length,we.textContent=t.length,z.innerHTML=`<p class="kicker">Cart</p>${t.length?`<ul class="cart-l">${t.map(l=>`<li><a href="${l.href}">${de(l.name)}</a><button class="pill" type="button" data-cartrm="${l.id}">Remove</button></li>`).join("")}</ul>`:'<p class="note">Your cart is empty.</p>'}
      ${bt.canCheckout(t)?'<button class="gb primary" type="button" data-checkout>Checkout</button>':'<button class="gb primary" type="button" disabled>Checkout opens soon</button><p class="note">No payment can be taken yet; items stay in this browser.</p>'}`,z.querySelector("[data-checkout]")?.addEventListener("click",()=>{let l=bt.checkout(tt.items());l&&tt.remove(l)}),z.querySelectorAll("[data-cartrm]").forEach(l=>l.addEventListener("click",()=>{tt.remove(l.dataset.cartrm),o.sfx("close")}))}tt.on(Se),Se();let X=t=>{z.hidden=!t,ke.setAttribute("aria-expanded",String(t)),o.sfx(t?"open":"close")};ke.addEventListener("click",()=>X(z.hidden)),document.addEventListener("pointerdown",t=>{!z.hidden&&!t.target.closest(".cartw")&&X(!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!z.hidden&&(X(!1),ke.focus())});let te={emission:1,voice:ur.voice},G=()=>{te=Na(a,wt(ur)),a.setRibbon?.(0)};G();let re=()=>({home:"home",products:"products",templates:"templates",studio:"studio",sound:"sound"})[b.name],fe=()=>matchMedia("(pointer: coarse)").matches&&Math.min(innerWidth,innerHeight)<820,K=t=>{try{return localStorage.getItem(t)}catch{return null}},Te=t=>{try{localStorage.setItem(t,"1")}catch{}},Y=To(),ue=null,Z=document.createElement("style");Z.textContent=`.orb-ask{position:fixed;left:50%;bottom:calc(18px + env(safe-area-inset-bottom,0px));transform:translate(-50%,6px);z-index:30;display:flex;align-items:center;gap:8px;width:min(420px,calc(100vw - 32px));box-sizing:border-box;
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
@media (pointer:coarse) and (max-width:820px){.caption{font-size:13.5px;line-height:1.35}}`,document.head.append(Z);let Me='<svg viewBox="0 0 24 24"><rect x="9" y="3.5" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v2.5"/></svg>',St='<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5"/></svg>',xe=Pr("form","orb-ask");xe.hidden=!0,xe.setAttribute("role","search"),xe.setAttribute("aria-label","Ask the Orb"),xe.innerHTML=`<span class="st" data-st aria-live="polite"></span><input type="text" data-q placeholder="${Y==="es"?"Pregunta a la Orb\u2026":"Ask the Orb\u2026"}" aria-label="Ask the Orb" autocomplete="off" enterkeyhint="send" maxlength="300">
    <button type="button" data-mic aria-label="Speak" aria-pressed="false"${Mr?"":" hidden"}>${Me}</button><button type="submit" aria-label="Send">${St}</button>`,u.append(xe);let He=xe.querySelector("[data-st]"),k=xe.querySelector("[data-q]"),$=xe.querySelector("[data-mic]");i.setAttribute("aria-label","Talk with the Orb");let P=!Mr,R=()=>{xe.hidden=!1,document.body.classList.add("orb-asking"),requestAnimationFrame(()=>xe.classList.add("on"))},B=()=>{F(),xe.classList.remove("on"),xe.hidden=!0,document.body.classList.remove("orb-asking"),k.blur()};function F(){if(J){let t=J;J=null,t.abort()}$.setAttribute("aria-pressed","false"),He.textContent=""}function ie(){P||J||(o.stop(),ue=null,He.textContent=Y==="es"?"Escuchando\u2026":"Listening\u2026",$.setAttribute("aria-pressed","true"),J=Co({lang:Y==="es"?"es-ES":/^en/i.test(navigator.language)?navigator.language:"en-US",onresult:t=>{He.textContent="",k.value=t},onerror:t=>{J=null,$.setAttribute("aria-pressed","false"),He.textContent="",(t==="not-allowed"||t==="service-not-allowed"||t==="unsupported")&&(Le("mic_denied"),P=!0,$.hidden=!0,V(ia("reply.mic",Y),"answer"),fe()||k.focus())},onend:t=>{J&&(J=null,$.setAttribute("aria-pressed","false"),He.textContent="",k.value="",t.trim()&&$e(t))}}),J||($.setAttribute("aria-pressed","false"),He.textContent=""))}$.addEventListener("click",()=>{J?F():ie()}),k.addEventListener("input",()=>{J&&F()}),xe.addEventListener("submit",t=>{t.preventDefault();let l=k.value.trim();k.value="",F(),l&&(Le("orb_typed"),$e(l))}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!xe.hidden&&B()}),document.addEventListener("pointerdown",t=>{!xe.hidden&&!t.target.closest(".orb-ask,[data-guide]")&&!k.value&&!J&&B()});let J=null,Ee=null;if(i.addEventListener("click",()=>{if(o.prefs.master||o.set({master:!0}),o.prefs.guide||o.set({guide:!0}),Fe=performance.now()/1e3,Le("orb_tap"),J){F();return}if(o.playing){o.stop(),ue=null,Re("");return}o.sfx("select");let t=!K("lo:orb:intro");if(R(),t){Te("lo:orb:intro"),Te("lo:orb:greet"),Le("orb_intro"),V(ia("reply.intro",Y),"answer");return}P?fe()||k.focus():ie()}),!K("lo:orb:greet")){let t=l=>{l.target.closest?.("[data-guide],.orb-ask")||(removeEventListener("pointerdown",t,!0),fe()&&setTimeout(()=>{K("lo:orb:greet")||ue||J||(Te("lo:orb:greet"),V(ia("reply.greet",Y),"answer"))},900))};addEventListener("pointerdown",t,!0)}function V(t,l="answer"){if(!t?.text)return;za(t.text),Fe=performance.now()/1e3,ue=l,o.say(t.text,{id:t.lang==="es"?void 0:t.id??void 0,lang:t.lang,onend:()=>{ue===l&&(ue=null)}})||(ue=null)}let ae=[],at=0,rt=(t,l)=>{for(ae.push({role:t,content:l});ae.length>12;)ae.shift();for(;ae.length&&ae[0].role!=="user";)ae.shift()};function Et(){let t=ne(),l=t.name==="products"&&t.id?ut.find(m=>m.id===t.id):null;return{route:location.hash||"#/",title:document.title,presentation:Ge("en").text,product:l?.name,variant:l?t.query.variant||(l.id==="orb"?"clear":void 0):void 0,lang:Y}}async function $e(t){Y=Ka(t,Y);let l=Mo(t,{here:b.name,presentation:Ge,lang:Y});if(Le(l.intent==="fallback"?"orb_fallback":"orb_command",{intent:l.intent||(l.stop?"stop":l.back?"back":l.go?`go:${l.go.split("?")[0].replace("#/","")}`:"answer")}),!l.command&&l.intent!=="hello"&&Ao()&&t.trim()){let m=++at;Re("\u2026"),rt("user",t.trim());try{let h=await qo(ae.slice(),Et());return m!==at?void 0:(rt("assistant",h.say),ot({say:h.say,go:h.go,lang:Ka(h.say,Y)}))}catch{if(m!==at)return;ae.pop()}}ot(l)}function ot(t){if(t.stop){o.stop(),ue=null,Re("");return}if(t.back&&history.back(),t.go&&location.hash!==t.go){Ee=t.say?{text:t.say,id:t.id,lang:t.lang}:null,location.hash=t.go;return}t.say?V({text:t.say,id:t.id,lang:t.lang},"answer"):t.go||Re("")}function Re(t){clearTimeout(rr),y.textContent=t,y.classList.toggle("on",!!t),t||q()}let Fe=-99,Xe=0,Ge=(t=Y)=>eo(t,b.name,b.id);function it(){V(Ge(),"arrival")}function Pe(t){let l=Ee;Ee=null,J&&!l&&F(),setTimeout(()=>{if(location.hash===t){if(l){V(l,"answer");return}fe()||ue==="answer"||J||it()}},450)}let b={name:""},M=null,A=[],W={products:"Products",templates:"Templates",studio:"Studio",sound:"Sound",membership:"Membership",account:"Account",signin:"Sign in",signup:"Sign up",...Go};function ne(){let[t,l=""]=(location.hash.replace(/^#/,"")||"/").split("?"),m=t.split("/").filter(Boolean),h=Object.fromEntries(new URLSearchParams(l));return{name:Ir[m[0]]||m[0]||"home",id:m[1]||null,query:h,raw:m[0]}}function Q(){let t=ne();if(t.raw&&Ir[t.raw]){location.replace(`#/${Ir[t.raw]}${t.id?"/"+t.id:""}`);return}if(!["home","products","templates","studio","sound","membership","account","signin","signup","privacy","terms","licence"].includes(t.name)){location.replace("#/");return}A.forEach(x=>x()),A=[],ee=null,M&&t.name!=="studio"&&(M.leave(),M=null),f.hide(),Sa(),e.removeBackdrop(Ce.canvas),G();let l=b.name;b=t,document.title=b.name==="home"?"The Light Orb":`${W[b.name]??b.name} \xB7 The Light Orb`,s.className=`lo r-${b.name}`,document.body.dataset.route=b.name,Ur(),b.name==="studio"&&l!=="studio"&&Le("studio_open"),u.querySelectorAll("[data-nav]").forEach(x=>x.toggleAttribute("aria-current",x.dataset.nav===b.name||x.dataset.nav==="account"&&["account","signin","signup"].includes(b.name))),l&&l!==b.name&&o.state.kind&&ue!=="answer"&&(o.stop(),ue=null),({home:nt,products:b.id?Ut:ma,templates:b.id?lt:je,studio:ar,sound:me,membership:()=>jo(s,ge),account:()=>ca(s,ge,b.id),signin:()=>qr(s,ge,"in"),signup:()=>qr(s,ge,"up"),privacy:()=>Za(s,ge,"privacy"),terms:()=>Za(s,ge,"terms"),licence:()=>Za(s,ge,"licence")}[b.name]??nt)(),Ga(s);let h=Zt.get(`lo:scroll:${location.hash}`,null);s.scrollTop=h??0,Pe(location.hash),l&&s.focus({preventScroll:!0})}s.addEventListener("scroll",()=>Zt.set(`lo:scroll:${location.hash}`,s.scrollTop),{passive:!0}),addEventListener("hashchange",Q),u.querySelector("[data-home]").addEventListener("click",t=>{t.preventDefault(),Zt.set("lo:scroll:#/",0),b.name==="home"?s.scrollTo({top:0,behavior:n?"auto":"smooth"}):location.hash="#/"});let ge={page:s,audio:o,ICON:he,esc:de,store:ze,go:t=>{location.hash=t},flash:za,api:e,product:f,footer:()=>$t()},se=Zt.get("lo:sel",0),oe=[],ve=new URLSearchParams(location.search).get("sel");ve&&Zt.set("lo:selv",ve);let Ze=Zt.get("lo:selv","arc")==="grid";function nt(){if(s.innerHTML=`
      <section class="wel" aria-labelledby="hello">
        <div class="wel-copy ${n?"shown":"reveal"}" data-welcopy>
          <h1 id="hello" class="wel-h"><span>Hello.</span></h1>
          <p class="wel-line">A space for creative possibilities.</p>
          <a class="gb primary wel-go" href="#select" data-go>Let\u2019s go</a>
        </div>
        <div class="wel-ctl"><button class="gb small" type="button" data-enable>${he.sound}<span>Enable sound</span></button><a class="tl" href="intro.html">Replay intro</a></div>
      </section>
      <section class="qt" aria-label="Quotation">
        <figure class="qt-fig" data-qt><blockquote><p>${ya.text}</p></blockquote>
          <figcaption>${ya.author} \xB7 <a href="${ya.source}" rel="noopener" target="_blank">${ya.work}</a></figcaption></figure>
      </section>
      <section class="sel${Ze?" sel-grid":""}" id="select" aria-labelledby="sel-t">
        <h2 id="sel-t" class="sel-t">Where would you like to begin?</h2>
        ${Ze?`<nav class="dg" aria-label="Destinations">${Ye.map((t,l)=>`<a class="dg-c" href="${t.route}" data-c="${l}">${qt(t)}<span class="dg-t">${t.label}</span><span class="dg-s">${t.line}</span></a>`).join("")}</nav>`:`<div class="arc" data-arc role="group" aria-roledescription="carousel" aria-label="Destinations">
          ${Ye.map((t,l)=>`<a class="arc-c" href="${t.route}" data-c="${l}" aria-label="${t.label}: ${t.line}">${qt(t,"arc-img")}<span class="arc-l">${t.label}</span><span class="arc-s">${t.line}</span></a>`).join("")}
        </div>
        <div class="arc-ctl"><button class="gb gc small" type="button" data-step="-1" aria-label="Previous">${he.prev}</button>
          <div class="segbar" role="tablist" aria-label="Choose destination">${Ye.map((t,l)=>`<button class="pill" role="tab" type="button" data-dot="${l}">${t.label}</button>`).join("")}</div>
          <button class="gb gc small" type="button" data-step="1" aria-label="Next">${he.next}</button></div>`}
      </section>
      ${$t()}`,oe=[...s.querySelectorAll("[data-c]")],s.querySelector("[data-go]").addEventListener("click",t=>{t.preventDefault(),o.sfx("select"),s.scrollTo({top:s.scrollTop+s.querySelector("#sel-t").getBoundingClientRect().top-110,behavior:n?"auto":"smooth"})}),s.querySelector("[data-enable]").addEventListener("click",()=>{Le("sound_enable"),o.set({master:!0}),o.sfx("confirm"),fe()||it()}),Ze)oe.forEach((t,l)=>{t.addEventListener("pointerenter",()=>Be(l)),t.addEventListener("focus",()=>Be(l)),t.addEventListener("click",()=>{o.sfx("open"),Le("destination",{id:Ye[l].id})})}),Ve(!0);else{s.querySelectorAll("[data-step]").forEach(l=>l.addEventListener("click",()=>Be(se+ +l.dataset.step))),s.querySelectorAll("[data-dot]").forEach(l=>l.addEventListener("click",()=>Be(+l.dataset.dot))),oe.forEach((l,m)=>l.addEventListener("click",h=>{if(Ft){h.preventDefault();return}m!==se?(h.preventDefault(),Be(m)):(o.sfx("open"),Le("destination",{id:Ye[m].id}))}));let t=s.querySelector("[data-arc]");t.addEventListener("keydown",l=>{l.key==="ArrowRight"&&(Be(se+1),l.preventDefault()),l.key==="ArrowLeft"&&(Be(se-1),l.preventDefault())}),zt(t,l=>Be(se+l),()=>Ve()),Ve(!0)}q()}function ga(t){let l=String(Ye.indexOf(t)+1).padStart(2,"0");return`<span class="arc-img cv cv-${t.id}"><span class="cv-grain"></span><span class="cv-n">${l}</span><span class="cv-t">${t.label}</span></span>`}function qt(t,l=""){let m={products:'<img src="./media/cards/products.jpg" alt="" decoding="async" fetchpriority="low">',templates:'<span class="dg-win"><img src="./media/templates/the-light-orb.cover.jpg" alt="" decoding="async" fetchpriority="low"></span>',studio:'<img src="./media/cards/orb-dark.jpg" alt="" decoding="async" fetchpriority="low">',sound:`<span class="cv-wave">${[.3,.55,.8,.45,.95,.6,.35,.7,.5,.85,.4,.65,.3,.5].map(h=>`<i style="--h:${h}"></i>`).join("")}</span>`}[t.id];return`<span class="dg-img dg-${t.id} ${l}">${m}</span>`}function Be(t,l=!0){let m=Mt(t,0,Ye.length-1);m!==se&&(se=m,Zt.set("lo:sel",se),l&&o.sfx("detent"),a.nudge?.(.5)),Ve()}function Ve(t){if(Ze){oe.forEach((h,x)=>h.classList.toggle("on",x===se));return}let l=oe[0]?.offsetWidth||300,m=l*.7;oe.forEach((h,x)=>{let C=x-se+Qe/(m*1.2),N=Math.abs(C);h.style.transition=t||Bt?"none":"",h.style.transform=`translateX(${C*m}px) translateZ(${-N*150}px) rotateY(${Mt(-C*30,-48,48)}deg) scale(${1-Math.min(N,2)*.1})`,h.style.zIndex=String(10-Math.round(N)),h.classList.toggle("on",x===se),h.tabIndex=x===se?0:-1,h.setAttribute("aria-current",x===se?"true":"false")}),s.querySelectorAll("[data-dot]").forEach((h,x)=>h.setAttribute("aria-selected",String(x===se))),s.querySelectorAll("[data-step]").forEach(h=>{h.disabled=+h.dataset.step<0&&se===0||+h.dataset.step>0&&se===Ye.length-1})}let Qe=0,Bt=!1,Ft=!1;function zt(t,l,m){let h=0,x=0,C=null,N=null,S=0,_=0,v=null;t.addEventListener("touchstart",T=>{let O=T.touches[0];S=O.clientX,_=O.clientY,v=null},{passive:!0}),t.addEventListener("touchmove",T=>{if(T.touches.length>1)return;let O=T.touches[0],qe=O.clientX-S,Lt=O.clientY-_;!v&&Math.hypot(qe,Lt)>6&&(v=Math.abs(qe)>Math.abs(Lt)?"x":"y"),v==="x"&&T.cancelable&&T.preventDefault()},{passive:!1}),t.addEventListener("touchend",()=>{setTimeout(()=>{v=null},0)},{passive:!0}),t.addEventListener("pointerdown",T=>{T.button||(h=T.clientX,x=T.clientY,C=T.pointerId,N=null,Ft=!1)}),t.addEventListener("pointermove",T=>{if(T.pointerId!==C)return;let O=T.clientX-h,qe=T.clientY-x;!N&&Math.hypot(O,qe)>8&&(N=v??(Math.abs(O)>Math.abs(qe)?"x":"y"),N==="x"&&(t.setPointerCapture(C),Bt=!0)),N==="x"&&(Qe=O,Ft=!0,m())});let H=T=>{if(T.pointerId===C){if(C=null,Bt=!1,N==="x"){let O=Qe<-60?1:Qe>60?-1:0;Qe=0,l(O),m(),setTimeout(()=>{Ft=!1},0)}N=null}};t.addEventListener("pointerup",H),t.addEventListener("pointercancel",H),t.addEventListener("dragstart",T=>T.preventDefault());let I=0,le=0;t.addEventListener("wheel",T=>{if(Math.abs(T.deltaX)<=Math.abs(T.deltaY))return;T.preventDefault();let O=performance.now();O<le||(I+=T.deltaX,Math.abs(I)>60&&(l(Math.sign(I)),I=0,le=O+380))},{passive:!1})}function $t(){return`<footer class="ft"><a href="#/" class="wm small" aria-label="The Light Orb \u2014 Home">${zr}</a>
      <nav aria-label="Footer"><a href="#/sound">Sound</a><a href="#/membership">Membership</a><a href="#/account">Account</a>${ze.profile()?.email?"":'<a href="#/signup">Join early access</a>'}<a href="intro.html">Replay intro</a><a href="mailto:trescarla@gmail.com">Contact</a></nav>
      <nav aria-label="Legal"><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a><a href="#/licence">Licence</a></nav>
      <span class="ft-n">${"Early access \xB7 everything is free while we build it."}</span>
      ${["membership","signup","signin"].includes(b.name)||ze.profile()?.email?"":Kt("footer",{compact:!0})}</footer>`}let ha=0,ta={"orb-slider":Aa,"orb-wave":[{id:"gentle",name:"Gentle",line:"Wide, soft ripples.",p:{strength:.6,scale:110}},{id:"classic",name:"Classic",line:"The ripple from the intro.",p:{strength:1,scale:70}},{id:"deep",name:"Deep",line:"Tight, strong rings.",p:{strength:1.6,scale:45}},{id:"rain",name:"Rain",line:"Many small, quick rings, like drops on water.",p:{strength:.5,scale:28}}],"background-pack":[{id:"classic",name:"Classic",line:"The horizon as in the intro.",p:{horizon:.3,lamp:.9}},{id:"wide",name:"Wide floor",line:"A low horizon and more floor.",p:{horizon:.18,lamp:.9}},{id:"high",name:"High horizon",line:"A high horizon and more sky.",p:{horizon:.45,lamp:.9}},{id:"lantern",name:"Lantern",line:"A brighter lamp around the Orb in the dark world.",p:{horizon:.3,lamp:1.6}}],"crystal-controls":Aa},Ot=t=>t?.code==="kit",fa=(t,l,m)=>`<iframe class="kit-frame" data-kit="${t}|${l}|${m?1:0}" title="${m?"Preview":"Live preview"}"${m?' tabindex="-1" aria-hidden="true" loading="lazy"':""}></iframe>`,qa=t=>t.querySelectorAll("[data-kit]").forEach(l=>{let[m,h,x]=l.dataset.kit.split("|");l.srcdoc=Qa(m,h,{mini:x==="1"})}),Gt=[...Je.map(t=>({id:`orb-${t.id}`,fam:"orb",variant:t.id,sphere:t.id,ext:".orb",name:t.id==="clear"?"The Orb":`The Orb \xB7 ${t.name}`,kind:t.line,href:`#/products/orb${t.id==="clear"?"":`?variant=${t.id}`}`})),...Vr.filter(t=>t.id!=="orb").flatMap(t=>ta[t.id].map((l,m)=>({id:m?`${t.id}-${l.id}`:t.id,fam:t.id,variant:m?l.id:null,ext:Ot(t)?".html":".kit",name:`${t.name} \xB7 ${l.name}`,kind:l.line,mini:Ot(t)?fa(t.id,l.id,!0):null,cls:l.cls,dark:l.dark,img:Ot(t)?null:`./media/products/${t.id}.jpg`,pos:t.id==="background-pack"?`50% ${Math.round(30+(l.p.horizon-.3)*160)}%`:null,href:`#/products/${t.id}${m?`?variant=${l.id}`:""}`})))],st="Free \xB7 Early access",xt=(t,l="")=>"";function _t(t){t.querySelectorAll("[data-cart]").forEach(l=>l.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation();let h=Gt.find(C=>C.id===l.dataset.cart)||Qo().find(C=>C.id===l.dataset.cart),x=tt.toggle({id:h.id,name:h.name,href:h.href||"#/sound"});x&&Le("add_to_cart",{item:h.id}),l.setAttribute("aria-pressed",String(x)),l.querySelector("span").textContent=x?"In cart":"Add to cart",o.sfx(x?"confirm":"select")}))}let Rt=(t,l,m)=>`<button class="gb small" type="button" data-fsave="${t}|${l}" data-name="${de(m)}" aria-pressed="${ze.isSaved(t,l)}">${he.heart}<span>${ze.isSaved(t,l)?"Saved":"Save"}</span></button>`;function Yt(t,l){t.querySelectorAll("[data-fsave]").forEach(m=>m.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation();let[x,C]=m.dataset.fsave.split("|"),N=ze.toggleSaved(x,C,m.dataset.name,l(x,C));N&&Le("save",{kind:x,item:C}),m.setAttribute("aria-pressed",String(N)),m.querySelector("span").textContent=N?"Saved":"Save",o.sfx(N?"confirm":"select")}))}function ma(){let t;try{t=localStorage.getItem("lo.productsView")}catch{}t!=="grid"&&t!=="large"&&(t=matchMedia("(max-width: 700px)").matches?"grid":"large");let l=m=>`<article class="file glass" data-href="${m.href}">
        <div class="file-v ${m.cls??""}${m.mini?" has-kit":""}${m.dark?" is-dark":""}"${m.sphere?` data-sphere="${m.sphere}"`:""}>${m.img?`<img src="${m.img}" alt="" draggable="false" loading="lazy"${m.pos?` style="object-position:${m.pos}"`:""}>`:""}${m.mini??""}<span class="file-ext">${m.ext}</span></div>
        <div class="file-m"><h3><a class="file-link" href="${m.href}">${de(m.name)}</a></h3><p>${de(m.kind)}</p><p class="file-p">${st}</p></div>
        <div class="file-a">${`<a class="gb small" href="${m.href}">${m.fam==="orb"||Ot(Dt(m.fam))?"Get it free":"Coming to early access"}</a>`}${Rt("product",m.id,m.name)}<a class="gb small primary" href="#/studio?family=${m.fam}${m.variant?`&preset=${m.variant}`:""}">Go to Studio</a></div></article>`;s.innerHTML=`
      <section class="dest shop">
        <header class="dh dh-row"><h1>Products</h1><div class="segbar view-tg" role="radiogroup" aria-label="View">${["grid","large"].map(m=>`<button class="pill" role="radio" type="button" data-pview="${m}" aria-checked="${m===t}">${m==="grid"?"Grid":"Large"}</button>`).join("")}</div></header>
        <div class="file-grid${t==="grid"?" is-compact":""}">${Gt.map(l).join("")}</div>
      </section>${$t()}`,_t(s),Yt(s,(m,h)=>Gt.find(x=>x.id===h)?.href??"#/products"),qa(s),s.querySelectorAll(".file[data-href]").forEach(m=>m.addEventListener("click",h=>{h.defaultPrevented||h.target.closest("button, a")||(o.sfx("open"),location.hash=m.dataset.href)})),s.querySelectorAll("[data-sphere]").forEach(m=>{let h=Ca(m,m.dataset.sphere,{reduced:n,interactive:t!=="grid"});A.push(()=>h.dispose())}),s.querySelectorAll("[data-pview]").forEach(m=>m.addEventListener("click",()=>{if(m.dataset.pview===t)return;try{localStorage.setItem("lo.productsView",m.dataset.pview)}catch{}o.sfx("press");let h=scrollY;A.forEach(x=>x()),A=[],ma(),scrollTo(0,h)}))}function Ut(){let t=Dt(b.id);if(!t||t.published===!1){location.replace("#/products");return}let l=Ot(t),m=t.id==="orb"?Je:ta[t.id],h=m.some(S=>S.id===b.query.variant)?b.query.variant:m[0].id,x=S=>m.find(_=>_.id===S),C=S=>t.id==="orb"?`orb-${S}`:S===m[0].id?t.id:`${t.id}-${S}`;s.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/products">${he.back}<span>Products</span></a>
        <div class="pd-grid">
          <div class="pd-stage glass${l?" has-kit":""}" data-stage>${l?fa(t.id,h,!1):U(t.id)}</div>
          <div class="pd-info">
            <p class="kicker">${de(t.id==="orb"?"Sphere":t.kind)}</p><h1>${de(t.name)}</h1>
            <p class="lede">${de(L[t.id].lede)}</p>
            ${m?`<div class="vars"><p class="lbl">Version</p><div class="segbar" role="radiogroup" aria-label="Version">${m.map(S=>`<button class="pill" role="radio" type="button" data-variant="${S.id}" aria-checked="${S.id===h}">${S.name}</button>`).join("")}</div><p class="var-line" data-vline></p></div>`:""}
            <p class="price" data-price>${st}</p>
            <div class="acts eq">${t.id==="orb"||l?`<button class="gb small primary" type="button" data-getfree>${he.check}<span>Get it free</span></button>`:'<button class="gb small primary" type="button" data-soon aria-expanded="false" aria-controls="ea-wait"><span>Coming to early access</span></button>'}${Rt("product",C(h),t.name)}</div>
            ${t.id==="orb"?r():l?d():`<div class="ea-wait" id="ea-wait" hidden>${Kt("product",{compact:!0,label:`Get an email when ${de(t.name)} is ready to take, free`})}</div>`}
            ${`<a class="studio-lock" href="#/studio?family=${t.id}">${he.check}<span><b>Customise in Studio</b><small>Open to everyone \xB7 Beta</small></span></a>`}
            <dl class="facts"><dt>What it does</dt><dd>${de(L[t.id].does)}</dd><dt>You receive</dt><dd>${t.receives.map(de).join(" \xB7 ")}</dd></dl>
            <details class="acc"><summary>Compatibility and installation</summary><p>${de(L[t.id].tech)}</p></details>
          </div>
        </div>
      </section>${$t()}`,_t(s),Yt(s,(S,_)=>`#/products/${t.id}`),mt(t.id,s.querySelector("[data-stage]"),h),Le("product_open",{product:t.id,variant:h});let N=S=>{ee.sphere?.setKind(S);let _=x(S),v=s.querySelector("[data-stage]");if(l){v.querySelector("[data-kit]").dataset.kit=`${t.id}|${S}|0`,qa(v);let O=s.querySelector(".free-c code");O&&(O.textContent=Qa(t.id,S))}else t.id!=="orb"&&(v.classList.remove("v-dark","v-frost","v-compact"),_.cls&&v.classList.add(_.cls),_.p&&Ce.set(_.p));s.querySelectorAll("[data-variant]").forEach(O=>O.setAttribute("aria-checked",String(O.dataset.variant===S)));let H=s.querySelector("[data-vline]");if(H&&(H.textContent=x(S).line),t.id==="orb"){let O=!0;s.querySelector("[data-price]").textContent=st,s.querySelector("[data-free]").hidden=!O;let qe=s.querySelector(".free-c code");qe&&(qe.textContent=aa(S))}let I=s.querySelector("[data-cart]");if(I&&(I.dataset.cart=C(S)),I){let O=tt.has(I.dataset.cart);I.setAttribute("aria-pressed",String(O)),I.querySelector("span").textContent=O?"In cart":"Add to cart"}let le=s.querySelector("[data-fsave]");le.dataset.fsave=`product|${C(S)}`;let T=ze.isSaved("product",C(S));le.setAttribute("aria-pressed",String(T)),le.querySelector("span").textContent=T?"Saved":"Save",history.replaceState(null,"",`#/products/${t.id}${S===m[0].id?"":`?variant=${S}`}`)};w(s,l?t.id:"orb"),s.querySelector("[data-download]")?.addEventListener("click",()=>{let S=s.querySelector("[data-variant][aria-checked=true]")?.dataset.variant??m[0].id;g(`${t.id}-${S}.html`,Qa(t.id,S)),o.sfx("confirm"),Le("free_code_download",{product:t.id,variant:S})}),s.querySelector("[data-getfree]")?.addEventListener("click",()=>{let S=s.querySelector("[data-freebtn]");S?.getAttribute("aria-expanded")!=="true"&&S?.click(),S?.scrollIntoView({block:"nearest",behavior:"smooth"})}),s.querySelector("[data-soon]")?.addEventListener("click",S=>{let _=s.querySelector("#ea-wait"),v=_.hidden;_.hidden=!v,S.currentTarget.setAttribute("aria-expanded",String(v)),o.sfx(v?"open":"close"),v&&_.querySelector("input")?.focus()}),s.querySelectorAll("[data-variant]").forEach(S=>S.addEventListener("click",()=>{N(S.dataset.variant),o.sfx("select"),Le("variant",{product:t.id,variant:S.dataset.variant})})),N(h)}let aa=(t="clear")=>`<div data-light-orb${t==="clear"?"":` data-variant="${t}"`} style="width:320px;height:320px"></div>
<script type="module" src="https://carlatres3.github.io/light-orb/embed/v1/orb.js"><\/script>`,tr=aa();function r(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${he.check}<span>Get the code \u2014 free</span></button>
      <div class="free-p" id="free-code" hidden><p class="note">Paste this where the Orb should appear. It fills the box you give it; drag to turn it, tap to stir it.</p>
        <pre class="free-c glass"><code>${de(tr)}</code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function d(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${he.check}<span>Get the code \u2014 free</span></button>
      <div class="free-p" id="free-code" hidden><p class="note">One self-contained file: open it in a browser, or paste its style, markup and script into your page. Change the material with the --cc-* variables at the top.</p>
        <pre class="free-c glass kit-code"><code></code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button><button class="gb small" type="button" data-download><span>Download .html</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function g(t,l){let m=URL.createObjectURL(new Blob([l],{type:"text/html"})),h=document.createElement("a");h.href=m,h.download=t,document.body.append(h),h.click(),h.remove(),setTimeout(()=>URL.revokeObjectURL(m),1e3)}function w(t,l="orb"){let m=t.querySelector("[data-freebtn]");if(!m)return;let h=t.querySelector("#free-code"),x=t.querySelector("[data-copy]");m.addEventListener("click",()=>{let C=h.hidden;h.hidden=!C,m.setAttribute("aria-expanded",String(C)),o.sfx(C?"open":"select"),C&&Le("free_code_open",{product:l})}),x.addEventListener("click",async()=>{let C=!1;try{await navigator.clipboard.writeText(t.querySelector(".free-c code").textContent),C=!0}catch{let N=document.createRange();N.selectNodeContents(t.querySelector(".free-c code"));let S=getSelection();S.removeAllRanges(),S.addRange(N)}x.querySelector("span").textContent=C?"Copied":"Selected \u2014 press Copy",C&&(o.sfx("select"),Le("free_code_copy",{product:l})),setTimeout(()=>{x.isConnected&&(x.querySelector("span").textContent="Copy code")},2200)})}let L={orb:{lede:"A 3D sphere you can place in your own work. Choose the material and what it holds inside.",does:"Drag to turn it; it keeps turning slowly on its own. A tap makes whatever is in it move a little faster. Twenty versions: clear glass, liquid metal, porcelain, bloom, and glass holding a light, points of light, glitter or beads.",tech:"An ES module built on Three.js r186 (WebGL 2). Works in current Chrome, Safari, Edge and Firefox. The integration notes explain how to place it in a page and choose a version."},"orb-slider":{lede:"A glass capsule whose thumb is a small orb with its own slow inner light. Slide it to enter.",does:"A slide-to-confirm control. Drag the orb; let go and a spring carries it home, or to the end to confirm (it then sends a confirm event). Arrow keys, Enter, Home and End work too.",tech:"One HTML file: CSS variables for the material and a few lines of plain JavaScript. No framework, no WebGL. Current Chrome, Safari, Edge and Firefox."},"orb-wave":{lede:"The ripple the Orb leaves on the floor when it lands, drawn in light.",does:"Each touch raises a wave that spreads across the surface and fades.",tech:"A full-screen shader with an impact API: position, strength and scale. Needs WebGL 2."},"background-pack":{lede:"Two environments in one pack: a dark world and a light one, and the change between them.",does:"Moves smoothly from dark to light, controlled by a single exposure value.",tech:"A full-screen shader with exposure, horizon and lamp controls. Needs WebGL 2."},"crystal-controls":{lede:"Buttons, switches, fields and sliders in six glass materials. A highlight follows the pointer; presses give like glass on a spring.",does:"Every control has default, hover, focus, pressed, selected, disabled and loading states. Choose Clear, Smoke, Chrome, Porcelain, Gel or Bloom; each is a set of CSS variables.",tech:"One HTML file: plain CSS and a few lines of JavaScript for the pointer light and the slider spring. No framework. Current Chrome, Safari, Edge and Firefox."}};function U(t){return t==="orb"?'<div class="pd-sph" data-sph></div><span class="pd-hint">Drag to turn it. Tap to stir it.</span>':t==="orb-slider"?'<div class="cap" data-cap role="slider" tabindex="0" aria-label="Slide to enter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="cap-l">slide to enter</span></div>':t==="orb-wave"?'<button class="gb small pd-btn" type="button" data-drop>Drop the Orb</button><span class="pd-hint">Or tap the floor.</span>':t==="background-pack"?'<div class="segbar pd-seg" role="radiogroup" aria-label="Environment"><button class="pill" role="radio" type="button" data-env="0" aria-checked="false">Dark world</button><button class="pill" role="radio" type="button" data-env="1" aria-checked="true">Light</button></div>':`<div class="kit"><button class="gb primary" type="button">Continue</button><button class="gb" type="button">Secondary</button><button class="gb gc" type="button" aria-label="Confirm">${he.check}</button>
      <button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><input class="gi" placeholder="Your name" aria-label="Example field">
      <input class="grange" type="range" value="60" aria-label="Example slider" style="--p:60%"><button class="gb" type="button" disabled>Disabled</button><button class="gb" type="button" aria-busy="true">Loading</button></div>`}let ee=null;function mt(t,l,m="clear"){if(ee={id:t,el:l,cap:0,drop:null},!(t==="crystal-controls"||t==="orb-slider")){if(t!=="orb"&&f.show(wt(ra("original").config)),t==="orb"&&(ee.sphere=Ca(l.querySelector("[data-sph]"),m,{reduced:n}),A.push(()=>ee?.sphere?.dispose())),t==="orb-slider"){let h=l.querySelector("[data-cap]"),x=null,C=S=>{ee.cap=Mt(S),h.setAttribute("aria-valuenow",Math.round(ee.cap*100))};h.addEventListener("pointerdown",S=>{x={x:S.clientX,v:ee.cap},h.setPointerCapture(S.pointerId),o.sfx("select")}),h.addEventListener("pointermove",S=>{x&&C(x.v+(S.clientX-x.x)/(h.offsetWidth-h.offsetHeight))});let N=()=>{x&&(x=null,f.orb?.nudge(.5),ee.cap>.9?(C(1),o.sfx("confirm")):(C(0),o.sfx("select")))};h.addEventListener("pointerup",N),h.addEventListener("pointercancel",N),h.addEventListener("keydown",S=>{S.key==="ArrowRight"&&C(ee.cap+.1),S.key==="ArrowLeft"&&C(ee.cap-.1),S.key==="End"&&C(1),S.key==="Home"&&C(0)})}if((t==="orb-wave"||t==="background-pack")&&(Ha(l),e.addBackdrop(Ce.canvas),Ce.set({horizon:.3,strength:1,scale:70}),Ce.setExposure(t==="background-pack"?1:0,!0),t==="orb-wave"&&(l.addEventListener("pointerdown",h=>{if(h.target.closest("button"))return;let x=l.getBoundingClientRect(),C=h.clientY-x.top;C>x.height*.55&&(Ce.impact(h.clientX-x.left,C),f.orb?.nudge(.7),o.sfx("detent"))}),l.querySelector("[data-drop]").addEventListener("click",()=>{ee.drop={vy:0,y:null,contacts:0},o.sfx("select")})),t==="background-pack"&&l.querySelectorAll("[data-env]").forEach(h=>h.addEventListener("click",()=>{Ce.setExposure(+h.dataset.env),o.sfx("open"),l.querySelectorAll("[data-env]").forEach(x=>x.setAttribute("aria-checked",String(x===h)))}))),t==="crystal-controls"){l.querySelectorAll(".gb:not([disabled])").forEach(x=>x.addEventListener("click",()=>o.sfx("select"))),l.querySelector(".gsw").addEventListener("click",x=>{let C=x.currentTarget;C.setAttribute("aria-checked",String(C.getAttribute("aria-checked")!=="true")),o.sfx("select")}),l.querySelector(".gi").addEventListener("input",x=>{x.isTrusted&&o.sfx("type")});let h=l.querySelector(".grange");h.addEventListener("input",()=>{h.style.setProperty("--p",`${h.value}%`),o.sfx("level",h.value/100)})}}}let We=2,Ae=(t,l="")=>`<span class="dev" data-dev><span class="dev-body"><span class="dev-screen"><img src="${t.cover.src}" alt="${de(l)}" draggable="false" decoding="async"${l?' width="1600" height="1000"':""}></span><span class="dev-glare" aria-hidden="true"></span></span><span class="dev-floor" aria-hidden="true"></span></span>`;function _e(t){n||t.querySelectorAll("[data-dev]").forEach(l=>{l.addEventListener("pointermove",m=>{let h=l.getBoundingClientRect();l.style.setProperty("--ry",`${((m.clientX-h.left)/h.width-.5)*10}deg`),l.style.setProperty("--rx",`${((m.clientY-h.top)/h.height-.5)*-8}deg`)}),l.addEventListener("pointerleave",()=>{l.style.removeProperty("--ry"),l.style.removeProperty("--rx")})})}let pe=t=>`<!doctype html>
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
`;function je(){let t=gt.length+We;s.innerHTML=`
      <section class="dest tpl">
        <header class="dh"><h1>Complete compositions</h1></header>
        <div class="folder" data-folder>
          <div class="folder-tab glass"><span>Templates</span><small>${gt.length} ${gt.length===1?"composition":"compositions"}</small></div>
          <div class="folder-body glass"><span class="folder-glow" aria-hidden="true"></span><span class="folder-num" data-fnum aria-hidden="true"></span>
            <div class="folder-track" data-track role="listbox" aria-label="Templates" tabindex="0">
              ${gt.map((H,I)=>`<button class="tcard glass" type="button" role="option" data-t="${I}" aria-label="Open ${de(H.name)}">
                <span class="tcard-n">${String(I+1).padStart(2,"0")}</span>
                <span class="tcard-cv">${Ae(H)}</span>
                <span class="tcard-t">${de(H.name)}</span><span class="tcard-l">${de(H.line)}</span></button>`).join("")}
              ${Array.from({length:We},(H,I)=>`<div class="tcard glass soon" aria-hidden="true"><span class="tcard-n">${String(gt.length+I+1).padStart(2,"0")}</span><span class="tcard-cv"><span class="soon-orb"></span><span class="soon-lbl">In the making</span></span><span class="tcard-t">Next composition</span><span class="tcard-l">Joining the collection soon.</span></div>`).join("")}
            </div>
            <div class="folder-open" data-open hidden></div>
            <div class="folder-ctl" data-fctl><button class="gb gc small" type="button" data-fstep="-1" aria-label="Previous">${he.prev}</button><span class="count" data-fcount></span><button class="gb gc small" type="button" data-fstep="1" aria-label="Next">${he.next}</button></div>
          </div>
        </div>
      </section>${$t()}`;let l=s.querySelector("[data-track]"),m=[...l.children],h=s.querySelector("[data-open]"),x=s.querySelector("[data-fctl]"),C=0,N=H=>{m.forEach((I,le)=>{let T=le-C+Qe/340,O=Math.abs(T);I.style.transition=H||Bt?"none":"",I.style.transform=`translateX(calc(-50% + ${T*96}%)) translateZ(${-O*120}px) rotateY(${Mt(-T*18,-30,30)}deg) scale(${1-Math.min(O,2)*.08})`,I.style.zIndex=String(10-Math.round(O)),I.style.opacity=String(O>2.2?0:1-O*.22),I.classList.toggle("on",le===C),I.tagName==="BUTTON"&&I.setAttribute("aria-selected",String(le===C))}),s.querySelector("[data-fnum]").textContent=String(C+1).padStart(2,"0"),s.querySelector("[data-fcount]").textContent=`${String(C+1).padStart(2,"0")} / ${String(t).padStart(2,"0")}`,s.querySelectorAll("[data-fstep]").forEach(I=>{I.disabled=+I.dataset.fstep<0&&C===0||+I.dataset.fstep>0&&C===t-1})},S=H=>{let I=Mt(C+H,0,t-1);I!==C&&(C=I,o.sfx("detent")),N()};s.querySelectorAll("[data-fstep]").forEach(H=>H.addEventListener("click",()=>S(+H.dataset.fstep))),l.addEventListener("keydown",H=>{H.key==="ArrowRight"&&(S(1),H.preventDefault()),H.key==="ArrowLeft"&&(S(-1),H.preventDefault())}),zt(l,S,()=>N());let _=H=>{let I=gt[H],le={id:`template-${I.id}`,name:I.name,href:`#/templates/${I.id}`};Gt.some(T=>T.id===le.id)||Gt.push(le),h.innerHTML=`<button class="tl folder-back" type="button" data-close>${he.back}<span>All templates</span></button>
        <div class="fo-grid"><figure class="fo-cv">${Ae(I,`The beginning of the ${I.name} template.`)}</figure>
          <div class="fo-info"><p class="kicker">${String(H+1).padStart(2,"0")} \xB7 Template</p><h2>${de(I.name)}</h2><p>${de(I.line)}</p>
            <ul class="fo-inc">${I.includes.map(T=>`<li>${de(T)}</li>`).join("")}</ul><p class="price">${st}</p>
            <div class="acts eq"><a class="gb small primary" href="#/templates/${I.id}">Open template</a>${xt(le)}${Rt("template",I.id,I.name)}</div></div></div>`,_t(h),Yt(h,(T,O)=>`#/templates/${O}`),_e(h),h.querySelector("[data-close]").addEventListener("click",v),l.hidden=!0,x.hidden=!0,h.hidden=!1,h.classList.remove("in"),h.offsetWidth,h.classList.add("in"),o.sfx("open"),h.querySelector("[data-close]").focus({preventScroll:!0})},v=()=>{h.hidden=!0,l.hidden=!1,x.hidden=!1,N(!0),o.sfx("close"),l.focus({preventScroll:!0})};m.forEach((H,I)=>H.tagName==="BUTTON"&&H.addEventListener("click",le=>{if(Ft){le.preventDefault();return}I!==C?(C=I,N(),o.sfx("detent")):_(I)})),N(!0)}function lt(){let t=gt.find(l=>l.id===b.id);if(!t){location.replace("#/templates");return}s.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/templates">${he.back}<span>Templates</span></a>
        <div class="pd-grid">
          <figure class="pd-stage cover-big">${Ae(t,`The beginning of the ${t.name} template.`)}</figure>
          <div class="pd-info"><p class="kicker">Template</p><h1>${de(t.name)}</h1><p class="lede">${de(t.line)}</p>
            <div class="acts eq"><a class="gb small" href="#/">View it live</a>${t.starter&&!0?'<button class="gb small primary" type="button" data-starter>Download starter \u2014 free</button>':""}</div>
            ${t.starter&&!0?'<p class="note">A single .html file: the Orb (hosted embed), a greeting, a quotation slot and four destinations, ready to edit. <a href="#/licence">Licence</a></p>':'<p class="note">Purchase opens soon.</p>'}
            <dl class="facts"><dt>Includes</dt><dd>${t.includes.map(de).join(" \xB7 ")}</dd></dl>
            <p class="note" data-covermeta></p></div>
        </div>
      </section>${$t()}`,_e(s),s.querySelector("[data-starter]")?.addEventListener("click",()=>{g(`${t.id}-starter.html`,pe(t)),o.sfx("confirm"),Le("template_starter_download",{template:t.id})}),fetch(t.cover.meta).then(l=>l.json()).then(l=>{let m=s.querySelector("[data-covermeta]");m&&(m.textContent=`Preview: a capture of this website, ${l.captured}.`)}).catch(()=>{})}function me(){let t=o.prefs.voice,l=[...Wt.map(v=>({group:v.full?"voices":"more",key:`voice_audition.${v.id}`,clip:"voice_audition",voice:v.id,title:v.name,tag:`${v.accent} \xB7 ${v.gender}`,sub:v.line,use:v.id,note:v.full?"":`Page narration in ${v.name}; other guide lines in ${yt(v.lines).name}.`})),...["home","products","templates","studio","sound"].map(v=>({group:"guide",key:`${v}.${t}`,clip:v,voice:t,title:v==="home"?"Welcome":v[0].toUpperCase()+v.slice(1),sub:Da[v]})),...wa.map(v=>({group:"sfx",key:`sfx.${v.id}`,url:v.file,title:v.name,sub:v.line}))],m=(v,H,I,le=!0)=>`<details class="sg"${le?" open":""}><summary><h2>${H}</h2><span class="sg-n">${l.filter(T=>T.group===v).length}</span><p>${I}</p></summary><div class="sgrid">${l.filter(T=>T.group===v).map(T=>`
      <article class="si si-row"><button class="si-play gb gc small" type="button" data-play="${T.key}" aria-label="Play ${de(T.title)}">${he.play}</button>
        <div class="si-t"><h3>${de(T.title)}${T.tag?`<span class="file-ext">${de(T.tag)}</span>`:'<span class="file-ext">.m4a</span>'}</h3><p>${de(T.sub)}</p>${T.note?`<p class="note">${de(T.note)}</p>`:""}</div>
        <div class="si-w" data-wave="${T.key}" role="slider" tabindex="0" aria-label="Position in ${de(T.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><canvas></canvas></div>
        <div class="si-m"><span class="si-d" data-dur="${T.key}">\u2013:\u2013\u2013</span></div>
        <div class="si-x eq">${T.use?`<button class="gb small" type="button" data-use="${T.use}" aria-pressed="${t===T.use}"><span>${t===T.use?"In use":"Use voice"}</span></button>`:""}${T.group!=="guide"?xt({id:`sound-${T.key}`}):""}${Rt("sound",T.key,T.title)}</div></article>`).join("")}</div></details>`;s.innerHTML=`
      <section class="dest snd-dest">
        <header class="dh"><h1>Voices and sounds</h1><p class="dh-l">Twelve neural voices, each reading the same line. Choose one and the guide speaks with it across the site. Current guide voice: <b>${de(yt(t).name)}</b>.</p></header>
        ${m("voices","Guide voices","Every line the guide says, rendered in each of these voices.")}
        ${m("more","More voices","Different characters for the guide. Compare them on the same line.",!1)}
        ${m("guide","Guide narration",`What the guide says on each page, in ${de(yt(t).name)}\u2019s voice.`,!1)}
        ${m("sfx","Interface sounds","Short, quiet sounds for touch, panels and wheels.")}
      </section>${$t()}`,s.querySelectorAll(".si").forEach(v=>{v.querySelector('[data-play^="sfx."]')&&(v.querySelector(".file-ext").textContent=".wav")}),Yt(s,()=>"#/sound");let h=new Map,x=(v,H)=>{let I=s.querySelector(`[data-dur="${CSS.escape(v)}"]`);I&&(I.textContent=H)};for(let v of l)(v.url?o.peaksUrl(v.url,80):o.peaks(v.clip,v.voice,80)).then(H=>{h.set(v.key,H),x(v.key,dt(H.duration))}).catch(()=>x(v.key,"Unavailable"));or=l;let C=v=>v.url?v.key:`${v.clip}.${v.voice}`;_t(s);let N=(v,H=0)=>(o.prefs.master||o.set({master:!0}),v.url?o.playUrl(v.key,v.url,{from:H}):o.play(v.clip,{voice:v.voice,kind:"audition",from:H}));s.querySelectorAll("[data-play]").forEach(v=>v.addEventListener("click",()=>{let H=l.find(le=>le.key===v.dataset.play),I=C(H);o.state.clip===I&&o.playing?o.pause():o.state.clip===I&&o.state.status==="paused"?o.resume():N(H)})),s.querySelectorAll("[data-wave]").forEach(v=>{let H=l.find(O=>O.key===v.dataset.wave),I=C(H),le=!1,T=O=>{let qe=v.getBoundingClientRect();return Mt((O.clientX-qe.left)/qe.width)};v.addEventListener("pointerdown",async O=>{le=!0,v.setPointerCapture(O.pointerId);let qe=T(O);o.state.clip!==I&&await N(H),o.seek(qe)}),v.addEventListener("pointermove",O=>{le&&o.state.clip===I&&o.seek(T(O))}),v.addEventListener("pointerup",()=>{le=!1}),v.addEventListener("keydown",O=>{o.state.clip!==I||!o.duration||(O.key==="ArrowRight"&&o.seek(o.position+1/o.duration),O.key==="ArrowLeft"&&o.seek(o.position-1/o.duration))})}),s.querySelectorAll("[data-use]").forEach(v=>v.addEventListener("click",()=>{let H=scrollY;o.stop(),o.set({voice:v.dataset.use}),o.sfx("confirm"),Le("voice_use",{voice:v.dataset.use}),me(),scrollTo(0,H),za(`${yt(v.dataset.use).name} is now the guide\u2019s voice.`)}));let S=0,_=()=>{if(S=requestAnimationFrame(_),or!==l){cancelAnimationFrame(S);return}for(let v of s.querySelectorAll("[data-wave]")){let H=l.find(Pt=>Pt.key===v.dataset.wave);if(!H)continue;let I=C(H),le=h.get(H.key),T=v.firstElementChild,O=v.getBoundingClientRect();if(O.bottom<0||O.top>innerHeight)continue;let qe=o.state.clip===I,Lt=qe?o.position:0,ba=qe?o.state.energy:0,It=qe&&o.playing;v.setAttribute("aria-valuenow",Math.round(Lt*100));let Ct=s.querySelector(`[data-play="${CSS.escape(H.key)}"]`);if(Ct&&Ct.dataset.on!==String(It)&&(Ct.dataset.on=String(It),Ct.innerHTML=It?he.pause:he.play,Ct.setAttribute("aria-label",`${It?"Pause":"Play"} ${H.title}`)),!le)continue;let et=Math.min(devicePixelRatio||1,2);T.width!==Math.round(O.width*et)&&(T.width=Math.round(O.width*et),T.height=Math.round(O.height*et));let vt=T.getContext("2d");vt.setTransform(et,0,0,et,0,0),vt.clearRect(0,0,O.width,O.height);let ct=le.bins.length,Oa=Math.min(2,O.width/ct*.4),Vt=Math.max(.5,(O.width-Oa*(ct-1))/ct),oi=O.height/2;for(let Pt=0;Pt<ct;Pt++){let Dr=(Pt+.5)/ct<=Lt,ii=Dr&&Math.abs((Pt+.5)/ct-Lt)<2.5/ct?ba:0,Nr=Math.max(2,(le.bins[Pt]*.9+ii*.2)*(O.height-4));vt.fillStyle=Dr?"#262827":"rgba(38,40,39,.2)",vt.beginPath(),vt.roundRect(Pt*(Vt+Oa),oi-Nr/2,Vt,Nr,Vt/2),vt.fill()}}};_(),A.push(()=>cancelAnimationFrame(S))}let dt=t=>`${Math.floor(t/60)}:${String(Math.round(t%60)).padStart(2,"0")}`;function ar(){if(M&&(M.leave(),M=null),!0){s.innerHTML="",M=$o({api:e,audio:o,top:u,page:s,query:b.query,ICON:he,flash:za,product:f,store:ze});return}s.innerHTML=`
      <section class="st-lock">
        <div class="lock-blur" aria-hidden="true"><i class="lb-bar"></i><i class="lb-sph"></i><i class="lb-ins"></i></div>
        <div class="lock-card glass dark">
          <span class="lock-i">${he.lock}</span>
          <p class="kicker">Studio</p><h1>For members</h1>
          <p>Shape the sphere: its material, its colour and what moves inside it. Studio opens with membership.</p>
          <div class="acts eq"><a class="gb small primary" href="#/membership">See membership</a><a class="gb small" href="#/products">Browse products</a></div>
        </div>
      </section>`}let rr=0;function za(t){y.textContent=t,y.classList.add("on"),clearTimeout(rr),rr=setTimeout(()=>{y.classList.remove("on"),q()},Math.max(3200,t.length*70))}function Zo(t,l,{W:m,H:h}){let x=o.energy(),C=o.playing&&(o.state.kind==="guide"||o.state.kind==="audition"&&b.name==="sound");a.setSpeech(C&&!ir()?x*(n?.35:.9):0),Xe+=((C&&!ir()||J?1:0)-Xe)*Math.min(1,l*(C?4:1.2));{let _=t-Fe,v=_<0?0:_<3.5?At(_/.4):1-At((_-3.5)/1.6);a.setRibbon?.(Math.max(v,Xe))}f.orb?.setSpeech(o.playing&&o.state.kind==="audition"&&ir()?x*(n?.35:1):0);let N=m<700,S;if(M?(S=M.frame(t,l,{W:m,H:h}),f.frame(S.product??null)):b.name==="home"?S=ai(m,h,N):S={warm:0,orb:ei(m,h,N),emission:te.emission},!M){let _=ri(m,h,l);f.frame(_),_?.ground&&(S.grounds||=[]).push({y:_.ground,x:_.x,d:_.d})}return ti(S.orb),S}let jr=null,or=[],Qo=()=>or.map(t=>({id:`sound-${t.key}`,name:t.title,href:"#/sound"})),ir=()=>!1,ei=(t,l,m)=>({x:t-(m?34:50),y:l-(m?38:52),d:m?40:50,vis:1});function ti(t){let l=t&&(t.vis??1)>.5&&!!re();i.hidden=!l,l&&Object.assign(i.style,{left:`${t.x-t.d/2}px`,top:`${t.y-t.d/2}px`,width:`${t.d}px`,height:`${t.d}px`})}function ai(t,l,m){let h=s.scrollTop/l,x=s.querySelector("[data-welcopy]"),C=s.querySelector("[data-qt]"),N=s.querySelector(".wel-ctl"),S=1-At((h-.04)/.2),_=oe[se],v=_?.getBoundingClientRect(),H=(s.querySelector(".qt")?.offsetTop??l)/l,I=(s.querySelector("#select")?.offsetTop??2*l)/l,le=s.querySelector("#sel-t"),T=le?(le.getBoundingClientRect().top+s.scrollTop-s.getBoundingClientRect().top)/l:2,O=T-.8,qe=tn(h,.13,.3,O-.22,O);x&&(x.style.setProperty("--wipe",S.toFixed(3)),x.style.visibility=S<.01?"hidden":""),N&&(N.style.setProperty("--wipe",S.toFixed(3)),N.style.visibility=S<.01?"hidden":""),C&&(C.style.setProperty("--wipe",qe.toFixed(3)),C.style.transform=`translateY(${(20*(1-At((h-.13)/.17))-24*At((h-O+.22)/.22)).toFixed(1)}px)`,C.style.visibility=qe<.01?"hidden":"");let Lt=Mt(Math.min(t*(m?.46:.19),l*.28),120,280),ba={x:t/2,y:l*(m?.3:.29),d:Lt},It={x:t/2,y:l*.87,d:Lt*.3},Ct=At((h-.08)/Math.max(.3,H-.5)),et={x:pa(ba.x,It.x,Ct),y:pa(ba.y,It.y,Ct),d:pa(ba.d,It.d,Ct)};if(_){let vt=v,ct=At((h-O+.1)/.2);if(ct>0){let Oa=m?40:50,Vt={x:Ze?vt.left+vt.width/2:t/2,y:vt.bottom+44,d:Oa};et={x:pa(et.x,Vt.x,ct),y:pa(et.y,Vt.y,ct),d:pa(et.d,Vt.d,ct)}}}return{orb:{...et,vis:1},warm:1,ground:{y:et.y+et.d/2},emission:te.emission}}function ri(t,l,m){if(b.name==="sound"&&jr?.isConnected){let h=jr.getBoundingClientRect(),x=Math.min(h.width,h.height)*.78;return h.bottom>0?{x:h.left+h.width/2,y:h.top+h.height/2,d:x,vis:1,ground:h.top+h.height/2+x/2}:null}if(b.name==="products"&&!b.id){let h=s.querySelector("[data-orbslot]");if(!h)return null;let x=h.getBoundingClientRect(),C=h.closest(".pc")?.classList.contains("on"),N=Math.min(x.width,x.height)*.74;return x.width>10?{x:x.left+x.width/2,y:x.top+x.height/2,d:N,vis:C?1:.7,ground:x.top+x.height/2+N/2}:null}if(b.name==="products"&&b.id&&ee?.el?.isConnected){let h=ee,x=h.el.getBoundingClientRect();if(h.id==="orb-slider"){let C=h.el.querySelector("[data-cap]");if(!C)return null;let N=C.getBoundingClientRect(),S=N.height*.84,_=(N.height-S)/2;return{x:N.left+_+S/2+h.cap*(N.width-N.height),y:N.top+N.height/2,d:S,vis:1,snap:!0}}if(h.id==="orb-wave"||h.id==="background-pack"){let C=Math.min(96,x.width*.16),N=x.height*.7+C*.1,S=N-C/2;if(h.drop){let _=h.drop;_.y==null&&(_.y=-x.height*.45),_.vy+=2600*m,_.y+=_.vy*m,_.y>=0&&(_.y=0,Ce.impact(x.width/2,N,Mt(_.vy/1400)),f.orb?.nudge(.8),o.sfx("detent"),_.vy*=-.38,(++_.contacts>2||Math.abs(_.vy)<120)&&(h.drop=null)),S+=h.drop?h.drop.y:0}return Ce.setOrb({x:x.width/2,y:S,d:C}),{x:x.left+x.width/2,y:x.top+S,d:C,vis:1,snap:!!h.drop}}}return null}addEventListener("resize",()=>{b.name==="home"&&Ve(!0)}),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__lo={audio:o,worldPreview:Ce,product:f,store:ze,get studio(){return M},get route(){return b},get sel(){return se},get psel(){return ha}});try{Object.keys(sessionStorage).filter(t=>t.startsWith("lo:scroll:")||t==="lo:sel").forEach(t=>sessionStorage.removeItem(t))}catch{}return se=0,Q(),q(),{frame:Zo,audio:o,get route(){return b},get studio(){return M},reapply:()=>G()}}function Pr(e,a){let n=document.createElement(e);return n.className=a,n}var ua={hostDuration:.95,follow:7,damping:.92,pearl:[243,243,241],chamber:[23,26,25],whiten:2.2},Qt=matchMedia("(prefers-reduced-motion: reduce)").matches,Jo=(e,a=0,n=1)=>Math.min(n,Math.max(a,e)),ea=(e,a,n)=>e+(a-e)*n,Vo=e=>{let a=Jo(e);return a<.5?4*a*a*a:1-(-2*a+2)**3/2},Wo=(e,a,n)=>e.map((o,c)=>ea(o,a[c],n)),er=(e,a=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${a})`,Ko=!1;document.addEventListener("lightorb:intro-complete",e=>Xo(e.detail));document.body.classList.contains("static")&&Xo(null);function an(){let e=document.createElement("div");e.style.cssText="position:absolute;left:0;top:0;border-radius:50%;pointer-events:none;will-change:transform;background:radial-gradient(circle at 34% 28%,#fff 0 10%,rgba(255,255,255,.55) 24%,rgba(225,228,230,.35) 58%,rgba(170,176,180,.45) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),inset 0 -12px 24px rgba(120,126,130,.18),0 18px 30px -18px rgba(38,40,39,.45)";let a=()=>a,n={element:e,place(o){e.style.width=e.style.height=`${o.d}px`,e.style.transform=`translate(${o.x-o.d/2}px,${o.y-o.d/2}px)`,e.style.opacity=o.visibility??1}};return new Proxy(n,{get:(o,c)=>c in o?o[c]:a})}function Xo(e){if(Ko)return;let n=document.querySelector(".intro").querySelector(".intro-world"),o=e?.orb??an();Ko=!0;let c=document.createElement("style");c.textContent=".x-surface,.x-orb{position:fixed;inset:0;pointer-events:none}.x-surface{z-index:6;width:100%;height:100%}.x-orb{z-index:30}",document.head.append(c);let f=document.createElement("canvas");f.className="x-surface",f.setAttribute("aria-hidden","true");let s=document.createElement("div");s.className="x-orb",document.body.append(f,s),s.append(o.element),o.attachPointer(document.createElement("div"))();let u=f.getContext("2d");o.prepareTone("ivory"),o.prepareTone("dark");let p=0,y=0,i=1,j=()=>{p=Math.max(1,innerWidth),y=Math.max(1,innerHeight),i=Math.min(devicePixelRatio||1,1.5),f.width=Math.round(p*i),f.height=Math.round(y*i)};j(),addEventListener("resize",j);let D=performance.now()/1e3,E={x:0,y:0,d:0,vx:0,vy:0,vd:0,from:null,hosted:!1},ce=new Set,q=null,ke=null,z=0,we=1,Se=1,X=D,te={left:.65,right:.55,env:.5,exposure:0,yaw:0,pitch:0,platform:!0},G=(k,$)=>{let P=performance.now()/1e3,R=Jo(P-X,0,.05);X=P,E.from||(E.from={x:k.x,y:k.y,d:k.d}),q=ke?.frame(P,R,{W:p,H:y})??null;let B=q?.orb??{x:p/2,y:y*.42,d:Math.min(p*.3,y*.42)},F=Qt?1:Vo((P-D)/ua.hostDuration);if(!E.hosted)E.x=ea(E.from.x,B.x,F),E.y=ea(E.from.y,B.y,F),E.d=ea(E.from.d,B.d,F),F>=1&&(E.hosted=!0,o.attachPointer(document.createElement("div"))(),ke?.reapply?.(),o.setMono?.(!1));else if(Qt||q?.snap)E.x=B.x,E.y=B.y,E.d=B.d,E.vx=E.vy=E.vd=0;else{let V=ua.follow,ae=ua.damping;E.vx+=(V*V*(B.x-E.x)-2*ae*V*E.vx)*R,E.x+=E.vx*R,E.vy+=(V*V*(B.y-E.y)-2*ae*V*E.vy)*R,E.y+=E.vy*R,E.vd+=(V*V*(B.d-E.d)-2*ae*V*E.vd)*R,E.d+=E.vd*R}E.hosted&&!E.hostedAt&&(E.hostedAt=P);let ie=Qt?1:Vo((P-D-.25)/ua.whiten),J=Math.min(q?.warm??1,1-ie);we=Qt?J:ea(we,J,.2),z=ea(z,q?.room==="chamber"?1:0,Qt?1:.12),Se=ea(Se,q?.orb?.vis??1,Qt?1:.14),Number.isFinite(E.x+E.y+E.d)||(console.warn("orb pose NaN",JSON.stringify(B),JSON.stringify(E)),Object.assign(E,{x:B.x,y:B.y,d:B.d,vx:0,vy:0,vd:0})),ue();let Ee=we<.002;return{...k,x:E.x,y:E.y,d:E.d,squash:0,contact:0,worldY:Ee?-9999:E.y,hideWorld:Ee,visibility:Se,emission:k.emission*(q?.emission??1),raster:Math.ceil(Math.max(E.d,B.d,140)*1.06)}};if(e?.orb)e.takeOver(G);else{let k=()=>{o.place(G({x:p/2,y:y/2,d:0,emission:1})),requestAnimationFrame(k)};requestAnimationFrame(k)}try{ue()}catch{}try{o.setBackdrop((k,$)=>Y(k,$,E))}catch(k){console.warn("backdrop",k)}let re=(()=>{try{let k=document.createElement("canvas").getContext("2d");return k.filter="blur(1px)",k.filter==="blur(1px)"}catch{return!1}})(),fe=document.createElement("canvas"),K=fe.getContext("2d");function Te(k,$,P,R){return fe.width!==R&&(fe.width=fe.height=R),K.globalCompositeOperation="copy",K.drawImage(n,k,$,P,P,0,0,R,R),K.globalCompositeOperation="saturation",K.fillStyle="#808080",K.fillRect(0,0,R,R),K.globalCompositeOperation="destination-in",K.drawImage(n,k,$,P,P,0,0,R,R),K.globalCompositeOperation="source-over",fe}function Y(k,$,P){let R=P.d/$.diameter,B=$.extent*R,F=P.x-B/2,ie=P.y-B/2,J=$.extent/B,Ee=V=>V.width>0&&V.height>0;if(k.fillStyle=er(ua.pearl),k.fillRect(0,0,$.extent,$.extent),we>.002&&Ee(n)){let V=n.width/Math.max(1,innerWidth),ae=!document.documentElement.classList.contains("warm");ae&&re&&(k.filter="grayscale(1) contrast(1.06)"),ae&&!re?k.drawImage(Te(F*V,ie*V,B*V,$.extent),0,0):k.drawImage(n,F*V,ie*V,B*V,B*V,0,0,$.extent,$.extent),ae&&re&&(k.filter="none")}Ee(f)&&k.drawImage(f,F*i,ie*i,B*i,B*i,0,0,$.extent,$.extent);for(let V of ce){if(!V.isConnected||!Ee(V))continue;let ae=V.getBoundingClientRect();ae.right<F||ae.left>F+B||ae.bottom<ie||ae.top>ie+B||k.drawImage(V,(ae.left-F)*J,(ae.top-ie)*J,ae.width*J,ae.height*J)}}function ue(){u.setTransform(i,0,0,i,0,0),u.clearRect(0,0,p,y);let k=1-we;if(k>0){u.globalAlpha=1;let P=ua.pearl,R=u.createLinearGradient(0,0,0,y);if(R.addColorStop(0,er(Wo(P,[250,251,251],.5))),R.addColorStop(.6,er(P)),R.addColorStop(1,er(Wo(P,[214,217,220],.55))),u.fillStyle=R,u.fillRect(0,0,p,y),Z(p*.62,-y*.12,Math.max(p*.85,y*.55),"255,255,255",.62),Z(p*.05,y*1.05,p*.45,"196,201,206",.35),u.globalAlpha=1,k<.999){let B=Math.hypot(p,y),F=E.x||p/2,ie=E.y||y/2,J=k*k*(3-2*k),Ee=Math.max(0,B*1.15*J-B*.45),V=Ee+B*.55,ae=u.createRadialGradient(F,ie,Ee,F,ie,V);ae.addColorStop(0,`rgba(0,0,0,${Math.min(1,J*1.6)})`),ae.addColorStop(1,"rgba(0,0,0,0)"),u.globalCompositeOperation="destination-in",u.fillStyle=ae,u.fillRect(0,0,p,y),u.globalCompositeOperation="source-over"}}for(let P of q?.glows??[]){u.save(),u.globalAlpha=P.k*k,u.translate(P.x,P.y),u.scale(1,P.h/P.w);let R=u.createRadialGradient(0,0,0,0,0,P.w);R.addColorStop(0,"rgba(255,255,255,.7)"),R.addColorStop(.5,"rgba(255,255,255,.22)"),R.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=R,u.fillRect(-P.w,-P.w,P.w*2,P.w*2),u.restore()}z>.002&&St(z);let $=q?.ground;for(let P of q?.grounds??[])xe(P,P,1)}function Z(k,$,P,R,B){let F=u.createRadialGradient(k,$,0,k,$,P);F.addColorStop(0,`rgba(${R},${B})`),F.addColorStop(1,`rgba(${R},0)`),u.fillStyle=F,u.fillRect(k-P,$-P,P*2,P*2)}let Me=Array.from({length:160},(k,$)=>{let P=Math.sin($*12.9898)*43758.5453,R=P-Math.floor(P),B=Math.sin($*78.233)*12345.678%1;return[R*Math.PI*2,Math.abs(B)*.9-.25,.3+$%7/10]});function St(k){let $=q?.stage??{x:0,y:0,w:p,h:y},P=2**(te.exposure*.5),R=te.left,B=te.right,F=$.x+$.w/2,ie=$.y+$.h*.52,J=te.yaw,Ee=te.pitch;u.save(),u.globalAlpha=k,u.fillStyle="#070808",u.fillRect(0,0,p,y),u.fillStyle="#ffffff";for(let[ot,Re,Fe]of Me){let Xe=ot-J*Fe,Ge=F+Math.sin(Xe)*$.w*.9,it=ie-(Re+Ee*.6*Fe)*$.h;Math.cos(Xe)<-.2||Ge<$.x||Ge>$.x+$.w||(u.globalAlpha=k*.1*Fe*P,u.fillRect(Ge,it,1.1,1.1))}u.globalAlpha=k;let V=ie+$.h*(.12-Ee*.55),ae=q?.product?.ground??ie+$.h*.18,at=u.createLinearGradient(0,V,0,$.y+$.h);at.addColorStop(0,"rgba(255,255,255,0)"),at.addColorStop(.25,`rgba(255,255,255,${.035*P})`),at.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=at,u.fillRect($.x,V,$.w,$.y+$.h-V);let rt=q?.product?.x??F,Et=q?.product?.d??$.h*.4;for(let[ot,Re]of[[-1,R],[1,B]]){if(Re<=.01)continue;let Fe=rt+ot*Et*(1.1+.5*Math.sin(J*ot+.4)),Xe=.18+.3*Math.max(0,Math.sin(.15+Ee));u.save(),u.translate(Fe,ae),u.scale(1,Xe);let Ge=u.createRadialGradient(0,0,0,0,0,Et*1.3);Ge.addColorStop(0,`rgba(240,242,240,${.12*Re*P})`),Ge.addColorStop(1,"rgba(240,242,240,0)"),u.fillStyle=Ge,u.beginPath(),u.arc(0,0,Et*1.3,0,Math.PI*2),u.fill(),u.restore();let it=ot<0?$.x:$.x+$.w,Pe=u.createRadialGradient(it,ie,0,it,ie,$.w*.45);Pe.addColorStop(0,`rgba(230,234,232,${.07*Re*P})`),Pe.addColorStop(1,"rgba(230,234,232,0)"),u.fillStyle=Pe,u.fillRect($.x,$.y,$.w,$.h)}let $e=u.createRadialGradient(F,ie,$.h*.2,F,ie,Math.hypot($.w,$.h)*.62);$e.addColorStop(0,"rgba(0,0,0,0)"),$e.addColorStop(1,"rgba(0,0,0,.55)"),u.fillStyle=$e,u.fillRect(0,0,p,y),u.restore()}function xe(k,$,P){if(!Number.isFinite($.d+$.x+k.y)||$.d<=0)return;let R=$.d/2,B=z>.5;u.save(),u.globalAlpha=P,u.translate($.x,k.y),u.scale(1,.2);let F=u.createRadialGradient(0,0,0,0,0,R*1.5);B?(F.addColorStop(0,"rgba(240,240,236,.12)"),F.addColorStop(1,"rgba(240,240,236,0)"),u.globalCompositeOperation="lighter"):(F.addColorStop(0,"rgba(70,72,78,.22)"),F.addColorStop(.5,"rgba(70,72,78,.07)"),F.addColorStop(1,"rgba(70,72,78,0)")),u.fillStyle=F,u.beginPath(),u.arc(0,0,R*1.5,0,Math.PI*2),u.fill(),u.restore()}let He={orb:o,reduced:Qt,chamber:te,body:{get x(){return E.x},get y(){return E.y},get d(){return E.d},get hosted(){return E.hosted}},addBackdrop:k=>ce.add(k),removeBackdrop:k=>ce.delete(k),drawBackdrop:Y,exportPNG(k,$=o.element){let R=document.createElement("canvas");R.width=Math.round(k.w*2),R.height=Math.round(k.h*2);let B=R.getContext("2d");B.drawImage(f,k.x*i,k.y*i,k.w*i,k.h*i,0,0,R.width,R.height);for(let F of $.querySelectorAll("canvas")){let ie=F.getBoundingClientRect();B.drawImage(F,(ie.left-k.x)*2,(ie.top-k.y)*2,ie.width*2,ie.height*2)}return new Promise(F=>R.toBlob(F,"image/png"))}};ke=Uo(He),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__exit={api:He,body:E,site:ke,get scene(){return q}})}export{ua as EXIT};
