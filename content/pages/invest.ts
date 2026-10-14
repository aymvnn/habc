import type { PageSet } from "./types";

/**
 * DUKAAT Invest (8.1) and DUKAAT Missions (8.2).
 * Sources: owntext/DUKAAT_محتوى كتابة الموقع حديد _AR.md §8.1–8.2 (ar, verbatim) and
 * owntext/vertalingen/DUKAAT_Website_Copy_{NL,EN}_uit_AR.md §8.1–8.2 (nl, en, verbatim).
 * In both translation files 8.2 stands between sections 5 and 6; its text is the same 8.2.
 * Not published: the project card (8.1 "بطاقة المشروع", a template) and the editorial labels
 * (title, buttons, "clarifying note beside…", "text when no missions…").
 */
export const invest: PageSet = {
  "services/invest": {
    masthead: { variant: "portrait", photo: "f-invest" },
    eyebrow: { en: "DUKAAT Invest", nl: "DUKAAT Invest", ar: "DUKAAT Invest" },
    headline: {
      en: "A meeting that brings together project owners and those interested in investment",
      nl: "Een ontmoeting die projecteigenaren en geïnteresseerden in investeringen samenbrengt",
      ar: "لقاء يجمع أصحاب المشاريع والمهتمين بالاستثمار",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "We create a space for getting to know projects and cooperation opportunities in various sectors, and for starting a dialogue between their owners and interested parties. A clear presentation helps in understanding the project, its stage and what it needs before moving on to a more detailed discussion.",
          nl: "Wij creëren een ruimte om kennis te maken met projecten en samenwerkingskansen in verschillende sectoren, en om de dialoog tussen de eigenaren ervan en de geïnteresseerde partijen op gang te brengen. Een duidelijke presentatie helpt om het project, de fase waarin het zich bevindt en wat het nodig heeft te begrijpen, voordat wordt overgegaan tot een meer gedetailleerde bespreking.",
          ar: "نهيئ مساحة للتعرف إلى مشاريع وفرص تعاون في قطاعات مختلفة، وبدء الحوار بين أصحابها والأطراف المهتمة. يساعد العرض الواضح على فهم المشروع ومرحلته وما يحتاجه قبل الانتقال إلى نقاش أكثر تفصيلًا.",
        },
      },
      {
        kind: "prose",
        body: [
          {
            en: "The opportunities may concern industry, food, technology, logistics, real estate, tourism, or the development of existing companies and new projects.",
            nl: "De kansen kunnen betrekking hebben op industrie, voedingsmiddelen, technologie, logistieke dienstverlening, vastgoed, toerisme, of de ontwikkeling van bestaande bedrijven en nieuwe projecten.",
            ar: "قد تتناول الفرص الصناعة، والأغذية، والتكنولوجيا، والخدمات اللوجستية، والعقارات، والسياحة، أو تطوير شركات قائمة ومشاريع جديدة.",
          },
        ],
        photo: "x-invest-dossier",
        size: "half",
        side: "end",
      },
      {
        kind: "register",
        items: [
          {
            title: { en: "For the project owner", nl: "Voor de projecteigenaar", ar: "لصاحب المشروع" },
            body: {
              en: "Introduce your project, its location, its stage, its team, the type of participation sought and the information you are able to provide.",
              nl: "Stel uw project voor, met de locatie, de fase, het team, de gewenste vorm van deelname en de informatie die u kunt verstrekken.",
              ar: "عرّف بمشروعك وموقعه ومرحلته وفريقه ونوع المشاركة المطلوبة والمعلومات التي تستطيع تقديمها.",
            },
          },
          {
            title: { en: "For those interested in investment", nl: "Voor wie interesse heeft in investeringen", ar: "للمهتم بالاستثمار" },
            body: {
              en: "Specify the sectors, countries, type of participation and project stage that suit your interest, so that we understand the scope of the search and the introductions you are looking for.",
              nl: "Geef de sectoren, de landen, de vorm van deelname en de projectfase aan die bij uw interesse passen, zodat wij de reikwijdte van de gewenste zoektocht en kennismaking begrijpen.",
              ar: "حدّد القطاعات والدول ونوع المشاركة ومرحلة المشروع التي تناسب اهتمامك، لنفهم نطاق البحث والتعارف المطلوب.",
            },
          },
        ],
      },
      {
        kind: "notice",
        body: [
          {
            en: "The presentation of a project is for the purposes of introduction and contact, and does not constitute an investment recommendation or a guarantee of returns. Any decision requires an independent assessment of the information and of the legal, financial and technical aspects.",
            nl: "De presentatie van het project is bedoeld voor introductie en contact, en vormt geen investeringsaanbeveling of rendementsgarantie. Voor elk besluit is een onafhankelijke beoordeling nodig van de informatie en van de juridische, financiële en technische aspecten.",
            ar: "عرض المشروع لأغراض التعريف والتواصل، ولا يمثل توصية استثمارية أو ضمانًا للعائد. يحتاج أي قرار إلى تقييم مستقل للمعلومات والجوانب القانونية والمالية والفنية.",
          },
        ],
      },
      {
        kind: "actions",
        links: [
          {
            href: "looking-for#invest",
            label: { en: "Register your investment interest", nl: "Registreer uw investeringsinteresse", ar: "سجّل اهتمامك الاستثماري" },
          },
          {
            href: "contact?subject=investment#contact-form",
            label: { en: "Submit your project", nl: "Dien uw project in", ar: "قدّم مشروعك" },
          },
          {
            href: "contact?subject=investment#contact-form",
            label: { en: "Request an introductory meeting", nl: "Vraag een kennismakingsgesprek aan", ar: "اطلب لقاءً تعريفيًا" },
          },
        ],
      },
      /* extra (commit 2336702, services.ts "services/investment", from the register "Formats"): Meet the Developer */
      {
        kind: "register",
        items: [
          {
            title: { en: "Meet the Developer", nl: "Meet the Developer", ar: "Meet the Developer" },
            body: {
              en: "For real-estate and development projects: a meeting between investor and developer, to hear the plan from the people who will build it.",
              nl: "Voor vastgoed- en ontwikkelprojecten: een ontmoeting tussen investeerder en ontwikkelaar, om het plan te horen van de mensen die het gaan bouwen.",
              ar: "للمشاريع العقارية ومشاريع التطوير: لقاءٌ بين المستثمر والمطوّر، يسمع فيه المستثمر الخطة ممّن سيبنونها.",
            },
          },
        ],
      },
    ],
  },

  "events/missions": {
    masthead: { variant: "band", photo: "mis-hero" },
    eyebrow: { en: "DUKAAT Missions", nl: "DUKAAT Missions", ar: "DUKAAT Missions" },
    headline: {
      en: "Get to know the market through its people and its companies",
      nl: "Leer de markt kennen via zijn mensen en zijn bedrijven",
      ar: "تعرّف إلى السوق من خلال أهله وشركاته",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Trade delegations offer a closer understanding of markets through visits and meetings linked to participants’ objectives. A programme may take in companies, factories and exhibitions; meetings with buyers, distributors and experts; and sessions introducing the business environment.",
          nl: "Handelsdelegaties maken het mogelijk om markten van dichterbij te begrijpen, via bezoeken en ontmoetingen die aansluiten bij de doelen van de deelnemers. Het programma kan bedrijven, fabrieken en beurzen omvatten, besprekingen met kopers, distributeurs en experts, en introductiesessies over het ondernemingsklimaat.",
          ar: "تتيح الوفود التجارية فهمًا أقرب للأسواق عبر زيارات ولقاءات مرتبطة بأهداف المشاركين. قد يشمل البرنامج شركات ومصانع ومعارض، واجتماعات مع مشترين وموزّعين وخبراء، وجلسات تعريف ببيئة الأعمال.",
        },
      },
      {
        kind: "prose",
        body: [
          {
            en: "Possible programme directions include receiving Arab delegations in the Netherlands, organising business visits to Arab markets, and hosting buyers to get to know suppliers and products. Each programme is announced once its arrangements and the conditions for running it have been confirmed.",
            nl: "De mogelijke richtingen voor programma’s omvatten het ontvangen van Arabische delegaties in Nederland, het organiseren van zakelijke bezoeken aan Arabische markten en het als gasten ontvangen van kopers om leveranciers en producten te leren kennen. Elk programma wordt aangekondigd nadat de regelingen en de uitvoeringsvoorwaarden ervan zijn bevestigd.",
            ar: "تشمل اتجاهات البرامج الممكنة استقبال وفود عربية في هولندا، وتنظيم زيارات أعمال إلى أسواق عربية، واستضافة مشترين للتعرف إلى مورّدين ومنتجات. يُعلن كل برنامج بعد تأكيد ترتيباته وشروط تنفيذه.",
          },
        ],
      },
      {
        kind: "prose",
        heading: {
          en: "Before taking part, familiarise yourself with",
          nl: "Neem vóór deelname kennis van",
          ar: "قبل المشاركة، تعرف إلى",
        },
        body: [
          {
            en: "the mission’s objectives, the country and sector, the confirmed organisations, the meeting schedule, the language, the cost, what the arrangements include, and the travel and participation conditions.",
            nl: "de doelen van de delegatie, het land en de sector, de bevestigde partijen, het schema van de ontmoetingen, de taal, de kosten, wat de organisatie omvat, en de reis- en deelnamevoorwaarden.",
            ar: "أهداف الوفد، والدولة والقطاع، والجهات المؤكدة، وجدول اللقاءات، واللغة، والتكلفة، وما يشمله التنظيم، وشروط السفر والمشاركة.",
          },
        ],
      },
      {
        kind: "actions",
        links: [
          {
            href: "contact?subject=missions#contact-form",
            label: { en: "Register your interest in a trade delegation", nl: "Registreer uw interesse in een handelsdelegatie", ar: "سجّل اهتمامك بوفد تجاري" },
          },
          {
            href: "contact?subject=missions#contact-form",
            label: { en: "Suggest a destination or sector", nl: "Stel een bestemming of sector voor", ar: "اقترح وجهة أو قطاعًا" },
          },
        ],
      },
      {
        kind: "notice",
        body: [
          {
            en: "We are developing trade visit programmes. Share the market that interests you, and we will let you know about suitable programmes when they are announced.",
            nl: "We werken aan de ontwikkeling van programma’s voor handelsbezoeken. Deel met ons in welke markt u geïnteresseerd bent, zodat wij u informeren over passende programma’s wanneer die worden aangekondigd.",
            ar: "نعمل على تطوير برامج الزيارات التجارية. شاركنا السوق الذي يهمك لنطلعك على البرامج المناسبة عند الإعلان عنها.",
          },
        ],
      },
      /* extra (commit 2336702, events.ts "events/missions"): the named mission programmes */
      {
        kind: "chapter",
        label: { en: "Programmes", nl: "Programma’s", ar: "البرامج" },
        heading: { en: "Missions in *both directions.*", nl: "Missies in *beide richtingen.*", ar: "بعثاتٌ *في الاتجاهين.*" },
        intro: {
          en: "Discover Netherlands and the Reverse Buyer Missions bring business people and buyers from the Arab world to the Netherlands. Discover Dubai and Discover Saudi Arabia take members to the Gulf.",
          nl: "Discover Netherlands en de Reverse Buyer Missions brengen ondernemers en kopers uit de Arabische wereld naar Nederland. Discover Dubai en Discover Saudi Arabia brengen leden naar de Golf.",
          ar: "يأتي برنامجا Discover Netherlands وReverse Buyer Missions بأصحاب الأعمال والمشترين من العالم العربي إلى هولندا، فيما يأخذ برنامجا Discover Dubai وDiscover Saudi Arabia الأعضاءَ إلى الخليج.",
        },
        items: [
          {
            title: { en: "Discover Netherlands", nl: "Discover Netherlands", ar: "Discover Netherlands" },
            body: {
              en: "For business people from the Arab world: Dutch companies and factories, the port of Rotterdam and its logistics, innovation, investment, company formation and the Dutch way of doing business.",
              nl: "Voor ondernemers uit de Arabische wereld: Nederlandse bedrijven en fabrieken, de haven van Rotterdam en haar logistiek, innovatie, investeren, bedrijfsoprichting en de Nederlandse manier van zakendoen.",
              ar: "برنامجٌ لأصحاب الأعمال القادمين من العالم العربي، للتعرّف إلى الشركات والمصانع الهولندية، وميناء روتردام ومنظومته اللوجستية، والابتكار، والاستثمار، وتأسيس الشركات، وثقافة الأعمال في هولندا.",
            },
            photo: "mis-nl",
          },
          {
            title: { en: "Discover Dubai", nl: "Discover Dubai", ar: "Discover Dubai" },
            body: {
              en: "Setting up a company, investment, real estate and B2B meetings with local firms in one programme — with time to experience the city and how it does business.",
              nl: "Een bedrijf opzetten, investeren, vastgoed en B2B-gesprekken met lokale bedrijven in één programma — met tijd om de stad te ervaren en te zien hoe er zaken worden gedaan.",
              ar: "برنامجٌ واحد يجمع تأسيس الشركات، والاستثمار، والعقار، ولقاءات B2B مع الشركات المحلية — مع متّسعٍ من الوقت لاكتشاف المدينة ومعرفة كيف تُدار فيها الأعمال.",
            },
            photo: "mis-dubai",
          },
          {
            title: { en: "Discover Saudi Arabia", nl: "Discover Saudi Arabia", ar: "Discover Saudi Arabia" },
            body: {
              en: "A programme on the Saudi market: investors, suppliers, agents and distributors, the major projects, and the trade fairs where the market meets.",
              nl: "Een programma over de Saoedische markt: investeerders, leveranciers, agenten en distributeurs, de grote projecten, en de vakbeurzen waar de markt samenkomt.",
              ar: "برنامجٌ يركّز على السوق السعودية: المستثمرون، والمورّدون، والوكلاء والموزّعون، والمشاريع الكبرى، والمعارض التي يلتقي فيها أطراف السوق.",
            },
            photo: "mis-saudi",
          },
          {
            title: { en: "Reverse Buyer Missions", nl: "Reverse Buyer Missions", ar: "Reverse Buyer Missions" },
            body: {
              en: "Sometimes we bring the buyers to Europe. Buyers from the Gulf and the wider Arab world come to the Netherlands to meet European manufacturers and suppliers, in their own factories.",
              nl: "Soms brengen wij de kopers naar Europa. Kopers uit de Golf en de bredere Arabische wereld komen naar Nederland om Europese fabrikanten en leveranciers te ontmoeten, in hun eigen fabrieken.",
              ar: "أحياناً نأتي بالمشترين إلى أوروبا: مشترون من الخليج وسائر العالم العربي يَقدَمون إلى هولندا للقاء مصنّعين ومورّدين أوروبيين في مصانعهم.",
            },
            photo: "mis-reverse",
          },
        ],
      },
    ],
  },
};
