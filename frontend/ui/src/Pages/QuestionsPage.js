import backgroundImg from "./food2.png";
import QuestionAnswear from "../Components/QuestionAnswear";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useState, useEffect} from "react";
import {addToAnswer, addToRetete} from '../backend/addOnJson';
import answers from './../backend/bazaRaspunsIntrebari';
import {retete, reteteVegani} from './../backend/bazaRetete';
import reteteMatched from "../backend/bazaReteteMatched";


import {IntrebariNoVegani, IntrebariVegani} from "./../backend/bazaIntrebari"


const QuestionsPage = () => {

    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [value, setValue] = useState('nu');
    const [value2, setValue2] = useState('nu');
    const [value3, setValue3] = useState('nu');
    const [value4, setValue4] = useState('nu');
    const [value5, setValue5] = useState('nu');
    const [value6, setValue6] = useState('nu');
    const [value7, setValue7] = useState('nu');
    const [value8, setValue8] = useState('nu');
    const [value9, setValue9] = useState('nu');
    const [value10, setValue10] = useState('nu');
    const [type, setType] = useState("");

    function handleChange(id){
        return function(event) {
            if(id == 1)
            {
                setValue(event.target.value);
            }
            if(id == 2)
            {
                setValue2(event.target.value);
            }
            if(id == 3)
            {
                setValue3(event.target.value);
            }
            if(id == 4)
            {
                setValue4(event.target.value);
            }
            if(id == 5)
            {
                setValue5(event.target.value);
            }
            if(id == 6)
            {
                setValue6(event.target.value);
            }
            if(id == 7)
            {
                setValue7(event.target.value);
            }
            if(id == 8)
            {
                setValue8(event.target.value);
            }
            if(id == 9)
            {
                setValue9(event.target.value);
            }
            if(id == 10)
            {
                setValue10(event.target.value);
            }
        };
    };

    const goToRecipePage = () => {
        console.log(value);
        
        console.log(value2);
        console.log(value3);
        console.log(value4);
        console.log(value5);
        console.log(value6);
        console.log(value7);
        console.log(value8);
        console.log(value9);
        console.log(value10);

        addToAnswer(answers, 1, value);
        addToAnswer(answers, 2, value2);
        addToAnswer(answers, 3, value3);
        addToAnswer(answers, 4, value4);
        addToAnswer(answers, 5, value5);
        addToAnswer(answers, 6, value6);
        addToAnswer(answers, 7, value7);
        addToAnswer(answers, 8, value8);
        addToAnswer(answers, 9, value9);
        addToAnswer(answers, 10, value10);

        console.log("din functia goToRecipe");
        console.log(type);
        console.log(answers);
        if(type === "NoVegani"){
            console.log("in if");
            for (let i = 0; i < retete.length; i++) {
                console.log("ce se testeaza");
                console.log(retete[i]);
                if (
                    answers.answer_0 === retete[i].q0 &&
                    answers.answer_1 === retete[i].q1 &&
                    answers.answer_2 === retete[i].q2 &&
                    answers.answer_3 === retete[i].q3 &&
                    answers.answer_4 === retete[i].q4 &&
                    answers.answer_5 === retete[i].q5 &&
                    answers.answer_6 === retete[i].q6 &&
                    answers.answer_7 === retete[i].q7 &&
                    answers.answer_8 === retete[i].q8 &&
                    answers.answer_9 === retete[i].q9 &&
                    answers.answer_10 === retete[i].q10
                    ) {
                    let x = retete[i].NumeReteta;
                    let y = retete[i].Descriere;
                    let z = retete[i].ModPreparare;
                    let t = retete[i].Imagine;
                    addToRetete(reteteMatched, i, x,y,z,t);
                    console.log(`The values for recipe ${i+1} match!`);
                }
            } 
        }else{
            console.log("in else");
            for (let i = 0; i < reteteVegani.length; i++) {
                console.log("ce se testeaza");
                
                console.log(reteteVegani[i]);
                if (
                    answers.answer_0 === reteteVegani[i].q0 &&
                    answers.answer_1 === reteteVegani[i].q1 &&
                    answers.answer_2 === reteteVegani[i].q2 &&
                    answers.answer_3 === reteteVegani[i].q3 &&
                    answers.answer_4 === reteteVegani[i].q4 &&
                    answers.answer_5 === reteteVegani[i].q5 &&
                    answers.answer_6 === reteteVegani[i].q6 &&
                    answers.answer_7 === reteteVegani[i].q7 &&
                    answers.answer_8 === reteteVegani[i].q8 &&
                    answers.answer_9 === reteteVegani[i].q9 &&
                    answers.answer_10 === reteteVegani[i].q10
                    ) {
                    let x = reteteVegani[i].NumeReteta;
                    let y = reteteVegani[i].Descriere;
                    let z = reteteVegani[i].ModPreparare;
                    let t = reteteVegani[i].Imagine;
                    addToRetete(reteteMatched, i, x,y,z,t);
                    console.log(`The values for recipe ${i+1} match!`);
                }
            } 
        }
        
        
       navigate("/recipe/"+type);
    };

    function getQuestions()
    {
        let url = window.location.href;
        let first = url.split("/");
        console.log(first[4]);

        if(first[4] === "vegani")
        {
            setQuestions(IntrebariVegani);
            setType("Vegani");
        }else{
            setQuestions(IntrebariNoVegani);
            setType("NoVegani");
        }
    }

    useEffect(()=>{
        getQuestions();
    })

    

    function readFromDataBase() {
        return questions.map((item, index) => (
            <div key={item.id}>
                <div style={{ color: 'black'}}>
                   <b>Question {index + 1}.</b> {item.node0}?
                </div>
                <RadioGroup
                    style={{display: 'flex', flexDirection: 'row'}}
                >
                    <FormControlLabel onChange={handleChange(item.id)} value="yes" control={<Radio/>} label="yes"/>
                    <FormControlLabel onChange={handleChange(item.id)} value="no" control={<Radio/>} label="no"/>
                </RadioGroup>
            </div>
        ));
    }

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
                        top: '44rem',
                        left: '43vw',
                        background: '#FFFFFF',
                        borderRadius: '1rem',
                        color: '#08484A',
                        borderColor: '#08484A',
                    }}
                    onClick={goToRecipePage}
            >
                Get recipe
            </Button>
        </>
    );
};

export default QuestionsPage;