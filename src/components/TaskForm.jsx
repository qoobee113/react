import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/task'


function TaskForm(props){
    const [task,setTask] = useState({
        name : "",
        status : 0
    })
    const dispatch = useDispatch();

    const changeHandle =(e) =>{
        let {name,value} = e.target;
        if(name === "status") value = parseInt(value);
        setTask({...task,
            [name] : value
        })
    }
    const submitHandle = (e)=>{
        e.preventDefault();
        dispatch(actions.addTaskRequest(task));
        setTask({...task,
            name : "",
            status : 0
        })
    }
    return(
    <div className="form-group">
        <form className="add" onSubmit = {submitHandle}>
            <div className="form-group">
              <label> Tên</label>
              <input type="text"
                className="form-control"  placeholder="Tên"
                value = {task.name}
                name="name"
                onChange = { changeHandle }
                />
            </div>
            <div className="form-group">
              <label>Trạng thái</label>
              <select className="form-control"                
                value = {task.value}
                name = "status"
                onChange = { changeHandle}>
                <option value={0}>Uncomplete</option>
                <option value={1}>Complete</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary bt-submit">Ok</button>
        </form>
    </div>);

};

export default TaskForm;