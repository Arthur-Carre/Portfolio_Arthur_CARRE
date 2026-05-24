<template>
    <div class="component">
        <div class="component_1">{{ component_1 }}</div>
        <div class="component_2">
            <div :style="{ backgroundImage: `url('/${component_3}')` }" class="component_3"></div>
            <div class="component_4">{{ component_4 }}</div>
        </div>
        <div class="component_5">{{ component_5 }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    component_1: String,
    component_3: String,
    component_4: String,
    component_5: String,
})
</script>

<style scoped>
.component {
    max-width: 87.5vw;
    min-width: 87.5vw;
    height: 80vh;
    display: flex;
    flex-direction: row;
    border-top: 0.1vh solid rgb(50, 50, 50);
}

.component_1 {
    max-width: 25%;
    min-width: 25%;
    height: 100%;
    background-color: black;
    border-right: 0.1vh solid rgb(50, 50, 50);
    box-sizing: border-box;
    padding: 3vh 2vw;
    color: rgb(150, 150, 150);
    font-size: 1vw;
    font-family: 'Nunito', sans-serif;
    line-height: 1.8;
    word-wrap: break-word;
    overflow-y: auto;
}

.component_2 {
    max-width: 50%;
    min-width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 0.1vh solid rgb(50, 50, 50);
}

.component_3 {
    max-width: 100%;
    min-width: 100%;
    height: 80%;
    background-color: black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-bottom: 0.1vh solid rgb(50, 50, 50);
}

.component_4 {
    max-width: 100%;
    min-width: 100%;
    height: 20%;
    background-color: black;
    box-sizing: border-box;
    padding: 3vh 2vw;
    color: rgb(150, 150, 150);
    font-size: 1vw;
    font-family: 'Nunito', sans-serif;
    line-height: 1.8;
    word-wrap: break-word;
    overflow-y: auto;
}

.component_5 {
    max-width: 25%;
    min-width: 25%;
    height: 100%;
    background-color: black;
    box-sizing: border-box;
    padding: 3vh 2vw;
    color: rgb(150, 150, 150);
    font-size: 1vw;
    font-family: 'Nunito', sans-serif;
    line-height: 1.8;
    word-wrap: break-word;
    overflow-y: auto;
}

.component_5 {
    animation: ouvrir linear both;
    animation-timeline: view();
    animation-range: entry 30% entry 70%;
}

@keyframes ouvrir {
    from { clip-path: inset(0 100% 0 0); }
    to   { clip-path: inset(0 0% 0 0); }
}

@media (max-width: 768px) {
    .component {
        min-width: 100vw;
        max-width: 100vw;
    }
}
</style>