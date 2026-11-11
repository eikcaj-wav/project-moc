var P = [
  {
    n: "Bookmark Gỗ Chữ",
    c: "Bookmark",
    p: "35.000đ",
    d: "Bookmark giấy kraft in câu thơ Truyện Kiều, ép nhũ nâu.",
    g: ["#4a5d4a", "#2f3f33"],
    t: "Kiều",
    img: "images/products/bookmark-go-chu.jpg",
  },
  {
    n: "Bookmark Mộc Xanh",
    c: "Bookmark",
    p: "39.000đ",
    d: "Bộ 3 bookmark họa tiết lá, kèm sợi dây vải.",
    g: ["#6f7d5c", "#4a5d4a"],
    t: "Lá",
    img: "images/products/bookmark-moc-xanh.jpg",
  },
  {
    n: "Poster Thân Em",
    c: "Poster",
    p: "180.000đ",
    d: "Poster A3 từ “Bánh trôi nước”, thiết kế typography tối giản.",
    g: ["#8a6a4a", "#5e4631"],
    t: "Em",
    img: "images/products/poster-than-em.jpg",
  },
  {
    n: "Poster Trăm Năm",
    c: "Poster",
    p: "220.000đ",
    d: "Poster A2 chữ viết tay, giấy mỹ thuật 250gsm.",
    g: ["#2f3f33", "#16201a"],
    t: "Năm",
    img: "images/products/poster-tram-nam.jpg",
  },
  {
    n: "Journal Mộc",
    c: "Journal",
    p: "165.000đ",
    d: "Sổ bìa vải xanh rêu, 120 trang giấy kem, chỉ khâu thủ công.",
    g: ["#4a5d4a", "#8a6a4a"],
    t: "Sổ",
    img: "images/products/journal-moc.jpg",
  },
  {
    n: "Journal Đọc Chậm",
    c: "Journal",
    p: "185.000đ",
    d: "Sổ ghi chép đọc sách với khung cảm nhận và trích dẫn.",
    g: ["#8a6a4a", "#4a5d4a"],
    t: "Đọc",
    img: "images/products/journal-doc-cham.jpg",
  },
  {
    n: "Set Quà Văn Chương",
    c: "Quà tặng",
    p: "350.000đ",
    d: "Hộp gỗ gồm journal, 3 bookmark và một tấm thiệp.",
    g: ["#5e4631", "#2f3f33"],
    t: "Quà",
    img: "images/products/set-qua-tang.jpg",
  },
];
var cat = "Tất cả",
  cart = 0;
function card(x, i) {
  return (
    '<div class="card"><div class="ph" style="background:linear-gradient(150deg,' +
    x.g[0] +
    "," +
    x.g[1] +
    ')">' +
    (x.img
      ? '<img src="' + x.img + '" alt="' + x.n + '" onerror="this.remove()">'
      : x.t) +
    "</div><h3>" +
    x.n +
    "</h3><p>" +
    x.d +
    '</p><div class="row"><span class="price">' +
    x.p +
    '</span><button class="mini" onclick="order(' +
    i +
    ')">Đặt hàng</button></div></div>'
  );
}
function order(i) {
  cart++;
  document.getElementById("cnt").textContent = "(" + cart + ")";
  toast("Đã thêm “" + P[i].n + "” (mô phỏng)");
}
function toast(m) {
  var t = document.getElementById("toast");
  t.textContent = m;
  t.className = "on";
  setTimeout(function () {
    t.className = "";
  }, 2200);
}
function shop() {
  var cs = ["Tất cả", "Bookmark", "Poster", "Journal", "Quà tặng"];
  document.getElementById("tabs").innerHTML = cs
    .map(function (c) {
      return (
        '<button class="' +
        (c == cat ? "on" : "") +
        '" onclick="cat=\'' +
        c +
        "';shop()\">" +
        c +
        "</button>"
      );
    })
    .join("");
  document.getElementById("list").innerHTML = P.map(function (x, i) {
    return cat == "Tất cả" || x.c == cat ? card(x, i) : "";
  }).join("");
  reveal();
}
document.getElementById("feat").innerHTML = [2, 4, 0]
  .map(function (i) {
    return card(P[i], i);
  })
  .join("");
