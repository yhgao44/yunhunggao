# Yun-Hung (Victor) Gao · 个人学术网站

这是根据你的 CV 制作的英文个人主页，参考 [leo-li.com](https://leo-li.com/) 的学术主页结构。采用独立编写的 HTML、CSS 和 JavaScript，包含个人介绍、电脑端并排的教育背景与博士后经历（手机端博士后经历在前）、研究亮点、Chip Gallery、论文、专利、专业经历、荣誉和教学服务。

**不需要安装 Node.js、Hugo、数据库或网站主题。解压后双击 `index.html` 即可在浏览器预览。** 网站文件已准备好，但尚未上传到 GitHub，也尚未上线。

## 通过网址访问，但不进入搜索结果

当前首页已加入：

```html
<meta name="robots" content="noindex, nofollow">
```

部署最新版后，访客仍可点击你分享的链接，或在浏览器地址栏直接输入完整网址访问。支持这些规则的搜索引擎会被要求不收录首页，并且不通过首页追踪链接。`noindex` 不是密码保护，也不限制知道网址的访客访问或转发。

- 上传最新版 `index.html` 到网站发布分支，等待 GitHub Pages 部署完成；本地修改本身不会影响线上版本。
- 不要再添加 `robots.txt` 的 `Disallow: /`；这会阻止爬虫读取首页的 `noindex`，导致网址仍可能出现在搜索结果中。
- 如果页面之前已被收录，要等搜索引擎重新抓取；如需加快 Google 移除，可在验证站点所有权后使用 Google Search Console 的移除工具，并保留 `noindex`。
- 该标签仅作用于这个 HTML 页面，不会让 GitHub 的公开仓库变私密，也不能单独控制 CV PDF 的收录。PDF 等独立资源需要在托管层设置 `X-Robots-Tag: noindex`，或使用真正的访问控制。`nofollow` 不能保证这些文件不会通过其他链接被发现。
- 各搜索引擎对规则的支持可能不同，因此不能保证任何公开内容永远都无法被搜索到。若需要真正保密，应采用登录或密码访问。

依据：[Google noindex 文档](https://developers.google.com/search/docs/crawling-indexing/block-indexing)、[Google robots 标签与 PDF 响应头说明](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)。GitHub Pages 的私密项目站点访问控制需要组织使用 GitHub Enterprise Cloud，不能将个人站点仓库改为 Private 就视为已经给网站加密；见 [GitHub 访问控制说明](https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)。

## 你截图里的 Import 页面应该怎么处理？

点击 **Cancel**，转到 [新建 GitHub 仓库](https://github.com/new)。

截图中的 **The URL for your source repository** 是“已有远程 Git 仓库地址”，不是网站展示地址。`https://leo-li.com` 是网页，不能填到这个字段里。GitHub Importer 用来迁移现有仓库的代码和提交历史；当前这套网站在你的电脑中，适合直接上传文件。[GitHub Importer 官方说明](https://docs.github.com/en/migrations/importing-source-code/using-github-importer/importing-a-repository-with-github-importer)

## 方法一：用网页上传（推荐）

### 1. 新建仓库

打开 [github.com/new](https://github.com/new)，按截图里的账号填写：

| 字段 | 填写内容 |
| --- | --- |
| Owner | `yhgao44` |
| Repository name | `yhgao44.github.io` |
| Description | `Personal academic website of Yun-Hung (Victor) Gao` |
| Visibility | `Public` |
| Add README | 开启，方便下一步看到 Add file 菜单 |
| Add .gitignore | No .gitignore |
| License | 暂时不选 |

点击 **Create repository**。如果这个仓库已经存在，打开已有仓库先检查内容；不要删除或覆盖已有网站。

这里的用户名来自你的截图。如果实际使用另一个账号，仓库名需要对应改成 `你的用户名.github.io`。

### 2. 上传网站文件

1. 在电脑上解压 `yhgao44-website.zip`，进入解压后的文件夹。
2. 在新仓库页面点击 **Add file → Upload files**。
3. 把文件夹**里面的文件和 assets 文件夹**拖进去，不要把整个外层文件夹或 ZIP 文件拖进去。需要上传：

   ```text
   index.html
   styles.css
   script.js
   .nojekyll
   assets/
     favicon.svg
     profile.jpg
     cv_yunhung_gao.pdf
     logos/      # 三所学校的官方徽标
     fonts/      # 本地 Roboto / Montserrat 字体与许可证
     chips/      # 芯片照片与来源记录
   ```

   `README.md` 和 `.gitignore` 也可以一起上传；它们用于说明和维护，不影响主页显示。

4. macOS 默认不显示 `.nojekyll`，在 Finder 中按 **Command + Shift + .** 显示隐藏文件。如果浏览器不接受该隐藏文件，可以稍后选择 **Add file → Create new file**，文件名填 `.nojekyll`，内容填一个空格后提交。
5. 提交说明填写 `Add personal academic website`，选择提交到 `main`，点击 **Commit changes**。如果你的仓库要求通过分支或 PR 提交，按仓库要求合并到 `main` 后继续。
6. 在仓库首页检查：应该直接看到 `index.html`，以及 `assets` 文件夹。点进 `assets` 应能看到 PDF 和图标。

**正确：** `仓库根目录/index.html`。**错误：** `仓库根目录/yhgao44-website/index.html`。

文件上传操作参考：[GitHub 上传文件说明](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)。

### 3. 开启 GitHub Pages

进入仓库的 **Settings → Pages**，在 **Build and deployment** 区域设置：

| 设置 | 选项 |
| --- | --- |
| Source | `Deploy from a branch` |
| Branch | `main` |
| Folder | `/ (root)` |

点击 **Save**。这是无需构建的静态网站，直接发布仓库根目录即可。[GitHub Pages 发布设置说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

### 4. 查看发布结果

在仓库 **Actions** 中等待 Pages 的构建与部署完成，或回到 **Settings → Pages** 查看发布状态。成功后，网站地址应为：

**[https://yhgao44.github.io/](https://yhgao44.github.io/)**

这个地址是按你的账号和建议仓库名推导的目标地址，并不代表目前已上线。首次部署需要等待 GitHub 完成工作流。

网站会公开展示页面内容和下载用的原始 CV。原始 CV 含电话号码及推荐人的邮箱；如需使用精简的公开版，请在上传前用同名 PDF 替换 `assets/cv_yunhung_gao.pdf`。

## 方法二：使用 Git 命令上传

适合已经会使用 Git 的情况。与方法一二选一，不要在两套流程中来回操作。

先在 GitHub 新建**空的** `yhgao44.github.io` 仓库，此方法不勾选 README。然后在终端执行：

```bash
cd "/Users/admin/Desktop/个人网站搭建和维护"
git status
git add index.html styles.css script.js assets README.md .nojekyll .gitignore
git commit -m "Create personal academic website"
git remote add origin https://github.com/yhgao44/yhgao44.github.io.git
git push -u origin main
```

当前本地文件夹已经是 Git 仓库，分支为 `main`，无需重新 `git init`。没有替你创建提交或设置远程地址。若之后配置发生变化，先用 `git remote -v` 和 `git branch --show-current` 检查，不要重复添加 `origin` 或强制推送。

若 Git 提示需要身份信息，请按提示设置自己的提交姓名和邮箱。推送时使用 GitHub 支持的身份验证方式；也可以用 GitHub Desktop 完成登录和推送。不要把访问令牌写进网站文件。

推送成功后，继续执行上面的“开启 GitHub Pages”步骤。如果远程仓库已存在提交，请优先采用网页上传，或先克隆远程仓库，再把本站文件复制到克隆目录后提交；不要强制覆盖历史。

## 以后怎么维护？

| 想修改的内容 | 修改位置 |
| --- | --- |
| 简介、职位、教育背景 | `index.html` 的 `id="about"` 区域 |
| 研究指标和亮点 | `index.html` 的 `id="research"` 区域 |
| 论文 | `index.html` 的 `id="publications"` 区域 |
| 经历、获奖、教学 | `index.html` 对应的 `experience`、`honors`、`service` 区域 |
| 颜色、字体、间距 | `styles.css`；颜色变量在最上方 |
| 导航、论文筛选、主题切换 | `script.js` |
| CV 下载 | 用新的同名 PDF 替换 `assets/cv_yunhung_gao.pdf` |
| 网站图标 | `assets/favicon.svg` |
| 头像 | `assets/profile.jpg` |
| 学校徽标 | `assets/logos/` |
| Chip Gallery | `index.html` 的 `id="chip-gallery"` 区域与 `assets/chips/` |
| 正文与标题字体 | `assets/fonts/` 中的 Roboto / Montserrat |
| 更新日期 | `index.html` 底部的 `Last updated` |

修改后重新上传对应文件并提交，Pages 会按已设置的发布分支更新。不要上传截图、ZIP 或 `output` 文件夹。

### 更换头像

当前已使用你最后选定的 IMG_6583.JPG。头像在桌面上显示为 190 像素，在较窄屏幕上为 170–180 像素。用新的同名图片替换 `assets/profile.jpg` 即可；如扩展名改变，同时修改 `index.html` 中 `.profile-photo` 的 `src`。照片原始像素未被修饰，圆形显示与头肩取景由 CSS 的 `.profile-photo-frame` 和 `.profile-photo-frame .profile-photo` 控制。头像源文件保留原始分辨率。

### 联系方式和个人主页

头像下方展示 Email、LinkedIn 和 Google Scholar 标签，链接在 `index.html` 的 `.social-links` 中修改。

- Email：`yhgao44@link.cuhk.edu.hk`
- LinkedIn：[公开个人主页](https://www.linkedin.com/in/gaoyunhung/)
- Google Scholar：[英文个人主页](https://scholar.google.com/citations?hl=en&user=_p2fTX4AAAAJ&view_op=list_works&sortby=pubdate)，`hl=en` 指定英文界面。

### Chip Gallery 与字体

Chip Gallery 展示六项工作，电脑端每行三张，手机端单列。TVLSI 和 Sensors Journal 使用转换器核心电路的局部放大图，缩略图与点击放大均不显示完整芯片；SVG 取景保留论文原始像素与标注。每个图可点击放大，按 Esc 或右上角关闭；每张图片还链接到相应论文。字体使用与 leo-li.com 相同的 Roboto 正文与 Montserrat 标题，并随网站本地托管，避免依赖外部字体服务。开源字体许可保留在 `assets/fonts/`。

| 对应工作 | 芯片图来源 | 网站资源 |
| --- | --- | --- |
| NS-SAR LDC · TCAS-I 2026 | 提供的 PDF 第 10 页，Fig. 17 | `assets/chips/ns-die.png` |
| Reconfigurable current-sensing front-end · CICC 2026 | 提供的 PDF 第 3 页，Fig. 4 的芯片部分 | `assets/chips/cicc-die.png` |
| CI-SAR LDC · TCAS-I 2025 | 提供的 PDF 第 9 页，Fig. 10 | `assets/chips/sar-die.png` |
| BP NS-SAR LDC · TVLSI 2026 | 提供的 PDF 第 4 页，Fig. 9(a) 核心电路 | `assets/chips/bp-core.svg` |
| BLS-aware LDC · IEEE Sensors Journal | 提供的 PDF 第 7 页，Fig. 11 核心电路 | `assets/chips/bls-core.svg` |
| Pipelined-SAR CDC · ISSCC 2023 | [北京大学集成电路学院研究新闻](https://ic.pku.edu.cn/kxyj/kydt/bca8289fd1dc46e294e6d0f4a5195dae.htm)中的对应芯片图 | `assets/chips/isscc-figure.png` |

前五张为论文原图局部渲染或核心电路取景，保留原有文字与电路标注；没有生成或重绘芯片。ISSCC 图保存完整官网原图，由 CSS 仅显示芯片区域。合成实现的加速器工作不配流片照片。没有把新提供的论文 PDF 整份加入上传包。图片来源及图号见 `assets/chips/sources.json`，学校徽标的来源记录见 `assets/logos/sources.json`。

论文和 Working Papers 标题使用每个单词首字母大写的形式，同时保留 SAR、PPG、SNDR 等缩写和 dB、μW、kT/C 等技术记号的正确大小写。

### 添加一篇论文

复制一个 `<article class="publication">...</article>`，修改标题、作者、年份、刊物和链接。每篇论文的 `id` 必须唯一。期刊设置 `data-type="journal"`，会议设置 `data-type="conference"`；同时更新工具栏的数量和年份范围。JavaScript 会根据实际条目计算筛选后的数量。

目前标为 **Find paper** 的链接是按论文题名生成的 Google Scholar 检索链接，不是 PDF 下载或已验证的论文主页。CV 中只提供了一条 DOI，已经直接使用。你提供其他 DOI、IEEE Xplore 链接或可公开的论文 PDF 后，可以逐条替换；不要把检索链接误标为 PDF。

### 内容核对记录

- 网站正文依据所提供的 CV；参考站只用于布局灵感，没有复制其个人资料、照片或源码。
- Education 各学位对应院系按 CV 标注：博士为 Department of Electronic Engineering；B.E. 为 School of Electronic Engineering and Computer Science；B.M. 为 Guanghua School of Management。
- 日期基准为 2026 年 10 月：UT Austin 明确写为 2026 年 12 月即将开始的职位，首页统一介绍为 Incoming Postdoctoral Fellow，并使用完整院系名称 Chandra Family Department of Electrical and Computer Engineering, The University of Texas at Austin；Research Assistant 仅保留在 Professional Experience。
- IEEE Sensors Journal 在论文列表里标为 Accepted，八位作者已按提供的论文首页补齐。四篇 Working Papers 单独列出：三篇 In preparation，WBAP 为 Submitted to JETCAS；目标期刊均不作为已发表刊物。
- 按你的最新要求，2025 年 TCAS-I 论文标注 **2025 EE Department Research Excellence Award**，学校使用全称 The Chinese University of Hong Kong；Honors 区域的 2026 年 Postgraduate Student Research Excellence Award 仍按 CV 首页保留。
- ISSCC 论文为 2023 年，Distinguished-Technical Paper Award 标签按 CV 的获奖年份标为 2024；TCAS-I 标签显示为 Highlighted Paper · August 2026。三个论文奖项使用单独的加大、高对比标签。
- 头像采用最后提供的 IMG_6583.JPG，UT Austin 校徽采用提供的 University_of_Texas_at_Austin_Logo_full_og.png。香港中文大学名称统一使用 The Chinese University of Hong Kong。姓名显示为 Yun-Hung (Victor) Gao，标志为 V.G.。出生信息、博士毕业年龄及组内最年轻毕业生表述按你的最新要求加入。GitHub 用户名采用截图中的 `yhgao44`。

## 常见问题

**网站 404：** 先看 Actions 是否部署成功，确认仓库名是 `yhgao44.github.io`、发布源是 `main` 和 `/ (root)`、`index.html` 位于仓库根目录。文件名大小写需要一致。[GitHub 404 排查说明](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

**页面只有文字、没有样式：** 确认 `styles.css` 与 `index.html` 在同一层；上传时保留 `assets` 文件夹结构。

**CV 打不开：** 确认路径是 `assets/cv_yunhung_gao.pdf`，文件名大小写与 HTML 一致。

**找不到 main 分支：** 先提交文件，确认仓库中已经有 `main` 分支，再回 Pages 设置。

**想使用其他仓库名：** 例如 `personal-website`，发布后的地址一般为 `https://yhgao44.github.io/personal-website/`。本网站使用相对资源路径，也可以在这种项目路径下工作。

**想绑定自己的域名：** 先让 GitHub Pages 默认地址正常工作，之后再在 Pages 的 Custom domain 和域名服务商的 DNS 中配置。当前文件没有写入任何自定义域名。
