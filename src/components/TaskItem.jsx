import React, {  useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/task';

const TaskItem = React.memo(function TaskItem(props) {
    const { item } = props;
    const dispatch = useDispatch();
    const [isEdit,setIsEdit] = useState(true);
    const [itemEdit,setItemEdit] = useState({...item});

    useEffect(()=>{
        console.log('a' + itemEdit);
    },[itemEdit])

    //console.log({item,itemEdit});
    // console.log(`${item.name} render`)
    const DeleteHandle = () =>{
        dispatch(actions.deleteTaskRequest(item.id));
    }
    const ChangeStatusHandle = () =>{
        dispatch(actions.ChangeStatusRequest({...item,status: item.status === 0 ? 1 : 0}));
    }

    console.log(`${item.name} render`)
    // useEffect(()=>{
    //     setItemEdit({...item})
    // },[item])

    const EditHandle = () =>{
        //setItemEdit({...item})
        setIsEdit(!isEdit);
    }
    const ChangeHandleItemEdit = (e) =>{
        let {name,value} = e.target;
        if(name === "status") value = parseInt(value);
        setItemEdit({...itemEdit,
            [name] : value
        })
    }

    const SaveHandle =() =>{
        dispatch(actions.EditItemRequest(itemEdit));
        setIsEdit(!isEdit);
    }
    const CancleHandle = ()=>{
        setIsEdit(!isEdit);
    }
        return (
            <li>
                <ul className="list-task">
                    <li>{ isEdit ? item.name : <input type="text" name ="name" value={itemEdit.name} onChange ={ChangeHandleItemEdit}/>}
                    </li>
                    <li>{ isEdit ? 
                            item.status === 0 ? "Uncomplete" : "Complete" : 
                            <select className="form-control"                
                                value = {itemEdit.status}
                                name = "status"
                                onChange = { ChangeHandleItemEdit}>
                                <option value={0}>Uncomplete</option>
                                <option value={1}>Complete</option>
                            </select>
                        }</li>
                    {isEdit? <li className="action">
                                <button type="button" className="btn btn-primary" onClick={ EditHandle }>Edit</button>
                                <button type="button" className="btn btn-primary" onClick={ DeleteHandle }>Xóa</button>
                                <button type="button" className="btn btn-primary" onClick={ ChangeStatusHandle }>{item.status === 0 ? "Complete" : "Uncomplete"}</button>
                            </li> : 
                            <li className="action">
                                <button type="button" className="btn btn-primary" onClick={ SaveHandle }>Save</button>
                                <button type="button" className="btn btn-primary" onClick={ CancleHandle }>Trở lại</button>
                            </li>      
                    }
                    
                </ul>
            </li>
        );

});
export default TaskItem