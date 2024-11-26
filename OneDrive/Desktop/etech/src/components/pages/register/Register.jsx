    import React, { useState } from 'react'
    import { MdEmail } from "react-icons/md";
    import { FaLock } from "react-icons/fa";
    import styled, { createGlobalStyle } from 'styled-components';
    import { services } from '../../Instance/Services/Services';
    import { CgNametag } from "react-icons/cg";
    import toast, { Toaster } from 'react-hot-toast';
    import { Link, useLocation} from 'react-router-dom';
    import { FaGoogle } from "react-icons/fa";
    import { FaFacebookF } from "react-icons/fa";
    import '/src/index.css'

    const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Doto:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    
    body {
      font-family: 'Roboto', sans-serif;
    }
  `;


    let ContainerMain=styled.main`
        display: flex;
        flex-direction: column;
        width:100%;
        padding-top:20px;
    }
    `
    let Section=styled.section`
        display: flex;
        height:100vh;
    `
    let FormDiv=styled.div`
        display: flex;
        flex-direction: column;
        width:100%;
    `
    let Input=styled.input`
        width: 77%;
        height: 48px;
      padding: 5px 50px ;
      background-color:#F5F7F9;
     border: none;
     outline:none;
     border-radius:5px;
        &::placeholder{
        color:#9A9EA4;
        font-size:15px;
        }
          &:focus::placeholder {
          opacity: 0; 
  }
    `

    let InputRadio = styled.input.attrs({ type: 'radio' })`
    width:60%;
    height:15px;
    `

    let Span=styled.span`
        position: relative;
        top: 20px;
        left:2%;
        font-size:20px;
        width: 20px;
    }
    `
    let Aside=styled.aside`
    flex-basis: 50%;
    font-size: 18px;
    color:#9A9EA4;
    padding: 0px 0px 0px 150px;
    height:830px;
    font-family: "Roboto", serif;
    `
    let Label=styled.label`
    padding: 25px 10px 0px 0px;
    color:#828387;
    padding-left:5px;
    `

    let Button=styled.button`
        width: 77%;
        height: 42px;
        padding: 10px;
        margin-top:50px;
        background-color:#066AC9;
        color:#eee;
        border-radius:5px;
        font-size:20px;
        border:none;

    `
    let Form=styled.form`
    width:100%
    `
    let RadioContainerDiv=styled.div`
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: space-between;
    font-size:17px;
    padding:30px 0px 0px 0px;
    `
    let Img=styled.img`
    position: absolute;
    left: 5%;
    width:45%;
    height:600px;
    `

    let H1=styled.h1`
    font-size:37px;
    color:black;
    margin-top:50px;
    `
    let H11=styled.h1`
    font-size:37px;
    position:relative;
    top:30px;
    left:-10%;
    color:black;
    `
    let Para=styled.p`
    font-size:1.17rem;
    margin-top:50px;
    `

  let Hr=styled.hr`
  width:80%;
  margin:40px 0px 0px -10px;
  `

  let OrDiv=styled.div`
    position: relative;
    left: 221px;
    top: -13px;
    background-color: white;
    width: 50px;
    text-align: center;
}
  `
  let ButtonsDiv=styled.div`
  display:flex;
  width:80%;
  padding:20px 0px 20px 0px;
  margin-left:-1.5%;
  justify-content:space-between
  `

  let GFButtons=styled.button`
    flex-basis: 46%;
    height: 42px;
    border-radius: 5px;
    border: none;
    color: #eee;
    font-size:15px;
    background-color:#3C7FF1;
    padding:3px 20px 0px 20px;
    display:flex;
    align-items: center;
    justify-content: space-around;
}
  `
let DivLink=styled.div`
  text-align: center;
  padding: 30px;
  width: 70%;
  font-size:16px;
}

