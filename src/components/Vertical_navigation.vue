<template>
    <div class="vertical_navigation background_black">
        <div class="links_navigation">
            <RouterLink to="/">
                <div class="link link_house font_white_0">
                        <div class="house image"></div>
                        ACCUEIL
                </div>
            </RouterLink>

            <RouterLink to="/projects">
                <div class="link link_folder font_white_0">
                    <div class="folder image"></div>
                    PROJETS
                </div>
            </RouterLink>

            <RouterLink to="/contact">
                <div class="link link_letter font_white_0">
                        <div class="letter image"></div>
                        CONTACT
                </div>
            </RouterLink>

            <div class="separation"></div>

            <div class="external_links">
                <a href="https://www.linkedin.com/in/arthur-carr%C3%A9-ba63483b3/" target="_blank">
                    <div class="linkedin image"></div>
                </a>
                <a href="https://github.com/Arthur-carre" target="_blank">
                    <div class="github image"></div>
                </a>
                <a href="mailto:work.arthur.carre@gmail.com">
                    <div class="mail image"></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.vertical_navigation {
    position: sticky;
    top: 0;
    z-index: 5;
    min-width: 12.5vw;
    max-width: 12.5vw;
    min-height: 100vh;
    max-height: 100vh;
    margin-top: -10vh;

    display: flex;
    align-items: center;
    justify-content: center;
}

.background_black {
    background-color: rgb(0, 0, 0);
}

.links_navigation {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    box-sizing: border-box;

    padding-top: 25vh;
}

.image {
    width: 3vh;
    height: 3vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    flex-shrink: 0;
}

.separation {
    width: 100%;
    height: 30vh;
}

.external_links {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3vh;
    margin-top: auto;
    padding-top: 3vh;
    border-top: 0.1vh solid rgb(50, 50, 50);
}

a {
    text-decoration: none;
    color: inherit;
}

.link {
    max-width: 100%;
    height: 7vh;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20%;

    font-size: 1vw;
    font-weight: 900;
    font-family: 'Nunito', sans-serif;
    gap: 2vh;
}

.link:hover {
    box-shadow: inset 0.75vw 0 0 rgb(0, 0, 255);
    color: rgb(0, 0, 255);
}

.house {
    background-image: url('/public/white_house.png');
}

.link_house:hover .house {
    background-image: url('/public/blue_house.png');
}

.letter {
    background-image: url('/public/white_letter.png');
}

.link_letter:hover .letter {
    background-image: url('/public/blue_letter.png');
}

.folder {
    background-image: url('/public/white_folder.png');
}

.link_folder:hover .folder {
    background-image: url('/public/blue_folder.png');
}

.linkedin {
    background-image: url('/public/white_linkedin.png');
}

.linkedin:hover {
    background-image: url('/public/blue_linkedin.png');
}

.github {
    background-image: url('/public/white_github.png');
}

.github:hover {
    background-image: url('/public/blue_github.png');
}

.mail {
    background-image: url('/public/white_letter.png');
}

.mail:hover {
    background-image: url('/public/blue_letter.png');
}

@media (max-width: 768px) {
    .vertical_navigation {
        position: fixed;
        bottom: 0;
        top: auto;
        min-width: 100vw;
        max-width: 100vw;
        min-height: auto;
        max-height: auto;
        margin-top: 0;
        border-top: 0.1vh solid rgb(50, 50, 50);
    }

    .links_navigation {
        flex-direction: row;
        padding-top: 0;
        align-items: center;
        justify-content: space-around;
        height: 8vh;
    }

    .link {
        flex-direction: column;
        justify-content: center;
        padding-left: 0;
        gap: 0.5vh;
        font-size: 1.5vw;
        height: 100%;
    }

    .separation {
        display: none;
    }

    .external_links {
        display: none;
    }

    .link:hover {
    box-shadow: none;
    color: rgb(0, 0, 255);
}
}
</style>