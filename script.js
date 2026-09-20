function openReservation() {
    document.getElementById("reservation-modal").style.display = "block";
}

function closeReservation() {
    document.getElementById("reservation-modal").style.display = "none";
}

function submitReservation(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;

    document.querySelector(".reservation-form").innerHTML = `
        <h2>予約を受け付けました</h2>

        <p>${name} 様</p>

        <p>
            以下の内容で予約を受け付けました。
        </p>

        <div class="reservation-result">
            <p><strong>予約日：</strong>${date}</p>
            <p><strong>予約時間：</strong>${time}</p>
            <p><strong>人数：</strong>${people}</p>
        </div>

        <button onclick="closeReservation()">
            閉じる
        </button>
    `;
}
// ハンバーガーメニューを開閉する
function toggleMenu() {

    const nav = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    nav.classList.toggle("open");
    hamburger.classList.toggle("active");

}


function closeMenu() {

    const nav = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    nav.classList.remove("open");
    hamburger.classList.remove("active");

}


// メニューを閉じる
function closeMenu() {

    const nav = document.querySelector(".nav-links");

    nav.classList.remove("open");

}