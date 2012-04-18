
var HelloWorldViewController = new Class({

	Extends: Moobile.ViewController,

	helloWorldButton: null,

	loadView: function() {
		this.view = Moobile.View.at('templates/views/hello-world-view.html');
	},

	viewDidLoad: function() {
		this.helloWorldButton = this.view.getChildComponent('hello-world-button');
		this.helloWorldButton.addEvent('tap', this.bound('onHelloButtonTap'));
	},

	destroy: function() {
		this.helloWorldButton.removeEvent('tap', this.bound('onHelloButtonTap'));
		this.helloWorldButton = null;
		this.parent();
	},

	onHelloButtonTap: function() {
		var alert = new Moobile.Alert();
		this.view.addChildComponent(alert);
		alert.setTitle('Hello');
		alert.showAnimated();
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