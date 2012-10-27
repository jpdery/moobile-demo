/*
---

name: ViewController.Component.ScrollView.Grid

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Section

provides:
	- ViewController.Component.ScrollView.Grid

...
*/

ViewController.Component.ScrollView.Grid = new Class({

	Extends: ViewController.Section,

	loadView: function() {
		this.view = Moobile.ScrollView.at('templates/views/component-scroll-view-grid-view.html', {
			scroll: 'both',
			scrollbar: 'none',
			snapToPage: true,
			snapToPageSizeX: 150,
			snapToPageSizeY: 150,
		});
	},

	viewDidLoad: function() {
		this.parent();
		this.view.setContentSize(1500, 1500);
	}

});