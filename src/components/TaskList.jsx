import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import * as actions from '../actions/task'; 

const TaskList = React.memo(function TaskList(props){
    const listTask = useSelector(state => state.task.listTasks);
    const dispatch = useDispatch();
    const wordSearch = props.wordSearch;
    useEffect(()=>{
        const getTasks = ()=>{
            const action = actions.getListTasksRequest();
            dispatch(action);
        }
        getTasks();
    },[dispatch]);

    useEffect(()=>{
        //props.loading(false);
        console.log('did mount!')
    },[])
    
    const listItem =  wordSearch === "" ? listTask.map((ele,index) =>{
        return <TaskItem key={ele.id} item={ele}/>
    }) : listTask.filter(ele => ele.name.includes(wordSearch)).map((ele,index) =>{
        return <TaskItem key={ele.id} item={ele}/>
    })

    console.log(listItem)

    return (
        <div className="row list">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <ul>
                    <li>
                        <ul className="list-task">
                            <li>Tên</li>
                            <li>Trạng thái</li>
                            <li>Hành động</li>
                        </ul>
                    </li>
                    {listItem}
                </ul>
            </div>
            <div className="col-sm-1"></div>
        </div>

    );
});

export default TaskList;