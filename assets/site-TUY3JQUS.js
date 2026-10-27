import{A as ka,B as jr,C as Aa,D as Ti,E as Fe,F as qi,e as zr,f as vo,h as vi,i as yi,j as yo,k as wo,n as wi,o as ki,p as ko,r as So,t as Si,u as Ei,w as $i,x as Mi,y as Li,z as Or}from"./chunk-LSRUEYVE.js";var Va=[{id:"products",label:"Products",route:"#/products",line:"Objects, buttons and pieces, ready to use.",action:"Explore products",clip:"products",words:["products","product","pieces","piece","objects","gallery","shop"]},{id:"templates",label:"Templates",route:"#/templates",line:"Complete compositions to start from.",action:"Browse templates",clip:"templates",words:["templates","template","compositions","websites","cassettes"]},{id:"studio",label:"Studio",route:"#/studio",line:"Shape the light. Make it yours.",action:"Open Studio",clip:"studio",words:["studio","editor","customize","customise","edit","workshop"]},{id:"sound",label:"Sound",route:"#/sound",line:"Voices and the quiet sounds of glass.",action:"Listen",clip:"sound",words:["sound","sounds","voice","voices","audio","listen"]},{id:"design",label:"Web Design",route:"#/design",line:"A website designed and built around your idea.",action:"Start a project",clip:null,words:["design","commission","hire","custom","bespoke","project","inquiry","enquiry"]},{id:"about",label:"About",route:"#/about",line:"The person behind the work.",action:"Meet Carla",clip:null,words:["about","carla"]}],Ca=e=>Va.find(a=>a.id===e),Eo=[{...Ca("products"),children:[{id:"products",label:"Digital Pieces",route:"#/products",line:"Objects, buttons, textures and effects"},{id:"sound",label:"Sound",route:"#/sound",line:"Voices and the quiet sounds of glass"},{id:"studio",label:"Studio",route:"#/studio",line:"Shape the light. Make it yours."}]},Ca("templates"),Ca("design"),Ca("about")],Ai={products:["products","sound","studio"],templates:["templates"],design:["design"],about:["about"]},ma=[{...Ca("products"),line:"Digital pieces, sound and Studio."},{...Ca("templates"),line:"Complete website experiences to explore."},{...Ca("design"),line:"A website made around your idea."}];var $o=e=>(Object.values(e).forEach(a=>a&&typeof a=="object"&&$o(a)),Object.freeze(e)),Ir=$o({version:1,shell:{roughness:.01,thickness:.78,ior:1.58,tint:"#cdd2cf",tintAmount:.72,elastic:0},interior:{kind:"light",amount:.5,size:.5,motion:.4,fill:.5,colour:"#f1f0ec"},light:{colour:"#f6f6f3",strength:.9,x:-.04,y:-.3,z:.12,spread:.8,glow:.3},motion:{idle:0},voice:{enabled:!0,response:.6}}),nr=(e,a,o,t)=>$o({id:e,name:a,line:o,family:"orb",config:{...structuredClone(Ir),...Object.fromEntries(Object.entries(t).map(([s,m])=>[s,{...Ir[s],...m}]))}}),Sa=[nr("original","Light","Clear glass holding one soft white light.",{}),nr("beads","Beads","Small glass beads resting and rolling inside the shell.",{interior:{kind:"beads",amount:.6,size:.55,motion:.45},light:{strength:.7},shell:{thickness:.15,ior:1.3}}),nr("glitter","Glitter","Fine reflective flecks suspended in the volume.",{interior:{kind:"glitter",amount:.6,size:.35,motion:.35,colour:"#f4f4f2"}}),nr("liquid","Liquid","A clear liquid with a meniscus that moves with the glass.",{interior:{kind:"liquid",fill:.42,motion:.5,colour:"#dfe3e1"},light:{strength:.78}}),nr("gel","Gel","A soft gel body; the shell answers with a damped give.",{interior:{kind:"gel",amount:.55,motion:.45,colour:"#e4e6e3"},shell:{elastic:.55}})],Mo=Sa[0].config,fa=e=>Sa.find(a=>a.id===e)??Sa[0],Ht=[{id:"orb",name:"The Orb",kind:"Interactive object",published:!0,line:"A 3D sphere for your own work, in twenty versions: glass, metal, porcelain, bloom, and glass with light, sparkle or beads inside.",receives:["ES module (Three.js r186) with the sphere and its material","The version you choose","Integration notes and dependency list"],source:["dist/light-orb.js","dist/orb-three.js","dist/orb-lighting.js","dist/orb-floor.js"],preview:"orb",studio:!0,presets:Sa.map(e=>e.id),readiness:"preview_ready",missing:["price","checkout provider","packaged download (source export not yet assembled)"],price:null},{id:"orb-slider",name:"Orb Slider",kind:"Interactive control",published:!0,code:"kit",line:"A glass capsule whose thumb is a small orb. Slide it to enter; a spring brings it home.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Keyboard and pointer support","Six materials"],source:["dist/intro/activation.js","dist/intro/glass-control.js"],preview:"slider",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package (currently embedded in the intro)"],price:null},{id:"orb-wave",name:"Orb Wave",kind:"Surface effect",published:!1,line:"The ripple the Orb leaves on the floor when it lands, drawn in light.",receives:["Light-world shader source","Impact trigger API","Integration notes"],source:["dist/intro/light-world.js"],preview:"wave",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"background-pack",name:"Background Pack",kind:"Two environments",published:!1,line:"A dark world and a light one, and the change between them.",receives:["Dark and warm environment shader","Exposure transition","Integration notes"],source:["dist/intro/light-world.js"],preview:"backgrounds",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"crystal-controls",name:"Crystal Controls",kind:"Interface kit",published:!0,code:"kit",line:"Buttons, switches, fields and sliders in six glass materials, with light that follows the pointer.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Every state: hover, focus, pressed, selected, disabled, loading","Six materials"],source:["dist/app/glass.css.js"],preview:"controls",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged download"],price:null}],na=e=>Ht.find(a=>a.id===e),Ci=Ht.filter(e=>e.published!==!1),Gs=[{id:"the-light-orb",name:"The Light Orb",line:"This website\u2019s own beginning: the Orb as host, a quiet greeting, the quotation and the four destinations.",cover:{src:"./media/templates/the-light-orb.cover.jpg",from:"dist/intro.html (post-intro welcome, live render)",meta:"./media/templates/the-light-orb.cover.json"},route:"#/",includes:["Centred welcome with the hosting Orb","Quotation scene","Destination selector"],published:!0,starter:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged source export"],price:null},{id:"brunito",name:"BRUNITO",category:"Ecommerce",subtitle:"Ecommerce Design & Development",showcase:!0,line:"An interactive ecommerce experience featuring responsive layouts, customised product pages and a refined shopping interface.",cover:{src:"./media/templates/brunito.cover.jpg",from:"BRUNITO demo homepage (live render)",meta:"./media/templates/brunito.cover.json"},demo:"https://carlatres3.github.io/brunito/",cta:"Explore Demo",includes:["Editorial homepage and collections","Product pages with real variants and galleries","Cart drawer and cart (purchases disabled)","Desktop, tablet and mobile"],published:!0,readiness:"showcase",price:null}],wt=Gs.filter(e=>e.published!==!1),Bt={engine:"Kokoro-82M v1.0",licence:"Apache-2.0",rights:{onSite:"yes",download:"not offered"}},za=[{id:"samantha",name:"Heart",kokoro:"af_heart",grade:"A",locale:"en-US",accent:"American",gender:"female",line:"Warm and clear. The guide\u2019s own voice.",full:!0,...Bt},{id:"bella",name:"Bella",kokoro:"af_bella",grade:"A\u2212",locale:"en-US",accent:"American",gender:"female",line:"Bright and expressive, with a smile in it.",full:!0,...Bt},{id:"emma",name:"Emma",kokoro:"bf_emma",grade:"B\u2212",locale:"en-GB",accent:"British",gender:"female",line:"Composed and precise. A gallery voice.",full:!0,...Bt},{id:"daniel",name:"Michael",kokoro:"am_michael",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Calm and grounded. Steady narration.",full:!0,...Bt},{id:"nicole",name:"Nicole",kokoro:"af_nicole",grade:"B\u2212",locale:"en-US",accent:"American",gender:"female",line:"Close and hushed, almost a whisper.",lines:"samantha",...Bt},{id:"aoede",name:"Aoede",kokoro:"af_aoede",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Soft and lyrical.",lines:"samantha",...Bt},{id:"kore",name:"Kore",kokoro:"af_kore",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Even and confident.",lines:"bella",...Bt},{id:"isabella",name:"Isabella",kokoro:"bf_isabella",grade:"C",locale:"en-GB",accent:"British",gender:"female",line:"Light and friendly.",lines:"emma",...Bt},{id:"fenrir",name:"Fenrir",kokoro:"am_fenrir",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Deep and resonant.",lines:"daniel",...Bt},{id:"puck",name:"Puck",kokoro:"am_puck",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Lively and quick.",lines:"daniel",...Bt},{id:"george",name:"George",kokoro:"bm_george",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"Measured and classic.",lines:"daniel",...Bt},{id:"fable",name:"Fable",kokoro:"bm_fable",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"A storyteller\u2019s warmth.",lines:"daniel",...Bt}],sa=e=>za.find(a=>a.id===e)??za[0],Rr={home:"Welcome to The Light Orb. A space for creative possibilities. Let\u2019s explore.",products:"Explore the pieces. Each one is designed to become part of something of your own.",templates:"Start with a complete composition. Select a cassette to preview the design.",studio:"Choose a piece, then shape its light, material and movement.",sound:"Listen before you choose. Find the voice and sounds that fit your work.",voice_audition:"A little light. A new idea. Something of your own."},Lo=(e,a)=>`./media/voice/${e}.${a}.m4a`,sr={text:"I don\u2019t know why people expect art to make sense when they accept the fact that life doesn\u2019t make sense.",author:"David Lynch",work:"interview with Kristine McKenna, Los Angeles Times, 20 August 1989",source:"https://www.latimes.com/archives/la-xpm-1989-08-20-ca-1327-story.html"};var lr=[{id:"select",name:"Select",line:"A soft glass touch for choosing.",file:"./media/sfx/select.wav"},{id:"open",name:"Open",line:"A breath of air as a panel opens.",file:"./media/sfx/open.wav"},{id:"close",name:"Close",line:"The same air, settling.",file:"./media/sfx/close.wav"},{id:"confirm",name:"Confirm",line:"Two quiet touches: done.",file:"./media/sfx/confirm.wav"},{id:"detent",name:"Detent",line:"A precise tick for wheels and steps.",file:"./media/sfx/detent.wav"},{id:"type",name:"Type",line:"A dry, very quiet key.",file:"./media/sfx/type.wav"},{id:"level",name:"Level",line:"A small touch as a level moves.",file:"./media/sfx/level.wav"}],zi={promise:"A new drop every two weeks.",open:!1,price:null,interval:null,quota:null,plans:[{id:"ready",name:"Ready-made",line:"Choose a curated piece and use it as it is.",points:["One finished piece","Its source and integration notes"]},{id:"studio",name:"Studio",line:"Customise a piece and export your own version.",points:["Light, material and movement controls","Saved designs"]},{id:"member",name:"Membership",line:"Follow the collection as it grows.",points:["A new drop every two weeks"]}]};var Oi=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),gt={peak:.0045,curve:1.8,floor:.12,cutoff:320,cutoffSpan:120,highpass:70,q:.5,attack:.12,release:.07,sweep:.35,still:.09,seconds:7},ji={quiet:{peak:gt.peak,curve:gt.curve},A:{peak:.0135,curve:1.4},B:{peak:.024,curve:1.4}},Ii="B";function Us(e,{talking:a=!1,loudness:o=ji[Ii]}={}){if(a)return 0;let t=Oi(e);return t<=gt.floor?0:o.peak*Math.pow((t-gt.floor)/(1-gt.floor),o.curve)}function Ks(e,a){let o=Math.round(e.sampleRate*a),t=e.createBuffer(1,o,e.sampleRate),s=t.getChannelData(0),m=0,i=0;for(let p=0;p<o;p++)m=.995*m+.02*(Math.random()*2-1),s[p]=m,i=Math.max(i,Math.abs(m));let u=Math.round(e.sampleRate*.2);for(let p=0;p<u;p++){let h=p/u;s[p]=s[p]*h+s[o-u+p]*(1-h)}for(let p=0;p<o;p++)s[p]/=i||1;return t}function Ri(e,a,{talking:o=()=>!1,loudness:t=ji[Ii]}={}){let s=e.createBufferSource();s.buffer=Ks(e,gt.seconds),s.loop=!0;let m=e.createBiquadFilter(),i=e.createBiquadFilter(),u=e.createBiquadFilter(),p=e.createGain();m.type="highpass",m.frequency.value=gt.highpass,m.Q.value=gt.q;for(let f of[i,u])f.type="lowpass",f.frequency.value=gt.cutoff,f.Q.value=gt.q;p.gain.value=0,s.connect(m).connect(i).connect(u).connect(p).connect(a),s.start();let h=0,l=-1;return{get level(){return h},update(f,G=e.currentTime){let H=Us(f,{talking:o(),loudness:t});if(p.gain.setTargetAtTime(H,G,H>h?gt.attack:gt.release),h=H,G-l>.1){l=G;let n=gt.cutoff+gt.cutoffSpan*Oi(f);i.frequency.setTargetAtTime(n,G,gt.sweep),u.frequency.setTargetAtTime(n,G,gt.sweep)}},still(f=e.currentTime){h=0,p.gain.setTargetAtTime(0,f,gt.release)}}}var Pi=e=>Math.max(0,Math.min(1,Number.isFinite(e)?e:0));function Pr(e,a=.008,o=.16){let t=0;for(let s of e)t+=s*s;return Pi((Math.sqrt(t/Math.max(1,e.length))-a)/o)}function Dr(e,a,o,t=.05,s=.18){let m=e+(a-e)*(1-Math.exp(-Math.max(0,o)/(a>e?t:s)));return m<.001?0:Pi(m)}function Di({getContext:e,onState:a=()=>{},onLevel:o=()=>{},mediaDevices:t=globalThis.navigator?.mediaDevices,lifecycle:s=globalThis.document,page:m=globalThis.window,now:i=()=>performance.now()}={}){let u={status:"off",error:"",level:0},p=0,h=null,l=null,f=null,G=null,H=null,n=i(),O=0,A=!1,F=()=>a({...u});function E(){for(let S of h?.getTracks()??[])S.onended=null,S.stop();h=null,l?.disconnect(),f?.disconnect(),G?.disconnect(),l=f=G=H=null,u.level=0,o(0)}function C(){p++,E(),u.status="off",u.error="",F()}async function W(){if(A)return!1;if(u.status==="listening")return!0;if(u.status==="requesting")return!1;let S=++p;u.status="requesting",u.error="",F();let y=null;try{if(!t?.getUserMedia)throw Object.assign(new Error,{name:"UnsupportedError"});let j=e();if(!j)throw Object.assign(new Error,{name:"UnsupportedError"});let Z=Promise.resolve(j.resume()).then(()=>null,U=>U);if(y=await t.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!1},video:!1}),A||S!==p)return y.getTracks().forEach(U=>U.stop()),!1;h=y;let B=await Z;if(A||S!==p)return!1;if(B)throw B;return l=j.createMediaStreamSource(h),f=j.createBiquadFilter(),f.type="highpass",f.frequency.value=90,G=j.createAnalyser(),G.fftSize=1024,G.smoothingTimeConstant=0,l.connect(f),f.connect(G),H=new Float32Array(G.fftSize),n=i(),h.getTracks().forEach(U=>{U.onended=C}),u.status="listening",F(),!0}catch(j){return S!==p||A||(E(),u.status="error",u.error=j.name==="NotAllowedError"||j.name==="SecurityError"?"Allow microphone access in your browser, then try again.":j.name==="NotFoundError"?"No microphone found. Connect one and try again.":j.name==="UnsupportedError"?"Microphone input needs a supported browser on HTTPS or localhost.":"The microphone is unavailable. Close other microphone apps and try again.",F()),!1}}function I(){if(!G||u.status!=="listening")return 0;let S=i(),y=Math.min(.1,Math.max(0,(S-n)/1e3));n=S,G.getFloatTimeDomainData(H);let j=Pr(H,.006,.1);return u.level=Dr(u.level,j,y,.045,.28),S-O>80&&(O=S,o(u.level)),u.level}let V=()=>{s.hidden&&C()};return s?.addEventListener("visibilitychange",V),m?.addEventListener("pagehide",C),{state:u,start:W,stop:C,sample:I,toggle(){return u.status==="requesting"||u.status==="listening"?C():W()},dispose(){A=!0,C(),s?.removeEventListener("visibilitychange",V),m?.removeEventListener("pagehide",C)}}}var Ga=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),Ni={voice:za[0].id};function Fi(){let e=$i(Ni),a=e.prefs;za.some(N=>N.id===a.voice)||(a.voice=Ni.voice);let o=new Set,t=null,s=null,m=null,i=null,u=null,p=null,h=new Audio;h.preload="auto",h.crossOrigin="anonymous",h.setAttribute("playsinline","");let l=null,f={clip:null,voice:null,status:"idle",error:null,energy:0,journey:new Set},G=new Map,H=new Map,n=N=>{if(!H.has(N)){let se=fetch(N).then(fe=>{if(!fe.ok)throw new Error(fe.status);return fe.blob()}).then(fe=>URL.createObjectURL(fe));H.set(N,se),se.catch(()=>H.delete(N))}return H.get(N)},O={},A=()=>o.forEach(N=>N(Et));function F(){if(t)return t;let N=window.AudioContext||window.webkitAudioContext;if(!N)return null;t=new N,s=t.createGain(),s.connect(t.destination),m=t.createGain();let se=t.createDynamicsCompressor();se.threshold.value=-30,se.knee.value=10,se.ratio.value=4,se.attack.value=.003,se.release.value=.25,m.connect(se).connect(s),i=t.createGain(),i.connect(s),u=t.createAnalyser(),u.fftSize=1024,u.smoothingTimeConstant=0,u.connect(m),p=new Float32Array(u.fftSize);try{l=t.createMediaElementSource(h),l.connect(u)}catch{l=null}return E(),t}function E(){if(!t)return;let N=t.currentTime;s.gain.setTargetAtTime(a.master||f.kind==="audition"?a.volume??.8:0,N,.02),m.gain.setTargetAtTime(a.gain,N,.02),i.gain.setTargetAtTime(a.sfx?a.sfxGain:0,N,.02)}let C=()=>{let N=F();N&&N.state!=="running"&&N.state!=="closed"&&N.resume().catch(()=>{}),xt(),e.voice&&!L&&ae()};for(let N of["pointerdown","keydown","touchend"])addEventListener(N,C,{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden&&(be.on||!h.paused||f.status==="loading")?(le(),f.hiddenPause=!0):f.hiddenPause&&(f.hiddenPause=!1)}),h.addEventListener("ended",()=>{f.status="ended",A()}),h.addEventListener("pause",()=>{f.status==="playing"&&(f.status="paused",A())}),h.addEventListener("playing",()=>{f.status="playing",f.error=null,A()}),h.addEventListener("error",()=>{f.clip&&(f.status="error",f.error="The recording could not be loaded.",A())}),h.addEventListener("loadedmetadata",A);let W=null,I=null;function V(){oe.cancel(),W?.(),I&&(h.removeEventListener("ended",I),I=null)}function S(){return V(),oe.begin()}let y=N=>N==="audition"||e.voice,j=(N,{voice:se=a.voice,from:fe=0,kind:ve="guide"}={})=>U(`${N}.${se}`,Lo(N,se),{from:fe,kind:ve,voice:se}),Z=(N,se,{from:fe=0}={})=>U(N,se,{from:fe,kind:"audition"}),B=0;async function U(N,se,{from:fe=0,kind:ve="guide",voice:we=null,token:Ie=S(),onend:Be}={}){let Oe=B;if(!oe.live(Ie)||!y(ve))return!1;Le(),h.pause(),f.clip=N,f.voice=we,f.kind=ve,f.url=se,f.loaded=!1,f.status="loading",f.error=null,f.env=null,C(),E(),A();let De;try{De=await n(se)}catch{De=se}if(!oe.live(Ie)||Oe!==B||!y(ve)||(h.src!==De&&(h.src=De),f.loaded=!0,Ce(se,200).then(He=>{oe.live(Ie)&&(f.env=He)}).catch(()=>{}),fe&&h.readyState<1&&(!await new Promise(vt=>{let $t=Vt=>{h.removeEventListener("loadedmetadata",mt),h.removeEventListener("error",nt),W=null,vt(Vt)},mt=()=>$t(!0),nt=()=>$t(!1);W=()=>$t(!1),h.addEventListener("loadedmetadata",mt),h.addEventListener("error",nt)})||!oe.live(Ie)))||!oe.live(Ie)||!y(ve)||(h.currentTime=fe||0,Be&&(I=()=>{I=null,oe.live(Ie)&&Be()},h.addEventListener("ended",I,{once:!0})),A(),!oe.live(Ie)||Oe!==B||!y(ve)))return!1;try{return await h.play(),oe.live(Ie)&&y(ve)}catch{return oe.live(Ie)&&(f.status="blocked",f.error="Playback was blocked. Press play to start it.",A()),!1}}function le(){V(),Le(),h.pause(),f.status="paused",A()}async function ge(){return!f.url||f.clip==="speech"||!y(f.kind)?!1:U(f.clip,f.url,{from:f.loaded?h.currentTime:0,kind:f.kind,voice:f.voice})}let me=typeof speechSynthesis<"u"?speechSynthesis:null,pe=0,be={on:!1};function Le(){be.u=null,me&&be.on&&(be.on=!1,me.cancel())}let Re={samantha:[/ava.*premium/i,/zoe.*premium/i,/samantha.*(enhanced|premium)/i,/(aria|jenny|emma|ava).*natural/i,/natural.*(female|aria|jenny)/i,/google us english/i,/google uk english female/i,/^(ava|zoe|allison|susan)\b/i,/^samantha/i],daniel:[/(evan|nathan|tom).*premium/i,/daniel.*(enhanced|premium)/i,/(guy|ryan|andrew|brian|christopher).*natural/i,/natural.*male/i,/google uk english male/i,/^(evan|nathan|tom|aaron)\b/i,/^daniel/i]},g=[],v=()=>{g=me?.getVoices()??[]};me&&(v(),me.addEventListener?.("voiceschanged",v));let D=[/(paulina|monica|m[oó]nica|marisol|isabela).*(premium|enhanced)/i,/(elvira|dalia|helena|ximena|paloma).*natural/i,/natural.*(spanish|espa)/i,/google espa[nñ]ol/i,/^(paulina|monica|m[oó]nica|marisol|jorge|diego)\b/i];function q(N){if(g.length||v(),N==="es"){let fe=g.filter(ve=>/^es[-_]/i.test(ve.lang));if(fe.length){for(let ve of D){let we=fe.find(Ie=>ve.test(Ie.name));if(we)return we}return fe.find(ve=>ve.localService===!1)??fe[0]}}let se=g.filter(fe=>/^en[-_]/i.test(fe.lang));for(let fe of Re[sa(a.voice).gender==="male"?"daniel":"samantha"]){let ve=se.find(we=>fe.test(we.name));if(ve)return ve}return se.find(fe=>fe.localService===!1)??se[0]}let L=null,R="./media/voice/lines/",ae=()=>L??=fetch(`${R}manifest.json`).then(N=>N.ok?N.json():null,()=>(L=null,null)).catch(()=>null),oe=Mi();function ue(N,{id:se,onend:fe,lang:ve}={}){if(!N||!a.master||!a.guide)return fe?.(),!1;let we=S();if(se){let Ie=sa(a.voice).lines??a.voice;return Le(),h.pause(),f.kind="guide",f.url=null,f.clip=`line:${se}`,f.status="loading",A(),ae().then(async Be=>{let Oe=Be?.lines?.[se]?.text===N?Be.lines[se].files?.[Ie]:null;if(!oe.live(we))return;if(!Oe){ie(N,{onend:fe,lang:ve,token:we});return}let De=R+Oe;try{await n(De)}catch{oe.live(we)&&ie(N,{onend:fe,lang:ve,token:we});return}oe.live(we)&&U(`line:${se}.${Ie}`,De,{kind:"guide",voice:Ie,token:we,onend:fe})}),!0}return ie(N,{onend:fe,lang:ve,token:we})}function ie(N,{onend:se,lang:fe,token:ve}={}){if(!oe.live(ve)||!me||!N||!a.master||!a.guide)return se?.(),!1;Le(),C(),h.pause(),me.cancel();let we=q(fe),Ie=we&&(!we.localService||/premium|enhanced|natural/i.test(we.name)),Be=N.match(/[^.!?]+[.!?]*\s*/g)?.map(Oe=>Oe.trim()).filter(Boolean)??[N];return be.u=ve,be.on=!0,f.kind="guide",f.url=null,f.clip="speech",f.status="playing",A(),Be.forEach((Oe,De)=>{let He=new SpeechSynthesisUtterance(Oe);we&&(He.voice=we,He.lang=we.lang),He.rate=Ie?1:.94,He.pitch=1,He.volume=a.volume??.8,He.onboundary=()=>{pe=1},He.onstart=()=>{pe=1},De===Be.length-1&&(He.onend=He.onerror=()=>{oe.live(ve)&&be.u===ve&&(be.on=!1,f.status="stopped",A(),se?.())}),me.speak(He)}),!0}let de=()=>q()?.name??null;function ye(){B++,V(),Le(),h.pause(),f.status=f.clip?"stopped":"idle",A()}function Te(N){h.duration&&(h.currentTime=Ga(N)*h.duration,A())}let Ee=performance.now();function $e(){let N=performance.now(),se=Math.min(.1,(N-Ee)/1e3);Ee=N;let fe=0;return be.on&&e.voice?(pe=Math.max(0,pe-se*3.2),fe=Ga(.35+.45*pe+.15*Math.sin(N/90))):!l&&f.env&&!h.paused&&(a.master||f.kind==="audition")&&h.duration?fe=Ga(f.env.bins[Math.min(f.env.bins.length-1,Math.floor(h.currentTime/h.duration*f.env.bins.length))]*1.1):u&&!h.paused&&(a.master||f.kind==="audition")&&(u.getFloatTimeDomainData(p),fe=Pr(p)),f.energy=Dr(f.energy,fe,se),f.energy}let Se=(N,se=a.voice,fe=72)=>Ce(Lo(N,se),fe);async function Ce(N,se=72){let fe=`${N}|${se}`;if(G.has(fe))return G.get(fe);let ve=(async()=>{let we;try{we=await n(N)}catch{we=N}let Ie=await(await fetch(we)).arrayBuffer(),Be=window.OfflineAudioContext||window.webkitOfflineAudioContext,Oe=await new Be(1,44100,44100).decodeAudioData(Ie),De=Oe.getChannelData(0),He=Math.max(1,Math.floor(De.length/se)),vt=[],$t=0;for(let mt=0;mt<se;mt++){let nt=0;for(let aa=mt*He;aa<(mt+1)*He;aa++)nt+=De[aa]*De[aa];let Vt=Math.sqrt(nt/He);vt.push(Vt),$t=Math.max($t,Vt)}return{bins:vt.map(mt=>mt/($t||1)),duration:Oe.duration}})();return G.set(fe,ve),ve.catch(()=>G.delete(fe)),ve}let ze={press:"select",release:"select",volume:"level",case:"open"},xe={select:90,type:70,detent:50,level:110,open:220,close:220,confirm:400},ee={select:.3,type:.2,detent:.28,level:.22,open:.28,close:.26,confirm:.32},ce={},he=0;function Pe(N){ce[N]||!t||(ce[N]=fetch(`./media/sfx/${N}.wav`).then(se=>se.arrayBuffer()).then(se=>t.decodeAudioData(se)).then(se=>ce[N]=se).catch(()=>ce[N]=null))}function dt(N,se=.5){if(N=ze[N]||N,!a.master||!a.sfx)return;let fe=F();if(!fe||fe.state!=="running")return;let ve=performance.now();if(ve-(O[N]??0)<(xe[N]??80)||he>3)return;O[N]=ve;let we=ce[N];if(!we||we instanceof Promise){Pe(N);return}let Ie=fe.createBufferSource(),Be=fe.createGain();Ie.buffer=we,Be.gain.value=(ee[N]??.6)*(N==="level"?.6+.4*Ga(se):1),N==="level"&&(Ie.playbackRate.value=.85+.3*Ga(se)),Ie.connect(Be),Be.connect(i),he++,Ie.onended=()=>{he--,Be.disconnect()},Ie.start()}let at=null;function Tt(N=0){if(!a.master||!a.sfx)return;let se=F();if(!se||se.state!=="running")return;if(!at){let we=se.createBufferSource(),Ie=se.sampleRate*2,Be=se.createBuffer(1,Ie,se.sampleRate),Oe=Be.getChannelData(0);for(let vt=0;vt<Ie;vt++)Oe[vt]=Math.random()*2-1;we.buffer=Be,we.loop=!0;let De=se.createBiquadFilter(),He=se.createGain();De.type="lowpass",De.Q.value=.4,De.frequency.value=900,He.gain.value=0,we.connect(De).connect(He).connect(i),we.start(),at={f:De,g:He,stop:0}}let fe=Ga(N),ve=se.currentTime;at.g.gain.setTargetAtTime(fe*.035,ve,.03),at.f.frequency.setTargetAtTime(700+600*fe,ve,.06),clearTimeout(at.stop),at.stop=setTimeout(()=>at.g.gain.setTargetAtTime(0,se.currentTime,.04),70)}let Ke=null,bt=0;function Ct(N=0,se="air"){if(!a.master||!a.sfx||!t||t.state!=="running"){Ke&&Ke.still();return}Ke??=Ri(t,i,{talking:()=>!h.paused||be.on}),Ke.update(N),clearTimeout(bt),bt=setTimeout(()=>Ke?.still(),gt.still*1e3)}let xt=()=>{if(t)for(let N of Object.keys(xe))Pe(N)};e.on(()=>{(!a.master||!a.sfx)&&(clearTimeout(bt),Ke?.still()),!e.voice&&f.kind==="guide"&&(V(),Le(),h.pause(),f.clip&&(f.status="stopped"),pe=0),E(),A()});let Et={prefs:a,state:f,el:h,get ready(){return!!t},get position(){return h.duration?h.currentTime/h.duration:0},get time(){return h.currentTime||0},get duration(){return h.duration||0},get playing(){return be.on||!h.paused&&!h.ended},store:e,get voiceOn(){return e.voice},get soundsOn(){return e.sounds},set(N){e.set(N),C()},toggle(N,se){e.toggle(N,se),C()},play:j,playUrl:Z,say:ue,voiceName:de,pause:le,resume:ge,stop:ye,seek:Te,energy:$e,peaks:Se,peaksUrl:Ce,sfx:dt,friction:Tt,motion:Ct,unlock:C,get live(){return!!t&&t.state==="running"},microphone(N){return Di({...N,getContext:F})},once(N){return f.journey.has(N)||!a.master||!a.guide?Promise.resolve(!1):(f.journey.add(N),j(N).then(se=>(se||f.journey.delete(N),se)))},on(N){return o.add(N),()=>o.delete(N)}};return Et}var To=Ht.filter(e=>e.published!==!1),_i=e=>e.id==="orb"||e.code==="kit",Xs=" Everything is free during early access, and Studio is open to try.",Js={"reply.missed":"I didn\u2019t catch that. Tap me and try again, or type.","reply.intro":`Hello, I\u2019m the Light Orb, your guide here. Tap me and speak, or type: ask me for recommendations, materials and textures, or say Products, Templates, Studio or Sound and I\u2019ll take you there.${Xs}`,"reply.greet":"Hi, I\u2019m the Light Orb. Tap me whenever you want to talk.","reply.help":"Ask me which Orb suits your project, about its materials and textures, or how to get the free code. Or say Products, Templates, Studio or Sound and I\u2019ll take you there.","reply.thanks":"With pleasure. I\u2019m right here when you need me.","reply.who":"I\u2019m the Light Orb, the guide of this place. I can recommend a piece or a texture, answer your questions, and take you anywhere on the site.","reply.back":"Going back.","reply.unknown":"I\u2019m still learning words. Ask me for a recommendation, or say Products, Templates, Studio or Sound.","reply.mic":"The microphone is off. You can type to me instead."},Qs=" Todo es gratis durante el acceso anticipado, y Studio est\xE1 abierto para probarlo.",Zs={"reply.missed":"No te he entendido. T\xF3came e int\xE9ntalo otra vez, o escr\xEDbeme.","reply.intro":`Hola, soy la Light Orb, tu gu\xEDa aqu\xED. T\xF3came y habla, o escr\xEDbeme: p\xEDdeme recomendaciones, materiales y texturas, o di Productos, Plantillas, Studio o Sonido y te llevo.${Qs}`,"reply.greet":"Hola, soy la Light Orb. T\xF3came cuando quieras hablar.","reply.help":"Preg\xFAntame qu\xE9 Orb encaja con tu proyecto, por sus materiales y texturas, o c\xF3mo conseguir el c\xF3digo gratis. O di Productos, Plantillas, Studio o Sonido y te llevo.","reply.thanks":"Con gusto. Aqu\xED estoy cuando me necesites.","reply.who":"Soy la Light Orb, la gu\xEDa de este lugar. Te recomiendo piezas y texturas, respondo tus preguntas y te llevo a cualquier parte de la web.","reply.back":"Volvemos.","reply.unknown":"A\xFAn estoy aprendiendo palabras. P\xEDdeme una recomendaci\xF3n, o di Productos, Plantillas, Studio o Sonido.","reply.mic":"El micr\xF3fono est\xE1 desactivado. Puedes escribirme."},Ua=(e,a="en")=>a==="es"?{id:null,text:Zs[e],lang:"es"}:{id:e,text:Js[e],lang:"en"},Bi={profile:"your profile",downloads:"your downloads",saved:"what you have saved",designs:"the designs you made in Studio"};function el(e,a){if(e==="products"&&a){let o=To.find(t=>t.id===a);if(o)return{id:`present.product.${o.id}`,text:`This is ${o.name}. ${_i(o)?"Try its versions; each one is free, with its code.":"Try its versions, or shape it in Studio."}`}}if(e==="templates"&&a){let o=wt.find(t=>t.id===a);if(o)return{id:`present.template.${o.id}`,text:`You are looking at the template ${o.name}. ${o.line}`}}return e==="products"?{id:"present.products",text:`Products: ${To.length} pieces, ready to use. Choose one to see it alive.`}:e==="templates"?{id:"present.templates",text:wt.length===1?"Templates: a complete composition of light and glass to start from. Open it to see it move.":`Templates: ${wt.length} complete compositions of light and glass to start from. Open one to see it move.`}:e==="studio"?{id:"present.studio",text:`This is Studio${", free while we build it"}. Drag me to turn me, move my light with the light tool, and shape my glass with the controls. Save your design when it feels right.`}:e==="sound"?{id:"present.sound",text:"This is Sound: choose the voice I speak with, and listen to the small sounds of the glass."}:e==="membership"?{id:"present.membership",text:"This is Membership. Everything is free for now; leave your email to hear first when plans open."}:e==="account"?a&&Bi[a]?{id:`present.account.${a}`,text:`This is your account, showing ${Bi[a]}.`}:{id:"present.account",text:"This is your account."}:e==="privacy"?{id:"present.privacy",text:"This is the privacy page: what the site keeps, and what you can ask for."}:e==="terms"?{id:"present.terms",text:"These are the terms of use of the site."}:e==="licence"?{id:"present.licence",text:"This is the licence: what you can do with the free Orb and with the pieces."}:e==="signin"?{id:"present.signin",text:"Use the email you joined with to link this device to your early access."}:e==="signup"?{id:"present.signup",text:"Join early access with your email. Everything is free while we build it, and you will hear first when new pieces open."}:{id:"present.home",text:"This is The Light Orb: objects of light and glass. Below, choose where to begin: Products, Templates, Studio or Sound. Tap me again to stop, or ask me anything."}}var Hi={products:"Productos: objetos de luz y vidrio. Elige uno para verlo vivo.",templates:"Plantillas: composiciones completas para empezar.",studio:"Esto es Studio, gratis mientras lo construimos. Da forma a la luz y guarda tu dise\xF1o.",sound:"Esto es Sonido: las voces y los sonidos del vidrio.",membership:"Esto es Membres\xEDa. Ahora todo es gratis; deja tu email y sabr\xE1s primero cu\xE1ndo abren los planes.",home:"Bienvenida a The Light Orb. Soy tu gu\xEDa: t\xF3came para hablar."};function Wi(e,a,o){let t=el(a,o);if(e!=="es")return{...t,lang:"en"};if(a==="products"&&o){let s=To.find(m=>m.id===o);if(s)return{id:null,lang:"es",text:`Esto es ${s.name}. Prueba sus versiones${_i(s)?"; cada una es gratis, con su c\xF3digo":", o dale forma en Studio"}.`}}return Hi[a]&&!o?{id:null,lang:"es",text:Hi[a]}:{...t,lang:"en"}}var Yi=e=>({id:`already.${e.id}`,text:`We are already here. ${e.text}`}),Vi=e=>({id:`piece.${e.id}`,text:`Here is ${e.name}. ${e.line}`}),Gi=e=>({id:`open.${e.id}`,text:`Opening ${e.name}.`}),Ui=()=>({id:"piece.orb",text:`Here is the Orb. ${Ht[0].line}`});var Ki="lightorb:theme",tl={light:{pearl:[243,243,241],top:[250,251,251],low:[214,217,220],sky:"255,255,255",skyA:.62,mass:"196,201,206",massA:.35,glow:"255,255,255",glowA:.7,shadow:"70,72,78",orbBackground:"#f3f3f1",orb:{dark:!1,world:"gallery",envBoost:1},cases:{bg:["#f3f3f1","#f1f1ef","#e9eae8"],room:"#6c6f6c",floor:"#eeefed",hemi:["#ffffff","#dcdedc",.6],env:1.35}},dark:{pearl:[7,7,8],top:[11,11,12],low:[2,2,3],sky:"232,226,212",skyA:.03,mass:"0,0,0",massA:.6,glow:"236,230,216",glowA:.07,shadow:"0,0,0",orbBackground:"#070708",orb:{dark:!0,world:"smoke",envBoost:1.15},cases:{bg:["#0e0e0f","#09090a","#040405"],room:"#141415",floor:"#2a2b2b",hemi:["#ffffff","#202222",.35],env:1.7}}},al=()=>{try{return localStorage.getItem(Ki)}catch{return null}},Nr=e=>e==="light"||e==="dark";function rl(){let e=new URLSearchParams(location.search).get("theme");if(Nr(e))return e;let a=al();return Nr(a)?a:"light"}var Ka=()=>document.documentElement.dataset.theme==="dark"?"dark":"light",Kt=()=>tl[Ka()];function Xi(e){document.documentElement.dataset.theme=e,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",e==="dark"?"#141515":"#F3F3F1")}function Ji(e,{remember:a=!0}={}){if(Nr(e)){if(Xi(e),a)try{localStorage.setItem(Ki,e)}catch{}document.dispatchEvent(new CustomEvent("lightorb:theme",{detail:{theme:e}}))}}typeof document<"u"&&Xi(Nr(document.documentElement.dataset.theme)?Ka():rl());var Xa=(e,a,o)=>e+(a-e)*o,Ja=e=>{let a=parseInt(String(e).replace("#",""),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]},Yd=Ja("#f3d8c5"),ol={fill:.08,lobe:.2,wall:.55,core:.034},_t=e=>structuredClone(e??Ir);function Fr(e,a,o={}){let t=Kt().orb,s=o.dark===!0,{envBoost:m=s?1:t.envBoost,exposure:i=0,left:u=.65,right:p=.55}=o,h=s||t.dark,l=a.shell,f=a.light,G=a.interior;e.setOptics({...ol,lobe:Xa(.1,.3,f.spread),core:Xa(.026,.044,f.spread)}),e.setInterior({kind:G.kind,amount:G.amount,size:G.size,motion:G.motion,fill:G.fill,colour:G.colour}),e.setElastic(l.elastic??0);let H=Ja(l.tint);e.setMaterial({roughness:l.roughness,thickness:Xa(.3,1.4,l.thickness),ior:l.ior,envMapIntensity:(h?1.9:2.1)*m*2**(i*.5),tint:H,tintDistance:l.tintAmount>.001?Xa(8,.4,l.tintAmount):0}),e.setNeutral?.(!0);let n=Ja(f.colour),O=Math.max(...n);e.setLight({tint:n.map(F=>F/Math.max(.05,O)*1.05),spread:Xa(.7,1.6,f.spread)}),e.setBloom(Xa(.004,.08,f.glow)),e.setFocus({x:f.x,y:f.y,z:f.z}),e.setTone(h?"dark":"light"),e.setVolumeWorld(0),e.lockFeather([.5,.515]);let A=F=>(Math.round(F*10)/10).toFixed(1);return e.setWorld(s?`chamber:${A(u)}:${A(p)}`:t.world),e.setEnvironmentLevel?.(o.envLevel??1),{emission:f.strength/.72*2**(i*.35)*(o.keyLevel??1),voice:a.voice}}var Ot=(e,a)=>a.split(".").reduce((o,t)=>o?.[t],e),dr=e=>Math.min(1,Math.max(0,e));function Qi(e={}){let a=e.material??{},o=e.interior??{},t=e.light??{},s=_t(fa("original").config);if(a.tint){s.shell.tint=a.tint;let[m,i,u]=Ja(a.tint),p=Math.max(m,i,u)-Math.min(m,i,u);p>.04&&(s.shell.tintAmount=Math.min(.97,.8+p*.2))}if(s.shell.ior=Math.min(2,Math.max(1,1+.58*(a.refraction??1))),s.shell.roughness=Math.min(.5,Math.max(0,.01+(a.frost??0)*.45)),s.interior.amount=dr(s.interior.amount*(1+(o.amount??0))),s.interior.size=dr(s.interior.size*(o.size??1)),s.interior.motion=dr(s.interior.motion*(o.speed??1)),s.light.strength=dr(s.light.strength*(o.glow??1)),s.light.glow=dr(s.light.glow*(t.key??1)),t.colour&&(s.light.colour=t.colour),a.tint){let m=Ja(a.tint),i=Ja(s.light.colour);Math.max(...m)-Math.min(...m)>.04&&(s.light.colour="#"+i.map((p,h)=>Math.round((p*.4+m[h]*.6)*255).toString(16).padStart(2,"0")).join(""))}return s}var Zi=`
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
`;var en=`
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
`;var tn=`
:root{
  --ix-ack:90ms; --ix-settle:240ms; --ix-slide:280ms; --ix-press:120ms; --ix-relax:340ms;
  --ix-out:cubic-bezier(.2,.8,.2,1); --ix-in-out:cubic-bezier(.45,0,.2,1);
}
/* \u2500\u2500 Sliding selection: one committed glass under the active option, one thin preview
   that travels to the option under the pointer or keyboard focus. \u2500\u2500 */
.segbar.ix-seg{position:relative;isolation:isolate}
.segbar.ix-seg>.pill{position:relative;z-index:2;background:none!important;box-shadow:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;
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
`;var qo=matchMedia("(prefers-reduced-motion: reduce)"),il={gel:"gel",lens:"glass",type:"type",mag:"control"},nl={gel:7,glass:16,chrome:18,type:12,control:20,base:13},sl=e=>il[e.dataset.objCard]??(e.querySelector(".has-kit")?"control":e.querySelector("[data-sphere]")?/chrome|liquid|mirror/i.test(e.querySelector("[data-sphere]").dataset.sphere)?"chrome":"glass":"base");function an(e=document){let a=document.createElement("style");a.dataset.ix="",a.textContent=tn,document.head.append(a);let o=new Map,t=new Set,s=0,m=0,i=()=>{s||(m=performance.now(),s=requestAnimationFrame(V))},u=420,p=2*Math.sqrt(u),h=(g,v)=>{let D=u*(g.t-g.x)-p*g.v;return g.v+=D*v,g.x+=g.v*v,Math.abs(g.t-g.x)<.2&&Math.abs(g.v)<4&&(g.x=g.t,g.v=0),g.x!==g.t||g.v!==0},l=g=>({x:g,v:0,t:g}),f=g=>[...g.children].filter(v=>v.classList?.contains("pill")),G=g=>["aria-checked","aria-pressed","aria-selected"].some(v=>g.getAttribute(v)==="true")||g.classList.contains("on"),H=g=>({x:g.offsetLeft,w:g.offsetWidth,y:g.offsetTop,h:g.offsetHeight});function n(g,v,D){let q=Math.min(.07,Math.abs(v.x.v)/9e3);g.style.transform=`translate3d(${v.x.x}px,${D.y}px,0) scaleY(${1-q})`,g.style.width=`${Math.max(8,v.w.x)}px`,g.style.height=`${D.h}px`}function O(g){if(o.has(g)||!f(g).length)return;let v=document.createElement("span"),D=document.createElement("span");v.className="ix-sel",D.className="ix-hov",v.setAttribute("aria-hidden","true"),D.setAttribute("aria-hidden","true"),g.prepend(v,D),g.classList.add("ix-seg");let q={bar:g,sel:v,hov:D,S:{x:l(0),w:l(0)},H:{x:l(0),w:l(0)},cand:null,act:null,box:{y:0,h:0},hbox:{y:0,h:0},shown:!1};q.mo=new MutationObserver(()=>A(q,!0)),q.mo.observe(g,{attributes:!0,subtree:!0,attributeFilter:["aria-checked","aria-pressed","aria-selected"]}),q.ro=new ResizeObserver(()=>A(q,!1)),q.ro.observe(g),o.set(g,q),A(q,!1)}function A(g,v){let D=f(g.bar).find(G)??null;if(g.act=D,g.sel.style.opacity=D?"":"0",!D)return;let q=H(D);g.box=q,g.S.x.t=q.x,g.S.w.t=q.w,!v||qo.matches||!g.shown?(g.S.x.x=q.x,g.S.w.x=q.w,g.S.x.v=g.S.w.v=0,n(g.sel,g.S,q),g.shown=!0):(t.add(g),i()),g.cand&&F(g,g.cand,!1)}function F(g,v,D){if(g.cand?.classList.remove("ix-cand"),g.cand=v,!v){g.hov.classList.remove("on");return}v.classList.add("ix-cand");let q=H(v);g.hbox=q,g.H.x.t=q.x,g.H.w.t=q.w,D||qo.matches?(g.H.x.x=q.x,g.H.w.x=q.w,g.H.x.v=g.H.w.v=0,n(g.hov,g.H,q)):(t.add(g),i()),g.hov.classList.toggle("on",v!==g.act)}let E=new Map;function C(g,v){let D=E.get(g);return D||(D={x:.5,y:.4,on:0,p:0,tx:.5,ty:.4,ton:0,tp:0,follow:v},E.set(g,D)),D.rect=g.getBoundingClientRect(),D}function W(g,v,D){g.rect||(g.rect=D.getBoundingClientRect()),g.still=!1,g.tx=Math.min(1,Math.max(0,(v.clientX-g.rect.left)/g.rect.width)),g.ty=Math.min(1,Math.max(0,(v.clientY-g.rect.top)/g.rect.height))}function I(g){if(g.querySelector(":scope>.ix-sheen"))return;let v=document.createElement("span");v.className="ix-sheen",v.setAttribute("aria-hidden","true"),g.append(v),g.classList.add("ix-card"),g.dataset.ixMat=sl(g)}function V(g){let v=Math.min(.05,(g-m)/1e3);m=g;for(let q of t){let L=h(q.S.x,v)|h(q.S.w,v),R=h(q.H.x,v)|h(q.H.w,v);n(q.sel,q.S,q.box),n(q.hov,q.H,q.hbox),!L&&!R&&t.delete(q)}let D=!1;for(let[q,L]of E){if(L.still)continue;let R=qo.matches?1:1-Math.exp(-L.follow*v),ae=1-Math.exp(-(L.ton>L.on?14:7)*v);L.x+=(L.tx-L.x)*R,L.y+=(L.ty-L.y)*R,L.on+=(L.ton-L.on)*ae,L.p+=(L.tp-L.p)*(1-Math.exp(-(L.tp>L.p?18:5)*v));let oe=Math.abs(L.tx-L.x)<.002&&Math.abs(L.ty-L.y)<.002&&Math.abs(L.ton-L.on)<.01&&Math.abs(L.tp-L.p)<.01;oe&&(L.x=L.tx,L.y=L.ty,L.on=L.ton,L.p=L.tp),q.style.setProperty("--ix-x",L.x.toFixed(4)),q.style.setProperty("--ix-y",L.y.toFixed(4)),q.style.setProperty("--ix-on",L.on.toFixed(3)),q.style.setProperty("--ix-p",L.p.toFixed(3)),oe&&L.ton===0&&L.tp===0?(q.style.removeProperty("--ix-on"),q.style.removeProperty("--ix-p"),E.delete(q)):oe&&!q.isConnected?E.delete(q):oe?L.still=!0:D=!0}s=t.size||D?requestAnimationFrame(V):0}let S=g=>{let v=g.target.closest?.(".ix-seg>.pill");return v?[o.get(v.parentElement),v]:[null,null]},y=g=>{if(g.pointerType!=="mouse"&&g.pointerType!=="pen")return;let v=g.target.closest?.(".segbar");v&&!o.has(v)&&O(v);let[D,q]=S(g);D&&q!==D.cand&&F(D,q,!D.hov.classList.contains("on")&&D.cand==null);let L=g.target.closest?.(".file");if(L){I(L);let R=C(L,nl[L.dataset.ixMat]??13);R.ton=1,W(R,g,L),i()}},j=g=>{let v=g.relatedTarget,D=g.target.closest?.(".ix-seg");if(D&&!D.contains(v)){let L=o.get(D);F(L,null)}let q=g.target.closest?.(".file");if(q&&!q.contains(v)){let L=E.get(q);L&&(L.ton=0,L.tp=0,L.still=!1,i())}},Z=g=>{if(g.pointerType!=="mouse"&&g.pointerType!=="pen")return;let v=g.target.closest?.(".file");if(v){let q=E.get(v);q&&(W(q,g,v),i())}let D=g.target.closest?.(".ix-seg");if(D){let q=o.get(D);q.left||(q.left=D.getBoundingClientRect().left-D.scrollLeft);let L=g.clientX-q.left;q.sel.style.setProperty("--ix-sx",((L-q.S.x.x)/Math.max(1,q.S.w.x)).toFixed(3)),q.hov.style.setProperty("--ix-hx",((L-q.H.x.x)/Math.max(1,q.H.w.x)).toFixed(3)),q.sel.style.setProperty("--ix-on","1")}},B=g=>{let v=g.target.closest?.(".file");if(v&&g.target.closest(".file-v")){let D=E.get(v)??C(v,13);D.tp=1,g.pointerType==="mouse"&&(D.ton=1),W(D,g,v),i()}},U=()=>{for(let g of E.values())g.tp&&(g.tp=0,g.still=!1);E.size&&i()},le=g=>{let v=g.target.closest?.(".ix-seg");if(v&&!v.contains(g.relatedTarget)){let D=o.get(v);D&&(D.left=0,D.sel.style.removeProperty("--ix-on"))}},ge=g=>{let v=g.target.closest?.(".segbar");if(!v)return;O(v);let D=o.get(v);g.target.matches(":focus-visible")&&g.target.classList.contains("pill")&&F(D,g.target,D.cand==null)},me=g=>{let v=g.target.closest?.(".ix-seg");v&&!v.contains(g.relatedTarget)&&F(o.get(v),null)};e.addEventListener("pointerover",y,{passive:!0}),e.addEventListener("pointerout",j,{passive:!0}),e.addEventListener("pointerout",le,{passive:!0}),e.addEventListener("pointermove",Z,{passive:!0}),e.addEventListener("pointerdown",B,{passive:!0}),addEventListener("pointerup",U,{passive:!0}),addEventListener("pointercancel",U,{passive:!0}),e.addEventListener("focusin",ge),e.addEventListener("focusout",me);let pe=()=>{for(let g of E.values())g.rect=null;for(let g of o.values())g.left=0};addEventListener("scroll",pe,{passive:!0,capture:!0});let be=0,Le=()=>{be=0;for(let[g,v]of o)g.isConnected||(v.mo.disconnect(),v.ro.disconnect(),v.cand=null,t.delete(v),o.delete(g));document.querySelectorAll(".segbar:not(.ix-seg)").forEach(O),document.querySelectorAll(".file:not(.ix-card)").forEach(I)},Re=new MutationObserver(()=>{be||(be=requestAnimationFrame(Le))});return Re.observe(document.body,{childList:!0,subtree:!0}),Le(),{dispose(){Re.disconnect(),cancelAnimationFrame(s);for(let g of o.values())g.mo.disconnect(),g.ro.disconnect();o.clear(),E.clear(),t.clear(),a.remove(),e.removeEventListener("pointerover",y),e.removeEventListener("pointerout",j),e.removeEventListener("pointerout",le),e.removeEventListener("pointermove",Z),e.removeEventListener("pointerdown",B),removeEventListener("pointerup",U),removeEventListener("pointercancel",U),e.removeEventListener("focusin",ge),e.removeEventListener("focusout",me),removeEventListener("scroll",pe,!0)}}}var _="html[data-theme=dark]",rn=`
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
`;var Xt="html.ds2:not([data-theme=dark])",on=`
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

/* \u2500\u2500 product facts: a calm two-column sheet \u2500\u2500 */
.facts.ds-facts{display:grid;grid-template-columns:minmax(110px,auto) 1fr;gap:10px 18px;margin:22px 0 0;padding:18px 0 0;border-top:1px solid var(--hair);font-size:14px}
.facts.ds-facts dt{color:var(--muted)}
.facts.ds-facts dd{margin:0;color:var(--ink)}
.facts.ds-facts dd a{color:inherit}

/* \u2500\u2500 buttons (design choice): optical glass, not gloss \u2500\u2500
   A clear body that lets the page through (backdrop blur + a touch of saturation),
   a bright specular rim on the top edge, a faint refracted edge at the bottom where
   the glass is thickest, and a contact shadow that stays close. No multi-stop gradients. */
${Xt} .gb{background:linear-gradient(180deg,rgba(255,255,255,.74) 0%,rgba(248,249,248,.4) 52%,rgba(255,255,255,.62) 100%);
  -webkit-backdrop-filter:blur(14px) saturate(1.4);backdrop-filter:blur(14px) saturate(1.4);
  /* top specular line \xB7 bright base caustic \xB7 hairline edge \xB7 refracted darkening inside the thick rim \xB7 close contact shadow */
  box-shadow:inset 0 1px 0 #fff,inset 0 -1.5px 0 rgba(255,255,255,.95),inset 0 0 0 1px rgba(38,40,39,.085),inset 0 0 9px rgba(38,40,39,.075),
    0 .5px 0 rgba(38,40,39,.1),0 6px 14px -9px rgba(38,40,39,.32)}
${Xt} .gb:hover{background:linear-gradient(180deg,rgba(255,255,255,.86) 0%,rgba(250,251,250,.5) 52%,rgba(255,255,255,.72) 100%);
  box-shadow:inset 0 1px 0 #fff,inset 0 -1.5px 0 #fff,inset 0 0 0 1px rgba(38,40,39,.11),inset 0 0 10px rgba(38,40,39,.085),
    0 .5px 0 rgba(38,40,39,.12),0 10px 20px -11px rgba(38,40,39,.38)}
${Xt} .gb:active,${Xt} .gb.pressed{background:linear-gradient(180deg,rgba(242,243,242,.7),rgba(252,252,252,.6));
  box-shadow:inset 0 1.5px 3px rgba(38,40,39,.16),inset 0 0 0 1px rgba(38,40,39,.1),inset 0 0 6px rgba(38,40,39,.06),0 .5px 0 rgba(255,255,255,.9)}
${Xt} .gb.primary{color:#f6f6f4;background:linear-gradient(180deg,rgba(44,47,46,.94),rgba(24,26,25,.96));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.22),inset 0 0 0 1px rgba(255,255,255,.06),inset 0 -1px 0 rgba(0,0,0,.25),
    0 0 0 .5px rgba(0,0,0,.4),0 1px 2px rgba(0,0,0,.14),0 8px 18px -10px rgba(23,26,25,.55)}
${Xt} .gb.primary:hover{background:linear-gradient(180deg,rgba(54,57,56,.94),rgba(30,32,31,.96))}
${Xt} .gb.primary:active{background:#171918;box-shadow:inset 0 1px 3px rgba(0,0,0,.45),0 0 0 .5px rgba(0,0,0,.4)}
${Xt} .gb[disabled],${Xt} .gb[aria-disabled=true]{box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 0 0 .5px rgba(38,40,39,.1)}

/* \u2500\u2500 cards: the existing glass stays; only a measured lift on hover \u2500\u2500 */
@media (hover:hover){${Xt} .file.glass{transition:transform var(--m-move) var(--e-out)}${Xt} .file.glass:hover{transform:translateY(-2px)}}
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
`;var Oa="html.ds2:not([data-theme=dark]) body:not([data-route=studio])",nn=`
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

${Oa} .gb:not(.dark *){color:var(--ink);
  background:linear-gradient(180deg,rgba(255,255,255,.42) 0%,rgba(255,255,255,.05) 48%,rgba(255,255,255,.02) 62%,rgba(255,255,255,.3) 100%);
  -webkit-backdrop-filter:blur(2px) saturate(1.6) brightness(1.04);backdrop-filter:blur(2px) saturate(1.6) brightness(1.04);
  /* specular top \xB7 bright base caustic \xB7 hairline edge (visibility on white) \xB7 refracted band at the thick base \xB7 inner top light \xB7 contact */
  box-shadow:inset 0 1px 0 rgba(255,255,255,.98),inset 0 -1px 0 rgba(255,255,255,.9),inset 0 0 0 .5px rgba(38,40,39,.2),
    inset 0 -7px 9px -7px rgba(70,76,73,.3),inset 0 8px 10px -9px rgba(255,255,255,.95),inset 1px 0 2px -1px rgba(255,255,255,.9),inset -1px 0 2px -1px rgba(255,255,255,.9),
    0 1px 1.5px rgba(38,40,39,.12),0 7px 14px -9px rgba(38,40,39,.32)}
${Oa} .gb:not(.dark *):hover{background:linear-gradient(180deg,rgba(255,255,255,.55) 0%,rgba(255,255,255,.1) 48%,rgba(255,255,255,.05) 62%,rgba(255,255,255,.4) 100%);
  box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 #fff,inset 0 0 0 .5px rgba(38,40,39,.26),
    inset 0 -8px 10px -7px rgba(70,76,73,.34),inset 0 8px 10px -9px #fff,inset 1px 0 2px -1px #fff,inset -1px 0 2px -1px #fff,
    0 1px 1.5px rgba(38,40,39,.14),0 10px 18px -10px rgba(38,40,39,.38)}
${Oa} .gb:not(.dark *):is(:active,.pressed){background:linear-gradient(180deg,rgba(240,241,240,.4),rgba(255,255,255,.2));
  box-shadow:inset 0 1.5px 3px rgba(38,40,39,.16),inset 0 0 0 .5px rgba(38,40,39,.24),inset 0 -1px 0 rgba(255,255,255,.9),0 .5px 1px rgba(38,40,39,.12)}

/* smoked glass: transparent charcoal with a barely visible luminous rim */
${Oa} .gb.primary:not(.dark *){color:#f7f7f5;
  background:radial-gradient(38% 70% at 74% 82%,rgba(255,255,255,.1),transparent 70%),linear-gradient(180deg,rgba(52,56,54,.74) 0%,rgba(28,31,30,.8) 50%,rgba(20,22,21,.9) 100%);
  -webkit-backdrop-filter:blur(2px) saturate(1.3);backdrop-filter:blur(2px) saturate(1.3);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 0 0 .5px rgba(255,255,255,.16),inset 0 -1px 0 rgba(255,255,255,.08),
    inset 0 9px 12px -10px rgba(255,255,255,.2),inset 0 -9px 12px -8px rgba(0,0,0,.45),
    0 0 0 .5px rgba(0,0,0,.4),0 1px 2px rgba(0,0,0,.16),0 9px 18px -10px rgba(23,26,25,.55)}
${Oa} .gb.primary:not(.dark *):hover{background:radial-gradient(38% 70% at 70% 82%,rgba(255,255,255,.13),transparent 70%),linear-gradient(180deg,rgba(62,66,64,.76) 0%,rgba(32,35,34,.82) 50%,rgba(22,24,23,.92) 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.36),inset 0 0 0 .5px rgba(255,255,255,.2),inset 0 -1px 0 rgba(255,255,255,.1),
    inset 0 9px 12px -10px rgba(255,255,255,.26),inset 0 -9px 12px -8px rgba(0,0,0,.45),
    0 0 0 .5px rgba(0,0,0,.4),0 1px 2px rgba(0,0,0,.18),0 12px 22px -11px rgba(23,26,25,.6)}
${Oa} .gb.primary:not(.dark *):active{background:linear-gradient(180deg,rgba(24,26,25,.88),rgba(30,33,32,.84));
  box-shadow:inset 0 1.5px 4px rgba(0,0,0,.5),inset 0 0 0 .5px rgba(255,255,255,.12),0 0 0 .5px rgba(0,0,0,.4),0 2px 5px -3px rgba(0,0,0,.4)}
.gb.primary:not(.dark *)::before{background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.5) 28%,rgba(255,255,255,.22) 66%,rgba(255,255,255,0));opacity:1}
.gb.primary:not(.dark *)::after{background:linear-gradient(108deg,transparent 38%,rgba(255,255,255,.28) 47%,rgba(255,255,255,.06) 52%,transparent 60%);background-size:320% 100%}

/* clear crystal with more body, for primary actions on a dark canvas (Studio) */
.gb.crystal{color:#f4f5f3;background:linear-gradient(180deg,rgba(255,255,255,.2),rgba(255,255,255,.04) 50%,rgba(255,255,255,.12));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.55),inset 0 0 0 .5px rgba(255,255,255,.28),inset 0 -8px 10px -8px rgba(255,255,255,.18),0 10px 20px -10px rgba(0,0,0,.7)}

/* icon controls and compact */
${Oa} .gb.gc:not(.dark *){box-shadow:inset 0 1px 0 rgba(255,255,255,.98),inset 0 0 0 .5px rgba(38,40,39,.18),inset 0 -6px 8px -6px rgba(70,76,73,.28),0 1px 1.5px rgba(38,40,39,.1),0 6px 12px -8px rgba(38,40,39,.3)}
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
`;var ll=/^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/,Jt=e=>typeof e=="string"&&e.length<=254&&ll.test(e.trim()),sn="trescarla@gmail.com",cr=()=>`<p class="note contact">Questions? <a href="mailto:${sn}">${sn}</a></p>`,ln="lightorb:profile",dl=e=>String(e).replace(/[&<>"]/g,a=>`&#${a.charCodeAt(0)};`);async function Ao({email:e,name:a="",source:o}){if(e=String(e??"").trim(),a=String(a??"").trim().slice(0,40),!Jt(e))return{ok:!1,error:"Please enter a valid email address."};if(!ka)return{ok:!1,error:"Early access sign-up opens soon. Nothing was sent."};try{let t=await fetch(ka,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,...a?{name:a}:{},source:o,lang:(navigator.language||"en").slice(0,5)})});if(!t.ok)return{ok:!1,error:t.status===429?"Too many tries \u2014 please wait a minute.":"That did not go through. Please try again later."}}catch{return{ok:!1,error:"That did not go through. Please check your connection and try again."}}try{let t=JSON.parse(localStorage.getItem(ln))??{};localStorage.setItem(ln,JSON.stringify({...t,email:e,...a?{name:a}:{},joined:t.joined??new Date().toISOString()}))}catch{}return Fe("waitlist_join",{source:o}),{ok:!0}}var Co=e=>`<div class="joined glass" role="status" tabindex="-1"><p class="kicker">You\u2019re in</p>
  <h2>Welcome to early access</h2><p>We\u2019ll write to <b>${dl(e)}</b> when new pieces and Studio updates open. Everything stays free to explore while we build it.</p>
  <div class="acts eq"><a class="gb small primary" href="#/studio">Open Studio</a><a class="gb small" href="#/account">Your account</a></div></div>`;function pr(e,{compact:a=!1,label:o="",title:t="Join early access"}={}){let s=!!ka;return`<form class="form interest wl${a?" wl-c":""}" data-waitlist="${e}" novalidate>
    ${a?"":`<h2>${t}</h2>`}
    <label class="fl"><span>${o||(a?"Join early access \u2014 free; one email when new pieces open":"Free. We email you when new pieces and Studio updates open.")}</span>
      <span class="wl-row"><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"${s?"":" disabled"}>
      <button class="gb${a?" small":""}" type="submit"${s?"":" disabled"}><span>Join</span></button></span></label>
    <p class="note" data-wlmsg role="status" aria-live="polite">${s?'We only keep your email to tell you about new pieces and Studio updates. See <a href="#/privacy">privacy</a>; leave any time.':'Sign-up opens soon \u2014 nothing typed here is sent yet. See <a href="#/privacy">privacy</a>.'}</p>
  </form>`}function Hr(e){e.querySelectorAll("[data-waitlist]").forEach(a=>a.addEventListener("submit",async o=>{if(o.preventDefault(),!ka)return;let t=a.querySelector("[data-wlmsg]"),s=a.querySelector("input"),m=a.querySelector("button"),i=s.value.trim();if(!Jt(i)){t.textContent="Please enter a valid email address.",s.focus();return}m.disabled=!0,m.setAttribute("aria-busy","true");let u=await Ao({email:i,source:a.dataset.waitlist});if(u.ok){let p=document.createElement("div");p.innerHTML=Co(i);let h=p.firstElementChild;a.replaceWith(h),h.focus({preventScroll:!0});return}t.textContent=u.error,m.disabled=!1,m.removeAttribute("aria-busy")}))}var Br=500;function dn(e){return`<div class="fb" data-fbwrap><button class="tl" type="button" data-fbbtn aria-expanded="false" aria-controls="fb-p"><span>What's missing?</span></button>
    <form class="form fb-p" id="fb-p" data-feedback="${e}" novalidate hidden>
      <label class="fl"><span>Tell us what Studio or the pieces still need</span>
        <textarea class="gi" name="text" rows="3" maxlength="${Br}" required></textarea></label>
      <div class="acts"><button class="gb small" type="submit"${jr?"":" disabled"}><span>Send</span></button></div>
      <p class="note" data-fbmsg role="status" aria-live="polite">Up to ${Br} characters. Only the text and the page are kept.</p>
    </form></div>`}function cn(e,{sfx:a=()=>{}}={}){e.querySelectorAll("[data-fbwrap]").forEach(o=>{let t=o.querySelector("[data-fbbtn]"),s=o.querySelector("[data-feedback]");t.addEventListener("click",()=>{let m=s.hidden;s.hidden=!m,t.setAttribute("aria-expanded",String(m)),a(m?"open":"close"),m&&s.querySelector("textarea").focus()}),s.addEventListener("submit",async m=>{if(m.preventDefault(),!jr)return;let i=s.querySelector("[data-fbmsg]"),u=s.querySelector("textarea"),p=s.querySelector("button"),h=u.value.trim();if(!h){i.textContent="Write a few words first.",u.focus();return}if(h.length>Br){i.textContent=`Please keep it under ${Br} characters.`;return}p.disabled=!0;try{let l=await fetch(jr,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:h,page:s.dataset.feedback})});l.ok?(i.textContent="Thank you \u2014 we read every note.",u.value="",Fe("feedback_send",{page:s.dataset.feedback})):i.textContent=l.status===429?"Too many notes for now \u2014 please try again later.":"That did not go through. Please try again later."}catch{i.textContent="That did not go through. Please try again later."}p.disabled=!1})})}var pn=Aa?Aa.replace(/\/inquiry$/,"/request-code"):"",la=!1,un={name:100,use:1500},_r=e=>String(e??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),cl=()=>crypto.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,12)}`,gn=(e,a,{cls:o="gb small primary",label:t="Request code"}={})=>`<button class="${o}" type="button" data-request-code="${_r(e)}|${_r(a)}"><span>${t}</span></button>`;function pl(e){return`<dialog class="rc glass" aria-labelledby="rc-h">
    <form class="rc-f" novalidate>
      <button class="rc-x gb gc small" type="button" data-rc-close aria-label="Close"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg></button>
      <p class="kicker">Request code</p>
      <h2 id="rc-h">${_r(e)}</h2>
      <p class="rc-l">The interactive piece stays free to try on this site \u2014 nothing here is needed for that. This is only for its source code: tell me who you are and I\u2019ll be in touch about access.</p>
      <label class="fl"><span>Name</span><input class="gi" name="name" autocomplete="name" maxlength="${un.name}" required><em class="err" data-err="name"></em></label>
      <label class="fl"><span>Email</span><input class="gi" name="email" type="email" autocomplete="email" inputmode="email" maxlength="254" required><em class="err" data-err="email"></em></label>
      <label class="fl"><span>How you\u2019d like to use it <small>optional</small></span><textarea class="gi" name="use" rows="3" maxlength="${un.use}"></textarea></label>
      <label class="rc-hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
      <div class="rc-send"><button class="gb primary" type="submit"><span>Send request</span></button>
        <p class="rc-s" role="status" aria-live="polite"></p></div>
      <p class="note">Your name, email and note go to Carla Tres (THE ORB LIGHT) only to answer this request, and are kept as a record of it. Not added to any mailing list. Ask at trescarla@gmail.com to have them deleted. <a href="#/privacy">Privacy</a></p>
    </form>
    <div class="rc-done" hidden tabindex="-1"><p class="kicker">${_r(e)}</p><h2>Request received.</h2><p>I\u2019ll be in touch about access.</p>
      <div class="acts"><button class="gb" type="button" data-rc-close><span>Close</span></button></div></div>
  </dialog>`}function hn(e,{audio:a,variant:o=()=>"",autoOpen:t=!1}={}){let s=m=>{let[i,u]=m.dataset.requestCode.split("|"),p=document.createElement("div");p.innerHTML=pl(u);let h=p.firstElementChild;document.body.append(h);let l=h.querySelector("form"),f=h.querySelector(".rc-s"),G=l.querySelector("[type=submit]"),H=performance.now(),n=cl(),O=!1,A=()=>h.close();h.addEventListener("close",()=>{h.remove(),m.focus({preventScroll:!0}),a?.sfx?.("close")}),h.addEventListener("click",E=>{E.target===h&&A()}),h.querySelectorAll("[data-rc-close]").forEach(E=>E.addEventListener("click",A));let F=(E,C)=>{let W=l.elements[E],I=l.querySelector(`[data-err=${E}]`);C?(W.setAttribute("aria-invalid","true"),I.textContent=C):(W.removeAttribute("aria-invalid"),I.textContent="")};l.addEventListener("submit",async E=>{if(E.preventDefault(),O)return;let C={name:l.elements.name.value.trim(),email:l.elements.email.value.trim(),use:l.elements.use.value.trim()};if(F("name",C.name?"":"Please add your name."),F("email",Jt(C.email)?"":"Please enter a valid email address."),!C.name){l.elements.name.focus();return}if(!Jt(C.email)){l.elements.email.focus();return}if(!pn){f.textContent="Requests are not open yet. You can write to trescarla@gmail.com.";return}O=!0,G.disabled=!0,G.setAttribute("aria-busy","true"),f.removeAttribute("role"),f.textContent="Sending\u2026";let W=!1,I="";try{let V=await fetch(pn,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({product:i,productName:u,variant:o()||"",...C,key:n,elapsed:Math.round(performance.now()-H),website:l.elements.website.value,lang:(navigator.language||"en").slice(0,5)})}),S=await V.json().catch(()=>null);W=V.ok&&S?.ok===!0,I=W?"":V.status===429?"Too many requests for now \u2014 please try again in a while.":"Your request was not sent. Please try again, or write to trescarla@gmail.com."}catch{I="Your request was not sent \u2014 the connection failed. Please try again, or write to trescarla@gmail.com."}if(O=!1,G.disabled=!1,G.removeAttribute("aria-busy"),W){Fe("code_request",{product:i}),a?.sfx?.("confirm"),l.hidden=!0;let V=h.querySelector(".rc-done");V.hidden=!1,V.focus();return}f.textContent=I,f.setAttribute("role","alert"),Fe("code_request_failed",{product:i})}),h.showModal(),a?.sfx?.("open"),Fe("code_request_open",{product:i}),requestAnimationFrame(()=>l.elements.name.focus())};if(e.querySelectorAll("[data-request-code]").forEach(m=>m.addEventListener("click",()=>s(m))),t){let m=e.querySelector("[data-request-code]");m&&setTimeout(()=>s(m),80)}}var mn=`
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
`;var fn=ka?ka.replace(/\/waitlist$/,"/studio-waitlist"):"",ul=!1,ur=()=>ul||/[?&]list=1\b/.test(location.search),gl=0;function Wr({tone:e="light",heading:a=!0}={}){let o=`sl-${++gl}`;return`<section class="sl sl-${e}" aria-labelledby="${o}-h" data-studio-list>
    ${a?`<p class="sl-k">Studio Membership</p><h2 class="sl-h" id="${o}-h">Something new is taking shape.</h2>`:`<h3 class="sl-h sl-h3" id="${o}-h">Studio Membership</h3>`}
    <p class="sl-l">Be the first to know when Studio Membership opens.</p>
    <form class="sl-f" novalidate>
      <label class="sl-fl" for="${o}-e"><span class="sl-sr">Email</span></label>
      <div class="sl-row"><input class="gi"${ur()?"":" disabled"} id="${o}-e" name="email" type="email" autocomplete="email" inputmode="email" maxlength="254" placeholder="you@example.com" required aria-describedby="${o}-c ${o}-m">
        <button class="gb${e==="dark"?" crystal":" primary"}" type="submit"${ur()?"":" disabled"}><span>Notify me at launch</span></button></div>
      <label class="sl-c" id="${o}-c"><input type="checkbox" name="consent" required${ur()?"":" disabled"}> <span>Yes, email me once when Studio Membership opens. Sent by Carla Tres (THE ORB LIGHT); your address is kept only for this, apart from every other list, and every email has a link to leave. <a href="#/privacy">Privacy</a></span></label>
      <label class="sl-hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
      <p class="sl-m" id="${o}-m" role="status" aria-live="polite">${ur()?"":"Sign-up opens soon \u2014 nothing typed here is sent yet."}</p>
    </form>
  </section>`}function Yr(e,{sfx:a=()=>{}}={}){e.querySelectorAll("[data-studio-list] form").forEach(o=>o.addEventListener("submit",async t=>{t.preventDefault();let s=o.elements.email,m=o.elements.consent,i=o.querySelector("[type=submit]"),u=o.querySelector(".sl-m"),p=s.value.trim();u.removeAttribute("data-err");let h=(n,O)=>{u.textContent=n,u.dataset.err="",O?.focus(),O&&O.setAttribute("aria-invalid","true")};if(s.removeAttribute("aria-invalid"),m.removeAttribute("aria-invalid"),!Jt(p))return h("Please enter a valid email address.",s);if(!m.checked)return h("Please tick the box so I know you\u2019d like that one email.",m);if(!fn||!ur())return h("The list is not open yet. Nothing was sent.");i.disabled=!0,i.setAttribute("aria-busy","true"),u.textContent="";let l=!1,f=0;try{let n=await fetch(fn,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:p,consent:!0,website:o.elements.website.value,lang:(navigator.language||"en").slice(0,5)})});f=n.status,l=n.ok&&(await n.json().catch(()=>null))?.ok===!0}catch{}if(i.disabled=!1,i.removeAttribute("aria-busy"),!l)return h(f===429?"Too many tries \u2014 please wait a little and try again.":"That did not go through, so you are not on the list yet. Please try again in a moment.");Fe("studio_list_join"),a("confirm");let G=o.closest("[data-studio-list]"),H=document.createElement("div");H.className="sl-done",H.tabIndex=-1,H.setAttribute("role","status"),H.innerHTML='<p class="sl-h sl-h3">You\u2019re on the list.</p><p class="sl-l">I\u2019ll write to <b></b> once, when Studio Membership opens.</p>',H.querySelector("b").textContent=p,G.querySelector(".sl-l").remove(),o.replaceWith(H),H.focus({preventScroll:!0})}))}var bn=`
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
`;var kt=null,Wt=null,Qa=null,gr=0,hl=performance.now()/1e3,ht={exposure:1,target:1,impacts:[null,null],next:0,strength:1,scale:90,horizon:.27,lamp:.9,orb:null};function Vr(e){if(!Wt){Wt=document.createElement("canvas"),Wt.className="world-preview",Wt.setAttribute("aria-hidden","true"),Wt.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:inherit";try{kt=Ei(Wt)}catch{kt=null}}return kt&&(Qa=e,e.prepend(Wt),zo(),ml()),Wt}function hr(){cancelAnimationFrame(gr),gr=0,Wt?.remove(),Qa=null}function zo(){if(!Qa||!kt)return;let e=Qa.getBoundingClientRect();kt.resize(Math.max(2,e.width),Math.max(2,e.height),Math.min(devicePixelRatio||1,1.5))}addEventListener("resize",zo);var lt={state:ht,setExposure(e,a=!1){ht.target=e,a&&(ht.exposure=e)},impact(e,a,o=ht.strength){let t=ht.next++%2;ht.impacts[t]={x:e,y:a,at:performance.now()/1e3,strength:o}},set(e){Object.assign(ht,e)},setOrb(e){ht.orb=e},get canvas(){return Wt}};function ml(){cancelAnimationFrame(gr);let e=()=>{if(!Qa||!kt)return;let a=performance.now()/1e3,o=Qa.getBoundingClientRect();Math.abs(o.width-Wt.width/kt.ratio)>2&&zo(),ht.exposure+=(ht.target-ht.exposure)*.05;let t=o.height,s=ht.orb;kt.setHorizon(ht.horizon),kt.setExposure(ht.exposure),kt.setNightGain(1),s?(kt.setOrb(s.x,s.y,s.d),kt.setLamp(s.x,s.y,s.d*3,ht.lamp*(1-ht.exposure)),kt.setReveal(s.x,s.y,Math.hypot(o.width,t),ht.exposure*60)):(kt.setReveal(0,0,1,0),kt.setLamp(0,0,1,0)),ht.impacts.forEach((m,i)=>kt.setImpact(i,m?.x??0,m?.y??0,m?a-m.at:-1,m?.strength??0,ht.scale)),kt.render(a-hl),gr=requestAnimationFrame(e)};gr=requestAnimationFrame(e)}var Oo=[["clear","Clear glass",0],["chrome","Liquid metal",1],["porcelain","Porcelain over glass",2],["bloom","Milky glass \xB7 cloud",3],["core","Glass \xB7 light core",4],["points","Glass \xB7 points of light",5],["glitter","Glass \xB7 glitter",6],["beads","Glass \xB7 beads",7],["liquid","Glass \xB7 liquid",8]],Kr=Object.fromEntries(Oo.map(([e,,a])=>[e,a])),jo={clear:[[1,1,1],[1,1,1]],chrome:[[1,1,1],[1,1,1]],porcelain:[[.13,.17,.18],[.86,.64,.3]],bloom:[[1,.42,.45],[1,.72,.68]],core:[[1,.97,.92],[1,1,1]],points:[[.92,.96,1],[1,1,1]],glitter:[[.95,.96,1],[1,1,1]],beads:[[.97,.97,.96],[1,.9,.95]],liquid:[[.55,.78,.95],[.9,.97,1]]},Ur=[-.6,.55,.6],fl=Math.hypot(...Ur),bl=Math.atan2(Ur[0],Ur[2])*180/Math.PI,xl=Math.asin(Ur[1]/fl)*180/Math.PI,mr=e=>"#"+e.map(a=>Math.round(Math.min(1,Math.max(0,a))*255).toString(16).padStart(2,"0")).join(""),Xr=e=>{let a=parseInt(String(e).replace("#",""),16)||0;return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]};function xn(e={id:"clear",base:"clear"}){let a=Kr[e.base]===void 0?"clear":e.base,[o,t]=jo[a];return{v:1,variant:e.id||a,base:a,material:{tint:mr(e.tint??o),accent:mr(e.accent??t),refraction:1,dispersion:0,frost:0,rim:1,opacity:1,iridescence:0,exposure:1},interior:{amount:0,size:1,speed:1,glow:1,fill:.55},light:{angle:+bl.toFixed(2),height:+xl.toFixed(2),key:1,rim:1,environment:1,horizon:1,colour:"#ffffff"},motion:{spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},scene:{background:"none",colour:"#0b0c0c",colour2:"#2a2d2c",size:1,shadow:0,reflection:0}}}var Gr=e=>e&&typeof e=="object"&&!Array.isArray(e);function Za(e,a){let o=structuredClone(e);if(!Gr(a))return o;for(let[t,s]of Object.entries(a))t in o&&(Gr(o[t])?Gr(s)&&(o[t]=Za(o[t],s)):typeof s==typeof o[t]&&(typeof s!="number"||Number.isFinite(s))&&(o[t]=s));return Kr[o.base]===void 0&&(o.base="clear"),o}function Jr(e,a){let o={};for(let[t,s]of Object.entries(a))if(Gr(s)){let m=Jr(e?.[t]??{},s);Object.keys(m).length&&(o[t]=m)}else if(typeof s=="number"){let m=Math.round(s*1e3)/1e3;(e?.[t]===void 0||Math.round(e[t]*1e3)/1e3!==m)&&(o[t]=m)}else e?.[t]!==s&&(o[t]=s);return o}var vl=e=>btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var vn=(e,a)=>vl(JSON.stringify(Jr(a,e)));var qt=[{id:"clear",base:"clear",name:"Clear",line:"Thick clear glass, nothing inside but its own depth."},{id:"smoke",base:"clear",name:"Smoke",line:"Smoked glass, a grey depth that darkens to the rim.",tint:[.6,.62,.65]},{id:"amber",base:"clear",name:"Amber",line:"Warm amber glass, like light through honey.",tint:[1,.8,.52]},{id:"chrome",base:"chrome",name:"Chrome",line:"Liquid chrome that keeps folding the room it reflects."},{id:"gold",base:"chrome",name:"Liquid Gold",line:"Molten gold folding over itself.",tint:[1,.79,.45]},{id:"gunmetal",base:"chrome",name:"Gunmetal",line:"Dark liquid metal with cold highlights.",tint:[.5,.53,.57]},{id:"porcelain",base:"porcelain",name:"Porcelain",line:"Raised porcelain bands with gold edges over dark glass."},{id:"silverline",base:"porcelain",name:"Silverline",line:"Porcelain bands edged in silver over dark glass.",accent:[.82,.84,.88]},{id:"celadon",base:"porcelain",name:"Celadon",line:"Porcelain bands over green celadon glass.",tint:[.22,.36,.3]},{id:"bloom",base:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud."},{id:"lilac",base:"bloom",name:"Lilac",line:"Milky glass holding a slow violet cloud.",tint:[.62,.45,1],accent:[.86,.76,1]},{id:"lagoon",base:"bloom",name:"Lagoon",line:"Milky glass holding a slow sea-blue cloud.",tint:[.2,.62,.9],accent:[.6,.92,.9]},{id:"core",base:"core",name:"Core",line:"Clear glass holding one soft white light at its centre."},{id:"dawn",base:"core",name:"Dawn",line:"Clear glass holding a warm, low light.",tint:[1,.72,.45]},{id:"starlight",base:"points",name:"Starlight",line:"Clear glass full of small points of light that drift and twinkle."},{id:"firefly",base:"points",name:"Firefly",line:"Warm points of light drifting slowly inside the glass.",tint:[1,.78,.4]},{id:"glitter",base:"glitter",name:"Glitter",line:"Fine silver flecks that catch the light as the sphere turns."},{id:"goldleaf",base:"glitter",name:"Gold Leaf",line:"Flakes of gold suspended in clear glass.",tint:[1,.78,.4]},{id:"beads",base:"beads",name:"Beads",line:"Small milky glass beads floating inside the shell."},{id:"pearls",base:"beads",name:"Pearls",line:"Soft pearls with a faint rainbow sheen, floating inside.",tint:[1,.95,.97],accent:[.85,.9,1]}],kn=Kr,yn={0:{tint:[1,1,1],accent:[1,1,1]},1:{tint:[1,1,1],accent:[1,1,1]},2:{tint:[.13,.17,.18],accent:[.86,.64,.3]},3:{tint:[1,.42,.45],accent:[1,.72,.68]},4:{tint:[1,.97,.92],accent:[1,1,1]},5:{tint:[.92,.96,1],accent:[1,1,1]},6:{tint:[.95,.96,1],accent:[1,1,1]},7:{tint:[.97,.97,.96],accent:[1,.9,.95]},8:{tint:[.55,.78,.95],accent:[.9,.97,1]}},Ea=e=>xn(qt.find(a=>a.id===e)??qt[0]),wl=e=>{let a=qt.find(t=>t.id===e)??qt[0],o=kn[a.base];return{k:o,tint:a.tint??yn[o].tint,accent:a.accent??yn[o].accent}},kl=`
  uniform mat3 uRot;
  varying vec3 vN; varying vec3 vP; varying vec3 vObj;
  void main() {
    vObj = uRot * position;              // the material turns with the drag
    vN = normalize(normalMatrix * normal);
    vec4 wp = modelViewMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    gl_Position = projectionMatrix * wp;
  }`,Sl=`
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
  }`,fr=null;function El(){if(fr)return fr;let e=typeof OffscreenCanvas=="function"&&"transferToImageBitmap"in OffscreenCanvas.prototype,a=e?new OffscreenCanvas(2,2):document.createElement("canvas"),o=new So({canvas:a,alpha:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0});o.setClearColor(0,0);let t=new yo,s=new ko(30,1,.1,20);s.position.set(0,0,4.9);let m=new ki({vertexShader:kl,fragmentShader:Sl,transparent:!0,premultipliedAlpha:!0,uniforms:{uKind:{value:0},uTint:{value:new zr(1,1,1)},uAccent:{value:new zr(1,1,1)},uTime:{value:0},uStir:{value:0},uVoice:{value:0},uVoiceFlow:{value:0},uRot:{value:new vo},...Object.fromEntries(Object.entries(Sn).map(([u,p])=>[u,{value:Array.isArray(p)?new zr(...p):p}]))}}),i=new wo(new wi(1,128,96),m);return t.add(i),fr={r:o,scene:t,camera:s,mat:m,mesh:i,list:new Set,raf:0,off:e},fr}var Sn={uIor:1,uDisp:0,uFrost:0,uRim:1,uOpacity:1,uIrid:0,uExp:1,uAmt:0,uSize:1,uGlow:1,uFill:.55,uKeyDir:[-.6/Math.hypot(.6,.55,.6),.55/Math.hypot(.6,.55,.6),.6/Math.hypot(.6,.55,.6)],uKey:1,uRimL:1,uEnv:1,uHorizon:1,uLightCol:[1,1,1]},wn=Math.tan(Math.asin(1/4.9))/Math.tan(15*Math.PI/180),$l=1/(4.9*Math.tan(15*Math.PI/180));function Ml(e){let a=e.cfg;if(!a){let u=wl(e.kind);return{...Sn,uKind:u.k,uTint:u.tint,uAccent:u.accent}}let o=a.material,t=a.interior,s=a.light,m=s.angle*Math.PI/180,i=s.height*Math.PI/180;return{uKind:kn[a.base]??0,uTint:Xr(o.tint),uAccent:Xr(o.accent),uIor:o.refraction,uDisp:o.dispersion,uFrost:o.frost,uRim:o.rim,uOpacity:o.opacity,uIrid:o.iridescence,uExp:o.exposure,uAmt:t.amount,uSize:Math.max(.2,t.size),uGlow:t.glow,uFill:t.fill,uKeyDir:[Math.cos(i)*Math.sin(m),Math.sin(i),Math.cos(i)*Math.cos(m)],uKey:s.key,uRimL:s.rim,uEnv:s.environment,uHorizon:s.horizon,uLightCol:Xr(s.colour)}}var Ll=matchMedia("(pointer: coarse)").matches;function Io(){let e=fr;e.raf=0;let a=performance.now()/1e3,o=Math.min(devicePixelRatio||1,1.5),t=[...e.list].filter(p=>p.visible&&p.canvas.isConnected),s=t.length,m=e.lastNow?a-e.lastNow:1/60;e.lastNow=a,s<=2?e.k=s:(e.k=Math.min(s,Math.max(1,e.k||(Ll?2:3))),e.avg=(e.avg??m)*.9+m*.1,++e.adj>20&&(e.adj=0,e.avg>1/50&&e.k>1?e.k--:e.avg<1/58&&e.k<s&&e.k++)),e.adj||=0,e.cursor=(e.cursor||0)%Math.max(1,s);let i=new Set;for(let p=0;p<e.k;p++)i.add(t[(e.cursor+p)%s]);e.cursor+=e.k;for(let p of t){if(!i.has(p))continue;p.step(a);let h=Math.max(2,Math.round(p.canvas.clientWidth*o)),l=Math.max(2,Math.round(p.canvas.clientHeight*o));(p.canvas.width!==h||p.canvas.height!==l)&&(p.canvas.width=h,p.canvas.height=l),(e.w!==h||e.h!==l)&&(e.r.setSize(h,l,!1),e.w=h,e.h=l,e.camera.aspect=h/l,e.camera.updateProjectionMatrix());let f=e.mat.uniforms;for(let[n,O]of Object.entries(Ml(p)))Array.isArray(O)?f[n].value.fromArray(O):f[n].value=O;f.uTime.value=p.time,f.uStir.value=p.stir,f.uVoice.value=p.kind==="bloom"?p.voice:0,f.uVoiceFlow.value=p.voiceFlow,f.uRot.value.copy(p.rot),e.mesh.scale.setScalar(p.scale),e.mesh.position.y=p.lift,e.r.render(e.scene,e.camera);let G=p.cfg?.scene;if(p.bmp){p.bmp.transferFromImageBitmap(e.r.domElement.transferToImageBitmap());continue}let H=p.ctx;H.clearRect(0,0,h,l),G?Tl(p,H,h,l,e.r.domElement,G):H.drawImage(e.r.domElement,0,0,h,l)}let u=!1;for(let p of e.list)if(p.visible&&p.canvas.isConnected){u=!0;break}u&&(e.raf=requestAnimationFrame(Io))}var ja=null;function Tl(e,a,o,t,s,m){if(m.background==="solid")a.fillStyle=m.colour,a.fillRect(0,0,o,t);else if(m.background==="gradient"){let h=a.createRadialGradient(o/2,t*.42,0,o/2,t*.5,Math.hypot(o,t)*.6);h.addColorStop(0,m.colour2),h.addColorStop(1,m.colour),a.fillStyle=h,a.fillRect(0,0,o,t)}let i=wn*e.scale*t/2,u=t/2-e.lift*$l*t/2,p=t/2+wn*m.size*t/2;if(m.shadow>0){let h=Math.max(0,p-(u+i)),l=1/(1+h/i*2);a.save(),a.translate(o/2,p),a.scale(1,.16);let f=a.createRadialGradient(0,0,0,0,0,i*(1.05+(1-l)*.5));f.addColorStop(0,`rgba(0,0,0,${(.55*m.shadow*l).toFixed(3)})`),f.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=f,a.beginPath(),a.arc(0,0,i*1.6,0,Math.PI*2),a.fill(),a.restore()}if(m.reflection>0&&p<t){let h=Math.min(t-p,i*2);ja||=document.createElement("canvas"),(ja.width!==o||ja.height!==t)&&(ja.width=o,ja.height=t);let l=ja.getContext("2d");l.clearRect(0,0,o,t),l.save(),l.translate(0,p*2),l.scale(1,-1),l.drawImage(s,0,0,o,t),l.restore(),l.globalCompositeOperation="destination-in";let f=l.createLinearGradient(0,p,0,p+h);f.addColorStop(0,`rgba(0,0,0,${(.5*m.reflection).toFixed(3)})`),f.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=f,l.fillRect(0,0,o,t),l.globalCompositeOperation="source-over",a.drawImage(ja,0,0)}a.drawImage(s,0,0,o,t)}function br(e,a="clear",{interactive:o=!0,reduced:t=matchMedia("(prefers-reduced-motion: reduce)").matches,config:s=null}={}){let m;try{m=El()}catch{let I=()=>{};return new Proxy({},{get:()=>I})}let i=document.createElement("canvas");i.className="sph-c",i.setAttribute("aria-hidden","true"),e.append(i);let u={spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},p=()=>E.cfg?.motion??u,h={v:.4,vel:t?0:.12},l={v:-.15,vel:0},f={x:0,y:0,tx:0,ty:0},G=new vi,H=new yi,n=performance.now()/1e3,O=null,A=0,F=!s&&m.off?i.getContext("bitmaprenderer"):null,E={canvas:i,bmp:F,ctx:F?null:i.getContext("2d"),kind:a,cfg:s?Za(Ea(s.variant||a),s):null,visible:!1,time:Math.random()*40,stir:0,speech:0,voice:0,voiceFlow:0,voiceInput:null,scale:1,lift:0,rot:new vo,step(I){let V=Math.min(.25,I-n);n=I,A+=V;let S=p(),y=t?0:S.spin;O||(h.vel+=(y-h.vel)*V*.8,l.vel*=Math.exp(-V*3),l.v+=(S.tilt-l.v)*V*.8),h.v+=h.vel*V,l.v=Math.max(-1.2,Math.min(1.2,l.v+l.vel*V)),f.x+=(f.tx*S.pointer-f.x)*V*5,f.y+=(f.ty*S.pointer-f.y)*V*5,E.stir*=Math.exp(-V*1.6);let j=E.kind==="bloom"?E.voiceInput?.():0;E.voice=Math.max(0,Math.min(1,Number.isFinite(j)?j:0))*(t?.35:1),E.voiceFlow+=V*E.voice*3,E.time+=V*(t?.3:1)*(1+E.stir*3)*(E.cfg?E.cfg.interior.speed:1),H.set(l.v+f.y*.25,h.v+f.x*.35,S.roll,"YXZ"),G.makeRotationFromEuler(H),E.rot.setFromMatrix4(G);let Z=E.cfg?E.cfg.scene.size:1,B=t?0:1;E.scale=Z*(1+B*S.breathe*Math.sin(A*1.3)+E.speech*S.speech*.06),E.lift=B*S.bob*Z*Math.sin(A*Math.PI*2*S.bobSpeed)}};E.cfg&&(E.kind=E.cfg.variant);let C=(I,V,S=.016)=>{let y=p().inertia;h.v+=I*.01,l.v+=V*.01,h.vel=I*.01/S*.6*y,l.vel=V*.01/S*.6*y};if(o){i.style.touchAction="pan-y",i.style.cursor="grab",i.addEventListener("pointerdown",S=>{O={x:S.clientX,y:S.clientY,t:performance.now(),moved:!1},i.setPointerCapture(S.pointerId),i.style.cursor="grabbing"}),i.addEventListener("pointermove",S=>{let y=i.getBoundingClientRect();if(f.tx=((S.clientX-y.left)/y.width-.5)*2,f.ty=((S.clientY-y.top)/y.height-.5)*2,!O)return;let j=performance.now(),Z=S.clientX-O.x,B=S.clientY-O.y,U=Math.max(8,j-O.t)/1e3;Math.hypot(Z,B)>3&&(O.moved=!0),C(Z,B,U),O.x=S.clientX,O.y=S.clientY,O.t=j});let I=()=>{O&&(O.moved||(E.stir=Math.min(1.5,E.stir+p().stir)),O=null,i.style.cursor="grab")};i.addEventListener("pointerup",I),i.addEventListener("pointercancel",I),i.addEventListener("pointerleave",()=>{f.tx=f.ty=0});let V=!1;i.addEventListener("pointerdown",()=>{V=!1},!0),i.addEventListener("pointermove",()=>{O?.moved&&(V=!0)}),i.addEventListener("click",S=>{V&&(S.preventDefault(),S.stopPropagation())})}let W=new IntersectionObserver(([I])=>{E.visible=I.isIntersecting,E.visible&&!m.raf&&(m.raf=requestAnimationFrame(Io))});return W.observe(i),m.list.add(E),m.raf||(m.raf=requestAnimationFrame(Io)),{canvas:i,setKind(I){E.kind=I,E.stir=1},setConfig(I){E.cfg=I?Za(Ea(I.variant||E.kind),I):null,E.cfg&&(E.kind=E.cfg.variant)},setSpeech(I){E.speech=Math.max(0,Math.min(1,I||0))},setVoiceInput(I){E.voiceInput=typeof I=="function"?I:null,E.voice=0},rotate(I,V){C(I,V)},resetView(){h.v=.4,l.v=p().tilt,h.vel=t?0:p().spin,l.vel=0},stir(){E.stir=Math.min(1.5,E.stir+p().stir)},dispose(){E.voiceInput=null,W.disconnect(),m.list.delete(E),i.remove()}}}var En=`
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
`;var ot=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),ql=(e,a,o)=>e+(a-e)*o,Fo=.25,qn=3,Al=40,Cl=e=>Math.max(1,.9*(Number.isFinite(e)?e:1)),zl=(e,a,o)=>Math.hypot(Math.max(o.l-e,0,e-o.r),Math.max(o.t-a,0,a-o.b));function Ol(e,a,o,t){let s=(e.l+e.r)/2,m=(e.t+e.b)/2,i=Math.min(e.r-e.l,e.b-e.t)/2-o;for(let u of a)i=Math.min(i,zl(s,m,u)-o);return Math.max(0,2*i/t)}function Bo(e,a,o){let t=Math.max(Fo,Math.min(qn,o/Math.max(1,e))),s=ot(Number.isFinite(a)?a:1,Fo,t);return{zoom:s,size:Math.max(Math.min(Al,o),Math.min(e*s,o))}}function jl(e,a,o,t){a!==e.shown&&(e.want=a);let s=Bo(o,e.want,t);return e.shown=s.zoom,s}var $n="lo:studio2",An=2,Mn=Math.PI/180,Il="https://thelightorb.com/embed/v1/orb.js",ft=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),Cn=e=>qt.find(a=>a.id===e)??qt[0];function Ia(e="orb",a="clear"){let o=Cn(a).id;return{v:An,version:1,family:na(e)?e:"orb",preset:o,sph:Ea(o),zoom:1,orb:_t(fa("original").config),scene:{exposure:0,left:.65,right:.55,env:.5},view:{yaw:0,pitch:0,zoom:1},rot:0,slider:{length:420,height:92,tint:"#ffffff",tintAmount:0,preset:"original"},wave:{strength:.9,scale:80,exposure:1},bg:{exposure:1,horizon:.27,lamp:.8},ctl:{tint:"#ffffff",tintAmount:.1,depth:5,radius:999,blur:8}}}function Ro(e){let a=Ia(e?.family,e?.sph?.variant||(qt.some(t=>t.id===e?.preset)?e.preset:"clear"));if(!e||typeof e!="object")return a;let o={...a};for(let t of["orb","scene","view","slider","wave","bg","ctl"])e[t]&&typeof e[t]=="object"&&(o[t]={...a[t],...structuredClone(e[t])});return e.orb?.light&&(o.orb=structuredClone(e.orb)),e.sph&&(o.sph=Za(Ea(e.sph.variant||a.preset),e.sph)),typeof e.rot=="number"&&(o.rot=e.rot),typeof e.zoom=="number"&&(o.zoom=ot(Number.isFinite(e.zoom)?e.zoom:1,Fo,qn)),o.preset=o.sph.variant,o}var Rl=["bloom","core","points","glitter","beads","liquid"],Pl=[["material","Material",()=>[["sph.base","Material","select",Oo.map(([e,a])=>[e,a]),"What the sphere is made of"],["sph.material.tint","Tint","color","Main colour of the glass, metal or cloud"],["sph.material.accent","Accent","color","Second colour: porcelain edges, cloud highlights, bead sheen, liquid surface"],["sph.material.refraction","Refraction",0,2.5,.01,"\xD7","How strongly the glass bends the room (index of refraction)"],["sph.material.dispersion","Dispersion",0,1,.01,"%","Colour fringes: the rainbow split of light through glass"],["sph.material.frost","Frost",0,1,.01,"%","Roughness: from polished to frosted, diffuse reflections"],["sph.material.rim","Fresnel rim",0,3,.01,"\xD7","Brightness of reflections at the edge"],["sph.material.iridescence","Iridescence",0,1,.01,"%","Thin-film rainbow sheen at the rim"],["sph.material.opacity","Opacity",0,1,.01,"%","How much of the background shows through"],["sph.material.exposure","Exposure",.2,2.5,.01,"\xD7","Overall brightness of the sphere"]]],["interior","Interior",e=>Rl.includes(e.sph.base)?[["sph.interior.amount",e.sph.base==="liquid"?"Density":"Amount",-1,1,.01,"%","How much is inside: more points, flakes, beads or cloud"],["sph.interior.size","Size",.3,2.5,.01,"\xD7","Scale of what is inside"],["sph.interior.speed","Motion",0,4,.01,"\xD7","Speed of the inner movement (also the metal and porcelain flow)"],["sph.interior.glow","Glow",0,3,.01,"\xD7","Brightness of what is inside"],...e.sph.base==="liquid"?[["sph.interior.fill","Fill level",0,1,.01,"%","How full the sphere is"]]:[]]:[["sph.interior.speed","Flow speed",0,4,.01,"\xD7","Speed of the surface flow and inner movement"]]],["light","Lighting",()=>[["sph.light.angle","Key angle",-180,180,1,"\xB0","Direction of the main soft box around the sphere"],["sph.light.height","Key height",-30,90,1,"\xB0","Height of the main soft box"],["sph.light.key","Key light",0,3,.01,"\xD7","Strength of the main soft box"],["sph.light.rim","Rim light",0,3,.01,"\xD7","Strength of the second (rim) soft box"],["sph.light.environment","Environment",0,2,.01,"\xD7","Brightness of the studio room reflected in the sphere"],["sph.light.horizon","Horizon",0,3,.01,"\xD7","The bright horizon line in reflections"],["sph.light.colour","Light colour","color","Colour of all the light"]]],["motion","Motion",()=>[["sph.motion.spin","Idle spin",-1.5,1.5,.01,"r/s","Turntable speed when nobody touches it (negative turns the other way)"],["sph.motion.tilt","Axis tilt",-1.2,1.2,.01,"rad","Rest tilt of the spin axis towards the viewer"],["sph.motion.roll","Axis roll",-1.6,1.6,.01,"rad","Sideways tilt of the spin axis"],["sph.motion.bob","Float",0,.4,.005,"r","Up-and-down float amplitude"],["sph.motion.bobSpeed","Float speed",0,3,.01,"Hz","Float cycles per second"],["sph.motion.breathe","Breathing",0,.12,.001,"%","Slow pulse of the size"],["sph.motion.pointer","Pointer follow",0,3,.01,"\xD7","How much it leans towards the pointer"],["sph.motion.stir","Tap stir",0,3,.01,"\xD7","How much a tap stirs what is inside"],["sph.motion.inertia","Drag inertia",0,2,.01,"\xD7","How long it keeps turning after a drag"],["sph.motion.speech","Speech pulse",0,3,.01,"\xD7","How much it pulses with a voice (test below)"]]],["scene","Scene",()=>[["sph.scene.background","Background","seg",[["none","None"],["solid","Solid"],["gradient","Gradient"]],"Transparent, a solid colour or a soft radial gradient"],["sph.scene.colour","Colour","color","Background colour (outer colour of the gradient)"],["sph.scene.colour2","Centre colour","color","Inner colour of the gradient"],["sph.scene.size","Sphere size",.3,1.2,.01,"%","Size of the sphere in its frame (leave room for the shadow)"],["sph.scene.shadow","Floor shadow",0,1,.01,"%","Soft contact shadow under the sphere"],["sph.scene.reflection","Reflection",0,1,.01,"%","Mirror reflection on the floor"]]]],Ln={scene:["Studio light",[["scene.exposure","Exposure",-2,2,.1,"EV"],["scene.left","Left light",0,1,.01,"%"],["scene.right","Right light",0,1,.01,"%"],["scene.env","Environment",0,1,.01,"%"]]],light:["Orb light",[["orb.light.colour","Colour","color"],["orb.light.strength","Strength",0,1,.01,"%"],["orb.light.x","Position X",-.6,.6,.01,"r"],["orb.light.y","Position Y",-.8,.6,.01,"r"]]],slider:["Capsule",[["slider.length","Length",240,600,1,"px"],["slider.height","Height",60,130,1,"px"],["slider.tint","Glass tint","color"],["slider.tintAmount","Tint amount",0,1,.01,"%"],["slider.preset","Orb thumb","select",Sa.map(e=>[e.id,e.name])]]],wave:["Wave",[["wave.strength","Strength",.1,1,.01,"%"],["wave.scale","Ring scale",40,140,1,"px"],["wave.exposure","Environment",0,1,.01,"%"]]],bg:["Environment",[["bg.exposure","Dark \u2192 warm",0,1,.01,"%"],["bg.horizon","Horizon",.15,.45,.01,"%"],["bg.lamp","Orb lamp (dark)",0,1,.01,"%"]]],ctl:["Crystal controls",[["ctl.tint","Tint","color"],["ctl.tintAmount","Tint amount",0,1,.01,"%"],["ctl.depth","Optical depth",0,10,.5,"px"],["ctl.radius","Corner radius",6,999,1,"px"],["ctl.blur","Backdrop blur",0,24,1,"px"]]]},Dl={"orb-slider":["slider","light","scene"],"orb-wave":["wave"],"background-pack":["bg"],"crystal-controls":["ctl"]},Tn=e=>e.family==="orb"?Pl.map(([a,o,t])=>[a,o,t(e)]):Dl[e.family].map(a=>[a,Ln[a][0],Ln[a][1]]),Nl=e=>typeof e[2]=="number",Po=e=>e[5]==="%"?100:1,Fl={undo:'<path d="M9 7H4V2"/><path d="M4 7a9 9 0 1 1-1 7"/>',redo:'<path d="M15 7h5V2"/><path d="M20 7a9 9 0 1 0 1 7"/>',orbit:'<circle cx="12" cy="12" r="8"/><ellipse cx="12" cy="12" rx="8" ry="3"/>',light:'<circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',zoom:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M8.5 11h5M11 8.5v5"/>',reset:'<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>',stir:'<path d="M4 15c3-6 6 6 9 0s6-6 7 0"/>',bg:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/>',fit:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',more:'<circle cx="6" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18" cy="12" r="1"/>',plus:'<path d="M12 6v12M6 12h12"/>',minus:'<path d="M6 12h12"/>',chev:'<path d="M2 3.5l2.5 2.5L7 3.5"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',open:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v6H4V6h6"/>',dup:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',del:'<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"/>',sound:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'},St=(e,a="0 0 24 24")=>`<svg viewBox="${a}" aria-hidden="true">${Fl[e]}</svg>`,Bl=typeof navigator<"u"&&/Mac|iP/.test(navigator.platform||navigator.userAgent),$a=Bl?"\u2318":"Ctrl+",Do=!1;function Hl(){if(Do||document.getElementById("sx-css")){Do=!0;return}let e=document.createElement("style");e.id="sx-css",e.textContent=En,document.head.append(e),Do=!0}function zn({api:e,audio:a,top:o,page:t,query:s,ICON:m,flash:i,product:u,store:p}){Hl();let h=new Proxy({},{get:(c,b)=>(...k)=>u.orb?.[b]?.(...k)});function l(){return n.family==="orb"&&n.preset==="clear"&&n.sph?.base==="clear"}let f=new Set(["sph.base","sph.material.tint","sph.material.refraction","sph.material.frost","sph.material.exposure","sph.interior.amount","sph.interior.size","sph.interior.speed","sph.interior.glow","sph.light.key","sph.light.environment","sph.light.colour","sph.motion.spin","sph.motion.stir","sph.motion.speech"]),G=()=>Qi(n.sph),H=()=>({dark:!0,envBoost:n.sph.light.environment,envLevel:n.sph.light.environment,keyLevel:n.sph.light.key,exposure:Math.log2(Math.max(.05,n.sph.material.exposure))*2,left:.65,right:.55}),n;try{let c=JSON.parse(sessionStorage.getItem($n));n=c&&c.v===An?Ro(c):null}catch{n=null}if(n||(n=Ia()),s.design&&p.design(s.design)){let c=p.design(s.design);n=Ro({...structuredClone(c.draft),family:c.family}),n.designId=c.id,n.designName=c.name}else s.family&&na(s.family)&&(s.family!==n.family||s.preset&&s.preset!==n.preset)&&(n=Ia(s.family,qt.some(c=>c.id===s.preset)?s.preset:"clear"));let O=n.designId?JSON.stringify(Me(n)):null,A=[JSON.stringify(n)],F=0,E=[["voice_audition.samantha","Voice \xB7 Samantha"],["voice_audition.daniel","Voice \xB7 Daniel"],["home.samantha","Welcome narration"],...lr.map(c=>[`sfx.${c.id}`,`Sound \xB7 ${c.name}`])],C=s.sound&&E.some(c=>c[0]===s.sound)?s.sound:E[0][0];function W(){let[c,b]=C.split(".");c==="sfx"?a.playUrl(C,lr.find(k=>k.id===b).file,{from:0}):a.play(c,{voice:b,kind:"audition",from:0}),a.sfx("select")}let I=s.sound?setTimeout(()=>{I=null,W()},900):null,V=()=>{clearTimeout(I),I=null},S=a.store.on((c,b)=>{(b.voice&&!a.voiceOn||b.sounds&&!a.soundsOn)&&V()}),y="orbit",j="props",Z="material",B=!1,U={material:!0,interior:!0,light:!0,motion:!1,scene:!1,slider:!0,wave:!0,bg:!0,ctl:!0,scene_:!0},le=()=>{try{sessionStorage.setItem($n,JSON.stringify(n))}catch{}};function ge(){let c=JSON.stringify(n);c!==A[F]&&(A.splice(F+1),A.push(c),F=A.length-1,A.length>120&&(A.shift(),F--)),le(),ye()}document.body.classList.add("dark-ui","sx-on"),t.innerHTML=`
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
          <button class="sx-ib" type="button" data-zo="-1" aria-label="Zoom out" data-tip="Zoom out">${St("minus")}</button>
          <button class="sx-ib" type="button" data-zo="0" aria-label="Fit" data-tip="Fit (R)">${St("fit")}</button>
          <button class="sx-ib" type="button" data-zo="1" aria-label="Zoom in" data-tip="Zoom in">${St("plus")}</button>
        </div>
      </div>
      <button class="sx-grab" type="button" data-grab aria-label="Show or hide the controls" aria-expanded="false"><i></i></button>
      <aside class="sx-ins" aria-label="Inspector" data-ins></aside>
    </section>
    <div class="sx-modal" data-modal hidden></div>`;let me=t.querySelector(".sx"),pe=t.querySelector("[data-top]"),be=t.querySelector("[data-rail]"),Le=t.querySelector("[data-view]"),Re=t.querySelector("[data-stage]"),g=t.querySelector("[data-ins]"),v=t.querySelector("[data-modal]"),D=t.querySelector("[data-hud]"),q=t.querySelector("[data-grab]"),L=c=>{me.classList.toggle("peek",!c),q.setAttribute("aria-expanded",c)};matchMedia("(max-width: 820px)").matches&&L(!1);{let c=null;q.addEventListener("pointerdown",b=>{c=b.clientY,q.setPointerCapture(b.pointerId)}),q.addEventListener("click",b=>{b.detail===0&&L(me.classList.contains("peek"))}),q.addEventListener("pointercancel",()=>{c=null}),q.addEventListener("pointerup",b=>{if(c==null)return;let k=b.clientY-c;c=null,L(Math.abs(k)<12?me.classList.contains("peek"):k<0)}),g.addEventListener("click",b=>{b.target.closest("[data-tab],[data-chip]")&&L(!0)},!0)}let R=br(Re,n.preset,{config:n.sph}),ae=0,oe=0,ue=new Proxy(R,{get(c,b){if(l()){if(b==="rotate")return X=>{ae+=X*.01,h.setObjectYaw(ae)};if(b==="stir")return()=>h.nudge(ot(.8*(n.sph.motion.stir??1),0,1.5));if(b==="setSpeech")return X=>h.setSpeech(ot(X*(n.sph.motion.speech??1)));if(b==="resetView")return()=>{ae=0,h.setObjectYaw(0)};if(b==="canvas")return null}let k=c[b];return typeof k=="function"?k.bind(c):k}});ue.canvas?.addEventListener("pointerdown",()=>{y!=="orbit"||De||(He=!0)});let ie=()=>n.designName||(n.family==="orb"?`${Cn(n.preset).name} Orb`:na(n.family).name);function de(){pe.innerHTML=`
      <h1 class="vh">Studio</h1>
      <div class="sx-doc">
        <span class="sx-dirty" data-dirty title="Unsaved changes"></span>
        <input class="sx-name" data-name value="${ft(ie())}" aria-label="Design name" maxlength="48" spellcheck="false" data-tip="Rename">
        <select class="sx-sel" data-fam aria-label="Object">${Ht.map(b=>`<option value="${b.id}"${b.id===n.family?" selected":""}>${ft(b.name)}</option>`).join("")}</select>
        ${n.family==="orb"?`<select class="sx-sel" data-pre aria-label="Start from a version">${qt.map(b=>`<option value="${b.id}"${b.id===n.preset?" selected":""}>${ft(b.name)}</option>`).join("")}</select>`:""}
      </div>
      <span class="sx-sp"></span>
      <button class="sx-ib sx-more" type="button" data-more aria-label="More: object, version, reset" aria-expanded="false">${St("more")}</button>
      <button class="sx-ib" type="button" data-undo aria-label="Undo" data-tip="Undo (${$a}Z)">${St("undo")}</button>
      <button class="sx-ib" type="button" data-redo aria-label="Redo" data-tip="Redo (${$a}\u21E7Z)">${St("redo")}</button>
      <button class="sx-ib" type="button" data-resetall aria-label="Reset to the version" data-tip="Reset to the version">${St("reset")}</button>
      <span class="sx-sep hide-m"></span>
      <button class="sx-tb" type="button" data-save data-tip="Save to My designs (${$a}S)">Save</button>
      <button class="sx-tb pri" type="button" data-export data-tip="Export code (${$a}E)">Export</button>`,pe.querySelector("[data-fam]").addEventListener("change",b=>{let k=n.preset;n=Ia(b.target.value,k),a.sfx("press"),ve(),ge()}),pe.querySelector("[data-pre]")?.addEventListener("change",b=>Ee(b.target.value));let c=pe.querySelector("[data-name]");c.addEventListener("change",()=>{n.designName=c.value.trim().slice(0,48)||void 0,n.designId&&p.renameDesign(n.designId,ie()),c.value=ie(),le(),Pe()}),c.addEventListener("keydown",b=>{b.key==="Enter"&&c.blur()}),pe.querySelector("[data-more]").addEventListener("click",b=>{let k=me.classList.toggle("more-open");b.currentTarget.setAttribute("aria-expanded",k),a.sfx("press")}),pe.querySelector("[data-undo]").addEventListener("click",()=>Te(-1)),pe.querySelector("[data-redo]").addEventListener("click",()=>Te(1)),pe.querySelector("[data-resetall]").addEventListener("click",()=>{let b={designId:n.designId,designName:n.designName,zoom:n.zoom};n={...Ia(n.family,n.preset),...b},a.sfx("press"),ve(),ge(),i("Reset to the version\u2019s defaults.")}),pe.querySelector("[data-save]").addEventListener("click",()=>Mt()),pe.querySelector("[data-export]").addEventListener("click",()=>or()),ye()}function ye(){let c=pe.querySelector("[data-undo]"),b=pe.querySelector("[data-redo]");c&&(c.disabled=F<=0),b&&(b.disabled=F>=A.length-1),pe.querySelector("[data-dirty]")?.classList.toggle("on",JSON.stringify(Me(n))!==O)}function Te(c){let b=ot(F+c,0,A.length-1);b!==F&&(F=b,n=JSON.parse(A[b]),a.sfx("press"),le(),ve(),ye())}function Ee(c){let b={zoom:n.zoom};n={...Ia("orb",c),...b},a.sfx("press"),ue.stir(),ve(),ge()}function $e(){let c=n.family==="orb",b=[["orbit","Orbit (V) \xB7 or hold space and drag"],["light",c?"Move the key light (L)":"Move the light (L)"],["zoom","Zoom: drag up/down (Z)"]].filter(([k])=>c||k==="orbit"||k==="light"&&n.family==="orb-slider");be.innerHTML=b.map(([k,X])=>`<button class="sx-ib" type="button" data-tool="${k}" aria-pressed="${k===y}" aria-label="${X}" data-tip="${X}">${St(k)}</button>`).join("")+(c?`<hr><button class="sx-ib" type="button" data-stir aria-label="Stir" data-tip="Stir what is inside">${St("stir")}</button>
        <button class="sx-ib" type="button" data-checker aria-pressed="${B}" aria-label="Transparency grid" data-tip="Transparency grid">${St("bg")}</button>
        <button class="sx-ib" type="button" data-snap aria-label="Download PNG" data-tip="Download a PNG">${St("camera")}</button>
        <button class="sx-ib" type="button" data-speak aria-label="Test with a voice" data-tip="Test the speech pulse">${St("sound")}</button>`:""),be.querySelectorAll("[data-tool]").forEach(k=>k.addEventListener("click",()=>Se(k.dataset.tool))),be.querySelector("[data-stir]")?.addEventListener("click",()=>{ue.stir(),a.sfx("press")}),be.querySelector("[data-checker]")?.addEventListener("click",()=>{B=!B,Le.classList.toggle("checker",B),$e()}),be.querySelector("[data-snap]")?.addEventListener("click",()=>po()),be.querySelector("[data-speak]")?.addEventListener("click",()=>W())}function Se(c,b=!1){y=c,Le.className=Le.className.replace(/\bt-\w+/g,"")+` t-${c}`,Le.classList.toggle("checker",B),Re.style.pointerEvents=c==="orbit"&&!De?"":"none",b||a.sfx("press"),$e(),fe()}let Ce=(c,b)=>{let k=c*Po(b),X=b[4]*Po(b),ne=X>=1?0:X>=.1?1:X>=.01?2:3;return(+k.toFixed(ne)).toString()},ze=()=>n.family==="orb"?{sph:Ea(n.preset)}:Ia(n.family);function xe(c,b){let[k,X]=c,ne=Ot(n,k),Ae=`sx-${k.replace(/\./g,"-")}`,Je=Nl(c)?c[6]:c[3+(c[2]==="select"||c[2]==="seg"?1:0)],Nt=Ot(b,k)!==void 0&&JSON.stringify(Ot(b,k))!==JSON.stringify(ne)?" mod":"",ct=st=>`<label class="sx-lab${Nt}" for="${Ae}"${st?" data-scrub":""}${Je?` title="${ft(Je)}${st?" \u2014 drag to scrub":""}"`:""}>${ft(X)}</label>`;if(l()&&k.startsWith("sph.")&&!f.has(k))return rt().replace(/^<div class="sx-row/,'<div inert title="Not available on the real Orb yet" class="sx-row sx-off');if(k==="sph.material.dispersion"&&["chrome","porcelain","bloom"].includes(n.sph?.base))return rt().replace(/^<div class="sx-row/,'<div inert title="Opaque material: no light passes through to split" class="sx-row sx-off');return rt();function rt(){if(c[2]==="color")return`<div class="sx-row full">${ct()}<span class="sx-col"><input type="color" id="${Ae}" data-path="${k}" value="${ne}"><input class="sx-num" data-hex="${k}" value="${ne}" aria-label="${ft(X)} hex" spellcheck="false" maxlength="7"></span></div>`;if(c[2]==="select")return`<div class="sx-row full">${ct()}<select class="sx-sel" id="${Ae}" data-path="${k}">${c[3].map(([ut,Lt])=>`<option value="${ut}"${ut===ne?" selected":""}>${ft(Lt)}</option>`).join("")}</select></div>`;if(c[2]==="seg")return`<div class="sx-row full">${ct()}<span class="sx-seg" role="group" id="${Ae}">${c[3].map(([ut,Lt])=>`<button type="button" data-seg="${k}" data-v="${ut}" aria-pressed="${ut===ne}">${Lt}</button>`).join("")}</span></div>`;let[,,st,_e,Qe,pt]=c,Ze=(ne-st)/(_e-st)*100;return`<div class="sx-row">${ct(!0)}<input class="sx-rng" type="range" id="${Ae}" data-path="${k}" min="${st}" max="${_e}" step="${Qe}" value="${ne}" style="--p:${Ze}%" aria-label="${ft(X)}">
      <span class="sx-nw"><input class="sx-num" type="text" inputmode="decimal" data-num="${k}" value="${Ce(ne,c)}" aria-label="${ft(X)}${pt?` (${pt})`:""}"><i>${pt}</i></span></div>`}}let ee=()=>Tn(n).flatMap(c=>c[2]),ce=c=>ee().find(b=>b[0]===c),he=()=>matchMedia("(max-width: 820px)").matches;function Pe(){let c=g.querySelector(".sx-body")?.scrollTop??0,b=Tn(n),k=ze();b.some(ne=>ne[0]===Z)||(Z=b[0][0]);let X=[["props","Properties"],["designs","My designs"],["feedback","Feedback"]];g.innerHTML=`
      <div class="sx-tabs" role="tablist" aria-label="Inspector">${X.map(([ne,Ae])=>`<button class="sx-tab" role="tab" type="button" data-tab="${ne}" aria-selected="${ne===j}">${Ae}</button>`).join("")}</div>
      ${j==="props"?`<div class="sx-chips" role="group" aria-label="Section">${b.map(([ne,Ae])=>`<button type="button" data-chip="${ne}" aria-pressed="${ne===Z}">${Ae}</button>`).join("")}</div>`:""}
      <div class="sx-body" data-body>${j==="props"?b.map(([ne,Ae,Je])=>{let Nt=U[ne]??!0,ct=Je.filter(rt=>Ot(k,rt[0])!==void 0&&JSON.stringify(Ot(k,rt[0]))!==JSON.stringify(Ot(n,rt[0]))).length;return`<section class="sx-sec${ne===Z?"":" m-off"}" data-sec="${ne}"><button class="sx-sh" type="button" data-tog="${ne}" aria-expanded="${Nt}">${St("chev","0 0 9 9")}${Ae}<span class="n">${ct?`${ct} changed`:""}</span></button>
          <div class="sx-rows" ${Nt?"":"hidden"}>${Je.map(rt=>xe(rt,k)).join("")}
          ${(()=>{let rt=l()?Je.filter(st=>st[0].startsWith("sph.")&&!f.has(st[0])).length:0;return rt?`<p class="sx-offn">${rt} more ${rt===1?"control applies":"controls apply"} to the other versions of the Orb.</p>`:ne==="material"&&["chrome","porcelain","bloom"].includes(n.sph?.base)?'<p class="sx-offn">Dispersion applies to glass; this material is opaque.</p>':""})()}
          ${ne==="motion"?`<div class="sx-row full"><span class="sx-lab">Test sound</span><select class="sx-sel" data-snd aria-label="Sound to test">${E.map(([rt,st])=>`<option value="${rt}"${rt===C?" selected":""}>${ft(st)}</option>`).join("")}</select></div>
            <div class="sx-acts"><button class="sx-tb" type="button" data-testsnd>Play to test the pulse</button><button class="sx-tb" type="button" data-stir2>Stir</button></div>`:""}
          ${ne==="wave"?'<div class="sx-acts"><button class="sx-tb" type="button" data-trigger>Trigger a wave</button></div>':""}
          </div></section>`}).join("")+'<p class="sx-hint sx-pad">Drag a label to scrub (<span class="sx-kbd">\u21E7</span> \xD710, <span class="sx-kbd">\u2325</span> fine). Gold dots mark values changed from the version.</p>':j==="designs"?dt():at()}</div>`,g.querySelector("[data-body]").scrollTop=c,Tt()}function dt(){let c=p.designs();return`<div class="sx-pad">
      <h3 class="sx-h">My designs</h3>
      ${c.length?`<div class="sx-ds">${c.map(b=>`<article class="sx-d${b.id===n.designId?" cur":""}" data-did="${ft(b.id)}">
        ${b.thumb?`<img src="${b.thumb}" alt="">`:'<span class="ph"></span>'}
        <div><input value="${ft(b.name)}" aria-label="Design name" maxlength="48" data-dn><small>${ft(b.familyName||"")} \xB7 ${new Date(b.at).toLocaleDateString()}</small></div>
        <div class="ab"><button class="sx-ib" type="button" data-dopen aria-label="Open" data-tip="Open">${St("open")}</button><button class="sx-ib" type="button" data-ddup aria-label="Duplicate" data-tip="Duplicate">${St("dup")}</button><button class="sx-ib" type="button" data-ddel aria-label="Delete" data-tip="Delete">${St("del")}</button></div>
      </article>`).join("")}</div>`:'<p class="sx-empty">Nothing saved yet. Save keeps the design on this device; it also appears in Account \u2192 My Designs.</p>'}
      <div class="sx-acts" style="margin-bottom:16px"><button class="sx-tb pri" type="button" data-savenew>Save as new design</button>${n.designId?'<button class="sx-tb" type="button" data-new>New from version</button>':""}</div>
      ${n.family==="orb"?`<h3 class="sx-h">Start from a version</h3><div class="sx-vers">${qt.map(b=>`<button class="sx-ver" type="button" data-ver="${b.id}" aria-pressed="${b.id===n.preset&&!n.designId}" title="${ft(b.line)}">${ft(b.name)}</button>`).join("")}</div>`:""}
    </div>`}function at(){return`<div class="sx-ea">
      ${'<p class="access">Studio is in early access \u2014 free while we build it. Designs stay on this device.</p>'}
      ${dn("studio")}${Wr({tone:"dark",heading:!1})}
      <h3 class="sx-h" style="margin-top:18px">Shortcuts</h3>
      <p class="sx-hint"><span class="sx-kbd">${$a}Z</span> undo \xB7 <span class="sx-kbd">${$a}\u21E7Z</span> redo \xB7 <span class="sx-kbd">${$a}S</span> save \xB7 <span class="sx-kbd">${$a}E</span> export \xB7 <span class="sx-kbd">V</span> orbit \xB7 <span class="sx-kbd">L</span> light \xB7 <span class="sx-kbd">Z</span> zoom \xB7 <span class="sx-kbd">R</span> reset view \xB7 <span class="sx-kbd">space</span>+drag orbit</p>
    </div>`}function Tt(){g.querySelectorAll("[data-tab]").forEach(c=>c.addEventListener("click",()=>{j=c.dataset.tab,a.sfx("press"),Pe()})),g.querySelectorAll("[data-chip]").forEach(c=>c.addEventListener("click",()=>{Z=c.dataset.chip,a.sfx("press"),Pe()})),g.querySelectorAll("[data-tog]").forEach(c=>c.addEventListener("click",()=>{he()||(U[c.dataset.tog]=!(U[c.dataset.tog]??!0),a.sfx("press"),Pe())})),j==="feedback"&&(cn(g,{sfx:c=>a.sfx(c)}),Hr(g),Yr(g,{sfx:c=>a.sfx(c)})),j==="designs"&&Ke(),g.querySelectorAll("input[type=range][data-path]").forEach(c=>{c.addEventListener("input",()=>{N(c.dataset.path,+c.value),xt(c.dataset.path)}),c.addEventListener("change",()=>{ge(),Et(),a.sfx("release")})}),g.querySelectorAll("input[type=color][data-path]").forEach(c=>{c.addEventListener("input",()=>{N(c.dataset.path,c.value);let b=g.querySelector(`[data-hex="${c.dataset.path}"]`);b&&(b.value=c.value)}),c.addEventListener("change",()=>{ge(),Et()})}),g.querySelectorAll("[data-hex]").forEach(c=>{c.addEventListener("input",()=>{/^#[0-9a-f]{6}$/i.test(c.value)&&(N(c.dataset.hex,c.value.toLowerCase()),g.querySelector(`input[type=color][data-path="${c.dataset.hex}"]`).value=c.value)}),c.addEventListener("change",()=>{/^#[0-9a-f]{6}$/i.test(c.value)||(c.value=Ot(n,c.dataset.hex)),ge(),Et()})}),g.querySelectorAll("select[data-path]").forEach(c=>c.addEventListener("change",()=>{if(c.dataset.path==="sph.base"){let[b,k]=jo[c.value];n.sph.material.tint=mr(b),n.sph.material.accent=mr(k)}N(c.dataset.path,c.value),a.sfx("press"),ue.stir(),Pe(),ge()})),g.querySelectorAll("[data-seg]").forEach(c=>c.addEventListener("click",()=>{N(c.dataset.seg,c.dataset.v),a.sfx("press"),Pe(),ge()})),g.querySelectorAll("[data-num]").forEach(c=>{let b=ce(c.dataset.num);if(!b)return;let[,,k,X]=b,ne=Po(b);c.addEventListener("input",()=>{let Ae=parseFloat(c.value);Number.isFinite(Ae)&&(N(c.dataset.num,ot(Ae/ne,k,X)),Ct(c.dataset.num))}),c.addEventListener("change",()=>{xt(c.dataset.num),ge(),Et()}),c.addEventListener("keydown",Ae=>{if(Ae.key==="Enter"&&c.blur(),Ae.key==="ArrowUp"||Ae.key==="ArrowDown"){Ae.preventDefault();let Je=b[4]*(Ae.shiftKey?10:Ae.altKey?.1:1);N(c.dataset.num,ot(Ot(n,c.dataset.num)+(Ae.key==="ArrowUp"?Je:-Je),k,X)),xt(c.dataset.num),ge()}}),c.addEventListener("focus",()=>c.select())}),g.querySelectorAll("[data-scrub]").forEach(c=>{let b=c.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),k=ce(b);if(!k)return;let[,,X,ne,Ae]=k;c.addEventListener("pointerdown",Je=>{if(Je.button)return;Je.preventDefault(),c.setPointerCapture(Je.pointerId);let Nt=Je.clientX,ct=Ot(n,b),rt=(ne-X)/240,st=Qe=>{let pt=Qe.shiftKey?10:Qe.altKey?.1:1,Ze=ot(ct+(Qe.clientX-Nt)*rt*pt,X,ne);Ze=Math.round(Ze/Ae)*Ae,N(b,+Ze.toFixed(5)),xt(b)},_e=()=>{c.removeEventListener("pointermove",st),c.removeEventListener("pointerup",_e),c.removeEventListener("pointercancel",_e),ge(),Et()};c.addEventListener("pointermove",st),c.addEventListener("pointerup",_e),c.addEventListener("pointercancel",_e)})}),g.querySelector("[data-snd]")?.addEventListener("change",c=>{C=c.target.value}),g.querySelector("[data-testsnd]")?.addEventListener("click",()=>W()),g.querySelector("[data-stir2]")?.addEventListener("click",()=>ue.stir()),g.querySelector("[data-trigger]")?.addEventListener("click",()=>co())}function Ke(){g.querySelectorAll("[data-did]").forEach(c=>{let b=c.dataset.did,k=()=>p.design(b);c.querySelector("[data-dn]").addEventListener("change",X=>{let ne=X.target.value.trim()||"Untitled design";p.renameDesign(b,ne),n.designId===b&&(n.designName=ne,le(),de()),a.sfx("confirm")}),c.querySelector("[data-dopen]").addEventListener("click",()=>bt(k())),c.querySelector("[data-ddup]").addEventListener("click",()=>{let X=k();if(!X)return;if(p.designs().length>=40){i("You have 40 designs, the most this browser keeps. Delete one first.");return}let ne={...structuredClone(X),id:Date.now().toString(36),name:`${X.name} copy`.slice(0,48),at:new Date().toISOString()};p.saveDesign(ne)&&(a.sfx("confirm"),Pe())}),c.querySelector("[data-ddel]").addEventListener("click",()=>{let X=k();X&&confirm(`Delete \u201C${X.name}\u201D? This cannot be undone.`)&&(p.deleteDesign(b),n.designId===b&&(delete n.designId,O=null,le(),ye()),a.sfx("close"),Pe())})}),g.querySelector("[data-savenew]")?.addEventListener("click",()=>Mt(!0)),g.querySelector("[data-new]")?.addEventListener("click",()=>Ee(n.preset)),g.querySelectorAll("[data-ver]").forEach(c=>c.addEventListener("click",()=>Ee(c.dataset.ver)))}function bt(c){c&&(n=Ro({...structuredClone(c.draft),family:c.family}),n.designId=c.id,n.designName=c.name,O=JSON.stringify(Me(n)),a.sfx("press"),ve(),ge(),i(`Opened \u201C${c.name}\u201D.`))}function Ct(c){let b=g.querySelector(`input[type=range][data-path="${c}"]`);b&&(b.value=Ot(n,c),b.style.setProperty("--p",`${(b.value-b.min)/(b.max-b.min)*100}%`))}function xt(c){let b=g.querySelector(`[data-num="${c}"]`),k=ce(c);b&&k&&document.activeElement!==b&&(b.value=Ce(Ot(n,c),k)),Ct(c)}function Et(){let c=ze();g.querySelectorAll(".sx-lab[for]").forEach(b=>{let k=b.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),X=Ot(c,k);X!==void 0&&b.classList.toggle("mod",JSON.stringify(X)!==JSON.stringify(Ot(n,k)))}),g.querySelectorAll("[data-sec]").forEach(b=>{let k=b.querySelectorAll(".sx-lab.mod").length,X=b.querySelector(".n");X&&(X.textContent=k?`${k} changed`:"")}),ye()}function N(c,b){let k=c.split("."),X=n;for(let ne of k.slice(0,-1))X=X[ne];X[k.at(-1)]=b,se()}function se(){let c=n.family;if(c==="orb"){let b=l();for(let k of Re.children)k.style.visibility=b?"hidden":"";b?u.show(G(),H()):(R.setConfig({...n.sph,variant:n.preset}),u.hide())}else{let b=e.chamber,k=n.scene;Object.assign(b,{left:k.left,right:k.right,exposure:k.exposure,yaw:n.view.yaw*Mn,pitch:n.view.pitch*Mn,platform:!1});let X={dark:!0,envBoost:ql(.55,1.6,k.env),exposure:k.exposure,left:k.left,right:k.right};if(c==="orb-slider"){let ne=_t(fa(n.slider.preset).config);Object.assign(ne.light,{strength:n.orb.light.strength,colour:n.orb.light.colour,x:n.orb.light.x,y:n.orb.light.y}),u.show(ne,X)}else c==="orb-wave"||c==="background-pack"?u.show(_t(fa("original").config),X):u.hide();h.setView({yaw:0,pitch:0}),lt.set({strength:n.wave.strength,scale:n.wave.scale,horizon:c==="background-pack"?n.bg.horizon:.3,lamp:n.bg.lamp}),c==="orb-wave"&&lt.setExposure(n.wave.exposure),c==="background-pack"&&lt.setExposure(n.bg.exposure),Ie(),Be()}fe(),le()}function fe(){let c=Math.round(n.zoom*100);D.innerHTML=n.family==="orb"?`<b>${c}%</b><b>${{orbit:"Orbit",light:"Key light",zoom:"Zoom"}[y]}</b>${y==="light"?`<b>${Math.round(n.sph.light.angle)}\xB0 \xB7 ${Math.round(n.sph.light.height)}\xB0</b>`:""}`:""}function ve(){let c=n.family,b=t.querySelector("[data-screen]"),k=t.querySelector("[data-scap]"),X=t.querySelector("[data-kit]");Re.hidden=c!=="orb",t.querySelector("[data-zoombar]").hidden=c!=="orb",b.hidden=!(c==="orb-wave"||c==="background-pack"),k.hidden=c!=="orb-slider",X.hidden=c!=="crystal-controls",hr(),e.removeBackdrop(lt.canvas),b.hidden||(Vr(b),e.addBackdrop(lt.canvas),lt.setExposure(c==="background-pack"?n.bg.exposure:n.wave.exposure,!0)),c==="orb-slider"&&(k.innerHTML='<span class="cap-label">slide to enter</span>',k.setAttribute("role","slider"),k.tabIndex=0,k.setAttribute("aria-label","Slide to enter")),c==="crystal-controls"&&(X.innerHTML=`<div class="kit-swatch"><button class="gb primary" type="button">Start project</button><button class="gb" type="button">Secondary</button><input class="gi" placeholder="Enter text" aria-label="Example field"><select class="gsel" aria-label="Example select"><option>Select</option><option>Clear</option></select><button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><button class="gb gc" type="button" aria-label="Confirm">${m.check}</button></div>`),X.querySelector(".gsw")?.addEventListener("click",ne=>{ne.currentTarget.setAttribute("aria-checked",String(ne.currentTarget.getAttribute("aria-checked")!=="true")),a.sfx("press")}),c!=="orb"&&y==="zoom"&&(y="orbit"),de(),$e(),Pe(),se(),Se(y,!0)}let we=0;function Ie(){let c=t.querySelector("[data-scap]");if(!c||c.hidden)return;let b=n.slider,k=b.tint,X=b.tintAmount;c.style.background=`linear-gradient(180deg, ${er(k,.1+X*.35)}, ${er(k,.03+X*.2)} 50%, ${er(k,.08+X*.3)})`}function Be(){let c=t.querySelector("[data-kit]");if(!c||c.hidden)return;let b=n.ctl,k=b.depth,X=c.querySelector("style");X||(X=document.createElement("style"),c.append(X)),X.textContent=`.st-kit .gb,.st-kit .gi,.st-kit .gsel{border-radius:${b.radius}px;-webkit-backdrop-filter:blur(${b.blur}px) saturate(1.5);backdrop-filter:blur(${b.blur}px) saturate(1.5)}
      .st-kit .gb:not(.primary){background:linear-gradient(180deg,${er(b.tint,.3+b.tintAmount*.4)},${er(b.tint,.08+b.tintAmount*.3)} 50%,${er(b.tint,.25+b.tintAmount*.35)});
        box-shadow:inset 0 ${k*.3}px ${k*.2}px rgba(255,255,255,.95),inset 0 -${k*.6}px ${k}px -1px rgba(255,255,255,.75),inset 0 0 0 1px rgba(150,158,166,.18),inset 0 -${k*2}px ${k*2.8}px -${k*2}px rgba(120,128,136,.35),0 1px 1px rgba(40,44,50,.1),0 ${k*2}px ${k*4}px -${k*2}px rgba(40,44,50,.38)}`}let Oe=null,De=!1,He=!1;Le.addEventListener("pointerdown",c=>{if(c.target.closest("[data-zoombar],.st-cap,.st-kit,.st-screen"))return;let b=He;He=!1,!(n.family==="orb"&&y==="orbit"&&b&&!De)&&(Oe={x:c.clientX,y:c.clientY,lx:c.clientX,ly:c.clientY,v:{...n.view},z:n.zoom,l:{...n.sph.light},ol:{...n.orb.light}},Le.setPointerCapture(c.pointerId),Le.classList.add("grab"))}),Le.addEventListener("pointermove",c=>{if(!Oe)return;let b=c.clientX-Oe.x,k=c.clientY-Oe.y,X=De?"orbit":y;if(n.family==="orb")X==="orbit"&&ue.rotate(c.clientX-Oe.lx,c.clientY-Oe.ly),X==="light"&&(n.sph.light.angle=(Oe.l.angle+b*.5+540)%360-180,n.sph.light.height=ot(Oe.l.height-k*.35,-30,90),se(),xt("sph.light.angle"),xt("sph.light.height")),X==="zoom"&&nt(Oe.z*Math.exp(-k*.005));else{if(X==="orbit"&&(n.view.yaw=ot(Oe.v.yaw-b*.25,-60,60),n.view.pitch=ot(Oe.v.pitch+k*.2,-20,35)),X==="light"){let ne=u.pose.d||300;n.orb.light.x=ot(Oe.ol.x+b/ne*1.6,-.6,.6),n.orb.light.y=ot(Oe.ol.y-k/ne*1.6,-.8,.6),xt("orb.light.x"),xt("orb.light.y")}se()}Oe.lx=c.clientX,Oe.ly=c.clientY});let vt=1,$t=1/0,mt={want:NaN,shown:NaN};function nt(c){n.zoom=Bo(vt,c,$t).zoom,fe()}let Vt=()=>{Oe&&(Oe=null,Le.classList.remove("grab"),ge(),Et())};Le.addEventListener("pointerup",Vt),Le.addEventListener("pointercancel",Vt),Le.addEventListener("wheel",c=>{n.family==="orb"&&(c.preventDefault(),nt(n.zoom*Math.exp(-c.deltaY*.0015)),clearTimeout(Le._t),Le._t=setTimeout(le,300))},{passive:!1}),t.querySelectorAll("[data-zo]").forEach(c=>c.addEventListener("click",()=>{let b=+c.dataset.zo;nt(b?n.zoom*(b>0?1.25:.8):1),b||ue.resetView(),le(),a.sfx("press")})),Le.addEventListener("keydown",c=>{let b={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[c.key];if(b){if(c.preventDefault(),n.family==="orb"){y==="light"?(n.sph.light.angle=ot(n.sph.light.angle+b[0]*5,-180,180),n.sph.light.height=ot(n.sph.light.height-b[1]*5,-30,90),se(),Pe(),ge()):y==="zoom"?nt(n.zoom*(b[1]<0?1.1:b[1]>0?.9:1)):ue.rotate(b[0]*12,b[1]*12);return}y==="orbit"&&(n.view.yaw=ot(n.view.yaw-b[0]*5,-60,60),n.view.pitch=ot(n.view.pitch+b[1]*3,-20,35)),y==="light"&&(n.orb.light.x=ot(n.orb.light.x+b[0]*.05,-.6,.6),n.orb.light.y=ot(n.orb.light.y-b[1]*.05,-.8,.6)),se(),Pe(),ge()}});let aa=c=>c&&(c.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(c.tagName))&&!(c.type==="range"||c.type==="color");function La(c){if(!v.hidden){c.key==="Escape"&&pa();return}let b=c.metaKey||c.ctrlKey,k=c.key.toLowerCase();if(b&&k==="s"){c.preventDefault(),Mt();return}if(b&&k==="e"){c.preventDefault(),or();return}if(!aa(c.target)){if(b&&k==="z"){c.preventDefault(),Te(c.shiftKey?1:-1);return}if(b&&k==="y"){c.preventDefault(),Te(1);return}if(!(b||c.altKey)){if(c.key===" "){De||(De=!0,Le.classList.add("t-orbit"),Re.style.pointerEvents="none"),(c.target===document.body||Le.contains(c.target))&&c.preventDefault();return}k==="v"?Se("orbit"):k==="l"&&(n.family==="orb"||n.family==="orb-slider")?Se("light"):k==="z"&&n.family==="orb"?Se("zoom"):k==="r"&&(nt(1),ue.resetView(),n.family!=="orb"&&(n.view={yaw:0,pitch:0,zoom:1},se(),ge()),fe(),le())}}}function $r(c){c.key===" "&&(De=!1,Se(y))}document.addEventListener("keydown",La),document.addEventListener("keyup",$r);let Gt=t.querySelector("[data-scap]"),ra=null;Gt.addEventListener("pointerdown",c=>{c.stopPropagation(),ra={x:c.clientX,v:we},Gt.setPointerCapture(c.pointerId),a.sfx("press")}),Gt.addEventListener("pointermove",c=>{ra&&(we=ot(ra.v+(c.clientX-ra.x)/(Gt.offsetWidth-Gt.offsetHeight)))});let Mr=()=>{ra&&(ra=null,a.sfx("release"),h.nudge(.5),we>.92?(we=1,a.sfx("confirm")):we=0)};Gt.addEventListener("pointerup",Mr),Gt.addEventListener("pointercancel",Mr),Gt.addEventListener("keydown",c=>{c.key==="ArrowRight"&&(we=ot(we+.1)),c.key==="ArrowLeft"&&(we=ot(we-.1))});function co(){let c=t.querySelector("[data-screen]"),b=c.getBoundingClientRect();lt.impact(b.width/2,b.height*(1-.3)+10,n.wave.strength),h.nudge(.8),a.sfx("detent")}t.querySelector("[data-screen]").addEventListener("pointerdown",c=>{if(n.family!=="orb-wave")return;let b=c.currentTarget.getBoundingClientRect();lt.impact(c.clientX-b.left,c.clientY-b.top,n.wave.strength),a.sfx("detent")});function Me(c){let{designId:b,designName:k,zoom:X,...ne}=c;return ne}async function yt(){try{if(n.family==="orb"&&ue.canvas){let k=ue.canvas,X=Math.min(k.width,k.height),ne=document.createElement("canvas");ne.width=ne.height=240;let Ae=ne.getContext("2d");return Ae.fillStyle="#0b0c0c",Ae.fillRect(0,0,240,240),Ae.drawImage(k,(k.width-X)/2,(k.height-X)/2,X,X,0,0,240,240),ne.toDataURL("image/jpeg",.8)}let c=Dt(),b=await e.exportPNG(c,u.element||document.createElement("div"));if(b){let k=await createImageBitmap(b),X=document.createElement("canvas"),ne=360;return X.width=ne,X.height=Math.round(ne*c.h/c.w),X.getContext("2d").drawImage(k,0,0,X.width,X.height),X.toDataURL("image/jpeg",.78)}}catch{}return null}async function Mt(c=!1){let b=na(n.family),k=!c&&n.designId||Date.now().toString(36),X=c&&n.designId?`${ie()} copy`.slice(0,48):ie(),ne=await yt();p.saveDesign({id:k,name:X,family:n.family,familyName:b.name,preset:n.preset,schema:1,at:new Date().toISOString(),draft:Me(n),thumb:ne})?(n.designId=k,n.designName=X,O=JSON.stringify(Me(n)),le(),a.sfx("confirm"),i("Saved to My designs (on this device)."),de(),j==="designs"&&Pe()):i("Could not save: this browser\u2019s storage is full or unavailable.")}let ar=()=>({...n.sph,variant:n.preset}),rr=()=>vn(ar(),Ea(n.preset));function _a(c=Il){let b=rr(),k=360;return`<div data-light-orb data-variant="${n.preset}"${b==="e30"?"":` data-config="${b}"`} style="width:${k}px;height:${k}px"></div>
<script type="module" src="${c}"><\/script>`}function Lr(){let c=n.sph.scene,b=c.background==="none"?"#0b0c0c":c.colour;return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${ft(ie())} \xB7 The Light Orb</title>
<style>
  html,body{margin:0;height:100%;background:${b}}
  body{display:grid;place-items:center}
  [data-light-orb]{width:min(82vmin,560px)!important;height:min(82vmin,560px)!important}
</style>
</head>
<body>
${_a()}
</body>
</html>
`}function Ut(){return n.family==="orb"?JSON.stringify({product:"orb",schema:1,name:ie(),variant:n.preset,config:ar(),changed:Jr(Ea(n.preset),ar()),embed:{attribute:"data-config",value:rr()}},null,2):JSON.stringify({schema:1,product:n.family,name:ie(),config:n[{"orb-slider":"slider","orb-wave":"wave","background-pack":"bg","crystal-controls":"ctl"}[n.family]],scene:n.scene,note:"Configuration for The Light Orb renderer. Development export; not a licensed product package."},null,2)}let Xe="embed",zt=()=>ie().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"light-orb";function or(){n.family!=="orb"&&(Xe="json"),ir(),v.hidden=!1,a.sfx("open"),v.querySelector("[data-xtab][aria-selected=true]")?.focus()}function pa(){v.hidden=!0,a.sfx("close"),Le.focus({preventScroll:!0})}function ir(){let c=n.family==="orb",b=c?[["embed","Embed code"],["html","HTML page"],["json","JSON"]]:[["json","JSON"]],k={embed:[_a(),"Paste into any page. The data-config attribute holds your design (only what differs from the version), so it looks and moves exactly like this.",[["copy","Copy code","pri"],["dlsnip","Download snippet"]]],html:[Lr(),"A complete page with your Orb, ready to open or upload.",[["dlhtml","Download .html","pri"],["copy","Copy"]]],json:[Ut(),c?"The full configuration. The embed accepts it as data-config too (plain JSON or base64).":"The configuration of this object.",[["dljson","Download .json","pri"],["copy","Copy"]]]}[Xe];v.innerHTML=`<div class="sx-dlg" role="dialog" aria-modal="true" aria-labelledby="sx-xt">
      <div class="sx-dh"><h2 id="sx-xt">Export \xB7 ${ft(ie())}</h2><button class="sx-ib" type="button" data-xclose aria-label="Close">${St("close")}</button></div>
      <div class="sx-tabs" role="tablist">${b.map(([ne,Ae])=>`<button class="sx-tab" role="tab" type="button" data-xtab="${ne}" aria-selected="${ne===Xe}">${Ae}</button>`).join("")}</div>
      <div class="sx-db"><p>${k[1]}</p><textarea class="sx-code" readonly spellcheck="false" aria-label="Code">${ft(k[0])}</textarea>
        <div class="sx-acts">${k[2].map(([ne,Ae,Je])=>`<button class="sx-tb${Je?" "+Je:""}" type="button" data-xa="${ne}">${Ae}</button>`).join("")}${c?'<button class="sx-tb" type="button" data-xa="png">Download PNG</button>':""}</div></div></div>`,v.querySelector("[data-xclose]").addEventListener("click",pa),v.onclick=ne=>{ne.target===v&&pa()},v.querySelectorAll("[data-xtab]").forEach(ne=>ne.addEventListener("click",()=>{Xe=ne.dataset.xtab,a.sfx("press"),ir(),v.querySelector(`[data-xtab="${Xe}"]`).focus()}));let X=k[0];v.querySelectorAll("[data-xa]").forEach(ne=>ne.addEventListener("click",async()=>{let Ae=ne.dataset.xa;if(Ae==="copy"){let Je=!1;try{await navigator.clipboard.writeText(X),Je=!0}catch{v.querySelector("textarea").select(),Je=document.execCommand?.("copy")}ne.textContent=Je?"Copied":"Select and copy",a.sfx("confirm"),setTimeout(()=>{ne.textContent=Ae==="copy"&&Xe==="embed"?"Copy code":"Copy"},1600)}Ae==="dlsnip"&&va(new Blob([X],{type:"text/plain"}),`${zt()}-embed.txt`),Ae==="dlhtml"&&va(new Blob([X],{type:"text/html"}),`${zt()}.html`),Ae==="dljson"&&va(new Blob([X],{type:"application/json"}),`${zt()}.json`),Ae==="png"&&po()}))}async function po(){if(n.family==="orb"&&ue.canvas){ue.canvas.toBlob(c=>{c&&(va(c,`${zt()}.png`),i("Downloaded a PNG of the Orb."))});return}if(u.element){let c=await e.exportPNG(Dt(),u.element);c&&va(c,`${zt()}.png`)}}function va(c,b){let k=document.createElement("a");k.href=URL.createObjectURL(c),k.download=b,document.body.append(k),k.click(),setTimeout(()=>{URL.revokeObjectURL(k.href),k.remove()},1e3),a.sfx("confirm")}function Dt(){let c=Le.getBoundingClientRect();return{x:c.left,y:c.top,w:c.width,h:c.height}}function Ta(){let c=document.querySelector(".hd"),b=c?Math.round(c.getBoundingClientRect().bottom):72;me._hh!==b&&(me._hh=b,me.style.setProperty("--sx-top",`${Math.max(0,b)}px`));let k=Dt(),X=n.family,ne=k.x+k.w/2,Ae=t.querySelector("[data-screen]"),Je=t.querySelector("[data-scap]"),Nt=t.querySelector("[data-kit]"),ct=innerHeight,rt={warm:0,room:"chamber",stage:k,emission:1,orb:{x:50,y:ct-52,d:46,vis:0}},st=_e=>({...rt,product:_e,grounds:_e&&_e.ground?[{y:_e.ground,x:_e.x,d:_e.d}]:[]});if(X==="orb"){let _e=Math.min(k.w-48,k.h-48)*.74,Qe=qr=>{let ga=qr?.getBoundingClientRect();return ga&&ga.width>0&&ga.height>0?{l:ga.left,t:ga.top,r:ga.right,b:ga.bottom}:null},pt=[be,t.querySelector("[data-zoombar]"),D,q,g,pe].map(Qe).filter(Boolean),Ze=Ol({l:k.x,t:k.y,r:k.x+k.w,b:k.y+k.h},pt,innerWidth<=820?16:24,Cl(n.sph.scene.size)),ut=k.w>80&&k.h>80,Lt=ut?jl(mt,n.zoom,_e,Ze):Bo(_e,n.zoom,Ze);ut&&(vt=_e,$t=Ze,Lt.zoom!==n.zoom&&(n.zoom=Lt.zoom,fe()));let ua=Math.floor(Lt.size);if(Re._s!==ua&&(Re._s=ua,Re.style.width=Re.style.height=`${ua}px`),ue.setSpeech(a.playing?a.energy():0),!l())return st(null);let oa=performance.now()/1e3,Tr=oe?Math.min(.05,oa-oe):0;oe=oa,Oe||(ae+=(n.sph.motion.spin??0)*Math.PI*2*Tr*.25,h.setObjectYaw(ae));let qa=Re.getBoundingClientRect();return st({x:qa.left+qa.width/2,y:qa.top+qa.height/2,d:qa.width*.9*(n.sph.scene.size??1),vis:1,snap:!0})}if(X==="orb-slider"){let _e=n.slider,Qe=Math.min(1,(k.w-40)/_e.length),pt=_e.length*Qe,Ze=_e.height*Qe;Object.assign(Je.style,{left:`${ne-pt/2}px`,top:`${k.y+k.h*.5-Ze/2}px`,width:`${pt}px`,height:`${Ze}px`});let ut=Ze*.84,Lt=(Ze-ut)/2;return st({x:ne-pt/2+Lt+ut/2+we*(pt-Ze),y:k.y+k.h*.5,d:ut,vis:1,snap:!0})}if(X==="orb-wave"||X==="background-pack"){let _e=Math.min(k.w*.86,900),Qe=Math.min(k.h*.72,_e*.62);Object.assign(Ae.style,{left:`${ne-_e/2}px`,top:`${k.y+k.h*.5-Qe/2}px`,width:`${_e}px`,height:`${Qe}px`});let pt=X==="background-pack"?n.bg.horizon:.3,Ze=Math.min(90,_e*.12),ut=Qe*(1-pt)+Ze*.1-Ze/2;return lt.setOrb({x:_e/2,y:ut,d:Ze}),st({x:ne,y:k.y+k.h*.5-Qe/2+ut,d:Ze,vis:1})}return X==="crystal-controls"&&Object.assign(Nt.style,{left:`${k.x+20}px`,top:`${k.y+20}px`,width:`${k.w-40}px`,height:`${k.h-40}px`}),st(null)}return ve(),{frame:Ta,reapply:()=>se(),voiceResponse:()=>n.family==="orb"?ot(n.sph.motion.speech*.6):.6,leave(){V(),S(),document.removeEventListener("keydown",La),document.removeEventListener("keyup",$r),ue.dispose(),hr(),e.removeBackdrop(lt.canvas),document.body.classList.remove("dark-ui","sx-on"),u.hide(),Object.assign(e.chamber,{yaw:0,pitch:0})},get draft(){return n}}}function er(e,a){let o=parseInt(e.slice(1),16);return`rgba(${o>>16&255},${o>>8&255},${o&255},${a.toFixed(3)})`}function On(e){let a=null,o=null,t=null,s={},m={emission:1},i=document.createElement("div");i.className="x-product",i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:31",document.body.append(i);let u={x:-999,y:-999,d:100,vis:0},p={x:-999,y:-999,d:100,vis:0,vx:0,vy:0,vd:0},h=!0,l=!1,f=O=>{O.persisted||G()};addEventListener("pagehide",f);function G(){l||(l=!0,h=!0,removeEventListener("pagehide",f),a?.dispose(),a=null,t=null,s={},i.remove())}function H(){return l||a||o||(o=Si({container:i,diameter:240,driven:!0,background:Kt().orbBackground}).then(O=>{if(l){O.dispose(),o=null;return}return a=O,o=null,O.attachPointer(document.createElement("div"))(),O.setBackdrop((A,F)=>e.drawBackdrop(A,F,p)),O.setVisibility(0),O.tick(performance.now()),t&&n(),O}).catch(()=>{o=null})),o}function n(){a&&t&&(m=Fr(a,t,s),a.setEmission(Math.min(1.4,m.emission)))}return{dispose:G,get orb(){return a},get element(){return a?.element},get output(){return m},show(O,A={}){l||(t=_t(O),s=A,h=!1,H(),n())},update(O,A=s){l||(t=_t(O),s=A,n())},reapply(){l||n()},hide(){h=!0,a&&(a.setVisibility(0),a.setView({yaw:0,pitch:0}),a.setObjectYaw(0),a.setSpeech(0),a.tick(performance.now())),p.vis=0,p.x=-999},attachPointer(O){return a?a.attachPointer(O,{range:"volume"}):(H()?.then(A=>A?.attachPointer(O,{range:"volume"})),null)},frame(O){if(!a)return;if(!O||h){(p.vis>0||a.element.style.visibility!=="hidden")&&(p.vis=0,a.setVisibility(0),a.tick(performance.now()));return}let A=1/60,F=9;if(O.snap||p.x<-900)Object.assign(p,{x:O.x,y:O.y,d:O.d,vx:0,vy:0,vd:0});else for(let E of["x","y","d"]){let C="v"+E;p[C]+=(F*F*(O[E]-p[E])-2*F*p[C])*A,p[E]+=p[C]*A}p.vis+=((O.vis??1)-p.vis)*.2,a.holdRaster(Math.ceil(Math.max(p.d,O.d,120)*1.06)),a.setPose({x:p.x,y:p.y,diameter:p.d}),a.setVisibility(p.vis),a.tick(performance.now())},pose:p}}var Ho=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null,Wo=!!Ho;function jn({onresult:e,onend:a,onerror:o,lang:t}){if(!Ho)return o?.("unsupported"),null;let s=new Ho;s.lang=t||navigator.language||"en-US",s.interimResults=!0,s.maxAlternatives=1,s.continuous=!1;let m="",i="";s.onresult=u=>{i=[...u.results].map(p=>p[0].transcript).join(" "),u.results[u.results.length-1].isFinal&&(m=i),e?.(i,!!m)},s.onerror=u=>o?.(u.error),s.onend=()=>a?.(m||i);try{s.start()}catch{return o?.("busy"),null}return s}var _o=e=>String(e).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),da=(e,...a)=>a.some(o=>new RegExp(`\\b${o}\\b`).test(e)),_l={home:["home","start","beginning","inicio","principio","portada"],products:[...Va[0].words,"productos","producto","tienda","objetos"],templates:[...Va[1].words,"plantillas","plantilla","composiciones"],studio:[...Va[2].words,"estudio","editar","personalizar","disenar"],sound:[...Va[3].words,"sonido","sonidos","voces","escuchar","audio"],membership:["membership","member","plans","plan","pricing","price","prices","membresia","miembro","planes","precio","precios","cuesta","cost"],account:["account","profile","downloads","cuenta","perfil","descargas"],signin:["sign in","log in","login","iniciar sesion","entrar"]},Wl={home:"#/",membership:"#/membership",account:"#/account",signin:"#/signin"},Yl={"orb-slider":["slider","deslizador"],"orb-wave":["wave","ola","onda","ripple"],"background-pack":["background","backgrounds","fondo","fondos"],"crystal-controls":["controls","buttons","controles","botones","crystal"]},Yt=(e,a={})=>({say:e.text,id:e.id,lang:e.lang??"en",...a}),Vl=/\b(hola|gracias|buenas|ayuda|ayudame|quien|que|como|donde|cual|quiero|puedes|llevame|ensename|muestrame|recomiendas|recomienda|textura|texturas|materiales|precio|cuanto|plantillas|productos|sonido|estudio|por favor|si|vale|el|la|los|las|una|para|con|del|mi|me)\b/g,Gl=/\b(hello|hi|hey|thanks|thank|help|who|what|which|how|where|want|can|could|show|take|recommend|texture|textures|materials|price|the|a|an|is|are|you|me|my|please|yes|for|with|of)\b/g;function Qr(e,a="en"){if(/[ñ¿¡]/i.test(String(e)))return"es";let o=_o(e),t=o.match(Vl)?.length??0,s=o.match(Gl)?.length??0;return t>s?"es":s>t?"en":a}function In(e,{here:a,presentation:o,lang:t="en"}){let s=_o(e),m=Qr(e,t),i=p=>Ua(p,m);if(!s)return Yt(i("reply.missed"),{intent:"fallback"});if(s.split(" ").length<=3&&da(s,"stop","quiet","silence","shh","para","calla","callate","silencio","basta"))return{say:"",stop:!0,command:!0};if(da(s,"where am i","where are we","donde estoy","donde estamos","que es esto","what is this","what is here","que hay aqui"))return Yt(o(m),{intent:"where"});if(da(s,"help","what can you do","what can i do","ayuda","ayudame","que puedes hacer","que puedo hacer"))return Yt(i("reply.help"),{intent:"help"});if(da(s,"thank you","thanks","gracias"))return Yt(i("reply.thanks"),{intent:"thanks"});if(da(s,"who are you","what are you","quien eres","que eres","como te llamas","your name"))return Yt(i("reply.who"),{intent:"who"});if(da(s,"back","go back","atras","volver","vuelve"))return Yt(i("reply.back"),{back:!0,command:!0});for(let[p,h]of Object.entries(Yl))if(da(s,...h)){let l=Ht.find(f=>f.id===p&&f.published!==!1);if(l)return Yt(Vi(l),{go:`#/products/${p}`,quiet:!0,command:!0})}let u=wt.find(p=>s.includes(_o(p.name)));if(u)return Yt(Gi(u),{go:`#/templates/${u.id}`,quiet:!0,command:!0});for(let[p,h]of Object.entries(_l))if(da(s,...h)){if(p===a){let l=o(m);return Yt(m==="es"?{text:`Ya estamos aqu\xED. ${l.text}`,lang:"es"}:Yi(l),{command:!0})}return{go:Wl[p]??`#/${p}`,command:!0}}return s.split(" ").length<=5&&da(s,"hello","hi","hey","hola","buenas","buenos dias","buenas tardes","buenas noches","good morning","good evening")?Yt(i("reply.intro"),{intent:"hello"}):da(s,"the orb","orb","esfera","la orb","bola")?Yt(m==="es"?{text:"Aqu\xED est\xE1 la Orb. Prueba sus veinte versiones.",lang:"es"}:Ui(),{go:`#/products/${Ht[0].id}`,quiet:!0}):Yt(i("reply.unknown"),{intent:"fallback"})}var Rn=()=>!!Or,Ul=/^#\/(products(\/[a-z0-9-]+(\?variant=[a-z0-9-]+)?)?|templates(\/[a-z0-9-]+)?|studio|sound|membership|account|licence)?$/;async function Pn(e,a,{timeout:o=8e3}={}){if(!Or)throw new Error("disabled");let t=new AbortController,s=setTimeout(()=>t.abort(),o);try{let m=await fetch(Or,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({messages:e,page:a}),signal:t.signal});if(!m.ok)throw new Error(`http ${m.status}`);let i=await m.json(),u=typeof i.say=="string"?i.say.trim().slice(0,600):"";if(!u)throw new Error("empty");return{say:u,go:typeof i.go=="string"&&Ul.test(i.go)?i.go:void 0}}finally{clearTimeout(s)}}var Dn={},Nn={member:""},Fn="",Bn=e=>"",Yo=e=>(location.assign(e),!0),Qt={get enabled(){return!1},canCheckout:e=>!!e.length&&e.every(a=>Bn(a.id)),canSubscribe:e=>!!!1,canRestore:()=>!!!1,checkout(e){return Qt.canCheckout(e)?(Yo(Bn(e[0].id)),e[0].id):null},subscribe(e){return Qt.canSubscribe(e)?Yo(Nn[e]):!1},restore(){return Qt.canRestore()?Yo(Fn):!1}};var At={saved:"lightorb:saved",designs:"lightorb:designs",profile:"lightorb:profile"},ba=(e,a)=>{try{return JSON.parse(localStorage.getItem(e))??a}catch{return a}},xr=(e,a)=>{try{return localStorage.setItem(e,JSON.stringify(a)),!0}catch{return!1}},it={saved:()=>ba(At.saved,[]),isSaved:(e,a)=>ba(At.saved,[]).some(o=>o.type===e&&o.id===a),toggleSaved(e,a,o,t){let s=ba(At.saved,[]),m=s.findIndex(i=>i.type===e&&i.id===a);return m>=0?s.splice(m,1):s.unshift({type:e,id:a,name:o,href:t,at:new Date().toISOString()}),xr(At.saved,s),m<0},designs:()=>ba(At.designs,[]),design:e=>ba(At.designs,[]).find(a=>a.id===e),saveDesign(e){let a=ba(At.designs,[]),o=a.findIndex(t=>t.id===e.id);return o>=0?a[o]=e:a.unshift(e),xr(At.designs,a.slice(0,40))},renameDesign(e,a){let o=ba(At.designs,[]),t=o.find(s=>s.id===e);t&&(t.name=a,xr(At.designs,o))},deleteDesign(e){xr(At.designs,ba(At.designs,[]).filter(a=>a.id!==e))},profile:()=>ba(At.profile,null),setProfile:e=>xr(At.profile,e)},Hn=[["profile","Profile"],["designs","My Designs"],["saved","Saved"],["downloads","Downloads"]],Kl='<p class="note">Your designs and saved items are kept in this browser. Accounts that sync across devices come later; your early-access email will carry over.</p>';function Ra(e,a,o="profile"){let{esc:t,audio:s}=a;Hn.some(u=>u[0]===o)||(o="profile");let m=it.profile();e.innerHTML=`
    <section class="dest acct">
      <header class="dh"><p class="kicker">Account${m?.email?" \xB7 Early access":""}</p><h1>${m?.name?t(m.name):"Your space"}</h1>${Kl}</header>
      <nav class="segbar acct-tabs" aria-label="Account">${Hn.map(([u,p])=>`<a class="pill" href="#/account/${u}" ${u===o?'aria-current="page" aria-pressed="true"':""}>${p}</a>`).join("")}</nav>
      <div class="acct-body" data-body></div>
      ${cr()}
    </section>${a.footer()}`;let i=e.querySelector("[data-body]");if(o==="profile"){let u=m?.email;i.innerHTML=`${u?"":`<div class="joincta glass"><h2>Join early access</h2><p>Free. Leave your email and we tell you when new pieces and Studio updates open. Your designs stay on this device either way.</p>
        <div class="acts eq"><a class="gb small primary" href="#/signup">Join early access</a><a class="gb small" href="#/signin">I already joined</a></div></div>`}
      <form class="form" data-prof>
        <label class="fl"><span>Display name</span><input class="gi" name="name" value="${t(m?.name||"")}" placeholder="How the site greets you" maxlength="40" autocomplete="name"></label>
        <div class="acts"><button class="gb primary" type="submit">Save on this device</button>${m?'<button class="gb" type="button" data-forget>Sign out on this device</button>':""}</div>
        <p class="note" data-profmsg role="status" aria-live="polite"></p>
      </form>
      <div class="kv"><span>Email</span><b>${u?t(m.email):"Not joined yet"}</b>${m?.joined?`<span>Joined</span><b>${new Date(m.joined).toLocaleDateString()}</b>`:""}<span>Plan</span><b>${"Early access \xB7 free"}</b><span>Sound</span><b>${s.prefs.master?"On":"Off"}</b><span>Narration</span><b>${s.prefs.guide?"On":"Off"}</b><span>Guide voice</span><b><a href="#/sound">${t(sa(s.prefs.voice).name)}</a></b></div>`,i.querySelector("[data-prof]").addEventListener("submit",p=>{p.preventDefault();let h=p.target.name.value.trim(),l={...it.profile()??{},name:h};h||delete l.name,it.setProfile(Object.keys(l).length?l:null),s.sfx("confirm"),Ra(e,a,"profile"),e.querySelector("[data-profmsg]").textContent="Saved on this device."}),i.querySelector("[data-prof] .gi").addEventListener("input",p=>{p.isTrusted&&s.sfx("type")}),i.querySelector("[data-forget]")?.addEventListener("click",()=>{if(confirm("Forget your name and email on this browser? Your designs and saved items stay.")){try{localStorage.removeItem(At.profile)}catch{}Ra(e,a,"profile")}})}if(o==="designs"){let u=it.designs();i.innerHTML=u.length?`<div class="dgrid">${u.map(p=>`<article class="dc" data-d="${p.id}">
        <a class="dc-img" href="#/studio?design=${p.id}" aria-label="Open ${t(p.name)} in Studio">${p.thumb?`<img src="${p.thumb}" alt="">`:""}</a>
        <input class="dc-n gi" value="${t(p.name)}" aria-label="Design name" maxlength="48">
        <p class="note">${t(p.familyName)} \xB7 ${new Date(p.at).toLocaleDateString()}</p>
        <div class="acts"><a class="gb small primary" href="#/studio?design=${p.id}">Open in Studio</a><button class="gb small" type="button" data-dup>Duplicate</button><button class="gb small" type="button" data-del>Delete</button></div></article>`).join("")}</div>`:'<div class="empty"><h2>No designs yet</h2><p>Designs you save in Studio appear here, with a picture of each one.</p><a class="gb primary" href="#/studio">Open Studio</a></div>',i.querySelectorAll("[data-d]").forEach(p=>{let h=p.dataset.d,l=p.querySelector(".dc-n");l.addEventListener("change",()=>{it.renameDesign(h,l.value.trim()||"Untitled design"),s.sfx("confirm")}),l.addEventListener("input",f=>{f.isTrusted&&s.sfx("type")}),p.querySelector("[data-dup]").addEventListener("click",()=>{let f=it.designs().find(H=>H.id===h);if(!f)return;if(it.designs().length>=40){let H=p.querySelector("[data-dup]");H.textContent="Limit of 40 \u2014 delete one first",H.disabled=!0;return}let G={...structuredClone(f),id:Date.now().toString(36),name:`${f.name} copy`.slice(0,48),at:new Date().toISOString()};it.saveDesign(G)&&(s.sfx("confirm"),Ra(e,a,"designs"))}),p.querySelector("[data-del]").addEventListener("click",()=>{confirm(`Delete \u201C${l.value}\u201D? This cannot be undone.`)&&(it.deleteDesign(h),s.sfx("close"),Ra(e,a,"designs"))})})}if(o==="saved"){let u=it.saved();i.innerHTML=u.length?`<ul class="slist">${u.map((p,h)=>`<li><span class="kicker">${p.type}</span><a href="${p.href}">${t(p.name)}</a><button class="pill" type="button" data-rm="${h}">Remove</button></li>`).join("")}</ul>`:'<div class="empty"><h2>Nothing saved yet</h2><p>Save products, templates and sounds to find them here.</p><a class="gb primary" href="#/products">Explore products</a></div>',i.querySelectorAll("[data-rm]").forEach(p=>p.addEventListener("click",()=>{let h=u[+p.dataset.rm];it.toggleSaved(h.type,h.id),s.sfx("close"),Ra(e,a,"saved")}))}o==="downloads"&&(i.innerHTML=la?'<div class="empty"><h2>Nothing to buy right now</h2><p>During early access there is nothing to buy: explore every piece, request a piece\u2019s source code from its page, and export your own versions from Studio \u2014 exports save directly to your computer.</p><div class="acts eq"><a class="gb primary" href="#/products/orb">Get The Orb</a><a class="gb" href="#/studio">Open Studio</a></div></div>':'<div class="empty"><h2>Everything is free right now</h2><p>During early access there is nothing to buy: take The Orb with its embed code from its product page, and export your own versions from Studio \u2014 exports save directly to your computer.</p><div class="acts eq"><a class="gb primary" href="#/products/orb">Get The Orb</a><a class="gb" href="#/studio">Open Studio</a></div></div>',i.querySelector("[data-restore]")?.addEventListener("click",()=>Qt.restore()))}function Vo(e,a,o){let t=o==="up",s=it.profile();e.innerHTML=`
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
      ${cr()}
    </section>${a.footer()}`;let m=e.querySelector("[data-sign]");m.addEventListener("submit",async i=>{i.preventDefault();let u=m.querySelector("[data-signmsg]"),p=m.querySelector("button[type=submit]"),h=m.email.value.trim();if(!Jt(h)){u.textContent="Please enter a valid email address.",m.email.focus();return}p.disabled=!0,p.setAttribute("aria-busy","true");let l=await Ao({email:h,name:m.name?.value,source:"signup"});if(!l.ok){u.textContent=l.error,p.disabled=!1,p.removeAttribute("aria-busy");return}a.audio.sfx("confirm");let f=document.createElement("div");f.innerHTML=Co(h);let G=f.firstElementChild;m.replaceWith(G),G.focus({preventScroll:!0})})}function _n(e,a){let o=zi,t=it.profile(),s=o.plans.map(m=>`<article class="plan soon"><p class="kicker">After launch \xB7 preview</p><h2>${m.name}</h2><p>${m.line}</p><ul>${m.points.map(i=>`<li>${i}</li>`).join("")}</ul></article>`).join("");e.innerHTML=`
    <section class="dest memb">
      ${la?'<header class="dh"><p class="kicker">Membership</p><h1>Free to explore, while it takes shape</h1><p class="dh-l">Studio and the pieces are open to try while The Light Orb is being built. Source code is available on request, piece by piece. Membership is not open yet.</p></header>':'<header class="dh"><p class="kicker">Membership</p><h1>Early access is free</h1><p class="dh-l">Everything is open while we build it: Studio, The Orb with its embed code, and each piece as it arrives. What you take now stays free to use. Paid plans come later.</p></header>'}
      <div class="memb-sl glass">${Wr()}</div>
      ${la?`<article class="plan em now"><p class="kicker">Current plan</p><h2>Early access</h2><p>Everything on the site is open to explore, for everyone.</p>
        <ul><li>Studio: shape light, material and movement; save and export your designs</li><li>The Orb in twenty versions</li><li>New pieces as they open</li><li>Source code on request, piece by piece</li></ul>`:`<article class="plan em now"><p class="kicker">Current plan</p><h2>Early access \u2014 free</h2><p>Everything on the site, for everyone.</p>
        <ul><li>Studio: shape light, material and movement; save and export your designs</li><li>The Orb in twenty versions, with its embed code</li><li>New pieces as they open, free while in early access</li></ul>`}
        <div class="acts eq">${t?.email?'<span class="pill" aria-disabled="true">You\u2019re in</span>':'<a class="gb primary" href="#/signup">Join early access</a>'}<a class="gb" href="#/studio">Open Studio</a></div></article>
      <h2 class="plans-h">Plans after launch</h2><p class="note plans-n">A preview of how The Light Orb will work after early access. Prices are not set yet.</p>
      <div class="plans">${s}</div>
      ${cr()}
    </section>${a.footer()}`,e.querySelectorAll("[data-join]").forEach(m=>m.addEventListener("click",()=>Qt.subscribe(m.dataset.join))),Yr(e,{sfx:m=>a.audio?.sfx?.(m)})}var Xl=`<svg class="wm-o" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><defs><mask id="wm-counter"><rect width="100" height="100" fill="#fff"/>
  <path fill="#000" d="M49 9C31 9 23 29 23 50c0 24 12 42 30 42 15 0 23-9 23-20 0-9-7-12-11-21-4-9-2-19 0-27 1-9-5-15-16-15z"/></mask></defs>
  <circle cx="50" cy="50" r="46" fill="currentColor" mask="url(#wm-counter)"/></svg>`,Go=`<span class="wm-t">The Light</span>${Xl}<span class="wm-t wm-rb">rb</span>`;var Yn="lightorb:cart",eo=()=>{try{return JSON.parse(localStorage.getItem(Yn))??[]}catch{return[]}},Wn=e=>{try{localStorage.setItem(Yn,JSON.stringify(e))}catch{}Uo.forEach(a=>a(e))},Uo=new Set,Pt={items:eo,has:e=>eo().some(a=>a.id===e),add(e){let a=eo();a.some(o=>o.id===e.id)||(a.push({...e,at:new Date().toISOString()}),Wn(a))},remove(e){Wn(eo().filter(a=>a.id!==e))},toggle(e){return Pt.has(e.id)?(Pt.remove(e.id),!1):(Pt.add(e),!0)},on(e){return Uo.add(e),()=>Uo.delete(e)}};var vr="Carla Tres Garc\xEDa",Vn="39934017Z",Gn="trescarla@gmail.com",Jl="26 October 2026",Un="Avenida Duque de Loul\xE9 91, Lisboa, Portugal",Ma=`<a href="mailto:${Gn}">${Gn}</a>`,Ql={privacy:{kicker:"Privacy",title:"Privacy",lede:"What this site collects, why, and what you can ask for. Short version: very little, and nothing is sold.",body:`
    <h2>Who is responsible</h2>
    <p>The Light Orb is run by ${vr} (NIF ${Vn}), a sole trader (the data controller). Address: ${Un}. Contact: ${Ma}.</p>
    <h2>Visiting the site</h2>
    <p>We count visits with GoatCounter, a privacy-friendly analytics service that sets no cookies and does not track you across sites. It records the page address, referrer, browser type, screen size and an approximate country, without storing your IP address. If your browser sends Do Not Track or Global Privacy Control, nothing is counted at all. Legal basis: our legitimate interest in knowing which pages are used.</p>
    <h2>Early access and the waitlist</h2>
    <p>If you join early access (or the waitlist) we keep your email address, the name you give if any, the date, where you signed up (for example "footer") and your browser language \u2014 nothing else. It is stored in Cloudflare Workers KV, the owner receives one notification email about each new sign-up (sent through Resend), and it is used only to tell you when pieces and Studio updates open. Your display name, designs and saved items stay in your browser. Legal basis: your consent, which you can withdraw at any time by writing to ${Ma}; we then delete your address.</p>
    <h2>Web design inquiries</h2>
    <p>If you send a project through the Web Design form, what you write (your name, email, project details and any optional answers) and the time of sending are delivered as one email to ${vr}, sent through Resend from our Cloudflare Worker. It is used only to reply to you and discuss your project; it is not added to any mailing list. The Worker does not store the message itself, only a random submission code for one day so the same message is not sent twice. Legal basis: steps you ask us to take before a possible contract. You can ask for the email to be deleted at any time by writing to ${Ma}.</p>
    <h2>Requesting code</h2>
    <p>If you use Request Code on a product we keep your name, email, the product and version you asked about, what you wrote about its use (if anything), your browser language and the time. It is stored in Cloudflare Workers KV before anything else happens, so the request is not lost if an email fails, and it is sent as one email to ${vr} through Resend. It is used only to answer that request; it is not added to any mailing list. Legal basis: steps you ask us to take before a possible agreement. It is kept no longer than two years, or less if you ask us to delete it by writing to ${Ma}.</p>
    <h2>Studio Membership list</h2>
    <p>If you join the Studio Membership list we keep your email address, the date, your browser language, the version of the consent you ticked and a random code that lets you leave. It is kept apart from every other list and used only to email you when Studio Membership opens. You receive a confirmation email (sent through Resend) with a link to leave; leaving removes your address from this list only. Legal basis: your consent, which you can withdraw at any time through that link or by writing to ${Ma}. It is kept until Studio Membership opens and the announcement is sent, and no longer than two years.</p>
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
    <p>Under the GDPR you can ask for access, correction, deletion, restriction, portability, or object to processing, and withdraw consent, by writing to ${Ma}. You can also complain to the Spanish Data Protection Agency (AEPD, aepd.es).</p>`},terms:{kicker:"Terms",title:"Terms of use",lede:"The rules for using this website.",body:`
    <h2>Who we are</h2>
    <p>This website is run by ${vr} (NIF ${Vn}), a sole trader. Address: ${Un}. Contact: ${Ma}.</p>
    <h2>Using the site</h2>
    <p>You may browse the site, try the previews, and use Studio and the guide Orb for your own personal or professional exploration. Please do not misuse it: no attempts to break, overload or scrape it, and no unlawful or abusive use of the guide Orb.</p>
    <h2>The guide Orb</h2>
    <p>The Orb's replies are generated automatically and may be incomplete or wrong. They are not professional advice and do not bind us; prices and terms are only those shown on the site.</p>
    <h2>Content and pieces</h2>
    <p>The design, text, images, sounds and code of this site belong to ${vr} unless stated otherwise. Using the free Orb and any piece you obtain is governed by the <a href="#/licence">licence</a>.</p>
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
    <p>Code is provided as it is. Questions about a use not covered here: ${Ma}.</p>`}},Kn={privacy:"Privacy",terms:"Terms of use",licence:"Licence"};function to(e,a,o){let t=Ql[o];e.innerHTML=`
    <section class="dest legal">
      <header class="dh"><p class="kicker">${t.kicker}</p><h1>${t.title}</h1><p class="dh-l">${t.lede}</p></header>
      <div class="legal-b">${t.body}
        <p class="note">Last updated ${Jl}. <a href="#/privacy">Privacy</a> \xB7 <a href="#/terms">Terms</a> \xB7 <a href="#/licence">Licence</a></p></div>
    </section>${a.footer()}`}var yr=[{id:"clear",name:"Clear",line:"Thick clear glass with a bright lower rim, for light pages.",dark:!1,v:{page:"#F3F3F1",ink:"#262827",muted:"#6b6f6c",line:"rgba(38,40,39,.07)",body:"linear-gradient(180deg,rgba(255,255,255,.96),rgba(246,247,246,.72) 52%,rgba(226,230,228,.78))",edge:"#ffffff",depth:"rgba(130,142,138,.5)",shadow:"rgba(38,40,39,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(176,212,228,.6)",tint:"linear-gradient(180deg,#43484a,#1f2322 60%,#2c302f)",tintInk:"#f4f5f3",fill:"#2a2e2d",well:"linear-gradient(180deg,rgba(214,218,216,.7),rgba(246,247,246,.9))",orb:"radial-gradient(circle at 50% 62%,rgba(214,232,240,.55),rgba(255,255,255,.22) 58%,rgba(186,200,206,.65))",squish:"1"}},{id:"smoke",name:"Smoke",line:"Smoked glass that darkens to the rim, for dark pages.",dark:!0,v:{page:"#141716",ink:"#ECEEEB",muted:"#9DA29F",line:"rgba(255,255,255,.08)",body:"linear-gradient(180deg,rgba(255,255,255,.17),rgba(255,255,255,.05) 50%,rgba(0,0,0,.22))",edge:"rgba(255,255,255,.38)",depth:"rgba(0,0,0,.6)",shadow:"rgba(0,0,0,.75)",spec:"rgba(255,255,255,.4)",caustic:"rgba(150,186,200,.4)",tint:"linear-gradient(180deg,#fbfbfa,#d6d9d6)",tintInk:"#161918",fill:"#e7e9e6",well:"linear-gradient(180deg,rgba(0,0,0,.45),rgba(255,255,255,.04))",orb:"radial-gradient(circle at 50% 62%,rgba(120,130,136,.55),rgba(40,44,46,.35) 58%,rgba(10,12,12,.75))",squish:"1"}},{id:"chrome",name:"Chrome",line:"Liquid chrome that folds the room it reflects.",dark:!1,v:{page:"#E2E4E3",ink:"#1c1e1d",muted:"#5d6260",line:"rgba(0,0,0,.1)",body:"linear-gradient(180deg,#ffffff 0%,#c3c8c7 24%,#f5f6f6 46%,#8f9594 72%,#e4e7e6 100%)",edge:"#ffffff",depth:"rgba(60,66,64,.6)",shadow:"rgba(30,34,33,.42)",spec:"rgba(255,255,255,1)",caustic:"rgba(255,255,255,.7)",tint:"linear-gradient(180deg,#6c7271 0%,#1d201f 48%,#4a4f4e 100%)",tintInk:"#f3f4f3",fill:"#3a3f3e",well:"linear-gradient(180deg,#a9aeac,#eef0ef)",orb:"conic-gradient(from 210deg,#fdfdfd,#8e9493,#f2f3f3,#5d6362,#e9ebea,#a3a8a7,#fdfdfd)",squish:"1"}},{id:"porcelain",name:"Porcelain",line:"Opaque glazed porcelain with a warm greige accent.",dark:!1,v:{page:"#EFEDE8",ink:"#2e2c29",muted:"#6e6a63",line:"rgba(60,50,40,.08)",body:"linear-gradient(180deg,#fffefb,#f4f1eb 58%,#e5e0d6)",edge:"#ffffff",depth:"rgba(170,158,140,.45)",shadow:"rgba(80,68,52,.26)",spec:"rgba(255,255,255,.9)",caustic:"rgba(207,200,189,.55)",tint:"linear-gradient(180deg,#ddd6ca,#bdb3a3)",tintInk:"#2e2c29",fill:"#bfb5a5",well:"linear-gradient(180deg,#e2ddd3,#faf8f4)",orb:"radial-gradient(circle at 50% 60%,#fbf9f5,#ece7de 60%,#d2cabc)",squish:"1"}},{id:"gel",name:"Gel",line:"Soft sea-glass gel that gives a little when you press it.",dark:!1,v:{page:"#E8EEEC",ink:"#1f302b",muted:"#5b6f69",line:"rgba(30,70,60,.08)",body:"linear-gradient(180deg,rgba(244,252,249,.94),rgba(198,228,218,.62) 56%,rgba(156,200,186,.7))",edge:"rgba(255,255,255,.95)",depth:"rgba(70,124,108,.5)",shadow:"rgba(30,70,60,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(130,226,196,.65)",tint:"linear-gradient(180deg,#a6dccb,#5d9c89)",tintInk:"#0f2a22",fill:"#6aa894",well:"linear-gradient(180deg,rgba(170,206,194,.6),rgba(240,250,246,.9))",orb:"radial-gradient(circle at 50% 60%,rgba(190,240,222,.75),rgba(150,214,192,.45) 58%,rgba(90,160,138,.7))",squish:"1.6"}},{id:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud.",dark:!1,v:{page:"#F2EEEE",ink:"#33282b",muted:"#7a6a6e",line:"rgba(80,40,50,.07)",body:"linear-gradient(180deg,rgba(255,252,252,.96),rgba(246,232,236,.72) 54%,rgba(230,206,214,.75))",edge:"#ffffff",depth:"rgba(190,140,156,.45)",shadow:"rgba(90,50,62,.26)",spec:"rgba(255,255,255,.95)",caustic:"rgba(255,170,198,.6)",tint:"linear-gradient(180deg,#f3c9d6,#d9909f)",tintInk:"#3a1d25",fill:"#df9fb0",well:"linear-gradient(180deg,rgba(226,206,212,.7),rgba(255,250,251,.9))",orb:"radial-gradient(circle at 46% 58%,rgba(255,188,208,.85),rgba(255,236,242,.5) 50%,rgba(222,190,200,.7))",squish:"1.2"}}],Zl=e=>yr.find(a=>a.id===e)??yr[0],ed=e=>Object.entries(e.v).map(([a,o])=>`--cc-${a.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}:${o};`).join(`
  `),td=`
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
`,ad=`
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
`,rd=`
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
})();`,od="addEventListener('message', e => { if (e.data === 'lo:theme:dark' || e.data === 'lo:theme:light') document.body.classList.toggle('dark', e.data === 'lo:theme:dark'); });",Qn='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',id={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row">
    <button class="cc-btn cc-glass primary" type="button">Continue</button>
    <button class="cc-btn cc-glass" type="button">Secondary</button>
    <button class="cc-btn cc-glass round" type="button" aria-label="Confirm">${Qn}</button>
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
</div>`},nd={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row"><button class="cc-btn cc-glass primary" type="button" tabindex="-1">Continue</button><button class="cc-btn cc-glass round" type="button" tabindex="-1" aria-label="Confirm">${Qn}</button></div>
  <div class="cc-row"><button class="cc-switch cc-glass" role="switch" type="button" tabindex="-1" aria-checked="true" aria-label="Switch"><span class="cc-knob"></span></button><input class="cc-range" type="range" value="62" tabindex="-1" aria-label="Level" style="width:150px"></div>
</div>`,"orb-slider":'<div class="cc-stage"><div class="cc-slide cc-glass" style="--h:64px;width:280px" aria-hidden="true"><span class="cc-trail"></span><span class="cc-label">slide to enter</span><span class="cc-orb"></span></div></div>'},Xn={"crystal-controls":"Crystal Controls","orb-slider":"Orb Slider"},Jn={clear:"radial-gradient(90% 80% at 50% 38%,#a9adae,#6c7071 82%)",chrome:"linear-gradient(180deg,#8f9293,#55585a)",porcelain:"radial-gradient(90% 80% at 50% 40%,#aca8a2,#76726c 82%)",gel:"radial-gradient(90% 80% at 50% 40%,#9ea6a4,#646c6a 82%)",bloom:"radial-gradient(90% 80% at 50% 40%,#aaa1a5,#736b6f 82%)"};function wr(e,a,{mini:o=!1,dark:t=!1}={}){let s=Zl(a);return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${Xn[e]} \xB7 ${s.name} \u2014 The Light Orb</title>
<!-- ${Xn[e]} \xB7 ${s.name}. Free for personal and commercial use (The Light Orb licence).
     Change the material by editing the --cc-* variables below. -->
<style>
:root{
  ${ed(s)}
}${td}</style>
</head>
<body${o?` class="mini${t?" dark":""}"`:""}>
${(o?nd:id)[e]}
${o&&Jn[s.id]?`<style>body.mini.dark{background:${Jn[s.id]}}</style>`:""}
<script>${ad}${o?rd+od:""}<\/script>
</body>
</html>
`}var Pa=Math.min(2,window.devicePixelRatio||1),as=matchMedia("(prefers-reduced-motion: reduce)").matches,Ye=(e,a,o)=>e<a?a:e>o?o:e,Zt=Math.random,Da=null,rs=e=>{Da=e},kr=(e,a=.5)=>{ro&&Da&&Da.sfx(e,Number.isFinite(a)?a:.5)},Na={squish(e){kr(e>.45?"level":"detent",Ye(e,0,1))},glass(){kr("select")},twang(e){kr("level",Ye(e/160,0,1))},thunk(e){kr("detent",Ye(1/e,0,1))}},Sr=new Set,ao=()=>document.documentElement.dataset.theme==="dark";new MutationObserver(()=>Sr.forEach(e=>e.retheme?.())).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});var Ko=0,Xo=0,ro=!1,Zn=0,sd=matchMedia("(pointer: coarse)").matches;function os(e){let a=Math.min(.033,(e-Xo)/1e3);Xo=e;let o=e/1e3;if(!document.hidden){Zn++;let t=0;for(let s of Sr)if(s.vis&&(!ro||s.detail)){if(!s.detail&&sd&&(t+++Zn)%2){s.acc=(s.acc||0)+a;continue}s.step(a+(s.detail?0:s.acc||0),o),s.acc=0}}Ko=Sr.size?requestAnimationFrame(os):0}function ld(e,a,o={}){let t=a(e,o);t.cv=e,t.vis=!1,t.lastUser=-1e9,t.detail=!!o.detail,t.autoOn=i=>o.auto!==!1&&!as&&i-t.lastUser>2400,t.io=new IntersectionObserver(i=>i.forEach(u=>t.vis=u.isIntersecting),{rootMargin:"80px"}),t.io.observe(e),t.ro=new ResizeObserver(()=>{let i=e.getBoundingClientRect();i.width>2&&i.height>2&&(t.resize(i.width,i.height),t.step(0,performance.now()/1e3))}),t.ro.observe(e);let s=i=>{let u=e.getBoundingClientRect();return[i.clientX-u.left,i.clientY-u.top]},m=(i,u)=>e.addEventListener(i,p=>{if(!t.ptr)return;let[h,l]=s(p);if(t.ptr(u,h,l,p)!==!1&&(t.lastUser=performance.now()/1e3),u==="down"&&t.detail){try{e.setPointerCapture(p.pointerId)}catch{}t.drag={x:h,y:l,t:performance.now()}}if(t.detail&&Da)if(u==="move"&&t.drag){let f=performance.now(),G=Math.hypot(h-t.drag.x,l-t.drag.y)/Math.max(8,f-t.drag.t)*1e3;t.drag={x:h,y:l,t:f},Da.friction(Number.isFinite(G)?Math.min(1,G/700):0)}else(u==="up"||u==="leave")&&(t.drag=null,Da.friction(0))});return m("pointerdown","down"),m("pointermove","move"),m("pointerup","up"),m("pointercancel","up"),m("pointerleave","leave"),Sr.add(t),Ko||(Xo=performance.now(),Ko=requestAnimationFrame(os)),t}function dd(e){e.io.disconnect(),e.ro.disconnect(),Sr.delete(e)}function cd(e,a){let o=!a.detail,t=e.getContext("2d"),s=document.createElement("canvas"),m=s.getContext("2d"),i=[{abs:[.035,.014,.008],inner:0,scatter:0,sc:[0,0,0],fres:.85,shadow:.09,caustic:22},{abs:[0,0,0],inner:.08,scatter:.82,sc:[250,250,248],fres:.35,shadow:.14,caustic:6},{abs:[1.25,1.2,1.12],inner:.12,scatter:.04,sc:[90,92,95],fres:.7,shadow:.2,caustic:4}],u={tint:0,stiff:220,damp:7},p=o?64:104,h=.34,l={x:0,y:0,down:!1,press:0,max:1,cx:0,cy:0,t0:0,was:!1},f,G,H,n,O,A,F,E,C,W,I,V,S,y,j,Z,B,U,le,ge,me,pe,be,Le=!1,Re=!1,g=()=>document.documentElement.dataset.theme==="dark",v=g(),D=(R,ae,oe)=>{let ue=R/.14,ie=ae/.14,de=Math.abs(ue-Math.round(ue)),ye=Math.abs(ie-Math.round(ie)),Te=de<.022||ye<.022;return v?152-26*(ae+1)/2-12*Math.min(1,R*R/(n*n))+(Te?7*oe:0):246-6*(ae+1)/2-3*Math.min(1,R*R/(n*n))-(Te?4.5*oe:0)},q=()=>{let R=0;for(let ae=0;ae<U;ae++){let oe=ae/(U-1)*2-1;for(let ue=0;ue<B;ue++,R++)pe[R]=D((ue/(B-1)*2-1)*n,oe,1)}Le=!1,Re=!1},L={S:u,resize(R,ae){f=R,G=ae,e.width=Math.round(R*Pa),e.height=Math.round(ae*Pa),n=R/ae,H=Math.max(24,Math.round(p/n)),O=2*n/(p-1);let oe=p*H;E=new Float32Array(oe),C=new Float32Array(oe),W=new Float32Array(oe),I=new Float32Array(oe),V=new Float32Array(oe),S=new Float32Array(oe),y=new Float32Array(oe),j=new Float32Array(oe),Z=new Float32Array(oe),A=n>=1?Math.min(n*.66,1.4):n*.78,F=n>=1?.7:.62;for(let Ee=0;Ee<H;Ee++)for(let $e=0;$e<p;$e++){let Se=($e/(p-1)*2-1)*n,Ce=Ee/(H-1)*2-1,ze=Math.atan2(Ce,Se),xe=1+.035*Math.sin(ze*3+.6)+.02*Math.sin(ze*5+2.1),ee=Math.pow(Math.pow(Math.abs(Se)/(A*xe),3.2)+Math.pow(Math.abs(Ce)/(F*xe),3.2),1/3.2),ce=Ye((1-ee)/.26,0,1);E[Ee*p+$e]=h*Math.sqrt(1-Math.pow(1-ce,2))}let ue=o?R<300?1.4:2.2:2;B=Math.max(8,Math.round(R/ue)),U=Math.max(8,Math.round(ae/ue)),s.width=B,s.height=U,le=m.createImageData(B,U);let ie=B*U,de=new Uint8Array(p*H);ge=new Int32Array(ie*3),me=new Float32Array(ie*6),pe=new Float32Array(ie),be=new Uint8Array(ie);for(let Ee=0;Ee<H;Ee++)for(let $e=0;$e<p;$e++)if(!(E[Ee*p+$e]<=0))for(let Se=-5;Se<=5;Se++)for(let Ce=-5;Ce<=5;Ce++){let ze=Ee+Se,xe=$e+Ce;ze>=0&&ze<H&&xe>=0&&xe<p&&(de[ze*p+xe]=1)}let ye=[[0,0],[-.06/O,-.1/O],[-.16/O,-.26/O]],Te=0;for(let Ee=0;Ee<U;Ee++){let $e=Ee/(U-1)*2-1;for(let Se=0;Se<B;Se++,Te++){let Ce=(Se/(B-1)*2-1)*n,ze=(Ce/n+1)/2*(p-1),xe=($e+1)/2*(H-1);pe[Te]=D(Ce,$e,1);let ee=0;for(let ce=0;ce<3;ce++){let he=Ye(ze+ye[ce][0],0,p-1.001),Pe=Ye(xe+ye[ce][1],0,H-1.001),dt=he|0,at=Pe|0,Tt=at*p+dt;ge[Te*3+ce]=Tt,me[Te*6+ce*2]=he-dt,me[Te*6+ce*2+1]=Pe-at,ee|=de[Tt]}be[Te]=ee}}Le=!1,Re=!1},set(){Re=!1},ptr(R,ae,oe,ue){let ie=(ae/f*2-1)*n,de=oe/G*2-1;if(o){if(ue.pointerType!=="mouse")return!1;R==="move"?(l.down=!0,l.max=.5,l.x=ie,l.y=de):R==="leave"&&(l.down=!1);return}R==="down"?(l.down=!0,l.max=1,l.x=ie,l.y=de,l.was=!1,Na.squish(.25)):R==="move"&&l.down?(l.x=ie,l.y=de):(R==="up"||R==="leave")&&(l.down&&l.press>.3&&Na.squish(l.press*.5),l.down=!1)},step(R,ae){if(g()!==v&&(v=g(),pe&&q()),L.autoOn(ae)){let xe=ae%3.6,ee=xe<1.6;if(ee&&!l.auto&&(l.auto=!0,l.down=!0,l.max=o?.8:.9,l.cx=(Zt()-.5)*A*.9,l.cy=(Zt()-.5)*F*.6,l.t0=ae),ee){let ce=ae-l.t0;l.x=l.cx+Math.sin(ce*1.2)*A*.16,l.y=l.cy+Math.cos(ce)*F*.1}else l.auto&&(l.auto=!1,l.down=!1)}else l.auto&&(l.auto=!1,o&&(l.down=!1));let oe=l.down?l.max:0;l.press+=(oe-l.press)*Math.min(1,R*(l.down?as?8:1.6:6)),l.press>.85&&!l.was&&!o&&(l.was=!0,Na.squish(.6));let ue=Math.max(1,Math.ceil(R*240)),ie=R/ue,de=5200,ye=.17,Te=l.press*(110+u.stiff*.55);if(Re&&!l.down&&l.press<1e-4)return;let Ee=0,$e=0;for(let xe=1;xe<H-1;xe++)for(let ee=1;ee<p-1;ee++){let ce=xe*p+ee;if(E[ce]<=0)continue;let he=(ee/(p-1)*2-1)*n-l.x,Pe=xe/(H-1)*2-1-l.y,dt=he*he+Pe*Pe,at=Math.exp(-dt/(ye*ye)),Tt=E[ce]/h;j[ce]=-Te*at*Tt,Ee+=j[ce];let Ke=Math.sqrt(dt)-ye*2;Z[ce]=Math.exp(-Ke*Ke/(ye*ye*1.6))*Tt,$e+=Z[ce]}let Se=$e>0?-Ee/$e:0;for(let xe=0;xe<ue&&R>0;xe++){for(let ee=1;ee<H-1;ee++)for(let ce=1;ce<p-1;ce++){let he=ee*p+ce;if(E[he]<=0){C[he]=0,W[he]=0;continue}W[he]+=(de*(C[he-1]+C[he+1]+C[he-p]+C[he+p]-4*C[he])-u.stiff*C[he]-u.damp*W[he]+j[he]+Z[he]*Se)*ie}for(let ee=0;ee<C.length;ee++)E[ee]<=0||(C[ee]+=W[ee]*ie,C[ee]<-E[ee]*.82&&(C[ee]=-E[ee]*.82,W[ee]*=-.2))}let Ce=0;for(let xe=0;xe<C.length;xe++){I[xe]=Math.max(0,E[xe]+C[xe]),y[xe]=I[xe];let ee=Math.abs(C[xe])+Math.abs(W[xe]);ee>Ce&&(Ce=ee)}let ze=Re;if(Re=!l.down&&l.press<1e-4&&Ce<2e-5,!(Re&&ze)){for(let xe=1;xe<H-1;xe++)for(let ee=1;ee<p-1;ee++){let ce=xe*p+ee;V[ce]=(I[ce+1]-I[ce-1])/(2*O),S[ce]=(I[ce+p]-I[ce-p])/(2*O)}for(let xe=0;xe<3;xe++){for(let ee=1;ee<H-1;ee++)for(let ce=1;ce<p-1;ce++){let he=ee*p+ce;y[he]=(y[he-1]+y[he]*2+y[he+1])/4}for(let ee=1;ee<p-1;ee++)for(let ce=1;ce<H-1;ce++){let he=ce*p+ee;y[he]=(y[he-p]+y[he]*2+y[he+p])/4}}L.render()}},render(){let R=le.data,ae=[-.42,-.62,.66],oe=[-.22,-.34,.91],ue=Math.hypot(...oe);oe[0]/=ue,oe[1]/=ue,oe[2]/=ue;let ie=i[u.tint],de=($e,Se,Ce)=>{Se=Ye(Se,0,p-1.001),Ce=Ye(Ce,0,H-1.001);let ze=Se|0,xe=Ce|0,ee=Se-ze,ce=Ce-xe,he=xe*p+ze;return($e[he]*(1-ee)+$e[he+1]*ee)*(1-ce)+($e[he+p]*(1-ee)+$e[he+p+1]*ee)*ce},ye=($e,Se,Ce)=>{let ze=ge[Se*3+Ce],xe=me[Se*6+Ce*2],ee=me[Se*6+Ce*2+1];return($e[ze]*(1-xe)+$e[ze+1]*xe)*(1-ee)+($e[ze+p]*(1-xe)+$e[ze+p+1]*xe)*ee};if(!Le){for(let $e=0,Se=0;$e<pe.length;$e++,Se+=4)R[Se]=pe[$e],R[Se+1]=pe[$e],R[Se+2]=pe[$e]-1,R[Se+3]=255;Le=!0}let Te=0,Ee=0;for(let $e=0;$e<U;$e++){let Se=$e/(U-1)*2-1;for(let Ce=0;Ce<B;Ce++,Te+=4,Ee++){if(!be[Ee])continue;let ze=(Ce/(B-1)*2-1)*n,xe=ye(I,Ee,0),ee=Ye(ye(y,Ee,1)/h,0,1),ce=Math.pow(Ye(ye(y,Ee,2)/h,0,1),4)*Math.max(0,ee-.25),he=pe[Ee]*(1-ee*ie.shadow)+ce*ie.caustic;if(xe<.003){R[Te]=he,R[Te+1]=he,R[Te+2]=he-1,R[Te+3]=255;continue}let Pe=-ye(V,Ee,0)*.7,dt=-ye(S,Ee,0)*.7,at=Math.hypot(Pe,dt,1),Tt=Pe/at,Ke=dt/at,bt=1/at,Ct=xe/h,xt=.16+Ct*.28,Et=ze+Tt*xt,N=Se+Ke*xt,se=Ye(de(y,(Et/n+1)/2*(p-1)-.06/O,(N+1)/2*(H-1)-.1/O)/h,0,1),fe=D(Et,N,Math.pow(bt,5)*1.6)*(1-se*ie.inner),ve=fe*Math.exp(-ie.abs[0]*Ct),we=fe*Math.exp(-ie.abs[1]*Ct),Ie=fe*Math.exp(-ie.abs[2]*Ct),Be=ie.scatter*(1-Math.exp(-Ct*2.2));ve+=(ie.sc[0]-ve)*Be,we+=(ie.sc[1]-we)*Be,Ie+=(ie.sc[2]-Ie)*Be;let Oe=Math.max(0,Tt*ae[0]+Ke*ae[1]+bt*ae[2]),De=1-ie.scatter*.12+ie.scatter*.16*Oe;ve*=De,we*=De,Ie*=De;let He=112+130*Ye(-Ke*1.5+.25,0,1),vt=Math.pow(1-bt,2.6)*ie.fres;ve+=(He-ve)*vt,we+=(He-we)*vt,Ie+=(He+2-Ie)*vt;let $t=Math.max(0,Tt*oe[0]+Ke*oe[1]+bt*oe[2]),mt=Math.pow($t,90)*1.1+Math.pow($t,400)*1.2;ve+=mt*255,we+=mt*255,Ie+=mt*255;let nt=Ye(xe/.01,0,1);R[Te]=he+(ve-he)*nt,R[Te+1]=he+(we-he)*nt,R[Te+2]=he-1+(Ie-he+1)*nt,R[Te+3]=255}}m.putImageData(le,0,0),t.imageSmoothingQuality="high",t.drawImage(s,0,0,e.width,e.height)}};return L}function pd(e,a){let o=!a.detail,t=e.getContext("2d"),s=document.createElement("canvas"),m=s.getContext("2d"),i=document.createElement("canvas"),u=i.getContext("2d"),p={size:0,mag:.7,ca:.35},h,l,f,G,H=80,n={x:0,y:0},O={x:0,y:0},A={x:0,y:0},F=!1,E=!0,C={},W=!1;function I(){let S=m;if(S.setTransform(f,0,0,f,0,0),S.fillStyle=ao()?"#bcbdbb":"#f1f1ef",S.fillRect(0,0,h,l),o&&Math.min(h,l)<300){let g=Math.min(h*.25,l*.21);S.fillStyle="#262827",S.font=`200 ${g}px "Helvetica Neue",Inter,Arial`,S.textBaseline="alphabetic";let v=h*.11,D=l*.44;S.fillText("Look",v,D),S.fillText("closer.",v,D+g*1.02),S.strokeStyle="rgba(38,40,39,.65)",S.lineWidth=.6;let q=h*.72,L=l*.84,R=Math.min(h,l)*.2;for(let ae=0;ae<12;ae++){S.beginPath();for(let oe=0;oe<=48;oe++){let ue=oe/48*Math.PI*2,ie=R*(.18+ae*.07)*(1+.12*Math.sin(ue*3+ae*.4)),de=q+Math.cos(ue)*ie*1.15,ye=L+Math.sin(ue)*ie*.78;oe?S.lineTo(de,ye):S.moveTo(de,ye)}S.stroke()}A={x:h*.42,y:l*.42},G=S.getImageData(0,0,s.width,s.height);return}let y=h/l>1.15,j=Math.max(o?30:20,Math.min(h,l)*.08),Z=Math.min(h*(y?o?.075:.09:.13),l*.15,84);S.fillStyle="#262827",S.font=`200 ${Z}px "Helvetica Neue",Inter,Arial`,S.textBaseline="top",(y?["Light bends","here."]:["Light","bends here."]).forEach((g,v)=>S.fillText(g,j,j+v*Z*1.02));let B="A lens does not add anything to the page. It only redistributes what is already there, pulling the centre toward you and folding the edge away. Every line keeps its weight; only its position changes.".split(" "),U=Ye(Math.min(h,l)*.032,9,12);S.font=`${U}px "Helvetica Neue",Arial`,S.fillStyle="#4a4c4b";let le=y?h*.53:j,ge=y?h*.24:h-2*j,me=y?j+6:j+Z*2.4,pe="";A={x:le+Math.min(ge*.4,70),y:me+U*4};for(let g of B){let v=pe?pe+" "+g:g;S.measureText(v).width>ge?(S.fillText(pe,le,me),me+=U*1.45,pe=g):pe=v}S.fillText(pe,le,me),S.strokeStyle="rgba(38,40,39,.72)",S.lineWidth=.7;let be=y?h*.78:h*.62,Le=y?l*.68:l*.78,Re=Math.min(h,l)*(y?.25:.2);for(let g=0;g<20;g++){S.beginPath();for(let v=0;v<=64;v++){let D=v/64*Math.PI*2,q=Re*(.15+g*.043)*(1+.12*Math.sin(D*3+g*.4)+.05*Math.sin(D*7)),L=be+Math.cos(D)*q*1.15,R=Le+Math.sin(D)*q*.78;v?S.lineTo(L,R):S.moveTo(L,R)}S.stroke()}S.strokeStyle="rgba(38,40,39,.16)";for(let g=0;g<8;g++)S.beginPath(),S.moveTo(j,l*(y?.58:.62)+g*7),S.lineTo(h*(y?.4:.42),l*(y?.58:.62)+g*7),S.stroke();G=S.getImageData(0,0,s.width,s.height)}let V={S:p,resize(S,y){h=S,l=y,f=Math.min(Pa,o?1.5:2),e.width=s.width=Math.round(S*f),e.height=s.height=Math.round(y*f),I(),H=p.size?p.size/2:Ye(Math.min(S,y)*.24,46,140),(!W||!o)&&(n={...A},O={...A},W=!0),E=!0},set(S){S==="size"&&(H=p.size/2),E=!0},retheme(){h&&(I(),E=!0)},ptr(S,y,j,Z){if(o&&Z.pointerType!=="mouse")return!1;if(S==="leave"){F=!1;return}if(o&&S==="down")return!1;(S==="move"||S==="down")&&(!F&&!o&&Na.glass(),F=!0,O={x:y,y:j})},step(S,y){o&&V.autoOn(y)&&(O={x:h*(.5+.3*Math.sin(y*.38)),y:l*(.5+.2*Math.sin(y*.53+1))});let j=1-Math.exp(-S*(F?20:o?2.2:3));n.x+=(O.x-n.x)*j,n.y+=(O.y-n.y)*j,!(!E&&Math.abs(n.x-C.x)<.05&&Math.abs(n.y-C.y)<.05)&&(C={x:n.x,y:n.y},E=!1,V.render(y))},render(S){t.setTransform(1,0,0,1,0,0),t.drawImage(s,0,0),t.setTransform(f,0,0,f,0,0);let y=n.x,j=n.y,Z=y+H*.16,B=j+H*.3,U=t.createRadialGradient(Z,B,H*.2,Z,B,H*1.15);U.addColorStop(0,"rgba(0,0,0,.10)"),U.addColorStop(.75,"rgba(0,0,0,.05)"),U.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=U,t.beginPath(),t.ellipse(Z,B,H*1.15,H,0,0,7),t.fill(),U=t.createRadialGradient(Z+H*.1,B+H*.12,0,Z+H*.1,B+H*.12,H*.45),U.addColorStop(0,"rgba(255,255,255,.75)"),U.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=U,t.beginPath(),t.arc(Z+H*.1,B+H*.12,H*.45,0,7),t.fill();let le=Math.round(H*f),ge=le*2+2;i.width!==ge&&(i.width=i.height=ge),(!V.ob||V.ob.width!==ge)&&(V.ob=u.createImageData(ge,ge));let me=V.ob,pe=me.data,be=G.data,Le=G.width,Re=G.height,g=y*f,v=j*f,D=p.mag,q=p.ca;for(let L=0;L<ge;L++)for(let R=0;R<ge;R++){let ae=R-le-1,oe=L-le-1,ue=Math.hypot(ae,oe)/le;if(ue>1.003)continue;let ie=(L*ge+R)*4,de=Math.sqrt(Math.max(0,1-ue*ue)),ye=1/(1+D*Math.pow(de,.7)),Te=Math.pow(1-de,3)*.55,Ee=ue>0?ae/(ue*le):0,$e=ue>0?oe/(ue*le):0;for(let he=0;he<3;he++){let Pe=1+(he-1)*q*.06*(1-de),dt=Ye(g+ae*ye*Pe+Ee*Te*le|0,0,Le-1),at=Ye(v+oe*ye*Pe+$e*Te*le|0,0,Re-1);pe[ie+he]=be[(at*Le+dt)*4+he]*(ue>.9?.985-(ue-.9)*1.6:.985)}let Se=ae/le+.38,Ce=oe/le+.42,ze=Math.exp(-(Se*Se+Ce*Ce)/.004)*.75+Math.exp(-(Se*Se*4+Ce*Ce)/.25)*.04,xe=Math.exp(-Math.pow((ue-.955)/.012,2))*Math.max(0,-(ae+oe)/le)*.55,ee=Math.exp(-(Math.pow(ae/le-.45,2)+Math.pow(oe/le-.5,2))/.012)*.12,ce=(ze+xe+ee)*255;pe[ie]+=ce,pe[ie+1]+=ce,pe[ie+2]+=ce+1,pe[ie+3]=255*Ye((1.003-ue)/.012,0,1)}u.putImageData(me,0,0),t.setTransform(1,0,0,1,0,0),t.drawImage(i,g-le-1,v-le-1),t.setTransform(f,0,0,f,0,0),t.strokeStyle="rgba(0,0,0,.08)",t.lineWidth=.6,t.beginPath(),t.arc(y,j,H,0,7),t.stroke()}};return V}function ud(e,a){let o=!a.detail,t=e.getContext("2d"),s=document.createElement("canvas"),m=s.getContext("2d"),i={word:a.word||"Elastic",reach:80,snap:12},u,p,h,l,f=null,G=null,H={x:0,y:0},n={x:0,y:0},O={x:0,y:0},A=null,F=!1,E={next:0},C=!1;function W(){m.setTransform(1,0,0,1,0,0),m.fillStyle=ao()?"#c2c3c1":"#f6f6f5",m.fillRect(0,0,s.width,s.height),m.setTransform(h,0,0,h,0,0);let y=Math.min(p*.46,u*.25);m.font=`300 ${y}px "Helvetica Neue",Inter,Arial`,m.letterSpacing="-0.04em";let j=m.measureText(i.word).width;j>u*.84&&(y*=u*.84/j,m.font=`300 ${y}px "Helvetica Neue",Inter,Arial`),m.fillStyle="#262827",m.textAlign="center",m.textBaseline="middle",m.fillText(i.word,u/2,p*.5),l=m.getImageData(0,0,s.width,s.height);let Z=l.data,B=l.width,U=1e9,le=1e9,ge=-1,me=-1;for(let pe=0;pe<l.height;pe++)for(let be=0;be<B;be++)Z[(pe*B+be)*4]<238&&(be<U&&(U=be),be>ge&&(ge=be),pe<le&&(le=pe),pe>me&&(me=pe));f=ge<0?null:{x0:U-1,y0:le-1,x1:ge+2,y1:me+2},G=t.createImageData(s.width,s.height)}let I=()=>i.reach*Ye(Math.min(u,p)/380,.45,1.3),V=y=>{let j=Math.hypot(y.x,y.y),Z=Math.min(Math.min(u,p)*.5,I()*1.8),B=j>0?Z*Math.tanh(j/Z)/j:0;return{x:y.x*B,y:y.y*B}},S={S:i,resize(y,j){u=y,p=j,h=Math.min(Pa,o?1.25:1.5),e.width=s.width=Math.round(y*h),e.height=s.height=Math.round(j*h),W(),C=!1},set(y){y==="word"&&W(),C=!1},retheme(){u&&(W(),C=!1)},ptr(y,j,Z,B){if(o)return!1;y==="down"?(Math.hypot(n.x,n.y)<2&&(H={x:j,y:Z},n={x:0,y:0}),A={x:j-n.x,y:Z-n.y},O={x:0,y:0},F=!1,C=!1):y==="move"&&A?(n=V({x:j-A.x,y:Z-A.y}),C=!1):(y==="up"||y==="leave")&&A&&(Na.twang(Math.hypot(n.x,n.y)),A=null)},step(y,j){if(!A&&S.autoOn(j)){if(!F&&j>E.next){F=!0,E.t0=j,H={x:u*(.28+.44*Zt()),y:p*(.42+.16*Zt())};{let Z=I()*.85;E.tx=Ye((Zt()-.5)*u*.14,-Z,Z),E.ty=(Zt()<.6?-1:1)*Math.min(Z,p*(.15+.08*Zt()))}n={x:0,y:0},O={x:0,y:0}}if(F){let Z=(j-E.t0)/.75;if(Z<1){let B=1-Math.pow(1-Z,3);n={x:E.tx*B,y:E.ty*B}}else Z>1.3&&(F=!1,E.next=j+1.4+Zt()*1.2)}C=!1}else F&&(F=!1);if(!A&&!F){let Z=i.snap*i.snap*1.6,B=i.snap*.55;for(let U=0;U<4;U++){let le=y/4;O.x+=(-Z*n.x-B*O.x)*le,O.y+=(-Z*n.y-B*O.y)*le,n.x+=O.x*le,n.y+=O.y*le}}if(!A&&!F&&Math.hypot(n.x,n.y)<.15&&Math.hypot(O.x,O.y)<.5){if(C)return;n={x:0,y:0},C=!0}S.render()},render(){if(t.setTransform(1,0,0,1,0,0),t.drawImage(s,0,0),Math.hypot(n.x,n.y)<.15||!f)return;let y=I()*h,j=H.x*h,Z=H.y*h,B=n.x*h,U=n.y*h,le=Math.hypot(B,U),ge=y*3+le,me=Ye(Math.floor(Math.max(Math.min(j,j+B)-ge,f.x0-le-1)),0,e.width),pe=Ye(Math.ceil(Math.min(Math.max(j,j+B)+ge,f.x1+le+1)),0,e.width),be=Ye(Math.floor(Math.max(Math.min(Z,Z+U)-ge,f.y0-le-1)),0,e.height),Le=Ye(Math.ceil(Math.min(Math.max(Z,Z+U)+ge,f.y1+le+1)),0,e.height),Re=pe-me,g=Le-be;if(Re<2||g<2)return;let v=G.data,D=G.width,q=l.data,L=l.width,R=l.height,ae=1/(2*y*y);for(let oe=0;oe<g;oe++)for(let ue=0;ue<Re;ue++){let ie=me+ue,de=be+oe,ye=ie,Te=de;for(let ce=0;ce<3;ce++){let he=ye-j,Pe=Te-Z,dt=Math.exp(-(he*he+Pe*Pe)*ae);ye=ie-B*dt,Te=de-U*dt}ye=Ye(ye,0,L-1.001),Te=Ye(Te,0,R-1.001);let Ee=ye|0,$e=Te|0,Se=ye-Ee,Ce=Te-$e,ze=($e*L+Ee)*4,xe=ze+L*4,ee=(de*D+ie)*4;for(let ce=0;ce<3;ce++)v[ee+ce]=(q[ze+ce]*(1-Se)+q[ze+4+ce]*Se)*(1-Ce)+(q[xe+ce]*(1-Se)+q[xe+4+ce]*Se)*Ce;v[ee+3]=255}t.putImageData(G,0,0,me,be,Re,g)}};return S}function gd(e,a){let o=!a.detail,t=e.getContext("2d"),s={k:100,lines:!0},m,i,u,p=[],h=[],l=null,f={next:0},G,H=[{n:"graphite",m:1.8,g:"420 g"},{n:"ceramic",m:.8,g:"180 g"},{n:"alu",m:1.1,g:"240 g"},{n:"graphite",m:1.8,g:"420 g"},{n:"ceramic",m:.8,g:"180 g"}];function n(F,E){let C=null,W=1e9;for(let I of p){if(I.t&&I.t!==F)continue;let V=Math.hypot(I.x-F.x,I.y-F.y);V<W&&(W=V,C=I)}return E||W<u*.9?C:null}function O(F,E,C,W,I){t.beginPath(),t.roundRect?t.roundRect(F,E,C,W,I):t.rect(F,E,C,W)}let A={S:s,resize(F,E){m=F,i=E,e.width=Math.round(F*Pa),e.height=Math.round(E*Pa);let C=F>=E,W=C?o?3:4:2,I=C?2:o?3:4;u=Math.min(F/(W+1.1),E/(I+.9))*.84;let V=u*1.2;p=[];for(let j=0;j<I;j++)for(let Z=0;Z<W;Z++)p.push({x:F/2+(Z-(W-1)/2)*V,y:E/2+(j-(I-1)/2)*V,t:null});let S=Math.min(o?4:5,p.length-1);h=H.slice(0,S).map((j,Z)=>({...j,i:Z,x:0,y:0,vx:0,vy:0,z:0,slot:null}));let y=C?[0,1,3+(o?1:2),2].concat([4]):[0,1,2,4,5];h.forEach((j,Z)=>{let B=p[y[Z]%p.length];j.slot=B,B.t=j,j.x=B.x,j.y=B.y}),l=null,A.drawn=!1},ptr(F,E,C,W){if(o)return!1;if(F==="down"){let I=null;for(let V of h)Math.abs(E-V.x)<u*.5&&Math.abs(C-V.y)<u*.5&&(!I||V.z>=I.z)&&(I=V);if(!I)return!1;l={t:I,px:E,py:C,ox:E-(I.slot?I.slot.x:I.x),oy:C-(I.slot?I.slot.y:I.y)}}else F==="move"&&l&&!l.auto?(l.px=E,l.py=C):(F==="up"||F==="leave")&&l&&!l.auto&&(l=null)},step(F,E){if(A.autoOn(E)&&(!l||l.auto)){if(!l&&E>f.next){let S=h[Zt()*h.length|0],y=p.filter(j=>!j.t);if(S&&S.slot&&y.length){let j=y[Zt()*y.length|0];l={t:S,auto:!0,px:S.x,py:S.y,ox:0,oy:0,fx:S.x,fy:S.y,tx:j.x,ty:j.y,t0:E}}}if(l&&l.auto){let S=(E-l.t0)/1.15;if(S>=1)l=null,f.next=E+1.3+Zt();else{let y=S<.5?4*S*S*S:1-Math.pow(-2*S+2,3)/2,j=Math.sin(S*Math.PI)*u*.18;l.px=l.fx+(l.tx-l.fx)*y,l.py=l.fy+(l.ty-l.fy)*y-j}}}else l&&l.auto&&!A.autoOn(E)&&(l=null);let C=3,W=F/C,I=s.k;for(let S=0;S<C&&F>0;S++)for(let y of h){let j=0,Z=0;if(l&&l.t===y){let U=l.px-l.ox,le=l.py-l.oy;if(y.slot){let pe=U-y.slot.x,be=le-y.slot.y;if(Math.hypot(pe,be)<u*.42*(I/100)){y.x=y.slot.x+pe*.14,y.y=y.slot.y+be*.14,y.vx=y.vy=0;continue}y.slot.t=null,y.slot=null,Na.thunk(y.m*1.6)}let ge=260/y.m;j+=(U-y.x)*ge,Z+=(le-y.y)*ge;let me=n(y);if(me){let pe=me.x-y.x,be=me.y-y.y,Le=Math.hypot(pe,be);if(Le<u*.9){let Re=I*14*(1-Le/(u*.9))/y.m;j+=pe/(Le+1)*Re*u*.12,Z+=be/(Le+1)*Re*u*.12}}y.z+=(1-y.z)*.2}else if(y.slot){let U=I*6/y.m;j+=(y.slot.x-y.x)*U,Z+=(y.slot.y-y.y)*U,y.z+=(0-y.z)*.25}else{let U=n(y,!0);U&&(U.t=y,y.slot=U,Na.thunk(y.m))}for(let U of h)if(U!==y){let le=y.x-U.x,ge=y.y-U.y,me=Math.hypot(le,ge);if(me<u*1.02&&me>0){let pe=(u*1.02-me)*900;j+=le/me*pe,Z+=ge/me*pe}}let B=2*Math.sqrt(260/y.m)*.9;y.vx+=(j/y.m-B*y.vx)*W,y.vy+=(Z/y.m-B*y.vy)*W,y.x+=y.vx*W,y.y+=y.vy*W}let V=!!l;for(let S of h)(Math.abs(S.vx)+Math.abs(S.vy)>.02||S.z>.002||S.slot&&Math.abs(S.x-S.slot.x)+Math.abs(S.y-S.slot.y)>.05)&&(V=!0);!V&&A.drawn||(A.drawn=!V,A.render())},set(){A.drawn=!1},retheme(){A.drawn=!1},render(){let F=Pa;t.setTransform(F,0,0,F,0,0);let E=t.createLinearGradient(0,0,0,i);if(E.addColorStop(0,ao()?"#c0c2c1":"#e9eae9"),E.addColorStop(1,ao()?"#acaead":"#dddfde"),t.fillStyle=E,t.fillRect(0,0,m,i),s.lines){t.strokeStyle="#262827",t.lineWidth=.8,t.lineCap="round";let C=Ye(u*.17,11,16);for(let W=C/2;W<i;W+=C)for(let I=C/2;I<m;I+=C){let V=0,S=0,y=!1;for(let B of h){let U=I-B.x,le=W-B.y;if(Math.abs(U)<u*.52&&Math.abs(le)<u*.52){y=!0;break}let ge=U*U+le*le,me=Math.sqrt(ge),pe=ge*ge*me,be=-le*u*u*B.m;V+=3*be*U/pe,S+=3*be*le/pe+u*u*B.m/(ge*me)}if(y)continue;let j=Math.hypot(V,S);if(j<1e-4)continue;t.globalAlpha=Ye(j*u*.3*(s.k/100),.03,.5);let Z=C*.36;t.beginPath(),t.moveTo(I-V/j*Z,W-S/j*Z),t.lineTo(I+V/j*Z,W+S/j*Z),t.stroke()}t.globalAlpha=1}for(let C of p)t.strokeStyle="rgba(38,40,39,.2)",t.lineWidth=1,t.beginPath(),t.arc(C.x,C.y,2.5,0,7),t.stroke(),t.strokeStyle="rgba(38,40,39,.07)",O(C.x-u/2,C.y-u/2,u,u,u*.12),t.stroke();[...h].sort((C,W)=>C.z-W.z).forEach(C=>{let W=u*.48,I=1+C.z*.04,V=u*.13;t.save(),t.translate(C.x,C.y),t.scale(I,I),t.shadowColor="rgba(0,0,0,"+(.14+C.z*.12)+")",t.shadowBlur=8+C.z*30,t.shadowOffsetY=3+C.z*16;let S=t.createLinearGradient(0,-W,0,W);if(C.n==="graphite"?(S.addColorStop(0,"#3d3f40"),S.addColorStop(1,"#252627")):C.n==="ceramic"?(S.addColorStop(0,"#fff"),S.addColorStop(1,"#ececea")):(S.addColorStop(0,"#dcdddf"),S.addColorStop(1,"#bfc1c3")),t.fillStyle=S,O(-W,-W,W*2,W*2,V),t.fill(),t.shadowColor="transparent",C.n==="alu"){t.save(),O(-W,-W,W*2,W*2,V),t.clip(),t.strokeStyle="rgba(255,255,255,.35)",t.lineWidth=.5;for(let y=-W;y<W;y+=2.2)t.beginPath(),t.moveTo(-W,y),t.lineTo(W,y),t.stroke();t.restore()}t.strokeStyle=C.n==="graphite"?"rgba(255,255,255,.16)":"rgba(255,255,255,.95)",t.beginPath(),t.moveTo(-W+V,-W+.5),t.lineTo(W-V,-W+.5),t.stroke(),C.n!=="graphite"&&(t.strokeStyle="rgba(0,0,0,.07)",O(-W,-W,W*2,W*2,V),t.stroke()),u>70&&(t.fillStyle=C.n==="graphite"?"rgba(243,243,241,.5)":"rgba(38,40,39,.42)",t.font='10px "Helvetica Neue",Arial',t.textAlign="right",t.fillText(C.g,W-10,W-10)),t.beginPath(),t.arc(0,0,W*.16,0,7),t.strokeStyle=C.n==="graphite"?"rgba(255,255,255,.1)":"rgba(0,0,0,.08)",t.stroke(),t.restore()})}};return A}var hd={gel:cd,lens:pd,type:ud,mag:gd},Jo=[{id:"gel",name:"Gel Press",cat:"Materials",line:"Clear gel that sinks under pressure and slowly recovers.",lead:"A slab of clear gel that keeps its volume. Press and it sinks, the displaced mass rises around your finger, and it settles back on its own time.",hint:"Press, hold and drag",ctl:[{t:"sw",k:"tint",l:"Material",o:[["Clear","#eef3f4"],["Milk","#fafaf8"],["Smoke","#5c5f61"]]},{t:"r",k:"stiff",l:"Firmness",min:60,max:600},{t:"r",k:"damp",l:"Viscosity",min:2,max:30}]},{id:"lens",name:"Interactive Lens",cat:"Materials",line:"Thick optical glass that bends the page beneath it.",lead:"A disc of thick optical glass. It enlarges the centre, folds the edge with a trace of colour and leaves a point of focused light in its shadow.",hint:"Move or drag the lens",ctl:[{t:"r",k:"size",l:"Diameter",min:120,max:320},{t:"r",k:"mag",l:"Power",min:0,max:1.4,step:.01},{t:"r",k:"ca",l:"Dispersion",min:0,max:1,step:.01}]},{id:"type",name:"Elastic Lettering",cat:"Typography",line:"Letters that stretch under tension and snap back.",lead:"The glyphs themselves stretch. Grab any part of a letter and pull: strokes thin and lengthen, then snap back past rest and settle.",hint:"Grab a letter and pull",ctl:[{t:"txt",k:"word",l:"Word"},{t:"r",k:"reach",l:"Reach",min:30,max:160},{t:"r",k:"snap",l:"Snap",min:4,max:40}]},{id:"mag",name:"Magnetic Stack",cat:"Interaction",line:"Weighted pieces that pull, resist and settle into place.",lead:"Weighted modules on a magnetic rack. Graphite lags behind your hand, ceramic follows quickly, and every slot holds on before it lets go.",hint:"Drag a piece to another slot",ctl:[{t:"r",k:"k",l:"Field strength",min:20,max:200},{t:"chk",k:"lines",l:"Show field"}]}],oo="Coming to early access";function Qo(e,a,o={}){ns();let t=document.createElement("canvas");t.className="obj-cv",t.setAttribute("aria-hidden","true"),e.prepend(t);let s=ld(t,hd[a],o);return{piece:s,dispose(){dd(s),t.remove()}}}var es=e=>typeof e=="number"&&e%1?e.toFixed(2):e;function is(e,{onClose:a}={}){ns();let o=Jo.find(l=>l.id===e);if(!o)return;let t=document.activeElement,s=document.createElement("div");s.className="obj-detail",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",o.name),s.innerHTML=`<div class="obj-sheet glass">
    <button class="gb small obj-x" type="button" aria-label="Close"><svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" stroke-width="1.2" fill="none"><path d="M2 2l8 8M10 2l-8 8"/></svg></button>
    <div class="obj-stage"><span class="obj-hint">${o.hint}</span></div>
    <div class="obj-panel">
      <span class="obj-crumb">Products \xB7 ${o.cat}</span><h2>${o.name}</h2><p class="obj-lead">${o.lead}</p>
      <span class="obj-status"><i></i>${oo}</span>
      <div class="obj-group obj-custom"><h4>Customise</h4></div>
      <div class="obj-group"><h4>Includes</h4><ul class="obj-inc"><li>Web Component and React module</li><li>Offline demo page</li><li>Settings file you can export from here</li><li>Keyboard, touch and reduced-motion support</li></ul></div>
      <div class="obj-acts"><button class="gb small primary" type="button" data-export>Export settings</button><button class="gb small" type="button" disabled>${oo}</button></div>
    </div></div>`,document.body.append(s),document.documentElement.classList.add("obj-lock"),ro=!0;let m=Qo(s.querySelector(".obj-stage"),e,{detail:!0,auto:!1}),i=m.piece.S;if(e==="lens"){let l=s.querySelector(".obj-stage").clientWidth;i.size=Math.round(Ye(l*.42,140,220)),m.piece.set("size")}s.querySelector(".obj-custom").insertAdjacentHTML("beforeend",o.ctl.map(l=>{let f=i[l.k];return l.t==="sw"?`<div class="obj-ctl"><span>${l.l}</span><div class="obj-sw">${l.o.map((G,H)=>`<button type="button" aria-label="${G[0]}" aria-pressed="${H===f}" data-k="${l.k}" data-v="${H}" style="background:${G[1]}"></button>`).join("")}</div></div>`:l.t==="txt"?`<label class="obj-ctl"><span>${l.l}</span><input class="obj-txt" data-k="${l.k}" value="${f}" maxlength="14"></label>`:l.t==="chk"?`<label class="obj-ctl"><span>${l.l}</span><input type="checkbox" data-k="${l.k}"${f?" checked":""}></label>`:`<label class="obj-ctl"><span>${l.l}</span><input type="range" data-k="${l.k}" min="${l.min}" max="${l.max}" step="${l.step||1}" value="${f}"><output>${es(f)}</output></label>`}).join(""));let u=s.querySelector(".obj-custom");u.addEventListener("input",l=>{let f=l.target.dataset.k;if(!f)return;let G=l.target.type==="checkbox"?l.target.checked:l.target.type==="range"?+l.target.value:l.target.value||" ";i[f]=G,m.piece.set?.(f);let H=l.target.nextElementSibling;H?.tagName==="OUTPUT"&&(H.textContent=es(G))}),u.addEventListener("click",l=>{let f=l.target.closest(".obj-sw button");f&&(i[f.dataset.k]=+f.dataset.v,m.piece.set?.(f.dataset.k),f.parentElement.querySelectorAll("button").forEach(G=>G.setAttribute("aria-pressed",String(G===f))))}),s.querySelector("[data-export]").addEventListener("click",()=>{let l=document.createElement("a");l.href=URL.createObjectURL(new Blob([JSON.stringify({product:e,name:o.name,version:"preview",settings:{...i}},null,2)],{type:"application/json"})),l.download=`${e}-settings.json`,l.click(),setTimeout(()=>URL.revokeObjectURL(l.href),1e3)});let p=()=>{kr("close"),Da?.friction(0),m.dispose(),s.remove(),document.documentElement.classList.remove("obj-lock"),ro=!1,removeEventListener("keydown",h),t?.focus?.(),a?.()},h=l=>{l.key==="Escape"&&p()};return addEventListener("keydown",h),s.querySelector(".obj-x").addEventListener("click",p),s.addEventListener("click",l=>{l.target===s&&p()}),setTimeout(()=>s.querySelector(".obj-x").focus(),30),p}var ts=!1;function ns(){if(ts)return;ts=!0;let e=document.createElement("style");e.textContent=`
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
@media (prefers-reduced-motion:reduce){.obj-detail,.obj-sheet{animation:none}}
`,document.head.append(e)}var ea=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function ls(e){let a=[],o=t=>[...t.childNodes].forEach(s=>{if(s.nodeType===3){let m=document.createDocumentFragment();s.textContent.split(/(\s+)/).forEach(i=>{if(!i)return;if(/^\s+$/.test(i)){m.append(" ");return}let u=document.createElement("span");u.className="tm-w";let p=document.createElement("span");p.className="tm-i",p.textContent=i,u.append(p),m.append(u),a.push(u)}),s.replaceWith(m)}else s.nodeType===1&&o(s)});return o(e),a.forEach((t,s)=>t.style.setProperty("--k",s)),a}var ss="aeosnrtlcdmuhgpbfy\xB7\u2014/\u25E6";function ds(e,{duration:a=620,delay:o=0}={}){let t=e.textContent;if(!t.trim()||t.length>40||ea())return;e.setAttribute("aria-label",t);let s=[...t].map((p,h)=>({c:p,i:h,at:p===" "?0:o+h/t.length*a*.7+Math.random()*a*.3})),m=performance.now(),i=0,u=p=>{let h=p-m,l=!0;e.textContent=s.map(f=>h>=f.at?f.c:(l=!1,h<o?"\u2007":ss[Math.random()*ss.length|0])).join(""),!l&&e.isConnected?i=requestAnimationFrame(u):e.textContent=t};return i=requestAnimationFrame(u),()=>{cancelAnimationFrame(i),e.textContent=t}}function Zo(e,a,{ratio:o=.35,margin:t="0px"}={}){if(!("IntersectionObserver"in window))return a(e),()=>{};let s=new IntersectionObserver(m=>{m.some(i=>i.isIntersecting)&&(s.disconnect(),a(e))},{threshold:o,rootMargin:t});return s.observe(e),()=>s.disconnect()}function io(e,a,{speed:o=1,onParagraph:t=()=>{},onDone:s=()=>{}}={}){let m=document.createElement("div");m.className="tm-sr",m.innerHTML=a.map(B=>`<p>${B.html}</p>`).join(""),m.querySelectorAll("a").forEach(B=>{B.tabIndex=-1});let i=document.createElement("div");i.className="tm-live",i.setAttribute("aria-hidden","true");let u=document.createElement("span");u.className="tm-caret";let p=document.createElement("div");p.className="tm-ghost",p.setAttribute("aria-hidden","true"),p.innerHTML=m.innerHTML,p.querySelectorAll("a").forEach(B=>{B.tabIndex=-1}),e.replaceChildren(m,p,i);let h,l=new Promise(B=>{h=B}),f=0,G=0,H=!1,n=()=>{H||(H=!0,clearTimeout(f),cancelAnimationFrame(G),i.innerHTML=a.map(B=>`<p>${B.html}</p>`).join(""),i.lastElementChild?.append(u),u.classList.add("rest"),setTimeout(()=>u.classList.add("gone"),2600),m.remove(),i.removeAttribute("aria-hidden"),i.querySelectorAll("a").forEach(B=>B.removeAttribute("tabindex")),e.classList.add("tm-done"),s(),h())};if(ea())return n(),u.remove(),{skip(){},done:l};let O=a.reduce((B,U)=>B+U.text.length,0),A=[],F=300,E=0;a.forEach((B,U)=>{U&&(F+=U===1?320:220),A.push({at:F,para:U}),(B.runs??[{t:"text",s:B.text}]).forEach(le=>{A.push({at:F,run:le}),[...le.s].forEach((ge,me)=>{let pe=le.s[me+1]??"",be=10*(.6+Math.random()*.8);/[a-z]/i.test(ge)&&/[a-z]/i.test(pe)&&(be*=.8),ge===","&&(be+=80),".?!".includes(ge)&&(be+=150),ge==="\u2014"&&(be+=50),be*=++E>O*.35?.5:1,A.push({at:F,ch:ge}),F+=be})})});let C=null,W=null,I=0,V=0,S=0,y=B=>{if(B.para!==void 0){C=document.createElement("p"),i.append(C),C.append(u),t(B.para);return}if(B.run){if(B.run.t==="a"){let U=document.createElement("a");U.href=B.run.href,U.tabIndex=-1,C.insertBefore(U,u),W=U.appendChild(document.createTextNode(""))}else W=C.insertBefore(document.createTextNode(""),u);return}W.data+=B.ch,S=B.at},j=B=>{if(H)return;V||(V=B);let U=(B-V)*o;for(;I<A.length&&A[I].at<=U;)y(A[I++]);if(u.classList.toggle("rest",U-S>120),I>=A.length){f=setTimeout(n,350);return}G=requestAnimationFrame(j)};u.classList.add("rest"),i.append(u),G=requestAnimationFrame(j);let Z=n;return{skip:()=>{cancelAnimationFrame(G),Z()},done:l}}var cs=`
/* \u2500\u2500 type-motion.js (Creative Experience V2) \u2500\u2500 */
.tm-w{display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:.08em;margin-bottom:-.08em}
.tm-i{display:inline-block;transform:translateY(105%);transition:transform 1.05s cubic-bezier(.2,.75,.15,1) calc(var(--d,0ms) + var(--k) * 70ms)}
.tm-on .tm-i{transform:none}
.tm-ghost{visibility:hidden}
.tm-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}
.tm-caret{display:inline-block;width:1px;height:1.05em;margin-left:1px;vertical-align:-.16em;background:currentColor;opacity:.85}
.tm-caret.rest{animation:tm-blink 1.06s steps(1) infinite}
.tm-caret.gone{opacity:0;transition:opacity .6s;animation:none}
@keyframes tm-blink{50%{opacity:0}}
@media (prefers-reduced-motion:reduce){.tm-i{transform:none;transition:none}.tm-caret{display:none}}
`;var gs=["Personal Website / Portfolio","Business Website","Online Store","Landing Page","Interactive Experience","Something Else","I\u2019m Not Sure Yet"],md=["Present a business","Display products","Sell products online","Accept bookings or inquiries","Showcase creative work","Include interactive experiences","Something else","I need advice"],fd=["As soon as possible","Within 1\u20133 months","Flexible","Not sure yet"],jt={name:100,email:254,idea:5e3,ideaMin:20,design:2e3,refs:2e3,budget:200},ai="lo:inquiry",bd=[["Visual identity","A look for the website, made from your brand, your references and what you love."],["Structure & UX/UI","How the site is organised, how it reads and how it feels to move through."],["Responsive layouts","Compositions designed for phones, tablets and large screens \u2014 not shrunk."],["Interaction & motion","Components, animations and small moments that make it feel alive."],["Online stores","Product catalogues, product presentation and setup, selling online."],["Portfolios & business sites","Creative portfolios, studios, shops, services, landing pages."],["Experimental experiences","Materials, light, sound and 3D, when the idea asks for it."],["Integrations","Other tools the project needs, agreed together."]],xd=[["Your Idea","Tell me what you want to create, what you like, and what matters to your project."],["The Direction","We define the visual approach, structure, functionality and scope."],["Design & Development","I turn the agreed concept into a fully designed, functional digital experience."],["The Final Experience","The website is reviewed, refined and prepared for launch."]],ca=e=>String(e??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),hs=()=>{try{return JSON.parse(sessionStorage.getItem(ai))??{}}catch{return{}}},vd=e=>{try{sessionStorage.setItem(ai,JSON.stringify(e))}catch{}},yd=()=>{try{sessionStorage.removeItem(ai)}catch{}},ps=()=>crypto.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,12)}`;function us(e){let a={};String(e.name??"").trim()?e.name.trim().length>jt.name&&(a.name=`Please keep your name under ${jt.name} characters.`):a.name="Please tell me your name.",Jt(String(e.email??""))||(a.email="Please enter a valid email address, so I can reply."),gs.includes(e.type)||(a.type="Choose the option closest to what you have in mind.");let o=String(e.idea??"").trim();o.length<jt.ideaMin?a.idea="Tell me a little about your idea \u2014 a few sentences are enough.":o.length>jt.idea&&(a.idea=`Please keep it under ${jt.idea} characters.`);for(let t of["design","refs","budget"])String(e[t]??"").length>jt[t]&&(a[t]=`Please keep this under ${jt[t]} characters.`);return a}var ei=(e,a,o,t)=>a.map((s,m)=>{let i=o==="radio"?t===s:(t??[]).includes(s);return`<label class="ch"><input type="${o}" name="${e}" value="${ca(s)}"${i?" checked":""}${o==="radio"&&e==="type"&&m===0?" required":""}><span>${ca(s)}</span></label>`}).join("");function wd(e){let a=!!Aa;return`<form class="iq" data-iq novalidate aria-describedby="iq-privacy">
    <div class="iq-row2">
      <label class="fl"><span>Name</span><input class="gi" name="name" autocomplete="name" maxlength="${jt.name}" required aria-required="true" value="${ca(e.name)}"><em class="err" data-err="name" id="e-name"></em></label>
      <label class="fl"><span>Email</span><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" maxlength="${jt.email}" required aria-required="true" value="${ca(e.email)}"><em class="err" data-err="email" id="e-email"></em></label>
    </div>
    <fieldset class="iq-set" data-set="type"><legend>What are you looking to create?</legend>
      <div class="chs" role="radiogroup" aria-required="true">${ei("type",gs,"radio",e.type)}</div><em class="err" data-err="type" id="e-type"></em></fieldset>
    <label class="fl"><span>Tell me about your idea</span>
      <textarea class="gi iq-ta" name="idea" rows="7" maxlength="${jt.idea}" required aria-required="true" placeholder="What is it, who is it for, what would make it feel right?">${ca(e.idea)}</textarea>
      <span class="iq-meta"><em class="err" data-err="idea" id="e-idea"></em><small data-count></small></span></label>
    <details class="iq-more" data-more${e.more?" open":""}><summary><span>A little more, if you like</span><small>Optional \xB7 design, references, timing, budget</small></summary>
      <div class="iq-more-b">
        <label class="fl"><span>What kind of design do you like?</span><textarea class="gi" name="design" rows="3" maxlength="${jt.design}" placeholder="Colours, materials, styles, moods\u2026">${ca(e.design)}</textarea><em class="err" data-err="design"></em></label>
        <label class="fl"><span>Any websites or references you love?</span><textarea class="gi" name="refs" rows="3" maxlength="${jt.refs}" placeholder="Links, or a few words about them">${ca(e.refs)}</textarea><em class="err" data-err="refs"></em></label>
        <fieldset class="iq-set"><legend>What should your website do?</legend><div class="chs">${ei("functions",md,"checkbox",e.functions)}</div></fieldset>
        <fieldset class="iq-set"><legend>When would you like to launch?</legend><div class="chs" role="radiogroup">${ei("timeline",fd,"radio",e.timeline)}</div></fieldset>
        <label class="fl"><span>Do you have a budget in mind? <i class="opt">Optional \u2014 a rough idea is fine</i></span><input class="gi" name="budget" maxlength="${jt.budget}" value="${ca(e.budget)}"><em class="err" data-err="budget"></em></label>
      </div></details>
    <label class="iq-hp" aria-hidden="true">Leave this empty<input name="website" tabindex="-1" autocomplete="off"></label>
    <div class="iq-send"><button class="gb primary" type="submit" data-send${a?"":" disabled"}><span>Send My Project</span></button>
      <p class="iq-status" data-status role="status" aria-live="polite">${a?"":"Project inquiries open soon \u2014 nothing typed here is sent yet."}</p></div>
    <p class="note" id="iq-privacy">What you write here is sent by email to Carla only, to reply to you and talk about your project. It is not added to any mailing list. See <a href="#/privacy">privacy</a>.</p>
  </form>`}var kd=`<div class="iq-done" role="status" tabindex="-1" data-done><span class="iq-done-orb" aria-hidden="true"></span>
  <p class="kicker">Sent</p><h3>Your idea is on its way.</h3><p>Thank you for sharing it \u2014 I\u2019ll be in touch soon.</p>
  <div class="acts eq"><a class="tl" href="#/templates">Explore Templates</a><a class="tl" href="#/products">Discover Products</a></div></div>`;function Sd(e,{audio:a}){let o=e.querySelector("[data-iq]");if(!o)return;let t=o.querySelector("[data-status]"),s=o.querySelector("[data-send]"),m=o.querySelector("[data-count]"),i=o.elements.idea,u=Date.now(),p=hs().key||ps(),h=!1,l=()=>({name:o.elements.name.value,email:o.elements.email.value,type:o.querySelector("[name=type]:checked")?.value??"",idea:i.value,design:o.elements.design.value,refs:o.elements.refs.value,functions:[...o.querySelectorAll("[name=functions]:checked")].map(n=>n.value),timeline:o.querySelector("[name=timeline]:checked")?.value??"",budget:o.elements.budget.value}),f=()=>vd({...l(),key:p,more:o.querySelector("[data-more]").open}),G=()=>{let n=i.value.trim().length;m.textContent=n?`${n} / ${jt.idea}`:""},H=n=>{o.querySelectorAll("[data-err]").forEach(O=>{let A=O.dataset.err,F=n[A]??"";O.textContent=F;let E=A==="type"?o.querySelector("[data-set=type]"):o.elements[A];E&&(E.toggleAttribute("aria-invalid",!!F),E.setAttribute&&(F&&O.id?E.setAttribute("aria-describedby",O.id):E.removeAttribute?.("aria-describedby")))})};G(),o.addEventListener("input",n=>{f(),n.target===i&&G();let O=n.target.name,A=o.querySelector(`[data-err="${O}"]`);if(A?.textContent&&!us(l())[O]){A.textContent="";let F=O==="type"?o.querySelector("[data-set=type]"):n.target;F.removeAttribute("aria-invalid"),F.removeAttribute("aria-describedby")}}),o.querySelector("[data-more]").addEventListener("toggle",n=>{f(),a?.sfx(n.target.open?"open":"close")}),o.addEventListener("submit",async n=>{if(n.preventDefault(),h||!Aa)return;let O=l(),A=us(O);H(A);let F=Object.keys(A)[0];if(F){t.textContent="A few details are missing \u2014 see the highlighted fields.",(F==="type"?o.querySelector("[name=type]"):o.elements[F])?.focus(),["design","refs","budget"].includes(F)&&(o.querySelector("[data-more]").open=!0);return}h=!0,s.disabled=!0,s.setAttribute("aria-busy","true"),o.setAttribute("aria-busy","true"),t.textContent="Sending\u2026";let E=!1,C="";try{let W=await fetch(Aa,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({...O,website:o.elements.website.value,key:p,elapsed:Date.now()-u,lang:(navigator.language||"en").slice(0,5)})}),I=await W.json().catch(()=>({}));E=W.ok&&I?.ok===!0,E||(C=W.status===429?"Your message was not sent: too many tries for now. Please wait a little and try again \u2014 everything you wrote is still here.":W.status===400&&I?.field?"Your message was not sent: please check the highlighted field.":"Your message was not sent. Please try again in a moment, or write to trescarla@gmail.com \u2014 everything you wrote is still here."),!E&&I?.field&&H({[I.field]:"Please check this field."})}catch{C="Your message was not sent \u2014 the connection failed. Please try again; everything you wrote is still here."}if(h=!1,s.removeAttribute("aria-busy"),o.removeAttribute("aria-busy"),E){yd(),p=ps(),Fe("inquiry_sent",{type:O.type}),a?.sfx("confirm");let W=document.createElement("div");W.innerHTML=kd;let I=W.firstElementChild;o.replaceWith(I),I.focus({preventScroll:!0}),I.scrollIntoView({block:"center",behavior:ea()?"auto":"smooth"});return}s.disabled=!1,t.textContent=C,t.setAttribute("role","alert"),Fe("inquiry_failed")})}function Ed(e,a){let o=a.querySelector(".hx-h");if(ls(o),a.querySelectorAll("[data-decrypt]").forEach((m,i)=>ds(m,{delay:120+i*900})),requestAnimationFrame(()=>requestAnimationFrame(()=>a.classList.add("tm-on"))),ea())return;let t=0,s=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>{let m=a.getBoundingClientRect(),i=Math.min(1,Math.max(0,-m.top/Math.max(1,m.height)));a.style.setProperty("--sp",i.toFixed(3))})};e.addEventListener("scroll",s,{passive:!0})}function $d(e){let a=[...e.querySelectorAll(".wd-step")],o=e.querySelector(".wd-path"),t=e.querySelector(".wd-steps-w"),s=0,m=()=>{let p=getComputedStyle(e.querySelector(".wd-steps")).gridTemplateColumns.split(" ").length===1,h=e.querySelector(".wd-steps"),l=n=>{let O=n.querySelector(".wd-bead");return[h.offsetLeft+n.offsetLeft+O.offsetLeft,h.offsetTop+n.offsetTop+O.offsetTop]},f=a.map(l),G=f.map(n=>n[p?1:0]),H=G[G.length-1]-G[0];o.style.left=`${f[0][0]+9}px`,o.style.top=`${f[0][1]+9}px`,o.style.setProperty("--len",`${H}px`),o.style.setProperty("--to",String(H?(G[s]-G[0])/H:0))},i=p=>{s=p,a.forEach((h,l)=>{h.classList.toggle("on",l===p),h.classList.toggle("past",l<p),l===p?h.setAttribute("aria-current","step"):h.removeAttribute("aria-current")}),m(),ea()||(o.classList.remove("glint"),o.offsetWidth,o.classList.add("glint"))};if(a.forEach((p,h)=>{p.addEventListener("pointerenter",l=>{l.pointerType==="mouse"&&e.classList.contains("in")&&i(h)}),p.addEventListener("focus",()=>i(h)),p.addEventListener("click",()=>i(h))}),new ResizeObserver(()=>m()).observe(t),ea()){e.classList.add("in"),i(0);return}e.classList.add("pre"),Zo(e,()=>{e.classList.add("in"),setTimeout(()=>i(0),1100)},{ratio:.25})}function ms(e,a,o={}){let t=hs();e.innerHTML=`
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
          <ul class="wd-list">${bd.map(([m,i])=>`<li><b>${m}</b><span>${i}</span></li>`).join("")}</ul>
          <p class="note">Every project is different; what is included is agreed together, one project at a time.</p></div>
      </section>

      <section class="wd-proc" aria-labelledby="wd-p">
        <p class="kicker">Working together</p><h2 id="wd-p">From an idea to a finished website.</h2>
        <div class="wd-steps-w"><span class="wd-path" aria-hidden="true"><i></i></span><ol class="wd-steps">${xd.map(([m,i],u)=>`<li class="wd-step" tabindex="0" style="--i:${u}"><span class="wd-bead" aria-hidden="true"></span><span class="wd-n">${String(u+1).padStart(2,"0")}</span><h3>${m}</h3><p>${i}</p></li>`).join("")}</ol></div>
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
          ${Ti?'<p class="note">Prefer email? Write to <a href="mailto:trescarla@gmail.com">trescarla@gmail.com</a>.</p>':'<p class="iq-pending" role="note"><b>Sending is being connected.</b> Until it is confirmed, the form only says \u201Csent\u201D when the message has really been delivered. You can also write directly to <a href="mailto:trescarla@gmail.com">trescarla@gmail.com</a>.</p>'}</div>
        <div class="wd-form-b glass">${wd(t)}</div>
      </section>
    </article>${a.footer()}`;let s=(m=!0)=>{let i=e.querySelector("#wd-inquiry"),u=matchMedia("(pointer:coarse)").matches,p=m&&!u&&!ea();e.scrollTo({top:e.scrollTop+i.getBoundingClientRect().top-96,behavior:p?"smooth":"instant"}),setTimeout(()=>{i.isConnected&&i.querySelector("[name=name]")?.focus({preventScroll:!u})},p?600:0)};e.querySelector("[data-to-proof]")?.addEventListener("click",m=>{m.preventDefault();let i=e.querySelector("#wd-proof");e.scrollTo({top:e.scrollTop+i.getBoundingClientRect().top-96,behavior:ea()?"auto":"smooth"})}),e.querySelector("[data-to-form]").addEventListener("click",()=>{a.audio?.sfx("select"),Fe("inquiry_start"),s()}),Sd(e,a),Ed(e,e.querySelector(".hx")),$d(e.querySelector(".wd-proc")),o.to==="inquiry"&&requestAnimationFrame(()=>requestAnimationFrame(()=>s(!1)))}var no=[[{t:"text",s:"Hi there,"}],[{t:"text",s:"I\u2019m Carla, a web designer and developer creating digital experiences that go beyond traditional layouts."}],[{t:"text",s:"I\u2019m drawn to design, movement, materials and interaction \u2014 to the way they can change how a website feels in your hands."}],[{t:"text",s:"THE ORB LIGHT is where I develop my own creative ideas: the digital pieces in "},{t:"a",s:"Products",href:"#/products"},{t:"text",s:", and the interactive "},{t:"a",s:"Templates",href:"#/templates"},{t:"text",s:"."}],[{t:"text",s:"I also design and build custom websites for people and brands who want something that feels genuinely their own."}],[{t:"text",s:"\u2014 Carla"}]].map(e=>({runs:e,text:e.map(a=>a.s).join(""),html:e.map(a=>a.t==="a"?`<a href="${a.href}">${ca(a.s)}</a>`:ca(a.s)).join("")})),ti=!1;function fs(e,a){let o="";try{o=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Lisbon",hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{}e.innerHTML=`
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
    </article>${a.footer()}`;let t=e.querySelector(".nt"),s=e.querySelector("[data-note]"),m=e.querySelector("[data-skip]"),i=()=>{m.hidden=!0,t.classList.add("acts-in"),s.querySelectorAll(".tm-live a").forEach(l=>l.removeAttribute("tabindex"))};if(ti||ea()){io(s,no.map(l=>({...l})),{}).skip(),s.querySelector(".tm-caret")?.remove(),i();return}s.innerHTML=`<div class="tm-sr">${no.map(l=>`<p>${l.html.replace(/<a /g,'<a tabindex="-1" ')}</p>`).join("")}</div>`;let u=null,p=Zo(s,()=>{ti=!0,u=io(s,no,{onParagraph:l=>{l===2&&t.classList.add("acts-in")},onDone:i})},{ratio:.1});m.addEventListener("click",()=>{if(a.audio?.sfx?.("select"),u){u.skip();return}p(),ti=!0,io(s,no,{onDone:i}).skip()}),s.addEventListener("click",()=>{u&&!s.classList.contains("tm-done")&&u.skip()});let h=l=>{if(!t.isConnected){removeEventListener("keydown",h);return}u&&!s.classList.contains("tm-done")&&!l.metaKey&&!l.ctrlKey&&u.skip()};addEventListener("keydown",h)}var bs=`<span class="wdm" aria-hidden="true"><span class="wdm-l"><b class="wdm-w">W</b><b class="wdm-d">D</b></span>
  <span class="wdm-g"><span class="wdm-l wdm-r"><b class="wdm-w">W</b><b class="wdm-d">D</b></span></span><i class="wdm-ray"></i><em>Web Design</em></span>`;if(typeof document<"u"&&!ea()){let e=0,a=null;document.addEventListener("pointermove",o=>{if(o.pointerType!=="mouse")return;let t=o.target.closest?.(".dg-design");if(!t){a&&(a.style.removeProperty("--mx"),a.style.removeProperty("--my"),a=null);return}a=t,cancelAnimationFrame(e),e=requestAnimationFrame(()=>{let s=t.getBoundingClientRect();t.style.setProperty("--mx",((o.clientX-s.left)/s.width-.5).toFixed(3)),t.style.setProperty("--my",((o.clientY-s.top)/s.height-.5).toFixed(3))})},{passive:!0})}var xs=`
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
.wdm{--gap:.16em;--mx:0;--my:0;position:relative;display:grid;place-items:center;width:100%;height:100%;container-type:inline-size}
.wdm-l{display:flex;align-items:baseline;gap:var(--gap);font:100 clamp(64px,46cqi,190px)/1 var(--font);letter-spacing:-.04em;color:#262827;
  transform:translate(calc(var(--mx) * 8px),calc(var(--my) * 6px));transition:gap 1.2s cubic-bezier(.2,.75,.15,1),transform .6s cubic-bezier(.2,.75,.15,1)}
.wdm-l b{font-weight:inherit;display:block}
.wdm-w{transform:translateY(calc(var(--my) * -4px))}.wdm-d{transform:translateY(calc(var(--my) * 4px));transition:transform .6s}
/* the prism: a thin bar of glass over the join, its own copy of the letters refracted */
.wdm-g{position:absolute;left:50%;top:50%;width:15%;height:66%;translate:-50% -50%;border-radius:3px;overflow:hidden;
  transform:translateX(calc(var(--mx) * -10px)) rotate(-9deg);transition:transform .7s cubic-bezier(.2,.75,.15,1);
  background:linear-gradient(160deg,rgba(255,255,255,.55),rgba(255,255,255,.08) 42%,rgba(255,255,255,.22));
  box-shadow:inset 0 1px 0 #fff,inset 1px 0 0 rgba(255,255,255,.8),inset -1px 0 0 rgba(150,156,152,.25),inset 0 -1px 0 rgba(150,156,152,.35),0 0 0 .5px rgba(38,40,39,.12),0 24px 30px -22px rgba(38,40,39,.45)}
.wdm-g .wdm-r{position:absolute;left:50%;top:50%;width:max-content;translate:-50% -50%;color:#3f4341;filter:blur(.25px);
  transform:translate(calc(var(--mx) * 8px + 4px),calc(var(--my) * 6px)) scale(1.08) rotate(9deg)}
.wdm-g::after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.65) 48%,transparent 56%);opacity:.6}
.wdm-ray{position:absolute;inset:0;pointer-events:none;background:linear-gradient(100deg,transparent 40%,rgba(255,255,255,.85) 50%,transparent 60%);background-size:250% 100%;background-position:120% 0;mix-blend-mode:soft-light;opacity:0}
.wdm em{position:absolute;left:10%;bottom:8%;font:500 10px/1 var(--font);letter-spacing:.18em;text-transform:uppercase;font-style:normal;color:var(--faint);opacity:0;transition:opacity .8s .3s}
/* chosen, hovered or focused: the letters close, the light crosses once */
:is(.dg-c,.arc-c):is(.on,:hover,:focus-visible) .wdm,.arc-c[aria-current=true] .wdm{--gap:-.02em}
:is(.dg-c,.arc-c):is(:hover,:focus-visible) .wdm-ray{animation:wdm-ray 1.4s cubic-bezier(.4,0,.2,1)}
:is(.dg-c,.arc-c):is(.on,:hover,:focus-visible) .wdm em{opacity:1}
@keyframes wdm-ray{0%{opacity:0;background-position:120% 0}25%{opacity:1}100%{opacity:0;background-position:-20% 0}}
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
html[data-theme=dark] .wdm-l{color:#eceeeb}html[data-theme=dark] .wdm-g .wdm-r{color:#b9bdba}
html[data-theme=dark] .wdm-g{background:linear-gradient(160deg,rgba(255,255,255,.16),rgba(255,255,255,.03) 45%,rgba(255,255,255,.08));box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 0 0 1px rgba(255,255,255,.08),0 24px 30px -22px rgba(0,0,0,.9)}
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
@media (prefers-reduced-motion:reduce){.wd-bead,.wd-bead::after,.wd-n,.wd-path,.wd-path i,.wd-list li,.nv-x svg,.hx-b,.hx-c em,.hx-foot,.hx-note::before,.nt-acts,.wdm-l,.wdm-g{transition:none}.wdm-ray{animation:none!important}.hx-l{translate:none}.wd-path i::after,.iq-more[open] .iq-more-b,.iq-done-orb{animation:none}}
${cs}
`;var ta=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),tr=(e,a,o)=>e+(a-e)*o,xa=e=>{let a=ta(e);return a*a*(3-2*a)},Md=(e,a,o,t,s)=>xa((e-a)/(o-a))*(1-xa((e-t)/(s-t))),qe=e=>String(e).replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),Fa={get:(e,a)=>{try{return JSON.parse(sessionStorage.getItem(e))??a}catch{return a}},set:(e,a)=>{try{sessionStorage.setItem(e,JSON.stringify(a))}catch{}}},Ve={play:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>',replay:'<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/></svg>',prev:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',mute:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',moon:'<svg viewBox="0 0 24 24"><path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z"/></svg>',sun:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.8"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg>',user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M4.5 20c1.4-3.6 4.2-5.4 7.5-5.4s6.1 1.8 7.5 5.4"/></svg>',heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/></svg>',back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',down:'<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',bag:'<svg viewBox="0 0 24 24"><path d="M5.5 8.5h13l-1 11h-11z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5.5" y="10.5" width="13" height="9" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',orb:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="11" cy="15" r="1.6" fill="currentColor" stroke="none"/></svg>'},ri={pieces:"products",materials:"products"};function vs(e){let{orb:a,reduced:o}=e,t=Fi();rs(t);let s=document.createElement("style");s.textContent=Zi+en+xs+on+rn+(/[?&]cx=0\b/.test(location.search)?"":nn)+mn+bn,document.documentElement.classList.add("ds2"),document.head.append(s),an(),document.documentElement.classList.add("lo-on");let m=On(e),i=oi("main","lo");i.setAttribute("aria-label","The Light Orb"),i.tabIndex=-1;let u=oi("div","lo-top");document.body.append(i,u),u.innerHTML=`
    <header class="hd" data-hd>
      <a class="wm" href="#/" aria-label="The Light Orb \u2014 Home" data-home>${Go}</a>
      <nav class="nav" aria-label="Main">${Eo.map(r=>r.children?`<div class="nv-g" data-nvg><a href="${r.route}" data-nav="${r.id}" data-top>${r.label}</a><button class="nv-x" type="button" data-nvx aria-expanded="false" aria-controls="nv-${r.id}" aria-label="${r.label}: ${r.children.map(d=>d.label).join(", ")}">${Ve.down}</button>
        <div class="menu pane nv-p" id="nv-${r.id}" data-nvp hidden>${r.children.map(d=>`<a href="${d.route}" data-sub="${d.id}"><b>${d.label}</b><small>${d.line}</small></a>`).join("")}</div></div>`:`<a href="${r.route}" data-nav="${r.id}" data-top>${r.label}</a>`).join("")}</nav>
      <div class="hd-r">
        <a class="nav-m" href="#/membership" data-nav="membership">Membership</a>
        <div class="snd" data-sndhost></div>
        <div class="thm"><button class="gb gc small" type="button" data-theme-btn aria-pressed="false" aria-label="Dark mode" title="Dark mode">${Ve.moon}</button></div>
        <div class="cartw"${" hidden"}><button class="gb gc small" type="button" data-cartbtn aria-haspopup="dialog" aria-expanded="false" aria-label="Cart">${Ve.bag}<span class="cart-n" data-cartn hidden></span></button>
          <div class="menu pane cart-p" role="dialog" aria-label="Cart" data-cartp hidden></div></div>
        <a class="gb gc small" href="#/account" aria-label="Account" data-nav="account">${Ve.user}</a>
      </div>
    </header>
    <button class="guide-hit" type="button" data-guide aria-label="Talk with the Orb"></button>
    <div class="caption" data-caption aria-live="polite"></div>`,u.querySelectorAll("[data-nvg]").forEach(r=>{let d=r.querySelector("[data-nvx]"),w=r.querySelector("[data-nvp]"),x=0,T=(M,J)=>{clearTimeout(x),w.hidden!==!M&&(w.hidden=!M,d.setAttribute("aria-expanded",String(M)),r.classList.toggle("open",M),J&&M&&w.querySelector("a")?.focus())};d.addEventListener("click",()=>{T(w.hidden),t.sfx(w.hidden?"close":"open")}),d.addEventListener("keydown",M=>{M.key==="ArrowDown"&&(M.preventDefault(),T(!0,!0))}),r.addEventListener("pointerenter",M=>{M.pointerType==="mouse"&&T(!0)}),r.addEventListener("pointerleave",M=>{M.pointerType==="mouse"&&(x=setTimeout(()=>T(!1),220))}),r.addEventListener("keydown",M=>{M.key==="Escape"&&!w.hidden&&(T(!1),d.focus())}),w.addEventListener("keydown",M=>{let J=[...w.querySelectorAll("a")],z=J.indexOf(document.activeElement);(M.key==="ArrowDown"||M.key==="ArrowUp")&&(M.preventDefault(),J[(z+(M.key==="ArrowDown"?1:J.length-1))%J.length].focus())}),r.addEventListener("focusout",M=>{r.contains(M.relatedTarget)||T(!1)}),document.addEventListener("pointerdown",M=>{r.contains(M.target)||T(!1)}),addEventListener("hashchange",()=>T(!1))});let p=u.querySelector("[data-hd]"),h=u.querySelector("[data-caption]"),l=u.querySelector("[data-guide]"),f=u.querySelector("[data-theme-btn]"),G=()=>{let r=Ka()==="dark";f.setAttribute("aria-pressed",String(r)),f.innerHTML=r?Ve.sun:Ve.moon,f.setAttribute("aria-label","Dark mode"),f.title=r?"Switch to light mode":"Switch to dark mode"};G(),f.addEventListener("click",()=>{Ji(Ka()==="dark"?"light":"dark"),Fe(`theme_${Ka()}`)}),document.addEventListener("lightorb:theme",()=>{G(),Me.name!=="studio"&&(g(),m.reapply())});let H=Li(u.querySelector("[data-sndhost]"),t.store,{buttonClass:"gb gc small",onToggle:(r,d)=>{Fe(`${r==="voice"?"voice":"sound"}_${d?"on":"off"}`),r==="sfx"&&d&&t.sfx("select")}}),n=0;t.store.on((r,d)=>{d.voice&&!t.voiceOn&&(ce=null,Pe())});let O=()=>{t.voiceOn||t.toggle("voice",!0)},A=0,F=0,E=null,C="a,button,input,select,textarea,summary,[role=slider],[role=tab],.arc-c,.dg-c,.file,.tcard",W="h1,h2,h3,p,li,dt,dd,blockquote,figcaption,label",I=NaN,V=null;function S(){let r=()=>{h.style.top="",h.style.bottom="",h.style.left=""};if(!h.classList.contains("on")){Number.isFinite(I)&&(r(),I=NaN);return}r();let d=h.getBoundingClientRect(),w=d.width,x=d.height,T=8,M=innerWidth,J=d.top,z=d.left+w/2,Y=(p.getBoundingClientRect().bottom||0)+T,$=(window.visualViewport?.height??innerHeight)-10,Q=Ne=>[...document.querySelectorAll(Ne)].filter(We=>We!==h&&!h.contains(We)&&We!==l&&!We.closest("[hidden],[inert]")).map(We=>We.getBoundingClientRect()).filter(We=>We.width&&We.height&&We.bottom>Y&&We.top<$),re=Q(C),P=Q(W),K=V&&V.vis>.5?[{top:V.y-V.d/2,bottom:V.y+V.d/2,left:V.x-V.d/2,right:V.x+V.d/2}]:[],te=[...new Set([z,M-w/2-12,w/2+12].map(Ne=>Math.round(Math.min(M-w/2-12,Math.max(w/2+12,Ne)))))],je=(Ne,We)=>{let It=Ne.filter(Ge=>Ge.right>We-w/2-T&&Ge.left<We+w/2+T),ya=Ge=>It.every(tt=>Ge+x+T<=tt.top||Ge-T>=tt.bottom);return ya(J)?J:[Y,$-x,...It.flatMap(Ge=>[Ge.bottom+T,Ge.top-T-x])].filter(Ge=>Ge>=Y&&Ge+x<=$&&ya(Ge)).sort((Ge,tt)=>Math.abs(Ge-J)-Math.abs(tt-J))[0]},ke=null;for(let Ne of[[...re,...P,...K],[...re,...P],re]){for(let We of te){let It=je(Ne,We);if(It!==void 0){ke={x:We,y:It};break}}if(ke)break}if(!ke||Math.abs(ke.y-J)<.5&&Math.abs(ke.x-z)<.5){I=NaN;return}h.style.top=`${ke.y.toFixed(1)}px`,h.style.bottom="auto",h.style.left=`${ke.x}px`,I=ke.y}let y=0,j=()=>{y||(y=requestAnimationFrame(()=>{y=0,S()}))};new MutationObserver(j).observe(h,{attributes:!0,attributeFilter:["class"],childList:!0,characterData:!0,subtree:!0}),addEventListener("resize",j),window.visualViewport?.addEventListener("resize",j);let Z=(()=>{let r=document.createElement("canvas").getContext("2d");return d=>(r.font=getComputedStyle(h).font,r.measureText(d).width)})();function B(r){let d=Math.min(560,innerWidth*.84)-34,w=[],x="";for(let T of String(r).split(/\s+/).filter(Boolean)){let M=x?`${x} ${T}`:T;x&&Z(M)>d?(w.push(x),x=T):x=M}return x&&w.push(x),w.length?w:[""]}function U(r,{follow:d=!1}={}){let w=B(r),x=Math.max(1,String(r).length),T=++F,M=performance.now(),J=Math.max(3200,x*70),z=-1;clearTimeout(A),h.classList.add("on");let Y=()=>{if(T!==F)return;let Q=d&&t.playing&&t.state.kind==="guide"&&t.state.clip!=="speech"&&t.position>0?t.position:(performance.now()-M)/J,re=0,P=0;for(;P<w.length-1&&(re+=w[P].length+1,!(Q*x<re));P++);P!==z&&(z=P,h.textContent=w[P]),Q<1||d&&t.playing&&t.state.kind==="guide"?requestAnimationFrame(Y):A=setTimeout(()=>{T===F&&(h.classList.remove("on"),E=null,le())},900)};Y()}function le(){let r=t.prefs;i.querySelectorAll("[data-enable]").forEach(w=>{w.hidden=r.master});let d=t.state.clip?.split(".")[0];if(Rr[d]&&d!=="home"){let w=t.state.kind==="guide"&&["playing","loading"].includes(t.state.status);w&&E!==d?(E=d,U(Rr[d],{follow:!0})):!w&&E===d&&(E=null,F++,h.classList.remove("on"))}}t.on(le),t.on(()=>{!t.playing&&t.state.status!=="loading"&&document.querySelectorAll("[data-speaking]").forEach(r=>r.removeAttribute("data-speaking"))});let ge=u.querySelector("[data-cartbtn]"),me=u.querySelector("[data-cartp]"),pe=u.querySelector("[data-cartn]");function be(){let r=Pt.items();pe.hidden=!r.length,pe.textContent=r.length,me.innerHTML=`<p class="kicker">Cart</p>${r.length?`<ul class="cart-l">${r.map(d=>`<li><a href="${d.href}">${qe(d.name)}</a><button class="pill" type="button" data-cartrm="${d.id}">Remove</button></li>`).join("")}</ul>`:'<p class="note">Your cart is empty.</p>'}
      ${Qt.canCheckout(r)?'<button class="gb primary" type="button" data-checkout>Checkout</button>':'<button class="gb primary" type="button" disabled>Checkout opens soon</button><p class="note">No payment can be taken yet; items stay in this browser.</p>'}`,me.querySelector("[data-checkout]")?.addEventListener("click",()=>{let d=Qt.checkout(Pt.items());d&&Pt.remove(d)}),me.querySelectorAll("[data-cartrm]").forEach(d=>d.addEventListener("click",()=>{Pt.remove(d.dataset.cartrm),t.sfx("close")}))}Pt.on(be),be();let Le=r=>{me.hidden=!r,ge.setAttribute("aria-expanded",String(r)),t.sfx(r?"open":"close")};ge.addEventListener("click",()=>Le(me.hidden)),document.addEventListener("pointerdown",r=>{!me.hidden&&!r.target.closest(".cartw")&&Le(!1)}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!me.hidden&&(Le(!1),ge.focus())});let Re={emission:1,voice:Mo.voice},g=()=>{Re=Fr(a,_t(Mo)),a.setRibbon?.(0)};g();let v=()=>({home:"home",products:"products",templates:"templates",studio:"studio",sound:"sound"})[Me.name],D=()=>matchMedia("(pointer: coarse)").matches&&Math.min(innerWidth,innerHeight)<820,q=r=>{try{return localStorage.getItem(r)}catch{return null}},L=r=>{try{localStorage.setItem(r,"1")}catch{}},R="en",ae=null,oe=document.createElement("style");oe.textContent=`.orb-ask{position:fixed;left:50%;bottom:calc(18px + env(safe-area-inset-bottom,0px));transform:translate(-50%,6px);z-index:30;display:flex;align-items:center;gap:8px;width:min(420px,calc(100vw - 32px));box-sizing:border-box;
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
@media (pointer:coarse) and (max-width:820px){.caption{font-size:13.5px;line-height:1.35}}`,document.head.append(oe);let ue='<svg viewBox="0 0 24 24"><rect x="9" y="3.5" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v2.5"/></svg>',ie='<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5"/></svg>',de=oi("form","orb-ask");de.hidden=!0,de.setAttribute("role","search"),de.setAttribute("aria-label","Ask the Orb"),de.innerHTML=`<span class="st" data-st aria-live="polite"></span><input type="text" data-q placeholder="${R==="es"?"Pregunta a la Orb\u2026":"Ask the Orb\u2026"}" aria-label="Ask the Orb" autocomplete="off" enterkeyhint="send" maxlength="300">
    <button type="button" data-mic aria-label="Speak" aria-pressed="false"${Wo?"":" hidden"}>${ue}</button><button type="submit" aria-label="Send">${ie}</button>`,u.append(de);let ye=de.querySelector("[data-st]"),Te=de.querySelector("[data-q]"),Ee=de.querySelector("[data-mic]");l.setAttribute("aria-label","Talk with the Orb");let $e=!Wo,Se=()=>{de.hidden=!1,document.body.classList.add("orb-asking"),requestAnimationFrame(()=>de.classList.add("on"))},Ce=()=>{De++,ze(),de.classList.remove("on"),de.hidden=!0,document.body.classList.remove("orb-asking"),Te.blur()};function ze(){if(ee){let r=ee;ee=null,r.abort()}Ee.setAttribute("aria-pressed","false"),ye.textContent=""}function xe(){$e||ee||(t.stop(),ae=null,ye.textContent=R==="es"?"Escuchando\u2026":"Listening\u2026",Ee.setAttribute("aria-pressed","true"),ee=jn({lang:R==="es"?"es-ES":/^en/i.test(navigator.language)?navigator.language:"en-US",onresult:r=>{ye.textContent="",Te.value=r},onerror:r=>{ee=null,Ee.setAttribute("aria-pressed","false"),ye.textContent="",(r==="not-allowed"||r==="service-not-allowed"||r==="unsupported")&&(Fe("mic_denied"),$e=!0,Ee.hidden=!0,Be(Ua("reply.mic",R),"answer"),D()||Te.focus())},onend:r=>{ee&&(ee=null,Ee.setAttribute("aria-pressed","false"),ye.textContent="",Te.value="",r.trim()&&$t(r))}}),ee||(Ee.setAttribute("aria-pressed","false"),ye.textContent=""))}Ee.addEventListener("click",()=>{ee?ze():xe()}),Te.addEventListener("input",()=>{ee&&ze()}),de.addEventListener("submit",r=>{r.preventDefault();let d=Te.value.trim();Te.value="",ze(),d&&(Fe("orb_typed"),$t(d))}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!de.hidden&&Ce()}),document.addEventListener("pointerdown",r=>{!de.hidden&&!r.target.closest(".orb-ask,[data-guide]")&&!Te.value&&!ee&&Ce()});let ee=null,ce=null,he=null;l.addEventListener("pointerdown",r=>{he={x:r.clientX,y:r.clientY}}),l.addEventListener("click",()=>{if(O(),Vt=performance.now()/1e3,Fe("orb_tap"),ee){ze();return}let r=he&&document.elementsFromPoint(he.x,he.y).map(bt).find(Boolean);if(he=null,r){N(r);return}if(t.playing||t.state.status==="loading"){Pe();return}t.sfx("select"),Se(),L("lo:orb:greet"),Pe(),Be(La(),"answer")});function Pe(){n++,De++,ze(),t.stop(),ae=null,xt=null,Et=null,nt(""),document.querySelectorAll("[data-speaking]").forEach(r=>r.removeAttribute("data-speaking"))}document.addEventListener("keydown",r=>{r.key==="Escape"&&(t.playing||t.state.status==="loading")&&Pe()});let dt="h1,h2,h3,h4,p,blockquote,figcaption,li,dt,dd,[data-speak]",at="a,button,[data-href],[role=button]:not([data-speak]),[role=tab],summary,label,input,select,textarea,[contenteditable]",Tt=`${at},form,.hd,.sndc,.orb-ask,.caption,[data-ins],[data-rail],[data-view],[data-modal],[data-hud],.menu,.cart-p,.arc,.dg`,Ke=r=>{let d=(r.getAttribute("aria-label")||r.innerText||r.textContent||"").replace(/\s+/g," ").trim();return/^\S+\.(m4a|wav|mp3|json|js|html|zip)$/i.test(d)?"":d},bt=r=>{let d=r?.closest?.(dt);return d&&i.contains(d)&&!d.closest(Tt)&&!d.querySelector("input,select,textarea,button")&&Ke(d).length>1&&Ke(d).length<900?d:null},Ct=r=>{let d=2166136261;for(let w=0;w<r.length;w++)d^=r.charCodeAt(w),d=Math.imul(d,16777619);return`text.${(d>>>0).toString(36)}`},xt=null,Et=null;function N(r,d=Ke(r)){if(d){if(Et===r&&(t.playing||t.state.status==="loading")){Pe();return}O(),Pe(),Fe("words_spoken"),Et=r,xt=Ct(d),r.setAttribute("data-speaking",""),Be({id:xt,text:d,lang:"en"},"answer")}}i.addEventListener("click",r=>{if(r.target.closest?.(at)||String(getSelection?.()??"").trim())return;let d=bt(r.target);d&&N(d)}),i.addEventListener("keydown",r=>{if((r.key==="Enter"||r.key===" ")&&!r.altKey&&r.target.matches?.(dt)&&bt(r.target)===r.target&&(r.preventDefault(),N(r.target)),r.key==="Enter"&&r.altKey&&r.target.closest?.("a,button")){r.preventDefault();let d=r.target.closest("a,button");N(d,Ke(d))}});let se=()=>i.querySelectorAll("h1,h2,h3,blockquote p,[data-speak]").forEach(r=>{bt(r)===r&&!r.hasAttribute("tabindex")&&r.setAttribute("tabindex","0")}),fe=null;i.addEventListener("pointerover",r=>{let d=r.pointerType==="mouse"&&!r.target.closest?.(at)?bt(r.target):null;d!==fe&&(fe?.classList.remove("rd"),fe=d,d?.classList.add("rd"))}),i.addEventListener("pointerleave",()=>{fe?.classList.remove("rd"),fe=null});let ve=null,we=!1;addEventListener("pointerdown",r=>{let d=r.target.closest?.("a,button,[data-href],.arc-c,.dg-c");!d||d.closest("[data-guide],[data-sound],.sndc,.sx,.orb-ask")||!Ke(d)||d.querySelector("svg")&&!d.innerText.trim()||(ve={t:d,x:r.clientX,y:r.clientY,timer:setTimeout(()=>{we=!0,N(d,Ke(d))},520)})},!0);let Ie=r=>{ve&&(r.type!=="pointermove"||Math.hypot(r.clientX-ve.x,r.clientY-ve.y)>8)&&(clearTimeout(ve.timer),ve=null)};if(addEventListener("pointermove",Ie,!0),addEventListener("pointerup",Ie,!0),addEventListener("pointercancel",Ie,!0),addEventListener("click",r=>{we&&(we=!1,r.preventDefault(),r.stopPropagation())},!0),addEventListener("contextmenu",r=>{(we||ve)&&r.preventDefault()},!0),!q("lo:orb:greet")){let r=d=>{if(d.target.closest?.("[data-guide],.orb-ask,.sndc")||(removeEventListener("pointerdown",r,!0),!D()))return;let w=n;setTimeout(()=>{w!==n||!t.voiceOn||q("lo:orb:greet")||ae||ee||(L("lo:orb:greet"),Be(Ua("reply.greet",R),"answer"))},900)};addEventListener("pointerdown",r,!0)}function Be(r,d="answer"){if(!r?.text||!t.voiceOn)return;U(r.text,{follow:!0}),Vt=performance.now()/1e3,ae=d,t.say(r.text,{id:r.lang==="es"?void 0:r.id??void 0,lang:r.lang,onend:()=>{ae===d&&(ae=null)}})||(ae=null)}let Oe=[],De=0,He=(r,d)=>{for(Oe.push({role:r,content:d});Oe.length>12;)Oe.shift();for(;Oe.length&&Oe[0].role!=="user";)Oe.shift()};function vt(){let r=rr(),d=r.name==="products"&&r.id?Ht.find(w=>w.id===r.id):null;return{route:location.hash||"#/",title:document.title,presentation:La("en").text,product:d?.name,variant:d?r.query.variant||(d.id==="orb"?"clear":void 0):void 0,lang:R}}async function $t(r){R=Qr(r,R);let d=In(r,{here:Me.name,presentation:La,lang:R});if(Fe(d.intent==="fallback"?"orb_fallback":"orb_command",{intent:d.intent||(d.stop?"stop":d.back?"back":d.go?`go:${d.go.split("?")[0].replace("#/","")}`:"answer")}),!d.command&&d.intent!=="hello"&&Rn()&&r.trim()){let w=++De;nt("\u2026"),He("user",r.trim());try{let x=await Pn(Oe.slice(),vt());return w!==De?void 0:(He("assistant",x.say),mt({say:x.say,go:x.go,lang:Qr(x.say,R)}))}catch{if(w!==De)return;Oe.pop()}}mt(d)}function mt(r){if(r.stop){t.stop(),ae=null,nt("");return}if(r.back&&history.back(),r.go&&location.hash!==r.go){ce=r.say?{text:r.say,id:r.id,lang:r.lang}:null,location.hash=r.go;return}r.say?Be({text:r.say,id:r.id,lang:r.lang},"answer"):r.go||nt("")}function nt(r){clearTimeout(A),F++,h.textContent=r,h.classList.toggle("on",!!r),r||le()}let Vt=-99,aa=0,La=(r=R)=>Wi(r,Me.name,Me.id);function $r(){Be(La(),"arrival")}let Gt=!1,ra=()=>i.scrollTop>innerHeight*.25;function Mr(){if(!t.voiceOn||Gt||q("lo:orb:greet")||ae==="answer"||ee||ra())return;Gt=!0,L("lo:orb:greet");let r=n,d=Ua("reply.greet",R),w=()=>{r===n&&t.voiceOn&&Me.name==="home"&&!ae&&!ee&&!ra()&&Be(d,"arrival")};if(navigator.userActivation&&!navigator.userActivation.hasBeenActive){U(d.text);let x=T=>{removeEventListener("pointerdown",x,!0),removeEventListener("keydown",x,!0),!T.target.closest?.("[data-guide],.orb-ask,.sndc")&&setTimeout(w,250)};addEventListener("pointerdown",x,!0),addEventListener("keydown",x,!0);return}w()}function co(r){let d=ce,w=n;ce=null,ee&&!d&&ze(),setTimeout(()=>{if(!(w!==n||location.hash!==r||!t.voiceOn)){if(d){Be(d,"answer");return}Me.name==="home"&&Mr()}},450)}let Me={name:""},yt=null,Mt=[],ar={products:"Products",templates:"Templates",studio:"Studio",sound:"Sound",membership:"Membership",account:"Account",signin:"Sign in",signup:"Sign up",design:"Web Design",about:"About",...Kn};function rr(){let[r,d=""]=(location.hash.replace(/^#/,"")||"/").split("?"),w=r.split("/").filter(Boolean),x=Object.fromEntries(new URLSearchParams(d));return{name:ri[w[0]]||w[0]||"home",id:w[1]||null,query:x,raw:w[0]}}function _a(){let r=rr();if(r.raw&&ri[r.raw]){location.replace(`#/${ri[r.raw]}${r.id?"/"+r.id:""}`);return}if(!["home","products","templates","studio","sound","membership","account","signin","signup","privacy","terms","licence","design","about"].includes(r.name)){location.replace("#/");return}Mt.forEach(T=>T()),Mt=[],et=null,yt&&r.name!=="studio"&&(yt.leave(),yt=null),m.hide(),hr(),e.removeBackdrop(lt.canvas),g();let d=Me.name;Me=r,n++,De++,document.title=Me.name==="home"?"The Light Orb":`${ar[Me.name]??Me.name} \xB7 The Light Orb`,i.className=`lo r-${Me.name}`,document.body.dataset.route=Me.name,qi(),Me.name==="studio"&&d!=="studio"&&Fe("studio_open"),u.querySelectorAll("[data-nav]").forEach(T=>T.toggleAttribute("aria-current",(Ai[T.dataset.nav]??[T.dataset.nav]).includes(Me.name)||T.dataset.nav==="account"&&["account","signin","signup"].includes(Me.name))),u.querySelectorAll("[data-sub]").forEach(T=>T.toggleAttribute("aria-current",T.dataset.sub===Me.name)),d&&Pe(),({home:ir,products:Me.id?qa:Tr,templates:Me.id?js:Cs,studio:Rs,sound:li,membership:()=>_n(i,Ut),account:()=>Ra(i,Ut,Me.id),signin:()=>Vo(i,Ut,"in"),signup:()=>Vo(i,Ut,"up"),privacy:()=>to(i,Ut,"privacy"),terms:()=>to(i,Ut,"terms"),licence:()=>to(i,Ut,"licence"),design:()=>ms(i,Ut,Me.query),about:()=>fs(i,Ut)}[Me.name]??ir)(),Hr(i),se();let x=Fa.get(`lo:scroll:${location.hash}`,null);i.scrollTop=x??0,co(location.hash),d&&i.focus({preventScroll:!0})}let Lr=-1e9;i.addEventListener("scroll",j,{passive:!0}),addEventListener("hashchange",j),i.addEventListener("scroll",()=>{Lr=performance.now(),Fa.set(`lo:scroll:${location.hash}`,i.scrollTop),Me.name==="home"&&ae==="arrival"&&ra()&&(t.stop(),ae=null,nt("")),(D()||innerWidth<700)&&h.classList.contains("on")&&!t.playing&&i.scrollTop>40&&nt("")},{passive:!0}),addEventListener("hashchange",_a),u.querySelector("[data-home]").addEventListener("click",r=>{r.preventDefault(),Fa.set("lo:scroll:#/",0),Me.name==="home"?i.scrollTo({top:0,behavior:o?"auto":"smooth"}):location.hash="#/"});let Ut={page:i,audio:t,ICON:Ve,esc:qe,store:it,go:r=>{location.hash=r},flash:U,api:e,product:m,footer:()=>Ae()},Xe=Fa.get("lo:sel",0),zt=[],or=new URLSearchParams(location.search).get("sel");or&&Fa.set("lo:selv",or);let pa=Fa.get("lo:selv","arc")==="grid";function ir(){if(i.innerHTML=`
      <section class="wel" aria-labelledby="hello">
        <div class="wel-copy ${o?"shown":"reveal"}" data-welcopy>
          <h1 id="hello" class="wel-h"><span>Hello.</span></h1>
          <p class="wel-line">A space for creative possibilities.</p>
          <p class="wel-offer" aria-label="What is here"><a href="#/products">Interactive digital pieces</a><span aria-hidden="true">\xB7</span><a href="#/templates">Website templates</a><span aria-hidden="true">\xB7</span><a href="#/design">Custom web design</a></p>
          <a class="gb primary wel-go" href="#select" data-go>Let\u2019s go</a>
        </div>
        <div class="wel-ctl"><button class="gb small" type="button" data-enable>${Ve.sound}<span>Enable sound</span></button><a class="tl" href="intro.html?replay">Replay intro</a></div>
      </section>
      <section class="qt" aria-label="Quotation">
        <figure class="qt-fig" data-qt><blockquote><p data-speak>${sr.text}</p></blockquote>
          <figcaption>${sr.author} \xB7 <a href="${sr.source}" rel="noopener" target="_blank">${sr.work}</a></figcaption></figure>
      </section>
      <section class="sel${pa?" sel-grid":""}" id="select" aria-labelledby="sel-t">
        <h2 id="sel-t" class="sel-t"><span data-speak tabindex="0">Where would you like to begin?</span></h2>
        ${pa?`<nav class="dg" aria-label="Destinations">${ma.map((r,d)=>`<a class="dg-c" href="${r.route}" data-c="${d}">${va(r)}<span class="dg-t">${r.label}</span><span class="dg-s">${r.line}</span></a>`).join("")}</nav>`:`<div class="arc" data-arc role="group" aria-roledescription="carousel" aria-label="Destinations">
          ${ma.map((r,d)=>`<a class="arc-c" href="${r.route}" data-c="${d}" aria-label="${r.label}: ${r.line}">${va(r,"arc-img")}<span class="arc-l">${r.label}</span><span class="arc-s">${r.line}</span></a>`).join("")}
        </div>
        <div class="arc-ctl"><button class="gb gc small" type="button" data-step="-1" aria-label="Previous">${Ve.prev}</button>
          <div class="segbar" role="tablist" aria-label="Choose destination">${ma.map((r,d)=>`<button class="pill" role="tab" type="button" data-dot="${d}">${r.label}</button>`).join("")}</div>
          <button class="gb gc small" type="button" data-step="1" aria-label="Next">${Ve.next}</button></div>`}
        <p class="sel-more">Inside Products: <a href="#/products">Digital Pieces</a><span aria-hidden="true">\xB7</span><a href="#/sound">Sound</a><span aria-hidden="true">\xB7</span><a href="#/studio">Studio</a></p>
      </section>
      ${Ae()}`,zt=[...i.querySelectorAll("[data-c]")],i.querySelector("[data-go]").addEventListener("click",r=>{r.preventDefault(),t.sfx("select"),i.scrollTo({top:i.scrollTop+i.querySelector("#sel-t").getBoundingClientRect().top-110,behavior:o?"auto":"smooth"})}),i.querySelector("[data-enable]").addEventListener("click",()=>{Fe("sound_enable"),t.set({guide:!0,sfx:!0}),t.sfx("confirm"),D()||$r()}),pa)zt.forEach((r,d)=>{r.addEventListener("pointerenter",()=>Dt(d)),r.addEventListener("focus",()=>Dt(d)),r.addEventListener("click",()=>{t.sfx("open"),Fe("destination",{id:ma[d].id})})}),Ta(!0);else{i.querySelectorAll("[data-step]").forEach(d=>d.addEventListener("click",()=>Dt(Xe+ +d.dataset.step))),i.querySelectorAll("[data-dot]").forEach(d=>d.addEventListener("click",()=>Dt(+d.dataset.dot))),zt.forEach((d,w)=>d.addEventListener("click",x=>{if(k){x.preventDefault();return}w!==Xe?(x.preventDefault(),Dt(w)):(t.sfx("open"),Fe("destination",{id:ma[w].id}))}));let r=i.querySelector("[data-arc]");r.addEventListener("keydown",d=>{d.key==="ArrowRight"&&(Dt(Xe+1),d.preventDefault()),d.key==="ArrowLeft"&&(Dt(Xe-1),d.preventDefault())}),X(r,d=>Dt(Xe+d),()=>Ta()),Ta(!0)}le()}function po(r){let d=String(ma.indexOf(r)+1).padStart(2,"0");return`<span class="arc-img cv cv-${r.id}"><span class="cv-grain"></span><span class="cv-n">${d}</span><span class="cv-t">${r.label}</span></span>`}function va(r,d=""){let w={products:'<img class="lo-light-only" src="./media/cards/products.jpg" alt="" decoding="async" fetchpriority="low"><img class="lo-dark-only" src="./media/cards/products-dark.jpg" alt="" decoding="async" loading="lazy" fetchpriority="low">',templates:'<span class="dg-win"><img class="lo-light-only" src="./media/templates/the-light-orb.cover.jpg" alt="" decoding="async" fetchpriority="low"><img class="lo-dark-only" src="./media/cards/templates-dark.jpg" alt="" decoding="async" loading="lazy" fetchpriority="low"></span>',studio:'<img src="./media/cards/orb-dark.jpg" alt="" decoding="async" fetchpriority="low">',design:bs,sound:`<span class="cv-wave">${[.3,.55,.8,.45,.95,.6,.35,.7,.5,.85,.4,.65,.3,.5].map(x=>`<i style="--h:${x}"></i>`).join("")}</span>`}[r.id];return`<span class="dg-img dg-${r.id} ${d}">${w}</span>`}function Dt(r,d=!0){let w=ta(r,0,ma.length-1);w!==Xe&&(Xe=w,Fa.set("lo:sel",Xe),d&&t.sfx("detent"),a.nudge?.(.5)),Ta()}function Ta(r){if(pa){zt.forEach((x,T)=>x.classList.toggle("on",T===Xe));return}let d=zt[0]?.offsetWidth||300,w=d*.7;zt.forEach((x,T)=>{let M=T-Xe+c/(w*1.2),J=Math.abs(M);x.style.transition=r||b?"none":"",x.style.transform=`translateX(${M*w}px) translateZ(${-J*150}px) rotateY(${ta(-M*30,-48,48)}deg) scale(${1-Math.min(J,2)*.1})`,x.style.zIndex=String(10-Math.round(J)),x.classList.toggle("on",T===Xe),x.tabIndex=T===Xe?0:-1,x.setAttribute("aria-current",T===Xe?"true":"false")}),i.querySelectorAll("[data-dot]").forEach((x,T)=>x.setAttribute("aria-selected",String(T===Xe))),i.querySelectorAll("[data-step]").forEach(x=>{x.disabled=+x.dataset.step<0&&Xe===0||+x.dataset.step>0&&Xe===ma.length-1})}let c=0,b=!1,k=!1;function X(r,d,w){let x=0,T=0,M=null,J=null,z=0,Y=0,$=null;r.addEventListener("touchstart",K=>{let te=K.touches[0];z=te.clientX,Y=te.clientY,$=null},{passive:!0}),r.addEventListener("touchmove",K=>{if(K.touches.length>1)return;let te=K.touches[0],je=te.clientX-z,ke=te.clientY-Y;!$&&Math.hypot(je,ke)>6&&($=Math.abs(je)>Math.abs(ke)?"x":"y"),$==="x"&&K.cancelable&&K.preventDefault()},{passive:!1}),r.addEventListener("touchend",()=>{setTimeout(()=>{$=null},0)},{passive:!0}),r.addEventListener("pointerdown",K=>{K.button||(x=K.clientX,T=K.clientY,M=K.pointerId,J=null,k=!1)}),r.addEventListener("pointermove",K=>{if(K.pointerId!==M)return;let te=K.clientX-x,je=K.clientY-T;!J&&Math.hypot(te,je)>8&&(J=$??(Math.abs(te)>Math.abs(je)?"x":"y"),J==="x"&&(r.setPointerCapture(M),b=!0)),J==="x"&&(c=te,k=!0,w())});let Q=K=>{if(K.pointerId===M){if(M=null,b=!1,J==="x"){let te=c<-60?1:c>60?-1:0;c=0,d(te),w(),setTimeout(()=>{k=!1},0)}J=null}};r.addEventListener("pointerup",Q),r.addEventListener("pointercancel",Q),r.addEventListener("dragstart",K=>K.preventDefault());let re=0,P=0;r.addEventListener("wheel",K=>{if(Math.abs(K.deltaX)<=Math.abs(K.deltaY))return;K.preventDefault();let te=performance.now();te<P||(re+=K.deltaX,Math.abs(re)>60&&(d(Math.sign(re)),re=0,P=te+380))},{passive:!1})}function ne(r){return`<nav class="ptabs" aria-label="Products">${Eo[0].children.map(d=>`<a href="${d.route}"${d.id===r?' aria-current="page"':""}>${d.label}</a>`).join("")}</nav>`}function Ae(){return`<footer class="ft"><a href="#/" class="wm small" aria-label="The Light Orb \u2014 Home">${Go}</a>
      <nav aria-label="Footer"><a href="#/design">Web Design</a><a href="#/about">About</a><a href="#/sound">Sound</a><a href="#/membership">Membership</a><a href="#/account">Account</a>${it.profile()?.email?"":'<a href="#/signup">Join early access</a>'}<a href="intro.html?replay">Replay intro</a><a href="mailto:trescarla@gmail.com">Contact</a></nav>
      <nav aria-label="Legal"><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a><a href="#/licence">Licence</a></nav>
      <span class="ft-n">${"Early access \xB7 free to explore while it takes shape."}</span>
      ${["membership","signup","signin"].includes(Me.name)||it.profile()?.email?"":pr("footer",{compact:!0})}</footer>`}let Je=0,Nt={"orb-slider":yr,"orb-wave":[{id:"gentle",name:"Gentle",line:"Wide, soft ripples.",p:{strength:.6,scale:110}},{id:"classic",name:"Classic",line:"The ripple from the intro.",p:{strength:1,scale:70}},{id:"deep",name:"Deep",line:"Tight, strong rings.",p:{strength:1.6,scale:45}},{id:"rain",name:"Rain",line:"Many small, quick rings, like drops on water.",p:{strength:.5,scale:28}}],"background-pack":[{id:"classic",name:"Classic",line:"The horizon as in the intro.",p:{horizon:.3,lamp:.9}},{id:"wide",name:"Wide floor",line:"A low horizon and more floor.",p:{horizon:.18,lamp:.9}},{id:"high",name:"High horizon",line:"A high horizon and more sky.",p:{horizon:.45,lamp:.9}},{id:"lantern",name:"Lantern",line:"A brighter lamp around the Orb in the dark world.",p:{horizon:.3,lamp:1.6}}],"crystal-controls":yr},ct=r=>r?.code==="kit",rt=(r,d,w)=>`<iframe class="kit-frame" data-kit="${r}|${d}|${w?1:0}" title="${w?"Preview":"Live preview"}"${w?' tabindex="-1" aria-hidden="true" loading="lazy"':""}></iframe>`,st=r=>r.querySelectorAll("[data-kit]").forEach(d=>{let[w,x,T]=d.dataset.kit.split("|");d.srcdoc=wr(w,x,{mini:T==="1"})}),_e=[...Jo.map(r=>({id:`obj-${r.id}`,obj:r.id,fam:"obj",ext:".obj",cat:r.cat,name:r.name,kind:r.line})),...qt.map(r=>({id:`orb-${r.id}`,fam:"orb",variant:r.id,sphere:r.id,ext:".orb",cat:"Orbs",name:r.id==="clear"?"The Orb":`The Orb \xB7 ${r.name}`,kind:r.line,href:`#/products/orb${r.id==="clear"?"":`?variant=${r.id}`}`})),...Ci.filter(r=>r.id!=="orb").flatMap(r=>Nt[r.id].map((d,w)=>({id:w?`${r.id}-${d.id}`:r.id,fam:r.id,variant:w?d.id:null,ext:ct(r)?".html":".kit",cat:ct(r)?"Controls":"Effects",name:`${r.name} \xB7 ${d.name}`,kind:d.line,mini:ct(r)?rt(r.id,d.id,!0):null,cls:d.cls,dark:d.dark,img:ct(r)?null:`./media/products/${r.id}.jpg`,pos:r.id==="background-pack"?`50% ${Math.round(30+(d.p.horizon-.3)*160)}%`:null,href:`#/products/${r.id}${w?`?variant=${d.id}`:""}`})))],Qe=(()=>{let r=_e.filter(te=>te.fam==="orb"),d=_e.filter(te=>ct(na(te.fam))),w=_e.filter(te=>te.obj),x={};r.forEach(te=>(x[qt.find(je=>je.id===te.variant)?.base??"x"]||=[]).push(te));let T=Object.values(x),M=[];for(let te=0;M.length<r.length;te++)T.forEach(je=>je[te]&&M.push(je[te]));let J=[...new Set(d.map(te=>te.fam))],z=[];for(let te=0;z.length<d.length;te++)J.forEach(je=>{let ke=d.filter(Ne=>Ne.fam===je)[te];ke&&z.push(ke)});let Y={1:"gel",4:"type",9:"lens",15:"mag"},$=_e.length,Q=[],re=0,P=0,K=0;for(let te=0;te<$;te++){if(Y[te]){Q.push(w.find(ke=>ke.obj===Y[te]));continue}K+=z.length,K>=M.length+z.length-K&&Q.at(-1)?.fam!==z[P]?.fam&&!ct(na(Q.at(-1)?.fam))&&P<z.length||re>=M.length?(Q.push(z[P++]),K-=M.length+z.length):Q.push(M[re++])}return Q.filter(Boolean).concat(M.slice(re),z.slice(P)).filter((te,je,ke)=>ke.indexOf(te)===je)})(),pt=la?"Free to try \xB7 Code on request":"Free \xB7 Early access",Ze=(r,d="")=>"";function ut(r){r.querySelectorAll("[data-cart]").forEach(d=>d.addEventListener("click",w=>{w.preventDefault(),w.stopPropagation();let x=Qe.find(M=>M.id===d.dataset.cart)||Ds().find(M=>M.id===d.dataset.cart),T=Pt.toggle({id:x.id,name:x.name,href:x.href||"#/sound"});T&&Fe("add_to_cart",{item:x.id}),d.setAttribute("aria-pressed",String(T)),d.querySelector("span").textContent=T?"In cart":"Add to cart",t.sfx(T?"confirm":"select")}))}let Lt=(r,d,w)=>`<button class="gb small" type="button" data-fsave="${r}|${d}" data-name="${qe(w)}" aria-pressed="${it.isSaved(r,d)}">${Ve.heart}<span>${it.isSaved(r,d)?"Saved":"Save"}</span></button>`;function ua(r,d){r.querySelectorAll("[data-fsave]").forEach(w=>w.addEventListener("click",x=>{x.preventDefault(),x.stopPropagation();let[T,M]=w.dataset.fsave.split("|"),J=it.toggleSaved(T,M,w.dataset.name,d(T,M));J&&Fe("save",{kind:T,item:M}),w.setAttribute("aria-pressed",String(J)),w.querySelector("span").textContent=J?"Saved":"Save",t.sfx(J?"confirm":"select")}))}let oa="All";function Tr(){let r;try{r=localStorage.getItem("lo.productsView")}catch{}Qe.some($=>$.cat===oa)||(oa="All"),r!=="grid"&&r!=="large"&&(r=matchMedia("(max-width: 700px)").matches?"grid":"large");let d=$=>$.obj?`<article class="file glass" data-obj-card="${$.obj}" data-cat="${$.cat}" tabindex="0">
        <div class="file-v has-obj" data-obj="${$.obj}"><span class="file-ext">${$.ext}</span><span class="file-tag">New</span></div>
        <div class="file-m"><h3><button class="file-link" type="button" data-obj-open="${$.obj}">${qe($.name)}</button></h3><p class="file-c">${$.cat}</p><p>${qe($.kind)}</p><p class="file-p soon">${oo}</p></div>
        <div class="file-a obj-a"><button class="gb small primary" type="button" data-obj-open="${$.obj}">Open</button>${Lt("product",$.id,$.name)}</div></article>`:`<article class="file glass" data-href="${$.href}" data-cat="${$.cat}">
        <div class="file-v ${$.cls??""}${$.mini?" has-kit":""}${$.dark?" is-dark":""}"${$.sphere?` data-sphere="${$.sphere}"`:""}>${$.img?`<img src="${$.img}" alt="" draggable="false" loading="lazy"${$.pos?` style="object-position:${$.pos}"`:""}>`:""}${$.mini??""}<span class="file-ext">${$.ext}</span></div>
        <div class="file-m"><h3><a class="file-link" href="${$.href}">${qe($.name)}</a></h3><p class="file-c">${$.cat}</p><p>${qe($.kind)}</p><p class="file-p">${pt}</p></div>
        <div class="file-a ds-a">${`${$.fam==="orb"||ct(na($.fam))?`<a class="gb small" href="${$.href}${$.href.includes("?")?"&":"?"}${la?'try=1">Try it \u2014 free':'get=1">Get it free'}</a>`:`<a class="gb small" href="${$.href}">Coming to early access</a>`}`}${Lt("product",$.id,$.name)}<a class="file-studio" href="#/studio?family=${$.fam}${$.variant?`&preset=${$.variant}`:""}">Shape it in Studio ${Ve.next}</a></div></article>`;i.innerHTML=`
      <section class="dest shop">
        ${ne("products")}
        <header class="dh dh-row"><h1>Products</h1><div class="segbar view-tg" role="radiogroup" aria-label="View">${["grid","large"].map($=>`<button class="pill" role="radio" type="button" data-pview="${$}" aria-checked="${$===r}">${$==="grid"?"Grid":"Large"}</button>`).join("")}</div></header>
        <div class="shop-cats" role="toolbar" aria-label="Filter by category"><div class="segbar">${["All",...["Orbs","Materials","Typography","Interaction","Controls"].filter($=>Qe.some(Q=>Q.cat===$))].map($=>`<button class="pill" type="button" data-cat="${$}" aria-pressed="${$===oa}">${$}<span class="n">${$==="All"?Qe.length:Qe.filter(Q=>Q.cat===$).length}</span></button>`).join("")}</div></div>
        <div class="file-grid${r==="grid"?" is-compact":""}">${Qe.map(d).join("")}</div>
      </section>${Ae()}`,ut(i),ua(i,($,Q)=>Qe.find(re=>re.id===Q)?.href??"#/products");let w=()=>document.documentElement.dataset.theme==="dark",x=$=>{let[Q,re]=$.dataset.kit.split("|");return wr(Q,re,{mini:!0,dark:w()})},T=new IntersectionObserver($=>$.forEach(Q=>{let re=Q.target;Q.isIntersecting?re.srcdoc||(re.srcdoc=x(re)):re.srcdoc&&(re.removeAttribute("srcdoc"),re.src="about:blank")}),{rootMargin:"600px 0px"}),M=new IntersectionObserver($=>$.forEach(Q=>Q.target.contentWindow?.postMessage(Q.isIntersecting?"lo:play":"lo:pause","*")));i.querySelectorAll(".file-v .kit-frame").forEach($=>{T.observe($),M.observe($),$.addEventListener("load",()=>$.contentWindow?.postMessage("lo:play","*"))});let J=new MutationObserver(()=>i.querySelectorAll(".file-v .kit-frame[srcdoc]").forEach($=>$.contentWindow?.postMessage(`lo:theme:${w()?"dark":"light"}`,"*")));J.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),Mt.push(()=>{T.disconnect(),M.disconnect(),J.disconnect()}),i.querySelectorAll(".file[data-href]").forEach($=>$.addEventListener("click",Q=>{Q.defaultPrevented||Q.target.closest("button, a")||(t.sfx("open"),location.hash=$.dataset.href)})),i.querySelectorAll("[data-obj]").forEach($=>{let Q=Qo($,$.dataset.obj);Mt.push(()=>Q.dispose())});let z=$=>{t.sfx("open"),is($)};i.querySelectorAll("[data-obj-card]").forEach($=>{$.addEventListener("click",Q=>{Q.target.closest("[data-fsave]")||z($.dataset.objCard)}),$.addEventListener("keydown",Q=>{(Q.key==="Enter"||Q.key===" ")&&Q.target===$&&(Q.preventDefault(),z($.dataset.objCard))})});let Y=()=>{i.querySelectorAll(".shop-cats [data-cat]").forEach($=>$.setAttribute("aria-pressed",String($.dataset.cat===oa))),i.querySelectorAll(".file-grid .file").forEach($=>{$.hidden=oa!=="All"&&$.dataset.cat!==oa})};i.querySelectorAll(".shop-cats [data-cat]").forEach($=>$.addEventListener("click",()=>{oa=$.dataset.cat,t.sfx("select"),Y()})),Y(),i.querySelectorAll("[data-sphere]").forEach($=>{let Q=br($,$.dataset.sphere,{reduced:o,interactive:r!=="grid"});Mt.push(()=>Q.dispose())}),i.querySelectorAll("[data-pview]").forEach($=>$.addEventListener("click",()=>{if($.dataset.pview===r)return;try{localStorage.setItem("lo.productsView",$.dataset.pview)}catch{}t.sfx("press");let Q=scrollY;Mt.forEach(re=>re()),Mt=[],Tr(),scrollTo(0,Q)}))}function qa(){let r=na(Me.id);if(!r||r.published===!1){location.replace("#/products");return}let d=ct(r),w=r.id==="orb"?qt:Nt[r.id],x=w.some(z=>z.id===Me.query.variant)?Me.query.variant:w[0].id,T=z=>w.find(Y=>Y.id===z),M=z=>r.id==="orb"?`orb-${z}`:z===w[0].id?r.id:`${r.id}-${z}`;i.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/products">${Ve.back}<span>Products</span></a>
        <div class="pd-grid">
          <div class="pd-stage glass${d?" has-kit":""}" data-stage>${d?rt(r.id,x,!1):Ms(r.id)}</div>
          <div class="pd-info">
            <p class="kicker">${qe(r.id==="orb"?"Sphere":r.kind)}</p><h1>${qe(r.name)}</h1>
            <p class="lede">${qe(uo[r.id].lede)}</p>
            ${w?`<div class="vars"><p class="lbl">Version</p><div class="segbar" role="radiogroup" aria-label="Version">${w.map(z=>`<button class="pill" role="radio" type="button" data-variant="${z.id}" aria-checked="${z.id===x}">${z.name}</button>`).join("")}</div><p class="var-line" data-vline></p></div>`:""}
            <p class="price" data-price>${pt}</p>
            <div class="acts eq">${r.id==="orb"||d?la?gn(r.id,r.name):`<button class="gb small primary" type="button" data-getfree>${Ve.check}<span>Get it free</span></button>`:'<button class="gb small primary" type="button" data-soon aria-expanded="false" aria-controls="ea-wait"><span>Coming to early access</span></button>'}${Lt("product",M(x),r.name)}</div>
            ${la&&(r.id==="orb"||d)?"":r.id==="orb"?Ss():d?Es():`<div class="ea-wait" id="ea-wait" hidden>${pr("product",{compact:!0,label:`Get an email when ${qe(r.name)} is ready to take, free`})}</div>`}
            ${`<a class="studio-lock" href="#/studio?family=${r.id}">${Ve.check}<span><b>Customise in Studio</b><small>Open to everyone \xB7 Beta</small></span></a>`}
            <dl class="facts ds-facts"><dt>What it does</dt><dd>${qe(uo[r.id].does)}</dd><dt>You receive</dt><dd>${r.receives.map(qe).join(" \xB7 ")}</dd>
              <dt>Availability</dt><dd>${r.id==="orb"||d?la?"Try it: free, right here, no sign-up. Source code: on request \u2014 the demo never needs it.":"Free during early access \u2014 the code is on this page.":"Not available to take yet. Leave your email above to hear when it is."}</dd>
              <dt>Licence</dt><dd>Personal and commercial use; no resale of the source. <a href="#/licence">Read the licence</a></dd>
              <dt>Questions</dt><dd><a href="mailto:trescarla@gmail.com">trescarla@gmail.com</a></dd></dl>
            <details class="acc"><summary>Compatibility and installation</summary><p>${qe(uo[r.id].tech)}</p></details>
          </div>
        </div>
      </section>${Ae()}`,ut(i),ua(i,(z,Y)=>`#/products/${r.id}`),qs(r.id,i.querySelector("[data-stage]"),x),Fe("product_open",{product:r.id,variant:x});let J=z=>{et.sphere?.setKind(z),et.bloomMic?.setVariant(z),r.id==="orb"&&et&&Ts(z===Ls);let Y=T(z),$=i.querySelector("[data-stage]");if(d){$.querySelector("[data-kit]").dataset.kit=`${r.id}|${z}|0`,st($);let te=i.querySelector(".free-c code");te&&(te.textContent=wr(r.id,z))}else r.id!=="orb"&&($.classList.remove("v-dark","v-frost","v-compact"),Y.cls&&$.classList.add(Y.cls),Y.p&&lt.set(Y.p));i.querySelectorAll("[data-variant]").forEach(te=>te.setAttribute("aria-checked",String(te.dataset.variant===z)));let Q=i.querySelector("[data-vline]");if(Q&&(Q.textContent=T(z).line),r.id==="orb"){let te=!0;i.querySelector("[data-price]").textContent=pt;let je=i.querySelector("[data-free]");je&&(je.hidden=!te);let ke=i.querySelector(".free-c code");ke&&(ke.textContent=qr(z))}let re=i.querySelector("[data-cart]");if(re&&(re.dataset.cart=M(z)),re){let te=Pt.has(re.dataset.cart);re.setAttribute("aria-pressed",String(te)),re.querySelector("span").textContent=te?"In cart":"Add to cart"}let P=i.querySelector("[data-fsave]");P.dataset.fsave=`product|${M(z)}`;let K=it.isSaved("product",M(z));P.setAttribute("aria-pressed",String(K)),P.querySelector("span").textContent=K?"Saved":"Save",history.replaceState(null,"",`#/products/${r.id}${z===w[0].id?"":`?variant=${z}`}`)};$s(i,d?r.id:"orb"),hn(i,{audio:t,variant:()=>i.querySelector("[data-variant][aria-checked=true]")?.dataset.variant??"",autoOpen:!!(Me.query.request||Me.query.get)}),Me.query.get&&setTimeout(()=>i.querySelector("[data-getfree]")?.click(),60),i.querySelector("[data-download]")?.addEventListener("click",()=>{let z=i.querySelector("[data-variant][aria-checked=true]")?.dataset.variant??w[0].id;ni(`${r.id}-${z}.html`,wr(r.id,z)),t.sfx("confirm"),Fe("free_code_download",{product:r.id,variant:z})}),i.querySelector("[data-getfree]")?.addEventListener("click",()=>{let z=i.querySelector("[data-freebtn]");z?.getAttribute("aria-expanded")!=="true"&&z?.click(),z?.scrollIntoView({block:"nearest",behavior:"smooth"})}),i.querySelector("[data-soon]")?.addEventListener("click",z=>{let Y=i.querySelector("#ea-wait"),$=Y.hidden;Y.hidden=!$,z.currentTarget.setAttribute("aria-expanded",String($)),t.sfx($?"open":"close"),$&&Y.querySelector("input")?.focus()}),i.querySelectorAll("[data-variant]").forEach(z=>z.addEventListener("click",()=>{J(z.dataset.variant),t.sfx("select"),Fe("variant",{product:r.id,variant:z.dataset.variant})})),J(x)}let qr=(r="clear")=>`<div data-light-orb${r==="clear"?"":` data-variant="${r}"`} style="width:320px;height:320px"></div>
<script type="module" src="https://thelightorb.com/embed/v1/orb.js"><\/script>`,ga=qr();function Ss(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${Ve.check}<span>Get the code \u2014 free</span></button>
      <div class="free-p" id="free-code" hidden><p class="note">Paste this where the Orb should appear. It fills the box you give it; drag to turn it, tap to stir it.</p>
        <pre class="free-c glass"><code>${qe(ga)}</code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function Es(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${Ve.check}<span>Get the code \u2014 free</span></button>
      <div class="free-p" id="free-code" hidden><p class="note">One self-contained file: open it in a browser, or paste its style, markup and script into your page. Change the material with the --cc-* variables at the top.</p>
        <pre class="free-c glass kit-code"><code></code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button><button class="gb small" type="button" data-download><span>Download .html</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function ni(r,d){let w=URL.createObjectURL(new Blob([d],{type:"text/html"})),x=document.createElement("a");x.href=w,x.download=r,document.body.append(x),x.click(),x.remove(),setTimeout(()=>URL.revokeObjectURL(w),1e3)}function $s(r,d="orb"){let w=r.querySelector("[data-freebtn]");if(!w)return;let x=r.querySelector("#free-code"),T=r.querySelector("[data-copy]");w.addEventListener("click",()=>{let M=x.hidden;x.hidden=!M,w.setAttribute("aria-expanded",String(M)),t.sfx(M?"open":"select"),M&&Fe("free_code_open",{product:d})}),T.addEventListener("click",async()=>{let M=!1;try{await navigator.clipboard.writeText(r.querySelector(".free-c code").textContent),M=!0}catch{let J=document.createRange();J.selectNodeContents(r.querySelector(".free-c code"));let z=getSelection();z.removeAllRanges(),z.addRange(J)}T.querySelector("span").textContent=M?"Copied":"Selected \u2014 press Copy",M&&(t.sfx("select"),Fe("free_code_copy",{product:d})),setTimeout(()=>{T.isConnected&&(T.querySelector("span").textContent="Copy code")},2200)})}let uo={orb:{lede:"A 3D sphere you can place in your own work. Choose the material and what it holds inside.",does:"Drag to turn it; it keeps turning slowly on its own. A tap makes whatever is in it move a little faster. Twenty versions: clear glass, liquid metal, porcelain, bloom, and glass holding a light, points of light, glitter or beads.",tech:"An ES module built on Three.js r186 (WebGL 2). Works in current Chrome, Safari, Edge and Firefox. The integration notes explain how to place it in a page and choose a version."},"orb-slider":{lede:"A glass capsule whose thumb is a small orb with its own slow inner light. Slide it to enter.",does:"A slide-to-confirm control. Drag the orb; let go and a spring carries it home, or to the end to confirm (it then sends a confirm event). Arrow keys, Enter, Home and End work too.",tech:"One HTML file: CSS variables for the material and a few lines of plain JavaScript. No framework, no WebGL. Current Chrome, Safari, Edge and Firefox."},"orb-wave":{lede:"The ripple the Orb leaves on the floor when it lands, drawn in light.",does:"Each touch raises a wave that spreads across the surface and fades.",tech:"A full-screen shader with an impact API: position, strength and scale. Needs WebGL 2."},"background-pack":{lede:"Two environments in one pack: a dark world and a light one, and the change between them.",does:"Moves smoothly from dark to light, controlled by a single exposure value.",tech:"A full-screen shader with exposure, horizon and lamp controls. Needs WebGL 2."},"crystal-controls":{lede:"Buttons, switches, fields and sliders in six glass materials. A highlight follows the pointer; presses give like glass on a spring.",does:"Every control has default, hover, focus, pressed, selected, disabled and loading states. Choose Clear, Smoke, Chrome, Porcelain, Gel or Bloom; each is a set of CSS variables.",tech:"One HTML file: plain CSS and a few lines of JavaScript for the pointer light and the slider spring. No framework. Current Chrome, Safari, Edge and Firefox."}};function Ms(r){return r==="orb"?'<div class="pd-sph" data-sph></div><span class="pd-hint">Drag to turn it. Tap to stir it.</span><button class="gb gc bloom-mic" data-bloom-mic type="button" aria-label="Turn Bloom microphone on" aria-pressed="false" title="Let your voice move Bloom" hidden><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 10v1a6 6 0 0 0 12 0v-1M12 17v4M9 21h6"/></svg></button><span class="bloom-mic-status" data-bloom-mic-status role="status" aria-live="polite"></span>':r==="orb-slider"?'<div class="cap" data-cap role="slider" tabindex="0" aria-label="Slide to enter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="cap-l">slide to enter</span></div>':r==="orb-wave"?'<button class="gb small pd-btn" type="button" data-drop>Drop the Orb</button><span class="pd-hint">Or tap the floor.</span>':r==="background-pack"?'<div class="segbar pd-seg" role="radiogroup" aria-label="Environment"><button class="pill" role="radio" type="button" data-env="0" aria-checked="false">Dark world</button><button class="pill" role="radio" type="button" data-env="1" aria-checked="true">Light</button></div>':`<div class="kit"><button class="gb primary" type="button">Continue</button><button class="gb" type="button">Secondary</button><button class="gb gc" type="button" aria-label="Confirm">${Ve.check}</button>
      <button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><input class="gi" placeholder="Your name" aria-label="Example field">
      <input class="grange" type="range" value="60" aria-label="Example slider" style="--p:60%"><button class="gb" type="button" disabled>Disabled</button><button class="gb" type="button" aria-busy="true">Loading</button></div>`}let et=null,Ls="clear";function Ts(r){if(!et)return;et.real=r;let d=et.el.querySelector("[data-sph]");if(d)for(let w of d.children)w.style.visibility=r?"hidden":"";r?m.show(_t(fa("original").config)):m.hide()}function qs(r,d,w="clear"){if(et={id:r,el:d,cap:0,drop:null},!(r==="crystal-controls"||r==="orb-slider")){if(r!=="orb"&&m.show(_t(fa("original").config)),r==="orb"){et.sphere=br(d.querySelector("[data-sph]"),w,{reduced:o}),Mt.push(()=>et?.sphere?.dispose());let x=d.querySelector("[data-bloom-mic]"),T=d.querySelector("[data-bloom-mic-status]"),M=t.microphone({onState({status:K,error:te}){let je=K==="listening",ke=K==="requesting";x.setAttribute("aria-pressed",String(je)),x.setAttribute("aria-label",je?"Turn Bloom microphone off":ke?"Cancel Bloom microphone request":"Turn Bloom microphone on"),x.dataset.state=K,x.title=je?"Microphone on \u2014 your voice moves Bloom":ke?"Waiting for microphone permission":"Let your voice move Bloom",T.textContent=te||(je?"Listening":""),T.classList.toggle("is-error",!!te)},onLevel(K){x.style.setProperty("--input-level",K.toFixed(3))}});et.sphere.setVoiceInput(()=>M.sample()),et.bloomMic={setVariant(K){x.hidden=K!=="bloom",K!=="bloom"&&M.stop()}},x.addEventListener("click",K=>{K.stopPropagation(),t.sfx("select"),M.toggle()}),Mt.push(()=>M.dispose());let J=d.querySelector("[data-sph]"),z=null,Y=0,$=0,Q=0,re=()=>{Q=0,!(!et?.real||z)&&(Y*=.94,$+=Y,m.orb?.setObjectYaw($),Math.abs(Y)>5e-4&&(Q=requestAnimationFrame(re)))};J.addEventListener("pointerdown",K=>{et?.real&&(z={x:K.clientX,t:performance.now(),moved:0},J.setPointerCapture(K.pointerId))}),J.addEventListener("pointermove",K=>{if(!z||!et?.real)return;let te=K.clientX-z.x;z.x=K.clientX,z.moved+=Math.abs(te),Y=te*.012,$+=Y,m.orb?.setObjectYaw($)});let P=()=>{if(!z)return;let K=z.moved<6;z=null,K?(m.orb?.nudge(.8),t.sfx("detent")):Q||(Q=requestAnimationFrame(re))};J.addEventListener("pointerup",P),J.addEventListener("pointercancel",P),Mt.push(()=>{cancelAnimationFrame(Q),et?.real&&m.hide()})}if(r==="orb-slider"){let x=d.querySelector("[data-cap]"),T=null,M=z=>{et.cap=ta(z),x.setAttribute("aria-valuenow",Math.round(et.cap*100))};x.addEventListener("pointerdown",z=>{T={x:z.clientX,v:et.cap},x.setPointerCapture(z.pointerId),t.sfx("select")}),x.addEventListener("pointermove",z=>{T&&M(T.v+(z.clientX-T.x)/(x.offsetWidth-x.offsetHeight))});let J=()=>{T&&(T=null,m.orb?.nudge(.5),et.cap>.9?(M(1),t.sfx("confirm")):(M(0),t.sfx("select")))};x.addEventListener("pointerup",J),x.addEventListener("pointercancel",J),x.addEventListener("keydown",z=>{z.key==="ArrowRight"&&M(et.cap+.1),z.key==="ArrowLeft"&&M(et.cap-.1),z.key==="End"&&M(1),z.key==="Home"&&M(0)})}if((r==="orb-wave"||r==="background-pack")&&(Vr(d),e.addBackdrop(lt.canvas),lt.set({horizon:.3,strength:1,scale:70}),lt.setExposure(r==="background-pack"?1:0,!0),r==="orb-wave"&&(d.addEventListener("pointerdown",x=>{if(x.target.closest("button"))return;let T=d.getBoundingClientRect(),M=x.clientY-T.top;M>T.height*.55&&(lt.impact(x.clientX-T.left,M),m.orb?.nudge(.7),t.sfx("detent"))}),d.querySelector("[data-drop]").addEventListener("click",()=>{et.drop={vy:0,y:null,contacts:0},t.sfx("select")})),r==="background-pack"&&d.querySelectorAll("[data-env]").forEach(x=>x.addEventListener("click",()=>{lt.setExposure(+x.dataset.env),t.sfx("open"),d.querySelectorAll("[data-env]").forEach(T=>T.setAttribute("aria-checked",String(T===x)))}))),r==="crystal-controls"){d.querySelectorAll(".gb:not([disabled])").forEach(T=>T.addEventListener("click",()=>t.sfx("select"))),d.querySelector(".gsw").addEventListener("click",T=>{let M=T.currentTarget;M.setAttribute("aria-checked",String(M.getAttribute("aria-checked")!=="true")),t.sfx("select")}),d.querySelector(".gi").addEventListener("input",T=>{T.isTrusted&&t.sfx("type")});let x=d.querySelector(".grange");x.addEventListener("input",()=>{x.style.setProperty("--p",`${x.value}%`),t.sfx("level",x.value/100)})}}}let Ar=2,Cr=(r,d="")=>`<span class="dev" data-dev><span class="dev-body"><span class="dev-screen"><img src="${r.cover.src}" alt="${qe(d)}" draggable="false" decoding="async"${d?' width="1600" height="1000"':""}></span><span class="dev-glare" aria-hidden="true"></span></span><span class="dev-floor" aria-hidden="true"></span></span>`;function si(r){o||r.querySelectorAll("[data-dev]").forEach(d=>{d.addEventListener("pointermove",w=>{let x=d.getBoundingClientRect();d.style.setProperty("--ry",`${((w.clientX-x.left)/x.width-.5)*10}deg`),d.style.setProperty("--rx",`${((w.clientY-x.top)/x.height-.5)*-8}deg`)}),d.addEventListener("pointerleave",()=>{d.style.removeProperty("--ry"),d.style.removeProperty("--rx")})})}let As=r=>`<!doctype html>
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
`;function Cs(){let r=wt.length+Ar;i.innerHTML=`
      <section class="dest tpl">
        <header class="dh"><h1>Complete compositions</h1></header>
        <div class="folder" data-folder>
          <div class="folder-tab glass"><span>Templates</span><small>${wt.length} ${wt.length===1?"template":"templates"}${Ar?` \xB7 ${Ar} in the making`:""}</small></div>
          <div class="folder-body glass"><span class="folder-glow" aria-hidden="true"></span><span class="folder-num" data-fnum aria-hidden="true"></span>
            <div class="folder-track" data-track role="listbox" aria-label="Templates" tabindex="0">
              ${wt.map((Q,re)=>`<button class="tcard glass" type="button" role="option" data-t="${re}" aria-label="Open ${qe(Q.name)}">
                <span class="tcard-n">${String(re+1).padStart(2,"0")}</span>
                <span class="tcard-cv">${Cr(Q)}</span>
                ${Q.showcase?`<span class="tcard-tag">${qe(Q.category)}</span>`:""}<span class="tcard-t">${qe(Q.name)}</span><span class="tcard-l">${qe(Q.line)}</span></button>`).join("")}
              ${Array.from({length:Ar},(Q,re)=>`<div class="tcard glass soon" aria-hidden="true"><span class="tcard-n">${String(wt.length+re+1).padStart(2,"0")}</span><span class="tcard-cv"><span class="soon-orb"></span><span class="soon-lbl">In the making</span></span><span class="tcard-t">Next composition</span><span class="tcard-l">Joining the collection soon.</span></div>`).join("")}
            </div>
            <div class="folder-open" data-open hidden></div>
            <div class="folder-ctl" data-fctl><button class="gb gc small" type="button" data-fstep="-1" aria-label="Previous">${Ve.prev}</button><span class="count" data-fcount></span><button class="gb gc small" type="button" data-fstep="1" aria-label="Next">${Ve.next}</button></div>
          </div>
        </div>
      </section>${Ae()}`;let d=i.querySelector("[data-track]"),w=[...d.children],x=i.querySelector("[data-open]"),T=i.querySelector("[data-fctl]"),M=0,J=Q=>{w.forEach((re,P)=>{let K=P-M+c/340,te=Math.abs(K);re.style.transition=Q||b?"none":"",re.style.transform=`translateX(calc(-50% + ${K*96}%)) translateZ(${-te*120}px) rotateY(${ta(-K*18,-30,30)}deg) scale(${1-Math.min(te,2)*.08})`,re.style.zIndex=String(10-Math.round(te)),re.style.opacity=String(te>2.2?0:1-te*.22),re.classList.toggle("on",P===M),re.tagName==="BUTTON"&&re.setAttribute("aria-selected",String(P===M))}),i.querySelector("[data-fnum]").textContent=String(M+1).padStart(2,"0"),i.querySelector("[data-fcount]").textContent=M<wt.length?`${String(M+1).padStart(2,"0")} / ${String(wt.length).padStart(2,"0")}`:"In the making",i.querySelectorAll("[data-fstep]").forEach(re=>{re.disabled=+re.dataset.fstep<0&&M===0||+re.dataset.fstep>0&&M===r-1})},z=Q=>{let re=ta(M+Q,0,r-1);re!==M&&(M=re,t.sfx("detent")),J()};i.querySelectorAll("[data-fstep]").forEach(Q=>Q.addEventListener("click",()=>z(+Q.dataset.fstep))),d.addEventListener("keydown",Q=>{Q.key==="ArrowRight"&&(z(1),Q.preventDefault()),Q.key==="ArrowLeft"&&(z(-1),Q.preventDefault())}),X(d,z,()=>J());let Y=Q=>{let re=wt[Q],P={id:`template-${re.id}`,name:re.name,href:`#/templates/${re.id}`};Qe.some(K=>K.id===P.id)||Qe.push(P),x.innerHTML=`<button class="tl folder-back" type="button" data-close>${Ve.back}<span>All templates</span></button>
        <div class="fo-grid"><figure class="fo-cv">${Cr(re,`The beginning of the ${re.name} template.`)}</figure>
          <div class="fo-info"><p class="kicker">${String(Q+1).padStart(2,"0")} \xB7 ${re.showcase?qe(re.category):"Template"}</p><h2>${qe(re.name)}</h2>${re.showcase?`<p class="fo-label">${qe(re.subtitle)}</p>`:""}<p>${qe(re.line)}</p>
            <ul class="fo-inc">${re.includes.map(K=>`<li>${qe(K)}</li>`).join("")}</ul>${re.showcase?'<p class="note">Showcase \xB7 not for sale.</p>':`<p class="price">${pt}</p>`}
            <div class="acts eq">${re.showcase?`<a class="gb small primary" href="${re.demo}" target="_blank" rel="noopener" aria-label="${qe(re.cta)}, opens in a new tab">${qe(re.cta)}</a><a class="gb small" href="#/templates/${re.id}">Details</a>`:`<a class="gb small primary" href="#/templates/${re.id}" data-vt>Open template</a>${Ze(P)}`}${Lt("template",re.id,re.name)}</div></div></div>`,ut(x),ua(x,(K,te)=>`#/templates/${te}`),si(x),zs(x),x.querySelector("[data-close]").addEventListener("click",$),d.hidden=!0,T.hidden=!0,x.hidden=!1,x.classList.remove("in"),x.offsetWidth,x.classList.add("in"),t.sfx("open"),x.querySelector("[data-close]").focus({preventScroll:!0})},$=()=>{x.hidden=!0,d.hidden=!1,T.hidden=!1,J(!0),t.sfx("close"),d.focus({preventScroll:!0})};w.forEach((Q,re)=>Q.tagName==="BUTTON"&&Q.addEventListener("click",P=>{if(k){P.preventDefault();return}re!==M?(M=re,J(),t.sfx("detent")):Y(re)})),J(!0)}function zs(r){r.querySelectorAll("[data-vt]").forEach(d=>d.addEventListener("click",w=>{if(o||!document.startViewTransition||w.metaKey||w.ctrlKey)return;w.preventDefault();let x=d.getAttribute("href");r.querySelector("[data-dev]")?.style.setProperty("view-transition-name","tpl-device"),document.startViewTransition(()=>{history.pushState(null,"",x),_a()})}))}let Os={"the-light-orb":{what:"The opening of this website as a starting point: the Orb hosts the page, a greeting arrives under it, a quotation follows and the visitor chooses where to go.",special:"The Orb is a live WebGL glass object, not a picture: it turns when dragged and answers a tap. The rest is quiet HTML and CSS around it.",pages:["One page: welcome, quotation and destination selector","Hosted Orb embed (any of its versions via data-variant)","Four destination links ready to rename"],responsive:"Fluid type and spacing; the Orb scales with the viewport and the destinations wrap onto several lines on phones.",tech:"Plain HTML and CSS with one ES module script (the hosted Orb embed, Three.js r186, WebGL 2). No framework, no build step. Current Chrome, Edge, Firefox and Safari.",use:"Download the starter, open it in a browser, then edit the greeting, quotation and links. Change data-variant on the Orb to switch its material.",availability:"The starter file is free during early access. The full composition you see on this site is not packaged as a download yet.",starter:["One .html file you open in any browser","The live Orb from the hosted embed, any version","Greeting, quotation slot and four destination links, ready to edit","Fluid layout for phones and large screens"],full:["The arrival sequence: the Orb hosting the page as you scroll","Quotation scene and the destination selector with its motion","Narration and glass sound effects","Source files, documentation and a licence for the whole composition"]}};function js(){let r=wt.find(Y=>Y.id===Me.id);if(!r){location.replace("#/templates");return}let d=Os[r.id]??{},w=(Y,$)=>$?`<dt>${Y}</dt><dd>${$}</dd>`:"";i.innerHTML=`
      <section class="pd tpd">
        <a class="back tl" href="#/templates">${Ve.back}<span>Templates</span></a>
        <div class="pd-grid">
          ${r.showcase?`
          <figure class="pd-stage cover-big" data-tcover>${Cr(r,`The beginning of the ${r.name} template.`)}</figure>
          <div class="pd-info"><p class="kicker">${r.showcase?qe(r.category):"Template"}</p><h1>${qe(r.name)}</h1>${r.showcase?`<p class="fo-label">${qe(r.subtitle)}</p>`:""}<p class="lede">${qe(r.line)}</p>
            <div class="acts eq">${r.showcase?`<a class="gb small primary" href="${r.demo}" target="_blank" rel="noopener" aria-label="${qe(r.cta)}, opens in a new tab">${qe(r.cta)}</a>`:'<a class="gb small" href="#/">View it live</a>'}${r.starter&&!0?'<button class="gb small primary" type="button" data-starter>Download starter \u2014 free</button>':""}</div>
            ${r.showcase?'<p class="note">Showcase \xB7 not for sale. Originally designed and built for a maternity and postpartum brand; the demo runs on its own, with purchases disabled.</p>':r.starter&&!0?'<p class="note">A single .html file: the Orb (hosted embed), a greeting, a quotation slot and four destinations, ready to edit. <a href="#/licence">Licence</a></p>':'<p class="note">Purchase opens soon.</p>'}
            <dl class="facts"><dt>Includes</dt><dd>${r.includes.map(qe).join(" \xB7 ")}</dd></dl>
            <p class="note" data-covermeta></p></div>
          `:`
          <div class="tpd-stage">
            <figure class="pd-stage cover-big" data-tcover>${Cr(r,`The beginning of the ${r.name} template.`)}</figure>
            <div class="tpd-live" data-live hidden><div class="tpd-frame" data-frame><iframe title="${qe(r.name)} \u2014 live preview" loading="lazy" data-src="intro.html?skip#/"></iframe></div></div>
            <div class="tpd-bar"><div class="segbar" role="radiogroup" aria-label="Preview">
              <button class="pill" role="radio" type="button" data-pv="cover" aria-checked="true">Cover</button>
              <button class="pill" role="radio" type="button" data-pv="1280" aria-checked="false">Desktop</button>
              <button class="pill" role="radio" type="button" data-pv="390" aria-checked="false">Phone</button></div>
              <span class="note" data-covermeta></span></div>
          </div>
          <div class="pd-info"><p class="kicker">Template \xB7 ${String(wt.indexOf(r)+1).padStart(2,"0")}</p><h1>${qe(r.name)}</h1><p class="lede">${qe(d.what??r.line)}</p>
            <div class="tpd-offer">
              <section class="tpd-o now" aria-labelledby="tpd-o1"><p class="kicker">Available now \xB7 free during early access</p><h2 id="tpd-o1">Starter file</h2>
                ${d.starter?`<ul>${d.starter.map(Y=>`<li>${qe(Y)}</li>`).join("")}</ul>`:""}
                <div class="acts eq">${r.starter&&!0?'<button class="gb small primary" type="button" data-starter>Download starter (.html)</button>':""}${Lt("template",r.id,r.name)}</div>
                <p class="note"><a href="#/licence">Licence</a></p></section>
              <section class="tpd-o later" aria-labelledby="tpd-o2"><p class="kicker">In development \xB7 not downloadable</p><h2 id="tpd-o2">Complete template</h2>
                ${d.full?`<ul>${d.full.map(Y=>`<li>${qe(Y)}</li>`).join("")}</ul>`:""}
                <p class="note">You can explore it live on this site today. It will be offered once its source, sounds and texts are cleared for redistribution.</p></section>
            </div>
            <dl class="facts ds-facts">
              ${w("What makes it",qe(d.special??""))}
              ${w("Pages and features",(d.pages??r.includes).map(qe).join("<br>"))}
              ${w("Responsive",qe(d.responsive??""))}
              ${w("Built with",qe(d.tech??""))}
              ${w("How to use it",qe(d.use??""))}
              ${w("Availability",qe(d.availability??""))}
              ${w("Questions",'<a href="mailto:trescarla@gmail.com">trescarla@gmail.com</a>')}
            </dl>
            <a class="studio-lock" href="#/design"><span><b>Want one made for you?</b><small>Custom web design, built around your idea</small></span></a>
          </div>
          `}
        </div>
      </section>${Ae()}`,si(i),i.querySelector("[data-tcover] [data-dev]")?.style.setProperty("view-transition-name","tpl-device"),ua(i,(Y,$)=>`#/templates/${$}`),i.querySelector("[data-starter]")?.addEventListener("click",()=>{ni(`${r.id}-starter.html`,As(r)),t.sfx("confirm"),Fe("template_starter_download",{template:r.id})});let x=i.querySelector("[data-tcover]"),T=i.querySelector("[data-live]"),M=i.querySelector("[data-frame]"),J=M?.querySelector("iframe"),z=()=>{let Y=+M.dataset.w||1280,$=Y>700?800:844,Q=Math.min(1,T.clientWidth/Y);Object.assign(J.style,{width:`${Y}px`,height:`${$}px`,transform:`scale(${Q})`}),M.style.height=`${$*Q}px`,M.style.width=`${Y*Q}px`};M&&i.querySelectorAll("[data-pv]").forEach(Y=>Y.addEventListener("click",()=>{M&&i.querySelectorAll("[data-pv]").forEach(Q=>Q.setAttribute("aria-checked",String(Q===Y))),t.sfx("press");let $=Y.dataset.pv;x.hidden=$!=="cover",T.hidden=$==="cover",$!=="cover"&&(M.dataset.w=$,J.src||(J.src=J.dataset.src),z(),Fe("template_live_preview",{template:r.id,width:$}))})),M&&(addEventListener("resize",z),Mt.push(()=>removeEventListener("resize",z))),fetch(r.cover.meta).then(Y=>Y.json()).then(Y=>{let $=i.querySelector("[data-covermeta]");$&&($.textContent=r.showcase?`Preview: a capture of the live demo, ${Y.captured}.`:`Preview: a capture of this website, ${Y.captured}.`)}).catch(()=>{})}function li(){let r=t.prefs.voice,d=[...za.map(P=>({group:P.full?"voices":"more",key:`voice_audition.${P.id}`,clip:"voice_audition",voice:P.id,title:P.name,tag:`${P.accent} \xB7 ${P.gender}`,sub:P.line,use:P.id,note:P.full?"":`Page narration in ${P.name}; other guide lines in ${sa(P.lines).name}.`})),...["home","products","templates","studio","sound"].map(P=>({group:"guide",key:`${P}.${r}`,clip:P,voice:r,title:P==="home"?"Welcome":P[0].toUpperCase()+P.slice(1),sub:Rr[P]})),...lr.map(P=>({group:"sfx",key:`sfx.${P.id}`,url:P.file,title:P.name,sub:P.line}))],w=(P,K,te,je=!0)=>`<details class="sg"${je?" open":""}><summary><h2>${K}</h2><span class="sg-n">${d.filter(ke=>ke.group===P).length}</span><p>${te}</p></summary><div class="sgrid">${d.filter(ke=>ke.group===P).map(ke=>`
      <article class="si si-row"><button class="si-play gb gc small" type="button" data-play="${ke.key}" aria-label="Play ${qe(ke.title)}">${Ve.play}</button>
        <div class="si-t"><h3>${qe(ke.title)}${ke.tag?`<span class="file-ext">${qe(ke.tag)}</span>`:'<span class="file-ext">.m4a</span>'}</h3><p>${qe(ke.sub)}</p>${ke.note?`<p class="note">${qe(ke.note)}</p>`:""}</div>
        <div class="si-w" data-wave="${ke.key}" role="slider" tabindex="0" aria-label="Position in ${qe(ke.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><canvas></canvas></div>
        <div class="si-m"><span class="si-d" data-dur="${ke.key}">\u2013:\u2013\u2013</span></div>
        <div class="si-x eq">${ke.use?`<button class="gb small" type="button" data-use="${ke.use}" aria-pressed="${r===ke.use}"><span>${r===ke.use?"In use":"Use voice"}</span></button>`:""}${ke.group!=="guide"?Ze({id:`sound-${ke.key}`}):""}${Lt("sound",ke.key,ke.title)}</div></article>`).join("")}</div></details>`;i.innerHTML=`
      <section class="dest snd-dest">
        ${ne("sound")}
        <header class="dh"><h1>Voices and sounds</h1><p class="dh-l">Twelve neural voices, each reading the same line. Choose one and the guide speaks with it across the site. Current guide voice: <b>${qe(sa(r).name)}</b>.</p></header>
        ${w("voices","Guide voices","Every line the guide says, rendered in each of these voices.")}
        ${w("more","More voices","Different characters for the guide. Compare them on the same line.",!1)}
        ${w("guide","Guide narration",`What the guide says on each page, in ${qe(sa(r).name)}\u2019s voice.`,!1)}
        ${w("sfx","Interface sounds","Short, quiet sounds for touch, panels and wheels.")}
      </section>${Ae()}`,i.querySelectorAll(".si").forEach(P=>{P.querySelector('[data-play^="sfx."]')&&(P.querySelector(".file-ext").textContent=".wav")}),ua(i,()=>"#/sound");let x=new Map,T=(P,K)=>{let te=i.querySelector(`[data-dur="${CSS.escape(P)}"]`);te&&(te.textContent=K)},M=new Set,J=P=>{M.has(P.key)||(M.add(P.key),(P.url?t.peaksUrl(P.url,80):t.peaks(P.clip,P.voice,80)).then(K=>{x.set(P.key,K),T(P.key,Is(K.duration))}).catch(()=>{M.delete(P.key),T(P.key,"Unavailable")}))},z="IntersectionObserver"in window?new IntersectionObserver(P=>P.forEach(K=>{if(!K.target.isConnected){z.unobserve(K.target);return}if(K.isIntersecting){z.unobserve(K.target);let te=d.find(je=>je.key===K.target.dataset.wave);te&&J(te)}}),{rootMargin:"200px 0px"}):null;i.querySelectorAll("[data-wave]").forEach(P=>z?z.observe(P):J(d.find(K=>K.key===P.dataset.wave))),go=d;let Y=P=>P.url?P.key:`${P.clip}.${P.voice}`;ut(i);let $=(P,K=0)=>(J(P),P.url?t.playUrl(P.key,P.url,{from:K}):t.play(P.clip,{voice:P.voice,kind:"audition",from:K}));i.querySelectorAll("[data-play]").forEach(P=>P.addEventListener("click",()=>{let K=d.find(je=>je.key===P.dataset.play),te=Y(K);t.state.clip===te&&t.playing?t.pause():t.state.clip===te&&t.state.status==="paused"?t.resume():$(K)})),i.querySelectorAll("[data-wave]").forEach(P=>{let K=d.find(Ne=>Ne.key===P.dataset.wave),te=Y(K),je=!1,ke=Ne=>{let We=P.getBoundingClientRect();return ta((Ne.clientX-We.left)/We.width)};P.addEventListener("pointerdown",async Ne=>{je=!0,P.setPointerCapture(Ne.pointerId);let We=ke(Ne);t.state.clip!==te&&await $(K),t.seek(We)}),P.addEventListener("pointermove",Ne=>{je&&t.state.clip===te&&t.seek(ke(Ne))}),P.addEventListener("pointerup",()=>{je=!1}),P.addEventListener("keydown",Ne=>{t.state.clip!==te||!t.duration||(Ne.key==="ArrowRight"&&t.seek(t.position+1/t.duration),Ne.key==="ArrowLeft"&&t.seek(t.position-1/t.duration))})}),i.querySelectorAll("[data-use]").forEach(P=>P.addEventListener("click",()=>{let K=scrollY;t.stop(),t.set({voice:P.dataset.use}),t.sfx("confirm"),Fe("voice_use",{voice:P.dataset.use}),li(),scrollTo(0,K),U(`${sa(P.dataset.use).name} is now the guide\u2019s voice.`)}));let Q=0,re=()=>{if(Q=requestAnimationFrame(re),go!==d){cancelAnimationFrame(Q);return}for(let P of i.querySelectorAll("[data-wave]")){let K=d.find(wa=>wa.key===P.dataset.wave);if(!K)continue;let te=Y(K),je=x.get(K.key),ke=P.firstElementChild,Ne=P.getBoundingClientRect();if(Ne.bottom<0||Ne.top>innerHeight)continue;let We=t.state.clip===te,It=We?t.position:0,ya=We?t.state.energy:0,Ge=We&&t.playing;P.setAttribute("aria-valuenow",Math.round(It*100));let tt=i.querySelector(`[data-play="${CSS.escape(K.key)}"]`);if(tt&&tt.dataset.on!==String(Ge)&&(tt.dataset.on=String(Ge),tt.innerHTML=Ge?Ve.pause:Ve.play,tt.setAttribute("aria-label",`${Ge?"Pause":"Play"} ${K.title}`)),!je)continue;let Ft=Math.min(devicePixelRatio||1,2);ke.width!==Math.round(Ne.width*Ft)&&(ke.width=Math.round(Ne.width*Ft),ke.height=Math.round(Ne.height*Ft));let ia=ke.getContext("2d");ia.setTransform(Ft,0,0,Ft,0,0),ia.clearRect(0,0,Ne.width,Ne.height);let Rt=je.bins.length,fi=Math.min(2,Ne.width/Rt*.4),xo=Math.max(.5,(Ne.width-fi*(Rt-1))/Rt),Ys=Ne.height/2;for(let wa=0;wa<Rt;wa++){let bi=(wa+.5)/Rt<=It,Vs=bi&&Math.abs((wa+.5)/Rt-It)<2.5/Rt?ya:0,xi=Math.max(2,(je.bins[wa]*.9+Vs*.2)*(Ne.height-4));ia.fillStyle=bi?"#262827":"rgba(38,40,39,.2)",ia.beginPath(),ia.roundRect(wa*(xo+fi),Ys-xi/2,xo,xi,xo/2),ia.fill()}}};re(),Mt.push(()=>cancelAnimationFrame(Q))}let Is=r=>`${Math.floor(r/60)}:${String(Math.round(r%60)).padStart(2,"0")}`;function Rs(){if(yt&&(yt.leave(),yt=null),!0){i.innerHTML="",yt=zn({api:e,audio:t,top:u,page:i,query:Me.query,ICON:Ve,flash:U,product:m,store:it});return}i.innerHTML=`
      <section class="st-lock">
        <div class="lock-blur" aria-hidden="true"><i class="lb-bar"></i><i class="lb-sph"></i><i class="lb-ins"></i></div>
        <div class="lock-card glass dark">
          <span class="lock-i">${Ve.lock}</span>
          <p class="kicker">Studio</p><h1>For members</h1>
          <p>Shape the sphere: its material, its colour and what moves inside it. Studio opens with membership.</p>
          <div class="acts eq"><a class="gb small primary" href="#/membership">See membership</a><a class="gb small" href="#/products">Browse products</a></div>
        </div>
      </section>`}function Ps(r,d,{W:w,H:x}){let T=t.energy(),M=t.playing&&(t.state.kind==="guide"||t.state.kind==="audition"&&Me.name==="sound");a.setSpeech(M&&!mo()?T*(o?.35:.9):0),aa+=((M&&!mo()||ee?1:0)-aa)*Math.min(1,d*(M?4:1.2));{let Y=r-Vt,$=Y<0?0:Y<3.5?xa(Y/.4):1-xa((Y-3.5)/1.6);a.setRibbon?.(Math.max($,aa))}m.orb?.setSpeech(t.playing&&t.state.kind==="audition"&&mo()?T*(o?.35:1):0);let J=w<700,z;if(yt)z=yt.frame(r,d,{W:w,H:x}),m.frame(z.product??null);else if(Me.name==="home")z=_s(w,x,J);else{let Y=Bs(w,x,J);if(J){let $=performance.now()-Lr;fo+=(($<700?.18:1)-fo)*Math.min(1,d*6),Y.vis=fo}r-pi>.18&&(pi=r,ci=!(t.playing||ee)&&Fs(Y),ui=matchMedia("(pointer:coarse)").matches&&!!document.activeElement?.matches("input,textarea,select")),Ya+=((ci?1:0)-Ya)*Math.min(1,d*7),Y.x+=(w-(J?15:17)-Y.x)*Ya,Y.d+=((J?30:34)-Y.d)*Ya,Y.vis=Math.max(Y.vis*(1-Ya*.25),Ya>.5?.62:0),ui&&(Y.vis=0),z={warm:0,orb:Y,emission:Re.emission}}if(!yt){let Y=Ws(w,x,d);m.frame(Y),Y?.ground&&(z.grounds||=[]).push({y:Y.ground,x:Y.x,d:Y.d})}return V=yt?null:z.orb,Hs(yt?z.product&&Me.name==="studio"&&Ns()==="orb"?{...z.product,passive:!0}:null:z.orb),z}let di=null,go=[],Ds=()=>go.map(r=>({id:`sound-${r.key}`,name:r.title,href:"#/sound"})),Ns=()=>yt?.draft?.family??"orb",ho=null;addEventListener("pointerdown",r=>{ho=Me.name==="studio"&&l.classList.contains("passive")&&!l.hidden?{x:r.clientX,y:r.clientY,t:performance.now()}:null},!0),addEventListener("pointerup",r=>{let d=ho;if(ho=null,!d||Math.hypot(r.clientX-d.x,r.clientY-d.y)>5||performance.now()-d.t>350)return;let w=l.getBoundingClientRect();Math.hypot(r.clientX-(w.left+w.width/2),r.clientY-(w.top+w.height/2))>w.width/2||r.target.closest?.("button,a,input,select,label,.sx-ins,.st-top")||l.click()},!0);let ha={x:0,y:0,t:0,v:0};addEventListener("pointermove",r=>{if(r.pointerType!=="mouse"||r.buttons)return;let d=performance.now(),w=Math.hypot(r.clientX-ha.x,r.clientY-ha.y),x=Math.max(8,d-ha.t);if(w<2)return;ha.v+=(w/x*1e3-ha.v)*.35,ha.x=r.clientX,ha.y=r.clientY,ha.t=d;let T=r.target.closest?.("[data-guide]")?"orb":r.target.closest?.(".gb,.gsw,.gi,.gsel,.pill,.arc-c,.dg-c,button,a")?"glass":"air";t.motion(Math.min(1,ha.v/2e3),T)},{passive:!0});let Wa=null;addEventListener("pointermove",r=>{if(Me.name!=="studio"||!(r.buttons&1)||!r.target.closest?.("[data-view], input[type=range]")){Wa=null;return}let d=performance.now();if(Wa){let w=Math.hypot(r.clientX-Wa.x,r.clientY-Wa.y)/Math.max(8,d-Wa.t)*1e3;t.friction(Math.min(1,w/700))}Wa={x:r.clientX,y:r.clientY,t:d}},{passive:!0});let mo=()=>!1,fo=1,Ya=0,ci=!1,pi=0,ui=!1,gi="p,h1,h2,h3,h4,li,dd,dt,a,button,input,select,textarea,label,img,figcaption,blockquote,small,b,em,i,code,pre,form,summary,iframe,[role=slider]";function Fs(r){let d=r.d/2+6;for(let[w,x]of[[0,0],[-d,0],[0,-d],[-d*.7,-d*.7],[-d,d*.5]])for(let T of document.elementsFromPoint(r.x+w,r.y+x))if(!(T===l||T.closest?.(".lo-top")||T.tagName==="CANVAS")){if(!i.contains(T)){if(T===document.body||T===document.documentElement)break;continue}if(T.matches(gi)||T.closest(gi))return!0;break}return!1}let hi=0,bo=()=>{hi=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--lo-safe-bottom"))||0};bo(),addEventListener("resize",bo),window.visualViewport?.addEventListener("resize",bo);let Bs=(r,d,w)=>({x:r-(w?34:50),y:d-hi-(w?38:52),d:w?40:50,vis:1});function Hs(r){let d=r&&(r.vis??1)>.5&&!!v();if(l.hidden=!d,l.classList.toggle("passive",!!r?.passive),d){let w=Math.max(44,r.d);Object.assign(l.style,{left:`${ta(r.x-w/2,0,innerWidth-w)}px`,top:`${ta(r.y-w/2,0,innerHeight-w)}px`,width:`${w}px`,height:`${w}px`})}}function _s(r,d,w){let x=i.scrollTop/d,T=i.querySelector("[data-welcopy]"),M=i.querySelector("[data-qt]"),J=i.querySelector(".wel-ctl"),z=1-xa((x-.04)/.2),Y=zt[Xe],$=Y?.getBoundingClientRect(),Q=(i.querySelector(".qt")?.offsetTop??d)/d,re=(i.querySelector("#select")?.offsetTop??2*d)/d,P=i.querySelector("#sel-t"),K=P?(P.getBoundingClientRect().top+i.scrollTop-i.getBoundingClientRect().top)/d:2,te=K-.8,je=Md(x,.13,.3,te-.22,te),ke=[...z>.01?[T,J]:[],...je>.01?[M]:[],P,...zt,i.querySelector(".arc-ctl"),i.querySelector(".sel-more"),i.querySelector(".ft")].filter(Boolean).map(tt=>tt.getBoundingClientRect()).filter(tt=>tt.width&&tt.height&&tt.bottom>0&&tt.top<d&&tt.right>0&&tt.left<r).map(({left:tt,top:Ft,right:ia,bottom:Rt})=>({left:tt,top:Ft,right:ia,bottom:Rt}));T&&(T.style.setProperty("--wipe",z.toFixed(3)),T.style.visibility=z<.01?"hidden":""),J&&(J.style.setProperty("--wipe",z.toFixed(3)),J.style.visibility=z<.01?"hidden":""),M&&(M.style.setProperty("--wipe",je.toFixed(3)),M.style.transform=`translateY(${(20*(1-xa((x-.13)/.17))-24*xa((x-te+.22)/.22)).toFixed(1)}px)`,M.style.visibility=je<.01?"hidden":"");let Ne=ta(Math.min(r*(w?.46:.19),d*.28),120,280),We={x:r/2,y:d*(w?.3:.29),d:Ne},It={x:r/2,y:d*.87,d:Ne*.3},ya=xa((x-.08)/Math.max(.3,Q-.5)),Ge={x:tr(We.x,It.x,ya),y:tr(We.y,It.y,ya),d:tr(We.d,It.d,ya)};if(Y){let tt=$,Ft=xa((x-te+.1)/.2);if(Ft>0){let ia=w?40:50,Rt={x:pa?tt.left+tt.width/2:r/2,y:tt.bottom+44,d:ia};Ge={x:tr(Ge.x,Rt.x,Ft),y:tr(Ge.y,Rt.y,Ft),d:tr(Ge.d,Rt.d,Ft)}}}return{orb:{...Ge,vis:1},guideAvoid:ke,warm:1,ground:{y:Ge.y+Ge.d/2},emission:Re.emission}}function Ws(r,d,w){if(Me.name==="sound"&&di?.isConnected){let x=di.getBoundingClientRect(),T=Math.min(x.width,x.height)*.78;return x.bottom>0?{x:x.left+x.width/2,y:x.top+x.height/2,d:T,vis:1,ground:x.top+x.height/2+T/2}:null}if(Me.name==="products"&&!Me.id){let x=i.querySelector("[data-orbslot]");if(!x)return null;let T=x.getBoundingClientRect(),M=x.closest(".pc")?.classList.contains("on"),J=Math.min(T.width,T.height)*.74;return T.width>10?{x:T.left+T.width/2,y:T.top+T.height/2,d:J,vis:M?1:.7,ground:T.top+T.height/2+J/2}:null}if(Me.name==="products"&&Me.id&&et?.el?.isConnected){let x=et,T=x.el.getBoundingClientRect();if(x.id==="orb"){if(!x.real)return null;let M=x.el.querySelector("[data-sph]")?.getBoundingClientRect();if(!M||M.width<10||M.bottom<0||M.top>d)return null;let J=Math.min(M.width,M.height)*.8;return{x:M.left+M.width/2,y:M.top+M.height/2,d:J,vis:1,snap:!0}}if(x.id==="orb-slider"){let M=x.el.querySelector("[data-cap]");if(!M)return null;let J=M.getBoundingClientRect(),z=J.height*.84,Y=(J.height-z)/2;return{x:J.left+Y+z/2+x.cap*(J.width-J.height),y:J.top+J.height/2,d:z,vis:1,snap:!0}}if(x.id==="orb-wave"||x.id==="background-pack"){let M=Math.min(96,T.width*.16),J=T.height*.7+M*.1,z=J-M/2;if(x.drop){let Y=x.drop;Y.y==null&&(Y.y=-T.height*.45),Y.vy+=2600*w,Y.y+=Y.vy*w,Y.y>=0&&(Y.y=0,lt.impact(T.width/2,J,ta(Y.vy/1400)),m.orb?.nudge(.8),t.sfx("detent"),Y.vy*=-.38,(++Y.contacts>2||Math.abs(Y.vy)<120)&&(x.drop=null)),z+=x.drop?x.drop.y:0}return lt.setOrb({x:T.width/2,y:z,d:M}),{x:T.left+T.width/2,y:T.top+z,d:M,vis:1,snap:!!x.drop}}}return null}let mi=()=>{let r=document.activeElement;if(Me.name!=="design"||!matchMedia("(pointer:coarse)").matches||!r?.matches(".iq input:not([type=radio]):not([type=checkbox]),.iq textarea")||!i.contains(r))return;let d=window.visualViewport,w=r.getBoundingClientRect(),x=Math.max(d?.offsetTop||0,p.getBoundingClientRect().bottom)+12,T=(d?.offsetTop||0)+(d?.height||innerHeight)-16;(w.top<x||w.bottom>T)&&(i.scrollTop+=w.top-(x+Math.max(0,(T-x-Math.min(w.height,T-x))/2)))};i.addEventListener("focusin",()=>requestAnimationFrame(mi)),window.visualViewport?.addEventListener("resize",()=>requestAnimationFrame(mi)),addEventListener("resize",()=>{Me.name==="home"&&Ta(!0)}),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__lo={audio:t,worldPreview:lt,product:m,store:it,readableTexts:()=>[...new Set([...i.querySelectorAll(dt)].map(bt).filter(Boolean))].map(r=>{let d=Ke(r);return{id:Ct(d),text:d}}),linkLabels:()=>[...i.querySelectorAll("a,button,[data-href],.arc-c,.dg-c")].filter(r=>!r.closest(".hd,.sx")&&Ke(r)).map(r=>{let d=Ke(r);return{id:Ct(d),text:d}}),get studio(){return yt},get route(){return Me},get sel(){return Xe},get psel(){return Je}});try{Object.keys(sessionStorage).filter(r=>r.startsWith("lo:scroll:")||r==="lo:sel").forEach(r=>sessionStorage.removeItem(r))}catch{}return Xe=0,_a(),le(),{frame:Ps,audio:t,get route(){return Me},get studio(){return yt},reapply:()=>g()}}function oi(e,a){let o=document.createElement(e);return o.className=a,o}var so={hostDuration:.95,follow:7,damping:.92,pearl:[243,243,241],chamber:[23,26,25],whiten:2.2},Ba=matchMedia("(prefers-reduced-motion: reduce)").matches,Er=(e,a=0,o=1)=>Math.min(o,Math.max(a,e)),Ha=(e,a,o)=>e+(a-e)*o,ys=e=>{let a=Er(e);return a<.5?4*a*a*a:1-(-2*a+2)**3/2},ws=(e,a,o)=>e.map((t,s)=>Ha(t,a[s],o)),lo=(e,a=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${a})`,ks=!1;document.addEventListener("lightorb:intro-complete",e=>ii(e.detail));window.__lightorbIntroComplete&&ii(window.__lightorbIntroComplete.detail);document.body.classList.contains("static")&&ii(null);function Ld(){let e=document.createElement("div");e.style.cssText="position:absolute;left:0;top:0;border-radius:50%;pointer-events:none;will-change:transform;background:radial-gradient(circle at 34% 28%,#fff 0 10%,rgba(255,255,255,.55) 24%,rgba(225,228,230,.35) 58%,rgba(170,176,180,.45) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),inset 0 -12px 24px rgba(120,126,130,.18),0 18px 30px -18px rgba(38,40,39,.45)";let a=()=>a,o={element:e,place(t){e.style.width=e.style.height=`${t.d}px`,e.style.transform=`translate(${t.x-t.d/2}px,${t.y-t.d/2}px)`,e.style.opacity=t.visibility??1}};return new Proxy(o,{get:(t,s)=>s in t?t[s]:a})}function ii(e){if(ks)return;let o=document.querySelector(".intro").querySelector(".intro-world"),t=e?.orb??Ld();ks=!0;for(let g of document.querySelectorAll(".intro .cue, .skip"))g.setAttribute("aria-hidden","true"),g.inert=!0;let s=document.createElement("style");s.textContent=".x-surface,.x-orb{position:fixed;inset:0;pointer-events:none}.x-surface{z-index:6;width:100%;height:100%}.x-orb{z-index:30}",document.head.append(s);let m=document.createElement("canvas");m.className="x-surface",m.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="x-orb",document.body.append(m,i),i.append(t.element),t.attachPointer(document.createElement("div"))();let u=m.getContext("2d");t.prepareTone("ivory"),t.prepareTone("dark");let p=0,h=0,l=1,f="",G=()=>{f="",p=Math.max(1,innerWidth),h=Math.max(1,innerHeight),l=Math.min(devicePixelRatio||1,1.5),m.width=Math.round(p*l),m.height=Math.round(h*l)};G(),addEventListener("resize",G),m.addEventListener("contextrestored",()=>{f=""});let H=performance.now()/1e3,n={x:0,y:0,d:0,vx:0,vy:0,vd:0,from:null,hosted:!1},O=new Set,A=null,F=null,E=0,C=1,W=1,I=1,V=H,S={left:.65,right:.55,env:.5,exposure:0,yaw:0,pitch:0,platform:!0},y=(g,v)=>{let D=performance.now()/1e3,q=Er(D-V,0,.05);V=D,n.from||(n.from={x:g.x,y:g.y,d:g.d}),A=F?.frame(D,q,{W:p,H:h})??null;let L=A?.orb??{x:p/2,y:h*.42,d:Math.min(p*.3,h*.42)},R=Ba?1:ys((D-H)/so.hostDuration);if(!n.hosted)n.x=Ha(n.from.x,L.x,R),n.y=Ha(n.from.y,L.y,R),n.d=Ha(n.from.d,L.d,R),R>=1&&(n.hosted=!0,t.attachPointer(document.createElement("div"))(),F?.reapply?.(),t.setMono?.(!1));else if(Ba||A?.snap)n.x=L.x,n.y=L.y,n.d=L.d,n.vx=n.vy=n.vd=0;else{let de=so.follow,ye=so.damping;n.vx+=(de*de*(L.x-n.x)-2*ye*de*n.vx)*q,n.x+=n.vx*q,n.vy+=(de*de*(L.y-n.y)-2*ye*de*n.vy)*q,n.y+=n.vy*q,n.vd+=(de*de*(L.d-n.d)-2*ye*de*n.vd)*q,n.d+=n.vd*q}n.hosted&&!n.hostedAt&&(n.hostedAt=D);let ae=Ba?1:ys((D-H-.25)/so.whiten),oe=Math.min(A?.warm??1,1-ae);C=Ba?oe:Ha(C,oe,.2),E=Ha(E,A?.room==="chamber"?1:0,Ba?1:.12),W=Ha(W,A?.orb?.vis??1,Ba?1:.14);let ue=1;for(let de of A?.guideAvoid??[]){let ye=Er(n.x,de.left,de.right),Te=Er(n.y,de.top,de.bottom);ue=Math.min(ue,Er((Math.hypot(n.x-ye,n.y-Te)-n.d/2)/4))}I=W*ue,Number.isFinite(n.x+n.y+n.d)||(console.warn("orb pose NaN",JSON.stringify(L),JSON.stringify(n)),Object.assign(n,{x:L.x,y:L.y,d:L.d,vx:0,vy:0,vd:0})),ge();let ie=C<.002;return{...g,x:n.x,y:n.y,d:n.d,squash:0,contact:0,worldY:ie?-9999:n.y,hideWorld:ie,visibility:I,emission:g.emission*(A?.emission??1),raster:Math.ceil(Math.max(n.d,L.d,140)*1.06)}};if(e?.orb)e.takeOver(y);else{let g=()=>{t.place(y({x:p/2,y:h/2,d:0,emission:1})),requestAnimationFrame(g)};requestAnimationFrame(g)}try{ge()}catch{}try{t.setBackdrop((g,v)=>le(g,v,n))}catch(g){console.warn("backdrop",g)}let j=(()=>{try{let g=document.createElement("canvas").getContext("2d");return g.filter="blur(1px)",g.filter==="blur(1px)"}catch{return!1}})(),Z=document.createElement("canvas"),B=Z.getContext("2d");function U(g,v,D,q){return Z.width!==q&&(Z.width=Z.height=q),B.globalCompositeOperation="copy",B.drawImage(o,g,v,D,D,0,0,q,q),B.globalCompositeOperation="saturation",B.fillStyle="#808080",B.fillRect(0,0,q,q),B.globalCompositeOperation="destination-in",B.drawImage(o,g,v,D,D,0,0,q,q),B.globalCompositeOperation="source-over",Z}function le(g,v,D){let q=D.d/v.diameter,L=v.extent*q,R=D.x-L/2,ae=D.y-L/2,oe=v.extent/L,ue=ie=>ie.width>0&&ie.height>0;if(g.fillStyle=lo(Kt().pearl),g.fillRect(0,0,v.extent,v.extent),C>.002&&ue(o)){let ie=o.width/Math.max(1,innerWidth),de=!document.documentElement.classList.contains("warm");de&&j&&(g.filter="grayscale(1) contrast(1.06)"),de&&!j?g.drawImage(U(R*ie,ae*ie,L*ie,v.extent),0,0):g.drawImage(o,R*ie,ae*ie,L*ie,L*ie,0,0,v.extent,v.extent),de&&j&&(g.filter="none")}ue(m)&&g.drawImage(m,R*l,ae*l,L*l,L*l,0,0,v.extent,v.extent);for(let ie of O){if(!ie.isConnected||!ue(ie))continue;let de=ie.getBoundingClientRect();de.right<R||de.left>R+L||de.bottom<ae||de.top>ae+L||g.drawImage(ie,(de.left-R)*oe,(de.top-ae)*oe,de.width*oe,de.height*oe)}}function ge(){let g=1-C,v=g>0&&g<.999,D=JSON.stringify([Kt(),p,h,l,g>0,v||A?.glows?.length?g:0,E>.002?E:0,v?[n.x,n.y]:0,A?.glows,A?.grounds,E>.002?[S,A?.stage,A?.product?.x,A?.product?.d,A?.product?.ground]:0]);if(D===f)return;if(u.setTransform(l,0,0,l,0,0),u.clearRect(0,0,p,h),g>0){u.globalAlpha=1;let L=Kt(),R=L.pearl,ae=u.createLinearGradient(0,0,0,h);if(ae.addColorStop(0,lo(ws(R,L.top,.5))),ae.addColorStop(.6,lo(R)),ae.addColorStop(1,lo(ws(R,L.low,.55))),u.fillStyle=ae,u.fillRect(0,0,p,h),me(p*.62,-h*.12,Math.max(p*.85,h*.55),L.sky,L.skyA),me(p*.05,h*1.05,p*.45,L.mass,L.massA),u.globalAlpha=1,g<.999){let oe=Math.hypot(p,h),ue=n.x||p/2,ie=n.y||h/2,de=g*g*(3-2*g),ye=Math.max(0,oe*1.15*de-oe*.45),Te=ye+oe*.55,Ee=u.createRadialGradient(ue,ie,ye,ue,ie,Te);Ee.addColorStop(0,`rgba(0,0,0,${Math.min(1,de*1.6)})`),Ee.addColorStop(1,"rgba(0,0,0,0)"),u.globalCompositeOperation="destination-in",u.fillStyle=Ee,u.fillRect(0,0,p,h),u.globalCompositeOperation="source-over"}}let q=Kt();for(let L of A?.glows??[]){u.save(),u.globalAlpha=L.k*g,u.translate(L.x,L.y),u.scale(1,L.h/L.w);let R=u.createRadialGradient(0,0,0,0,0,L.w);R.addColorStop(0,`rgba(${q.glow},${q.glowA})`),R.addColorStop(.5,`rgba(${q.glow},${q.glowA*.31})`),R.addColorStop(1,`rgba(${q.glow},0)`),u.fillStyle=R,u.fillRect(-L.w,-L.w,L.w*2,L.w*2),u.restore()}E>.002&&be(E);for(let L of A?.grounds??[])Le(L,L,1);f=D}function me(g,v,D,q,L){let R=u.createRadialGradient(g,v,0,g,v,D);R.addColorStop(0,`rgba(${q},${L})`),R.addColorStop(1,`rgba(${q},0)`),u.fillStyle=R,u.fillRect(g-D,v-D,D*2,D*2)}let pe=Array.from({length:160},(g,v)=>{let D=Math.sin(v*12.9898)*43758.5453,q=D-Math.floor(D),L=Math.sin(v*78.233)*12345.678%1;return[q*Math.PI*2,Math.abs(L)*.9-.25,.3+v%7/10]});function be(g){let v=A?.stage??{x:0,y:0,w:p,h},D=2**(S.exposure*.5),q=S.left,L=S.right,R=v.x+v.w/2,ae=v.y+v.h*.52,oe=S.yaw,ue=S.pitch;u.save(),u.globalAlpha=g,u.fillStyle="#070808",u.fillRect(0,0,p,h),u.fillStyle="#ffffff";for(let[Se,Ce,ze]of pe){let xe=Se-oe*ze,ee=R+Math.sin(xe)*v.w*.9,ce=ae-(Ce+ue*.6*ze)*v.h;Math.cos(xe)<-.2||ee<v.x||ee>v.x+v.w||(u.globalAlpha=g*.1*ze*D,u.fillRect(ee,ce,1.1,1.1))}u.globalAlpha=g;let ie=ae+v.h*(.12-ue*.55),de=A?.product?.ground??ae+v.h*.18,ye=u.createLinearGradient(0,ie,0,v.y+v.h);ye.addColorStop(0,"rgba(255,255,255,0)"),ye.addColorStop(.25,`rgba(255,255,255,${.035*D})`),ye.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=ye,u.fillRect(v.x,ie,v.w,v.y+v.h-ie);let Te=A?.product?.x??R,Ee=A?.product?.d??v.h*.4;for(let[Se,Ce]of[[-1,q],[1,L]]){if(Ce<=.01)continue;let ze=Te+Se*Ee*(1.1+.5*Math.sin(oe*Se+.4)),xe=.18+.3*Math.max(0,Math.sin(.15+ue));u.save(),u.translate(ze,de),u.scale(1,xe);let ee=u.createRadialGradient(0,0,0,0,0,Ee*1.3);ee.addColorStop(0,`rgba(240,242,240,${.12*Ce*D})`),ee.addColorStop(1,"rgba(240,242,240,0)"),u.fillStyle=ee,u.beginPath(),u.arc(0,0,Ee*1.3,0,Math.PI*2),u.fill(),u.restore();let ce=Se<0?v.x:v.x+v.w,he=u.createRadialGradient(ce,ae,0,ce,ae,v.w*.45);he.addColorStop(0,`rgba(230,234,232,${.07*Ce*D})`),he.addColorStop(1,"rgba(230,234,232,0)"),u.fillStyle=he,u.fillRect(v.x,v.y,v.w,v.h)}let $e=u.createRadialGradient(R,ae,v.h*.2,R,ae,Math.hypot(v.w,v.h)*.62);$e.addColorStop(0,"rgba(0,0,0,0)"),$e.addColorStop(1,"rgba(0,0,0,.55)"),u.fillStyle=$e,u.fillRect(0,0,p,h),u.restore()}function Le(g,v,D){if(!Number.isFinite(v.d+v.x+g.y)||v.d<=0)return;let q=v.d/2,L=E>.5||Kt().orb.dark;u.save(),u.globalAlpha=D,u.translate(v.x,g.y),u.scale(1,.2);let R=u.createRadialGradient(0,0,0,0,0,q*1.5);L?(R.addColorStop(0,"rgba(240,240,236,.12)"),R.addColorStop(1,"rgba(240,240,236,0)"),u.globalCompositeOperation="lighter"):(R.addColorStop(0,"rgba(70,72,78,.22)"),R.addColorStop(.5,"rgba(70,72,78,.07)"),R.addColorStop(1,"rgba(70,72,78,0)")),u.fillStyle=R,u.beginPath(),u.arc(0,0,q*1.5,0,Math.PI*2),u.fill(),u.restore()}let Re={orb:t,reduced:Ba,chamber:S,body:{get x(){return n.x},get y(){return n.y},get d(){return n.d},get hosted(){return n.hosted}},addBackdrop:g=>O.add(g),removeBackdrop:g=>O.delete(g),drawBackdrop:le,exportPNG(g,v=t.element){let q=document.createElement("canvas");q.width=Math.round(g.w*2),q.height=Math.round(g.h*2);let L=q.getContext("2d");L.drawImage(m,g.x*l,g.y*l,g.w*l,g.h*l,0,0,q.width,q.height);for(let R of v.querySelectorAll("canvas")){let ae=R.getBoundingClientRect();L.drawImage(R,(ae.left-g.x)*2,(ae.top-g.y)*2,ae.width*2,ae.height*2)}return new Promise(R=>q.toBlob(R,"image/png"))}};F=vs(Re),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__exit={api:Re,body:n,site:F,get scene(){return A},get visibility(){return I}})}export{so as EXIT};
