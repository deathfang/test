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
      start: new Date(1393603200000),
      events:[
        {
          title: '啊大两岁的啊斯大林大三大四的啊大大是的',
          favorites:251
        },
        {
          title: '啊哈哈是 鲁大师',
          favorites:251
        }
      ],
      size:2,
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

      start: new Date(1393839157502),
      events:[
        {
          id: 999,
          title: 'Lunch'
        }
      ]
//					end: new Date(y, m, d, 14, 0),
//					allDay: false
    },
    {

      start: new Date(1393839157502),
      events:[
        {
          id: 999,
          title: 'Lunchxxx'
        }
      ]
//					end: new Date(y, m, d, 14, 0),
//					allDay: false
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
  ],
  eventMouseover:function(){
    console.log(1000)
  }
});
$('.fc-button-prev,.fc-button-next').on('click',function(){
  currentMonth = $('#calendar').fullCalendar('getDate').getMonth() + 1;
  !$('#calendar').fullCalendar('clientEvents').some(function(i){
    return i.start.getMonth() + 1 == currentMonth
  }) && $('#calendar').fullCalendar('addEventSource',
    [

      {
        start: new Date(y, currentMonth -1 , d),
        events:[
          {
            title:'fuck'
          }
        ],
        size:1
      }

    ]
  );
});

var eventsData = {};
var docElem  = document.documentElement;
var box = { top: 0, bottom: 0 }
$('.fc-event').mouseenter(function(){
  var that  = this;
  var $td = $(that).parents('td');
  var date = $td.data('date');
  if (eventsData[date]) {

  }else{
    eventsData[date] = {
      events:[

      ]
    }


    if ( typeof that.getBoundingClientRect !== undefined ) {
      box = that.getBoundingClientRect();
    }
    $('.modal-event').css({
      left:box.left  + (window.pageXOffset || docElem.scrollLeft) - docElem.clientLeft,
      top:box.bottom + (window.pageYOffset || docElem.scrollTop) - docElem.clientTop
    }).show()
  }
}).mouseleave(function(){
    $('.modal-event').hide()
  })



