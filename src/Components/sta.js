import React, { useState } from 'react';
import students from './stu';

function sta() {
  const [passPercentage, setPassPercentage] = useState(0);
  const [failPercentage, setFailPercentage] = useState(0);

  const calculateStatistics = () => {
    const totalStudents = students.length;
    let passCount = 0;
    let failCount = 0;

    students.forEach(student => {
      const finalGrade = 0.6 * student.examGrade + 0.4 * student.ratingGrade;
      if (finalGrade >= 4) {
        passCount++;
      } else {
        failCount++;
      }
    });

    const passPercentage = ((passCount / totalStudents) * 100).toFixed(2);
    const failPercentage = ((failCount / totalStudents) * 100).toFixed(2);

    setPassPercentage(passPercentage);
    setFailPercentage(failPercentage);
  };

  return (
    <div>
      <button onClick={calculateStatistics}>Show Statistics</button>
      {passPercentage > 0 && failPercentage > 0 && (
        <div>
          <p>Average Pass Percentage: {passPercentage}%</p>
          <p>Average Fail Percentage: {failPercentage}%</p>
        </div>
      )}
    </div>
  );
}

export default sta;
