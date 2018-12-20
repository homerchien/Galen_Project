this.allEven = function (pattern,aaa) {
    var size = count(pattern);
    var aaaa = count(aaa);
    var parameters = "2";
    if (size > 1) {
       for (var i = 4; i <= size; i+=2) {
           parameters = parameters + "," + i;
       }
    }
    System.out.println("pattern:"+pattern+"    aaa:"+aaa);
    return parameters;
};

// unfinished
this.resetJson = function (resetJson,targetJson) {
	System.out.println(JSON.parse(resetJson));
	System.out.println(JSON.parse(targetJson));
 //    var resetJson_ = JSON.parse(resetJson);
 //    var targetJson_ = JSON.parse(targetJson);
 //    for(let key in targetJson_){
	// 	resetJson_[key] = targetJson_[key];
	// }

 //    // var parameters = "2";
 //    // if (size > 1) {
 //    //    for (var i = 4; i <= size; i+=2) {
 //    //        parameters = parameters + "," + i;
 //    //    }
 //    // }

 //    return resetJson_;
};
