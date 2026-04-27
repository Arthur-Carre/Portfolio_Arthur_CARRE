<template>
    <div class="column">
        <div class="horizontal_navigation background_dark_gray row">
            <div class="full_name row font_white">
                <div class="first_name">
                    ARTHUR
                </div>
                <div class="last_name">
                    CARRE
                </div>
            </div>
            <div class="contact background_blue font_white">
                ME CONTACTER ➔
            </div>
        </div>

        <div class="row">
            <div class="vertical_navigation background_dark_gray">
                <div class="links_navigation">
                    <div class="link link_house">
                        <div class="house image"></div>
                        ACCUEIL
                    </div>

                    <div class="link link_compas">
                        <div class="compas image"></div>
                        FRISE
                    </div>

                    <div class="link link_folder">
                        <div class="folder image"></div>
                        PROJET
                    </div>

                    <div class="link link_letter">
                        <div class="letter image"></div>
                        CONTACT
                    </div>

                    <div class="separation"></div>

                    <div class="external_links">
                        <div class="linkedin image"></div>
                        <div class="github image"></div>
                        <div class="mail image"></div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lilita+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600&display=swap");

.column {
    display: flex;
    flex-direction: column;
}

.row {
    display: flex;
    flex-direction: row;
}

.horizontal_navigation {
    width: 100vw;
    height: 10vh;

    display: flex;
    align-items: center;
}

.vertical_navigation {
    width: 12.5vw;
    max-height: 90vh;

    display: flex;
    align-items: center;
    justify-content: center;
}

.full_name {
    display: flex;
    align-items: center;
}

.first_name {
    height: 0vw;
    font-size: 1.75vh;
    transform: rotate(-90deg);

    font-family: 'Lilita One', sans-serif;
}

.last_name {
    font-size: 7.5vh;
    font-family: 'Lilita One', sans-serif;
}

.contact {
    font-size: 2vh;
    font-family: 'Nunito', sans-serif;

    padding: 1vh;
    padding-left: 2.5vh;
    padding-right: 2.5vh;
    border-radius: 1vh;
    margin-right: 2vw;

    margin-left: auto;
}

.background_dark_gray {
    background-color: rgb(23, 23, 23);
}

.background_blue {
    background-color: rgb(0, 0, 255);
}

.font_white {
    color: rgb(255, 255, 255);
}

.links_navigation {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    box-sizing: border-box;
    padding-top: 20vh;
}

.link {
    width: 100%;
    height: 7vh;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20%;

    font-size: 1vw;
    font-weight: 900;
    font-family: 'Nunito', sans-serif;
    gap: 2vh;

    
    color: rgb(255, 255, 255);
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

.compas {
    background-image: url('/public/white_compas.png');
}

.link_compas:hover .compas {
    background-image: url('/public/blue_compas.png');
}

.folder {
    background-image: url('/public/white_folder.png');
}

.link_folder:hover .folder {
    background-image: url('/public/blue_folder.png');
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
    padding-top: 5vh;
    border-bottom: 0.1vh solid white;
}

.external_links {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3vh;
    margin-top: auto;
    padding-top: 25vh;
}

.linkedin {
    background-image: url('/public/linkedin.png');
}

.github {
    background-image: url('/public/github.png');
}

.mail {
    background-image: url('/public/white_letter.png');
}

</style>