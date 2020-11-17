import React from 'react'

import useColor from '../hooks/useColor';

import Result from '../components/Result';
import ColorPreview from '../components/ColorPreview';
import Button from '../components/Button';
import Title from '../components/Title';
import Colores from '../components/Colores';

const ColorsDeg = () => {
  const { colorResult, generateColors, colors, existColor, saveColor } = useColor('deg');

  return (
    <main>
      <Title content="Colores Degradado" fontSize={35} />

      <Result>
        <div className="result_preview">
          <Button
            styles="btnGenerator"
            fn={generateColors}
            text="Generar Color Degradado"
            emoji="🎲"
          />
          {colorResult && (
            <ColorPreview color={colorResult.color}>
              <Button
                styles="addColor"
                text="Agregar Color"
                emoji="✅"
                fn={saveColor}
              />
            </ColorPreview>
          )}
          {existColor && <p> El colors {colorResult.color} ya existe! </p>}
        </div>

        <Colores typeColor="degColor" colores={colors.deg || []} isHomePreview={false}/>
      </Result>
    </main>
  );
}

export default ColorsDeg
