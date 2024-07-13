
import StudentDashboard from "../pages/student/StudentDashboard";
import OfferedCourse from "../pages/student/OfferedCourse";


export const studentPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <StudentDashboard />
    },
    {
        name: 'Offered Course',
        path: 'offered-course',
        element: <OfferedCourse />
    }
]