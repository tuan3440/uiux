const amdau = [
    { kytu: "ngh", tocky: "KR" },
    { kytu: "kh", tocky: "KH" },
    { kytu: "th", tocky: "TH" },
    { kytu: "ph", tocky: "PH" },
    { kytu: "gh", tocky: "KP" },
    { kytu: "ch", tocky: "SK" },
    { kytu: "nh", tocky: "TK" },
    { kytu: "ng", tocky: "KR" },
    { kytu: "tr", tocky: "TR" },
    { kytu: "gi", tocky: "SH" },
    { kytu: "đ", tocky: "TP" },
    { kytu: "b", tocky: "P" },
    { kytu: "c", tocky: "K" },
    { kytu: "d", tocky: "SP" },
    { kytu: "g", tocky: "KP" },
    { kytu: "h", tocky: "H" },
    { kytu: "k", tocky: "K" },
    { kytu: "l", tocky: "SR" },
    { kytu: "m", tocky: "RH" },
    { kytu: "n", tocky: "PR" },
    { kytu: "p", tocky: "SPH" },
    { kytu: "q", tocky: "STK" },
    { kytu: "r", tocky: "R" },
    { kytu: "s", tocky: "S" },
    { kytu: "t", tocky: "T" },
    { kytu: "v", tocky: "SPR" },
    { kytu: "x", tocky: "ST" },
]

const amcuoi = [
    { kytu: "ch", tocky: "-GK" },
    { kytu: "ng", tocky: "-G" },
    { kytu: "nh", tocky: "-K" },
    { kytu: "i", tocky: "-J" },
    { kytu: "c", tocky: "-NK" },
    { kytu: "m", tocky: "-T" },
    { kytu: "n", tocky: "-N" },
    { kytu: "o", tocky: "-JK" },
    { kytu: "p", tocky: "-TK" },
    { kytu: "t", tocky: "-NT" },
    { kytu: "u", tocky: "-JG" },
    { kytu: "y", tocky: "-JN" }
]

