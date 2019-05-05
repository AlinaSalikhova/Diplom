Template.addStudent.events({
    'submit #addstudentform': function (e) {
        console.log(e);
        e.preventDefault();
        var student = {
            name: $('#name').val(),
            surname: $('#surname').val(),
            lastname: $('#lastname').val(),
            numstud: $('#numstud').val(),
            numzach: $('#numzach').val(),
            phone: $('#phone').val()
        };
        var newStudent=Students.insert(student);
        var groupid=$('#group').val();
        Groups.update({_id:groupid}, {$addToSet:{students:newStudent}});
        e.target.reset();
    }
});

Template.addStudent.helpers({
    'groups':function () {
        return Groups.find();
    }
})