$(function() {
    $("#nozo").on("click", function() {
        var str = $("#yome").val();
        console.log(str);
        alert(str);
    });
    
    $("#prev_washi").on("click", function() {
        if (confirm("ワシワシしますか？")) {
            // $.ajax({
            //     url: "nozomi/washiwashi",
            //     type: "GET",
            //     data: {
            //         url: "http://cdn.mkimg.carview.co.jp/minkara/userstorage/000/007/307/117/ba10891b53.jpg"
            //             },
            //     dataType: "html",
            //     success: function(data) {
            //         alert("success");
            //         console.log(data);
            //     },
            //     error: function(data) {
            //         alert("errror");
            //         console.log(data);
            //     }
            // });
            $("#prev_washi").attr("src", "http://cdn.mkimg.carview.co.jp/minkara/userstorage/000/007/307/117/ba10891b53.jpg");
        }
    });

    $("#omikuji").on("click", function() {
        var yome = $("#yome").val();
        if (yome == "希"
            || yome == "のぞみ"
            || yome == "東條希"
            || yome == "のんたん"
            || yome == "ノンタン") {
                if (confirm("あなたは新の\"" + yome + "\"推しだ！！")) {
                    location.href = "http://www.lovelive-anime.jp/member/member07.html"
                }
        } else {
            alert("お前は何もわかっていない");
        }
    });
});
