import { notify } from "@kyvg/vue3-notification";

const legalIssuesConfig = function (config) {
  const euCountryIncluded =
    config.targetCountries === "EU" || config.targetCountries === "world";

  const issueIt1 =
    config.banner.closeButtonDisplay === true &&
    config.banner.closeButtonRejects === false;
  const issueIt2 =
    config.banner.rejectButtonDisplay === false &&
    config.banner.closeButtonDisplay === false;
  const issueIt3 =
    config.banner.rejectButtonDisplay === true &&
    config.banner.closeButtonDisplay === true &&
    config.banner.closeButtonRejects === false;
  const issueItFr = config.consentByScroll === true;
  const issueFr = config.perPurposeConsent === false;

  const italyLawIssue = euCountryIncluded && (issueIt1 || issueIt2 || issueIt3);
  const italyFrenchLawIssue = euCountryIncluded && issueItFr;
  const frenchLawIssue = euCountryIncluded && issueFr;

  const notificationOptions = {
    title: "Warning",
    ignoreDuplicates: true,
    duration: -1,
    type: "warn",
    speed: 0,
  };

  if (!italyLawIssue || !italyFrenchLawIssue || !frenchLawIssue) {
    notify({
      clean: true,
    });
  }

  if (italyLawIssue) {
    notify({
      ...notificationOptions,
      text: "Your selected settings are not compliant with laws in Italy",
    });
  }

  if (italyFrenchLawIssue) {
    notify({
      ...notificationOptions,
      text: "Your selected settings are not compliant with laws in France and Italy",
    });
  }

  if (frenchLawIssue) {
    notify({
      ...notificationOptions,
      text: "Your selected settings are not compliant with laws in France",
    });
  }
};

export default legalIssuesConfig;
