import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import answers from "../backend/bazaRaspunsIntrebari";
import { retete, reteteVegani } from "../backend/bazaRetete";
import { addToRetete, getCookie} from "../backend/addOnJson";
import reteteMatched from "../backend/bazaReteteMatched";
import CookieService from "./../backend/CookieService";


const Algoritm = () => {
    const [type, setType] = useState("");
    const navigate = useHistory();

    function getUrl()
    {
        let url = window.location.href;
        let first = url.split("/");
        //console.log(first[4]);
        if(first[4] === "Vegani")
        {
            setType("Vegani");
        }else{
            setType("NoVegani");
        }
    }

    useEffect(() => {
        getUrl();
    })

    const options = {path :"/"};

    console.log("type of nush ce");
    console.log(type);

    if(type != "")
    {
        if(type === "NoVegani"){
            //console.log("in if");
            for (let i = 0; i < retete.length; i++) {
                //console.log("ce se testeaza");
                //console.log(retete[i]);
                if (
                    CookieService.get('answer_' + type + '_' + 0) === retete[i].q0 &&
                    CookieService.get('answer_' + type + '_' + 1) === retete[i].q1 &&
                    CookieService.get('answer_' + type + '_' + 2) === retete[i].q2 &&
                    CookieService.get('answer_' + type + '_' + 3) === retete[i].q3 &&
                    CookieService.get('answer_' + type + '_' + 4) === retete[i].q4
                    ) {
                    let x = retete[i].NumeReteta;
                    let y = retete[i].Descriere;
                    let z = retete[i].ModPreparare;
                    let t = retete[i].Imagine;
                    //addToRetete(reteteMatched, i, x,y,z,t);
                   // console.log(`The values for recipe ${i+1} match!`);
                    CookieService.set('output_'+type, i+1, options);
                    navigate.push("/recipe/"+type);
                }
            } 
        }else{
            console.log("in else");
            for (let i = 0; i < reteteVegani.length; i++) {
                console.log("ce se testeaza");
                
                // console.log(reteteVegani[i]);
                let x = reteteVegani[i].NumeReteta;
                let y = reteteVegani[i].Descriere;
                let z = reteteVegani[i].ModPreparare;
                let t = reteteVegani[i].Imagine;
                console.log("cookies");
                console.log(CookieService.get('answer_' + type + '_' + 0));
                console.log(CookieService.get('answer_' + type + '_' + 1));
                console.log(CookieService.get('answer_' + type + '_' + 2));
                console.log(CookieService.get('answer_' + type + '_' + 3));
                if
                    (
                        CookieService.get('answer_' + type + '_' + 0) === reteteVegani[i].q0 && 
                        CookieService.get('answer_' + type + '_' + 1) === reteteVegani[i].q1 && 
                        CookieService.get('answer_' + type + '_' + 2) === reteteVegani[i].q2 && 
                        CookieService.get('answer_' + type + '_' + 3) === reteteVegani[i].q3
                    )
                {
                    console.log("s a verificat cacatul asta");
                    // addToRetete(reteteMatched, i, x,y,z,t);
                    
                    CookieService.set('output_'+type, i+1, options);
                    navigate.push("/recipe/"+type);
                }
            } 
        }
    }else{
        console.log("type is equal to null");
    }
    
    // console.log("FINAL");
    // console.log(reteteMatched);
}



export default Algoritm;