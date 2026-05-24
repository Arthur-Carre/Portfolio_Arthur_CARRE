<template>
    <div class="column">
        <Title title="YOWL" date="16/04/2026"/>

        <Box_2
            component_2="MatchBoite est une application sociale web de mise en relation entre candidats et entreprises via un système de swipe. Quand l'intérêt est réciproque, une messagerie pour permettre l'échange une expérience fluide et intuitive, directement inspirée des codes des apps de rencontre appliqués au recrutement."
            component_3="YO-1.jpg"
            component_4="Le MVP a été développé rapidement pour valider le concept : pas de base de données, données stockées en brut, focus total sur le flux utilisateur essentiel. L'objectif n'est pas la robustesse technique mais la preuve que l'idée fonctionne et crée de l'engagement."
        />

        <Box_3
            component_2="Le processus de design a suivi une méthodologie professionnelle complète : interviews utilisateurs, benchmark des plateformes de recrutement existantes, personas, user journeys, wireframes, mockups haute fidélité sur Figma et tests sur prototype cliquable auprès de pairs avant tout développement."
            component_3="La priorisation MoSCoW a permis de définir un périmètre MVP précis et réaliste : swipe de profils, système de match réciproque, messagerie post-match. Tout ce qui dépasse ce flux essentiel a été explicitement exclu pour garantir une exécution propre dans le temps imparti."
            component_4="YO-2.jpg"
            component_5="Les tests utilisateurs ont révélé les points de friction sur le prototype et ont directement orienté les ajustements UX avant le développement lisibilité des cartes de profil, clarté du retour visuel au moment du match, simplicité de la messagerie."
        />

        <Box_5
            component_1="MatchBoite répond à un vrai problème : les plateformes de recrutement traditionnelles sont froides, asymétriques et peu engageantes. Le swipe rééquilibre la relation candidat et entreprise ont le même pouvoir d'initiative, et le match ne s'ouvre que si les deux parties se montrent intéressées."
            component_3="YO-3.jpg"
            component_4="Le dépôt est structuré selon les standards du projet : recherche, personas, wireframes, mockups, prototype, feedback, priorisation et pitch deck dans /docs, code source du MVP dans /mvp, README complet avec instructions d'installation, de déploiement et justification des choix techniques."
            component_5="Développé dans le cadre du module Product Design à Epitech, MatchBoite illustre qu'un concept bien pensé et un flux utilisateur soigné valent plus qu'une stack technique complexe un MVP sobre, déployé et testable, qui prouve l'idée sans sur-ingénierie."
        />

    </div>
</template>

<script setup>
import Title from '../boxes/Title.vue'
import Box_2 from '../boxes/Box_2.vue'
import Box_3 from '../boxes/Box_3.vue'
import Box_5 from '../boxes/Box_5.vue'
</script>

<style scoped>
</style>