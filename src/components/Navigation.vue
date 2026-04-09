<template>
    <div class="navigation">
        <div class="full_name">
            <div class="first_name">
                <div class="vertical">ARTHUR</div>
            </div>
            <div class="last_name">CARRE</div>
        </div>

        <div class="navigation_bar">
            <RouterLink to="/">Accueil</RouterLink>
            <RouterLink to="/frise">Frise</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap');

.navigation {
    background-image: url('/patch-02.png');
    background-size: cover;

    width: 10%;
    height: 100vh;
    position: sticky;
    top: 0;
}

.full_name {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 1);

    width: 210%;
    height: 12.5%;

    position: absolute;
    top: 5%;
    left: 20%;

    display: flex;
    flex-direction: row;
}

.first_name {
    background-color: rgb(255, 255, 255);
    width: 8%;
    height: 100%; 

    display: flex;
    align-items: center;
    justify-content: center;
}

.vertical {
    transform: rotate(-90deg);
    transform-origin: center;

    font-size: 1.8vw;

    font-family: 'Lilita One', sans-serif;
}

.last_name {
    background-color: rgb(57, 94, 112);
    color: rgb(255, 255, 255);

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 6.2vw;
    font-family: 'Lilita One', sans-serif;
    padding: 10px;
}

.navigation_bar {
    background-image: 
        linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent),
        url('/point.png');
    background-size: cover;

    width: 100%;
    height: 25%;

    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    color: rgb(255, 255, 255);
    font-size: 1.5vw;
    font-family: 'Lilita One', sans-serif;
    gap: 10%;
    padding-bottom: 20%;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  transition: transform 0.3s ease;
}

a:hover {
  transform: translateX(20%);
}
</style>