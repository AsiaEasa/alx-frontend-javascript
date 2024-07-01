export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city)
    .map(student => {
      const GRADE_O = newGrades.find(grade => grade.studentId === student.id);
      const GREADE = GRADE_O ? GRADE_O.grade : 'N/A';
      return { ...student, grade: GREADE };
    });
}
