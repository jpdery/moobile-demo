/*
---

name: ViewController.Component.ScrollView.HPaging

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Section

provides:
	- ViewController.Component.ScrollView.HPaging

...
*/

ViewController.Component.ScrollView.HPaging = new Class({

	Extends: ViewController.Section,

	options: {
		engine: 'IScroll'
	},

	loadView: function() {
		console.log(this.options);
		this.view = Moobile.ScrollView.at('templates/views/component-scroll-view-h-paging-view.html', {
			scroller: this.options.engine,
			scroll: 'horizontal',
			scrollbar: 'none',
			snapToPage: true,
		});
	},

	viewDidLoad: function() {
		this.parent();
		this.view.setLayout('horizontal');
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
		var size = this.view.getContentWrapperSize();
		this.view.setContentSize(10 * size.x);
		this.view.getElements('.page').setStyle('width', size.x);
	}

});