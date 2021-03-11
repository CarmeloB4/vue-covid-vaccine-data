<template>
<div id="home">
  <h2>Dati aggiornati campagna Vaccinazione Italia</h2>
</div>
<div id="dashboard">
<div id="logo-vcc">
    <img src="..\assets\logo-vcc.png" alt="Logo somministrazioni">
</div>    
<h2>Totale somministrazioni</h2>
<div id="data">
<h2>{{data}}</h2>
</div>
</div>
</template>

<script>
export default {
name: 'Home',
data() {
    return {
        url: 'https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/vaccini-summary-latest.json',
        data: {}
    }
},
mounted() {
      fetch(this.url)
      .then(res => {
          return res.json()
      })
      .then((result) => this.data = result.data.map((vcc) => vcc.dosi_somministrate).reduce(((accumulator, currentValue) => accumulator + currentValue)))
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
  float: left;
  padding: 2%;
  position: relative;
  height: 50%;
}

#logo-vcc img {
    width: 50px;
    height: 50px;
}

#data {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>