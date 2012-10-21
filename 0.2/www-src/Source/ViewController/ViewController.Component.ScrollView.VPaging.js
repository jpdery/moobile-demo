/*
---

name: ViewController.Component.ScrollView.VPaging

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Component

provides:
	- ViewController.Component.ScrollView.VPaging

...
*/

ViewController.Component.ScrollView.VPaging = new Class({

	Extends: ViewController.Component,

	options: {
		style: 'default'
	},

	loadView: function() {
		this.view = Moobile.ScrollView.at('templates/views/component-scroll-view-v-paging-view.html', {
			scroll: 'vertical',
			scrollbar: 'none',
			snapToPage: true,
		});
	},

	viewDidBecomeReady: function() {
		this.parent();
		this.update();
	},

	viewDidRotate: function(orientation) {
		this.parent(orientation);
		this.update();
	},

	update: function() {
		this.view.getElements('.page').setStyle('height', this.view.getContentWrapperSize().y);
	}

});