Meteor.publish('students', function() {
    return Students.find();
});
Meteor.publish('teachers', function() {
    return Teachers.find();
});
Meteor.publish('subjects', function() {
    return Subjects.find();
});
Meteor.publish('audiences', function() {
    return Audiences.find();
});
Meteor.publish('groups', function() {
    return Groups.find();
});
Meteor.publish('subjectentites', function() {
    return SubjectEntites.find();
});