const amchinh = [
    { kytu: "uyệ", tocky: "N-EY" },
    { kytu: "uyể", tocky: "-HSEY" },
    { kytu: "uyễ", tocky: "N-SEY" },
    { kytu: "uyề", tocky: "-HEY" },
    { kytu: "uyế", tocky: "-SEY" },
    { kytu: "uyê", tocky: "-EY" },
    { kytu: "uỵa", tocky: "N-EY" },
    { kytu: "uỷa", tocky: "-HSEY" },
    { kytu: "uỹa", tocky: "N-SEY" },
    { kytu: "uỳa", tocky: "-HEY" },
    { kytu: "yệ", tocky: "N-IE" },
    { kytu: "yể", tocky: "-HSIE" },
    { kytu: "yễ", tocky: "N-SIE" },
    { kytu: "yề", tocky: "-HIE" },
    { kytu: "yế", tocky: "-SIE" },
    { kytu: "yê", tocky: "-IE" },
    { kytu: "uýa", tocky: "-SEY" },
    { kytu: "uya", tocky: "-EY" },
    { kytu: "uỵ", tocky: "N-UY" },
    { kytu: "uỷ", tocky: "-HSUY" },
    { kytu: "uỹ", tocky: "N-SUY" },
    { kytu: "uỳ", tocky: "-HUY" },
    { kytu: "uý", tocky: "-SUY" },
    { kytu: "uy", tocky: "-UY" },
    { kytu: "ượ", tocky: "N-EW" },
    { kytu: "ưở", tocky: "-HSEW" },
    { kytu: "ưỡ", tocky: "N-SEW" },
    { kytu: "ườ", tocky: "-HEW" },
    { kytu: "ướ", tocky: "-SEW" },
    { kytu: "ươ", tocky: "-EW" },
    { kytu: "uợ", tocky: "N-Y" },
    { kytu: "uở", tocky: "-HSY" },
    { kytu: "uộ", tocky: "N-UO" },
    { kytu: "uỡ", tocky: "N-SY" },
    { kytu: "uờ", tocky: "-HY" },
    { kytu: "uớ", tocky: "-SY" },
    { kytu: "uổ", tocky: "-HSUO" },
    { kytu: "uơ", tocky: "-Y" },
    { kytu: "uỗ", tocky: "N-SUO" },
    { kytu: "uồ", tocky: "-HUO" },
    { kytu: "uố", tocky: "-SUO" },
    { kytu: "uô", tocky: "-UO" },
    { kytu: "uệ", tocky: "N-UE" },
    { kytu: "uể", tocky: "-HSUE" },
    { kytu: "uễ", tocky: "N-SUE" },
    { kytu: "uề", tocky: "-HUE" },
    { kytu: "uế", tocky: "-SUE" },
    { kytu: "uê", tocky: "-UE" },
    { kytu: "ựa", tocky: "N-EW" },
    { kytu: "ửa", tocky: "-HSEW" },
    { kytu: "ữa", tocky: "N-SEW" },
    { kytu: "ừa", tocky: "-HEW" },
    { kytu: "ứa", tocky: "-SEW" },
    { kytu: "ụa", tocky: "N-UO" },
    { kytu: "ưa", tocky: "-EW" },
    { kytu: "ủa", tocky: "-HSUO" },
    { kytu: "ũa", tocky: "N-SUO" },
    { kytu: "ùa", tocky: "-HUO" },
    { kytu: "úa", tocky: "-SUO" },
    { kytu: "uậ", tocky: "N*-Y" },
    { kytu: "uẩ", tocky: "-HS*Y" },
    { kytu: "uẫ", tocky: "N-S*Y" },
    { kytu: "uầ", tocky: "-H*Y" },
    { kytu: "uấ", tocky: "-S*Y" },
    { kytu: "uâ", tocky: "*-Y" },
    { kytu: "ua", tocky: "-UO" },
    { kytu: "iệ", tocky: "N-IE" },
    { kytu: "iể", tocky: "-HSIE" },
    { kytu: "iễ", tocky: "N-SIE" },
    { kytu: "iề", tocky: "-HIE" },
    { kytu: "iế", tocky: "-SIE" },
    { kytu: "iê", tocky: "-IE" },
    { kytu: "ịa", tocky: "N-IE" },
    { kytu: "ỉa", tocky: "-HSIE" },
    { kytu: "ĩa", tocky: "N-SIE" },
    { kytu: "ìa", tocky: "-HIE" },
    { kytu: "ía", tocky: "-SIE" },
    { kytu: "ia", tocky: "-IE" },
    { kytu: "oọ", tocky: "N*-O" },
    { kytu: "oò", tocky: "-H*O" },
    { kytu: "oó", tocky: "-S*O" },
    { kytu: "oo", tocky: "*-O" },
    { kytu: "oẹ", tocky: "N-AY" },
    { kytu: "oẻ", tocky: "-HSAY" },
    { kytu: "oẽ", tocky: "N-SAY" },
    { kytu: "oè", tocky: "-HAY" },
    { kytu: "oé", tocky: "-SAY" },
    { kytu: "oe", tocky: "-AY" },
    { kytu: "oặ", tocky: "N*-U" },
    { kytu: "oạ", tocky: "N-U" },
    { kytu: "oẳ", tocky: "-HS*U" },
    { kytu: "oả", tocky: "-HSU" },
    { kytu: "oẵ", tocky: "N-S*U" },
    { kytu: "oằ", tocky: "-H*U" },
    { kytu: "oắ", tocky: "-S*U" },
    { kytu: "oã", tocky: "N-SU" },
    { kytu: "oă", tocky: "*-U" },
    { kytu: "oà", tocky: "-HU" },
    { kytu: "oá", tocky: "-SU" },
    { kytu: "oa", tocky: "-U" },
    { kytu: "ự", tocky: "N-UW" },
    { kytu: "ử", tocky: "-HSUW" },
    { kytu: "ữ", tocky: "N-SUW" },
    { kytu: "ừ", tocky: "-HUW" },
    { kytu: "ứ", tocky: "-SUW" },
    { kytu: "ụ", tocky: "N-IU" },
    { kytu: "ư", tocky: "-UW" },
    { kytu: "ủ", tocky: "-HSIU" },
    { kytu: "ũ", tocky: "N-SIU" },
    { kytu: "ù", tocky: "-HIU" },
    { kytu: "ú", tocky: "-SIU" },
    { kytu: "u", tocky: "-IU" },
    { kytu: "ợ", tocky: "N-W" },
    { kytu: "ở", tocky: "-HSW" },
    { kytu: "ộ", tocky: "N-OW" },
    { kytu: "ỡ", tocky: "N-SW" },
    { kytu: "ờ", tocky: "-HW" },
    { kytu: "ớ", tocky: "-SW" },
    { kytu: "ọ", tocky: "N-O" },
    { kytu: "ổ", tocky: "-HSOW" },
    { kytu: "ơ", tocky: "-W" },
    { kytu: "ỏ", tocky: "-HSO" },
    { kytu: "ỗ", tocky: "N-SOW" },
    { kytu: "ồ", tocky: "-HOW" },
    { kytu: "ố", tocky: "-SOW" },
    { kytu: "õ", tocky: "N-SO" },
    { kytu: "ô", tocky: "-OW" },
    { kytu: "ò", tocky: "-HO" },
    { kytu: "ó", tocky: "-SO" },
    { kytu: "o", tocky: "-O" },
    { kytu: "ị", tocky: "N*-I" },
    { kytu: "ỉ", tocky: "-HS*I" },
    { kytu: "ĩ", tocky: "N-S*I" },
    { kytu: "ì", tocky: "-H*I" },
    { kytu: "í", tocky: "-S*I" },
    { kytu: "i", tocky: "*-I" },
    { kytu: "ệ", tocky: "N-OE" },
    { kytu: "ẹ", tocky: "N-E" },
    { kytu: "ể", tocky: "-HSOE" },
    { kytu: "ẻ", tocky: "-HSE" },
    { kytu: "ễ", tocky: "N-SOE" },
    { kytu: "ề", tocky: "-HOE" },
    { kytu: "ế", tocky: "-SOE" },
    { kytu: "ẽ", tocky: "N-SE" },
    { kytu: "ê", tocky: "-OE" },
    { kytu: "è", tocky: "-HE" },
    { kytu: "é", tocky: "-SE" },
    { kytu: "e", tocky: "-E" },
    { kytu: "ặ", tocky: "N*-A" },
    { kytu: "ậ", tocky: "N*-W" },
    { kytu: "ạ", tocky: "N-A" },
    { kytu: "ẳ", tocky: "-HS*A" },
    { kytu: "ẩ", tocky: "-HS*W" },
    { kytu: "ả", tocky: "-HSA" },
    { kytu: "ẵ", tocky: "N-S*A" },
    { kytu: "ẫ", tocky: "N-S*W" },
    { kytu: "ằ", tocky: "-H*A" },
    { kytu: "ắ", tocky: "-S*A" },
    { kytu: "ầ", tocky: "-H*W" },
    { kytu: "ấ", tocky: "-S*W" },
    { kytu: "ã", tocky: "N-SA" },
    { kytu: "ă", tocky: "*-A" },
    { kytu: "â", tocky: "*-W" },
    { kytu: "à", tocky: "-HA" },
    { kytu: "á", tocky: "-SA" },
    { kytu: "a", tocky: "-A" },
    { kytu: "ỵ", tocky: "N-I" },
    { kytu: "ỷ", tocky: "-HSI" },
    { kytu: "ỹ", tocky: "N-SI" },
    { kytu: "ỳ", tocky: "-HI" },
    { kytu: "ý", tocky: "-SI" },
    { kytu: "y", tocky: "-I" }

]

