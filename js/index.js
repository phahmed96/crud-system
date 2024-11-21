
var ProductName=document.getElementById('ProductName');
var ProductPrice=document.getElementById('ProductPrice');
var ProductDes=document.getElementById('ProductDes');
var ProductCategory=document.getElementById('ProductCategory');
var ProductImg=document.getElementById('ProductImg');






 
var productContainer; 


if(localStorage.getItem('product')==null)
{
  productContainer=[]
}
else{
  productContainer=JSON.parse(localStorage.getItem('product'))
  
  displayData()
}






function addProduct()
{
  console.log();

   var product={
    code:ProductName.value,
    price:ProductPrice.value,
    cat:ProductCategory.value,
    des:ProductDes.value,
    img:`img/${ProductImg.files[0].name}`,
   }


   productContainer.push(product)
   localStorage.setItem('product',JSON.stringify(productContainer))
    
   console.log(productContainer);
   displayData()
   clearForm()



}



function clearForm()
{
    ProductName.value=null;
    ProductPrice.value=null;
    ProductCategory.value=null;
    ProductDes.value=null;
    ProductImg.files[0].name=null;

}




function displayData()
{
    var cartouna='';
     for(var i=0;i<productContainer.length;i++)
    {
        
        cartouna+=`<div class="col-md-3">
        <img src="${productContainer[i].img}" alt="">
        <h2 class="h4">ProductName : <span class="fs-6 text-danger">${productContainer[i].code}</span></h2>
        <h2 class="h4">ProductPrice : <span class="fs-6 text-danger">${productContainer[i].price}</span></h2>
        <h2 class="h4">ProductDes : <span class="fs-6 text-danger">${productContainer[i].des}</span></h2>
        <h2 class="h4">ProductCategory : <span class="fs-6 text-danger">${productContainer[i].cat}</span></h2>
        <button onclick="deleteProduct(${i})" type="button" class="btn btn-danger">Delete</button>
        <button type="button" class="btn btn-warning">Update</button>
      </div>`;
     }
  
   document.getElementById('demo').innerHTML=cartouna;
}

function deleteProduct(index)

{
  productContainer.splice(index,1)
  displayData()
  localStorage.setItem('product',JSON.stringify(productContainer))

 }

 function searchproduct()
 {
  var searchproduct=document.getElementById('searchproduct');
  var cartouna='';



   for(i=0;i<productContainer.length;i++){
    if(productContainer[i].code.toLowerCase().includes(searchproduct.value.toLowerCase())==true)
      {
       
        cartouna+=`<div class="col-md-3">
        <img src="${productContainer[i].img}" alt="">
        <h2 class="h4">ProductName : <span class="fs-6 text-danger">${productContainer[i].code}</span></h2>
        <h2 class="h4">ProductPrice : <span class="fs-6 text-danger">${productContainer[i].price}</span></h2>
        <h2 class="h4">ProductDes : <span class="fs-6 text-danger">${productContainer[i].des}</span></h2>
        <h2 class="h4">ProductCategory : <span class="fs-6 text-danger">${productContainer[i].cat}</span></h2>
        <button onclick="deleteProduct(${i})" type="button" class="btn btn-danger">Delete</button>
        <button type="button" class="btn btn-warning">Update</button>
      </div>`;
      

      }
      
   }
   document.getElementById('demo').innerHTML=cartouna;
 }

 function validationProduct(element){


  var regex={
ProductName:/[A-Z][a-z]{3,8}$/,
ProductPrice:/[1-9][0-9][0-9]/,
ProductDes:/.{5,9}/,
ProductCategory:/(TV|Mobile|Screen)/,
  }
  

 if(regex[element.id].test(element.value)){
console.log('matched');
element.classList.add('is-valid')
element.classList.remove('is-invalid')
element.nextElementSibling.classList.replace('d-block','d-none')
 }
else{
  console.log('not matched');
  element.classList.add('is-invalid')
  element.classList.remove('is-valid')
  element.nextElementSibling.classList.replace('d-none','d-block')



}

 }