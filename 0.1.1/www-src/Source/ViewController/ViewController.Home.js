/*
---

name: ViewController.Home

description:

license:

authors:
	- Your name

requires:

provides:
	- ViewController.Home

...
*/

if (!window.ViewController) window.ViewController = {};

ViewController.Home = new Class({

	Extends: Moobile.ViewController,

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	transitionList: null,

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	controlList: null,

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	alertButton: null,

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	tapButton: null,

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	pinchButton: null,

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	swipeButton: null,

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	loadView: function() {
		this.view = Moobile.View.at('templates/views/home-view.html');
	},

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	viewDidLoad: function() {

		this.transitionList = this.view.getChildComponent('transition-list');
		this.transitionList.addEvent('select', this.bound('onTransitionItemSelect'));
		this.controlList = this.view.getChildComponent('control-list');
		this.controlList.addEvent('select', this.bound('onControlItemSelect'));

		this.alertButton = this.view.getChildComponent('alert-button');
		this.alertButton.addEvent('tap', this.bound('onAlertButtonTap'));

		this.tapButton = this.view.getChildComponent('tap-button');
		this.tapButton.addEvent('tap', this.bound('onTapButtonTap'));

		this.pinchButton = this.view.getChildComponent('pinch-button');
		this.pinchButton.addEvent('pinch', this.bound('onPinchButtonPinch'));

		this.swipeButton = this.view.getChildComponent('swipe-button');
		this.swipeButton.addEvent('swipe', this.bound('onSwipeButtonSwipe'));
	},

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	viewDidEnter: function() {
		this.transitionList.clearSelectedItem();
		this.controlList.clearSelectedItem();
	},

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	destroy: function() {
		this.transitionList.removeEvent('select', this.bound('onTransitionItemSelect'));
		this.transitionList = null;
		this.controlList.removeEvent('select', this.bound('onControlItemSelect'));
		this.controlList = null;

		this.alertButton.removeEvent('tap', this.bound('onAlertButtonTap'));
		this.alertButton = null;

		this.tapButton.removeEvent('tap', this.bound('onTapButtonTap'));
		this.tapButton = null;

		this.pinchButton.removeEvent('pinch', this.bound('onPinchButtonPinch'));
		this.pinchButton = null;

		this.swipeButton.removeEvent('swipe', this.bound('onSwipeButtonSwipe'));
		this.swipeButton = null;

		this.parent();
	},

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	onTransitionItemSelect: function(item) {

		var viewTransition = null;

		switch (item.getName()) {
			case 'none':
				viewTransition = new Moobile.ViewTransition.None;
				break;
			case 'fade':
				viewTransition = new Moobile.ViewTransition.Fade;
				break;
			case 'flip':
				viewTransition = new Moobile.ViewTransition.Flip;
				break;
			case 'slide':
				viewTransition = new Moobile.ViewTransition.Slide;
				break;
			case 'cubic':
				viewTransition = new Moobile.ViewTransition.Cubic;
				break;
			case 'cover':
				viewTransition = new Moobile.ViewTransition.Cover;
				break;
		}

		if (viewTransition) this.getViewControllerStack().pushViewController(new ViewController.Transition, viewTransition);
	},

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	onControlItemSelect: function(item) {

		var viewController = null;

		switch (item.getName()) {
			case 'bar':
				viewController = new ViewController.Bar();
				break;
			case 'button':
				viewController = new ViewController.Button();
				break;
			case 'list':
				viewController = new ViewController.List();
				break;
			case 'slider':
				viewController = new ViewController.Slider();
				break;
		}

		if (viewController) this.getViewControllerStack().pushViewController(viewController, new Moobile.ViewTransition.Slide);
	},

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	onAlertButtonTap: function() {
		var alert = new Moobile.Alert();
		this.view.getWindow().addChildComponent(alert);
		alert.setTitle('Alert');
		alert.setMessage('This is an alert message');
		alert.showAnimated();
	},

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	onTapButtonTap: function() {
		var alert = new Moobile.Alert();
		this.view.getWindow().addChildComponent(alert);
		alert.setTitle('Tapped!');
		alert.showAnimated();
	},

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	onPinchButtonPinch: function() {
		var alert = new Moobile.Alert();
		this.view.getWindow().addChildComponent(alert);
		alert.setTitle('Pinched!');
		alert.showAnimated();
	},

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	onSwipeButtonSwipe: function() {
		var alert = new Moobile.Alert();
		this.view.getWindow().addChildComponent(alert);
		alert.setTitle('Swiped!');
		alert.showAnimated();
	},

});