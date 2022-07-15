<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" aria-hidden="true" class="block h-6 w-6"/>
            <XIcon v-else aria-hidden="true" class="block h-6 w-6"/>
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <a href="./">
              <img alt="Workflow" class="block lg:hidden h-8 w-auto"
                   src="/logo.png"/>
              <img alt="Workflow"
                   class="hidden lg:block h-8 w-auto" src="/logo.png"/>
            </a>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :aria-current="item.current ? 'page' : undefined"
                 :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
                 :href="item.href"
                 @click="setCurrent(item.href)">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden bg-white">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton v-for="item in navigation" :key="item.name" :aria-current="item.current ? 'page' : undefined"
                          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
                          :href="item.href"
                          as="a"
                          @click="setCurrent(item.href)">{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue'
import {MenuIcon, XIcon} from '@heroicons/vue/outline'

const navigation = [
  {name: 'Accueil', href: '/', current: true},
  {name: 'Photos', href: '/photos', current: false},
  {name: 'Boyage', href: '/boyage', current: false},
  {name: 'L\'équipe', href: '/equipe', current: false}
]

setCurrent(window.location.pathname)

function setCurrent(href) {
  navigation.forEach(e => e.current = (e.href === href))
}

</script>
