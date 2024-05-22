import PropsTypes from 'prop-types';
function ChildLists (props) {
    const itemLists = props.items;
    const category = props.category;
    const fruitList = itemLists.map((fruit) => <li key={fruit.id}>{fruit.id}. {fruit.name + ' ' +'သစ်သီး' + ' : ' + fruit.price + '$'}</li>);
    return (
       <>
        <div className="mb-10 text-center">
                <h1 className="text-2xl font-bold bg-green-400 leading-3 border h-20 flex items-center justify-center uppercase">{category}</h1>
                <ul className="bg-gray-300 py-6">
                    {fruitList}
                </ul>
                <hr />
        </div>
       </>
    )
}
ChildLists.PropsTypes = {
    category: PropsTypes.string, 
    // items: PropsTypes.array,
    items: PropsTypes.arrayOf(PropsTypes.shape({
        id: PropsTypes.number,
        name: PropsTypes.string,
        price: PropsTypes.number,
    }))
}

// ChildLists.defaultProps = {
//     category: 'Category',
//     items: [{id:1, name:'apple', price: 100}, {id:2, name:'banana', price: 200}],
// }

export default ChildLists;

