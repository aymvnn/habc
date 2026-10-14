import type { PageSet } from "./types";

/**
 * Membership — source section 9 ("العضوية ومجتمع دوكات").
 * AR verbatim from owntext/DUKAAT_محتوى كتابة الموقع حديد _AR.md; NL and EN verbatim from owntext/vertalingen/.
 * The "text beside the packages" is the tiers note; every button goes to the contact form with subject "membership".
 */
export const membership: PageSet = {
  membership: {
    masthead: { variant: "band", photo: "f-membership" },
    headline: {
      en: "Belonging that connects you with knowledge, relationships and opportunities",
      nl: "Erbij horen verbindt u met kennis, relaties en kansen",
      ar: "انتماء يربطك بالمعرفة والعلاقات والفرص",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "DUKAAT membership is a space for getting to know one another, for learning, and for developing your commercial and professional presence. We want every member to find a clearer path to what they need, and to have a role in the value the community builds.",
          nl: "Het DUKAAT-lidmaatschap is een ruimte voor kennismaking, leren en het ontwikkelen van zakelijke en professionele aanwezigheid. We willen dat ieder lid een duidelijkere weg vindt naar wat hij of zij nodig heeft, en een rol heeft in de waarde die de community opbouwt.",
          ar: "عضوية دوكات مساحة للتعارف والتعلّم وتطوير الحضور التجاري والمهني. نريد لكل عضو أن يجد طريقًا أوضح إلى ما يحتاجه، وأن يكون له دور في القيمة التي يبنيها المجتمع.",
        },
      },
      {
        kind: "prose",
        body: [
          {
            en: "Memberships are tiered according to the nature of participation and the support required. The services included, their limits, duration and fees are set out in the membership offer before you join.",
            nl: "De lidmaatschappen zijn in niveaus opgebouwd, afhankelijk van de aard van de deelname en de benodigde ondersteuning. De inbegrepen diensten en hun grenzen, looptijd en kosten worden vóór de inschrijving toegelicht in het lidmaatschapsaanbod.",
            ar: "تتدرج العضويات بحسب طبيعة المشاركة والدعم المطلوب. تُوضّح الخدمات المشمولة وحدودها ومدتها ورسومها في عرض العضوية قبل الاشتراك.",
          },
        ],
        photo: "f-roundtable",
        size: "half",
      },
      {
        kind: "tiers",
        tiers: [
          {
            name: "DUKAAT Member",
            subtitle: { en: "Business Membership", nl: "Zakelijk lidmaatschap", ar: "عضوية الأعمال" },
            tagline: {
              en: "Begin your relationship with the DUKAAT community.",
              nl: "Begin uw relatie met de DUKAAT-community.",
              ar: "ابدأ علاقتك بمجتمع دوكات.",
            },
            forWhom: {
              en: "Suited to entrepreneurs, professionals and companies who want to get to know one another, learn and make their activities known.",
              nl: "Geschikt voor ondernemers, professionals en bedrijven die willen kennismaken, leren en hun activiteiten presenteren.",
              ar: "مناسبة لروّاد الأعمال والمهنيين والشركات الذين يريدون التعارف والتعلّم والتعريف بنشاطهم.",
            },
            itemsLabel: {
              en: "Core elements of the membership",
              nl: "Hoofdlijnen van het lidmaatschap",
              ar: "محاور العضوية",
            },
            items: [
              {
                en: "An introduction to the member or company: what they offer and what they are looking for.",
                nl: "Een introductie van het lid of het bedrijf, en van wat het aanbiedt en wat het zoekt.",
                ar: "تعريف بالعضو أو الشركة وما يقدّمه وما يبحث عنه.",
              },
              {
                en: "A presence in the community directory, in line with the publication rules.",
                nl: "Aanwezigheid in de gids van de community, volgens de publicatieregels.",
                ar: "حضور في دليل المجتمع وفق قواعد النشر.",
              },
              {
                en: "Access to selected content, information and opportunities.",
                nl: "Toegang tot geselecteerde content, informatie en kansen.",
                ar: "الاطلاع على محتوى ومعلومات وفرص مختارة.",
              },
              {
                en: "Opportunities to take part in the meetings and programmes designated for this tier.",
                nl: "Mogelijkheden om deel te nemen aan de bijeenkomsten en programma’s die voor deze categorie zijn bepaald.",
                ar: "فرص مشاركة في اللقاءات والبرامج المحددة للفئة.",
              },
              {
                en: "Getting to know the relevant sector communities.",
                nl: "Kennismaking met de relevante sectorcommunity’s.",
                ar: "التعرف إلى المجتمعات القطاعية ذات الصلة.",
              },
              {
                en: "Member benefits in eligible programmes, in line with the published offer.",
                nl: "Gebruikmaken van ledenvoordelen bij de in aanmerking komende programma’s, volgens het aangekondigde aanbod.",
                ar: "الاستفادة من مزايا الأعضاء في البرامج المؤهلة وفق العرض المعلن.",
              },
            ],
            action: {
              href: "contact?subject=membership#contact-form",
              label: {
                en: "Express your interest in the Business Membership",
                nl: "Toon uw interesse in het Zakelijk lidmaatschap",
                ar: "أبدِ اهتمامك بعضوية الأعمال",
              },
            },
          },
          {
            name: "DUKAAT Professional",
            subtitle: { en: "Commercial Growth Membership", nl: "Lidmaatschap voor commerciële groei", ar: "عضوية النمو التجاري" },
            tagline: {
              en: "Make your offer and your commercial need clearer.",
              nl: "Maak uw aanbod en uw commerciële behoefte duidelijker.",
              ar: "اجعل عرضك واحتياجك التجاري أكثر وضوحًا.",
            },
            forWhom: {
              en: "Suited to importers, exporters, manufacturers, service providers and companies with specific commercial needs.",
              nl: "Geschikt voor importeurs, exporteurs, fabrikanten, dienstverleners en bedrijven met specifieke commerciële behoeften.",
              ar: "مناسبة للمستوردين والمصدّرين والمصنّعين ومقدمي الخدمات والشركات ذات الاحتياجات التجارية المحددة.",
            },
            itemsLabel: {
              en: "Core elements of the membership, alongside participation in the community",
              nl: "Hoofdlijnen van het lidmaatschap, naast deelname aan de community",
              ar: "محاور العضوية، إلى جانب المشاركة في المجتمع",
            },
            items: [
              {
                en: "An extended company profile and presentation of products and services within the approved scope.",
                nl: "Een uitgebreid bedrijfsprofiel en een presentatie van de producten en diensten binnen het vastgestelde kader.",
                ar: "ملف شركة موسع وعرض المنتجات والخدمات ضمن النطاق المعتمد.",
              },
              {
                en: "Submitting purchase and commercial cooperation requests.",
                nl: "Het indienen van aanvragen voor inkoop en commerciële samenwerking.",
                ar: "تقديم طلبات شراء وتعاون تجاري.",
              },
              {
                en: "Defined assistance in formulating the request and an initial search for suitable parties.",
                nl: "Afgebakende hulp bij het formuleren van de aanvraag en bij een eerste zoektocht naar passende partijen.",
                ar: "مساعدة محددة في صياغة الطلب والبحث الأولي عن الأطراف المناسبة.",
              },
              {
                en: "Arranging introductions where there is mutual interest.",
                nl: "Het voorbereiden van de kennismaking wanneer er wederzijdse interesse is.",
                ar: "تهيئة التعارف عند وجود اهتمام متبادل.",
              },
              {
                en: "Keeping track of information and opportunities related to the sector and the target market.",
                nl: "Het volgen van informatie en kansen die verband houden met de sector en de doelmarkt.",
                ar: "متابعة معلومات وفرص مرتبطة بالقطاع والسوق المستهدف.",
              },
              {
                en: "Wider participation in learning and meetings, and a review of commercial steps according to the package.",
                nl: "Ruimere deelname aan leeractiviteiten en bijeenkomsten, en het doornemen van de commerciële stappen afhankelijk van het pakket.",
                ar: "مشاركة أوسع في التعلم واللقاءات، ومراجعة الخطوات التجارية بحسب الباقة.",
              },
            ],
            action: {
              href: "contact?subject=membership#contact-form",
              label: {
                en: "Express your interest in the Commercial Growth Membership",
                nl: "Toon uw interesse in het lidmaatschap voor commerciële groei",
                ar: "أبدِ اهتمامك بعضوية النمو التجاري",
              },
            },
          },
          {
            name: "DUKAAT Executive",
            subtitle: { en: "Executive Membership", nl: "Executive-lidmaatschap", ar: "العضوية التنفيذية" },
            tagline: {
              en: "Relationships and structured follow-up for your goals across borders.",
              nl: "Relaties en gestructureerde opvolging voor uw doelen over de grenzen heen.",
              ar: "علاقات ومتابعة منظمة لأهدافك عبر الحدود.",
            },
            forWhom: {
              en: "Suited to company owners and managers who need more tailored support in organising communication and expansion.",
              nl: "Geschikt voor bedrijfseigenaren en leidinggevenden die behoefte hebben aan meer op maat gesneden ondersteuning bij het organiseren van contacten en expansie.",
              ar: "مناسبة لأصحاب الشركات والمديرين الذين يحتاجون إلى دعم أكثر تخصيصًا في تنظيم التواصل والتوسع.",
            },
            itemsLabel: {
              en: "Core elements of the membership",
              nl: "Hoofdlijnen van het lidmaatschap",
              ar: "محاور العضوية",
            },
            items: [
              {
                en: "A point of contact for coordinating requests and follow-up within the scope of the membership.",
                nl: "Een aanspreekpunt voor de coördinatie van aanvragen en opvolging binnen het kader van het lidmaatschap.",
                ar: "نقطة اتصال لتنسيق الطلبات والمتابعة ضمن نطاق العضوية.",
              },
              {
                en: "Organising commercial goals and setting priorities.",
                nl: "Het ordenen van de commerciële doelen en het bepalen van prioriteiten.",
                ar: "ترتيب الأهداف التجارية وتحديد الأولويات.",
              },
              {
                en: "Broader research and follow-up based on agreed tasks.",
                nl: "Ruimer onderzoek en opvolging volgens afgesproken opdrachten.",
                ar: "بحث ومتابعة أوسع وفق مهام متفق عليها.",
              },
              {
                en: "Preparation for important meetings and a review of next steps.",
                nl: "Voorbereiding op belangrijke bijeenkomsten en het doornemen van de vervolgstappen.",
                ar: "التحضير للقاءات المهمة ومراجعة الخطوات التالية.",
              },
              {
                en: "Opportunities to take part in executive sessions and announced specialist meetings.",
                nl: "Mogelijkheden om deel te nemen aan aangekondigde executive sessies en gespecialiseerde bijeenkomsten.",
                ar: "فرص للمشاركة في جلسات تنفيذية ولقاءات متخصصة معلنة.",
              },
              {
                en: "Coordinating interest in delegations, exhibitions and suitable market-entry programmes.",
                nl: "Het coördineren van interesse in passende delegaties, beurzen en programma’s voor markttoetreding.",
                ar: "تنسيق الاهتمام بالوفود والمعارض وبرامج دخول الأسواق المناسبة.",
              },
            ],
            action: {
              href: "contact?subject=membership#contact-form",
              label: {
                en: "Discuss the Executive Membership with us",
                nl: "Bespreek het Executive-lidmaatschap met ons",
                ar: "ناقش معنا العضوية التنفيذية",
              },
            },
          },
        ],
        note: {
          en: "Final details, prices and allocations are set out in the membership offer. Specialised courses, professional consultations, travel and extended research projects may require a separate agreement.",
          nl: "De definitieve details, prijzen en quota worden in het lidmaatschapsaanbod toegelicht. Gespecialiseerde cursussen, professioneel advies, reizen en uitgebreide onderzoeksprojecten kunnen een afzonderlijke overeenkomst vereisen.",
          ar: "التفاصيل والأسعار والحصص النهائية تُوضح في عرض العضوية. الدورات المتخصصة والاستشارات المهنية والسفر ومشاريع البحث الموسعة قد تتطلب اتفاقًا منفصلًا.",
        },
      },
      {
        kind: "prose",
        heading: { en: "Which membership suits you?", nl: "Welk lidmaatschap past bij u?", ar: "أي عضوية تناسبك؟" },
        body: [
          {
            en: "If your goal is getting to know one another and learning, start with the Business Membership. If you have a specific product or request and need commercial support, get to know the Commercial Growth Membership. And if you need more tailored coordination and follow-up, discuss the Executive Membership with us.",
            nl: "Is uw doel kennismaken en leren, begin dan met het Zakelijk lidmaatschap. Heeft u een product of een specifieke aanvraag en heeft u commerciële ondersteuning nodig, maak dan kennis met het lidmaatschap voor commerciële groei. Heeft u behoefte aan meer op maat gesneden coördinatie en opvolging, bespreek dan het Executive-lidmaatschap met ons.",
            ar: "إذا كان هدفك التعارف والتعلّم، ابدأ بعضوية الأعمال. وإذا كان لديك منتج أو طلب محدد وتحتاج إلى دعم تجاري، تعرّف إلى عضوية النمو التجاري. أما إذا كنت تحتاج إلى تنسيق ومتابعة أكثر تخصيصًا، فناقش معنا العضوية التنفيذية.",
          },
        ],
        size: "tall",
        side: "start",
      },
      {
        kind: "prose",
        heading: { en: "Our community's values", nl: "De waarden van onze community", ar: "قيم مجتمعنا" },
        body: [
          {
            en: "We respect time and privacy, present information clearly, and maintain professionalism in how we communicate. We share knowledge, value the diversity of experience, and build relationships on mutual interests and realistic commitments.",
            nl: "We respecteren tijd en privacy, presenteren informatie duidelijk en houden de communicatie professioneel. We delen kennis, waarderen uiteenlopende ervaringen en bouwen relaties op basis van wederzijdse belangen en realistische toezeggingen.",
            ar: "نحترم الوقت والخصوصية، ونعرض المعلومات بوضوح، ونحافظ على المهنية في التواصل. نشارك المعرفة، ونقدّر اختلاف الخبرات، ونبني العلاقات على المصالح المتبادلة والالتزامات الواقعية.",
          },
        ],
      },
      {
        kind: "actions",
        links: [
          {
            href: "contact?subject=membership#contact-form",
            label: {
              en: "Help me choose a membership",
              nl: "Help mij bij het kiezen van een lidmaatschap",
              ar: "ساعدوني في اختيار العضوية",
            },
          },
        ],
      },
      /* ── extras the owner kept (30 Sep 2026), verbatim from commit 2336702: "membership/levels" and "membership" ── */
      {
        kind: "duo",
        photos: ["p-lvl-breakfast", "p-lvl-tea"],
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
        kind: "actions",
        heading: {
          en: "If a member named you, *tell us who.*",
          nl: "Als een lid u heeft genoemd, *laat ons weten wie.*",
          ar: "إن ذكر أحد الأعضاء اسمك، *فأخبرنا مَن.*",
        },
        body: {
          en: "Choose the route “I have been nominated” and give us the member’s name, or apply yourself through the intake.",
          nl: "Kies de route “Ik ben voorgedragen” en geef ons de naam van het lid, of meld u zelf aan via de intake.",
          ar: "اختر المسار «تمّت تزكيتي» وأخبرنا باسم العضو، أو تقدّم بطلب انضمام بنفسك عبر الاستمارة.",
        },
        links: [
          { href: "contact?subject=nominated#contact-form", label: { en: "I have been nominated", nl: "Ik ben voorgedragen", ar: "تمّت تزكيتي" } },
          { href: "contact?subject=membership#contact-form", label: { en: "Apply for membership", nl: "Aanmelden als lid", ar: "التقدّم بطلب عضوية" } },
        ],
      },
    ],
  },

  /* ── extra page the owner kept (30 Sep 2026): old "how-we-work/verification", verbatim from commit 2336702 ── */
  "membership/admission": {
    masthead: { variant: "portrait", photo: "f-arrival" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "No member meets a counterparty that nobody at DUKAAT has checked: the registration looked up, the documents read. Verification is not a formality at the door; it is a large part of what membership is worth.",
          nl: "Geen lid ontmoet een tegenpartij die niemand van DUKAAT heeft gecontroleerd: de inschrijving opgezocht, de stukken gelezen. Verificatie is geen formaliteit bij de deur; het is een groot deel van wat het lidmaatschap waard is.",
          ar: "لا يلتقي أي عضو بطرفٍ مقابل لم يتحقق منه أحدٌ من فريق DUKAAT: السجلُّ مراجَع، والمستنداتُ مقروءة. فالتحقق ليس إجراءً شكلياً عند الباب، بل هو جزءٌ كبير من قيمة العضوية.",
        },
      },
      {
        kind: "register",
        numbered: true,
        cols: 2,
        label: { en: "What we check", nl: "Wat wij controleren", ar: "ما نتحقق منه" },
        heading: { en: "Checked before *anyone meets.*", nl: "Gecontroleerd vóór *de eerste ontmoeting.*", ar: "نتحقق *قبل أي لقاء.*" },
        intro: {
          en: "We make these checks when a company is admitted and, as far as they apply, for any counterparty from outside the network before we introduce it to a member.",
          nl: "Deze controles voeren wij uit bij de toelating van een bedrijf en, voor zover van toepassing, bij elke tegenpartij van buiten het netwerk voordat wij haar aan een lid voorstellen.",
          ar: "نُجري هذه الفحوص عند قبول أي شركة، ونطبّق ما يلزم منها على كل طرف مقابل من خارج الشبكة قبل أن نعرّفه بأحد الأعضاء.",
        },
        items: [
          {
            title: { en: "Company registration", nl: "Inschrijving in het handelsregister", ar: "السجل التجاري" },
            body: {
              en: "The entry in the trade register of the company’s home country: legal name, registration number, legal form, and who is authorised to sign.",
              nl: "De inschrijving in het handelsregister van het land van vestiging: statutaire naam, registratienummer, rechtsvorm, en wie bevoegd is te tekenen.",
              ar: "القيد في السجل التجاري للبلد الذي تأسست فيه الشركة: الاسم القانوني، ورقم التسجيل، والشكل القانوني، ومَن يملك صلاحية التوقيع عنها.",
            },
          },
          {
            title: { en: "VAT information", nl: "Btw-gegevens", ar: "بيانات ضريبة القيمة المضافة" },
            body: {
              en: "The VAT or tax registration number and its status, checked against the public register wherever one is available.",
              nl: "Het btw- of belastingnummer en de status ervan, gecontroleerd in het openbare register waar dat beschikbaar is.",
              ar: "رقم التسجيل في ضريبة القيمة المضافة أو الرقم الضريبي، وحالته، مع التحقق منه في السجل العام حيثما يتوفر.",
            },
          },
          {
            title: { en: "Website and trading activity", nl: "Website en handelsactiviteit", ar: "الموقع الإلكتروني والنشاط التجاري" },
            body: {
              en: "Whether the company actually trades: a working website, products or services that match its registration, and signs of current commercial activity.",
              nl: "Of het bedrijf werkelijk handelt: een werkende website, producten of diensten die passen bij de inschrijving, en tekenen van actuele commerciële activiteit.",
              ar: "هل تتاجر الشركة فعلاً: موقع إلكتروني يعمل، ومنتجات أو خدمات تتفق مع قيدها في السجل، وشواهد على نشاط تجاري قائم.",
            },
          },
          {
            title: { en: "Contact verification", nl: "Verificatie van de contactpersoon", ar: "التحقق من جهة الاتصال" },
            body: {
              en: "That the person we deal with is who they say they are and holds the role they claim — confirmed through the company’s own channels.",
              nl: "Dat onze contactpersoon is wie hij of zij zegt te zijn en de opgegeven functie bekleedt — bevestigd via de eigen kanalen van het bedrijf.",
              ar: "أن هوية الشخص الذي نتعامل معه ومنصبه يطابقان ما يذكره — ونتأكد من ذلك عبر قنوات الشركة نفسها.",
            },
          },
          {
            title: { en: "Company address", nl: "Bedrijfsadres", ar: "عنوان الشركة" },
            body: {
              en: "A real business address that matches the registration: a place where the company works, not only a mailbox.",
              nl: "Een werkelijk bedrijfsadres dat overeenkomt met de inschrijving: een plek waar het bedrijf werkt, niet alleen een postadres.",
              ar: "عنوان عمل حقيقي يطابق القيد في السجل: مكانٌ تعمل فيه الشركة فعلاً، لا مجرد صندوق بريد.",
            },
          },
          {
            title: { en: "Export experience", nl: "Exportervaring", ar: "الخبرة في التصدير" },
            body: {
              en: "What the company has shipped before, and where: markets, product groups, and the documents it is used to handling.",
              nl: "Wat het bedrijf eerder heeft verscheept, en waarheen: markten, productgroepen, en de documenten waarmee het vertrouwd is.",
              ar: "ما صدّرته الشركة من قبل وإلى أين: الأسواق، وفئات المنتجات، والمستندات التي اعتادت التعامل معها.",
            },
          },
          {
            title: { en: "Certifications", nl: "Certificeringen", ar: "الشهادات" },
            body: {
              en: "The certificates a product or process relies on — quality, food safety, origin, halal where relevant — checked for scope and validity.",
              nl: "De certificaten waarop een product of proces steunt — kwaliteit, voedselveiligheid, herkomst, halal waar van toepassing — gecontroleerd op reikwijdte en geldigheid.",
              ar: "الشهادات التي يستند إليها المنتج أو عملية الإنتاج — في الجودة، وسلامة الغذاء، والمنشأ، والحلال حيث يلزم — مع التحقق من نطاقها وسريانها.",
            },
          },
          {
            title: { en: "References we can call", nl: "Referenties die wij kunnen bellen", ar: "مراجع نستطيع الاتصال بها" },
            body: {
              en: "Trading partners prepared to speak to us about the company — a customer, a supplier, a forwarder. We call them ourselves.",
              nl: "Handelspartners die ons over het bedrijf te woord willen staan — een klant, een leverancier, een expediteur. Wij bellen hen zelf.",
              ar: "شركاء تجاريون مستعدون للحديث معنا عن الشركة — عميل، أو مورّد، أو وكيل شحن. ونتصل بهم بأنفسنا.",
            },
          },
          {
            title: { en: "International sanctions lists", nl: "Internationale sanctielijsten", ar: "قوائم العقوبات الدولية" },
            body: {
              en: "The company, its directors and its ultimate owners, checked against international sanctions lists, including those of the European Union, the United Nations and the Netherlands.",
              nl: "Het bedrijf, zijn bestuurders en zijn uiteindelijke eigenaren, getoetst aan internationale sanctielijsten, waaronder die van de Europese Unie, de Verenigde Naties en Nederland.",
              ar: "مطابقة الشركة ومديريها ومالكيها الفعليين بقوائم العقوبات الدولية، ومنها قوائم الاتحاد الأوروبي والأمم المتحدة وهولندا.",
            },
          },
        ],
      },
      {
        kind: "steps",
        label: { en: "Admission", nl: "Toelating", ar: "القبول" },
        heading: { en: "From a name to a *membership number.*", nl: "Van een naam naar een *lidnummer.*", ar: "من اسمٍ إلى *رقم عضوية.*" },
        intro: {
          en: "Whether a company is nominated, invited or applies, admission follows one path, in four steps.",
          nl: "Of een bedrijf nu wordt voorgedragen, uitgenodigd of zich aanmeldt: toelating volgt één weg, in vier stappen.",
          ar: "سواء رُشّحت الشركة أو دُعيت أو تقدّمت بطلب انضمام، فللقبول طريقٌ واحد، في أربع خطوات.",
        },
        items: [
          {
            title: { en: "A nomination, an invitation or an application", nl: "Een voordracht, uitnodiging of aanmelding", ar: "ترشيحٌ أو دعوةٌ أو طلب انضمام" },
            body: {
              en: "A member puts your name forward, we invite you ourselves — sometimes after an intake has shown us what your company trades and needs — or you apply. An application is welcome, and it guarantees nothing.",
              nl: "Een lid draagt u voor, wij nodigen u zelf uit — soms nadat een intake ons heeft laten zien wat uw bedrijf verhandelt en zoekt — of u meldt zich aan. Een aanmelding is welkom, en garandeert niets.",
              ar: "يرشّحك أحد الأعضاء، أو ندعوك نحن — أحياناً بعد أن تكشف لنا استمارة التعارف عمّا تتاجر فيه شركتك وما تحتاج إليه — أو تتقدّم بطلب انضمام. والطلب مرحَّب به، لكنه لا يضمن شيئاً.",
            },
          },
          {
            title: { en: "Documents and a short call", nl: "Documenten en een kort gesprek", ar: "مستندات ومكالمة قصيرة" },
            body: {
              en: "We ask for the documents behind the checks above, and speak with you briefly about what you trade, where, and what you are looking for.",
              nl: "Wij vragen om de stukken die voor de controles hierboven nodig zijn, en spreken u kort over wat u verhandelt, waar, en wat u zoekt.",
              ar: "نطلب المستندات اللازمة للفحوص المذكورة أعلاه، ونتحدث معك باختصار عمّا تتاجر فيه، وأين، وعمّا تبحث عنه.",
            },
          },
          {
            title: { en: "A decision within 10 working days", nl: "Een besluit binnen 10 werkdagen", ar: "قرارٌ خلال 10 أيام عمل" },
            body: {
              en: "An acceptance or a decline, within that term. The decision rests on one question: whether your company fits the club.",
              nl: "Een toelating of een afwijzing, binnen die termijn. Het besluit draait om één vraag: of uw bedrijf bij de club past.",
              ar: "قبولٌ أو اعتذار، خلال تلك المهلة. ويقوم القرار على سؤالٍ واحد: هل تناسب شركتك النادي؟",
            },
          },
          {
            title: { en: "Card and membership number", nl: "Kaart en lidnummer", ar: "البطاقة ورقم العضوية" },
            body: {
              en: "On admission you receive your card and membership number.",
              nl: "Bij toelating ontvangt u uw kaart en lidnummer.",
              ar: "عند القبول تتسلّم بطاقتك ورقم عضويتك.",
            },
          },
        ],
      },
      /* was a "specimen" (the verification record): its fields as a register, its note as a notice */
      {
        kind: "register",
        label: { en: "The record", nl: "Het dossier", ar: "السجلّ" },
        heading: { en: "Trust begins with *clear information.*", nl: "Vertrouwen begint bij *heldere informatie.*", ar: "الثقة تبدأ *بالمعلومات الواضحة.*" },
        intro: {
          en: "What we verify is recorded, field by field, in the company’s file at DUKAAT. The file stays with us; what a member receives is an introduction, prepared on the strength of it.",
          nl: "Wat wij verifiëren, wordt veld voor veld vastgelegd in het dossier van het bedrijf bij DUKAAT. Het dossier blijft bij ons; wat een lid ontvangt, is een introductie die erop steunt.",
          ar: "يُدوَّن ما نتحقق منه، بنداً بنداً، في ملف الشركة لدى DUKAAT. ويبقى الملف لدينا؛ أما ما يتلقاه العضو فتعريفٌ يُعَدّ استناداً إليه.",
        },
        items: [
          {
            title: { en: "Company registration checked", nl: "Inschrijving gecontroleerd", ar: "التحقق من السجل التجاري" },
            body: { en: "Register, number, date of the check", nl: "Register, nummer, datum van controle", ar: "السجل، والرقم، وتاريخ التحقق" },
          },
          {
            title: { en: "VAT information", nl: "Btw-gegevens", ar: "بيانات ضريبة القيمة المضافة" },
            body: { en: "Number and status", nl: "Nummer en status", ar: "الرقم والحالة" },
          },
          {
            title: { en: "Website", nl: "Website", ar: "الموقع الإلكتروني" },
            body: { en: "Address, and whether it matches the registration", nl: "Adres, en of het overeenkomt met de inschrijving", ar: "الرابط، ومدى مطابقته للقيد في السجل" },
          },
          {
            title: { en: "Contact verification", nl: "Verificatie contactpersoon", ar: "التحقق من جهة الاتصال" },
            body: { en: "Name, role, how it was confirmed", nl: "Naam, functie, hoe bevestigd", ar: "الاسم، والمنصب، وطريقة التأكيد" },
          },
          {
            title: { en: "Company address", nl: "Bedrijfsadres", ar: "عنوان الشركة" },
            body: { en: "Registered and trading address", nl: "Vestigingsadres en bezoekadres", ar: "العنوان المسجّل وعنوان العمل" },
          },
          {
            title: { en: "Export experience", nl: "Exportervaring", ar: "الخبرة في التصدير" },
            body: { en: "Markets and product groups", nl: "Markten en productgroepen", ar: "الأسواق وفئات المنتجات" },
          },
          {
            title: { en: "Certifications", nl: "Certificeringen", ar: "الشهادات" },
            body: { en: "Certificate, issuer, valid until", nl: "Certificaat, uitgevende instantie, geldig tot", ar: "الشهادة، والجهة المانحة، وتاريخ انتهاء الصلاحية" },
          },
        ],
      },
      {
        kind: "notice",
        body: [
          {
            en: "This information does not constitute a guarantee, endorsement or warranty by DUKAAT regarding any company, product or transaction. It is provided to support more informed business decisions. Members remain fully responsible for their own due diligence.",
            nl: "Deze informatie vormt geen garantie, aanbeveling of waarborg van DUKAAT ten aanzien van enig bedrijf, product of enige transactie. Zij wordt verstrekt om beter geïnformeerde zakelijke beslissingen te ondersteunen. Leden blijven volledig verantwoordelijk voor hun eigen due diligence.",
            ar: "لا تُشكّل هذه المعلومات ضماناً أو تأييداً أو كفالةً من DUKAAT بشأن أي شركة أو منتج أو معاملة، وإنما تُقدَّم لدعم اتخاذ قراراتٍ تجارية أكثر وعياً. ويبقى الأعضاء مسؤولين مسؤوليةً كاملة عن إجراء الفحص النافي للجهالة بأنفسهم.",
          },
        ],
      },
      {
        kind: "statement",
        text: {
          en: "Not everyone is admitted. That is precisely what makes membership worth having.",
          nl: "Niet iedereen wordt toegelaten. Dat is precies wat het lidmaatschap waard maakt.",
          ar: "لا يُقبل الجميع، وهذا تحديداً ما يمنح العضوية قيمتها.",
        },
      },
      {
        kind: "actions",
        body: {
          en: "If a member has put your name forward, tell us who.",
          nl: "Heeft een lid u voorgedragen, laat ons dan weten wie.",
          ar: "وإن رشّحك أحد الأعضاء، فأخبرنا مَن.",
        },
        links: [
          { href: "membership/fees", label: { en: "How we charge", nl: "Hoe wij factureren", ar: "كيف نحتسب أتعابنا" } },
          { href: "contact?subject=nominated#contact-form", label: { en: "I have been nominated", nl: "Ik ben voorgedragen", ar: "تمّت تزكيتي" } },
        ],
      },
    ],
  },

  /* ── extra page the owner kept (30 Sep 2026): old "how-we-work/fees", verbatim from commit 2336702 ── */
  "membership/fees": {
    masthead: { variant: "plate", photo: "p-fees" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Membership is an annual subscription. Project services (market entry, supplier search, representation) are quoted per engagement in writing. No hidden commissions.",
          nl: "Het lidmaatschap is een jaarabonnement. Projectdiensten (markttoetreding, leverancierszoektocht, vertegenwoordiging) worden per opdracht schriftelijk geoffreerd. Geen verborgen commissies.",
          ar: "العضوية اشتراك سنوي. خدمات المشاريع (دخول الأسواق، البحث عن مورّدين، التمثيل) تُعرض أسعارها كتابةً لكل مهمة على حدة. لا عمولات خفية.",
        },
      },
      /* was a "contrast": its two columns as two registers, its note as a notice */
      {
        kind: "register",
        label: { en: "Two kinds of work", nl: "Twee soorten werk", ar: "نوعان من العمل" },
        heading: { en: "Included in the membership", nl: "Inbegrepen in het lidmaatschap", ar: "مشمولٌ بالعضوية" },
        items: [
          { title: { en: "Company profile and directory listing", nl: "Bedrijfsprofiel en vermelding in het Ledenregister", ar: "ملف الشركة وإدراجها في دليل الأعضاء" } },
          { title: { en: "Opportunity newsletters and alerts", nl: "Nieuwsbrieven en kansenmeldingen", ar: "نشرات الفرص وتنبيهاتها" } },
          { title: { en: "DUKAAT Market, as your level allows", nl: "DUKAAT Market, zoals uw niveau toestaat", ar: "سوق DUKAAT، بحسب ما يتيحه مستواك" } },
          { title: { en: "Member events, and discounts on courses and missions", nl: "Ledenbijeenkomsten, en korting op cursussen en missies", ar: "فعاليات الأعضاء، وخصومات على الدورات والبعثات" } },
        ],
      },
      {
        kind: "register",
        heading: { en: "Quoted per engagement, in writing", nl: "Per opdracht schriftelijk geoffreerd", ar: "بعرض سعر مكتوب لكل مهمة" },
        items: [
          { title: { en: "Market entry: structure, partner, first order", nl: "Markttoetreding: structuur, partner, eerste order", ar: "دخول الأسواق: الهيكل، والشريك، والطلبية الأولى" } },
          { title: { en: "Representation on the other side", nl: "Vertegenwoordiging aan de andere kant", ar: "التمثيل على الضفة الأخرى" } },
        ],
      },
      {
        kind: "notice",
        body: [
          {
            en: "What each level includes is set out on the page about the three levels. What an engagement costs is set out in its quote, before any work begins.",
            nl: "Wat elk niveau omvat, staat op de pagina over de drie niveaus. Wat een opdracht kost, staat in de offerte, voordat er werk begint.",
            ar: "ما يشمله كل مستوى مبيَّن في صفحة المستويات الثلاثة. وما تكلّفه أي مهمة مبيَّن في عرض سعرها، قبل أن يبدأ العمل.",
          },
        ],
      },
      {
        kind: "register",
        cols: 2,
        label: { en: "Principles", nl: "Uitgangspunten", ar: "المبادئ" },
        items: [
          {
            title: { en: "An annual subscription", nl: "Een jaarabonnement", ar: "اشتراك سنوي" },
            body: {
              en: "Membership runs per year and is charged as one subscription. Your level determines what it includes; the membership agreement sets out the rate.",
              nl: "Het lidmaatschap loopt per jaar en wordt als één abonnement gefactureerd. Uw niveau bepaalt wat het omvat; de lidmaatschapsovereenkomst legt het tarief vast.",
              ar: "تسري العضوية سنةً بسنة، وتُحتسب اشتراكاً واحداً. ويحدّد مستواك ما تشمله، وتنصّ اتفاقية العضوية على السعر.",
            },
          },
          {
            title: { en: "Project work, quoted in advance", nl: "Projectwerk, vooraf geoffreerd", ar: "أعمال المشاريع، بعرضٍ مسبق" },
            body: {
              en: "Market entry, searches beyond your level and representation are quoted per engagement, in writing, before any work begins. Nothing is invoiced that was not quoted.",
              nl: "Markttoetreding, zoekopdrachten buiten uw niveau en vertegenwoordiging worden per opdracht schriftelijk geoffreerd, voordat er werk begint. Er wordt niets gefactureerd dat niet is geoffreerd.",
              ar: "تُعرض أسعار دخول الأسواق، وعمليات البحث التي تتجاوز مستواك، والتمثيل، كتابةً لكل مهمة على حدة، قبل بدء أي عمل. ولا نُصدر فاتورةً بشيء لم يَرِد في العرض.",
            },
          },
          {
            title: { en: "No hidden commissions", nl: "Geen verborgen commissies", ar: "لا عمولات خفية" },
            body: {
              en: "We take no undisclosed share of any deal between members, from either side. Whatever we charge is agreed in advance and in writing.",
              nl: "Wij nemen geen verzwegen aandeel in een deal tussen leden, van geen van beide kanten. Wat wij in rekening brengen, wordt vooraf en schriftelijk afgesproken.",
              ar: "لا نتقاضى أي حصة غير معلنة من أي صفقة بين الأعضاء، لا من هذا الطرف ولا من ذاك. وكل ما نتقاضاه يُتفق عليه مسبقاً وكتابةً.",
            },
          },
        ],
      },
      {
        kind: "prose",
        label: { en: "Prices", nl: "Prijzen", ar: "الأسعار" },
        heading: { en: "Why there are no prices *on this site.*", nl: "Waarom er geen prijzen *op deze site staan.*", ar: "سبب غياب الأسعار *عن هذا الموقع.*" },
        body: [
          {
            en: "The right level follows from what a company needs, not from a price list. A manufacturer looking for one distributor in the Gulf needs something different from a trading house sourcing in several markets at once, and each deserves a straight answer about which level fits.",
            nl: "Het juiste niveau volgt uit wat een bedrijf nodig heeft, niet uit een prijslijst. Een fabrikant die één distributeur in de Golf zoekt, heeft iets anders nodig dan een handelshuis dat in meerdere markten tegelijk inkoopt, en beide verdienen een eerlijk antwoord op de vraag welk niveau past.",
            ar: "المستوى المناسب يتحدد بحاجة الشركة، لا بقائمة أسعار. فالمصنع الذي يبحث عن موزّعٍ واحد في الخليج يحتاج إلى غير ما تحتاجه شركة تجارية تشتري من عدة أسواق في آنٍ واحد، وكلاهما يستحق جواباً صريحاً عن المستوى الذي يناسبه.",
          },
          {
            en: "Rates are therefore discussed with you directly, once we know what you trade and where, and set out in the membership agreement before anything is due. Project work is quoted separately, in writing. Nothing is charged that has not first been agreed on paper.",
            nl: "Tarieven bespreken wij daarom rechtstreeks met u, zodra wij weten wat u verhandelt en waar, en zij worden vastgelegd in de lidmaatschapsovereenkomst voordat er iets verschuldigd is. Projectwerk wordt apart en schriftelijk geoffreerd. Er wordt niets in rekening gebracht dat niet eerst op papier is afgesproken.",
            ar: "لذلك نناقش الأسعار معك مباشرةً، بعد أن نعرف ما تتاجر فيه وأين، ثم تُثبَّت في اتفاقية العضوية قبل أن يستحقّ أي مبلغ. وتُعرض أسعار أعمال المشاريع كتابةً وعلى حدة. ولا نتقاضى شيئاً لم يُتفق عليه كتابةً أولاً.",
          },
        ],
      },
      {
        kind: "actions",
        heading: { en: "The levels behind *the subscription.*", nl: "De niveaus achter *het abonnement.*", ar: "المستويات التي *يغطيها الاشتراك.*" },
        links: [
          { href: "membership", label: { en: "The three levels", nl: "De drie niveaus", ar: "المستويات الثلاثة" } },
          { href: "services/boundaries", label: { en: "What we do not do", nl: "Wat wij niet doen", ar: "ما لا نفعله" } },
        ],
      },
    ],
  },

  /* ── extra page the owner kept (30 Sep 2026): old "network/ambassadors", verbatim from commit 2336702 ── */
  "membership/ambassadors": {
    masthead: { variant: "band", photo: "p-ambassadors" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "DUKAAT works with ambassadors in various markets and cities. An ambassador is an established business figure in their own market — someone who knows its people, its customs and its doors.",
          nl: "DUKAAT werkt met ambassadeurs in verschillende markten en steden. Een ambassadeur is een gevestigde ondernemer in de eigen markt — iemand die de mensen, de gebruiken en de deuren daar kent.",
          ar: "يعمل DUKAAT مع سفراء في أسواق ومدن مختلفة. والسفير شخصيةُ أعمالٍ راسخة في سوقها، تعرف أهلها وأعرافها وأبوابها.",
        },
      },
      {
        kind: "register",
        cols: 1,
        numbered: true,
        label: { en: "The role", nl: "De rol", ar: "الدور" },
        heading: { en: "What an ambassador *does.*", nl: "Wat een ambassadeur *doet.*", ar: "ما يقوم به *السفير.*" },
        items: [
          {
            title: { en: "Opens doors", nl: "Opent deuren", ar: "يفتح الأبواب" },
            body: {
              en: "Introductions to the companies, decision-makers and institutions of their market, made personally and with the standing of someone who is known there.",
              nl: "Introducties bij de bedrijven, beslissers en instellingen in zijn markt, persoonlijk verzorgd en met het gezag van iemand die daar bekend is.",
              ar: "تعريفاتٌ بالشركات وأصحاب القرار والمؤسسات في سوقه، يُجريها بنفسه وبمكانة من يعرفه الناس هناك.",
            },
          },
          {
            title: { en: "Hosts visiting members", nl: "Ontvangt bezoekende leden", ar: "يستقبل الأعضاء الزائرين" },
            body: {
              en: "When DUKAAT members travel to the ambassador’s country, the ambassador receives them and helps them understand how business is done there, before the first meeting.",
              nl: "Wanneer leden van DUKAAT naar het land van de ambassadeur reizen, ontvangt de ambassadeur hen en helpt hen te begrijpen hoe daar zaken worden gedaan, nog vóór het eerste gesprek.",
              ar: "حين يسافر أعضاء DUKAAT إلى بلده، يستقبلهم ويعينهم على فهم كيف تُدار الأعمال هناك، قبل اللقاء الأول.",
            },
          },
          {
            title: { en: "Brings local opportunities in", nl: "Brengt lokale kansen binnen", ar: "يأتي بالفرص المحلية إلى الشبكة" },
            body: {
              en: "Needs, suppliers, projects and openings in their market reach DUKAAT through the ambassador — and are verified like any other before they reach a member.",
              nl: "Vraag, aanbod en projecten uit zijn markt bereiken DUKAAT via de ambassadeur — en worden geverifieerd zoals al het andere, voordat ze een lid bereiken.",
              ar: "تصل إلى DUKAAT عن طريق السفير احتياجاتُ سوقه ومورّدوها ومشاريعها وفرصها — ويُتحقَّق منها كما يُتحقَّق من غيرها قبل أن تُعرض على أي عضو.",
            },
          },
          {
            title: { en: "Represents DUKAAT in that market", nl: "Vertegenwoordigt DUKAAT in die markt", ar: "يمثّل DUKAAT في تلك السوق" },
            body: {
              en: "A named position: the ambassador represents DUKAAT in their market or city, within a role agreed in writing.",
              nl: "Een benoemde functie: de ambassadeur vertegenwoordigt DUKAAT in zijn markt of stad, binnen een rol die schriftelijk is vastgelegd.",
              ar: "تعيينٌ رسمي بالاسم: يمثّل السفير DUKAAT في سوقه أو مدينته، ضمن دورٍ محدّدٍ كتابةً.",
            },
          },
        ],
      },
      {
        kind: "prose",
        photo: "p-amb-facade",
        size: "tall",
        side: "end",
        label: { en: "The choice", nl: "De keuze", ar: "الاختيار" },
        heading: { en: "By invitation, *on reputation.*", nl: "Op uitnodiging, *op reputatie.*", ar: "بالدعوة، *وعلى أساس السمعة.*" },
        body: [
          {
            en: "The position is not advertised, and there is no form for it. DUKAAT invites its ambassadors in the same way that members are admitted: on reputation, after verifying the company, its activity and its references.",
            nl: "De functie wordt niet uitgeschreven, en er is geen formulier voor. DUKAAT nodigt zijn ambassadeurs uit op dezelfde manier waarop leden worden toegelaten: op reputatie, na verificatie van het bedrijf, de activiteit en de referenties.",
            ar: "لا يُعلَن عن هذا المنصب، وليست له استمارة. يدعو DUKAAT سفراءه بالطريقة نفسها التي يُقبل بها الأعضاء: على أساس السمعة، وبعد التحقق من الشركة ونشاطها ومراجعها.",
          },
          {
            en: "What we look for is standing, not size: a business person with a real trading life in their own market, trusted there, and at ease on both sides — in the Netherlands and Europe as well as in the Arab world.",
            nl: "Wij zoeken aanzien, geen omvang: een ondernemer die in zijn eigen markt werkelijk handel drijft, daar vertrouwen geniet en aan beide kanten thuis is — in Nederland en Europa én in de Arabische wereld.",
            ar: "ما نبحث عنه هو المكانة لا الحجم: صاحبُ أعمالٍ يمارس التجارة فعلاً في سوقه، ويحظى فيها بالثقة، ويألف العمل على الضفتين — في هولندا وأوروبا كما في العالم العربي.",
          },
          {
            en: "The choice is made with care, and the market or city, the scope of the role and its terms are agreed in writing.",
            nl: "De keuze wordt zorgvuldig gemaakt, en de markt of stad, de reikwijdte van de rol en de voorwaarden worden schriftelijk vastgelegd.",
            ar: "ويجري الاختيار بعناية، وتُحدَّد كتابةً السوقُ أو المدينة، ونطاقُ الدور، وشروطُه.",
          },
        ],
      },
      {
        kind: "actions",
        heading: { en: "Into the market, *in person.*", nl: "De markt in, *persoonlijk.*", ar: "إلى السوق، *حضورياً.*" },
        links: [
          { href: "events/missions", label: { en: "Trade missions", nl: "Handelsmissies", ar: "البعثات التجارية" } },
          { href: "services/advisory", label: { en: "Market entry", nl: "Markttoetreding", ar: "دخول الأسواق" } },
          { href: "services/representation", label: { en: "Representation", nl: "Vertegenwoordiging", ar: "التمثيل" } },
        ],
      },
    ],
  },
};
