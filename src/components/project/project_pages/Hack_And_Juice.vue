<template>
    <div class="column">
        <Title title="Hack & Juice" date="16/04/2026"/>

        <Box_5
            component_1="Hack & Juice est un projet sur OWASP Juice Shop, l'application web volontairement vulnérable. Elle regroupe l'ensemble des failles du Top 10 OWASP ainsi que de nombreuses vulnérabilités réelles un terrain d'entraînement idéal pour affûter ses compétences offensives."
            component_3="JU-1.jpg"
            component_4="Je devais résoudre et documenter plus de 10 challenges de difficulté 3 minimum (Plus de 40 failles trouver au total), répartis sur plusieurs catégories OWASP et différents tags : injection, XSS, brute force, OSINT, analyse de code, contrôle d'accès brisé..."
            component_5="Chaque challenge résolu est documenté dans un fichier Markdown structuré : méthodologie étape par étape, outils utilisés, vulnérabilité identifiée, composants affectés, niveau de sévérité, impact business et stratégies de remédiation."
        />

        <Box_3
            component_2="L'approche adoptée couvre volontairement un large spectre de catégories pour ne pas se cantonner à un seul vecteur d'attaque. Injection SQL, Cross-Site Scripting, contournement d'authentification, mauvaises configurations, fuites de données sensibles chaque technique explorée renforce une compétence distincte."
            component_3="Les outils mobilisés varient selon les challenges : Burp Suite pour l'interception et la manipulation des requêtes HTTP des injections, ainsi que savoir directement interagir avec la console."
            component_4="JU-2.jpg"
            component_5="Au-delà du score, l'objectif est de comprendre chaque faille en profondeur - pour être capable de la reproduire, de l'expliquer simplement et de proposer des corrections concrètes. La présentation inclut une démonstration live et une session de questions techniques approfondies."
        />

        <Box_1
            component_1="JU-3.jpg"
            component_3="OWASP - PENTEST - INJECTION - XSS - BURP SUITE - SQLMAP - OSINT - CTF - SÉCURITÉ OFFENSIVE"
            component_5="Ce projet a permis de développer une vraie culture de la sécurité offensive : identifier une surface d'attaque, exploiter méthodiquement une vulnérabilité, évaluer son impact réel et proposer des remédiations adaptées - des compétences directement transposables en contexte professionnel."
        />

    </div>
</template>

<script setup>
import Title from '../boxes/Title.vue'
import Box_1 from '../boxes/Box_1.vue'
import Box_3 from '../boxes/Box_3.vue'
import Box_5 from '../boxes/Box_5.vue'
</script>

<style scoped>
</style>