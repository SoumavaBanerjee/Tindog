console.log("Connected");

$(".input-btn-ajax").click(function () {
  $(".input-field").remove();
  $(".input-btn-ajax").addClass("btn-rmv");
  $(".input-btn-ajax").text("Thanks for Subscribing!");
  console.log(
    "MailChimp configuration has been removed as implementing it with ajax would have exposed my API key (And I don't want to deploy this thing to heroku for such a small task). If you checked the console/ my github code, Congrats!"
  );
});
