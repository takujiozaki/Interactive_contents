//配列からSELECT BOXを作成
$(document).ready(function(){
    courses.forEach(function(course){
        assert("ck", course);
        //$("#major").append("<option value=\""+course+"\">"+course+"</option>");
        $("#major").append($("<option>").text(course).val(course));
    });
});

//チェック関数
const assert = function(msg, val){
    console.log(msg + ":" + val);
}

const courses = ["Web専攻","イラスト専攻","グラフィック専攻"];