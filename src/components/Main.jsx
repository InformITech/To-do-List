import './Main.css';
import Table from './Table';
import AllFunctions from './Functions';

function Main() {
    const functions = AllFunctions();
    const { handleButtonClick, handleInput, deleteTask, changeState, data, title, task } = functions;
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="HeadingText">My_To_Do</h1>
                    </div>
                    <div className="col-md-8 col-xs-12 m-auto">
                        <div className="toDoBox">
                            <div className="col-xs-12">
                                <form action="" onSubmit={handleButtonClick}>
                                    <div className="col-xs-12 col-xl-2 spaces">
                                        <input
                                            type="text"
                                            className="inputBoxes"
                                            id="titleInput"
                                            value={title}
                                            name="title"
                                            onChange={handleInput}
                                        />
                                        <center>
                                            <p id="titleError" className="errorShow"></p>
                                        </center>
                                    </div>
                                    <div className="col-xs-12 col-xl-5 mx-5 spaces">
                                        <input
                                            type="text"
                                            className="inputBoxes"
                                            id="taskInput"
                                            name="task"
                                            value={task}
                                            onChange={handleInput}
                                        />
                                        <center>
                                            <p id="taskError" className="errorShow"></p>
                                        </center>
                                    </div>
                                    <div className="col-xs-6 col-xl-2 spaces">
                                        <button className="newBtn" type="submit">
                                            Add new
                                        </button>
                                    </div>
                                </form>
                                <div className="col-xs-12 tableSpace">
                                    <div className="tableSpace">
                                        <div className="col-xs-10">
                                            <Table deleteTask={deleteTask} changeState={changeState} data={data} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
