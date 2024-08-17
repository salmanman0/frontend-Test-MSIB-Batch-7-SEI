$(document).ready(function () {
	getNamaLokasi()
	fetchProyekData()
	fetchLokasiData()
	namaLokasiUntukModalAdd()
	saveButtonAddProyek()
	saveButtonAddLokasi()
	$('#searchButtonProyek').click(function () {
		searchProyek();
	});
	$('#searchProyek').on('keyup', function () {
		searchProyek();
	});

	$('#searchButtonLokasi').click(function () {
		searchLokasi();
	});
	$('#searchLokasi').on('keyup', function () {
		searchLokasi();
	});
});

function searchProyek() {
	var query = $('#searchProyek').val().toLowerCase();
	var items = $('#itemProyek .col-lg-4');  
	var noItemsMessage = $('#noItemProyek'); 
	var hasVisibleItems = false;
	items.each(function () {
		var item = $(this);
		var namaProyek = item.find('h4').text().toLowerCase();
		var client = item.find('p#client').text().toLowerCase();
		var tglMulai = item.find('p#tglMulai').text().toLowerCase();
		var tglSelesai = item.find('p#tglSelesai').text().toLowerCase();
		var pimpinanProyek = item.find('p#pimpinanProyek').text().toLowerCase();
		var keterangan = item.find('p#keterangan').text().toLowerCase();
		var lokasi = item.find('p#lokasi').text().toLowerCase();
		if (namaProyek.includes(query) || client.includes(query) || tglMulai.includes(query) || tglSelesai.includes(query) || pimpinanProyek.includes(query) || keterangan.includes(query) || lokasi.includes(query)) {
			item.show();
			hasVisibleItems = true;
		} else {
			item.hide();
		}
	});
	if (hasVisibleItems) {
		noItemsMessage.addClass('d-none');
	} else {
		noItemsMessage.removeClass('d-none');
	}
}
function searchLokasi() {
	var query = $('#searchLokasi').val().toLowerCase();
	var items = $('#itemLokasi .col-lg-4'); 
	var noItemsMessage = $('#noItemLokasi'); 
	var hasVisibleItems = false;
	items.each(function () {
		var item = $(this);
		var namaLokasi = item.find('h4').text().toLowerCase();
		var negara = item.find('p#negara').text().toLowerCase();
		var provinsi = item.find('p#provinsi').text().toLowerCase();
		var kota = item.find('p#kota').text().toLowerCase();
		if (namaLokasi.includes(query) || negara.includes(query) || provinsi.includes(query) || kota.includes(query)) {
			item.show(); 
			hasVisibleItems = true;
		} else {
			item.hide(); 
		}
	});
	if (hasVisibleItems) {
		noItemsMessage.addClass('d-none');
	} else {
		noItemsMessage.removeClass('d-none');
	}
}


function namaLokasiUntukModalAdd() {
	$('#addProyekModal').on('show.bs.modal', function (e) {
		$.ajax({
			url: 'http://localhost:8080/api/lokasi',
			method: 'GET',
			success: function (response) {
				let lokasiSelect = $('#lokasiIds');
				lokasiSelect.empty();
				response.data.forEach(lokasi => {
					lokasiSelect.append(`<option value="${lokasi.id}">${lokasi.namaLokasi}</option>`);
				});
			},
			error: function (xhr, status, error) {
				Swal.fire(
					'Error!',
					'Failed to load locations.',
					'error'
				);
			}
		});
	});
}

function saveButtonAddProyek() {
	$('#saveProyekBtn').on('click', function () {
		let namaProyek = $('#namaProyek').val();
		let client = $('#client').val();
		let tglMulai = $('#tglMulai').val();
		let tglSelesai = $('#tglSelesai').val();
		let pimpinanProyek = $('#pimpinanProyek').val();
		let keterangan = $('#keterangan').val();
		let lokasiIds = $('#lokasiIds').val();
		if (namaProyek != "" || client != "" || pimpinanProyek != "" || keterangan != "") {
			let newProyek = {
				namaProyek: namaProyek,
				client: client,
				tglMulai: tglMulai,
				tglSelesai: tglSelesai,
				pimpinanProyek: pimpinanProyek,
				keterangan: keterangan,
				lokasiIds: lokasiIds
			};
			createProyekData(newProyek);
			$('#addProyekModal').modal('hide');
		} else {
			Swal.fire(
				'Gagal!',
				'Isi Seluruh Kolom Wajib.',
				'error'
			);
		}
	})
}

