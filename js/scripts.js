$(function() {
  $("#submit").click(function(event) {
    var terrain = $("#terrain").val().toLowerCase();
    var plumage = $("#plumage").val().toLowerCase();;

    $(".results").hide();

    if(terrain === "land") {
      if(plumage === "feathers") {
        $("#elwetritsch").show();
      } else if(plumage === "scales") {
        $("#zhulong").show();
      } else if(plumage === "hair") {
        $("#centaur").show();
      }
    } else if(terrain === "sea") {
      if(plumage === "feathers") {
        $("#siren").show();
      } else if(plumage === "scales") {
        $("#loch-ness").show();
      } else if(plumage === "hair") {
        $("#mermaid").show();
      }
    } else if(terrain === "air") {
      if(plumage === "feathers") {
        $("#griffon").show();
      } else if(plumage === "scales") {
        $("#dragon").show();
      } else if(plumage === "hair") {
        $("#harpy").show();
      }
    }
    event.preventDefault();
  });
});
