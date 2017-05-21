module.exports =
{
  encode: encode,
  decode: decode
};

function encode(params) {

  var keys = Object.keys(params);
  var qstr = "";
  for(var i =0; i<keys.length; i++){

    var q = keys[i]+'='+params[keys[i]];
    if(qstr){
        qstr+="&";
    }
    qstr += q;
  }
  return qstr;
}

function decode(qstr) {

  var qlist = qstr.split('&');
  var params = {};

  for (var i = 0; i<qlist.length; i++) {
    var query = qlist[i];
    var pos = query.indexOf('=');
    if (pos > -1) {
      var key = query.substr(0,pos);
      var value = query.substr(pos+1);

      params[key] = value;
    }else{
      params[query]=''
    }
  }
  return params;
}
