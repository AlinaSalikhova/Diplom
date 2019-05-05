Template.addTeacher.events({
    'submit #addteacherform': function (e) {
        console.log(e);
        e.preventDefault();
        var teacher = {
            name: $('#name').val(),
            surname: $('#surname').val(),
            lastname: $('#lastname').val(),
            degree: $('#degree').val(),
            phone: $('#department').val()
        };
        Teachers.insert(teacher);
        e.target.reset()
    }
});
