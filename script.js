let productsGrid = document.getElementById('products-grid');
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/radu-lect/test';
// https:github.com/radu-lect/test.git
//verificarea prin punerea in browser
// 'https://my-json-server.typicode.com/#nume/#proiect_nume'

xhr.open('GET', url+'/premiumProd');
xhr.responseType = 'json';
xhr.onload = function(){
	let products = xhr.response;
	//ce adaugam pe pagina
	productsGrid.innerHTML = null;
	products.forEach(p=>{
		productsArray.push(p);
		let pElem = document.createElement('div');
		pElem.classList.add('product');
		pElem.innerHTML=`
						<div id="photo-product-div">	
							<img class="product-photo" src='${p.photo_url}'>
						</div>	
							<h2 class="product-name">${p.name}</h2>
							
							<div id="product-descriere">
							<p class='product-price'><b>Price: </b>${p.price}</p>
						
							<p class='product-desc'><b>Description:</b>${p.description}</p>
							</div>
							<button   onclick="addProductToCart(${p.id});" class="btn_buy" >Buy</button>
							
						`;
					productsGrid.append(pElem);

	})
}
xhr.send();

