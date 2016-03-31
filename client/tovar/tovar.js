Template.tovar.helpers({
    tovarNewCollections:function () {
            return NewCollections.find({}, {sort: {price: 1}});
        }
    
  });

Template.tovar.onRendered(function () {
    $('.colorSquare img').hide();
    $('.hoverImg').hide();
  $( '.tovar img' ).hover(
        function() {
            var imgSrc = $(this).attr('names');
            console.log(imgSrc);
            var imgName = $(this).attr('name');
            $( this ).attr('src', imgName);
        
        },function() {
            var imgSrc = $(this).attr('names');
            $( this ).attr('src', imgSrc);         
        }
    );
  $('.tovarBlock').click(function (e) {
    $('.tablSize').attr('src', 's.png');
        var tovarId = $(this).attr('name');
        Session.set('tovarId', tovarId);
        console.log(Session.get('tovarId'));
 /*       $('#modal1').openModal();*/
            Router.go('razdelnyy', {name: Session.get('tovarId')});


    })
    $('#materialize-lean-overlay-2').click(function (e) {
        console.log('asdasdasdasd');

    })
$( '.colorSquare' ).hover(
        function() {
            var name = $(this).attr('name');
            $(this).parent().prev().children().attr('src', name)
        
        },
        function() {
            var img = $(this).parent().prev().children().attr('names');
            $(this).parent().prev().children().attr('src', img);
        
        }
    );
       
});


Router.route('main2',{
  path:'/:page',
  template: 'main',
  waitOn: function() {
    return Meteor.subscribe('newcollections');
  },
  data: function () {
    /*var destination = $('.tovar').offset().top;
        var minus = destination - 60;
        $("body,html").animate({scrollTop: minus }, 800);*/
        /*var destination = $('.tovar').offset().top;
        console.log(destination);*/
    /*this.render('main');*/
    var page = this.params.page;
    console.log(page);
    if(page === 'tovar' || page === 'advantages' || page === 'reviews' || page === 'views'){
        var objDowb = {
            tovar: 708,
            advantages: 1920,
        views: 2474,
            reviews: 4850
        }
        $("body,html").animate({scrollTop: objDowb[page] }, 800);
        
    }
    
    
  }/*,
  onBeforeAction: function(){
    this.next()
  },
  action: function () {
    console.log(this.params.page + 'asddddddddddddddddddddd');
    
  }*/
});




