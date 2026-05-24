<template>
    <div class="background">
        <RouterLink to="/projects/eliza">
            <Date direction="right" color="color_1" title="Eliza" description="Intelligence artificielle et systèmes conversationnels"/>
        </RouterLink>
        <RouterLink to="/projects/alice_in_wonderland">
            <Date direction="left" color="color_2" title="Alice in Wonderland" description="Traitement du langage naturel"/>
        </RouterLink>
        <RouterLink to="/projects/nextbuy">
            <Date direction="right" color="color_3" title="NextBuy" description="Science des données appliquées"/>
        </RouterLink>
        <RouterLink to="/projects/tardis">
            <Date direction="left" color="color_4" title="Tardis" description="Bootcamp en science des données"/>
        </RouterLink>
        <RouterLink to="/projects/yowl">
            <Date direction="right" color="color_1" title="YOWL" description="Conception de produits"/>
        </RouterLink>
        <RouterLink to="/projects/product_design_hackathon">
            <Date direction="left" color="color_2" title="Product Design Hackathon" description="Conception de produits"/>
        </RouterLink>
        <RouterLink to="/projects/hack_and_juice">
            <Date direction="right" color="color_3" title="Hack & Juice" description="Sécurité Internet"/>
        </RouterLink>
        <RouterLink to="/projects/e_Todo">
            <Date direction="left" color="color_4" title="e-Todo" description="Développement web fullstack"/>
        </RouterLink>
    </div>
</template>

<script setup>
import Date from '../project/boxes/Date.vue'
</script>

<style scoped>
.background {
    min-width: 87.5vw;
    max-width: 87.5vw;
    background-color: black;
    display: flex;
    flex-direction: column;
}

a {
    text-decoration: none;
    color: inherit;
    display: flex;
    width: 87.5vw;
}

@media (max-width: 768px) {
    .background {
        min-width: 100vw;
        max-width: 100vw;
    }

    a {
        width: 100vw;
    }
}
</style>