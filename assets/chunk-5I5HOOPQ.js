import{A as Le,B as kt,C as Ht,D as zt,E as Se,F as Be,G as Ve,H as It,I as De,J as Pt,K as Lt,L as Ze,M as Qe,N as Je,a as Ie,b as bt,c as xt,d as yt,f as wt,g as Et,h as Pe,i as Tt,j as at,k as pe,l as Rt,m as K,o as We,p as Mt,s as St,t as Ge,u as V,v as Re,w as Ct,x as Ke,y as ie,z as nt}from"./chunk-63YMMEBD.js";var Kt=`
  float orbDensity(vec3 p) {
    float rise = max(0.0, p.y + 0.70);
    float width = 0.76 * exp(-rise * 0.92);
    vec2 center = vec2(-0.025 + rise * 0.045, 0.17);
    vec2 radial = (p.xz - center) / vec2(width, width * 0.86);
    float pool = exp(-pow(abs(p.y + 0.70) / 0.27, 2.0) * 1.25);
    float upward = exp(-rise * 3.8) * smoothstep(-0.89, -0.65, p.y);
    float boundary = smoothstep(0.0, 0.13, 1.0 - length(p));
    float taper = 1.0 - smoothstep(-0.2, 0.4, p.y);
    return (pool + upward * 0.47) * exp(-dot(radial, radial) * 1.65)
      * boundary * taper;
  }
`,Ue=1.38,it=(r,l)=>l.set(r.x*Ue,r.y*Ue,r.z??.1);function Dt(r,l,{warmVolume:g=!1}={}){let s={orbEye:{value:l},orbEnergy:{value:1},warmVolume:{value:g?1:0},lightWorld:{value:0},opticsFill:{value:1},opticsLobe:{value:1},opticsWall:{value:1},coreSize:{value:.065},opticsClean:{value:0},lightTint:{value:new V(1,1,1)},lightSpread:{value:1},orbCore:{value:it({x:-.07,y:-.55},new K)},ivory:{value:new V("#ffefcf")},champagne:{value:new V("#f7d095")},gold:{value:new V("#e6ad62")},mist:{value:new V("#f0d6aa")},warm:{value:new V("#f3c59f")},pearl:{value:new V("#fff0dc")},orbSpeech:{value:0},orbTime:{value:0},orbRibbon:{value:0}},i=new Ve({uniforms:s,transparent:!0,depthWrite:!1,depthTest:!1,blending:bt,toneMapped:!1,vertexShader:`
      varying vec3 localPosition;
      void main() {
        localPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 localPosition;
      uniform vec3 orbEye;
      uniform float orbEnergy;
      uniform float warmVolume;
      uniform float lightWorld;
      uniform float opticsFill;
      uniform float opticsLobe;
      uniform float opticsWall;
      uniform float coreSize;
      uniform float opticsClean;
      uniform vec3 lightTint;
      uniform float lightSpread;
      uniform vec3 orbCore;
      uniform vec3 ivory;
      uniform vec3 champagne;
      uniform vec3 gold;
      uniform vec3 mist;
      uniform vec3 warm;
      uniform vec3 pearl;
      uniform float orbSpeech;
      uniform float orbTime;
      uniform float orbRibbon;
      // The speaking light, as a density along the view ray (white, contained).
      // Plasma (owner ref N2): three silk ribbons of light that twist, fold
      // and pass through each other around the centre. Each ribbon is a strip
      // (finite width, soft ragged edges) with fine striations along it and a
      // bright filament at its fold; overlaps add up to white.
      mat2 rot2(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
      vec3 speechDensity(vec3 p) {
        float s = clamp(orbSpeech + orbRibbon, 0.0, 1.0);
        vec3 q0 = p - vec3(orbCore.x, orbCore.y + 0.42, orbCore.z);
        float r2 = dot(q0, q0);
        if (r2 > 0.3) return vec3(0.0);
        float env = exp(-r2 / 0.15);                     // a soft, round knot of light
        vec3 acc = vec3(0.0);
        for (int k = 0; k < 5; k++) {
          float fk = float(k);
          float t = orbTime * (0.22 + 0.045 * fk) + fk * 1.9;
          vec3 q = q0;
          q.xz *= rot2(t * 0.8 + fk * 1.2566);
          q.xy *= rot2(sin(t * 0.55 + fk * 1.3) * 1.2 + q.z * (2.0 + s));
          q.yz *= rot2(t * 0.4 + q.x * 2.6);
          float fold = 0.07 * sin(q.x * 5.5 + t * 1.5) + 0.045 * sin(q.z * 7.0 - t * 1.1 + fk) + 0.025 * s * sin(q.x * 14.0 - t * 3.5);
          float d = q.y - fold;
          float width = 0.012 + 0.014 * (0.5 + 0.5 * sin(q.x * 4.0 + t * 0.9 + fk * 2.1));
          float strip = exp(-q.z * q.z / width);
          float sheet = exp(-d * d / 0.0008) * strip;
          float silk = 0.6 + 0.4 * sin(q.z * 55.0 + fold * 35.0 + t);
          float rim = exp(-d * d / 0.00005) * strip;
          vec3 hue = k == 0 ? vec3(0.08, 0.5, 1.0) : k == 1 ? vec3(1.0, 0.15, 0.72) : k == 2 ? vec3(1.0, 0.58, 0.1) : k == 3 ? vec3(0.55, 0.3, 1.0) : vec3(0.2, 0.85, 1.0);
          acc += hue * sheet * silk + mix(hue, vec3(1.0), 0.35) * rim * 1.8;
        }
        float glow = exp(-r2 / 0.012) * 0.18;
        return (acc + vec3(0.95, 0.9, 1.0) * glow) * env * s * 12.0;
      }
      ${Kt}
      const float INNER = 0.9;
      float erfApprox(float x) {
        float t = 1.0 / (1.0 + 0.47047 * abs(x));
        return sign(x) * (1.0 - t * (0.3480242 + t * (-0.0958798 + t * 0.7478556)) * exp(-x * x));
      }
      // Line integral of a unit-peak Gaussian lobe (radius s) along a ray
      // segment, normalised so a ray through its centre returns ~1.
      float lobe(vec3 ro, vec3 rd, float len, float s) {
        vec3 oc = orbCore - ro;
        float tc = dot(oc, rd);
        float h2 = max(dot(oc, oc) - tc * tc, 0.0);
        return exp(-h2 / (s * s)) * 0.5 * (erfApprox((len - tc) / s) - erfApprox(-tc / s));
      }
      float bodyDensity(vec3 p) {
        // A low-lying luminous medium anchored in the lower sphere (it follows
        // the core horizontally), plus a local envelope around the core. A
        // lifted source rises through clear glass; the pool dims by distance.
        float pool = exp(-max(p.y + 0.95, 0.0) * 2.4);
        vec2 lateral = (p.xz - orbCore.xz) / 0.82;
        vec3 d = p - orbCore;
        float local = exp(-dot(d, d) / 0.06);
        // Extremely low-frequency optical density variation: breaks perfect
        // radial symmetry without grain, smoke or visible noise.
        float detail = 1.0 + 0.16 * sin(p.x * 2.3 + 1.1) * sin(p.z * 1.9 - 0.4)
          + 0.11 * sin(p.y * 2.9 + p.x * 1.7 + 2.0);
        // The source's own envelope thins as it rises: a lifted source moves
        // through clear glass instead of carrying a warm fog with it.
        float envelope = 0.6 * mix(1.0, 0.12, smoothstep(-0.55, 0.15, orbCore.y));
        return (pool * exp(-dot(lateral, lateral)) + envelope * local) * detail
          * smoothstep(0.0, 0.07, INNER - length(p));
      }
      // Thick glass shell: outer radius 1, inner radius INNER, IOR 1.5.
      vec2 sphereHit(vec3 ro, vec3 rd, float r) {
        float b = dot(ro, rd), c = dot(ro, ro) - r * r, h = b * b - c;
        if (h < 0.0) return vec2(-1.0);
        h = sqrt(h);
        return vec2(-b - h, -b + h);
      }
      // Exact unpolarised dielectric Fresnel; 1 under total internal reflection.
      float fresnelDielectric(float cosI, float etaI, float etaT) {
        cosI = clamp(cosI, 0.0, 1.0);
        float sinT = etaI / etaT * sqrt(max(0.0, 1.0 - cosI * cosI));
        if (sinT >= 1.0) return 1.0;
        float cosT = sqrt(max(0.0, 1.0 - sinT * sinT));
        float rs = (etaI * cosI - etaT * cosT) / (etaI * cosI + etaT * cosT);
        float rp = (etaT * cosI - etaI * cosT) / (etaT * cosI + etaI * cosT);
        return 0.5 * (rs * rs + rp * rp);
      }
      // Light from the source scattered by the glass along a wall segment
      // (irradiance with extinction \xD7 path length): the lower crescent.
      // toEye is the direction back toward the viewer along the segment:
      // glass scatters forward (Henyey-Greenstein g = 0.3), so a wall between
      // the source and the eye glows more than a wall behind the source.
      float wallGlow(vec3 a, vec3 b, vec3 toEye) {
        float e = 0.0;
        for (int i = 0; i < 3; i++) {
          vec3 toP = mix(a, b, (float(i) + 0.5) / 3.0) - orbCore;
          float d = length(toP);
          float phase = 0.91 / pow(1.09 - 0.6 * dot(toP / max(d, 1e-4), toEye), 1.5) / 0.8;
          e += exp(-d * 6.0) / (d * d + 0.03) * phase;
        }
        return e / 3.0 * length(b - a);
      }
      void main() {
        vec3 entry = normalize(localPosition);
        vec3 incident = normalize(localPosition - orbEye);
        // Fade at grazing incidence so the glass owns the silhouette.
        float fresnel = 0.04 + 0.96 * pow(1.0 - max(0.0, dot(-incident, entry)), 5.0);
        vec3 radiance;
        // Into the front wall (air \u2192 glass).
        vec3 ray = refract(incident, entry, 1.0 / 1.5);
        float travel = max(0.0, -2.0 * dot(entry, ray));
        if (warmVolume > 0.5) {
          float core = 0.0, energy = 0.0, body = 0.0, echo = 0.0, wall = 0.0; vec3 speak = vec3(0.0);
          float coreTransmittance = 1.0;
          vec2 innerHit = sphereHit(entry, ray, INNER);
          if (innerHit.x > 0.0) {
            vec3 pin = entry + ray * innerHit.x;
            vec3 ni = pin / INNER;
            wall += wallGlow(entry, pin, -ray);
            // Inner surface (glass \u2192 cavity): exact Fresnel, total internal
            // reflection near the critical angle keeps rays in the wall.
            float fi = fresnelDielectric(-dot(ray, ni), 1.5, 1.0);
            if (fi < 1.0) {
              vec3 rd2 = refract(ray, ni, 1.5);
              float len = sphereHit(pin, rd2, INNER).y;
              float through = 1.0 - fi;
              // 1. Incandescent core and its local energy lobe.
              core = lobe(pin, rd2, len, coreSize) * through;
              energy = lobe(pin, rd2, len, mix(0.16, 0.11, opticsClean) * lightSpread) * through * opticsLobe;
              // 2. Lower body: single scattering of the core's light.
              float stepSize = len / 24.0, transmittance = 1.0, scatter = 0.0;
              // Medium between the eye and the core veils a deeper source.
              float coreDepth = dot(orbCore - pin, rd2);
              for (int i = 0; i < 24; i++) {
                vec3 p = pin + rd2 * ((float(i) + 0.5) * stepSize);
                vec3 toP = p - orbCore;
                float r2 = dot(toP, toP);
                float density = bodyDensity(p);
                float cosT = dot(toP * inversesqrt(r2 + 1e-6), -rd2);
                float phase = 0.8 / pow(1.2 - 0.8 * cosT, 1.5); // Henyey-Greenstein, g\u22480.45
                // Inverse-square with extinction along the light's path.
                scatter += transmittance * density * phase * exp(-sqrt(r2) * 2.5 / lightSpread) / (r2 + 0.015) * stepSize;
                transmittance *= exp(-density * 0.8 * stepSize);
                if ((float(i) + 1.0) * stepSize < coreDepth) coreTransmittance = transmittance;
              }
              body = scatter * through;
              if (orbSpeech + orbRibbon > 0.001) {
                float n = 64.0, st = len / n, j = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
                for (int i = 0; i < 64; i++) speak += speechDensity(pin + rd2 * ((float(i) + j) * st)) * st;
                speak *= through;
              }
              // 3. Back inner surface (cavity \u2192 glass): its partial reflection
              //    re-crosses the cavity, a displaced weaker view of the core.
              vec3 pout = pin + rd2 * len;
              vec3 no = pout / INNER;
              float fb = fresnelDielectric(dot(rd2, no), 1.0, 1.5);
              vec3 rdR = reflect(rd2, no);
              float lenR = sphereHit(pout, rdR, INNER).y;
              echo = through * transmittance * fb * (lobe(pout, rdR, lenR, 0.09) + 0.25 * lobe(pout, rdR, lenR, 0.2));
              // Back wall, lit by the source on the way out.
              vec3 rd3 = refract(rd2, -no, 1.0 / 1.5);
              wall += through * transmittance * (1.0 - fb) * wallGlow(pout, pout + rd3 * sphereHit(pout, rd3, 1.0).y, -rd3);
            }
            // Reflected at the inner surface: the ray stays in the glass and
            // carries the wall's light to the far side (thickness cue).
            vec3 rdW = reflect(ray, ni);
            wall += fi * wallGlow(pin, pin + rdW * sphereHit(pin, rdW, 1.0).y, -rdW);
          } else {
            // Rim band: the view ray crosses only glass.
            wall += wallGlow(entry, entry + ray * travel, -ray);
          }
          // Soft-capped below the core so the core keeps its hierarchy.
          float bodyLight = 0.62 * (1.0 - exp(-body * opticsFill * 0.85 / 0.62));
          // Soft gold where the body is thin, champagne where dense: a
          // continuous ramp up to the bright base, never a dim grey tail.
          vec3 scatterColor = mix(mix(gold, champagne, smoothstep(0.05, 0.55, bodyLight)), mix(champagne, ivory, 0.35), opticsClean);
          vec3 wallColor = mix(mix(gold, ivory, 0.45), mix(champagne, ivory, 0.6), opticsClean);
          // A smaller core keeps the same total light: its peak rises.
          float corePeak = 4.2 * mix(1.0, 0.065 / coreSize, 0.6);
          radiance = ivory * (core * corePeak + energy * 0.6) * mix(0.55, 1.0, coreTransmittance)
            // Over a light world the broad body would wash the glass toward
            // milk; it recedes, the core and its crisp energy remain.
            + scatterColor * bodyLight * mix(1.0, 0.4, lightWorld)
            + ivory * echo * 0.5
            + speak
            + wallColor * wall * 1.45 * opticsWall * mix(1.0, 0.55, lightWorld) / max(0.3, 1.0 - fresnel);
          radiance *= orbEnergy * lightTint;
          // Over a light world the source reads as warm light, not white.
          radiance *= mix(vec3(1.0), vec3(1.0, 0.8, 0.52), lightWorld * 0.7);
        } else {
          float legacy = 0.0, stepSize = travel / 24.0;
          for (int i = 0; i < 24; i++) legacy += orbDensity(entry + ray * ((float(i) + 0.5) * stepSize)) * stepSize;
          float energy = (1.0 - exp(-legacy * 2.9)) * orbEnergy;
          vec3 color = mix(warm, champagne, smoothstep(0.04, 0.45, energy));
          radiance = mix(color, pearl, smoothstep(0.58, 0.97, energy) * 0.76) * energy * 1.13;
        }
        gl_FragColor = vec4(radiance * (1.0 - fresnel), 1.0);
      }
    `}),m=new ie(r,i);return m.renderOrder=2,{mesh:m,uniforms:s,dispose:()=>i.dispose()}}function qt(r,{strength:l=.24,feather:g=!1}={}){let s=(b=0)=>new Mt(1,1,{type:wt,depthBuffer:!1,samples:b}),i=s(4);i.depthBuffer=!0;let m=s(),d=s(),E=s(),x=s(),o=new Re,D=new Ze(-1,1,1,-1,0,1),W=new Se(2,2),O=`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
  `,f=(b,S)=>new Ve({uniforms:b,vertexShader:O,fragmentShader:S,depthTest:!1,depthWrite:!1,toneMapped:!1}),U=f({source:{value:i.texture},sourcePoint:{value:new pe(.5,.37)},threshold:{value:new pe(.16,.65)}},`
    varying vec2 vUv;
    uniform sampler2D source;
    uniform vec2 sourcePoint;
    uniform vec2 threshold;
    void main() {
      vec3 color = texture2D(source, vUv).rgb;
      float luminance = dot(color, vec3(0.2126, 0.7152, 0.0722));
      float lower = 1.0 - smoothstep(sourcePoint.y + 0.06, sourcePoint.y + 0.14, vUv.y);
      float local = exp(-pow(abs(vUv.x - sourcePoint.x) / 0.205, 4.0));
      // Only light seen through the glass feeds bloom (sphere radius in this
      // canvas is 0.5 / 2.8 of its width), so it never leaks a halo outside.
      float disc = 1.0 - smoothstep(0.165, 0.18, length(vUv - 0.5));
      float selection = lower * local * disc * smoothstep(threshold.x, threshold.y, luminance);
      gl_FragColor = vec4(color * selection, 1.0);
    }
  `),p=f({source:{value:m.texture},stepUv:{value:new pe}},`
    varying vec2 vUv;
    uniform sampler2D source;
    uniform vec2 stepUv;
    void main() {
      vec3 light = texture2D(source, vUv).rgb * 0.227027;
      light += texture2D(source, vUv + stepUv * 1.384615).rgb * 0.316216;
      light += texture2D(source, vUv - stepUv * 1.384615).rgb * 0.316216;
      light += texture2D(source, vUv + stepUv * 3.230769).rgb * 0.070270;
      light += texture2D(source, vUv - stepUv * 3.230769).rgb * 0.070270;
      gl_FragColor = vec4(light, 1.0);
    }
  `),M=f({source:{value:i.texture},bloom:{value:m.texture},wide:{value:E.texture},strength:{value:l},feather:{value:g?1:0},shoulder:{value:1},featherRange:{value:new pe(.36,.5)},mono:{value:0}},`
    varying vec2 vUv;
    uniform sampler2D source;
    uniform sampler2D bloom;
    uniform sampler2D wide;
    uniform float strength;
    uniform float feather;
    uniform float shoulder;
    uniform vec2 featherRange;
    uniform float mono;
    void main() {
      vec3 color = texture2D(source, vUv).rgb;
      // Light may glow around the base (contact atmosphere) but must not
      // leak out through the sides or top of the shell.
      vec2 fromCentre = vUv - 0.5;
      float outsideShell = smoothstep(0.17, 0.2, length(fromCentre)) * smoothstep(-0.15, -0.05, fromCentre.y);
      if (strength > 0.0) color += (texture2D(bloom, vUv).rgb * strength
        + texture2D(wide, vUv).rgb * strength * 0.5) * (1.0 - 0.75 * outsideShell);
      // A highlight-only shoulder preserves champagne hue without changing
      // the near-black backdrop or crushing transparent upper glass.
      float peak = max(color.r, max(color.g, color.b));
      // A wider knee keeps a visible gradient inside the hot core.
      // Hue-preserving roll-off. Dark worlds use a low knee; a light world a
      // high one, so cream stays cream and highlights never clip channel by
      // channel (which would shift warm light toward yellow-green).
      float knee = shoulder > 0.5 ? 0.62 : 0.9;
      float softPeak = knee + (0.995 - knee) * (1.0 - exp(-max(0.0, peak - knee) / (1.0 - knee)));
      color *= peak > knee ? softPeak / peak : 1.0;
      gl_FragColor = vec4(color, 1.0);
      #include <colorspace_fragment>
      // Optional neutral greys (luminance of the display colour): no warm tint, on every browser.
      gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(dot(gl_FragColor.rgb, vec3(0.2126, 0.7152, 0.0722))), mono);
      // Optional premultiplied edge fade: the square canvas dissolves into the
      // host page well outside the glass and its contact light.
      float alpha = mix(1.0, 1.0 - smoothstep(featherRange.x, featherRange.y, length(vUv - 0.5)), feather);
      gl_FragColor = vec4(gl_FragColor.rgb * alpha, alpha);
    }
  `),v=new ie(W,U);o.add(v);let I=314;function L(b,S){v.material=b,r.setRenderTarget(S),r.render(o,D)}return{resize(b,S){I=b,i.setSize(Math.ceil(b*S),Math.ceil(b*S));let Y=157;m.setSize(Y,Y),d.setSize(Y,Y);let te=56;E.setSize(te,te),x.setSize(te,te)},setFeather(b,S){M.uniforms.featherRange.value.set(b,S)},setMono(b){M.uniforms.mono.value=b?1:0},setStrength(b){l=b},setTone(b){let S=b==="light";U.uniforms.threshold.value.set(S?1.05:.16,S?2.2:.65),M.uniforms.shoulder.value=S?0:1},render(b,S,Y=!0,te){U.uniforms.sourcePoint.value.copy(te),M.uniforms.strength.value=Y?l:0,r.setRenderTarget(i),r.render(b,S),L(U,m),p.uniforms.source.value=m.texture,p.uniforms.stepUv.value.set(3.2/314,0),L(p,d),p.uniforms.source.value=d.texture,p.uniforms.stepUv.value.set(0,3.2/314),L(p,m),p.uniforms.source.value=m.texture;for(let H=0;H<2;H++)p.uniforms.stepUv.value.set(5/314,0),L(p,x),p.uniforms.source.value=x.texture,p.uniforms.stepUv.value.set(0,5/314),L(p,E),p.uniforms.source.value=E.texture;L(M,null)},dispose(){[i,m,d,E,x,W,U,p,M].forEach(b=>b.dispose())}}}var Ae=.88,lt=(r,l=0,g=1)=>Math.min(g,Math.max(l,r)),Z=(()=>{let r=7;return()=>(r=r*16807%2147483647)/2147483647})();function Gt({body:r,spin:l,renderer:g,compact:s}){g.localClippingEnabled=!0;let i={beads:null,glitter:null,liquid:null,gel:null},m="light",d={amount:.5,size:.5,motion:.4,fill:.5,colour:new V("#f2d6a5")},E=new St,x=[],o=u=>(x.push(u),u),D=s?16:24,W=o(new Be(1,s?14:20,s?10:14)),O=o(new De({color:"#ffffff",roughness:.04,metalness:0,clearcoat:1,clearcoatRoughness:.02,specularIntensity:1,envMapIntensity:2.6,ior:1.6,emissive:new V("#6a5a44"),emissiveIntensity:.55})),f={mesh:null,p:[],v:[],r:[],n:0};function U(){let u=new nt(W,O,D);u.instanceMatrix.setUsage(at);for(let R=0;R<D;R++)f.p.push(new K((Z()-.5)*.9,-.4-Z()*.3,(Z()-.5)*.9)),f.v.push(new K),f.r.push(.75+Z()*.5);i.beads=u,r.add(u)}function p(u,R,T){f.t=(f.t||0)+u;let y=f.n=Math.round(8+d.amount*(D-8)),$=.08+d.size*.08;for(let e=0;e<y;e++){let a=f.p[e],c=f.v[e],w=$*f.r[e];c.y-=1.4*u;let z=d.motion*1.6,N=e*1.7+f.t*.6;c.x+=Math.sin(N)*z*u,c.z+=Math.cos(N*.8)*z*u,c.y+=Math.max(0,Math.sin(N*.5))*z*.9*u,c.addScaledVector(R,u),c.x+=(Z()-.5)*T*u,c.z+=(Z()-.5)*T*u,c.y+=Z()*T*.4*u,c.multiplyScalar(Math.exp(-u*1.6)),a.addScaledVector(c,u);let ee=Ae-w,ue=a.length();if(ue>ee){let X=a.clone().divideScalar(ue);a.copy(X).multiplyScalar(ee);let fe=c.dot(X);fe>0&&c.addScaledVector(X,-fe*1.35)}}for(let e=0;e<5;e++)for(let a=0;a<y;a++)for(let c=a+1;c<y;c++){let w=f.p[a],z=f.p[c],N=$*f.r[a],ee=$*f.r[c],ue=z.x-w.x,X=z.y-w.y,fe=z.z-w.z,Q=ue*ue+X*X+fe*fe,ye=N+ee;if(Q<ye*ye&&Q>1e-9){let he=Math.sqrt(Q),q=(ye-he)/2/he;w.x-=ue*q,w.y-=X*q,w.z-=fe*q,z.x+=ue*q,z.y+=X*q,z.z+=fe*q}}let _=i.beads;_.count=y;for(let e=0;e<y;e++)E.position.copy(f.p[e]),E.scale.setScalar($*f.r[e]),E.rotation.set(0,0,0),E.updateMatrix(),_.setMatrixAt(e,E.matrix);_.instanceMatrix.needsUpdate=!0}let M=s?220:520,v=o(new zt(1,0));v.scale(1,.18,1);let I=o(new It({color:"#fff4e2",metalness:1,roughness:.12,envMapIntensity:2.4})),L={p:[],axis:[],phase:[],spin:[]};function b(){let u=new nt(v,I,M);u.instanceMatrix.setUsage(at);for(let R=0;R<M;R++){let T;do T=new K(Z()*2-1,Z()*2-1,Z()*2-1);while(T.length()>1);T.multiplyScalar(Ae-.06),T.y=T.y*.9-.06,L.p.push(T),L.axis.push(new K(Z()-.5,Z()-.5,Z()-.5).normalize()),L.phase.push(Z()*Math.PI*2),L.spin.push(.4+Z()*1.6)}i.glitter=u,l.add(u)}let S=new Rt,Y=new K;function te(u,R,T){let y=Math.round(60+d.amount*(M-60)),$=.008+d.size*.02,_=.15+d.motion*1.1,e=i.glitter;e.count=y;for(let a=0;a<y;a++){let c=L.p[a],w=L.phase[a],z=u*_*.25+w;Y.set(Math.sin(z)*.03,Math.cos(z*.7)*.02,Math.cos(z)*.03),c.x+=(Y.x+(Z()-.5)*T*.02)*R*2,c.y+=(Y.y-.004+(Z()-.5)*T*.02)*R*2,c.z+=Y.z*R*2,c.y<-.8&&(c.y=.5);let N=c.length(),ee=Ae-.05;N>ee&&c.multiplyScalar(ee/N),S.setFromAxisAngle(L.axis[a],u*L.spin[a]*_+w),E.position.copy(c),E.quaternion.copy(S),E.scale.setScalar($),E.updateMatrix(),e.setMatrixAt(a,E.matrix)}e.instanceMatrix.needsUpdate=!0}let H={tiltX:0,tiltZ:0,vx:0,vz:0,plane:new Ct(new K(0,-1,0),0)},C={liqTime:{value:0},liqAmp:{value:.01},liqColour:{value:new V},liqR:{value:.5}};function ge(){let u=new Ge,R=o(new De({color:"#fbf3e4",roughness:.05,metalness:0,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:2.2,ior:1.33,side:Ie,clippingPlanes:[H.plane],emissive:new V("#8a6a3a"),emissiveIntensity:.55})),T=new ie(o(new Be(Ae-.015,s?40:64,s?28:44)),R),y=o(new kt(1,s?64:96,0,Math.PI*2)),$=o(new De({color:"#f3e3c6",roughness:.03,metalness:0,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.8,side:Ie,emissive:new V("#4a3418"),emissiveIntensity:.4}));$.onBeforeCompile=a=>{Object.assign(a.uniforms,C),a.vertexShader=`uniform float liqTime; uniform float liqAmp; varying float vRim;
`+a.vertexShader.replace("#include <begin_vertex>",`
        #include <begin_vertex>
        float rr = length(position.xy);
        transformed.z += liqAmp * sin(rr * 14.0 - liqTime * 3.2) * (1.0 - rr) + liqAmp * .6 * sin(position.x * 9.0 + liqTime * 2.1);
        vRim = rr;`),a.fragmentShader=`uniform vec3 liqColour; varying float vRim;
`+a.fragmentShader.replace("#include <emissivemap_fragment>",`
        #include <emissivemap_fragment>
        // The meniscus: the surface climbs and brightens where it meets the glass.
        totalEmissiveRadiance += (liqColour * .6 + vec3(.5)) * smoothstep(.84, 1.0, vRim) * 1.8;`)},$.customProgramCacheKey=()=>"orb-liquid-surface-v2";let _=new ie(y,$);_.rotation.x=-Math.PI/2;let e=new Ge;e.add(_),u.add(T,e),i.liquid=u,H.vol=T,H.holder=e,H.surf=_,H.mat=R,H.surfMat=$,r.add(u)}let oe=new K;function ne(u,R,T,y){let _=.18+(1-d.motion)*.25;H.vx+=(-6.5*6.5*H.tiltX-2*_*6.5*H.vx-T.x*1.4)*R+(Z()-.5)*y*R*3,H.vz+=(-6.5*6.5*H.tiltZ-2*_*6.5*H.vz-T.z*1.4)*R+(Z()-.5)*y*R*3,H.tiltX+=H.vx*R,H.tiltZ+=H.vz*R;let e=d.motion*.05,a=lt(H.tiltX+Math.sin(u*1.3)*e,-.5,.5),c=lt(H.tiltZ+Math.cos(u*1.1)*e*.7,-.5,.5),w=(d.fill-.5)*2*(Ae-.12);oe.set(a,1,c).normalize(),H.plane.normal.copy(oe).negate(),H.plane.constant=w,H.plane.applyMatrix4(r.matrixWorld);let z=Math.sqrt(Math.max(0,(Ae-.015)**2-w*w));H.holder.position.copy(oe).multiplyScalar(w),H.holder.quaternion.setFromUnitVectors(new K(0,1,0),oe),H.surf.scale.setScalar(z*.995),C.liqTime.value=u,C.liqAmp.value=.004+d.motion*.012+Math.min(.03,Math.hypot(H.vx,H.vz)*.01),C.liqColour.value.copy(d.colour),H.mat.color.copy(d.colour).lerp(new V(1,1,1),.25),H.surfMat.color.copy(d.colour).lerp(new V(1,1,1),.6),H.mat.emissive.copy(d.colour).multiplyScalar(.8)}function be(){}let se={gelTime:{value:0},gelAmp:{value:0}};function re(){let u=o(new De({color:"#fff6ea",roughness:.22,metalness:0,sheen:1,sheenRoughness:.3,sheenColor:new V("#ffffff"),clearcoat:1,clearcoatRoughness:.08,emissive:new V("#9a7444"),emissiveIntensity:.6,envMapIntensity:2.2}));u.onBeforeCompile=T=>{Object.assign(T.uniforms,se),T.vertexShader=`uniform float gelTime; uniform float gelAmp;
`+T.vertexShader.replace("#include <begin_vertex>",`
        #include <begin_vertex>
        float gw = sin(position.y * 4.0 + gelTime * 1.7) * sin(position.x * 3.0 - gelTime * 1.3) + .5 * sin(position.z * 5.0 + gelTime * 2.3);
        transformed += normal * gelAmp * gw;`)},u.customProgramCacheKey=()=>"orb-gel-v1";let R=new ie(o(new Ht(1,s?4:5)),u);i.gel=R,R.position.y=.02,r.add(R),i.gelMat=u}function de(u,R){let T=.3+d.amount*.22;i.gel.scale.set(T,T*(1-.06*R),T),se.gelTime.value=u*(.4+d.motion),se.gelAmp.value=.015+d.motion*.03+R*.04,i.gelMat.color.copy(d.colour).lerp(new V(1,1,1),.3),i.gelMat.emissive.copy(d.colour).multiplyScalar(.85+R*.5)}let we=null,xe=new K,J=new K,Ee=performance.now()/1e3;return{get kind(){return m},set(u={}){u.kind&&u.kind!==m&&(m=u.kind,m==="beads"&&!i.beads&&U(),m==="glitter"&&!i.glitter&&b(),m==="liquid"&&!i.liquid&&ge(),m==="gel"&&!i.gel&&re());for(let R of["amount","size","motion","fill"])u[R]!=null&&(d[R]=lt(+u[R]));u.colour&&d.colour.set(u.colour);for(let[R,T]of Object.entries(i))T?.isObject3D&&(T.visible=R===m)},step({x:u=0,y:R=0,d:T=100,energy:y=0,shake:$=0}={}){let _=performance.now()/1e3,e=Math.min(.05,Math.max(.001,_-Ee));Ee=_;let a=new K(u/T*2,-R/T*2,0);if(we){let z=a.clone().sub(we).divideScalar(e);J.copy(z).sub(xe).divideScalar(e).clampLength(0,60),xe.copy(z)}we=a;let c=J.clone().multiplyScalar(-.05),w=$*8+y*2.5*d.motion;return m==="beads"?p(e,c,w):m==="glitter"?te(_,e,w):m==="liquid"?ne(_,e,c,w):m==="gel"&&de(_,y),m!=="light"},restorePlane:be,dispose(){for(let u of Object.values(i))u?.isObject3D&&u.removeFromParent();x.forEach(u=>u.dispose?.()),i.beads?.dispose?.(),i.glitter?.dispose?.()}}}var ve=Object.freeze({transmission:1,roughness:.055,ior:1.5,thickness:.65,clearcoat:0,attenuationDistance:1/0,light:"#f3d8c5",sourceIntensity:1.2});async function At({canvas:r,surface:l,onUnavailable:g,onRestored:s,preset:i="baseline",backdropColor:m="#060605",maxPixelRatio:d,feather:E=!1,renderOnChange:x=!0}){let o=i!=="baseline",D=i==="volume"||i==="master",W=matchMedia("(max-width: 600px)").matches,O=()=>d??(matchMedia("(max-width: 600px)").matches?1.25:1.75),f=new Je({canvas:r,alpha:!0,antialias:!0,powerPreference:"low-power"});f.setPixelRatio(Math.min(devicePixelRatio||1,O())),f.debug.checkShaderErrors=!document.querySelector('meta[name="lo-entries"]');let U=new pe;f.outputColorSpace=Pe,f.toneMapping=xt,f.transmissionResolutionScale=W?.75:1;let p=new Re,M=new Pt(30,1,.1,40);M.position.z=Math.sqrt(1+(2.8/Math.tan(Math.PI/12))**2);let v=new Ge;p.add(v);let I=new De({color:"#ffffff",metalness:0,transmission:ve.transmission,opacity:1,roughness:ve.roughness,ior:ve.ior,thickness:ve.thickness,clearcoat:ve.clearcoat,attenuationColor:"#ffffff",attenuationDistance:ve.attenuationDistance,envMapIntensity:.9}),L=new ie(new Be(1,W?48:64,W?32:48),I);v.add(L);let b={orbSource:{value:new K(-.1,-.78,.1)},orbEye:{value:M.position.clone()},orbRadiance:{value:new V(D?"#f2d6a5":"#f2d6c6").multiplyScalar(.85)},orbWarm:{value:D?1:0},orbEnergy:{value:1},orbTint:{value:new V(1,1,1)},orbSpread:{value:1},orbWobble:{value:0},orbWobbleTime:{value:0}};I.onBeforeCompile=t=>{Object.assign(t.uniforms,b),t.vertexShader=`varying vec3 orbLocalPosition;
      uniform float orbWobble; uniform float orbWobbleTime;
      // Low-order modes only (a soft body, not noise): squash/stretch along a
      // slowly turning axis plus one travelling third-order lobe.
      float orbDisp(vec3 n) {
        vec3 ax = normalize(vec3(sin(orbWobbleTime * .7), 1.0, cos(orbWobbleTime * .5) * .6));
        float c = dot(n, ax);
        return orbWobble * ((1.5 * c * c - .5) * sin(orbWobbleTime * 5.2) + .6 * n.x * n.y * n.z * 4.0 * cos(orbWobbleTime * 3.7 + n.y * 2.0));
      }
    `+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <beginnormal_vertex>",`
      vec3 objectNormal = vec3(normal);
      if (orbWobble > 0.0) {
        // Shading follows the deformation: the normal of the displaced surface,
        // from two tangent samples.
        vec3 n0 = normalize(position);
        vec3 t1 = normalize(cross(n0, abs(n0.y) < .99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
        vec3 t2 = cross(n0, t1);
        float e = .02;
        vec3 a = normalize(n0 + t1 * e), b = normalize(n0 + t2 * e);
        vec3 p0 = n0 * (1.0 + orbDisp(n0)), pa = a * (1.0 + orbDisp(a)), pb = b * (1.0 + orbDisp(b));
        objectNormal = normalize(cross(pa - p0, pb - p0));
        if (dot(objectNormal, n0) < 0.0) objectNormal = -objectNormal;
      }
      #ifdef USE_TANGENT
        vec3 objectTangent = vec3( tangent.xyz );
      #endif`),t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
orbLocalPosition = position;
if (orbWobble > 0.0) transformed = normalize(position) * (1.0 + orbDisp(normalize(position)));`),t.fragmentShader=`
      varying vec3 orbLocalPosition;
      uniform vec3 orbSource;
      uniform vec3 orbEye;
      uniform vec3 orbRadiance;
      uniform float orbEnergy;
      uniform float orbWarm;
      uniform vec3 orbTint;
      uniform float orbSpread;
      float sourceContribution(vec3 p, vec3 ray, float travel, vec3 radii) {
        radii *= orbSpread;
        vec3 offset = (p - orbSource) / radii;
        vec3 direction = ray / radii;
        float along = clamp(-dot(offset, direction) / dot(direction, direction), 0.0, travel);
        vec3 closest = offset + direction * along;
        return exp(-2.0 * dot(closest, closest));
      }
    `+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`
      #include <emissivemap_fragment>
      vec3 entry = normalize(orbLocalPosition);
      vec3 incident = normalize(orbLocalPosition - orbEye);
      vec3 ray = refract(incident, entry, 1.0 / ior);
      float travel = max(0.0, -2.0 * dot(entry, ray));
      float sourceLight = sourceContribution(entry, ray, travel, vec3(0.38, 0.19, 0.26));
      float transmittedGlow = sourceContribution(entry, ray, travel, vec3(0.86, 0.72, 0.68));

      // One restrained internal return from the same low source. Its curved
      // trace follows the crystal boundary instead of a painted optical line.
      vec3 exitPoint = entry + ray * travel;
      vec3 reflectedRay = reflect(ray, normalize(exitPoint));
      float returnTravel = max(0.0, -2.0 * dot(exitPoint, reflectedRay));
      float internalReturn = sourceContribution(exitPoint, reflectedRay, returnTravel, vec3(0.38, 0.19, 0.26));
      float grazing = 1.0 - clamp(dot(-incident, entry), 0.0, 1.0);
      float edgeReturn = 0.04 + 0.96 * pow(grazing, 5.0);

      // The separate volume supplies the body of light. This shell term is
      // only its faint internal return and the lower curvature catching it.
      float lowerCurve = exp(-length(entry.xy - orbSource.xy) * 2.4) * edgeReturn;
      // A restrained lower caustic return: a lens-shaped concentration of
      // the same source, not a second emissive object. Artistic approximation.
      float causticY = orbSource.y - 0.10 + 0.65 * pow(abs(entry.x - orbSource.x * 0.3), 2.0);
      float caustic = exp(-pow(abs(entry.y - causticY) / 0.028, 2.0))
        * (1.0 - smoothstep(0.65, 0.9, abs(entry.x)))
        * smoothstep(-0.95, -0.55, orbSource.y)
        * (1.0 - smoothstep(-0.45, -0.10, orbSource.y)) * 0.16 * (1.0 - orbWarm);
      float opticalLight = sourceLight * mix(0.13, 0.22, orbWarm) + caustic
        + transmittedGlow * mix(0.06, 0.015, orbWarm)
        + internalReturn * mix(0.22, 0.035, orbWarm) * (0.18 + 0.82 * edgeReturn)
        + lowerCurve * 0.42;
      totalEmissiveRadiance += orbRadiance * orbTint * orbEnergy * opticalLight;
    `)},I.customProgramCacheKey=()=>"crystal-volume-return-v5-elastic";let S=Dt(L.geometry,b.orbEye.value,{warmVolume:D});v.add(S.mesh);let Y=new Lt(ve.light,ve.sourceIntensity,4,2);Y.position.copy(b.orbSource.value),v.add(Y);let te=new Ge;v.add(te);let H=Gt({body:v,spin:te,renderer:f,compact:W}),C=!1,ge={},oe=0,ne=0,be=0,se={x:0,v:0},re=0,de=performance.now()/1e3,we=new Re;we.background=new V(o?"#050403":"#242121");let xe=[],J=document.createElement("canvas");J.width=J.height=64;let Ee=J.getContext("2d"),u=Ee.createRadialGradient(32,32,0,32,32,32);u.addColorStop(0,"rgba(255, 255, 255, 1)"),u.addColorStop(.4,"rgba(255, 255, 255, 0.85)"),u.addColorStop(.7,"rgba(255, 255, 255, 0.22)"),u.addColorStop(1,"rgba(255, 255, 255, 0)"),Ee.fillStyle=u,Ee.fillRect(0,0,64,64);let R=new Le(J);R.colorSpace=Pe,xe.push(R);function T(t,n,h,P,G,F=0){let j=new Se(t,n),le=new Ke({color:new V(G).multiplyScalar(P),side:Ie,map:R,transparent:!0,depthWrite:!1}),ce=new ie(j,le);ce.position.set(...h),ce.lookAt(0,0,0),ce.rotateZ(F),we.add(ce),xe.push(j,le)}T(o?2:.75,o?4:2.6,[4.5,4,-4.5],o?9:16,o?"#ffe2ad":"#fff0e0",-.3),T(.45,3,[-5,1,-1],o?1.6:1.1,o?"#efcf9c":"#edd6c4",.14),T(4.2,1.4,[0,-4,-1.5],o?3:1.04,o?"#f3d5a4":ve.light),o?(T(.7,3.2,[4,2,1],1.6,"#fbe6c4",-.28),T(6,2.5,[-4,4,-5],1.1,"#edd3a8",.5),T(2.2,6,[-5.5,.5,-4],1.1,"#efcc96",.1),T(1.6,5,[5.5,-1,-4],2.2,"#f2c88a",-.15),T(5,.65,[-1,-3,-6],2,"#efd09b",.08)):(T(16,16,[2,3,-7],.8,"#e7d8ca"),T(3,7,[5,-.5,-3],.8,"#eddacb"));let y=new Qe(f),$=y.fromScene(we,.035,.1,20,{size:W?128:256});p.environment=$.texture,xe.forEach(t=>t.dispose()),y.dispose();let _=null;function e(){let t=new Re;t.background=new V("#6f583d");let n=new Le(J);n.colorSpace=Pe;let h=[n],P=(F,j,le,ce,qe,Te=0)=>{let ke=new Se(F,j),me=new Ke({color:new V(qe).multiplyScalar(ce),side:Ie,map:n,transparent:!0,depthWrite:!1}),k=new ie(ke,me);k.position.set(...le),k.lookAt(0,0,0),k.rotateZ(Te),t.add(k),h.push(ke,me)};P(7,3.2,[0,6,-1.5],2.6,"#fff5e6"),P(1.4,5,[5,2.5,-3],2,"#fff1dc",-.2),P(1.2,4,[-5.5,1,-2],.9,"#f0dcbc",.15),P(14,3.5,[0,-5,-1],.35,"#5a4630");let G=new Qe(f);_=G.fromScene(t,.04,.1,20,{size:W?128:256}),h.forEach(F=>F.dispose()),G.dispose()}let a=document.createElement("canvas");a.width=a.height=64;{let t=a.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.72,"rgba(255,255,255,.95)"),n.addColorStop(.86,"rgba(255,255,255,.2)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64)}let c={ivory:{background:"#7a6650",sources:[[5.5,1.1,[0,6,-1.5],2.4,"#fff6e8"],[.5,3.6,[4.6,2.4,-2.6],2.6,"#fff3df",-.18],[.35,2.4,[-5,1.6,-2],1.3,"#f6e6cc",.12],[16,4,[0,-5.2,-1],.55,"#e2d4bc"],[2.2,6,[-5.2,0,-3.2],.32,"#4a3524",.05],[1.6,5,[5.4,-.6,-3.6],.3,"#4a3524",-.05],[14,1.1,[0,-1.3,-6],.4,"#3a2a1c"]]},dark:{background:"#140f0b",sources:[[4,.8,[0,6,-1.5],1.6,"#ffe9c8"],[.4,3.2,[4.8,2,-2.4],2.4,"#ffdfae",-.2],[.3,2.2,[-5,1,-2],.9,"#e9c58f",.15],[14,3,[0,-5,-1],.18,"#3a2a1b"]]}};c.gallery={background:"#7d8084",sources:[[3.4,2.4,[-3.4,3,3.6],3.4,"#ffffff",.35],[.55,4.2,[4.4,.9,2.6],2.8,"#fff7ec",-.12],[9,1,[0,6.2,.5],1.4,"#ffffff"],[16,5,[0,-5.2,0],.85,"#eceeef"],[2.6,7,[-5.6,0,-1],.06,"#1c1c1d"],[2.6,7,[5.8,-.2,-1.6],.06,"#1c1c1d"],[12,2.2,[0,-1,-6],.1,"#2a2a2b"]]},c.smoke={background:"#1e2022",sources:[[3,2.2,[-3.4,3,3.6],3,"#ffffff",.35],[.45,4.6,[4.4,.9,2.6],2.4,"#f4ead8",-.12],[.35,4.6,[-4.6,.4,2.2],1.6,"#ffffff"],[9,.8,[0,6.2,.5],.9,"#ffffff"],[16,5,[0,-5.2,0],.18,"#3a3c3e"],[12,4,[0,.5,-6],.08,"#1a1b1c"]]};function w(t=.65,n=.55){return{background:"#25272b",sources:[[.32,5.4,[-3.6,.5,2.6],1+6*t,"#ffe3bd"],[.32,5.4,[3.6,.5,2.6],1+6*n,"#eef2fb"],[2.6,1.6,[-1.6,3.6,3.4],.9,"#ffffff",.3],[5,.8,[0,6,0],.5,"#ffffff"],[14,4,[0,-5,0],.22,"#3a3b40"],[10,5,[0,.5,-6],.14,"#34363b"]]}}let z={};function N(t){if(z[t])return z[t];let n=c[t];if(t.startsWith("chamber:")){let[,j,le]=t.split(":");n=w(+j,+le)}let h=new Re;h.background=new V(n.background);let P=new Le(a);P.colorSpace=Pe;let G=[P];for(let[j,le,ce,qe,Te,ke=0]of n.sources){let me=new Se(j,le),k=new Ke({color:new V(Te).multiplyScalar(qe),side:Ie,map:P,transparent:!0,depthWrite:!1}),A=new ie(me,k);A.position.set(...ce),A.lookAt(0,0,0),A.rotateZ(ke),h.add(A),G.push(me,k)}let F=new Qe(f);if(t.startsWith("chamber:"))for(let j of Object.keys(z))j.startsWith("chamber:")&&j!==t&&Object.keys(z).length>6&&(z[j].dispose(),delete z[j]);return z[t]=F.fromScene(h,.012,.1,20,{size:W?128:256}),G.forEach(j=>j.dispose()),F.dispose(),z[t]}let ee={};function ue(t){if(ee[t])return ee[t];let n=256,h=new Float32Array(n*n),P=(()=>{let k=1234+t.length*97;return()=>(k=k*16807%2147483647)/2147483647})(),G=(k,A)=>h[(A+n)%n*n+(k+n)%n],F=(k,A)=>{let B=new Float32Array(n*n);for(let He=0;He<n;He++)for(let Me=0;Me<n;Me++){let ze=0,gt=0;for(let ot=-A;ot<=A;ot++)for(let rt=-A;rt<=A;rt++)ze+=k[(He+ot+n)%n*n+(Me+rt+n)%n],gt++;B[He*n+Me]=ze/gt}return B};if(t==="grain"){for(let k=0;k<h.length;k++)h[k]=P();h.set(F(h,1))}else if(t==="frost"){for(let B=0;B<h.length;B++)h[B]=P();let k=F(h,1),A=F(h,3);for(let B=0;B<h.length;B++)h[B]=k[B]*.6+A[B]*1.4}else if(t==="ripple")for(let k=0;k<n;k++)for(let A=0;A<n;A++)h[k*n+A]=.5+.5*Math.sin(k/n*Math.PI*2*9+Math.sin(A/n*Math.PI*2*2)*1.2);else if(t==="brushed"){for(let k=0;k<n;k++){let A=P();for(let B=0;B<n;B++)A=A*.985+P()*.015,h[k*n+B]=A+P()*.05}h.set(F(h,1))}else{for(let B=0;B<h.length;B++)h[B]=P();let k=F(h,4),A=F(k,4);for(let B=0;B<h.length;B++)h[B]=Math.abs(A[B]-.5)*4}let j=1/0,le=-1/0;for(let k of h)j=Math.min(j,k),le=Math.max(le,k);let ce=document.createElement("canvas");ce.width=ce.height=n;let qe=ce.getContext("2d"),Te=qe.createImageData(n,n),ke=t==="ripple"?2.2:t==="brushed"?5:4;for(let k=0;k<n;k++)for(let A=0;A<n;A++){let B=(G(A+1,k)-G(A-1,k))/(le-j||1)*ke,He=(G(A,k+1)-G(A,k-1))/(le-j||1)*ke,Me=Math.hypot(B,He,1),ze=(k*n+A)*4;Te.data[ze]=(-B/Me*.5+.5)*255,Te.data[ze+1]=(-He/Me*.5+.5)*255,Te.data[ze+2]=(1/Me*.5+.5)*255,Te.data[ze+3]=255}qe.putImageData(Te,0,0);let me=new Le(ce);return me.wrapS=me.wrapT=yt,me.colorSpace=Et,me.anisotropy=4,ee[t]=me}let X=document.createElement("canvas"),fe=X.getContext("2d"),Q=new Le(X);Q.colorSpace=Pe,Q.generateMipmaps=!1,p.background=Q;let ye=null,he=112,q=314,$e=!1,Ne=null,ae=()=>{x&&Ne&&Xe(Ne)},Ce=qt(f,{strength:i==="master"?.45:.24,feather:E});function $t(t){let n=fe;if(n.clearRect(0,0,q,q),n.fillStyle=m,n.fillRect(0,0,q,q),ye)ye(n,{...t,extent:q});else if(l?.width){let h=l.width/t.viewportWidth,P=(t.diameter||he)*2.8;n.drawImage(l,(t.x-P/2)*h,(t.y-P/2)*h,P*h,P*h,0,0,q,q)}Q.needsUpdate=!0}function dt(t){he=t,q=Math.ceil(he*2.8);let n=Math.min(devicePixelRatio||1,O(),Math.max(1,1500/q)),h=f.getSize(U);(h.x!==q||h.y!==q||f.getPixelRatio()!==n)&&(f.setDrawingBufferSize(q,q,n),Ce.resize(q,n)),(X.width!==q||X.height!==q)&&(X.width=X.height=q,Q.dispose(),Q=new Le(X),Q.colorSpace=Pe,Q.generateMipmaps=!1,p.background=Q),Ne&&Xe(Ne)}let Xt=M.position.z,tt=new K;function ut(t){v.scale.set(t.scaleX,t.scaleY,t.scaleX),v.position.y=t.scaleY-1;let n=t.view?.yaw||0,h=t.view?.pitch||0;M.position.set(Math.sin(n)*Math.cos(h),Math.sin(h),Math.cos(n)*Math.cos(h)).multiplyScalar(Xt),M.up.set(0,1,0),M.lookAt(0,0,0),M.updateMatrixWorld(),b.orbEye.value.set(M.position.x/t.scaleX,(M.position.y-v.position.y)/t.scaleY,M.position.z/t.scaleX),t.focus&&(it(t.focus,S.uniforms.orbCore.value),b.orbSource.value.copy(S.uniforms.orbCore.value),Y.position.copy(b.orbSource.value))}function ft(t,n){return ut(n),v.updateMatrixWorld(),tt.set(t.x,t.y,t.z).applyMatrix4(v.matrixWorld).project(M),{x:tt.x*q/2,y:-tt.y*q/2}}let pt=new pe;function Xe(t){if($e)return;Ne=t,$t(t),ut(t);let n=(t.intensity??1)*(1+ne*1.1),h=.08+.92*Math.pow(n,.7);b.orbEnergy.value=h*(1+t.impact*.1),S.uniforms.orbEnergy.value=h*(1+t.impact*.1),Y.intensity=ve.sourceIntensity*h*(1+t.impact*.12);let P=performance.now()/1e3,G=Math.min(.05,P-de);de=P,se.v+=(-140*se.x-2*.16*12*se.v+re*30+ne*6)*G,se.x+=se.v*G;let F=be*(.012+Math.abs(se.x)*.05)+ne*.034;b.orbWobble.value=Math.min(.045,F),b.orbWobbleTime.value=P,S.uniforms.orbSpeech.value=ne,S.uniforms.orbTime.value=P,t.shellX!=null?H.step({x:t.shellX,y:t.shellY,d:t.shellD,energy:ne,shake:re}):H.step({energy:ne,shake:re}),re*=Math.exp(-G/.12),te.rotation.y=oe,I.normalMap&&(I.normalMap.offset.x=oe/(Math.PI*2)),L.visible=t.shell!==!1,S.mesh.visible=t.volume!==!1,r.dataset.layers=`${L.visible}/${S.mesh.visible}/${t.bloom!==!1}`,r.dataset.material=i,r.style.opacity=t.formation;let j=ft(S.uniforms.orbCore.value,t);pt.set(.5+j.x/q,.5-j.y/q),Ce.render(p,M,t.bloom!==!1,pt)}function ht(t){t.preventDefault(),g("WebGL unavailable")}r.addEventListener("webglcontextlost",ht);function mt(){$e||s?.()}r.addEventListener("webglcontextrestored",mt),dt(he);function vt(){$e||($e=!0,r.removeEventListener("webglcontextlost",ht),r.removeEventListener("webglcontextrestored",mt),L.geometry.dispose(),H.dispose(),S.dispose(),Ce.dispose(),[I,Q,$,_,...Object.values(z)].forEach(t=>t?.dispose()),f.dispose())}try{await f.compileAsync(p,M),Xe({x:innerWidth*.5,y:innerHeight*.54,diameter:he,viewportWidth:innerWidth,formation:0,scaleX:1,scaleY:1,impact:0,intensity:.7})}catch(t){throw vt(),t}return{resize:dt,render:Xe,dispose:vt,project:ft,setNeutral(t){C=!!t;let n=S.uniforms;for(let h of["ivory","champagne","gold","mist","warm","pearl"])if(ge[h]??=n[h].value.clone(),C){let P=ge[h],G=P.r*.2126+P.g*.7152+P.b*.0722;n[h].value.setRGB(G*1,G*1,G*.985)}else n[h].value.copy(ge[h]);b.orbRadiance.value.set(C?"#ececea":D?"#f2d6a5":"#f2d6c6").multiplyScalar(.85),ae()},get neutral(){return C},get interiorKind(){return H.kind},get elastic(){return be},setInterior(t){H.set(t),ae()},setElastic(t){be=Math.max(0,Math.min(1,t))},setSpeech(t){ne=Math.max(0,Math.min(1,t))},setRibbon(t){S.uniforms.orbRibbon.value=Math.max(0,Math.min(1,t))},nudge(t=1){re=Math.min(1.5,re+t)},setObjectYaw(t){let n=t-oe;oe=t,Math.abs(n)>.002&&(re=Math.min(1,re+Math.abs(n)*.6))},get animated(){return H.kind!=="light"||be>0||ne>0||S.uniforms.orbRibbon.value>.001||Math.abs(se.x)>1e-4},loseContext:()=>f.forceContextLoss(),setEnvironment(t){p.environment=t||$.texture,ae()},setBackdropSource(t){ye=t,ae()},setFeather(t,n){Ce.setFeather(t,n),ae()},setOptics({fill:t,lobe:n,core:h,clean:P,wall:G}={}){let F=S.uniforms;t!=null&&(F.opticsFill.value=t),n!=null&&(F.opticsLobe.value=n),h!=null&&(F.coreSize.value=h),P!=null&&(F.opticsClean.value=P),G!=null&&(F.opticsWall.value=G),ae()},setBloom(t){Ce.setStrength(t),ae()},setMono(t){Ce.setMono(t),ae()},setLight({tint:t,spread:n}={}){t&&(b.orbTint.value.setRGB(...t),S.uniforms.lightTint.value.setRGB(...t),C?Y.color.setRGB(...t):Y.color.set(ve.light).multiply(b.orbTint.value)),n!=null&&(b.orbSpread.value=n,S.uniforms.lightSpread.value=n),ae()},prepareTone(t){t==="light"&&!_?e():c[t]&&N(t)},setMaterial({roughness:t,envMapIntensity:n,thickness:h,ior:P,tint:G,tintDistance:F,specular:j}={}){t!=null&&(I.roughness=t),n!=null&&(I.envMapIntensity=n),h!=null&&(I.thickness=h),P!=null&&(I.ior=P),j!=null&&(I.specularIntensity=j),G&&I.attenuationColor.setRGB(...G),F!=null&&(I.attenuationDistance=F>0?F:1/0),ae()},setTexture({kind:t="none",amount:n=.5,scale:h=1,rotation:P=0}={}){let G=t==="none"?null:ue(t);(I.normalMap??null)!==G&&(I.normalMap=G,I.needsUpdate=!0),G&&(G.repeat.set(2*h,h),G.rotation=P,G.center.set(.5,.5),I.normalScale.set(n,n)),ae()},setEnvironmentLevel(t){p.environmentIntensity=Math.max(0,t),ae()},setWorld(t){p.environment=N(t).texture,ae()},setVolumeWorld(t){S.uniforms.lightWorld.value=t,ae()},setTone(t){t==="light"&&!_&&e(),p.environment=t==="light"?_.texture:$.texture,S.uniforms.lightWorld.value=t==="light"?1:0,Ce.setTone(t),ae()}}}var Ot=(r,l=0,g=1)=>Math.max(l,Math.min(g,Number.isFinite(r)?r:l)),Nt=r=>{let l=Ot(r);return l*l*(3-2*l)};var po=Object.freeze({first:410,second:680,dock:830,ready:1220,waveEnd:1820,release:440}),ho=Object.freeze({x:-.07,y:-.55});function Zt(r,l,g,s,i,m){r.save(),r.translate(l,g),r.scale(s,i);let d=r.createRadialGradient(0,0,0,0,0,1);m.forEach(([E,x])=>d.addColorStop(E,x)),r.fillStyle=d,r.fillRect(-1,-1,2,2),r.restore()}function Wt(r,{pose:l,intensity:g,focus:s,width:i,height:m}){let d=(...M)=>Zt(r,...M),E=.3+.7*Nt((.25-s.y)/.8),x=l.diameter,o=(.08+g*.75)*(l.contact??1)*l.formation*E,D=l.view,W=D?.tilt??1,O=D?D.contact.x+(D.ground.x-D.contact.x)*.35:l.x+s.x*x*.075,f=D?D.contact.y:l.groundY??l.y+x*.486,U=D?D.mirror.x:O,p=x*.75/Math.sqrt(W);o<=0||(r.save(),r.globalCompositeOperation="lighter",d(O,f+x*.04*W,x*1.25,x*.2*W,[[0,`rgba(214,168,104,${o*.2})`],[.45,`rgba(150,112,64,${o*.07})`],[1,"rgba(90,66,36,0)"]]),r.save(),r.beginPath(),r.rect(0,f,i,m),r.clip(),d(U,f,x*.13,p,[[0,`rgba(255,228,180,${o*.42})`],[.3,`rgba(234,186,118,${o*.16})`],[1,"rgba(200,150,90,0)"]]),d(U,f,x*.05,p*.53,[[0,`rgba(255,238,206,${o*.35})`],[1,"rgba(230,180,110,0)"]]),r.restore(),d(O+x*.02,f,x*.6,x*.045*W,[[0,`rgba(255,232,190,${o*.75})`],[.3,`rgba(244,200,132,${o*.3})`],[1,"rgba(214,160,92,0)"]]),d(O,f,x*.26,x*.07*W,[[0,`rgba(255,240,212,${o*.85})`],[.5,`rgba(240,196,128,${o*.22})`],[1,"rgba(206,151,72,0)"]]),r.restore())}var _e=2.8,Oe=Object.freeze({x:-.1,y:-.76,z:.1}),Qt=.7,Jt=Object.freeze({x:.34,up:.3,down:.05,depth:.16}),Bt=Object.freeze({x:.62,up:1.3,down:.06,depth:.2}),Vt=.157,et={high:2,balanced:1.5,low:1},Ut=(()=>{try{let r=document.createElement("canvas").getContext("2d");return r.filter="blur(1px)",r.filter==="blur(1px)"}catch{return!1}})(),Fe=(r,l,g)=>Math.min(g,Math.max(l,r));function _t({x:r,y:l,z:g}){let s=Math.hypot(r,l,g),i=.6,m=.78;if(s<=i)return{x:r,y:l,z:g};let E=(i+(m-i)*(1-Math.exp(-(s-i)/(m-i))))/s;return{x:r*E,y:l*E,z:g*E}}async function wo({container:r,diameter:l=400,quality:g="high",background:s="#0b0907",driven:i=!1}={}){if(!r)throw new Error("createLightOrb: container is required");getComputedStyle(r).position==="static"&&(r.style.position="relative");let m=document.createElement("div");m.className="light-orb-master",m.style.cssText="position:absolute;left:0;top:0;pointer-events:none;transform-origin:50% 50%;will-change:transform,opacity;";let d=document.createElement("canvas"),E=document.createElement("canvas");for(let e of[d,E])e.setAttribute("aria-hidden","true"),e.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;",m.append(e);r.append(m);let x=d.getContext("2d"),o={pose:{x:null,y:null,diameter:l,squash:0},renderDiameter:Math.round(l),focus:{...Oe},focusTarget:{...Oe},view:{yaw:0,pitch:0},visibility:1,contact:1,emission:1,backdrop:null,disposed:!1},D=0,W=0,O=0,f=null,U=null,p=0,M=!1,v=null,I=!1,L=!0,b="",S=e=>Math.round(e*10),Y=e=>Math.round(e*1e3),te=e=>e<.001?0:Math.round(e*1e3)/1e3,H=()=>{let e=o.pose,a=o.focus;return[S(e.x??-1),S(e.y??-1),S(e.diameter),Y(e.squash),o.renderDiameter,Y(o.visibility),Y(o.emission),Y(o.contact),Math.round(a.x*1e4),Math.round(a.y*1e4),Math.round(a.z*1e4),Y(o.view.yaw),Y(o.view.pitch)].join()},C=await At({canvas:E,surface:d,preset:"master",backdropColor:s,maxPixelRatio:et[g]??et.high,feather:!0,renderOnChange:!1,onUnavailable:()=>m.dispatchEvent(new CustomEvent("lightorb:unavailable",{bubbles:!0})),onRestored:()=>{o.disposed||(m.dispatchEvent(new CustomEvent("lightorb:restored",{bubbles:!0})),y())}}),ge=e=>Math.ceil(e*_e);function oe(){let e=ge(o.renderDiameter);m.style.width=m.style.height=`${e}px`;let a=Math.min(devicePixelRatio||1,et[g]??et.high);d.width=d.height=Math.round(e*a),x.setTransform(a,0,0,a,0,0),C.resize(o.renderDiameter)}function ne(){return{x:o.pose.x??r.clientWidth/2,y:o.pose.y??r.clientHeight/2}}function be(){let{x:e,y:a}=ne(),c=ge(o.renderDiameter),w=o.pose.diameter/o.renderDiameter;m.style.transform=`translate(${e-c/2}px, ${a-c/2}px) scale(${w})`,m.style.opacity=String(o.visibility),m.style.visibility=o.visibility>0?"visible":"hidden"}function se(){let e=ge(o.renderDiameter),a=Fe(o.pose.squash,0,.2),c=o.focus;return{x:e/2,y:e/2,diameter:o.renderDiameter,viewportWidth:e,formation:1,scaleX:1+a*.25,scaleY:1-a,impact:0,intensity:Qt*o.emission,focus:{x:c.x/Ue,y:c.y/Ue,z:c.z},view:{...o.view},shellX:o.pose.x??0,shellY:o.pose.y??0,shellD:o.pose.diameter}}function re(){if(o.disposed||(be(),o.visibility<=0))return;let e=se(),a=ge(o.renderDiameter),c=o.focus,w=z=>{let N=C.project(z,e);return{x:a/2+N.x,y:a/2+N.y}};x.clearRect(0,0,a,a),Ut&&(x.filter=o.neutral||o.mono?"saturate(0)":"none"),Wt(x,{pose:{x:a/2,y:a/2,diameter:o.renderDiameter,formation:1,contact:o.contact,view:{contact:w({x:0,y:-1,z:0}),ground:w({x:c.x,y:-1,z:c.z}),mirror:w({x:c.x,y:-2-c.y,z:c.z}),tilt:Fe(Math.sin(Vt+o.view.pitch)/Math.sin(Vt),.55,3.5)}},intensity:e.intensity,focus:e.focus,width:a,height:a}),(o.neutral||o.mono)&&!Ut&&we(),C.render(e)}let de=null;function we(){let e=d.width,a=d.height;de??=document.createElement("canvas"),(de.width!==e||de.height!==a)&&(de.width=e,de.height=a);let c=de.getContext("2d"),w=x;c.globalCompositeOperation="copy",c.drawImage(d,0,0),w.save(),w.setTransform(1,0,0,1,0,0),w.globalCompositeOperation="saturation",w.fillStyle="#808080",w.fillRect(0,0,e,a),w.globalCompositeOperation="destination-in",w.drawImage(de,0,0),w.restore()}function xe(e){D=0;let a=Math.min(.1,(e-(W||e))/1e3);W=e;let c=!1;f&&!f.inside&&e-f.leftAt>600&&(o.focusTarget={...Oe},o.focusTau=1.6);let w=f?.inside?f.tau??.45:o.focusTau??1.6,z=1-Math.exp(-a/w);for(let N of["x","y","z"]){let ee=o.focusTarget[N]-o.focus[N];Math.abs(ee)>1e-4?(o.focus[N]+=ee*z,c=!0):o.focus[N]=o.focusTarget[N]}if(M)M=!1,be();else if(I&&i){let N=H();(L||N!==b||C.animated)&&(L=!1,b=N,re())}else re();i||(c||f&&!f.inside&&e-f.leftAt<=600?D=requestAnimationFrame(xe):W=0)}function J(){!i&&!D&&!o.disposed&&(D=requestAnimationFrame(xe))}let Ee=new ResizeObserver(()=>{be(),y()});Ee.observe(r);let u=null,R=()=>{oe(),y(),T()};function T(){u?.removeEventListener("change",R),u=matchMedia(`(resolution: ${devicePixelRatio}dppx)`),u.addEventListener("change",R)}T();function y(){L=!0,J()}oe(),re();let $={element:m,setPose({x:e=o.pose.x,y:a=o.pose.y,diameter:c=o.pose.diameter,squash:w=o.pose.squash}={}){let z=c!==o.pose.diameter;Object.assign(o.pose,{x:e,y:a,diameter:c,squash:w}),z&&(clearTimeout(O),O=0),c>o.renderDiameter*1.02?(clearTimeout(O),O=0,o.renderDiameter=Math.round(c*1.06),oe(),U!=null&&(U=o.renderDiameter)):U==null&&!O&&c<o.renderDiameter*.9&&(O=setTimeout(()=>{O=0,o.renderDiameter=Math.round(o.pose.diameter),oe(),y()},160)),J()},holdRaster(e){if(e==null||e===!1){U=null;return}clearTimeout(O),O=0;let a=e===!0?o.renderDiameter:Math.ceil(e);if(a<o.pose.diameter){U=o.renderDiameter;return}if(U=a,a!==o.renderDiameter){if(a<o.renderDiameter&&p<4){p++,M=!0;return}p=0,o.renderDiameter=a,oe(),y()}},setFocus(e,{immediate:a=!1}={}){o.focusTarget=_t({...o.focusTarget,...e}),o.focusTau=.35,a&&(o.focus={...o.focusTarget}),y()},getFocus:()=>({...o.focus}),attachPointer(e=r,{range:a="subtle"}={}){f?.detach();let c=new AbortController,{signal:w}=c,z=a==="volume"?Bt:Jt,N={inside:!1,leftAt:0,tau:a==="volume"?.22:.18,detach:()=>{c.abort(),f===N&&(f=null)}};f=N;let ee=X=>{let fe=r.getBoundingClientRect(),Q=ne(),ye=o.pose.diameter*(z===Bt?1.05:1.5),he=Math.tanh((X.clientX-fe.left-Q.x)/ye),q=Math.tanh((X.clientY-fe.top-Q.y)/ye);N.inside=!0,o.focusTarget=_t({x:Oe.x+z.x*he,y:Oe.y+(q<0?-q*z.up:-q*z.down),z:Oe.z+z.depth*(1-Math.min(1,Math.hypot(he,q)))}),J()},ue=()=>{N.inside=!1,N.leftAt=performance.now(),J()};return e.addEventListener("pointermove",ee,{signal:w}),e.addEventListener("pointerleave",ue,{signal:w}),e.addEventListener("pointercancel",ue,{signal:w}),N.detach},setVisibility(e){o.visibility=Fe(e,0,1),J()},setEmission(e){o.emission=Fe(e,0,1.4),J()},setContact(e){o.contact=Fe(e,0,1),J()},setView({yaw:e=0,pitch:a=0}={}){o.view={yaw:e,pitch:a},y()},project(e){let a=ne(),c=C.project(e,se()),w=o.pose.diameter/o.renderDiameter;return{x:a.x+c.x*w,y:a.y+c.y*w}},setTone(e){C.setTone(e),y()},setVolumeWorld(e){C.setVolumeWorld(e),y()},prepareTone(e){C.prepareTone(e)},setFeather(e=1,a=1.4){v||(C.setFeather(e/_e,a/_e),y())},lockFeather(e){v=e,e&&C.setFeather(e[0]/_e,e[1]/_e),y()},setOptics(e){C.setOptics(e),y()},setLight({tint:e,spread:a}={}){C.setLight({tint:e,spread:a}),y()},setMaterial(e){C.setMaterial(e),y()},setWorld(e){C.setWorld(e),y()},setEnvironmentLevel(e){C.setEnvironmentLevel(e),y()},setTexture(e){C.setTexture(e),y()},setBloom(e){C.setBloom(e),y()},setMono(e){C.setMono(e),o.mono=!!e,y()},setInterior(e){C.setInterior(e),y()},setElastic(e){C.setElastic(e),y()},setSpeech(e){e=te(e),e!==o.speech&&(o.speech=e,C.setSpeech(e),y())},setRibbon(e){e=te(e),e!==o.ribbon&&(o.ribbon=e,C.setRibbon(e),y())},setNeutral(e){C.setNeutral(e),o.neutral=!!e,y()},nudge(e){C.nudge(e),y()},setObjectYaw(e){C.setObjectYaw(e),y()},get animated(){return C.animated},get state(){return{interior:C.interiorKind,neutral:C.neutral,elastic:C.elastic}},setBackdrop(e){C.setBackdropSource(e?(a,c)=>{e(a,c),_(a,c)}:null),y()},invalidate:y,render:re,tick(e=performance.now()){o.disposed||xe(e)},setIdleSkip(e){I!==!!e&&(I=!!e,L=!0)},refresh(){L=!0},dispose(){o.disposed||(o.disposed=!0,cancelAnimationFrame(D),clearTimeout(O),f?.detach(),Ee.disconnect(),u?.removeEventListener("change",R),C.dispose(),m.remove())}};function _(e,a){e.drawImage(d,0,0,a.extent,a.extent)}return $}var eo=`
  precision highp float;
  uniform vec2 resolution;
  uniform float time;
  uniform vec2 pointer;
  uniform float horizon;   // 0..1 from the bottom
  uniform vec3 orb;        // orb centre (px, from the bottom-left) and diameter px
  uniform float exposure;  // 0 night .. 1 the illuminated world
  uniform vec4 reveal;     // the orb as the source of the reveal: centre px, falloff scale px, power
  uniform vec4 lamp;       // the orb lighting the dark world: centre px, radius px, power
  uniform float nightGain; // how much of the dark world is perceptible (restrained at the loader)
  uniform vec4 impactA;    // contact waves: centre px, age s (<0 = none), strength
  uniform vec4 impactB;
  uniform float mono;     // 1: neutral greys at the source (no CSS/canvas filter needed; Safari-safe)
  uniform float impactScale; // orb diameter px at contact
  varying vec2 vUv;

  // Warm, display-referred palette: large areas stay cream and sand; only
  // edges and the light source approach white.
  const vec3 IVORY = vec3(0.965, 0.94, 0.895);
  const vec3 CREAM = vec3(0.925, 0.868, 0.778);
  const vec3 SAND = vec3(0.86, 0.765, 0.632);
  const vec3 DUNE = vec3(0.78, 0.67, 0.53);
  const vec3 STONE = vec3(0.70, 0.62, 0.52);
  const vec3 EDGE = vec3(1.0, 0.975, 0.93);
  const vec3 CHAMPAGNE = vec3(0.98, 0.87, 0.68);
  // The same world at night: near-black, brown-black, espresso, taupe.
  const vec3 NIGHT_LOW = vec3(0.021, 0.017, 0.011);
  const vec3 NIGHT_HIGH = vec3(0.074, 0.056, 0.039);
  const vec3 NIGHT_EDGE = vec3(0.86, 0.74, 0.56);

  float edges = 0.0;       // lit edges of the forms, accumulated per pixel

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + 3.1; a *= 0.5; } return v; }

  // A translucent form: a sheet between two edges whose path is shaped by
  // low-frequency noise (not a sine). Returns body, lit edge, shade below and
  // light passing through. 'speed' sets how fast it bends; 'breathe' how far
  // it rises and settles (each layer on its own slow, unrelated period).
  vec4 form(vec2 p, float base, float slope, float amp, float scale, float seed, float width, float soft, float speed, float depth, float breathe) {
    float t = time * speed;
    float x = p.x + pointer.x * depth * 0.05 + 0.02 * depth * sin(time * 0.05 + seed);
    float bend = (fbm(vec2(x * scale + seed, t + seed * 0.3)) - 0.5) * 2.0;
    float sweep = sin(x * scale * 1.2 + seed * 2.0 + t * 0.6);
    float rise = breathe * sin(time * (0.45 + 0.13 * seed) + seed * 3.0);
    float c = base + slope * x + amp * (0.55 * bend + 0.45 * sweep) + pointer.y * depth * 0.025 + rise;
    float w = width * (0.4 + 0.6 * fbm(vec2(x * scale * 0.8 - seed, t * 0.5)));
    float top = c + w, bottom = c - w;
    float inside = smoothstep(bottom - soft, bottom + soft, p.y) * (1.0 - smoothstep(top - soft, top + soft, p.y));
    float across = clamp((p.y - bottom) / max(top - bottom, 1e-4), 0.0, 1.0);
    // Light passing through the volume: brightest just under the lit edge.
    float body = inside * (0.25 + 0.75 * pow(across, 1.8));
    float through = inside * exp(-(top - p.y) / max(w * 0.45, 1e-4));
    float vary = 0.4 + 0.6 * fbm(vec2(x * 2.6 + seed, t * 1.4));
    float edge = (exp(-abs(p.y - top) / (0.0016 + soft * 0.22)) + 0.3 * exp(-abs(p.y - (top - w * 0.25)) / (0.003 + soft * 0.5))) * vary;
    float below = smoothstep(0.0, 0.09, bottom - p.y) * (1.0 - smoothstep(0.09, 0.3, bottom - p.y));
    return vec4(body, edge, below, through);
  }

  vec3 field(vec2 p) {
    // Background: warm atmosphere \u2014 luminous upper centre, sand and stone
    // toward the lower corners, with very soft low-frequency variation.
    // Almost static: only the light behind breathes (~13 s).
    float g = smoothstep(-0.62, 0.55, p.y * 0.9 - abs(p.x) * 0.22);
    vec3 col = mix(SAND, CREAM, g);
    col = mix(col, STONE, smoothstep(0.55, 1.2, length(p * vec2(0.7, 1.0) - vec2(-0.6, -0.5))) * 0.25);
    col *= 0.97 + 0.06 * fbm(p * 1.4 + time * 0.01);
    vec2 sun = vec2(0.22 + 0.015 * sin(time * 0.048), 0.34 + 0.01 * sin(time * 0.061 + 1.0));
    float glow = exp(-dot(p - sun, p - sun) * 2.2) * (0.92 + 0.08 * sin(time * 0.48));
    col = mix(col, IVORY, glow * 0.62);

    // Midground: huge translucent volumes, slow drift (~9\u201314 s rhythms).
    vec4 m1 = form(p, 0.02, 0.32, 0.2, 0.75, 1.7, 0.22, 0.07, 0.07, 0.4, 0.012);
    col = mix(col, IVORY, m1.x * 0.36 + m1.w * 0.22);
    col = mix(col, col * vec3(0.9, 0.82, 0.71), m1.z * 0.42);
    col += EDGE * m1.y * 0.1;
    vec4 m2 = form(p, -0.12, -0.22, 0.17, 0.9, 4.6, 0.17, 0.05, 0.08, 0.6, 0.014);
    col = mix(col, IVORY, m2.x * 0.3 + m2.w * 0.2);
    col = mix(col, col * vec3(0.88, 0.79, 0.67), m2.z * 0.46);
    col += EDGE * m2.y * 0.14;

    // Foreground: sharper luminous ribbons with caustic edges, a little more
    // responsive than what lies behind them.
    vec4 f1 = form(p, -0.25, 0.26, 0.12, 1.35, 2.9, 0.06, 0.009, 0.11, 1.0, 0.02);
    col = mix(col, mix(IVORY, CHAMPAGNE, 0.22), f1.x * 0.46 + f1.w * 0.3);
    col = mix(col, col * vec3(0.85, 0.74, 0.6), f1.z * 0.52);
    col += EDGE * f1.y * 0.4;
    vec4 f2 = form(p, 0.32, -0.12, 0.1, 1.25, 6.2, 0.045, 0.007, 0.13, 0.8, 0.018);
    col = mix(col, IVORY, f2.x * 0.36 + f2.w * 0.2);
    col += EDGE * f2.y * 0.26;
    edges = m1.y * 0.25 + m2.y * 0.35 + f1.y + f2.y * 0.7 + (m1.w + f1.w) * 0.12;
    return col;
  }

  // Contact waves as a pressure wave travelling through the invisible
  // surface: a height field (a leading crest with its trough and a softer
  // echo), lit by the orb above the contact and bending the world's
  // reflection. Seen in perspective (the surface is flattened by TILT).
  const float TILT = 0.2;
  float packet(float r, float R, float w, float f) {
    float x = r - R;
    return exp(-(x * x) / (w * w)) * cos(x * f);
  }
  float waveHeight(float r, vec4 im, float d) {
    float a = im.z, energy = im.w;
    float amp = energy * smoothstep(0.0, 0.05, a);
    // One sculptural crest; a weaker contact travels less far and dies sooner.
    float reach = 0.55 + 0.45 * energy;
    float R1 = d * 0.4 + d * 2.7 * reach * (1.0 - exp(-a / 0.8));
    float L1 = d * (0.5 + 0.24 * a) * (0.8 + 0.2 * energy);
    float h = packet(r, R1, L1 * 0.5, 6.2831 / L1) * exp(-a / (0.6 + 0.5 * energy));
    // A very faint echo behind it.
    float a2 = a - 0.2;
    if (a2 > 0.0) {
      float R2 = d * 0.4 + d * 1.5 * reach * (1.0 - exp(-a2 / 0.7));
      h += 0.3 * packet(r, R2, d * 0.2, 6.2831 / (d * 0.42)) * exp(-a2 / 0.6);
    }
    // The surface compresses under the contact, then recovers.
    h -= 0.9 * exp(-pow(r / (d * 0.5), 2.0)) * exp(-a / 0.16);
    // Energy spreads as the ring grows.
    return amp * h * sqrt(d / (r + d * 0.6));
  }
  // Returns (light, slope along x, slope along z) for one impact.
  vec3 ripple(vec2 px, vec4 im, float d) {
    if (im.z < 0.0 || im.z > 3.5 || im.w <= 0.0) return vec3(0.0);
    vec2 q = vec2(px.x - im.x, (im.y - px.y) / TILT);   // surface plane, +z toward the viewer
    float r0 = length(q);
    if (r0 > d * 6.0) return vec3(0.0);
    // Never a perfect circle: the medium is slightly uneven.
    float th = atan(q.y, q.x);
    float r = r0 * (1.0 + 0.04 * sin(3.0 * th + 1.3 + im.w) + 0.025 * sin(5.0 * th - 0.7));
    float e = max(1.5, d * 0.012);
    // Normalised slope (\u2248 -1..1 at a strong crest).
    float slope = (waveHeight(r + e, im, d) - waveHeight(r - e, im, d)) / (2.0 * e) * d * 0.055;
    float hh = waveHeight(r, im, d);
    vec2 dir = q / max(r0, 1e-3);
    float toward = 0.5 + 0.5 * dir.y;                    // the near side catches more light
    // Faces turned to the source (inner faces of the crests) take its light;
    // a little body light on the raised water; brightest toward the viewer.
    // The energy is not even around the ring: the medium is not uniform.
    float uneven = 1.0 + 0.3 * sin(2.0 * th + 1.0 + im.w * 2.0) + 0.18 * sin(3.0 * th - 0.4);
    float lit = (max(0.0, slope) * (0.35 + 0.65 * toward * toward) + max(0.0, hh) * 0.25) * uneven;
    lit *= exp(-r / (d * 3.2)) * 1.6;
    return vec3(lit, slope * dir.x, slope * dir.y);
  }

  // The same contact as a pressure pulse through the whole luminous medium:
  // broad, slow and faint \u2014 the forms flex and catch a little more light as
  // it passes, then return. Strength also sets its reach.
  float worldPulse(vec2 px, vec4 im, float d) {
    if (im.z < 0.0 || im.z > 3.0 || im.w <= 0.0) return 0.0;
    float dist = length(px - im.xy);
    float reach = 0.55 + 0.45 * im.w;
    float R = d * 0.5 + d * 8.0 * reach * (1.0 - exp(-im.z / 1.1));
    float w = d * (1.0 + 1.1 * im.z) * reach;
    return im.w * exp(-pow((dist - R) / w, 2.0)) * exp(-im.z / (0.7 + 0.4 * im.w)) * smoothstep(0.0, 0.1, im.z);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = resolution.x / resolution.y;
    vec2 p = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);
    vec2 px = uv * resolution;
    float h = horizon - 0.5;
    vec3 rip = ripple(px, impactA, impactScale) + ripple(px, impactB, impactScale);
    float pulse = worldPulse(px, impactA, impactScale) + worldPulse(px, impactB, impactScale);
    // The forms are gently lifted where the pulse passes.
    p.y -= pulse * 0.011;
    // The waves bend what the surface reflects.
    p += vec2(rip.y, -rip.z * TILT) * 0.006;
    vec3 col, source;
    float line = 0.0, below = 0.0, depthBelow = 0.0;
    if (p.y >= h) {
      col = field(p);
      source = col;
    } else {
      // The optical contact plane: a softened, compressed reflection of the
      // forms over warm sand, with long faint horizontal light.
      depthBelow = h - p.y;
      below = 1.0;
      source = field(vec2(p.x, h + depthBelow * 1.7));
      col = mix(source, SAND, 0.42 + depthBelow * 0.8);
      edges *= exp(-depthBelow * 7.0);
      col = mix(col, DUNE, smoothstep(0.05, 0.3, depthBelow) * 0.35);
      float streak = pow(0.5 + 0.5 * sin(p.y * 380.0 + sin(p.x * 2.6 + time * 0.2) * 2.0), 20.0);
      col += EDGE * streak * 0.035 * exp(-depthBelow * 6.0);
      line = exp(-depthBelow * 26.0);
    }
    edges *= 1.0 + 1.5 * pulse;              // their lit edges brighten briefly
    vec3 lit = mix(col, IVORY, 0.22 * line);

    // Local exposure is the light this point receives from the orb: power
    // over (1 + distance\xB2) \u2014 what is near the source is lit first, distant
    // forms later, never a rim or a window. 'exposure' only settles the end.
    vec2 toLight = (px - reveal.xy) / max(reveal.z, 1.0);
    float received = reveal.w / (1.0 + dot(toLight, toLight));
    float e = clamp(exposure + 1.0 - exp(-received), 0.0, 1.0);

    // The orb's light in the illuminated world: golden aura, warm sand around
    // its base, a hot contact line and its reflection.
    if (orb.z > 0.0) {
      vec2 o = orb.xy / resolution.y;
      vec2 q = vec2(uv.x * aspect, uv.y) - o;
      float r = orb.z / resolution.y;
      float baseY = o.y - r * 0.5;
      float ground = exp(-abs(q.x) / (r * 3.2)) * exp(-abs(uv.y - baseY) / (r * 0.9));
      lit = mix(lit, lit * vec3(0.86, 0.75, 0.6), ground * 0.4);
      vec2 qb = q - vec2(0.0, -r * 0.32);
      float aura = exp(-length(qb * vec2(0.75, 1.4)) / (r * 0.95));
      lit = mix(lit, vec3(0.95, 0.73, 0.43), aura * 0.3);
      lit += CHAMPAGNE * aura * aura * 0.18;
      float contact = exp(-abs(uv.y - baseY) / (r * 0.03)) * exp(-abs(q.x) / (r * 2.2));
      lit += CHAMPAGNE * contact * 0.45;
      float reflection = exp(-abs(q.x) / (r * 0.16)) * smoothstep(baseY, baseY - r * 0.05, uv.y) * exp(-(baseY - uv.y) / (r * 1.4));
      lit = mix(lit, vec3(0.97, 0.8, 0.54), reflection * 0.5);
    }
    float vig = smoothstep(1.3, 0.3, length((uv - 0.5) * vec2(1.15, 1.0)));
    lit = mix(lit * vec3(0.86, 0.8, 0.72), lit, vig);
    lit = min(lit, vec3(0.99, 0.975, 0.95));

    // Night: the same structure with almost all illumination removed. The
    // forms' bodies survive as barely different brown-blacks; only their
    // edges keep a trace of ivory. No horizon line is drawn in the dark.
    // Night reads the unmixed mirrored field below the horizon, so the dark
    // world is continuous across it: the surface is never drawn, only darker
    // with distance.
    float lum = dot(source, vec3(0.3, 0.55, 0.15));
    vec3 night = mix(NIGHT_LOW, NIGHT_HIGH, smoothstep(0.68, 0.98, lum));
    night *= 1.0 - 0.3 * smoothstep(0.0, 0.32, depthBelow);
    night *= 0.8 + 0.35 * fbm(p * 1.8 + vec2(time * 0.012, -time * 0.008));   // slow smoke
    float fade = 1.0 - 0.6 * smoothstep(0.0, 0.2, depthBelow);
    night += NIGHT_EDGE * edges * 0.038 * fade;
    // The orb lights what is near it: the forms there are exposed a little.
    vec2 fromLamp = (px - lamp.xy) / max(lamp.z, 1.0);
    float near = exp(-dot(fromLamp, fromLamp)) * lamp.w;
    night += (source * vec3(1.0, 0.82, 0.6) * 0.055 + NIGHT_EDGE * edges * 0.085) * near * fade;
    night = mix(night * 0.55, night, vig);
    // What the orb's light reaches becomes visible; beyond it, only a faint
    // ambient memory of the world (nightGain) \u2014 never a global switch.
    vec2 toLamp = (px - lamp.xy) / max(lamp.z, 1.0);
    float lampLit = 1.0 - exp(-lamp.w * 1.4 / (1.0 + dot(toLamp, toLamp) * 1.4));
    night *= mix(nightGain, 1.0, lampLit);
    // The orb's light on the moving surface: champagne on the crests.
    night += vec3(1.0, 0.8, 0.52) * rip.x * 0.4 * (0.4 + 0.6 * nightGain);

    // Exposure: night \u2192 amber mid-tones \u2192 the illuminated world.
    vec3 outCol = mix(night, lit, e * e * (3.0 - 2.0 * e));
    outCol *= mix(vec3(1.0), vec3(1.0, 0.9, 0.76), 4.0 * e * (1.0 - e) * 0.5);
    outCol += (hash(uv * resolution + time) - 0.5) * mix(0.004, 0.008, e);
    outCol = mix(outCol, vec3(dot(outCol, vec3(0.2126, 0.7152, 0.0722))), mono);
    gl_FragColor = vec4(outCol, 1.0);
    #include <colorspace_fragment>
  }
`;function To(r){let l=new Je({canvas:r,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});l.outputColorSpace=Tt;let g=new Re,s=new Ze(-1,1,1,-1,0,1),i={resolution:{value:new pe(1,1)},time:{value:0},pointer:{value:new pe},horizon:{value:.2},orb:{value:new K},exposure:{value:0},reveal:{value:new We},lamp:{value:new We},nightGain:{value:1},impactA:{value:new We(0,0,-1,0)},impactB:{value:new We(0,0,-1,0)},impactScale:{value:100},mono:{value:0}},m=new Ve({uniforms:i,fragmentShader:eo,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",depthTest:!1,depthWrite:!1}),d=new ie(new Se(2,2),m);g.add(d);let E=new pe,x=1,o=1,D=1,W=1,O=1.5,f=26e5;function U(){D=Math.min(W||1,O,Math.sqrt(f/(x*o))),l.setPixelRatio(D),l.setSize(x,o,!1),i.resolution.value.set(x,o)}return{canvas:r,get ratio(){return D},resize(p,M,v){x=p,o=M,W=v,U()},setMaxRatio(p){p!==O&&(O=p,U())},setPointer(p,M){E.set(p,M)},setHorizon(p){i.horizon.value=p},setMono(p){i.mono.value=p?1:0},setOrb(p,M,v){i.orb.value.set(p,o-M,v)},setExposure(p){i.exposure.value=p},setReveal(p,M,v,I){i.reveal.value.set(p,o-M,v,I)},setNightGain(p){i.nightGain.value=p},setImpact(p,M,v,I,L,b){(p?i.impactB:i.impactA).value.set(M,o-v,I,L),i.impactScale.value=b},setLamp(p,M,v,I){i.lamp.value.set(p,o-M,v,I)},render(p){i.time.value=p,i.pointer.value.lerp(E,.04),l.render(g,s)},dispose(){d.geometry.dispose(),m.dispose(),l.dispose()}}}var Ft="lightorb:audio";var ct={rev:2,master:!0,guide:!0,sfx:!0,gain:.8,sfxGain:.5,volume:.8},je=r=>!!(r.master&&r.guide),Ye=r=>!!(r.master&&r.sfx);function to(r,l={},g=ct){let s={...g,...r&&typeof r=="object"?r:{}};return r?.rev!==2&&((l.off||r?.master===!1)&&(s.guide=!1,s.sfx=!1),s.rev=2),r?.rev===2&&r.master===!1&&(s.guide=s.sfx=!1),s.guide=s.guide!==!1,s.sfx=s.sfx!==!1,s.master=s.guide||s.sfx,s}function oo(r,l,g){let s=l==="voice"?!!g:je(r),i=l==="sfx"?!!g:Ye(r);return{guide:s,sfx:i,master:s||i}}function ro(r){try{return{off:r.getItem("lo:sound:off")==="1"||r.getItem("lightorb:sound")==="off"}}catch{return{}}}function ao(r,l=ct){let g=null;try{g=JSON.parse(r?.getItem(Ft)||"null")}catch{g=null}let s=to(g,r?ro(r):{},{...ct,...l}),i=new Set,m=()=>{try{r?.setItem(Ft,JSON.stringify(s)),s.master?r?.removeItem("lo:sound:off"):r?.setItem("lo:sound:off","1"),r?.setItem("lightorb:sound",s.sfx&&s.master?"on":"off")}catch{}};return m(),{prefs:s,get voice(){return je(s)},get sounds(){return Ye(s)},set(d){let E={voice:je(s),sounds:Ye(s)};Object.assign(s,d),d.master===!1&&(s.guide=s.sfx=!1),"guide"in d||"sfx"in d||d.master===!1?s.master=!!(s.guide||s.sfx):d.master===!0&&!s.guide&&!s.sfx&&(s.guide=s.sfx=!0),m(),i.forEach(x=>x(s,E))},toggle(d,E){this.set(oo(s,d,E))},on(d){return i.add(d),()=>i.delete(d)}}}function Mo(r){let l=globalThis;if(l.__lightorbPrefs){if(r)for(let[g,s]of Object.entries(r))g in l.__lightorbPrefs.prefs||(l.__lightorbPrefs.prefs[g]=s)}else{let g=null;try{g=l.localStorage}catch{}l.__lightorbPrefs=ao(g,r)}return l.__lightorbPrefs}function So(){let r=null,l=[];return{begin(){return r={},r},live(g){return!!g&&g===r},enqueue(g){l.push(g)},next(){let g=l.shift();return g?.(),!!g},get pending(){return l.length},get active(){return r!==null},cancel(){r=null,l.length=0}}}var jt={on:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',off:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>'},no=`
.sndc{--snd-ink:#262827;--snd-muted:rgba(38,40,39,.55);--snd-glass-top:rgba(255,255,255,.78);--snd-glass-bot:rgba(236,238,235,.5);
  --snd-edge:rgba(38,40,39,.1);--snd-hi:#fff;--snd-shadow:rgba(38,40,39,.35);--snd-pane:rgba(255,255,255,.66);
  --snd-track:rgba(38,40,39,.14);--snd-on:#262827;--snd-knob:#fff;--snd-focus:#262827;
  position:relative;display:inline-flex}
.sndc-intro{--snd-ink:rgba(236,237,234,.82);--snd-muted:rgba(214,214,212,.42);--snd-glass-top:rgba(255,255,255,.11);--snd-glass-bot:rgba(255,255,255,.025);
  --snd-edge:rgba(255,255,255,.1);--snd-hi:rgba(255,255,255,.22);--snd-shadow:rgba(0,0,0,.6);--snd-pane:rgba(24,26,25,.66);
  --snd-track:rgba(255,255,255,.14);--snd-on:rgba(236,238,235,.86);--snd-knob:#1b1d1c;--snd-focus:rgba(236,238,235,.7)}
.complete .sndc-intro{--snd-ink:rgba(18,18,18,.5);--snd-muted:rgba(18,18,18,.42);--snd-glass-top:rgba(255,255,255,.6);--snd-glass-bot:rgba(255,255,255,.25);
  --snd-edge:rgba(18,18,18,.08);--snd-hi:#fff;--snd-shadow:rgba(38,40,39,.3);--snd-pane:rgba(255,255,255,.7);
  --snd-track:rgba(18,18,18,.14);--snd-on:#262827;--snd-knob:#fff;--snd-focus:#262827}
.lo-on .sndc-intro{display:none}
.sndc-intro .sndc-b{width:40px;height:40px;opacity:.72;border-radius:50%;border:0;padding:0;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;
  color:var(--snd-ink);background:linear-gradient(180deg,var(--snd-glass-top),var(--snd-glass-bot));
  box-shadow:inset 0 1px 1px var(--snd-hi),inset 0 0 0 1px var(--snd-edge),0 10px 24px -14px var(--snd-shadow);
  -webkit-backdrop-filter:blur(12px) saturate(1.2);backdrop-filter:blur(12px) saturate(1.2);transition:color .3s ease,transform .15s ease}
.sndc-intro .sndc-b:hover{opacity:1}.sndc-intro .sndc-b:active{transform:translateY(1px) scale(.97)}
.sndc-b svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.sndc-b:focus-visible,.sndc-t:focus-visible{outline:2px solid var(--snd-focus);outline-offset:3px}
.sndc-p{position:absolute;z-index:30;top:calc(100% + 10px);right:0;min-width:178px;padding:8px;display:grid;gap:4px;border-radius:18px;
  background:var(--snd-pane);color:var(--snd-ink);-webkit-backdrop-filter:blur(18px) saturate(1.1);backdrop-filter:blur(18px) saturate(1.1);
  box-shadow:inset 0 1px 0 var(--snd-hi),0 0 0 1px var(--snd-edge),0 24px 50px -28px var(--snd-shadow)}
.sndc-p[hidden]{display:none}
.sndc-up .sndc-p{top:auto;bottom:calc(100% + 10px);right:auto;left:0}
.sndc-t{display:flex;align-items:center;justify-content:space-between;gap:14px;width:100%;min-height:40px;padding:0 10px 0 14px;border:0;border-radius:12px;
  background:transparent;color:var(--snd-ink);font:inherit;font-size:13px;letter-spacing:.01em;cursor:pointer;text-align:left}
.sndc-t:hover{background:var(--snd-track)}
.sndc-sw{position:relative;width:30px;height:18px;border-radius:999px;background:var(--snd-track);flex:none;transition:background .2s ease}
.sndc-sw::after{content:"";position:absolute;left:2px;top:2px;width:14px;height:14px;border-radius:50%;background:var(--snd-knob);
  box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .2s ease}
.sndc-t[aria-pressed=true] .sndc-sw{background:var(--snd-on)}
.sndc-t[aria-pressed=true] .sndc-sw::after{transform:translateX(12px)}
.sndc-t[aria-pressed=false] span{color:var(--snd-muted)}
@media (prefers-reduced-motion:reduce){.sndc-sw,.sndc-sw::after,.sndc-b{transition:none}}
`,Yt=!1,so=()=>{if(Yt||typeof document>"u")return;Yt=!0;let r=document.createElement("style");r.textContent=no,document.head.append(r)};function Ho(r,l,{buttonClass:g="",variant:s="site",up:i=!1,onToggle:m}={}){so();let d=`sndc-${Math.random().toString(36).slice(2,8)}`,E=document.createElement("div");E.className=`sndc sndc-${s}${i?" sndc-up":""}`,E.innerHTML=`<button class="sndc-b ${g}" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="${d}" data-sound></button>
    <div class="sndc-p" id="${d}" role="group" aria-label="Sound settings" hidden>
      <button class="sndc-t" type="button" data-k="voice" aria-pressed="true"><span>Voice</span><i class="sndc-sw" aria-hidden="true"></i></button>
      <button class="sndc-t" type="button" data-k="sfx" aria-pressed="true"><span>Sounds</span><i class="sndc-sw" aria-hidden="true"></i></button>
    </div>`,r.append(E);let x=E.querySelector(".sndc-b"),o=E.querySelector(".sndc-p"),[D,W]=o.querySelectorAll(".sndc-t");function O(){let v=l.prefs,I=je(v),L=Ye(v);D.setAttribute("aria-pressed",String(I)),W.setAttribute("aria-pressed",String(L));let b=I||L,S=I&&L?"on":b?I?"voice only":"sounds only":"off";x.dataset.on!==String(b)&&(x.dataset.on=String(b),x.innerHTML=b?jt.on:jt.off),x.setAttribute("aria-label",`Sound settings (${S})`),x.title=`Sound: ${S}`}let f=()=>!o.hidden;function U(v,{focus:I=!1}={}){o.hidden=!v,x.setAttribute("aria-expanded",String(v)),v&&I&&D.focus()}x.addEventListener("click",v=>{v.stopPropagation(),U(!f(),{focus:v.detail===0})});for(let v of[D,W])v.addEventListener("click",I=>{I.stopPropagation();let L=v.dataset.k,b=v.getAttribute("aria-pressed")!=="true";l.toggle(L,b),m?.(L,b)});E.addEventListener("pointerdown",v=>v.stopPropagation()),E.addEventListener("keydown",v=>{(v.code==="Space"||v.key==="Enter")&&v.stopPropagation(),v.key==="Escape"&&f()&&(v.stopPropagation(),v.preventDefault(),U(!1),x.focus())});let p=v=>{f()&&!E.contains(v.target)&&U(!1)};document.addEventListener("pointerdown",p,!0);let M=l.on(O);return O(),{root:E,glyph:x,render:O,close:()=>U(!1),dispose(){M(),document.removeEventListener("pointerdown",p,!0),E.remove()}}}export{Oe as a,wo as b,To as c,Ye as d,Mo as e,So as f,Ho as g};
