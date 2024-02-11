import { useState, useEffect } from "react";
const AllFunctions = () => {
    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');
    const [data, setData] = useState({ values: [] });

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('To-Do')) || { values: [] };
        setData(storedData);
    }, []);

    const changeInData = () => {
        const storedData = JSON.parse(localStorage.getItem('To-Do')) || { values: [] };
        console.log(storedData.length);
        setData(storedData);
        return storedData;
    }


    const changeState = (index) => () => {
        let newData = { ...data };
        const state = newData.values[index].completed === true ? false : true;
        newData.values[index].completed = state;
        localStorage.setItem('To-Do', JSON.stringify(newData));
        return setData(newData);
    };

    const deleteTask = (index) => () => {
        let newData = { ...data };
        newData.values.splice(index, 1);
        localStorage.setItem('To-Do', JSON.stringify(newData));
        return setData(newData);
    };

    const handleButtonClick = (e) => {
        e.preventDefault();

        if (title === '' || task === '') {
            if (title === '') {
                document.getElementById('titleError').innerHTML = 'Enter Title';
            }
            if (task === '') {
                document.getElementById('taskError').innerHTML = 'Enter a valid Task';
            }
        } else {
            const existingDataString = localStorage.getItem('To-Do');
            const existingData = existingDataString ? JSON.parse(existingDataString) : { values: [] };
            const newData = {
                title: title,
                task: task,
                date: new Date().toLocaleDateString(),
                completed: false
            };

            existingData.values.push(newData);

            const jsonData = JSON.stringify(existingData);
            localStorage.setItem('To-Do', jsonData);
            setTask('');
            setTitle('');
            changeInData()
        }
    };

    const handleInput = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'title':
                setTitle(value);
                document.getElementById('titleError').innerHTML = '';
                break;
            case 'task':
                setTask(value);
                document.getElementById('taskError').innerHTML = '';
                break;
            default:
                break;
        }
    };
    return {
        changeState: changeState,
        deleteTask: deleteTask,
        handleButtonClick: handleButtonClick,
        handleInput: handleInput,
        data: data,
        title: title,
        task: task
    }
}

export default AllFunctions