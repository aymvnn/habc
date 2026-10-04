/* every stylesheet of the site, in cascade order: later files refine earlier ones, often at equal specificity.
   The site's layout (app/[locale]/layout.tsx) and the house 404 (app/global-not-found.tsx) both import this one list.
   They must: when the two imported different lists, the production build moved the files they shared into a chunk
   that loads first, and nav, muntregister and ux.css lost to the files they refine (seen 4 Oct 2026). */
import "lenis/dist/lenis.css";
import "./globals.css";
import "./hero.css";
import "./nav.css";
import "./pages.css";
import "./blocks.css";
import "./muntregister.css"; // the redesign below the hero, one block per item
import "./verdichting.css"; // round 2: density and the masthead
import "./signaturen.css"; // round 3: the signatures the owner approved on 4 Oct 2026
import "./kaarten.css"; // round 3, signature 9: the three membership cards
import "./footers.css"; // 4 Oct: short endings — the page end and the footer compact
import "./ux.css"; // 4 Oct: the UX assessment, the owner's choices (report 2yXZnyx32TzQFtL3NbA7qe)
import "./premium.css"; // 4 Oct: the UI assessment, the owner's choices (report WZkgDuxzHx5fska3qjnKmy) — loaded last
