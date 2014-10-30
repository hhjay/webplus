$(document).ready(function(){
    $.ajax({
        url: 'http://newborn2013.stuzone.com/huanghuijie/xinxigongkai/yaowen.php',
        type: 'GET',
        dataType: 'jsonp',
        callback: 'callback',
        success: function(yaowen) {
            var $list = "";
            // var yaowenEnd = "";
            // var $str = "";
            for(var href in yaowen) {  
                $time = yaowen[href].substr(yaowen[href].length-10,10); 
                yaowen[href] = yaowen[href].substr(0,yaowen[href].length-10);
                end = (yaowen[href].length >25) ? '' : '...';
                $str = yaowen[href].substr(0,25);
                $list += "<li><img class='list-img' src='http://www.scuec.edu.cn/page/main1121/img/icon_li.jpg'><div class='list-a'><a href='"+href+"'>" + $str + end + "</a></div><em>"+$time+"</em></li>";
                // $list = yaowen[href];
            } 
        	$(".new-list").html($list);
        },
        error: function(err) {
            console.log('err');
        }
    });
    $.ajax({
        url: 'http://newborn2013.stuzone.com/huanghuijie/xinxigongkai/gonggao.php',
        type: 'GET',
        dataType: 'jsonp',
        callback: 'callback',
        success: function(gonggao) {
            var $list = "";
            var end = '';
            for(var href in gonggao) {                  
                end = (gonggao[href].length >18) ? '' : '';
                gonggao[href] = gonggao[href].substr(0,18);
                $list += "<li><a href='"+href+"'>" + gonggao[href] + end + "</a></li>";
            } 
            $(".message-list").html($list);
        },
        error: function(err) {
            console.log('err');
        }
    });
    $.ajax({
        url: 'http://newborn2013.stuzone.com/huanghuijie/xinxigongkai/zxgkxx.php',
        type: 'GET',
        dataType: 'jsonp',
        callback: 'callback',
        success: function(xinxi) {
            var $list = "";
            var end = '';
            for(var href in xinxi) {  
                $time =  xinxi[href].substr(xinxi[href].length-10,10);
                xinxi[href] = xinxi[href].substr(0,xinxi[href].length-10);
                end = (xinxi[href].length >18) ? '...' : '';
                xinxi[href] = xinxi[href].substr(0,18);
                $list += "<li><img class='list-img' src='http://www.scuec.edu.cn/page/main1121/img/icon_li.jpg'><div class='list-b'><a href='"+href+"'>" + xinxi[href] + end + "</a></div><em>"+$time+"</em></li>";
            } 
            $(".account-list").html($list);
        },
        error: function(err) {
            console.log('err');
        }
    });
});   