import{A as Ua,B as pr,C as ur,D as ye,E as Bo,e as dr,f as Fr,h as qo,i as Oo,j as _r,k as Gr,n as zo,o as Ro,p as Yr,r as Wr,t as Io,u as Po,w as jo,x as Do,y as No,z as cr}from"./chunk-4LDEINT7.js";var Oa=[{id:"products",label:"Products",route:"#/products",line:"Objects, buttons and pieces, ready to use.",action:"Explore products",clip:"products",words:["products","product","pieces","piece","objects","gallery","shop"]},{id:"templates",label:"Templates",route:"#/templates",line:"Complete compositions to start from.",action:"Browse templates",clip:"templates",words:["templates","template","compositions","websites","cassettes"]},{id:"studio",label:"Studio",route:"#/studio",line:"Shape the light. Make it yours.",action:"Open Studio",clip:"studio",words:["studio","editor","customize","customise","edit","workshop"]},{id:"sound",label:"Sound",route:"#/sound",line:"Voices and the quiet sounds of glass.",action:"Listen",clip:"sound",words:["sound","sounds","voice","voices","audio","listen"]},{id:"design",label:"Web Design",route:"#/design",line:"A website designed and built around your idea.",action:"Start a project",clip:null,words:["design","commission","hire","custom","bespoke","project","inquiry","enquiry"]},{id:"about",label:"About",route:"#/about",line:"The person behind the work.",action:"Meet Carla",clip:null,words:["about","carla"]}],wa=e=>Oa.find(a=>a.id===e),Vr=[{...wa("products"),children:[{id:"products",label:"Digital Pieces",route:"#/products",line:"Objects, buttons, textures and effects"},{id:"sound",label:"Sound",route:"#/sound",line:"Voices and the quiet sounds of glass"},{id:"studio",label:"Studio",route:"#/studio",line:"Shape the light. Make it yours."}]},wa("templates"),wa("design"),wa("about")],Ho={products:["products","sound","studio"],templates:["templates"],design:["design"],about:["about"]},Jt=[{...wa("products"),line:"Digital pieces, sound and Studio."},{...wa("templates"),line:"Complete website experiences to explore."},{...wa("design"),line:"A website made around your idea."}];var Ur=e=>(Object.values(e).forEach(a=>a&&typeof a=="object"&&Ur(a)),Object.freeze(e)),gr=Ur({version:1,shell:{roughness:.01,thickness:.78,ior:1.58,tint:"#cdd2cf",tintAmount:.72,elastic:0},interior:{kind:"light",amount:.5,size:.5,motion:.4,fill:.5,colour:"#f1f0ec"},light:{colour:"#f6f6f3",strength:.9,x:-.04,y:-.3,z:.12,spread:.8,glow:.3},motion:{idle:0},voice:{enabled:!0,response:.6}}),Ka=(e,a,n,r)=>Ur({id:e,name:a,line:n,family:"orb",config:{...structuredClone(gr),...Object.fromEntries(Object.entries(r).map(([d,p])=>[d,{...gr[d],...p}]))}}),pa=[Ka("original","Light","Clear glass holding one soft white light.",{}),Ka("beads","Beads","Small glass beads resting and rolling inside the shell.",{interior:{kind:"beads",amount:.6,size:.55,motion:.45},light:{strength:.7},shell:{thickness:.15,ior:1.3}}),Ka("glitter","Glitter","Fine reflective flecks suspended in the volume.",{interior:{kind:"glitter",amount:.6,size:.35,motion:.35,colour:"#f4f4f2"}}),Ka("liquid","Liquid","A clear liquid with a meniscus that moves with the glass.",{interior:{kind:"liquid",fill:.42,motion:.5,colour:"#dfe3e1"},light:{strength:.78}}),Ka("gel","Gel","A soft gel body; the shell answers with a damped give.",{interior:{kind:"gel",amount:.55,motion:.45,colour:"#e4e6e3"},shell:{elastic:.55}})],Kr=pa[0].config,Zt=e=>pa.find(a=>a.id===e)??pa[0],Mt=[{id:"orb",name:"The Orb",kind:"Interactive object",published:!0,line:"A 3D sphere for your own work, in twenty versions: glass, metal, porcelain, bloom, and glass with light, sparkle or beads inside.",receives:["ES module (Three.js r186) with the sphere and its material","The version you choose","Integration notes and dependency list"],source:["dist/light-orb.js","dist/orb-three.js","dist/orb-lighting.js","dist/orb-floor.js"],preview:"orb",studio:!0,presets:pa.map(e=>e.id),readiness:"preview_ready",missing:["price","checkout provider","packaged download (source export not yet assembled)"],price:null},{id:"orb-slider",name:"Orb Slider",kind:"Interactive control",published:!0,code:"kit",line:"A glass capsule whose thumb is a small orb. Slide it to enter; a spring brings it home.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Keyboard and pointer support","Six materials"],source:["dist/intro/activation.js","dist/intro/glass-control.js"],preview:"slider",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package (currently embedded in the intro)"],price:null},{id:"orb-wave",name:"Orb Wave",kind:"Surface effect",published:!1,line:"The ripple the Orb leaves on the floor when it lands, drawn in light.",receives:["Light-world shader source","Impact trigger API","Integration notes"],source:["dist/intro/light-world.js"],preview:"wave",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"background-pack",name:"Background Pack",kind:"Two environments",published:!1,line:"A dark world and a light one, and the change between them.",receives:["Dark and warm environment shader","Exposure transition","Integration notes"],source:["dist/intro/light-world.js"],preview:"backgrounds",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"crystal-controls",name:"Crystal Controls",kind:"Interface kit",published:!0,code:"kit",line:"Buttons, switches, fields and sliders in six glass materials, with light that follows the pointer.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Every state: hover, focus, pressed, selected, disabled, loading","Six materials"],source:["dist/app/glass.css.js"],preview:"controls",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged download"],price:null}],ua=e=>Mt.find(a=>a.id===e),Fo=Mt.filter(e=>e.published!==!1),Ln=[{id:"the-light-orb",name:"The Light Orb",line:"This website\u2019s own beginning: the Orb as host, a quiet greeting, the quotation and the four destinations.",cover:{src:"./media/templates/the-light-orb.cover.jpg",from:"dist/intro.html (post-intro welcome, live render)",meta:"./media/templates/the-light-orb.cover.json"},route:"#/",includes:["Centred welcome with the hosting Orb","Quotation scene","Destination selector"],published:!0,starter:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged source export"],price:null},{id:"brunito",name:"BRUNITO",category:"Ecommerce",subtitle:"Ecommerce Design & Development",showcase:!0,line:"An interactive ecommerce experience featuring responsive layouts, customised product pages and a refined shopping interface.",cover:{src:"./media/templates/brunito.cover.jpg",from:"BRUNITO demo homepage (live render)",meta:"./media/templates/brunito.cover.json"},demo:"https://carlatres3.github.io/brunito/",cta:"Explore Demo",includes:["Editorial homepage and collections","Product pages with real variants and galleries","Cart drawer and cart (purchases disabled)","Desktop, tablet and mobile"],published:!0,readiness:"showcase",price:null}],bt=Ln.filter(e=>e.published!==!1),Ct={engine:"Kokoro-82M v1.0",licence:"Apache-2.0",rights:{onSite:"yes",download:"not offered"}},ka=[{id:"samantha",name:"Heart",kokoro:"af_heart",grade:"A",locale:"en-US",accent:"American",gender:"female",line:"Warm and clear. The guide\u2019s own voice.",full:!0,...Ct},{id:"bella",name:"Bella",kokoro:"af_bella",grade:"A\u2212",locale:"en-US",accent:"American",gender:"female",line:"Bright and expressive, with a smile in it.",full:!0,...Ct},{id:"emma",name:"Emma",kokoro:"bf_emma",grade:"B\u2212",locale:"en-GB",accent:"British",gender:"female",line:"Composed and precise. A gallery voice.",full:!0,...Ct},{id:"daniel",name:"Michael",kokoro:"am_michael",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Calm and grounded. Steady narration.",full:!0,...Ct},{id:"nicole",name:"Nicole",kokoro:"af_nicole",grade:"B\u2212",locale:"en-US",accent:"American",gender:"female",line:"Close and hushed, almost a whisper.",lines:"samantha",...Ct},{id:"aoede",name:"Aoede",kokoro:"af_aoede",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Soft and lyrical.",lines:"samantha",...Ct},{id:"kore",name:"Kore",kokoro:"af_kore",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Even and confident.",lines:"bella",...Ct},{id:"isabella",name:"Isabella",kokoro:"bf_isabella",grade:"C",locale:"en-GB",accent:"British",gender:"female",line:"Light and friendly.",lines:"emma",...Ct},{id:"fenrir",name:"Fenrir",kokoro:"am_fenrir",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Deep and resonant.",lines:"daniel",...Ct},{id:"puck",name:"Puck",kokoro:"am_puck",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Lively and quick.",lines:"daniel",...Ct},{id:"george",name:"George",kokoro:"bm_george",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"Measured and classic.",lines:"daniel",...Ct},{id:"fable",name:"Fable",kokoro:"bm_fable",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"A storyteller\u2019s warmth.",lines:"daniel",...Ct}],Ft=e=>ka.find(a=>a.id===e)??ka[0],hr={home:"Welcome to The Light Orb. A space for creative possibilities. Let\u2019s explore.",products:"Explore the pieces. Each one is designed to become part of something of your own.",templates:"Start with a complete composition. Select a cassette to preview the design.",studio:"Choose a piece, then shape its light, material and movement.",sound:"Listen before you choose. Find the voice and sounds that fit your work.",voice_audition:"A little light. A new idea. Something of your own."},Xr=(e,a)=>`./media/voice/${e}.${a}.m4a`,Xa={text:"I don\u2019t know why people expect art to make sense when they accept the fact that life doesn\u2019t make sense.",author:"David Lynch",work:"interview with Kristine McKenna, Los Angeles Times, 20 August 1989",source:"https://www.latimes.com/archives/la-xpm-1989-08-20-ca-1327-story.html"};var Ja=[{id:"select",name:"Select",line:"A soft glass touch for choosing.",file:"./media/sfx/select.wav"},{id:"open",name:"Open",line:"A breath of air as a panel opens.",file:"./media/sfx/open.wav"},{id:"close",name:"Close",line:"The same air, settling.",file:"./media/sfx/close.wav"},{id:"confirm",name:"Confirm",line:"Two quiet touches: done.",file:"./media/sfx/confirm.wav"},{id:"detent",name:"Detent",line:"A precise tick for wheels and steps.",file:"./media/sfx/detent.wav"},{id:"type",name:"Type",line:"A dry, very quiet key.",file:"./media/sfx/type.wav"},{id:"level",name:"Level",line:"A small touch as a level moves.",file:"./media/sfx/level.wav"}],_o={promise:"A new drop every two weeks.",open:!1,price:null,interval:null,quota:null,plans:[{id:"ready",name:"Ready-made",line:"Choose a curated piece and use it as it is.",points:["One finished piece","Its source and integration notes"]},{id:"studio",name:"Studio",line:"Customise a piece and export your own version.",points:["Light, material and movement controls","Saved designs"]},{id:"member",name:"Membership",line:"Follow the collection as it grows.",points:["A new drop every two weeks"]}]};var Go=(e,a=0,n=1)=>Math.min(n,Math.max(a,e)),We={peak:.0045,curve:1.8,floor:.12,cutoff:320,cutoffSpan:120,highpass:70,q:.5,attack:.12,release:.07,sweep:.35,still:.09,seconds:7},Yo={quiet:{peak:We.peak,curve:We.curve},A:{peak:.0135,curve:1.4},B:{peak:.024,curve:1.4}},Wo="B";function Tn(e,{talking:a=!1,loudness:n=Yo[Wo]}={}){if(a)return 0;let r=Go(e);return r<=We.floor?0:n.peak*Math.pow((r-We.floor)/(1-We.floor),n.curve)}function Cn(e,a){let n=Math.round(e.sampleRate*a),r=e.createBuffer(1,n,e.sampleRate),d=r.getChannelData(0),p=0,l=0;for(let f=0;f<n;f++)p=.995*p+.02*(Math.random()*2-1),d[f]=p,l=Math.max(l,Math.abs(p));let h=Math.round(e.sampleRate*.2);for(let f=0;f<h;f++){let b=f/h;d[f]=d[f]*b+d[n-h+f]*(1-b)}for(let f=0;f<n;f++)d[f]/=l||1;return r}function Vo(e,a,{talking:n=()=>!1,loudness:r=Yo[Wo]}={}){let d=e.createBufferSource();d.buffer=Cn(e,We.seconds),d.loop=!0;let p=e.createBiquadFilter(),l=e.createBiquadFilter(),h=e.createBiquadFilter(),f=e.createGain();p.type="highpass",p.frequency.value=We.highpass,p.Q.value=We.q;for(let x of[l,h])x.type="lowpass",x.frequency.value=We.cutoff,x.Q.value=We.q;f.gain.value=0,d.connect(p).connect(l).connect(h).connect(f).connect(a),d.start();let b=0,w=-1;return{get level(){return b},update(x,ie=e.currentTime){let Ee=Tn(x,{talking:n(),loudness:r});if(f.gain.setTargetAtTime(Ee,ie,Ee>b?We.attack:We.release),b=Ee,ie-w>.1){w=ie;let s=We.cutoff+We.cutoffSpan*Go(x);l.frequency.setTargetAtTime(s,ie,We.sweep),h.frequency.setTargetAtTime(s,ie,We.sweep)}},still(x=e.currentTime){b=0,f.gain.setTargetAtTime(0,x,We.release)}}}var Sa=(e,a=0,n=1)=>Math.min(n,Math.max(a,e)),Uo={voice:ka[0].id};function Ko(){let e=jo(Uo),a=e.prefs;ka.some(k=>k.id===a.voice)||(a.voice=Uo.voice);let n=new Set,r=null,d=null,p=null,l=null,h=null,f=null,b=new Audio;b.preload="auto",b.crossOrigin="anonymous",b.setAttribute("playsinline","");let w=null,x={clip:null,voice:null,status:"idle",error:null,energy:0,journey:new Set},ie=new Map,Ee=new Map,s=k=>{if(!Ee.has(k)){let M=fetch(k).then(D=>{if(!D.ok)throw new Error(D.status);return D.blob()}).then(D=>URL.createObjectURL(D));Ee.set(k,M),M.catch(()=>Ee.delete(k))}return Ee.get(k)},I={},O=()=>n.forEach(k=>k(Xe));function z(){if(r)return r;let k=window.AudioContext||window.webkitAudioContext;if(!k)return null;r=new k,d=r.createGain(),d.connect(r.destination),p=r.createGain();let M=r.createDynamicsCompressor();M.threshold.value=-30,M.knee.value=10,M.ratio.value=4,M.attack.value=.003,M.release.value=.25,p.connect(M).connect(d),l=r.createGain(),l.connect(d),h=r.createAnalyser(),h.fftSize=1024,h.smoothingTimeConstant=0,h.connect(p),f=new Float32Array(h.fftSize);try{w=r.createMediaElementSource(b),w.connect(h)}catch{w=null}return ee(),r}function ee(){if(!r)return;let k=r.currentTime;d.gain.setTargetAtTime(a.master||x.kind==="audition"?a.volume??.8:0,k,.02),p.gain.setTargetAtTime(a.gain,k,.02),l.gain.setTargetAtTime(a.sfx?a.sfxGain:0,k,.02)}let fe=()=>{let k=z();k&&k.state!=="running"&&k.state!=="closed"&&k.resume().catch(()=>{}),ht(),e.voice&&!B&&pe()};for(let k of["pointerdown","keydown","touchend"])addEventListener(k,fe,{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden&&(Te.on||!b.paused||x.status==="loading")?(je(),x.hiddenPause=!0):x.hiddenPause&&(x.hiddenPause=!1)}),b.addEventListener("ended",()=>{x.status="ended",O()}),b.addEventListener("pause",()=>{x.status==="playing"&&(x.status="paused",O())}),b.addEventListener("playing",()=>{x.status="playing",x.error=null,O()}),b.addEventListener("error",()=>{x.clip&&(x.status="error",x.error="The recording could not be loaded.",O())}),b.addEventListener("loadedmetadata",O);let Z=null,W=null;function U(){ne.cancel(),Z?.(),W&&(b.removeEventListener("ended",W),W=null)}function Pe(){return U(),ne.begin()}let ae=k=>k==="audition"||e.voice,$e=(k,{voice:M=a.voice,from:D=0,kind:J="guide"}={})=>lt(`${k}.${M}`,Xr(k,M),{from:D,kind:J,voice:M}),Oe=(k,M,{from:D=0}={})=>lt(k,M,{from:D,kind:"audition"}),Ue=0;async function lt(k,M,{from:D=0,kind:J="guide",voice:Y=null,token:de=Pe(),onend:ue}={}){let se=Ue;if(!ne.live(de)||!ae(J))return!1;Q(),b.pause(),x.clip=k,x.voice=Y,x.kind=J,x.url=M,x.loaded=!1,x.status="loading",x.error=null,x.env=null,fe(),ee(),O();let ge;try{ge=await s(M)}catch{ge=M}if(!ne.live(de)||se!==Ue||!ae(J)||(b.src!==ge&&(b.src=ge),x.loaded=!0,nt(M,200).then(he=>{ne.live(de)&&(x.env=he)}).catch(()=>{}),D&&b.readyState<1&&(!await new Promise(Et=>{let $t=aa=>{b.removeEventListener("loadedmetadata",Ye),b.removeEventListener("error",Dt),Z=null,Et(aa)},Ye=()=>$t(!0),Dt=()=>$t(!1);Z=()=>$t(!1),b.addEventListener("loadedmetadata",Ye),b.addEventListener("error",Dt)})||!ne.live(de)))||!ne.live(de)||!ae(J)||(b.currentTime=D||0,ue&&(W=()=>{W=null,ne.live(de)&&ue()},b.addEventListener("ended",W,{once:!0})),O(),!ne.live(de)||se!==Ue||!ae(J)))return!1;try{return await b.play(),ne.live(de)&&ae(J)}catch{return ne.live(de)&&(x.status="blocked",x.error="Playback was blocked. Press play to start it.",O()),!1}}function je(){U(),Q(),b.pause(),x.status="paused",O()}async function Me(){return!x.url||x.clip==="speech"||!ae(x.kind)?!1:lt(x.clip,x.url,{from:x.loaded?b.currentTime:0,kind:x.kind,voice:x.voice})}let De=typeof speechSynthesis<"u"?speechSynthesis:null,ke=0,Te={on:!1};function Q(){Te.u=null,De&&Te.on&&(Te.on=!1,De.cancel())}let C={samantha:[/ava.*premium/i,/zoe.*premium/i,/samantha.*(enhanced|premium)/i,/(aria|jenny|emma|ava).*natural/i,/natural.*(female|aria|jenny)/i,/google us english/i,/google uk english female/i,/^(ava|zoe|allison|susan)\b/i,/^samantha/i],daniel:[/(evan|nathan|tom).*premium/i,/daniel.*(enhanced|premium)/i,/(guy|ryan|andrew|brian|christopher).*natural/i,/natural.*male/i,/google uk english male/i,/^(evan|nathan|tom|aaron)\b/i,/^daniel/i]},$=[],F=()=>{$=De?.getVoices()??[]};De&&(F(),De.addEventListener?.("voiceschanged",F));let K=[/(paulina|monica|m[oó]nica|marisol|isabela).*(premium|enhanced)/i,/(elvira|dalia|helena|ximena|paloma).*natural/i,/natural.*(spanish|espa)/i,/google espa[nñ]ol/i,/^(paulina|monica|m[oó]nica|marisol|jorge|diego)\b/i];function A(k){if($.length||F(),k==="es"){let D=$.filter(J=>/^es[-_]/i.test(J.lang));if(D.length){for(let J of K){let Y=D.find(de=>J.test(de.name));if(Y)return Y}return D.find(J=>J.localService===!1)??D[0]}}let M=$.filter(D=>/^en[-_]/i.test(D.lang));for(let D of C[Ft(a.voice).gender==="male"?"daniel":"samantha"]){let J=M.find(Y=>D.test(Y.name));if(J)return J}return M.find(D=>D.localService===!1)??M[0]}let B=null,te="./media/voice/lines/",pe=()=>B??=fetch(`${te}manifest.json`).then(k=>k.ok?k.json():null,()=>(B=null,null)).catch(()=>null),ne=Do();function _(k,{id:M,onend:D,lang:J}={}){if(!k||!a.master||!a.guide)return D?.(),!1;let Y=Pe();if(M){let de=Ft(a.voice).lines??a.voice;return Q(),b.pause(),x.kind="guide",x.url=null,x.clip=`line:${M}`,x.status="loading",O(),pe().then(async ue=>{let se=ue?.lines?.[M]?.text===k?ue.lines[M].files?.[de]:null;if(!ne.live(Y))return;if(!se){oe(k,{onend:D,lang:J,token:Y});return}let ge=te+se;try{await s(ge)}catch{ne.live(Y)&&oe(k,{onend:D,lang:J,token:Y});return}ne.live(Y)&&lt(`line:${M}.${de}`,ge,{kind:"guide",voice:de,token:Y,onend:D})}),!0}return oe(k,{onend:D,lang:J,token:Y})}function oe(k,{onend:M,lang:D,token:J}={}){if(!ne.live(J)||!De||!k||!a.master||!a.guide)return M?.(),!1;Q(),fe(),b.pause(),De.cancel();let Y=A(D),de=Y&&(!Y.localService||/premium|enhanced|natural/i.test(Y.name)),ue=k.match(/[^.!?]+[.!?]*\s*/g)?.map(se=>se.trim()).filter(Boolean)??[k];return Te.u=J,Te.on=!0,x.kind="guide",x.url=null,x.clip="speech",x.status="playing",O(),ue.forEach((se,ge)=>{let he=new SpeechSynthesisUtterance(se);Y&&(he.voice=Y,he.lang=Y.lang),he.rate=de?1:.94,he.pitch=1,he.volume=a.volume??.8,he.onboundary=()=>{ke=1},he.onstart=()=>{ke=1},ge===ue.length-1&&(he.onend=he.onerror=()=>{ne.live(J)&&Te.u===J&&(Te.on=!1,x.status="stopped",O(),M?.())}),De.speak(he)}),!0}let Ne=()=>A()?.name??null;function wt(){Ue++,U(),Q(),b.pause(),x.status=x.clip?"stopped":"idle",O()}function ce(k){b.duration&&(b.currentTime=Sa(k)*b.duration,O())}let dt=performance.now();function Qe(){let k=performance.now(),M=Math.min(.1,(k-dt)/1e3);dt=k;let D=0;if(Te.on&&e.voice)ke=Math.max(0,ke-M*3.2),D=Sa(.35+.45*ke+.15*Math.sin(k/90));else if(!w&&x.env&&!b.paused&&(a.master||x.kind==="audition")&&b.duration)D=Sa(x.env.bins[Math.min(x.env.bins.length-1,Math.floor(b.currentTime/b.duration*x.env.bins.length))]*1.1);else if(h&&!b.paused&&(a.master||x.kind==="audition")){h.getFloatTimeDomainData(f);let Y=0;for(let ue=0;ue<f.length;ue++)Y+=f[ue]*f[ue];let de=Math.sqrt(Y/f.length);D=Sa((de-.008)/.16)}let J=D>x.energy?.05:.18;return x.energy+=(D-x.energy)*(1-Math.exp(-M/J)),x.energy<.001&&(x.energy=0),x.energy}let ze=(k,M=a.voice,D=72)=>nt(Xr(k,M),D);async function nt(k,M=72){let D=`${k}|${M}`;if(ie.has(D))return ie.get(D);let J=(async()=>{let Y;try{Y=await s(k)}catch{Y=k}let de=await(await fetch(Y)).arrayBuffer(),ue=window.OfflineAudioContext||window.webkitOfflineAudioContext,se=await new ue(1,44100,44100).decodeAudioData(de),ge=se.getChannelData(0),he=Math.max(1,Math.floor(ge.length/M)),Et=[],$t=0;for(let Ye=0;Ye<M;Ye++){let Dt=0;for(let G=Ye*he;G<(Ye+1)*he;G++)Dt+=ge[G]*ge[G];let aa=Math.sqrt(Dt/he);Et.push(aa),$t=Math.max($t,aa)}return{bins:Et.map(Ye=>Ye/($t||1)),duration:se.duration}})();return ie.set(D,J),J.catch(()=>ie.delete(D)),J}let kt={press:"select",release:"select",volume:"level",case:"open"},ut={select:90,type:70,detent:50,level:110,open:220,close:220,confirm:400},Ke={select:.3,type:.2,detent:.28,level:.22,open:.28,close:.26,confirm:.32},He={},Gt=0;function Ge(k){He[k]||!r||(He[k]=fetch(`./media/sfx/${k}.wav`).then(M=>M.arrayBuffer()).then(M=>r.decodeAudioData(M)).then(M=>He[k]=M).catch(()=>He[k]=null))}function fa(k,M=.5){if(k=kt[k]||k,!a.master||!a.sfx)return;let D=z();if(!D||D.state!=="running")return;let J=performance.now();if(J-(I[k]??0)<(ut[k]??80)||Gt>3)return;I[k]=J;let Y=He[k];if(!Y||Y instanceof Promise){Ge(k);return}let de=D.createBufferSource(),ue=D.createGain();de.buffer=Y,ue.gain.value=(Ke[k]??.6)*(k==="level"?.6+.4*Sa(M):1),k==="level"&&(de.playbackRate.value=.85+.3*Sa(M)),de.connect(ue),ue.connect(l),Gt++,de.onended=()=>{Gt--,ue.disconnect()},de.start()}let ct=null;function Ga(k=0){if(!a.master||!a.sfx)return;let M=z();if(!M||M.state!=="running")return;if(!ct){let Y=M.createBufferSource(),de=M.sampleRate*2,ue=M.createBuffer(1,de,M.sampleRate),se=ue.getChannelData(0);for(let Et=0;Et<de;Et++)se[Et]=Math.random()*2-1;Y.buffer=ue,Y.loop=!0;let ge=M.createBiquadFilter(),he=M.createGain();ge.type="lowpass",ge.Q.value=.4,ge.frequency.value=900,he.gain.value=0,Y.connect(ge).connect(he).connect(l),Y.start(),ct={f:ge,g:he,stop:0}}let D=Sa(k),J=M.currentTime;ct.g.gain.setTargetAtTime(D*.035,J,.03),ct.f.frequency.setTargetAtTime(700+600*D,J,.06),clearTimeout(ct.stop),ct.stop=setTimeout(()=>ct.g.gain.setTargetAtTime(0,M.currentTime,.04),70)}let gt=null,St=0;function Yt(k=0,M="air"){if(!a.master||!a.sfx||!r||r.state!=="running"){gt&&gt.still();return}gt??=Vo(r,l,{talking:()=>!b.paused||Te.on}),gt.update(k),clearTimeout(St),St=setTimeout(()=>gt?.still(),We.still*1e3)}let ht=()=>{if(r)for(let k of Object.keys(ut))Ge(k)};e.on(()=>{(!a.master||!a.sfx)&&(clearTimeout(St),gt?.still()),!e.voice&&x.kind==="guide"&&(U(),Q(),b.pause(),x.clip&&(x.status="stopped"),ke=0),ee(),O()});let Xe={prefs:a,state:x,el:b,get ready(){return!!r},get position(){return b.duration?b.currentTime/b.duration:0},get time(){return b.currentTime||0},get duration(){return b.duration||0},get playing(){return Te.on||!b.paused&&!b.ended},store:e,get voiceOn(){return e.voice},get soundsOn(){return e.sounds},set(k){e.set(k),fe()},toggle(k,M){e.toggle(k,M),fe()},play:$e,playUrl:Oe,say:_,voiceName:Ne,pause:je,resume:Me,stop:wt,seek:ce,energy:Qe,peaks:ze,peaksUrl:nt,sfx:fa,friction:Ga,motion:Yt,unlock:fe,once(k){return x.journey.has(k)||!a.master||!a.guide?Promise.resolve(!1):(x.journey.add(k),$e(k).then(M=>(M||x.journey.delete(k),M)))},on(k){return n.add(k),()=>n.delete(k)}};return Xe}var Jr=Mt.filter(e=>e.published!==!1),Zo=e=>e.id==="orb"||e.code==="kit",Mn=" Everything is free during early access, and Studio is open to try.",An={"reply.missed":"I didn\u2019t catch that. Tap me and try again, or type.","reply.intro":`Hello, I\u2019m the Light Orb, your guide here. Tap me and speak, or type: ask me for recommendations, materials and textures, or say Products, Templates, Studio or Sound and I\u2019ll take you there.${Mn}`,"reply.greet":"Hi, I\u2019m the Light Orb. Tap me whenever you want to talk.","reply.help":"Ask me which Orb suits your project, about its materials and textures, or how to get the free code. Or say Products, Templates, Studio or Sound and I\u2019ll take you there.","reply.thanks":"With pleasure. I\u2019m right here when you need me.","reply.who":"I\u2019m the Light Orb, the guide of this place. I can recommend a piece or a texture, answer your questions, and take you anywhere on the site.","reply.back":"Going back.","reply.unknown":"I\u2019m still learning words. Ask me for a recommendation, or say Products, Templates, Studio or Sound.","reply.mic":"The microphone is off. You can type to me instead."},qn=" Todo es gratis durante el acceso anticipado, y Studio est\xE1 abierto para probarlo.",On={"reply.missed":"No te he entendido. T\xF3came e int\xE9ntalo otra vez, o escr\xEDbeme.","reply.intro":`Hola, soy la Light Orb, tu gu\xEDa aqu\xED. T\xF3came y habla, o escr\xEDbeme: p\xEDdeme recomendaciones, materiales y texturas, o di Productos, Plantillas, Studio o Sonido y te llevo.${qn}`,"reply.greet":"Hola, soy la Light Orb. T\xF3came cuando quieras hablar.","reply.help":"Preg\xFAntame qu\xE9 Orb encaja con tu proyecto, por sus materiales y texturas, o c\xF3mo conseguir el c\xF3digo gratis. O di Productos, Plantillas, Studio o Sonido y te llevo.","reply.thanks":"Con gusto. Aqu\xED estoy cuando me necesites.","reply.who":"Soy la Light Orb, la gu\xEDa de este lugar. Te recomiendo piezas y texturas, respondo tus preguntas y te llevo a cualquier parte de la web.","reply.back":"Volvemos.","reply.unknown":"A\xFAn estoy aprendiendo palabras. P\xEDdeme una recomendaci\xF3n, o di Productos, Plantillas, Studio o Sonido.","reply.mic":"El micr\xF3fono est\xE1 desactivado. Puedes escribirme."},za=(e,a="en")=>a==="es"?{id:null,text:On[e],lang:"es"}:{id:e,text:An[e],lang:"en"},Xo={profile:"your profile",downloads:"your downloads",saved:"what you have saved",designs:"the designs you made in Studio"};function zn(e,a){if(e==="products"&&a){let n=Jr.find(r=>r.id===a);if(n)return{id:`present.product.${n.id}`,text:`This is ${n.name}. ${Zo(n)?"Try its versions; each one is free, with its code.":"Try its versions, or shape it in Studio."}`}}if(e==="templates"&&a){let n=bt.find(r=>r.id===a);if(n)return{id:`present.template.${n.id}`,text:`You are looking at the template ${n.name}. ${n.line}`}}return e==="products"?{id:"present.products",text:`Products: ${Jr.length} pieces, ready to use. Choose one to see it alive.`}:e==="templates"?{id:"present.templates",text:bt.length===1?"Templates: a complete composition of light and glass to start from. Open it to see it move.":`Templates: ${bt.length} complete compositions of light and glass to start from. Open one to see it move.`}:e==="studio"?{id:"present.studio",text:`This is Studio${", free while we build it"}. Drag me to turn me, move my light with the light tool, and shape my glass with the controls. Save your design when it feels right.`}:e==="sound"?{id:"present.sound",text:"This is Sound: choose the voice I speak with, and listen to the small sounds of the glass."}:e==="membership"?{id:"present.membership",text:"This is Membership. Everything is free for now; leave your email to hear first when plans open."}:e==="account"?a&&Xo[a]?{id:`present.account.${a}`,text:`This is your account, showing ${Xo[a]}.`}:{id:"present.account",text:"This is your account."}:e==="privacy"?{id:"present.privacy",text:"This is the privacy page: what the site keeps, and what you can ask for."}:e==="terms"?{id:"present.terms",text:"These are the terms of use of the site."}:e==="licence"?{id:"present.licence",text:"This is the licence: what you can do with the free Orb and with the pieces."}:e==="signin"?{id:"present.signin",text:"Use the email you joined with to link this device to your early access."}:e==="signup"?{id:"present.signup",text:"Join early access with your email. Everything is free while we build it, and you will hear first when new pieces open."}:{id:"present.home",text:"This is The Light Orb: objects of light and glass. Below, choose where to begin: Products, Templates, Studio or Sound. Tap me again to stop, or ask me anything."}}var Jo={products:"Productos: objetos de luz y vidrio. Elige uno para verlo vivo.",templates:"Plantillas: composiciones completas para empezar.",studio:"Esto es Studio, gratis mientras lo construimos. Da forma a la luz y guarda tu dise\xF1o.",sound:"Esto es Sonido: las voces y los sonidos del vidrio.",membership:"Esto es Membres\xEDa. Ahora todo es gratis; deja tu email y sabr\xE1s primero cu\xE1ndo abren los planes.",home:"Bienvenida a The Light Orb. Soy tu gu\xEDa: t\xF3came para hablar."};function Qo(e,a,n){let r=zn(a,n);if(e!=="es")return{...r,lang:"en"};if(a==="products"&&n){let d=Jr.find(p=>p.id===n);if(d)return{id:null,lang:"es",text:`Esto es ${d.name}. Prueba sus versiones${Zo(d)?"; cada una es gratis, con su c\xF3digo":", o dale forma en Studio"}.`}}return Jo[a]&&!n?{id:null,lang:"es",text:Jo[a]}:{...r,lang:"en"}}var ei=e=>({id:`already.${e.id}`,text:`We are already here. ${e.text}`}),ti=e=>({id:`piece.${e.id}`,text:`Here is ${e.name}. ${e.line}`}),ai=e=>({id:`open.${e.id}`,text:`Opening ${e.name}.`}),ri=()=>({id:"piece.orb",text:`Here is the Orb. ${Mt[0].line}`});var oi="lightorb:theme",Rn={light:{pearl:[243,243,241],top:[250,251,251],low:[214,217,220],sky:"255,255,255",skyA:.62,mass:"196,201,206",massA:.35,glow:"255,255,255",glowA:.7,shadow:"70,72,78",orbBackground:"#f3f3f1",orb:{dark:!1,world:"gallery",envBoost:1},cases:{bg:["#f3f3f1","#f1f1ef","#e9eae8"],room:"#6c6f6c",floor:"#eeefed",hemi:["#ffffff","#dcdedc",.6],env:1.35}},dark:{pearl:[7,7,8],top:[11,11,12],low:[2,2,3],sky:"232,226,212",skyA:.03,mass:"0,0,0",massA:.6,glow:"236,230,216",glowA:.07,shadow:"0,0,0",orbBackground:"#070708",orb:{dark:!0,world:"smoke",envBoost:1.15},cases:{bg:["#0e0e0f","#09090a","#040405"],room:"#141415",floor:"#2a2b2b",hemi:["#ffffff","#202222",.35],env:1.7}}},In=()=>{try{return localStorage.getItem(oi)}catch{return null}},mr=e=>e==="light"||e==="dark";function Pn(){let e=new URLSearchParams(location.search).get("theme");if(mr(e))return e;let a=In();return mr(a)?a:"light"}var Ra=()=>document.documentElement.dataset.theme==="dark"?"dark":"light",Pt=()=>Rn[Ra()];function ii(e){document.documentElement.dataset.theme=e,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",e==="dark"?"#141515":"#F3F3F1")}function ni(e,{remember:a=!0}={}){if(mr(e)){if(ii(e),a)try{localStorage.setItem(oi,e)}catch{}document.dispatchEvent(new CustomEvent("lightorb:theme",{detail:{theme:e}}))}}typeof document<"u"&&ii(mr(document.documentElement.dataset.theme)?Ra():Pn());var Ia=(e,a,n)=>e+(a-e)*n,Pa=e=>{let a=parseInt(String(e).replace("#",""),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]},Qs=Pa("#f3d8c5"),jn={fill:.08,lobe:.2,wall:.55,core:.034},At=e=>structuredClone(e??gr);function fr(e,a,n={}){let r=Pt().orb,d=n.dark===!0,{envBoost:p=d?1:r.envBoost,exposure:l=0,left:h=.65,right:f=.55}=n,b=d||r.dark,w=a.shell,x=a.light,ie=a.interior;e.setOptics({...jn,lobe:Ia(.1,.3,x.spread),core:Ia(.026,.044,x.spread)}),e.setInterior({kind:ie.kind,amount:ie.amount,size:ie.size,motion:ie.motion,fill:ie.fill,colour:ie.colour}),e.setElastic(w.elastic??0);let Ee=Pa(w.tint);e.setMaterial({roughness:w.roughness,thickness:Ia(.3,1.4,w.thickness),ior:w.ior,envMapIntensity:(b?1.9:2.1)*p*2**(l*.5),tint:Ee,tintDistance:w.tintAmount>.001?Ia(8,.4,w.tintAmount):0}),e.setNeutral?.(!0);let s=Pa(x.colour),I=Math.max(...s);e.setLight({tint:s.map(z=>z/Math.max(.05,I)*1.05),spread:Ia(.7,1.6,x.spread)}),e.setBloom(Ia(.004,.08,x.glow)),e.setFocus({x:x.x,y:x.y,z:x.z}),e.setTone(b?"dark":"light"),e.setVolumeWorld(0),e.lockFeather([.5,.515]);let O=z=>(Math.round(z*10)/10).toFixed(1);return e.setWorld(d?`chamber:${O(h)}:${O(f)}`:r.world),{emission:x.strength/.72*2**(l*.35),voice:a.voice}}var xt=(e,a)=>a.split(".").reduce((n,r)=>n?.[r],e),Za=e=>Math.min(1,Math.max(0,e));function si(e={}){let a=e.material??{},n=e.interior??{},r=e.light??{},d=At(Zt("original").config);if(a.tint){d.shell.tint=a.tint;let[p,l,h]=Pa(a.tint),f=Math.max(p,l,h)-Math.min(p,l,h);f>.04&&(d.shell.tintAmount=Math.min(.97,.8+f*.2))}if(d.shell.ior=Math.min(2,Math.max(1,1+.58*(a.refraction??1))),d.shell.roughness=Math.min(.5,Math.max(0,.01+(a.frost??0)*.45)),d.interior.amount=Za(d.interior.amount*(1+(n.amount??0))),d.interior.size=Za(d.interior.size*(n.size??1)),d.interior.motion=Za(d.interior.motion*(n.speed??1)),d.light.strength=Za(d.light.strength*(n.glow??1)),d.light.glow=Za(d.light.glow*(r.key??1)),r.colour&&(d.light.colour=r.colour),a.tint){let p=Pa(a.tint),l=Pa(d.light.colour);Math.max(...p)-Math.min(...p)>.04&&(d.light.colour="#"+l.map((f,b)=>Math.round((f*.4+p[b]*.6)*255).toString(16).padStart(2,"0")).join(""))}return d}var li=`
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
`;var di=`
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
`;var S="html[data-theme=dark]",ci=`
${S}{
  --bg:#070708; --surface:#101112; --surface-2:#18191A; --ink:#ECEDEA; --muted:#9A9E9B; --faint:#929693; --line:rgba(236,237,234,.1);
  --greige:#5A5752; --champagne:#E6DCC8;
  --glass-hi:rgba(255,255,255,.16); --glass-rim:rgba(255,255,255,.1); --glass-body:rgba(255,255,255,.05);
  color-scheme:dark;
}
${S} body{background:var(--bg)}
/* header surface */
${S} .hd::before{background:linear-gradient(180deg,rgba(7,7,8,.94),rgba(7,7,8,.74) 62%,rgba(7,7,8,0))}
/* light capsule \u2192 clear glass on smoke: transparent body, bright top rim, champagne lower edge */
${S} .gb{color:var(--ink);background:linear-gradient(180deg,rgba(255,255,255,.1) 0%,rgba(255,255,255,.045) 55%,rgba(255,255,255,.07) 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.22),inset 0 -2px 3px -1px rgba(230,220,200,.18),inset 0 0 0 1px rgba(255,255,255,.08),0 1px 1px rgba(0,0,0,.3),0 10px 22px -12px rgba(0,0,0,.7)}
${S} .gb:hover{box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 -2px 3px -1px rgba(230,220,200,.24),inset 0 0 0 1px rgba(255,255,255,.12),0 1px 1px rgba(0,0,0,.3),0 14px 26px -12px rgba(0,0,0,.75)}
${S} .gb:active,${S} .gb.pressed{box-shadow:inset 0 2px 4px rgba(0,0,0,.5),inset 0 0 0 1px rgba(255,255,255,.08)}
${S} .gb.primary{color:#0b0b0c;background:linear-gradient(180deg,#f4f4f2 0%,#e3e4e1 60%,#d6d8d5 100%);
  box-shadow:inset 0 1px 0 #fff,inset 1px 0 1px rgba(255,255,255,.8),inset -1px 0 1px rgba(255,255,255,.8),inset 0 -1px 0 rgba(255,255,255,.7),inset 0 -6px 8px -5px rgba(120,112,98,.38),
    0 1px 0 rgba(0,0,0,.8),0 2px 4px -1px rgba(0,0,0,.6),0 12px 24px -10px rgba(0,0,0,.85)}
${S} .gb.primary:hover{background:linear-gradient(180deg,#fff 0%,#eceeeb 60%,#dfe1de 100%)}
${S} .gb[aria-pressed=true],${S} .gb.selected{box-shadow:inset 0 0 0 1.5px var(--ink),inset 0 1px 0 rgba(255,255,255,.2),0 6px 14px -10px rgba(0,0,0,.6)}
${S} .gb[disabled],${S} .gb[aria-disabled=true]{box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
${S} .gb[aria-busy=true]::after{border-color:rgba(236,237,234,.25);border-top-color:var(--ink)}
${S} .gb:focus-visible,${S} .gi:focus-visible,${S} .gsel:focus-visible,${S} .gsw:focus-visible,${S} .grange:focus-visible,${S} .pill:focus-visible,${S} .tl:focus-visible{outline-color:var(--ink)}
/* captions, menus, words that speak */
${S} .caption{background:rgba(14,14,15,.84);color:var(--ink);box-shadow:0 0 0 1px rgba(255,255,255,.07)}
${S} .orb-ask{background:rgba(30,32,32,.9);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 0 0 1px rgba(255,255,255,.1),0 8px 30px rgba(0,0,0,.3)}
${S} .orb-ask button{background:rgba(255,255,255,.08)}
${S} .orb-ask button[aria-pressed=true]{color:#141515}
${S} .orb-ask button:focus-visible{outline:2px solid var(--ink);outline-offset:3px}
/* Track B's independently mounted popover declares local light defaults. Keep
   this selector more specific; its stylesheet may be injected after ours. */
${S} .sndc-site,${S} .complete .sndc-intro{
  --snd-ink:#ECEDEA;--snd-muted:#9A9E9B;--snd-glass-top:rgba(255,255,255,.14);--snd-glass-bot:rgba(255,255,255,.04);
  --snd-edge:rgba(255,255,255,.12);--snd-hi:rgba(255,255,255,.3);--snd-shadow:rgba(0,0,0,.75);--snd-pane:rgba(30,32,32,.96);
  --snd-track:rgba(255,255,255,.14);--snd-on:#ECEDEA;--snd-knob:#141515;--snd-focus:#ECEDEA;
}
${S} .sndc-site .sndc-t[aria-pressed=false] .sndc-sw::after,${S} .complete .sndc-intro .sndc-t[aria-pressed=false] .sndc-sw::after{background:var(--snd-ink)}
${S} .menu{background:rgba(14,14,15,.9);box-shadow:0 0 0 1px rgba(255,255,255,.08),0 24px 50px -24px rgba(0,0,0,.8)}
${S} [data-speak]:hover,${S} [data-speak]:focus-visible{text-decoration-color:rgba(236,237,234,.3)}
${S} [data-speak][data-speaking]{text-decoration-color:rgba(236,237,234,.6)}
${S} .qt figcaption a{text-decoration-color:rgba(236,237,234,.3)}
/* cards and panels: smoke, hairline rims instead of soft shadows */
${S} .arc-img{box-shadow:0 0 0 1px rgba(255,255,255,.08),0 30px 50px -34px rgba(0,0,0,.9)}
${S} .arc-c.on .arc-img{box-shadow:0 0 0 1px rgba(255,255,255,.14),0 40px 60px -34px rgba(0,0,0,.95)}
/* The glass layer (glass.css.js "clear glass" pass) on smoke: same clear body, rims
   lit from above, a faint champagne lower edge. !important only to beat that pass's
   high-specificity :not(.dark) selectors without touching them. */
${S} .gb:not(.primary),${S} .pill[aria-checked=true],${S} .pill[aria-pressed=true],${S} .pill[aria-selected=true],${S} .pill.on,${S} .gdd-b,${S} .segbar{
  color:var(--ink);background:linear-gradient(180deg,rgba(255,255,255,.14) 0%,rgba(255,255,255,.035) 44%,rgba(0,0,0,.22) 56%,rgba(255,255,255,.07) 100%)!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.5),inset 0 0 0 1px rgba(255,255,255,.1),inset 1px 0 1px rgba(255,255,255,.1),inset -1px 0 1px rgba(255,255,255,.1),
    inset 0 9px 10px -10px rgba(255,255,255,.35),inset 0 -1px 0 rgba(230,220,200,.32),inset 0 -6px 8px -6px rgba(230,220,200,.14),inset 0 -10px 12px -10px rgba(0,0,0,.7),
    0 1px 0 rgba(0,0,0,.7),0 2px 4px -1px rgba(0,0,0,.65),0 14px 26px -12px rgba(0,0,0,.9)!important}
${S} .gb:not(.primary):hover{box-shadow:inset 0 1px 0 rgba(255,255,255,.62),inset 0 0 0 1px rgba(255,255,255,.14),inset 1px 0 1px rgba(255,255,255,.14),inset -1px 0 1px rgba(255,255,255,.14),
    inset 0 9px 10px -10px rgba(255,255,255,.45),inset 0 -1px 0 rgba(230,220,200,.4),inset 0 -6px 8px -6px rgba(230,220,200,.18),inset 0 -10px 12px -10px rgba(0,0,0,.7),
    0 1px 0 rgba(0,0,0,.7),0 3px 6px -1px rgba(0,0,0,.65),0 18px 30px -12px rgba(0,0,0,.9)!important}
${S} .gb:not(.primary):active{box-shadow:inset 0 2px 5px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,255,255,.1),inset 0 -1px 0 rgba(230,220,200,.2),0 1px 1px rgba(0,0,0,.7)!important}
${S} .gb:not(.primary)::before{left:14%;top:2px;width:38%;height:38%;background:radial-gradient(70% 80% at 45% 20%,rgba(255,255,255,.42),rgba(255,255,255,0) 70%)}
${S} .gb:not(.primary)::after{background:radial-gradient(60% 80% at 50% 100%,rgba(230,220,200,.26),rgba(230,220,200,0) 75%)}
${S} .gb.primary::before,${S} .gb.primary::after{opacity:.5}
${S} .glass,${S} .folder-track .tcard.glass{
  background:linear-gradient(155deg,rgba(255,255,255,.07) 0%,rgba(255,255,255,.018) 38%,rgba(255,255,255,.008) 62%,rgba(255,255,255,.035) 100%)!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 0 0 1px rgba(255,255,255,.09),inset 1px 0 0 rgba(255,255,255,.12),inset 0 -1px 0 rgba(230,220,200,.14),0 30px 60px -36px rgba(0,0,0,.9)!important}
/* The light folder glow used .95 white behind transparent cards, washing out
   the dark description. Keep its depth, with text above the decorative glare. */
${S} .folder-glow{background:radial-gradient(closest-side,rgba(255,255,255,.1),rgba(236,237,234,.035) 55%,transparent)}
${S} .folder .glass::after{z-index:0;background:radial-gradient(120% 60% at 20% -10%,rgba(255,255,255,.1),transparent 55%),linear-gradient(115deg,transparent 40%,rgba(255,255,255,.04) 48%,transparent 56%)}
${S} .folder-track{z-index:1}
${S} .tcard.on .tcard-n,${S} .tcard.on .tcard-t,${S} .tcard.on .tcard-l{position:relative;z-index:1}
${S} .tcard.on .tcard-n,${S} .tcard.on .tcard-l{color:#B4B8B5}
${S} .pane,${S} .gdd-l{background:rgba(14,14,15,.8);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 0 0 1px rgba(255,255,255,.07),0 24px 50px -24px rgba(0,0,0,.85)}
${S} .gdd-o[aria-selected=true]{background:rgba(255,255,255,.1);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
${S} .gi,${S} .gsel{background-color:rgba(255,255,255,.05);color:var(--ink);box-shadow:inset 0 0 0 1px rgba(255,255,255,.14)}
${S} .gsel{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' fill='none' stroke='%23ECEDEA' stroke-width='1.4' stroke-linecap='round'%3E%3Cpath d='M1 1l4.5 4.5L10 1'/%3E%3C/svg%3E")}
${S} .gsw{background:rgba(255,255,255,.14);box-shadow:inset 0 1px 2px rgba(0,0,0,.5)}${S} .gsw[aria-checked=true]{background:rgba(255,255,255,.5)}
${S} .gsw[aria-checked=true]::after{background:#141515;box-shadow:inset 0 0 0 1px rgba(255,255,255,.15)}
${S} .grange::-webkit-slider-runnable-track{background:linear-gradient(90deg,var(--ink) var(--p),rgba(255,255,255,.2) var(--p))}
${S} .grange::-moz-range-track{background:rgba(255,255,255,.2)}${S} .grange::-moz-range-progress{background:var(--ink)}
${S} .org .pill[aria-selected=true]{background:rgba(255,255,255,.12)}
${S} .plan{background:rgba(255,255,255,.04);box-shadow:0 0 0 1px rgba(255,255,255,.08)}
${S} .plan.em{background:rgba(255,255,255,.08);box-shadow:0 0 0 1px rgba(255,255,255,.16),0 30px 50px -36px rgba(0,0,0,.9)}
${S} .si-row:hover{background:rgba(255,255,255,.05)}
/* stages and thumbnails: smoke behind the objects (product photos themselves are unchanged) */
${S} .pc-v,${S} .shop-v,${S} .pd-stage,${S} .pd-stage.glass,${S} .tcard-cv{background:radial-gradient(80% 70% at 50% 42%,#2a2c2c,#141515)}
${S} .cv-products,${S} .cv-sound{background:radial-gradient(90% 70% at 30% 20%,#3a3c3c 0%,#1e2020 45%,#0f1010 100%)!important}
${S} .cv-templates{background:linear-gradient(160deg,#2c2d2d 0%,#1a1b1b 55%,#0e0f0f 100%)!important}
/* the welcome and quotation type (site.css.js sets a fixed near-black) */
${S} .qt blockquote p,${S} .wel-h{color:var(--ink)}
/* ambient light behind products / templates / sound: charcoal smoke, no colour */
${S} .lo.r-products::before,${S} .lo.r-templates::before,${S} .lo.r-sound::before{
  background:radial-gradient(34% 30% at 60% 16%,rgba(230,220,200,.022),transparent 70%)}   /* owner 2026-10-21: no broad grey glow */
/* fixed text greys and small chips in site.css.js */
${S} .lede,${S} .legal-b p,${S} .dh-l{color:#B4B8B5}
${S} .file-ext,${S} .file-v .file-ext{background:rgba(255,255,255,.1);color:var(--muted)}
${S} .studio-lock{background:rgba(255,255,255,.05);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 0 0 1px rgba(255,255,255,.08)}
${S} .cart-n{background:var(--ink);color:#141515}
/* \u2500\u2500 Home selector cards in dark (owner 2026-10-21): black translucent glass, not milky slabs \u2500\u2500 */
/* !important: card rules such as .dg-win img{display:block} must not show the twin */
.lo-dark-only{display:none!important}${S} .lo-dark-only{display:block!important}${S} .lo-light-only{display:none!important}
${S} .dg-img,${S} .dg-templates{background:radial-gradient(80% 60% at 50% 38%,rgba(255,255,255,.045),rgba(255,255,255,0) 62%),linear-gradient(180deg,#0f0f11 0%,#08080a 60%,#050506 100%);
  box-shadow:0 1px 0 rgba(0,0,0,.85),0 2px 6px -2px rgba(0,0,0,.8),0 30px 50px -30px rgba(0,0,0,.95)}
/* the glass itself, above the picture: lit top edge, curved sides, a faint champagne lower lip, one restrained sheen */
${S} .dg-img::before{content:"";position:absolute;inset:0;z-index:3;border-radius:inherit;pointer-events:none;
  background:linear-gradient(155deg,rgba(255,255,255,.075) 0%,rgba(255,255,255,0) 30%,rgba(255,255,255,0) 78%,rgba(255,255,255,.025) 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 1px 0 1px rgba(255,255,255,.09),inset -1px 0 1px rgba(255,255,255,.09),inset 0 -1px 0 rgba(230,220,200,.18),
    inset 0 0 0 1px rgba(255,255,255,.07),inset 0 22px 34px -28px rgba(255,255,255,.16),inset 0 -26px 34px -28px rgba(0,0,0,.8)}
${S} .dg-c.on .dg-img{box-shadow:0 1px 0 rgba(0,0,0,.85),0 3px 8px -2px rgba(0,0,0,.85),0 36px 56px -30px rgba(0,0,0,1)}
${S} .dg-c.on .dg-img::before{box-shadow:inset 0 1px 0 rgba(255,255,255,.4),inset 1px 0 1px rgba(255,255,255,.12),inset -1px 0 1px rgba(255,255,255,.12),inset 0 -1px 0 rgba(230,220,200,.24),
    inset 0 0 0 1px rgba(255,255,255,.1),inset 0 22px 34px -28px rgba(255,255,255,.2),inset 0 -26px 34px -28px rgba(0,0,0,.8)}
${S} .dg-products>img{mix-blend-mode:normal}
${S} .dg-win{background:#0a0a0b;box-shadow:0 0 0 1px rgba(255,255,255,.12),0 18px 30px -16px rgba(0,0,0,.95)}
${S} .dg-win::after{background:linear-gradient(155deg,rgba(255,255,255,.14) 0%,rgba(255,255,255,0) 36%)}
${S} .dg-templates::after{background:radial-gradient(closest-side,rgba(0,0,0,.7),transparent)}
${S} .cv-wave i{background:linear-gradient(90deg,rgba(255,255,255,.14),rgba(255,255,255,.05));box-shadow:inset 0 0 0 1px rgba(255,255,255,.12),0 6px 10px -6px rgba(0,0,0,.8)}
${S} .cv-wave i:nth-child(-n+9){background:linear-gradient(90deg,#f1f1ee,#c9cbc8);box-shadow:inset 0 1px 0 #fff,0 6px 10px -6px rgba(0,0,0,.8)}
/* the theme switch sits beside the sound control (Track B owns .snd) */
.thm{position:relative}
`;var ot=null,qt=null,ja=null,Qa=0,Dn=performance.now()/1e3,Ve={exposure:1,target:1,impacts:[null,null],next:0,strength:1,scale:90,horizon:.27,lamp:.9,orb:null};function br(e){if(!qt){qt=document.createElement("canvas"),qt.className="world-preview",qt.setAttribute("aria-hidden","true"),qt.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:inherit";try{ot=Po(qt)}catch{ot=null}}return ot&&(ja=e,e.prepend(qt),Zr(),Nn()),qt}function er(){cancelAnimationFrame(Qa),Qa=0,qt?.remove(),ja=null}function Zr(){if(!ja||!ot)return;let e=ja.getBoundingClientRect();ot.resize(Math.max(2,e.width),Math.max(2,e.height),Math.min(devicePixelRatio||1,1.5))}addEventListener("resize",Zr);var Ie={state:Ve,setExposure(e,a=!1){Ve.target=e,a&&(Ve.exposure=e)},impact(e,a,n=Ve.strength){let r=Ve.next++%2;Ve.impacts[r]={x:e,y:a,at:performance.now()/1e3,strength:n}},set(e){Object.assign(Ve,e)},setOrb(e){Ve.orb=e},get canvas(){return qt}};function Nn(){cancelAnimationFrame(Qa);let e=()=>{if(!ja||!ot)return;let a=performance.now()/1e3,n=ja.getBoundingClientRect();Math.abs(n.width-qt.width/ot.ratio)>2&&Zr(),Ve.exposure+=(Ve.target-Ve.exposure)*.05;let r=n.height,d=Ve.orb;ot.setHorizon(Ve.horizon),ot.setExposure(Ve.exposure),ot.setNightGain(1),d?(ot.setOrb(d.x,d.y,d.d),ot.setLamp(d.x,d.y,d.d*3,Ve.lamp*(1-Ve.exposure)),ot.setReveal(d.x,d.y,Math.hypot(n.width,r),Ve.exposure*60)):(ot.setReveal(0,0,1,0),ot.setLamp(0,0,1,0)),Ve.impacts.forEach((p,l)=>ot.setImpact(l,p?.x??0,p?.y??0,p?a-p.at:-1,p?.strength??0,Ve.scale)),ot.render(a-Dn),Qa=requestAnimationFrame(e)};Qa=requestAnimationFrame(e)}var Bn=/^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/,Da=e=>typeof e=="string"&&e.length<=254&&Bn.test(e.trim()),pi="trescarla@gmail.com",tr=()=>`<p class="note contact">Questions? <a href="mailto:${pi}">${pi}</a></p>`,ui="lightorb:profile",Hn=e=>String(e).replace(/[&<>"]/g,a=>`&#${a.charCodeAt(0)};`);async function Qr({email:e,name:a="",source:n}){if(e=String(e??"").trim(),a=String(a??"").trim().slice(0,40),!Da(e))return{ok:!1,error:"Please enter a valid email address."};if(!Ua)return{ok:!1,error:"Early access sign-up opens soon. Nothing was sent."};try{let r=await fetch(Ua,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,...a?{name:a}:{},source:n,lang:(navigator.language||"en").slice(0,5)})});if(!r.ok)return{ok:!1,error:r.status===429?"Too many tries \u2014 please wait a minute.":"That did not go through. Please try again later."}}catch{return{ok:!1,error:"That did not go through. Please check your connection and try again."}}try{let r=JSON.parse(localStorage.getItem(ui))??{};localStorage.setItem(ui,JSON.stringify({...r,email:e,...a?{name:a}:{},joined:r.joined??new Date().toISOString()}))}catch{}return ye("waitlist_join",{source:n}),{ok:!0}}var eo=e=>`<div class="joined glass" role="status" tabindex="-1"><p class="kicker">You\u2019re in</p>
  <h2>Welcome to early access</h2><p>We\u2019ll write to <b>${Hn(e)}</b> when new pieces and Studio updates open. Everything stays free while we build it.</p>
  <div class="acts eq"><a class="gb small primary" href="#/studio">Open Studio</a><a class="gb small" href="#/account">Your account</a></div></div>`;function Ea(e,{compact:a=!1,label:n="",title:r="Join early access"}={}){let d=!!Ua;return`<form class="form interest wl${a?" wl-c":""}" data-waitlist="${e}" novalidate>
    ${a?"":`<h2>${r}</h2>`}
    <label class="fl"><span>${n||(a?"Join early access \u2014 free; one email when new pieces open":"Free. We email you when new pieces and Studio updates open.")}</span>
      <span class="wl-row"><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"${d?"":" disabled"}>
      <button class="gb${a?" small":""}" type="submit"${d?"":" disabled"}><span>Join</span></button></span></label>
    <p class="note" data-wlmsg role="status" aria-live="polite">${d?'We only keep your email to tell you about new pieces and Studio updates. See <a href="#/privacy">privacy</a>; leave any time.':'Sign-up opens soon \u2014 nothing typed here is sent yet. See <a href="#/privacy">privacy</a>.'}</p>
  </form>`}function vr(e){e.querySelectorAll("[data-waitlist]").forEach(a=>a.addEventListener("submit",async n=>{if(n.preventDefault(),!Ua)return;let r=a.querySelector("[data-wlmsg]"),d=a.querySelector("input"),p=a.querySelector("button"),l=d.value.trim();if(!Da(l)){r.textContent="Please enter a valid email address.",d.focus();return}p.disabled=!0,p.setAttribute("aria-busy","true");let h=await Qr({email:l,source:a.dataset.waitlist});if(h.ok){let f=document.createElement("div");f.innerHTML=eo(l);let b=f.firstElementChild;a.replaceWith(b),b.focus({preventScroll:!0});return}r.textContent=h.error,p.disabled=!1,p.removeAttribute("aria-busy")}))}var xr=500;function gi(e){return`<div class="fb" data-fbwrap><button class="tl" type="button" data-fbbtn aria-expanded="false" aria-controls="fb-p"><span>What's missing?</span></button>
    <form class="form fb-p" id="fb-p" data-feedback="${e}" novalidate hidden>
      <label class="fl"><span>Tell us what Studio or the pieces still need</span>
        <textarea class="gi" name="text" rows="3" maxlength="${xr}" required></textarea></label>
      <div class="acts"><button class="gb small" type="submit"${pr?"":" disabled"}><span>Send</span></button></div>
      <p class="note" data-fbmsg role="status" aria-live="polite">Up to ${xr} characters. Only the text and the page are kept.</p>
    </form></div>`}function hi(e,{sfx:a=()=>{}}={}){e.querySelectorAll("[data-fbwrap]").forEach(n=>{let r=n.querySelector("[data-fbbtn]"),d=n.querySelector("[data-feedback]");r.addEventListener("click",()=>{let p=d.hidden;d.hidden=!p,r.setAttribute("aria-expanded",String(p)),a(p?"open":"close"),p&&d.querySelector("textarea").focus()}),d.addEventListener("submit",async p=>{if(p.preventDefault(),!pr)return;let l=d.querySelector("[data-fbmsg]"),h=d.querySelector("textarea"),f=d.querySelector("button"),b=h.value.trim();if(!b){l.textContent="Write a few words first.",h.focus();return}if(b.length>xr){l.textContent=`Please keep it under ${xr} characters.`;return}f.disabled=!0;try{let w=await fetch(pr,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:b,page:d.dataset.feedback})});w.ok?(l.textContent="Thank you \u2014 we read every note.",h.value="",ye("feedback_send",{page:d.dataset.feedback})):l.textContent=w.status===429?"Too many notes for now \u2014 please try again later.":"That did not go through. Please try again later."}catch{l.textContent="That did not go through. Please try again later."}f.disabled=!1})})}var to=[["clear","Clear glass",0],["chrome","Liquid metal",1],["porcelain","Porcelain over glass",2],["bloom","Milky glass \xB7 cloud",3],["core","Glass \xB7 light core",4],["points","Glass \xB7 points of light",5],["glitter","Glass \xB7 glitter",6],["beads","Glass \xB7 beads",7],["liquid","Glass \xB7 liquid",8]],kr=Object.fromEntries(to.map(([e,,a])=>[e,a])),ao={clear:[[1,1,1],[1,1,1]],chrome:[[1,1,1],[1,1,1]],porcelain:[[.13,.17,.18],[.86,.64,.3]],bloom:[[1,.42,.45],[1,.72,.68]],core:[[1,.97,.92],[1,1,1]],points:[[.92,.96,1],[1,1,1]],glitter:[[.95,.96,1],[1,1,1]],beads:[[.97,.97,.96],[1,.9,.95]],liquid:[[.55,.78,.95],[.9,.97,1]]},wr=[-.6,.55,.6],Fn=Math.hypot(...wr),_n=Math.atan2(wr[0],wr[2])*180/Math.PI,Gn=Math.asin(wr[1]/Fn)*180/Math.PI,ar=e=>"#"+e.map(a=>Math.round(Math.min(1,Math.max(0,a))*255).toString(16).padStart(2,"0")).join(""),Sr=e=>{let a=parseInt(String(e).replace("#",""),16)||0;return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]};function mi(e={id:"clear",base:"clear"}){let a=kr[e.base]===void 0?"clear":e.base,[n,r]=ao[a];return{v:1,variant:e.id||a,base:a,material:{tint:ar(e.tint??n),accent:ar(e.accent??r),refraction:1,dispersion:0,frost:0,rim:1,opacity:1,iridescence:0,exposure:1},interior:{amount:0,size:1,speed:1,glow:1,fill:.55},light:{angle:+_n.toFixed(2),height:+Gn.toFixed(2),key:1,rim:1,environment:1,horizon:1,colour:"#ffffff"},motion:{spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},scene:{background:"none",colour:"#0b0c0c",colour2:"#2a2d2c",size:1,shadow:0,reflection:0}}}var yr=e=>e&&typeof e=="object"&&!Array.isArray(e);function Na(e,a){let n=structuredClone(e);if(!yr(a))return n;for(let[r,d]of Object.entries(a))r in n&&(yr(n[r])?yr(d)&&(n[r]=Na(n[r],d)):typeof d==typeof n[r]&&(typeof d!="number"||Number.isFinite(d))&&(n[r]=d));return kr[n.base]===void 0&&(n.base="clear"),n}function Er(e,a){let n={};for(let[r,d]of Object.entries(a))if(yr(d)){let p=Er(e?.[r]??{},d);Object.keys(p).length&&(n[r]=p)}else if(typeof d=="number"){let p=Math.round(d*1e3)/1e3;(e?.[r]===void 0||Math.round(e[r]*1e3)/1e3!==p)&&(n[r]=p)}else e?.[r]!==d&&(n[r]=d);return n}var Yn=e=>btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var fi=(e,a)=>Yn(JSON.stringify(Er(a,e)));var vt=[{id:"clear",base:"clear",name:"Clear",line:"Thick clear glass, nothing inside but its own depth."},{id:"smoke",base:"clear",name:"Smoke",line:"Smoked glass, a grey depth that darkens to the rim.",tint:[.6,.62,.65]},{id:"amber",base:"clear",name:"Amber",line:"Warm amber glass, like light through honey.",tint:[1,.8,.52]},{id:"chrome",base:"chrome",name:"Chrome",line:"Liquid chrome that keeps folding the room it reflects."},{id:"gold",base:"chrome",name:"Liquid Gold",line:"Molten gold folding over itself.",tint:[1,.79,.45]},{id:"gunmetal",base:"chrome",name:"Gunmetal",line:"Dark liquid metal with cold highlights.",tint:[.5,.53,.57]},{id:"porcelain",base:"porcelain",name:"Porcelain",line:"Raised porcelain bands with gold edges over dark glass."},{id:"silverline",base:"porcelain",name:"Silverline",line:"Porcelain bands edged in silver over dark glass.",accent:[.82,.84,.88]},{id:"celadon",base:"porcelain",name:"Celadon",line:"Porcelain bands over green celadon glass.",tint:[.22,.36,.3]},{id:"bloom",base:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud."},{id:"lilac",base:"bloom",name:"Lilac",line:"Milky glass holding a slow violet cloud.",tint:[.62,.45,1],accent:[.86,.76,1]},{id:"lagoon",base:"bloom",name:"Lagoon",line:"Milky glass holding a slow sea-blue cloud.",tint:[.2,.62,.9],accent:[.6,.92,.9]},{id:"core",base:"core",name:"Core",line:"Clear glass holding one soft white light at its centre."},{id:"dawn",base:"core",name:"Dawn",line:"Clear glass holding a warm, low light.",tint:[1,.72,.45]},{id:"starlight",base:"points",name:"Starlight",line:"Clear glass full of small points of light that drift and twinkle."},{id:"firefly",base:"points",name:"Firefly",line:"Warm points of light drifting slowly inside the glass.",tint:[1,.78,.4]},{id:"glitter",base:"glitter",name:"Glitter",line:"Fine silver flecks that catch the light as the sphere turns."},{id:"goldleaf",base:"glitter",name:"Gold Leaf",line:"Flakes of gold suspended in clear glass.",tint:[1,.78,.4]},{id:"beads",base:"beads",name:"Beads",line:"Small milky glass beads floating inside the shell."},{id:"pearls",base:"beads",name:"Pearls",line:"Soft pearls with a faint rainbow sheen, floating inside.",tint:[1,.95,.97],accent:[.85,.9,1]}],vi=kr,bi={0:{tint:[1,1,1],accent:[1,1,1]},1:{tint:[1,1,1],accent:[1,1,1]},2:{tint:[.13,.17,.18],accent:[.86,.64,.3]},3:{tint:[1,.42,.45],accent:[1,.72,.68]},4:{tint:[1,.97,.92],accent:[1,1,1]},5:{tint:[.92,.96,1],accent:[1,1,1]},6:{tint:[.95,.96,1],accent:[1,1,1]},7:{tint:[.97,.97,.96],accent:[1,.9,.95]},8:{tint:[.55,.78,.95],accent:[.9,.97,1]}},ga=e=>mi(vt.find(a=>a.id===e)??vt[0]),Vn=e=>{let a=vt.find(r=>r.id===e)??vt[0],n=vi[a.base];return{k:n,tint:a.tint??bi[n].tint,accent:a.accent??bi[n].accent}},Un=`
  uniform mat3 uRot;
  varying vec3 vN; varying vec3 vP; varying vec3 vObj;
  void main() {
    vObj = uRot * position;              // the material turns with the drag
    vN = normalize(normalMatrix * normal);
    vec4 wp = modelViewMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    gl_Position = projectionMatrix * wp;
  }`,Kn=`
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
  }`,rr=null;function Xn(){if(rr)return rr;let e=document.createElement("canvas"),a=new Wr({canvas:e,alpha:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0});a.setClearColor(0,0);let n=new _r,r=new Yr(30,1,.1,20);r.position.set(0,0,4.9);let d=new Ro({vertexShader:Un,fragmentShader:Kn,transparent:!0,premultipliedAlpha:!0,uniforms:{uKind:{value:0},uTint:{value:new dr(1,1,1)},uAccent:{value:new dr(1,1,1)},uTime:{value:0},uStir:{value:0},uRot:{value:new Fr},...Object.fromEntries(Object.entries(yi).map(([l,h])=>[l,{value:Array.isArray(h)?new dr(...h):h}]))}}),p=new Gr(new zo(1,128,96),d);return n.add(p),rr={r:a,scene:n,camera:r,mat:d,mesh:p,list:new Set,raf:0},rr}var yi={uIor:1,uDisp:0,uFrost:0,uRim:1,uOpacity:1,uIrid:0,uExp:1,uAmt:0,uSize:1,uGlow:1,uFill:.55,uKeyDir:[-.6/Math.hypot(.6,.55,.6),.55/Math.hypot(.6,.55,.6),.6/Math.hypot(.6,.55,.6)],uKey:1,uRimL:1,uEnv:1,uHorizon:1,uLightCol:[1,1,1]},xi=Math.tan(Math.asin(1/4.9))/Math.tan(15*Math.PI/180),Jn=1/(4.9*Math.tan(15*Math.PI/180));function Zn(e){let a=e.cfg;if(!a){let h=Vn(e.kind);return{...yi,uKind:h.k,uTint:h.tint,uAccent:h.accent}}let n=a.material,r=a.interior,d=a.light,p=d.angle*Math.PI/180,l=d.height*Math.PI/180;return{uKind:vi[a.base]??0,uTint:Sr(n.tint),uAccent:Sr(n.accent),uIor:n.refraction,uDisp:n.dispersion,uFrost:n.frost,uRim:n.rim,uOpacity:n.opacity,uIrid:n.iridescence,uExp:n.exposure,uAmt:r.amount,uSize:Math.max(.2,r.size),uGlow:r.glow,uFill:r.fill,uKeyDir:[Math.cos(l)*Math.sin(p),Math.sin(l),Math.cos(l)*Math.cos(p)],uKey:d.key,uRimL:d.rim,uEnv:d.environment,uHorizon:d.horizon,uLightCol:Sr(d.colour)}}function ro(){let e=rr;e.raf=0;let a=performance.now()/1e3,n=Math.min(devicePixelRatio||1,1.5);for(let d of e.list){if(!d.visible||!d.canvas.isConnected)continue;d.step(a);let p=Math.max(2,Math.round(d.canvas.clientWidth*n)),l=Math.max(2,Math.round(d.canvas.clientHeight*n));(d.canvas.width!==p||d.canvas.height!==l)&&(d.canvas.width=p,d.canvas.height=l),e.r.setSize(p,l,!1),e.camera.aspect=p/l,e.camera.updateProjectionMatrix();let h=e.mat.uniforms;for(let[w,x]of Object.entries(Zn(d)))Array.isArray(x)?h[w].value.fromArray(x):h[w].value=x;h.uTime.value=d.time,h.uStir.value=d.stir,h.uRot.value.copy(d.rot),e.mesh.scale.setScalar(d.scale),e.mesh.position.y=d.lift,e.r.render(e.scene,e.camera);let f=d.ctx;f.clearRect(0,0,p,l);let b=d.cfg?.scene;b?Qn(d,f,p,l,e.r.domElement,b):f.drawImage(e.r.domElement,0,0,p,l)}let r=!1;for(let d of e.list)if(d.visible&&d.canvas.isConnected){r=!0;break}r&&(e.raf=requestAnimationFrame(ro))}var $a=null;function Qn(e,a,n,r,d,p){if(p.background==="solid")a.fillStyle=p.colour,a.fillRect(0,0,n,r);else if(p.background==="gradient"){let b=a.createRadialGradient(n/2,r*.42,0,n/2,r*.5,Math.hypot(n,r)*.6);b.addColorStop(0,p.colour2),b.addColorStop(1,p.colour),a.fillStyle=b,a.fillRect(0,0,n,r)}let l=xi*e.scale*r/2,h=r/2-e.lift*Jn*r/2,f=r/2+xi*p.size*r/2;if(p.shadow>0){let b=Math.max(0,f-(h+l)),w=1/(1+b/l*2);a.save(),a.translate(n/2,f),a.scale(1,.16);let x=a.createRadialGradient(0,0,0,0,0,l*(1.05+(1-w)*.5));x.addColorStop(0,`rgba(0,0,0,${(.55*p.shadow*w).toFixed(3)})`),x.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=x,a.beginPath(),a.arc(0,0,l*1.6,0,Math.PI*2),a.fill(),a.restore()}if(p.reflection>0&&f<r){let b=Math.min(r-f,l*2);$a||=document.createElement("canvas"),($a.width!==n||$a.height!==r)&&($a.width=n,$a.height=r);let w=$a.getContext("2d");w.clearRect(0,0,n,r),w.save(),w.translate(0,f*2),w.scale(1,-1),w.drawImage(d,0,0,n,r),w.restore(),w.globalCompositeOperation="destination-in";let x=w.createLinearGradient(0,f,0,f+b);x.addColorStop(0,`rgba(0,0,0,${(.5*p.reflection).toFixed(3)})`),x.addColorStop(1,"rgba(0,0,0,0)"),w.fillStyle=x,w.fillRect(0,0,n,r),w.globalCompositeOperation="source-over",a.drawImage($a,0,0)}a.drawImage(d,0,0,n,r)}function or(e,a="clear",{interactive:n=!0,reduced:r=matchMedia("(prefers-reduced-motion: reduce)").matches,config:d=null}={}){let p;try{p=Xn()}catch{let Z=()=>{};return new Proxy({},{get:()=>Z})}let l=document.createElement("canvas");l.className="sph-c",l.setAttribute("aria-hidden","true"),e.append(l);let h={spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},f=()=>z.cfg?.motion??h,b={v:.4,vel:r?0:.12},w={v:-.15,vel:0},x={x:0,y:0,tx:0,ty:0},ie=new qo,Ee=new Oo,s=performance.now()/1e3,I=null,O=0,z={canvas:l,ctx:l.getContext("2d"),kind:a,cfg:d?Na(ga(d.variant||a),d):null,visible:!1,time:Math.random()*40,stir:0,speech:0,scale:1,lift:0,rot:new Fr,step(Z){let W=Math.min(.05,Z-s);s=Z,O+=W;let U=f(),Pe=r?0:U.spin;I||(b.vel+=(Pe-b.vel)*W*.8,w.vel*=Math.exp(-W*3),w.v+=(U.tilt-w.v)*W*.8),b.v+=b.vel*W,w.v=Math.max(-1.2,Math.min(1.2,w.v+w.vel*W)),x.x+=(x.tx*U.pointer-x.x)*W*5,x.y+=(x.ty*U.pointer-x.y)*W*5,z.stir*=Math.exp(-W*1.6),z.time+=W*(r?.3:1)*(1+z.stir*3)*(z.cfg?z.cfg.interior.speed:1),Ee.set(w.v+x.y*.25,b.v+x.x*.35,U.roll,"YXZ"),ie.makeRotationFromEuler(Ee),z.rot.setFromMatrix4(ie);let ae=z.cfg?z.cfg.scene.size:1,$e=r?0:1;z.scale=ae*(1+$e*U.breathe*Math.sin(O*1.3)+z.speech*U.speech*.06),z.lift=$e*U.bob*ae*Math.sin(O*Math.PI*2*U.bobSpeed)}};z.cfg&&(z.kind=z.cfg.variant);let ee=(Z,W,U=.016)=>{let Pe=f().inertia;b.v+=Z*.01,w.v+=W*.01,b.vel=Z*.01/U*.6*Pe,w.vel=W*.01/U*.6*Pe};if(n){l.style.touchAction="pan-y",l.style.cursor="grab",l.addEventListener("pointerdown",U=>{I={x:U.clientX,y:U.clientY,t:performance.now(),moved:!1},l.setPointerCapture(U.pointerId),l.style.cursor="grabbing"}),l.addEventListener("pointermove",U=>{let Pe=l.getBoundingClientRect();if(x.tx=((U.clientX-Pe.left)/Pe.width-.5)*2,x.ty=((U.clientY-Pe.top)/Pe.height-.5)*2,!I)return;let ae=performance.now(),$e=U.clientX-I.x,Oe=U.clientY-I.y,Ue=Math.max(8,ae-I.t)/1e3;Math.hypot($e,Oe)>3&&(I.moved=!0),ee($e,Oe,Ue),I.x=U.clientX,I.y=U.clientY,I.t=ae});let Z=()=>{I&&(I.moved||(z.stir=Math.min(1.5,z.stir+f().stir)),I=null,l.style.cursor="grab")};l.addEventListener("pointerup",Z),l.addEventListener("pointercancel",Z),l.addEventListener("pointerleave",()=>{x.tx=x.ty=0});let W=!1;l.addEventListener("pointerdown",()=>{W=!1},!0),l.addEventListener("pointermove",()=>{I?.moved&&(W=!0)}),l.addEventListener("click",U=>{W&&(U.preventDefault(),U.stopPropagation())})}let fe=new IntersectionObserver(([Z])=>{z.visible=Z.isIntersecting,z.visible&&!p.raf&&(p.raf=requestAnimationFrame(ro))});return fe.observe(l),p.list.add(z),p.raf||(p.raf=requestAnimationFrame(ro)),{canvas:l,setKind(Z){z.kind=Z,z.stir=1},setConfig(Z){z.cfg=Z?Na(ga(Z.variant||z.kind),Z):null,z.cfg&&(z.kind=z.cfg.variant)},setSpeech(Z){z.speech=Math.max(0,Math.min(1,Z||0))},rotate(Z,W){ee(Z,W)},resetView(){b.v=.4,w.v=f().tilt,b.vel=r?0:f().spin,w.vel=0},stir(){z.stir=Math.min(1.5,z.stir+f().stir)},dispose(){fe.disconnect(),p.list.delete(z),l.remove()}}}var wi=`
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
`;var qe=(e,a=0,n=1)=>Math.min(n,Math.max(a,e)),es=(e,a,n)=>e+(a-e)*n,lo=.25,Ti=3,ts=40,as=e=>Math.max(1,.9*(Number.isFinite(e)?e:1)),rs=(e,a,n)=>Math.hypot(Math.max(n.l-e,0,e-n.r),Math.max(n.t-a,0,a-n.b));function os(e,a,n,r){let d=(e.l+e.r)/2,p=(e.t+e.b)/2,l=Math.min(e.r-e.l,e.b-e.t)/2-n;for(let h of a)l=Math.min(l,rs(d,p,h)-n);return Math.max(0,2*l/r)}function ki(e,a,n){let r=Math.max(lo,Math.min(Ti,n/Math.max(1,e))),d=qe(Number.isFinite(a)?a:1,lo,r);return{zoom:d,size:Math.max(Math.min(ts,n),Math.min(e*d,n))}}var Si="lo:studio2",Ci=2,Ei=Math.PI/180,is="https://thelightorb.com/embed/v1/orb.js",Ze=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),Mi=e=>vt.find(a=>a.id===e)??vt[0];function La(e="orb",a="clear"){let n=Mi(a).id;return{v:Ci,version:1,family:ua(e)?e:"orb",preset:n,sph:ga(n),zoom:1,orb:At(Zt("original").config),scene:{exposure:0,left:.65,right:.55,env:.5},view:{yaw:0,pitch:0,zoom:1},rot:0,slider:{length:420,height:92,tint:"#ffffff",tintAmount:0,preset:"original"},wave:{strength:.9,scale:80,exposure:1},bg:{exposure:1,horizon:.27,lamp:.8},ctl:{tint:"#ffffff",tintAmount:.1,depth:5,radius:999,blur:8}}}function oo(e){let a=La(e?.family,e?.sph?.variant||(vt.some(r=>r.id===e?.preset)?e.preset:"clear"));if(!e||typeof e!="object")return a;let n={...a};for(let r of["orb","scene","view","slider","wave","bg","ctl"])e[r]&&typeof e[r]=="object"&&(n[r]={...a[r],...structuredClone(e[r])});return e.orb?.light&&(n.orb=structuredClone(e.orb)),e.sph&&(n.sph=Na(ga(e.sph.variant||a.preset),e.sph)),typeof e.rot=="number"&&(n.rot=e.rot),typeof e.zoom=="number"&&(n.zoom=qe(Number.isFinite(e.zoom)?e.zoom:1,lo,Ti)),n.preset=n.sph.variant,n}var ns=["bloom","core","points","glitter","beads","liquid"],ss=[["material","Material",()=>[["sph.base","Material","select",to.map(([e,a])=>[e,a]),"What the sphere is made of"],["sph.material.tint","Tint","color","Main colour of the glass, metal or cloud"],["sph.material.accent","Accent","color","Second colour: porcelain edges, cloud highlights, bead sheen, liquid surface"],["sph.material.refraction","Refraction",0,2.5,.01,"\xD7","How strongly the glass bends the room (index of refraction)"],["sph.material.dispersion","Dispersion",0,1,.01,"%","Colour fringes: the rainbow split of light through glass"],["sph.material.frost","Frost",0,1,.01,"%","Roughness: from polished to frosted, diffuse reflections"],["sph.material.rim","Fresnel rim",0,3,.01,"\xD7","Brightness of reflections at the edge"],["sph.material.iridescence","Iridescence",0,1,.01,"%","Thin-film rainbow sheen at the rim"],["sph.material.opacity","Opacity",0,1,.01,"%","How much of the background shows through"],["sph.material.exposure","Exposure",.2,2.5,.01,"\xD7","Overall brightness of the sphere"]]],["interior","Interior",e=>ns.includes(e.sph.base)?[["sph.interior.amount",e.sph.base==="liquid"?"Density":"Amount",-1,1,.01,"%","How much is inside: more points, flakes, beads or cloud"],["sph.interior.size","Size",.3,2.5,.01,"\xD7","Scale of what is inside"],["sph.interior.speed","Motion",0,4,.01,"\xD7","Speed of the inner movement (also the metal and porcelain flow)"],["sph.interior.glow","Glow",0,3,.01,"\xD7","Brightness of what is inside"],...e.sph.base==="liquid"?[["sph.interior.fill","Fill level",0,1,.01,"%","How full the sphere is"]]:[]]:[["sph.interior.speed","Flow speed",0,4,.01,"\xD7","Speed of the surface flow and inner movement"]]],["light","Lighting",()=>[["sph.light.angle","Key angle",-180,180,1,"\xB0","Direction of the main soft box around the sphere"],["sph.light.height","Key height",-30,90,1,"\xB0","Height of the main soft box"],["sph.light.key","Key light",0,3,.01,"\xD7","Strength of the main soft box"],["sph.light.rim","Rim light",0,3,.01,"\xD7","Strength of the second (rim) soft box"],["sph.light.environment","Environment",0,2,.01,"\xD7","Brightness of the studio room reflected in the sphere"],["sph.light.horizon","Horizon",0,3,.01,"\xD7","The bright horizon line in reflections"],["sph.light.colour","Light colour","color","Colour of all the light"]]],["motion","Motion",()=>[["sph.motion.spin","Idle spin",-1.5,1.5,.01,"r/s","Turntable speed when nobody touches it (negative turns the other way)"],["sph.motion.tilt","Axis tilt",-1.2,1.2,.01,"rad","Rest tilt of the spin axis towards the viewer"],["sph.motion.roll","Axis roll",-1.6,1.6,.01,"rad","Sideways tilt of the spin axis"],["sph.motion.bob","Float",0,.4,.005,"r","Up-and-down float amplitude"],["sph.motion.bobSpeed","Float speed",0,3,.01,"Hz","Float cycles per second"],["sph.motion.breathe","Breathing",0,.12,.001,"%","Slow pulse of the size"],["sph.motion.pointer","Pointer follow",0,3,.01,"\xD7","How much it leans towards the pointer"],["sph.motion.stir","Tap stir",0,3,.01,"\xD7","How much a tap stirs what is inside"],["sph.motion.inertia","Drag inertia",0,2,.01,"\xD7","How long it keeps turning after a drag"],["sph.motion.speech","Speech pulse",0,3,.01,"\xD7","How much it pulses with a voice (test below)"]]],["scene","Scene",()=>[["sph.scene.background","Background","seg",[["none","None"],["solid","Solid"],["gradient","Gradient"]],"Transparent, a solid colour or a soft radial gradient"],["sph.scene.colour","Colour","color","Background colour (outer colour of the gradient)"],["sph.scene.colour2","Centre colour","color","Inner colour of the gradient"],["sph.scene.size","Sphere size",.3,1.2,.01,"%","Size of the sphere in its frame (leave room for the shadow)"],["sph.scene.shadow","Floor shadow",0,1,.01,"%","Soft contact shadow under the sphere"],["sph.scene.reflection","Reflection",0,1,.01,"%","Mirror reflection on the floor"]]]],$i={scene:["Studio light",[["scene.exposure","Exposure",-2,2,.1,"EV"],["scene.left","Left light",0,1,.01,"%"],["scene.right","Right light",0,1,.01,"%"],["scene.env","Environment",0,1,.01,"%"]]],light:["Orb light",[["orb.light.colour","Colour","color"],["orb.light.strength","Strength",0,1,.01,"%"],["orb.light.x","Position X",-.6,.6,.01,"r"],["orb.light.y","Position Y",-.8,.6,.01,"r"]]],slider:["Capsule",[["slider.length","Length",240,600,1,"px"],["slider.height","Height",60,130,1,"px"],["slider.tint","Glass tint","color"],["slider.tintAmount","Tint amount",0,1,.01,"%"],["slider.preset","Orb thumb","select",pa.map(e=>[e.id,e.name])]]],wave:["Wave",[["wave.strength","Strength",.1,1,.01,"%"],["wave.scale","Ring scale",40,140,1,"px"],["wave.exposure","Environment",0,1,.01,"%"]]],bg:["Environment",[["bg.exposure","Dark \u2192 warm",0,1,.01,"%"],["bg.horizon","Horizon",.15,.45,.01,"%"],["bg.lamp","Orb lamp (dark)",0,1,.01,"%"]]],ctl:["Crystal controls",[["ctl.tint","Tint","color"],["ctl.tintAmount","Tint amount",0,1,.01,"%"],["ctl.depth","Optical depth",0,10,.5,"px"],["ctl.radius","Corner radius",6,999,1,"px"],["ctl.blur","Backdrop blur",0,24,1,"px"]]]},ls={"orb-slider":["slider","light","scene"],"orb-wave":["wave"],"background-pack":["bg"],"crystal-controls":["ctl"]},Li=e=>e.family==="orb"?ss.map(([a,n,r])=>[a,n,r(e)]):ls[e.family].map(a=>[a,$i[a][0],$i[a][1]]),ds=e=>typeof e[2]=="number",io=e=>e[5]==="%"?100:1,cs={undo:'<path d="M9 7H4V2"/><path d="M4 7a9 9 0 1 1-1 7"/>',redo:'<path d="M15 7h5V2"/><path d="M20 7a9 9 0 1 0 1 7"/>',orbit:'<circle cx="12" cy="12" r="8"/><ellipse cx="12" cy="12" rx="8" ry="3"/>',light:'<circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',zoom:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M8.5 11h5M11 8.5v5"/>',reset:'<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>',stir:'<path d="M4 15c3-6 6 6 9 0s6-6 7 0"/>',bg:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/>',fit:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',more:'<circle cx="6" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18" cy="12" r="1"/>',plus:'<path d="M12 6v12M6 12h12"/>',minus:'<path d="M6 12h12"/>',chev:'<path d="M2 3.5l2.5 2.5L7 3.5"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',open:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v6H4V6h6"/>',dup:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',del:'<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"/>',sound:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'},it=(e,a="0 0 24 24")=>`<svg viewBox="${a}" aria-hidden="true">${cs[e]}</svg>`,ps=typeof navigator<"u"&&/Mac|iP/.test(navigator.platform||navigator.userAgent),ha=ps?"\u2318":"Ctrl+",no=!1;function us(){if(no||document.getElementById("sx-css")){no=!0;return}let e=document.createElement("style");e.id="sx-css",e.textContent=wi,document.head.append(e),no=!0}function Ai({api:e,audio:a,top:n,page:r,query:d,ICON:p,flash:l,product:h,store:f}){us();let b=new Proxy({},{get:(o,c)=>(...m)=>h.orb?.[c]?.(...m)});function w(){return s.family==="orb"&&s.preset==="clear"&&s.sph?.base==="clear"}let x=new Set(["sph.base","sph.material.tint","sph.material.refraction","sph.material.frost","sph.material.exposure","sph.interior.amount","sph.interior.size","sph.interior.speed","sph.interior.glow","sph.light.key","sph.light.environment","sph.light.colour","sph.motion.spin","sph.motion.stir","sph.motion.speech"]),ie=()=>si(s.sph),Ee=()=>({dark:!0,envBoost:s.sph.light.environment,exposure:Math.log2(Math.max(.05,s.sph.material.exposure))*2,left:.65,right:.55}),s;try{let o=JSON.parse(sessionStorage.getItem(Si));s=o&&o.v===Ci?oo(o):null}catch{s=null}if(s||(s=La()),d.design&&f.design(d.design)){let o=f.design(d.design);s=oo({...structuredClone(o.draft),family:o.family}),s.designId=o.id,s.designName=o.name}else d.family&&ua(d.family)&&(d.family!==s.family||d.preset&&d.preset!==s.preset)&&(s=La(d.family,vt.some(o=>o.id===d.preset)?d.preset:"clear"));let I=s.designId?JSON.stringify(oa(s)):null,O=[JSON.stringify(s)],z=0,ee=[["voice_audition.samantha","Voice \xB7 Samantha"],["voice_audition.daniel","Voice \xB7 Daniel"],["home.samantha","Welcome narration"],...Ja.map(o=>[`sfx.${o.id}`,`Sound \xB7 ${o.name}`])],fe=d.sound&&ee.some(o=>o[0]===d.sound)?d.sound:ee[0][0];function Z(){let[o,c]=fe.split(".");o==="sfx"?a.playUrl(fe,Ja.find(m=>m.id===c).file,{from:0}):a.play(o,{voice:c,kind:"audition",from:0}),a.sfx("select")}let W=d.sound?setTimeout(()=>{W=null,Z()},900):null,U=()=>{clearTimeout(W),W=null},Pe=a.store.on((o,c)=>{(c.voice&&!a.voiceOn||c.sounds&&!a.soundsOn)&&U()}),ae="orbit",$e="props",Oe="material",Ue=!1,lt={material:!0,interior:!0,light:!0,motion:!1,scene:!1,slider:!0,wave:!0,bg:!0,ctl:!0,scene_:!0},je=()=>{try{sessionStorage.setItem(Si,JSON.stringify(s))}catch{}};function Me(){let o=JSON.stringify(s);o!==O[z]&&(O.splice(z+1),O.push(o),z=O.length-1,O.length>120&&(O.shift(),z--)),je(),wt()}document.body.classList.add("dark-ui","sx-on"),r.innerHTML=`
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
          <button class="sx-ib" type="button" data-zo="-1" aria-label="Zoom out" data-tip="Zoom out">${it("minus")}</button>
          <button class="sx-ib" type="button" data-zo="0" aria-label="Fit" data-tip="Fit (R)">${it("fit")}</button>
          <button class="sx-ib" type="button" data-zo="1" aria-label="Zoom in" data-tip="Zoom in">${it("plus")}</button>
        </div>
      </div>
      <button class="sx-grab" type="button" data-grab aria-label="Show or hide the controls" aria-expanded="false"><i></i></button>
      <aside class="sx-ins" aria-label="Inspector" data-ins></aside>
    </section>
    <div class="sx-modal" data-modal hidden></div>`;let De=r.querySelector(".sx"),ke=r.querySelector("[data-top]"),Te=r.querySelector("[data-rail]"),Q=r.querySelector("[data-view]"),C=r.querySelector("[data-stage]"),$=r.querySelector("[data-ins]"),F=r.querySelector("[data-modal]"),K=r.querySelector("[data-hud]"),A=r.querySelector("[data-grab]"),B=o=>{De.classList.toggle("peek",!o),A.setAttribute("aria-expanded",o)};matchMedia("(max-width: 820px)").matches&&B(!1);{let o=null;A.addEventListener("pointerdown",c=>{o=c.clientY,A.setPointerCapture(c.pointerId)}),A.addEventListener("pointerup",c=>{if(o==null)return;let m=c.clientY-o;o=null,B(Math.abs(m)<12?De.classList.contains("peek"):m<0)}),$.addEventListener("click",c=>{c.target.closest("[data-tab],[data-chip]")&&B(!0)},!0)}let te=or(C,s.preset,{config:s.sph}),pe=0,ne=0,_=new Proxy(te,{get(o,c){if(w()){if(c==="rotate")return T=>{pe+=T*.01,b.setObjectYaw(pe)};if(c==="stir")return()=>b.nudge(qe(.8*(s.sph.motion.stir??1),0,1.5));if(c==="setSpeech")return T=>b.setSpeech(qe(T*(s.sph.motion.speech??1)));if(c==="resetView")return()=>{pe=0,b.setObjectYaw(0)};if(c==="canvas")return null}let m=o[c];return typeof m=="function"?m.bind(o):m}});_.canvas?.addEventListener("pointerdown",()=>{ae!=="orbit"||ge||(he=!0)});let oe=()=>s.designName||(s.family==="orb"?`${Mi(s.preset).name} Orb`:ua(s.family).name);function Ne(){ke.innerHTML=`
      <h1 class="vh">Studio</h1>
      <div class="sx-doc">
        <span class="sx-dirty" data-dirty title="Unsaved changes"></span>
        <input class="sx-name" data-name value="${Ze(oe())}" aria-label="Design name" maxlength="48" spellcheck="false" data-tip="Rename">
        <select class="sx-sel" data-fam aria-label="Object">${Mt.map(c=>`<option value="${c.id}"${c.id===s.family?" selected":""}>${Ze(c.name)}</option>`).join("")}</select>
        ${s.family==="orb"?`<select class="sx-sel" data-pre aria-label="Start from a version">${vt.map(c=>`<option value="${c.id}"${c.id===s.preset?" selected":""}>${Ze(c.name)}</option>`).join("")}</select>`:""}
      </div>
      <span class="sx-sp"></span>
      <button class="sx-ib sx-more" type="button" data-more aria-label="More: object, version, reset" aria-expanded="false">${it("more")}</button>
      <button class="sx-ib" type="button" data-undo aria-label="Undo" data-tip="Undo (${ha}Z)">${it("undo")}</button>
      <button class="sx-ib" type="button" data-redo aria-label="Redo" data-tip="Redo (${ha}\u21E7Z)">${it("redo")}</button>
      <button class="sx-ib" type="button" data-resetall aria-label="Reset to the version" data-tip="Reset to the version">${it("reset")}</button>
      <span class="sx-sep hide-m"></span>
      <button class="sx-tb" type="button" data-save data-tip="Save to My designs (${ha}S)">Save</button>
      <button class="sx-tb pri" type="button" data-export data-tip="Export code (${ha}E)">Export</button>`,ke.querySelector("[data-fam]").addEventListener("change",c=>{let m=s.preset;s=La(c.target.value,m),a.sfx("press"),J(),Me()}),ke.querySelector("[data-pre]")?.addEventListener("change",c=>dt(c.target.value));let o=ke.querySelector("[data-name]");o.addEventListener("change",()=>{s.designName=o.value.trim().slice(0,48)||void 0,s.designId&&f.renameDesign(s.designId,oe()),o.value=oe(),je(),Ge()}),o.addEventListener("keydown",c=>{c.key==="Enter"&&o.blur()}),ke.querySelector("[data-more]").addEventListener("click",c=>{let m=De.classList.toggle("more-open");c.currentTarget.setAttribute("aria-expanded",m),a.sfx("press")}),ke.querySelector("[data-undo]").addEventListener("click",()=>ce(-1)),ke.querySelector("[data-redo]").addEventListener("click",()=>ce(1)),ke.querySelector("[data-resetall]").addEventListener("click",()=>{let c={designId:s.designId,designName:s.designName,zoom:s.zoom};s={...La(s.family,s.preset),...c},a.sfx("press"),J(),Me(),l("Reset to the version\u2019s defaults.")}),ke.querySelector("[data-save]").addEventListener("click",()=>Ae()),ke.querySelector("[data-export]").addEventListener("click",()=>na()),wt()}function wt(){let o=ke.querySelector("[data-undo]"),c=ke.querySelector("[data-redo]");o&&(o.disabled=z<=0),c&&(c.disabled=z>=O.length-1),ke.querySelector("[data-dirty]")?.classList.toggle("on",JSON.stringify(oa(s))!==I)}function ce(o){let c=qe(z+o,0,O.length-1);c!==z&&(z=c,s=JSON.parse(O[c]),a.sfx("press"),je(),J(),wt())}function dt(o){let c={zoom:s.zoom};s={...La("orb",o),...c},a.sfx("press"),_.stir(),J(),Me()}function Qe(){let o=s.family==="orb",c=[["orbit","Orbit (V) \xB7 or hold space and drag"],["light",o?"Move the key light (L)":"Move the light (L)"],["zoom","Zoom: drag up/down (Z)"]].filter(([m])=>o||m==="orbit"||m==="light"&&s.family==="orb-slider");Te.innerHTML=c.map(([m,T])=>`<button class="sx-ib" type="button" data-tool="${m}" aria-pressed="${m===ae}" aria-label="${T}" data-tip="${T}">${it(m)}</button>`).join("")+(o?`<hr><button class="sx-ib" type="button" data-stir aria-label="Stir" data-tip="Stir what is inside">${it("stir")}</button>
        <button class="sx-ib" type="button" data-checker aria-pressed="${Ue}" aria-label="Transparency grid" data-tip="Transparency grid">${it("bg")}</button>
        <button class="sx-ib" type="button" data-snap aria-label="Download PNG" data-tip="Download a PNG">${it("camera")}</button>
        <button class="sx-ib" type="button" data-speak aria-label="Test with a voice" data-tip="Test the speech pulse">${it("sound")}</button>`:""),Te.querySelectorAll("[data-tool]").forEach(m=>m.addEventListener("click",()=>ze(m.dataset.tool))),Te.querySelector("[data-stir]")?.addEventListener("click",()=>{_.stir(),a.sfx("press")}),Te.querySelector("[data-checker]")?.addEventListener("click",()=>{Ue=!Ue,Q.classList.toggle("checker",Ue),Qe()}),Te.querySelector("[data-snap]")?.addEventListener("click",()=>sa()),Te.querySelector("[data-speak]")?.addEventListener("click",()=>Z())}function ze(o,c=!1){ae=o,Q.className=Q.className.replace(/\bt-\w+/g,"")+` t-${o}`,Q.classList.toggle("checker",Ue),C.style.pointerEvents=o==="orbit"&&!ge?"":"none",c||a.sfx("press"),Qe(),D()}let nt=(o,c)=>{let m=o*io(c),T=c[4]*io(c),q=T>=1?0:T>=.1?1:T>=.01?2:3;return(+m.toFixed(q)).toString()},kt=()=>s.family==="orb"?{sph:ga(s.preset)}:La(s.family);function ut(o,c){let[m,T]=o,q=xt(s,m),V=`sx-${m.replace(/\./g,"-")}`,ve=ds(o)?o[6]:o[3+(o[2]==="select"||o[2]==="seg"?1:0)],ft=xt(c,m)!==void 0&&JSON.stringify(xt(c,m))!==JSON.stringify(q)?" mod":"",st=Re=>`<label class="sx-lab${ft}" for="${V}"${Re?" data-scrub":""}${ve?` title="${Ze(ve)}${Re?" \u2014 drag to scrub":""}"`:""}>${Ze(T)}</label>`;if(w()&&m.startsWith("sph.")&&!x.has(m))return Fe().replace(/^<div class="sx-row/,'<div inert title="Not available on the real Orb yet" class="sx-row sx-off');return Fe();function Fe(){if(o[2]==="color")return`<div class="sx-row full">${st()}<span class="sx-col"><input type="color" id="${V}" data-path="${m}" value="${q}"><input class="sx-num" data-hex="${m}" value="${q}" aria-label="${Ze(T)} hex" spellcheck="false" maxlength="7"></span></div>`;if(o[2]==="select")return`<div class="sx-row full">${st()}<select class="sx-sel" id="${V}" data-path="${m}">${o[3].map(([Je,It])=>`<option value="${Je}"${Je===q?" selected":""}>${Ze(It)}</option>`).join("")}</select></div>`;if(o[2]==="seg")return`<div class="sx-row full">${st()}<span class="sx-seg" role="group" id="${V}">${o[3].map(([Je,It])=>`<button type="button" data-seg="${m}" data-v="${Je}" aria-pressed="${Je===q}">${It}</button>`).join("")}</span></div>`;let[,,Re,be,at,rt]=o,Be=(q-Re)/(be-Re)*100;return`<div class="sx-row">${st(!0)}<input class="sx-rng" type="range" id="${V}" data-path="${m}" min="${Re}" max="${be}" step="${at}" value="${q}" style="--p:${Be}%" aria-label="${Ze(T)}">
      <span class="sx-nw"><input class="sx-num" type="text" inputmode="decimal" data-num="${m}" value="${nt(q,o)}" aria-label="${Ze(T)}${rt?` (${rt})`:""}"><i>${rt}</i></span></div>`}}let Ke=()=>Li(s).flatMap(o=>o[2]),He=o=>Ke().find(c=>c[0]===o),Gt=()=>matchMedia("(max-width: 820px)").matches;function Ge(){let o=$.querySelector(".sx-body")?.scrollTop??0,c=Li(s),m=kt();c.some(q=>q[0]===Oe)||(Oe=c[0][0]);let T=[["props","Properties"],["designs","My designs"],["feedback","Feedback"]];$.innerHTML=`
      <div class="sx-tabs" role="tablist" aria-label="Inspector">${T.map(([q,V])=>`<button class="sx-tab" role="tab" type="button" data-tab="${q}" aria-selected="${q===$e}">${V}</button>`).join("")}</div>
      ${$e==="props"?`<div class="sx-chips" role="group" aria-label="Section">${c.map(([q,V])=>`<button type="button" data-chip="${q}" aria-pressed="${q===Oe}">${V}</button>`).join("")}</div>`:""}
      <div class="sx-body" data-body>${$e==="props"?c.map(([q,V,ve])=>{let ft=lt[q]??!0,st=ve.filter(Fe=>xt(m,Fe[0])!==void 0&&JSON.stringify(xt(m,Fe[0]))!==JSON.stringify(xt(s,Fe[0]))).length;return`<section class="sx-sec${q===Oe?"":" m-off"}" data-sec="${q}"><button class="sx-sh" type="button" data-tog="${q}" aria-expanded="${ft}">${it("chev","0 0 9 9")}${V}<span class="n">${st?`${st} changed`:""}</span></button>
          <div class="sx-rows" ${ft?"":"hidden"}>${ve.map(Fe=>ut(Fe,m)).join("")}
          ${q==="motion"?`<div class="sx-row full"><span class="sx-lab">Test sound</span><select class="sx-sel" data-snd aria-label="Sound to test">${ee.map(([Fe,Re])=>`<option value="${Fe}"${Fe===fe?" selected":""}>${Ze(Re)}</option>`).join("")}</select></div>
            <div class="sx-acts"><button class="sx-tb" type="button" data-testsnd>Play to test the pulse</button><button class="sx-tb" type="button" data-stir2>Stir</button></div>`:""}
          ${q==="wave"?'<div class="sx-acts"><button class="sx-tb" type="button" data-trigger>Trigger a wave</button></div>':""}
          </div></section>`}).join("")+'<p class="sx-hint sx-pad">Drag a label to scrub (<span class="sx-kbd">\u21E7</span> \xD710, <span class="sx-kbd">\u2325</span> fine). Gold dots mark values changed from the version.</p>':$e==="designs"?fa():ct()}</div>`,$.querySelector("[data-body]").scrollTop=o,Ga()}function fa(){let o=f.designs();return`<div class="sx-pad">
      <h3 class="sx-h">My designs</h3>
      ${o.length?`<div class="sx-ds">${o.map(c=>`<article class="sx-d${c.id===s.designId?" cur":""}" data-did="${Ze(c.id)}">
        ${c.thumb?`<img src="${c.thumb}" alt="">`:'<span class="ph"></span>'}
        <div><input value="${Ze(c.name)}" aria-label="Design name" maxlength="48" data-dn><small>${Ze(c.familyName||"")} \xB7 ${new Date(c.at).toLocaleDateString()}</small></div>
        <div class="ab"><button class="sx-ib" type="button" data-dopen aria-label="Open" data-tip="Open">${it("open")}</button><button class="sx-ib" type="button" data-ddup aria-label="Duplicate" data-tip="Duplicate">${it("dup")}</button><button class="sx-ib" type="button" data-ddel aria-label="Delete" data-tip="Delete">${it("del")}</button></div>
      </article>`).join("")}</div>`:'<p class="sx-empty">Nothing saved yet. Save keeps the design on this device; it also appears in Account \u2192 My Designs.</p>'}
      <div class="sx-acts" style="margin-bottom:16px"><button class="sx-tb pri" type="button" data-savenew>Save as new design</button>${s.designId?'<button class="sx-tb" type="button" data-new>New from version</button>':""}</div>
      ${s.family==="orb"?`<h3 class="sx-h">Start from a version</h3><div class="sx-vers">${vt.map(c=>`<button class="sx-ver" type="button" data-ver="${c.id}" aria-pressed="${c.id===s.preset&&!s.designId}" title="${Ze(c.line)}">${Ze(c.name)}</button>`).join("")}</div>`:""}
    </div>`}function ct(){return`<div class="sx-ea">
      ${'<p class="access">Studio is in early access \u2014 free while we build it. Designs stay on this device.</p>'}
      ${gi("studio")}${Ea("studio",{compact:!0,label:"Get notified about Studio updates (optional)"})}
      <h3 class="sx-h" style="margin-top:18px">Shortcuts</h3>
      <p class="sx-hint"><span class="sx-kbd">${ha}Z</span> undo \xB7 <span class="sx-kbd">${ha}\u21E7Z</span> redo \xB7 <span class="sx-kbd">${ha}S</span> save \xB7 <span class="sx-kbd">${ha}E</span> export \xB7 <span class="sx-kbd">V</span> orbit \xB7 <span class="sx-kbd">L</span> light \xB7 <span class="sx-kbd">Z</span> zoom \xB7 <span class="sx-kbd">R</span> reset view \xB7 <span class="sx-kbd">space</span>+drag orbit</p>
    </div>`}function Ga(){$.querySelectorAll("[data-tab]").forEach(o=>o.addEventListener("click",()=>{$e=o.dataset.tab,a.sfx("press"),Ge()})),$.querySelectorAll("[data-chip]").forEach(o=>o.addEventListener("click",()=>{Oe=o.dataset.chip,a.sfx("press"),Ge()})),$.querySelectorAll("[data-tog]").forEach(o=>o.addEventListener("click",()=>{Gt()||(lt[o.dataset.tog]=!(lt[o.dataset.tog]??!0),a.sfx("press"),Ge())})),$e==="feedback"&&(hi($,{sfx:o=>a.sfx(o)}),vr($)),$e==="designs"&&gt(),$.querySelectorAll("input[type=range][data-path]").forEach(o=>{o.addEventListener("input",()=>{k(o.dataset.path,+o.value),ht(o.dataset.path)}),o.addEventListener("change",()=>{Me(),Xe(),a.sfx("release")})}),$.querySelectorAll("input[type=color][data-path]").forEach(o=>{o.addEventListener("input",()=>{k(o.dataset.path,o.value);let c=$.querySelector(`[data-hex="${o.dataset.path}"]`);c&&(c.value=o.value)}),o.addEventListener("change",()=>{Me(),Xe()})}),$.querySelectorAll("[data-hex]").forEach(o=>{o.addEventListener("input",()=>{/^#[0-9a-f]{6}$/i.test(o.value)&&(k(o.dataset.hex,o.value.toLowerCase()),$.querySelector(`input[type=color][data-path="${o.dataset.hex}"]`).value=o.value)}),o.addEventListener("change",()=>{/^#[0-9a-f]{6}$/i.test(o.value)||(o.value=xt(s,o.dataset.hex)),Me(),Xe()})}),$.querySelectorAll("select[data-path]").forEach(o=>o.addEventListener("change",()=>{if(o.dataset.path==="sph.base"){let[c,m]=ao[o.value];s.sph.material.tint=ar(c),s.sph.material.accent=ar(m)}k(o.dataset.path,o.value),a.sfx("press"),_.stir(),Ge(),Me()})),$.querySelectorAll("[data-seg]").forEach(o=>o.addEventListener("click",()=>{k(o.dataset.seg,o.dataset.v),a.sfx("press"),Ge(),Me()})),$.querySelectorAll("[data-num]").forEach(o=>{let c=He(o.dataset.num);if(!c)return;let[,,m,T]=c,q=io(c);o.addEventListener("input",()=>{let V=parseFloat(o.value);Number.isFinite(V)&&(k(o.dataset.num,qe(V/q,m,T)),Yt(o.dataset.num))}),o.addEventListener("change",()=>{ht(o.dataset.num),Me(),Xe()}),o.addEventListener("keydown",V=>{if(V.key==="Enter"&&o.blur(),V.key==="ArrowUp"||V.key==="ArrowDown"){V.preventDefault();let ve=c[4]*(V.shiftKey?10:V.altKey?.1:1);k(o.dataset.num,qe(xt(s,o.dataset.num)+(V.key==="ArrowUp"?ve:-ve),m,T)),ht(o.dataset.num),Me()}}),o.addEventListener("focus",()=>o.select())}),$.querySelectorAll("[data-scrub]").forEach(o=>{let c=o.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),m=He(c);if(!m)return;let[,,T,q,V]=m;o.addEventListener("pointerdown",ve=>{if(ve.button)return;ve.preventDefault(),o.setPointerCapture(ve.pointerId);let ft=ve.clientX,st=xt(s,c),Fe=(q-T)/240,Re=at=>{let rt=at.shiftKey?10:at.altKey?.1:1,Be=qe(st+(at.clientX-ft)*Fe*rt,T,q);Be=Math.round(Be/V)*V,k(c,+Be.toFixed(5)),ht(c)},be=()=>{o.removeEventListener("pointermove",Re),o.removeEventListener("pointerup",be),o.removeEventListener("pointercancel",be),Me(),Xe()};o.addEventListener("pointermove",Re),o.addEventListener("pointerup",be),o.addEventListener("pointercancel",be)})}),$.querySelector("[data-snd]")?.addEventListener("change",o=>{fe=o.target.value}),$.querySelector("[data-testsnd]")?.addEventListener("click",()=>Z()),$.querySelector("[data-stir2]")?.addEventListener("click",()=>_.stir()),$.querySelector("[data-trigger]")?.addEventListener("click",()=>sr())}function gt(){$.querySelectorAll("[data-did]").forEach(o=>{let c=o.dataset.did,m=()=>f.design(c);o.querySelector("[data-dn]").addEventListener("change",T=>{let q=T.target.value.trim()||"Untitled design";f.renameDesign(c,q),s.designId===c&&(s.designName=q,je(),Ne()),a.sfx("confirm")}),o.querySelector("[data-dopen]").addEventListener("click",()=>St(m())),o.querySelector("[data-ddup]").addEventListener("click",()=>{let T=m();if(!T)return;let q={...structuredClone(T),id:Date.now().toString(36),name:`${T.name} copy`.slice(0,48),at:new Date().toISOString()};f.saveDesign(q)&&(a.sfx("confirm"),Ge())}),o.querySelector("[data-ddel]").addEventListener("click",()=>{let T=m();T&&confirm(`Delete \u201C${T.name}\u201D? This cannot be undone.`)&&(f.deleteDesign(c),s.designId===c&&(delete s.designId,I=null,je(),wt()),a.sfx("close"),Ge())})}),$.querySelector("[data-savenew]")?.addEventListener("click",()=>Ae(!0)),$.querySelector("[data-new]")?.addEventListener("click",()=>dt(s.preset)),$.querySelectorAll("[data-ver]").forEach(o=>o.addEventListener("click",()=>dt(o.dataset.ver)))}function St(o){o&&(s=oo({...structuredClone(o.draft),family:o.family}),s.designId=o.id,s.designName=o.name,I=JSON.stringify(oa(s)),a.sfx("press"),J(),Me(),l(`Opened \u201C${o.name}\u201D.`))}function Yt(o){let c=$.querySelector(`input[type=range][data-path="${o}"]`);c&&(c.value=xt(s,o),c.style.setProperty("--p",`${(c.value-c.min)/(c.max-c.min)*100}%`))}function ht(o){let c=$.querySelector(`[data-num="${o}"]`),m=He(o);c&&m&&document.activeElement!==c&&(c.value=nt(xt(s,o),m)),Yt(o)}function Xe(){let o=kt();$.querySelectorAll(".sx-lab[for]").forEach(c=>{let m=c.getAttribute("for").replace(/^sx-/,"").replace(/-/g,"."),T=xt(o,m);T!==void 0&&c.classList.toggle("mod",JSON.stringify(T)!==JSON.stringify(xt(s,m)))}),$.querySelectorAll("[data-sec]").forEach(c=>{let m=c.querySelectorAll(".sx-lab.mod").length,T=c.querySelector(".n");T&&(T.textContent=m?`${m} changed`:"")}),wt()}function k(o,c){let m=o.split("."),T=s;for(let q of m.slice(0,-1))T=T[q];T[m.at(-1)]=c,M()}function M(){let o=s.family;if(o==="orb"){let c=w();for(let m of C.children)m.style.visibility=c?"hidden":"";c?h.show(ie(),Ee()):(te.setConfig({...s.sph,variant:s.preset}),h.hide())}else{let c=e.chamber,m=s.scene;Object.assign(c,{left:m.left,right:m.right,exposure:m.exposure,yaw:s.view.yaw*Ei,pitch:s.view.pitch*Ei,platform:!1});let T={dark:!0,envBoost:es(.55,1.6,m.env),exposure:m.exposure,left:m.left,right:m.right};if(o==="orb-slider"){let q=At(Zt(s.slider.preset).config);Object.assign(q.light,{strength:s.orb.light.strength,colour:s.orb.light.colour,x:s.orb.light.x,y:s.orb.light.y}),h.show(q,T)}else o==="orb-wave"||o==="background-pack"?h.show(At(Zt("original").config),T):h.hide();b.setView({yaw:0,pitch:0}),Ie.set({strength:s.wave.strength,scale:s.wave.scale,horizon:o==="background-pack"?s.bg.horizon:.3,lamp:s.bg.lamp}),o==="orb-wave"&&Ie.setExposure(s.wave.exposure),o==="background-pack"&&Ie.setExposure(s.bg.exposure),de(),ue()}D(),je()}function D(){let o=Math.round(s.zoom*100);K.innerHTML=s.family==="orb"?`<b>${o}%</b><b>${{orbit:"Orbit",light:"Key light",zoom:"Zoom"}[ae]}</b>${ae==="light"?`<b>${Math.round(s.sph.light.angle)}\xB0 \xB7 ${Math.round(s.sph.light.height)}\xB0</b>`:""}`:""}function J(){let o=s.family,c=r.querySelector("[data-screen]"),m=r.querySelector("[data-scap]"),T=r.querySelector("[data-kit]");C.hidden=o!=="orb",r.querySelector("[data-zoombar]").hidden=o!=="orb",c.hidden=!(o==="orb-wave"||o==="background-pack"),m.hidden=o!=="orb-slider",T.hidden=o!=="crystal-controls",er(),e.removeBackdrop(Ie.canvas),c.hidden||(br(c),e.addBackdrop(Ie.canvas),Ie.setExposure(o==="background-pack"?s.bg.exposure:s.wave.exposure,!0)),o==="orb-slider"&&(m.innerHTML='<span class="cap-label">slide to enter</span>',m.setAttribute("role","slider"),m.tabIndex=0,m.setAttribute("aria-label","Slide to enter")),o==="crystal-controls"&&(T.innerHTML=`<div class="kit-swatch"><button class="gb primary" type="button">Start project</button><button class="gb" type="button">Secondary</button><input class="gi" placeholder="Enter text" aria-label="Example field"><select class="gsel" aria-label="Example select"><option>Select</option><option>Clear</option></select><button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><button class="gb gc" type="button" aria-label="Confirm">${p.check}</button></div>`),T.querySelector(".gsw")?.addEventListener("click",q=>{q.currentTarget.setAttribute("aria-checked",String(q.currentTarget.getAttribute("aria-checked")!=="true")),a.sfx("press")}),o!=="orb"&&ae==="zoom"&&(ae="orbit"),Ne(),Qe(),Ge(),M(),ze(ae,!0)}let Y=0;function de(){let o=r.querySelector("[data-scap]");if(!o||o.hidden)return;let c=s.slider,m=c.tint,T=c.tintAmount;o.style.background=`linear-gradient(180deg, ${Ba(m,.1+T*.35)}, ${Ba(m,.03+T*.2)} 50%, ${Ba(m,.08+T*.3)})`}function ue(){let o=r.querySelector("[data-kit]");if(!o||o.hidden)return;let c=s.ctl,m=c.depth,T=o.querySelector("style");T||(T=document.createElement("style"),o.append(T)),T.textContent=`.st-kit .gb,.st-kit .gi,.st-kit .gsel{border-radius:${c.radius}px;-webkit-backdrop-filter:blur(${c.blur}px) saturate(1.5);backdrop-filter:blur(${c.blur}px) saturate(1.5)}
      .st-kit .gb:not(.primary){background:linear-gradient(180deg,${Ba(c.tint,.3+c.tintAmount*.4)},${Ba(c.tint,.08+c.tintAmount*.3)} 50%,${Ba(c.tint,.25+c.tintAmount*.35)});
        box-shadow:inset 0 ${m*.3}px ${m*.2}px rgba(255,255,255,.95),inset 0 -${m*.6}px ${m}px -1px rgba(255,255,255,.75),inset 0 0 0 1px rgba(150,158,166,.18),inset 0 -${m*2}px ${m*2.8}px -${m*2}px rgba(120,128,136,.35),0 1px 1px rgba(40,44,50,.1),0 ${m*2}px ${m*4}px -${m*2}px rgba(40,44,50,.38)}`}let se=null,ge=!1,he=!1;Q.addEventListener("pointerdown",o=>{if(o.target.closest("[data-zoombar],.st-cap,.st-kit,.st-screen"))return;let c=he;he=!1,!(s.family==="orb"&&ae==="orbit"&&c&&!ge)&&(se={x:o.clientX,y:o.clientY,lx:o.clientX,ly:o.clientY,v:{...s.view},z:s.zoom,l:{...s.sph.light},ol:{...s.orb.light}},Q.setPointerCapture(o.pointerId),Q.classList.add("grab"))}),Q.addEventListener("pointermove",o=>{if(!se)return;let c=o.clientX-se.x,m=o.clientY-se.y,T=ge?"orbit":ae;if(s.family==="orb")T==="orbit"&&_.rotate(o.clientX-se.lx,o.clientY-se.ly),T==="light"&&(s.sph.light.angle=(se.l.angle+c*.5+540)%360-180,s.sph.light.height=qe(se.l.height-m*.35,-30,90),M(),ht("sph.light.angle"),ht("sph.light.height")),T==="zoom"&&Ye(se.z*Math.exp(-m*.005));else{if(T==="orbit"&&(s.view.yaw=qe(se.v.yaw-c*.25,-60,60),s.view.pitch=qe(se.v.pitch+m*.2,-20,35)),T==="light"){let q=h.pose.d||300;s.orb.light.x=qe(se.ol.x+c/q*1.6,-.6,.6),s.orb.light.y=qe(se.ol.y-m/q*1.6,-.8,.6),ht("orb.light.x"),ht("orb.light.y")}M()}se.lx=o.clientX,se.ly=o.clientY});let Et=1,$t=1/0;function Ye(o){s.zoom=ki(Et,o,$t).zoom,D()}let Dt=()=>{se&&(se=null,Q.classList.remove("grab"),Me(),Xe())};Q.addEventListener("pointerup",Dt),Q.addEventListener("pointercancel",Dt),Q.addEventListener("wheel",o=>{s.family==="orb"&&(o.preventDefault(),Ye(s.zoom*Math.exp(-o.deltaY*.0015)),clearTimeout(Q._t),Q._t=setTimeout(je,300))},{passive:!1}),r.querySelectorAll("[data-zo]").forEach(o=>o.addEventListener("click",()=>{let c=+o.dataset.zo;Ye(c?s.zoom*(c>0?1.25:.8):1),c||_.resetView(),je(),a.sfx("press")})),Q.addEventListener("keydown",o=>{let c={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[o.key];if(c){if(o.preventDefault(),s.family==="orb"){ae==="light"?(s.sph.light.angle=qe(s.sph.light.angle+c[0]*5,-180,180),s.sph.light.height=qe(s.sph.light.height-c[1]*5,-30,90),M(),Ge(),Me()):ae==="zoom"?Ye(s.zoom*(c[1]<0?1.1:c[1]>0?.9:1)):_.rotate(c[0]*12,c[1]*12);return}ae==="orbit"&&(s.view.yaw=qe(s.view.yaw-c[0]*5,-60,60),s.view.pitch=qe(s.view.pitch+c[1]*3,-20,35)),ae==="light"&&(s.orb.light.x=qe(s.orb.light.x+c[0]*.05,-.6,.6),s.orb.light.y=qe(s.orb.light.y-c[1]*.05,-.8,.6)),M(),Ge(),Me()}});let aa=o=>o&&(o.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(o.tagName))&&!(o.type==="range"||o.type==="color");function G(o){if(!F.hidden){o.key==="Escape"&&Nt();return}let c=o.metaKey||o.ctrlKey,m=o.key.toLowerCase();if(c&&m==="s"){o.preventDefault(),Ae();return}if(c&&m==="e"){o.preventDefault(),na();return}if(!aa(o.target)){if(c&&m==="z"){o.preventDefault(),ce(o.shiftKey?1:-1);return}if(c&&m==="y"){o.preventDefault(),ce(1);return}if(!(c||o.altKey)){if(o.key===" "){ge||(ge=!0,Q.classList.add("t-orbit"),C.style.pointerEvents="none"),(o.target===document.body||Q.contains(o.target))&&o.preventDefault();return}m==="v"?ze("orbit"):m==="l"&&(s.family==="orb"||s.family==="orb-slider")?ze("light"):m==="z"&&s.family==="orb"?ze("zoom"):m==="r"&&(Ye(1),_.resetView(),s.family!=="orb"&&(s.view={yaw:0,pitch:0,zoom:1},M(),Me()),D(),je())}}}function et(o){o.key===" "&&(ge=!1,ze(ae))}document.addEventListener("keydown",G),document.addEventListener("keyup",et);let tt=r.querySelector("[data-scap]"),ra=null;tt.addEventListener("pointerdown",o=>{o.stopPropagation(),ra={x:o.clientX,v:Y},tt.setPointerCapture(o.pointerId),a.sfx("press")}),tt.addEventListener("pointermove",o=>{ra&&(Y=qe(ra.v+(o.clientX-ra.x)/(tt.offsetWidth-tt.offsetHeight)))});let Ya=()=>{ra&&(ra=null,a.sfx("release"),b.nudge(.5),Y>.92?(Y=1,a.sfx("confirm")):Y=0)};tt.addEventListener("pointerup",Ya),tt.addEventListener("pointercancel",Ya),tt.addEventListener("keydown",o=>{o.key==="ArrowRight"&&(Y=qe(Y+.1)),o.key==="ArrowLeft"&&(Y=qe(Y-.1))});function sr(){let o=r.querySelector("[data-screen]"),c=o.getBoundingClientRect();Ie.impact(c.width/2,c.height*(1-.3)+10,s.wave.strength),b.nudge(.8),a.sfx("detent")}r.querySelector("[data-screen]").addEventListener("pointerdown",o=>{if(s.family!=="orb-wave")return;let c=o.currentTarget.getBoundingClientRect();Ie.impact(o.clientX-c.left,o.clientY-c.top,s.wave.strength),a.sfx("detent")});function oa(o){let{designId:c,designName:m,zoom:T,...q}=o;return q}async function zt(){try{if(s.family==="orb"&&_.canvas){let m=_.canvas,T=Math.min(m.width,m.height),q=document.createElement("canvas");q.width=q.height=240;let V=q.getContext("2d");return V.fillStyle="#0b0c0c",V.fillRect(0,0,240,240),V.drawImage(m,(m.width-T)/2,(m.height-T)/2,T,T,0,0,240,240),q.toDataURL("image/jpeg",.8)}let o=Aa(),c=await e.exportPNG(o,h.element||document.createElement("div"));if(c){let m=await createImageBitmap(c),T=document.createElement("canvas"),q=360;return T.width=q,T.height=Math.round(q*o.h/o.w),T.getContext("2d").drawImage(m,0,0,T.width,T.height),T.toDataURL("image/jpeg",.78)}}catch{}return null}async function Ae(o=!1){let c=ua(s.family),m=!o&&s.designId||Date.now().toString(36),T=o&&s.designId?`${oe()} copy`.slice(0,48):oe(),q=await zt();f.saveDesign({id:m,name:T,family:s.family,familyName:c.name,preset:s.preset,schema:1,at:new Date().toISOString(),draft:oa(s),thumb:q})?(s.designId=m,s.designName=T,I=JSON.stringify(oa(s)),je(),a.sfx("confirm"),l("Saved to My designs (on this device)."),Ne(),$e==="designs"&&Ge()):l("Could not save: this browser\u2019s storage is full or unavailable.")}let Rt=()=>({...s.sph,variant:s.preset}),Wa=()=>fi(Rt(),ga(s.preset));function ia(o=is){let c=Wa(),m=360;return`<div data-light-orb data-variant="${s.preset}"${c==="e30"?"":` data-config="${c}"`} style="width:${m}px;height:${m}px"></div>
<script type="module" src="${o}"><\/script>`}function lr(){let o=s.sph.scene,c=o.background==="none"?"#0b0c0c":o.colour;return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${Ze(oe())} \xB7 The Light Orb</title>
<style>
  html,body{margin:0;height:100%;background:${c}}
  body{display:grid;place-items:center}
  [data-light-orb]{width:min(82vmin,560px)!important;height:min(82vmin,560px)!important}
</style>
</head>
<body>
${ia()}
</body>
</html>
`}function So(){return s.family==="orb"?JSON.stringify({product:"orb",schema:1,name:oe(),variant:s.preset,config:Rt(),changed:Er(ga(s.preset),Rt()),embed:{attribute:"data-config",value:Wa()}},null,2):JSON.stringify({schema:1,product:s.family,name:oe(),config:s[{"orb-slider":"slider","orb-wave":"wave","background-pack":"bg","crystal-controls":"ctl"}[s.family]],scene:s.scene,note:"Configuration for The Light Orb renderer. Development export; not a licensed product package."},null,2)}let Wt="embed",mt=()=>oe().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"light-orb";function na(){s.family!=="orb"&&(Wt="json"),ba(),F.hidden=!1,a.sfx("open"),F.querySelector("[data-xtab][aria-selected=true]")?.focus()}function Nt(){F.hidden=!0,a.sfx("close"),Q.focus({preventScroll:!0})}function ba(){let o=s.family==="orb",c=o?[["embed","Embed code"],["html","HTML page"],["json","JSON"]]:[["json","JSON"]],m={embed:[ia(),"Paste into any page. The data-config attribute holds your design (only what differs from the version), so it looks and moves exactly like this.",[["copy","Copy code","pri"],["dlsnip","Download snippet"]]],html:[lr(),"A complete page with your Orb, ready to open or upload.",[["dlhtml","Download .html","pri"],["copy","Copy"]]],json:[So(),o?"The full configuration. The embed accepts it as data-config too (plain JSON or base64).":"The configuration of this object.",[["dljson","Download .json","pri"],["copy","Copy"]]]}[Wt];F.innerHTML=`<div class="sx-dlg" role="dialog" aria-modal="true" aria-labelledby="sx-xt">
      <div class="sx-dh"><h2 id="sx-xt">Export \xB7 ${Ze(oe())}</h2><button class="sx-ib" type="button" data-xclose aria-label="Close">${it("close")}</button></div>
      <div class="sx-tabs" role="tablist">${c.map(([q,V])=>`<button class="sx-tab" role="tab" type="button" data-xtab="${q}" aria-selected="${q===Wt}">${V}</button>`).join("")}</div>
      <div class="sx-db"><p>${m[1]}</p><textarea class="sx-code" readonly spellcheck="false" aria-label="Code">${Ze(m[0])}</textarea>
        <div class="sx-acts">${m[2].map(([q,V,ve])=>`<button class="sx-tb${ve?" "+ve:""}" type="button" data-xa="${q}">${V}</button>`).join("")}${o?'<button class="sx-tb" type="button" data-xa="png">Download PNG</button>':""}</div></div></div>`,F.querySelector("[data-xclose]").addEventListener("click",Nt),F.onclick=q=>{q.target===F&&Nt()},F.querySelectorAll("[data-xtab]").forEach(q=>q.addEventListener("click",()=>{Wt=q.dataset.xtab,a.sfx("press"),ba(),F.querySelector(`[data-xtab="${Wt}"]`).focus()}));let T=m[0];F.querySelectorAll("[data-xa]").forEach(q=>q.addEventListener("click",async()=>{let V=q.dataset.xa;if(V==="copy"){let ve=!1;try{await navigator.clipboard.writeText(T),ve=!0}catch{F.querySelector("textarea").select(),ve=document.execCommand?.("copy")}q.textContent=ve?"Copied":"Select and copy",a.sfx("confirm"),setTimeout(()=>{q.textContent=V==="copy"&&Wt==="embed"?"Copy code":"Copy"},1600)}V==="dlsnip"&&la(new Blob([T],{type:"text/plain"}),`${mt()}-embed.txt`),V==="dlhtml"&&la(new Blob([T],{type:"text/html"}),`${mt()}.html`),V==="dljson"&&la(new Blob([T],{type:"application/json"}),`${mt()}.json`),V==="png"&&sa()}))}async function sa(){if(s.family==="orb"&&_.canvas){_.canvas.toBlob(o=>{o&&(la(o,`${mt()}.png`),l("Downloaded a PNG of the Orb."))});return}if(h.element){let o=await e.exportPNG(Aa(),h.element);o&&la(o,`${mt()}.png`)}}function la(o,c){let m=document.createElement("a");m.href=URL.createObjectURL(o),m.download=c,document.body.append(m),m.click(),setTimeout(()=>{URL.revokeObjectURL(m.href),m.remove()},1e3),a.sfx("confirm")}function Aa(){let o=Q.getBoundingClientRect();return{x:o.left,y:o.top,w:o.width,h:o.height}}function Vt(){let o=document.querySelector(".hd"),c=o?Math.round(o.getBoundingClientRect().bottom):72;De._hh!==c&&(De._hh=c,De.style.setProperty("--sx-top",`${Math.max(0,c)}px`));let m=Aa(),T=s.family,q=m.x+m.w/2,V=r.querySelector("[data-screen]"),ve=r.querySelector("[data-scap]"),ft=r.querySelector("[data-kit]"),st=innerHeight,Fe={warm:0,room:"chamber",stage:m,emission:1,orb:{x:50,y:st-52,d:46,vis:0}},Re=be=>({...Fe,product:be,grounds:be&&be.ground?[{y:be.ground,x:be.x,d:be.d}]:[]});if(T==="orb"){let be=Math.min(m.w-48,m.h-48)*.74,at=Ir=>{let xe=Ir?.getBoundingClientRect();return xe&&xe.width>0&&xe.height>0?{l:xe.left,t:xe.top,r:xe.right,b:xe.bottom}:null},rt=[Te,r.querySelector("[data-zoombar]"),K,A,$,ke].map(at).filter(Boolean),Be=os({l:m.x,t:m.y,r:m.x+m.w,b:m.y+m.h},rt,innerWidth<=820?16:24,as(s.sph.scene.size)),Je=ki(be,s.zoom,Be);m.w>80&&m.h>80&&(Et=be,$t=Be,Je.zoom!==s.zoom&&(s.zoom=Je.zoom,D()));let It=Math.floor(Je.size);if(C._s!==It&&(C._s=It,C.style.width=C.style.height=`${It}px`),_.setSpeech(a.playing?a.energy():0),!w())return Re(null);let Va=performance.now()/1e3,Rr=ne?Math.min(.05,Va-ne):0;ne=Va,se||(pe+=(s.sph.motion.spin??0)*Math.PI*2*Rr*.25,b.setObjectYaw(pe));let Ut=C.getBoundingClientRect();return Re({x:Ut.left+Ut.width/2,y:Ut.top+Ut.height/2,d:Ut.width*.9*(s.sph.scene.size??1),vis:1,snap:!0})}if(T==="orb-slider"){let be=s.slider,at=Math.min(1,(m.w-40)/be.length),rt=be.length*at,Be=be.height*at;Object.assign(ve.style,{left:`${q-rt/2}px`,top:`${m.y+m.h*.5-Be/2}px`,width:`${rt}px`,height:`${Be}px`});let Je=Be*.84,It=(Be-Je)/2;return Re({x:q-rt/2+It+Je/2+Y*(rt-Be),y:m.y+m.h*.5,d:Je,vis:1,snap:!0})}if(T==="orb-wave"||T==="background-pack"){let be=Math.min(m.w*.86,900),at=Math.min(m.h*.72,be*.62);Object.assign(V.style,{left:`${q-be/2}px`,top:`${m.y+m.h*.5-at/2}px`,width:`${be}px`,height:`${at}px`});let rt=T==="background-pack"?s.bg.horizon:.3,Be=Math.min(90,be*.12),Je=at*(1-rt)+Be*.1-Be/2;return Ie.setOrb({x:be/2,y:Je,d:Be}),Re({x:q,y:m.y+m.h*.5-at/2+Je,d:Be,vis:1})}return T==="crystal-controls"&&Object.assign(ft.style,{left:`${m.x+20}px`,top:`${m.y+20}px`,width:`${m.w-40}px`,height:`${m.h-40}px`}),Re(null)}return J(),{frame:Vt,reapply:()=>M(),voiceResponse:()=>s.family==="orb"?qe(s.sph.motion.speech*.6):.6,leave(){U(),Pe(),document.removeEventListener("keydown",G),document.removeEventListener("keyup",et),_.dispose(),er(),e.removeBackdrop(Ie.canvas),document.body.classList.remove("dark-ui","sx-on"),h.hide(),Object.assign(e.chamber,{yaw:0,pitch:0})},get draft(){return s}}}function Ba(e,a){let n=parseInt(e.slice(1),16);return`rgba(${n>>16&255},${n>>8&255},${n&255},${a.toFixed(3)})`}function qi(e){let a=null,n=null,r=null,d={},p={emission:1},l=document.createElement("div");l.className="x-product",l.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:31",document.body.append(l);let h={x:-999,y:-999,d:100,vis:0},f={x:-999,y:-999,d:100,vis:0,vx:0,vy:0,vd:0},b=!0,w=!1,x=I=>{I.persisted||ie()};addEventListener("pagehide",x);function ie(){w||(w=!0,b=!0,removeEventListener("pagehide",x),a?.dispose(),a=null,r=null,d={},l.remove())}function Ee(){return w||a||n||(n=Io({container:l,diameter:240,driven:!0,background:Pt().orbBackground}).then(I=>{if(w){I.dispose(),n=null;return}return a=I,n=null,I.attachPointer(document.createElement("div"))(),I.setBackdrop((O,z)=>e.drawBackdrop(O,z,f)),I.setVisibility(0),I.tick(performance.now()),r&&s(),I}).catch(()=>{n=null})),n}function s(){a&&r&&(p=fr(a,r,d),a.setEmission(Math.min(1.4,p.emission)))}return{dispose:ie,get orb(){return a},get element(){return a?.element},get output(){return p},show(I,O={}){w||(r=At(I),d=O,b=!1,Ee(),s())},update(I,O=d){w||(r=At(I),d=O,s())},reapply(){w||s()},hide(){b=!0,a&&(a.setVisibility(0),a.setView({yaw:0,pitch:0}),a.setObjectYaw(0),a.setSpeech(0),a.tick(performance.now())),f.vis=0,f.x=-999},attachPointer(I){return a?a.attachPointer(I,{range:"volume"}):(Ee()?.then(O=>O?.attachPointer(I,{range:"volume"})),null)},frame(I){if(!a)return;if(!I||b){(f.vis>0||a.element.style.visibility!=="hidden")&&(f.vis=0,a.setVisibility(0),a.tick(performance.now()));return}let O=1/60,z=9;if(I.snap||f.x<-900)Object.assign(f,{x:I.x,y:I.y,d:I.d,vx:0,vy:0,vd:0});else for(let ee of["x","y","d"]){let fe="v"+ee;f[fe]+=(z*z*(I[ee]-f[ee])-2*z*f[fe])*O,f[ee]+=f[fe]*O}f.vis+=((I.vis??1)-f.vis)*.2,a.holdRaster(Math.ceil(Math.max(f.d,I.d,120)*1.06)),a.setPose({x:f.x,y:f.y,diameter:f.d}),a.setVisibility(f.vis),a.tick(performance.now())},pose:f}}var co=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null,uo=!!co;function Oi({onresult:e,onend:a,onerror:n,lang:r}){if(!co)return n?.("unsupported"),null;let d=new co;d.lang=r||navigator.language||"en-US",d.interimResults=!0,d.maxAlternatives=1,d.continuous=!1;let p="",l="";d.onresult=h=>{l=[...h.results].map(f=>f[0].transcript).join(" "),h.results[h.results.length-1].isFinal&&(p=l),e?.(l,!!p)},d.onerror=h=>n?.(h.error),d.onend=()=>a?.(p||l);try{d.start()}catch{return n?.("busy"),null}return d}var po=e=>String(e).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),_t=(e,...a)=>a.some(n=>new RegExp(`\\b${n}\\b`).test(e)),gs={home:["home","start","beginning","inicio","principio","portada"],products:[...Oa[0].words,"productos","producto","tienda","objetos"],templates:[...Oa[1].words,"plantillas","plantilla","composiciones"],studio:[...Oa[2].words,"estudio","editar","personalizar","disenar"],sound:[...Oa[3].words,"sonido","sonidos","voces","escuchar","audio"],membership:["membership","member","plans","plan","pricing","price","prices","membresia","miembro","planes","precio","precios","cuesta","cost"],account:["account","profile","downloads","cuenta","perfil","descargas"],signin:["sign in","log in","login","iniciar sesion","entrar"]},hs={home:"#/",membership:"#/membership",account:"#/account",signin:"#/signin"},ms={"orb-slider":["slider","deslizador"],"orb-wave":["wave","ola","onda","ripple"],"background-pack":["background","backgrounds","fondo","fondos"],"crystal-controls":["controls","buttons","controles","botones","crystal"]},Ot=(e,a={})=>({say:e.text,id:e.id,lang:e.lang??"en",...a}),fs=/\b(hola|gracias|buenas|ayuda|ayudame|quien|que|como|donde|cual|quiero|puedes|llevame|ensename|muestrame|recomiendas|recomienda|textura|texturas|materiales|precio|cuanto|plantillas|productos|sonido|estudio|por favor|si|vale|el|la|los|las|una|para|con|del|mi|me)\b/g,bs=/\b(hello|hi|hey|thanks|thank|help|who|what|which|how|where|want|can|could|show|take|recommend|texture|textures|materials|price|the|a|an|is|are|you|me|my|please|yes|for|with|of)\b/g;function $r(e,a="en"){if(/[ñ¿¡]/i.test(String(e)))return"es";let n=po(e),r=n.match(fs)?.length??0,d=n.match(bs)?.length??0;return r>d?"es":d>r?"en":a}function zi(e,{here:a,presentation:n,lang:r="en"}){let d=po(e),p=$r(e,r),l=f=>za(f,p);if(!d)return Ot(l("reply.missed"),{intent:"fallback"});if(d.split(" ").length<=3&&_t(d,"stop","quiet","silence","shh","para","calla","callate","silencio","basta"))return{say:"",stop:!0,command:!0};if(_t(d,"where am i","where are we","donde estoy","donde estamos","que es esto","what is this","what is here","que hay aqui"))return Ot(n(p),{intent:"where"});if(_t(d,"help","what can you do","what can i do","ayuda","ayudame","que puedes hacer","que puedo hacer"))return Ot(l("reply.help"),{intent:"help"});if(_t(d,"thank you","thanks","gracias"))return Ot(l("reply.thanks"),{intent:"thanks"});if(_t(d,"who are you","what are you","quien eres","que eres","como te llamas","your name"))return Ot(l("reply.who"),{intent:"who"});if(_t(d,"back","go back","atras","volver","vuelve"))return Ot(l("reply.back"),{back:!0,command:!0});for(let[f,b]of Object.entries(ms))if(_t(d,...b)){let w=Mt.find(x=>x.id===f&&x.published!==!1);if(w)return Ot(ti(w),{go:`#/products/${f}`,quiet:!0,command:!0})}let h=bt.find(f=>d.includes(po(f.name)));if(h)return Ot(ai(h),{go:`#/templates/${h.id}`,quiet:!0,command:!0});for(let[f,b]of Object.entries(gs))if(_t(d,...b)){if(f===a){let w=n(p);return Ot(p==="es"?{text:`Ya estamos aqu\xED. ${w.text}`,lang:"es"}:ei(w),{command:!0})}return{go:hs[f]??`#/${f}`,command:!0}}return d.split(" ").length<=5&&_t(d,"hello","hi","hey","hola","buenas","buenos dias","buenas tardes","buenas noches","good morning","good evening")?Ot(l("reply.intro"),{intent:"hello"}):_t(d,"the orb","orb","esfera","la orb","bola")?Ot(p==="es"?{text:"Aqu\xED est\xE1 la Orb. Prueba sus veinte versiones.",lang:"es"}:ri(),{go:`#/products/${Mt[0].id}`,quiet:!0}):Ot(l("reply.unknown"),{intent:"fallback"})}var Ri=()=>!!cr,xs=/^#\/(products(\/[a-z0-9-]+(\?variant=[a-z0-9-]+)?)?|templates(\/[a-z0-9-]+)?|studio|sound|membership|account|licence)?$/;async function Ii(e,a,{timeout:n=8e3}={}){if(!cr)throw new Error("disabled");let r=new AbortController,d=setTimeout(()=>r.abort(),n);try{let p=await fetch(cr,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({messages:e,page:a}),signal:r.signal});if(!p.ok)throw new Error(`http ${p.status}`);let l=await p.json(),h=typeof l.say=="string"?l.say.trim().slice(0,600):"";if(!h)throw new Error("empty");return{say:h,go:typeof l.go=="string"&&xs.test(l.go)?l.go:void 0}}finally{clearTimeout(d)}}var Pi={},ji={member:""},Di="",Ni=e=>"",go=e=>(location.assign(e),!0),jt={get enabled(){return!1},canCheckout:e=>!!e.length&&e.every(a=>Ni(a.id)),canSubscribe:e=>!!!1,canRestore:()=>!!!1,checkout(e){return jt.canCheckout(e)?(go(Ni(e[0].id)),e[0].id):null},subscribe(e){return jt.canSubscribe(e)?go(ji[e]):!1},restore(){return jt.canRestore()?go(Di):!1}};var pt={saved:"lightorb:saved",designs:"lightorb:designs",profile:"lightorb:profile"},Qt=(e,a)=>{try{return JSON.parse(localStorage.getItem(e))??a}catch{return a}},ir=(e,a)=>{try{return localStorage.setItem(e,JSON.stringify(a)),!0}catch{return!1}},_e={saved:()=>Qt(pt.saved,[]),isSaved:(e,a)=>Qt(pt.saved,[]).some(n=>n.type===e&&n.id===a),toggleSaved(e,a,n,r){let d=Qt(pt.saved,[]),p=d.findIndex(l=>l.type===e&&l.id===a);return p>=0?d.splice(p,1):d.unshift({type:e,id:a,name:n,href:r,at:new Date().toISOString()}),ir(pt.saved,d),p<0},designs:()=>Qt(pt.designs,[]),design:e=>Qt(pt.designs,[]).find(a=>a.id===e),saveDesign(e){let a=Qt(pt.designs,[]),n=a.findIndex(r=>r.id===e.id);return n>=0?a[n]=e:a.unshift(e),ir(pt.designs,a.slice(0,40))},renameDesign(e,a){let n=Qt(pt.designs,[]),r=n.find(d=>d.id===e);r&&(r.name=a,ir(pt.designs,n))},deleteDesign(e){ir(pt.designs,Qt(pt.designs,[]).filter(a=>a.id!==e))},profile:()=>Qt(pt.profile,null),setProfile:e=>ir(pt.profile,e)},Bi=[["profile","Profile"],["designs","My Designs"],["saved","Saved"],["downloads","Downloads"]],vs='<p class="note">Your designs and saved items are kept in this browser. Accounts that sync across devices come later; your early-access email will carry over.</p>';function Ha(e,a,n="profile"){let{esc:r,audio:d}=a;Bi.some(h=>h[0]===n)||(n="profile");let p=_e.profile();e.innerHTML=`
    <section class="dest acct">
      <header class="dh"><p class="kicker">Account${p?.email?" \xB7 Early access":""}</p><h1>${p?.name?r(p.name):"Your space"}</h1>${vs}</header>
      <nav class="segbar acct-tabs" aria-label="Account">${Bi.map(([h,f])=>`<a class="pill" href="#/account/${h}" ${h===n?'aria-current="page" aria-pressed="true"':""}>${f}</a>`).join("")}</nav>
      <div class="acct-body" data-body></div>
      ${tr()}
    </section>${a.footer()}`;let l=e.querySelector("[data-body]");if(n==="profile"){let h=p?.email;l.innerHTML=`${h?"":`<div class="joincta glass"><h2>Join early access</h2><p>Free. Leave your email and we tell you when new pieces and Studio updates open. Your designs stay on this device either way.</p>
        <div class="acts eq"><a class="gb small primary" href="#/signup">Join early access</a><a class="gb small" href="#/signin">I already joined</a></div></div>`}
      <form class="form" data-prof>
        <label class="fl"><span>Display name</span><input class="gi" name="name" value="${r(p?.name||"")}" placeholder="How the site greets you" maxlength="40" autocomplete="name"></label>
        <div class="acts"><button class="gb primary" type="submit">Save on this device</button>${p?'<button class="gb" type="button" data-forget>Sign out on this device</button>':""}</div>
        <p class="note" data-profmsg role="status" aria-live="polite"></p>
      </form>
      <div class="kv"><span>Email</span><b>${h?r(p.email):"Not joined yet"}</b>${p?.joined?`<span>Joined</span><b>${new Date(p.joined).toLocaleDateString()}</b>`:""}<span>Plan</span><b>${"Early access \xB7 free"}</b><span>Sound</span><b>${d.prefs.master?"On":"Off"}</b><span>Narration</span><b>${d.prefs.guide?"On":"Off"}</b><span>Guide voice</span><b><a href="#/sound">${r(Ft(d.prefs.voice).name)}</a></b></div>`,l.querySelector("[data-prof]").addEventListener("submit",f=>{f.preventDefault();let b=f.target.name.value.trim(),w={..._e.profile()??{},name:b};b||delete w.name,_e.setProfile(Object.keys(w).length?w:null),d.sfx("confirm"),Ha(e,a,"profile"),e.querySelector("[data-profmsg]").textContent="Saved on this device."}),l.querySelector("[data-prof] .gi").addEventListener("input",f=>{f.isTrusted&&d.sfx("type")}),l.querySelector("[data-forget]")?.addEventListener("click",()=>{if(confirm("Forget your name and email on this browser? Your designs and saved items stay.")){try{localStorage.removeItem(pt.profile)}catch{}Ha(e,a,"profile")}})}if(n==="designs"){let h=_e.designs();l.innerHTML=h.length?`<div class="dgrid">${h.map(f=>`<article class="dc" data-d="${f.id}">
        <a class="dc-img" href="#/studio?design=${f.id}" aria-label="Open ${r(f.name)} in Studio">${f.thumb?`<img src="${f.thumb}" alt="">`:""}</a>
        <input class="dc-n gi" value="${r(f.name)}" aria-label="Design name" maxlength="48">
        <p class="note">${r(f.familyName)} \xB7 ${new Date(f.at).toLocaleDateString()}</p>
        <div class="acts"><a class="gb small primary" href="#/studio?design=${f.id}">Open in Studio</a><button class="gb small" type="button" data-del>Delete</button></div></article>`).join("")}</div>`:'<div class="empty"><h2>No designs yet</h2><p>Designs you save in Studio appear here, with a picture of each one.</p><a class="gb primary" href="#/studio">Open Studio</a></div>',l.querySelectorAll("[data-d]").forEach(f=>{let b=f.dataset.d,w=f.querySelector(".dc-n");w.addEventListener("change",()=>{_e.renameDesign(b,w.value.trim()||"Untitled design"),d.sfx("confirm")}),w.addEventListener("input",x=>{x.isTrusted&&d.sfx("type")}),f.querySelector("[data-del]").addEventListener("click",()=>{confirm(`Delete \u201C${w.value}\u201D? This cannot be undone.`)&&(_e.deleteDesign(b),d.sfx("close"),Ha(e,a,"designs"))})})}if(n==="saved"){let h=_e.saved();l.innerHTML=h.length?`<ul class="slist">${h.map((f,b)=>`<li><span class="kicker">${f.type}</span><a href="${f.href}">${r(f.name)}</a><button class="pill" type="button" data-rm="${b}">Remove</button></li>`).join("")}</ul>`:'<div class="empty"><h2>Nothing saved yet</h2><p>Save products, templates and sounds to find them here.</p><a class="gb primary" href="#/products">Explore products</a></div>',l.querySelectorAll("[data-rm]").forEach(f=>f.addEventListener("click",()=>{let b=h[+f.dataset.rm];_e.toggleSaved(b.type,b.id),d.sfx("close"),Ha(e,a,"saved")}))}n==="downloads"&&(l.innerHTML='<div class="empty"><h2>Everything is free right now</h2><p>During early access there is nothing to buy: take The Orb with its embed code from its product page, and export your own versions from Studio \u2014 exports save directly to your computer.</p><div class="acts eq"><a class="gb primary" href="#/products/orb">Get The Orb</a><a class="gb" href="#/studio">Open Studio</a></div></div>',l.querySelector("[data-restore]")?.addEventListener("click",()=>jt.restore()))}function ho(e,a,n){let r=n==="up",d=_e.profile();e.innerHTML=`
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
      ${tr()}
    </section>${a.footer()}`;let p=e.querySelector("[data-sign]");p.addEventListener("submit",async l=>{l.preventDefault();let h=p.querySelector("[data-signmsg]"),f=p.querySelector("button[type=submit]"),b=p.email.value.trim();if(!Da(b)){h.textContent="Please enter a valid email address.",p.email.focus();return}f.disabled=!0,f.setAttribute("aria-busy","true");let w=await Qr({email:b,name:p.name?.value,source:"signup"});if(!w.ok){h.textContent=w.error,f.disabled=!1,f.removeAttribute("aria-busy");return}a.audio.sfx("confirm");let x=document.createElement("div");x.innerHTML=eo(b);let ie=x.firstElementChild;p.replaceWith(ie),ie.focus({preventScroll:!0})})}function Hi(e,a){let n=_o,r=_e.profile(),d=n.plans.map(p=>`<article class="plan soon"><p class="kicker">After launch \xB7 preview</p><h2>${p.name}</h2><p>${p.line}</p><ul>${p.points.map(l=>`<li>${l}</li>`).join("")}</ul></article>`).join("");e.innerHTML=`
    <section class="dest memb">
      <header class="dh"><p class="kicker">Membership</p><h1>Early access is free</h1><p class="dh-l">Everything is open while we build it: Studio, The Orb with its embed code, and each piece as it arrives. What you take now stays free to use. Paid plans come later, and early users get a launch discount.</p></header>
      <article class="plan em now"><p class="kicker">Current plan</p><h2>Early access \u2014 free</h2><p>Everything on the site, for everyone.</p>
        <ul><li>Studio: shape light, material and movement; save and export your designs</li><li>The Orb in twenty versions, with its embed code</li><li>New pieces as they open, free while in early access</li><li>A launch discount on paid plans</li></ul>
        <div class="acts eq">${r?.email?'<span class="pill" aria-disabled="true">You\u2019re in</span>':'<a class="gb primary" href="#/signup">Join early access</a>'}<a class="gb" href="#/studio">Open Studio</a></div></article>
      <h2 class="plans-h">Plans after launch</h2><p class="note plans-n">A preview of how The Light Orb will work after early access. Prices are not set yet; early users get a launch discount.</p>
      <div class="plans">${d}</div>
      ${tr()}
    </section>${a.footer()}`,e.querySelectorAll("[data-join]").forEach(p=>p.addEventListener("click",()=>jt.subscribe(p.dataset.join)))}var ys=`<svg class="wm-o" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><defs><mask id="wm-counter"><rect width="100" height="100" fill="#fff"/>
  <path fill="#000" d="M49 9C31 9 23 29 23 50c0 24 12 42 30 42 15 0 23-9 23-20 0-9-7-12-11-21-4-9-2-19 0-27 1-9-5-15-16-15z"/></mask></defs>
  <circle cx="50" cy="50" r="46" fill="currentColor" mask="url(#wm-counter)"/></svg>`,mo=`<span class="wm-t">The Light</span>${ys}<span class="wm-t wm-rb">rb</span>`;var _i="lightorb:cart",Tr=()=>{try{return JSON.parse(localStorage.getItem(_i))??[]}catch{return[]}},Fi=e=>{try{localStorage.setItem(_i,JSON.stringify(e))}catch{}fo.forEach(a=>a(e))},fo=new Set,Lt={items:Tr,has:e=>Tr().some(a=>a.id===e),add(e){let a=Tr();a.some(n=>n.id===e.id)||(a.push({...e,at:new Date().toISOString()}),Fi(a))},remove(e){Fi(Tr().filter(a=>a.id!==e))},toggle(e){return Lt.has(e.id)?(Lt.remove(e.id),!1):(Lt.add(e),!0)},on(e){return fo.add(e),()=>fo.delete(e)}};var Cr="Carla Tres Garc\xEDa",Gi="39934017Z",Yi="trescarla@gmail.com",ws="14 October 2026",Wi="Avenida Duque de Loul\xE9 91, Lisboa, Portugal",Fa=`<a href="mailto:${Yi}">${Yi}</a>`,ks={privacy:{kicker:"Privacy",title:"Privacy",lede:"What this site collects, why, and what you can ask for. Short version: very little, and nothing is sold.",body:`
    <h2>Who is responsible</h2>
    <p>The Light Orb is run by ${Cr} (NIF ${Gi}), a sole trader (the data controller). Address: ${Wi}. Contact: ${Fa}.</p>
    <h2>Visiting the site</h2>
    <p>We count visits with GoatCounter, a privacy-friendly analytics service that sets no cookies and does not track you across sites. It records the page address, referrer, browser type, screen size and an approximate country, without storing your IP address. If your browser sends Do Not Track or Global Privacy Control, nothing is counted at all. Legal basis: our legitimate interest in knowing which pages are used.</p>
    <h2>Early access and the waitlist</h2>
    <p>If you join early access (or the waitlist) we keep your email address, the name you give if any, the date, where you signed up (for example "footer") and your browser language \u2014 nothing else. It is stored in Cloudflare Workers KV, the owner receives one notification email about each new sign-up (sent through Resend), and it is used only to tell you when pieces and Studio updates open. Your display name, designs and saved items stay in your browser. Legal basis: your consent, which you can withdraw at any time by writing to ${Fa}; we then delete your address.</p>
    <h2>Web design inquiries</h2>
    <p>If you send a project through the Web Design form, what you write (your name, email, project details and any optional answers) and the time of sending are delivered as one email to ${Cr}, sent through Resend from our Cloudflare Worker. It is used only to reply to you and discuss your project; it is not added to any mailing list. The Worker does not store the message itself, only a random submission code for one day so the same message is not sent twice. Legal basis: steps you ask us to take before a possible contract. You can ask for the email to be deleted at any time by writing to ${Fa}.</p>
    <h2>Talking with the Orb</h2>
    <p>When you ask the guide Orb a question, the text of the conversation and the page you are on are sent through our Cloudflare Worker to Anthropic, which generates the reply. We do not store or log these conversations. Anthropic processes them as our service provider under its own commercial terms. Please do not share personal information in the conversation.</p>
    <h2>Voice</h2>
    <p>Speech recognition and speech synthesis are done by your browser. Depending on your browser, the recognised audio may be processed by its maker (for example Google or Apple). We never receive or keep your voice.</p>
    <h2>Stored on your device</h2>
    <p>The site uses your browser's local storage to remember your preferences (sound, voice), saved items, your display name and your designs, plus short-lived session storage for scroll position. This stays on your device; we cannot see it. You can clear it from your browser settings.</p>
    <h2>Providers and transfers</h2>
    <p>GitHub (site hosting), Cloudflare (Worker and waitlist storage), Resend (sign-up notifications and web design inquiries, emailed to the owner), GoatCounter (visit counts) and Anthropic (Orb replies). Some of them are based in the United States; transfers rely on the EU\u2013US Data Privacy Framework or standard contractual clauses.</p>
    <h2>How long</h2>
    <p>Waitlist emails are kept until the pieces open and the announcement is sent, or until you ask us to delete them, and in any case no longer than two years. Visit counts are aggregated.</p>
    <h2>Your rights</h2>
    <p>Under the GDPR you can ask for access, correction, deletion, restriction, portability, or object to processing, and withdraw consent, by writing to ${Fa}. You can also complain to the Spanish Data Protection Agency (AEPD, aepd.es).</p>`},terms:{kicker:"Terms",title:"Terms of use",lede:"The rules for using this website.",body:`
    <h2>Who we are</h2>
    <p>This website is run by ${Cr} (NIF ${Gi}), a sole trader. Address: ${Wi}. Contact: ${Fa}.</p>
    <h2>Using the site</h2>
    <p>You may browse the site, try the previews, and use Studio and the guide Orb for your own personal or professional exploration. Please do not misuse it: no attempts to break, overload or scrape it, and no unlawful or abusive use of the guide Orb.</p>
    <h2>The guide Orb</h2>
    <p>The Orb's replies are generated automatically and may be incomplete or wrong. They are not professional advice and do not bind us; prices and terms are only those shown on the site.</p>
    <h2>Content and pieces</h2>
    <p>The design, text, images, sounds and code of this site belong to ${Cr} unless stated otherwise. Using the free Orb and any piece you obtain is governed by the <a href="#/licence">licence</a>.</p>
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
    <p>Code is provided as it is. Questions about a use not covered here: ${Fa}.</p>`}},Vi={privacy:"Privacy",terms:"Terms of use",licence:"Licence"};function Mr(e,a,n){let r=ks[n];e.innerHTML=`
    <section class="dest legal">
      <header class="dh"><p class="kicker">${r.kicker}</p><h1>${r.title}</h1><p class="dh-l">${r.lede}</p></header>
      <div class="legal-b">${r.body}
        <p class="note">Last updated ${ws}. <a href="#/privacy">Privacy</a> \xB7 <a href="#/terms">Terms</a> \xB7 <a href="#/licence">Licence</a></p></div>
    </section>${a.footer()}`}var nr=[{id:"clear",name:"Clear",line:"Thick clear glass with a bright lower rim, for light pages.",dark:!1,v:{page:"#F3F3F1",ink:"#262827",muted:"#6b6f6c",line:"rgba(38,40,39,.07)",body:"linear-gradient(180deg,rgba(255,255,255,.96),rgba(246,247,246,.72) 52%,rgba(226,230,228,.78))",edge:"#ffffff",depth:"rgba(130,142,138,.5)",shadow:"rgba(38,40,39,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(176,212,228,.6)",tint:"linear-gradient(180deg,#43484a,#1f2322 60%,#2c302f)",tintInk:"#f4f5f3",fill:"#2a2e2d",well:"linear-gradient(180deg,rgba(214,218,216,.7),rgba(246,247,246,.9))",orb:"radial-gradient(circle at 50% 62%,rgba(214,232,240,.55),rgba(255,255,255,.22) 58%,rgba(186,200,206,.65))",squish:"1"}},{id:"smoke",name:"Smoke",line:"Smoked glass that darkens to the rim, for dark pages.",dark:!0,v:{page:"#141716",ink:"#ECEEEB",muted:"#9DA29F",line:"rgba(255,255,255,.08)",body:"linear-gradient(180deg,rgba(255,255,255,.17),rgba(255,255,255,.05) 50%,rgba(0,0,0,.22))",edge:"rgba(255,255,255,.38)",depth:"rgba(0,0,0,.6)",shadow:"rgba(0,0,0,.75)",spec:"rgba(255,255,255,.4)",caustic:"rgba(150,186,200,.4)",tint:"linear-gradient(180deg,#fbfbfa,#d6d9d6)",tintInk:"#161918",fill:"#e7e9e6",well:"linear-gradient(180deg,rgba(0,0,0,.45),rgba(255,255,255,.04))",orb:"radial-gradient(circle at 50% 62%,rgba(120,130,136,.55),rgba(40,44,46,.35) 58%,rgba(10,12,12,.75))",squish:"1"}},{id:"chrome",name:"Chrome",line:"Liquid chrome that folds the room it reflects.",dark:!1,v:{page:"#E2E4E3",ink:"#1c1e1d",muted:"#5d6260",line:"rgba(0,0,0,.1)",body:"linear-gradient(180deg,#ffffff 0%,#c3c8c7 24%,#f5f6f6 46%,#8f9594 72%,#e4e7e6 100%)",edge:"#ffffff",depth:"rgba(60,66,64,.6)",shadow:"rgba(30,34,33,.42)",spec:"rgba(255,255,255,1)",caustic:"rgba(255,255,255,.7)",tint:"linear-gradient(180deg,#6c7271 0%,#1d201f 48%,#4a4f4e 100%)",tintInk:"#f3f4f3",fill:"#3a3f3e",well:"linear-gradient(180deg,#a9aeac,#eef0ef)",orb:"conic-gradient(from 210deg,#fdfdfd,#8e9493,#f2f3f3,#5d6362,#e9ebea,#a3a8a7,#fdfdfd)",squish:"1"}},{id:"porcelain",name:"Porcelain",line:"Opaque glazed porcelain with a warm greige accent.",dark:!1,v:{page:"#EFEDE8",ink:"#2e2c29",muted:"#6e6a63",line:"rgba(60,50,40,.08)",body:"linear-gradient(180deg,#fffefb,#f4f1eb 58%,#e5e0d6)",edge:"#ffffff",depth:"rgba(170,158,140,.45)",shadow:"rgba(80,68,52,.26)",spec:"rgba(255,255,255,.9)",caustic:"rgba(207,200,189,.55)",tint:"linear-gradient(180deg,#ddd6ca,#bdb3a3)",tintInk:"#2e2c29",fill:"#bfb5a5",well:"linear-gradient(180deg,#e2ddd3,#faf8f4)",orb:"radial-gradient(circle at 50% 60%,#fbf9f5,#ece7de 60%,#d2cabc)",squish:"1"}},{id:"gel",name:"Gel",line:"Soft sea-glass gel that gives a little when you press it.",dark:!1,v:{page:"#E8EEEC",ink:"#1f302b",muted:"#5b6f69",line:"rgba(30,70,60,.08)",body:"linear-gradient(180deg,rgba(244,252,249,.94),rgba(198,228,218,.62) 56%,rgba(156,200,186,.7))",edge:"rgba(255,255,255,.95)",depth:"rgba(70,124,108,.5)",shadow:"rgba(30,70,60,.3)",spec:"rgba(255,255,255,.95)",caustic:"rgba(130,226,196,.65)",tint:"linear-gradient(180deg,#a6dccb,#5d9c89)",tintInk:"#0f2a22",fill:"#6aa894",well:"linear-gradient(180deg,rgba(170,206,194,.6),rgba(240,250,246,.9))",orb:"radial-gradient(circle at 50% 60%,rgba(190,240,222,.75),rgba(150,214,192,.45) 58%,rgba(90,160,138,.7))",squish:"1.6"}},{id:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud.",dark:!1,v:{page:"#F2EEEE",ink:"#33282b",muted:"#7a6a6e",line:"rgba(80,40,50,.07)",body:"linear-gradient(180deg,rgba(255,252,252,.96),rgba(246,232,236,.72) 54%,rgba(230,206,214,.75))",edge:"#ffffff",depth:"rgba(190,140,156,.45)",shadow:"rgba(90,50,62,.26)",spec:"rgba(255,255,255,.95)",caustic:"rgba(255,170,198,.6)",tint:"linear-gradient(180deg,#f3c9d6,#d9909f)",tintInk:"#3a1d25",fill:"#df9fb0",well:"linear-gradient(180deg,rgba(226,206,212,.7),rgba(255,250,251,.9))",orb:"radial-gradient(circle at 46% 58%,rgba(255,188,208,.85),rgba(255,236,242,.5) 50%,rgba(222,190,200,.7))",squish:"1.2"}}],Ss=e=>nr.find(a=>a.id===e)??nr[0],Es=e=>Object.entries(e.v).map(([a,n])=>`--cc-${a.replace(/[A-Z]/g,r=>"-"+r.toLowerCase())}:${n};`).join(`
  `),$s=`
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
`,Ls=`
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
`,Ki='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',Ts={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row">
    <button class="cc-btn cc-glass primary" type="button">Continue</button>
    <button class="cc-btn cc-glass" type="button">Secondary</button>
    <button class="cc-btn cc-glass round" type="button" aria-label="Confirm">${Ki}</button>
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
</div>`},Cs={"crystal-controls":`<div class="cc-stage">
  <div class="cc-row"><button class="cc-btn cc-glass primary" type="button" tabindex="-1">Continue</button><button class="cc-btn cc-glass round" type="button" tabindex="-1" aria-label="Confirm">${Ki}</button></div>
  <div class="cc-row"><button class="cc-switch cc-glass" role="switch" type="button" tabindex="-1" aria-checked="true" aria-label="Switch"><span class="cc-knob"></span></button><input class="cc-range" type="range" value="62" tabindex="-1" aria-label="Level" style="width:150px"></div>
</div>`,"orb-slider":'<div class="cc-stage"><div class="cc-slide cc-glass" style="--h:64px;width:280px" aria-hidden="true"><span class="cc-trail"></span><span class="cc-label">slide to enter</span><span class="cc-orb"></span></div></div>'},Ui={"crystal-controls":"Crystal Controls","orb-slider":"Orb Slider"};function Ar(e,a,{mini:n=!1}={}){let r=Ss(a);return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${Ui[e]} \xB7 ${r.name} \u2014 The Light Orb</title>
<!-- ${Ui[e]} \xB7 ${r.name}. Free for personal and commercial use (The Light Orb licence).
     Change the material by editing the --cc-* variables below. -->
<style>
:root{
  ${Es(r)}
}${$s}</style>
</head>
<body${n?' class="mini"':""}>
${(n?Cs:Ts)[e]}
<script>${Ls}<\/script>
</body>
</html>
`}var bo="",Zi=["Personal Website / Portfolio","Business Website","Online Store","Landing Page","Interactive Experience","Something Else","I\u2019m Not Sure Yet"],Ms=["Present a business","Display products","Sell products online","Accept bookings or inquiries","Showcase creative work","Include interactive experiences","Something else","I need advice"],As=["As soon as possible","Within 1\u20133 months","Flexible","Not sure yet"],yt={name:100,email:254,idea:5e3,ideaMin:20,design:2e3,refs:2e3,budget:200},vo="lo:inquiry",qs=[["Visual identity","A look for the website, made from your brand, your references and what you love."],["Structure & UX/UI","How the site is organised, how it reads and how it feels to move through."],["Responsive layouts","Compositions designed for phones, tablets and large screens \u2014 not shrunk."],["Interaction & motion","Components, animations and small moments that make it feel alive."],["Online stores","Product catalogues, product presentation and setup, selling online."],["Portfolios & business sites","Creative portfolios, studios, shops, services, landing pages."],["Experimental experiences","Materials, light, sound and 3D, when the idea asks for it."],["Integrations","Other tools the project needs, agreed together."]],Os=[["Your Idea","Tell me what you want to create, what you like, and what matters to your project."],["The Direction","We define the visual approach, structure, functionality and scope."],["Design & Development","I turn the agreed concept into a fully designed, functional digital experience."],["The Final Experience","The website is reviewed, refined and prepared for launch."]],ma=e=>String(e??"").replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),Qi=()=>{try{return JSON.parse(sessionStorage.getItem(vo))??{}}catch{return{}}},zs=e=>{try{sessionStorage.setItem(vo,JSON.stringify(e))}catch{}},Rs=()=>{try{sessionStorage.removeItem(vo)}catch{}},Xi=()=>crypto.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,12)}`,qr=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function Ji(e){let a={};String(e.name??"").trim()?e.name.trim().length>yt.name&&(a.name=`Please keep your name under ${yt.name} characters.`):a.name="Please tell me your name.",Da(String(e.email??""))||(a.email="Please enter a valid email address, so I can reply."),Zi.includes(e.type)||(a.type="Choose the option closest to what you have in mind.");let n=String(e.idea??"").trim();n.length<yt.ideaMin?a.idea="Tell me a little about your idea \u2014 a few sentences are enough.":n.length>yt.idea&&(a.idea=`Please keep it under ${yt.idea} characters.`);for(let r of["design","refs","budget"])String(e[r]??"").length>yt[r]&&(a[r]=`Please keep this under ${yt[r]} characters.`);return a}var xo=(e,a,n,r)=>a.map((d,p)=>{let l=n==="radio"?r===d:(r??[]).includes(d);return`<label class="ch"><input type="${n}" name="${e}" value="${ma(d)}"${l?" checked":""}${n==="radio"&&e==="type"&&p===0?" required":""}><span>${ma(d)}</span></label>`}).join("");function Is(e){let a=!!ur;return`<form class="iq" data-iq novalidate aria-describedby="iq-privacy">
    <div class="iq-row2">
      <label class="fl"><span>Name</span><input class="gi" name="name" autocomplete="name" maxlength="${yt.name}" required aria-required="true" value="${ma(e.name)}"><em class="err" data-err="name" id="e-name"></em></label>
      <label class="fl"><span>Email</span><input class="gi" type="email" name="email" autocomplete="email" inputmode="email" maxlength="${yt.email}" required aria-required="true" value="${ma(e.email)}"><em class="err" data-err="email" id="e-email"></em></label>
    </div>
    <fieldset class="iq-set" data-set="type"><legend>What are you looking to create?</legend>
      <div class="chs" role="radiogroup" aria-required="true">${xo("type",Zi,"radio",e.type)}</div><em class="err" data-err="type" id="e-type"></em></fieldset>
    <label class="fl"><span>Tell me about your idea</span>
      <textarea class="gi iq-ta" name="idea" rows="7" maxlength="${yt.idea}" required aria-required="true" placeholder="What is it, who is it for, what would make it feel right?">${ma(e.idea)}</textarea>
      <span class="iq-meta"><em class="err" data-err="idea" id="e-idea"></em><small data-count></small></span></label>
    <details class="iq-more" data-more${e.more?" open":""}><summary><span>A little more, if you like</span><small>Optional \xB7 design, references, timing, budget</small></summary>
      <div class="iq-more-b">
        <label class="fl"><span>What kind of design do you like?</span><textarea class="gi" name="design" rows="3" maxlength="${yt.design}" placeholder="Colours, materials, styles, moods\u2026">${ma(e.design)}</textarea><em class="err" data-err="design"></em></label>
        <label class="fl"><span>Any websites or references you love?</span><textarea class="gi" name="refs" rows="3" maxlength="${yt.refs}" placeholder="Links, or a few words about them">${ma(e.refs)}</textarea><em class="err" data-err="refs"></em></label>
        <fieldset class="iq-set"><legend>What should your website do?</legend><div class="chs">${xo("functions",Ms,"checkbox",e.functions)}</div></fieldset>
        <fieldset class="iq-set"><legend>When would you like to launch?</legend><div class="chs" role="radiogroup">${xo("timeline",As,"radio",e.timeline)}</div></fieldset>
        <label class="fl"><span>Do you have a budget in mind? <i class="opt">Optional \u2014 a rough idea is fine</i></span><input class="gi" name="budget" maxlength="${yt.budget}" value="${ma(e.budget)}"><em class="err" data-err="budget"></em></label>
      </div></details>
    <label class="iq-hp" aria-hidden="true">Leave this empty<input name="website" tabindex="-1" autocomplete="off"></label>
    <div class="iq-send"><button class="gb primary" type="submit" data-send${a?"":" disabled"}><span>Send My Project</span></button>
      <p class="iq-status" data-status role="status" aria-live="polite">${a?"":"Project inquiries open soon \u2014 nothing typed here is sent yet."}</p></div>
    <p class="note" id="iq-privacy">What you write here is sent by email to Carla only, to reply to you and talk about your project. It is not added to any mailing list. See <a href="#/privacy">privacy</a>.</p>
  </form>`}var Ps=`<div class="iq-done" role="status" tabindex="-1" data-done><span class="iq-done-orb" aria-hidden="true"></span>
  <p class="kicker">Sent</p><h3>Your idea is on its way.</h3><p>Thank you for sharing it \u2014 I\u2019ll be in touch soon.</p>
  <div class="acts eq"><a class="tl" href="#/templates">Explore Templates</a><a class="tl" href="#/products">Discover Products</a></div></div>`;function js(e,{audio:a}){let n=e.querySelector("[data-iq]");if(!n)return;let r=n.querySelector("[data-status]"),d=n.querySelector("[data-send]"),p=n.querySelector("[data-count]"),l=n.elements.idea,h=Date.now(),f=Qi().key||Xi(),b=!1,w=()=>({name:n.elements.name.value,email:n.elements.email.value,type:n.querySelector("[name=type]:checked")?.value??"",idea:l.value,design:n.elements.design.value,refs:n.elements.refs.value,functions:[...n.querySelectorAll("[name=functions]:checked")].map(s=>s.value),timeline:n.querySelector("[name=timeline]:checked")?.value??"",budget:n.elements.budget.value}),x=()=>zs({...w(),key:f,more:n.querySelector("[data-more]").open}),ie=()=>{let s=l.value.trim().length;p.textContent=s?`${s} / ${yt.idea}`:""},Ee=s=>{n.querySelectorAll("[data-err]").forEach(I=>{let O=I.dataset.err,z=s[O]??"";I.textContent=z;let ee=O==="type"?n.querySelector("[data-set=type]"):n.elements[O];ee&&(ee.toggleAttribute("aria-invalid",!!z),ee.setAttribute&&(z&&I.id?ee.setAttribute("aria-describedby",I.id):ee.removeAttribute?.("aria-describedby")))})};ie(),n.addEventListener("input",s=>{x(),s.target===l&&ie();let I=s.target.name,O=n.querySelector(`[data-err="${I}"]`);if(O?.textContent&&!Ji(w())[I]){O.textContent="";let z=I==="type"?n.querySelector("[data-set=type]"):s.target;z.removeAttribute("aria-invalid"),z.removeAttribute("aria-describedby")}}),n.querySelector("[data-more]").addEventListener("toggle",s=>{x(),a?.sfx(s.target.open?"open":"close")}),n.addEventListener("submit",async s=>{if(s.preventDefault(),b||!ur)return;let I=w(),O=Ji(I);Ee(O);let z=Object.keys(O)[0];if(z){r.textContent="A few details are missing \u2014 see the highlighted fields.",(z==="type"?n.querySelector("[name=type]"):n.elements[z])?.focus(),["design","refs","budget"].includes(z)&&(n.querySelector("[data-more]").open=!0);return}b=!0,d.disabled=!0,d.setAttribute("aria-busy","true"),n.setAttribute("aria-busy","true"),r.textContent="Sending\u2026";let ee=!1,fe="";try{let Z=await fetch(ur,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({...I,website:n.elements.website.value,key:f,elapsed:Date.now()-h,lang:(navigator.language||"en").slice(0,5)})}),W=await Z.json().catch(()=>({}));ee=Z.ok&&W?.ok===!0,ee||(fe=Z.status===429?"Your message was not sent: too many tries for now. Please wait a little and try again \u2014 everything you wrote is still here.":Z.status===400&&W?.field?"Your message was not sent: please check the highlighted field.":"Your message was not sent. Please try again in a moment \u2014 everything you wrote is still here."),!ee&&W?.field&&Ee({[W.field]:"Please check this field."})}catch{fe="Your message was not sent \u2014 the connection failed. Please try again; everything you wrote is still here."}if(b=!1,d.removeAttribute("aria-busy"),n.removeAttribute("aria-busy"),ee){Rs(),f=Xi(),ye("inquiry_sent",{type:I.type}),a?.sfx("confirm");let Z=document.createElement("div");Z.innerHTML=Ps;let W=Z.firstElementChild;n.replaceWith(W),W.focus({preventScroll:!0}),W.scrollIntoView({block:"center",behavior:qr()?"auto":"smooth"});return}d.disabled=!1,r.textContent=fe,r.setAttribute("role","alert"),ye("inquiry_failed")})}function Ds(e,a){let n=e.querySelector("[data-tilt]");if(!n||qr())return;let r=n.closest(".wd-hero"),d=0,p=0,l=0,h=b=>{if(b.pointerType!=="mouse")return;let w=r.getBoundingClientRect();p=(b.clientX-w.left)/w.width-.5,l=(b.clientY-w.top)/w.height-.5,cancelAnimationFrame(d),d=requestAnimationFrame(()=>{n.style.setProperty("--rx",`${(-l*8).toFixed(2)}deg`),n.style.setProperty("--ry",`${(p*12).toFixed(2)}deg`)})},f=()=>{n.style.setProperty("--rx","0deg"),n.style.setProperty("--ry","0deg")};r.addEventListener("pointermove",h),r.addEventListener("pointerleave",f),a?.push(()=>cancelAnimationFrame(d))}function en(e,a,n={}){let r=Qi();e.innerHTML=`
    <article class="wd">
      <section class="wd-hero" aria-labelledby="wd-h">
        <div class="wd-hero-t">
          <p class="kicker">Web Design</p>
          <h1 id="wd-h">A website that feels like yours.</h1>
          <p class="lede">Your ideas, your vision, your identity. I design and develop custom websites built around what makes your project different.</p>
          <div class="acts"><button class="gb primary" type="button" data-to-form>Start a Project</button><a class="tl" href="#/templates">Explore the Universe <span aria-hidden="true">\u2192</span></a></div>
        </div>
        <div class="wd-stage" aria-hidden="true"><div class="wd-sheets" data-tilt>
          <span class="sh sh-3"></span><span class="sh sh-2"><i></i><i></i><i></i></span>
          <span class="sh-orb"><img class="lt" src="./media/cards/orb.jpg" alt="" decoding="async"><img class="dk" src="./media/cards/orb-dark.jpg" alt="" decoding="async" loading="lazy"></span>
          <span class="sh sh-1"><b class="l1"></b><b class="l2"></b><b class="l3"></b></span>
        </div></div>
      </section>

      <section class="wd-custom" aria-labelledby="wd-c">
        <div class="wd-custom-t">
          <p class="kicker">Custom</p>
          <h2 id="wd-c">Not just a template. Something entirely yours.</h2>
          <p>The templates on this site are ready to explore. But you don\u2019t have to start from one: I can design a website around you \u2014 your content, your products, your brand, the interactions you imagine and what the site needs to do.</p>
          <p>Both sides are part of the work: the visual design, and the development that makes it real, responsive and ready to use.</p>
        </div>
        <div class="wd-poss"><p class="kicker">What it can include</p>
          <ul class="wd-list">${qs.map(([p,l])=>`<li><b>${p}</b><span>${l}</span></li>`).join("")}</ul>
          <p class="note">Every project is different; what is included is agreed together, one project at a time.</p></div>
      </section>

      <section class="wd-proc" aria-labelledby="wd-p">
        <p class="kicker">Working together</p><h2 id="wd-p">From an idea to a finished website.</h2>
        <ol class="wd-steps">${Os.map(([p,l],h)=>`<li class="wd-step" tabindex="0"><span class="wd-bead" aria-hidden="true"></span><span class="wd-n">${String(h+1).padStart(2,"0")}</span><h3>${p}</h3><p>${l}</p></li>`).join("")}</ol>
      </section>

      <section class="wd-work" aria-label="The work on this site">
        <p>Curious about how I design? Explore the experiences I\u2019ve created.</p>
        <div class="acts"><a class="tl" href="#/templates">Explore Templates <span aria-hidden="true">\u2192</span></a><a class="tl" href="#/products">Discover Products <span aria-hidden="true">\u2192</span></a></div>
      </section>

      <section class="wd-form" id="wd-inquiry" aria-labelledby="wd-f" tabindex="-1">
        <div class="wd-form-t"><p class="kicker">Start a project</p><h2 id="wd-f">Tell me what you\u2019re imagining.</h2>
          <p>Have something in mind? Tell me about your idea, the kind of website you\u2019d love to create, and anything that inspires you.</p>
          <p class="note">Four things are needed; everything else is optional. I read every message personally.</p></div>
        <div class="wd-form-b glass">${Is(r)}</div>
      </section>
    </article>${a.footer()}`;let d=(p=!0)=>{let l=e.querySelector("#wd-inquiry");e.scrollTo({top:e.scrollTop+l.getBoundingClientRect().top-96,behavior:p&&!qr()?"smooth":"auto"}),setTimeout(()=>l.querySelector("[name=name]")?.focus({preventScroll:!0}),p&&!qr()?600:0)};e.querySelector("[data-to-form]").addEventListener("click",()=>{a.audio?.sfx("select"),ye("inquiry_start"),d()}),js(e,a),Ds(e),n.to==="inquiry"&&requestAnimationFrame(()=>requestAnimationFrame(()=>d(!1)))}function tn(e,a){e.innerHTML=`
    <article class="ab">
      <figure class="ab-pt${bo?" has":""}">${bo?`<img src="${bo}" alt="Carla Tres" decoding="async">`:'<span class="ab-pt-empty" aria-hidden="true"><img class="lt" src="./media/cards/orb.jpg" alt="" decoding="async"><img class="dk" src="./media/cards/orb-dark.jpg" alt="" decoding="async" loading="lazy"></span>'}
        <figcaption>Carla Tres \xB7 Lisbon</figcaption></figure>
      <div class="ab-t">
        <p class="kicker">About</p>
        <h1>Behind the work.</h1>
        <p class="ab-id"><b>Carla Tres</b><span>Creative Web Designer &amp; Developer</span><span>Based in Lisbon</span></p>
        <p>I\u2019m Carla, a web designer and developer creating digital experiences that go beyond traditional layouts.</p>
        <p>I love exploring how design, movement, materials and interaction can change the way we experience a website.</p>
        <p>THE ORB LIGHT is where I develop my own creative ideas, digital pieces and interactive templates \u2014 <a href="#/products">the products</a> and <a href="#/templates">the templates</a> are the work.</p>
        <p>I also design and build custom websites for people and brands who want something that feels genuinely their own.</p>
        <div class="acts"><a class="gb primary" href="#/design?to=inquiry">Let\u2019s Create Something</a><a class="tl" href="#/design">About Web Design <span aria-hidden="true">\u2192</span></a></div>
      </div>
    </article>${a.footer()}`}var an=`
/* \u2500\u2500 Web Design \xB7 About (2026-10-21) \u2014 same tokens, glass and type as the rest \u2500\u2500 */
.wd,.ab{padding:110px clamp(16px,4vw,56px) 40px;max-width:1240px;margin:0 auto}
.wd h1,.ab h1{margin:0 0 18px;font:200 clamp(34px,4vw,54px)/1.06 var(--font);letter-spacing:-.025em}
.wd h2{margin:0 0 16px;font:250 clamp(25px,2.4vw,34px)/1.15 var(--font);letter-spacing:-.015em;max-width:24ch}
.wd p,.ab p{line-height:1.6}
.wd .acts,.ab .acts{display:flex;flex-wrap:wrap;align-items:center;gap:14px 22px;margin-top:26px}
.wd .tl:hover,.ab .tl:hover{color:var(--ink)}
.wd section{margin-bottom:clamp(90px,11vw,150px)}
/* hero: editorial text, three sheets of glass \u2014 an unwritten page */
.wd-hero{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);gap:clamp(24px,5vw,70px);align-items:center;min-height:min(640px,calc(100svh - 150px))}
.wd-hero .lede{max-width:40ch}
.wd-stage{perspective:1400px;display:grid;place-items:center;min-height:360px}
.wd-sheets{--rx:0deg;--ry:0deg;position:relative;width:min(400px,80%);aspect-ratio:4/5;transform-style:preserve-3d;transform:rotateX(calc(8deg + var(--rx))) rotateY(calc(-16deg + var(--ry)));transition:transform .9s var(--ease)}
.sh{position:absolute;inset:0;border-radius:22px;background:linear-gradient(155deg,rgba(255,255,255,.5),rgba(255,255,255,.06) 34%,rgba(255,255,255,0) 60%,rgba(255,255,255,.22));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.98),inset 1px 0 0 rgba(255,255,255,.7),inset 0 0 0 1px rgba(255,255,255,.45),inset 0 -1px 0 rgba(150,156,152,.35),0 0 0 .5px rgba(38,40,39,.1),0 50px 80px -50px rgba(38,40,39,.4);-webkit-backdrop-filter:blur(1.5px) saturate(1.2) contrast(1.04);backdrop-filter:blur(1.5px) saturate(1.2) contrast(1.04)}
.sh-orb{position:absolute;left:18%;top:30%;width:64%;aspect-ratio:1;transform:translateZ(-30px);pointer-events:none}
.sh-orb img,.ab-pt-empty img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply;-webkit-mask-image:radial-gradient(circle closest-side at 50% 50%,#000 84%,transparent 99%);mask-image:radial-gradient(circle closest-side at 50% 50%,#000 84%,transparent 99%)}
.sh-orb .dk,.ab-pt-empty .dk{display:none}
.sh::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:linear-gradient(112deg,transparent 30%,rgba(255,255,255,.5) 44%,transparent 52%);opacity:.55}
.sh-3{transform:translate3d(16%,-12%,-120px);opacity:.6}
.sh-2{transform:translate3d(8%,-6%,-60px);opacity:.85}
.sh-2 i{position:absolute;left:12%;right:12%;height:1px;background:rgba(38,40,39,.12)}.sh-2 i:nth-child(1){top:30%}.sh-2 i:nth-child(2){top:52%}.sh-2 i:nth-child(3){top:74%}
.sh-1 b{position:absolute;left:12%;height:1px;background:rgba(38,40,39,.28);border-radius:1px}
.sh-1 .l1{top:16%;width:34%;height:2px;background:rgba(38,40,39,.5)}.sh-1 .l2{top:22%;width:56%}.sh-1 .l3{top:26%;width:44%}
/* custom: text and an index of possibilities */
.wd-custom{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(28px,6vw,90px);align-items:start}
.wd-custom-t p{max-width:48ch;color:var(--muted)}
.wd-list{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}
.wd-list li{display:grid;grid-template-columns:minmax(120px,.8fr) 1.4fr;gap:16px;padding:14px 0;border-bottom:1px solid var(--line);font-size:14.5px;transition:padding .35s var(--ease)}
.wd-list b{font-weight:500}.wd-list span{color:var(--muted);line-height:1.5}
.wd-list li:hover{padding-left:8px}
/* process: four beads on one line of light */
.wd-steps{list-style:none;margin:40px 0 0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:28px;position:relative}
.wd-steps::before{content:"";position:absolute;left:9px;right:0;top:9px;height:1px;background:linear-gradient(90deg,var(--ink),var(--line) 70%,transparent);opacity:.35}
.wd-step{position:relative;padding-top:38px;outline:none}
.wd-bead{position:absolute;left:0;top:0;width:19px;height:19px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#e6e8e6 55%,#c9cdca);box-shadow:inset 0 1px 1px #fff,0 0 0 1px rgba(38,40,39,.1),0 4px 10px -4px rgba(38,40,39,.4);transition:transform .45s var(--ease),box-shadow .45s}
.wd-step:hover .wd-bead,.wd-step:focus-visible .wd-bead{transform:scale(1.25);box-shadow:inset 0 1px 1px #fff,0 0 0 1px rgba(38,40,39,.16),0 0 18px 2px rgba(255,255,255,.9),0 6px 14px -4px rgba(38,40,39,.45)}
.wd-step:focus-visible h3{text-decoration:underline;text-underline-offset:4px}
.wd-n{font:500 12px/1 var(--mono);color:var(--faint);letter-spacing:.04em}
.wd-step h3{margin:10px 0 8px;font:400 18px/1.25 var(--font)}
.wd-step p{margin:0;font-size:14.5px;color:var(--muted);max-width:30ch}
/* a quiet pointer to the work already here */
.wd-work{text-align:center;padding:36px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.wd-work p{margin:0;font:300 clamp(18px,1.6vw,22px)/1.4 var(--font)}
.wd-work .acts{justify-content:center;margin-top:14px}
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
/* about */
.ab{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:clamp(28px,6vw,96px);align-items:center;min-height:calc(100svh - 220px)}
.ab-t{max-width:56ch}.ab-t>p:not(.kicker){color:var(--muted)}.ab-t a:not(.gb):not(.tl){color:var(--ink)}
.ab-id{display:flex;flex-wrap:wrap;gap:4px 14px;margin:0 0 20px;font-size:14px}.ab-id b{font-weight:500;color:var(--ink)}
.ab-id span{color:var(--faint)}.ab-id span::before{content:"\xB7";margin-right:14px}
.ab-pt{margin:0;max-width:420px;width:100%}
.ab-pt img,.ab-pt-empty{display:block;width:100%;aspect-ratio:4/5;border-radius:24px;object-fit:cover}
.ab-pt-empty{position:relative;overflow:hidden;background:radial-gradient(90% 70% at 50% 45%,#fbfbfa,#ecedeb);box-shadow:inset 0 1px 0 #fff,inset 0 0 0 1px rgba(255,255,255,.7),0 0 0 .5px rgba(38,40,39,.12),0 40px 70px -44px rgba(38,40,39,.45)}
.ab-pt-empty img{inset:22% 18%;width:64%;height:auto;aspect-ratio:1}
.ab-pt-empty::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:linear-gradient(118deg,rgba(255,255,255,.5),transparent 28%,transparent 62%,rgba(255,255,255,.28))}
.ab-pt figcaption{margin-top:12px;font-size:12.5px;color:var(--faint)}
/* home: the Web Design card's glimpse, and what Products holds */
.dg-design{background:radial-gradient(80% 60% at 50% 45%,#fff,#e6e8e6)}
.dg-sheet{position:relative;width:58%;aspect-ratio:3/4;border-radius:12px;background:linear-gradient(155deg,rgba(255,255,255,.95),rgba(255,255,255,.35) 45%,rgba(255,255,255,.6));box-shadow:inset 0 0 0 1px rgba(255,255,255,.8),0 0 0 1px rgba(38,40,39,.07),0 24px 40px -24px rgba(38,40,39,.45);transform:rotate(-4deg)}
.dg-sheet i{position:absolute;left:14%;height:1px;background:rgba(38,40,39,.3)}.dg-sheet .s1{top:14%;width:40%;height:2px;background:rgba(38,40,39,.55)}.dg-sheet .s2{top:21%;width:60%}
.dg-sheet .s3{left:14%;right:14%;top:44%;height:28%;background:none;display:grid;grid-template-columns:repeat(3,1fr);gap:8%}.dg-sheet .s3 b{border-radius:6px;box-shadow:inset 0 0 0 1px rgba(38,40,39,.14)}
.dg-sheet em{position:absolute;left:14%;bottom:10%;font:italic 300 13px/1 var(--font);color:var(--muted)}
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
html[data-theme=dark] .sh{background:linear-gradient(155deg,rgba(255,255,255,.13),rgba(255,255,255,.03) 42%,rgba(255,255,255,.015) 64%,rgba(255,255,255,.07));box-shadow:inset 0 1px 0 rgba(255,255,255,.22),inset 0 0 0 1px rgba(255,255,255,.08),inset 0 -18px 30px -24px rgba(230,220,200,.12),0 40px 70px -40px rgba(0,0,0,.9)}
html[data-theme=dark] .sh::after{background:linear-gradient(112deg,transparent 30%,rgba(255,255,255,.12) 44%,transparent 52%)}
html[data-theme=dark] .sh-1 b,html[data-theme=dark] .sh-2 i{background:rgba(236,237,234,.22)}html[data-theme=dark] .sh-1 .l1{background:rgba(236,237,234,.5)}
html[data-theme=dark] .sh-orb .lt,html[data-theme=dark] .ab-pt-empty .lt{display:none}html[data-theme=dark] .sh-orb .dk,html[data-theme=dark] .ab-pt-empty .dk{display:block;mix-blend-mode:screen}
html[data-theme=dark] .ab-pt-empty{background:radial-gradient(90% 70% at 50% 45%,#161718,#0a0a0b)}html[data-theme=dark] .ab-pt-empty::after{background:linear-gradient(118deg,rgba(255,255,255,.07),transparent 30%,transparent 62%,rgba(255,255,255,.04))}
html[data-theme=dark] .iq-done-orb,html[data-theme=dark] .wd-bead{background:radial-gradient(circle at 42% 64%,rgba(255,255,255,.9) 0 12%,transparent 46%),radial-gradient(circle at 35% 28%,rgba(255,255,255,.5),rgba(255,255,255,.08) 55%,rgba(230,220,200,.12));box-shadow:inset 0 1px 1px rgba(255,255,255,.35),inset 0 0 0 1px rgba(255,255,255,.12),0 10px 24px -10px rgba(0,0,0,.9)}
html[data-theme=dark] .ch span{background:rgba(255,255,255,.04);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
html[data-theme=dark] .ch input:checked+span{background:rgba(255,255,255,.12);box-shadow:inset 0 0 0 1.5px var(--ink),inset 0 1px 0 rgba(255,255,255,.2)}
html[data-theme=dark] .iq .gi:focus{box-shadow:inset 0 0 0 1.5px var(--ink),0 0 0 5px rgba(255,255,255,.05)}
html[data-theme=dark] .err,html[data-theme=dark] .iq-status[role=alert]{color:#e0a397}
html[data-theme=dark] .iq .gi[aria-invalid]{box-shadow:inset 0 0 0 1.5px #c98477}
html[data-theme=dark] .nv-p a:hover,html[data-theme=dark] .nv-p a:focus-visible{background:rgba(255,255,255,.06)}
html[data-theme=dark] .dg-design{background:radial-gradient(80% 60% at 50% 45%,#232425,#111213)}
html[data-theme=dark] .dg-sheet{background:linear-gradient(155deg,rgba(255,255,255,.16),rgba(255,255,255,.03) 45%,rgba(255,255,255,.08));box-shadow:inset 0 1px 0 rgba(255,255,255,.25),inset 0 0 0 1px rgba(255,255,255,.08),0 24px 40px -24px rgba(0,0,0,.9)}
html[data-theme=dark] .dg-sheet i:not(.s3){background:rgba(236,237,234,.3)}html[data-theme=dark] .dg-sheet .s3 b{box-shadow:inset 0 0 0 1px rgba(236,237,234,.16)}
html[data-theme=dark] .wd-steps::before{background:linear-gradient(90deg,var(--champagne,#E6DCC8),var(--line) 70%,transparent)}
@media (max-width:900px){
  .wd-hero,.wd-custom,.wd-form,.ab{grid-template-columns:1fr}
  .wd-hero{min-height:0}.wd-stage{min-height:300px;order:-1}.wd-sheets{width:min(300px,64%)}
  .wd-form-t{position:static}
  .wd-steps{grid-template-columns:1fr 1fr;row-gap:40px}
  .ab-pt{max-width:340px}
}
@media (max-width:640px){
  .wd,.ab{padding-top:128px}
  .wd-steps{grid-template-columns:1fr;gap:28px;padding-left:34px}
  .wd-steps::before{left:9px;right:auto;top:0;bottom:0;width:1px;height:auto;background:linear-gradient(180deg,var(--ink),var(--line) 70%,transparent)}
  .wd-step{padding-top:0}.wd-bead{left:-34px}
  .iq-row2{grid-template-columns:1fr}
  .wd-list li{grid-template-columns:1fr;gap:4px}
  .wd-form-b{padding:18px;border-radius:20px}
  .ab-pt{order:2;max-width:220px}.ab-id{flex-direction:column;gap:2px}.ab-id span::before{content:none}
  .nv-p{width:min(260px,calc(100vw - 24px))}
}
@media (prefers-reduced-motion:reduce){.wd-sheets,.wd-bead,.wd-list li,.nv-x svg{transition:none}.iq-more[open] .iq-more-b,.iq-done-orb{animation:none}}
`;var ea=(e,a=0,n=1)=>Math.min(n,Math.max(a,e)),_a=(e,a,n)=>e+(a-e)*n,ta=e=>{let a=ea(e);return a*a*(3-2*a)},Ns=(e,a,n,r,d)=>ta((e-a)/(n-a))*(1-ta((e-r)/(d-r))),re=e=>String(e).replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),Ta={get:(e,a)=>{try{return JSON.parse(sessionStorage.getItem(e))??a}catch{return a}},set:(e,a)=>{try{sessionStorage.setItem(e,JSON.stringify(a))}catch{}}},we={play:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>',replay:'<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/></svg>',prev:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',mute:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',moon:'<svg viewBox="0 0 24 24"><path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z"/></svg>',sun:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.8"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg>',user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M4.5 20c1.4-3.6 4.2-5.4 7.5-5.4s6.1 1.8 7.5 5.4"/></svg>',heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/></svg>',back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',down:'<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',bag:'<svg viewBox="0 0 24 24"><path d="M5.5 8.5h13l-1 11h-11z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5.5" y="10.5" width="13" height="9" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',orb:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="11" cy="15" r="1.6" fill="currentColor" stroke="none"/></svg>'},yo={pieces:"products",materials:"products"};function rn(e){let{orb:a,reduced:n}=e,r=Ko(),d=document.createElement("style");d.textContent=li+di+an+ci,document.head.append(d),document.documentElement.classList.add("lo-on");let p=qi(e),l=wo("main","lo");l.setAttribute("aria-label","The Light Orb"),l.tabIndex=-1;let h=wo("div","lo-top");document.body.append(l,h),h.innerHTML=`
    <header class="hd" data-hd>
      <a class="wm" href="#/" aria-label="The Light Orb \u2014 Home" data-home>${mo}</a>
      <nav class="nav" aria-label="Main">${Vr.map(t=>t.children?`<div class="nv-g" data-nvg><a href="${t.route}" data-nav="${t.id}" data-top>${t.label}</a><button class="nv-x" type="button" data-nvx aria-expanded="false" aria-controls="nv-${t.id}" aria-label="${t.label}: ${t.children.map(i=>i.label).join(", ")}">${we.down}</button>
        <div class="menu pane nv-p" id="nv-${t.id}" data-nvp hidden>${t.children.map(i=>`<a href="${i.route}" data-sub="${i.id}"><b>${i.label}</b><small>${i.line}</small></a>`).join("")}</div></div>`:`<a href="${t.route}" data-nav="${t.id}" data-top>${t.label}</a>`).join("")}</nav>
      <div class="hd-r">
        <a class="nav-m" href="#/membership" data-nav="membership">Membership</a>
        <div class="snd" data-sndhost></div>
        <div class="thm"><button class="gb gc small" type="button" data-theme-btn aria-pressed="false" aria-label="Dark mode" title="Dark mode">${we.moon}</button></div>
        <div class="cartw"${" hidden"}><button class="gb gc small" type="button" data-cartbtn aria-haspopup="dialog" aria-expanded="false" aria-label="Cart">${we.bag}<span class="cart-n" data-cartn hidden></span></button>
          <div class="menu pane cart-p" role="dialog" aria-label="Cart" data-cartp hidden></div></div>
        <a class="gb gc small" href="#/account" aria-label="Account" data-nav="account">${we.user}</a>
      </div>
    </header>
    <button class="guide-hit" type="button" data-guide aria-label="Talk with the Orb"></button>
    <div class="caption" data-caption aria-live="polite"></div>`,h.querySelectorAll("[data-nvg]").forEach(t=>{let i=t.querySelector("[data-nvx]"),u=t.querySelector("[data-nvp]"),g=0,v=(y,R)=>{clearTimeout(g),u.hidden!==!y&&(u.hidden=!y,i.setAttribute("aria-expanded",String(y)),t.classList.toggle("open",y),R&&y&&u.querySelector("a")?.focus())};i.addEventListener("click",()=>{v(u.hidden),r.sfx(u.hidden?"close":"open")}),i.addEventListener("keydown",y=>{y.key==="ArrowDown"&&(y.preventDefault(),v(!0,!0))}),t.addEventListener("pointerenter",y=>{y.pointerType==="mouse"&&v(!0)}),t.addEventListener("pointerleave",y=>{y.pointerType==="mouse"&&(g=setTimeout(()=>v(!1),220))}),t.addEventListener("keydown",y=>{y.key==="Escape"&&!u.hidden&&(v(!1),i.focus())}),u.addEventListener("keydown",y=>{let R=[...u.querySelectorAll("a")],L=R.indexOf(document.activeElement);(y.key==="ArrowDown"||y.key==="ArrowUp")&&(y.preventDefault(),R[(L+(y.key==="ArrowDown"?1:R.length-1))%R.length].focus())}),t.addEventListener("focusout",y=>{t.contains(y.relatedTarget)||v(!1)}),document.addEventListener("pointerdown",y=>{t.contains(y.target)||v(!1)}),addEventListener("hashchange",()=>v(!1))});let f=h.querySelector("[data-hd]"),b=h.querySelector("[data-caption]"),w=h.querySelector("[data-guide]"),x=h.querySelector("[data-theme-btn]"),ie=()=>{let t=Ra()==="dark";x.setAttribute("aria-pressed",String(t)),x.innerHTML=t?we.sun:we.moon,x.setAttribute("aria-label","Dark mode"),x.title=t?"Switch to light mode":"Switch to dark mode"};ie(),x.addEventListener("click",()=>{ni(Ra()==="dark"?"light":"dark"),ye(`theme_${Ra()}`)}),document.addEventListener("lightorb:theme",()=>{ie(),G.name!=="studio"&&(je(),p.reapply())});let Ee=No(h.querySelector("[data-sndhost]"),r.store,{buttonClass:"gb gc small",onToggle:(t,i)=>{ye(`${t==="voice"?"voice":"sound"}_${i?"on":"off"}`),t==="sfx"&&i&&r.sfx("select")}}),s=0;r.store.on((t,i)=>{i.voice&&!r.voiceOn&&(dt=null,ze())});let I=()=>{r.voiceOn||r.toggle("voice",!0)},O=0,z=0,ee=null,fe=(()=>{let t=document.createElement("canvas").getContext("2d");return i=>(t.font=getComputedStyle(b).font,t.measureText(i).width)})();function Z(t){let i=Math.min(560,innerWidth*.84)-34,u=[],g="";for(let v of String(t).split(/\s+/).filter(Boolean)){let y=g?`${g} ${v}`:v;g&&fe(y)>i?(u.push(g),g=v):g=y}return g&&u.push(g),u.length?u:[""]}function W(t,{follow:i=!1}={}){let u=Z(t),g=Math.max(1,String(t).length),v=++z,y=performance.now(),R=Math.max(3200,g*70),L=-1;clearTimeout(O),b.classList.add("on");let N=()=>{if(v!==z)return;let X=i&&r.playing&&r.state.kind==="guide"&&r.state.clip!=="speech"&&r.position>0?r.position:(performance.now()-y)/R,j=0,E=0;for(;E<u.length-1&&(j+=u[E].length+1,!(X*g<j));E++);E!==L&&(L=E,b.textContent=u[E]),X<1||i&&r.playing&&r.state.kind==="guide"?requestAnimationFrame(N):O=setTimeout(()=>{v===z&&(b.classList.remove("on"),ee=null,U())},900)};N()}function U(){let t=r.prefs;l.querySelectorAll("[data-enable]").forEach(u=>{u.hidden=t.master});let i=r.state.clip?.split(".")[0];if(hr[i]&&i!=="home"){let u=r.state.kind==="guide"&&["playing","loading"].includes(r.state.status);u&&ee!==i?(ee=i,W(hr[i],{follow:!0})):!u&&ee===i&&(ee=null,z++,b.classList.remove("on"))}}r.on(U),r.on(()=>{!r.playing&&r.state.status!=="loading"&&document.querySelectorAll("[data-speaking]").forEach(t=>t.removeAttribute("data-speaking"))});let Pe=h.querySelector("[data-cartbtn]"),ae=h.querySelector("[data-cartp]"),$e=h.querySelector("[data-cartn]");function Oe(){let t=Lt.items();$e.hidden=!t.length,$e.textContent=t.length,ae.innerHTML=`<p class="kicker">Cart</p>${t.length?`<ul class="cart-l">${t.map(i=>`<li><a href="${i.href}">${re(i.name)}</a><button class="pill" type="button" data-cartrm="${i.id}">Remove</button></li>`).join("")}</ul>`:'<p class="note">Your cart is empty.</p>'}
      ${jt.canCheckout(t)?'<button class="gb primary" type="button" data-checkout>Checkout</button>':'<button class="gb primary" type="button" disabled>Checkout opens soon</button><p class="note">No payment can be taken yet; items stay in this browser.</p>'}`,ae.querySelector("[data-checkout]")?.addEventListener("click",()=>{let i=jt.checkout(Lt.items());i&&Lt.remove(i)}),ae.querySelectorAll("[data-cartrm]").forEach(i=>i.addEventListener("click",()=>{Lt.remove(i.dataset.cartrm),r.sfx("close")}))}Lt.on(Oe),Oe();let Ue=t=>{ae.hidden=!t,Pe.setAttribute("aria-expanded",String(t)),r.sfx(t?"open":"close")};Pe.addEventListener("click",()=>Ue(ae.hidden)),document.addEventListener("pointerdown",t=>{!ae.hidden&&!t.target.closest(".cartw")&&Ue(!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!ae.hidden&&(Ue(!1),Pe.focus())});let lt={emission:1,voice:Kr.voice},je=()=>{lt=fr(a,At(Kr)),a.setRibbon?.(0)};je();let Me=()=>({home:"home",products:"products",templates:"templates",studio:"studio",sound:"sound"})[G.name],De=()=>matchMedia("(pointer: coarse)").matches&&Math.min(innerWidth,innerHeight)<820,ke=t=>{try{return localStorage.getItem(t)}catch{return null}},Te=t=>{try{localStorage.setItem(t,"1")}catch{}},Q="en",C=null,$=document.createElement("style");$.textContent=`.orb-ask{position:fixed;left:50%;bottom:calc(18px + env(safe-area-inset-bottom,0px));transform:translate(-50%,6px);z-index:30;display:flex;align-items:center;gap:8px;width:min(420px,calc(100vw - 32px));box-sizing:border-box;
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
@media (pointer:coarse) and (max-width:820px){.caption{font-size:13.5px;line-height:1.35}}`,document.head.append($);let F='<svg viewBox="0 0 24 24"><rect x="9" y="3.5" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v2.5"/></svg>',K='<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5"/></svg>',A=wo("form","orb-ask");A.hidden=!0,A.setAttribute("role","search"),A.setAttribute("aria-label","Ask the Orb"),A.innerHTML=`<span class="st" data-st aria-live="polite"></span><input type="text" data-q placeholder="${Q==="es"?"Pregunta a la Orb\u2026":"Ask the Orb\u2026"}" aria-label="Ask the Orb" autocomplete="off" enterkeyhint="send" maxlength="300">
    <button type="button" data-mic aria-label="Speak" aria-pressed="false"${uo?"":" hidden"}>${F}</button><button type="submit" aria-label="Send">${K}</button>`,h.append(A);let B=A.querySelector("[data-st]"),te=A.querySelector("[data-q]"),pe=A.querySelector("[data-mic]");w.setAttribute("aria-label","Talk with the Orb");let ne=!uo,_=()=>{A.hidden=!1,document.body.classList.add("orb-asking"),requestAnimationFrame(()=>A.classList.add("on"))},oe=()=>{M++,Ne(),A.classList.remove("on"),A.hidden=!0,document.body.classList.remove("orb-asking"),te.blur()};function Ne(){if(ce){let t=ce;ce=null,t.abort()}pe.setAttribute("aria-pressed","false"),B.textContent=""}function wt(){ne||ce||(r.stop(),C=null,B.textContent=Q==="es"?"Escuchando\u2026":"Listening\u2026",pe.setAttribute("aria-pressed","true"),ce=Oi({lang:Q==="es"?"es-ES":/^en/i.test(navigator.language)?navigator.language:"en-US",onresult:t=>{B.textContent="",te.value=t},onerror:t=>{ce=null,pe.setAttribute("aria-pressed","false"),B.textContent="",(t==="not-allowed"||t==="service-not-allowed"||t==="unsupported")&&(ye("mic_denied"),ne=!0,pe.hidden=!0,Xe(za("reply.mic",Q),"answer"),De()||te.focus())},onend:t=>{ce&&(ce=null,pe.setAttribute("aria-pressed","false"),B.textContent="",te.value="",t.trim()&&Y(t))}}),ce||(pe.setAttribute("aria-pressed","false"),B.textContent=""))}pe.addEventListener("click",()=>{ce?Ne():wt()}),te.addEventListener("input",()=>{ce&&Ne()}),A.addEventListener("submit",t=>{t.preventDefault();let i=te.value.trim();te.value="",Ne(),i&&(ye("orb_typed"),Y(i))}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!A.hidden&&oe()}),document.addEventListener("pointerdown",t=>{!A.hidden&&!t.target.closest(".orb-ask,[data-guide]")&&!te.value&&!ce&&oe()});let ce=null,dt=null,Qe=null;w.addEventListener("pointerdown",t=>{Qe={x:t.clientX,y:t.clientY}}),w.addEventListener("click",()=>{if(I(),se=performance.now()/1e3,ye("orb_tap"),ce){Ne();return}let t=Qe&&document.elementsFromPoint(Qe.x,Qe.y).map(He).find(Boolean);if(Qe=null,t){ct(t);return}if(r.playing||r.state.status==="loading"){ze();return}r.sfx("select"),_(),Te("lo:orb:greet"),ze(),Xe(he(),"answer")});function ze(){s++,M++,Ne(),r.stop(),C=null,Ge=null,fa=null,ue(""),document.querySelectorAll("[data-speaking]").forEach(t=>t.removeAttribute("data-speaking"))}document.addEventListener("keydown",t=>{t.key==="Escape"&&(r.playing||r.state.status==="loading")&&ze()});let nt="h1,h2,h3,h4,p,blockquote,figcaption,li,dt,dd,[data-speak]",kt="a,button,[data-href],[role=button]:not([data-speak]),[role=tab],summary,label,input,select,textarea,[contenteditable]",ut=`${kt},form,.hd,.sndc,.orb-ask,.caption,[data-ins],[data-rail],[data-view],[data-modal],[data-hud],.menu,.cart-p,.arc,.dg`,Ke=t=>{let i=(t.getAttribute("aria-label")||t.innerText||t.textContent||"").replace(/\s+/g," ").trim();return/^\S+\.(m4a|wav|mp3|json|js|html|zip)$/i.test(i)?"":i},He=t=>{let i=t?.closest?.(nt);return i&&l.contains(i)&&!i.closest(ut)&&!i.querySelector("input,select,textarea,button")&&Ke(i).length>1&&Ke(i).length<900?i:null},Gt=t=>{let i=2166136261;for(let u=0;u<t.length;u++)i^=t.charCodeAt(u),i=Math.imul(i,16777619);return`text.${(i>>>0).toString(36)}`},Ge=null,fa=null;function ct(t,i=Ke(t)){if(i){if(fa===t&&(r.playing||r.state.status==="loading")){ze();return}I(),ze(),ye("words_spoken"),fa=t,Ge=Gt(i),t.setAttribute("data-speaking",""),Xe({id:Ge,text:i,lang:"en"},"answer")}}l.addEventListener("click",t=>{if(t.target.closest?.(kt)||String(getSelection?.()??"").trim())return;let i=He(t.target);i&&ct(i)}),l.addEventListener("keydown",t=>{if((t.key==="Enter"||t.key===" ")&&!t.altKey&&t.target.matches?.(nt)&&He(t.target)===t.target&&(t.preventDefault(),ct(t.target)),t.key==="Enter"&&t.altKey&&t.target.closest?.("a,button")){t.preventDefault();let i=t.target.closest("a,button");ct(i,Ke(i))}});let Ga=()=>l.querySelectorAll("h1,h2,h3,blockquote p,[data-speak]").forEach(t=>{He(t)===t&&!t.hasAttribute("tabindex")&&t.setAttribute("tabindex","0")}),gt=null;l.addEventListener("pointerover",t=>{let i=t.pointerType==="mouse"&&!t.target.closest?.(kt)?He(t.target):null;i!==gt&&(gt?.classList.remove("rd"),gt=i,i?.classList.add("rd"))}),l.addEventListener("pointerleave",()=>{gt?.classList.remove("rd"),gt=null});let St=null,Yt=!1;addEventListener("pointerdown",t=>{let i=t.target.closest?.("a,button,[data-href],.arc-c,.dg-c");!i||i.closest("[data-guide],[data-sound],.sndc,.sx,.orb-ask")||!Ke(i)||i.querySelector("svg")&&!i.innerText.trim()||(St={t:i,x:t.clientX,y:t.clientY,timer:setTimeout(()=>{Yt=!0,ct(i,Ke(i))},520)})},!0);let ht=t=>{St&&(t.type!=="pointermove"||Math.hypot(t.clientX-St.x,t.clientY-St.y)>8)&&(clearTimeout(St.timer),St=null)};if(addEventListener("pointermove",ht,!0),addEventListener("pointerup",ht,!0),addEventListener("pointercancel",ht,!0),addEventListener("click",t=>{Yt&&(Yt=!1,t.preventDefault(),t.stopPropagation())},!0),addEventListener("contextmenu",t=>{(Yt||St)&&t.preventDefault()},!0),!ke("lo:orb:greet")){let t=i=>{if(i.target.closest?.("[data-guide],.orb-ask,.sndc")||(removeEventListener("pointerdown",t,!0),!De()))return;let u=s;setTimeout(()=>{u!==s||!r.voiceOn||ke("lo:orb:greet")||C||ce||(Te("lo:orb:greet"),Xe(za("reply.greet",Q),"answer"))},900)};addEventListener("pointerdown",t,!0)}function Xe(t,i="answer"){if(!t?.text||!r.voiceOn)return;W(t.text,{follow:!0}),se=performance.now()/1e3,C=i,r.say(t.text,{id:t.lang==="es"?void 0:t.id??void 0,lang:t.lang,onend:()=>{C===i&&(C=null)}})||(C=null)}let k=[],M=0,D=(t,i)=>{for(k.push({role:t,content:i});k.length>12;)k.shift();for(;k.length&&k[0].role!=="user";)k.shift()};function J(){let t=Ya(),i=t.name==="products"&&t.id?Mt.find(u=>u.id===t.id):null;return{route:location.hash||"#/",title:document.title,presentation:he("en").text,product:i?.name,variant:i?t.query.variant||(i.id==="orb"?"clear":void 0):void 0,lang:Q}}async function Y(t){Q=$r(t,Q);let i=zi(t,{here:G.name,presentation:he,lang:Q});if(ye(i.intent==="fallback"?"orb_fallback":"orb_command",{intent:i.intent||(i.stop?"stop":i.back?"back":i.go?`go:${i.go.split("?")[0].replace("#/","")}`:"answer")}),!i.command&&i.intent!=="hello"&&Ri()&&t.trim()){let u=++M;ue("\u2026"),D("user",t.trim());try{let g=await Ii(k.slice(),J());return u!==M?void 0:(D("assistant",g.say),de({say:g.say,go:g.go,lang:$r(g.say,Q)}))}catch{if(u!==M)return;k.pop()}}de(i)}function de(t){if(t.stop){r.stop(),C=null,ue("");return}if(t.back&&history.back(),t.go&&location.hash!==t.go){dt=t.say?{text:t.say,id:t.id,lang:t.lang}:null,location.hash=t.go;return}t.say?Xe({text:t.say,id:t.id,lang:t.lang},"answer"):t.go||ue("")}function ue(t){clearTimeout(O),z++,b.textContent=t,b.classList.toggle("on",!!t),t||U()}let se=-99,ge=0,he=(t=Q)=>Qo(t,G.name,G.id);function Et(){Xe(he(),"arrival")}let $t=!1,Ye=()=>l.scrollTop>innerHeight*.25;function Dt(){if(!r.voiceOn||$t||ke("lo:orb:greet")||C==="answer"||ce||Ye())return;$t=!0,Te("lo:orb:greet");let t=s,i=za("reply.greet",Q),u=()=>{t===s&&r.voiceOn&&G.name==="home"&&!C&&!ce&&!Ye()&&Xe(i,"arrival")};if(navigator.userActivation&&!navigator.userActivation.hasBeenActive){W(i.text);let g=v=>{removeEventListener("pointerdown",g,!0),removeEventListener("keydown",g,!0),!v.target.closest?.("[data-guide],.orb-ask,.sndc")&&setTimeout(u,250)};addEventListener("pointerdown",g,!0),addEventListener("keydown",g,!0);return}u()}function aa(t){let i=dt,u=s;dt=null,ce&&!i&&Ne(),setTimeout(()=>{if(!(u!==s||location.hash!==t||!r.voiceOn)){if(i){Xe(i,"answer");return}G.name==="home"&&Dt()}},450)}let G={name:""},et=null,tt=[],ra={products:"Products",templates:"Templates",studio:"Studio",sound:"Sound",membership:"Membership",account:"Account",signin:"Sign in",signup:"Sign up",design:"Web Design",about:"About",...Vi};function Ya(){let[t,i=""]=(location.hash.replace(/^#/,"")||"/").split("?"),u=t.split("/").filter(Boolean),g=Object.fromEntries(new URLSearchParams(i));return{name:yo[u[0]]||u[0]||"home",id:u[1]||null,query:g,raw:u[0]}}function sr(){let t=Ya();if(t.raw&&yo[t.raw]){location.replace(`#/${yo[t.raw]}${t.id?"/"+t.id:""}`);return}if(!["home","products","templates","studio","sound","membership","account","signin","signup","privacy","terms","licence","design","about"].includes(t.name)){location.replace("#/");return}tt.forEach(v=>v()),tt=[],xe=null,et&&t.name!=="studio"&&(et.leave(),et=null),p.hide(),er(),e.removeBackdrop(Ie.canvas),je();let i=G.name;G=t,s++,M++,document.title=G.name==="home"?"The Light Orb":`${ra[G.name]??G.name} \xB7 The Light Orb`,l.className=`lo r-${G.name}`,document.body.dataset.route=G.name,Bo(),G.name==="studio"&&i!=="studio"&&ye("studio_open"),h.querySelectorAll("[data-nav]").forEach(v=>v.toggleAttribute("aria-current",(Ho[v.dataset.nav]??[v.dataset.nav]).includes(G.name)||v.dataset.nav==="account"&&["account","signin","signup"].includes(G.name))),h.querySelectorAll("[data-sub]").forEach(v=>v.toggleAttribute("aria-current",v.dataset.sub===G.name)),i&&ze(),({home:lr,products:G.id?at:be,templates:G.id?hn:gn,studio:fn,sound:Lo,membership:()=>Hi(l,zt),account:()=>Ha(l,zt,G.id),signin:()=>ho(l,zt,"in"),signup:()=>ho(l,zt,"up"),privacy:()=>Mr(l,zt,"privacy"),terms:()=>Mr(l,zt,"terms"),licence:()=>Mr(l,zt,"licence"),design:()=>en(l,zt,G.query),about:()=>tn(l,zt)}[G.name]??lr)(),vr(l),Ga();let g=Ta.get(`lo:scroll:${location.hash}`,null);l.scrollTop=g??0,aa(location.hash),i&&l.focus({preventScroll:!0})}let oa=-1e9;l.addEventListener("scroll",()=>{oa=performance.now(),Ta.set(`lo:scroll:${location.hash}`,l.scrollTop),G.name==="home"&&C==="arrival"&&Ye()&&(r.stop(),C=null,ue(""))},{passive:!0}),addEventListener("hashchange",sr),h.querySelector("[data-home]").addEventListener("click",t=>{t.preventDefault(),Ta.set("lo:scroll:#/",0),G.name==="home"?l.scrollTo({top:0,behavior:n?"auto":"smooth"}):location.hash="#/"});let zt={page:l,audio:r,ICON:we,esc:re,store:_e,go:t=>{location.hash=t},flash:W,api:e,product:p,footer:()=>Vt()},Ae=Ta.get("lo:sel",0),Rt=[],Wa=new URLSearchParams(location.search).get("sel");Wa&&Ta.set("lo:selv",Wa);let ia=Ta.get("lo:selv","arc")==="grid";function lr(){if(l.innerHTML=`
      <section class="wel" aria-labelledby="hello">
        <div class="wel-copy ${n?"shown":"reveal"}" data-welcopy>
          <h1 id="hello" class="wel-h"><span>Hello.</span></h1>
          <p class="wel-line">A space for creative possibilities.</p>
          <a class="gb primary wel-go" href="#select" data-go>Let\u2019s go</a>
        </div>
        <div class="wel-ctl"><button class="gb small" type="button" data-enable>${we.sound}<span>Enable sound</span></button><a class="tl" href="intro.html?replay">Replay intro</a></div>
      </section>
      <section class="qt" aria-label="Quotation">
        <figure class="qt-fig" data-qt><blockquote><p data-speak>${Xa.text}</p></blockquote>
          <figcaption>${Xa.author} \xB7 <a href="${Xa.source}" rel="noopener" target="_blank">${Xa.work}</a></figcaption></figure>
      </section>
      <section class="sel${ia?" sel-grid":""}" id="select" aria-labelledby="sel-t">
        <h2 id="sel-t" class="sel-t"><span data-speak tabindex="0">Where would you like to begin?</span></h2>
        ${ia?`<nav class="dg" aria-label="Destinations">${Jt.map((t,i)=>`<a class="dg-c" href="${t.route}" data-c="${i}">${Wt(t)}<span class="dg-t">${t.label}</span><span class="dg-s">${t.line}</span></a>`).join("")}</nav>`:`<div class="arc" data-arc role="group" aria-roledescription="carousel" aria-label="Destinations">
          ${Jt.map((t,i)=>`<a class="arc-c" href="${t.route}" data-c="${i}" aria-label="${t.label}: ${t.line}">${Wt(t,"arc-img")}<span class="arc-l">${t.label}</span><span class="arc-s">${t.line}</span></a>`).join("")}
        </div>
        <div class="arc-ctl"><button class="gb gc small" type="button" data-step="-1" aria-label="Previous">${we.prev}</button>
          <div class="segbar" role="tablist" aria-label="Choose destination">${Jt.map((t,i)=>`<button class="pill" role="tab" type="button" data-dot="${i}">${t.label}</button>`).join("")}</div>
          <button class="gb gc small" type="button" data-step="1" aria-label="Next">${we.next}</button></div>`}
        <p class="sel-more">Inside Products: <a href="#/products">Digital Pieces</a><span aria-hidden="true">\xB7</span><a href="#/sound">Sound</a><span aria-hidden="true">\xB7</span><a href="#/studio">Studio</a></p>
      </section>
      ${Vt()}`,Rt=[...l.querySelectorAll("[data-c]")],l.querySelector("[data-go]").addEventListener("click",t=>{t.preventDefault(),r.sfx("select"),l.scrollTo({top:l.scrollTop+l.querySelector("#sel-t").getBoundingClientRect().top-110,behavior:n?"auto":"smooth"})}),l.querySelector("[data-enable]").addEventListener("click",()=>{ye("sound_enable"),r.set({guide:!0,sfx:!0}),r.sfx("confirm"),De()||Et()}),ia)Rt.forEach((t,i)=>{t.addEventListener("pointerenter",()=>mt(i)),t.addEventListener("focus",()=>mt(i)),t.addEventListener("click",()=>{r.sfx("open"),ye("destination",{id:Jt[i].id})})}),na(!0);else{l.querySelectorAll("[data-step]").forEach(i=>i.addEventListener("click",()=>mt(Ae+ +i.dataset.step))),l.querySelectorAll("[data-dot]").forEach(i=>i.addEventListener("click",()=>mt(+i.dataset.dot))),Rt.forEach((i,u)=>i.addEventListener("click",g=>{if(sa){g.preventDefault();return}u!==Ae?(g.preventDefault(),mt(u)):(r.sfx("open"),ye("destination",{id:Jt[u].id}))}));let t=l.querySelector("[data-arc]");t.addEventListener("keydown",i=>{i.key==="ArrowRight"&&(mt(Ae+1),i.preventDefault()),i.key==="ArrowLeft"&&(mt(Ae-1),i.preventDefault())}),la(t,i=>mt(Ae+i),()=>na()),na(!0)}U()}function So(t){let i=String(Jt.indexOf(t)+1).padStart(2,"0");return`<span class="arc-img cv cv-${t.id}"><span class="cv-grain"></span><span class="cv-n">${i}</span><span class="cv-t">${t.label}</span></span>`}function Wt(t,i=""){let u={products:'<img class="lo-light-only" src="./media/cards/products.jpg" alt="" decoding="async" fetchpriority="low"><img class="lo-dark-only" src="./media/cards/products-dark.jpg" alt="" decoding="async" loading="lazy" fetchpriority="low">',templates:'<span class="dg-win"><img class="lo-light-only" src="./media/templates/the-light-orb.cover.jpg" alt="" decoding="async" fetchpriority="low"><img class="lo-dark-only" src="./media/cards/templates-dark.jpg" alt="" decoding="async" loading="lazy" fetchpriority="low"></span>',studio:'<img src="./media/cards/orb-dark.jpg" alt="" decoding="async" fetchpriority="low">',design:'<span class="dg-sheet" aria-hidden="true"><i class="s1"></i><i class="s2"></i><i class="s3"><b></b><b></b><b></b></i><em>Your idea</em></span>',sound:`<span class="cv-wave">${[.3,.55,.8,.45,.95,.6,.35,.7,.5,.85,.4,.65,.3,.5].map(g=>`<i style="--h:${g}"></i>`).join("")}</span>`}[t.id];return`<span class="dg-img dg-${t.id} ${i}">${u}</span>`}function mt(t,i=!0){let u=ea(t,0,Jt.length-1);u!==Ae&&(Ae=u,Ta.set("lo:sel",Ae),i&&r.sfx("detent"),a.nudge?.(.5)),na()}function na(t){if(ia){Rt.forEach((g,v)=>g.classList.toggle("on",v===Ae));return}let i=Rt[0]?.offsetWidth||300,u=i*.7;Rt.forEach((g,v)=>{let y=v-Ae+Nt/(u*1.2),R=Math.abs(y);g.style.transition=t||ba?"none":"",g.style.transform=`translateX(${y*u}px) translateZ(${-R*150}px) rotateY(${ea(-y*30,-48,48)}deg) scale(${1-Math.min(R,2)*.1})`,g.style.zIndex=String(10-Math.round(R)),g.classList.toggle("on",v===Ae),g.tabIndex=v===Ae?0:-1,g.setAttribute("aria-current",v===Ae?"true":"false")}),l.querySelectorAll("[data-dot]").forEach((g,v)=>g.setAttribute("aria-selected",String(v===Ae))),l.querySelectorAll("[data-step]").forEach(g=>{g.disabled=+g.dataset.step<0&&Ae===0||+g.dataset.step>0&&Ae===Jt.length-1})}let Nt=0,ba=!1,sa=!1;function la(t,i,u){let g=0,v=0,y=null,R=null,L=0,N=0,me=null;t.addEventListener("touchstart",P=>{let H=P.touches[0];L=H.clientX,N=H.clientY,me=null},{passive:!0}),t.addEventListener("touchmove",P=>{if(P.touches.length>1)return;let H=P.touches[0],Ce=H.clientX-L,le=H.clientY-N;!me&&Math.hypot(Ce,le)>6&&(me=Math.abs(Ce)>Math.abs(le)?"x":"y"),me==="x"&&P.cancelable&&P.preventDefault()},{passive:!1}),t.addEventListener("touchend",()=>{setTimeout(()=>{me=null},0)},{passive:!0}),t.addEventListener("pointerdown",P=>{P.button||(g=P.clientX,v=P.clientY,y=P.pointerId,R=null,sa=!1)}),t.addEventListener("pointermove",P=>{if(P.pointerId!==y)return;let H=P.clientX-g,Ce=P.clientY-v;!R&&Math.hypot(H,Ce)>8&&(R=me??(Math.abs(H)>Math.abs(Ce)?"x":"y"),R==="x"&&(t.setPointerCapture(y),ba=!0)),R==="x"&&(Nt=H,sa=!0,u())});let X=P=>{if(P.pointerId===y){if(y=null,ba=!1,R==="x"){let H=Nt<-60?1:Nt>60?-1:0;Nt=0,i(H),u(),setTimeout(()=>{sa=!1},0)}R=null}};t.addEventListener("pointerup",X),t.addEventListener("pointercancel",X),t.addEventListener("dragstart",P=>P.preventDefault());let j=0,E=0;t.addEventListener("wheel",P=>{if(Math.abs(P.deltaX)<=Math.abs(P.deltaY))return;P.preventDefault();let H=performance.now();H<E||(j+=P.deltaX,Math.abs(j)>60&&(i(Math.sign(j)),j=0,E=H+380))},{passive:!1})}function Aa(t){return`<nav class="ptabs" aria-label="Products">${Vr[0].children.map(i=>`<a href="${i.route}"${i.id===t?' aria-current="page"':""}>${i.label}</a>`).join("")}</nav>`}function Vt(){return`<footer class="ft"><a href="#/" class="wm small" aria-label="The Light Orb \u2014 Home">${mo}</a>
      <nav aria-label="Footer"><a href="#/design">Web Design</a><a href="#/about">About</a><a href="#/sound">Sound</a><a href="#/membership">Membership</a><a href="#/account">Account</a>${_e.profile()?.email?"":'<a href="#/signup">Join early access</a>'}<a href="intro.html?replay">Replay intro</a><a href="mailto:trescarla@gmail.com">Contact</a></nav>
      <nav aria-label="Legal"><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a><a href="#/licence">Licence</a></nav>
      <span class="ft-n">${"Early access \xB7 everything is free while we build it."}</span>
      ${["membership","signup","signin"].includes(G.name)||_e.profile()?.email?"":Ea("footer",{compact:!0})}</footer>`}let o=0,c={"orb-slider":nr,"orb-wave":[{id:"gentle",name:"Gentle",line:"Wide, soft ripples.",p:{strength:.6,scale:110}},{id:"classic",name:"Classic",line:"The ripple from the intro.",p:{strength:1,scale:70}},{id:"deep",name:"Deep",line:"Tight, strong rings.",p:{strength:1.6,scale:45}},{id:"rain",name:"Rain",line:"Many small, quick rings, like drops on water.",p:{strength:.5,scale:28}}],"background-pack":[{id:"classic",name:"Classic",line:"The horizon as in the intro.",p:{horizon:.3,lamp:.9}},{id:"wide",name:"Wide floor",line:"A low horizon and more floor.",p:{horizon:.18,lamp:.9}},{id:"high",name:"High horizon",line:"A high horizon and more sky.",p:{horizon:.45,lamp:.9}},{id:"lantern",name:"Lantern",line:"A brighter lamp around the Orb in the dark world.",p:{horizon:.3,lamp:1.6}}],"crystal-controls":nr},m=t=>t?.code==="kit",T=(t,i,u)=>`<iframe class="kit-frame" data-kit="${t}|${i}|${u?1:0}" title="${u?"Preview":"Live preview"}"${u?' tabindex="-1" aria-hidden="true" loading="lazy"':""}></iframe>`,q=t=>t.querySelectorAll("[data-kit]").forEach(i=>{let[u,g,v]=i.dataset.kit.split("|");i.srcdoc=Ar(u,g,{mini:v==="1"})}),V=[...vt.map(t=>({id:`orb-${t.id}`,fam:"orb",variant:t.id,sphere:t.id,ext:".orb",name:t.id==="clear"?"The Orb":`The Orb \xB7 ${t.name}`,kind:t.line,href:`#/products/orb${t.id==="clear"?"":`?variant=${t.id}`}`})),...Fo.filter(t=>t.id!=="orb").flatMap(t=>c[t.id].map((i,u)=>({id:u?`${t.id}-${i.id}`:t.id,fam:t.id,variant:u?i.id:null,ext:m(t)?".html":".kit",name:`${t.name} \xB7 ${i.name}`,kind:i.line,mini:m(t)?T(t.id,i.id,!0):null,cls:i.cls,dark:i.dark,img:m(t)?null:`./media/products/${t.id}.jpg`,pos:t.id==="background-pack"?`50% ${Math.round(30+(i.p.horizon-.3)*160)}%`:null,href:`#/products/${t.id}${u?`?variant=${i.id}`:""}`})))],ve="Free \xB7 Early access",ft=(t,i="")=>"";function st(t){t.querySelectorAll("[data-cart]").forEach(i=>i.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation();let g=V.find(y=>y.id===i.dataset.cart)||xn().find(y=>y.id===i.dataset.cart),v=Lt.toggle({id:g.id,name:g.name,href:g.href||"#/sound"});v&&ye("add_to_cart",{item:g.id}),i.setAttribute("aria-pressed",String(v)),i.querySelector("span").textContent=v?"In cart":"Add to cart",r.sfx(v?"confirm":"select")}))}let Fe=(t,i,u)=>`<button class="gb small" type="button" data-fsave="${t}|${i}" data-name="${re(u)}" aria-pressed="${_e.isSaved(t,i)}">${we.heart}<span>${_e.isSaved(t,i)?"Saved":"Save"}</span></button>`;function Re(t,i){t.querySelectorAll("[data-fsave]").forEach(u=>u.addEventListener("click",g=>{g.preventDefault(),g.stopPropagation();let[v,y]=u.dataset.fsave.split("|"),R=_e.toggleSaved(v,y,u.dataset.name,i(v,y));R&&ye("save",{kind:v,item:y}),u.setAttribute("aria-pressed",String(R)),u.querySelector("span").textContent=R?"Saved":"Save",r.sfx(R?"confirm":"select")}))}function be(){let t;try{t=localStorage.getItem("lo.productsView")}catch{}t!=="grid"&&t!=="large"&&(t=matchMedia("(max-width: 700px)").matches?"grid":"large");let i=u=>`<article class="file glass" data-href="${u.href}">
        <div class="file-v ${u.cls??""}${u.mini?" has-kit":""}${u.dark?" is-dark":""}"${u.sphere?` data-sphere="${u.sphere}"`:""}>${u.img?`<img src="${u.img}" alt="" draggable="false" loading="lazy"${u.pos?` style="object-position:${u.pos}"`:""}>`:""}${u.mini??""}<span class="file-ext">${u.ext}</span></div>
        <div class="file-m"><h3><a class="file-link" href="${u.href}">${re(u.name)}</a></h3><p>${re(u.kind)}</p><p class="file-p">${ve}</p></div>
        <div class="file-a">${`<a class="gb small" href="${u.href}">${u.fam==="orb"||m(ua(u.fam))?"Get it free":"Coming to early access"}</a>`}${Fe("product",u.id,u.name)}<a class="gb small primary" href="#/studio?family=${u.fam}${u.variant?`&preset=${u.variant}`:""}">Go to Studio</a></div></article>`;l.innerHTML=`
      <section class="dest shop">
        ${Aa("products")}
        <header class="dh dh-row"><h1>Products</h1><div class="segbar view-tg" role="radiogroup" aria-label="View">${["grid","large"].map(u=>`<button class="pill" role="radio" type="button" data-pview="${u}" aria-checked="${u===t}">${u==="grid"?"Grid":"Large"}</button>`).join("")}</div></header>
        <div class="file-grid${t==="grid"?" is-compact":""}">${V.map(i).join("")}</div>
      </section>${Vt()}`,st(l),Re(l,(u,g)=>V.find(v=>v.id===g)?.href??"#/products"),q(l),l.querySelectorAll(".file[data-href]").forEach(u=>u.addEventListener("click",g=>{g.defaultPrevented||g.target.closest("button, a")||(r.sfx("open"),location.hash=u.dataset.href)})),l.querySelectorAll("[data-sphere]").forEach(u=>{let g=or(u,u.dataset.sphere,{reduced:n,interactive:t!=="grid"});tt.push(()=>g.dispose())}),l.querySelectorAll("[data-pview]").forEach(u=>u.addEventListener("click",()=>{if(u.dataset.pview===t)return;try{localStorage.setItem("lo.productsView",u.dataset.pview)}catch{}r.sfx("press");let g=scrollY;tt.forEach(v=>v()),tt=[],be(),scrollTo(0,g)}))}function at(){let t=ua(G.id);if(!t||t.published===!1){location.replace("#/products");return}let i=m(t),u=t.id==="orb"?vt:c[t.id],g=u.some(L=>L.id===G.query.variant)?G.query.variant:u[0].id,v=L=>u.find(N=>N.id===L),y=L=>t.id==="orb"?`orb-${L}`:L===u[0].id?t.id:`${t.id}-${L}`;l.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/products">${we.back}<span>Products</span></a>
        <div class="pd-grid">
          <div class="pd-stage glass${i?" has-kit":""}" data-stage>${i?T(t.id,g,!1):Ir(t.id)}</div>
          <div class="pd-info">
            <p class="kicker">${re(t.id==="orb"?"Sphere":t.kind)}</p><h1>${re(t.name)}</h1>
            <p class="lede">${re(Ut[t.id].lede)}</p>
            ${u?`<div class="vars"><p class="lbl">Version</p><div class="segbar" role="radiogroup" aria-label="Version">${u.map(L=>`<button class="pill" role="radio" type="button" data-variant="${L.id}" aria-checked="${L.id===g}">${L.name}</button>`).join("")}</div><p class="var-line" data-vline></p></div>`:""}
            <p class="price" data-price>${ve}</p>
            <div class="acts eq">${t.id==="orb"||i?`<button class="gb small primary" type="button" data-getfree>${we.check}<span>Get it free</span></button>`:'<button class="gb small primary" type="button" data-soon aria-expanded="false" aria-controls="ea-wait"><span>Coming to early access</span></button>'}${Fe("product",y(g),t.name)}</div>
            ${t.id==="orb"?Je():i?It():`<div class="ea-wait" id="ea-wait" hidden>${Ea("product",{compact:!0,label:`Get an email when ${re(t.name)} is ready to take, free`})}</div>`}
            ${`<a class="studio-lock" href="#/studio?family=${t.id}">${we.check}<span><b>Customise in Studio</b><small>Open to everyone \xB7 Beta</small></span></a>`}
            <dl class="facts"><dt>What it does</dt><dd>${re(Ut[t.id].does)}</dd><dt>You receive</dt><dd>${t.receives.map(re).join(" \xB7 ")}</dd></dl>
            <details class="acc"><summary>Compatibility and installation</summary><p>${re(Ut[t.id].tech)}</p></details>
          </div>
        </div>
      </section>${Vt()}`,st(l),Re(l,(L,N)=>`#/products/${t.id}`),pn(t.id,l.querySelector("[data-stage]"),g),ye("product_open",{product:t.id,variant:g});let R=L=>{xe.sphere?.setKind(L),t.id==="orb"&&xe&&cn(L===dn);let N=v(L),me=l.querySelector("[data-stage]");if(i){me.querySelector("[data-kit]").dataset.kit=`${t.id}|${L}|0`,q(me);let H=l.querySelector(".free-c code");H&&(H.textContent=Ar(t.id,L))}else t.id!=="orb"&&(me.classList.remove("v-dark","v-frost","v-compact"),N.cls&&me.classList.add(N.cls),N.p&&Ie.set(N.p));l.querySelectorAll("[data-variant]").forEach(H=>H.setAttribute("aria-checked",String(H.dataset.variant===L)));let X=l.querySelector("[data-vline]");if(X&&(X.textContent=v(L).line),t.id==="orb"){let H=!0;l.querySelector("[data-price]").textContent=ve,l.querySelector("[data-free]").hidden=!H;let Ce=l.querySelector(".free-c code");Ce&&(Ce.textContent=rt(L))}let j=l.querySelector("[data-cart]");if(j&&(j.dataset.cart=y(L)),j){let H=Lt.has(j.dataset.cart);j.setAttribute("aria-pressed",String(H)),j.querySelector("span").textContent=H?"In cart":"Add to cart"}let E=l.querySelector("[data-fsave]");E.dataset.fsave=`product|${y(L)}`;let P=_e.isSaved("product",y(L));E.setAttribute("aria-pressed",String(P)),E.querySelector("span").textContent=P?"Saved":"Save",history.replaceState(null,"",`#/products/${t.id}${L===u[0].id?"":`?variant=${L}`}`)};Rr(l,i?t.id:"orb"),l.querySelector("[data-download]")?.addEventListener("click",()=>{let L=l.querySelector("[data-variant][aria-checked=true]")?.dataset.variant??u[0].id;Va(`${t.id}-${L}.html`,Ar(t.id,L)),r.sfx("confirm"),ye("free_code_download",{product:t.id,variant:L})}),l.querySelector("[data-getfree]")?.addEventListener("click",()=>{let L=l.querySelector("[data-freebtn]");L?.getAttribute("aria-expanded")!=="true"&&L?.click(),L?.scrollIntoView({block:"nearest",behavior:"smooth"})}),l.querySelector("[data-soon]")?.addEventListener("click",L=>{let N=l.querySelector("#ea-wait"),me=N.hidden;N.hidden=!me,L.currentTarget.setAttribute("aria-expanded",String(me)),r.sfx(me?"open":"close"),me&&N.querySelector("input")?.focus()}),l.querySelectorAll("[data-variant]").forEach(L=>L.addEventListener("click",()=>{R(L.dataset.variant),r.sfx("select"),ye("variant",{product:t.id,variant:L.dataset.variant})})),R(g)}let rt=(t="clear")=>`<div data-light-orb${t==="clear"?"":` data-variant="${t}"`} style="width:320px;height:320px"></div>
<script type="module" src="https://thelightorb.com/embed/v1/orb.js"><\/script>`,Be=rt();function Je(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${we.check}<span>Get the code \u2014 free</span></button>
      <div class="free-p" id="free-code" hidden><p class="note">Paste this where the Orb should appear. It fills the box you give it; drag to turn it, tap to stir it.</p>
        <pre class="free-c glass"><code>${re(Be)}</code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function It(){return`<div class="free" data-free><button class="tl" type="button" data-freebtn aria-expanded="false" aria-controls="free-code">${we.check}<span>Get the code \u2014 free</span></button>
      <div class="free-p" id="free-code" hidden><p class="note">One self-contained file: open it in a browser, or paste its style, markup and script into your page. Change the material with the --cc-* variables at the top.</p>
        <pre class="free-c glass kit-code"><code></code></pre>
        <div class="acts"><button class="gb small" type="button" data-copy><span>Copy code</span></button><button class="gb small" type="button" data-download><span>Download .html</span></button></div>
        <p class="note">Free for personal and commercial use. Attribution appreciated. No resale of the code itself. <a href="#/licence">Licence</a></p></div></div>`}function Va(t,i){let u=URL.createObjectURL(new Blob([i],{type:"text/html"})),g=document.createElement("a");g.href=u,g.download=t,document.body.append(g),g.click(),g.remove(),setTimeout(()=>URL.revokeObjectURL(u),1e3)}function Rr(t,i="orb"){let u=t.querySelector("[data-freebtn]");if(!u)return;let g=t.querySelector("#free-code"),v=t.querySelector("[data-copy]");u.addEventListener("click",()=>{let y=g.hidden;g.hidden=!y,u.setAttribute("aria-expanded",String(y)),r.sfx(y?"open":"select"),y&&ye("free_code_open",{product:i})}),v.addEventListener("click",async()=>{let y=!1;try{await navigator.clipboard.writeText(t.querySelector(".free-c code").textContent),y=!0}catch{let R=document.createRange();R.selectNodeContents(t.querySelector(".free-c code"));let L=getSelection();L.removeAllRanges(),L.addRange(R)}v.querySelector("span").textContent=y?"Copied":"Selected \u2014 press Copy",y&&(r.sfx("select"),ye("free_code_copy",{product:i})),setTimeout(()=>{v.isConnected&&(v.querySelector("span").textContent="Copy code")},2200)})}let Ut={orb:{lede:"A 3D sphere you can place in your own work. Choose the material and what it holds inside.",does:"Drag to turn it; it keeps turning slowly on its own. A tap makes whatever is in it move a little faster. Twenty versions: clear glass, liquid metal, porcelain, bloom, and glass holding a light, points of light, glitter or beads.",tech:"An ES module built on Three.js r186 (WebGL 2). Works in current Chrome, Safari, Edge and Firefox. The integration notes explain how to place it in a page and choose a version."},"orb-slider":{lede:"A glass capsule whose thumb is a small orb with its own slow inner light. Slide it to enter.",does:"A slide-to-confirm control. Drag the orb; let go and a spring carries it home, or to the end to confirm (it then sends a confirm event). Arrow keys, Enter, Home and End work too.",tech:"One HTML file: CSS variables for the material and a few lines of plain JavaScript. No framework, no WebGL. Current Chrome, Safari, Edge and Firefox."},"orb-wave":{lede:"The ripple the Orb leaves on the floor when it lands, drawn in light.",does:"Each touch raises a wave that spreads across the surface and fades.",tech:"A full-screen shader with an impact API: position, strength and scale. Needs WebGL 2."},"background-pack":{lede:"Two environments in one pack: a dark world and a light one, and the change between them.",does:"Moves smoothly from dark to light, controlled by a single exposure value.",tech:"A full-screen shader with exposure, horizon and lamp controls. Needs WebGL 2."},"crystal-controls":{lede:"Buttons, switches, fields and sliders in six glass materials. A highlight follows the pointer; presses give like glass on a spring.",does:"Every control has default, hover, focus, pressed, selected, disabled and loading states. Choose Clear, Smoke, Chrome, Porcelain, Gel or Bloom; each is a set of CSS variables.",tech:"One HTML file: plain CSS and a few lines of JavaScript for the pointer light and the slider spring. No framework. Current Chrome, Safari, Edge and Firefox."}};function Ir(t){return t==="orb"?'<div class="pd-sph" data-sph></div><span class="pd-hint">Drag to turn it. Tap to stir it.</span>':t==="orb-slider"?'<div class="cap" data-cap role="slider" tabindex="0" aria-label="Slide to enter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="cap-l">slide to enter</span></div>':t==="orb-wave"?'<button class="gb small pd-btn" type="button" data-drop>Drop the Orb</button><span class="pd-hint">Or tap the floor.</span>':t==="background-pack"?'<div class="segbar pd-seg" role="radiogroup" aria-label="Environment"><button class="pill" role="radio" type="button" data-env="0" aria-checked="false">Dark world</button><button class="pill" role="radio" type="button" data-env="1" aria-checked="true">Light</button></div>':`<div class="kit"><button class="gb primary" type="button">Continue</button><button class="gb" type="button">Secondary</button><button class="gb gc" type="button" aria-label="Confirm">${we.check}</button>
      <button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><input class="gi" placeholder="Your name" aria-label="Example field">
      <input class="grange" type="range" value="60" aria-label="Example slider" style="--p:60%"><button class="gb" type="button" disabled>Disabled</button><button class="gb" type="button" aria-busy="true">Loading</button></div>`}let xe=null,dn="clear";function cn(t){if(!xe)return;xe.real=t;let i=xe.el.querySelector("[data-sph]");if(i)for(let u of i.children)u.style.visibility=t?"hidden":"";t?p.show(At(Zt("original").config)):p.hide()}function pn(t,i,u="clear"){if(xe={id:t,el:i,cap:0,drop:null},!(t==="crystal-controls"||t==="orb-slider")){if(t!=="orb"&&p.show(At(Zt("original").config)),t==="orb"){xe.sphere=or(i.querySelector("[data-sph]"),u,{reduced:n}),tt.push(()=>xe?.sphere?.dispose());let g=i.querySelector("[data-sph]"),v=null,y=0,R=0,L=0,N=()=>{L=0,!(!xe?.real||v)&&(y*=.94,R+=y,p.orb?.setObjectYaw(R),Math.abs(y)>5e-4&&(L=requestAnimationFrame(N)))};g.addEventListener("pointerdown",X=>{xe?.real&&(v={x:X.clientX,t:performance.now(),moved:0},g.setPointerCapture(X.pointerId))}),g.addEventListener("pointermove",X=>{if(!v||!xe?.real)return;let j=X.clientX-v.x;v.x=X.clientX,v.moved+=Math.abs(j),y=j*.012,R+=y,p.orb?.setObjectYaw(R)});let me=()=>{if(!v)return;let X=v.moved<6;v=null,X?(p.orb?.nudge(.8),r.sfx("detent")):L||(L=requestAnimationFrame(N))};g.addEventListener("pointerup",me),g.addEventListener("pointercancel",me),tt.push(()=>{cancelAnimationFrame(L),xe?.real&&p.hide()})}if(t==="orb-slider"){let g=i.querySelector("[data-cap]"),v=null,y=L=>{xe.cap=ea(L),g.setAttribute("aria-valuenow",Math.round(xe.cap*100))};g.addEventListener("pointerdown",L=>{v={x:L.clientX,v:xe.cap},g.setPointerCapture(L.pointerId),r.sfx("select")}),g.addEventListener("pointermove",L=>{v&&y(v.v+(L.clientX-v.x)/(g.offsetWidth-g.offsetHeight))});let R=()=>{v&&(v=null,p.orb?.nudge(.5),xe.cap>.9?(y(1),r.sfx("confirm")):(y(0),r.sfx("select")))};g.addEventListener("pointerup",R),g.addEventListener("pointercancel",R),g.addEventListener("keydown",L=>{L.key==="ArrowRight"&&y(xe.cap+.1),L.key==="ArrowLeft"&&y(xe.cap-.1),L.key==="End"&&y(1),L.key==="Home"&&y(0)})}if((t==="orb-wave"||t==="background-pack")&&(br(i),e.addBackdrop(Ie.canvas),Ie.set({horizon:.3,strength:1,scale:70}),Ie.setExposure(t==="background-pack"?1:0,!0),t==="orb-wave"&&(i.addEventListener("pointerdown",g=>{if(g.target.closest("button"))return;let v=i.getBoundingClientRect(),y=g.clientY-v.top;y>v.height*.55&&(Ie.impact(g.clientX-v.left,y),p.orb?.nudge(.7),r.sfx("detent"))}),i.querySelector("[data-drop]").addEventListener("click",()=>{xe.drop={vy:0,y:null,contacts:0},r.sfx("select")})),t==="background-pack"&&i.querySelectorAll("[data-env]").forEach(g=>g.addEventListener("click",()=>{Ie.setExposure(+g.dataset.env),r.sfx("open"),i.querySelectorAll("[data-env]").forEach(v=>v.setAttribute("aria-checked",String(v===g)))}))),t==="crystal-controls"){i.querySelectorAll(".gb:not([disabled])").forEach(v=>v.addEventListener("click",()=>r.sfx("select"))),i.querySelector(".gsw").addEventListener("click",v=>{let y=v.currentTarget;y.setAttribute("aria-checked",String(y.getAttribute("aria-checked")!=="true")),r.sfx("select")}),i.querySelector(".gi").addEventListener("input",v=>{v.isTrusted&&r.sfx("type")});let g=i.querySelector(".grange");g.addEventListener("input",()=>{g.style.setProperty("--p",`${g.value}%`),r.sfx("level",g.value/100)})}}}let Eo=2,Pr=(t,i="")=>`<span class="dev" data-dev><span class="dev-body"><span class="dev-screen"><img src="${t.cover.src}" alt="${re(i)}" draggable="false" decoding="async"${i?' width="1600" height="1000"':""}></span><span class="dev-glare" aria-hidden="true"></span></span><span class="dev-floor" aria-hidden="true"></span></span>`;function $o(t){n||t.querySelectorAll("[data-dev]").forEach(i=>{i.addEventListener("pointermove",u=>{let g=i.getBoundingClientRect();i.style.setProperty("--ry",`${((u.clientX-g.left)/g.width-.5)*10}deg`),i.style.setProperty("--rx",`${((u.clientY-g.top)/g.height-.5)*-8}deg`)}),i.addEventListener("pointerleave",()=>{i.style.removeProperty("--ry"),i.style.removeProperty("--rx")})})}let un=t=>`<!doctype html>
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
<script type="module" src="https://thelightorb.com/embed/v1/orb.js"><\/script>
</body>
</html>
`;function gn(){let t=bt.length+Eo;l.innerHTML=`
      <section class="dest tpl">
        <header class="dh"><h1>Complete compositions</h1></header>
        <div class="folder" data-folder>
          <div class="folder-tab glass"><span>Templates</span><small>${bt.length} ${bt.length===1?"composition":"compositions"}</small></div>
          <div class="folder-body glass"><span class="folder-glow" aria-hidden="true"></span><span class="folder-num" data-fnum aria-hidden="true"></span>
            <div class="folder-track" data-track role="listbox" aria-label="Templates" tabindex="0">
              ${bt.map((X,j)=>`<button class="tcard glass" type="button" role="option" data-t="${j}" aria-label="Open ${re(X.name)}">
                <span class="tcard-n">${String(j+1).padStart(2,"0")}</span>
                <span class="tcard-cv">${Pr(X)}</span>
                ${X.showcase?`<span class="tcard-tag">${re(X.category)}</span>`:""}<span class="tcard-t">${re(X.name)}</span><span class="tcard-l">${re(X.line)}</span></button>`).join("")}
              ${Array.from({length:Eo},(X,j)=>`<div class="tcard glass soon" aria-hidden="true"><span class="tcard-n">${String(bt.length+j+1).padStart(2,"0")}</span><span class="tcard-cv"><span class="soon-orb"></span><span class="soon-lbl">In the making</span></span><span class="tcard-t">Next composition</span><span class="tcard-l">Joining the collection soon.</span></div>`).join("")}
            </div>
            <div class="folder-open" data-open hidden></div>
            <div class="folder-ctl" data-fctl><button class="gb gc small" type="button" data-fstep="-1" aria-label="Previous">${we.prev}</button><span class="count" data-fcount></span><button class="gb gc small" type="button" data-fstep="1" aria-label="Next">${we.next}</button></div>
          </div>
        </div>
      </section>${Vt()}`;let i=l.querySelector("[data-track]"),u=[...i.children],g=l.querySelector("[data-open]"),v=l.querySelector("[data-fctl]"),y=0,R=X=>{u.forEach((j,E)=>{let P=E-y+Nt/340,H=Math.abs(P);j.style.transition=X||ba?"none":"",j.style.transform=`translateX(calc(-50% + ${P*96}%)) translateZ(${-H*120}px) rotateY(${ea(-P*18,-30,30)}deg) scale(${1-Math.min(H,2)*.08})`,j.style.zIndex=String(10-Math.round(H)),j.style.opacity=String(H>2.2?0:1-H*.22),j.classList.toggle("on",E===y),j.tagName==="BUTTON"&&j.setAttribute("aria-selected",String(E===y))}),l.querySelector("[data-fnum]").textContent=String(y+1).padStart(2,"0"),l.querySelector("[data-fcount]").textContent=`${String(y+1).padStart(2,"0")} / ${String(t).padStart(2,"0")}`,l.querySelectorAll("[data-fstep]").forEach(j=>{j.disabled=+j.dataset.fstep<0&&y===0||+j.dataset.fstep>0&&y===t-1})},L=X=>{let j=ea(y+X,0,t-1);j!==y&&(y=j,r.sfx("detent")),R()};l.querySelectorAll("[data-fstep]").forEach(X=>X.addEventListener("click",()=>L(+X.dataset.fstep))),i.addEventListener("keydown",X=>{X.key==="ArrowRight"&&(L(1),X.preventDefault()),X.key==="ArrowLeft"&&(L(-1),X.preventDefault())}),la(i,L,()=>R());let N=X=>{let j=bt[X],E={id:`template-${j.id}`,name:j.name,href:`#/templates/${j.id}`};V.some(P=>P.id===E.id)||V.push(E),g.innerHTML=`<button class="tl folder-back" type="button" data-close>${we.back}<span>All templates</span></button>
        <div class="fo-grid"><figure class="fo-cv">${Pr(j,`The beginning of the ${j.name} template.`)}</figure>
          <div class="fo-info"><p class="kicker">${String(X+1).padStart(2,"0")} \xB7 ${j.showcase?re(j.category):"Template"}</p><h2>${re(j.name)}</h2>${j.showcase?`<p class="fo-label">${re(j.subtitle)}</p>`:""}<p>${re(j.line)}</p>
            <ul class="fo-inc">${j.includes.map(P=>`<li>${re(P)}</li>`).join("")}</ul>${j.showcase?'<p class="note">Showcase \xB7 not for sale.</p>':`<p class="price">${ve}</p>`}
            <div class="acts eq">${j.showcase?`<a class="gb small primary" href="${j.demo}" target="_blank" rel="noopener" aria-label="${re(j.cta)}, opens in a new tab">${re(j.cta)}</a><a class="gb small" href="#/templates/${j.id}">Details</a>`:`<a class="gb small primary" href="#/templates/${j.id}">Open template</a>${ft(E)}`}${Fe("template",j.id,j.name)}</div></div></div>`,st(g),Re(g,(P,H)=>`#/templates/${H}`),$o(g),g.querySelector("[data-close]").addEventListener("click",me),i.hidden=!0,v.hidden=!0,g.hidden=!1,g.classList.remove("in"),g.offsetWidth,g.classList.add("in"),r.sfx("open"),g.querySelector("[data-close]").focus({preventScroll:!0})},me=()=>{g.hidden=!0,i.hidden=!1,v.hidden=!1,R(!0),r.sfx("close"),i.focus({preventScroll:!0})};u.forEach((X,j)=>X.tagName==="BUTTON"&&X.addEventListener("click",E=>{if(sa){E.preventDefault();return}j!==y?(y=j,R(),r.sfx("detent")):N(j)})),R(!0)}function hn(){let t=bt.find(i=>i.id===G.id);if(!t){location.replace("#/templates");return}l.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/templates">${we.back}<span>Templates</span></a>
        <div class="pd-grid">
          <figure class="pd-stage cover-big">${Pr(t,`The beginning of the ${t.name} template.`)}</figure>
          <div class="pd-info"><p class="kicker">${t.showcase?re(t.category):"Template"}</p><h1>${re(t.name)}</h1>${t.showcase?`<p class="fo-label">${re(t.subtitle)}</p>`:""}<p class="lede">${re(t.line)}</p>
            <div class="acts eq">${t.showcase?`<a class="gb small primary" href="${t.demo}" target="_blank" rel="noopener" aria-label="${re(t.cta)}, opens in a new tab">${re(t.cta)}</a>`:'<a class="gb small" href="#/">View it live</a>'}${t.starter&&!0?'<button class="gb small primary" type="button" data-starter>Download starter \u2014 free</button>':""}</div>
            ${t.showcase?'<p class="note">Showcase \xB7 not for sale. Originally designed and built for a maternity and postpartum brand; the demo runs on its own, with purchases disabled.</p>':t.starter&&!0?'<p class="note">A single .html file: the Orb (hosted embed), a greeting, a quotation slot and four destinations, ready to edit. <a href="#/licence">Licence</a></p>':'<p class="note">Purchase opens soon.</p>'}
            <dl class="facts"><dt>Includes</dt><dd>${t.includes.map(re).join(" \xB7 ")}</dd></dl>
            <p class="note" data-covermeta></p></div>
        </div>
      </section>${Vt()}`,$o(l),l.querySelector("[data-starter]")?.addEventListener("click",()=>{Va(`${t.id}-starter.html`,un(t)),r.sfx("confirm"),ye("template_starter_download",{template:t.id})}),fetch(t.cover.meta).then(i=>i.json()).then(i=>{let u=l.querySelector("[data-covermeta]");u&&(u.textContent=t.showcase?`Preview: a capture of the live demo, ${i.captured}.`:`Preview: a capture of this website, ${i.captured}.`)}).catch(()=>{})}function Lo(){let t=r.prefs.voice,i=[...ka.map(E=>({group:E.full?"voices":"more",key:`voice_audition.${E.id}`,clip:"voice_audition",voice:E.id,title:E.name,tag:`${E.accent} \xB7 ${E.gender}`,sub:E.line,use:E.id,note:E.full?"":`Page narration in ${E.name}; other guide lines in ${Ft(E.lines).name}.`})),...["home","products","templates","studio","sound"].map(E=>({group:"guide",key:`${E}.${t}`,clip:E,voice:t,title:E==="home"?"Welcome":E[0].toUpperCase()+E.slice(1),sub:hr[E]})),...Ja.map(E=>({group:"sfx",key:`sfx.${E.id}`,url:E.file,title:E.name,sub:E.line}))],u=(E,P,H,Ce=!0)=>`<details class="sg"${Ce?" open":""}><summary><h2>${P}</h2><span class="sg-n">${i.filter(le=>le.group===E).length}</span><p>${H}</p></summary><div class="sgrid">${i.filter(le=>le.group===E).map(le=>`
      <article class="si si-row"><button class="si-play gb gc small" type="button" data-play="${le.key}" aria-label="Play ${re(le.title)}">${we.play}</button>
        <div class="si-t"><h3>${re(le.title)}${le.tag?`<span class="file-ext">${re(le.tag)}</span>`:'<span class="file-ext">.m4a</span>'}</h3><p>${re(le.sub)}</p>${le.note?`<p class="note">${re(le.note)}</p>`:""}</div>
        <div class="si-w" data-wave="${le.key}" role="slider" tabindex="0" aria-label="Position in ${re(le.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><canvas></canvas></div>
        <div class="si-m"><span class="si-d" data-dur="${le.key}">\u2013:\u2013\u2013</span></div>
        <div class="si-x eq">${le.use?`<button class="gb small" type="button" data-use="${le.use}" aria-pressed="${t===le.use}"><span>${t===le.use?"In use":"Use voice"}</span></button>`:""}${le.group!=="guide"?ft({id:`sound-${le.key}`}):""}${Fe("sound",le.key,le.title)}</div></article>`).join("")}</div></details>`;l.innerHTML=`
      <section class="dest snd-dest">
        ${Aa("sound")}
        <header class="dh"><h1>Voices and sounds</h1><p class="dh-l">Twelve neural voices, each reading the same line. Choose one and the guide speaks with it across the site. Current guide voice: <b>${re(Ft(t).name)}</b>.</p></header>
        ${u("voices","Guide voices","Every line the guide says, rendered in each of these voices.")}
        ${u("more","More voices","Different characters for the guide. Compare them on the same line.",!1)}
        ${u("guide","Guide narration",`What the guide says on each page, in ${re(Ft(t).name)}\u2019s voice.`,!1)}
        ${u("sfx","Interface sounds","Short, quiet sounds for touch, panels and wheels.")}
      </section>${Vt()}`,l.querySelectorAll(".si").forEach(E=>{E.querySelector('[data-play^="sfx."]')&&(E.querySelector(".file-ext").textContent=".wav")}),Re(l,()=>"#/sound");let g=new Map,v=(E,P)=>{let H=l.querySelector(`[data-dur="${CSS.escape(E)}"]`);H&&(H.textContent=P)},y=new Set,R=E=>{y.has(E.key)||(y.add(E.key),(E.url?r.peaksUrl(E.url,80):r.peaks(E.clip,E.voice,80)).then(P=>{g.set(E.key,P),v(E.key,mn(P.duration))}).catch(()=>{y.delete(E.key),v(E.key,"Unavailable")}))},L="IntersectionObserver"in window?new IntersectionObserver(E=>E.forEach(P=>{if(!P.target.isConnected){L.unobserve(P.target);return}if(P.isIntersecting){L.unobserve(P.target);let H=i.find(Ce=>Ce.key===P.target.dataset.wave);H&&R(H)}}),{rootMargin:"200px 0px"}):null;l.querySelectorAll("[data-wave]").forEach(E=>L?L.observe(E):R(i.find(P=>P.key===E.dataset.wave))),jr=i;let N=E=>E.url?E.key:`${E.clip}.${E.voice}`;st(l);let me=(E,P=0)=>(R(E),E.url?r.playUrl(E.key,E.url,{from:P}):r.play(E.clip,{voice:E.voice,kind:"audition",from:P}));l.querySelectorAll("[data-play]").forEach(E=>E.addEventListener("click",()=>{let P=i.find(Ce=>Ce.key===E.dataset.play),H=N(P);r.state.clip===H&&r.playing?r.pause():r.state.clip===H&&r.state.status==="paused"?r.resume():me(P)})),l.querySelectorAll("[data-wave]").forEach(E=>{let P=i.find(Se=>Se.key===E.dataset.wave),H=N(P),Ce=!1,le=Se=>{let Tt=E.getBoundingClientRect();return ea((Se.clientX-Tt.left)/Tt.width)};E.addEventListener("pointerdown",async Se=>{Ce=!0,E.setPointerCapture(Se.pointerId);let Tt=le(Se);r.state.clip!==H&&await me(P),r.seek(Tt)}),E.addEventListener("pointermove",Se=>{Ce&&r.state.clip===H&&r.seek(le(Se))}),E.addEventListener("pointerup",()=>{Ce=!1}),E.addEventListener("keydown",Se=>{r.state.clip!==H||!r.duration||(Se.key==="ArrowRight"&&r.seek(r.position+1/r.duration),Se.key==="ArrowLeft"&&r.seek(r.position-1/r.duration))})}),l.querySelectorAll("[data-use]").forEach(E=>E.addEventListener("click",()=>{let P=scrollY;r.stop(),r.set({voice:E.dataset.use}),r.sfx("confirm"),ye("voice_use",{voice:E.dataset.use}),Lo(),scrollTo(0,P),W(`${Ft(E.dataset.use).name} is now the guide\u2019s voice.`)}));let X=0,j=()=>{if(X=requestAnimationFrame(j),jr!==i){cancelAnimationFrame(X);return}for(let E of l.querySelectorAll("[data-wave]")){let P=i.find(ca=>ca.key===E.dataset.wave);if(!P)continue;let H=N(P),Ce=g.get(P.key),le=E.firstElementChild,Se=E.getBoundingClientRect();if(Se.bottom<0||Se.top>innerHeight)continue;let Tt=r.state.clip===H,xa=Tt?r.position:0,Xt=Tt?r.state.energy:0,da=Tt&&r.playing;E.setAttribute("aria-valuenow",Math.round(xa*100));let Bt=l.querySelector(`[data-play="${CSS.escape(P.key)}"]`);if(Bt&&Bt.dataset.on!==String(da)&&(Bt.dataset.on=String(da),Bt.innerHTML=da?we.pause:we.play,Bt.setAttribute("aria-label",`${da?"Pause":"Play"} ${P.title}`)),!Ce)continue;let va=Math.min(devicePixelRatio||1,2);le.width!==Math.round(Se.width*va)&&(le.width=Math.round(Se.width*va),le.height=Math.round(Se.height*va));let Ht=le.getContext("2d");Ht.setTransform(va,0,0,va,0,0),Ht.clearRect(0,0,Se.width,Se.height);let ya=Ce.bins.length,Co=Math.min(2,Se.width/ya*.4),Hr=Math.max(.5,(Se.width-Co*(ya-1))/ya),En=Se.height/2;for(let ca=0;ca<ya;ca++){let Mo=(ca+.5)/ya<=xa,$n=Mo&&Math.abs((ca+.5)/ya-xa)<2.5/ya?Xt:0,Ao=Math.max(2,(Ce.bins[ca]*.9+$n*.2)*(Se.height-4));Ht.fillStyle=Mo?"#262827":"rgba(38,40,39,.2)",Ht.beginPath(),Ht.roundRect(ca*(Hr+Co),En-Ao/2,Hr,Ao,Hr/2),Ht.fill()}}};j(),tt.push(()=>cancelAnimationFrame(X))}let mn=t=>`${Math.floor(t/60)}:${String(Math.round(t%60)).padStart(2,"0")}`;function fn(){if(et&&(et.leave(),et=null),!0){l.innerHTML="",et=Ai({api:e,audio:r,top:h,page:l,query:G.query,ICON:we,flash:W,product:p,store:_e});return}l.innerHTML=`
      <section class="st-lock">
        <div class="lock-blur" aria-hidden="true"><i class="lb-bar"></i><i class="lb-sph"></i><i class="lb-ins"></i></div>
        <div class="lock-card glass dark">
          <span class="lock-i">${we.lock}</span>
          <p class="kicker">Studio</p><h1>For members</h1>
          <p>Shape the sphere: its material, its colour and what moves inside it. Studio opens with membership.</p>
          <div class="acts eq"><a class="gb small primary" href="#/membership">See membership</a><a class="gb small" href="#/products">Browse products</a></div>
        </div>
      </section>`}function bn(t,i,{W:u,H:g}){let v=r.energy(),y=r.playing&&(r.state.kind==="guide"||r.state.kind==="audition"&&G.name==="sound");a.setSpeech(y&&!Nr()?v*(n?.35:.9):0),ge+=((y&&!Nr()||ce?1:0)-ge)*Math.min(1,i*(y?4:1.2));{let N=t-se,me=N<0?0:N<3.5?ta(N/.4):1-ta((N-3.5)/1.6);a.setRibbon?.(Math.max(me,ge))}p.orb?.setSpeech(r.playing&&r.state.kind==="audition"&&Nr()?v*(n?.35:1):0);let R=u<700,L;if(et)L=et.frame(t,i,{W:u,H:g}),p.frame(L.product??null);else if(G.name==="home")L=kn(u,g,R);else{let N=yn(u,g,R);if(R){let me=performance.now()-oa;Br+=((me<700?.18:1)-Br)*Math.min(1,i*6),N.vis=Br}L={warm:0,orb:N,emission:lt.emission}}if(!et){let N=Sn(u,g,i);p.frame(N),N?.ground&&(L.grounds||=[]).push({y:N.ground,x:N.x,d:N.d})}return wn(et?L.product&&G.name==="studio"&&vn()==="orb"?{...L.product,passive:!0}:null:L.orb),L}let To=null,jr=[],xn=()=>jr.map(t=>({id:`sound-${t.key}`,name:t.title,href:"#/sound"})),vn=()=>et?.draft?.family??"orb",Dr=null;addEventListener("pointerdown",t=>{Dr=G.name==="studio"&&w.classList.contains("passive")&&!w.hidden?{x:t.clientX,y:t.clientY,t:performance.now()}:null},!0),addEventListener("pointerup",t=>{let i=Dr;if(Dr=null,!i||Math.hypot(t.clientX-i.x,t.clientY-i.y)>5||performance.now()-i.t>350)return;let u=w.getBoundingClientRect();Math.hypot(t.clientX-(u.left+u.width/2),t.clientY-(u.top+u.height/2))>u.width/2||t.target.closest?.("button,a,input,select,label,.sx-ins,.st-top")||w.click()},!0);let Kt={x:0,y:0,t:0,v:0};addEventListener("pointermove",t=>{if(t.pointerType!=="mouse"||t.buttons)return;let i=performance.now(),u=Math.hypot(t.clientX-Kt.x,t.clientY-Kt.y),g=Math.max(8,i-Kt.t);if(u<2)return;Kt.v+=(u/g*1e3-Kt.v)*.35,Kt.x=t.clientX,Kt.y=t.clientY,Kt.t=i;let v=t.target.closest?.("[data-guide]")?"orb":t.target.closest?.(".gb,.gsw,.gi,.gsel,.pill,.arc-c,.dg-c,button,a")?"glass":"air";r.motion(Math.min(1,Kt.v/2e3),v)},{passive:!0});let qa=null;addEventListener("pointermove",t=>{if(G.name!=="studio"||!(t.buttons&1)||!t.target.closest?.("[data-view], input[type=range]")){qa=null;return}let i=performance.now();if(qa){let u=Math.hypot(t.clientX-qa.x,t.clientY-qa.y)/Math.max(8,i-qa.t)*1e3;r.friction(Math.min(1,u/700))}qa={x:t.clientX,y:t.clientY,t:i}},{passive:!0});let Nr=()=>!1,Br=1,yn=(t,i,u)=>({x:t-(u?34:50),y:i-(u?38:52),d:u?40:50,vis:1});function wn(t){let i=t&&(t.vis??1)>.5&&!!Me();w.hidden=!i,w.classList.toggle("passive",!!t?.passive),i&&Object.assign(w.style,{left:`${t.x-t.d/2}px`,top:`${t.y-t.d/2}px`,width:`${t.d}px`,height:`${t.d}px`})}function kn(t,i,u){let g=l.scrollTop/i,v=l.querySelector("[data-welcopy]"),y=l.querySelector("[data-qt]"),R=l.querySelector(".wel-ctl"),L=1-ta((g-.04)/.2),N=Rt[Ae],me=N?.getBoundingClientRect(),X=(l.querySelector(".qt")?.offsetTop??i)/i,j=(l.querySelector("#select")?.offsetTop??2*i)/i,E=l.querySelector("#sel-t"),P=E?(E.getBoundingClientRect().top+l.scrollTop-l.getBoundingClientRect().top)/i:2,H=P-.8,Ce=Ns(g,.13,.3,H-.22,H);v&&(v.style.setProperty("--wipe",L.toFixed(3)),v.style.visibility=L<.01?"hidden":""),R&&(R.style.setProperty("--wipe",L.toFixed(3)),R.style.visibility=L<.01?"hidden":""),y&&(y.style.setProperty("--wipe",Ce.toFixed(3)),y.style.transform=`translateY(${(20*(1-ta((g-.13)/.17))-24*ta((g-H+.22)/.22)).toFixed(1)}px)`,y.style.visibility=Ce<.01?"hidden":"");let le=ea(Math.min(t*(u?.46:.19),i*.28),120,280),Se={x:t/2,y:i*(u?.3:.29),d:le},Tt={x:t/2,y:i*.87,d:le*.3},xa=ta((g-.08)/Math.max(.3,X-.5)),Xt={x:_a(Se.x,Tt.x,xa),y:_a(Se.y,Tt.y,xa),d:_a(Se.d,Tt.d,xa)};if(N){let da=me,Bt=ta((g-H+.1)/.2);if(Bt>0){let va=u?40:50,Ht={x:ia?da.left+da.width/2:t/2,y:da.bottom+44,d:va};Xt={x:_a(Xt.x,Ht.x,Bt),y:_a(Xt.y,Ht.y,Bt),d:_a(Xt.d,Ht.d,Bt)}}}return{orb:{...Xt,vis:1},warm:1,ground:{y:Xt.y+Xt.d/2},emission:lt.emission}}function Sn(t,i,u){if(G.name==="sound"&&To?.isConnected){let g=To.getBoundingClientRect(),v=Math.min(g.width,g.height)*.78;return g.bottom>0?{x:g.left+g.width/2,y:g.top+g.height/2,d:v,vis:1,ground:g.top+g.height/2+v/2}:null}if(G.name==="products"&&!G.id){let g=l.querySelector("[data-orbslot]");if(!g)return null;let v=g.getBoundingClientRect(),y=g.closest(".pc")?.classList.contains("on"),R=Math.min(v.width,v.height)*.74;return v.width>10?{x:v.left+v.width/2,y:v.top+v.height/2,d:R,vis:y?1:.7,ground:v.top+v.height/2+R/2}:null}if(G.name==="products"&&G.id&&xe?.el?.isConnected){let g=xe,v=g.el.getBoundingClientRect();if(g.id==="orb"){if(!g.real)return null;let y=g.el.querySelector("[data-sph]")?.getBoundingClientRect();if(!y||y.width<10||y.bottom<0||y.top>i)return null;let R=Math.min(y.width,y.height)*.8;return{x:y.left+y.width/2,y:y.top+y.height/2,d:R,vis:1,snap:!0}}if(g.id==="orb-slider"){let y=g.el.querySelector("[data-cap]");if(!y)return null;let R=y.getBoundingClientRect(),L=R.height*.84,N=(R.height-L)/2;return{x:R.left+N+L/2+g.cap*(R.width-R.height),y:R.top+R.height/2,d:L,vis:1,snap:!0}}if(g.id==="orb-wave"||g.id==="background-pack"){let y=Math.min(96,v.width*.16),R=v.height*.7+y*.1,L=R-y/2;if(g.drop){let N=g.drop;N.y==null&&(N.y=-v.height*.45),N.vy+=2600*u,N.y+=N.vy*u,N.y>=0&&(N.y=0,Ie.impact(v.width/2,R,ea(N.vy/1400)),p.orb?.nudge(.8),r.sfx("detent"),N.vy*=-.38,(++N.contacts>2||Math.abs(N.vy)<120)&&(g.drop=null)),L+=g.drop?g.drop.y:0}return Ie.setOrb({x:v.width/2,y:L,d:y}),{x:v.left+v.width/2,y:v.top+L,d:y,vis:1,snap:!!g.drop}}}return null}addEventListener("resize",()=>{G.name==="home"&&na(!0)}),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__lo={audio:r,worldPreview:Ie,product:p,store:_e,readableTexts:()=>[...new Set([...l.querySelectorAll(nt)].map(He).filter(Boolean))].map(t=>{let i=Ke(t);return{id:Gt(i),text:i}}),linkLabels:()=>[...l.querySelectorAll("a,button,[data-href],.arc-c,.dg-c")].filter(t=>!t.closest(".hd,.sx")&&Ke(t)).map(t=>{let i=Ke(t);return{id:Gt(i),text:i}}),get studio(){return et},get route(){return G},get sel(){return Ae},get psel(){return o}});try{Object.keys(sessionStorage).filter(t=>t.startsWith("lo:scroll:")||t==="lo:sel").forEach(t=>sessionStorage.removeItem(t))}catch{}return Ae=0,sr(),U(),{frame:bn,audio:r,get route(){return G},get studio(){return et},reapply:()=>je()}}function wo(e,a){let n=document.createElement(e);return n.className=a,n}var Or={hostDuration:.95,follow:7,damping:.92,pearl:[243,243,241],chamber:[23,26,25],whiten:2.2},Ca=matchMedia("(prefers-reduced-motion: reduce)").matches,ln=(e,a=0,n=1)=>Math.min(n,Math.max(a,e)),Ma=(e,a,n)=>e+(a-e)*n,on=e=>{let a=ln(e);return a<.5?4*a*a*a:1-(-2*a+2)**3/2},nn=(e,a,n)=>e.map((r,d)=>Ma(r,a[d],n)),zr=(e,a=1)=>`rgba(${e[0]|0},${e[1]|0},${e[2]|0},${a})`,sn=!1;document.addEventListener("lightorb:intro-complete",e=>ko(e.detail));window.__lightorbIntroComplete&&ko(window.__lightorbIntroComplete.detail);document.body.classList.contains("static")&&ko(null);function Bs(){let e=document.createElement("div");e.style.cssText="position:absolute;left:0;top:0;border-radius:50%;pointer-events:none;will-change:transform;background:radial-gradient(circle at 34% 28%,#fff 0 10%,rgba(255,255,255,.55) 24%,rgba(225,228,230,.35) 58%,rgba(170,176,180,.45) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),inset 0 -12px 24px rgba(120,126,130,.18),0 18px 30px -18px rgba(38,40,39,.45)";let a=()=>a,n={element:e,place(r){e.style.width=e.style.height=`${r.d}px`,e.style.transform=`translate(${r.x-r.d/2}px,${r.y-r.d/2}px)`,e.style.opacity=r.visibility??1}};return new Proxy(n,{get:(r,d)=>d in r?r[d]:a})}function ko(e){if(sn)return;let n=document.querySelector(".intro").querySelector(".intro-world"),r=e?.orb??Bs();sn=!0;for(let C of document.querySelectorAll(".intro .cue, .skip"))C.setAttribute("aria-hidden","true"),C.inert=!0;let d=document.createElement("style");d.textContent=".x-surface,.x-orb{position:fixed;inset:0;pointer-events:none}.x-surface{z-index:6;width:100%;height:100%}.x-orb{z-index:30}",document.head.append(d);let p=document.createElement("canvas");p.className="x-surface",p.setAttribute("aria-hidden","true");let l=document.createElement("div");l.className="x-orb",document.body.append(p,l),l.append(r.element),r.attachPointer(document.createElement("div"))();let h=p.getContext("2d");r.prepareTone("ivory"),r.prepareTone("dark");let f=0,b=0,w=1,x="",ie=()=>{x="",f=Math.max(1,innerWidth),b=Math.max(1,innerHeight),w=Math.min(devicePixelRatio||1,1.5),p.width=Math.round(f*w),p.height=Math.round(b*w)};ie(),addEventListener("resize",ie),p.addEventListener("contextrestored",()=>{x=""});let Ee=performance.now()/1e3,s={x:0,y:0,d:0,vx:0,vy:0,vd:0,from:null,hosted:!1},I=new Set,O=null,z=null,ee=0,fe=1,Z=1,W=Ee,U={left:.65,right:.55,env:.5,exposure:0,yaw:0,pitch:0,platform:!0},Pe=(C,$)=>{let F=performance.now()/1e3,K=ln(F-W,0,.05);W=F,s.from||(s.from={x:C.x,y:C.y,d:C.d}),O=z?.frame(F,K,{W:f,H:b})??null;let A=O?.orb??{x:f/2,y:b*.42,d:Math.min(f*.3,b*.42)},B=Ca?1:on((F-Ee)/Or.hostDuration);if(!s.hosted)s.x=Ma(s.from.x,A.x,B),s.y=Ma(s.from.y,A.y,B),s.d=Ma(s.from.d,A.d,B),B>=1&&(s.hosted=!0,r.attachPointer(document.createElement("div"))(),z?.reapply?.(),r.setMono?.(!1));else if(Ca||O?.snap)s.x=A.x,s.y=A.y,s.d=A.d,s.vx=s.vy=s.vd=0;else{let _=Or.follow,oe=Or.damping;s.vx+=(_*_*(A.x-s.x)-2*oe*_*s.vx)*K,s.x+=s.vx*K,s.vy+=(_*_*(A.y-s.y)-2*oe*_*s.vy)*K,s.y+=s.vy*K,s.vd+=(_*_*(A.d-s.d)-2*oe*_*s.vd)*K,s.d+=s.vd*K}s.hosted&&!s.hostedAt&&(s.hostedAt=F);let te=Ca?1:on((F-Ee-.25)/Or.whiten),pe=Math.min(O?.warm??1,1-te);fe=Ca?pe:Ma(fe,pe,.2),ee=Ma(ee,O?.room==="chamber"?1:0,Ca?1:.12),Z=Ma(Z,O?.orb?.vis??1,Ca?1:.14),Number.isFinite(s.x+s.y+s.d)||(console.warn("orb pose NaN",JSON.stringify(A),JSON.stringify(s)),Object.assign(s,{x:A.x,y:A.y,d:A.d,vx:0,vy:0,vd:0})),je();let ne=fe<.002;return{...C,x:s.x,y:s.y,d:s.d,squash:0,contact:0,worldY:ne?-9999:s.y,hideWorld:ne,visibility:Z,emission:C.emission*(O?.emission??1),raster:Math.ceil(Math.max(s.d,A.d,140)*1.06)}};if(e?.orb)e.takeOver(Pe);else{let C=()=>{r.place(Pe({x:f/2,y:b/2,d:0,emission:1})),requestAnimationFrame(C)};requestAnimationFrame(C)}try{je()}catch{}try{r.setBackdrop((C,$)=>lt(C,$,s))}catch(C){console.warn("backdrop",C)}let ae=(()=>{try{let C=document.createElement("canvas").getContext("2d");return C.filter="blur(1px)",C.filter==="blur(1px)"}catch{return!1}})(),$e=document.createElement("canvas"),Oe=$e.getContext("2d");function Ue(C,$,F,K){return $e.width!==K&&($e.width=$e.height=K),Oe.globalCompositeOperation="copy",Oe.drawImage(n,C,$,F,F,0,0,K,K),Oe.globalCompositeOperation="saturation",Oe.fillStyle="#808080",Oe.fillRect(0,0,K,K),Oe.globalCompositeOperation="destination-in",Oe.drawImage(n,C,$,F,F,0,0,K,K),Oe.globalCompositeOperation="source-over",$e}function lt(C,$,F){let K=F.d/$.diameter,A=$.extent*K,B=F.x-A/2,te=F.y-A/2,pe=$.extent/A,ne=_=>_.width>0&&_.height>0;if(C.fillStyle=zr(Pt().pearl),C.fillRect(0,0,$.extent,$.extent),fe>.002&&ne(n)){let _=n.width/Math.max(1,innerWidth),oe=!document.documentElement.classList.contains("warm");oe&&ae&&(C.filter="grayscale(1) contrast(1.06)"),oe&&!ae?C.drawImage(Ue(B*_,te*_,A*_,$.extent),0,0):C.drawImage(n,B*_,te*_,A*_,A*_,0,0,$.extent,$.extent),oe&&ae&&(C.filter="none")}ne(p)&&C.drawImage(p,B*w,te*w,A*w,A*w,0,0,$.extent,$.extent);for(let _ of I){if(!_.isConnected||!ne(_))continue;let oe=_.getBoundingClientRect();oe.right<B||oe.left>B+A||oe.bottom<te||oe.top>te+A||C.drawImage(_,(oe.left-B)*pe,(oe.top-te)*pe,oe.width*pe,oe.height*pe)}}function je(){let C=1-fe,$=C>0&&C<.999,F=JSON.stringify([Pt(),f,b,w,C>0,$||O?.glows?.length?C:0,ee>.002?ee:0,$?[s.x,s.y]:0,O?.glows,O?.grounds,ee>.002?[U,O?.stage,O?.product?.x,O?.product?.d,O?.product?.ground]:0]);if(F===x)return;if(h.setTransform(w,0,0,w,0,0),h.clearRect(0,0,f,b),C>0){h.globalAlpha=1;let A=Pt(),B=A.pearl,te=h.createLinearGradient(0,0,0,b);if(te.addColorStop(0,zr(nn(B,A.top,.5))),te.addColorStop(.6,zr(B)),te.addColorStop(1,zr(nn(B,A.low,.55))),h.fillStyle=te,h.fillRect(0,0,f,b),Me(f*.62,-b*.12,Math.max(f*.85,b*.55),A.sky,A.skyA),Me(f*.05,b*1.05,f*.45,A.mass,A.massA),h.globalAlpha=1,C<.999){let pe=Math.hypot(f,b),ne=s.x||f/2,_=s.y||b/2,oe=C*C*(3-2*C),Ne=Math.max(0,pe*1.15*oe-pe*.45),wt=Ne+pe*.55,ce=h.createRadialGradient(ne,_,Ne,ne,_,wt);ce.addColorStop(0,`rgba(0,0,0,${Math.min(1,oe*1.6)})`),ce.addColorStop(1,"rgba(0,0,0,0)"),h.globalCompositeOperation="destination-in",h.fillStyle=ce,h.fillRect(0,0,f,b),h.globalCompositeOperation="source-over"}}let K=Pt();for(let A of O?.glows??[]){h.save(),h.globalAlpha=A.k*C,h.translate(A.x,A.y),h.scale(1,A.h/A.w);let B=h.createRadialGradient(0,0,0,0,0,A.w);B.addColorStop(0,`rgba(${K.glow},${K.glowA})`),B.addColorStop(.5,`rgba(${K.glow},${K.glowA*.31})`),B.addColorStop(1,`rgba(${K.glow},0)`),h.fillStyle=B,h.fillRect(-A.w,-A.w,A.w*2,A.w*2),h.restore()}ee>.002&&ke(ee);for(let A of O?.grounds??[])Te(A,A,1);x=F}function Me(C,$,F,K,A){let B=h.createRadialGradient(C,$,0,C,$,F);B.addColorStop(0,`rgba(${K},${A})`),B.addColorStop(1,`rgba(${K},0)`),h.fillStyle=B,h.fillRect(C-F,$-F,F*2,F*2)}let De=Array.from({length:160},(C,$)=>{let F=Math.sin($*12.9898)*43758.5453,K=F-Math.floor(F),A=Math.sin($*78.233)*12345.678%1;return[K*Math.PI*2,Math.abs(A)*.9-.25,.3+$%7/10]});function ke(C){let $=O?.stage??{x:0,y:0,w:f,h:b},F=2**(U.exposure*.5),K=U.left,A=U.right,B=$.x+$.w/2,te=$.y+$.h*.52,pe=U.yaw,ne=U.pitch;h.save(),h.globalAlpha=C,h.fillStyle="#070808",h.fillRect(0,0,f,b),h.fillStyle="#ffffff";for(let[Qe,ze,nt]of De){let kt=Qe-pe*nt,ut=B+Math.sin(kt)*$.w*.9,Ke=te-(ze+ne*.6*nt)*$.h;Math.cos(kt)<-.2||ut<$.x||ut>$.x+$.w||(h.globalAlpha=C*.1*nt*F,h.fillRect(ut,Ke,1.1,1.1))}h.globalAlpha=C;let _=te+$.h*(.12-ne*.55),oe=O?.product?.ground??te+$.h*.18,Ne=h.createLinearGradient(0,_,0,$.y+$.h);Ne.addColorStop(0,"rgba(255,255,255,0)"),Ne.addColorStop(.25,`rgba(255,255,255,${.035*F})`),Ne.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=Ne,h.fillRect($.x,_,$.w,$.y+$.h-_);let wt=O?.product?.x??B,ce=O?.product?.d??$.h*.4;for(let[Qe,ze]of[[-1,K],[1,A]]){if(ze<=.01)continue;let nt=wt+Qe*ce*(1.1+.5*Math.sin(pe*Qe+.4)),kt=.18+.3*Math.max(0,Math.sin(.15+ne));h.save(),h.translate(nt,oe),h.scale(1,kt);let ut=h.createRadialGradient(0,0,0,0,0,ce*1.3);ut.addColorStop(0,`rgba(240,242,240,${.12*ze*F})`),ut.addColorStop(1,"rgba(240,242,240,0)"),h.fillStyle=ut,h.beginPath(),h.arc(0,0,ce*1.3,0,Math.PI*2),h.fill(),h.restore();let Ke=Qe<0?$.x:$.x+$.w,He=h.createRadialGradient(Ke,te,0,Ke,te,$.w*.45);He.addColorStop(0,`rgba(230,234,232,${.07*ze*F})`),He.addColorStop(1,"rgba(230,234,232,0)"),h.fillStyle=He,h.fillRect($.x,$.y,$.w,$.h)}let dt=h.createRadialGradient(B,te,$.h*.2,B,te,Math.hypot($.w,$.h)*.62);dt.addColorStop(0,"rgba(0,0,0,0)"),dt.addColorStop(1,"rgba(0,0,0,.55)"),h.fillStyle=dt,h.fillRect(0,0,f,b),h.restore()}function Te(C,$,F){if(!Number.isFinite($.d+$.x+C.y)||$.d<=0)return;let K=$.d/2,A=ee>.5||Pt().orb.dark;h.save(),h.globalAlpha=F,h.translate($.x,C.y),h.scale(1,.2);let B=h.createRadialGradient(0,0,0,0,0,K*1.5);A?(B.addColorStop(0,"rgba(240,240,236,.12)"),B.addColorStop(1,"rgba(240,240,236,0)"),h.globalCompositeOperation="lighter"):(B.addColorStop(0,"rgba(70,72,78,.22)"),B.addColorStop(.5,"rgba(70,72,78,.07)"),B.addColorStop(1,"rgba(70,72,78,0)")),h.fillStyle=B,h.beginPath(),h.arc(0,0,K*1.5,0,Math.PI*2),h.fill(),h.restore()}let Q={orb:r,reduced:Ca,chamber:U,body:{get x(){return s.x},get y(){return s.y},get d(){return s.d},get hosted(){return s.hosted}},addBackdrop:C=>I.add(C),removeBackdrop:C=>I.delete(C),drawBackdrop:lt,exportPNG(C,$=r.element){let K=document.createElement("canvas");K.width=Math.round(C.w*2),K.height=Math.round(C.h*2);let A=K.getContext("2d");A.drawImage(p,C.x*w,C.y*w,C.w*w,C.h*w,0,0,K.width,K.height);for(let B of $.querySelectorAll("canvas")){let te=B.getBoundingClientRect();A.drawImage(B,(te.left-C.x)*2,(te.top-C.y)*2,te.width*2,te.height*2)}return new Promise(B=>K.toBlob(B,"image/png"))}};z=rn(Q),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__exit={api:Q,body:s,site:z,get scene(){return O}})}export{Or as EXIT};
