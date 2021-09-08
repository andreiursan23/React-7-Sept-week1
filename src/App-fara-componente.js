import Header from "./components/Header";
import StudentsList from "./components/StudentsList";
import "./App.css";

function App() {
  const studentsListData = [
    {
        id: 1,
        firstName: 'Martin',
        lastName: 'Randolph',
        course: 'Frontend',
        email: 'martin.randolph@gmail.com',
        color: 'black'
    },
    {
        id: 2,
        firstName: 'Kieron',
        lastName: 'Dotson',
        course: 'Frontend',
        email: 'Kieron.Dotson@gmail.com',
        color: 'red'
    },
    {
        id: 3,
        firstName: 'Martin',
        lastName: 'Randolph',
        course: 'Frontend',
        email: 'martin.randolph@gmail.com',
        color: 'green'
    },
    {
        id: 4,
        firstName: 'Zack',
        lastName: 'John',
        course: 'Backend',
        email: 'Zack.John@gmail.com',
        color: 'yellow'
    },
    {
        id: 5,
        firstName: 'Maximillian',
        lastName: 'Jacobson',
        course: 'Backend',
        email: 'Maximillian.Jacobson@gmail.com',
        color: 'purple'
    },
  ];

  return (
    <>
      {/* <Header />
      <StudentsList /> */}

      <h1 className="header">Codecool students</h1>

      {studentsListData.map(student => (
        <div className="student">
          <h2 style={{color: student.color}}>{student.firstName} {student.lastName}</h2>
          <h3><strong>Course:</strong> {student.course}</h3>
          <p><strong>Email:</strong> {student.email}</p>
        </div>
      ))}
    </>
  );
}

export default App;
