var host_fe = "http://localhost/2023_5pagia_laptop_fe/admin/";

$(document).ready(function () {
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };

    var kode = getUrlParameter('kode');

    // menampilkan data by=id
    $.ajax({
        type: 'GET',
        url: host + 'laptop_read_one.php',
        data: { kode: kode },
        dataType: 'json',
        success: function (response) {
            if (response.status === 200) {
                var data = response.body.data[0];

                $('#kode').val(data.kode);
                $('#nama_laptop').val(data.nama);
                $('#kategori').val(data.kode_kategori);
                $('#merek').val(data.kode_merek);
                $('#harga').val(data.harga);
                $('#deskripsi').val(data.deskripsi);
            } else {
                alert(response.msg);
            }
        },
    });

    // update data
    $('#formLaptop').submit(function (e) {
        e.preventDefault();
        var formData = new FormData(this);

        $.ajax({
            type: 'POST',
            url: host + 'laptop_update.php',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function (response) {
                alert(response.msg);
            },
        });
    });
});
