import { Component} from "react"
import TodoItem from './TodoItem.jsx';



class TodoItemS extends Component {
   render() {
       return (
           <div>
               <section className="main">
                   <ol className="todo-list">
                       <li>
                           <div className="view">
                               <input type="checkbox" className="toggle" value="on"/>
                               <label>new work</label>
                               <button className="destry"/>
                           </div>
                       </li>
                       <TodoItem/>
                   </ol>
               </section>
           </div>
       );
   }
}

export default TodoItemS;