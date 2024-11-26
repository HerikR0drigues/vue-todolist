<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    tasks: Array,
    selectedFilter: String
});

const editingIndex = ref(null);
const tasksFiltered = ref([]);

const emit = defineEmits(['updateTasks']);

const handleDelete = (index) => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
    emit('updateTasks');
}

const handleEdit = (index) => {
    editingIndex.value = index;
}

const handleSaveEdit = (index, editedTask) => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks[index].task = editedTask;
    localStorage.setItem('tasks', JSON.stringify(storedTasks));

    emit('updateTasks');
    editingIndex.value = null;
}

const handlePriority = (task) => {
    const storedTasks  = JSON.parse(localStorage.getItem('tasks'));
    const index = storedTasks .findIndex((t) => t.task === task.task);

    if (index !== -1) {
        storedTasks[index].priority = !storedTasks[index].priority;
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
        emit('updateTasks');
    }

}

const handleFiltering = () => {
    if (props.selectedFilter === 'ambas') {
        tasksFiltered.value = props.tasks; // Mostra todas as notas
    } else if (props.selectedFilter === 'concluidas') {
        tasksFiltered.value = props.tasks.filter((task) => task.priority); // Apenas concluidas
    } else if (props.selectedFilter === 'em-aberto') {
        tasksFiltered.value = props.tasks.filter((task) => !task.priority); // Apenas Em aberto
    }
}

watch(
    [
        () => props.tasks,
        () => props.selectedFilter
    ],
    handleFiltering,
    { immediate: true }
);

</script>



<template>
    <div class="flex flex-col space-y-2">
        <div
            v-for="(task, index) in tasksFiltered"
            :key="index"
            class="relative flex bg-mainBackground w-full px-4 py-2 space-x-2 items-center rounded-lg"
        >
            <!-- Input Editável -->
            <input
                v-if="editingIndex === index"
                :class="[task.priority ? '' : '', 'text-white flex-grow p-4 rounded-lg bg-SecondaryBackground']"
                type="text"
                v-model="task.task"
                @focusout="handleSaveEdit(index, task.task)"
            />

            <!-- Input Não Editável -->
            <input
                v-else
                disabled
                :class="[task.priority ? 'line-through opacity-40 ' : '', 'text-white flex-grow p-4 rounded-lg bg-SecondaryBackground ']"
                type="text"
                :value="task.task"
            />

            <!-- Botões -->
            <div class="absolute right-6 flex space-x-2">
                <button
                    @click="handlePriority(task)"
                    class="flex h-8 w-8 bg-SecondaryBackground items-center justify-center rounded-full hover:bg-purpleCustom transition"
                >
                    <font-awesome-icon icon="check" class="text-gray-300 text-sm" />
                </button>

                <button
                    @click="handleEdit(index)"
                    class="flex h-8 w-8 bg-SecondaryBackground items-center justify-center rounded-full hover:bg-purpleCustom transition"
                >
                    <font-awesome-icon icon="edit" class="text-gray-300 text-sm" />
                </button>

                <button
                    @click="handleDelete(index)"
                    class="flex h-8 w-8 bg-SecondaryBackground items-center justify-center rounded-full hover:bg-purpleCustom transition"
                >
                    <font-awesome-icon icon="trash" class="text-gray-300 text-sm" />
                </button>
            </div>
        </div>
    </div>
</template>
