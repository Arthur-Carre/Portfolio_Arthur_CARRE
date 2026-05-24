<template>
    <div class="background">

        <div class="title">
            <img src="/picture.jpg" class="photo" />
            <div>
                <div class="full_name font_white_0">Arthur Carré</div>
                <div class="subtitle font_white_2">Étudiant Epitech - Développeur passionné</div>
                <div class="description font_white_1">
                    Curieux et créatif, je construis des projets qui mêlent technique et design.
                    Toujours en train d'apprendre, j'aime relever des défis et souhaite exploiter mes connaissances pour des projets concrets.
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section_label font_white_3">COMPÉTENCES</div>
            <div class="skills">
                <div class="skill font_white_1">HTML</div>
                <div class="skill font_white_1">CSS</div>
                <div class="skill font_white_1">Javascript</div>
                <div class="skill font_white_1">Vue</div>
                <div class="skill font_white_1">React</div>
                <div class="skill font_white_1">Python</div>
                <div class="skill font_white_1">spacy py</div>
                <div class="skill font_white_1">pandas py</div>
                <div class="skill font_white_1">Git</div>
                <div class="skill font_white_1">Docker</div>
                <div class="skill font_white_1">Linux</div>
                <div class="skill font_white_1">VS Code</div>
            </div>
        </div>

        <div class="section">
            <div class="section_label font_white_3">PARCOURS</div>
            <div class="parcours">
                <div class="parcours_item">
                    <div class="parcours_date font_white_3">2025 - aujourd'hui</div>
                    <div class="parcours_description">
                        <div class="parcours_title font_white_1">Epitech Nantes</div>
                        <div class="parcours_subtitle font_white_2">Expert en Technologies de l'Information</div>
                    </div>
                </div>
                <div class="parcours_item">
                    <div class="parcours_date font_white_3">2024 - 2025</div>
                    <div class="parcours_description">
                        <div class="parcours_title font_white_1">Baccalauréat</div>
                        <div class="parcours_subtitle font_white_2">Spécialité NSI & Maths</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section_label font_white_3">PHILOSOPHIE</div>
            <div class="description font_white_1">
                Féru d'énigmes, j'envisage la programmation comme des casse-tête à résoudre. L'approche ludique est un vrai moteur pour moi.
                Je suis quelqu'un qui cherche à bien faire les choses et à avoir le résultat le plus propre possible.
                Calme et polyvalent, je sais m'adapter aux situations. Je suis respectueux et sais reconnaître mes erreurs.
            </div>
        </div>

        <div class="section">
            <div class="section_label font_white_3">CENTRES D'INTÉRÊT</div>
            <div class="description font_white_1">
                Passionné par les jeux vidéo, la musique et le dessin qui sont des domaines qui me plaisent beaucoup pour leur créativité.
            </div>
        </div>

        <div class="section">
            <div class="section_label font_white_3">PROGRESSION</div>
            <div class="description font_white_1">
                Cette première année à Epitech a été une montée en compétences rapide et intensive.
                J'ai débuté avec des bases solides en HTML, CSS et JavaScript, et j'ai progressivement élargi mon champ de compétences vers Vue, React, Python et Docker.
                Chaque projet m'a appris quelque chose de nouveau, pas seulement techniquement mais aussi dans ma façon d'organiser mon travail, de collaborer en équipe et de livrer quelque chose de fonctionnel dans un temps contraint.
                Je suis passé d'un développeur qui code pour que ça marche, à quelqu'un qui réfléchit à comment bien faire les choses.
            </div>
        </div>

        <div class="section">
            <div class="section_label font_white_3">EXPÉRIENCES</div>
            <div class="description font_white_1">
                En dehors des projets scolaires, je m'implique dans des projets personnels qui me permettent d'explorer des idées librement, sans contrainte de sujet ni de délai imposé.
                C'est dans ces espaces que j'expérimente de nouvelles technologies, par exemple dans l'expérimentation et la création de jeux vidéo.
            </div>
        </div>

    </div>
</template>

<script setup>
</script>

<style scoped>
.background {
    min-width: 87.5vw;
    max-width: 87.5vw;
    min-height: 100vh;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
}

.title {
    min-height: 60vh;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0 4vw 5vh;
    border-bottom: 0.1vh solid rgb(50, 50, 50);
    gap: 4vw;
}

.photo {
    width: 15vw;
    height: 15vw;
    object-fit: cover;
}

.full_name {
    font-size: 7vw;
    font-family: 'Rubik Dirt', sans-serif;
    margin: 0 0 1vh;
}

.subtitle {
    font-size: 1.5vw;
}

.description {
    font-size: 1.1vw;
    max-width: 50vw;
    line-height: 1.8;
    margin: 0;
}

.section {
    padding: 5vh 4vw;
    border-bottom: 0.1vh solid rgb(50, 50, 50);
}

.section_label {
    font-size: 0.8vw;
    letter-spacing: 0.3vw;
    margin: 0 0 3vh;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5vh;
}

.skill {
    border: 0.1vh solid rgb(50, 50, 50);
    font-size: 1vw;
    padding: 1vh 2vw;
    border-radius: 0.5vh;
    transition: border-color 0.3s, color 0.3s;
}

.skill:hover {
    border-color: rgb(0, 0, 255);
    color: rgb(0, 0, 255);
}

.parcours {
    display: flex;
    flex-direction: column;
    gap: 4vh;
}

.parcours_item {
    display: flex;
    flex-direction: row;
    gap: 4vw;
    align-items: flex-start;
}

.parcours_date {
    font-family: 'Nunito', sans-serif;
    font-size: 0.9vw;
    min-width: 15vw;
    padding-top: 0.3vh;
}

.parcours_title {
    font-family: 'Nunito', sans-serif;
    font-size: 1.2vw;
    font-weight: 900;
    margin: 0 0 0.5vh;
}

.parcours_subtitle {
    font-family: 'Nunito', sans-serif;
    font-size: 1vw;
    margin: 0;
}

@media (max-width: 768px) {
    .background {
        min-width: 100vw;
        max-width: 100vw;
        padding-bottom: 8vh;
    }

    .title {
        flex-direction: column;
        align-items: flex-start;
    }

    .title {
        min-height: auto;
        padding: 4vh 4vw;
    }


    .photo {
        width: 30vw;
        height: 30vw;
    }

    .full_name {
        font-size: 12vw;
    }

    .subtitle {
        font-size: 3.5vw;
    }

    .description {
        font-size: 3vw;
        max-width: 100%;
    }

    .section_label {
        font-size: 2.5vw;
    }

    .skill {
        font-size: 3vw;
    }

    .parcours_date {
        font-size: 2.5vw;
        min-width: 30vw;
    }

    .parcours_title {
        font-size: 3.5vw;
    }

    .parcours_subtitle {
        font-size: 3vw;
    }
}
</style>