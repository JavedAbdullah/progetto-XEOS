

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
    let count = 0;  
    let assex = [];
    let assey = [];
    let lableName = "xxy";
    for(let i=1;i<array_of_title.length;i++){
      for(let j=0;j<10;j++){
          assex[j] = results.data[j][i];

         let  milliseconds = results.data[j][0] * 1000 //1575909015000
         

          let dateObject = new Date(milliseconds)
          let humanDateFormat = dateObject.toLocaleString()
          
          assey[j] = humanDateFormat.slice(11);
          
          // console.log(assey)

      }
     // console.log(array_of_title[i])
     // console.log(assex.slice(1))
      console.log(assey.slice(1))
      count = 0;
    }
    charit(assex.slice(1),assey.slice(1),array_of_title[3])

    }
  });
});





// let x = [1,2,3,45,555]
// let y = [23,43,1,32,43]

function charit(x,y,labelName){
let ctx = document.getElementById('chart').getContext('2d');
//let ctxFinal = ctx.fillRect(0, 0, 80, 100);
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: y,
        datasets: [{
            label: labelName,
            data: x,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',

            borderWidth: 2
        }]
    },
   
});
}


// const unixTimestamp = 1575909015
// const milliseconds = 1575909015 * 1000 // 1575909015000

// const dateObject = new Date(milliseconds)
// const humanDateFormat = dateObject.toLocaleString()
// console.log(humanDateFormat.slice(11))
// console.log(dateObject.toLocaleString("en-US", {hour: "numeric"}))
