//時計を表示

$(document).ready(function(){
    getCurrent();
    setInterval(getCurrent,1000);
});

//テスト用の関数
function logTest(tex, val){
    console.log(tex + ':' + val);
}

//曜日配列
const weeks = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

//現在時間を取得
function getCurrent(){
    //現在の日時を取得
    const currentDate = new Date();

    //日付を取得
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    //const today = year + "年" + doubleDigit(month) + "月" + doubleDigit(date) + "日";
    const today = `${year}年${doubleDigit(month)}月${doubleDigit(date)}日`;//テンプレートリテラル

    //画面に表示
    $("#today").text(today);

    //曜日
    const wday = currentDate.getDay();
    $("#weekday").text(getWeekday(wday));

    //
    //時間を取得
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const now = doubleDigit(hour) + ":" + doubleDigit(minute) + ":" + doubleDigit(second);

    //画面に表示
    $("#now").text(now);
    
}

//表示を調整
function doubleDigit(val){
    return ("0" + val).slice(-2);
}

function getWeekday(n){
    const wday = weeks[n];
    //日曜日は文字を赤に

    if(n == 6 || n == 0){
        $("#weekday").addClass('text-danger');
    }else{
        $("#weekday").removeClass('text-danger');
    }
    return wday;
}