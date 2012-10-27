/*
---

name: ViewController.Component.List

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Section

provides:
	- ViewController.Component.List

...
*/

ViewController.Component.List = new Class({

	Extends: ViewController.Section,

	loadView: function() {
		this.view = Moobile.View.at('templates/views/component-list-view.html');
	}

});