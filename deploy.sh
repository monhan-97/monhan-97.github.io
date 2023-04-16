#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn  run build

# 进入生成的文件夹
cd build

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy website'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:messiahhh/messiahhh.github.io.git master


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:messiahhh/blog.git master:gh-pages
git push -f https://github.com/monhan-97/monhan-97.github.io.git master:gh-pages

cd -

