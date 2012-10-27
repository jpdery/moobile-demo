/*
---

name: ViewController.Component.ScrollView

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Section

provides:
	- ViewController.Component.ScrollView

...
*/

if (!window.ViewController) window.ViewController = {};
if (!window.ViewController.Component) window.ViewController.Component = {};

ViewController.Component.ScrollView = new Class({

	Extends: ViewController.Section,

	errorAlert: null,

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

		try {

			switch (item.getName()) {
				case 'h-paging':
					viewController = new ViewController.Component.ScrollView.HPaging;
					break;
				case 'v-paging':
					viewController = new ViewController.Component.ScrollView.VPaging;
					break;
				case 'grid':
					viewController = new ViewController.Component.ScrollView.Grid;
					break;
			}

		} catch (e) {

			if (this.errorAlert === null) {
				this.errorAlert = new Moobile.Alert();
				this.errorAlert.setTitle('Error');
				this.errorAlert.setMessage('The selected engine is not available on this platform.');
			}

			this.errorAlert.showAnimated();

			this.list.clearSelectedItem();
		}

		if (viewController) this.getViewControllerStack().pushViewController(viewController, new Moobile.ViewTransition.Cover);
	}

});