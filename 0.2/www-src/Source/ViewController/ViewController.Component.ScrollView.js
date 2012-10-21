/*
---

name: ViewController.Component.ScrollView

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Component

provides:
	- ViewController.Component.ScrollView

...
*/

if (!window.ViewController) window.ViewController = {};
if (!window.ViewController.Component) window.ViewController.Component = {};

ViewController.Component.ScrollView = new Class({

	Extends: ViewController.Component,

	loadView: function() {
		this.view = Moobile.View.at('templates/views/component-scroll-view-view.html');
	},

	viewDidLoad: function() {
		this.parent();
		this.list = this.view.getChildComponent('list');
		this.list.addEvent('select', this.bound('onListSelect'));
	},

	viewWillEnter: function() {
		this.parent();
		this.list.clearSelectedItem();
	},

	destroy: function() {
		this.list.removeEvent('select', this.bound('onListSelect'));
		this.list = null;
		this.parent();
	},

	onListSelect: function(item) {

		var viewController = null;

		switch (item.getName()) {
			case 'h-paging':
				viewController = new ViewController.Component.ScrollView.HPaging;
				break;
			case 'v-paging':
				viewController = new ViewController.Component.ScrollView.VPaging;
				break;
		}

		if (viewController) this.getViewControllerStack().pushViewController(viewController, new Moobile.ViewTransition.Slide);
	}

});