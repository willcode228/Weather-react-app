import { useContext } from "react"
import { Context } from "../Context/Context"

const consumer = (Component) => {

    const ConsumerContainer = (props) => {
        const state = useContext(Context);

        return <Component 
                {...props} 
                data={state.data} 
                language={state.language}/>
    }

    return ConsumerContainer;
}

export default consumer;