Template.addGroup.events({
    'submit #addgroupform': function (e) {
        console.log(e);
        e.preventDefault();
        var group = {
            name: $('#name').val(),
            year: $('#year').val(),
            department: $('#department').val(),
            faculty: $('#faculty').val(),
            students:[]
        }
        Groups.insert(group);
        e.target.reset()
    }
})