<!--
 * @Author: 刘任志
 * @Date: 2020-10-15 16:06:14
 * @LastEditTime: 2020-10-16 15:02:11
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
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  watch,
} from "vue";
interface DataProps {
  goods: string[];
  selectGood: string;
  selectFun: (index: number) => void;
}
// ref 基础数据类型响应式
// reactive 引用类型的响应式 (但结构之后内部不再具有响应式)
// toRefs 将reactive内部都转换成响应式的
export default {
  name: "Home",
  setup() {
    // setup 就是created,beforeCreate的结合
    console.log("setup");
    const data: DataProps = reactive({
      goods: ["蛋糕", "糖果", "面包"],
      selectGood: ref("我是"),
      selectFun: (index: number) => {
        data.selectGood = data.goods[index];
      },
    });
    const refData = toRefs(data);
    onBeforeMount(() => {
      console.log("beforemount");
    });
    onMounted(() => {
      console.log("mounted");
    });
    onBeforeUpdate(() => {
      console.log("beforeUpdate");
    });
    onUpdated(() => {
      console.log("updated");
    });
    watch(
      () => data.selectGood,
      (oldVal, newVal) => {
        console.log(oldVal);
        console.log(newVal);
      }
    );
    return { ...refData };
  },
};
</script>
