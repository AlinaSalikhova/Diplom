Template.addSubjectEnt.events({
    'submit #addsubjectEntform': function (e) {
        console.log(e);
        e.preventDefault();
        var subjEnt = {
            subject: $('#subject').val(),
            teacher: $('#teacher').val(),
            room: $('#room').val(),
            group: $('#group').val(),
            type: $('#type').val(),
            times: $('#times').val(),
            dayOfWeek: $('#dayOfWeek').val(),
            weekNumber: $('#weekNumber').val()
        };
        SubjectEntities.insert(subjEnt);
        e.target.reset()
    }
});
