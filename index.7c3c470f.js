function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=i.parcelRequired7fa;function o(e){return Math.floor(e)}function s(e){return Math.ceil(e)}function l(e,t){return Math.min(e,t)}function d(e){return Math.cos(e)}function u(e){return Math.sin(e)}function h(e,t){return Math.pow(e,t)}function c(e){return document.getElementById(e)}null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},i.parcelRequired7fa=a),a.register("dRo73",(function(t,i){var n,r;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var a={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)a[t[i]]=e[t[i]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("dRo73").register(JSON.parse('{"1MGML":"index.7c3c470f.js","fnLwo":"texture.bca4a932.png"}'));const p=Math.PI;var y;y=JSON.parse('{"frames":{"assets/boss.png":{"frame":{"x":0,"y":0,"w":28,"h":38},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":28,"h":38},"sourceSize":{"w":28,"h":38},"pivot":{"x":0.5,"y":0.5}},"assets/boss2.png":{"frame":{"x":28,"y":0,"w":29,"h":38},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":29,"h":38},"sourceSize":{"w":29,"h":38},"pivot":{"x":0.5,"y":0.5}},"assets/shield.png":{"frame":{"x":0,"y":38,"w":28,"h":28},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":28,"h":28},"sourceSize":{"w":28,"h":28},"pivot":{"x":0.5,"y":0.5}},"assets/cerbere.png":{"frame":{"x":28,"y":38,"w":20,"h":17},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":20,"h":17},"sourceSize":{"w":20,"h":17},"pivot":{"x":0.5,"y":0.5}},"assets/cerbere2.png":{"frame":{"x":57,"y":0,"w":20,"h":18},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":20,"h":18},"sourceSize":{"w":20,"h":18},"pivot":{"x":0.5,"y":0.5}},"assets/friendly_vertical_laser.png":{"frame":{"x":48,"y":38,"w":7,"h":16},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":7,"h":16},"sourceSize":{"w":7,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/border2.png":{"frame":{"x":28,"y":55,"w":16,"h":11},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":5,"w":16,"h":11},"sourceSize":{"w":16,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/basic_cobble.png":{"frame":{"x":57,"y":18,"w":16,"h":16},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":16,"h":16},"sourceSize":{"w":16,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/vertical_laser.png":{"frame":{"x":55,"y":38,"w":7,"h":16},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":7,"h":16},"sourceSize":{"w":7,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/skeleton.png":{"frame":{"x":62,"y":34,"w":13,"h":16},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":0,"w":13,"h":16},"sourceSize":{"w":15,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/border1.png":{"frame":{"x":0,"y":66,"w":16,"h":14},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":2,"w":16,"h":14},"sourceSize":{"w":16,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/basic_cobble2.png":{"frame":{"x":44,"y":55,"w":16,"h":16},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":16,"h":16},"sourceSize":{"w":16,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/imp.png":{"frame":{"x":62,"y":50,"w":10,"h":16},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":10,"h":16},"sourceSize":{"w":10,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/zombie.png":{"frame":{"x":73,"y":18,"w":11,"h":16},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":11,"h":16},"sourceSize":{"w":11,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/power_up_shot.png":{"frame":{"x":16,"y":66,"w":14,"h":12},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":2,"y":3,"w":14,"h":12},"sourceSize":{"w":16,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/floating_eye.png":{"frame":{"x":30,"y":66,"w":14,"h":13},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":14,"h":13},"sourceSize":{"w":14,"h":13},"pivot":{"x":0.5,"y":0.5}},"assets/power_up_multi_shot.png":{"frame":{"x":60,"y":66,"w":9,"h":13},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":4,"y":1,"w":9,"h":13},"sourceSize":{"w":16,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/power_up_shield.png":{"frame":{"x":77,"y":0,"w":10,"h":12},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":2,"w":10,"h":12},"sourceSize":{"w":16,"h":16},"pivot":{"x":0.5,"y":0.5}},"assets/friendly_vertical_laser_top.png":{"frame":{"x":77,"y":12,"w":7,"h":5},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":7,"h":5},"sourceSize":{"w":7,"h":5},"pivot":{"x":0.5,"y":0.5}},"assets/vertical_laser_top.png":{"frame":{"x":44,"y":71,"w":7,"h":5},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":7,"h":5},"sourceSize":{"w":7,"h":5},"pivot":{"x":0.5,"y":0.5}},"assets/friendly_bullet.png":{"frame":{"x":51,"y":71,"w":5,"h":5},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":5,"h":5},"sourceSize":{"w":5,"h":5},"pivot":{"x":0.5,"y":0.5}},"assets/enemie_bullet.png":{"frame":{"x":75,"y":34,"w":5,"h":5},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":5,"h":5},"sourceSize":{"w":5,"h":5},"pivot":{"x":0.5,"y":0.5}}},"meta":{"app":"http://free-tex-packer.com","version":"0.6.7","image":"texture.png","format":"RGBA8888","size":{"w":87,"h":80},"scale":1}}');var f;f=new URL(a("dRo73").resolve("fnLwo"),import.meta.url).toString();const m={debug:!1,width:1200,height:576,worldWidth:400,worldHeight:192,tileSize:16,worldTileWidth:25,worldTileHeight:12,playerSpeedX:100,playerSpeedY:100,playerWidth:15,playerHeight:14,playerOx:3,playerOy:3,playerBulletSpeedX:200,playerBulletSpeedY:100,playerBulletsPoolSize:200,playerSprayOpen:1.2,playerBulletWidth:3,playerBulletHeight:3,playerInvincibleTime:.8,playerBlinkPeriod:.1,playerAnimationTime:.2,enemyWidth:13,enemyHeight:16,enemyOx:0,enemyOy:0,enemyBulletSpeedX:150,enemyBulletSpeedY:50,enemyBulletsPoolSize:50,enemyShootFrequency:1,enemyBulletPoolSize:1e3,enemySprayOpen:1,bossWidth:22,bossHeight:33,bossOx:6,bossOy:3,bossRxMin:100,bossRxMax:200,bossRyMin:100,bossRyMax:200,bossSpeed:300,bossBulletSpeedX:100,bossBulletSpeedY:100,bossBulletsPoolSize:200,bossBigBulletWidth:25,bossBigBulletHeight:25,bossBigBulletExplosionTick:200,bossPatternFrequency:5,bossSprayOpen:2,bossLife:100,bulletWidth:3,bulletHeight:3,bulletOx:1,bulletOy:1,bulletMaxHeight:500,bulletsVariance:20,bulletsMaxdY:200,waveEasyCount:3,waveEasyTimeMin:4,waveEasyTimeMax:6,waveEasyAmplitudeMin:10,waveEasyAmplitudeMax:50,waveEasyFrequencyMin:.1,waveEasyFrequencyMax:.25,waveEasyRxMin:100,waveEasyRxMax:200,waveEasyRyMin:100,waveEasyRyMax:200,waveEasySyMin:0,waveEasySyMax:590,waveMediumCount:3,waveMediumTimeMin:4,waveMediumTimeMax:6,waveMediumAmplitudeMin:10,waveMediumAmplitudeMax:50,waveMediumFrequencyMin:.1,waveMediumFrequencyMax:.25,waveMediumRxMin:100,waveMediumRxMax:200,waveMediumRyMin:100,waveMediumRyMax:200,waveMediumSyMin:0,waveMediumSyMax:590,waveHardCount:3,waveHardTimeMin:4,waveHardTimeMax:6,waveHardAmplitudeMin:10,waveHardAmplitudeMax:50,waveHardFrequencyMin:.1,waveHardFrequencyMax:.25,waveHardRxMin:100,waveHardRxMax:200,waveHardRyMin:100,waveHardRyMax:200,waveHardSyMin:0,waveHardSyMax:590,powerUpMaxCount:5,backgroundSpeed:100,borderSpeed:50,borderPeakRandMin:1,borderPeakRandMax:3,borderFlatRandMin:8,borderFlatRandMax:24,engineTimeResolution:1,epsilon:.1,delta:.001};let w=m.width/m.worldWidth,x=m.height/m.worldHeight;function g(e,i){const n=new Image(t(y).meta.size.w,t(y).meta.size.h);return n.src=e,i&&(n.onload=i),n}function b(e,t,i){const n=c(e);n.width=t,n.height=i;const r=n.getContext("2d");return r.imageSmoothingEnabled=!1,r}function S(e,i){!function({gameCanvas:e,image:i},{x:n,y:r,ox:a,oy:o,sprite:s}){if(!i.complete)return;const l=t(y).frames[s].frame;e.drawImage(i,l.x,l.y,l.w,l.h,(n-a)*w,(r-o)*x,l.w*w,l.h*x)}(e,i),m.debug&&function({currentCanvas:e},{x:t,y:i,w:n,h:r,color:a}){e&&(e.fillStyle=a??"rgba(255, 165, 0, 0.5)"),e.fillRect(t*w,i*x,n*w,r*x)}(e,i)}function v({offscreenCanvas:e,currentCanvas:i,image:n},r,{x:a,y:o,w:s,h:l},d){if(!n.complete)return;const u=t(y).frames[r].frame;H(e),e.save();let h=e.canvas.height;d&&(e.scale(1,-1),h=u.h-h),e.drawImage(n,u.x,u.y,u.w,u.h,0,0,e.canvas.width,h),e.restore();const c=i.createPattern(e.canvas,"repeat");i.fillStyle=c,i.save(),i.translate(a*w,o*x),i.fillRect(0,0,s*w,l*x),i.restore()}function M(e,t){e.currentCanvas=t}function H(e){e.clearRect(0,0,e.canvas.width,e.canvas.height)}let T=0;let R,P=0;function z(e,t){const i=[];for(let n=0;n<t;n++)i.push(e());return i}function C(e,t){return{x:e,y:t}}function E(e,t){return C(e.x+t.x,e.y+t.y)}function B(e=m.bulletHeight,t=m.bulletWidth,i=!1,n){return{x:0,y:0,w:t,h:e,dx:0,dy:0,isActive:!1,dh:0,dhDirection:0,explodeTick:0,shielded:i,sprite:n?"assets/friendly_bullet.png":"assets/enemie_bullet.png",ox:m.bulletOx,oy:m.bulletOy}}function W(e){if(!e.isActive)return;e.x+=e.dx*m.delta;const t=e.h;if(e.h=l(e.h+e.dh,m.bulletMaxHeight),e.h==m.bulletMaxHeight&&(e.dy=-30*u(e.x/m.worldWidth*6*p)),e.y+=e.dy*m.delta-(e.h-t)*e.dhDirection,0!=e.explodeTick&&(e.explodeTick-=1,0==e.explodeTick)){if(null==e.bullets)return void _(e);const t=e.dx/2;for(let i=0;i<4;i++){let n=e.bullets.bullets.find((e=>!e.isActive));if(null==n)return void _(e);O(e.bullets,n,e,C(h(-1,i)*t,h(-1,o(i/2))*t+e.dy))}_(e)}(e.x<0||e.x>m.worldWidth)&&_(e),e.h==m.bulletHeight&&(e.y+e.h/2<0||e.y>m.worldHeight+e.h/2)&&_(e)}function A(e,t){t.isActive&&S(e,t)}function O(e,t,i,n){t.x=i.x,t.y=i.y,t.dx=n.x,t.dy=n.y,t.isActive=!0,t.bullets=e}function _(e){e.isActive=!1,e.dx=0,e.dy=0,e.x=0,e.y=0,null!=e.bullets&&(e.h=e.bullets.bh,e.w=e.bullets.bw,e.shielded=e.bullets.shielded),e.dh=0}function k(...e){return e[Math.floor(Math.random()*e.length)]}function F(e,t){return Math.random()*(t-e)+e}function q(e,t){return e=Math.ceil(e),t=Math.floor(t)+1,Math.floor(Math.random()*(t-e)+e)}function D(){return`rgba(${q(0,255)}, ${q(0,255)}, ${q(0,255)}, 0.5)`}var Y;function I(e,t,i,n,r,a,o=!1,s){return{bullets:z((()=>B(r,a,o,s)),e),baseSpeedX:t,baseSpeedY:i,lastRandY:0,sprayOpen:n,shielded:o,bh:r,bw:a}}function U(e,t){let i=F(-t,t),n=e.lastRandY+i;var r,a;return r=l(m.bulletsMaxdY,n),a=-m.bulletsMaxdY,n=Math.max(r,a),e.lastRandY=n,n}function L(e,t,i,n,r=0){let a=U(e,r);if(n<R.ConicEnd)for(let o=0;o<=n;o++){let s=e.bullets.find((e=>!e.isActive));if(null==s)return;O(e,s,i,C(t,e.baseSpeedY*d(p*((o+1)/(n+2)))*e.sprayOpen+a)),a=U(e,r)}if(n==R.Straight){let n=e.bullets.find((e=>!e.isActive));if(null==n)return;n.dh=t/m.playerBulletSpeedX*.2,n.dhDirection=.5,O(e,n,i,C(t,a))}if(n==R.StraightHole){let n=e.bullets.find((e=>!e.isActive));if(null==n)return;if(n.dh=.4,n.dhDirection=0,O(e,n,i,C(t,a+150*n.dh+10)),n=e.bullets.find((e=>!e.isActive)),null==n)return;n.dh=.4,n.dhDirection=1,O(e,n,i,C(t,a-(150*n.dh+10)))}if(n==R.Explosion){let n=e.bullets.find((e=>!e.isActive));if(null==n)return;n.w=m.bossBigBulletWidth,n.h=m.bossBigBulletHeight,n.bullets=e,n.explodeTick=m.bossBigBulletExplosionTick,O(e,n,E(i,C(m.bossBigBulletWidth,-m.bossBigBulletHeight/2)),C(t,a))}if(n==R.UpAndDown){for(let o=0;o<=10;o++){let s=e.bullets.find((e=>!e.isActive));if(null==s)return;O(e,s,E(i,C(m.bossWidth/2,m.bossHeight/2)),C(t*d(p*((o+1)/(n+2)))*.5+a,e.baseSpeedY)),a=U(e,r)}for(let o=0;o<=10;o++){let s=e.bullets.find((e=>!e.isActive));if(null==s)return;O(e,s,E(i,C(m.bossWidth/2,-m.bossHeight/2)),C(t*d(p*((o+1)/(n+2)))*.5+a,-e.baseSpeedY)),a=U(e,r)}}}function X(e){for(let t of Q(e))W(t)}function G(e,t){for(let i of Q(t))A(e,i)}function Q(e){return e.bullets.filter((e=>e.isActive))}function N(e){for(let t of e.bullets)_(t)}(Y=R||(R={}))[Y.Single=0]="Single",Y[Y.Double=1]="Double",Y[Y.Triple=2]="Triple",Y[Y.Quadruple=3]="Quadruple",Y[Y.Quintuple=4]="Quintuple",Y[Y.Sixtuple=5]="Sixtuple",Y[Y.ConicEnd=6]="ConicEnd",Y[Y.Straight=7]="Straight",Y[Y.StraightHole=8]="StraightHole",Y[Y.Explosion=9]="Explosion",Y[Y.UpAndDown=10]="UpAndDown";const j={waitTime:2,tx:.8*m.worldWidth-m.bossWidth,ty:.5*m.worldHeight-m.bossHeight/2,dx:5,dy:15,shootPattern:[R.Sixtuple,R.Quintuple,R.Triple,R.UpAndDown],shootCount:[4,3,5,5],shootFrequency:[4,3,2,5],shootSpeed:[200,120,250,50],shootRandom:[150,300,300,150],repeat:3,resetPosOnRepeat:!0},$={waitTime:3,tx:m.worldWidth-m.bossWidth,ty:.2*m.worldHeight,dx:0,dy:60,shootPattern:[R.UpAndDown,R.StraightHole],shootCount:[5,40],shootFrequency:[5,3],shootSpeed:[200,100],repeat:1,shootRandom:[0,20],resetPosOnRepeat:!0},J={waitTime:0,tx:m.worldWidth-m.bossWidth,ty:.5*m.worldHeight-m.bossHeight,dx:-50,dy:0,shootPattern:[R.Explosion,R.Double],shootCount:[10,5],shootFrequency:[3,5],shootSpeed:[500,600],repeat:2,shootRandom:[600,100],resetPosOnRepeat:!0};function V(){const e=D();return{x:.5*m.worldWidth-m.bossWidth/2,y:.5*m.worldHeight-m.bossHeight/2,w:m.bossWidth,h:m.bossHeight,dx:0,dy:0,color:e,bullets:I(m.bossBulletsPoolSize,m.bossBulletSpeedX,m.bossBulletSpeedY,m.bossSprayOpen,m.bulletWidth,m.bulletHeight,void 0,!1),elapsedTime:0,currentPattern:$,shootElapsedTime:0,newPatternTime:0,shootCount:0,targetReached:!1,patternIndex:0,repeatCount:0,life:m.bossLife,sprite:"assets/boss.png",ox:m.bossOx,oy:m.bossOy}}function K(e){X(e.bullets),e.elapsedTime+=m.delta,e.shootElapsedTime+=m.delta;const t=m.bossSpeed;if(0!=e.newPatternTime){if(!(e.elapsedTime>=e.newPatternTime))return;e.newPatternTime=0,e.currentPattern==j?e.currentPattern=$:e.currentPattern==$?e.currentPattern=J:e.currentPattern==J&&(e.currentPattern=j)}if(e.targetReached?(e.y>.9*m.worldHeight-m.bossHeight||e.y<.1*m.worldHeight)&&(e.dy*=-1):(e.x>e.currentPattern.tx?e.dx=-t:e.x<e.currentPattern.tx&&(e.dx=t),e.y>e.currentPattern.ty?e.dy=-t:e.y<e.currentPattern.ty&&(e.dy=t)),e.x+=e.dx*m.delta,e.y+=e.dy*m.delta,e.targetReached)if(e.shootCount<e.currentPattern.shootCount[e.patternIndex])e.shootElapsedTime>=1/e.currentPattern.shootFrequency[e.patternIndex]&&(e.shootCount+=1,e.shootElapsedTime=0,null!=e.currentPattern.shootPattern[e.patternIndex]&&L(e.bullets,e.dx-e.currentPattern.shootSpeed[e.patternIndex],E(e,C(0,m.bossHeight/2)),e.currentPattern.shootPattern[e.patternIndex],e.currentPattern.shootRandom[e.patternIndex]));else if(e.shootCount=0,e.bullets.lastRandY=0,e.patternIndex+1==e.currentPattern.shootFrequency.length){if(e.patternIndex=0,e.repeatCount+1==e.currentPattern.repeat)return e.repeatCount=0,e.targetReached=!1,void(e.newPatternTime=e.elapsedTime+e.currentPattern.waitTime);e.repeatCount+=1,e.currentPattern.resetPosOnRepeat&&(e.targetReached=!1)}else e.patternIndex+=1;else if(!(o(e.x)!=e.currentPattern.tx&&s(e.x)!=e.currentPattern.tx||o(e.y)!=e.currentPattern.ty&&s(e.y)!=e.currentPattern.ty))return e.targetReached=!0,e.dx=e.currentPattern.dx,void(e.dy=e.currentPattern.dy)}function Z(e,t){G(e,t.bullets),S(e,t)}function ee(e){e.x=.5*m.worldWidth-m.bossWidth/2,e.y=.5*m.worldHeight-m.bossHeight/2,e.dx=0,e.dy=0,N(e.bullets),e.elapsedTime=0,e.currentPattern=$,e.shootElapsedTime=0,e.newPatternTime=0,e.shootCount=0,e.targetReached=!1,e.patternIndex=0,e.repeatCount=0}let te;var ie;let ne;function re(e,t,i,n,r,a,o,s,l=R.Single,d){return{x:m.worldWidth,y:e,sy:e,dx:0,dy:0,w:m.enemyWidth,h:m.enemyHeight,pattern:t,time:n,color:i,dead:!1,amplitude:r,frequency:a,rx:o,ry:s,elapsedTime:0,shootElapsedTime:0,distance:0,direction:te.Left,bullets:I(m.enemyBulletsPoolSize,m.enemyBulletSpeedX,m.enemyBulletSpeedY,m.enemySprayOpen,m.bulletWidth,m.bulletHeight,void 0,!1),bulletsPattern:l,sprite:d,ox:m.enemyOx,oy:m.enemyOy}}function ae(e){if(X(e.bullets),e.dead)return;const t=e.frequency,i=e.amplitude,n=(m.worldWidth+m.enemyWidth)/e.time;e.elapsedTime+=m.delta,e.shootElapsedTime+=m.delta,e.pattern==ne.Circular&&(e.dx=2*p*t*i*d(2*p*t*e.elapsedTime)-n,e.dy=2*p*t*i*u(2*p*t*e.elapsedTime)),e.pattern==ne.Rectangular&&(null==e.direction&&(e.direction=te.Left),e.direction==te.Left&&(e.distance>=e.rx&&(e.direction=k(te.Up,te.Down),e.distance=0),e.dx=-n,e.dy=0,e.distance+=-e.dx*m.delta),e.direction,te.Right,e.direction==te.Up&&(e.distance>=e.ry&&(e.direction=te.Left,e.distance=0),e.dy=-n/2,e.dx=0,e.distance+=-e.dy*m.delta),e.direction==te.Down&&(e.distance>=e.ry&&(e.direction=te.Left,e.distance=0),e.dy=n/2,e.dx=0,e.distance+=e.dy*m.delta)),e.pattern==ne.Triangular&&(e.y>=e.sy+i&&(e.dy=-4*i*t),(0==e.dy||e.y<=e.sy-i)&&(e.dy=4*i*t),e.dx=-n),e.pattern==ne.Straight&&(e.dx=-n),e.x+=e.dx*m.delta,e.y+=e.dy*m.delta,e.shootElapsedTime>=1/m.enemyShootFrequency&&(e.shootElapsedTime=0,L(e.bullets,-n-m.enemyBulletSpeedX,E(e,C(0,m.enemyHeight/2)),e.bulletsPattern))}function oe(e,t){G(e,t.bullets),t.dead||S(e,t)}(ie=te||(te={}))[ie.Up=0]="Up",ie[ie.Left=1]="Left",ie[ie.Right=2]="Right",ie[ie.Down=3]="Down",function(e){e[e.Straight=0]="Straight",e[e.Triangular=1]="Triangular",e[e.Circular=2]="Circular",e[e.Rectangular=3]="Rectangular"}(ne||(ne={}));const se={up:!1,down:!1,left:!1,right:!1,space:!1,shift:!1,m:!1};function le(e){let t=!0;return()=>se[e]&&t?(t=!1,!0):(se[e]||(t=!0),!1)}onkeydown=onkeyup=e=>function(e,t){38!=e&&90!=e&&87!=e||(se.up=t);39!=e&&68!=e||(se.right=t);40!=e&&83!=e||(se.down=t);37!=e&&65!=e&&81!=e||(se.left=t);16==e&&(se.shift=t);32==e&&(se.space=t);77==e&&(se.m=t)}(e.keyCode,null!=e.type[5]);let de,ue,he,ce,pe,ye=null,fe=(...e)=>{let t=ye.createBufferSource(),i=ye.createBuffer(e.length,e[0].length,xe);return e.map(((e,t)=>i.getChannelData(t).set(e))),t.buffer=i,t.connect(ye.destination),t.start(),t},me=(e=1,t=.05,i=220,n=0,r=0,a=.1,o=0,s=1,l=0,d=0,u=0,h=0,c=0,p=0,y=0,f=0,m=0,w=1,x=0,g=0)=>{let b,S,v=2*Math.PI,M=l*=500*v/xe**2,H=(0<y?1:-1)*v/4,T=i*=(1+2*t*Math.random()-t)*v/xe,R=[],P=0,z=0,C=0,E=1,B=0,W=0,A=0;for(d*=500*v/xe**3,y*=v/xe,u*=v/xe,h*=xe,c=xe*c|0,S=(n=99+xe*n)+(x*=xe)+(r*=xe)+(a*=xe)+(m*=xe)|0;C<S;R[C++]=A)++W%(100*f|0)||(A=o?1<o?2<o?3<o?Math.sin((P%v)**3):Math.max(Math.min(Math.tan(P),1),-1):1-(2*P/v%2+2)%2:1-4*Math.abs(Math.round(P/v)-P/v):Math.sin(P),A=(c?1-g+g*Math.sin(2*Math.PI*C/c):1)*(0<A?1:-1)*Math.abs(A)**s*e*we*(C<n?C/n:C<n+x?1-(C-n)/x*(1-w):C<n+x+r?w:C<S-m?(S-C-m)/a*w:0),A=m?A/2+(m>C?0:(C<S-m?1:(S-C)/m)*R[C-m|0]/2):A),b=(i+=l+=d)*Math.sin(z*y-H),P+=b-b*p*(1-1e9*(Math.sin(C)+1)%2),z+=b-b*p*(1-1e9*(Math.sin(C)**2+1)%2),E&&++E>h&&(i+=u,T+=u,E=0),!c||++B%c||(i=T,l=M,E=E||1);return R},we=.3,xe=44100,ge=(e,t,i,n=125)=>{let r,a,o,s,l,d,u,h,c,p,y,f,m,w,x,g=0,b=[],S=[],v=[],M=0,H=0,T=1,R={},P=xe/n*60>>2;for(;T;M++)b=[T=h=y=m=0],i.map(((n,y)=>{for(u=t[n][M]||[0,0,0],T|=!!t[n][M],x=m+(t[n][0].length-2-!h)*P,w=y==i.length-1,a=2,s=m;a<u.length+w;h=++a){for(l=u[a],c=a==u.length+w-1&&w||p!=(u[0]||0)|l|0,o=0;o<P&&h;o++>P-99&&c&&(f+=(f<1)/99))d=(1-f)*b[g++]/2||0,S[s]=(S[s]||0)-d*H+d,v[s]=(v[s++]||0)+d*H+d;l&&(f=l%1,H=u[1]||0,(l|=0)&&(b=R[[p=u[g=0]||0,l]]=R[[p,l]]||(r=[...e[p]],r[2]*=2**((l-12)/12),l>0?me(...r):[])))}m=x}));return[S,v]},be=[[[,0,261,,,2,2,,,,,,,,,,.01],[,0,32,.05,,.2,3,5],[3,0,43,,,.25,,,,,,,,2],[1.6,0,655,,,,3,1.65,,,,,.02,3.8,-.1,,.2],[,0,232,.01,.09,.15,2,,,,,,154.87,,,,.26]],[[[,,4,,,,,,3,,,,,,,,,,,,,,,,,,,,,,,,,,4,,,,,,3,,,,,,,,,,,,,,,,,,,,,,3,,,,],[,,10,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,10,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,],[,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,]],[[,,4,,,,,,3,,,,,,,,,,3,,3,,3,,3,,3,,3,,3,,,,4,,,,,,3,,,,,,,,,,4,,3,,3,,3,,3,,3,,3,,,,],[,,10,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,10,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,],[,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,]],[[,,4,,,,,,3,,,,,,,,,,3,,3,,3,,3,,3,,3,,3,,,,4,,,,,,3,,,,,,,,,,4,,3,,3,,3,,3,,3,,3,,,,],[,,10,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,10,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,],[,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,],[2,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,],[3,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,]],[[,,4,,,,,,3,,,,,,,,,,3,,3,,3,,3,,3,,3,,3,,,,4,,,,,,3,,,,,,,,,,4,,3,,3,,3,,3,,3,,3,,,,],[4,,,,,,,,,,,,,,25,24,25,24,,,,,25,24,25,24,,,,,,,,,,,,,,,,,,,,,25,24,25,24,,,,,25,24,25,24,22,,,,,,,,],[,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,],[2,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,],[3,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,,,]],[[,,4,,,,,,3,,,,,,,,,,3,,3,,3,,3,,3,,3,,3,,,,4,,,,,,3,,,,,,,,,,4,,3,,3,,3,,3,,3,,3,,,,],[4,,,,,,,,,,,,,,25,24,25,24,,,,,25,24,25,24,,,,,,,,,,,,,,,,,,,,,25,24,25,24,,,,,25,24,25,24,22,,,,,,,,],[,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,16,,,,,,15,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,],[4,,,,,,,,,,,,,,30,29,30,29,,,,,18,17,18,17,,,,,,,,,,,,,,,,,,,,,30,29,30,29,,,,,18,17,18,17,15,,,,,,,,],[3,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,13,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,13,13]],[[,,4,,,,,,3,,,,,,,,,,3,,3,,3,,3,,3,,3,,3,,,,4,,,,,,3,,,,,,,,,,4,,3,,3,,3,,3,,3,,3,,,,],[4,,,,,,,,,,,,,,25,24,25,24,,,,,25,24,25,24,,,,,,,,,,,,,,,,,,,,,25,24,25,24,,,,,25,24,25,24,22,,,,,,,,],[4,,13,13,13,13,13,13,12,12,12,12,12,12,12,,,,12,12,12,12,,,,,12,12,12,12,12,12,12,12,13,13,13,13,13,13,10,10,10,10,10,10,,,,,10,10,10,10,,,,,,10,10,10,10,10,10,10],[1,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,3,,],[4,,,,,,,,,,,,,,30,29,30,29,,,,,18,17,18,17,,,,,,,,,,,,,,,,,,,,,30,29,30,29,,,,,18,17,18,17,15,,,,,,,,],[3,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,13,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,13,13]]],[0,1,1,2,2,3,3,4,4,5,5,3,3,4,4,5,5,2,2],135,undefined],Se=[[[.5,0,128,,.08,.5,3],[.8,0,32,,.07,.11,2,0,,,.5,.01],[2,0,4e3,,,.03,2,1.25,,,,,.02,6.8,-.3,,.5],[.9,0,32,,,.35,3,2]],[[[1,,13,13,15,13,13,13,15,16,13,13,15,13,13,13,16,15,13,13,15,13,13,13,15,16,13,13,15,13,13,13,16,21],[,,15,,20,15,,18,,,,,,,21,16,15,,15,,20,15,,20,,,,,,,23,18,15,,],[2,,,,,,,,,,13,13,13,13,,,,,,,,,,,,,1,1,1,1,,,,,]],[[1,,13,13,15,13,13,13,15,16,13,13,15,13,13,13,16,15,13,13,15,13,13,13,15,16,13,13,15,13,13,13,16,21],[,,15,,20,15,,18,,,,,,,21,16,15,,15,,20,15,,20,,,,,,,23,18,15,,],[2,,,,,,,,,,13,13,13,13,,,,,,,,,,,,,1,1,1,1,,,,,],[3,,20,,,,20,,,,20,,,,20,,15,,13,,,,13,,,,13,,,,13,,16,,]],[[1,,13,13,15,13,13,13,15,16,13,13,15,13,13,13,16,15,13,13,15,13,13,13,15,16,13,13,15,13,13,13,16,21]]],[2,2,0,0,1,0,1,0,1,0],80],ve=[[[1.5,0,130,,,.5,,,,,,,,,,,,.15,.6],[,0,130,.01,.09,.15,2,,,,,,154.87,,,,.26],[1.4,0,32,,,.25,3,5]],[[[,,24,,,,20,,,,17,,,,13,,,,10,,,,10,,,,10,,,,10,,,,13,,,,17,,,,20,,,,24,,,,10,,,,10,,,,10,,,,13,,,,],[1,,24,20,22,18,20,17,18,15,17,13,15,12,13,10,12,8,10,10,,,10,10,,,10,10,,,10,,10,,24,20,22,18,20,17,18,15,17,13,15,12,13,10,12,8,10,10,,,10,10,,,10,10,,,10,,13,,],[,,36,32,34,,,,,,29,25,27,,,,,,22,,,,22,,,,,,,,,,,,22,25,24,,,,,,29,32,30,,,,,,25,,,,25,,,,25,,,,25,,,,],[2,,12,,12,,12,,12,,12,,12,,12,,12,,10,,10,,10,,10,,10,,10,,10,,10,,12,,12,,12,,12,,12,,12,,12,,12,,10,,10,,10,,10,,10,,10,,10,,5,,]],[[,,24,,,,20,,,,17,,,,13,,,,10,,,,10,,,,10,,,,10,,,,13,,,,17,,,,20,,,,24,,,,10,,,,10,,,,10,,,,13,,,,],[1,,24,20,22,18,20,17,18,15,17,13,15,12,13,10,12,8,10,10,,,10,10,,,10,10,,,10,,10,,24,20,22,18,20,17,18,15,17,13,15,12,13,10,12,8,10,10,,,10,10,,,10,10,,,10,,13,,],[,,36,32,34,,,,,,29,25,27,,,,,,22,,,,22,,,,,,,,,,,,22,25,24,,,,,,29,32,30,,,,,,25,,,,25,,,,25,,,,25,,,,]],[[,,24,,,,20,,,,17,,,,13,,,,10,,,,10,,,,10,,,,10,,,,13,,,,17,,,,20,,,,24,,,,10,,,,10,,,,10,,,,13,,,,],[,,36,32,34,,,,,,29,25,27,,,,,,22,,,,22,,,,,,,,,,,,22,25,24,,,,,,29,32,30,,,,,,25,,,,25,,,,25,,,,25,,,,]],[[,,24,,,,20,,,,17,,,,13,,,,10,,,,10,,,,10,,,,10,,,,13,,,,17,,,,20,,,,24,,,,10,,,,10,,,,10,,,,13,,,,],[1,,24,20,22,18,20,17,18,15,17,13,15,12,13,10,12,8,10,10,,,10,10,,,10,10,,,10,,10,,24,20,22,18,20,17,18,15,17,13,15,12,13,10,12,8,10,10,,,10,10,,,10,10,,,10,,13,,]]],[2,3,3,1,1,0,0,0,0,0,0],120],Me=[[[1.5,0,32,.05,.25,,3,3,,,,,,,,,3,.6],[,0,128,,,.2,2,,,,,,,,,.02,.01],[,0,1024,,,.3,2,.2,-.1,-.15,9,.02,,.1,.12,,.06]],[[[,,13,,13,,,,,,6,,6,,,,,,8,,8,,,,,,3,,3,,,,,,],[1,,25,,25,,25,,25,,18,,18,,18,,18,,12,,12,,12,,12,,3,,3,,3,,3,,],[1,,22,,22,,22,,22,,15,,15,,15,,15,,8,,8,,8,,8,,6,,6,,6,,6,,],[2,,25,22,,,,,,,15,18,,15,,,,,12,,,,,,,,6,,6,6,,3,,,]],[[,,13,,13,,,,,,6,,6,,,,,,8,,8,,,,,,3,,3,,,,,,],[1,,25,,25,,25,,25,,18,,18,,18,,18,,12,,12,,12,,12,,3,,3,,3,,3,,],[1,,22,,22,,22,,22,,15,,15,,15,,15,,8,,8,,8,,8,,6,,6,,6,,6,,],[2,,25,22,,,,,,,15,15,,18,,,,,8,8,,12,,,,,6,,6,6,,3,,,]],[[,,13,,13,,,,,,6,,6,,,,,,8,,8,,,,,,3,,3,,,,,,],[1,,25,,,,,,,,18,,,,18,,,,12,,,,,,,,3,,,,3,,,,],[1,,22,,,,22,,,,15,,,,,,,,8,,,,8,,,,6,,,,,,,,]]],[2,2,0,1,0,1],120];var He;(He=pe||(pe={}))[He.Speed=0]="Speed",He[He.Shield=1]="Shield",He[He.Multishot=2]="Multishot";let Te=0,Re=0,Pe=0,ze=null;function Ce(e){c("ui-shop").style.display=e?"flex":"none"}function Ee(e){c("current-money").innerText=e.toString()}window.onPowerUpChanged=function(e,t){const i=ze.player;De(i,-t)&&(e==pe.Speed&&(Te+=t),e==pe.Shield&&(Re+=t),e==pe.Multishot&&(Pe+=t),Te<0&&(Te=0,De(i,t)),Re<0&&(Re=0,De(i,t)),Pe<0&&(Pe=0,De(i,t)),c("current-speed").innerText=Te.toString(),c("current-shield").innerText=Re.toString(),c("current-multishot").innerText=Pe.toString())},window.play=function(){tt(Xe.Game,ze)};const Be=le("space"),We=le("shift");let Ae,Oe=!1,_e=!1,ke=["assets/cerbere.png","assets/cerbere2.png"];function Fe(e){let t=0,i=0;X(e.bullets),e.invincibleTime>0?e.invincibleTime-=m.delta:e.invincibleTime=0,se.left&&(t+=-m.playerSpeedX),se.right&&(t+=m.playerSpeedX),se.up&&(i+=-m.playerSpeedY),se.down&&(i+=m.playerSpeedY),Be()&&function(e){null!=e.bullets.bullets.find((e=>!e.isActive))&&L(e.bullets,e.shootSpeed*m.playerBulletSpeedX,E(e,C(m.playerWidth,m.playerHeight/2)),e.bulletsPattern)}(e),e.dx=t,e.dy=i,_e||(ye=new window.AudioContext,ue=ge(...ve),de=[ge(...be),ge(...Se)],he=ge(...Me),_e=!0),_e&&We()&&(Oe?ce.stop():(ye?.resume(),ce=fe(...de[q(0,1)]),ce.loop=!0),Oe=!Oe),e.x+=e.dx*m.delta,e.y+=e.dy*m.delta,e.x<=0&&(e.x=0),e.x>=m.worldWidth-m.playerWidth&&(e.x=m.worldWidth-m.playerWidth),e.y<=0&&(e.y=0),e.y>=m.worldHeight-m.playerHeight&&(e.y=m.worldHeight-m.playerHeight),e.animationTime+=m.delta,e.animationTime>m.playerAnimationTime&&(e.animationTime=0,e.sprite=e.sprite==ke[0]?ke[1]:ke[0])}function qe(e){e.x=m.playerWidth,e.y=m.worldHeight/2,e.dx=0,e.dy=0;let t=[Te,Re,Pe];e.shootSpeed=t[pe.Speed]+1,e.shieldCount=t[pe.Shield]+1,e.shieldCount==m.powerUpMaxCount&&(e.bullets.shielded=!0),t[pe.Multishot]==m.powerUpMaxCount?e.bulletsPattern=R.Straight:e.bulletsPattern=t[pe.Multishot]}function De(e,t){return!(e.money+t<0)&&(e.money+=t,Ee(e.money),!0)}var Ye;(Ye=Ae||(Ae={}))[Ye.Easy=0]="Easy",Ye[Ye.Medium=1]="Medium",Ye[Ye.Hard=2]="Hard";let Ie=["assets/floating_eye.png","assets/imp.png","assets/skeleton.png","assets/zombie.png"];function Ue(e){const t=[];if(e==Ae.Easy){const i=q(3,6);for(let n=0;n<i;n++)t.push(Le(e))}if(e==Ae.Medium){const i=q(5,10);for(let n=0;n<i;n++)t.push(Le(e))}if(e==Ae.Hard){const i=q(9,17);for(let n=0;n<i;n++)t.push(Le(e))}return{difficulty:e,enemies:t}}function Le(e){const t=D();if(e==Ae.Easy){const e=k(ne.Straight,ne.Triangular),i=F(m.waveEasyAmplitudeMin,m.waveEasyAmplitudeMax),n=F(m.waveEasyFrequencyMin,m.waveEasyFrequencyMax),r=F(m.waveEasyRxMin,m.waveEasyRxMax),a=F(m.waveEasyRyMin,m.waveEasyRyMax);return re(F(m.waveEasySyMin,m.waveEasySyMax),e,t,F(m.waveEasyTimeMin,m.waveEasyTimeMax),i,n,r,a,q(R.Single,R.Double),k(...Ie))}if(e==Ae.Medium){const e=k(ne.Straight,ne.Triangular,ne.Rectangular),i=F(m.waveMediumAmplitudeMin,m.waveMediumAmplitudeMax),n=F(m.waveMediumFrequencyMin,m.waveMediumFrequencyMax),r=F(m.waveMediumRxMin,m.waveMediumRxMax),a=F(m.waveMediumRyMin,m.waveMediumRyMax);return re(F(m.waveMediumSyMin,m.waveMediumSyMax),e,t,F(m.waveMediumTimeMin,m.waveMediumTimeMax),i,n,r,a,q(R.Single,R.Quintuple),k(...Ie))}if(e==Ae.Hard){const e=k(ne.Triangular,ne.Rectangular,ne.Circular),i=F(m.waveHardAmplitudeMin,m.waveHardAmplitudeMax),n=F(m.waveHardFrequencyMin,m.waveHardFrequencyMax),r=F(m.waveHardRxMin,m.waveHardRxMax),a=F(m.waveHardRyMin,m.waveHardRyMax);return re(F(m.waveHardSyMin,m.waveHardSyMax),e,t,F(m.waveHardTimeMin,m.waveHardTimeMax),i,n,r,a,q(R.Double,R.Sixtuple),k(...Ie))}throw new Error}let Xe,Ge=0,Qe=1,Ne=m.waveEasyCount+m.waveMediumCount+m.waveHardCount+1,je=le("m");function $e(e){if(Ge+=m.delta,(Ge>=m.waveEasyTimeMax||e.deadCount==e.entities.length)&&(Ve(e),Ge=0),Qe<Ne)for(let t of e.entities)ae(t);else K(e.boss);je()&&Ve(e)}function Je(e,t){if(Qe<Ne)for(let i of t.entities)oe(e,i);else Z(e,t.boss)}function Ve(e){Qe++;let t=Ae.Easy;Qe>3&&Qe<=6&&(t=Ae.Medium),Qe>6&&(t=Ae.Hard),e.entities=Ue(t).enemies,e.deadCount=0,Ge=0,De(e.player,1)}var Ke;function Ze(e){e.scene==Xe.Game&&(T-=m.backgroundSpeed*m.delta,T<=-3*m.worldWidth&&(T=0),P-=m.borderSpeed*m.delta,P<=-3*m.worldWidth&&(P=0),Fe(e.player),$e(e.enemies))}function et(e,t){M(e,e.backgroundCanvas),function(e,t){v(e,t.sprite,{x:T,y:0,w:4*m.worldWidth,h:m.worldHeight},!1)}(e,t.background),t.scene==Xe.Game&&(M(e,e.gameCanvas),function(e,t){o(t.invincibleTime/m.playerBlinkPeriod)%2==0&&S(e,t);for(let i of t.bullets.bullets)i.isActive&&A(e,i)}(e,t.player),Je(e,t.enemies)),M(e,e.foregroundCanvas),function(e){v(e,"assets/border1.png",{x:P,y:m.worldHeight-m.tileSize,w:4*m.worldWidth,h:m.tileSize},!1),v(e,"assets/border1.png",{x:P,y:0,w:4*m.worldWidth,h:m.tileSize},!0)}(e)}function tt(e,t){var i;qe(t.player),i=t.enemies,Qe=1,Ve(i),ee(t.enemies.boss),t.scene=e,e==Xe.Shop&&Ce(!0),e==Xe.Game&&Ce(!1)}(Ke=Xe||(Xe={}))[Ke.Shop=0]="Shop",Ke[Ke.Game=1]="Game",Ke[Ke.Quest=2]="Quest";let it=m.engineTimeResolution,nt=performance.now(),rt=nt;const at=function(){const e=b("game-canvas",m.width,m.height);return{image:g(f),gameCanvas:e,backgroundCanvas:b("background-canvas",m.width,m.height),foregroundCanvas:b("foreground-canvas",m.width,m.height),offscreenCanvas:b("offscreen-canvas",m.tileSize*w,m.tileSize*x),currentCanvas:e}}(),ot=function(){const e=function(){const e={x:m.playerWidth,dx:0,y:m.worldHeight/2,dy:0,w:m.playerWidth,h:m.playerHeight,bullets:I(m.playerBulletsPoolSize,m.playerBulletSpeedX,m.playerBulletSpeedY,m.playerSprayOpen,m.playerBulletWidth,m.playerBulletHeight,void 0,!0),bulletsPattern:R.Single,shootSpeed:1,shieldCount:0,money:10,sprite:ke[0],invincibleTime:0,ox:m.playerOx,oy:m.playerOy,animationTime:0};return Ee(e.money),e}(),t=function(e){return{entities:Ue(Ae.Easy).enemies,deadCount:0,boss:V(),player:e}}(e),i={background:{x:0,y:0,w:0,h:0,sprite:"assets/basic_cobble.png",ox:0,oy:0},player:e,enemies:t,scene:Xe.Shop};return ze=i,i}();!function e(t){window.requestAnimationFrame((t=>e(t)));var i=0;t>nt+it&&(i=o((t-nt)/it));for(var n=0;n<i;n++)nt+=it,Ze(ot);(function({gameCanvas:e,backgroundCanvas:t,offscreenCanvas:i,foregroundCanvas:n}){H(e),H(t),H(n),H(i)})(at),et(at,ot),rt=t}(0);