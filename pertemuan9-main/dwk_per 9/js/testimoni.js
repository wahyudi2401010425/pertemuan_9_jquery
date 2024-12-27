var NIM="2401010425"
var urlAPI = "https://apimhstiki.ptov.my.id/"
var urlREAD =urlAPI+`testi-${NIM}/read`
//console.log(urlREAD)

$(function(){

    $.ajax({
        url: urlREAD,
        method: `GET`,
        dataType: `json`,
        success:function(dta){
            let tbdta = ""
            let ipx = ""
            if(dta.error==0){
                //ini untuk kode error
                dta.TESTI.forEach(function(isi){
                    tbdta += `<tr>
          <td>${isi.NAMA}</td>
          <td>${isi.EMAIL}</td>
          <td>${isi.TESTI}</td>
          <td>${isi.IPX}</td>
          <td><a oneClick="destroy('${isi.IDX}')" class="btn btn-danger btn-sm"> Hapus </a></td>
        </tr>`
                })
            }else{
                //ini bagian selain kode 0
            if(dta.error==4){
                //ini bagian error kode 4
                dta.TESTI.forEach(function(isi){
                    tbdta += `<tr>
          <td>${isi.NAMA}</td>
          <td>${isi.EMAIL}</td>
          <td>${isi.TESTI}</td>
          <td>${isi.IPX}</td>
          <td></td>
        </tr>`
            })
        }
        }
        $("tbody").html(tbdta)
        },
        error:function(){
            console.log("Gagal membaca data")
        }
    })
})