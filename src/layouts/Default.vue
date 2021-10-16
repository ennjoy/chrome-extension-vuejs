<template>
  <div class="w-full min-h-full flex">
    <div class="flex flex-1 md:flex-0 mx-auto">
      <div class="flex-1 flex flex-col items-center">
        <div class="flex-1 flex flex-row w-full justify-center">
          <div class="flex-1 flex flex-col items-center shadow-lg x-w-2xl max-h-screen">
            <RouterView />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>