`

    const Register = () => {
      // let {pathname}=useLocation()
      // console.log(pathname);
      
      let [state,setState]=useState({
        name:'',
        email:'',
        password:'',
        role:'',
      })

      let [checked,setChecked]=useState(false)
      let [confirmPassword,setConfirmPassword]=useState('')


      let {name,email,password,role}=state
      let handelChange=(e)=>{
          let {name,value}=e.target
          // console.log(value);
          setState((preState)=>({
            ...preState,[name]:value
          }))   
      }
      let handelCheck=(e)=>{
        // console.log(e.target.checked);
        if (confirmPassword!=state.password){
          toast.error('Password and confirm password did not match')
          
        }else{
          setChecked(e.target.checked) 
        }
     
        
      }
      let handelCheckPasswordAndConfirmPassword=(e)=>{
        setConfirmPassword(e.target.value)
        if (e.target.value!=state.password){
          e.target.style.border='1px solid red'
        }else{
          e.target.style.border='none'
        }
      }
      let handelSubmit=(e)=>{
        e.preventDefault();
        if (checked){
          try {
            let payload={name,email,password,role}
            console.log(payload);
            
            services.createRegister(payload)



            // console.log(e.target.children);
            // [...e.target.children].map((value)=>{
            //   console.log(value.children);
              
            // })
  
  
            setState({
              name:'',
              email:'',
              password:'',
              role:'',
            })
            setChecked(false)
            setConfirmPassword('')
              toast.success("Registration Successfully")
          } catch (err) {
              console.log(err);
              toast.error('Something went Wrong')
          }
        }else{
          toast.error('You Should accept terms and conditions')
        }
      }


      return (
        <>
        <Section>
          <Aside style={{backgroundColor:'#E6F0F9'}}>
            <main>
              <H11>Welcome to our largest community</H11>
              <p style={{marginTop:'50px',textAlign:'left', padding:'0px 80px'} }>Let's learn something new today!</p>
                <picture>
                  <Img src="	https://themes.stackbros.in/eduport-next/assets/02-CxJqFtvR.svg" alt="" />
                </picture>
            </main>
          </Aside>
          <Aside style={{paddingTop:'50px'}}>
            <main style={{lineHeight:'1px'}}>
              <picture>
                <img src="	https://themes.stackbros.in/eduport-next/assets/03-BSwonyT7.svg" alt=""  style={{height:'40px', width:'40px'}}/>
              </picture>
              <H1>Sign up for your account!</H1>
              <Para>Nice to see you! Please Sign up with your account.</Para>
            </main>
            <ContainerMain>
              <Form action="" onSubmit={handelSubmit}>
                <>
                <FormDiv >
                  <Label htmlFor="" style={{paddingBottom:'1px'}}> Name</Label>
                  <Span style={{marginBottom:'-15px'}}><CgNametag /></Span>
                  <Input type="text" name='name' value={name} onChange={handelChange} placeholder='Enter Name'/>
                  </FormDiv>
                  <FormDiv>
                    <Label htmlFor="">Email</Label>
                    <Span><MdEmail /></Span>
                    <Input type="email" name='email' value={email} onChange={handelChange} placeholder='Enter Email'  style={{marginTop:'-15px'}}/>
                  </FormDiv>
                  <FormDiv>
                    <Label htmlFor=""> Role</Label>
                    
                    <RadioContainerDiv >Publisher <InputRadio type="radio" name='role' value='publisher' onChange={handelChange}    checked={role === 'publisher'}/></RadioContainerDiv>
                    <RadioContainerDiv>User  <InputRadio type="radio" name='role' value='user' onChange={handelChange}   checked={role === 'user'}/></RadioContainerDiv>
                  </FormDiv>
                  <FormDiv>
                    <Label htmlFor="">Password</Label>
                    <Span><FaLock /></Span>
                    <Input  type="password" placeholder='*************' name='password' value={password} onChange={handelChange}  style={{marginTop:'-15px'}}/>
                  </FormDiv>
                  <FormDiv>
                    <Label htmlFor="">Confirm Password</Label>
                    <Span><FaLock /></Span>
                    <Input  type="password" placeholder='*************' name='password' value={confirmPassword} onInput={handelCheckPasswordAndConfirmPassword}  style={{marginTop:'-15px'}}/>
                  </FormDiv>
                  <div style={{margin: '30px 0px -20px 0px',fontSize:'16px'}}>
                    <input type="checkbox" name="" id="" onChange={handelCheck} checked={checked} /><span>By signing up, you agree to the <a href="" style={{textDecoration:'none',color:'#1472CC'}}>terms of service</a></span>
                  </div>
                  <FormDiv>
                    <Button >Submit</Button>
                  </FormDiv>

                  <Hr />
          <OrDiv>or</OrDiv>
          <ButtonsDiv>
            <GFButtons>
              <span>
                <FaGoogle />
              </span>
            <span>
              Sign Up With Google
            </span>
            </GFButtons>
            <GFButtons style={{backgroundColor:'#5D82D1'}}>
              <span style={{marginLeft:'-5%'}}>
                <FaFacebookF />
              </span>
              <span>
              Sign Up With Facebook
              </span>
                         
              </GFButtons>
          </ButtonsDiv>
                </>
              </Form>
            </ContainerMain>
            <DivLink>
            Already have an account?
              <Link to={'/login'} style={{textDecoration:'none',color:'#1472CC',letterSpacing:'0.5px'}}>Sign in here</Link>
            </DivLink>
          </Aside>
          <Toaster></Toaster>
        </Section>

        </>
      )
    }

    export default Register