<template>
    <div class="column">
        <Horizontal_navigation />
        <div class="row">
            <Vertical_navigation />
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import Horizontal_navigation from './components/Horizontal_navigation.vue'
import Vertical_navigation from './components/Vertical_navigation.vue'
</script>

<style scoped>
.column {
    display: flex;
    flex-direction: column;
}

.row {
    display: flex;
    flex-direction: row;
}
</style>