function saveButtonAddLokasi() {
	$('#saveLokasiBtn').on('click', function () {
		let namaLokasi = $('#namaLokasi').val();
		let negara = $('#negara').val();
		let provinsi = $('#provinsi').val();
		let kota = $('#kota').val();
		if (namaLokasi != "" || negara != "" || provinsi != "" || kota != "") {
			let newLokasi = {
				namaLokasi: namaLokasi,
				negara: negara,
				provinsi: provinsi,
				kota: kota,
			};
			createLokasiData(newLokasi);
			$('#addLocationModal').modal('hide');
		} else {
			Swal.fire(
				'Gagal!',
				'Isi Seluruh Kolom.',
				'error'
			);
		}
	})
}

function saveButtonEditProyek(id) {
	let namaProyek = $(`#namaProyek${id}`).val();
	let client = $(`#client${id}`).val();
	let tglMulai = $(`#tglMulai${id}`).val();
	let tglSelesai = $(`#tglSelesai${id}`).val();
	let pimpinanProyek = $(`#pimpinanProyek${id}`).val();
	let keterangan = $(`#keterangan${id}`).val();
	let lokasiIds = $(`#lokasiIds${id}`).val();
	if (namaProyek != "" || client != "" || pimpinanProyek != "" || keterangan != "") {
		let newProyek = {
			namaProyek: namaProyek,
			client: client,
			tglMulai: tglMulai,
			tglSelesai: tglSelesai,
			pimpinanProyek: pimpinanProyek,
			keterangan: keterangan,
			lokasiIds: lokasiIds
		};
		editProyekData(newProyek, id);
		$(`#editProyekModal${id}`).modal('hide');
	} else {
		Swal.fire(
			'Gagal!',
			'Isi Seluruh Kolom Wajib.',
			'error'
		);
	}
}

function saveButtonEditLokasi(id) {
	let namaLokasi = $(`#namaLokasi${id}`).val();
	let negara = $(`#negara${id}`).val();
	let provinsi = $(`#provinsi${id}`).val();
	let kota = $(`#kota${id}`).val();
	if (namaLokasi != "" || negara != "" || provinsi != "" || kota != "") {
		let newLokasi = {
			namaLokasi: namaLokasi,
			negara: negara,
			provinsi: provinsi,
			kota: kota,
		};
		editLokasiData(newLokasi, id);
		$(`#editLocationModal${id}`).modal('hide');
	} else {
		Swal.fire(
			'Gagal!',
			'Isi Seluruh Kolom.',
			'error'
		);
	}
}

let lokasiMap = {};
function getNamaLokasi() {
	$.ajax({
		url: 'http://localhost:8080/api/lokasi',
		method: 'GET',
		success: function (response) {
			if (response.status === 'sukses') {
				let lokasi = response.data;

				lokasi.forEach(lokasiItem => {
					lokasiMap[lokasiItem.id] = lokasiItem.namaLokasi;
				});
				// Panggil fetchProyekData() setelah data lokasi tersedia
				fetchProyekData();
			} else {
				console.error('Gagal mendapatkan lokasi: ', response.status);
			}
		},
		error: function (xhr, status, error) {
			console.error('Permintaan AJAX gagal:', status, error);
		}
	});
}

