// import {React} from 'react'

function Table({changeState,deleteTask,data}) {
    return (
        <center>
            <table className="table tableData">
                <thead className="tableSpace">
                    <tr className="tableSpace">
                        <th className='tableSpace'>SI.No</th>
                        <th className='tableSpace' >Title</th>
                        <th className='tableSpace' >Task</th>
                        <th className='tableSpace' >Status</th>
                        <th className='tableSpace' >Select</th>
                    </tr>
                </thead>
                <tbody className="tableSpace">
                    {Array.isArray(data.values) &&
                        data.values.map((value, index) => (
                            <tr className="tableSpace" key={index}>
                                <td className='tableSpace' >{index + 1}</td>
                                <td className='tableSpace'>{value.title}</td>
                                <td className='tableSpace' >{value.task}</td>
                                <td className='tableSpace' >{value.completed === true ? 'Completed' : 'Incomplete'}
                                    <input
                                        type="checkbox"
                                        checked={value.completed === true}
                                        id={'completed_' + index}
                                        onChange={changeState(index)}
                                        className='SelectBoxes'
                                    />
                                </td>
                                <td className='tableSpace' >
                                    <button className='options' onClick={deleteTask(index)}>
                                        <i className='fa fa-trash trashIcon'></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </center>
    )
}

export default Table