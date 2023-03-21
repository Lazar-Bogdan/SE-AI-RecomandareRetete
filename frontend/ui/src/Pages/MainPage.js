import {useState} from "react";

import backgroundImg from './food2.png';
import QuestionAnswear from "../Components/QuestionAnswear";
import {Button} from "@mui/material";

import {addToAnswer} from '../backend/addOnJson';
import answers from './../backend/bazaRaspunsIntrebari';
import {useNavigate} from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import {level1} from "./../backend/bazaIntrebari"


const MainPage = () => {

    const navigate = useNavigate();

    const [value, setValue] = useState('nu');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // avem buton de next
    // ne duce la pagina urmatoare cu link-ul /lvlNr/NodeNR

    function readFromDataBase() {
        return level1.map((item, index) => (
            <div>
                <div style={{ color: 'black'}}>
                   <b>Question {index + 1}.</b> {item.node0}?
                </div>
                <RadioGroup
                    value={value}
                    onChange={handleChange}
                    style={{display: 'flex', flexDirection: 'row'}}
                >
                    <FormControlLabel value="yes" control={<Radio/>} label="yes"/>
                    <FormControlLabel value="no" control={<Radio/>} label="no"/>
                </RadioGroup>
            </div>
        ));
    }

    const goToNextPage = () => {
        addToAnswer(answers, 0, value);
        // console.log("test")
        // console.log(answers);
        // console.log("value");
        // console.log(value);

        if(value == "yes")
        {
            navigate("/questions/vegani");
        }else{
            navigate("/questions/Novegani");
        }

        //navigate("/questions");
    };

    return (
        <>
            <img src={backgroundImg} alt="" style={{width: '50%'}}/>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '1rem',
                    padding: '0.5rem',
                    top: '4rem',
                    left: '43vw',
                    border: '1px solid #08484A',
                }}
            >
                {readFromDataBase()}
            </div>
            <Button variant="outlined"
                    style={{
                        position: 'absolute',
                        top: '10rem',
                        left: '43vw',
                        background: '#FFFFFF',
                        borderRadius: '1rem',
                        color: '#08484A',
                        borderColor: '#08484A',
                    }}
                    onClick={goToNextPage}
            >
                Next Question
            </Button>
        </>
    );
};

export default MainPage;