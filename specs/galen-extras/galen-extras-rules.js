if (this.GEXTRAS_NO_MARGIN === undefined || this.GEXTRAS_NO_MARGIN === null) {
    this.GEXTRAS_NO_MARGIN = "-1 to 1px";
}

function _ruleRenderedInTable(rule, itemPattern, columns, verticalMargin, horizontalMargin) {
    var allItems = findAll(itemPattern);

    var currentColumn = 0;

    for (var i = 0; i < allItems.length - 1; i += 1) {
        if (currentColumn < columns - 1) {
            rule.addObjectSpecs(allItems[i].name, [
                "left-of " + allItems[i + 1].name + " " + horizontalMargin,
                "aligned horizontally all " + allItems[i + 1].name
            ]);
        }

        var j = i + columns;

        if (j < allItems.length) {
            rule.addObjectSpecs(allItems[i].name, [
                "above " + allItems[j].name + " " + verticalMargin,
                "aligned vertically all " + allItems[j].name
            ]);
        }

        currentColumn += 1;
        if (currentColumn === columns) {
            currentColumn = 0;
        }
    }
}

/**
 * This is a high-level spec for checking that elements are displayed in table layout
 * e.g.
 *
 *      | menuItem-* are rendered in 2 column table layout
 */
rule("%{itemPattern} are rendered in %{columns: [0-9]+} column table layout", function(objectName, parameters) {
    _ruleRenderedInTable(this, parameters.itemPattern, parseInt(columns), GEXTRAS_NO_MARGIN, GEXTRAS_NO_MARGIN);
});


/**
 * This is a high-level spec for checking that elements are displayed in table layout
 * e.g.
 *
 *      | menuItem-* are rendered in 2 column table layout, with 0 to 4px margin
 */
rule("%{itemPattern} are rendered in %{columns: [0-9]+} column table layout, with %{margin} margin", function(objectName, parameters) {
    _ruleRenderedInTable(this, parameters.itemPattern, parseInt(columns), parameters.margin, parameters.margin);
});


/**
 * This is a high-level spec for checking that elements are displayed in table layout 
 * with different margins for vertical and horizontal sides
 * e.g.
 *
 *      | menuItem-* are rendered in 2 column table layout, with 0 to 4px vertical and 1px horizontal margins
 */
rule("%{itemPattern} are rendered in %{columns: [0-9]+} column table layout, with %{verticalMargin} vertical and %{horizontalMargin} horizontal margin", function(objectName, parameters) {
    _ruleRenderedInTable(this, parameters.itemPattern, parseInt(columns), parameters.verticalMargin, parameters.horizontalMargin);
});


function _applyRuleBodyForAllElements(rule, parameters, appliesConditionCallback) {
    var allElements = findAll(parameters.objectPattern);

    if (allElements.length > 0) {
        for (var i = 0; i < allElements.length; i += 1) {
            if (!appliesConditionCallback(allElements[i])) {
                return;
            }
        }
        rule.doRuleBody();
    }
}

function _applyRuleBodyForSingleElement(rule, parameters, appliesConditionCallback) {
    var allElements = findAll(parameters.objectPattern);

    if (allElements.length > 0) {
        for (var i = 0; i < allElements.length; i += 1) {
            if (appliesConditionCallback(allElements[i])) {
                rule.doRuleBody();
                return;
            }
        }
    }
}

rule("if all %{objectPattern} are visible", function(objectName, parameters) {
    _applyRuleBodyForAllElements(this, parameters, function(element) {
        return element.isVisible();
    });
});


rule("if none of %{objectPattern} are visible", function(objectName, parameters) {
    _applyRuleBodyForAllElements(this, parameters, function(element) {
        return !element.isVisible();
    });
});

rule("if any of %{objectPattern} is visible", function(objectName, parameters) {
    _applyRuleBodyForSingleElement(this, parameters, function(element) {
        return element.isVisible();
    });
});


rule("%{objectPattern} sides are inside %{containerObject} with %{margin} margin from %{sideAName} and %{sideBName}", function(objectName, parameters) {
    var items = findAll(parameters.objectPattern);
    if (items.length > 0) {
        this.addObjectSpecs(items[0].name, ["inside " + parameters.containerObject + " " + parameters.margin + " " + parameters.sideAName]);

        for (var i = 1; i < items.length - 1; i++) {
            this.addObjectSpecs(items[i].name, ["inside " + parameters.containerObject]);
        }

        this.addObjectSpecs(items[items.length - 1].name, ["inside " + parameters.containerObject + " " + parameters.margin + " " + parameters.sideBName]);
    } else {
        throw new Error("Couldn't find any items matching " + parameters.objectPattern);
    }
});


rule("%{objectPattern} sides are vertically inside %{containerObject}", function(objectName, parameters) {
    var items = findAll(parameters.objectPattern);
    if (items.length > 0) {
        this.addObjectSpecs(items[0].name, ["inside " + parameters.containerObject + " -1 to 1 px top"]);

        for (var i = 1; i < items.length - 1; i++) {
            this.addObjectSpecs(items[i].name, ["inside " + parameters.containerObject]);
        }

        this.addObjectSpecs(items[items.length - 1].name, ["inside " + parameters.containerObject + " -1 to 1 px bottom"]);
    } else {
        throw new Error("Couldn't find any items matching " + parameters.objectPattern);
    }
});