function fetchProyekData() {
	$.ajax({
		url: 'http://localhost:8080/api/proyek',
		method: 'GET',
		success: function (response) {
			if (response.status === 'sukses') {
				let projects = response.data;
				let projectCard = "";
				$('#itemProyek').empty();
				projects.forEach(project => {
					var id = project['id'];
					var namaProyek = project['namaProyek'];
					var client = project['client'];
					var tglMulai = project['tglMulai'] ? new Date(project['tglMulai']).toISOString().split('T')[0] : '';
					var tglSelesai = project['tglSelesai'] ? new Date(project['tglSelesai']).toISOString().split('T')[0] : '';
					var pimpinanProyek = project['pimpinanProyek'];
					var keterangan = project['keterangan'];
					var lokasiIds = project['lokasiIds'];

					projectCard = `
                    <div class="modal fade" id="editProyekModal${id}" tabindex="-1" role="dialog"
                      aria-labelledby="editProyekModalLabel${id}" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="editProyekModalLabel${id}">Edit Proyek</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <form>
                              <div class="form-group">
                                <label for="namaProyek${id}">Project Name <span style="color:red; font-size:0.75rem">*Wajib diisi</span></label>
                                <input type="text" class="form-control" id="namaProyek${id}" placeholder="Nama Proyek" value="${namaProyek}">
                              </div>
                              <div class="form-group">
                                <label for="client${id}">Client <span style="color:red; font-size:0.75rem">*Wajib diisi</span></label>
                                <input type="text" class="form-control" id="client${id}" placeholder="Client" value="${client}">
                              </div>
                              <div class="form-group">
                                <label for="tglMulai${id}">Start Date</label>
                                <input type="date" class="form-control" id="tglMulai${id}" value="${tglMulai}">
                              </div>
                              <div class="form-group">
                                <label for="tglSelesai${id}">End Date</label>
                                <input type="date" class="form-control" id="tglSelesai${id}" value="${tglSelesai}">
                              </div>
                              <div class="form-group">
                                <label for="pimpinanProyek${id}">Project Leader <span style="color:red; font-size:0.75rem">*Wajib diisi</span></label>
                                <input type="text" class="form-control" id="pimpinanProyek${id}" placeholder="Pimpinan Proyek" value="${pimpinanProyek}">
                              </div>
                              <div class="form-group">
                                <label for="keterangan${id}">Description <span style="color:red; font-size:0.75rem">*Wajib diisi</span></label>
                                <textarea class="form-control" id="keterangan${id}" rows="3" placeholder="Keterangan">${keterangan}</textarea>
                              </div>
                              <div class="form-group">
                                  <label for="lokasiIds${id}">Location</label>
                                  <select multiple class="form-control" id="lokasiIds${id}">
                                    ${Object.entries(lokasiMap).map(([lokasiId, lokasiName]) => `
                                      <option value="${lokasiId}" ${lokasiIds.includes(lokasiId) ? 'selected' : ''}>${lokasiName}</option>
                                    `).join('')}
                                  </select>
                                </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onclick="saveButtonEditProyek(${id})">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4" id="project-${id}">
                      <div class="media d-block text-center ftco-media p-md-5 p-4 ftco-animate bg-white rounded shadow-sm position-relative fadeInUp ftco-animated" style="position: relative;">
                        <div class="dropdown" style="position: absolute; top: 10px; right: 10px;">
                          <i class="fi fi-sr-square-ellipsis" type="button" id="dropdownMenuButton${id}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size: 1.5rem;"></i>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton${id}">
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#editProyekModal${id}">Edit</a>
                            <a class="dropdown-item" href="#" type="button" onclick="deleteProyekData(${id}); return false;">Hapus</a>
                          </div>
                        </div>
                        <div class="ftco-icon mb-3">
                          <span class="oi oi-bolt display-4 text-success"></span>
                        </div>
                        <div class="media-body text-left">
                          <div class="text-center mb-4">
                            <h4 class="mt-0" id="namaProyek" style="font-size: 1.5rem; font-weight: bold;">${namaProyek}</h4>
                            <p class="text-muted" id="client" style="font-size: 1rem;">Client: ${client}</p>
                          </div>
                          <p class="text-muted mb-1" id="tglMulai" style="font-size: 0.85rem;">Tanggal Mulai: <strong>${tglMulai ?new Date(tglMulai).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }) : 'Belum Diatur'}</strong></p>
                          <p class="text-muted mb-1" id="tglSelesai" style="font-size: 0.85rem;">Tanggal Selesai: <strong>${tglSelesai ? new Date(tglSelesai).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }) : 'Belum selesai'}</strong></p>
                          <p class="text-muted mb-1" id="pimpinanProyek" style="font-size: 0.85rem;">Pimpinan Proyek: <strong>${pimpinanProyek}</strong></p>
                          <p class="text-muted mb-4" id="keterangan" style="font-size: 0.85rem;">Keterangan: <strong>${keterangan}</strong></p>
                          <p class="text-muted mb-0" id="lokasi" style="font-size: 0.85rem;">Lokasi: <strong>${lokasiIds.map(id => lokasiMap[id] || 'Unknown Location').join(', ')}</strong></p>
                        </div>
                      </div>
                    </div>
                  `;

					$('#itemProyek').append(projectCard);
				});
			} else {
				console.error('Gagal mendapatkan proyek: ', response.status);
			}
		},
		error: function (xhr, status, error) {
			console.error('Permintaan AJAX gagal:', status, error);
		}
	});
}

