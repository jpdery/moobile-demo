/*
---

name: ViewController.Component.Slider

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Component

provides:
	- ViewController.Component.Slider

...
*/

ViewController.Component.Slider = new Class({

	Extends: ViewController.Component,

	hSlider: null,

	hValue: null,

	loadView: function() {
		this.view = Moobile.View.at('templates/views/component-slider-view.html');
	},

	viewDidLoad: function() {

		this.parent();

		this.hValue = this.view.getChildComponent('h-value');
		this.hSlider = this.view.getChildComponent('h-slider');
		this.hSlider.addEvent('change', this.bound('onHorizontalSliderChange'));

		this.vValue = this.view.getChildComponent('v-value');
		this.vSlider = this.view.getChildComponent('v-slider');
		this.vSlider.addEvent('change', this.bound('onVerticalSliderChange'));
	},

	destroy: function() {

		this.hSlider.removeEvent('change', this.bound('onHorizontalSliderChange'));
		this.hSlider = null;
		this.hValue = null;

		this.vSlider.removeEvent('change', this.bound('onVerticalSliderChange'));
		this.vSlider = null;
		this.vValue = null;

		this.parent();
	},

	onHorizontalSliderChange: function(value) {
		this.hValue.setText(Math.round(value));
	},

	onVerticalSliderChange: function(value) {
		this.vValue.setText(Math.round(value));
	}

});