/*! finlog - v0.1.0 - 2015-11-10 Copyright (c) 2015 vfinance; Licensed MIT */
define("util",["base"],function(){return function(t){t.makeEsQ=function(obj,op){op=op||" AND ";var q=[];return _.each(obj,function(val,key){val&&q.push(key+":"+val+"*")}),q.join(op)},t.makeUniqueId=function(prefix){return prefix+"_"+_.now()+"_"+_.uniqueId()}}});