Template.addSubject.events({
    'submit #addsubjectform': function (e) {
        console.log(e);
        e.preventDefault();
        var subject = {
            name: $('#name').val(),
            units: $('#units').val(),
            numberOfHours: $('numberofhours').val()
        };
        Subjects.insert(subject);
        e.target.reset()
    }
});