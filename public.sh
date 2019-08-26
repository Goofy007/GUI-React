#!/bin/env bash

git checkout gh-pages
rm rf ./index.js
mv dist/index.js ./
git commit .
git add .
git push
# git push --set-upstream xdq gh-pages
git checkout master