const initState = {
    listTasks: [],
};

const taskReducer = (state = initState,action)=>{
    switch(action.type){
        case "FETCH_TASK":
            const listTaskNew = action.payload;
            return {
                ...state,
                listTasks : listTaskNew
            }
        case "ADD_TASK":
            const task = action.payload;
            const listTaskAdd = [...state.listTasks];
            listTaskAdd.push(task)
            return {...state,listTasks : listTaskAdd};
        case "DELETE_TASK":
            const id = action.payload;

            const listTaskDelete = [...state.listTasks];
            const index = listTaskDelete.findIndex(ele => ele.id === id);
            listTaskDelete.splice(index,1);
            return {...state,listTasks : listTaskDelete};
        case "CHANGE_STATUS":
            const idChangeStatus = action.payload.id;
            const listTaskChangeStatus = [...state.listTasks];
            const indexChangeStatus = listTaskChangeStatus.findIndex(ele => ele.id === idChangeStatus);

            listTaskChangeStatus[indexChangeStatus] = action.payload;

            return {...state,listTasks : listTaskChangeStatus};
        case "EDIT_ITEM":
            const idEdit = action.payload.id;
            const listTaskEdit = [...state.listTasks];
            const indexEdit = listTaskEdit.findIndex(ele => ele.id === idEdit);

            listTaskEdit[indexEdit] = action.payload;
            return {...state,listTasks : listTaskEdit}

        default :
            return state;
    }
}

export default taskReducer;