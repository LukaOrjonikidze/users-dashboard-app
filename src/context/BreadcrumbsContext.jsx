import React from 'react'

const BreadcrumbsContext = React.createContext({
    users: [],
    onAdd: (user) => {},
});


export default BreadcrumbsContext