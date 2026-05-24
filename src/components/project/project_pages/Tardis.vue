<template>
    <div class="column">
        <Title title="Tardis" date="16/04/2026"/>

        <Box_1
            component_1="TARDIS-1.jpg"
            component_3="TARDIS - SNCF - DATA ANALYSIS - MACHINE LEARNING - STREAMLIT - PYTHON - PRÉDICTION DE RETARDS"
            component_5="Intégré au service d'analyse de données de la SNCF, l'objectif est de prédire les retards ferroviaires avant qu'ils ne surviennent. À partir de données historiques réelles, le projet couvre l'intégralité du pipeline data : nettoyage, exploration, modélisation et dashboard interactif."
        />

        <Box_3
            component_2="L'analyse exploratoire commence par un nettoyage rigoureux du dataset : valeurs manquantes, doublons, conversions de types et feature engineering - extraction du mois, du jour de semaine, du type de train. Le dataset nettoyé est exporté pour alimenter directement la phase de modélisation."
            component_3="Plusieurs visualisations révèlent les patterns cachés dans les retards : distributions par gare, par plage horaire, par type de train, corrélations entre variables. Chaque graphique est accompagné d'une interprétation écrite pour guider même un lecteur non technique."
            component_4="TARDIS-2.jpg"
            component_5="Un modèle de régression prédit la durée du retard en minutes à partir des caractéristiques du trajet - gare de départ, gare d'arrivée, durée du trajet, jour."
        />

        <Box_4
            component_1="STREAMLIT- PANDAS - NUMPY"
            component_3="TARDIS-3.jpg"
            component_4="Le dashboard Streamlit rend l'analyse accessible à tous : visualisation de la distribution des retards, statistiques clés en temps réel, et interface de prédiction interactive où l'utilisateur saisit les paramètres de son trajet et obtient instantanément un retard estimé en minutes."
        />

    </div>
</template>

<script setup>
import Title from '../boxes/Title.vue'
import Box_1 from '../boxes/Box_1.vue'
import Box_3 from '../boxes/Box_3.vue'
import Box_4 from '../boxes/Box_4.vue'
</script>

<style scoped>
</style>