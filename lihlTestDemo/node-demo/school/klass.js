
var student=require('./student');
var teacher=require('./teacher');

teacher.add('LHL');
function add (teacherName,students) {
    teacher.add(teacherName);
    students.forEach(function (item,index) {
        student.add(item)
    })
}

exports.add=add;

