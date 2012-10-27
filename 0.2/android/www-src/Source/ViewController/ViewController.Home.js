/*
---

name: ViewController.Home

description:

license:

authors:
	- Your name

requires:
	- ViewController.Section

provides:
	- ViewController.Home

...
*/

ViewController.Home = new Class({

	Extends: Moobile.ViewController,

	list: null,

	loadView: function() {
		this.view = Moobile.View.at('templates/views/home-view.html');
	},

	viewDidLoad: function() {
		this.list = this.view.getChildComponent('list');
		this.list.addEvent('select', this.bound('onListSelect'));
	},

	viewWillEnter: function() {
		this.list.clearSelectedItem();
	},

	destroy: function() {
		this.list.remove('select', this.bound('onListSelect'));
		this.list = null;
		this.parent();
	},

	onListSelect: function(item) {

		var viewControllerStack = this.getViewControllerStack();

		switch (item.getName()) {

			//
			// Components
			//

			case 'component-activity-indicator':
				viewControllerStack.pushViewController(new ViewController.Component.ActivityIndicator, new Moobile.ViewTransition.Cover);
				return;
			case 'component-alert':
				viewControllerStack.pushViewController(new ViewController.Component.Alert, new Moobile.ViewTransition.Cover);
				return;
			case 'component-slider':
				viewControllerStack.pushViewController(new ViewController.Component.Slider, new Moobile.ViewTransition.Cover);
				return;
			case 'component-bar':
				viewControllerStack.pushViewController(new ViewController.Component.Bar, new Moobile.ViewTransition.Cover);
				return;
			case 'component-button':
				viewControllerStack.pushViewController(new ViewController.Component.Button, new Moobile.ViewTransition.Cover);
				return;
			case 'component-list':
				viewControllerStack.pushViewController(new ViewController.Component.List, new Moobile.ViewTransition.Cover);
				return;
			case 'component-slider':
				viewControllerStack.pushViewController(new ViewController.Component.Slider, new Moobile.ViewTransition.Cover);
				return;
			case 'component-scroll-view':
				viewControllerStack.pushViewController(new ViewController.Component.ScrollView, new Moobile.ViewTransition.Cover);
				return;

			//
			// Transitions
			//

			case 'transition-fade':
				viewControllerStack.pushViewController(new ViewController.Transition, new Moobile.ViewTransition.Fade);
				return;
			case 'transition-flip':
				viewControllerStack.pushViewController(new ViewController.Transition, new Moobile.ViewTransition.Flip);
				return;
			case 'transition-slide':
				viewControllerStack.pushViewController(new ViewController.Transition, new Moobile.ViewTransition.Slide);
				return;
			case 'transition-cubic':
				viewControllerStack.pushViewController(new ViewController.Transition, new Moobile.ViewTransition.Cubic);
				return;
			case 'transition-cover':
				viewControllerStack.pushViewController(new ViewController.Transition, new Moobile.ViewTransition.Cover);
				return;
			case 'transition-cover-page':
				viewControllerStack.pushViewController(new ViewController.Transition, new Moobile.ViewTransition.Cover.Page);
				return;
			case 'transition-cover-box':
				viewControllerStack.pushViewController(new ViewController.Transition, new Moobile.ViewTransition.Cover.Box);
				return;

			//
			// Events
			//

			case 'event-tap':
				viewControllerStack.pushViewController(new ViewController.Event.Tap, new Moobile.ViewTransition.Cover);
				return;
			case 'event-swipe':
				viewControllerStack.pushViewController(new ViewController.Event.Swipe, new Moobile.ViewTransition.Cover);
				return;
			case 'event-pinch':
				viewControllerStack.pushViewController(new ViewController.Event.Pinch, new Moobile.ViewTransition.Cover);
				return;
		}
	}

});