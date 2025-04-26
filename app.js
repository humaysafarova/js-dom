"use strict";
$(document).ready(function() {
  $(`.btn`).click(function() {
    const inputVal = $(`input`).val().trim();
    const $List = $(`#list`);

    if (inputVal === "") {
      console.log("Please enter something!");
      return;
    }

    const num = Number.parseInt(inputVal);
    if (!Number.isNaN(num)) {
      if (num <= 0) {
        $List.append("<li>Please enter a positive number!</li>");
      } else {
        for (let i = 0; i < num; i++) {
          $List.append(`<li>${num}</li>`); 
        }
      }
    } else {
      $List.append(`<li>${inputVal}</li>`);
    }

    $(`input`).val("");
  });
});
    










// $('h2').click(function (e) {
//     e.preventDefault();
//     $('h2').html(1234);
// });


// $('.btn').click(function (e) { 
//     e.preventDefault();

//     let a = (a) => {
//         for (let i = 1; i <=a; i++) {
//             $('.col-md-12').append(`<h1>${i}</h1>`);
//         }
//     }
    // a($('input').val())
// });


// $(`.btn`).click(function (e) { 
//     e.preventDefault();
    
// });



// $(`.btn`).click(function (e) { 
//   e.preventDefault();
  
//   const inputVal = $('input').val().trim();
//   const $List = $('#list');

//   $List.empty();

//   if (inputVal == " ") {
//       console.log("Enter something!");
//       return;
//   }

//   const num = Number.parseInt(inputVal);
//   if(Number.isNaN(num)) {
//       return 0;
  
//     if(num <= 0) {
//       $List.append("<li>Please enter a positive number!</li>");
//     } else {
//       const repeatedNum = (num + " ").repeat(num).trim();
//       $List.append(`<li>${repeatedNum}</li>`);
//     }
//   } else { 
//       $List.append(`<li>${inputVal}</li>`);
//     }

//     $("#userInput").val("");

