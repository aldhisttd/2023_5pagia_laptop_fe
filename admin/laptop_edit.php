<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3">
    <h6><a href="?page=laptop_data">Kembali</a></h6>
</div>
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Edit Laptop</h1>
</div>

<div class="row">
    <div class="col">
        <form action="" method="POST" id="formLaptop">
            <div class="form-group">
                <label for="kode">Kode</label>
                <input type="text" class="form-control" id="kode" name="kode" readonly />
            </div>
            <div class="form-group">
                <label for="nama_laptop">Nama Laptop</label>
                <input type="text" class="form-control" id="nama_laptop" name="nama_laptop" />
            </div>
            <div class="form-group">
                <label for="kategori">Kategori</label>
                <select class="form-control" id="kategori" name="kategori"></select>
            </div>
            <div class="form-group">
                <label for="merek">Merek</label>
                <select class="form-control" id="merek" name="merek"></select>
            </div>
            <div class="form-group">
                <label for="gambar">Gambar</label>
                <input type="file" class="form-control" id="gambar" name="gambar" />
            </div>
            <div class="form-group">
                <label for="harga">Harga</label>
                <input type="number" class="form-control" id="harga" name="harga" />
            </div>
            <div class="form-group">
                <label for="deskripsi">Deskripsi</label>
                <textarea class="form-control" id="deskripsi" name="deskripsi"></textarea>
            </div>
            <div class="form-group">
                <button class="btn btn-danger" type="reset">Reset</button>
                <button class="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    </div>
</div>