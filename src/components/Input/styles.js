import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;    

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';        
  

    input {        
        width: 100%;
        height: 75px;
        background-color: #FFFFFF;
        border: 0;
        border-color: #FFFFFF;        
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto';
        color: #060606;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 75px;
    background-color: #FFFFFF;
    border: 0; /* Remove a borda padrão */
    border-radius: 10px 10px 0 0; /* Arredonda as bordas superiores */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 10px;
    font-size: 24px;
    font-family: 'Roboto';
    color: #060606;
    box-sizing: border-box; /* Inclui padding e border no cálculo do tamanho total */
`;