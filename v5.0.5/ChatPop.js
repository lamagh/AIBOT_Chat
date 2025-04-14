var i = 0;
var txt = "I am a GPT powered AI bot. How can i help you today?";
var speed = 1;
var id = "";
var prmptOld = "";
var newChat = true;
var state = "chatConversation";
var cookieCheckId = undefined;
var height = "30px";
var error = "";

var _URL = "https://aicbapis.aiducator.ae";
var ImageURL = "https://botfeserv.aiducator.ae";

var botColor = "";
var botBackgroundColor = "";
var botChatColor = "";
var botIcon = "";
var botChatColor = "";
var botName = "";
var userChatColor = "";
var welcomeMessage = "";
var buttonColor = "";
var placeHolder = "";

var backgroundColor = "";
var botIcon = "";

function getBotBranding() {
  $.ajax({
    url: `${_URL}/api/ChatBot/GetBotBranding/${key}/${botId}`,
    type: "GET",
    contentType: "application/json; charset=utf-8",
    retries: 2,
    success: (data) => {
      console.log("data: ", data?.data);
      botBackgroundColor = data.botBackgroundColor;
      botIcon = data.botIcon;
      botChatColor = data.botChatColor;
      botName = data.botName;
      buttonColor = data.buttonColor;
      userChatColor = data.userChatColor;

      backgroundColor = data.botBackgroundColor;
      txt = data.welcomeMessage;

      welcomeMessage = data.welcomeMessage;
      $(".welcomeMessage").text(data.welcomeMessage);

      $(".botTitle").text(data.botName);

      $("#newmessage").attr("placeHolder", data.placeHolderText);
      $(".robotImage").attr("src", `data:image/jpeg;base64,${botIcon}`);
      $("#botSvg").attr("src", `data:image/jpeg;base64,${botIcon}`);
      $("#TermsAndCondition").text(data.termsAndConditions);
      $(".botButton").css("background-color", data.buttonColor);
      $(".chat-header").css("background-color", data.topBannerColor);
      $(".botButtonBackground").css("background-color", data.buttonColor);
      $(".chat-view").css("background", backgroundColor);
      $(".chat-view").css("background", backgroundColor);
      $(".chat-content").css("background", backgroundColor);
      $(".main-container").css("background", backgroundColor);
      $("#botSvg").attr("src", `data:image/jpeg;base64,${botIcon}`);
      $(".botIcon").attr("src", `data:image/jpeg;base64,${botIcon}`);
      botIcon = `data:image/jpeg;base64,${botIcon}`;
      // $(".bot-icon-light-blue").css("background-color", buttonColor);
    },
    error: () => {},
  });
}

var handledCookie = false;

var decrypted = "";
// var ncid = "4hZ0qO1J11PRakfMTjw8lw2";

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

