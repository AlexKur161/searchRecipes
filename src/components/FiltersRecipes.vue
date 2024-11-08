<template>
  <div class="filter-wrap row">
    <q-input
      rounded
      class="select-filter"
      color="teal-8"
      bg-color="white"
      style="max-width: 400px"
      v-model="filterName"
      :label="$t('The name of the recipe')"
    />
    <q-select
      class="select-filter"
      color="teal-8"
      v-model="selectedDiet"
      :options="diet"
      emit-value
      map-options
      bg-color="white"
      :label="$t('Diet Labels')"
      transition-show="scale"
      transition-hide="scale"
    ></q-select>
    <q-select
      class="select-filter"
      color="teal-8"
      v-model="selectedMeal"
      :options="mealTypes"
      emit-value
      map-options
      bg-color="white"
      :label="$t('Meal time')"
      transition-show="scale"
      transition-hide="scale"
    ></q-select>
    <q-select
      class="select-filter"
      color="teal-8"
      v-model="selectedHealth"
      :options="healthLabels"
      emit-value
      map-options
      bg-color="white"
      :label="$t('Health')"
      transition-show="scale"
      transition-hide="scale"
    ></q-select>
    <q-btn
      class="settings-icon"
      dense
      round
      size="20px"
      flat
      icon="tune"
      color="teal-8"
    />
    <q-btn
      class="search-btn"
      color="teal-8"
      @click="searchRecipe"
      :label="$t('Search')"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref, computed } from "vue";
import { useSearchRecipe } from "src/stores/search.ts";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const filterName: Ref<string> = ref("");
const store = useSearchRecipe();
const selectedDiet: Ref<string> = ref("");
const selectedMeal: Ref<string> = ref("");
const selectedHealth: Ref<string> = ref("");

type Filter = {
  label: string;
  value: string;
};
const diet = computed((): Filter[] => {
  return [
    {
      label: t("Balanced"),
      value: "&diet=balanced",
    },
    {
      label: t("High-Fiber"),
      value: "&diet=high-fiber",
    },
    {
      label: t("High-Protein"),
      value: "&diet=high-protein",
    },
    {
      label: t("Low-Carb"),
      value: "&diet=low-carb",
    },
    {
      label: t("Low-Fat"),
      value: "&diet=low-fat",
    },
    {
      label: t("Low-Sodium"),
      value: "&diet=low-sodium",
    },
  ];
});

const mealTypes = computed((): Filter[] => {
  return [
    {
      label: t("Breakfast"),
      value: "&mealType=breakfast",
    },
    {
      label: t("Brunch"),
      value: "&mealType=brunch",
    },
    {
      label: t("Dinner"),
      value: "&mealType=Dinner",
    },
    {
      label: t("Snack"),
      value: "&mealType=snack",
    },
    {
      label: t("Teatime"),
      value: "&mealType=teatime",
    },
  ];
});
const healthLabels = computed((): Filter[] => {
  return [
    {
      label: t("Alcohol-Cocktail"),
      value: "&health=alcohol-cocktail",
    },
    {
      label: t("Alcohol-Free"),
      value: "&health=alcohol-free",
    },
    {
      label: t("Celery-Free"),
      value: "&health=celery-free",
    },
    {
      label: t("Crustcean-Free"),
      value: "&health=crustacean-free",
    },
    {
      label: t("Dairy-Free"),
      value: "&health=dairy-free",
    },
    {
      label: t("Egg-Free"),
      value: "&health=egg-free",
    },
    {
      label: t("Fish-Free"),
      value: "&health=fish-free",
    },
    {
      label: t("Immuno-Supportive"),
      value: "&health=immuno-supportive",
    },
    {
      label: t("No oil added"),
      value: "&health=no-oil-added",
    },
    {
      label: t("Vegetarian"),
      value: "&health=vegetarian",
    },
  ];
});

const filterNameLink = computed((): string => {
  if (filterName.value !== "") {
    return "&q=" + filterName.value;
  } else {
    return "";
  }
});
function searchRecipe() {
  store.searchAction(
    filterNameLink.value,
    selectedDiet.value,
    selectedHealth.value,
    selectedMeal.value
  );
}
</script>

<style scoped>
.filter-wrap {
  gap: 30px;
  justify-content: space-between;
  padding: 60px 0;
}
.select-filter {
  width: 225px;
}
@media (max-width: 1200px) {
  .filter-wrap {
    justify-content: flex-start;
  }
  .settings-icon {
    display: none;
  }
}
@media (max-width: 600px) {
  .filter-wrap {
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
  }
  .search-btn {
    width: 225px;
  }
}
</style>
