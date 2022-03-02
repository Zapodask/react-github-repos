import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`

export const Box = styled.div`
    background: #fff;

    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 10px;

    padding: 10px;
    border: 2px solid #222;
    border-radius: 10px;

    input {
        width: 80%;
        padding: 5px;
        border-radius: 5px;
    }

    button {
        width: 60%;
        height: 28px;

        background: #4F4;
        border-color: #222;
        border-radius: 10px;
        

        cursor: pointer;
    }
`
