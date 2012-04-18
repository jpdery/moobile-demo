var ViewControllerOne = new Class({

	Extends: Moobile.ViewController,

	nextButton: null,

	viewDidLoad: function() {
		this.view.addClass('view-one');
		this.nextButton = new Moobile.Button();
		this.nextButton.setLabel('Next view');
		this.nextButton.addEvent('tap', this.bound('onNextButtonTap'));
		this.view.addChild(this.nextButton);
	},

	destroy: function() {
		this.nextButton.removeEvent('tap', this.bound('onNextButtonTap'));
		this.nextButton = null;
		this.parent();
	},

	onNextButtonTap: function() {
		this.getViewControllerStack().pushViewController(new ViewControllerTwo, new Moobile.ViewTransition.Slide);
	}

});

var ViewControllerTwo = new Class({

	Extends: Moobile.ViewController,

	prevButton: null,

	viewDidLoad: function() {
		this.view.addClass('view-two');
		this.prevButton = new Moobile.Button();
		this.prevButton.setLabel('Previous view');
		this.prevButton.addEvent('tap', this.bound('onPrevButtonTap'));
		this.view.addChild(this.prevButton);
	},

	destroy: function() {
		this.prevButton.removeEvent('tap', this.bound('onPrevButtonTap'));
		this.prevButton = null;
		this.parent();
	},

	onPrevButtonTap: function() {
		this.getViewControllerStack().popViewController();
	}
});

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

	loadView: function() {
		this.view = Moobile.View.at('templates/views/home-view.html');
	}

});