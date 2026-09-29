import type { PageSet } from "./types";

/**
 * What we do — the group overview and its six pages.
 * Sources: the compagnon's Arabic draft ("ماذا نفعل؟", Business Concierge, DUKAAT Connect, DUKAAT Invest, DUKAAT Advisory),
 * the English content master p.18–21, and the owner's sector bank (brand/fotostijl/DUKAAT-fotostijl.md).
 * Fixed lines kept verbatim: the charging model, the legal line (footer.legal), the investment notice (contact.investNotice),
 * "Technology narrows the search; people verify." DUKAAT advises itself; specialists are available whenever needed.
 * Representation stays generic per region; no personal references to the fiscal-law founder (owner, 29 Sep 2026).
 * Everything is described in the present tense as what DUKAAT offers; no counts, no track record, no "soon".
 */
export const services: PageSet = {
  /* ------------------------------------------------------------------ overview */
  services: {
    masthead: { variant: "band", photo: "services-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Everything DUKAAT does serves one purpose: that a company on one side finds the right counterparty on the other — checked by a person, introduced in writing, and accompanied as far as the first deal.",
          nl: "Alles wat DUKAAT doet, dient één doel: dat een bedrijf aan de ene kant de juiste tegenpartij vindt aan de andere kant — gecontroleerd door een mens, schriftelijk geïntroduceerd en begeleid tot en met de eerste deal.",
          ar: "كل ما يقوم به DUKAAT يخدم غايةً واحدة: أن تجد الشركة في أحد الجانبين الطرفَ المناسب في الجانب الآخر — طرفاً يتحقق منه إنسان، ويُقدَّم إليها كتابةً، مع مرافقتها حتى الصفقة الأولى.",
        },
      },
      {
        kind: "register",
        cols: 2,
        numbered: true,
        label: { en: "The remit", nl: "Het werkterrein", ar: "مجالات عملنا" },
        heading: { en: "Everything we do, *line by line.*", nl: "Alles wat wij doen, *regel voor regel.*", ar: "كل ما نقوم به، *بنداً بنداً.*" },
        intro: {
          en: "We work for our members and partners across a wide field — from a single introduction to a complete market entry.",
          nl: "Wij werken voor onze leden en partners op een breed terrein — van één introductie tot een volledige markttoetreding.",
          ar: "نساعد أعضاءنا وشركاءنا في مجالات متعددة — من تعريفٍ واحد إلى مشروعٍ متكامل لدخول سوقٍ جديدة.",
        },
        items: [
          {
            title: {
              en: "Building relationships between Dutch and Arab business people",
              nl: "Relaties opbouwen tussen Nederlandse en Arabische ondernemers",
              ar: "بناء العلاقات بين أصحاب الأعمال الهولنديين والعرب",
            },
            body: {
              en: "The foundation of everything else: people on both sides who know each other, meet in person and deal in good faith.",
              nl: "Het fundament onder al het andere: mensen aan beide kanten die elkaar kennen, elkaar persoonlijk ontmoeten en te goeder trouw zaken doen.",
              ar: "الأساس الذي يقوم عليه كل ما عداه: أشخاصٌ على الجانبين يعرف بعضهم بعضاً، ويلتقون وجهاً لوجه، ويتعاملون بحسن نية.",
            },
          },
          {
            title: { en: "Connecting buyers and suppliers", nl: "Kopers en leveranciers met elkaar verbinden", ar: "الربط بين المشترين والمورّدين" },
            body: {
              en: "A buyer states a need — product, volume, certificate — and we look for the supplier on the other side who can meet it.",
              nl: "Een koper noemt zijn behoefte — product, volume, certificaat — en wij zoeken aan de andere kant de leverancier die daaraan kan voldoen.",
              ar: "يحدّد المشتري حاجته — المنتج والكمية والشهادة — ونبحث على الضفة الأخرى عن المورّد القادر على تلبيتها.",
            },
          },
          {
            title: { en: "Finding distributors and commercial agents", nl: "Distributeurs en handelsagenten zoeken", ar: "البحث عن موزّعين ووكلاء تجاريين" },
            body: {
              en: "For a product that sells at home and needs someone to carry it into a new market, on terms both sides understand.",
              nl: "Voor een product dat thuis verkoopt en iemand nodig heeft die het een nieuwe markt in brengt, op voorwaarden die beide kanten begrijpen.",
              ar: "لمنتجٍ يُباع في بلده ويحتاج إلى من يحمله إلى سوقٍ جديدة، بشروطٍ يفهمها الطرفان.",
            },
          },
          {
            title: { en: "Finding factories, products and suppliers", nl: "Fabrieken, producten en leveranciers zoeken", ar: "البحث عن مصانع ومنتجات ومورّدين" },
            body: {
              en: "From raw materials to private label: the producer that matches the specification, not the first name a search returns.",
              nl: "Van grondstof tot huismerkproductie: de producent die bij de specificatie past, niet de eerste naam die een zoekopdracht oplevert.",
              ar: "من المواد الأولية إلى التصنيع بعلامة خاصة: المنتِج الذي يطابق المواصفة، لا أول اسمٍ يظهر في نتائج البحث.",
            },
          },
          {
            title: { en: "Presenting products and trade opportunities", nl: "Producten en handelskansen presenteren", ar: "عرض المنتجات والفرص التجارية" },
            body: {
              en: "In DUKAAT Market, members’ products are described by people who have seen them, and shown to members who can act on them.",
              nl: "In DUKAAT Market worden producten van leden beschreven door mensen die ze hebben gezien, en getoond aan leden die er iets mee kunnen.",
              ar: "في سوق DUKAAT يصف منتجاتِ الأعضاء أشخاصٌ رأوها بأعينهم، وتُعرض على أعضاءٍ قادرين على الاستفادة منها.",
            },
          },
          {
            title: {
              en: "Presenting stocklots, surplus stock and liquidations",
              nl: "Partijen, overtollige voorraad en liquidatievoorraad presenteren",
              ar: "عرض دفعات المخزون (Stocklots) وفائض المخزون والتصفيات",
            },
            body: {
              en: "Overstock, factory clearances and cancelled orders that need a buyer quickly, circulated to members through DUKAAT Deal Alert.",
              nl: "Overtollige voorraad, fabrieksopruimingen en geannuleerde orders die snel een koper nodig hebben, onder leden verspreid via DUKAAT Deal Alert.",
              ar: "فائض المخزون وتصفيات المصانع والطلبيات الملغاة التي تحتاج إلى مشترٍ بسرعة، تُعمَّم على الأعضاء عبر DUKAAT Deal Alert.",
            },
          },
          {
            title: { en: "Finding used machinery and equipment", nl: "Gebruikte machines en apparatuur zoeken", ar: "البحث عن الماكينات والمعدات المستعملة" },
            body: {
              en: "Printing presses, packaging machines, food-processing equipment and complete production lines, between Europe and the Arab world.",
              nl: "Drukpersen, verpakkingsmachines, apparatuur voor voedselverwerking en complete productielijnen, tussen Europa en de Arabische wereld.",
              ar: "آلات طباعة، وآلات تعبئة وتغليف، ومعدات لتصنيع الأغذية، وخطوط إنتاج كاملة، بين أوروبا والعالم العربي.",
            },
          },
          {
            title: { en: "Connecting investors with projects", nl: "Investeerders en projecten met elkaar verbinden", ar: "ربط المستثمرين بالمشاريع" },
            body: {
              en: "Companies and projects presented to investors, and a meeting with the developer or project owner where both sides want one. DUKAAT does not provide investment advice, does not arrange or broker investments, and does not offer securities. Opportunities are presented for information only. Independent legal, financial and technical due diligence remains essential before any investment decision.",
              nl: "Bedrijven en projecten, gepresenteerd aan investeerders, en een ontmoeting met de ontwikkelaar of projecteigenaar als beide kanten dat willen. DUKAAT geeft geen beleggingsadvies, bemiddelt niet bij investeringen en biedt geen effecten aan. Kansen worden uitsluitend ter informatie gepresenteerd. Onafhankelijk juridisch, financieel en technisch onderzoek blijft essentieel vóór elke investeringsbeslissing.",
              ar: "شركات ومشاريع تُعرض على المستثمرين، ولقاءٌ مع المطوّر أو صاحب المشروع حين يرغب الطرفان في ذلك. لا يقدّم DUKAAT استشارات استثمارية، ولا يرتّب الاستثمارات أو يتوسط فيها، ولا يعرض أوراقاً مالية. تُعرض الفرص للاطلاع فقط. ويبقى الفحص النافي للجهالة القانوني والمالي والفني المستقل ضرورياً قبل أي قرار استثماري.",
            },
          },
          {
            title: { en: "Supporting companies entering new markets", nl: "Bedrijven begeleiden naar nieuwe markten", ar: "دعم الشركات الراغبة في دخول أسواق جديدة" },
            body: {
              en: "Structure, partner, first order — from the Netherlands into the Arab world, or from the Arab world into the Netherlands and Europe.",
              nl: "Structuur, partner, eerste order — van Nederland naar de Arabische wereld, of van de Arabische wereld naar Nederland en Europa.",
              ar: "الهيكل، والشريك، والطلبية الأولى — من هولندا إلى العالم العربي، أو من العالم العربي إلى هولندا وأوروبا.",
            },
          },
          {
            title: { en: "Organising B2B meetings", nl: "B2B-ontmoetingen organiseren", ar: "تنظيم لقاءات B2B" },
            body: {
              en: "Meetings arranged in advance on the basis of what each company offers and needs, so that no table is set at random.",
              nl: "Gesprekken die vooraf worden ingedeeld op basis van wat elk bedrijf aanbiedt en zoekt, zodat geen tafel toevallig is samengesteld.",
              ar: "لقاءاتٌ تُرتَّب مسبقاً بناءً على ما تقدّمه كل شركة وما تحتاج إليه، فلا تُشكَّل أي طاولةٍ اعتباطاً.",
            },
          },
          {
            title: { en: "Organising exhibitions and conferences", nl: "Beurzen en conferenties organiseren", ar: "تنظيم المعارض والمؤتمرات" },
            body: {
              en: "Trade fairs and sector conferences, including DUKAAT Pavilions: a shared stand where member companies exhibit together inside an international fair.",
              nl: "Vakbeurzen en sectorconferenties, waaronder DUKAAT Pavilions: een gedeelde stand waar leden samen exposeren op een internationale beurs.",
              ar: "معارض تجارية ومؤتمرات قطاعية، ومنها DUKAAT Pavilions: جناحٌ موحّد تعرض فيه شركات الأعضاء معاً داخل معرضٍ دولي.",
            },
          },
          {
            title: { en: "Organising trade delegations and missions", nl: "Handelsdelegaties en missies organiseren", ar: "تنظيم الوفود والبعثات التجارية" },
            body: {
              en: "Discover Netherlands, Discover Dubai, Discover Saudi Arabia and Reverse Buyer Missions — with company visits and meetings arranged in advance.",
              nl: "Discover Netherlands, Discover Dubai, Discover Saudi Arabia en Reverse Buyer Missions — met bedrijfsbezoeken en gesprekken die vooraf zijn geregeld.",
              ar: "Discover Netherlands وDiscover Dubai وDiscover Saudi Arabia وReverse Buyer Missions — مع ترتيب زيارات الشركات واللقاءات مسبقاً.",
            },
          },
          {
            title: { en: "Offering courses, seminars and workshops", nl: "Cursussen, seminars en workshops geven", ar: "تقديم الدورات والندوات وورش العمل" },
            body: {
              en: "The DUKAAT Academy: practical sessions on company formation, tax, VAT, customs, contracts, negotiation and business culture on both sides.",
              nl: "De DUKAAT Academy: praktische sessies over bedrijfsoprichting, belastingen, btw, douane, contracten, onderhandelen en zakencultuur aan beide kanten.",
              ar: "أكاديمية DUKAAT: جلسات عملية في تأسيس الشركات، والضرائب، وضريبة القيمة المضافة، والجمارك، والعقود، والتفاوض، وثقافة الأعمال على الجانبين.",
            },
          },
          {
            title: {
              en: "Introducing legal, tax, financial and marketing advisers",
              nl: "Juridische, fiscale, financiële en marketingadviseurs introduceren",
              ar: "توفير الوصول إلى مستشارين قانونيين وضريبيين وماليين وتسويقيين",
            },
            body: {
              en: "Qualified, independent specialists within the network, introduced by DUKAAT; the engagement itself runs directly between you and the specialist.",
              nl: "Gekwalificeerde, onafhankelijke specialisten uit het netwerk, door DUKAAT geïntroduceerd; de opdracht zelf loopt rechtstreeks tussen u en de specialist.",
              ar: "مختصون مؤهّلون ومستقلون من داخل الشبكة، يعرّفك DUKAAT بهم؛ أما التكليف المهني نفسه فيكون بينك وبين المختص مباشرةً.",
            },
          },
          {
            title: { en: "Providing market information and studies", nl: "Marktinformatie en marktstudies leveren", ar: "تقديم معلومات ودراسات عن الأسواق" },
            body: {
              en: "Market reports, sector reports and opportunity briefs, written for the trade a member is in rather than as general news.",
              nl: "Marktrapporten, sectorrapporten en kansenoverzichten, geschreven voor het vak waarin een lid werkt, niet als algemeen nieuws.",
              ar: "تقارير عن الأسواق، وتقارير قطاعية، وموجزات للفرص، تُكتب للقطاع الذي يعمل فيه العضو، لا على هيئة أخبارٍ عامة.",
            },
          },
          {
            title: {
              en: "Helping companies understand the other market’s business culture",
              nl: "Inzicht geven in de zakencultuur van de andere markt",
              ar: "مساعدة الشركات على فهم ثقافة الأعمال في السوق الأخرى",
            },
            body: {
              en: "Decision-making, meeting etiquette, the pace of a negotiation: we prepare each side for how the other works, before it costs a deal.",
              nl: "Besluitvorming, omgangsvormen aan tafel, het tempo van een onderhandeling: wij bereiden elke kant voor op hoe de andere werkt, voordat het een deal kost.",
              ar: "آليات اتخاذ القرار، وآداب الاجتماعات، وإيقاع التفاوض: نُعِدّ كل طرفٍ لطريقة عمل الطرف الآخر، قبل أن يكلّفه ذلك صفقة.",
            },
          },
        ],
      },
      { kind: "routes" },
      {
        kind: "index",
        label: { en: "The services", nl: "De diensten", ar: "الخدمات" },
        heading: { en: "Each service, *in detail.*", nl: "Elke dienst, *in detail.*", ar: "كل خدمة، *بالتفصيل.*" },
      },
      {
        kind: "contrast",
        label: { en: "DUKAAT Connect", nl: "DUKAAT Connect", ar: "DUKAAT Connect" },
        heading: { en: "The right people, *not by chance.*", nl: "De juiste mensen, *niet bij toeval.*", ar: "الأشخاص المناسبون، *لا بالمصادفة.*" },
        intro: {
          en: "In DUKAAT Connect, each member defines two things: what they offer and what they need. We identify the counterparties that fit, and a person reviews every match before it reaches you.",
          nl: "In DUKAAT Connect legt elk lid twee dingen vast: wat het aanbiedt en wat het zoekt. Wij zoeken de tegenpartijen die daarbij passen, en een mens beoordeelt elke match voordat die u bereikt.",
          ar: "في DUKAAT Connect يحدّد كل عضو أمرين: ما يقدّمه، وما يبحث عنه. ثم نرصد الأطراف المقابلة التي تناسبه، ويراجع إنسانٌ كل مطابقة قبل أن تصلك.",
        },
        a: {
          title: { en: "I offer", nl: "Ik bied", ar: "ما أقدّمه" },
          items: [
            { en: "Products and production capacity", nl: "Producten en productiecapaciteit", ar: "منتجات وطاقة إنتاجية" },
            { en: "Stock ready to ship", nl: "Voorraad die direct leverbaar is", ar: "مخزون جاهز للشحن" },
            { en: "Private-label manufacturing", nl: "Huismerkproductie", ar: "تصنيع بعلامة خاصة (Private Label)" },
            { en: "Distribution in my market", nl: "Distributie in mijn markt", ar: "التوزيع في سوقي" },
            { en: "A project that needs capital", nl: "Een project dat kapitaal zoekt", ar: "مشروع يحتاج إلى رأس مال" },
            { en: "Expertise and professional services", nl: "Expertise en professionele diensten", ar: "خبرة وخدمات مهنية" },
          ],
        },
        b: {
          title: { en: "I need", nl: "Ik zoek", ar: "ما أبحث عنه" },
          items: [
            { en: "A distributor or agent", nl: "Een distributeur of agent", ar: "موزّع أو وكيل" },
            { en: "A verified supplier", nl: "Een geverifieerde leverancier", ar: "مورّد موثّق" },
            { en: "Buyers for a product or lot", nl: "Kopers voor een product of partij", ar: "مشترون لمنتجٍ أو لدفعة مخزون" },
            { en: "A partner in a new market", nl: "Een partner in een nieuwe markt", ar: "شريك في سوق جديدة" },
            { en: "Capital for a project", nl: "Kapitaal voor een project", ar: "رأس مال لمشروع" },
            { en: "A specialist adviser", nl: "Een gespecialiseerde adviseur", ar: "مستشار متخصص" },
          ],
        },
        note: {
          en: "Technology narrows the search; people verify.",
          nl: "Technologie verkleint het zoekveld; mensen verifiëren.",
          ar: "التقنية تضيّق البحث؛ والبشر يتحققون.",
        },
      },
      {
        kind: "register",
        variant: "quotes",
        label: { en: "Business Concierge", nl: "Business Concierge", ar: "Business Concierge" },
        heading: { en: "Tell us *what you need.*", nl: "Vertel ons *wat u nodig hebt.*", ar: "أخبرنا *بما تحتاج إليه.*" },
        intro: {
          en: "Instead of spending hours in databases, a member sends one clear sentence, like the examples below. DUKAAT helps determine the appropriate path based on the service and membership level.",
          nl: "In plaats van uren in databases te zoeken, stuurt een lid één heldere zin, zoals de voorbeelden hieronder. DUKAAT helpt de juiste route te bepalen, op basis van de dienst en het niveau van het lidmaatschap.",
          ar: "بدل أن يُضيّع العضو ساعاتٍ في البحث داخل قواعد البيانات، يرسل جملةً واحدة واضحة، كالأمثلة أدناه. ويساعد فريق DUKAAT على تحديد المسار المناسب وفق الخدمة ومستوى العضوية.",
        },
        items: [
          {
            title: {
              en: "I need a distributor in the Gulf.",
              nl: "Ik zoek een distributeur in de Golf.",
              ar: "أريد موزّعاً في الخليج.",
            },
            body: {
              en: "A distributor search: your product and terms first, then candidates with the right channels, each checked by a person before you see a name.",
              nl: "Een zoektocht naar een distributeur: eerst uw product en voorwaarden, dan kandidaten met de juiste kanalen, elk door een mens gecontroleerd voordat u een naam ziet.",
              ar: "بحثٌ عن موزّع: منتجك وشروطك أولاً، ثم مرشّحون لديهم القنوات المناسبة، يتحقق إنسانٌ من كلٍّ منهم قبل أن ترى اسمه.",
            },
          },
          {
            title: {
              en: "I need a paper supplier in Europe.",
              nl: "Ik zoek een papierleverancier in Europa.",
              ar: "أحتاج إلى مورّد ورق في أوروبا.",
            },
            body: {
              en: "A supplier search: grade, volume and certificates set down precisely, then producers — and stocklots — that meet them.",
              nl: "Een zoektocht naar een leverancier: kwaliteit, volume en certificaten precies vastgelegd, daarna producenten — en partijen — die eraan voldoen.",
              ar: "بحثٌ عن مورّد: الصنف والكمية والشهادات محدّدةً بدقة، ثم منتِجون — ودفعات مخزون — تستوفيها.",
            },
          },
          {
            title: {
              en: "I am looking for a manufacturer.",
              nl: "Ik zoek een fabrikant.",
              ar: "أبحث عن مصنع.",
            },
            body: {
              en: "A sourcing brief: what is to be made, in what quantity and under whose label, then factories that can make it.",
              nl: "Een inkoopopdracht: wat er gemaakt moet worden, in welke hoeveelheid en onder wiens merk, daarna fabrieken die het kunnen maken.",
              ar: "طلب توريد: ما المطلوب تصنيعه، وبأي كمية، وتحت أي علامة تجارية، ثم مصانع قادرة على تصنيعه.",
            },
          },
          {
            title: {
              en: "I want to enter the Dutch market.",
              nl: "Ik wil de Nederlandse markt betreden.",
              ar: "أريد دخول السوق الهولندية.",
            },
            body: {
              en: "A market-entry file: structure, tax and customs position, a partner on the ground, and the first order.",
              nl: "Een markttoetredingsdossier: structuur, fiscale en douanepositie, een partner ter plaatse, en de eerste order.",
              ar: "ملفّ لدخول السوق: الهيكل، والوضع الضريبي والجمركي، وشريكٌ على الأرض، والطلبية الأولى.",
            },
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "How we work, and *how we charge.*", nl: "Hoe wij werken, en *hoe wij factureren.*", ar: "كيف نعمل، *وكيف نحتسب أتعابنا.*" },
        body: {
          en: "Membership is an annual subscription. Project services (market entry, supplier search, representation) are quoted per engagement in writing. No hidden commissions.",
          nl: "Het lidmaatschap is een jaarabonnement. Projectdiensten (markttoetreding, leverancierszoektocht, vertegenwoordiging) worden per opdracht schriftelijk geoffreerd. Geen verborgen commissies.",
          ar: "العضوية اشتراك سنوي. خدمات المشاريع (دخول الأسواق، البحث عن مورّدين، التمثيل) تُعرض أسعارها كتابةً لكل مهمة على حدة. لا عمولات خفية.",
        },
        links: [
          { href: "how-we-work", label: { en: "How we work", nl: "Zo werken wij", ar: "كيف نعمل" } },
          { href: "how-we-work/fees", label: { en: "How we charge", nl: "Hoe wij factureren", ar: "كيف نحتسب أتعابنا" } },
          { href: "membership", label: { en: "Membership", nl: "Lidmaatschap", ar: "العضوية" } },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ sourcing & distribution */
  "services/trade": {
    masthead: { variant: "portrait", photo: "trade-samples" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "The right supplier, distributor or buyer often exists already — on the other side, out of sight. We find that party, check it, and introduce you in writing, from the Netherlands and Europe to the Arab world and back.",
          nl: "De juiste leverancier, distributeur of koper bestaat vaak al — aan de andere kant, buiten beeld. Wij vinden die partij, controleren haar en introduceren u schriftelijk, van Nederland en Europa naar de Arabische wereld en terug.",
          ar: "كثيراً ما يكون المورّد أو الموزّع أو المشتري المناسب موجوداً بالفعل — على الضفة الأخرى، بعيداً عن الأنظار. نجد هذا الطرف، ونتحقق منه، ونعرّفك به كتابةً، من هولندا وأوروبا إلى العالم العربي وبالعكس.",
        },
      },
      {
        kind: "chapter",
        label: { en: "What we look for", nl: "Wat wij zoeken", ar: "ما نبحث عنه" },
        heading: { en: "The party *on the other side.*", nl: "De partij *aan de andere kant.*", ar: "الطرف *على الضفة الأخرى.*" },
        intro: {
          en: "Every search starts from your commercial need, stated precisely, and has one aim: a named counterparty you can speak to.",
          nl: "Elke zoektocht begint bij uw commerciële behoefte, precies omschreven, en heeft één doel: een tegenpartij met naam en toenaam, die u zelf kunt spreken.",
          ar: "يبدأ كل بحث من حاجتك التجارية محدّدةً بدقة، وغايته واحدة: طرفٌ مقابل محدّدٌ بالاسم، تتحدث إليه بنفسك.",
        },
        items: [
          {
            photo: "trade-supplier",
            title: { en: "A supplier", nl: "Een leverancier", ar: "مورّد" },
            body: {
              en: "You know the specification, the volume and the certificates you need. We look for the producer who can meet them, and check registration, activity and export experience before you hear a name.",
              nl: "U kent de specificatie, het volume en de certificaten die u nodig hebt. Wij zoeken de producent die daaraan kan voldoen, en controleren inschrijving, activiteit en exportervaring voordat u een naam hoort.",
              ar: "تعرف المواصفة والكمية والشهادات التي تحتاج إليها. نبحث عن المنتِج القادر على تلبيتها، ونتحقق من سجله التجاري ونشاطه وخبرته في التصدير قبل أن تسمع اسمه.",
            },
          },
          {
            photo: "trade-distributor",
            title: { en: "A distributor or agent", nl: "Een distributeur of agent", ar: "موزّع أو وكيل تجاري" },
            body: {
              en: "Your product sells at home and needs a seller on the other side. We look for distributors and commercial agents with the right channels, and brief them in writing on your product before the first call.",
              nl: "Uw product verkoopt thuis en heeft aan de andere kant een verkoper nodig. Wij zoeken distributeurs en handelsagenten met de juiste kanalen, en informeren hen schriftelijk over uw product vóór het eerste gesprek.",
              ar: "منتجك يُباع في بلدك ويحتاج إلى من يبيعه على الضفة الأخرى. نبحث عن موزّعين ووكلاء تجاريين لديهم القنوات المناسبة، ونُطلعهم على منتجك كتابةً قبل المكالمة الأولى.",
            },
          },
          {
            photo: "trade-buyer",
            title: { en: "A buyer", nl: "Een koper", ar: "مشترٍ" },
            body: {
              en: "You have goods, stock or capacity that should reach new buyers on the other side. We look for importers, wholesalers and retail chains that buy what you make, in the volumes you supply.",
              nl: "U hebt goederen, voorraad of capaciteit die nieuwe kopers aan de andere kant moeten bereiken. Wij zoeken importeurs, groothandels en winkelketens die kopen wat u maakt, in de volumes die u levert.",
              ar: "لديك بضائع أو مخزون أو طاقة إنتاجية ينبغي أن تصل إلى مشترين جدد على الضفة الأخرى. نبحث عن مستوردين وتجار جملة وسلاسل متاجر تجزئة يشترون ما تصنعه، بالكميات التي توفّرها.",
            },
          },
        ],
      },
      {
        kind: "steps",
        label: { en: "The method", nl: "De werkwijze", ar: "طريقة العمل" },
        heading: { en: "How a search *runs.*", nl: "Hoe een zoektocht *verloopt.*", ar: "كيف يجري *البحث.*" },
        intro: {
          en: "Technology narrows the search; people verify.",
          nl: "Technologie verkleint het zoekveld; mensen verifiëren.",
          ar: "التقنية تضيّق البحث؛ والبشر يتحققون.",
        },
        items: [
          {
            title: { en: "Your brief", nl: "Uw opdracht", ar: "طلبك" },
            body: {
              en: "You state the need precisely: product, specification, volume, target market, certificates, and the terms you can offer. Where something is unclear, we ask before we search.",
              nl: "U omschrijft de behoefte precies: product, specificatie, volume, doelmarkt, certificaten en de voorwaarden die u kunt bieden. Is iets onduidelijk, dan vragen wij door voordat wij zoeken.",
              ar: "تحدّد حاجتك بدقة: المنتج، والمواصفة، والكمية، والسوق المستهدفة، والشهادات، والشروط التي تستطيع تقديمها. وإن كان في الطلب ما هو غير واضح، سألنا عنه قبل أن نبدأ البحث.",
            },
          },
          {
            title: { en: "The search", nl: "De zoektocht", ar: "البحث" },
            body: {
              en: "Inside the network and beyond it, on both sides. Technology narrows the field to the candidates worth a closer look; it does not make the choice.",
              nl: "Binnen het netwerk en daarbuiten, aan beide kanten. Technologie brengt het veld terug tot de kandidaten die een nadere blik waard zijn; de keuze maakt zij niet.",
              ar: "داخل الشبكة وخارجها، على الجانبين. تُضيّق التقنية الدائرة لتقتصر على المرشّحين الجديرين بنظرةٍ أدق؛ أما الاختيار فلا تقوم به.",
            },
          },
          {
            title: { en: "A person verifies", nl: "Een mens verifieert", ar: "إنسانٌ يتحقق" },
            body: {
              en: "Each candidate is checked by a person: registration, activity, references, and whether they genuinely trade in what you need. Those that do not hold up are dropped.",
              nl: "Elke kandidaat wordt door een mens gecontroleerd: inschrijving, activiteit, referenties, en of hij werkelijk handelt in wat u zoekt. Wie de toets niet doorstaat, valt af.",
              ar: "يتحقق إنسانٌ من كل مرشّح: السجل التجاري، والنشاط، والمراجع، وهل يتاجر فعلاً فيما تحتاج إليه. ومن لا يصمد أمام التحقق يُستبعد.",
            },
          },
          {
            title: { en: "A shortlist, not a list", nl: "Een selectie, geen lijst", ar: "نخبةٌ مختارة، لا قائمة" },
            body: {
              en: "You receive a short selection, with a written brief on each party: who they are, what they do, and why they fit. We do not send lists.",
              nl: "U ontvangt een korte selectie, met bij elke partij een schriftelijke toelichting: wie zij is, wat zij doet en waarom zij past. Wij sturen geen lijsten.",
              ar: "تتلقى عدداً محدوداً من الأطراف المختارة، مع ملخّصٍ مكتوب عن كلٍّ منها: من هو، وماذا يفعل، ولماذا يناسبك. نحن لا نرسل قوائم.",
            },
          },
          {
            title: { en: "Introduction, and after", nl: "Introductie, en daarna", ar: "التعريف، وما بعده" },
            body: {
              en: "We introduce both sides in writing and join the first call where needed, then stay close until the first shipment lands. From there, the two of you deal directly.",
              nl: "Wij introduceren beide kanten schriftelijk, zitten waar nodig bij het eerste gesprek en blijven betrokken tot de eerste zending is geland. Daarna doet u rechtstreeks zaken met elkaar.",
              ar: "نعرّف كلاً من الطرفين بالآخر كتابةً، ونحضر المكالمة الأولى عند الحاجة، ونبقى قريبين حتى تصل الشحنة الأولى. بعد ذلك يتعامل الطرفان مباشرةً.",
            },
          },
        ],
      },
      {
        kind: "terms",
        label: { en: "Sectors", nl: "Sectoren", ar: "القطاعات" },
        heading: { en: "The sectors *we work across.*", nl: "De sectoren *waarin wij werken.*", ar: "القطاعات *التي نعمل فيها.*" },
        intro: {
          en: "Sourcing and distribution are not tied to one trade. DUKAAT searches across these sectors, in both directions.",
          nl: "Inkoop en distributie zijn niet aan één vak gebonden. DUKAAT zoekt in deze sectoren, in beide richtingen.",
          ar: "لا يقتصر التوريد والتوزيع على قطاعٍ واحد. يبحث DUKAAT في هذه القطاعات، وفي الاتجاهين.",
        },
        items: [
          { en: "Food & agriculture", nl: "Voeding & landbouw", ar: "الغذاء والزراعة" },
          { en: "Agricultural machinery", nl: "Landbouwmachines", ar: "الآلات الزراعية" },
          { en: "Trucks & trailers", nl: "Vrachtwagens & opleggers", ar: "الشاحنات والمقطورات" },
          { en: "Cars & motorcycles", nl: "Auto’s & motorfietsen", ar: "السيارات والدراجات النارية" },
          { en: "Machinery & industry", nl: "Machines & industrie", ar: "الآلات والصناعة" },
          { en: "Construction & natural stone", nl: "Bouw & natuursteen", ar: "البناء والحجر الطبيعي" },
          { en: "Seeds & horticulture", nl: "Zaden & tuinbouw", ar: "البذور والبستنة" },
          { en: "Textiles", nl: "Textiel", ar: "المنسوجات" },
          { en: "Furniture & interiors", nl: "Meubels & interieur", ar: "الأثاث والديكور الداخلي" },
          { en: "Printing & packaging", nl: "Drukwerk & verpakking", ar: "الطباعة والتغليف" },
          { en: "Energy", nl: "Energie", ar: "الطاقة" },
          { en: "Software & technology", nl: "Software & technologie", ar: "البرمجيات والتكنولوجيا" },
          { en: "Perfume & cosmetics", nl: "Parfum & cosmetica", ar: "العطور ومستحضرات التجميل" },
          { en: "Pharmaceutical & medical", nl: "Farmaceutisch & medisch", ar: "الأدوية والمستلزمات الطبية" },
          { en: "Education & training", nl: "Onderwijs & opleiding", ar: "التعليم والتدريب" },
        ],
        note: {
          en: "A need outside these sectors is still worth stating in the intake.",
          nl: "Een behoefte buiten deze sectoren kunt u evengoed in de intake noemen.",
          ar: "وحتى إن كانت حاجتك خارج هذه القطاعات، فمن المفيد أن تذكرها في الاستمارة.",
        },
      },
      {
        kind: "next",
        heading: { en: "Tell us *who is missing.*", nl: "Vertel ons *wie er ontbreekt.*", ar: "أخبرنا *بالطرف الذي ينقصك.*" },
        body: {
          en: "Each route opens a short intake. Name the product, the market and the kind of party you are missing.",
          nl: "Elke route opent een korte intake. Noem het product, de markt en het soort partij dat u mist.",
          ar: "كل مسار يفتح استمارة قصيرة. اذكر المنتج، والسوق، ونوع الطرف الذي ينقصك.",
        },
        links: [
          { href: "contact?intent=supplier#intake", label: { en: "I need a supplier", nl: "Ik zoek een leverancier", ar: "أحتاج إلى مورّد" } },
          { href: "contact?intent=distributor#intake", label: { en: "I need a distributor", nl: "Ik zoek een distributeur", ar: "أحتاج إلى موزّع" } },
          { href: "contact?intent=sell#intake", label: { en: "I want to sell", nl: "Ik wil verkopen", ar: "أريد أن أبيع" } },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ market entry */
  "services/market-entry": {
    masthead: { variant: "band", photo: "me-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Entering a market on the other side takes more than a good product: an entity that can sign, a tax and customs position that holds, a partner on the ground, and someone who understands how business is done there.",
          nl: "Een markt aan de andere kant betreden vraagt meer dan een goed product: een entiteit die kan tekenen, een fiscale en douanepositie die klopt, een partner ter plaatse, en iemand die begrijpt hoe daar zaken worden gedaan.",
          ar: "دخول سوقٍ على الضفة الأخرى يتطلب أكثر من منتجٍ جيد: كياناً قادراً على التوقيع، ووضعاً ضريبياً وجمركياً سليماً، وشريكاً على الأرض، وشخصاً يفهم كيف تُدار الأعمال هناك.",
        },
      },
      {
        kind: "contrast",
        label: { en: "Two directions", nl: "Twee richtingen", ar: "اتجاهان" },
        heading: { en: "One corridor, *both directions.*", nl: "Eén corridor, *twee richtingen.*", ar: "ممرٌّ واحد، *في الاتجاهين.*" },
        intro: {
          en: "The method is the same both ways; the checklist is not. What a Dutch exporter needs to settle in the Gulf differs from what an Arab manufacturer needs to settle in Rotterdam.",
          nl: "De werkwijze is in beide richtingen dezelfde; de checklist niet. Wat een Nederlandse exporteur in de Golf moet regelen, verschilt van wat een Arabische fabrikant in Rotterdam moet regelen.",
          ar: "الطريقة واحدة في الاتجاهين؛ أما قائمة المتطلبات فلا. فما يحتاج المصدّر الهولندي إلى ترتيبه في الخليج يختلف عمّا يحتاج المصنّع العربي إلى ترتيبه في روتردام.",
        },
        a: {
          title: { en: "Into the Arab world", nl: "Naar de Arabische wereld", ar: "إلى العالم العربي" },
          items: [
            { en: "Choosing a local partner", nl: "Een lokale partner kiezen", ar: "اختيار الشريك المحلي" },
            { en: "Agents and distributors", nl: "Agenten en distributeurs", ar: "الوكلاء والموزّعون" },
            { en: "Company formation where required", nl: "Bedrijfsoprichting waar nodig", ar: "تأسيس الشركة عند الحاجة" },
            { en: "Contracts, law and tax", nl: "Contracten, recht en belastingen", ar: "العقود والقوانين والضرائب" },
            { en: "Payment methods and letters of credit", nl: "Betaalmethoden en documentaire kredieten", ar: "طرق الدفع والاعتمادات المستندية" },
            { en: "Negotiation and business culture", nl: "Onderhandelen en zakencultuur", ar: "التفاوض وثقافة الأعمال" },
          ],
        },
        b: {
          title: { en: "Into the Netherlands and Europe", nl: "Naar Nederland en Europa", ar: "إلى هولندا وأوروبا" },
          items: [
            { en: "Company formation and legal form", nl: "Bedrijfsoprichting en rechtsvorm", ar: "تأسيس الشركة واختيار الشكل القانوني" },
            { en: "Dutch tax and VAT", nl: "Nederlandse belastingen en btw", ar: "النظام الضريبي الهولندي وضريبة القيمة المضافة" },
            { en: "Product rules and CE requirements", nl: "Productregels en CE-eisen", ar: "قوانين المنتجات ومتطلبات CE" },
            { en: "Import, customs and logistics", nl: "Import, douane en logistiek", ar: "الاستيراد والجمارك واللوجستيات" },
            { en: "Distributors and European buyers", nl: "Distributeurs en Europese kopers", ar: "الموزّعون والمشترون الأوروبيون" },
            { en: "Dutch business culture", nl: "Nederlandse zakencultuur", ar: "ثقافة الأعمال الهولندية" },
          ],
        },
      },
      {
        kind: "steps",
        label: { en: "In this order", nl: "In deze volgorde", ar: "بهذا الترتيب" },
        heading: { en: "Structure, partner, *first order.*", nl: "Structuur, partner, *eerste order.*", ar: "الهيكل، والشريك، *والطلبية الأولى.*" },
        intro: {
          en: "Each step rests on the one before it. A partner found before the structure is settled is a partner you may have to lose again.",
          nl: "Elke stap rust op de vorige. Een partner die u vindt voordat de structuur staat, is een partner die u misschien weer kwijtraakt.",
          ar: "كل خطوة تقوم على التي قبلها. فالشريك الذي تجده قبل أن يستقر الهيكل قد تعود فتخسره.",
        },
        items: [
          {
            title: { en: "Structure", nl: "Structuur", ar: "الهيكل" },
            body: {
              en: "Which entity signs, where it is registered, and how the tax, VAT and customs position works out on both sides. This comes first.",
              nl: "Welke entiteit tekent, waar zij is ingeschreven, en hoe de fiscale, btw- en douanepositie aan beide kanten uitpakt. Dit komt eerst.",
              ar: "أيّ كيانٍ يوقّع، وأين يُسجَّل، وكيف يستقيم الوضع من حيث الضرائب وضريبة القيمة المضافة والجمارك على الجانبين. وهذا ما يأتي أولاً.",
            },
          },
          {
            title: { en: "Partner", nl: "Partner", ar: "الشريك" },
            body: {
              en: "A distributor, commercial agent or representative on the ground — found, checked by a person and introduced in writing, with the terms agreed before goods move.",
              nl: "Een distributeur, handelsagent of vertegenwoordiger ter plaatse — gevonden, door een mens gecontroleerd en schriftelijk geïntroduceerd, met de voorwaarden vastgelegd voordat er goederen worden verzonden.",
              ar: "موزّعٌ أو وكيل تجاري أو ممثلٌ على الأرض — نجده، ويتحقق منه إنسان، ونقدّمه إليك كتابةً، مع الاتفاق على الشروط قبل أن تتحرك البضائع.",
            },
          },
          {
            title: { en: "First order", nl: "Eerste order", ar: "الطلبية الأولى" },
            body: {
              en: "Documents, certificates, freight, customs and payment terms for the first shipment. We stay involved until it lands or the first contract is signed; from then on, the partnership runs without us.",
              nl: "Documenten, certificaten, vracht, douane en betalingscondities voor de eerste zending. Wij blijven betrokken tot die is geland of het eerste contract is getekend; daarna loopt de samenwerking zonder ons.",
              ar: "المستندات والشهادات والشحن والجمارك وشروط الدفع للشحنة الأولى. نبقى معك حتى تصل الشحنة أو يُوقَّع العقد الأول؛ ثم تمضي الشراكة من دوننا.",
            },
          },
        ],
      },
      {
        kind: "prose",
        photo: "me-culture",
        size: "half",
        side: "end",
        label: { en: "Business culture", nl: "Zakencultuur", ar: "ثقافة الأعمال" },
        heading: { en: "Before it becomes *a misunderstanding.*", nl: "Voordat het *een misverstand wordt.*", ar: "قبل أن يتحوّل الاختلاف *إلى سوء فهم.*" },
        body: [
          {
            en: "A market entry can be structured perfectly and still stall in a meeting room. Who decides, who needs to be present, how directly to negotiate, how long a first answer takes: the two sides answer these questions differently, and neither is wrong.",
            nl: "Een markttoetreding kan perfect gestructureerd zijn en toch vastlopen in een vergaderzaal. Wie beslist, wie aanwezig moet zijn, hoe direct er wordt onderhandeld, hoe lang een eerste antwoord duurt: beide kanten beantwoorden die vragen anders, en geen van beide heeft ongelijk.",
            ar: "قد يُهيكَل دخول السوق على أكمل وجه، ثم يتعثّر مع ذلك في قاعة اجتماعات. مَن يتخذ القرار، ومَن ينبغي أن يحضر، وإلى أي حدّ يكون التفاوض مباشراً، وكم يستغرق الرد الأول: يجيب كل طرفٍ عن هذه الأسئلة بطريقته، وليس أيٌّ منهما مخطئاً.",
          },
          {
            en: "We work in Arabic, Dutch and English, and are at home in both business cultures. We prepare both sides before the first meeting and, where needed, join it ourselves, so that a difference in style is recognised for what it is.",
            nl: "Wij werken in het Arabisch, het Nederlands en het Engels, en zijn in beide zakenculturen thuis. Wij bereiden beide kanten voor op het eerste gesprek en schuiven waar nodig zelf aan, zodat een verschil in stijl wordt herkend voor wat het is.",
            ar: "نعمل بالعربية والهولندية والإنجليزية، ونعرف ثقافتَي الأعمال من الداخل. نُعِدّ الطرفين قبل اللقاء الأول، ونحضره بأنفسنا عند الحاجة، كي يُفهم اختلاف الأسلوب على حقيقته.",
          },
        ],
      },
      {
        kind: "register",
        cols: 2,
        label: { en: "The scope", nl: "De reikwijdte", ar: "النطاق" },
        heading: { en: "What market entry *can include.*", nl: "Wat markttoetreding *kan omvatten.*", ar: "دخول السوق، *وما يمكن أن يشمله.*" },
        intro: {
          en: "Each entry is scoped and quoted in writing before work begins. Depending on the direction and the product, it can include:",
          nl: "Elke toetreding wordt afgebakend en schriftelijk geoffreerd voordat het werk begint. Afhankelijk van de richting en het product kan zij omvatten:",
          ar: "يُحدَّد نطاق كل مشروعٍ لدخول السوق، وتُعرض كلفته كتابةً، قبل أن يبدأ العمل. وبحسب الاتجاه والمنتج، يمكن أن يشمل:",
        },
        items: [
          {
            title: { en: "A market briefing", nl: "Een marktverkenning", ar: "إحاطةٌ عن السوق" },
            body: {
              en: "How the market works for your product: channels, competitors, regulation, and the questions to settle before you commit time and money.",
              nl: "Hoe de markt voor uw product werkt: kanalen, concurrenten, regelgeving, en de vragen die beantwoord moeten zijn voordat u tijd en geld inzet.",
              ar: "كيف تعمل السوق فيما يخص منتجك: قنوات البيع، والمنافسون، والأنظمة، والأسئلة التي ينبغي حسمها قبل أن تستثمر وقتك ومالك.",
            },
          },
          {
            title: { en: "Entity and legal form", nl: "Entiteit en rechtsvorm", ar: "الكيان والشكل القانوني" },
            body: {
              en: "Whether you need a company on the other side at all — and if so, which form, where, and with which partners.",
              nl: "Of u aan de andere kant überhaupt een vennootschap nodig hebt — en zo ja, welke vorm, waar en met welke partners.",
              ar: "مدى حاجتك أصلاً إلى شركة على الضفة الأخرى — وإن احتجت إليها، فبأيّ شكل، وأين، ومع أيّ شركاء.",
            },
          },
          {
            title: { en: "Tax, VAT and customs", nl: "Belastingen, btw en douane", ar: "الضرائب وضريبة القيمة المضافة والجمارك" },
            body: {
              en: "The position on both sides, set out before the first invoice is issued rather than discovered after it.",
              nl: "De positie aan beide kanten, uitgezocht voordat de eerste factuur de deur uitgaat in plaats van erna ontdekt.",
              ar: "الوضع على الجانبين، يُبيَّن قبل إصدار الفاتورة الأولى بدلاً من أن يُكتشف بعدها.",
            },
          },
          {
            title: { en: "Product requirements", nl: "Producteisen", ar: "متطلبات المنتج" },
            body: {
              en: "Registration, labelling, certificates and conformity rules — CE marking for Europe, halal certification and local approvals in the Arab world.",
              nl: "Registratie, etikettering, certificaten en conformiteitsregels — CE-markering voor Europa, halalcertificering en lokale goedkeuringen in de Arabische wereld.",
              ar: "التسجيل، ووسم المنتج، والشهادات، وقواعد المطابقة — علامة CE في أوروبا، وشهادة الحلال والموافقات المحلية في العالم العربي.",
            },
          },
          {
            title: { en: "Distributors, agents and representatives", nl: "Distributeurs, agenten en vertegenwoordigers", ar: "الموزّعون والوكلاء والممثلون" },
            body: {
              en: "The search for a partner on the ground, run the same way as every search: checked by a person, introduced in writing.",
              nl: "De zoektocht naar een partner ter plaatse, op dezelfde manier als elke zoektocht: gecontroleerd door een mens, schriftelijk geïntroduceerd.",
              ar: "البحث عن شريكٍ على الأرض، بالطريقة نفسها التي يجري بها كل بحث: يتحقق منه إنسان، ويُقدَّم إليك كتابةً.",
            },
          },
          {
            title: { en: "Commercial contracts", nl: "Handelscontracten", ar: "العقود التجارية" },
            body: {
              en: "Distribution, agency and supply agreements, drafted or reviewed by independent legal specialists in the network.",
              nl: "Distributie-, agentuur- en leveringsovereenkomsten, opgesteld of beoordeeld door onafhankelijke juridische specialisten uit het netwerk.",
              ar: "عقود التوزيع والوكالة والتوريد، يصوغها أو يراجعها مختصون قانونيون مستقلون من الشبكة.",
            },
          },
          {
            title: { en: "Meetings on the ground", nl: "Gesprekken ter plaatse", ar: "لقاءات ميدانية" },
            body: {
              en: "Company and factory visits, arranged individually or within a trade mission such as Discover Netherlands, Discover Dubai or Discover Saudi Arabia.",
              nl: "Bedrijfs- en fabrieksbezoeken, afzonderlijk geregeld of binnen een handelsmissie zoals Discover Netherlands, Discover Dubai of Discover Saudi Arabia.",
              ar: "زيارات للشركات والمصانع، تُرتَّب على حدة أو ضمن بعثة تجارية مثل Discover Netherlands أو Discover Dubai أو Discover Saudi Arabia.",
            },
          },
          {
            title: { en: "The first shipment", nl: "De eerste zending", ar: "الشحنة الأولى" },
            body: {
              en: "Documents, freight, customs clearance and payment terms, coordinated with the right specialists until the goods arrive.",
              nl: "Documenten, vracht, douaneafhandeling en betalingscondities, met de juiste specialisten gecoördineerd tot de goederen zijn aangekomen.",
              ar: "المستندات والشحن والتخليص الجمركي وشروط الدفع، ننسّقها مع المختصين المناسبين حتى تصل البضائع.",
            },
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "Tell us *which market.*", nl: "Vertel ons *welke markt.*", ar: "أخبرنا *بالسوق التي تقصدها.*" },
        body: {
          en: "Market entry is a project service, quoted per engagement in writing once the scope is clear.",
          nl: "Markttoetreding is een projectdienst en wordt per opdracht schriftelijk geoffreerd, zodra de reikwijdte vaststaat.",
          ar: "دخول الأسواق خدمةٌ من خدمات المشاريع، تُعرض كلفتها كتابةً لكل مهمة على حدة، بعد أن يتحدّد نطاقها.",
        },
        links: [
          { href: "contact?intent=market-entry#intake", label: { en: "I want to enter a new market", nl: "Ik wil een nieuwe markt betreden", ar: "أريد دخول سوق جديدة" } },
          { href: "events/missions", label: { en: "Trade missions", nl: "Handelsmissies", ar: "البعثات التجارية" } },
          { href: "services/representation", label: { en: "Representation", nl: "Vertegenwoordiging", ar: "التمثيل" } },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ representation */
  "services/representation": {
    masthead: { variant: "plate", photo: "rep-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Before you open an office on the other side, you need someone there who answers in your name, attends the meetings, follows up, and tells you plainly what the market says.",
          nl: "Voordat u aan de andere kant een kantoor opent, hebt u daar iemand nodig die namens u antwoordt, de gesprekken voert, erachteraan gaat, en u zonder omwegen vertelt wat de markt zegt.",
          ar: "قبل أن تفتح مكتباً على الضفة الأخرى، تحتاج هناك إلى من يجيب باسمك، ويحضر اللقاءات، ويتابع، ويخبرك بصراحةٍ بما تقوله السوق.",
        },
      },
      {
        kind: "register",
        cols: 1,
        numbered: true,
        label: { en: "What it covers", nl: "Wat het omvat", ar: "ما يشمله" },
        heading: { en: "Present on the other side, *in your name.*", nl: "Aanwezig aan de andere kant, *namens u.*", ar: "حضورٌ على الضفة الأخرى، *باسمك.*" },
        intro: {
          en: "Representation bridges the period between a first order and your own office — or takes the place of an office where a market does not justify one. What it covers differs by region; depending on the market, it can include the following.",
          nl: "Vertegenwoordiging overbrugt de periode tussen een eerste order en een eigen kantoor — of neemt de plaats van dat kantoor in waar een markt er geen rechtvaardigt. Wat zij omvat, verschilt per regio; afhankelijk van de markt kan zij het volgende omvatten.",
          ar: "يسدّ التمثيل المرحلة الفاصلة بين الطلبية الأولى ومكتبك الخاص — أو يقوم مقام المكتب حين لا تبرّر السوق فتحه. ويختلف ما يشمله من منطقة إلى أخرى؛ وبحسب السوق، يمكن أن يشمل ما يلي.",
        },
        items: [
          {
            title: { en: "A local point of contact", nl: "Een lokaal aanspreekpunt", ar: "جهة اتصال محلية" },
            body: {
              en: "A point of contact in the market who receives enquiries for you, in the local language, and passes them on with the context you need.",
              nl: "Een aanspreekpunt in de markt dat vragen voor u ontvangt, in de lokale taal, en ze doorgeeft met de context die u nodig hebt.",
              ar: "جهةُ اتصالٍ في السوق تتلقى الاستفسارات نيابةً عنك، باللغة المحلية، وتنقلها إليك مع السياق الذي تحتاج إليه.",
            },
          },
          {
            title: { en: "Meetings on your behalf", nl: "Gesprekken namens u", ar: "لقاءات نيابةً عنك" },
            body: {
              en: "With prospective distributors, buyers and partners, within a mandate you set, followed by a written account of each meeting.",
              nl: "Met mogelijke distributeurs, kopers en partners, binnen een mandaat dat u bepaalt, gevolgd door een schriftelijk verslag van elk gesprek.",
              ar: "مع موزّعين ومشترين وشركاء محتملين، ضمن تفويضٍ تحدّده أنت، يعقبها تقريرٌ مكتوب عن كل لقاء.",
            },
          },
          {
            title: { en: "Follow-up on open points", nl: "Nalopen van open punten", ar: "متابعة المسائل المعلّقة" },
            body: {
              en: "Samples, quotations, documents and open questions pursued until there is an answer, so that a promising first contact does not go quiet.",
              nl: "Monsters, offertes, documenten en open vragen nagelopen tot er een antwoord is, zodat een veelbelovend eerste contact niet stilvalt.",
              ar: "العيّنات وعروض الأسعار والمستندات والأسئلة المعلّقة، نتابعها حتى يأتي الجواب، كي لا يخفت تواصلٌ أول واعد.",
            },
          },
          {
            title: { en: "Market feedback", nl: "Terugkoppeling uit de markt", ar: "ما تقوله السوق" },
            body: {
              en: "What buyers and distributors actually say about your product, price and terms — reported plainly, including what you may not want to hear.",
              nl: "Wat kopers en distributeurs werkelijk zeggen over uw product, prijs en voorwaarden — helder gerapporteerd, ook wat u liever niet hoort.",
              ar: "ما يقوله المشترون والموزّعون فعلاً عن منتجك وسعرك وشروطك — ننقله إليك بصراحة، بما في ذلك ما قد لا تودّ سماعه.",
            },
          },
          {
            title: { en: "Presence at trade fairs", nl: "Aanwezigheid op beurzen", ar: "الحضور في المعارض" },
            body: {
              en: "Attending fairs in that market on your behalf, or placing your products on a shared DUKAAT Pavilions stand beside other members.",
              nl: "Beurzen in die markt namens u bezoeken, of uw producten tonen op een gedeelde stand van DUKAAT Pavilions, naast andere leden.",
              ar: "حضور المعارض في تلك السوق نيابةً عنك، أو عرض منتجاتك في جناحٍ موحّد ضمن DUKAAT Pavilions، إلى جانب أعضاء آخرين.",
            },
          },
          {
            title: { en: "Coordination with local partners", nl: "Afstemming met lokale partners", ar: "التنسيق مع الشركاء المحليين" },
            body: {
              en: "Forwarders, customs brokers, lawyers and accountants on the ground, kept aligned so that your file moves as one.",
              nl: "Expediteurs, douane-expediteurs, advocaten en accountants ter plaatse, op elkaar afgestemd zodat uw dossier als één geheel beweegt.",
              ar: "وكلاء الشحن والمخلّصون الجمركيون والمحامون والمحاسبون على الأرض، ننسّق بينهم حتى يتقدّم ملفك كتلةً واحدة.",
            },
          },
        ],
      },
      {
        kind: "prose",
        photo: "rep-window",
        size: "tall",
        side: "start",
        label: { en: "Per region", nl: "Per regio", ar: "بحسب المنطقة" },
        heading: { en: "Shaped by *the region.*", nl: "Afgestemd op *de regio.*", ar: "يتشكّل *بحسب المنطقة.*" },
        body: [
          {
            en: "Representation differs from region to region: what a market asks for, who is on the ground and how business is done there. Each engagement is therefore shaped for the market concerned, drawing on DUKAAT’s ambassadors, members and partners where they are present.",
            nl: "Vertegenwoordiging verschilt per regio: wat een markt vraagt, wie er ter plaatse is en hoe daar zaken worden gedaan. Elke opdracht wordt daarom afgestemd op de markt in kwestie, met de ambassadeurs, leden en partners van DUKAAT waar zij aanwezig zijn.",
            ar: "يختلف التمثيل من منطقة إلى أخرى: بحسب ما تتطلبه السوق، ومَن يوجد على الأرض، وكيف تُدار الأعمال هناك. لذلك تُصمَّم كل مهمة للسوق المعنية، مستعينةً بسفراء DUKAAT وأعضائه وشركائه حيثما وُجدوا.",
          },
          {
            en: "Representation draws on that network. The person who speaks for you in a market knows it from the inside: its buyers, its habits and its language.",
            nl: "Vertegenwoordiging steunt op dat netwerk. Wie in een markt namens u spreekt, kent die markt van binnenuit: de kopers, de gewoonten en de taal.",
            ar: "ويستند التمثيل إلى هذه الشبكة. فمن يتحدث باسمك في سوقٍ ما يعرفها من الداخل: مشتريها، وأعرافها، ولغتها.",
          },
        ],
      },
      {
        kind: "notice",
        label: { en: "The mandate", nl: "Het mandaat", ar: "التفويض" },
        body: [
          {
            en: "The scope and authority of each representation are agreed in writing per engagement: which market, which tasks, what may be said in your name, and for how long. Nothing is agreed or signed on your behalf outside that written mandate.",
            nl: "Reikwijdte en bevoegdheid van elke vertegenwoordiging worden per opdracht schriftelijk vastgelegd: welke markt, welke taken, wat er namens u mag worden gezegd, en voor hoe lang. Buiten dat schriftelijke mandaat wordt niets namens u toegezegd of getekend.",
            ar: "يُتَّفق كتابةً، في كل مهمة، على نطاق التمثيل وصلاحياته: أيّ سوق، وأيّ مهام، وما يجوز قوله باسمك، ولأيّ مدة. ولا يُتعهَّد بشيءٍ ولا يُوقَّع على شيءٍ نيابةً عنك خارج هذا التفويض المكتوب.",
          },
          {
            en: "Representation is a project service, quoted per engagement in writing. No hidden commissions.",
            nl: "Vertegenwoordiging is een projectdienst en wordt per opdracht schriftelijk geoffreerd. Geen verborgen commissies.",
            ar: "التمثيل خدمةٌ من خدمات المشاريع، تُعرض كلفتها كتابةً لكل مهمة على حدة. لا عمولات خفية.",
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "A presence *before an office.*", nl: "Aanwezig *vóór een kantoor.*", ar: "حضورٌ *قبل المكتب.*" },
        links: [
          { href: "network/ambassadors", label: { en: "Ambassadors", nl: "Ambassadeurs", ar: "السفراء" } },
          { href: "services/market-entry", label: { en: "Market entry", nl: "Markttoetreding", ar: "دخول الأسواق" } },
          { href: "contact?intent=market-entry#intake", label: { en: "I want to enter a new market", nl: "Ik wil een nieuwe markt betreden", ar: "أريد دخول سوق جديدة" } },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ documents, customs & logistics */
  "services/documents": {
    masthead: { variant: "portrait", photo: "docs-desk" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Between a signed order and goods on a quay lies a file of certificates, freight bookings, customs declarations and payment terms. We coordinate that file with the right specialists, so a first deal does not stall on paper.",
          nl: "Tussen een getekende order en goederen op de kade ligt een dossier van certificaten, vrachtboekingen, douaneaangiften en betalingscondities. Wij coördineren dat dossier met de juiste specialisten, zodat een eerste deal niet strandt op papier.",
          ar: "بين طلبيةٍ موقّعة وبضائع على الرصيف ملفٌّ كامل من الشهادات وحجوزات الشحن والبيانات الجمركية وشروط الدفع. ننسّق هذا الملف مع المختصين المناسبين، حتى لا تتعثّر الصفقة الأولى بسبب الأوراق.",
        },
      },
      {
        kind: "register",
        cols: 2,
        label: { en: "The file", nl: "Het dossier", ar: "الملف" },
        heading: { en: "What we arrange *with you.*", nl: "Wat wij *met u regelen.*", ar: "ما نرتّبه *معك.*" },
        intro: {
          en: "DUKAAT is not a forwarder, a customs broker or a bank. We know which specialist each step needs, bring them in, and keep the file moving until it is complete.",
          nl: "DUKAAT is geen expediteur, douane-expediteur of bank. Wij weten welke specialist elke stap vraagt, halen die erbij en houden het dossier in beweging tot het compleet is.",
          ar: "DUKAAT ليس وكيل شحن ولا مخلّصاً جمركياً ولا مصرفاً. نعرف أيّ مختص تحتاج إليه كل خطوة، فنستعين به، ونحرص على ألا يتوقف الملف حتى يكتمل.",
        },
        items: [
          {
            title: { en: "Certificates of origin", nl: "Certificaten van oorsprong", ar: "شهادات المنشأ" },
            body: {
              en: "The document that establishes where goods were made, and with it the duties and trade preferences that apply on arrival.",
              nl: "Het document dat vastlegt waar goederen zijn gemaakt, en daarmee welke invoerrechten en handelspreferenties bij aankomst gelden.",
              ar: "الوثيقة التي تُثبت مكان صنع البضائع، وبها تتحدد الرسوم الجمركية والأفضليات التجارية التي تسري عند الوصول.",
            },
          },
          {
            title: { en: "Health and halal certificates", nl: "Gezondheids- en halalcertificaten", ar: "الشهادات الصحية وشهادات الحلال" },
            body: {
              en: "Health and veterinary certificates for food and agricultural goods, and halal certification from a recognised body wherever the market requires it.",
              nl: "Gezondheids- en veterinaire certificaten voor voedings- en landbouwproducten, en halalcertificering door een erkende instantie waar de markt dat vereist.",
              ar: "الشهادات الصحية والبيطرية للأغذية والمنتجات الزراعية، وشهادة الحلال من جهةٍ معتمدة حيثما تشترطها السوق.",
            },
          },
          {
            title: { en: "Product conformity", nl: "Productconformiteit", ar: "مطابقة المنتج" },
            body: {
              en: "Conformity certificates, test reports and markings such as CE, prepared before shipment rather than requested at the border.",
              nl: "Conformiteitscertificaten, testrapporten en markeringen zoals CE, voorbereid vóór verzending in plaats van opgevraagd aan de grens.",
              ar: "شهادات المطابقة، وتقارير الاختبار، والعلامات مثل علامة CE، تُعَدّ قبل الشحن بدلاً من أن تُطلب عند الحدود.",
            },
          },
          {
            title: { en: "Commercial documents", nl: "Handelsdocumenten", ar: "المستندات التجارية" },
            body: {
              en: "Invoice, packing list and bill of lading, consistent with one another and, where there is one, with the letter of credit.",
              nl: "Factuur, paklijst en cognossement, onderling consistent en, als er een is, in lijn met het documentair krediet.",
              ar: "الفاتورة وقائمة التعبئة وبوليصة الشحن، متّسقةً فيما بينها، ومع الاعتماد المستندي إن وُجد.",
            },
          },
          {
            title: { en: "Freight and forwarding", nl: "Vracht en expeditie", ar: "الشحن ووكلاء الشحن" },
            body: {
              en: "Sea, air and road freight booked through established forwarders, with Rotterdam as the natural gateway into Europe.",
              nl: "Zee-, lucht- en wegvracht, geboekt via gevestigde expediteurs, met Rotterdam als natuurlijke toegangspoort tot Europa.",
              ar: "شحنٌ بحري وجوي وبري يُحجز عبر وكلاء شحن راسخين، وروتردام بوابته الطبيعية إلى أوروبا.",
            },
          },
          {
            title: { en: "Customs clearance", nl: "Douaneafhandeling", ar: "التخليص الجمركي" },
            body: {
              en: "Declarations, tariff classification and duties on both sides, handled by licensed customs brokers.",
              nl: "Aangiften, tariefindeling en rechten aan beide kanten, afgehandeld door erkende douane-expediteurs.",
              ar: "البيانات الجمركية، والتصنيف الجمركي، والرسوم على الجانبين، يتولاها مخلّصون جمركيون مرخّصون.",
            },
          },
          {
            title: { en: "Delivery terms (Incoterms)", nl: "Leveringsvoorwaarden (Incoterms)", ar: "شروط التسليم (Incoterms)" },
            body: {
              en: "Who pays for what, and where the risk passes from seller to buyer: agreed explicitly in the contract rather than assumed.",
              nl: "Wie wat betaalt, en waar het risico van verkoper op koper overgaat: uitdrukkelijk in het contract vastgelegd, niet verondersteld.",
              ar: "مَن يتحمّل أيّ تكلفة، وأين تنتقل المخاطر من البائع إلى المشتري: يُنصّ على ذلك صراحةً في العقد، ولا يُترك للافتراض.",
            },
          },
          {
            title: { en: "Payment terms", nl: "Betalingscondities", ar: "شروط الدفع" },
            body: {
              en: "Letter of credit, documentary collection, notary or licensed escrow: the method that fits the deal, agreed in writing before goods move.",
              nl: "Documentair krediet, documentaire incasso, notaris of een escrowdienst met vergunning: de methode die bij de deal past, schriftelijk vastgelegd voordat de goederen worden verzonden.",
              ar: "الاعتماد المستندي، أو التحصيل المستندي، أو كاتب العدل، أو حساب ضمانٍ (Escrow) لدى جهة مرخّصة: الطريقة التي تناسب الصفقة، يُتَّفق عليها كتابةً قبل أن تتحرك البضائع.",
            },
          },
        ],
      },
      {
        kind: "band",
        photo: "docs-dock",
        caption: {
          en: "We sit next to Rotterdam, Europe’s largest port. Here the paperwork and the quay are never far apart.",
          nl: "Wij zitten naast Rotterdam, de grootste haven van Europa. Hier liggen het papierwerk en de kade nooit ver uit elkaar.",
          ar: "نجلس بجوار روتردام، أكبر موانئ أوروبا. وهنا لا تبعد الأوراق عن الرصيف كثيراً.",
        },
      },
      {
        kind: "notice",
        label: { en: "Payments", nl: "Betalingen", ar: "المدفوعات" },
        body: [
          {
            en: "Payments never run through DUKAAT. The money moves directly between buyer and seller, or through the bank, notary or licensed escrow provider the parties choose.",
            nl: "Betalingen lopen nooit via DUKAAT. Het geld gaat rechtstreeks van koper naar verkoper, of via de bank, de notaris of de escrowdienst met vergunning die de partijen zelf kiezen.",
            ar: "لا تمرّ المدفوعات عبر DUKAAT أبداً. ينتقل المال مباشرةً بين المشتري والبائع، أو عبر المصرف أو كاتب العدل أو مزوّد خدمات حساب الضمان المرخّص الذي يختاره الطرفان.",
          },
          {
            en: "We do not take custody of members’ funds, we do not act as a bank or payment provider, and we do not guarantee any transaction between members.",
            nl: "Wij nemen geen gelden van leden in bewaring, wij treden niet op als bank of betaaldienstverlener, en wij garanderen geen enkele transactie tussen leden.",
            ar: "نحن لا نحتفظ بأموال الأعضاء، ولا نعمل كمصرف أو مزوّد خدمات دفع، ولا نضمن أي معاملة بين الأعضاء.",
          },
        ],
      },
      {
        kind: "statement",
        text: {
          en: "Our part ends with the first landed shipment or the first signed contract. The trade that follows is yours.",
          nl: "Ons deel eindigt bij de eerste gelande zending of het eerste getekende contract. De handel die volgt, is van u.",
          ar: "ينتهي دورنا عند وصول الشحنة الأولى أو توقيع العقد الأول. وما يليها من تجارة فهو لك.",
        },
      },
      {
        kind: "next",
        heading: { en: "The limits of *our role.*", nl: "De grenzen van *onze rol.*", ar: "حدود *دورنا.*" },
        links: [
          { href: "how-we-work/boundaries", label: { en: "What we do not do", nl: "Wat wij niet doen", ar: "ما لا نفعله" } },
          { href: "services/advisory", label: { en: "Specialist advice", nl: "Specialistisch advies", ar: "الاستشارات المتخصصة" } },
          { href: "services/trade", label: { en: "Sourcing & distribution", nl: "Inkoop & distributie", ar: "التوريد والتوزيع" } },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ investment opportunities */
  "services/investment": {
    masthead: { variant: "band", photo: "inv-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Connecting capital with opportunity. DUKAAT presents companies and projects in Europe and the Arab world to investors, for information only — and, where both sides wish, arranges a meeting with the people behind them.",
          nl: "Kapitaal verbinden met kansen. DUKAAT presenteert bedrijven en projecten in Europa en de Arabische wereld aan investeerders, uitsluitend ter informatie — en regelt, als beide kanten dat willen, een ontmoeting met de mensen erachter.",
          ar: "ربط رأس المال بالفرصة. يعرض DUKAAT على المستثمرين شركاتٍ ومشاريع في أوروبا والعالم العربي للاطلاع فقط — ويرتّب، حين يرغب الطرفان، لقاءً مع أصحابها.",
        },
      },
      {
        kind: "terms",
        label: { en: "Sectors", nl: "Sectoren", ar: "القطاعات" },
        heading: { en: "Real companies, *real projects.*", nl: "Echte bedrijven, *echte projecten.*", ar: "شركاتٌ حقيقية، *ومشاريع حقيقية.*" },
        intro: {
          en: "Opportunities are presented across sectors and stages — from an operating company looking for a partner to a development still on the drawing board.",
          nl: "Kansen worden gepresenteerd over sectoren en fasen heen — van een draaiend bedrijf dat een partner zoekt tot een ontwikkeling die nog op de tekentafel ligt.",
          ar: "تُعرض الفرص عبر قطاعاتٍ ومراحل مختلفة — من شركةٍ عاملة تبحث عن شريك إلى مشروعٍ تطويري لا يزال في مرحلة التخطيط.",
        },
        items: [
          { en: "Real estate", nl: "Vastgoed", ar: "العقارات" },
          { en: "Industry", nl: "Industrie", ar: "الصناعة" },
          { en: "Tourism", nl: "Toerisme", ar: "السياحة" },
          { en: "Technology", nl: "Technologie", ar: "التكنولوجيا" },
          { en: "Logistics", nl: "Logistiek", ar: "اللوجستيات" },
          { en: "Food", nl: "Voeding", ar: "الأغذية" },
          { en: "Existing companies", nl: "Bestaande bedrijven", ar: "الشركات القائمة" },
          { en: "New ventures", nl: "Nieuwe ondernemingen", ar: "المشاريع الجديدة" },
          { en: "Joint ventures", nl: "Joint ventures", ar: "المشاريع المشتركة" },
        ],
        note: {
          en: "Ownership rules, law, tax and investment conditions differ by country, by project and by the investor’s nationality.",
          nl: "Eigendomsregels, wetgeving, belastingen en investeringsvoorwaarden verschillen per land, per project en naar de nationaliteit van de investeerder.",
          ar: "التملّك والقوانين والضرائب وشروط الاستثمار تختلف بحسب الدولة والمشروع وجنسية المستثمر.",
        },
      },
      {
        kind: "register",
        cols: 1,
        numbered: true,
        label: { en: "Formats", nl: "Vormen", ar: "الصيغ" },
        heading: { en: "From the file *to the table.*", nl: "Van het dossier *naar de tafel.*", ar: "من الملف *إلى الطاولة.*" },
        intro: {
          en: "An investment is a relationship before it is a transaction. Every opportunity starts as a file, and can lead to a meeting with the people who carry it.",
          nl: "Een investering is een relatie voordat zij een transactie is. Elke kans begint als dossier, en kan leiden tot een ontmoeting met de mensen die haar dragen.",
          ar: "الاستثمار علاقةٌ قبل أن يكون صفقة. تبدأ كل فرصةٍ ملفاً، وقد تقود إلى لقاءٍ مع من يقفون خلفها.",
        },
        items: [
          {
            title: { en: "The project file", nl: "Het projectdossier", ar: "ملف المشروع" },
            body: {
              en: "Overview, location, developer, type and stage of investment, development plan, investment size, and the documents available for review.",
              nl: "Overzicht, locatie, ontwikkelaar, soort en fase van de investering, ontwikkelplan, omvang van de investering, en de stukken die ter inzage beschikbaar zijn.",
              ar: "نظرة عامة على المشروع، والموقع، والمطوّر، ونوع الاستثمار ومرحلته، وخطة التطوير، وحجم الاستثمار، والمستندات المتاحة للاطلاع.",
            },
          },
          {
            title: { en: "Meet the Developer", nl: "Meet the Developer", ar: "Meet the Developer" },
            body: {
              en: "For real-estate and development projects: a meeting between investor and developer, to hear the plan from the people who will build it.",
              nl: "Voor vastgoed- en ontwikkelprojecten: een ontmoeting tussen investeerder en ontwikkelaar, om het plan te horen van de mensen die het gaan bouwen.",
              ar: "للمشاريع العقارية ومشاريع التطوير: لقاءٌ بين المستثمر والمطوّر، يسمع فيه المستثمر الخطة ممّن سيبنونها.",
            },
          },
          {
            title: { en: "Meet the Project Owner", nl: "Meet the Project Owner", ar: "Meet the Project Owner" },
            body: {
              en: "For operating companies, new ventures and joint ventures: a conversation with the owner about the business, the plan and the partner they are looking for.",
              nl: "Voor draaiende bedrijven, nieuwe ondernemingen en joint ventures: een gesprek met de eigenaar over het bedrijf, het plan en de partner die hij zoekt.",
              ar: "للشركات القائمة والمشاريع الجديدة والمشاريع المشتركة: حديثٌ مع صاحب المشروع عن نشاطه وخطته والشريك الذي يبحث عنه.",
            },
          },
        ],
      },
      {
        kind: "notice",
        label: { en: "Important", nl: "Belangrijk", ar: "تنبيه مهم" },
        body: [
          {
            en: "DUKAAT does not provide investment advice, does not arrange or broker investments, and does not offer securities. Opportunities are presented for information only. Independent legal, financial and technical due diligence remains essential before any investment decision.",
            nl: "DUKAAT geeft geen beleggingsadvies, bemiddelt niet bij investeringen en biedt geen effecten aan. Kansen worden uitsluitend ter informatie gepresenteerd. Onafhankelijk juridisch, financieel en technisch onderzoek blijft essentieel vóór elke investeringsbeslissing.",
            ar: "لا يقدّم DUKAAT استشارات استثمارية، ولا يرتّب الاستثمارات أو يتوسط فيها، ولا يعرض أوراقاً مالية. تُعرض الفرص للاطلاع فقط. ويبقى الفحص النافي للجهالة القانوني والمالي والفني المستقل ضرورياً قبل أي قرار استثماري.",
          },
        ],
      },
      {
        kind: "prose",
        photo: "inv-meeting",
        size: "half",
        side: "start",
        label: { en: "The conversation", nl: "Het gesprek", ar: "الحديث" },
        heading: { en: "It starts with *a conversation.*", nl: "Het begint met *een gesprek.*", ar: "يبدأ الأمر *بحديث.*" },
        body: [
          {
            en: "Investors and project owners reach us through the intake, like everyone else. We ask what the investor is looking for — sector, region, stage, horizon — or what the project needs, and we listen before anything is presented.",
            nl: "Investeerders en projecteigenaren komen, zoals iedereen, binnen via de intake. Wij vragen wat de investeerder zoekt — sector, regio, fase, horizon — of wat het project nodig heeft, en wij luisteren voordat er iets wordt gepresenteerd.",
            ar: "يصل إلينا المستثمرون وأصحاب المشاريع عبر الاستمارة، كغيرهم. نسأل المستثمر عمّا يبحث عنه — القطاع والمنطقة والمرحلة والأفق الزمني — أو نسأل عمّا يحتاج إليه المشروع، ونُصغي قبل أن نعرض شيئاً.",
          },
          {
            en: "Where there is interest on both sides, we introduce the two in writing and, if both wish, bring them to the same table. From there the investor’s own advisers take over: legal, financial and technical due diligence is the investor’s to commission, and the investor’s to judge.",
            nl: "Is er aan beide kanten belangstelling, dan introduceren wij hen schriftelijk en brengen wij hen, als beiden dat willen, aan dezelfde tafel. Daarna nemen de eigen adviseurs van de investeerder het over: juridisch, financieel en technisch onderzoek laat de investeerder zelf uitvoeren, en hij beoordeelt het zelf.",
            ar: "وحين يبدي الطرفان اهتماماً متبادلاً، نعرّف كلاً منهما بالآخر كتابةً، ونجمعهما على طاولةٍ واحدة إن رغبا في ذلك. ومن هناك يتولى مستشارو المستثمر أنفسهم الأمر: فالمستثمر هو من يكلّف بالفحص النافي للجهالة القانوني والمالي والفني، وهو وحده من يحكم على نتائجه.",
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "Capital, or a project *that needs it.*", nl: "Kapitaal, of een project *dat het zoekt.*", ar: "رأسُ مالٍ، أو مشروعٌ *يحتاج إليه.*" },
        body: {
          en: "Both routes open a short intake. We start with a conversation.",
          nl: "Beide routes openen een korte intake. Wij beginnen met een gesprek.",
          ar: "كلا المسارين يفتح استمارة قصيرة. ونبدأ بحديث.",
        },
        links: [
          { href: "contact?intent=invest#intake", label: { en: "I want to invest", nl: "Ik wil investeren", ar: "أريد أن أستثمر" } },
          { href: "contact?intent=opportunity#intake", label: { en: "I have an investment opportunity", nl: "Ik heb een investeringskans", ar: "لديّ فرصة استثمارية" } },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ specialist advice */
  "services/advisory": {
    masthead: { variant: "plate", photo: "adv-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "You do not need to know everything. You need to reach the person who does. DUKAAT advises its members itself, and gives them access to qualified, independent specialists in its network — in law, tax, finance, marketing and more.",
          nl: "U hoeft niet alles te weten. U moet de persoon kunnen bereiken die het wél weet. DUKAAT adviseert zijn leden zelf, en geeft hun toegang tot gekwalificeerde, onafhankelijke specialisten uit het netwerk — in recht, belastingen, financiën, marketing en meer.",
          ar: "لا تحتاج إلى معرفة كل شيء… تحتاج إلى الوصول إلى الشخص الذي يعرف. يقدّم DUKAAT المشورة لأعضائه بنفسه، ويتيح لهم الوصول إلى مختصين مؤهّلين ومستقلين في شبكته — في القانون والضرائب والمالية والتسويق وغيرها.",
        },
      },
      {
        kind: "register",
        cols: 2,
        label: { en: "Disciplines", nl: "Disciplines", ar: "التخصصات" },
        heading: { en: "The person *who knows.*", nl: "De persoon *die het weet.*", ar: "الشخص *الذي يعرف.*" },
        intro: {
          en: "Specialists are chosen by subject and by country, so that a question on Dutch VAT and a question on a distribution agreement in the Gulf each reach someone who knows the answer.",
          nl: "Specialisten worden gekozen op onderwerp en op land, zodat een vraag over Nederlandse btw en een vraag over een distributieovereenkomst in de Golf elk terechtkomen bij iemand die het antwoord kent.",
          ar: "نختار المختصين بحسب الموضوع والبلد، حتى يصل السؤال عن ضريبة القيمة المضافة الهولندية، والسؤال عن عقد توزيعٍ في الخليج، كلٌّ منهما إلى من يعرف جوابه.",
        },
        items: [
          {
            title: { en: "Legal advisory", nl: "Juridisch advies", ar: "الاستشارات القانونية" },
            body: {
              en: "Lawyers by country and subject: company formation, contracts, corporate and commercial law, import and export, regulatory matters and disputes.",
              nl: "Advocaten per land en onderwerp: bedrijfsoprichting, contracten, ondernemings- en handelsrecht, import en export, regelgeving en geschillen.",
              ar: "محامون ومختصون بحسب البلد والموضوع: تأسيس الشركات، والعقود، وقانون الشركات والقانون التجاري، والاستيراد والتصدير، والمسائل التنظيمية، والنزاعات التجارية.",
            },
          },
          {
            title: { en: "Tax advisory", nl: "Fiscaal advies", ar: "الاستشارات الضريبية" },
            body: {
              en: "Dutch tax, VAT, corporate structure, international tax and cross-border transactions — the questions that decide what a deal really costs.",
              nl: "Nederlandse belastingen, btw, vennootschapsstructuur, internationaal belastingrecht en grensoverschrijdende transacties — de vragen die bepalen wat een deal werkelijk kost.",
              ar: "الضرائب الهولندية، وضريبة القيمة المضافة، وهيكل الشركات، والضرائب الدولية، والمعاملات العابرة للحدود — المسائل التي تحدّد الكلفة الحقيقية للصفقة.",
            },
          },
          {
            title: { en: "Financial advisory", nl: "Financieel advies", ar: "الاستشارات المالية" },
            body: {
              en: "Feasibility studies, financial and investment analysis, business planning, funding strategy and company valuation.",
              nl: "Haalbaarheidsstudies, financiële en investeringsanalyse, ondernemingsplannen, financieringsstrategie en bedrijfswaardering.",
              ar: "دراسات الجدوى، والتحليل المالي وتحليل الاستثمار، وخطط الأعمال، واستراتيجية التمويل، وتقييم الشركات.",
            },
          },
          {
            title: { en: "Marketing and sales", nl: "Marketing en verkoop", ar: "التسويق والمبيعات" },
            body: {
              en: "Market-entry marketing, branding, digital and B2B marketing, advertising, lead generation and sales strategy for the other market.",
              nl: "Marketing voor markttoetreding, merkopbouw, digitale en B2B-marketing, reclame, klantwerving en verkoopstrategie voor de andere markt.",
              ar: "التسويق لدخول الأسواق، وبناء العلامة التجارية، والتسويق الرقمي وتسويق B2B، والإعلان، واستقطاب العملاء المحتملين، واستراتيجية المبيعات في السوق الأخرى.",
            },
          },
          {
            title: { en: "Public relations", nl: "Public relations", ar: "العلاقات العامة" },
            body: {
              en: "Corporate communication, media relations, events and stakeholder management, in the language and tone of the market concerned.",
              nl: "Bedrijfscommunicatie, mediarelaties, evenementen en het contact met belanghebbenden, in de taal en de toon van de betreffende markt.",
              ar: "الاتصال المؤسسي، والعلاقات الإعلامية، والفعاليات، وإدارة العلاقة مع أصحاب المصلحة، بلغة السوق المعنية وأسلوبها.",
            },
          },
          {
            title: { en: "Market entry", nl: "Markttoetreding", ar: "دخول الأسواق" },
            body: {
              en: "Programmes for entering the Netherlands and Europe, the Gulf or the wider Arab world, from first assessment to first order.",
              nl: "Trajecten om Nederland en Europa, de Golf of de bredere Arabische wereld te betreden, van eerste verkenning tot eerste order.",
              ar: "برامج لدخول هولندا وأوروبا، أو الخليج، أو العالم العربي الأوسع، من التقييم الأول إلى الطلبية الأولى.",
            },
          },
          {
            title: { en: "Supplier sourcing", nl: "Leveranciers vinden", ar: "البحث عن المورّدين" },
            body: {
              en: "Factories, suppliers, raw materials, products, stocklots and machinery, searched and checked as described under sourcing and distribution.",
              nl: "Fabrieken, leveranciers, grondstoffen, producten, partijen en machines, gezocht en gecontroleerd zoals beschreven onder inkoop en distributie.",
              ar: "مصانع، ومورّدون، ومواد أولية، ومنتجات، ودفعات مخزون، وآلات، نبحث عنها ونتحقق منها كما هو موضّح في «التوريد والتوزيع».",
            },
          },
          {
            title: { en: "Distributor search", nl: "Distributeurs zoeken", ar: "البحث عن الموزّعين" },
            body: {
              en: "Potential distributors and commercial agents, identified and approached for one specific product in one specific market.",
              nl: "Mogelijke distributeurs en handelsagenten, gezocht en benaderd voor één bepaald product in één bepaalde markt.",
              ar: "موزّعون ووكلاء تجاريون محتملون، نحدّدهم ونتواصل معهم لمنتجٍ بعينه في سوقٍ بعينها.",
            },
          },
          {
            title: { en: "Business structuring", nl: "Bedrijfsstructurering", ar: "هيكلة الأعمال" },
            body: {
              en: "Which entity, where, owned by whom, and how goods and money flow between them — settled before the first contract is signed.",
              nl: "Welke entiteit, waar, van wie, en hoe goederen en geld daartussen stromen — geregeld voordat het eerste contract wordt getekend.",
              ar: "أيّ كيان، وأين، ومَن يملكه، وكيف تتدفق البضائع والأموال بين الكيانات — يُحسم ذلك كله قبل توقيع العقد الأول.",
            },
          },
        ],
      },
      {
        kind: "notice",
        label: { en: "Responsibility", nl: "Verantwoordelijkheid", ar: "المسؤولية" },
        body: [
          {
            en: "DUKAAT advises members from its own practical experience. Where a question calls for specialist advice, a qualified, independent specialist within the DUKAAT network is always available; that professional engagement, and all responsibility for it, sits between the member and the specialist.",
            nl: "DUKAAT adviseert leden vanuit de eigen praktijkervaring. Vraagt een vraag om specialistisch advies, dan is er altijd een gekwalificeerde, onafhankelijke specialist binnen het DUKAAT-netwerk beschikbaar; die professionele opdracht, en alle verantwoordelijkheid daarvoor, ligt tussen het lid en de specialist.",
            ar: "يقدّم DUKAAT المشورة لأعضائه انطلاقاً من خبرته العملية. وحين تتطلب مسألةٌ استشارةً متخصصة، يتوفر دائماً مختصٌّ مؤهّل ومستقل ضمن شبكة DUKAAT؛ ويكون هذا التكليف المهني، وكامل المسؤولية عنه، أمراً بين العضو والمختص.",
          },
        ],
      },
      {
        kind: "prose",
        photo: "adv-specialist",
        size: "tall",
        side: "end",
        label: { en: "How it works", nl: "Zo werkt het", ar: "آلية العمل" },
        heading: { en: "One question, *the right desk.*", nl: "Eén vraag, *het juiste bureau.*", ar: "سؤالٌ واحد، *إلى المكتب المناسب.*" },
        body: [
          {
            en: "A member describes the question, not the discipline: a contract to review, a structure to set up, a market to test. We advise on what we know from practice and, where a specialist is needed, identify the one who fits the subject and the country, brief them in writing, and introduce both sides.",
            nl: "Een lid beschrijft de vraag, niet de discipline: een contract dat moet worden beoordeeld, een structuur die moet worden opgezet, een markt die moet worden getoetst. Wij adviseren over wat wij uit de praktijk kennen en zoeken, waar een specialist nodig is, degene die bij onderwerp en land past, informeren hem schriftelijk en introduceren beide kanten.",
            ar: "يصف العضو المسألة، لا التخصص: عقدٌ يحتاج إلى مراجعة، أو هيكلٌ يحتاج إلى إعداد، أو سوقٌ تحتاج إلى اختبار. نقدّم المشورة فيما نعرفه من الممارسة، وحين يلزم مختص، نحدّد المختص المناسب للموضوع وللبلد، ونُطلعه على المسألة كتابةً، ثم نعرّف كلاً من الطرفين بالآخر.",
          },
          {
            en: "Professional and Executive membership include an annual advisory allowance — for Executive, [6] advisory hours. Beyond it, everything remains possible: more hours, more subjects, more specialists. The more a member asks for, the more it costs — always agreed in advance.",
            nl: "Het Professional- en het Executive-lidmaatschap omvatten een jaarlijks adviestegoed — voor Executive [6] adviesuren. Daarbuiten blijft alles mogelijk: meer uren, meer onderwerpen, meer specialisten. Hoe meer een lid vraagt, hoe meer het kost — altijd vooraf afgesproken.",
            ar: "تشمل عضويتا Professional وExecutive رصيداً استشارياً سنوياً — ويبلغ في Executive ‏[6] ساعات استشارية. وفيما يتجاوزه يبقى كل شيء ممكناً: ساعاتٌ أكثر، ومسائل أكثر، ومختصون أكثر. وكلما طلب العضو أكثر، زادت الكلفة — ويُتّفق عليها دائماً مسبقاً.",
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "Start with *the question.*", nl: "Begin met *de vraag.*", ar: "ابدأ *بالسؤال.*" },
        links: [
          { href: "membership/levels", label: { en: "The three levels", nl: "De drie niveaus", ar: "المستويات الثلاثة" } },
          { href: "services/market-entry", label: { en: "Market entry", nl: "Markttoetreding", ar: "دخول الأسواق" } },
          { href: "contact", label: { en: "Write to us", nl: "Schrijf ons", ar: "راسلنا" } },
        ],
      },
    ],
  },
};
