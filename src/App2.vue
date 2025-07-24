<script setup>
import { ref, onMounted } from 'vue';


const name = ref('Sabeeh');
const status = ref('active');
const tasks = ref(['Task 1', 'Task 2', 'Task 3']);
const link = 'https://www.google.com';
const newTask = ref('');

const toggleStatus = () => {
  if (status.value == 'active') {
    status.value = 'pending';
  } else if (status.value == 'pending') {
    status.value = 'inactive';
  } else {
    status.value = 'active';
  }
};

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
}
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
}

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data);
    tasks.value = data.map(item => item.title);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
})
</script>




<template>
  <h1>{{ name }}</h1>
  <p v-if="status == 'active'">Status is active</p>
  <p v-else-if="status == 'pending'">Status is pending</p>
  <p v-else>Status is inactive</p>


  <form @submit.prevent="addTask">
    <label for="newTask">Add Task:</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Add</button>
  </form>
  <h3>Tasks:</h3>
  <il>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">Delete Last Task</button>

    </li>
  </il>
  <!-- <a v-bind:href="link">Google</a> -->
  <a :href="link">Google</a>
  <br>
  <button @click="toggleStatus"> Change Status</button>
</template>


<style scoped>
h1 {
  color: red;
  /* Tailwind's gray-700 */
  font-size: 2rem;
  text-align: center;
  margin-top: 20px;
}
</style>