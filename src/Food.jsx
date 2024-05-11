function Food() {
    const foodOne = 'Apple';
    const foodTwo = 'Banana';
    const foodThree = 'Cherry';
    return (
        <ul className="">
            <li>{foodOne}</li>
            <li>{foodTwo}</li>
            <li>{foodThree.toUpperCase()}</li>
        </ul>
    );
};
export default Food;