var A = [
  {
    n: "Nguyễn Du",
    img: "images/nguyen-du.jpg",
    y: "1766–1820",
    w: "Truyện Kiều",
    d: "Đại thi hào dân tộc, tác giả truyện thơ Nôm 3.254 câu lục bát về kiếp người tài hoa bạc mệnh.",
  },
  {
    n: "Hồ Xuân Hương",
    img: "images/ho-xuan-huong.png",
    y: "cuối thế kỷ XVIII – đầu XIX",
    w: "Thơ Nôm",
    d: "“Bà chúa thơ Nôm” với giọng thơ sắc sảo, tự tin về thân phận và vẻ đẹp người phụ nữ.",
  },
  {
    n: "Nguyễn Tuân",
    img: "images/nguyen-tuan.jpg",
    y: "1910–1987",
    w: "Vang bóng một thời",
    d: "Bậc thầy tùy bút, trân trọng cái đẹp xưa trong những thú chơi tao nhã.",
  },
  {
    n: "Xuân Quỳnh",
    img: "images/xuan-quynh.jpg",
    y: "1942–1988",
    w: "Thuyền và biển · Sóng · Tự hát",
    d: "Nữ thi sĩ của tình yêu và hạnh phúc đời thường. Thơ bà vừa dịu dàng, vừa mãnh liệt, thể hiện khát vọng yêu thương chân thành và nỗi lo âu rất người trước sự mong manh của hạnh phúc.",
  },
  {
    n: "Tố Hữu",
    img: "images/to-huu.jpg",
    y: "1920–2002",
    w: "Từ ấy · Việt Bắc · Gió lộng",
    d: "Lá cờ đầu của thơ ca cách mạng Việt Nam. Thơ ông giàu chất trữ tình chính trị, mang âm hưởng ca dao, dân ca và nhịp điệu lục bát quen thuộc của người Việt.",
  },
  {
    n: "Trần Đăng Khoa",
    img: "images/tran-dang-khoa.jpg",
    y: "sinh năm 1958",
    w: "Góc sân và khoảng trời",
    d: "“Thần đồng thơ” nổi tiếng từ thuở nhỏ với những vần thơ trong trẻo về làng quê, cây cỏ và thiên nhiên, nhìn thế giới bằng đôi mắt tò mò và hồn nhiên.",
  },
];
var Q = [
  [
    "Trăm năm trong cõi người ta, chữ tài chữ mệnh khéo là ghét nhau.",
    "Nguyễn Du · Truyện Kiều",
  ],
  [
    "Thân em vừa trắng lại vừa tròn, bảy nổi ba chìm với nước non.",
    "Hồ Xuân Hương · Bánh trôi nước",
  ],
];
function au(k) {
  document.getElementById("atabs").innerHTML = A.map(function (a, i) {
    return (
      '<button class="' +
      (i == k ? "on" : "") +
      '" onclick="au(' +
      i +
      ')">' +
      a.n +
      "</button>"
    );
  }).join("");
  var a = A[k];
  document.getElementById("author").innerHTML =
    '<div class="ai"><div><p>' +
    a.n +
    "</p><span>" +
    a.y +
    " · " +
    a.w +
    '</span><div style="margin-top:14px;font-size:14px;color:var(--mute)">' +
    a.d +
    '</div></div><figure class="ap"><b>' +
    a.n.split(" ").pop().charAt(0) +
    "</b>" +
    (a.img
      ? '<img src="' + a.img + '" alt="' + a.n + '" onerror="this.remove()">'
      : "") +
    "</figure></div>";
  var e = document.getElementById("author");
  e.classList.remove("sw");
  void e.offsetWidth;
  e.classList.add("sw");
  reveal();
}
document.getElementById("quotes").innerHTML = Q.map(function (q) {
  return (
    '<div class="quote"><p>“' + q[0] + "”</p><span>" + q[1] + "</span></div>"
  );
}).join("");
shop();
au(0);
function route() {
  var h = (location.hash || "#home").slice(1);
  if (!document.getElementById(h) || h == "main") h = "home";
  document.querySelectorAll(".page").forEach(function (s) {
    s.classList.toggle("on", s.id == h);
  });
  document.querySelectorAll("nav a.l").forEach(function (a) {
    a.classList.toggle("on", a.dataset.p == h);
  });
  window.scrollTo(0, 0);
  reveal();
}
var io = new IntersectionObserver(
  function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
function reveal() {
  document
    .querySelectorAll(
      ".page.on .wrap>*,.page.on .card,.page.on .val,.page.on .quote,.page.on .tl>div",
    )
    .forEach(function (el, i) {
      if (el.classList.contains("rv")) return;
      el.classList.add("rv");
      if (i % 3 == 1) el.classList.add("dn");
      io.observe(el);
    });
}
function go() {
  var c = document.querySelector(".page.on");
  if (c) {
    c.classList.add("out");
    setTimeout(function () {
      c.classList.remove("out");
      route();
    }, 250);
  } else route();
}
addEventListener("hashchange", go);
route();
