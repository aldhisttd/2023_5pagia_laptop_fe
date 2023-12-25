$(document).ready(function () {
    $('#insert-laptop').submit(function (event) {
        event.preventDefault();

        var formData = new FormData(this);

        $.ajax({
            type: 'POST',
            url: "http://localhost/2023_5pagia_laptop_fe/url_api_spec/laptop_input.php",
            data: formData,
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function (response) {
                console.log(response);
                alert('Data berhasil ditambahkan');
            },
            error: function (error) {
                console.error('Error:', error.responseText);
                alert('Terjadi kesalahan. Silakan cek konsol untuk informasi lebih lanjut.');
            },
        });
    });
});