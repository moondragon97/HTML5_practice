const quotes = [
    {
        quotes: "용환이는 짱",
        author: "서댕이",
    },
    {
        quotes: "용환이는 최고",
        author: "성민이",
    },
    {
        quotes: "용환이는 천재",
        author: "성연이",
    },
    {
        quotes: "용환이는 미남",
        author: "희성이",
    },
    {
        quotes: "용환이는 굿잡",
        author: "인혁이",
    },
    {
        quotes: "용환이는 굿굿",
        author: "서연이",
    },
    {
        quotes: "용환이는 배고픔",
        author: "용환이",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = Math.floor(Math.random() * quotes.length);

function SetQuote(){
    quote.textContent = quotes[todaysQuote].quotes;
    author.textContent = quotes[todaysQuote].author;
}

SetQuote();