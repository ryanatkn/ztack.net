import{q as B,y as P,C as N,D as Y,x as oa,a5 as ea,H as va,F as X,G as D,I as $,J as R,a6 as H,z as ia,A as S,B as _a,n as Z,a7 as ca,a8 as da,a9 as ha,Y as q,Z as O,_ as pa,aa as ga,ab as ya,ac as F,ad as W,ae as na,af as Ea,ag as Aa,ah as fa,ai as Na,aj as Ta,E as wa,ak as Ia,al as Ra,w as x,am as ba}from"./runtime.Lwo_DdhJ.js";import{p as Q,m as Ca,e as j,h as m,q as La,r as Oa,v as aa,w as Da,x as Ha,y as Sa}from"./disclose-version.CceBRtQC.js";function Ma(a,s){if(s){const r=document.body;a.autofocus=!0,B(()=>{document.activeElement===r&&a.focus()})}}function Wa(a,s){return s}function ka(a,s,r,e){for(var i=[],u=s.length,_=0;_<u;_++)ca(s[_].e,i,!0);var v=u>0&&i.length===0&&r!==null;if(v){var p=r.parentNode;da(p),p.append(r),e.clear(),I(a,s[0].prev,s[u-1].next)}ha(i,()=>{for(var E=0;E<u;E++){var h=s[E];v||(e.delete(h.k),I(a,h.prev,h.next)),q(h.e,!v)}})}function za(a,s,r,e,i,u=null){var _=a,v={flags:s,items:new Map,first:null},p=(s&na)!==0;if(p){var E=a;_=N?D(O(E)):E.appendChild(pa())}N&&Y();var h=null,A=!1;P(()=>{var l=r(),d=oa(l)?l:l==null?[]:ea(l),c=d.length;if(A&&c===0)return;A=c===0;let T=!1;if(N){var g=_.data===va;g!==(c===0)&&(_=X(),D(_),$(!1),T=!0)}if(N){for(var n=null,o,y=0;y<c;y++){if(R.nodeType===8&&R.data===ga){_=R,T=!0,$(!1);break}var f=d[y],t=e(f,y);o=ta(R,v,n,null,f,t,y,i,s),v.items.set(t,o),n=o}c>0&&D(X())}if(!N){var b=ya;$a(d,v,_,i,s,(b.f&H)!==0,e)}u!==null&&(c===0?h?ia(h):h=S(()=>u(_)):h!==null&&_a(h,()=>{h=null})),T&&$(!0),r()}),N&&(_=R)}function $a(a,s,r,e,i,u,_){var G,V,J,K;var v=(i&Ea)!==0,p=(i&(F|W))!==0,E=a.length,h=s.items,A=s.first,l=A,d,c=null,T,g=[],n=[],o,y,f,t;if(v)for(t=0;t<E;t+=1)o=a[t],y=_(o,t),f=h.get(y),f!==void 0&&((G=f.a)==null||G.measure(),(T??(T=new Set)).add(f));for(t=0;t<E;t+=1){if(o=a[t],y=_(o,t),f=h.get(y),f===void 0){var b=l?l.e.nodes_start:r;c=ta(b,s,c,c===null?s.first:c.next,o,y,t,e,i),h.set(y,c),g=[],n=[],l=c.next;continue}if(p&&Ya(f,o,t,i),f.e.f&H&&(ia(f.e),v&&((V=f.a)==null||V.unfix(),(T??(T=new Set)).delete(f))),f!==l){if(d!==void 0&&d.has(f)){if(g.length<n.length){var C=n[0],w;c=C.prev;var z=g[0],M=g[g.length-1];for(w=0;w<g.length;w+=1)sa(g[w],C,r);for(w=0;w<n.length;w+=1)d.delete(n[w]);I(s,z.prev,M.next),I(s,c,z),I(s,M,C),l=C,c=M,t-=1,g=[],n=[]}else d.delete(f),sa(f,l,r),I(s,f.prev,f.next),I(s,f,c===null?s.first:c.next),I(s,c,f),c=f;continue}for(g=[],n=[];l!==null&&l.k!==y;)(u||!(l.e.f&H))&&(d??(d=new Set)).add(l),n.push(l),l=l.next;if(l===null)continue;f=l}g.push(f),c=f,l=f.next}if(l!==null||d!==void 0){for(var L=d===void 0?[]:ea(d);l!==null;)(u||!(l.e.f&H))&&L.push(l),l=l.next;var k=L.length;if(k>0){var ua=i&na&&E===0?r:null;if(v){for(t=0;t<k;t+=1)(J=L[t].a)==null||J.measure();for(t=0;t<k;t+=1)(K=L[t].a)==null||K.fix()}ka(s,L,ua,h)}}v&&B(()=>{var U;if(T!==void 0)for(f of T)(U=f.a)==null||U.apply()}),Z.first=s.first&&s.first.e,Z.last=c&&c.e}function Ya(a,s,r,e){e&F&&Q(a.v,s),e&W?Q(a.i,r):a.i=r}function ta(a,s,r,e,i,u,_,v,p){var E=(p&F)!==0,h=(p&Aa)===0,A=E?h?Ca(i):j(i):i,l=p&W?j(_):_,d={i:l,v:A,k:u,a:null,e:null,prev:r,next:e};try{return d.e=S(()=>v(a,A,l),N),d.e.prev=r&&r.e,d.e.next=e&&e.e,r===null?s.first=d:(r.next=d,r.e.next=d.e),e!==null&&(e.prev=d,e.e.prev=d.e),d}finally{}}function sa(a,s,r){for(var e=a.next?a.next.e.nodes_start:r,i=s?s.e.nodes_start:r,u=a.e.nodes_start;u!==e;){var _=fa(u);i.before(u),u=_}}function I(a,s,r){s===null?a.first=r:(s.next=r,s.e.next=r&&r.e),r!==null&&(r.prev=s,r.e.prev=s&&s.e)}function Ga(a,s,r,e,i){var u=a,_="",v;P(()=>{if(_===(_=s()??"")){N&&Y();return}v!==void 0&&(q(v),v=void 0),_!==""&&(v=S(()=>{if(N){R.data;for(var p=Y(),E=p;p!==null&&(p.nodeType!==8||p.data!=="");)E=p,p=fa(p);if(p===null)throw Na(),Ta;m(R,E),u=D(p);return}var h=_+"";r&&(h=`<svg>${h}</svg>`);var A=La(h);if((r||e)&&(A=O(A)),m(O(A),A.lastChild),r||e)for(;O(A);)u.before(O(A));else u.before(A)}))})}function Va(a,s,...r){var e=a,i=Ia,u;P(()=>{i!==(i=s())&&(u&&(q(u),u=null),u=S(()=>i(e,...r)))},wa),N&&(e=R)}function Ba(a,s,r,e){var i=a.__attributes??(a.__attributes={});N&&(i[s]=a.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&a.nodeName==="LINK")||i[s]!==(i[s]=r)&&(s==="style"&&"__styles"in a&&(a.__styles={}),s==="loading"&&(a[Ra]=r),r==null?a.removeAttribute(s):typeof r!="string"&&la(a).includes(s)?a[s]=r:a.setAttribute(s,r))}function Ja(a,s,r,e,i=!1,u=!1,_=!1){var v=s||{},p=a.tagName==="OPTION";for(var E in s)E in r||(r[E]=null);e!==void 0&&(r.class=r.class?r.class+" "+e:e);var h=la(a),A=a.__attributes??(a.__attributes={}),l=[];for(const n in r){let o=r[n];if(p&&n==="value"&&o==null){a.value=a.__value="",v[n]=o;continue}var d=v[n];if(o!==d){v[n]=o;var c=n[0]+n[1];if(c!=="$$"){if(c==="on"){const y={},f="$$"+n;let t=n.slice(2);var T=Sa(t);if(Oa(t)&&(t=t.slice(0,-7),y.capture=!0),!T&&d){if(o!=null)continue;a.removeEventListener(t,v[f],y),v[f]=null}if(o!=null)if(T)a[`__${t}`]=o,Da([t]);else{let b=function(C){v[n].call(this,C)};s?v[f]=aa(t,a,b,y):l.push([n,o,()=>v[f]=aa(t,a,b,y)])}}else if(n==="style"&&o!=null)a.style.cssText=o+"";else if(n==="autofocus")Ma(a,!!o);else if(n==="__value"||n==="value"&&o!=null)a.value=a[n]=a.__value=o;else{var g=n;i||(g=Ha(g)),o==null&&!u?(A[n]=null,a.removeAttribute(n)):h.includes(g)&&(u||typeof o!="string")?a[g]=o:typeof o!="function"&&(N&&(g==="src"||g==="href"||g==="srcset")||Ba(a,g,o))}n==="style"&&"__styles"in a&&(a.__styles={})}}}return s||B(()=>{if(a.isConnected)for(const[n,o,y]of l)v[n]===o&&y()}),v}var ra=new Map;function la(a){var s=ra.get(a.nodeName);if(s)return s;ra.set(a.nodeName,s=[]);for(var r,e=x(a),i=Element.prototype;i!==e;){r=ba(e);for(var u in r)r[u].set&&s.push(u);e=x(e)}return s}function Ka(a,s){var r=a.__className,e=Pa(s);N&&a.className===e?a.__className=e:(r!==e||N&&a.className!==e)&&(s==null?a.removeAttribute("class"):a.className=e,a.__className=e)}function Pa(a){return a??""}function Ua(a,s,r){if(r){if(a.classList.contains(s))return;a.classList.add(s)}else{if(!a.classList.contains(s))return;a.classList.remove(s)}}function Xa(a,s,r,e){var i=a.__styles??(a.__styles={});i[s]!==r&&(i[s]=r,r==null?a.style.removeProperty(s):a.style.setProperty(s,r,""))}const Za=(a,s)=>!s||!a.startsWith(s)?a:a.substring(s.length),xa=(a,s)=>!s||!a.endsWith(s)?a:a.substring(0,a.length-s.length),Qa=(a,s)=>a.endsWith(s)?a:a+s;export{Xa as a,Qa as b,Va as c,xa as d,za as e,Za as f,Ba as g,Ga as h,Wa as i,Ka as j,Ja as s,Ua as t};
