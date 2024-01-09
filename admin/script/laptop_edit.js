$(document).ready(function () {
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split("&"),
            sParameterName,
            i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split("=");
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };

    // menampilkan select kategori
    $.ajax({
        type: "GET",
        url: host + "kategori_read.php",
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (response) {
            var kategori = response.body.data;

            for (var i = 0; i < kategori.length; i++) {
                $("#kode_kategori").append(`<option value="` + kategori[i].kode + `">` + kategori[i].nama + `</option>`);
            }
        },
    });

    // menampilkan select merek
    $.ajax({
        type: "GET",
        url: host + "merek_read.php",
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (response) {
            var merek = response.body.data;

            for (var i = 0; i < merek.length; i++) {
                $("#kode_merek").append(`<option value="` + merek[i].kode + `">` + merek[i].nama + `</option>`);
            }
        },
    });

    // menampilkan data by kode
    var kode = getUrlParameter("kode");
    $.ajax({
        type: "GET",
        url: host + "laptop_read_one.php?kode=" + kode,
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (response) {
            var data = response.body.data;
            $("#kode").val(data.kode);
            $("#nama").val(data.nama);
            $("#kode_kategori").val(data.kode_kategori);
            $("#kode_merek").val(data.kode_merek);
            $("#harga").val(data.harga);
            $("#deskripsi").val(data.deskripsi);
        },
    });

    // update data
    $("#formLaptop").submit(function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        $.ajax({
            type: "POST",
            url: host + "laptop_update.php",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            dataType: "json",
            success: function (response) {
                alert(response.msg);
                location.href = host_fe + "admin/?page=laptop_data";
            },
        });
    });
});