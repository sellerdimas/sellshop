Template.rezdelnyyNav.events({
	'click .brand-logo':function(e){
		e.preventDefault();
		Router.go('main', 'asd');
	}
});

Template.rezdelnyyNav.events({
    'click #navButton':function(e, tmpl) {
    	$('#modal2').openModal();
        


    }
});