$(document).ready(function () {
  $("#botHTML").append(`<div class="toCopy botChat">
  <img
    class="chatIcon botIcon"
    src="${ImageURL}/assets/robot-icon.png"
  />
  <div class="chatWrapper">
    <div class="col-md-12 botTitle">AIDUCATOR</div>
    <div class="displayColumn">
      <div class="chatText welcomeMessage"></div>

      <img
        id="CopyThisAnwser"
        title="Copy Answer"
        class="copyPaste"
        src="${ImageURL}/assets/copyPaste.svg"
      />
    </div>
  </div>
</div>
<div class="toCopy botChatWaiting">
  <img
    class="chatIcon botIcon"
    src="${ImageURL}/assets/robot-icon.png"
  />
  <div class="chatWrapper">
    <div class="col-md-12 botTitle"></div>
    <div class="waitingText">
      Typing
      <img
        class="typingGif"
        src="${ImageURL}/assets/typingBlue.gif"
      />
    </div>
  </div>
</div>

<div class="toCopy chatQuestion">
  <div class="responseText"></div>
</div>

<div class="pingMessage">
  <img src="${ImageURL}/assets/Union.svg" />
  <div class="pingText">Ping me to chat!</div>
</div>
<div id="ChatIcon" class="aiIcon" state="closed">
  <img class="robot-image-sm mx-2 mt-4 robotImage" alt="robot" />
</div>

<div class="rightPanel" id="ChatPanel" style="display: none">
  <div class="innerPanel">
    <div class="chatHeader">
      <div class="botTitle ChatTitle col-10"></div>
      <button class="btn col-1" id="Minimize">
        <img src="${ImageURL}/assets/mimiz.svg" />
      </button>
      <button class="btn col-1" id="closeX">
        <img src="${ImageURL}/assets/closeX.svg" />
      </button>
    </div>
    <div class="chatBody" id="ChatBody">
      <div class="botChat">
        <img
          class="chatIcon botIcon"
          src="${ImageURL}/assets/robot-icon.png"
        />
        <div class="chatText welcomeMessage"></div>
      </div>
    </div>
    <div class="chatBottom">
      <input
        class="col-10 inputTextBox"
        id="inputTB"
        placeholder="Write a message ..."
      />

      <button class="btn col-2" id="sMesage">
        <img src="${ImageURL}/assets/send.svg" />
      </button>
    </div>
  </div>
</div>
`);

  function addlinks() {
    var link = document.createElement("link");
    link.href =
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
    link.rel = "stylesheet";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

    //
    var link2 = document.createElement("link");
    link2.href =
      "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
    link2.rel = "text/css";
    link2.crossOrigin = "anonymous";
    document.head.appendChild(link2);

    //
    var link3 = document.createElement("link");
    link3.href = "https://fonts.googleapis.com";
    link3.rel = "preconnect";
    link3.crossOrigin = "anonymous";
    document.head.appendChild(link3);

    var link4 = document.createElement("link");
    link4.href = "https://fonts.gstatic.com";
    link4.rel = "preconnect";
    link4.crossOrigin = "anonymous";
    document.head.appendChild(link4);
  }
  var scriptUrls = [
    "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js",
    "https://cdn.jsdelivr.net/npm/marked/marked.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
    "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js",
  ];

  function loadScript(url) {
    return $.getScript(url);
  }

  function loadScriptsInParallel() {
    var scriptPromises = scriptUrls.map(function (url) {
      return loadScript(url);
    });

    return $.when.apply($, scriptPromises);
  }

  function loadCSS(url) {
    return new Promise(function (resolve, reject) {
      var link = document.createElement("link");
      link.href = url.link;
      link.rel = url.rel;
      link.type = url.type;

      link.onload = resolve;
      link.onerror = reject;

      document.head.appendChild(link);
    });
  }

  // Load CSS/Stylesheets from dynamically created link elements
  function loadStylesheetsFromDynamicallyCreatedLinks() {
    var cssUrls = [
      {
        link: "https://fonts.googleapis.com",
        rel: "preconnect",
        type: "text/css",
      },
      {
        link: "https://fonts.gstatic.com",
        rel: "preconnect",
        type: "text/css",
      },
      {
        link: "https://fonts.googleapis.com",
        rel: "preconnect",
        type: "text/css",
      },
      {
        link: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
        rel: "stylesheet",
        type: "text/css",
      },
      {
        link: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap",
        rel: "stylesheet",
        type: "text/css",
      },
      {
        link: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        type: "text/css",
      },
    ];

    var cssPromises = cssUrls.map(function (cssUrl) {
      return loadCSS(cssUrl);
    });

    return Promise.all(cssPromises);
  }

  function addScripts() {
    loadScriptsInParallel().then(function () {
      console.log("All scripts loaded in parallel.");
    });
  }

  $(function () {
    addScripts();

    loadStylesheetsFromDynamicallyCreatedLinks().then(function () {
      console.log(
        "All stylesheets loaded from dynamically created link elements."
      );
    });

    getBotBranding();
  });

  $(document).ready(function () {
    function ensureOffScreenInput() {
      let elem = document.querySelector("#__fake_input");
      if (!elem) {
        elem = document.createElement("input");
        elem.style.position = "fixed";
        elem.style.top = "0px";
        elem.style.opacity = "0.1";
        elem.style.width = "10px";
        elem.style.height = "10px";
        elem.style.transform = "translateX(-1000px)";
        elem.type = "text";
        elem.id = "__fake_input";
        document.body.appendChild(elem);
      }
      return elem;
    }

    function appendUserText(userText) {
      var chatQuestion = $(".chatQuestion.toCopy").clone();
      chatQuestion.removeClass("toCopy");
      chatQuestion.find(".responseText").text(userText);
      $("#ChatBody").append(chatQuestion);
    }

    function appendBotText(userText) {
      var chatQuestion = $(".botChat.toCopy").clone();
      chatQuestion.removeClass("toCopy");
      const htmlContent = marked.parse(userText);
      chatQuestion.find(".chatText").html(htmlContent);

      chatQuestion.find(".chatIcon").attr("src", botIcon);
      chatQuestion.find(".botTitle").text(botName);
      $("#ChatBody").append(chatQuestion);
    }

    function appendBotWaitingText() {
      var chatQuestion = $(".botChatWaiting.toCopy").clone();
      chatQuestion.removeClass("toCopy").addClass("botWait");
      $("#ChatBody").append(chatQuestion);
    }
    function removeBotWaitingText() {
      $(".botChatWaiting.botWait").remove();
    }

    $("#botHTML").on("keydown", "#inputTB", function (event) {
      var keycode = event.keyCode ? event.keyCode : event.which;
      if (keycode == 13 && $("#inputTB").val().length == 0) {
        event.preventDefault();
        return false;
      }
      if (keycode == 13) {
        textEntered();
      }
    });

    function replaceLinkWithA(matched) {
      let withProtocol = matched;

      if (!withProtocol.startsWith("http")) {
        withProtocol = "http://" + matched;
      }

      const newStr = `<a class="text-link" target="_blank"  href="${withProtocol}">${matched}</a>`;

      return newStr;
    }

    var ChatId = "00000000-0000-0000-0000-000000000000";

    const linkRegex =
      /(?:https?:\/\/)?(?:www\.)?(?!([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](?:\s?(?:am|pm)?))(?!([0-9]|0[0-9]|1[0-9]|2[0-3])\.[0-5][0-9])\S+\.\S+/g;
    var docRegex = /\[doc\d*\]/g;

    function modifyResponse(response) {
      // var mResponse = response.replace(linkRegex, replaceLinkWithA);
      var mResponse = response.replaceAll(docRegex, "");
      return mResponse;
    }

    function chatWithBot(incomingPrompt) {
      incomingPrompt = encodeURIComponent(incomingPrompt);
      $.ajax({
        url: `${_URL}/Azure/GuestChatWithData/${ChatId}/${projectID}/${incomingPrompt}?BotId=${botId}`,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: (data) => {
          removeBotWaitingText();

          appendBotText(modifyResponse(data.re));
          ChatId = data.newID;
          $("#ChatBody").scrollTop($("#ChatBody")[0].scrollHeight);
        },
        error: (error) => {
          removeBotWaitingText();
          appendBotText("Something went wrong. Please try again.");
        },
      });
    }

    function textEntered() {
      if ($("#inputTB").val().length == 0) {
        return;
      }
      var incomingPrompt = $("#inputTB").val();
      appendUserText(incomingPrompt);
      $("#inputTB").val("");
      appendBotWaitingText();
      $("#ChatBody").scrollTop($("#ChatBody")[0].scrollHeight);
      //contact Server
      chatWithBot(incomingPrompt);
    }
    $("#botHTML").on("click", "#sMesage", function () {
      textEntered();
    });
    $("#botHTML").on("click", "#closeX", function () {
      hideChatPanel();
    });
    $("#botHTML").on("click", "#Minimize", function () {
      minimizeChatPanel();
    });
    clearChat();
    function showChatPanel() {
      $("#ChatIcon").hide();
      $("#ChatPanel").show();
      $("#ChatIcon").attr("state", "open");
      document.documentElement.style.overflowY = "hidden";
    }

    function hideChatPanel() {
      $("#ChatIcon").show();
      $("#ChatPanel").hide();
      $("#ChatIcon").attr("state", "closed");
      document.documentElement.style.overflowY = "";

      clearChat();
    }

    function minimizeChatPanel() {
      $("#ChatIcon").show();
      $("#ChatPanel").hide();
      $("#ChatIcon").attr("state", "closed");
      document.documentElement.style.overflowY = "";
    }

    function clearChat() {
      ChatId = "00000000-0000-0000-0000-000000000000";
      $("#ChatBody").empty();
      appendBotText(txt);
    }

    function unsecuredCopyToClipboard(text) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Unable to copy to clipboard", err);
      }
      document.body.removeChild(textArea);
    }

    $("#botHTML").on("click", ".copyPaste", function () {
      var answer = $(this).parent().find(".chatText").text();

      unsecuredCopyToClipboard(answer);
    });

    $("#botHTML").on("click", "#ChatIcon", function () {
      if ($(this).attr("state") == "closed") {
        showChatPanel();
      } else {
        hideChatPanel();
      }
    });
  });
});
