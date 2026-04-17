import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider


// Wraps the whole App - Holds the state and functions which can be used by any component within the app. It is a higher order component which is used to wrap the whole app and provide the context to all the components within the app.