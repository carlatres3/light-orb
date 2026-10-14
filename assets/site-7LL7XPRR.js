import{e as qa,f as rr,h as Nr,i as Hr,j as or,k as nr,n as Br,o as Fr,p as ir,r as sr,t as Gr,u as _r,v as Oa,w as ha,x as Ra,y as Ee,z as Yr}from"./chunk-MONRGDUC.js";var Ue=[{id:"products",label:"Products",route:"#/products",line:"Objects of light and glass, ready to use.",action:"Explore products",clip:"products",words:["products","product","pieces","piece","objects","gallery","shop"]},{id:"templates",label:"Templates",route:"#/templates",line:"Complete compositions to start from.",action:"Browse templates",clip:"templates",words:["templates","template","compositions","websites","cassettes"]},{id:"studio",label:"Studio",route:"#/studio",line:"Shape the light. Make it yours.",action:"Open Studio",clip:"studio",words:["studio","editor","customize","customise","edit","workshop"]},{id:"sound",label:"Sound",route:"#/sound",line:"Voices and the quiet sounds of glass.",action:"Listen",clip:"sound",words:["sound","sounds","voice","voices","audio","listen"]}];var lr=e=>(Object.values(e).forEach(a=>a&&typeof a=="object"&&lr(a)),Object.freeze(e)),za=lr({version:1,shell:{roughness:.01,thickness:.78,ior:1.58,tint:"#cdd2cf",tintAmount:.72,elastic:0},interior:{kind:"light",amount:.5,size:.5,motion:.4,fill:.5,colour:"#f1f0ec"},light:{colour:"#f6f6f3",strength:.9,x:-.04,y:-.3,z:.12,spread:.8,glow:.3},motion:{idle:0},voice:{enabled:!0,response:.6}}),fa=(e,a,s,o)=>lr({id:e,name:a,line:s,family:"orb",config:{...structuredClone(za),...Object.fromEntries(Object.entries(o).map(([d,h])=>[d,{...za[d],...h}]))}}),Ht=[fa("original","Light","Clear glass holding one soft white light.",{}),fa("beads","Beads","Small glass beads resting and rolling inside the shell.",{interior:{kind:"beads",amount:.6,size:.55,motion:.45},light:{strength:.7},shell:{thickness:.15,ior:1.3}}),fa("glitter","Glitter","Fine reflective flecks suspended in the volume.",{interior:{kind:"glitter",amount:.6,size:.35,motion:.35,colour:"#f4f4f2"}}),fa("liquid","Liquid","A clear liquid with a meniscus that moves with the glass.",{interior:{kind:"liquid",fill:.42,motion:.5,colour:"#dfe3e1"},light:{strength:.78}}),fa("gel","Gel","A soft gel body; the shell answers with a damped give.",{interior:{kind:"gel",amount:.55,motion:.45,colour:"#e4e6e3"},shell:{elastic:.55}})],dr=Ht[0].config,aa=e=>Ht.find(a=>a.id===e)??Ht[0],ct=[{id:"orb",name:"The Orb",kind:"Interactive object",published:!0,line:"A 3D sphere for your own work, in twenty versions: glass, metal, porcelain, bloom, and glass with light, sparkle or beads inside.",receives:["ES module (Three.js r186) with the sphere and its material","The version you choose","Integration notes and dependency list"],source:["dist/light-orb.js","dist/orb-three.js","dist/orb-lighting.js","dist/orb-floor.js"],preview:"orb",studio:!0,presets:Ht.map(e=>e.id),readiness:"preview_ready",missing:["price","checkout provider","packaged download (source export not yet assembled)"],price:null},{id:"orb-slider",name:"Orb Slider",kind:"Interactive control",published:!0,code:"kit",line:"A glass capsule whose thumb is a small orb. Slide it to enter; a spring brings it home.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Keyboard and pointer support","Six materials"],source:["dist/intro/activation.js","dist/intro/glass-control.js"],preview:"slider",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package (currently embedded in the intro)"],price:null},{id:"orb-wave",name:"Orb Wave",kind:"Surface effect",published:!1,line:"The ripple the Orb leaves on the floor when it lands, drawn in light.",receives:["Light-world shader source","Impact trigger API","Integration notes"],source:["dist/intro/light-world.js"],preview:"wave",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"background-pack",name:"Background Pack",kind:"Two environments",published:!1,line:"A dark world and a light one, and the change between them.",receives:["Dark and warm environment shader","Exposure transition","Integration notes"],source:["dist/intro/light-world.js"],preview:"backgrounds",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"crystal-controls",name:"Crystal Controls",kind:"Interface kit",published:!0,code:"kit",line:"Buttons, switches, fields and sliders in six glass materials, with light that follows the pointer.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Every state: hover, focus, pressed, selected, disabled, loading","Six materials"],source:["dist/app/glass.css.js"],preview:"controls",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged download"],price:null}],Bt=e=>ct.find(a=>a.id===e),Ur=ct.filter(e=>e.published!==!1),cn=[{id:"the-light-orb",name:"The Light Orb",line:"This website\u2019s own beginning: the Orb as host, a quiet greeting, the quotation and the four destinations.",cover:{src:"./media/templates/the-light-orb.cover.jpg",from:"dist/intro.html (post-intro welcome, live render)",meta:"./media/templates/the-light-orb.cover.json"},route:"#/",includes:["Centred welcome with the hosting Orb","Quotation scene","Destination selector"],published:!0,starter:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged source export"],price:null}],pt=cn.filter(e=>e.published!==!1),dt={engine:"Kokoro-82M v1.0",licence:"Apache-2.0",rights:{onSite:"yes",download:"not offered"}},Ut=[{id:"samantha",name:"Heart",kokoro:"af_heart",grade:"A",locale:"en-US",accent:"American",gender:"female",line:"Warm and clear. The guide\u2019s own voice.",full:!0,...dt},{id:"bella",name:"Bella",kokoro:"af_bella",grade:"A\u2212",locale:"en-US",accent:"American",gender:"female",line:"Bright and expressive, with a smile in it.",full:!0,...dt},{id:"emma",name:"Emma",kokoro:"bf_emma",grade:"B\u2212",locale:"en-GB",accent:"British",gender:"female",line:"Composed and precise. A gallery voice.",full:!0,...dt},{id:"daniel",name:"Michael",kokoro:"am_michael",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Calm and grounded. Steady narration.",full:!0,...dt},{id:"nicole",name:"Nicole",kokoro:"af_nicole",grade:"B\u2212",locale:"en-US",accent:"American",gender:"female",line:"Close and hushed, almost a whisper.",lines:"samantha",...dt},{id:"aoede",name:"Aoede",kokoro:"af_aoede",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Soft and lyrical.",lines:"samantha",...dt},{id:"kore",name:"Kore",kokoro:"af_kore",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Even and confident.",lines:"bella",...dt},{id:"isabella",name:"Isabella",kokoro:"bf_isabella",grade:"C",locale:"en-GB",accent:"British",gender:"female",line:"Light and friendly.",lines:"emma",...dt},{id:"fenrir",name:"Fenrir",kokoro:"am_fenrir",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Deep and resonant.",lines:"daniel",...dt},{id:"puck",name:"Puck",kokoro:"am_puck",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Lively and quick.",lines:"daniel",...dt},{id:"george",name:"George",kokoro:"bm_george",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"Measured and classic.",lines:"daniel",...dt},{id:"fable",name:"Fable",kokoro:"bm_fable",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"A storyteller\u2019s warmth.",lines:"daniel",...dt}],wt=e=>Ut.find(a=>a.id===e)??Ut[0],Ia={home:"Welcome to The Light Orb. A space for creative possibilities. Let\u2019s explore.",products:"Explore the pieces. Each one is designed to become part of something of your own.",templates:"Start with a complete composition. Select a cassette to preview the design.",studio:"Choose a piece, then shape its light, material and movement.",sound:"Listen before you choose. Find the voice and sounds that fit your work.",voice_audition:"A little light. A new idea. Something of your own."},cr=(e,a)=>`./media/voice/${e}.${a}.m4a`,ma={text:"I don\u2019t know why people expect art to make sense when they accept the fact that life doesn\u2019t make sense.",author:"David Lynch",work:"interview with Kristine McKenna, Los Angeles Times, 20 August 1989",source:"https://www.latimes.com/archives/la-xpm-1989-08-20-ca-1327-story.html"};var ba=[{id:"select",name:"Select",line:"A soft glass touch for choosing.",file:"./media/sfx/select.wav"},{id:"open",name:"Open",line:"A breath of air as a panel opens.",file:"./media/sfx/open.wav"},{id:"close",name:"Close",line:"The same air, settling.",file:"./media/sfx/close.wav"},{id:"confirm",name:"Confirm",line:"Two quiet glass tones.",file:"./media/sfx/confirm.wav"},{id:"detent",name:"Detent",line:"A precise tick for wheels and steps.",file:"./media/sfx/detent.wav"},{id:"type",name:"Type",line:"A dry, very quiet key.",file:"./media/sfx/type.wav"},{id:"level",name:"Level",line:"A short tone for volume changes.",file:"./media/sfx/level.wav"}],Vr={promise:"A new drop every two weeks.",open:!1,price:null,interval:null,quota:null,plans:[{id:"ready",name:"Ready-made",line:"Choose a curated piece and use it as it is.",points:["One finished piece","Its source and integration notes"]},{id:"studio",name:"Studio",line:"Customise a piece and export your own version.",points:["Light, material and movement controls","Saved designs"]},{id:"member",name:"Membership",line:"Follow the collection as it grows.",points:["A new drop every two weeks"]}]};var Wr="lightorb:audio",ra=(e,a=0,s=1)=>Math.min(s,Math.max(a,e)),pr={master:!1,guide:!0,sfx:!0,voice:Ut[0].id,gain:.8,sfxGain:.5,volume:.8};function pn(){try{return{...pr,...JSON.parse(localStorage.getItem(Wr)||"{}")}}catch{return{...pr}}}function Kr(){let e=pn();Ut.some(m=>m.id===e.voice)||(e.voice=pr.voice);let a=new Set,s=null,o=null,d=null,h=null,l=null,u=null,c=new Audio;c.preload="auto",c.crossOrigin="anonymous",c.setAttribute("playsinline","");let y=null,n={clip:null,voice:null,status:"idle",error:null,energy:0,journey:new Set},P=new Map,j=new Map,S=m=>{if(!j.has(m)){let M=fetch(m).then(R=>{if(!R.ok)throw new Error(R.status);return R.blob()}).then(R=>URL.createObjectURL(R));j.set(m,M),M.catch(()=>j.delete(m))}return j.get(m)},ie={},q=()=>a.forEach(m=>m(je)),we=()=>{try{localStorage.setItem(Wr,JSON.stringify(e))}catch{}};function O(){if(s)return s;let m=window.AudioContext||window.webkitAudioContext;if(!m)return null;s=new m,o=s.createGain(),o.connect(s.destination),d=s.createGain(),d.connect(o),h=s.createGain(),h.connect(o),l=s.createAnalyser(),l.fftSize=1024,l.smoothingTimeConstant=0,l.connect(d),u=new Float32Array(l.fftSize);try{y=s.createMediaElementSource(c),y.connect(l)}catch{y=null}return xe(),s}function xe(){if(!s)return;let m=s.currentTime;o.gain.setTargetAtTime(e.master?e.volume??.8:0,m,.02),d.gain.setTargetAtTime((e.guide||n.clip?.startsWith("voice_audition"),e.gain),m,.02),h.gain.setTargetAtTime(e.sfx?e.sfxGain:0,m,.02)}let ke=()=>{let m=O();m&&m.state!=="running"&&m.state!=="closed"&&m.resume().catch(()=>{}),Fe()};for(let m of["pointerdown","keydown","touchend"])addEventListener(m,ke,{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden?c.paused||(c.pause(),n.status="paused",n.hiddenPause=!0,q()):n.hiddenPause&&(n.hiddenPause=!1)}),c.addEventListener("ended",()=>{n.status="ended",q()}),c.addEventListener("pause",()=>{n.status==="playing"&&(n.status="paused",q())}),c.addEventListener("playing",()=>{n.status="playing",n.error=null,q()}),c.addEventListener("error",()=>{n.clip&&(n.status="error",n.error="The recording could not be loaded.",q())}),c.addEventListener("loadedmetadata",q);let Z=(m,{voice:M=e.voice,from:R=0,kind:G="guide"}={})=>(I=null,F(`${m}.${M}`,cr(m,M),{from:R,kind:G,voice:M})),ee=(m,M,{from:R=0}={})=>(I=null,F(m,M,{from:R,kind:"audition"}));async function F(m,M,{from:R=0,kind:G="guide",voice:ce=null}={}){if(G==="guide"&&(!e.master||!e.guide))return!1;if(de(),ke(),n.clip!==m){c.pause(),n.clip=m,n.voice=ce,n.status="loading",q();try{c.src=await S(M)}catch{c.src=M}if(n.clip!==m)return!1}if(n.env=null,Ce(M,200).then(le=>{n.clip===m&&(n.env=le)}).catch(()=>{}),n.kind=G,R?(c.readyState<1&&await new Promise(le=>c.addEventListener("loadedmetadata",le,{once:!0})),c.currentTime=R):c.currentTime&&(c.currentTime=0),q(),!e.master||G==="guide"&&!e.guide||n.clip!==m)return!1;try{return await c.play(),!0}catch{return n.status="blocked",n.error="Playback was blocked. Press play to start it.",q(),!1}}function ae(){c.paused||c.pause(),n.status="paused",q()}async function ve(){ke();try{await c.play()}catch{n.status="blocked",q()}}let X=typeof speechSynthesis<"u"?speechSynthesis:null,Le=0,Y={on:!1};function de(){X&&Y.on&&(Y.on=!1,X.cancel())}let Q={samantha:[/ava.*premium/i,/zoe.*premium/i,/samantha.*(enhanced|premium)/i,/(aria|jenny|emma|ava).*natural/i,/natural.*(female|aria|jenny)/i,/google us english/i,/google uk english female/i,/^(ava|zoe|allison|susan)\b/i,/^samantha/i],daniel:[/(evan|nathan|tom).*premium/i,/daniel.*(enhanced|premium)/i,/(guy|ryan|andrew|brian|christopher).*natural/i,/natural.*male/i,/google uk english male/i,/^(evan|nathan|tom|aaron)\b/i,/^daniel/i]},Te=[],Et=()=>{Te=X?.getVoices()??[]};X&&(Et(),X.addEventListener?.("voiceschanged",Et));let te=[/(paulina|monica|m[oó]nica|marisol|isabela).*(premium|enhanced)/i,/(elvira|dalia|helena|ximena|paloma).*natural/i,/natural.*(spanish|espa)/i,/google espa[nñ]ol/i,/^(paulina|monica|m[oó]nica|marisol|jorge|diego)\b/i];function ye(m){if(Te.length||Et(),m==="es"){let R=Te.filter(G=>/^es[-_]/i.test(G.lang));if(R.length){for(let G of te){let ce=R.find(le=>G.test(le.name));if(ce)return ce}return R.find(G=>G.localService===!1)??R[0]}}let M=Te.filter(R=>/^en[-_]/i.test(R.lang));for(let R of Q[wt(e.voice).gender==="male"?"daniel":"samantha"]){let G=M.find(ce=>R.test(ce.name));if(G)return G}return M.find(R=>R.localService===!1)??M[0]}let T=null,L="./media/voice/lines/",z=()=>T??=fetch(`${L}manifest.json`).then(m=>m.ok?m.json():null).catch(()=>null);z();let I=null;function U(m,{id:M,onend:R,lang:G}={}){if(!m||!e.master||!e.guide)return R?.(),!1;let ce=I={};if(M){let le=wt(e.voice).lines??e.voice;return de(),c.pause(),n.kind="guide",n.clip=`line:${M}`,n.status="loading",q(),z().then(async J=>{let Me=J?.lines?.[M]?.text===m?J.lines[M].files?.[le]:null;if(I!==ce)return;if(!Me){H(m,{onend:R,lang:G});return}let Ge=L+Me;try{await S(Ge)}catch{I===ce&&H(m,{onend:R,lang:G});return}I===ce&&(n.clip=null,R&&c.addEventListener("ended",()=>{I===ce&&R()},{once:!0}),F(`line:${M}.${le}`,Ge,{kind:"guide",voice:le}))}),!0}return H(m,{onend:R,lang:G})}function H(m,{onend:M,lang:R}={}){if(!X||!m||!e.master||!e.guide)return M?.(),!1;ke(),c.pause(),X.cancel();let G=ye(R),ce=G&&(!G.localService||/premium|enhanced|natural/i.test(G.name)),le=m.match(/[^.!?]+[.!?]*\s*/g)?.map(Me=>Me.trim()).filter(Boolean)??[m],J={};return Y.u=J,Y.on=!0,n.kind="guide",n.clip="speech",n.status="playing",q(),le.forEach((Me,Ge)=>{let fe=new SpeechSynthesisUtterance(Me);G&&(fe.voice=G,fe.lang=G.lang),fe.rate=ce?1:.94,fe.pitch=1,fe.volume=e.volume??.8,fe.onboundary=()=>{Le=1},fe.onstart=()=>{Le=1},Ge===le.length-1&&(fe.onend=fe.onerror=()=>{Y.u===J&&(Y.on=!1,n.status="stopped",q(),M?.())}),X.speak(fe)}),!0}let se=()=>ye()?.name??null;function re(){I=null,de(),c.pause(),n.status=n.clip?"stopped":"idle",q()}function ze(m){c.duration&&(c.currentTime=ra(m)*c.duration,q())}let K=performance.now();function oe(){let m=performance.now(),M=Math.min(.1,(m-K)/1e3);K=m;let R=0;if(Y.on&&e.master)Le=Math.max(0,Le-M*3.2),R=ra(.35+.45*Le+.15*Math.sin(m/90));else if(!y&&n.env&&!c.paused&&e.master&&c.duration)R=ra(n.env.bins[Math.min(n.env.bins.length-1,Math.floor(c.currentTime/c.duration*n.env.bins.length))]*1.1);else if(l&&!c.paused&&e.master){l.getFloatTimeDomainData(u);let ce=0;for(let J=0;J<u.length;J++)ce+=u[J]*u[J];let le=Math.sqrt(ce/u.length);R=ra((le-.008)/.16)}let G=R>n.energy?.05:.18;return n.energy+=(R-n.energy)*(1-Math.exp(-M/G)),n.energy<.001&&(n.energy=0),n.energy}let it=(m,M=e.voice,R=72)=>Ce(cr(m,M),R);async function Ce(m,M=72){let R=`${m}|${M}`;if(P.has(R))return P.get(R);let G=(async()=>{let ce=await(await fetch(m)).arrayBuffer(),le=window.OfflineAudioContext||window.webkitOfflineAudioContext,J=await new le(1,44100,44100).decodeAudioData(ce),Me=J.getChannelData(0),Ge=Math.max(1,Math.floor(Me.length/M)),fe=[],he=0;for(let De=0;De<M;De++){let Ot=0;for(let Ke=De*Ge;Ke<(De+1)*Ge;Ke++)Ot+=Me[Ke]*Me[Ke];let Ne=Math.sqrt(Ot/Ge);fe.push(Ne),he=Math.max(he,Ne)}return{bins:fe.map(De=>De/(he||1)),duration:J.duration}})();return P.set(R,G),G.catch(()=>P.delete(R)),G}let $t={press:"select",release:"select",volume:"level",case:"open"},ht={select:90,type:70,detent:50,level:110,open:220,close:220,confirm:400},st={select:.7,type:.45,detent:.6,level:.5,open:.6,close:.55,confirm:.7},Ie={},Ye=0;function We(m){Ie[m]||!s||(Ie[m]=fetch(`./media/sfx/${m}.wav`).then(M=>M.arrayBuffer()).then(M=>s.decodeAudioData(M)).then(M=>Ie[m]=M).catch(()=>Ie[m]=null))}function Se(m,M=.5){if(m=$t[m]||m,!e.master||!e.sfx)return;let R=O();if(!R||R.state!=="running")return;let G=performance.now();if(G-(ie[m]??0)<(ht[m]??80)||Ye>3)return;ie[m]=G;let ce=Ie[m];if(!ce||ce instanceof Promise){We(m);return}let le=R.createBufferSource(),J=R.createGain();le.buffer=ce,J.gain.value=(st[m]??.6)*(m==="level"?.6+.4*ra(M):1),m==="level"&&(le.playbackRate.value=.85+.3*ra(M)),le.connect(J),J.connect(h),Ye++,le.onended=()=>{Ye--,J.disconnect()},le.start()}let Fe=()=>{if(s)for(let m of Object.keys(ht))We(m)},je={prefs:e,state:n,el:c,get ready(){return!!s},get position(){return c.duration?c.currentTime/c.duration:0},get time(){return c.currentTime||0},get duration(){return c.duration||0},get playing(){return Y.on||!c.paused&&!c.ended},set(m){Object.assign(e,m),we(),ke(),xe(),(!e.master||!e.guide&&n.kind==="guide")&&(c.paused||c.pause(),de()),q()},play:Z,playUrl:ee,say:U,voiceName:se,pause:ae,resume:ve,stop:re,seek:ze,energy:oe,peaks:it,peaksUrl:Ce,sfx:Se,unlock:ke,once(m){return n.journey.has(m)||!e.master||!e.guide?Promise.resolve(!1):(n.journey.add(m),Z(m).then(M=>(M||n.journey.delete(m),M)))},on(m){return a.add(m),()=>a.delete(m)}};return je}var ur=ct.filter(e=>e.published!==!1),Zr=e=>e.id==="orb"||e.code==="kit",un=" Everything is free during early access, and Studio is open to try.",gn={"reply.missed":"I didn\u2019t catch that. Tap me and try again, or type.","reply.intro":`Hello, I\u2019m the Light Orb, your guide here. Tap me and speak, or type: ask me for recommendations, materials and textures, or say Products, Templates, Studio or Sound and I\u2019ll take you there.${un}`,"reply.greet":"Hi, I\u2019m the Light Orb. Tap me whenever you want to talk.","reply.help":"Ask me which Orb suits your project, about its materials and textures, or how to get the free code. Or say Products, Templates, Studio or Sound and I\u2019ll take you there.","reply.thanks":"With pleasure. I\u2019m right here when you need me.","reply.who":"I\u2019m the Light Orb, the guide of this place. I can recommend a piece or a texture, answer your questions, and take you anywhere on the site.","reply.back":"Going back.","reply.unknown":"I\u2019m still learning words. Ask me for a recommendation, or say Products, Templates, Studio or Sound.","reply.mic":"The microphone is off. You can type to me instead."},hn=" Todo es gratis durante el acceso anticipado, y Studio est\xE1 abierto para probarlo.",fn={"reply.missed":"No te he entendido. T\xF3came e int\xE9ntalo otra vez, o escr\xEDbeme.","reply.intro":`Hola, soy la Light Orb, tu gu\xEDa aqu\xED. T\xF3came y habla, o escr\xEDbeme: p\xEDdeme recomendaciones, materiales y texturas, o di Productos, Plantillas, Studio o Sonido y te llevo.${hn}`,"reply.greet":"Hola, soy la Light Orb. T\xF3came cuando quieras hablar.","reply.help":"Preg\xFAntame qu\xE9 Orb encaja con tu proyecto, por sus materiales y texturas, o c\xF3mo conseguir el c\xF3digo gratis. O di Productos, Plantillas, Studio o Sonido y te llevo.","reply.thanks":"Con gusto. Aqu\xED estoy cuando me necesites.","reply.who":"Soy la Light Orb, la gu\xEDa de este lugar. Te recomiendo piezas y texturas, respondo tus preguntas y te llevo a cualquier parte de la web.","reply.back":"Volvemos.","reply.unknown":"A\xFAn estoy aprendiendo palabras. P\xEDdeme una recomendaci\xF3n, o di Productos, Plantillas, Studio o Sonido.","reply.mic":"El micr\xF3fono est\xE1 desactivado. Puedes escribirme."},oa=(e,a="en")=>a==="es"?{id:null,text:fn[e],lang:"es"}:{id:e,text:gn[e],lang:"en"},Jr={profile:"your profile",downloads:"your downloads",saved:"what you have saved",designs:"the designs you made in Studio"};function mn(e,a){if(e==="products"&&a){let s=ur.find(o=>o.id===a);if(s)return{id:`present.product.${s.id}`,text:`This is ${s.name}. ${Zr(s)?"Try its versions; each one is free, with its code.":"Try its versions, or shape it in Studio."}`}}if(e==="templates"&&a){let s=pt.find(o=>o.id===a);if(s)return{id:`present.template.${s.id}`,text:`You are looking at the template ${s.name}. ${s.line}`}}return e==="products"?{id:"present.products",text:`Products: ${ur.length} objects of light and glass. Choose one to see it alive.`}:e==="templates"?{id:"present.templates",text:"Templates: complete compositions to start from."}:e==="studio"?{id:"present.studio",text:"This is Studio, free while we build it. Shape the light, then save your design."}:e==="sound"?{id:"present.sound",text:"This is Sound: the voices and quiet sounds of glass."}:e==="membership"?{id:"present.membership",text:"This is Membership. Everything is free for now; leave your email to hear first when plans open."}:e==="account"?a&&Jr[a]?{id:`present.account.${a}`,text:`This is your account, showing ${Jr[a]}.`}:{id:"present.account",text:"This is your account."}:e==="privacy"?{id:"present.privacy",text:"This is the privacy page: what the site keeps, and what you can ask for."}:e==="terms"?{id:"present.terms",text:"These are the terms of use of the site."}:e==="licence"?{id:"present.licence",text:"This is the licence: what you can do with the free Orb and with the pieces."}:e==="signin"?{id:"present.signin",text:"Use the email you joined with to link this device to your early access."}:e==="signup"?{id:"present.signup",text:"Join early access with your email. Everything is free while we build it, and you will hear first when new pieces open."}:{id:"present.home",text:"Welcome to The Light Orb. I\u2019m your guide: tap me to talk."}}var Xr={products:"Productos: objetos de luz y vidrio. Elige uno para verlo vivo.",templates:"Plantillas: composiciones completas para empezar.",studio:"Esto es Studio, gratis mientras lo construimos. Da forma a la luz y guarda tu dise\xF1o.",sound:"Esto es Sonido: las voces y los sonidos del vidrio.",membership:"Esto es Membres\xEDa. Ahora todo es gratis; deja tu email y sabr\xE1s primero cu\xE1ndo abren los planes.",home:"Bienvenida a The Light Orb. Soy tu gu\xEDa: t\xF3came para hablar."};function Qr(e,a,s){let o=mn(a,s);if(e!=="es")return{...o,lang:"en"};if(a==="products"&&s){let d=ur.find(h=>h.id===s);if(d)return{id:null,lang:"es",text:`Esto es ${d.name}. Prueba sus versiones${Zr(d)?"; cada una es gratis, con su c\xF3digo":", o dale forma en Studio"}.`}}return Xr[a]&&!s?{id:null,lang:"es",text:Xr[a]}:{...o,lang:"en"}}var eo=e=>({id:`already.${e.id}`,text:`We are already here. ${e.text}`}),to=e=>({id:`piece.${e.id}`,text:`Here is ${e.name}. ${e.line}`}),ao=e=>({id:`open.${e.id}`,text:`Opening ${e.name}.`}),ro=()=>({id:"piece.orb",text:`Here is the Orb. ${ct[0].line}`});var na=(e,a,s)=>e+(a-e)*s,gr=e=>{let a=parseInt(String(e).replace("#",""),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]},hi=gr("#f3d8c5"),bn={fill:.08,lobe:.2,wall:.55,core:.034},kt=e=>structuredClone(e??za);function Pa(e,a,{dark:s=!1,envBoost:o=1,exposure:d=0,left:h=.65,right:l=.55}={}){let u=a.shell,c=a.light,y=a.interior;e.setOptics({...bn,lobe:na(.1,.3,c.spread),core:na(.026,.044,c.spread)}),e.setInterior({kind:y.kind,amount:y.amount,size:y.size,motion:y.motion,fill:y.fill,colour:y.colour}),e.setElastic(u.elastic??0);let n=gr(u.tint);e.setMaterial({roughness:u.roughness,thickness:na(.3,1.4,u.thickness),ior:u.ior,envMapIntensity:(s?1.9:2.1)*o*2**(d*.5),tint:n,tintDistance:u.tintAmount>.001?na(8,.4,u.tintAmount):0}),e.setNeutral?.(!0);let P=gr(c.colour),j=Math.max(...P);e.setLight({tint:P.map(ie=>ie/Math.max(.05,j)*1.05),spread:na(.7,1.6,c.spread)}),e.setBloom(na(.004,.08,c.glow)),e.setFocus({x:c.x,y:c.y,z:c.z}),e.setTone(s?"dark":"light"),e.setVolumeWorld(0),e.lockFeather([.5,.515]);let S=ie=>(Math.round(ie*10)/10).toFixed(1);return e.setWorld(s?`chamber:${S(h)}:${S(l)}`:"gallery"),{emission:c.strength/.72*2**(d*.35),voice:a.voice}}var Qe=(e,a)=>a.split(".").reduce((s,o)=>s?.[o],e);var oo=`
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
`;var Be=null,ut=null,ia=null,xa=0,xn=performance.now()/1e3,Re={exposure:1,target:1,impacts:[null,null],next:0,strength:1,scale:90,horizon:.27,lamp:.9,orb:null};function ja(e){if(!ut){ut=document.createElement("canvas"),ut.className="world-preview",ut.setAttribute("aria-hidden","true"),ut.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:inherit";try{Be=_r(ut)}catch{Be=null}}return Be&&(ia=e,e.prepend(ut),hr(),vn()),ut}function va(){cancelAnimationFrame(xa),xa=0,ut?.remove(),ia=null}function hr(){if(!ia||!Be)return;let e=ia.getBoundingClientRect();Be.resize(Math.max(2,e.width),Math.max(2,e.height),Math.min(devicePixelRatio||1,1.5))}addEventListener("resize",hr);var $e={state:Re,setExposure(e,a=!1){Re.target=e,a&&(Re.exposure=e)},impact(e,a,s=Re.strength){let o=Re.next++%2;Re.impacts[o]={x:e,y:a,at:performance.now()/1e3,strength:s}},set(e){Object.assign(Re,e)},setOrb(e){Re.orb=e},get canvas(){return ut}};function vn(){cancelAnimationFrame(xa);let e=()=>{if(!ia||!Be)return;let a=performance.now()/1e3,s=ia.getBoundingClientRect();Math.abs(s.width-ut.width/Be.ratio)>2&&hr(),Re.exposure+=(Re.target-Re.exposure)*.05;let o=s.height,d=Re.orb;Be.setHorizon(Re.horizon),Be.setExposure(Re.exposure),Be.setNightGain(1),d?(Be.setOrb(d.x,d.y,d.d),Be.setLamp(d.x,d.y,d.d*3,Re.lamp*(1-Re.exposure)),Be.setReveal(d.x,d.y,Math.hypot(s.width,o),Re.exposure*60)):(Be.setReveal(0,0,1,0),Be.setLamp(0,0,1,0)),Re.impacts.forEach((h,l)=>Be.setImpact(l,h?.x??0,h?.y??0,h?a-h.at:-1,h?.strength??0,Re.scale)),Be.render(a-xn),xa=requestAnimationFrame(e)};xa=requestAnimationFrame(e)}var yn=/^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/,Na=e=>typeof e=="string"&&e.length<=254&&yn.test(e.trim()),io="trescarla@gmail.com",ya=()=>`<p class="note contact">Questions? <a href="mailto:${io}">${io}</a></p>`,so="lightorb:profile",wn=e=>String(e).replace(/[&<>"]/g,a=>`&#${a.charCodeAt(0)};`);async function fr({email:e,name:a="",source:s}){if(e=String(e??"").trim(),a=String(a??"").trim().slice(0,40),!Na(e))return{ok:!1,error:"Please enter a valid email address."};if(!ha)return{ok:!1,error:"Early access sign-up opens soon. Nothing was sent."};try{let o=await fetch(ha,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,...a?{name:a}:{},source:s,lang:(navigator.language||"en").slice(0,5)})});if(!o.ok)return{ok:!1,error:o.status===429?"Too many tries \u2014 please wait a minute.":"That did not go through. Please try again later."}}catch{return{ok:!1,error:"That did not go through. Please check your connection and try again."}}try{let o=JSON.parse(localStorage.getItem(so))??{};localStorage.setItem(so,JSON.stringify({...o,email:e,...a?{name:a}:{},joined:o.joined??new Date().toISOString()}))}catch{}return Ee("waitlist_join",{source:s}),{ok:!0}}var mr=e=>`<div class="joined glass" role="status" tabindex="-1"><p class="kicker">You\u2019re in</p>
  <h2>Welcome to early access</h2><p>We\u2019ll write to <b>${wn(e)}</b> when new pieces and Studio updates open. Everything stays free while we build it.</p>
  <div class="acts eq"><a class="gb small primary" href="#/studio">Open Studio</a><a class="gb small" href="#/account">Your account</a></div></div>`;function Vt(e,{compact:a=!1,label:s="",title:o="Join early access"}={}){let d=!!ha;return`<form class="form interest wl${a?" wl-c":""}" data-waitlist="${e}" novalidate>
    ${a?"":`<h2>${o}</h2>`}
    <label class="fl"><span>${s||(a?"Join early access \u2014 free; one email when new pieces open":"Free. We email you when new pieces and Studio updates open.")}</span>
      <span class="wl-row"><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"${d?"":" disabled"}>
      <button class="gb${a?" small":""}" type="submit"${d?"":" disabled"}><span>Join</span></button></span></label>
    <p class="note" data-wlmsg role="status" aria-live="polite">${d?'We only keep your email to tell you about new pieces and Studio updates. See <a href="#/privacy">privacy</a>; leave any time.':'Sign-up opens soon \u2014 nothing typed here is sent yet. See <a href="#/privacy">privacy</a>.'}</p>
  </form>`}function Ha(e){e.querySelectorAll("[data-waitlist]").forEach(a=>a.addEventListener("submit",async s=>{if(s.preventDefault(),!ha)return;let o=a.querySelector("[data-wlmsg]"),d=a.querySelector("input"),h=a.querySelector("button"),l=d.value.trim();if(!Na(l)){o.textContent="Please enter a valid email address.",d.focus();return}h.disabled=!0,h.setAttribute("aria-busy","true");let u=await fr({email:l,source:a.dataset.waitlist});if(u.ok){let c=document.createElement("div");c.innerHTML=mr(l);let y=c.firstElementChild;a.replaceWith(y),y.focus({preventScroll:!0});return}o.textContent=u.error,h.disabled=!1,h.removeAttribute("aria-busy")}))}var Da=500;function lo(e){return`<div class="fb" data-fbwrap><button class="tl" type="button" data-fbbtn aria-expanded="false" aria-controls="fb-p"><span>What's missing?</span></button>
    <form class="form fb-p" id="fb-p" data-feedback="${e}" novalidate hidden>
      <label class="fl"><span>Tell us what Studio or the pieces still need</span>
        <textarea class="gi" name="text" rows="3" maxlength="${Da}" required></textarea></label>
      <div class="acts"><button class="gb small" type="submit"${Ra?"":" disabled"}><span>Send</span></button></div>
      <p class="note" data-fbmsg role="status" aria-live="polite">Up to ${Da} characters. Only the text and the page are kept.</p>
    </form></div>`}function co(e,{sfx:a=()=>{}}={}){e.querySelectorAll("[data-fbwrap]").forEach(s=>{let o=s.querySelector("[data-fbbtn]"),d=s.querySelector("[data-feedback]");o.addEventListener("click",()=>{let h=d.hidden;d.hidden=!h,o.setAttribute("aria-expanded",String(h)),a(h?"open":"close"),h&&d.querySelector("textarea").focus()}),d.addEventListener("submit",async h=>{if(h.preventDefault(),!Ra)return;let l=d.querySelector("[data-fbmsg]"),u=d.querySelector("textarea"),c=d.querySelector("button"),y=u.value.trim();if(!y){l.textContent="Write a few words first.",u.focus();return}if(y.length>Da){l.textContent=`Please keep it under ${Da} characters.`;return}c.disabled=!0;try{let n=await fetch(Ra,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:y,page:d.dataset.feedback})});n.ok?(l.textContent="Thank you \u2014 we read every note.",u.value="",Ee("feedback_send",{page:d.dataset.feedback})):l.textContent=n.status===429?"Too many notes for now \u2014 please try again later.":"That did not go through. Please try again later."}catch{l.textContent="That did not go through. Please try again later."}c.disabled=!1})})}var br=[["clear","Clear glass",0],["chrome","Liquid metal",1],["porcelain","Porcelain over glass",2],["bloom","Milky glass \xB7 cloud",3],["core","Glass \xB7 light core",4],["points","Glass \xB7 points of light",5],["glitter","Glass \xB7 glitter",6],["beads","Glass \xB7 beads",7],["liquid","Glass \xB7 liquid",8]],Ga=Object.fromEntries(br.map(([e,,a])=>[e,a])),xr={clear:[[1,1,1],[1,1,1]],chrome:[[1,1,1],[1,1,1]],porcelain:[[.13,.17,.18],[.86,.64,.3]],bloom:[[1,.42,.45],[1,.72,.68]],core:[[1,.97,.92],[1,1,1]],points:[[.92,.96,1],[1,1,1]],glitter:[[.95,.96,1],[1,1,1]],beads:[[.97,.97,.96],[1,.9,.95]],liquid:[[.55,.78,.95],[.9,.97,1]]},Fa=[-.6,.55,.6],kn=Math.hypot(...Fa),Sn=Math.atan2(Fa[0],Fa[2])*180/Math.PI,En=Math.asin(Fa[1]/kn)*180/Math.PI,wa=e=>"#"+e.map(a=>Math.round(Math.min(1,Math.max(0,a))*255).toString(16).padStart(2,"0")).join(""),_a=e=>{let a=parseInt(String(e).replace("#",""),16)||0;return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]};function po(e={id:"clear",base:"clear"}){let a=Ga[e.base]===void 0?"clear":e.base,[s,o]=xr[a];return{v:1,variant:e.id||a,base:a,material:{tint:wa(e.tint??s),accent:wa(e.accent??o),refraction:1,dispersion:0,frost:0,rim:1,opacity:1,iridescence:0,exposure:1},interior:{amount:0,size:1,speed:1,glow:1,fill:.55},light:{angle:+Sn.toFixed(2),height:+En.toFixed(2),key:1,rim:1,environment:1,horizon:1,colour:"#ffffff"},motion:{spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},scene:{background:"none",colour:"#0b0c0c",colour2:"#2a2d2c",size:1,shadow:0,reflection:0}}}var Ba=e=>e&&typeof e=="object"&&!Array.isArray(e);function sa(e,a){let s=structuredClone(e);if(!Ba(a))return s;for(let[o,d]of Object.entries(a))o in s&&(Ba(s[o])?Ba(d)&&(s[o]=sa(s[o],d)):typeof d==typeof s[o]&&(typeof d!="number"||Number.isFinite(d))&&(s[o]=d));return Ga[s.base]===void 0&&(s.base="clear"),s}function Ya(e,a){let s={};for(let[o,d]of Object.entries(a))if(Ba(d)){let h=Ya(e?.[o]??{},d);Object.keys(h).length&&(s[o]=h)}else if(typeof d=="number"){let h=Math.round(d*1e3)/1e3;(e?.[o]===void 0||Math.round(e[o]*1e3)/1e3!==h)&&(s[o]=h)}else e?.[o]!==d&&(s[o]=d);return s}var $n=e=>btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var uo=(e,a)=>$n(JSON.stringify(Ya(a,e)));var et=[{id:"clear",base:"clear",name:"Clear",line:"Thick clear glass, nothing inside but its own depth."},{id:"smoke",base:"clear",name:"Smoke",line:"Smoked glass, a grey depth that darkens to the rim.",tint:[.6,.62,.65]},{id:"amber",base:"clear",name:"Amber",line:"Warm amber glass, like light through honey.",tint:[1,.8,.52]},{id:"chrome",base:"chrome",name:"Chrome",line:"Liquid chrome that keeps folding the room it reflects."},{id:"gold",base:"chrome",name:"Liquid Gold",line:"Molten gold folding over itself.",tint:[1,.79,.45]},{id:"gunmetal",base:"chrome",name:"Gunmetal",line:"Dark liquid metal with cold highlights.",tint:[.5,.53,.57]},{id:"porcelain",base:"porcelain",name:"Porcelain",line:"Raised porcelain bands with gold edges over dark glass."},{id:"silverline",base:"porcelain",name:"Silverline",line:"Porcelain bands edged in silver over dark glass.",accent:[.82,.84,.88]},{id:"celadon",base:"porcelain",name:"Celadon",line:"Porcelain bands over green celadon glass.",tint:[.22,.36,.3]},{id:"bloom",base:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud."},{id:"lilac",base:"bloom",name:"Lilac",line:"Milky glass holding a slow violet cloud.",tint:[.62,.45,1],accent:[.86,.76,1]},{id:"lagoon",base:"bloom",name:"Lagoon",line:"Milky glass holding a slow sea-blue cloud.",tint:[.2,.62,.9],accent:[.6,.92,.9]},{id:"core",base:"core",name:"Core",line:"Clear glass holding one soft white light at its centre."},{id:"dawn",base:"core",name:"Dawn",line:"Clear glass holding a warm, low light.",tint:[1,.72,.45]},{id:"starlight",base:"points",name:"Starlight",line:"Clear glass full of small points of light that drift and twinkle."},{id:"firefly",base:"points",name:"Firefly",line:"Warm points of light drifting slowly inside the glass.",tint:[1,.78,.4]},{id:"glitter",base:"glitter",name:"Glitter",line:"Fine silver flecks that catch the light as the sphere turns."},{id:"goldleaf",base:"glitter",name:"Gold Leaf",line:"Flakes of gold suspended in clear glass.",tint:[1,.78,.4]},{id:"beads",base:"beads",name:"Beads",line:"Small milky glass beads floating inside the shell."},{id:"pearls",base:"beads",name:"Pearls",line:"Soft pearls with a faint rainbow sheen, floating inside.",tint:[1,.95,.97],accent:[.85,.9,1]}],fo=Ga,go={0:{tint:[1,1,1],accent:[1,1,1]},1:{tint:[1,1,1],accent:[1,1,1]},2:{tint:[.13,.17,.18],accent:[.86,.64,.3]},3:{tint:[1,.42,.45],accent:[1,.72,.68]},4:{tint:[1,.97,.92],accent:[1,1,1]},5:{tint:[.92,.96,1],accent:[1,1,1]},6:{tint:[.95,.96,1],accent:[1,1,1]},7:{tint:[.97,.97,.96],accent:[1,.9,.95]},8:{tint:[.55,.78,.95],accent:[.9,.97,1]}},Ft=e=>po(et.find(a=>a.id===e)??et[0]),Tn=e=>{let a=et.find(o=>o.id===e)??et[0],s=fo[a.base];return{k:s,tint:a.tint??go[s].tint,accent:a.accent??go[s].accent}},Cn=`
  uniform mat3 uRot;
  varying vec3 vN; varying vec3 vP; varying vec3 vObj;
  void main() {
    vObj = uRot * position;              // the material turns with the drag
    vN = normalize(normalMatrix * normal);
    vec4 wp = modelViewMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    gl_Position = projectionMatrix * wp;
  }`,Mn=`
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
  }`,ka=null;function An(){if(ka)return ka;let e=document.createElement("canvas"),a=new sr({canvas:e,alpha:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0});a.setClearColor(0,0);let s=new or,o=new ir(30,1,.1,20);o.position.set(0,0,4.9);let d=new Fr({vertexShader:Cn,fragmentShader:Mn,transparent:!0,premultipliedAlpha:!0,uniforms:{uKind:{value:0},uTint:{value:new qa(1,1,1)},uAccent:{value:new qa(1,1,1)},uTime:{value:0},uStir:{value:0},uRot:{value:new rr},...Object.fromEntries(Object.entries(mo).map(([l,u])=>[l,{value:Array.isArray(u)?new qa(...u):u}]))}}),h=new nr(new Br(1,128,96),d);return s.add(h),ka={r:a,scene:s,camera:o,mat:d,mesh:h,list:new Set,raf:0},ka}var mo={uIor:1,uDisp:0,uFrost:0,uRim:1,uOpacity:1,uIrid:0,uExp:1,uAmt:0,uSize:1,uGlow:1,uFill:.55,uKeyDir:[-.6/Math.hypot(.6,.55,.6),.55/Math.hypot(.6,.55,.6),.6/Math.hypot(.6,.55,.6)],uKey:1,uRimL:1,uEnv:1,uHorizon:1,uLightCol:[1,1,1]},ho=Math.tan(Math.asin(1/4.9))/Math.tan(15*Math.PI/180),qn=1/(4.9*Math.tan(15*Math.PI/180));function On(e){let a=e.cfg;if(!a){let u=Tn(e.kind);return{...mo,uKind:u.k,uTint:u.tint,uAccent:u.accent}}let s=a.material,o=a.interior,d=a.light,h=d.angle*Math.PI/180,l=d.height*Math.PI/180;return{uKind:fo[a.base]??0,uTint:_a(s.tint),uAccent:_a(s.accent),uIor:s.refraction,uDisp:s.dispersion,uFrost:s.frost,uRim:s.rim,uOpacity:s.opacity,uIrid:s.iridescence,uExp:s.exposure,uAmt:o.amount,uSize:Math.max(.2,o.size),uGlow:o.glow,uFill:o.fill,uKeyDir:[Math.cos(l)*Math.sin(h),Math.sin(l),Math.cos(l)*Math.cos(h)],uKey:d.key,uRimL:d.rim,uEnv:d.environment,uHorizon:d.horizon,uLightCol:_a(d.colour)}}function vr(){let e=ka;e.raf=0;let a=performance.now()/1e3,s=Math.min(devicePixelRatio||1,1.5);for(let d of e.list){if(!d.visible||!d.canvas.isConnected)continue;d.step(a);let h=Math.max(2,Math.round(d.canvas.clientWidth*s)),l=Math.max(2,Math.round(d.canvas.clientHeight*s));(d.canvas.width!==h||d.canvas.height!==l)&&(d.canvas.width=h,d.canvas.height=l),e.r.setSize(h,l,!1),e.camera.aspect=h/l,e.camera.updateProjectionMatrix();let u=e.mat.uniforms;for(let[n,P]of Object.entries(On(d)))Array.isArray(P)?u[n].value.fromArray(P):u[n].value=P;u.uTime.value=d.time,u.uStir.value=d.stir,u.uRot.value.copy(d.rot),e.mesh.scale.setScalar(d.scale),e.mesh.position.y=d.lift,e.r.render(e.scene,e.camera);let c=d.ctx;c.clearRect(0,0,h,l);let y=d.cfg?.scene;y?Rn(d,c,h,l,e.r.domElement,y):c.drawImage(e.r.domElement,0,0,h,l)}let o=!1;for(let d of e.list)if(d.visible&&d.canvas.isConnected){o=!0;break}o&&(e.raf=requestAnimationFrame(vr))}var Wt=null;function Rn(e,a,s,o,d,h){if(h.background==="solid")a.fillStyle=h.colour,a.fillRect(0,0,s,o);else if(h.background==="gradient"){let y=a.createRadialGradient(s/2,o*.42,0,s/2,o*.5,Math.hypot(s,o)*.6);y.addColorStop(0,h.colour2),y.addColorStop(1,h.colour),a.fillStyle=y,a.fillRect(0,0,s,o)}let l=ho*e.scale*o/2,u=o/2-e.lift*qn*o/2,c=o/2+ho*h.size*o/2;if(h.shadow>0){let y=Math.max(0,c-(u+l)),n=1/(1+y/l*2);a.save(),a.translate(s/2,c),a.scale(1,.16);let P=a.createRadialGradient(0,0,0,0,0,l*(1.05+(1-n)*.5));P.addColorStop(0,`rgba(0,0,0,${(.55*h.shadow*n).toFixed(3)})`),P.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=P,a.beginPath(),a.arc(0,0,l*1.6,0,Math.PI*2),a.fill(),a.restore()}if(h.reflection>0&&c<o){let y=Math.min(o-c,l*2);Wt||=document.createElement("canvas"),(Wt.width!==s||Wt.height!==o)&&(Wt.width=s,Wt.height=o);let n=Wt.getContext("2d");n.clearRect(0,0,s,o),n.save(),n.translate(0,c*2),n.scale(1,-1),n.drawImage(d,0,0,s,o),n.restore(),n.globalCompositeOperation="destination-in";let P=n.createLinearGradient(0,c,0,c+y);P.addColorStop(0,`rgba(0,0,0,${(.5*h.reflection).toFixed(3)})`),P.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=P,n.fillRect(0,0,s,o),n.globalCompositeOperation="source-over",a.drawImage(Wt,0,0)}a.drawImage(d,0,0,s,o)}function Sa(e,a="clear",{interactive:s=!0,reduced:o=matchMedia("(prefers-reduced-motion: reduce)").matches,config:d=null}={}){let h;try{h=An()}catch{let Z=()=>{};return new Proxy({},{get:()=>Z})}let l=document.createElement("canvas");l.className="sph-c",l.setAttribute("aria-hidden","true"),e.append(l);let u={spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},c=()=>O.cfg?.motion??u,y={v:.4,vel:o?0:.12},n={v:-.15,vel:0},P={x:0,y:0,tx:0,ty:0},j=new Nr,S=new Hr,ie=performance.now()/1e3,q=null,we=0,O={canvas:l,ctx:l.getContext("2d"),kind:a,cfg:d?sa(Ft(d.variant||a),d):null,visible:!1,time:Math.random()*40,stir:0,speech:0,scale:1,lift:0,rot:new rr,step(Z){let ee=Math.min(.05,Z-ie);ie=Z,we+=ee;let F=c(),ae=o?0:F.spin;q||(y.vel+=(ae-y.vel)*ee*.8,n.vel*=Math.exp(-ee*3),n.v+=(F.tilt-n.v)*ee*.8),y.v+=y.vel*ee,n.v=Math.max(-1.2,Math.min(1.2,n.v+n.vel*ee)),P.x+=(P.tx*F.pointer-P.x)*ee*5,P.y+=(P.ty*F.pointer-P.y)*ee*5,O.stir*=Math.exp(-ee*1.6),O.time+=ee*(o?.3:1)*(1+O.stir*3)*(O.cfg?O.cfg.interior.speed:1),S.set(n.v+P.y*.25,y.v+P.x*.35,F.roll,"YXZ"),j.makeRotationFromEuler(S),O.rot.setFromMatrix4(j);let ve=O.cfg?O.cfg.scene.size:1,X=o?0:1;O.scale=ve*(1+X*F.breathe*Math.sin(we*1.3)+O.speech*F.speech*.06),O.lift=X*F.bob*ve*Math.sin(we*Math.PI*2*F.bobSpeed)}};O.cfg&&(O.kind=O.cfg.variant);let xe=(Z,ee,F=.016)=>{let ae=c().inertia;y.v+=Z*.01,n.v+=ee*.01,y.vel=Z*.01/F*.6*ae,n.vel=ee*.01/F*.6*ae};if(s){l.style.touchAction="pan-y",l.style.cursor="grab",l.addEventListener("pointerdown",F=>{q={x:F.clientX,y:F.clientY,t:performance.now(),moved:!1},l.setPointerCapture(F.pointerId),l.style.cursor="grabbing"}),l.addEventListener("pointermove",F=>{let ae=l.getBoundingClientRect();if(P.tx=((F.clientX-ae.left)/ae.width-.5)*2,P.ty=((F.clientY-ae.top)/ae.height-.5)*2,!q)return;let ve=performance.now(),X=F.clientX-q.x,Le=F.clientY-q.y,Y=Math.max(8,ve-q.t)/1e3;Math.hypot(X,Le)>3&&(q.moved=!0),xe(X,Le,Y),q.x=F.clientX,q.y=F.clientY,q.t=ve});let Z=()=>{q&&(q.moved||(O.stir=Math.min(1.5,O.stir+c().stir)),q=null,l.style.cursor="grab")};l.addEventListener("pointerup",Z),l.addEventListener("pointercancel",Z),l.addEventListener("pointerleave",()=>{P.tx=P.ty=0});let ee=!1;l.addEventListener("pointerdown",()=>{ee=!1},!0),l.addEventListener("pointermove",()=>{q?.moved&&(ee=!0)}),l.addEventListener("click",F=>{ee&&(F.preventDefault(),F.stopPropagation())})}let ke=new IntersectionObserver(([Z])=>{O.visible=Z.isIntersecting,O.visible&&!h.raf&&(h.raf=requestAnimationFrame(vr))});return ke.observe(l),h.list.add(O),h.raf||(h.raf=requestAnimationFrame(vr)),{canvas:l,setKind(Z){O.kind=Z,O.stir=1},setConfig(Z){O.cfg=Z?sa(Ft(Z.variant||O.kind),Z):null,O.cfg&&(O.kind=O.cfg.variant)},setSpeech(Z){O.speech=Math.max(0,Math.min(1,Z||0))},rotate(Z,ee){xe(Z,ee)},resetView(){y.v=.4,n.v=c().tilt,y.vel=o?0:c().spin,n.vel=0},stir(){O.stir=Math.min(1.5,O.stir+c().stir)},dispose(){ke.disconnect(),h.list.delete(O),l.remove()}}}var bo=`
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
  .sx-cv{grid-row:2}
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
`;var be=(e,a=0,s=1)=>Math.min(s,Math.max(a,e)),zn=(e,a,s)=>e+(a-e)*s,xo="lo:studio2",ko=2,vo=Math.PI/180,In="https://carlatres3.github.io/light-orb/embed/v1/orb.js",Pe=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),So=e=>et.find(a=>a.id===e)??et[0];function Kt(e="orb",a="clear"){let s=So(a).id;return{v:ko,version:1,family:Bt(e)?e:"orb",preset:s,sph:Ft(s),zoom:1,orb:kt(aa("original").config),scene:{exposure:0,left:.65,right:.55,env:.5},view:{yaw:0,pitch:0,zoom:1},rot:0,slider:{length:420,height:92,tint:"#ffffff",tintAmount:0,preset:"original"},wave:{strength:.9,scale:80,exposure:1},bg:{exposure:1,horizon:.27,lamp:.8},ctl:{tint:"#ffffff",tintAmount:.1,depth:5,radius:999,blur:8}}}function yr(e){let a=Kt(e?.family,e?.sph?.variant||(et.some(o=>o.id===e?.preset)?e.preset:"clear"));if(!e||typeof e!="object")return a;let s={...a};for(let o of["orb","scene","view","slider","wave","bg","ctl"])e[o]&&typeof e[o]=="object"&&(s[o]={...a[o],...structuredClone(e[o])});return e.orb?.light&&(s.orb=structuredClone(e.orb)),e.sph&&(s.sph=sa(Ft(e.sph.variant||a.preset),e.sph)),typeof e.rot=="number"&&(s.rot=e.rot),typeof e.zoom=="number"&&(s.zoom=be(e.zoom,.25,3)),s.preset=s.sph.variant,s}var Pn=["bloom","core","points","glitter","beads","liquid"],jn=[["material","Material",()=>[["sph.base","Material","select",br.map(([e,a])=>[e,a]),"What the sphere is made of"],["sph.material.tint","Tint","color","Main colour of the glass, metal or cloud"],["sph.material.accent","Accent","color","Second colour: porcelain edges, cloud highlights, bead sheen, liquid surface"],["sph.material.refraction","Refraction",0,2.5,.01,"\xD7","How strongly the glass bends the room (index of refraction)"],["sph.material.dispersion","Dispersion",0,1,.01,"%","Colour fringes: the rainbow split of light through glass"],["sph.material.frost","Frost",0,1,.01,"%","Roughness: from polished to frosted, diffuse reflections"],["sph.material.rim","Fresnel rim",0,3,.01,"\xD7","Brightness of reflections at the edge"],["sph.material.iridescence","Iridescence",0,1,.01,"%","Thin-film rainbow sheen at the rim"],["sph.material.opacity","Opacity",0,1,.01,"%","How much of the background shows through"],["sph.material.exposure","Exposure",.2,2.5,.01,"\xD7","Overall brightness of the sphere"]]],["interior","Interior",e=>Pn.includes(e.sph.base)?[["sph.interior.amount",e.sph.base==="liquid"?"Density":"Amount",-1,1,.01,"%","How much is inside: more points, flakes, beads or cloud"],["sph.interior.size","Size",.3,2.5,.01,"\xD7","Scale of what is inside"],["sph.interior.speed","Motion",0,4,.01,"\xD7","Speed of the inner movement (also the metal and porcelain flow)"],["sph.interior.glow","Glow",0,3,.01,"\xD7","Brightness of what is inside"],...e.sph.base==="liquid"?[["sph.interior.fill","Fill level",0,1,.01,"%","How full the sphere is"]]:[]]:[["sph.interior.speed","Flow speed",0,4,.01,"\xD7","Speed of the surface flow and inner movement"]]],["light","Lighting",()=>[["sph.light.angle","Key angle",-180,180,1,"\xB0","Direction of the main soft box around the sphere"],["sph.light.height","Key height",-30,90,1,"\xB0","Height of the main soft box"],["sph.light.key","Key light",0,3,.01,"\xD7","Strength of the main soft box"],["sph.light.rim","Rim light",0,3,.01,"\xD7","Strength of the second (rim) soft box"],["sph.light.environment","Environment",0,2,.01,"\xD7","Brightness of the studio room reflected in the sphere"],["sph.light.horizon","Horizon",0,3,.01,"\xD7","The bright horizon line in reflections"],["sph.light.colour","Light colour","color","Colour of all the light"]]],["motion","Motion",()=>[["sph.motion.spin","Idle spin",-1.5,1.5,.01,"r/s","Turntable speed when nobody touches it (negative turns the other way)"],["sph.motion.tilt","Axis tilt",-1.2,1.2,.01,"rad","Rest tilt of the spin axis towards the viewer"],["sph.motion.roll","Axis roll",-1.6,1.6,.01,"rad","Sideways tilt of the spin axis"],["sph.motion.bob","Float",0,.4,.005,"r","Up-and-down float amplitude"],["sph.motion.bobSpeed","Float speed",0,3,.01,"Hz","Float cycles per second"],["sph.motion.breathe","Breathing",0,.12,.001,"%","Slow pulse of the size"],["sph.motion.pointer","Pointer follow",0,3,.01,"\xD7","How much it leans towards the pointer"],["sph.motion.stir","Tap stir",0,3,.01,"\xD7","How much a tap stirs what is inside"],["sph.motion.inertia","Drag inertia",0,2,.01,"\xD7","How long it keeps turning after a drag"],["sph.motion.speech","Speech pulse",0,3,.01,"\xD7","How much it pulses with a voice (test below)"]]],["scene","Scene",()=>[["sph.scene.background","Background","seg",[["none","None"],["solid","Solid"],["gradient","Gradient"]],"Transparent, a solid colour or a soft radial gradient"],["sph.scene.colour","Colour","color","Background colour (outer colour of the gradient)"],["sph.scene.colour2","Centre colour","color","Inner colour of the gradient"],["sph.scene.size","Sphere size",.3,1.2,.01,"%","Size of the sphere in its frame (leave room for the shadow)"],["sph.scene.shadow","Floor shadow",0,1,.01,"%","Soft contact shadow under the sphere"],["sph.scene.reflection","Reflection",0,1,.01,"%","Mirror reflection on the floor"]]]],yo={scene:["Studio light",[["scene.exposure","Exposure",-2,2,.1,"EV"],["scene.left","Left light",0,1,.01,"%"],["scene.right","Right light",0,1,.01,"%"],["scene.env","Environment",0,1,.01,"%"]]],light:["Orb light",[["orb.light.colour","Colour","color"],["orb.light.strength","Strength",0,1,.01,"%"],["orb.light.x","Position X",-.6,.6,.01,"r"],["orb.light.y","Position Y",-.8,.6,.01,"r"]]],slider:["Capsule",[["slider.length","Length",240,600,1,"px"],["slider.height","Height",60,130,1,"px"],["slider.tint","Glass tint","color"],["slider.tintAmount","Tint amount",0,1,.01,"%"],["slider.preset","Orb thumb","select",Ht.map(e=>[e.id,e.name])]]],wave:["Wave",[["wave.strength","Strength",.1,1,.01,"%"],["wave.scale","Ring scale",40,140,1,"px"],["wave.exposure","Environment",0,1,.01,"%"]]],bg:["Environment",[["bg.exposure","Dark \u2192 warm",0,1,.01,"%"],["bg.horizon","Horizon",.15,.45,.01,"%"],["bg.lamp","Orb lamp (dark)",0,1,.01,"%"]]],ctl:["Crystal controls",[["ctl.tint","Tint","color"],["ctl.tintAmount","Tint amount",0,1,.01,"%"],["ctl.depth","Optical depth",0,10,.5,"px"],["ctl.radius","Corner radius",6,999,1,"px"],["ctl.blur","Backdrop blur",0,24,1,"px"]]]},Dn={"orb-slider":["slider","light","scene"],"orb-wave":["wave"],"background-pack":["bg"],"crystal-controls":["ctl"]},wo=e=>e.family==="orb"?jn.map(([a,s,o])=>[a,s,o(e)]):Dn[e.family].map(a=>[a,yo[a][0],yo[a][1]]),Nn=e=>typeof e[2]=="number",wr=e=>e[5]==="%"?100:1,Hn={undo:'<path d="M9 7H4V2"/><path d="M4 7a9 9 0 1 1-1 7"/>',redo:'<path d="M15 7h5V2"/><path d="M20 7a9 9 0 1 0 1 7"/>',orbit:'<circle cx="12" cy="12" r="8"/><ellipse cx="12" cy="12" rx="8" ry="3"/>',light:'<circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',zoom:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M8.5 11h5M11 8.5v5"/>',reset:'<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>',stir:'<path d="M4 15c3-6 6 6 9 0s6-6 7 0"/>',bg:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/>',fit:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',plus:'<path d="M12 6v12M6 12h12"/>',minus:'<path d="M6 12h12"/>',chev:'<path d="M2 3.5l2.5 2.5L7 3.5"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',open:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v6H4V6h6"/>',dup:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',del:'<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"/>',sound:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'},_e=(e,a="0 0 24 24")=>`<svg viewBox="${a}" aria-hidden="true">${Hn[e]}</svg>`,Bn=typeof navigator<"u"&&/Mac|iP/.test(navigator.platform||navigator.userAgent),Gt=Bn?"\u2318":"Ctrl+",kr=!1;function Fn(){if(kr||document.getElementById("sx-css")){kr=!0;return}let e=document.createElement("style");e.id="sx-css",e.textContent=bo,document.head.append(e),kr=!0}function Eo({api:e,audio:a,top:s,page:o,query:d,ICON:h,flash:l,product:u,store:c}){Fn();let y=new Proxy({},{get:(r,p)=>(...g)=>u.orb?.[p]?.(...g)}),n;try{let r=JSON.parse(sessionStorage.getItem(xo));n=r&&r.v===ko?yr(r):null}catch{n=null}if(n||(n=Kt()),d.design&&c.design(d.design)){let r=c.design(d.design);n=yr({...structuredClone(r.draft),family:r.family}),n.designId=r.id,n.designName=r.name}else d.family&&Bt(d.family)&&(d.family!==n.family||d.preset&&d.preset!==n.preset)&&(n=Kt(d.family,et.some(r=>r.id===d.preset)?d.preset:"clear"));let P=n.designId?JSON.stringify(Je(n)):null,j=[JSON.stringify(n)],S=0,ie=[["voice_audition.samantha","Voice \xB7 Samantha"],["voice_audition.daniel","Voice \xB7 Daniel"],["home.samantha","Welcome narration"],...ba.map(r=>[`sfx.${r.id}`,`Sound \xB7 ${r.name}`])],q=d.sound&&ie.some(r=>r[0]===d.sound)?d.sound:ie[0][0];function we(){a.prefs.master||a.set({master:!0});let[r,p]=q.split(".");r==="sfx"?a.playUrl(q,ba.find(g=>g.id===p).file,{from:0}):a.play(r,{voice:p,kind:"audition",from:0}),a.sfx("select")}d.sound&&setTimeout(we,900);let O="orbit",xe="props",ke="material",Z=!1,ee={material:!0,interior:!0,light:!0,motion:!1,scene:!1,slider:!0,wave:!0,bg:!0,ctl:!0,scene_:!0},F=()=>{try{sessionStorage.setItem(xo,JSON.stringify(n))}catch{}};function ae(){let r=JSON.stringify(n);r!==j[S]&&(j.splice(S+1),j.push(r),S=j.length-1,j.length>120&&(j.shift(),S--)),F(),L()}document.body.classList.add("dark-ui","sx-on"),o.innerHTML=`
    <section class="sx" aria-label="Studio">
      <header class="sx-top" data-top></header>
      <nav class="sx-rail" aria-label="Tools" data-rail></nav>
      <div class="sx-cv t-orbit" data-view tabindex="0" aria-label="Canvas. Drag to use the selected tool; arrow keys also work.">
        <div class="sx-stage" data-stage><div class="sx-frame"></div></div>
        <div class="st-screen" data-screen hidden></div>
        <div class="st-cap" data-scap hidden></div>
        <div class="st-kit" data-kit hidden></div>
        <div class="sx-hud" data-hud></div>
        <div class="sx-zoom" data-zoombar>
          <button class="sx-ib" type="button" data-zo="-1" aria-label="Zoom out" data-tip="Zoom out">${_e("minus")}</button>
          <button class="sx-ib" type="button" data-zo="0" aria-label="Fit" data-tip="Fit (R)">${_e("fit")}</button>
          <button class="sx-ib" type="button" data-zo="1" aria-label="Zoom in" data-tip="Zoom in">${_e("plus")}</button>
        </div>
      </div>
      <aside class="sx-ins" aria-label="Inspector" data-ins></aside>
    </section>
    <div class="sx-modal" data-modal hidden></div>`;let ve=o.querySelector(".sx"),X=o.querySelector("[data-top]"),Le=o.querySelector("[data-rail]"),Y=o.querySelector("[data-view]"),de=o.querySelector("[data-stage]"),Q=o.querySelector("[data-ins]"),Te=o.querySelector("[data-modal]"),Et=o.querySelector("[data-hud]"),te=Sa(de,n.preset,{config:n.sph});te.canvas?.addEventListener("pointerdown",()=>{O!=="orbit"||Me||(Ge=!0)});let ye=()=>n.designName||(n.family==="orb"?`${So(n.preset).name} Orb`:Bt(n.family).name);function T(){X.innerHTML=`
      <div class="sx-doc">
        <span class="sx-dirty" data-dirty title="Unsaved changes"></span>
        <input class="sx-name" data-name value="${Pe(ye())}" aria-label="Design name" maxlength="48" spellcheck="false" data-tip="Rename">
        <select class="sx-sel" data-fam aria-label="Object">${ct.map(p=>`<option value="${p.id}"${p.id===n.family?" selected":""}>${Pe(p.name)}</option>`).join("")}</select>
        ${n.family==="orb"?`<select class="sx-sel" data-pre aria-label="Start from a version">${et.map(p=>`<option value="${p.id}"${p.id===n.preset?" selected":""}>${Pe(p.name)}</option>`).join("")}</select>`:""}
      </div>
      <span class="sx-sp"></span>
      <button class="sx-ib" type="button" data-undo aria-label="Undo" data-tip="Undo (${Gt}Z)">${_e("undo")}</button>
      <button class="sx-ib" type="button" data-redo aria-label="Redo" data-tip="Redo (${Gt}\u21E7Z)">${_e("redo")}</button>
      <button class="sx-ib" type="button" data-resetall aria-label="Reset to the version" data-tip="Reset to the version">${_e("reset")}</button>
      <span class="sx-sep hide-m"></span>
      <button class="sx-tb" type="button" data-save data-tip="Save to My designs (${Gt}S)">Save</button>
      <button class="sx-tb pri" type="button" data-export data-tip="Export code (${Gt}E)">Export</button>`,X.querySelector("[data-fam]").addEventListener("change",p=>{let g=n.preset;n=Kt(p.target.value,g),a.sfx("press"),R(),ae()}),X.querySelector("[data-pre]")?.addEventListener("change",p=>I(p.target.value));let r=X.querySelector("[data-name]");r.addEventListener("change",()=>{n.designName=r.value.trim().slice(0,48)||void 0,n.designId&&c.renameDesign(n.designId,ye()),r.value=ye(),F(),Ce()}),r.addEventListener("keydown",p=>{p.key==="Enter"&&r.blur()}),X.querySelector("[data-undo]").addEventListener("click",()=>z(-1)),X.querySelector("[data-redo]").addEventListener("click",()=>z(1)),X.querySelector("[data-resetall]").addEventListener("click",()=>{let p={designId:n.designId,designName:n.designName,zoom:n.zoom};n={...Kt(n.family,n.preset),...p},a.sfx("press"),R(),ae(),l("Reset to the version\u2019s defaults.")}),X.querySelector("[data-save]").addEventListener("click",()=>xt()),X.querySelector("[data-export]").addEventListener("click",()=>ua()),L()}function L(){let r=X.querySelector("[data-undo]"),p=X.querySelector("[data-redo]");r&&(r.disabled=S<=0),p&&(p.disabled=S>=j.length-1),X.querySelector("[data-dirty]")?.classList.toggle("on",JSON.stringify(Je(n))!==P)}function z(r){let p=be(S+r,0,j.length-1);p!==S&&(S=p,n=JSON.parse(j[p]),a.sfx("press"),F(),R(),L())}function I(r){let p={zoom:n.zoom};n={...Kt("orb",r),...p},a.sfx("press"),te.stir(),R(),ae()}function U(){let r=n.family==="orb",p=[["orbit","Orbit (V) \xB7 or hold space and drag"],["light",r?"Move the key light (L)":"Move the light (L)"],["zoom","Zoom: drag up/down (Z)"]].filter(([g])=>r||g==="orbit"||g==="light"&&n.family==="orb-slider");Le.innerHTML=p.map(([g,v])=>`<button class="sx-ib" type="button" data-tool="${g}" aria-pressed="${g===O}" aria-label="${v}" data-tip="${v}">${_e(g)}</button>`).join("")+(r?`<hr><button class="sx-ib" type="button" data-stir aria-label="Stir" data-tip="Stir what is inside">${_e("stir")}</button>
        <button class="sx-ib" type="button" data-checker aria-pressed="${Z}" aria-label="Transparency grid" data-tip="Transparency grid">${_e("bg")}</button>
        <button class="sx-ib" type="button" data-snap aria-label="Download PNG" data-tip="Download a PNG">${_e("camera")}</button>
        <button class="sx-ib" type="button" data-speak aria-label="Test with a voice" data-tip="Test the speech pulse">${_e("sound")}</button>`:""),Le.querySelectorAll("[data-tool]").forEach(g=>g.addEventListener("click",()=>H(g.dataset.tool))),Le.querySelector("[data-stir]")?.addEventListener("click",()=>{te.stir(),a.sfx("press")}),Le.querySelector("[data-checker]")?.addEventListener("click",()=>{Z=!Z,Y.classList.toggle("checker",Z),U()}),Le.querySelector("[data-snap]")?.addEventListener("click",()=>Pt()),Le.querySelector("[data-speak]")?.addEventListener("click",()=>we())}function H(r){O=r,Y.className=Y.className.replace(/\bt-\w+/g,"")+` t-${r}`,Y.classList.toggle("checker",Z),de.style.pointerEvents=r==="orbit"&&!Me?"":"none",a.sfx("press"),U(),M()}let se=(r,p)=>{let g=r*wr(p),v=p[4]*wr(p),$=v>=1?0:v>=.1?1:v>=.01?2:3;return(+g.toFixed($)).toString()},re=()=>n.family==="orb"?{sph:Ft(n.preset)}:Kt(n.family);function ze(r,p){let[g,v]=r,$=Qe(n,g),V=`sx-${g.replace(/\./g,"-")}`,me=Nn(r)?r[6]:r[3+(r[2]==="select"||r[2]==="seg"?1:0)],lt=Qe(p,g)!==void 0&&JSON.stringify(Qe(p,g))!==JSON.stringify($)?" mod":"",tt=pe=>`<label class="sx-lab${lt}" for="${V}"${pe?" data-scrub":""}${me?` title="${Pe(me)}${pe?" \u2014 drag to scrub":""}"`:""}>${Pe(v)}</label>`;if(r[2]==="color")return`<div class="sx-row full">${tt()}<span class="sx-col"><input type="color" id="${V}" data-path="${g}" value="${$}"><input class="sx-num" data-hex="${g}" value="${$}" aria-label="${Pe(v)} hex" spellcheck="false" maxlength="7"></span></div>`;if(r[2]==="select")return`<div class="sx-row full">${tt()}<select class="sx-sel" id="${V}" data-path="${g}">${r[3].map(([pe,rt])=>`<option value="${pe}"${pe===$?" selected":""}>${Pe(rt)}</option>`).join("")}</select></div>`;if(r[2]==="seg")return`<div class="sx-row full">${tt()}<span class="sx-seg" role="group" id="${V}">${r[3].map(([pe,rt])=>`<button type="button" data-seg="${g}" data-v="${pe}" aria-pressed="${pe===$}">${rt}</button>`).join("")}</span></div>`;let[,,qe,Xe,W,He]=r,at=($-qe)/(Xe-qe)*100;return`<div class="sx-row">${tt(!0)}<input class="sx-rng" type="range" id="${V}" data-path="${g}" min="${qe}" max="${Xe}" step="${W}" value="${$}" style="--p:${at}%" aria-label="${Pe(v)}">
      <span class="sx-nw"><input class="sx-num" type="text" inputmode="decimal" data-num="${g}" value="${se($,r)}" aria-label="${Pe(v)}${He?` (${He})`:""}"><i>${He}</i></span></div>`}let K=()=>wo(n).flatMap(r=>r[2]),oe=r=>K().find(p=>p[0]===r),it=()=>matchMedia("(max-width: 820px)").matches;function Ce(){let r=Q.querySelector(".sx-body")?.scrollTop??0,p=wo(n),g=re();p.some($=>$[0]===ke)||(ke=p[0][0]);let v=[["props","Properties"],["designs","My designs"],["feedback","Feedback"]];Q.innerHTML=`
      <div class="sx-tabs" role="tablist" aria-label="Inspector">${v.map(([$,V])=>`<button class="sx-tab" role="tab" type="button" data-tab="${$}" aria-selected="${$===xe}">${V}</button>`).join("")}</div>
      ${xe==="props"?`<div class="sx-chips" role="group" aria-label="Section">${p.map(([$,V])=>`<button type="button" data-chip="${$}" aria-pressed="${$===ke}">${V}</button>`).join("")}</div>`:""}
      <div class="sx-body" data-body>${xe==="props"?p.map(([$,V,me])=>{let lt=ee[$]??!0,tt=me.filter(qe=>Qe(g,qe[0])!==void 0&&JSON.stringify(Qe(g,qe[0]))!==JSON.stringify(Qe(n,qe[0]))).length;return`<section class="sx-sec${$===ke?"":" m-off"}" data-sec="${$}"><button class="sx-sh" type="button" data-tog="${$}" aria-expanded="${lt}">${_e("chev","0 0 9 9")}${V}<span class="n">${tt?`${tt} changed`:""}</span></button>
          <div class="sx-rows" ${lt?"":"hidden"}>${me.map(qe=>ze(qe,g)).join("")}
          ${$==="motion"?`<div class="sx-row full"><span class="sx-lab">Test sound</span><select class="sx-sel" data-snd aria-label="Sound to test">${ie.map(([qe,Xe])=>`<option value="${qe}"${qe===q?" selected":""}>${Pe(Xe)}</option>`).join("")}</select></div>
            <div class="sx-acts"><button class="sx-tb" type="button" data-testsnd>Play to test the pulse</button><button class="sx-tb" type="button" data-stir2>Stir</button></div>`:""}
          ${$==="wave"?'<div class="sx-acts"><button class="sx-tb" type="button" data-trigger>Trigger a wave</button></div>':""}
          </div></section>`}).join("")+'<p class="sx-hint sx-pad">Drag a label to scrub (<span class="sx-kbd">\u21E7</span> \xD710, <span class="sx-kbd">\u2325</span> fine). Gold dots mark values changed from the version.</p>':xe==="designs"?$t():ht()}</div>`,Q.querySelector("[data-body]").scrollTop=r,st()}function $t(){let r=c.designs();return`<div class="sx-pad">
      <h3 class="sx-h">My designs</h3>
      ${r.length?`<div class="sx-ds">${r.map(p=>`<article class="sx-d${p.id===n.designId?" cur":""}" data-did="${Pe(p.id)}">
        ${p.thumb?`<img src="${p.thumb}" alt="">`:'<span class="ph"></span>'}
        <div><input value="${Pe(p.name)}" aria-label="Design name" maxlength="48" data-dn><small>${Pe(p.familyName||"")} \xB7 ${new Date(p.at).toLocaleDateString()}</small></div>
        <div class="ab"><button class="sx-ib" type="button" data-dopen aria-label="Open" data-tip="Open">${_e("open")}</button><button class="sx-ib" type="button" data-ddup aria-label="Duplicate" data-tip="Duplicate">${_e("dup")}</button><button class="sx-ib" type="button" data-ddel aria-label="Delete" data-tip="Delete">${_e("del")}</button></div>
      </article>`).join("")}</div>`:'<p class="sx-empty">Nothing saved yet. Save keeps the design on this device; it also appears in Account \u2192 My Designs.</p>'}
      <div class="sx-acts" style="margin-bottom:16px"><button class="sx-tb pri" type="button" data-savenew>Save as new design</button>${n.designId?'<button class="sx-tb" type="button" data-new>New from version</button>':""}</div>
      ${n.family==="orb"?`<h3 class="sx-h">Start from a version</h3><div class="sx-vers">${et.map(p=>`<button class="sx-ver" type="button" data-ver="${p.id}" aria-pressed="${p.id===n.preset&&!n.designId}" title="${Pe(p.line)}">${Pe(p.name)}</button>`).join("")}</div>`:""}
    </div>`}function ht(){return`<div class="sx-ea">
      ${'<p class="access">Studio is in early access \u2014 free while we build it. Designs stay on this device.</p>'}
      ${lo("studio")}${Vt("studio",{compact:!0,label:"Get notified about Studio updates (optional)"})}
      <h3 class="sx-h" style="margin-top:18px">Shortcuts</h3>
      <p class="sx-hint"><span class="sx-kbd">${Gt}Z</span> undo \xB7 <span class="sx-kbd">${Gt}\u21E7Z</span> redo \xB7 <span class="sx-kbd">${Gt}S</span> save \xB7 <span class="sx-kbd">${Gt}E</span> export \xB7 <span class="sx-kbd">V</span> orbit \xB7 <span class="sx-kbd">L</span> light \xB7 <span class="sx-kbd">Z</span> zoom \xB7 <span class="sx-kbd">R</span> reset view \xB7 <span class="sx-kbd">space</span>+drag orbit</p>
    </div>`}function st(){Q.querySelectorAll("[data-tab]").forEach(r=>r.addEventListener("click",()=>{xe=r.dataset.tab,a.sfx("press"),Ce()})),Q.querySelectorAll("[data-chip]").forEach(r=>r.addEventListener("click",()=>{ke=r.dataset.chip,a.sfx("press"),Ce()})),Q.querySelectorAll("[data-tog]").forEach(r=>r.addEventListener("click",()=>{it()||(ee[r.dataset.tog]=!(ee[r.dataset.tog]??!0),a.sfx("press"),Ce())})),xe==="feedback"&&(co(Q,{sfx:r=>a.sfx(r)}),Ha(Q)),xe==="designs"&&Ie(),Q.querySelectorAll("input[type=range][data-path]").forEach(r=>{r.addEventListener("input",()=>{je(r.dataset.path,+r.value),Se(r.dataset.path)}),r.addEventListener("change",()=>{ae(),Fe(),a.sfx("release")})}),Q.querySelectorAll("input[type=color][data-path]").forEach(r=>{r.addEventListener("input",()=>{je(r.dataset.path,r.value);let p=Q.querySelector(`[data-hex="${r.dataset.path}"]`);p&&(p.value=r.value)}),r.addEventListener("change",()=>{ae(),Fe()})}),Q.querySelectorAll("[data-hex]").forEach(r=>{r.addEventListener("input",()=>{/^#[0-9a-f]{6}$/i.test(r.value)&&(je(r.dataset.hex,r.value.toLowerCase()),Q.querySelector(`input[type=color][data-path="${r.dataset.hex}"]`).value=r.value)}),r.addEventListener("change",()=>{/^#[0-9a-f]{6}$/i.test(r.value)||(r.value=Qe(n,r.dataset.hex)),ae(),Fe()})}),Q.querySelectorAll("select[data-path]").forEach(r=>r.addEventListener("change",()=>{if(r.dataset.path==="sph.base"){let[p,g]=xr[r.value];n.sph.material.tint=wa(p),n.sph.material.accent=wa(g)}je(r.dataset.path,r.value),a.sfx("press"),te.stir(),Ce(),ae()})),Q.querySelectorAll("[data-seg]").forEach(r=>r.addEventListener("click",()=>{je(r.dataset.seg,r.dataset.v),a.sfx("press"),Ce(),ae()})),Q.querySelectorAll("[data-num]").forEach(r=>{let p=oe(r.dataset.num);if(!p)return;let[,,g,v]=p,$=wr(p);r.addEventListener("input",()=>{let V=parseFloat(r.value);Number.isFinite(V)&&(je(r.dataset.num,be(V/$,g,v)),We(r.dataset.num))}),r.addEventListener("change",()=>{Se(r.dataset.num),ae(),Fe()}),r.addEventListener("keydown",V=>{if(V.key==="Enter"&&r.blur(),V.key==="ArrowUp"||V.key==="ArrowDown"){V.preventDefault();let me=p[4]*(V.shiftKey?10:V.altKey?.1:1);je(r.dataset.num,be(Qe(n,r.dataset.num)+(V.key==="ArrowUp"?me:-me),g,v)),Se(r.dataset.num),ae()}}),r.addEventListener("focus",()=>r.select())}),Q.querySelectorAll("[data-scrub]").forEach(r=>{let p=r.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),g=oe(p);if(!g)return;let[,,v,$,V]=g;r.addEventListener("pointerdown",me=>{if(me.button)return;me.preventDefault(),r.setPointerCapture(me.pointerId);let lt=me.clientX,tt=Qe(n,p),qe=($-v)/240,Xe=He=>{let at=He.shiftKey?10:He.altKey?.1:1,pe=be(tt+(He.clientX-lt)*qe*at,v,$);pe=Math.round(pe/V)*V,je(p,+pe.toFixed(5)),Se(p)},W=()=>{r.removeEventListener("pointermove",Xe),r.removeEventListener("pointerup",W),r.removeEventListener("pointercancel",W),ae(),Fe()};r.addEventListener("pointermove",Xe),r.addEventListener("pointerup",W),r.addEventListener("pointercancel",W)})}),Q.querySelector("[data-snd]")?.addEventListener("change",r=>{q=r.target.value}),Q.querySelector("[data-testsnd]")?.addEventListener("click",()=>we()),Q.querySelector("[data-stir2]")?.addEventListener("click",()=>te.stir()),Q.querySelector("[data-trigger]")?.addEventListener("click",()=>Ca())}function Ie(){Q.querySelectorAll("[data-did]").forEach(r=>{let p=r.dataset.did,g=()=>c.design(p);r.querySelector("[data-dn]").addEventListener("change",v=>{let $=v.target.value.trim()||"Untitled design";c.renameDesign(p,$),n.designId===p&&(n.designName=$,F(),T()),a.sfx("confirm")}),r.querySelector("[data-dopen]").addEventListener("click",()=>Ye(g())),r.querySelector("[data-ddup]").addEventListener("click",()=>{let v=g();if(!v)return;let $={...structuredClone(v),id:Date.now().toString(36),name:`${v.name} copy`.slice(0,48),at:new Date().toISOString()};c.saveDesign($)&&(a.sfx("confirm"),Ce())}),r.querySelector("[data-ddel]").addEventListener("click",()=>{let v=g();v&&confirm(`Delete \u201C${v.name}\u201D? This cannot be undone.`)&&(c.deleteDesign(p),n.designId===p&&(delete n.designId,P=null,F(),L()),a.sfx("close"),Ce())})}),Q.querySelector("[data-savenew]")?.addEventListener("click",()=>xt(!0)),Q.querySelector("[data-new]")?.addEventListener("click",()=>I(n.preset)),Q.querySelectorAll("[data-ver]").forEach(r=>r.addEventListener("click",()=>I(r.dataset.ver)))}function Ye(r){r&&(n=yr({...structuredClone(r.draft),family:r.family}),n.designId=r.id,n.designName=r.name,P=JSON.stringify(Je(n)),a.sfx("press"),R(),ae(),l(`Opened \u201C${r.name}\u201D.`))}function We(r){let p=Q.querySelector(`input[type=range][data-path="${r}"]`);p&&(p.value=Qe(n,r),p.style.setProperty("--p",`${(p.value-p.min)/(p.max-p.min)*100}%`))}function Se(r){let p=Q.querySelector(`[data-num="${r}"]`),g=oe(r);p&&g&&document.activeElement!==p&&(p.value=se(Qe(n,r),g)),We(r)}function Fe(){let r=re();Q.querySelectorAll(".sx-lab[for]").forEach(p=>{let g=p.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),v=Qe(r,g);v!==void 0&&p.classList.toggle("mod",JSON.stringify(v)!==JSON.stringify(Qe(n,g)))}),Q.querySelectorAll("[data-sec]").forEach(p=>{let g=p.querySelectorAll(".sx-lab.mod").length,v=p.querySelector(".n");v&&(v.textContent=g?`${g} changed`:"")}),L()}function je(r,p){let g=r.split("."),v=n;for(let $ of g.slice(0,-1))v=v[$];v[g.at(-1)]=p,m()}function m(){let r=n.family;if(r==="orb")te.setConfig({...n.sph,variant:n.preset}),u.hide();else{let p=e.chamber,g=n.scene;Object.assign(p,{left:g.left,right:g.right,exposure:g.exposure,yaw:n.view.yaw*vo,pitch:n.view.pitch*vo,platform:!1});let v={dark:!0,envBoost:zn(.55,1.6,g.env),exposure:g.exposure,left:g.left,right:g.right};if(r==="orb-slider"){let $=kt(aa(n.slider.preset).config);Object.assign($.light,{strength:n.orb.light.strength,colour:n.orb.light.colour,x:n.orb.light.x,y:n.orb.light.y}),u.show($,v)}else r==="orb-wave"||r==="background-pack"?u.show(kt(aa("original").config),v):u.hide();y.setView({yaw:0,pitch:0}),$e.set({strength:n.wave.strength,scale:n.wave.scale,horizon:r==="background-pack"?n.bg.horizon:.3,lamp:n.bg.lamp}),r==="orb-wave"&&$e.setExposure(n.wave.exposure),r==="background-pack"&&$e.setExposure(n.bg.exposure),ce(),le()}M(),F()}function M(){let r=Math.round(n.zoom*100);Et.innerHTML=n.family==="orb"?`<b>${r}%</b><b>${{orbit:"Orbit",light:"Key light",zoom:"Zoom"}[O]}</b>${O==="light"?`<b>${Math.round(n.sph.light.angle)}\xB0 \xB7 ${Math.round(n.sph.light.height)}\xB0</b>`:""}`:""}function R(){let r=n.family,p=o.querySelector("[data-screen]"),g=o.querySelector("[data-scap]"),v=o.querySelector("[data-kit]");de.hidden=r!=="orb",o.querySelector("[data-zoombar]").hidden=r!=="orb",p.hidden=!(r==="orb-wave"||r==="background-pack"),g.hidden=r!=="orb-slider",v.hidden=r!=="crystal-controls",va(),e.removeBackdrop($e.canvas),p.hidden||(ja(p),e.addBackdrop($e.canvas),$e.setExposure(r==="background-pack"?n.bg.exposure:n.wave.exposure,!0)),r==="orb-slider"&&(g.innerHTML='<span class="cap-label">slide to enter</span>',g.setAttribute("role","slider"),g.tabIndex=0,g.setAttribute("aria-label","Slide to enter")),r==="crystal-controls"&&(v.innerHTML=`<div class="kit-swatch"><button class="gb primary" type="button">Start project</button><button class="gb" type="button">Secondary</button><input class="gi" placeholder="Enter text" aria-label="Example field"><select class="gsel" aria-label="Example select"><option>Select</option><option>Clear</option></select><button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><button class="gb gc" type="button" aria-label="Confirm">${h.check}</button></div>`),v.querySelector(".gsw")?.addEventListener("click",$=>{$.currentTarget.setAttribute("aria-checked",String($.currentTarget.getAttribute("aria-checked")!=="true")),a.sfx("press")}),r!=="orb"&&O==="zoom"&&(O="orbit"),T(),U(),Ce(),m(),H(O)}let G=0;function ce(){let r=o.querySelector("[data-scap]");if(!r||r.hidden)return;let p=n.slider,g=p.tint,v=p.tintAmount;r.style.background=`linear-gradient(180deg, ${la(g,.1+v*.35)}, ${la(g,.03+v*.2)} 50%, ${la(g,.08+v*.3)})`}function le(){let r=o.querySelector("[data-kit]");if(!r||r.hidden)return;let p=n.ctl,g=p.depth,v=r.querySelector("style");v||(v=document.createElement("style"),r.append(v)),v.textContent=`.st-kit .gb,.st-kit .gi,.st-kit .gsel{border-radius:${p.radius}px;-webkit-backdrop-filter:blur(${p.blur}px) saturate(1.5);backdrop-filter:blur(${p.blur}px) saturate(1.5)}
      .st-kit .gb:not(.primary){background:linear-gradient(180deg,${la(p.tint,.3+p.tintAmount*.4)},${la(p.tint,.08+p.tintAmount*.3)} 50%,${la(p.tint,.25+p.tintAmount*.35)});
        box-shadow:inset 0 ${g*.3}px ${g*.2}px rgba(255,255,255,.95),inset 0 -${g*.6}px ${g}px -1px rgba(255,255,255,.75),inset 0 0 0 1px rgba(150,158,166,.18),inset 0 -${g*2}px ${g*2.8}px -${g*2}px rgba(120,128,136,.35),0 1px 1px rgba(40,44,50,.1),0 ${g*2}px ${g*4}px -${g*2}px rgba(40,44,50,.38)}`}let J=null,Me=!1,Ge=!1;Y.addEventListener("pointerdown",r=>{if(r.target.closest("[data-zoombar],.st-cap,.st-kit,.st-screen"))return;let p=Ge;Ge=!1,!(n.family==="orb"&&O==="orbit"&&p&&!Me)&&(J={x:r.clientX,y:r.clientY,lx:r.clientX,ly:r.clientY,v:{...n.view},z:n.zoom,l:{...n.sph.light},ol:{...n.orb.light}},Y.setPointerCapture(r.pointerId),Y.classList.add("grab"))}),Y.addEventListener("pointermove",r=>{if(!J)return;let p=r.clientX-J.x,g=r.clientY-J.y,v=Me?"orbit":O;if(n.family==="orb")v==="orbit"&&te.rotate(r.clientX-J.lx,r.clientY-J.ly),v==="light"&&(n.sph.light.angle=(J.l.angle+p*.5+540)%360-180,n.sph.light.height=be(J.l.height-g*.35,-30,90),m(),Se("sph.light.angle"),Se("sph.light.height")),v==="zoom"&&(n.zoom=be(J.z*Math.exp(-g*.005),.25,3),M());else{if(v==="orbit"&&(n.view.yaw=be(J.v.yaw-p*.25,-60,60),n.view.pitch=be(J.v.pitch+g*.2,-20,35)),v==="light"){let $=u.pose.d||300;n.orb.light.x=be(J.ol.x+p/$*1.6,-.6,.6),n.orb.light.y=be(J.ol.y-g/$*1.6,-.8,.6),Se("orb.light.x"),Se("orb.light.y")}m()}J.lx=r.clientX,J.ly=r.clientY});let fe=()=>{J&&(J=null,Y.classList.remove("grab"),ae(),Fe())};Y.addEventListener("pointerup",fe),Y.addEventListener("pointercancel",fe),Y.addEventListener("wheel",r=>{n.family==="orb"&&(r.preventDefault(),n.zoom=be(n.zoom*Math.exp(-r.deltaY*.0015),.25,3),M(),clearTimeout(Y._t),Y._t=setTimeout(F,300))},{passive:!1}),o.querySelectorAll("[data-zo]").forEach(r=>r.addEventListener("click",()=>{let p=+r.dataset.zo;n.zoom=p?be(n.zoom*(p>0?1.25:.8),.25,3):1,p||te.resetView(),M(),F(),a.sfx("press")})),Y.addEventListener("keydown",r=>{let p={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[r.key];if(p){if(r.preventDefault(),n.family==="orb"){O==="light"?(n.sph.light.angle=be(n.sph.light.angle+p[0]*5,-180,180),n.sph.light.height=be(n.sph.light.height-p[1]*5,-30,90),m(),Ce(),ae()):O==="zoom"?(n.zoom=be(n.zoom*(p[1]<0?1.1:p[1]>0?.9:1),.25,3),M()):te.rotate(p[0]*12,p[1]*12);return}O==="orbit"&&(n.view.yaw=be(n.view.yaw-p[0]*5,-60,60),n.view.pitch=be(n.view.pitch+p[1]*3,-20,35)),O==="light"&&(n.orb.light.x=be(n.orb.light.x+p[0]*.05,-.6,.6),n.orb.light.y=be(n.orb.light.y-p[1]*.05,-.8,.6)),m(),Ce(),ae()}});let he=r=>r&&(r.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(r.tagName))&&!(r.type==="range"||r.type==="color");function De(r){if(!Te.hidden){r.key==="Escape"&&Qt();return}let p=r.metaKey||r.ctrlKey,g=r.key.toLowerCase();if(p&&g==="s"){r.preventDefault(),xt();return}if(p&&g==="e"){r.preventDefault(),ua();return}if(!he(r.target)){if(p&&g==="z"){r.preventDefault(),z(r.shiftKey?1:-1);return}if(p&&g==="y"){r.preventDefault(),z(1);return}if(!(p||r.altKey)){if(r.key===" "){Me||(Me=!0,Y.classList.add("t-orbit"),de.style.pointerEvents="none"),(r.target===document.body||Y.contains(r.target))&&r.preventDefault();return}g==="v"?H("orbit"):g==="l"&&(n.family==="orb"||n.family==="orb-slider")?H("light"):g==="z"&&n.family==="orb"?H("zoom"):g==="r"&&(n.zoom=1,te.resetView(),n.family!=="orb"&&(n.view={yaw:0,pitch:0,zoom:1},m(),ae()),M(),F())}}}function Ot(r){r.key===" "&&(Me=!1,H(O))}document.addEventListener("keydown",De),document.addEventListener("keyup",Ot);let Ne=o.querySelector("[data-scap]"),Ke=null;Ne.addEventListener("pointerdown",r=>{r.stopPropagation(),Ke={x:r.clientX,v:G},Ne.setPointerCapture(r.pointerId),a.sfx("press")}),Ne.addEventListener("pointermove",r=>{Ke&&(G=be(Ke.v+(r.clientX-Ke.x)/(Ne.offsetWidth-Ne.offsetHeight)))});let Xa=()=>{Ke&&(Ke=null,a.sfx("release"),y.nudge(.5),G>.92?(G=1,a.sfx("confirm")):G=0)};Ne.addEventListener("pointerup",Xa),Ne.addEventListener("pointercancel",Xa),Ne.addEventListener("keydown",r=>{r.key==="ArrowRight"&&(G=be(G+.1)),r.key==="ArrowLeft"&&(G=be(G-.1))});function Ca(){let r=o.querySelector("[data-screen]"),p=r.getBoundingClientRect();$e.impact(p.width/2,p.height*(1-.3)+10,n.wave.strength),y.nudge(.8),a.sfx("detent")}o.querySelector("[data-screen]").addEventListener("pointerdown",r=>{if(n.family!=="orb-wave")return;let p=r.currentTarget.getBoundingClientRect();$e.impact(r.clientX-p.left,r.clientY-p.top,n.wave.strength),a.sfx("detent")});function Je(r){let{designId:p,designName:g,zoom:v,...$}=r;return $}async function _t(){try{if(n.family==="orb"&&te.canvas){let g=te.canvas,v=Math.min(g.width,g.height),$=document.createElement("canvas");$.width=$.height=240;let V=$.getContext("2d");return V.fillStyle="#0b0c0c",V.fillRect(0,0,240,240),V.drawImage(g,(g.width-v)/2,(g.height-v)/2,v,v,0,0,240,240),$.toDataURL("image/jpeg",.8)}let r=jt(),p=await e.exportPNG(r,u.element||document.createElement("div"));if(p){let g=await createImageBitmap(p),v=document.createElement("canvas"),$=360;return v.width=$,v.height=Math.round($*r.h/r.w),v.getContext("2d").drawImage(g,0,0,v.width,v.height),v.toDataURL("image/jpeg",.78)}}catch{}return null}async function xt(r=!1){let p=Bt(n.family),g=!r&&n.designId||Date.now().toString(36),v=r&&n.designId?`${ye()} copy`.slice(0,48):ye(),$=await _t();c.saveDesign({id:g,name:v,family:n.family,familyName:p.name,preset:n.preset,schema:1,at:new Date().toISOString(),draft:Je(n),thumb:$})?(n.designId=g,n.designName=v,P=JSON.stringify(Je(n)),F(),a.sfx("confirm"),l("Saved to My designs (on this device)."),T(),xe==="designs"&&Ce()):l("Could not save: this browser\u2019s storage is full or unavailable.")}let Rt=()=>({...n.sph,variant:n.preset}),zt=()=>uo(Rt(),Ft(n.preset));function pa(r=In){let p=zt(),g=360;return`<div data-light-orb data-variant="${n.preset}"${p==="e30"?"":` data-config="${p}"`} style="width:${g}px;height:${g}px"></div>
<script type="module" src="${r}"><\/script>`}function Lt(){let r=n.sph.scene,p=r.background==="none"?"#0b0c0c":r.colour;return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${Pe(ye())} \xB7 The Light Orb</title>
<style>
  html,body{margin:0;height:100%;background:${p}}
  body{display:grid;place-items:center}
  [data-light-orb]{width:min(82vmin,560px)!important;height:min(82vmin,560px)!important}
</style>
</head>
<body>
${pa()}
</body>
</html>
`}function Za(){return n.family==="orb"?JSON.stringify({product:"orb",schema:1,name:ye(),variant:n.preset,config:Rt(),changed:Ya(Ft(n.preset),Rt()),embed:{attribute:"data-config",value:zt()}},null,2):JSON.stringify({schema:1,product:n.family,name:ye(),config:n[{"orb-slider":"slider","orb-wave":"wave","background-pack":"bg","crystal-controls":"ctl"}[n.family]],scene:n.scene,note:"Configuration for The Light Orb renderer. Development export; not a licensed product package."},null,2)}let Tt="embed",ft=()=>ye().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"light-orb";function ua(){n.family!=="orb"&&(Tt="json"),It(),Te.hidden=!1,a.sfx("open"),Te.querySelector("[data-xtab][aria-selected=true]")?.focus()}function Qt(){Te.hidden=!0,a.sfx("close"),Y.focus({preventScroll:!0})}function It(){let r=n.family==="orb",p=r?[["embed","Embed code"],["html","HTML page"],["json","JSON"]]:[["json","JSON"]],g={embed:[pa(),"Paste into any page. The data-config attribute holds your design (only what differs from the version), so it looks and moves exactly like this.",[["copy","Copy code","pri"],["dlsnip","Download snippet"]]],html:[Lt(),"A complete page with your Orb, ready to open or upload.",[["dlhtml","Download .html","pri"],["copy","Copy"]]],json:[Za(),r?"The full configuration. The embed accepts it as data-config too (plain JSON or base64).":"The configuration of this object.",[["dljson","Download .json","pri"],["copy","Copy"]]]}[Tt];Te.innerHTML=`<div class="sx-dlg" role="dialog" aria-modal="true" aria-labelledby="sx-xt">
      <div class="sx-dh"><h2 id="sx-xt">Export \xB7 ${Pe(ye())}</h2><button class="sx-ib" type="button" data-xclose aria-label="Close">${_e("close")}</button></div>
      <div class="sx-tabs" role="tablist">${p.map(([$,V])=>`<button class="sx-tab" role="tab" type="button" data-xtab="${$}" aria-selected="${$===Tt}">${V}</button>`).join("")}</div>
      <div class="sx-db"><p>${g[1]}</p><textarea class="sx-code" readonly spellcheck="false" aria-label="Code">${Pe(g[0])}</textarea>
        <div class="sx-acts">${g[2].map(([$,V,me])=>`<button class="sx-tb${me?" "+me:""}" type="button" data-xa="${$}">${V}</button>`).join("")}${r?'<button class="sx-tb" type="button" data-xa="png">Download PNG</button>':""}</div></div></div>`,Te.querySelector("[data-xclose]").addEventListener("click",Qt),Te.onclick=$=>{$.target===Te&&Qt()},Te.querySelectorAll("[data-xtab]").forEach($=>$.addEventListener("click",()=>{Tt=$.dataset.xtab,a.sfx("press"),It(),Te.querySelector(`[data-xtab="${Tt}"]`).focus()}));let v=g[0];Te.querySelectorAll("[data-xa]").forEach($=>$.addEventListener("click",async()=>{let V=$.dataset.xa;if(V==="copy"){let me=!1;try{await navigator.clipboard.writeText(v),me=!0}catch{Te.querySelector("textarea").select(),me=document.execCommand?.("copy")}$.textContent=me?"Copied":"Select and copy",a.sfx("confirm"),setTimeout(()=>{$.textContent=V==="copy"&&Tt==="embed"?"Copy code":"Copy"},1600)}V==="dlsnip"&&vt(new Blob([v],{type:"text/plain"}),`${ft()}-embed.txt`),V==="dlhtml"&&vt(new Blob([v],{type:"text/html"}),`${ft()}.html`),V==="dljson"&&vt(new Blob([v],{type:"application/json"}),`${ft()}.json`),V==="png"&&Pt()}))}async function Pt(){if(n.family==="orb"&&te.canvas){te.canvas.toBlob(r=>{r&&(vt(r,`${ft()}.png`),l("Downloaded a PNG of the Orb."))});return}if(u.element){let r=await e.exportPNG(jt(),u.element);r&&vt(r,`${ft()}.png`)}}function vt(r,p){let g=document.createElement("a");g.href=URL.createObjectURL(r),g.download=p,document.body.append(g),g.click(),setTimeout(()=>{URL.revokeObjectURL(g.href),g.remove()},1e3),a.sfx("confirm")}function jt(){let r=Y.getBoundingClientRect();return{x:r.left,y:r.top,w:r.width,h:r.height}}function ea(){let r=document.querySelector(".hd"),p=r?Math.round(r.getBoundingClientRect().bottom):72;ve._hh!==p&&(ve._hh=p,ve.style.setProperty("--sx-top",`${Math.max(0,p)}px`));let g=jt(),v=n.family,$=g.x+g.w/2,V=o.querySelector("[data-screen]"),me=o.querySelector("[data-scap]"),lt=o.querySelector("[data-kit]"),tt=innerHeight,qe={warm:0,room:"chamber",stage:g,emission:1,orb:{x:50,y:tt-52,d:46,vis:0}},Xe=W=>({...qe,product:W,grounds:W&&W.ground?[{y:W.ground,x:W.x,d:W.d}]:[]});if(v==="orb"){let W=Math.round(Math.min(g.w-48,g.h-48)*.74*n.zoom);return de._s!==W&&(de._s=W,de.style.width=de.style.height=`${Math.max(40,W)}px`),te.setSpeech(a.playing?a.energy():0),Xe(null)}if(v==="orb-slider"){let W=n.slider,He=Math.min(1,(g.w-40)/W.length),at=W.length*He,pe=W.height*He;Object.assign(me.style,{left:`${$-at/2}px`,top:`${g.y+g.h*.5-pe/2}px`,width:`${at}px`,height:`${pe}px`});let rt=pe*.84,Qa=(pe-rt)/2;return Xe({x:$-at/2+Qa+rt/2+G*(at-pe),y:g.y+g.h*.5,d:rt,vis:1,snap:!0})}if(v==="orb-wave"||v==="background-pack"){let W=Math.min(g.w*.86,900),He=Math.min(g.h*.72,W*.62);Object.assign(V.style,{left:`${$-W/2}px`,top:`${g.y+g.h*.5-He/2}px`,width:`${W}px`,height:`${He}px`});let at=v==="background-pack"?n.bg.horizon:.3,pe=Math.min(90,W*.12),rt=He*(1-at)+pe*.1-pe/2;return $e.setOrb({x:W/2,y:rt,d:pe}),Xe({x:$,y:g.y+g.h*.5-He/2+rt,d:pe,vis:1})}return v==="crystal-controls"&&Object.assign(lt.style,{left:`${g.x+20}px`,top:`${g.y+20}px`,width:`${g.w-40}px`,height:`${g.h-40}px`}),Xe(null)}return R(),{frame:ea,reapply:()=>m(),voiceResponse:()=>n.family==="orb"?be(n.sph.motion.speech*.6):.6,leave(){document.removeEventListener("keydown",De),document.removeEventListener("keyup",Ot),te.dispose(),va(),e.removeBackdrop($e.canvas),document.body.classList.remove("dark-ui","sx-on"),u.hide(),Object.assign(e.chamber,{yaw:0,pitch:0})},get draft(){return n}}}function la(e,a){let s=parseInt(e.slice(1),16);return`rgba(${s>>16&255},${s>>8&255},${s&255},${a.toFixed(3)})`}function $o(e){let a=null,s=null,o=null,d={},h={emission:1},l=document.createElement("div");l.className="x-product",l.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:31",document.body.append(l);let u={x:-999,y:-999,d:100,vis:0},c={x:-999,y:-999,d:100,vis:0,vx:0,vy:0,vd:0},y=!0;function n(){return a||s||(s=Gr({container:l,diameter:240,driven:!0,background:"#f3f3f1"}).then(j=>(a=j,s=null,j.attachPointer(document.createElement("div"))(),j.setBackdrop((S,ie)=>e.drawBackdrop(S,ie,c)),j.setVisibility(0),j.tick(performance.now()),o&&P(),j)).catch(()=>{s=null})),s}function P(){a&&o&&(h=Pa(a,o,d),a.setEmission(Math.min(1.4,h.emission)))}return{get orb(){return a},get element(){return a?.element},get output(){return h},show(j,S={}){o=kt(j),d=S,y=!1,n(),P()},update(j,S=d){o=kt(j),d=S,P()},hide(){y=!0,a&&(a.setVisibility(0),a.setView({yaw:0,pitch:0}),a.setObjectYaw(0),a.setSpeech(0),a.tick(performance.now())),c.vis=0,c.x=-999},attachPointer(j){return a?a.attachPointer(j,{range:"volume"}):(n()?.then(S=>S?.attachPointer(j,{range:"volume"})),null)},frame(j){if(!a)return;if(!j||y){(c.vis>0||a.element.style.visibility!=="hidden")&&(c.vis=0,a.setVisibility(0),a.tick(performance.now()));return}let S=1/60,ie=9;if(j.snap||c.x<-900)Object.assign(c,{x:j.x,y:j.y,d:j.d,vx:0,vy:0,vd:0});else for(let q of["x","y","d"]){let we="v"+q;c[we]+=(ie*ie*(j[q]-c[q])-2*ie*c[we])*S,c[q]+=c[we]*S}c.vis+=((j.vis??1)-c.vis)*.2,a.holdRaster(Math.ceil(Math.max(c.d,j.d,120)*1.06)),a.setPose({x:c.x,y:c.y,diameter:c.d}),a.setVisibility(c.vis),a.tick(performance.now())},pose:c}}var Er=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null,Lr=!!Er;function Lo({onresult:e,onend:a,onerror:s,lang:o}){if(!Er)return s?.("unsupported"),null;let d=new Er;d.lang=o||navigator.language||"en-US",d.interimResults=!0,d.maxAlternatives=1,d.continuous=!1;let h="",l="";d.onresult=u=>{l=[...u.results].map(c=>c[0].transcript).join(" "),u.results[u.results.length-1].isFinal&&(h=l),e?.(l,!!h)},d.onerror=u=>s?.(u.error),d.onend=()=>a?.(h||l);try{d.start()}catch{return s?.("busy"),null}return d}var $r=e=>String(e).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),St=(e,...a)=>a.some(s=>new RegExp(`\\b${s}\\b`).test(e)),Gn={home:["home","start","beginning","inicio","principio","portada"],products:[...Ue[0].words,"productos","producto","tienda","objetos"],templates:[...Ue[1].words,"plantillas","plantilla","composiciones"],studio:[...Ue[2].words,"estudio","editar","personalizar","disenar"],sound:[...Ue[3].words,"sonido","sonidos","voces","escuchar","audio"],membership:["membership","member","plans","plan","pricing","price","prices","membresia","miembro","planes","precio","precios","cuesta","cost"],account:["account","profile","downloads","cuenta","perfil","descargas"],signin:["sign in","log in","login","iniciar sesion","entrar"]},_n={home:"#/",membership:"#/membership",account:"#/account",signin:"#/signin"},Yn={"orb-slider":["slider","deslizador"],"orb-wave":["wave","ola","onda","ripple"],"background-pack":["background","backgrounds","fondo","fondos"],"crystal-controls":["controls","buttons","controles","botones","crystal"]},gt=(e,a={})=>({say:e.text,id:e.id,lang:e.lang??"en",...a}),Un=/\b(hola|gracias|buenas|ayuda|ayudame|quien|que|como|donde|cual|quiero|puedes|llevame|ensename|muestrame|recomiendas|recomienda|textura|texturas|materiales|precio|cuanto|plantillas|productos|sonido|estudio|por favor|si|vale|el|la|los|las|una|para|con|del|mi|me)\b/g,Vn=/\b(hello|hi|hey|thanks|thank|help|who|what|which|how|where|want|can|could|show|take|recommend|texture|textures|materials|price|the|a|an|is|are|you|me|my|please|yes|for|with|of)\b/g;function Ua(e,a="en"){if(/[ñ¿¡]/i.test(String(e)))return"es";let s=$r(e),o=s.match(Un)?.length??0,d=s.match(Vn)?.length??0;return o>d?"es":d>o?"en":a}var To=()=>typeof navigator<"u"&&/^es\b/i.test(navigator.language||"")?"es":"en";function Co(e,{here:a,presentation:s,lang:o="en"}){let d=$r(e),h=Ua(e,o),l=c=>oa(c,h);if(!d)return gt(l("reply.missed"),{intent:"fallback"});if(d.split(" ").length<=3&&St(d,"stop","quiet","silence","shh","para","calla","callate","silencio","basta"))return{say:"",stop:!0,command:!0};if(St(d,"where am i","where are we","donde estoy","donde estamos","que es esto","what is this","what is here","que hay aqui"))return gt(s(h),{intent:"where"});if(St(d,"help","what can you do","what can i do","ayuda","ayudame","que puedes hacer","que puedo hacer"))return gt(l("reply.help"),{intent:"help"});if(St(d,"thank you","thanks","gracias"))return gt(l("reply.thanks"),{intent:"thanks"});if(St(d,"who are you","what are you","quien eres","que eres","como te llamas","your name"))return gt(l("reply.who"),{intent:"who"});if(St(d,"back","go back","atras","volver","vuelve"))return gt(l("reply.back"),{back:!0,command:!0});for(let[c,y]of Object.entries(Yn))if(St(d,...y)){let n=ct.find(P=>P.id===c&&P.published!==!1);if(n)return gt(to(n),{go:`#/products/${c}`,quiet:!0,command:!0})}let u=pt.find(c=>d.includes($r(c.name)));if(u)return gt(ao(u),{go:`#/templates/${u.id}`,quiet:!0,command:!0});for(let[c,y]of Object.entries(Gn))if(St(d,...y)){if(c===a){let n=s(h);return gt(h==="es"?{text:`Ya estamos aqu\xED. ${n.text}`,lang:"es"}:eo(n),{command:!0})}return{go:_n[c]??`#/${c}`,command:!0}}return d.split(" ").length<=5&&St(d,"hello","hi","hey","hola","buenas","buenos dias","buenas tardes","buenas noches","good morning","good evening")?gt(l("reply.intro"),{intent:"hello"}):St(d,"the orb","orb","esfera","la orb","bola")?gt(h==="es"?{text:"Aqu\xED est\xE1 la Orb. Prueba sus veinte versiones.",lang:"es"}:ro(),{go:`#/products/${ct[0].id}`,quiet:!0}):gt(l("reply.unknown"),{intent:"fallback"})}var Mo=()=>!!Oa,Wn=/^#\/(products(\/[a-z0-9-]+(\?variant=[a-z0-9-]+)?)?|templates(\/[a-z0-9-]+)?|studio|sound|membership|account|licence)?$/;async function Ao(e,a,{timeout:s=8e3}={}){if(!Oa)throw new Error("disabled");let o=new AbortController,d=setTimeout(()=>o.abort(),s);try{let h=await fetch(Oa,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({messages:e,page:a}),signal:o.signal});if(!h.ok)throw new Error(`http ${h.status}`);let l=await h.json(),u=typeof l.say=="string"?l.say.trim().slice(0,600):"";if(!u)throw new Error("empty");return{say:u,go:typeof l.go=="string"&&Wn.test(l.go)?l.go:void 0}}finally{clearTimeout(d)}}var qo={},Oo={member:""},Ro="",zo=e=>"",Tr=e=>(location.assign(e),!0),bt={get enabled(){return!1},canCheckout:e=>!!e.length&&e.every(a=>zo(a.id)),canSubscribe:e=>!!!1,canRestore:()=>!!!1,checkout(e){return bt.canCheckout(e)?(Tr(zo(e[0].id)),e[0].id):null},subscribe(e){return bt.canSubscribe(e)?Tr(Oo[e]):!1},restore(){return bt.canRestore()?Tr(Ro):!1}};var Ve={saved:"lightorb:saved",designs:"lightorb:designs",profile:"lightorb:profile"},Mt=(e,a)=>{try{return JSON.parse(localStorage.getItem(e))??a}catch{return a}},Ea=(e,a)=>{try{return localStorage.setItem(e,JSON.stringify(a)),!0}catch{return!1}},Oe={saved:()=>Mt(Ve.saved,[]),isSaved:(e,a)=>Mt(Ve.saved,[]).some(s=>s.type===e&&s.id===a),toggleSaved(e,a,s,o){let d=Mt(Ve.saved,[]),h=d.findIndex(l=>l.type===e&&l.id===a);return h>=0?d.splice(h,1):d.unshift({type:e,id:a,name:s,href:o,at:new Date().toISOString()}),Ea(Ve.saved,d),h<0},designs:()=>Mt(Ve.designs,[]),design:e=>Mt(Ve.designs,[]).find(a=>a.id===e),saveDesign(e){let a=Mt(Ve.designs,[]),s=a.findIndex(o=>o.id===e.id);return s>=0?a[s]=e:a.unshift(e),Ea(Ve.designs,a.slice(0,40))},renameDesign(e,a){let s=Mt(Ve.designs,[]),o=s.find(d=>d.id===e);o&&(o.name=a,Ea(Ve.designs,s))},deleteDesign(e){Ea(Ve.designs,Mt(Ve.designs,[]).filter(a=>a.id!==e))},profile:()=>Mt(Ve.profile,null),setProfile:e=>Ea(Ve.profile,e)},Io=[["profile","Profile"],["designs","My Designs"],["saved","Saved"],["downloads","Downloads"]],Kn='<p class="note">Your designs and saved items are kept in this browser. Accounts that sync across devices come later; your early-access email will carry over.</p>';function da(e,a,s="profile"){let{esc:o,audio:d}=a;Io.some(u=>u[0]===s)||(s="profile");let h=Oe.profile();e.innerHTML=`
    <section class="dest acct">
      <header class="dh"><p class="kicker">Account${h?.email?" \xB7 Early access":""}</p><h1>${h?.name?o(h.name):"Your space"}</h1>${Kn}</header>
      <nav class="segbar acct-tabs" aria-label="Account">${Io.map(([u,c])=>`<a class="pill" href="#/account/${u}" ${u===s?'aria-current="page" aria-pressed="true"':""}>${c}</a>`).join("")}</nav>
      <div class="acct-body" data-body></div>
      ${ya()}
    </section>${a.footer()}`;let l=e.querySelector("[data-body]");if(s==="profile"){let u=h?.email;l.innerHTML=`${u?"":`<div class="joincta glass"><h2>Join early access</h2><p>Free. Leave your email and we tell you when new pieces and Studio updates open. Your designs stay on this device either way.</p>
        <div class="acts eq"><a class="gb small primary" href="#/signup">Join early access</a><a class="gb small" href="#/signin">I already joined</a></div></div>`}
      <form class="form" data-prof>
        <label class="fl"><span>Display name</span><input class="gi" name="name" value="${o(h?.name||"")}" placeholder="How the site greets you" maxlength="40" autocomplete="name"></label>
        <div class="acts"><button class="gb primary" type="submit">Save on this device</button>${h?'<button class="gb" type="button" data-forget>Sign out on this device</button>':""}</div>
        <p class="note" data-profmsg role="status" aria-live="polite"></p>
      </form>
      <div class="kv"><span>Email</span><b>${u?o(h.email):"Not joined yet"}</b>${h?.joined?`<span>Joined</span><b>${new Date(h.joined).toLocaleDateString()}</b>`:""}<span>Plan</span><b>${"Early access \xB7 free"}</b><span>Sound</span><b>${d.prefs.master?"On":"Off"}</b><span>Narration</span><b>${d.prefs.guide?"On":"Off"}</b><span>Guide voice</span><b><a href="#/sound">${o(wt(d.prefs.voice).name)}</a></b></div>`,l.querySelector("[data-prof]").addEventListener("submit",c=>{c.preventDefault();let y=c.target.name.value.trim(),n={...Oe.profile()??{},name:y};y||delete n.name,Oe.setProfile(Object.keys(n).length?n:null),d.sfx("confirm"),da(e,a,"profile"),e.querySelector("[data-profmsg]").textContent="Saved on this device."}),l.querySelector("[data-prof] .gi").addEventListener("input",c=>{c.isTrusted&&d.sfx("type")}),l.querySelector("[data-forget]")?.addEventListener("click",()=>{if(confirm("Forget your name and email on this browser? Your designs and saved items stay.")){try{localStorage.removeItem(Ve.profile)}catch{}da(e,a,"profile")}})}if(s==="designs"){let u=Oe.designs();l.innerHTML=u.length?`<div class="dgrid">${u.map(c=>`<article class="dc" data-d="${c.id}">
        <a class="dc-img" href="#/studio?design=${c.id}" aria-label="Open ${o(c.name)} in Studio">${c.thumb?`<img src="${c.thumb}" alt="">`:""}</a>
        <input class="dc-n gi" value="${o(c.name)}" aria-label="Design name" maxlength="48">
        <p class="note">${o(c.familyName)} \xB7 ${new Date(c.at).toLocaleDateString()}</p>
        <div class="acts"><a class="gb small primary" href="#/studio?design=${c.id}">Open in Studio</a><button class="gb small" type="button" data-del>Delete</button></div></article>`).join("")}</div>`:'<div class="empty"><h2>No designs yet</h2><p>Designs you save in Studio appear here, with a picture of each one.</p><a class="gb primary" href="#/studio">Open Studio</a></div>',l.querySelectorAll("[data-d]").forEach(c=>{let y=c.dataset.d,n=c.querySelector(".dc-n");n.addEventListener("change",()=>{Oe.renameDesign(y,n.value.trim()||"Untitled design"),d.sfx("confirm")}),n.addEventListener("input",P=>{P.isTrusted&&d.sfx("type")}),c.querySelector("[data-del]").addEventListener("click",()=>{confirm(`Delete \u201C${n.value}\u201D? This cannot be undone.`)&&(Oe.deleteDesign(y),d.sfx("close"),da(e,a,"designs"))})})}if(s==="saved"){let u=Oe.saved();l.innerHTML=u.length?`<ul class="slist">${u.map((c,y)=>`<li><span class="kicker">${c.type}</span><a href="${c.href}">${o(c.name)}</a><button class="pill" type="button" data-rm="${y}">Remove</button></li>`).join("")}</ul>`:'<div class="empty"><h2>Nothing saved yet</h2><p>Save products, templates and sounds to find them here.</p><a class="gb primary" href="#/products">Explore products</a></div>',l.querySelectorAll("[data-rm]").forEach(c=>c.addEventListener("click",()=>{let y=u[+c.dataset.rm];Oe.toggleSaved(y.type,y.id),d.sfx("close"),da(e,a,"saved")}))}s==="downloads"&&(l.innerHTML='<div class="empty"><h2>Everything is free right now</h2><p>During early access there is nothing to buy: take The Orb with its embed code from its product page, and export your own versions from Studio \u2014 exports save directly to your computer.</p><div class="acts eq"><a class="gb primary" href="#/products/orb">Get The Orb</a><a class="gb" href="#/studio">Open Studio</a></div></div>',l.querySelector("[data-restore]")?.addEventListener("click",()=>bt.restore()))}function Cr(e,a,s){let o=s==="up",d=Oe.profile();e.innerHTML=`
    <section class="dest sign">
      <header class="dh"><p class="kicker">Early access \xB7 free</p><h1>${o?"Join early access":"Welcome back"}</h1>
        <p class="dh-l">${o?"Everything is free while we build it. Leave your email and we write when new pieces and Studio updates open. Your designs are saved on this device.":"There are no passwords yet. Enter the email you joined with to use it on this device; your designs from another browser stay there until accounts sync."}</p></header>
      ${d?.email?`<div class="joined glass"><p class="kicker">Already in</p><h2>You joined as ${a.esc(d.email)}</h2><div class="acts eq"><a class="gb small primary" href="#/studio">Open Studio</a><a class="gb small" href="#/account">Your account</a></div></div>`:""}
      <form class="form" data-sign novalidate${d?.email?" hidden":""}>
        ${o?'<label class="fl"><span>Name <i class="opt">(optional)</i></span><input class="gi" name="name" autocomplete="name" maxlength="40" placeholder="How the site greets you"></label>':""}
        <label class="fl"><span>Email</span><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"></label>
        <div class="acts"><button class="gb primary" type="submit"><span>${o?"Join early access":"Continue"}</span></button><a class="gb" href="#/studio">Open Studio without joining</a></div>
        <p class="note" data-signmsg role="status" aria-live="polite">We only keep your email${o?" and name":""} to tell you about new pieces and Studio updates. See <a href="#/privacy">privacy</a>; leave any time.</p>
        <p class="note">${o?'Already joined? <a href="#/signin">Use your email here</a>':'New here? <a href="#/signup">Join early access</a>'}</p>
      </form>
      ${ya()}
    </section>${a.footer()}`;let h=e.querySelector("[data-sign]");h.addEventListener("submit",async l=>{l.preventDefault();let u=h.querySelector("[data-signmsg]"),c=h.querySelector("button[type=submit]"),y=h.email.value.trim();if(!Na(y)){u.textContent="Please enter a valid email address.",h.email.focus();return}c.disabled=!0,c.setAttribute("aria-busy","true");let n=await fr({email:y,name:h.name?.value,source:"signup"});if(!n.ok){u.textContent=n.error,c.disabled=!1,c.removeAttribute("aria-busy");return}a.audio.sfx("confirm");let P=document.createElement("div");P.innerHTML=mr(y);let j=P.firstElementChild;h.replaceWith(j),j.focus({preventScroll:!0})})}function Po(e,a){let s=Vr,o=Oe.profile(),d=s.plans.map(h=>`<article class="plan soon"><p class="kicker">After launch \xB7 preview</p><h2>${h.name}</h2><p>${h.line}</p><ul>${h.points.map(l=>`<li>${l}</li>`).join("")}</ul></article>`).join("");e.innerHTML=`
    <section class="dest memb">
      <header class="dh"><p class="kicker">Membership</p><h1>Early access is free</h1><p class="dh-l">Everything is open while we build it: Studio, The Orb with its embed code, and each piece as it arrives. What you take now stays free to use. Paid plans come later, and early users get a launch discount.</p></header>
      <article class="plan em now"><p class="kicker">Current plan</p><h2>Early access \u2014 free</h2><p>Everything on the site, for everyone.</p>
        <ul><li>Studio: shape light, material and movement; save and export your designs</li><li>The Orb in twenty versions, with its embed code</li><li>New pieces as they open, free while in early access</li><li>A launch discount on paid plans</li></ul>
        <div class="acts eq">${o?.email?'<span class="pill" aria-disabled="true">You\u2019re in</span>':'<a class="gb primary" href="#/signup">Join early access</a>'}<a class="gb" href="#/studio">Open Studio</a></div></article>
      <h2 class="plans-h">Plans after launch</h2><p class="note plans-n">A preview of how The Light Orb will work after early access. Prices are not set yet; early users get a launch discount.</p>
      <div class="plans">${d}</div>
      ${ya()}
    </section>${a.footer()}`,e.querySelectorAll("[data-join]").forEach(h=>h.addEventListener("click",()=>bt.subscribe(h.dataset.join)))}var Jn=`<svg class="wm-o" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><defs><mask id="wm-counter"><rect width="100" height="100" fill="#fff"/>
  <path fill="#000" d="M49 9C31 9 23 29 23 50c0 24 12 42 30 42 15 0 23-9 23-20 0-9-7-12-11-21-4-9-2-19 0-27 1-9-5-15-16-15z"/></mask></defs>
  <circle cx="50" cy="50" r="46" fill="currentColor" mask="url(#wm-counter)"/></svg>`,Mr=`<span class="wm-t">The Light</span>${Jn}<span class="wm-t wm-rb">rb</span>`;var Do="lightorb:cart",Wa=()=>{try{return JSON.parse(localStorage.getItem(Do))??[]}catch{return[]}},jo=e=>{try{localStorage.setItem(Do,JSON.stringify(e))}catch{}Ar.forEach(a=>a(e))},Ar=new Set,nt={items:Wa,has:e=>Wa().some(a=>a.id===e),add(e){let a=Wa();a.some(s=>s.id===e.id)||(a.push({...e,at:new Date().toISOString()}),jo(a))},remove(e){jo(Wa().filter(a=>a.id!==e))},toggle(e){return nt.has(e.id)?(nt.remove(e.id),!1):(nt.add(e),!0)},on(e){return Ar.add(e),()=>Ar.delete(e)}};var qr="Carla Tres Garc\xEDa",No="39934017Z",Ho="carlatresgarcia@gmail.com",Xn="14 October 2026",Bo="Avenida Duque de Loul\xE9 91, Lisboa, Portugal",$a=`<a href="mailto:${Ho}">${Ho}</a>`,Zn={privacy:{kicker:"Privacy",title:"Privacy",lede:"What this site collects, why, and what you can ask for. Short version: very little, and nothing is sold.",body:`
    <h2>Who is responsible</h2>
    <p>The Light Orb is run by ${qr} (NIF ${No}), a sole trader (the data controller). Address: ${Bo}. Contact: ${$a}.</p>
    <h2>Visiting the site</h2>
    <p>We count visits with GoatCounter, a privacy-friendly analytics service that sets no cookies and does not track you across sites. It records the page address, referrer, browser type, screen size and an approximate country, without storing your IP address. If your browser sends Do Not Track or Global Privacy Control, nothing is counted at all. Legal basis: our legitimate interest in knowing which pages are used.</p>
    <h2>Early access and the waitlist</h2>
    <p>If you join early access (or the waitlist) we keep your email address, the name you give if any, the date, where you signed up (for example "footer") and your browser language \u2014 nothing else. It is stored in Cloudflare Workers KV, the owner receives one notification email about each new sign-up (sent through Resend), and it is used only to tell you when pieces and Studio updates open. Your display name, designs and saved items stay in your browser. Legal basis: your consent, which you can withdraw at any time by writing to ${$a}; we then delete your address.</p>
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
    <p>Under the GDPR you can ask for access, correction, deletion, restriction, portability, or object to processing, and withdraw consent, by writing to ${$a}. You can also complain to the Spanish Data Protection Agency (AEPD, aepd.es).</p>`},terms:{kicker:"Terms",title:"Terms of use",lede:"The rules for using this website.",body:`
    <h2>Who we are</h2>
    <p>This website is run by ${qr} (NIF ${No}), a sole trader. Address: ${Bo}. Contact: ${$a}.</p>
    <h2>Using the site</h2>
    <p>You may browse the site, try the previews, and use Studio and the guide Orb for your own personal or professional exploration. Please do not misuse it: no attempts to break, overload or scrape it, and no unlawful or abusive use of the guide Orb.</p>
    <h2>The guide Orb</h2>
    <p>The Orb's replies are generated automatically and may be incomplete or wrong. They are not professional advice and do not bind us; prices and terms are only those shown on the site.</p>
    <h2>Content and pieces</h2>
    <p>The design, text, images, sounds and code of this site belong to ${qr} unless stated otherwise. Using the free Orb and any piece you obtain is governed by the <a href="#/licence">licence</a>.</p>
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
    <p>Code is provided as it is. Questions about a use not covered here: ${$a}.</p>`}},Fo={privacy:"Privacy",terms:"Terms of use",licence:"Licence"};function Ka(e,a,s){let o=Zn[s];e.innerHTML=`
    <section class="dest legal">
      <header class="dh"><p class="kicker">${o.kicker}</p><h1>${o.title}</h1><p class="dh-l">${o.lede}</p></header>
      <div class="legal-b">${o.body}
        <p class="note">Last updated ${Xn}. <a href="#/privacy">Privacy</a> \xB7 <a href="#/terms">Terms</a> \xB7 <a href="#/licence">Licence</a></p></div>
    </section>${a.footer()}`}var La=[{id:"clear",name:"Clear",line:"Thick clear glass with a bright lower rim, for light pages.",dark:!1,v:{page:"#F3F3F1",ink:"#262827",muted:"#6b6f6c",line:"rgba(38,40,39,.07)",body:"linear-gradient(180deg,rgba(255,255,255,.96),rgba(246,247,246,.72) 52%,rgba(226,230,228,.78))",edge:"#ffffff",depth:"rgba(130,142,138,.5)",shadow:"rgba(38,40,39,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(176,212,228,.6)",tint:"linear-gradient(180deg,#43484a,#1f2322 60%,#2c302f)",tintInk:"#f4f5f3",fill:"#2a2e2d",well:"linear-gradient(180deg,rgba(214,218,216,.7),rgba(246,247,246,.9))",orb:"radial-gradient(circle at 50% 62%,rgba(214,232,240,.55),rgba(255,255,255,.22) 58%,rgba(186,200,206,.65))",squish:"1"}},{id:"smoke",name:"Smoke",line:"Smoked glass that darkens to the rim, for dark pages.",dark:!0,v:{page:"#141716",ink:"#ECEEEB",muted:"#9DA29F",line:"rgba(255,255,255,.08)",body:"linear-gradient(180deg,rgba(255,255,255,.17),rgba(255,255,255,.05) 50%,rgba(0,0,0,.22))",edge:"rgba(255,255,255,.38)",depth:"rgba(0,0,0,.6)",shadow:"rgba(0,0,0,.75)",spec:"rgba(255,255,255,.4)",caustic:"rgba(150,186,200,.4)",tint:"linear-gradient(180deg,#fbfbfa,#d6d9d6)",tintInk:"#161918",fill:"#e7e9e6",well:"linear-gradient(180deg,rgba(0,0,0,.45),rgba(255,255,255,.04))",orb:"radial-gradient(circle at 50% 62%,rgba(120,130,136,.55),rgba(40,44,46,.35) 58%,rgba(10,12,12,.75))",squish:"1"}},{id:"chrome",name:"Chrome",line:"Liquid chrome that folds the room it reflects.",dark:!1,v:{page:"#E2E4E3",ink:"#1c1e1d",muted:"#5d6260",line:"rgba(0,0,0,.1)",body:"linear-gradient(180deg,#ffffff 0%,#c3c8c7 24%,#f5f6f6 46%,#8f9594 72%,#e4e7e6 100%)",edge:"#ffffff",depth:"rgba(60,66,64,.6)",shadow:"rgba(30,34,33,.42)",spec:"rgba(255,255,255,1)",caustic:"rgba(255,255,255,.7)",tint:"linear-gradient(180deg,#6c7271 0%,#1d201f 48%,#4a4f4e 100%)",tintInk:"#f3f4f3",fill:"#3a3f3e",well:"linear-gradient(180deg,#a9aeac,#eef0ef)",orb:"conic-gradient(from 210deg,#fdfdfd,#8e9493,#f2f3f3,#5d6362,#e9ebea,#a3a8a7,#fdfdfd)",squish:"1"}},{id:"porcelain",name:"Porcelain",line:"Opaque glazed porcelain with a warm greige accent.",dark:!1,v:{page:"#EFEDE8",ink:"#2e2c29",muted:"#6e6a63",line:"rgba(60,50,40,.08)",body:"linear-gradient(180deg,#fffefb,#f4f1eb 58%,#e5e0d6)",edge:"#ffffff",depth:"rgba(170,158,140,.45)",shadow:"rgba(80,68,52,.26)",spec:"rgba(255,255,255,.9)",caustic:"rgba(207,200,189,.55)",tint:"linear-gradient(180deg,#ddd6ca,#bdb3a3)",tintInk:"#2e2c29",fill:"#bfb5a5",well:"linear-gradient(180deg,#e2ddd3,#faf8f4)",orb:"radial-gradient(circle at 50% 60%,#fbf9f5,#ece7de 60%,#d2cabc)",squish:"1"}},{id:"gel",name:"Gel",line:"Soft sea-glass gel that gives a little when you press it.",dark:!1,v:{page:"#E8EEEC",ink:"#1f302b",muted:"#5b6f69",line:"rgba(30,70,60,.08)",body:"linear-gradient(180deg,rgba(244,252,249,.94),rgba(198,228,218,.62) 56%,rgba(156,200,186,.7))",edge:"rgba(255,255,255,.95)",depth:"rgba(70,124,108,.5)",shadow:"rgba(30,70,60,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(130,226,196,.65)",tint:"linear-gradient(180deg,#a6dccb,#5d9c89)",tintInk:"#0f2a22",fill:"#6aa894",well:"linear-gradient(180deg,rgba(170,206,194,.6),rgba(240,250,246,.9))",orb:"radial-gradient(circle at 50% 60%,rgba(190,240,222,.75),rgba(150,214,192,.45) 58%,rgba(90,160,138,.7))",squish:"1.6"}},{id:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud.",dark:!1,v:{page:"#F2EEEE",ink:"#33282b",muted:"#7a6a6e",line:"rgba(80,40,50,.07)",body:"linear-gradient(180deg,rgba(255,252,252,.96),rgba(246,232,236,.72) 54%,rgba(230,206,214,.75))",edge:"#ffffff",depth:"rgba(190,140,156,.45)",shadow:"rgba(90,50,62,.26)",spec:"rgba(255,255,255,.95)",caustic:"rgba(255,170,198,.6)",tint:"linear-gradient(180deg,#f3c9d6,#d9909f)",tintInk:"#3a1d25",fill:"#df9fb0",well:"linear-gradient(180deg,rgba(226,206,212,.7),rgba(255,250,251,.9))",orb:"radial-gradient(circle at 46% 58%,rgba(255,188,208,.85),rgba(255,236,242,.5) 50%,rgba(222,190,200,.7))",squish:"1.2"}}],Qn=e=>La.find(a=>a.id===e)??La[0],ei=e=>Object.entries(e.v).map(([a,s])=>`--cc-${a.replace(/[A-Z]/g,o=>"-"+o.toLowerCase())}:${s};`).join(`
  `),ti=`
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
`,ai=`
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
`,_o='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',ri={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row">
    <button class="cc-btn cc-glass primary" type="button">Continue</button>
    <button class="cc-btn cc-glass" type="button">Secondary</button>
    <button class="cc-btn cc-glass round" type="button" aria-label="Confirm">${_o}</button>
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
</div>`},oi={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row"><button class="cc-btn cc-glass primary" type="button" tabindex="-1">Continue</button><button class="cc-btn cc-glass round" type="button" tabindex="-1" aria-label="Confirm">${_o}</button></div>
  <div class="cc-row"><button class="cc-switch cc-glass" role="switch" type="button" tabindex="-1" aria-checked="true" aria-label="Switch"><span class="cc-knob"></span></button><input class="cc-range" type="range" value="62" tabindex="-1" aria-label="Level" style="width:150px"></div>
</div>`,"orb-slider":'<div class="cc-stage"><div class="cc-slide cc-glass" style="--h:64px;width:280px" aria-hidden="true"><span class="cc-trail"></span><span class="cc-label">slide to enter</span><span class="cc-orb"></span></div></div>'},Go={"crystal-controls":"Crystal Controls","orb-slider":"Orb Slider"};function Ja(e,a,{mini:s=!1}={}){let o=Qn(a);return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${Go[e]} \xB7 ${o.name} \u2014 The Light Orb</title>
<!-- ${Go[e]} \xB7 ${o.name}. Free for personal and commercial use (The Light Orb licence).
     Change the material by editing the --cc-* variables below. -->
<style>
:root{
  ${ei(o)}
}${ti}</style>
</head>
<body${s?' class="mini"':""}>
${(s?oi:ri)[e]}
<script>${ai}<\/script>
</body>
</html>
`}var At=(e,a=0,s=1)=>Math.min(s,Math.max(a,e)),ca=(e,a,s)=>e+(a-e)*s,qt=e=>{let a=At(e);return a*a*(3-2*a)},ni=(e,a,s,o,d)=>qt((e-a)/(s-a))*(1-qt((e-o)/(d-o))),ne=e=>String(e).replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),Jt={get:(e,a)=>{try{return JSON.parse(sessionStorage.getItem(e))??a}catch{return a}},set:(e,a)=>{try{sessionStorage.setItem(e,JSON.stringify(a))}catch{}}},ue={play:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>',replay:'<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/></svg>',prev:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',mute:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M4.5 20c1.4-3.6 4.2-5.4 7.5-5.4s6.1 1.8 7.5 5.4"/></svg>',heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/></svg>',back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',down:'<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',bag:'<svg viewBox="0 0 24 24"><path d="M5.5 8.5h13l-1 11h-11z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5.5" y="10.5" width="13" height="9" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',orb:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="11" cy="15" r="1.6" fill="currentColor" stroke="none"/></svg>'},Or={pieces:"products",materials:"products"};function Yo(e){let{orb:a,reduced:s}=e,o=Kr(),d=document.createElement("style");d.textContent=oo+no,document.head.append(d),document.documentElement.classList.add("lo-on");let h=$o(e),l=Rr("main","lo");l.setAttribute("aria-label","The Light Orb"),l.tabIndex=-1;let u=Rr("div","lo-top");document.body.append(l,u),u.innerHTML=`
    <header class="hd" data-hd>
      <a class="wm" href="#/" aria-label="The Light Orb \u2014 Home" data-home>${Mr}</a>
      <nav class="nav" aria-label="Main">${Ue.map(t=>`<a href="${t.route}" data-nav="${t.id}">${t.label}</a>`).join("")}</nav>
      <div class="hd-r">
        <a class="nav-m" href="#/membership" data-nav="membership">Membership</a>
        <div class="snd">
          <button class="gb gc small" type="button" data-sound aria-haspopup="dialog" aria-expanded="false" aria-label="Sound settings">${ue.mute}</button>
          <div class="menu pane" role="dialog" aria-label="Sound" data-menu hidden>
            <label class="mrow"><span>Sound</span><button class="gsw" role="switch" data-pref="master" aria-checked="false" aria-label="Sound"></button></label>
            <label class="mrow"><span>Narration</span><button class="gsw" role="switch" data-pref="guide" aria-checked="true" aria-label="Narration"></button></label>
            <label class="mrow"><span>Interface sounds</span><button class="gsw" role="switch" data-pref="sfx" aria-checked="true" aria-label="Interface sounds"></button></label>
            <div class="mrow col"><span>Volume <output data-volout></output></span><input class="grange" type="range" min="0" max="1" step=".01" data-volume aria-label="Volume"></div>
          </div>
        </div>
        <div class="cartw"${" hidden"}><button class="gb gc small" type="button" data-cartbtn aria-haspopup="dialog" aria-expanded="false" aria-label="Cart">${ue.bag}<span class="cart-n" data-cartn hidden></span></button>
          <div class="menu pane cart-p" role="dialog" aria-label="Cart" data-cartp hidden></div></div>
        <a class="gb gc small" href="#/account" aria-label="Account" data-nav="account">${ue.user}</a>
      </div>
    </header>
    <button class="guide-hit" type="button" data-guide aria-label="Talk with the Orb"></button>
    <div class="caption" data-caption aria-live="polite"></div>`;let c=u.querySelector("[data-hd]"),y=u.querySelector("[data-caption]"),n=u.querySelector("[data-guide]"),P=u.querySelector("[data-sound]"),j=u.querySelector("[data-menu]"),S=t=>{j.hidden=!t,P.setAttribute("aria-expanded",String(t)),o.sfx(t?"open":"close"),t&&j.querySelector(".gsw").focus()};P.addEventListener("click",()=>S(j.hidden)),document.addEventListener("pointerdown",t=>{!j.hidden&&!t.target.closest(".snd")&&S(!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!j.hidden&&(S(!1),P.focus())}),u.querySelectorAll("[data-pref]").forEach(t=>t.addEventListener("click",()=>{let i=t.dataset.pref;o.set({[i]:!o.prefs[i]}),o.sfx("select")}));let ie=u.querySelector("[data-volume]");ie.addEventListener("input",()=>{o.set({volume:+ie.value}),o.sfx("level",+ie.value)});function q(){let t=o.prefs;u.querySelectorAll("[data-pref]").forEach(b=>b.setAttribute("aria-checked",String(!!t[b.dataset.pref]))),ie.value=t.volume??.8,ie.style.setProperty("--p",`${(t.volume??.8)*100}%`),u.querySelector("[data-volout]").textContent=`${Math.round((t.volume??.8)*100)}%`,P.innerHTML=t.master?ue.sound:ue.mute,P.setAttribute("aria-label",t.master?"Sound on \u2014 settings":"Sound off \u2014 settings"),l.querySelectorAll("[data-enable]").forEach(b=>{b.hidden=t.master});let i=o.state.clip?.split(".")[0];if(Ia[i]&&i!=="home"){let b=o.state.kind==="guide"&&["playing","loading"].includes(o.state.status);y.textContent=b?Ia[i]:"",y.classList.toggle("on",b)}}o.on(q);let we=u.querySelector("[data-cartbtn]"),O=u.querySelector("[data-cartp]"),xe=u.querySelector("[data-cartn]");function ke(){let t=nt.items();xe.hidden=!t.length,xe.textContent=t.length,O.innerHTML=`<p class="kicker">Cart</p>${t.length?`<ul class="cart-l">${t.map(i=>`<li><a href="${i.href}">${ne(i.name)}</a><button class="pill" type="button" data-cartrm="${i.id}">Remove</button></li>`).join("")}</ul>`:'<p class="note">Your cart is empty.</p>'}
      ${bt.canCheckout(t)?'<button class="gb primary" type="button" data-checkout>Checkout</button>':'<button class="gb primary" type="button" disabled>Checkout opens soon</button><p class="note">No payment can be taken yet; items stay in this browser.</p>'}`,O.querySelector("[data-checkout]")?.addEventListener("click",()=>{let i=bt.checkout(nt.items());i&&nt.remove(i)}),O.querySelectorAll("[data-cartrm]").forEach(i=>i.addEventListener("click",()=>{nt.remove(i.dataset.cartrm),o.sfx("close")}))}nt.on(ke),ke();let Z=t=>{O.hidden=!t,we.setAttribute("aria-expanded",String(t)),o.sfx(t?"open":"close")};we.addEventListener("click",()=>Z(O.hidden)),document.addEventListener("pointerdown",t=>{!O.hidden&&!t.target.closest(".cartw")&&Z(!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!O.hidden&&(Z(!1),we.focus())});let ee={emission:1,voice:dr.voice},F=()=>{ee=Pa(a,kt(dr)),a.setRibbon?.(0)};F();let ae=()=>({home:"home",products:"products",templates:"templates",studio:"studio",sound:"sound"})[m.name],ve=()=>matchMedia("(pointer: coarse)").matches&&Math.min(innerWidth,innerHeight)<820,X=t=>{try{return localStorage.getItem(t)}catch{return null}},Le=t=>{try{localStorage.setItem(t,"1")}catch{}},Y=To(),de=null,Q=document.createElement("style");Q.textContent=`.orb-ask{position:fixed;left:50%;bottom:calc(18px + env(safe-area-inset-bottom,0px));transform:translate(-50%,6px);z-index:30;display:flex;align-items:center;gap:8px;width:min(420px,calc(100vw - 32px));box-sizing:border-box;
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
@media (pointer:coarse) and (max-width:820px){.caption{font-size:13.5px;line-height:1.35}}`,document.head.append(Q);let Te='<svg viewBox="0 0 24 24"><rect x="9" y="3.5" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v2.5"/></svg>',Et='<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5"/></svg>',te=Rr("form","orb-ask");te.hidden=!0,te.setAttribute("role","search"),te.setAttribute("aria-label","Ask the Orb"),te.innerHTML=`<span class="st" data-st aria-live="polite"></span><input type="text" data-q placeholder="${Y==="es"?"Pregunta a la Orb\u2026":"Ask the Orb\u2026"}" aria-label="Ask the Orb" autocomplete="off" enterkeyhint="send" maxlength="300">
    <button type="button" data-mic aria-label="Speak" aria-pressed="false"${Lr?"":" hidden"}>${Te}</button><button type="submit" aria-label="Send">${Et}</button>`,u.append(te);let ye=te.querySelector("[data-st]"),T=te.querySelector("[data-q]"),L=te.querySelector("[data-mic]");n.setAttribute("aria-label","Talk with the Orb");let z=!Lr,I=()=>{te.hidden=!1,document.body.classList.add("orb-asking"),requestAnimationFrame(()=>te.classList.add("on"))},U=()=>{H(),te.classList.remove("on"),te.hidden=!0,document.body.classList.remove("orb-asking"),T.blur()};function H(){if(re){let t=re;re=null,t.abort()}L.setAttribute("aria-pressed","false"),ye.textContent=""}function se(){z||re||(o.stop(),de=null,ye.textContent=Y==="es"?"Escuchando\u2026":"Listening\u2026",L.setAttribute("aria-pressed","true"),re=Lo({lang:Y==="es"?"es-ES":/^en/i.test(navigator.language)?navigator.language:"en-US",onresult:t=>{ye.textContent="",T.value=t},onerror:t=>{re=null,L.setAttribute("aria-pressed","false"),ye.textContent="",(t==="not-allowed"||t==="service-not-allowed"||t==="unsupported")&&(Ee("mic_denied"),z=!0,L.hidden=!0,K(oa("reply.mic",Y),"answer"),ve()||T.focus())},onend:t=>{re&&(re=null,L.setAttribute("aria-pressed","false"),ye.textContent="",T.value="",t.trim()&&ht(t))}}),re||(L.setAttribute("aria-pressed","false"),ye.textContent=""))}L.addEventListener("click",()=>{re?H():se()}),T.addEventListener("input",()=>{re&&H()}),te.addEventListener("submit",t=>{t.preventDefault();let i=T.value.trim();T.value="",H(),i&&(Ee("orb_typed"),ht(i))}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!te.hidden&&U()}),document.addEventListener("pointerdown",t=>{!te.hidden&&!t.target.closest(".orb-ask,[data-guide]")&&!T.value&&!re&&U()});let re=null,ze=null;if(n.addEventListener("click",()=>{if(o.prefs.master||o.set({master:!0}),o.prefs.guide||o.set({guide:!0}),Ye=performance.now()/1e3,Ee("orb_tap"),re){H();return}if(o.playing){o.stop(),de=null,Ie("");return}o.sfx("select");let t=!X("lo:orb:intro");if(I(),t){Le("lo:orb:intro"),Le("lo:orb:greet"),Ee("orb_intro"),K(oa("reply.intro",Y),"answer");return}z?ve()||T.focus():se()}),!X("lo:orb:greet")){let t=i=>{i.target.closest?.("[data-guide],.orb-ask")||(removeEventListener("pointerdown",t,!0),ve()&&setTimeout(()=>{X("lo:orb:greet")||de||re||(Le("lo:orb:greet"),K(oa("reply.greet",Y),"answer"))},900))};addEventListener("pointerdown",t,!0)}function K(t,i="answer"){if(!t?.text)return;Ma(t.text),Ye=performance.now()/1e3,de=i,o.say(t.text,{id:t.lang==="es"?void 0:t.id??void 0,lang:t.lang,onend:()=>{de===i&&(de=null)}})||(de=null)}let oe=[],it=0,Ce=(t,i)=>{for(oe.push({role:t,content:i});oe.length>12;)oe.shift();for(;oe.length&&oe[0].role!=="user";)oe.shift()};function $t(){let t=ce(),i=t.name==="products"&&t.id?ct.find(b=>b.id===t.id):null;return{route:location.hash||"#/",title:document.title,presentation:Se("en").text,product:i?.name,variant:i?t.query.variant||(i.id==="orb"?"clear":void 0):void 0,lang:Y}}async function ht(t){Y=Ua(t,Y);let i=Co(t,{here:m.name,presentation:Se,lang:Y});if(Ee(i.intent==="fallback"?"orb_fallback":"orb_command",{intent:i.intent||(i.stop?"stop":i.back?"back":i.go?`go:${i.go.split("?")[0].replace("#/","")}`:"answer")}),!i.command&&i.intent!=="hello"&&Mo()&&t.trim()){let b=++it;Ie("\u2026"),Ce("user",t.trim());try{let f=await Ao(oe.slice(),$t());return b!==it?void 0:(Ce("assistant",f.say),st({say:f.say,go:f.go,lang:Ua(f.say,Y)}))}catch{if(b!==it)return;oe.pop()}}st(i)}function st(t){if(t.stop){o.stop(),de=null,Ie("");return}if(t.back&&history.back(),t.go&&location.hash!==t.go){ze=t.say?{text:t.say,id:t.id,lang:t.lang}:null,location.hash=t.go;return}t.say?K({text:t.say,id:t.id,lang:t.lang},"answer"):t.go||Ie("")}function Ie(t){clearTimeout(er),y.textContent=t,y.classList.toggle("on",!!t),t||q()}let Ye=-99,We=0,Se=(t=Y)=>Qr(t,m.name,m.id);function Fe(){K(Se(),"arrival")}function je(t){let i=ze;ze=null,re&&!i&&H(),setTimeout(()=>{if(location.hash===t){if(i){K(i,"answer");return}ve()||de==="answer"||re||Fe()}},450)}let m={name:""},M=null,R=[],G={products:"Products",templates:"Templates",studio:"Studio",sound:"Sound",membership:"Membership",account:"Account",signin:"Sign in",signup:"Sign up",...Fo};function ce(){let[t,i=""]=(location.hash.replace(/^#/,"")||"/").split("?"),b=t.split("/").filter(Boolean),f=Object.fromEntries(new URLSearchParams(i));return{name:Or[b[0]]||b[0]||"home",id:b[1]||null,query:f,raw:b[0]}}function le(){let t=ce();if(t.raw&&Or[t.raw]){location.replace(`#/${Or[t.raw]}${t.id?"/"+t.id:""}`);return}if(!["home","products","templates","studio","sound","membership","account","signin","signup","privacy","terms","licence"].includes(t.name)){location.replace("#/");return}R.forEach(x=>x()),R=[],W=null,M&&t.name!=="studio"&&(M.leave(),M=null),h.hide(),va(),e.removeBackdrop($e.canvas),F();let i=m.name;m=t,document.title=m.name==="home"?"The Light Orb":`${G[m.name]??m.name} \xB7 The Light Orb`,l.className=`lo r-${m.name}`,document.body.dataset.route=m.name,Yr(),m.name==="studio"&&i!=="studio"&&Ee("studio_open"),u.querySelectorAll("[data-nav]").forEach(x=>x.toggleAttribute("aria-current",x.dataset.nav===m.name||x.dataset.nav==="account"&&["account","signin","signup"].includes(m.name))),i&&i!==m.name&&o.state.kind&&de!=="answer"&&(o.stop(),de=null),({home:Ke,products:m.id?g:p,templates:m.id?Zo:Xo,studio:en,sound:Ir,membership:()=>Po(l,fe),account:()=>da(l,fe,m.id),signin:()=>Cr(l,fe,"in"),signup:()=>Cr(l,fe,"up"),privacy:()=>Ka(l,fe,"privacy"),terms:()=>Ka(l,fe,"terms"),licence:()=>Ka(l,fe,"licence")}[m.name]??Ke)(),Ha(l);let f=Jt.get(`lo:scroll:${location.hash}`,null);l.scrollTop=f??0,je(location.hash),i&&l.focus({preventScroll:!0})}l.addEventListener("scroll",()=>Jt.set(`lo:scroll:${location.hash}`,l.scrollTop),{passive:!0});let J=0,Me=0,Ge=!1;l.addEventListener("scroll",()=>{if(m.name!=="home"||Ge){J=l.scrollTop;return}let t=l.scrollTop>J;J=l.scrollTop,clearTimeout(Me),Me=setTimeout(()=>{let i=innerHeight,b=l.scrollTop/i,f=l.querySelector("#select")?.offsetTop??0,x=l.querySelector(".qt");if(!x||!f)return;let E=(x.offsetTop+x.offsetHeight-i)/i;b<=E+.02||l.scrollTop>=f-4||(Ge=!0,l.scrollTo({top:t?f:x.offsetTop+x.offsetHeight-i,behavior:s?"auto":"smooth"}),setTimeout(()=>{Ge=!1,J=l.scrollTop},s?50:900))},90)},{passive:!0}),addEventListener("hashchange",le),u.querySelector("[data-home]").addEventListener("click",t=>{t.preventDefault(),Jt.set("lo:scroll:#/",0),m.name==="home"?l.scrollTo({top:0,behavior:s?"auto":"smooth"}):location.hash="#/"});let fe={page:l,audio:o,ICON:ue,esc:ne,store:Oe,go:t=>{location.hash=t},flash:Ma,api:e,product:h,footer:()=>Lt()},he=Jt.get("lo:sel",0),De=[],Ot=new URLSearchParams(location.search).get("sel");Ot&&Jt.set("lo:selv",Ot);let Ne=Jt.get("lo:selv","arc")==="grid";function Ke(){if(l.innerHTML=`
      <section class="wel" aria-labelledby="hello">
        <div class="wel-copy" data-welcopy>
          <h1 id="hello" class="wel-h"><span>Hello.</span></h1>
          <p class="wel-line">A space for creative possibilities.</p>
          <a class="gb primary wel-go" href="#select" data-go>Let\u2019s go</a>
        </div>
        <div class="wel-ctl"><button class="gb small" type="button" data-enable>${ue.sound}<span>Enable sound</span></button><a class="tl" href="intro.html">Replay intro</a></div>
      </section>
      <section class="qt" aria-label="Quotation">
        <figure class="qt-fig" data-qt><blockquote><p>${ma.text}</p></blockquote>
          <figcaption>${ma.author} \xB7 <a href="${ma.source}" rel="noopener" target="_blank">${ma.work}</a></figcaption></figure>
      </section>
      <section class="sel${Ne?" sel-grid":""}" id="select" aria-labelledby="sel-t">
        <h2 id="sel-t" class="sel-t">Where would you like to begin?</h2>
        ${Ne?`<nav class="dg" aria-label="Destinations">${Ue.map((t,i)=>`<a class="dg-c" href="${t.route}" data-c="${i}">${Ca(t)}<span class="dg-t">${t.label}</span><span class="dg-s">${t.line}</span></a>`).join("")}</nav>`:`<div class="arc" data-arc role="group" aria-roledescription="carousel" aria-label="Destinations">
          ${Ue.map((t,i)=>`<a class="arc-c" href="${t.route}" data-c="${i}" aria-label="${t.label}: ${t.line}">${Ca(t,"arc-img")}<span class="arc-l">${t.label}</span><span class="arc-s">${t.line}</span></a>`).join("")}
        </div>
        <div class="arc-ctl"><button class="gb gc small" type="button" data-step="-1" aria-label="Previous">${ue.prev}</button>
          <div class="segbar" role="tablist" aria-label="Choose destination">${Ue.map((t,i)=>`<button class="pill" role="tab" type="button" data-dot="${i}">${t.label}</button>`).join("")}</div>
          <button class="gb gc small" type="button" data-step="1" aria-label="Next">${ue.next}</button></div>`}
      </section>
      ${Lt()}`,De=[...l.querySelectorAll("[data-c]")],l.querySelector("[data-go]").addEventListener("click",t=>{t.preventDefault(),o.sfx("select"),l.scrollTo({top:l.scrollTop+l.querySelector("#sel-t").getBoundingClientRect().top-110,behavior:s?"auto":"smooth"})}),l.querySelector("[data-enable]").addEventListener("click",()=>{Ee("sound_enable"),o.set({master:!0}),o.sfx("confirm"),ve()||Fe()}),Ne)De.forEach((t,i)=>{t.addEventListener("pointerenter",()=>Je(i)),t.addEventListener("focus",()=>Je(i)),t.addEventListener("click",()=>{o.sfx("open"),Ee("destination",{id:Ue[i].id})})}),_t(!0);else{l.querySelectorAll("[data-step]").forEach(i=>i.addEventListener("click",()=>Je(he+ +i.dataset.step))),l.querySelectorAll("[data-dot]").forEach(i=>i.addEventListener("click",()=>Je(+i.dataset.dot))),De.forEach((i,b)=>i.addEventListener("click",f=>{if(zt){f.preventDefault();return}b!==he?(f.preventDefault(),Je(b)):(o.sfx("open"),Ee("destination",{id:Ue[b].id}))}));let t=l.querySelector("[data-arc]");t.addEventListener("keydown",i=>{i.key==="ArrowRight"&&(Je(he+1),i.preventDefault()),i.key==="ArrowLeft"&&(Je(he-1),i.preventDefault())}),pa(t,i=>Je(he+i),()=>_t()),_t(!0)}l.querySelector("[data-welcopy]").classList.add(s?"shown":"reveal"),q()}function Xa(t){let i=String(Ue.indexOf(t)+1).padStart(2,"0");return`<span class="arc-img cv cv-${t.id}"><span class="cv-grain"></span><span class="cv-n">${i}</span><span class="cv-t">${t.label}</span></span>`}function Ca(t,i=""){let b={products:'<img src="./media/cards/products.jpg" alt="" loading="lazy">',templates:'<span class="dg-win"><img src="./media/templates/the-light-orb.cover.jpg" alt="" loading="lazy"></span>',studio:'<img src="./media/cards/orb-dark.jpg" alt="" loading="lazy">',sound:`<span class="cv-wave">${[.3,.55,.8,.45,.95,.6,.35,.7,.5,.85,.4,.65,.3,.5].map(f=>`<i style="--h:${f}"></i>`).join("")}</span>`}[t.id];return`<span class="dg-img dg-${t.id} ${i}">${b}</span>`}function Je(t,i=!0){let b=At(t,0,Ue.length-1);b!==he&&(he=b,Jt.set("lo:sel",he),i&&o.sfx("detent"),a.nudge?.(.5)),_t()}function _t(t){if(Ne){De.forEach((f,x)=>f.classList.toggle("on",x===he));return}let i=De[0]?.offsetWidth||300,b=i*.7;De.forEach((f,x)=>{let E=x-he+xt/(b*1.2),D=Math.abs(E);f.style.transition=t||Rt?"none":"",f.style.transform=`translateX(${E*b}px) translateZ(${-D*150}px) rotateY(${At(-E*30,-48,48)}deg) scale(${1-Math.min(D,2)*.1})`,f.style.zIndex=String(10-Math.round(D)),f.classList.toggle("on",x===he),f.tabIndex=x===he?0:-1,f.setAttribute("aria-current",x===he?"true":"false")}),l.querySelectorAll("[data-dot]").forEach((f,x)=>f.setAttribute("aria-selected",String(x===he))),l.querySelectorAll("[data-step]").forEach(f=>{f.disabled=+f.dataset.step<0&&he===0||+f.dataset.step>0&&he===Ue.length-1})}let xt=0,Rt=!1,zt=!1;function pa(t,i,b){let f=0,x=0,E=null,D=null;t.addEventListener("pointerdown",C=>{C.button||(f=C.clientX,x=C.clientY,E=C.pointerId,D=null,zt=!1)}),t.addEventListener("pointermove",C=>{if(C.pointerId!==E)return;let A=C.clientX-f,N=C.clientY-x;!D&&Math.hypot(A,N)>8&&(D=Math.abs(A)>Math.abs(N)*1.2?"x":"y",D==="x"&&(t.setPointerCapture(E),Rt=!0)),D==="x"&&(xt=A,zt=!0,b())});let k=C=>{if(C.pointerId===E){if(E=null,Rt=!1,D==="x"){let A=xt<-60?1:xt>60?-1:0;xt=0,i(A),b(),setTimeout(()=>{zt=!1},0)}D=null}};t.addEventListener("pointerup",k),t.addEventListener("pointercancel",k),t.addEventListener("dragstart",C=>C.preventDefault());let B=0,w=0;t.addEventListener("wheel",C=>{if(Math.abs(C.deltaX)<=Math.abs(C.deltaY))return;C.preventDefault();let A=performance.now();A<w||(B+=C.deltaX,Math.abs(B)>60&&(i(Math.sign(B)),B=0,w=A+380))},{passive:!1})}function Lt(){return`<footer class="ft"><a href="#/" class="wm small" aria-label="The Light Orb \u2014 Home">${Mr}</a>
      <nav aria-label="Footer"><a href="#/sound">Sound</a><a href="#/membership">Membership</a><a href="#/account">Account</a>${Oe.profile()?.email?"":'<a href="#/signup">Join early access</a>'}<a href="intro.html">Replay intro</a><a href="mailto:trescarla@gmail.com">Contact</a></nav>
      <nav aria-label="Legal"><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a><a href="#/licence">Licence</a></nav>
      <span class="ft-n">${"Early access \xB7 everything is free while we build it."}</span>
      ${["membership","signup","signin"].includes(m.name)||Oe.profile()?.email?"":Vt("footer",{compact:!0})}</footer>`}let Za=0,Tt={"orb-slider":La,"orb-wave":[{id:"gentle",name:"Gentle",line:"Wide, soft ripples.",p:{strength:.6,scale:110}},{id:"classic",name:"Classic",line:"The ripple from the intro.",p:{strength:1,scale:70}},{id:"deep",name:"Deep",line:"Tight, strong rings.",p:{strength:1.6,scale:45}},{id:"rain",name:"Rain",line:"Many small, quick rings, like drops on water.",p:{strength:.5,scale:28}}],"background-pack":[{id:"classic",name:"Classic",line:"The horizon as in the intro.",p:{horizon:.3,lamp:.9}},{id:"wide",name:"Wide floor",line:"A low horizon and more floor.",p:{horizon:.18,lamp:.9}},{id:"high",name:"High horizon",line:"A high horizon and more sky.",p:{horizon:.45,lamp:.9}},{id:"lantern",name:"Lantern",line:"A brighter lamp around the Orb in the dark world.",p:{horizon:.3,lamp:1.6}}],"crystal-controls":La},ft=t=>t?.code==="kit",ua=(t,i,b)=>`<iframe class="kit-frame" data-kit="${t}|${i}|${b?1:0}" title="${b?"Preview":"Live preview"}"${b?' tabindex="-1" aria-hidden="true" loading="lazy"':""}></iframe>`,Qt=t=>t.querySelectorAll("[data-kit]").forEach(i=>{let[b,f,x]=i.dataset.kit.split("|");i.srcdoc=Ja(b,f,{mini:x==="1"})}),It=[...et.map(t=>({id:`orb-${t.id}`,fam:"orb",variant:t.id,sphere:t.id,ext:".orb",name:t.id==="clear"?"The Orb":`The Orb \xB7 ${t.name}`,kind:t.line,href:`#/products/orb${t.id==="clear"?"":`?variant=${t.id}`}`})),...Ur.filter(t=>t.id!=="orb").flatMap(t=>Tt[t.id].map((i,b)=>({id:b?`${t.id}-${i.id}`:t.id,fam:t.id,variant:b?i.id:null,ext:ft(t)?".html":".kit",name:`${t.name} \xB7 ${i.name}`,kind:i.line,mini:ft(t)?ua(t.id,i.id,!0):null,cls:i.cls,dark:i.dark,img:ft(t)?null:`./media/products/${t.id}.jpg`,pos:t.id==="background-pack"?`50% ${Math.round(30+(i.p.horizon-.3)*160)}%`:null,href:`#/products/${t.id}${b?`?variant=${i.id}`:""}`})))],Pt="Free \xB7 Early access",vt=(t,i="")=>"";function jt(t){t.querySelectorAll("[data-cart]").forEach(i=>i.addEventListener("click",b=>{b.preventDefault(),b.stopPropagation();let f=It.find(E=>E.id===i.dataset.cart)||an().find(E=>E.id===i.dataset.cart),x=nt.toggle({id:f.id,name:f.name,href:f.href||"#/sound"});x&&Ee("add_to_cart",{item:f.id}),i.setAttribute("aria-pressed",String(x)),i.querySelector("span").textContent=x?"In cart":"Add to cart",o.sfx(x?"confirm":"select")}))}let ea=(t,i,b)=>`<button class="gb small" type="button" data-fsave="${t}|${i}" data-name="${ne(b)}" aria-pressed="${Oe.isSaved(t,i)}">${ue.heart}<span>${Oe.isSaved(t,i)?"Saved":"Save"}</span></button>`;function r(t,i){t.querySelectorAll("[data-fsave]").forEach(b=>b.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation();let[x,E]=b.dataset.fsave.split("|"),D=Oe.toggleSaved(x,E,b.dataset.name,i(x,E));D&&Ee("save",{kind:x,item:E}),b.setAttribute("aria-pressed",String(D)),b.querySelector("span").textContent=D?"Saved":"Save",o.sfx(D?"confirm":"select")}))}function p(){let t=i=>`<article class="file glass" data-href="${i.href}">
        <div class="file-v ${i.cls??""}${i.mini?" has-kit":""}${i.dark?" is-dark":""}"${i.sphere?` data-sphere="${i.sphere}"`:""}>${i.img?`<img src="${i.img}" alt="" draggable="false" loading="lazy"${i.pos?` style="object-position:${i.pos}"`:""}>`:""}${i.mini??""}<span class="file-ext">${i.ext}</span></div>
        <div class="file-m"><h3><a class="file-link" href="${i.href}">${ne(i.name)}</a></h3><p>${ne(i.kind)}</p><p class="file-p">${Pt}</p></div>
        <div class="file-a">${`<a class="gb small" href="${i.href}">${i.fam==="orb"||ft(Bt(i.fam))?"Get it free":"Coming to early access"}</a>`}${ea("product",i.id,i.name)}<a class="gb small primary" href="#/studio?family=${i.fam}${i.variant?`&preset=${i.variant}`:""}">Go to Studio</a></div></article>`;l.innerHTML=`
      <section class="dest shop">
        <header class="dh"><h1>Products</h1></header>
        <div class="file-grid">${It.map(t).join("")}</div>
      </section>${Lt()}`,jt(l),r(l,(i,b)=>It.find(f=>f.id===b)?.href??"#/products"),Qt(l),l.querySelectorAll(".file[data-href]").forEach(i=>i.addEventListener("click",b=>{b.defaultPrevented||b.target.closest("button, a")||(o.sfx("open"),location.hash=i.dataset.href)})),l.querySelectorAll("[data-sphere]").forEach(i=>{let b=Sa(i,i.dataset.sphere,{reduced:s});R.push(()=>b.dispose())})}function g(){let t=Bt(m.id);if(!t||t.published===!1){location.replace("#/products");return}let i=ft(t),b=t.id==="orb"?et:Tt[t.id],f=b.some(k=>k.id===m.query.variant)?m.query.variant:b[0].id,x=k=>b.find(B=>B.id===k),E=k=>t.id==="orb"?`orb-${k}`:k===b[0].id?t.id:`${t.id}-${k}`;l.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/products">${ue.back}<span>Products</span></a>
        <div class="pd-grid">
          <div class="pd-stage glass${i?" has-kit":""}" data-stage>${i?ua(t.id,f,!1):Xe(t.id)}</div>
          <div class="pd-info">
            <p class="kicker">${ne(t.id==="orb"?"Sphere":t.kind)}</p><h1>${ne(t.name)}</h1>
            <p class="lede">${ne(qe[t.id].lede)}</p>
            ${b?`<div class="vars"><p class="lbl">Version</p><div class="segbar" role="radiogroup" aria-label="Version">${b.map(k=>`<button class="pill" role="radio" type="button" data-variant="${k.id}" aria-checked="${k.id===f}">${k.name}</button>`).join("")}</div><p class="var-line" data-vline></p></div>`:""}
            <p class="price" data-price>${Pt}</p>
            <div class="acts eq">${t.id==="orb"||i?`<button class="gb small primary" type="button" data-getfree>${ue.check}<span>Get it free</span></button>`:'<button class="gb small primary" type="button" data-soon aria-expanded="false" aria-controls="ea-wait"><span>Coming to early access</span></button>'}${ea("product",E(f),t.name)}</div>
            ${t.id==="orb"?V():i?me():`<div class="ea-wait" id="ea-wait" hidden>${Vt("product",{compact:!0,label:`Get an email when ${ne(t.name)} is ready to take, free`})}</div>`}
            ${`<a class="studio-lock" href="#/studio?family=${t.id}">${ue.check}<span><b>Customise in Studio</b><small>Open to everyone \xB7 Beta</small></span></a>`}
            <dl class="facts"><dt>What it does</dt><dd>${ne(qe[t.id].does)}</dd><dt>You receive</dt><dd>${t.receives.map(ne).join(" \xB7 ")}</dd></dl>
            <details class="acc"><summary>Compatibility and installation</summary><p>${ne(qe[t.id].tech)}</p></details>
          </div>
        </div>
      </section>${Lt()}`,jt(l),r(l,(k,B)=>`#/products/${t.id}`),He(t.id,l.querySelector("[data-stage]"),f),Ee("product_open",{product:t.id,variant:f});let D=k=>{W.sphere?.setKind(k);let B=x(k),w=l.querySelector("[data-stage]");if(i){w.querySelector("[data-kit]").dataset.kit=`${t.id}|${k}|0`,Qt(w);let _=l.querySelector(".free-c code");_&&(_.textContent=Ja(t.id,k))}else t.id!=="orb"&&(w.classList.remove("v-dark","v-frost","v-compact"),B.cls&&w.classList.add(B.cls),B.p&&$e.set(B.p));l.querySelectorAll("[data-variant]").forEach(_=>_.setAttribute("aria-checked",String(_.dataset.variant===k)));let C=l.querySelector("[data-vline]");if(C&&(C.textContent=x(k).line),t.id==="orb"){let _=!0;l.querySelector("[data-price]").textContent=Pt,l.querySelector("[data-free]").hidden=!_;let Ze=l.querySelector(".free-c code");Ze&&(Ze.textContent=v(k))}let A=l.querySelector("[data-cart]");if(A&&(A.dataset.cart=E(k)),A){let _=nt.has(A.dataset.cart);A.setAttribute("aria-pressed",String(_)),A.querySelector("span").textContent=_?"In cart":"Add to cart"}let N=l.querySelector("[data-fsave]");N.dataset.fsave=`product|${E(k)}`;let Ae=Oe.isSaved("product",E(k));N.setAttribute("aria-pressed",String(Ae)),N.querySelector("span").textContent=Ae?"Saved":"Save",history.replaceState(null,"",`#/products/${t.id}${k===b[0].id?"":`?variant=${k}`}`)};tt(l,i?t.id:"orb"),l.querySelector("[data-download]")?.addEventListener("click",()=>{let k=l.querySelector("[data-variant][aria-checked=true]")?.dataset.variant??b[0].id;lt(`${t.id}-${k}.html`,Ja(t.id,k)),o.sfx("confirm"),Ee("free_code_download",{product:t.id,variant:k})}),l.querySelector("[data-getfree]")?.addEventListener("click",()=>{let k=l.querySelector("[data-freebtn]");k?.getAttribute("aria-expanded")!=="true"&&k?.click(),k?.scrollIntoView({block:"nearest",behavior:"smooth"})}),l.querySelector("[data-soon]")?.addEventListener("click",k=>{let B=l.querySelector("#ea-wait"),w=B.hidden;B.hidden=!w,k.currentTarget.setAttribute("aria-expanded",String(w)),o.sfx(w?"open":"close"),w&&B.querySelector("input")?.focus()}),l.querySelectorAll("[data-variant]").forEach(k=>k.addEventListener("click",()=>{D(k.dataset.variant),o.sfx("select"),Ee("variant",{product:t.id,variant:k.dataset.variant})})),D(f)}let v=(t="clear")=>`<div data-light-orb${t==="clear"?"":` data-variant="${t}"`} style="width:320px;height:320px"></div>
<script type="module" src="https://carlatres3.github.io/light-orb/embed/v1/orb.js"><\/script>`,$=v();function V(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${ue.check}<span>Get the code \u2014 free</span></button>
      <div class="free-p" id="free-code" hidden><p class="note">Paste this where the Orb should appear. It fills the box you give it; drag to turn it, tap to stir it.</p>
        <pre class="free-c glass"><code>${ne($)}</code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function me(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${ue.check}<span>Get the code \u2014 free</span></button>
      <div class="free-p" id="free-code" hidden><p class="note">One self-contained file: open it in a browser, or paste its style, markup and script into your page. Change the material with the --cc-* variables at the top.</p>
        <pre class="free-c glass kit-code"><code></code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button><button class="gb small" type="button" data-download><span>Download .html</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function lt(t,i){let b=URL.createObjectURL(new Blob([i],{type:"text/html"})),f=document.createElement("a");f.href=b,f.download=t,document.body.append(f),f.click(),f.remove(),setTimeout(()=>URL.revokeObjectURL(b),1e3)}function tt(t,i="orb"){let b=t.querySelector("[data-freebtn]");if(!b)return;let f=t.querySelector("#free-code"),x=t.querySelector("[data-copy]");b.addEventListener("click",()=>{let E=f.hidden;f.hidden=!E,b.setAttribute("aria-expanded",String(E)),o.sfx(E?"open":"select"),E&&Ee("free_code_open",{product:i})}),x.addEventListener("click",async()=>{let E=!1;try{await navigator.clipboard.writeText(t.querySelector(".free-c code").textContent),E=!0}catch{let D=document.createRange();D.selectNodeContents(t.querySelector(".free-c code"));let k=getSelection();k.removeAllRanges(),k.addRange(D)}x.querySelector("span").textContent=E?"Copied":"Selected \u2014 press Copy",E&&(o.sfx("select"),Ee("free_code_copy",{product:i})),setTimeout(()=>{x.isConnected&&(x.querySelector("span").textContent="Copy code")},2200)})}let qe={orb:{lede:"A 3D sphere you can place in your own work. Choose the material and what it holds inside.",does:"Drag to turn it; it keeps turning slowly on its own. A tap makes whatever is in it move a little faster. Twenty versions: clear glass, liquid metal, porcelain, bloom, and glass holding a light, points of light, glitter or beads.",tech:"An ES module built on Three.js r186 (WebGL 2). Works in current Chrome, Safari, Edge and Firefox. The integration notes explain how to place it in a page and choose a version."},"orb-slider":{lede:"A glass capsule whose thumb is a small orb with its own slow inner light. Slide it to enter.",does:"A slide-to-confirm control. Drag the orb; let go and a spring carries it home, or to the end to confirm (it then sends a confirm event). Arrow keys, Enter, Home and End work too.",tech:"One HTML file: CSS variables for the material and a few lines of plain JavaScript. No framework, no WebGL. Current Chrome, Safari, Edge and Firefox."},"orb-wave":{lede:"The ripple the Orb leaves on the floor when it lands, drawn in light.",does:"Each touch raises a wave that spreads across the surface and fades.",tech:"A full-screen shader with an impact API: position, strength and scale. Needs WebGL 2."},"background-pack":{lede:"Two environments in one pack: a dark world and a light one, and the change between them.",does:"Moves smoothly from dark to light, controlled by a single exposure value.",tech:"A full-screen shader with exposure, horizon and lamp controls. Needs WebGL 2."},"crystal-controls":{lede:"Buttons, switches, fields and sliders in six glass materials. A highlight follows the pointer; presses give like glass on a spring.",does:"Every control has default, hover, focus, pressed, selected, disabled and loading states. Choose Clear, Smoke, Chrome, Porcelain, Gel or Bloom; each is a set of CSS variables.",tech:"One HTML file: plain CSS and a few lines of JavaScript for the pointer light and the slider spring. No framework. Current Chrome, Safari, Edge and Firefox."}};function Xe(t){return t==="orb"?'<div class="pd-sph" data-sph></div><span class="pd-hint">Drag to turn it. Tap to stir it.</span>':t==="orb-slider"?'<div class="cap" data-cap role="slider" tabindex="0" aria-label="Slide to enter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="cap-l">slide to enter</span></div>':t==="orb-wave"?'<button class="gb small pd-btn" type="button" data-drop>Drop the Orb</button><span class="pd-hint">Or tap the floor.</span>':t==="background-pack"?'<div class="segbar pd-seg" role="radiogroup" aria-label="Environment"><button class="pill" role="radio" type="button" data-env="0" aria-checked="false">Dark world</button><button class="pill" role="radio" type="button" data-env="1" aria-checked="true">Light</button></div>':`<div class="kit"><button class="gb primary" type="button">Continue</button><button class="gb" type="button">Secondary</button><button class="gb gc" type="button" aria-label="Confirm">${ue.check}</button>
      <button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><input class="gi" placeholder="Your name" aria-label="Example field">
      <input class="grange" type="range" value="60" aria-label="Example slider" style="--p:60%"><button class="gb" type="button" disabled>Disabled</button><button class="gb" type="button" aria-busy="true">Loading</button></div>`}let W=null;function He(t,i,b="clear"){if(W={id:t,el:i,cap:0,drop:null},!(t==="crystal-controls"||t==="orb-slider")){if(t!=="orb"&&h.show(kt(aa("original").config)),t==="orb"&&(W.sphere=Sa(i.querySelector("[data-sph]"),b,{reduced:s}),R.push(()=>W?.sphere?.dispose())),t==="orb-slider"){let f=i.querySelector("[data-cap]"),x=null,E=k=>{W.cap=At(k),f.setAttribute("aria-valuenow",Math.round(W.cap*100))};f.addEventListener("pointerdown",k=>{x={x:k.clientX,v:W.cap},f.setPointerCapture(k.pointerId),o.sfx("select")}),f.addEventListener("pointermove",k=>{x&&E(x.v+(k.clientX-x.x)/(f.offsetWidth-f.offsetHeight))});let D=()=>{x&&(x=null,h.orb?.nudge(.5),W.cap>.9?(E(1),o.sfx("confirm")):(E(0),o.sfx("select")))};f.addEventListener("pointerup",D),f.addEventListener("pointercancel",D),f.addEventListener("keydown",k=>{k.key==="ArrowRight"&&E(W.cap+.1),k.key==="ArrowLeft"&&E(W.cap-.1),k.key==="End"&&E(1),k.key==="Home"&&E(0)})}if((t==="orb-wave"||t==="background-pack")&&(ja(i),e.addBackdrop($e.canvas),$e.set({horizon:.3,strength:1,scale:70}),$e.setExposure(t==="background-pack"?1:0,!0),t==="orb-wave"&&(i.addEventListener("pointerdown",f=>{if(f.target.closest("button"))return;let x=i.getBoundingClientRect(),E=f.clientY-x.top;E>x.height*.55&&($e.impact(f.clientX-x.left,E),h.orb?.nudge(.7),o.sfx("detent"))}),i.querySelector("[data-drop]").addEventListener("click",()=>{W.drop={vy:0,y:null,contacts:0},o.sfx("select")})),t==="background-pack"&&i.querySelectorAll("[data-env]").forEach(f=>f.addEventListener("click",()=>{$e.setExposure(+f.dataset.env),o.sfx("open"),i.querySelectorAll("[data-env]").forEach(x=>x.setAttribute("aria-checked",String(x===f)))}))),t==="crystal-controls"){i.querySelectorAll(".gb:not([disabled])").forEach(x=>x.addEventListener("click",()=>o.sfx("select"))),i.querySelector(".gsw").addEventListener("click",x=>{let E=x.currentTarget;E.setAttribute("aria-checked",String(E.getAttribute("aria-checked")!=="true")),o.sfx("select")}),i.querySelector(".gi").addEventListener("input",x=>{x.isTrusted&&o.sfx("type")});let f=i.querySelector(".grange");f.addEventListener("input",()=>{f.style.setProperty("--p",`${f.value}%`),o.sfx("level",f.value/100)})}}}let at=2,pe=(t,i="")=>`<span class="dev" data-dev><span class="dev-body"><span class="dev-screen"><img src="${t.cover.src}" alt="${ne(i)}" draggable="false"${i?' width="1600" height="1000"':""}></span><span class="dev-glare" aria-hidden="true"></span></span><span class="dev-floor" aria-hidden="true"></span></span>`;function rt(t){s||t.querySelectorAll("[data-dev]").forEach(i=>{i.addEventListener("pointermove",b=>{let f=i.getBoundingClientRect();i.style.setProperty("--ry",`${((b.clientX-f.left)/f.width-.5)*10}deg`),i.style.setProperty("--rx",`${((b.clientY-f.top)/f.height-.5)*-8}deg`)}),i.addEventListener("pointerleave",()=>{i.style.removeProperty("--ry"),i.style.removeProperty("--rx")})})}let Qa=t=>`<!doctype html>
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
`;function Xo(){let t=pt.length+at;l.innerHTML=`
      <section class="dest tpl">
        <header class="dh"><h1>Complete compositions</h1></header>
        <div class="folder" data-folder>
          <div class="folder-tab glass"><span>Templates</span><small>${pt.length} ${pt.length===1?"composition":"compositions"}</small></div>
          <div class="folder-body glass"><span class="folder-glow" aria-hidden="true"></span><span class="folder-num" data-fnum aria-hidden="true"></span>
            <div class="folder-track" data-track role="listbox" aria-label="Templates" tabindex="0">
              ${pt.map((C,A)=>`<button class="tcard glass" type="button" role="option" data-t="${A}" aria-label="Open ${ne(C.name)}">
                <span class="tcard-n">${String(A+1).padStart(2,"0")}</span>
                <span class="tcard-cv">${pe(C)}</span>
                <span class="tcard-t">${ne(C.name)}</span><span class="tcard-l">${ne(C.line)}</span></button>`).join("")}
              ${Array.from({length:at},(C,A)=>`<div class="tcard glass soon" aria-hidden="true"><span class="tcard-n">${String(pt.length+A+1).padStart(2,"0")}</span><span class="tcard-cv"><span class="soon-orb"></span><span class="soon-lbl">In the making</span></span><span class="tcard-t">Next composition</span><span class="tcard-l">Joining the collection soon.</span></div>`).join("")}
            </div>
            <div class="folder-open" data-open hidden></div>
            <div class="folder-ctl" data-fctl><button class="gb gc small" type="button" data-fstep="-1" aria-label="Previous">${ue.prev}</button><span class="count" data-fcount></span><button class="gb gc small" type="button" data-fstep="1" aria-label="Next">${ue.next}</button></div>
          </div>
        </div>
      </section>${Lt()}`;let i=l.querySelector("[data-track]"),b=[...i.children],f=l.querySelector("[data-open]"),x=l.querySelector("[data-fctl]"),E=0,D=C=>{b.forEach((A,N)=>{let Ae=N-E+xt/340,_=Math.abs(Ae);A.style.transition=C||Rt?"none":"",A.style.transform=`translateX(calc(-50% + ${Ae*96}%)) translateZ(${-_*120}px) rotateY(${At(-Ae*18,-30,30)}deg) scale(${1-Math.min(_,2)*.08})`,A.style.zIndex=String(10-Math.round(_)),A.style.opacity=String(_>2.2?0:1-_*.22),A.classList.toggle("on",N===E),A.tagName==="BUTTON"&&A.setAttribute("aria-selected",String(N===E))}),l.querySelector("[data-fnum]").textContent=String(E+1).padStart(2,"0"),l.querySelector("[data-fcount]").textContent=`${String(E+1).padStart(2,"0")} / ${String(t).padStart(2,"0")}`,l.querySelectorAll("[data-fstep]").forEach(A=>{A.disabled=+A.dataset.fstep<0&&E===0||+A.dataset.fstep>0&&E===t-1})},k=C=>{let A=At(E+C,0,t-1);A!==E&&(E=A,o.sfx("detent")),D()};l.querySelectorAll("[data-fstep]").forEach(C=>C.addEventListener("click",()=>k(+C.dataset.fstep))),i.addEventListener("keydown",C=>{C.key==="ArrowRight"&&(k(1),C.preventDefault()),C.key==="ArrowLeft"&&(k(-1),C.preventDefault())}),pa(i,k,()=>D());let B=C=>{let A=pt[C],N={id:`template-${A.id}`,name:A.name,href:`#/templates/${A.id}`};It.some(Ae=>Ae.id===N.id)||It.push(N),f.innerHTML=`<button class="tl folder-back" type="button" data-close>${ue.back}<span>All templates</span></button>
        <div class="fo-grid"><figure class="fo-cv">${pe(A,`The beginning of the ${A.name} template.`)}</figure>
          <div class="fo-info"><p class="kicker">${String(C+1).padStart(2,"0")} \xB7 Template</p><h2>${ne(A.name)}</h2><p>${ne(A.line)}</p>
            <ul class="fo-inc">${A.includes.map(Ae=>`<li>${ne(Ae)}</li>`).join("")}</ul><p class="price">${Pt}</p>
            <div class="acts eq"><a class="gb small primary" href="#/templates/${A.id}">Open template</a>${vt(N)}${ea("template",A.id,A.name)}</div></div></div>`,jt(f),r(f,(Ae,_)=>`#/templates/${_}`),rt(f),f.querySelector("[data-close]").addEventListener("click",w),i.hidden=!0,x.hidden=!0,f.hidden=!1,f.classList.remove("in"),f.offsetWidth,f.classList.add("in"),o.sfx("open"),f.querySelector("[data-close]").focus({preventScroll:!0})},w=()=>{f.hidden=!0,i.hidden=!1,x.hidden=!1,D(!0),o.sfx("close"),i.focus({preventScroll:!0})};b.forEach((C,A)=>C.tagName==="BUTTON"&&C.addEventListener("click",N=>{if(zt){N.preventDefault();return}A!==E?(E=A,D(),o.sfx("detent")):B(A)})),D(!0)}function Zo(){let t=pt.find(i=>i.id===m.id);if(!t){location.replace("#/templates");return}l.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/templates">${ue.back}<span>Templates</span></a>
        <div class="pd-grid">
          <figure class="pd-stage cover-big">${pe(t,`The beginning of the ${t.name} template.`)}</figure>
          <div class="pd-info"><p class="kicker">Template</p><h1>${ne(t.name)}</h1><p class="lede">${ne(t.line)}</p>
            <div class="acts eq"><a class="gb small" href="#/">View it live</a>${t.starter&&!0?'<button class="gb small primary" type="button" data-starter>Download starter \u2014 free</button>':""}</div>
            ${t.starter&&!0?'<p class="note">A single .html file: the Orb (hosted embed), a greeting, a quotation slot and four destinations, ready to edit. <a href="#/licence">Licence</a></p>':'<p class="note">Purchase opens soon.</p>'}
            <dl class="facts"><dt>Includes</dt><dd>${t.includes.map(ne).join(" \xB7 ")}</dd></dl>
            <p class="note" data-covermeta></p></div>
        </div>
      </section>${Lt()}`,rt(l),l.querySelector("[data-starter]")?.addEventListener("click",()=>{lt(`${t.id}-starter.html`,Qa(t)),o.sfx("confirm"),Ee("template_starter_download",{template:t.id})}),fetch(t.cover.meta).then(i=>i.json()).then(i=>{let b=l.querySelector("[data-covermeta]");b&&(b.textContent=`Preview: a capture of this website, ${i.captured}.`)}).catch(()=>{})}function Ir(){let t=o.prefs.voice,i=[...Ut.map(w=>({group:w.full?"voices":"more",key:`voice_audition.${w.id}`,clip:"voice_audition",voice:w.id,title:w.name,tag:`${w.accent} \xB7 ${w.gender}`,sub:w.line,use:w.id,note:w.full?"":`Page narration in ${w.name}; other guide lines in ${wt(w.lines).name}.`})),...["home","products","templates","studio","sound"].map(w=>({group:"guide",key:`${w}.${t}`,clip:w,voice:t,title:w==="home"?"Welcome":w[0].toUpperCase()+w.slice(1),sub:Ia[w]})),...ba.map(w=>({group:"sfx",key:`sfx.${w.id}`,url:w.file,title:w.name,sub:w.line}))],b=(w,C,A)=>`<section class="sg"><header><h2>${C}</h2><p>${A}</p></header><div class="sgrid">${i.filter(N=>N.group===w).map(N=>`
      <article class="si glass"><button class="si-play gb gc small" type="button" data-play="${N.key}" aria-label="Play ${ne(N.title)}">${ue.play}</button>
        <div class="si-t"><h3>${ne(N.title)}${N.tag?`<span class="file-ext">${ne(N.tag)}</span>`:'<span class="file-ext">.m4a</span>'}</h3><p>${ne(N.sub)}</p>${N.note?`<p class="note">${ne(N.note)}</p>`:""}</div>
        <div class="si-w" data-wave="${N.key}" role="slider" tabindex="0" aria-label="Position in ${ne(N.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><canvas></canvas></div>
        <div class="si-m"><span class="si-d" data-dur="${N.key}">\u2013:\u2013\u2013</span></div>
        <div class="si-x eq">${N.use?`<button class="gb small" type="button" data-use="${N.use}" aria-pressed="${t===N.use}"><span>${t===N.use?"In use":"Use voice"}</span></button>`:""}${N.group!=="guide"?vt({id:`sound-${N.key}`}):""}${ea("sound",N.key,N.title)}</div></article>`).join("")}</div></section>`;l.innerHTML=`
      <section class="dest snd-dest">
        <header class="dh"><h1>Voices and sounds</h1><p class="dh-l">Twelve neural voices, each reading the same line. Choose one and the guide speaks with it across the site. Current guide voice: <b>${ne(wt(t).name)}</b>.</p></header>
        ${b("voices","Guide voices","Every line the guide says, rendered in each of these voices.")}
        ${b("more","More voices","Different characters for the guide. Compare them on the same line.")}
        ${b("guide","Guide narration",`What the guide says on each page, in ${ne(wt(t).name)}\u2019s voice.`)}
        ${b("sfx","Interface sounds","Short, quiet sounds for touch, panels and wheels.")}
      </section>${Lt()}`,l.querySelectorAll(".si").forEach(w=>{w.querySelector('[data-play^="sfx."]')&&(w.querySelector(".file-ext").textContent=".wav")}),r(l,()=>"#/sound");let f=new Map,x=(w,C)=>{let A=l.querySelector(`[data-dur="${CSS.escape(w)}"]`);A&&(A.textContent=C)};for(let w of i)(w.url?o.peaksUrl(w.url,80):o.peaks(w.clip,w.voice,80)).then(C=>{f.set(w.key,C),x(w.key,Qo(C.duration))}).catch(()=>x(w.key,"Unavailable"));tr=i;let E=w=>w.url?w.key:`${w.clip}.${w.voice}`;jt(l);let D=(w,C=0)=>(o.prefs.master||o.set({master:!0}),w.url?o.playUrl(w.key,w.url,{from:C}):o.play(w.clip,{voice:w.voice,kind:"audition",from:C}));l.querySelectorAll("[data-play]").forEach(w=>w.addEventListener("click",()=>{let C=i.find(N=>N.key===w.dataset.play),A=E(C);o.state.clip===A&&o.playing?o.pause():o.state.clip===A&&o.state.status==="paused"?o.resume():D(C)})),l.querySelectorAll("[data-wave]").forEach(w=>{let C=i.find(_=>_.key===w.dataset.wave),A=E(C),N=!1,Ae=_=>{let Ze=w.getBoundingClientRect();return At((_.clientX-Ze.left)/Ze.width)};w.addEventListener("pointerdown",async _=>{N=!0,w.setPointerCapture(_.pointerId);let Ze=Ae(_);o.state.clip!==A&&await D(C),o.seek(Ze)}),w.addEventListener("pointermove",_=>{N&&o.state.clip===A&&o.seek(Ae(_))}),w.addEventListener("pointerup",()=>{N=!1}),w.addEventListener("keydown",_=>{o.state.clip!==A||!o.duration||(_.key==="ArrowRight"&&o.seek(o.position+1/o.duration),_.key==="ArrowLeft"&&o.seek(o.position-1/o.duration))})}),l.querySelectorAll("[data-use]").forEach(w=>w.addEventListener("click",()=>{let C=scrollY;o.stop(),o.set({voice:w.dataset.use}),o.sfx("confirm"),Ee("voice_use",{voice:w.dataset.use}),Ir(),scrollTo(0,C),Ma(`${wt(w.dataset.use).name} is now the guide\u2019s voice.`)}));let k=0,B=()=>{if(k=requestAnimationFrame(B),tr!==i){cancelAnimationFrame(k);return}for(let w of l.querySelectorAll("[data-wave]")){let C=i.find(Nt=>Nt.key===w.dataset.wave);if(!C)continue;let A=E(C),N=f.get(C.key),Ae=w.firstElementChild,_=w.getBoundingClientRect();if(_.bottom<0||_.top>innerHeight)continue;let Ze=o.state.clip===A,ta=Ze?o.position:0,ga=Ze?o.state.energy:0,Dt=Ze&&o.playing;w.setAttribute("aria-valuenow",Math.round(ta*100));let Ct=l.querySelector(`[data-play="${CSS.escape(C.key)}"]`);if(Ct&&Ct.dataset.on!==String(Dt)&&(Ct.dataset.on=String(Dt),Ct.innerHTML=Dt?ue.pause:ue.play,Ct.setAttribute("aria-label",`${Dt?"Pause":"Play"} ${C.title}`)),!N)continue;let ot=Math.min(devicePixelRatio||1,2);Ae.width!==Math.round(_.width*ot)&&(Ae.width=Math.round(_.width*ot),Ae.height=Math.round(_.height*ot));let yt=Ae.getContext("2d");yt.setTransform(ot,0,0,ot,0,0),yt.clearRect(0,0,_.width,_.height);let mt=N.bins.length,Aa=2,Yt=(_.width-Aa*(mt-1))/mt,ln=_.height/2;for(let Nt=0;Nt<mt;Nt++){let jr=(Nt+.5)/mt<=ta,dn=jr&&Math.abs((Nt+.5)/mt-ta)<2.5/mt?ga:0,Dr=Math.max(2,(N.bins[Nt]*.9+dn*.2)*(_.height-4));yt.fillStyle=jr?"#262827":"rgba(38,40,39,.2)",yt.beginPath(),yt.roundRect(Nt*(Yt+Aa),ln-Dr/2,Yt,Dr,Yt/2),yt.fill()}}};B(),R.push(()=>cancelAnimationFrame(k))}let Qo=t=>`${Math.floor(t/60)}:${String(Math.round(t%60)).padStart(2,"0")}`;function en(){if(M&&(M.leave(),M=null),!0){l.innerHTML="",M=Eo({api:e,audio:o,top:u,page:l,query:m.query,ICON:ue,flash:Ma,product:h,store:Oe});return}l.innerHTML=`
      <section class="st-lock">
        <div class="lock-blur" aria-hidden="true"><i class="lb-bar"></i><i class="lb-sph"></i><i class="lb-ins"></i></div>
        <div class="lock-card glass dark">
          <span class="lock-i">${ue.lock}</span>
          <p class="kicker">Studio</p><h1>For members</h1>
          <p>Shape the sphere: its material, its colour and what moves inside it. Studio opens with membership.</p>
          <div class="acts eq"><a class="gb small primary" href="#/membership">See membership</a><a class="gb small" href="#/products">Browse products</a></div>
        </div>
      </section>`}let er=0;function Ma(t){y.textContent=t,y.classList.add("on"),clearTimeout(er),er=setTimeout(()=>{y.classList.remove("on"),q()},Math.max(3200,t.length*70))}function tn(t,i,{W:b,H:f}){let x=o.energy(),E=o.playing&&(o.state.kind==="guide"||o.state.kind==="audition"&&m.name==="sound");a.setSpeech(E&&!ar()?x*(s?.35:.9):0),We+=((E&&!ar()||re?1:0)-We)*Math.min(1,i*(E?4:1.2));{let B=t-Ye,w=B<0?0:B<3.5?qt(B/.4):1-qt((B-3.5)/1.6);a.setRibbon?.(Math.max(w,We))}h.orb?.setSpeech(o.playing&&o.state.kind==="audition"&&ar()?x*(s?.35:1):0);let D=b<700,k;if(M?(k=M.frame(t,i,{W:b,H:f}),h.frame(k.product??null)):m.name==="home"?k=nn(b,f,D):k={warm:0,orb:rn(b,f,D),emission:ee.emission},!M){let B=sn(b,f,i);h.frame(B),B?.ground&&(k.grounds||=[]).push({y:B.ground,x:B.x,d:B.d})}return on(k.orb),k}let Pr=null,tr=[],an=()=>tr.map(t=>({id:`sound-${t.key}`,name:t.title,href:"#/sound"})),ar=()=>!1,rn=(t,i,b)=>({x:t-(b?34:50),y:i-(b?38:52),d:b?40:50,vis:1});function on(t){let i=t&&(t.vis??1)>.5&&!!ae();n.hidden=!i,i&&Object.assign(n.style,{left:`${t.x-t.d/2}px`,top:`${t.y-t.d/2}px`,width:`${t.d}px`,height:`${t.d}px`})}function nn(t,i,b){let f=l.scrollTop/i,x=l.querySelector("[data-welcopy]"),E=l.querySelector("[data-qt]"),D=l.querySelector(".wel-ctl"),k=1-qt((f-.04)/.2),B=De[he],w=B?.getBoundingClientRect(),C=(l.querySelector(".qt")?.offsetTop??i)/i,A=(l.querySelector("#select")?.offsetTop??2*i)/i,N=l.querySelector("#sel-t"),Ae=N?(N.getBoundingClientRect().top+l.scrollTop-l.getBoundingClientRect().top)/i:2,_=Ae-.8,Ze=ni(f,.13,.3,_-.22,_);x&&(x.style.setProperty("--wipe",k.toFixed(3)),x.style.visibility=k<.01?"hidden":""),D&&(D.style.setProperty("--wipe",k.toFixed(3)),D.style.visibility=k<.01?"hidden":""),E&&(E.style.setProperty("--wipe",Ze.toFixed(3)),E.style.transform=`translateY(${(20*(1-qt((f-.13)/.17))-24*qt((f-_+.22)/.22)).toFixed(1)}px)`,E.style.visibility=Ze<.01?"hidden":"");let ta=At(Math.min(t*(b?.46:.19),i*.28),120,280),ga={x:t/2,y:i*(b?.3:.29),d:ta},Dt={x:t/2,y:i*.87,d:ta*.3},Ct=qt((f-.08)/Math.max(.3,C-.5)),ot={x:ca(ga.x,Dt.x,Ct),y:ca(ga.y,Dt.y,Ct),d:ca(ga.d,Dt.d,Ct)};if(B){let yt=w,mt=qt((f-_+.1)/.2);if(mt>0){let Aa=b?40:50,Yt={x:Ne?yt.left+yt.width/2:t/2,y:yt.bottom+44,d:Aa};ot={x:ca(ot.x,Yt.x,mt),y:ca(ot.y,Yt.y,mt),d:ca(ot.d,Yt.d,mt)}}}return{orb:{...ot,vis:1},warm:1,ground:{y:ot.y+ot.d/2},emission:ee.emission}}function sn(t,i,b){if(m.name==="sound"&&Pr?.isConnected){let f=Pr.getBoundingClientRect(),x=Math.min(f.width,f.height)*.78;return f.bottom>0?{x:f.left+f.width/2,y:f.top+f.height/2,d:x,vis:1,ground:f.top+f.height/2+x/2}:null}if(m.name==="products"&&!m.id){let f=l.querySelector("[data-orbslot]");if(!f)return null;let x=f.getBoundingClientRect(),E=f.closest(".pc")?.classList.contains("on"),D=Math.min(x.width,x.height)*.74;return x.width>10?{x:x.left+x.width/2,y:x.top+x.height/2,d:D,vis:E?1:.7,ground:x.top+x.height/2+D/2}:null}if(m.name==="products"&&m.id&&W?.el?.isConnected){let f=W,x=f.el.getBoundingClientRect();if(f.id==="orb-slider"){let E=f.el.querySelector("[data-cap]");if(!E)return null;let D=E.getBoundingClientRect(),k=D.height*.84,B=(D.height-k)/2;return{x:D.left+B+k/2+f.cap*(D.width-D.height),y:D.top+D.height/2,d:k,vis:1,snap:!0}}if(f.id==="orb-wave"||f.id==="background-pack"){let E=Math.min(96,x.width*.16),D=x.height*.7+E*.1,k=D-E/2;if(f.drop){let B=f.drop;B.y==null&&(B.y=-x.height*.45),B.vy+=2600*b,B.y+=B.vy*b,B.y>=0&&(B.y=0,$e.impact(x.width/2,D,At(B.vy/1400)),h.orb?.nudge(.8),o.sfx("detent"),B.vy*=-.38,(++B.contacts>2||Math.abs(B.vy)<120)&&(f.drop=null)),k+=f.drop?f.drop.y:0}return $e.setOrb({x:x.width/2,y:k,d:E}),{x:x.left+x.width/2,y:x.top+k,d:E,vis:1,snap:!!f.drop}}}return null}addEventListener("resize",()=>{m.name==="home"&&_t(!0)}),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__lo={audio:o,worldPreview:$e,product:h,store:Oe,get studio(){return M},get route(){return m},get sel(){return he},get psel(){return Za}});try{Object.keys(sessionStorage).filter(t=>t.startsWith("lo:scroll:")||t==="lo:sel").forEach(t=>sessionStorage.removeItem(t))}catch{}return he=0,le(),q(),{frame:tn,audio:o,get route(){return m},get studio(){return M},reapply:()=>F()}}function Rr(e,a){let s=document.createElement(e);return s.className=a,s}var Ta={hostDuration:.95,follow:7,damping:.92,pearl:[243,243,241],chamber:[23,26,25],whiten:1.4},Xt=matchMedia("(prefers-reduced-motion: reduce)").matches,Ko=(e,a=0,s=1)=>Math.min(s,Math.max(a,e)),Zt=(e,a,s)=>e+(a-e)*s,Uo=e=>{let a=Ko(e);return a<.5?4*a*a*a:1-(-2*a+2)**3/2},Vo=(e,a,s)=>e.map((o,d)=>Zt(o,a[d],s)),zr=(e,a=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${a})`,Wo=!1;document.addEventListener("lightorb:intro-complete",e=>Jo(e.detail));document.body.classList.contains("static")&&Jo(null);function ii(){let e=document.createElement("div");e.style.cssText="position:absolute;left:0;top:0;border-radius:50%;pointer-events:none;will-change:transform;background:radial-gradient(circle at 34% 28%,#fff 0 10%,rgba(255,255,255,.55) 24%,rgba(225,228,230,.35) 58%,rgba(170,176,180,.45) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),inset 0 -12px 24px rgba(120,126,130,.18),0 18px 30px -18px rgba(38,40,39,.45)";let a=()=>a,s={element:e,place(o){e.style.width=e.style.height=`${o.d}px`,e.style.transform=`translate(${o.x-o.d/2}px,${o.y-o.d/2}px)`,e.style.opacity=o.visibility??1}};return new Proxy(s,{get:(o,d)=>d in o?o[d]:a})}function Jo(e){if(Wo)return;let s=document.querySelector(".intro").querySelector(".intro-world"),o=e?.orb??ii();Wo=!0;let d=document.createElement("style");d.textContent=".x-surface,.x-orb{position:fixed;inset:0;pointer-events:none}.x-surface{z-index:6;width:100%;height:100%}.x-orb{z-index:30}",document.head.append(d);let h=document.createElement("canvas");h.className="x-surface",h.setAttribute("aria-hidden","true");let l=document.createElement("div");l.className="x-orb",document.body.append(h,l),l.append(o.element),o.attachPointer(document.createElement("div"))();let u=h.getContext("2d");o.prepareTone("ivory"),o.prepareTone("dark");let c=0,y=0,n=1,P=()=>{c=Math.max(1,innerWidth),y=Math.max(1,innerHeight),n=Math.min(devicePixelRatio||1,1.5),h.width=Math.round(c*n),h.height=Math.round(y*n)};P(),addEventListener("resize",P);let j=performance.now()/1e3,S={x:0,y:0,d:0,vx:0,vy:0,vd:0,from:null,hosted:!1},ie=new Set,q=null,we=null,O=0,xe=1,ke=1,Z=j,ee={left:.65,right:.55,env:.5,exposure:0,yaw:0,pitch:0,platform:!0},F=(T,L)=>{let z=performance.now()/1e3,I=Ko(z-Z,0,.05);Z=z,S.from||(S.from={x:T.x,y:T.y,d:T.d}),q=we?.frame(z,I,{W:c,H:y})??null;let U=q?.orb??{x:c/2,y:y*.42,d:Math.min(c*.3,y*.42)},H=Xt?1:Uo((z-j)/Ta.hostDuration);if(!S.hosted)S.x=Zt(S.from.x,U.x,H),S.y=Zt(S.from.y,U.y,H),S.d=Zt(S.from.d,U.d,H),H>=1&&(S.hosted=!0,o.attachPointer(document.createElement("div"))(),we?.reapply?.());else if(Xt||q?.snap)S.x=U.x,S.y=U.y,S.d=U.d,S.vx=S.vy=S.vd=0;else{let K=Ta.follow,oe=Ta.damping;S.vx+=(K*K*(U.x-S.x)-2*oe*K*S.vx)*I,S.x+=S.vx*I,S.vy+=(K*K*(U.y-S.y)-2*oe*K*S.vy)*I,S.y+=S.vy*I,S.vd+=(K*K*(U.d-S.d)-2*oe*K*S.vd)*I,S.d+=S.vd*I}S.hosted&&!S.hostedAt&&(S.hostedAt=z);let se=Xt?1:Uo((z-j-.25)/Ta.whiten),re=Math.min(q?.warm??1,1-se);xe=Xt?re:Zt(xe,re,.2),O=Zt(O,q?.room==="chamber"?1:0,Xt?1:.12),ke=Zt(ke,q?.orb?.vis??1,Xt?1:.14),Number.isFinite(S.x+S.y+S.d)||(console.warn("orb pose NaN",JSON.stringify(U),JSON.stringify(S)),Object.assign(S,{x:U.x,y:U.y,d:U.d,vx:0,vy:0,vd:0})),de();let ze=xe<.002;return{...T,x:S.x,y:S.y,d:S.d,squash:0,contact:0,worldY:ze?-9999:S.y,hideWorld:ze,visibility:ke,emission:T.emission*(q?.emission??1),raster:Math.ceil(Math.max(S.d,U.d,140)*1.06)}};if(e?.orb)e.takeOver(F);else{let T=()=>{o.place(F({x:c/2,y:y/2,d:0,emission:1})),requestAnimationFrame(T)};requestAnimationFrame(T)}try{o.setBackdrop((T,L)=>Y(T,L,S))}catch(T){console.warn("backdrop",T)}let ae=(()=>{try{let T=document.createElement("canvas").getContext("2d");return T.filter="blur(1px)",T.filter==="blur(1px)"}catch{return!1}})(),ve=document.createElement("canvas"),X=ve.getContext("2d");function Le(T,L,z,I){return ve.width!==I&&(ve.width=ve.height=I),X.globalCompositeOperation="copy",X.drawImage(s,T,L,z,z,0,0,I,I),X.globalCompositeOperation="saturation",X.fillStyle="#808080",X.fillRect(0,0,I,I),X.globalCompositeOperation="destination-in",X.drawImage(s,T,L,z,z,0,0,I,I),X.globalCompositeOperation="source-over",ve}function Y(T,L,z){let I=z.d/L.diameter,U=L.extent*I,H=z.x-U/2,se=z.y-U/2,re=L.extent/U,ze=K=>K.width>0&&K.height>0;if(xe>.002&&ze(s)){let K=s.width/Math.max(1,innerWidth),oe=!document.documentElement.classList.contains("warm");oe&&ae&&(T.filter="grayscale(1) contrast(1.06)"),oe&&!ae?T.drawImage(Le(H*K,se*K,U*K,L.extent),0,0):T.drawImage(s,H*K,se*K,U*K,U*K,0,0,L.extent,L.extent),oe&&ae&&(T.filter="none")}ze(h)&&T.drawImage(h,H*n,se*n,U*n,U*n,0,0,L.extent,L.extent);for(let K of ie){if(!K.isConnected||!ze(K))continue;let oe=K.getBoundingClientRect();oe.right<H||oe.left>H+U||oe.bottom<se||oe.top>se+U||T.drawImage(K,(oe.left-H)*re,(oe.top-se)*re,oe.width*re,oe.height*re)}}function de(){u.setTransform(n,0,0,n,0,0),u.clearRect(0,0,c,y);let T=1-xe;if(T>0){u.globalAlpha=T;let z=Ta.pearl,I=u.createLinearGradient(0,0,0,y);I.addColorStop(0,zr(Vo(z,[250,251,251],.5))),I.addColorStop(.6,zr(z)),I.addColorStop(1,zr(Vo(z,[214,217,220],.55))),u.fillStyle=I,u.fillRect(0,0,c,y),Q(c*.92,-y*.1,c*.55,"255,255,255",.7),Q(c*.05,y*1.05,c*.45,"196,201,206",.35),u.globalAlpha=1}for(let z of q?.glows??[]){u.save(),u.globalAlpha=z.k*T,u.translate(z.x,z.y),u.scale(1,z.h/z.w);let I=u.createRadialGradient(0,0,0,0,0,z.w);I.addColorStop(0,"rgba(255,255,255,.7)"),I.addColorStop(.5,"rgba(255,255,255,.22)"),I.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=I,u.fillRect(-z.w,-z.w,z.w*2,z.w*2),u.restore()}O>.002&&Et(O);let L=q?.ground;for(let z of q?.grounds??[])te(z,z,1)}function Q(T,L,z,I,U){let H=u.createRadialGradient(T,L,0,T,L,z);H.addColorStop(0,`rgba(${I},${U})`),H.addColorStop(1,`rgba(${I},0)`),u.fillStyle=H,u.fillRect(T-z,L-z,z*2,z*2)}let Te=Array.from({length:160},(T,L)=>{let z=Math.sin(L*12.9898)*43758.5453,I=z-Math.floor(z),U=Math.sin(L*78.233)*12345.678%1;return[I*Math.PI*2,Math.abs(U)*.9-.25,.3+L%7/10]});function Et(T){let L=q?.stage??{x:0,y:0,w:c,h:y},z=2**(ee.exposure*.5),I=ee.left,U=ee.right,H=L.x+L.w/2,se=L.y+L.h*.52,re=ee.yaw,ze=ee.pitch;u.save(),u.globalAlpha=T,u.fillStyle="#070808",u.fillRect(0,0,c,y),u.fillStyle="#ffffff";for(let[st,Ie,Ye]of Te){let We=st-re*Ye,Se=H+Math.sin(We)*L.w*.9,Fe=se-(Ie+ze*.6*Ye)*L.h;Math.cos(We)<-.2||Se<L.x||Se>L.x+L.w||(u.globalAlpha=T*.1*Ye*z,u.fillRect(Se,Fe,1.1,1.1))}u.globalAlpha=T;let K=se+L.h*(.12-ze*.55),oe=q?.product?.ground??se+L.h*.18,it=u.createLinearGradient(0,K,0,L.y+L.h);it.addColorStop(0,"rgba(255,255,255,0)"),it.addColorStop(.25,`rgba(255,255,255,${.035*z})`),it.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=it,u.fillRect(L.x,K,L.w,L.y+L.h-K);let Ce=q?.product?.x??H,$t=q?.product?.d??L.h*.4;for(let[st,Ie]of[[-1,I],[1,U]]){if(Ie<=.01)continue;let Ye=Ce+st*$t*(1.1+.5*Math.sin(re*st+.4)),We=.18+.3*Math.max(0,Math.sin(.15+ze));u.save(),u.translate(Ye,oe),u.scale(1,We);let Se=u.createRadialGradient(0,0,0,0,0,$t*1.3);Se.addColorStop(0,`rgba(240,242,240,${.12*Ie*z})`),Se.addColorStop(1,"rgba(240,242,240,0)"),u.fillStyle=Se,u.beginPath(),u.arc(0,0,$t*1.3,0,Math.PI*2),u.fill(),u.restore();let Fe=st<0?L.x:L.x+L.w,je=u.createRadialGradient(Fe,se,0,Fe,se,L.w*.45);je.addColorStop(0,`rgba(230,234,232,${.07*Ie*z})`),je.addColorStop(1,"rgba(230,234,232,0)"),u.fillStyle=je,u.fillRect(L.x,L.y,L.w,L.h)}let ht=u.createRadialGradient(H,se,L.h*.2,H,se,Math.hypot(L.w,L.h)*.62);ht.addColorStop(0,"rgba(0,0,0,0)"),ht.addColorStop(1,"rgba(0,0,0,.55)"),u.fillStyle=ht,u.fillRect(0,0,c,y),u.restore()}function te(T,L,z){if(!Number.isFinite(L.d+L.x+T.y)||L.d<=0)return;let I=L.d/2,U=O>.5;u.save(),u.globalAlpha=z,u.translate(L.x,T.y),u.scale(1,.2);let H=u.createRadialGradient(0,0,0,0,0,I*1.5);U?(H.addColorStop(0,"rgba(240,240,236,.12)"),H.addColorStop(1,"rgba(240,240,236,0)"),u.globalCompositeOperation="lighter"):(H.addColorStop(0,"rgba(70,72,78,.22)"),H.addColorStop(.5,"rgba(70,72,78,.07)"),H.addColorStop(1,"rgba(70,72,78,0)")),u.fillStyle=H,u.beginPath(),u.arc(0,0,I*1.5,0,Math.PI*2),u.fill(),u.restore()}let ye={orb:o,reduced:Xt,chamber:ee,body:{get x(){return S.x},get y(){return S.y},get d(){return S.d},get hosted(){return S.hosted}},addBackdrop:T=>ie.add(T),removeBackdrop:T=>ie.delete(T),drawBackdrop:Y,exportPNG(T,L=o.element){let I=document.createElement("canvas");I.width=Math.round(T.w*2),I.height=Math.round(T.h*2);let U=I.getContext("2d");U.drawImage(h,T.x*n,T.y*n,T.w*n,T.h*n,0,0,I.width,I.height);for(let H of L.querySelectorAll("canvas")){let se=H.getBoundingClientRect();U.drawImage(H,(se.left-T.x)*2,(se.top-T.y)*2,se.width*2,se.height*2)}return new Promise(H=>I.toBlob(H,"image/png"))}};we=Yo(ye),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__exit={api:ye,body:S,site:we,get scene(){return q}})}export{Ta as EXIT};
