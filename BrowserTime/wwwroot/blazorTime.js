window.blazorTime = {};

window.blazorTime = {
  updateTag: function (htmlNode) {
    //get date from tag contents
    var utctimeval = htmlNode.attributes["data-blazor-time-observer"].value;
    var tagDate = new Date(utctimeval);

    //get format from tag
    var format = htmlNode.attributes["data-format"];
    var formatValue = null;
    if (format) {
      formatValue = format.value;
    }

    var timeZoneOffset = (tagDate.getTimezoneOffset() / 60) * -1;
    var offsetString = timeZoneOffset > 0 ? "+" + timeZoneOffset : timeZoneOffset;
    var isoDate = tagDate.getFullYear() + "-" +
      `${(tagDate.getMonth() + 1)}`.padStart(2, '0') + "-" +
      `${tagDate.getDate()}`.padStart(2, '0') + "T" +
      `${tagDate.getHours()}`.padStart(2, '0') + ":" +
      `${tagDate.getMinutes()}`.padStart(2, '0') + ":" +
      `${tagDate.getSeconds()}`.padStart(2, '0') +
      offsetString;
      
    //set contents of display tag
    if (formatValue) {
      DotNet.invokeMethodAsync('BlazorTime', 'BlazorDateFormat', isoDate, formatValue)
        .then(data => {
          htmlNode.innerHTML = data;
        });
    }
    else {
      DotNet.invokeMethodAsync('BlazorTime', 'BlazorDate', isoDate)
        .then(data => {
          htmlNode.innerHTML = data;
        });
    }
  },
  updateAllTags: function () {
    //convert existing display tags
    var timeTags = document.getElementsByClassName("blazor-time")
    for (var i = 0; i < timeTags.length; i++) {
      //get tag
      var currentTag = timeTags[i];
      this.updateTag(currentTag);
    }
  }
};
