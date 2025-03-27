const quotes = [
    "Yang gagal itu usahamu bukan hidupmu dan yang hancur itu rencanamu bukan masa depanmu. Dunia itu adil.",
    "Percaya pada dirimmu sediri dengan segala kemampuan sekecil apapun itu.",
    "Kamu mempunyai kemampuan untuk melakukan apapun yang kamu mau.",
    "Setiap individu unik dengan kemampuannya sendiri",
    "Kamu adalah satu-satunya orang yang bisa mewujudkan masa depanmu.",
    "Semua pengalaman yang kamu alami akan mmembuat kamu berkembang.",
    "Hidup terus berjalan.",
    "Hidup seperti yang kamu inginkan, its your life.",
    "Jangan pernah menyerah, karena kamu akan berhasil",
    "Kamu adalah yang paling hebat di dunia ini"
];

function tombol() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];

    document.getElementById("modalQuote").innerText = randomQuote;
    document.getElementById("popUp").style.display = "flex";
}

function closepopup() {
    document.getElementById("popUp").style.display = "none";
}