rule("%{objectPattern} sides are vertically inside %{containerObject} with %{margin} margin", function(objectName, parameters) {
    var items = findAll(parameters.objectPattern);
    if (items.length > 0) {
        this.addObjectSpecs(items[0].name, ["inside " + parameters.containerObject + " " + parameters.margin + " top"]);

        for (var i = 1; i < items.length - 1; i++) {
            this.addObjectSpecs(items[i].name, ["inside " + parameters.containerObject]);
        }

        this.addObjectSpecs(items[items.length - 1].name, ["inside " + parameters.containerObject + " " + parameters.margin + " bottom"]);
    } else {
        throw new Error("Couldn't find any items matching " + parameters.objectPattern);
    }
});


rule("%{objectPattern} sides are horizontally inside %{containerObject}", function(objectName, parameters) {
    var items = findAll(parameters.objectPattern);
    if (items.length > 0) {
        this.addObjectSpecs(items[0].name, ["inside " + parameters.containerObject + " -1 to 1 px left"]);

        for (var i = 1; i < items.length - 1; i++) {
            this.addObjectSpecs(items[i].name, ["inside " + parameters.containerObject]);
        }

        this.addObjectSpecs(items[items.length - 1].name, ["inside " + parameters.containerObject + " -1 to 1 px right"]);
    } else {
        throw new Error("Couldn't find any items matching " + parameters.objectPattern);
    }
});


rule("%{objectPattern} sides are horizontally inside %{containerObject} with %{margin} margin", function(objectName, parameters) {
    var items = findAll(parameters.objectPattern);
    if (items.length > 0) {
        this.addObjectSpecs(items[0].name, ["inside " + parameters.containerObject + " " + parameters.margin + " left"]);

        for (var i = 1; i < items.length - 1; i++) {
            this.addObjectSpecs(items[i].name, ["inside " + parameters.containerObject]);
        }

        this.addObjectSpecs(items[items.length - 1].name, ["inside " + parameters.containerObject + " " + parameters.margin + " right"]);
    } else {
        throw new Error("Couldn't find any items matching " + parameters.objectPattern);
    }
});


// By Homer
// eg.
//    | ${ele_only_items_hero} fulfil css background-position-y is ${conf_blocks_settings_alignment} by one-to-one mapping
rule("%{objectListA} %{verb: is|has|fulfil} %{spec} %{objectListB} by one-to-one mapping", function(objectName, parameters) {
    var itemsA = findAll(parameters.objectListA);
    var itemsB = JSON.parse(parameters.objectListB);

    if (itemsA.length > 0) {
        for (var i = 0; i < itemsA.length; i++) {
            this.addObjectSpecs(itemsA[i].name, [  parameters.spec + " \"" + itemsB[i] +"\""]);
        }
    } else {
        throw new Error("Couldn't find any items matching " + parameters.objectListA + "&" + parameters.objectListB);
    }
});

// eg.
//    | ${ele_text_desc} fulfil common css rules follow by ${text_title_list_check}
rule("%{objectPattern} fulfil common css rules follow by %{rulesValueJson}", function(objectName, parameters) {
    var items = findAll(parameters.objectPattern);
    var valueJson = JSON.parse(parameters.rulesValueJson);
    var SpecStatementList = [];
    if(valueJson.hasOwnProperty("font-size")){
        SpecStatementList.push("css font-size is " + "\"" + valueJson["font-size"] +"\"");
    }
    if(valueJson.hasOwnProperty("font-family")){
        SpecStatementList.push("css font-family contains " + "\"" + valueJson["font-family"] +"\"");
    }
    if(valueJson.hasOwnProperty("color")){
        SpecStatementList.push("css color is " + "\"" + valueJson["color"] +"\"");
    }
    if(valueJson.hasOwnProperty("text-align")){
        SpecStatementList.push("css text-align is " + "\"" + valueJson["text-align"] +"\"");
    }
    if(valueJson.hasOwnProperty("font-weight")){
        SpecStatementList.push("css font-weight is " + "\"" + valueJson["font-weight"] +"\"");
    }
    if(valueJson.hasOwnProperty("line-height")){
        SpecStatementList.push("css line-height is " + "\"" + valueJson["line-height"] +"\"");
    }
    if(valueJson.hasOwnProperty("text-size-adjust")){
        SpecStatementList.push("css text-size-adjust is " + "\"" + valueJson["text-size-adjust"] +"\"");
    }
    if(valueJson.hasOwnProperty("letter-spacing")){
        SpecStatementList.push("css letter-spacing is " + "\"" + valueJson["letter-spacing"] +"\"");
    }
    if(valueJson.hasOwnProperty("background-color")){
        SpecStatementList.push("css background-color is " + "\"" + valueJson["background-color"] +"\"");
    }
    // System.out.println(JSON.stringify(SpecStatementList));
    if (items.length > 0) {
        for (var i = 0; i < items.length; i++) {
            this.addObjectSpecs(items[i].name, SpecStatementList);
        }
    } else {
        throw new Error("Couldn't find any items matching " + parameters.objectPattern);
    }
});

