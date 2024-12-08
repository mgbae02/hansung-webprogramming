onmessage = function(e) {
    var multi = 0;
    var from =parseInt(e.data.from);
    var to = parseInt(e.data.to);
    multi = from*to;
    this.postMessage(multi);
}