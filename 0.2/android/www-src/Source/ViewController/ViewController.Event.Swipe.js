/*
---

name: ViewController.Event.Swipe

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Section

provides:
	- ViewController.Event.Swipe

...
*/

ViewController.Event.Swipe = new Class({

	Extends: ViewController.Section,

	zone: null,

	loadView: function() {
		this.view = Moobile.View.at('templates/views/event-swipe-view.html');
	},

	viewDidLoad: function() {
		this.parent();
		this.zone = this.view.getElement('.zone');
		this.zone.addEvent('swipe', this.bound('onZoneSwipe'));
		this.zone.addEvent('ownanimationend', this.bound('onZoneAnimationEnd'));
	},

	destroy: function() {
		this.zone.removeEvent('swipe', this.bound('onZoneSwipe'));
		this.zone.removeEvent('ownanimationend', this.bound('onZoneAnimationEnd'));
		this.zone = null;
		this.parent();
	},

	onZoneSwipe: function() {
		if (this.zone.hasClass('flash') === false) {
			this.zone.addClass('flash');
		}
	},

	onZoneAnimationEnd: function(e) {
		this.zone.removeClass('flash');
	}

});