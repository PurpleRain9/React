
import Childs from "./Childs/Childs";

function Parents () {
    // const name = 'Jack Jack';
    // const age = 3;
    // const hobby = 'Playing Games';
    // const gender = 'Male';
    // const isStudent = false;
    const student = {
        name: 'Jack Jack',
        age: 3,
        hobby: 'Playing Games',
        gender: 'Male',
        isStudent: false,
    };
    const changeStudent = () => {
        student.isStudent = !student.isStudent;
        console.log(student.isStudent);
    }
    return ( 
    <>
        <h1>Parents</h1>
        <Childs name={student.name} age={student.age} hobby={student.hobby} gender={student.gender} isStudent={student.isStudent ? 'Yes' : 'No'}/>
        {/* <button onClick={changeStudent}>Change Student</button> */}
        {/* Different of Props and State */}
        {/* State is a data that is handled in the component */}
        {   
            /* Props
                *Props is a data that is passed from parent to child component 
                *Read only
                *It is not recommended to change the props directly in the child component
            */
        }
        {/* So this button is not working because the state is handled in the child component */}
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={changeStudent}>Change Student</button>
    </>
    )
}

export default Parents;