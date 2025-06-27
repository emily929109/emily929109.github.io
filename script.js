//點擊導覽列下拉選單
$('.nav-bar_link').on('click', function(){
    $('.nav-bar_dropdown-menu').toggle();
    $('.nav-bar-mask').toggle();
})

//點擊漢堡線
$('.nav-bar_toggle').on('click', function(){
     $('.nav-bar_menu').toggleClass('expand');
     $(this).toggleClass('active'); // 若要把 expand 加在 this 自己
})




//banner輪播切片特效
//1. 切成幾份
let n = 5 ; 
//2. 每片寬度%
let unit_width = 20 
let $img = $('.slide-img');

for (let i = 0; i < n; i++){

    // 建立每塊的 div 的樣式
    let $div = $('<div></div>')
     .addClass('slice-div')
     .css({
        width: unit_width + "%",
        left: (i * unit_width) + '%',
        top: '-100%'  /* 初始在上方 */
      });

    // 取得圖片
    let $imgClone=$img.clone();

    // 建立每塊img的樣式
    $imgClone.css({
        width: (n*100) +"%" ,
        left: (-i * 100) + "%"
    });

    $div.append($imgClone);
    $('.slide').append($div);

    //下滑移動特效
    //   $div
    //   .delay(i * 200)            // 第 i 片延遲 i*200ms 再執行
    //   .css(
    //     { top: '0%' }           // 動畫目標：top: 0
    //   );

      setTimeout(() => {
  $div.css('top', '0%');
}, i * 200);
    

}

$img.remove()