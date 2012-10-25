/*
---

name: ViewController.Component.Bar

description:

license:

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- ViewController.Section

provides:
	- ViewController.Component.Bar

...
*/

ViewController.Component.Bar = new Class({

	Extends: ViewController.Section,

	loadView: function() {
		this.view = Moobile.View.at('templates/views/component-bar-view.html');
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
			this.getViewControllerStack().pushViewController(new ViewController.Component.Bar.Style({style: name}), new Moobile.ViewTransition.Slide);
		}
	}

});