import {useState, useEffect} from 'react';

import reteteMatched from './../backend/bazaReteteMatched.js';
import CookieService from '../backend/CookieService';
import {retete, reteteVegani} from '../backend/bazaRetete';
import {Button} from '@mui/material';
import {useHistory} from 'react-router-dom';

const RecipePage = () => {

    const history = useHistory();
    console.log("aici din RecipePage");
    console.log(reteteMatched);

    const [type, setType] = useState("");

    function getUrl() {
        let url = window.location.href;
        let first = url.split("/");
        console.log(first[4]);
        if (first[4] === "Vegani") {
            setType("Vegani");
        } else {
            setType("NoVegani");
        }
    }

    const [idReteta, setIdRet] = useState("");

    useEffect(() => {
        getUrl();
        setIdRet(CookieService.get('output_' + type));
    }, [type, idReteta])


    function MapRecipe() {
        console.log("maprecipe");
        console.log(idReteta);
        console.log(reteteVegani);
        if (type === "Vegani") {
            return reteteVegani.map((item, index) => (
                <div key={index}>
                    {idReteta === item.id && (
                        <div
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
                            <img src={item.Imagine} alt="img"/>
                            <p>Nume:</p>
                            <p>{item.NumeReteta}</p>
                            <p>Ingrediente:</p>
                            <p>{item.Descriere}</p>
                            <p>Prepare:</p>
                            <p>{item.ModPreparare}</p>
                        </div>
                    )}
                </div>
            ));
        } else {
            return retete.map((item, index) => (
                <div key={index}>
                    {idReteta === item.id && (
                        <div
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
                            <img src={item.Imagine} alt="img"/>
                            <p>Nume:</p>
                            <p>{item.NumeReteta}</p>
                            <p>Ingrediente:</p>
                            <p>{item.Descriere}</p>
                            <p>Prepare:</p>
                            <p>{item.ModPreparare}</p>
                        </div>
                    )}
                </div>
            ));
        }

    }

    function GoBackToHome() {
        history.push("/");
    }

    return (
        <div>
            {MapRecipe()}

            <Button variant="outlined"
                    style={{
                        position: 'absolute',
                        top: '80rem',
                        left: '43vw',
                        background: '#FFFFFF',
                        borderRadius: '1rem',
                        color: '#08484A',
                        borderColor: '#08484A',
                    }}
                    onClick={GoBackToHome}
            >
                Go Home
            </Button>
        </div>
    );
};

export default RecipePage;