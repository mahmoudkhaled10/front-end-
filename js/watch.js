  $(document).ready(function () {
    $(".replay").click(function () {
      $(this).parents("div.row").next("div.card-inner").toggle();
    });
  });

  (function read() {
    $("#myBtn").click(function () {
      var dots = $("#dots");
      var more = $("#more");
      var btnText = $("#myBtn");
      if (dots.css("display") === "none") {
        console.log("if")
        dots.css({ "display": "inline" });
        btnText.text("عرض المزيد");
        more.css({ "display": "none" });
      }
      else {
        console.log("else")
        dots.css({ "display": "none" });
        btnText.text("عرض عناصر أقل");
        more.css({ "display": "inline" });
      }
    });
  }());

