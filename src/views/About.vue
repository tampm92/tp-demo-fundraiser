<template>
  <div>
    <div class="flex flex-col capitalize text-3xl">
      <span class="font-semibold">About</span>
    </div>

    <div class="-m-2 text-center">
      <a href="https://tampm.com" target="_blank" class="p-2 block">
        <div class="inline-flex items-center bg-white leading-none text-green-600 rounded-full p-2 shadow text-teal text-sm">
          <span class="inline-flex bg-green-600 text-white rounded-full h-6 px-3 justify-center items-center">Author</span>
          <span class="inline-flex px-2">Tam Phan (https://tampm.com)</span>
        </div>
      </a>
      
      <a href="https://github.com/tampm92/tp-demo-fundraiser" target="_blank" class="p-2 block">
        <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-sm">
          <span class="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center text-">Github</span>
          <span class="inline-flex px-2">https://github.com/tampm92/tp-demo-fundraiser</span>
        </div>
      </a>
      
      <a href="https://tp-demo-fundraiser.netlify.app" target="_blank" class="p-2 block">
        <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
          <span class="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center">Demo</span>
          <span class="inline-flex px-2">https://tp-demo-fundraiser.netlify.app</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    document.title = 'About - Fundraiser'
  },
}
</script>
