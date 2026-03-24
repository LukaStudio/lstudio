(function() {
  function handleFormSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var elements = form.elements;
    var data = {};

    // 1. Surenkame visus laukus
    for (var i = 0; i < elements.length; i++) {
      var item = elements.item(i);
      if (item.name) {
        data[item.name] = item.value;
      }
    }

    // 2. Rankiniu būdu paimame hCaptcha (jei ji yra)
    var hCaptchaRes = form.querySelector('[name="h-captcha-response"]');
    if (hCaptchaRes) {
      data["h-captcha-response"] = hCaptchaRes.value;
    }

    // 3. Patikriname, ar hCaptcha užpildyta (tikram vartotojui)
    if (hCaptchaRes && hCaptchaRes.value === "") {
      alert("Prašome pažymėti hCaptcha langelį.");
      return false;
    }

    // 4. Honeypot patikra (kliento pusėje)
    if (data.honeypot && data.honeypot !== "") {
      console.log("Spam bot detected");
      showSuccess(form);
      return false;
    }

    // Mygtukų užrakinimas
    var buttons = form.querySelectorAll("button");
    buttons.forEach(function(btn) { btn.disabled = true; });

    // 5. SIUNTIMAS
    var xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        showSuccess(form);
      }
    };

    var encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    
    xhr.send(encoded);
  }

  function showSuccess(form) {
    form.reset();
    var formElements = form.querySelector(".form-elements");
    if (formElements) formElements.style.display = "none";
    var thankYouMessage = form.querySelector(".thankyou_message");
    if (thankYouMessage) thankYouMessage.style.display = "block";
  }

  function loaded() {
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  }
  document.addEventListener("DOMContentLoaded", loaded, false);
})();