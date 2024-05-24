import { useState } from "react";
import useCourseStore from "../app/courseStore";

const Courses = () => {
    const [title, setTitle] = useState<string>("");
    const addCourse = useCourseStore((state) => state.addCourse);
    const { courses, removeCourse, toggleCourseStatus } = useCourseStore((state) => state);

    const handleCourseSubmit = () => {
        if (!title) return alert("please add a course title");

        addCourse({
            id: Math.ceil(Math.random() * 100),
            title: title,
            completed: false
        });

        setTitle("");
    };

    return (
        <div className="container">
            <h1>My Course List</h1>
            <div className="todoListByTidyCoder">
                <div>
                    <input type="text" name="title" value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="newTask"
                        placeholder="Add Course Title" />
                    <button className="form_btn" type="submit" onClick={handleCourseSubmit}>Add Course</button>
                </div>
                <ol id="taskList">
                    {courses?.map((course) => (
                        <li key={course.id} style={{
                            color: course.completed ? "gray" : "white",
                            textDecoration: course.completed ? "line-through" : ""
                        }}>
                            {course.title}
                            <span onClick={() => removeCourse(course.id)}>
                                X</span>
                            <input type="checkbox"
                                checked={course.completed}
                                onChange={() => toggleCourseStatus(course.id)} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Courses;