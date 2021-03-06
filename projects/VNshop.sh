#!/bin/bash
 
WEB_PATH='/home/wwwroot/deploy/'
WEB_PATH_CLIENT='/home/wwwroot/deploy/client'
WEB_USER='www'
WEB_USERGROUP='www'
# we can do 
echo "Start deployment omgwhatstaht.com"
cd $WEB_PATH
echo "pulling source code..."
# git reset --hard origin/release
# git clean -f
# 把项目拉取到最新
git pull
git checkout master
echo "changing permissions..."
# 切换到client里面
cd $WEB_PATH_CLIENT
# 把vue项目编译
npm run build
chown -R $WEB_USER:$WEB_USERGROUP $WEB_PATH_CLIENT
echo "Finished."
