/*
---

name: ViewController.Component.Alert

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Component

provides:
	- ViewController.Component.Alert

...
*/

ViewController.Component.Alert = new Class({

	Extends: ViewController.Component,

	verticalLayoutButton: null,

	horizontalLayoutAlert: null,

	verticalLayoutAlert: null,

	horizontalLayoutButton: null,

	loadView: function() {
		this.view = Moobile.View.at('templates/views/component-alert-view.html');
	},

	viewDidLoad: function() {

		this.parent();

		this.verticalLayoutButton = this.view.getChildComponent('vertical-layout-button');
		this.horizontalLayoutButton = this.view.getChildComponent('horizontal-layout-button');
		this.verticalLayoutButton.addEvent('tap', this.bound('onVerticalLayoutButtonTap'));
		this.horizontalLayoutButton.addEvent('tap', this.bound('onHorizontalLayoutButtonTap'));

		this.verticalLayoutAlert = new Moobile.Alert(null, {layout: 'vertical'});
		this.verticalLayoutAlert.setTitle('Lorem');
		this.verticalLayoutAlert.setMessage('Lorem ipsum dolor sit amet');
		this.verticalLayoutAlert.addButton('OK');
		this.verticalLayoutAlert.addButton('Cancel');
		this.verticalLayoutAlert.setDefaultButtonIndex(0);

		this.horizontalLayoutAlert = new Moobile.Alert();
		this.horizontalLayoutAlert.setTitle('Lorem');
		this.horizontalLayoutAlert.setMessage('Lorem ipsum dolor sit amet');
		this.horizontalLayoutAlert.addButton('OK');
		this.horizontalLayoutAlert.addButton('Cancel');
		this.horizontalLayoutAlert.setDefaultButtonIndex(0);
	},

	destroy: function() {
		this.verticalLayoutButton.removeEvent('tap', this.bound('onVerticalLayoutButtonTap'));
		this.horizontalLayoutButton.removeEvent('tap', this.bound('onHorizontalLayoutButtonTap'));
		this.verticalLayoutButton = null;
		this.horizontalLayoutButton = null;
		this.verticalLayoutAlert.destroy();
		this.verticalLayoutAlert = null;
		this.horizontalLayoutAlert.destroy();
		this.horizontalLayoutAlert = null;
		this.parent();
	},

	onVerticalLayoutButtonTap: function() {
		this.verticalLayoutAlert.showAnimated();
	},

	onHorizontalLayoutButtonTap: function() {
		this.horizontalLayoutAlert.showAnimated();
	}

});