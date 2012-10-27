/*
---

name: ViewController.Event.Pinch

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Section

provides:
	- ViewController.Event.Pinch

...
*/

ViewController.Event.Pinch = new Class({

	Extends: ViewController.Section,

	zone: null,

	loadView: function() {
		this.view = Moobile.View.at('templates/views/event-pinch-view.html');
	},

	viewDidLoad: function() {
		this.parent();
		this.zone = this.view.getElement('.zone');
		this.zone.addEvent('pinch', this.bound('onZonePinch'));
		this.zone.addEvent('ownanimationend', this.bound('onZoneAnimationEnd'));
	},

	destroy: function() {
		this.zone.removeEvent('pinch', this.bound('onZonePinch'));
		this.zone.removeEvent('ownanimationend', this.bound('onZoneAnimationEnd'));
		this.zone = null;
		this.parent();
	},

	onZonePinch: function() {
		if (this.zone.hasClass('flash') === false) {
			this.zone.addClass('flash');
		}
	},

	onZoneAnimationEnd: function(e) {
		this.zone.removeClass('flash');
	}

});