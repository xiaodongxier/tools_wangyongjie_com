import{_ as K,r as u,A as O,aj as j,e as v,o as m,c as U,i as t,f as n,h as s,l as g,cB as b,F as J,B as Q,n as C,t as S,cy as Z,cW as $,m as M,K as ee}from"./index-BWfCbvd4.js";const oe={class:"shader-lab"},te={class:"main-grid"},ae={class:"editor-panel"},le={class:"panel-header"},ne={class:"shader-tabs"},re={class:"editor-actions"},se={key:0,class:"error-panel"},ie={class:"canvas-panel"},ue={class:"panel-header"},ce={class:"fps"},ve={class:"canvas-wrap"},me={class:"controls"},de={class:"control-row"},fe={class:"control-row"},_e="attribute vec2 position;void main(){gl_Position=vec4(position,0.0,1.0);}",pe={__name:"shader-lab",setup(ge){const c=u(null),x=u(""),w=u("plasma"),p=u(!1),f=u(""),d=u({text:"",type:"info"}),_=u(512),F=u(1),L=u(0);let e=null,i=null,y=null,P=0,A=0,R=0,B=.5,E=.5;const I=[{name:"plasma",label:"等离子",source:`precision mediump float;
uniform float u_time;uniform vec2 u_resolution;uniform vec2 u_mouse;
void main(){
  vec2 uv=gl_FragCoord.xy/u_resolution;float t=u_time*0.5;
  float v1=sin(uv.x*10.0+t);
  float v2=sin(10.0*(uv.x*sin(t*0.5)+uv.y*cos(t*0.33))+t);
  float cx=uv.x+0.5*sin(t*0.33);float cy=uv.y+0.5*cos(t*0.5);
  float v3=sin(sqrt(100.0*(cx*cx+cy*cy))+t);float v=(v1+v2+v3)/3.0;
  gl_FragColor=vec4(sin(v*3.14159)*0.5+0.5,sin(v*3.14159+2.094)*0.5+0.5,sin(v*3.14159+4.189)*0.5+0.5,1.0);
}`},{name:"mandelbrot",label:"分形",source:`precision mediump float;
uniform float u_time;uniform vec2 u_resolution;uniform vec2 u_mouse;
void main(){
  vec2 uv=(gl_FragCoord.xy-u_resolution*0.5)/min(u_resolution.x,u_resolution.y);
  uv*=3.0;uv.x-=0.5;float zoom=1.0+u_mouse.x*4.0;uv/=zoom;
  vec2 c=uv,z=vec2(0.0);float iter=0.0;
  for(float i=0.0;i<100.0;i++){z=vec2(z.x*z.x-z.y*z.y,2.0*z.x*z.y)+c;if(dot(z,z)>4.0)break;iter++;}
  float t=iter/100.0;
  vec3 color=vec3(0.5+0.5*sin(3.0+t*15.0+u_time*0.5),0.5+0.5*sin(3.0+t*15.0+u_time*0.5+2.094),0.5+0.5*sin(3.0+t*15.0+u_time*0.5+4.189));
  if(iter>=100.0)color=vec3(0.0);gl_FragColor=vec4(color,1.0);
}`},{name:"fire",label:"火焰",source:`precision mediump float;
uniform float u_time;uniform vec2 u_resolution;uniform vec2 u_mouse;
float rnd(vec2 st){return fract(sin(dot(st,vec2(12.9898,78.233)))*43758.5453);}
void main(){
  vec2 uv=gl_FragCoord.xy/u_resolution;uv.y=1.0-uv.y;float t=u_time*2.0;
  vec2 nuv=uv*vec2(8.0,4.0);
  float n1=rnd(floor(nuv+t)),n2=rnd(floor(nuv+t+1.0));
  float n=mix(n1,n2,fract(t));
  float fire=(1.0-uv.y)*smoothstep(0.3,0.7,uv.x)*smoothstep(0.3,0.7,1.0-uv.x)*(0.8+0.2*n);
  fire=pow(fire,1.5);
  vec3 color=mix(vec3(1,0,0),vec3(1,1,0),smoothstep(0.0,0.6,fire));
  color=mix(vec3(0.0),color,fire);gl_FragColor=vec4(color,1.0);
}`},{name:"waves",label:"海浪",source:`precision mediump float;
uniform float u_time;uniform vec2 u_resolution;uniform vec2 u_mouse;
void main(){
  vec2 uv=gl_FragCoord.xy/u_resolution;float t=u_time;
  float w1=sin(uv.x*6.0+t*2.0)*0.02,w2=sin(uv.x*12.0-t*1.5)*0.01,w3=sin(uv.x*8.0+uv.y*4.0+t)*0.015;
  float y=uv.y+w1+w2+w3;
  vec3 sky=mix(vec3(0.1,0.1,0.3),vec3(0.4,0.6,0.9),uv.y);
  vec3 water=mix(vec3(0.0,0.2,0.4),vec3(0.0,0.5,0.8),sin(y*20.0)*0.5+0.5);
  float h=smoothstep(0.48,0.52,uv.y+sin(uv.x*3.0+t)*0.02);
  vec3 color=mix(water,sky,h);
  float sun=exp(-pow(length(uv-vec2(0.7,0.7))*5.0,2.0));
  color+=vec3(1.0,0.8,0.4)*sun;gl_FragColor=vec4(color,1.0);
}`},{name:"galaxy",label:"星系",source:`precision mediump float;
uniform float u_time;uniform vec2 u_resolution;uniform vec2 u_mouse;
float rnd(vec2 st){return fract(sin(dot(st,vec2(12.9898,78.233)))*43758.5453);}
void main(){
  vec2 uv=(gl_FragCoord.xy-u_resolution*0.5)/min(u_resolution.x,u_resolution.y);
  float t=u_time*0.3,angle=atan(uv.y,uv.x)+t,dist=length(uv);
  float spiral=sin(angle*3.0-dist*10.0+t*2.0)*0.5+0.5;spiral*=exp(-dist*2.0);
  vec2 starUV=uv*50.0;float star=step(0.98,rnd(floor(starUV)))*rnd(fract(starUV))*smoothstep(0.5,0.0,dist);
  float core=exp(-dist*dist*20.0);
  vec3 color=vec3(0.3,0.5,1.0)*spiral+vec3(1.0,0.8,0.4)*core+vec3(1.0)*star*(0.5+0.5*sin(t*10.0+rnd(floor(starUV))*6.28));
  gl_FragColor=vec4(color,1.0);
}`}];function V(a){const o=I.find(l=>l.name===a);o&&(x.value=o.source,D())}function D(){e&&(p.value=!0,f.value="",d.value={text:"",type:"info"},ee(()=>{const a=e.createShader(e.VERTEX_SHADER);e.shaderSource(a,_e),e.compileShader(a);const o=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(o,x.value),e.compileShader(o),!e.getShaderParameter(o,e.COMPILE_STATUS)){f.value=e.getShaderInfoLog(o),d.value={text:"编译失败",type:"danger"},e.deleteShader(a),e.deleteShader(o),p.value=!1;return}const l=e.createProgram();if(e.attachShader(l,a),e.attachShader(l,o),e.linkProgram(l),!e.getProgramParameter(l,e.LINK_STATUS)){f.value=e.getProgramInfoLog(l),d.value={text:"链接失败",type:"danger"},p.value=!1;return}i&&e.deleteProgram(i),i=l;const k=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,k),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);const h=e.getAttribLocation(i,"position");e.enableVertexAttribArray(h),e.vertexAttribPointer(h,2,e.FLOAT,!1,0,0),d.value={text:"编译成功",type:"success"},p.value=!1,P=performance.now()}))}function Y(){V(w.value)}function N(){c.value&&(c.value.width=_.value,c.value.height=_.value,e&&e.viewport(0,0,_.value,_.value))}function q(a){const o=c.value.getBoundingClientRect();B=(a.clientX-o.left)/o.width,E=1-(a.clientY-o.top)/o.height}function z(){if(!e||!i){y=requestAnimationFrame(z);return}e.useProgram(i),e.uniform1f(e.getUniformLocation(i,"u_time"),(performance.now()-P)/1e3*F.value),e.uniform2f(e.getUniformLocation(i,"u_resolution"),c.value.width,c.value.height),e.uniform2f(e.getUniformLocation(i,"u_mouse"),B,E),e.drawArrays(e.TRIANGLE_STRIP,0,4),A++;const a=performance.now();a-R>=1e3&&(L.value=A,A=0,R=a),y=requestAnimationFrame(z)}return O(()=>{const a=c.value;if(a){if(e=a.getContext("webgl")||a.getContext("experimental-webgl"),!e){f.value="您的浏览器不支持 WebGL";return}N(),V("plasma"),z()}}),j(()=>{y&&cancelAnimationFrame(y)}),(a,o)=>{const l=v("el-icon"),k=v("el-radio-button"),h=v("el-radio-group"),G=v("el-button"),W=v("el-tag"),T=v("el-option"),X=v("el-select"),H=v("el-slider");return m(),U("div",oe,[t("div",te,[t("div",ae,[t("div",le,[n(l,null,{default:s(()=>[(m(),g(b("color")))]),_:1}),o[4]||(o[4]=t("span",null,"GLSL 着色器编辑器",-1))]),t("div",ne,[n(h,{modelValue:w.value,"onUpdate:modelValue":o[0]||(o[0]=r=>w.value=r),size:"small",onChange:V},{default:s(()=>[(m(),U(J,null,Q(I,r=>n(k,{key:r.name,label:r.name},{default:s(()=>[C(S(r.label),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),Z(t("textarea",{"onUpdate:modelValue":o[1]||(o[1]=r=>x.value=r),class:"code-editor",spellcheck:"false"},null,512),[[$,x.value]]),t("div",re,[n(G,{type:"primary",onClick:D,loading:p.value,size:"small"},{default:s(()=>[n(l,null,{default:s(()=>[(m(),g(b("video-play")))]),_:1}),o[5]||(o[5]=C("编译运行 ",-1))]),_:1},8,["loading"]),n(G,{onClick:Y,size:"small"},{default:s(()=>[n(l,null,{default:s(()=>[(m(),g(b("refresh-right")))]),_:1}),o[6]||(o[6]=C("重置 ",-1))]),_:1}),d.value.text?(m(),g(W,{key:0,type:d.value.type,size:"small"},{default:s(()=>[C(S(d.value.text),1)]),_:1},8,["type"])):M("",!0)]),f.value?(m(),U("div",se,[t("pre",null,S(f.value),1)])):M("",!0)]),t("div",ie,[t("div",ue,[n(l,null,{default:s(()=>[(m(),g(b("monitor")))]),_:1}),o[7]||(o[7]=t("span",null,"渲染预览",-1)),t("div",ce,S(L.value)+" FPS",1)]),t("div",ve,[t("canvas",{ref_key:"glCanvas",ref:c,onClick:q},null,512)]),t("div",me,[t("div",de,[o[8]||(o[8]=t("span",{class:"label"},"分辨率",-1)),n(X,{modelValue:_.value,"onUpdate:modelValue":o[2]||(o[2]=r=>_.value=r),size:"small",onChange:N,style:{width:"120px"}},{default:s(()=>[n(T,{label:"512×512",value:512}),n(T,{label:"768×768",value:768}),n(T,{label:"1024×1024",value:1024})]),_:1},8,["modelValue"])]),t("div",fe,[o[9]||(o[9]=t("span",{class:"label"},"速度",-1)),n(H,{modelValue:F.value,"onUpdate:modelValue":o[3]||(o[3]=r=>F.value=r),min:.1,max:3,step:.1},null,8,["modelValue"])])])])])])}}},ye=K(pe,[["__scopeId","data-v-2da1a499"]]);export{ye as default};
