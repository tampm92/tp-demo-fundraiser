<template>
  <div id="default-layout" class="h-screen w-full flex overflow-hidden select-none">
    <Nav/>
    
    <main class="my-1 pt-2 pb-2 px-10 flex-1 bg-gray-200 dark:bg-black rounded-l-lg
      transition duration-500 ease-in-out overflow-y-auto">
      <slot />
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  components: {
    Nav
  },
  data: () => ({
  }),
};
</script>
<style lang="scss">
</style>