
function NestComponents() {
    return (<>
        <Person />
        <Message />
    </>);
}

const Person = () => <h2>Jhon Doe</h2>;
const Message = () => {
    return <p>This is Message</p>;
}

export default NestComponents;