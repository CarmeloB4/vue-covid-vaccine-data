<template>
<div id="home">
  <h2>Dati aggiornati campagna Vaccinazione Italia</h2>
  <h3>Dati complessivi</h3>
</div>
<div id="dashboard">
<pre>{{data}}</pre>
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
    color: black;
}
</style>