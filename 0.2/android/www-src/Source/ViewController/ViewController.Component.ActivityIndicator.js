/*
---

name: ViewController.Component.ActivityIndicator

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Section

provides:
	- ViewController.Component.ActivityIndicator

...
*/

ViewController.Component.ActivityIndicator = new Class({

	Extends: ViewController.Section,

	activityIndicator: null,

	startButton: null,

	stopButton: null,

	loadView: function() {
		this.view = Moobile.View.at('templates/views/component-activity-indicator-view.html');
	},

	viewDidLoad: function() {
		this.parent();
		this.activityIndicator = this.view.getChildComponent('activity-indicator');
		this.startButton = this.view.getChildComponent('start-button');
		this.stopButton = this.view.getChildComponent('stop-button');
		this.startButton.addEvent('tap', this.bound('onStartButtonTap'));
		this.stopButton.addEvent('tap', this.bound('onStopButtonTap'));
	},

	destroy: function() {
		this.startButton.removeEvent('tap', this.bound('onStartButtonTap'));
		this.stopButton.removeEvent('tap', this.bound('onStopButtonTap'));
		this.activityIndicator = null;
		this.startButton = null;
		this.stopButton = null;
		this.parent();
	},

	onStartButtonTap: function() {
		this.activityIndicator.start();
	},

	onStopButtonTap: function() {
		this.activityIndicator.stop();
	}

});