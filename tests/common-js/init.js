load("../galen-bootstrap/galen-bootstrap.js");


var TEST_USER = {
    username: "testuser@example.com",
    password: "test123"
};


$galen.settings.website = "https://homer.myshoplaza.com";


// local test
$galen.registerDevice("mobile", inSingleBrowser("mobile emulation", "414x736", ["mobile"]));
$galen.registerDevice("desktop", inSingleBrowser("desktop emulation", "1440x900", ["desktop"]));

// Grid test
// $galen.registerDevices(loadGridDevices("browserstack-devices.json", "http://" + System.getProperty("browserstack.username") + ":" + System.getProperty("browserstack.key") + "@hub.browserstack.com/wd/hub"));

// browserstack test
// $galen.registerDevice("desktop", inSeleniumGrid("http://" + System.getProperty("browserstack.username") + ":" + System.getProperty("browserstack.key") + "@hub.browserstack.com/wd/hub",
//     "desktop real machine", ["desktop"], {
//     	"size": "1440×900",
//         desiredCapabilities: {
// 			"browser": "Chrome",
// 			"browser_version": "43.0",
// 			"os": "OS X",
// 			"os_version": "Mavericks",
// 			"browserstack.debug": "true"
// 		}
// }));

// $galen.registerDevice("mobile", inSeleniumGrid("http://" + System.getProperty("browserstack.username") + ":" + System.getProperty("browserstack.key") + "@hub.browserstack.com/wd/hub",
//     "mobile real machine", ["mobile"], {
//         desiredCapabilities: {
//         	"os_version": "11.0",
//         	"device": "iPhone 8 Plus",
// 			"real_mobile": "true",
// 			"browserstack.local": "false"
// 		}
// }));


// saucelabs test
// $galen.registerDevice("desktop", inSeleniumGrid("http://" + System.getProperty("saucelabs.username") + ":" + System.getProperty("saucelabs.key") +"@ondemand.saucelabs.com:80/wd/hub",
//     "desktop real machine", ["desktop"], {
//     	"size": "1440×900",
//         desiredCapabilities: {
//         	"browserName": "chrome",
//         	"platform": "macOS 10.13",
//         	"version": "70.0"
//    		}
// }));

(function(export) {
    export.TEST_USER = TEST_USER;
})(this);