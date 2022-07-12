import React, { createContext, useState } from 'react';

const Context = createContext(0);

type Props = {

    width: number
    setWidth: () => {}
}

 const [ width, setWidth] = useState(0)

export default Context;