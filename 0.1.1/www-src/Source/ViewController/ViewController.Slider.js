/*
---

name: ViewController.Slider

description:

license:

authors:
	- Your name

requires:

provides:
	- ViewController.Slider

...
*/

if (!window.ViewController) window.ViewController = {};

ViewController.Slider = new Class({

	Extends: Moobile.ViewController,

	navigationBar: null,

	navigationBarItem: null,

	backButton: null,

	loadView: function() {
		this.view = Moobile.View.at('templates/views/control-slider-view.html');
	},

	viewDidLoad: function() {

		this.navigationBar = this.view.getChildComponent('navigation-bar');
		this.navigationBarItem = this.navigationBar.getItem();

		this.backButton = this.navigationBarItem.getChildComponent('back-button');
		this.backButton.addEvent('tap', this.bound('onBackButtonTap'));
	},

	destroy: function() {

		this.navigationBar = null;
		this.navigationBarItem = null;

		this.backButton.removeEvent('tap', this.bound('onBackButtonTap'));
		this.backButton = null;

		this.parent();
	},

	onBackButtonTap: function() {
		this.getViewControllerStack().popViewController();
	}

});