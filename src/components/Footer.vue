<template>
    <div class="flex flex-row w-full items-center mt-auto">
        <router-link :to="{ name: 'Index' }" class="flex flex-row items-center justify-center flex-1 cursor-pointer">
            Home
        </router-link>

        <router-link :to="{ name: 'About' }" class="flex flex-row items-center justify-center flex-1 cursor-pointer">
            About
        </router-link>

        <router-link :to="{ name: 'Contacts' }" class="flex flex-row items-center justify-center flex-1 cursor-pointer">
            Contacts
        </router-link>

    </div>
</template>
