import PropTypes from 'prop-types';

function ConditionalChilds(props) {

    const welcomeBack = <p className="text-center bg-green-400 text-xl uppercase font-bold text-white">Welcome! {props.name}</p>;
    const loggedPropts = <p className="text-center bg-red-400 text-xl font-bold text-white uppercase">Please sign up!</p>;
    return (
        props.isLoggedIn ? welcomeBack : loggedPropts
    );

   
    
}

 //***** different ways to define props; ******//

 //  PorpsTypes in this component;
ConditionalChilds.PropTypes = {
    isLoggedIn: PropTypes.bool,
    name: PropTypes.string,

}
// if props of isLoggedIn is not passed, it will take the default value of false;
// if props of name is not passed, it will take the default value of 'Guest';
// DefaultProps in this component;
ConditionalChilds.defaultProps = {
    isLoggedIn: false,
    name: 'Guest',
}
export default ConditionalChilds;
