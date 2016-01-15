$(document).ready(function() {
  $("form#questions").submit(function(event) {

      $(".destination").children("div").hide();

      var passport = $('input[name=passport]:checked').val();
      var landscape = $('input[name=landscape]:checked').val();
      var priority = $('input[name=priority]:checked').val();
      var climate = $('input[name=climate]:checked').val();
      var activities = $('input[name=activities]:checked').val();

      if (passport === "international") {
        if (landscape === "beach") {
          if (priority === "food") {
            if (climate === "warm") {
                $("#vietnam").show();
              } else if (climate === "cool") {
                  if (activities === "water") {
                  $("#scotland").show();
                } else {
                  $("#newzealand").show();
                }
              }
            } else if (priority === "adventure") {
              if (climate === "warm") {
                if (activities === "water") {
                  $("#vietnam").show();
                } else {
                  $("#nicaragua").show();
                }
              } else {
                if (activities === "water") {
                  $("#newzealand").show();
                } else {
                  $("#iceland").show();
                }
                }
              } else if (priority === "relaxing") {
                if (climate === "warm") {
                  if (activities === "water") {
                    $("#nicaragua").show();
                  } else {
                    $("#vietnam").show();
                  }
                } else {
                  if (activities === "water") {
                    $("#newzealand").show();
                  } else {
                    $("#iceland").show();
                  }
                }
              }
            } else {
              if (landscape === "mountains") {
                if (priority === "food") {
                  if (climate === "warm") {
                    if (activities === "water") {
                      $("#nicaragua").show();
                    } else {
                      $("vietnam").show();
                    }
                  } else {
                    $("#iceland").show();
                  }
                } else {
                  if (priority === "adventure") {
                    if (climate === "warm") {
                      if (activities === "water") {
                        $("#nicaragua").show();
                      } else {
                        $("vietnam").show();
                      }
                    } else {
                      if (climate === "cool") {
                        if (activities === "water") {
                          $("#scotland").show();
                        } else {
                          $("#iceland").show();
                          }
                        }
                      }
                    }
                  } else {
                    if (priority === "relaxing") {
                      if (climate === "warm") {
                        if (activities === "water") {
                          $("#nicaragua").show();
                        } else {
                          $("#vietnam").show();
                        }
                      } else {
                        if (activities === "water") {
                          $("#newzealand").show();
                        } else {
                          $("#iceland").show();
                        }
                      }
                    }
                  }
                }
              }
            }
          });


  event.preventDefault();
});
