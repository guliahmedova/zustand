import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ICourse {
    id: number,
    title: string,
    completed: boolean
};

type CourseStore = {
    courses: ICourse[];
    addCourse: (course: ICourse) => void;
    removeCourse: (courseId: number) => void;
    toggleCourseStatus: (courseId: number) => void;
};

const courseStore: StateCreator<CourseStore> = (set) => ({
    courses: [],
    addCourse: (course) => {
        set((state) => ({ courses: [course, ...state.courses] }))
    },
    removeCourse: (courseId: number) => {
        set((state) => ({ courses: state.courses.filter((c) => c.id !== courseId) }))
    },
    toggleCourseStatus: (courseId: number) => {
        set((state) => ({
            courses: state.courses.map((course) => course.id === courseId
                ? { ...course, completed: !course.completed }
                : course)
        }))
    }
});

const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: "courses"
        })
    )
);

export default useCourseStore;