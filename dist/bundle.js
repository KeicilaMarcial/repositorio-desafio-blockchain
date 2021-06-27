(()=>{var t={249:function(t,n,e){var i;t.exports=i=i||function(t,n){var i;if("undefined"!=typeof window&&window.crypto&&(i=window.crypto),!i&&"undefined"!=typeof window&&window.msCrypto&&(i=window.msCrypto),!i&&"undefined"!=typeof global&&global.crypto&&(i=global.crypto),!i)try{i=e(417)}catch(t){}var r=function(){if(i){if("function"==typeof i.getRandomValues)try{return i.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof i.randomBytes)try{return i.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},s=Object.create||function(){function t(){}return function(n){var e;return t.prototype=n,e=new t,t.prototype=null,e}}(),o={},a=o.lib={},c=a.Base={extend:function(t){var n=s(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},u=a.WordArray=c.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=null!=n?n:4*t.length},toString:function(t){return(t||l).stringify(this)},concat:function(t){var n=this.words,e=t.words,i=this.sigBytes,r=t.sigBytes;if(this.clamp(),i%4)for(var s=0;s<r;s++){var o=e[s>>>2]>>>24-s%4*8&255;n[i+s>>>2]|=o<<24-(i+s)%4*8}else for(s=0;s<r;s+=4)n[i+s>>>2]=e[s>>>2];return this.sigBytes+=r,this},clamp:function(){var n=this.words,e=this.sigBytes;n[e>>>2]&=4294967295<<32-e%4*8,n.length=t.ceil(e/4)},clone:function(){var t=c.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var n=[],e=0;e<t;e+=4)n.push(r());return new u.init(n,t)}}),h=o.enc={},l=h.Hex={stringify:function(t){for(var n=t.words,e=t.sigBytes,i=[],r=0;r<e;r++){var s=n[r>>>2]>>>24-r%4*8&255;i.push((s>>>4).toString(16)),i.push((15&s).toString(16))}return i.join("")},parse:function(t){for(var n=t.length,e=[],i=0;i<n;i+=2)e[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new u.init(e,n/2)}},f=h.Latin1={stringify:function(t){for(var n=t.words,e=t.sigBytes,i=[],r=0;r<e;r++){var s=n[r>>>2]>>>24-r%4*8&255;i.push(String.fromCharCode(s))}return i.join("")},parse:function(t){for(var n=t.length,e=[],i=0;i<n;i++)e[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new u.init(e,n)}},d=h.Utf8={stringify:function(t){try{return decodeURIComponent(escape(f.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return f.parse(unescape(encodeURIComponent(t)))}},p=a.BufferedBlockAlgorithm=c.extend({reset:function(){this._data=new u.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=d.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var e,i=this._data,r=i.words,s=i.sigBytes,o=this.blockSize,a=s/(4*o),c=(a=n?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*o,h=t.min(4*c,s);if(c){for(var l=0;l<c;l+=o)this._doProcessBlock(r,l);e=r.splice(0,c),i.sigBytes-=h}return new u.init(e,h)},clone:function(){var t=c.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),y=(a.Hasher=p.extend({cfg:c.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){p.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,e){return new t.init(e).finalize(n)}},_createHmacHelper:function(t){return function(n,e){return new y.HMAC.init(t,e).finalize(n)}}}),o.algo={});return o}(Math)},153:function(t,n,e){var i;t.exports=(i=e(249),function(t){var n=i,e=n.lib,r=e.WordArray,s=e.Hasher,o=n.algo,a=[],c=[];!function(){function n(n){for(var e=t.sqrt(n),i=2;i<=e;i++)if(!(n%i))return!1;return!0}function e(t){return 4294967296*(t-(0|t))|0}for(var i=2,r=0;r<64;)n(i)&&(r<8&&(a[r]=e(t.pow(i,.5))),c[r]=e(t.pow(i,1/3)),r++),i++}();var u=[],h=o.SHA256=s.extend({_doReset:function(){this._hash=new r.init(a.slice(0))},_doProcessBlock:function(t,n){for(var e=this._hash.words,i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],h=e[5],l=e[6],f=e[7],d=0;d<64;d++){if(d<16)u[d]=0|t[n+d];else{var p=u[d-15],y=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,g=u[d-2],w=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;u[d]=y+u[d-7]+w+u[d-16]}var v=i&r^i&s^r&s,m=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),_=f+((a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25))+(a&h^~a&l)+c[d]+u[d];f=l,l=h,h=a,a=o+_|0,o=s,s=r,r=i,i=_+(m+v)|0}e[0]=e[0]+i|0,e[1]=e[1]+r|0,e[2]=e[2]+s|0,e[3]=e[3]+o|0,e[4]=e[4]+a|0,e[5]=e[5]+h|0,e[6]=e[6]+l|0,e[7]=e[7]+f|0},_doFinalize:function(){var n=this._data,e=n.words,i=8*this._nDataBytes,r=8*n.sigBytes;return e[r>>>5]|=128<<24-r%32,e[14+(r+64>>>9<<4)]=t.floor(i/4294967296),e[15+(r+64>>>9<<4)]=i,n.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=s.clone.call(this);return t._hash=this._hash.clone(),t}});n.SHA256=s._createHelper(h),n.HmacSHA256=s._createHmacHelper(h)}(Math),i.SHA256)},417:t=>{"use strict";t.exports=require("crypto")}},n={};function e(i){var r=n[i];if(void 0!==r)return r.exports;var s=n[i]={exports:{}};return t[i].call(s.exports,s,s.exports,e),s.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{"use strict";var t=e(153),n=e.n(t);const i=class{constructor(t=null,n="Genesis",e=1){this.previousHash=t,this.difficulty=e,this.nounce=0,this.serializedObject={data:n},this.timestamp=new Date,this.mine()}hashing(){return n()(this.previousHash+JSON.stringify(this.serializedObject)+this.timestamp+this.nounce).toString()}mine(){for(this.hash=this.hashing();this.hash.substring(0,this.difficulty)!==Array(this.difficulty+1).join("0");)this.nounce++,this.hash=this.hashing()}},r=new class{constructor(){this.blocks=[new i],this.index=1}getLastBlock(){return this.blocks[this.blocks.length-1]}addBlock(t,n){const e=this.getLastBlock().hash,r=new i(e,t,n);if(this.blocks.push(r))return console.log(this.blocks),!0}isValid(){for(let t=1;t<this.blocks.length;t++){const n=this.blocks[t],e=this.blocks[t-1];if(n.hash!==n.hashing())return!1;if(n.previousHash!==e.hash)return!1;if("0"!==n.hash[0])return!1}return!0}},s=new class{create(t){const n=document.createElement("div");n.innerText=t,n.classList.add("main-title"),document.querySelector("body").appendChild(n)}};window.onload=function(){document.getElementById("form-bt").onclick=function(){const t=document.getElementById("data").value,n=document.getElementById("difficulty").value;r.addBlock(t,n);let e=JSON.stringify(Object.values(r.blocks.slice(length-1)));s.create(e)};let t=JSON.stringify(Object.values(r));s.create(t)}})()})();