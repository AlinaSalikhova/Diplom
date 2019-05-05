Meteor.startup(function () {

    sAlert.config({
        effect: 'flip',
        position: 'top',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0,
        beep: false,
        onClose: _.noop //

    });

});