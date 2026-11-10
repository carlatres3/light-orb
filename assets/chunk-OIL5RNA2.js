import{F as D,G as B,J as _,N as Y,m as R,n as N,q as j,r as H,v as q,y as G}from"./chunk-63YMMEBD.js";var oe=[["clear","Clear glass",0],["chrome","Liquid metal",1],["porcelain","Porcelain over glass",2],["bloom","Milky glass \xB7 cloud",3],["core","Glass \xB7 light core",4],["points","Glass \xB7 points of light",5],["glitter","Glass \xB7 glitter",6],["beads","Glass \xB7 beads",7],["liquid","Glass \xB7 liquid",8]],T=Object.fromEntries(oe.map(([e,,t])=>[e,t])),ie={clear:[[1,1,1],[1,1,1]],chrome:[[1,1,1],[1,1,1]],porcelain:[[.13,.17,.18],[.86,.64,.3]],bloom:[[1,.42,.45],[1,.72,.68]],core:[[1,.97,.92],[1,1,1]],points:[[.92,.96,1],[1,1,1]],glitter:[[.95,.96,1],[1,1,1]],beads:[[.97,.97,.96],[1,.9,.95]],liquid:[[.55,.78,.95],[.9,.97,1]]},C=[-.6,.55,.6],ne=Math.hypot(...C),ae=Math.atan2(C[0],C[2])*180/Math.PI,re=Math.asin(C[1]/ne)*180/Math.PI,W=e=>"#"+e.map(t=>Math.round(Math.min(1,Math.max(0,t))*255).toString(16).padStart(2,"0")).join(""),A=e=>{let t=parseInt(String(e).replace("#",""),16)||0;return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]};function X(e={id:"clear",base:"clear"}){let t=T[e.base]===void 0?"clear":e.base,[i,o]=ie[t];return{v:1,variant:e.id||t,base:t,material:{tint:W(e.tint??i),accent:W(e.accent??o),refraction:1,dispersion:0,frost:0,rim:1,opacity:1,iridescence:0,exposure:1},interior:{amount:0,size:1,speed:1,glow:1,fill:.55},light:{angle:+ae.toFixed(2),height:+re.toFixed(2),key:1,rim:1,environment:1,horizon:1,colour:"#ffffff"},motion:{spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},scene:{background:"none",colour:"#0b0c0c",colour2:"#2a2d2c",size:1,shadow:0,reflection:0}}}var z=e=>e&&typeof e=="object"&&!Array.isArray(e);function I(e,t){let i=structuredClone(e);if(!z(t))return i;for(let[o,r]of Object.entries(t))o in i&&(z(i[o])?z(r)&&(i[o]=I(i[o],r)):typeof r==typeof i[o]&&(typeof r!="number"||Number.isFinite(r))&&(i[o]=r));return T[i.base]===void 0&&(i.base="clear"),i}function U(e,t){let i={};for(let[o,r]of Object.entries(t))if(z(r)){let c=U(e?.[o]??{},r);Object.keys(c).length&&(i[o]=c)}else if(typeof r=="number"){let c=Math.round(r*1e3)/1e3;(e?.[o]===void 0||Math.round(e[o]*1e3)/1e3!==c)&&(i[o]=c)}else e?.[o]!==r&&(i[o]=r);return i}var le=e=>btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var he=(e,t)=>le(JSON.stringify(U(t,e)));var F=[{id:"clear",base:"clear",name:"Clear",line:"Thick clear glass, nothing inside but its own depth."},{id:"smoke",base:"clear",name:"Smoke",line:"Smoked glass, a grey depth that darkens to the rim.",tint:[.6,.62,.65]},{id:"amber",base:"clear",name:"Amber",line:"Warm amber glass, like light through honey.",tint:[1,.8,.52]},{id:"chrome",base:"chrome",name:"Chrome",line:"Liquid chrome that keeps folding the room it reflects."},{id:"gold",base:"chrome",name:"Liquid Gold",line:"Molten gold folding over itself.",tint:[1,.79,.45]},{id:"gunmetal",base:"chrome",name:"Gunmetal",line:"Dark liquid metal with cold highlights.",tint:[.5,.53,.57]},{id:"porcelain",base:"porcelain",name:"Porcelain",line:"Raised porcelain bands with gold edges over dark glass."},{id:"silverline",base:"porcelain",name:"Silverline",line:"Porcelain bands edged in silver over dark glass.",accent:[.82,.84,.88]},{id:"celadon",base:"porcelain",name:"Celadon",line:"Porcelain bands over green celadon glass.",tint:[.22,.36,.3]},{id:"bloom",base:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud."},{id:"lilac",base:"bloom",name:"Lilac",line:"Milky glass holding a slow violet cloud.",tint:[.62,.45,1],accent:[.86,.76,1]},{id:"lagoon",base:"bloom",name:"Lagoon",line:"Milky glass holding a slow sea-blue cloud.",tint:[.2,.62,.9],accent:[.6,.92,.9]},{id:"core",base:"core",name:"Core",line:"Clear glass holding one soft white light at its centre."},{id:"dawn",base:"core",name:"Dawn",line:"Clear glass holding a warm, low light.",tint:[1,.72,.45]},{id:"starlight",base:"points",name:"Starlight",line:"Clear glass full of small points of light that drift and twinkle."},{id:"firefly",base:"points",name:"Firefly",line:"Warm points of light drifting slowly inside the glass.",tint:[1,.78,.4]},{id:"glitter",base:"glitter",name:"Glitter",line:"Fine silver flecks that catch the light as the sphere turns."},{id:"goldleaf",base:"glitter",name:"Gold Leaf",line:"Flakes of gold suspended in clear glass.",tint:[1,.78,.4]},{id:"beads",base:"beads",name:"Beads",line:"Small milky glass beads floating inside the shell."},{id:"pearls",base:"beads",name:"Pearls",line:"Soft pearls with a faint rainbow sheen, floating inside.",tint:[1,.95,.97],accent:[.85,.9,1]}],Q=T,$={0:{tint:[1,1,1],accent:[1,1,1]},1:{tint:[1,1,1],accent:[1,1,1]},2:{tint:[.13,.17,.18],accent:[.86,.64,.3]},3:{tint:[1,.42,.45],accent:[1,.72,.68]},4:{tint:[1,.97,.92],accent:[1,1,1]},5:{tint:[.92,.96,1],accent:[1,1,1]},6:{tint:[.95,.96,1],accent:[1,1,1]},7:{tint:[.97,.97,.96],accent:[1,.9,.95]},8:{tint:[.55,.78,.95],accent:[.9,.97,1]}},J=e=>X(F.find(t=>t.id===e)??F[0]),se=e=>{let t=F.find(o=>o.id===e)??F[0],i=Q[t.base];return{k:i,tint:t.tint??$[i].tint,accent:t.accent??$[i].accent}},ce=`
  uniform mat3 uRot;
  varying vec3 vN; varying vec3 vP; varying vec3 vObj;
  void main() {
    vObj = uRot * position;              // the material turns with the drag
    vN = normalize(normalMatrix * normal);
    vec4 wp = modelViewMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    gl_Position = projectionMatrix * wp;
  }`,fe=`
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
  }`,E=null;function ue(){if(E)return E;let e=typeof OffscreenCanvas=="function"&&"transferToImageBitmap"in OffscreenCanvas.prototype,t=e?new OffscreenCanvas(2,2):document.createElement("canvas"),i=new Y({canvas:t,alpha:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0});i.setClearColor(0,0),i.debug.checkShaderErrors=!document.querySelector('meta[name="lo-entries"]');let o=new q,r=new _(30,1,.1,20);r.position.set(0,0,4.9);let c=new B({vertexShader:ce,fragmentShader:fe,transparent:!0,premultipliedAlpha:!0,uniforms:{uKind:{value:0},uTint:{value:new R(1,1,1)},uAccent:{value:new R(1,1,1)},uTime:{value:0},uStir:{value:0},uVoice:{value:0},uVoiceFlow:{value:0},uRot:{value:new N},...Object.fromEntries(Object.entries(ee).map(([h,n])=>[h,{value:Array.isArray(n)?new R(...n):n}]))}}),l=new G(new D(1,128,96),c);return o.add(l),E={r:i,scene:o,camera:r,mat:c,mesh:l,list:new Set,raf:0,off:e},E}var ee={uIor:1,uDisp:0,uFrost:0,uRim:1,uOpacity:1,uIrid:0,uExp:1,uAmt:0,uSize:1,uGlow:1,uFill:.55,uKeyDir:[-.6/Math.hypot(.6,.55,.6),.55/Math.hypot(.6,.55,.6),.6/Math.hypot(.6,.55,.6)],uKey:1,uRimL:1,uEnv:1,uHorizon:1,uLightCol:[1,1,1]},Z=Math.tan(Math.asin(1/4.9))/Math.tan(15*Math.PI/180),de=1/(4.9*Math.tan(15*Math.PI/180));function me(e){let t=e.cfg;if(!t){let h=se(e.kind);return{...ee,uKind:h.k,uTint:h.tint,uAccent:h.accent}}let i=t.material,o=t.interior,r=t.light,c=r.angle*Math.PI/180,l=r.height*Math.PI/180;return{uKind:Q[t.base]??0,uTint:A(i.tint),uAccent:A(i.accent),uIor:i.refraction,uDisp:i.dispersion,uFrost:i.frost,uRim:i.rim,uOpacity:i.opacity,uIrid:i.iridescence,uExp:i.exposure,uAmt:o.amount,uSize:Math.max(.2,o.size),uGlow:o.glow,uFill:o.fill,uKeyDir:[Math.cos(l)*Math.sin(c),Math.sin(l),Math.cos(l)*Math.cos(c)],uKey:r.key,uRimL:r.rim,uEnv:r.environment,uHorizon:r.horizon,uLightCol:A(r.colour)}}var pe=matchMedia("(pointer: coarse)").matches;function L(){let e=E;e.raf=0;let t=performance.now()/1e3,i=Math.min(devicePixelRatio||1,1.5),o=[...e.list].filter(n=>n.visible&&n.canvas.isConnected),r=o.length,c=e.lastNow?t-e.lastNow:1/60;e.lastNow=t,r<=2?e.k=r:(e.k=Math.min(r,Math.max(1,e.k||(pe?2:3))),e.avg=(e.avg??c)*.9+c*.1,++e.adj>20&&(e.adj=0,e.avg>1/50&&e.k>1?e.k--:e.avg<1/58&&e.k<r&&e.k++)),e.adj||=0,e.cursor=(e.cursor||0)%Math.max(1,r);let l=new Set;for(let n=0;n<e.k;n++)l.add(o[(e.cursor+n)%r]);e.cursor+=e.k;for(let n of o){if(!l.has(n))continue;n.step(t);let u=Math.max(2,Math.round(n.canvas.clientWidth*i)),s=Math.max(2,Math.round(n.canvas.clientHeight*i));(n.canvas.width!==u||n.canvas.height!==s)&&(n.canvas.width=u,n.canvas.height=s),(e.w!==u||e.h!==s)&&(e.r.setSize(u,s,!1),e.w=u,e.h=s,e.camera.aspect=u/s,e.camera.updateProjectionMatrix());let f=e.mat.uniforms;for(let[y,v]of Object.entries(me(n)))Array.isArray(v)?f[y].value.fromArray(v):f[y].value=v;f.uTime.value=n.time,f.uStir.value=n.stir,f.uVoice.value=n.kind==="bloom"?n.voice:0,f.uVoiceFlow.value=n.voiceFlow,f.uRot.value.copy(n.rot),e.mesh.scale.setScalar(n.scale),e.mesh.position.y=n.lift,e.r.render(e.scene,e.camera);let x=n.cfg?.scene;if(n.bmp){n.bmp.transferFromImageBitmap(e.r.domElement.transferToImageBitmap());continue}let w=n.ctx;w.clearRect(0,0,u,s),x?ve(n,w,u,s,e.r.domElement,x):w.drawImage(e.r.domElement,0,0,u,s)}let h=!1;for(let n of e.list)if(n.visible&&n.canvas.isConnected){h=!0;break}h&&(e.raf=requestAnimationFrame(L))}var b=null;function ve(e,t,i,o,r,c){if(c.background==="solid")t.fillStyle=c.colour,t.fillRect(0,0,i,o);else if(c.background==="gradient"){let u=t.createRadialGradient(i/2,o*.42,0,i/2,o*.5,Math.hypot(i,o)*.6);u.addColorStop(0,c.colour2),u.addColorStop(1,c.colour),t.fillStyle=u,t.fillRect(0,0,i,o)}let l=Z*e.scale*o/2,h=o/2-e.lift*de*o/2,n=o/2+Z*c.size*o/2;if(c.shadow>0){let u=Math.max(0,n-(h+l)),s=1/(1+u/l*2);t.save(),t.translate(i/2,n),t.scale(1,.16);let f=t.createRadialGradient(0,0,0,0,0,l*(1.05+(1-s)*.5));f.addColorStop(0,`rgba(0,0,0,${(.55*c.shadow*s).toFixed(3)})`),f.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=f,t.beginPath(),t.arc(0,0,l*1.6,0,Math.PI*2),t.fill(),t.restore()}if(c.reflection>0&&n<o){let u=Math.min(o-n,l*2);b||=document.createElement("canvas"),(b.width!==i||b.height!==o)&&(b.width=i,b.height=o);let s=b.getContext("2d");s.clearRect(0,0,i,o),s.save(),s.translate(0,n*2),s.scale(1,-1),s.drawImage(r,0,0,i,o),s.restore(),s.globalCompositeOperation="destination-in";let f=s.createLinearGradient(0,n,0,n+u);f.addColorStop(0,`rgba(0,0,0,${(.5*c.reflection).toFixed(3)})`),f.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=f,s.fillRect(0,0,i,o),s.globalCompositeOperation="source-over",t.drawImage(b,0,0)}t.drawImage(r,0,0,i,o)}function xe(e,t="clear",{interactive:i=!0,reduced:o=matchMedia("(prefers-reduced-motion: reduce)").matches,config:r=null}={}){let c;try{c=ue()}catch{let m=()=>{};return new Proxy({},{get:()=>m})}let l=document.createElement("canvas");l.className="sph-c",l.setAttribute("aria-hidden","true"),e.append(l);let h={spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},n=()=>a.cfg?.motion??h,u={v:.4,vel:o?0:.12},s={v:-.15,vel:0},f={x:0,y:0,tx:0,ty:0},x=new j,w=new H,y=performance.now()/1e3,v=null,V=0,K=!r&&c.off?l.getContext("bitmaprenderer"):null,a={canvas:l,bmp:K,ctx:K?null:l.getContext("2d"),kind:t,cfg:r?I(J(r.variant||t),r):null,visible:!1,time:Math.random()*40,stir:0,speech:0,voice:0,voiceFlow:0,voiceInput:null,scale:1,lift:0,rot:new N,step(m){let p=Math.min(.25,m-y);y=m,V+=p;let d=n(),g=o?0:d.spin;v||(u.vel+=(g-u.vel)*p*.8,s.vel*=Math.exp(-p*3),s.v+=(d.tilt-s.v)*p*.8),u.v+=u.vel*p,s.v=Math.max(-1.2,Math.min(1.2,s.v+s.vel*p)),f.x+=(f.tx*d.pointer-f.x)*p*5,f.y+=(f.ty*d.pointer-f.y)*p*5,a.stir*=Math.exp(-p*1.6);let k=a.voiceInput?.();a.voice=Math.max(0,Math.min(1,Number.isFinite(k)?k:0))*(o?.35:1),a.voiceFlow+=p*a.voice*3,a.time+=p*(o?.3:1)*(1+a.stir*3)*(a.cfg?a.cfg.interior.speed:1),w.set(s.v+f.y*.25,u.v+f.x*.35,d.roll,"YXZ"),x.makeRotationFromEuler(w),a.rot.setFromMatrix4(x);let M=a.cfg?a.cfg.scene.size:1,S=o?0:1;a.scale=M*(1+S*d.breathe*Math.sin(V*1.3)+(a.kind==="bloom"?a.speech:Math.max(a.speech,a.voice))*d.speech*.06),a.lift=S*d.bob*M*Math.sin(V*Math.PI*2*d.bobSpeed)}};a.cfg&&(a.kind=a.cfg.variant);let O=(m,p,d=.016)=>{let g=n().inertia;u.v+=m*.01,s.v+=p*.01,u.vel=m*.01/d*.6*g,s.vel=p*.01/d*.6*g};if(i){l.style.touchAction="pan-y",l.style.cursor="grab",l.addEventListener("pointerdown",d=>{v={x:d.clientX,y:d.clientY,t:performance.now(),moved:!1},l.setPointerCapture(d.pointerId),l.style.cursor="grabbing"}),l.addEventListener("pointermove",d=>{let g=l.getBoundingClientRect();if(f.tx=((d.clientX-g.left)/g.width-.5)*2,f.ty=((d.clientY-g.top)/g.height-.5)*2,!v)return;let k=performance.now(),M=d.clientX-v.x,S=d.clientY-v.y,te=Math.max(8,k-v.t)/1e3;Math.hypot(M,S)>3&&(v.moved=!0),O(M,S,te),v.x=d.clientX,v.y=d.clientY,v.t=k});let m=()=>{v&&(v.moved||(a.stir=Math.min(1.5,a.stir+n().stir)),v=null,l.style.cursor="grab")};l.addEventListener("pointerup",m),l.addEventListener("pointercancel",m),l.addEventListener("pointerleave",()=>{f.tx=f.ty=0});let p=!1;l.addEventListener("pointerdown",()=>{p=!1},!0),l.addEventListener("pointermove",()=>{v?.moved&&(p=!0)}),l.addEventListener("click",d=>{p&&(d.preventDefault(),d.stopPropagation())})}let P=new IntersectionObserver(([m])=>{a.visible=m.isIntersecting,a.visible&&!c.raf&&(c.raf=requestAnimationFrame(L))});return P.observe(l),c.list.add(a),c.raf||(c.raf=requestAnimationFrame(L)),{canvas:l,setKind(m){a.kind=m,a.stir=1},setConfig(m){a.cfg=m?I(J(m.variant||a.kind),m):null,a.cfg&&(a.kind=a.cfg.variant)},setSpeech(m){a.speech=Math.max(0,Math.min(1,m||0))},setVoiceInput(m){a.voiceInput=typeof m=="function"?m:null,a.voice=0},rotate(m,p){O(m,p)},resetView(){u.v=.4,s.v=n().tilt,u.vel=o?0:n().spin,s.vel=0},stir(){a.stir=Math.min(1.5,a.stir+n().stir)},dispose(){a.voiceInput=null,P.disconnect(),c.list.delete(a),l.remove()}}}export{oe as a,ie as b,W as c,I as d,U as e,he as f,F as g,J as h,xe as i};
