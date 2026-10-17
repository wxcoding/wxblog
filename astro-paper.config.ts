import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://guanwx.me/",
    title: "Guanwx",
    description: "一个极简、响应式且 SEO 友好的 Astro 博客。",
    author: "guanwx",
    profile: "https://satna.ing",
    ogImage: "default-og.jpg",
    lang: "zh",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    // Disable dynamic OG images in CI/deploy environments that cannot fetch Google Fonts.
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/wxcoding/wxblog/edit/master/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/wxcoding" },
    { name: "wechat", url: "", linkTitle: "微信扫码加好友" },
    { name: "mail",   url: "mailto:1771353908@qq.com" },
    { name: "weibo",  url: "https://weibo.com/", linkTitle: "微博" },
    { name: "qq",     url: "https://im.qq.com/", linkTitle: "QQ" },
    // { name: "x",        url: "https://x.com/username" },
    // { name: "linkedin", url: "https://www.linkedin.com/in/username/" },
  ],
  shareLinks: [
    { name: "copy",   url: "", linkTitle: "复制链接" },
    { name: "qqzone", url: "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=", linkTitle: "分享到 QQ 空间" },
    { name: "weibo",  url: "https://service.weibo.com/share/share.php?url=", linkTitle: "分享到微博" },
    { name: "mail",   url: "mailto:?subject=分享文章&body=", linkTitle: "通过邮件分享这篇文章" },
    { name: "wechat", url: "", linkTitle: "微信扫码分享" },
  ],
});