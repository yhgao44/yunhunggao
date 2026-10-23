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
