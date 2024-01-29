<template>
  <div class="row">
    <q-input style="max-width: 400px" v-model="filterName" />
    <q-select></q-select>
    <q-select></q-select>
    <q-btn label="Search" />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const filterName = ref("");
</script>

<style scoped></style>
