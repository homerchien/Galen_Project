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
this.getArrayLength = function (Array) {
    return Array.length;
};


this.arrayToString = function (Array) {
    return JSON.stringify(Array);
};

// 获取指定表达式（主要与传统for循环一起使用，可通过index选择元素）
this.getCertainPatternByIndex = function (objectPattern,index) {
    // System.out.println(typeof objectPattern);
    return String.prototype.concat(objectPattern.substring(0,objectPattern.length-1),index);
};
