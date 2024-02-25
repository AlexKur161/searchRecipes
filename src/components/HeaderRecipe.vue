<template>
  <div class="header">
    <div class="container">
      <div class="header-wraper">
        <div class="logo-wraper"></div>
        <div class="nav-wraper">
          <router-link v-for="(link, i) in nav" :key="i" :to="link.anchor">{{
            $t(link.name)
          }}</router-link>
        </div>
        <div class="i18n-wraper">
          <p @click="switchLang('en')" class="switch-lang">EN</p>
          <p @click="switchLang('ru')" class="switch-lang">RU</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useI18n } from "vue-i18n";
const nav = reactive([
  { name: "Search recipe", anchor: "#search" },
  { name: "Cuisines world", anchor: "#search" },
  { name: "Contacts", anchor: "#search" },
]);
const { locale } = useI18n();

function switchLang(lang) {
  locale.value = lang;
}
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
}
</style>
