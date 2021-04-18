import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
  
export default class Dish extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
  // eslint-disable-next-line no-lone-blocks
  {
      
        }
    }

    renderDish(dish){
        if(dish!=null){
            return (
                <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            );
                
       
        }
    }
    renderComments(dish){
        if (dish == null) {
            return (<div></div>)
        }
        if(dish!=null){
            return (
                <div>
                <h4>Comments</h4>
                
              {dish.comments.map((comments) =>
             
                   <ul className="list-unstyled">
                       <li>
                       <p key={comments.id}>{comments.comment}</p> 
                
                <p key={comments.id}>--{comments.author} , {comments.date}</p>

                       </li>
                   </ul>
               
               
              )
              }
           
                          
            </div>
            );
                
       
        }
    }


    render() {
        return (
           <div>
              
              <div className="row">
                <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
                 
                </div>
                <div  className="col-12 col-md-5 m-1">
                {this.renderComments(this.props.dish)}
                 
                </div>
              </div>
                </div>
            
        )
    }
}