function fetchLokasiData() {
	$.ajax({
		url: 'http://localhost:8080/api/lokasi',
		method: 'GET',
		success: function (response) {
			if (response.status === 'sukses') {
				let lokasi = response.data;
				let projectCard = "";
				$('#itemLokasi').empty();
				for (let i = 0; i < lokasi.length; i++) {
					var id = lokasi[i]['id']
					var namaLokasi = lokasi[i]['namaLokasi']
					var negara = lokasi[i]['negara']
					var provinsi = lokasi[i]['provinsi']
					var kota = lokasi[i]['kota']
					projectCard = `
						<div class="modal fade" id="editLocationModal${id}" tabindex="-1" role="dialog" aria-labelledby="editModalLabel${id}"
							aria-hidden="true">
							<div class="modal-dialog" role="document">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="editModalLabel${id}">Edit Lokasi</h5>
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form>
											<div class="form-group">
												<label for="namaLokasi${id}">Location Name</label>
												<input type="text" class="form-control" id="namaLokasi${id}" placeholder="Nama Lokasi" value="${namaLokasi}">
											</div>
											<div class="form-group">
												<label for="negara${id}">Country</label>
												<input type="text" class="form-control" id="negara${id}" placeholder="Negara" value="${negara}">
											</div>
											<div class="form-group">
												<label for="provinsi${id}">Province</label>
												<input type="text" class="form-control" id="provinsi${id}" placeholder="Provinsi" value="${provinsi}">
											</div>
											<div class="form-group">
												<label for="kota${id}">City</label>
												<input type="text" class="form-control" id="kota${id}" placeholder="Kota" value="${kota}">
											</div>
										</form>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										<button type="button" class="btn btn-primary" onclick="saveButtonEditLokasi(${id})">Save changes</button>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 mb-4" id="lokasi-${id}">
							<div class="media d-block text-center ftco-media p-md-5 p-4 ftco-animate bg-white rounded shadow-sm position-relative fadeInUp ftco-animated">
								<div class="dropdown" style="position: absolute; top: 10px; right: 10px;">
									<i class="fi fi-sr-square-ellipsis" type="button" id="dropdownMenuButton${id}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size: 1.5rem;"></i>
									<div class="dropdown-menu" aria-labelledby="dropdownMenuButton${id}">
										<a class="dropdown-item" href="#" data-toggle="modal" data-target="#editLocationModal${id}">Edit</a>
										<a class="dropdown-item" href="#" onclick="deleteLokasiData(${id}); return false;">Hapus</a>
									</div>
								</div>
								<div class="ftco-icon mb-3">
									<span class="oi oi-map-marker display-4 text-success"></span>
								</div>
								<div class="media-body text-left">
								<div class="text-center mb-4">
									<h4 class="mt-0" id="namaLokasi" style="font-size: 1.5rem; font-weight: bold;">${namaLokasi}</h4>
								</div>
								<p class="text-muted mb-1" id="negara" style="font-size: 1rem;">Address: <strong>${negara}</strong></p>
								<p class="text-muted mb-1" id="provinsi" style="font-size: 1rem;">Date Established: <strong>${provinsi}</strong></p>
								<p class="text-muted mb-4" id="kota" style="font-size: 1rem;">Description: <strong>${kota}</strong></p>
							</div>
						</div>
					</div>`;
					$('#itemLokasi').append(projectCard);
				}
			} else {
				console.error('Gagal mendapatkan proyek: ', response.status);
			}
		},
		error: function (xhr, status, error) {
			console.error('Permintaan AJAX gagal:', status, error);
		}
	});
}

function createProyekData(data) {
	$.ajax({
		url: 'http://localhost:8080/api/proyek',
		method: 'POST',
		contentType: 'application/json',
		data: JSON.stringify(data),
		success: function (response) {
			if (response.status === 'sukses') {
				Swal.fire(
					'Berhasil!',
					'Proyek baru telah dibuat.',
					'success'
				);
				fetchProyekData();
			} else {
				Swal.fire(
					'Gagal!',
					'Tidak dapat membuat proyek.',
					'error'
				);
			}
		},
		error: function (xhr, status, error) {
			Swal.fire(
				'Error!',
				'Terjadi kesalahan saat membuat proyek.',
				'error'
			);
		}
	});
}

