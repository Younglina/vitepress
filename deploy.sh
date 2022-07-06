#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run build

# 进入生成的文件夹
cd docs/.vitepress/dist


git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Younglina/vitepress.git master:gh-pages

cd -
