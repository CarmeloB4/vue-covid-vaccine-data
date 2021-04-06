<template>
<div id="general">
<div id="dashboard-old">
<div id="logo-vcc-old">
    <img src="..\assets\logo-vcc.png" alt="Logo somministrazioni">
</div>    
<h2>Totale somministrazioni</h2>
<div id="data">
<h2>{{data}}</h2>
</div>
</div>
</div>
</template>

<script>
export default {
name: 'Old',
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
      .then((result) => this.data = result.data.filter((x) => x.index > 5).map((x) => x.totale).reduce(((accumulator, currentValue) => accumulator + currentValue)))
      
  }
}
</script>

<style>
#general {
 padding-top: 2%;
}

#dashboard-old {
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

#logo-vcc-old {
  position: absolute;
  top: 50%;
  left: 10%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

#logo-vcc-old img {
    width: 50px;
    height: 50px;
}

#data {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

@media only screen and (max-width: 768px) {
    
#dashboard-old {
    margin-top: 10%;
    width: 100%;
}

#logo-vcc-old{
  top: 70%;
  left: 15%;
}

}
</style>