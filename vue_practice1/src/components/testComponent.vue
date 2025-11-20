<script setup>
import {ref} from 'vue';

const count = ref(0);
const increment = () => {
    count.value++;
};
</script>

<template>
    <div class='counter-box'>
        <h2>숫자 카운터</h2>
        <p>현재 숫자: {{count}}</p>
        <button @click='increment'>+</button>
    </div>
</template>

<style scoped>
.counter-box {
    border: 1px solid #ddd;
    padding: 20px;
    text-align: center;
}
button {
    background: #42b883;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}
</style>