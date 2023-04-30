
import { CardBody, CardTitle,  Card, CardText, Button } from "reactstrap";
const ProdcutCard = ({value}) => {
    return (
        <div className="card-style">
            <Card
                style={{
                    width: '18rem',
                
                    
                }}
            >
                <img className="img-wrapper"
                    alt="Sample"
                    src={value.image}
                />
                <CardBody >
                    <CardTitle tag="h5">
                       {value.title}
                    </CardTitle>
                  
                    <CardText >
                       {value.price}
                    </CardText>
                    
                    <CardText>
                       {value.rating}
                    </CardText>
                    <CardText>
                       {value.finalPrice}
                    </CardText>
                 
                </CardBody>
            </Card></div>
    )
};
export default ProdcutCard