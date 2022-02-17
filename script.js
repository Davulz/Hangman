let htmlDiv = document.getElementById("app");

//Modell
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const words = ['hangman', 'snowboard', 'barteklamma', 'rickyboy', 'tolvogenhalv', 'fjellkjede', ]
const understrekkk = ['_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', ];
let understrekk = ['_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', ];
let activeWords = '';
let understrek = '';
let tall = '1';
let funk = '';


//View
Show()

function Show() {
    let alfabet = ''
    understrek = ''


    for (let i = 0; i < alphabet.length; i++) {
        alfabet += /*html*/
            `<div class='Bokstaver' onclick='check(this.innerHTML)'>${alphabet[i]}</div>`
    }
    for (let j = 0; j < activeWords.length; j++) {
        understrek += /*html*/
            `<h1 class='understreker'>${understrekk[j]}</h1>`;

    }


    let html = /*html*/ `
    <div class="wrapper">
        <h1>Hangman</h1>
        <button onclick='newWord()'>New Word</button>
        <div class="alfabet">${alfabet}</div>
        <div>${understrek}</div>
        <img class="hangman" src='hang${tall}.png'><img>
        
        

        <!--End of wrapper-->
        </div>
        `





    htmlDiv.innerHTML = html;
}

//Controller

function newWord() {
    understrek = '';
    tall = '1';
    funk = 'on';

    let randomWord = randomNumber()
    activeWords = randomWord
    understrekk = understrekkk.slice(0, activeWords.length);
    console.log(activeWords, understrek)
    Show()
}

function randomNumber() {
    let rNumber = Math.floor(Math.random() * words.length)
    let rWord = words[rNumber]
    return rWord;

}

function check(ting) {
    ting.className += "trykket"
    if (funk == 'on') {

        if (activeWords.includes(ting)) {
            for (let i = 0; i < activeWords.length; i++) {
                if (ting == activeWords[i]) {
                    understrekk[i] = ting;
                    if (activeWords == understrekk.join('')) {
                        alert("You win");
                        funk = 'off';
                    }
                }

            }
        } else {
            tall++
            if (tall == '8') {
                alert("you lose");
                funk = 'off';
            }
        }
        Show()
    } else return;
}