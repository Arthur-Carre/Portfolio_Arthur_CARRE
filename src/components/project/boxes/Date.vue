<template>
    <div class="date" :class="direction">
        <div class="marker" :class="color"></div>
        <div class="project">
            <div class="title font_white_0">{{ title }}</div>
            <div class="description font_white_2">{{ description }}</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    direction: String,
    color: String,
    title: String,
    description: String,
})
</script>

<style scoped>
.date {
    width: 50%;
    height: 30vh;
    display: flex;
    flex-direction: row;
}

.date.left .marker {
    order: 2;
}

.date.left {
    margin-left: auto;
}

.marker {
    min-width: 8%;
    max-width: 8%;
    height: 100%;
}

.project {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
}

.title {
    font-size: 5vw;
    font-family: 'Rubik Dirt', sans-serif;
    border-bottom: 0.1vh solid rgb(50, 50, 50);
}

.description {
    font-size: 1.3vw;
    padding-top: 1vh;
}

.color_1 {
    background-color: rgb(115, 157, 217);
}

.color_2 {
    background-color: rgb(133, 217, 217);
}

.color_3 {
    background-color: rgb(119, 224, 169);
}

.color_4 {
    background-color: rgb(0, 188, 177);
}
</style>