<template>
    <div class="horizontal_navigation background_black">
        <div class="full_name row font_white_0">
            <div class="first_name">
                ARTHUR
            </div>
            <div class="last_name">
                CARRE
            </div>
        </div>
        <RouterLink to="/contact">
            <div class="contact background_blue font_white_0">
                ME CONTACTER ➔
            </div>
        </RouterLink>
    </div>
</template>

<script setup>
</script>

<style scoped>
.horizontal_navigation {
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100vw;
    z-index: 10;
    width: 100vw;
    height: 10vh;

    display: flex;
    align-items: center;
}

.full_name {
    display: flex;
    align-items: center;
}

.first_name {
    height: 0vw;
    font-size: 1.75vh;
    transform: rotate(-90deg);

    font-family: 'Lilita One', sans-serif;
}

.last_name {
    font-size: 7.5vh;
    font-family: 'Lilita One', sans-serif;
}

.contact {
    font-size: 2vh;
    font-family: 'Nunito', sans-serif;

    padding: 1vh;
    padding-left: 2.5vh;
    padding-right: 2.5vh;
    border-radius: 1vh;
}

.background_black {
    background-color: rgb(0, 0, 0);
}

.background_blue {
    background-color: rgb(0, 0, 255);
}

a {
    text-decoration: none;
    color: inherit;
    margin-left: auto;
    margin-right: 2vw;
}

@media (max-width: 768px) {
    .horizontal_navigation {
        display: none;
    }
}

</style>