

var solango = 0;
var sotugodung = 0;
var tocdogo = 0;

function inputFunc() {
    // sotugodung*60/phut

    var tuDienCau = [
        [
            {
                phimthuong: ["c", "j", "[" ],
                phimtocky: "um"
            },
            {
                phimthuong: ["s", "r", "f", "i", "p" ],
                phimtocky: "bợn"
            },
            {
                phimthuong: ["s", "e", "v", "g", "i", "[" ],
                phimtocky: "nốm"
            },
            {
                phimthuong: ["w", "c", "v", "g", "p" ,"'"],
                phimtocky: "cuốc"
            },
            {
                phimthuong: ["q", "g", "p", "m" ],
                phimtocky: "sán"
            },
        ],
        [
            {
                phimthuong: ["s", "r", "d", "f", "c", "j",";" ],
                phimtocky: "phụng"
            },
            {
                phimthuong: ["s", "r", "f", "i", "p" ],
                phimtocky: "bợn"
            },
            {
                phimthuong: ["e", "g", "v", "i", "p" ,"'"],
                phimtocky: "rốc"
            },
            {
                phimthuong: ["w", "c", "v", "g", "p" ,"'"],
                phimtocky: "cuốc"
            },
            {
                phimthuong: ["q", "g", "p", "m" ],
                phimtocky: "sán"
            },
        ],
        [
            {
                phimthuong: ["'", "[" ],
                phimtocky: "cái"
            },
            {
                phimthuong: ["q", "e", "c", "g", "j" ,"o","l"],
                phimtocky: "lúi"
            },
            {
                phimthuong: ["s", "r", "d", "f", "c", "j",";" ],
                phimtocky: "phụng"
            },
            {
                phimthuong: ["e", "g", "v", "i", "p" ,"'"],
                phimtocky: "rốc"
            },
            {
                phimthuong: ["e", "s", "c", "v", ";" ],
                phimtocky: "nuông"
            },
        ]
    ]
    var tuDien = [
        {
            phimthuong: ["c", "j", "[" ],
            phimtocky: "um"
        },
        {
            phimthuong: ["s", "r", "f", "i", "p" ],
            phimtocky: "bợn"
        },
        {
            phimthuong: ["s", "e", "v", "g", "i", "[" ],
            phimtocky: "nốm"
        },
        {
            phimthuong: ["w", "c", "v", "g", "p" ,"'"],
            phimtocky: "cuốc"
        },
        {
            phimthuong: ["q", "g", "p", "m" ],
            phimtocky: "sán"
        },
    ]
    var tuDienTu = [
        {
            phimthuong: ["'", "[" ],
            phimtocky: "cái"
        },
        {
            phimthuong: ["q", "e", "c", "g", "j" ,"o","l"],
            phimtocky: "lúi"
        },
        {
            phimthuong: ["s", "r", "d", "f", "c", "j",";" ],
            phimtocky: "phụng"
        },
        {
            phimthuong: ["e", "g", "v", "i", "p" ,"'"],
            phimtocky: "rốc"
        },
        {
            phimthuong: ["e", "s", "c", "v", ";" ],
            phimtocky: "nuông"
        },
    ]
    // console.log(tuDien["a"]);
    var k = 0;
    var element = tuDienCau[0][0];
    console.log(element)
    // khởi tạo âm cần gõ
    var caucango ="";
    tuDienCau[0].forEach((value, index)=>{
        caucango+="<span id="+index+">"+value.phimtocky+" </span>";
    })

    document.getElementById("amcango").innerHTML = caucango;
    document.getElementById("0").style.backgroundColor = "green";
    // element=
    // tô màu phím cần gõ
    element.phimthuong.forEach(e => {
        var a = document.getElementsByClassName(e);
        var i;
        for (i = 0; i < a.length; i++) {
            a[i].style.backgroundColor = "#005affbf";
            a[i].style.fill = "#005affbf";
        }
    })




    // tuDien.forEach(async element => {
    var phimDaGo = [];
    window.addEventListener('keydown', function (event) {
        // nếu phím vừa gõ chưa có trong phím đã gõ thì thêm vào
        if (!phimDaGo.includes(event.key.toLocaleLowerCase())) {
            phimDaGo.push(event.key.toLocaleLowerCase());
        }
        solango++;
        document.getElementById("solango").innerHTML = Number(solango);

        // document.getElementById("amcango").innerHTML = element.phimtocky;
        // var a = document.getElementsByClassName(element.phimthuong);
        // var i;
        // for (i = 0; i < a.length; i++) {
        //     a[i].style.backgroundColor = "#005affbf";
        //     a[i].style.fill = "#005affbf";
        // }

        // lấy class của phím đã gõ    
        var x = document.getElementsByClassName(event.key.length > 1 ? event.key : event.key.toLowerCase());
        // nếu phím đã gõ nằm trong các phím cần gõ
        if (element.phimthuong.includes(event.key.toLowerCase())) {
            sotugodung++;
            document.getElementById("sotugodung").innerHTML = Number(sotugodung);
            // set màu cho phím gõ đúng 
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = "green";
                x[i].style.fill = "green";
            }
        } else {
            // không đúng set màu đỏ
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = "red";
                x[i].style.fill = "red";
            }
        }



    });
    window.addEventListener('keyup', function (event) {
        // nếu đủ
        if (JSON.stringify(element.phimthuong.sort()) == JSON.stringify(phimDaGo.sort())) {
            document.getElementById(k).style.backgroundColor="white";
            element.phimthuong.forEach(e => {
                var a = document.getElementsByClassName(e);
                var i;
                for (i = 0; i < a.length; i++) {
                    a[i].style.backgroundColor = "#2b2b2b";
                    a[i].style.fill = "#2b2b2b";
                }
            })
            k = k < tuDien.length-1 ? k+1 : 0;
            element = tuDienCau[0][k];
            document.getElementById(k).style.backgroundColor="green";
            console.log("phimthuong: ", element.phimthuong)
            phimDaGo = [];
            // document.getElementById("amcango").innerHTML = element.phimtocky;
            // var a = document.getElementsByClassName(element.phimthuong);
            
        }
        console.log(phimDaGo)
        // lấy class của phím vừa nhả 
        var x = document.getElementsByClassName(event.key.length > 1 ? event.key : event.key.toLowerCase());
        // nếu có trong phím cần gõ
        if (element.phimthuong.includes(event.key.toLowerCase())) {
            // lại màu cho phím cần gõ
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = "#005affbf";
                x[i].style.fill = "#005affbf";
            }

        } else {
            phimDaGo = [];
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = "#2b2b2b";
                x[i].style.fill = "#2b2b2b";
            }
        }
        // tô màu phím cần gõ
        
        element.phimthuong.forEach(e => {
            var a = document.getElementsByClassName(e);
            var i;
            for (i = 0; i < a.length; i++) {
                a[i].style.backgroundColor = "#005affbf";
                a[i].style.fill = "#005affbf";
            }
        })
        document.getElementById("dochinhxac").innerHTML = solango == 0 ? 0 : Math.ceil(100 * sotugodung / solango) + "%";
    });

    // });







}






var msec = 0
var sec = 1;
var min = 0
var bienCuaTuan = 1;
function start() {
    if (bienCuaTuan == 1) {

        inputFunc();
    }


    bienCuaTuan = 0;
    document.forms[0].display.value = min + ":" + sec + ":" + msec
    go = setTimeout("start()", 1)
    msec++
    if (msec == 100) {
        msec = 0
        sec++
    }
    if (sec == 60) {
        sec = 0
        min++
    }
    var thoigiancuatuan = (min * 60 + sec) || 1;
    // console.log(thoigiancuatuan)
    document.getElementById("tocdogo").innerHTML = Math.ceil(sotugodung * 60 / thoigiancuatuan);
}

function stop() {
    clearTimeout(go)
}
function reset() {
    window.location.reload()
}
function over1(test) { document.getElementById('over1').style.background = test }
function out1(test) { document.getElementById('over1').style.background = test }
function over2(test) { document.getElementById('over2').style.background = test }
function out2(test) { document.getElementById('over2').style.background = test }
function over3(test) { document.getElementById('over3').style.background = test }
function out3(test) { document.getElementById('over3').style.background = test }
