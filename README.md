# AstroPaper 📄

AstroPaper 是一个简洁、响应式、易访问且对 SEO 友好的 Astro 博客主题。

## 🔥 功能特性

- [x] 类型安全的 Markdown
- [x] 加载速度快
- [x] 易于访问（支持键盘操作和 VoiceOver）
- [x] 响应式布局，适配手机到桌面设备
- [x] 对 SEO 友好
- [x] 支持浅色和深色模式
- [x] 静态搜索（[Pagefind](https://pagefind.app/)）
- [x] 支持草稿文章和分页
- [x] 自动生成站点地图和 RSS 订阅
- [x] 支持 MDX
- [x] 支持可折叠目录
- [x] 遵循最佳实践
- [x] 高度可定制
- [x] 为博客文章动态生成 OG 图片（[相关文章](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/)）
- [x] 支持国际化

_说明：作者曾在 Mac 上使用 **VoiceOver**、在 Android 上使用 **TalkBack** 测试 AstroPaper 的屏幕阅读器辅助功能。由于无法测试所有屏幕阅读器，其他阅读器上的表现可能有所不同；主题中的辅助功能增强也应能在其他阅读器上正常工作。_

## 🚀 项目结构

AstroPaper 的目录和文件结构如下：

```bash
/
├── public/
│   ├── pagefind/          # auto-generated on build
│   ├── favicon.svg
│   └── default-og.jpg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   ├── content/
│   │   ├── pages/
│   │   │   └── about.md
│   │   └── posts/
│   │       └── 博客文章.md
│   ├── i18n/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── config.ts
│   └── content.config.ts
├── astro-paper.config.ts  # 用户自定义配置
└── astro.config.ts
```

所有博客文章都存放在 `src/content/posts/` 目录中。可以使用子目录整理文章；子目录名称也会成为文章 URL 的一部分。

如果已有 Markdown 或文本草稿，可以运行以下命令创建文章：

```bash
pnpm new-post "文章标题" "草稿文件.md"
```

该命令会创建 Markdown 文章，并自动填写标题、当前发布日期，以及从草稿首个正文段落生成的描述。可以通过第三个可选参数指定相对于 `src/content/posts/` 的输出路径：

```bash
pnpm new-post "文章标题" "草稿文件.md" "个人博客/我的文章"
```

草稿正文会复制到新文章中。该命令不会覆盖已有文章。作者使用站点默认值；`featured`、`draft` 和 `tags` 分别默认为 `false`、`false` 和 `others`。

## 📖 文档

文档提供 Markdown 源文件和博客文章两种形式：

- 配置主题：[Markdown](src/content/posts/how-to-configure-astropaper-theme.md) | [博客文章](https://astro-paper.pages.dev/posts/how-to-configure-astropaper-theme/)
- 添加文章：[Markdown](src/content/posts/adding-new-post.md) | [博客文章](https://astro-paper.pages.dev/posts/adding-new-posts-in-astropaper-theme/)
- 自定义配色方案：[Markdown](src/content/posts/customizing-astropaper-theme-color-schemes.md) | [博客文章](https://astro-paper.pages.dev/posts/customizing-astropaper-theme-color-schemes/)
- 预设配色方案：[Markdown](src/content/posts/predefined-color-schemes.md) | [博客文章](https://astro-paper.pages.dev/posts/predefined-color-schemes/)

## 💻 技术栈

**主要框架** - [Astro](https://astro.build/)  
**类型检查** - [TypeScript](https://www.typescriptlang.org/)  
**样式** - [TailwindCSS](https://tailwindcss.com/)  
**UI/UX 设计** - [Figma 设计文件](https://www.figma.com/community/file/1356898632249991861)  
**静态搜索** - [Pagefind](https://pagefind.app/)  
**图标** - [Tablers](https://tabler-icons.io/)  
**代码格式化** - [Prettier](https://prettier.io/)  
**部署** - [Cloudflare Pages](https://pages.cloudflare.com/)  
**代码检查** - [ESLint](https://eslint.org)  
**动态 OG 图片** - [Satori](https://github.com/vercel/satori) + [Sharp](https://sharp.pixelplumbing.com/) + [Astro Fonts](https://docs.astro.build/en/guides/fonts/)

## 👨🏻‍💻 本地运行

在目标目录中运行以下命令，创建本项目的副本：

```bash
# pnpm
pnpm create astro@latest --template satnaing/astro-paper

# npm
npm create astro@latest -- --template satnaing/astro-paper

# yarn
yarn create astro --template satnaing/astro-paper

# bun
bun create astro@latest -- --template satnaing/astro-paper
```

然后运行以下命令安装依赖并启动项目：

```bash
# 如果上一步尚未安装依赖，请先安装
pnpm install

# 启动开发服务器
pnpm dev
```

## Google 站点验证（可选）

如需添加 [Google 站点验证 HTML 标签](https://support.google.com/webmasters/answer/9008080#meta_tag_verification&zippy=%2Chtml-tag)，可在 `astro-paper.config.ts` 中设置 `site.googleVerification`：

```ts file="astro-paper.config.ts"
export default defineAstroPaperConfig({
  site: {
    // ...
    googleVerification: "你的 Google 站点验证值",
  },
  // ...
});
```

如何将 AstroPaper 添加到 Google Search Console，请参阅[这篇讨论](https://github.com/satnaing/astro-paper/discussions/334#discussioncomment-10139247)。

## 🧞 常用命令

以下命令均需在项目根目录的终端中运行：

| 命令             | 说明                                                                                                           |
| :--------------- | :------------------------------------------------------------------------------------------------------------- |
| `pnpm install`   | 安装项目依赖                                                                                                   |
| `pnpm dev`       | 在 `localhost:4321` 启动本地开发服务器                                                                         |
| `pnpm build`     | 检查类型、构建网站、运行 Pagefind 索引，并将索引复制到 `public/pagefind/`                                      |
| `pnpm preview`   | 部署前在本地预览构建结果                                                                                       |
| `pnpm sync`      | 为 Astro 模块生成 TypeScript 类型。[了解更多](https://docs.astro.build/en/reference/cli-reference/#astro-sync) |
| `pnpm astro ...` | 运行 Astro CLI 命令，例如 `astro add`、`astro check`                                                           |
