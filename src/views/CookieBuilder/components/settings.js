const settings = {
  targetCountries: [
    {
      value: "EU",
      name: "EU users only",
      id: "country1",
    },
    {
      value: "US",
      name: "US users only",
      id: "country2",
    },
    {
      value: "world",
      name: "Wordlwide",
      id: "country3",
    },
  ],
  legislation: [
    {
      name: "GDPR",
      value: "gdpr",
    },
    {
      name: "CCPA",
      value: "ccpa",
    },
  ],
  consent: [
    {
      name: "Consent by scroll",
      value: "consentByScroll",
    },
    {
      name: "Per purpose consent",
      value: "perPurposeConsent",
    },
  ],
};

export default settings;
