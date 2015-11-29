# Your pacakge name here

_Description goes here_

# Basic layout

Based on best practice by:

* https://github.com/appjitsu/meteor-best-practices/ - **Everything should be a package**
* Updated with using *FlowRouter* as well as *ReactJS* templates
* Improve testing framework to use velocity

# Testing

We use Velocity + Jasmine for testing.  To run the test, use:

	# for setting up velocity too
	# npm install velocity-cli -g
	velocity test-package packages/app

See https://meteor-testing.readme.io/v1.0/docs/getting-started-with-jasmine for more information, and example at https://github.com/AdamBrodzinski/react-meteor-tests