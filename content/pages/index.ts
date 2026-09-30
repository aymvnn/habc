import type { PageDef, PageSet } from "./types";
import { about } from "./about";
import { academy } from "./academy";
import { services } from "./services";
import { market } from "./market";
import { invest } from "./invest";
import { membership } from "./membership";
import { network } from "./network";
import { events } from "./events";
import { contact } from "./contact";
import { legal } from "./legal";
import { legalTerms } from "./legal-terms";

/** every inner page, keyed by its path under /{locale}/ (see lib/site.ts) */
export const pageDefs: PageSet = { ...about, ...academy, ...services, ...market, ...invest, ...membership, ...network, ...events, ...contact, ...legal, ...legalTerms };

export const pageDef = (path: string): PageDef | undefined => pageDefs[path];
