import PropTypes from 'prop-types';
    
const Books = (props) => {
    // console.log(props);
    const {articleStyles, title, author, image, children,id, findBooks} = props;
    console.log(props);
    const displayTitle = () => {
       
       alert(`this is title ${title}`)
    };


    return (
        
        <article className={articleStyles}>
            <img className=" w-[200px] h-[50px] md:w-[300px] md:h-[200px]" src={image} alt="The End of Everything: How Wars Descend into Annihilation" />
            <h2 className="font-bold text-center mt-3">{title}</h2>
            <p className="mt-3 font-light text-sm text-[#273c75]">{author.toUpperCase()}</p>
            {children}
            <h1>{id}</h1>

            {/* this call back function of props is not working */}
            {/* <button onClick={findBooks(id)} className='bg-green-400 mt-2 uppercase rounded-sm text-white p-1 text-xs'>Display Title</button> */}

            {/* Use this method...... */}
            <button onClick={() => findBooks(id)} className='bg-green-400 mt-2 uppercase rounded-sm text-white p-1 text-xs'>Display Title</button>
        </article>
    );
}




export default Books;