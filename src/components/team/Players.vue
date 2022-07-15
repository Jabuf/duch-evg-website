<template>
  <div class=" py-5">
    <ul class="u-grid" role="list">
      <li v-for="player in players" :key="player.name"
          class="u-grid space-y-5 sm:space-x-5">
        <CardPlayer :player="player"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
import CardPlayer from '@/components/team/CardPlayer.vue'

const players = [{
  name: 'duche'
},
  {
    name: 'lolo'
  }]
</script>
