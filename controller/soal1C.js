// Menghitung volume dan luas permukaan kubus
exports.VL_kubus = (req, res) => {
    let sisi = Number(req.body.sisi);
    let volume = sisi * sisi * sisi;
    let luas = 6 * (sisi * sisi);

    let response = {
        sisi: sisi,
        volume: volume,
        luas: luas
    };
    return res.json(response);
}

// Menghitung volume dan luas permukaan balok
exports.VL_balok = (req, res) => {
    let panjang = Number(req.body.panjang);
    let lebar = Number(req.body.lebar);
    let tinggi = Number(req.body.tinggi);
    let luas = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));
    let volume = panjang * lebar * tinggi;

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas: luas,
        volume: volume
    };
    return res.json(response);
}

// Menghitung volume dan luas permukaan bola
exports.VL_bola = (req, res) => {
    let jarijari = Number(req.body.jarijari);
    let luas = 4 * Math.PI * (jarijari * jarijari);
    let volume = (4 / 3) * Math.PI * (jarijari * jarijari * jarijari);

    let response = {
        jarijari: jarijari,
        luas: luas,
        volume: volume
    };
    return res.json(response);
}

// Menghitung volume dan luas permukaan tabung
exports.VL_tabung = (req, res) => {
    let jari = Number(req.body.jari);
    let tinggi = Number(req.body.tinggi);
    let luasalas = 3.14 * (jari * jari);
    let kelilingalas = 2 * 3.14 * jari;
    let luas = (2 * luasalas) + (kelilingalas * tinggi);
    let volume = luasalas * tinggi;

    let response = {
        jari: jari,
        tinggi: tinggi,
        luasalas: luasalas,
        kelilingalas: kelilingalas,
        luas: luas,
        volume: volume
    };
    return res.json(response);
}
