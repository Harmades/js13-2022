function e(e,n,d,i){Object.defineProperty(e,n,{get:d,set:i,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},u={},f=d.parcelRequired7fa;function t(e){return Math.round(e)}function r(e){return Math.cos(e)}function o(e){return Math.sin(e)}function a(e){return document.getElementById(e)}null==f&&((f=function(e){if(e in i)return i[e].exports;if(e in u){var n=u[e];delete u[e];var d={id:e,exports:{}};return i[e]=d,n.call(d.exports,d,d.exports),d.exports}var f=new Error("Cannot find module '"+e+"'");throw f.code="MODULE_NOT_FOUND",f}).register=function(e,n){u[e]=n},d.parcelRequired7fa=f),f.register("27Lyk",(function(n,d){var i,u;e(n.exports,"register",(()=>i),(e=>i=e)),e(n.exports,"resolve",(()=>u),(e=>u=e));var f={};i=function(e){for(var n=Object.keys(e),d=0;d<n.length;d++)f[n[d]]=e[n[d]]},u=function(e){var n=f[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),f("27Lyk").register(JSON.parse('{"hvItV":"index.8598b75f.js","8lAoY":"logo.0a7a3f9d.png"}'));const l=Math.PI;function c(...e){return e[Math.floor(Math.random()*e.length)]}function s(e,n){return Math.random()*(n-e)+e}const y={debug:!1,width:960,height:640,playerSpeedX:300,playerSpeedY:300,playerBulletSpeedX:800,playerBulletSpeedY:800,engineTimeResolution:1,epsilon:.1,delta:.001};function h(e,n,d=null){const i=null==d?(u="canvas",document.createElement(u)):a(d);var u;i.width=e,i.height=n;return i.getContext("2d")}function x({canvas:e},{x:n,y:d,w:i,h:u},f="#FF0000"){e&&(e.fillStyle=f),e.fillRect(t(n),t(d),i,u)}let p;var g;(g=p||(p={}))[g.Straight=0]="Straight",g[g.Triangular=1]="Triangular",g[g.Circular=2]="Circular",g[g.Rectangular=3]="Rectangular";const w=[{pattern:p.Straight,sy:100,time:4,color:"#FFF000"},{pattern:p.Triangular,sy:150,amplitude:50,time:4,frequency:.5,color:"#AAAAAA"},{pattern:p.Circular,sy:300,time:4,frequency:.25,amplitude:200,color:"#000000"},{pattern:p.Rectangular,sy:450,time:4,color:"#AF5BE6"}];let m;var v;function A(e){if(e.dead)return;const n=e.frequency,d=e.amplitude,i=y.width/e.time;if(e.elapsedTime+=y.delta,e.pattern==p.Circular&&(e.dx=2*l*n*d*r(2*l*n*e.elapsedTime)-i,e.dy=2*l*n*d*o(2*l*n*e.elapsedTime)),e.pattern==p.Rectangular){const n=e.target;null==e.direction&&(e.direction=m.Left,e.target=s(50,150)),e.direction==m.Left&&(e.distance>=n&&(e.direction=c(m.Up,m.Down),e.distance=0,e.target=s(50,150)),e.dx=-i,e.dy=0,e.distance+=-e.dx*y.delta),e.direction,m.Right,e.direction==m.Up&&(e.distance>=n&&(e.direction=m.Left,e.target=s(50,150),e.distance=0),e.dy=-i/2,e.dx=0,e.distance+=-e.dy*y.delta),e.direction==m.Down&&(e.distance>=n&&(e.direction=m.Left,e.target=s(50,150),e.distance=0),e.dy=i/2,e.dx=0,e.distance+=e.dy*y.delta)}e.pattern==p.Triangular&&(e.y>=e.sy+d&&(e.dy=-4*d*n),(0==e.dy||e.y<=e.sy-d)&&(e.dy=4*d*n),e.dx=-i),e.pattern==p.Straight&&(e.dx=-i),e.x+=e.dx*y.delta,e.y+=e.dy*y.delta}function M(){return w.map((e=>function({pattern:e,sy:n,color:d,time:i,amplitude:u,frequency:f,rx:t,ry:r}){return{x:y.width,y:n,sy:n,dx:0,dy:0,w:50,h:50,pattern:e,time:i,color:d,dead:!1,amplitude:u,frequency:f,rx:t,ry:r,elapsedTime:0,distance:0}}(e)))}function b(e,n){n.dead||x(e,n,n.color)}function S(e){e.entities=M()}function R(e,n){e.dead=!0}function T(e){e.isActive&&(e.x+=e.dx*y.delta,e.y+=e.dy*y.delta)}function C(e,n){x(n,e)}function L(e){e.isActive=!1}(v=m||(m={}))[v.Up=0]="Up",v[v.Left=1]="Left",v[v.Right=2]="Right",v[v.Down=3]="Down";var F;F=new URL(f("27Lyk").resolve("8lAoY"),import.meta.url).toString();const q={up:!1,down:!1,left:!1,right:!1,space:!1,shift:!1};function E(e){let n=!0;return()=>q[e]&&n?(n=!1,!0):(q[e]||(n=!0),!1)}onkeydown=onkeyup=e=>function(e,n){38!=e&&90!=e&&87!=e||(q.up=n);39!=e&&68!=e||(q.right=n);40!=e&&83!=e||(q.down=n);37!=e&&65!=e&&81!=e||(q.left=n);16==e&&(q.shift=n);32==e&&(q.space=n)}(e.keyCode,null!=e.type[5]);let _,k,B=null,D=(...e)=>{let n=B.createBufferSource(),d=B.createBuffer(e.length,e[0].length,O);return e.map(((e,n)=>d.getChannelData(n).set(e))),n.buffer=d,n.connect(B.destination),n.start(),n},U=(e=1,n=.05,d=220,i=0,u=0,f=.1,t=0,r=1,o=0,a=0,l=0,c=0,s=0,y=0,h=0,x=0,p=0,g=1,w=0,m=0)=>{let v,A,M=2*Math.PI,b=o*=500*M/O**2,S=(0<h?1:-1)*M/4,R=d*=(1+2*n*Math.random()-n)*M/O,T=[],C=0,L=0,F=0,q=1,E=0,_=0,k=0;for(a*=500*M/O**3,h*=M/O,l*=M/O,c*=O,s=O*s|0,A=(i=99+O*i)+(w*=O)+(u*=O)+(f*=O)+(p*=O)|0;F<A;T[F++]=k)++_%(100*x|0)||(k=t?1<t?2<t?3<t?Math.sin((C%M)**3):Math.max(Math.min(Math.tan(C),1),-1):1-(2*C/M%2+2)%2:1-4*Math.abs(Math.round(C/M)-C/M):Math.sin(C),k=(s?1-m+m*Math.sin(2*Math.PI*F/s):1)*(0<k?1:-1)*Math.abs(k)**r*e*I*(F<i?F/i:F<i+w?1-(F-i)/w*(1-g):F<i+w+u?g:F<A-p?(A-F-p)/f*g:0),k=p?k/2+(p>F?0:(F<A-p?1:(A-F)/p)*T[F-p|0]/2):k),v=(d+=o+=a)*Math.sin(L*h-S),C+=v-v*y*(1-1e9*(Math.sin(F)+1)%2),L+=v-v*y*(1-1e9*(Math.sin(F)**2+1)%2),q&&++q>c&&(d+=l,R+=l,q=0),!s||++E%s||(d=R,o=b,q=q||1);return T},I=.3,O=44100,Y=[[[.5,0,196,.05,.5,.6,1],[.8,undefined,24.5,.2,.3,.7,undefined,.5,undefined,undefined,5,undefined,.1,undefined,undefined,undefined,undefined,.8,undefined,.2],[2,0,196,.02,.1,.4,1],[,0,49,undefined,undefined,.2,3,5]],[[[,-1,6,undefined,undefined,undefined,undefined,undefined,undefined,undefined,8,undefined,undefined,undefined,undefined,undefined,undefined,undefined,10,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[,1,10,undefined,undefined,undefined,undefined,undefined,undefined,undefined,12,undefined,undefined,undefined,undefined,undefined,undefined,undefined,17,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[,undefined,3,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[2,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,15,15,undefined,13,undefined,10,undefined]],[[,-1,6,undefined,undefined,undefined,undefined,undefined,undefined,undefined,8,undefined,undefined,undefined,undefined,undefined,undefined,undefined,10,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[,1,10,undefined,undefined,undefined,undefined,undefined,undefined,undefined,12,undefined,undefined,undefined,undefined,undefined,undefined,undefined,17,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[,undefined,3,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[2,undefined,8,undefined,undefined,undefined,undefined,undefined,undefined,undefined,3,undefined,3,undefined,10,undefined,undefined,undefined,8,undefined,6,undefined,undefined,undefined,undefined,undefined,undefined,15,15,undefined,13,undefined,10,undefined],[3,undefined,8,undefined,undefined,undefined,8,undefined,10,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,1,undefined,3,undefined,undefined,15,15,undefined,13,undefined,10,undefined]],[[,-1,6,undefined,undefined,undefined,undefined,undefined,undefined,undefined,8,undefined,undefined,undefined,undefined,undefined,undefined,undefined,10,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[,1,10,undefined,undefined,undefined,undefined,undefined,undefined,undefined,12,undefined,undefined,undefined,undefined,undefined,undefined,undefined,17,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[,undefined,3,undefined,undefined,undefined,undefined,undefined,undefined,undefined,5,undefined,undefined,undefined,undefined,undefined,undefined,undefined,6,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],[2,undefined,8,undefined,undefined,undefined,undefined,undefined,undefined,undefined,3,undefined,3,undefined,10,undefined,undefined,undefined,8,undefined,6,undefined,undefined,undefined,undefined,undefined,undefined,15,15,undefined,13,undefined,10,undefined],[3,undefined,8,undefined,undefined,undefined,8,undefined,10,undefined,undefined,undefined,1,3,undefined,undefined,8,undefined,1,3,undefined,undefined,1,undefined,3,undefined,undefined,15,15,undefined,13,undefined,10,undefined]]],[0,1,2,1,2],110,undefined];function X(){B=new window.AudioContext,_=((e,n,d,i=125)=>{let u,f,t,r,o,a,l,c,s,y,h,x,p,g,w,m=0,v=[],A=[],M=[],b=0,S=0,R=1,T={},C=O/i*60>>2;for(;R;b++)v=[R=c=h=p=0],d.map(((i,h)=>{for(l=n[i][b]||[0,0,0],R|=!!n[i][b],w=p+(n[i][0].length-2-!c)*C,g=h==d.length-1,f=2,r=p;f<l.length+g;c=++f){for(o=l[f],s=f==l.length+g-1&&g||y!=(l[0]||0)|o|0,t=0;t<C&&c;t++>C-99&&s&&(x+=(x<1)/99))a=(1-x)*v[m++]/2||0,A[r]=(A[r]||0)-a*S+a,M[r]=(M[r++]||0)+a*S+a;o&&(x=o%1,S=l[1]||0,(o|=0)&&(v=T[[y=l[m=0]||0,o]]=T[[y,o]]||(u=[...e[y]],u[2]*=2**((o-12)/12),o>0?U(...u):[])))}p=w}));return[A,M]})(...Y)}function H(e,n){return{x:e,y:n}}let P=null;const j=E("space"),N=E("shift");let J=H(50,25),V=!1,z=!1;function G(e){let n=e.bullets.find((e=>!e.isActive));var d,i;null!=n&&function(e,n){e.x=n.x,e.y=n.y,e.dx=y.playerBulletSpeedX,e.dy=0,e.isActive=!0}(n,(d=e,i=J,H(d.x+i.x,d.y+i.y)))}function K(e){let n=0,d=0;q.left&&(n+=-y.playerSpeedX),q.right&&(n+=y.playerSpeedX),q.up&&(d+=-y.playerSpeedY),q.down&&(d+=y.playerSpeedY),j()&&G(e),e.dx=n,e.dy=d,z||(X(),z=!0),z&&N()&&(V?k.stop():(B?.resume(),k=D(..._),k.loop=!0),V=!V),e.x+=e.dx*y.delta,e.y+=e.dy*y.delta,function(e){for(let n of e)T(n)}(e.bullets)}function Q(e){e.x=0,e.y=0,e.dx=0,e.dy=0}function W(e,n){const d=ee(Z(e),Z(n)),i=ee($(e),$(n));return null==d||null==i?null:{x:d.x,y:i.x,w:d.y-d.x,h:i.y-i.x}}function Z(e){return{x:e.x,y:e.x+e.w}}function $(e){return{x:e.y,y:e.y+e.h}}function ee(e,n){return e.y<=n.x||n.y<=e.x?null:{x:Math.max(e.x,n.x),y:Math.min(e.y,n.y)}}let ne=y.engineTimeResolution,de=performance.now(),ie=de;const ue=(P=function(e,n){const d=new Image(151,151);return d.src=e,n&&(d.onload=n),d}(n(F)),{x:50,dx:0,y:y.height/2,dy:0,w:50,h:50,bullets:[{x:0,y:0,w:5,h:5,dx:0,dy:0,isActive:!1},{x:0,y:0,w:5,h:5,dx:0,dy:0,isActive:!1},{x:0,y:0,w:5,h:5,dx:0,dy:0,isActive:!1},{x:0,y:0,w:5,h:5,dx:0,dy:0,isActive:!1},{x:0,y:0,w:5,h:5,dx:0,dy:0,isActive:!1},{x:0,y:0,w:5,h:5,dx:0,dy:0,isActive:!1},{x:0,y:0,w:5,h:5,dx:0,dy:0,isActive:!1},{x:0,y:0,w:5,h:5,dx:0,dy:0,isActive:!1},{x:0,y:0,w:5,h:5,dx:0,dy:0,isActive:!1},{x:0,y:0,w:5,h:5,dx:0,dy:0,isActive:!1}]}),fe={entities:M()},te={canvas:h(y.width,y.height,"gameCanvas")};function re(){K(ue),function(e){for(let n of e.entities)A(n)}(fe),function(e,n){for(let d of function(e){return e.entities.filter((e=>!e.dead))}(n)){for(let n of e.bullets)null!=W(d,n)&&(L(n),R(d));null!=W(e,d)&&(Q(e),S(n))}}(ue,fe)}!function e(n){window.requestAnimationFrame((n=>e(n)));var d,i=0;n>de+ne&&(d=(n-de)/ne,i=Math.floor(d));for(var u=0;u<i;u++)de+=ne,re();(function({canvas:e}){e.clearRect(0,0,y.width,y.height)})(te),function(e,n){if(P?.complete){x(e,n);for(let d of n.bullets)d.isActive&&C(d,e)}}(te,ue),function(e,n){for(let d of n.entities)b(e,d)}(te,fe),ie=n}(0);
//# sourceMappingURL=index.8598b75f.js.map
