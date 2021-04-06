<template>
<div id="home">
  <h2>Dati aggiornati campagna Vaccinazione Italia</h2>
<div id="dashboard">
<div id="logo-vcc">
    <img src="..\assets\logo-vcc.png" alt="Logo somministrazioni">
</div>    
<h2>Totale somministrazioni</h2>
<div id="data">
<h2>{{Intl.NumberFormat().format(data)}}</h2> 
</div>
</div>
<div id="nav">
    <h3>Guarda i dati per fasce di età</h3>
    <div id="young" class="nav-button">
        <router-link :to= "{ name: 'Young'}">16-39</router-link>
    </div>
    <div id="old" class="nav-button">
       <router-link :to= "{ name: 'Old'}">70-90+</router-link>
    </div>
    <div id="medium" class="nav-button">
       <router-link :to= "{ name: 'Medium' }">40-69</router-link>
    </div>
</div>
</div>
<div id="bottom">
<p><a href="https://github.com/italia/covid19-opendata-vaccini">Fonte dati</a></p>
</div>
</template>

<script>
export default {
name: 'Home',
data() {
    return {
        url: 'https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/vaccini-summary-latest.json',
        data: {},
        totalVaccine: {}
    }
},
mounted() {
      fetch(this.url)
      .then(res => {
          return res.json()
      })
      .then((result) =>  this.data = result.data.map((vcc) => vcc.dosi_somministrate).reduce(((accumulator, currentValue) => accumulator + currentValue)))
  }
}
</script>

<style>



#home {
    padding-top: 1%;
}

#dashboard {
    margin-top: 1%;
    padding: 1%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: rgb(90, 128, 253);
    color: white;
    position: relative;
    margin: auto;
    width: 50%;
    text-align: center;
}

#logo-vcc {
  position: absolute;
  top: 50%;
  left: 10%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

#logo-vcc img {
    width: 50px;
    height: 50px;
}

#data {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

#nav {
    margin-top:10vh;
    margin-left: 20vw;
    margin-right: 20vw;
}

#nav h3 {
    padding: 2%;
}

.nav-button {
    width: 100px;
    padding: 3%;
}

.nav-button img {
    width: 50px;
    height: 50px;
    float: left
}

.nav-button a:link {
    color:white;
    text-decoration: none;
}

.nav-button a:visited {
    color: white;
    text-decoration: none;
}

#young {
    float: left;
    background-color: cadetblue;
}

#medium {
    margin: 0 auto;
    background-color: chocolate;
}

#old {
    float: right;
    background-color: crimson;
}

#bottom {
    position: fixed;
    bottom: 10%;
    width: 100%;
}

@media only screen and (max-width: 768px) {
    
#dashboard {
    width: 100%;
}

#logo-vcc {
  top: 70%;
  left: 15%;
}

.nav-button {
    float: none;
    width: auto;
}

}

</style>