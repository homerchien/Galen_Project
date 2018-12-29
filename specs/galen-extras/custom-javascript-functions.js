this.allEven = function (pattern) {
    var size = count(pattern);
    var parameters = "2";
    if (size > 1) {
       for (var i = 4; i <= size; i+=2) {
           parameters = parameters + "," + i;
       }
    }
    return parameters;
};

// 更新JSON值
this.updateJson = function (updateStr,targetStr) {
    // System.out.println(typeof targetStr);
    // System.out.println(typeof Object.keys(JSON.parse(targetStr)));
    var updateJson = JSON.parse(updateStr);
    var targetJson = JSON.parse(targetStr);
    for(var key in targetJson){
        updateJson[key] = targetJson[key];
        // System.out.println(key);
        // System.out.println(typeof updateJson[key]);
    }
    // System.out.println(JSON.stringify(updateJson));
    return JSON.stringify(updateJson);
};

// 获取json长度
this.getJsonLength = function (json) {
    return Object.keys(JSON.parse(json)).length;
};

// 获取Array长度
this.getArrayLength = function (array) {
    return array.length;
};

// arrayToString
this.arrayToString = function (array) {
    return JSON.stringify(array);
};

// 按照规则修改Array内的值
this.resetArrayFromRules = function (array,rulesJson) {
    var rules = JSON.parse(rulesJson);
    var reArr = [];
    // {"top":"0%","center":"50%","bottom":"100%"}
    for (var i=0; i<array.length; i++) {
        reArr.push(rules[array[i]]);
        // System.out.println(array[i]);
    }
    // System.out.println(String(reArr));
    return reArr;
};

// 通过path提取需要的数据，重组array
this.resetArrayFromPath = function (array,path,isPassEmpty) {
    // System.out.println(typeof Array);
    isPassEmpty = typeof isPassEmpty !== 'undefined' ?  isPassEmpty : false;
    var arr = [];
    var tempContent;
    var pathList = path.split(".");
    for (var i=0;i<array.length;i++){
        tempContent = array[i];
        for(var j=0;j<pathList.length;j++){
            tempContent = tempContent[pathList[j]];
        }
        if(isPassEmpty && tempContent === ""){
            continue;
        }
        arr.push(tempContent);
    }
    // System.out.println(String(arr));
    return arr;
};

// 获取指定表达式（主要与传统for循环一起使用，可通过index选择元素）
this.getCertainPatternByIndex = function (objectPattern,index) {
    // System.out.println(typeof objectPattern);
    return String.prototype.concat(objectPattern.substring(0,objectPattern.length-1),index);
};
