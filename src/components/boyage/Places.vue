<template>
  <Place v-for="place in places" :place="place"/>
</template>

<script setup>

import Place from '@/components/boyage/Place.vue'

const places = [{
  name: 'Le pont Dom Louis',
  order: 1
},
  {
    name: 'La Cathédrale Sé',
    order: 2
  }]
</script>
