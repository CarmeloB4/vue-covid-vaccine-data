<template>
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
name: 'Young',
data() {
    return {
        url: 'https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/anagrafica-vaccini-summary-latest.json',
        data: {}
    }
},
mounted() {
      fetch(this.url)
      .then(res => {
          return res.json()
      })
      .then((result) => this.data = result.data.filter((x) => x.index < 3).map((x) => x.totale).reduce(((accumulator, currentValue) => accumulator + currentValue)))
      
  }
}
</script>

<style>
#dashboard {
    padding-top: 100px;
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
</style>