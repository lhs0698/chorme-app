const dateElement = document.getElementById("date"); // 요일
const timeElement = document.getElementById("time"); // 날짜

// 코드를 기능 별로 확인 할수 있게 함수를 생성한다.

// 10월 이전 달은 ex) 9월 -> 09월로 

const modifyNumber = (number) => {
    return parseInt(number)< 10 ? "0"+ number : number
    // 매개변수 number는 getNowDate에서 modifyNumber로 감싼 month, date 변수들의 값을 받는다 
};

// 현재 날짜
const getNowDate = () => {
    const nowDate = new Date();

    let week = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
    let month = modifyNumber(nowDate.getMonth() + 1);
    let date = modifyNumber(nowDate.getDate());
    let day = nowDate.getDay();

    setNowDate(month, date, week[day])
};

const setNowDate = (month, date, day) => {
    dateElement.textContent = `${month}월 ${date}일 ${day}`
}

// 현재 시간
const getNowTime = () => {
    const nowDate = new Date();
    let hour = modifyNumber(nowDate.getHours());
    let minute = modifyNumber(nowDate.getMinutes());

    setNowTime(hour, minute)
};

const setNowTime = (hour, minute) => {
    timeElement.textContent =  `${hour} : ${minute}`
}

getNowDate();
getNowTime();
setInterval(getNowTime,1000)