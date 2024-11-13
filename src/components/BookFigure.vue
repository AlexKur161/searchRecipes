<template>
  <primitive style="width: 500px" :object="model" />
</template>

<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";

const { nodes } = await useGLTF("/public/scene/book.glb", { draco: true });
console.log(nodes);
const model = nodes.RootNode;
</script>
