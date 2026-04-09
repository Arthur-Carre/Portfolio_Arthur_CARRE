<template>
    <div class="box row">

        <div class="box_1"></div>

        <div class="column">

            <div></div>

            <div class="row">
                <div></div>
                <div></div>
            </div>

        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.box {
    width: 100%;
    height: 100vh;

    background-color: blue;
}

/* .box_1 {
    wi
}

.box_2 {
    
}

.box_3 {
    
}

.box_4 {
    
} */




.text {
    background-color: rgb(131, 40, 40);

    width: 100%;
    height: 100vh;
}

.row {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.column {
    flex: 1;
    display: flex;
    flex-direction: column;
}
</style>