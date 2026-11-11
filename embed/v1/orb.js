var oc=0,Na=1,ac=2;var Is=1,lc=2,Gi=3,Jn=0,zt=1,It=2,Mn=0,Wi=1,Ps=2,Ua=3,Fa=4,cc=5;var hi=100,hc=101,uc=102,dc=103,fc=104,pc=200,mc=201,gc=202,xc=203,Oa=204,Ba=205,_c=206,vc=207,yc=208,bc=209,Sc=210,Mc=211,wc=212,Ec=213,Tc=214,br=0,Sr=1,Mr=2,Di=3,wr=4,Er=5,Tr=6,Ar=7,za=0,Ac=1,Cc=2,Jt=0,ka=1,Va=2,Ha=3,Ga=4,Wa=5,Xa=6,qa=7;var Ya=300,$n=301,ui=302,Qr=303,eo=304,Ls=306,Ni=1e3,gn=1001,Cr=1002,At=1003,Rc=1004;var Ds=1005;var Rt=1006,to=1007;var Kn=1008;var Vt=1009,Za=1010,Ja=1011,Xi=1012,no=1013,un=1014,tn=1015,$t=1016,io=1017,so=1018,qi=1020,$a=35902,Ka=35899,ja=1021,Qa=1022,nn=1023,xn=1026,jn=1027,ro=1028,oo=1029,Qn=1030,ao=1031;var lo=1033,Ns=33776,Us=33777,Fs=33778,Os=33779,co=35840,ho=35841,uo=35842,fo=35843,po=36196,mo=37492,go=37496,xo=37488,_o=37489,Bs=37490,vo=37491,yo=37808,bo=37809,So=37810,Mo=37811,wo=37812,Eo=37813,To=37814,Ao=37815,Co=37816,Ro=37817,Io=37818,Po=37819,Lo=37820,Do=37821,No=36492,Uo=36494,Fo=36495,Oo=36283,Bo=36284,zs=36285,zo=36286;var us=2300,Rr=2301,vr=2302,Aa=2303,Ca=2400,Ra=2401,Ia=2402;var Ic=3200;var ko=0,Pc=1,dn="",vt="srgb",ds="srgb-linear",fs="linear",it="srgb";var yr=7680;var Lc=519,Dc=512,Nc=513,Uc=514,Vo=515,Fc=516,Oc=517,Ho=518,Bc=519,zc=35044,Go=35048;var el="300 es",ln=2e3,Ui=2001;function nu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function iu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kc(){let i=ps("canvas");return i.style.display="block",i}var Ol={},Fi=null;function tl(...i){let e="THREE."+i.shift();Fi?Fi("log",e,...i):console.log(e,...i)}function Vc(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=Vc(i);let e="THREE."+i.shift();if(Fi)Fi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function He(...i){i=Vc(i);let e="THREE."+i.shift();if(Fi)Fi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function li(...i){let e=i.join(" ");e in Ol||(Ol[e]=!0,ke(...i))}function Hc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Gc={[br]:Sr,[Mr]:Tr,[wr]:Ar,[Di]:Er,[Sr]:br,[Tr]:Mr,[Ar]:wr,[Er]:Di},_n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var sa=Math.PI/180,Ir=180/Math.PI;function ks(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function su(i,e){return(i%e+e)%e}function ra(i,e,t){return(1-t)*i+t*e}function ss(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ge=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let c=n[s+0],a=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],p=r[o+1],_=r[o+2],b=r[o+3];if(d!==b||c!==u||a!==p||h!==_){let m=c*u+a*p+h*_+d*b;m<0&&(u=-u,p=-p,_=-_,b=-b,m=-m);let f=1-l;if(m<.9995){let S=Math.acos(m),R=Math.sin(S);f=Math.sin(f*S)/R,l=Math.sin(l*S)/R,c=c*f+u*l,a=a*f+p*l,h=h*f+_*l,d=d*f+b*l}else{c=c*f+u*l,a=a*f+p*l,h=h*f+_*l,d=d*f+b*l;let S=1/Math.sqrt(c*c+a*a+h*h+d*d);c*=S,a*=S,h*=S,d*=S}}e[t]=c,e[t+1]=a,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let l=n[s],c=n[s+1],a=n[s+2],h=n[s+3],d=r[o],u=r[o+1],p=r[o+2],_=r[o+3];return e[t]=l*_+h*d+c*p-a*u,e[t+1]=c*_+h*u+a*d-l*p,e[t+2]=a*_+h*p+l*u-c*d,e[t+3]=h*_-l*d-c*u-a*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,c=Math.sin,a=l(n/2),h=l(s/2),d=l(r/2),u=c(n/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=u*h*d+a*p*_,this._y=a*p*d-u*h*_,this._z=a*h*_+u*p*d,this._w=a*h*d-u*p*_;break;case"YXZ":this._x=u*h*d+a*p*_,this._y=a*p*d-u*h*_,this._z=a*h*_-u*p*d,this._w=a*h*d+u*p*_;break;case"ZXY":this._x=u*h*d-a*p*_,this._y=a*p*d+u*h*_,this._z=a*h*_+u*p*d,this._w=a*h*d-u*p*_;break;case"ZYX":this._x=u*h*d-a*p*_,this._y=a*p*d+u*h*_,this._z=a*h*_-u*p*d,this._w=a*h*d+u*p*_;break;case"YZX":this._x=u*h*d+a*p*_,this._y=a*p*d+u*h*_,this._z=a*h*_-u*p*d,this._w=a*h*d-u*p*_;break;case"XZY":this._x=u*h*d-a*p*_,this._y=a*p*d-u*h*_,this._z=a*h*_+u*p*d,this._w=a*h*d+u*p*_;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],c=t[9],a=t[2],h=t[6],d=t[10],u=n+l+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-a)*p,this._z=(o-s)*p}else if(n>l&&n>d){let p=2*Math.sqrt(1+n-l-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+a)/p}else if(l>d){let p=2*Math.sqrt(1+l-n-d);this._w=(r-a)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-l);this._w=(o-s)/p,this._x=(r+a)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,c=t._y,a=t._z,h=t._w;return this._x=n*h+o*l+s*a-r*c,this._y=s*h+o*c+r*l-n*a,this._z=r*h+o*a+n*c-s*l,this._w=o*h-n*l-s*c-r*a,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let c=1-t;if(l<.9995){let a=Math.acos(l),h=Math.sin(a);c=Math.sin(c*a)/h,t=Math.sin(t*a)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,c=e.w,a=2*(o*s-l*n),h=2*(l*t-r*s),d=2*(r*n-o*t);return this.x=t+c*a+o*d-l*h,this.y=n+c*h+l*a-r*d,this.z=s+c*d+r*h-o*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*o-n*c,this.z=n*l-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oa=new B,Bl=new Qt,We=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,l,c,a){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,a)}set(e,t,n,s,r,o,l,c,a){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],c=n[6],a=n[1],h=n[4],d=n[7],u=n[2],p=n[5],_=n[8],b=s[0],m=s[3],f=s[6],S=s[1],R=s[4],v=s[7],M=s[2],w=s[5],C=s[8];return r[0]=o*b+l*S+c*M,r[3]=o*m+l*R+c*w,r[6]=o*f+l*v+c*C,r[1]=a*b+h*S+d*M,r[4]=a*m+h*R+d*w,r[7]=a*f+h*v+d*C,r[2]=u*b+p*S+_*M,r[5]=u*m+p*R+_*w,r[8]=u*f+p*v+_*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8];return t*o*h-t*l*a-n*r*h+n*l*c+s*r*a-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8],d=h*o-l*a,u=l*c-h*r,p=a*r-o*c,_=t*d+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return e[0]=d*b,e[1]=(s*a-h*n)*b,e[2]=(l*n-s*o)*b,e[3]=u*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-l*t)*b,e[6]=p*b,e[7]=(n*c-a*t)*b,e[8]=(o*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){let c=Math.cos(r),a=Math.sin(r);return this.set(n*c,n*a,-n*(c*o+a*l)+o+e,-s*a,s*c,-s*(-a*o+c*l)+l+t,0,0,1),this}scale(e,t){return li("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(aa.makeScale(e,t)),this}rotate(e){return li("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return li("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},aa=new We,zl=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kl=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ru(){let i={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===it&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===dn?fs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return li("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return li("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ds]:{primaries:e,whitePoint:n,transfer:fs,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),i}var $e=ru();function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _i,Pr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_i===void 0&&(_i=ps("canvas")),_i.width=e.width,_i.height=e.height;let s=_i.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=_i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ps("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ln(t[n]/255)*255):t[n]=Ln(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ou=0,Oi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(la(s[o].image)):r.push(la(s[o]))}else r=la(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function la(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var au=0,ca=new B,Ot=class i extends _n{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=gn,s=gn,r=Rt,o=Kn,l=nn,c=Vt,a=i.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=ks(),this.name="",this.source=new Oi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ya)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case Cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case Cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Ya;Ot.DEFAULT_ANISOTROPY=1;var pt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,a=c[0],h=c[4],d=c[8],u=c[1],p=c[5],_=c[9],b=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-b)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+b)<.1&&Math.abs(_+m)<.1&&Math.abs(a+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(a+1)/2,v=(p+1)/2,M=(f+1)/2,w=(h+u)/4,C=(d+b)/4,x=(_+m)/4;return R>v&&R>M?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=w/n,r=C/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=x/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=C/r,s=x/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-_)*(m-_)+(d-b)*(d-b)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(d-b)/S,this.z=(u-h)/S,this.w=Math.acos((a+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lr=class extends _n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Ot(s),o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Oi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nt=class extends Lr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ms=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dr=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ot=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,l,c,a,h,d,u,p,_,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,a,h,d,u,p,_,b,m)}set(e,t,n,s,r,o,l,c,a,h,d,u,p,_,b,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=l,f[13]=c,f[2]=a,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),o=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(s),a=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*d,_=l*h,b=l*d;t[0]=c*h,t[4]=-c*d,t[8]=a,t[1]=p+_*a,t[5]=u-b*a,t[9]=-l*c,t[2]=b-u*a,t[6]=_+p*a,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,p=c*d,_=a*h,b=a*d;t[0]=u+b*l,t[4]=_*l-p,t[8]=o*a,t[1]=o*d,t[5]=o*h,t[9]=-l,t[2]=p*l-_,t[6]=b+u*l,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,p=c*d,_=a*h,b=a*d;t[0]=u-b*l,t[4]=-o*d,t[8]=_+p*l,t[1]=p+_*l,t[5]=o*h,t[9]=b-u*l,t[2]=-o*a,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,p=o*d,_=l*h,b=l*d;t[0]=c*h,t[4]=_*a-p,t[8]=u*a+b,t[1]=c*d,t[5]=b*a+u,t[9]=p*a-_,t[2]=-a,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,p=o*a,_=l*c,b=l*a;t[0]=c*h,t[4]=b-u*d,t[8]=_*d+p,t[1]=d,t[5]=o*h,t[9]=-l*h,t[2]=-a*h,t[6]=p*d+_,t[10]=u-b*d}else if(e.order==="XZY"){let u=o*c,p=o*a,_=l*c,b=l*a;t[0]=c*h,t[4]=-d,t[8]=a*h,t[1]=u*d+b,t[5]=o*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=l*h,t[10]=b*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lu,e,cu)}lookAt(e,t,n){let s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),On.crossVectors(n,Ht),On.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),On.crossVectors(n,Ht)),On.normalize(),Qs.crossVectors(Ht,On),s[0]=On.x,s[4]=Qs.x,s[8]=Ht.x,s[1]=On.y,s[5]=Qs.y,s[9]=Ht.y,s[2]=On.z,s[6]=Qs.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],c=n[8],a=n[12],h=n[1],d=n[5],u=n[9],p=n[13],_=n[2],b=n[6],m=n[10],f=n[14],S=n[3],R=n[7],v=n[11],M=n[15],w=s[0],C=s[4],x=s[8],E=s[12],I=s[1],F=s[5],k=s[9],Y=s[13],O=s[2],G=s[6],ee=s[10],K=s[14],oe=s[3],Z=s[7],ie=s[11],V=s[15];return r[0]=o*w+l*I+c*O+a*oe,r[4]=o*C+l*F+c*G+a*Z,r[8]=o*x+l*k+c*ee+a*ie,r[12]=o*E+l*Y+c*K+a*V,r[1]=h*w+d*I+u*O+p*oe,r[5]=h*C+d*F+u*G+p*Z,r[9]=h*x+d*k+u*ee+p*ie,r[13]=h*E+d*Y+u*K+p*V,r[2]=_*w+b*I+m*O+f*oe,r[6]=_*C+b*F+m*G+f*Z,r[10]=_*x+b*k+m*ee+f*ie,r[14]=_*E+b*Y+m*K+f*V,r[3]=S*w+R*I+v*O+M*oe,r[7]=S*C+R*F+v*G+M*Z,r[11]=S*x+R*k+v*ee+M*ie,r[15]=S*E+R*Y+v*K+M*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],c=e[9],a=e[13],h=e[2],d=e[6],u=e[10],p=e[14],_=e[3],b=e[7],m=e[11],f=e[15],S=c*p-a*u,R=l*p-a*d,v=l*u-c*d,M=o*p-a*h,w=o*u-c*h,C=o*d-l*h;return t*(b*S-m*R+f*v)-n*(_*S-m*M+f*w)+s*(_*R-b*M+f*C)-r*(_*v-b*w+m*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],a=e[6],h=e[10];return t*(o*h-l*a)-n*(r*h-l*c)+s*(r*a-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],h=e[8],d=e[9],u=e[10],p=e[11],_=e[12],b=e[13],m=e[14],f=e[15],S=t*l-n*o,R=t*c-s*o,v=t*a-r*o,M=n*c-s*l,w=n*a-r*l,C=s*a-r*c,x=h*b-d*_,E=h*m-u*_,I=h*f-p*_,F=d*m-u*b,k=d*f-p*b,Y=u*f-p*m,O=S*Y-R*k+v*F+M*I-w*E+C*x;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/O;return e[0]=(l*Y-c*k+a*F)*G,e[1]=(s*k-n*Y-r*F)*G,e[2]=(b*C-m*w+f*M)*G,e[3]=(u*w-d*C-p*M)*G,e[4]=(c*I-o*Y-a*E)*G,e[5]=(t*Y-s*I+r*E)*G,e[6]=(m*v-_*C-f*R)*G,e[7]=(h*C-u*v+p*R)*G,e[8]=(o*k-l*I+a*x)*G,e[9]=(n*I-t*k-r*x)*G,e[10]=(_*w-b*v+f*S)*G,e[11]=(d*v-h*w-p*S)*G,e[12]=(l*E-o*F-c*x)*G,e[13]=(t*F-n*E+s*x)*G,e[14]=(b*R-_*M-m*S)*G,e[15]=(h*M-d*R+u*S)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,c=e.z,a=r*o,h=r*l;return this.set(a*o+n,a*l-s*c,a*c+s*l,0,a*l+s*c,h*l+n,h*c-s*o,0,a*c-s*l,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,l=t._z,c=t._w,a=r+r,h=o+o,d=l+l,u=r*a,p=r*h,_=r*d,b=o*h,m=o*d,f=l*d,S=c*a,R=c*h,v=c*d,M=n.x,w=n.y,C=n.z;return s[0]=(1-(b+f))*M,s[1]=(p+v)*M,s[2]=(_-R)*M,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(u+f))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(_+R)*C,s[9]=(m-S)*C,s[10]=(1-(u+b))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=vi.set(s[0],s[1],s[2]).length(),l=vi.set(s[4],s[5],s[6]).length(),c=vi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),rn.copy(this);let a=1/o,h=1/l,d=1/c;return rn.elements[0]*=a,rn.elements[1]*=a,rn.elements[2]*=a,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,t.setFromRotationMatrix(rn),n.x=o,n.y=l,n.z=c,this}makePerspective(e,t,n,s,r,o,l=ln,c=!1){let a=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),_,b;if(c)_=r/(o-r),b=o*r/(o-r);else if(l===ln)_=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(l===Ui)_=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=d,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=_,a[14]=b,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=ln,c=!1){let a=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),_,b;if(c)_=1/(o-r),b=o/(o-r);else if(l===ln)_=-2/(o-r),b=-(o+r)/(o-r);else if(l===Ui)_=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=0,a[12]=u,a[1]=0,a[5]=d,a[9]=0,a[13]=p,a[2]=0,a[6]=0,a[10]=_,a[14]=b,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vi=new B,rn=new ot,lu=new B(0,0,0),cu=new B(1,1,1),On=new B,Qs=new B,Ht=new B,Vl=new ot,Hl=new Qt,cn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],l=s[8],c=s[1],a=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,a),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,a)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,a),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,a),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var gs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hu=0,Gl=new B,yi=new Qt,An=new ot,er=new B,rs=new B,uu=new B,du=new Qt,Wl=new B(1,0,0),Xl=new B(0,1,0),ql=new B(0,0,1),Yl={type:"added"},fu={type:"removed"},bi={type:"childadded",child:null},ha={type:"childremoved",child:null},Bt=class i extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new cn,n=new Qt,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new We}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(Wl,e)}rotateY(e){return this.rotateOnAxis(Xl,e)}rotateZ(e){return this.rotateOnAxis(ql,e)}translateOnAxis(e,t){return Gl.copy(e).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wl,e)}translateY(e){return this.translateOnAxis(Xl,e)}translateZ(e){return this.translateOnAxis(ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?er.copy(e):er.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(rs,er,this.up):An.lookAt(er,rs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(An),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yl),bi.child=e,this.dispatchEvent(bi),bi.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fu),ha.child=e,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yl),bi.child=e,this.dispatchEvent(bi),bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,uu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,du,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let a=0,h=c.length;a<h;a++){let d=c[a];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,a=this.material.length;c<a;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){let l=o(e.geometries),c=o(e.materials),a=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),_=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),a.length>0&&(n.textures=a),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(l){let c=[];for(let a in l){let h=l[a];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bt.DEFAULT_UP=new B(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xt=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},pu={type:"move"},Bi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,l=this._targetRay,c=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){o=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),f=this._getHandJoint(a,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=a.joints["index-finger-tip"],d=a.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,_=.005;a.inputState.pinching&&u>p+_?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&u<=p-_&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(pu)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function ua(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=su(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ua(o,r,e+1/3),this.g=ua(o,r,e),this.b=ua(o,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let n=Wc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return $e.workingToColorSpace(Dt.copy(this),e),Math.round(Ke(Dt.r*255,0,255))*65536+Math.round(Ke(Dt.g*255,0,255))*256+Math.round(Ke(Dt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Dt.copy(this),t);let n=Dt.r,s=Dt.g,r=Dt.b,o=Math.max(n,s,r),l=Math.min(n,s,r),c,a,h=(l+o)/2;if(l===o)c=0,a=0;else{let d=o-l;switch(a=h<=.5?d/(o+l):d/(2-o-l),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=a,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=vt){$e.workingToColorSpace(Dt.copy(this),e);let t=Dt.r,n=Dt.g,s=Dt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(tr);let n=ra(Bn.h,tr.h,t),s=ra(Bn.s,tr.s,t),r=ra(Bn.l,tr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new Ce;Ce.NAMES=Wc;var en=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},on=new B,Cn=new B,da=new B,Rn=new B,Si=new B,Mi=new B,Zl=new B,fa=new B,pa=new B,ma=new B,ga=new pt,xa=new pt,_a=new pt,Hn=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),Cn.subVectors(n,t),da.subVectors(e,t);let o=on.dot(on),l=on.dot(Cn),c=on.dot(da),a=Cn.dot(Cn),h=Cn.dot(da),d=o*a-l*l;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(a*c-l*h)*u,_=(o*h-l*c)*u;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,s,r,o,l,c){return this.getBarycoord(e,t,n,s,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Rn.x),c.addScaledVector(o,Rn.y),c.addScaledVector(l,Rn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ga.setScalar(0),xa.setScalar(0),_a.setScalar(0),ga.fromBufferAttribute(e,t),xa.fromBufferAttribute(e,n),_a.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ga,r.x),o.addScaledVector(xa,r.y),o.addScaledVector(_a,r.z),o}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),Cn.subVectors(e,t),on.cross(Cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),on.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,l;Si.subVectors(s,n),Mi.subVectors(r,n),fa.subVectors(e,n);let c=Si.dot(fa),a=Mi.dot(fa);if(c<=0&&a<=0)return t.copy(n);pa.subVectors(e,s);let h=Si.dot(pa),d=Mi.dot(pa);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*a;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Si,o);ma.subVectors(e,r);let p=Si.dot(ma),_=Mi.dot(ma);if(_>=0&&p<=_)return t.copy(r);let b=p*a-c*_;if(b<=0&&a>=0&&_<=0)return l=a/(a-_),t.copy(n).addScaledVector(Mi,l);let m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return Zl.subVectors(r,s),l=(d-h)/(d-h+(p-_)),t.copy(s).addScaledVector(Zl,l);let f=1/(m+b+u);return o=b*f,l=u*f,t.copy(n).addScaledVector(Si,o).addScaledVector(Mi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),ir.subVectors(this.max,os),wi.subVectors(e.a,os),Ei.subVectors(e.b,os),Ti.subVectors(e.c,os),zn.subVectors(Ei,wi),kn.subVectors(Ti,Ei),si.subVectors(wi,Ti);let t=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-si.z,si.y,zn.z,0,-zn.x,kn.z,0,-kn.x,si.z,0,-si.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-si.y,si.x,0];return!va(t,wi,Ei,Ti,ir)||(t=[1,0,0,0,1,0,0,0,1],!va(t,wi,Ei,Ti,ir))?!1:(sr.crossVectors(zn,kn),t=[sr.x,sr.y,sr.z],va(t,wi,Ei,Ti,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},In=[new B,new B,new B,new B,new B,new B,new B,new B],an=new B,nr=new vn,wi=new B,Ei=new B,Ti=new B,zn=new B,kn=new B,si=new B,os=new B,ir=new B,sr=new B,ri=new B;function va(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ri.fromArray(i,r);let l=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),c=e.dot(ri),a=t.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(c,a,h),Math.min(c,a,h))>l)return!1}return!0}var _t=new B,rr=new Ge,mu=0,qt=class extends _n{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zc,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rr.fromBufferAttribute(this,t),rr.applyMatrix3(e),this.setXY(t,rr.x,rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ss(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var xs=class extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _s=class extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},gu=new vn,as=new B,ya=new B,Gn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);let t=as.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(ya)),this.expandByPoint(as.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xu=0,jt=new ot,ba=new Bt,Ai=new B,Gt=new vn,ls=new vn,Tt=new B,Yt=class i extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nu(e)?_s:xs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];ls.setFromBufferAttribute(l),this.morphTargetsRelative?(Tt.addVectors(Gt.min,ls.min),Gt.expandByPoint(Tt),Tt.addVectors(Gt.max,ls.max),Gt.expandByPoint(Tt)):(Gt.expandByPoint(ls.min),Gt.expandByPoint(ls.max))}Gt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],c=this.morphTargetsRelative;for(let a=0,h=l.count;a<h;a++)Tt.fromBufferAttribute(l,a),c&&(Ai.fromBufferAttribute(e,a),Tt.add(Ai)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],c=[];for(let x=0;x<n.count;x++)l[x]=new B,c[x]=new B;let a=new B,h=new B,d=new B,u=new Ge,p=new Ge,_=new Ge,b=new B,m=new B;function f(x,E,I){a.fromBufferAttribute(n,x),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,x),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,I),h.sub(a),d.sub(a),p.sub(u),_.sub(u);let F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(b.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(F),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(F),l[x].add(b),l[E].add(b),l[I].add(b),c[x].add(m),c[E].add(m),c[I].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,E=S.length;x<E;++x){let I=S[x],F=I.start,k=I.count;for(let Y=F,O=F+k;Y<O;Y+=3)f(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}let R=new B,v=new B,M=new B,w=new B;function C(x){M.fromBufferAttribute(s,x),w.copy(M);let E=l[x];R.copy(E),R.sub(M.multiplyScalar(M.dot(E))).normalize(),v.crossVectors(w,E);let F=v.dot(c[x])<0?-1:1;o.setXYZW(x,R.x,R.y,R.z,F)}for(let x=0,E=S.length;x<E;++x){let I=S[x],F=I.start,k=I.count;for(let Y=F,O=F+k;Y<O;Y+=3)C(e.getX(Y+0)),C(e.getX(Y+1)),C(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new B,r=new B,o=new B,l=new B,c=new B,a=new B,h=new B,d=new B;if(e)for(let u=0,p=e.count;u<p;u+=3){let _=e.getX(u+0),b=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,b),a.fromBufferAttribute(n,m),l.add(h),c.add(h),a.add(h),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,a.x,a.y,a.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(l,c){let a=l.array,h=l.itemSize,d=l.normalized,u=new a.constructor(c.length*h),p=0,_=0;for(let b=0,m=c.length;b<m;b++){l.isInterleavedBufferAttribute?p=c[b]*l.data.stride+l.offset:p=c[b]*h;for(let f=0;f<h;f++)u[_++]=a[p++]}return new qt(u,h,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],a=e(c,n);t.setAttribute(l,a)}let r=this.morphAttributes;for(let l in r){let c=[],a=r[l];for(let h=0,d=a.length;h<d;h++){let u=a[h],p=e(u,n);c.push(p)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,c=o.length;l<c;l++){let a=o[l];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let a in c)c[a]!==void 0&&(e[a]=c[a]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let a=n[c];e.data.attributes[c]=a.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let a=this.morphAttributes[c],h=[];for(let d=0,u=a.length;d<u;d++){let p=a[d];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let a in s){let h=s[a];this.setAttribute(a,h.clone(t))}let r=e.morphAttributes;for(let a in r){let h=[],d=r[a];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[a]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let a=0,h=o.length;a<h;a++){let d=o[a];this.addGroup(d.start,d.count,d.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Sa=new B,_u=new B,vu=new We,Wt=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Sa.subVectors(n,t).cross(_u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Sa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vu.getNormalMatrix(e),s=this.coplanarPoint(Sa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},yu=0,Wn=class extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Wi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ba,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let c=r[l];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Wt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Pn=new B,Ma=new B,or=new B,ar=new B,Nr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ma.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),ar.copy(this.origin).sub(Ma);let r=e.distanceTo(t)*.5,o=-this.direction.dot(or),l=ar.dot(this.direction),c=-ar.dot(or),a=ar.lengthSq(),h=Math.abs(1-o*o),d,u,p,_;if(h>0)if(d=o*c-l,u=o*l-c,_=r*h,d>=0)if(u>=-_)if(u<=_){let b=1/h;d*=b,u*=b,p=d*(d+o*u+2*l)+u*(o*d+u+2*c)+a}else u=r,d=Math.max(0,-(o*u+l)),p=-d*d+u*(u+2*c)+a;else u=-r,d=Math.max(0,-(o*u+l)),p=-d*d+u*(u+2*c)+a;else u<=-_?(d=Math.max(0,-(-o*r+l)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+a):u<=_?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+a):(d=Math.max(0,-(o*r+l)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+a);else u=o>0?-r:r,d=Math.max(0,-(o*u+l)),p=-d*d+u*(u+2*c)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ma).addScaledVector(or,u),p}intersectSphere(e,t){if(e.radius<0)return null;Pn.subVectors(e.center,this.origin);let n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,c,a=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return a>=0?(n=(e.min.x-u.x)*a,s=(e.max.x-u.x)*a):(n=(e.max.x-u.x)*a,s=(e.min.x-u.x)*a),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(l=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(l=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,l=this.direction,c=l.x,a=l.y,h=l.z,d=e.x-o.x,u=e.y-o.y,p=e.z-o.z,_=t.x-o.x,b=t.y-o.y,m=t.z-o.z,f=n.x-o.x,S=n.y-o.y,R=n.z-o.z,v=Math.abs(c),M=Math.abs(a),w=Math.abs(h),C,x,E,I,F,k,Y,O,G,ee,K,oe;if(v>=M&&v>=w?(E=c,k=d,G=_,oe=f,c>=0?(C=a,x=h,I=u,F=p,Y=b,O=m,ee=S,K=R):(C=h,x=a,I=p,F=u,Y=m,O=b,ee=R,K=S)):M>=w?(E=a,k=u,G=b,oe=S,a>=0?(C=h,x=c,I=p,F=d,Y=m,O=_,ee=R,K=f):(C=c,x=h,I=d,F=p,Y=_,O=m,ee=f,K=R)):(E=h,k=p,G=m,oe=R,h>=0?(C=c,x=a,I=d,F=u,Y=_,O=b,ee=f,K=S):(C=a,x=c,I=u,F=d,Y=b,O=_,ee=S,K=f)),E===0)return null;let Z=C/E,ie=x/E,V=1/E,he=I-Z*k,le=F-ie*k,ye=Y-Z*G,Fe=O-ie*G,Le=ee-Z*oe,T=K-ie*oe,N=Le*Fe-T*ye,j=he*T-le*Le,de=ye*le-Fe*he;if(s){if(N<0||j<0||de<0)return null}else if((N<0||j<0||de<0)&&(N>0||j>0||de>0))return null;let ae=N+j+de;if(ae===0)return null;let Ee=V*(N*k+j*G+de*oe);return(ae>0?Ee<0:Ee>0)?null:this.at(Ee/ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dn=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jl=new ot,oi=new Nr,lr=new Gn,$l=new B,cr=new B,hr=new B,ur=new B,wa=new B,dr=new B,Kl=new B,fr=new B,at=class extends Bt{constructor(e=new Yt,t=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){dr.set(0,0,0);for(let c=0,a=r.length;c<a;c++){let h=l[c],d=r[c];h!==0&&(wa.fromBufferAttribute(d,e),o?dr.addScaledVector(wa,h):dr.addScaledVector(wa.sub(t),h))}t.add(dr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),oi.copy(e.ray).recast(e.near),!(lr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(lr,$l)===null||oi.origin.distanceToSquared($l)>(e.far-e.near)**2))&&(Jl.copy(r).invert(),oi.copy(e.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,a=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(l!==null)if(Array.isArray(o))for(let _=0,b=u.length;_<b;_++){let m=u[_],f=o[m.materialIndex],S=Math.max(m.start,p.start),R=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,M=R;v<M;v+=3){let w=l.getX(v),C=l.getX(v+1),x=l.getX(v+2);s=pr(this,f,e,n,a,h,d,w,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=_,f=b;m<f;m+=3){let S=l.getX(m),R=l.getX(m+1),v=l.getX(m+2);s=pr(this,o,e,n,a,h,d,S,R,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,b=u.length;_<b;_++){let m=u[_],f=o[m.materialIndex],S=Math.max(m.start,p.start),R=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,M=R;v<M;v+=3){let w=v,C=v+1,x=v+2;s=pr(this,f,e,n,a,h,d,w,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let m=_,f=b;m<f;m+=3){let S=m,R=m+1,v=m+2;s=pr(this,o,e,n,a,h,d,S,R,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function bu(i,e,t,n,s,r,o,l){let c;if(e.side===zt?c=n.intersectTriangle(o,r,s,!0,l):c=n.intersectTriangle(s,r,o,e.side===Jn,l),c===null)return null;fr.copy(l),fr.applyMatrix4(i.matrixWorld);let a=t.ray.origin.distanceTo(fr);return a<t.near||a>t.far?null:{distance:a,point:fr.clone(),object:i}}function pr(i,e,t,n,s,r,o,l,c,a){i.getVertexPosition(l,cr),i.getVertexPosition(c,hr),i.getVertexPosition(a,ur);let h=bu(i,e,t,n,cr,hr,ur,Kl);if(h){let d=new B;Hn.getBarycoord(Kl,cr,hr,ur,d),s&&(h.uv=Hn.getInterpolatedAttribute(s,l,c,a,d,new Ge)),r&&(h.uv1=Hn.getInterpolatedAttribute(r,l,c,a,d,new Ge)),o&&(h.normal=Hn.getInterpolatedAttribute(o,l,c,a,d,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:l,b:c,c:a,normal:new B,materialIndex:0};Hn.getNormal(cr,hr,ur,u.normal),h.face=u,h.barycoord=d}return h}var vs=class extends Ot{constructor(e=null,t=1,n=1,s,r,o,l,c,a=At,h=At,d,u){super(null,o,l,c,a,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ys=class extends qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ci=new ot,jl=new ot,mr=[],Ql=new vn,Su=new ot,cs=new at,hs=new Gn,zi=class extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Su)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),Ql.copy(e.boundingBox).applyMatrix4(Ci),this.boundingBox.union(Ql)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),hs.copy(e.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),e.ray.intersectsSphere(hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ci),jl.multiplyMatrices(n,Ci),cs.matrixWorld=jl,cs.raycast(e,mr);for(let o=0,l=mr.length;o<l;o++){let c=mr[o];c.instanceId=r,c.object=this,t.push(c)}mr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vs(new Float32Array(s*this.count),s,this.count,ro,tn));let r=this.morphTexture.source.data.data,o=0;for(let a=0;a<n.length;a++)o+=n[a];let l=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=l,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ai=new Gn,Mu=new Ge(.5,.5),gr=new B,ki=class{constructor(e=new Wt,t=new Wt,n=new Wt,s=new Wt,r=new Wt,o=new Wt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln,n=!1){let s=this.planes,r=e.elements,o=r[0],l=r[1],c=r[2],a=r[3],h=r[4],d=r[5],u=r[6],p=r[7],_=r[8],b=r[9],m=r[10],f=r[11],S=r[12],R=r[13],v=r[14],M=r[15];if(s[0].setComponents(a-o,p-h,f-_,M-S).normalize(),s[1].setComponents(a+o,p+h,f+_,M+S).normalize(),s[2].setComponents(a+l,p+d,f+b,M+R).normalize(),s[3].setComponents(a-l,p-d,f-b,M-R).normalize(),n)s[4].setComponents(c,u,m,v).normalize(),s[5].setComponents(a-c,p-u,f-m,M-v).normalize();else if(s[4].setComponents(a-c,p-u,f-m,M-v).normalize(),t===ln)s[5].setComponents(a+c,p+u,f+m,M+v).normalize();else if(t===Ui)s[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);let t=Mu.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(gr.x=s.normal.x>0?e.max.x:e.min.x,gr.y=s.normal.y>0?e.max.y:e.min.y,gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bs=class extends Ot{constructor(e=[],t=$n,n,s,r,o,l,c,a,h){super(e,t,n,s,r,o,l,c,a,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yn=class extends Ot{constructor(e,t,n,s,r,o,l,c,a){super(e,t,n,s,r,o,l,c,a),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xn=class extends Ot{constructor(e,t,n=un,s,r,o,l=At,c=At,a,h=xn,d=1){if(h!==xn&&h!==jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,l,c,h,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ur=class extends Xn{constructor(e,t=un,n=$n,s,r,o=At,l=At,c,a=xn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,l,c,a),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ss=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vi=class i extends Yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],a=[],h=[],d=[],u=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function _(b,m,f,S,R,v,M,w,C,x,E){let I=v/C,F=M/x,k=v/2,Y=M/2,O=w/2,G=C+1,ee=x+1,K=0,oe=0,Z=new B;for(let ie=0;ie<ee;ie++){let V=ie*F-Y;for(let he=0;he<G;he++){let le=he*I-k;Z[b]=le*S,Z[m]=V*R,Z[f]=O,a.push(Z.x,Z.y,Z.z),Z[b]=0,Z[m]=0,Z[f]=w>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(he/C),d.push(1-ie/x),K+=1}}for(let ie=0;ie<x;ie++)for(let V=0;V<C;V++){let he=u+V+G*ie,le=u+V+G*(ie+1),ye=u+(V+1)+G*(ie+1),Fe=u+(V+1)+G*ie;c.push(he,le,Fe),c.push(le,ye,Fe),oe+=6}l.addGroup(p,oe,E),p+=oe,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ms=class i extends Yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],l=[],c=[],a=new B,h=new Ge;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*s;a.x=e*Math.cos(p),a.y=e*Math.sin(p),o.push(a.x,a.y,a.z),l.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var ws=class i extends Yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];l(s),a(n),h(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(S){let R=new B,v=new B,M=new B;for(let w=0;w<t.length;w+=3)p(t[w+0],R),p(t[w+1],v),p(t[w+2],M),c(R,v,M,S)}function c(S,R,v,M){let w=M+1,C=[];for(let x=0;x<=w;x++){C[x]=[];let E=S.clone().lerp(v,x/w),I=R.clone().lerp(v,x/w),F=w-x;for(let k=0;k<=F;k++)k===0&&x===w?C[x][k]=E:C[x][k]=E.clone().lerp(I,k/F)}for(let x=0;x<w;x++)for(let E=0;E<2*(w-x)-1;E++){let I=Math.floor(E/2);E%2===0?(u(C[x][I+1]),u(C[x+1][I]),u(C[x][I])):(u(C[x][I+1]),u(C[x+1][I+1]),u(C[x+1][I]))}}function a(S){let R=new B;for(let v=0;v<r.length;v+=3)R.x=r[v+0],R.y=r[v+1],R.z=r[v+2],R.normalize().multiplyScalar(S),r[v+0]=R.x,r[v+1]=R.y,r[v+2]=R.z}function h(){let S=new B;for(let R=0;R<r.length;R+=3){S.x=r[R+0],S.y=r[R+1],S.z=r[R+2];let v=m(S)/2/Math.PI+.5,M=f(S)/Math.PI+.5;o.push(v,1-M)}_(),d()}function d(){for(let S=0;S<o.length;S+=6){let R=o[S+0],v=o[S+2],M=o[S+4],w=Math.max(R,v,M),C=Math.min(R,v,M);w>.9&&C<.1&&(R<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),M<.2&&(o[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function p(S,R){let v=S*3;R.x=e[v+0],R.y=e[v+1],R.z=e[v+2]}function _(){let S=new B,R=new B,v=new B,M=new B,w=new Ge,C=new Ge,x=new Ge;for(let E=0,I=0;E<r.length;E+=9,I+=6){S.set(r[E+0],r[E+1],r[E+2]),R.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),w.set(o[I+0],o[I+1]),C.set(o[I+2],o[I+3]),x.set(o[I+4],o[I+5]),M.copy(S).add(R).add(v).divideScalar(3);let F=m(M);b(w,I+0,S,F),b(C,I+2,R,F),b(x,I+4,v,F)}}function b(S,R,v,M){M<0&&S.x===1&&(o[R]=S.x-1),v.x===0&&v.z===0&&(o[R]=M/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Es=class i extends ws{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ts=class i extends ws{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},hn=class i extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,l=Math.floor(n),c=Math.floor(s),a=l+1,h=c+1,d=e/l,u=t/c,p=[],_=[],b=[],m=[];for(let f=0;f<h;f++){let S=f*u-o;for(let R=0;R<a;R++){let v=R*d-r;_.push(v,-S,0),b.push(0,0,1),m.push(R/l),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<l;S++){let R=S+a*f,v=S+a*(f+1),M=S+1+a*(f+1),w=S+1+a*f;p.push(R,v,w),p.push(v,M,w)}this.setIndex(p),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(b,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var bn=class i extends Yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+l,Math.PI),a=0,h=[],d=new B,u=new B,p=[],_=[],b=[],m=[];for(let f=0;f<=n;f++){let S=[],R=f/n,v=o+R*l,M=e*Math.cos(v),w=Math.sqrt(e*e-M*M),C=0;f===0&&o===0?C=.5/t:f===n&&c===Math.PI&&(C=-.5/t);for(let x=0;x<=t;x++){let E=x/t,I=s+E*r;d.x=-w*Math.cos(I),d.y=M,d.z=w*Math.sin(I),_.push(d.x,d.y,d.z),u.copy(d).normalize(),b.push(u.x,u.y,u.z),m.push(E+C,1-R),S.push(a++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){let R=h[f][S+1],v=h[f][S],M=h[f+1][S],w=h[f+1][S+1];(f!==0||o>0)&&p.push(R,v,w),(f!==n-1||c<Math.PI)&&p.push(v,M,w)}this.setIndex(p),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(b,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function di(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(ec(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ec(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ut(i){let e={};for(let t=0;t<i.length;t++){let n=di(i[t]);for(let s in n)e[s]=n[s]}return e}function ec(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Xc={clone:di,merge:Ut},Eu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ct=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eu,this.fragmentShader=Tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=wu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ce().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ot().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fr=class extends Ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Hi=class extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ko,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sn=class extends Hi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Or=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Br=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ri(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ea(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var qn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zr=class extends qn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ca,endingEnd:Ca}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,l=s[r],c=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case Ra:r=e,l=2*t-n;break;case Ia:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ra:o=e,c=2*n-t;break;case Ia:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let a=(n-t)*.5,h=this.valueSize;this._weightPrev=a/(t-l),this._weightNext=a/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),b=_*_,m=b*_,f=-u*m+2*u*b-u*_,S=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*_+1,R=(-1-p)*m+(1.5+p)*b+.5*_,v=p*m-p*b;for(let M=0;M!==l;++M)r[M]=f*o[h+M]+S*o[a+M]+R*o[c+M]+v*o[d+M];return r}},kr=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==l;++u)r[u]=o[a+u]*d+o[c+u]*h;return r}},Vr=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Hr=class extends qn{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(n-t)/(s-t),b=1-_;for(let m=0;m!==l;++m)r[m]=o[a+m]*b+o[c+m]*_;return r}let u=l*2,p=e-1;for(let _=0;_!==l;++_){let b=o[a+_],m=o[c+_],f=p*u+_*2,S=d[f],R=d[f+1],v=e*u+_*2,M=h[v],w=h[v+1],C=Cu(n,t,S,M,s);r[_]=qc(C,b,R,w,m)}return r}};function qc(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Au(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Cu(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let l=qc(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let c=Au(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var Zt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ri(t,this.TimeBufferType),this.values=Ri(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ri(e.times,Array),values:Ri(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ea(e.settings)&&(n.settings={inTangents:Ri(e.settings.inTangents,Array),outTangents:Ri(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Hr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case us:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case vr:t=this.InterpolantFactoryMethodSmooth;break;case Aa:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return vr;case this.InterpolantFactoryMethodBezier:return Aa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ea(this.settings)&&(tc(this.settings.inTangents,e),tc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(o!==null&&o>c){He("KeyframeTrack: Out of order keys.",this,l,c,o),e=!1;break}o=c}if(s!==void 0&&iu(s))for(let l=0,c=s.length;l!==c;++l){let a=s[l];if(isNaN(a)){He("KeyframeTrack: Value is not a valid number.",this,l,a),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vr,r=e.length-1,o=1;for(let l=1;l<r;++l){let c=!1,a=e[l],h=e[l+1];if(a!==h&&(l!==1||a!==e[0]))if(s)c=!0;else{let d=l*n,u=d-n,p=d+n;for(let _=0;_!==n;++_){let b=t[d+_];if(b!==t[u+_]||b!==t[p+_]){c=!0;break}}}if(c){if(l!==o){e[o]=e[l];let d=l*n,u=o*n;for(let p=0;p!==n;++p)t[u+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,c=o*n,a=0;a!==n;++a)t[c+a]=t[l+a];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ea(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function tc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Zt.prototype.ValueTypeName="";Zt.prototype.TimeBufferType=Float32Array;Zt.prototype.ValueBufferType=Float32Array;Zt.prototype.DefaultInterpolation=Rr;var Yn=class extends Zt{constructor(e,t,n){super(e,t,n)}};Yn.prototype.ValueTypeName="bool";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=us;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends Zt{constructor(e,t,n,s){super(e,t,n,s)}};Gr.prototype.ValueTypeName="color";var Wr=class extends Zt{constructor(e,t,n,s){super(e,t,n,s)}};Wr.prototype.ValueTypeName="number";var Xr=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t),a=e*l;for(let h=a+l;a!==h;a+=4)Qt.slerpFlat(r,0,o,a-l,o,a,c);return r}},As=class extends Zt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Xr(this.times,this.values,this.getValueSize(),e)}};As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends Zt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=us;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends Zt{constructor(e,t,n,s){super(e,t,n,s)}};qr.prototype.ValueTypeName="vector";var Yr=class{constructor(e,t,n){let s=this,r=!1,o=0,l=0,c,a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return a.push(h,d),this},this.removeHandler=function(h){let d=a.indexOf(h);return d!==-1&&a.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=a.length;d<u;d+=2){let p=a[d],_=a[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yc=new Yr,Zr=class{constructor(e){this.manager=e!==void 0?e:Yc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Zr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jr=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Ta=new ot,nc=new B,ic=new B,$r=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=Vt,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ki,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(nc),ic.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ic),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ta,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,a=s?s.y/r.y:0;e.coordinateSystem===Ui||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,.5,.5,0,0,0,1),t.multiply(Ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xr=new B,_r=new Qt,mn=new B,Cs=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xr,_r,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,_r,mn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xr,_r,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,_r,mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vn=new B,sc=new Ge,rc=new Ge,St=class extends Cs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,sc,rc),t.subVectors(rc,sc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,a=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/a,s*=o.width/c,n*=o.height/a}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Pa=class extends $r{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0}},Rs=class extends Jr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Pa}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ci=class extends Cs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=a*this.view.offsetX,o=r+a*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ii=-90,Pi=1,Kr=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new St(Ii,Pi,e,t);s.layers=this.layers,this.add(s);let r=new St(Ii,Pi,e,t);r.layers=this.layers,this.add(r);let o=new St(Ii,Pi,e,t);o.layers=this.layers,this.add(o);let l=new St(Ii,Pi,e,t);l.layers=this.layers,this.add(l);let c=new St(Ii,Pi,e,t);c.layers=this.layers,this.add(c);let a=new St(Ii,Pi,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,c]=t;for(let a of t)this.remove(a);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ui)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,c,a,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},jr=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var il="\\[\\]\\.:\\/",Ru=new RegExp("["+il+"]","g"),sl="[^"+il+"]",Iu="[^"+il.replace("\\.","")+"]",Pu=/((?:WC+[\/:])*)/.source.replace("WC",sl),Lu=/(WCOD+)?/.source.replace("WCOD",Iu),Du=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sl),Nu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sl),Uu=new RegExp("^"+Pu+Lu+Du+Nu+"$"),Fu=["material","materials","bones","map"],La=class{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ru,"")}static parseTrackName(e){let t=Uu.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Fu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let a=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===a){a=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}let o=e[s];if(o===void 0){let a=t.nodeName;He("PropertyBinding: Trying to update property for track: "+a+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=La;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i0=new Float32Array(1);var Da=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function rl(i,e,t,n){let s=Ou(n);switch(t){case ja:return i*e;case ro:return i*e/s.components*s.byteLength;case oo:return i*e/s.components*s.byteLength;case Qn:return i*e*2/s.components*s.byteLength;case ao:return i*e*2/s.components*s.byteLength;case Qa:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case lo:return i*e*4/s.components*s.byteLength;case Ns:case Us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fs:case Os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ho:case fo:return Math.max(i,16)*Math.max(e,8)/4;case co:case uo:return Math.max(i,8)*Math.max(e,8)/2;case po:case mo:case xo:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case go:case Bs:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case To:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Do:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case No:case Uo:case Fo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zs:case zo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ou(i){switch(i){case Vt:case Za:return{byteLength:1,components:1};case Xi:case Ja:case $t:return{byteLength:2,components:1};case io:case so:return{byteLength:2,components:4};case un:case no:case tn:return{byteLength:4,components:1};case $a:case Ka:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function mh(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zu(i){let e=new WeakMap;function t(l,c){let a=l.array,h=l.usage,d=a.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,a,h),l.onUploadCallback();let p;if(a instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)p=i.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(a instanceof Int16Array)p=i.SHORT;else if(a instanceof Uint32Array)p=i.UNSIGNED_INT;else if(a instanceof Int32Array)p=i.INT;else if(a instanceof Int8Array)p=i.BYTE;else if(a instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:u,type:p,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,c,a){let h=c.array,d=c.updateRanges;if(i.bindBuffer(a,l),d.length===0)i.bufferSubData(a,0,h);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){let _=d[u],b=d[p];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++u,d[u]=b)}d.length=u+1;for(let p=0,_=d.length;p<_;p++){let b=d[p];i.bufferSubData(a,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let a=e.get(l);if(a===void 0)e.set(l,t(l,c));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,l,c),a.version=l.version}}return{get:s,remove:r,update:o}}var ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$u=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ju=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ld=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ud=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ad=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ld=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Od=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Gd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$d=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ef=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,of=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ef=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,If=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ff=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$f=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,op=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:ku,alphahash_pars_fragment:Vu,alphamap_fragment:Hu,alphamap_pars_fragment:Gu,alphatest_fragment:Wu,alphatest_pars_fragment:Xu,aomap_fragment:qu,aomap_pars_fragment:Yu,batching_pars_vertex:Zu,batching_vertex:Ju,begin_vertex:$u,beginnormal_vertex:Ku,bsdfs:ju,iridescence_fragment:Qu,bumpmap_pars_fragment:ed,clipping_planes_fragment:td,clipping_planes_pars_fragment:nd,clipping_planes_pars_vertex:id,clipping_planes_vertex:sd,color_fragment:rd,color_pars_fragment:od,color_pars_vertex:ad,color_vertex:ld,common:cd,cube_uv_reflection_fragment:hd,defaultnormal_vertex:ud,displacementmap_pars_vertex:dd,displacementmap_vertex:fd,emissivemap_fragment:pd,emissivemap_pars_fragment:md,colorspace_fragment:gd,colorspace_pars_fragment:xd,envmap_fragment:_d,envmap_common_pars_fragment:vd,envmap_pars_fragment:yd,envmap_pars_vertex:bd,envmap_physical_pars_fragment:Ld,envmap_vertex:Sd,fog_vertex:Md,fog_pars_vertex:wd,fog_fragment:Ed,fog_pars_fragment:Td,gradientmap_pars_fragment:Ad,lightmap_pars_fragment:Cd,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Id,lights_pars_begin:Pd,lights_toon_fragment:Dd,lights_toon_pars_fragment:Nd,lights_phong_fragment:Ud,lights_phong_pars_fragment:Fd,lights_physical_fragment:Od,lights_physical_pars_fragment:Bd,lights_fragment_begin:zd,lights_fragment_maps:kd,lights_fragment_end:Vd,lightprobes_pars_fragment:Hd,logdepthbuf_fragment:Gd,logdepthbuf_pars_fragment:Wd,logdepthbuf_pars_vertex:Xd,logdepthbuf_vertex:qd,map_fragment:Yd,map_pars_fragment:Zd,map_particle_fragment:Jd,map_particle_pars_fragment:$d,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:jd,morphinstance_vertex:Qd,morphcolor_vertex:ef,morphnormal_vertex:tf,morphtarget_pars_vertex:nf,morphtarget_vertex:sf,normal_fragment_begin:rf,normal_fragment_maps:of,normal_pars_fragment:af,normal_pars_vertex:lf,normal_vertex:cf,normalmap_pars_fragment:hf,clearcoat_normal_fragment_begin:uf,clearcoat_normal_fragment_maps:df,clearcoat_pars_fragment:ff,iridescence_pars_fragment:pf,opaque_fragment:mf,packing:gf,premultiplied_alpha_fragment:xf,project_vertex:_f,dithering_fragment:vf,dithering_pars_fragment:yf,roughnessmap_fragment:bf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:Mf,shadowmap_pars_vertex:wf,shadowmap_vertex:Ef,shadowmask_pars_fragment:Tf,skinbase_vertex:Af,skinning_pars_vertex:Cf,skinning_vertex:Rf,skinnormal_vertex:If,specularmap_fragment:Pf,specularmap_pars_fragment:Lf,tonemapping_fragment:Df,tonemapping_pars_fragment:Nf,transmission_fragment:Uf,transmission_pars_fragment:Ff,uv_pars_fragment:Of,uv_pars_vertex:Bf,uv_vertex:zf,worldpos_vertex:kf,background_vert:Vf,background_frag:Hf,backgroundCube_vert:Gf,backgroundCube_frag:Wf,cube_vert:Xf,cube_frag:qf,depth_vert:Yf,depth_frag:Zf,distance_vert:Jf,distance_frag:$f,equirect_vert:Kf,equirect_frag:jf,linedashed_vert:Qf,linedashed_frag:ep,meshbasic_vert:tp,meshbasic_frag:np,meshlambert_vert:ip,meshlambert_frag:sp,meshmatcap_vert:rp,meshmatcap_frag:op,meshnormal_vert:ap,meshnormal_frag:lp,meshphong_vert:cp,meshphong_frag:hp,meshphysical_vert:up,meshphysical_frag:dp,meshtoon_vert:fp,meshtoon_frag:pp,points_vert:mp,points_frag:gp,shadow_vert:xp,shadow_frag:_p,sprite_vert:vp,sprite_frag:yp},be={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},En={basic:{uniforms:Ut([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ut([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ut([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ut([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ut([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ce(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ut([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ut([be.points,be.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ut([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ut([be.common,be.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ut([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ut([be.sprite,be.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Ut([be.common,be.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Ut([be.lights,be.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};En.physical={uniforms:Ut([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Wo={r:0,b:0,g:0},bp=new ot,gh=new We;gh.set(-1,0,0,0,1,0,0,0,1);function Sp(i,e,t,n,s,r){let o=new Ce(0),l=s===!0?0:1,c,a,h=null,d=0,u=null;function p(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){let v=S.backgroundBlurriness>0;R=e.get(R,v)}return R}function _(S){let R=!1,v=p(S);v===null?m(o,l):v&&v.isColor&&(m(v,1),R=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(S,R){let v=p(R);v&&(v.isCubeTexture||v.mapping===Ls)?(a===void 0&&(a=new at(new Vi(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:di(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(M,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(a)),a.material.uniforms.envMap.value=v,a.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,a.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,a.material.uniforms.backgroundRotation.value.setFromMatrix4(bp.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&a.material.uniforms.backgroundRotation.value.premultiply(gh),a.material.toneMapped=$e.getTransfer(v.colorSpace)!==it,(h!==v||d!==v.version||u!==i.toneMapping)&&(a.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),a.layers.enableAll(),S.unshift(a,a.geometry,a.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new at(new hn(2,2),new Ct({name:"BackgroundMaterial",uniforms:di(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=$e.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,R){S.getRGB(Wo,nl(i)),t.buffers.color.setClear(Wo.r,Wo.g,Wo.b,R,r)}function f(){a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,R=1){o.set(S),l=R,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:_,addToRenderList:b,dispose:f}}function Mp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function l(F,k,Y,O,G){let ee=!1,K=d(F,O,Y,k);r!==K&&(r=K,a(r.object)),ee=p(F,O,Y,G),ee&&_(F,O,Y,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,v(F,k,Y,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function a(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function d(F,k,Y,O){let G=O.wireframe===!0,ee=n[k.id];ee===void 0&&(ee={},n[k.id]=ee);let K=F.isInstancedMesh===!0?F.id:0,oe=ee[K];oe===void 0&&(oe={},ee[K]=oe);let Z=oe[Y.id];Z===void 0&&(Z={},oe[Y.id]=Z);let ie=Z[G];return ie===void 0&&(ie=u(c()),Z[G]=ie),ie}function u(F){let k=[],Y=[],O=[];for(let G=0;G<t;G++)k[G]=0,Y[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:O,object:F,attributes:{},index:null}}function p(F,k,Y,O){let G=r.attributes,ee=k.attributes,K=0,oe=Y.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let V=G[Z],he=ee[Z];if(he===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(he=F.instanceColor)),V===void 0||V.attribute!==he||he&&V.data!==he.data)return!0;K++}return r.attributesNum!==K||r.index!==O}function _(F,k,Y,O){let G={},ee=k.attributes,K=0,oe=Y.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let V=ee[Z];V===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(V=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(V=F.instanceColor));let he={};he.attribute=V,V&&V.data&&(he.data=V.data),G[Z]=he,K++}r.attributes=G,r.attributesNum=K,r.index=O}function b(){let F=r.newAttributes;for(let k=0,Y=F.length;k<Y;k++)F[k]=0}function m(F){f(F,0)}function f(F,k){let Y=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;Y[F]=1,O[F]===0&&(i.enableVertexAttribArray(F),O[F]=1),G[F]!==k&&(i.vertexAttribDivisor(F,k),G[F]=k)}function S(){let F=r.newAttributes,k=r.enabledAttributes;for(let Y=0,O=k.length;Y<O;Y++)k[Y]!==F[Y]&&(i.disableVertexAttribArray(Y),k[Y]=0)}function R(F,k,Y,O,G,ee,K){K===!0?i.vertexAttribIPointer(F,k,Y,G,ee):i.vertexAttribPointer(F,k,Y,O,G,ee)}function v(F,k,Y,O){b();let G=O.attributes,ee=Y.getAttributes(),K=k.defaultAttributeValues;for(let oe in ee){let Z=ee[oe];if(Z.location>=0){let ie=G[oe];if(ie===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor)),ie!==void 0){let V=ie.normalized,he=ie.itemSize,le=e.get(ie);if(le===void 0)continue;let ye=le.buffer,Fe=le.type,Le=le.bytesPerElement,T=Fe===i.INT||Fe===i.UNSIGNED_INT||ie.gpuType===no;if(ie.isInterleavedBufferAttribute){let N=ie.data,j=N.stride,de=ie.offset;if(N.isInstancedInterleavedBuffer){for(let ae=0;ae<Z.locationSize;ae++)f(Z.location+ae,N.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ae=0;ae<Z.locationSize;ae++)m(Z.location+ae);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let ae=0;ae<Z.locationSize;ae++)R(Z.location+ae,he/Z.locationSize,Fe,V,j*Le,(de+he/Z.locationSize*ae)*Le,T)}else{if(ie.isInstancedBufferAttribute){for(let N=0;N<Z.locationSize;N++)f(Z.location+N,ie.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let N=0;N<Z.locationSize;N++)m(Z.location+N);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let N=0;N<Z.locationSize;N++)R(Z.location+N,he/Z.locationSize,Fe,V,he*Le,he/Z.locationSize*N*Le,T)}}else if(K!==void 0){let V=K[oe];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(Z.location,V);break;case 3:i.vertexAttrib3fv(Z.location,V);break;case 4:i.vertexAttrib4fv(Z.location,V);break;default:i.vertexAttrib1fv(Z.location,V)}}}}S()}function M(){E();for(let F in n){let k=n[F];for(let Y in k){let O=k[Y];for(let G in O){let ee=O[G];for(let K in ee)h(ee[K].object),delete ee[K];delete O[G]}}delete n[F]}}function w(F){if(n[F.id]===void 0)return;let k=n[F.id];for(let Y in k){let O=k[Y];for(let G in O){let ee=O[G];for(let K in ee)h(ee[K].object),delete ee[K];delete O[G]}}delete n[F.id]}function C(F){for(let k in n){let Y=n[k];for(let O in Y){let G=Y[O];if(G[F.id]===void 0)continue;let ee=G[F.id];for(let K in ee)h(ee[K].object),delete ee[K];delete G[F.id]}}}function x(F){for(let k in n){let Y=n[k],O=F.isInstancedMesh===!0?F.id:0,G=Y[O];if(G!==void 0){for(let ee in G){let K=G[ee];for(let oe in K)h(K[oe].object),delete K[oe];delete G[ee]}delete Y[O],Object.keys(Y).length===0&&delete n[k]}}}function E(){I(),o=!0,r!==s&&(r=s,a(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:E,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:S}}function wp(i,e,t){let n;function s(c){n=c}function r(c,a){i.drawArrays(n,c,a),t.update(a,n,1)}function o(c,a,h){h!==0&&(i.drawArraysInstanced(n,c,a,h),t.update(a,n,h))}function l(c,a,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,a,0,h);let u=0;for(let p=0;p<h;p++)u+=a[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function Ep(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){let x=C===$t&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Vt&&C!==tn&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",h=c(a);h!==a&&(ke("WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:v,maxSamples:M,samples:w}}function Tp(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Wt,l=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let _=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):a();else{let S=r?0:n,R=S*4,v=f.clippingState||null;c.value=v,v=h(_,u,R,p);for(let M=0;M!==R;++M)v[M]=t[M];f.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function a(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,_){let b=d!==null?d.length:0,m=null;if(b!==0){if(m=c.value,_!==!0||m===null){let f=p+b*4,S=u.matrixWorldInverse;l.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,v=p;R!==b;++R,v+=4)o.copy(d[R]).applyMatrix4(S,l),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var Zi=4,Ap=6,Cp=20,Rp=256,Vs=new ci,Zc=new Ce,ol=null,al=0,ll=0,cl=!1,Ip=new B,fi=new B,ei=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:l=Ip}=r;ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ol,al,ll),this._renderer.xr.enabled=cl,e.scissorTest=!1,Yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$n||e.mapping===ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:$t,format:nn,colorSpace:ds,depthBuffer:!1},s=Jc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pp(r)),this._blurMaterial=Dp(r,e,t),this._ggxMaterial=Lp(r,e,t)}return s}_compileMaterial(e){let t=new at(new Yt,e);this._renderer.compile(t,Vs)}_sceneToCubeUV(e,t,n,s,r){let c=new St(90,1,t,n),a=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Zc),d.toneMapping=Jt,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new at(new Vi,new Dn({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,f=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,f=!0):(m.color.copy(Zc),f=!0);for(let R=0;R<6;R++){let v=R%3;v===0?(c.up.set(0,a[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[R],r.y,r.z)):v===1?(c.up.set(0,0,a[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[R],r.z)):(c.up.set(0,a[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[R]));let M=this._cubeSize;Yi(s,v*M,R>2?M:0,M,M),d.setRenderTarget(s),f&&d.render(b,c),d.render(e,c)}d.toneMapping=p,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===$n||e.mapping===ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=e;let c=this._cubeSize;Yi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Vs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms,a=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(a*a-h*h),u=a*1.25,p=d*u,{_lodMax:_}=this,b=this._sizeLods[n],m=3*b*(n>_-Zi?n-_+Zi:0),f=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=_-t,Yi(r,m,f,3*b,2*b),s.setRenderTarget(r),s.render(l,Vs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Yi(e,m,f,3*b,2*b),s.setRenderTarget(e),s.render(l,Vs)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let a=l.uniforms;a.envMap.value=e.texture,a.sigma.value=r,a.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Zi?s-this._lodMax+Zi:0),u=4*(this._cubeSize-h);Yi(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(c,Vs)}};function Pp(i){let e=[],t=[],n=i,s=i-Zi+1+Ap;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let l=1/(o-2),c=-l,a=1+l,h=[c,c,a,c,a,a,c,c,a,a,c,a],d=6,u=6,p=3,_=new Float32Array(p*u*d),b=new Float32Array(p*u*d);for(let f=0;f<d;f++){let S=f%3*2/3-1,R=f>2?0:-1,v=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];_.set(v,p*u*f);for(let M=0;M<u;M++){let w=h[M*2]*2-1,C=h[M*2+1]*2-1;f===0?fi.set(1,C,w):f===1?fi.set(-w,1,-C):f===2?fi.set(-w,C,1):f===3?fi.set(-1,C,-w):f===4?fi.set(-w,-1,C):fi.set(w,C,-1),fi.toArray(b,(f*u+M)*p)}}let m=new Yt;m.setAttribute("position",new qt(_,p)),m.setAttribute("outputDirection",new qt(b,p)),t.push(new at(m,null)),n>Zi&&n--}return{lodMeshes:t,sizeLods:e}}function Jc(i,e,t){let n=new Nt(i,e,t);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Lp(i,e,t){return new Ct({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Dp(i,e,t){return new Ct({name:"SphericalGaussianBlur",defines:{SAMPLES:Cp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function $c(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Kc(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Yo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var qo=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new bs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vi(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Mn});r.uniforms.tEquirect.value=t;let o=new at(s,r),l=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Rt),new Kr(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Np(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Qr||p===eo)if(e.has(u)){let _=e.get(u).texture;return l(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let b=new qo(_.height);return b.fromEquirectangularTexture(i,u),e.set(u,b),u.addEventListener("dispose",a),l(b.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let p=u.mapping,_=p===Qr||p===eo,b=p===$n||p===ui;if(_||b){let m=t.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new ei(i)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return _&&S&&S.height>0||b&&S&&c(S)?(n===null&&(n=new ei(i)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function l(u,p){return p===Qr?u.mapping=$n:p===eo&&(u.mapping=ui),u}function c(u){let p=0,_=6;for(let b=0;b<_;b++)u[b]!==void 0&&p++;return p===_}function a(u){let p=u.target;p.removeEventListener("dispose",a);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Up(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&li("WebGLRenderer: "+n+" extension not supported."),s}}}function Fp(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let p in u)e.update(u[p],i.ARRAY_BUFFER)}function a(d){let u=[],p=d.index,_=d.attributes.position,b=0;if(_===void 0)return;if(p!==null){let S=p.array;b=p.version;for(let R=0,v=S.length;R<v;R+=3){let M=S[R+0],w=S[R+1],C=S[R+2];u.push(M,w,w,C,C,M)}}else{let S=_.array;b=_.version;for(let R=0,v=S.length/3-1;R<v;R+=3){let M=R+0,w=R+1,C=R+2;u.push(M,w,w,C,C,M)}}let m=new(_.count>=65535?_s:xs)(u,1);m.version=b;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&a(d)}else a(d);return r.get(d)}return{get:l,update:c,getWireframeAttribute:h}}function Op(i,e,t){let n;function s(d){n=d}let r,o;function l(d){r=d.type,o=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function a(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*o,p),t.update(u,n,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let b=0;for(let m=0;m<p;m++)b+=u[m];t.update(b,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=a,this.renderMultiDraw=h}function Bp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:He("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zp(i,e,t){let n=new WeakMap,s=new pt;function r(o,l,c){let a=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(l);if(u===void 0||u.count!==d){let E=function(){C.dispose(),n.delete(l),l.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let p=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,b=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],f=l.morphAttributes.normal||[],S=l.morphAttributes.color||[],R=0;p===!0&&(R=1),_===!0&&(R=2),b===!0&&(R=3);let v=l.attributes.position.count*R,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*M*4*d),C=new ms(w,v,M,d);C.type=tn,C.needsUpdate=!0;let x=R*4;for(let I=0;I<d;I++){let F=m[I],k=f[I],Y=S[I],O=v*M*4*I;for(let G=0;G<F.count;G++){let ee=G*x;p===!0&&(s.fromBufferAttribute(F,G),w[O+ee+0]=s.x,w[O+ee+1]=s.y,w[O+ee+2]=s.z,w[O+ee+3]=0),_===!0&&(s.fromBufferAttribute(k,G),w[O+ee+4]=s.x,w[O+ee+5]=s.y,w[O+ee+6]=s.z,w[O+ee+7]=0),b===!0&&(s.fromBufferAttribute(Y,G),w[O+ee+8]=s.x,w[O+ee+9]=s.y,w[O+ee+10]=s.z,w[O+ee+11]=Y.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new Ge(v,M)},n.set(l,u),l.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let b=0;b<a.length;b++)p+=a[b];let _=l.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",a)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function kp(i,e,t,n,s){let r=new WeakMap;function o(a){let h=s.render.frame,d=a.geometry,u=e.get(a,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),a.isInstancedMesh&&(a.hasEventListener("dispose",c)===!1&&a.addEventListener("dispose",c),r.get(a)!==h&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,h))),a.isSkinnedMesh){let p=a.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function l(){r=new WeakMap}function c(a){let h=a.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}var Vp={[ka]:"LINEAR_TONE_MAPPING",[Va]:"REINHARD_TONE_MAPPING",[Ha]:"CINEON_TONE_MAPPING",[Ga]:"ACES_FILMIC_TONE_MAPPING",[Xa]:"AGX_TONE_MAPPING",[qa]:"NEUTRAL_TONE_MAPPING",[Wa]:"CUSTOM_TONE_MAPPING"};function Hp(i,e,t,n,s,r){let o=new Nt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,a=new Yt;a.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new gt([0,2,0,0,2,0],2));let h=new Fr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new at(a,h),u=new ci(-1,1,1,-1,0,1),p=null,_=null,b=!1,m,f=null,S=[],R=!1;this.setSize=function(v,M){o.setSize(v,M),l!==null&&l.setSize(v,M),c!==null&&c.setSize(v,M);for(let w=0;w<S.length;w++){let C=S[w];C.setSize&&C.setSize(v,M)}},this.setEffects=function(v){S=v,R=S.length>0&&S[0].isRenderPass===!0;let M=o.width,w=o.height;S.length>0&&l===null&&(l=new Nt(M,w,{type:$t,depthBuffer:!1,stencilBuffer:!1}),c=new Nt(M,w,{type:$t,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let x=S[C];x.setSize&&x.setSize(M,w)}},this.begin=function(v,M){if(b||v.toneMapping===Jt&&S.length===0)return!1;if(f=M,M!==null){let w=M.width,C=M.height;(o.width!==w||o.height!==C)&&this.setSize(w,C)}return R===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Jt,!0},this.hasRenderPass=function(){return R},this.end=function(v,M){v.toneMapping=m,b=!0;let w=o,C=l;for(let x=0;x<S.length;x++){let E=S[x];E.enabled!==!1&&(E.render(v,C,w,M),E.needsSwap!==!1&&(w=C,C=C===l?c:l))}if(p!==v.outputColorSpace||_!==v.toneMapping){p=v.outputColorSpace,_=v.toneMapping,h.defines={},$e.getTransfer(p)===it&&(h.defines.SRGB_TRANSFER="");let x=Vp[_];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(f),v.render(d,u),f=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),a.dispose(),h.dispose()}}var xh=new Ot,dl=new Xn(1,1),_h=new ms,vh=new Dr,yh=new bs,jc=[],Qc=[],eh=new Float32Array(16),th=new Float32Array(9),nh=new Float32Array(4);function Ki(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=jc[s];if(r===void 0&&(r=new Float32Array(s),jc[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zo(i,e){let t=Qc[e];t===void 0&&(t=new Int32Array(e),Qc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function Xp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function qp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function Yp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,n))return;nh.set(n),i.uniformMatrix2fv(this.addr,!1,nh),wt(t,n)}}function Zp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,n))return;th.set(n),i.uniformMatrix3fv(this.addr,!1,th),wt(t,n)}}function Jp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,n))return;eh.set(n),i.uniformMatrix4fv(this.addr,!1,eh),wt(t,n)}}function $p(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Kp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function jp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function Qp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function em(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function im(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function sm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dl.compareFunction=t.isReversedDepthBuffer()?Ho:Vo,r=dl):r=xh,t.setTexture2D(e||r,s)}function rm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vh,s)}function om(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yh,s)}function am(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_h,s)}function lm(i){switch(i){case 5126:return Gp;case 35664:return Wp;case 35665:return Xp;case 35666:return qp;case 35674:return Yp;case 35675:return Zp;case 35676:return Jp;case 5124:case 35670:return $p;case 35667:case 35671:return Kp;case 35668:case 35672:return jp;case 35669:case 35673:return Qp;case 5125:return em;case 36294:return tm;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return am}}function cm(i,e){i.uniform1fv(this.addr,e)}function hm(i,e){let t=Ki(e,this.size,2);i.uniform2fv(this.addr,t)}function um(i,e){let t=Ki(e,this.size,3);i.uniform3fv(this.addr,t)}function dm(i,e){let t=Ki(e,this.size,4);i.uniform4fv(this.addr,t)}function fm(i,e){let t=Ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pm(i,e){let t=Ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mm(i,e){let t=Ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gm(i,e){i.uniform1iv(this.addr,e)}function xm(i,e){i.uniform2iv(this.addr,e)}function _m(i,e){i.uniform3iv(this.addr,e)}function vm(i,e){i.uniform4iv(this.addr,e)}function ym(i,e){i.uniform1uiv(this.addr,e)}function bm(i,e){i.uniform2uiv(this.addr,e)}function Sm(i,e){i.uniform3uiv(this.addr,e)}function Mm(i,e){i.uniform4uiv(this.addr,e)}function wm(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=dl:o=xh;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function Em(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||vh,r[o])}function Tm(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yh,r[o])}function Am(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_h,r[o])}function Cm(i){switch(i){case 5126:return cm;case 35664:return hm;case 35665:return um;case 35666:return dm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return xm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return ym;case 36294:return bm;case 36295:return Sm;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Am}}var fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lm(t.type)}},pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cm(t.type)}},ml=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},hl=/(\w+)(\])?(\[|\.)?/g;function ih(i,e){i.seq.push(e),i.map[e.id]=e}function Rm(i,e,t){let n=i.name,s=n.length;for(hl.lastIndex=0;;){let r=hl.exec(n),o=hl.lastIndex,l=r[1],c=r[2]==="]",a=r[3];if(c&&(l=l|0),a===void 0||a==="["&&o+2===s){ih(t,a===void 0?new fl(l,i,e):new pl(l,i,e));break}else{let d=t.map[l];d===void 0&&(d=new ml(l),ih(t,d)),t=d}}}var Ji=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);Rm(l,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function sh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Im=37297,Pm=0;function Lm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}var rh=new We;function Dm(i){$e._getMatrix(rh,$e.workingColorSpace,i);let e=`mat3( ${rh.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case fs:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function oh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Lm(i.getShaderSource(e),l)}else return r}function Nm(i,e){let t=Dm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Um={[ka]:"Linear",[Va]:"Reinhard",[Ha]:"Cineon",[Ga]:"ACESFilmic",[Xa]:"AgX",[qa]:"Neutral",[Wa]:"Custom"};function Fm(i,e){let t=Um[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xo=new B;function Om(){$e.getLuminanceCoefficients(Xo);let i=Xo.x.toFixed(4),e=Xo.y.toFixed(4),t=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function zm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function km(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function Gs(i){return i!==""}function ah(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(i){return i.replace(Vm,Gm)}var Hm=new Map;function Gm(i,e){let t=qe[e];if(t===void 0){let n=Hm.get(e);if(n!==void 0)t=qe[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gl(t)}var Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(i){return i.replace(Wm,Xm)}function Xm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var qm={[Is]:"SHADOWMAP_TYPE_PCF",[Gi]:"SHADOWMAP_TYPE_VSM"};function Ym(i){return qm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zm={[$n]:"ENVMAP_TYPE_CUBE",[ui]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE_UV"};function Jm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Zm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $m={[ui]:"ENVMAP_MODE_REFRACTION"};function Km(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$m[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jm={[za]:"ENVMAP_BLENDING_MULTIPLY",[Ac]:"ENVMAP_BLENDING_MIX",[Cc]:"ENVMAP_BLENDING_ADD"};function Qm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":jm[i.combine]||"ENVMAP_BLENDING_NONE"}function eg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function tg(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,l=t.fragmentShader,c=Ym(t),a=Jm(t),h=Km(t),d=Qm(t),u=eg(t),p=Bm(t),_=zm(r),b=s.createProgram(),m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gs).join(`
`),f.length>0&&(f+=`
`)):(m=[hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),f=[hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jt?"#define TONE_MAPPING":"",t.toneMapping!==Jt?qe.tonemapping_pars_fragment:"",t.toneMapping!==Jt?Fm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Nm("linearToOutputTexel",t.outputColorSpace),Om(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),o=gl(o),o=ah(o,t),o=lh(o,t),l=gl(l),l=ah(l,t),l=lh(l,t),o=ch(o),l=ch(l),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let R=S+m+o,v=S+f+l,M=sh(s,s.VERTEX_SHADER,R),w=sh(s,s.FRAGMENT_SHADER,v);s.attachShader(b,M),s.attachShader(b,w),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function C(F){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(b)||"",Y=s.getShaderInfoLog(M)||"",O=s.getShaderInfoLog(w)||"",G=k.trim(),ee=Y.trim(),K=O.trim(),oe=!0,Z=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,M,w);else{let ie=oh(s,M,"vertex"),V=oh(s,w,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+G+`
`+ie+`
`+V)}else G!==""?ke("WebGLProgram: Program Info Log:",G):(ee===""||K==="")&&(Z=!1);Z&&(F.diagnostics={runnable:oe,programLog:G,vertexShader:{log:ee,prefix:m},fragmentShader:{log:K,prefix:f}})}s.deleteShader(M),s.deleteShader(w),x=new Ji(s,b),E=km(s,b)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(b,Im)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pm++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=w,this}var ng=0,xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _l(e),t.set(e,n)),n}},_l=class{constructor(e){this.id=ng++,this.code=e,this.usedTimes=0}};function ig(i){return i===Qn||i===Bs||i===zs}function sg(i,e,t,n,s,r){let o=new gs,l=new xl,c=new Set,a=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function b(x,E,I,F,k,Y){let O=F.fog,G=k.geometry,ee=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,oe=e.get(x.envMap||ee,K),Z=oe&&oe.mapping===Ls?oe.image.height:null,ie=p[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let V=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,he=V!==void 0?V.length:0,le=0;G.morphAttributes.position!==void 0&&(le=1),G.morphAttributes.normal!==void 0&&(le=2),G.morphAttributes.color!==void 0&&(le=3);let ye,Fe,Le,T;if(ie){let De=En[ie];ye=De.vertexShader,Fe=De.fragmentShader}else{ye=x.vertexShader,Fe=x.fragmentShader;let De=l.getVertexShaderStage(x),Ne=l.getFragmentShaderStage(x);l.update(x,De,Ne),Le=De.id,T=Ne.id}let N=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),de=k.isInstancedMesh===!0,ae=k.isBatchedMesh===!0,Ee=!!x.map,Je=!!x.matcap,ze=!!oe,Be=!!x.aoMap,Ye=!!x.lightMap,Oe=!!x.bumpMap&&x.wireframe===!1,je=!!x.normalMap,tt=!!x.displacementMap,Ve=!!x.emissiveMap,st=!!x.metalnessMap,ct=!!x.roughnessMap,L=x.anisotropy>0,ft=x.clearcoat>0,et=x.dispersion>0,A=x.retroreflectivity>0,g=x.iridescence>0,z=x.sheen>0,q=x.transmission>0,te=L&&!!x.anisotropyMap,pe=ft&&!!x.clearcoatMap,xe=ft&&!!x.clearcoatNormalMap,ne=ft&&!!x.clearcoatRoughnessMap,se=g&&!!x.iridescenceMap,ve=g&&!!x.iridescenceThicknessMap,D=z&&!!x.sheenColorMap,H=z&&!!x.sheenRoughnessMap,$=!!x.specularMap,ue=!!x.specularColorMap,me=!!x.specularIntensityMap,we=q&&!!x.transmissionMap,P=q&&!!x.thicknessMap,fe=!!x.gradientMap,Q=!!x.alphaMap,ge=x.alphaTest>0,_e=!!x.alphaHash,re=!!x.extensions,Te=Jt;x.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Te=i.toneMapping);let ce={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:ye,fragmentShader:Fe,defines:x.defines,customVertexShaderID:Le,customFragmentShaderID:T,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ae,batchingColor:ae&&k._colorsTexture!==null,instancing:de,instancingColor:de&&k.instanceColor!==null,instancingMorph:de&&k.morphTexture!==null,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ee,matcap:Je,envMap:ze,envMapMode:ze&&oe.mapping,envMapCubeUVHeight:Z,aoMap:Be,lightMap:Ye,bumpMap:Oe,normalMap:je,displacementMap:tt,emissiveMap:Ve,normalMapObjectSpace:je&&x.normalMapType===Pc,normalMapTangentSpace:je&&x.normalMapType===ko,packedNormalMap:je&&x.normalMapType===ko&&ig(x.normalMap.format),metalnessMap:st,roughnessMap:ct,anisotropy:L,anisotropyMap:te,clearcoat:ft,clearcoatMap:pe,clearcoatNormalMap:xe,clearcoatRoughnessMap:ne,dispersion:et,retroreflection:A,iridescence:g,iridescenceMap:se,iridescenceThicknessMap:ve,sheen:z,sheenColorMap:D,sheenRoughnessMap:H,specularMap:$,specularColorMap:ue,specularIntensityMap:me,transmission:q,transmissionMap:we,thicknessMap:P,gradientMap:fe,opaque:x.transparent===!1&&x.blending===Wi&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:ge,alphaHash:_e,combine:x.combine,mapUv:Ee&&_(x.map.channel),aoMapUv:Be&&_(x.aoMap.channel),lightMapUv:Ye&&_(x.lightMap.channel),bumpMapUv:Oe&&_(x.bumpMap.channel),normalMapUv:je&&_(x.normalMap.channel),displacementMapUv:tt&&_(x.displacementMap.channel),emissiveMapUv:Ve&&_(x.emissiveMap.channel),metalnessMapUv:st&&_(x.metalnessMap.channel),roughnessMapUv:ct&&_(x.roughnessMap.channel),anisotropyMapUv:te&&_(x.anisotropyMap.channel),clearcoatMapUv:pe&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:xe&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:D&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:H&&_(x.sheenRoughnessMap.channel),specularMapUv:$&&_(x.specularMap.channel),specularColorMapUv:ue&&_(x.specularColorMap.channel),specularIntensityMapUv:me&&_(x.specularIntensityMap.channel),transmissionMapUv:we&&_(x.transmissionMap.channel),thicknessMapUv:P&&_(x.thicknessMap.channel),alphaMapUv:Q&&_(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(je||L),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!G.attributes.uv&&(Ee||Q),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&je===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:le,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ee&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:Ve&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===It,flipSided:x.side===zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function m(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(f(E,x),S(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function f(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function R(x){let E=p[x.type],I;if(E){let F=En[E];I=Xc.clone(F.uniforms)}else I=x.uniforms;return I}function v(x,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new tg(i,E,x,s),a.push(I),h.set(E,I)),I}function M(x){if(--x.usedTimes===0){let E=a.indexOf(x);a[E]=a[a.length-1],a.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){l.remove(x)}function C(){l.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:R,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:a,dispose:C}}function rg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,c){i.get(o)[l]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function og(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function uh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function l(u,p,_,b,m,f){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:p,material:_,materialVariant:o(u),groupOrder:b,renderOrder:u.renderOrder,z:m,group:f},i[e]=S):(S.id=u.id,S.object=u,S.geometry=p,S.material=_,S.materialVariant=o(u),S.groupOrder=b,S.renderOrder=u.renderOrder,S.z=m,S.group=f),e++,S}function c(u,p,_,b,m,f,S){S.reversedDepth===!0&&(m=-m);let R=l(u,p,_,b,m,f);_.transmission>0?n.push(R):_.transparent===!0?s.push(R):t.push(R)}function a(u,p,_,b,m,f){let S=l(u,p,_,b,m,f);_.transmission>0?n.unshift(S):_.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,p){t.length>1&&t.sort(u||og),n.length>1&&n.sort(p||uh),s.length>1&&s.sort(p||uh)}function d(){for(let u=e,p=i.length;u<p;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:a,finish:d,sort:h}}function ag(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new dh,i.set(n,[o])):s>=r.length?(o=new dh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function lg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Ce};break;case"SpotLight":t={position:new B,direction:new B,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function cg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var hg=0;function ug(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dg(i){let e=new lg,t=cg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new B);let s=new B,r=new ot,o=new ot;function l(a){let h=0,d=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let p=0,_=0,b=0,m=0,f=0,S=0,R=0,v=0,M=0,w=0,C=0,x=0,E=0,I=0;a.sort(ug);for(let k=0,Y=a.length;k<Y;k++){let O=a[k],G=O.color,ee=O.intensity,K=O.distance,oe=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Qn?oe=O.shadow.map.texture:oe=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=G.r*ee,d+=G.g*ee,u+=G.b*ee;else if(O.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(O.sh.coefficients[Z],ee);I++}else if(O.isSunLight){let Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ie=O.shadow,V=t.get(O);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),n.sunShadow[_]=V,n.sunShadowMap[_]=oe;let he=ie.getViewportCount();for(let le=0;le<he;le++)n.sunShadowMatrix[b+le]=ie.getMatrix(le),n.sunShadowCascade[b+le]=ie._cascadeData[le];b+=he,_++}n.sun[p]=Z,p++}else if(O.isDirectionalLight){let Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ie=O.shadow,V=t.get(O);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=oe,n.directionalShadowMatrix[m]=O.shadow.matrix,M++}n.directional[m]=Z,m++}else if(O.isSpotLight){let Z=e.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(G).multiplyScalar(ee),Z.distance=K,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,n.spot[S]=Z;let ie=O.shadow;if(O.map&&(n.spotLightMap[x]=O.map,x++,ie.updateMatrices(O),O.castShadow&&E++),n.spotLightMatrix[S]=ie.matrix,O.castShadow){let V=t.get(O);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,n.spotShadow[S]=V,n.spotShadowMap[S]=oe,C++}S++}else if(O.isRectAreaLight){let Z=e.get(O);Z.color.copy(G).multiplyScalar(ee),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),n.rectArea[R]=Z,R++}else if(O.isPointLight){let Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){let ie=O.shadow,V=t.get(O);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,V.shadowCameraNear=ie.camera.near,V.shadowCameraFar=ie.camera.far,n.pointShadow[f]=V,n.pointShadowMap[f]=oe,n.pointShadowMatrix[f]=O.shadow.matrix,w++}n.point[f]=Z,f++}else if(O.isHemisphereLight){let Z=e.get(O);Z.skyColor.copy(O.color).multiplyScalar(ee),Z.groundColor.copy(O.groundColor).multiplyScalar(ee),n.hemi[v]=Z,v++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let F=n.hash;(F.sunLength!==p||F.directionalLength!==m||F.pointLength!==f||F.spotLength!==S||F.rectAreaLength!==R||F.hemiLength!==v||F.numSunShadows!==_||F.numDirectionalShadows!==M||F.numPointShadows!==w||F.numSpotShadows!==C||F.numSpotMaps!==x||F.numLightProbes!==I)&&(n.sun.length=p,n.directional.length=m,n.spot.length=S,n.rectArea.length=R,n.point.length=f,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,F.sunLength=p,F.directionalLength=m,F.pointLength=f,F.spotLength=S,F.rectAreaLength=R,F.hemiLength=v,F.numSunShadows=_,F.numDirectionalShadows=M,F.numPointShadows=w,F.numSpotShadows=C,F.numSpotMaps=x,F.numLightProbes=I,n.version=hg++)}function c(a,h){let d=0,u=0,p=0,_=0,b=0,m=0,f=h.matrixWorldInverse;for(let S=0,R=a.length;S<R;S++){let v=a[S];if(v.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),u++}else if(v.isSpotLight){let M=n.spot[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),_++}else if(v.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),b++}else if(v.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:n}}function fh(i){let e=new dg(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function l(u){n.push(u)}function c(u){s.push(u)}function a(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:a,setupLightsView:h,pushLight:o,pushShadow:l,pushLightProbeGrid:c}}function fg(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),l;return o===void 0?(l=new fh(i),e.set(s,[l])):r>=o.length?(l=new fh(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gg=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],xg=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],ph=new ot,Hs=new B,ul=new B;function _g(i,e,t){let n=new ki,s=new Ge,r=new Ge,o=new pt,l=new Or,c=new Br,a={},h=t.maxTextureSize,d={[Jn]:zt,[zt]:Jn,[It]:It},u=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new Yt;_.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new at(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let f=this.type;this.render=function(w,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===lc&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);let E=i.getRenderTarget(),I=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Mn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let Y=f!==this.type;Y&&C.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(G=>G.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,G=w.length;O<G;O++){let ee=w[O],K=ee.shadow;if(K===void 0){ke("WebGLShadowMap:",ee,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let oe=K.getFrameExtents();s.multiply(oe),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,K.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Z,K.map===null||Y===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Gi){if(ee.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Nt(s.x,s.y,{format:Qn,type:$t,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),K.map.texture.name=ee.name+".shadowMap",K.map.depthTexture=new Xn(s.x,s.y,tn),K.map.depthTexture.name=ee.name+".shadowMapDepth",K.map.depthTexture.format=xn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=At,K.map.depthTexture.magFilter=At}else ee.isPointLight?(K.map=new qo(s.x),K.map.depthTexture=new Ur(s.x,un)):(K.map=new Nt(s.x,s.y),K.map.depthTexture=new Xn(s.x,s.y,un)),K.map.depthTexture.name=ee.name+".shadowMap",K.map.depthTexture.format=xn,this.type===Is?(K.map.depthTexture.compareFunction=Z?Ho:Vo,K.map.depthTexture.minFilter=Rt,K.map.depthTexture.magFilter=Rt):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=At,K.map.depthTexture.magFilter=At);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let ie=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();ee.isPointLight!==!0&&K.updateMatrices(ee,x);for(let V=0;V<ie;V++){let he=K.getCamera(V);if(ee.isPointLight){let le=K.camera,ye=K.matrix,Fe=ee.distance||le.far;Fe!==le.far&&(le.far=Fe,le.updateProjectionMatrix()),Hs.setFromMatrixPosition(ee.matrixWorld),le.position.copy(Hs),ul.copy(le.position),ul.add(gg[V]),le.up.copy(xg[V]),le.lookAt(ul),le.updateMatrixWorld(),ye.makeTranslation(-Hs.x,-Hs.y,-Hs.z),ph.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),K._frustum.setFromProjectionMatrix(ph,le.coordinateSystem,le.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,V),i.clear();else{V===0&&(i.setRenderTarget(K.map),i.clear());let le=K.getViewport(V);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),k.viewport(o)}n=K.getFrustum(V),v(C,x,he,ee,this.type)}K.isPointLightShadow!==!0&&this.type===Gi&&S(K,x),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,I,F)};function S(w,C){let x=e.update(b);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Nt(s.x,s.y,{format:Qn,type:$t}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,x,u,b,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,x,p,b,null)}function R(w,C,x,E){let I=null,F=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)I=F;else if(I=x.isPointLight===!0?c:l,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let k=I.uuid,Y=C.uuid,O=a[k];O===void 0&&(O={},a[k]=O);let G=O[Y];G===void 0&&(G=I.clone(),O[Y]=G,C.addEventListener("dispose",M)),I=G}if(I.visible=C.visible,I.wireframe=C.wireframe,E===Gi?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let k=i.properties.get(I);k.light=x}return I}function v(w,C,x,E,I){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===Gi)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let Y=e.update(w),O=w.material;if(Array.isArray(O)){let G=Y.groups;for(let ee=0,K=G.length;ee<K;ee++){let oe=G[ee],Z=O[oe.materialIndex];if(Z&&Z.visible){let ie=R(w,Z,E,I);w.onBeforeShadow(i,w,C,x,Y,ie,oe),i.renderBufferDirect(x,null,Y,ie,w,oe),w.onAfterShadow(i,w,C,x,Y,ie,oe)}}}else if(O.visible){let G=R(w,O,E,I);w.onBeforeShadow(i,w,C,x,Y,G,null),i.renderBufferDirect(x,null,Y,G,w,null),w.onAfterShadow(i,w,C,x,Y,G,null)}}let k=w.children;for(let Y=0,O=k.length;Y<O;Y++)v(k[Y],C,x,E,I)}function M(w){w.target.removeEventListener("dispose",M);for(let x in a){let E=a[x],I=w.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function vg(i,e){function t(){let P=!1,fe=new pt,Q=null,ge=new pt(0,0,0,0);return{setMask:function(_e){Q!==_e&&!P&&(i.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){P=_e},setClear:function(_e,re,Te,ce,De){De===!0&&(_e*=ce,re*=ce,Te*=ce),fe.set(_e,re,Te,ce),ge.equals(fe)===!1&&(i.clearColor(_e,re,Te,ce),ge.copy(fe))},reset:function(){P=!1,Q=null,ge.set(-1,0,0,0)}}}function n(){let P=!1,fe=!1,Q=null,ge=null,_e=null;return{setReversed:function(re){if(fe!==re){let Te=e.get("EXT_clip_control");re?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),fe=re;let ce=_e;_e=null,this.setClear(ce)}},getReversed:function(){return fe},setTest:function(re){re?N(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(re){Q!==re&&!P&&(i.depthMask(re),Q=re)},setFunc:function(re){if(fe&&(re=Gc[re]),ge!==re){switch(re){case br:i.depthFunc(i.NEVER);break;case Sr:i.depthFunc(i.ALWAYS);break;case Mr:i.depthFunc(i.LESS);break;case Di:i.depthFunc(i.LEQUAL);break;case wr:i.depthFunc(i.EQUAL);break;case Er:i.depthFunc(i.GEQUAL);break;case Tr:i.depthFunc(i.GREATER);break;case Ar:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=re}},setLocked:function(re){P=re},setClear:function(re){_e!==re&&(_e=re,fe&&(re=1-re),i.clearDepth(re))},reset:function(){P=!1,Q=null,ge=null,_e=null,fe=!1}}}function s(){let P=!1,fe=null,Q=null,ge=null,_e=null,re=null,Te=null,ce=null,De=null;return{setTest:function(Ne){P||(Ne?N(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(Ne){fe!==Ne&&!P&&(i.stencilMask(Ne),fe=Ne)},setFunc:function(Ne,yt,bt){(Q!==Ne||ge!==yt||_e!==bt)&&(i.stencilFunc(Ne,yt,bt),Q=Ne,ge=yt,_e=bt)},setOp:function(Ne,yt,bt){(re!==Ne||Te!==yt||ce!==bt)&&(i.stencilOp(Ne,yt,bt),re=Ne,Te=yt,ce=bt)},setLocked:function(Ne){P=Ne},setClear:function(Ne){De!==Ne&&(i.clearStencil(Ne),De=Ne)},reset:function(){P=!1,fe=null,Q=null,ge=null,_e=null,re=null,Te=null,ce=null,De=null}}}let r=new t,o=new n,l=new s,c=new WeakMap,a=new WeakMap,h={},d={},u={},p=new WeakMap,_=[],b=null,m=!1,f=null,S=null,R=null,v=null,M=null,w=null,C=null,x=new Ce(0,0,0),E=0,I=!1,F=null,k=null,Y=null,O=null,G=null,ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,oe=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=oe>=2);let ie=null,V={},he=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),ye=new pt().fromArray(he),Fe=new pt().fromArray(le);function Le(P,fe,Q,ge){let _e=new Uint8Array(4),re=i.createTexture();i.bindTexture(P,re),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<Q;Te++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(fe+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return re}let T={};T[i.TEXTURE_2D]=Le(i.TEXTURE_2D,i.TEXTURE_2D,1),T[i.TEXTURE_CUBE_MAP]=Le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),T[i.TEXTURE_2D_ARRAY]=Le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),T[i.TEXTURE_3D]=Le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),N(i.DEPTH_TEST),o.setFunc(Di),Oe(!1),je(Na),N(i.CULL_FACE),Be(Mn);function N(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function j(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function de(P,fe){return u[P]!==fe?(i.bindFramebuffer(P,fe),u[P]=fe,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function ae(P,fe){let Q=_,ge=!1;if(P){Q=p.get(fe),Q===void 0&&(Q=[],p.set(fe,Q));let _e=P.textures;if(Q.length!==_e.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Te=_e.length;re<Te;re++)Q[re]=i.COLOR_ATTACHMENT0+re;Q.length=_e.length,ge=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ge=!0);ge&&i.drawBuffers(Q)}function Ee(P){return b!==P?(i.useProgram(P),b=P,!0):!1}let Je={[hi]:i.FUNC_ADD,[hc]:i.FUNC_SUBTRACT,[uc]:i.FUNC_REVERSE_SUBTRACT};Je[dc]=i.MIN,Je[fc]=i.MAX;let ze={[pc]:i.ZERO,[mc]:i.ONE,[gc]:i.SRC_COLOR,[Oa]:i.SRC_ALPHA,[Sc]:i.SRC_ALPHA_SATURATE,[yc]:i.DST_COLOR,[_c]:i.DST_ALPHA,[xc]:i.ONE_MINUS_SRC_COLOR,[Ba]:i.ONE_MINUS_SRC_ALPHA,[bc]:i.ONE_MINUS_DST_COLOR,[vc]:i.ONE_MINUS_DST_ALPHA,[Mc]:i.CONSTANT_COLOR,[wc]:i.ONE_MINUS_CONSTANT_COLOR,[Ec]:i.CONSTANT_ALPHA,[Tc]:i.ONE_MINUS_CONSTANT_ALPHA};function Be(P,fe,Q,ge,_e,re,Te,ce,De,Ne){if(P===Mn){m===!0&&(j(i.BLEND),m=!1);return}if(m===!1&&(N(i.BLEND),m=!0),P!==cc){if(P!==f||Ne!==I){if((S!==hi||M!==hi)&&(i.blendEquation(i.FUNC_ADD),S=hi,M=hi),Ne)switch(P){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFunc(i.ONE,i.ONE);break;case Ua:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",P);break}else switch(P){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ua:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fa:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",P);break}R=null,v=null,w=null,C=null,x.set(0,0,0),E=0,f=P,I=Ne}return}_e=_e||fe,re=re||Q,Te=Te||ge,(fe!==S||_e!==M)&&(i.blendEquationSeparate(Je[fe],Je[_e]),S=fe,M=_e),(Q!==R||ge!==v||re!==w||Te!==C)&&(i.blendFuncSeparate(ze[Q],ze[ge],ze[re],ze[Te]),R=Q,v=ge,w=re,C=Te),(ce.equals(x)===!1||De!==E)&&(i.blendColor(ce.r,ce.g,ce.b,De),x.copy(ce),E=De),f=P,I=!1}function Ye(P,fe){P.side===It?j(i.CULL_FACE):N(i.CULL_FACE);let Q=P.side===zt;fe&&(Q=!Q),Oe(Q),P.blending===Wi&&P.transparent===!1?Be(Mn):Be(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let ge=P.stencilWrite;l.setTest(ge),ge&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ve(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?N(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){F!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),F=P)}function je(P){P!==oc?(N(i.CULL_FACE),P!==k&&(P===Na?i.cullFace(i.BACK):P===ac?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),k=P}function tt(P){P!==Y&&(K&&i.lineWidth(P),Y=P)}function Ve(P,fe,Q){P?(N(i.POLYGON_OFFSET_FILL),(O!==fe||G!==Q)&&(O=fe,G=Q,o.getReversed()&&(fe=-fe),i.polygonOffset(fe,Q))):j(i.POLYGON_OFFSET_FILL)}function st(P){P?N(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function ct(P){P===void 0&&(P=i.TEXTURE0+ee-1),ie!==P&&(i.activeTexture(P),ie=P)}function L(P,fe,Q){Q===void 0&&(ie===null?Q=i.TEXTURE0+ee-1:Q=ie);let ge=V[Q];ge===void 0&&(ge={type:void 0,texture:void 0},V[Q]=ge),(ge.type!==P||ge.texture!==fe)&&(ie!==Q&&(i.activeTexture(Q),ie=Q),i.bindTexture(P,fe||T[P]),ge.type=P,ge.texture=fe)}function ft(){let P=V[ie];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function et(){try{i.compressedTexImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function g(){try{i.texSubImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function z(){try{i.texSubImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function pe(){try{i.texStorage2D(...arguments)}catch(P){He("WebGLState:",P)}}function xe(){try{i.texStorage3D(...arguments)}catch(P){He("WebGLState:",P)}}function ne(){try{i.texImage2D(...arguments)}catch(P){He("WebGLState:",P)}}function se(){try{i.texImage3D(...arguments)}catch(P){He("WebGLState:",P)}}function ve(P){return d[P]!==void 0?d[P]:i.getParameter(P)}function D(P,fe){d[P]!==fe&&(i.pixelStorei(P,fe),d[P]=fe)}function H(P){ye.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ye.copy(P))}function $(P){Fe.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Fe.copy(P))}function ue(P,fe){let Q=a.get(fe);Q===void 0&&(Q=new WeakMap,a.set(fe,Q));let ge=Q.get(P);ge===void 0&&(ge=i.getUniformBlockIndex(fe,P.name),Q.set(P,ge))}function me(P,fe){let ge=a.get(fe).get(P);c.get(fe)!==ge&&(i.uniformBlockBinding(fe,ge,P.__bindingPointIndex),c.set(fe,ge))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ie=null,V={},u={},p=new WeakMap,_=[],b=null,m=!1,f=null,S=null,R=null,v=null,M=null,w=null,C=null,x=new Ce(0,0,0),E=0,I=!1,F=null,k=null,Y=null,O=null,G=null,ye.set(0,0,i.canvas.width,i.canvas.height),Fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:N,disable:j,bindFramebuffer:de,drawBuffers:ae,useProgram:Ee,setBlending:Be,setMaterial:Ye,setFlipSided:Oe,setCullFace:je,setLineWidth:tt,setPolygonOffset:Ve,setScissorTest:st,activeTexture:ct,bindTexture:L,unbindTexture:ft,compressedTexImage2D:et,compressedTexImage3D:A,texImage2D:ne,texImage3D:se,pixelStorei:D,getParameter:ve,updateUBOMapping:ue,uniformBlockBinding:me,texStorage2D:pe,texStorage3D:xe,texSubImage2D:g,texSubImage3D:z,compressedTexSubImage2D:q,compressedTexSubImage3D:te,scissor:H,viewport:$,reset:we}}function yg(i,e,t,n,s,r,o){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new Ge,h=new WeakMap,d=new Set,u,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,g){return _?new OffscreenCanvas(A,g):ps("canvas")}function m(A,g,z){let q=1,te=et(A);if((te.width>z||te.height>z)&&(q=z/Math.max(te.width,te.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let pe=Math.floor(q*te.width),xe=Math.floor(q*te.height);u===void 0&&(u=b(pe,xe));let ne=g?b(pe,xe):u;return ne.width=pe,ne.height=xe,ne.getContext("2d").drawImage(A,0,0,pe,xe),ke("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+pe+"x"+xe+")."),ne}else return"data"in A&&ke("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function f(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,g,z,q,te,pe=!1){if(A!==null){if(i[A]!==void 0)return i[A];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let xe;q&&(xe=e.get("EXT_texture_norm16"),xe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=g;if(g===i.RED&&(z===i.FLOAT&&(ne=i.R32F),z===i.HALF_FLOAT&&(ne=i.R16F),z===i.UNSIGNED_BYTE&&(ne=i.R8),z===i.UNSIGNED_SHORT&&xe&&(ne=xe.R16_EXT),z===i.SHORT&&xe&&(ne=xe.R16_SNORM_EXT)),g===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(ne=i.R8UI),z===i.UNSIGNED_SHORT&&(ne=i.R16UI),z===i.UNSIGNED_INT&&(ne=i.R32UI),z===i.BYTE&&(ne=i.R8I),z===i.SHORT&&(ne=i.R16I),z===i.INT&&(ne=i.R32I)),g===i.RG&&(z===i.FLOAT&&(ne=i.RG32F),z===i.HALF_FLOAT&&(ne=i.RG16F),z===i.UNSIGNED_BYTE&&(ne=i.RG8),z===i.UNSIGNED_SHORT&&xe&&(ne=xe.RG16_EXT),z===i.SHORT&&xe&&(ne=xe.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(ne=i.RG8UI),z===i.UNSIGNED_SHORT&&(ne=i.RG16UI),z===i.UNSIGNED_INT&&(ne=i.RG32UI),z===i.BYTE&&(ne=i.RG8I),z===i.SHORT&&(ne=i.RG16I),z===i.INT&&(ne=i.RG32I)),g===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),z===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),z===i.UNSIGNED_INT&&(ne=i.RGB32UI),z===i.BYTE&&(ne=i.RGB8I),z===i.SHORT&&(ne=i.RGB16I),z===i.INT&&(ne=i.RGB32I)),g===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),z===i.UNSIGNED_INT&&(ne=i.RGBA32UI),z===i.BYTE&&(ne=i.RGBA8I),z===i.SHORT&&(ne=i.RGBA16I),z===i.INT&&(ne=i.RGBA32I)),g===i.RGB&&(z===i.UNSIGNED_SHORT&&xe&&(ne=xe.RGB16_EXT),z===i.SHORT&&xe&&(ne=xe.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),g===i.RGBA){let se=pe?fs:$e.getTransfer(te);z===i.FLOAT&&(ne=i.RGBA32F),z===i.HALF_FLOAT&&(ne=i.RGBA16F),z===i.UNSIGNED_BYTE&&(ne=se===it?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&xe&&(ne=xe.RGBA16_EXT),z===i.SHORT&&xe&&(ne=xe.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(A,g){let z;return A?g===null||g===un||g===qi?z=i.DEPTH24_STENCIL8:g===tn?z=i.DEPTH32F_STENCIL8:g===Xi&&(z=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===un||g===qi?z=i.DEPTH_COMPONENT24:g===tn?z=i.DEPTH_COMPONENT32F:g===Xi&&(z=i.DEPTH_COMPONENT16),z}function w(A,g){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==At&&A.minFilter!==Rt?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function C(A){let g=A.target;g.removeEventListener("dispose",C),E(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&d.delete(g)}function x(A){let g=A.target;g.removeEventListener("dispose",x),F(g)}function E(A){let g=n.get(A);if(g.__webglInit===void 0)return;let z=A.source,q=p.get(z);if(q){let te=q[g.__cacheKey];te.usedTimes--,te.usedTimes===0&&I(A),Object.keys(q).length===0&&p.delete(z)}n.remove(A)}function I(A){let g=n.get(A);i.deleteTexture(g.__webglTexture);let z=A.source,q=p.get(z);delete q[g.__cacheKey],o.memory.textures--}function F(A){let g=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let te=0;te<g.__webglFramebuffer[q].length;te++)i.deleteFramebuffer(g.__webglFramebuffer[q][te]);else i.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)i.deleteFramebuffer(g.__webglFramebuffer[q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let z=A.textures;for(let q=0,te=z.length;q<te;q++){let pe=n.get(z[q]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(z[q])}n.remove(A)}let k=0;function Y(){k=0}function O(){return k}function G(A){k=A}function ee(){let A=k;return A>=s.maxTextures&&ke("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,A}function K(A){let g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function oe(A,g){let z=n.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let q=A.image;if(q===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,A,g);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+g)}function Z(A,g){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){j(z,A,g);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+g)}function ie(A,g){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){j(z,A,g);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+g)}function V(A,g){let z=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){de(z,A,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+g)}let he={[Ni]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[Cr]:i.MIRRORED_REPEAT},le={[At]:i.NEAREST,[Rc]:i.NEAREST_MIPMAP_NEAREST,[Ds]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[to]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},ye={[Dc]:i.NEVER,[Bc]:i.ALWAYS,[Nc]:i.LESS,[Vo]:i.LEQUAL,[Uc]:i.EQUAL,[Ho]:i.GEQUAL,[Fc]:i.GREATER,[Oc]:i.NOTEQUAL};function Fe(A,g){if(g.type===tn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Rt||g.magFilter===to||g.magFilter===Ds||g.magFilter===Kn||g.minFilter===Rt||g.minFilter===to||g.minFilter===Ds||g.minFilter===Kn)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,he[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,he[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,he[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,le[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,le[g.minFilter]),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ye[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===At||g.minFilter!==Ds&&g.minFilter!==Kn||g.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Le(A,g){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",C));let q=g.source,te=p.get(q);te===void 0&&(te={},p.set(q,te));let pe=K(g);if(pe!==A.__cacheKey){te[pe]===void 0&&(te[pe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[pe].usedTimes++;let xe=te[A.__cacheKey];xe!==void 0&&(te[A.__cacheKey].usedTimes--,xe.usedTimes===0&&I(g)),A.__cacheKey=pe,A.__webglTexture=te[pe].texture}return z}function T(A,g,z){return Math.floor(Math.floor(A/z)/g)}function N(A,g,z,q){let pe=A.updateRanges;if(pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,z,q,g.data);else{pe.sort((D,H)=>D.start-H.start);let xe=0;for(let D=1;D<pe.length;D++){let H=pe[xe],$=pe[D],ue=H.start+H.count,me=T($.start,g.width,4),we=T(H.start,g.width,4);$.start<=ue+1&&me===we&&T($.start+$.count-1,g.width,4)===me?H.count=Math.max(H.count,$.start+$.count-H.start):(++xe,pe[xe]=$)}pe.length=xe+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let D=0,H=pe.length;D<H;D++){let $=pe[D],ue=Math.floor($.start/4),me=Math.ceil($.count/4),we=ue%g.width,P=Math.floor(ue/g.width),fe=me,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,we),t.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,we,P,fe,Q,z,q,g.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function j(A,g,z){let q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=i.TEXTURE_3D);let te=Le(A,g),pe=g.source;t.bindTexture(q,A.__webglTexture,i.TEXTURE0+z);let xe=n.get(pe);if(pe.version!==xe.__version||te===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let Q=$e.getPrimaries($e.workingColorSpace),ge=g.colorSpace===dn?null:$e.getPrimaries(g.colorSpace),_e=g.colorSpace===dn||Q===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let se=m(g.image,!1,s.maxTextureSize);se=ft(g,se);let ve=r.convert(g.format,g.colorSpace),D=r.convert(g.type),H=v(g.internalFormat,ve,D,g.normalized,g.colorSpace,g.isVideoTexture);Fe(q,g);let $,ue=g.mipmaps,me=g.isVideoTexture!==!0,we=xe.__version===void 0||te===!0,P=pe.dataReady,fe=w(g,se);if(g.isDepthTexture)H=M(g.format===jn,g.type),we&&(me?t.texStorage2D(i.TEXTURE_2D,1,H,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,H,se.width,se.height,0,ve,D,null));else if(g.isDataTexture)if(ue.length>0){me&&we&&t.texStorage2D(i.TEXTURE_2D,fe,H,ue[0].width,ue[0].height);for(let Q=0,ge=ue.length;Q<ge;Q++)$=ue[Q],me?P&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,$.width,$.height,ve,D,$.data):t.texImage2D(i.TEXTURE_2D,Q,H,$.width,$.height,0,ve,D,$.data);g.generateMipmaps=!1}else me?(we&&t.texStorage2D(i.TEXTURE_2D,fe,H,se.width,se.height),P&&N(g,se,ve,D)):t.texImage2D(i.TEXTURE_2D,0,H,se.width,se.height,0,ve,D,se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){me&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,H,ue[0].width,ue[0].height,se.depth);for(let Q=0,ge=ue.length;Q<ge;Q++)if($=ue[Q],g.format!==nn)if(ve!==null)if(me){if(P)if(g.layerUpdates.size>0){let _e=rl($.width,$.height,g.format,g.type);for(let re of g.layerUpdates){let Te=$.data.subarray(re*_e/$.data.BYTES_PER_ELEMENT,(re+1)*_e/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,re,$.width,$.height,1,ve,Te)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,$.width,$.height,se.depth,ve,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,H,$.width,$.height,se.depth,0,$.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,$.width,$.height,se.depth,ve,D,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,H,$.width,$.height,se.depth,0,ve,D,$.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{me&&we&&t.texStorage2D(i.TEXTURE_2D,fe,H,ue[0].width,ue[0].height);for(let Q=0,ge=ue.length;Q<ge;Q++)$=ue[Q],g.format!==nn?ve!==null?me?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,$.width,$.height,ve,$.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,H,$.width,$.height,0,$.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?P&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,$.width,$.height,ve,D,$.data):t.texImage2D(i.TEXTURE_2D,Q,H,$.width,$.height,0,ve,D,$.data)}else if(g.isDataArrayTexture)if(me){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,H,se.width,se.height,se.depth),P)if(g.layerUpdates.size>0){let Q=rl(se.width,se.height,g.format,g.type);for(let ge of g.layerUpdates){let _e=se.data.subarray(ge*Q/se.data.BYTES_PER_ELEMENT,(ge+1)*Q/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,se.width,se.height,1,ve,D,_e)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ve,D,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,H,se.width,se.height,se.depth,0,ve,D,se.data);else if(g.isData3DTexture)me?(we&&t.texStorage3D(i.TEXTURE_3D,fe,H,se.width,se.height,se.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ve,D,se.data)):t.texImage3D(i.TEXTURE_3D,0,H,se.width,se.height,se.depth,0,ve,D,se.data);else if(g.isFramebufferTexture){if(we)if(me)t.texStorage2D(i.TEXTURE_2D,fe,H,se.width,se.height);else{let Q=se.width,ge=se.height;for(let _e=0;_e<fe;_e++)t.texImage2D(i.TEXTURE_2D,_e,H,Q,ge,0,ve,D,null),Q>>=1,ge>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),se.parentNode!==Q){Q.appendChild(se),d.add(g),Q.onpaint=ge=>{let _e=ge.changedElements;for(let re of d)_e.includes(re.image)&&(re.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let _e=i.RGBA,re=i.RGBA,Te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_e,re,Te,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ue.length>0){if(me&&we){let Q=et(ue[0]);t.texStorage2D(i.TEXTURE_2D,fe,H,Q.width,Q.height)}for(let Q=0,ge=ue.length;Q<ge;Q++)$=ue[Q],me?P&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ve,D,$):t.texImage2D(i.TEXTURE_2D,Q,H,ve,D,$);g.generateMipmaps=!1}else if(me){if(we){let Q=et(se);t.texStorage2D(i.TEXTURE_2D,fe,H,Q.width,Q.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,D,se)}else t.texImage2D(i.TEXTURE_2D,0,H,ve,D,se);f(g)&&S(q),xe.__version=pe.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function de(A,g,z){if(g.image.length!==6)return;let q=Le(A,g),te=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let pe=n.get(te);if(te.version!==pe.__version||q===!0){t.activeTexture(i.TEXTURE0+z);let xe=$e.getPrimaries($e.workingColorSpace),ne=g.colorSpace===dn?null:$e.getPrimaries(g.colorSpace),se=g.colorSpace===dn||xe===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ve=g.isCompressedTexture||g.image[0].isCompressedTexture,D=g.image[0]&&g.image[0].isDataTexture,H=[];for(let re=0;re<6;re++)!ve&&!D?H[re]=m(g.image[re],!0,s.maxCubemapSize):H[re]=D?g.image[re].image:g.image[re],H[re]=ft(g,H[re]);let $=H[0],ue=r.convert(g.format,g.colorSpace),me=r.convert(g.type),we=v(g.internalFormat,ue,me,g.normalized,g.colorSpace),P=g.isVideoTexture!==!0,fe=pe.__version===void 0||q===!0,Q=te.dataReady,ge=w(g,$);Fe(i.TEXTURE_CUBE_MAP,g);let _e;if(ve){P&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,we,$.width,$.height);for(let re=0;re<6;re++){_e=H[re].mipmaps;for(let Te=0;Te<_e.length;Te++){let ce=_e[Te];g.format!==nn?ue!==null?P?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,we,ce.width,ce.height,0,ce.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,0,0,ce.width,ce.height,ue,me,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te,we,ce.width,ce.height,0,ue,me,ce.data)}}}else{if(_e=g.mipmaps,P&&fe){_e.length>0&&ge++;let re=et(H[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,we,re.width,re.height)}for(let re=0;re<6;re++)if(D){P?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,H[re].width,H[re].height,ue,me,H[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,we,H[re].width,H[re].height,0,ue,me,H[re].data);for(let Te=0;Te<_e.length;Te++){let De=_e[Te].image[re].image;P?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,0,0,De.width,De.height,ue,me,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,we,De.width,De.height,0,ue,me,De.data)}}else{P?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ue,me,H[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,we,ue,me,H[re]);for(let Te=0;Te<_e.length;Te++){let ce=_e[Te];P?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,0,0,ue,me,ce.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te+1,we,ue,me,ce.image[re])}}}f(g)&&S(i.TEXTURE_CUBE_MAP),pe.__version=te.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function ae(A,g,z,q,te,pe){let xe=r.convert(z.format,z.colorSpace),ne=r.convert(z.type),se=v(z.internalFormat,xe,ne,z.normalized,z.colorSpace),ve=n.get(g),D=n.get(z);if(D.__renderTarget=g,!ve.__hasExternalTextures){let H=Math.max(1,g.width>>pe),$=Math.max(1,g.height>>pe);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,pe,se,H,$,g.depth,0,xe,ne,null):t.texImage2D(te,pe,se,H,$,0,xe,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ct(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,te,D.__webglTexture,0,st(g)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,te,D.__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(A,g,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer){let q=g.depthTexture,te=q&&q.isDepthTexture?q.type:null,pe=M(g.stencilBuffer,te),xe=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ct(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(g),pe,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(g),pe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,pe,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,A)}else{let q=g.textures;for(let te=0;te<q.length;te++){let pe=q[te],xe=r.convert(pe.format,pe.colorSpace),ne=r.convert(pe.type),se=v(pe.internalFormat,xe,ne,pe.normalized,pe.colorSpace);ct(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(g),se,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(g),se,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,se,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Je(A,g,z){let q=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(g.depthTexture);if(te.__renderTarget=g,(!te.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q){if(te.__webglInit===void 0&&(te.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,g.depthTexture);let ve=r.convert(g.depthTexture.format),D=r.convert(g.depthTexture.type),H;g.depthTexture.format===xn?H=i.DEPTH_COMPONENT24:g.depthTexture.format===jn&&(H=i.DEPTH24_STENCIL8);for(let $=0;$<6;$++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,H,g.width,g.height,0,ve,D,null)}}else oe(g.depthTexture,0);let pe=te.__webglTexture,xe=st(g),ne=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,se=g.depthTexture.format===jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===xn)ct(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ne,pe,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,se,ne,pe,0);else if(g.depthTexture.format===jn)ct(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ne,pe,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,se,ne,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(A){let g=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){let te=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",te)};q.addEventListener("dispose",te),g.__depthDisposeCallback=te}g.__boundDepthTexture=q}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(z)for(let q=0;q<6;q++)Je(g.__webglFramebuffer[q],A,q);else{let q=A.texture.mipmaps;q&&q.length>0?Je(g.__webglFramebuffer[0],A,0):Je(g.__webglFramebuffer,A,0)}else if(z){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=i.createRenderbuffer(),Ee(g.__webglDepthbuffer[q],A,!1);else{let te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=g.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,pe)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ee(g.__webglDepthbuffer,A,!1);else{let te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,pe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(A,g,z){let q=n.get(A);g!==void 0&&ae(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ze(A)}function Ye(A){let g=A.texture,z=n.get(A),q=n.get(g);A.addEventListener("dispose",x);let te=A.textures,pe=A.isWebGLCubeRenderTarget===!0,xe=te.length>1;if(xe||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=g.version,o.memory.textures++),pe){z.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[ne]=[];for(let se=0;se<g.mipmaps.length;se++)z.__webglFramebuffer[ne][se]=i.createFramebuffer()}else z.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)z.__webglFramebuffer[ne]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ne=0,se=te.length;ne<se;ne++){let ve=n.get(te[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&ct(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ne=0;ne<te.length;ne++){let se=te[ne];z.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ne]);let ve=r.convert(se.format,se.colorSpace),D=r.convert(se.type),H=v(se.internalFormat,ve,D,se.normalized,se.colorSpace,A.isXRRenderTarget===!0),$=st(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,H,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,z.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let se=0;se<g.mipmaps.length;se++)ae(z.__webglFramebuffer[ne][se],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se);else ae(z.__webglFramebuffer[ne],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);f(g)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ne=0,se=te.length;ne<se;ne++){let ve=te[ne],D=n.get(ve),H=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(H=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(H,D.__webglTexture),Fe(H,ve),ae(z.__webglFramebuffer,A,ve,i.COLOR_ATTACHMENT0+ne,H,0),f(ve)&&S(H)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,q.__webglTexture),Fe(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let se=0;se<g.mipmaps.length;se++)ae(z.__webglFramebuffer[se],A,g,i.COLOR_ATTACHMENT0,ne,se);else ae(z.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,ne,0);f(g)&&S(ne),t.unbindTexture()}A.depthBuffer&&ze(A)}function Oe(A){let g=A.textures;for(let z=0,q=g.length;z<q;z++){let te=g[z];if(f(te)){let pe=R(A),xe=n.get(te).__webglTexture;t.bindTexture(pe,xe),S(pe),t.unbindTexture()}}}let je=[],tt=[];function Ve(A){if(A.samples>0){if(ct(A)===!1){let g=A.textures,z=A.width,q=A.height,te=i.COLOR_BUFFER_BIT,pe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(A),ne=g.length>1;if(ne)for(let ve=0;ve<g.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let se=A.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);let D=n.get(g[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,te,i.NEAREST),c===!0&&(je.length=0,tt.length=0,je.push(i.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(je.push(pe),tt.push(pe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<g.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);let D=n.get(g[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let g=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function st(A){return Math.min(s.maxSamples,A.samples)}function ct(A){let g=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(A){let g=o.render.frame;h.get(A)!==g&&(h.set(A,g),A.update())}function ft(A,g){let z=A.colorSpace,q=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==ds&&z!==dn&&($e.getTransfer(z)===it?(q!==nn||te!==Vt)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",z)),g}function et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(a.width=A.naturalWidth||A.width,a.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(a.width=A.displayWidth,a.height=A.displayHeight):(a.width=A.width,a.height=A.height),a}this.allocateTextureUnit=ee,this.resetTextureUnits=Y,this.getTextureUnits=O,this.setTextureUnits=G,this.setTexture2D=oe,this.setTexture2DArray=Z,this.setTexture3D=ie,this.setTextureCube=V,this.rebindTextures=Be,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function bg(i,e){function t(n,s=dn){let r,o=$e.getTransfer(s);if(n===Vt)return i.UNSIGNED_BYTE;if(n===io)return i.UNSIGNED_SHORT_4_4_4_4;if(n===so)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$a)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ka)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Za)return i.BYTE;if(n===Ja)return i.SHORT;if(n===Xi)return i.UNSIGNED_SHORT;if(n===no)return i.INT;if(n===un)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===$t)return i.HALF_FLOAT;if(n===ja)return i.ALPHA;if(n===Qa)return i.RGB;if(n===nn)return i.RGBA;if(n===xn)return i.DEPTH_COMPONENT;if(n===jn)return i.DEPTH_STENCIL;if(n===ro)return i.RED;if(n===oo)return i.RED_INTEGER;if(n===Qn)return i.RG;if(n===ao)return i.RG_INTEGER;if(n===lo)return i.RGBA_INTEGER;if(n===Ns||n===Us||n===Fs||n===Os)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ns)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ns)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===co||n===ho||n===uo||n===fo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===mo||n===go||n===xo||n===_o||n===Bs||n===vo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===po||n===mo)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===go)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xo)return r.COMPRESSED_R11_EAC;if(n===_o)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Bs)return r.COMPRESSED_RG11_EAC;if(n===vo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yo||n===bo||n===So||n===Mo||n===wo||n===Eo||n===To||n===Ao||n===Co||n===Ro||n===Io||n===Po||n===Lo||n===Do)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===So)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===To)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ao)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Co)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ro)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Io)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Po)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Do)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===No||n===Uo||n===Fo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===No)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oo||n===Bo||n===zs||n===zo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ss(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ct({vertexShader:Sg,fragmentShader:Mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yl=class extends _n{constructor(e,t){super();let n=this,s=null,r=1,o=null,l="local-floor",c=1,a=null,h=null,d=null,u=null,p=null,_=null,b=typeof XRWebGLBinding<"u",m=new vl,f={},S=t.getContextAttributes(),R=null,v=null,M=[],w=[],C=new Ge,x=null,E=null,I=new St;I.viewport=new pt;let F=new St;F.viewport=new pt;let k=[I,F],Y=new jr,O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let N=M[T];return N===void 0&&(N=new Bi,M[T]=N),N.getTargetRaySpace()},this.getControllerGrip=function(T){let N=M[T];return N===void 0&&(N=new Bi,M[T]=N),N.getGripSpace()},this.getHand=function(T){let N=M[T];return N===void 0&&(N=new Bi,M[T]=N),N.getHandSpace()};function ee(T){let N=w.indexOf(T.inputSource);if(N===-1)return;let j=M[N];j!==void 0&&(j.update(T.inputSource,T.frame,a||o),j.dispatchEvent({type:T.type,data:T.inputSource}))}function K(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",oe);for(let T=0;T<M.length;T++){let N=w[T];N!==null&&(w[T]=null,M[T].disconnect(N))}O=null,G=null,m.reset();for(let T in f)delete f[T];if(e.setRenderTarget(R),p=null,u=null,d=null,s=null,v=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),E!==null){let T=E.camera;T.fov=E.fov,T.zoom=E.zoom,T.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){l=T,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(T){a=T},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(T){if(s=T,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",K),s.addEventListener("inputsourceschange",oe),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,de=null,ae=null;S.depth&&(ae=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=S.stencil?jn:xn,de=S.stencil?qi:un);let Ee={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ee),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Nt(u.textureWidth,u.textureHeight,{format:nn,type:Vt,depthTexture:new Xn(u.textureWidth,u.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let j={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Nt(p.framebufferWidth,p.framebufferHeight,{format:nn,type:Vt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),a=null,o=await s.requestReferenceSpace(l),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(T){for(let N=0;N<T.removed.length;N++){let j=T.removed[N],de=w.indexOf(j);de>=0&&(w[de]=null,M[de].disconnect(j))}for(let N=0;N<T.added.length;N++){let j=T.added[N],de=w.indexOf(j);if(de===-1){for(let Ee=0;Ee<M.length;Ee++)if(Ee>=w.length){w.push(j),de=Ee;break}else if(w[Ee]===null){w[Ee]=j,de=Ee;break}if(de===-1)break}let ae=M[de];ae&&ae.connect(j)}}let Z=new B,ie=new B;function V(T,N,j){Z.setFromMatrixPosition(N.matrixWorld),ie.setFromMatrixPosition(j.matrixWorld);let de=Z.distanceTo(ie),ae=N.projectionMatrix.elements,Ee=j.projectionMatrix.elements,Je=ae[14]/(ae[10]-1),ze=ae[14]/(ae[10]+1),Be=(ae[9]+1)/ae[5],Ye=(ae[9]-1)/ae[5],Oe=(ae[8]-1)/ae[0],je=(Ee[8]+1)/Ee[0],tt=Je*Oe,Ve=Je*je,st=de/(-Oe+je),ct=st*-Oe;if(N.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(ct),T.translateZ(st),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),ae[10]===-1)T.projectionMatrix.copy(N.projectionMatrix),T.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let L=Je+st,ft=ze+st,et=tt-ct,A=Ve+(de-ct),g=Be*ze/ft*L,z=Ye*ze/ft*L;T.projectionMatrix.makePerspective(et,A,g,z,L,ft),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}}function he(T,N){N===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(N.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(s===null)return;let N=T.near,j=T.far;m.texture!==null&&(m.depthNear>0&&(N=m.depthNear),m.depthFar>0&&(j=m.depthFar)),Y.near=F.near=I.near=N,Y.far=F.far=I.far=j,(O!==Y.near||G!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),O=Y.near,G=Y.far),Y.layers.mask=T.layers.mask|6,I.layers.mask=Y.layers.mask&-5,F.layers.mask=Y.layers.mask&-3;let de=T.parent,ae=Y.cameras;he(Y,de);for(let Ee=0;Ee<ae.length;Ee++)he(ae[Ee],de);ae.length===2?V(Y,I,F):Y.projectionMatrix.copy(I.projectionMatrix),E===null&&T.isPerspectiveCamera&&(E={camera:T,fov:T.fov,zoom:T.zoom}),le(T,Y,de)};function le(T,N,j){j===null?T.matrix.copy(N.matrixWorld):(T.matrix.copy(j.matrixWorld),T.matrix.invert(),T.matrix.multiply(N.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(N.projectionMatrix),T.projectionMatrixInverse.copy(N.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=Ir*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(T){c=T,u!==null&&(u.fixedFoveation=T),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=T)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(T){return f[T]};let ye=null;function Fe(T,N){if(h=N.getViewerPose(a||o),_=N,h!==null){let j=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let de=!1;j.length!==Y.cameras.length&&(Y.cameras.length=0,de=!0);for(let ze=0;ze<j.length;ze++){let Be=j[ze],Ye=null;if(p!==null)Ye=p.getViewport(Be);else{let je=d.getViewSubImage(u,Be);Ye=je.viewport,ze===0&&(e.setRenderTargetTextures(v,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(v))}let Oe=k[ze];Oe===void 0&&(Oe=new St,Oe.layers.enable(ze),Oe.viewport=new pt,k[ze]=Oe),Oe.matrix.fromArray(Be.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Be.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ze===0&&(Y.matrix.copy(Oe.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),de===!0&&Y.cameras.push(Oe)}let ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){d=n.getBinding();let ze=d.getDepthInformation(j[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,s.renderState)}if(ae&&ae.includes("camera-access")&&b){e.state.unbindTexture(),d=n.getBinding();for(let ze=0;ze<j.length;ze++){let Be=j[ze].camera;if(Be){let Ye=f[Be];Ye||(Ye=new Ss,f[Be]=Ye);let Oe=d.getCameraImage(Be);Ye.sourceTexture=Oe}}}}for(let j=0;j<M.length;j++){let de=w[j],ae=M[j];de!==null&&ae!==void 0&&ae.update(de,N,a||o)}ye&&ye(T,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),_=null}let Le=new mh;Le.setAnimationLoop(Fe),this.setAnimationLoop=function(T){ye=T},this.dispose=function(){}}},wg=new ot,bh=new We;bh.set(-1,0,0,0,1,0,0,0,1);function Eg(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,nl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,R,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),b(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&l(m,f)):f.isPointsMaterial?c(m,f,S,R):f.isSpriteMaterial?a(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=e.get(f),R=S.envMap,v=S.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(wg.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bh),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function l(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=R*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){let S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tg(i,e,t,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){let w=M.program;n.uniformBlockBinding(v,w)}function a(v,M){let w=s[v.id];w===void 0&&(m(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",S));let C=M.program;n.updateUBOMapping(v,C);let x=e.render.frame;r[v.id]!==x&&(u(v),r[v.id]=x)}function h(v){let M=d();v.__bindingPointIndex=M;let w=i.createBuffer(),C=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function d(){for(let v=0;v<l;v++)if(o.indexOf(v)===-1)return o.push(v),v;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let M=s[v.id],w=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,E=w.length;x<E;x++){let I=w[x];if(Array.isArray(I))for(let F=0,k=I.length;F<k;F++)p(I[F],x,F,C);else p(I,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,M,w,C){if(b(v,M,w,C)===!0){let x=v.__offset,E=v.value;if(Array.isArray(E)){let I=0;for(let F=0;F<E.length;F++){let k=E[F],Y=f(k);_(k,v.__data,I),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function _(v,M,w){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,w)}function b(v,M,w,C){let x=v.value,E=M+"_"+w;if(C[E]===void 0)return typeof x=="number"||typeof x=="boolean"?C[E]=x:ArrayBuffer.isView(x)?C[E]=x.slice():C[E]=x.clone(),!0;{let I=C[E];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return C[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function m(v){let M=v.uniforms,w=0,C=16;for(let E=0,I=M.length;E<I;E++){let F=Array.isArray(M[E])?M[E]:[M[E]];for(let k=0,Y=F.length;k<Y;k++){let O=F[k],G=Array.isArray(O.value)?O.value:[O.value];for(let ee=0,K=G.length;ee<K;ee++){let oe=G[ee],Z=f(oe),ie=w%C,V=ie%Z.boundary,he=ie+V;w+=V,he!==0&&C-he<Z.storage&&(w+=C-he),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=w,w+=Z.storage}}}let x=w%C;return x>0&&(w+=C-x),v.__size=w,v.__cache={},this}function f(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",v),M}function S(v){let M=v.target;M.removeEventListener("dispose",S);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function R(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:a,dispose:R}}var Ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wn=null;function Cg(){return wn===null&&(wn=new vs(Ag,16,16,Qn,$t),wn.name="DFG_LUT",wn.minFilter=Rt,wn.magFilter=Rt,wn.wrapS=gn,wn.wrapT=gn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}var $i=class{constructor(e={}){let{canvas:t=kc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:a=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Vt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let b=p,m=new Set([lo,ao,oo]),f=new Set([Vt,un,Xi,qi,io,so]),S=new Uint32Array(4),R=new Int32Array(4),v=new B,M=null,w=null,C=[],x=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,F=!1,k=null,Y=null,O=null,G=null;this._outputColorSpace=vt;let ee=0,K=0,oe=null,Z=-1,ie=null,V=new pt,he=new pt,le=null,ye=new Ce(0),Fe=0,Le=t.width,T=t.height,N=1,j=null,de=null,ae=new pt(0,0,Le,T),Ee=new pt(0,0,Le,T),Je=!1,ze=new ki,Be=!1,Ye=!1,Oe=new ot,je=new B,tt=new pt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function ct(){return oe===null?N:1}let L=n;function ft(y,U){return t.getContext(y,U)}let et,A,g,z,q,te,pe,xe,ne,se,ve,D,H,$,ue,me,we,P,fe,Q,ge,_e,re;try{let y={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:a,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",yt,!1),L===null){let U="webgl2";if(L=ft(U,y),L===null)throw ft(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(y){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",yt,!1),He("WebGLRenderer: "+y.message),y}function Te(){et=new Up(L),et.init(),ge=new bg(L,et),A=new Ep(L,et,e,ge),g=new vg(L,et),A.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),Y=L.createFramebuffer(),O=L.createFramebuffer(),G=L.createFramebuffer(),z=new Bp(L),q=new rg,te=new yg(L,et,g,q,A,ge,z),pe=new Np(I),xe=new zu(L),_e=new Mp(L,xe),ne=new Fp(L,xe,z,_e),se=new kp(L,ne,xe,_e,z),P=new zp(L,A,te),ue=new Tp(q),ve=new sg(I,pe,et,A,_e,ue),D=new Eg(I,q),H=new ag,$=new fg(et),we=new Sp(I,pe,g,se,_,c),me=new _g(I,se,A),re=new Tg(L,z,A,g),fe=new wp(L,et,z),Q=new Op(L,et,z),z.programs=ve.programs,I.capabilities=A,I.extensions=et,I.properties=q,I.renderLists=H,I.shadowMap=me,I.state=g,I.info=z}b!==Vt&&(E=new Hp(b,t.width,t.height,l,s,r));let ce=new yl(I,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=et.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=et.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(y){y!==void 0&&(N=y,this.setSize(Le,T,!1))},this.getSize=function(y){return y.set(Le,T)},this.setSize=function(y,U,J=!0){if(ce.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Le=y,T=U,t.width=Math.floor(y*N),t.height=Math.floor(U*N),J===!0&&(t.style.width=y+"px",t.style.height=U+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Le*N,T*N).floor()},this.setDrawingBufferSize=function(y,U,J){Le=y,T=U,N=J,t.width=Math.floor(y*J),t.height=Math.floor(U*J),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(b===Vt){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(V)},this.getViewport=function(y){return y.copy(ae)},this.setViewport=function(y,U,J,W){y.isVector4?ae.set(y.x,y.y,y.z,y.w):ae.set(y,U,J,W),g.viewport(V.copy(ae).multiplyScalar(N).round())},this.getScissor=function(y){return y.copy(Ee)},this.setScissor=function(y,U,J,W){y.isVector4?Ee.set(y.x,y.y,y.z,y.w):Ee.set(y,U,J,W),g.scissor(he.copy(Ee).multiplyScalar(N).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(y){g.setScissorTest(Je=y)},this.setOpaqueSort=function(y){j=y},this.setTransparentSort=function(y){de=y},this.getClearColor=function(y){return y.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,J=!0){let W=0;if(y){let X=!1;if(oe!==null){let Me=oe.texture.format;X=m.has(Me)}if(X){let Me=oe.texture.type,Re=f.has(Me),Se=we.getClearColor(),Ie=we.getClearAlpha(),Ue=Se.r,Xe=Se.g,Ze=Se.b;Re?(S[0]=Ue,S[1]=Xe,S[2]=Ze,S[3]=Ie,L.clearBufferuiv(L.COLOR,0,S)):(R[0]=Ue,R[1]=Xe,R[2]=Ze,R[3]=Ie,L.clearBufferiv(L.COLOR,0,R))}else W|=L.COLOR_BUFFER_BIT}U&&(W|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),k=y},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",yt,!1),we.dispose(),H.dispose(),$.dispose(),q.dispose(),pe.dispose(),se.dispose(),_e.dispose(),re.dispose(),ve.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Cl),ce.removeEventListener("sessionend",Rl),ii.stop()};function De(y){y.preventDefault(),tl("WebGLRenderer: Context Lost."),F=!0}function Ne(){tl("WebGLRenderer: Context Restored."),F=!1;let y=z.autoReset,U=me.enabled,J=me.autoUpdate,W=me.needsUpdate,X=me.type;Te(),z.autoReset=y,me.enabled=U,me.autoUpdate=J,me.needsUpdate=W,me.type=X}function yt(y){He("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function bt(y){let U=y.target;U.removeEventListener("dispose",bt),Tn(U)}function Tn(y){$s(y),q.remove(y)}function $s(y){let U=q.get(y).programs;U!==void 0&&(U.forEach(function(J){ve.releaseProgram(J)}),y.isShaderMaterial&&ve.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,J,W,X,Me){U===null&&(U=Ve);let Re=X.isMesh&&X.matrixWorld.determinantAffine()<0,Se=Qh(y,U,J,W,X);g.setMaterial(W,Re);let Ie=J.index,Ue=1;if(W.wireframe===!0){if(Ie=ne.getWireframeAttribute(J),Ie===void 0)return;Ue=2}let Xe=J.drawRange,Ze=J.attributes.position,Pe=Xe.start*Ue,nt=(Xe.start+Xe.count)*Ue;Me!==null&&(Pe=Math.max(Pe,Me.start*Ue),nt=Math.min(nt,(Me.start+Me.count)*Ue)),Ie!==null?(Pe=Math.max(Pe,0),nt=Math.min(nt,Ie.count)):Ze!=null&&(Pe=Math.max(Pe,0),nt=Math.min(nt,Ze.count));let xt=nt-Pe;if(xt<0||xt===1/0)return;_e.setup(X,W,Se,J,Ie);let ut,lt=fe;if(Ie!==null&&(ut=xe.get(Ie),lt=Q,lt.setIndex(ut)),X.isMesh)W.wireframe===!0?(g.setLineWidth(W.wireframeLinewidth*ct()),lt.setMode(L.LINES)):lt.setMode(L.TRIANGLES);else if(X.isLine){let Pt=W.linewidth;Pt===void 0&&(Pt=1),g.setLineWidth(Pt*ct()),X.isLineSegments?lt.setMode(L.LINES):X.isLineLoop?lt.setMode(L.LINE_LOOP):lt.setMode(L.LINE_STRIP)}else X.isPoints?lt.setMode(L.POINTS):X.isSprite&&lt.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(et.get("WEBGL_multi_draw"))lt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Pt=X._multiDrawStarts,Ae=X._multiDrawCounts,Ft=X._multiDrawCount,Qe=Ie?xe.get(Ie).bytesPerElement:1,Kt=q.get(W).currentProgram.getUniforms();for(let pn=0;pn<Ft;pn++)Kt.setValue(L,"_gl_DrawID",pn),lt.render(Pt[pn]/Qe,Ae[pn])}else if(X.isInstancedMesh)lt.renderInstances(Pe,xt,X.count);else if(J.isInstancedBufferGeometry){let Pt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ae=Math.min(J.instanceCount,Pt);lt.renderInstances(Pe,xt,Ae)}else lt.render(Pe,xt)};function mi(y,U,J,W){k!==null&&y.isNodeMaterial&&k.setObject(W,y),Be===!0&&ue.setState(y,J,!1),y.transparent===!0&&y.side===It&&y.forceSinglePass===!1?(y.side=zt,y.needsUpdate=!0,js(y,U,W),y.side=Jn,y.needsUpdate=!0,js(y,U,W),y.side=It):js(y,U,W)}this.compile=function(y,U,J=null){J===null&&(J=y),k!==null&&k.renderStart(y,U,J),w=$.get(J),w.init(U),x.push(w),J.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),y!==J&&y.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),k!==null&&k.updateLights(w.state.lightsArray),Ye=this.localClippingEnabled,Be=ue.init(this.clippingPlanes,Ye),Be===!0&&ue.setGlobalState(this.clippingPlanes,U),k!==null&&me.render(w.state.shadowsArray,J,U);let W=new Set;return y.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Me=X.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){let Se=Me[Re];mi(Se,J,U,X),W.add(Se)}else mi(Me,J,U,X),W.add(Me)}),w=x.pop(),k!==null&&k.renderEnd(),W},this.compileAsync=function(y,U,J=null){let W=this.compile(y,U,J);return new Promise(X=>{function Me(){if(W.forEach(function(Re){let Ie=q.get(Re).currentProgram;(Ie===void 0||Ie.isReady())&&W.delete(Re)}),W.size===0){X(y);return}setTimeout(Me,10)}et.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ni=null;function Kh(y){ni&&ni(y)}function Cl(){ii.stop()}function Rl(){ii.start()}let ii=new mh;ii.setAnimationLoop(Kh),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(y){ni=y,ce.setAnimationLoop(y),y===null?ii.stop():ii.start()},ce.addEventListener("sessionstart",Cl),ce.addEventListener("sessionend",Rl),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;k!==null&&k.renderStart(y,U);let J=ce.enabled===!0&&ce.isPresenting===!0,W=E!==null&&(oe===null||J)&&E.begin(I,oe);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),y.isScene===!0&&y.onBeforeRender(I,y,U,oe),w=$.get(y,x.length),w.init(U),w.state.textureUnits=te.getTextureUnits(),x.push(w),Oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ze.setFromProjectionMatrix(Oe,ln,U.reversedDepth),Ye=this.localClippingEnabled,Be=ue.init(this.clippingPlanes,Ye),M=H.get(y,C.length),M.init(),C.push(M),ce.enabled===!0&&ce.isPresenting===!0){let Re=I.xr.getDepthSensingMesh();Re!==null&&ia(Re,U,-1/0,I.sortObjects)}ia(y,U,0,I.sortObjects),M.finish(),k!==null&&k.updateLights(w.state.lightsArray),I.sortObjects===!0&&M.sort(j,de),st=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,st&&we.addToRenderList(M,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&ue.beginShadows();let X=w.state.shadowsArray;if(me.render(X,y,U),Be===!0&&ue.endShadows(),(W&&E.hasRenderPass())===!1){let Re=M.opaque,Se=M.transmissive;if(w.setupLights(),U.isArrayCamera){let Ie=U.cameras;if(Se.length>0)for(let Ue=0,Xe=Ie.length;Ue<Xe;Ue++){let Ze=Ie[Ue];Pl(Re,Se,y,Ze)}st&&we.render(y);for(let Ue=0,Xe=Ie.length;Ue<Xe;Ue++){let Ze=Ie[Ue];Il(M,y,Ze,Ze.viewport)}}else Se.length>0&&Pl(Re,Se,y,U),st&&we.render(y),Il(M,y,U)}oe!==null&&K===0&&(te.updateMultisampleRenderTarget(oe),te.updateRenderTargetMipmap(oe)),W&&E.end(I),y.isScene===!0&&y.onAfterRender(I,y,U),_e.resetDefaultState(),Z=-1,ie=null,x.pop(),x.length>0?(w=x[x.length-1],te.setTextureUnits(w.state.textureUnits),Be===!0&&ue.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,k!==null&&k.renderEnd()};function ia(y,U,J,W){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)J=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLightProbeGrid)w.pushLightProbeGrid(y);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(ze)){W&&tt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Oe);let Re=se.update(y),Se=y.material;Se.visible&&M.push(y,Re,Se,J,tt.z,null,U)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(ze))){let Re=se.update(y),Se=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),tt.copy(y.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),tt.copy(Re.boundingSphere.center)),tt.applyMatrix4(y.matrixWorld).applyMatrix4(Oe)),Array.isArray(Se)){let Ie=Re.groups;for(let Ue=0,Xe=Ie.length;Ue<Xe;Ue++){let Ze=Ie[Ue],Pe=Se[Ze.materialIndex];Pe&&Pe.visible&&M.push(y,Re,Pe,J,tt.z,Ze,U)}}else Se.visible&&M.push(y,Re,Se,J,tt.z,null,U)}}let Me=y.children;for(let Re=0,Se=Me.length;Re<Se;Re++)ia(Me[Re],U,J,W)}function Il(y,U,J,W){let{opaque:X,transmissive:Me,transparent:Re}=y;w.setupLightsView(J),Be===!0&&ue.setGlobalState(I.clippingPlanes,J),W&&g.viewport(V.copy(W)),X.length>0&&Ks(X,U,J),Me.length>0&&Ks(Me,U,J),Re.length>0&&Ks(Re,U,J),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Pl(y,U,J,W){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){let Pe=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new Nt(1,1,{generateMipmaps:!0,type:Pe?$t:Vt,minFilter:Kn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let Me=w.state.transmissionRenderTarget[W.id],Re=W.viewport||V;Me.setSize(Re.z*I.transmissionResolutionScale,Re.w*I.transmissionResolutionScale);let Se=I.getRenderTarget(),Ie=I.getActiveCubeFace(),Ue=I.getActiveMipmapLevel();I.setRenderTarget(Me),I.getClearColor(ye),Fe=I.getClearAlpha(),Fe<1&&I.setClearColor(16777215,.5),I.clear(),st&&we.render(J);let Xe=I.toneMapping;I.toneMapping=Jt;let Ze=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),Be===!0&&ue.setGlobalState(I.clippingPlanes,W),Ks(y,J,W),te.updateMultisampleRenderTarget(Me),te.updateRenderTargetMipmap(Me),et.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let nt=0,xt=U.length;nt<xt;nt++){let ut=U[nt],{object:lt,geometry:Pt,material:Ae,group:Ft}=ut;if(Ae.side===It&&lt.layers.test(W.layers)){let Qe=Ae.side;Ae.side=zt,Ae.needsUpdate=!0,Ll(lt,J,W,Pt,Ae,Ft),Ae.side=Qe,Ae.needsUpdate=!0,Pe=!0}}Pe===!0&&(te.updateMultisampleRenderTarget(Me),te.updateRenderTargetMipmap(Me))}I.setRenderTarget(Se,Ie,Ue),I.setClearColor(ye,Fe),Ze!==void 0&&(W.viewport=Ze),I.toneMapping=Xe}function Ks(y,U,J){let W=U.isScene===!0?U.overrideMaterial:null;for(let X=0,Me=y.length;X<Me;X++){let Re=y[X],{object:Se,geometry:Ie,group:Ue}=Re,Xe=Re.material;Xe.allowOverride===!0&&W!==null&&(Xe=W),Se.layers.test(J.layers)&&Ll(Se,U,J,Ie,Xe,Ue)}}function Ll(y,U,J,W,X,Me){k!==null&&X.isNodeMaterial&&k.setObject(y,X),y.onBeforeRender(I,U,J,W,X,Me),y.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),X.onBeforeRender(I,U,J,W,y,Me),X.transparent===!0&&X.side===It&&X.forceSinglePass===!1?(X.side=zt,X.needsUpdate=!0,I.renderBufferDirect(J,U,W,X,y,Me),X.side=Jn,X.needsUpdate=!0,I.renderBufferDirect(J,U,W,X,y,Me),X.side=It):I.renderBufferDirect(J,U,W,X,y,Me),y.onAfterRender(I,U,J,W,X,Me)}function js(y,U,J){U.isScene!==!0&&(U=Ve);let W=q.get(y),X=w.state.lights,Me=w.state.shadowsArray,Re=X.state.version,Se=ve.getParameters(y,X.state,Me,U,J,w.state.lightProbeGridArray),Ie=ve.getProgramCacheKey(Se),Ue=W.programs;W.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;let Xe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;W.envMap=pe.get(y.envMap||W.environment,Xe),W.envMapRotation=W.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",bt),Ue=new Map,W.programs=Ue);let Ze=Ue.get(Ie);if(Ze!==void 0){if(W.currentProgram===Ze&&W.lightsStateVersion===Re)return Nl(y,Se),Ze}else Se.uniforms=ve.getUniforms(y),k!==null&&y.isNodeMaterial&&k.build(y,J,Se),y.onBeforeCompile(Se,I),Ze=ve.acquireProgram(Se,Ie),Ue.set(Ie,Ze),W.uniforms=Se.uniforms;let Pe=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pe.clippingPlanes=ue.uniform),Nl(y,Se),W.needsLights=tu(y),W.lightsStateVersion=Re,W.needsLights&&(Pe.ambientLightColor.value=X.state.ambient,Pe.lightProbe.value=X.state.probe,Pe.sunLights.value=X.state.sun,Pe.sunLightShadows.value=X.state.sunShadow,Pe.directionalLights.value=X.state.directional,Pe.directionalLightShadows.value=X.state.directionalShadow,Pe.spotLights.value=X.state.spot,Pe.spotLightShadows.value=X.state.spotShadow,Pe.rectAreaLights.value=X.state.rectArea,Pe.ltc_1.value=X.state.rectAreaLTC1,Pe.ltc_2.value=X.state.rectAreaLTC2,Pe.pointLights.value=X.state.point,Pe.pointLightShadows.value=X.state.pointShadow,Pe.hemisphereLights.value=X.state.hemi,Pe.sunShadowMatrix.value=X.state.sunShadowMatrix,Pe.sunShadowCascade.value=X.state.sunShadowCascade,Pe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pe.spotLightMatrix.value=X.state.spotLightMatrix,Pe.spotLightMap.value=X.state.spotLightMap,Pe.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=w.state.lightProbeGridArray.length>0,W.currentProgram=Ze,W.uniformsList=null,Ze}function Dl(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=Ji.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Nl(y,U){let J=q.get(y);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}function jh(y,U){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let J=0,W=y.length;J<W;J++){let X=y[J];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function Qh(y,U,J,W,X){U.isScene!==!0&&(U=Ve),te.resetTextureUnits();let Me=U.fog,Re=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,Se=oe===null?I.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:$e.workingColorSpace,Ie=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ue=pe.get(W.envMap||Re,Ie),Xe=W.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ze=!!J.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!J.morphAttributes.position,nt=!!J.morphAttributes.normal,xt=!!J.morphAttributes.color,ut=Jt;W.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ut=I.toneMapping);let lt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Pt=lt!==void 0?lt.length:0,Ae=q.get(W),Ft=w.state.lights;if(Be===!0&&(Ye===!0||y!==ie)){let ht=y===ie&&W.id===Z;ue.setState(W,y,ht)}let Qe=!1;W.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ft.state.version||Ae.outputColorSpace!==Se||X.isBatchedMesh&&Ae.batching===!1||!X.isBatchedMesh&&Ae.batching===!0||X.isBatchedMesh&&Ae.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ae.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ae.instancing===!1||!X.isInstancedMesh&&Ae.instancing===!0||X.isSkinnedMesh&&Ae.skinning===!1||!X.isSkinnedMesh&&Ae.skinning===!0||X.isInstancedMesh&&Ae.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ae.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ae.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ae.instancingMorph===!1&&X.morphTexture!==null||Ae.envMap!==Ue||W.fog===!0&&Ae.fog!==Me||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ue.numPlanes||Ae.numIntersection!==ue.numIntersection)||Ae.vertexAlphas!==Xe||Ae.vertexTangents!==Ze||Ae.morphTargets!==Pe||Ae.morphNormals!==nt||Ae.morphColors!==xt||Ae.toneMapping!==ut||Ae.morphTargetsCount!==Pt||!!Ae.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,Ae.__version=W.version);let Kt=Ae.currentProgram;Qe===!0&&(Kt=js(W,U,X),k&&W.isNodeMaterial&&k.onUpdateProgram(W,Kt,Ae));let pn=!1,Nn=!1,gi=!1,rt=Kt.getUniforms(),mt=Ae.uniforms;if(g.useProgram(Kt.program)&&(pn=!0,Nn=!0,gi=!0),W.id!==Z&&(Z=W.id,Nn=!0),Ae.needsLights){let ht=jh(w.state.lightProbeGridArray,X);Ae.lightProbeGrid!==ht&&(Ae.lightProbeGrid=ht,Nn=!0)}if(pn||ie!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),rt.setValue(L,"projectionMatrix",y.projectionMatrix),rt.setValue(L,"viewMatrix",y.matrixWorldInverse);let Fn=rt.map.cameraPosition;Fn!==void 0&&Fn.setValue(L,je.setFromMatrixPosition(y.matrixWorld)),A.logarithmicDepthBuffer&&rt.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&rt.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),ie!==y&&(ie=y,Nn=!0,gi=!0)}if(Ae.needsLights&&(Ft.state.sunShadowMap.length>0&&rt.setValue(L,"sunShadowMap",Ft.state.sunShadowMap,te),Ft.state.directionalShadowMap.length>0&&rt.setValue(L,"directionalShadowMap",Ft.state.directionalShadowMap,te),Ft.state.spotShadowMap.length>0&&rt.setValue(L,"spotShadowMap",Ft.state.spotShadowMap,te),Ft.state.pointShadowMap.length>0&&rt.setValue(L,"pointShadowMap",Ft.state.pointShadowMap,te)),X.isSkinnedMesh){rt.setOptional(L,X,"bindMatrix"),rt.setOptional(L,X,"bindMatrixInverse");let ht=X.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),rt.setValue(L,"boneTexture",ht.boneTexture,te))}X.isBatchedMesh&&(rt.setOptional(L,X,"batchingTexture"),rt.setValue(L,"batchingTexture",X._matricesTexture,te),rt.setOptional(L,X,"batchingIdTexture"),rt.setValue(L,"batchingIdTexture",X._indirectTexture,te),rt.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&rt.setValue(L,"batchingColorTexture",X._colorsTexture,te));let Un=J.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&P.update(X,J,Kt),(Nn||Ae.receiveShadow!==X.receiveShadow)&&(Ae.receiveShadow=X.receiveShadow,rt.setValue(L,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(mt.envMapIntensity.value=U.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=Cg()),Nn){if(rt.setValue(L,"toneMappingExposure",I.toneMappingExposure),Ae.needsLights&&eu(mt,gi),Me&&W.fog===!0&&D.refreshFogUniforms(mt,Me),D.refreshMaterialUniforms(mt,W,N,T,w.state.transmissionRenderTarget[y.id]),Ae.needsLights&&Ae.lightProbeGrid){let ht=Ae.lightProbeGrid;mt.probesSH.value=ht.texture,mt.probesMin.value.copy(ht.boundingBox.min),mt.probesMax.value.copy(ht.boundingBox.max),mt.probesResolution.value.copy(ht.resolution)}Ji.upload(L,Dl(Ae),mt,te)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ji.upload(L,Dl(Ae),mt,te),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&rt.setValue(L,"center",X.center),rt.setValue(L,"modelViewMatrix",X.modelViewMatrix),rt.setValue(L,"normalMatrix",X.normalMatrix),rt.setValue(L,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let ht=W.uniformsGroups;for(let Fn=0,xi=ht.length;Fn<xi;Fn++){let Fl=ht[Fn];re.update(Fl,Kt),re.bind(Fl,Kt)}}return Kt}function eu(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.sunLights.needsUpdate=U,y.sunLightShadows.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function tu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(y,U,J){let W=q.get(y);W.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(y.texture).__webglTexture=U,q.get(y.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:J,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){let J=q.get(y);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,J=0){oe=y,ee=U,K=J;let W=null,X=!1,Me=!1;if(y){let Se=q.get(y);if(Se.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,Se.__webglFramebuffer),V.copy(y.viewport),he.copy(y.scissor),le=y.scissorTest,g.viewport(V),g.scissor(he),g.setScissorTest(le),Z=-1;return}else if(Se.__webglFramebuffer===void 0)te.setupRenderTarget(y);else if(Se.__hasExternalTextures)te.rebindTextures(y,q.get(y.texture).__webglTexture,q.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Xe=y.depthTexture;if(Se.__boundDepthTexture!==Xe){if(Xe!==null&&q.has(Xe)&&(y.width!==Xe.image.width||y.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(y)}}let Ie=y.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);let Ue=q.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?W=Ue[U][J]:W=Ue[U],X=!0):y.samples>0&&te.useMultisampledRTT(y)===!1?W=q.get(y).__webglMultisampledFramebuffer:Array.isArray(Ue)?W=Ue[J]:W=Ue,V.copy(y.viewport),he.copy(y.scissor),le=y.scissorTest}else V.copy(ae).multiplyScalar(N).floor(),he.copy(Ee).multiplyScalar(N).floor(),le=Je;if(J!==0&&(W=Y),g.bindFramebuffer(L.FRAMEBUFFER,W)&&g.drawBuffers(y,W),g.viewport(V),g.scissor(he),g.setScissorTest(le),X){let Se=q.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,J)}else if(Me){let Se=U;for(let Ie=0;Ie<y.textures.length;Ie++){let Ue=q.get(y.textures[Ie]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ie,Ue.__webglTexture,J,Se)}}else if(y!==null&&J!==0){let Se=q.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se.__webglTexture,J)}Z=-1};function Ul(y){let U=q.get(y);return(U.__readFormat!==y.format||U.__readType!==y.type)&&(U.__readFormat=y.format,U.__readType=y.type,U.__formatReadable=A.textureFormatReadable(y.format),U.__typeReadable=A.textureTypeReadable(y.type)),U}this.readRenderTargetPixels=function(y,U,J,W,X,Me,Re,Se=0){if(!(y&&y.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){g.bindFramebuffer(L.FRAMEBUFFER,Ie);try{let Ue=y.textures[Se],Xe=Ue.format,Ze=Ue.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Se);let Pe=Ul(Ue);if(Pe.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-W&&J>=0&&J<=y.height-X&&L.readPixels(U,J,W,X,ge.convert(Xe),ge.convert(Ze),Me)}finally{let Ue=oe!==null?q.get(oe).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(y,U,J,W,X,Me,Re,Se=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie)if(U>=0&&U<=y.width-W&&J>=0&&J<=y.height-X){g.bindFramebuffer(L.FRAMEBUFFER,Ie);let Ue=y.textures[Se],Xe=Ue.format,Ze=Ue.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Se);let Pe=Ul(Ue);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,nt),L.bufferData(L.PIXEL_PACK_BUFFER,Me.byteLength,L.STREAM_READ),L.readPixels(U,J,W,X,ge.convert(Xe),ge.convert(Ze),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let xt=oe!==null?q.get(oe).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,xt);let ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Hc(L,ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,nt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Me),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(nt),L.deleteSync(ut),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,J=0){let W=Math.pow(2,-J),X=Math.floor(y.image.width*W),Me=Math.floor(y.image.height*W),Re=U!==null?U.x:0,Se=U!==null?U.y:0;te.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,J,0,0,Re,Se,X,Me),g.unbindTexture()},this.copyTextureToTexture=function(y,U,J=null,W=null,X=0,Me=0){let Re,Se,Ie,Ue,Xe,Ze,Pe,nt,xt,ut=y.isCompressedTexture?y.mipmaps[Me]:y.image;if(J!==null)Re=J.max.x-J.min.x,Se=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,Ue=J.min.x,Xe=J.min.y,Ze=J.isBox3?J.min.z:0;else{let mt=Math.pow(2,-X);Re=Math.floor(ut.width*mt),Se=Math.floor(ut.height*mt),y.isDataArrayTexture?Ie=ut.depth:y.isData3DTexture?Ie=Math.floor(ut.depth*mt):Ie=1,Ue=0,Xe=0,Ze=0}W!==null?(Pe=W.x,nt=W.y,xt=W.z):(Pe=0,nt=0,xt=0);let lt=ge.convert(U.format),Pt=ge.convert(U.type),Ae;U.isData3DTexture?(te.setTexture3D(U,0),Ae=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(te.setTexture2DArray(U,0),Ae=L.TEXTURE_2D_ARRAY):(te.setTexture2D(U,0),Ae=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let Ft=g.getParameter(L.UNPACK_ROW_LENGTH),Qe=g.getParameter(L.UNPACK_IMAGE_HEIGHT),Kt=g.getParameter(L.UNPACK_SKIP_PIXELS),pn=g.getParameter(L.UNPACK_SKIP_ROWS),Nn=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,ut.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Ue),g.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Ze);let gi=y.isDataArrayTexture||y.isData3DTexture,rt=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){let mt=q.get(y),Un=q.get(U),ht=q.get(mt.__renderTarget),Fn=q.get(Un.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,ht.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let xi=0;xi<Ie;xi++)gi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(y).__webglTexture,X,Ze+xi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(U).__webglTexture,Me,xt+xi)),L.blitFramebuffer(Ue,Xe,Re,Se,Pe,nt,Re,Se,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(X!==0||y.isRenderTargetTexture||q.has(y)){let mt=q.get(y),Un=q.get(U);g.bindFramebuffer(L.READ_FRAMEBUFFER,O),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,G);for(let ht=0;ht<Ie;ht++)gi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,mt.__webglTexture,X,Ze+ht):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mt.__webglTexture,X),rt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Un.__webglTexture,Me,xt+ht):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Un.__webglTexture,Me),X!==0?L.blitFramebuffer(Ue,Xe,Re,Se,Pe,nt,Re,Se,L.COLOR_BUFFER_BIT,L.NEAREST):rt?L.copyTexSubImage3D(Ae,Me,Pe,nt,xt+ht,Ue,Xe,Re,Se):L.copyTexSubImage2D(Ae,Me,Pe,nt,Ue,Xe,Re,Se);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else rt?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Ae,Me,Pe,nt,xt,Re,Se,Ie,lt,Pt,ut.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Ae,Me,Pe,nt,xt,Re,Se,Ie,lt,ut.data):L.texSubImage3D(Ae,Me,Pe,nt,xt,Re,Se,Ie,lt,Pt,ut):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Me,Pe,nt,Re,Se,lt,Pt,ut.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Me,Pe,nt,ut.width,ut.height,lt,ut.data):L.texSubImage2D(L.TEXTURE_2D,Me,Pe,nt,Re,Se,lt,Pt,ut);g.pixelStorei(L.UNPACK_ROW_LENGTH,Ft),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Kt),g.pixelStorei(L.UNPACK_SKIP_ROWS,pn),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Nn),Me===0&&U.generateMipmaps&&L.generateMipmap(Ae),g.unbindTexture()},this.initRenderTarget=function(y){q.get(y).__webglFramebuffer===void 0&&te.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?te.setTextureCube(y,0):y.isData3DTexture?te.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?te.setTexture2DArray(y,0):te.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){ee=0,K=0,oe=null,g.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var Rg=[["clear","Clear glass",0],["chrome","Liquid metal",1],["porcelain","Porcelain over glass",2],["bloom","Milky glass \xB7 cloud",3],["core","Glass \xB7 light core",4],["points","Glass \xB7 points of light",5],["glitter","Glass \xB7 glitter",6],["beads","Glass \xB7 beads",7],["liquid","Glass \xB7 liquid",8]],Ko=Object.fromEntries(Rg.map(([i,,e])=>[i,e])),Ig={clear:[[1,1,1],[1,1,1]],chrome:[[1,1,1],[1,1,1]],porcelain:[[.13,.17,.18],[.86,.64,.3]],bloom:[[1,.42,.45],[1,.72,.68]],core:[[1,.97,.92],[1,1,1]],points:[[.92,.96,1],[1,1,1]],glitter:[[.95,.96,1],[1,1,1]],beads:[[.97,.97,.96],[1,.9,.95]],liquid:[[.55,.78,.95],[.9,.97,1]]},$o=[-.6,.55,.6],Pg=Math.hypot(...$o),Lg=Math.atan2($o[0],$o[2])*180/Math.PI,Dg=Math.asin($o[1]/Pg)*180/Math.PI,Sh=i=>"#"+i.map(e=>Math.round(Math.min(1,Math.max(0,e))*255).toString(16).padStart(2,"0")).join(""),jo=i=>{let e=parseInt(String(i).replace("#",""),16)||0;return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]};function Mh(i={id:"clear",base:"clear"}){let e=Ko[i.base]===void 0?"clear":i.base,[t,n]=Ig[e];return{v:1,variant:i.id||e,base:e,material:{tint:Sh(i.tint??t),accent:Sh(i.accent??n),refraction:1,dispersion:0,frost:0,rim:1,opacity:1,iridescence:0,exposure:1},interior:{amount:0,size:1,speed:1,glow:1,fill:.55},light:{angle:+Lg.toFixed(2),height:+Dg.toFixed(2),key:1,rim:1,environment:1,horizon:1,colour:"#ffffff"},motion:{spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},scene:{background:"none",colour:"#0b0c0c",colour2:"#2a2d2c",size:1,shadow:0,reflection:0}}}var bl=i=>i&&typeof i=="object"&&!Array.isArray(i);function Qo(i,e){let t=structuredClone(i);if(!bl(e))return t;for(let[n,s]of Object.entries(e))n in t&&(bl(t[n])?bl(s)&&(t[n]=Qo(t[n],s)):typeof s==typeof t[n]&&(typeof s!="number"||Number.isFinite(s))&&(t[n]=s));return Ko[t.base]===void 0&&(t.base="clear"),t}var Ng=i=>atob(String(i).replace(/-/g,"+").replace(/_/g,"/"));function Sl(i){if(!i)return{};try{return JSON.parse(String(i).trim().startsWith("{")?i:Ng(i))}catch{return{}}}var ji=[{id:"clear",base:"clear",name:"Clear",line:"Thick clear glass, nothing inside but its own depth."},{id:"smoke",base:"clear",name:"Smoke",line:"Smoked glass, a grey depth that darkens to the rim.",tint:[.6,.62,.65]},{id:"amber",base:"clear",name:"Amber",line:"Warm amber glass, like light through honey.",tint:[1,.8,.52]},{id:"chrome",base:"chrome",name:"Chrome",line:"Liquid chrome that keeps folding the room it reflects."},{id:"gold",base:"chrome",name:"Liquid Gold",line:"Molten gold folding over itself.",tint:[1,.79,.45]},{id:"gunmetal",base:"chrome",name:"Gunmetal",line:"Dark liquid metal with cold highlights.",tint:[.5,.53,.57]},{id:"porcelain",base:"porcelain",name:"Porcelain",line:"Raised porcelain bands with gold edges over dark glass."},{id:"silverline",base:"porcelain",name:"Silverline",line:"Porcelain bands edged in silver over dark glass.",accent:[.82,.84,.88]},{id:"celadon",base:"porcelain",name:"Celadon",line:"Porcelain bands over green celadon glass.",tint:[.22,.36,.3]},{id:"bloom",base:"bloom",name:"Bloom",line:"Milky glass holding a slow pink cloud."},{id:"lilac",base:"bloom",name:"Lilac",line:"Milky glass holding a slow violet cloud.",tint:[.62,.45,1],accent:[.86,.76,1]},{id:"lagoon",base:"bloom",name:"Lagoon",line:"Milky glass holding a slow sea-blue cloud.",tint:[.2,.62,.9],accent:[.6,.92,.9]},{id:"core",base:"core",name:"Core",line:"Clear glass holding one soft white light at its centre."},{id:"dawn",base:"core",name:"Dawn",line:"Clear glass holding a warm, low light.",tint:[1,.72,.45]},{id:"starlight",base:"points",name:"Starlight",line:"Clear glass full of small points of light that drift and twinkle."},{id:"firefly",base:"points",name:"Firefly",line:"Warm points of light drifting slowly inside the glass.",tint:[1,.78,.4]},{id:"glitter",base:"glitter",name:"Glitter",line:"Fine silver flecks that catch the light as the sphere turns."},{id:"goldleaf",base:"glitter",name:"Gold Leaf",line:"Flakes of gold suspended in clear glass.",tint:[1,.78,.4]},{id:"beads",base:"beads",name:"Beads",line:"Small milky glass beads floating inside the shell."},{id:"pearls",base:"beads",name:"Pearls",line:"Soft pearls with a faint rainbow sheen, floating inside.",tint:[1,.95,.97],accent:[.85,.9,1]}],Ah=Ko,wh={0:{tint:[1,1,1],accent:[1,1,1]},1:{tint:[1,1,1],accent:[1,1,1]},2:{tint:[.13,.17,.18],accent:[.86,.64,.3]},3:{tint:[1,.42,.45],accent:[1,.72,.68]},4:{tint:[1,.97,.92],accent:[1,1,1]},5:{tint:[.92,.96,1],accent:[1,1,1]},6:{tint:[.95,.96,1],accent:[1,1,1]},7:{tint:[.97,.97,.96],accent:[1,.9,.95]},8:{tint:[.55,.78,.95],accent:[.9,.97,1]}},Eh=i=>Mh(ji.find(e=>e.id===i)??ji[0]),Ug=i=>{let e=ji.find(n=>n.id===i)??ji[0],t=Ah[e.base];return{k:t,tint:e.tint??wh[t].tint,accent:e.accent??wh[t].accent}},Fg=`
  uniform mat3 uRot;
  varying vec3 vN; varying vec3 vP; varying vec3 vObj;
  void main() {
    vObj = uRot * position;              // the material turns with the drag
    vN = normalize(normalMatrix * normal);
    vec4 wp = modelViewMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    gl_Position = projectionMatrix * wp;
  }`,Og=`
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
  }`,Ws=null;function Bg(){if(Ws)return Ws;let i=typeof OffscreenCanvas=="function"&&"transferToImageBitmap"in OffscreenCanvas.prototype,e=i?new OffscreenCanvas(2,2):document.createElement("canvas"),t=new $i({canvas:e,alpha:!0,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!0});t.setClearColor(0,0),t.debug.checkShaderErrors=!document.querySelector('meta[name="lo-entries"]');let n=new en,s=new St(30,1,.1,20);s.position.set(0,0,4.9);let r=new Ct({vertexShader:Fg,fragmentShader:Og,transparent:!0,premultipliedAlpha:!0,uniforms:{uKind:{value:0},uTint:{value:new B(1,1,1)},uAccent:{value:new B(1,1,1)},uTime:{value:0},uStir:{value:0},uVoice:{value:0},uVoiceFlow:{value:0},uRot:{value:new We},...Object.fromEntries(Object.entries(Ch).map(([l,c])=>[l,{value:Array.isArray(c)?new B(...c):c}]))}}),o=new at(new bn(1,128,96),r);return n.add(o),Ws={r:t,scene:n,camera:s,mat:r,mesh:o,list:new Set,raf:0,off:i},Ws}var Ch={uIor:1,uDisp:0,uFrost:0,uRim:1,uOpacity:1,uIrid:0,uExp:1,uAmt:0,uSize:1,uGlow:1,uFill:.55,uKeyDir:[-.6/Math.hypot(.6,.55,.6),.55/Math.hypot(.6,.55,.6),.6/Math.hypot(.6,.55,.6)],uKey:1,uRimL:1,uEnv:1,uHorizon:1,uLightCol:[1,1,1]},Th=Math.tan(Math.asin(1/4.9))/Math.tan(15*Math.PI/180),zg=1/(4.9*Math.tan(15*Math.PI/180));function kg(i){let e=i.cfg;if(!e){let l=Ug(i.kind);return{...Ch,uKind:l.k,uTint:l.tint,uAccent:l.accent}}let t=e.material,n=e.interior,s=e.light,r=s.angle*Math.PI/180,o=s.height*Math.PI/180;return{uKind:Ah[e.base]??0,uTint:jo(t.tint),uAccent:jo(t.accent),uIor:t.refraction,uDisp:t.dispersion,uFrost:t.frost,uRim:t.rim,uOpacity:t.opacity,uIrid:t.iridescence,uExp:t.exposure,uAmt:n.amount,uSize:Math.max(.2,n.size),uGlow:n.glow,uFill:n.fill,uKeyDir:[Math.cos(o)*Math.sin(r),Math.sin(o),Math.cos(o)*Math.cos(r)],uKey:s.key,uRimL:s.rim,uEnv:s.environment,uHorizon:s.horizon,uLightCol:jo(s.colour)}}var Vg=matchMedia("(pointer: coarse)").matches;function Ml(){let i=Ws;i.raf=0;let e=performance.now()/1e3,t=Math.min(devicePixelRatio||1,1.5),n=[...i.list].filter(c=>c.visible&&c.canvas.isConnected),s=n.length,r=i.lastNow?e-i.lastNow:1/60;i.lastNow=e,s<=2?i.k=s:(i.k=Math.min(s,Math.max(1,i.k||(Vg?2:3))),i.avg=(i.avg??r)*.9+r*.1,++i.adj>20&&(i.adj=0,i.avg>1/50&&i.k>1?i.k--:i.avg<1/58&&i.k<s&&i.k++)),i.adj||=0,i.cursor=(i.cursor||0)%Math.max(1,s);let o=new Set;for(let c=0;c<i.k;c++)o.add(n[(i.cursor+c)%s]);i.cursor+=i.k;for(let c of n){if(!o.has(c))continue;c.step(e);let a=Math.max(2,Math.round(c.canvas.clientWidth*t)),h=Math.max(2,Math.round(c.canvas.clientHeight*t));(c.canvas.width!==a||c.canvas.height!==h)&&(c.canvas.width=a,c.canvas.height=h),(i.w!==a||i.h!==h)&&(i.r.setSize(a,h,!1),i.w=a,i.h=h,i.camera.aspect=a/h,i.camera.updateProjectionMatrix());let d=i.mat.uniforms;for(let[_,b]of Object.entries(kg(c)))Array.isArray(b)?d[_].value.fromArray(b):d[_].value=b;d.uTime.value=c.time,d.uStir.value=c.stir,d.uVoice.value=c.kind==="bloom"?c.voice:0,d.uVoiceFlow.value=c.voiceFlow,d.uRot.value.copy(c.rot),i.mesh.scale.setScalar(c.scale),i.mesh.position.y=c.lift,i.r.render(i.scene,i.camera);let u=c.cfg?.scene;if(c.bmp){c.bmp.transferFromImageBitmap(i.r.domElement.transferToImageBitmap());continue}let p=c.ctx;p.clearRect(0,0,a,h),u?Hg(c,p,a,h,i.r.domElement,u):p.drawImage(i.r.domElement,0,0,a,h)}let l=!1;for(let c of i.list)if(c.visible&&c.canvas.isConnected){l=!0;break}l&&(i.raf=requestAnimationFrame(Ml))}var pi=null;function Hg(i,e,t,n,s,r){if(r.background==="solid")e.fillStyle=r.colour,e.fillRect(0,0,t,n);else if(r.background==="gradient"){let a=e.createRadialGradient(t/2,n*.42,0,t/2,n*.5,Math.hypot(t,n)*.6);a.addColorStop(0,r.colour2),a.addColorStop(1,r.colour),e.fillStyle=a,e.fillRect(0,0,t,n)}let o=Th*i.scale*n/2,l=n/2-i.lift*zg*n/2,c=n/2+Th*r.size*n/2;if(r.shadow>0){let a=Math.max(0,c-(l+o)),h=1/(1+a/o*2);e.save(),e.translate(t/2,c),e.scale(1,.16);let d=e.createRadialGradient(0,0,0,0,0,o*(1.05+(1-h)*.5));d.addColorStop(0,`rgba(0,0,0,${(.55*r.shadow*h).toFixed(3)})`),d.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=d,e.beginPath(),e.arc(0,0,o*1.6,0,Math.PI*2),e.fill(),e.restore()}if(r.reflection>0&&c<n){let a=Math.min(n-c,o*2);pi||=document.createElement("canvas"),(pi.width!==t||pi.height!==n)&&(pi.width=t,pi.height=n);let h=pi.getContext("2d");h.clearRect(0,0,t,n),h.save(),h.translate(0,c*2),h.scale(1,-1),h.drawImage(s,0,0,t,n),h.restore(),h.globalCompositeOperation="destination-in";let d=h.createLinearGradient(0,c,0,c+a);d.addColorStop(0,`rgba(0,0,0,${(.5*r.reflection).toFixed(3)})`),d.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=d,h.fillRect(0,0,t,n),h.globalCompositeOperation="source-over",e.drawImage(pi,0,0)}e.drawImage(s,0,0,t,n)}function Rh(i,e="clear",{interactive:t=!0,reduced:n=matchMedia("(prefers-reduced-motion: reduce)").matches,config:s=null}={}){let r;try{r=Bg()}catch{let M=()=>{};return new Proxy({},{get:()=>M})}let o=document.createElement("canvas");o.className="sph-c",o.setAttribute("aria-hidden","true"),i.append(o);let l={spin:.12,tilt:-.15,roll:0,bob:0,bobSpeed:.5,breathe:0,pointer:1,stir:1,inertia:1,speech:1},c=()=>S.cfg?.motion??l,a={v:.4,vel:n?0:.12},h={v:-.15,vel:0},d={x:0,y:0,tx:0,ty:0},u=new ot,p=new cn,_=performance.now()/1e3,b=null,m=0,f=!s&&r.off?o.getContext("bitmaprenderer"):null,S={canvas:o,bmp:f,ctx:f?null:o.getContext("2d"),kind:e,cfg:s?Qo(Eh(s.variant||e),s):null,visible:!1,time:Math.random()*40,stir:0,speech:0,voice:0,voiceFlow:0,voiceInput:null,scale:1,lift:0,rot:new We,step(M){let w=Math.min(.25,M-_);_=M,m+=w;let C=c(),x=n?0:C.spin;b||(a.vel+=(x-a.vel)*w*.8,h.vel*=Math.exp(-w*3),h.v+=(C.tilt-h.v)*w*.8),a.v+=a.vel*w,h.v=Math.max(-1.2,Math.min(1.2,h.v+h.vel*w)),d.x+=(d.tx*C.pointer-d.x)*w*5,d.y+=(d.ty*C.pointer-d.y)*w*5,S.stir*=Math.exp(-w*1.6);let E=S.voiceInput?.();S.voice=Math.max(0,Math.min(1,Number.isFinite(E)?E:0))*(n?.35:1),S.voiceFlow+=w*S.voice*3,S.time+=w*(n?.3:1)*(1+S.stir*3)*(S.cfg?S.cfg.interior.speed:1),p.set(h.v+d.y*.25,a.v+d.x*.35,C.roll,"YXZ"),u.makeRotationFromEuler(p),S.rot.setFromMatrix4(u);let I=S.cfg?S.cfg.scene.size:1,F=n?0:1;S.scale=I*(1+F*C.breathe*Math.sin(m*1.3)+(S.kind==="bloom"?S.speech:Math.max(S.speech,S.voice))*C.speech*.06),S.lift=F*C.bob*I*Math.sin(m*Math.PI*2*C.bobSpeed)}};S.cfg&&(S.kind=S.cfg.variant);let R=(M,w,C=.016)=>{let x=c().inertia;a.v+=M*.01,h.v+=w*.01,a.vel=M*.01/C*.6*x,h.vel=w*.01/C*.6*x};if(t){o.style.touchAction="pan-y",o.style.cursor="grab",o.addEventListener("pointerdown",C=>{b={x:C.clientX,y:C.clientY,t:performance.now(),moved:!1},o.setPointerCapture(C.pointerId),o.style.cursor="grabbing"}),o.addEventListener("pointermove",C=>{let x=o.getBoundingClientRect();if(d.tx=((C.clientX-x.left)/x.width-.5)*2,d.ty=((C.clientY-x.top)/x.height-.5)*2,!b)return;let E=performance.now(),I=C.clientX-b.x,F=C.clientY-b.y,k=Math.max(8,E-b.t)/1e3;Math.hypot(I,F)>3&&(b.moved=!0),R(I,F,k),b.x=C.clientX,b.y=C.clientY,b.t=E});let M=()=>{b&&(b.moved||(S.stir=Math.min(1.5,S.stir+c().stir)),b=null,o.style.cursor="grab")};o.addEventListener("pointerup",M),o.addEventListener("pointercancel",M),o.addEventListener("pointerleave",()=>{d.tx=d.ty=0});let w=!1;o.addEventListener("pointerdown",()=>{w=!1},!0),o.addEventListener("pointermove",()=>{b?.moved&&(w=!0)}),o.addEventListener("click",C=>{w&&(C.preventDefault(),C.stopPropagation())})}let v=new IntersectionObserver(([M])=>{S.visible=M.isIntersecting,S.visible&&!r.raf&&(r.raf=requestAnimationFrame(Ml))});return v.observe(o),r.list.add(S),r.raf||(r.raf=requestAnimationFrame(Ml)),{canvas:o,setKind(M){S.kind=M,S.stir=1},setConfig(M){S.cfg=M?Qo(Eh(M.variant||S.kind),M):null,S.cfg&&(S.kind=S.cfg.variant)},setSpeech(M){S.speech=Math.max(0,Math.min(1,M||0))},setVoiceInput(M){S.voiceInput=typeof M=="function"?M:null,S.voice=0},rotate(M,w){R(M,w)},resetView(){a.v=.4,h.v=c().tilt,a.vel=n?0:c().spin,h.vel=0},stir(){S.stir=Math.min(1.5,S.stir+c().stir)},dispose(){S.voiceInput=null,v.disconnect(),r.list.delete(S),o.remove()}}}var Gg=`
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
`,Xs=1.38,wl=(i,e)=>e.set(i.x*Xs,i.y*Xs,i.z??.1);function Ih(i,e,{warmVolume:t=!1}={}){let n={orbEye:{value:e},orbEnergy:{value:1},warmVolume:{value:t?1:0},lightWorld:{value:0},opticsFill:{value:1},opticsLobe:{value:1},opticsWall:{value:1},coreSize:{value:.065},opticsClean:{value:0},lightTint:{value:new Ce(1,1,1)},lightSpread:{value:1},orbCore:{value:wl({x:-.07,y:-.55},new B)},ivory:{value:new Ce("#ffefcf")},champagne:{value:new Ce("#f7d095")},gold:{value:new Ce("#e6ad62")},mist:{value:new Ce("#f0d6aa")},warm:{value:new Ce("#f3c59f")},pearl:{value:new Ce("#fff0dc")},orbSpeech:{value:0},orbTime:{value:0},orbRibbon:{value:0}},s=new Ct({uniforms:n,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ps,toneMapped:!1,vertexShader:`
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
      ${Gg}
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
    `}),r=new at(i,s);return r.renderOrder=2,{mesh:r,uniforms:n,dispose:()=>s.dispose()}}function Ph(i,{strength:e=.24,feather:t=!1}={}){let n=(v=0)=>new Nt(1,1,{type:$t,depthBuffer:!1,samples:v}),s=n(4);s.depthBuffer=!0;let r=n(),o=n(),l=n(),c=n(),a=new en,h=new ci(-1,1,1,-1,0,1),d=new hn(2,2),u=`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
  `,p=(v,M)=>new Ct({uniforms:v,vertexShader:u,fragmentShader:M,depthTest:!1,depthWrite:!1,toneMapped:!1}),_=p({source:{value:s.texture},sourcePoint:{value:new Ge(.5,.37)},threshold:{value:new Ge(.16,.65)}},`
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
  `),b=p({source:{value:r.texture},stepUv:{value:new Ge}},`
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
  `),m=p({source:{value:s.texture},bloom:{value:r.texture},wide:{value:l.texture},strength:{value:e},feather:{value:t?1:0},shoulder:{value:1},featherRange:{value:new Ge(.36,.5)},mono:{value:0}},`
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
  `),f=new at(d,_);a.add(f);let S=314;function R(v,M){f.material=v,i.setRenderTarget(M),i.render(a,h)}return{resize(v,M){S=v,s.setSize(Math.ceil(v*M),Math.ceil(v*M));let w=157;r.setSize(w,w),o.setSize(w,w);let C=56;l.setSize(C,C),c.setSize(C,C)},setFeather(v,M){m.uniforms.featherRange.value.set(v,M)},setMono(v){m.uniforms.mono.value=v?1:0},setStrength(v){e=v},setTone(v){let M=v==="light";_.uniforms.threshold.value.set(M?1.05:.16,M?2.2:.65),m.uniforms.shoulder.value=M?0:1},render(v,M,w=!0,C){_.uniforms.sourcePoint.value.copy(C),m.uniforms.strength.value=w?e:0,i.setRenderTarget(s),i.render(v,M),R(_,r),b.uniforms.source.value=r.texture,b.uniforms.stepUv.value.set(3.2/314,0),R(b,o),b.uniforms.source.value=o.texture,b.uniforms.stepUv.value.set(0,3.2/314),R(b,r),b.uniforms.source.value=r.texture;for(let x=0;x<2;x++)b.uniforms.stepUv.value.set(5/314,0),R(b,c),b.uniforms.source.value=c.texture,b.uniforms.stepUv.value.set(0,5/314),R(b,l),b.uniforms.source.value=l.texture;R(m,null)},dispose(){[s,r,o,l,c,d,_,b,m].forEach(v=>v.dispose())}}}var Qi=.88,El=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Et=(()=>{let i=7;return()=>(i=i*16807%2147483647)/2147483647})();function Lh({body:i,spin:e,renderer:t,compact:n}){t.localClippingEnabled=!0;let s={beads:null,glitter:null,liquid:null,gel:null},r="light",o={amount:.5,size:.5,motion:.4,fill:.5,colour:new Ce("#f2d6a5")},l=new Bt,c=[],a=V=>(c.push(V),V),h=n?16:24,d=a(new bn(1,n?14:20,n?10:14)),u=a(new Sn({color:"#ffffff",roughness:.04,metalness:0,clearcoat:1,clearcoatRoughness:.02,specularIntensity:1,envMapIntensity:2.6,ior:1.6,emissive:new Ce("#6a5a44"),emissiveIntensity:.55})),p={mesh:null,p:[],v:[],r:[],n:0};function _(){let V=new zi(d,u,h);V.instanceMatrix.setUsage(Go);for(let he=0;he<h;he++)p.p.push(new B((Et()-.5)*.9,-.4-Et()*.3,(Et()-.5)*.9)),p.v.push(new B),p.r.push(.75+Et()*.5);s.beads=V,i.add(V)}function b(V,he,le){p.t=(p.t||0)+V;let ye=p.n=Math.round(8+o.amount*(h-8)),Fe=.08+o.size*.08;for(let T=0;T<ye;T++){let N=p.p[T],j=p.v[T],de=Fe*p.r[T];j.y-=1.4*V;let ae=o.motion*1.6,Ee=T*1.7+p.t*.6;j.x+=Math.sin(Ee)*ae*V,j.z+=Math.cos(Ee*.8)*ae*V,j.y+=Math.max(0,Math.sin(Ee*.5))*ae*.9*V,j.addScaledVector(he,V),j.x+=(Et()-.5)*le*V,j.z+=(Et()-.5)*le*V,j.y+=Et()*le*.4*V,j.multiplyScalar(Math.exp(-V*1.6)),N.addScaledVector(j,V);let Je=Qi-de,ze=N.length();if(ze>Je){let Be=N.clone().divideScalar(ze);N.copy(Be).multiplyScalar(Je);let Ye=j.dot(Be);Ye>0&&j.addScaledVector(Be,-Ye*1.35)}}for(let T=0;T<5;T++)for(let N=0;N<ye;N++)for(let j=N+1;j<ye;j++){let de=p.p[N],ae=p.p[j],Ee=Fe*p.r[N],Je=Fe*p.r[j],ze=ae.x-de.x,Be=ae.y-de.y,Ye=ae.z-de.z,Oe=ze*ze+Be*Be+Ye*Ye,je=Ee+Je;if(Oe<je*je&&Oe>1e-9){let tt=Math.sqrt(Oe),Ve=(je-tt)/2/tt;de.x-=ze*Ve,de.y-=Be*Ve,de.z-=Ye*Ve,ae.x+=ze*Ve,ae.y+=Be*Ve,ae.z+=Ye*Ve}}let Le=s.beads;Le.count=ye;for(let T=0;T<ye;T++)l.position.copy(p.p[T]),l.scale.setScalar(Fe*p.r[T]),l.rotation.set(0,0,0),l.updateMatrix(),Le.setMatrixAt(T,l.matrix);Le.instanceMatrix.needsUpdate=!0}let m=n?220:520,f=a(new Ts(1,0));f.scale(1,.18,1);let S=a(new Hi({color:"#fff4e2",metalness:1,roughness:.12,envMapIntensity:2.4})),R={p:[],axis:[],phase:[],spin:[]};function v(){let V=new zi(f,S,m);V.instanceMatrix.setUsage(Go);for(let he=0;he<m;he++){let le;do le=new B(Et()*2-1,Et()*2-1,Et()*2-1);while(le.length()>1);le.multiplyScalar(Qi-.06),le.y=le.y*.9-.06,R.p.push(le),R.axis.push(new B(Et()-.5,Et()-.5,Et()-.5).normalize()),R.phase.push(Et()*Math.PI*2),R.spin.push(.4+Et()*1.6)}s.glitter=V,e.add(V)}let M=new Qt,w=new B;function C(V,he,le){let ye=Math.round(60+o.amount*(m-60)),Fe=.008+o.size*.02,Le=.15+o.motion*1.1,T=s.glitter;T.count=ye;for(let N=0;N<ye;N++){let j=R.p[N],de=R.phase[N],ae=V*Le*.25+de;w.set(Math.sin(ae)*.03,Math.cos(ae*.7)*.02,Math.cos(ae)*.03),j.x+=(w.x+(Et()-.5)*le*.02)*he*2,j.y+=(w.y-.004+(Et()-.5)*le*.02)*he*2,j.z+=w.z*he*2,j.y<-.8&&(j.y=.5);let Ee=j.length(),Je=Qi-.05;Ee>Je&&j.multiplyScalar(Je/Ee),M.setFromAxisAngle(R.axis[N],V*R.spin[N]*Le+de),l.position.copy(j),l.quaternion.copy(M),l.scale.setScalar(Fe),l.updateMatrix(),T.setMatrixAt(N,l.matrix)}T.instanceMatrix.needsUpdate=!0}let x={tiltX:0,tiltZ:0,vx:0,vz:0,plane:new Wt(new B(0,-1,0),0)},E={liqTime:{value:0},liqAmp:{value:.01},liqColour:{value:new Ce},liqR:{value:.5}};function I(){let V=new Xt,he=a(new Sn({color:"#fbf3e4",roughness:.05,metalness:0,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:2.2,ior:1.33,side:It,clippingPlanes:[x.plane],emissive:new Ce("#8a6a3a"),emissiveIntensity:.55})),le=new at(a(new bn(Qi-.015,n?40:64,n?28:44)),he),ye=a(new Ms(1,n?64:96,0,Math.PI*2)),Fe=a(new Sn({color:"#f3e3c6",roughness:.03,metalness:0,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.8,side:It,emissive:new Ce("#4a3418"),emissiveIntensity:.4}));Fe.onBeforeCompile=N=>{Object.assign(N.uniforms,E),N.vertexShader=`uniform float liqTime; uniform float liqAmp; varying float vRim;
`+N.vertexShader.replace("#include <begin_vertex>",`
        #include <begin_vertex>
        float rr = length(position.xy);
        transformed.z += liqAmp * sin(rr * 14.0 - liqTime * 3.2) * (1.0 - rr) + liqAmp * .6 * sin(position.x * 9.0 + liqTime * 2.1);
        vRim = rr;`),N.fragmentShader=`uniform vec3 liqColour; varying float vRim;
`+N.fragmentShader.replace("#include <emissivemap_fragment>",`
        #include <emissivemap_fragment>
        // The meniscus: the surface climbs and brightens where it meets the glass.
        totalEmissiveRadiance += (liqColour * .6 + vec3(.5)) * smoothstep(.84, 1.0, vRim) * 1.8;`)},Fe.customProgramCacheKey=()=>"orb-liquid-surface-v2";let Le=new at(ye,Fe);Le.rotation.x=-Math.PI/2;let T=new Xt;T.add(Le),V.add(le,T),s.liquid=V,x.vol=le,x.holder=T,x.surf=Le,x.mat=he,x.surfMat=Fe,i.add(V)}let F=new B;function k(V,he,le,ye){let Le=.18+(1-o.motion)*.25;x.vx+=(-6.5*6.5*x.tiltX-2*Le*6.5*x.vx-le.x*1.4)*he+(Et()-.5)*ye*he*3,x.vz+=(-6.5*6.5*x.tiltZ-2*Le*6.5*x.vz-le.z*1.4)*he+(Et()-.5)*ye*he*3,x.tiltX+=x.vx*he,x.tiltZ+=x.vz*he;let T=o.motion*.05,N=El(x.tiltX+Math.sin(V*1.3)*T,-.5,.5),j=El(x.tiltZ+Math.cos(V*1.1)*T*.7,-.5,.5),de=(o.fill-.5)*2*(Qi-.12);F.set(N,1,j).normalize(),x.plane.normal.copy(F).negate(),x.plane.constant=de,x.plane.applyMatrix4(i.matrixWorld);let ae=Math.sqrt(Math.max(0,(Qi-.015)**2-de*de));x.holder.position.copy(F).multiplyScalar(de),x.holder.quaternion.setFromUnitVectors(new B(0,1,0),F),x.surf.scale.setScalar(ae*.995),E.liqTime.value=V,E.liqAmp.value=.004+o.motion*.012+Math.min(.03,Math.hypot(x.vx,x.vz)*.01),E.liqColour.value.copy(o.colour),x.mat.color.copy(o.colour).lerp(new Ce(1,1,1),.25),x.surfMat.color.copy(o.colour).lerp(new Ce(1,1,1),.6),x.mat.emissive.copy(o.colour).multiplyScalar(.8)}function Y(){}let O={gelTime:{value:0},gelAmp:{value:0}};function G(){let V=a(new Sn({color:"#fff6ea",roughness:.22,metalness:0,sheen:1,sheenRoughness:.3,sheenColor:new Ce("#ffffff"),clearcoat:1,clearcoatRoughness:.08,emissive:new Ce("#9a7444"),emissiveIntensity:.6,envMapIntensity:2.2}));V.onBeforeCompile=le=>{Object.assign(le.uniforms,O),le.vertexShader=`uniform float gelTime; uniform float gelAmp;
`+le.vertexShader.replace("#include <begin_vertex>",`
        #include <begin_vertex>
        float gw = sin(position.y * 4.0 + gelTime * 1.7) * sin(position.x * 3.0 - gelTime * 1.3) + .5 * sin(position.z * 5.0 + gelTime * 2.3);
        transformed += normal * gelAmp * gw;`)},V.customProgramCacheKey=()=>"orb-gel-v1";let he=new at(a(new Es(1,n?4:5)),V);s.gel=he,he.position.y=.02,i.add(he),s.gelMat=V}function ee(V,he){let le=.3+o.amount*.22;s.gel.scale.set(le,le*(1-.06*he),le),O.gelTime.value=V*(.4+o.motion),O.gelAmp.value=.015+o.motion*.03+he*.04,s.gelMat.color.copy(o.colour).lerp(new Ce(1,1,1),.3),s.gelMat.emissive.copy(o.colour).multiplyScalar(.85+he*.5)}let K=null,oe=new B,Z=new B,ie=performance.now()/1e3;return{get kind(){return r},set(V={}){V.kind&&V.kind!==r&&(r=V.kind,r==="beads"&&!s.beads&&_(),r==="glitter"&&!s.glitter&&v(),r==="liquid"&&!s.liquid&&I(),r==="gel"&&!s.gel&&G());for(let he of["amount","size","motion","fill"])V[he]!=null&&(o[he]=El(+V[he]));V.colour&&o.colour.set(V.colour);for(let[he,le]of Object.entries(s))le?.isObject3D&&(le.visible=he===r)},step({x:V=0,y:he=0,d:le=100,energy:ye=0,shake:Fe=0}={}){let Le=performance.now()/1e3,T=Math.min(.05,Math.max(.001,Le-ie));ie=Le;let N=new B(V/le*2,-he/le*2,0);if(K){let ae=N.clone().sub(K).divideScalar(T);Z.copy(ae).sub(oe).divideScalar(T).clampLength(0,60),oe.copy(ae)}K=N;let j=Z.clone().multiplyScalar(-.05),de=Fe*8+ye*2.5*o.motion;return r==="beads"?b(T,j,de):r==="glitter"?C(Le,T,de):r==="liquid"?k(Le,T,j,de):r==="gel"&&ee(Le,ye),r!=="light"},restorePlane:Y,dispose(){for(let V of Object.values(s))V?.isObject3D&&V.removeFromParent();c.forEach(V=>V.dispose?.()),s.beads?.dispose?.(),s.glitter?.dispose?.()}}}var fn=Object.freeze({transmission:1,roughness:.055,ior:1.5,thickness:.65,clearcoat:0,attenuationDistance:1/0,light:"#f3d8c5",sourceIntensity:1.2});async function Dh({canvas:i,surface:e,onUnavailable:t,onRestored:n,preset:s="baseline",backdropColor:r="#060605",maxPixelRatio:o,feather:l=!1,renderOnChange:c=!0}){let a=s!=="baseline",h=s==="volume"||s==="master",d=matchMedia("(max-width: 600px)").matches,u=()=>o??(matchMedia("(max-width: 600px)").matches?1.25:1.75),p=new $i({canvas:i,alpha:!0,antialias:!0,powerPreference:"low-power"});p.setPixelRatio(Math.min(devicePixelRatio||1,u())),p.debug.checkShaderErrors=!document.querySelector('meta[name="lo-entries"]');let _=new Ge;p.outputColorSpace=vt,p.toneMapping=Jt,p.transmissionResolutionScale=d?.75:1;let b=new en,m=new St(30,1,.1,40);m.position.z=Math.sqrt(1+(2.8/Math.tan(Math.PI/12))**2);let f=new Xt;b.add(f);let S=new Sn({color:"#ffffff",metalness:0,transmission:fn.transmission,opacity:1,roughness:fn.roughness,ior:fn.ior,thickness:fn.thickness,clearcoat:fn.clearcoat,attenuationColor:"#ffffff",attenuationDistance:fn.attenuationDistance,envMapIntensity:.9}),R=new at(new bn(1,d?48:64,d?32:48),S);f.add(R);let v={orbSource:{value:new B(-.1,-.78,.1)},orbEye:{value:m.position.clone()},orbRadiance:{value:new Ce(h?"#f2d6a5":"#f2d6c6").multiplyScalar(.85)},orbWarm:{value:h?1:0},orbEnergy:{value:1},orbTint:{value:new Ce(1,1,1)},orbSpread:{value:1},orbWobble:{value:0},orbWobbleTime:{value:0}};S.onBeforeCompile=D=>{Object.assign(D.uniforms,v),D.vertexShader=`varying vec3 orbLocalPosition;
      uniform float orbWobble; uniform float orbWobbleTime;
      // Low-order modes only (a soft body, not noise): squash/stretch along a
      // slowly turning axis plus one travelling third-order lobe.
      float orbDisp(vec3 n) {
        vec3 ax = normalize(vec3(sin(orbWobbleTime * .7), 1.0, cos(orbWobbleTime * .5) * .6));
        float c = dot(n, ax);
        return orbWobble * ((1.5 * c * c - .5) * sin(orbWobbleTime * 5.2) + .6 * n.x * n.y * n.z * 4.0 * cos(orbWobbleTime * 3.7 + n.y * 2.0));
      }
    `+D.vertexShader,D.vertexShader=D.vertexShader.replace("#include <beginnormal_vertex>",`
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
      #endif`),D.vertexShader=D.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
orbLocalPosition = position;
if (orbWobble > 0.0) transformed = normalize(position) * (1.0 + orbDisp(normalize(position)));`),D.fragmentShader=`
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
    `+D.fragmentShader,D.fragmentShader=D.fragmentShader.replace("#include <emissivemap_fragment>",`
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
    `)},S.customProgramCacheKey=()=>"crystal-volume-return-v5-elastic";let M=Ih(R.geometry,v.orbEye.value,{warmVolume:h});f.add(M.mesh);let w=new Rs(fn.light,fn.sourceIntensity,4,2);w.position.copy(v.orbSource.value),f.add(w);let C=new Xt;f.add(C);let x=Lh({body:f,spin:C,renderer:p,compact:d}),E=!1,I={},F=0,k=0,Y=0,O={x:0,v:0},G=0,ee=performance.now()/1e3,K=new en;K.background=new Ce(a?"#050403":"#242121");let oe=[],Z=document.createElement("canvas");Z.width=Z.height=64;let ie=Z.getContext("2d"),V=ie.createRadialGradient(32,32,0,32,32,32);V.addColorStop(0,"rgba(255, 255, 255, 1)"),V.addColorStop(.4,"rgba(255, 255, 255, 0.85)"),V.addColorStop(.7,"rgba(255, 255, 255, 0.22)"),V.addColorStop(1,"rgba(255, 255, 255, 0)"),ie.fillStyle=V,ie.fillRect(0,0,64,64);let he=new yn(Z);he.colorSpace=vt,oe.push(he);function le(D,H,$,ue,me,we=0){let P=new hn(D,H),fe=new Dn({color:new Ce(me).multiplyScalar(ue),side:It,map:he,transparent:!0,depthWrite:!1}),Q=new at(P,fe);Q.position.set(...$),Q.lookAt(0,0,0),Q.rotateZ(we),K.add(Q),oe.push(P,fe)}le(a?2:.75,a?4:2.6,[4.5,4,-4.5],a?9:16,a?"#ffe2ad":"#fff0e0",-.3),le(.45,3,[-5,1,-1],a?1.6:1.1,a?"#efcf9c":"#edd6c4",.14),le(4.2,1.4,[0,-4,-1.5],a?3:1.04,a?"#f3d5a4":fn.light),a?(le(.7,3.2,[4,2,1],1.6,"#fbe6c4",-.28),le(6,2.5,[-4,4,-5],1.1,"#edd3a8",.5),le(2.2,6,[-5.5,.5,-4],1.1,"#efcc96",.1),le(1.6,5,[5.5,-1,-4],2.2,"#f2c88a",-.15),le(5,.65,[-1,-3,-6],2,"#efd09b",.08)):(le(16,16,[2,3,-7],.8,"#e7d8ca"),le(3,7,[5,-.5,-3],.8,"#eddacb"));let ye=new ei(p),Fe=ye.fromScene(K,.035,.1,20,{size:d?128:256});b.environment=Fe.texture,oe.forEach(D=>D.dispose()),ye.dispose();let Le=null;function T(){let D=new en;D.background=new Ce("#6f583d");let H=new yn(Z);H.colorSpace=vt;let $=[H],ue=(we,P,fe,Q,ge,_e=0)=>{let re=new hn(we,P),Te=new Dn({color:new Ce(ge).multiplyScalar(Q),side:It,map:H,transparent:!0,depthWrite:!1}),ce=new at(re,Te);ce.position.set(...fe),ce.lookAt(0,0,0),ce.rotateZ(_e),D.add(ce),$.push(re,Te)};ue(7,3.2,[0,6,-1.5],2.6,"#fff5e6"),ue(1.4,5,[5,2.5,-3],2,"#fff1dc",-.2),ue(1.2,4,[-5.5,1,-2],.9,"#f0dcbc",.15),ue(14,3.5,[0,-5,-1],.35,"#5a4630");let me=new ei(p);Le=me.fromScene(D,.04,.1,20,{size:d?128:256}),$.forEach(we=>we.dispose()),me.dispose()}let N=document.createElement("canvas");N.width=N.height=64;{let D=N.getContext("2d"),H=D.createRadialGradient(32,32,0,32,32,32);H.addColorStop(0,"rgba(255,255,255,1)"),H.addColorStop(.72,"rgba(255,255,255,.95)"),H.addColorStop(.86,"rgba(255,255,255,.2)"),H.addColorStop(1,"rgba(255,255,255,0)"),D.fillStyle=H,D.fillRect(0,0,64,64)}let j={ivory:{background:"#7a6650",sources:[[5.5,1.1,[0,6,-1.5],2.4,"#fff6e8"],[.5,3.6,[4.6,2.4,-2.6],2.6,"#fff3df",-.18],[.35,2.4,[-5,1.6,-2],1.3,"#f6e6cc",.12],[16,4,[0,-5.2,-1],.55,"#e2d4bc"],[2.2,6,[-5.2,0,-3.2],.32,"#4a3524",.05],[1.6,5,[5.4,-.6,-3.6],.3,"#4a3524",-.05],[14,1.1,[0,-1.3,-6],.4,"#3a2a1c"]]},dark:{background:"#140f0b",sources:[[4,.8,[0,6,-1.5],1.6,"#ffe9c8"],[.4,3.2,[4.8,2,-2.4],2.4,"#ffdfae",-.2],[.3,2.2,[-5,1,-2],.9,"#e9c58f",.15],[14,3,[0,-5,-1],.18,"#3a2a1b"]]}};j.gallery={background:"#7d8084",sources:[[3.4,2.4,[-3.4,3,3.6],3.4,"#ffffff",.35],[.55,4.2,[4.4,.9,2.6],2.8,"#fff7ec",-.12],[9,1,[0,6.2,.5],1.4,"#ffffff"],[16,5,[0,-5.2,0],.85,"#eceeef"],[2.6,7,[-5.6,0,-1],.06,"#1c1c1d"],[2.6,7,[5.8,-.2,-1.6],.06,"#1c1c1d"],[12,2.2,[0,-1,-6],.1,"#2a2a2b"]]},j.smoke={background:"#1e2022",sources:[[3,2.2,[-3.4,3,3.6],3,"#ffffff",.35],[.45,4.6,[4.4,.9,2.6],2.4,"#f4ead8",-.12],[.35,4.6,[-4.6,.4,2.2],1.6,"#ffffff"],[9,.8,[0,6.2,.5],.9,"#ffffff"],[16,5,[0,-5.2,0],.18,"#3a3c3e"],[12,4,[0,.5,-6],.08,"#1a1b1c"]]};function de(D=.65,H=.55){return{background:"#25272b",sources:[[.32,5.4,[-3.6,.5,2.6],1+6*D,"#ffe3bd"],[.32,5.4,[3.6,.5,2.6],1+6*H,"#eef2fb"],[2.6,1.6,[-1.6,3.6,3.4],.9,"#ffffff",.3],[5,.8,[0,6,0],.5,"#ffffff"],[14,4,[0,-5,0],.22,"#3a3b40"],[10,5,[0,.5,-6],.14,"#34363b"]]}}let ae={};function Ee(D){if(ae[D])return ae[D];let H=j[D];if(D.startsWith("chamber:")){let[,P,fe]=D.split(":");H=de(+P,+fe)}let $=new en;$.background=new Ce(H.background);let ue=new yn(N);ue.colorSpace=vt;let me=[ue];for(let[P,fe,Q,ge,_e,re=0]of H.sources){let Te=new hn(P,fe),ce=new Dn({color:new Ce(_e).multiplyScalar(ge),side:It,map:ue,transparent:!0,depthWrite:!1}),De=new at(Te,ce);De.position.set(...Q),De.lookAt(0,0,0),De.rotateZ(re),$.add(De),me.push(Te,ce)}let we=new ei(p);if(D.startsWith("chamber:"))for(let P of Object.keys(ae))P.startsWith("chamber:")&&P!==D&&Object.keys(ae).length>6&&(ae[P].dispose(),delete ae[P]);return ae[D]=we.fromScene($,.012,.1,20,{size:d?128:256}),me.forEach(P=>P.dispose()),we.dispose(),ae[D]}let Je={};function ze(D){if(Je[D])return Je[D];let H=256,$=new Float32Array(H*H),ue=(()=>{let ce=1234+D.length*97;return()=>(ce=ce*16807%2147483647)/2147483647})(),me=(ce,De)=>$[(De+H)%H*H+(ce+H)%H],we=(ce,De)=>{let Ne=new Float32Array(H*H);for(let yt=0;yt<H;yt++)for(let bt=0;bt<H;bt++){let Tn=0,$s=0;for(let mi=-De;mi<=De;mi++)for(let ni=-De;ni<=De;ni++)Tn+=ce[(yt+mi+H)%H*H+(bt+ni+H)%H],$s++;Ne[yt*H+bt]=Tn/$s}return Ne};if(D==="grain"){for(let ce=0;ce<$.length;ce++)$[ce]=ue();$.set(we($,1))}else if(D==="frost"){for(let Ne=0;Ne<$.length;Ne++)$[Ne]=ue();let ce=we($,1),De=we($,3);for(let Ne=0;Ne<$.length;Ne++)$[Ne]=ce[Ne]*.6+De[Ne]*1.4}else if(D==="ripple")for(let ce=0;ce<H;ce++)for(let De=0;De<H;De++)$[ce*H+De]=.5+.5*Math.sin(ce/H*Math.PI*2*9+Math.sin(De/H*Math.PI*2*2)*1.2);else if(D==="brushed"){for(let ce=0;ce<H;ce++){let De=ue();for(let Ne=0;Ne<H;Ne++)De=De*.985+ue()*.015,$[ce*H+Ne]=De+ue()*.05}$.set(we($,1))}else{for(let Ne=0;Ne<$.length;Ne++)$[Ne]=ue();let ce=we($,4),De=we(ce,4);for(let Ne=0;Ne<$.length;Ne++)$[Ne]=Math.abs(De[Ne]-.5)*4}let P=1/0,fe=-1/0;for(let ce of $)P=Math.min(P,ce),fe=Math.max(fe,ce);let Q=document.createElement("canvas");Q.width=Q.height=H;let ge=Q.getContext("2d"),_e=ge.createImageData(H,H),re=D==="ripple"?2.2:D==="brushed"?5:4;for(let ce=0;ce<H;ce++)for(let De=0;De<H;De++){let Ne=(me(De+1,ce)-me(De-1,ce))/(fe-P||1)*re,yt=(me(De,ce+1)-me(De,ce-1))/(fe-P||1)*re,bt=Math.hypot(Ne,yt,1),Tn=(ce*H+De)*4;_e.data[Tn]=(-Ne/bt*.5+.5)*255,_e.data[Tn+1]=(-yt/bt*.5+.5)*255,_e.data[Tn+2]=(1/bt*.5+.5)*255,_e.data[Tn+3]=255}ge.putImageData(_e,0,0);let Te=new yn(Q);return Te.wrapS=Te.wrapT=Ni,Te.colorSpace=dn,Te.anisotropy=4,Je[D]=Te}let Be=document.createElement("canvas"),Ye=Be.getContext("2d"),Oe=new yn(Be);Oe.colorSpace=vt,Oe.generateMipmaps=!1,b.background=Oe;let je=null,tt=112,Ve=314,st=!1,ct=null,L=()=>{c&&ct&&xe(ct)},ft=Ph(p,{strength:s==="master"?.45:.24,feather:l});function et(D){let H=Ye;if(H.clearRect(0,0,Ve,Ve),H.fillStyle=r,H.fillRect(0,0,Ve,Ve),je)je(H,{...D,extent:Ve});else if(e?.width){let $=e.width/D.viewportWidth,ue=(D.diameter||tt)*2.8;H.drawImage(e,(D.x-ue/2)*$,(D.y-ue/2)*$,ue*$,ue*$,0,0,Ve,Ve)}Oe.needsUpdate=!0}function A(D){tt=D,Ve=Math.ceil(tt*2.8);let H=Math.min(devicePixelRatio||1,u(),Math.max(1,1500/Ve)),$=p.getSize(_);($.x!==Ve||$.y!==Ve||p.getPixelRatio()!==H)&&(p.setDrawingBufferSize(Ve,Ve,H),ft.resize(Ve,H)),(Be.width!==Ve||Be.height!==Ve)&&(Be.width=Be.height=Ve,Oe.dispose(),Oe=new yn(Be),Oe.colorSpace=vt,Oe.generateMipmaps=!1,b.background=Oe),ct&&xe(ct)}let g=m.position.z,z=new B;function q(D){f.scale.set(D.scaleX,D.scaleY,D.scaleX),f.position.y=D.scaleY-1;let H=D.view?.yaw||0,$=D.view?.pitch||0;m.position.set(Math.sin(H)*Math.cos($),Math.sin($),Math.cos(H)*Math.cos($)).multiplyScalar(g),m.up.set(0,1,0),m.lookAt(0,0,0),m.updateMatrixWorld(),v.orbEye.value.set(m.position.x/D.scaleX,(m.position.y-f.position.y)/D.scaleY,m.position.z/D.scaleX),D.focus&&(wl(D.focus,M.uniforms.orbCore.value),v.orbSource.value.copy(M.uniforms.orbCore.value),w.position.copy(v.orbSource.value))}function te(D,H){return q(H),f.updateMatrixWorld(),z.set(D.x,D.y,D.z).applyMatrix4(f.matrixWorld).project(m),{x:z.x*Ve/2,y:-z.y*Ve/2}}let pe=new Ge;function xe(D){if(st)return;ct=D,et(D),q(D);let H=(D.intensity??1)*(1+k*1.1),$=.08+.92*Math.pow(H,.7);v.orbEnergy.value=$*(1+D.impact*.1),M.uniforms.orbEnergy.value=$*(1+D.impact*.1),w.intensity=fn.sourceIntensity*$*(1+D.impact*.12);let ue=performance.now()/1e3,me=Math.min(.05,ue-ee);ee=ue,O.v+=(-140*O.x-2*.16*12*O.v+G*30+k*6)*me,O.x+=O.v*me;let we=Y*(.012+Math.abs(O.x)*.05)+k*.034;v.orbWobble.value=Math.min(.045,we),v.orbWobbleTime.value=ue,M.uniforms.orbSpeech.value=k,M.uniforms.orbTime.value=ue,D.shellX!=null?x.step({x:D.shellX,y:D.shellY,d:D.shellD,energy:k,shake:G}):x.step({energy:k,shake:G}),G*=Math.exp(-me/.12),C.rotation.y=F,S.normalMap&&(S.normalMap.offset.x=F/(Math.PI*2)),R.visible=D.shell!==!1,M.mesh.visible=D.volume!==!1,i.dataset.layers=`${R.visible}/${M.mesh.visible}/${D.bloom!==!1}`,i.dataset.material=s,i.style.opacity=D.formation;let P=te(M.uniforms.orbCore.value,D);pe.set(.5+P.x/Ve,.5-P.y/Ve),ft.render(b,m,D.bloom!==!1,pe)}function ne(D){D.preventDefault(),t("WebGL unavailable")}i.addEventListener("webglcontextlost",ne);function se(){st||n?.()}i.addEventListener("webglcontextrestored",se),A(tt);function ve(){st||(st=!0,i.removeEventListener("webglcontextlost",ne),i.removeEventListener("webglcontextrestored",se),R.geometry.dispose(),x.dispose(),M.dispose(),ft.dispose(),[S,Oe,Fe,Le,...Object.values(ae)].forEach(D=>D?.dispose()),p.dispose())}try{await p.compileAsync(b,m),xe({x:innerWidth*.5,y:innerHeight*.54,diameter:tt,viewportWidth:innerWidth,formation:0,scaleX:1,scaleY:1,impact:0,intensity:.7})}catch(D){throw ve(),D}return{resize:A,render:xe,dispose:ve,project:te,setNeutral(D){E=!!D;let H=M.uniforms;for(let $ of["ivory","champagne","gold","mist","warm","pearl"])if(I[$]??=H[$].value.clone(),E){let ue=I[$],me=ue.r*.2126+ue.g*.7152+ue.b*.0722;H[$].value.setRGB(me*1,me*1,me*.985)}else H[$].value.copy(I[$]);v.orbRadiance.value.set(E?"#ececea":h?"#f2d6a5":"#f2d6c6").multiplyScalar(.85),L()},get neutral(){return E},get interiorKind(){return x.kind},get elastic(){return Y},setInterior(D){x.set(D),L()},setElastic(D){Y=Math.max(0,Math.min(1,D))},setSpeech(D){k=Math.max(0,Math.min(1,D))},setRibbon(D){M.uniforms.orbRibbon.value=Math.max(0,Math.min(1,D))},nudge(D=1){G=Math.min(1.5,G+D)},setObjectYaw(D){let H=D-F;F=D,Math.abs(H)>.002&&(G=Math.min(1,G+Math.abs(H)*.6))},get animated(){return x.kind!=="light"||Y>0||k>0||M.uniforms.orbRibbon.value>.001||Math.abs(O.x)>1e-4},loseContext:()=>p.forceContextLoss(),setEnvironment(D){b.environment=D||Fe.texture,L()},setBackdropSource(D){je=D,L()},setFeather(D,H){ft.setFeather(D,H),L()},setOptics({fill:D,lobe:H,core:$,clean:ue,wall:me}={}){let we=M.uniforms;D!=null&&(we.opticsFill.value=D),H!=null&&(we.opticsLobe.value=H),$!=null&&(we.coreSize.value=$),ue!=null&&(we.opticsClean.value=ue),me!=null&&(we.opticsWall.value=me),L()},setBloom(D){ft.setStrength(D),L()},setMono(D){ft.setMono(D),L()},setLight({tint:D,spread:H}={}){D&&(v.orbTint.value.setRGB(...D),M.uniforms.lightTint.value.setRGB(...D),E?w.color.setRGB(...D):w.color.set(fn.light).multiply(v.orbTint.value)),H!=null&&(v.orbSpread.value=H,M.uniforms.lightSpread.value=H),L()},prepareTone(D){D==="light"&&!Le?T():j[D]&&Ee(D)},setMaterial({roughness:D,envMapIntensity:H,thickness:$,ior:ue,tint:me,tintDistance:we,specular:P}={}){D!=null&&(S.roughness=D),H!=null&&(S.envMapIntensity=H),$!=null&&(S.thickness=$),ue!=null&&(S.ior=ue),P!=null&&(S.specularIntensity=P),me&&S.attenuationColor.setRGB(...me),we!=null&&(S.attenuationDistance=we>0?we:1/0),L()},setTexture({kind:D="none",amount:H=.5,scale:$=1,rotation:ue=0}={}){let me=D==="none"?null:ze(D);(S.normalMap??null)!==me&&(S.normalMap=me,S.needsUpdate=!0),me&&(me.repeat.set(2*$,$),me.rotation=ue,me.center.set(.5,.5),S.normalScale.set(H,H)),L()},setEnvironmentLevel(D){b.environmentIntensity=Math.max(0,D),L()},setWorld(D){b.environment=Ee(D).texture,L()},setVolumeWorld(D){M.uniforms.lightWorld.value=D,L()},setTone(D){D==="light"&&!Le&&T(),b.environment=D==="light"?Le.texture:Fe.texture,M.uniforms.lightWorld.value=D==="light"?1:0,ft.setTone(D),L()}}}var Nh=(i,e=0,t=1)=>Math.max(e,Math.min(t,Number.isFinite(i)?i:e)),Uh=i=>{let e=Nh(i);return e*e*(3-2*e)};var Hv=Object.freeze({first:410,second:680,dock:830,ready:1220,waveEnd:1820,release:440}),Gv=Object.freeze({x:-.07,y:-.55});function Wg(i,e,t,n,s,r){i.save(),i.translate(e,t),i.scale(n,s);let o=i.createRadialGradient(0,0,0,0,0,1);r.forEach(([l,c])=>o.addColorStop(l,c)),i.fillStyle=o,i.fillRect(-1,-1,2,2),i.restore()}function Fh(i,{pose:e,intensity:t,focus:n,width:s,height:r}){let o=(...m)=>Wg(i,...m),l=.3+.7*Uh((.25-n.y)/.8),c=e.diameter,a=(.08+t*.75)*(e.contact??1)*e.formation*l,h=e.view,d=h?.tilt??1,u=h?h.contact.x+(h.ground.x-h.contact.x)*.35:e.x+n.x*c*.075,p=h?h.contact.y:e.groundY??e.y+c*.486,_=h?h.mirror.x:u,b=c*.75/Math.sqrt(d);a<=0||(i.save(),i.globalCompositeOperation="lighter",o(u,p+c*.04*d,c*1.25,c*.2*d,[[0,`rgba(214,168,104,${a*.2})`],[.45,`rgba(150,112,64,${a*.07})`],[1,"rgba(90,66,36,0)"]]),i.save(),i.beginPath(),i.rect(0,p,s,r),i.clip(),o(_,p,c*.13,b,[[0,`rgba(255,228,180,${a*.42})`],[.3,`rgba(234,186,118,${a*.16})`],[1,"rgba(200,150,90,0)"]]),o(_,p,c*.05,b*.53,[[0,`rgba(255,238,206,${a*.35})`],[1,"rgba(230,180,110,0)"]]),i.restore(),o(u+c*.02,p,c*.6,c*.045*d,[[0,`rgba(255,232,190,${a*.75})`],[.3,`rgba(244,200,132,${a*.3})`],[1,"rgba(214,160,92,0)"]]),o(u,p,c*.26,c*.07*d,[[0,`rgba(255,240,212,${a*.85})`],[.5,`rgba(240,196,128,${a*.22})`],[1,"rgba(206,151,72,0)"]]),i.restore())}var qs=2.8,es=Object.freeze({x:-.1,y:-.76,z:.1}),Xg=.7,qg=Object.freeze({x:.34,up:.3,down:.05,depth:.16}),Oh=Object.freeze({x:.62,up:1.3,down:.06,depth:.2}),Bh=.157,ea={high:2,balanced:1.5,low:1},zh=(()=>{try{let i=document.createElement("canvas").getContext("2d");return i.filter="blur(1px)",i.filter==="blur(1px)"}catch{return!1}})(),Ys=(i,e,t)=>Math.min(t,Math.max(e,i));function kh({x:i,y:e,z:t}){let n=Math.hypot(i,e,t),s=.6,r=.78;if(n<=s)return{x:i,y:e,z:t};let l=(s+(r-s)*(1-Math.exp(-(n-s)/(r-s))))/n;return{x:i*l,y:e*l,z:t*l}}async function Vh({container:i,diameter:e=400,quality:t="high",background:n="#0b0907",driven:s=!1}={}){if(!i)throw new Error("createLightOrb: container is required");getComputedStyle(i).position==="static"&&(i.style.position="relative");let r=document.createElement("div");r.className="light-orb-master",r.style.cssText="position:absolute;left:0;top:0;pointer-events:none;transform-origin:50% 50%;will-change:transform,opacity;";let o=document.createElement("canvas"),l=document.createElement("canvas");for(let T of[o,l])T.setAttribute("aria-hidden","true"),T.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;",r.append(T);i.append(r);let c=o.getContext("2d"),a={pose:{x:null,y:null,diameter:e,squash:0},renderDiameter:Math.round(e),focus:{...es},focusTarget:{...es},view:{yaw:0,pitch:0},visibility:1,contact:1,emission:1,backdrop:null,disposed:!1},h=0,d=0,u=0,p=null,_=null,b=0,m=!1,f=null,S=!1,R=!0,v="",M=T=>Math.round(T*10),w=T=>Math.round(T*1e3),C=T=>T<.001?0:Math.round(T*1e3)/1e3,x=()=>{let T=a.pose,N=a.focus;return[M(T.x??-1),M(T.y??-1),M(T.diameter),w(T.squash),a.renderDiameter,w(a.visibility),w(a.emission),w(a.contact),Math.round(N.x*1e4),Math.round(N.y*1e4),Math.round(N.z*1e4),w(a.view.yaw),w(a.view.pitch)].join()},E=await Dh({canvas:l,surface:o,preset:"master",backdropColor:n,maxPixelRatio:ea[t]??ea.high,feather:!0,renderOnChange:!1,onUnavailable:()=>r.dispatchEvent(new CustomEvent("lightorb:unavailable",{bubbles:!0})),onRestored:()=>{a.disposed||(r.dispatchEvent(new CustomEvent("lightorb:restored",{bubbles:!0})),ye())}}),I=T=>Math.ceil(T*qs);function F(){let T=I(a.renderDiameter);r.style.width=r.style.height=`${T}px`;let N=Math.min(devicePixelRatio||1,ea[t]??ea.high);o.width=o.height=Math.round(T*N),c.setTransform(N,0,0,N,0,0),E.resize(a.renderDiameter)}function k(){return{x:a.pose.x??i.clientWidth/2,y:a.pose.y??i.clientHeight/2}}function Y(){let{x:T,y:N}=k(),j=I(a.renderDiameter),de=a.pose.diameter/a.renderDiameter;r.style.transform=`translate(${T-j/2}px, ${N-j/2}px) scale(${de})`,r.style.opacity=String(a.visibility),r.style.visibility=a.visibility>0?"visible":"hidden"}function O(){let T=I(a.renderDiameter),N=Ys(a.pose.squash,0,.2),j=a.focus;return{x:T/2,y:T/2,diameter:a.renderDiameter,viewportWidth:T,formation:1,scaleX:1+N*.25,scaleY:1-N,impact:0,intensity:Xg*a.emission,focus:{x:j.x/Xs,y:j.y/Xs,z:j.z},view:{...a.view},shellX:a.pose.x??0,shellY:a.pose.y??0,shellD:a.pose.diameter}}function G(){if(a.disposed||(Y(),a.visibility<=0))return;let T=O(),N=I(a.renderDiameter),j=a.focus,de=ae=>{let Ee=E.project(ae,T);return{x:N/2+Ee.x,y:N/2+Ee.y}};c.clearRect(0,0,N,N),zh&&(c.filter=a.neutral||a.mono?"saturate(0)":"none"),Fh(c,{pose:{x:N/2,y:N/2,diameter:a.renderDiameter,formation:1,contact:a.contact,view:{contact:de({x:0,y:-1,z:0}),ground:de({x:j.x,y:-1,z:j.z}),mirror:de({x:j.x,y:-2-j.y,z:j.z}),tilt:Ys(Math.sin(Bh+a.view.pitch)/Math.sin(Bh),.55,3.5)}},intensity:T.intensity,focus:T.focus,width:N,height:N}),(a.neutral||a.mono)&&!zh&&K(),E.render(T)}let ee=null;function K(){let T=o.width,N=o.height;ee??=document.createElement("canvas"),(ee.width!==T||ee.height!==N)&&(ee.width=T,ee.height=N);let j=ee.getContext("2d"),de=c;j.globalCompositeOperation="copy",j.drawImage(o,0,0),de.save(),de.setTransform(1,0,0,1,0,0),de.globalCompositeOperation="saturation",de.fillStyle="#808080",de.fillRect(0,0,T,N),de.globalCompositeOperation="destination-in",de.drawImage(ee,0,0),de.restore()}function oe(T){h=0;let N=Math.min(.1,(T-(d||T))/1e3);d=T;let j=!1;p&&!p.inside&&T-p.leftAt>600&&(a.focusTarget={...es},a.focusTau=1.6);let de=p?.inside?p.tau??.45:a.focusTau??1.6,ae=1-Math.exp(-N/de);for(let Ee of["x","y","z"]){let Je=a.focusTarget[Ee]-a.focus[Ee];Math.abs(Je)>1e-4?(a.focus[Ee]+=Je*ae,j=!0):a.focus[Ee]=a.focusTarget[Ee]}if(m)m=!1,Y();else if(S&&s){let Ee=x();(R||Ee!==v||E.animated)&&(R=!1,v=Ee,G())}else G();s||(j||p&&!p.inside&&T-p.leftAt<=600?h=requestAnimationFrame(oe):d=0)}function Z(){!s&&!h&&!a.disposed&&(h=requestAnimationFrame(oe))}let ie=new ResizeObserver(()=>{Y(),ye()});ie.observe(i);let V=null,he=()=>{F(),ye(),le()};function le(){V?.removeEventListener("change",he),V=matchMedia(`(resolution: ${devicePixelRatio}dppx)`),V.addEventListener("change",he)}le();function ye(){R=!0,Z()}F(),G();let Fe={element:r,setPose({x:T=a.pose.x,y:N=a.pose.y,diameter:j=a.pose.diameter,squash:de=a.pose.squash}={}){let ae=j!==a.pose.diameter;Object.assign(a.pose,{x:T,y:N,diameter:j,squash:de}),ae&&(clearTimeout(u),u=0),j>a.renderDiameter*1.02?(clearTimeout(u),u=0,a.renderDiameter=Math.round(j*1.06),F(),_!=null&&(_=a.renderDiameter)):_==null&&!u&&j<a.renderDiameter*.9&&(u=setTimeout(()=>{u=0,a.renderDiameter=Math.round(a.pose.diameter),F(),ye()},160)),Z()},holdRaster(T){if(T==null||T===!1){_=null;return}clearTimeout(u),u=0;let N=T===!0?a.renderDiameter:Math.ceil(T);if(N<a.pose.diameter){_=a.renderDiameter;return}if(_=N,N!==a.renderDiameter){if(N<a.renderDiameter&&b<4){b++,m=!0;return}b=0,a.renderDiameter=N,F(),ye()}},setFocus(T,{immediate:N=!1}={}){a.focusTarget=kh({...a.focusTarget,...T}),a.focusTau=.35,N&&(a.focus={...a.focusTarget}),ye()},getFocus:()=>({...a.focus}),attachPointer(T=i,{range:N="subtle"}={}){p?.detach();let j=new AbortController,{signal:de}=j,ae=N==="volume"?Oh:qg,Ee={inside:!1,leftAt:0,tau:N==="volume"?.22:.18,detach:()=>{j.abort(),p===Ee&&(p=null)}};p=Ee;let Je=Be=>{let Ye=i.getBoundingClientRect(),Oe=k(),je=a.pose.diameter*(ae===Oh?1.05:1.5),tt=Math.tanh((Be.clientX-Ye.left-Oe.x)/je),Ve=Math.tanh((Be.clientY-Ye.top-Oe.y)/je);Ee.inside=!0,a.focusTarget=kh({x:es.x+ae.x*tt,y:es.y+(Ve<0?-Ve*ae.up:-Ve*ae.down),z:es.z+ae.depth*(1-Math.min(1,Math.hypot(tt,Ve)))}),Z()},ze=()=>{Ee.inside=!1,Ee.leftAt=performance.now(),Z()};return T.addEventListener("pointermove",Je,{signal:de}),T.addEventListener("pointerleave",ze,{signal:de}),T.addEventListener("pointercancel",ze,{signal:de}),Ee.detach},setVisibility(T){a.visibility=Ys(T,0,1),Z()},setEmission(T){a.emission=Ys(T,0,1.4),Z()},setContact(T){a.contact=Ys(T,0,1),Z()},setView({yaw:T=0,pitch:N=0}={}){a.view={yaw:T,pitch:N},ye()},project(T){let N=k(),j=E.project(T,O()),de=a.pose.diameter/a.renderDiameter;return{x:N.x+j.x*de,y:N.y+j.y*de}},setTone(T){E.setTone(T),ye()},setVolumeWorld(T){E.setVolumeWorld(T),ye()},prepareTone(T){E.prepareTone(T)},setFeather(T=1,N=1.4){f||(E.setFeather(T/qs,N/qs),ye())},lockFeather(T){f=T,T&&E.setFeather(T[0]/qs,T[1]/qs),ye()},setOptics(T){E.setOptics(T),ye()},setLight({tint:T,spread:N}={}){E.setLight({tint:T,spread:N}),ye()},setMaterial(T){E.setMaterial(T),ye()},setWorld(T){E.setWorld(T),ye()},setEnvironmentLevel(T){E.setEnvironmentLevel(T),ye()},setTexture(T){E.setTexture(T),ye()},setBloom(T){E.setBloom(T),ye()},setMono(T){E.setMono(T),a.mono=!!T,ye()},setInterior(T){E.setInterior(T),ye()},setElastic(T){E.setElastic(T),ye()},setSpeech(T){T=C(T),T!==a.speech&&(a.speech=T,E.setSpeech(T),ye())},setRibbon(T){T=C(T),T!==a.ribbon&&(a.ribbon=T,E.setRibbon(T),ye())},setNeutral(T){E.setNeutral(T),a.neutral=!!T,ye()},nudge(T){E.nudge(T),ye()},setObjectYaw(T){E.setObjectYaw(T),ye()},get animated(){return E.animated},get state(){return{interior:E.interiorKind,neutral:E.neutral,elastic:E.elastic}},setBackdrop(T){E.setBackdropSource(T?(N,j)=>{T(N,j),Le(N,j)}:null),ye()},invalidate:ye,render:G,tick(T=performance.now()){a.disposed||oe(T)},setIdleSkip(T){S!==!!T&&(S=!!T,R=!0)},refresh(){R=!0},dispose(){a.disposed||(a.disposed=!0,cancelAnimationFrame(h),clearTimeout(u),p?.detach(),ie.disconnect(),V?.removeEventListener("change",he),E.dispose(),r.remove())}};function Le(T,N){T.drawImage(o,0,0,N.extent,N.extent)}return Fe}var Yg=[{id:"products",label:"Products",route:"#/products",line:"Interactive digital pieces for your website, ready to use.",action:"Explore products",clip:"products",words:["products","product","pieces","piece","objects","gallery","shop"]},{id:"templates",label:"Templates",route:"#/templates",line:"Complete compositions to start from.",action:"Browse templates",clip:"templates",words:["templates","template","compositions","websites","cassettes"]},{id:"studio",label:"Studio",route:"#/studio",line:"Coming soon: a creative space to explore and experiment.",action:"Join the Studio list",clip:"studio",words:["studio","editor","customize","customise","edit","workshop"]},{id:"sound",label:"Sound",route:"#/sound",line:"Voices and the quiet sounds of glass.",action:"Listen",clip:"sound",words:["sound","sounds","voice","voices","audio","listen"]},{id:"design",label:"Web Design",route:"#/design",line:"A website designed and built around your idea.",action:"Start a project",clip:null,words:["design","commission","hire","custom","bespoke","project","inquiry","enquiry"]},{id:"about",label:"About",route:"#/about",line:"The person behind the work.",action:"Meet Carla",clip:null,words:["about","carla"]}],ti=i=>Yg.find(e=>e.id===i),Kv=[ti("products"),ti("templates"),ti("design"),{...ti("studio"),soon:!0},ti("about")];var jv=[{...ti("products"),line:"Interactive digital pieces, ready to use."},{...ti("templates"),line:"Complete website experiences to explore."},{...ti("design"),line:"A website made around your idea."}];var Tl=i=>(Object.values(i).forEach(e=>e&&typeof e=="object"&&Tl(e)),Object.freeze(i)),ta=Tl({version:1,shell:{roughness:.01,thickness:.78,ior:1.58,tint:"#cdd2cf",tintAmount:.72,elastic:0},interior:{kind:"light",amount:.5,size:.5,motion:.4,fill:.5,colour:"#f1f0ec"},light:{colour:"#f6f6f3",strength:.9,x:-.04,y:-.3,z:.12,spread:.8,glow:.3},motion:{idle:0},voice:{enabled:!0,response:.6}}),Zs=(i,e,t,n)=>Tl({id:i,name:e,line:t,family:"orb",config:{...structuredClone(ta),...Object.fromEntries(Object.entries(n).map(([s,r])=>[s,{...ta[s],...r}]))}}),na=[Zs("original","Light","Clear glass holding one soft white light.",{}),Zs("beads","Beads","Small glass beads resting and rolling inside the shell.",{interior:{kind:"beads",amount:.6,size:.55,motion:.45},light:{strength:.7},shell:{thickness:.15,ior:1.3}}),Zs("glitter","Glitter","Fine reflective flecks suspended in the volume.",{interior:{kind:"glitter",amount:.6,size:.35,motion:.35,colour:"#f4f4f2"}}),Zs("liquid","Liquid","A clear liquid with a meniscus that moves with the glass.",{interior:{kind:"liquid",fill:.42,motion:.5,colour:"#dfe3e1"},light:{strength:.78}}),Zs("gel","Gel","A soft gel body; the shell answers with a damped give.",{interior:{kind:"gel",amount:.55,motion:.45,colour:"#e4e6e3"},shell:{elastic:.55}})],Qv=na[0].config,Hh=i=>na.find(e=>e.id===i)??na[0],Zg=[{id:"orb",name:"The Orb",kind:"Interactive object",published:!0,line:"A 3D sphere for your own work, in twenty versions: glass, metal, porcelain, bloom, and glass with light, sparkle or beads inside.",receives:["ES module (Three.js r186) with the sphere and its material","The version you choose","Integration notes and dependency list"],source:["dist/light-orb.js","dist/orb-three.js","dist/orb-lighting.js","dist/orb-floor.js"],preview:"orb",studio:!0,presets:na.map(i=>i.id),readiness:"preview_ready",missing:["price","checkout provider","packaged download (source export not yet assembled)"],price:null},{id:"orb-slider",name:"Orb Slider",kind:"Interactive control",published:!0,code:"kit",line:"A glass capsule whose thumb is a small orb. Slide it to enter; a spring brings it home.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Keyboard and pointer support","Six materials"],source:["dist/intro/activation.js","dist/intro/glass-control.js"],preview:"slider",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package (currently embedded in the intro)"],price:null},{id:"orb-wave",name:"Orb Wave",kind:"Surface effect",published:!1,line:"The ripple the Orb leaves on the floor when it lands, drawn in light.",receives:["Light-world shader source","Impact trigger API","Integration notes"],source:["dist/intro/light-world.js"],preview:"wave",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"background-pack",name:"Background Pack",kind:"Two environments",published:!1,line:"A dark world and a light one, and the change between them.",receives:["Dark and warm environment shader","Exposure transition","Integration notes"],source:["dist/intro/light-world.js"],preview:"backgrounds",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","standalone package"],price:null},{id:"crystal-controls",name:"Crystal Controls",kind:"Interface kit",published:!0,code:"kit",line:"Buttons, switches, fields and sliders in six glass materials, with light that follows the pointer.",receives:["One self-contained HTML file per material (HTML, CSS variables, plain JS)","Every state: hover, focus, pressed, selected, disabled, loading","Six materials"],source:["dist/app/glass.css.js"],preview:"controls",studio:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged download"],price:null}];var ey=Zg.filter(i=>i.published!==!1),Jg=[{id:"beauty",name:"Beauty",label:"beauty.thelightorb.com",sector:"beauty",isNew:!0,category:"Beauty \u2014 Cosmetics",subtitle:"Website templates",showcase:!0,line:"Complete websites for skincare, cosmetics and beauty brands. First in the collection: Berries.",cover:{src:"./media/templates/berries.cover.jpg",from:"Berries, first template of the Beauty collection",meta:"./media/templates/berries.cover.json"},cta:"Enter Beauty",includes:["Berries \u2014 Skincare","Live preview, desktop and phone","Opens the full website"],published:!0,readiness:"showcase",price:null},{id:"the-light-orb",name:"The Light Orb",line:"This website\u2019s own beginning: the Orb as host, a quiet greeting, the quotation and the four destinations.",cover:{src:"./media/templates/the-light-orb.cover.jpg",from:"dist/intro.html (post-intro welcome, live render)",meta:"./media/templates/the-light-orb.cover.json"},route:"#/",includes:["Centred welcome with the hosting Orb","Quotation scene","Destination selector"],published:!0,starter:!0,readiness:"preview_ready",missing:["price","checkout provider","packaged source export"],price:null},{id:"brunito",name:"BRUNITO",label:"ecommerce",credit:"Example project: Brunito, an independent ecommerce demo",category:"Ecommerce design & development",subtitle:"Ecommerce Design & Development",showcase:!0,line:"An interactive ecommerce experience featuring responsive layouts, customised product pages and a refined shopping interface.",cover:{src:"./media/templates/brunito.cover.jpg",from:"BRUNITO demo homepage (live render)",meta:"./media/templates/brunito.cover.json"},demo:"https://carlatres3.github.io/brunito/",cta:"Explore Demo",includes:["Editorial homepage and collections","Product pages with real variants and galleries","Cart drawer and cart (purchases disabled)","Desktop, tablet and mobile"],published:!0,readiness:"showcase",price:null}],ty=Jg.filter(i=>i.published!==!1);var sn={engine:"Kokoro-82M v1.0",licence:"Apache-2.0",rights:{onSite:"yes",download:"not offered"}},ny=[{id:"samantha",name:"Heart",kokoro:"af_heart",grade:"A",locale:"en-US",accent:"American",gender:"female",line:"Warm and clear. The guide\u2019s own voice.",full:!0,...sn},{id:"bella",name:"Bella",kokoro:"af_bella",grade:"A\u2212",locale:"en-US",accent:"American",gender:"female",line:"Bright and expressive, with a smile in it.",full:!0,...sn},{id:"emma",name:"Emma",kokoro:"bf_emma",grade:"B\u2212",locale:"en-GB",accent:"British",gender:"female",line:"Composed and precise. A gallery voice.",full:!0,...sn},{id:"daniel",name:"Michael",kokoro:"am_michael",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Calm and grounded. Steady narration.",full:!0,...sn},{id:"nicole",name:"Nicole",kokoro:"af_nicole",grade:"B\u2212",locale:"en-US",accent:"American",gender:"female",line:"Close and hushed, almost a whisper.",lines:"samantha",...sn},{id:"aoede",name:"Aoede",kokoro:"af_aoede",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Soft and lyrical.",lines:"samantha",...sn},{id:"kore",name:"Kore",kokoro:"af_kore",grade:"C+",locale:"en-US",accent:"American",gender:"female",line:"Even and confident.",lines:"bella",...sn},{id:"isabella",name:"Isabella",kokoro:"bf_isabella",grade:"C",locale:"en-GB",accent:"British",gender:"female",line:"Light and friendly.",lines:"emma",...sn},{id:"fenrir",name:"Fenrir",kokoro:"am_fenrir",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Deep and resonant.",lines:"daniel",...sn},{id:"puck",name:"Puck",kokoro:"am_puck",grade:"C+",locale:"en-US",accent:"American",gender:"male",line:"Lively and quick.",lines:"daniel",...sn},{id:"george",name:"George",kokoro:"bm_george",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"Measured and classic.",lines:"daniel",...sn},{id:"fable",name:"Fable",kokoro:"bm_fable",grade:"C",locale:"en-GB",accent:"British",gender:"male",line:"A storyteller\u2019s warmth.",lines:"daniel",...sn}];var Gh="lightorb:theme",$g={light:{pearl:[243,243,241],top:[250,251,251],low:[214,217,220],sky:"255,255,255",skyA:.62,mass:"196,201,206",massA:.35,glow:"255,255,255",glowA:.7,shadow:"70,72,78",orbBackground:"#f3f3f1",orb:{dark:!1,world:"gallery",envBoost:1},cases:{bg:["#f3f3f1","#f1f1ef","#e9eae8"],room:"#6c6f6c",floor:"#eeefed",hemi:["#ffffff","#dcdedc",.6],env:1.35}},dark:{pearl:[7,7,8],top:[11,11,12],low:[2,2,3],sky:"232,226,212",skyA:.03,mass:"0,0,0",massA:.6,glow:"236,230,216",glowA:.07,shadow:"0,0,0",orbBackground:"#070708",orb:{dark:!0,world:"smoke",envBoost:1.15},cases:{bg:["#0e0e0f","#09090a","#040405"],room:"#141415",floor:"#2a2b2b",hemi:["#ffffff","#202222",.35],env:1.7}}},Wh=()=>{try{return localStorage.getItem(Gh)}catch{return null}},ts=i=>i==="light"||i==="dark",Xh="(prefers-color-scheme: dark)",qh=()=>{try{return typeof matchMedia=="function"&&matchMedia(Xh).matches?"dark":"light"}catch{return"light"}};function Kg(){let i=new URLSearchParams(location.search).get("theme");if(ts(i))return i;let e=Wh();return ts(e)?e:qh()}var Al=()=>document.documentElement.dataset.theme==="dark"?"dark":"light",Yh=()=>$g[Al()];function Zh(i){document.documentElement.dataset.theme=i,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",i==="dark"?"#141515":"#F3F3F1")}function jg(i,{remember:e=!0}={}){if(ts(i)){if(Zh(i),e)try{localStorage.setItem(Gh,i)}catch{}document.dispatchEvent(new CustomEvent("lightorb:theme",{detail:{theme:i}}))}}typeof document<"u"&&Zh(ts(document.documentElement.dataset.theme)?Al():Kg());try{(typeof matchMedia=="function"?matchMedia(Xh):null)?.addEventListener?.("change",()=>{if(ts(Wh())||ts(new URLSearchParams(location.search).get("theme")))return;let e=qh();e!==Al()&&jg(e,{remember:!1})})}catch{}var ns=(i,e,t)=>i+(e-i)*t,is=i=>{let e=parseInt(String(i).replace("#",""),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]},ay=is("#f3d8c5"),Qg={fill:.08,lobe:.2,wall:.55,core:.034},e0=i=>structuredClone(i??ta);function Jh(i,e,t={}){let n=Yh().orb,s=t.dark===!0,{envBoost:r=s?1:n.envBoost,exposure:o=0,left:l=.65,right:c=.55}=t,a=s||n.dark,h=e.shell,d=e.light,u=e.interior;i.setOptics({...Qg,lobe:ns(.1,.3,d.spread),core:ns(.026,.044,d.spread)}),i.setInterior({kind:u.kind,amount:u.amount,size:u.size,motion:u.motion,fill:u.fill,colour:u.colour}),i.setElastic(h.elastic??0);let p=is(h.tint);i.setMaterial({roughness:h.roughness,thickness:ns(.3,1.4,h.thickness),ior:h.ior,envMapIntensity:(a?1.9:2.1)*r*2**(o*.5),tint:p,tintDistance:h.tintAmount>.001?ns(8,.4,h.tintAmount):0}),i.setNeutral?.(!0);let _=is(d.colour),b=Math.max(..._);i.setLight({tint:_.map(f=>f/Math.max(.05,b)*1.05),spread:ns(.7,1.6,d.spread)}),i.setBloom(ns(.004,.08,d.glow)),i.setFocus({x:d.x,y:d.y,z:d.z}),i.setTone(a?"dark":"light"),i.setVolumeWorld(0),i.lockFeather([.5,.515]);let m=f=>(Math.round(f*10)/10).toFixed(1);return i.setWorld(s?`chamber:${m(l)}:${m(c)}`:n.world),i.setEnvironmentLevel?.(t.envLevel??1),{emission:d.strength/.72*2**(o*.35)*(t.keyLevel??1),voice:e.voice}}var Js=i=>Math.min(1,Math.max(0,i));function $h(i={}){let e=i.material??{},t=i.interior??{},n=i.light??{},s=e0(Hh("original").config);if(e.tint){s.shell.tint=e.tint;let[r,o,l]=is(e.tint),c=Math.max(r,o,l)-Math.min(r,o,l);c>.04&&(s.shell.tintAmount=Math.min(.97,.8+c*.2))}if(s.shell.ior=Math.min(2,Math.max(1,1+.58*(e.refraction??1))),s.shell.roughness=Math.min(.5,Math.max(0,.01+(e.frost??0)*.45)),s.interior.amount=Js(s.interior.amount*(1+(t.amount??0))),s.interior.size=Js(s.interior.size*(t.size??1)),s.interior.motion=Js(s.interior.motion*(t.speed??1)),s.light.strength=Js(s.light.strength*(t.glow??1)),s.light.glow=Js(s.light.glow*(n.key??1)),n.colour&&(s.light.colour=n.colour),e.tint){let r=is(e.tint),o=is(s.light.colour);Math.max(...r)-Math.min(...r)>.04&&(s.light.colour="#"+o.map((c,a)=>Math.round((c*.4+r[a]*.6)*255).toString(16).padStart(2,"0")).join(""))}return s}function t0(i,{reduced:e,variant:t=i.dataset.variant,config:n=i.dataset.config}={}){let s=typeof n=="string"?Sl(n):n||null,r=s?.variant||t,o=ji.some(h=>h.id===r)?r:"clear";getComputedStyle(i).position==="static"&&(i.style.position="relative");let l={...e===void 0?{}:{reduced:e},...s&&Object.keys(s).length?{config:{...s,variant:o}}:{}};if(o==="clear"&&(s?.base??"clear")==="clear")return n0(i,s);let c=Rh(i,o,l),a=i.querySelector("canvas:last-of-type");return a&&Object.assign(a.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),{stir:()=>c.stir(),setConfig:h=>c.setConfig(h),dispose:()=>c.dispose()}}if(typeof document<"u"){let i=()=>document.querySelectorAll("[data-light-orb]:not([data-light-orb-on])").forEach(e=>{e.setAttribute("data-light-orb-on",""),t0(e)});document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i):i()}function n0(i,e){let t=null,n=!1,s=0,r=null,o=0,l=.0016,c=null,a=matchMedia("(prefers-reduced-motion: reduce)").matches,h=(()=>{for(let b=i;b;b=b.parentElement){let m=getComputedStyle(b).backgroundColor;if(m&&m!=="transparent"&&!/rgba\([^)]*,\s*0\)$/.test(m))return m}return"#ffffff"})();Object.assign(i.style,{overflow:"hidden",touchAction:"pan-y"});let d=()=>Math.max(40,Math.min(i.clientWidth,i.clientHeight)*.82),u=()=>t?.setPose({x:i.clientWidth/2,y:i.clientHeight/2,diameter:d()}),p=b=>{if(!t)return;let m=Jh(t,$h(b||{}),{dark:!1,envLevel:b?.light?.environment??1,keyLevel:b?.light?.key??1});t.setEmission?.(Math.min(1.4,m.emission))};Vh({container:i,diameter:d(),background:h,driven:!0}).then(b=>{if(n){b.dispose();return}t=b,p(e),b.setContact?.(0),u(),b.attachPointer(i,{range:"subtle"}),r=new ResizeObserver(u),r.observe(i);let m=()=>{n||(!c&&!a&&(l+=(.0016-l)*.02,o+=l,b.setObjectYaw(o)),b.tick(performance.now()),s=requestAnimationFrame(m))};m()}).catch(()=>{}),i.addEventListener("pointerdown",b=>{c={x:b.clientX,moved:0};try{i.setPointerCapture(b.pointerId)}catch{}}),i.addEventListener("pointermove",b=>{if(!c||!t)return;let m=b.clientX-c.x;c.x=b.clientX,c.moved+=Math.abs(m),l=m*.012,o+=l,t.setObjectYaw(o)});let _=()=>{if(!c)return;let b=c.moved<6;c=null,b&&t?.nudge(.8)};return i.addEventListener("pointerup",_),i.addEventListener("pointercancel",_),{stir:()=>t?.nudge(.8),setConfig:b=>p(typeof b=="string"?Sl(b):b),dispose(){n=!0,cancelAnimationFrame(s),r?.disconnect(),t?.dispose()}}}export{t0 as mountOrb};
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
