import type { PageSet } from "./types";

/**
 * DUKAAT Market — the group overview and its four doors: products, buyer requests, stocklots, machinery.
 * Sources: content master p.16–17 (DUKAAT Market, Buyer Requests, Stocklots & Clearance, Used Machinery) and p.19
 * (the verification disclaimer, verbatim in English); the compagnon's Arabic draft §7–10 (السوق والمنتجات,
 * Buyer Requests, Stocklots والتصفيات, الماكينات والمعدات المستعملة).
 * The market is described as it works, in the present tense. No live listings, no counts. The three sample request
 * lines on the buyer-requests page carry no label: they speak for themselves (owner, 29 Sep 2026).
 */
export const market: PageSet = {
  market: {
    masthead: { variant: "band", photo: "market-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "DUKAAT Market is a professional B2B marketplace for products and trade opportunities between Europe and the Arab world: the place where admitted members show what they offer, state what they need, and start the conversation.",
          nl: "DUKAAT Market is een professionele B2B-marktplaats voor producten en handelskansen tussen Europa en de Arabische wereld: de plek waar toegelaten leden laten zien wat zij aanbieden, aangeven wat zij zoeken en het gesprek beginnen.",
          ar: "سوق DUKAAT سوقٌ احترافية للتجارة بين الشركات (B2B)، تجمع المنتجات والفرص التجارية بين أوروبا والعالم العربي. وهي المكان الذي يعرض فيه الأعضاء المقبولون ما يقدّمونه، ويعلنون ما يحتاجون إليه، ويبدؤون المحادثة.",
        },
      },
      {
        kind: "index",
        label: { en: "Four doors", nl: "Vier ingangen", ar: "أربعة أبواب" },
        heading: {
          en: "Choose the door that fits *your trade.*",
          nl: "Kies de ingang die past bij *uw handel.*",
          ar: "اختر الباب الذي يناسب *تجارتك.*",
        },
      },
      {
        kind: "register",
        label: { en: "The mechanism", nl: "De werkwijze", ar: "الآلية" },
        heading: {
          en: "How a listing *works.*",
          nl: "Zo komt iets *op de markt.*",
          ar: "هكذا يعمل *الإدراج.*",
        },
        intro: {
          en: "Four rules hold for everything in the market, whichever door it comes through.",
          nl: "Vier regels gelden voor alles in de markt, via welke ingang het ook binnenkomt.",
          ar: "أربع قواعد تسري على كل ما في السوق، أياً كان الباب الذي يدخل منه.",
        },
        cols: 2,
        numbered: true,
        items: [
          {
            title: {
              en: "Seen by admitted members only",
              nl: "Alleen zichtbaar voor toegelaten leden",
              ar: "للأعضاء المقبولين وحدهم",
            },
            body: {
              en: "Listings circulate inside the club, among members who have been verified and admitted. They are not published on this site or on the open web.",
              nl: "Vermeldingen circuleren binnen de club, onder leden die zijn geverifieerd en toegelaten. Zij verschijnen niet op deze site en niet op het openbare internet.",
              ar: "تُتداول الإدراجات داخل النادي، بين أعضاءٍ جرى التحقق منهم وقبولهم، ولا تُنشر على هذا الموقع ولا على الإنترنت المفتوح.",
            },
          },
          {
            title: {
              en: "A person has checked the company",
              nl: "Iemand heeft het bedrijf gecontroleerd",
              ar: "شخصٌ تحقّق من الشركة",
            },
            body: {
              en: "Behind every listing is a company that someone at DUKAAT has checked: its registration, its activity, its references. Technology narrows the search; people verify.",
              nl: "Achter elke vermelding staat een bedrijf dat iemand van DUKAAT heeft gecontroleerd: handelsregister, activiteit, referenties. Technologie verkleint het zoekveld; mensen verifiëren.",
              ar: "وراء كل إدراجٍ شركةٌ تحقّق منها أحدُ أفراد فريق DUKAAT: قيدُها في السجل التجاري، ونشاطُها، ومراجعُها. التقنية تضيّق البحث؛ والبشر يتحققون.",
            },
          },
          {
            title: {
              en: "Contact runs through DUKAAT",
              nl: "Contact loopt via DUKAAT",
              ar: "التواصل يمرّ عبر DUKAAT",
            },
            body: {
              en: "Members reach each other through DUKAAT, with a specific request — for information, a quotation, a sample or the details of a lot. Both sides know who they are dealing with from the first message.",
              nl: "Leden benaderen elkaar via DUKAAT, met een concreet verzoek — om informatie, een offerte, een monster of de details van een partij. Beide kanten weten vanaf het eerste bericht met wie zij te maken hebben.",
              ar: "يتواصل الأعضاء فيما بينهم عبر DUKAAT بطلبٍ محدّد: طلبِ معلومات، أو عرضِ سعر، أو عيّنة، أو تفاصيلِ دفعةٍ من المخزون. ويعرف كلٌّ من الطرفين منذ الرسالة الأولى مع مَن يتعامل.",
            },
          },
          {
            title: {
              en: "Nothing without the member’s approval",
              nl: "Niets zonder akkoord van het lid",
              ar: "لا شيء دون موافقة العضو",
            },
            body: {
              en: "A member decides what a listing shows, and approves the final text before it circulates. Prices need not be published; they can be given on request.",
              nl: "Het lid bepaalt wat een vermelding laat zien en keurt de definitieve tekst goed voordat die circuleert. Prijzen hoeven niet te worden gepubliceerd; zij zijn op aanvraag beschikbaar.",
              ar: "يقرّر العضو ما يُظهره إدراجه، ويعتمد نصّه النهائي قبل أن يُتداول. ولا يُشترط نشر الأسعار؛ إذ يمكن تقديمها عند الطلب.",
            },
          },
        ],
      },
      {
        kind: "notice",
        label: { en: "Verification", nl: "Verificatie", ar: "التحقق" },
        heading: { en: "Information, not a *guarantee.*", nl: "Informatie, geen *garantie.*", ar: "معلوماتٌ، لا *ضمان.*" },
        body: [
          {
            en: "What DUKAAT has checked about a company — registration, VAT information, website, contact details, address, export experience, certifications — is recorded in its file with us, and informs every introduction.",
            nl: "Wat DUKAAT over een bedrijf heeft gecontroleerd — handelsregister, btw-gegevens, website, contactgegevens, adres, exportervaring, certificaten — staat in het dossier bij ons, en ligt onder elke introductie.",
            ar: "يُدوَّن ما تحقّق منه DUKAAT بشأن شركةٍ ما — قيدها في السجل التجاري، وبيانات ضريبة القيمة المضافة، وموقعها الإلكتروني، وبيانات الاتصال، والعنوان، والخبرة في التصدير، والشهادات — في ملفها لدينا، ويستند إليه كل تعريف.",
          },
          {
            en: "This information does not constitute a guarantee, endorsement or warranty by DUKAAT regarding any company, product or transaction. It is provided to support more informed business decisions. Members remain fully responsible for their own due diligence.",
            nl: "Deze informatie vormt geen garantie, aanbeveling of waarborg van DUKAAT ten aanzien van enig bedrijf, product of enige transactie. Zij wordt verstrekt om beter geïnformeerde zakelijke beslissingen te ondersteunen. Leden blijven volledig verantwoordelijk voor hun eigen due diligence.",
            ar: "لا تُشكّل هذه المعلومات ضماناً أو تأييداً أو كفالةً من DUKAAT بشأن أي شركة أو منتج أو معاملة، وإنما تُقدَّم لدعم اتخاذ قراراتٍ تجارية أكثر وعياً. ويبقى الأعضاء مسؤولين مسؤوليةً كاملة عن إجراء الفحص النافي للجهالة بأنفسهم.",
          },
        ],
      },
      {
        kind: "prose",
        label: { en: "DUKAAT Deal Alert", nl: "DUKAAT Deal Alert", ar: "DUKAAT Deal Alert" },
        heading: {
          en: "The right opportunity *comes to you.*",
          nl: "De juiste kans *komt naar u toe.*",
          ar: "الفرصة المناسبة *تأتي إليك.*",
        },
        body: [
          {
            en: "Not every member can watch the market every day. DUKAAT Deal Alert sends relevant opportunities directly to members, selected by the sectors and markets each member trades in: a new product, a buyer request in their field, a lot that has just become available, a machine about to leave a factory floor.",
            nl: "Niet elk lid kan de markt elke dag volgen. DUKAAT Deal Alert stuurt relevante kansen rechtstreeks naar leden, geselecteerd op de sectoren en markten waarin zij handelen: een nieuw product, een inkoopaanvraag in het eigen vak, een partij die net is vrijgekomen, een machine die op het punt staat een fabriekshal te verlaten.",
            ar: "لا يتّسع وقت كل عضو لمتابعة السوق كل يوم. ومن خلال DUKAAT Deal Alert تصل الفرص ذات الصلة مباشرةً إلى الأعضاء، مختارةً بحسب القطاعات والأسواق التي يتاجر فيها كلٌّ منهم: منتجٌ جديد، أو طلبُ شراءٍ في مجاله، أو دفعةُ مخزونٍ أُتيحت للتو، أو آلةٌ توشك أن تغادر صالة المصنع.",
          },
          {
            en: "An alert is short and precise: what it is, how much, where, and from when. The details are one request away. As with every match, a person reviews it before it goes out.",
            nl: "Een melding is kort en precies: wat het is, hoeveel, waar en vanaf wanneer. Met één stap vraagt u de details op. Zoals bij elke match beoordeelt een mens de melding voordat die uitgaat.",
            ar: "التنبيه قصيرٌ ودقيق: ما الفرصة، وما كميتها، وأين توجد، ومتى تُتاح. وتكفي خطوةٌ واحدة لطلب التفاصيل. وكما في كل مطابقة، يراجعه إنسانٌ قبل أن يُرسَل.",
          },
        ],
      },
      {
        kind: "next",
        heading: {
          en: "Something to offer, or *something to find.*",
          nl: "Iets te bieden, of *iets nodig.*",
          ar: "لديك ما تعرضه، أو *ما تبحث عنه.*",
        },
        body: {
          en: "Tell us what you have or what you need, and in which market. We reply within 5 working days.",
          nl: "Laat ons weten wat u hebt of wat u nodig hebt, en in welke markt. Wij antwoorden binnen 5 werkdagen.",
          ar: "أخبرنا بما لديك أو بما تحتاج إليه، وفي أي سوق. نردّ خلال 5 أيام عمل.",
        },
        links: [
          { href: "contact?intent=sell#intake", label: { en: "I want to sell", nl: "Ik wil verkopen", ar: "أريد أن أبيع" } },
          { href: "contact?intent=buy#intake", label: { en: "I want to buy", nl: "Ik wil inkopen", ar: "أريد أن أشتري" } },
          {
            href: "how-we-work/verification",
            label: { en: "Verification & admission", nl: "Verificatie & toelating", ar: "التحقق والقبول" },
          },
        ],
      },
    ],
  },

  "market/products": {
    masthead: { variant: "portrait", photo: "prod-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "DUKAAT Market is not a shop but a marketplace between businesses. A product is presented the way a professional buyer needs to see it: what it is, where it is made, how much can be delivered, under which certificates.",
          nl: "DUKAAT Market is geen winkel, maar een markt tussen bedrijven. Een product wordt er gepresenteerd zoals een professionele inkoper het wil zien: wat het is, waar het wordt gemaakt, hoeveel er geleverd kan worden en met welke certificaten.",
          ar: "سوق DUKAAT ليست متجراً للتجزئة، بل سوقٌ بين الشركات. يُعرض فيها المنتج كما يحتاج المشتري المحترف إلى أن يراه: ما هو، وأين يُصنع، وكم يمكن توريده، وبأي شهادات.",
        },
      },
      {
        kind: "specimen",
        label: { en: "The profile", nl: "Het profiel", ar: "الملف" },
        heading: {
          en: "Everything a buyer asks *first.*",
          nl: "Alles wat een inkoper *eerst vraagt.*",
          ar: "كل ما يسأل عنه المشتري *أولاً.*",
        },
        intro: {
          en: "The profile answers, in advance, the questions a buyer would otherwise ask by e-mail. A member fills in what is relevant to the product and leaves out the rest.",
          nl: "Het profiel beantwoordt vooraf de vragen die een inkoper anders per e-mail zou stellen. Een lid vult in wat voor het product relevant is en laat de rest weg.",
          ar: "يجيب الملف مسبقاً عن الأسئلة التي كان المشتري سيطرحها بالبريد الإلكتروني لولاه. ويملأ العضو ما يتعلّق بمنتجه، ويترك ما عداه.",
        },
        title: { en: "A product profile", nl: "Een productprofiel", ar: "ملف المنتج" },
        fields: [
          {
            label: { en: "Images", nl: "Foto’s", ar: "الصور" },
            hint: {
              en: "The product, its packaging, the place where it is made.",
              nl: "Het product, de verpakking, de plek waar het wordt gemaakt.",
              ar: "المنتج وتغليفه والمكان الذي يُصنع فيه.",
            },
          },
          {
            label: { en: "Video", nl: "Video", ar: "الفيديو" },
            hint: {
              en: "A short film of the product or its production.",
              nl: "Een korte film van het product of de productie.",
              ar: "مقطعٌ قصير للمنتج أو لمراحل إنتاجه.",
            },
          },
          {
            label: { en: "Specifications", nl: "Specificaties", ar: "المواصفات" },
            hint: {
              en: "Composition, dimensions, grades, the standards it meets.",
              nl: "Samenstelling, afmetingen, kwaliteiten, de normen waaraan het voldoet.",
              ar: "التركيب، والأبعاد، ودرجات الجودة، والمعايير التي يستوفيها.",
            },
          },
          {
            label: { en: "Country of origin", nl: "Land van herkomst", ar: "بلد المنشأ" },
            hint: {
              en: "Where the product is made, as it appears on the documents.",
              nl: "Waar het product wordt gemaakt, zoals het op de documenten komt te staan.",
              ar: "مكان صنع المنتج، كما يَرِد في المستندات.",
            },
          },
          {
            label: { en: "Minimum order quantity", nl: "Minimale afname", ar: "الحدّ الأدنى للطلب" },
            hint: {
              en: "The smallest order the supplier accepts.",
              nl: "De kleinste order die de leverancier aanneemt.",
              ar: "أصغر طلبية يقبلها المورّد.",
            },
          },
          {
            label: { en: "Production capacity", nl: "Productiecapaciteit", ar: "الطاقة الإنتاجية" },
            hint: {
              en: "What can be produced per month or per season.",
              nl: "Wat er per maand of per seizoen kan worden geproduceerd.",
              ar: "ما يمكن إنتاجه في الشهر أو في الموسم.",
            },
          },
          {
            label: { en: "Private-label options", nl: "Huismerkmogelijkheden", ar: "خيارات العلامة الخاصة" },
            hint: {
              en: "Whether the product can be made under the buyer’s own brand.",
              nl: "Of het product onder het eigen merk van de koper kan worden gemaakt.",
              ar: "ما إذا كان يمكن تصنيع المنتج بعلامة المشتري التجارية (Private Label).",
            },
          },
          {
            label: { en: "Certifications", nl: "Certificaten", ar: "الشهادات" },
            hint: {
              en: "The quality, safety and origin certificates the product holds.",
              nl: "De kwaliteits-, veiligheids- en herkomstcertificaten van het product.",
              ar: "شهادات الجودة والسلامة والمنشأ التي يحملها المنتج.",
            },
          },
          {
            label: { en: "Packaging", nl: "Verpakking", ar: "التعبئة والتغليف" },
            hint: {
              en: "Unit, carton and pallet; export packaging where needed.",
              nl: "Eenheid, doos en pallet; exportverpakking waar nodig.",
              ar: "الوحدة، والكرتونة، والمنصّة النقّالة (البالِت)؛ وتغليف التصدير عند الحاجة.",
            },
          },
          {
            label: { en: "Available quantity", nl: "Beschikbare hoeveelheid", ar: "الكمية المتاحة" },
            hint: {
              en: "What is ready now, and what can be made to order.",
              nl: "Wat nu klaarstaat, en wat op bestelling kan worden gemaakt.",
              ar: "ما هو جاهزٌ الآن، وما يمكن تصنيعه حسب الطلب.",
            },
          },
        ],
        note: {
          en: "Nothing in the profile circulates until the member has approved it. Prices need not be shown; a buyer who needs one asks for a quotation.",
          nl: "Niets uit het profiel circuleert voordat het lid het heeft goedgekeurd. Prijzen hoeven er niet in te staan; een inkoper die een prijs nodig heeft, vraagt een offerte aan.",
          ar: "لا يُتداول شيءٌ من الملف قبل أن يوافق عليه العضو. ولا يُشترط إظهار الأسعار؛ فالمشتري الذي يحتاج إلى سعرٍ يطلب عرض سعر.",
        },
      },
      {
        kind: "contrast",
        label: { en: "Two directions", nl: "Twee richtingen", ar: "اتجاهان" },
        heading: {
          en: "Products travel *both ways.*",
          nl: "Producten reizen *in beide richtingen.*",
          ar: "المنتجات تعبر *في الاتجاهين.*",
        },
        intro: {
          en: "The market keeps a section for each direction of trade, each aimed at the companies its products are meant to reach.",
          nl: "De markt heeft voor elke handelsrichting een eigen afdeling, gericht op de bedrijven die de producten moeten bereiken.",
          ar: "تخصّص السوق قسماً لكل اتجاهٍ من اتجاهَي التجارة، يستهدف الشركات التي يُراد لمنتجاته أن تبلغها.",
        },
        a: {
          title: {
            en: "European products, for the Arab world",
            nl: "Europese producten, voor de Arabische wereld",
            ar: "منتجات أوروبية للعالم العربي",
          },
          items: [
            { en: "Importers", nl: "Importeurs", ar: "المستوردون" },
            { en: "Distributors", nl: "Distributeurs", ar: "الموزّعون" },
            { en: "Commercial agents", nl: "Handelsagenten", ar: "الوكلاء التجاريون" },
            { en: "Buyers", nl: "Inkopers", ar: "المشترون" },
            { en: "Partners", nl: "Partners", ar: "الشركاء" },
          ],
        },
        b: {
          title: {
            en: "Arab products, for Europe",
            nl: "Arabische producten, voor Europa",
            ar: "منتجات عربية لأوروبا",
          },
          items: [
            { en: "Buyers", nl: "Inkopers", ar: "المشترون" },
            { en: "Importers", nl: "Importeurs", ar: "المستوردون" },
            { en: "Distributors", nl: "Distributeurs", ar: "الموزّعون" },
            { en: "Retail chains", nl: "Winkelketens", ar: "سلاسل البيع بالتجزئة" },
            { en: "Wholesalers", nl: "Groothandels", ar: "تجّار الجملة" },
          ],
        },
      },
      {
        kind: "register",
        photo: "prod-showroom",
        label: { en: "Four requests", nl: "Vier verzoeken", ar: "أربعة طلبات" },
        heading: {
          en: "Every enquiry is one of *four requests.*",
          nl: "Elke reactie is een van *vier verzoeken.*",
          ar: "كل استفسار يندرج تحت *واحدٍ من أربعة طلبات.*",
        },
        intro: {
          en: "Interest in a product takes one of four forms. Each request reaches the supplier through DUKAAT, with the name of the member who sent it.",
          nl: "Belangstelling voor een product neemt een van vier vormen aan. Elk verzoek bereikt de leverancier via DUKAAT, met de naam van het lid dat het stuurde.",
          ar: "يأخذ الاهتمام بمنتجٍ ما إحدى أربع صور. ويصل كل طلب إلى المورّد عبر DUKAAT، مقروناً باسم العضو الذي أرسله.",
        },
        numbered: true,
        items: [
          {
            title: { en: "Request information", nl: "Informatie opvragen", ar: "طلب معلومات" },
            body: {
              en: "For what the profile does not answer: a document, a lead time, a detail of the specification. The supplier replies through DUKAAT.",
              nl: "Voor wat het profiel niet beantwoordt: een document, een levertijd, een detail uit de specificatie. De leverancier antwoordt via DUKAAT.",
              ar: "لكل ما لا يجيب عنه الملف: مستندٌ، أو مهلة توريد، أو تفصيلٌ في المواصفات. ويردّ المورّد عبر DUKAAT.",
            },
          },
          {
            title: { en: "Request a quotation", nl: "Offerte aanvragen", ar: "طلب عرض سعر" },
            body: {
              en: "For a price on a stated quantity, to a stated destination, on stated delivery terms — so the figure that comes back can be compared and acted on.",
              nl: "Voor een prijs bij een opgegeven hoeveelheid, bestemming en leveringsvoorwaarden — zodat u de prijs die terugkomt kunt vergelijken en er direct mee verder kunt.",
              ar: "للحصول على سعرٍ لكميةٍ محدّدة، إلى وجهةٍ محدّدة، وبشروط تسليمٍ محدّدة — حتى يكون السعر الذي يرد قابلاً للمقارنة والبناء عليه.",
            },
          },
          {
            title: { en: "Request a sample", nl: "Monster aanvragen", ar: "طلب عيّنة" },
            body: {
              en: "Where the supplier offers samples: to see, test or taste the product before the first order is placed.",
              nl: "Waar de leverancier monsters aanbiedt: om het product te zien, te testen of te proeven voordat de eerste order wordt geplaatst.",
              ar: "حيث يوفّر المورّد عيّنات: لمعاينة المنتج أو اختباره أو تذوّقه قبل تقديم الطلبية الأولى.",
            },
          },
          {
            title: { en: "Become a distributor", nl: "Distributeur worden", ar: "إبداء الرغبة في التوزيع" },
            body: {
              en: "For a company that wants to carry the product in its own market. The supplier learns that a verified party wants to distribute it in a specific country.",
              nl: "Voor een bedrijf dat het product in de eigen markt wil voeren. De leverancier hoort dat een geverifieerde partij het in een bepaald land wil distribueren.",
              ar: "لشركةٍ تريد أن تطرح المنتج في سوقها. فيعلم المورّد أن طرفاً موثّقاً يرغب في توزيعه في بلدٍ محدّد.",
            },
          },
        ],
      },
      {
        kind: "next",
        heading: {
          en: "Show the other side *what you offer.*",
          nl: "Laat de andere kant zien *wat u aanbiedt.*",
          ar: "اعرض على الضفة الأخرى *ما تقدّمه.*",
        },
        body: {
          en: "Tell us what you offer, in what volumes, and which market it should reach.",
          nl: "Laat ons weten wat u aanbiedt, in welke volumes en welke markt het moet bereiken.",
          ar: "أخبرنا بما تقدّمه، وبأي كميات، وإلى أي سوق تريد أن يصل.",
        },
        links: [
          { href: "contact?intent=sell#intake", label: { en: "I want to sell", nl: "Ik wil verkopen", ar: "أريد أن أبيع" } },
          {
            href: "contact?intent=distributor#intake",
            label: { en: "I need a distributor", nl: "Ik zoek een distributeur", ar: "أحتاج إلى موزّع" },
          },
          { href: "market/buyer-requests", label: { en: "Buyer requests", nl: "Inkoopaanvragen", ar: "طلبات الشراء" } },
        ],
      },
    ],
  },

  "market/buyer-requests": {
    masthead: { variant: "band", photo: "br-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "We do not wait for buyers to find products. We let buyers tell the market exactly what they need — and we carry each request to the suppliers who can meet it.",
          nl: "Wij wachten niet tot kopers producten vinden. Wij laten kopers de markt precies vertellen wat zij nodig hebben — en brengen elke aanvraag bij de leveranciers die eraan kunnen voldoen.",
          ar: "لا ننتظر أن يجد المشتري المنتج، بل نتيح له أن يخبر السوق بما يحتاج إليه بدقة — ثم نحمل كل طلبٍ إلى المورّدين القادرين على تلبيته.",
        },
      },
      {
        kind: "specimen",
        label: { en: "The format", nl: "De vorm", ar: "الصيغة" },
        heading: {
          en: "How a request *reads.*",
          nl: "Zo ziet *een aanvraag eruit.*",
          ar: "هكذا يُكتب *طلب الشراء.*",
        },
        intro: {
          en: "A good request is short and exact. Six lines tell a supplier at once whether they can answer it.",
          nl: "Een goede aanvraag is kort en precies. Aan zes regels ziet een leverancier meteen of hij die kan beantwoorden.",
          ar: "الطلب الجيد قصيرٌ ودقيق. ستة أسطر تكفي ليعرف المورّد على الفور ما إذا كان قادراً على تلبيته.",
        },
        title: { en: "A buyer request", nl: "Een inkoopaanvraag", ar: "طلب شراء" },
        fields: [
          {
            label: { en: "What you need", nl: "Wat u nodig hebt", ar: "ما تحتاج إليه" },
            hint: {
              en: "The product, material or equipment, named as the trade names it.",
              nl: "Het product, het materiaal of de machine, zoals de branche het noemt.",
              ar: "المنتج أو المادة أو المعدّات، بالاسم المتداول في القطاع.",
            },
          },
          {
            label: { en: "Quantity", nl: "Hoeveelheid", ar: "الكمية" },
            hint: {
              en: "Tonnes, units or containers; one delivery or a recurring volume.",
              nl: "Ton, stuks of containers; één levering of een terugkerend volume.",
              ar: "بالطن أو بالقطعة أو بالحاوية؛ شحنةٌ واحدة أو كمياتٌ متكرّرة.",
            },
          },
          {
            label: { en: "Specification or standard", nl: "Specificatie of norm", ar: "المواصفات أو المعيار" },
            hint: {
              en: "Grade, dimensions, composition, or the standard the goods must meet.",
              nl: "Kwaliteit, afmetingen, samenstelling, of de norm waaraan de goederen moeten voldoen.",
              ar: "درجة الجودة، والأبعاد، والتركيب، أو المعيار الذي يجب أن تستوفيه البضاعة.",
            },
          },
          {
            label: { en: "Destination market", nl: "Bestemmingsmarkt", ar: "سوق الوجهة" },
            hint: {
              en: "Where the goods must arrive, and on which delivery terms.",
              nl: "Waar de goederen moeten aankomen, en onder welke leveringsvoorwaarden.",
              ar: "أين يجب أن تصل البضاعة، وبأي شروط تسليم.",
            },
          },
          {
            label: { en: "Timing", nl: "Termijn", ar: "التوقيت" },
            hint: {
              en: "When the first delivery is needed, and for how long.",
              nl: "Wanneer de eerste levering nodig is, en voor hoe lang.",
              ar: "متى يلزم التوريد الأول، ولأي مدة.",
            },
          },
          {
            label: { en: "Certificates required", nl: "Vereiste certificaten", ar: "الشهادات المطلوبة" },
            hint: {
              en: "What the buyer, or the destination market, requires on paper.",
              nl: "Wat de koper, of de bestemmingsmarkt, op papier eist.",
              ar: "ما يشترطه المشتري، أو سوق الوجهة، من شهادات.",
            },
          },
        ],
        examples: [
          {
            en: "Looking for 300 tonnes of coated paper.",
            nl: "Gezocht: 300 ton gecoat papier.",
            ar: "نبحث عن 300 طن من ورق الكوشيه.",
          },
          {
            en: "Searching for a private-label manufacturer.",
            nl: "Gezocht: een fabrikant voor huismerkproductie.",
            ar: "نبحث عن مصنعٍ ينتج بعلامتنا الخاصة (Private Label).",
          },
          {
            en: "Need a used production line.",
            nl: "Gevraagd: een gebruikte productielijn.",
            ar: "نحتاج إلى خط إنتاجٍ مستعمل.",
          },
        ],
      },
      {
        kind: "steps",
        label: { en: "The route", nl: "De route", ar: "المسار" },
        heading: {
          en: "From request *to offer.*",
          nl: "Van aanvraag *tot aanbod.*",
          ar: "من الطلب *إلى العرض.*",
        },
        intro: {
          en: "Technology narrows the search; people verify.",
          nl: "Technologie verkleint het zoekveld; mensen verifiëren.",
          ar: "التقنية تضيّق البحث؛ والبشر يتحققون.",
        },
        items: [
          {
            title: { en: "The buyer states the need", nl: "De koper beschrijft de behoefte", ar: "يحدّد المشتري حاجته" },
            body: {
              en: "In the six lines above, through the intake or directly to DUKAAT. The more exact the request, the better the match.",
              nl: "In de zes regels hierboven, via de intake of rechtstreeks aan DUKAAT. Hoe preciezer de aanvraag, hoe beter de match.",
              ar: "بالأسطر الستة أعلاه، عبر الاستمارة أو بمراسلة DUKAAT مباشرةً. وكلما كان الطلب أدقّ، كانت المطابقة أفضل.",
            },
          },
          {
            title: { en: "We verify the buyer", nl: "Wij verifiëren de koper", ar: "نتحقّق من المشتري" },
            body: {
              en: "Before any supplier sees the request, we check the company behind it: registration, activity, references. Suppliers answer a buyer who is real.",
              nl: "Voordat een leverancier de aanvraag ziet, controleren wij het bedrijf erachter: handelsregister, activiteit, referenties. Leveranciers reageren op een koper die echt bestaat.",
              ar: "قبل أن يطّلع أي مورّد على الطلب، نتحقق من الشركة التي تقف خلفه: السجل التجاري، والنشاط، والمراجع. فيردّ المورّدون على مشترٍ حقيقي.",
            },
          },
          {
            title: { en: "We match relevant suppliers", nl: "Wij koppelen relevante leveranciers", ar: "نطابق الطلب مع المورّدين المناسبين" },
            body: {
              en: "Inside the network and beyond it, by product, capacity, certificates and market. Technology narrows the field to the suppliers worth asking.",
              nl: "Binnen en buiten het netwerk, op product, capaciteit, certificaten en markt. Technologie brengt het veld terug tot de leveranciers die het vragen waard zijn.",
              ar: "داخل الشبكة وخارجها، بحسب المنتج والطاقة الإنتاجية والشهادات والسوق. وتضيّق التقنية الدائرة حتى لا يبقى فيها إلا المورّدون الجديرون بالسؤال.",
            },
          },
          {
            title: { en: "A person reviews every match", nl: "Een mens beoordeelt elke match", ar: "إنسانٌ يراجع كل مطابقة" },
            body: {
              en: "Someone at DUKAAT checks each supplier against the request before anything reaches the buyer. We do not send lists.",
              nl: "Iemand van DUKAAT legt elke leverancier naast de aanvraag voordat er iets bij de koper komt. Wij sturen geen lijsten.",
              ar: "يراجع أحدُ أفراد فريق DUKAAT كل مورّدٍ في ضوء الطلب قبل أن يصل أي شيء إلى المشتري. نحن لا نرسل قوائم.",
            },
          },
          {
            title: { en: "Offers reach the buyer", nl: "Aanbiedingen bereiken de koper", ar: "تصل العروض إلى المشتري" },
            body: {
              en: "The buyer receives the offers that fit, knows who stands behind each one, and decides whom to speak to. Where needed, we join the first call.",
              nl: "De koper ontvangt de aanbiedingen die passen, weet wie achter elke aanbieding staat en beslist met wie hij spreekt. Waar nodig zitten wij bij het eerste gesprek.",
              ar: "يتلقّى المشتري العروض المناسبة، ويعرف مَن يقف خلف كلٍّ منها، ويقرّر مع مَن يتحدّث. ونحضر المكالمة الأولى عند الحاجة.",
            },
          },
        ],
      },
      {
        kind: "next",
        heading: {
          en: "Tell the market *what you need.*",
          nl: "Vertel de markt *wat u nodig hebt.*",
          ar: "أخبر السوق *بما تحتاج إليه.*",
        },
        body: {
          en: "Start with the six lines above; a reply follows within 5 working days.",
          nl: "Begin met de zes regels hierboven; binnen 5 werkdagen krijgt u antwoord.",
          ar: "ابدأ بالأسطر الستة أعلاه، ويصلك الردّ خلال 5 أيام عمل.",
        },
        links: [
          { href: "contact?intent=buy#intake", label: { en: "I want to buy", nl: "Ik wil inkopen", ar: "أريد أن أشتري" } },
          {
            href: "contact?intent=supplier#intake",
            label: { en: "I need a supplier", nl: "Ik zoek een leverancier", ar: "أحتاج إلى مورّد" },
          },
          { href: "how-we-work", label: { en: "How we work", nl: "Zo werken wij", ar: "كيف نعمل" } },
        ],
      },
    ],
  },

  "market/stocklots": {
    masthead: { variant: "portrait", photo: "stk-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Not every opportunity comes through the ordinary market. DUKAAT Market keeps a dedicated section for surplus, clearances and one-off lots, offered to professional traders who know what a lot is worth and can decide quickly.",
          nl: "Niet elke kans komt via de gewone markt. DUKAAT Market heeft een eigen afdeling voor overschotten, leegverkopen en eenmalige partijen, aangeboden aan professionele handelaren die weten wat een partij waard is en snel kunnen beslissen.",
          ar: "الفرص لا تأتي دائماً من السوق التقليدية. وتخصّص سوق DUKAAT قسماً لفائض المخزون والتصفيات والدفعات غير المتكرّرة، تُعرض فيه على تجّارٍ محترفين يعرفون قيمة الدفعة ويحسمون قرارهم بسرعة.",
        },
      },
      {
        kind: "terms",
        label: { en: "The categories", nl: "De categorieën", ar: "الفئات" },
        heading: {
          en: "Stock that has to *move.*",
          nl: "Voorraad die *weg moet.*",
          ar: "مخزونٌ لا بدّ *من تصريفه.*",
        },
        intro: {
          en: "Lots come from many places: a factory that produced too much, a warehouse that must be emptied, an order a customer cancelled. Each is listed under what it is.",
          nl: "Partijen komen van veel plekken: een fabriek die te veel produceerde, een magazijn dat leeg moet, een order die een klant annuleerde. Elke partij staat vermeld onder wat zij is.",
          ar: "تأتي الدفعات من مصادر كثيرة: مصنعٌ أنتج فائضاً، أو مستودعٌ يجب إخلاؤه، أو طلبيةٌ ألغاها عميل. وتُدرج كل دفعةٍ تحت الفئة التي تنتمي إليها.",
        },
        items: [
          { en: "Stocklots", nl: "Restpartijen", ar: "دفعات المخزون (Stocklots)" },
          { en: "Overstock", nl: "Overvoorraad", ar: "المخزون الزائد" },
          { en: "Factory surplus", nl: "Fabrieksoverschotten", ar: "فائض الإنتاج" },
          { en: "Warehouse clearance", nl: "Magazijnontruiming", ar: "تصفية مخزون المستودعات" },
          { en: "Factory clearance", nl: "Fabrieksontruiming", ar: "تصفية مخزون المصانع" },
          { en: "Bankruptcy stock", nl: "Faillissementspartijen", ar: "مخزون الشركات المفلسة" },
          { en: "Cancelled orders", nl: "Geannuleerde orders", ar: "الطلبيات الملغاة" },
          { en: "End-of-line", nl: "Uitlopende artikelen", ar: "الأصناف المتوقّف إنتاجها" },
          { en: "B-grade", nl: "B-keuze", ar: "بضائع الدرجة الثانية" },
          { en: "Surplus inventory", nl: "Overtollige voorraad", ar: "فائض المخزون" },
        ],
      },
      {
        kind: "prose",
        photo: "stk-lots",
        size: "half",
        side: "end",
        label: { en: "DUKAAT Deal Alert", nl: "DUKAAT Deal Alert", ar: "DUKAAT Deal Alert" },
        heading: {
          en: "A good lot *does not wait.*",
          nl: "Een goede partij *wacht niet.*",
          ar: "الدفعة الجيدة *لا تنتظر.*",
        },
        body: [
          {
            en: "Surplus is priced to sell, and it usually goes to whoever answers first with a serious offer. That is why stocklots are supported by DUKAAT Deal Alert: when a lot fits the sectors and markets a member trades in, the member hears of it directly.",
            nl: "Een overschot is geprijsd om te verkopen, en gaat meestal naar wie als eerste met een serieus bod komt. Daarom lopen partijen via DUKAAT Deal Alert: past een partij bij de sectoren en markten waarin een lid handelt, dan hoort het lid er rechtstreeks van.",
            ar: "يُسعَّر الفائض ليُباع، ويذهب في الغالب إلى أول من يتقدّم بعرضٍ جادّ. لذلك تصل دفعات المخزون عبر DUKAAT Deal Alert: فإذا ناسبت دفعةٌ القطاعاتِ والأسواقَ التي يتاجر فيها العضو، علم بها مباشرةً.",
          },
          {
            en: "The seller stays in control: nothing about the lot circulates until the seller has approved the text, and every enquiry reaches the seller through DUKAAT, from a verified member. A person reviews each lot before the alert goes out.",
            nl: "De verkoper houdt de regie: niets over de partij circuleert voordat de verkoper de tekst heeft goedgekeurd, en elke vraag bereikt de verkoper via DUKAAT, van een geverifieerd lid. Een mens beoordeelt elke partij voordat de melding uitgaat.",
            ar: "ويبقى زمام الأمر بيد البائع: فلا يُتداول شيءٌ عن الدفعة قبل أن يعتمد نصّها، ويصله كل استفسارٍ عبر DUKAAT، من عضوٍ جرى التحقق منه. ويراجع إنسانٌ كل دفعةٍ قبل أن يُرسَل التنبيه.",
          },
        ],
      },
      {
        kind: "register",
        label: { en: "Before a lot circulates", nl: "Voordat een partij circuleert", ar: "قبل تداول الدفعة" },
        heading: {
          en: "What makes a lot *easy to sell.*",
          nl: "Wat een partij *verkoopbaar maakt.*",
          ar: "ما يجعل الدفعة *سهلة البيع.*",
        },
        intro: {
          en: "A lot is only as good as the information behind it. Before it circulates, we recommend that the seller has five things ready.",
          nl: "Een partij is zo goed als de informatie erachter. Voordat zij circuleert, raden wij de verkoper aan vijf dingen klaar te hebben.",
          ar: "قيمة الدفعة من قيمة المعلومات التي تقف خلفها. وقبل تداولها، ننصح البائع بأن يُعِدّ خمسة أمور.",
        },
        numbered: true,
        items: [
          {
            title: { en: "Photos and an inventory list", nl: "Foto’s en een inventarislijst", ar: "صورٌ وقائمة جرد" },
            body: {
              en: "Recent photographs of the actual goods, not catalogue images, and a list by article, quantity and condition.",
              nl: "Recente foto’s van de werkelijke goederen, geen catalogusbeelden, en een lijst per artikel, hoeveelheid en staat.",
              ar: "صورٌ حديثة للبضاعة الفعلية، لا صورٌ من الكتالوجات، وقائمةٌ تبيّن كل صنفٍ وكميته وحالته.",
            },
          },
          {
            title: { en: "Location and condition", nl: "Locatie en staat", ar: "الموقع والحالة" },
            body: {
              en: "Where the lot stands, how it is stored and packed, and what state it is in: first quality, B-grade or damaged packaging.",
              nl: "Waar de partij staat, hoe zij is opgeslagen en verpakt, en in welke staat zij verkeert: eerste keus, B-keuze of beschadigde verpakking.",
              ar: "أين توجد الدفعة، وكيف خُزّنت وعُبّئت، وما حالتها: درجةٌ أولى، أو درجةٌ ثانية، أو تغليفٌ متضرّر.",
            },
          },
          {
            title: { en: "Documents and origin", nl: "Documenten en herkomst", ar: "المستندات والمنشأ" },
            body: {
              en: "Proof of ownership, the country of origin and the certificates that come with the goods — so the buyer can import what they buy.",
              nl: "Bewijs van eigendom, het land van herkomst en de certificaten die bij de goederen horen — zodat de koper kan invoeren wat hij koopt.",
              ar: "إثباتُ الملكية، وبلدُ المنشأ، والشهاداتُ المرافقة للبضاعة — حتى يتمكّن المشتري من استيراد ما يشتريه.",
            },
          },
          {
            title: { en: "Inspection before purchase", nl: "Inspectie vóór aankoop", ar: "المعاينة قبل الشراء" },
            body: {
              en: "We recommend that the buyer, or an inspector the buyer appoints, sees the goods before any payment is made.",
              nl: "Wij raden aan dat de koper, of een inspecteur die de koper aanwijst, de goederen bekijkt voordat er iets wordt betaald.",
              ar: "ننصح بأن يعاين المشتري البضاعة، بنفسه أو عبر مفتّشٍ يعيّنه، قبل دفع أي مبلغ.",
            },
          },
          {
            title: { en: "Price basis and terms", nl: "Prijsbasis en voorwaarden", ar: "أساس السعر والشروط" },
            body: {
              en: "A price, or the basis for one — per unit, per tonne or for the whole lot — with the delivery terms and how long the offer stands.",
              nl: "Een prijs, of de basis ervoor — per stuk, per ton of voor de hele partij — met de leveringsvoorwaarden en hoe lang het aanbod geldt.",
              ar: "سعرٌ أو أساسٌ لاحتسابه — للوحدة أو للطن أو للدفعة كاملة — مع شروط التسليم ومدة سريان العرض.",
            },
          },
        ],
      },
      {
        kind: "next",
        heading: {
          en: "A lot to offer, or *a lot to find.*",
          nl: "Een partij te koop, of *een partij gezocht.*",
          ar: "دفعةٌ للبيع، أو *دفعةٌ تبحث عنها.*",
        },
        links: [
          { href: "contact?intent=sell#intake", label: { en: "I want to sell", nl: "Ik wil verkopen", ar: "أريد أن أبيع" } },
          { href: "contact?intent=buy#intake", label: { en: "I want to buy", nl: "Ik wil inkopen", ar: "أريد أن أشتري" } },
          { href: "market/machinery", label: { en: "Machinery", nl: "Machines", ar: "الآلات" } },
        ],
      },
    ],
  },

  "market/machinery": {
    masthead: { variant: "band", photo: "mach-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "A production line that has stopped in one market can run for years in another. DUKAAT Market carries used, refurbished and ex-demo machinery between Europe and the Arab world, for buyers who need capacity and sellers who need space.",
          nl: "Een productielijn die in de ene markt stilstaat, kan in een andere nog jaren draaien. DUKAAT Market brengt vraag en aanbod in gebruikte, gereviseerde en demomachines samen tussen Europa en de Arabische wereld: kopers die capaciteit nodig hebben en verkopers die ruimte nodig hebben.",
          ar: "خط الإنتاج الذي توقّف في سوقٍ ما يمكن أن يعمل سنواتٍ في سوقٍ أخرى. وتعرض سوق DUKAAT الآلات المستعملة والمُجدَّدة وآلات العرض التجريبي بين أوروبا والعالم العربي، لمشترين يحتاجون إلى طاقةٍ إنتاجية، وبائعين يحتاجون إلى مساحة.",
        },
      },
      {
        kind: "terms",
        label: { en: "Categories", nl: "Categorieën", ar: "الفئات" },
        heading: {
          en: "From one machine to *a whole factory.*",
          nl: "Van één machine tot *een hele fabriek.*",
          ar: "من آلةٍ واحدة إلى *مصنعٍ كامل.*",
        },
        intro: {
          en: "Single machines and complete lines, from working factories, liquidations and auctions.",
          nl: "Losse machines en complete lijnen, uit draaiende fabrieken, liquidaties en veilingen.",
          ar: "آلاتٌ منفردة وخطوط إنتاجٍ كاملة، من مصانع عاملة، ومن التصفيات والمزادات.",
        },
        items: [
          { en: "Used machinery", nl: "Gebruikte machines", ar: "الآلات المستعملة" },
          { en: "Industrial equipment", nl: "Industriële apparatuur", ar: "المعدات الصناعية" },
          { en: "Printing machines", nl: "Drukpersen", ar: "آلات الطباعة" },
          { en: "Packaging machines", nl: "Verpakkingsmachines", ar: "آلات التعبئة والتغليف" },
          { en: "Food processing equipment", nl: "Machines voor de voedingsindustrie", ar: "معدات تصنيع الأغذية" },
          { en: "Construction equipment", nl: "Bouwmaterieel", ar: "معدات البناء" },
          { en: "Production lines", nl: "Productielijnen", ar: "خطوط الإنتاج" },
          { en: "Factory liquidations", nl: "Fabrieksliquidaties", ar: "تصفيات المصانع" },
          { en: "Auctions", nl: "Veilingen", ar: "المزادات" },
          { en: "Refurbished equipment", nl: "Gereviseerde apparatuur", ar: "المعدات المُجدَّدة" },
          { en: "Ex-demo machines", nl: "Demomachines", ar: "آلات العرض التجريبي (Ex-Demo)" },
        ],
        note: {
          en: "Ex-demo machines have been used only for demonstration, in a manufacturer’s showroom or at a trade fair.",
          nl: "Demomachines zijn alleen gebruikt voor demonstraties, in de showroom van een fabrikant of op een beurs.",
          ar: "آلات العرض التجريبي (Ex-Demo) آلاتٌ لم تُستخدم إلا في العروض التجريبية، في صالة عرضٍ لدى الشركة المصنّعة أو في معرضٍ تجاري.",
        },
      },
      {
        kind: "register",
        photo: "mach-cnc",
        label: { en: "The practical side", nl: "De praktijk", ar: "الجانب العملي" },
        heading: {
          en: "Before a machine *changes hands.*",
          nl: "Voordat een machine *van eigenaar wisselt.*",
          ar: "قبل أن تنتقل الآلة *إلى مالكٍ جديد.*",
        },
        intro: {
          en: "A machine is not a parcel. Five questions decide whether the purchase works, and we recommend settling each of them before anything is signed.",
          nl: "Een machine is geen pakketje. Vijf vragen bepalen of de koop slaagt, en wij raden aan ze alle vijf te beantwoorden voordat er iets wordt getekend.",
          ar: "الآلة ليست طرداً بريدياً. خمسة أسئلة تحسم نجاح الصفقة، وننصح بحسمها كلّها قبل أن يُوقَّع أي شيء.",
        },
        numbered: true,
        items: [
          {
            title: {
              en: "Hours, maintenance records and service history",
              nl: "Draaiuren, onderhoudsrapporten en servicehistorie",
              ar: "ساعات التشغيل وسجلّات الصيانة والخدمة",
            },
            body: {
              en: "Running hours, or impressions for a press; the maintenance log; who has serviced the machine. The records often say more than the photographs.",
              nl: "Draaiuren, of het aantal drukken bij een pers; het onderhoudslogboek; wie de machine heeft onderhouden. De papieren zeggen vaak meer dan de foto’s.",
              ar: "ساعات التشغيل، أو عدد الطبعات إن كانت آلة طباعة؛ وسجلّ الصيانة؛ ومَن تولّى خدمة الآلة. وكثيراً ما تكشف السجلّات أكثر مما تكشفه الصور.",
            },
          },
          {
            title: { en: "Inspection on site", nl: "Inspectie ter plaatse", ar: "المعاينة في الموقع" },
            body: {
              en: "The buyer, or an engineer the buyer appoints, sees the machine where it stands — running, wherever possible — before the purchase is agreed.",
              nl: "De koper, of een technicus die de koper aanwijst, ziet de machine waar zij staat — zo mogelijk draaiend — voordat de koop wordt gesloten.",
              ar: "يعاين المشتري، أو مهندسٌ يعيّنه، الآلةَ في مكانها — وهي تعمل متى أمكن ذلك — قبل الاتفاق على الشراء.",
            },
          },
          {
            title: { en: "Dismantling and loading", nl: "Demontage en laden", ar: "التفكيك والتحميل" },
            body: {
              en: "Who takes the machine apart, marks and packs each part, and loads it — and who pays for it. Agreed in advance, not on the day.",
              nl: "Wie de machine demonteert, elk onderdeel markeert en verpakt en haar laadt — en wie dat betaalt. Vooraf afgesproken, niet op de dag zelf.",
              ar: "مَن يفكّك الآلة، ويرقّم كل قطعةٍ ويغلّفها، ويحمّلها — ومَن يتحمّل التكاليف. يُتّفق على ذلك مسبقاً، لا في يوم التنفيذ.",
            },
          },
          {
            title: { en: "Transport and customs", nl: "Transport en douane", ar: "النقل والجمارك" },
            body: {
              en: "Heavy or out-of-gauge freight, export and import formalities, and the documents the destination market requires for used equipment.",
              nl: "Zwaar of buitenmaats vervoer, export- en importformaliteiten, en de documenten die de bestemmingsmarkt eist voor gebruikte apparatuur.",
              ar: "الشحنات الثقيلة أو الخارجة عن المقاسات المعتادة، وإجراءات التصدير والاستيراد، والمستندات التي تشترطها سوق الوجهة للمعدات المستعملة.",
            },
          },
          {
            title: {
              en: "Installation and commissioning at the buyer’s site",
              nl: "Installatie en inbedrijfstelling bij de koper",
              ar: "التركيب والتشغيل الأوّلي في موقع المشتري",
            },
            body: {
              en: "Reassembly, connection and a first production run at the buyer’s site, with the technicians agreed before the machine leaves.",
              nl: "Hermontage, aansluiting en een eerste productierun bij de koper; welke monteurs dat doen, staat vast voordat de machine vertrekt.",
              ar: "إعادة التركيب، والتوصيل، وأول تشغيلٍ إنتاجي في موقع المشتري، على أيدي فنيين يُتّفق عليهم قبل أن تغادر الآلة.",
            },
          },
        ],
      },
      {
        kind: "next",
        heading: {
          en: "A machine to sell, or *a line to find.*",
          nl: "Een machine te koop, of *een lijn gezocht.*",
          ar: "آلةٌ للبيع، أو *خطُّ إنتاجٍ تبحث عنه.*",
        },
        links: [
          { href: "contact?intent=sell#intake", label: { en: "I want to sell", nl: "Ik wil verkopen", ar: "أريد أن أبيع" } },
          { href: "contact?intent=buy#intake", label: { en: "I want to buy", nl: "Ik wil inkopen", ar: "أريد أن أشتري" } },
          {
            href: "services/documents",
            label: { en: "Documents, customs & logistics", nl: "Documenten, douane & logistiek", ar: "المستندات والجمارك واللوجستيات" },
          },
        ],
      },
    ],
  },
};
