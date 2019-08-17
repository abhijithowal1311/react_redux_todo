import React from 'react';
import {Container,Row,Col, Button,Card} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import {store} from './store';
import {addLikes,removeLikes} from './actions/addLikes';
import {removeTodo} from './actions/removeTodo';
import {markComplete} from './actions/markComplete';
import './App.css';




function Todo({todo,id,printOne}) {

  let pos1=0,pos2=0,pos3=0,pos4=0;
  const addLike = (e) =>{

    if(!todo.completed){
      store.dispatch(addLikes(id));  
    }    
  }

  const removeLike = (e) => {
    if(!todo.completed){
       if(store.getState().todos[id].likes>0){  
        store.dispatch(removeLikes(id));
       }  
    }
    
  }

  const remove = (e) =>{
    store.dispatch(removeTodo(id));
  }

  const markCompleted = (e) =>{
    store.dispatch(markComplete(id));
  }

  
  
  return (
    
    
    <Card  onMouseDown={(e)=>printOne(e,id)} className='todo' style={ todo.completed ? {opacity : 0.4} : {opacity : 1} }>
      <Container style={{margin : '10px'}}>
      
          <Row className="card_desc">
              <Col   md={{span: 12}} className="card-title"><h6>{todo.description}</h6></Col>
              <Col  md={1}>

              </Col>
          </Row>
          <Row style={{marginBottom : '2px'}}>
            <Col md={{span:3, offset:2}} xs={6} style={{color:'rgb(105, 101, 101)'}}>
              <Button onClick = {markCompleted} className="btn btn-success btns"><i className="far fa-check-circle"></i></Button>
            </Col>
            <Col md={3} xs={6}>
            <Button onClick={remove} className="btn btn-danger btns"><i className="fa fa-trash"></i></Button>
            
            </Col>
          </Row>
      </Container>
      
      </Card>

        
      
  );

}

export default Todo;
