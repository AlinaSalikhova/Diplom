Template.addRoom.events({
    'submit #addroomform': function (e) {
        console.log(e);
        e.preventDefault();
        var room = {
            number: $('#number').val(),
            place: $('#place').val(),
            doesHaveComp: $('#doesHaveComp').val(),
            doesHaveProj: $('#doesHaveProj').val(),
            numberOfSeats: $('#numberOfSeats').val()
        }
        Rooms.insert(room);
        e.target.reset()
    }
});