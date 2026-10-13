import{e as Lt,f as Mt,h as oa,i as na,j as Ct,k as At,n as ia,o as sa,p as qt,r as Rt,t as la,u as da}from"./chunk-JXXXOV7W.js";var he=[{id:"products",label:"Products",route:"#/products",line:"Objects of light and glass, ready to use.",action:"Explore products",clip:"products",words:["products","product","pieces","piece","objects","gallery","shop"]},{id:"templates",label:"Templates",route:"#/templates",line:"Complete compositions to start from.",action:"Browse templates",clip:"templates",words:["templates","template","compositions","websites","cassettes"]},{id:"studio",label:"Studio",route:"#/studio",line:"Shape the light. Make it yours.",action:"Open Studio",clip:"studio",words:["studio","editor","customize","customise","edit","workshop"]},{id:"sound",label:"Sound",route:"#/sound",line:"Voices and the quiet sounds of glass.",action:"Listen",clip:"sound",words:["sound","sounds","voice","voices","audio","listen"]}];var Ot=t=>(Object.values(t).forEach(o=>o&&typeof o=="object"&&Ot(o)),Object.freeze(t)),vt=Ot({version:1,shell:{roughness:.01,thickness:.78,ior:1.58,tint:"#cdd2cf",tintAmount:.72,elastic:0},interior:{kind:"light",amount:.5,size:.5,motion:.4,fill:.5,colour:"#f1f0ec"},light:{colour:"#f6f6f3",strength:.9,x:-.04,y:-.3,z:.12,spread:.8,glow:.3},motion:{idle:0},voice:{enabled:!0,response:.6}}),pt=(t,o,d,a)=>Ot({id:t,name:o,line:d,family:"orb",config:{...structuredClone(vt),...Object.fromEntries(Object.entries(a).map(([m,u])=>[m,{...vt[m],...u}]))}}),We=[pt("original","Light","Clear glass holding one soft white light.",{}),pt("beads","Beads","Small glass beads resting and rolling inside the shell.",{interior:{kind:"beads",amount:.6,size:.55,motion:.45},light:{strength:.7},shell:{thickness:.15,ior:1.3}}),pt("glitter","Glitter","Fine reflective flecks suspended in the volume.",{interior:{kind:"glitter",amount:.6,size:.35,motion:.35,colour:"#f4f4f2"}}),pt("liquid","Liquid","A clear liquid with a meniscus that moves with the glass.",{interior:{kind:"liquid",fill:.42,motion:.5,colour:"#dfe3e1"},light:{strength:.78}}),pt("gel","Gel","A soft gel body; the shell answers with a damped give.",{interior:{kind:"gel",amount:.55,motion:.45,colour:"#e4e6e3"},shell:{elastic:.55}})],zt=We[0].config,It=t=>We.find(o=>o.id===t)??We[0],Le=[{id:"orb",name:"The Orb",kind:"Interactive object",line:"A 3D sphere for your own work, in twenty versions: glass, metal, porcelain, bloom, and glass with light, sparkle or beads inside.",receives:["ES module (Three.js r186) with the sphere and its material","The version you choose","Integration notes and dependency list"],source:["dist/light-orb.js","dist/orb-three.js","dist/orb-lighting.js","dist/orb-floor.js"],preview:"orb",studio:!0,presets:We.map(t=>t.id),readiness:"preview_ready",missing:["price","checkout provider","packaged download (source export not yet assembled)"],price:null},{id:"orb-slider",name:"Orb Slider",kind:"Interactive control",line:"A clear glass capsule whose thumb is the Orb itself. Slide it to enter.",receives:["Slider component source","Orb thumb integration","Integration notes"],source:["dist/intro/activation.js","dist/intro/glass-control.js"],preview:"slider",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package (currently embedded in the intro)"],price:null},{id:"orb-wave",name:"Orb Wave",kind:"Surface effect",line:"The ripple the Orb leaves on the floor when it lands, drawn in light.",receives:["Light-world shader source","Impact trigger API","Integration notes"],source:["dist/intro/light-world.js"],preview:"wave",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"background-pack",name:"Background Pack",kind:"Two environments",line:"A dark world and a light one, and the change between them.",receives:["Dark and warm environment shader","Exposure transition","Integration notes"],source:["dist/intro/light-world.js"],preview:"backgrounds",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"crystal-controls",name:"Crystal Controls",kind:"Interface kit",line:"Buttons, switches, fields and sliders in clear glass, with every state designed.",receives:["CSS component source","Every state: hover, focus, pressed, selected, disabled, loading","Integration notes"],source:["dist/app/glass.css.js"],preview:"controls",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged download"],price:null}],wt=t=>Le.find(o=>o.id===t),we=[{id:"the-light-orb",name:"The Light Orb",line:"This website\u2019s own beginning: the Orb as host, a quiet greeting, the quotation and the four destinations.",cover:{src:"./media/templates/the-light-orb.cover.jpg",from:"dist/intro.html (post-intro welcome, live render)",meta:"./media/templates/the-light-orb.cover.json"},route:"#/",includes:["Centred welcome with the hosting Orb","Quotation scene","Destination selector"],readiness:"preview_ready",missing:["price","checkout provider","packaged source export"],price:null}],ut=[{id:"samantha",name:"Samantha",locale:"en-US",provider:"macOS system speech (development)",rights:{onSite:"development preview only",download:"not permitted"},readiness:"blocked",missing:"licensed voice from a chosen provider"},{id:"daniel",name:"Daniel",locale:"en-GB",provider:"macOS system speech (development)",rights:{onSite:"development preview only",download:"not permitted"},readiness:"blocked",missing:"licensed voice from a chosen provider"}],Pt={home:"Welcome to The Light Orb. A space for creative possibilities. Let\u2019s explore.",products:"Explore the pieces. Each one is designed to become part of something of your own.",templates:"Start with a complete composition. Select a cassette to preview the design.",studio:"Choose a piece, then shape its light, material and movement.",sound:"Listen before you choose. Find the voice and sounds that fit your work.",voice_audition:"A little light. A new idea. Something of your own."},jt=(t,o)=>`./media/voice/${t}.${o}.m4a`,gt={text:"I don\u2019t know why people expect art to make sense when they accept the fact that life doesn\u2019t make sense.",author:"David Lynch",work:"interview with Kristine McKenna, Los Angeles Times, 20 August 1989",source:"https://www.latimes.com/archives/la-xpm-1989-08-20-ca-1327-story.html"};var Dt=[{id:"select",name:"Select",line:"A soft glass touch for choosing.",file:"./media/sfx/select.wav"},{id:"open",name:"Open",line:"A breath of air as a panel opens.",file:"./media/sfx/open.wav"},{id:"close",name:"Close",line:"The same air, settling.",file:"./media/sfx/close.wav"},{id:"confirm",name:"Confirm",line:"Two quiet glass tones.",file:"./media/sfx/confirm.wav"},{id:"detent",name:"Detent",line:"A precise tick for wheels and steps.",file:"./media/sfx/detent.wav"},{id:"type",name:"Type",line:"A dry, very quiet key.",file:"./media/sfx/type.wav"},{id:"level",name:"Level",line:"A short tone for volume changes.",file:"./media/sfx/level.wav"}],ca={promise:"A new drop every two weeks.",open:!1,price:null,interval:null,quota:null,plans:[{id:"ready",name:"Ready-made",line:"Choose a curated piece and use it as it is.",points:["One finished piece","Its source and integration notes"]},{id:"studio",name:"Studio",line:"Customise a piece and export your own version.",points:["Light, material and movement controls","Saved designs"]},{id:"member",name:"Membership",line:"Follow the collection as it grows.",points:["A new drop every two weeks"]}]};var pa="lightorb:audio",rt=(t,o=0,d=1)=>Math.min(d,Math.max(o,t)),Ht={master:!1,guide:!0,sfx:!0,voice:ut[0].id,gain:.8,sfxGain:.5,volume:.8};function Ua(){try{return{...Ht,...JSON.parse(localStorage.getItem(pa)||"{}")}}catch{return{...Ht}}}function ua(){let t=Ua();ut.some(p=>p.id===t.voice)||(t.voice=Ht.voice);let o=new Set,d=null,a=null,m=null,u=null,n=null,s=null,i=new Audio;i.preload="auto",i.crossOrigin="anonymous",i.setAttribute("playsinline","");let A=null,b={clip:null,voice:null,status:"idle",error:null,energy:0,journey:new Set},U=new Map,L=new Map,g=p=>{if(!L.has(p)){let $=fetch(p).then(C=>{if(!C.ok)throw new Error(C.status);return C.blob()}).then(C=>URL.createObjectURL(C));L.set(p,$),$.catch(()=>L.delete(p))}return L.get(p)},_={},E=()=>o.forEach(p=>p(oe)),V=()=>{try{localStorage.setItem(pa,JSON.stringify(t))}catch{}};function B(){if(d)return d;let p=window.AudioContext||window.webkitAudioContext;if(!p)return null;d=new p,a=d.createGain(),a.connect(d.destination),m=d.createGain(),m.connect(a),u=d.createGain(),u.connect(a),n=d.createAnalyser(),n.fftSize=1024,n.smoothingTimeConstant=0,n.connect(m),s=new Float32Array(n.fftSize);try{A=d.createMediaElementSource(i),A.connect(n)}catch{A=null}return se(),d}function se(){if(!d)return;let p=d.currentTime;a.gain.setTargetAtTime(t.master?t.volume??.8:0,p,.02),m.gain.setTargetAtTime((t.guide||b.clip?.startsWith("voice_audition"),t.gain),p,.02),u.gain.setTargetAtTime(t.sfx?t.sfxGain:0,p,.02)}let le=()=>{let p=B();p?.state==="suspended"&&p.resume().catch(()=>{}),De()};for(let p of["pointerdown","keydown","touchend"])addEventListener(p,le,{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden?i.paused||(i.pause(),b.status="paused",b.hiddenPause=!0,E()):b.hiddenPause&&(b.hiddenPause=!1)}),i.addEventListener("ended",()=>{b.status="ended",E()}),i.addEventListener("pause",()=>{b.status==="playing"&&(b.status="paused",E())}),i.addEventListener("playing",()=>{b.status="playing",b.error=null,E()}),i.addEventListener("error",()=>{b.clip&&(b.status="error",b.error="The recording could not be loaded.",E())}),i.addEventListener("loadedmetadata",E);let me=(p,{voice:$=t.voice,from:C=0,kind:N="guide"}={})=>be(`${p}.${$}`,jt(p,$),{from:C,kind:N,voice:$}),de=(p,$,{from:C=0}={})=>be(p,$,{from:C,kind:"audition"});async function be(p,$,{from:C=0,kind:N="guide",voice:Q=null}={}){if(N==="guide"&&(!t.master||!t.guide))return!1;if(Se(),le(),b.clip!==p){i.pause(),b.clip=p,b.voice=Q,b.status="loading",E();try{i.src=await g($)}catch{i.src=$}if(b.clip!==p)return!1}if(b.env=null,F($,200).then(G=>{b.clip===p&&(b.env=G)}).catch(()=>{}),b.kind=N,C?(i.readyState<1&&await new Promise(G=>i.addEventListener("loadedmetadata",G,{once:!0})),i.currentTime=C):i.currentTime&&(i.currentTime=0),E(),!t.master||N==="guide"&&!t.guide||b.clip!==p)return!1;try{return await i.play(),!0}catch{return b.status="blocked",b.error="Playback was blocked. Press play to start it.",E(),!1}}function Ye(){i.paused||i.pause(),b.status="paused",E()}async function Z(){le();try{await i.play()}catch{b.status="blocked",E()}}let J=typeof speechSynthesis<"u"?speechSynthesis:null,Ce=0,te={on:!1};function Se(){J&&te.on&&(te.on=!1,J.cancel())}let Ae={samantha:[/ava.*premium/i,/zoe.*premium/i,/samantha.*(enhanced|premium)/i,/(aria|jenny|emma|ava).*natural/i,/natural.*(female|aria|jenny)/i,/google us english/i,/google uk english female/i,/^(ava|zoe|allison|susan)\b/i,/^samantha/i],daniel:[/(evan|nathan|tom).*premium/i,/daniel.*(enhanced|premium)/i,/(guy|ryan|andrew|brian|christopher).*natural/i,/natural.*male/i,/google uk english male/i,/^(evan|nathan|tom|aaron)\b/i,/^daniel/i]},Pe=[],je=()=>{Pe=J?.getVoices()??[]};J&&(je(),J.addEventListener?.("voiceschanged",je));function qe(){Pe.length||je();let p=Pe.filter($=>/^en[-_]/i.test($.lang));for(let $ of Ae[t.voice]??Ae.samantha){let C=p.find(N=>$.test(N.name));if(C)return C}return p.find($=>$.localService===!1)??p[0]}function j(p,{onend:$}={}){if(!J||!p||!t.master||!t.guide)return $?.(),!1;le(),i.pause(),J.cancel();let C=qe(),N=C&&(!C.localService||/premium|enhanced|natural/i.test(C.name)),Q=p.match(/[^.!?]+[.!?]*\s*/g)?.map(ae=>ae.trim()).filter(Boolean)??[p],G={};return te.u=G,te.on=!0,b.kind="guide",b.clip="speech",b.status="playing",E(),Q.forEach((ae,He)=>{let ne=new SpeechSynthesisUtterance(ae);C&&(ne.voice=C,ne.lang=C.lang),ne.rate=N?1:.94,ne.pitch=1,ne.volume=t.volume??.8,ne.onboundary=()=>{Ce=1},ne.onstart=()=>{Ce=1},He===Q.length-1&&(ne.onend=ne.onerror=()=>{te.u===G&&(te.on=!1,b.status="stopped",E(),$?.())}),J.speak(ne)}),!0}let k=()=>qe()?.name??null;function y(){Se(),i.pause(),b.status=b.clip?"stopped":"idle",E()}function T(p){i.duration&&(i.currentTime=rt(p)*i.duration,E())}let M=performance.now();function O(){let p=performance.now(),$=Math.min(.1,(p-M)/1e3);M=p;let C=0;if(te.on&&t.master)Ce=Math.max(0,Ce-$*3.2),C=rt(.35+.45*Ce+.15*Math.sin(p/90));else if(!A&&b.env&&!i.paused&&t.master&&i.duration)C=rt(b.env.bins[Math.min(b.env.bins.length-1,Math.floor(i.currentTime/i.duration*b.env.bins.length))]*1.1);else if(n&&!i.paused&&t.master){n.getFloatTimeDomainData(s);let Q=0;for(let ae=0;ae<s.length;ae++)Q+=s[ae]*s[ae];let G=Math.sqrt(Q/s.length);C=rt((G-.008)/.16)}let N=C>b.energy?.05:.18;return b.energy+=(C-b.energy)*(1-Math.exp(-$/N)),b.energy<.001&&(b.energy=0),b.energy}let I=(p,$=t.voice,C=72)=>F(jt(p,$),C);async function F(p,$=72){let C=`${p}|${$}`;if(U.has(C))return U.get(C);let N=(async()=>{let Q=await(await fetch(p)).arrayBuffer(),G=window.OfflineAudioContext||window.webkitOfflineAudioContext,ae=await new G(1,44100,44100).decodeAudioData(Q),He=ae.getChannelData(0),ne=Math.max(1,Math.floor(He.length/$)),Ne=[],Be=0;for(let Ee=0;Ee<$;Ee++){let _e=0;for(let tt=Ee*ne;tt<(Ee+1)*ne;tt++)_e+=He[tt]*He[tt];let Xe=Math.sqrt(_e/ne);Ne.push(Xe),Be=Math.max(Be,Xe)}return{bins:Ne.map(Ee=>Ee/(Be||1)),duration:ae.duration}})();return U.set(C,N),N.catch(()=>U.delete(C)),N}let re={press:"select",release:"select",volume:"level",case:"open"},z={select:90,type:70,detent:50,level:110,open:220,close:220,confirm:400},D={select:.7,type:.45,detent:.6,level:.5,open:.6,close:.55,confirm:.7},pe={},ue=0;function Ue(p){pe[p]||!d||(pe[p]=fetch(`./media/sfx/${p}.wav`).then($=>$.arrayBuffer()).then($=>d.decodeAudioData($)).then($=>pe[p]=$).catch(()=>pe[p]=null))}function et(p,$=.5){if(p=re[p]||p,!t.master||!t.sfx)return;let C=B();if(!C||C.state!=="running")return;let N=performance.now();if(N-(_[p]??0)<(z[p]??80)||ue>3)return;_[p]=N;let Q=pe[p];if(!Q||Q instanceof Promise){Ue(p);return}let G=C.createBufferSource(),ae=C.createGain();G.buffer=Q,ae.gain.value=(D[p]??.6)*(p==="level"?.6+.4*rt($):1),p==="level"&&(G.playbackRate.value=.85+.3*rt($)),G.connect(ae),ae.connect(u),ue++,G.onended=()=>{ue--,ae.disconnect()},G.start()}let De=()=>{if(d)for(let p of Object.keys(z))Ue(p)},oe={prefs:t,state:b,el:i,get ready(){return!!d},get position(){return i.duration?i.currentTime/i.duration:0},get time(){return i.currentTime||0},get duration(){return i.duration||0},get playing(){return te.on||!i.paused&&!i.ended},set(p){Object.assign(t,p),V(),le(),se(),(!t.master||!t.guide&&b.kind==="guide")&&(i.paused||i.pause(),Se()),E()},play:me,playUrl:de,say:j,voiceName:k,pause:Ye,resume:Z,stop:y,seek:T,energy:O,peaks:I,peaksUrl:F,sfx:et,unlock:le,once(p){return b.journey.has(p)||!t.master||!t.guide?Promise.resolve(!1):(b.journey.add(p),me(p).then($=>($||b.journey.delete(p),$)))},on(p){return o.add(p),()=>o.delete(p)}};return oe}var ot=(t,o,d)=>t+(o-t)*d,Nt=t=>{let o=parseInt(String(t).replace("#",""),16);return[(o>>16&255)/255,(o>>8&255)/255,(o&255)/255]},mr=Nt("#f3d8c5"),_a={fill:.08,lobe:.2,wall:.55,core:.034},Je=t=>structuredClone(t??vt);function yt(t,o,{dark:d=!1,envBoost:a=1,exposure:m=0,left:u=.65,right:n=.55}={}){let s=o.shell,i=o.light,A=o.interior;t.setOptics({..._a,lobe:ot(.1,.3,i.spread),core:ot(.026,.044,i.spread)}),t.setInterior({kind:A.kind,amount:A.amount,size:A.size,motion:A.motion,fill:A.fill,colour:A.colour}),t.setElastic(s.elastic??0);let b=Nt(s.tint);t.setMaterial({roughness:s.roughness,thickness:ot(.3,1.4,s.thickness),ior:s.ior,envMapIntensity:(d?1.9:2.1)*a*2**(m*.5),tint:b,tintDistance:s.tintAmount>.001?ot(8,.4,s.tintAmount):0}),t.setNeutral?.(!0);let U=Nt(i.colour),L=Math.max(...U);t.setLight({tint:U.map(_=>_/Math.max(.05,L)*1.05),spread:ot(.7,1.6,i.spread)}),t.setBloom(ot(.004,.08,i.glow)),t.setFocus({x:i.x,y:i.y,z:i.z}),t.setTone(d?"dark":"light"),t.setVolumeWorld(0),t.lockFeather([.5,.515]);let g=_=>(Math.round(_*10)/10).toFixed(1);return t.setWorld(d?`chamber:${g(u)}:${g(n)}`:"gallery"),{emission:i.strength/.72*2**(m*.35),voice:o.voice}}var ga=`
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
`;var fa=`
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
.st-lock{position:relative;min-height:100vh;display:grid;place-items:center;overflow:hidden}
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
.qt{height:100vh!important}
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
`;var ie=null,ye=null,nt=null,ft=0,Xa=performance.now()/1e3,ee={exposure:1,target:1,impacts:[null,null],next:0,strength:1,scale:90,horizon:.27,lamp:.9,orb:null};function Bt(t){if(!ye){ye=document.createElement("canvas"),ye.className="world-preview",ye.setAttribute("aria-hidden","true"),ye.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:inherit";try{ie=da(ye)}catch{ie=null}}return ie&&(nt=t,t.prepend(ye),Gt(),Ka()),ye}function Ft(){cancelAnimationFrame(ft),ft=0,ye?.remove(),nt=null}function Gt(){if(!nt||!ie)return;let t=nt.getBoundingClientRect();ie.resize(Math.max(2,t.width),Math.max(2,t.height),Math.min(devicePixelRatio||1,1.5))}addEventListener("resize",Gt);var ke={state:ee,setExposure(t,o=!1){ee.target=t,o&&(ee.exposure=t)},impact(t,o,d=ee.strength){let a=ee.next++%2;ee.impacts[a]={x:t,y:o,at:performance.now()/1e3,strength:d}},set(t){Object.assign(ee,t)},setOrb(t){ee.orb=t},get canvas(){return ye}};function Ka(){cancelAnimationFrame(ft);let t=()=>{if(!nt||!ie)return;let o=performance.now()/1e3,d=nt.getBoundingClientRect();Math.abs(d.width-ye.width/ie.ratio)>2&&Gt(),ee.exposure+=(ee.target-ee.exposure)*.05;let a=d.height,m=ee.orb;ie.setHorizon(ee.horizon),ie.setExposure(ee.exposure),ie.setNightGain(1),m?(ie.setOrb(m.x,m.y,m.d),ie.setLamp(m.x,m.y,m.d*3,ee.lamp*(1-ee.exposure)),ie.setReveal(m.x,m.y,Math.hypot(d.width,a),ee.exposure*60)):(ie.setReveal(0,0,1,0),ie.setLamp(0,0,1,0)),ee.impacts.forEach((u,n)=>ie.setImpact(n,u?.x??0,u?.y??0,u?o-u.at:-1,u?.strength??0,ee.scale)),ie.render(o-Xa),ft=requestAnimationFrame(t)};ft=requestAnimationFrame(t)}var ha="lightorb:cart",kt=()=>{try{return JSON.parse(localStorage.getItem(ha))??[]}catch{return[]}},ma=t=>{try{localStorage.setItem(ha,JSON.stringify(t))}catch{}Vt.forEach(o=>o(t))},Vt=new Set,Te={items:kt,has:t=>kt().some(o=>o.id===t),add(t){let o=kt();o.some(d=>d.id===t.id)||(o.push({...t,at:new Date().toISOString()}),ma(o))},remove(t){ma(kt().filter(o=>o.id!==t))},toggle(t){return Te.has(t.id)?(Te.remove(t.id),!1):(Te.add(t),!0)},on(t){return Vt.add(t),()=>Vt.delete(t)}};var Ja=(t,o,d)=>t+(o-t)*d;var qr=Math.PI/180;var W=[t=>Math.round(t*100),t=>t/100],Rr={scene:["Scene",[["scene.exposure","Exposure",-2,2,.1,"EV"],["scene.left","Left light",0,1,.01,"%",...W],["scene.right","Right light",0,1,.01,"%",...W],["scene.env","Environment",0,1,.01,"%",...W]]],light:["Light",[["orb.light.colour","Colour","color"],["orb.light.strength","Strength",0,1,.01,"%",...W],["orb.light.x","Position X",-.6,.6,.01,"r"],["orb.light.y","Position Y",-.8,.6,.01,"r"],["orb.light.z","Position Z",-.4,.4,.01,"r"],["orb.light.spread","Spread",0,1,.01,"%",...W],["orb.light.glow","Glow",0,1,.01,"%",...W]]],material:["Material",[["orb.shell.tint","Shell tint","color"],["orb.shell.tintAmount","Tint amount",0,1,.01,"%",...W],["orb.shell.roughness","Roughness",0,.5,.005,""],["orb.shell.thickness","Optical depth",0,1,.01,"r",t=>+Ja(.3,1.4,t).toFixed(2),t=>(t-.3)/1.1],["orb.shell.ior","IOR",1,2,.01,""]]],interior:["Interior",[["orb.interior.kind","Type","select",[["light","Light"],["beads","Beads"],["glitter","Glitter"],["liquid","Liquid"],["gel","Gel"]]]]],voice:["Voice response",[["orb.voice.response","Response",0,1,.01,"%",...W]]],transform:["Transform",[["rot","Rotation",-180,180,1,"\xB0"]]],view:["View",[["view.yaw","Orbit",-60,60,1,"\xB0"],["view.pitch","Elevation",-20,35,1,"\xB0"],["view.zoom","Zoom",.6,1.4,.01,"%",...W]]],slider:["Capsule",[["slider.length","Length",240,600,1,"px"],["slider.height","Height",60,130,1,"px"],["slider.tint","Glass tint","color"],["slider.tintAmount","Tint amount",0,1,.01,"%",...W],["slider.preset","Orb thumb","select",We.map(t=>[t.id,t.name])]]],wave:["Wave",[["wave.strength","Strength",.1,1,.01,"%",...W],["wave.scale","Ring scale",40,140,1,"px"],["wave.exposure","Environment",0,1,.01,"%",...W]]],bg:["Environment",[["bg.exposure","Dark \u2192 warm",0,1,.01,"%",...W],["bg.horizon","Horizon",.15,.45,.01,"%",...W],["bg.lamp","Orb lamp (dark)",0,1,.01,"%",...W]]],ctl:["Crystal controls",[["ctl.tint","Tint","color"],["ctl.tintAmount","Tint amount",0,1,.01,"%",...W],["ctl.depth","Optical depth",0,10,.5,"px"],["ctl.radius","Corner radius",6,999,1,"px"],["ctl.blur","Backdrop blur",0,24,1,"px"]]]},Or={beads:[["orb.interior.amount","Count",0,1,.01,"",t=>Math.round(8+t*36),t=>(t-8)/36],["orb.interior.size","Bead size",0,1,.01,"%",...W],["orb.interior.motion","Motion",0,1,.01,"%",...W]],glitter:[["orb.interior.amount","Density",0,1,.01,"%",...W],["orb.interior.size","Fleck size",0,1,.01,"%",...W],["orb.interior.motion","Sparkle drift",0,1,.01,"%",...W],["orb.interior.colour","Colour","color"]],liquid:[["orb.interior.fill","Fill",0,1,.01,"%",...W],["orb.interior.motion","Slosh",0,1,.01,"%",...W],["orb.interior.colour","Colour","color"]],gel:[["orb.shell.elastic","Elasticity",0,1,.01,"%",...W],["orb.interior.amount","Body size",0,1,.01,"%",...W],["orb.interior.motion","Motion",0,1,.01,"%",...W],["orb.interior.colour","Colour","color"]],light:[]};function ba(t){let o=null,d=null,a=null,m={},u={emission:1},n=document.createElement("div");n.className="x-product",n.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:31",document.body.append(n);let s={x:-999,y:-999,d:100,vis:0},i={x:-999,y:-999,d:100,vis:0,vx:0,vy:0,vd:0},A=!0;function b(){return o||d||(d=la({container:n,diameter:240,driven:!0,background:"#f3f3f1"}).then(L=>(o=L,d=null,L.attachPointer(document.createElement("div"))(),L.setBackdrop((g,_)=>t.drawBackdrop(g,_,i)),L.setVisibility(0),L.tick(performance.now()),a&&U(),L)).catch(()=>{d=null})),d}function U(){o&&a&&(u=yt(o,a,m),o.setEmission(Math.min(1.4,u.emission)))}return{get orb(){return o},get element(){return o?.element},get output(){return u},show(L,g={}){a=Je(L),m=g,A=!1,b(),U()},update(L,g=m){a=Je(L),m=g,U()},hide(){A=!0,o&&(o.setVisibility(0),o.setView({yaw:0,pitch:0}),o.setObjectYaw(0),o.setSpeech(0),o.tick(performance.now())),i.vis=0,i.x=-999},attachPointer(L){return o?o.attachPointer(L,{range:"volume"}):(b()?.then(g=>g?.attachPointer(L,{range:"volume"})),null)},frame(L){if(!o)return;if(!L||A){(i.vis>0||o.element.style.visibility!=="hidden")&&(i.vis=0,o.setVisibility(0),o.tick(performance.now()));return}let g=1/60,_=9;if(L.snap||i.x<-900)Object.assign(i,{x:L.x,y:L.y,d:L.d,vx:0,vy:0,vd:0});else for(let E of["x","y","d"]){let V="v"+E;i[V]+=(_*_*(L[E]-i[E])-2*_*i[V])*g,i[E]+=i[V]*g}i.vis+=((L.vis??1)-i.vis)*.2,o.holdRaster(Math.ceil(Math.max(i.d,L.d,120)*1.06)),o.setPose({x:i.x,y:i.y,diameter:i.d}),o.setVisibility(i.vis),o.tick(performance.now())},pose:i}}var Wt=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null,va=!!Wt;function wa({onresult:t,onend:o,onerror:d}){if(!Wt)return d?.("unsupported"),null;let a=new Wt;a.lang=navigator.language||"en-US",a.interimResults=!0,a.maxAlternatives=1,a.continuous=!1;let m="",u="";a.onresult=n=>{u=[...n.results].map(s=>s[0].transcript).join(" "),n.results[n.results.length-1].isFinal&&(m=u),t?.(u,!!m)},a.onerror=n=>d?.(n.error),a.onend=()=>o?.(m||u);try{a.start()}catch{return d?.("busy"),null}return a}var xa=t=>String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),Me=(t,...o)=>o.some(d=>new RegExp(`\\b${d}\\b`).test(t)),Qa={home:["home","start","beginning","inicio","principio","portada"],products:[...he[0].words,"productos","producto","tienda","objetos"],templates:[...he[1].words,"plantillas","plantilla","composiciones"],studio:[...he[2].words,"estudio","editar","personalizar","disenar"],sound:[...he[3].words,"sonido","sonidos","voces","escuchar","audio"],membership:["membership","member","plans","plan","pricing","price","prices","membresia","miembro","planes","precio","precios","cuesta","cost"],account:["account","profile","downloads","cuenta","perfil","descargas"],signin:["sign in","log in","login","iniciar sesion","entrar"]},Za={home:"#/",membership:"#/membership",account:"#/account",signin:"#/signin"},er={"orb-slider":["slider","deslizador"],"orb-wave":["wave","ola","onda","ripple"],"background-pack":["background","backgrounds","fondo","fondos"],"crystal-controls":["controls","buttons","controles","botones","crystal"]};function ya(t,{here:o,presentation:d}){let a=xa(t);if(!a)return{say:"I didn\u2019t catch that. Tap me and try again."};if(a.split(" ").length<=3&&Me(a,"stop","quiet","silence","shh","para","calla","callate","silencio","basta"))return{say:"",stop:!0};if(Me(a,"where am i","where are we","donde estoy","donde estamos","que es esto","what is this","what is here","que hay aqui"))return{say:d()};if(Me(a,"help","what can you do","what can i do","ayuda","ayudame","que puedes hacer","que puedo hacer"))return{say:"I can take you anywhere here. Say Products, Templates, Studio, Sound or Membership, or name a piece, like the Slider or the Wave. You can also ask me where you are."};if(Me(a,"thank you","thanks","gracias"))return{say:"With pleasure. I\u2019m right here when you need me."};if(Me(a,"who are you","what are you","quien eres","que eres","como te llamas","your name"))return{say:"I\u2019m the Light Orb, the guide of this place. A little light made of glass. I show you around and I answer when you call."};if(Me(a,"back","go back","atras","volver","vuelve"))return{say:"Going back.",back:!0};for(let[u,n]of Object.entries(er))if(Me(a,...n)){let s=Le.find(i=>i.id===u);if(s)return{say:`Here is ${s.name}. ${s.line}`,go:`#/products/${u}`,quiet:!0}}let m=we.find(u=>a.includes(xa(u.name)));if(m)return{say:`Opening ${m.name}.`,go:`#/templates/${m.id}`,quiet:!0};for(let[u,n]of Object.entries(Qa))if(Me(a,...n))return u===o?{say:`We are already here. ${d()}`}:{go:Za[u]??`#/${u}`};return Me(a,"the orb","orb","esfera","la orb","bola")?{say:`Here is the Orb. ${Le[0].line}`,go:`#/products/${Le[0].id}`,quiet:!0}:Me(a,"hello","hi","hey","hola","buenas","buenos dias","buenas tardes","buenas noches")?{say:"Hello. It\u2019s lovely to hear you. Where would you like to go? Products, Templates, Studio or Sound?"}:{say:"I\u2019m still learning words. Try Products, Templates, Studio, Sound, or ask me where you are."}}var ce={saved:"lightorb:saved",designs:"lightorb:designs",profile:"lightorb:profile"},Oe=(t,o)=>{try{return JSON.parse(localStorage.getItem(t))??o}catch{return o}},mt=(t,o)=>{try{return localStorage.setItem(t,JSON.stringify(o)),!0}catch{return!1}},fe={saved:()=>Oe(ce.saved,[]),isSaved:(t,o)=>Oe(ce.saved,[]).some(d=>d.type===t&&d.id===o),toggleSaved(t,o,d,a){let m=Oe(ce.saved,[]),u=m.findIndex(n=>n.type===t&&n.id===o);return u>=0?m.splice(u,1):m.unshift({type:t,id:o,name:d,href:a,at:new Date().toISOString()}),mt(ce.saved,m),u<0},designs:()=>Oe(ce.designs,[]),design:t=>Oe(ce.designs,[]).find(o=>o.id===t),saveDesign(t){let o=Oe(ce.designs,[]),d=o.findIndex(a=>a.id===t.id);return d>=0?o[d]=t:o.unshift(t),mt(ce.designs,o.slice(0,40))},renameDesign(t,o){let d=Oe(ce.designs,[]),a=d.find(m=>m.id===t);a&&(a.name=o,mt(ce.designs,d))},deleteDesign(t){mt(ce.designs,Oe(ce.designs,[]).filter(o=>o.id!==t))},profile:()=>Oe(ce.profile,null),setProfile:t=>mt(ce.profile,t)},ka=[["profile","Profile"],["designs","My Designs"],["saved","Saved"],["downloads","Downloads"]],ar='<p class="note">Local preview: accounts are not connected yet. What you see here is kept in this browser only.</p>';function it(t,o,d="profile"){let{esc:a,audio:m}=o;ka.some(s=>s[0]===d)||(d="profile");let u=fe.profile();t.innerHTML=`
    <section class="dest acct">
      <header class="dh"><p class="kicker">Account</p><h1>${u?.name?a(u.name):"Your space"}</h1>${ar}</header>
      <nav class="segbar acct-tabs" aria-label="Account">${ka.map(([s,i])=>`<a class="pill" href="#/account/${s}" ${s===d?'aria-current="page" aria-pressed="true"':""}>${i}</a>`).join("")}</nav>
      <div class="acct-body" data-body></div>
    </section>${o.footer()}`;let n=t.querySelector("[data-body]");if(d==="profile"&&(n.innerHTML=`<form class="form" data-prof>
        <label class="fl"><span>Display name</span><input class="gi" name="name" value="${a(u?.name||"")}" placeholder="How the site greets you" maxlength="40"></label>
        <div class="acts"><button class="gb primary" type="submit">Save on this device</button>${u?'<button class="gb" type="button" data-forget>Forget</button>':""}</div>
        <p class="note">Sign-in and email are not available yet. <a href="#/signin">About signing in</a></p>
      </form>
      <div class="kv"><span>Sound</span><b>${m.prefs.master?"On":"Off"}</b><span>Narration</span><b>${m.prefs.guide?"On":"Off"}</b><span>Guide voice</span><b>${a(m.prefs.voice)}</b><span>Membership</span><b>Not available yet</b></div>`,n.querySelector("[data-prof]").addEventListener("submit",s=>{s.preventDefault();let i=s.target.name.value.trim();fe.setProfile(i?{name:i}:null),m.sfx("confirm"),it(t,o,"profile")}),n.querySelector("[data-prof] .gi").addEventListener("input",s=>{s.isTrusted&&m.sfx("type")}),n.querySelector("[data-forget]")?.addEventListener("click",()=>{try{localStorage.removeItem(ce.profile)}catch{}it(t,o,"profile")})),d==="designs"){let s=fe.designs();n.innerHTML=s.length?`<div class="dgrid">${s.map(i=>`<article class="dc" data-d="${i.id}">
        <a class="dc-img" href="#/studio?design=${i.id}" aria-label="Open ${a(i.name)} in Studio">${i.thumb?`<img src="${i.thumb}" alt="">`:""}</a>
        <input class="dc-n gi" value="${a(i.name)}" aria-label="Design name" maxlength="48">
        <p class="note">${a(i.familyName)} \xB7 ${new Date(i.at).toLocaleDateString()}</p>
        <div class="acts"><a class="gb small primary" href="#/studio?design=${i.id}">Open in Studio</a><button class="gb small" type="button" data-del>Delete</button></div></article>`).join("")}</div>`:'<div class="empty"><h2>No designs yet</h2><p>Designs you save in Studio appear here, with a picture of each one.</p><a class="gb primary" href="#/studio">Open Studio</a></div>',n.querySelectorAll("[data-d]").forEach(i=>{let A=i.dataset.d,b=i.querySelector(".dc-n");b.addEventListener("change",()=>{fe.renameDesign(A,b.value.trim()||"Untitled design"),m.sfx("confirm")}),b.addEventListener("input",U=>{U.isTrusted&&m.sfx("type")}),i.querySelector("[data-del]").addEventListener("click",()=>{confirm(`Delete \u201C${b.value}\u201D? This cannot be undone.`)&&(fe.deleteDesign(A),m.sfx("close"),it(t,o,"designs"))})})}if(d==="saved"){let s=fe.saved();n.innerHTML=s.length?`<ul class="slist">${s.map((i,A)=>`<li><span class="kicker">${i.type}</span><a href="${i.href}">${a(i.name)}</a><button class="pill" type="button" data-rm="${A}">Remove</button></li>`).join("")}</ul>`:'<div class="empty"><h2>Nothing saved yet</h2><p>Save products, templates and sounds to find them here.</p><a class="gb primary" href="#/products">Explore products</a></div>',n.querySelectorAll("[data-rm]").forEach(i=>i.addEventListener("click",()=>{let A=s[+i.dataset.rm];fe.toggleSaved(A.type,A.id),m.sfx("close"),it(t,o,"saved")}))}d==="downloads"&&(n.innerHTML='<div class="empty"><h2>No downloads yet</h2><p>Pieces you buy will be listed here once purchasing opens. Studio exports are saved directly to your computer.</p></div>')}function Yt(t,o,d){t.innerHTML=`
    <section class="dest sign">
      <header class="dh"><p class="kicker">Account</p><h1>${d==="in"?"Sign in":"Create an account"}</h1></header>
      <form class="form" data-sign novalidate>
        <label class="fl"><span>Email</span><input class="gi" type="email" name="email" autocomplete="email" disabled></label>
        <label class="fl"><span>Password</span><input class="gi" type="password" name="pw" autocomplete="${d==="in"?"current-password":"new-password"}" disabled></label>
        <div class="acts"><button class="gb primary" type="submit" disabled>${d==="in"?"Sign in":"Create account"}</button><a class="gb" href="#/account">Continue on this device</a></div>
        <p class="note">Accounts open with membership. Until then nothing is sent and no password is collected; your saved work stays in this browser.</p>
        <p class="note">${d==="in"?'New here? <a href="#/signup">Create an account</a>':'Already have one? <a href="#/signin">Sign in</a>'}</p>
      </form>
    </section>${o.footer()}`}function Sa(t,o){let d=ca;t.innerHTML=`
    <section class="dest memb">
      <header class="dh"><p class="kicker">Membership</p><h1>${d.promise}</h1><p class="dh-l">Three ways to work with The Light Orb. Prices, billing and what each plan includes are still being decided.</p></header>
      <div class="plans">${d.plans.map(a=>`<article class="plan${a.id==="member"?" em":""}"><h2>${a.name}</h2><p>${a.line}</p><ul>${a.points.map(m=>`<li>${m}</li>`).join("")}</ul>
        ${a.id==="ready"?'<a class="gb" href="#/products">Explore products</a>':a.id==="studio"?'<a class="gb" href="#/studio">About Studio</a>':`<button class="gb primary" type="button" disabled aria-disabled="true">${d.open?"Join":"Membership opens soon"}</button>`}</article>`).join("")}</div>
      <form class="form interest" data-interest>
        <h2>Hear when it opens</h2>
        <label class="fl"><span>Email</span><input class="gi" type="email" name="email" disabled placeholder="Not collected yet"></label>
        <button class="gb" type="submit" disabled>Notify me</button>
        <p class="note">Sign-ups are not being collected yet \u2014 there is no mailing list connected, so nothing typed here would be sent.</p>
      </form>
    </section>${o.footer()}`}var rr=`<svg class="wm-o" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><defs><mask id="wm-counter"><rect width="100" height="100" fill="#fff"/>
  <path fill="#000" d="M49 9C31 9 23 29 23 50c0 24 12 42 30 42 15 0 23-9 23-20 0-9-7-12-11-21-4-9-2-19 0-27 1-9-5-15-16-15z"/></mask></defs>
  <circle cx="50" cy="50" r="46" fill="currentColor" mask="url(#wm-counter)"/></svg>`,Ut=`<span class="wm-t">The Light</span>${rr}<span class="wm-t wm-rb">rb</span>`;var bt=[{id:"clear",base:"clear",name:"Clear",line:"Thick clear glass, nothing inside but its own depth."},{id:"smoke",base:"clear",name:"Smoke",line:"Smoked glass, a grey depth that darkens to the rim.",tint:[.6,.62,.65]},{id:"amber",base:"clear",name:"Amber",line:"Warm amber glass, like light through honey.",tint:[1,.8,.52]},{id:"chrome",base:"chrome",name:"Chrome",line:"Liquid chrome that keeps folding the room it reflects."},{id:"gold",base:"chrome",name:"Liquid Gold",line:"Molten gold folding over itself.",tint:[1,.79,.45]},{id:"gunmetal",base:"chrome",name:"Gunmetal",line:"Dark liquid metal with cold highlights.",tint:[.5,.53,.57]},{id:"porcelain",base:"porcelain",name:"Porcelain",line:"Raised porcelain bands with gold edges over dark glass."},{id:"silverline",base:"porcelain",name:"Silverline",line:"Porcelain bands edged in silver over dark glass.",accent:[.82,.84,.88]},{id:"celadon",base:"porcelain",name:"Celadon",line:"Porcelain bands over green celadon glass.",tint:[.22,.36,.3]},{id:"bloom",base:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud."},{id:"lilac",base:"bloom",name:"Lilac",line:"Milky glass holding a slow violet cloud.",tint:[.62,.45,1],accent:[.86,.76,1]},{id:"lagoon",base:"bloom",name:"Lagoon",line:"Milky glass holding a slow sea-blue cloud.",tint:[.2,.62,.9],accent:[.6,.92,.9]},{id:"core",base:"core",name:"Core",line:"Clear glass holding one soft white light at its centre."},{id:"dawn",base:"core",name:"Dawn",line:"Clear glass holding a warm, low light.",tint:[1,.72,.45]},{id:"starlight",base:"points",name:"Starlight",line:"Clear glass full of small points of light that drift and twinkle."},{id:"firefly",base:"points",name:"Firefly",line:"Warm points of light drifting slowly inside the glass.",tint:[1,.78,.4]},{id:"glitter",base:"glitter",name:"Glitter",line:"Fine silver flecks that catch the light as the sphere turns."},{id:"goldleaf",base:"glitter",name:"Gold Leaf",line:"Flakes of gold suspended in clear glass.",tint:[1,.78,.4]},{id:"beads",base:"beads",name:"Beads",line:"Small milky glass beads floating inside the shell."},{id:"pearls",base:"beads",name:"Pearls",line:"Soft pearls with a faint rainbow sheen, floating inside.",tint:[1,.95,.97],accent:[.85,.9,1]}],or={clear:0,chrome:1,porcelain:2,bloom:3,core:4,points:5,glitter:6,beads:7},Ea={0:{tint:[1,1,1],accent:[1,1,1]},1:{tint:[1,1,1],accent:[1,1,1]},2:{tint:[.13,.17,.18],accent:[.86,.64,.3]},3:{tint:[1,.42,.45],accent:[1,.72,.68]},4:{tint:[1,.97,.92],accent:[1,1,1]},5:{tint:[.92,.96,1],accent:[1,1,1]},6:{tint:[.95,.96,1],accent:[1,1,1]},7:{tint:[.97,.97,.96],accent:[1,.9,.95]}},nr=t=>{let o=bt.find(a=>a.id===t)??bt[0],d=or[o.base];return{k:d,tint:o.tint??Ea[d].tint,accent:o.accent??Ea[d].accent}},ir=`
  uniform mat3 uRot;
  varying vec3 vN; varying vec3 vP; varying vec3 vObj;
  void main() {
    vObj = uRot * position;              // the material turns with the drag
    vN = normalize(normalMatrix * normal);
    vec4 wp = modelViewMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    gl_Position = projectionMatrix * wp;
  }`,sr=`
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
  }`,ht=null;function lr(){if(ht)return ht;let t=document.createElement("canvas"),o=new Rt({canvas:t,alpha:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0});o.setClearColor(0,0);let d=new Ct,a=new qt(30,1,.1,20);a.position.set(0,0,4.9);let m=new sa({vertexShader:ir,fragmentShader:sr,transparent:!0,premultipliedAlpha:!0,uniforms:{uKind:{value:0},uTint:{value:new Lt(1,1,1)},uAccent:{value:new Lt(1,1,1)},uTime:{value:0},uStir:{value:0},uRot:{value:new Mt}}});return d.add(new At(new ia(1,128,96),m)),ht={r:o,scene:d,camera:a,mat:m,list:new Set,raf:0},ht}function _t(){let t=ht;t.raf=0;let o=performance.now()/1e3,d=Math.min(devicePixelRatio||1,1.5);for(let a of t.list){if(!a.visible||!a.canvas.isConnected)continue;a.step(o);let m=Math.max(2,Math.round(a.canvas.clientWidth*d)),u=Math.max(2,Math.round(a.canvas.clientHeight*d));(a.canvas.width!==m||a.canvas.height!==u)&&(a.canvas.width=m,a.canvas.height=u),t.r.setSize(m,u,!1),t.camera.aspect=m/u,t.camera.updateProjectionMatrix();{let s=nr(a.kind);t.mat.uniforms.uKind.value=s.k,t.mat.uniforms.uTint.value.fromArray(s.tint),t.mat.uniforms.uAccent.value.fromArray(s.accent)}t.mat.uniforms.uTime.value=a.time,t.mat.uniforms.uStir.value=a.stir,t.mat.uniforms.uRot.value.copy(a.rot),t.r.render(t.scene,t.camera);let n=a.ctx;n.clearRect(0,0,m,u),n.drawImage(t.r.domElement,0,0,m,u)}t.list.size&&(t.raf=requestAnimationFrame(_t))}function Xt(t,o="clear",{interactive:d=!0,reduced:a=matchMedia("(prefers-reduced-motion: reduce)").matches}={}){let m;try{m=lr()}catch{let E=()=>{};return new Proxy({},{get:()=>E})}let u=document.createElement("canvas");u.className="sph-c",u.setAttribute("aria-hidden","true"),t.append(u);let n={v:.4,vel:a?0:.12},s={v:-.15,vel:0},i={x:0,y:0,tx:0,ty:0},A=new oa,b=new na,U=performance.now()/1e3,L=null,g={canvas:u,ctx:u.getContext("2d"),kind:o,visible:!1,time:Math.random()*40,stir:0,rot:new Mt,step(E){let V=Math.min(.05,E-U);U=E,L||(n.vel+=((a?0:.12)-n.vel)*V*.8,s.vel*=Math.exp(-V*3),s.v+=(-.15-s.v)*V*.8),n.v+=n.vel*V,s.v=Math.max(-1.2,Math.min(1.2,s.v+s.vel*V)),i.x+=(i.tx-i.x)*V*5,i.y+=(i.ty-i.y)*V*5,g.stir*=Math.exp(-V*1.6),g.time+=V*(a?.3:1)*(1+g.stir*3),b.set(s.v+i.y*.25,n.v+i.x*.35,0,"YXZ"),A.makeRotationFromEuler(b),g.rot.setFromMatrix4(A)}};if(d){u.style.touchAction="pan-y",u.style.cursor="grab",u.addEventListener("pointerdown",B=>{L={x:B.clientX,y:B.clientY,t:performance.now(),moved:!1},u.setPointerCapture(B.pointerId),u.style.cursor="grabbing"}),u.addEventListener("pointermove",B=>{let se=u.getBoundingClientRect();if(i.tx=((B.clientX-se.left)/se.width-.5)*2,i.ty=((B.clientY-se.top)/se.height-.5)*2,!L)return;let le=performance.now(),me=B.clientX-L.x,de=B.clientY-L.y,be=Math.max(8,le-L.t)/1e3;Math.hypot(me,de)>3&&(L.moved=!0),n.v+=me*.01,s.v+=de*.01,n.vel=me*.01/be*.6,s.vel=de*.01/be*.6,L.x=B.clientX,L.y=B.clientY,L.t=le});let E=B=>{L&&(L.moved||(g.stir=Math.min(1.5,g.stir+1)),L=null,u.style.cursor="grab")};u.addEventListener("pointerup",E),u.addEventListener("pointercancel",E),u.addEventListener("pointerleave",()=>{i.tx=i.ty=0});let V=!1;u.addEventListener("pointerdown",()=>{V=!1},!0),u.addEventListener("pointermove",()=>{L?.moved&&(V=!0)}),u.addEventListener("click",B=>{V&&(B.preventDefault(),B.stopPropagation())})}let _=new IntersectionObserver(([E])=>{g.visible=E.isIntersecting,g.visible&&!m.raf&&(m.raf=requestAnimationFrame(_t))});return _.observe(u),m.list.add(g),m.raf||(m.raf=requestAnimationFrame(_t)),{setKind(E){g.kind=E,g.stir=1},stir(){g.stir=Math.min(1.5,g.stir+1)},dispose(){_.disconnect(),m.list.delete(g),u.remove()}}}var ze=(t,o=0,d=1)=>Math.min(d,Math.max(o,t)),st=(t,o,d)=>t+(o-t)*d,Ie=t=>{let o=ze(t);return o*o*(3-2*o)},dr=(t,o,d,a,m)=>Ie((t-o)/(d-o))*(1-Ie((t-a)/(m-a))),Y=t=>String(t).replace(/[&<>"]/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[o]),Qe={get:(t,o)=>{try{return JSON.parse(sessionStorage.getItem(t))??o}catch{return o}},set:(t,o)=>{try{sessionStorage.setItem(t,JSON.stringify(o))}catch{}}},K={play:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>',replay:'<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/></svg>',prev:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',mute:'<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M4.5 20c1.4-3.6 4.2-5.4 7.5-5.4s6.1 1.8 7.5 5.4"/></svg>',heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/></svg>',back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',down:'<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',bag:'<svg viewBox="0 0 24 24"><path d="M5.5 8.5h13l-1 11h-11z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/></svg>',lock:'<svg viewBox="0 0 24 24"><rect x="5.5" y="10.5" width="13" height="9" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',orb:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="11" cy="15" r="1.6" fill="currentColor" stroke="none"/></svg>'},Kt={pieces:"products",materials:"products"};function Ta(t){let{orb:o,reduced:d}=t,a=ua(),m=document.createElement("style");m.textContent=ga+fa,document.head.append(m),document.documentElement.classList.add("lo-on");let u=ba(t),n=$a("main","lo");n.setAttribute("aria-label","The Light Orb"),n.tabIndex=-1;let s=$a("div","lo-top");document.body.append(n,s),s.innerHTML=`
    <header class="hd" data-hd>
      <a class="wm" href="#/" aria-label="The Light Orb \u2014 Home" data-home>${Ut}</a>
      <nav class="nav" aria-label="Main">${he.map(e=>`<a href="${e.route}" data-nav="${e.id}">${e.label}</a>`).join("")}</nav>
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
    <div class="caption" data-caption aria-live="polite"></div>`;let i=s.querySelector("[data-hd]"),A=s.querySelector("[data-caption]"),b=s.querySelector("[data-guide]"),U=s.querySelector("[data-sound]"),L=s.querySelector("[data-menu]"),g=e=>{L.hidden=!e,U.setAttribute("aria-expanded",String(e)),a.sfx(e?"open":"close"),e&&L.querySelector(".gsw").focus()};U.addEventListener("click",()=>g(L.hidden)),document.addEventListener("pointerdown",e=>{!L.hidden&&!e.target.closest(".snd")&&g(!1)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&!L.hidden&&(g(!1),U.focus())}),s.querySelectorAll("[data-pref]").forEach(e=>e.addEventListener("click",()=>{let r=e.dataset.pref;a.set({[r]:!a.prefs[r]}),a.sfx("select")}));let _=s.querySelector("[data-volume]");_.addEventListener("input",()=>{a.set({volume:+_.value}),a.sfx("level",+_.value)});function E(){let e=a.prefs;s.querySelectorAll("[data-pref]").forEach(l=>l.setAttribute("aria-checked",String(!!e[l.dataset.pref]))),_.value=e.volume??.8,_.style.setProperty("--p",`${(e.volume??.8)*100}%`),s.querySelector("[data-volout]").textContent=`${Math.round((e.volume??.8)*100)}%`,U.innerHTML=e.master?K.sound:K.mute,U.setAttribute("aria-label",e.master?"Sound on \u2014 settings":"Sound off \u2014 settings"),n.querySelectorAll("[data-enable]").forEach(l=>{l.hidden=e.master});let r=a.state.clip?.split(".")[0],c=r&&r!=="home"&&a.state.kind==="guide"&&["playing","loading"].includes(a.state.status);A.textContent=c?Pt[r]:"",A.classList.toggle("on",!!c)}a.on(E);let V=s.querySelector("[data-cartbtn]"),B=s.querySelector("[data-cartp]"),se=s.querySelector("[data-cartn]");function le(){let e=Te.items();se.hidden=!e.length,se.textContent=e.length,B.innerHTML=`<p class="kicker">Cart</p>${e.length?`<ul class="cart-l">${e.map(r=>`<li><a href="${r.href}">${Y(r.name)}</a><button class="pill" type="button" data-cartrm="${r.id}">Remove</button></li>`).join("")}</ul>`:'<p class="note">Your cart is empty.</p>'}
      <button class="gb primary" type="button" disabled>Checkout opens soon</button><p class="note">No payment can be taken yet; items stay in this browser.</p>`,B.querySelectorAll("[data-cartrm]").forEach(r=>r.addEventListener("click",()=>{Te.remove(r.dataset.cartrm),a.sfx("close")}))}Te.on(le),le();let me=e=>{B.hidden=!e,V.setAttribute("aria-expanded",String(e)),a.sfx(e?"open":"close")};V.addEventListener("click",()=>me(B.hidden)),document.addEventListener("pointerdown",e=>{!B.hidden&&!e.target.closest(".cartw")&&me(!1)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&!B.hidden&&(me(!1),V.focus())});let de={emission:1,voice:zt.voice},be=()=>{de=yt(o,Je(zt)),o.setRibbon?.(0)};be();let Ye=()=>({home:"home",products:"products",templates:"templates",studio:"studio",sound:"sound"})[j.name],Z=null,J=null;b.addEventListener("click",()=>{if(a.prefs.master||a.set({master:!0}),a.prefs.guide||a.set({guide:!0}),Se=performance.now()/1e3,Z){Z.abort(),Z=null,te("");return}if(a.playing){a.stop();return}if(a.sfx("select"),!va){qe();return}te("Listening\u2026"),Z=wa({onresult:e=>te(`\u201C${e}\u201D`),onerror:e=>{Z=null,e==="not-allowed"||e==="service-not-allowed"?(dt("Allow the microphone to talk with me."),qe()):e!=="aborted"&&e!=="no-speech"&&te("")},onend:e=>{Z&&(Z=null,Ce(e))}})});function Ce(e){let r=ya(e,{here:j.name,presentation:je});if(r.stop){a.stop(),te("");return}if(r.back&&history.back(),r.go&&location.hash!==r.go){J=r.say??null,location.hash=r.go;return}r.say?(dt(r.say),Se=performance.now()/1e3,a.say(r.say)):r.go||te("")}function te(e){clearTimeout(Et),A.textContent=e,A.classList.toggle("on",!!e),e||E()}let Se=-99,Ae=0,Pe={profile:"your profile",downloads:"your downloads",saved:"what you have saved",designs:"the designs you made in Studio"};function je(){let e=j.name,r=j.id;if(e==="products"&&r){let c=wt(r);if(c)return`This is ${c.name}. ${c.kind}. ${c.line} Try its versions, then add it to your cart, save it, or take it to Studio.`}if(e==="templates"&&r){let c=we.find(l=>l.id===r);if(c)return`You are looking at the template ${c.name}. ${c.line}`}return e==="products"?`Welcome to Products. ${Le.length} objects of light and glass, ready to use: ${Le.map(c=>c.name).join(", ")}. Choose one to see it alive.`:e==="templates"?`These are the Templates. Complete compositions to start from: ${we.map(c=>c.name).join(", ")}.`:e==="studio"?"You are in Studio. Here you shape the light: material, colour and movement. Make it yours, then save or export it.":e==="sound"?"This is Sound. Listen to the voices and the quiet sounds of glass that live across the site.":e==="membership"?"This is Membership. Choose how you want to work with the collection: ready-made pieces, Studio, or the full membership with a new drop every two weeks.":e==="account"?`This is your account${r&&Pe[r]?`, showing ${Pe[r]}`:""}.`:e==="signin"?"Sign in to find your saved pieces and designs.":e==="signup"?"Create an account to save pieces and keep your designs.":"Welcome to The Light Orb. I will be your guide. Choose Products, Templates, Studio or Sound, and I will show you around."}function qe(){let e=je();dt(e),Se=performance.now()/1e3,a.say(e)}let j={name:""},k=null,y=[];function T(){let[e,r=""]=(location.hash.replace(/^#/,"")||"/").split("?"),c=e.split("/").filter(Boolean),l=Object.fromEntries(new URLSearchParams(r));return{name:Kt[c[0]]||c[0]||"home",id:c[1]||null,query:l,raw:c[0]}}function M(){let e=T();if(e.raw&&Kt[e.raw]){location.replace(`#/${Kt[e.raw]}${e.id?"/"+e.id:""}`);return}if(!["home","products","templates","studio","sound","membership","account","signin","signup"].includes(e.name)){location.replace("#/");return}y.forEach(x=>x()),y=[],ge=null,k&&e.name!=="studio"&&(k.leave(),k=null),u.hide(),Ft(),t.removeBackdrop(ke.canvas),be();let r=j.name;j=e,n.className=`lo r-${j.name}`,document.body.dataset.route=j.name,s.querySelectorAll("[data-nav]").forEach(x=>x.toggleAttribute("aria-current",x.dataset.nav===j.name||x.dataset.nav==="account"&&["account","signin","signup"].includes(j.name))),r&&r!==j.name&&a.state.kind&&a.stop(),({home:Ue,products:j.id?Ra:tt,templates:j.id?Pa:Ia,studio:Da,sound:Zt,membership:()=>Sa(n,re),account:()=>it(n,re,j.id),signin:()=>Yt(n,re,"in"),signup:()=>Yt(n,re,"up")}[j.name]??Ue)();let l=Qe.get(`lo:scroll:${location.hash}`,null);n.scrollTop=l??0;let f=location.hash,h=J;J=null,Z&&(Z.abort(),Z=null),setTimeout(()=>{location.hash===f&&(h?(dt(h),Se=performance.now()/1e3,a.say(h)):qe())},450),r&&n.focus({preventScroll:!0})}n.addEventListener("scroll",()=>Qe.set(`lo:scroll:${location.hash}`,n.scrollTop),{passive:!0});let O=0,I=0,F=!1;n.addEventListener("scroll",()=>{if(j.name!=="home"||F){O=n.scrollTop;return}let e=n.scrollTop>O;O=n.scrollTop,clearTimeout(I),I=setTimeout(()=>{let r=innerHeight,c=n.scrollTop/r,l=n.querySelector("#select")?.offsetTop??0,f=n.querySelector(".qt");if(!f||!l)return;let h=(f.offsetTop+f.offsetHeight-r)/r;c<=h+.02||n.scrollTop>=l-4||(F=!0,n.scrollTo({top:e?l:f.offsetTop+f.offsetHeight-r,behavior:d?"auto":"smooth"}),setTimeout(()=>{F=!1,O=n.scrollTop},d?50:900))},90)},{passive:!0}),addEventListener("hashchange",M),s.querySelector("[data-home]").addEventListener("click",e=>{e.preventDefault(),Qe.set("lo:scroll:#/",0),j.name==="home"?n.scrollTo({top:0,behavior:d?"auto":"smooth"}):location.hash="#/"});let re={page:n,audio:a,ICON:K,esc:Y,store:fe,go:e=>{location.hash=e},flash:dt,api:t,product:u,footer:()=>G()},z=Qe.get("lo:sel",0),D=[],pe=new URLSearchParams(location.search).get("sel");pe&&Qe.set("lo:selv",pe);let ue=Qe.get("lo:selv","arc")==="grid";function Ue(){if(n.innerHTML=`
      <section class="wel" aria-labelledby="hello">
        <div class="wel-copy" data-welcopy>
          <h1 id="hello" class="wel-h"><span>Hello.</span></h1>
          <p class="wel-line">A space for creative possibilities.</p>
          <a class="gb primary wel-go" href="#select" data-go>Let\u2019s go</a>
        </div>
        <div class="wel-ctl"><button class="gb small" type="button" data-enable>${K.sound}<span>Enable sound</span></button><a class="tl" href="intro.html">Replay intro</a></div>
      </section>
      <section class="qt" aria-label="Quotation">
        <figure class="qt-fig" data-qt><blockquote><p>${gt.text}</p></blockquote>
          <figcaption>${gt.author} \xB7 <a href="${gt.source}" rel="noopener" target="_blank">${gt.work}</a></figcaption></figure>
      </section>
      <section class="sel${ue?" sel-grid":""}" id="select" aria-labelledby="sel-t">
        <h2 id="sel-t" class="sel-t">Where would you like to begin?</h2>
        ${ue?`<nav class="dg" aria-label="Destinations">${he.map((e,r)=>`<a class="dg-c" href="${e.route}" data-c="${r}">${De(e)}<span class="dg-t">${e.label}</span><span class="dg-s">${e.line}</span></a>`).join("")}</nav>`:`<div class="arc" data-arc role="group" aria-roledescription="carousel" aria-label="Destinations">
          ${he.map((e,r)=>`<a class="arc-c" href="${e.route}" data-c="${r}" aria-label="${e.label}: ${e.line}">${De(e,"arc-img")}<span class="arc-l">${e.label}</span><span class="arc-s">${e.line}</span></a>`).join("")}
        </div>
        <div class="arc-ctl"><button class="gb gc small" type="button" data-step="-1" aria-label="Previous">${K.prev}</button>
          <div class="segbar" role="tablist" aria-label="Choose destination">${he.map((e,r)=>`<button class="pill" role="tab" type="button" data-dot="${r}">${e.label}</button>`).join("")}</div>
          <button class="gb gc small" type="button" data-step="1" aria-label="Next">${K.next}</button></div>`}
      </section>
      ${G()}`,D=[...n.querySelectorAll("[data-c]")],n.querySelector("[data-go]").addEventListener("click",e=>{e.preventDefault(),a.sfx("select"),n.scrollTo({top:n.scrollTop+n.querySelector("#sel-t").getBoundingClientRect().top-110,behavior:d?"auto":"smooth"})}),n.querySelector("[data-enable]").addEventListener("click",()=>{a.set({master:!0}),a.sfx("confirm"),qe()}),ue)D.forEach((e,r)=>{e.addEventListener("pointerenter",()=>oe(r)),e.addEventListener("focus",()=>oe(r)),e.addEventListener("click",()=>a.sfx("open"))}),p(!0);else{n.querySelectorAll("[data-step]").forEach(r=>r.addEventListener("click",()=>oe(z+ +r.dataset.step))),n.querySelectorAll("[data-dot]").forEach(r=>r.addEventListener("click",()=>oe(+r.dataset.dot))),D.forEach((r,c)=>r.addEventListener("click",l=>{if(N){l.preventDefault();return}c!==z?(l.preventDefault(),oe(c)):a.sfx("open")}));let e=n.querySelector("[data-arc]");e.addEventListener("keydown",r=>{r.key==="ArrowRight"&&(oe(z+1),r.preventDefault()),r.key==="ArrowLeft"&&(oe(z-1),r.preventDefault())}),Q(e,r=>oe(z+r),()=>p()),p(!0)}n.querySelector("[data-welcopy]").classList.add(d?"shown":"reveal"),E()}function et(e){let r=String(he.indexOf(e)+1).padStart(2,"0");return`<span class="arc-img cv cv-${e.id}"><span class="cv-grain"></span><span class="cv-n">${r}</span><span class="cv-t">${e.label}</span></span>`}function De(e,r=""){let c={products:'<img src="./media/cards/products.jpg" alt="" loading="lazy">',templates:'<span class="dg-win"><img src="./media/templates/the-light-orb.cover.jpg" alt="" loading="lazy"></span>',studio:'<img src="./media/cards/orb-dark.jpg" alt="" loading="lazy">',sound:`<span class="cv-wave">${[.3,.55,.8,.45,.95,.6,.35,.7,.5,.85,.4,.65,.3,.5].map(l=>`<i style="--h:${l}"></i>`).join("")}</span>`}[e.id];return`<span class="dg-img dg-${e.id} ${r}">${c}</span>`}function oe(e,r=!0){let c=ze(e,0,he.length-1);c!==z&&(z=c,Qe.set("lo:sel",z),r&&a.sfx("detent"),o.nudge?.(.5)),p()}function p(e){if(ue){D.forEach((l,f)=>l.classList.toggle("on",f===z));return}let r=D[0]?.offsetWidth||300,c=r*.7;D.forEach((l,f)=>{let h=f-z+$/(c*1.2),x=Math.abs(h);l.style.transition=e||C?"none":"",l.style.transform=`translateX(${h*c}px) translateZ(${-x*150}px) rotateY(${ze(-h*30,-48,48)}deg) scale(${1-Math.min(x,2)*.1})`,l.style.zIndex=String(10-Math.round(x)),l.classList.toggle("on",f===z),l.tabIndex=f===z?0:-1,l.setAttribute("aria-current",f===z?"true":"false")}),n.querySelectorAll("[data-dot]").forEach((l,f)=>l.setAttribute("aria-selected",String(f===z))),n.querySelectorAll("[data-step]").forEach(l=>{l.disabled=+l.dataset.step<0&&z===0||+l.dataset.step>0&&z===he.length-1})}let $=0,C=!1,N=!1;function Q(e,r,c){let l=0,f=0,h=null,x=null;e.addEventListener("pointerdown",w=>{w.button||(l=w.clientX,f=w.clientY,h=w.pointerId,x=null,N=!1)}),e.addEventListener("pointermove",w=>{if(w.pointerId!==h)return;let S=w.clientX-l,q=w.clientY-f;!x&&Math.hypot(S,q)>8&&(x=Math.abs(S)>Math.abs(q)*1.2?"x":"y",x==="x"&&(e.setPointerCapture(h),C=!0)),x==="x"&&($=S,N=!0,c())});let R=w=>{if(w.pointerId===h){if(h=null,C=!1,x==="x"){let S=$<-60?1:$>60?-1:0;$=0,r(S),c(),setTimeout(()=>{N=!1},0)}x=null}};e.addEventListener("pointerup",R),e.addEventListener("pointercancel",R),e.addEventListener("dragstart",w=>w.preventDefault());let P=0,v=0;e.addEventListener("wheel",w=>{if(Math.abs(w.deltaX)<=Math.abs(w.deltaY))return;w.preventDefault();let S=performance.now();S<v||(P+=w.deltaX,Math.abs(P)>60&&(r(Math.sign(P)),P=0,v=S+380))},{passive:!1})}function G(){return`<footer class="ft"><a href="#/" class="wm small" aria-label="The Light Orb \u2014 Home">${Ut}</a>
      <nav aria-label="Footer"><a href="#/membership">Membership</a><a href="#/account">Account</a><a href="intro.html">Replay intro</a></nav>
      <span class="ft-n">Purchasing and membership open soon.</span></footer>`}let ae=0,He={"orb-slider":[{id:"light",name:"Light",line:"Clear glass on a light page."},{id:"dark",name:"Dark",line:"Smoked glass for dark pages.",cls:"v-dark"},{id:"frost",name:"Frost",line:"Frosted white glass, softer and brighter.",cls:"v-frost"},{id:"compact",name:"Compact",line:"A slimmer capsule for tight layouts.",cls:"v-compact"}],"orb-wave":[{id:"gentle",name:"Gentle",line:"Wide, soft ripples.",p:{strength:.6,scale:110}},{id:"classic",name:"Classic",line:"The ripple from the intro.",p:{strength:1,scale:70}},{id:"deep",name:"Deep",line:"Tight, strong rings.",p:{strength:1.6,scale:45}},{id:"rain",name:"Rain",line:"Many small, quick rings, like drops on water.",p:{strength:.5,scale:28}}],"background-pack":[{id:"classic",name:"Classic",line:"The horizon as in the intro.",p:{horizon:.3,lamp:.9}},{id:"wide",name:"Wide floor",line:"A low horizon and more floor.",p:{horizon:.18,lamp:.9}},{id:"high",name:"High horizon",line:"A high horizon and more sky.",p:{horizon:.45,lamp:.9}},{id:"lantern",name:"Lantern",line:"A brighter lamp around the Orb in the dark world.",p:{horizon:.3,lamp:1.6}}],"crystal-controls":[{id:"light",name:"Light",line:"Clear glass for light pages."},{id:"dark",name:"Dark",line:"Smoked glass for dark pages.",cls:"v-dark"},{id:"frost",name:"Frost",line:"Frosted white glass with softer edges.",cls:"v-frost"},{id:"compact",name:"Compact",line:"Smaller controls for dense interfaces.",cls:"v-compact"}]},ne={"orb-slider":'<span class="mini-cap"><span class="cap-l">slide to enter</span><i class="mini-orb"></i></span>',"crystal-controls":'<span class="mini-kit"><span class="gb primary small">Continue</span><span class="gb small">Secondary</span><span class="gsw" aria-checked="true"></span><span class="gi">Your name</span></span>'},Ne=[...bt.map(e=>({id:`orb-${e.id}`,fam:"orb",variant:e.id,sphere:e.id,ext:".orb",name:e.id==="clear"?"The Orb":`The Orb \xB7 ${e.name}`,kind:e.line,href:`#/products/orb${e.id==="clear"?"":`?variant=${e.id}`}`})),...Le.filter(e=>e.id!=="orb").flatMap(e=>He[e.id].map((r,c)=>({id:c?`${e.id}-${r.id}`:e.id,fam:e.id,variant:c?r.id:null,ext:".kit",name:`${e.name} \xB7 ${r.name}`,kind:r.line,mini:ne[e.id],cls:r.cls,img:ne[e.id]?null:`./media/products/${e.id}.jpg`,pos:e.id==="background-pack"?`50% ${Math.round(30+(r.p.horizon-.3)*160)}%`:null,href:`#/products/${e.id}${c?`?variant=${r.id}`:""}`})))],Be=(e,r="")=>`<button class="gb small ${r}" type="button" data-cart="${e.id}" aria-pressed="${Te.has(e.id)}">${K.bag}<span>${Te.has(e.id)?"In cart":"Add to cart"}</span></button>`;function Ee(e){e.querySelectorAll("[data-cart]").forEach(r=>r.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation();let l=Ne.find(h=>h.id===r.dataset.cart)||Na().find(h=>h.id===r.dataset.cart),f=Te.toggle({id:l.id,name:l.name,href:l.href||"#/sound"});r.setAttribute("aria-pressed",String(f)),r.querySelector("span").textContent=f?"In cart":"Add to cart",a.sfx(f?"confirm":"select")}))}let _e=(e,r,c)=>`<button class="gb small" type="button" data-fsave="${e}|${r}" data-name="${Y(c)}" aria-pressed="${fe.isSaved(e,r)}">${K.heart}<span>${fe.isSaved(e,r)?"Saved":"Save"}</span></button>`;function Xe(e,r){e.querySelectorAll("[data-fsave]").forEach(c=>c.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation();let[f,h]=c.dataset.fsave.split("|"),x=fe.toggleSaved(f,h,c.dataset.name,r(f,h));c.setAttribute("aria-pressed",String(x)),c.querySelector("span").textContent=x?"Saved":"Save",a.sfx(x?"confirm":"select")}))}function tt(){let e=r=>`<article class="file glass" data-href="${r.href}">
        <div class="file-v ${r.cls??""}"${r.sphere?` data-sphere="${r.sphere}"`:""}>${r.img?`<img src="${r.img}" alt="" draggable="false" loading="lazy"${r.pos?` style="object-position:${r.pos}"`:""}>`:""}${r.mini??""}<span class="file-ext">${r.ext}</span></div>
        <div class="file-m"><h3><a class="file-link" href="${r.href}">${Y(r.name)}</a></h3><p>${Y(r.kind)}</p><p class="file-p">Price soon</p></div>
        <div class="file-a">${Be(r)}${_e("product",r.id,r.name)}<a class="gb small primary" href="#/studio?family=${r.fam}${r.variant?`&preset=${r.variant}`:""}">Go to Studio</a></div></article>`;n.innerHTML=`
      <section class="dest shop">
        <header class="dh"><h1>Products</h1></header>
        <div class="file-grid">${Ne.map(e).join("")}</div>
      </section>${G()}`,Ee(n),Xe(n,(r,c)=>Ne.find(l=>l.id===c)?.href??"#/products"),n.querySelectorAll(".file[data-href]").forEach(r=>r.addEventListener("click",c=>{c.defaultPrevented||c.target.closest("button, a")||(a.sfx("open"),location.hash=r.dataset.href)})),n.querySelectorAll("[data-sphere]").forEach(r=>{let c=Xt(r,r.dataset.sphere,{reduced:d});y.push(()=>c.dispose())})}function Ra(){let e=wt(j.id);if(!e){location.replace("#/products");return}let r=e.id==="orb"?bt:He[e.id],c=r.some(x=>x.id===j.query.variant)?j.query.variant:r[0].id,l=x=>r.find(R=>R.id===x),f=x=>e.id==="orb"?`orb-${x}`:x===r[0].id?e.id:`${e.id}-${x}`;n.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/products">${K.back}<span>Products</span></a>
        <div class="pd-grid">
          <div class="pd-stage glass" data-stage>${Oa(e.id)}</div>
          <div class="pd-info">
            <p class="kicker">${Y(e.id==="orb"?"Sphere":e.kind)}</p><h1>${Y(e.name)}</h1>
            <p class="lede">${Y(St[e.id].lede)}</p>
            ${r?`<div class="vars"><p class="lbl">Version</p><div class="segbar" role="radiogroup" aria-label="Version">${r.map(x=>`<button class="pill" role="radio" type="button" data-variant="${x.id}" aria-checked="${x.id===c}">${x.name}</button>`).join("")}</div><p class="var-line" data-vline></p></div>`:""}
            <p class="price">Price soon</p>
            <div class="acts eq">${Be({id:f(c)},"primary")}${_e("product",f(c),e.name)}</div>
            <a class="studio-lock" href="#/studio">${K.lock}<span><b>Customise in Studio</b><small>For members</small></span></a>
            <dl class="facts"><dt>What it does</dt><dd>${Y(St[e.id].does)}</dd><dt>You receive</dt><dd>${e.receives.map(Y).join(" \xB7 ")}</dd></dl>
            <details class="acc"><summary>Compatibility and installation</summary><p>${Y(St[e.id].tech)}</p></details>
          </div>
        </div>
      </section>${G()}`,Ee(n),Xe(n,(x,R)=>`#/products/${e.id}`),za(e.id,n.querySelector("[data-stage]"),c);let h=x=>{ge.sphere?.setKind(x);let R=l(x),P=n.querySelector("[data-stage]");e.id!=="orb"&&(P.classList.remove("v-dark","v-frost","v-compact"),R.cls&&P.classList.add(R.cls),R.p&&ke.set(R.p)),n.querySelectorAll("[data-variant]").forEach(H=>H.setAttribute("aria-checked",String(H.dataset.variant===x)));let v=n.querySelector("[data-vline]");v&&(v.textContent=l(x).line);let w=n.querySelector("[data-cart]");w.dataset.cart=f(x);let S=Te.has(w.dataset.cart);w.setAttribute("aria-pressed",String(S)),w.querySelector("span").textContent=S?"In cart":"Add to cart";let q=n.querySelector("[data-fsave]");q.dataset.fsave=`product|${f(x)}`;let X=fe.isSaved("product",f(x));q.setAttribute("aria-pressed",String(X)),q.querySelector("span").textContent=X?"Saved":"Save",history.replaceState(null,"",`#/products/${e.id}${x===r[0].id?"":`?variant=${x}`}`)};n.querySelectorAll("[data-variant]").forEach(x=>x.addEventListener("click",()=>{h(x.dataset.variant),a.sfx("select")})),h(c)}let St={orb:{lede:"A 3D sphere you can place in your own work. Choose the material and what it holds inside.",does:"Drag to turn it; it keeps turning slowly on its own. A tap makes whatever is in it move a little faster. Twenty versions: clear glass, liquid metal, porcelain, bloom, and glass holding a light, points of light, glitter or beads.",tech:"An ES module built on Three.js r186 (WebGL 2). Works in current Chrome, Safari, Edge and Firefox. The integration notes explain how to place it in a page and choose a version."},"orb-slider":{lede:"A clear glass capsule whose thumb is the Orb itself. Slide it to enter.",does:"A slide-to-confirm control: the Orb travels along the track and settles at either end. It also works with the arrow keys.",tech:"Component source with the Orb as its thumb. Needs WebGL 2 for the Orb."},"orb-wave":{lede:"The ripple the Orb leaves on the floor when it lands, drawn in light.",does:"Each touch raises a wave that spreads across the surface and fades.",tech:"A full-screen shader with an impact API: position, strength and scale. Needs WebGL 2."},"background-pack":{lede:"Two environments in one pack: a dark world and a light one, and the change between them.",does:"Moves smoothly from dark to light, controlled by a single exposure value.",tech:"A full-screen shader with exposure, horizon and lamp controls. Needs WebGL 2."},"crystal-controls":{lede:"Buttons, switches, fields and sliders in clear glass, with every state designed.",does:"Each control has default, hover, focus, pressed, selected, disabled and loading states, on light and dark backgrounds.",tech:"Plain CSS components. No framework needed."}};function Oa(e){return e==="orb"?'<div class="pd-sph" data-sph></div><span class="pd-hint">Drag to turn it. Tap to stir it.</span>':e==="orb-slider"?'<div class="cap" data-cap role="slider" tabindex="0" aria-label="Slide to enter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="cap-l">slide to enter</span></div>':e==="orb-wave"?'<button class="gb small pd-btn" type="button" data-drop>Drop the Orb</button><span class="pd-hint">Or tap the floor.</span>':e==="background-pack"?'<div class="segbar pd-seg" role="radiogroup" aria-label="Environment"><button class="pill" role="radio" type="button" data-env="0" aria-checked="false">Dark world</button><button class="pill" role="radio" type="button" data-env="1" aria-checked="true">Light</button></div>':`<div class="kit"><button class="gb primary" type="button">Continue</button><button class="gb" type="button">Secondary</button><button class="gb gc" type="button" aria-label="Confirm">${K.check}</button>
      <button class="gsw" role="switch" type="button" aria-checked="true" aria-label="Example switch"></button><input class="gi" placeholder="Your name" aria-label="Example field">
      <input class="grange" type="range" value="60" aria-label="Example slider" style="--p:60%"><button class="gb" type="button" disabled>Disabled</button><button class="gb" type="button" aria-busy="true">Loading</button></div>`}let ge=null;function za(e,r,c="clear"){if(ge={id:e,el:r,cap:0,drop:null},e!=="crystal-controls"&&e!=="orb"&&u.show(Je(It("original").config)),e==="orb"&&(ge.sphere=Xt(r.querySelector("[data-sph]"),c,{reduced:d}),y.push(()=>ge?.sphere?.dispose())),e==="orb-slider"){let l=r.querySelector("[data-cap]"),f=null,h=R=>{ge.cap=ze(R),l.setAttribute("aria-valuenow",Math.round(ge.cap*100))};l.addEventListener("pointerdown",R=>{f={x:R.clientX,v:ge.cap},l.setPointerCapture(R.pointerId),a.sfx("select")}),l.addEventListener("pointermove",R=>{f&&h(f.v+(R.clientX-f.x)/(l.offsetWidth-l.offsetHeight))});let x=()=>{f&&(f=null,u.orb?.nudge(.5),ge.cap>.9?(h(1),a.sfx("confirm")):(h(0),a.sfx("select")))};l.addEventListener("pointerup",x),l.addEventListener("pointercancel",x),l.addEventListener("keydown",R=>{R.key==="ArrowRight"&&h(ge.cap+.1),R.key==="ArrowLeft"&&h(ge.cap-.1),R.key==="End"&&h(1),R.key==="Home"&&h(0)})}if((e==="orb-wave"||e==="background-pack")&&(Bt(r),t.addBackdrop(ke.canvas),ke.set({horizon:.3,strength:1,scale:70}),ke.setExposure(e==="background-pack"?1:0,!0),e==="orb-wave"&&(r.addEventListener("pointerdown",l=>{if(l.target.closest("button"))return;let f=r.getBoundingClientRect(),h=l.clientY-f.top;h>f.height*.55&&(ke.impact(l.clientX-f.left,h),u.orb?.nudge(.7),a.sfx("detent"))}),r.querySelector("[data-drop]").addEventListener("click",()=>{ge.drop={vy:0,y:null,contacts:0},a.sfx("select")})),e==="background-pack"&&r.querySelectorAll("[data-env]").forEach(l=>l.addEventListener("click",()=>{ke.setExposure(+l.dataset.env),a.sfx("open"),r.querySelectorAll("[data-env]").forEach(f=>f.setAttribute("aria-checked",String(f===l)))}))),e==="crystal-controls"){r.querySelectorAll(".gb:not([disabled])").forEach(f=>f.addEventListener("click",()=>a.sfx("select"))),r.querySelector(".gsw").addEventListener("click",f=>{let h=f.currentTarget;h.setAttribute("aria-checked",String(h.getAttribute("aria-checked")!=="true")),a.sfx("select")}),r.querySelector(".gi").addEventListener("input",f=>{f.isTrusted&&a.sfx("type")});let l=r.querySelector(".grange");l.addEventListener("input",()=>{l.style.setProperty("--p",`${l.value}%`),a.sfx("level",l.value/100)})}}let Qt=2;function Ia(){let e=we.length+Qt;n.innerHTML=`
      <section class="dest tpl">
        <header class="dh"><h1>Complete compositions</h1></header>
        <div class="folder" data-folder>
          <div class="folder-tab glass"><span>Templates</span><small>${we.length} ${we.length===1?"composition":"compositions"}</small></div>
          <div class="folder-body glass"><span class="folder-glow" aria-hidden="true"></span><span class="folder-num" data-fnum aria-hidden="true"></span>
            <div class="folder-track" data-track role="listbox" aria-label="Templates" tabindex="0">
              ${we.map((w,S)=>`<button class="tcard glass" type="button" role="option" data-t="${S}" aria-label="Open ${Y(w.name)}">
                <span class="tcard-n">${String(S+1).padStart(2,"0")}</span>
                <span class="tcard-cv"><img src="${w.cover.src}" alt="" draggable="false"></span>
                <span class="tcard-t">${Y(w.name)}</span><span class="tcard-l">${Y(w.line)}</span></button>`).join("")}
              ${Array.from({length:Qt},(w,S)=>`<div class="tcard glass soon" aria-hidden="true"><span class="tcard-n">${String(we.length+S+1).padStart(2,"0")}</span><span class="tcard-cv"><span class="soon-orb"></span><span class="soon-lbl">In the making</span></span><span class="tcard-t">Next composition</span><span class="tcard-l">Joining the collection soon.</span></div>`).join("")}
            </div>
            <div class="folder-open" data-open hidden></div>
            <div class="folder-ctl" data-fctl><button class="gb gc small" type="button" data-fstep="-1" aria-label="Previous">${K.prev}</button><span class="count" data-fcount></span><button class="gb gc small" type="button" data-fstep="1" aria-label="Next">${K.next}</button></div>
          </div>
        </div>
      </section>${G()}`;let r=n.querySelector("[data-track]"),c=[...r.children],l=n.querySelector("[data-open]"),f=n.querySelector("[data-fctl]"),h=0,x=w=>{c.forEach((S,q)=>{let X=q-h+$/340,H=Math.abs(X);S.style.transition=w||C?"none":"",S.style.transform=`translateX(calc(-50% + ${X*96}%)) translateZ(${-H*120}px) rotateY(${ze(-X*18,-30,30)}deg) scale(${1-Math.min(H,2)*.08})`,S.style.zIndex=String(10-Math.round(H)),S.style.opacity=String(H>2.2?0:1-H*.22),S.classList.toggle("on",q===h),S.tagName==="BUTTON"&&S.setAttribute("aria-selected",String(q===h))}),n.querySelector("[data-fnum]").textContent=String(h+1).padStart(2,"0"),n.querySelector("[data-fcount]").textContent=`${String(h+1).padStart(2,"0")} / ${String(e).padStart(2,"0")}`,n.querySelectorAll("[data-fstep]").forEach(S=>{S.disabled=+S.dataset.fstep<0&&h===0||+S.dataset.fstep>0&&h===e-1})},R=w=>{let S=ze(h+w,0,e-1);S!==h&&(h=S,a.sfx("detent")),x()};n.querySelectorAll("[data-fstep]").forEach(w=>w.addEventListener("click",()=>R(+w.dataset.fstep))),r.addEventListener("keydown",w=>{w.key==="ArrowRight"&&(R(1),w.preventDefault()),w.key==="ArrowLeft"&&(R(-1),w.preventDefault())}),Q(r,R,()=>x());let P=w=>{let S=we[w],q={id:`template-${S.id}`,name:S.name,href:`#/templates/${S.id}`};Ne.some(X=>X.id===q.id)||Ne.push(q),l.innerHTML=`<button class="tl folder-back" type="button" data-close>${K.back}<span>All templates</span></button>
        <div class="fo-grid"><figure class="fo-cv glass"><img src="${S.cover.src}" alt="The beginning of the ${Y(S.name)} template." width="1600" height="1000"></figure>
          <div class="fo-info"><p class="kicker">${String(w+1).padStart(2,"0")} \xB7 Template</p><h2>${Y(S.name)}</h2><p>${Y(S.line)}</p>
            <ul class="fo-inc">${S.includes.map(X=>`<li>${Y(X)}</li>`).join("")}</ul><p class="price">Price soon</p>
            <div class="acts eq"><a class="gb small primary" href="#/templates/${S.id}">Open template</a>${Be(q)}${_e("template",S.id,S.name)}</div></div></div>`,Ee(l),Xe(l,(X,H)=>`#/templates/${H}`),l.querySelector("[data-close]").addEventListener("click",v),r.hidden=!0,f.hidden=!0,l.hidden=!1,l.classList.remove("in"),l.offsetWidth,l.classList.add("in"),a.sfx("open"),l.querySelector("[data-close]").focus({preventScroll:!0})},v=()=>{l.hidden=!0,r.hidden=!1,f.hidden=!1,x(!0),a.sfx("close"),r.focus({preventScroll:!0})};c.forEach((w,S)=>w.tagName==="BUTTON"&&w.addEventListener("click",q=>{if(N){q.preventDefault();return}S!==h?(h=S,x(),a.sfx("detent")):P(S)})),x(!0)}function Pa(){let e=we.find(r=>r.id===j.id);if(!e){location.replace("#/templates");return}n.innerHTML=`
      <section class="pd">
        <a class="back tl" href="#/templates">${K.back}<span>Templates</span></a>
        <div class="pd-grid">
          <figure class="pd-stage cover-big"><img src="${e.cover.src}" alt="The beginning of the ${Y(e.name)} template." width="1600" height="1000"></figure>
          <div class="pd-info"><p class="kicker">Template</p><h1>${Y(e.name)}</h1><p class="lede">${Y(e.line)}</p>
            <div class="acts"><a class="gb primary" href="#/">View it live</a></div>
            <p class="note">Purchase opens soon.</p>
            <dl class="facts"><dt>Includes</dt><dd>${e.includes.map(Y).join(" \xB7 ")}</dd></dl>
            <p class="note" data-covermeta></p></div>
        </div>
      </section>${G()}`,fetch(e.cover.meta).then(r=>r.json()).then(r=>{let c=n.querySelector("[data-covermeta]");c&&(c.textContent=`Preview: a capture of this website, ${r.captured}.`)}).catch(()=>{})}function Zt(){let e=a.prefs.voice,r=[...ut.map(v=>({group:"voices",key:`voice_audition.${v.id}`,clip:"voice_audition",voice:v.id,title:v.name,sub:`${v.locale} \xB7 the same line in each voice`,use:v.id})),...["home","products","templates","studio","sound"].map(v=>({group:"guide",key:`${v}.${e}`,clip:v,voice:e,title:v==="home"?"Welcome":v[0].toUpperCase()+v.slice(1),sub:Pt[v]})),...Dt.map(v=>({group:"sfx",key:`sfx.${v.id}`,url:v.file,title:v.name,sub:v.line}))],c=(v,w,S)=>`<section class="sg"><header><h2>${w}</h2><p>${S}</p></header><div class="sgrid">${r.filter(q=>q.group===v).map(q=>`
      <article class="si glass"><button class="si-play gb gc small" type="button" data-play="${q.key}" aria-label="Play ${Y(q.title)}">${K.play}</button>
        <div class="si-t"><h3>${Y(q.title)}<span class="file-ext">.m4a</span></h3><p>${Y(q.sub)}</p></div>
        <div class="si-w" data-wave="${q.key}" role="slider" tabindex="0" aria-label="Position in ${Y(q.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><canvas></canvas></div>
        <div class="si-m"><span class="si-d" data-dur="${q.key}">\u2013:\u2013\u2013</span></div>
        <div class="si-x eq">${q.use?`<button class="gb small" type="button" data-use="${q.use}" aria-pressed="${e===q.use}"><span>${e===q.use?"In use":"Use voice"}</span></button>`:""}${q.group!=="guide"?Be({id:`sound-${q.key}`}):""}${_e("sound",q.key,q.title)}</div></article>`).join("")}</div></section>`;n.innerHTML=`
      <section class="dest snd-dest">
        <header class="dh"><h1>Voices and sounds</h1></header>
        ${c("voices","Voices","Compare them on the same line.")}
        ${c("guide","Guide narration","What the guide says on each page, in the selected voice.")}
        ${c("sfx","Interface sounds","Short, quiet sounds for touch, panels and wheels.")}
      </section>${G()}`,n.querySelectorAll(".si").forEach(v=>{v.querySelector('[data-play^="sfx."]')&&(v.querySelector(".file-ext").textContent=".wav")}),Xe(n,()=>"#/sound");let l=new Map,f=(v,w)=>{let S=n.querySelector(`[data-dur="${CSS.escape(v)}"]`);S&&(S.textContent=w)};for(let v of r)(v.url?a.peaksUrl(v.url,80):a.peaks(v.clip,v.voice,80)).then(w=>{l.set(v.key,w),f(v.key,ja(w.duration))}).catch(()=>f(v.key,"Unavailable"));ta=r;let h=v=>v.url?v.key:`${v.clip}.${v.voice}`;Ee(n);let x=(v,w=0)=>(a.prefs.master||a.set({master:!0}),v.url?a.playUrl(v.key,v.url,{from:w}):a.play(v.clip,{voice:v.voice,kind:"audition",from:w}));n.querySelectorAll("[data-play]").forEach(v=>v.addEventListener("click",()=>{let w=r.find(q=>q.key===v.dataset.play),S=h(w);a.state.clip===S&&a.playing?a.pause():a.state.clip===S&&a.state.status==="paused"?a.resume():x(w)})),n.querySelectorAll("[data-wave]").forEach(v=>{let w=r.find(H=>H.key===v.dataset.wave),S=h(w),q=!1,X=H=>{let xe=v.getBoundingClientRect();return ze((H.clientX-xe.left)/xe.width)};v.addEventListener("pointerdown",async H=>{q=!0,v.setPointerCapture(H.pointerId);let xe=X(H);a.state.clip!==S&&await x(w),a.seek(xe)}),v.addEventListener("pointermove",H=>{q&&a.state.clip===S&&a.seek(X(H))}),v.addEventListener("pointerup",()=>{q=!1}),v.addEventListener("keydown",H=>{a.state.clip!==S||!a.duration||(H.key==="ArrowRight"&&a.seek(a.position+1/a.duration),H.key==="ArrowLeft"&&a.seek(a.position-1/a.duration))})}),n.querySelectorAll("[data-use]").forEach(v=>v.addEventListener("click",()=>{a.stop(),a.set({voice:v.dataset.use}),a.sfx("confirm"),Zt()}));let R=0,P=()=>{R=requestAnimationFrame(P);for(let v of n.querySelectorAll("[data-wave]")){let w=r.find(Ve=>Ve.key===v.dataset.wave),S=h(w),q=l.get(w.key),X=v.firstElementChild,H=v.getBoundingClientRect();if(H.bottom<0||H.top>innerHeight)continue;let xe=a.state.clip===S,Ke=xe?a.position:0,ct=xe?a.state.energy:0,ve=xe&&a.playing;v.setAttribute("aria-valuenow",Math.round(Ke*100));let Fe=n.querySelector(`[data-play="${CSS.escape(w.key)}"]`);if(Fe&&Fe.dataset.on!==String(ve)&&(Fe.dataset.on=String(ve),Fe.innerHTML=ve?K.pause:K.play,Fe.setAttribute("aria-label",`${ve?"Pause":"Play"} ${w.title}`)),!q)continue;let Re=Math.min(devicePixelRatio||1,2);X.width!==Math.round(H.width*Re)&&(X.width=Math.round(H.width*Re),X.height=Math.round(H.height*Re));let $e=X.getContext("2d");$e.setTransform(Re,0,0,Re,0,0),$e.clearRect(0,0,H.width,H.height);let Ge=q.bins.length,at=2,Tt=(H.width-at*(Ge-1))/Ge,Wa=H.height/2;for(let Ve=0;Ve<Ge;Ve++){let aa=(Ve+.5)/Ge<=Ke,Ya=aa&&Math.abs((Ve+.5)/Ge-Ke)<2.5/Ge?ct:0,ra=Math.max(2,(q.bins[Ve]*.9+Ya*.2)*(H.height-4));$e.fillStyle=aa?"#262827":"rgba(38,40,39,.2)",$e.beginPath(),$e.roundRect(Ve*(Tt+at),Wa-ra/2,Tt,ra,Tt/2),$e.fill()}}};P(),y.push(()=>cancelAnimationFrame(R))}let ja=e=>`${Math.floor(e/60)}:${String(Math.round(e%60)).padStart(2,"0")}`;function Da(){k&&(k.leave(),k=null),n.innerHTML=`
      <section class="st-lock">
        <div class="lock-blur" aria-hidden="true"><i class="lb-bar"></i><i class="lb-sph"></i><i class="lb-ins"></i></div>
        <div class="lock-card glass dark">
          <span class="lock-i">${K.lock}</span>
          <p class="kicker">Studio</p><h1>For members</h1>
          <p>Shape the sphere: its material, its colour and what moves inside it. Studio opens with membership.</p>
          <div class="acts eq"><a class="gb small primary" href="#/membership">See membership</a><a class="gb small" href="#/products">Browse products</a></div>
        </div>
      </section>`}let Et=0;function dt(e){A.textContent=e,A.classList.add("on"),clearTimeout(Et),Et=setTimeout(()=>{A.classList.remove("on"),E()},Math.max(3200,e.length*70))}function Ha(e,r,{W:c,H:l}){let f=a.energy(),h=a.playing&&(a.state.kind==="guide"||a.state.kind==="audition"&&j.name==="sound");o.setSpeech(h&&!$t()?f*(d?.35:.9):0),Ae+=((h&&!$t()||Z?1:0)-Ae)*Math.min(1,r*(h?4:1.2));{let P=e-Se,v=P<0?0:P<3.5?Ie(P/.4):1-Ie((P-3.5)/1.6);o.setRibbon?.(Math.max(v,Ae))}u.orb?.setSpeech(a.playing&&a.state.kind==="audition"&&$t()?f*(d?.35:1):0);let x=c<700,R;if(k?(R=k.frame(e,r,{W:c,H:l}),u.frame(R.product??null)):j.name==="home"?R=Ga(c,l,x):R={warm:0,orb:Ba(c,l,x),emission:de.emission},!k){let P=Va(c,l,r);u.frame(P),P?.ground&&(R.grounds||=[]).push({y:P.ground,x:P.x,d:P.d})}return Fa(R.orb),R}let ea=null,ta=[],Na=()=>ta.map(e=>({id:`sound-${e.key}`,name:e.title,href:"#/sound"})),$t=()=>!1,Ba=(e,r,c)=>({x:e-(c?34:50),y:r-(c?38:52),d:c?40:50,vis:1});function Fa(e){let r=e&&(e.vis??1)>.5&&!!Ye();b.hidden=!r,r&&Object.assign(b.style,{left:`${e.x-e.d/2}px`,top:`${e.y-e.d/2}px`,width:`${e.d}px`,height:`${e.d}px`})}function Ga(e,r,c){let l=n.scrollTop/r,f=n.querySelector("[data-welcopy]"),h=n.querySelector("[data-qt]"),x=1-Ie((l-.04)/.2);f&&(f.style.setProperty("--wipe",x.toFixed(3)),f.style.visibility=x<.01?"hidden":"");let R=n.querySelector(".wel-ctl");R&&(R.style.setProperty("--wipe",x.toFixed(3)),R.style.visibility=x<.01?"hidden":"");let P=(n.querySelector(".qt")?.offsetTop??r)/r,v=(n.querySelector("#select")?.offsetTop??2*r)/r,w=n.querySelector("#sel-t"),S=w?(w.getBoundingClientRect().top+n.scrollTop-n.getBoundingClientRect().top)/r:2,q=S-.8,X=dr(l,.13,.3,q-.22,q);h&&(h.style.setProperty("--wipe",X.toFixed(3)),h.style.transform=`translateY(${(20*(1-Ie((l-.13)/.17))-24*Ie((l-q+.22)/.22)).toFixed(1)}px)`,h.style.visibility=X<.01?"hidden":"");let H=ze(Math.min(e*(c?.46:.19),r*.28),120,280),xe={x:e/2,y:r*(c?.3:.29),d:H},Ke={x:e/2,y:r*.87,d:H*.3},ct=Ie((l-.08)/Math.max(.3,P-.5)),ve={x:st(xe.x,Ke.x,ct),y:st(xe.y,Ke.y,ct),d:st(xe.d,Ke.d,ct)},Fe=D[z];if(Fe){let Re=Fe.getBoundingClientRect(),$e=Ie((l-q+.1)/.2);if($e>0){let Ge=c?40:50,at={x:ue?Re.left+Re.width/2:e/2,y:Re.bottom+44,d:Ge};ve={x:st(ve.x,at.x,$e),y:st(ve.y,at.y,$e),d:st(ve.d,at.d,$e)}}}return{orb:{...ve,vis:1},warm:1,ground:{y:ve.y+ve.d/2},emission:de.emission}}function Va(e,r,c){if(j.name==="sound"&&ea?.isConnected){let l=ea.getBoundingClientRect(),f=Math.min(l.width,l.height)*.78;return l.bottom>0?{x:l.left+l.width/2,y:l.top+l.height/2,d:f,vis:1,ground:l.top+l.height/2+f/2}:null}if(j.name==="products"&&!j.id){let l=n.querySelector("[data-orbslot]");if(!l)return null;let f=l.getBoundingClientRect(),h=l.closest(".pc")?.classList.contains("on"),x=Math.min(f.width,f.height)*.74;return f.width>10?{x:f.left+f.width/2,y:f.top+f.height/2,d:x,vis:h?1:.7,ground:f.top+f.height/2+x/2}:null}if(j.name==="products"&&j.id&&ge?.el?.isConnected){let l=ge,f=l.el.getBoundingClientRect();if(l.id==="orb-slider"){let h=l.el.querySelector("[data-cap]").getBoundingClientRect(),x=h.height*.84,R=(h.height-x)/2;return{x:h.left+R+x/2+l.cap*(h.width-h.height),y:h.top+h.height/2,d:x,vis:1,snap:!0}}if(l.id==="orb-wave"||l.id==="background-pack"){let h=Math.min(96,f.width*.16),x=f.height*.7+h*.1,R=x-h/2;if(l.drop){let P=l.drop;P.y==null&&(P.y=-f.height*.45),P.vy+=2600*c,P.y+=P.vy*c,P.y>=0&&(P.y=0,ke.impact(f.width/2,x,ze(P.vy/1400)),u.orb?.nudge(.8),a.sfx("detent"),P.vy*=-.38,(++P.contacts>2||Math.abs(P.vy)<120)&&(l.drop=null)),R+=l.drop?l.drop.y:0}return ke.setOrb({x:f.width/2,y:R,d:h}),{x:f.left+f.width/2,y:f.top+R,d:h,vis:1,snap:!!l.drop}}}return null}addEventListener("resize",()=>{j.name==="home"&&p(!0)}),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__lo={audio:a,worldPreview:ke,product:u,store:fe,get studio(){return k},get route(){return j},get sel(){return z},get psel(){return ae}});try{Object.keys(sessionStorage).filter(e=>e.startsWith("lo:scroll:")||e==="lo:sel").forEach(e=>sessionStorage.removeItem(e))}catch{}return z=0,M(),E(),{frame:Ha,audio:a,get route(){return j},get studio(){return k},reapply:()=>be()}}function $a(t,o){let d=document.createElement(t);return d.className=o,d}var xt={hostDuration:.95,follow:7,damping:.92,pearl:[243,243,241],chamber:[23,26,25],whiten:6.5},lt=matchMedia("(prefers-reduced-motion: reduce)").matches,Aa=(t,o=0,d=1)=>Math.min(d,Math.max(o,t)),Ze=(t,o,d)=>t+(o-t)*d,La=t=>{let o=Aa(t);return o<.5?4*o*o*o:1-(-2*o+2)**3/2},Ma=(t,o,d)=>t.map((a,m)=>Ze(a,o[m],d)),Jt=(t,o=1)=>`rgba(${t[0]|0},${t[1]|0},${t[2]|0},${o})`,Ca=!1;document.addEventListener("lightorb:intro-complete",t=>qa(t.detail));document.body.classList.contains("static")&&qa(null);function cr(){let t=document.createElement("div");t.style.cssText="position:absolute;left:0;top:0;border-radius:50%;pointer-events:none;will-change:transform;background:radial-gradient(circle at 34% 28%,#fff 0 10%,rgba(255,255,255,.55) 24%,rgba(225,228,230,.35) 58%,rgba(170,176,180,.45) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),inset 0 -12px 24px rgba(120,126,130,.18),0 18px 30px -18px rgba(38,40,39,.45)";let o=()=>o,d={element:t,place(a){t.style.width=t.style.height=`${a.d}px`,t.style.transform=`translate(${a.x-a.d/2}px,${a.y-a.d/2}px)`,t.style.opacity=a.visibility??1}};return new Proxy(d,{get:(a,m)=>m in a?a[m]:o})}function qa(t){if(Ca)return;let d=document.querySelector(".intro").querySelector(".intro-world"),a=t?.orb??cr();Ca=!0;let m=document.createElement("style");m.textContent=".x-surface,.x-orb{position:fixed;inset:0;pointer-events:none}.x-surface{z-index:6;width:100%;height:100%}.x-orb{z-index:30}",document.head.append(m);let u=document.createElement("canvas");u.className="x-surface",u.setAttribute("aria-hidden","true");let n=document.createElement("div");n.className="x-orb",document.body.append(u,n),n.append(a.element),a.attachPointer(document.createElement("div"))();let s=u.getContext("2d");a.prepareTone("ivory"),a.prepareTone("dark");let i=0,A=0,b=1,U=()=>{i=innerWidth,A=innerHeight,b=Math.min(devicePixelRatio||1,1.5),u.width=Math.round(i*b),u.height=Math.round(A*b)};U(),addEventListener("resize",U);let L=performance.now()/1e3,g={x:0,y:0,d:0,vx:0,vy:0,vd:0,from:null,hosted:!1},_=new Set,E=null,V=null,B=0,se=1,le=1,me=L,de={left:.65,right:.55,env:.5,exposure:0,yaw:0,pitch:0,platform:!0},be=(k,y)=>{let T=performance.now()/1e3,M=Aa(T-me,0,.05);me=T,g.from||(g.from={x:k.x,y:k.y,d:k.d}),E=V?.frame(T,M,{W:i,H:A})??null;let O=E?.orb??{x:i/2,y:A*.42,d:Math.min(i*.3,A*.42)},I=lt?1:La((T-L)/xt.hostDuration);if(!g.hosted)g.x=Ze(g.from.x,O.x,I),g.y=Ze(g.from.y,O.y,I),g.d=Ze(g.from.d,O.d,I),I>=1&&(g.hosted=!0,a.attachPointer(document.createElement("div"))(),V?.reapply?.());else if(lt||E?.snap)g.x=O.x,g.y=O.y,g.d=O.d,g.vx=g.vy=g.vd=0;else{let D=xt.follow,pe=xt.damping;g.vx+=(D*D*(O.x-g.x)-2*pe*D*g.vx)*M,g.x+=g.vx*M,g.vy+=(D*D*(O.y-g.y)-2*pe*D*g.vy)*M,g.y+=g.vy*M,g.vd+=(D*D*(O.d-g.d)-2*pe*D*g.vd)*M,g.d+=g.vd*M}g.hosted&&!g.hostedAt&&(g.hostedAt=T);let F=g.hostedAt?La((T-g.hostedAt)/xt.whiten):0,re=Math.min(E?.warm??1,1-F);se=lt?re:Ze(se,re,.2),B=Ze(B,E?.room==="chamber"?1:0,lt?1:.12),le=Ze(le,E?.orb?.vis??1,lt?1:.14),Number.isFinite(g.x+g.y+g.d)||(console.warn("orb pose NaN",JSON.stringify(O),JSON.stringify(g)),Object.assign(g,{x:O.x,y:O.y,d:O.d,vx:0,vy:0,vd:0})),Se();let z=se<.002;return{...k,x:g.x,y:g.y,d:g.d,squash:0,contact:0,worldY:z?-9999:g.y,hideWorld:z,visibility:le,emission:k.emission*(E?.emission??1),raster:Math.ceil(Math.max(g.d,O.d,140)*1.06)}};if(t?.orb)t.takeOver(be);else{let k=()=>{a.place(be({x:i/2,y:A/2,d:0,emission:1})),requestAnimationFrame(k)};requestAnimationFrame(k)}a.setBackdrop((k,y)=>te(k,y,g));let Ye=(()=>{try{let k=document.createElement("canvas").getContext("2d");return k.filter="blur(1px)",k.filter==="blur(1px)"}catch{return!1}})(),Z=document.createElement("canvas"),J=Z.getContext("2d");function Ce(k,y,T,M){return Z.width!==M&&(Z.width=Z.height=M),J.globalCompositeOperation="copy",J.drawImage(d,k,y,T,T,0,0,M,M),J.globalCompositeOperation="saturation",J.fillStyle="#808080",J.fillRect(0,0,M,M),J.globalCompositeOperation="destination-in",J.drawImage(d,k,y,T,T,0,0,M,M),J.globalCompositeOperation="source-over",Z}function te(k,y,T){let M=T.d/y.diameter,O=y.extent*M,I=T.x-O/2,F=T.y-O/2,re=y.extent/O;if(se>.002){let z=d.width/Math.max(1,innerWidth),D=!document.documentElement.classList.contains("warm");D&&Ye&&(k.filter="grayscale(1) contrast(1.06)"),D&&!Ye?k.drawImage(Ce(I*z,F*z,O*z,y.extent),0,0):k.drawImage(d,I*z,F*z,O*z,O*z,0,0,y.extent,y.extent),D&&Ye&&(k.filter="none")}k.drawImage(u,I*b,F*b,O*b,O*b,0,0,y.extent,y.extent);for(let z of _){if(!z.isConnected||!z.width)continue;let D=z.getBoundingClientRect();D.right<I||D.left>I+O||D.bottom<F||D.top>F+O||k.drawImage(z,(D.left-I)*re,(D.top-F)*re,D.width*re,D.height*re)}}function Se(){s.setTransform(b,0,0,b,0,0),s.clearRect(0,0,i,A);let k=1-se;if(k>0){s.globalAlpha=k;let T=xt.pearl,M=s.createLinearGradient(0,0,0,A);M.addColorStop(0,Jt(Ma(T,[250,251,251],.5))),M.addColorStop(.6,Jt(T)),M.addColorStop(1,Jt(Ma(T,[214,217,220],.55))),s.fillStyle=M,s.fillRect(0,0,i,A),Ae(i*.92,-A*.1,i*.55,"255,255,255",.7),Ae(i*.05,A*1.05,i*.45,"196,201,206",.35),s.globalAlpha=1}for(let T of E?.glows??[]){s.save(),s.globalAlpha=T.k*k,s.translate(T.x,T.y),s.scale(1,T.h/T.w);let M=s.createRadialGradient(0,0,0,0,0,T.w);M.addColorStop(0,"rgba(255,255,255,.7)"),M.addColorStop(.5,"rgba(255,255,255,.22)"),M.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=M,s.fillRect(-T.w,-T.w,T.w*2,T.w*2),s.restore()}B>.002&&je(B);let y=E?.ground;for(let T of E?.grounds??[])qe(T,T,1)}function Ae(k,y,T,M,O){let I=s.createRadialGradient(k,y,0,k,y,T);I.addColorStop(0,`rgba(${M},${O})`),I.addColorStop(1,`rgba(${M},0)`),s.fillStyle=I,s.fillRect(k-T,y-T,T*2,T*2)}let Pe=Array.from({length:160},(k,y)=>{let T=Math.sin(y*12.9898)*43758.5453,M=T-Math.floor(T),O=Math.sin(y*78.233)*12345.678%1;return[M*Math.PI*2,Math.abs(O)*.9-.25,.3+y%7/10]});function je(k){let y=E?.stage??{x:0,y:0,w:i,h:A},T=2**(de.exposure*.5),M=de.left,O=de.right,I=y.x+y.w/2,F=y.y+y.h*.52,re=de.yaw,z=de.pitch;s.save(),s.globalAlpha=k,s.fillStyle="#070808",s.fillRect(0,0,i,A),s.fillStyle="#ffffff";for(let[oe,p,$]of Pe){let C=oe-re*$,N=I+Math.sin(C)*y.w*.9,Q=F-(p+z*.6*$)*y.h;Math.cos(C)<-.2||N<y.x||N>y.x+y.w||(s.globalAlpha=k*.1*$*T,s.fillRect(N,Q,1.1,1.1))}s.globalAlpha=k;let D=F+y.h*(.12-z*.55),pe=E?.product?.ground??F+y.h*.18,ue=s.createLinearGradient(0,D,0,y.y+y.h);ue.addColorStop(0,"rgba(255,255,255,0)"),ue.addColorStop(.25,`rgba(255,255,255,${.035*T})`),ue.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=ue,s.fillRect(y.x,D,y.w,y.y+y.h-D);let Ue=E?.product?.x??I,et=E?.product?.d??y.h*.4;for(let[oe,p]of[[-1,M],[1,O]]){if(p<=.01)continue;let $=Ue+oe*et*(1.1+.5*Math.sin(re*oe+.4)),C=.18+.3*Math.max(0,Math.sin(.15+z));s.save(),s.translate($,pe),s.scale(1,C);let N=s.createRadialGradient(0,0,0,0,0,et*1.3);N.addColorStop(0,`rgba(240,242,240,${.12*p*T})`),N.addColorStop(1,"rgba(240,242,240,0)"),s.fillStyle=N,s.beginPath(),s.arc(0,0,et*1.3,0,Math.PI*2),s.fill(),s.restore();let Q=oe<0?y.x:y.x+y.w,G=s.createRadialGradient(Q,F,0,Q,F,y.w*.45);G.addColorStop(0,`rgba(230,234,232,${.07*p*T})`),G.addColorStop(1,"rgba(230,234,232,0)"),s.fillStyle=G,s.fillRect(y.x,y.y,y.w,y.h)}let De=s.createRadialGradient(I,F,y.h*.2,I,F,Math.hypot(y.w,y.h)*.62);De.addColorStop(0,"rgba(0,0,0,0)"),De.addColorStop(1,"rgba(0,0,0,.55)"),s.fillStyle=De,s.fillRect(0,0,i,A),s.restore()}function qe(k,y,T){if(!Number.isFinite(y.d+y.x+k.y)||y.d<=0)return;let M=y.d/2,O=B>.5;s.save(),s.globalAlpha=T,s.translate(y.x,k.y),s.scale(1,.2);let I=s.createRadialGradient(0,0,0,0,0,M*1.5);O?(I.addColorStop(0,"rgba(240,240,236,.12)"),I.addColorStop(1,"rgba(240,240,236,0)"),s.globalCompositeOperation="lighter"):(I.addColorStop(0,"rgba(70,72,78,.22)"),I.addColorStop(.5,"rgba(70,72,78,.07)"),I.addColorStop(1,"rgba(70,72,78,0)")),s.fillStyle=I,s.beginPath(),s.arc(0,0,M*1.5,0,Math.PI*2),s.fill(),s.restore()}let j={orb:a,reduced:lt,chamber:de,body:{get x(){return g.x},get y(){return g.y},get d(){return g.d},get hosted(){return g.hosted}},addBackdrop:k=>_.add(k),removeBackdrop:k=>_.delete(k),drawBackdrop:te,exportPNG(k,y=a.element){let M=document.createElement("canvas");M.width=Math.round(k.w*2),M.height=Math.round(k.h*2);let O=M.getContext("2d");O.drawImage(u,k.x*b,k.y*b,k.w*b,k.h*b,0,0,M.width,M.height);for(let I of y.querySelectorAll("canvas")){let F=I.getBoundingClientRect();O.drawImage(I,(F.left-k.x)*2,(F.top-k.y)*2,F.width*2,F.height*2)}return new Promise(I=>M.toBlob(I,"image/png"))}};V=Ta(j),/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&(window.__exit={api:j,body:g,site:V,get scene(){return E}})}export{xt as EXIT};
