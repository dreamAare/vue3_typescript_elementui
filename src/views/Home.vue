<!--
 * @Author: 刘任志
 * @Date: 2020-10-15 16:06:14
 * @LastEditTime: 2020-10-15 17:54:45
 * @Description: vue3 语法练习
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>点餐业务</h2>
    <h4>请选择一种商品</h4>
    <button
      v-for="(item, index) in goods"
      :key="item"
      @click="selectFun(index)"
    >
      {{ item }}
    </button>
    <div>你选择的商品是 "{{ selectGood }}"</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const goods = ref(["蛋糕", "糖果", "面包"]);
    const selectGood = ref("");
    const selectFun = (index: number) => {
      selectGood.value = goods.value[index];
    };
    return { goods, selectGood, selectFun };
  },
});
</script>
