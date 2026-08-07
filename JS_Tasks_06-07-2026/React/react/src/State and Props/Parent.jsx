import Child from "./Child";

function Parent() {

    let studentName = "Susmitha";
    let studentCourse = "React";
    return (
        <div>
            <h1>Parent Component</h1>
            <Child
                name={studentName}
                course={studentCourse}
            />
        </div>
    );
}

export default Parent;