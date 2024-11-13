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
        {{ $t(country.name) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useCountryRecipe } from "src/stores/countryRecipe.ts";

const store = useCountryRecipe();

const bgName = ref<string>("englang-bg");

type Tab = {
  name: string;
  bg: string;
  field: string;
  active: boolean;
};

const countryList = reactive([
  {
    name: "Englang",
    bg: "englang-bg",
    field: "british",
    active: true,
  },
  {
    name: "Japan",
    bg: "japan-bg",
    field: "japanese",
    active: false,
  },
  {
    name: "Italy",
    bg: "italy-bg",
    field: "italian",
    active: false,
  },
  {
    name: "France",
    bg: "france-bg",
    field: "french",
    active: false,
  },
  {
    name: "Mexico",
    bg: "mexico-bg",
    field: "mexican",
    active: false,
  },
]);

function countryActive(country: Tab) {
  bgName.value = country.bg;
  countryList.forEach((item) => {
    item.active = false;
  });
  country.active = true;
  store.countryAction(country.field);
}
</script>

<style scoped>
.wraper-country {
  gap: 40px;
  padding: 60px 0;
  justify-content: space-between;
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
  transition: 0.5s;
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
@media (max-width: 1200px) {
  .country-tab {
    width: 160px;
  }
}

@media (max-width: 999px) {
  .country-tab {
    width: 120px;
    font-size: 14px;
    background-position: -20px -30px;
  }
  .wraper-country {
    gap: 10px;
  }
}
@media (max-width: 660px) {
  .country-tab {
    min-width: 120px;
    background-position: -20px -25px;
  }
  .wraper-country {
    flex-wrap: nowrap;
    overflow-x: scroll;
    padding: 20px 0;
  }
  .wraper-country::-webkit-scrollbar {
    width: 0;
  }
}
</style>
