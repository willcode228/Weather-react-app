import { useContext } from "react"
import { Context } from "../Context/Context"

const consumer = (Component) => {

    const ConsumerContainer = (props) => {
        const value = useContext(Context);

        return <Component {...props} value={value}/>
    }

    return ConsumerContainer;
}

export default consumer;