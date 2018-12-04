var hasDontEnumQuirks = function(){
    var o = {toString : function(){}}
    var count = 0;
    for (var prop in o){
        if(prop == "toString"){
            count++;
        }
    }
    return (count > 1);
}();