const banphimdau = [
    { kytu: "Q", tocky: "S" },
    { kytu: "A", tocky: "T" },
    { kytu: "W", tocky: "K" },
    { kytu: "S", tocky: "P" },
    { kytu: "E", tocky: "R" },
    { kytu: "D", tocky: "H" },

]

const banphimthanh = [
    { kytu: "R", tocky: "N" },
    { kytu: "F", tocky: "N" },
    { kytu: "T", tocky: "H" },
    { kytu: "G", tocky: "S" }

]

const banphimchinh = [
    { kytu: "U", tocky: "*" },
    { kytu: "J", tocky: "I" },
    { kytu: "C", tocky: "U" },
    { kytu: "V", tocky: "O" },
    { kytu: "N", tocky: "E" },
    { kytu: "M", tocky: "A" },
    { kytu: "I", tocky: "W" },
    { kytu: "K", tocky: "Y" }


]



const banphimcuoi = [
    { kytu: "O", tocky: "J" },
    { kytu: "L", tocky: "J" },
    { kytu: "P", tocky: "N" },
    { kytu: ";", tocky: "G" },
    { kytu: "[", tocky: "T" },
    { kytu: "'", tocky: "K" }

]


function convertTocky(word) {
    var dau = { kytu: "", tocky: "" }
    var chinh = { kytu: "", tocky: "" }
    var cuoi = { kytu: "", tocky: "" }
    for (let index = 0; index < amdau.length; index++) {
        let kytu = amdau[index].kytu
        let vitri = word.indexOf(kytu)
        if (vitri != -1) {
            dau = amdau[index];
            word = word.slice(kytu.length)
            break;
        }

    }

    for (let index = 0; index < amchinh.length; index++) {
        let kytu = amchinh[index].kytu
        let vitri = word.indexOf(kytu)
        if (vitri != -1) {
            chinh = amchinh[index];
            word = word.slice(kytu.length)
            break;
        }
    }



    for (let index = 0; index < amcuoi.length; index++) {
        let kytu = amcuoi[index].kytu
        let vitri = word.indexOf(kytu)
        if (vitri != -1) {
            cuoi = amcuoi[index];
            word = word.slice(kytu.length)
            break;
        }
    }


    // console.log({ dau, chinh, cuoi })
    // console.log(dau.tocky + chinh.tocky + cuoi.tocky)
    return dau.tocky + chinh.tocky + cuoi.tocky;
}

