<template>
    <div class="flex flex-row w-full items-center mt-auto">
        <RouterLink :to="{ name: 'Index' }" class="flex flex-row items-center justify-center flex-1 cursor-pointer">
            Home
        </RouterLink>

        <RouterLink :to="{ name: 'About' }" class="flex flex-row items-center justify-center flex-1 cursor-pointer">
            About
        </RouterLink>

        <RouterLink :to="{ name: 'Contacts' }" class="flex flex-row items-center justify-center flex-1 cursor-pointer">
            Contacts
        </RouterLink>

    </div>
</template>