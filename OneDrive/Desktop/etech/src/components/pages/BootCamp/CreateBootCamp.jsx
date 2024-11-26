import React, { useState } from 'react'
import { services } from '../../Instance/Services/Services'
import axios from 'axios'
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Doto:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
`;
let Section=styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#fff;
`

let Main=styled.main`
    width: 40%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:20px;
    background-color:#eee;
    border:1px solid #999;
    border-radius:5px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4);

`
let FormDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
let Form=styled.form`
width:100%;
`

let Input=styled.input`
    width: 100%;
    padding: 10px;
    border-radius:5px;
    border:none;
    outline:none;
`

let TextArea=styled.textarea`
width:100%;
padding:10px;
outline:none;
border:none;
`
let Select=styled.select`
width:100%;
padding:10px;
text-align:center;
border:none;
font-size: 15px; 
`
let Label=styled.label`
padding: 15px;
color: #111;
font-size: 17px;   
`
let Button=styled.button`
width:100%;
padding:10px;
margin:20px;
`
let Option=styled.option`
font-size: 17px; 
`
const CreateBootCamp = () => {
    let token=sessionStorage.getItem("TOKEN")
    // console.log(token);

    let [state,setState]=useState({
        name:'',
        description:'',
        website:'',
        email:'',
        address:'',
        carrer:'',
        averageRating:'',
        photo:''
    })
    let {name,email,description,website,address,carrer,averageRating,photo}=state

    let handelchange=(e)=>{
        let {name,value}=e.target
        // console.dir(value);
        
            setState((preVal)=>({
                ...preVal,[name]:value
            }))
    }
    let handelSubmit= async (e)=>{
        e.preventDefault()
        let payload={name,email,description,website,address,carrer,averageRating,photo}
        // console.log(payload);
        services.createBootCamp(payload,{headers:{Authorization:`Bearer ${token}`}})
        // console.log(payload);
        
        setState(
            {
                name:'',
                description:'',
                website:'',
                email:'',
                address:'',
                carrer:'',
                averageRating:'',
                photo:''
            }
        )
        
        
    }
  return (
    <>
    <Section>
        <Main>
            <Form action="" onSubmit={handelSubmit}>

                <FormDiv className="formDiv">
                    <Label htmlFor="">Name</Label>
                    <Input type="text" name="name" id="" value={name} onChange={handelchange}/>
                </FormDiv>

                <FormDiv className="formDiv">
                    <Label htmlFor="">Description</Label>
                    <TextArea name="description" id="" maxLength={50} rows={10} cols={30} value={description} onChange={handelchange}></TextArea>
                </FormDiv>

                <FormDiv className="formDiv">
                    <Label htmlFor="">Website</Label>
                   <Input type="url" name="website" id="" value={website} onChange={handelchange}/>
                </FormDiv>

                <FormDiv className="formDiv">
                    <Label htmlFor="">Email</Label>
                    <Input type="email" name="email" id="" value={email} onChange={handelchange}/>
                </FormDiv>

                <FormDiv className="formDiv">
                    <Label htmlFor="">Address</Label>
                    <Input type="text" name="address" id="" value={address} onChange={handelchange}/>
                </FormDiv>

                <FormDiv className="formDiv">
                    <Label htmlFor="">Carrers</Label>
                 <Select name='carrer' value={carrer} onChange={handelchange}>
                    <Option  selected hidden disabled></Option>
                    <Option value="web development">web development</Option>
                    <Option value="react development">react development</Option>
                    <Option value="fullstack development">fullstack development</Option>
                    <Option value="java development">java development</Option>
                    <Option value="python development">python development</Option>
                    <Option value="android development">android development</Option>
                    <Option value="ux/ui development">ux/ui development</Option>
                    <Option value="business">business</Option>
                    <Option value="others">others</Option>
                 </Select>
                </FormDiv>

                
                <FormDiv className="formDiv">
                    <Label htmlFor="">Average Rating</Label>
                    <Input type="number" name="averageRating" id="" min={1} max={5} value={averageRating} onChange={handelchange}/>
                </FormDiv>
                
                
                <FormDiv className="formDiv">
                    <Label htmlFor="">Photu</Label>
                   <Input type="url" name="photo" id="" value={photo}onChange={handelchange}/>
                </FormDiv>

                
                <FormDiv className="formDiv">
                <Button>Click</Button>
                </FormDiv>


            </Form>
        </Main>
    </Section>
    </>
  )
}

export default CreateBootCamp