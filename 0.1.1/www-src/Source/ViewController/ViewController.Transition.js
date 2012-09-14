/*
---

name: ViewController.Transition

description:

license:

authors:
	- Your name

requires:

provides:
	- ViewController.Transition

...
*/

if (!window.ViewController) window.ViewController = {};

ViewController.Transition = new Class({

	Extends: Moobile.ViewController,

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	backButton: null,

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	loadView: function() {
		this.view = Moobile.View.at('templates/views/transition-view.html');
	},

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	viewDidLoad: function() {
		this.backButton = this.view.getChildComponent('back-button');
		this.backButton.addEvent('tap', this.bound('onBackButtonTap'));
	},

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	destroy: function() {
		this.backButton.removeEvent('tap', this.bound('onBackButtonTap'));
		this.backButton = null;
		this.parent();
	},

	/**
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1.0
	 */
	onBackButtonTap: function() {
		this.getViewControllerStack().popViewController();
	}

});