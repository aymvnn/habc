import type { PageSet } from "./types";

/**
 * Membership — the group overview and its four pages.
 * Rules that bind this file: admission by nomination or invitation, applications welcome but never a guarantee; no prices, only the charging
 * model verbatim; tier names in English in every language; Founding 100 is a status beside the levels, never a fourth level,
 * held by one hundred of the most influential member companies (never "the first 100"); no remedy "if we fall short";
 * every pending value stays in square brackets exactly as the founders left it (p.11–14 of the content master); no counter
 * of places, no counts of members. The benefit lists follow p.11–13 (Member 13 · Professional 17 · Executive 18).
 */
export const membership: PageSet = {
  membership: {
    masthead: { variant: "band", photo: "membership-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "DUKAAT is a closed club. Companies are nominated by members, invited by us, or apply themselves; each one is reviewed before admission, and members are served at one of three levels, each with its own written commitments.",
          nl: "DUKAAT is een besloten club. Bedrijven worden door leden voorgedragen, door ons uitgenodigd of melden zich zelf aan; elk bedrijf wordt vóór toelating beoordeeld, en leden worden bediend op een van de drie niveaus, elk met eigen schriftelijke toezeggingen.",
          ar: "DUKAAT نادٍ مغلق: تصل إليه الشركات بترشيحٍ من أعضائه، أو بدعوةٍ منا، أو بطلب انضمامٍ تتقدّم به بنفسها؛ وتخضع كل شركة للمراجعة قبل قبولها، ثم نخدم الأعضاء وفق أحد ثلاثة مستويات، لكلٍّ منها التزاماته المكتوبة.",
        },
      },
      {
        kind: "steps",
        label: { en: "Admission", nl: "Toelating", ar: "القبول" },
        heading: { en: "How admission *works.*", nl: "Zo werkt *de toelating.*", ar: "هكذا يجري *القبول.*" },
        intro: {
          en: "From a first name or an application to a card with a membership number. Each step is taken by a person, not a form.",
          nl: "Van een eerste naam of een aanmelding tot een kaart met lidnummer. Elke stap wordt gezet door een mens, niet door een formulier.",
          ar: "من اسمٍ يُطرَح أو طلبٍ يُقدَّم إلى بطاقةٍ تحمل رقم عضوية. وكل خطوةٍ يتولّاها إنسان، لا استمارة.",
        },
        items: [
          {
            title: { en: "A nomination, an invitation or an application", nl: "Een voordracht, uitnodiging of aanmelding", ar: "ترشيحٌ أو دعوةٌ أو طلب انضمام" },
            body: {
              en: "A member who knows your work gives us your name, we invite you ourselves, or you apply through the intake. Whichever way, what counts is your reputation and your trade, not the form.",
              nl: "Een lid dat uw werk kent, geeft ons uw naam, wij nodigen u zelf uit, of u meldt zich aan via de intake. Hoe dan ook: wat telt, zijn uw reputatie en uw handel, niet het formulier.",
              ar: "يذكر لنا اسمَك عضوٌ يعرف عملك، أو ندعوك نحن، أو تتقدّم بطلب انضمام عبر الاستمارة. وأيّاً كان الطريق، فالعبرة بسمعتك وتجارتك، لا بالاستمارة.",
            },
          },
          {
            title: { en: "We review your company", nl: "Wij beoordelen uw bedrijf", ar: "نراجع شركتك" },
            body: {
              en: "Company registration, trading activity and references we can call. We check that the company exists, that it genuinely trades, and that it is who it says it is.",
              nl: "Handelsregister, handelsactiviteit en referenties die wij kunnen bellen. Wij controleren of het bedrijf bestaat, of het werkelijk handelt, en of het is wie het zegt te zijn.",
              ar: "السجل التجاري، والنشاط التجاري، ومراجع يمكننا الاتصال بها. نتحقق من أن الشركة قائمة، وأنها تتاجر فعلاً، وأنها حقاً كما تقدّم نفسها.",
            },
          },
          {
            title: { en: "A short conversation", nl: "Een kort gesprek", ar: "محادثةٌ قصيرة" },
            body: {
              en: "A call or a meeting about what you offer, what you look for and in which market. Where needed, we ask for documents such as a registration extract, VAT details or certificates.",
              nl: "Een telefoongesprek of afspraak over wat u aanbiedt, wat u zoekt en in welke markt. Waar nodig vragen wij om stukken, zoals een uittreksel uit het handelsregister, btw-gegevens of certificaten.",
              ar: "مكالمة أو لقاء نتحدث فيه عمّا تقدّمه، وعمّا تبحث عنه، وفي أي سوق. وعند الحاجة نطلب مستندات، مثل مستخرج من السجل التجاري، أو بيانات ضريبة القيمة المضافة، أو الشهادات.",
            },
          },
          {
            title: { en: "A decision", nl: "Een besluit", ar: "القرار" },
            body: {
              en: "Within 10 working days you hear whether you are admitted. If you are, your membership card and membership number follow.",
              nl: "Binnen 10 werkdagen hoort u of u bent toegelaten. Is dat zo, dan volgen uw lidmaatschapskaart en lidnummer.",
              ar: "خلال 10 أيام عمل تعلم ما إذا كنت قد قُبلت. فإن قُبلت، صدرت لك بطاقة العضوية ورقم عضويتك.",
            },
          },
        ],
      },
      {
        kind: "tiers",
        label: { en: "The levels", nl: "De niveaus", ar: "المستويات" },
        heading: { en: "Three levels, *one standard.*", nl: "Drie niveaus, *één maatstaf.*", ar: "ثلاثة مستويات، *ومعيار واحد.*" },
        intro: {
          en: "Admission is the same for every level. What differs is how much of DUKAAT works on your behalf, and how closely.",
          nl: "De toelating is voor elk niveau gelijk. Wat verschilt, is hoeveel van DUKAAT voor u werkt, en hoe dichtbij.",
          ar: "القبول واحدٌ في المستويات كلها. أما الفرق ففي حجم ما يعمله DUKAAT نيابةً عنك، ومدى قربه منك.",
        },
        tiers: [
          {
            name: "Member",
            tagline: {
              en: "For companies entering the network.",
              nl: "Voor bedrijven die het netwerk betreden.",
              ar: "للشركات التي تدخل الشبكة.",
            },
            items: [
              { en: "A profile and a listing in the member directory", nl: "Een profiel en een vermelding in het Ledenregister", ar: "ملف تعريفي وإدراج في دليل الأعضاء" },
              { en: "Membership number and digital certificate", nl: "Lidnummer en digitaal certificaat", ar: "رقم عضوية وشهادة عضوية رقمية" },
              { en: "Newsletters, selected reports and opportunities", nl: "Nieuwsbrieven, geselecteerde rapporten en kansen", ar: "النشرات الإخبارية، وتقارير وفرص مختارة" },
              { en: "Basic access to the sector clubs", nl: "Basistoegang tot de sectorclubs", ar: "وصول أساسي إلى الأندية القطاعية" },
            ],
          },
          {
            name: "Professional",
            tagline: {
              en: "For companies that use DUKAAT actively.",
              nl: "Voor bedrijven die DUKAAT actief gebruiken.",
              ar: "للشركات التي تستخدم DUKAAT فعلياً.",
            },
            items: [
              { en: "Everything in Member", nl: "Alles van Member", ar: "جميع مزايا Member" },
              { en: "Buyer requests and product listings in DUKAAT Market", nl: "Inkoopaanvragen en productvermeldingen in DUKAAT Market", ar: "طلبات الشراء وعرض المنتجات في سوق DUKAAT" },
              { en: "Supplier and distributor searches", nl: "Zoektochten naar leveranciers en distributeurs", ar: "البحث عن مورّدين وموزّعين" },
              { en: "Business introductions and B2B matchmaking", nl: "Zakelijke introducties en B2B-koppelingen", ar: "التعريفات التجارية والمطابقة بين الشركات (B2B)" },
            ],
          },
          {
            name: "Executive",
            tagline: {
              en: "For owners and investors who want us beside them.",
              nl: "Voor ondernemers en investeerders die ons aan hun zijde willen.",
              ar: "لأصحاب الشركات والمستثمرين الذين يريدوننا إلى جانبهم.",
            },
            items: [
              { en: "Everything in Professional", nl: "Alles van Professional", ar: "جميع مزايا Professional" },
              { en: "A dedicated relationship contact", nl: "Een eigen relatiebeheerder", ar: "مسؤول علاقة مخصّص لك" },
              { en: "Business Concierge and warm introductions", nl: "Business Concierge en persoonlijke introducties", ar: "Business Concierge والتعريفات المباشرة" },
              { en: "Executive Dinners and DUKAAT Circle", nl: "Executive Dinners en DUKAAT Circle", ar: "دعوات إلى Executive Dinners وDUKAAT Circle" },
            ],
          },
        ],
      },
      { kind: "home", section: "membership" },
      {
        kind: "index",
        label: { en: "In detail", nl: "In detail", ar: "بالتفصيل" },
        heading: { en: "Membership, *page by page.*", nl: "Het lidmaatschap, *pagina voor pagina.*", ar: "العضوية، *صفحةً صفحة.*" },
      },
      {
        kind: "next",
        heading: {
          en: "If a member named you, *tell us who.*",
          nl: "Als een lid u heeft genoemd, *laat ons weten wie.*",
          ar: "إن ذكر أحد الأعضاء اسمك، *فأخبرنا مَن.*",
        },
        body: {
          en: "Choose the route “I have been nominated” and give us the member’s name, or apply yourself through the intake. If you are still weighing whether DUKAAT fits your company, start with who it is for.",
          nl: "Kies de route “Ik ben voorgedragen” en geef ons de naam van het lid, of meld u zelf aan via de intake. Weegt u nog af of DUKAAT bij uw bedrijf past, lees dan eerst voor wie het bedoeld is.",
          ar: "اختر المسار «تمّت تزكيتي» وأخبرنا باسم العضو، أو تقدّم بطلب انضمام بنفسك عبر الاستمارة. وإن كنت لا تزال تنظر في مدى ملاءمة DUKAAT لشركتك، فابدأ بمعرفة لمن العضوية.",
        },
        links: [
          { href: "contact?intent=nominated#intake", label: { en: "I have been nominated", nl: "Ik ben voorgedragen", ar: "تمّت تزكيتي" } },
          { href: "contact?intent=apply#intake", label: { en: "Apply for membership", nl: "Aanmelden als lid", ar: "التقدّم بطلب عضوية" } },
          { href: "membership/who-for", label: { en: "Who it is for — and who not", nl: "Voor wie — en voor wie niet", ar: "لمن العضوية — ولمن لا" } },
        ],
      },
    ],
  },

  "membership/levels": {
    masthead: { variant: "plate", photo: "lvl-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Every level rests on the same admission and the same verification. What changes from Member to Executive is reach: how visible you are, how much we search for you, and how close we stay.",
          nl: "Elk niveau rust op dezelfde toelating en dezelfde verificatie. Wat van Member naar Executive verandert, is het bereik: hoe zichtbaar u bent, hoeveel wij voor u zoeken, en hoe dicht wij bij u blijven.",
          ar: "تقوم المستويات كلها على القبول نفسه والتحقق نفسه. أما ما يتغيّر من Member إلى Executive فهو النطاق: مدى ظهورك، وحجم ما نبحث عنه لحسابك، ومدى قربنا منك.",
        },
      },
      {
        kind: "tiers",
        label: { en: "The levels", nl: "De niveaus", ar: "المستويات" },
        heading: { en: "What each level *includes.*", nl: "Wat elk niveau *omvat.*", ar: "ما يشمله *كل مستوى.*" },
        intro: {
          en: "Each level includes everything in the level before it, and adds to it.",
          nl: "Elk niveau omvat alles van het niveau ervoor, en voegt daar iets aan toe.",
          ar: "يشمل كل مستوى كلَّ ما في المستوى الذي قبله، ويزيد عليه.",
        },
        tiers: [
          {
            name: "Member",
            tagline: {
              en: "For entrepreneurs and companies entering the DUKAAT network.",
              nl: "Voor ondernemers en bedrijven die het DUKAAT-netwerk betreden.",
              ar: "لروّاد الأعمال والشركات التي تدخل شبكة DUKAAT.",
            },
            items: [
              { en: "A personal or company profile", nl: "Een persoonlijk profiel of bedrijfsprofiel", ar: "ملف شخصي أو ملف للشركة" },
              { en: "A listing in the member directory", nl: "Een vermelding in het Ledenregister", ar: "إدراج في دليل الأعضاء" },
              { en: "A membership number", nl: "Een lidnummer", ar: "رقم عضوية" },
              { en: "A digital membership certificate", nl: "Een digitaal lidmaatschapscertificaat", ar: "شهادة عضوية رقمية" },
              { en: "The DUKAAT Member badge, under our brand terms", nl: "Het DUKAAT Member-embleem, volgens onze merkvoorwaarden", ar: "شارة DUKAAT Member، وفق شروط استخدام علامتنا" },
              { en: "Business and economic newsletters", nl: "Zakelijke en economische nieuwsbrieven", ar: "النشرات التجارية والاقتصادية" },
              { en: "Selected reports and publications", nl: "Geselecteerde rapporten en publicaties", ar: "تقارير ومنشورات مختارة" },
              { en: "Selected commercial opportunities", nl: "Geselecteerde handelskansen", ar: "فرص تجارية مختارة" },
              { en: "Access to selected open events", nl: "Toegang tot geselecteerde open bijeenkomsten", ar: "حضور فعاليات عامة مختارة" },
              { en: "Discounts on courses", nl: "Korting op cursussen", ar: "خصومات على الدورات" },
              { en: "Discounts on selected events", nl: "Korting op geselecteerde evenementen", ar: "خصومات على فعاليات مختارة" },
              { en: "Basic access to the sector clubs", nl: "Basistoegang tot de sectorclubs", ar: "وصول أساسي إلى الأندية القطاعية" },
              { en: "General opportunity alerts", nl: "Algemene kansenmeldingen", ar: "تنبيهات عامة بالفرص" },
            ],
          },
          {
            name: "Professional",
            tagline: {
              en: "For companies that use DUKAAT actively to grow their business and find trade opportunities.",
              nl: "Voor bedrijven die DUKAAT actief gebruiken om hun zaken uit te bouwen en handelskansen te vinden.",
              ar: "للشركات التي تستخدم DUKAAT فعلياً لتطوير أعمالها والعثور على فرص تجارية.",
            },
            items: [
              { en: "Everything in Member", nl: "Alles van Member", ar: "جميع مزايا Member" },
              { en: "Enhanced visibility in the member directory", nl: "Grotere zichtbaarheid in het Ledenregister", ar: "ظهور أعلى في دليل الأعضاء" },
              { en: "An advanced company profile", nl: "Een uitgebreid bedrijfsprofiel", ar: "ملف متقدّم للشركة" },
              { en: "Product and service listings in DUKAAT Market", nl: "Product- en dienstvermeldingen in DUKAAT Market", ar: "عرض المنتجات والخدمات في سوق DUKAAT" },
              { en: "Buyer requests, published in DUKAAT Market", nl: "Inkoopaanvragen, geplaatst in DUKAAT Market", ar: "نشر طلبات الشراء في سوق DUKAAT" },
              { en: "Business requests, circulated in the network", nl: "Zakelijke aanvragen, uitgezet in het netwerk", ar: "طرح طلبات الأعمال داخل الشبكة" },
              { en: "Supplier and distributor searches", nl: "Zoektochten naar leveranciers en distributeurs", ar: "البحث عن مورّدين وموزّعين" },
              { en: "Wider access to commercial opportunities", nl: "Ruimere toegang tot handelskansen", ar: "وصول موسّع إلى الفرص التجارية" },
              { en: "Priority places at events", nl: "Voorrang bij de toewijzing van plaatsen op evenementen", ar: "أولوية في حجز مقاعد الفعاليات" },
              { en: "B2B matchmaking", nl: "B2B-koppelingen", ar: "المطابقة بين الشركات (B2B)" },
              { en: "Business introductions", nl: "Zakelijke introducties", ar: "التعريفات التجارية" },
              { en: "Wider access to DUKAAT Market", nl: "Ruimere toegang tot DUKAAT Market", ar: "وصول أوسع إلى سوق DUKAAT" },
              { en: "Stocklot opportunities", nl: "Handelskansen in partijen", ar: "فرص دفعات المخزون" },
              { en: "Larger discounts on trade missions", nl: "Hogere korting op handelsmissies", ar: "خصومات أعلى على البعثات التجارية" },
              { en: "Eligibility for Member Spotlight", nl: "Kans op een plaats in Member Spotlight", ar: "إمكانية الظهور في Member Spotlight" },
              { en: "Introductory advisory sessions, within an annual allowance", nl: "Inleidende adviesgesprekken, binnen een jaarlijks tegoed", ar: "جلسات استشارية أولية ضمن رصيد سنوي" },
              { en: "Opportunity alerts tailored to your sector", nl: "Kansenmeldingen afgestemd op uw sector", ar: "تنبيهات بالفرص مخصّصة لقطاعك" },
              { en: "Priority in supplier and buyer matching", nl: "Voorrang bij het koppelen van leveranciers en kopers", ar: "أولوية أعلى في مطابقة المورّدين والمشترين" },
            ],
          },
          {
            name: "Executive",
            tagline: {
              en: "The highest level, for business owners, investors and companies that want more access, discretion and support.",
              nl: "Het hoogste niveau, voor ondernemers, investeerders en bedrijven die meer toegang, discretie en ondersteuning willen.",
              ar: "المستوى الأعلى، لأصحاب الأعمال والمستثمرين والشركات التي تريد قدراً أكبر من الوصول والخصوصية والدعم.",
            },
            items: [
              { en: "Everything in Professional", nl: "Alles van Professional", ar: "جميع مزايا Professional" },
              { en: "A dedicated relationship contact", nl: "Een eigen relatiebeheerder", ar: "مسؤول علاقة مخصّص لك" },
              { en: "The highest priority in matchmaking", nl: "De hoogste voorrang bij koppelingen", ar: "الأولوية القصوى في المطابقة بين الشركات" },
              { en: "Access to Business Concierge", nl: "Toegang tot Business Concierge", ar: "الوصول إلى Business Concierge" },
              { en: "Warm introductions, with a written brief to both sides", nl: "Persoonlijke introducties, met een schriftelijke briefing aan beide kanten", ar: "تعريفات مباشرة، بملخّص مكتوب للطرفين" },
              { en: "Early access to selected opportunities", nl: "Vroege toegang tot geselecteerde kansen", ar: "وصول مبكر إلى فرص مختارة" },
              { en: "Access to private opportunities", nl: "Toegang tot besloten kansen", ar: "الوصول إلى الفرص الخاصة" },
              { en: "Invitations to Executive Dinners", nl: "Uitnodigingen voor Executive Dinners", ar: "دعوات إلى Executive Dinners" },
              { en: "Access to DUKAAT Circle", nl: "Toegang tot DUKAAT Circle", ar: "الوصول إلى DUKAAT Circle" },
              { en: "VIP access to events", nl: "VIP-toegang tot evenementen", ar: "دخول VIP إلى الفعاليات" },
              { en: "Priority on trade missions", nl: "Voorrang bij handelsmissies", ar: "أولوية في البعثات التجارية" },
              { en: "Premium visibility across the platform", nl: "Prominente zichtbaarheid op het platform", ar: "ظهور مميّز في أرجاء المنصة" },
              { en: "A larger annual advisory allowance", nl: "Een ruimer jaarlijks adviestegoed", ar: "رصيد استشاري سنوي أكبر" },
              { en: "Market entry support", nl: "Ondersteuning bij markttoetreding", ar: "دعم دخول الأسواق" },
              { en: "Extended support in supplier sourcing", nl: "Uitgebreide hulp bij het vinden van leveranciers", ar: "مساعدة موسّعة في البحث عن مورّدين" },
              { en: "Extended support in distributor searches", nl: "Uitgebreide hulp bij het zoeken naar distributeurs", ar: "مساعدة موسّعة في البحث عن موزّعين" },
              { en: "Closed B2B sessions", nl: "Besloten B2B-sessies", ar: "جلسات B2B مغلقة" },
              { en: "Priority in investor programmes", nl: "Voorrang in investeerdersprogramma’s", ar: "أولوية في برامج المستثمرين" },
              { en: "Sponsorship opportunities", nl: "Sponsormogelijkheden", ar: "فرص الرعاية" },
            ],
          },
        ],
        note: {
          en: "Membership is an annual subscription. Project services (market entry, supplier search, representation) are quoted per engagement in writing. No hidden commissions.",
          nl: "Het lidmaatschap is een jaarabonnement. Projectdiensten (markttoetreding, leverancierszoektocht, vertegenwoordiging) worden per opdracht schriftelijk geoffreerd. Geen verborgen commissies.",
          ar: "العضوية اشتراك سنوي. خدمات المشاريع (دخول الأسواق، البحث عن مورّدين، التمثيل) تُعرض أسعارها كتابةً لكل مهمة على حدة. لا عمولات خفية.",
        },
      },
      {
        kind: "duo",
        photos: ["lvl-breakfast", "lvl-tea"],
        label: { en: "Executive level", nl: "Niveau Executive", ar: "مستوى Executive" },
        heading: { en: "Closer to *the table.*", nl: "Dichter bij *de tafel.*", ar: "أقرب إلى *الطاولة.*" },
        body: [
          {
            en: "Business Concierge starts from one clear request. Instead of spending hours searching, you tell us what you need — for example a distributor in the Gulf, a paper supplier in Europe or a private-label manufacturer — and the DUKAAT team determines the right path for it, within your membership level and the service it calls for.",
            nl: "Business Concierge begint bij één helder verzoek. In plaats van zelf urenlang te zoeken, laat u ons weten wat u nodig hebt — bijvoorbeeld een distributeur in de Golf, een papierleverancier in Europa of een producent voor huismerkproductie — en het DUKAAT-team bepaalt de juiste route, binnen uw niveau en de dienst die het verzoek vraagt.",
            ar: "يبدأ Business Concierge من طلبٍ واضح واحد. فبدلاً من أن تقضي ساعاتٍ في البحث، تخبرنا بما تحتاج إليه — موزّعاً في الخليج مثلاً، أو مورّداً للورق في أوروبا، أو مصنعاً ينتج بعلامة خاصة (Private Label) — ويحدّد فريق DUKAAT المسار المناسب له ضمن مستوى عضويتك والخدمة التي يتطلبها.",
          },
          {
            en: "DUKAAT Circle gathers business owners and leaders in closed meetings around one subject or one kind of opportunity. Executive Dinners are small and by invitation only: what counts is who sits at the table, not how many.",
            nl: "DUKAAT Circle brengt eigenaren en bestuurders samen in besloten bijeenkomsten rond één onderwerp of één soort kans. Executive Dinners zijn klein en uitsluitend op uitnodiging: het gaat om wie er aan tafel zit, niet om hoeveel.",
            ar: "يجمع DUKAAT Circle أصحاب الشركات وقادة الأعمال في لقاءات مغلقة حول موضوع واحد أو نوع واحد من الفرص. أما Executive Dinners فلقاءات عشاء محدودة الحضور، بالدعوة فقط: العبرة بمن يجلس إلى الطاولة، لا بعدد الجالسين.",
          },
          {
            en: "Closed B2B sessions bring together a small number of companies, selected in advance on what each one offers and needs, for private meetings that we prepare with both sides before anyone sits down.",
            nl: "Besloten B2B-sessies brengen een klein aantal bedrijven samen, vooraf geselecteerd op wat elk van hen aanbiedt en zoekt, voor vertrouwelijke gesprekken die wij met beide kanten voorbereiden voordat iemand aan tafel gaat.",
            ar: "وتجمع جلسات B2B المغلقة عدداً محدوداً من الشركات، تُختار مسبقاً بحسب ما تقدّمه كلٌّ منها وما تحتاج إليه، في لقاءات خاصة نُعِدّها مع الطرفين قبل أن يجلس أحدٌ إلى الطاولة.",
          },
        ],
      },
      {
        kind: "prose",
        label: { en: "Beside the levels", nl: "Naast de niveaus", ar: "إلى جانب المستويات" },
        heading: { en: "Founding 100 is *a status,* not a level.", nl: "Founding 100 is *een status,* geen niveau.", ar: "Founding 100 *صفةٌ،* لا مستوى." },
        body: [
          {
            en: "Founding 100 is the status DUKAAT gives, beside their level, to one hundred of its most influential member companies. It brings a permanent number from 001 to 100, the founding rate for as long as the membership lasts, a standing invitation to the annual Founding 100 Forum, and a voice when DUKAAT shapes new programmes, sector clubs and markets.",
            nl: "Founding 100 is de status die DUKAAT naast hun niveau geeft aan honderd van zijn meest invloedrijke leden. Die omvat een vast nummer van 001 tot 100, het oprichterstarief zolang het lidmaatschap loopt, een vaste uitnodiging voor het jaarlijkse Founding 100 Forum, en een stem wanneer DUKAAT nieuwe programma’s, sectorclubs en markten vormgeeft.",
            ar: "Founding 100 صفةٌ يمنحها DUKAAT، إلى جانب مستوى العضوية، لمئةٍ من أكثر الشركات الأعضاء تأثيراً. وتمنح صاحبها رقماً دائماً من 001 إلى 100، وسعر التأسيس ما دامت عضويته قائمة، ودعوةً دائمة إلى منتدى Founding 100 السنوي، وصوتاً مسموعاً حين يرسم DUKAAT برامجه وأنديته القطاعية وأسواقه الجديدة.",
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "Numbers and terms, *in writing.*", nl: "Aantallen en termijnen, *op papier.*", ar: "أعدادٌ ومهل، *مكتوبة.*" },
        links: [
          { href: "membership/guarantees", label: { en: "Our commitments", nl: "Onze toezeggingen", ar: "التزاماتنا" } },
          { href: "membership/founding-100", label: { en: "Founding 100", nl: "Founding 100", ar: "Founding 100" } },
        ],
      },
    ],
  },

  "membership/guarantees": {
    masthead: { variant: "portrait", photo: "gua-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "We put our commitments in writing. Not as a promise about the outcome of a deal — no one can honestly promise that — but as what DUKAAT itself does for you: how quickly we reply, and how many introductions and searches we make on your behalf.",
          nl: "Wij zetten onze toezeggingen op papier. Niet als belofte over de uitkomst van een deal — dat kan niemand eerlijk beloven — maar als wat DUKAAT zelf voor u doet: hoe snel wij antwoorden, en hoeveel introducties en zoekopdrachten wij voor u verzorgen.",
          ar: "نضع التزاماتنا كتابةً، لا بوصفها وعداً بنتيجة صفقة — فذلك ما لا يستطيع أحدٌ أن يعد به بصدق — بل بوصفها ما يقوم به DUKAAT نفسه من أجلك: سرعة ردّنا، وعدد التعريفات وعمليات البحث التي نجريها لحسابك.",
        },
      },
      {
        kind: "tiers",
        label: { en: "Per level", nl: "Per niveau", ar: "بحسب المستوى" },
        heading: { en: "What you can *hold us to.*", nl: "Waaraan u ons *kunt houden.*", ar: "ما يمكنك أن *تحاسبنا عليه.*" },
        intro: {
          en: "Each level has its own commitments, each one stated as a number, a term or a place — never as an intention. Each level also keeps the commitments of the level before it.",
          nl: "Elk niveau heeft eigen toezeggingen, elk uitgedrukt in een aantal, een termijn of een plaats — nooit als voornemen. Elk niveau behoudt daarnaast de toezeggingen van het niveau ervoor.",
          ar: "لكل مستوى التزاماته، وكلٌّ منها محدّدٌ بعددٍ أو مهلةٍ أو مقعد — لا بمجرّد نيّة. ويحتفظ كل مستوى كذلك بالتزامات المستوى الذي قبله.",
        },
        tiers: [
          {
            name: "Member",
            tagline: {
              en: "The baseline every member can hold us to.",
              nl: "De basis waaraan elk lid ons kan houden.",
              ar: "الحدّ الأدنى الذي يحق لكل عضو أن يحاسبنا عليه.",
            },
            items: [
              { en: "A profile in the member directory", nl: "Een profiel in het Ledenregister", ar: "ملف في دليل الأعضاء" },
              { en: "Newsletters, selected reports and opportunities", nl: "Nieuwsbrieven, geselecteerde rapporten en kansen", ar: "النشرات الإخبارية، وتقارير وفرص مختارة" },
            ],
            promise: [
              {
                en: "Your directory profile published within 10 working days of admission",
                nl: "Uw profiel in het Ledenregister gepubliceerd binnen 10 werkdagen na toelating",
                ar: "نشر ملفك في دليل الأعضاء خلال 10 أيام عمل من قبولك",
              },
              {
                en: "A reply to any enquiry within 5 working days",
                nl: "Antwoord op elke vraag binnen 5 werkdagen",
                ar: "الردّ على أي استفسار خلال 5 أيام عمل",
              },
              {
                en: "[48] opportunity newsletters per year",
                nl: "[48] nieuwsbrieven met kansen per jaar",
                ar: "نشرات بالفرص، بواقع [48] في السنة",
              },
            ],
          },
          {
            name: "Professional",
            tagline: {
              en: "Introductions and searches, counted.",
              nl: "Introducties en zoekopdrachten, geteld.",
              ar: "تعريفات وعمليات بحث، بأعدادٍ محدّدة.",
            },
            items: [
              { en: "Everything in Member", nl: "Alles van Member", ar: "جميع مزايا Member" },
              { en: "Searches, buyer requests and business introductions", nl: "Zoektochten, inkoopaanvragen en zakelijke introducties", ar: "عمليات البحث، وطلبات الشراء، والتعريفات التجارية" },
            ],
            promise: [
              {
                en: "[2] qualified business introductions per year",
                nl: "[2] gekwalificeerde zakelijke introducties per jaar",
                ar: "تعريفات تجارية مؤهَّلة، بواقع [2] في السنة",
              },
              {
                en: "[2] supplier or distributor searches, answered within [15] working days",
                nl: "[2] zoektochten naar een leverancier of distributeur, beantwoord binnen [15] werkdagen",
                ar: "عمليات بحث عن مورّد أو موزّع، عددها [2]، يُجاب عنها خلال [15] يوم عمل",
              },
              {
                en: "A reply to any enquiry within 3 working days",
                nl: "Antwoord op elke vraag binnen 3 werkdagen",
                ar: "الردّ على أي استفسار خلال 3 أيام عمل",
              },
            ],
          },
          {
            name: "Executive",
            tagline: {
              en: "Introductions with us on the call.",
              nl: "Introducties met ons aan de lijn.",
              ar: "تعريفات نحضر فيها المكالمة معك.",
            },
            items: [
              { en: "Everything in Professional", nl: "Alles van Professional", ar: "جميع مزايا Professional" },
              { en: "A dedicated relationship contact and Business Concierge", nl: "Een eigen relatiebeheerder en Business Concierge", ar: "مسؤول علاقة مخصّص وBusiness Concierge" },
            ],
            promise: [
              {
                en: "[6] qualified introductions per year, with us present on the first call",
                nl: "[6] gekwalificeerde introducties per jaar, waarbij wij aanwezig zijn bij het eerste gesprek",
                ar: "تعريفات مؤهَّلة، بواقع [6] في السنة، مع حضورنا المكالمة الأولى",
              },
              {
                en: "A named contact, replying within 1 working day",
                nl: "Een contactpersoon op naam, die antwoordt binnen 1 werkdag",
                ar: "مسؤول اتصال محدّد بالاسم، يردّ خلال يوم عمل واحد",
              },
              {
                en: "A guaranteed place on [one trade mission] per year",
                nl: "Een gegarandeerde plaats op [één handelsmissie] per jaar",
                ar: "مقعد مضمون في [بعثة تجارية واحدة] كل سنة",
              },
              {
                en: "[6] advisory hours, from DUKAAT or its specialist network",
                nl: "[6] adviesuren, van DUKAAT of uit ons netwerk van specialisten",
                ar: "ساعات استشارية عددها [6]، من DUKAAT أو من شبكة المختصين لدينا",
              },
            ],
          },
        ],
        note: {
          en: "These commitments concern DUKAAT’s own service, never the outcome of a deal. We do not take custody of members’ funds, we do not act as a bank or payment provider, and we do not guarantee any transaction between members.",
          nl: "Deze toezeggingen gaan over de dienstverlening van DUKAAT zelf, nooit over de uitkomst van een deal. Wij nemen geen gelden van leden in bewaring, wij treden niet op als bank of betaaldienstverlener, en wij garanderen geen enkele transactie tussen leden.",
          ar: "تتعلق هذه الالتزامات بخدمة DUKAAT نفسها، لا بنتيجة أي صفقة. نحن لا نحتفظ بأموال الأعضاء، ولا نعمل كمصرف أو مزوّد خدمات دفع، ولا نضمن أي معاملة بين الأعضاء.",
        },
      },
      {
        kind: "statement",
        text: {
          en: "The effort to connect is always there. What two parties make of it is theirs.",
          nl: "De inspanning om te verbinden is er altijd. Wat twee partijen ervan maken, is aan hen.",
          ar: "الجهد في الربط حاضرٌ دائماً. أما ما يصنعه الطرفان منه فشأنهما.",
        },
        note: {
          en: "Our commitments cover our own work — replying, searching, introducing — never the outcome.",
          nl: "Onze toezeggingen gaan over ons eigen werk — antwoorden, zoeken, introduceren — nooit over de uitkomst.",
          ar: "تتعلق التزاماتنا بعملنا نحن — الرد، والبحث، والتعريف — لا بالنتيجة أبداً.",
        },
      },
      {
        kind: "prose",
        label: { en: "Why in writing", nl: "Waarom op papier", ar: "لماذا كتابةً" },
        heading: { en: "Commitments, *not promises.*", nl: "Toezeggingen, *geen beloften.*", ar: "التزامات، *لا وعود.*" },
        body: [
          {
            en: "A promise costs nothing to make. A commitment has a number and a term, and it is written where you can read it and hold us to it. That is the point.",
            nl: "Een belofte kost niets. Een toezegging heeft een aantal en een termijn, en staat op papier waar u haar kunt nalezen en ons eraan kunt houden. Daar gaat het om.",
            ar: "الوعد لا يكلّف صاحبه شيئاً. أما الالتزام فله عددٌ ومهلة، وهو مكتوب حيث يمكنك أن تقرأه وتحاسبنا عليه. وهذا بيت القصيد.",
          },
          {
            en: "It also keeps us precise about what we can stand behind. We can commit to how fast we reply, how many introductions we make and how many searches we complete, and by when. A qualified introduction, for us, is one to a party we have checked and whose interest we have tested, with a written brief to both sides — never a phone number passed on. What two parties do after they meet is theirs to decide.",
            nl: "Het dwingt ons ook tot precisie over wat wij kunnen waarmaken. Wij kunnen toezeggen hoe snel wij antwoorden, hoeveel introducties wij doen en hoeveel zoekopdrachten wij afronden, en binnen welke termijn. Een gekwalificeerde introductie is bij ons een introductie bij een partij die wij hebben gecontroleerd en van wie wij de interesse hebben getoetst, met een schriftelijke briefing aan beide kanten — nooit een doorgegeven telefoonnummer. Wat twee partijen daarna doen, beslissen zij zelf.",
            ar: "ويُلزمنا ذلك أيضاً بالدقة فيما نستطيع الوفاء به. يمكننا أن نلتزم بسرعة ردّنا، وبعدد التعريفات التي نقدّمها وعمليات البحث التي ننجزها، وبموعد ذلك كله. والتعريف المؤهَّل عندنا تعريفٌ بطرفٍ تحقّقنا منه واختبرنا اهتمامه، مع ملخّصٍ مكتوب للطرفين — لا رقمُ هاتفٍ نمرّره. أما ما يفعله الطرفان بعد لقائهما، فقرارٌ يعود إليهما وحدهما.",
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "Who these commitments *are for.*", nl: "Voor wie deze toezeggingen *gelden.*", ar: "لمن *هذه الالتزامات.*" },
        links: [
          { href: "membership/who-for", label: { en: "Who it is for — and who not", nl: "Voor wie — en voor wie niet", ar: "لمن العضوية — ولمن لا" } },
          { href: "membership/levels", label: { en: "The three levels", nl: "De drie niveaus", ar: "المستويات الثلاثة" } },
        ],
      },
    ],
  },

  "membership/who-for": {
    masthead: { variant: "band", photo: "who-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Membership does not depend on the size of your company. It depends on what you do: whether you genuinely trade between the Netherlands, Europe and the Arab world, and whether we can verify it.",
          nl: "Lidmaatschap hangt niet af van de omvang van uw bedrijf. Het hangt af van wat u doet: of u werkelijk handelt tussen Nederland, Europa en de Arabische wereld, en of wij dat kunnen verifiëren.",
          ar: "لا تتوقف العضوية على حجم شركتك، بل على ما تفعله: أن تتاجر فعلاً بين هولندا وأوروبا والعالم العربي، وأن نتمكّن من التحقق من ذلك.",
        },
      },
      {
        kind: "contrast",
        label: { en: "Admission", nl: "Toelating", ar: "القبول" },
        heading: { en: "Whom we *admit.*", nl: "Wie wij *toelaten.*", ar: "مَن *نقبل.*" },
        a: {
          title: { en: "DUKAAT is for you if", nl: "DUKAAT is voor u als", ar: "DUKAAT مناسبٌ لك إذا" },
          items: [
            {
              en: "You own or lead a registered company, or you are a decision-maker within one.",
              nl: "U eigenaar of bestuurder bent van een ingeschreven bedrijf, of daarbinnen beslissingen neemt.",
              ar: "كنت تملك شركة مسجّلة أو تديرها، أو كنت صاحب قرار فيها.",
            },
            {
              en: "You are actively buying, selling, manufacturing, distributing or investing across the Netherlands, Europe and the Arab world — or are seriously preparing to.",
              nl: "U actief inkoopt, verkoopt, produceert, distribueert of investeert tussen Nederland, Europa en de Arabische wereld — of u daar serieus op voorbereidt.",
              ar: "كنت تشتري أو تبيع أو تصنّع أو توزّع أو تستثمر فعلاً بين هولندا وأوروبا والعالم العربي — أو تستعد لذلك بجدية.",
            },
            {
              en: "You can be verified: a commercial registration, a real trading history, and references we can call.",
              nl: "U verifieerbaar bent: een inschrijving in het handelsregister, een werkelijke handelsgeschiedenis, en referenties die wij kunnen bellen.",
              ar: "كان من الممكن التحقق منك: سجلٌّ تجاري، وتاريخٌ فعلي في التجارة، ومراجع يمكننا الاتصال بها.",
            },
          ],
        },
        b: {
          title: { en: "DUKAAT is not for", nl: "DUKAAT is niet voor", ar: "DUKAAT ليس موجّهاً إلى" },
          items: [
            {
              en: "Job seekers, or those looking for general networking.",
              nl: "Werkzoekenden, of wie in het algemeen wil netwerken.",
              ar: "الباحثين عن وظيفة، أو عن شبكة معارف عامة.",
            },
            {
              en: "Intermediaries with no verifiable transactions.",
              nl: "Tussenpersonen zonder aantoonbare transacties.",
              ar: "الوسطاء الذين ليست لهم معاملات يمكن التحقق منها.",
            },
            {
              en: "Anyone seeking a directory listing without intending to do business.",
              nl: "Wie een vermelding in een register zoekt, zonder de bedoeling zaken te doen.",
              ar: "مَن يريد مجرّد إدراجٍ في دليل، دون نيّةٍ للتعامل التجاري.",
            },
          ],
        },
        note: {
          en: "Every nomination and every application is reviewed against these criteria.",
          nl: "Elke voordracht en elke aanmelding wordt aan deze criteria getoetst.",
          ar: "يُراجَع كل ترشيح وكل طلب انضمام وفق هذه المعايير.",
        },
      },
      {
        kind: "statement",
        text: {
          en: "We review every company before admission, whichever way it reaches us.",
          nl: "Wij beoordelen elk bedrijf vóór toelating, langs welke weg het ook bij ons komt.",
          ar: "نراجع كل شركة قبل قبولها، أيّاً كان الطريق الذي وصلت منه إلينا.",
        },
        note: {
          en: "A nomination, an invitation or an application opens the conversation; the review decides.",
          nl: "Een voordracht, uitnodiging of aanmelding opent het gesprek; de beoordeling beslist.",
          ar: "الترشيح أو الدعوة أو طلب الانضمام يفتح باب الحديث؛ أما القرار فللمراجعة.",
        },
      },
      {
        kind: "register",
        cols: 2,
        label: { en: "Activity, not size", nl: "Activiteit, geen omvang", ar: "النشاط، لا الحجم" },
        heading: { en: "The companies *we work with.*", nl: "De bedrijven *waarmee wij werken.*", ar: "الشركات *التي نعمل معها.*" },
        intro: {
          en: "Large or small, they share one thing: they make, move, sell or finance something between the two sides.",
          nl: "Groot of klein, zij hebben één ding gemeen: zij maken, vervoeren, verkopen of financieren iets tussen beide kanten.",
          ar: "كبيرةً كانت أو صغيرة، يجمعها أمر واحد: أنها تصنع شيئاً أو تنقله أو تبيعه أو تموّله بين الضفتين.",
        },
        items: [
          {
            title: { en: "Manufacturers and producers", nl: "Fabrikanten en producenten", ar: "المصنّعون والمنتجون" },
            body: {
              en: "Factories and growers with the capacity to export, looking for buyers, distributors or private-label partners on the other side.",
              nl: "Fabrieken en telers met exportcapaciteit, op zoek naar kopers, distributeurs of partners voor huismerkproductie aan de andere kant.",
              ar: "مصانع ومزارع لديها قدرة على التصدير، تبحث عن مشترين أو موزّعين أو شركاء في التصنيع بعلامة خاصة (Private Label) على الضفة الأخرى.",
            },
          },
          {
            title: { en: "Traders and wholesalers", nl: "Handelaren en groothandels", ar: "التجار وتجار الجملة" },
            body: {
              en: "Companies that buy and sell in volume and need verified sources, new buyers, or a quick outlet for surplus stock.",
              nl: "Bedrijven die in volume inkopen en verkopen, en geverifieerde bronnen, nieuwe kopers of een snelle afzet voor overtollige voorraad nodig hebben.",
              ar: "شركات تشتري وتبيع بكميات كبيرة، وتحتاج إلى مصادر موثّقة، أو مشترين جدد، أو منفذ سريع لتصريف فائض المخزون.",
            },
          },
          {
            title: { en: "Importers and exporters", nl: "Importeurs en exporteurs", ar: "المستوردون والمصدّرون" },
            body: {
              en: "Companies moving goods between Europe and the Arab world, for whom documents, customs and payment terms decide whether a shipment works.",
              nl: "Bedrijven die goederen verplaatsen tussen Europa en de Arabische wereld, en voor wie documenten, douane en betalingscondities bepalen of een zending slaagt.",
              ar: "شركات تنقل البضائع بين أوروبا والعالم العربي، ويتوقف نجاح كل شحنة لديها على المستندات والجمارك وشروط الدفع.",
            },
          },
          {
            title: { en: "Distributors and agents", nl: "Distributeurs en agenten", ar: "الموزّعون والوكلاء" },
            body: {
              en: "Companies that carry brands into their market and look for products worth representing, with the principal verified before they commit.",
              nl: "Bedrijven die merken in hun markt brengen en producten zoeken die het vertegenwoordigen waard zijn, met de principaal geverifieerd voordat zij zich binden.",
              ar: "شركات تُدخل العلامات التجارية إلى أسواقها، وتبحث عن منتجات تستحق أن تمثّلها، مع التحقق من صاحب العلامة قبل أي التزام.",
            },
          },
          {
            title: { en: "Investors and project owners", nl: "Investeerders en projecteigenaren", ar: "المستثمرون وأصحاب المشاريع" },
            body: {
              en: "Those with capital looking for real companies and projects, and project owners looking for capital. DUKAAT does not provide investment advice, does not arrange or broker investments, and does not offer securities. Opportunities are presented for information only. Independent legal, financial and technical due diligence remains essential before any investment decision.",
              nl: "Wie kapitaal heeft en echte bedrijven en projecten zoekt, en projecteigenaren die kapitaal zoeken. DUKAAT geeft geen beleggingsadvies, bemiddelt niet bij investeringen en biedt geen effecten aan. Kansen worden uitsluitend ter informatie gepresenteerd. Onafhankelijk juridisch, financieel en technisch onderzoek blijft essentieel vóór elke investeringsbeslissing.",
              ar: "مَن يملكون رأس المال ويبحثون عن شركات ومشاريع حقيقية، وأصحاب مشاريع يبحثون عن رأس المال. لا يقدّم DUKAAT استشارات استثمارية، ولا يرتّب الاستثمارات أو يتوسط فيها، ولا يعرض أوراقاً مالية. تُعرض الفرص للاطلاع فقط. ويبقى الفحص النافي للجهالة القانوني والمالي والفني المستقل ضرورياً قبل أي قرار استثماري.",
            },
          },
          {
            title: { en: "Professional service providers", nl: "Professionele dienstverleners", ar: "مقدّمو الخدمات المهنية" },
            body: {
              en: "Lawyers, tax advisers, accountants, logistics firms and other specialists who serve cross-border trade and work alongside members.",
              nl: "Advocaten, fiscalisten, accountants, logistieke bedrijven en andere specialisten die grensoverschrijdende handel bedienen en naast leden werken.",
              ar: "محامون ومستشارون ضريبيون ومحاسبون وشركات لوجستية وغيرهم من المختصين الذين يخدمون التجارة عبر الحدود ويعملون إلى جانب الأعضاء.",
            },
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "What we check *before admission.*", nl: "Wat wij controleren *vóór toelating.*", ar: "ما نتحقق منه *قبل القبول.*" },
        links: [
          { href: "how-we-work/verification", label: { en: "Verification & admission", nl: "Verificatie & toelating", ar: "التحقق والقبول" } },
          { href: "contact?intent=nominated#intake", label: { en: "I have been nominated", nl: "Ik ben voorgedragen", ar: "تمّت تزكيتي" } },
          { href: "contact?intent=apply#intake", label: { en: "Apply for membership", nl: "Aanmelden als lid", ar: "التقدّم بطلب عضوية" } },
        ],
      },
    ],
  },

  "membership/founding-100": {
    masthead: { variant: "portrait", photo: "f100-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Founding 100 is the status DUKAAT gives to one hundred of its most influential member companies. It sits beside the three levels, it is never held by more than one hundred, and each founding number belongs to one company alone.",
          nl: "Founding 100 is de status die DUKAAT geeft aan honderd van zijn meest invloedrijke leden. Zij staat naast de drie niveaus, wordt nooit door meer dan honderd bedrijven gedragen, en elk oprichtersnummer hoort bij één bedrijf alleen.",
          ar: "Founding 100 صفةٌ يمنحها DUKAAT لمئةٍ من أكثر الشركات الأعضاء تأثيراً. وتقوم إلى جانب المستويات الثلاثة، ولا يحملها أكثر من مئة أبداً، ولكل رقم تأسيسي شركةٌ واحدة لا تشاركها فيه أخرى.",
        },
      },
      {
        kind: "facts",
        label: { en: "The status", nl: "De status", ar: "الصفة" },
        heading: { en: "What a Founding 100 member *holds.*", nl: "Wat een Founding 100-lid *toekomt.*", ar: "ما يحمله *عضو Founding 100.*" },
        items: [
          {
            term: { en: "Number", nl: "Nummer", ar: "الرقم" },
            value: { en: "Permanent, from 001 to 100, never reissued", nl: "Vast, van 001 tot 100, nooit opnieuw uitgegeven", ar: "دائم، من 001 إلى 100، لا يُعاد إصداره أبداً" },
          },
          {
            term: { en: "Rate", nl: "Tarief", ar: "السعر" },
            value: { en: "The founding rate, for as long as you remain a member", nl: "Het oprichterstarief, zolang u lid blijft", ar: "سعر التأسيس، ما دمت عضواً" },
          },
          {
            term: { en: "Card", nl: "Kaart", ar: "البطاقة" },
            value: { en: "A Founding 100 card", nl: "Een Founding 100-kaart", ar: "بطاقة Founding 100" },
          },
          {
            term: { en: "Recognition", nl: "Erkenning", ar: "التميّز" },
            value: { en: "The Founding 100 mark on the member profile", nl: "Het Founding 100-kenmerk op het ledenprofiel", ar: "علامة Founding 100 على ملف العضو" },
          },
          {
            term: { en: "A voice", nl: "Een stem", ar: "صوتٌ مسموع" },
            value: {
              en: "Consulted when DUKAAT shapes new programmes, sector clubs and markets",
              nl: "Geraadpleegd wanneer DUKAAT nieuwe programma’s, sectorclubs en markten vormgeeft",
              ar: "يُستشار حين يرسم DUKAAT برامجه وأنديته القطاعية وأسواقه الجديدة",
            },
          },
          {
            term: { en: "Founding 100 Forum", nl: "Founding 100 Forum", ar: "منتدى Founding 100" },
            value: {
              en: "A standing invitation to the yearly meeting of the hundred with the founders",
              nl: "Een vaste uitnodiging voor de jaarlijkse bijeenkomst van de honderd met de oprichters",
              ar: "دعوة دائمة إلى اللقاء السنوي للمئة مع المؤسسَين",
            },
          },
        ],
      },
      {
        kind: "statement",
        text: {
          en: "Member No. 017 of the Founding 100.",
          nl: "Lid nr. 017 van de Founding 100.",
          ar: "العضو رقم 017 في Founding 100.",
        },
        note: {
          en: "An example of how a Founding 100 member is introduced. The number stays with the company for as long as its membership lasts.",
          nl: "Een voorbeeld van hoe een Founding 100-lid wordt voorgesteld. Het nummer blijft bij het bedrijf zolang het lidmaatschap duurt.",
          ar: "مثالٌ على الطريقة التي يُقدَّم بها عضو Founding 100. ويبقى الرقم للشركة ما دامت عضويتها قائمة.",
        },
      },
      {
        kind: "prose",
        label: { en: "Why it matters", nl: "Waarom het telt", ar: "لماذا يهمّ ذلك" },
        heading: { en: "A number that is *never reissued.*", nl: "Een nummer dat *niemand anders krijgt.*", ar: "رقمٌ *لا يُعاد إصداره أبداً.*" },
        body: [
          {
            en: "A founding number marks the companies that give DUKAAT its weight: leaders in their trade and their market, whose presence makes an introduction count on both sides. It is not bought, and it does not follow the level of membership. That is why it is never given to anyone else: if a Founding 100 membership ends, its number is retired with it.",
            nl: "Een oprichtersnummer markeert de bedrijven die DUKAAT zijn gewicht geven: toonaangevend in hun vak en hun markt, met een aanwezigheid die een introductie aan beide kanten laat tellen. Het is niet te koop, en het volgt niet het niveau van het lidmaatschap. Daarom krijgt niemand anders het: eindigt een Founding 100-lidmaatschap, dan wordt het nummer ingetrokken.",
            ar: "يميّز الرقم التأسيسي الشركات التي تمنح DUKAAT ثقله: شركاتٌ رائدة في قطاعها وسوقها، يمنح حضورها التعريفَ وزناً لدى الطرفين. لا يُشترى، ولا يتبع مستوى العضوية. ولهذا لا يُمنح لأحدٍ سواها: إن انتهت عضويةٌ في Founding 100، طُوي رقمها معها.",
          },
          {
            en: "Founding 100 members are consulted when DUKAAT shapes new programmes, sector clubs and markets, and once a year they meet with the founders at the Founding 100 Forum. It is how a club like this grows well: guided by the companies that know its standard from the inside.",
            nl: "Founding 100-leden worden geraadpleegd wanneer DUKAAT nieuwe programma’s, sectorclubs en markten vormgeeft, en eens per jaar ontmoeten zij de oprichters op het Founding 100 Forum. Zo groeit een club als deze op de juiste manier: geleid door de bedrijven die haar maatstaf van binnenuit kennen.",
            ar: "يُستشار أعضاء Founding 100 حين يرسم DUKAAT برامجه وأنديته القطاعية وأسواقه الجديدة، ويلتقون المؤسسَين مرةً كل عام في منتدى Founding 100. وهكذا ينمو نادٍ كهذا نموّاً سليماً: بتوجيهٍ من الشركات التي تعرف معياره من الداخل.",
          },
        ],
      },
      {
        kind: "next",
        heading: {
          en: "Every founding number begins *with a name.*",
          nl: "Elk oprichtersnummer begint *bij een naam.*",
          ar: "كل رقمٍ تأسيسي يبدأ *باسم.*",
        },
        body: {
          en: "Founding 100 is by invitation: DUKAAT invites the companies it counts among the most influential in their trade and market. Like every member, they are admitted after review.",
          nl: "Founding 100 is op uitnodiging: DUKAAT nodigt de bedrijven uit die het rekent tot de meest invloedrijke in hun vak en markt. Zoals elk lid worden zij na beoordeling toegelaten.",
          ar: "صفة Founding 100 بالدعوة: يدعو DUKAAT الشركات التي يعدّها من الأكثر تأثيراً في قطاعها وسوقها. وتُقبل، كسائر الأعضاء، بعد المراجعة.",
        },
        links: [
          { href: "membership/levels", label: { en: "The three levels", nl: "De drie niveaus", ar: "المستويات الثلاثة" } },
          { href: "network/partners", label: { en: "The Golden Ten", nl: "De Golden Ten", ar: "Golden Ten" } },
        ],
      },
    ],
  },
};
