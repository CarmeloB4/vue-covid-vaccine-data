<template>
<div id="home">
  <h2>Dati aggiornati campagna Vaccinazione Italia</h2>
  <h3>Dati complessivi</h3>
</div>
<div id="dashboard">
    <button @click="getDataSummary">fo</button>
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
methods: {
  getDataSummary() {
      fetch(this.url)
      .then(res => {
          return res.json()
      })
      .then(this.setResult)
  },
  setResult(results) {
      this.data = results.data.map((vcc) => vcc.dosi_somministrate);
      
      console.log(this.data)
  }
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