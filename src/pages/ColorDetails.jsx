import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { ContextColors } from '../context/colorsContext';
import Emoji from '../components/Emoji';
import Title from '../components/Title';

import copyToClipboard from '../helpers/copyToClipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ColorSection = styled.article`
  width: 100%;
  height: 400px;
  margin: 15px 0;
  border-radius: var(--sm-radius);

  & h2 {
    color: var(--light-color);
    padding: 10px;
  }
`;

const CopySection = styled.article`
  & code {
    font-size: 20px;
    font-family: var(--main-font) !important;
  }

  & pre {
    background: var(--dark-flour-green-color);
    color: var(--light-color);
    font-family: var(--main-font) !important;
    font-size: 15px;
    line-height: 15px;
    padding: 10px;
    margin-top: 10px;
    border-radius: var(--sm-radius);
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    
    & span {
      cursor: pointer;
    }
  }
`;

const ColorSelected = () => {
  const [ color, setTempColor ] = useState();
  const { id } = useParams();
  const { colors } = useContext(ContextColors);

  useEffect(()=> {
    const colorSelected = [...colors.deg, ...colors.simple].find(color=> color.id === id);
    if(colorSelected.color){
      setTempColor(colorSelected.color)
    }
  }, [id, colors])


  async function notify(typeColor, color) {
    let msg = await copyToClipboard(typeColor, color);
    toast.info(msg);
  }

  return (
    <main>
      <ColorSection style={{ background: color }} className="styleColorSelect">
        <Title content={color ? color : ''} side={'left'} fontSize={25}/>
      </ColorSection>

      <CopySection>
        <code>
          Copy CSS code:

          {color && color.startsWith("linear") ? (
            <pre onClick={() => notify("deg", color)}>
              <b>
                {`background: ${color.split(",")[1].trim()};
                  \nbackground: -webkit-${color};
                  \nbackground: ${color};`}
              </b>
              <Emoji emoji="📋" />
            </pre>
          ) : (
            <pre onClick={()=> notify('simple', color)}>
              <b> {`background: ${color};`} </b>
              <Emoji emoji="📋" />
            </pre>
          )}
        </code>

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </CopySection>
    </main>
  );
}

export default ColorSelected

