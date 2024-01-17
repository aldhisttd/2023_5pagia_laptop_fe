$(document).ready(function () {
    populasiKategori();
function populasiKategori() {
    $.ajax({
        type: "GET",
        url: host + "kategori_read.php",
        dataType: "json",
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            var categories = data.body.data;
            var select = $("#kode_kategori");

            select.empty();

            for (var i = 0; i < categories.length; i++) {
                select.append(`<option value="${categories[i].kode}">${categories[i].nama}</option>`);
            }
        },
    });
}
populasiMerek();
function populasiMerek() {
  $.ajax({
      type: "GET",
      url: host + "merek_read.php",
      dataType: "json",
      async: true,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
          var categories = data.body.data;
          var select = $("#kode_merek");

          select.empty();

          for (var i = 0; i < categories.length; i++) {
              select.append(`<option value="${categories[i].kode}">${categories[i].nama}</option>`);
          }
      },
  });
}
$('#laptopCreate').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: 'POST',
        url: host + "laptop_input.php",
        data: formData,
        cache: false,
        contentType: false, 
        processData: false, 
        dataType: 'json',
        success: (result) => {
            alert(result.msg);
            location.href = host_fe + "admin/?page=laptop_data";
        },
    });
  })
});