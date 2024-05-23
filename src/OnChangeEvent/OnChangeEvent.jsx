import React,{useState} from "react";

function OnChangeEventsComponent () {

    const [name, setName] = useState('');
    const [items, setItems] = useState(0);
    const [commant, setCommant] = useState('');
    const [shop, setShop] = useState('');


    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    
    const handleItemsChange = (e) => {
        setItems(e.target.value);

    }

    const handleCommantChange = (e) => {
        setCommant(e.target.value);
    }

    const handleDeleveryChange = (e) => {
        setShop(e.target.value);
    }
    return(<>
        <div className="flex flex-col justify-center items-center my-10">
           <div className="border border-black p-2">
                <input className="border h-10 p-2" placeholder="Enter Name" type="text" value={name} onChange={handleNameChange} />
                <p>Name:{name}</p>
           </div>

            <div className="border border-black p-2 mt-5" >
            <input className="border h-10 p-2" placeholder="Enter Items" type="number" value={items} onChange={handleItemsChange} />
                <p>Items:{items}</p>
            </div>

            <div className="border border-black p-2 mt-5" >
                <textarea className="border h-10 p-2" placeholder="Enter Commant" value={commant} onChange={handleCommantChange} />
                <p>Commant:{commant}</p>
            </div>

            <div className="border border-black p-2 mt-5">
                
                <label >
                    <input type="radio" checked={shop === 'Pick Up'} value="Pick Up" onChange={handleDeleveryChange}/>
                    Pick Up
                </label>
                <label >
                    <input type="radio" checked={shop === 'Delevery'} value="Delevery" onChange={handleDeleveryChange}/>
                   Delevery
                </label>

                <p>Shopping: {shop}</p>
            </div>
        </div>
    </>)
}

export default OnChangeEventsComponent;