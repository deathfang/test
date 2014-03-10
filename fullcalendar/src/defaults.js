
var defaults = {

	// display
	defaultView: 'month',
	aspectRatio: 1.35,
	header: {
		left: 'title',
		center: 'prev,next today',
		right: ''
	},
	weekends: true,
	weekNumbers: false,
	weekNumberCalculation: 'iso',
	weekNumberTitle: 'W',
	
	// editing
	//editable: false,
	//disableDragging: false,
	//disableResizing: false,
	
	allDayDefault: true,
	ignoreTimezone: true,
	
	// event ajax
	lazyFetching: true,
	startParam: 'start',
	endParam: 'end',
	
	// time formats
	titleFormat: {
		month: 'MMMM yyyy',
		week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
		day: 'dddd, MMM d, yyyy'
	},
	columnFormat: {
		month: 'ddd',
		week: 'ddd M/d',
		day: 'dddd M/d'
	},
	timeFormat: { // for event elements
		'': 'h(:mm)t' // default
	},
	
	// locale
	isRTL: false,
	firstDay: 0,
	monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
	dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
	dayNamesShort: ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
	buttonText: {
		prev: "<span class='fc-text-arrow'></span>",
		next: "<span class='fc-text-arrow'></span>",
		prevYear: "<span class='fc-text-arrow'>&laquo;</span>",
		nextYear: "<span class='fc-text-arrow'>&raquo;</span>",
		today: '查看今日',
		month: 'month',
		week: 'week',
		day: 'day'
	},
	
	// jquery-ui theming
	theme: false,
	buttonIcons: {
		prev: 'circle-triangle-w',
		next: 'circle-triangle-e'
	},
	
	//selectable: false,
	unselectAuto: true,
	
	dropAccept: '*',
	
	handleWindowResize: true
	
};

// right-to-left defaults
//var rtlDefaults = {
//	header: {
//		left: 'next,prev today',
//		center: '',
//		right: 'title'
//	},
//	buttonText: {
//		prev: "<span class='fc-text-arrow'>&rsaquo;</span>",
//		next: "<span class='fc-text-arrow'>&lsaquo;</span>",
//		prevYear: "<span class='fc-text-arrow'>&raquo;</span>",
//		nextYear: "<span class='fc-text-arrow'>&laquo;</span>"
//	},
//	buttonIcons: {
//		prev: 'circle-triangle-e',
//		next: 'circle-triangle-w'
//	}
//};


