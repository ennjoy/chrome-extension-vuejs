# Chrome Extension (Vue 3 + Vue Router + Typescript + Vite + TailwindCSS)

<p align="center">
  <img src="https://raw.githubusercontent.com/Rezvitsky/chrome-extension-vuejs/main/preview.png">
  <br>
</p>

<br>

**Background**

Hey! To write the extension, I will use:

* [Vitejs](https://vitejs.dev/)
* [Vuejs](https://v3.vuejs.org/)
* [Vite plugin vue layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
* [Vite plugin pages](https://github.com/hannoeru/vite-plugin-pages)
* [Unplugin auto import](https://github.com/antfu/unplugin-auto-import)
* [Unplugin vue components](https://github.com/antfu/unplugin-vue-components)
* [TailwindCSS](https://tailwindcss.com/)
* [SASS](https://sass-lang.com/)


# Start 🚀

To create a new project, run the command in the console:

    npm init vite@latest chrome-extension -- --template vue-ts

<br>

# TailwindCSS

To install TailwindCSS:

    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

<br>

    npx tailwindcss init -p

<br>

Updates tailwind.config.js:

    module.exports = {
      purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      darkMode: false, // or 'media' or 'class'
      theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [],
    }

<br>

In the project I will use SASS to install it along with TailwindCSS, execute the following commands:

    npm install postcss-import

<br>

Updates postcss.config.js:

    module.exports = {
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ]
    }

<br>

# SASS
Install SASS with the command:

    npm i -D sass

<br>

Create a ``main.scss`` file in the ```assets/scss``` folder with the following content:

    @import "tailwindcss/base";
    @import "tailwindcss/components";
    @import "tailwindcss/utilities";

    html {
        body {
            #app {
                height: 100%;
                width: 100%;
                overflow-x: hidden;
            }
            &.popup {
                width: 357px;
                min-height: 600px;
                height: 600px;
                max-height: 600px;
            }
        }
    }

<br>

Connect the ``main.scss`` into the ``main.ts`` file

    import './assets/scss/main.scss'

<br>

# Vue Router (vite-plugin-vue-layouts + vite-plugin-pages)
To install, run the command:

    npm i -S vue-router@4.x vite-plugin-vue-layouts vite-plugin-pages

<br>
Updates main.ts

    import { createApp } from 'vue'
    import { createRouter, createWebHashHistory } from 'vue-router'
    import generatedRoutes from 'virtual:generated-pages'
    import { setupLayouts } from 'virtual:generated-layouts'
    import App from '~/App.vue'
    import '~/assets/scss/main.scss'

    const routes = setupLayouts(generatedRoutes)

    const router = createRouter({
        history: createWebHashHistory(),
        routes
    })

    createApp(App).use(router).mount('#app')

<br>

Create a Default.vue file in the layouts folder with the following content:

<br>

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
<br>

For example pages, I created 3 files in the pages folder: Index.vue, About.vue, Contacts.vue

<br>

Index.vue

    <template>
      <div class="flex flex-col items-start w-full p-6 pb-8">
            <div class="flex flex-col items-center w-full p-6 space-y-8 mt-4">
                <div class="flex flex-col items-center space-y-3">
                    <span class="text-base">Home</span>
                </div>
            </div>
        </div> 
    </template>

    <route lang="yaml">
        name: Index
        meta:
        layout: Default
    </route>

<br>

About.vue

    <template>
      <div class="flex flex-col items-start w-full p-6 pb-8">
            <div class="flex flex-col items-center w-full p-6 space-y-8 mt-4">
                <div class="flex flex-col items-center space-y-3">
                    <span class="text-base">About</span>
                </div>
            </div>
        </div> 
    </template>

    <route lang="yaml">
        name: About
        meta:
        layout: Default
    </route>

<br>

Contacts.vue

    <template>
      <div class="flex flex-col items-start w-full p-6 pb-8">
            <div class="flex flex-col items-center w-full p-6 space-y-8 mt-4">
                <div class="flex flex-col items-center space-y-3">
                    <span class="text-base">Contacts</span>
                </div>
            </div>
        </div> 
    </template>

    <route lang="yaml">
        name: Contacts
        meta:
        layout: Default
    </route>

<br>

# Manifest.json

At the root of our project, create a manifest.json file:

    {
      "manifest_version": 2,
      "name": "Extension",
      "version": "0.1.0",
      "version_name": "0.1.0",
      "description": "Chrome Extension Example",
      "author": "Leonid Rezvitsky",
      "icons": {
        "128": "public/128.png"
      },
      "browser_action": {
        "default_popup": "dist/index.html",
        "default_title": "Extension"
      }
    }

<br>

# Build

To build the extension, run the command:

    npm run build

<br>

Now go to the ``chrome://extensions`` page and enable developer mode.

<br>

Click on the button download the extension and select the folder where manifest.json is located in the crust.
