Template.razdelnyy.helpers({
    modalNewCollections:function () {
            return NewCollections.find();
        }
    
  });
/*Template.razdelnyy.onRendered(function () {
 $('.colorPhoto img').click(function (e) {
    $(".colorPhoto img").removeClass("active"); //удаляем класс во всех вкладках
        $(this).addClass('active');

     


    })

  
})*/

Template.razdelnyy.events({
    'click .modalPhoto img': function (e, tmpl) {
         var imgSrc = $(e.target).attr('src');
            $('#mainImg').attr('src', imgSrc);
    }
});


Template.razdelnyy.events({
    'click #tableSize': function (e, tmpl) {
      /* var imgSrc = $(e.target).attr('name');
            $('.tablSize').attr('src', imgSrc);*/
                       var destination = $('.tableSize').offset().top;
        var minus = destination - 60;
        $("body,html").animate({scrollTop: minus }, 900);
    }
});
Template.razdelnyy.events({
    'click .colorPhoto img': function (e, tmpl) {
           $(".colorPhoto img").removeClass("colorActive"); //удаляем класс во всех вкладках
        $(e.target).addClass('colorActive');
        var imgSrc = $(e.target).attr('src');
            $('#mainImg').attr('src', imgSrc);
    }
});
Template.razdelnyy.events({
    'click .razdelnyysmalImg img': function (e, tmpl) {
           $(".razdelnyysmalImg img").removeClass("razdelnyyColorActive"); //удаляем класс во всех вкладках
        $(e.target).addClass('razdelnyyColorActive');
        var imgSrc = $(e.target).attr('src');
            $('#mainImg').attr('src', imgSrc);
    }
});
Template.razdelnyy.events({
    'click .close': function (e) {
        $('#modal1').closeModal();
                 var destination = $('.tovar').offset().top;
        var minus = destination - 60;
        $("body,html").animate({scrollTop: minus }, 50);
            

    }
});

Template.razdelnyy.events({
    'click .modalButt': function (e, tmpl) {
            var modalVal = {
                header: $('.ModalTovarHeader').text(),
                firma: $('.modalFirma').text(),
                price: $('.mPirce').text(),
                sizeByst: $('.selectSizeByst').val(),
                sizeTrysu: $('.selectSizeTrysu').val(),
                quantity: $('.quantity').val(),
                color: $('.colorPhoto .colorActive').attr('src'),
                name: $('#name').val(),
                number: $('#namber').val()
            }
            console.log(modalVal.header,
            modalVal.firma,
            modalVal.price,
            modalVal.sizeByst,
            modalVal.sizeTrysu,
            modalVal.name,
            modalVal.number);     
            if(modalVal.name && modalVal.number && modalVal.color){
            Meteor.call('Orders',modalVal, function (err, res) {
                if(err){
                    console.log('error methods');
                }else{

                     ga('send', 'event', 'zakaz', 'buy_kypalnik');
                    yaCounter35842265.reachGoal('zakaz');
                     $('#modal3').openModal();
                     
                }
            });       
        }else{
            alert('Вы не выбрали цвет или не ввели имя и телефон');
        }
    }
});