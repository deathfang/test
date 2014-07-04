if (!Array.prototype.some)
{
  Array.prototype.some = function(fun /*, thisArg */)
  {
    'use strict';

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function')
      throw new TypeError();

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      if (i in t && fun.call(thisArg, t[i], i, t))
        return true;
    }

    return false;
  };
}


var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();
var currentMonth;
var calendar = $('#calendar').fullCalendar({
//        header: {
//            left: 'prev,next today',
//            center: 'title',
//            right: ''
//        },
//			editable: true,
  events: [
    {
      //event._start = cloneDate(event.start = parseDate(event.start, ignoreTimezone));
      start: '2014-03-02',
      events:[
        {
          title: '啊大两岁的啊斯大林大三大四的啊大大是的',
          url:'http://baidu.com',
          place:'啊拉拉',
          time:'2014/02/06（星期四）晚上20:00',
          'mapurl':'map.baidu.com',
          favorites:251
        },
        {
          title: '天翼 jsjdj iausldjskvhdas啊是打扫打扫打扫大时代',
          url:'http://baidu.com',
          place:'啊拉拉啊拉拉啊拉拉啊拉拉啊拉拉啊拉拉啊拉拉啊拉拉啊拉拉啊拉拉',
          time:'2014/02/06（星期四）晚上20:00 ',
          'mapurl':'map.baidu.com',
          favorites:251
        }
      ],
      size:2
    },
    {
      id: 999,
      start: new Date(y, m, d-3),
      events:[
        {
          title: 'Repeating Event',
          favorites:351
        }
      ],
      allDay: false
    },
    {
      start: new Date(y, m, d-3),
      events:[
        {
          title: 'last Repeating Event',
          favorites:351
        }
      ],
      allDay: false
    },
    {
      start: new Date(y, m, d+4),
      events:[
        {
          id: 999,
          title: 'Repeating Event',
          favorites:151
        }
      ],
      allDay: false
    },
    {

      start: new Date(y, m, d),
      events:[
        {
          id: 999,
          title: 'Meeting',
          favorites:12
        },
        {
          title: 'Long Event',
          favorites:129
        }
      ],
      allDay: false
    },
    {

      start: new Date(y, m, d+1),
      events:[
        {
          id: 999,
          title: 'Birthday Party'
        }
      ],
//                end: new Date(y, m, d+1, 22, 30),
      allDay: false
    },
    {

      start: new Date(y, m, 28),
      events:[
        {
          id: 999,
          title: 'Click for Google',
          url: 'http://google.com/'
        }
      ],
      end: new Date(y, m, 29)

    }
  ]
});

$('.fc-button-prev,.fc-button-next').on('click',function(){
  currentMonth = $('#calendar').fullCalendar('getDate').getMonth() + 1;
  if (!$('#calendar').fullCalendar('clientEvents').some(function(i){
    return i.start.getMonth() + 1 == currentMonth
  })){
    $('#calendar').fullCalendar('addEventSource',
      [

        {
          start: new Date(y, currentMonth -1 , d),
          events:[
            {
              title: 'fuck U',
              url:'http://baidu.com',
              place:'fuck',
              time:'2014/02/06（星期四）晚上20:00',
              'mapurl':'map.baidu.com',
              favorites:151
            }
          ],
          size:1
        }
      ]
    );
    modalEventVisable();
  }


});

var eventsData = {};
var docElem  = document.documentElement;
var box = { top: 0, bottom: 0 }

function modalEventVisable(){

  $('.fc-event').mouseenter(function(){
    $('.modal-event').hide()
    var that  = this;
    var $td = $(that).parents('td');
    var date = $td.data('date');
    var eq = $(that).find('a').data('eq');
    var modal;

    if (eventsData[date]) {
      modal = $('#modal-event-' + date).show();
      if (eventsData[date].events.length > 1){
        setTimeout(function(){
          modal.slidesjs(eq+1);
        },100)

      }
    }else{
      eventsData[date] = {
        date:date,
        events:[],
        eventAllUrl:''
      }

      var eventAllUrl = $td.find('.fc-event-counts').attr('href');

      $td.find('.fc-event a').each(function(){
        eventsData[date].events.push($(this).data());
      })
      eventsData[date].eventAllUrl = eventAllUrl;

      modal = $(Handlebars.templates['modal-event'](eventsData[date])).appendTo('body');

      if (eventsData[date].events.length > 1) {
       modal.slidesjs({
         width:320,
         height:202,
         navigation:{
           active:false,
           state:true
         }
       }).slidesjs(eq+1)
       .find('.slidesjs-next').on('click.goto',function(){
         if (!$(this).hasClass('enable')) {
           location.href = eventAllUrl
         }
       })
     }

     if ( typeof that.getBoundingClientRect !== undefined ) {
        box = that.getBoundingClientRect();
      }
      var offset;
      var tdClass = $td.attr('class');
      if (tdClass.indexOf('fc-first') !== -1) {
        offset = 0
      }else if(tdClass.indexOf('fc-last') !== -1){
        offset = 320 - 120
      }else{
        offset = (320 - 120)/2
      }
      modal.css({
        left:box.left  + (window.pageXOffset || docElem.scrollLeft) - docElem.clientLeft - offset,
        top:box.bottom + (window.pageYOffset || docElem.scrollTop) - docElem.clientTop
      })
      .mouseleave(function(){
        $(this).hide()
      })
    }
  })

}

modalEventVisable();


$('.fc-button-today').click(modalEventVisable);
