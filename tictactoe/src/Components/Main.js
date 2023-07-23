import React from "react"
import Icons from "./Icons.js"
import { useState } from "react";
import { Container,Row,Col,Card,CardBody, Button } from "reactstrap"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const itemsArr = new Array(9).fill("empty")

export default function Main()
{
   
   const[isCircle,setIsCircle] = useState(true)
   const[winMessage,setWinMessage] = useState('')
   const reloadGame  = ()=>
   {
    itemsArr.fill("empty",0,9)
    setIsCircle(true)
    setWinMessage("")
   }
   const checkIsWinner = () =>
   {
    if(itemsArr[0] !== "empty" &&
    itemsArr[1] !== "empty" &&
    itemsArr[2] !== "empty" &&
    itemsArr[3] !== "empty"&&
    itemsArr[4] !== "empty" &&
    itemsArr[5] !== "empty" &&
    itemsArr[6] !== "empty" &&
    itemsArr[7] !== "empty" &&
    itemsArr[8] !== "empty"
    ){
        setWinMessage("Draw")
    }
    else if(
    itemsArr[0]===itemsArr[1]&&
    itemsArr[0]===itemsArr[2]&&
    itemsArr[0]!=="empty"
    ){
        setWinMessage(`${itemsArr[0]} Wins`)
    }
    else if(
        itemsArr[3]===itemsArr[4]&&
        itemsArr[3]===itemsArr[5]&&
        itemsArr[3]!=="empty"
    ){
        setWinMessage(`${itemsArr[3]}Wins`)
    }
    else if(
        itemsArr[6]===itemsArr[7]&&
        itemsArr[6]===itemsArr[8]&&
        itemsArr[6]!== "empty"
    ){
        setWinMessage(`${itemsArr[6]} Wins`)
    }
    else if(
        itemsArr[0]===itemsArr[3]&&
        itemsArr[0]===itemsArr[6]&&
        itemsArr[0]!== "empty"
    ){
        setWinMessage(`${itemsArr[0]}Wins`)
    }
    else if(
        itemsArr[1]===itemsArr[4]&&
        itemsArr[1]===itemsArr[7]&&
        itemsArr[1]!== "empty"
    ){
        setWinMessage(`${itemsArr[1]} Wins`)
    }
    else if(
        itemsArr[2]===itemsArr[5]&&
        itemsArr[2]===itemsArr[8]&&
        itemsArr[2]!== "empty"
    ){
        setWinMessage(`${itemsArr[2]} Wins `)
    }
    else if(
        itemsArr[0]===itemsArr[4]&&
        itemsArr[0]===itemsArr[8]&&
        itemsArr[0]!== "empty"
    ){
        setWinMessage(`${itemsArr[0]} Wins `)
    }
    else if(
        itemsArr[2]===itemsArr[4]&&
        itemsArr[2]===itemsArr[6]&&
        itemsArr[2]!==  "empty"
    ){
        setWinMessage(`${itemsArr[2]} Wins`)
    }
     
   };

   const changeItem = (index) =>{
    if(winMessage){
        return toast.success(winMessage)
    }

    if(itemsArr[index] === "empty"){
    itemsArr[index] = isCircle ? "circle" :"cross"
    setIsCircle(!isCircle)
    } 
    else
    {
      return toast.error("Already Filled")
    }
    
   checkIsWinner();
   }; 

    return(
       <Container>
        <Row>
            <Col md ={6} className="offset-md-3">
             <ToastContainer/> 
            {winMessage ?
            (
            <>
            <h1 className="text-center">{winMessage}</h1>
            <Button color="success" block onClick = {reloadGame}>ReLoad</Button>
            </>):
            (
            <h1 className="text-center">
            {isCircle ? "Player 1" :"Player 2"} turn
            </h1>)}
            
             
            <div className = "grid">
            {itemsArr.map((value,index)=>{
               return (
               <Card key = {index} onClick = {()=>changeItem(index)}>
                    <CardBody className="box"><Icons value = {value}
                    /></CardBody>
                </Card> 
               ); 
             })}
           
             </div>
            </Col>
        </Row>   
      </Container>
    ); 
}