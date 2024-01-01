<script lang="ts" setup>
const { data: pokemon, error } = await useFetch("/api/ditto");
</script>

<template>
  <h1>Home page</h1>
  <div v-if="pokemon">
    <NuxtImg :src="pokemon.sprites.front_default" />
    <div>{{ pokemon.id }}: {{ pokemon.name }}</div>
  </div>
  <div v-else>
    {{ error }}
  </div>
</template>
