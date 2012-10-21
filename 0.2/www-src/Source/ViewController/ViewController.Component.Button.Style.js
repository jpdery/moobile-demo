/*
---

name: ViewController.Component.Button.Style

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Component

provides:
	- ViewController.Component.Button.Style

...
*/

ViewController.Component.Button.Style = new Class({

	Extends: ViewController.Component,

	options: {
		style: 'default'
	},

	loadView: function() {
		this.view = Moobile.View.at('templates/views/component-button-' + this.options.style + '-view.html');
	},

	viewDidLoad: function() {
		this.parent();
	},

	destroy: function() {
		this.parent();
	}

});