function converInputTocky(word) {

    word = word.toUpperCase()

    let dau = "", chinh = "", cuoi = "";

    banphimdau.forEach(function (e) {
        if (word.includes(e.kytu)) {
            dau += (e.tocky);
            word.replace(e.kytu, '')
        }
    })

    banphimcuoi.forEach(function (e) {
        if (word.includes(e.kytu)) {
            cuoi += (e.tocky);
            word.replace(e.kytu, '')
        }
    })
    if (cuoi.length > 0) cuoi = '-' + cuoi;

    banphimthanh.forEach(function (e) {
        if (word.includes(e.kytu)) {
            chinh += (e.tocky);
            word.replace(e.kytu, '')
        }
    })
    // chinh += "-"
    banphimchinh.forEach(function (e) {
        if (word.includes(e.kytu)) {
            chinh += (e.tocky);
            word.replace(e.kytu, '')
        }
    })

    if (chinh.length > 0) chinh = "-" + chinh

    let amdauTocky = [...amdau].sort((a, b) => (b.tocky.length - a.tocky.length));
    let amchinhTocky = [...amchinh].sort((a, b) => (b.tocky.length - a.tocky.length));
    let amcuoiTocky = [...amcuoi].sort((a, b) => (b.tocky.length - a.tocky.length));



    // console.log(amdauTocky)
    // console.log(amchinhTocky)
    // console.log(amcuoiTocky)


    let textDau = "", textChinh = "", textCuoi = "";

    let dauchinh = dau + chinh;


    for (let index = 0; index < amdauTocky.length; index++) {
        let tocky = amdauTocky[index].tocky
        let vitri = dau.indexOf(tocky)
        if (vitri != -1) {
            textDau = amdauTocky[index].kytu;
            break;
        }

    }

    for (let index = 0; index < amchinhTocky.length; index++) {
        let tocky = amchinhTocky[index].tocky
        let vitri = chinh.indexOf(tocky)
        if (vitri != -1) {
            textChinh = amchinhTocky[index].kytu;
            break;
        }
    }



    for (let index = 0; index < amcuoiTocky.length; index++) {
        let tocky = amcuoiTocky[index].tocky
        let vitri = cuoi.indexOf(tocky)
        if (vitri != -1) {
            textCuoi = amcuoiTocky[index].kytu;
            break;
        }
    }




    if (dau.length > 0 && textDau.length == 0) return false;
    if (chinh.length > 0 && textChinh.length == 0) return false;
    if (cuoi.length > 0 && textCuoi.length == 0) return false;

    return textDau + textChinh + textCuoi;


}


function converInputTockyRight(word) {

    word = word.toUpperCase()

    let dau = "", chinh = "", cuoi = "";

    banphimdau.forEach(function (e) {
        if (word.includes(e.kytu)) {
            dau += (e.tocky);
            word.replace(e.kytu, '')
        }
    })

    banphimcuoi.forEach(function (e) {
        if (word.includes(e.kytu)) {
            cuoi += (e.tocky);
            word.replace(e.kytu, '')
        }
    })

    banphimthanh.forEach(function (e) {
        if (word.includes(e.kytu)) {
            chinh += (e.tocky);
            word.replace(e.kytu, '')
        }
    })
    // chinh += "-"
    banphimchinh.forEach(function (e) {
        if (word.includes(e.kytu)) {
            chinh += (e.tocky);
            word.replace(e.kytu, '')
        }
    })



    return dau + ' ' + chinh + ' ' + cuoi
}



// converInputTocky("wng");



