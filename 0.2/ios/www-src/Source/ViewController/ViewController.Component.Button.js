/*
---

name: ViewController.Component.Button

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Section

provides:
	- ViewController.Component.Button

...
*/

ViewController.Component.Button = new Class({

	Extends: ViewController.Section,

	loadView: function() {
		this.view = Moobile.View.at('templates/views/component-button-view.html');
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
		var name = item.getName();
		if (name) {
			this.getViewControllerStack().pushViewController(new ViewController.Component.Button.Style({style: name}), new Moobile.ViewTransition.Slide);
		}
	}
});