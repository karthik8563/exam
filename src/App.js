import React, { useState } from 'react';
import './App.css'; // Import CSS styles

function App() {
  // Mocked data for students
  const initialStudents = [
    {
      id: 1,
      name: 'John Doe',
      ticketNumber: 'T001',
      ticketTopic: 'Mathematics',
      examGrade: 4,
      ratingGrade: 3,
      comments: 'Good effort'
    },
    {
      id: 2,
      name: 'Alex',
      ticketNumber: 'T002',
      ticketTopic: 'Mathematics',
      examGrade: 6,
      ratingGrade: 4,
      comments: 'Good effort'
    },
    
  ];

  // State variables
  const [students, setStudents] = useState(initialStudents);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showStatistics, setShowStatistics] = useState(false);
  const [filterValue, setFilterValue] = useState('');

  // Function to calculate final grade
  const calculateFinalGrade = (examGrade, ratingGrade) => {
    return 0.6 * examGrade + 0.4 * ratingGrade;
  };

  // Function to calculate statistics
  const calculateStatistics = () => {
    const passedStudents = students.filter(student => calculateFinalGrade(student.examGrade, student.ratingGrade) >= 4);
    const failedStudents = students.filter(student => calculateFinalGrade(student.examGrade, student.ratingGrade) < 4);
    const averageGrade = students.reduce((total, student) => total + calculateFinalGrade(student.examGrade, student.ratingGrade), 0) / students.length;
    const maxGrade = Math.max(...students.map(student => calculateFinalGrade(student.examGrade, student.ratingGrade)));
    const minGrade = Math.min(...students.map(student => calculateFinalGrade(student.examGrade, student.ratingGrade)));

    return {
      totalStudents: students.length,
      passed: passedStudents.length,
      failed: failedStudents.length,
      averageGrade: averageGrade.toFixed(2),
      maxGrade: maxGrade.toFixed(2),
      minGrade: minGrade.toFixed(2)
    };
  };

  // Function to handle row selection
  const handleRowClick = (student) => {
    setSelectedStudent(student);
  };

  // Rendered JSX for student rows
  const studentRows = students
    .filter(student => student.name.toLowerCase().includes(filterValue.toLowerCase()))
    .map(student => (
      <tr key={student.id} className={selectedStudent === student ? 'selected' : ''} onClick={() => handleRowClick(student)}>
        <td>{student.name.toUpperCase()}</td>
        <td>{student.ticketNumber}</td>
        <td>{student.ratingGrade}</td>
        <td>{student.examGrade}</td>
        <td>{calculateFinalGrade(student.examGrade, student.ratingGrade)}</td>
        <td>{calculateFinalGrade(student.examGrade, student.ratingGrade) >= 4 ? 'Passed' : 'Failed'}</td>
        <td>{student.comments}</td>
      </tr>
    ));

  // Calculate statistics
  const statistics = calculateStatistics();

  return (
    <div className="App">
      <header>
        <h1>Exam Information</h1>
        {/* Display exam information here */}
      </header>
      <main>
        {/* Main block */}
        <div className="options">
          <button onClick={() => setShowStatistics(!showStatistics)}>
            {showStatistics ? 'Hide Statistics' : 'Show Statistics'}
          </button>
          <input type="text" placeholder="Filter by name" value={filterValue} onChange={(e) => setFilterValue(e.target.value)} />
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticket Number</th>
              <th>Rating Grade</th>
              <th>Exam Grade</th>
              <th>Final Grade</th>
              <th>Status</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {studentRows}
          </tbody>
        </table>
        {/* Optional Details block */}
        {selectedStudent && (
          <div className="details">
            <h2>Details for {selectedStudent.name}</h2>
            {/* Display details here */}
          </div>
        )}
      </main>
      {/* Statistics block */}
      {showStatistics && (
        <aside className="statistics">
          <h2>Statistics</h2>
          <p>Total Students: {statistics.totalStudents}</p>
          <p>Passed: {statistics.passed}</p>
          <p>Failed: {statistics.failed}</p>
          <p>Average Grade: {statistics.averageGrade}</p>
          <p>Max Grade: {statistics.maxGrade}</p>
          <p>Min Grade: {statistics.minGrade}</p>
        </aside>
      )}
      <footer>
        <p>Signature & Date</p>
      </footer>
    </div>
  );
}

export default App;
