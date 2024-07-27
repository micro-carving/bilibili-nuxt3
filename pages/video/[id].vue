<template>
  <div>
    <h2>{{ $route.params.id }}</h2>
  </div>
</template>

<script lang="ts" setup>
const { params } = useRoute();

console.log("动态路由id", params.id);
</script>

<style></style>
