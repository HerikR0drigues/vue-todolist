<script setup>
import {reactive} from 'vue';

const emit = defineEmits(['updateTasks']);

const formData = reactive({
    task: '',
    priority: false
})

const handleSubmit = (event) => {
    event.preventDefault();

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    existingTasks.push({...formData});

    localStorage.setItem('tasks', JSON.stringify(existingTasks));

    emit('updateTasks');

    formData.task = '';
}

</script>

<template>
    <form @submit="handleSubmit" class="flex items-center justify-between w-full p-4 gap-6 rounded-xl">
        <div class="flex w-full">
            <input v-model="formData.task" required class="bg-SecondaryBackground text-white p-6 w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-purpleCustom " type="text" name="" id="" placeholder="Insira a tarefa aqui..">
        </div>
        <button type="submit" class="flex h-12 w-12 bg-SecondaryBackground items-center justify-center rounded-full hover:bg-purpleCustom transition">
            <font-awesome-icon icon="plus" class="text-gray-300 text-xl" />
        </button>
    </form>
</template>