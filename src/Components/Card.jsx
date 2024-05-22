function Card () {
    return (
       <div className="bg-white p-4 border rounded-md shadow-md max-w-[250px] flex flex-col items-center mx-2 my-2">
        <img className="rounded-full w-[100px] h-[100px] mb-4" src="https://via.placeholder.com/150x150" alt="Placeholder Image" />
        <h1 className="text-xl font-bold uppercase text-center mb-3">Card Title</h1>
        <p className="text-gray-500 text-center text-sm">I'm a react developer and I love to create web applications.</p>
        
       </div>
    );
}

export default Card;

