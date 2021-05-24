import callApi from '../ultills/apiCaller';

//get list item
export const getListTasksRequest = () =>{
    return (dispatch) => {
        return callApi('api/task',"GET",null).then(res=>{
            if(res)
            {
                dispatch(getListTasks(res.data))
            }
        })
    }
}
const getListTasks = (listTasks) =>{
    return {
        type : "FETCH_TASK",
        payload : listTasks
    }
}
//add item
export const addTaskRequest = (task) =>{
    return (dispatch) => {
        return callApi('api/task/create',"POST",task).then(res=>{
            if(res){
                dispatch(addTask(res.data))
            }
        })
    }
}

const addTask = (task) =>{
    return {
        type: "ADD_TASK",
        payload : task
    }
}

//delete item

export const deleteTaskRequest = (id) =>{
    return (dispatch) =>{
        return callApi(`api/task/delete/${id}`,"GET",null).then(res=>{
            if(res)
            {
                dispatch(deleteTask(id));
            }
        })
    }
}

const deleteTask = (id) =>{
    return {
        type : "DELETE_TASK",
        payload : id
    }
}

//change status
export const ChangeStatusRequest = (task) =>{
    return (dispatch) =>{
        return callApi("api/task/edit","PUT",task).then(res=>{
            if(res)
            {
                dispatch(ChangeStatus(task));
            }
        })
    }
}

const ChangeStatus = (task) =>{
    return{
        type : "CHANGE_STATUS",
        payload : task
    }
}

//edit item

export const EditItemRequest = (task) =>{
    return (dispatch)=>{
        return callApi("api/task/edit","PUT",task).then(res=>{ 
            if(res)
            {
                dispatch(EditItem(task));
            }
        })
    }
}

const EditItem = (task) =>{
    return {
        type : "EDIT_ITEM",
        payload : task
    }
}