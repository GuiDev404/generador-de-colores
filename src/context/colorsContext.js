import React, { useState } from 'react';

const ContextColors = React.createContext([]);

function ContextProvider ({children}) {
  const [ colors, setColors ] = useState({ simple: [],  deg: [] });

  function addColor (color, colorType) {

    if(colorType === 'simple'){
      setColors({ 
        simple: [...colors.simple, color] ,
        deg: colors.deg, 
      }); 
    } else {
      setColors({
        simple: colors.simple,
        deg: [...colors.deg, color], 
      })
    }
  }

  return <ContextColors.Provider value={{ colors, addColor }}>
    {children}
  </ContextColors.Provider>
}

export {
  ContextColors,
  ContextProvider
}