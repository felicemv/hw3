$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "Current Forecast:  " + data.currently.summary
    var temp = "Current Temp:  " + data.currently.apparentTemperature
    var daily1 = "Tomorrow Forecast:  " + data.daily.data[1].summary +    "      Temp Max " + data.daily.data[1].apparentTemperatureMax
    var daily2 = "2 Day Forecast:  " + data.daily.data[2].summary +    "       Temp Max " + data.daily.data[2].apparentTemperatureMax
    var daily3 = "3 Day Forecast:  " + data.daily.data[3].summary +    "       Temp Max " + data.daily.data[3].apparentTemperatureMax
    // End of your code

    $('.weather-report').html(markup);
    $('.weather-report2').html(temp);
    $('.weather-report3').html(daily1);
    $('.weather-report4').html(daily2);
    $('.weather-report5').html(daily3);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
