<template>
    <div class="component">
        <div :style="{ backgroundImage: `url('/${component_1}')` }" class="component_1"></div>
        <div class="component_2">
            <div class="component_3"><span>{{component_3}}</span></div>
            <div class="component_4">
                <div class="component_5">{{component_5}}</div>
                <div :style="{ backgroundImage: `url('/${component_6}')` }" class="component_6"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    component_1: String,
    component_3: String,
    component_5: String,
    component_6: String,
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
    max-width: 50%;
    min-width: 50%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: black;
    border-right: 0.1vh solid rgb(50, 50, 50);
}

.component_2 {
    max-width: 50%;
    min-width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.component_3 {
    max-width: 100%;
    min-width: 100%;
    height: 20%;
    font-size: 2vw;
    white-space: nowrap;
    overflow: hidden;
    background-color: black;
    border-bottom: 0.1vh solid rgb(50, 50, 50);
    display: flex;
    align-items: center;
}

.component_3 span {
    animation: defilement 15s linear infinite;
    color: rgb(255, 255, 255);
}

@keyframes defilement {
    0%   { transform: translateX(50vw); }
    100% { transform: translateX(-100%); }
}

.component_4 {
    max-width: 100%;
    min-width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
}

.component_5 {
    max-width: 50%;
    min-width: 50%;
    height: 100%;
    background-color: black;
    word-wrap: break-word;
    border-right: 0.1vh solid rgb(50, 50, 50);
    color: rgb(150, 150, 150);
    font-size: 1vw;
    font-family: 'Nunito', sans-serif;
    padding: 3vh 2vw;
    line-height: 1.8;
    box-sizing: border-box;
}

.component_6 {
    max-width: 50%;
    min-width: 50%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: black;
}

.component_5 {
    animation: ouvrir linear both;
    animation-timeline: view();
    animation-range: entry 30% entry 90%;
}

@keyframes ouvrir {
    from { clip-path: inset(0 0 100% 0); }
    to   { clip-path: inset(0 0 0 0); }
}

@media (max-width: 768px) {
    .component {
        min-width: 100vw;
        max-width: 100vw;
    }
}
</style>