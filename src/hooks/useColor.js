import { useState, useEffect, useCallback, useContext } from "react";
import { generateDegColor, randomColor } from "../helpers/generateColors";
import { ContextColors } from '../context/colorsContext';
import shortid from "shortid";

function useColors(type) {
  const [ colorResult, setColor ] = useState({});
  const [ existColor, setExistColor ] = useState(null);
  const { colors, addColor } = useContext(ContextColors); 

  useEffect(() => {
    setColor({
      id: shortid(),
      color: type === "deg" ? generateDegColor() : randomColor(),
    });
  }, [type]);

  const generateColors = useCallback(() => {
    setColor({
      id: shortid(),
      color: type === "deg" ? generateDegColor() : randomColor(),
    });
  }, [type]);


  function saveColor() {
    let idColors = colors[type].find(color => color.id === colorResult.id);
   
    if(!idColors){
      addColor(colorResult, type);
    }else {
      setExistColor(true);

      setTimeout(()=> {
        setExistColor(prevValue=> !prevValue);
      }, 2500)
    }
  }

  return { colorResult, generateColors, colors, existColor, saveColor };
}

export default useColors;
