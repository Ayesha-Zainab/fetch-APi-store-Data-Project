fetch('https://fakestoreapi.com/products')
    .then((response) => {
        return response.json();
    }).then((data) => {
        data.forEach(function (ele) {
           var carddata=document.getElementById('data');
           carddata.innerHTML+=`<div class="card">
           <h2>price:${ele.price}</h2>
           <img src="${ele.image}" alt="">
           <h3>${ele.category}</h3>
           <p>${ele.title}</p>
       </div>`
         console.log(ele);

        })
    })