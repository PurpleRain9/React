
function ClickEvent () {
    let counter = 0;
    const increaseCounter = (name) => {
        console.log(name);
        if (counter < 3) {
            counter ++;
            console.log(counter , name + 'Clicked the Button');
        }else {
            counter --;
            console.log(counter , name + 'Clicked the Button');

        }
    }
    const changeBgColor = (e) => {
        console.log(e);
        e.target.classList.remove('bg-blue-600');
        e.target.textContent = 'Changed red button';
        e.target.classList.add('bg-red-400');
        
    }
   return(
    <>
        <button onClick={() => increaseCounter('Hein')} className=" bg-green-600 text-white py-3 px-3 mt-2 ml-2 rounded-md">Click Me</button>

        <button onClick={(e) => changeBgColor(e)} className=" bg-blue-600 text-white py-3 px-3 mt-2 ml-2 rounded-md">Click Me</button>
    </>
   );
}

export default ClickEvent;