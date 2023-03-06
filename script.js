let pitanje1 = {
    tekst: "Koje godine je počeo Prvi srpski ustanak?",
    odgovori: ["1801.", "1804.", "1808.", "1813."],
    indeksTO: 1
}

let pitanje2 = {
    tekst: "Najduža reka u Evropi je:",
    odgovori: ["Dunav", "Rajna", "Volga", "Majna"],
    indeksTO: 2
}

let pitanje3 = {
    tekst: "Koji slikar je autor Portreta Arnolfinijevih?",
    odgovori: ["Jan van Ajk", "Rembrant", "Žak Luj David", "Vinsent van Gog"],
    indeksTO: 0
}

let pitanje4 = {
    tekst: "Koga je u finalu Evrolige 1992. godine savladao Partizan?",
    odgovori: ["Real Madrid", "Olimpijakos", "Baskoniju", "Huventud"],
    indeksTO: 3
}

let pitanje5 = {
    tekst: "Stepski vuk, Sidarta, Igra staklenih perli, neka su od dela kog pisca?",
    odgovori: ["Hajnriha Hajnea", "Hermana Hesea", "Johana Volfganga Getea", "Ernsta Jingera"],
    indeksTO: 1
}

let pitanje6 = {
    tekst: "U kojoj državi je osnovana muzička grupa Boney M?",
    odgovori: ["Belgija", "Holandija", "Nemačka", "Luksemburg"],
    indeksTO: 2
}

let pitanje7 = {
    tekst: "Koliko godina je trajao Stogodišnji rat?",
    odgovori: ["96", "101", "106", "116"],
    indeksTO: 3
}

let pitanje8 = {
    tekst: "Pored Titanika i Godpodara prstenova - Povratak kralja, koji još film je dobio 11 oskara?",
    odgovori: ["Poslednji kineski car", "Na dokovima Njujorka", "Ben Hur", "Prohujalo sa vihorom"],
    indeksTO: 2
}

let pitanje9 = {
    tekst: "Gde će se održati Letnje Olimpijske igre 2028. godine?",
    odgovori: ["Los Anđeles", "Brizbejn", "San Francisko", "Velington"],
    indeksTO: 0
}

let pitanje10 = {
    tekst: "Koja je osnovna jedinica jačine svetlosti SI sistema?",
    odgovori: ["Lumen", "Fluks", "Kandela", "Veber"],
    indeksTO: 2
}

let pitanje11 = {
    tekst: "Kahon je:",
    odgovori: ["Arapsko jelo", "Planinski venac", "Borilačka veština", "Muzički instrument"],
    indeksTO: 3
}

let pitanje12 = {
    tekst: "Popularnu franšizu GTA igrica razvila je koja kompanija?",
    odgovori: ["Blizzard entertainment", "Rockstar games", "EA games", "Activision"],
    indeksTO: 1
}

let pitanje13 = {
    tekst: "Džon Vilks But je u atentatu usmrtio:",
    odgovori: ["Džona Kenedija", "Abrahama Linkolna", "Ulofa Palmea", "Alda Mora"],
    indeksTO: 1
}

let pitanje14 = {
    tekst: "Filmove Odiseja u svemiru 2001., Paklena pomorandža i Isijavanje režirao je:",
    odgovori: ["Alfred Hičkog", "Stiven Spilberg", "Džon Ford", "Stenli Kjubrik"],
    indeksTO: 3
}

let pitanje15 = {
    tekst: "Autor skuplpture spomenika oslobodiocima Niša je:",
    odgovori: ["Bogdan Bogdanović", "Ivan Meštrović", "Antun Avgustinčić", "Toma Rosandić"],
    indeksTO: 2
}

let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10, pitanje11, pitanje12, pitanje13, pitanje14, pitanje15];


let btnPosalji = document.getElementById("posalji");
let btnNova = document.getElementById("nova");

function random() {
    let indeksi5 = [];
    while(indeksi5.length < 5) {
        let indeks = Math.floor(Math.random() * pitanja.length);
        if(!indeksi5.includes(indeks)) {
            indeksi5.push(indeks);
        }
    }

    let randomPitanja = [];
    for(let index of indeksi5) {
        randomPitanja.push(pitanja[index]);
    }

    let divPitanja = document.createElement('div');
    divPitanja.classList.add('pitanja');

    for(let pitanje of randomPitanja) {
        let br = randomPitanja.indexOf(pitanje) + 1;
        let divPitanje = document.createElement('div');
        divPitanje.classList.add('pitanje');
        divPitanje.dataset.indeksTO = pitanje.indeksTO;

        let tekstPitanja = document.createElement('p');
        tekstPitanja.innerText = `${br}. ${pitanje.tekst}`;

        divPitanje.appendChild(tekstPitanja);

        let divOdgovori = document.createElement('div');
        divOdgovori.classList.add('odgovori');

        for(let i = 0; i < pitanje.odgovori.length; i++) {
            let odgovor = pitanje.odgovori[i];

            let label = document.createElement('label');
            let radioBtn = document.createElement('input');
            radioBtn.type = 'radio';
            radioBtn.name = `pitanje${randomPitanja.indexOf(pitanje)}`;
            radioBtn.value = i;

            if (i === 0) {
                radioBtn.checked = true;
            }

            label.innerText = odgovor;

            divOdgovori.appendChild(radioBtn);
            divOdgovori.appendChild(label);

            let spanOdgovori = document.querySelectorAll('span');
            for(let spanOdgovor of spanOdgovori) {
                document.body.removeChild(spanOdgovor);
            }
        

        }
        divPitanje.appendChild(divOdgovori);

        divPitanja.appendChild(divPitanje);
    }
    document.body.prepend(divPitanja);
}

random();


btnNova.addEventListener("click", () => {
    let pitanjaDiv = document.querySelector('.pitanja');

    while (pitanjaDiv.firstChild) {
      pitanjaDiv.removeChild(pitanjaDiv.firstChild);
    }
    random();
});

btnPosalji.addEventListener("click", () => {
    let pitanja = document.querySelectorAll('.pitanje');

        let spanOdgovori = document.querySelectorAll('span');
        for(let spanOdgovor of spanOdgovori) {
            document.body.removeChild(spanOdgovor);
        }
    

    for(let i = 0; i < pitanja.length; i++) {
        let pitanje = pitanja[i]

        let odgovori = pitanje.querySelectorAll('input[type="radio"]');
        odgovori.forEach(odg =>(odg.disabled = true));

        let indeksTO = pitanje.dataset.indeksTO;

        let tacno = false;
        for(let odgovor of odgovori) {
            if(odgovor.checked && odgovor.value == parseInt(indeksTO)) {
                tacno = true;
            }
        }

        let spanOdgovor = document.createElement('span');

        if(!tacno) {
            spanOdgovor.innerText = `Niste tačno odgovorili na ${i + 1}. pitanje.`;
            spanOdgovor.style.color = "red";
        }
        else {
            spanOdgovor.innerText = `Tačno ste odgovorili na ${i + 1}. pitanje.`;
            spanOdgovor.style.color = "green";
        }
        document.body.appendChild(spanOdgovor);
    }
});
