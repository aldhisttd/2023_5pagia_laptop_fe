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
    // menampilkan data by=kode
    $.ajax({
        type: "GET",
        url: host + "laptop_read_one.php",
        data: { kode: kode },
        dataType: "json",
        success: function (response) {
            if(response.status === 200) {
                var data = response.body.data[0];
                console.log(data);
                $("#kode").val(data.kode);
                $("#nama").val(data.nama);
                var kode_kategori = $("#kode_kategori");
                kode_kategori.empty();
                kode_kategori.append("<option selected value='" + data.kode_kategori + "'>" + data.kode_kategori + "</option>");
            
                // select option untuk kode_merk
                var kode_merk = $("#kode_merk");
                kode_merk.empty();
                kode_merk.append("<option selected value='" + data.kode_merk + "'>" + data.kode_merk + "</option>");
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
        url: host + "kategori_read_one.php", 
        success: function(response) {
            if(response.status === 200 && response.body && response.body.data) {
                var data = response.body.data[0];
            } else {
                alert("Error: " + response.msg);
            }
            var select = $("#kode_kategori");
            if(data) {
                select.append('<option value="' + data.kode + '">' + data.nama + '</option>');
            }
        }
    });

    // Mengambil data merek dari API
    $.ajax({
        type: "GET",
        url: host + "merek_read_one.php", 
        success: function(response) {
            if(response.status === 200 && response.body && response.body.data) {
                var data = response.body.data[0];
            } else {
                alert("Error: " + response.msg);
            }
            var select = $("#kode_merk");
            if(data) {
                select.append('<option value="' + data.kode + '">' + data.nama + '</option>');
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
