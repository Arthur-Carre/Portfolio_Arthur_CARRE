<template>
    <div class="title">
        <div class="project_title">{{ title }}</div>
        <div class="project_date">REALISE LE <div class="font_blue">{{ date }}</div></div>
    </div>
    <div class="text"></div>
</template>

<script setup>
defineProps({
    title: String,
    date: String
})
</script>

<style scoped>
.title {
    background-color: rgb(0, 0, 0);

    max-width: 87.5vw;
    min-width: 87.5vw;
    height: 50vh;

    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;

    box-sizing: border-box;
    padding-bottom: 5%;
}

.project_title {
    color: rgb(255, 255, 255);
    font-size: 7vw;
    font-family: 'Rubik Dirt', sans-serif;
}

.project_date {
    color: rgb(255, 255, 255);
    font-size: 2vw;
    font-family: 'Nunito', sans-serif;
    font-weight: 1000;

    display: flex;
    gap: 0.5vw;
}

.font_blue {
    color: rgb(0, 0, 255);
}

@media (max-width: 768px) {
    .title {
        min-width: 100vw;
        max-width: 100vw;
        height: 35vh;
    }

    .project_title {
        font-size: 10vw;
    }

    .project_date {
        font-size: 4vw;
    }
}
</style>