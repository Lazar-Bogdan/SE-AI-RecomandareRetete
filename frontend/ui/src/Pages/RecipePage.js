import { useState, useEffect } from 'react';

import answers from './../backend/bazaRaspunsIntrebari';
import retete from './../backend/bazaRetete';
import reteteMatched from './../backend/bazaReteteMatched.js';
import { addToRetete } from '../backend/addOnJson';


const RecipePage = () => {
    const [recipe, setRecipe] = useState([]);


    console.log("aici din RecipePage");
    console.log(reteteMatched);


    function MapRecipe()
    {
        return reteteMatched.map((item, index) => (
            <div 
                key={item.id}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '1rem',
                    padding: '0.5rem',
                    border: '1px solid #08484A',
                    margin: '5rem 6rem',
                }}
            >

                <img src={item.IMG_}/>
                <p>
                    Nume:
                </p>
                <p>
                    {item.Nume_}
                </p>
                <p>
                    Ingrediente:
                </p>
                <p>
                    {item.Ingrediente_}
                </p>
                <p>
                    Prepare:
                </p>
                <p>
                    {item.Prepare_}
                </p>

            </div>
            ));
    }

    return(
       <div>
           {MapRecipe()}
       </div>
    );
};

export default RecipePage;