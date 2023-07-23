const API_URL = "https://random-quote.hyobb.com/";
const quoteElement = document.getElementById("quote");
const quoteItem = localStorage.getItem("quote");

// const nowDate = new Date();
// const month = nowDate.getMonth() + 1;
// const date = nowDate.getDate();

const setQuote = (result) => {
//   let quote = { createDate: `${month}-${date}`, quoteData: result };
//   localStorage.setItem("quote",JSON.stringify(quote))
  quoteElement.textContent = result;
};

const getQuote = async () => {
  try {
    const data = await fetch(API_URL).then((res) => res.json());
    const result = data[1].respond;
    setQuote(result);
  } catch (e) {
    console.log(`error:${e}`);
    setQuote("에러다");
  }
};

// if(quoteItem) {
//     let { createDate, quoteData } = JSON.parse(quoteItem);
//     if( createDate === `${month}-${date}`) {
//         quoteElement.textContent = `${quoteData}s`
//     } else {
//         getQuote();
//     }
// } else {
//     getQuote();
// }


getQuote();
