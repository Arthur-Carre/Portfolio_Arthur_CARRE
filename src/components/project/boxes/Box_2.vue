<template>
    <div class="component">
        <div class="component_1">
            <div class="component_2">{{ component_2 }}</div>
            <div :style="{ backgroundImage: `url('/${component_3}')` }" class="component_3"></div>
        </div>
        <div class="component_4">{{ component_4 }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    component_2: String,
    component_3: String,
    component_4: String,
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
    max-width: 80%;
    min-width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 0.1vh solid rgb(50, 50, 50);
}

.component_2 {
    max-width: 100%;
    min-width: 100%;
    height: 20%;
    background-color: black;
    border-bottom: 0.1vh solid rgb(50, 50, 50);
    box-sizing: border-box;
    padding: 3vh 2vw;
    color: rgb(150, 150, 150);
    font-size: 1vw;
    font-family: 'Nunito', sans-serif;
    line-height: 1.8;
    word-wrap: break-word;
    overflow-y: auto;
}

.component_3 {
    max-width: 100%;
    min-width: 100%;
    height: 80%;
    background-color: black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.component_4 {
    max-width: 20%;
    min-width: 20%;
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

.component_3 {
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