import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./../styles/Card.css"

function Exmpl(props) {
    // const card={props}
    console.log(props);
  return (
    <Card  >
        <Card.Title className='card text-center' > {props.card.Name}</Card.Title>
    <Card.Body className='cardbody'>
         <Card.Img className='cardimg'  variant="top" style={{"height":"250px","width":"100%"}}  src={props.card.Image} />
        <Card.Text className='carddesc' >
          {props.card.Description}
        </Card.Text>
        <Card.Text className='cardprice' >
        <span className='pprice' >Price </span>${props.card.Price}
        </Card.Text>
        <Button className='btnn d-flex m-auto' variant="primary">BuyX</Button>
      </Card.Body>
    </Card>
  );
}

export default Exmpl;