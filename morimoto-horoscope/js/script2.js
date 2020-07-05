//チェック関数
function assert(msg,val){
	console.log(msg+":"+val);
}

$.getJSON('data.json',function(data){
            //日時を取得
            const currentdate = Object.keys(data.horoscope)[0];
            //日付を表示
            $('#currentDay').html(`<p class="h4">${currentdate}</p>`);
	
	const horoscopeArr = data.horoscope[currentdate];
            horoscopeArr.forEach(function(horoscope){
	
	    $(`#seiza-img-${getImageName(horoscope.sign)}`).append(`<img src="images/${getImageName(horoscope.sign)}.png" class="card-img-top" alt="...">`);
				
							
	    $(`#card-body-${getImageName(horoscope.sign)}`).append(`<h3 class="card-title text-center">${horoscope.sign}</h3><p class="card-text text-center">${getTerm(horoscope.sign)}</p>`);
	
        //btnの星座名をIDに追加します。			
        $(`#footer1-${getImageName(horoscope.sign)}`).append(`<button class="btn btn-outline-info btn-sm ${getImageName(horoscope.sign)}" id="${getImageName(horoscope.sign)}-btn" rel="tooltip" title="">click</button>`);

        $(`#header-${getImageName(horoscope.sign)}`).append(`<h4 class="card-title text-center">${horoscope.sign}</h4>`);
    
        $(`#main-${getImageName(horoscope.sign)}`).append(`<h5 class="text-center">Today's fortune</h5>
                            <p class="text-center">${horoscope.content}</p>
                            <div class="lucky-container　text-center">
                            <h5 class="lucky text-center">Lucky iteme</h5>
                            <p class="text-center">${horoscope.item}</p>
                            <h5 class="lucky text-center">Lucky color</h5>
                            <p class="text-center">${horoscope.color}</p>`);
        //btnの星座名をIDに追加します。
        $(`#footer2-${getImageName(horoscope.sign)}`).append(`<button class="btn btn-outline-secondary btn-sm ${getImageName(horoscope.sign)}" id="${getImageName(horoscope.sign)}-btn" rel="tooltip" title="">back</button>`);
    });

    $('button').on('click', function() {
        //btnのIDを取りに行きます
        //idが重複するのでボタン側には「星座-btn」で指定。
        //split関数で「-」で分割して配列にしています。
        const btnid = $(this).attr('id').split('-');;
        //console.log(btnid[0]);
        //回転するカードをIDで直接指定します。
        $(`#${btnid[0]}`).toggleClass('is-surface').toggleClass('is-reverse');
    });
});	


//データ
const horoscopeData = [
    {sign:'牡羊座', scope:'aries',term:'3/21〜4/19'},
    {sign:'牡牛座', scope:'taurus', term:'4/20〜5/20'},
    {sign:'双子座', scope:'gemini', term:'5/21〜6/21'},
    {sign:'蟹座', scope:'cancer', term:'6/22〜7/22'},
    {sign:'獅子座', scope:'leo', term:'7/23〜8/22'},
    {sign:'乙女座', scope:'virgo', term:'8/23〜9/22'},
    {sign:'天秤座', scope:'libra', term:'9/23〜10/23'},
    {sign:'蠍座', scope:'scorpio', term:'10/24〜11/22'},
    {sign:'射手座', scope:'sagittarus', term:'11/23〜12/21'},
    {sign:'山羊座', scope:'capricorn', term:'12/22〜1/19'},
    {sign:'水瓶座', scope:'aquarius', term:'1/20〜2/18'},
    {sign:'魚座', scope:'pisces', term:'2/19〜3/20'}
];
function getImageName(sign){
    let imageName = "";
    horoscopeData.forEach(function(data){
        if(data.sign == sign){
            //console.log(data.sign)
            imageName = data.scope;
        }
    });
    return imageName;
}

function getTerm(sign){
    let term = "";
    horoscopeData.forEach(function(data){
        if(data.sign == sign){
            //console.log(data.sign)
            term = data.term;
        }
    });
    return term;
}
