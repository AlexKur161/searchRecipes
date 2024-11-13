<template>
  <div style="width: 800px; height: 800px">
    <TresCanvas>
      <TresPerspectiveCamera :position="[0, 0, 0.5]" />
      <OrbitControls />
      <Suspense>
        <Book />
      </Suspense>
      <TresAmbientLight :intensity="1" />
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
import { OrbitControls } from "@tresjs/cientos";
import { TresCanvas } from "@tresjs/core";
import Book from "components/BookFigure.vue";
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from "three";

const gl = {
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  toneMapping: NoToneMapping,
  windowSize: true,
};
</script>

<style scoped></style>
