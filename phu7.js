let students = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
];
let findTopStudents = (items) => {
    return items.filter(student => {
        let avg = (student.scores.english + student.scores.math + student.scores.literature) / 3;
        return avg >= 8;
    });
};
let topStudent = findTopStudents(students);
console.log("Sinh viên có điểm trung bình >= 8:");
console.table(topStudent);