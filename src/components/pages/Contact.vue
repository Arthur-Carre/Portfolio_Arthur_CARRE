<template>
    <div class="background">

        <div class="contact_info">
            <div class="info_content">
                <div class="info_label font_white_3">CONTACT</div>
                <div class="info_title font_white_0">Travaillons<br>ensemble.</div>
                <div class="socials">
                    <a href="https://www.linkedin.com/in/arthur-carr%C3%A9-ba63483b3/" target="_blank" class="social_link font_white_2">LinkedIn</a>
                    <a href="https://github.com/Arthur-carre" target="_blank" class="social_link font_white_2">GitHub</a>
                    <a href="mailto:arthur.carre@epitech.eu" class="social_link font_white_2">arthur.carre@epitech.eu</a>
                </div>
                <a href="/CV_Arthur_CARRE.pdf" download class="cv_btn font_white_0">Télécharger mon CV</a>
            </div>
        </div>

        <div class="contact_form">
            <form action="https://formspree.io/f/mqewrjjq" method="POST">
                <div class="form_title font_white_3">FORMULAIRE DE CONTACT</div>
                <input type="text" name="nom" placeholder="Votre nom" />
                <input type="email" name="email" placeholder="Votre email" />
                <textarea name="message" placeholder="Votre message"></textarea>
                <button type="submit">ENVOYER</button>
            </form>
        </div>

    </div>
</template>

<script setup>
</script>

<style scoped>
.background {
    min-width: 87.5vw;
    max-width: 87.5vw;
    min-height: 90vh;
    max-height: 90vh;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: row;
}

.contact_info {
    width: 40%;
    height: 90vh;
    
    display: flex;
    align-items: center;
    padding: 0 4vw;
    box-sizing: border-box;
    position: sticky;
    top: 0;
}

.info_content {
    display: flex;
    flex-direction: column;
    gap: 3vh;
}

.info_label {
    font-family: 'Nunito', sans-serif;
    font-size: 0.8vw;
    letter-spacing: 0.3vw;
    margin: 0;
}

.info_title {
    font-family: 'Rubik Dirt', sans-serif;
    font-size: 4.5vw;
    line-height: 1.1;
    margin: 0;
}

.socials {
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
}

.social_link {
    font-family: 'Nunito', sans-serif;
    font-size: 1vw;
    text-decoration: none;
    border-bottom: 0.1vh solid rgb(40, 40, 40);
    padding-bottom: 1.5vh;
}

.social_link:hover {
    color: rgb(0, 0, 255);
    border-color: rgb(0, 0, 255);
}

.cv_btn {
    display: inline-block;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9vw;
    font-weight: 900;
    text-decoration: none;
    border: 0.1vh solid rgb(255, 255, 255);
    padding: 1.5vh 2vw;
    width: fit-content;
}

.cv_btn:hover {
    color: rgb(0, 0, 255);
    border-color: rgb(0, 0, 255);
}

.contact_form {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8vh 5vw;
    box-sizing: border-box;
}

form {
    all: unset;
    display: flex;
    flex-direction: column;
    gap: 2vh;
    width: 100%;
}

.form_title {
    font-family: 'Nunito', sans-serif;
    font-size: 0.8vw;
    letter-spacing: 0.3vw;
    margin: 0 0 2vh;
}

input, textarea {
    background-color: transparent;
    border: none;
    border-bottom: 0.1vh solid rgb(50, 50, 50);
    outline: none;
    padding: 1.5vh 0;
    color: rgb(255, 255, 255);
    font-family: 'Nunito', sans-serif;
    font-size: 1vw;
    width: 100%;
    box-sizing: border-box;
}

input:focus, textarea:focus {
    border-bottom: 0.1vh solid rgb(0, 0, 255);
}

textarea {
    height: 20vh;
    resize: none;
}

button {
    background-color: transparent;
    border: 0.1vh solid rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    font-family: 'Nunito', sans-serif;
    font-size: 0.9vw;
    font-weight: 900;
    padding: 1.5vh 3vw;
    cursor: pointer;
    width: fit-content;
    margin-top: 2vh;
    outline: none;
}

button:hover {
    color: rgb(0, 0, 255);
    border-color: rgb(0, 0, 255);
}

@media (max-width: 768px) {
    .background {
        min-width: 100vw;
        max-width: 100vw;
        min-height: auto;
        max-height: none;
        flex-direction: column;
        padding-bottom: 8vh;
    }

    .contact_info {
        width: 100%;
        height: auto;
        position: static;
        padding: 6vh 6vw;
    }

    .info_title {
        font-size: 10vw;
    }

    .info_label {
        font-size: 3vw;
    }

    .social_link {
        font-size: 3.5vw;
    }

    .cv_btn {
        font-size: 3vw;
    }

    .contact_form {
        width: 100%;
        padding: 4vh 6vw;
    }

    .form_title {
        font-size: 3vw;
    }

    input, textarea {
        font-size: 3.5vw;
    }

    button {
        font-size: 3.5vw;
    }
}
</style>