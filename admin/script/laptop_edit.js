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

    var kode = getUrlParameter("kode");

    if (!kode) {
        alert("Kode tidak ditemukan di URL");
        return;
    }

    // menampilkan data by=kode
    $.ajax({
        type: "GET",
        url: host + "laptop_read_one.php",
        data: { kode: kode },
        dataType: "json",
        success: function (response) {
            if(response.status === 200) {
                var data = response.body.data[0];
                $("#kode").val(data.kode);
                $("#nama").val(data.nama);
                // select option untuk kode_kategori
                var kode_kategori = $("#kode_kategori");
                kode_kategori.empty();
                kode_kategori.append("<option selected value='" + data.kode_kategori + "'>" + data.kode_kategori + "</option>");

                // select option untuk kode_merek
                var kode_merek = $("#kode_merek");
                kode_merek.empty();
                kode_merek.append("<option selected value='" + data.kode_merek + "'>" + data.kode_merek + "</option>");
                $("#harga").val(data.harga);
                $("#deskripsi").val(data.deskripsi);
            } else {
                alert("Error: " + response.msg);
            }
        },
        error: function() {
            alert("msg : Error");
        }
    });

    // Mengambil data kategori dari API
    $.ajax({
        type: "GET",
        url: host + "kategori_read_one.php", // Mengubah endpoint API ke yang mengambil semua data kategori
        success: function(response) {
            if(response.status === 200 && response.body && response.body.data) {
                var data = response.body.data[0];
                var select = $("#kode_kategori");
                select.empty(); // Mengosongkan pilihan sebelumnya
                $.each(data, function(i, item) {
                    select.append('<option value="' + item.kode + '">' + item.nama + '</option>');
                });
            } else {
                alert("Error: " + response.msg);
            }
        }
    });

    // Mengambil data merek dari API
    $.ajax({
        type: "GET",
        url: host + "merek_read_one.php", // Mengubah endpoint API ke yang mengambil semua data merek
        success: function(response) {
            if(response.status === 200 && response.body && response.body.data) {
                var data = response.body.data[0];
                var select = $("#kode_merek");
                select.empty(); // Mengosongkan pilihan sebelumnya
                $.each(data, function(i, item) {
                    select.append('<option value="' + item.kode + '">' + item.nama + '</option>');
                });
            } else {
                alert("Error: " + response.msg);
            }
        }
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
                if(response.status === 200) {
                    alert("Data berhasil diperbarui");
                } else {
                    alert("Error: " + response.msg);
                }
            },
            error: function() {
                alert("msg : Data gagal diperbarui");
            }
        });
    });
});