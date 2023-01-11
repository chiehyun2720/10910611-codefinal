//商品append到cart
$("#F-16v_add").click(function () {
  changeTotal();
  var temp =
    '<article class="product"><header><a class="remove"><img src="./img/F-16V戰鬥機.png"alt=""/><h3>刪&ensp;除</h3></a></header><div class="content"><h1>F-16V戰鬥機</h1>自民國107年起，本軍F-16V block 20戰機升級為F-16V戰機，全面提升機身結構、航電、偵蒐集武裝性能，強化匿蹤性、遠距偵查及視距外作戰能力，是您必須擁有的戰鬥機。</div><footer class="content"><span class="qt-minus">-</span><span class="qt">1</span><span class="qt-plus">+</span><h2 class="full-price">659999元</h2><h2 class="price">659999元</h2></footer></article>';
  $(".container").append(temp); //       這裡有改 ^
});
$("#P-3c_add").click(function () {
  changeTotal();
  var temp =
    '<article class="product"><header><a class="remove"><img src="./img/P-3C型機.png"alt=""/><h3>刪&ensp;除</h3></a></header><div class="content"><h1>P-3C型機</h1>美國洛克希德公司生產海上巡邏機，已被世界許多國家所採用，主要用途是作為海上巡邏和偵察與反潛作戰。因美方長期拒絕維修，到二○二五年，我國將僅有一架可升空。</div><footer class="content"><span class="qt-minus">-</span><span class="qt">1</span><span class="qt-plus">+</span><h2 class="full-price">7599999元</h2><h2 class="price">7599999元</h2></footer></article>';
  $(".container").append(temp);
});
$("#AGM-88_add").click(function () {
  changeTotal();
  var temp =
    '<article class="product"><header><a class="remove"><img src="./img/AGM-88反輻射導彈.png"alt=""/><h3>刪&ensp;除</h3></a></header><div class="content"><h1>AGM-88反輻射導彈</h1>美國現役的空對地反輻射飛彈，空軍的AGM-88反輻射導彈原應明年交付，但現在已經來了。空軍參謀長不方便多說，但偷偷透露我們買的「比美軍現役還要好一點」。</div><footer class="content"><span class="qt-minus">-</span><span class="qt">1</span><span class="qt-plus">+</span><h2 class="full-price">889999元</h2><h2 class="price">889999元</h2></footer></article>';
  $(".container").append(temp);
});
$("#M109A6_add").click(function () {
  changeTotal();
  var temp =
    '<article class="product"><header><a class="remove"><img src="./img/M109A6自走砲.png"alt=""/><h3>刪&ensp;除</h3></a></header><div class="content"><h1>M109A6自走砲</h1>拜登政府首項對台軍售案「M109A6自走砲」曾被視為挺台灣的指標，但日前美國國務院已通知我蔡英文政府喊停；，本案因產線排擠，美方告知最快於2026年後方可交運。</div><footer class="content"><span class="qt-minus">-</span><span class="qt">1</span><span class="qt-plus">+</span><h2 class="full-price">8799999元</h2><h2 class="price">8799999元</h2></footer></article>';
  $(".container").append(temp);
});
$("#AIM-9_add").click(function () {
  changeTotal();
  var temp =
    '<article class="product"><header><a class="remove"><img src="./img/AIM-9響尾蛇飛彈.png"alt=""/><h3>刪&ensp;除</h3></a></header><div class="content"><h1>AIM-9響尾蛇飛彈</h1>美國三軍AIM-9響尾蛇空對空飛彈是第一款以紅外線作為導引設計，也是第一款有擊落目標記錄的空對空飛彈。它在1956年配備至美國海軍，是一款歷經考驗的空用武器。</div><footer class="content"><span class="qt-minus">-</span><span class="qt">1</span><span class="qt-plus">+</span><h2 class="full-price">10299999元</h2><h2 class="price">10299999元</h2></footer></article>';
  $(".container").append(temp);
});
$("#M88A2_add").click(function () {
  changeTotal();
  var temp =
    '<article class="product"><header><a class="remove"><img src="./img/M88A2裝甲救濟車.png"alt=""/><h3>刪&ensp;除</h3></a></header><div class="content"><h1>M88A2裝甲救濟車</h1>M88裝甲救濟車是由美國BAE公司自1960年開始生產，係利用M48戰車的承載系統、動力系統等，裝在重新設計的車身而成，目標是拖救大部分的美軍戰甲車輛。</div><footer class="content"><span class="qt-minus">-</span><span class="qt">1</span><span class="qt-plus">+</span><h2 class="full-price">10299999元</h2><h2 class="price">10299999元</h2></footer></article>';
  $(".container").append(temp);
});

