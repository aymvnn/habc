import type { PageDef, PageSet } from "./types";
import { about } from "./about";
import { services } from "./services";
import { how } from "./how";
import { market } from "./market";
import { membership } from "./membership";
import { network } from "./network";
import { events } from "./events";
import { legal } from "./legal";
import { legalTerms } from "./legal-terms";

/** every inner page, keyed by its path under /{locale}/ (see lib/site.ts) */
export const pageDefs: PageSet = { ...about, ...services, ...how, ...market, ...membership, ...network, ...events, ...legal, ...legalTerms };

export const pageDef = (path: string): PageDef | undefined => pageDefs[path];
