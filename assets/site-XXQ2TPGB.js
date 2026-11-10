import{b as Oi,c as zi,e as Gr,f as Ii,g as Pi,h as Xr,i as Ra,j as Kr,k as Ga,l as Ri,m as jo,n as sr,o as _e,p as Di}from"./chunk-SSEBXT2N.js";import{a as Bi,b as Fi,c as Oo,d as Ni,e as Hi,f as _i,g as Xt,h as lr,i as dr}from"./chunk-OIL5RNA2.js";import"./chunk-63YMMEBD.js";var Fa=[{id:"products",label:"Products",route:"#/products",line:"Interactive digital pieces for your website, ready to use.",action:"Explore products",clip:"products",words:["products","product","pieces","piece","objects","gallery","shop"]},{id:"templates",label:"Templates",route:"#/templates",line:"Complete compositions to start from.",action:"Browse templates",clip:"templates",words:["templates","template","compositions","websites","cassettes"]},{id:"studio",label:"Studio",route:"#/studio",line:"Coming soon: a creative space to explore and experiment.",action:"Join the Studio list",clip:"studio",words:["studio","editor","customize","customise","edit","workshop"]},{id:"sound",label:"Sound",route:"#/sound",line:"Voices and the quiet sounds of glass.",action:"Listen",clip:"sound",words:["sound","sounds","voice","voices","audio","listen"]},{id:"design",label:"Web Design",route:"#/design",line:"A website designed and built around your idea.",action:"Start a project",clip:null,words:["design","commission","hire","custom","bespoke","project","inquiry","enquiry"]},{id:"about",label:"About",route:"#/about",line:"The person behind the work.",action:"Meet Carla",clip:null,words:["about","carla"]}],Da=e=>Fa.find(a=>a.id===e),Wi=[Da("products"),Da("templates"),Da("design"),{...Da("studio"),soon:!0},Da("about")],Yi={products:["products"],templates:["templates"],design:["design"],studio:["studio","soon"],about:["about"]},ja=[{...Da("products"),line:"Interactive digital pieces, ready to use."},{...Da("templates"),line:"Complete website experiences to explore."},{...Da("design"),line:"A website made around your idea."}];var zo=e=>(Object.values(e).forEach(a=>a&&typeof a=="object"&&zo(a)),Object.freeze(e)),Jr=zo({version:1,shell:{roughness:.01,thickness:.78,ior:1.58,tint:"#cdd2cf",tintAmount:.72,elastic:0},interior:{kind:"light",amount:.5,size:.5,motion:.4,fill:.5,colour:"#f1f0ec"},light:{colour:"#f6f6f3",strength:.9,x:-.04,y:-.3,z:.12,spread:.8,glow:.3},motion:{idle:0},voice:{enabled:!0,response:.6}}),Sr=(e,a,i,t)=>zo({id:e,name:a,line:i,family:"orb",config:{...structuredClone(Jr),...Object.fromEntries(Object.entries(t).map(([l,c])=>[l,{...Jr[l],...c}]))}}),Ba=[Sr("original","Light","Clear glass holding one soft white light.",{}),Sr("beads","Beads","Small glass beads resting and rolling inside the shell.",{interior:{kind:"beads",amount:.6,size:.55,motion:.45},light:{strength:.7},shell:{thickness:.15,ior:1.3}}),Sr("glitter","Glitter","Fine reflective flecks suspended in the volume.",{interior:{kind:"glitter",amount:.6,size:.35,motion:.35,colour:"#f4f4f2"}}),Sr("liquid","Liquid","A clear liquid with a meniscus that moves with the glass.",{interior:{kind:"liquid",fill:.42,motion:.5,colour:"#dfe3e1"},light:{strength:.78}}),Sr("gel","Gel","A soft gel body; the shell answers with a damped give.",{interior:{kind:"gel",amount:.55,motion:.45,colour:"#e4e6e3"},shell:{elastic:.55}})],Io=Ba[0].config,ha=e=>Ba.find(a=>a.id===e)??Ba[0],na=[{id:"orb",name:"The Orb",kind:"Interactive object",published:!0,line:"A 3D sphere for your own work, in twenty versions: glass, metal, porcelain, bloom, and glass with light, sparkle or beads inside.",receives:["ES module (Three.js r186) with the sphere and its material","The version you choose","Integration notes and dependency list"],source:["dist/light-orb.js","dist/orb-three.js","dist/orb-lighting.js","dist/orb-floor.js"],preview:"orb",studio:!0,presets:Ba.map(e=>e.id),readiness:"preview_ready",missing:["price","checkout provider","packaged download (source export not yet assembled)"],price:null},{id:"orb-slider",name:"Orb Slider",kind:"Interactive control",published:!0,code:"kit",line:"A glass capsule whose thumb is a small orb. Slide it to enter; a spring brings it home.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Keyboard and pointer support","Six materials"],source:["dist/intro/activation.js","dist/intro/glass-control.js"],preview:"slider",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package (currently embedded in the intro)"],price:null},{id:"orb-wave",name:"Orb Wave",kind:"Surface effect",published:!1,line:"The ripple the Orb leaves on the floor when it lands, drawn in light.",receives:["Light-world shader source","Impact trigger API","Integration notes"],source:["dist/intro/light-world.js"],preview:"wave",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"background-pack",name:"Background Pack",kind:"Two environments",published:!1,line:"A dark world and a light one, and the change between them.",receives:["Dark and warm environment shader","Exposure transition","Integration notes"],source:["dist/intro/light-world.js"],preview:"backgrounds",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"crystal-controls",name:"Crystal Controls",kind:"Interface kit",published:!0,code:"kit",line:"Buttons, switches, fields and sliders in six glass materials, with light that follows the pointer.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Every state: hover, focus, pressed, selected, disabled, loading","Six materials"],source:["dist/app/glass.css.js"],preview:"controls",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged download"],price:null}],sa=e=>na.find(a=>a.id===e),Po=["lens","type"],Qr=na.filter(e=>e.published!==!1),Bl=[{id:"beauty",name:"Beauty",label:"beauty.thelightorb.com",sector:"beauty",category:"Beauty \u2014 Cosmetics",subtitle:"Website templates",showcase:!0,line:"Complete websites for skincare, cosmetics and beauty brands. First in the collection: Berries.",cover:{src:"./media/templates/berries.cover.jpg",from:"Berries, first template of the Beauty collection",meta:"./media/templates/berries.cover.json"},cta:"Enter Beauty",includes:["Berries \u2014 Skincare","Live preview, desktop and phone","Opens the full website"],published:!0,readiness:"showcase",price:null},{id:"the-light-orb",name:"The Light Orb",line:"This website\u2019s own beginning: the Orb as host, a quiet greeting, the quotation and the four destinations.",cover:{src:"./media/templates/the-light-orb.cover.jpg",from:"dist/intro.html (post-intro welcome, live render)",meta:"./media/templates/the-light-orb.cover.json"},route:"#/",includes:["Centred welcome with the hosting Orb","Quotation scene","Destination selector"],published:!0,starter:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged source export"],price:null},{id:"brunito",name:"BRUNITO",label:"ecommerce",credit:"Example project: Brunito, an independent ecommerce demo",category:"Ecommerce design & development",subtitle:"Ecommerce Design & Development",showcase:!0,line:"An interactive ecommerce experience featuring responsive layouts, customised product pages and a refined shopping interface.",cover:{src:"./media/templates/brunito.cover.jpg",from:"BRUNITO demo homepage (live render)",meta:"./media/templates/brunito.cover.json"},demo:"https://carlatres3.github.io/brunito/",cta:"Explore Demo",includes:["Editorial homepage and collections","Product pages with real variants and galleries","Cart drawer and cart (purchases disabled)","Desktop, tablet and mobile"],published:!0,readiness:"showcase",price:null}],Lt=Bl.filter(e=>e.published!==!1),Na=[{id:"beauty",name:"Beauty",host:"beauty.thelightorb.com",line:"Complete websites for skincare, cosmetics and beauty brands."}],Fl=[{id:"berries",sector:"beauty",name:"Berries",category:"Skincare",line:"A sensorial landing page for a skincare brand made with blueberries: hyper-real cream photography you can press and drag, editorial stories and a small shop.",cover:{src:"./media/templates/berries.cover.jpg",from:"published Berries site, cover (live render)",meta:"./media/templates/berries.cover.json"},demo:"https://beauty.thelightorb.com/",sections:["Interactive cover","Skincare editorial","Collection","Philosophy","Editorial triptych","Ritual","Community stories","Care guide","Your essentials","Newsletter"],features:["Cream photograph that reacts to press and drag (WebGL, image fallback)","Product lens: magnified label reading","Shop with local cart only \u2014 no payments","Section menu and smooth scroll guidance","Editorial triptych and community carousel","Reduced-motion and touch support"],published:!0}],$r=e=>Fl.filter(a=>a.sector===e&&a.published!==!1),Ro=(e,a="")=>`#/${e.id}${a?"/"+a:""}`,ia={engine:"Kokoro-82M v1.0",licence:"Apache-2.0",rights:{onSite:"yes",download:"not offered"}},Xa=[{id:"samantha",name:"Heart",kokoro:"af_heart",grade:"A",locale:"en-US",accent:"American",gender:"female",line:"Warm and clear. The guide\u2019s own voice.",full:!0,...ia},{id:"bella",name:"Bella",kokoro:"af_bella",grade:"A\u2212",locale:"en-US",accent:"American",gender:"female",line:"Bright and expressive, with a smile in it.",full:!0,...ia},{id:"emma",name:"Emma",kokoro:"bf_emma",grade:"B\u2212",locale:"en-GB",accent:"British",gender:"female",line:"Composed and precise. A gallery voice.",full:!0,...ia},{id:"daniel",name:"Michael",kokoro:"am_michael",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Calm and grounded. Steady narration.",full:!0,...ia},{id:"nicole",name:"Nicole",kokoro:"af_nicole",grade:"B\u2212",locale:"en-US",accent:"American",gender:"female",line:"Close and hushed, almost a whisper.",lines:"samantha",...ia},{id:"aoede",name:"Aoede",kokoro:"af_aoede",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Soft and lyrical.",lines:"samantha",...ia},{id:"kore",name:"Kore",kokoro:"af_kore",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Even and confident.",lines:"bella",...ia},{id:"isabella",name:"Isabella",kokoro:"bf_isabella",grade:"C",locale:"en-GB",accent:"British",gender:"female",line:"Light and friendly.",lines:"emma",...ia},{id:"fenrir",name:"Fenrir",kokoro:"am_fenrir",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Deep and resonant.",lines:"daniel",...ia},{id:"puck",name:"Puck",kokoro:"am_puck",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Lively and quick.",lines:"daniel",...ia},{id:"george",name:"George",kokoro:"bm_george",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"Measured and classic.",lines:"daniel",...ia},{id:"fable",name:"Fable",kokoro:"bm_fable",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"A storyteller\u2019s warmth.",lines:"daniel",...ia}],La=e=>Xa.find(a=>a.id===e)??Xa[0],Zr={home:"Welcome to The Light Orb. A space for creative possibilities. Let\u2019s explore.",products:"Explore the pieces. Each one is designed to become part of something of your own.",templates:"Start with a complete composition. Select a cassette to preview the design.",studio:"Choose a piece, then shape its light, material and movement.",sound:"Listen before you choose. Find the voice and sounds that fit your work.",voice_audition:"A little light. A new idea. Something of your own."},Do=(e,a)=>`./media/voice/${e}.${a}.m4a`,Er={text:"I don\u2019t know why people expect art to make sense when they accept the fact that life doesn\u2019t make sense.",author:"David Lynch",work:"interview with Kristine McKenna, Los Angeles Times, 20 August 1989",source:"https://www.latimes.com/archives/la-xpm-1989-08-20-ca-1327-story.html"};var Lr=[{id:"select",name:"Select",line:"A soft glass touch for choosing.",file:"./media/sfx/select.wav"},{id:"open",name:"Open",line:"A breath of air as a panel opens.",file:"./media/sfx/open.wav"},{id:"close",name:"Close",line:"The same air, settling.",file:"./media/sfx/close.wav"},{id:"confirm",name:"Confirm",line:"Two quiet touches: done.",file:"./media/sfx/confirm.wav"},{id:"detent",name:"Detent",line:"A precise tick for wheels and steps.",file:"./media/sfx/detent.wav"},{id:"type",name:"Type",line:"A dry, very quiet key.",file:"./media/sfx/type.wav"},{id:"level",name:"Level",line:"A small touch as a level moves.",file:"./media/sfx/level.wav"}],Ui={promise:"A new drop every two weeks.",open:!1,price:null,interval:null,quota:null,plans:[{id:"ready",name:"Ready-made",line:"Choose a curated piece and use it as it is.",points:["One finished piece","Its source and integration notes"]},{id:"studio",name:"Studio",line:"Customise a piece and export your own version.",points:["Light, material and movement controls","Saved designs"]},{id:"member",name:"Membership",line:"Follow the collection as it grows.",points:["A new drop every two weeks"]}]};var Vi=(e,a=0,i=1)=>Math.min(i,Math.max(a,e)),Mt={peak:.0045,curve:1.8,floor:.12,cutoff:320,cutoffSpan:120,highpass:70,q:.5,attack:.12,release:.07,sweep:.35,still:.09,seconds:7},Gi={quiet:{peak:Mt.peak,curve:Mt.curve},A:{peak:.0135,curve:1.4},B:{peak:.024,curve:1.4}},Xi="B";function Nl(e,{talking:a=!1,loudness:i=Gi[Xi]}={}){if(a)return 0;let t=Vi(e);return t<=Mt.floor?0:i.peak*Math.pow((t-Mt.floor)/(1-Mt.floor),i.curve)}function Hl(e,a){let i=Math.round(e.sampleRate*a),t=e.createBuffer(1,i,e.sampleRate),l=t.getChannelData(0),c=0,o=0;for(let p=0;p<i;p++)c=.995*c+.02*(Math.random()*2-1),l[p]=c,o=Math.max(o,Math.abs(c));let d=Math.round(e.sampleRate*.2);for(let p=0;p<d;p++){let f=p/d;l[p]=l[p]*f+l[i-d+p]*(1-f)}for(let p=0;p<i;p++)l[p]/=o||1;return t}function Ki(e,a,{talking:i=()=>!1,loudness:t=Gi[Xi]}={}){let l=e.createBufferSource();l.buffer=Hl(e,Mt.seconds),l.loop=!0;let c=e.createBiquadFilter(),o=e.createBiquadFilter(),d=e.createBiquadFilter(),p=e.createGain();c.type="highpass",c.frequency.value=Mt.highpass,c.Q.value=Mt.q;for(let h of[o,d])h.type="lowpass",h.frequency.value=Mt.cutoff,h.Q.value=Mt.q;p.gain.value=0,l.connect(c).connect(o).connect(d).connect(p).connect(a),l.start();let f=0,g=-1;return{get level(){return f},update(h,P=e.currentTime){let X=Nl(h,{talking:i(),loudness:t});if(p.gain.setTargetAtTime(X,P,X>f?Mt.attack:Mt.release),f=X,P-g>.1){g=P;let s=Mt.cutoff+Mt.cutoffSpan*Vi(h);o.frequency.setTargetAtTime(s,P,Mt.sweep),d.frequency.setTargetAtTime(s,P,Mt.sweep)}},still(h=e.currentTime){f=0,p.gain.setTargetAtTime(0,h,Mt.release)}}}var Ji=e=>Math.max(0,Math.min(1,Number.isFinite(e)?e:0));function eo(e,a=.008,i=.16){let t=0;for(let l of e)t+=l*l;return Ji((Math.sqrt(t/Math.max(1,e.length))-a)/i)}function to(e,a,i,t=.05,l=.18){let c=e+(a-e)*(1-Math.exp(-Math.max(0,i)/(a>e?t:l)));return c<.001?0:Ji(c)}function Qi({getContext:e,onState:a=()=>{},onLevel:i=()=>{},mediaDevices:t=globalThis.navigator?.mediaDevices,lifecycle:l=globalThis.document,page:c=globalThis.window,now:o=()=>performance.now()}={}){let d={status:"off",error:"",level:0},p=0,f=null,g=null,h=null,P=null,X=null,s=o(),M=0,T=!1,B=()=>a({...d});function I(){for(let L of f?.getTracks()??[])L.onended=null,L.stop();f=null,g?.disconnect(),h?.disconnect(),P?.disconnect(),g=h=P=X=null,d.level=0,i(0)}function q(){p++,I(),d.status="off",d.error="",B()}async function F(){if(T)return!1;if(d.status==="listening")return!0;if(d.status==="requesting")return!1;let L=++p;d.status="requesting",d.error="",B();let w=null;try{if(!t?.getUserMedia)throw Object.assign(new Error,{name:"UnsupportedError"});let z=e();if(!z)throw Object.assign(new Error,{name:"UnsupportedError"});let G=Promise.resolve(z.resume()).then(()=>null,C=>C);if(w=await t.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!1},video:!1}),T||L!==p)return w.getTracks().forEach(C=>C.stop()),!1;f=w;let $=await G;if(T||L!==p)return!1;if($)throw $;return g=z.createMediaStreamSource(f),h=z.createBiquadFilter(),h.type="highpass",h.frequency.value=90,P=z.createAnalyser(),P.fftSize=1024,P.smoothingTimeConstant=0,g.connect(h),h.connect(P),X=new Float32Array(P.fftSize),s=o(),f.getTracks().forEach(C=>{C.onended=q}),d.status="listening",B(),!0}catch(z){return L!==p||T||(I(),d.status="error",d.error=z.name==="NotAllowedError"||z.name==="SecurityError"?"Allow microphone access in your browser, then try again.":z.name==="NotFoundError"?"No microphone found. Connect one and try again.":z.name==="UnsupportedError"?"Microphone input needs a supported browser on HTTPS or localhost.":"The microphone is unavailable. Close other microphone apps and try again.",B()),!1}}function _(){if(!P||d.status!=="listening")return 0;let L=o(),w=Math.min(.1,Math.max(0,(L-s)/1e3));s=L,P.getFloatTimeDomainData(X);let z=eo(X,.006,.1);return d.level=to(d.level,z,w,.045,.28),L-M>80&&(M=L,i(d.level)),d.level}let V=()=>{l.hidden&&q()};return l?.addEventListener("visibilitychange",V),c?.addEventListener("pagehide",q),{state:d,start:F,stop:q,sample:_,toggle(){return d.status==="requesting"||d.status==="listening"?q():F()},dispose(){T=!0,q(),l?.removeEventListener("visibilitychange",V),c?.removeEventListener("pagehide",q)}}}var cr=(e,a=0,i=1)=>Math.min(i,Math.max(a,e)),Zi={voice:Xa[0].id};function en(){let e=Gr(Zi),a=e.prefs;Xa.some(H=>H.id===a.voice)||(a.voice=Zi.voice);let i=new Set,t=null,l=null,c=null,o=null,d=null,p=null,f=new Audio;f.preload="auto",f.crossOrigin="anonymous",f.setAttribute("playsinline","");let g=null,h={clip:null,voice:null,status:"idle",error:null,energy:0,journey:new Set},P=new Map,X=new Map,s=H=>{if(!X.has(H)){let U=fetch(H).then(K=>{if(!K.ok)throw new Error(K.status);return K.blob()}).then(K=>URL.createObjectURL(K));X.set(H,U),U.catch(()=>X.delete(H))}return X.get(H)},M={},T=()=>i.forEach(H=>H(tt));function B(){if(t)return t;let H=window.AudioContext||window.webkitAudioContext;if(!H)return null;t=new H,l=t.createGain(),l.connect(t.destination),c=t.createGain();let U=t.createDynamicsCompressor();U.threshold.value=-30,U.knee.value=10,U.ratio.value=4,U.attack.value=.003,U.release.value=.25,c.connect(U).connect(l),o=t.createGain(),o.connect(l),d=t.createAnalyser(),d.fftSize=1024,d.smoothingTimeConstant=0,d.connect(c),p=new Float32Array(d.fftSize);try{g=t.createMediaElementSource(f),g.connect(d)}catch{g=null}return I(),t}function I(){if(!t)return;let H=t.currentTime;l.gain.setTargetAtTime(a.master||h.kind==="audition"?a.volume??.8:0,H,.02),c.gain.setTargetAtTime(a.gain,H,.02),o.gain.setTargetAtTime(a.sfx?a.sfxGain:0,H,.02)}let q=()=>{let H=B();H&&H.state!=="running"&&H.state!=="closed"&&H.resume().catch(()=>{}),Ge(),e.voice&&!R&&ce()};for(let H of["pointerdown","keydown","touchend"])addEventListener(H,q,{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden&&(de.on||!f.paused||h.status==="loading")?(Z(),h.hiddenPause=!0):h.hiddenPause&&(h.hiddenPause=!1)}),f.addEventListener("ended",()=>{h.status="ended",T()}),f.addEventListener("pause",()=>{h.status==="playing"&&(h.status="paused",T())}),f.addEventListener("playing",()=>{h.status="playing",h.error=null,T()}),f.addEventListener("error",()=>{h.clip&&(h.status="error",h.error="The recording could not be loaded.",T())}),f.addEventListener("loadedmetadata",T);let F=null,_=null;function V(){fe.cancel(),F?.(),_&&(f.removeEventListener("ended",_),_=null)}function L(){return V(),fe.begin()}let w=H=>H==="audition"||e.voice,z=(H,{voice:U=a.voice,from:K=0,kind:ne="guide"}={})=>C(`${H}.${U}`,Do(H,U),{from:K,kind:ne,voice:U}),G=(H,U,{from:K=0}={})=>C(H,U,{from:K,kind:"audition"}),$=0;async function C(H,U,{from:K=0,kind:ne="guide",voice:ie=null,token:ke=L(),onend:He}={}){let Ke=$;if(!fe.live(ke)||!w(ne))return!1;je(),f.pause(),h.clip=H,h.voice=ie,h.kind=ne,h.url=U,h.loaded=!1,h.status="loading",h.error=null,h.env=null,q(),I(),T();let Le;try{Le=await s(U)}catch{Le=U}if(!fe.live(ke)||Ke!==$||!w(ne)||(f.src!==Le&&(f.src=Le),h.loaded=!0,ot(U,200).then(De=>{fe.live(ke)&&(h.env=De)}).catch(()=>{}),K&&f.readyState<1&&(!await new Promise(Bt=>{let $t=ze=>{f.removeEventListener("loadedmetadata",nt),f.removeEventListener("error",we),F=null,Bt(ze)},nt=()=>$t(!0),we=()=>$t(!1);F=()=>$t(!1),f.addEventListener("loadedmetadata",nt),f.addEventListener("error",we)})||!fe.live(ke)))||!fe.live(ke)||!w(ne)||(f.currentTime=K||0,He&&(_=()=>{_=null,fe.live(ke)&&He()},f.addEventListener("ended",_,{once:!0})),T(),!fe.live(ke)||Ke!==$||!w(ne)))return!1;try{return await f.play(),fe.live(ke)&&w(ne)}catch{return fe.live(ke)&&(h.status="blocked",h.error="Playback was blocked. Press play to start it.",T()),!1}}function Z(){V(),je(),f.pause(),h.status="paused",T()}async function le(){return!h.url||h.clip==="speech"||!w(h.kind)?!1:C(h.clip,h.url,{from:h.loaded?f.currentTime:0,kind:h.kind,voice:h.voice})}let ee=typeof speechSynthesis<"u"?speechSynthesis:null,se=0,de={on:!1};function je(){de.u=null,ee&&de.on&&(de.on=!1,ee.cancel())}let Ae={samantha:[/ava.*premium/i,/zoe.*premium/i,/samantha.*(enhanced|premium)/i,/(aria|jenny|emma|ava).*natural/i,/natural.*(female|aria|jenny)/i,/google us english/i,/google uk english female/i,/^(ava|zoe|allison|susan)\b/i,/^samantha/i],daniel:[/(evan|nathan|tom).*premium/i,/daniel.*(enhanced|premium)/i,/(guy|ryan|andrew|brian|christopher).*natural/i,/natural.*male/i,/google uk english male/i,/^(evan|nathan|tom|aaron)\b/i,/^daniel/i]},N=[],m=()=>{N=ee?.getVoices()??[]};ee&&(m(),ee.addEventListener?.("voiceschanged",m));let O=[/(paulina|monica|m[oó]nica|marisol|isabela).*(premium|enhanced)/i,/(elvira|dalia|helena|ximena|paloma).*natural/i,/natural.*(spanish|espa)/i,/google espa[nñ]ol/i,/^(paulina|monica|m[oó]nica|marisol|jorge|diego)\b/i];function Y(H){if(N.length||m(),H==="es"){let K=N.filter(ne=>/^es[-_]/i.test(ne.lang));if(K.length){for(let ne of O){let ie=K.find(ke=>ne.test(ke.name));if(ie)return ie}return K.find(ne=>ne.localService===!1)??K[0]}}let U=N.filter(K=>/^en[-_]/i.test(K.lang));for(let K of Ae[La(a.voice).gender==="male"?"daniel":"samantha"]){let ne=U.find(ie=>K.test(ie.name));if(ne)return ne}return U.find(K=>K.localService===!1)??U[0]}let R=null,D="./media/voice/lines/",ce=()=>R??=fetch(`${D}manifest.json`).then(H=>H.ok?H.json():null,()=>(R=null,null)).catch(()=>null),fe=Ii();function $e(H,{id:U,onend:K,lang:ne}={}){if(!H||!a.master||!a.guide)return K?.(),!1;let ie=L();if(U){let ke=La(a.voice).lines??a.voice;return je(),f.pause(),h.kind="guide",h.url=null,h.clip=`line:${U}`,h.status="loading",T(),ce().then(async He=>{let Ke=He?.lines?.[U]?.text===H?He.lines[U].files?.[ke]:null;if(!fe.live(ie))return;if(!Ke){he(H,{onend:K,lang:ne,token:ie});return}let Le=D+Ke;try{await s(Le)}catch{fe.live(ie)&&he(H,{onend:K,lang:ne,token:ie});return}fe.live(ie)&&C(`line:${U}.${ke}`,Le,{kind:"guide",voice:ke,token:ie,onend:K})}),!0}return he(H,{onend:K,lang:ne,token:ie})}function he(H,{onend:U,lang:K,token:ne}={}){if(!fe.live(ne)||!ee||!H||!a.master||!a.guide)return U?.(),!1;je(),q(),f.pause(),ee.cancel();let ie=Y(K),ke=ie&&(!ie.localService||/premium|enhanced|natural/i.test(ie.name)),He=H.match(/[^.!?]+[.!?]*\s*/g)?.map(Ke=>Ke.trim()).filter(Boolean)??[H];return de.u=ne,de.on=!0,h.kind="guide",h.url=null,h.clip="speech",h.status="playing",T(),He.forEach((Ke,Le)=>{let De=new SpeechSynthesisUtterance(Ke);ie&&(De.voice=ie,De.lang=ie.lang),De.rate=ke?1:.94,De.pitch=1,De.volume=a.volume??.8,De.onboundary=()=>{se=1},De.onstart=()=>{se=1},Le===He.length-1&&(De.onend=De.onerror=()=>{fe.live(ne)&&de.u===ne&&(de.on=!1,h.status="stopped",T(),U?.())}),ee.speak(De)}),!0}let ge=()=>Y()?.name??null;function Ee(){$++,V(),je(),f.pause(),h.status=h.clip?"stopped":"idle",T()}function Pe(H){f.duration&&(f.currentTime=cr(H)*f.duration,T())}let Ye=performance.now();function St(){let H=performance.now(),U=Math.min(.1,(H-Ye)/1e3);Ye=H;let K=0;return de.on&&e.voice?(se=Math.max(0,se-U*3.2),K=cr(.35+.45*se+.15*Math.sin(H/90))):!g&&h.env&&!f.paused&&(a.master||h.kind==="audition")&&f.duration?K=cr(h.env.bins[Math.min(h.env.bins.length-1,Math.floor(f.currentTime/f.duration*h.env.bins.length))]*1.1):d&&!f.paused&&(a.master||h.kind==="audition")&&(d.getFloatTimeDomainData(p),K=eo(p)),h.energy=to(h.energy,K,U),h.energy}let st=(H,U=a.voice,K=72)=>ot(Do(H,U),K);async function ot(H,U=72){let K=`${H}|${U}`;if(P.has(K))return P.get(K);let ne=(async()=>{let ie;try{ie=await s(H)}catch{ie=H}let ke=await(await fetch(ie)).arrayBuffer(),He=window.OfflineAudioContext||window.webkitOfflineAudioContext,Ke=await new He(1,44100,44100).decodeAudioData(ke),Le=Ke.getChannelData(0),De=Math.max(1,Math.floor(Le.length/U)),Bt=[],$t=0;for(let nt=0;nt<U;nt++){let we=0;for(let Me=nt*De;Me<(nt+1)*De;Me++)we+=Le[Me]*Le[Me];let ze=Math.sqrt(we/De);Bt.push(ze),$t=Math.max($t,ze)}return{bins:Bt.map(nt=>nt/($t||1)),duration:Ke.duration}})();return P.set(K,ne),ne.catch(()=>P.delete(K)),ne}let Qe={press:"select",release:"select",volume:"level",case:"open"},ye={select:90,type:70,detent:50,level:110,open:220,close:220,confirm:400},xe={select:.3,type:.2,detent:.28,level:.22,open:.28,close:.26,confirm:.32},me={},Oe=0;function Be(H){me[H]||!t||(me[H]=fetch(`./media/sfx/${H}.wav`).then(U=>U.arrayBuffer()).then(U=>t.decodeAudioData(U)).then(U=>me[H]=U).catch(()=>me[H]=null))}function Fe(H,U=.5){if(H=Qe[H]||H,!a.master||!a.sfx)return;let K=B();if(!K||K.state!=="running")return;let ne=performance.now();if(ne-(M[H]??0)<(ye[H]??80)||Oe>3)return;M[H]=ne;let ie=me[H];if(!ie||ie instanceof Promise){Be(H);return}let ke=K.createBufferSource(),He=K.createGain();ke.buffer=ie,He.gain.value=(xe[H]??.6)*(H==="level"?.6+.4*cr(U):1),H==="level"&&(ke.playbackRate.value=.85+.3*cr(U)),ke.connect(He),He.connect(o),Oe++,ke.onended=()=>{Oe--,He.disconnect()},ke.start()}let Ne=null;function Dt(H=0){if(!a.master||!a.sfx)return;let U=B();if(!U||U.state!=="running")return;if(!Ne){let ie=U.createBufferSource(),ke=U.sampleRate*2,He=U.createBuffer(1,ke,U.sampleRate),Ke=He.getChannelData(0);for(let Bt=0;Bt<ke;Bt++)Ke[Bt]=Math.random()*2-1;ie.buffer=He,ie.loop=!0;let Le=U.createBiquadFilter(),De=U.createGain();Le.type="lowpass",Le.Q.value=.4,Le.frequency.value=900,De.gain.value=0,ie.connect(Le).connect(De).connect(o),ie.start(),Ne={f:Le,g:De,stop:0}}let K=cr(H),ne=U.currentTime;Ne.g.gain.setTargetAtTime(K*.035,ne,.03),Ne.f.frequency.setTargetAtTime(700+600*K,ne,.06),clearTimeout(Ne.stop),Ne.stop=setTimeout(()=>Ne.g.gain.setTargetAtTime(0,U.currentTime,.04),70)}let et=null,Ve=0;function Ze(H=0,U="air"){if(!a.master||!a.sfx||!t||t.state!=="running"){et&&et.still();return}et??=Ki(t,o,{talking:()=>!f.paused||de.on}),et.update(H),clearTimeout(Ve),Ve=setTimeout(()=>et?.still(),Mt.still*1e3)}let Ge=()=>{if(t)for(let H of Object.keys(ye))Be(H)};e.on(()=>{(!a.master||!a.sfx)&&(clearTimeout(Ve),et?.still()),!e.voice&&h.kind==="guide"&&(V(),je(),f.pause(),h.clip&&(h.status="stopped"),se=0),I(),T()});let tt={prefs:a,state:h,el:f,get ready(){return!!t},get position(){return f.duration?f.currentTime/f.duration:0},get time(){return f.currentTime||0},get duration(){return f.duration||0},get playing(){return de.on||!f.paused&&!f.ended},store:e,get voiceOn(){return e.voice},get soundsOn(){return e.sounds},set(H){e.set(H),q()},toggle(H,U){e.toggle(H,U),q()},play:z,playUrl:G,say:$e,voiceName:ge,pause:Z,resume:le,stop:Ee,seek:Pe,energy:St,peaks:st,peaksUrl:ot,sfx:Fe,friction:Dt,motion:Ze,unlock:q,get live(){return!!t&&t.state==="running"},microphone(H){return Qi({...H,getContext:B})},once(H){return h.journey.has(H)||!a.master||!a.guide?Promise.resolve(!1):(h.journey.add(H),z(H).then(U=>(U||h.journey.delete(H),U)))},on(H){return i.add(H),()=>i.delete(H)}};return tt}var Bo=na.filter(e=>e.published!==!1),rn=e=>e.id==="orb"||e.code==="kit",_l=" Everything is free during early access, and Studio is open to try.",Wl={"reply.missed":"I didn\u2019t catch that. Tap me and try again, or type.","reply.intro":`Hello, I\u2019m the Light Orb, your guide here. Tap me and speak, or type: ask me for recommendations, materials and textures, or say Products, Templates, Studio or Sound and I\u2019ll take you there.${_l}`,"reply.greet":"Hi, I\u2019m the Light Orb. Tap me whenever you want to talk.","reply.help":"Ask me which Orb suits your project, about its materials and textures, or how to get the free code. Or say Products, Templates, Studio or Sound and I\u2019ll take you there.","reply.thanks":"With pleasure. I\u2019m right here when you need me.","reply.who":"I\u2019m the Light Orb, the guide of this place. I can recommend a piece or a texture, answer your questions, and take you anywhere on the site.","reply.back":"Going back.","reply.unknown":"I\u2019m still learning words. Ask me for a recommendation, or say Products, Templates, Studio or Sound.","reply.mic":"The microphone is off. You can type to me instead."},Yl=" Todo es gratis durante el acceso anticipado, y Studio est\xE1 abierto para probarlo.",Ul={"reply.missed":"No te he entendido. T\xF3came e int\xE9ntalo otra vez, o escr\xEDbeme.","reply.intro":`Hola, soy la Light Orb, tu gu\xEDa aqu\xED. T\xF3came y habla, o escr\xEDbeme: p\xEDdeme recomendaciones, materiales y texturas, o di Productos, Plantillas, Studio o Sonido y te llevo.${Yl}`,"reply.greet":"Hola, soy la Light Orb. T\xF3came cuando quieras hablar.","reply.help":"Preg\xFAntame qu\xE9 Orb encaja con tu proyecto, por sus materiales y texturas, o c\xF3mo conseguir el c\xF3digo gratis. O di Productos, Plantillas, Studio o Sonido y te llevo.","reply.thanks":"Con gusto. Aqu\xED estoy cuando me necesites.","reply.who":"Soy la Light Orb, la gu\xEDa de este lugar. Te recomiendo piezas y texturas, respondo tus preguntas y te llevo a cualquier parte de la web.","reply.back":"Volvemos.","reply.unknown":"A\xFAn estoy aprendiendo palabras. P\xEDdeme una recomendaci\xF3n, o di Productos, Plantillas, Studio o Sonido.","reply.mic":"El micr\xF3fono est\xE1 desactivado. Puedes escribirme."},pr=(e,a="en")=>a==="es"?{id:null,text:Ul[e],lang:"es"}:{id:e,text:Wl[e],lang:"en"},tn={profile:"your profile",downloads:"your downloads",saved:"what you have saved",designs:"the designs you made in Studio"};function Vl(e,a){if(e==="products"&&a){let i=Bo.find(t=>t.id===a);if(i)return{id:`present.product.${i.id}`,text:`This is ${i.name}. ${rn(i)?"Try its versions; each one is free, with its code.":"Try its versions."}`}}if(e==="templates"&&a){let i=Lt.find(t=>t.id===a);if(i)return{id:`present.template.${i.id}`,text:`You are looking at the template ${i.name}. ${i.line}`}}return e==="products"?{id:"present.products",text:`Products: ${Bo.length} pieces, ready to use. Choose one to see it alive.`}:e==="templates"?{id:"present.templates",text:Lt.length===1?"Templates: a complete composition of light and glass to start from. Open it to see it move.":`Templates: ${Lt.length} complete compositions of light and glass to start from. Open one to see it move.`}:e==="soon"||e==="studio"&&!sr?{id:"present.studio.soon",text:"Studio is coming soon. Leave your email and we will let you know when it opens."}:e==="studio"?{id:"present.studio",text:`This is Studio${", free while we build it"}. Drag me to turn me, move my light with the light tool, and shape my glass with the controls. Save your design when it feels right.`}:e==="sound"?{id:"present.sound",text:"This is Sound: choose the voice I speak with, and listen to the small sounds of the glass."}:e==="membership"?{id:"present.membership",text:"This is Membership. Everything is free for now; leave your email to hear first when plans open."}:e==="account"?a&&tn[a]?{id:`present.account.${a}`,text:`This is your account, showing ${tn[a]}.`}:{id:"present.account",text:"This is your account."}:e==="privacy"?{id:"present.privacy",text:"This is the privacy page: what the site keeps, and what you can ask for."}:e==="terms"?{id:"present.terms",text:"These are the terms of use of the site."}:e==="licence"?{id:"present.licence",text:"This is the licence: what you can do with the free Orb and with the pieces."}:e==="signin"?{id:"present.signin",text:"Use the email you joined with to link this device to your early access."}:e==="signup"?{id:"present.signup",text:"Join early access with your email. Everything is free while we build it, and you will hear first when new pieces open."}:{id:"present.home",text:"This is The Light Orb: objects of light and glass. Below, choose where to begin: Products, Templates, Studio or Sound. Tap me again to stop, or ask me anything."}}var an={products:"Productos: objetos de luz y vidrio. Elige uno para verlo vivo.",templates:"Plantillas: composiciones completas para empezar.",studio:"Esto es Studio, gratis mientras lo construimos. Da forma a la luz y guarda tu dise\xF1o.",sound:"Esto es Sonido: las voces y los sonidos del vidrio.",membership:"Esto es Membres\xEDa. Ahora todo es gratis; deja tu email y sabr\xE1s primero cu\xE1ndo abren los planes.",home:"Bienvenida a The Light Orb. Soy tu gu\xEDa: t\xF3came para hablar."};function on(e,a,i){let t=Vl(a,i);if(e!=="es")return{...t,lang:"en"};if(a==="products"&&i){let l=Bo.find(c=>c.id===i);if(l)return{id:null,lang:"es",text:`Esto es ${l.name}. Prueba sus versiones${rn(l)?"; cada una es gratis, con su c\xF3digo":", o dale forma en Studio"}.`}}return an[a]&&!i?{id:null,lang:"es",text:an[a]}:{...t,lang:"en"}}var nn=e=>({id:`already.${e.id}`,text:`We are already here. ${e.text}`}),sn=e=>({id:`piece.${e.id}`,text:`Here is ${e.name}. ${e.line}`}),ln=e=>({id:`open.${e.id}`,text:`Opening ${e.name}.`}),dn=()=>({id:"piece.orb",text:`Here is the Orb. ${na[0].line}`});var cn="lightorb:theme",Gl={light:{pearl:[243,243,241],top:[250,251,251],low:[214,217,220],sky:"255,255,255",skyA:.62,mass:"196,201,206",massA:.35,glow:"255,255,255",glowA:.7,shadow:"70,72,78",orbBackground:"#f3f3f1",orb:{dark:!1,world:"gallery",envBoost:1},cases:{bg:["#f3f3f1","#f1f1ef","#e9eae8"],room:"#6c6f6c",floor:"#eeefed",hemi:["#ffffff","#dcdedc",.6],env:1.35}},dark:{pearl:[7,7,8],top:[11,11,12],low:[2,2,3],sky:"232,226,212",skyA:.03,mass:"0,0,0",massA:.6,glow:"236,230,216",glowA:.07,shadow:"0,0,0",orbBackground:"#070708",orb:{dark:!0,world:"smoke",envBoost:1.15},cases:{bg:["#0e0e0f","#09090a","#040405"],room:"#141415",floor:"#2a2b2b",hemi:["#ffffff","#202222",.35],env:1.7}}},Xl=()=>{try{return localStorage.getItem(cn)}catch{return null}},ao=e=>e==="light"||e==="dark";function Kl(){let e=new URLSearchParams(location.search).get("theme");if(ao(e))return e;let a=Xl();return ao(a)?a:"light"}var ur=()=>document.documentElement.dataset.theme==="dark"?"dark":"light",ma=()=>Gl[ur()];function pn(e){document.documentElement.dataset.theme=e,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",e==="dark"?"#141515":"#F3F3F1")}function un(e,{remember:a=!0}={}){if(ao(e)){if(pn(e),a)try{localStorage.setItem(cn,e)}catch{}document.dispatchEvent(new CustomEvent("lightorb:theme",{detail:{theme:e}}))}}typeof document<"u"&&pn(ao(document.documentElement.dataset.theme)?ur():Kl());var gr=(e,a,i)=>e+(a-e)*i,hr=e=>{let a=parseInt(String(e).replace("#",""),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]},_c=hr("#f3d8c5"),Jl={fill:.08,lobe:.2,wall:.55,core:.034},Ut=e=>structuredClone(e??Jr);function ro(e,a,i={}){let t=ma().orb,l=i.dark===!0,{envBoost:c=l?1:t.envBoost,exposure:o=0,left:d=.65,right:p=.55}=i,f=l||t.dark,g=a.shell,h=a.light,P=a.interior;e.setOptics({...Jl,lobe:gr(.1,.3,h.spread),core:gr(.026,.044,h.spread)}),e.setInterior({kind:P.kind,amount:P.amount,size:P.size,motion:P.motion,fill:P.fill,colour:P.colour}),e.setElastic(g.elastic??0);let X=hr(g.tint);e.setMaterial({roughness:g.roughness,thickness:gr(.3,1.4,g.thickness),ior:g.ior,envMapIntensity:(f?1.9:2.1)*c*2**(o*.5),tint:X,tintDistance:g.tintAmount>.001?gr(8,.4,g.tintAmount):0}),e.setNeutral?.(!0);let s=hr(h.colour),M=Math.max(...s);e.setLight({tint:s.map(B=>B/Math.max(.05,M)*1.05),spread:gr(.7,1.6,h.spread)}),e.setBloom(gr(.004,.08,h.glow)),e.setFocus({x:h.x,y:h.y,z:h.z}),e.setTone(f?"dark":"light"),e.setVolumeWorld(0),e.lockFeather([.5,.515]);let T=B=>(Math.round(B*10)/10).toFixed(1);return e.setWorld(l?`chamber:${T(d)}:${T(p)}`:t.world),e.setEnvironmentLevel?.(i.envLevel??1),{emission:h.strength/.72*2**(o*.35)*(i.keyLevel??1),voice:a.voice}}var qt=(e,a)=>a.split(".").reduce((i,t)=>i?.[t],e),Tr=e=>Math.min(1,Math.max(0,e));function gn(e={}){let a=e.material??{},i=e.interior??{},t=e.light??{},l=Ut(ha("original").config);if(a.tint){l.shell.tint=a.tint;let[c,o,d]=hr(a.tint),p=Math.max(c,o,d)-Math.min(c,o,d);p>.04&&(l.shell.tintAmount=Math.min(.97,.8+p*.2))}if(l.shell.ior=Math.min(2,Math.max(1,1+.58*(a.refraction??1))),l.shell.roughness=Math.min(.5,Math.max(0,.01+(a.frost??0)*.45)),l.interior.amount=Tr(l.interior.amount*(1+(i.amount??0))),l.interior.size=Tr(l.interior.size*(i.size??1)),l.interior.motion=Tr(l.interior.motion*(i.speed??1)),l.light.strength=Tr(l.light.strength*(i.glow??1)),l.light.glow=Tr(l.light.glow*(t.key??1)),t.colour&&(l.light.colour=t.colour),a.tint){let c=hr(a.tint),o=hr(l.light.colour);Math.max(...c)-Math.min(...c)>.04&&(l.light.colour="#"+o.map((p,f)=>Math.round((p*.4+c[f]*.6)*255).toString(16).padStart(2,"0")).join(""))}return l}var hn=`
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
`;var mn=`
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
.dh h1.relief{text-decoration:none;margin:0 -.04em 0 auto;font:300 clamp(64px,11vw,176px)/.82 var(--font);letter-spacing:.08em;user-select:none;
  color:color-mix(in srgb,var(--bg) 97%,#000);
  text-shadow:-1px -1px 0 rgba(255,255,255,.95),1px 1px 1px rgba(40,42,41,.12),2px 4px 10px rgba(40,42,41,.06)}
html[data-theme=dark] .dh h1.relief{color:color-mix(in srgb,var(--bg) 92%,#fff);text-shadow:-1px -1px 0 rgba(255,255,255,.07),1px 1px 1px rgba(0,0,0,.7),2px 4px 10px rgba(0,0,0,.4)}
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
@media (max-width:520px){.hd .nav a[data-nav=studio] .nav-soon{top:auto;bottom:-13px;right:auto;left:50%;transform:translateX(-50%)}}
@media (max-width:300px){.hd{gap:4px 8px}.hd .wm{font-size:15px}.hd-r{gap:4px}.hd-r .gb{width:32px;height:32px;min-width:32px;min-height:32px}}
@media (min-width:641px) and (max-width:900px){
  .hd{height:auto;flex-wrap:wrap;gap:2px 16px;padding:12px clamp(16px,3.2vw,44px) 6px}
  .nav{order:3;width:100%;justify-content:space-between;margin:0 -12px}
  .dest,.pd{padding-top:132px}
}
`;var fn=`
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
`;var bn=matchMedia("(prefers-reduced-motion: reduce)"),Ql={gel:"gel",lens:"glass",type:"type",mag:"control"},Zl={gel:7,glass:16,chrome:18,type:12,control:20,base:13},ed=e=>Ql[e.dataset.objCard]??(e.querySelector(".has-kit")?"control":e.querySelector("[data-sphere]")?/chrome|liquid|mirror/i.test(e.querySelector("[data-sphere]").dataset.sphere)?"chrome":"glass":"base");function xn(e=document){let a=document.createElement("style");a.dataset.ix="",a.textContent=fn,document.head.append(a);let i=new Map,t=new Set,l=0,c=0,o=()=>{l||(c=performance.now(),l=requestAnimationFrame(L))},d=420,p=2*Math.sqrt(d),f=(m,O)=>{let Y=d*(m.t-m.x)-p*m.v;return m.v+=Y*O,m.x+=m.v*O,Math.abs(m.t-m.x)<.2&&Math.abs(m.v)<4&&(m.x=m.t,m.v=0),m.x!==m.t||m.v!==0},g=m=>({x:m,v:0,t:m}),h=m=>[...m.children].filter(O=>O.classList?.contains("pill")),P=m=>["aria-checked","aria-pressed","aria-selected"].some(O=>m.getAttribute(O)==="true")||m.classList.contains("on"),X=m=>({x:m.offsetLeft,w:m.offsetWidth,y:m.offsetTop,h:m.offsetHeight});function s(m,O,Y){let R=Math.min(.07,Math.abs(O.x.v)/9e3);m.style.transform=`translate3d(${O.x.x}px,${Y.y}px,0) scaleY(${1-R})`,m.style.width=`${Math.max(8,O.w.x)}px`,m.style.height=`${Y.h}px`}function M(m){if(i.has(m)||!h(m).length)return;let O=document.createElement("span");O.className="ix-sel",O.setAttribute("aria-hidden","true"),m.prepend(O),m.classList.add("ix-seg");let Y={bar:m,sel:O,S:{x:g(0),w:g(0)},cand:null,act:null,box:{y:0,h:0},shown:!1};Y.mo=new MutationObserver(()=>T(Y,!0)),Y.mo.observe(m,{attributes:!0,subtree:!0,attributeFilter:["aria-checked","aria-pressed","aria-selected"]}),Y.ro=new ResizeObserver(()=>T(Y,!1)),Y.ro.observe(m),i.set(m,Y),T(Y,!1)}function T(m,O){m.act=h(m.bar).find(P)??null,B(m,m.cand??m.act,O)}function B(m,O,Y){if(m.sel.style.opacity=O?"":"0",!O)return;let R=X(O);m.box=R,m.S.x.t=R.x,m.S.w.t=R.w,!Y||bn.matches||!m.shown?(m.S.x.x=R.x,m.S.w.x=R.w,m.S.x.v=m.S.w.v=0,s(m.sel,m.S,R),m.shown=!0):(t.add(m),o())}function I(m,O){m&&(m.cand?.classList.remove("ix-cand"),m.cand=O,O?.classList.add("ix-cand"),B(m,O??m.act,!0))}let q=new Map;function F(m,O){let Y=q.get(m);return Y||(Y={x:.5,y:.4,on:0,p:0,tx:.5,ty:.4,ton:0,tp:0,follow:O},q.set(m,Y)),Y.rect=m.getBoundingClientRect(),Y}function _(m,O,Y){m.rect||(m.rect=Y.getBoundingClientRect()),m.still=!1,m.tx=Math.min(1,Math.max(0,(O.clientX-m.rect.left)/m.rect.width)),m.ty=Math.min(1,Math.max(0,(O.clientY-m.rect.top)/m.rect.height))}function V(m){if(m.querySelector(":scope>.ix-sheen"))return;let O=document.createElement("span");O.className="ix-sheen",O.setAttribute("aria-hidden","true"),m.append(O),m.classList.add("ix-card"),m.dataset.ixMat=ed(m)}function L(m){let O=Math.min(.05,(m-c)/1e3);c=m;for(let R of t){let D=f(R.S.x,O)|f(R.S.w,O);s(R.sel,R.S,R.box),D||t.delete(R)}let Y=!1;for(let[R,D]of q){if(D.still)continue;let ce=bn.matches?1:1-Math.exp(-D.follow*O),fe=1-Math.exp(-(D.ton>D.on?14:7)*O);D.x+=(D.tx-D.x)*ce,D.y+=(D.ty-D.y)*ce,D.on+=(D.ton-D.on)*fe,D.p+=(D.tp-D.p)*(1-Math.exp(-(D.tp>D.p?18:5)*O));let $e=Math.abs(D.tx-D.x)<.002&&Math.abs(D.ty-D.y)<.002&&Math.abs(D.ton-D.on)<.01&&Math.abs(D.tp-D.p)<.01;$e&&(D.x=D.tx,D.y=D.ty,D.on=D.ton,D.p=D.tp),R.style.setProperty("--ix-x",D.x.toFixed(4)),R.style.setProperty("--ix-y",D.y.toFixed(4)),R.style.setProperty("--ix-on",D.on.toFixed(3)),R.style.setProperty("--ix-p",D.p.toFixed(3)),$e&&D.ton===0&&D.tp===0?(R.style.removeProperty("--ix-on"),R.style.removeProperty("--ix-p"),q.delete(R)):$e&&!R.isConnected?q.delete(R):$e?D.still=!0:Y=!0}l=t.size||Y?requestAnimationFrame(L):0}let w=m=>{let O=m.target.closest?.(".ix-seg>.pill");return O?[i.get(O.parentElement),O]:[null,null]},z=m=>{if(m.pointerType!=="mouse"&&m.pointerType!=="pen")return;let O=m.target.closest?.(".segbar");O&&!i.has(O)&&M(O);let[Y,R]=w(m);Y&&R!==Y.cand&&I(Y,R);let D=m.target.closest?.(".file");if(D){V(D);let ce=F(D,Zl[D.dataset.ixMat]??13);ce.ton=1,_(ce,m,D),o()}},G=m=>{let O=m.relatedTarget,Y=m.target.closest?.(".ix-seg");if(Y&&!Y.contains(O)){let D=i.get(Y);I(D,null)}let R=m.target.closest?.(".file");if(R&&!R.contains(O)){let D=q.get(R);D&&(D.ton=0,D.tp=0,D.still=!1,o())}},$=m=>{if(m.pointerType!=="mouse"&&m.pointerType!=="pen")return;let O=m.target.closest?.(".file");if(O){let R=q.get(O);R&&(_(R,m,O),o())}let Y=m.target.closest?.(".ix-seg");if(Y){let R=i.get(Y);R.left||(R.left=Y.getBoundingClientRect().left-Y.scrollLeft);let D=m.clientX-R.left;R.sel.style.setProperty("--ix-sx",((D-R.S.x.x)/Math.max(1,R.S.w.x)).toFixed(3)),R.sel.style.setProperty("--ix-on","1")}},C=m=>{let O=m.target.closest?.(".file");if(O&&m.target.closest(".file-v")){let Y=q.get(O)??F(O,13);Y.tp=1,m.pointerType==="mouse"&&(Y.ton=1),_(Y,m,O),o()}},Z=()=>{for(let m of q.values())m.tp&&(m.tp=0,m.still=!1);q.size&&o()},le=m=>{let O=m.target.closest?.(".ix-seg");if(O&&!O.contains(m.relatedTarget)){let Y=i.get(O);Y&&(Y.left=0,Y.sel.style.removeProperty("--ix-on"))}},ee=m=>{let O=m.target.closest?.(".segbar");if(!O)return;M(O);let Y=i.get(O);m.target.matches(":focus-visible")&&m.target.classList.contains("pill")&&I(Y,m.target)},se=m=>{let O=m.target.closest?.(".ix-seg");O&&!O.contains(m.relatedTarget)&&I(i.get(O),null)};e.addEventListener("pointerover",z,{passive:!0}),e.addEventListener("pointerout",G,{passive:!0}),e.addEventListener("pointerout",le,{passive:!0}),e.addEventListener("pointermove",$,{passive:!0}),e.addEventListener("pointerdown",C,{passive:!0}),addEventListener("pointerup",Z,{passive:!0}),addEventListener("pointercancel",Z,{passive:!0}),e.addEventListener("focusin",ee),e.addEventListener("focusout",se);let de=()=>{for(let m of q.values())m.rect=null;for(let m of i.values())m.left=0};addEventListener("scroll",de,{passive:!0,capture:!0});let je=0,Ae=()=>{je=0;for(let[m,O]of i)m.isConnected||(O.mo.disconnect(),O.ro.disconnect(),O.cand=null,t.delete(O),i.delete(m));document.querySelectorAll(".segbar:not(.ix-seg)").forEach(M),document.querySelectorAll(".file:not(.ix-card)").forEach(V)},N=new MutationObserver(()=>{je||(je=requestAnimationFrame(Ae))});return N.observe(document.body,{childList:!0,subtree:!0}),Ae(),{dispose(){N.disconnect(),cancelAnimationFrame(l);for(let m of i.values())m.mo.disconnect(),m.ro.disconnect();i.clear(),q.clear(),t.clear(),a.remove(),e.removeEventListener("pointerover",z),e.removeEventListener("pointerout",G),e.removeEventListener("pointerout",le),e.removeEventListener("pointermove",$),e.removeEventListener("pointerdown",C),removeEventListener("pointerup",Z),removeEventListener("pointercancel",Z),e.removeEventListener("focusin",ee),e.removeEventListener("focusout",se),removeEventListener("scroll",de,!0)}}}var W="html[data-theme=dark]",vn=`
${W}{
  --bg:#070708; --surface:#101112; --surface-2:#18191A; --ink:#ECEDEA; --muted:#9A9E9B; --faint:#929693; --line:rgba(236,237,234,.1);
  --greige:#5A5752; --champagne:#E6DCC8;
  --glass-hi:rgba(255,255,255,.16); --glass-rim:rgba(255,255,255,.1); --glass-body:rgba(255,255,255,.05);
  color-scheme:dark;
}
${W} body{background:var(--bg)}
/* header surface */
${W} .hd::before{background:linear-gradient(180deg,rgba(7,7,8,.94),rgba(7,7,8,.74) 62%,rgba(7,7,8,0))}
/* light capsule \u2192 clear glass on smoke: transparent body, bright top rim, champagne lower edge */
${W} .gb{color:var(--ink);background:linear-gradient(180deg,rgba(255,255,255,.1) 0%,rgba(255,255,255,.045) 55%,rgba(255,255,255,.07) 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.22),inset 0 -2px 3px -1px rgba(200,202,201,.18),inset 0 0 0 1px rgba(255,255,255,.08),0 1px 1px rgba(0,0,0,.3),0 10px 22px -12px rgba(0,0,0,.7)}
${W} .gb:hover{box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 -2px 3px -1px rgba(200,202,201,.24),inset 0 0 0 1px rgba(255,255,255,.12),0 1px 1px rgba(0,0,0,.3),0 14px 26px -12px rgba(0,0,0,.75)}
${W} .gb:active,${W} .gb.pressed{box-shadow:inset 0 2px 4px rgba(0,0,0,.5),inset 0 0 0 1px rgba(255,255,255,.08)}
${W} .gb.primary{color:#0b0b0c;background:linear-gradient(180deg,#f4f4f2 0%,#e3e4e1 60%,#d6d8d5 100%);
  box-shadow:inset 0 1px 0 #fff,inset 1px 0 1px rgba(255,255,255,.8),inset -1px 0 1px rgba(255,255,255,.8),inset 0 -1px 0 rgba(255,255,255,.7),inset 0 -6px 8px -5px rgba(120,112,98,.38),
    0 1px 0 rgba(0,0,0,.8),0 2px 4px -1px rgba(0,0,0,.6),0 12px 24px -10px rgba(0,0,0,.85)}
${W} .gb.primary:hover{background:linear-gradient(180deg,#fff 0%,#eceeeb 60%,#dfe1de 100%)}
${W} .gb[aria-pressed=true],${W} .gb.selected{box-shadow:inset 0 0 0 1.5px var(--ink),inset 0 1px 0 rgba(255,255,255,.2),0 6px 14px -10px rgba(0,0,0,.6)}
${W} .gb[disabled],${W} .gb[aria-disabled=true]{box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
${W} .gb[aria-busy=true]::after{border-color:rgba(236,237,234,.25);border-top-color:var(--ink)}
${W} .gb:focus-visible,${W} .gi:focus-visible,${W} .gsel:focus-visible,${W} .gsw:focus-visible,${W} .grange:focus-visible,${W} .pill:focus-visible,${W} .tl:focus-visible{outline-color:var(--ink)}
/* captions, menus, words that speak */
${W} .caption{background:rgba(14,14,15,.84);color:var(--ink);box-shadow:0 0 0 1px rgba(255,255,255,.07)}
${W} .orb-ask{background:rgba(30,32,32,.9);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 0 0 1px rgba(255,255,255,.1),0 8px 30px rgba(0,0,0,.3)}
${W} .orb-ask button{background:rgba(255,255,255,.08)}
${W} .orb-ask button[aria-pressed=true]{color:#141515}
${W} .orb-ask button:focus-visible{outline:2px solid var(--ink);outline-offset:3px}
/* Track B's independently mounted popover declares local light defaults. Keep
   this selector more specific; its stylesheet may be injected after ours. */
${W} .sndc-site,${W} .complete .sndc-intro{
  --snd-ink:#ECEDEA;--snd-muted:#9A9E9B;--snd-glass-top:rgba(255,255,255,.14);--snd-glass-bot:rgba(255,255,255,.04);
  --snd-edge:rgba(255,255,255,.12);--snd-hi:rgba(255,255,255,.3);--snd-shadow:rgba(0,0,0,.75);--snd-pane:rgba(30,32,32,.96);
  --snd-track:rgba(255,255,255,.14);--snd-on:#ECEDEA;--snd-knob:#141515;--snd-focus:#ECEDEA;
}
${W} .sndc-site .sndc-t[aria-pressed=false] .sndc-sw::after,${W} .complete .sndc-intro .sndc-t[aria-pressed=false] .sndc-sw::after{background:var(--snd-ink)}
${W} .menu{background:rgba(14,14,15,.9);box-shadow:0 0 0 1px rgba(255,255,255,.08),0 24px 50px -24px rgba(0,0,0,.8)}
${W} [data-speak]:hover,${W} [data-speak]:focus-visible{text-decoration-color:rgba(236,237,234,.3)}
${W} [data-speak][data-speaking]{text-decoration-color:rgba(236,237,234,.6)}
${W} .qt figcaption a{text-decoration-color:rgba(236,237,234,.3)}
/* cards and panels: smoke, hairline rims instead of soft shadows */
${W} .arc-img{box-shadow:0 0 0 1px rgba(255,255,255,.08),0 30px 50px -34px rgba(0,0,0,.9)}
${W} .arc-c.on .arc-img{box-shadow:0 0 0 1px rgba(255,255,255,.14),0 40px 60px -34px rgba(0,0,0,.95)}
/* The glass layer (glass.css.js "clear glass" pass) on smoke: same clear body, rims
   lit from above, a faint champagne lower edge. !important only to beat that pass's
   high-specificity :not(.dark) selectors without touching them. */
${W} .gb:not(.primary),${W} .pill[aria-checked=true],${W} .pill[aria-pressed=true],${W} .pill[aria-selected=true],${W} .pill.on,${W} .gdd-b,${W} .segbar{
  color:var(--ink);background:linear-gradient(180deg,rgba(255,255,255,.14) 0%,rgba(255,255,255,.035) 44%,rgba(0,0,0,.22) 56%,rgba(255,255,255,.07) 100%)!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.5),inset 0 0 0 1px rgba(255,255,255,.1),inset 1px 0 1px rgba(255,255,255,.1),inset -1px 0 1px rgba(255,255,255,.1),
    inset 0 -1px 0 rgba(200,202,201,.32),inset 0 -6px 8px -6px rgba(200,202,201,.14),inset 0 -10px 12px -10px rgba(0,0,0,.7),
    0 1px 0 rgba(0,0,0,.7),0 2px 4px -1px rgba(0,0,0,.65),0 14px 26px -12px rgba(0,0,0,.9)!important}
${W} .gb:not(.primary):hover{box-shadow:inset 0 1px 0 rgba(255,255,255,.62),inset 0 0 0 1px rgba(255,255,255,.14),inset 1px 0 1px rgba(255,255,255,.14),inset -1px 0 1px rgba(255,255,255,.14),
    inset 0 -1px 0 rgba(200,202,201,.4),inset 0 -6px 8px -6px rgba(200,202,201,.18),inset 0 -10px 12px -10px rgba(0,0,0,.7),
    0 1px 0 rgba(0,0,0,.7),0 3px 6px -1px rgba(0,0,0,.65),0 18px 30px -12px rgba(0,0,0,.9)!important}
${W} .gb:not(.primary):active{box-shadow:inset 0 2px 5px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,255,255,.1),inset 0 -1px 0 rgba(200,202,201,.2),0 1px 1px rgba(0,0,0,.7)!important}
${W} .gb:not(.primary)::before{left:14%;top:2px;width:38%;height:38%;background:radial-gradient(70% 80% at 45% 20%,rgba(255,255,255,.42),rgba(255,255,255,0) 70%)}
${W} .gb:not(.primary)::after{background:radial-gradient(60% 80% at 50% 100%,rgba(200,202,201,.26),rgba(200,202,201,0) 75%)}
${W} .gb.primary::before,${W} .gb.primary::after{opacity:.5}
${W} .glass,${W} .folder-track .tcard.glass{
  background:linear-gradient(180deg,rgba(255,255,255,.06) 0%,rgba(255,255,255,.02) 34%,rgba(255,255,255,.008) 70%,rgba(255,255,255,.025) 100%)!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 0 0 1px rgba(255,255,255,.09),inset 1px 0 0 rgba(255,255,255,.12),inset 0 -1px 0 rgba(200,202,201,.14),0 30px 60px -36px rgba(0,0,0,.9)!important}
/* The light folder glow used .95 white behind transparent cards, washing out
   the dark description. Keep its depth, with text above the decorative glare. */
${W} .folder-glow{background:radial-gradient(closest-side,rgba(255,255,255,.1),rgba(236,237,234,.035) 55%,transparent)}
/* Shared glass sheen on smoke (post-launch 2026-10-27): the light pass's .glass::after (a .7 white
   glare + a .26 white 115deg band) was never overridden here, so every dark card, the inquiry panel and
   the showcase carried a broad white stripe. On smoke the material reads from the rim (box-shadow above)
   and a faint fall-off from the top edge; no band, nothing animated. */
${W} .glass::after{background:radial-gradient(130% 55% at 50% -12%,rgba(255,255,255,.055),rgba(255,255,255,0) 62%)!important}
${W} .folder .glass::after{z-index:0;background:radial-gradient(120% 60% at 20% -10%,rgba(255,255,255,.1),transparent 55%),linear-gradient(115deg,transparent 40%,rgba(255,255,255,.04) 48%,transparent 56%)}
${W} .folder-track{z-index:1}
${W} .tcard.on .tcard-n,${W} .tcard.on .tcard-t,${W} .tcard.on .tcard-l{position:relative;z-index:1}
${W} .tcard.on .tcard-n,${W} .tcard.on .tcard-l{color:#B4B8B5}
${W} .pane,${W} .gdd-l{background:rgba(14,14,15,.8);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 0 0 1px rgba(255,255,255,.07),0 24px 50px -24px rgba(0,0,0,.85)}
${W} .gdd-o[aria-selected=true]{background:rgba(255,255,255,.1);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
${W} .gi,${W} .gsel{background-color:rgba(255,255,255,.05);color:var(--ink);box-shadow:inset 0 0 0 1px rgba(255,255,255,.14)}
${W} .gsel{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' fill='none' stroke='%23ECEDEA' stroke-width='1.4' stroke-linecap='round'%3E%3Cpath d='M1 1l4.5 4.5L10 1'/%3E%3C/svg%3E")}
${W} .gsw{background:rgba(255,255,255,.14);box-shadow:inset 0 1px 2px rgba(0,0,0,.5)}${W} .gsw[aria-checked=true]{background:rgba(255,255,255,.5)}
${W} .gsw[aria-checked=true]::after{background:#141515;box-shadow:inset 0 0 0 1px rgba(255,255,255,.15)}
${W} .grange::-webkit-slider-runnable-track{background:linear-gradient(90deg,var(--ink) var(--p),rgba(255,255,255,.2) var(--p))}
${W} .grange::-moz-range-track{background:rgba(255,255,255,.2)}${W} .grange::-moz-range-progress{background:var(--ink)}
${W} .org .pill[aria-selected=true]{background:rgba(255,255,255,.12)}
${W} .plan{background:rgba(255,255,255,.04);box-shadow:0 0 0 1px rgba(255,255,255,.08)}
${W} .plan.em{background:rgba(255,255,255,.08);box-shadow:0 0 0 1px rgba(255,255,255,.16),0 30px 50px -36px rgba(0,0,0,.9)}
${W} .si-row:hover{background:rgba(255,255,255,.05)}
/* stages and thumbnails: smoke behind the objects (product photos themselves are unchanged) */
${W} .pc-v,${W} .shop-v,${W} .pd-stage,${W} .pd-stage.glass,${W} .tcard-cv{background:radial-gradient(80% 70% at 50% 42%,#2a2c2c,#141515)}
${W} .cv-products,${W} .cv-sound{background:radial-gradient(90% 70% at 30% 20%,#3a3c3c 0%,#1e2020 45%,#0f1010 100%)!important}
${W} .cv-templates{background:linear-gradient(160deg,#2c2d2d 0%,#1a1b1b 55%,#0e0f0f 100%)!important}
/* the welcome and quotation type (site.css.js sets a fixed near-black) */
${W} .qt blockquote p,${W} .wel-h{color:var(--ink)}
/* ambient light behind products / templates / sound: charcoal smoke, no colour */
${W} .lo.r-products::before,${W} .lo.r-templates::before,${W} .lo.r-sound::before{
  background:radial-gradient(34% 30% at 60% 16%,rgba(200,202,201,.022),transparent 70%)}   /* owner 2026-10-21: no broad grey glow */
/* fixed text greys and small chips in site.css.js */
${W} .lede,${W} .legal-b p,${W} .dh-l{color:#B4B8B5}
${W} .file-ext,${W} .file-v .file-ext{background:rgba(255,255,255,.1);color:var(--muted)}
${W} .studio-lock{background:rgba(255,255,255,.05);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 0 0 1px rgba(255,255,255,.08)}
${W} .cart-n{background:var(--ink);color:#141515}
/* \u2500\u2500 Home selector cards in dark (owner 2026-10-21): black translucent glass, not milky slabs \u2500\u2500 */
/* !important: card rules such as .dg-win img{display:block} must not show the twin */
.lo-dark-only{display:none!important}${W} .lo-dark-only{display:block!important}${W} .lo-light-only{display:none!important}
${W} .dg-img,${W} .dg-templates{background:radial-gradient(80% 60% at 50% 38%,rgba(255,255,255,.045),rgba(255,255,255,0) 62%),linear-gradient(180deg,#0f0f11 0%,#08080a 60%,#050506 100%);
  box-shadow:0 1px 0 rgba(0,0,0,.85),0 2px 6px -2px rgba(0,0,0,.8),0 30px 50px -30px rgba(0,0,0,.95)}
/* the glass itself, above the picture: lit top edge, curved sides, a faint champagne lower lip, one restrained sheen */
${W} .dg-img::before{content:"";position:absolute;inset:0;z-index:3;border-radius:inherit;pointer-events:none;
  background:linear-gradient(155deg,rgba(255,255,255,.075) 0%,rgba(255,255,255,0) 30%,rgba(255,255,255,0) 78%,rgba(255,255,255,.025) 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 1px 0 1px rgba(255,255,255,.09),inset -1px 0 1px rgba(255,255,255,.09),inset 0 -1px 0 rgba(200,202,201,.18),
    inset 0 0 0 1px rgba(255,255,255,.07),inset 0 22px 34px -28px rgba(255,255,255,.16),inset 0 -26px 34px -28px rgba(0,0,0,.8)}
${W} .dg-c.on .dg-img{box-shadow:0 1px 0 rgba(0,0,0,.85),0 3px 8px -2px rgba(0,0,0,.85),0 36px 56px -30px rgba(0,0,0,1)}
${W} .dg-c.on .dg-img::before{box-shadow:inset 0 1px 0 rgba(255,255,255,.4),inset 1px 0 1px rgba(255,255,255,.12),inset -1px 0 1px rgba(255,255,255,.12),inset 0 -1px 0 rgba(200,202,201,.24),
    inset 0 0 0 1px rgba(255,255,255,.1),inset 0 22px 34px -28px rgba(255,255,255,.2),inset 0 -26px 34px -28px rgba(0,0,0,.8)}
${W} .dg-products>img{mix-blend-mode:normal}
${W} .dg-win{background:#fff;box-shadow:0 0 0 1px rgba(255,255,255,.12),0 18px 30px -16px rgba(0,0,0,.95)}
/* owner 2026-11-10: in the dark theme only the card is dark \u2014 the template window inside stays white */
${W} .dg-templates .lo-light-only{display:block!important}${W} .dg-templates .lo-dark-only{display:none!important}
${W} .dg-win::after{background:linear-gradient(155deg,rgba(255,255,255,.14) 0%,rgba(255,255,255,0) 36%)}
${W} .dg-templates::after{background:radial-gradient(closest-side,rgba(0,0,0,.7),transparent)}
${W} .cv-wave i{background:linear-gradient(90deg,rgba(255,255,255,.14),rgba(255,255,255,.05));box-shadow:inset 0 0 0 1px rgba(255,255,255,.12),0 6px 10px -6px rgba(0,0,0,.8)}
${W} .cv-wave i:nth-child(-n+9){background:linear-gradient(90deg,#f1f1ee,#c9cbc8);box-shadow:inset 0 1px 0 #fff,0 6px 10px -6px rgba(0,0,0,.8)}
/* the theme switch sits beside the sound control (Track B owns .snd) */
.thm{position:relative}
/* Templates (owner 2026-10-28): graphite structure, light preview surfaces, so the work reads first. */
${W} .tcard-cv,${W} .fo-cv,${W} .pd-stage.cover-big{background:radial-gradient(85% 75% at 50% 38%,#f3f3f1,#d9dbd8 72%,#c9cbc8)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.35),0 18px 34px -22px rgba(0,0,0,.9)!important}
${W} .tcard-cv .dev-floor,${W} .fo-cv .dev-floor{background:radial-gradient(closest-side,rgba(38,40,39,.35),transparent)}
${W} .folder-track .tcard.glass.on{box-shadow:inset 0 1px 0 rgba(255,255,255,.22),inset 0 0 0 1px rgba(255,255,255,.12),0 40px 70px -34px rgba(0,0,0,.95)!important}
${W} .tcard-tag{color:#a9aca9}
`;var fa="html.ds2:not([data-theme=dark])",yn=`
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
${fa} .gb{background:linear-gradient(180deg,rgba(255,255,255,.74) 0%,rgba(248,249,248,.4) 52%,rgba(255,255,255,.62) 100%);
  -webkit-backdrop-filter:blur(14px) saturate(1.4);backdrop-filter:blur(14px) saturate(1.4);
  /* top specular line \xB7 bright base caustic \xB7 hairline edge \xB7 refracted darkening inside the thick rim \xB7 close contact shadow */
  box-shadow:inset 0 1px 0 #fff,inset 0 -1.5px 0 rgba(255,255,255,.95),inset 0 0 0 1px rgba(38,40,39,.085),inset 0 0 9px rgba(38,40,39,.075),
    0 .5px 0 rgba(38,40,39,.1),0 6px 14px -9px rgba(38,40,39,.32)}
${fa} .gb:hover{background:linear-gradient(180deg,rgba(255,255,255,.86) 0%,rgba(250,251,250,.5) 52%,rgba(255,255,255,.72) 100%);
  box-shadow:inset 0 1px 0 #fff,inset 0 -1.5px 0 #fff,inset 0 0 0 1px rgba(38,40,39,.11),inset 0 0 10px rgba(38,40,39,.085),
    0 .5px 0 rgba(38,40,39,.12),0 10px 20px -11px rgba(38,40,39,.38)}
${fa} .gb:active,${fa} .gb.pressed{background:linear-gradient(180deg,rgba(242,243,242,.7),rgba(252,252,252,.6));
  box-shadow:inset 0 1.5px 3px rgba(38,40,39,.16),inset 0 0 0 1px rgba(38,40,39,.1),inset 0 0 6px rgba(38,40,39,.06),0 .5px 0 rgba(255,255,255,.9)}
${fa} .gb.primary{color:#f6f6f4;background:linear-gradient(180deg,rgba(44,47,46,.94),rgba(24,26,25,.96));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.22),inset 0 0 0 1px rgba(255,255,255,.06),inset 0 -1px 0 rgba(0,0,0,.25),
    0 0 0 .5px rgba(0,0,0,.4),0 1px 2px rgba(0,0,0,.14),0 8px 18px -10px rgba(23,26,25,.55)}
${fa} .gb.primary:hover{background:linear-gradient(180deg,rgba(54,57,56,.94),rgba(30,32,31,.96))}
${fa} .gb.primary:active{background:#171918;box-shadow:inset 0 1px 3px rgba(0,0,0,.45),0 0 0 .5px rgba(0,0,0,.4)}
${fa} .gb[disabled],${fa} .gb[aria-disabled=true]{box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 0 0 .5px rgba(38,40,39,.1)}

/* \u2500\u2500 cards: the existing glass stays; only a measured lift on hover \u2500\u2500 */
@media (hover:hover){${fa} .file.glass{transition:transform var(--m-move) var(--e-out)}${fa} .file.glass:hover{transform:translateY(-2px)}}
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
`;var Ka="html.ds2:not([data-theme=dark]) body:not([data-route=studio])",wn=`
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
`;var td=/^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/,ba=e=>typeof e=="string"&&e.length<=254&&td.test(e.trim()),kn="trescarla@gmail.com",Mr=()=>`<p class="note contact">Questions? <a href="mailto:${kn}">${kn}</a></p>`,Sn="lightorb:profile",ad=e=>String(e).replace(/[&<>"]/g,a=>`&#${a.charCodeAt(0)};`);async function Fo({email:e,name:a="",source:i}){if(e=String(e??"").trim(),a=String(a??"").trim().slice(0,40),!ba(e))return{ok:!1,error:"Please enter a valid email address."};if(!Ra)return{ok:!1,error:"Early access sign-up opens soon. Nothing was sent."};try{let t=await fetch(Ra,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,...a?{name:a}:{},source:i,lang:(navigator.language||"en").slice(0,5)})});if(!t.ok)return{ok:!1,error:t.status===429?"Too many tries \u2014 please wait a minute.":"That did not go through. Please try again later."}}catch{return{ok:!1,error:"That did not go through. Please check your connection and try again."}}try{let t=JSON.parse(localStorage.getItem(Sn))??{};localStorage.setItem(Sn,JSON.stringify({...t,email:e,...a?{name:a}:{},joined:t.joined??new Date().toISOString()}))}catch{}return _e("waitlist_join",{source:i}),{ok:!0}}var No=e=>`<div class="joined glass" role="status" tabindex="-1"><p class="kicker">You\u2019re in</p>
  <h2>Welcome to early access</h2><p>We\u2019ll write to <b>${ad(e)}</b> when new pieces and Studio updates open. Everything stays free to explore while we build it.</p>
  <div class="acts eq"><a class="gb small primary" href="#/products">Browse products</a><a class="gb small" href="#/account">Your account</a></div></div>`;function qr(e,{compact:a=!1,label:i="",title:t="Join early access"}={}){let l=!!Ra;return`<form class="form interest wl${a?" wl-c":""}" data-waitlist="${e}" novalidate>
    ${a?"":`<h2>${t}</h2>`}
    <label class="fl"><span>${i||(a?"Join early access \u2014 free; one email when new pieces open":"Free. We email you when new pieces and Studio updates open.")}</span>
      <span class="wl-row"><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"${l?"":" disabled"}>
      <button class="gb${a?" small":""}" type="submit"${l?"":" disabled"}><span>Join</span></button></span></label>
    <p class="note" data-wlmsg role="status" aria-live="polite">${l?'We only keep your email to tell you about new pieces and Studio updates. See <a href="#/privacy">privacy</a>; leave any time.':'Sign-up opens soon \u2014 nothing typed here is sent yet. See <a href="#/privacy">privacy</a>.'}</p>
  </form>`}function io(e){e.querySelectorAll("[data-waitlist]").forEach(a=>a.addEventListener("submit",async i=>{if(i.preventDefault(),!Ra)return;let t=a.querySelector("[data-wlmsg]"),l=a.querySelector("input"),c=a.querySelector("button"),o=l.value.trim();if(!ba(o)){t.textContent="Please enter a valid email address.",l.focus();return}c.disabled=!0,c.setAttribute("aria-busy","true");let d=await Fo({email:o,source:a.dataset.waitlist});if(d.ok){let p=document.createElement("div");p.innerHTML=No(o);let f=p.firstElementChild;a.replaceWith(f),f.focus({preventScroll:!0});return}t.textContent=d.error,c.disabled=!1,c.removeAttribute("aria-busy")}))}var oo=500;function $n(e){return`<div class="fb" data-fbwrap><button class="tl" type="button" data-fbbtn aria-expanded="false" aria-controls="fb-p"><span>What's missing?</span></button>
    <form class="form fb-p" id="fb-p" data-feedback="${e}" novalidate hidden>
      <label class="fl"><span>Tell us what Studio or the pieces still need</span>
        <textarea class="gi" name="text" rows="3" maxlength="${oo}" required></textarea></label>
      <div class="acts"><button class="gb small" type="submit"${Kr?"":" disabled"}><span>Send</span></button></div>
      <p class="note" data-fbmsg role="status" aria-live="polite">Up to ${oo} characters. Only the text and the page are kept.</p>
    </form></div>`}function En(e,{sfx:a=()=>{}}={}){e.querySelectorAll("[data-fbwrap]").forEach(i=>{let t=i.querySelector("[data-fbbtn]"),l=i.querySelector("[data-feedback]");t.addEventListener("click",()=>{let c=l.hidden;l.hidden=!c,t.setAttribute("aria-expanded",String(c)),a(c?"open":"close"),c&&l.querySelector("textarea").focus()}),l.addEventListener("submit",async c=>{if(c.preventDefault(),!Kr)return;let o=l.querySelector("[data-fbmsg]"),d=l.querySelector("textarea"),p=l.querySelector("button"),f=d.value.trim();if(!f){o.textContent="Write a few words first.",d.focus();return}if(f.length>oo){o.textContent=`Please keep it under ${oo} characters.`;return}p.disabled=!0;try{let g=await fetch(Kr,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:f,page:l.dataset.feedback})});g.ok?(o.textContent="Thank you \u2014 we read every note.",d.value="",_e("feedback_send",{page:l.dataset.feedback})):o.textContent=g.status===429?"Too many notes for now \u2014 please try again later.":"That did not go through. Please try again later."}catch{o.textContent="That did not go through. Please try again later."}p.disabled=!1})})}var Ln=Ga?Ga.replace(/\/inquiry$/,"/request-code"):"",_t=!0,Tn={name:100,use:1500},no=e=>String(e??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),rd=()=>crypto.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,12)}`,so=(e,a,{cls:i="gb small primary",label:t="Request code"}={})=>`<button class="${i}" type="button" data-request-code="${no(e)}|${no(a)}"><span>${t}</span></button>`;function od(e){return`<dialog class="rc glass" aria-labelledby="rc-h">
    <form class="rc-f" novalidate>
      <button class="rc-x gb gc small" type="button" data-rc-close aria-label="Close"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg></button>
      <p class="kicker">Request code</p>
      <h2 id="rc-h">${no(e)}</h2>
      <p class="rc-l">The interactive piece stays free to try on this site \u2014 nothing here is needed for that. This is only for its source code: tell me who you are and I\u2019ll be in touch about access.</p>
      <label class="fl"><span>Name</span><input class="gi" name="name" autocomplete="name" maxlength="${Tn.name}" required><em class="err" data-err="name"></em></label>
      <label class="fl"><span>Email</span><input class="gi" name="email" type="email" autocomplete="email" inputmode="email" maxlength="254" required><em class="err" data-err="email"></em></label>
      <label class="fl"><span>How you\u2019d like to use it <small>optional</small></span><textarea class="gi" name="use" rows="3" maxlength="${Tn.use}"></textarea></label>
      <label class="rc-hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
      <div class="rc-send"><button class="gb primary" type="submit"><span>Send request</span></button>
        <p class="rc-s" role="status" aria-live="polite"></p></div>
      <p class="note">Your name, email and note go to Carla Tres (THE ORB LIGHT) only to answer this request, and are kept as a record of it. Not added to any mailing list. Ask at trescarla@gmail.com to have them deleted. <a href="#/privacy">Privacy</a></p>
    </form>
    <div class="rc-done" hidden tabindex="-1"><p class="kicker">${no(e)}</p><h2>Request received.</h2><p>I\u2019ll be in touch about access.</p>
      <div class="acts"><button class="gb" type="button" data-rc-close><span>Close</span></button></div></div>
  </dialog>`}function lo(e,{audio:a,variant:i=()=>"",autoOpen:t=!1}={}){let l=c=>{let[o,d]=c.dataset.requestCode.split("|"),p=document.createElement("div");p.innerHTML=od(d);let f=p.firstElementChild;document.body.append(f);let g=f.querySelector("form"),h=f.querySelector(".rc-s"),P=g.querySelector("[type=submit]"),X=performance.now(),s=rd(),M=!1,T=()=>f.close();f.addEventListener("close",()=>{f.remove(),c.focus({preventScroll:!0}),a?.sfx?.("close")}),f.addEventListener("click",I=>{I.target===f&&T()}),f.querySelectorAll("[data-rc-close]").forEach(I=>I.addEventListener("click",T));let B=(I,q)=>{let F=g.elements[I],_=g.querySelector(`[data-err=${I}]`);q?(F.setAttribute("aria-invalid","true"),_.textContent=q):(F.removeAttribute("aria-invalid"),_.textContent="")};g.addEventListener("submit",async I=>{if(I.preventDefault(),M)return;let q={name:g.elements.name.value.trim(),email:g.elements.email.value.trim(),use:g.elements.use.value.trim()};if(B("name",q.name?"":"Please add your name."),B("email",ba(q.email)?"":"Please enter a valid email address."),!q.name){g.elements.name.focus();return}if(!ba(q.email)){g.elements.email.focus();return}if(!Ln){h.textContent="Requests are not open yet. You can write to trescarla@gmail.com.";return}M=!0,P.disabled=!0,P.setAttribute("aria-busy","true"),h.removeAttribute("role"),h.textContent="Sending\u2026";let F=!1,_="";try{let V=await fetch(Ln,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({product:o,productName:d,variant:i()||"",...q,key:s,elapsed:Math.round(performance.now()-X),website:g.elements.website.value,lang:(navigator.language||"en").slice(0,5)})}),L=await V.json().catch(()=>null);F=V.ok&&L?.ok===!0,_=F?"":V.status===429?"Too many requests for now \u2014 please try again in a while.":"Your request was not sent. Please try again, or write to trescarla@gmail.com."}catch{_="Your request was not sent \u2014 the connection failed. Please try again, or write to trescarla@gmail.com."}if(M=!1,P.disabled=!1,P.removeAttribute("aria-busy"),F){_e("code_request",{product:o}),a?.sfx?.("confirm"),g.hidden=!0;let V=f.querySelector(".rc-done");V.hidden=!1,V.focus();return}h.textContent=_,h.setAttribute("role","alert"),_e("code_request_failed",{product:o})}),f.showModal(),a?.sfx?.("open"),_e("code_request_open",{product:o}),requestAnimationFrame(()=>g.elements.name.focus())};if(e.querySelectorAll("[data-request-code]").forEach(c=>c.addEventListener("click",()=>l(c))),t){let c=e.querySelector("[data-request-code]");c&&setTimeout(()=>l(c),80)}}var Mn=`
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
`;var qn=Ra?Ra.replace(/\/waitlist$/,"/studio-waitlist"):"",id=!0,Ar=()=>id||/[?&]list=1\b/.test(location.search),nd=0;function Cr({tone:e="light",heading:a=!0,soon:i=!1}={}){let t=`sl-${++nd}`;return`<section class="sl sl-${e}" aria-labelledby="${t}-h" data-studio-list>
    ${i?`<h2 class="sl-h sl-h3" id="${t}-h">Be the first to know when Studio opens.</h2>`:a?`<p class="sl-k">Studio</p><h2 class="sl-h" id="${t}-h">Something new is taking shape.</h2>`:`<h3 class="sl-h sl-h3" id="${t}-h">Studio</h3>`}
    ${i?"":'<p class="sl-l">Be the first to know when Studio opens.</p>'}
    <form class="sl-f" novalidate>
      <label class="sl-fl" for="${t}-e"><span class="sl-sr">Email address</span></label>
      <div class="sl-row"><input class="gi"${Ar()?"":" disabled"} id="${t}-e" name="email" type="email" autocomplete="email" inputmode="email" maxlength="254" placeholder="you@example.com" required aria-describedby="${t}-c ${t}-m">
        <button class="gb${e==="dark"?" crystal":" primary"}" type="submit"${Ar()?"":" disabled"}><span>Notify me</span></button></div>
      <label class="sl-c" id="${t}-c"><input type="checkbox" name="consent" required${Ar()?"":" disabled"}> <span>Yes, email me when Studio opens. Sent by Carla Tres (The Light Orb); your address is used only for this, kept apart from every other list, and every email has a link to leave. <a href="#/privacy">Privacy</a></span></label>
      <label class="sl-hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
      <p class="sl-m" id="${t}-m" role="status" aria-live="polite">${Ar()?"":"Sign-up opens soon \u2014 nothing typed here is sent yet."}</p>
    </form>
  </section>`}function mr(e,{sfx:a=()=>{}}={}){e.querySelectorAll("[data-studio-list] form").forEach(i=>i.addEventListener("submit",async t=>{t.preventDefault();let l=i.elements.email,c=i.elements.consent,o=i.querySelector("[type=submit]"),d=i.querySelector(".sl-m"),p=l.value.trim();d.removeAttribute("data-err");let f=(s,M)=>{d.textContent=s,d.dataset.err="",M?.focus(),M&&M.setAttribute("aria-invalid","true")};if(l.removeAttribute("aria-invalid"),c.removeAttribute("aria-invalid"),!ba(p))return f("Please enter a valid email address.",l);if(!c.checked)return f("Please tick the box so I know you\u2019d like that one email.",c);if(!qn||!Ar())return f("The list is not open yet. Nothing was sent.");o.disabled=!0,o.setAttribute("aria-busy","true"),d.textContent="";let g=!1,h=0;try{let s=await fetch(qn,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:p,consent:!0,website:i.elements.website.value,lang:(navigator.language||"en").slice(0,5)})});h=s.status,g=s.ok&&(await s.json().catch(()=>null))?.ok===!0}catch{}if(o.disabled=!1,o.removeAttribute("aria-busy"),!g)return f(h===429?"Too many tries \u2014 please wait a little and try again.":"That did not go through, so you are not on the list yet. Please try again in a moment.");_e("studio_list_join"),a("confirm");let P=i.closest("[data-studio-list]"),X=document.createElement("div");X.className="sl-done",X.tabIndex=-1,X.setAttribute("role","status"),X.innerHTML='<p class="sl-h sl-h3">You\u2019re on the list.</p><p class="sl-l">We\u2019ll let you know at <b></b> when Studio opens.</p>',X.querySelector("b").textContent=p,P.querySelector(".sl-l")?.remove(),i.replaceWith(X),X.focus({preventScroll:!0})}))}var An=()=>`<section class="ss" aria-labelledby="ss-h">
  <div class="ss-in">
    <p class="ss-k">Studio</p>
    <h1 class="ss-h" id="ss-h">Coming soon.</h1>
    <p class="ss-l">A creative space to explore, experiment and bring digital ideas to life.</p>
    <p class="ss-n">Studio is not open yet. <a href="#/products">Browse the products</a> in the meantime.</p>
    <div class="ss-f glass">${Cr({soon:!0})}</div>
  </div>
</section>`,Cn=`
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
`;var Pt=null,la=null,fr=null,jr=0,sd=performance.now()/1e3,At={exposure:1,target:1,impacts:[null,null],next:0,strength:1,scale:90,horizon:.27,lamp:.9,orb:null};function co(e){if(!la){la=document.createElement("canvas"),la.className="world-preview",la.setAttribute("aria-hidden","true"),la.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:inherit";try{Pt=zi(la)}catch{Pt=null}}return Pt&&(fr=e,e.prepend(la),Ho(),ld()),la}function Or(){cancelAnimationFrame(jr),jr=0,la?.remove(),fr=null}function Ho(){if(!fr||!Pt)return;let e=fr.getBoundingClientRect();Pt.resize(Math.max(2,e.width),Math.max(2,e.height),Math.min(devicePixelRatio||1,1.5))}addEventListener("resize",Ho);var kt={state:At,setExposure(e,a=!1){At.target=e,a&&(At.exposure=e)},impact(e,a,i=At.strength){let t=At.next++%2;At.impacts[t]={x:e,y:a,at:performance.now()/1e3,strength:i}},set(e){Object.assign(At,e)},setOrb(e){At.orb=e},get canvas(){return la}};function ld(){cancelAnimationFrame(jr);let e=()=>{if(!fr||!Pt)return;let a=performance.now()/1e3,i=fr.getBoundingClientRect();Math.abs(i.width-la.width/Pt.ratio)>2&&Ho(),At.exposure+=(At.target-At.exposure)*.05;let t=i.height,l=At.orb;Pt.setHorizon(At.horizon),Pt.setExposure(At.exposure),Pt.setNightGain(1),l?(Pt.setOrb(l.x,l.y,l.d),Pt.setLamp(l.x,l.y,l.d*3,At.lamp*(1-At.exposure)),Pt.setReveal(l.x,l.y,Math.hypot(i.width,t),At.exposure*60)):(Pt.setReveal(0,0,1,0),Pt.setLamp(0,0,1,0)),At.impacts.forEach((c,o)=>Pt.setImpact(o,c?.x??0,c?.y??0,c?a-c.at:-1,c?.strength??0,At.scale)),Pt.render(a-sd),jr=requestAnimationFrame(e)};jr=requestAnimationFrame(e)}var jn=`
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
`;var po=e=>String(e).replace(/[&<>"]/g,a=>`&#${a.charCodeAt(0)};`),On={orb:{is:"A real-time 3D sphere you can place in your own page. It is drawn live in the browser, not a video or image, and it answers the visitor\u2019s hand.",qualities:["Twenty versions: clear glass, liquid metal, porcelain, bloom, and glass holding a light, points of light, glitter or beads","Turns when dragged and keeps a slow motion of its own","A tap stirs whatever is inside","Respects reduced-motion settings"],use:["A hero centrepiece for a studio, product or portfolio home page","A quiet, tactile signature beside a headline","A brand object on a launch or coming-soon page"],custom:["Choose the version: material and what it holds inside","Size and placement are set by the element you mount it in","More detailed shaping (light, material, movement) is planned for Studio, which is not open yet"],tech:["An ES module built on Three.js r186 (WebGL 2)","Current Chrome, Safari, Edge and Firefox","Integration notes explain how to place it and choose a version"],limits:["Needs WebGL 2; on devices without it, show a still image instead","A 3D scene costs more battery than a static image on phones: one per page is the intended use"]},"orb-slider":{is:"A slide-to-confirm control: a glass capsule whose thumb is a small orb with its own slow inner light.",qualities:["A spring carries the orb home when released, or to the end to confirm","Sends a confirm event your page can listen for","Arrow keys, Enter, Home and End work as well as touch and mouse","Six glass materials"],use:["An \u201Center\u201D gesture for an intro or a gated page","A deliberate confirmation: book, send, unlock","A memorable call to action on a landing page"],custom:["Six materials, each a set of CSS variables you can edit","The label text is plain HTML","Colours and size follow ordinary CSS"],tech:["One self-contained HTML file per material: HTML, CSS variables and a few lines of plain JavaScript","No framework, no WebGL","Current Chrome, Safari, Edge and Firefox"],limits:["A slide gesture is slower than a click: use it where the pause is the point, not for everyday buttons"]},"crystal-controls":{is:"An interface kit of buttons, switches, fields and sliders in glass, with a highlight that follows the pointer and presses that give like glass on a spring.",qualities:["Every state: default, hover, focus, pressed, selected, disabled and loading","Six materials: Clear, Smoke, Chrome, Porcelain, Gel and Bloom","Visible keyboard focus on every control"],use:["The controls of a product or booking page with a premium, tactile feel","Forms and settings panels that match a glass or light visual identity","A consistent button set across a whole site"],custom:["Each material is a set of CSS variables: change colour, depth and highlight","Mix materials on one page","Labels and icons are ordinary HTML"],tech:["One self-contained HTML file per material: plain CSS and a little JavaScript for the pointer light and slider spring","No framework; drops into any site or framework","Current Chrome, Safari, Edge and Firefox"],limits:["The pointer light is a hover effect: on touch screens the controls stay fully usable, without the moving highlight"]},"light-orb":{is:"The Orb this website is built around: one real light inside thick glass, rendered live, with its light in the visitor\u2019s hands.",qualities:["Drag inside the glass to place the light","Intensity, size, glow, colour temperature and surface roughness change the real renderer","No pre-rendered frames"],use:["A signature hero for a studio or brand site","An interactive object on an about or launch page","A calm, living background element beside text"],custom:["Light position, intensity, size, glow, colour temperature and roughness, with the controls on this page","Reset returns the original look"],tech:["The same WebGL renderer the site uses","Current Chrome, Safari, Edge and Firefox","Source code on request"],limits:["Needs WebGL 2","Heavier than a static image: one per page is the intended use"]},"voice-orb":{is:"An Orb whose inner light answers your voice level, the same response the site\u2019s guide shows when it speaks.",qualities:["Starts only when you turn the microphone on","Your voice level moves the light live","Sound is analysed in this tab only: never played back, recorded or sent"],use:["A voice or audio product\u2019s landing page","A listening indicator for a voice interface","An interactive moment on an event or campaign page"],custom:["Sensitivity and look follow the controls on this page"],tech:["Web Audio level analysis in the browser; WebGL rendering","Needs microphone permission and a secure (https) page","Source code on request"],limits:["It reacts to loudness, not words: it does not understand speech","Without microphone permission it stays still"]},lens:{is:"A disc of thick optical glass that bends the page beneath it: it enlarges the centre, folds the edge with a trace of colour and leaves a point of focused light in its shadow.",qualities:["Moves with the pointer or by dragging","Real-time refraction of the content under it","Keyboard, touch and reduced-motion support"],use:["A product-detail magnifier","An exploratory hero over an image or typography","A playful focus effect on a portfolio"],custom:["Size and optical settings with the controls in this panel","Export your settings as a file"],tech:["Web Component and React module","An offline demo page","Source code on request"],limits:["A preview piece: the packaged download is not assembled yet"]},type:{is:"Lettering whose glyphs themselves stretch: grab any part of a letter and pull, strokes thin and lengthen, then snap back past rest and settle.",qualities:["Physical, spring-based motion","Your own word, typed in the panel","Keyboard, touch and reduced-motion support"],use:["A headline people want to touch on a studio or campaign site","An interactive logo moment","A playful 404 or coming-soon page"],custom:["The word and the motion settings, with the controls in this panel","Export your settings as a file"],tech:["Web Component and React module","An offline demo page","Source code on request"],limits:["Best with short words (up to 14 characters)","A preview piece: the packaged download is not assembled yet"]}},zn=[["is","What it is"],["qualities","Qualities and features"],["use","In a real website"],["custom","Customisation"],["tech","Integration and technical details"],["limits","Demo and limitations"]],In=e=>Array.isArray(e)?`<ul>${e.map(a=>`<li>${po(a)}</li>`).join("")}</ul>`:`<p>${po(e)}</p>`;function uo(e,a){let i=On[e];return i?`<section class="pi" id="pd-more" aria-label="About ${po(a)}">
    ${zn.map(([t,l],c)=>`<article class="pi-s"><p class="pi-n">${String(c+1).padStart(2,"0")}</p><h2>${l}</h2>${In(i[t])}</article>`).join("")}
    <aside class="pi-cta"><p>Want ${po(a)} at the heart of a website made for you?</p><a class="gb small primary" href="#/design">Start a custom web design project</a></aside>
  </section>`:""}function Pn(e){let a=On[e];return a?`<div class="pi-c">${zn.map(([i,t],l)=>`<details${l?"":" open"}><summary>${t}</summary>${In(a[i])}</details>`).join("")}</div>`:""}var Rn=`
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
`;var zr=[{id:"light-orb",name:"Light Orb",cat:"Orbs",sphere:"dawn",badge:"Live light",line:"The site\u2019s own light-in-glass Orb, with its light in your hands.",lede:"The Orb the site is built around: one real light inside thick glass. Move it, soften it, warm it, and watch the glass answer.",does:"Drag inside the glass to place the light. Intensity, size, glow, colour temperature and surface roughness change the same renderer the site uses \u2014 no pre-rendered frames.",hint:"Drag inside the glass to move the light."},{id:"voice-orb",name:"Talking Orb",cat:"Interaction",sphere:"core",badge:"Voice",line:"An Orb that answers your voice, live, after you turn the microphone on.",lede:"The guide Orb\u2019s voice response, open to you: speak and the light inside the glass answers your voice.",does:"Turn the microphone on and speak. Your voice level moves the Orb exactly as the guide moves when it talks. The sound is analysed in this tab only: never played back, recorded or sent.",hint:"Turn the microphone on, then speak."}],Dn=e=>zr.find(a=>a.id===e),Yo="Interactive demo \xB7 source not packaged yet";function br(e){let a=e/100,i=o=>Math.max(0,Math.min(255,Math.round(o))),t=a<=66?255:329.698727446*(a-60)**-.1332047592,l=a<=66?99.4708025861*Math.log(a)-161.1195681661:288.1221695283*(a-60)**-.0755148492,c=a>=66?255:a<=19?0:138.5177312231*Math.log(a-10)-305.0447927307;return"#"+[t,l,c].map(o=>i(o).toString(16).padStart(2,"0")).join("")}var _o=[{k:"strength",l:"Intensity",min:0,max:1,step:.01,path:["light","strength"]},{k:"spread",l:"Size & softness",min:0,max:1,step:.01,path:["light","spread"]},{k:"glow",l:"Glow",min:0,max:1,step:.01,path:["light","glow"]},{k:"kelvin",l:"Temperature",min:2200,max:7500,step:50,unit:" K"},{k:"roughness",l:"Surface roughness",min:0,max:.5,step:.01,path:["shell","roughness"]}],go={idle:["Microphone off","Not activated. Nothing is heard until you turn it on."],requesting:["Asking permission\u2026","Your browser is asking whether this page may use the microphone."],listening:["Listening","Speak \u2014 the Orb answers your voice."],responding:["Responding","The Orb is answering your voice."],muted:["Muted","The microphone is off. Turn it on to continue."],denied:["Permission denied","Allow microphone access for this site in your browser, then try again."],unavailable:["Unavailable",""]};function Bn(e,a){let{page:i,product:t,audio:l,esc:c,ICON:o,footer:d,cleanup:p,track:f}=a,g=e.id==="voice-orb",h=Ut(ha("original").config),P=Ut(h),X=3600;g||(Object.assign(P.light,{strength:.95,glow:.55,spread:.6}),P.light.colour=br(X),Object.assign(h.light,P.light)),i.innerHTML=`
    <section class="pd lv">
      <a class="back tl" href="#/products">${o.back}<span>Products</span></a>
      <div class="pd-grid">
        <div class="pd-stage glass lv-stage" data-stage><div class="lv-host" data-live role="${g?"img":"application"}" aria-label="${c(e.name)}: ${g?"responds to your voice":"drag to move the light; arrow keys work too"}"${g?"":' tabindex="0"'}></div>
          ${g?"":`<span class="pd-hint">${c(e.hint)}</span>`}
          ${g?`<div class="lv-mic" data-state="idle"><button class="gb gc lv-mic-b" type="button" data-mic aria-pressed="false" aria-describedby="lv-mic-d"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg></button>
            <div class="lv-mic-t" aria-live="polite"><b data-mic-s>${go.idle[0]}</b><small id="lv-mic-d" data-mic-d>${go.idle[1]}</small></div><i class="lv-meter" aria-hidden="true"><i></i></i></div>`:""}
        </div>
        <div class="pd-info info-dark">
          <p class="kicker">${g?"Voice \xB7 Interaction":"Light \xB7 Orbs"}</p><h1>${c(e.name)}</h1>
          <p class="lede">${c(e.lede)}</p>
          ${g?"":`<div class="lv-ctl" data-ctl>${_o.map(I=>{let q=I.k==="kelvin"?X:I.path.reduce((F,_)=>F[_],P);return`<label class="lv-row"><span>${I.l}</span><input type="range" min="${I.min}" max="${I.max}" step="${I.step}" value="${q}" data-k="${I.k}"><output>${Wo(q,I)}</output></label>`}).join("")}<div class="lv-acts"><button class="gb small" type="button" data-reset>Reset</button></div></div>`}
          <p class="price">${Yo}</p>
          <dl class="facts ds-facts"><dt>What it does</dt><dd>${c(e.does)}</dd>
            <dt>Availability</dt><dd>Try it here, free, no sign-up. The source is not packaged for download yet; this page will say when it is.</dd>
            ${g?"<dt>Privacy</dt><dd>The microphone starts only when you press its button and stops when you leave the page or hide the tab. The sound stays in this tab.</dd>":""}
            <dt>Questions</dt><dd><a href="mailto:trescarla@gmail.com">trescarla@gmail.com</a></dd></dl>
        </div>
      </div>
    </section>${uo(e.id,e.name)}${d()}`;let s=i.querySelector("[data-stage]"),M=i.querySelector("[data-live]"),T={};t.show(P,T),f?.("product_open",{product:e.id});let B=()=>t.update(P,T);if(g){let le=function(){w=requestAnimationFrame(le),z=Z.sample(),t.orb?.setSpeech(Math.min(1,z*1.6)),V.style.transform=`scaleX(${Math.min(1,z*2).toFixed(3)})`,$(z>.12?"responding":"listening")},I=s.querySelector(".lv-mic"),q=I.querySelector("[data-mic]"),F=I.querySelector("[data-mic-s]"),_=I.querySelector("[data-mic-d]"),V=I.querySelector(".lv-meter>i"),L=!1,w=0,z=0,G="",$=(ee,se)=>{G===ee&&!se||(G=ee,I.dataset.state=ee,F.textContent=go[ee][0],_.textContent=se||go[ee][1],q.setAttribute("aria-pressed",String(ee==="listening"||ee==="responding")),q.setAttribute("aria-label",ee==="listening"||ee==="responding"?"Turn the microphone off":ee==="requesting"?"Cancel the microphone request":"Turn the microphone on"))},C=!globalThis.navigator?.mediaDevices?.getUserMedia,Z=l.microphone({onState({status:ee,error:se}){if(ee==="listening"){L=!0,$("listening"),w||(w=requestAnimationFrame(le));return}cancelAnimationFrame(w),w=0,z=0,t.orb?.setSpeech(0),V.style.transform="scaleX(0)",ee==="requesting"?$("requesting"):ee==="error"?$(/^Allow/.test(se)?"denied":"unavailable",se):$(L?"muted":"idle")}});C&&($("unavailable","This browser does not offer microphone input here (it needs HTTPS or localhost and a supported browser)."),q.disabled=!0),q.addEventListener("click",()=>{l.sfx("select"),Z.toggle()}),p.push(()=>{cancelAnimationFrame(w),Z.dispose(),t.orb?.setSpeech(0)})}else{let I=(V,L)=>{let w=M.getBoundingClientRect(),z=Math.min(w.width,w.height)*.8,G=2/z;P.light.x=Math.max(-.62,Math.min(.62,(V-w.left-w.width/2)*G)),P.light.y=Math.max(-.62,Math.min(.62,-(L-w.top-w.height/2)*G)),B()},q=!1;M.addEventListener("pointerdown",V=>{q=!0,M.setPointerCapture(V.pointerId),I(V.clientX,V.clientY),l.sfx("select")}),M.addEventListener("pointermove",V=>{q&&I(V.clientX,V.clientY)});let F=()=>{q=!1};M.addEventListener("pointerup",F),M.addEventListener("pointercancel",F),M.addEventListener("keydown",V=>{let L={ArrowLeft:[-.05,0],ArrowRight:[.05,0],ArrowUp:[0,.05],ArrowDown:[0,-.05]}[V.key];L&&(V.preventDefault(),P.light.x=Math.max(-.62,Math.min(.62,P.light.x+L[0])),P.light.y=Math.max(-.62,Math.min(.62,P.light.y+L[1])),B())});let _=i.querySelector("[data-ctl]");_.addEventListener("input",V=>{let L=_o.find(z=>z.k===V.target.dataset.k);if(!L)return;let w=+V.target.value;if(L.k==="kelvin")X=w,P.light.colour=br(w);else{let[z,G]=L.path;P[z][G]=w}V.target.nextElementSibling.textContent=Wo(w,L),B()}),_.querySelector("[data-reset]").addEventListener("click",()=>{Object.assign(P.light,structuredClone(h.light)),Object.assign(P.shell,structuredClone(h.shell)),X=3600,P.light.colour=br(X),_.querySelectorAll("input").forEach(V=>{let L=_o.find(z=>z.k===V.dataset.k),w=L.k==="kelvin"?X:L.path.reduce((z,G)=>z[G],P);V.value=w,V.nextElementSibling.textContent=Wo(w,L)}),B(),l.sfx("select")})}return p.push(()=>t.hide()),{id:e.id,el:s,host:M}}var Wo=(e,a)=>a.k==="kelvin"?`${e} K`:a.max<=1?e.toFixed(2):String(e),Fn=`
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
`;var bt=(e,a=0,i=1)=>Math.min(i,Math.max(a,e)),dd=(e,a,i)=>e+(a-e)*i,Jo=.25,Yn=3,cd=40,pd=e=>Math.max(1,.9*(Number.isFinite(e)?e:1)),ud=(e,a,i)=>Math.hypot(Math.max(i.l-e,0,e-i.r),Math.max(i.t-a,0,a-i.b));function gd(e,a,i,t){let l=(e.l+e.r)/2,c=(e.t+e.b)/2,o=Math.min(e.r-e.l,e.b-e.t)/2-i;for(let d of a)o=Math.min(o,ud(l,c,d)-i);return Math.max(0,2*o/t)}function Qo(e,a,i){let t=Math.max(Jo,Math.min(Yn,i/Math.max(1,e))),l=bt(Number.isFinite(a)?a:1,Jo,t);return{zoom:l,size:Math.max(Math.min(cd,i),Math.min(e*l,i))}}function hd(e,a,i,t){a!==e.shown&&(e.want=a);let l=Qo(i,e.want,t);return e.shown=l.zoom,l}var Nn="lo:studio2",Un=2,Hn=Math.PI/180,md="https://thelightorb.com/embed/v1/orb.js",Ct=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),Vn=e=>Xt.find(a=>a.id===e)??Xt[0];function Ja(e="orb",a="clear"){let i=Vn(a).id;return{v:Un,version:1,family:sa(e)?e:"orb",preset:i,sph:lr(i),zoom:1,orb:Ut(ha("original").config),scene:{exposure:0,left:.65,right:.55,env:.5},view:{yaw:0,pitch:0,zoom:1},rot:0,slider:{length:420,height:92,tint:"#ffffff",tintAmount:0,preset:"original"},wave:{strength:.9,scale:80,exposure:1},bg:{exposure:1,horizon:.27,lamp:.8},ctl:{tint:"#ffffff",tintAmount:.1,depth:5,radius:999,blur:8}}}function Uo(e){let a=Ja(e?.family,e?.sph?.variant||(Xt.some(t=>t.id===e?.preset)?e.preset:"clear"));if(!e||typeof e!="object")return a;let i={...a};for(let t of["orb","scene","view","slider","wave","bg","ctl"])e[t]&&typeof e[t]=="object"&&(i[t]={...a[t],...structuredClone(e[t])});return e.orb?.light&&(i.orb=structuredClone(e.orb)),e.sph&&(i.sph=Ni(lr(e.sph.variant||a.preset),e.sph)),typeof e.rot=="number"&&(i.rot=e.rot),typeof e.zoom=="number"&&(i.zoom=bt(Number.isFinite(e.zoom)?e.zoom:1,Jo,Yn)),i.preset=i.sph.variant,i}var fd=["bloom","core","points","glitter","beads","liquid"],bd=[["material","Material",()=>[["sph.base","Material","select",Bi.map(([e,a])=>[e,a]),"What the sphere is made of"],["sph.material.tint","Tint","color","Main colour of the glass, metal or cloud"],["sph.material.accent","Accent","color","Second colour: porcelain edges, cloud highlights, bead sheen, liquid surface"],["sph.material.refraction","Refraction",0,2.5,.01,"\xD7","How strongly the glass bends the room (index of refraction)"],["sph.material.dispersion","Dispersion",0,1,.01,"%","Colour fringes: the rainbow split of light through glass"],["sph.material.frost","Frost",0,1,.01,"%","Roughness: from polished to frosted, diffuse reflections"],["sph.material.rim","Fresnel rim",0,3,.01,"\xD7","Brightness of reflections at the edge"],["sph.material.iridescence","Iridescence",0,1,.01,"%","Thin-film rainbow sheen at the rim"],["sph.material.opacity","Opacity",0,1,.01,"%","How much of the background shows through"],["sph.material.exposure","Exposure",.2,2.5,.01,"\xD7","Overall brightness of the sphere"]]],["interior","Interior",e=>fd.includes(e.sph.base)?[["sph.interior.amount",e.sph.base==="liquid"?"Density":"Amount",-1,1,.01,"%","How much is inside: more points, flakes, beads or cloud"],["sph.interior.size","Size",.3,2.5,.01,"\xD7","Scale of what is inside"],["sph.interior.speed","Motion",0,4,.01,"\xD7","Speed of the inner movement (also the metal and porcelain flow)"],["sph.interior.glow","Glow",0,3,.01,"\xD7","Brightness of what is inside"],...e.sph.base==="liquid"?[["sph.interior.fill","Fill level",0,1,.01,"%","How full the sphere is"]]:[]]:[["sph.interior.speed","Flow speed",0,4,.01,"\xD7","Speed of the surface flow and inner movement"]]],["light","Lighting",()=>[["sph.light.angle","Key angle",-180,180,1,"\xB0","Direction of the main soft box around the sphere"],["sph.light.height","Key height",-30,90,1,"\xB0","Height of the main soft box"],["sph.light.key","Key light",0,3,.01,"\xD7","Strength of the main soft box"],["sph.light.rim","Rim light",0,3,.01,"\xD7","Strength of the second (rim) soft box"],["sph.light.environment","Environment",0,2,.01,"\xD7","Brightness of the studio room reflected in the sphere"],["sph.light.horizon","Horizon",0,3,.01,"\xD7","The bright horizon line in reflections"],["sph.light.colour","Light colour","color","Colour of all the light"]]],["motion","Motion",()=>[["sph.motion.spin","Idle spin",-1.5,1.5,.01,"r/s","Turntable speed when nobody touches it (negative turns the other way)"],["sph.motion.tilt","Axis tilt",-1.2,1.2,.01,"rad","Rest tilt of the spin axis towards the viewer"],["sph.motion.roll","Axis roll",-1.6,1.6,.01,"rad","Sideways tilt of the spin axis"],["sph.motion.bob","Float",0,.4,.005,"r","Up-and-down float amplitude"],["sph.motion.bobSpeed","Float speed",0,3,.01,"Hz","Float cycles per second"],["sph.motion.breathe","Breathing",0,.12,.001,"%","Slow pulse of the size"],["sph.motion.pointer","Pointer follow",0,3,.01,"\xD7","How much it leans towards the pointer"],["sph.motion.stir","Tap stir",0,3,.01,"\xD7","How much a tap stirs what is inside"],["sph.motion.inertia","Drag inertia",0,2,.01,"\xD7","How long it keeps turning after a drag"],["sph.motion.speech","Speech pulse",0,3,.01,"\xD7","How much it pulses with a voice (test below)"]]],["scene","Scene",()=>[["sph.scene.background","Background","seg",[["none","None"],["solid","Solid"],["gradient","Gradient"]],"Transparent, a solid colour or a soft radial gradient"],["sph.scene.colour","Colour","color","Background colour (outer colour of the gradient)"],["sph.scene.colour2","Centre colour","color","Inner colour of the gradient"],["sph.scene.size","Sphere size",.3,1.2,.01,"%","Size of the sphere in its frame (leave room for the shadow)"],["sph.scene.shadow","Floor shadow",0,1,.01,"%","Soft contact shadow under the sphere"],["sph.scene.reflection","Reflection",0,1,.01,"%","Mirror reflection on the floor"]]]],_n={scene:["Studio light",[["scene.exposure","Exposure",-2,2,.1,"EV"],["scene.left","Left light",0,1,.01,"%"],["scene.right","Right light",0,1,.01,"%"],["scene.env","Environment",0,1,.01,"%"]]],light:["Orb light",[["orb.light.colour","Colour","color"],["orb.light.strength","Strength",0,1,.01,"%"],["orb.light.x","Position X",-.6,.6,.01,"r"],["orb.light.y","Position Y",-.8,.6,.01,"r"]]],slider:["Capsule",[["slider.length","Length",240,600,1,"px"],["slider.height","Height",60,130,1,"px"],["slider.tint","Glass tint","color"],["slider.tintAmount","Tint amount",0,1,.01,"%"],["slider.preset","Orb thumb","select",Ba.map(e=>[e.id,e.name])]]],wave:["Wave",[["wave.strength","Strength",.1,1,.01,"%"],["wave.scale","Ring scale",40,140,1,"px"],["wave.exposure","Environment",0,1,.01,"%"]]],bg:["Environment",[["bg.exposure","Dark \u2192 warm",0,1,.01,"%"],["bg.horizon","Horizon",.15,.45,.01,"%"],["bg.lamp","Orb lamp (dark)",0,1,.01,"%"]]],ctl:["Crystal controls",[["ctl.tint","Tint","color"],["ctl.tintAmount","Tint amount",0,1,.01,"%"],["ctl.depth","Optical depth",0,10,.5,"px"],["ctl.radius","Corner radius",6,999,1,"px"],["ctl.blur","Backdrop blur",0,24,1,"px"]]]},xd={"orb-slider":["slider","light","scene"],"orb-wave":["wave"],"background-pack":["bg"],"crystal-controls":["ctl"]},Vo=e=>e.family==="orb"?bd.map(([a,i,t])=>[a,i,t(e)]):xd[e.family].map(a=>[a,_n[a][0],_n[a][1]]),Wn=new Set(["sph.material.dispersion","sph.material.iridescence","sph.material.opacity","sph.material.rim","sph.interior.glow","sph.light.rim","sph.light.horizon","sph.motion.roll","sph.motion.bobSpeed","sph.motion.pointer","sph.motion.stir","sph.motion.inertia","sph.motion.speech","sph.scene.colour2","sph.scene.reflection"]),vd=[[1900,"Candle"],[2700,"Warm"],[4e3,"Neutral"],[5600,"Daylight"],[6500,"Cool"],[8500,"Sky"]],yd=e=>typeof e[2]=="number",Go=e=>e[5]==="%"?100:1,wd={undo:'<path d="M9 7H4V2"/><path d="M4 7a9 9 0 1 1-1 7"/>',redo:'<path d="M15 7h5V2"/><path d="M20 7a9 9 0 1 0 1 7"/>',orbit:'<circle cx="12" cy="12" r="8"/><ellipse cx="12" cy="12" rx="8" ry="3"/>',light:'<circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',zoom:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M8.5 11h5M11 8.5v5"/>',reset:'<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>',stir:'<path d="M4 15c3-6 6 6 9 0s6-6 7 0"/>',bg:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/>',fit:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',more:'<circle cx="6" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18" cy="12" r="1"/>',plus:'<path d="M12 6v12M6 12h12"/>',minus:'<path d="M6 12h12"/>',chev:'<path d="M2 3.5l2.5 2.5L7 3.5"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',open:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v6H4V6h6"/>',dup:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',del:'<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"/>',sound:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'},Rt=(e,a="0 0 24 24")=>`<svg viewBox="${a}" aria-hidden="true">${wd[e]}</svg>`,kd=typeof navigator<"u"&&/Mac|iP/.test(navigator.platform||navigator.userAgent),Ha=kd?"\u2318":"Ctrl+",Xo=!1;function Sd(){if(Xo||document.getElementById("sx-css")){Xo=!0;return}let e=document.createElement("style");e.id="sx-css",e.textContent=jn,document.head.append(e),Xo=!0}function Gn({api:e,audio:a,top:i,page:t,query:l,ICON:c,flash:o,product:d,store:p}){Sd();let f=new Proxy({},{get:(b,u)=>(...v)=>d.orb?.[u]?.(...v)});function g(){return s.family==="orb"&&s.preset==="clear"&&s.sph?.base==="clear"}let h=new Set(["sph.base","sph.material.tint","sph.material.refraction","sph.material.frost","sph.material.exposure","sph.interior.amount","sph.interior.size","sph.interior.speed","sph.interior.glow","sph.light.key","sph.light.environment","sph.light.colour","sph.motion.spin","sph.motion.stir","sph.motion.speech"]),P=()=>gn(s.sph),X=()=>({dark:!0,envBoost:s.sph.light.environment,envLevel:s.sph.light.environment,keyLevel:s.sph.light.key,exposure:Math.log2(Math.max(.05,s.sph.material.exposure))*2,left:.65,right:.55}),s;try{let b=JSON.parse(sessionStorage.getItem(Nn));s=b&&b.v===Un?Uo(b):null}catch{s=null}if(s||(s=Ja()),l.design&&p.design(l.design)){let b=p.design(l.design);s=Uo({...structuredClone(b.draft),family:b.family}),s.designId=b.id,s.designName=b.name}else l.family&&sa(l.family)&&(l.family!==s.family||l.preset&&l.preset!==s.preset)&&(s=Ja(l.family,Xt.some(b=>b.id===l.preset)?l.preset:"clear"));let M=s.designId?JSON.stringify(ut(s)):null,T=[JSON.stringify(s)],B=0,I=[["voice_audition.samantha","Voice \xB7 Samantha"],["voice_audition.daniel","Voice \xB7 Daniel"],["home.samantha","Welcome narration"],...Lr.map(b=>[`sfx.${b.id}`,`Sound \xB7 ${b.name}`])],q=l.sound&&I.some(b=>b[0]===l.sound)?l.sound:I[0][0];function F(){let[b,u]=q.split(".");b==="sfx"?a.playUrl(q,Lr.find(v=>v.id===u).file,{from:0}):a.play(b,{voice:u,kind:"audition",from:0}),a.sfx("select")}let _=l.sound?setTimeout(()=>{_=null,F()},900):null,V=()=>{clearTimeout(_),_=null},L=a.store.on((b,u)=>{(u.voice&&!a.voiceOn||u.sounds&&!a.soundsOn)&&V()}),w="orbit",z="props",G="material",$=!1,C={material:!0,interior:!0,light:!0,motion:!1,scene:!1,slider:!0,wave:!0,bg:!0,ctl:!0,scene_:!0},Z={},le=()=>{try{sessionStorage.setItem(Nn,JSON.stringify(s))}catch{}};function ee(){let b=JSON.stringify(s);b!==T[B]&&(T.splice(B+1),T.push(b),B=T.length-1,T.length>120&&(T.shift(),B--)),le(),Pe()}document.body.classList.add("dark-ui","sx-on"),t.innerHTML=`
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
    <div class="sx-modal" data-modal hidden></div>`;let se=t.querySelector(".sx"),de=t.querySelector("[data-top]"),je=t.querySelector("[data-rail]"),Ae=t.querySelector("[data-view]"),N=t.querySelector("[data-stage]"),m=t.querySelector("[data-ins]"),O=t.querySelector("[data-modal]"),Y=t.querySelector("[data-hud]"),R=t.querySelector("[data-grab]"),D=b=>{se.classList.toggle("peek",!b),R.setAttribute("aria-expanded",b)};matchMedia("(max-width: 820px)").matches&&D(!1);{let b=null;R.addEventListener("pointerdown",u=>{b=u.clientY,R.setPointerCapture(u.pointerId)}),R.addEventListener("click",u=>{u.detail===0&&D(se.classList.contains("peek"))}),R.addEventListener("pointercancel",()=>{b=null}),R.addEventListener("pointerup",u=>{if(b==null)return;let v=u.clientY-b;b=null,D(Math.abs(v)<12?se.classList.contains("peek"):v<0)}),m.addEventListener("click",u=>{u.target.closest("[data-tab],[data-chip]")&&D(!0)},!0)}let ce=dr(N,s.preset,{config:s.sph}),fe=0,$e=0,he=new Proxy(ce,{get(b,u){if(g()){if(u==="rotate")return J=>{fe+=J*.01,f.setObjectYaw(fe)};if(u==="stir")return()=>f.nudge(bt(.8*(s.sph.motion.stir??1),0,1.5));if(u==="setSpeech")return J=>f.setSpeech(bt(J*(s.sph.motion.speech??1)));if(u==="resetView")return()=>{fe=0,f.setObjectYaw(0)};if(u==="canvas")return null}let v=b[u];return typeof v=="function"?v.bind(b):v}});he.canvas?.addEventListener("pointerdown",()=>{w!=="orbit"||De||(Bt=!0)});let ge=()=>s.designName||(s.family==="orb"?`${Vn(s.preset).name} Orb`:sa(s.family).name);function Ee(){de.innerHTML=`
      <h1 class="vh">Studio</h1>
      <div class="sx-doc">
        <span class="sx-dirty" data-dirty title="Unsaved changes"></span>
        <input class="sx-name" data-name value="${Ct(ge())}" aria-label="Design name" maxlength="48" spellcheck="false" data-tip="Rename">
        <select class="sx-sel" data-fam aria-label="Object">${na.map(u=>`<option value="${u.id}"${u.id===s.family?" selected":""}>${Ct(u.name)}</option>`).join("")}</select>
        ${s.family==="orb"?`<select class="sx-sel" data-pre aria-label="Start from a version">${Xt.map(u=>`<option value="${u.id}"${u.id===s.preset?" selected":""}>${Ct(u.name)}</option>`).join("")}</select>`:""}
      </div>
      <span class="sx-sp"></span>
      <button class="sx-ib sx-more" type="button" data-more aria-label="More: object, version, reset" aria-expanded="false">${Rt("more")}</button>
      <button class="sx-ib" type="button" data-undo aria-label="Undo" data-tip="Undo (${Ha}Z)">${Rt("undo")}</button>
      <button class="sx-ib" type="button" data-redo aria-label="Redo" data-tip="Redo (${Ha}\u21E7Z)">${Rt("redo")}</button>
      <button class="sx-ib" type="button" data-resetall aria-label="Reset to the version" data-tip="Reset to the version">${Rt("reset")}</button>
      <span class="sx-sep hide-m"></span>
      <button class="sx-tb" type="button" data-save data-tip="Save to My designs (${Ha}S)">Save</button>
      <button class="sx-tb pri" type="button" data-export data-tip="Export code (${Ha}E)">Export</button>`,de.querySelector("[data-fam]").addEventListener("change",u=>{let v=s.preset;s=Ja(u.target.value,v),a.sfx("press"),ie(),ee()}),de.querySelector("[data-pre]")?.addEventListener("change",u=>St(u.target.value));let b=de.querySelector("[data-name]");b.addEventListener("change",()=>{s.designName=b.value.trim().slice(0,48)||void 0,s.designId&&p.renameDesign(s.designId,ge()),b.value=ge(),le(),Fe()}),b.addEventListener("keydown",u=>{u.key==="Enter"&&b.blur()}),de.querySelector("[data-more]").addEventListener("click",u=>{let v=se.classList.toggle("more-open");u.currentTarget.setAttribute("aria-expanded",v),a.sfx("press")}),de.querySelector("[data-undo]").addEventListener("click",()=>Ye(-1)),de.querySelector("[data-redo]").addEventListener("click",()=>Ye(1)),de.querySelector("[data-resetall]").addEventListener("click",()=>{let u={designId:s.designId,designName:s.designName,zoom:s.zoom};s={...Ja(s.family,s.preset),...u},a.sfx("press"),ie(),ee(),o("Reset to the version\u2019s defaults.")}),de.querySelector("[data-save]").addEventListener("click",()=>Jt()),de.querySelector("[data-export]").addEventListener("click",()=>ua()),Pe()}function Pe(){let b=de.querySelector("[data-undo]"),u=de.querySelector("[data-redo]");b&&(b.disabled=B<=0),u&&(u.disabled=B>=T.length-1),de.querySelector("[data-dirty]")?.classList.toggle("on",JSON.stringify(ut(s))!==M)}function Ye(b){let u=bt(B+b,0,T.length-1);u!==B&&(B=u,s=JSON.parse(T[u]),a.sfx("press"),le(),ie(),Pe())}function St(b){let u={zoom:s.zoom};s={...Ja("orb",b),...u},a.sfx("press"),he.stir(),ie(),ee()}function st(){let b=s.family==="orb",u=[["orbit","Orbit (V) \xB7 or hold space and drag"],["light",b?"Move the key light (L)":"Move the light (L)"],["zoom","Zoom: drag up/down (Z)"]].filter(([v])=>b||v==="orbit"||v==="light"&&s.family==="orb-slider");je.innerHTML=u.map(([v,J])=>`<button class="sx-ib" type="button" data-tool="${v}" aria-pressed="${v===w}" aria-label="${J}" data-tip="${J}">${Rt(v)}</button>`).join("")+(b?`<hr><button class="sx-ib" type="button" data-stir aria-label="Stir" data-tip="Stir what is inside">${Rt("stir")}</button>
        <button class="sx-ib" type="button" data-checker aria-pressed="${$}" aria-label="Transparency grid" data-tip="Transparency grid">${Rt("bg")}</button>
        <button class="sx-ib" type="button" data-snap aria-label="Download PNG" data-tip="Download a PNG">${Rt("camera")}</button>
        <button class="sx-ib" type="button" data-speak aria-label="Test with a voice" data-tip="Test the speech pulse">${Rt("sound")}</button>`:""),je.querySelectorAll("[data-tool]").forEach(v=>v.addEventListener("click",()=>ot(v.dataset.tool))),je.querySelector("[data-stir]")?.addEventListener("click",()=>{he.stir(),a.sfx("press")}),je.querySelector("[data-checker]")?.addEventListener("click",()=>{$=!$,Ae.classList.toggle("checker",$),st()}),je.querySelector("[data-snap]")?.addEventListener("click",()=>ga()),je.querySelector("[data-speak]")?.addEventListener("click",()=>F())}function ot(b,u=!1){w=b,Ae.className=Ae.className.replace(/\bt-\w+/g,"")+` t-${b}`,Ae.classList.toggle("checker",$),N.style.pointerEvents=b==="orbit"&&!De?"":"none",u||a.sfx("press"),st(),ne()}let Qe=(b,u)=>{let v=b*Go(u),J=u[4]*Go(u),ae=J>=1?0:J>=.1?1:J>=.01?2:3;return(+v.toFixed(ae)).toString()},ye=()=>s.family==="orb"?{sph:lr(s.preset)}:Ja(s.family);function xe(b,u){let[v,J]=b,ae=qt(s,v),Ce=`sx-${v.replace(/\./g,"-")}`,Xe=yd(b)?b[6]:b[3+(b[2]==="select"||b[2]==="seg"?1:0)],jt=qt(u,v)!==void 0&&JSON.stringify(qt(u,v))!==JSON.stringify(ae)?" mod":"",wt=Tt=>`<label class="sx-lab${jt}" for="${Ce}"${Tt?" data-scrub":""}${Xe?` title="${Ct(Xe)}${Tt?" \u2014 drag to scrub":""}"`:""}>${Ct(J)}</label>`;if(g()&&v.startsWith("sph.")&&!h.has(v))return ra().replace(/^<div class="sx-row/,'<div inert title="Not available on the real Orb yet" class="sx-row sx-off');if(v==="sph.material.dispersion"&&["chrome","porcelain","bloom"].includes(s.sph?.base))return ra().replace(/^<div class="sx-row/,'<div inert title="Opaque material: no light passes through to split" class="sx-row sx-off');return ra();function ra(){if(b[2]==="color")return`<div class="sx-row full">${wt()}<span class="sx-col"><input type="color" id="${Ce}" data-path="${v}" value="${ae}"><input class="sx-num" data-hex="${v}" value="${ae}" aria-label="${Ct(J)} hex" spellcheck="false" maxlength="7"></span></div>`;if(b[2]==="select")return`<div class="sx-row full">${wt()}<select class="sx-sel" id="${Ce}" data-path="${v}">${b[3].map(([at,It])=>`<option value="${at}"${at===ae?" selected":""}>${Ct(It)}</option>`).join("")}</select></div>`;if(b[2]==="seg")return`<div class="sx-row full">${wt()}<span class="sx-seg" role="group" id="${Ce}">${b[3].map(([at,It])=>`<button type="button" data-seg="${v}" data-v="${at}" aria-pressed="${at===ae}">${It}</button>`).join("")}</span></div>`;let[,,Tt,Ue,lt,ht]=b,Se=(ae-Tt)/(Ue-Tt)*100;return`<div class="sx-row">${wt(!0)}<input class="sx-rng" type="range" id="${Ce}" data-path="${v}" min="${Tt}" max="${Ue}" step="${lt}" value="${ae}" style="--p:${Se}%" aria-label="${Ct(J)}">
      <span class="sx-nw"><input class="sx-num" type="text" inputmode="decimal" data-num="${v}" value="${Qe(ae,b)}" aria-label="${Ct(J)}${ht?` (${ht})`:""}"><i>${ht}</i></span></div>`}}let me=()=>Vo(s).flatMap(b=>b[2]),Oe=b=>me().find(u=>u[0]===b),Be=()=>matchMedia("(max-width: 820px)").matches;function Fe(){let b=m.querySelector(".sx-body")?.scrollTop??0,u=Vo(s),v=ye();u.some(ae=>ae[0]===G)||(G=u[0][0]);let J=[["props","Properties"],["designs","My designs"],["feedback","Feedback"]];m.innerHTML=`
      <div class="sx-tabs" role="tablist" aria-label="Inspector">${J.map(([ae,Ce])=>`<button class="sx-tab" role="tab" type="button" data-tab="${ae}" aria-selected="${ae===z}">${Ce}</button>`).join("")}</div>
      ${z==="props"?`<div class="sx-chips" role="group" aria-label="Section">${u.map(([ae,Ce])=>`<button type="button" data-chip="${ae}" aria-pressed="${ae===G}">${Ce}</button>`).join("")}</div>`:""}
      <div class="sx-body" data-body>${z==="props"?u.map(([ae,Ce,Xe])=>{let jt=C[ae]??!0,wt=Xe.filter(Se=>qt(v,Se[0])!==void 0&&JSON.stringify(qt(v,Se[0]))!==JSON.stringify(qt(s,Se[0]))).length,ra=Se=>qt(v,Se[0])!==void 0&&JSON.stringify(qt(v,Se[0]))!==JSON.stringify(qt(s,Se[0])),Tt=Z[ae]?[]:Xe.filter(Se=>Wn.has(Se[0])&&!ra(Se)),Ue=Xe.filter(Se=>!Tt.includes(Se)),lt=Se=>!(g()&&Se[0].startsWith("sph.")&&!h.has(Se[0])),ht=Xe.filter(Se=>Wn.has(Se[0])&&lt(Se)).length;return`<section class="sx-sec${ae===G?"":" m-off"}" data-sec="${ae}"><button class="sx-sh" type="button" data-tog="${ae}" aria-expanded="${jt}">${Rt("chev","0 0 9 9")}${Ce}<span class="n">${wt?`${wt} changed`:""}</span></button>
          <div class="sx-rows" ${jt?"":"hidden"}>${Ue.map(Se=>xe(Se,v)).join("")}
          ${ae==="light"&&s.family==="orb"?`<div class="sx-row full"><span class="sx-lab">Temperature</span><span class="sx-seg sx-k" role="group" aria-label="Light colour temperature">${vd.map(([Se,at])=>`<button type="button" data-kelvin="${Se}" title="${Se} K" aria-pressed="${br(Se)===qt(s,"sph.light.colour")}">${at}</button>`).join("")}</span></div>`:""}
          ${ht||wt?`<div class="sx-acts sx-adv">${ht?`<button class="sx-tb" type="button" data-more="${ae}" aria-expanded="${!!Z[ae]}">${Z[ae]?"Fewer controls":`More controls (${Tt.filter(lt).length})`}</button>`:""}${wt?`<button class="sx-tb" type="button" data-secreset="${ae}">Reset ${Ct(Ce.toLowerCase())}</button>`:""}</div>`:""}
          ${(()=>{let Se=g()?Xe.filter(at=>at[0].startsWith("sph.")&&!h.has(at[0])).length:0;return Se?`<p class="sx-offn">${Se} more ${Se===1?"control applies":"controls apply"} to the other versions of the Orb.</p>`:ae==="material"&&["chrome","porcelain","bloom"].includes(s.sph?.base)?'<p class="sx-offn">Dispersion applies to glass; this material is opaque.</p>':""})()}
          ${ae==="motion"?`<div class="sx-row full"><span class="sx-lab">Test sound</span><select class="sx-sel" data-snd aria-label="Sound to test">${I.map(([Se,at])=>`<option value="${Se}"${Se===q?" selected":""}>${Ct(at)}</option>`).join("")}</select></div>
            <div class="sx-acts"><button class="sx-tb" type="button" data-testsnd>Play to test the pulse</button><button class="sx-tb" type="button" data-stir2>Stir</button></div>`:""}
          ${ae==="wave"?'<div class="sx-acts"><button class="sx-tb" type="button" data-trigger>Trigger a wave</button></div>':""}
          </div></section>`}).join("")+'<p class="sx-hint sx-pad">Drag a label to scrub (<span class="sx-kbd">\u21E7</span> \xD710, <span class="sx-kbd">\u2325</span> fine). Gold dots mark values changed from the version; double-click a label to restore it.</p>':z==="designs"?Ne():Dt()}</div>`,m.querySelector("[data-body]").scrollTop=b,et()}function Ne(){let b=p.designs();return`<div class="sx-pad">
      <h3 class="sx-h">My designs</h3>
      ${b.length?`<div class="sx-ds">${b.map(u=>`<article class="sx-d${u.id===s.designId?" cur":""}" data-did="${Ct(u.id)}">
        ${u.thumb?`<img src="${u.thumb}" alt="">`:'<span class="ph"></span>'}
        <div><input value="${Ct(u.name)}" aria-label="Design name" maxlength="48" data-dn><small>${Ct(u.familyName||"")} \xB7 ${new Date(u.at).toLocaleDateString()}</small></div>
        <div class="ab"><button class="sx-ib" type="button" data-dopen aria-label="Open" data-tip="Open">${Rt("open")}</button><button class="sx-ib" type="button" data-ddup aria-label="Duplicate" data-tip="Duplicate">${Rt("dup")}</button><button class="sx-ib" type="button" data-ddel aria-label="Delete" data-tip="Delete">${Rt("del")}</button></div>
      </article>`).join("")}</div>`:'<p class="sx-empty">Nothing saved yet. Save keeps the design on this device; it also appears in Account \u2192 My Designs.</p>'}
      <div class="sx-acts" style="margin-bottom:16px"><button class="sx-tb pri" type="button" data-savenew>Save as new design</button>${s.designId?'<button class="sx-tb" type="button" data-new>New from version</button>':""}</div>
      ${s.family==="orb"?`<h3 class="sx-h">Start from a version</h3><div class="sx-vers">${Xt.map(u=>`<button class="sx-ver" type="button" data-ver="${u.id}" aria-pressed="${u.id===s.preset&&!s.designId}" title="${Ct(u.line)}">${Ct(u.name)}</button>`).join("")}</div>`:""}
    </div>`}function Dt(){return`<div class="sx-ea">
      ${'<p class="access">Studio is in early access \u2014 free while we build it. Designs stay on this device.</p>'}
      ${$n("studio")}${Cr({tone:"dark",heading:!1})}
      <h3 class="sx-h" style="margin-top:18px">Shortcuts</h3>
      <p class="sx-hint"><span class="sx-kbd">${Ha}Z</span> undo \xB7 <span class="sx-kbd">${Ha}\u21E7Z</span> redo \xB7 <span class="sx-kbd">${Ha}S</span> save \xB7 <span class="sx-kbd">${Ha}E</span> export \xB7 <span class="sx-kbd">V</span> orbit \xB7 <span class="sx-kbd">L</span> light \xB7 <span class="sx-kbd">Z</span> zoom \xB7 <span class="sx-kbd">R</span> reset view \xB7 <span class="sx-kbd">space</span>+drag orbit</p>
    </div>`}function et(){m.querySelectorAll("[data-tab]").forEach(u=>u.addEventListener("click",()=>{z=u.dataset.tab,a.sfx("press"),Fe()})),m.querySelectorAll("[data-chip]").forEach(u=>u.addEventListener("click",()=>{G=u.dataset.chip,a.sfx("press"),Fe()})),m.querySelectorAll("[data-tog]").forEach(u=>u.addEventListener("click",()=>{Be()||(C[u.dataset.tog]=!(C[u.dataset.tog]??!0),a.sfx("press"),Fe())})),z==="feedback"&&(En(m,{sfx:u=>a.sfx(u)}),io(m),mr(m,{sfx:u=>a.sfx(u)})),z==="designs"&&Ve(),m.querySelectorAll("input[type=range][data-path]").forEach(u=>{u.addEventListener("input",()=>{U(u.dataset.path,+u.value),tt(u.dataset.path)}),u.addEventListener("change",()=>{ee(),H(),a.sfx("release")})}),m.querySelectorAll("input[type=color][data-path]").forEach(u=>{u.addEventListener("input",()=>{U(u.dataset.path,u.value);let v=m.querySelector(`[data-hex="${u.dataset.path}"]`);v&&(v.value=u.value)}),u.addEventListener("change",()=>{ee(),H()})}),m.querySelectorAll("[data-hex]").forEach(u=>{u.addEventListener("input",()=>{/^#[0-9a-f]{6}$/i.test(u.value)&&(U(u.dataset.hex,u.value.toLowerCase()),m.querySelector(`input[type=color][data-path="${u.dataset.hex}"]`).value=u.value)}),u.addEventListener("change",()=>{/^#[0-9a-f]{6}$/i.test(u.value)||(u.value=qt(s,u.dataset.hex)),ee(),H()})}),m.querySelectorAll("select[data-path]").forEach(u=>u.addEventListener("change",()=>{if(u.dataset.path==="sph.base"){let[v,J]=Fi[u.value];s.sph.material.tint=Oo(v),s.sph.material.accent=Oo(J)}U(u.dataset.path,u.value),a.sfx("press"),he.stir(),Fe(),ee()})),m.querySelectorAll("[data-seg]").forEach(u=>u.addEventListener("click",()=>{U(u.dataset.seg,u.dataset.v),a.sfx("press"),Fe(),ee()})),m.querySelectorAll("[data-num]").forEach(u=>{let v=Oe(u.dataset.num);if(!v)return;let[,,J,ae]=v,Ce=Go(v);u.addEventListener("input",()=>{let Xe=parseFloat(u.value);Number.isFinite(Xe)&&(U(u.dataset.num,bt(Xe/Ce,J,ae)),Ge(u.dataset.num))}),u.addEventListener("change",()=>{tt(u.dataset.num),ee(),H()}),u.addEventListener("keydown",Xe=>{if(Xe.key==="Enter"&&u.blur(),Xe.key==="ArrowUp"||Xe.key==="ArrowDown"){Xe.preventDefault();let jt=v[4]*(Xe.shiftKey?10:Xe.altKey?.1:1);U(u.dataset.num,bt(qt(s,u.dataset.num)+(Xe.key==="ArrowUp"?jt:-jt),J,ae)),tt(u.dataset.num),ee()}}),u.addEventListener("focus",()=>u.select())}),m.querySelectorAll("[data-scrub]").forEach(u=>{let v=u.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),J=Oe(v);if(!J)return;let[,,ae,Ce,Xe]=J;u.addEventListener("pointerdown",jt=>{if(jt.button)return;jt.preventDefault(),u.setPointerCapture(jt.pointerId);let wt=jt.clientX,ra=qt(s,v),Tt=(Ce-ae)/240,Ue=ht=>{let Se=ht.shiftKey?10:ht.altKey?.1:1,at=bt(ra+(ht.clientX-wt)*Tt*Se,ae,Ce);at=Math.round(at/Xe)*Xe,U(v,+at.toFixed(5)),tt(v)},lt=()=>{u.removeEventListener("pointermove",Ue),u.removeEventListener("pointerup",lt),u.removeEventListener("pointercancel",lt),ee(),H()};u.addEventListener("pointermove",Ue),u.addEventListener("pointerup",lt),u.addEventListener("pointercancel",lt)})});let b=u=>{let v=ye();for(let J of u){let ae=qt(v,J);ae!==void 0&&U(J,structuredClone(ae))}ee(),a.sfx("release"),Fe()};m.querySelectorAll(".sx-lab[for]").forEach(u=>u.addEventListener("dblclick",v=>{v.preventDefault(),b([u.getAttribute("for").replace(/^sx-/,"").replace(/-/g,".")])})),m.querySelectorAll("[data-secreset]").forEach(u=>u.addEventListener("click",()=>b((Vo(s).find(v=>v[0]===u.dataset.secreset)?.[2]??[]).map(v=>v[0])))),m.querySelectorAll("[data-more]").forEach(u=>u.addEventListener("click",()=>{Z[u.dataset.more]=!Z[u.dataset.more],a.sfx("press"),Fe()})),m.querySelectorAll("[data-kelvin]").forEach(u=>u.addEventListener("click",()=>{U("sph.light.colour",br(+u.dataset.kelvin)),ee(),a.sfx("press"),Fe()})),m.querySelector("[data-snd]")?.addEventListener("change",u=>{q=u.target.value}),m.querySelector("[data-testsnd]")?.addEventListener("click",()=>F()),m.querySelector("[data-stir2]")?.addEventListener("click",()=>he.stir()),m.querySelector("[data-trigger]")?.addEventListener("click",()=>be())}function Ve(){m.querySelectorAll("[data-did]").forEach(b=>{let u=b.dataset.did,v=()=>p.design(u);b.querySelector("[data-dn]").addEventListener("change",J=>{let ae=J.target.value.trim()||"Untitled design";p.renameDesign(u,ae),s.designId===u&&(s.designName=ae,le(),Ee()),a.sfx("confirm")}),b.querySelector("[data-dopen]").addEventListener("click",()=>Ze(v())),b.querySelector("[data-ddup]").addEventListener("click",()=>{let J=v();if(!J)return;if(p.designs().length>=40){o("You have 40 designs, the most this browser keeps. Delete one first.");return}let ae={...structuredClone(J),id:Date.now().toString(36),name:`${J.name} copy`.slice(0,48),at:new Date().toISOString()};p.saveDesign(ae)&&(a.sfx("confirm"),Fe())}),b.querySelector("[data-ddel]").addEventListener("click",()=>{let J=v();J&&confirm(`Delete \u201C${J.name}\u201D? This cannot be undone.`)&&(p.deleteDesign(u),s.designId===u&&(delete s.designId,M=null,le(),Pe()),a.sfx("close"),Fe())})}),m.querySelector("[data-savenew]")?.addEventListener("click",()=>Jt(!0)),m.querySelector("[data-new]")?.addEventListener("click",()=>St(s.preset)),m.querySelectorAll("[data-ver]").forEach(b=>b.addEventListener("click",()=>St(b.dataset.ver)))}function Ze(b){b&&(s=Uo({...structuredClone(b.draft),family:b.family}),s.designId=b.id,s.designName=b.name,M=JSON.stringify(ut(s)),a.sfx("press"),ie(),ee(),o(`Opened \u201C${b.name}\u201D.`))}function Ge(b){let u=m.querySelector(`input[type=range][data-path="${b}"]`);u&&(u.value=qt(s,b),u.style.setProperty("--p",`${(u.value-u.min)/(u.max-u.min)*100}%`))}function tt(b){let u=m.querySelector(`[data-num="${b}"]`),v=Oe(b);u&&v&&document.activeElement!==u&&(u.value=Qe(qt(s,b),v)),Ge(b)}function H(){let b=ye();m.querySelectorAll(".sx-lab[for]").forEach(u=>{let v=u.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),J=qt(b,v);J!==void 0&&u.classList.toggle("mod",JSON.stringify(J)!==JSON.stringify(qt(s,v)))}),m.querySelectorAll("[data-sec]").forEach(u=>{let v=u.querySelectorAll(".sx-lab.mod").length,J=u.querySelector(".n");J&&(J.textContent=v?`${v} changed`:"")}),Pe()}function U(b,u){let v=b.split("."),J=s;for(let ae of v.slice(0,-1))J=J[ae];J[v.at(-1)]=u,K()}function K(){let b=s.family;if(b==="orb"){let u=g();for(let v of N.children)v.style.visibility=u?"hidden":"";u?d.show(P(),X()):(ce.setConfig({...s.sph,variant:s.preset}),d.hide())}else{let u=e.chamber,v=s.scene;Object.assign(u,{left:v.left,right:v.right,exposure:v.exposure,yaw:s.view.yaw*Hn,pitch:s.view.pitch*Hn,platform:!1});let J={dark:!0,envBoost:dd(.55,1.6,v.env),exposure:v.exposure,left:v.left,right:v.right};if(b==="orb-slider"){let ae=Ut(ha(s.slider.preset).config);Object.assign(ae.light,{strength:s.orb.light.strength,colour:s.orb.light.colour,x:s.orb.light.x,y:s.orb.light.y}),d.show(ae,J)}else b==="orb-wave"||b==="background-pack"?d.show(Ut(ha("original").config),J):d.hide();f.setView({yaw:0,pitch:0}),kt.set({strength:s.wave.strength,scale:s.wave.scale,horizon:b==="background-pack"?s.bg.horizon:.3,lamp:s.bg.lamp}),b==="orb-wave"&&kt.setExposure(s.wave.exposure),b==="background-pack"&&kt.setExposure(s.bg.exposure),He(),Ke()}ne(),le()}function ne(){let b=Math.round(s.zoom*100);Y.innerHTML=s.family==="orb"?`<b>${b}%</b><b>${{orbit:"Orbit",light:"Key light",zoom:"Zoom"}[w]}</b>${w==="light"?`<b>${Math.round(s.sph.light.angle)}\xB0 \xB7 ${Math.round(s.sph.light.height)}\xB0</b>`:""}`:""}function ie(){let b=s.family,u=t.querySelector("[data-screen]"),v=t.querySelector("[data-scap]"),J=t.querySelector("[data-kit]");N.hidden=b!=="orb",t.querySelector("[data-zoombar]").hidden=b!=="orb",u.hidden=!(b==="orb-wave"||b==="background-pack"),v.hidden=b!=="orb-slider",J.hidden=b!=="crystal-controls",Or(),e.removeBackdrop(kt.canvas),u.hidden||(co(u),e.addBackdrop(kt.canvas),kt.setExposure(b==="background-pack"?s.bg.exposure:s.wave.exposure,!0)),b==="orb-slider"&&(v.innerHTML='<span class="cap-label">slide to enter</span>',v.setAttribute("role","slider"),v.tabIndex=0,v.setAttribute("aria-label","Slide to enter")),b==="crystal-controls"&&(J.innerHTML=`<div class="kit-swatch"><button class="gb primary" type="button">Start project</button><button class="gb" type="button">Secondary</button><input class="gi" placeholder="Enter text" aria-label="Example field"><select class="gsel" aria-label="Example select"><option>Select</option><option>Clear</option></select><button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><button class="gb gc" type="button" aria-label="Confirm">${c.check}</button></div>`),J.querySelector(".gsw")?.addEventListener("click",ae=>{ae.currentTarget.setAttribute("aria-checked",String(ae.currentTarget.getAttribute("aria-checked")!=="true")),a.sfx("press")}),b!=="orb"&&w==="zoom"&&(w="orbit"),Ee(),st(),Fe(),K(),ot(w,!0)}let ke=0;function He(){let b=t.querySelector("[data-scap]");if(!b||b.hidden)return;let u=s.slider,v=u.tint,J=u.tintAmount;b.style.background=`linear-gradient(180deg, ${xr(v,.1+J*.35)}, ${xr(v,.03+J*.2)} 50%, ${xr(v,.08+J*.3)})`}function Ke(){let b=t.querySelector("[data-kit]");if(!b||b.hidden)return;let u=s.ctl,v=u.depth,J=b.querySelector("style");J||(J=document.createElement("style"),b.append(J)),J.textContent=`.st-kit .gb,.st-kit .gi,.st-kit .gsel{border-radius:${u.radius}px;-webkit-backdrop-filter:blur(${u.blur}px) saturate(1.5);backdrop-filter:blur(${u.blur}px) saturate(1.5)}
      .st-kit .gb:not(.primary){background:linear-gradient(180deg,${xr(u.tint,.3+u.tintAmount*.4)},${xr(u.tint,.08+u.tintAmount*.3)} 50%,${xr(u.tint,.25+u.tintAmount*.35)});
        box-shadow:inset 0 ${v*.3}px ${v*.2}px rgba(255,255,255,.95),inset 0 -${v*.6}px ${v}px -1px rgba(255,255,255,.75),inset 0 0 0 1px rgba(150,158,166,.18),inset 0 -${v*2}px ${v*2.8}px -${v*2}px rgba(120,128,136,.35),0 1px 1px rgba(40,44,50,.1),0 ${v*2}px ${v*4}px -${v*2}px rgba(40,44,50,.38)}`}let Le=null,De=!1,Bt=!1;Ae.addEventListener("pointerdown",b=>{if(b.target.closest("[data-zoombar],.st-cap,.st-kit,.st-screen"))return;let u=Bt;Bt=!1,!(s.family==="orb"&&w==="orbit"&&u&&!De)&&(Le={x:b.clientX,y:b.clientY,lx:b.clientX,ly:b.clientY,v:{...s.view},z:s.zoom,l:{...s.sph.light},ol:{...s.orb.light}},Ae.setPointerCapture(b.pointerId),Ae.classList.add("grab"))}),Ae.addEventListener("pointermove",b=>{if(!Le)return;let u=b.clientX-Le.x,v=b.clientY-Le.y,J=De?"orbit":w;if(s.family==="orb")J==="orbit"&&he.rotate(b.clientX-Le.lx,b.clientY-Le.ly),J==="light"&&(s.sph.light.angle=(Le.l.angle+u*.5+540)%360-180,s.sph.light.height=bt(Le.l.height-v*.35,-30,90),K(),tt("sph.light.angle"),tt("sph.light.height")),J==="zoom"&&ze(Le.z*Math.exp(-v*.005));else{if(J==="orbit"&&(s.view.yaw=bt(Le.v.yaw-u*.25,-60,60),s.view.pitch=bt(Le.v.pitch+v*.2,-20,35)),J==="light"){let ae=d.pose.d||300;s.orb.light.x=bt(Le.ol.x+u/ae*1.6,-.6,.6),s.orb.light.y=bt(Le.ol.y-v/ae*1.6,-.8,.6),tt("orb.light.x"),tt("orb.light.y")}K()}Le.lx=b.clientX,Le.ly=b.clientY});let $t=1,nt=1/0,we={want:NaN,shown:NaN};function ze(b){s.zoom=Qo($t,b,nt).zoom,ne()}let Me=()=>{Le&&(Le=null,Ae.classList.remove("grab"),ee(),H())};Ae.addEventListener("pointerup",Me),Ae.addEventListener("pointercancel",Me),Ae.addEventListener("wheel",b=>{s.family==="orb"&&(b.preventDefault(),ze(s.zoom*Math.exp(-b.deltaY*.0015)),clearTimeout(Ae._t),Ae._t=setTimeout(le,300))},{passive:!1}),t.querySelectorAll("[data-zo]").forEach(b=>b.addEventListener("click",()=>{let u=+b.dataset.zo;ze(u?s.zoom*(u>0?1.25:.8):1),u||he.resetView(),le(),a.sfx("press")})),Ae.addEventListener("keydown",b=>{let u={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[b.key];if(u){if(b.preventDefault(),s.family==="orb"){w==="light"?(s.sph.light.angle=bt(s.sph.light.angle+u[0]*5,-180,180),s.sph.light.height=bt(s.sph.light.height-u[1]*5,-30,90),K(),Fe(),ee()):w==="zoom"?ze(s.zoom*(u[1]<0?1.1:u[1]>0?.9:1)):he.rotate(u[0]*12,u[1]*12);return}w==="orbit"&&(s.view.yaw=bt(s.view.yaw-u[0]*5,-60,60),s.view.pitch=bt(s.view.pitch+u[1]*3,-20,35)),w==="light"&&(s.orb.light.x=bt(s.orb.light.x+u[0]*.05,-.6,.6),s.orb.light.y=bt(s.orb.light.y-u[1]*.05,-.8,.6)),K(),Fe(),ee()}});let Ft=b=>b&&(b.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(b.tagName))&&!(b.type==="range"||b.type==="color");function Wt(b){if(!O.hidden){b.key==="Escape"&&ta();return}let u=b.metaKey||b.ctrlKey,v=b.key.toLowerCase();if(u&&v==="s"){b.preventDefault(),Jt();return}if(u&&v==="e"){b.preventDefault(),ua();return}if(!Ft(b.target)){if(u&&v==="z"){b.preventDefault(),Ye(b.shiftKey?1:-1);return}if(u&&v==="y"){b.preventDefault(),Ye(1);return}if(!(u||b.altKey)){if(b.key===" "){De||(De=!0,Ae.classList.add("t-orbit"),N.style.pointerEvents="none"),(b.target===document.body||Ae.contains(b.target))&&b.preventDefault();return}v==="v"?ot("orbit"):v==="l"&&(s.family==="orb"||s.family==="orb-slider")?ot("light"):v==="z"&&s.family==="orb"?ot("zoom"):v==="r"&&(ze(1),he.resetView(),s.family!=="orb"&&(s.view={yaw:0,pitch:0,zoom:1},K(),ee()),ne(),le())}}}function Ot(b){b.key===" "&&(De=!1,ot(w))}document.addEventListener("keydown",Wt),document.addEventListener("keyup",Ot);let ft=t.querySelector("[data-scap]"),vt=null;ft.addEventListener("pointerdown",b=>{b.stopPropagation(),vt={x:b.clientX,v:ke},ft.setPointerCapture(b.pointerId),a.sfx("press")}),ft.addEventListener("pointermove",b=>{vt&&(ke=bt(vt.v+(b.clientX-vt.x)/(ft.offsetWidth-ft.offsetHeight)))});let Gt=()=>{vt&&(vt=null,a.sfx("release"),f.nudge(.5),ke>.92?(ke=1,a.sfx("confirm")):ke=0)};ft.addEventListener("pointerup",Gt),ft.addEventListener("pointercancel",Gt),ft.addEventListener("keydown",b=>{b.key==="ArrowRight"&&(ke=bt(ke+.1)),b.key==="ArrowLeft"&&(ke=bt(ke-.1))});function be(){let b=t.querySelector("[data-screen]"),u=b.getBoundingClientRect();kt.impact(u.width/2,u.height*(1-.3)+10,s.wave.strength),f.nudge(.8),a.sfx("detent")}t.querySelector("[data-screen]").addEventListener("pointerdown",b=>{if(s.family!=="orb-wave")return;let u=b.currentTarget.getBoundingClientRect();kt.impact(b.clientX-u.left,b.clientY-u.top,s.wave.strength),a.sfx("detent")});function ut(b){let{designId:u,designName:v,zoom:J,...ae}=b;return ae}async function yt(){try{if(s.family==="orb"&&he.canvas){let v=he.canvas,J=Math.min(v.width,v.height),ae=document.createElement("canvas");ae.width=ae.height=240;let Ce=ae.getContext("2d");return Ce.fillStyle="#0b0c0c",Ce.fillRect(0,0,240,240),Ce.drawImage(v,(v.width-J)/2,(v.height-J)/2,J,J,0,0,240,240),ae.toDataURL("image/jpeg",.8)}let b=Et(),u=await e.exportPNG(b,d.element||document.createElement("div"));if(u){let v=await createImageBitmap(u),J=document.createElement("canvas"),ae=360;return J.width=ae,J.height=Math.round(ae*b.h/b.w),J.getContext("2d").drawImage(v,0,0,J.width,J.height),J.toDataURL("image/jpeg",.78)}}catch{}return null}async function Jt(b=!1){let u=sa(s.family),v=!b&&s.designId||Date.now().toString(36),J=b&&s.designId?`${ge()} copy`.slice(0,48):ge(),ae=await yt();p.saveDesign({id:v,name:J,family:s.family,familyName:u.name,preset:s.preset,schema:1,at:new Date().toISOString(),draft:ut(s),thumb:ae})?(s.designId=v,s.designName=J,M=JSON.stringify(ut(s)),le(),a.sfx("confirm"),o("Saved to My designs (on this device)."),Ee(),z==="designs"&&Fe()):o("Could not save: this browser\u2019s storage is full or unavailable.")}let Yt=()=>({...s.sph,variant:s.preset}),qa=()=>_i(Yt(),lr(s.preset));function pa(b=md){let u=qa(),v=360;return`<div data-light-orb data-variant="${s.preset}"${u==="e30"?"":` data-config="${u}"`} style="width:${v}px;height:${v}px"></div>
<script type="module" src="${b}"><\/script>`}function wa(){let b=s.sph.scene,u=b.background==="none"?"#0b0c0c":b.colour;return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${Ct(ge())} \xB7 The Light Orb</title>
<style>
  html,body{margin:0;height:100%;background:${u}}
  body{display:grid;place-items:center}
  [data-light-orb]{width:min(82vmin,560px)!important;height:min(82vmin,560px)!important}
</style>
</head>
<body>
${pa()}
</body>
</html>
`}function Nt(){return s.family==="orb"?JSON.stringify({product:"orb",schema:1,name:ge(),variant:s.preset,config:Yt(),changed:Hi(lr(s.preset),Yt()),embed:{attribute:"data-config",value:qa()}},null,2):JSON.stringify({schema:1,product:s.family,name:ge(),config:s[{"orb-slider":"slider","orb-wave":"wave","background-pack":"bg","crystal-controls":"ctl"}[s.family]],scene:s.scene,note:"Configuration for The Light Orb renderer. Development export; not a licensed product package."},null,2)}let it="embed",zt=()=>ge().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"light-orb";function ua(){s.family!=="orb"&&(it="json"),aa(),O.hidden=!1,a.sfx("open"),O.querySelector("[data-xtab][aria-selected=true]")?.focus()}function ta(){O.hidden=!0,a.sfx("close"),Ae.focus({preventScroll:!0})}function aa(){let b=s.family==="orb",u=b?[["embed","Embed code"],["html","HTML page"],["json","JSON"]]:[["json","JSON"]],v={embed:[pa(),"Paste into any page. The data-config attribute holds your design (only what differs from the version), so it looks and moves exactly like this.",[["copy","Copy code","pri"],["dlsnip","Download snippet"]]],html:[wa(),"A complete page with your Orb, ready to open or upload.",[["dlhtml","Download .html","pri"],["copy","Copy"]]],json:[Nt(),b?"The full configuration. The embed accepts it as data-config too (plain JSON or base64).":"The configuration of this object.",[["dljson","Download .json","pri"],["copy","Copy"]]]}[it];O.innerHTML=`<div class="sx-dlg" role="dialog" aria-modal="true" aria-labelledby="sx-xt">
      <div class="sx-dh"><h2 id="sx-xt">Export \xB7 ${Ct(ge())}</h2><button class="sx-ib" type="button" data-xclose aria-label="Close">${Rt("close")}</button></div>
      <div class="sx-tabs" role="tablist">${u.map(([ae,Ce])=>`<button class="sx-tab" role="tab" type="button" data-xtab="${ae}" aria-selected="${ae===it}">${Ce}</button>`).join("")}</div>
      <div class="sx-db"><p>${v[1]}</p><textarea class="sx-code" readonly spellcheck="false" aria-label="Code">${Ct(v[0])}</textarea>
        <div class="sx-acts">${v[2].map(([ae,Ce,Xe])=>`<button class="sx-tb${Xe?" "+Xe:""}" type="button" data-xa="${ae}">${Ce}</button>`).join("")}${b?'<button class="sx-tb" type="button" data-xa="png">Download PNG</button>':""}</div></div></div>`,O.querySelector("[data-xclose]").addEventListener("click",ta),O.onclick=ae=>{ae.target===O&&ta()},O.querySelectorAll("[data-xtab]").forEach(ae=>ae.addEventListener("click",()=>{it=ae.dataset.xtab,a.sfx("press"),aa(),O.querySelector(`[data-xtab="${it}"]`).focus()}));let J=v[0];O.querySelectorAll("[data-xa]").forEach(ae=>ae.addEventListener("click",async()=>{let Ce=ae.dataset.xa;if(Ce==="copy"){let Xe=!1;try{await navigator.clipboard.writeText(J),Xe=!0}catch{O.querySelector("textarea").select(),Xe=document.execCommand?.("copy")}ae.textContent=Xe?"Copied":"Select and copy",a.sfx("confirm"),setTimeout(()=>{ae.textContent=Ce==="copy"&&it==="embed"?"Copy code":"Copy"},1600)}Ce==="dlsnip"&&Ht(new Blob([J],{type:"text/plain"}),`${zt()}-embed.txt`),Ce==="dlhtml"&&Ht(new Blob([J],{type:"text/html"}),`${zt()}.html`),Ce==="dljson"&&Ht(new Blob([J],{type:"application/json"}),`${zt()}.json`),Ce==="png"&&ga()}))}async function ga(){if(s.family==="orb"&&he.canvas){he.canvas.toBlob(b=>{b&&(Ht(b,`${zt()}.png`),o("Downloaded a PNG of the Orb."))});return}if(d.element){let b=await e.exportPNG(Et(),d.element);b&&Ht(b,`${zt()}.png`)}}function Ht(b,u){let v=document.createElement("a");v.href=URL.createObjectURL(b),v.download=u,document.body.append(v),v.click(),setTimeout(()=>{URL.revokeObjectURL(v.href),v.remove()},1e3),a.sfx("confirm")}function Et(){let b=Ae.getBoundingClientRect();return{x:b.left,y:b.top,w:b.width,h:b.height}}function ka(){let b=document.querySelector(".hd"),u=b?Math.round(b.getBoundingClientRect().bottom):72;se._hh!==u&&(se._hh=u,se.style.setProperty("--sx-top",`${Math.max(0,u)}px`));let v=Et(),J=s.family,ae=v.x+v.w/2,Ce=t.querySelector("[data-screen]"),Xe=t.querySelector("[data-scap]"),jt=t.querySelector("[data-kit]"),wt=innerHeight,ra={warm:0,room:"chamber",stage:v,emission:1,orb:{x:50,y:wt-52,d:46,vis:0}},Tt=Ue=>({...ra,product:Ue,grounds:Ue&&Ue.ground?[{y:Ue.ground,x:Ue.x,d:Ue.d}]:[]});if(J==="orb"){let Ue=Math.min(v.w-48,v.h-48)*.74,lt=Yr=>{let Aa=Yr?.getBoundingClientRect();return Aa&&Aa.width>0&&Aa.height>0?{l:Aa.left,t:Aa.top,r:Aa.right,b:Aa.bottom}:null},ht=[je,t.querySelector("[data-zoombar]"),Y,R,m,de].map(lt).filter(Boolean),Se=gd({l:v.x,t:v.y,r:v.x+v.w,b:v.y+v.h},ht,innerWidth<=820?16:24,pd(s.sph.scene.size)),at=v.w>80&&v.h>80,It=at?hd(we,s.zoom,Ue,Se):Qo(Ue,s.zoom,Se);at&&($t=Ue,nt=Se,It.zoom!==s.zoom&&(s.zoom=It.zoom,ne()));let Sa=Math.floor(It.size);if(N._s!==Sa&&(N._s=Sa,N.style.width=N.style.height=`${Sa}px`),he.setSpeech(a.playing?a.energy():0),!g())return Tt(null);let $a=performance.now()/1e3,Wr=$e?Math.min(.05,$a-$e):0;$e=$a,Le||(fe+=(s.sph.motion.spin??0)*Math.PI*2*Wr*.25,f.setObjectYaw(fe));let Ua=N.getBoundingClientRect();return Tt({x:Ua.left+Ua.width/2,y:Ua.top+Ua.height/2,d:Ua.width*.9*(s.sph.scene.size??1),vis:1,snap:!0})}if(J==="orb-slider"){let Ue=s.slider,lt=Math.min(1,(v.w-40)/Ue.length),ht=Ue.length*lt,Se=Ue.height*lt;Object.assign(Xe.style,{left:`${ae-ht/2}px`,top:`${v.y+v.h*.5-Se/2}px`,width:`${ht}px`,height:`${Se}px`});let at=Se*.84,It=(Se-at)/2;return Tt({x:ae-ht/2+It+at/2+ke*(ht-Se),y:v.y+v.h*.5,d:at,vis:1,snap:!0})}if(J==="orb-wave"||J==="background-pack"){let Ue=Math.min(v.w*.86,900),lt=Math.min(v.h*.72,Ue*.62);Object.assign(Ce.style,{left:`${ae-Ue/2}px`,top:`${v.y+v.h*.5-lt/2}px`,width:`${Ue}px`,height:`${lt}px`});let ht=J==="background-pack"?s.bg.horizon:.3,Se=Math.min(90,Ue*.12),at=lt*(1-ht)+Se*.1-Se/2;return kt.setOrb({x:Ue/2,y:at,d:Se}),Tt({x:ae,y:v.y+v.h*.5-lt/2+at,d:Se,vis:1})}return J==="crystal-controls"&&Object.assign(jt.style,{left:`${v.x+20}px`,top:`${v.y+20}px`,width:`${v.w-40}px`,height:`${v.h-40}px`}),Tt(null)}return ie(),{frame:ka,reapply:()=>K(),voiceResponse:()=>s.family==="orb"?bt(s.sph.motion.speech*.6):.6,leave(){V(),L(),document.removeEventListener("keydown",Wt),document.removeEventListener("keyup",Ot),he.dispose(),Or(),e.removeBackdrop(kt.canvas),document.body.classList.remove("dark-ui","sx-on"),d.hide(),Object.assign(e.chamber,{yaw:0,pitch:0})},get draft(){return s}}}function xr(e,a){let i=parseInt(e.slice(1),16);return`rgba(${i>>16&255},${i>>8&255},${i&255},${a.toFixed(3)})`}function Xn(e){let a=null,i=null,t=null,l={},c={emission:1},o=document.createElement("div");o.className="x-product",o.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:31",document.body.append(o);let d={x:-999,y:-999,d:100,vis:0},p={x:-999,y:-999,d:100,vis:0,vx:0,vy:0,vd:0},f=!0,g=!1,h=M=>{M.persisted||P()};addEventListener("pagehide",h);function P(){g||(g=!0,f=!0,removeEventListener("pagehide",h),a?.dispose(),a=null,t=null,l={},o.remove())}function X(){return g||a||i||(i=Oi({container:o,diameter:240,driven:!0,background:ma().orbBackground}).then(M=>{if(g){M.dispose(),i=null;return}return a=M,i=null,M.attachPointer(document.createElement("div"))(),M.setBackdrop((T,B)=>e.drawBackdrop(T,B,p)),M.setVisibility(0),M.tick(performance.now()),t&&s(),M}).catch(()=>{i=null})),i}function s(){a&&t&&(c=ro(a,t,l),a.setEmission(Math.min(1.4,c.emission)))}return{dispose:P,get orb(){return a},get element(){return a?.element},get output(){return c},show(M,T={}){g||(t=Ut(M),l=T,f=!1,X(),s())},update(M,T=l){g||(t=Ut(M),l=T,s())},reapply(){g||s()},hide(){f=!0,a&&(a.setVisibility(0),a.setView({yaw:0,pitch:0}),a.setObjectYaw(0),a.setSpeech(0),a.tick(performance.now())),p.vis=0,p.x=-999},attachPointer(M){return a?a.attachPointer(M,{range:"volume"}):(X()?.then(T=>T?.attachPointer(M,{range:"volume"})),null)},frame(M){if(!a)return;if(!M||f){(p.vis>0||a.element.style.visibility!=="hidden")&&(p.vis=0,a.setVisibility(0),a.tick(performance.now()));return}let T=1/60,B=9;if(M.snap||p.x<-900)Object.assign(p,{x:M.x,y:M.y,d:M.d,vx:0,vy:0,vd:0});else for(let I of["x","y","d"]){let q="v"+I;p[q]+=(B*B*(M[I]-p[I])-2*B*p[q])*T,p[I]+=p[q]*T}p.vis+=((M.vis??1)-p.vis)*.2,a.holdRaster(Math.ceil(Math.max(p.d,M.d,120)*1.06)),a.setPose({x:p.x,y:p.y,diameter:p.d}),a.setVisibility(p.vis),a.tick(performance.now())},pose:p}}var Zo=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null,ti=!!Zo;function Kn({onresult:e,onend:a,onerror:i,lang:t}){if(!Zo)return i?.("unsupported"),null;let l=new Zo;l.lang=t||navigator.language||"en-US",l.interimResults=!0,l.maxAlternatives=1,l.continuous=!1;let c="",o="";l.onresult=d=>{o=[...d.results].map(p=>p[0].transcript).join(" "),d.results[d.results.length-1].isFinal&&(c=o),e?.(o,!!c)},l.onerror=d=>i?.(d.error),l.onend=()=>a?.(c||o);try{l.start()}catch{return i?.("busy"),null}return l}var ei=e=>String(e).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),Ta=(e,...a)=>a.some(i=>new RegExp(`\\b${i}\\b`).test(e)),$d={home:["home","start","beginning","inicio","principio","portada"],products:[...Fa[0].words,"productos","producto","tienda","objetos"],templates:[...Fa[1].words,"plantillas","plantilla","composiciones"],studio:[...Fa[2].words,"estudio","editar","personalizar","disenar"],sound:[...Fa[3].words,"sonido","sonidos","voces","escuchar","audio"],membership:["membership","member","plans","plan","pricing","price","prices","membresia","miembro","planes","precio","precios","cuesta","cost"],account:["account","profile","downloads","cuenta","perfil","descargas"],signin:["sign in","log in","login","iniciar sesion","entrar"]},Ed={home:"#/",membership:"#/membership",account:"#/account",signin:"#/signin"},Ld={"orb-slider":["slider","deslizador"],"orb-wave":["wave","ola","onda","ripple"],"background-pack":["background","backgrounds","fondo","fondos"],"crystal-controls":["controls","buttons","controles","botones","crystal"]},da=(e,a={})=>({say:e.text,id:e.id,lang:e.lang??"en",...a}),Td=/\b(hola|gracias|buenas|ayuda|ayudame|quien|que|como|donde|cual|quiero|puedes|llevame|ensename|muestrame|recomiendas|recomienda|textura|texturas|materiales|precio|cuanto|plantillas|productos|sonido|estudio|por favor|si|vale|el|la|los|las|una|para|con|del|mi|me)\b/g,Md=/\b(hello|hi|hey|thanks|thank|help|who|what|which|how|where|want|can|could|show|take|recommend|texture|textures|materials|price|the|a|an|is|are|you|me|my|please|yes|for|with|of)\b/g;function ho(e,a="en"){if(/[ñ¿¡]/i.test(String(e)))return"es";let i=ei(e),t=i.match(Td)?.length??0,l=i.match(Md)?.length??0;return t>l?"es":l>t?"en":a}function Jn(e,{here:a,presentation:i,lang:t="en"}){let l=ei(e),c=ho(e,t),o=p=>pr(p,c);if(!l)return da(o("reply.missed"),{intent:"fallback"});if(l.split(" ").length<=3&&Ta(l,"stop","quiet","silence","shh","para","calla","callate","silencio","basta"))return{say:"",stop:!0,command:!0};if(Ta(l,"where am i","where are we","donde estoy","donde estamos","que es esto","what is this","what is here","que hay aqui"))return da(i(c),{intent:"where"});if(Ta(l,"help","what can you do","what can i do","ayuda","ayudame","que puedes hacer","que puedo hacer"))return da(o("reply.help"),{intent:"help"});if(Ta(l,"thank you","thanks","gracias"))return da(o("reply.thanks"),{intent:"thanks"});if(Ta(l,"who are you","what are you","quien eres","que eres","como te llamas","your name"))return da(o("reply.who"),{intent:"who"});if(Ta(l,"back","go back","atras","volver","vuelve"))return da(o("reply.back"),{back:!0,command:!0});for(let[p,f]of Object.entries(Ld))if(Ta(l,...f)){let g=na.find(h=>h.id===p&&h.published!==!1);if(g)return da(sn(g),{go:`#/products/${p}`,quiet:!0,command:!0})}let d=Lt.find(p=>l.includes(ei(p.name)));if(d)return da(ln(d),{go:`#/templates/${d.id}`,quiet:!0,command:!0});for(let[p,f]of Object.entries($d))if(Ta(l,...f)){if(p===a){let g=i(c);return da(c==="es"?{text:`Ya estamos aqu\xED. ${g.text}`,lang:"es"}:nn(g),{command:!0})}return{go:Ed[p]??`#/${p}`,command:!0}}return l.split(" ").length<=5&&Ta(l,"hello","hi","hey","hola","buenas","buenos dias","buenas tardes","buenas noches","good morning","good evening")?da(o("reply.intro"),{intent:"hello"}):Ta(l,"the orb","orb","esfera","la orb","bola")?da(c==="es"?{text:"Aqu\xED est\xE1 la Orb. Prueba sus veinte versiones.",lang:"es"}:dn(),{go:`#/products/${na[0].id}`,quiet:!0}):da(o("reply.unknown"),{intent:"fallback"})}var Qn=()=>!!Xr,qd=/^#\/(products(\/[a-z0-9-]+(\?variant=[a-z0-9-]+)?)?|templates(\/[a-z0-9-]+)?|studio|sound|membership|account|licence)?$/;async function Zn(e,a,{timeout:i=8e3}={}){if(!Xr)throw new Error("disabled");let t=new AbortController,l=setTimeout(()=>t.abort(),i);try{let c=await fetch(Xr,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({messages:e,page:a}),signal:t.signal});if(!c.ok)throw new Error(`http ${c.status}`);let o=await c.json(),d=typeof o.say=="string"?o.say.trim().slice(0,600):"";if(!d)throw new Error("empty");return{say:d,go:typeof o.go=="string"&&qd.test(o.go)?o.go:void 0}}finally{clearTimeout(l)}}var es={},ts={member:""},as="",rs=e=>"",ai=e=>(location.assign(e),!0),xa={get enabled(){return!1},canCheckout:e=>!!e.length&&e.every(a=>rs(a.id)),canSubscribe:e=>!!!1,canRestore:()=>!!!1,checkout(e){return xa.canCheckout(e)?(ai(rs(e[0].id)),e[0].id):null},subscribe(e){return xa.canSubscribe(e)?ai(ts[e]):!1},restore(){return xa.canRestore()?ai(as):!1}};var Vt={saved:"lightorb:saved",designs:"lightorb:designs",profile:"lightorb:profile"},Oa=(e,a)=>{try{return JSON.parse(localStorage.getItem(e))??a}catch{return a}},Ir=(e,a)=>{try{return localStorage.setItem(e,JSON.stringify(a)),!0}catch{return!1}},xt={saved:()=>Oa(Vt.saved,[]),isSaved:(e,a)=>Oa(Vt.saved,[]).some(i=>i.type===e&&i.id===a),toggleSaved(e,a,i,t){let l=Oa(Vt.saved,[]),c=l.findIndex(o=>o.type===e&&o.id===a);return c>=0?l.splice(c,1):l.unshift({type:e,id:a,name:i,href:t,at:new Date().toISOString()}),Ir(Vt.saved,l),c<0},designs:()=>Oa(Vt.designs,[]),design:e=>Oa(Vt.designs,[]).find(a=>a.id===e),saveDesign(e){let a=Oa(Vt.designs,[]),i=a.findIndex(t=>t.id===e.id);return i>=0?a[i]=e:a.unshift(e),Ir(Vt.designs,a.slice(0,40))},renameDesign(e,a){let i=Oa(Vt.designs,[]),t=i.find(l=>l.id===e);t&&(t.name=a,Ir(Vt.designs,i))},deleteDesign(e){Ir(Vt.designs,Oa(Vt.designs,[]).filter(a=>a.id!==e))},profile:()=>Oa(Vt.profile,null),setProfile:e=>Ir(Vt.profile,e)},os=[["profile","Profile"],["designs","My Designs"],["saved","Saved"],["downloads","Downloads"]],Ad='<p class="note">Your designs and saved items are kept in this browser. Accounts that sync across devices come later; your early-access email will carry over.</p>';function Qa(e,a,i="profile"){let{esc:t,audio:l}=a;os.some(d=>d[0]===i)||(i="profile");let c=xt.profile();e.innerHTML=`
    <section class="dest acct">
      <header class="dh"><p class="kicker">Account${c?.email?" \xB7 Early access":""}</p><h1>${c?.name?t(c.name):"Your space"}</h1>${Ad}</header>
      <nav class="segbar acct-tabs" aria-label="Account">${os.map(([d,p])=>`<a class="pill" href="#/account/${d}" ${d===i?'aria-current="page" aria-pressed="true"':""}>${p}</a>`).join("")}</nav>
      <div class="acct-body" data-body></div>
      ${Mr()}
    </section>${a.footer()}`;let o=e.querySelector("[data-body]");if(i==="profile"){let d=c?.email;o.innerHTML=`${d?"":`<div class="joincta glass"><h2>Join early access</h2><p>Free. Leave your email and we tell you when new pieces and Studio updates open. Your designs stay on this device either way.</p>
        <div class="acts eq"><a class="gb small primary" href="#/signup">Join early access</a><a class="gb small" href="#/signin">I already joined</a></div></div>`}
      <form class="form" data-prof>
        <label class="fl"><span>Display name</span><input class="gi" name="name" value="${t(c?.name||"")}" placeholder="How the site greets you" maxlength="40" autocomplete="name"></label>
        <div class="acts"><button class="gb primary" type="submit">Save on this device</button>${c?'<button class="gb" type="button" data-forget>Sign out on this device</button>':""}</div>
        <p class="note" data-profmsg role="status" aria-live="polite"></p>
      </form>
      <div class="kv"><span>Email</span><b>${d?t(c.email):"Not joined yet"}</b>${c?.joined?`<span>Joined</span><b>${new Date(c.joined).toLocaleDateString()}</b>`:""}<span>Plan</span><b>${"Early access \xB7 free"}</b><span>Sound</span><b>${l.prefs.master?"On":"Off"}</b><span>Narration</span><b>${l.prefs.guide?"On":"Off"}</b><span>Guide voice</span><b><a href="#/sound">${t(La(l.prefs.voice).name)}</a></b></div>`,o.querySelector("[data-prof]").addEventListener("submit",p=>{p.preventDefault();let f=p.target.name.value.trim(),g={...xt.profile()??{},name:f};f||delete g.name,xt.setProfile(Object.keys(g).length?g:null),l.sfx("confirm"),Qa(e,a,"profile"),e.querySelector("[data-profmsg]").textContent="Saved on this device."}),o.querySelector("[data-prof] .gi").addEventListener("input",p=>{p.isTrusted&&l.sfx("type")}),o.querySelector("[data-forget]")?.addEventListener("click",()=>{if(confirm("Forget your name and email on this browser? Your designs and saved items stay.")){try{localStorage.removeItem(Vt.profile)}catch{}Qa(e,a,"profile")}})}if(i==="designs"){let d=xt.designs();o.innerHTML=d.length?`<div class="dgrid">${d.map(p=>`<article class="dc" data-d="${p.id}">
        <a class="dc-img" href="#/studio?design=${p.id}" aria-label="Open ${t(p.name)} in Studio">${p.thumb?`<img src="${p.thumb}" alt="">`:""}</a>
        <input class="dc-n gi" value="${t(p.name)}" aria-label="Design name" maxlength="48">
        <p class="note">${t(p.familyName)} \xB7 ${new Date(p.at).toLocaleDateString()}</p>
        <div class="acts"><a class="gb small primary" href="#/studio?design=${p.id}">Open in Studio</a><button class="gb small" type="button" data-dup>Duplicate</button><button class="gb small" type="button" data-del>Delete</button></div></article>`).join("")}</div>`:'<div class="empty"><h2>No designs yet</h2><p>Designs you save in Studio appear here, with a picture of each one.</p><a class="gb primary" href="#/products">Browse products</a></div>',o.querySelectorAll("[data-d]").forEach(p=>{let f=p.dataset.d,g=p.querySelector(".dc-n");g.addEventListener("change",()=>{xt.renameDesign(f,g.value.trim()||"Untitled design"),l.sfx("confirm")}),g.addEventListener("input",h=>{h.isTrusted&&l.sfx("type")}),p.querySelector("[data-dup]").addEventListener("click",()=>{let h=xt.designs().find(X=>X.id===f);if(!h)return;if(xt.designs().length>=40){let X=p.querySelector("[data-dup]");X.textContent="Limit of 40 \u2014 delete one first",X.disabled=!0;return}let P={...structuredClone(h),id:Date.now().toString(36),name:`${h.name} copy`.slice(0,48),at:new Date().toISOString()};xt.saveDesign(P)&&(l.sfx("confirm"),Qa(e,a,"designs"))}),p.querySelector("[data-del]").addEventListener("click",()=>{confirm(`Delete \u201C${g.value}\u201D? This cannot be undone.`)&&(xt.deleteDesign(f),l.sfx("close"),Qa(e,a,"designs"))})})}if(i==="saved"){let d=xt.saved();o.innerHTML=d.length?`<ul class="slist">${d.map((p,f)=>`<li><span class="kicker">${p.type}</span><a href="${p.href}">${t(p.name)}</a><button class="pill" type="button" data-rm="${f}">Remove</button></li>`).join("")}</ul>`:'<div class="empty"><h2>Nothing saved yet</h2><p>Save products, templates and sounds to find them here.</p><a class="gb primary" href="#/products">Explore products</a></div>',o.querySelectorAll("[data-rm]").forEach(p=>p.addEventListener("click",()=>{let f=d[+p.dataset.rm];xt.toggleSaved(f.type,f.id),l.sfx("close"),Qa(e,a,"saved")}))}i==="downloads"&&(o.innerHTML=_t?'<div class="empty"><h2>Nothing to buy right now</h2><p>During early access there is nothing to buy: explore every piece and request a piece\u2019s source code from its page.</p><div class="acts eq"><a class="gb primary" href="#/products">Browse products</a><a class="gb" href="#/studio">Studio \xB7 coming soon</a></div></div>':'<div class="empty"><h2>Everything is free right now</h2><p>During early access there is nothing to buy: take The Orb with its embed code from its product page.</p><div class="acts eq"><a class="gb primary" href="#/products">Browse products</a><a class="gb" href="#/studio">Studio \xB7 coming soon</a></div></div>',o.querySelector("[data-restore]")?.addEventListener("click",()=>xa.restore()))}function ri(e,a,i){let t=i==="up",l=xt.profile();e.innerHTML=`
    <section class="dest sign">
      <header class="dh"><p class="kicker">Early access \xB7 free</p><h1>${t?"Join early access":"Welcome back"}</h1>
        <p class="dh-l">${t?"Everything is free while we build it. Leave your email and we write when new pieces and Studio updates open. Your designs are saved on this device.":"There are no passwords yet. Enter the email you joined with to use it on this device; your designs from another browser stay there until accounts sync."}</p></header>
      ${l?.email?`<div class="joined glass"><p class="kicker">Already in</p><h2>You joined as ${a.esc(l.email)}</h2><div class="acts eq"><a class="gb small primary" href="#/products">Browse products</a><a class="gb small" href="#/account">Your account</a></div></div>`:""}
      <form class="form" data-sign novalidate${l?.email?" hidden":""}>
        ${t?'<label class="fl"><span>Name <i class="opt">(optional)</i></span><input class="gi" name="name" autocomplete="name" maxlength="40" placeholder="How the site greets you"></label>':""}
        <label class="fl"><span>Email</span><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"></label>
        <div class="acts"><button class="gb primary" type="submit"><span>${t?"Join early access":"Continue"}</span></button><a class="gb" href="#/products">Browse products without joining</a></div>
        <p class="note" data-signmsg role="status" aria-live="polite">We only keep your email${t?" and name":""} to tell you about new pieces and Studio updates. See <a href="#/privacy">privacy</a>; leave any time.</p>
        <p class="note">${t?'Already joined? <a href="#/signin">Use your email here</a>':'New here? <a href="#/signup">Join early access</a>'}</p>
      </form>
      ${Mr()}
    </section>${a.footer()}`;let c=e.querySelector("[data-sign]");c.addEventListener("submit",async o=>{o.preventDefault();let d=c.querySelector("[data-signmsg]"),p=c.querySelector("button[type=submit]"),f=c.email.value.trim();if(!ba(f)){d.textContent="Please enter a valid email address.",c.email.focus();return}p.disabled=!0,p.setAttribute("aria-busy","true");let g=await Fo({email:f,name:c.name?.value,source:"signup"});if(!g.ok){d.textContent=g.error,p.disabled=!1,p.removeAttribute("aria-busy");return}a.audio.sfx("confirm");let h=document.createElement("div");h.innerHTML=No(f);let P=h.firstElementChild;c.replaceWith(P),P.focus({preventScroll:!0})})}function is(e,a){let i=Ui,t=xt.profile(),l=i.plans.map(c=>`<article class="plan soon"><p class="kicker">After launch \xB7 preview</p><h2>${c.name}</h2><p>${c.line}</p><ul>${c.points.map(o=>`<li>${o}</li>`).join("")}</ul></article>`).join("");e.innerHTML=`
    <section class="dest memb">
      ${_t?'<header class="dh"><p class="kicker">Membership</p><h1>Free to explore, while it takes shape</h1><p class="dh-l">The pieces are open to try while The Light Orb is being built. Source code is available on request, piece by piece. Membership is not open yet.</p></header>':'<header class="dh"><p class="kicker">Membership</p><h1>Early access is free</h1><p class="dh-l">Everything is open while we build it: Studio, The Orb with its embed code, and each piece as it arrives. What you take now stays free to use. Paid plans come later.</p></header>'}
      <div class="memb-sl glass">${Cr()}</div>
      ${_t?`<article class="plan em now"><p class="kicker">Current plan</p><h2>Early access</h2><p>Everything on the site is open to explore, for everyone.</p>
        <ul><li>Studio: coming soon \u2014 join its list above</li><li>The Orb in twenty versions</li><li>New pieces as they open</li><li>Source code on request, piece by piece</li></ul>`:`<article class="plan em now"><p class="kicker">Current plan</p><h2>Early access \u2014 free</h2><p>Everything on the site, for everyone.</p>
        <ul><li>Studio: coming soon \u2014 join its list above</li><li>The Orb in twenty versions, with its embed code</li><li>New pieces as they open, free while in early access</li></ul>`}
        <div class="acts eq">${t?.email?'<span class="pill" aria-disabled="true">You\u2019re in</span>':'<a class="gb primary" href="#/signup">Join early access</a>'}<a class="gb" href="#/studio">Studio \xB7 coming soon</a></div></article>
      <h2 class="plans-h">Plans after launch</h2><p class="note plans-n">A preview of how The Light Orb will work after early access. Prices are not set yet.</p>
      <div class="plans">${l}</div>
      ${Mr()}
    </section>${a.footer()}`,e.querySelectorAll("[data-join]").forEach(c=>c.addEventListener("click",()=>xa.subscribe(c.dataset.join))),mr(e,{sfx:c=>a.audio?.sfx?.(c)})}var Cd=`<svg class="wm-o" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><defs><mask id="wm-counter"><rect width="100" height="100" fill="#fff"/>
  <path fill="#000" d="M49 9C31 9 23 29 23 50c0 24 12 42 30 42 15 0 23-9 23-20 0-9-7-12-11-21-4-9-2-19 0-27 1-9-5-15-16-15z"/></mask></defs>
  <circle cx="50" cy="50" r="46" fill="currentColor" mask="url(#wm-counter)"/></svg>`,Pr=`<span class="wm-t">The Light</span>${Cd}<span class="wm-t wm-rb">rb</span>`;var _a=Math.min(2,window.devicePixelRatio||1),ds=matchMedia("(prefers-reduced-motion: reduce)").matches,mt=(e,a,i)=>e<a?a:e>i?i:e,va=Math.random,Wa=null,cs=e=>{Wa=e},Rr=(e,a=.5)=>{bo&&Wa&&Wa.sfx(e,Number.isFinite(a)?a:.5)},Za={squish(e){Rr(e>.45?"level":"detent",mt(e,0,1))},glass(){Rr("select")},twang(e){Rr("level",mt(e/160,0,1))},thunk(e){Rr("detent",mt(1/e,0,1))}},Dr=new Set,fo=()=>document.documentElement.dataset.theme==="dark";new MutationObserver(()=>Dr.forEach(e=>e.retheme?.())).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});var oi=0,ii=0,bo=!1,ns=0,jd=matchMedia("(pointer: coarse)").matches,ps=-1e9;addEventListener("scroll",()=>{ps=performance.now()},{capture:!0,passive:!0});function us(e){let a=Math.min(.033,(e-ii)/1e3);ii=e;let i=e/1e3,t=e-ps<140;if(!document.hidden){ns++;let l=0;for(let c of Dr)if(c.vis&&(!bo||c.detail)){if(!c.detail&&t){c.acc=Math.min(.1,(c.acc||0)+a);continue}if(!c.detail&&jd&&(l+++ns)%2){c.acc=(c.acc||0)+a;continue}c.step(a+(c.detail?0:c.acc||0),i),c.acc=0}}oi=Dr.size?requestAnimationFrame(us):0}function Od(e,a,i={}){let t=a(e,i);t.cv=e,t.vis=!1,t.lastUser=-1e9,t.detail=!!i.detail,t.autoOn=o=>i.auto!==!1&&!ds&&o-t.lastUser>2400,t.io=new IntersectionObserver(o=>o.forEach(d=>t.vis=d.isIntersecting),{rootMargin:"80px"}),t.io.observe(e),t.ro=new ResizeObserver(()=>{let o=e.getBoundingClientRect();o.width>2&&o.height>2&&(t.resize(o.width,o.height),t.step(0,performance.now()/1e3))}),t.ro.observe(e);let l=o=>{let d=e.getBoundingClientRect();return[o.clientX-d.left,o.clientY-d.top]},c=(o,d)=>e.addEventListener(o,p=>{if(!t.ptr)return;let[f,g]=l(p);if(t.ptr(d,f,g,p)!==!1&&(t.lastUser=performance.now()/1e3),d==="down"&&t.detail){try{e.setPointerCapture(p.pointerId)}catch{}t.drag={x:f,y:g,t:performance.now()}}if(t.detail&&Wa)if(d==="move"&&t.drag){let h=performance.now(),P=Math.hypot(f-t.drag.x,g-t.drag.y)/Math.max(8,h-t.drag.t)*1e3;t.drag={x:f,y:g,t:h},Wa.friction(Number.isFinite(P)?Math.min(1,P/700):0)}else(d==="up"||d==="leave")&&(t.drag=null,Wa.friction(0))});return c("pointerdown","down"),c("pointermove","move"),c("pointerup","up"),c("pointercancel","up"),c("pointerleave","leave"),Dr.add(t),oi||(ii=performance.now(),oi=requestAnimationFrame(us)),t}function zd(e){e.io.disconnect(),e.ro.disconnect(),Dr.delete(e)}function Id(e,a){let i=!a.detail,t=e.getContext("2d"),l=document.createElement("canvas"),c=l.getContext("2d"),o=[{abs:[.035,.014,.008],inner:0,scatter:0,sc:[0,0,0],fres:.85,shadow:.09,caustic:22},{abs:[0,0,0],inner:.08,scatter:.82,sc:[250,250,248],fres:.35,shadow:.14,caustic:6},{abs:[1.25,1.2,1.12],inner:.12,scatter:.04,sc:[90,92,95],fres:.7,shadow:.2,caustic:4}],d={tint:0,stiff:220,damp:7},p=i?72:112,f=5200*Math.pow((p-1)/(i?63:103),2),g=.34,h={x:0,y:0,down:!1,press:0,max:1,cx:0,cy:0,t0:0,was:!1},P,X,s,M,T,B,I,q,F,_,V,L,w,z,G,$,C,Z,le,ee,se,de,je,Ae,N,m,O=.01,Y=1,R=0,D,ce,fe,$e,he,ge=!1,Ee=!1,Pe=!1,Ye=()=>document.documentElement.dataset.theme==="dark",St=Ye(),st=(ye,xe,me)=>{let Oe=ye/.14,Be=xe/.14,Fe=Math.abs(Oe-Math.round(Oe)),Ne=Math.abs(Be-Math.round(Be)),Dt=Fe<.022||Ne<.022;return St?152-26*(xe+1)/2-12*Math.min(1,ye*ye/(M*M))+(Dt?7*me:0):246-6*(xe+1)/2-3*Math.min(1,ye*ye/(M*M))-(Dt?4.5*me:0)},ot=()=>{let ye=0;for(let xe=0;xe<se;xe++){let me=xe/(se-1)*2-1;for(let Oe=0;Oe<ee;Oe++,ye++)N[ye]=st((Oe/(ee-1)*2-1)*M,me,1)}Ee=!1,Pe=!1},Qe={S:d,resize(ye,xe){P=ye,X=xe,e.width=Math.round(ye*_a),e.height=Math.round(xe*_a),M=ye/xe,s=Math.max(24,Math.round(p/M)),T=2*M/(p-1);let me=p*s;q=new Float32Array(me),L=new Float32Array(me),w=new Float32Array(me),z=new Float32Array(me),G=new Float32Array(me),$=new Float32Array(me),C=new Float32Array(me),Z=new Float32Array(me),le=new Float32Array(me),D=new Float32Array(me),ce=new Float32Array(me),fe=new Uint8Array(me),$e=new Uint8Array(me),he=new Uint8Array(me),B=M>=1?Math.min(M*.66,1.4):M*.78,I=M>=1?.7:.62;let Oe=(Ze,Ge)=>{let tt=Math.atan2(Ge,Ze),H=1+.035*Math.sin(tt*3+.6)+.02*Math.sin(tt*5+2.1),U=Math.pow(Math.pow(Math.abs(Ze)/(B*H),3.2)+Math.pow(Math.abs(Ge)/(I*H),3.2),1/3.2),K=mt((1-U)/.26,0,1);return g*Math.sqrt(1-Math.pow(1-K,2))};for(let Ze=0;Ze<s;Ze++)for(let Ge=0;Ge<p;Ge++)q[Ze*p+Ge]=Oe((Ge/(p-1)*2-1)*M,Ze/(s-1)*2-1);let Be=i?14e4:66e4,Fe=Math.min(_a,1.25,Math.sqrt(Be/(ye*xe)))*Y;ee=Math.max(8,Math.round(ye*Fe)),se=Math.max(8,Math.round(xe*Fe)),l.width=ee,l.height=se,de=c.createImageData(ee,se),O=2*M/(ee-1);let Ne=ee*se,Dt=new Uint8Array(p*s);je=new Int32Array(Ne*3),Ae=new Float32Array(Ne*6),N=new Float32Array(Ne),m=new Uint8Array(Ne),F=new Float32Array(Ne),_=new Float32Array(Ne),V=new Float32Array(Ne);for(let Ze=0;Ze<s;Ze++)for(let Ge=0;Ge<p;Ge++)if(!(q[Ze*p+Ge]<=0))for(let tt=-5;tt<=5;tt++)for(let H=-5;H<=5;H++){let U=Ze+tt,K=Ge+H;U>=0&&U<s&&K>=0&&K<p&&(Dt[U*p+K]=1)}let et=[[0,0],[-.06/T,-.1/T],[-.16/T,-.26/T]],Ve=0;for(let Ze=0;Ze<se;Ze++){let Ge=Ze/(se-1)*2-1;for(let tt=0;tt<ee;tt++,Ve++){let H=(tt/(ee-1)*2-1)*M,U=(H/M+1)/2*(p-1),K=(Ge+1)/2*(s-1);N[Ve]=st(H,Ge,1);let ne=0;for(let ie=0;ie<3;ie++){let ke=mt(U+et[ie][0],0,p-1.001),He=mt(K+et[ie][1],0,s-1.001),Ke=ke|0,Le=He|0,De=Le*p+Ke;je[Ve*3+ie]=De,Ae[Ve*6+ie*2]=ke-Ke,Ae[Ve*6+ie*2+1]=He-Le,ne|=Dt[De]}if(m[Ve]=ne,ne){let ie=O*.5,ke=Oe(H,Ge);F[Ve]=ke,_[Ve]=(Oe(H+ie,Ge)-ke)/ie,V[Ve]=(Oe(H,Ge+ie)-ke)/ie}}}Ee=!1,Pe=!1},set(){Pe=!1},ptr(ye,xe,me,Oe){let Be=(xe/P*2-1)*M,Fe=me/X*2-1;if(i){if(Oe.pointerType!=="mouse")return!1;ye==="move"?(h.down=!0,h.max=.5,h.x=Be,h.y=Fe):ye==="leave"&&(h.down=!1);return}ye==="down"?(h.down=!0,h.max=1,h.x=Be,h.y=Fe,h.was=!1,Za.squish(.25)):ye==="move"&&h.down?(h.x=Be,h.y=Fe):(ye==="up"||ye==="leave")&&(h.down&&h.press>.3&&Za.squish(h.press*.5),h.down=!1)},step(ye,xe){if(Ye()!==St&&(St=Ye(),N&&ot()),Qe.autoOn(xe)){let U=xe%3.6,K=U<1.6;if(K&&!h.auto&&(h.auto=!0,h.down=!0,h.max=i?.8:.9,h.cx=(va()-.5)*B*.9,h.cy=(va()-.5)*I*.6,h.t0=xe),K){let ne=xe-h.t0;h.x=h.cx+Math.sin(ne*1.2)*B*.16,h.y=h.cy+Math.cos(ne)*I*.1}else h.auto&&(h.auto=!1,h.down=!1)}else h.auto&&(h.auto=!1,i&&(h.down=!1));let me=h.down?h.max:0;h.press+=(me-h.press)*Math.min(1,ye*(h.down?ds?8:1.6:6)),h.press>.85&&!h.was&&!i&&(h.was=!0,Za.squish(.6));let Oe=Math.max(1,Math.ceil(ye*240)),Be=ye/Oe,Fe=f,Ne=.17,Dt=h.press*(110+d.stiff*.55);if(Pe&&!h.down&&h.press<1e-4)return;let et=0,Ve=0;for(let U=1;U<s-1;U++)for(let K=1;K<p-1;K++){let ne=U*p+K;if(q[ne]<=0)continue;let ie=(K/(p-1)*2-1)*M-h.x,ke=U/(s-1)*2-1-h.y,He=ie*ie+ke*ke,Ke=Math.exp(-He/(Ne*Ne)),Le=q[ne]/g;Z[ne]=-Dt*Ke*Le,et+=Z[ne];let De=Math.sqrt(He)-Ne*2;le[ne]=Math.exp(-De*De/(Ne*Ne*1.6))*Le,Ve+=le[ne]}let Ze=Ve>0?-et/Ve:0;for(let U=0;U<Oe&&ye>0;U++){for(let K=1;K<s-1;K++)for(let ne=1;ne<p-1;ne++){let ie=K*p+ne;if(q[ie]<=0){L[ie]=0,w[ie]=0;continue}w[ie]+=(Fe*(L[ie-1]+L[ie+1]+L[ie-p]+L[ie+p]-4*L[ie])-d.stiff*L[ie]-d.damp*w[ie]+Z[ie]+le[ie]*Ze)*Be}for(let K=0;K<L.length;K++)q[K]<=0||(L[K]+=w[K]*Be,L[K]<-q[K]*.82&&(L[K]=-q[K]*.82,w[K]*=-.2))}let Ge=0;for(let U=0;U<L.length;U++){z[U]=Math.max(0,q[U]+L[U]),C[U]=z[U];let K=Math.abs(L[U])+Math.abs(w[U]);K>Ge&&(Ge=K)}let tt=Pe;if(Pe=!h.down&&h.press<1e-4&&Ge<2e-5,Pe&&tt)return;for(let U=1;U<s-1;U++)for(let K=1;K<p-1;K++){let ne=U*p+K;G[ne]=(L[ne+1]-L[ne-1])/(2*T),$[ne]=(L[ne+p]-L[ne-p])/(2*T)}for(let U=0;U<3;U++){for(let K=1;K<s-1;K++)for(let ne=1;ne<p-1;ne++){let ie=K*p+ne;C[ie]=(C[ie-1]+C[ie]*2+C[ie+1])/4}for(let K=1;K<p-1;K++)for(let ne=1;ne<s-1;ne++){let ie=ne*p+K;C[ie]=(C[ie-p]+C[ie]*2+C[ie+p])/4}}let H=performance.now();Qe.render(),Qe.cost(performance.now()-H)},render(){let ye=de.data,xe=[-.42,-.62,.66],me=[-.22,-.34,.91],Oe=Math.hypot(...me);me[0]/=Oe,me[1]/=Oe,me[2]/=Oe;let Be=o[d.tint],Fe=(we,ze,Me)=>{ze=mt(ze,0,p-1.001),Me=mt(Me,0,s-1.001);let Ft=ze|0,Wt=Me|0,Ot=ze-Ft,ft=Me-Wt,vt=Wt*p+Ft;return(we[vt]*(1-Ot)+we[vt+1]*Ot)*(1-ft)+(we[vt+p]*(1-Ot)+we[vt+p+1]*Ot)*ft},Ne=(we,ze,Me)=>{let Ft=je[ze*3+Me],Wt=Ae[ze*6+Me*2],Ot=Ae[ze*6+Me*2+1];return(we[Ft]*(1-Wt)+we[Ft+1]*Wt)*(1-Ot)+(we[Ft+p]*(1-Wt)+we[Ft+p+1]*Wt)*Ot};if(!Ee){for(let we=0,ze=0;we<N.length;we++,ze+=4)ye[ze]=N[we],ye[ze+1]=N[we],ye[ze+2]=N[we]-1,ye[ze+3]=255;Ee=!0,ge=!1,D.fill(-1)}let Dt=!1;for(let we=0;we<z.length;we++){let ze=Math.abs(z[we]-D[we])>2e-6||Math.abs(C[we]-ce[we])>2e-6;fe[we]=ze,ze&&(Dt=!0,D[we]=z[we],ce[we]=C[we])}if(!Dt&&ge)return;ge=!0;let et=Math.ceil(.46/T)+2;for(let we=0;we<s;we++){let ze=-1e9;for(let Me=0;Me<p;Me++)fe[we*p+Me]&&(ze=Me),$e[we*p+Me]=Me-ze<=et;ze=1e9;for(let Me=p-1;Me>=0;Me--)fe[we*p+Me]&&(ze=Me),ze-Me<=et&&($e[we*p+Me]=1)}for(let we=0;we<p;we++){let ze=-1e9;for(let Me=0;Me<s;Me++)$e[Me*p+we]&&(ze=Me),he[Me*p+we]=Me-ze<=et;ze=1e9;for(let Me=s-1;Me>=0;Me--)$e[Me*p+we]&&(ze=Me),ze-Me<=et&&(he[Me*p+we]=1)}let Ve=Be.abs,Ze=Be.scatter,Ge=Be.shadow,tt=Be.caustic,H=Be.inner,U=Be.fres,K=1-Ze*.12,ne=Ze*.16,ie=1/g,ke=.06/T,He=.1/T,Ke=(p-1)/2,Le=(s-1)/2,De=1/M,Bt=O*1.3,$t=0,nt=0;for(let we=0;we<se;we++){let ze=we/(se-1)*2-1;for(let Me=0;Me<ee;Me++,$t+=4,nt++){if(!m[nt]||!he[je[nt*3]])continue;let Ft=(Me/(ee-1)*2-1)*M,Wt=F[nt],Ot=Wt>0?Math.max(0,Wt+Ne(L,nt,0)):0,ft=Ne(C,nt,1)*ie;ft=ft<0?0:ft>1?1:ft;let vt=Ne(C,nt,2)*ie;vt=vt<0?0:vt>1?1:vt,vt*=vt;let Gt=N[nt]*(1-ft*Ge)+(ft>.25?vt*vt*(ft-.25)*tt:0);if(Ot<1e-4){ye[$t]=Gt,ye[$t+1]=Gt,ye[$t+2]=Gt-1;continue}let be=_[nt]+Ne(G,nt,0),ut=V[nt]+Ne($,nt,0),yt=-be*.7,Jt=-ut*.7,Yt=1/Math.sqrt(yt*yt+Jt*Jt+1),qa=yt*Yt,pa=Jt*Yt,wa=Ot*ie,Nt=.16+wa*.28,it=Ft+qa*Nt,zt=ze+pa*Nt,ua=Fe(C,(it*De+1)*Ke-ke,(zt+1)*Le-He)*ie;ua=ua<0?0:ua>1?1:ua;let ta=Yt*Yt,aa=st(it,zt,ta*ta*Yt*1.6)*(1-ua*H),ga=Ve[0]?aa*Math.exp(-Ve[0]*wa):aa,Ht=Ve[1]?aa*Math.exp(-Ve[1]*wa):aa,Et=Ve[2]?aa*Math.exp(-Ve[2]*wa):aa;if(Ze){let J=Ze*(1-Math.exp(-wa*2.2));ga+=(Be.sc[0]-ga)*J,Ht+=(Be.sc[1]-Ht)*J,Et+=(Be.sc[2]-Et)*J}let ka=qa*xe[0]+pa*xe[1]+Yt*xe[2],b=K+ne*(ka>0?ka:0);if(ga*=b,Ht*=b,Et*=b,Yt<.9995){let J=-pa*1.5+.25;J=J<0?0:J>1?1:J;let ae=112+130*J,Ce=Math.pow(1-Yt,2.6)*U;ga+=(ae-ga)*Ce,Ht+=(ae-Ht)*Ce,Et+=(ae+2-Et)*Ce}let u=qa*me[0]+pa*me[1]+Yt*me[2];if(u>.95){let J=Math.pow(u,90),ae=(J*1.1+(u>.985?Math.pow(u,400)*1.2:0))*255;ga+=ae,Ht+=ae,Et+=ae}let v=Ot/(Math.sqrt(be*be+ut*ut)*Bt+1e-4);v>1&&(v=1),ye[$t]=Gt+(ga-Gt)*v,ye[$t+1]=Gt+(Ht-Gt)*v,ye[$t+2]=Gt-1+(Et-Gt+1)*v}}c.putImageData(de,0,0),t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(l,0,0,e.width,e.height)},cost(ye){Qe.ms=ye,window.__gelCost&&window.__gelCost.push(ye),ye>(i?7:13)?R++:R=Math.max(0,R-1),R>12&&Y>.56&&!h.down&&h.press<.05&&(Y=Math.max(.55,Y*.82),R=0,Qe.resize(P,X))}};return Qe}function Pd(e,a){let i=!a.detail,t=e.getContext("2d"),l=document.createElement("canvas"),c=l.getContext("2d"),o=document.createElement("canvas"),d=o.getContext("2d"),p={size:0,mag:.7,ca:.35},f,g,h,P,X=80,s={x:0,y:0},M={x:0,y:0},T={x:0,y:0},B=!1,I=!0,q={},F=!1;function _(){let L=c;if(L.setTransform(h,0,0,h,0,0),L.fillStyle=fo()?"#a3a5a4":"#f1f1ef",L.fillRect(0,0,f,g),i&&Math.min(f,g)<300){let N=Math.min(f*.25,g*.21);L.fillStyle="#262827",L.font=`200 ${N}px "Helvetica Neue",Inter,Arial`,L.textBaseline="alphabetic";let m=f*.11,O=g*.44;L.fillText("Look",m,O),L.fillText("closer.",m,O+N*1.02),L.strokeStyle="rgba(38,40,39,.65)",L.lineWidth=.6;let Y=f*.72,R=g*.84,D=Math.min(f,g)*.2;for(let ce=0;ce<12;ce++){L.beginPath();for(let fe=0;fe<=48;fe++){let $e=fe/48*Math.PI*2,he=D*(.18+ce*.07)*(1+.12*Math.sin($e*3+ce*.4)),ge=Y+Math.cos($e)*he*1.15,Ee=R+Math.sin($e)*he*.78;fe?L.lineTo(ge,Ee):L.moveTo(ge,Ee)}L.stroke()}T={x:f*.42,y:g*.42},P=L.getImageData(0,0,l.width,l.height);return}let w=f/g>1.15,z=Math.max(i?30:20,Math.min(f,g)*.08),G=Math.min(f*(w?i?.075:.09:.13),g*.15,84);L.fillStyle="#262827",L.font=`200 ${G}px "Helvetica Neue",Inter,Arial`,L.textBaseline="top",(w?["Light bends","here."]:["Light","bends here."]).forEach((N,m)=>L.fillText(N,z,z+m*G*1.02));let $="A lens does not add anything to the page. It only redistributes what is already there, pulling the centre toward you and folding the edge away. Every line keeps its weight; only its position changes.".split(" "),C=mt(Math.min(f,g)*.032,9,12);L.font=`${C}px "Helvetica Neue",Arial`,L.fillStyle="#4a4c4b";let Z=w?f*.53:z,le=w?f*.24:f-2*z,ee=w?z+6:z+G*2.4,se="";T={x:Z+Math.min(le*.4,70),y:ee+C*4};for(let N of $){let m=se?se+" "+N:N;L.measureText(m).width>le?(L.fillText(se,Z,ee),ee+=C*1.45,se=N):se=m}L.fillText(se,Z,ee),L.strokeStyle="rgba(38,40,39,.72)",L.lineWidth=.7;let de=w?f*.78:f*.62,je=w?g*.68:g*.78,Ae=Math.min(f,g)*(w?.25:.2);for(let N=0;N<20;N++){L.beginPath();for(let m=0;m<=64;m++){let O=m/64*Math.PI*2,Y=Ae*(.15+N*.043)*(1+.12*Math.sin(O*3+N*.4)+.05*Math.sin(O*7)),R=de+Math.cos(O)*Y*1.15,D=je+Math.sin(O)*Y*.78;m?L.lineTo(R,D):L.moveTo(R,D)}L.stroke()}L.strokeStyle="rgba(38,40,39,.16)";for(let N=0;N<8;N++)L.beginPath(),L.moveTo(z,g*(w?.58:.62)+N*7),L.lineTo(f*(w?.4:.42),g*(w?.58:.62)+N*7),L.stroke();P=L.getImageData(0,0,l.width,l.height)}let V={S:p,resize(L,w){f=L,g=w,h=Math.min(_a,i?1.5:2),e.width=l.width=Math.round(L*h),e.height=l.height=Math.round(w*h),_(),X=p.size?p.size/2:mt(Math.min(L,w)*.24,46,140),(!F||!i)&&(s={...T},M={...T},F=!0),I=!0},set(L){L==="size"&&(X=p.size/2),I=!0},retheme(){f&&(_(),I=!0)},ptr(L,w,z,G){if(i&&G.pointerType!=="mouse")return!1;if(L==="leave"){B=!1;return}if(i&&L==="down")return!1;(L==="move"||L==="down")&&(!B&&!i&&Za.glass(),B=!0,M={x:w,y:z})},step(L,w){i&&V.autoOn(w)&&(M={x:f*(.5+.3*Math.sin(w*.38)),y:g*(.5+.2*Math.sin(w*.53+1))});let z=1-Math.exp(-L*(B?20:i?2.2:3));s.x+=(M.x-s.x)*z,s.y+=(M.y-s.y)*z,!(!I&&Math.abs(s.x-q.x)<.05&&Math.abs(s.y-q.y)<.05)&&(q={x:s.x,y:s.y},I=!1,V.render(w))},render(L){t.setTransform(1,0,0,1,0,0),t.drawImage(l,0,0),t.setTransform(h,0,0,h,0,0);let w=s.x,z=s.y,G=w+X*.16,$=z+X*.3,C=t.createRadialGradient(G,$,X*.2,G,$,X*1.15);C.addColorStop(0,"rgba(0,0,0,.10)"),C.addColorStop(.75,"rgba(0,0,0,.05)"),C.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=C,t.beginPath(),t.ellipse(G,$,X*1.15,X,0,0,7),t.fill(),C=t.createRadialGradient(G+X*.1,$+X*.12,0,G+X*.1,$+X*.12,X*.45),C.addColorStop(0,"rgba(255,255,255,.75)"),C.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=C,t.beginPath(),t.arc(G+X*.1,$+X*.12,X*.45,0,7),t.fill();let Z=Math.round(X*h),le=Z*2+2;o.width!==le&&(o.width=o.height=le),(!V.ob||V.ob.width!==le)&&(V.ob=d.createImageData(le,le));let ee=V.ob,se=ee.data,de=P.data,je=P.width,Ae=P.height,N=w*h,m=z*h,O=p.mag,Y=p.ca;for(let R=0;R<le;R++)for(let D=0;D<le;D++){let ce=D-Z-1,fe=R-Z-1,$e=Math.hypot(ce,fe)/Z;if($e>1.003)continue;let he=(R*le+D)*4,ge=Math.sqrt(Math.max(0,1-$e*$e)),Ee=1/(1+O*Math.pow(ge,.7)),Pe=Math.pow(1-ge,3)*.55,Ye=$e>0?ce/($e*Z):0,St=$e>0?fe/($e*Z):0;for(let Oe=0;Oe<3;Oe++){let Be=1+(Oe-1)*Y*.06*(1-ge),Fe=mt(N+ce*Ee*Be+Ye*Pe*Z|0,0,je-1),Ne=mt(m+fe*Ee*Be+St*Pe*Z|0,0,Ae-1);se[he+Oe]=de[(Ne*je+Fe)*4+Oe]*($e>.9?.985-($e-.9)*1.6:.985)}let st=ce/Z+.38,ot=fe/Z+.42,Qe=Math.exp(-(st*st+ot*ot)/.004)*.75+Math.exp(-(st*st*4+ot*ot)/.25)*.04,ye=Math.exp(-Math.pow(($e-.955)/.012,2))*Math.max(0,-(ce+fe)/Z)*.55,xe=Math.exp(-(Math.pow(ce/Z-.45,2)+Math.pow(fe/Z-.5,2))/.012)*.12,me=(Qe+ye+xe)*255;se[he]+=me,se[he+1]+=me,se[he+2]+=me+1,se[he+3]=255*mt((1.003-$e)/.012,0,1)}d.putImageData(ee,0,0),t.setTransform(1,0,0,1,0,0),t.drawImage(o,N-Z-1,m-Z-1),t.setTransform(h,0,0,h,0,0),t.strokeStyle="rgba(0,0,0,.08)",t.lineWidth=.6,t.beginPath(),t.arc(w,z,X,0,7),t.stroke()}};return V}function Rd(e,a){let i=!a.detail,t=e.getContext("2d"),l=document.createElement("canvas"),c=l.getContext("2d"),o={word:a.word||"Elastic",reach:80,snap:12},d,p,f,g,h=null,P=null,X={x:0,y:0},s={x:0,y:0},M={x:0,y:0},T=null,B=!1,I={next:0},q=!1;function F(){c.setTransform(1,0,0,1,0,0),c.fillStyle=fo()?"#a3a5a4":"#f6f6f5",c.fillRect(0,0,l.width,l.height),c.setTransform(f,0,0,f,0,0);let w=Math.min(p*.46,d*.25);c.font=`300 ${w}px "Helvetica Neue",Inter,Arial`,c.letterSpacing="-0.04em";let z=c.measureText(o.word).width;z>d*.84&&(w*=d*.84/z,c.font=`300 ${w}px "Helvetica Neue",Inter,Arial`),c.fillStyle="#262827",c.textAlign="center",c.textBaseline="middle",c.fillText(o.word,d/2,p*.5),g=c.getImageData(0,0,l.width,l.height);let G=g.data,$=g.width,C=1e9,Z=1e9,le=-1,ee=-1;for(let se=0;se<g.height;se++)for(let de=0;de<$;de++)G[(se*$+de)*4]<238&&(de<C&&(C=de),de>le&&(le=de),se<Z&&(Z=se),se>ee&&(ee=se));h=le<0?null:{x0:C-1,y0:Z-1,x1:le+2,y1:ee+2},P=t.createImageData(l.width,l.height)}let _=()=>o.reach*mt(Math.min(d,p)/380,.45,1.3),V=w=>{let z=Math.hypot(w.x,w.y),G=Math.min(Math.min(d,p)*.5,_()*1.8),$=z>0?G*Math.tanh(z/G)/z:0;return{x:w.x*$,y:w.y*$}},L={S:o,resize(w,z){d=w,p=z,f=Math.min(_a,i?1.25:1.5),e.width=l.width=Math.round(w*f),e.height=l.height=Math.round(z*f),F(),q=!1},set(w){w==="word"&&F(),q=!1},retheme(){d&&(F(),q=!1)},ptr(w,z,G,$){if(i)return!1;w==="down"?(Math.hypot(s.x,s.y)<2&&(X={x:z,y:G},s={x:0,y:0}),T={x:z-s.x,y:G-s.y},M={x:0,y:0},B=!1,q=!1):w==="move"&&T?(s=V({x:z-T.x,y:G-T.y}),q=!1):(w==="up"||w==="leave")&&T&&(Za.twang(Math.hypot(s.x,s.y)),T=null)},step(w,z){if(!T&&L.autoOn(z)){if(!B&&z>I.next){B=!0,I.t0=z,X={x:d*(.28+.44*va()),y:p*(.42+.16*va())};{let G=_()*.85;I.tx=mt((va()-.5)*d*.14,-G,G),I.ty=(va()<.6?-1:1)*Math.min(G,p*(.15+.08*va()))}s={x:0,y:0},M={x:0,y:0}}if(B){let G=(z-I.t0)/.75;if(G<1){let $=1-Math.pow(1-G,3);s={x:I.tx*$,y:I.ty*$}}else G>1.3&&(B=!1,I.next=z+1.4+va()*1.2)}q=!1}else B&&(B=!1);if(!T&&!B){let G=o.snap*o.snap*1.6,$=o.snap*.55;for(let C=0;C<4;C++){let Z=w/4;M.x+=(-G*s.x-$*M.x)*Z,M.y+=(-G*s.y-$*M.y)*Z,s.x+=M.x*Z,s.y+=M.y*Z}}if(!T&&!B&&Math.hypot(s.x,s.y)<.15&&Math.hypot(M.x,M.y)<.5){if(q)return;s={x:0,y:0},q=!0}L.render()},render(){if(t.setTransform(1,0,0,1,0,0),t.drawImage(l,0,0),Math.hypot(s.x,s.y)<.15||!h)return;let w=_()*f,z=X.x*f,G=X.y*f,$=s.x*f,C=s.y*f,Z=Math.hypot($,C),le=w*3+Z,ee=mt(Math.floor(Math.max(Math.min(z,z+$)-le,h.x0-Z-1)),0,e.width),se=mt(Math.ceil(Math.min(Math.max(z,z+$)+le,h.x1+Z+1)),0,e.width),de=mt(Math.floor(Math.max(Math.min(G,G+C)-le,h.y0-Z-1)),0,e.height),je=mt(Math.ceil(Math.min(Math.max(G,G+C)+le,h.y1+Z+1)),0,e.height),Ae=se-ee,N=je-de;if(Ae<2||N<2)return;let m=P.data,O=P.width,Y=g.data,R=g.width,D=g.height,ce=1/(2*w*w);for(let fe=0;fe<N;fe++)for(let $e=0;$e<Ae;$e++){let he=ee+$e,ge=de+fe,Ee=he,Pe=ge;for(let me=0;me<3;me++){let Oe=Ee-z,Be=Pe-G,Fe=Math.exp(-(Oe*Oe+Be*Be)*ce);Ee=he-$*Fe,Pe=ge-C*Fe}Ee=mt(Ee,0,R-1.001),Pe=mt(Pe,0,D-1.001);let Ye=Ee|0,St=Pe|0,st=Ee-Ye,ot=Pe-St,Qe=(St*R+Ye)*4,ye=Qe+R*4,xe=(ge*O+he)*4;for(let me=0;me<3;me++)m[xe+me]=(Y[Qe+me]*(1-st)+Y[Qe+4+me]*st)*(1-ot)+(Y[ye+me]*(1-st)+Y[ye+4+me]*st)*ot;m[xe+3]=255}t.putImageData(P,0,0,ee,de,Ae,N)}};return L}function Dd(e,a){let i=!a.detail,t=e.getContext("2d"),l={k:100,lines:!0},c,o,d,p=[],f=[],g=null,h={next:0},P,X=[{n:"graphite",m:1.8,g:"420 g"},{n:"ceramic",m:.8,g:"180 g"},{n:"alu",m:1.1,g:"240 g"},{n:"graphite",m:1.8,g:"420 g"},{n:"ceramic",m:.8,g:"180 g"}];function s(B,I){let q=null,F=1e9;for(let _ of p){if(_.t&&_.t!==B)continue;let V=Math.hypot(_.x-B.x,_.y-B.y);V<F&&(F=V,q=_)}return I||F<d*.9?q:null}function M(B,I,q,F,_){t.beginPath(),t.roundRect?t.roundRect(B,I,q,F,_):t.rect(B,I,q,F)}let T={S:l,resize(B,I){c=B,o=I,e.width=Math.round(B*_a),e.height=Math.round(I*_a);let q=B>=I,F=q?i?3:4:2,_=q?2:i?3:4;d=Math.min(B/(F+1.1),I/(_+.9))*.84;let V=d*1.2;p=[];for(let z=0;z<_;z++)for(let G=0;G<F;G++)p.push({x:B/2+(G-(F-1)/2)*V,y:I/2+(z-(_-1)/2)*V,t:null});let L=Math.min(i?4:5,p.length-1);f=X.slice(0,L).map((z,G)=>({...z,i:G,x:0,y:0,vx:0,vy:0,z:0,slot:null}));let w=q?[0,1,3+(i?1:2),2].concat([4]):[0,1,2,4,5];f.forEach((z,G)=>{let $=p[w[G]%p.length];z.slot=$,$.t=z,z.x=$.x,z.y=$.y}),g=null,T.drawn=!1},ptr(B,I,q,F){if(i)return!1;if(B==="down"){let _=null;for(let V of f)Math.abs(I-V.x)<d*.5&&Math.abs(q-V.y)<d*.5&&(!_||V.z>=_.z)&&(_=V);if(!_)return!1;g={t:_,px:I,py:q,ox:I-(_.slot?_.slot.x:_.x),oy:q-(_.slot?_.slot.y:_.y)}}else B==="move"&&g&&!g.auto?(g.px=I,g.py=q):(B==="up"||B==="leave")&&g&&!g.auto&&(g=null)},step(B,I){if(T.autoOn(I)&&(!g||g.auto)){if(!g&&I>h.next){let L=f[va()*f.length|0],w=p.filter(z=>!z.t);if(L&&L.slot&&w.length){let z=w[va()*w.length|0];g={t:L,auto:!0,px:L.x,py:L.y,ox:0,oy:0,fx:L.x,fy:L.y,tx:z.x,ty:z.y,t0:I}}}if(g&&g.auto){let L=(I-g.t0)/1.15;if(L>=1)g=null,h.next=I+1.3+va();else{let w=L<.5?4*L*L*L:1-Math.pow(-2*L+2,3)/2,z=Math.sin(L*Math.PI)*d*.18;g.px=g.fx+(g.tx-g.fx)*w,g.py=g.fy+(g.ty-g.fy)*w-z}}}else g&&g.auto&&!T.autoOn(I)&&(g=null);let q=3,F=B/q,_=l.k;for(let L=0;L<q&&B>0;L++)for(let w of f){let z=0,G=0;if(g&&g.t===w){let C=g.px-g.ox,Z=g.py-g.oy;if(w.slot){let se=C-w.slot.x,de=Z-w.slot.y;if(Math.hypot(se,de)<d*.42*(_/100)){w.x=w.slot.x+se*.14,w.y=w.slot.y+de*.14,w.vx=w.vy=0;continue}w.slot.t=null,w.slot=null,Za.thunk(w.m*1.6)}let le=260/w.m;z+=(C-w.x)*le,G+=(Z-w.y)*le;let ee=s(w);if(ee){let se=ee.x-w.x,de=ee.y-w.y,je=Math.hypot(se,de);if(je<d*.9){let Ae=_*14*(1-je/(d*.9))/w.m;z+=se/(je+1)*Ae*d*.12,G+=de/(je+1)*Ae*d*.12}}w.z+=(1-w.z)*.2}else if(w.slot){let C=_*6/w.m;z+=(w.slot.x-w.x)*C,G+=(w.slot.y-w.y)*C,w.z+=(0-w.z)*.25}else{let C=s(w,!0);C&&(C.t=w,w.slot=C,Za.thunk(w.m))}for(let C of f)if(C!==w){let Z=w.x-C.x,le=w.y-C.y,ee=Math.hypot(Z,le);if(ee<d*1.02&&ee>0){let se=(d*1.02-ee)*900;z+=Z/ee*se,G+=le/ee*se}}let $=2*Math.sqrt(260/w.m)*.9;w.vx+=(z/w.m-$*w.vx)*F,w.vy+=(G/w.m-$*w.vy)*F,w.x+=w.vx*F,w.y+=w.vy*F}let V=!!g;for(let L of f)(Math.abs(L.vx)+Math.abs(L.vy)>.02||L.z>.002||L.slot&&Math.abs(L.x-L.slot.x)+Math.abs(L.y-L.slot.y)>.05)&&(V=!0);!V&&T.drawn||(T.drawn=!V,T.render())},set(){T.drawn=!1},retheme(){T.drawn=!1},render(){let B=_a;t.setTransform(B,0,0,B,0,0);let I=t.createLinearGradient(0,0,0,o);if(I.addColorStop(0,fo()?"#a6a8a7":"#e9eae9"),I.addColorStop(1,fo()?"#929493":"#dddfde"),t.fillStyle=I,t.fillRect(0,0,c,o),l.lines){t.strokeStyle="#262827",t.lineWidth=.8,t.lineCap="round";let q=mt(d*.17,11,16);for(let F=q/2;F<o;F+=q)for(let _=q/2;_<c;_+=q){let V=0,L=0,w=!1;for(let $ of f){let C=_-$.x,Z=F-$.y;if(Math.abs(C)<d*.52&&Math.abs(Z)<d*.52){w=!0;break}let le=C*C+Z*Z,ee=Math.sqrt(le),se=le*le*ee,de=-Z*d*d*$.m;V+=3*de*C/se,L+=3*de*Z/se+d*d*$.m/(le*ee)}if(w)continue;let z=Math.hypot(V,L);if(z<1e-4)continue;t.globalAlpha=mt(z*d*.3*(l.k/100),.03,.5);let G=q*.36;t.beginPath(),t.moveTo(_-V/z*G,F-L/z*G),t.lineTo(_+V/z*G,F+L/z*G),t.stroke()}t.globalAlpha=1}for(let q of p)t.strokeStyle="rgba(38,40,39,.2)",t.lineWidth=1,t.beginPath(),t.arc(q.x,q.y,2.5,0,7),t.stroke(),t.strokeStyle="rgba(38,40,39,.07)",M(q.x-d/2,q.y-d/2,d,d,d*.12),t.stroke();[...f].sort((q,F)=>q.z-F.z).forEach(q=>{let F=d*.48,_=1+q.z*.04,V=d*.13;t.save(),t.translate(q.x,q.y),t.scale(_,_),t.shadowColor="rgba(0,0,0,"+(.14+q.z*.12)+")",t.shadowBlur=8+q.z*30,t.shadowOffsetY=3+q.z*16;let L=t.createLinearGradient(0,-F,0,F);if(q.n==="graphite"?(L.addColorStop(0,"#3d3f40"),L.addColorStop(1,"#252627")):q.n==="ceramic"?(L.addColorStop(0,"#fff"),L.addColorStop(1,"#ececea")):(L.addColorStop(0,"#dcdddf"),L.addColorStop(1,"#bfc1c3")),t.fillStyle=L,M(-F,-F,F*2,F*2,V),t.fill(),t.shadowColor="transparent",q.n==="alu"){t.save(),M(-F,-F,F*2,F*2,V),t.clip(),t.strokeStyle="rgba(255,255,255,.35)",t.lineWidth=.5;for(let w=-F;w<F;w+=2.2)t.beginPath(),t.moveTo(-F,w),t.lineTo(F,w),t.stroke();t.restore()}t.strokeStyle=q.n==="graphite"?"rgba(255,255,255,.16)":"rgba(255,255,255,.95)",t.beginPath(),t.moveTo(-F+V,-F+.5),t.lineTo(F-V,-F+.5),t.stroke(),q.n!=="graphite"&&(t.strokeStyle="rgba(0,0,0,.07)",M(-F,-F,F*2,F*2,V),t.stroke()),d>70&&(t.fillStyle=q.n==="graphite"?"rgba(243,243,241,.5)":"rgba(38,40,39,.42)",t.font='10px "Helvetica Neue",Arial',t.textAlign="right",t.fillText(q.g,F-10,F-10)),t.beginPath(),t.arc(0,0,F*.16,0,7),t.strokeStyle=q.n==="graphite"?"rgba(255,255,255,.1)":"rgba(0,0,0,.08)",t.stroke(),t.restore()})}};return T}var Bd={gel:Id,lens:Pd,type:Rd,mag:Dd},Br=[{id:"gel",name:"Gel Press",cat:"Materials",line:"Clear gel that sinks under pressure and slowly recovers.",lead:"A slab of clear gel that keeps its volume. Press and it sinks, the displaced mass rises around your finger, and it settles back on its own time.",hint:"Press, hold and drag",ctl:[{t:"sw",k:"tint",l:"Material",o:[["Clear","#eef3f4"],["Milk","#fafaf8"],["Smoke","#5c5f61"]]},{t:"r",k:"stiff",l:"Firmness",min:60,max:600},{t:"r",k:"damp",l:"Viscosity",min:2,max:30}]},{id:"lens",name:"Interactive Lens",cat:"Materials",line:"Thick optical glass that bends the page beneath it.",lead:"A disc of thick optical glass. It enlarges the centre, folds the edge with a trace of colour and leaves a point of focused light in its shadow.",hint:"Move or drag the lens",ctl:[{t:"r",k:"size",l:"Diameter",min:120,max:320},{t:"r",k:"mag",l:"Power",min:0,max:1.4,step:.01},{t:"r",k:"ca",l:"Dispersion",min:0,max:1,step:.01}]},{id:"type",name:"Elastic Lettering",cat:"Typography",line:"Letters that stretch under tension and snap back.",lead:"The glyphs themselves stretch. Grab any part of a letter and pull: strokes thin and lengthen, then snap back past rest and settle.",hint:"Grab a letter and pull",ctl:[{t:"txt",k:"word",l:"Word"},{t:"r",k:"reach",l:"Reach",min:30,max:160},{t:"r",k:"snap",l:"Snap",min:4,max:40}]},{id:"mag",name:"Magnetic Stack",cat:"Interaction",line:"Weighted pieces that pull, resist and settle into place.",lead:"Weighted modules on a magnetic rack. Graphite lags behind your hand, ceramic follows quickly, and every slot holds on before it lets go.",hint:"Drag a piece to another slot",ctl:[{t:"r",k:"k",l:"Field strength",min:20,max:200},{t:"chk",k:"lines",l:"Show field"}]}],xo=_t?"Free to try \xB7 Code on request":"Coming to early access";function Fr(e,a,i={}){gs();let t=document.createElement("canvas");t.className="obj-cv",t.setAttribute("aria-hidden","true"),e.prepend(t);let l=Od(t,Bd[a],i);return{piece:l,dispose(){zd(l),t.remove()}}}var ss=e=>typeof e=="number"&&e%1?e.toFixed(2):e;function ni(e,{onClose:a}={}){gs();let i=Br.find(g=>g.id===e);if(!i)return;let t=document.activeElement,l=document.createElement("div");l.className="obj-detail",l.setAttribute("role","dialog"),l.setAttribute("aria-modal","true"),l.setAttribute("aria-label",i.name),l.innerHTML=`<div class="obj-sheet glass">
    <button class="gb small obj-x" type="button" aria-label="Close"><svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" stroke-width="1.2" fill="none"><path d="M2 2l8 8M10 2l-8 8"/></svg></button>
    <div class="obj-stage"><span class="obj-hint">${i.hint}</span></div>
    <div class="obj-panel info-dark">
      <span class="obj-crumb">Products \xB7 ${i.cat}</span><h2>${i.name}</h2><p class="obj-lead">${i.lead}</p>
      <span class="obj-status"><i></i>${xo}</span>
      <div class="obj-group obj-custom"><h4>Customise</h4></div>
      ${Pn(i.id)}<div class="obj-group"><h4>Includes</h4><ul class="obj-inc"><li>Web Component and React module</li><li>Offline demo page</li><li>Settings file you can export from here</li><li>Keyboard, touch and reduced-motion support</li></ul></div>
      <div class="obj-acts"><button class="gb small primary" type="button" data-export>Export settings</button>${_t?so(i.id,i.name,{cls:"gb small"}):`<button class="gb small" type="button" disabled>${xo}</button>`}</div>
    </div></div>`,document.body.append(l),document.documentElement.classList.add("obj-lock"),bo=!0;let c=Fr(l.querySelector(".obj-stage"),e,{detail:!0,auto:!1}),o=c.piece.S;if(e==="lens"){let g=l.querySelector(".obj-stage").clientWidth;o.size=Math.round(mt(g*.42,140,220)),c.piece.set("size")}l.querySelector(".obj-custom").insertAdjacentHTML("beforeend",i.ctl.map(g=>{let h=o[g.k];return g.t==="sw"?`<div class="obj-ctl"><span>${g.l}</span><div class="obj-sw">${g.o.map((P,X)=>`<button type="button" aria-label="${P[0]}" aria-pressed="${X===h}" data-k="${g.k}" data-v="${X}" style="background:${P[1]}"></button>`).join("")}</div></div>`:g.t==="txt"?`<label class="obj-ctl"><span>${g.l}</span><input class="obj-txt" data-k="${g.k}" value="${h}" maxlength="14"></label>`:g.t==="chk"?`<label class="obj-ctl"><span>${g.l}</span><input type="checkbox" data-k="${g.k}"${h?" checked":""}></label>`:`<label class="obj-ctl"><span>${g.l}</span><input type="range" data-k="${g.k}" min="${g.min}" max="${g.max}" step="${g.step||1}" value="${h}"><output>${ss(h)}</output></label>`}).join(""));let d=l.querySelector(".obj-custom");d.addEventListener("input",g=>{let h=g.target.dataset.k;if(!h)return;let P=g.target.type==="checkbox"?g.target.checked:g.target.type==="range"?+g.target.value:g.target.value||" ";o[h]=P,c.piece.set?.(h);let X=g.target.nextElementSibling;X?.tagName==="OUTPUT"&&(X.textContent=ss(P))}),d.addEventListener("click",g=>{let h=g.target.closest(".obj-sw button");h&&(o[h.dataset.k]=+h.dataset.v,c.piece.set?.(h.dataset.k),h.parentElement.querySelectorAll("button").forEach(P=>P.setAttribute("aria-pressed",String(P===h))))}),l.querySelector("[data-export]").addEventListener("click",()=>{let g=document.createElement("a");g.href=URL.createObjectURL(new Blob([JSON.stringify({product:e,name:i.name,version:"preview",settings:{...o}},null,2)],{type:"application/json"})),g.download=`${e}-settings.json`,g.click(),setTimeout(()=>URL.revokeObjectURL(g.href),1e3)});let p=()=>{Rr("close"),Wa?.friction(0),c.dispose(),l.remove(),document.documentElement.classList.remove("obj-lock"),bo=!1,removeEventListener("keydown",f),t?.focus?.(),a?.()},f=g=>{g.key==="Escape"&&!document.querySelector("dialog.rc[open]")&&p()};return addEventListener("keydown",f),_t&&lo(l,{audio:Wa}),l.querySelector(".obj-x").addEventListener("click",p),l.addEventListener("click",g=>{g.target===l&&p()}),setTimeout(()=>l.querySelector(".obj-x").focus(),30),p}var ls=!1;function gs(){if(ls)return;ls=!0;let e=document.createElement("style");e.textContent=`
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
`,document.head.append(e)}var Nr=[{id:"clear",name:"Clear",line:"Thick clear glass with a bright lower rim, for light pages.",dark:!1,v:{page:"#F3F3F1",ink:"#262827",muted:"#6b6f6c",line:"rgba(38,40,39,.07)",body:"linear-gradient(180deg,rgba(255,255,255,.96),rgba(246,247,246,.72) 52%,rgba(226,230,228,.78))",edge:"#ffffff",depth:"rgba(130,142,138,.5)",shadow:"rgba(38,40,39,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(176,212,228,.6)",tint:"linear-gradient(180deg,#43484a,#1f2322 60%,#2c302f)",tintInk:"#f4f5f3",fill:"#2a2e2d",well:"linear-gradient(180deg,rgba(214,218,216,.7),rgba(246,247,246,.9))",orb:"radial-gradient(circle at 50% 62%,rgba(214,232,240,.55),rgba(255,255,255,.22) 58%,rgba(186,200,206,.65))",squish:"1"}},{id:"smoke",name:"Smoke",line:"Smoked glass that darkens to the rim, for dark pages.",dark:!0,v:{page:"#141716",ink:"#ECEEEB",muted:"#9DA29F",line:"rgba(255,255,255,.08)",body:"linear-gradient(180deg,rgba(255,255,255,.17),rgba(255,255,255,.05) 50%,rgba(0,0,0,.22))",edge:"rgba(255,255,255,.38)",depth:"rgba(0,0,0,.6)",shadow:"rgba(0,0,0,.75)",spec:"rgba(255,255,255,.4)",caustic:"rgba(150,186,200,.4)",tint:"linear-gradient(180deg,#fbfbfa,#d6d9d6)",tintInk:"#161918",fill:"#e7e9e6",well:"linear-gradient(180deg,rgba(0,0,0,.45),rgba(255,255,255,.04))",orb:"radial-gradient(circle at 50% 62%,rgba(120,130,136,.55),rgba(40,44,46,.35) 58%,rgba(10,12,12,.75))",squish:"1"}},{id:"chrome",name:"Chrome",line:"Liquid chrome that folds the room it reflects.",dark:!1,v:{page:"#E2E4E3",ink:"#1c1e1d",muted:"#5d6260",line:"rgba(0,0,0,.1)",body:"linear-gradient(180deg,#ffffff 0%,#c3c8c7 24%,#f5f6f6 46%,#8f9594 72%,#e4e7e6 100%)",edge:"#ffffff",depth:"rgba(60,66,64,.6)",shadow:"rgba(30,34,33,.42)",spec:"rgba(255,255,255,1)",caustic:"rgba(255,255,255,.7)",tint:"linear-gradient(180deg,#6c7271 0%,#1d201f 48%,#4a4f4e 100%)",tintInk:"#f3f4f3",fill:"#3a3f3e",well:"linear-gradient(180deg,#a9aeac,#eef0ef)",orb:"conic-gradient(from 210deg,#fdfdfd,#8e9493,#f2f3f3,#5d6362,#e9ebea,#a3a8a7,#fdfdfd)",squish:"1"}},{id:"porcelain",name:"Porcelain",line:"Opaque glazed porcelain with a warm greige accent.",dark:!1,v:{page:"#EFEDE8",ink:"#2e2c29",muted:"#6e6a63",line:"rgba(60,50,40,.08)",body:"linear-gradient(180deg,#fffefb,#f4f1eb 58%,#e5e0d6)",edge:"#ffffff",depth:"rgba(170,158,140,.45)",shadow:"rgba(80,68,52,.26)",spec:"rgba(255,255,255,.9)",caustic:"rgba(207,200,189,.55)",tint:"linear-gradient(180deg,#ddd6ca,#bdb3a3)",tintInk:"#2e2c29",fill:"#bfb5a5",well:"linear-gradient(180deg,#e2ddd3,#faf8f4)",orb:"radial-gradient(circle at 50% 60%,#fbf9f5,#ece7de 60%,#d2cabc)",squish:"1"}},{id:"gel",name:"Gel",line:"Soft sea-glass gel that gives a little when you press it.",dark:!1,v:{page:"#E8EEEC",ink:"#1f302b",muted:"#5b6f69",line:"rgba(30,70,60,.08)",body:"linear-gradient(180deg,rgba(244,252,249,.94),rgba(198,228,218,.62) 56%,rgba(156,200,186,.7))",edge:"rgba(255,255,255,.95)",depth:"rgba(70,124,108,.5)",shadow:"rgba(30,70,60,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(130,226,196,.65)",tint:"linear-gradient(180deg,#a6dccb,#5d9c89)",tintInk:"#0f2a22",fill:"#6aa894",well:"linear-gradient(180deg,rgba(170,206,194,.6),rgba(240,250,246,.9))",orb:"radial-gradient(circle at 50% 60%,rgba(190,240,222,.75),rgba(150,214,192,.45) 58%,rgba(90,160,138,.7))",squish:"1.6"}},{id:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud.",dark:!1,v:{page:"#F2EEEE",ink:"#33282b",muted:"#7a6a6e",line:"rgba(80,40,50,.07)",body:"linear-gradient(180deg,rgba(255,252,252,.96),rgba(246,232,236,.72) 54%,rgba(230,206,214,.75))",edge:"#ffffff",depth:"rgba(190,140,156,.45)",shadow:"rgba(90,50,62,.26)",spec:"rgba(255,255,255,.95)",caustic:"rgba(255,170,198,.6)",tint:"linear-gradient(180deg,#f3c9d6,#d9909f)",tintInk:"#3a1d25",fill:"#df9fb0",well:"linear-gradient(180deg,rgba(226,206,212,.7),rgba(255,250,251,.9))",orb:"radial-gradient(circle at 46% 58%,rgba(255,188,208,.85),rgba(255,236,242,.5) 50%,rgba(222,190,200,.7))",squish:"1.2"}}],Fd=e=>Nr.find(a=>a.id===e)??Nr[0],Nd=e=>Object.entries(e.v).map(([a,i])=>`--cc-${a.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}:${i};`).join(`
  `),Hd=`
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
`,_d=`
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
`,Wd=`
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
})();`,Yd="addEventListener('message', e => { if (e.data === 'lo:theme:dark' || e.data === 'lo:theme:light') document.body.classList.toggle('dark', e.data === 'lo:theme:dark'); });",fs='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',Ud={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row">
    <button class="cc-btn cc-glass primary" type="button">Continue</button>
    <button class="cc-btn cc-glass" type="button">Secondary</button>
    <button class="cc-btn cc-glass round" type="button" aria-label="Confirm">${fs}</button>
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
</div>`},Vd={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row"><button class="cc-btn cc-glass primary" type="button" tabindex="-1">Continue</button><button class="cc-btn cc-glass round" type="button" tabindex="-1" aria-label="Confirm">${fs}</button></div>
  <div class="cc-row"><button class="cc-switch cc-glass" role="switch" type="button" tabindex="-1" aria-checked="true" aria-label="Switch"><span class="cc-knob"></span></button><input class="cc-range" type="range" value="62" tabindex="-1" aria-label="Level" style="width:150px"></div>
</div>`,"orb-slider":'<div class="cc-stage"><div class="cc-slide cc-glass" style="--h:64px;width:280px" aria-hidden="true"><span class="cc-trail"></span><span class="cc-label">slide to enter</span><span class="cc-orb"></span></div></div>'},hs={"crystal-controls":"Crystal Controls","orb-slider":"Orb Slider"},ms={clear:"radial-gradient(90% 80% at 50% 38%,#a9adae,#6c7071 82%)",chrome:"linear-gradient(180deg,#8f9293,#55585a)",porcelain:"radial-gradient(90% 80% at 50% 40%,#aca8a2,#76726c 82%)",gel:"radial-gradient(90% 80% at 50% 40%,#9ea6a4,#646c6a 82%)",bloom:"radial-gradient(90% 80% at 50% 40%,#aaa1a5,#736b6f 82%)"};function er(e,a,{mini:i=!1,dark:t=!1}={}){let l=Fd(a);return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${hs[e]} \xB7 ${l.name} \u2014 The Light Orb</title>
<!-- ${hs[e]} \xB7 ${l.name}. Free for personal and commercial use (The Light Orb licence).
     Change the material by editing the --cc-* variables below. -->
<style>
:root{
  ${Nd(l)}
}${Hd}</style>
</head>
<body${i?` class="mini${t?" dark":""}"`:""}>
${(i?Vd:Ud)[e]}
${i&&ms[l.id]?`<style>body.mini.dark{background:${ms[l.id]}}</style>`:""}
<script>${_d}${i?Wd+Yd:""}<\/script>
</body>
</html>
`}var bs=`
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
`;var vr=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,si=(e,a=0,i=1)=>Math.min(i,Math.max(a,e)),xs=!1,vs=!1;function ys(){if(!xs){let e=document.createElement("style");e.dataset.v3="",e.textContent=bs,document.head.append(e),xs=!0}if(!vs){let e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300&family=Inter:wght@400;500&display=swap",document.head.append(e),vs=!0}}function ws(){let e=[];return{add(a){return e.push(a),a},dispose(){for(;e.length;)try{e.pop()()}catch{}},get size(){return e.length}}}function tr(e,a,i){let t=new IntersectionObserver(a,i);return e.add(()=>t.disconnect()),t}function yr(e,a,i,t,l){a.addEventListener(i,t,l),e.add(()=>a.removeEventListener(i,t,l))}function ks(e,a){let i=a.querySelectorAll(".v3-rv");if(vr){i.forEach(l=>l.classList.add("v3-in"));return}let t=tr(e,l=>l.forEach(c=>{c.isIntersecting&&(c.target.classList.add("v3-in"),t.unobserve(c.target))}),{rootMargin:"0px 0px -8% 0px"});i.forEach(l=>t.observe(l))}var Ss=(e,a,i=!0)=>e(a,"clear",{mini:i}).replace("<style>","<style>html,body{background:transparent!important}");function $s(e,{budget:a,mount:i}){let t=new Map,l=0,c={get size(){return t.size},get spent(){return l},ids:()=>[...t.keys()].map(o=>o.dataset.id??o.dataset.live??o.dataset.kit??"orb"),async activate(o,d=1){if(t.has(o)||l+d>a)return;l+=d,t.set(o,{h:null,cost:d});let p=await i(o),f=t.get(o);if(!f){p?.dispose?.();return}f.h=p,o.classList.add("v3-is-live")},release(o){let d=t.get(o);d&&(d.h?.dispose?.(),t.delete(o),l-=d.cost,o.classList.remove("v3-is-live"))},each(o){t.forEach((d,p)=>o(d.h,p))}};return e.add(()=>{[...t.keys()].forEach(o=>c.release(o))}),c}var Gd={day:"#F4F3EF",gallery:"#E9E8E3",dusk:"#26241F"};function Es(e,{audio:a,footer:i}){ys();let t=ws(),l=($,C)=>{try{a?.sfx?.($,C)}catch{}},c=Gr();e.innerHTML=`<div class="v3 v3-is-dark" data-v3-home>
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
  ${i()}
</div>`;let o=e.querySelector("[data-v3-home]"),d=o.querySelector("#v3-table"),p=o.querySelector("[data-close]");o.querySelector("[data-bigwm]").innerHTML=Pr.replaceAll("wm-counter","wm-counter-v3big"),ks(t,o),t.add(()=>document.body.classList.remove("v3-dark")),yr(t,o,"click",$=>{let C=$.target.closest("[data-jump]");C&&($.preventDefault(),o.querySelector(C.getAttribute("href"))?.scrollIntoView({behavior:vr?"auto":"smooth"}))});let f=1,g=0,h=!1,P=!1,X=()=>{let $=Math.max(f,g);o.style.setProperty("--dark",$.toFixed(3)),o.style.setProperty("--open",f.toFixed(3)),o.classList.toggle("v3-is-dark",$>.5),document.body.classList.toggle("v3-dark",$>.5||h),o.querySelector("[data-bigwm]").style.setProperty("--glow",g.toFixed(2));let C=g>.9;C&&!P&&l("close",.25),P=C},s=()=>{let $=d.getBoundingClientRect();f=1-si((-$.top/$.height-.08)/.5);let C=p.getBoundingClientRect();g=si(1.15-C.top/(innerHeight*.75)),X()};yr(t,e,"scroll",s,{passive:!0}),s();let M=tr(t,$=>$.forEach(C=>{if(!C.isIntersecting)return;let Z=C.target.dataset.light;o.style.setProperty("--tint",Gd[Z]),h=Z==="dusk",o.classList.toggle("v3-is-dusk",h),X()}),{rootMargin:"-50% 0px -50% 0px"});o.querySelectorAll("[data-light]").forEach($=>M.observe($)),o.querySelectorAll(".v3-chap-hd").forEach($=>{let C=tr(t,([Z])=>{Z.isIntersecting&&($.classList.add("v3-in"),C.disconnect())},{threshold:.6});C.observe($)}),o.querySelectorAll(".v3-still").forEach($=>{let C=tr(t,([Z])=>{Z.isIntersecting&&($.classList.add("v3-in"),C.disconnect())},{threshold:.4});C.observe($)});let T={x:innerWidth*.62,y:innerHeight*.38,tx:innerWidth*.62,ty:innerHeight*.38},B=0,I=0;yr(t,window,"pointermove",$=>{$.pointerType!=="touch"&&(T.tx=$.clientX,T.ty=$.clientY,B=performance.now())},{passive:!0}),yr(t,d,"pointerdown",$=>{T.tx=$.clientX,T.ty=$.clientY,B=performance.now(),l("select",.2)});let q=o.querySelector("#v3-h1"),F=[...d.querySelectorAll(".v3-surf")],_=$=>{if(I=requestAnimationFrame(_),f<.02)return;if(performance.now()-B>2600&&!vr){let le=F.map(m=>{let O=m.getBoundingClientRect();return[O.left+O.width*.5,O.top+O.height*.45]}),ee=$/4200%le.length,se=Math.floor(ee),de=ee-se,je=le[se],Ae=le[(se+1)%le.length],N=de*de*(3-2*de);T.tx=je[0]+(Ae[0]-je[0])*N+Math.sin($/1300)*30,T.ty=je[1]+(Ae[1]-je[1])*N+Math.cos($/1700)*24}let C=vr?1:.085;T.x+=(T.tx-T.x)*C,T.y+=(T.ty-T.y)*C,o.style.setProperty("--bx",`${T.x}px`),o.style.setProperty("--by",`${T.y}px`);let Z=q.getBoundingClientRect();q.style.setProperty("--tx",`${T.x-Z.left}px`),q.style.setProperty("--ty",`${T.y-Z.top}px`)};I=requestAnimationFrame(_),t.add(()=>cancelAnimationFrame(I)),yr(t,window,"pointermove",$=>{if(g<.3||vr)return;let C=o.querySelector("[data-bigwm]");C.style.setProperty("--ox",`${($.clientX/innerWidth-.5)*10}px`),C.style.setProperty("--oy",`${($.clientY/innerHeight-.5)*10}px`)},{passive:!0});let V=$s(t,{budget:matchMedia("(pointer: coarse)").matches?4:8,mount:async $=>{if($.dataset.live)return Fr($,$.dataset.live);if($.dataset.kit!==void 0||$.classList.contains("v3-ui")){let C=document.createElement("iframe");return C.title="Crystal Controls, live",C.srcdoc=Ss(er,"crystal-controls"),($.querySelector(".v3-live")??$).prepend(C),{dispose:()=>C.remove()}}if($.dataset.orb!==void 0){let{mountSphere:C}=await import("./chunk-ZL4BVYWZ.js"),Z=C($.querySelector(".v3-live"),"dawn");return{dispose:()=>Z.dispose()}}}}),L=tr(t,$=>$.forEach(C=>C.isIntersecting?V.activate(C.target,C.target.dataset.orb!==void 0?2:1):V.release(C.target)),{rootMargin:"150px"});o.querySelectorAll("[data-live],[data-kit],[data-orb],.v3-surf.v3-ui").forEach($=>L.observe($));let w=null;try{let $=new PerformanceObserver(C=>{let Z=C.getEntries().at(-1);Z&&(w=Z.startTime)});$.observe({type:"largest-contentful-paint",buffered:!0}),t.add(()=>$.disconnect())}catch{}let z=$=>o.querySelector(`[data-proof="${$}"]`),G=()=>{let $=V.size+o.querySelectorAll(".v3-browser iframe").length;z("live").textContent=$,z("liveword").textContent=$===1?"piece running live on this page right now.":"pieces running live on this page right now.",z("video").textContent=o.querySelectorAll("video").length,z("lcp").textContent=w==null?"n/a":(w/1e3).toFixed(2);let C=performance.getEntriesByType("resource").reduce((Z,le)=>Z+(le.transferSize||0),0)+(performance.getEntriesByType("navigation")[0]?.transferSize||0);z("kb").textContent=C?Math.round(C/1024).toLocaleString("en"):"n/a",z("snd").textContent=c.sounds?"On":"Off"};tr(t,([C])=>{C.isIntersecting&&G()}).observe(o.querySelector("[data-creed]"));{let $=c.on?.(G);$&&t.add($)}return window.__v3home={pool:V},t.add(()=>{window.__v3home?.pool===V&&delete window.__v3home}),()=>t.dispose()}var Ts="lightorb:cart",vo=()=>{try{return JSON.parse(localStorage.getItem(Ts))??[]}catch{return[]}},Ls=e=>{try{localStorage.setItem(Ts,JSON.stringify(e))}catch{}li.forEach(a=>a(e))},li=new Set,ea={items:vo,has:e=>vo().some(a=>a.id===e),add(e){let a=vo();a.some(i=>i.id===e.id)||(a.push({...e,at:new Date().toISOString()}),Ls(a))},remove(e){Ls(vo().filter(a=>a.id!==e))},toggle(e){return ea.has(e.id)?(ea.remove(e.id),!1):(ea.add(e),!0)},on(e){return li.add(e),()=>li.delete(e)}};var Hr="Carla Tres Garc\xEDa",Ms="39934017Z",qs="trescarla@gmail.com",Xd="26 October 2026",As="Avenida Duque de Loul\xE9 91, Lisboa, Portugal",Ya=`<a href="mailto:${qs}">${qs}</a>`,Kd={privacy:{kicker:"Privacy",title:"Privacy",lede:"What this site collects, why, and what you can ask for. Short version: very little, and nothing is sold.",body:`
    <h2>Who is responsible</h2>
    <p>The Light Orb is run by ${Hr} (NIF ${Ms}), a sole trader (the data controller). Address: ${As}. Contact: ${Ya}.</p>
    <h2>Visiting the site</h2>
    <p>We count visits with GoatCounter, a privacy-friendly analytics service that sets no cookies and does not track you across sites. It records the page address, referrer, browser type, screen size and an approximate country, without storing your IP address. If your browser sends Do Not Track or Global Privacy Control, nothing is counted at all. Legal basis: our legitimate interest in knowing which pages are used.</p>
    <h2>Early access and the waitlist</h2>
    <p>If you join early access (or the waitlist) we keep your email address, the name you give if any, the date, where you signed up (for example "footer") and your browser language \u2014 nothing else. It is stored in Cloudflare Workers KV, the owner receives one notification email about each new sign-up (sent through Resend), and it is used only to tell you when pieces and Studio updates open. Your display name, designs and saved items stay in your browser. Legal basis: your consent, which you can withdraw at any time by writing to ${Ya}; we then delete your address.</p>
    <h2>Web design inquiries</h2>
    <p>If you send a project through the Web Design form, what you write (your name, email, project details and any optional answers) and the time of sending are delivered as one email to ${Hr}, sent through Resend from our Cloudflare Worker. It is used only to reply to you and discuss your project; it is not added to any mailing list. The Worker does not store the message itself, only a random submission code for one day so the same message is not sent twice. Legal basis: steps you ask us to take before a possible contract. You can ask for the email to be deleted at any time by writing to ${Ya}.</p>
    <h2>Requesting code</h2>
    <p>If you use Request Code on a product we keep your name, email, the product and version you asked about, what you wrote about its use (if anything), your browser language and the time. It is stored in Cloudflare Workers KV before anything else happens, so the request is not lost if an email fails, and it is sent as one email to ${Hr} through Resend. It is used only to answer that request; it is not added to any mailing list. Legal basis: steps you ask us to take before a possible agreement. It is kept no longer than two years, or less if you ask us to delete it by writing to ${Ya}.</p>
    <h2>Studio Membership list</h2>
    <p>If you join the Studio Membership list we keep your email address, the date, your browser language, the version of the consent you ticked and a random code that lets you leave. It is kept apart from every other list and used only to email you when Studio Membership opens. You receive a confirmation email (sent through Resend) with a link to leave; leaving removes your address from this list only. Legal basis: your consent, which you can withdraw at any time through that link or by writing to ${Ya}. It is kept until Studio Membership opens and the announcement is sent, and no longer than two years.</p>
    <h2>Talking with the Orb</h2>
    <p>When you ask the guide Orb a question, the text of the conversation and the page you are on are sent through our Cloudflare Worker to Anthropic, which generates the reply. We do not store or log these conversations. Anthropic processes them as our service provider under its own commercial terms. Please do not share personal information in the conversation.</p>
    <h2>Voice</h2>
    <p>Speech recognition and speech synthesis are done by your browser. Depending on your browser, the recognised audio may be processed by its maker (for example Google or Apple). We never receive or keep your voice.</p>
    <h2>Orb microphone</h2>
    <p>Every version of The Orb can react to sound from your microphone after you turn it on and allow browser access. The sound is analysed locally in your browser, without recording, storage or upload. Input stops when you turn it off, leave the product or hide the page.</p>
    <h2>Stored on your device</h2>
    <p>The site uses your browser's local storage to remember your preferences (sound, voice), saved items, your display name and your designs, plus short-lived session storage for scroll position. This stays on your device; we cannot see it. You can clear it from your browser settings.</p>
    <h2>Providers and transfers</h2>
    <p>GitHub (site hosting), Cloudflare (Worker and waitlist storage), Resend (sign-up notifications, code requests and web design inquiries emailed to the owner, and the Studio Membership confirmation emailed to you), GoatCounter (visit counts) and Anthropic (Orb replies). Some of them are based in the United States; transfers rely on the EU\u2013US Data Privacy Framework or standard contractual clauses.</p>
    <h2>How long</h2>
    <p>Waitlist emails are kept until the pieces open and the announcement is sent, or until you ask us to delete them, and in any case no longer than two years. Visit counts are aggregated.</p>
    <h2>Your rights</h2>
    <p>Under the GDPR you can ask for access, correction, deletion, restriction, portability, or object to processing, and withdraw consent, by writing to ${Ya}. You can also complain to the Spanish Data Protection Agency (AEPD, aepd.es).</p>`},terms:{kicker:"Terms",title:"Terms of use",lede:"The rules for using this website.",body:`
    <h2>Who we are</h2>
    <p>This website is run by ${Hr} (NIF ${Ms}), a sole trader. Address: ${As}. Contact: ${Ya}.</p>
    <h2>Using the site</h2>
    <p>You may browse the site, try the previews, and use Studio and the guide Orb for your own personal or professional exploration. Please do not misuse it: no attempts to break, overload or scrape it, and no unlawful or abusive use of the guide Orb.</p>
    <h2>The guide Orb</h2>
    <p>The Orb's replies are generated automatically and may be incomplete or wrong. They are not professional advice and do not bind us; prices and terms are only those shown on the site.</p>
    <h2>Content and pieces</h2>
    <p>The design, text, images, sounds and code of this site belong to ${Hr} unless stated otherwise. Using the free Orb and any piece you obtain is governed by the <a href="#/licence">licence</a>.</p>
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
    <p>Code is provided as it is. Questions about a use not covered here: ${Ya}.</p>`}},Cs={privacy:"Privacy",terms:"Terms of use",licence:"Licence"};function yo(e,a,i){let t=Kd[i];e.innerHTML=`
    <section class="dest legal">
      <header class="dh"><p class="kicker">${t.kicker}</p><h1>${t.title}</h1><p class="dh-l">${t.lede}</p></header>
      <div class="legal-b">${t.body}
        <p class="note">Last updated ${Xd}. <a href="#/privacy">Privacy</a> \xB7 <a href="#/terms">Terms</a> \xB7 <a href="#/licence">Licence</a></p></div>
    </section>${a.footer()}`}var js={now:"Available now",site:"On this website",dev:"In development",future:"Future capability"},Jd={clear:"Clear glass",chrome:"Liquid metal",porcelain:"Porcelain",bloom:"Bloom",core:"Core",points:"Points of light",glitter:"Glitter",beads:"Beads"},Qd=()=>Object.entries(Jd).map(([e,a])=>{let i=Xt.filter(t=>t.base===e);return{id:i[0].id,name:a,line:i[0].line,also:i.slice(1).map(t=>t.name)}}),Zd={orb:{capabilities:[{status:"now",ask:"Can I move it?",title:"Turns under your hand",line:"Yes. Drag it and it turns with weight and inertia; let go and it settles back into a slow turn of its own."},{status:"now",ask:"What happens if I tap it?",title:"Stirs when tapped",line:"Whatever is inside \u2014 light, cloud, flakes or beads \u2014 moves faster for a moment, then calms down again."},{status:"now",ask:"Does it react to my voice?",title:"Answers your voice",line:"On the product page, turn the microphone on: Bloom moves its cloud with your voice and every other version answers with a gentle pulse. The sound is analysed in your browser only \u2014 never recorded or sent."},{status:"now",ask:"What if I prefer less motion?",title:"Calm when asked",line:"It follows the reduced-motion setting of your device and stays still and quiet."},{status:"site",ask:"Can it talk with me?",title:"A guide you can talk to",line:"The guide Orb on this website answers typed or spoken questions. That guide belongs to this site; it is not part of The Orb you receive."},{status:"dev",ask:"Could it talk with my own visitors?",title:"Conversational",line:"That is the next step: an Orb that holds a conversation on your website. It is being designed and cannot be taken yet."},{status:"future",ask:"Could it do things for them?",title:"Agent",line:"Planned: carrying out simple tasks for a visitor, always with their permission. Not built yet."},{status:"future",ask:"And work with my business information?",title:"Connected",line:"Planned: linking the Orb to your own content and tools. Not built yet."}],delivery:()=>[["Access","Try every version free on the product page \u2014 no sign-up."],["Code",_t?"Source code on request, from the product page. The demo never needs it.":"The embed code is on the product page."],["You receive",sa("orb").receives.join(" \xB7 ")],["Technology","Three.js r186 \xB7 WebGL 2."],["Compatibility","Current Chrome, Safari, Edge and Firefox."],["Requirements","WebGL 2. Without it, show a still image instead."],["Limitations","One per page is the intended use: a live 3D object costs more battery than an image on phones."],["Licence",'Personal and commercial use; no resale of the source. <a href="#/licence">Read the licence</a>']],unverified:["Web component / React / Next.js packages","Conversational, Agent and Connected levels","Studio customisation (Studio is closed)"],families:Qd,versions:()=>Xt.length}},Os=e=>Zd[e]??null;var We=e=>String(e).replace(/[&<>"]/g,a=>`&#${a.charCodeAt(0)};`),ar=(e,a)=>`<h3 class="dk-k dk-r" id="dk-${e.id}"><span>${a}</span>${We(e.kicker)}</h3>${e.statement?`<p class="dk-big dk-r">${We(e.statement)}</p>`:""}`,zs=e=>`<span class="dk-chip dk-chip-${e}">${js[e]}</span>`,Is={hero:(e,a)=>`<div class="dk-hero"><div class="dk-hero-t">${ar(e,a)}${e.body.map((i,t)=>`<p class="dk-p dk-r${t===e.body.length-1&&e.emphasis?" dk-em":""}">${We(i)}</p>`).join("")}</div>
    <figure class="dk-hero-v dk-r"><img src="${e.media.src}" alt="${We(e.media.alt)}" loading="lazy" decoding="async"><figcaption>${We(e.media.caption)}</figcaption></figure></div>`,capabilities:(e,a)=>{let i=["now","site","dev","future"],t=i.flatMap(c=>e.items.filter(o=>o.status===c)),l=i.map(c=>[c,t.filter(o=>o.status===c)]).filter(c=>c[1].length);return`<div class="dk-cx"><div class="dk-cx-l">${ar(e,a)}<p class="dk-p dk-r">${We(e.lead)}</p>
      <ul class="dk-legend dk-legend-row dk-r">${l.map(([c,o])=>`<li>${zs(c)}<span>${o.length}</span></li>`).join("")}</ul></div>
      <div class="dk-chatbox dk-r" data-dk-chat>
        <div class="dk-chat-top"><i class="dk-av" aria-hidden="true"></i><div><b>The Orb</b><span>Illustrated answers \xB7 written in advance</span></div></div>
        <ol class="dk-chat" data-dk-log aria-live="polite" aria-label="Questions and answers about The Orb"></ol>
        <div class="dk-chat-ask"><p>Ask about</p><div class="dk-chat-qs">${t.map((c,o)=>`<button type="button" class="dk-qbtn" data-dk-q="${o}">${We(c.ask)}</button>`).join("")}</div></div>
      </div></div>
      <p class="dk-note dk-r">${We(e.note)}</p>`},demo:(e,a)=>`<div class="dk-demo"><div class="dk-demo-v" data-dk-demo-view><div class="dk-demo-host" data-dk-demo aria-hidden="true"></div><p class="dk-demo-cur" aria-live="polite"><b data-dk-state-name></b><span class="dk-demo-tip"> \xB7 ${e.tip?We(e.tip):""}</span></p></div>
    <div class="dk-demo-l">${ar(e,a)}<p class="dk-p dk-r">${We(e.lead)}</p>${e.states.map(i=>`<button type="button" class="dk-state dk-r" data-dk-state="${i.id}" aria-pressed="false"><b>${We(i.name)}</b><span>${We(i.line)}${i.also?.length?` Also ${We(i.also.join(", "))}.`:""}</span></button>`).join("")}
    ${e.unavailable?`<p class="dk-unavail dk-r">${We(e.unavailable)}</p>`:""}</div></div>`,uses:(e,a)=>`<div class="dk-uses-h">${ar(e,a)}<p class="dk-p dk-r">${We(e.lead)}</p></div>
    <div class="dk-uses">${e.items.map((i,t)=>`<figure class="dk-use dk-r${t===0||i.real?" dk-use-wide":""}${i.real?" dk-use-real":""}">${i.real?`<div class="dk-ex dk-ex-real"><img src="${i.real.img}" alt="${We(i.real.alt)}" loading="lazy" decoding="async"></div>`:ec(i.example)}
      <figcaption><b>${We(i.title)}</b><span>${We(i.line)}</span><em>${i.real?`<a href="${i.real.href}">${We(i.real.label)}</a>`:"Design example \xB7 not an available template"}</em></figcaption></figure>`).join("")}</div>`,facts:(e,a)=>`${ar(e,a)}<dl class="dk-facts">${e.rows.map(([i,t])=>`<div class="dk-f dk-r"><dt>${We(i)}</dt><dd>${t}</dd></div>`).join("")}</dl>`,actions:(e,a)=>`${ar(e,a)}<div class="dk-acts dk-r">${e.actions.map(i=>i.href?`<a class="gb small${i.primary?" primary":""}" href="${i.href}">${We(i.label)}</a>`:`<button class="gb small${i.primary?" primary":""}" type="button" data-dk-act="${i.act}">${We(i.label)}</button>`).join("")}</div>`,custom:(e,a)=>`${ar(e,a)}${e.html}`};function ec(e){return`<div class="dk-ex dk-ex-${e.tone} dk-ex-${e.align||"split"}" aria-hidden="true">
    <div class="dk-ex-nav"><b>${We(e.brand)}</b><span class="dk-ex-links"><span>${e.nav.map(We).join("</span><span>")}</span></span></div>
    <div class="dk-ex-body"><div class="dk-ex-t"><small>${We(e.eyebrow)}</small><strong>${We(e.headline)}</strong><p>${We(e.sub)}</p><i>${We(e.cta)}</i></div>
      <div class="dk-ex-img"><img src="${e.img}" alt="" loading="lazy" decoding="async"></div></div></div>`}var Ps={capabilities(e,a,i){let t=["now","site","dev","future"],l=t.flatMap(h=>a.items.filter(P=>P.status===h)),c=e.querySelector("[data-dk-log]"),o=[...e.querySelectorAll("[data-dk-q]")],d=[],p=()=>{c.scrollTop=c.scrollHeight},f=h=>`<li class="dk-a dk-a-${h.status}"><i class="dk-av" aria-hidden="true"></i><div><p class="dk-a-h"><b>${We(h.title)}</b>${zs(h.status)}</p><p class="dk-a-l">${We(h.line)}</p></div></li>`,g=(h,P)=>{let X=l[h];if(o[h].setAttribute("aria-pressed","true"),o[h].classList.add("is-asked"),c.insertAdjacentHTML("beforeend",`<li class="dk-q"><span>${We(X.ask)}</span></li>`),P||i.reduced){c.insertAdjacentHTML("beforeend",f(X)),p();return}c.insertAdjacentHTML("beforeend",'<li class="dk-a dk-typing" aria-hidden="true"><i class="dk-av"></i><div><span></span><span></span><span></span></div></li>'),p(),d.push(setTimeout(()=>{c.querySelector(".dk-typing")?.remove(),c.insertAdjacentHTML("beforeend",f(X)),p()},650))};return o.forEach((h,P)=>{h.setAttribute("aria-pressed","false"),h.addEventListener("click",()=>{c.querySelector(".dk-typing")||g(P)})}),g(0,!0),()=>d.forEach(clearTimeout)},demo(e,a,i){let t=e.querySelector("[data-dk-demo]"),l=e.querySelector("[data-dk-demo-view]"),c=e.querySelector("[data-dk-state-name]"),o=[...e.querySelectorAll("[data-dk-state]")],d=i.demos[a.demo],p=null,f="",g=!1,h=(M,{force:T=!1}={})=>{M!==f&&(!T&&!g||(f=M,p?.show(M),c.textContent=a.states.find(B=>B.id===M)?.name??"",o.forEach(B=>B.setAttribute("aria-pressed",String(B.dataset.dkState===M)))))},P=new IntersectionObserver(([M])=>{g=M.intersectionRatio>.6,g&&s()},{threshold:[0,.6,1]});P.observe(l);let X=new IntersectionObserver(M=>{M.some(T=>T.isIntersecting)&&!p&&(p=d.mount(t,{reduced:i.reduced,initial:f||a.states[0].id}),X.disconnect())},{rootMargin:"400px"});X.observe(t),h(a.states[0].id,{force:!0}),o.forEach(M=>{M.addEventListener("click",()=>h(M.dataset.dkState,{force:!0})),M.addEventListener("pointerenter",T=>{T.pointerType==="mouse"&&h(M.dataset.dkState,{force:!0})})});function s(){if(i.reduced)return;let M=i.viewport(),T=M.top+M.height*.55,B=null,I=1e9;for(let q of o){let F=q.getBoundingClientRect();if(F.bottom<M.top||F.top>M.top+M.height)continue;let _=Math.abs(F.top+F.height/2-T);_<I&&(I=_,B=q)}B&&h(B.dataset.dkState)}return i.onScroll(s),()=>{P.disconnect(),X.disconnect(),p?.dispose()}}};function Ds(e){let a=String(e.blocks.length).padStart(2,"0");return`<section class="dk dk-surf-${e.surface||"stone"}" id="pd-more" aria-label="${We(e.name)} \u2014 the full story">
  <div class="dk-intro"><p class="dk-eyebrow">The full story</p><h2 class="dk-title">${We(e.name)}, in detail.</h2></div>
  <div class="dk-ws">
    <div class="dk-mon">
      <div class="dk-chrome" aria-hidden="true"><span class="dk-dots"><i></i><i></i><i></i></span><span class="dk-navi"><svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg><svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></span><span class="dk-url"><svg viewBox="0 0 24 24"><rect x="6" y="11" width="12" height="9" rx="2"/><path d="M9 11V8a3 3 0 0 1 6 0v3"/></svg><span>thelightorb.com/products/${We(e.id)}</span></span><svg class="dk-rel" viewBox="0 0 24 24"><path d="M19 12a7 7 0 1 1-2.05-4.95M19 5v4h-4"/></svg></div>
      <div class="dk-screen" data-dk-screen tabindex="0" role="region" aria-label="${We(e.name)} story. Scrolls on its own; at the end, scrolling continues down the page.">
        <header class="dk-bar"><span class="dk-bar-n">${We(e.name)}</span><span class="dk-bar-cur" data-dk-cur></span><span class="dk-bar-s" aria-hidden="true"><i data-dk-progress></i></span><span class="dk-bar-c"><b data-dk-num>01</b> / ${a}</span></header>
        ${e.blocks.map((i,t)=>`<section class="dk-sec dk-t-${i.type}" data-dk-block="${t}" aria-labelledby="dk-${i.id}">${Is[i.type](i,String(t+1).padStart(2,"0"))}</section>`).join("")}
        <p class="dk-end">End of the story \u2014 keep scrolling to continue.</p>
      </div>
      <p class="dk-hint" data-dk-hint aria-hidden="true">Scroll inside <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></p>
    </div>
  </div>
</section>`}function Bs(e,{story:a,reduced:i,demos:t,act:l={}}){let c=e.querySelector(".dk");if(!c)return{dispose(){}};let o=c.querySelector("[data-dk-screen]"),d=c.querySelector("[data-dk-progress]"),p=c.querySelector("[data-dk-num]"),f=c.querySelector("[data-dk-cur]"),g=()=>getComputedStyle(o).overflowY==="auto",h=e.closest("main")??e,P=[],X=[],s=()=>Math.max(0,document.querySelector(".hd")?.getBoundingClientRect().bottom??0),M=()=>c.style.setProperty("--dk-top",g()?`${Math.round(c.querySelector(".dk-bar")?.getBoundingClientRect().height??40)}px`:`${Math.round(s())+8}px`);M();let T=()=>{if(g()){let C=o.getBoundingClientRect();return{top:C.top+48,height:C.height-48}}let G=c.querySelector("[data-dk-demo-view]"),$=s()+(G?G.getBoundingClientRect().height:0);return{top:$,height:innerHeight-$}},B={reduced:i,demos:t,viewport:T,onScroll:G=>X.push(G)};c.querySelectorAll("[data-dk-block]").forEach(G=>{let $=a.blocks[+G.dataset.dkBlock],C=Ps[$.type]?.(G,$,B);C&&P.push(C)});let I,q=()=>{if(I?.disconnect(),i){c.classList.add("dk-still");return}I=new IntersectionObserver(G=>G.forEach($=>{$.isIntersecting&&($.target.classList.add("in"),I.unobserve($.target))}),{root:g()?o:null,rootMargin:"0px 0px -6% 0px",threshold:.05}),c.querySelectorAll(".dk-r:not(.in)").forEach(G=>I.observe(G))};q();let F=[...c.querySelectorAll("[data-dk-block]")],_=0,V=()=>{_||(_=requestAnimationFrame(()=>{if(_=0,g()){let Z=o.scrollTop/Math.max(1,o.scrollHeight-o.clientHeight);d.style.transform=`scaleX(${Z.toFixed(3)})`,c.classList.toggle("dk-moved",o.scrollTop>24)}let G=T(),$=G.top+G.height*.3,C=0;F.forEach((Z,le)=>{Z.getBoundingClientRect().top<=$&&(C=le)}),p.textContent=String(C+1).padStart(2,"0"),f.textContent=a.blocks[C].kicker,X.forEach(Z=>Z())}))};o.addEventListener("scroll",V,{passive:!0}),h.addEventListener("scroll",V,{passive:!0}),addEventListener("scroll",V,{passive:!0});let L=()=>{M(),V()};addEventListener("resize",L);let w=matchMedia("(min-width: 761px) and (pointer: fine)"),z=()=>{q(),L()};return w.addEventListener("change",z),c.querySelectorAll("[data-dk-act]").forEach(G=>G.addEventListener("click",()=>l[G.dataset.dkAct]?.())),V(),P.push(()=>{I?.disconnect(),cancelAnimationFrame(_),o.removeEventListener("scroll",V),h.removeEventListener("scroll",V),removeEventListener("scroll",V),removeEventListener("resize",L),w.removeEventListener("change",z)}),{dispose:()=>P.forEach(G=>G())}}var Rs=`url("data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='520' height='520'><filter id='a'><feTurbulence type='fractalNoise' baseFrequency='.006' numOctaves='4' seed='7'/><feColorMatrix values='0 0 0 0 .55  0 0 0 0 .53  0 0 0 0 .5  0 0 0 .55 0'/></filter><filter id='b'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' seed='3'/><feColorMatrix values='0 0 0 0 .4  0 0 0 0 .38  0 0 0 0 .36  0 0 0 .16 0'/></filter><rect width='100%' height='100%' filter='url(#a)' opacity='.34'/><rect width='100%' height='100%' filter='url(#b)'/></svg>")}")`,Fs=`
/* \u2500\u2500 Desk Story (desk/desk.js) \u2500\u2500 */
.dk{--stone:#ece8e2;--stone-2:#e2ddd5;--frame:#3d3c39;--frame-2:#2b2a28;--alu:#d9d6d0;--alu-2:#b9b5ae;--scr:#f8f7f4;--ink:#1c1d1c;--mut:#5c5f5d;--faint:#8a8c8a;--rule:rgba(0,0,0,.07);--red:#a50d2f;--dk-top:72px;
  position:relative;isolation:isolate;margin-top:clamp(48px,6vw,88px);padding:clamp(64px,8vw,112px) 16px clamp(72px,8vw,120px);scroll-margin-top:72px;color:var(--ink)}
.dk::before{content:"";position:absolute;inset:0;z-index:-1;background:${Rs},linear-gradient(180deg,#f0ede8,var(--stone) 40%,var(--stone-2));background-size:520px 520px,auto;
  -webkit-mask-image:linear-gradient(180deg,transparent,#000 140px,#000 calc(100% - 260px),transparent);mask-image:linear-gradient(180deg,transparent,#000 140px,#000 calc(100% - 260px),transparent)}
html[data-theme=dark] .dk{--stone:#2a2927;--stone-2:#21201e;--frame:#111;--frame-2:#0a0a0a;--alu:#4a4845;--alu-2:#353432;--scr:#171817;--ink:#ecebe8;--mut:#a7a9a6;--faint:#7a7c79;--rule:rgba(255,255,255,.08);--red:#a50d2f}
html[data-theme=dark] .dk::before{background:${Rs},linear-gradient(180deg,#2e2d2b,var(--stone) 40%,var(--stone-2));background-size:520px 520px,auto}
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
.dk-hero-v figcaption{margin-top:10px;font-size:12px;color:var(--faint)}
/* 02 capabilities: statement left (pinned while the list moves), groups by status right */
.dk-two{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(28px,5vw,72px);align-items:start}
.dk-two-l{position:sticky;top:72px}
.dk-legend{list-style:none;margin:8px 0 0;padding:0;display:grid;gap:8px}.dk-legend li{display:flex;align-items:center;gap:10px;font-size:13px;color:var(--faint);font-variant-numeric:tabular-nums}
.dk-chip{display:inline-block;white-space:nowrap;font:500 10.5px/1 var(--font);letter-spacing:.06em;text-transform:uppercase;padding:5px 8px;border-radius:999px;box-shadow:inset 0 0 0 1px currentColor}
.dk-chip-now{color:#2f6b4f}.dk-chip-site{color:#4b5a73}.dk-chip-dev{color:#8a6a2b}.dk-chip-future{color:var(--faint)}
html[data-theme=dark] .dk-chip-now{color:#8fd0ad}html[data-theme=dark] .dk-chip-site{color:#a9b9d6}html[data-theme=dark] .dk-chip-dev{color:#e0bd78}
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
.dk-av{display:block;width:26px;height:26px;border-radius:50%;flex:none;background:radial-gradient(circle at 36% 30%,#fff,#e6e5e1 48%,#c9c8c3);box-shadow:inset 0 0 0 1px rgba(0,0,0,.08),0 4px 10px -6px rgba(0,0,0,.35)}
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
  .dk{padding:56px 12px 72px}
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
`;var Ns=e=>({mount(a,{reduced:i,initial:t}){let l=e(a,t,{reduced:i,interactive:!0});return{show:c=>l.setKind(c),dispose:()=>l.dispose()}}});function Hs(){let e=Os("orb"),a=e.families();return{id:"orb",name:"The Orb",surface:"stone",blocks:[{type:"hero",id:"meet",kicker:"Meet The Orb",statement:"A sphere of glass and light, made to live in your page.",body:["The Orb is a real-time 3D object for websites. It is drawn live in the visitor\u2019s browser \u2014 not a video loop, not a still image \u2014 so it answers every gesture and keeps a slow, natural motion of its own.",`${e.versions()} versions in ${a.length} material families, from clear glass to liquid metal and porcelain, all drawn by one lightweight renderer.`,"Most 3D on the web is a picture you look at. The Orb is an object you touch."],emphasis:!0,media:{src:"./media/products/orb-original.jpg",alt:"The Orb in clear glass",caption:"The Orb \xB7 Clear"}},{type:"capabilities",id:"do",kicker:"Interaction & capabilities",statement:"Ask it what it can do.",lead:"Every answer carries its real status. Only what you can try today is marked available; everything else says plainly that it is still to come.",items:e.capabilities,note:"An illustrated conversation: the questions are examples. Conversational, Agent and Connected cannot be taken yet."},{type:"demo",id:"mat",demo:"sphere",kicker:"Materials & appearance",statement:`${e.versions()} versions in ${a.length} families.`,lead:"Choose a family \u2014 or simply keep scrolling \u2014 and the Orb beside it changes, live. Every family is drawn by the same renderer, so you can compare them side by side before you choose.",tip:"drag to turn",states:a,unavailable:"Shaping your own material, light and movement in Studio is not available yet \u2014 Studio is coming soon."},{type:"uses",id:"use",kicker:"In a real website",statement:"Built into this website.",lead:"The Light Orb is designed around this object: it greets you on the home page, guides you through the site and answers your questions. The opening of this website is available as a template.",items:[{title:"This website",line:"The Orb as host: a quiet greeting, the quotation and the four destinations.",real:{img:"./media/templates/the-light-orb.cover.jpg",alt:"The Light Orb website opening",href:"#/templates/the-light-orb",label:"See the template"}}]},{type:"facts",id:"get",kicker:"What you receive",statement:"Clear terms, nothing implied.",rows:e.delivery()},{type:"actions",id:"next",kicker:"Explore further",statement:"Turn it, ask for the code \u2014 or have a website made around it.",actions:[{act:"request",label:"Request code",primary:!0},{act:"top",label:"Back to The Orb"},{href:"#/products",label:"All products"},{href:"#/design",label:"Custom web design"}]}]}}var _s={orb:Hs},tc={},wr=e=>_s[e]?tc[e]??=_s[e]():null;var Re=":root .info-dark.info-dark",Ws=`
${Re}{--ink:#eeefec;--soft:#c3c6c3;--muted:#a3a6a3;--faint:#8b8e8c;--line:rgba(255,255,255,.1);--hair:rgba(255,255,255,.1);--dark-ink:#eeefec;
  color:var(--ink);background:linear-gradient(180deg,#1a1b1c 0%,#141516 55%,#111213 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.08),inset 0 0 0 1px rgba(255,255,255,.06),0 30px 60px -36px rgba(0,0,0,.55);color-scheme:dark}
/* product pages: the column becomes the panel */
${Re}.pd-info{padding:clamp(22px,2.4vw,34px);border-radius:24px;align-self:start}
${Re} h1,${Re} h2{color:var(--ink)}
${Re} .kicker,${Re} .lbl,${Re} .var-line,${Re} .facts dt,${Re} .acc p,${Re} .studio-lock small{color:var(--muted)}
${Re} .lede,${Re} .facts dd{color:var(--soft)}
${Re} a:not(.gb){color:inherit}
${Re} .facts,${Re} .acc,${Re} .facts.ds-facts{border-top-color:var(--line)}
/* buttons: graphite glass with a crisp top rim; the primary is the light one (as in the dark theme) */
${Re} .gb:not(.primary){color:var(--ink)!important;background:linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,.04) 55%,rgba(255,255,255,.07))!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.28),inset 0 0 0 1px rgba(255,255,255,.1),0 1px 0 rgba(0,0,0,.6),0 8px 18px -10px rgba(0,0,0,.8)!important}
${Re} .gb:not(.primary):hover{background:linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,.06) 55%,rgba(255,255,255,.09))!important}
${Re} .gb.primary{color:#141516!important;background:linear-gradient(180deg,#f6f7f5,#e1e3e0)!important;box-shadow:inset 0 1px 1px #fff,0 8px 22px -10px rgba(0,0,0,.7)!important}
${Re} .gb::before,${Re} .gb::after{display:none}
${Re} .gb[disabled]{opacity:.5}
/* versions, environments: the segbar and its single travelling indicator */
${Re} .segbar{background:rgba(0,0,0,.35)!important;box-shadow:inset 0 1px 2px rgba(0,0,0,.5),inset 0 0 0 1px rgba(255,255,255,.06)!important}
${Re} .segbar .pill{color:var(--muted)}
${Re} .segbar .pill[aria-checked=true],${Re} .segbar .pill[aria-pressed=true],${Re} .segbar .pill.ix-cand,${Re} .segbar .pill:hover{color:var(--ink)}
${Re} .ix-sel{background:linear-gradient(180deg,rgba(255,255,255,.2),rgba(255,255,255,.07) 55%,rgba(255,255,255,.12));box-shadow:inset 0 1px .5px rgba(255,255,255,.35),inset 0 0 0 .5px rgba(255,255,255,.14),0 6px 14px -8px rgba(0,0,0,.8)}
${Re} .ix-sel::after{opacity:calc(.12 + var(--ix-on,0) * .3)}
/* cards inside the panel */
${Re} .studio-lock{background:rgba(255,255,255,.05)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)!important;color:var(--ink)}
${Re} .free-c{background:rgba(0,0,0,.35)!important;color:#dfe1de;box-shadow:inset 0 0 0 1px rgba(255,255,255,.07)!important}
${Re} .gi,${Re} input:not([type=range]):not([type=checkbox]):not([type=radio]),${Re} textarea,${Re} select{color:var(--ink);background:rgba(255,255,255,.06)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)!important;border-color:rgba(255,255,255,.14)}
${Re} input::placeholder,${Re} textarea::placeholder{color:var(--faint)}
${Re} input[type=range],${Re} input[type=checkbox]{accent-color:#e9eae8}
${Re} :focus-visible{outline-color:#eeefec}
${Re} .obj-sw button[aria-pressed=true]{outline-color:#eeefec}
${Re} .obj-sw button{box-shadow:0 0 0 1px rgba(255,255,255,.14),inset 0 -3px 6px rgba(0,0,0,.25),inset 0 2px 3px rgba(255,255,255,.5)}
`;var ac="https://thelightorb.com",di=typeof document<"u"&&!!document.querySelector('meta[name="lo-entries"]')&&location.hostname!=="carlatres3.github.io",Ys="The Light Orb is a creative digital design studio creating interactive digital products, website templates and custom web experiences.",Us={products:"Products",templates:"Templates",design:"Web Design",about:"About",studio:"Studio",sound:"Sound",changelog:"What\u2019s new"},rc=e=>e.toLowerCase().replace(/\s+/g,"-"),oc=e=>Fa.find(a=>a.id===e)?.line;function Vs(e){let a=/^#\/([^?]*)(?:\?(.*))?$/.exec(e||"#/");if(!a)return null;let i=a[1].split("/").filter(Boolean),t=new URLSearchParams(a[2]||"");if(!i.length)return a[2]?null:{path:"/",name:"The Light Orb",desc:Ys};let[l,c]=i;if(l==="products"&&!c&&t.has("obj")&&[...t.keys()].length===1){let o=Br.find(d=>d.id===t.get("obj"));return o&&{path:`/products/${rc(o.name)}`,name:o.name,desc:o.line}}if(a[2]||i.length>2)return null;if(!c)return Us[l]?{path:`/${l}`,name:Us[l],desc:oc(l)||Ys}:null;if(l==="products"){let o=Qr.find(d=>d.id===c)??zr.find(d=>d.id===c);return o&&{path:`/products/${c}`,name:o.name,desc:o.line}}if(l==="templates"){let o=Lt.find(d=>d.id===c);return o&&{path:`/templates/${c}`,name:o.label??o.name,desc:o.line}}return null}function ci(e){if(!(!di||!e))for(let a of e.querySelectorAll('a[href^="#/"]')){let i=Vs(a.getAttribute("href"));i&&(a.dataset.hash=a.getAttribute("href"),a.setAttribute("href",i.path))}}function pi(e){if(!di)return;let a=Vs(e);if(!a)return;let i=a.path==="/"?"The Light Orb":`${a.name} \xB7 The Light Orb`,t=ac+(a.path==="/"?"/":a.path);document.title=i;let l=(c,o,d)=>{let p=document.querySelector(c);p&&d&&p.setAttribute(o,d)};l('meta[name="description"]',"content",a.desc),l('link[rel="canonical"]',"href",t),l('meta[property="og:url"]',"content",t),l('meta[property="og:title"]',"content",i),l('meta[property="og:description"]',"content",a.desc)}di&&addEventListener("click",e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let a=e.target.closest?.("a[data-hash]");!a||a.target&&a.target!=="_self"||(e.preventDefault(),location.hash!==a.dataset.hash&&(location.hash=a.dataset.hash))});var ca=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function ui(e){let a=[],i=t=>[...t.childNodes].forEach(l=>{if(l.nodeType===3){let c=document.createDocumentFragment();l.textContent.split(/(\s+)/).forEach(o=>{if(!o)return;if(/^\s+$/.test(o)){c.append(" ");return}let d=document.createElement("span");d.className="tm-w";let p=document.createElement("span");p.className="tm-i",p.textContent=o,d.append(p),c.append(d),a.push(d)}),l.replaceWith(c)}else l.nodeType===1&&i(l)});return i(e),a.forEach((t,l)=>t.style.setProperty("--k",l)),a}var Gs="aeosnrtlcdmuhgpbfy\xB7\u2014/\u25E6";function Xs(e,{duration:a=620,delay:i=0}={}){let t=e.textContent;if(!t.trim()||t.length>40||ca())return;e.setAttribute("aria-label",t);let l=[...t].map((p,f)=>({c:p,i:f,at:p===" "?0:i+f/t.length*a*.7+Math.random()*a*.3})),c=performance.now(),o=0,d=p=>{let f=p-c,g=!0;e.textContent=l.map(h=>f>=h.at?h.c:(g=!1,f<i?"\u2007":Gs[Math.random()*Gs.length|0])).join(""),!g&&e.isConnected?o=requestAnimationFrame(d):e.textContent=t};return o=requestAnimationFrame(d),()=>{cancelAnimationFrame(o),e.textContent=t}}function gi(e,a,{ratio:i=.35,margin:t="0px"}={}){if(!("IntersectionObserver"in window))return a(e),()=>{};let l=new IntersectionObserver(c=>{c.some(o=>o.isIntersecting)&&(l.disconnect(),a(e))},{threshold:i,rootMargin:t});return l.observe(e),()=>l.disconnect()}function wo(e,a,{speed:i=1,onParagraph:t=()=>{},onDone:l=()=>{}}={}){let c=document.createElement("div");c.className="tm-sr",c.innerHTML=a.map($=>`<p>${$.html}</p>`).join(""),c.querySelectorAll("a").forEach($=>{$.tabIndex=-1});let o=document.createElement("div");o.className="tm-live",o.setAttribute("aria-hidden","true");let d=document.createElement("span");d.className="tm-caret";let p=document.createElement("div");p.className="tm-ghost",p.setAttribute("aria-hidden","true"),p.innerHTML=c.innerHTML,p.querySelectorAll("a").forEach($=>{$.tabIndex=-1}),e.replaceChildren(c,p,o);let f,g=new Promise($=>{f=$}),h=0,P=0,X=!1,s=()=>{X||(X=!0,clearTimeout(h),cancelAnimationFrame(P),o.innerHTML=a.map($=>`<p>${$.html}</p>`).join(""),o.lastElementChild?.append(d),d.classList.add("rest"),setTimeout(()=>d.classList.add("gone"),2600),c.remove(),o.removeAttribute("aria-hidden"),o.querySelectorAll("a").forEach($=>$.removeAttribute("tabindex")),e.classList.add("tm-done"),l(),f())};if(ca())return s(),d.remove(),{skip(){},done:g};let M=a.reduce(($,C)=>$+C.text.length,0),T=[],B=300,I=0;a.forEach(($,C)=>{C&&(B+=C===1?320:220),T.push({at:B,para:C}),($.runs??[{t:"text",s:$.text}]).forEach(Z=>{T.push({at:B,run:Z}),[...Z.s].forEach((le,ee)=>{let se=Z.s[ee+1]??"",de=10*(.6+Math.random()*.8);/[a-z]/i.test(le)&&/[a-z]/i.test(se)&&(de*=.8),le===","&&(de+=80),".?!".includes(le)&&(de+=150),le==="\u2014"&&(de+=50),de*=++I>M*.35?.5:1,T.push({at:B,ch:le}),B+=de})})});let q=null,F=null,_=0,V=0,L=0,w=$=>{if($.para!==void 0){q=document.createElement("p"),o.append(q),q.append(d),t($.para);return}if($.run){if($.run.t==="a"){let C=document.createElement("a");C.href=$.run.href,C.tabIndex=-1,q.insertBefore(C,d),F=C.appendChild(document.createTextNode(""))}else F=q.insertBefore(document.createTextNode(""),d);return}F.data+=$.ch,L=$.at},z=$=>{if(X)return;V||(V=$);let C=($-V)*i;for(;_<T.length&&T[_].at<=C;)w(T[_++]);if(d.classList.toggle("rest",C-L>120),_>=T.length){h=setTimeout(s,350);return}P=requestAnimationFrame(z)};d.classList.add("rest"),o.append(d),P=requestAnimationFrame(z);let G=s;return{skip:()=>{cancelAnimationFrame(P),G()},done:g}}var Ks=`
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
`;var Zs=["Personal Website / Portfolio","Business Website","Online Store","Landing Page","Interactive Experience","Something Else","I\u2019m Not Sure Yet"],ic=["Present a business","Display products","Sell products online","Accept bookings or inquiries","Showcase creative work","Include interactive experiences","Something else","I need advice"],nc=["As soon as possible","Within 1\u20133 months","Flexible","Not sure yet"],Kt={name:100,email:254,idea:5e3,ideaMin:20,design:2e3,refs:2e3,budget:200},fi="lo:inquiry",sc=[["Visual identity","A look for the website, made from your brand, your references and what you love."],["Structure & UX/UI","How the site is organised, how it reads and how it feels to move through."],["Responsive layouts","Compositions designed for phones, tablets and large screens \u2014 not shrunk."],["Interaction & motion","Components, animations and small moments that make it feel alive."],["Online stores","Product catalogues, product presentation and setup, selling online."],["Portfolios & business sites","Creative portfolios, studios, shops, services, landing pages."],["Experimental experiences","Materials, light, sound and 3D, when the idea asks for it."],["Integrations","Other tools the project needs, agreed together."]],lc=[["Your Idea","Tell me what you want to create, what you like, and what matters to your project."],["The Direction","We define the visual approach, structure, functionality and scope."],["Design & Development","I turn the agreed concept into a fully designed, functional digital experience."],["The Final Experience","The website is reviewed, refined and prepared for launch."]],Ma=e=>String(e??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),el=()=>{try{return JSON.parse(sessionStorage.getItem(fi))??{}}catch{return{}}},dc=e=>{try{sessionStorage.setItem(fi,JSON.stringify(e))}catch{}},cc=()=>{try{sessionStorage.removeItem(fi)}catch{}},Js=()=>crypto.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,12)}`;function Qs(e){let a={};String(e.name??"").trim()?e.name.trim().length>Kt.name&&(a.name=`Please keep your name under ${Kt.name} characters.`):a.name="Please tell me your name.",ba(String(e.email??""))||(a.email="Please enter a valid email address, so I can reply."),Zs.includes(e.type)||(a.type="Choose the option closest to what you have in mind.");let i=String(e.idea??"").trim();i.length<Kt.ideaMin?a.idea="Tell me a little about your idea \u2014 a few sentences are enough.":i.length>Kt.idea&&(a.idea=`Please keep it under ${Kt.idea} characters.`);for(let t of["design","refs","budget"])String(e[t]??"").length>Kt[t]&&(a[t]=`Please keep this under ${Kt[t]} characters.`);return a}var hi=(e,a,i,t)=>a.map((l,c)=>{let o=i==="radio"?t===l:(t??[]).includes(l);return`<label class="ch"><input type="${i}" name="${e}" value="${Ma(l)}"${o?" checked":""}${i==="radio"&&e==="type"&&c===0?" required":""}><span>${Ma(l)}</span></label>`}).join("");function pc(e){let a=!!Ga;return`<form class="iq" data-iq novalidate aria-describedby="iq-privacy">
    <div class="iq-row2">
      <label class="fl"><span>Name</span><input class="gi" name="name" autocomplete="name" maxlength="${Kt.name}" required aria-required="true" value="${Ma(e.name)}"><em class="err" data-err="name" id="e-name"></em></label>
      <label class="fl"><span>Email</span><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" maxlength="${Kt.email}" required aria-required="true" value="${Ma(e.email)}"><em class="err" data-err="email" id="e-email"></em></label>
    </div>
    <fieldset class="iq-set" data-set="type"><legend>What are you looking to create?</legend>
      <div class="chs" role="radiogroup" aria-required="true">${hi("type",Zs,"radio",e.type)}</div><em class="err" data-err="type" id="e-type"></em></fieldset>
    <label class="fl"><span>Tell me about your idea</span>
      <textarea class="gi iq-ta" name="idea" rows="7" maxlength="${Kt.idea}" required aria-required="true" placeholder="What is it, who is it for, what would make it feel right?">${Ma(e.idea)}</textarea>
      <span class="iq-meta"><em class="err" data-err="idea" id="e-idea"></em><small data-count></small></span></label>
    <details class="iq-more" data-more${e.more?" open":""}><summary><span>A little more, if you like</span><small>Optional \xB7 design, references, timing, budget</small></summary>
      <div class="iq-more-b">
        <label class="fl"><span>What kind of design do you like?</span><textarea class="gi" name="design" rows="3" maxlength="${Kt.design}" placeholder="Colours, materials, styles, moods\u2026">${Ma(e.design)}</textarea><em class="err" data-err="design"></em></label>
        <label class="fl"><span>Any websites or references you love?</span><textarea class="gi" name="refs" rows="3" maxlength="${Kt.refs}" placeholder="Links, or a few words about them">${Ma(e.refs)}</textarea><em class="err" data-err="refs"></em></label>
        <fieldset class="iq-set"><legend>What should your website do?</legend><div class="chs">${hi("functions",ic,"checkbox",e.functions)}</div></fieldset>
        <fieldset class="iq-set"><legend>When would you like to launch?</legend><div class="chs" role="radiogroup">${hi("timeline",nc,"radio",e.timeline)}</div></fieldset>
        <label class="fl"><span>Do you have a budget in mind? <i class="opt">Optional \u2014 a rough idea is fine</i></span><input class="gi" name="budget" maxlength="${Kt.budget}" value="${Ma(e.budget)}"><em class="err" data-err="budget"></em></label>
      </div></details>
    <label class="iq-hp" aria-hidden="true">Leave this empty<input name="website" tabindex="-1" autocomplete="off"></label>
    <div class="iq-send"><button class="gb primary" type="submit" data-send${a?"":" disabled"}><span>Send My Project</span></button>
      <p class="iq-status" data-status role="status" aria-live="polite">${a?"":"Project inquiries open soon \u2014 nothing typed here is sent yet."}</p></div>
    <p class="note" id="iq-privacy">What you write here is sent by email to Carla only, to reply to you and talk about your project. It is not added to any mailing list. See <a href="#/privacy">privacy</a>.</p>
  </form>`}var uc=`<div class="iq-done" role="status" tabindex="-1" data-done><span class="iq-done-orb" aria-hidden="true"></span>
  <p class="kicker">Sent</p><h3>Your idea is on its way.</h3><p>Thank you for sharing it \u2014 I\u2019ll be in touch soon.</p>
  <div class="acts eq"><a class="tl" href="#/templates">Explore Templates</a><a class="tl" href="#/products">Discover Products</a></div></div>`;function gc(e,{audio:a}){let i=e.querySelector("[data-iq]");if(!i)return;let t=i.querySelector("[data-status]"),l=i.querySelector("[data-send]"),c=i.querySelector("[data-count]"),o=i.elements.idea,d=Date.now(),p=el().key||Js(),f=!1,g=()=>({name:i.elements.name.value,email:i.elements.email.value,type:i.querySelector("[name=type]:checked")?.value??"",idea:o.value,design:i.elements.design.value,refs:i.elements.refs.value,functions:[...i.querySelectorAll("[name=functions]:checked")].map(s=>s.value),timeline:i.querySelector("[name=timeline]:checked")?.value??"",budget:i.elements.budget.value}),h=()=>dc({...g(),key:p,more:i.querySelector("[data-more]").open}),P=()=>{let s=o.value.trim().length;c.textContent=s?`${s} / ${Kt.idea}`:""},X=s=>{i.querySelectorAll("[data-err]").forEach(M=>{let T=M.dataset.err,B=s[T]??"";M.textContent=B;let I=T==="type"?i.querySelector("[data-set=type]"):i.elements[T];I&&(I.toggleAttribute("aria-invalid",!!B),I.setAttribute&&(B&&M.id?I.setAttribute("aria-describedby",M.id):I.removeAttribute?.("aria-describedby")))})};P(),i.addEventListener("input",s=>{h(),s.target===o&&P();let M=s.target.name,T=i.querySelector(`[data-err="${M}"]`);if(T?.textContent&&!Qs(g())[M]){T.textContent="";let B=M==="type"?i.querySelector("[data-set=type]"):s.target;B.removeAttribute("aria-invalid"),B.removeAttribute("aria-describedby")}}),i.querySelector("[data-more]").addEventListener("toggle",s=>{h(),a?.sfx(s.target.open?"open":"close")}),i.addEventListener("submit",async s=>{if(s.preventDefault(),f||!Ga)return;let M=g(),T=Qs(M);X(T);let B=Object.keys(T)[0];if(B){t.textContent="A few details are missing \u2014 see the highlighted fields.",(B==="type"?i.querySelector("[name=type]"):i.elements[B])?.focus(),["design","refs","budget"].includes(B)&&(i.querySelector("[data-more]").open=!0);return}f=!0,l.disabled=!0,l.setAttribute("aria-busy","true"),i.setAttribute("aria-busy","true"),t.textContent="Sending\u2026";let I=!1,q="";try{let F=await fetch(Ga,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({...M,website:i.elements.website.value,key:p,elapsed:Date.now()-d,lang:(navigator.language||"en").slice(0,5)})}),_=await F.json().catch(()=>({}));I=F.ok&&_?.ok===!0,I||(q=F.status===429?"Your message was not sent: too many tries for now. Please wait a little and try again \u2014 everything you wrote is still here.":F.status===400&&_?.field?"Your message was not sent: please check the highlighted field.":"Your message was not sent. Please try again in a moment, or write to trescarla@gmail.com \u2014 everything you wrote is still here."),!I&&_?.field&&X({[_.field]:"Please check this field."})}catch{q="Your message was not sent \u2014 the connection failed. Please try again; everything you wrote is still here."}if(f=!1,l.removeAttribute("aria-busy"),i.removeAttribute("aria-busy"),I){cc(),p=Js(),_e("inquiry_sent",{type:M.type}),a?.sfx("confirm");let F=document.createElement("div");F.innerHTML=uc;let _=F.firstElementChild;i.replaceWith(_),_.focus({preventScroll:!0}),_.scrollIntoView({block:"center",behavior:ca()?"auto":"smooth"});return}l.disabled=!1,t.textContent=q,t.setAttribute("role","alert"),_e("inquiry_failed")})}function hc(e,a){let i=a.querySelector(".hx-h");if(ui(i),a.querySelectorAll("[data-decrypt]").forEach((c,o)=>Xs(c,{delay:120+o*900})),requestAnimationFrame(()=>requestAnimationFrame(()=>a.classList.add("tm-on"))),ca())return;let t=0,l=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>{let c=a.getBoundingClientRect(),o=Math.min(1,Math.max(0,-c.top/Math.max(1,c.height)));a.style.setProperty("--sp",o.toFixed(3))})};e.addEventListener("scroll",l,{passive:!0})}var mc=[[".wd-custom",".wd-custom-t",".wd-custom-t>p",".wd-list>li",".wd-poss>.kicker, .wd-poss>.note"],[".wd-proc",null,null,null,null],[".wd-proof",null,".wd-proof-l",null,".wd-pc"],[".wd-quote",".wd-quote>div:first-child",".wd-quote>div:last-child>p",null,null],[".wd-form",".wd-form-t",".wd-form-t>p:not(.kicker)",null,".wd-form-b, .iq>*"]];function fc(e){if(ca()||!("IntersectionObserver"in window))return;let a=e.querySelector(".wd");if(!a)return;a.classList.add("mo-on");let i=(d,p)=>setTimeout(()=>{d.classList.remove("mo-pre","mo-in","mo-row"),d.style.removeProperty("--md")},p),t=(d,p)=>{d.classList.add("mo-pre"),d.style.setProperty("--md",`${Math.round(p)}ms`)},l=(d,p=1500)=>{d.classList.add("mo-in"),i(d,p+(parseFloat(d.style.getPropertyValue("--md"))||0))},c=new IntersectionObserver(d=>d.forEach(p=>{p.isIntersecting&&(c.unobserve(p.target),p.target.__mo?.())}),{threshold:.15,rootMargin:"0px 0px -8% 0px"}),o=(d,p)=>{d.__mo=p,c.observe(d)};for(let[d,p,f,g,h]of mc){let P=e.querySelector(d);if(!P)continue;let X=p?P.querySelector(p):P,s=X.querySelector(":scope>.kicker"),M=X.querySelector(":scope>h2"),T=M?ui(M):[],B=f?[...P.querySelectorAll(f)]:[];s&&t(s,0),M&&(M.classList.add("mo-h"),M.style.setProperty("--d","180ms"));let I=180+Math.min(T.length,9)*70+260;B.forEach((F,_)=>t(F,I+_*120));let q=h?[...P.querySelectorAll(h)]:[];if(q.forEach((F,_)=>t(F,(B.length?I+140:220)+Math.min(_,8)*95)),o(X,()=>{s&&l(s),M&&(M.classList.add("tm-on"),setTimeout(()=>{M.classList.remove("mo-h")},I+1200)),B.forEach(F=>l(F)),q.length&&X===P&&q.forEach(F=>l(F,1700))}),q.length&&X!==P){let F=q[0].closest(".wd-poss, .wd-form-b")??q[0];o(F,()=>q.forEach(_=>l(_,1700)))}g&&P.querySelectorAll(g).forEach(F=>{F.classList.add("mo-row"),t(F,0),o(F,()=>l(F,1300))})}bc(e),xc(e)}function bc(e){matchMedia("(hover:hover) and (pointer:fine)").matches&&e.querySelectorAll(".wd-pc").forEach(a=>{let i=0,t=.5,l=.5,c=()=>{i=0,a.style.setProperty("--tx",(t-.5).toFixed(3)),a.style.setProperty("--ty",(l-.5).toFixed(3))};a.addEventListener("pointermove",o=>{if(o.pointerType!=="mouse")return;let d=a.getBoundingClientRect();t=(o.clientX-d.left)/d.width,l=(o.clientY-d.top)/d.height,a.classList.add("mo-tilt"),i||(i=requestAnimationFrame(c))}),a.addEventListener("pointerleave",()=>{cancelAnimationFrame(i),i=0,a.classList.remove("mo-tilt"),a.style.removeProperty("--tx"),a.style.removeProperty("--ty")})})}function xc(e){matchMedia("(hover:hover) and (pointer:fine)").matches&&e.querySelectorAll(".wd .acts .gb.primary").forEach(a=>{let i=0,t=0,l=0,c=()=>{i=0,a.style.setProperty("--mx",`${t.toFixed(1)}px`),a.style.setProperty("--my",`${l.toFixed(1)}px`)};a.addEventListener("pointermove",o=>{let d=a.getBoundingClientRect();t=((o.clientX-d.left)/d.width-.5)*8,l=((o.clientY-d.top)/d.height-.5)*6,i||(i=requestAnimationFrame(c))}),a.addEventListener("pointerleave",()=>{cancelAnimationFrame(i),i=0,a.style.removeProperty("--mx"),a.style.removeProperty("--my")})})}function vc(e){let a=[...e.querySelectorAll(".wd-step")],i=e.querySelector(".wd-path"),t=e.querySelector(".wd-steps-w"),l=0,c=()=>{let p=getComputedStyle(e.querySelector(".wd-steps")).gridTemplateColumns.split(" ").length===1,f=e.querySelector(".wd-steps"),g=s=>{let M=s.querySelector(".wd-bead");return[f.offsetLeft+s.offsetLeft+M.offsetLeft,f.offsetTop+s.offsetTop+M.offsetTop]},h=a.map(g),P=h.map(s=>s[p?1:0]),X=P[P.length-1]-P[0];i.style.left=`${h[0][0]+9}px`,i.style.top=`${h[0][1]+9}px`,i.style.setProperty("--len",`${X}px`),i.style.setProperty("--to",String(X?(P[l]-P[0])/X:0))},o=p=>{l=p,a.forEach((f,g)=>{f.classList.toggle("on",g===p),f.classList.toggle("past",g<p),g===p?f.setAttribute("aria-current","step"):f.removeAttribute("aria-current")}),c(),ca()||(i.classList.remove("glint"),i.offsetWidth,i.classList.add("glint"))};if(a.forEach((p,f)=>{p.addEventListener("pointerenter",g=>{g.pointerType==="mouse"&&e.classList.contains("in")&&o(f)}),p.addEventListener("focus",()=>o(f)),p.addEventListener("click",()=>o(f))}),new ResizeObserver(()=>c()).observe(t),ca()){e.classList.add("in"),o(0);return}e.classList.add("pre"),gi(e,()=>{e.classList.add("in"),setTimeout(()=>o(0),1100)},{ratio:.25})}function tl(e,a,i={}){let t=el();e.innerHTML=`
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
          <ul class="wd-list">${sc.map(([c,o])=>`<li><b>${c}</b><span>${o}</span></li>`).join("")}</ul>
          <p class="note">Every project is different; what is included is agreed together, one project at a time.</p></div>
      </section>

      <section class="wd-proc" aria-labelledby="wd-p">
        <p class="kicker">Working together</p><h2 id="wd-p">From an idea to a finished website.</h2>
        <div class="wd-steps-w"><span class="wd-path" aria-hidden="true"><i></i></span><ol class="wd-steps">${lc.map(([c,o],d)=>`<li class="wd-step" tabindex="0" style="--i:${d}"><span class="wd-bead" aria-hidden="true"></span><span class="wd-n">${String(d+1).padStart(2,"0")}</span><h3>${c}</h3><p>${o}</p></li>`).join("")}</ol></div>
      </section>

      <section class="wd-proof" id="wd-proof" aria-labelledby="wd-pr">
        <p class="kicker">Made here</p><h2 id="wd-pr">The work speaks in materials.</h2>
        <p class="wd-proof-l">Every object on this site \u2014 the glass, the light, the way it answers your hand \u2014 was designed and built by me, from the first sketch to the last shader. It is the clearest description of the custom websites I make for others: touch it.</p>
        <div class="wd-proof-g">
          <a class="wd-pc glass" href="#/products/orb"><span class="wd-pc-k">Object</span><b>The Orb</b><span>Real-time glass in WebGL: refraction, light and an interior you can stir.</span><i>Try it \u2192</i></a>
          <a class="wd-pc glass" href="#/templates"><span class="wd-pc-k">Composition</span><b>Templates</b><span>Whole pages built around one object, with a live, responsive preview.</span><i>Browse \u2192</i></a>
          <a class="wd-pc glass" href="#/studio"><span class="wd-pc-k">Tool</span><b>Studio</b><span>A material and lighting editor with save, reopen and export.</span><i>Coming soon \u2192</i></a>
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
          ${Ri?'<p class="note">Prefer email? Write to <a href="mailto:trescarla@gmail.com">trescarla@gmail.com</a>.</p>':'<p class="iq-pending" role="note"><b>Sending is being connected.</b> Until it is confirmed, the form only says \u201Csent\u201D when the message has really been delivered. You can also write directly to <a href="mailto:trescarla@gmail.com">trescarla@gmail.com</a>.</p>'}</div>
        <div class="wd-form-b glass">${pc(t)}</div>
      </section>
    </article>${a.footer()}`;let l=(c=!0)=>{let o=e.querySelector("#wd-inquiry"),d=matchMedia("(pointer:coarse)").matches,p=c&&!d&&!ca();e.scrollTo({top:e.scrollTop+o.getBoundingClientRect().top-96,behavior:p?"smooth":"instant"}),setTimeout(()=>{o.isConnected&&o.querySelector("[name=name]")?.focus({preventScroll:!d})},p?600:0)};e.querySelector("[data-to-proof]")?.addEventListener("click",c=>{c.preventDefault();let o=e.querySelector("#wd-proof");e.scrollTo({top:e.scrollTop+o.getBoundingClientRect().top-96,behavior:ca()?"auto":"smooth"})}),e.querySelector("[data-to-form]").addEventListener("click",()=>{a.audio?.sfx("select"),_e("inquiry_start"),l()}),gc(e,a),hc(e,e.querySelector(".hx")),vc(e.querySelector(".wd-proc")),fc(e),i.to==="inquiry"&&requestAnimationFrame(()=>requestAnimationFrame(()=>l(!1)))}var ko=[[{t:"text",s:"Hi there,"}],[{t:"text",s:"I\u2019m Carla, a web designer and developer creating digital experiences that go beyond traditional layouts."}],[{t:"text",s:"I\u2019m drawn to design, movement, materials and interaction \u2014 to the way they can change how a website feels in your hands."}],[{t:"text",s:"THE ORB LIGHT is my creative digital design studio, where I develop my own ideas: the digital pieces in "},{t:"a",s:"Products",href:"#/products"},{t:"text",s:", and the interactive "},{t:"a",s:"Templates",href:"#/templates"},{t:"text",s:"."}],[{t:"text",s:"I also design and build custom websites for people and brands who want something that feels genuinely their own."}],[{t:"text",s:"\u2014 Carla"}]].map(e=>({runs:e,text:e.map(a=>a.s).join(""),html:e.map(a=>a.t==="a"?`<a href="${a.href}">${Ma(a.s)}</a>`:Ma(a.s)).join("")})),mi=!1;function al(e,a){let i="";try{i=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Lisbon",hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{}e.innerHTML=`
    <article class="ab nt">
      <aside class="nt-meta" aria-label="About the author">
        <p class="nt-k">A note from</p>
        <p class="nt-name">Carla Tres</p>
        <p>Lisbon, Portugal</p>
        <p>Creative Web Designer &amp; Developer</p>
        ${i?`<p class="nt-time"><span class="nt-dot" aria-hidden="true"></span>${i} in Lisbon</p>`:""}
      </aside>
      <div class="nt-main">
        <p class="kicker">About</p>
        <h1>Behind the work.</h1>
        <div class="nt-body" data-note></div>
        <button class="tl nt-skip" type="button" data-skip>Read it all now</button>
        <div class="acts nt-acts"><a class="gb primary" href="#/design?to=inquiry">Let\u2019s Create Something</a><a class="tl" href="#/design">About Web Design <span aria-hidden="true">\u2192</span></a></div>
      </div>
    </article>${a.footer()}`;let t=e.querySelector(".nt"),l=e.querySelector("[data-note]"),c=e.querySelector("[data-skip]"),o=()=>{c.hidden=!0,t.classList.add("acts-in"),l.querySelectorAll(".tm-live a").forEach(g=>g.removeAttribute("tabindex"))};if(mi||ca()){wo(l,ko.map(g=>({...g})),{}).skip(),l.querySelector(".tm-caret")?.remove(),o();return}l.innerHTML=`<div class="tm-sr">${ko.map(g=>`<p>${g.html.replace(/<a /g,'<a tabindex="-1" ')}</p>`).join("")}</div>`;let d=null,p=gi(l,()=>{mi=!0,d=wo(l,ko,{onParagraph:g=>{g===2&&t.classList.add("acts-in")},onDone:o})},{ratio:.1});c.addEventListener("click",()=>{if(a.audio?.sfx?.("select"),d){d.skip();return}p(),mi=!0,wo(l,ko,{onDone:o}).skip()}),l.addEventListener("click",()=>{d&&!l.classList.contains("tm-done")&&d.skip()});let f=g=>{if(!t.isConnected){removeEventListener("keydown",f);return}d&&!l.classList.contains("tm-done")&&!g.metaKey&&!g.ctrlKey&&d.skip()};addEventListener("keydown",f)}var rl='<span class="wdm" aria-hidden="true"><span class="wdm-l">wd</span><em>Web Design</em></span>';if(typeof document<"u"&&!ca()){let e=0,a=null;document.addEventListener("pointermove",i=>{if(i.pointerType!=="mouse")return;let t=i.target.closest?.(".dg-design");if(!t){a&&(a.style.removeProperty("--mx"),a.style.removeProperty("--my"),a=null);return}a=t,cancelAnimationFrame(e),e=requestAnimationFrame(()=>{let l=t.getBoundingClientRect();t.style.setProperty("--mx",((i.clientX-l.left)/l.width-.5).toFixed(3)),t.style.setProperty("--my",((i.clientY-l.top)/l.height-.5).toFixed(3))})},{passive:!0})}var ol=`
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
${Ks}
`;var yc=[{date:"2026-10-27",items:["Every section, product and template now has its own address, such as thelightorb.com/products/orb, so it can be found and shared.","Opening a link to a product or page goes straight there, without the intro.","Four new interactive Objects in Products: Gel Press, Interactive Lens, Elastic Lettering and Magnetic Stack, coming to early access.","Products can be filtered by category and shown as a grid or large cards.","Bloom listens: with your permission, the Bloom Orb answers your voice through the microphone.","Web Design has a new typographic opening and an interactive look at the process.","Refined glass on buttons, filters and cards, and a dark mode with neutral graphite surfaces.","On phones, the three offers on the welcome take turns on one line.","A new site icon: the O of the wordmark."]},{date:"2026-10-23",items:["BRUNITO, an interactive ecommerce template, can be explored in Templates.","The Light Orb moved to its own address, thelightorb.com."]}],wc=e=>new Date(`${e}T12:00:00Z`).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});function il(e,a){e.innerHTML=`
    <section class="dest legal">
      <header class="dh"><p class="kicker">Changelog</p><h1>What\u2019s new</h1><p class="dh-l">New pieces and changes to The Light Orb, newest first.</p></header>
      <div class="legal-b">${yc.map(i=>`<h2><time datetime="${i.date}">${wc(i.date)}</time></h2><ul>${i.items.map(t=>`<li>${a.esc(t)}</li>`).join("")}</ul>`).join("")}</div>
    </section>${a.footer()}`}var ya=(e,a=0,i=1)=>Math.min(i,Math.max(a,e)),kr=(e,a,i)=>e+(a-e)*i,za=e=>{let a=ya(e);return a*a*(3-2*a)},kc=(e,a,i,t,l)=>za((e-a)/(i-a))*(1-za((e-t)/(l-t))),ue=e=>String(e).replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),rr={get:(e,a)=>{try{return JSON.parse(sessionStorage.getItem(e))??a}catch{return a}},set:(e,a)=>{try{sessionStorage.setItem(e,JSON.stringify(a))}catch{}}},rt={play:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>',replay:'<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/></svg>',prev:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',mute:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',moon:'<svg viewBox="0 0 24 24"><path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z"/></svg>',sun:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.8"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg>',user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M4.5 20c1.4-3.6 4.2-5.4 7.5-5.4s6.1 1.8 7.5 5.4"/></svg>',heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/></svg>',back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',down:'<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',bag:'<svg viewBox="0 0 24 24"><path d="M5.5 8.5h13l-1 11h-11z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5.5" y="10.5" width="13" height="9" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',orb:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="11" cy="15" r="1.6" fill="currentColor" stroke="none"/></svg>'},bi={pieces:"products",materials:"products"},Sc=`
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
.ss .ss-f .sl-f input[type=email],html[data-theme=dark] .ss .ss-f .sl-f input[type=email]{color:#a50d2f;caret-color:#a50d2f}`;function nl(e){document.getElementById("seo-entry")?.remove();try{localStorage.setItem("lo:intro-seen","1")}catch{}let{orb:a,reduced:i}=e,t=en();cs(t);let l=document.createElement("style");l.textContent=hn+mn+ol+yn+vn+(/[?&]cx=0\b/.test(location.search)?"":wn)+Mn+Cn+Fn+Ws+Rn+Fs+Sc,document.documentElement.classList.add("ds2"),document.head.append(l),xn(),document.documentElement.classList.add("lo-on");let c=Xn(e),o=xi("main","lo");o.setAttribute("aria-label","The Light Orb"),o.tabIndex=-1;let d=xi("div","lo-top");document.body.append(o,d),d.innerHTML=`
    <header class="hd" data-hd>
      <a class="wm" href="#/" aria-label="The Light Orb \u2014 Home" data-home>${Pr}</a>
      <nav class="nav" aria-label="Main">${Wi.map(r=>r.children?`<div class="nv-g" data-nvg><a href="${r.route}" data-nav="${r.id}" data-top>${r.label}</a><button class="nv-x" type="button" data-nvx aria-expanded="false" aria-controls="nv-${r.id}" aria-label="${r.label}: ${r.children.map(n=>n.label).join(", ")}">${rt.down}</button>
        <div class="menu pane nv-p" id="nv-${r.id}" data-nvp hidden>${r.children.map(n=>`<a href="${n.route}" data-sub="${n.id}"><b>${n.label}</b><small>${n.line}</small></a>`).join("")}</div></div>`:`<a href="${r.route}" data-nav="${r.id}" data-top${r.soon?` aria-label="${r.label}, coming soon"`:""}>${r.label}${r.soon?'<span class="nav-soon" aria-hidden="true">Soon</span>':""}</a>`).join("")}</nav>
      <div class="hd-r">
        <a class="nav-m" href="#/membership" data-nav="membership">Membership</a>
        <div class="snd" data-sndhost></div>
        <div class="thm"><button class="gb gc small" type="button" data-theme-btn aria-pressed="false" aria-label="Dark mode" title="Dark mode">${rt.moon}</button></div>
        <div class="cartw"${" hidden"}><button class="gb gc small" type="button" data-cartbtn aria-haspopup="dialog" aria-expanded="false" aria-label="Cart">${rt.bag}<span class="cart-n" data-cartn hidden></span></button>
          <div class="menu pane cart-p" role="dialog" aria-label="Cart" data-cartp hidden></div></div>
        <a class="gb gc small" href="#/account" aria-label="Account" data-nav="account">${rt.user}</a>
      </div>
    </header>
    <button class="guide-hit" type="button" data-guide aria-label="Talk with the Orb"></button>
    <div class="caption" data-caption aria-live="polite"></div>`,d.querySelectorAll("[data-nvg]").forEach(r=>{let n=r.querySelector("[data-nvx]"),y=r.querySelector("[data-nvp]"),x=0,S=(k,Q)=>{clearTimeout(x),y.hidden!==!k&&(y.hidden=!k,n.setAttribute("aria-expanded",String(k)),r.classList.toggle("open",k),Q&&k&&y.querySelector("a")?.focus())};n.addEventListener("click",()=>{S(y.hidden),t.sfx(y.hidden?"close":"open")}),n.addEventListener("keydown",k=>{k.key==="ArrowDown"&&(k.preventDefault(),S(!0,!0))}),r.addEventListener("pointerenter",k=>{k.pointerType==="mouse"&&S(!0)}),r.addEventListener("pointerleave",k=>{k.pointerType==="mouse"&&(x=setTimeout(()=>S(!1),220))}),r.addEventListener("keydown",k=>{k.key==="Escape"&&!y.hidden&&(S(!1),n.focus())}),y.addEventListener("keydown",k=>{let Q=[...y.querySelectorAll("a")],te=Q.indexOf(document.activeElement);(k.key==="ArrowDown"||k.key==="ArrowUp")&&(k.preventDefault(),Q[(te+(k.key==="ArrowDown"?1:Q.length-1))%Q.length].focus())}),r.addEventListener("focusout",k=>{r.contains(k.relatedTarget)||S(!1)}),document.addEventListener("pointerdown",k=>{r.contains(k.target)||S(!1)}),addEventListener("hashchange",()=>S(!1))});let p=d.querySelector("[data-hd]"),f=d.querySelector("[data-caption]"),g=d.querySelector("[data-guide]"),h=d.querySelector("[data-theme-btn]"),P=()=>{let r=ur()==="dark";h.setAttribute("aria-pressed",String(r)),h.innerHTML=r?rt.sun:rt.moon,h.setAttribute("aria-label","Dark mode"),h.title=r?"Switch to light mode":"Switch to dark mode"};P(),h.addEventListener("click",()=>{un(ur()==="dark"?"light":"dark"),_e(`theme_${ur()}`)}),document.addEventListener("lightorb:theme",()=>{P(),be.name!=="studio"&&(N(),c.reapply())});let X=Pi(d.querySelector("[data-sndhost]"),t.store,{buttonClass:"gb gc small",onToggle:(r,n)=>{_e(`${r==="voice"?"voice":"sound"}_${n?"on":"off"}`),r==="sfx"&&n&&t.sfx("select")}}),s=0;t.store.on((r,n)=>{n.voice&&!t.voiceOn&&(me=null,Be())});let M=()=>{t.voiceOn||t.toggle("voice",!0)},T=0,B=0,I=null,q="a,button,input,select,textarea,summary,[role=slider],[role=tab],.arc-c,.dg-c,.file,.tcard",F="h1,h2,h3,p,li,dt,dd,blockquote,figcaption,label",_=NaN,V=null;function L(){let r=()=>{f.style.top="",f.style.bottom="",f.style.left=""};if(!f.classList.contains("on")){Number.isFinite(_)&&(r(),_=NaN);return}r();let n=f.getBoundingClientRect(),y=n.width,x=n.height,S=8,k=innerWidth,Q=n.top,te=n.left+y/2,E=(p.getBoundingClientRect().bottom||0)+S,oe=(window.visualViewport?.height??innerHeight)-10,Te=Ie=>[...document.querySelectorAll(Ie)].filter(Je=>Je!==f&&!f.contains(Je)&&Je!==g&&!Je.closest("[hidden],[inert]")).map(Je=>Je.getBoundingClientRect()).filter(Je=>Je.width&&Je.height&&Je.bottom>E&&Je.top<oe),j=Te(q),A=Te(F),re=V&&V.vis>.5?[{top:V.y-V.d/2,bottom:V.y+V.d/2,left:V.x-V.d/2,right:V.x+V.d/2}]:[],qe=[...new Set([te,k-y/2-12,y/2+12].map(Ie=>Math.round(Math.min(k-y/2-12,Math.max(y/2+12,Ie)))))],pe=(Ie,Je)=>{let Qt=Ie.filter(dt=>dt.right>Je-y/2-S&&dt.left<Je+y/2+S),Ia=dt=>Qt.every(gt=>dt+x+S<=gt.top||dt-S>=gt.bottom);return Ia(Q)?Q:[E,oe-x,...Qt.flatMap(dt=>[dt.bottom+S,dt.top-S-x])].filter(dt=>dt>=E&&dt+x<=oe&&Ia(dt)).sort((dt,gt)=>Math.abs(dt-Q)-Math.abs(gt-Q))[0]},ve=null;for(let Ie of[[...j,...A,...re],[...j,...A],j]){for(let Je of qe){let Qt=pe(Ie,Je);if(Qt!==void 0){ve={x:Je,y:Qt};break}}if(ve)break}if(!ve||Math.abs(ve.y-Q)<.5&&Math.abs(ve.x-te)<.5){_=NaN;return}f.style.top=`${ve.y.toFixed(1)}px`,f.style.bottom="auto",f.style.left=`${ve.x}px`,_=ve.y}let w=0,z=()=>{w||(w=requestAnimationFrame(()=>{w=0,L()}))};new MutationObserver(z).observe(f,{attributes:!0,attributeFilter:["class"],childList:!0,characterData:!0,subtree:!0}),addEventListener("resize",z),window.visualViewport?.addEventListener("resize",z);let G=(()=>{let r=document.createElement("canvas").getContext("2d");return n=>(r.font=getComputedStyle(f).font,r.measureText(n).width)})();function $(r){let n=Math.min(560,innerWidth*.84)-34,y=[],x="";for(let S of String(r).split(/\s+/).filter(Boolean)){let k=x?`${x} ${S}`:S;x&&G(k)>n?(y.push(x),x=S):x=k}return x&&y.push(x),y.length?y:[""]}function C(r,{follow:n=!1}={}){let y=$(r),x=Math.max(1,String(r).length),S=++B,k=performance.now(),Q=Math.max(3200,x*70),te=-1;clearTimeout(T),f.classList.add("on");let E=()=>{if(S!==B)return;let Te=n&&t.playing&&t.state.kind==="guide"&&t.state.clip!=="speech"&&t.position>0?t.position:(performance.now()-k)/Q,j=0,A=0;for(;A<y.length-1&&(j+=y[A].length+1,!(Te*x<j));A++);A!==te&&(te=A,f.textContent=y[A]),Te<1||n&&t.playing&&t.state.kind==="guide"?requestAnimationFrame(E):T=setTimeout(()=>{S===B&&(f.classList.remove("on"),I=null,Z())},900)};E()}function Z(){let r=t.prefs;o.querySelectorAll("[data-enable]").forEach(y=>{y.hidden=r.master});let n=t.state.clip?.split(".")[0];if(Zr[n]&&n!=="home"){let y=t.state.kind==="guide"&&["playing","loading"].includes(t.state.status);y&&I!==n?(I=n,C(Zr[n],{follow:!0})):!y&&I===n&&(I=null,B++,f.classList.remove("on"))}}t.on(Z),t.on(()=>{!t.playing&&t.state.status!=="loading"&&document.querySelectorAll("[data-speaking]").forEach(r=>r.removeAttribute("data-speaking"))});let le=d.querySelector("[data-cartbtn]"),ee=d.querySelector("[data-cartp]"),se=d.querySelector("[data-cartn]");function de(){let r=ea.items();se.hidden=!r.length,se.textContent=r.length,ee.innerHTML=`<p class="kicker">Cart</p>${r.length?`<ul class="cart-l">${r.map(n=>`<li><a href="${n.href}">${ue(n.name)}</a><button class="pill" type="button" data-cartrm="${n.id}">Remove</button></li>`).join("")}</ul>`:'<p class="note">Your cart is empty.</p>'}
      ${xa.canCheckout(r)?'<button class="gb primary" type="button" data-checkout>Checkout</button>':'<button class="gb primary" type="button" disabled>Checkout opens soon</button><p class="note">No payment can be taken yet; items stay in this browser.</p>'}`,ee.querySelector("[data-checkout]")?.addEventListener("click",()=>{let n=xa.checkout(ea.items());n&&ea.remove(n)}),ee.querySelectorAll("[data-cartrm]").forEach(n=>n.addEventListener("click",()=>{ea.remove(n.dataset.cartrm),t.sfx("close")}))}ea.on(de),de();let je=r=>{ee.hidden=!r,le.setAttribute("aria-expanded",String(r)),t.sfx(r?"open":"close")};le.addEventListener("click",()=>je(ee.hidden)),document.addEventListener("pointerdown",r=>{!ee.hidden&&!r.target.closest(".cartw")&&je(!1)}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!ee.hidden&&(je(!1),le.focus())});let Ae={emission:1,voice:Io.voice},N=()=>{Ae=ro(a,Ut(Io)),a.setRibbon?.(0)};N();let m=()=>({home:"home",products:"products",templates:"templates",...sr?{studio:"studio"}:{},sound:"sound"})[be.name],O=()=>matchMedia("(pointer: coarse)").matches&&Math.min(innerWidth,innerHeight)<820,Y=r=>{try{return localStorage.getItem(r)}catch{return null}},R=r=>{try{localStorage.setItem(r,"1")}catch{}},D="en",ce=null,fe=document.createElement("style");fe.textContent=`.orb-ask{position:fixed;left:50%;bottom:calc(18px + env(safe-area-inset-bottom,0px));transform:translate(-50%,6px);z-index:30;display:flex;align-items:center;gap:8px;width:min(420px,calc(100vw - 32px));box-sizing:border-box;
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
@media (pointer:coarse) and (max-width:820px){.caption{font-size:13.5px;line-height:1.35}}`,document.head.append(fe);let $e='<svg viewBox="0 0 24 24"><rect x="9" y="3.5" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v2.5"/></svg>',he='<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5"/></svg>',ge=xi("form","orb-ask");ge.hidden=!0,ge.setAttribute("role","search"),ge.setAttribute("aria-label","Ask the Orb"),ge.innerHTML=`<span class="st" data-st aria-live="polite"></span><input type="text" data-q placeholder="${D==="es"?"Pregunta a la Orb\u2026":"Ask the Orb\u2026"}" aria-label="Ask the Orb" autocomplete="off" enterkeyhint="send" maxlength="300">
    <button type="button" data-mic aria-label="Speak" aria-pressed="false"${ti?"":" hidden"}>${$e}</button><button type="submit" aria-label="Send">${he}</button>`,d.append(ge);let Ee=ge.querySelector("[data-st]"),Pe=ge.querySelector("[data-q]"),Ye=ge.querySelector("[data-mic]");g.setAttribute("aria-label","Talk with the Orb");let St=!ti,st=()=>{ge.hidden=!1,document.body.classList.add("orb-asking"),requestAnimationFrame(()=>ge.classList.add("on"))},ot=()=>{Le++,Qe(),ge.classList.remove("on"),ge.hidden=!0,document.body.classList.remove("orb-asking"),Pe.blur()};function Qe(){if(xe){let r=xe;xe=null,r.abort()}Ye.setAttribute("aria-pressed","false"),Ee.textContent=""}function ye(){St||xe||(t.stop(),ce=null,Ee.textContent=D==="es"?"Escuchando\u2026":"Listening\u2026",Ye.setAttribute("aria-pressed","true"),xe=Kn({lang:D==="es"?"es-ES":/^en/i.test(navigator.language)?navigator.language:"en-US",onresult:r=>{Ee.textContent="",Pe.value=r},onerror:r=>{xe=null,Ye.setAttribute("aria-pressed","false"),Ee.textContent="",(r==="not-allowed"||r==="service-not-allowed"||r==="unsupported")&&(_e("mic_denied"),St=!0,Ye.hidden=!0,He(pr("reply.mic",D),"answer"),O()||Pe.focus())},onend:r=>{xe&&(xe=null,Ye.setAttribute("aria-pressed","false"),Ee.textContent="",Pe.value="",r.trim()&&$t(r))}}),xe||(Ye.setAttribute("aria-pressed","false"),Ee.textContent=""))}Ye.addEventListener("click",()=>{xe?Qe():ye()}),Pe.addEventListener("input",()=>{xe&&Qe()}),ge.addEventListener("submit",r=>{r.preventDefault();let n=Pe.value.trim();Pe.value="",Qe(),n&&(_e("orb_typed"),$t(n))}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!ge.hidden&&ot()}),document.addEventListener("pointerdown",r=>{!ge.hidden&&!r.target.closest(".orb-ask,[data-guide]")&&!Pe.value&&!xe&&ot()});let xe=null,me=null,Oe=null;g.addEventListener("pointerdown",r=>{Oe={x:r.clientX,y:r.clientY}}),g.addEventListener("click",()=>{if(M(),ze=performance.now()/1e3,_e("orb_tap"),xe){Qe();return}let r=Oe&&document.elementsFromPoint(Oe.x,Oe.y).map(Ve).find(Boolean);if(Oe=null,r){H(r);return}if(t.playing||t.state.status==="loading"){Be();return}t.sfx("select"),st(),R("lo:orb:greet"),Be(),He(Ft(),"answer")});function Be(){s++,Le++,Qe(),t.stop(),ce=null,Ge=null,tt=null,we(""),document.querySelectorAll("[data-speaking]").forEach(r=>r.removeAttribute("data-speaking"))}document.addEventListener("keydown",r=>{r.key==="Escape"&&(t.playing||t.state.status==="loading")&&Be()});let Fe="h1,h2,h3,h4,p,blockquote,figcaption,li,dt,dd,[data-speak]",Ne="a,button,[data-href],[role=button]:not([data-speak]),[role=tab],summary,label,input,select,textarea,[contenteditable]",Dt=`${Ne},form,.hd,.sndc,.orb-ask,.caption,[data-ins],[data-rail],[data-view],[data-modal],[data-hud],.menu,.cart-p,.arc,.dg`,et=r=>{let n=(r.getAttribute("aria-label")||r.innerText||r.textContent||"").replace(/\s+/g," ").trim();return/^\S+\.(m4a|wav|mp3|json|js|html|zip)$/i.test(n)?"":n},Ve=r=>{let n=r?.closest?.(Fe);return n&&o.contains(n)&&!n.closest(Dt)&&!n.querySelector("input,select,textarea,button")&&et(n).length>1&&et(n).length<900?n:null},Ze=r=>{let n=2166136261;for(let y=0;y<r.length;y++)n^=r.charCodeAt(y),n=Math.imul(n,16777619);return`text.${(n>>>0).toString(36)}`},Ge=null,tt=null;function H(r,n=et(r)){if(n){if(tt===r&&(t.playing||t.state.status==="loading")){Be();return}M(),Be(),_e("words_spoken"),tt=r,Ge=Ze(n),r.setAttribute("data-speaking",""),He({id:Ge,text:n,lang:"en"},"answer")}}o.addEventListener("click",r=>{if(r.target.closest?.(Ne)||String(getSelection?.()??"").trim())return;let n=Ve(r.target);n&&H(n)}),o.addEventListener("keydown",r=>{if((r.key==="Enter"||r.key===" ")&&!r.altKey&&r.target.matches?.(Fe)&&Ve(r.target)===r.target&&(r.preventDefault(),H(r.target)),r.key==="Enter"&&r.altKey&&r.target.closest?.("a,button")){r.preventDefault();let n=r.target.closest("a,button");H(n,et(n))}});let U=()=>o.querySelectorAll("h1,h2,h3,blockquote p,[data-speak]").forEach(r=>{Ve(r)===r&&!r.hasAttribute("tabindex")&&r.setAttribute("tabindex","0")}),K=null;o.addEventListener("pointerover",r=>{let n=r.pointerType==="mouse"&&!r.target.closest?.(Ne)?Ve(r.target):null;n!==K&&(K?.classList.remove("rd"),K=n,n?.classList.add("rd"))}),o.addEventListener("pointerleave",()=>{K?.classList.remove("rd"),K=null});let ne=null,ie=!1;addEventListener("pointerdown",r=>{let n=r.target.closest?.("a,button,[data-href],.arc-c,.dg-c");!n||n.closest("[data-guide],[data-sound],.sndc,.sx,.orb-ask")||!et(n)||n.querySelector("svg")&&!n.innerText.trim()||(ne={t:n,x:r.clientX,y:r.clientY,timer:setTimeout(()=>{ie=!0,H(n,et(n))},520)})},!0);let ke=r=>{ne&&(r.type!=="pointermove"||Math.hypot(r.clientX-ne.x,r.clientY-ne.y)>8)&&(clearTimeout(ne.timer),ne=null)};if(addEventListener("pointermove",ke,!0),addEventListener("pointerup",ke,!0),addEventListener("pointercancel",ke,!0),addEventListener("click",r=>{ie&&(ie=!1,r.preventDefault(),r.stopPropagation())},!0),addEventListener("contextmenu",r=>{(ie||ne)&&r.preventDefault()},!0),!Y("lo:orb:greet")){let r=n=>{if(n.target.closest?.("[data-guide],.orb-ask,.sndc")||(removeEventListener("pointerdown",r,!0),!O()))return;let y=s;setTimeout(()=>{y!==s||!t.voiceOn||Y("lo:orb:greet")||ce||xe||(R("lo:orb:greet"),He(pr("reply.greet",D),"answer"))},900)};addEventListener("pointerdown",r,!0)}function He(r,n="answer"){if(!r?.text||!t.voiceOn)return;C(r.text,{follow:!0}),ze=performance.now()/1e3,ce=n,t.say(r.text,{id:r.lang==="es"?void 0:r.id??void 0,lang:r.lang,onend:()=>{ce===n&&(ce=null)}})||(ce=null)}let Ke=[],Le=0,De=(r,n)=>{for(Ke.push({role:r,content:n});Ke.length>12;)Ke.shift();for(;Ke.length&&Ke[0].role!=="user";)Ke.shift()};function Bt(){let r=qa(),n=r.name==="products"&&r.id?na.find(y=>y.id===r.id):null;return{route:location.hash||"#/",title:document.title,presentation:Ft("en").text,product:n?.name,variant:n?r.query.variant||(n.id==="orb"?"clear":void 0):void 0,lang:D}}async function $t(r){D=ho(r,D);let n=Jn(r,{here:be.name,presentation:Ft,lang:D});if(_e(n.intent==="fallback"?"orb_fallback":"orb_command",{intent:n.intent||(n.stop?"stop":n.back?"back":n.go?`go:${n.go.split("?")[0].replace("#/","")}`:"answer")}),!n.command&&n.intent!=="hello"&&Qn()&&r.trim()){let y=++Le;we("\u2026"),De("user",r.trim());try{let x=await Zn(Ke.slice(),Bt());return y!==Le?void 0:(De("assistant",x.say),nt({say:x.say,go:x.go,lang:ho(x.say,D)}))}catch{if(y!==Le)return;Ke.pop()}}nt(n)}function nt(r){if(r.stop){t.stop(),ce=null,we("");return}if(r.back&&history.back(),r.go&&location.hash!==r.go){me=r.say?{text:r.say,id:r.id,lang:r.lang}:null,location.hash=r.go;return}r.say?He({text:r.say,id:r.id,lang:r.lang},"answer"):r.go||we("")}function we(r){clearTimeout(T),B++,f.textContent=r,f.classList.toggle("on",!!r),r||Z()}let ze=-99,Me=0,Ft=(r=D)=>on(r,be.name,be.id);function Wt(){He(Ft(),"arrival")}let Ot=!1,ft=()=>o.scrollTop>innerHeight*.25;function vt(){if(!t.voiceOn||Ot||Y("lo:orb:greet")||ce==="answer"||xe||ft())return;Ot=!0,R("lo:orb:greet");let r=s,n=pr("reply.greet",D),y=()=>{r===s&&t.voiceOn&&be.name==="home"&&!ce&&!xe&&!ft()&&He(n,"arrival")};if(navigator.userActivation&&!navigator.userActivation.hasBeenActive){C(n.text);let x=S=>{removeEventListener("pointerdown",x,!0),removeEventListener("keydown",x,!0),!S.target.closest?.("[data-guide],.orb-ask,.sndc")&&setTimeout(y,250)};addEventListener("pointerdown",x,!0),addEventListener("keydown",x,!0);return}y()}function Gt(r){let n=me,y=s;me=null,xe&&!n&&Qe(),setTimeout(()=>{if(!(y!==s||location.hash!==r||!t.voiceOn)){if(n){He(n,"answer");return}be.name==="home"&&vt()}},450)}let be={name:""},ut=null,yt=[],Jt=Na.find(r=>r.host===location.hostname)??null,Yt={products:"Products",templates:"Templates",studio:"Studio",soon:"Studio \xB7 Coming soon",sound:"Sound",membership:"Membership",account:"Account",signin:"Sign in",signup:"Sign up",design:"Web Design",about:"About",...Object.fromEntries(Na.map(r=>[r.id,r.name])),changelog:"What\u2019s new",...Cs};function qa(){let[r,n=""]=(location.hash.replace(/^#/,"")||"/").split("?"),y=r.split("/").filter(Boolean),x=Object.fromEntries(new URLSearchParams(n)),S=bi[y[0]]||y[0]||"home";return{name:S==="studio"&&!sr?"soon":S,id:y[1]||null,query:x,raw:y[0]}}function pa(){let r=qa();if(r.raw&&bi[r.raw]){location.replace(`#/${bi[r.raw]}${r.id?"/"+r.id:""}`);return}if(!["home","products","templates","studio","soon","sound","membership","account","signin","signup","privacy","terms","licence","design","about","changelog",...Na.map(S=>S.id)].includes(r.name)){location.replace("#/");return}if(Jt&&r.name!==Jt.id){location.replace(`https://thelightorb.com/${r.name==="home"?"":location.hash}`);return}yt.forEach(S=>S()),yt=[],ct=null,ut&&r.name!=="studio"&&(ut.leave(),ut=null),c.hide(),Or(),e.removeBackdrop(kt.canvas),N();let n=be.name;be=r,s++,Le++,document.title=be.name==="home"?"The Light Orb":`${Yt[be.name]??be.name} \xB7 The Light Orb`,o.className=`lo r-${be.name}`,document.body.dataset.route=be.name,Di(),be.name==="studio"&&n!=="studio"&&_e("studio_open"),d.querySelectorAll("[data-nav]").forEach(S=>S.toggleAttribute("aria-current",(Yi[S.dataset.nav]??[S.dataset.nav]).includes(be.name)||S.dataset.nav==="account"&&["account","signin","signup"].includes(be.name))),d.querySelectorAll("[data-sub]").forEach(S=>S.toggleAttribute("aria-current",S.dataset.sub===be.name)),n&&Be(),({home:jo?()=>yt.push(Es(o,Nt)):aa,products:be.id?Ua:Wr,templates:be.id?wl:vl,studio:Ml,soon:Tl,sound:ki,membership:()=>is(o,Nt),account:()=>Qa(o,Nt,be.id),signin:()=>ri(o,Nt,"in"),signup:()=>ri(o,Nt,"up"),privacy:()=>yo(o,Nt,"privacy"),terms:()=>yo(o,Nt,"terms"),licence:()=>yo(o,Nt,"licence"),changelog:()=>il(o,Nt),design:()=>tl(o,Nt,be.query),about:()=>al(o,Nt),...Object.fromEntries(Na.map(S=>[S.id,()=>(be.id?El:$l)(S)]))}[be.name]??aa)(),ci(o),ci(d),pi(location.hash),io(o),U();let x=rr.get(`lo:scroll:${location.hash}`,null);o.scrollTop=x??0,Gt(location.hash),n&&o.focus({preventScroll:!0})}let wa=-1e9;o.addEventListener("scroll",z,{passive:!0}),addEventListener("hashchange",z),o.addEventListener("scroll",()=>{wa=performance.now(),rr.set(`lo:scroll:${location.hash}`,o.scrollTop),be.name==="home"&&ce==="arrival"&&ft()&&(t.stop(),ce=null,we("")),(O()||innerWidth<700)&&f.classList.contains("on")&&!t.playing&&o.scrollTop>40&&we("")},{passive:!0}),addEventListener("hashchange",pa),d.querySelector("[data-home]").addEventListener("click",r=>{r.preventDefault(),rr.set("lo:scroll:#/",0),be.name==="home"?o.scrollTo({top:0,behavior:i?"auto":"smooth"}):location.hash="#/"});let Nt={page:o,audio:t,ICON:rt,esc:ue,store:xt,go:r=>{location.hash=r},flash:C,api:e,product:c,footer:()=>Ce()},it=rr.get("lo:sel",0),zt=[],ua=new URLSearchParams(location.search).get("sel");ua&&rr.set("lo:selv",ua);let ta=rr.get("lo:selv","arc")==="grid";function aa(){if(o.innerHTML=`
      <section class="wel" aria-labelledby="hello">
        <div class="wel-copy ${i?"shown":"reveal"}" data-welcopy>
          <h1 id="hello" class="wel-h"><span>Hello.</span></h1>
          <p class="wel-line">Digital pieces, website templates, and custom web design. Made to be explored.</p>
          <p class="wel-offer" aria-label="What is here"><a href="#/products">Interactive digital pieces</a><span aria-hidden="true">\xB7</span><a href="#/templates">Website templates</a><span aria-hidden="true">\xB7</span><a href="#/design">Custom web design</a></p>
          <a class="gb primary wel-go" href="#select" data-go>Let\u2019s go</a>
        </div>
        <div class="wel-ctl"><button class="gb small" type="button" data-enable>${rt.sound}<span>Enable sound</span></button><a class="tl" href="intro.html?replay">Replay intro</a></div>
      </section>
      <section class="qt" aria-label="Quotation">
        <figure class="qt-fig" data-qt><blockquote><p data-speak>${Er.text}</p></blockquote>
          <figcaption>${Er.author} \xB7 <a href="${Er.source}" rel="noopener" target="_blank">${Er.work}</a></figcaption></figure>
      </section>
      <section class="sel${ta?" sel-grid":""}" id="select" aria-labelledby="sel-t">
        <h2 id="sel-t" class="sel-t"><span data-speak tabindex="0">Where would you like to begin?</span></h2>
        ${ta?`<nav class="dg" aria-label="Destinations">${ja.map((r,n)=>`<a class="dg-c" href="${r.route}" data-c="${n}">${Ht(r)}<span class="dg-t">${r.label}</span><span class="dg-s">${r.line}</span></a>`).join("")}</nav>`:`<div class="arc" data-arc role="group" aria-roledescription="carousel" aria-label="Destinations">
          ${ja.map((r,n)=>`<a class="arc-c" href="${r.route}" data-c="${n}" aria-label="${r.label}: ${r.line}">${Ht(r,"arc-img")}<span class="arc-l">${r.label}</span><span class="arc-s">${r.line}</span></a>`).join("")}
        </div>
        <div class="arc-ctl"><button class="gb gc small" type="button" data-step="-1" aria-label="Previous">${rt.prev}</button>
          <div class="segbar" role="tablist" aria-label="Choose destination">${ja.map((r,n)=>`<button class="pill" role="tab" type="button" data-dot="${n}">${r.label}</button>`).join("")}</div>
          <button class="gb gc small" type="button" data-step="1" aria-label="Next">${rt.next}</button></div>`}
      </section>
      ${Ce()}`,zt=[...o.querySelectorAll("[data-c]")],o.querySelector("[data-go]")?.addEventListener("click",r=>{r.preventDefault(),t.sfx("select"),o.scrollTo({top:o.scrollTop+o.querySelector("#sel-t").getBoundingClientRect().top-110,behavior:i?"auto":"smooth"})}),o.querySelector("[data-enable]").addEventListener("click",()=>{_e("sound_enable"),t.set({guide:!0,sfx:!0}),t.sfx("confirm"),O()||Wt()}),ta)zt.forEach((r,n)=>{r.addEventListener("pointerenter",()=>Et(n)),r.addEventListener("focus",()=>Et(n)),r.addEventListener("click",()=>{t.sfx("open"),_e("destination",{id:ja[n].id})})}),ka(!0);else{o.querySelectorAll("[data-step]").forEach(n=>n.addEventListener("click",()=>Et(it+ +n.dataset.step))),o.querySelectorAll("[data-dot]").forEach(n=>n.addEventListener("click",()=>Et(+n.dataset.dot))),zt.forEach((n,y)=>n.addEventListener("click",x=>{if(v){x.preventDefault();return}y!==it?(x.preventDefault(),Et(y)):(t.sfx("open"),_e("destination",{id:ja[y].id}))}));let r=o.querySelector("[data-arc]");r.addEventListener("keydown",n=>{n.key==="ArrowRight"&&(Et(it+1),n.preventDefault()),n.key==="ArrowLeft"&&(Et(it-1),n.preventDefault())}),J(r,n=>Et(it+n),()=>ka()),ka(!0)}Z()}function ga(r){let n=String(ja.indexOf(r)+1).padStart(2,"0");return`<span class="arc-img cv cv-${r.id}"><span class="cv-grain"></span><span class="cv-n">${n}</span><span class="cv-t">${r.label}</span></span>`}function Ht(r,n=""){let y={products:'<img class="lo-light-only" src="./media/cards/products.jpg" alt="" decoding="async" fetchpriority="low"><img class="lo-dark-only" src="./media/cards/products-dark.jpg" alt="" decoding="async" loading="lazy" fetchpriority="low">',templates:'<span class="dg-win"><img class="lo-light-only" src="./media/templates/the-light-orb.cover.jpg" alt="" decoding="async" fetchpriority="low"><img class="lo-dark-only" src="./media/cards/templates-dark.jpg" alt="" decoding="async" loading="lazy" fetchpriority="low"></span>',studio:'<img src="./media/cards/orb-dark.jpg" alt="" decoding="async" fetchpriority="low">',design:rl,sound:`<span class="cv-wave">${[.3,.55,.8,.45,.95,.6,.35,.7,.5,.85,.4,.65,.3,.5].map(x=>`<i style="--h:${x}"></i>`).join("")}</span>`}[r.id];return`<span class="dg-img dg-${r.id} ${n}">${y}</span>`}function Et(r,n=!0){let y=ya(r,0,ja.length-1);y!==it&&(it=y,rr.set("lo:sel",it),n&&t.sfx("detent"),a.nudge?.(.5)),ka()}function ka(r){if(ta){zt.forEach((x,S)=>x.classList.toggle("on",S===it));return}let n=zt[0]?.offsetWidth||300,y=n*.7;zt.forEach((x,S)=>{let k=S-it+b/(y*1.2),Q=Math.abs(k);x.style.transition=r||u?"none":"",x.style.transform=`translateX(${k*y}px) translateZ(${-Q*150}px) rotateY(${ya(-k*30,-48,48)}deg) scale(${1-Math.min(Q,2)*.1})`,x.style.zIndex=String(10-Math.round(Q)),x.classList.toggle("on",S===it),x.tabIndex=S===it?0:-1,x.setAttribute("aria-current",S===it?"true":"false")}),o.querySelectorAll("[data-dot]").forEach((x,S)=>x.setAttribute("aria-selected",String(S===it))),o.querySelectorAll("[data-step]").forEach(x=>{x.disabled=+x.dataset.step<0&&it===0||+x.dataset.step>0&&it===ja.length-1})}let b=0,u=!1,v=!1;function J(r,n,y){let x=0,S=0,k=null,Q=null,te=0,E=0,oe=null;r.addEventListener("touchstart",re=>{let qe=re.touches[0];te=qe.clientX,E=qe.clientY,oe=null},{passive:!0}),r.addEventListener("touchmove",re=>{if(re.touches.length>1)return;let qe=re.touches[0],pe=qe.clientX-te,ve=qe.clientY-E;!oe&&Math.hypot(pe,ve)>6&&(oe=Math.abs(pe)>Math.abs(ve)?"x":"y"),oe==="x"&&re.cancelable&&re.preventDefault()},{passive:!1}),r.addEventListener("touchend",()=>{setTimeout(()=>{oe=null},0)},{passive:!0}),r.addEventListener("pointerdown",re=>{re.button||(x=re.clientX,S=re.clientY,k=re.pointerId,Q=null,v=!1)}),r.addEventListener("pointermove",re=>{if(re.pointerId!==k)return;let qe=re.clientX-x,pe=re.clientY-S;!Q&&Math.hypot(qe,pe)>8&&(Q=oe??(Math.abs(qe)>Math.abs(pe)?"x":"y"),Q==="x"&&(r.setPointerCapture(k),u=!0)),Q==="x"&&(b=qe,v=!0,y())});let Te=re=>{if(re.pointerId===k){if(k=null,u=!1,Q==="x"){let qe=b<-60?1:b>60?-1:0;b=0,n(qe),y(),setTimeout(()=>{v=!1},0)}Q=null}};r.addEventListener("pointerup",Te),r.addEventListener("pointercancel",Te),r.addEventListener("dragstart",re=>re.preventDefault());let j=0,A=0;r.addEventListener("wheel",re=>{if(Math.abs(re.deltaX)<=Math.abs(re.deltaY))return;re.preventDefault();let qe=performance.now();qe<A||(j+=re.deltaX,Math.abs(j)>60&&(n(Math.sign(j)),j=0,A=qe+380))},{passive:!1})}function ae(r){return""}function Ce(){return`<footer class="ft"><a href="#/" class="wm small" aria-label="The Light Orb \u2014 Home">${Pr}</a>
      <nav aria-label="Footer"><a href="#/design">Web Design</a><a href="#/about">About</a><a href="#/sound">Sound</a><a href="#/membership">Membership</a><a href="#/changelog">What\u2019s new</a><a href="#/account">Account</a>${xt.profile()?.email?"":'<a href="#/signup">Join early access</a>'}<a href="intro.html?replay">Replay intro</a><a href="mailto:trescarla@gmail.com">Contact</a></nav>
      <nav aria-label="Legal"><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a><a href="#/licence">Licence</a></nav>
      <span class="ft-n">${"Early access \xB7 free to explore while it takes shape."}</span>
      ${["membership","signup","signin"].includes(be.name)||xt.profile()?.email?"":qr("footer",{compact:!0})}</footer>`}let Xe=0,jt={"orb-slider":Nr,"orb-wave":[{id:"gentle",name:"Gentle",line:"Wide, soft ripples.",p:{strength:.6,scale:110}},{id:"classic",name:"Classic",line:"The ripple from the intro.",p:{strength:1,scale:70}},{id:"deep",name:"Deep",line:"Tight, strong rings.",p:{strength:1.6,scale:45}},{id:"rain",name:"Rain",line:"Many small, quick rings, like drops on water.",p:{strength:.5,scale:28}}],"background-pack":[{id:"classic",name:"Classic",line:"The horizon as in the intro.",p:{horizon:.3,lamp:.9}},{id:"wide",name:"Wide floor",line:"A low horizon and more floor.",p:{horizon:.18,lamp:.9}},{id:"high",name:"High horizon",line:"A high horizon and more sky.",p:{horizon:.45,lamp:.9}},{id:"lantern",name:"Lantern",line:"A brighter lamp around the Orb in the dark world.",p:{horizon:.3,lamp:1.6}}],"crystal-controls":Nr},wt=r=>r?.code==="kit",ra=(r,n,y)=>`<iframe class="kit-frame" data-kit="${r}|${n}|${y?1:0}" title="${y?"Preview":"Live preview"}"${y?' tabindex="-1" aria-hidden="true" loading="lazy"':""}></iframe>`,Tt=r=>r.querySelectorAll("[data-kit]").forEach(n=>{let[y,x,S]=n.dataset.kit.split("|");n.srcdoc=er(y,x,{mini:S==="1"})}),Ue=[...Br.filter(r=>Po.includes(r.id)).map(r=>({id:`obj-${r.id}`,obj:r.id,fam:"obj",ext:".obj",cat:r.cat,name:r.name,kind:r.line})),...zr.map(r=>({id:r.id,live:r.id,fam:"live",ext:".orb",cat:r.cat,name:r.name,kind:r.line,sphere:r.sphere,badge:r.badge,href:`#/products/${r.id}`})),...Xt.map(r=>({id:`orb-${r.id}`,fam:"orb",variant:r.id,sphere:r.id,ext:".orb",cat:"Orbs",name:r.id==="clear"?"The Orb":`The Orb \xB7 ${r.name}`,kind:r.line,href:`#/products/orb${r.id==="clear"?"":`?variant=${r.id}`}`})),...Qr.filter(r=>r.id!=="orb").flatMap(r=>jt[r.id].map((n,y)=>({id:y?`${r.id}-${n.id}`:r.id,fam:r.id,variant:y?n.id:null,ext:wt(r)?".html":".kit",cat:wt(r)?"Controls":"Effects",name:`${r.name} \xB7 ${n.name}`,kind:n.line,mini:wt(r)?ra(r.id,n.id,!0):null,cls:n.cls,dark:n.dark,img:wt(r)?null:`./media/products/${r.id}.jpg`,pos:r.id==="background-pack"?`50% ${Math.round(30+(n.p.horizon-.3)*160)}%`:null,href:`#/products/${r.id}${y?`?variant=${n.id}`:""}`})))],lt=(()=>{let r=Ue.filter(pe=>pe.fam==="orb"),n=Ue.filter(pe=>wt(sa(pe.fam))),y=Ue.filter(pe=>pe.obj),x={};r.forEach(pe=>(x[Xt.find(ve=>ve.id===pe.variant)?.base??"x"]||=[]).push(pe));let S=Object.values(x),k=[];for(let pe=0;k.length<r.length;pe++)S.forEach(ve=>ve[pe]&&k.push(ve[pe]));let Q=[...new Set(n.map(pe=>pe.fam))],te=[];for(let pe=0;te.length<n.length;pe++)Q.forEach(ve=>{let Ie=n.filter(Je=>Je.fam===ve)[pe];Ie&&te.push(Ie)});let E={1:"lens",4:"type"},oe={6:"light-orb",12:"voice-orb"},Te=Ue.length,j=[],A=0,re=0,qe=0;for(let pe=0;pe<Te;pe++){if(E[pe]){j.push(y.find(Ie=>Ie.obj===E[pe]));continue}if(oe[pe]){j.push(Ue.find(Ie=>Ie.live===oe[pe]));continue}qe+=te.length,qe>=k.length+te.length-qe&&j.at(-1)?.fam!==te[re]?.fam&&!wt(sa(j.at(-1)?.fam))&&re<te.length||A>=k.length?(j.push(te[re++]),qe-=k.length+te.length):j.push(k[A++])}return j.filter(Boolean).concat(k.slice(A),te.slice(re)).filter((pe,ve,Ie)=>Ie.indexOf(pe)===ve)})(),ht=_t?"Free to try \xB7 Code on request":"Free \xB7 Early access",Se=(r,n="")=>"";function at(r){r.querySelectorAll("[data-cart]").forEach(n=>n.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation();let x=lt.find(k=>k.id===n.dataset.cart)||Al().find(k=>k.id===n.dataset.cart),S=ea.toggle({id:x.id,name:x.name,href:x.href||"#/sound"});S&&_e("add_to_cart",{item:x.id}),n.setAttribute("aria-pressed",String(S)),n.querySelector("span").textContent=S?"In cart":"Add to cart",t.sfx(S?"confirm":"select")}))}let It=(r,n,y)=>`<button class="gb small" type="button" data-fsave="${r}|${n}" data-name="${ue(y)}" aria-pressed="${xt.isSaved(r,n)}">${rt.heart}<span>${xt.isSaved(r,n)?"Saved":"Save"}</span></button>`;function Sa(r,n){r.querySelectorAll("[data-fsave]").forEach(y=>y.addEventListener("click",x=>{x.preventDefault(),x.stopPropagation();let[S,k]=y.dataset.fsave.split("|"),Q=xt.toggleSaved(S,k,y.dataset.name,n(S,k));Q&&_e("save",{kind:S,item:k}),y.setAttribute("aria-pressed",String(Q)),y.querySelector("span").textContent=Q?"Saved":"Save",t.sfx(Q?"confirm":"select")}))}let $a="All";function Wr(){let r;try{r=localStorage.getItem("lo.productsView")}catch{}lt.some(j=>!j.lookupOnly&&j.cat===$a)||($a="All"),r!=="grid"&&r!=="large"&&(r=matchMedia("(max-width: 700px)").matches?"grid":"large");let n='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg>',y=j=>`<article class="file glass" data-href="${j.href}" data-cat="${j.cat}">
        <div class="file-v" data-sphere="${j.sphere}"><span class="file-ext">${j.ext}</span><span class="lv-badge">${j.live==="voice-orb"?n:""}${j.badge}</span></div>
        <div class="file-m"><h3><a class="file-link" href="${j.href}">${ue(j.name)}</a></h3><p class="file-c">${j.cat}</p><p>${ue(j.kind)}</p><p class="file-p soon">${Yo}</p></div>
        <div class="file-a"><a class="gb small primary" href="${j.href}">${j.live==="voice-orb"?"Try it":"Open"}</a>${It("product",j.id,j.name)}</div></article>`,x=j=>j.live?y(j):j.obj?`<article class="file glass" data-obj-card="${j.obj}" data-cat="${j.cat}" tabindex="0">
        <div class="file-v has-obj" data-obj="${j.obj}"><span class="file-ext">${j.ext}</span><span class="file-tag">New</span></div>
        <div class="file-m"><h3><a class="file-link" href="#/products?obj=${j.obj}" data-obj-open="${j.obj}">${ue(j.name)}</a></h3><p class="file-c">${j.cat}</p><p>${ue(j.kind)}</p><p class="file-p soon">${xo}</p></div>
        <div class="file-a obj-a"><button class="gb small primary" type="button" data-obj-open="${j.obj}">Open</button>${It("product",j.id,j.name)}</div></article>`:`<article class="file glass" data-href="${j.href}" data-cat="${j.cat}">
        <div class="file-v ${j.cls??""}${j.mini?" has-kit":""}${j.dark?" is-dark":""}"${j.sphere?` data-sphere="${j.sphere}"`:""}>${j.img?`<img src="${j.img}" alt="" draggable="false" loading="lazy"${j.pos?` style="object-position:${j.pos}"`:""}>`:""}${j.mini??""}<span class="file-ext">${j.ext}</span></div>
        <div class="file-m"><h3><a class="file-link" href="${j.href}">${ue(j.name)}</a></h3><p class="file-c">${j.cat}</p><p>${ue(j.kind)}</p><p class="file-p">${ht}</p></div>
        <div class="file-a ds-a">${`${j.fam==="orb"||wt(sa(j.fam))?`<a class="gb small" href="${j.href}${j.href.includes("?")?"&":"?"}${_t?'try=1">Try it \u2014 free':'get=1">Get it free'}</a>`:`<a class="gb small" href="${j.href}">Coming to early access</a>`}`}${It("product",j.id,j.name)}</div></article>`;o.innerHTML=`
      <section class="dest shop">
        ${ae("products")}
        <header class="dh dh-row"><div><h1>All Products</h1><p class="dh-l">Interactive pieces for your website. Open any one to try it live.</p></div><div class="segbar view-tg" role="radiogroup" aria-label="View">${["grid","large"].map(j=>`<button class="pill" role="radio" type="button" data-pview="${j}" aria-checked="${j===r}">${j==="grid"?"Grid":"Large"}</button>`).join("")}</div></header>
        <div class="shop-cats" role="toolbar" aria-label="Filter by category"><div class="segbar">${["All",...["Orbs","Materials","Typography","Interaction","Controls"].filter(j=>lt.some(A=>!A.lookupOnly&&A.cat===j))].map(j=>`<button class="pill" type="button" data-cat="${j}" aria-pressed="${j===$a}">${j}<span class="n">${j==="All"?lt.filter(A=>!A.lookupOnly).length:lt.filter(A=>!A.lookupOnly&&A.cat===j).length}</span></button>`).join("")}</div></div>
        <div class="file-grid${r==="grid"?" is-compact":""}">${lt.filter(j=>!j.lookupOnly).map(x).join("")}</div>
      </section>${Ce()}`,at(o),Sa(o,(j,A)=>lt.find(re=>re.id===A)?.href??"#/products");let S=()=>document.documentElement.dataset.theme==="dark",k=j=>{let[A,re]=j.dataset.kit.split("|");return er(A,re,{mini:!0,dark:S()})},Q=new IntersectionObserver(j=>j.forEach(A=>{let re=A.target;A.isIntersecting?re.srcdoc||(re.srcdoc=k(re)):re.srcdoc&&(re.removeAttribute("srcdoc"),re.src="about:blank")}),{rootMargin:"600px 0px"}),te=new IntersectionObserver(j=>j.forEach(A=>A.target.contentWindow?.postMessage(A.isIntersecting?"lo:play":"lo:pause","*")));o.querySelectorAll(".file-v .kit-frame").forEach(j=>{Q.observe(j),te.observe(j),j.addEventListener("load",()=>j.contentWindow?.postMessage("lo:play","*"))});let E=new MutationObserver(()=>o.querySelectorAll(".file-v .kit-frame[srcdoc]").forEach(j=>j.contentWindow?.postMessage(`lo:theme:${S()?"dark":"light"}`,"*")));E.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),yt.push(()=>{Q.disconnect(),te.disconnect(),E.disconnect()}),o.querySelectorAll(".file[data-href]").forEach(j=>j.addEventListener("click",A=>{A.defaultPrevented||A.target.closest("button, a")||(t.sfx("open"),location.hash=j.dataset.href)})),o.querySelectorAll("[data-obj]").forEach(j=>{let A=Fr(j,j.dataset.obj);yt.push(()=>A.dispose())});let oe=j=>{t.sfx("open"),ni(j)};o.querySelectorAll("[data-obj-card]").forEach(j=>{j.addEventListener("click",A=>{if(!A.target.closest("[data-fsave]")){if(A.target.closest("a.file-link")){if(A.button||A.metaKey||A.ctrlKey||A.shiftKey)return;A.preventDefault()}oe(j.dataset.objCard)}}),j.addEventListener("keydown",A=>{(A.key==="Enter"||A.key===" ")&&A.target===j&&(A.preventDefault(),oe(j.dataset.objCard))})});let Te=()=>{o.querySelectorAll(".shop-cats [data-cat]").forEach(j=>j.setAttribute("aria-pressed",String(j.dataset.cat===$a))),o.querySelectorAll(".file-grid .file").forEach(j=>{j.hidden=$a!=="All"&&j.dataset.cat!==$a})};if(o.querySelectorAll(".shop-cats [data-cat]").forEach(j=>j.addEventListener("click",()=>{$a=j.dataset.cat,t.sfx("select"),Te()})),Te(),be.query.obj&&Po.includes(be.query.obj)){let j=be.query.obj;setTimeout(()=>{o.querySelector(`[data-obj-card="${j}"]`)?.scrollIntoView({block:"center"}),ni(j,{onClose:()=>{history.replaceState(null,"","#/products"),pi("#/products")}})},120)}o.querySelectorAll("[data-sphere]").forEach(j=>{let A=dr(j,j.dataset.sphere,{reduced:i,interactive:r!=="grid"});yt.push(()=>A.dispose())}),o.querySelectorAll("[data-pview]").forEach(j=>j.addEventListener("click",()=>{if(j.dataset.pview===r)return;try{localStorage.setItem("lo.productsView",j.dataset.pview)}catch{}t.sfx("press");let A=scrollY;yt.forEach(re=>re()),yt=[],Wr(),scrollTo(0,A)}))}function Ua(){let r=Dn(be.id);if(r){let E=Bn(r,{page:o,product:c,audio:t,esc:ue,ICON:rt,footer:Ce,cleanup:yt,track:_e});ct={id:r.id,el:E.el,host:E.host,live:!0},Sa(o,()=>`#/products/${r.id}`);return}let n=sa(be.id);if(!n||n.published===!1){location.replace("#/products");return}let y=wt(n),x=n.id==="orb"?Xt:jt[n.id],S=x.some(E=>E.id===be.query.variant)?be.query.variant:x[0].id,k=E=>x.find(oe=>oe.id===E),Q=E=>n.id==="orb"?`orb-${E}`:E===x[0].id?n.id:`${n.id}-${E}`;if(o.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/products">${rt.back}<span>Products</span></a>
        <div class="pd-grid">
          <div class="pd-stage glass${y?" has-kit":""}" data-stage>${y?ra(n.id,S,!1):gl(n.id)}</div>
          <div class="pd-info info-dark">
            <p class="kicker">${ue(n.id==="orb"?"Sphere":n.kind)}</p><h1>${ue(n.name)}</h1>
            <p class="lede">${ue(Eo[n.id].lede)}</p>
            ${x?`<div class="vars"><p class="lbl">Version</p><div class="segbar" role="radiogroup" aria-label="Version">${x.map(E=>`<button class="pill" role="radio" type="button" data-variant="${E.id}" aria-checked="${E.id===S}">${E.name}</button>`).join("")}</div><p class="var-line" data-vline></p></div>`:""}
            <p class="price" data-price>${ht}</p>
            <div class="acts eq">${n.id==="orb"||y?_t?so(n.id,n.name):`<button class="gb small primary" type="button" data-getfree>${rt.check}<span>Get it free</span></button>`:'<button class="gb small primary" type="button" data-soon aria-expanded="false" aria-controls="ea-wait"><span>Coming to early access</span></button>'}${It("product",Q(S),n.name)}</div>
            ${_t&&(n.id==="orb"||y)?"":n.id==="orb"?cl():y?pl():`<div class="ea-wait" id="ea-wait" hidden>${qr("product",{compact:!0,label:`Get an email when ${ue(n.name)} is ready to take, free`})}</div>`}
            ${sr?`<a class="studio-lock" href="#/studio?family=${n.id}">${rt.check}<span><b>Customise in Studio</b><small>Open to everyone \xB7 Beta</small></span></a>`:'<p class="pd-studio-soon">Customising in Studio is not available yet \u2014 Studio is coming soon. <a href="#/studio">Get notified</a></p>'}
            <dl class="facts ds-facts"><dt>What it does</dt><dd>${ue(Eo[n.id].does)}</dd><dt>You receive</dt><dd>${n.receives.map(ue).join(" \xB7 ")}</dd>
              <dt>Availability</dt><dd>${n.id==="orb"||y?_t?"Try it: free, right here, no sign-up. Source code: on request \u2014 the demo never needs it.":"Free during early access \u2014 the code is on this page.":"Not available to take yet. Leave your email above to hear when it is."}</dd>
              <dt>Licence</dt><dd>Personal and commercial use; no resale of the source. <a href="#/licence">Read the licence</a></dd>
              <dt>Questions</dt><dd><a href="mailto:trescarla@gmail.com">trescarla@gmail.com</a></dd></dl>
            <details class="acc"><summary>Compatibility and installation</summary><p>${ue(Eo[n.id].tech)}</p></details>
          </div>
        </div>
        <p class="pd-scroll"><a href="#pd-more" data-pdmore>${wr(n.id)?"The full story":`More about ${ue(n.name)}`} ${rt.down}</a></p>
      </section>${wr(n.id)?Ds(wr(n.id)):uo(n.id,n.name)}${Ce()}`,at(o),Sa(o,(E,oe)=>`#/products/${n.id}`),fl(n.id,o.querySelector("[data-stage]"),S),o.querySelector("[data-pdmore]")?.addEventListener("click",E=>{E.preventDefault(),o.querySelector("#pd-more")?.scrollIntoView({behavior:i?"auto":"smooth",block:"start"})}),wr(n.id)){let E=Bs(o,{story:wr(n.id),reduced:i,demos:{sphere:Ns(dr)},act:{top:()=>o.querySelector(".pd")?.scrollIntoView({behavior:i?"auto":"smooth",block:"start"}),request:()=>{let oe=o.querySelector("[data-request-code]");oe?.scrollIntoView({behavior:i?"auto":"smooth",block:"center"}),setTimeout(()=>oe?.click(),i?0:450)}}});yt.push(()=>E.dispose())}_e("product_open",{product:n.id,variant:S});let te=E=>{ct.sphere?.setKind(E),ct.bloomMic?.setVariant(E),n.id==="orb"&&ct&&ml(E===hl);let oe=k(E),Te=o.querySelector("[data-stage]");if(y){Te.querySelector("[data-kit]").dataset.kit=`${n.id}|${E}|0`,Tt(Te);let pe=o.querySelector(".free-c code");pe&&(pe.textContent=er(n.id,E))}else n.id!=="orb"&&(Te.classList.remove("v-dark","v-frost","v-compact"),oe.cls&&Te.classList.add(oe.cls),oe.p&&kt.set(oe.p));o.querySelectorAll("[data-variant]").forEach(pe=>pe.setAttribute("aria-checked",String(pe.dataset.variant===E)));let j=o.querySelector("[data-vline]");if(j&&(j.textContent=k(E).line),n.id==="orb"){let pe=!0;o.querySelector("[data-price]").textContent=ht;let ve=o.querySelector("[data-free]");ve&&(ve.hidden=!pe);let Ie=o.querySelector(".free-c code");Ie&&(Ie.textContent=Yr(E))}let A=o.querySelector("[data-cart]");if(A&&(A.dataset.cart=Q(E)),A){let pe=ea.has(A.dataset.cart);A.setAttribute("aria-pressed",String(pe)),A.querySelector("span").textContent=pe?"In cart":"Add to cart"}let re=o.querySelector("[data-fsave]");re.dataset.fsave=`product|${Q(E)}`;let qe=xt.isSaved("product",Q(E));re.setAttribute("aria-pressed",String(qe)),re.querySelector("span").textContent=qe?"Saved":"Save",history.replaceState(null,"",`#/products/${n.id}${E===x[0].id?"":`?variant=${E}`}`)};ul(o,y?n.id:"orb"),lo(o,{audio:t,variant:()=>o.querySelector("[data-variant][aria-checked=true]")?.dataset.variant??"",autoOpen:!!(be.query.request||be.query.get)}),be.query.get&&setTimeout(()=>o.querySelector("[data-getfree]")?.click(),60),o.querySelector("[data-download]")?.addEventListener("click",()=>{let E=o.querySelector("[data-variant][aria-checked=true]")?.dataset.variant??x[0].id;yi(`${n.id}-${E}.html`,er(n.id,E)),t.sfx("confirm"),_e("free_code_download",{product:n.id,variant:E})}),o.querySelector("[data-getfree]")?.addEventListener("click",()=>{let E=o.querySelector("[data-freebtn]");E?.getAttribute("aria-expanded")!=="true"&&E?.click(),E?.scrollIntoView({block:"nearest",behavior:"smooth"})}),o.querySelector("[data-soon]")?.addEventListener("click",E=>{let oe=o.querySelector("#ea-wait"),Te=oe.hidden;oe.hidden=!Te,E.currentTarget.setAttribute("aria-expanded",String(Te)),t.sfx(Te?"open":"close"),Te&&oe.querySelector("input")?.focus()}),o.querySelectorAll("[data-variant]").forEach(E=>E.addEventListener("click",()=>{te(E.dataset.variant),t.sfx("select"),_e("variant",{product:n.id,variant:E.dataset.variant})})),te(S)}let Yr=(r="clear")=>`<div data-light-orb${r==="clear"?"":` data-variant="${r}"`} style="width:320px;height:320px"></div>
<script type="module" src="https://thelightorb.com/embed/v1/orb.js"><\/script>`,Aa=Yr();function cl(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${rt.check}<span>Get the code \u2014 free</span></button>
      <p class="note pd-facts">Works on any website \xB7 one script tag, about 170 KB compressed \xB7 respects reduced motion</p>
      <div class="free-p" id="free-code" hidden><p class="note">Paste this where the Orb should appear. It fills the box you give it; drag to turn it, tap to stir it.</p>
        <pre class="free-c glass"><code>${ue(Aa)}</code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function pl(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${rt.check}<span>Get the code \u2014 free</span></button>
      <p class="note pd-facts">Works on any website \xB7 one .html file, about 14 KB, no dependencies \xB7 respects reduced motion</p>
      <div class="free-p" id="free-code" hidden><p class="note">One self-contained file: open it in a browser, or paste its style, markup and script into your page. Change the material with the --cc-* variables at the top.</p>
        <pre class="free-c glass kit-code"><code></code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button><button class="gb small" type="button" data-download><span>Download .html</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function yi(r,n){let y=URL.createObjectURL(new Blob([n],{type:"text/html"})),x=document.createElement("a");x.href=y,x.download=r,document.body.append(x),x.click(),x.remove(),setTimeout(()=>URL.revokeObjectURL(y),1e3)}function ul(r,n="orb"){let y=r.querySelector("[data-freebtn]");if(!y)return;let x=r.querySelector("#free-code"),S=r.querySelector("[data-copy]");y.addEventListener("click",()=>{let k=x.hidden;x.hidden=!k,y.setAttribute("aria-expanded",String(k)),t.sfx(k?"open":"select"),k&&_e("free_code_open",{product:n})}),S.addEventListener("click",async()=>{let k=!1;try{await navigator.clipboard.writeText(r.querySelector(".free-c code").textContent),k=!0}catch{let Q=document.createRange();Q.selectNodeContents(r.querySelector(".free-c code"));let te=getSelection();te.removeAllRanges(),te.addRange(Q)}S.querySelector("span").textContent=k?"Copied":"Selected \u2014 press Copy",k&&(t.sfx("select"),_e("free_code_copy",{product:n})),setTimeout(()=>{S.isConnected&&(S.querySelector("span").textContent="Copy code")},2200)})}let Eo={orb:{lede:"A 3D sphere you can place in your own work. Choose the material and what it holds inside.",does:"Drag to turn it; it keeps turning slowly on its own. A tap makes whatever is in it move a little faster. Twenty versions: clear glass, liquid metal, porcelain, bloom, and glass holding a light, points of light, glitter or beads.",tech:"An ES module built on Three.js r186 (WebGL 2). Works in current Chrome, Safari, Edge and Firefox. The integration notes explain how to place it in a page and choose a version."},"orb-slider":{lede:"A glass capsule whose thumb is a small orb with its own slow inner light. Slide it to enter.",does:"A slide-to-confirm control. Drag the orb; let go and a spring carries it home, or to the end to confirm (it then sends a confirm event). Arrow keys, Enter, Home and End work too.",tech:"One HTML file: CSS variables for the material and a few lines of plain JavaScript. No framework, no WebGL. Current Chrome, Safari, Edge and Firefox."},"orb-wave":{lede:"The ripple the Orb leaves on the floor when it lands, drawn in light.",does:"Each touch raises a wave that spreads across the surface and fades.",tech:"A full-screen shader with an impact API: position, strength and scale. Needs WebGL 2."},"background-pack":{lede:"Two environments in one pack: a dark world and a light one, and the change between them.",does:"Moves smoothly from dark to light, controlled by a single exposure value.",tech:"A full-screen shader with exposure, horizon and lamp controls. Needs WebGL 2."},"crystal-controls":{lede:"Buttons, switches, fields and sliders in six glass materials. A highlight follows the pointer; presses give like glass on a spring.",does:"Every control has default, hover, focus, pressed, selected, disabled and loading states. Choose Clear, Smoke, Chrome, Porcelain, Gel or Bloom; each is a set of CSS variables.",tech:"One HTML file: plain CSS and a few lines of JavaScript for the pointer light and the slider spring. No framework. Current Chrome, Safari, Edge and Firefox."}};function gl(r){return r==="orb"?'<div class="pd-sph" data-sph></div><span class="pd-hint">Drag to turn it. Tap to stir it.</span><button class="gb gc bloom-mic" data-bloom-mic type="button" aria-label="Turn the microphone on" aria-pressed="false" title="Let your voice move the Orb"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 10v1a6 6 0 0 0 12 0v-1M12 17v4M9 21h6"/></svg></button><span class="bloom-mic-status" data-bloom-mic-status role="status" aria-live="polite"></span>':r==="orb-slider"?'<div class="cap" data-cap role="slider" tabindex="0" aria-label="Slide to enter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="cap-l">slide to enter</span></div>':r==="orb-wave"?'<button class="gb small pd-btn" type="button" data-drop>Drop the Orb</button><span class="pd-hint">Or tap the floor.</span>':r==="background-pack"?'<div class="segbar pd-seg" role="radiogroup" aria-label="Environment"><button class="pill" role="radio" type="button" data-env="0" aria-checked="false">Dark world</button><button class="pill" role="radio" type="button" data-env="1" aria-checked="true">Light</button></div>':`<div class="kit"><button class="gb primary" type="button">Continue</button><button class="gb" type="button">Secondary</button><button class="gb gc" type="button" aria-label="Confirm">${rt.check}</button>
      <button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><input class="gi" placeholder="Your name" aria-label="Example field">
      <input class="grange" type="range" value="60" aria-label="Example slider" style="--p:60%"><button class="gb" type="button" disabled>Disabled</button><button class="gb" type="button" aria-busy="true">Loading</button></div>`}let ct=null,hl="clear";function ml(r){if(!ct)return;ct.real=r;let n=ct.el.querySelector("[data-sph]");if(n)for(let y of n.children)y.style.visibility=r?"hidden":"";r?c.show(Ut(ha("original").config)):c.hide()}function fl(r,n,y="clear"){if(ct={id:r,el:n,cap:0,drop:null},!(r==="crystal-controls"||r==="orb-slider")){if(r!=="orb"&&c.show(Ut(ha("original").config)),r==="orb"){ct.sphere=dr(n.querySelector("[data-sph]"),y,{reduced:i}),yt.push(()=>ct?.sphere?.dispose());let x=n.querySelector("[data-bloom-mic]"),S=n.querySelector("[data-bloom-mic-status]"),k=t.microphone({onState({status:re,error:qe}){let pe=re==="listening",ve=re==="requesting";x.setAttribute("aria-pressed",String(pe)),x.setAttribute("aria-label",pe?"Turn the microphone off":ve?"Cancel the microphone request":"Turn the microphone on"),x.dataset.state=re,x.title=pe?"Microphone on \u2014 your voice moves the Orb":ve?"Waiting for microphone permission":"Let your voice move the Orb",S.textContent=qe||(pe?"Listening":""),S.classList.toggle("is-error",!!qe)},onLevel(re){x.style.setProperty("--input-level",re.toFixed(3))}});ct.sphere.setVoiceInput(()=>k.sample()),ct.bloomMic={setVariant(){x.hidden=!1}},x.addEventListener("click",re=>{re.stopPropagation(),t.sfx("select"),k.toggle()}),yt.push(()=>k.dispose());let Q=n.querySelector("[data-sph]"),te=null,E=0,oe=0,Te=0,j=()=>{Te=0,!(!ct?.real||te)&&(E*=.94,oe+=E,c.orb?.setObjectYaw(oe),Math.abs(E)>5e-4&&(Te=requestAnimationFrame(j)))};Q.addEventListener("pointerdown",re=>{ct?.real&&(te={x:re.clientX,t:performance.now(),moved:0},Q.setPointerCapture(re.pointerId))}),Q.addEventListener("pointermove",re=>{if(!te||!ct?.real)return;let qe=re.clientX-te.x;te.x=re.clientX,te.moved+=Math.abs(qe),E=qe*.012,oe+=E,c.orb?.setObjectYaw(oe)});let A=()=>{if(!te)return;let re=te.moved<6;te=null,re?(c.orb?.nudge(.8),t.sfx("detent")):Te||(Te=requestAnimationFrame(j))};Q.addEventListener("pointerup",A),Q.addEventListener("pointercancel",A),yt.push(()=>{cancelAnimationFrame(Te),ct?.real&&c.hide()})}if(r==="orb-slider"){let x=n.querySelector("[data-cap]"),S=null,k=te=>{ct.cap=ya(te),x.setAttribute("aria-valuenow",Math.round(ct.cap*100))};x.addEventListener("pointerdown",te=>{S={x:te.clientX,v:ct.cap},x.setPointerCapture(te.pointerId),t.sfx("select")}),x.addEventListener("pointermove",te=>{S&&k(S.v+(te.clientX-S.x)/(x.offsetWidth-x.offsetHeight))});let Q=()=>{S&&(S=null,c.orb?.nudge(.5),ct.cap>.9?(k(1),t.sfx("confirm")):(k(0),t.sfx("select")))};x.addEventListener("pointerup",Q),x.addEventListener("pointercancel",Q),x.addEventListener("keydown",te=>{te.key==="ArrowRight"&&k(ct.cap+.1),te.key==="ArrowLeft"&&k(ct.cap-.1),te.key==="End"&&k(1),te.key==="Home"&&k(0)})}if((r==="orb-wave"||r==="background-pack")&&(co(n),e.addBackdrop(kt.canvas),kt.set({horizon:.3,strength:1,scale:70}),kt.setExposure(r==="background-pack"?1:0,!0),r==="orb-wave"&&(n.addEventListener("pointerdown",x=>{if(x.target.closest("button"))return;let S=n.getBoundingClientRect(),k=x.clientY-S.top;k>S.height*.55&&(kt.impact(x.clientX-S.left,k),c.orb?.nudge(.7),t.sfx("detent"))}),n.querySelector("[data-drop]").addEventListener("click",()=>{ct.drop={vy:0,y:null,contacts:0},t.sfx("select")})),r==="background-pack"&&n.querySelectorAll("[data-env]").forEach(x=>x.addEventListener("click",()=>{kt.setExposure(+x.dataset.env),t.sfx("open"),n.querySelectorAll("[data-env]").forEach(S=>S.setAttribute("aria-checked",String(S===x)))}))),r==="crystal-controls"){n.querySelectorAll(".gb:not([disabled])").forEach(S=>S.addEventListener("click",()=>t.sfx("select"))),n.querySelector(".gsw").addEventListener("click",S=>{let k=S.currentTarget;k.setAttribute("aria-checked",String(k.getAttribute("aria-checked")!=="true")),t.sfx("select")}),n.querySelector(".gi").addEventListener("input",S=>{S.isTrusted&&t.sfx("type")});let x=n.querySelector(".grange");x.addEventListener("input",()=>{x.style.setProperty("--p",`${x.value}%`),t.sfx("level",x.value/100)})}}}let Ur=2,Vr=(r,n="")=>`<span class="dev" data-dev><span class="dev-body"><span class="dev-screen"><img src="${r.cover.src}" alt="${ue(n)}" draggable="false" decoding="async" fetchpriority="high"${n?' width="1600" height="1000"':""}></span><span class="dev-glare" aria-hidden="true"></span></span><span class="dev-floor" aria-hidden="true"></span></span>`;function wi(r){i||r.querySelectorAll("[data-dev]").forEach(n=>{n.addEventListener("pointermove",y=>{let x=n.getBoundingClientRect();n.style.setProperty("--ry",`${((y.clientX-x.left)/x.width-.5)*10}deg`),n.style.setProperty("--rx",`${((y.clientY-x.top)/x.height-.5)*-8}deg`)}),n.addEventListener("pointerleave",()=>{n.style.removeProperty("--ry"),n.style.removeProperty("--rx")})})}let bl=r=>`<!doctype html>
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
`,xl=()=>{let r=Lt.filter(y=>y.sector).length,n=Lt.length-r;return[`${n} ${n===1?"template":"templates"}`,r?`${r} ${r===1?"sector":"sectors"}`:""].filter(Boolean).join(" \xB7 ")};function vl(){let r=Lt.length+Ur;o.innerHTML=`
      <section class="dest tpl">
        <header class="dh"><h1>Complete compositions</h1></header>
        <div class="folder" data-folder>
          <div class="folder-tab glass"><span>Templates</span><small>${xl()}${Ur?` \xB7 ${Ur} in the making`:""}</small></div>
          <div class="folder-body glass"><span class="folder-glow" aria-hidden="true"></span><span class="folder-num" data-fnum aria-hidden="true"></span>
            <div class="folder-track" data-track role="listbox" aria-label="Templates" tabindex="0">
              ${Lt.map((E,oe)=>`<button class="tcard glass" type="button" role="option" data-t="${oe}" aria-label="Open ${ue(E.label??E.name)}">
                <span class="tcard-n">${String(oe+1).padStart(2,"0")}</span>
                <span class="tcard-cv">${Vr(E)}</span>
                ${E.showcase&&!E.sector?`<span class="tcard-tag">${ue(E.category.toLowerCase())}</span>`:""}<span class="tcard-t">${ue(E.label??E.name)}</span>${E.sector?`<span class="tcard-tag tcard-tag-under">${ue(E.category.toLowerCase())}</span>`:""}<span class="tcard-l">${ue(E.line)}</span></button>`).join("")}
              ${Array.from({length:Ur},(E,oe)=>`<div class="tcard glass soon" aria-hidden="true"><span class="tcard-n">${String(Lt.length+oe+1).padStart(2,"0")}</span><span class="tcard-cv"><span class="soon-orb"></span><span class="soon-lbl">In the making</span></span><span class="tcard-t">Next composition</span><span class="tcard-l">Joining the collection soon.</span></div>`).join("")}
            </div>
            <div class="folder-open" data-open hidden></div>
            <div class="folder-ctl" data-fctl><button class="gb gc small" type="button" data-fstep="-1" aria-label="Previous">${rt.prev}</button><span class="count" data-fcount></span><button class="gb gc small" type="button" data-fstep="1" aria-label="Next">${rt.next}</button></div>
          </div>
        </div>
      </section>${Ce()}`;let n=o.querySelector("[data-track]"),y=[...n.children],x=o.querySelector("[data-fctl]"),S=0,k=E=>{y.forEach((oe,Te)=>{let j=Te-S+b/340,A=Math.abs(j);oe.style.transition=E||u?"none":"",oe.style.transform=`translateX(calc(-50% + ${j*96}%)) translateZ(${-A*120}px) rotateY(${ya(-j*18,-30,30)}deg) scale(${1-Math.min(A,2)*.08})`,oe.style.zIndex=String(10-Math.round(A)),oe.style.opacity=String(A>2.2?0:1-A*.22),oe.classList.toggle("on",Te===S),oe.tagName==="BUTTON"&&oe.setAttribute("aria-selected",String(Te===S))}),o.querySelector("[data-fnum]").textContent=String(S+1).padStart(2,"0"),o.querySelector("[data-fcount]").textContent=S<Lt.length?`${String(S+1).padStart(2,"0")} / ${String(Lt.length).padStart(2,"0")}`:"In the making",o.querySelectorAll("[data-fstep]").forEach(oe=>{oe.disabled=+oe.dataset.fstep<0&&S===0||+oe.dataset.fstep>0&&S===r-1})},Q=E=>{let oe=ya(S+E,0,r-1);oe!==S&&(S=oe,t.sfx("detent")),k()};o.querySelectorAll("[data-fstep]").forEach(E=>E.addEventListener("click",()=>Q(+E.dataset.fstep))),n.addEventListener("keydown",E=>{E.key==="ArrowRight"&&(Q(1),E.preventDefault()),E.key==="ArrowLeft"&&(Q(-1),E.preventDefault())}),J(n,Q,()=>k());let te=E=>{let oe=Lt[E];t.sfx("open"),location.hash=oe.sector?Ro(Na.find(Te=>Te.id===oe.sector)):`#/templates/${oe.id}`};y.forEach((E,oe)=>E.tagName==="BUTTON"&&E.addEventListener("click",Te=>{if(v){Te.preventDefault();return}te(oe)})),k(!0)}function Ec(r){r.querySelectorAll("[data-vt]").forEach(n=>n.addEventListener("click",y=>{if(i||!document.startViewTransition||y.metaKey||y.ctrlKey)return;y.preventDefault();let x=n.getAttribute("href");r.querySelector("[data-dev]")?.style.setProperty("view-transition-name","tpl-device"),document.startViewTransition(()=>{history.pushState(null,"",x),pa()})}))}let yl={"the-light-orb":{what:"The opening of this website as a starting point: the Orb hosts the page, a greeting arrives under it, a quotation follows and the visitor chooses where to go.",special:"The Orb is a live WebGL glass object, not a picture: it turns when dragged and answers a tap. The rest is quiet HTML and CSS around it.",pages:["One page: welcome, quotation and destination selector","Hosted Orb embed (any of its versions via data-variant)","Four destination links ready to rename"],responsive:"Fluid type and spacing; the Orb scales with the viewport and the destinations wrap onto several lines on phones.",tech:"Plain HTML and CSS with one ES module script (the hosted Orb embed, Three.js r186, WebGL 2). No framework, no build step. Current Chrome, Edge, Firefox and Safari.",use:"Download the starter, open it in a browser, then edit the greeting, quotation and links. Change data-variant on the Orb to switch its material.",availability:"The starter file is free during early access. The full composition you see on this site is not packaged as a download yet.",starter:["One .html file you open in any browser","The live Orb from the hosted embed, any version","Greeting, quotation slot and four destination links, ready to edit","Fluid layout for phones and large screens"],full:["The arrival sequence: the Orb hosting the page as you scroll","Quotation scene and the destination selector with its motion","Narration and glass sound effects","Source files, documentation and a licence for the whole composition"]}};function wl(){let r=Lt.find(E=>E.id===be.id);if(!r){location.replace("#/templates");return}if(r.sector){location.replace(Ro(Na.find(E=>E.id===r.sector)));return}let n=yl[r.id]??{},y=(E,oe)=>oe?`<dt>${E}</dt><dd>${oe}</dd>`:"";o.innerHTML=`
      <section class="pd tpd">
        <a class="back tl" href="#/templates">${rt.back}<span>Templates</span></a>
        <div class="pd-grid">
          ${r.showcase?`
          <figure class="pd-stage cover-big" data-tcover>${Vr(r,`The beginning of the ${r.name} template.`)}</figure>
          <div class="pd-info"><p class="kicker">${r.showcase?ue(r.category.toLowerCase()):"Template"}</p><h1>${ue(r.label??r.name)}</h1>${r.credit?`<p class="fo-label">${ue(r.credit)}</p>`:""}<p class="lede">${ue(r.line)}</p>
            <div class="acts eq">${r.showcase?`<a class="gb small primary" href="${r.demo}" target="_blank" rel="noopener" aria-label="${ue(r.cta)}, opens in a new tab">${ue(r.cta)}</a>`:'<a class="gb small" href="#/">View it live</a>'}${r.starter&&!0?'<button class="gb small primary" type="button" data-starter>Download starter \u2014 free</button>':""}</div>
            ${r.showcase?'<p class="note">Showcase \xB7 not for sale. Originally designed and built for a maternity and postpartum brand; the demo runs on its own, with purchases disabled.</p>':r.starter&&!0?'<p class="note">A single .html file: the Orb (hosted embed), a greeting, a quotation slot and four destinations, ready to edit. <a href="#/licence">Licence</a></p>':'<p class="note">Purchase opens soon.</p>'}
            <dl class="facts"><dt>Includes</dt><dd>${r.includes.map(ue).join(" \xB7 ")}</dd></dl>
            <p class="note" data-covermeta></p></div>
          `:`
          <div class="tpd-stage">
            <figure class="pd-stage cover-big" data-tcover>${Vr(r,`The beginning of the ${r.name} template.`)}</figure>
            <div class="tpd-live" data-live hidden><div class="tpd-frame" data-frame><iframe title="${ue(r.name)} \u2014 live preview" data-src="intro.html?skip#/"></iframe></div></div>
            <div class="tpd-bar"><div class="segbar" role="radiogroup" aria-label="Preview">
              <button class="pill" role="radio" type="button" data-pv="cover" aria-checked="true">Cover</button>
              <button class="pill" role="radio" type="button" data-pv="1280" aria-checked="false">Desktop</button>
              <button class="pill" role="radio" type="button" data-pv="390" aria-checked="false">Phone</button></div>
              <span class="note" data-covermeta></span></div>
          </div>
          <div class="pd-info"><p class="kicker">Template \xB7 ${String(Lt.indexOf(r)+1).padStart(2,"0")}</p><h1>${ue(r.name)}</h1><p class="lede">${ue(n.what??r.line)}</p>
            <div class="tpd-offer">
              <section class="tpd-o now" aria-labelledby="tpd-o1"><p class="kicker">Available now \xB7 free during early access</p><h2 id="tpd-o1">Starter file</h2>
                ${n.starter?`<ul>${n.starter.map(E=>`<li>${ue(E)}</li>`).join("")}</ul>`:""}
                <div class="acts eq">${r.starter&&!0?'<button class="gb small primary" type="button" data-starter>Download starter (.html)</button>':""}${It("template",r.id,r.name)}</div>
                <p class="note"><a href="#/licence">Licence</a></p></section>
              <section class="tpd-o later" aria-labelledby="tpd-o2"><p class="kicker">In development \xB7 not downloadable</p><h2 id="tpd-o2">Complete template</h2>
                ${n.full?`<ul>${n.full.map(E=>`<li>${ue(E)}</li>`).join("")}</ul>`:""}
                <p class="note">You can explore it live on this site today. It will be offered once its source, sounds and texts are cleared for redistribution.</p></section>
            </div>
            <dl class="facts ds-facts">
              ${y("What makes it",ue(n.special??""))}
              ${y("Pages and features",(n.pages??r.includes).map(ue).join("<br>"))}
              ${y("Responsive",ue(n.responsive??""))}
              ${y("Built with",ue(n.tech??""))}
              ${y("How to use it",ue(n.use??""))}
              ${y("Availability",ue(n.availability??""))}
              ${y("Questions",'<a href="mailto:trescarla@gmail.com">trescarla@gmail.com</a>')}
            </dl>
            <a class="studio-lock" href="#/design"><span><b>Want one made for you?</b><small>Custom web design, built around your idea</small></span></a>
          </div>
          `}
        </div>
      </section>${Ce()}`,wi(o),o.querySelector("[data-tcover] [data-dev]")?.style.setProperty("view-transition-name","tpl-device"),Sa(o,(E,oe)=>`#/templates/${oe}`),o.querySelector("[data-starter]")?.addEventListener("click",()=>{yi(`${r.id}-starter.html`,bl(r)),t.sfx("confirm"),_e("template_starter_download",{template:r.id})});let x=o.querySelector("[data-tcover]"),S=o.querySelector("[data-live]"),k=o.querySelector("[data-frame]"),Q=k?.querySelector("iframe"),te=()=>{let E=+k.dataset.w||1280,oe=E>700?800:844,Te=Math.min(1,S.clientWidth/E);Object.assign(Q.style,{width:`${E}px`,height:`${oe}px`,transform:`scale(${Te})`}),k.style.height=`${oe*Te}px`,k.style.width=`${E*Te}px`};k&&o.querySelectorAll("[data-pv]").forEach(E=>E.addEventListener("click",()=>{k&&o.querySelectorAll("[data-pv]").forEach(j=>j.setAttribute("aria-checked",String(j===E))),t.sfx("press");let oe=E.dataset.pv,Te=()=>{x.hidden=!0,x.classList.remove("is-loading"),S.hidden=!1,te()};if(oe==="cover"){x.hidden=!1,x.classList.remove("is-loading"),S.hidden=!0;return}if(k.dataset.w=oe,_e("template_live_preview",{template:r.id,width:oe}),Q.src){Te();return}x.hidden=!1,S.hidden=!0,x.classList.add("is-loading"),Q.addEventListener("load",()=>{o.querySelector('[data-pv][aria-checked="true"]')?.dataset.pv!=="cover"?Te():x.classList.remove("is-loading")},{once:!0}),Q.src=Q.dataset.src})),k&&(addEventListener("resize",te),yt.push(()=>removeEventListener("resize",te))),fetch(r.cover.meta).then(E=>E.json()).then(E=>{let oe=o.querySelector("[data-covermeta]");oe&&(oe.textContent=r.showcase?`Preview: a capture of the live demo, ${E.captured}.`:`Preview: a capture of this website, ${E.captured}.`)}).catch(()=>{})}let kl=()=>Jt?"https://thelightorb.com/#/templates":"#/templates",Sl=()=>Jt?"https://thelightorb.com/":"#/";function $l(r){let n=$r(r.id),y=[...new Set(n.map(k=>k.category))],x=y.includes(be.query.c)?be.query.c:"All";o.innerHTML=`
      <section class="dest shop sector">
        <a class="back tl" href="${kl()}">${rt.back}<span>Templates</span></a>
        <header class="dh dh-row sector-h"><div><p class="kicker">Website templates</p><p class="sector-line">${ue(r.line)}</p></div>
          <h1 class="relief" aria-label="${ue(r.name)}"><span aria-hidden="true">${ue(r.name.toUpperCase())}</span></h1></header>
        ${y.length>1?`<div class="shop-cats" role="toolbar" aria-label="Filter by category"><div class="segbar">${["All",...y].map(k=>`<button class="pill" type="button" data-cat="${ue(k)}" aria-pressed="${k===x}">${ue(k)}<span class="n">${k==="All"?n.length:n.filter(Q=>Q.category===k).length}</span></button>`).join("")}</div></div>`:""}
        <div class="file-grid sector-grid">${n.map(k=>`<article class="file glass" data-href="#/${r.id}/${k.id}" data-cat="${ue(k.category)}">
          <div class="file-v site-v"><img src="${k.cover.src}" alt="" draggable="false" decoding="async" fetchpriority="high"><span class="file-ext">Website</span></div>
          <div class="file-m"><h3><a class="file-link" href="#/${r.id}/${k.id}">${ue(k.name)}</a></h3><p class="file-c">${ue(k.category)}</p><p>${ue(k.line)}</p></div>
          <div class="file-a"><a class="gb small primary" href="#/${r.id}/${k.id}">Open</a><a class="gb small" href="${k.demo}" target="_blank" rel="noopener" aria-label="Full website, opens in a new tab">Full website</a></div></article>`).join("")}</div>
        <p class="note sector-more">More ${ue(r.name.toLowerCase())} websites are in the making. Only finished, working websites are listed.</p>
      </section>${Ce()}`,o.querySelectorAll(".file[data-href]").forEach(k=>k.addEventListener("click",Q=>{Q.target.closest("button, a")||(t.sfx("open"),location.hash=k.dataset.href)}));let S=()=>{o.querySelectorAll(".shop-cats [data-cat]").forEach(k=>k.setAttribute("aria-pressed",String(k.dataset.cat===x))),o.querySelectorAll(".sector-grid .file").forEach(k=>{k.hidden=x!=="All"&&k.dataset.cat!==x})};o.querySelectorAll(".shop-cats [data-cat]").forEach(k=>k.addEventListener("click",()=>{x=k.dataset.cat,t.sfx("select"),S()})),S()}function El(r){let n=$r(r.id).find(te=>te.id===be.id);if(!n){location.replace(`#/${r.id}`);return}document.title=`${n.name} \xB7 ${r.name} \xB7 The Light Orb`,o.innerHTML=`
      <section class="pd tpd">
        <a class="back tl" href="#/${r.id}">${rt.back}<span>${ue(r.name)}</span></a>
        <div class="pd-grid">
          <div class="tpd-stage">
            <figure class="pd-stage cover-big" data-tcover>${Vr(n,`The beginning of the ${n.name} website.`)}</figure>
            <div class="tpd-live" data-live hidden><div class="tpd-frame" data-frame><iframe title="${ue(n.name)} \u2014 live preview" data-src="${n.demo}"></iframe></div></div>
            <div class="tpd-bar"><div class="segbar" role="radiogroup" aria-label="Preview">
              <button class="pill" role="radio" type="button" data-pv="cover" aria-checked="true">Cover</button>
              <button class="pill" role="radio" type="button" data-pv="1280" aria-checked="false">Desktop</button>
              <button class="pill" role="radio" type="button" data-pv="390" aria-checked="false">Phone</button></div>
              <span class="note" data-covermeta></span></div>
          </div>
          <div class="pd-info"><p class="kicker">${ue(n.category)} \xB7 ${ue(r.name)} ${String($r(r.id).indexOf(n)+1).padStart(2,"0")}</p><h1>${ue(n.name)}</h1><p class="lede">${ue(n.line)}</p>
            <div class="acts eq"><a class="gb small primary" href="${n.demo}" target="_blank" rel="noopener" aria-label="Open the full website, opens in a new tab">Open full website</a>${It("template",`${r.id}-${n.id}`,n.name)}</div>
            <dl class="facts"><dt>Sections</dt><dd>${n.sections.map(ue).join(" \xB7 ")}</dd><dt>Working features</dt><dd>${n.features.map(ue).join(" \xB7 ")}</dd><dt>Format</dt><dd>Single-page website \xB7 desktop and phone</dd></dl>
            <p class="note">A demonstration website: the shop keeps a local cart only, with no payments or orders.</p>
            <a class="studio-lock" href="${Jt?"https://thelightorb.com/#/design":"#/design"}"><span><b>Want one like it for your brand?</b><small>Custom web design by The Light Orb</small></span></a>
            <p class="note"><a href="${Sl()}">\u2190 The Light Orb</a></p>
          </div>
        </div>
      </section>${Ce()}`,wi(o),Sa(o,()=>`#/${r.id}/${n.id}`);let y=o.querySelector("[data-tcover]"),x=o.querySelector("[data-live]"),S=o.querySelector("[data-frame]"),k=S.querySelector("iframe"),Q=()=>{let te=+S.dataset.w||1280,E=te>700?800:844,oe=Math.min(1,x.clientWidth/te);Object.assign(k.style,{width:`${te}px`,height:`${E}px`,transform:`scale(${oe})`}),S.style.height=`${E*oe}px`,S.style.width=`${te*oe}px`};o.querySelectorAll("[data-pv]").forEach(te=>te.addEventListener("click",()=>{o.querySelectorAll("[data-pv]").forEach(Te=>Te.setAttribute("aria-checked",String(Te===te))),t.sfx("press");let E=te.dataset.pv,oe=()=>{y.hidden=!0,y.classList.remove("is-loading"),x.hidden=!1,Q()};if(E==="cover"){y.hidden=!1,y.classList.remove("is-loading"),x.hidden=!0;return}if(S.dataset.w=E,_e("template_live_preview",{template:n.id,width:E}),k.src){oe();return}y.hidden=!1,x.hidden=!0,y.classList.add("is-loading"),k.addEventListener("load",()=>{o.querySelector('[data-pv][aria-checked="true"]')?.dataset.pv!=="cover"?oe():y.classList.remove("is-loading")},{once:!0}),k.src=k.dataset.src})),addEventListener("resize",Q),yt.push(()=>removeEventListener("resize",Q)),fetch(n.cover.meta).then(te=>te.json()).then(te=>{let E=o.querySelector("[data-covermeta]");E&&(E.textContent=`Cover: a capture of the live website, ${te.captured}. Desktop and Phone load the real site.`)}).catch(()=>{})}function ki(){let r=t.prefs.voice,n=[...Xa.map(A=>({group:A.full?"voices":"more",key:`voice_audition.${A.id}`,clip:"voice_audition",voice:A.id,title:A.name,tag:`${A.accent} \xB7 ${A.gender}`,sub:A.line,use:A.id,note:A.full?"":`Page narration in ${A.name}; other guide lines in ${La(A.lines).name}.`})),...["home","products","templates","studio","sound"].map(A=>({group:"guide",key:`${A}.${r}`,clip:A,voice:r,title:A==="home"?"Welcome":A[0].toUpperCase()+A.slice(1),sub:Zr[A]})),...Lr.map(A=>({group:"sfx",key:`sfx.${A.id}`,url:A.file,title:A.name,sub:A.line}))],y=(A,re,qe,pe=!0)=>`<details class="sg"${pe?" open":""}><summary><h2>${re}</h2><span class="sg-n">${n.filter(ve=>ve.group===A).length}</span><p>${qe}</p></summary><div class="sgrid">${n.filter(ve=>ve.group===A).map(ve=>`
      <article class="si si-row"><button class="si-play gb gc small" type="button" data-play="${ve.key}" aria-label="Play ${ue(ve.title)}">${rt.play}</button>
        <div class="si-t"><h3>${ue(ve.title)}${ve.tag?`<span class="file-ext">${ue(ve.tag)}</span>`:'<span class="file-ext">.m4a</span>'}</h3><p>${ue(ve.sub)}</p>${ve.note?`<p class="note">${ue(ve.note)}</p>`:""}</div>
        <div class="si-w" data-wave="${ve.key}" role="slider" tabindex="0" aria-label="Position in ${ue(ve.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><canvas></canvas></div>
        <div class="si-m"><span class="si-d" data-dur="${ve.key}">\u2013:\u2013\u2013</span></div>
        <div class="si-x eq">${ve.use?`<button class="gb small" type="button" data-use="${ve.use}" aria-pressed="${r===ve.use}"><span>${r===ve.use?"In use":"Use voice"}</span></button>`:""}${ve.group!=="guide"?Se({id:`sound-${ve.key}`}):""}${It("sound",ve.key,ve.title)}</div></article>`).join("")}</div></details>`;o.innerHTML=`
      <section class="dest snd-dest">
        ${ae("sound")}
        <header class="dh"><h1>Voices and sounds</h1><p class="dh-l">Twelve neural voices, each reading the same line. Choose one and the guide speaks with it across the site. Current guide voice: <b>${ue(La(r).name)}</b>.</p></header>
        ${y("voices","Guide voices","Every line the guide says, rendered in each of these voices.")}
        ${y("more","More voices","Different characters for the guide. Compare them on the same line.",!1)}
        ${y("guide","Guide narration",`What the guide says on each page, in ${ue(La(r).name)}\u2019s voice.`,!1)}
        ${y("sfx","Interface sounds","Short, quiet sounds for touch, panels and wheels.")}
      </section>${Ce()}`,o.querySelectorAll(".si").forEach(A=>{A.querySelector('[data-play^="sfx."]')&&(A.querySelector(".file-ext").textContent=".wav")}),Sa(o,()=>"#/sound");let x=new Map,S=(A,re)=>{let qe=o.querySelector(`[data-dur="${CSS.escape(A)}"]`);qe&&(qe.textContent=re)},k=new Set,Q=A=>{k.has(A.key)||(k.add(A.key),(A.url?t.peaksUrl(A.url,80):t.peaks(A.clip,A.voice,80)).then(re=>{x.set(A.key,re),S(A.key,Ll(re.duration))}).catch(()=>{k.delete(A.key),S(A.key,"Unavailable")}))},te="IntersectionObserver"in window?new IntersectionObserver(A=>A.forEach(re=>{if(!re.target.isConnected){te.unobserve(re.target);return}if(re.isIntersecting){te.unobserve(re.target);let qe=n.find(pe=>pe.key===re.target.dataset.wave);qe&&Q(qe)}}),{rootMargin:"200px 0px"}):null;o.querySelectorAll("[data-wave]").forEach(A=>te?te.observe(A):Q(n.find(re=>re.key===A.dataset.wave))),Lo=n;let E=A=>A.url?A.key:`${A.clip}.${A.voice}`;at(o);let oe=(A,re=0)=>(Q(A),A.url?t.playUrl(A.key,A.url,{from:re}):t.play(A.clip,{voice:A.voice,kind:"audition",from:re}));o.querySelectorAll("[data-play]").forEach(A=>A.addEventListener("click",()=>{let re=n.find(pe=>pe.key===A.dataset.play),qe=E(re);t.state.clip===qe&&t.playing?t.pause():t.state.clip===qe&&t.state.status==="paused"?t.resume():oe(re)})),o.querySelectorAll("[data-wave]").forEach(A=>{let re=n.find(Ie=>Ie.key===A.dataset.wave),qe=E(re),pe=!1,ve=Ie=>{let Je=A.getBoundingClientRect();return ya((Ie.clientX-Je.left)/Je.width)};A.addEventListener("pointerdown",async Ie=>{pe=!0,A.setPointerCapture(Ie.pointerId);let Je=ve(Ie);t.state.clip!==qe&&await oe(re),t.seek(Je)}),A.addEventListener("pointermove",Ie=>{pe&&t.state.clip===qe&&t.seek(ve(Ie))}),A.addEventListener("pointerup",()=>{pe=!1}),A.addEventListener("keydown",Ie=>{t.state.clip!==qe||!t.duration||(Ie.key==="ArrowRight"&&t.seek(t.position+1/t.duration),Ie.key==="ArrowLeft"&&t.seek(t.position-1/t.duration))})}),o.querySelectorAll("[data-use]").forEach(A=>A.addEventListener("click",()=>{let re=scrollY;t.stop(),t.set({voice:A.dataset.use}),t.sfx("confirm"),_e("voice_use",{voice:A.dataset.use}),ki(),scrollTo(0,re),C(`${La(A.dataset.use).name} is now the guide\u2019s voice.`)}));let Te=0,j=()=>{if(Te=requestAnimationFrame(j),Lo!==n){cancelAnimationFrame(Te);return}for(let A of o.querySelectorAll("[data-wave]")){let re=n.find(Pa=>Pa.key===A.dataset.wave);if(!re)continue;let qe=E(re),pe=x.get(re.key),ve=A.firstElementChild,Ie=A.getBoundingClientRect();if(Ie.bottom<0||Ie.top>innerHeight)continue;let Je=t.state.clip===qe,Qt=Je?t.position:0,Ia=Je?t.state.energy:0,dt=Je&&t.playing;A.setAttribute("aria-valuenow",Math.round(Qt*100));let gt=o.querySelector(`[data-play="${CSS.escape(re.key)}"]`);if(gt&&gt.dataset.on!==String(dt)&&(gt.dataset.on=String(dt),gt.innerHTML=dt?rt.pause:rt.play,gt.setAttribute("aria-label",`${dt?"Pause":"Play"} ${re.title}`)),!pe)continue;let oa=Math.min(devicePixelRatio||1,2);ve.width!==Math.round(Ie.width*oa)&&(ve.width=Math.round(Ie.width*oa),ve.height=Math.round(Ie.height*oa));let Ea=ve.getContext("2d");Ea.setTransform(oa,0,0,oa,0,0),Ea.clearRect(0,0,Ie.width,Ie.height);let Zt=pe.bins.length,Ai=Math.min(2,Ie.width/Zt*.4),Co=Math.max(.5,(Ie.width-Ai*(Zt-1))/Zt),Rl=Ie.height/2;for(let Pa=0;Pa<Zt;Pa++){let Ci=(Pa+.5)/Zt<=Qt,Dl=Ci&&Math.abs((Pa+.5)/Zt-Qt)<2.5/Zt?Ia:0,ji=Math.max(2,(pe.bins[Pa]*.9+Dl*.2)*(Ie.height-4));Ea.fillStyle=Ci?"#262827":"rgba(38,40,39,.2)",Ea.beginPath(),Ea.roundRect(Pa*(Co+Ai),Rl-ji/2,Co,ji,Co/2),Ea.fill()}}};j(),yt.push(()=>cancelAnimationFrame(Te))}let Ll=r=>`${Math.floor(r/60)}:${String(Math.round(r%60)).padStart(2,"0")}`;function Tl(){o.innerHTML=An()+Ce(),mr(o,{sfx:t.sfx})}function Ml(){if(ut&&(ut.leave(),ut=null),!0){o.innerHTML="",ut=Gn({api:e,audio:t,top:d,page:o,query:be.query,ICON:rt,flash:C,product:c,store:xt});return}o.innerHTML=`
      <section class="st-lock">
        <div class="lock-blur" aria-hidden="true"><i class="lb-bar"></i><i class="lb-sph"></i><i class="lb-ins"></i></div>
        <div class="lock-card glass dark">
          <span class="lock-i">${rt.lock}</span>
          <p class="kicker">Studio</p><h1>For members</h1>
          <p>Shape the sphere: its material, its colour and what moves inside it. Studio opens with membership.</p>
          <div class="acts eq"><a class="gb small primary" href="#/membership">See membership</a><a class="gb small" href="#/products">Browse products</a></div>
        </div>
      </section>`}function ql(r,n,{W:y,H:x}){let S=t.energy(),k=t.playing&&(t.state.kind==="guide"||t.state.kind==="audition"&&be.name==="sound");a.setSpeech(k&&!Mo()?S*(i?.35:.9):0),Me+=((k&&!Mo()||xe?1:0)-Me)*Math.min(1,n*(k?4:1.2));{let E=r-ze,oe=E<0?0:E<3.5?za(E/.4):1-za((E-3.5)/1.6);a.setRibbon?.(Math.max(oe,Me))}c.orb?.setSpeech(t.playing&&t.state.kind==="audition"&&Mo()?S*(i?.35:1):0);let Q=y<700,te;if(ut)te=ut.frame(r,n,{W:y,H:x}),c.frame(te.product??null);else if(be.name==="home"&&!jo)te=Il(y,x,Q);else{let E=Ol(y,x,Q);if(Q){let oe=performance.now()-wa;qo+=((oe<700?.18:1)-qo)*Math.min(1,n*6),E.vis=qo}r-Ei>.18&&(Ei=r,$i=!(t.playing||xe)&&jl(E),Li=matchMedia("(pointer:coarse)").matches&&!!document.activeElement?.matches("input,textarea,select")),Va+=(($i?1:0)-Va)*Math.min(1,n*7),E.x+=(y-(Q?15:17)-E.x)*Va,E.d+=((Q?30:34)-E.d)*Va,E.vis=Math.max(E.vis*(1-Va*.25),Va>.5?.62:0),Q&&(E.vis*=1-Va),Li&&(E.vis=0),te={warm:0,orb:E,emission:Ae.emission}}if(!ut){let E=Pl(y,x,n);c.frame(E),E?.ground&&(te.grounds||=[]).push({y:E.ground,x:E.x,d:E.d})}return V=ut?null:te.orb,zl(ut?te.product&&be.name==="studio"&&Cl()==="orb"?{...te.product,passive:!0}:null:te.orb),te}let Si=null,Lo=[],Al=()=>Lo.map(r=>({id:`sound-${r.key}`,name:r.title,href:"#/sound"})),Cl=()=>ut?.draft?.family??"orb",To=null;addEventListener("pointerdown",r=>{To=be.name==="studio"&&g.classList.contains("passive")&&!g.hidden?{x:r.clientX,y:r.clientY,t:performance.now()}:null},!0),addEventListener("pointerup",r=>{let n=To;if(To=null,!n||Math.hypot(r.clientX-n.x,r.clientY-n.y)>5||performance.now()-n.t>350)return;let y=g.getBoundingClientRect();Math.hypot(r.clientX-(y.left+y.width/2),r.clientY-(y.top+y.height/2))>y.width/2||r.target.closest?.("button,a,input,select,label,.sx-ins,.st-top")||g.click()},!0);let Ca={x:0,y:0,t:0,v:0};addEventListener("pointermove",r=>{if(r.pointerType!=="mouse"||r.buttons)return;let n=performance.now(),y=Math.hypot(r.clientX-Ca.x,r.clientY-Ca.y),x=Math.max(8,n-Ca.t);if(y<2)return;Ca.v+=(y/x*1e3-Ca.v)*.35,Ca.x=r.clientX,Ca.y=r.clientY,Ca.t=n;let S=r.target.closest?.("[data-guide]")?"orb":r.target.closest?.(".gb,.gsw,.gi,.gsel,.pill,.arc-c,.dg-c,button,a")?"glass":"air";t.motion(Math.min(1,Ca.v/2e3),S)},{passive:!0});let nr=null;addEventListener("pointermove",r=>{if(be.name!=="studio"||!(r.buttons&1)||!r.target.closest?.("[data-view], input[type=range]")){nr=null;return}let n=performance.now();if(nr){let y=Math.hypot(r.clientX-nr.x,r.clientY-nr.y)/Math.max(8,n-nr.t)*1e3;t.friction(Math.min(1,y/700))}nr={x:r.clientX,y:r.clientY,t:n}},{passive:!0});let Mo=()=>!1,qo=1,Va=0,$i=!1,Ei=0,Li=!1,Ti="p,h1,h2,h3,h4,li,dd,dt,a,button,input,select,textarea,label,img,figcaption,blockquote,small,b,em,i,code,pre,form,summary,iframe,[role=slider]";function jl(r){let n=r.d/2+6;for(let[y,x]of[[0,0],[-n,0],[0,-n],[-n*.7,-n*.7],[-n,n*.5]])for(let S of document.elementsFromPoint(r.x+y,r.y+x))if(!(S===g||S.closest?.(".lo-top")||S.tagName==="CANVAS")){if(!o.contains(S)){if(S===document.body||S===document.documentElement)break;continue}if(S.matches(Ti)||S.closest(Ti))return!0;break}return!1}let Mi=0,Ao=()=>{Mi=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--lo-safe-bottom"))||0};Ao(),addEventListener("resize",Ao),window.visualViewport?.addEventListener("resize",Ao);let Ol=(r,n,y)=>({x:r-(y?34:50),y:n-Mi-(y?38:52),d:y?40:50,vis:1});function zl(r){let n=r&&(r.vis??1)>.5&&!!m();if(g.hidden=!n,g.classList.toggle("passive",!!r?.passive),n){let y=Math.max(44,r.d);Object.assign(g.style,{left:`${ya(r.x-y/2,0,innerWidth-y)}px`,top:`${ya(r.y-y/2,0,innerHeight-y)}px`,width:`${y}px`,height:`${y}px`})}}function Il(r,n,y){let x=o.scrollTop/n,S=o.querySelector("[data-welcopy]"),k=o.querySelector("[data-qt]"),Q=o.querySelector(".wel-ctl"),te=1-za((x-.04)/.2),E=zt[it],oe=E?.getBoundingClientRect(),Te=(o.querySelector(".qt")?.offsetTop??n)/n,j=(o.querySelector("#select")?.offsetTop??2*n)/n,A=o.querySelector("#sel-t"),re=A?(A.getBoundingClientRect().top+o.scrollTop-o.getBoundingClientRect().top)/n:2,qe=re-.8,pe=kc(x,.13,.3,qe-.22,qe),ve=[...te>.01?[S,Q]:[],...pe>.01?[k]:[],A,...zt,o.querySelector(".arc-ctl"),o.querySelector(".sel-more"),o.querySelector(".ft")].filter(Boolean).map(gt=>gt.getBoundingClientRect()).filter(gt=>gt.width&&gt.height&&gt.bottom>0&&gt.top<n&&gt.right>0&&gt.left<r).map(({left:gt,top:oa,right:Ea,bottom:Zt})=>({left:gt,top:oa,right:Ea,bottom:Zt}));S&&(S.style.setProperty("--wipe",te.toFixed(3)),S.style.visibility=te<.01?"hidden":""),Q&&(Q.style.setProperty("--wipe",te.toFixed(3)),Q.style.visibility=te<.01?"hidden":""),k&&(k.style.setProperty("--wipe",pe.toFixed(3)),k.style.transform=`translateY(${(20*(1-za((x-.13)/.17))-24*za((x-qe+.22)/.22)).toFixed(1)}px)`,k.style.visibility=pe<.01?"hidden":"");let Ie=ya(Math.min(r*(y?.46:.19),n*.28),120,280),Je={x:r/2,y:n*(y?.3:.29),d:Ie},Qt={x:r/2,y:n*.87,d:Ie*.3},Ia=za((x-.08)/Math.max(.3,Te-.5)),dt={x:kr(Je.x,Qt.x,Ia),y:kr(Je.y,Qt.y,Ia),d:kr(Je.d,Qt.d,Ia)};if(E){let gt=oe,oa=za((x-qe+.1)/.2);if(oa>0){let Ea=y?40:50,Zt={x:ta?gt.left+gt.width/2:r/2,y:gt.bottom+44,d:Ea};dt={x:kr(dt.x,Zt.x,oa),y:kr(dt.y,Zt.y,oa),d:kr(dt.d,Zt.d,oa)}}}return{orb:{...dt,vis:1},guideAvoid:ve,warm:1,ground:{y:dt.y+dt.d/2},emission:Ae.emission}}function Pl(r,n,y){if(be.name==="sound"&&Si?.isConnected){let x=Si.getBoundingClientRect(),S=Math.min(x.width,x.height)*.78;return x.bottom>0?{x:x.left+x.width/2,y:x.top+x.height/2,d:S,vis:1,ground:x.top+x.height/2+S/2}:null}if(be.name==="products"&&!be.id){let x=o.querySelector("[data-orbslot]");if(!x)return null;let S=x.getBoundingClientRect(),k=x.closest(".pc")?.classList.contains("on"),Q=Math.min(S.width,S.height)*.74;return S.width>10?{x:S.left+S.width/2,y:S.top+S.height/2,d:Q,vis:k?1:.7,ground:S.top+S.height/2+Q/2}:null}if(be.name==="products"&&be.id&&ct?.el?.isConnected){let x=ct,S=x.el.getBoundingClientRect();if(x.live){let k=x.host.getBoundingClientRect();if(k.width<10||k.bottom<0||k.top>n)return null;let Q=Math.min(k.width,k.height)*.8;return{x:k.left+k.width/2,y:k.top+k.height/2,d:Q,vis:1,ground:k.top+k.height/2+Q/2}}if(x.id==="orb"){if(!x.real)return null;let k=x.el.querySelector("[data-sph]")?.getBoundingClientRect();if(!k||k.width<10||k.bottom<0||k.top>n)return null;let Q=Math.min(k.width,k.height)*.8;return{x:k.left+k.width/2,y:k.top+k.height/2,d:Q,vis:1,snap:!0}}if(x.id==="orb-slider"){let k=x.el.querySelector("[data-cap]");if(!k)return null;let Q=k.getBoundingClientRect(),te=Q.height*.84,E=(Q.height-te)/2;return{x:Q.left+E+te/2+x.cap*(Q.width-Q.height),y:Q.top+Q.height/2,d:te,vis:1,snap:!0}}if(x.id==="orb-wave"||x.id==="background-pack"){let k=Math.min(96,S.width*.16),Q=S.height*.7+k*.1,te=Q-k/2;if(x.drop){let E=x.drop;E.y==null&&(E.y=-S.height*.45),E.vy+=2600*y,E.y+=E.vy*y,E.y>=0&&(E.y=0,kt.impact(S.width/2,Q,ya(E.vy/1400)),c.orb?.nudge(.8),t.sfx("detent"),E.vy*=-.38,(++E.contacts>2||Math.abs(E.vy)<120)&&(x.drop=null)),te+=x.drop?x.drop.y:0}return kt.setOrb({x:S.width/2,y:te,d:k}),{x:S.left+S.width/2,y:S.top+te,d:k,vis:1,snap:!!x.drop}}}return null}let qi=()=>{let r=document.activeElement;if(be.name!=="design"||!matchMedia("(pointer:coarse)").matches||!r?.matches(".iq input:not([type=radio]):not([type=checkbox]),.iq textarea")||!o.contains(r))return;let n=window.visualViewport,y=r.getBoundingClientRect(),x=Math.max(n?.offsetTop||0,p.getBoundingClientRect().bottom)+12,S=(n?.offsetTop||0)+(n?.height||innerHeight)-16;(y.top<x||y.bottom>S)&&(o.scrollTop+=y.top-(x+Math.max(0,(S-x-Math.min(y.height,S-x))/2)))};o.addEventListener("focusin",()=>requestAnimationFrame(qi)),window.visualViewport?.addEventListener("resize",()=>requestAnimationFrame(qi)),addEventListener("resize",()=>{be.name==="home"&&ka(!0)}),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__lo={audio:t,worldPreview:kt,product:c,store:xt,readableTexts:()=>[...new Set([...o.querySelectorAll(Fe)].map(Ve).filter(Boolean))].map(r=>{let n=et(r);return{id:Ze(n),text:n}}),linkLabels:()=>[...o.querySelectorAll("a,button,[data-href],.arc-c,.dg-c")].filter(r=>!r.closest(".hd,.sx")&&et(r)).map(r=>{let n=et(r);return{id:Ze(n),text:n}}),get studio(){return ut},get route(){return be},get sel(){return it},get psel(){return Xe}});try{Object.keys(sessionStorage).filter(r=>r.startsWith("lo:scroll:")||r==="lo:sel").forEach(r=>sessionStorage.removeItem(r))}catch{}it=0,pa(),Z();{let r=()=>[...new Set([...Lt,...Na.flatMap(n=>$r(n.id))].map(n=>n.cover?.src).filter(Boolean))].forEach(n=>{let y=new Image;y.decoding="async",y.src=n});(window.requestIdleCallback??(n=>setTimeout(n,1500)))(r,{timeout:4e3})}return{frame:ql,audio:t,get route(){return be},get studio(){return ut},reapply:()=>N()}}function xi(e,a){let i=document.createElement(e);return i.className=a,i}var So={hostDuration:.95,follow:10,damping:.92,pearl:[243,243,241],chamber:[23,26,25],whiten:2.2},or=matchMedia("(prefers-reduced-motion: reduce)").matches,_r=(e,a=0,i=1)=>Math.min(i,Math.max(a,e)),ir=(e,a,i)=>e+(a-e)*i,sl=e=>{let a=_r(e);return a<.5?4*a*a*a:1-(-2*a+2)**3/2},ll=(e,a,i)=>e.map((t,l)=>ir(t,a[l],i)),$o=(e,a=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${a})`,dl=!1;document.addEventListener("lightorb:intro-complete",e=>vi(e.detail));window.__lightorbIntroComplete&&vi(window.__lightorbIntroComplete.detail);document.body.classList.contains("static")&&vi(null);function $c(){let e=document.createElement("div");e.style.cssText="position:absolute;left:0;top:0;border-radius:50%;pointer-events:none;will-change:transform;background:radial-gradient(circle at 34% 28%,#fff 0 10%,rgba(255,255,255,.55) 24%,rgba(225,228,230,.35) 58%,rgba(170,176,180,.45) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),inset 0 -12px 24px rgba(120,126,130,.18),0 18px 30px -18px rgba(38,40,39,.45)";let a=()=>a,i={element:e,place(t){e.style.width=e.style.height=`${t.d}px`,e.style.transform=`translate(${t.x-t.d/2}px,${t.y-t.d/2}px)`,e.style.opacity=t.visibility??1}};return new Proxy(i,{get:(t,l)=>l in t?t[l]:a})}function vi(e){if(dl)return;let i=document.querySelector(".intro").querySelector(".intro-world"),t=e?.orb??$c();dl=!0;for(let N of document.querySelectorAll(".intro .cue, .skip"))N.setAttribute("aria-hidden","true"),N.inert=!0;let l=document.createElement("style");l.textContent=".x-surface,.x-orb{position:fixed;inset:0;pointer-events:none}.x-surface{z-index:6;width:100%;height:100%}.x-orb{z-index:30}",document.head.append(l);let c=document.createElement("canvas");c.className="x-surface",c.setAttribute("aria-hidden","true");let o=document.createElement("div");o.className="x-orb",document.body.append(c,o),o.append(t.element),t.attachPointer(document.createElement("div"))();let d=c.getContext("2d");t.prepareTone("ivory"),t.prepareTone("dark");let p=0,f=0,g=1,h="",P=()=>{h="",p=Math.max(1,innerWidth),f=Math.max(1,innerHeight),g=Math.min(devicePixelRatio||1,1.5),c.width=Math.round(p*g),c.height=Math.round(f*g)};P(),addEventListener("resize",P),c.addEventListener("contextrestored",()=>{h=""});let X=performance.now()/1e3,s={x:0,y:0,d:0,vx:0,vy:0,vd:0,from:null,hosted:!1},M=new Set,T=null,B=null,I=0,q=1,F=1,_=1,V=X,L={left:.65,right:.55,env:.5,exposure:0,yaw:0,pitch:0,platform:!0},w=(N,m)=>{let O=performance.now()/1e3,Y=_r(O-V,0,.05);V=O,s.from||(s.from={x:N.x,y:N.y,d:N.d}),T=B?.frame(O,Y,{W:p,H:f})??null;let R=T?.orb??{x:p/2,y:f*.42,d:Math.min(p*.3,f*.42)},D=or?1:sl((O-X)/So.hostDuration);if(!s.hosted)s.x=ir(s.from.x,R.x,D),s.y=ir(s.from.y,R.y,D),s.d=ir(s.from.d,R.d,D),D>=1&&(s.hosted=!0,t.attachPointer(document.createElement("div"))(),B?.reapply?.(),t.setMono?.(!1));else if(or||T?.snap)s.x=R.x,s.y=R.y,s.d=R.d,s.vx=s.vy=s.vd=0;else{let Ee=So.follow,Pe=So.damping;s.vx+=(Ee*Ee*(R.x-s.x)-2*Pe*Ee*s.vx)*Y,s.x+=s.vx*Y,s.vy+=(Ee*Ee*(R.y-s.y)-2*Pe*Ee*s.vy)*Y,s.y+=s.vy*Y,s.vd+=(Ee*Ee*(R.d-s.d)-2*Pe*Ee*s.vd)*Y,s.d+=s.vd*Y}s.hosted&&!s.hostedAt&&(s.hostedAt=O);let ce=or?1:sl((O-X-.25)/So.whiten),fe=Math.min(T?.warm??1,1-ce);q=or?fe:ir(q,fe,.2),I=ir(I,T?.room==="chamber"?1:0,or?1:.12),F=ir(F,T?.orb?.vis??1,or?1:.14);let $e=1;for(let Ee of T?.guideAvoid??[]){let Pe=_r(s.x,Ee.left,Ee.right),Ye=_r(s.y,Ee.top,Ee.bottom);$e=Math.min($e,_r((Math.hypot(s.x-Pe,s.y-Ye)-s.d/2)/4))}_=F*$e,Number.isFinite(s.x+s.y+s.d)||(console.warn("orb pose NaN",JSON.stringify(R),JSON.stringify(s)),Object.assign(s,{x:R.x,y:R.y,d:R.d,vx:0,vy:0,vd:0}));let he=h;le();let ge=q<.002;return s.hosted&&(t.setIdleSkip?.(!0),(h!==he||!ge||M.size)&&t.refresh?.()),{...N,x:s.x,y:s.y,d:s.d,squash:0,contact:0,worldY:ge?-9999:s.y,hideWorld:ge,visibility:_,emission:N.emission*(T?.emission??1),raster:Math.ceil(Math.max(s.d,R.d,140)*1.06)}};if(e?.orb)e.takeOver(w);else{let N=()=>{t.place(w({x:p/2,y:f/2,d:0,emission:1})),requestAnimationFrame(N)};requestAnimationFrame(N)}try{le()}catch{}try{t.setBackdrop((N,m)=>Z(N,m,s))}catch(N){console.warn("backdrop",N)}let z=(()=>{try{let N=document.createElement("canvas").getContext("2d");return N.filter="blur(1px)",N.filter==="blur(1px)"}catch{return!1}})(),G=document.createElement("canvas"),$=G.getContext("2d");function C(N,m,O,Y){return G.width!==Y&&(G.width=G.height=Y),$.globalCompositeOperation="copy",$.drawImage(i,N,m,O,O,0,0,Y,Y),$.globalCompositeOperation="saturation",$.fillStyle="#808080",$.fillRect(0,0,Y,Y),$.globalCompositeOperation="destination-in",$.drawImage(i,N,m,O,O,0,0,Y,Y),$.globalCompositeOperation="source-over",G}function Z(N,m,O){let Y=O.d/m.diameter,R=m.extent*Y,D=O.x-R/2,ce=O.y-R/2,fe=m.extent/R,$e=he=>he.width>0&&he.height>0;if(N.fillStyle=$o(ma().pearl),N.fillRect(0,0,m.extent,m.extent),q>.002&&$e(i)){let he=i.width/Math.max(1,innerWidth),ge=!document.documentElement.classList.contains("warm");ge&&z&&(N.filter="grayscale(1) contrast(1.06)"),ge&&!z?N.drawImage(C(D*he,ce*he,R*he,m.extent),0,0):N.drawImage(i,D*he,ce*he,R*he,R*he,0,0,m.extent,m.extent),ge&&z&&(N.filter="none")}$e(c)&&N.drawImage(c,D*g,ce*g,R*g,R*g,0,0,m.extent,m.extent);for(let he of M){if(!he.isConnected||!$e(he))continue;let ge=he.getBoundingClientRect();ge.right<D||ge.left>D+R||ge.bottom<ce||ge.top>ce+R||N.drawImage(he,(ge.left-D)*fe,(ge.top-ce)*fe,ge.width*fe,ge.height*fe)}}function le(){let N=1-q,m=N>0&&N<.999,O=JSON.stringify([ma(),p,f,g,N>0,m||T?.glows?.length?N:0,I>.002?I:0,m?[s.x,s.y]:0,T?.glows,T?.grounds,I>.002?[L,T?.stage,T?.product?.x,T?.product?.d,T?.product?.ground]:0]);if(O===h)return;if(d.setTransform(g,0,0,g,0,0),d.clearRect(0,0,p,f),N>0){d.globalAlpha=1;let R=ma(),D=R.pearl,ce=d.createLinearGradient(0,0,0,f);if(ce.addColorStop(0,$o(ll(D,R.top,.5))),ce.addColorStop(.6,$o(D)),ce.addColorStop(1,$o(ll(D,R.low,.55))),d.fillStyle=ce,d.fillRect(0,0,p,f),ee(p*.62,-f*.12,Math.max(p*.85,f*.55),R.sky,R.skyA),ee(p*.05,f*1.05,p*.45,R.mass,R.massA),d.globalAlpha=1,N<.999){let fe=Math.hypot(p,f),$e=s.x||p/2,he=s.y||f/2,ge=N*N*(3-2*N),Ee=Math.max(0,fe*1.15*ge-fe*.45),Pe=Ee+fe*.55,Ye=d.createRadialGradient($e,he,Ee,$e,he,Pe);Ye.addColorStop(0,`rgba(0,0,0,${Math.min(1,ge*1.6)})`),Ye.addColorStop(1,"rgba(0,0,0,0)"),d.globalCompositeOperation="destination-in",d.fillStyle=Ye,d.fillRect(0,0,p,f),d.globalCompositeOperation="source-over"}}let Y=ma();for(let R of T?.glows??[]){d.save(),d.globalAlpha=R.k*N,d.translate(R.x,R.y),d.scale(1,R.h/R.w);let D=d.createRadialGradient(0,0,0,0,0,R.w);D.addColorStop(0,`rgba(${Y.glow},${Y.glowA})`),D.addColorStop(.5,`rgba(${Y.glow},${Y.glowA*.31})`),D.addColorStop(1,`rgba(${Y.glow},0)`),d.fillStyle=D,d.fillRect(-R.w,-R.w,R.w*2,R.w*2),d.restore()}I>.002&&de(I);for(let R of T?.grounds??[])je(R,R,1);h=O}function ee(N,m,O,Y,R){let D=d.createRadialGradient(N,m,0,N,m,O);D.addColorStop(0,`rgba(${Y},${R})`),D.addColorStop(1,`rgba(${Y},0)`),d.fillStyle=D,d.fillRect(N-O,m-O,O*2,O*2)}let se=Array.from({length:160},(N,m)=>{let O=Math.sin(m*12.9898)*43758.5453,Y=O-Math.floor(O),R=Math.sin(m*78.233)*12345.678%1;return[Y*Math.PI*2,Math.abs(R)*.9-.25,.3+m%7/10]});function de(N){let m=T?.stage??{x:0,y:0,w:p,h:f},O=2**(L.exposure*.5),Y=L.left,R=L.right,D=m.x+m.w/2,ce=m.y+m.h*.52,fe=L.yaw,$e=L.pitch;d.save(),d.globalAlpha=N,d.fillStyle="#070808",d.fillRect(0,0,p,f),d.fillStyle="#ffffff";for(let[st,ot,Qe]of se){let ye=st-fe*Qe,xe=D+Math.sin(ye)*m.w*.9,me=ce-(ot+$e*.6*Qe)*m.h;Math.cos(ye)<-.2||xe<m.x||xe>m.x+m.w||(d.globalAlpha=N*.1*Qe*O,d.fillRect(xe,me,1.1,1.1))}d.globalAlpha=N;let he=ce+m.h*(.12-$e*.55),ge=T?.product?.ground??ce+m.h*.18,Ee=d.createLinearGradient(0,he,0,m.y+m.h);Ee.addColorStop(0,"rgba(255,255,255,0)"),Ee.addColorStop(.25,`rgba(255,255,255,${.035*O})`),Ee.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=Ee,d.fillRect(m.x,he,m.w,m.y+m.h-he);let Pe=T?.product?.x??D,Ye=T?.product?.d??m.h*.4;for(let[st,ot]of[[-1,Y],[1,R]]){if(ot<=.01)continue;let Qe=Pe+st*Ye*(1.1+.5*Math.sin(fe*st+.4)),ye=.18+.3*Math.max(0,Math.sin(.15+$e));d.save(),d.translate(Qe,ge),d.scale(1,ye);let xe=d.createRadialGradient(0,0,0,0,0,Ye*1.3);xe.addColorStop(0,`rgba(240,242,240,${.12*ot*O})`),xe.addColorStop(1,"rgba(240,242,240,0)"),d.fillStyle=xe,d.beginPath(),d.arc(0,0,Ye*1.3,0,Math.PI*2),d.fill(),d.restore();let me=st<0?m.x:m.x+m.w,Oe=d.createRadialGradient(me,ce,0,me,ce,m.w*.45);Oe.addColorStop(0,`rgba(230,234,232,${.07*ot*O})`),Oe.addColorStop(1,"rgba(230,234,232,0)"),d.fillStyle=Oe,d.fillRect(m.x,m.y,m.w,m.h)}let St=d.createRadialGradient(D,ce,m.h*.2,D,ce,Math.hypot(m.w,m.h)*.62);St.addColorStop(0,"rgba(0,0,0,0)"),St.addColorStop(1,"rgba(0,0,0,.55)"),d.fillStyle=St,d.fillRect(0,0,p,f),d.restore()}function je(N,m,O){if(!Number.isFinite(m.d+m.x+N.y)||m.d<=0)return;let Y=m.d/2,R=I>.5||ma().orb.dark;d.save(),d.globalAlpha=O,d.translate(m.x,N.y),d.scale(1,.2);let D=d.createRadialGradient(0,0,0,0,0,Y*1.5);R?(D.addColorStop(0,"rgba(240,240,236,.12)"),D.addColorStop(1,"rgba(240,240,236,0)"),d.globalCompositeOperation="lighter"):(D.addColorStop(0,"rgba(70,72,78,.22)"),D.addColorStop(.5,"rgba(70,72,78,.07)"),D.addColorStop(1,"rgba(70,72,78,0)")),d.fillStyle=D,d.beginPath(),d.arc(0,0,Y*1.5,0,Math.PI*2),d.fill(),d.restore()}let Ae={orb:t,reduced:or,chamber:L,body:{get x(){return s.x},get y(){return s.y},get d(){return s.d},get hosted(){return s.hosted}},addBackdrop:N=>M.add(N),removeBackdrop:N=>M.delete(N),drawBackdrop:Z,exportPNG(N,m=t.element){let Y=document.createElement("canvas");Y.width=Math.round(N.w*2),Y.height=Math.round(N.h*2);let R=Y.getContext("2d");R.drawImage(c,N.x*g,N.y*g,N.w*g,N.h*g,0,0,Y.width,Y.height);for(let D of m.querySelectorAll("canvas")){let ce=D.getBoundingClientRect();R.drawImage(D,(ce.left-N.x)*2,(ce.top-N.y)*2,ce.width*2,ce.height*2)}return new Promise(D=>Y.toBlob(D,"image/png"))}};B=nl(Ae),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__exit={api:Ae,body:s,site:B,get scene(){return T},get visibility(){return _}})}export{So as EXIT};
