<template>
    <section id="cookies" v-if="isOpen">
        <div class="container">
            <div class="row center">
                <h1>Welcome to WorkBoost!</h1>
            </div>
            <div class="row center">
                <p>We use cookies to give you the best experience. Review our Privacy Policy for details</p>
            </div>
            <button @click="accept">Continue to WorkBoost</button>
        </div>
    </section>
</template>

<script>
import * as Cookie from 'tiny-cookie'
export default {
     data () {
      return {
        supportsLocalStorage: true,
        isOpen: false,
        storageName: {
            type: String,
            default: 'cookie:accepted'
        }
      }
    },
    computed: {
    },
    created () {
      // Check for availability of localStorage
      try {
        const test = '__vue-cookielaw-check-localStorage'
        window.localStorage.setItem(test, test)
        window.localStorage.removeItem(test)
      } catch (e) {
        console.info('Local storage is not supported, falling back to cookie use')
        this.supportsLocalStorage = false
      }
      if (!this.getVisited() === true) {
        this.isOpen = true
      }
    },
    methods: {
      setVisited () {
        if (this.supportsLocalStorage) {
          localStorage.setItem(this.storageName, true)
        } else {
          Cookie.set(this.storageName, true)
        }
      },
      getVisited () {
        if (this.supportsLocalStorage) {
          return localStorage.getItem(this.storageName)
        } else {
          return Cookie.get(this.storageName)
        }
      },
      accept () {
        this.setVisited()
        this.isOpen = false
        this.$emit('accept')
      },
      close () {
        this.isOpen = false
      }
    }
  }
</script>
<style>
#cookies{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 9999;
    background-color: white;
}
</style>

