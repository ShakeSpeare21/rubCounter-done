var timer = 1000;
var shag = 362.32;
var n = 0;

var k = Math.ceil((new Date() - new Date("07/01/2022 00:00:00"))/ (1000 * 3600 * 24))
k = k * 1440 * 60;


var n = shag * k;





function count(num, elem) {
    var l = document.querySelector('#' + elem);
    let t = timer;
    let interval = setInterval(() => {
        n += shag;
        l.innerHTML = `${n.toFixed(2)} рублей`;
    }, t);

}

count(timer, 'counter1');

//
//
//<script>
//var k = Math.ceil((new Date() - new Date("07/01/2022"))/ (1000 * 3600 * 24))
//k = k * 1440 * 60;
//alert(k);
//</script> --!>

