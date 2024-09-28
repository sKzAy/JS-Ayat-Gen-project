const text = document.querySelector(".text")
const person = document.querySelector(".person")
let button = document.querySelector(".btn")


let quotes = [{
    text: "He created the heavens and earth in truth and formed you and perfected your forms; and to Him is the [final] destination",
    person: "[Quran 64:3]",
},
{
    text: "So verily, with the hardship, there is a relief. Verily, with the hardship, there is relief",
    person: "[Quran 94:5-6]",
},
{
    text: "And Allah would not punish them while they seek forgiveness",
    person: "[Quran 8:33]",
},
{
    text: "And whoever relies upon Allah – then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent",
    person: " [Quran 65:3]",
},
{
    text: "If Allah should aid you, no one can overcome you; but if He should forsake you, who is there that can aid you after Him? And upon Allah let the believers rely",
    person: "[Quran 3:160]",

},{text: "Call upon me, I will respond to you",
    person: "[Quran 40:60]",
},{
    text: "Do what is beautiful. Allah loves those who do what is beautiful",
    person: "[Quran 2:195]",
},{
    text: "Allah does not burden a soul beyond that it can bear",
    person: "[Quran 2:286]",
}]

 
function ChooseRandom(){
    let random = Math.floor(Math.random()* quotes.length)
    return random
}

button.addEventListener("click",()=>{
    let num = ChooseRandom()
    text.innerHTML = quotes[num].text
    person.innerHTML = quotes[num].person
})


