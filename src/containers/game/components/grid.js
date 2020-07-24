import React from 'react';
import { CardGrid, Card} from './styled';

const Grid = (props) => {

    return(
        // <Container style={{'width': '10500px', 'justifyContent': 'left'}}>
        <CardGrid>
        {props.data.map((dat, index)=> {
            return(
                <Card
                key = {dat.id}>
                <img onClick={() => props.clicked(dat.id)} src={dat.image} alt={dat.name}/>
                </Card>
            );
        })}
         </CardGrid>
        //  </Container>
    );
}

export default Grid; 