<!DOCTYPE html>
<html lang="en">

<head>
	<title>Manajemen Proyek - PT. Surya Energi Indotama</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="Pendataan Proyek" />
	<meta name="keywords"
		content="surya energi indotama, proyek, lokasi, mega proyek, website proyek, website pendataan proyek" />
	<meta name="author" content="Salman Ananda" />

	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
	<link rel="stylesheet" href="<?php echo base_url('assets/css/bootstrap.min.css'); ?>">
	<link rel="stylesheet" href="<?php echo base_url('assets/css/open-iconic-bootstrap.min.css'); ?>">
	<link rel="stylesheet" href="<?php echo base_url('assets/css/animate.css'); ?>">

	<link rel="stylesheet" href="<?php echo base_url('assets/css/owl.carousel.min.css'); ?>">
	<link rel="stylesheet" href="<?php echo base_url('assets/css/owl.theme.default.min.css'); ?>">

	<link rel="stylesheet" href="<?php echo base_url('assets/css/icomoon.css'); ?>">
	<link rel="stylesheet" href="<?php echo base_url('assets/css/style.css'); ?>">

	<link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-solid-rounded/css/uicons-solid-rounded.css'>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</head>

<body data-spy="scroll" data-target="#ftco-navbar" data-offset="200">

	<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
		<div class="container">
			<a class="navbar-brand" href="index.html">Surya Energi Indotama</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
				aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="oi oi-menu"></span> Menu
			</button>

			<div class="collapse navbar-collapse" id="ftco-nav">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active"><a href="#section-home" class="nav-link">Home</a></li>
					<li class="nav-item"><a href="#section-our-project" class="nav-link">Our Project</a></li>
					<li class="nav-item"><a href="#section-our-location-project" class="nav-link">Our Location</a></li>
					<li class="nav-item"><a href="#section-contact" class="nav-link">Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>
	<!-- END nav -->

	<section class="ftco-cover ftco-slant"
		style="background-image: url('<?php echo base_url("assets/images/bg_3.jpg"); ?>'); position: relative;"
		id="section-home">
		<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5);">
		</div>
		<div class="container" style="position: relative; z-index: 1;">
			<div class="row align-items-center justify-content-center text-center ftco-vh-100">
				<div class="col-md-10">
					<h1 class="ftco-heading ftco-animate">Empowering a Sustainable Future</h1>
					<h2 class="h5 ftco-subheading mb-5 ftco-animate">Our Planet In Our Hand</h2>
				</div>
			</div>
		</div>
	</section>

	<section class="ftco-section bg-light ftco-slant ftco-slant-white" id="section-our-project">
		<div class="container">
			<!-- Modal add Proyek -->
			<div class="modal fade" id="addProyekModal" tabindex="-1" role="dialog" aria-labelledby="addProyekModalLabel"
				aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="addProyekModalLabel">Add Proyek</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<div class="form-group">
									<label for="namaProyek">Project Name <span style="color:red; font-size:0.75rem">*Wajib
											diisi</span></label>
									<input type="text" class="form-control" id="namaProyek" placeholder="Nama Proyek">
								</div>
								<div class="form-group">
									<label for="client">Client <span style="color:red; font-size:0.75rem">*Wajib diisi</span></label>
									<input type="text" class="form-control" id="client" placeholder="Client">
								</div>
								<div class="form-group">
									<label for="tglMulai">Start Date</label>
									<input type="date" class="form-control" id="tglMulai">
								</div>
								<div class="form-group">
									<label for="tglSelesai">End Date</label>
									<input type="date" class="form-control" id="tglSelesai">
								</div>
								<div class="form-group">
									<label for="pimpinanProyek">Project Leader <span style="color:red; font-size:0.75rem">*Wajib
											diisi</span></label>
									<input type="text" class="form-control" id="pimpinanProyek" placeholder="Pimpinan Proyek">
								</div>
								<div class="form-group">
									<label for="keterangan">Description <span style="color:red; font-size:0.75rem">*Wajib
											diisi</span></label>
									<textarea class="form-control" id="keterangan" rows="3" placeholder="Keterangan"></textarea>
								</div>
								<div class="form-group">
									<label for="lokasiIds">Location <span style="color:red;">*<span
												style="color:red; font-size: 0.75rem;">Dapat memilih lebih dari 1</span></span></label>
									<select multiple class="form-control" id="lokasiIds" style="height: 200px;">
										<option value="1">Lokasi 1</option>
										<option value="2">Lokasi 2</option>
										<option value="3">Lokasi 3</option>
										<option value="4">Lokasi 4</option>
									</select>
								</div>
							</form>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="button" class="btn btn-primary" id="saveProyekBtn">Save</button>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-12 text-center mb-5 ftco-animate">
					<div class="row justify-content-center align-items-center">
						<h2 class="text-uppercase ftco-uppercase">Our Project</h2>
						<button class="btn btn-success ml-3" data-toggle="modal" data-target="#addProyekModal"
							style="height: 3rem; width: 3rem; border-radius: 20%; display: flex; align-items: center; justify-content: center;">
							<span class="oi oi-plus" style="font-size: 20px;"></span>
						</button>
					</div>
					<div class="row justify-content-center">
						<div class="col-md-7">
							<p class="lead">Pioneering innovation in renewable energy. Our projects are reshaping the future of clean
								power.</p>
						</div>
					</div>
				</div>
				<div class="input-group mb-3">
					<input type="text" class="form-control" placeholder="Search Project's Name" id="searchProyek">
					<button class="btn btn-outline-secondary" type="button" id="searchButtonProyek">Search</button>
				</div>


				<div class="container">
				<div id="noItemProyek" class="text-center d-none">
							<p>No Item Found</p>
						</div>
					<div class="row flex-nowrap overflow-auto" id="itemProyek">
						
						<div class="col-lg-4 col-md-6 mb-4">
							<div
								class="media d-block text-center ftco-media p-md-5 p-4 ftco-animate bg-white rounded shadow-sm position-relative"
								style="position: relative;">
								<div class="dropdown" style="position: absolute; top: 10px; right: 10px;">
									<i class="fi fi-sr-square-ellipsis" type="button" id="dropdownMenuButton" data-toggle="dropdown"
										aria-haspopup="true" aria-expanded="false" style="font-size: 1.5rem;"></i>
									<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
										<a class="dropdown-item" href="#section-our-proyek" id="editProyekButton">Edit</a>
										<a class="dropdown-item" href="#">Hapus</a>
									</div>
								</div>
								<div class="ftco-icon mb-3">
									<span class="oi oi-bolt display-4 text-primary"></span>
								</div>
								<div class="media-body text-left">
									<div class="text-center mb-4">
										<h4 class="mt-0" style="font-size: 1.5rem; font-weight: bold;">Proyek Pembangunan Gedung</h4>
										<p class="text-muted" style="font-size: 1rem;">Client: PT. ABC</p>
									</div>
									<p class="text-muted mb-1" style="font-size: 0.75rem;">Tanggal Mulai: <strong>2024-08-15</strong></p>
									<p class="text-muted mb-1" style="font-size: 0.75rem;">Tanggal Selesai: <strong>2024-12-15</strong>
									</p>
									<p class="text-muted mb-1" style="font-size: 0.75rem;">Pimpinan Proyek: <strong>Salman
											Ganteng</strong></p>
									<p class="text-muted mb-4" style="font-size: 0.75rem;">Keterangan: <strong>Pembangunan gedung
											perkantoran</strong></p>
									<p class="text-muted mb-0" style="font-size: 0.75rem;">Lokasi: <strong>Lokasi 1, Lokasi 2</strong></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- END section -->

	<section class="ftco-section bg-light ftco-slant ftco-slant-white" id="section-our-location-project">
		<div class="container">
			<!-- Modal add -->
			<div class="modal fade" id="addLocationModal" tabindex="-1" role="dialog" aria-labelledby="addModalLabel"
				aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="addModalLabel">Add Location</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<div class="form-group">
									<label for="namaLokasi">Location Name</label>
									<input type="text" class="form-control" id="namaLokasi" placeholder="Nama Lokasi">
								</div>
								<div class="form-group">
									<label for="negara">Country</label>
									<input type="text" class="form-control" id="negara" placeholder="Negara">
								</div>
								<div class="form-group">
									<label for="provinsi">Province</label>
									<input type="text" class="form-control" id="provinsi" placeholder="Provinsi">
								</div>
								<div class="form-group">
									<label for="kota">City</label>
									<input type="text" class="form-control" id="kota" placeholder="Kota">
								</div>
							</form>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="button" class="btn btn-primary" id="saveLokasiBtn">Save changes</button>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-12 text-center mb-5 ftco-animate">
					<div class="row justify-content-center align-items-center">
						<h2 class="text-uppercase ftco-uppercase">Our Project Location</h2>
						<button class="btn btn-success ml-3" data-toggle="modal" data-target="#addLocationModal"
							style="height: 3rem; width: 3rem; border-radius: 20%; display: flex; align-items: center; justify-content: center;">
							<span class="oi oi-plus" style="font-size: 20px;"></span>
						</button>
					</div>
					<div class="row justify-content-center">
						<div class="col-md-7">
							<p class="lead">Explore the diverse locations where our innovative projects are transforming landscapes.
								Discover how each site contributes to a sustainable future.</p>
						</div>
					</div>
				</div>

				<!-- Search Bar -->
				<div class="input-group mb-3">
					<input type="text" class="form-control" placeholder="Search Project's Name" id="searchLokasi">
					<button class="btn btn-outline-secondary" type="button" id="searchButtonLokasi">Search</button>
				</div>

				<div class="container">
				<div id="noItemLokasi" class="text-center d-none">
							<p>No Item Found</p>
						</div>
					<div class="row flex-nowrap overflow-auto" id="itemLokasi">
						<div class="col-lg-4 col-md-6 mb-4">
							<div
								class="media d-block text-center ftco-media p-md-5 p-4 ftco-animate bg-white rounded shadow-sm position-relative fadeInUp ftco-animated">
								<div class="dropdown" style="position: absolute; top: 10px; right: 10px;">
									<i class="fi fi-sr-square-ellipsis" type="button" id="dropdownMenuButton" data-toggle="dropdown"
										aria-haspopup="true" aria-expanded="false" style="font-size: 1.5rem;"></i>
									<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
										<a class="dropdown-item" href="#">Edit</a>
										<a class="dropdown-item" href="#">Hapus</a>
									</div>
								</div>
								<div class="ftco-icon mb-3">
									<span class="oi oi-map-marker display-4 text-primary"></span>
								</div>
								<div class="media-body text-left">
									<div class="text-center mb-4">
										<h4 class="mt-0" style="font-size: 1.5rem; font-weight: bold;">Location Name</h4>
										<p class="text-muted" style="font-size: 1rem;">Client: PT. XYZ</p>
									</div>
									<p class="text-muted mb-1" style="font-size: 0.75rem;">Address: <strong>123 Street, City</strong></p>
									<p class="text-muted mb-1" style="font-size: 0.75rem;">Date Established: <strong>2024-01-01</strong>
									</p>
									<p class="text-muted mb-4" style="font-size: 0.75rem;">Description: <strong>Site description goes
											here</strong></p>
									<p class="text-muted mb-0" style="font-size: 0.75rem;">Contact: <strong>+123456789</strong></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


	<footer class="ftco-footer ftco-bg-dark" id="section-contact">
		<div class="container">
			<div class="row mb-5">
				<div class="col-md-8">
					<div class="row">
						<div class="col-md">
							<div class="ftco-footer-widget mb-4">
								<h2 class="ftco-heading-2">Company</h2>
								<ul class="list-unstyled">
									<li><a href="#section-home" class="py-2 d-block">Home</a></li>
									<li><a href="#section-our-project" class="py-2 d-block">Our Project</a></li>
									<li><a href="#section-our-location-project" class="py-2 d-block">Our Project Location</a></li>
									<li><a href="#section-contact" class="py-2 d-block">Contact</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="ftco-footer-widget mb-4">
						<h1 class="text-white">Surya Energi Indotama</h1>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md text-left">
					<p>&copy; SEI 2024</p>
				</div>
			</div>
		</div>
	</footer>

	<!-- loader -->
	<div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px">
			<circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
			<circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"
				stroke="#4586ff" /></svg></div>

	<script src="<?php echo base_url('assets/js/jquery.min.js'); ?>"></script>
	<script src="<?php echo base_url('assets/js/popper.min.js'); ?>"></script>
	<script src="<?php echo base_url('assets/js/bootstrap.min.js'); ?>"></script>
	<script src="<?php echo base_url('assets/js/jquery.easing.1.3.js'); ?>"></script>
	<script src="<?php echo base_url('assets/js/jquery.waypoints.min.js'); ?>"></script>
	<script src="<?php echo base_url('assets/js/owl.carousel.min.js'); ?>"></script>
	<script src="<?php echo base_url('assets/js/jquery.animateNumber.min.js'); ?>"></script>

	<script src="<?php echo base_url('assets/js/main.js'); ?>"></script>
	<script src="<?php echo base_url('assets/js/crud.js'); ?>"></script>

</body>

</html>