var check = false;
function changeVal(el) {
  var qt = parseFloat(el.parent().children(".qt").html());
  var price = parseFloat(el.parent().children(".price").html());
  var eq = Math.round(price * qt * 100) / 100;

  el.parent()
    .children(".full-price")
    .html(eq + "元");

  changeTotal();
}

function changeTotal() {
  var price = 0;

  $(".full-price").each(function (index) {
    price += parseFloat($(".full-price").eq(index).html());
    console.log(typeof $(".full-price").eq(index).html());
    console.log(parseFloat($(".full-price").eq(index).html()));
    console.log(price);
  });

  price = Math.round(price * 100) / 100;
  var tax = Math.round(price * 0.05 * 100) / 100;
  var shipping = parseFloat($(".shipping span").html());
  var fullPrice = Math.round((price + tax + shipping) * 100) / 100;

  if (price == 0) {
    fullPrice = 0;
  }

  $(".subtotal span").html(price);
  $(".tax span").html(tax);
  $(".total span").html(fullPrice);

  console.log(price);
  console.log(tax);
  console.log(fullPrice);
}

$(document).ready(function () {
  $(document).on("click", ".remove", function () {
    var el = $(this);
    console.log(el);
    el.parent().parent().addClass("removed");
    window.setTimeout(function () {
      el.parent()
        .parent()
        .slideUp("fast", function () {
          el.parent().parent().remove();
          console.log(check);
          console.log($(".container").length);
          if ($(".container").length == 1) {
            if (check) {
              $(".container").html(
                '<div style="width:400px;margin:auto;"><h1 style="text-align:center;margin-top:60px;margin-bottom:40px;font-size:14pt;font-weight:600;color:rgba(21, 49, 98, 1);">軍事武器已準備往目的地出發，請您做好準備!</h1><img src="./img/countdown.gif" style="width:400px;"></div><div style="width:80px;margin:auto;"><button class="confirm" style="width:80px;height:30px;margin-top:40px;background-color:rgba(21, 49, 98, 1);color:#ffffff;border: 0px;">確認</button><div>'
              );
              $(".clearfix").hide();
            } else {
            }
          }
          changeTotal();
        });
    }, 200);
  });

  $(document).on("click", ".qt-plus", function () {
    console.log("plus clicked.");
    $(this)
      .parent()
      .children(".qt")
      .html(parseInt($(this).parent().children(".qt").html()) + 1);

    $(this).parent().children(".full-price").addClass("added");

    var el = $(this);
    window.setTimeout(function () {
      el.parent().children(".full-price").removeClass("added");
      changeVal(el);
    }, 150);
  });

  $(document).on("click", ".qt-minus", function () {
    console.log("minus clicked.");
    child = $(this).parent().children(".qt");

    if (parseInt(child.html()) > 1) {
      child.html(parseInt(child.html()) - 1);
    }

    $(this).parent().children(".full-price").addClass("minused");

    var el = $(this);
    window.setTimeout(function () {
      el.parent().children(".full-price").removeClass("minused");
      changeVal(el);
    }, 150);
  });

  window.setTimeout(function () {
    $(".is-open").removeClass("is-open");
  }, 1200);

  $(".btn").on("click", function () {
    check = true;
    $(".remove").click();
  });
  $(document).on("click", ".confirm", function () {
    parent.window.history.go(0);
  });
});