function createLokasiData(data) {
	$.ajax({
		url: 'http://localhost:8080/api/lokasi',
		method: 'POST',
		contentType: 'application/json',
		data: JSON.stringify(data),
		success: function (response) {
			if (response.status === 'sukses') {
				Swal.fire(
					'Berhasil!',
					'Lokasi baru telah dibuat.',
					'success'
				);
				fetchLokasiData();
			} else {
				Swal.fire(
					'Gagal!',
					'Tidak dapat membuat lokasi.',
					'error'
				);
			}
		},
		error: function (xhr, status, error) {
			Swal.fire(
				'Error!',
				'Terjadi kesalahan saat membuat lokasi.',
				'error'
			);
		}
	});
}

function editProyekData(data, id) {
	$.ajax({
		url: `http://localhost:8080/api/proyek/${id}`,
		method: 'PUT',
		contentType: 'application/json',
		data: JSON.stringify(data),
		success: function (response) {
			if (response.status === 'sukses') {
				Swal.fire(
					'Berhasil!',
					'Proyek telah diperbarui.',
					'success'
				);
				fetchProyekData();
				console.log("tes");
			} else {
				Swal.fire(
					'Gagal!',
					'Tidak dapat perbarui proyek.',
					'error'
				);
			}
		},
		error: function (xhr, status, error) {
			Swal.fire(
				'Error!',
				'Terjadi kesalahan saat perbarui proyek.',
				'error'
			);
		}
	});
}

function editLokasiData(data, id) {
	$.ajax({
		url: `http://localhost:8080/api/lokasi/${id}`,
		method: 'PUT',
		contentType: 'application/json',
		data: JSON.stringify(data),
		success: function (response) {
			if (response.status === 'sukses') {
				Swal.fire(
					'Berhasil!',
					'Lokasi telah diperbarui.',
					'success'
				);
				fetchLokasiData();
			} else {
				Swal.fire(
					'Gagal!',
					'Tidak dapat perbarui lokasi.',
					'error'
				);
			}
		},
		error: function (xhr, status, error) {
			Swal.fire(
				'Error!',
				'Terjadi kesalahan saat perbarui lokasi.',
				'error'
			);
		}
	});
}

function deleteProyekData(id) {
	Swal.fire({
		title: 'Apakah Anda yakin?',
		text: "Data ini akan dihapus secara permanen!",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Ya, hapus!',
		cancelButtonText: 'Batal'
	}).then((result) => {
		if (result.isConfirmed) {
			$.ajax({
				url: `http://localhost:8080/api/proyek/${id}`,
				method: 'DELETE',
				success: function (response) {
					if (response.status === 'sukses') {
						Swal.fire(
							'Terhapus!',
							'Proyek telah dihapus.',
							'success'
						);
						fetchProyekData();
					} else {
						Swal.fire(
							'Gagal!',
							'Tidak dapat menghapus proyek.',
							'error'
						);
					}
				},
				error: function (xhr, status, error) {
					Swal.fire(
						'Error!',
						'Terjadi kesalahan saat menghapus proyek.',
						'error'
					);
				}
			});
		}
	});
}

function deleteLokasiData(id) {
	Swal.fire({
		title: 'Apakah Anda yakin?',
		text: "Data ini akan dihapus secara permanen!",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Ya, hapus!',
		cancelButtonText: 'Batal'
	}).then((result) => {
		if (result.isConfirmed) {
			$.ajax({
				url: `http://localhost:8080/api/lokasi/${id}`,
				method: 'DELETE',
				success: function (response) {
					if (response.status === 'sukses') {
						Swal.fire(
							'Terhapus!',
							'Lokasi telah dihapus.',
							'success'
						);
						fetchLokasiData();
					} else {
						Swal.fire(
							'Gagal!',
							'Tidak dapat menghapus lokasi.',
							'error'
						);
					}
				},
				error: function (xhr, status, error) {
					Swal.fire(
						'Error!',
						'Terjadi kesalahan saat menghapus lokasi.',
						'error'
					);
				}
			});
		}
	});
}
