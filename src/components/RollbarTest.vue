<!-- RollbarTest.vue -->
<template>
    <div>
      <button @click="triggerError">Trigger Error</button>
      <button @click="triggerError2">Trigger Error 2</button>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    methods: {
      triggerError() {
        // Simulate an error
        throw new Error('Testing Rollbar integration')
      },
      triggerError2() {
        const x = 1n
        const y = 0n
        const quotient = x / y
        console.log(quotient) 
    },
    },
  }
  </script>