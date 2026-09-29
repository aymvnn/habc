import type { PageSet } from "./types";

/**
 * Network — the group overview and its five pages: directory, sector clubs, stories, ambassadors, partners.
 * Everything is described as it works, in the present tense: no counts, no "first club", no markets named,
 * no revenue share for ambassadors, no invented stories or profiles. Ambassadors work in various markets and cities
 * (never "one per market", never "exclusive"); members do not search the directory themselves; the Golden Ten are the
 * ten principal sponsors (owner, 29 Sep 2026). Sources: content master p.19 (directory),
 * p.22 (sector clubs, stories), p.26–27 (ambassadors, partnerships & sponsorship); tier lists p.10–12;
 * the compagnon's Arabic wording where it exists (دليل فرص، أفضل دليل على قوة الشبكة، عضو/شركة/مصنع/مستثمر).
 */
export const network: PageSet = {
  /* ───────────────────────── overview ───────────────────────── */
  network: {
    masthead: { variant: "band", photo: "network-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "The DUKAAT network is the people inside the club: admitted members, the sector clubs they meet in, ambassadors in various markets and cities, and the institutions we work with. It is where every search begins.",
          nl: "Het DUKAAT-netwerk bestaat uit de mensen binnen de club: toegelaten leden, de sectorclubs waarin zij elkaar treffen, ambassadeurs in verschillende markten en steden, en de instellingen waarmee wij samenwerken. Daar begint elke zoektocht.",
          ar: "شبكة DUKAAT هي مَن يضمّهم النادي: الأعضاء المقبولون، والأندية القطاعية التي يلتقون فيها، وسفراء في أسواق ومدن مختلفة، والمؤسسات التي نتعاون معها. ومنها يبدأ كل بحث.",
        },
      },
      {
        kind: "index",
        label: { en: "The network", nl: "Het netwerk", ar: "الشبكة" },
        heading: { en: "What the network is *made of.*", nl: "Waaruit het netwerk *bestaat.*", ar: "ما تتكوّن منه *الشبكة.*" },
      },
      {
        kind: "contrast",
        label: { en: "Offer and need", nl: "Aanbod en vraag", ar: "العرض والطلب" },
        heading: { en: "Every member states *two things.*", nl: "Elk lid benoemt *twee dingen.*", ar: "يحدّد كل عضو *أمرين.*" },
        intro: {
          en: "Every profile, every intake and every introduction starts from the same two lines: what a company brings to the table, and what it is looking for.",
          nl: "Elk profiel, elke intake en elke introductie begint bij dezelfde twee regels: wat een bedrijf inbrengt en wat het zoekt.",
          ar: "يبدأ كل ملف، وكل استمارة، وكل تعريف من السطرين نفسيهما: ما تقدّمه الشركة، وما تبحث عنه.",
        },
        a: {
          title: { en: "I offer", nl: "Ik bied", ar: "ما أقدّمه" },
          items: [
            { en: "Products, and the capacity to make or pack them", nl: "Producten, en de capaciteit om ze te maken of te verpakken", ar: "منتجات، والقدرة على تصنيعها أو تعبئتها" },
            { en: "Surplus stock and one-off lots", nl: "Overtollige voorraad en eenmalige partijen", ar: "فائض المخزون والدفعات الفردية" },
            { en: "Used and new machinery", nl: "Gebruikte en nieuwe machines", ar: "آلات مستعملة وجديدة" },
            { en: "Distribution and customers in their own market", nl: "Distributie en klanten in de eigen markt", ar: "قنوات توزيع وعملاء في سوقي" },
            { en: "Specialist knowledge: law, tax, customs, freight", nl: "Vakkennis: recht, belasting, douane, vracht", ar: "خبرة متخصصة في القانون والضرائب والجمارك والشحن" },
          ],
        },
        b: {
          title: { en: "I need", nl: "Ik zoek", ar: "ما أبحث عنه" },
          items: [
            { en: "A distributor on the other side", nl: "Een distributeur aan de andere kant", ar: "موزّع على الضفة الأخرى" },
            { en: "A verified supplier or manufacturer", nl: "Een geverifieerde leverancier of fabrikant", ar: "مورّد أو مصنع موثّق" },
            { en: "Buyers for goods, stock or capacity", nl: "Kopers voor goederen, voorraad of capaciteit", ar: "مشترون لبضائع أو مخزون أو طاقة إنتاجية" },
            { en: "A way into a new market", nl: "Een weg naar een nieuwe markt", ar: "مدخل إلى سوق جديدة" },
            { en: "Advice on structure, contracts and customs", nl: "Advies over structuur, contracten en douane", ar: "مشورة في الهيكلة والعقود والجمارك" },
          ],
        },
        note: {
          en: "We match a member’s need to the right offer, inside the network and beyond it. Technology narrows the search; people verify.",
          nl: "Wij koppelen de vraag van een lid aan het juiste aanbod, binnen het netwerk en daarbuiten. Technologie verkleint het zoekveld; mensen verifiëren.",
          ar: "نربط حاجة العضو بالعرض المناسب، داخل الشبكة وخارجها. التقنية تضيّق البحث؛ والبشر يتحققون.",
        },
      },
      {
        kind: "prose",
        label: { en: "What binds it", nl: "Wat het bindt", ar: "ما يجمعها" },
        heading: { en: "Admitted, not *collected.*", nl: "Toegelaten, niet *verzameld.*", ar: "أعضاءٌ يُقبَلون، لا *يُجمَعون.*" },
        body: [
          {
            en: "A network is only as useful as the trust between its people. Every member of DUKAAT is admitted on reputation — nominated by a member, invited by us or after applying — and verified before their name reaches anyone else: registration, activity, references.",
            nl: "Een netwerk is maar zo nuttig als het vertrouwen tussen de mensen erin. Elk lid van DUKAAT wordt toegelaten op reputatie — voorgedragen door een lid, door ons uitgenodigd of na aanmelding — en geverifieerd voordat zijn naam bij een ander terechtkomt: handelsregister, activiteit, referenties.",
            ar: "لا تنفع الشبكة إلا بقدر الثقة بين أفرادها. ويُقبل كل عضو في DUKAAT على أساس سمعته — بترشيحٍ من أحد الأعضاء، أو بدعوةٍ منا، أو بعد طلب انضمام — ويُتحقَّق من سجله التجاري ونشاطه ومراجعه قبل أن يصل اسمه إلى أي طرف آخر.",
          },
          {
            en: "We review every company before it joins, so that an introduction carries weight on both sides. And we serve every member in their own language: Arabic, Dutch or English.",
            nl: "Wij beoordelen elk bedrijf voordat het toetreedt, zodat een introductie aan beide kanten gewicht heeft. En wij bedienen elk lid in zijn eigen taal: Arabisch, Nederlands of Engels.",
            ar: "ونراجع كل شركة قبل انضمامها، حتى يكون للتعريف وزنه لدى الطرفين. ونخدم كل عضو بلغته: العربية أو الهولندية أو الإنجليزية.",
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "How a name *enters* the network.", nl: "Hoe een naam het netwerk *binnenkomt.*", ar: "كيف *يدخل* الاسم إلى الشبكة." },
        body: {
          en: "Membership is by nomination or invitation: a name enters when a member puts it forward, when we invite a company ourselves, or when a company applies and is admitted after review.",
          nl: "Lidmaatschap is op voordracht of uitnodiging: een naam komt binnen wanneer een lid die voordraagt, wanneer wij zelf een bedrijf uitnodigen, of wanneer een bedrijf zich aanmeldt en na beoordeling wordt toegelaten.",
          ar: "العضوية بالترشيح أو الدعوة: يدخل الاسم حين يرشّحه أحد الأعضاء، أو حين ندعو نحن شركةً ما، أو حين تتقدّم شركة بطلب انضمام وتُقبل بعد المراجعة.",
        },
        links: [
          { href: "how-we-work/verification", label: { en: "Verification & admission", nl: "Verificatie & toelating", ar: "التحقق والقبول" } },
          { href: "membership", label: { en: "Membership", nl: "Lidmaatschap", ar: "العضوية" } },
          { href: "contact?intent=nominated#intake", label: { en: "I have been nominated", nl: "Ik ben voorgedragen", ar: "تمّت تزكيتي" } },
        ],
      },
    ],
  },

  /* ───────────────────────── directory ───────────────────────── */
  "network/directory": {
    masthead: { variant: "plate", photo: "dir-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Not just a list of company names: a directory of business opportunities. Every admitted member has a profile that says what the company does, what it offers and what it is looking for — so that the right counterparty can recognise it.",
          nl: "Niet zomaar een lijst met bedrijfsnamen: een register van zakelijke kansen. Elk toegelaten lid heeft een profiel dat laat zien wat het bedrijf doet, wat het aanbiedt en wat het zoekt — zodat de juiste tegenpartij het kan herkennen.",
          ar: "ليس دليلَ أسماءٍ فحسب، بل دليلُ فرص. لكل عضو مقبول ملفٌّ يبيّن مجال عمل شركته، وما تقدّمه، وما تبحث عنه — حتى يتعرّف إليها الطرف المقابل المناسب.",
        },
      },
      {
        kind: "specimen",
        label: { en: "The profile", nl: "Het profiel", ar: "الملف" },
        heading: { en: "One form for *every member.*", nl: "Eén opbouw voor *elk lid.*", ar: "نموذجٌ واحد *لكل عضو.*" },
        intro: {
          en: "Every profile follows the same form, so that companies can be compared on what matters: what they make, where they sell, and what they need.",
          nl: "Elk profiel heeft dezelfde opbouw, zodat bedrijven te vergelijken zijn op wat ertoe doet: wat zij maken, waar zij verkopen en wat zij nodig hebben.",
          ar: "تتبع الملفات كلها النموذج نفسه، حتى تُقارَن الشركات على أساس ما يهمّ فعلاً: ماذا تنتج، وأين تبيع، وماذا تحتاج.",
        },
        title: { en: "A member profile", nl: "Een ledenprofiel", ar: "ملف عضو" },
        fields: [
          {
            label: { en: "Company name", nl: "Bedrijfsnaam", ar: "اسم الشركة" },
            hint: { en: "As entered in the commercial register", nl: "Zoals ingeschreven in het handelsregister", ar: "كما هو مقيّد في السجل التجاري" },
          },
          { label: { en: "Logo", nl: "Logo", ar: "الشعار" } },
          {
            label: { en: "Industry", nl: "Branche", ar: "القطاع" },
            hint: { en: "The trade the company works in", nl: "De sector waarin het bedrijf actief is", ar: "المجال الذي تعمل فيه الشركة" },
          },
          {
            label: { en: "Country", nl: "Land", ar: "الدولة" },
            hint: { en: "Where the company is registered", nl: "Waar het bedrijf is ingeschreven", ar: "بلد تسجيل الشركة" },
          },
          {
            label: { en: "Products", nl: "Producten", ar: "المنتجات" },
            hint: { en: "What the company makes, packs or trades", nl: "Wat het bedrijf maakt, verpakt of verhandelt", ar: "ما تصنعه الشركة أو تعبّئه أو تتاجر به" },
          },
          {
            label: { en: "Services", nl: "Diensten", ar: "الخدمات" },
            hint: { en: "What it provides to other companies", nl: "Wat het aan andere bedrijven levert", ar: "ما تقدّمه لغيرها من الشركات" },
          },
          {
            label: { en: "Markets", nl: "Markten", ar: "الأسواق" },
            hint: { en: "Where it sells, and where it intends to", nl: "Waar het verkoopt en waar het wil verkopen", ar: "الأسواق التي تبيع فيها، والتي تنوي البيع فيها" },
          },
          {
            label: { en: "Images and video", nl: "Foto’s en video", ar: "الصور والفيديو" },
            hint: { en: "Of products, premises and production", nl: "Van producten, locatie en productie", ar: "للمنتجات والمقرّ وعمليات الإنتاج" },
          },
          {
            label: { en: "What the company offers", nl: "Wat het bedrijf aanbiedt", ar: "ما تقدّمه الشركة" },
            hint: { en: "“I offer”: what it brings to the table", nl: "“Ik bied”: wat het bedrijf inbrengt", ar: "«ما أقدّمه»: ما تسهم به الشركة" },
          },
          {
            label: { en: "What the company is looking for", nl: "Wat het bedrijf zoekt", ar: "ما تبحث عنه الشركة" },
            hint: {
              en: "“I need”: the product, partner or market it wants to find",
              nl: "“Ik zoek”: het product, de partner of de markt die het wil vinden",
              ar: "«ما أبحث عنه»: ما تسعى الشركة إلى إيجاده من منتج أو شريك أو سوق",
            },
          },
        ],
        note: {
          en: "Profiles are organised by country, industry, product, service, language, market and business need, so that the DUKAAT team can match a request to the right company.",
          nl: "Profielen zijn geordend op land, branche, product, dienst, taal, markt en zakelijke behoefte, zodat het DUKAAT-team een aanvraag aan het juiste bedrijf kan koppelen.",
          ar: "تُصنَّف الملفات بحسب الدولة، والقطاع، والمنتج، والخدمة، واللغة، والسوق، والحاجة التجارية، حتى يتمكّن فريق DUKAAT من مطابقة كل طلب مع الشركة المناسبة.",
        },
      },
      {
        kind: "register",
        photo: "dir-profile",
        label: { en: "Visibility per level", nl: "Zichtbaarheid per niveau", ar: "الظهور حسب المستوى" },
        heading: { en: "What each level *shows.*", nl: "Wat elk niveau *laat zien.*", ar: "ما يُظهره *كل مستوى.*" },
        intro: {
          en: "Every admitted member is listed. How much the profile carries follows the level of membership.",
          nl: "Elk toegelaten lid staat in het Ledenregister. Hoeveel het profiel laat zien, volgt het niveau van het lidmaatschap.",
          ar: "يُدرَج كل عضو مقبول في الدليل، أما مقدار ما يعرضه ملفه فيتبع مستوى عضويته.",
        },
        items: [
          {
            title: { en: "Member: a listing", nl: "Member: een vermelding", ar: "Member: إدراجٌ في الدليل" },
            body: {
              en: "A listing in the directory with a company profile: what you offer, what you look for, and in which markets. Your profile is published within 10 working days of admission.",
              nl: "Een vermelding in het Ledenregister met een bedrijfsprofiel: wat u aanbiedt, wat u zoekt en in welke markten. Uw profiel wordt binnen 10 werkdagen na toelating gepubliceerd.",
              ar: "إدراجٌ في دليل الأعضاء مع ملفٍّ لشركتك: ما تقدّمه، وما تبحث عنه، وفي أيّ الأسواق. ويُنشر ملفك خلال 10 أيام عمل من قبولك.",
            },
          },
          {
            title: { en: "Professional: enhanced visibility", nl: "Professional: grotere zichtbaarheid", ar: "Professional: ظهورٌ أعلى" },
            body: {
              en: "Enhanced visibility in the directory and an advanced company profile, with your products and services listed one by one, so that each can be matched on its own.",
              nl: "Grotere zichtbaarheid in het Ledenregister en een uitgebreid bedrijfsprofiel, met uw producten en diensten elk afzonderlijk vermeld, zodat elk ervan afzonderlijk kan worden gekoppeld.",
              ar: "ظهورٌ أعلى في الدليل، وملفُّ شركةٍ متقدّم تُدرَج فيه منتجاتك وخدماتك بنداً بنداً، حتى يمكن مطابقة كلٍّ منها بمفرده.",
            },
          },
          {
            title: { en: "Executive: premium visibility", nl: "Executive: prominente zichtbaarheid", ar: "Executive: ظهورٌ مميّز" },
            body: {
              en: "Premium visibility in the directory, on top of everything a Professional profile carries: the advanced profile and the individual listing of products and services.",
              nl: "Prominente zichtbaarheid in het Ledenregister, bovenop alles wat een Professional-profiel bevat: het uitgebreide profiel en de afzonderlijke vermelding van producten en diensten.",
              ar: "ظهورٌ مميّز في الدليل، فوق كل ما يتضمّنه ملف Professional: الملف المتقدّم، وإدراج المنتجات والخدمات بنداً بنداً.",
            },
          },
        ],
      },
      {
        kind: "notice",
        label: { en: "Publication", nl: "Publicatie", ar: "النشر" },
        heading: { en: "Only what you *approve.*", nl: "Alleen wat u *goedkeurt.*", ar: "لا يُنشر إلا ما *توافق عليه.*" },
        body: [
          {
            en: "Your profile shows only what you have explicitly approved. You can withdraw that approval, or ask for correction or deletion, at any time. We process members’ data in accordance with the GDPR.",
            nl: "Uw profiel toont alleen wat u uitdrukkelijk hebt goedgekeurd. U kunt die goedkeuring op elk moment intrekken, of om correctie of verwijdering vragen. Wij verwerken ledengegevens conform de AVG.",
            ar: "لا يَعرض ملفك إلا ما وافقت عليه صراحةً. ويمكنك في أي وقت أن تسحب هذه الموافقة، أو أن تطلب التصحيح أو الحذف. ونعالج بيانات الأعضاء وفقاً للائحة العامة لحماية البيانات (GDPR).",
          },
          {
            en: "This information does not constitute a guarantee, endorsement or warranty by DUKAAT regarding any company, product or transaction. It is provided to support more informed business decisions. Members remain fully responsible for their own due diligence.",
            nl: "Deze informatie vormt geen garantie, aanbeveling of waarborg van DUKAAT ten aanzien van enig bedrijf, product of enige transactie. Zij wordt verstrekt om beter geïnformeerde zakelijke beslissingen te ondersteunen. Leden blijven volledig verantwoordelijk voor hun eigen due diligence.",
            ar: "لا تُشكّل هذه المعلومات ضماناً أو تأييداً أو كفالةً من DUKAAT بشأن أي شركة أو منتج أو معاملة، وإنما تُقدَّم لدعم اتخاذ قراراتٍ تجارية أكثر وعياً. ويبقى الأعضاء مسؤولين مسؤوليةً كاملة عن إجراء الفحص النافي للجهالة بأنفسهم.",
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "What stands *behind* a profile.", nl: "Wat er *achter* een profiel staat.", ar: "ما يقف *خلف* الملف." },
        links: [
          { href: "how-we-work/verification", label: { en: "Verification & admission", nl: "Verificatie & toelating", ar: "التحقق والقبول" } },
          { href: "membership/levels", label: { en: "The three levels", nl: "De drie niveaus", ar: "المستويات الثلاثة" } },
          { href: "legal/member-data", label: { en: "Publication of member data", nl: "Publicatie van ledengegevens", ar: "نشر بيانات الأعضاء" } },
        ],
      },
    ],
  },

  /* ───────────────────────── sector clubs ───────────────────────── */
  "network/sector-clubs": {
    masthead: { variant: "band", photo: "sec-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Inside DUKAAT, members also meet by trade. A sector club gathers the companies of one sector — producers, buyers, suppliers and the specialists who serve them — so that opportunities, reports and meetings reach the people they concern.",
          nl: "Binnen DUKAAT treffen leden elkaar ook per vak. Een sectorclub brengt de bedrijven uit één sector samen — producenten, kopers, leveranciers en de specialisten die hen bedienen — zodat kansen, rapporten en bijeenkomsten terechtkomen bij wie ze aangaan.",
          ar: "يلتقي الأعضاء داخل DUKAAT بحسب القطاع أيضاً. فالنادي القطاعي يجمع شركات قطاعٍ واحد — المنتجين والمشترين والمورّدين والمختصين الذين يخدمونهم — حتى تصل الفرص والتقارير واللقاءات إلى من يعنيهم أمرها.",
        },
      },
      {
        kind: "register",
        cols: 2,
        label: { en: "The sectors", nl: "De sectoren", ar: "القطاعات" },
        heading: { en: "A club for *each trade.*", nl: "Een club voor *elk vak.*", ar: "نادٍ *لكل قطاع.*" },
        intro: {
          en: "Each club covers one trade and the companies around it, in the Netherlands and Europe as well as in the Arab world.",
          nl: "Elke club omvat één vak en de bedrijven eromheen, in Nederland en Europa én in de Arabische wereld.",
          ar: "يغطي كل نادٍ قطاعاً واحداً والشركات المرتبطة به، في هولندا وأوروبا كما في العالم العربي.",
        },
        items: [
          {
            title: { en: "Food & Agriculture", nl: "Voeding & landbouw", ar: "الغذاء والزراعة" },
            body: {
              en: "Growers, processors, packers, importers and buyers of food: fresh and dried produce, legumes, nuts, dates, ingredients and packaged goods.",
              nl: "Telers, verwerkers, verpakkers, importeurs en inkopers van voedingsmiddelen: verse en gedroogde producten, peulvruchten, noten, dadels, ingrediënten en verpakte levensmiddelen.",
              ar: "المزارعون، ومصنّعو الأغذية ومعبّئوها ومستوردوها ومشتروها: المنتجات الطازجة والمجفّفة، والبقوليات، والمكسرات، والتمور، والمكوّنات الغذائية، والأغذية المعبّأة.",
            },
          },
          {
            title: { en: "Real Estate", nl: "Vastgoed", ar: "العقارات" },
            body: {
              en: "Developers, project owners, investors and advisers in residential, commercial and hospitality property, and the questions of ownership, law and tax that come with it.",
              nl: "Ontwikkelaars, projecteigenaren, investeerders en adviseurs in woon-, bedrijfs- en hotelvastgoed, en de vragen over eigendom, recht en belasting die daarbij horen.",
              ar: "المطوّرون العقاريون وأصحاب المشاريع والمستثمرون والمستشارون في العقارات السكنية والتجارية والفندقية، وما يرافقها من مسائل الملكية والقانون والضرائب.",
            },
          },
          {
            title: { en: "Construction", nl: "Bouw", ar: "البناء والتشييد" },
            body: {
              en: "Contractors, engineers and suppliers of building materials, from natural stone and steel to finishing materials, and the equipment a site runs on.",
              nl: "Aannemers, ingenieurs en leveranciers van bouwmaterialen, van natuursteen en staal tot afwerkingsmaterialen, en het materieel waarop een bouwplaats draait.",
              ar: "المقاولون والمهندسون ومورّدو مواد البناء، من الحجر الطبيعي والصلب إلى مواد التشطيب، والمعدات التي يقوم عليها العمل في موقع البناء.",
            },
          },
          {
            title: { en: "Technology", nl: "Technologie", ar: "التكنولوجيا" },
            body: {
              en: "Software, systems and industrial technology: companies that need distributors, integration partners or clients on the other side.",
              nl: "Software, systemen en industriële technologie: bedrijven die aan de andere kant distributeurs, integratiepartners of klanten zoeken.",
              ar: "البرمجيات والأنظمة والتقنيات الصناعية: شركاتٌ تحتاج على الضفة الأخرى إلى موزّعين، أو شركاء في تكامل الأنظمة، أو عملاء.",
            },
          },
          {
            title: { en: "Printing & Packaging", nl: "Drukwerk & verpakking", ar: "الطباعة والتغليف" },
            body: {
              en: "Printers, paper and board suppliers, packaging manufacturers and converters — and the presses, lines and stocklots that change hands between them.",
              nl: "Drukkerijen, leveranciers van papier en karton, verpakkingsproducenten en -verwerkers — en de persen, productielijnen en partijen die tussen hen van eigenaar wisselen.",
              ar: "المطابع، ومورّدو الورق والكرتون، ومصنّعو مواد التغليف، وشركات تحويل الورق والكرتون — وآلات الطباعة وخطوط الإنتاج ودفعات المخزون التي تنتقل ملكيتها بينهم.",
            },
          },
          {
            title: { en: "Logistics", nl: "Logistiek", ar: "اللوجستيات" },
            body: {
              en: "Forwarders, carriers, warehouses and customs specialists who move goods between Rotterdam, the rest of Europe and the Arab world.",
              nl: "Expediteurs, vervoerders, opslagbedrijven en douanespecialisten die de goederenstroom verzorgen tussen Rotterdam, de rest van Europa en de Arabische wereld.",
              ar: "وكلاء الشحن والناقلون وشركات التخزين والمختصون في التخليص الجمركي، الذين يتولّون حركة البضائع بين روتردام وبقية أوروبا والعالم العربي.",
            },
          },
          {
            title: { en: "Energy", nl: "Energie", ar: "الطاقة" },
            body: {
              en: "Conventional and renewable energy: the equipment and components, the contractors who install them, and the service companies that keep them running.",
              nl: "Conventionele en duurzame energie: apparatuur en componenten, de aannemers die ze installeren en de servicebedrijven die ze draaiende houden.",
              ar: "الطاقة التقليدية والمتجددة: المعدات والمكوّنات، والمقاولون الذين يركّبونها، وشركات الخدمات التي تُبقيها قيد التشغيل.",
            },
          },
          {
            title: { en: "Professional Services", nl: "Zakelijke dienstverlening", ar: "الخدمات المهنية" },
            body: {
              en: "Lawyers, tax advisers, accountants, translators and other specialists whose work makes cross-border trade possible: contracts, structures, filings, language.",
              nl: "Advocaten, belastingadviseurs, accountants, vertalers en andere specialisten wier werk grensoverschrijdende handel mogelijk maakt: contracten, structuren, aangiften, taal.",
              ar: "المحامون والمستشارون الضريبيون والمحاسبون والمترجمون وسائر المختصين الذين يجعل عملُهم التجارةَ عبر الحدود ممكنة: العقود، والهياكل، والإقرارات، واللغة.",
            },
          },
        ],
      },
      {
        kind: "mosaic",
        photos: ["sec-dates", "sec-pack", "sec-energy", "sec-seeds"],
        caption: {
          en: "Every trade has its own language. A sector club is where it is spoken.",
          nl: "Elk vak heeft zijn eigen taal. In een sectorclub wordt die gesproken.",
          ar: "لكل قطاعٍ لغته، وفي النادي القطاعي يُتحدَّث بها.",
        },
      },
      {
        kind: "statement",
        text: {
          en: "Each club brings together members, opportunities, reports, events and specialists from one trade.",
          nl: "Elke club brengt leden, kansen, rapporten, bijeenkomsten en specialisten uit één vak samen.",
          ar: "يجمع كل نادٍ أعضاءَ قطاعٍ واحد، وفرصَه، وتقاريرَه، وفعالياتِه، وخبراءَه.",
        },
        note: {
          en: "Access to the sector clubs is part of every level of membership.",
          nl: "Toegang tot de sectorclubs hoort bij elk niveau van lidmaatschap.",
          ar: "الوصول إلى الأندية القطاعية مشمولٌ في كل مستوى من مستويات العضوية.",
        },
      },
      {
        kind: "next",
        heading: { en: "What a club *draws on.*", nl: "Waaruit een club *put.*", ar: "ما يستند إليه *النادي.*" },
        links: [
          { href: "events/calendar", label: { en: "Events", nl: "Evenementen", ar: "الفعاليات" } },
          { href: "events/intelligence", label: { en: "Market reports", nl: "Marktrapporten", ar: "تقارير الأسواق" } },
          { href: "network/directory", label: { en: "Member directory", nl: "Ledenregister", ar: "دليل الأعضاء" } },
        ],
      },
    ],
  },

  /* ───────────────────────── stories ───────────────────────── */
  "network/stories": {
    masthead: { variant: "portrait", photo: "sto-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "The best proof of a network’s value is what happens inside it. Our stories follow how a search becomes an introduction, and an introduction becomes business — told only with the permission of everyone involved.",
          nl: "Het beste bewijs van de waarde van een netwerk is wat erbinnen gebeurt. Onze verhalen volgen hoe een zoektocht een introductie wordt en een introductie tot zaken leidt — alleen verteld met toestemming van iedereen die erbij betrokken is.",
          ar: "أفضل دليل على قوة الشبكة هو ما يحدث داخلها. تتبع قصصنا كيف يتحوّل البحث إلى تعريف، والتعريف إلى عمل تجاري — ولا تُروى إلا بموافقة جميع الأطراف المعنية.",
        },
      },
      {
        kind: "register",
        cols: 1,
        numbered: true,
        label: { en: "The formats", nl: "De rubrieken", ar: "الصيغ" },
        heading: { en: "The forms a story *takes.*", nl: "De vormen die een verhaal *aanneemt.*", ar: "الأشكال التي تتخذها *القصة.*" },
        items: [
          {
            title: { en: "Deal of the Month", nl: "Deal of the Month", ar: "Deal of the Month" },
            body: {
              en: "Each month, one opportunity or cooperation that began through DUKAAT: what was needed, how the parties found each other, and what they agreed to share.",
              nl: "Elke maand één kans of samenwerking die via DUKAAT is begonnen: wat er nodig was, hoe de partijen elkaar vonden, en wat zij bereid zijn te delen.",
              ar: "قصةٌ شهرية لفرصةٍ أو تعاونٍ بدأ عبر DUKAAT: ما الذي كان مطلوباً، وكيف وجد الطرفان أحدهما الآخر، وما اتفقا على الإفصاح عنه.",
            },
          },
          {
            title: { en: "Member Spotlight", nl: "Member Spotlight", ar: "Member Spotlight" },
            body: {
              en: "A portrait of one member: the story behind the company, what it offers and what it is looking for. Being featured is open to Professional and Executive members.",
              nl: "Een portret van één lid: het verhaal achter het bedrijf, wat het aanbiedt en wat het zoekt. Open voor leden op de niveaus Professional en Executive.",
              ar: "التعريف بأحد أعضاء DUKAAT: قصته، وشركته، وما يقدّمه، وما يبحث عنه. والظهور فيه متاحٌ لأعضاء مستويَي Professional وExecutive.",
            },
          },
          {
            title: { en: "Success Stories", nl: "Succesverhalen", ar: "قصص النجاح" },
            body: {
              en: "Longer accounts of how a connection became business: the search, the introduction, the checks on both sides, and the first shipment or contract.",
              nl: "Langere verslagen van hoe een contact tot zaken leidde: de zoektocht, de introductie, de controles aan beide kanten, en de eerste zending of het eerste contract.",
              ar: "رواياتٌ أطول عن كيفية تحوّل صلةٍ إلى عمل تجاري: البحث، والتعريف، والتحقق لدى الطرفين، ثم الشحنة الأولى أو العقد الأول.",
            },
          },
        ],
      },
      {
        kind: "register",
        cols: 2,
        label: { en: "The subjects", nl: "De onderwerpen", ar: "الموضوعات" },
        heading: { en: "The stories we *tell.*", nl: "De verhalen die wij *vertellen.*", ar: "القصص التي *نرويها.*" },
        intro: {
          en: "Every story starts with one of the needs members bring to us.",
          nl: "Elk verhaal begint bij een van de behoeften die leden bij ons neerleggen.",
          ar: "تبدأ كل قصة بحاجةٍ من الحاجات التي يحملها الأعضاء إلينا.",
        },
        items: [
          {
            title: { en: "A member finding a distributor", nl: "Een lid dat een distributeur vindt", ar: "عضوٌ يجد موزّعاً" },
            body: {
              en: "A product that sells at home, and the distributor on the other side who takes it into a new market.",
              nl: "Een product dat thuis verkoopt, en de distributeur aan de andere kant die het een nieuwe markt in brengt.",
              ar: "منتجٌ يُباع في بلده، وموزّعٌ على الضفة الأخرى يحمله إلى سوقٍ جديدة.",
            },
          },
          {
            title: { en: "A company identifying a supplier", nl: "Een bedrijf dat de juiste leverancier vindt", ar: "شركةٌ تجد مورّداً" },
            body: {
              en: "A specification, a volume, a certificate the buyer requires — and the verified source that can deliver it.",
              nl: "Een specificatie, een volume, een certificaat dat de koper eist — en de geverifieerde bron die het kan leveren.",
              ar: "مواصفةٌ وكميةٌ وشهادةٌ يشترطها المشتري — ومصدرٌ موثّق قادرٌ على التوريد.",
            },
          },
          {
            title: { en: "A manufacturer entering a new market", nl: "Een fabrikant die een nieuwe markt betreedt", ar: "مصنعٌ يدخل سوقاً جديدة" },
            body: {
              en: "From the Netherlands into the Arab world, or the other way round: the structure, the partner, the first order.",
              nl: "Van Nederland naar de Arabische wereld, of andersom: de structuur, de partner, de eerste order.",
              ar: "من هولندا إلى العالم العربي أو بالعكس: الهيكل، والشريك، والطلبية الأولى.",
            },
          },
          {
            title: { en: "An investor discovering a project", nl: "Een investeerder die een project ontdekt", ar: "مستثمرٌ يتعرّف إلى مشروع" },
            body: {
              en: "A company or project that needs capital, presented for information only, and an investor who takes it further on the strength of their own due diligence.",
              nl: "Een bedrijf of project dat kapitaal zoekt, uitsluitend ter informatie gepresenteerd, en een investeerder die het op basis van eigen onderzoek verder brengt.",
              ar: "شركةٌ أو مشروعٌ يحتاج إلى رأس مال ويُعرض للاطلاع فقط، ومستثمرٌ يمضي فيه قُدماً استناداً إلى الفحص النافي للجهالة الذي يجريه بنفسه.",
            },
          },
        ],
      },
      {
        kind: "notice",
        label: { en: "Permission", nl: "Toestemming", ar: "الموافقة" },
        heading: { en: "Nothing without *permission.*", nl: "Niets zonder *toestemming.*", ar: "لا شيء *دون موافقة.*" },
        body: [
          {
            en: "A story is published only with the explicit permission of every party involved, and each party reads the final text before it appears.",
            nl: "Een verhaal wordt alleen gepubliceerd met uitdrukkelijke toestemming van elke betrokken partij, en elke partij leest de definitieve tekst voordat die verschijnt.",
            ar: "لا تُنشر أي قصة إلا بموافقةٍ صريحة من كل طرف معنيّ بها، ويطّلع كل طرف على النص النهائي قبل نشره.",
          },
          {
            en: "Figures — volumes, values, prices — appear only when the parties have approved them. On request, a story is told without names: the sector, the market and how the connection was made, not the companies.",
            nl: "Cijfers — volumes, bedragen, prijzen — verschijnen alleen als de partijen ze hebben goedgekeurd. Op verzoek wordt een verhaal zonder namen verteld: de sector, de markt en hoe het contact tot stand kwam, niet de bedrijven.",
            ar: "ولا تظهر الأرقام — الكميات والمبالغ والأسعار — إلا إذا وافق عليها الأطراف. وعند الطلب تُروى القصة دون أسماء: يُذكر القطاع والسوق وكيف نشأت الصلة، لا الشركات.",
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "Every story starts with a *need.*", nl: "Elk verhaal begint met een *behoefte.*", ar: "كل قصة تبدأ *بحاجة.*" },
        links: [
          { href: "contact?intent=distributor#intake", label: { en: "I need a distributor", nl: "Ik zoek een distributeur", ar: "أحتاج إلى موزّع" } },
          { href: "contact?intent=supplier#intake", label: { en: "I need a supplier", nl: "Ik zoek een leverancier", ar: "أحتاج إلى مورّد" } },
          { href: "how-we-work", label: { en: "How we work", nl: "Zo werken wij", ar: "كيف نعمل" } },
        ],
      },
    ],
  },

  /* ───────────────────────── ambassadors ───────────────────────── */
  "network/ambassadors": {
    masthead: { variant: "band", photo: "amb-hero" },
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
        photo: "amb-facade",
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
        kind: "next",
        heading: { en: "Into the market, *in person.*", nl: "De markt in, *persoonlijk.*", ar: "إلى السوق، *حضورياً.*" },
        links: [
          { href: "events/missions", label: { en: "Trade missions", nl: "Handelsmissies", ar: "البعثات التجارية" } },
          { href: "services/market-entry", label: { en: "Market entry", nl: "Markttoetreding", ar: "دخول الأسواق" } },
          { href: "services/representation", label: { en: "Representation", nl: "Vertegenwoordiging", ar: "التمثيل" } },
        ],
      },
    ],
  },

  /* ───────────────────────── partners ───────────────────────── */
  "network/partners": {
    masthead: { variant: "plate", photo: "par-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "DUKAAT does not try to do everything itself. It works with institutions whose expertise its members need, and with sponsors who support the programmes where members meet and learn.",
          nl: "DUKAAT probeert niet alles zelf te doen. Het werkt samen met instellingen wier expertise zijn leden nodig hebben, en met sponsors die de programma’s steunen waar leden elkaar ontmoeten en kennis opdoen.",
          ar: "لا يبني DUKAAT منظومته وحده. فهو يتعاون مع مؤسساتٍ يحتاج أعضاؤه إلى خبرتها، ومع رعاةٍ يدعمون البرامج التي يلتقي فيها الأعضاء ويتعلّمون.",
        },
      },
      {
        kind: "terms",
        label: { en: "Cooperation", nl: "Samenwerking", ar: "التعاون" },
        heading: { en: "Whom we *work with.*", nl: "Met wie wij *samenwerken.*", ar: "الجهات التي *نتعاون معها.*" },
        intro: {
          en: "Institutions that bring members what they need beyond an introduction: knowledge, finance, law, freight, venues and training.",
          nl: "Instellingen die leden bieden wat zij naast een introductie nodig hebben: kennis, financiering, recht, vracht, locaties en opleiding.",
          ar: "مؤسساتٌ تقدّم للأعضاء ما يحتاجون إليه إلى جانب التعريف: المعرفة، والتمويل، والقانون، والشحن، وأماكن الفعاليات، والتدريب.",
        },
        items: [
          { en: "Companies", nl: "Bedrijven", ar: "الشركات" },
          { en: "Universities", nl: "Universiteiten", ar: "الجامعات" },
          { en: "Banks", nl: "Banken", ar: "البنوك" },
          { en: "Law firms", nl: "Advocatenkantoren", ar: "المكاتب القانونية" },
          { en: "Accountants", nl: "Accountantskantoren", ar: "مكاتب المحاسبة" },
          { en: "Logistics companies", nl: "Logistieke bedrijven", ar: "الشركات اللوجستية" },
          { en: "Exhibition organisers", nl: "Beursorganisatoren", ar: "منظّمو المعارض" },
          { en: "Economic organisations", nl: "Economische organisaties", ar: "الجهات الاقتصادية" },
          { en: "Training institutions", nl: "Opleidingsinstituten", ar: "مؤسسات التدريب" },
        ],
        note: {
          en: "Where a partner advises or acts for a member, that engagement — and the responsibility for it — sits between the member and the partner.",
          nl: "Waar een partner een lid adviseert of voor een lid optreedt, ligt die opdracht — en de verantwoordelijkheid ervoor — tussen het lid en de partner.",
          ar: "حين يقدّم شريكٌ المشورة لعضو أو يتصرّف نيابةً عنه، فإن هذا التكليف — والمسؤولية عنه — قائمٌ بين العضو والشريك.",
        },
      },
      {
        kind: "terms",
        label: { en: "Sponsorship", nl: "Sponsoring", ar: "الرعاية" },
        heading: { en: "What sponsors *support.*", nl: "Wat sponsors *mogelijk maken.*", ar: "ما يدعمه *الرعاة.*" },
        intro: {
          en: "Companies can support the programmes where members meet and learn, with visibility agreed per programme.",
          nl: "Bedrijven kunnen de programma’s steunen waar leden elkaar ontmoeten en kennis opdoen, met zichtbaarheid die per programma wordt afgesproken.",
          ar: "يمكن للشركات أن تدعم البرامج التي يلتقي فيها الأعضاء ويتعلّمون، بباقات ظهورٍ يُتّفق عليها لكل برنامج على حدة.",
        },
        items: [
          { en: "Conferences", nl: "Conferenties", ar: "المؤتمرات" },
          { en: "Exhibitions", nl: "Beurzen", ar: "المعارض" },
          { en: "Executive Dinners", nl: "Executive Dinners", ar: "Executive Dinners" },
          { en: "Sector clubs", nl: "Sectorclubs", ar: "الأندية القطاعية" },
          { en: "Trade missions", nl: "Handelsmissies", ar: "البعثات التجارية" },
          { en: "Reports", nl: "Rapporten", ar: "التقارير" },
          { en: "Academy programmes", nl: "Academy-programma’s", ar: "برامج الأكاديمية" },
        ],
        note: {
          en: "Sponsorship opportunities are also part of the Executive level of membership.",
          nl: "Sponsormogelijkheden horen ook bij het Executive-niveau van het lidmaatschap.",
          ar: "وتدخل فرص الرعاية أيضاً ضمن مزايا مستوى Executive.",
        },
      },
      {
        kind: "register",
        cols: 2,
        numbered: true,
        label: { en: "Golden Ten", nl: "Golden Ten", ar: "Golden Ten" },
        heading: { en: "Ten places, *at the front.*", nl: "Tien plaatsen, *vooraan.*", ar: "عشرة مقاعد، *في الصدارة.*" },
        intro: {
          en: "The Golden Ten are the ten companies that support DUKAAT as its principal sponsors. There are never more than ten, and what each place brings is agreed in writing.",
          nl: "De Golden Ten zijn de tien bedrijven die DUKAAT steunen als hoofdsponsors. Het zijn er nooit meer dan tien, en wat elke plaats omvat, wordt schriftelijk vastgelegd.",
          ar: "Golden Ten هي الشركات العشر التي تدعم DUKAAT بوصفها رعاته الرئيسيين. ولا يزيد عددها على عشر أبداً، ويُحدَّد كتابةً ما يشمله كل مقعد.",
        },
        items: [
          {
            title: { en: "A place on this website", nl: "Een plaats op deze website", ar: "مكانٌ في هذا الموقع" },
            body: {
              en: "The company’s name and mark in a place of its own on the DUKAAT website, beside the programmes it supports.",
              nl: "Naam en beeldmerk van het bedrijf op een eigen plek op de website van DUKAAT, naast de programma’s die het steunt.",
              ar: "اسم الشركة وشعارها في موضعٍ خاص بها على موقع DUKAAT، إلى جانب البرامج التي تدعمها.",
            },
          },
          {
            title: { en: "Its story, told on the site", nl: "Het eigen verhaal, op de site", ar: "قصتها على الموقع" },
            body: {
              en: "A portrait of the company — what it makes, where it trades, what drives it — written with the company and published with its approval.",
              nl: "Een portret van het bedrijf — wat het maakt, waar het handelt, wat het drijft — samen met het bedrijf geschreven en met zijn goedkeuring gepubliceerd.",
              ar: "تعريفٌ بالشركة — ما تصنعه، وأين تتاجر، وما يحرّكها — يُكتب بالتعاون معها ويُنشر بموافقتها.",
            },
          },
          {
            title: { en: "Closer guidance", nl: "Nauwere begeleiding", ar: "مرافقةٌ أوثق" },
            body: {
              en: "More time from the DUKAAT team: a direct line, and support that reaches beyond what a membership level includes.",
              nl: "Meer tijd van het DUKAAT-team: een directe lijn, en ondersteuning die verder gaat dan wat een lidmaatschapsniveau omvat.",
              ar: "وقتٌ أكبر من فريق DUKAAT: خطٌّ مباشر، ودعمٌ يتجاوز ما يشمله مستوى العضوية.",
            },
          },
          {
            title: { en: "Presence at the programmes", nl: "Aanwezigheid bij de programma’s", ar: "حضورٌ في البرامج" },
            body: {
              en: "Visibility at the events, missions and reports the company chooses to support, agreed per programme.",
              nl: "Zichtbaarheid bij de evenementen, missies en rapporten die het bedrijf wil steunen, per programma afgesproken.",
              ar: "ظهورٌ في الفعاليات والبعثات والتقارير التي تختار الشركة دعمها، يُتّفق عليه لكل برنامج.",
            },
          },
        ],
      },
      {
        kind: "prose",
        label: { en: "Our criteria", nl: "Onze criteria", ar: "معاييرنا" },
        heading: { en: "Chosen for what members *need.*", nl: "Gekozen naar wat leden *nodig hebben.*", ar: "نختارهم بحسب *حاجة الأعضاء.*" },
        body: [
          {
            en: "We choose partners by one test: does this make a member’s trade easier, safer or better informed? A bank, a law firm or a forwarder earns its place through relevance to what members actually need — not through the size of its name.",
            nl: "Wij kiezen partners aan de hand van één vraag: maakt dit de handel van een lid eenvoudiger, veiliger of beter onderbouwd? Een bank, een advocatenkantoor of een expediteur verdient zijn plaats door wat hij bijdraagt aan wat leden werkelijk nodig hebben — niet door de bekendheid van zijn naam.",
            ar: "نختار شركاءنا بمعيارٍ واحد: هل تجعل هذه الشراكة تجارةَ العضو أيسر، أو أكثر أماناً، أو أوضح رؤية؟ فالمصرف أو مكتب المحاماة أو وكيل الشحن يكسب مكانه بمدى صلته بما يحتاج إليه الأعضاء فعلاً — لا بشهرة اسمه.",
          },
          {
            en: "Every partnership and every sponsorship is set down in writing: what each side contributes, what is visible and where, and for how long. Sponsorship buys visibility, never influence. It has no bearing on who is admitted, who is introduced, or what we write.",
            nl: "Elke samenwerking en elke sponsoring wordt schriftelijk vastgelegd: wat elke partij inbrengt, wat zichtbaar is en waar, en voor hoe lang. Sponsoring levert zichtbaarheid op, nooit invloed. Zij speelt geen rol bij wie wordt toegelaten, wie wordt geïntroduceerd of wat wij schrijven.",
            ar: "وتُوثَّق كل شراكة وكل رعاية كتابةً: ما يقدّمه كل طرف، وما يظهر وأين، ولأي مدة. فالرعاية تشتري الظهور، لا النفوذ أبداً؛ ولا أثر لها في قرارات القبول، ولا في التعريفات التي نجريها، ولا فيما نكتبه.",
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "To discuss a *partnership.*", nl: "Een samenwerking *bespreken.*", ar: "للحديث عن *شراكة.*" },
        body: {
          en: "Institutions and companies that would like to work with DUKAAT, support one of its programmes or take a place among the Golden Ten can write to us with a short description of what they bring.",
          nl: "Instellingen en bedrijven die met DUKAAT willen samenwerken, een van zijn programma’s willen steunen of een plaats in de Golden Ten willen innemen, kunnen ons schrijven met een korte beschrijving van wat zij inbrengen.",
          ar: "يمكن للمؤسسات والشركات الراغبة في التعاون مع DUKAAT، أو في دعم أحد برامجه، أو في شغل مقعدٍ ضمن Golden Ten، أن تراسلنا بوصفٍ موجز لما تسهم به.",
        },
        links: [
          { href: "contact", label: { en: "Write to us", nl: "Schrijf ons", ar: "راسلنا" } },
          { href: "events/calendar", label: { en: "Events", nl: "Evenementen", ar: "الفعاليات" } },
          { href: "events/academy", label: { en: "Academy", nl: "Academy", ar: "الأكاديمية" } },
        ],
      },
    ],
  },
};
