<template>
  <div>
    <HomePlans></HomePlans>
    <MealRecipes></MealRecipes>
  </div>
</template>
<script>
import HomePlans from '@/components/HomePlans.vue';
import MealRecipes from '@/components/MealRecipes.vue';

export default {
  name: 'Menu',
  components: {
    HomePlans,
    MealRecipes,
  },
};
</script>
<style scoped></style>
