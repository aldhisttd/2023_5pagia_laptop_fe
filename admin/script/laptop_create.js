var host = 'http://localhost/coba/2023_5pagia_laptop_be/dummy.php';
$.ajax({
  type: 'GET',
  url: host + 'kategori_read_one.php',
  cache: false,
  contentType: false,
  processData: false,
  dataType: 'json',
  success: (result) => {
    // Clear existing options in the dropdown
    $('#kode_kategori').empty();

    // Add an empty/default option
    $('#kode_kategori').append('<option value="">Pilih Kategori</option>');

    // Loop through the data and append options to the dropdown
    result.data.forEach((item) => {
      $('#kode_kategori').append(`
                <option value="${item.kode}">${item.nama}</option>
            `);
    });
  },
});

$.ajax({
  type: 'GET',
  url: host + 'merek_read_one.php',
  cache: false,
  contentType: false,
  processData: false,
  dataType: 'json',
  success: (result) => {
    // Clear existing options in the dropdown
    $('#kode_merek').empty();

    // Add an empty/default option
    $('#kode_merek').append('<option value="">Pilih Merek</option>');

    // Loop through the data and append options to the dropdown
    result.data.forEach((item) => {
      $('#kode_merek').append(`
                  <option value="${item.kode}">${item.nama}</option>
              `);
    });
  },
});

$('#insert-laptop').submit(function (e) {
  e.preventDefault();
  var formData = new FormData(this);
  console.log(formData);
  $.ajax({
    type: 'POST',
    url: host,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    dataType: 'json',
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