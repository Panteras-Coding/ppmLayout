import styled from "styled-components";

export const MainContainer = styled.div`
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    margin: -20px 0 50px;

    h1 {
        font-weight: bold;
	    margin: 0;
    }
    p {
        font-size: 14px;
        font-weight: 100;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin: 20px 0 30px;
    }
    a {
        color: #333;
        font-size: 14px;
        text-decoration: none;
        margin: 15px 0;
    }
    
`
export const MainContainerButton = styled.button `
    border-radius: 15px;
    border: none;
    margin-top: 15px;
    background-color: #851313;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 35px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;

    :active {
        transform: scale(0.95);
    }
`
export const MainContainerForm = styled.form `
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
`

export const MainContainerInput = styled.input.attrs(props => ({
    type: props.inputType,
    placeholder: props.placeholder
  })) `
        border: 2px solid #aaa;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 8px;
        margin: 8px 0;
        outline: none;
        transition: .3s;
        width: 100%;

        :focus {
            border-color: dodgerblue;
            box-shadow: 0 0 8px 0;
        }  

`

export const MainContainerIconImg = styled.img `
    position: absolute;
    color: #aaa;
    left: 0;
    padding: 9px 8px;
    transition: .3s;
    top: 8px;
    width: 15%;
    
`