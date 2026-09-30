/**
 * What the site shows publicly. The owner, 30 Sep 2026: "Right now nothing is public."
 *
 * The source (the compagnon's text) has public overviews: "Bekijk het aanbod", "Bekijk de aanvragen", "Bekijk de
 * bedrijven", "Bekijk de evenementen", the stocklot and machinery lists and the publications. They stay in the page files
 * (content/pages) exactly as the source has them, but are not shown while nothing is public: a hidden overview shows only
 * its other buttons, and links to it (#offers …) are left out of the button rows. The same goes for the consent to publish
 * a purchase request. To make an overview public, remove its id here.
 */
export const hiddenListings = new Set(["offers", "requests", "deals", "machinery", "companies", "events", "publications"]);

/** forms whose publication consent (FormDef.option) is not shown while nothing is public */
export const hiddenFormOptions = new Set(["purchase-request"]);
