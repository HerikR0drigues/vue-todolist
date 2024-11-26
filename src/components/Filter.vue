<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['updatedFilter']);
const selectedOption = ref('ambas');

watch(selectedOption, (newValue) => {
    emit('updatedFilter', newValue);
});

</script>

<template>
    <div class="flex p-4">
        <div class="flex w-full p-2 bg-SecondaryBackground rounded-lg justify-around">

            <div class="flex items-center">
                <input v-model="selectedOption" checked id="default-radio-1" type="radio" value="ambas" name="default-radio" class="w-4 h-4 text-purpleCustom bg-gray-100 border-gray-300">
                <label for="default-radio-1" class="ms-2 text-sm font-medium text-white ">Ambas</label>
            </div>

            <div class="flex items-center">
                <input v-model="selectedOption" id="default-radio-2" type="radio" value="concluidas" name="default-radio" class="w-4 h-4 text-purpleCustom bg-gray-100 border-gray-300">
                <label for="default-radio-2" class="ms-2 text-sm font-medium text-white ">Concluidas</label>
            </div>

            <div class="flex items-center">
                <input v-model="selectedOption" id="default-radio-3" type="radio" value="em-aberto" name="default-radio" class="w-4 h-4 text-purpleCustom bg-gray-100 border-gray-300">
                <label for="default-radio-3" class="ms-2 text-sm font-medium text-white ">Em aberto</label>
            </div>
        </div>
    </div>
</template>