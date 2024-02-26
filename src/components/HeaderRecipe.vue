<template>
  <div class="header">
    <div class="container">
      <div class="header-wraper row justify-between">
        <div class="logo-wraper">
          <router-link :to="{ name: 'home' }">
            <img class="logo-recipe" src="/img/logo.svg" alt="logo" />
          </router-link>
        </div>
        <div class="nav-wraper row justify-between">
          <router-link
            class="link-nav"
            v-for="(link, i) in nav"
            :key="i"
            :to="link.anchor"
            >{{ $t(link.name) }}</router-link
          >
        </div>
        <div class="i18n-wraper row">
          <p
            @click="switchLang('en')"
            :class="{ active: languageActive }"
            class="switch-lang"
          >
            EN
          </p>
          <p
            @click="switchLang('ru')"
            :class="{ active: !languageActive }"
            class="switch-lang"
          >
            RU
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useI18n } from "vue-i18n";
const nav = reactive([
  { name: "Search recipe", anchor: "#search" },
  { name: "Cuisines world", anchor: "#cuisines" },
  { name: "Contacts", anchor: "#contacts" },
]);
const { locale } = useI18n();

function switchLang(lang) {
  locale.value = lang;
}

const languageActive = computed(() => {
  if (locale.value === "en") {
    return true;
  } else {
    return false;
  }
});
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  background: #11151e;
  z-index: 99999;
}
.header-wraper {
  height: 80px;
  align-items: center;
  background: #11151e;
}
.nav-wraper {
  max-width: 400px;
  gap: 40px;
}
.link-nav {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
}
.link-nav:hover {
  color: #00796b;
  transition: 0.5s;
}
.logo-recipe {
  width: 150px;
  padding-top: 5px;
}
.i18n-wraper {
  width: 150px;
  gap: 20px;
  justify-content: end;
  align-items: center;
}
.switch-lang {
  cursor: pointer;
  margin: 0;
  color: #fff;
}
.switch-lang:hover {
  color: #00796b;
  transition: 0.5s;
}
.switch-lang.active {
  color: #00796b;
}
</style>
