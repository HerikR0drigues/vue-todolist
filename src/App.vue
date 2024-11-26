<script setup>
import HeaderMain from './components/HeaderMain.vue';
import FooterMain from './components/FooterMain.vue';
import Prompt from './components/Prompt.vue';
import Tasks from './components/Tasks.vue';
import Filter from './components/Filter.vue';
import { onMounted, reactive, ref } from 'vue';

const selectedFilter = ref('ambas');
const tasks = ref([]); // Usar `ref` em vez de `reactive` para permitir reatividade total

// Atualizar a lista de tarefas
const handleUpdate = () => {
    const newTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.value = [...newTasks]; // Atribuindo uma nova referência para garantir a reatividade
};

// Alterar filtro selecionado
const handleFilter = (newValue) => {
    selectedFilter.value = newValue;
};

// Carregar tarefas ao montar
onMounted(() => {
    handleUpdate();
});
</script>

<template>
    <div id="app" class="flex flex-col min-h-screen bg-black shadow-xl font-poppins">

        <HeaderMain/>

        <main class="p-4">
            <div class=" rounded-2xl max-w-2xl mx-auto bg-mainBackground shadow-lg p-4">
                <Prompt
                    @updateTasks="handleUpdate"
                />

                <Filter
                    @updatedFilter="handleFilter"
                />

                <Tasks
                    :tasks="tasks"
                    :selectedFilter="selectedFilter"
                    @updateTasks="handleUpdate"
                />
            </div>
        </main>

        <FooterMain/>

    </div>
</template>
