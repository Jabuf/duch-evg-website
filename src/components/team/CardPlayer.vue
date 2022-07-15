<template>
  <div class="relative px-4 py-5">
    <div class="flex items-center">
      <h3>
        {{ player.name }}
      </h3>
    </div>
  </div>
  <div><img :alt="player.name" :src="`/team/${player.name}.jpg`"></div>
  <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
    <dl class="sm:divide-y sm:divide-gray-200">
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt class="flex items-center text-sm font-medium text-gray-500">
          <UIcon :path="mdiLock"/>
          Nom
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ player.name }}
        </dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt class="flex items-center text-sm font-medium text-gray-500">
          <UIcon :path="mdiLock"/>
          Âge
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ player.name }}
        </dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt class="flex items-center text-sm font-medium text-gray-500">
          <UIcon :path="mdiLock"/>
          Poids
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ player.name }}
        </dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt class="flex items-center text-sm font-medium text-gray-500">
          <UIcon :path="mdiLock"/>
          Taille
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ player.name }}
        </dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt class="flex items-center text-sm font-medium text-gray-500">
          <UIcon :path="mdiLock"/>
          Poste
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ player.name }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import {mdiLock} from '@mdi/js'
import UIcon from '@/components/basic/UIcon.vue'

const props = defineProps({
  player: {
    type: Object,
    required: true
  }
})
</script>
