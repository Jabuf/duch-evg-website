<template>
  <div @click="switchSide">
    <div class="relative px-4 py-5">
      <div class="flex items-center">
        <h3>
          {{ player.name }}
        </h3>
      </div>
    </div>
    <div v-if="state.recto">
      <div>
        <img :alt="player.name" :src="`/team/${player.name}.jpg`">
      </div>
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
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ player.age }}
            </dd>
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="flex items-center text-sm font-medium text-gray-500">
              <UIcon :path="mdiLock"/>
              Poids
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ player.poids }}
            </dd>
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="flex items-center text-sm font-medium text-gray-500">
              <UIcon :path="mdiLock"/>
              Taille
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ player.taille }}
            </dd>
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="flex items-center text-sm font-medium text-gray-500">
              <UIcon :path="mdiLock"/>
              Poste
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ player.poste }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div v-else>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt class="flex items-center text-sm font-medium text-gray-500">
          <UIcon :path="mdiLock"/>
          Palmarès
        </dt>
        <ul role="list">
          <li v-for="titre in player.palmares" class="flex items-center justify-between text-sm">
            <div class="flex-1 flex items-center pb-2">
              <span class="flex-1 truncate">- {{ titre }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt class="flex items-center text-sm font-medium text-gray-500">
          <UIcon :path="mdiLock"/>
          Talent
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> {{ player.talent }}
        </dd>
      </div>
    </div>
  </div>
</template>

<script setup>
import {mdiLock} from '@mdi/js'
import UIcon from '@/components/basic/UIcon.vue'
import {reactive} from 'vue'

const state = reactive({recto: true})

const props = defineProps({
  player: {
    type: Object,
    required: true
  }
})

function switchSide() {
  state.recto = !state.recto
}
</script>
