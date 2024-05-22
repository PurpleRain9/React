import ChildLists from "./ChildLists";


const fruits = [{id:1, name:'apple', price: 100}, {id:2, name:'banana', price: 200}, {id:3, name:'orange', price: 300}, {id:4, name:'dragon-fruit', price: 400}, {id:5, name:'mango', price: 500}, {id:6, name:'coconut', price: 600}, {id:7, name:'strawberry', price: 700}, {id:8, name:'grape', price: 800}, {id:9, name:'pineapple', price: 900}];
const vagetables = [{id:1, name:'apple', price: 100}, {id:2, name:'banana', price: 200}, {id:3, name:'orange', price: 300}, {id:4, name:'dragon-fruit', price: 400}, {id:5, name:'mango', price: 500}, {id:6, name:'coconut', price: 600}, {id:7, name:'strawberry', price: 700}, {id:8, name:'grape', price: 800}, {id:9, name:'pineapple', price: 900}]
// Array of Sorting
// fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICALLY;
// fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICALLY;
// fruits.sort((a, b) => a.price - b.price); //Sorting Price ;
// fruits.sort((a, b) => b.price - a.price); // Reverse Sorting Price ;




// Array of Filter
// const lowPriceFruits = fruits.filter(fruit => fruit.price >= 500);
// const lowPriceFruits = fruits.filter(fruit => fruit.price <= 500);


// Array of map
// const fruitList = lowPriceFruits.map((fruit) => <li key={fruit.id}>{fruit.id}. {fruit.name + ' ' +'သစ်သီး' + ' : ' + fruit.price + '$'}</li>);



function Lists () {
    return (
       <>
         {fruits.length > 0 ? <ChildLists items={fruits} category='Fruits' /> : null}
         {/* <hr /> */}
        {fruits.length > 0 ?  <ChildLists items = {vagetables} category='Vagetables'/> : null}
       </>
        // <ul className="order-list unordered-list">{ fruitList }</ul>
    )
}
export default Lists;
