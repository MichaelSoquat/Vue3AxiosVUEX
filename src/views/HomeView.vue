<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div :style="{ color: $store.state.colorCode }" class="counter">
      {{ $store.state.counter }}
    </div>
    <div class="counter-squard">
      {{ $store.state.counter }}
      <sup>2</sup> = {{ $store.getters.counterSquared }}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('decrement')">-</button>
      <button @click="$store.dispatch('increment')">+</button>
    </div>
    <div>
      <input v-model="colorCode" placeholder="Enter color!" type="text" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(value) {
        this.$store.dispatch("setColorCode", value);
      },
    },
  },
};
</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
