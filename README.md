# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## 自動部署Vue至gh-pafes

根目錄 depoly.sh 裡 git push -f "更換成自己Repository位置" main:gh-pages

Vite.config.js 需加上 base: process.env.NODE_ENV === 'production' ? '/更換成自己的 Repository name/' : './', 

