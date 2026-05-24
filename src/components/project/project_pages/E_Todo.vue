<template>
    <div class="column">
        <Title title="e-Todo" date="16/04/2026"/>

        <Box_1
            component_1="TODO-1.jpg"
            component_3="E-TODO - MYSQL - DOCKER - REACT.JS"
            component_5="Une application web de gestion de tâches complète. Les utilisateurs peuvent créer un compte, se connecter, et gérer leurs todos avec différents statuts : non commencé, en cours, ou terminé."
        />

        <Box_5
            component_1="La base de données MySQL structure les utilisateurs et leurs tâches via des tables reliées par une clé étrangère. Les mots de passe sont hashés, et chaque route protégée requiert un token."
            component_3="TODO-2.jpg"
            component_4="Le backend expose une dizaine de routes couvrant l'authentification, la gestion des utilisateurs. Chaque erreur est interceptée par un middleware centralisé qui retourne un message clair et un statut HTTP approprié."
            component_5="Le projet est entièrement conteneurisé avec Docker Compose un seul docker-compose up suffit à démarrer la base de données et le frontend. Les variables sensibles sont isolées dans un fichier .env."
        />

        <Box_3
            component_2="Le frontend développé en React.js reflète en temps réel les données stockées en base. L'interface permet l'inscription, la connexion, la création et la gestion complète des todos."
            component_3="L'expérience utilisateur a été soignée : états de chargement, messages de confirmation, design responsive adapté desktop et mobile, navigation claire et cohérente."
            component_4="TODO-3.jpg"
            component_5="Le projet a été mené en équipe avec une organisation agile : répartition des rôles, suivi des tâches sur un outil partagé (Trello), commits clairs et documentés, et un README détaillant l'installation et le lancement du projet."
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