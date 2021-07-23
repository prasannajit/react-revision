import * as React from 'react';
import { FixedSizeList } from 'react-window';

const ToDoCard = ({ title, completed }: { title: string, completed: boolean }) => {
    return (
        <article>
            <p>{title}</p>
            <p>{`This task is ${completed ? 'complete' : 'yet to be done'}`}</p>
        </article>
    )
};

const ToDoList = () => {
    const [todoList, setTodoList] = React.useState([]);
    const Row = ({ index, style }: { index: number, style: any }) => {
        const listItem = todoList[index];
        return (
            <div style={style} key={listItem.id}>
                <div>
                    <ToDoCard title={listItem.title} completed={listItem.completed} />
                </div>
            </div>
        )
    };
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw `Failed with error ${response.status}`;
            }).then((data) => {
                console.log(data);
                setTodoList(data);
            })
    }, [setTodoList]);
    return (
        <section>
            <h1>ToDo Lists</h1>
            <div>
                <FixedSizeList
                    height={500}
                    width={500}
                    itemSize={120}
                    itemCount={todoList.length}
                >
                {Row}
                </FixedSizeList>
            </div>
        </section>
    )
};

export default ToDoList;