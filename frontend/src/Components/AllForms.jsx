import React from "react";
import styled from "styled-components";
import "../styles/styles.css";
import RegisterForm from './registerForm';
import CreateProfileForm from './CreateProfile';
import LastStepRegister from './lastStepRegister';
import UserTypeForm from './userTypeForm';



function AllForms(){
    return(
        <AllFormsStyled>

        
            <RegisterForm/>            
            <CreateProfileForm/>            
            <LastStepRegister/>            
            <UserTypeForm/>
        </AllFormsStyled>
    )
}

const AllFormsStyled = styled.div`
    margin-top:2%;
    width:60%;
    display:flex;
    flex-direction:column;
    margin-left:20%
    
  
`



export default AllForms