Router.route('/addgroup', function () {
    this.layout('mainLayout');
    this.render('addGroup')
});
Router.route('/addRooms', function () {
    this.layout('mainLayout');
    this.render('addRoom')
});
Router.route('/addstud', function () {
    this.layout('mainLayout');
    this.render('addStudent')
});
Router.route('/addsubj', function () {
    this.layout('mainLayout');
    this.render('addSubject')
});
Router.route('/addSubjectEntities', function () {
    this.layout('mainLayout');
    this.render('addSubjectEnt')
});
Router.route('/addteach', function () {
    this.layout('mainLayout');
    this.render('addTeacher')
});