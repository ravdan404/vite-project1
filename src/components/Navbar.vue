<template>
  <div class="flex flex-col bg-gray-900 text-white w-1/6 h-screen">
    <div class="flex mx-auto p-5 font-medium">
      <h1 class="text-3xl">LOGOGO</h1>
    </div>
    <ul class="font-medium text-lg px-5">
      <li class="px-4 py-2 hover:bg-slate-800 rounded text-gray-300">
        <router-link to="/">Home</router-link>
      </li>
      <li class="px-4 py-2 hover:bg-slate-800 rounded text-gray-300">
        <router-link to="/table">Table</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {};
</script>

<style></style>
