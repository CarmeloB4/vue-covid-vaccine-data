<template>
<div id="navbar">
  <div id="logo">
    <div id="logo-image">
      <router-link to="Home">
        <img src="..\assets\logo.png">
      </router-link>
    </div>
    <div id="logo-title">
      <h1>Campagna Vaccini</h1>
    </div>
  </div>
</div>  
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style>
#navbar {
  width:100%;
  height: 10%;
  background-color: #49bd96;
  position: fixed;
  top: 0;
}

#logo {
  position: fixed;
  display: inline-block;
}

#logo-image {
  position: fixed;
  left: 0;
  border-radius: 50%;
  padding: 0.3%;
}


img {
  width: 70px;
}

#logo-title {
  color: white;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: initial;
  position: fixed;
  left: 5vw;
  padding-left: 1%;
}

@media only screen and (max-width: 768px) {
  
  #logo-title {
    left: 18vw;
    font-size: medium;
  }

}
</style>