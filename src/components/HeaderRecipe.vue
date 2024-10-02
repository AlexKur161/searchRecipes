<template>
  <q-toolbar class="text-primary header-mobile">
    <q-toolbar-title>
      <router-link :to="{ name: 'home' }">
        <img class="logo-recipe" src="/img/logo.svg" alt="logo" />
      </router-link>
    </q-toolbar-title>
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
    <q-btn color="white" flat round dense icon="menu">
      <q-menu style="background: #171d2b; width: 200px">
        <q-list style="min-width: 100px">
          <q-item
            v-for="(linkmobile, i) in nav"
            :key="i"
            clickable
            v-close-popup
          >
            <router-link
              class="link-nav-mobile"
              :key="i"
              :to="linkmobile.anchor"
              >{{ $t(linkmobile.name) }}</router-link
            >
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-toolbar>
  <div class="header showel">
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

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useGsapElement } from "src/composable/useGsapElement.js";

const { showEl } = useGsapElement();

const nav = reactive([
  { name: "Search recipe", anchor: "/#search" },
  { name: "Cuisines world", anchor: "/#cuisines" },
  { name: "Contacts", anchor: "/#contacts" },
]);
const { locale } = useI18n();

function switchLang(lang: string) {
  locale.value = lang;
}

const languageActive = computed(() => {
  if (locale.value === "en") {
    return true;
  } else {
    return false;
  }
});

onMounted(() => {
  showEl();
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
.header-mobile {
  display: none;
}
@media (max-width: 1000px) {
  .header-mobile {
    display: flex;
    background: #171d2b;
    position: fixed;
    z-index: 9999;
  }
  .header {
    display: none;
  }
  .logo-recipe {
    width: 100px;
  }
  .i18n-wraper {
    gap: 10px;
    margin-right: 10px;
  }
  .link-nav-mobile {
    text-decoration: none;
    color: #fff;
  }
}
</style>
