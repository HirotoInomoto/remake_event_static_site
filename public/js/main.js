// スクロールするとフェードインする
// 画面の大きさを取得
let screenHeight = window.screen.height;

// 要素を取得
let content1 = document.getElementById("content-1");
let content2 = document.getElementById("content-2");
let content3 = document.getElementById("content-3");
let content4 = document.getElementById("content-4");
let content5 = document.getElementById("content-5");

// 要素がどこにあるかを取得
let content1Height = content1.getBoundingClientRect().top;
let content2Height = content2.getBoundingClientRect().top;
let content3Height = content3.getBoundingClientRect().top;
let content4Height = content4.getBoundingClientRect().top;
let content5Height = content5.getBoundingClientRect().top;

// スクロールすると
window.addEventListener("scroll", () => {
    // スクロール量を取得
    // いい感じの場所で出現するように調整
    var scrollY = window.pageYOffset + screenHeight * 0.6;
    // スクロール量と要素の高さの比較
    if(scrollY > content1Height){
        // 透明度を1にすることで出現
        content1.style.opacity = 1;
    }
    if(scrollY > content2Height){
        content2.style.opacity = 1;
    }
    if(scrollY > content3Height){
        content3.style.opacity = 1;
    }
    if(scrollY > content4Height){
        content4.style.opacity = 1;
    }
    if(scrollY > content5Height){
        content5.style.opacity = 1;
    }
});

// クリックしたら動くコード
// ボタンを取得
let buttton = document.getElementById("button");

// クリックしたら
buttton.addEventListener("click", () => {
    // 画像のsrc属性が変わる
    document.getElementById("firstview__image").setAttribute("src", "https://thumb.photo-ac.com/d2/d2204e3c5e0e2ff78efea3dc0e43faff_t.jpeg");
    // 文字の色が変わる
    document.getElementById("firstview__title").style.color = "rgb(255, 0, 0)";
    // 文字が横から出現する
    document.getElementById("firstview__title").style.transform = "translateX(0)";
});