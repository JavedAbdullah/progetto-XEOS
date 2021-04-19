import Chart from '/chart.js'

const csvFileInput = document.querySelector("#csvFileInput");

csvFileInput.addEventListener("change", (e) => {
  Papa.parse(csvFileInput.files[0], {
    delimiter: ",",
    skipEmptyLines: true,
    complete: (results) => {

     // console.log(results.data.slice(1));
    //console.log( results.data[0])
  //                       riga/colonna
    // console.log(results.data[0][0])
    // console.log(results.data[1][0])
    let array_of_element = results.data.slice(1)
    let array_of_title = results.data[0]
   
    // console.log( array_of_element.length)
    // console.log(array_of_title.length)
    //come contare gli elemnti nel array Javascript

    for(let i=0;i<array_of_title.length;i++){
      for(let j=0;j<10;j++){
        console.log(results.data[j][i])
      }
    }

    }
  });
});

const ctx = document.getElementById('my-chart').getContext('2d');
const chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45]
    }]
  },

  // Configuration options go here
  options: {}
  });
