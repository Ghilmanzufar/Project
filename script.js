// data
const Quiz = [
    {
        question : "Dimana Ibukota Indonesia?",
        answers : ["a. Jakarta", "b. Bandung", "c. Bekasi", "d. Kalimantan"]
    },
    {
        question : "Siapakah Presiden Ke 1 Indonesia?",
        answers: ["a. Jokowi","b. Megawati", "c. Prabowo", "d. Soekarno"]
    },
    {
        question : "Dimana Monas Berada?",
        answers : ["a. Bekasi", "b. Cirebon", "c. Jakarta", "d. Bogori"]
    },
    {
        question : "Kapan Indonesia Merdeka?",
        answers : ["a. 17 September 1945", "b. 17 Oktober 1945", "c. 17 Januari 1945", "d. 17 Agustus 1945"]
    },
    {
        question : "Kapan tanggal Lahir Ghilman zufar?",
        answers : ["a. 21 mei 2004", "b. 21 januari 2004", "c. 21 febuari 2004", "d. 21 oktober 2004"]
    }
]
const jawaban = [0,3,2,3,0];

// setup soal
let curent_Q = 0;
let saved_Answer = [];
document.addEventListener("DOMContentLoaded", function(event) {
    setupSoal()
});

function setupSoal() {
    document.getElementById('pertanyaan').innerText = Quiz[curent_Q]['question'];
    document.getElementById('pilihanText0').innerText = Quiz[curent_Q]['answers'][0];
    document.getElementById('pilihanText1').innerText = Quiz[curent_Q]['answers'][1];
    document.getElementById('pilihanText2').innerText = Quiz[curent_Q]['answers'][2];
    document.getElementById('pilihanText3').innerText = Quiz[curent_Q]['answers'][3];
    
    const choices = document.querySelectorAll('input[name="pilihan"]');
    for (let i = 0; i < choices.length; i++) {
        choices[i].checked = false;
    }
    
    if (saved_Answer[curent_Q] !== null) {
        document.querySelector(`input[name="pilihan"][data-id="${saved_Answer[curent_Q]}"]`).checked = true;
    }
    
    
}

function nextQuestion(){
    saveAnswer()
    curent_Q++

    document.querySelector('input[name="pilihan"]:checked').checked = false;
    if(curent_Q > Quiz.length-1){
        ubahJudul();
    }
    setupSoal()
}

function JawabanBener(){
    let score = 0;
    for(let i = 0; i < jawaban.length; i++){
        if(saved_Answer[i] === jawaban[i]){
            score++;
        }
    }
    return score;
}

function saveAnswer(){
    const answer = document.querySelector('input[name="pilihan"]:checked');
    if (answer != null){
        saved_Answer.push(parseInt(answer.getAttribute('data-id')));
        console.log(saved_Answer);
    }
}

function ubahJudul(){
    let ubahJudul = document.getElementById('judul');
    ubahJudul.innerHTML = 'SCORE ANDA';

    let ubahIsi = document.getElementById('soal');
    ubahIsi.innerHTML = '<h4>Jawaban Anda yang betul : </h4>' + `<h4>${JawabanBener()}</h4>` + "<p>Terima Kasih :)</p>";

    let btnNext = document.getElementById('btnNext');

    if (curent_Q === 5){
        
        btnNext.style.display = 'none';
    }
}