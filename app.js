"use strict";
$(document).ready(function () {


});



    





// $('.btn').on('click', function() {
//     const inputVal = $('input[type="text"]').val().trim();
//     const $List = $('#list');
    
//     if (inputVal === "") {
//         console.log("Please enter something!");
//         return;
//     }
    

//     $List.append(`<li>${inputVal}</li>`);
//     $('input[type="text"]').val("");
// });




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
  


// 11111111111 , 22222222

// $(`.btn`).click(function() {
//   const inputVal = $(`input`).val().trim();
//   const $List = $(`#list`);

//   if (inputVal === "") {
//     console.log("Please enter something!");
//     return;
//   }

//   const num = Number.parseInt(inputVal);
//   if (!Number.isNaN(num)) {
//     if (num <= 0) {
//       $List.append("<li>Please enter a positive number!</li>");
//     } else {
//       for (let i = 0; i < num; i++) {
//         $List.append(`<li>${num}</li>`); 
//       }
//     }
//   } else {
//     $List.append(`<li>${inputVal}</li>`);
//   }

//   $(`input`).val("");
// });


// 5555555 , 666666

// $(`.btn`).click(function() {
//   const inputVal = $(`input`).val().trim();
//   const $List = $(`#list`);

//   if (inputVal === "") {
//     console.log("Please enter something!");
//     return;
//   }

//   const num = Number.parseInt(inputVal);
//   if (!Number.isNaN(num)) {
//     if (num <= 0) {
//       $List.append("<li>Please enter a positive number!</li>");
//     } else {
//         $List.append(`<li>${num}</li>`); 
//     }
//   } else {
//     $List.append(`<li>${inputVal}</li>`);
//   }

//   $(`input`).val("");
// });



// 333333

// $(`.btn`).click(function() {
//   const inputVal = $(`input`).val().trim();
//   const $List = $(`#list`);

//   if (inputVal === "") {
//     console.log("Please enter something!");
//     return;
//   }

//   const num = Number.parseInt(inputVal);
//   if (!Number.isNaN(num)) {
//     if (num <= 0) {
//       $List.append("<li>Please enter a positive number!</li>");
//     } else {
//         $List.append(`<li>${num}</li>`); 
//     }
//   } else {
//     $List.append(`<li>${inputVal}</li>`);
//   }

//   $(`input`).val("");
// });

// ve _main.sass da ul padding verririk 220px. li-ye display: block text-align:center 

// 44444

//  $(`.btn`).click(function() {
//   const inputVal = $(`input`).val().trim();
//   const $List = $(`#list`);

//   if (inputVal === "") {
//     console.log("Please enter something!");
//     return;
//   }

  
//   if (/\d/.test(inputVal) && /[a-zA-ZəöüçşğƏÖÜÇŞĞ]/.test(inputVal)) {
//     $List.append(`<li>${inputVal}</li>`);
//   } 
 
//   else {
//     const num = Number(inputVal);
//     if (!isNaN(num)) {
//       if (num <= 0) {
//         $List.append("<li>Please enter a positive number!</li>");
//       } else {
//         $List.append(`<li>${num}</li>`);
//       }
//     } 
    
//     else {
//       $List.append(`<li>${inputVal}</li>`);
//     }
//   }

//   $(`input`).val("").focus();