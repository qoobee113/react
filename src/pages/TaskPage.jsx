import React, { useCallback, useState,Suspense, useEffect  } from 'react';
import './style.css';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

//const TaskList = React.lazy(() => import('../components/TaskList'));
TaskPage.propTypes = {

}

function TaskPage(props) {

  const [isOpenForm,setOpenForm] = useState(false);
  const [wordSearch,setWordSearch] = useState("");

  const handleClickForm = () =>{
    setOpenForm(!isOpenForm);
  }

  const formAddTask = isOpenForm === true ? <div className="row">
                                              <div className="col-sm-8">
                                                <TaskForm/>
                                              </div>
                                            </div> : null;
  // const TaskListEl = useCallback(() => {
  //   console.log('tasklist render!!!')
  // return <TaskList wordSearch ={wordSearch}/>;
  // }, [wordSearch]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 header"><h3>Task Pages</h3></div>
        <div className="col-sm-8">
          <input type="text" className="form-control" placeholder="Tìm kiếm" name ="search" 
            value={wordSearch}  
            onChange = {(e)=>setWordSearch(e.target.value) }
          />
        </div>
        <div className="col-sm-4">
          <button type="button" className="btn btn-primary" onClick={ handleClickForm }>{isOpenForm === false ?"Thêm Task" : "Đóng"}</button>
        </div>
      </div>
      {formAddTask}
        <TaskList wordSearch ={wordSearch}/>

      {/* <TaskListEl/> */}

    </div>

  );
}

export default TaskPage;