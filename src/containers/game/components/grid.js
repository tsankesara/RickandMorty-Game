import React from 'react';
import { CardGrid, Card, Header, PageNumber, Spinner } from './styled';
import { Container } from 'react-bootstrap';

const Grid = (props) => {

    return(
        // <Container style={{'width': '10500px', 'justifyContent': 'left'}}>
        <CardGrid>
        {props.data.map((dat, index)=> {
            return(
                <Card
                key = {dat.id}>
                <img onClick={() => props.clicked(index)} src={dat.image} alt={dat.name}/>
                </Card>
            );
        })}
         </CardGrid>
        //  </Container>
    );
}

export default Grid; 