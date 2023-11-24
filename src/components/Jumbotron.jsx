import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
p,h1 {
    color: #fff;
}
.jumbo {
    background: url(https://i.pinimg.com/564x/4f/c6/69/4fc669ff44221bea3761cdeaaa4468a9.jpg) no-repeat fixed bottom;
    background-size: cover;
    height: 400px; 
    position: relativel;
    z-index:-2;
}
.overlay {
    backgound: #000;
    opacity: 0.7;
    position: absolute;
    left:0;
    top:0;
    right:0;
    z-index: -1;
}
.container {
    padding: 100px 50px;
}
`

export default function Jumbotron() {
    return (
        <>
            <Styles>
                <div fluid className="jumbo jumbotron">
                    <div className="overlay"></div>
                    <Container className='container'>
                        <h1>WebDev Blog</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nam sit debitis, laborum iste quibusdam mollitia aperiam in, reprehenderit facere ipsum aut possimus quia eveniet fuga soluta ullam consequuntur minus.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nam sit debitis, laborum iste quibusdam mollitia aperiam in, reprehenderit facere ipsum aut possimus quia eveniet fuga soluta ullam consequuntur minus.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nam sit debitis, laborum iste quibusdam mollitia aperiam in, reprehenderit facere ipsum aut possimus quia eveniet fuga soluta ullam consequuntur minus.
                            sum dolor sit amet consectetur, adipisicing elit. Amet nam sit debitis, laborum iste quibusdam mollitia aperiam in, reprehenderit facere ipsum aut possimus quia eveniet fuga soluta ullam consequuntur minus.
                        </p>
                    </Container>
                </div>
            </Styles>
        </>
    )
}
