import backgroundImg from "./food2.png";
import QuestionAnswear from "../Components/QuestionAnswear";
import {Button} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useState, useEffect} from "react";
import {addToAnswer, addToRetete} from '../backend/addOnJson';
import answers from './../backend/bazaRaspunsIntrebari';
import {retete, reteteVegani} from './../backend/bazaRetete';
import reteteMatched from "../backend/bazaReteteMatched";
import { useHistory } from "react-router-dom";
import CookieService from "../backend/CookieService";

import {IntrebariNoVegani, IntrebariVegani} from "./../backend/bazaIntrebari"


const QuestionsPage = () => {
    const history = useHistory();
    const [questions, setQuestions] = useState([]);
    const [value, setValue] = useState('nu');
    const [type, setType] = useState("");

    const [currentNode, setCurrenotNode] = useState(1);

    console.log(answers);

    function handleChange(id){
        return function(event) {
            setValue(event.target.value);
        };
    };

    const goToRecipePage = () => {

        console.log("GoToRecipeFunction");
        console.log(currentNode);
        console.log(value);
        if(type === "Vegani")
        {
            if(currentNode == 1 && value === "yes")
            {
                addToAnswer(answers, currentNode, value, type);
                addToAnswer(answers, 3, "no", type);
                addToAnswer(answers, 2, "no", type);
                history.push("/algoritm/" + type);
                window.location.reload();
            }else{
                if(currentNode == 1 && value === "no")
                {
                    console.log("in else");
                    addToAnswer(answers, currentNode, value,type);
                    let x = currentNode + 1;
                    console.log(x);
                    history.push("/questions/vegani/" + 2)
                    window.location.reload();
                }

                if(currentNode == 2 )
                {
                    if(value === "yes")
                    {
                        addToAnswer(answers, currentNode, value,type);
                        addToAnswer(answers, 3, "no",type);
                        history.push("/algoritm/" + type);
                        window.location.reload();
                    }else{
                        addToAnswer(answers, currentNode, value,type);
                        history.push("/questions/vegani/" + 3)
                        window.location.reload();
                    }
                }

                if(currentNode == 3)
                {
                    addToAnswer(answers, currentNode, value, type);
                    history.push("/algoritm/" + type);
                    window.location.reload();
                }
            }
        }else{
            if(currentNode == 1 && value === "yes")
            {
                addToAnswer(answers, currentNode, value, type);
                addToAnswer(answers, 3, "no", type);
                history.push("/questions/NoVegani/" + 2)
                window.location.reload();
            }else{
                if(currentNode == 1 && value === "no")
                {
                    addToAnswer(answers, currentNode, value, type);
                    addToAnswer(answers, 2, "no", type);
                    addToAnswer(answers, 4, "no", type);
                    history.push("/questions/NoVegani/" + 3)
                    window.location.reload();
                }

                if(currentNode == 2 && value === "yes")
                {
                    addToAnswer(answers, currentNode, value, type);
                    addToAnswer(answers, 4, "no", type);
                    history.push("/algoritm/" + type)
                    window.location.reload();
                }else{
                    if(currentNode == 2 && value === "no")
                    {
                        //console.log("aici unde trebuie");
                        addToAnswer(answers, currentNode, value, type);
                        history.push("/questions/NoVegani/" + 4)
                        window.location.reload();
                    }else{
                        if(currentNode == 3 && value === "yes")
                        {
                            addToAnswer(answers, currentNode, value, type);
                            history.push("/algoritm/" + type)
                            window.location.reload();
                        }else{
                            if(currentNode == 3 && value === "no")
                            {
                                addToAnswer(answers, currentNode, value, type);
                                history.push("/algoritm/" + type)
                                window.location.reload();
                            }

                            if(currentNode == 4 && value == "yes")
                            {
                                addToAnswer(answers, currentNode, value, type);
                                history.push("/algoritm/" + type)
                                window.location.reload();
                            }else{
                                if(currentNode == 4 && value === "no")
                                {
                                    console.log("aici se duce");
                                    addToAnswer(answers, currentNode, value, type);
                                    history.push("/algoritm/" + type)
                                    window.location.reload();
                                }
                            }

                        }
                    }
                }
            }
        }
        
        


    //     console.log("din functia goToRecipe");
    //     console.log(type);
    //     console.log(answers);
    //     if(type === "NoVegani"){
    //         console.log("in if");
    //         for (let i = 0; i < retete.length; i++) {
    //             console.log("ce se testeaza");
    //             console.log(retete[i]);
    //             if (
    //                 answers.answer_0 === retete[i].q0 &&
    //                 answers.answer_1 === retete[i].q1 &&
    //                 answers.answer_2 === retete[i].q2 &&
    //                 answers.answer_3 === retete[i].q3 &&
    //                 answers.answer_4 === retete[i].q4 &&
    //                 answers.answer_5 === retete[i].q5 
    //                 ) {
    //                 let x = retete[i].NumeReteta;
    //                 let y = retete[i].Descriere;
    //                 let z = retete[i].ModPreparare;
    //                 let t = retete[i].Imagine;
    //                 addToRetete(reteteMatched, i, x,y,z,t);
    //                 console.log(`The values for recipe ${i+1} match!`);
    //             }
    //         } 
    //     }else{
    //         console.log("in else");
    //         for (let i = 0; i < reteteVegani.length; i++) {
    //             console.log("ce se testeaza");
                
    //             console.log(reteteVegani[i]);
    //             if (
    //                 answers.answer_0 === reteteVegani[i].q0 &&
    //                 answers.answer_1 === reteteVegani[i].q1 &&
    //                 answers.answer_2 === reteteVegani[i].q2 &&
    //                 answers.answer_3 === reteteVegani[i].q3 &&
    //                 answers.answer_4 === reteteVegani[i].q4 &&
    //                 answers.answer_5 === reteteVegani[i].q5 
    //                 ) {
    //                 let x = reteteVegani[i].NumeReteta;
    //                 let y = reteteVegani[i].Descriere;
    //                 let z = reteteVegani[i].ModPreparare;
    //                 let t = reteteVegani[i].Imagine;
    //                 addToRetete(reteteMatched, i, x,y,z,t);
    //                 console.log(`The values for recipe ${i+1} match!`);
    //             }
    //         } 
    //     }
        
       
        
    //    navigate("/recipe/"+type);
    };



    function getQuestions()
    {
        let url = window.location.href;
        let first = url.split("/");
        console.log(first[4]);
        console.log(first[5]);
        setCurrenotNode(first[5]);
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
    },[currentNode])

    

    function readFromDataBase() {
        console.log("readFromDataBase");
        console.log(currentNode);
        return questions.map((item, index) => (
          item.id == currentNode ? (
            <div key={item.id}>
              <div style={{ color: 'black'}}>
                <b>Question {index + 1}.</b> {item.node0}?
              </div>
              <RadioGroup style={{display: 'flex', flexDirection: 'row'}}>
                <FormControlLabel onChange={handleChange(item.id)} value="yes" control={<Radio/>} label="yes"/>
                <FormControlLabel onChange={handleChange(item.id)} value="no" control={<Radio/>} label="no"/>
              </RadioGroup>
            </div>
          ) : (
            <div key={item.id}></div>
          )
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
                        top: '10rem',
                        left: '43vw',
                        background: '#FFFFFF',
                        borderRadius: '1rem',
                        color: '#08484A',
                        borderColor: '#08484A',
                    }}
                    onClick={goToRecipePage}
            >
                Next
            </Button>
        </>
    );
};

export default QuestionsPage;