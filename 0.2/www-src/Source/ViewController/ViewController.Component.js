/*
---

name: ViewController.Component

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- Init

provides:
	- ViewController.Component

...
*/

ViewController.Component = new Class({

	Extends: Moobile.ViewController,

	backButton: null,

	viewDidLoad: function() {
		this.backButton = this.view.getDescendantComponent('back-button');
		this.backButton.addEvent('tap', this.bound('onBackButtonTap'));
	},

	destroy: function() {
		this.backButton.removeEvent('onBackButtonTap');
		this.backButton = null;
		this.parent();
	},

	onBackButtonTap: function() {
		this.getViewControllerStack().popViewController();
	}

});