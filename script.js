// ===============================
// FITUR PENCARIAN
// ===============================

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {

    let keyword = searchInput.value.toLowerCase();

    let ditemukan = false;

    cards.forEach(function(card){

        let isi = card.innerText.toLowerCase();

        if(isi.includes(keyword)){
            card.style.display = "block";
            ditemukan = true;
        }else{
            card.style.display = "none";
        }

    });

    let pesan = document.getElementById("pesanKos");

    if(!pesan){
        pesan = document.createElement("h2");
        pesan.id = "pesanKos";
        pesan.style.textAlign = "center";
        pesan.style.marginTop = "20px";
        pesan.style.color = "red";
        document.body.appendChild(pesan);
    }

    if(ditemukan){
        pesan.innerHTML = "";
    }else{
        pesan.innerHTML = "Data kos tidak ditemukan.";
    }

});

// ===============================
// TOMBOL DETAIL
// ===============================

const tombol = document.querySelectorAll("button");

tombol.forEach(function(btn){

    btn.addEventListener("click", function(){

        const card = this.parentElement;

        const nama = card.querySelector("h2").innerText;
        const info = card.querySelectorAll("p");

        alert(
            "===== DETAIL KOS =====\n\n" +
            nama + "\n\n" +
            info[0].innerText + "\n" +
            info[1].innerText + "\n" +
            info[2].innerText + "\n" +
            info[3].innerText
        );

    });

});