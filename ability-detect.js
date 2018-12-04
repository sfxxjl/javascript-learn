if(object.propertyInQuestion){

}

function getElement(id){
    if(document.getElementById){
        return document.getElementById(id);
    }else if(document.all){
        return document.all(id);
    }else{
        throw new Error("this way can't receive the element");
    }
}

function getWidth(){
    if(window.innerWidth){
        return window.innerWidth;
    }else{
        return document.documentElement.clientWidth;
    }
}

function isSortable(object){
    return !!object.sort;
}

var result = isSortable({sort : true});

function isSortable1(object){
    return typeof object.sort == "function";
}

function hasCreateElement(){
    return typeof document.createElement == "function" // this is a bug when the explore detect the "document.createElement" ,it will always return "true"
}

var xhr = new ActiveXObject("Microsoft.XMLHttp");
if(xhr.open){
    //this will be an error accor
}

function isHostMethod(object, property){
    var t = typeof object[property];
    return t == "function" || (!!(t=='object' &&object[property]))||t == "unknown"
}

var result = isHostMethod(xhr,'open');
var result1 = isHostMethod(xhr,'foo');

var ifFireFox = !!(navigator.vendor && navigator.vendorSub);
var isIE = !!(document.all && document.uniqueID);

var hasNSPlugins = !!(navigator.plugins && navigator.plugins.length);
var hasDOM1 = !!(document.getElementById && document.createElement && document.getElementsByTagName);