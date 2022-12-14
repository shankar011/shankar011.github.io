const data = [

    {
        id: 1,
        name: "Bentaley-Belt",
        img: "./images/watch1.png",
        price:74,
        cat: "Dress",
    },
    {
        id: 11,
        name: "Rolex Gold Addition",
        img: "./images/watch2.png",
        price: 101,
        cat: "Party"
    },
    {
        id: 2,
        name: "Apple Smart Watch",
        img: "./images/watch3.png",
        price: 121,
        cat: "Sessional"
    },
    {
        id: 2,
        name: "Apple Smart Watch",
        img: "./images/watch3.png",
        price: 121,
        cat: "Sport"
    },
    {
        id: 3,
        name: "Catrier",
        img: "./images/watch4.png",
        price: 77,
        cat: "Luxury",
    },
    {
        id: 4,
        name: "Titan",
        img: "./images/watch5.png",
        price: 65,
        cat: "Sport"
    },
    {
        id: 5,
        name: "IWC",
        img: "./images/watch6.png",
        price: 121,
        cat: "Casual"
    },
]

const productsContainer = document.querySelector(".products")
const searchInput = document.querySelector(".search")
const categoriesContainer = document.querySelector(".cats")
const priceRange = document.querySelector(".priceRange")
const priceValue = document.querySelector(".priceValue")

const displayProducts = (filterProduct) =>{
    productsContainer.innerHTML = filterProduct.map(product=>
        `
        <div class="product">
                   <img src="${product.img}" />
                   <span>${product.name}</span>
                   <span>${product.price}</span>
        </div>
        `
        )
}

displayProducts(data);  

searchInput.addEventListener("keyup",(e)=>{
   const value = e.target.value.toLowerCase();
   if (value){
    displayProducts (data.filter(item=> item.name.toLowerCase().indexOf(value) !== -1))
   }else{
    displayProducts(data);
   }

});

const setCategories = () =>{
    const allCats = data.map((item) => item.cat);
    const categories =["All",...allCats.filter((item,i)=>{
        return allCats.indexOf(item) == i;
    })] ;

    categoriesContainer.innerHTML = categories.map(cat=>
        `
        <span class="cat">${cat}</span>
        `
        ).join("");

        categoriesContainer.addEventListener("click",(e) =>{
            const selectedCat = e.target.textContent;

            selectedCat ==="All"? displayProducts(data): displayProducts(data.filter(item=> item.cat == selectedCat
                ))
        })
};
const setPrices=  ()=>{
const priceList = data.map((item)=>item.price);
const minPrice=Math.min(...priceList)
const maxPrice=Math.max(...priceList)

priceRange.min = minPrice
priceRange.max = maxPrice
priceRange.value=maxPrice

priceValue.textContent = "$" + maxPrice
priceRange.addEventListener("input",(e)=>{
    priceValue.textContent = "$" + e.target.value
    displayProducts(data.filter(item=>item.price<=e.target.value))
})

}
setPrices();
setCategories();