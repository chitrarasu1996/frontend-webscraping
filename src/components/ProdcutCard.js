
import { CardBody, CardTitle,  Card, CardText, Button } from "reactstrap";
const ProdcutCard = ({value}) => {
    return (
        <div className="card-style mt-3">
            <Card
                style={{
                    width: '18rem',
               
          
                }}
            >
                <img className="img-wrapper"
                    alt="Sample"
                    src={value.image}
                    height={"300px"}
                />
                <CardBody >
                    <CardTitle tag="h5">
                       {value.title}
                    </CardTitle>
                  <div className="d-flex flex-column  align-items-center">
                    <CardText >
                    <span>Price</span> {value.price}
                    </CardText>
                    
                    <CardText>
                      <span>Ratings</span> {value.rating}
                    </CardText>
                    <CardText>
                      <span>finalPrice</span> {value.finalPrice}
                    </CardText>
                    </div>
                </CardBody>
            </Card></div>
    )
};
export default ProdcutCard