/* Japanese initialisation for the jQuery time picker plugin. */
/* Written by Bernd Plagge (bplagge@choicenet.ne.jp). */
jQuery(function($){
	$.timepicker.regional['ja'] = {
		// Options
		timeSeparator: ':',				// The character to use to separate hours and minutes (default: ':')
		showLeadingZero: true,			// Define whether or not to show a leading zero for hours < 10 (default: true)
		showMinutesLeadingZero: true,	// Define whether or not to show a leading zero for minutes < 10 (default: true)
		showPeriod: true,				// Define whether or not to show AM/PM with selected time (default: false)
		showPeriodLabels: true,			// Define if the AM/PM labels on the left are displayed (default: true)
		periodSeparator: ' ',			// The character to use to separate the time from the time period
		altField: '',					// Define an alternate input to parse selected time to
		defaultTime: '',				// Used as default time when input field is empty or for inline timePicker
										// (set to 'now' for the current time, '' for no highlighted time, default value: now)
		
		// trigger options
		showOn: 'focus',				// Define when the timepicker is shown
										// 'focus': when the input gets focus, 'button' when the button trigger element is clicked,
										// 'both': when the input gets focus and when the button is clicked
		button: null,					// jQuery selector that acts as button trigger (ex: '#trigger_button')
		
		// Localization
		hourText: '時',					// Define the locale text for "Hours"
		minuteText: '分',				// Define the locale text for "Minute"
		amPmText: ['AM', 'PM'],			// Define the locale text for periods
		
		// Position
		myPosition: 'left top',			// Corner of the dialog to position, used with the jQuery UI Position utility if present
		atPosition: 'left bottom',		// Corner of the input to position
		
		// Events
		beforeShow: '',					// Callback function executed before the timepicker is rendered and displayed
		onSelect: '',					// Define a callback function when an hour / minutes is selected
		onClose: '',					// Define a callback function when the timepicker is closed
		onHourShow: '',					// Define a callback to enable / disable certain hours (ex: function onHourShow(hour))
		onMinuteShow: '',				// Define a callback to enable / disable certain minutes (ex: function onMinuteShow(hour, minute))
		
		// custom hours and minutes
		hours: {
			starts: 0,					// First displayed hour
			ends: 23					// Last displayed hour
		},
		minutes: {
			starts: 0,					// First displayed minute
			ends: 55,					// Last displayed minute
			interval: 5,				// Interval of displayed minutes
			manual: []					// Optional extra entries for minutes
		},
		rows: 4,						// Number of rows for the input tables, minimum 2, makes more sense if you use multiple of 2
		showHours: true,				// Define if the hours section is displayed or not (Set to false to get a minute only dialog)
		showMinutes: true,				// Define if the minutes section is displayed or not (Set to false to get an hour only dialog)
		
		// Min and Max time
		minTime: {						// Set the minimum time selectable by the user, disable hours and minutes
			hour: 0,					// previous to min time
			minute: 0
		},
		maxTime: {						// Set the minimum time selectable by the user, disable hours and minutes
			hour: 23,					// after max time
			minute: 55
		},
		
		// buttons
		showCloseButton: false,			// shows an OK button to confirm the edit
		closeButtonText: '閉じる',		// Text for the confirmation button (ok button)
		showNowButton: false,			// Shows the 'now' button
		nowButtonText: '現在時刻',		// Text for the now button
		showDeselectButton: false,		// Shows the deselect time button
		deselectButtonText: '選択解除'	// Text for the deselect button
	}
	$.timepicker.setDefaults($.timepicker.regional['ja']);
});
