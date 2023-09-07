// declarando funcion
function getProductList(products){
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
    
        const formatPrice = product.price.toLocaleString();
    
        const list =
       `<div class="container">
          <div class="col d-flex flex-row align-items-center">
            <div class="col-1"><img src="${product.thumbnail}" id=image><div/>
           
              <div class="col">
                 <h3 class="price">${formatPrice}<h3/>
                 <p class="title">${product.title}<p/>
              </div>  
    
              <div class="col d-flex justify-content-end">
                 <p class="address">${product.address.state_name}</p>
              </div>
          </div>
        </div>`;
    
        listItems.push(list);
      }
      
      //document.querySelector('#app').innerHTML = `<ul>${listItems.join('')} </ul>`;
      window.onload = function() {
        var miDiv = document.getElementById("item-list");
        miDiv.innerHTML = `<ul>${listItems.join('')} </ul>`;
      };
      
}

