<template>
    <div class="column">
        <Title title="NextBuy" date="16/04/2026"/>

        <Box_4
            component_1="NEXTBUY - DATA ANALYSIS - MACHINE LEARNING - PYTHON - JUPYTER"
            component_3="NEXT-1.jpg"
            component_4="NextBuy est un projet d'analyse de données sur des millions de commandes clients d'une épicerie en ligne. L'objectif : transformer des données brutes afin de pouvoir les exploiter efficacement, optimiser le marketing et améliorer l'efficacité opérationnelle."
        />

        <Box_5
            component_1="L'analyse exploratoire répond à plus de 8 questions métier concrètes."
            component_3="NEXT-2.jpg"
            component_4="Deux modèles prédictifs ont été construits, entraînés, testés et comparés. Les résultats sont évalués avec des métriques adaptées et les choix techniques sont tous justifiés pourquoi ce modèle, pourquoi ce package, quelles sont ses limites face aux alternatives."
            component_5="Le notebook Jupyter livre une visualisation claire et lisible de chaque étape : prétraitement des datasets, statistiques descriptives, graphiques annotés, et guidelines pour qu'un non data-scientist puisse suivre la démarche sans se perdre."
        />

        <Box_3
            component_2="Les données couvrent plusieurs dimensions imbriquées : utilisateurs, commandes, produits, rayons et départements. Le prétraitement combine et nettoie ces fichiers dans un ordre cohérent avant toute analyse une étape critique pour garantir la fiabilité des résultats."
            component_3="Une interface claire sous la forme d'un dashboard réalisée grâce à Stremlit, pouvant donner un aspect graphique utile pour une meilleure visualisation des données."
            component_4="NEXT-3.jpg"
            component_5="Le projet a été conduit entièrement en Python avec Jupyter Notebook, en veillant à ce que l'environnement soit reproductible sur n'importe quelle machine. Chaque package utilisé est justifié et son fonctionnement expliqué."
        />

    </div>
</template>

<script setup>
import Title from '../boxes/Title.vue'
import Box_3 from '../boxes/Box_3.vue'
import Box_4 from '../boxes/Box_4.vue'
import Box_5 from '../boxes/Box_5.vue'
</script>

<style scoped>
</style>