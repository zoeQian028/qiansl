# GitHub Pages 上线说明

这个目录已经整理成可上传到 GitHub Pages 的静态网站目录：

- `index.html`
- `styles.css`
- `script.js`
- `assets/`
- `.nojekyll`

## 直接上传哪个目录

上传整个目录：

`C:\Users\Administrator\Documents\Codex\2026-07-16\build-web-apps-plugin-build-web-2\outputs\qian-shule-portfolio`

## 不要上传什么

不要把下面这个大视频放回站点目录，否则 GitHub 会因为单文件超过 100MB 拒绝推送：

`C:\Users\Administrator\Documents\Codex\2026-07-16\build-web-apps-plugin-build-web-2\work\non-github-assets\video-factory-production.mp4`

## GitHub Pages 设置

1. 新建 GitHub 仓库
2. 把本目录全部文件上传到仓库根目录
3. 打开仓库 `Settings`
4. 打开 `Pages`
5. `Source` 选择 `Deploy from a branch`
6. `Branch` 选择 `main`，目录选择 `/ (root)`
7. 保存后等待几分钟

## 发布后的访问地址

通常会是：

`https://你的用户名.github.io/仓库名/`

## 以后如果要恢复工厂视频

有两种方式：

1. 先把它压缩到 100MB 以下，再放回 `assets/works/`
2. 把视频上传到第三方视频平台，再在网页里放外链
