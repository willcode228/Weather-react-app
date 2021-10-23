
const unit = (Component) => {
    const UnitContainer = (props) => {
        const fahrenheit = process.env.REACT_APP_FAHRENHEIT,
                celsius = process.env.REACT_APP_CELSIUS;

        return <Component {...props} 
                        unit={props.unit === 'imperial' ? fahrenheit : celsius}/>
    }

    UnitContainer.displayName = `UnitContainer(${Component.displayName || Component.name || 'Component'})`;

    return UnitContainer;
}
export default unit;