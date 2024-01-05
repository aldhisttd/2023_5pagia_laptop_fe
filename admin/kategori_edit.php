<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3">
    <h6><a href="?page=kategori_data">Kembali</a></h6>
</div>
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Edit Kategori</h1>
</div>

<div class="row">
    <div class="col-md-4">
        <form id="formKategori">
            <div class="form-group">
                <label for="kode">Kode</label>
                <input type="text" class="form-control" id="kode" name="kode" readonly />
            </div>
            <div class="form-group">
                <label for="nama">Nama Kategori</label>
                <input type="text" class="form-control" id="nama" name="nama" />
            </div>
            <div class="form-group">
                <a id="batalBtn" class="btn btn-danger">Batal</a> 
                <button class="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    </div>
</div>

<script>
    document.getElementById('batalBtn').href = host_fe + "admin/?page=kategori_data";
</script>