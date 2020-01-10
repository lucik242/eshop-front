import React, { Component } from "react";
import { Card, Button, CardTitle, CardText , FormGroup, Label, Input } from 'reactstrap';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFromCart } from '../redux/redux'; 

export class BasketCard extends Component {
constructor(props){
 super(props);
}

render() {
 
 return(
  <div className="cardBasket">
     <Card className="cardB" style={{ backgroundColor: '#1b120f' }} >
       <Link to='/Basket'>
         <Button style={{ backgroundColor: '#8f1d14' }} className="buttonD" onClick={() => { console.log(this.props.deleteFromCart({ ...this.props.good })) }}>X</Button>
       </Link>
     <CardTitle> Produit: {this.props.good.name}</CardTitle>
       <CardText id="card">Type:{this.props.good.type}</CardText>
       <CardText id="card">Prix: {this.props.good.price} € </CardText>
       <FormGroup>
         <Label id="card" for="exampleSelect">Select
         <Input type="select" name="select" id="exampleSelect">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
           <option>6</option>
         </Input>
         </Label>
         <CardText id="card">Total:      € </CardText>
       </FormGroup>
    </Card>
     
  </div>
 );
}
}

//Redux
const mapStateToProps = state => ({
  products: state,
});

const mapDispatchToProps = {
  deleteFromCart,
  
};

const BasketStock = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketCard);

export default BasketStock;


