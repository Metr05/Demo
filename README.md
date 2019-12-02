> 本项目是基于React、MATERIAL-UI、Antd的二次开发。
# Quanzism Web前端

## `Dependence`
>星号为必须

国内使用 npm 速度很慢，你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:
```angular2
npm install -g cnpm --registry=https://registry.npm.taobao.org
npm config set registry https://registry.npm.taobao.org
```
这样就可以使用 cnpm 命令来安装模块了：
```
cnpm install [name]
```
使用 create-react-app 快速构建 React 开发环境
```angular2
cnpm install -g create-react-app
create-react-app my-app
cd my-app/
npm start
```
*安装 Material-UI 并写入 package.json 依赖文件
```
// with npm
npm install @material-ui/core
```
*安装Antd
```angular2
npm install antd --save
```
## `Deploy`
```
git clone http://git.hotdog64.com:3000/metr05/Quanzism-React.git
cd Quanzism-React
npm run build /*编译文件*/
npm start /*启动服务*/
```
> 默认运行在3000端口
---
## `package.json`
```
{
  "name": "quanzism",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^4.7.1",
    "@material-ui/icons": "^4.5.1",
    "antd": "^3.26.0",
    "markdown-to-jsx": "^6.10.3",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-markdown": "^4.2.2",
    "react-scripts": "3.2.0",
    "react-syntax-highlighter": "^11.0.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```