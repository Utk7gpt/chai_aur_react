import React from 'react'

const UserContext = React.createContext()

export default UserContext; // usercontext is a component which has two components provider and consumer. provider is used to provide the data to the consumer and consumer is used to consume the data provided by the provider.


// Key takeaway — the flow is:
// createContext → Provider (holds state in App) → any child calls useContext to read or update it