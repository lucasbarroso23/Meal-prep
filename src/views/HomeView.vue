<template>
  <span>
    <HomeHero></HomeHero>
    <HomeDetails></HomeDetails>
    <HomePlans></HomePlans>
  </span>
</template>

<script>
import HomeDetails from '@/components/HomeDetails.vue';
import HomeHero from '@/components/HomeHero.vue';
import HomePlans from '@/components/HomePlans.vue';

export default {
  name: 'HomeView',
  components: { HomeHero, HomeDetails, HomePlans },
};
</script>
