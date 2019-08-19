import React from 'react';
import ReactDOM from 'react-dom';
import {useState,useEffect} from 'react';
import {store} from './store';
import {addTodo} from './actions/fetchAction';
import Todo from './Todo';
import {removeTodo} from './actions/removeTodo';
import {Container,Row,Col, Button,Form,Card} from 'react-bootstrap';
import './App.css'

function App() {
   const [input, setInput] = useState('');
   const [complete, setComplete] = useState('All');
   
   let pos1=0;
   let pos2=0;
   let pos3=0;
   let pos4=0;
   let currentodo='';
   let todos = [];
   if(complete === 'Complete'){
    todos = store.getState().todos.filter(todo => {
      if(todo.completed){
        return todo;
      } 
    })
    }else if(complete === 'Incomplete'){
    todos = store.getState().todos.filter(todo => {
      if(!todo.completed){
        return todo;
      } 
    })
    }else{ todos = store.getState().todos;}
    
        
   console.log('we are dumb'+todos); 
  // const [heading, setheading] = useState('Hey there');
  //react hooks runs when component gets mounted.   
  useEffect(() => {
    
  }, [])


const getInput = (e) => {
  setInput(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    //on page reload set radio button to all
    setComplete('All');
    //if input is null and user is trying to submit alert else add the todo
    if(input != ''){
      let todo = { description : input, likes : 0,completed :false }
      store.dispatch(addTodo(todo));
      setInput('');
    }else{
      alert('Please add something first!');
    }
}

const completeOrNot = (e) =>{ 
    setComplete(e.target.value);
}



//re render the store
const render = () => ReactDOM.render(<App />, document.getElementById("root"));
store.subscribe(render);

  return (
    <div className="App">
      <Container >
      <Form onSubmit={handleSubmit}>    
          <Row>
            <Col md={{span:11}}>{
              input == '' ?<center> <h4>Add Todo</h4></center> : <center><h4>Typing...</h4></center>
           }</Col>
            <Col sm={6} md={{span:6,offset:2}}><input value={input} onChange={getInput}  type="text" className="form-control"></input></Col>
            <Col sm={4} md={2}><Button type="submit" className="btn-primary">submit</Button></Col>
            </Row>
            </Form>
           <Row><Col md={{span:8,offset:2}}>
              <label><input type='radio' name='completeCheck' onChange={completeOrNot} checked={complete === 'All'} value="All" /> All</label>
              <label><input type='radio' name='completeCheck' onChange={completeOrNot} checked={complete === 'Complete'} value="Complete" /> Completed</label>
              <label><input type='radio' name='completeCheck' onChange={completeOrNot} checked={complete === 'Incomplete'} value="Incomplete" /> Incomplete</label>
           </Col></Row>
            <Row style={{margin : '20px'}}>
            
            
            <Col md={{span:10}} className="card-title">{ todos.length == 0 ? <h4 style={{color:'black',textAlign : 'center'}} className='text-danger'>
                                     No Items Present</h4> : <span></span>}</Col>
                                               
             {todos.map((todo,index) =>{
              return (<Col md={4} key={index}><Todo className='todos'  key={index} id={index} todo={todo}></Todo></Col>)
            } )}
            
            </Row>
      </Container>
    </div>
  );
}


export default App;
