<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data } = await useFetch(
  `https://swapi.dev/api/people/${route.params.id}`
);
</script>
