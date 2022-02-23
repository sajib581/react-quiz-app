import _ from 'lodash';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useAnswers from '../../hooks/useAnswers';
import Analysis from '../Analysis';
import Summery from '../Summery';

const Result = () => {
    const {id} = useParams()
    const location = useLocation()
    const {state} = location
    const qna = state

    const {loading, error, answers} = useAnswers(id)

    function calculate(){  
        let score = 0 ;
        answers.forEach((answer, index1) =>{
            let correctIndexes = [] 
            let checkIndexes = []
            answer.options.forEach((option, index2)=>{
                if(option.correct)correctIndexes.push(index2)
                if(qna[index1].options[index2].checked){
                    checkIndexes.push(index2)
                    option.checked=true
                }
            })
            if(_.isEqual(checkIndexes, correctIndexes)){
                score += 5 ;
            }
        })
        return score;
    }

    const userScrore = calculate();

    return (
        <> 
        {loading && <div>Loading ...</div>}
        {error && <div>There was an Error</div>}
        {
            answers && answers.length>0 && 
            <>
                <Summery score={userScrore} noq={answers.length} /> 
                <Analysis answers={answers} />  
            </>
        }               
        </>
    );
};

export default Result;
