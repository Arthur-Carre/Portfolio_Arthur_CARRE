<template>
    <div class="column">
        <Title title="Alice in Wonderland" date="16/04/2026"/>
        
        <Box_2
            component_2="Through the Looking-Glass est un outil qui transforme des livres entiers en fiches compactes et structurées conçu pour que les éditeurs et publishers saisissent l'essentiel d'un ouvrage sans avoir à le lire intégralement."
            component_3="ALICE-1.jpg"
            component_4="Le moteur NLP regroupe plusieurs analyses : diversité lexicale, modélisation de sujets par sections, reconnaissance d'entités nommées (personnages et lieux), résumé automatique et calcul de similarité entre livres. Chaque opération est accessible via une commande CLI dédiée."
        />

        <Box_4
            component_1="THROUGH THE LOOKING-GLASS - NLP ENGINE - BOOK CARDS - PROJECT GUTENBERG - PYTHON - SPACY - PANDAS"
            component_3="ALICE-2.jpg"
            component_4="Développé entièrement en Python avec spaCy et pandas, le moteur tourne en ligne de commande via bookworm.py et génère des cartes structurées pour chaque livre. Chaque carte regroupe les métadonnées de l'ouvrage, ses statistiques lexicales, ses thèmes principaux, ses personnages et lieux clés, un résumé condensé ainsi que les 5 livres les plus similaires. Les résultats coûteux en calcul sont mis en cache pour être réutilisés sans relancer l'analyse."
        />

        <Box_5
            component_1="Les livres sont vectorisés via TF-IDF puis comparés par similarité cosinus afin de recommander les 5 titres les plus proches de celui demandé. Cette approche légère permet d'obtenir des recommandations pertinentes sans recourir à des modèles lourds ou des APIs externes."
            component_3="ALICE-3.jpg"
            component_4="Aucun modèle lourd, aucune API externe le moteur est pensé pour tourner rapidement sur n'importe quelle machine, sans configuration complexe. Les dépendances sont minimales et documentées, l'installation se fait en quelques secondes."
            component_5="Plus de 75 000 livres disponibles sur Project Gutenberg, couvrant des genres variés : littérature jeunesse, policier, science-fiction, classiques... Le prototype se concentre sur une collection de 21 ouvrages soigneusement sélectionnés pour illustrer les capacités du moteur."
        />

    </div>
</template>

<script setup>
import Title from '../boxes/Title.vue'
import Box_2 from '../boxes/Box_2.vue'
import Box_4 from '../boxes/Box_4.vue'
import Box_5 from '../boxes/Box_5.vue'
</script>

<style scoped>
</style>