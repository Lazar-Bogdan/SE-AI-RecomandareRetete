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
                    {idReteta == item.id && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '1rem',
                                padding: '0.5rem',
                                border: '2px solid #08484A',
                                margin: '5rem 6rem',
                            }}
                        >
                            <img src={item.Imagine} alt="img" style={{borderRadius: '1rem'}}/>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p style={{ color: '#08484A', fontWeight: 700, fontSize: '1.5rem', display: 'flex', marginLeft: '1.5rem', marginTop: '-3rem' }}>{item.NumeReteta}</p>
                                <div style={{ color: '#08484A', fontWeight: 600}}>INGREDIENTS</div>
                                <p style={{ fontSize: '1.25rem' }}>{item.Descriere}</p>
                                <div style={{ color: '#08484A', fontWeight: 600}}>HOW TO</div>
                                <p style={{ margin: '1rem', fontSize: '1.25rem' }}>{item.ModPreparare}</p>
                            </div>
                        </div>
                    )}
                </div>
            ));
        } else {
            return retete.map((item, index) => (
                <div
                    key={index}>
                    {idReteta == item.id && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '1rem',
                                padding: '0.5rem',
                                border: '2px solid #08484A',
                                margin: '5rem 6rem',
                            }}
                        >
                            <img src={item.Imagine} alt="img" style={{borderRadius: '1rem'}}/>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p style={{ color: '#08484A', fontWeight: 700, fontSize: '1.5rem', display: 'flex', marginLeft: '1.5rem', marginTop: '-3rem' }}>{item.NumeReteta}</p>
                                <div style={{ color: '#08484A', fontWeight: 600}}>INGREDIENTS</div>
                                <p style={{ fontSize: '1.25rem' }}>{item.Descriere}</p>
                                <div style={{ color: '#08484A', fontWeight: 600}}>HOW TO</div>
                                <p style={{ margin: '1rem', fontSize: '1.25rem' }}>{item.ModPreparare}</p>
                            </div>
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
            <Button variant="text"
                    style={{
                        position: 'absolute',
                        color: 'black',
                        fontWeight: 700,
                        top: '75vh',
                        left: '80vw',
                    }}
                    onClick={GoBackToHome}
            >
                Start Again
            </Button>
        </div>
    );
};

export default RecipePage;