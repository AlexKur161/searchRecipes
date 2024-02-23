<template>
  <div>
    <div class="wraper-country row">
      <div
        v-for="(country, i) in countryList"
        :key="i"
        @click="countryActive(country)"
        :class="[country.active ? bgName : false]"
        class="country-tab"
      >
        {{ country.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
const bgName = ref("englang-bg");
const countryList = reactive([
  {
    name: "Englang",
    bg: "englang-bg",
    active: true,
  },
  {
    name: "Japan",
    bg: "japan-bg",
    active: false,
  },
  {
    name: "Italy",
    bg: "italy-bg",
    active: false,
  },
  {
    name: "France",
    bg: "france-bg",
    active: false,
  },
  {
    name: "Mexico",
    bg: "mexico-bg",
    active: false,
  },
]);

function countryActive(country) {
  bgName.value = country.bg;
  countryList.forEach((item) => {
    item.active = false;
  });
  country.active = true;
}

const countryBg = computed(() => {
  return bgName;
});
</script>

<style scoped>
.wraper-country {
  gap: 40px;
  padding-bottom: 40px;
}
.country-tab {
  color: #fff;
  width: 220px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #171d2b;
  border-radius: 30px;
  background-position: -40px -50px;
  background-size: 130%;
  background-repeat: no-repeat;
  cursor: pointer;
  font-size: 18px;
  position: relative;
}
.englang-bg {
  background-image: url("/img/englang.png");
}
.japan-bg {
  background-image: url("/img/japan.png");
}
.italy-bg {
  background-image: url("/img/italy.png");
}
.france-bg {
  background-image: url("/img/france.png");
}
.mexico-bg {
  background-image: url("/img/mexico.png");
}
</style>
