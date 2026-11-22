(function () {
  var lang = document.documentElement.lang === "en" ? "en" : "id";

  // Interactive 5-Photo Fleet Gallery
  var stageImg = document.getElementById("stage-img");
  var stageTitle = document.getElementById("stage-title");
  var stageMeta = document.getElementById("stage-meta");
  var stageCaption = document.getElementById("stage-caption");
  var thumbButtons = document.querySelectorAll(".thumb-btn");

  thumbButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      thumbButtons.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");

      if (stageImg) {
        stageImg.src = btn.getAttribute("data-src") || "";
        stageImg.style.objectPosition = btn.getAttribute("data-pos") || "50% 50%";
        var scale = btn.getAttribute("data-scale") || "1";
        stageImg.style.transform = scale !== "1" ? "scale(" + scale + ")" : "";
      }
      if (stageTitle) stageTitle.textContent = btn.getAttribute("data-title") || "";
      if (stageMeta) stageMeta.textContent = btn.getAttribute("data-meta") || "";
      if (stageCaption) stageCaption.textContent = btn.getAttribute("data-caption") || "";
    });
  });

  // Custom Route Form & Dual WhatsApp URL Generator
  var nameInput = document.getElementById("guest-name");
  var dateInput = document.getElementById("depart-date");
  var tripSelect = document.getElementById("trip-type");
  var paxInput = document.getElementById("pax-count");
  var pickupInput = document.getElementById("pickup-point");
  var routeInput = document.getElementById("custom-route-notes");
  var notesInput = document.getElementById("extra-notes");
  var previewEl = document.getElementById("wa-preview");
  var waLinks = document.querySelectorAll("[data-wa-number]");
  var chipButtons = document.querySelectorAll(".chip-btn");
  var selectedStops = [];

  function buildMessage() {
    var guest = (nameInput && nameInput.value.trim()) || (lang === "id" ? "(Belum diisi)" : "(Not specified)");
    var depart = (dateInput && dateInput.value) || (lang === "id" ? "Fleksibel" : "Flexible");
    var trip = (tripSelect && tripSelect.options[tripSelect.selectedIndex].text) || "";
    var pax = (paxInput && paxInput.value) || "6";
    var pickup = (pickupInput && pickupInput.value.trim()) || "Waisai Harbour";
    var freeRoute = (routeInput && routeInput.value.trim()) || "";
    var extra = (notesInput && notesInput.value.trim()) || "";

    var routeParts = [];
    if (selectedStops.length > 0) routeParts.push(selectedStops.join(", "));
    if (freeRoute) routeParts.push(freeRoute);
    var combinedRoute = routeParts.join(" — ") || (lang === "id" ? "Konsultasi rute kustom" : "Custom route inquiry");

    var lines;
    if (lang === "id") {
      lines = [
        "Halo Admin rajaampatspeedboat.com,",
        "Saya ingin menanyakan ketersediaan & estimasi harga sewa speedboat privat KM Tiga Putra Raja Ampat (Twin Suzuki 150 HP).",
        "",
        "• Nama: " + guest,
        "• Rencana Tanggal: " + depart,
        "• Jenis Perjalanan: " + trip,
        "• Jumlah Penumpang: " + pax + " orang (maks. 15)",
        "• Titik Jemput: " + pickup,
        "• Request Rute Kustom: " + combinedRoute
      ];
      if (extra) lines.push("• Catatan Tambahan: " + extra);
      lines.push("", "Mohon info estimasi biaya untuk rute tersebut. Terima kasih.");
    } else {
      lines = [
        "Hello rajaampatspeedboat.com team,",
        "I would like to check availability and request a quote for KM Tiga Putra Raja Ampat (Twin Suzuki 150 HP).",
        "",
        "• Name: " + guest,
        "• Preferred Date: " + depart,
        "• Charter Format: " + trip,
        "• Passengers: " + pax + " guests (max 15)",
        "• Pickup Point: " + pickup,
        "• Custom Route Request: " + combinedRoute
      ];
      if (extra) lines.push("• Additional Notes: " + extra);
      lines.push("", "Could you share the charter rate for this custom route? Thank you.");
    }

    var text = lines.join("\n");
    if (previewEl) previewEl.textContent = text;
    waLinks.forEach(function (link) {
      var num = link.getAttribute("data-wa-number");
      link.href = "https://wa.me/" + num + "?text=" + encodeURIComponent(text);
    });
  }

  chipButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var label = btn.getAttribute("data-stop") || "";
      var idx = selectedStops.indexOf(label);
      if (idx === -1) {
        selectedStops.push(label);
        btn.classList.add("active");
      } else {
        selectedStops.splice(idx, 1);
        btn.classList.remove("active");
      }
      buildMessage();
    });
  });

  [nameInput, dateInput, tripSelect, paxInput, pickupInput, routeInput, notesInput].forEach(function (el) {
    if (el) {
      el.addEventListener("input", buildMessage);
      el.addEventListener("change", buildMessage);
    }
  });

  buildMessage();
})();
