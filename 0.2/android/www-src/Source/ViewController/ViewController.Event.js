/*
---

name: ViewController.Event

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Section

provides:
	- ViewController.Event

...
*/

ViewController.Event.Tap = new Class({

	Extends: ViewController.Section,

	zone: null,

	viewDidLoad: function() {
		this.parent();
		this.zone = this.view.getElement('.zone');
		this.zone.addEvent('tap', this.bound('onZoneTap'));
		this.zone.addEvent('ownanimationend', this.bound('onZoneAnimationEnd'));
	},

	destroy: function() {
		this.zone.removeEvent('tap', this.bound('onZoneTap'));
		this.zone.removeEvent('ownanimationend', this.bound('onZoneAnimationEnd'));
		this.zone = null;
		this.parent();
	},

	onZoneTap: function() {
		if (this.zone.hasClass('flash') === false) {
			this.zone.addClass('flash');
		}
	},

	onZoneAnimationEnd: function(e) {
		this.zone.removeClass('flash');
	}

});