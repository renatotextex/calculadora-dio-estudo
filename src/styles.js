import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`  
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);        
    background-color: #FFFFFF;    
    width: 50%;
    border-radius: 10px;
    overflow: hidden; 
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const LastRow = styled(Row)`
  border-radius: 0 0 10px 10px; 
  overflow: hidden; 
`;