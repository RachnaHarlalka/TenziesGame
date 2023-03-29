import { useEffect, useState } from "react";
import SmallSquare from "./SmallSquare"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

function BigSquare(props){
    const theme=props.darkMode?"dark":"light";
    const[square,setSquare]=useState(allSquareNumbers())
    const[Tenzies,setTenzies]=useState(false)

    useEffect(()=>{
        const ifAllHeld=AllHeld();
        const ifAllSame=AllSame();
        if(ifAllHeld && ifAllSame){
            setTenzies(true)
        }
    },[square])

    function AllHeld(){
        return square.every((s)=>{
           return s.isHeld===true
        })
    }

    function AllSame(){
        const firstVal=square[0].value;
       return square.every((s)=>{
            return s.value===firstVal;
       })
    }

    function generateNewSquare(){
        return {
            value:Math.ceil(Math.random()*6),
            isHeld:false,
            id:nanoid()
        }
    }
    function allSquareNumbers(){
        let randomArray=[];
        for(let i=0;i<10;i++){
            randomArray.push(generateNewSquare())
        }
        return randomArray;
    }

    const squareElements=square.map((num)=>{
        return <SmallSquare 
                    key={num.id} 
                    num={num.value} 
                    isHeld={num.isHeld}
                    id={num.id}
                   
                    holdSquares={(e)=>{
                        holdSquares(num.id,e.target.innerText)
                        // return e.target.innerText
                    }}
                 />
    })

    function holdSquares(id){
        setSquare(prevSquare=>
            prevSquare.map((s)=>{
                return s.id===id ? {...s, isHeld:!s.isHeld}: s
            })
        )
    }

    function rollSquares(){
        if(Tenzies){
            setSquare(allSquareNumbers)
            setTenzies(false)
        }
        else{
            setSquare(prevSquare=>
                prevSquare.map(s=>{
                    return s.isHeld ? s: generateNewSquare()
                })
            )
        }
    }
    // const { width, height } = useWindowSize()
    return(
        <>
            {Tenzies&&<Confetti/>}
           <div className="container">
            <div className={`outer-large-box ${theme}-outer-large-box`}>
                    <div className={`inner-large-box ${theme}-inner-large-box`}>
                        <span className={`${theme}-text`}>Tenzies</span>
                        <p className={`${theme}-text`}>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                        <div className="small-boxes">
                            {squareElements}
                        </div>
                        <button className={`btn ${theme}-btn`} onClick={()=>{
                            rollSquares()
                        }}>{Tenzies?"Reset Game ":"Roll"}</button>
                    </div>
                </div>
           </div>
        </>
    )
}

export default BigSquare