load("../common-js/init.js");
load("../common-js/commons.js");

testOnAllDevices("Home Page", "/", function(driver, device) {

    // logged("Checking Collection List Module", function() {
    //     checkLayout(driver, "specs/collection-list-card.gspec", device.tags);
    // });
    // logged("Checking Feature Columns Module", function() {
    //     checkLayout(driver, "specs/feature-columns-card.gspec", device.tags);
    // });
    // logged("Checking Four Images Module", function() {
    //     checkLayout(driver, "specs/four-images-card.gspec", device.tags);
    // });
    // logged("Checking Gallery Module", function() {
    //     checkLayout(driver, "specs/gallery-card.gspec", device.tags);
    // });
    logged("Checking Images Text Module", function() {
        checkLayout(driver, "specs/image-text-card.gspec", device.tags);
    });
});