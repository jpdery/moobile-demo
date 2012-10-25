/*
---

name: ViewController.Component.List.Style

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Component

provides:
	- ViewController.Component.List.Style

...
*/

ViewController.Component.List.Style = new Class({

	Extends: ViewController.Component,

	options: {
		style: 'default'
	},

	loadView: function() {
		this.view = Moobile.View.at('templates/views/component-list-' + this.options.style + '-view.html');
	}

});