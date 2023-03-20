import backgroundImg from './food2.png';
import QuestionAnswear from "../Components/QuestionAnswear";
import {Button} from "@mui/material";

import {addToAnswer} from '../backend/addOnJson';
import answers from './../backend/bazaRaspunsIntrebari';

const MainPage = () => {

   // const classes = useStyles();

    addToAnswer(answers, 1, 4);
    addToAnswer(answers, 2, 3);
    console.log("ANSWERS");
    console.log(answers);

    return (
        <>
            <img src={backgroundImg} alt="" style={{width: '50%'}}/>
            <QuestionAnswear/>
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
            >
                Next Question
            </Button>
        </>
    );
};

export default MainPage;