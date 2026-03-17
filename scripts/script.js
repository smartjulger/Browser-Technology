// https://www.ayrshare.com/docs/iso-codes/country
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const countries = [
  { code: "AL", name: "Albania" },
  { code: "AD", name: "Andorra" },
  { code: "AT", name: "Austria" },
  { code: "BY", name: "Belarus" },
  { code: "BE", name: "Belgium" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BG", name: "Bulgaria" },
  { code: "HR", name: "Croatia" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czech Republic" },
  { code: "DK", name: "Denmark" },
  { code: "EE", name: "Estonia" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "DE", name: "Germany" },
  { code: "GR", name: "Greece" },
  { code: "HU", name: "Hungary" },
  { code: "IS", name: "Iceland" },
  { code: "IE", name: "Ireland" },
  { code: "IT", name: "Italy" },
  { code: "XK", name: "Kosovo" },
  { code: "LV", name: "Latvia" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MT", name: "Malta" },
  { code: "MD", name: "Moldova" },
  { code: "MC", name: "Monaco" },
  { code: "ME", name: "Montenegro" },
  { code: "NL", name: "Netherlands" },
  { code: "MK", name: "North Macedonia" },
  { code: "NO", name: "Norway" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "RO", name: "Romania" },
  { code: "RU", name: "Russia" },
  { code: "SM", name: "San Marino" },
  { code: "RS", name: "Serbia" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "ES", name: "Spain" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "UA", name: "Ukraine" },
  { code: "GB", name: "United Kingdom" },
  { code: "VA", name: "Vatican City" },
];

function loadCountryCodes() {
  const datalist = document.getElementById("landcode-list");

  countries.forEach(({ code, name }) => {
    const option = document.createElement("option");
    option.value = code;
    option.label = name;
    datalist.appendChild(option);
  });
}

loadCountryCodes();

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/required
// gemaakt met behulp van Owen
const conditionalFields = [
  {
    trigger: "testament-ja",
    inputs: ["notaris-protocol", "notaris-voorletters", "notaris-achternaam", "notaris-vesting", "notaris-datum"],
  },
  {
    trigger: "gemachtigde-keuze-bsn",
    inputs: ["gemachtigde-bsn"],
  },
  {
    trigger: "gemachtigde-keuze-becon",
    inputs: ["gemachtigde-becon"],
  },
  {
    trigger: "gemachtigde-keuze-protocol",
    inputs: ["gemachtigde-protocol"],
  },
  {
    trigger: "Nederland",
    inputs: ["nl-straat", "nl-huisnummer", "nl-postcode", "nl-woonplaats"],
  },
  {
    trigger: "Buitenland",
    inputs: ["buitenland-straat", "buitenland-nummer", "buitenland-postcode", "landcode"],
  },
];
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/disabled

function updateRequired() {
  conditionalFields.forEach(({ inputs }) => {
    inputs.forEach((id) => {
      const input = document.getElementById(id);
      if (input) {
        input.required = false;
        input.disabled = true;
      }
    });
  });

  conditionalFields.forEach(({ inputs }) => {
    inputs.forEach((id) => {
      const input = document.getElementById(id);
      if (!input) {
        return;
      }
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent
      const isVisible = input.offsetParent !== null;

      if (isVisible) {
        input.required = true;
        input.disabled = false;
      }
    });
  });
}
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
document.querySelector("form").addEventListener("change", updateRequired);

updateRequired();