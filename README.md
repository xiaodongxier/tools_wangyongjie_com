# 🎯 前端练习场

> 该项目为自动部署

> 基于 RuoYi-Cloud-Vue3 的前端组件开发练习项目

---

## 📋 项目简介

这是一个用于前端组件开发和测试的练习项目，移除了后端登录依赖，打开即可进入首页开发。

### ✨ 特性

- 🚀 **无登录开发** - 打开即用，无需后端服务
- 📦 **组件示例** - 包含表格、表单、图表、图标等常用示例
- 🎨 **快速原型** - 方便快速开发和测试前端组件
- 🔧 **静态路由** - 灵活添加测试页面

---

## 🛠️ 技术栈

| 技术         | 版本   | 说明                   |
| ------------ | ------ | ---------------------- |
| Vue          | 3.5.x  | 渐进式 JavaScript 框架 |
| Vite         | 6.x    | 下一代前端构建工具     |
| Element Plus | 2.13.x | Vue 3 组件库           |
| Pinia        | 3.x    | Vue 状态管理           |
| Vue Router   | 4.x    | Vue 路由管理           |

---

## 📂 项目结构

```
├── public/             # 静态资源
├── src/                # 源代码
│   ├── views/          # 页面组件
│   │   ├── index.vue   # 首页
│   │   ├── test/       # 测试组件
│   │   └── demo/       # 示例组件
│   ├── components/     # 公共组件
│   ├── layout/         # 布局组件
│   ├── router/         # 路由配置
│   ├── store/          # 状态管理
│   └── assets/         # 资源文件
├── .github/            # GitHub 配置
│   └── workflows/      # CI/CD 工作流
└── package.json        # 项目配置
```

---

## 🚀 快速开始

### 环境要求

- Node.js >= 18.x
- npm >= 9.x

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build:prod
```

---

## 📚 示例页面

### 📊 表格示例 (`/demo/table`)

- 搜索栏、数据表格、分页组件
- 适用于列表页开发

### 📝 表单示例 (`/demo/form`)

- 各种表单元素和验证
- 适用于新增/编辑页面

### 📈 图表示例 (`/demo/chart`)

- 数据卡片、柱状图、进度环
- 适用于数据看板

### 🎨 图标示例 (`/demo/icon`)

- SVG 和 Element Plus 图标展示
- 方便选择图标

---

## 🔧 开发指南

### 添加新页面

1. 在 `src/views/` 下创建组件文件
2. 在 `src/router/index.js` 的 `constantRoutes` 中添加路由配置
3. 刷新浏览器查看效果

### 路由配置示例

```javascript
{
  path: "/my-page",
  component: Layout,
  redirect: "/my-page/index",
  meta: { title: "我的页面", icon: "edit" },
  children: [
    {
      path: "index",
      component: () => import("@/views/my-page/index"),
      name: "MyPage",
      meta: { title: "我的页面", icon: "edit" }
    }
  ]
}
```

---

## 📦 自动部署

项目使用 GitHub Actions 自动部署：

1. 向 `dev` 分支推送代码
2. commit 信息包含 `#部署`
3. 自动构建并推送到目标仓库

### 示例

```bash
git add .
git commit -m "feat: 添加新功能 #部署"
git push origin dev
```

---

## 📖 相关文档

- [Vue 3 文档](https://cn.vuejs.org/)
- [Element Plus 文档](https://element-plus.org/zh-CN/)
- [Vite 文档](https://cn.vitejs.dev/)
- [Pinia 文档](https://pinia.vuejs.org/zh/)

---

## 📄 许可证

[MIT License](LICENSE)

---

## 👤 作者

**xiaodongxier**

- GitHub: [@xiaodongxier](https://github.com/xiaodongxier)

---

> 💡 这个项目主要用于前端组件的开发和测试，欢迎 Star ⭐
