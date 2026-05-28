import{c as E,an as M,v as g,as as f,ae as L,B as S,y as n,G as e,a$ as o,D as r,aM as c,Q as x,O as N,aN as B,V as R,a9 as D,aJ as y,a0 as j,C as z,N as I,E as p}from"./index-BcxOV3Ek.js";import{g as O}from"./marked.esm-Ch4bKn2a.js";const q={class:"markdown-editor"},A={class:"editor-card"},F={class:"editor-toolbar"},G={class:"toolbar-left"},J={class:"toolbar-right"},P={class:"editor-pane"},Q={class:"pane-header"},U={class:"char-count"},K={class:"preview-pane"},W={class:"pane-header"},X={class:"char-count"},Y=["innerHTML"],Z={class:"tips-card"},h={class:"tips-title"},tt=I({name:"MarkdownEditor"}),et=Object.assign(tt,{setup(at){const s=M(""),b=M(null),C=M(!1),k=g(()=>{if(!s.value)return'<p class="placeholder-text" style="color:#c0c4cc;font-style:italic;">预览将在此显示...</p>';try{return O(s.value)}catch{return'<p style="color:#f56c6c;">Markdown 解析出错</p>'}}),$=g(()=>{const d=document.createElement("div");return d.innerHTML=k.value,d.textContent||""});function i(d,t){const a=document.querySelector(".md-textarea textarea");if(!a)return;const v=a.selectionStart,u=a.selectionEnd,m=s.value.substring(v,u),w=d+(m||"文本")+t;s.value=s.value.substring(0,v)+w+s.value.substring(u),setTimeout(()=>{a.focus();const l=v+d.length+(m?m.length:2);a.setSelectionRange(l,l)},0)}function H(){if(!s.value){p.warning("暂无可复制的内容");return}navigator.clipboard.writeText(s.value).then(()=>p.success("Markdown 已复制")).catch(()=>{const d=document.createElement("textarea");d.value=s.value,document.body.appendChild(d),d.select(),document.execCommand("copy"),document.body.removeChild(d),p.success("Markdown 已复制")})}function T(){if(!s.value){p.warning("暂无可复制的内容");return}navigator.clipboard.writeText(k.value).then(()=>p.success("HTML 已复制")).catch(()=>{const d=document.createElement("textarea");d.value=k.value,document.body.appendChild(d),d.select(),document.execCommand("copy"),document.body.removeChild(d),p.success("HTML 已复制")})}function _(){s.value=""}function V(){s.value=`# Markdown 编辑器示例

## 基本语法

这是一段 **粗体** 文字，这是 *斜体* 文字，这是 ~~删除线~~ 文字。

### 列表

- 无序列表项 1
- 无序列表项 2
- 无序列表项 3

1. 有序列表项 1
2. 有序列表项 2
3. 有序列表项 3

### 引用

> 这是一段引用文字。
> Markdown 让写作变得更加简洁高效。

### 代码

行内代码：\`console.log('Hello')\`

\`\`\`javascript
function hello(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

### 表格

| 功能 | 语法 | 效果 |
| --- | --- | --- |
| 加粗 | **文字** | **粗体** |
| 斜体 | *文字* | *斜体* |
| 删除 | ~~文字~~ | ~~删除~~ |

### 链接与图片

[访问网站](https://example.com)

---

*使用工具栏按钮可快速插入 Markdown 语法*`}return(d,t)=>{const a=f("el-button"),v=f("el-button-group"),u=f("el-divider"),m=f("el-input"),w=f("el-icon");return L(),S("div",q,[t[38]||(t[38]=n("div",{class:"page-header"},[n("div",{class:"header-icon"},"📝"),n("h2",{class:"header-title"},"Markdown 编辑器"),n("p",{class:"header-desc"},"实时预览的 Markdown 编辑器，支持快捷工具栏与全屏编辑")],-1)),n("div",A,[n("div",F,[n("div",G,[e(v,null,{default:o(()=>[e(a,{onClick:t[0]||(t[0]=l=>i("**","**")),title:"加粗"},{default:o(()=>[...t[16]||(t[16]=[n("strong",null,"B",-1)])]),_:1}),e(a,{onClick:t[1]||(t[1]=l=>i("*","*")),title:"斜体"},{default:o(()=>[...t[17]||(t[17]=[n("em",null,"I",-1)])]),_:1}),e(a,{onClick:t[2]||(t[2]=l=>i("~~","~~")),title:"删除线"},{default:o(()=>[...t[18]||(t[18]=[n("s",null,"S",-1)])]),_:1}),e(a,{onClick:t[3]||(t[3]=l=>i("`","`")),title:"行内代码"},{default:o(()=>[...t[19]||(t[19]=[n("code",null,"{ }",-1)])]),_:1})]),_:1}),e(u,{direction:"vertical"}),e(v,null,{default:o(()=>[e(a,{onClick:t[4]||(t[4]=l=>i("# ","")),title:"一级标题"},{default:o(()=>[...t[20]||(t[20]=[r("H1",-1)])]),_:1}),e(a,{onClick:t[5]||(t[5]=l=>i("## ","")),title:"二级标题"},{default:o(()=>[...t[21]||(t[21]=[r("H2",-1)])]),_:1}),e(a,{onClick:t[6]||(t[6]=l=>i("### ","")),title:"三级标题"},{default:o(()=>[...t[22]||(t[22]=[r("H3",-1)])]),_:1})]),_:1}),e(u,{direction:"vertical"}),e(v,null,{default:o(()=>[e(a,{onClick:t[7]||(t[7]=l=>i("- ","")),title:"无序列表"},{default:o(()=>[...t[23]||(t[23]=[r("• 列表",-1)])]),_:1}),e(a,{onClick:t[8]||(t[8]=l=>i("1. ","")),title:"有序列表"},{default:o(()=>[...t[24]||(t[24]=[r("1. 列表",-1)])]),_:1}),e(a,{onClick:t[9]||(t[9]=l=>i("> ","")),title:"引用"},{default:o(()=>[...t[25]||(t[25]=[r("引用",-1)])]),_:1})]),_:1}),e(u,{direction:"vertical"}),e(v,null,{default:o(()=>[e(a,{onClick:t[10]||(t[10]=l=>i("[链接文字](",")")),title:"链接"},{default:o(()=>[...t[26]||(t[26]=[r("🔗",-1)])]),_:1}),e(a,{onClick:t[11]||(t[11]=l=>i("![图片描述](",")")),title:"图片"},{default:o(()=>[...t[27]||(t[27]=[r("🖼️",-1)])]),_:1}),e(a,{onClick:t[12]||(t[12]=l=>i("\n```\n","\n```\n")),title:"代码块"},{default:o(()=>[...t[28]||(t[28]=[r("{ }",-1)])]),_:1}),e(a,{onClick:t[13]||(t[13]=l=>i(`
| 列1 | 列2 | 列3 |
| --- | --- | --- |
| `,` |  |  |
`)),title:"表格"},{default:o(()=>[...t[29]||(t[29]=[r("📊",-1)])]),_:1})]),_:1})]),n("div",J,[e(a,{icon:c(x),onClick:H},{default:o(()=>[...t[30]||(t[30]=[r("复制MD",-1)])]),_:1},8,["icon"]),e(a,{icon:c(x),onClick:T},{default:o(()=>[...t[31]||(t[31]=[r("复制HTML",-1)])]),_:1},8,["icon"]),e(a,{icon:c(N),onClick:_},{default:o(()=>[...t[32]||(t[32]=[r("清空",-1)])]),_:1},8,["icon"]),e(a,{icon:c(B),onClick:V},{default:o(()=>[...t[33]||(t[33]=[r("示例",-1)])]),_:1},8,["icon"]),e(a,{icon:c(R),onClick:t[14]||(t[14]=l=>C.value=!C.value),circle:""},null,8,["icon"])])]),n("div",{class:D(["editor-body",{fullscreen:C.value}])},[n("div",P,[n("div",Q,[t[34]||(t[34]=n("span",{class:"pane-title"},"Markdown 源码",-1)),n("span",U,y(s.value.length)+" 字符",1)]),e(m,{ref_key:"editorRef",ref:b,modelValue:s.value,"onUpdate:modelValue":t[15]||(t[15]=l=>s.value=l),type:"textarea",autosize:{minRows:20,maxRows:60},placeholder:"在此输入 Markdown 内容...",class:"md-textarea"},null,8,["modelValue"])]),n("div",K,[n("div",W,[t[35]||(t[35]=n("span",{class:"pane-title"},"实时预览",-1)),n("span",X,y($.value.length)+" 字符",1)]),n("div",{class:"preview-content",innerHTML:k.value},null,8,Y)])],2)]),n("div",Z,[n("div",h,[e(w,null,{default:o(()=>[e(c(j))]),_:1}),t[36]||(t[36]=n("span",null,"Markdown 语法速查",-1))]),t[37]||(t[37]=z('<div class="tips-grid" data-v-5a0c0699><div class="tip-item" data-v-5a0c0699><code data-v-5a0c0699># 标题</code><span data-v-5a0c0699>一级标题</span></div><div class="tip-item" data-v-5a0c0699><code data-v-5a0c0699>## 标题</code><span data-v-5a0c0699>二级标题</span></div><div class="tip-item" data-v-5a0c0699><code data-v-5a0c0699>**粗体**</code><span data-v-5a0c0699>粗体文字</span></div><div class="tip-item" data-v-5a0c0699><code data-v-5a0c0699>*斜体*</code><span data-v-5a0c0699>斜体文字</span></div><div class="tip-item" data-v-5a0c0699><code data-v-5a0c0699>~~删除~~</code><span data-v-5a0c0699>删除线</span></div><div class="tip-item" data-v-5a0c0699><code data-v-5a0c0699>`代码`</code><span data-v-5a0c0699>行内代码</span></div><div class="tip-item" data-v-5a0c0699><code data-v-5a0c0699>- 列表</code><span data-v-5a0c0699>无序列表</span></div><div class="tip-item" data-v-5a0c0699><code data-v-5a0c0699>1. 列表</code><span data-v-5a0c0699>有序列表</span></div><div class="tip-item" data-v-5a0c0699><code data-v-5a0c0699>&gt; 引用</code><span data-v-5a0c0699>引用块</span></div><div class="tip-item" data-v-5a0c0699><code data-v-5a0c0699>[文本](url)</code><span data-v-5a0c0699>超链接</span></div><div class="tip-item" data-v-5a0c0699><code data-v-5a0c0699>![alt](url)</code><span data-v-5a0c0699>图片</span></div><div class="tip-item" data-v-5a0c0699><code data-v-5a0c0699>---</code><span data-v-5a0c0699>分隔线</span></div></div>',1))])])}}}),lt=E(et,[["__scopeId","data-v-5a0c0699"]]);export{lt as default};
