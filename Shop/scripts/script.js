$(document).ready(function(){
    assert('動作テスト', 'OK');

    data.forEach(function(dounuts){
        const str = `<tr><td><img src="images/${dounuts.picture}" height="100"></td><td>${recommendStar(dounuts.recommend)}</td><td>${dounuts.item}</td><td>${dounuts.price}円 ${showLimited(dounuts.new)}</td></tr>`
        $('#showcase').append(str);
    })
});

const data = [
    {item:'リンゴジャム', price:120, picture:'01.jpg', recommend:5, new: true},
    {item:'シュガー', price:100, picture:'02.jpg', recommend:4, new: false},
    {item:'ファンシー', price:130, picture:'03.jpg', recommend:3, new: false}
];

const assert = function(msg, val){
    console.log(`${msg} : ${val}`);
}

const recommendStar = function(rank){
    let stars = "";
    for(let i = 0; i < rank; i++){
        stars += "★";
    }
    return `<span class="text-info">${stars}</span>`;
}

const showLimited = function(limited){
    let str = ""
    if(limited){   
        str = `<span class="badge badge-danger">新製品</span>`;
    }
    return str;
}