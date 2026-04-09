<template>
    <div class="column">
        <div class="title">
            <div class="project_title">TITRE PROJET</div>
            <div class="project_date">REALISE LE XX/XX/XX</div>
        </div>
        <div class="text"></div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.title {
    background-color: rgb(0, 0, 0);

    width: 100%;
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
    font-family: 'Rubik Dirt', sans-serif;
}
</style>