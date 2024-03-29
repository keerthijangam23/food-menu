let products = {
    data:[
        {
            foodName:"burger",
            id:1,
            category:"Breakfast",
            price:"100",
            image:"images/vegburger-breakfast.jpg",
            discription:"A veggie burger can have grains, beans, nuts, fungi like mushrooms, vegetables, spices, herbs & a binding ingredient like bread crumbs that are formed to patties. These veggie patties are loaded on to buns, topped with lettuce, onions, tomatoes, pickled vegetables & a special burger sauce."    
        },
        {
            foodName:"Classic Eggs Benedict",
            id:2,
            category:"Breakfast",
            price:"90",
            image:"images/eggbreakfast.jpg",
            discription:"popular brunch dish and makes a special treat any morning. Toasted English muffins are topped with rounds of cooked ham or Canadian bacon and poached eggs, then smothered in creamy hollandaise."
        },
        {
            foodName:"Croque Madame",
            id:3,
            category:"Breakfast",
            price:"150",
            image:"images/breadeggbreakfast.jpg",
            discription:"the dressed-up cheese toastie that's one of France's most popular exports. Take a grilled ham and cheese sandwich, add one fried egg, and pour some creamy bechamel sauce over the top. Voila, breakfast"
        },
        {
            foodName:"Pancake",
            id:4,
            category:"Breakfast",
            price:"170",
            image:"images/eggbreakfast.jpg",
            discription:"A pancake (or hotcake, griddlecake, or flapjack) is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread."
        },
        {
            foodName:"Chapathi-rolls",
            id:5,
            category:"Lunch",
            price:"150",
            image:"images/chapathi-rolls-lunch.jpg",
            discription:"this simple veg roll recipe is an all-time favorite for kids.There is no potato or paneer used here and is made with simple veggies like cabbage,carrots and capsicum.The fillimg is made by sauteing the veggies in a chinese style on a high flame which lends that nice unique aroma."
        },
        {
            foodName:"Pappu-rice",
            id:6,
            category:"Lunch",
            price:"50",
            image:"images/pappu-rice-lunch.jpg",
            discription:" Almost in homes across South India, sambar is cooked at least once a week either as an accompaniment for breakfast staples like idli/dosa or as a main dish with rice. While that might be the most popular version of dal with a more intensive cooking process, there are numerous simple dals that are also cooked regularly. Nowhere more than Andhra where ingredients like spinach and tomato are combined cleverly with dal."
        },
        {
            foodName:"Pasta",
            id:7,
            category:"Lunch",
            price:"150",
            image:"images/pasta-lunch.jpg",
            discription:"Pasta, any of several starchy food preparations frequently associated with Italian cuisine and made from semolina, the granular product obtained from the endosperm of a type of wheat called durum, and containing a large proportion of gluten. Pasta is formed into ribbons, cords, tubes, and various special shapes"
            
        },
        {
            foodName:"Rice-vegsalad",
            id:8,
            category:"Lunch",
            price:"200",
            image:"images/rice-vegsalad-lunch.jpg",
            discription:" Rice salad is a delicious dish with rice, fresh veggies, and a delightful dressing. It is easy to prepare, excellent for meal prep, and one of the best recipes for picnics and potlucks, This recipe is inspired by Italian rice salad; it’s a fulfilling meal that is nutritious, light, crunchy, colorful, and refreshing."      
        },
        {
            foodName:"berry-vanila-sensation",
            id:9,
            category:"Shakes",
            price:"150",
            image:"images/berry-vanilla-sensation.webp",
            discription:"Healthy fruits like raspberries, strawberries and pineapple make berry vanilla sensation smoothie a delightful and revitalizing cool drink."
            
        },
        {
            foodName:"chocolate-chip-cookie",
            id:10,
            category:"Shakes",
            price:"150",
            image:"images/chocolate-chip-cookie-and-vanilla-ice-cream-shake.webp",
            discription:"Regular commercial chocolate is high in sugar and saturated fat content, depending on the kind you eat.In the recipes you'll find below, I avoid unhealthy ingredients as much as possible, while keeping the taste ultra-yummy!"   
            
        },
        {
            foodName:"classic-vanilla-milkshake",
            id:11,
            category:"Shakes",
            price:"150",
            image:"images/classic-vanilla-milkshake.webp",
            discription:"Black tea, blueberries, and almonds make for a sophisticated smoothie. Using tea as the base liquid adds a subtle fragrance, while almond milk, yogurt, and bananas provide creaminess."   
            
        },
        {
            foodName:"papaya-milkshake",
            id:12,
            category:"Shakes",
            price:"150",
            image:"images/papaya-milkshake.webp",
            discription:"Smooth and silky papaya shake prepared with this recipe is a perfect blend of ripe papaya, cold milk and honey. The suggested black pepper powder seasoning gives an extra aromatic punch and compliments the sweet smell of papaya. Having papaya milkshake in breakfast is a best way to get entire daily requirement of vitamin A, C and E, and antioxidants in a single go at the start of the day itself."   
            
        },
        {
            foodName:"super-healthy-greensmothie",
            id:13,
            category:"Shakes",
            price:"150",
            image:"images/super-healthy-green-smoothie-recipe.webp",
            discription:"Green smoothies are nutrient-rich blends of fruits and vegetables. They’ve become a popular way for people to meet their recommended daily intake of vitamins and minerals. Unlike juices, green smoothies retain the beneficial fiber content from whole foods.."     
        },
    ],
};

for (let i of products.data){
    //create Card
    let card = document.createElement("a");
    //card should have category and should stay hidden initially
    card.classList.add("card",i.category,"hide");
    card.setAttribute("id",i.id);
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //imag tag
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h2");
    name.classList.add("product-name");
    name.innerText = i.foodName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h3");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    //discription
    let foodDiscription = document.createElement("h5")
    foodDiscription.innerText = i.discription;
    container.appendChild(foodDiscription);

    card.appendChild(container);
    console.log(card);
    document.getElementById("products").appendChild(card);
    card.addEventListener("click",()=>{
        //get the id attribute value of the clicked card
        let foodId = card.getAttribute("id");
        //navigate to the detail.html page with product id
        window.location.href = "detail.html?id=" + foodId;
    });
}
  
    
//parameter passed from button (parameter same as catagory)
function filterProduct(value){
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        //check if value equals button innertText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
           button.classList.remove("active"); 
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on "all" button click
        if(value == "All"){
            element.classList.remove("hide");
        }
        else{
            //checks if element contain category class
            if(element.classList.contains(value)){
                //display element based on catagory
                element.classList.remove("hide");
            }
            else{
                //hide other elements
                element.classList.add("hide");
            }
        }

    });
}


//intially display all products
window.onload = ()=>{
    filterProduct("All");

};