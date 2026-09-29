import type { PageSet } from "./types";

/**
 * About DUKAAT — the group overview and its four pages.
 * Facts about the ducat: only the verified ones (4 Aug 1586 · 3.494 g · 983/1000 · Royal Dutch Mint, Utrecht ·
 * sultani 1477–78 under Mehmed II · bunduqi after al-Bunduqiyya, Venice). The keystone sentence stays verbatim.
 * Sources: content master p.4–5 (who we are, more than a club), p.7–8 (vision, mission, objectives), p.23 (why),
 * p.24 (the trader's own text); the compagnon's Arabic draft (the Netherlands as starting point, values, who we serve,
 * technology and human connection). Founder names stay in brackets until the founders decide.
 * Founder 2's long voice is a proposal: he approves or rewrites it before launch.
 */
export const about: PageSet = {
  about: {
    masthead: { variant: "band", photo: "about-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "DUKAAT is a private business club and platform that brings together entrepreneurs, companies, investors, manufacturers, suppliers, buyers and experts across the Netherlands and the Arab world — to build real business relationships and turn them into lasting trade, partnerships and investment.",
          nl: "DUKAAT is een besloten businessclub en platform dat ondernemers, bedrijven, investeerders, fabrikanten, leveranciers, kopers en experts in Nederland en de Arabische wereld met elkaar verbindt — om echte zakelijke relaties op te bouwen en die om te zetten in blijvende handel, samenwerking en investeringen.",
          ar: "DUKAAT نادٍ خاص ومنصة أعمال تجمع روّاد الأعمال والشركات والمستثمرين والمصنّعين والمورّدين والمشترين والخبراء بين هولندا والعالم العربي، بهدف بناء علاقات تجارية حقيقية وتحويلها إلى تجارة وشراكات واستثمارات تدوم.",
        },
      },
      {
        kind: "register",
        numbered: true,
        photo: "about-maker",
        label: { en: "Who we are", nl: "Wie wij zijn", ar: "من نحن" },
        heading: { en: "Opportunities are *everywhere.*", nl: "Kansen zijn er *overal.*", ar: "الفرص موجودة *في كل مكان.*" },
        intro: {
          en: "DUKAAT was built around a simple idea: what makes the difference is reaching the right person, the right information and the right market at the right time.",
          nl: "DUKAAT is gebouwd rond een eenvoudig idee: het verschil zit in het bereiken van de juiste persoon, de juiste informatie en de juiste markt, op het juiste moment.",
          ar: "قام DUKAAT على مبدأ بسيط: الوصول إلى الشخص الصحيح، والمعلومة الصحيحة، والسوق الصحيحة في الوقت الصحيح هو ما يصنع الفرق.",
        },
        items: [
          {
            title: {
              en: "A Dutch company with an excellent product",
              nl: "Een Nederlands bedrijf met een uitstekend product",
              ar: "شركة هولندية تمتلك منتجاً ممتازاً",
            },
            body: {
              en: "The product is ready. What is missing is a distributor in the Arab world: someone who knows the market, reaches the buyers and can be trusted with the brand.",
              nl: "Het product is er. Wat ontbreekt, is een distributeur in de Arabische wereld: iemand die de markt kent, de kopers bereikt en aan wie u het merk kunt toevertrouwen.",
              ar: "المنتج جاهز، وما ينقصها موزّعٌ في العالم العربي: جهةٌ تعرف السوق، وتصل إلى المشترين، ويمكن أن تُؤتمن على العلامة التجارية.",
            },
          },
          {
            title: {
              en: "An Arab investor looking at Europe",
              nl: "Een Arabische investeerder met het oog op Europa",
              ar: "مستثمر عربي يتطلّع إلى أوروبا",
            },
            body: {
              en: "The capital and the intent are there. What is missing is the right European company or project — and a counterparty who has been checked before anything is signed.",
              nl: "Het kapitaal en de bereidheid zijn er. Wat ontbreekt, is het juiste Europese bedrijf of project — en een tegenpartij die is gecontroleerd voordat er iets wordt getekend.",
              ar: "رأس المال موجود، والنيّة كذلك. وما ينقصه شركة أو مشروع أوروبي مناسب — وطرفٌ مقابل جرى التحقق منه قبل توقيع أي شيء.",
            },
          },
          {
            title: {
              en: "An Arab manufacturer ready to export",
              nl: "Een Arabische fabrikant die klaar is voor export",
              ar: "مصنع عربي جاهز للتصدير",
            },
            body: {
              en: "The capacity to supply Europe is there. What is missing is knowing where to begin: which buyers, which standards and certificates, which first step.",
              nl: "De capaciteit om Europa te beleveren is er. Wat ontbreekt, is weten waar te beginnen: welke kopers, welke normen en certificaten, welke eerste stap.",
              ar: "القدرة على التوريد إلى أوروبا موجودة، وما ينقصه أن يعرف من أين يبدأ: أيّ المشترين، وأيّ المعايير والشهادات، وما الخطوة الأولى.",
            },
          },
          {
            title: {
              en: "A trader in search of a source",
              nl: "Een handelaar op zoek naar een bron",
              ar: "تاجر يبحث عن مصدر",
            },
            body: {
              en: "A supplier, a factory, a stocklot, a used machine. The right opportunity exists somewhere else — and neither side knows that the other is there.",
              nl: "Een leverancier, een fabriek, een partij restvoorraad, een gebruikte machine. De juiste kans bestaat ergens anders — en geen van beide kanten weet dat de ander er is.",
              ar: "يبحث عن مورّد أو مصنع أو دفعة مخزون أو آلة مستعملة، والفرصة المناسبة موجودة في مكان آخر — دون أن يعلم أيٌّ من الطرفين بوجود الآخر.",
            },
          },
        ],
      },
      {
        kind: "statement",
        text: {
          en: "This is where DUKAAT comes in: we build the environment in which the right people, companies and opportunities find each other.",
          nl: "Hier komt DUKAAT in beeld: wij bouwen de omgeving waarin de juiste mensen, bedrijven en kansen elkaar vinden.",
          ar: "هنا يأتي دور DUKAAT: نبني البيئة التي تساعد الأشخاص والشركات والفرص المناسبة على أن تجد بعضها بعضاً.",
        },
      },
      {
        kind: "duo",
        photos: ["about-room", "about-coffee"],
        label: { en: "Beyond networking", nl: "Meer dan netwerken", ar: "أكثر من نادٍ" },
        heading: { en: "From searching *to finding.*", nl: "Van zoeken *tot vinden.*", ar: "من البحث *حتى تجد.*" },
        body: [
          {
            en: "DUKAAT is not meant as one more networking club or a place to exchange business cards, and its strength is not measured by the number of its members. It is one connected environment that supports a member from the moment they say “I am looking for…” until they can say “I found the person, company or opportunity I needed.”",
            nl: "DUKAAT is niet bedoeld als de zoveelste netwerkclub of als plek om visitekaartjes uit te wisselen, en de kracht van de club wordt niet afgemeten aan het aantal leden. Het is één samenhangende omgeving die leden bijstaat vanaf het eerste “Ik zoek…” tot het moment waarop zij kunnen zeggen: “Ik heb de persoon, het bedrijf of de kans gevonden die ik nodig had.”",
            ar: "لا يُراد لـDUKAAT أن يكون نادياً آخر من نوادي التعارف، ولا مكاناً لتبادل بطاقات العمل، ولا تُقاس قوته بعدد أعضائه. إنه منظومة أعمال متكاملة تساند العضو منذ اللحظة التي يقول فيها: «أبحث عن…»، حتى يصل إلى: «وجدت الشخص أو الشركة أو الفرصة التي أحتاجها».",
          },
          {
            en: "That is why DUKAAT brings together, in one place, what is usually scattered: connections, trade, investment, knowledge, technology and human expertise. Each is useful on its own; together they carry a member from the first question to the first deal.",
            nl: "Daarom brengt DUKAAT op één plek samen wat meestal verspreid ligt: relaties, handel, investeringen, kennis, technologie en menselijke expertise. Elk onderdeel is op zichzelf nuttig; samen brengen zij een lid van de eerste vraag tot de eerste deal.",
            ar: "لهذا يجمع DUKAAT في مكان واحد ما يكون متفرّقاً عادةً: العلاقات، والتجارة، والاستثمار، والمعرفة، والتكنولوجيا، والخبرة البشرية. لكلٍّ منها فائدته على حدة؛ ومجتمعةً تأخذ بيد العضو من السؤال الأول إلى الصفقة الأولى.",
          },
        ],
      },
      {
        kind: "band",
        photo: "about-port",
        caption: {
          en: "The Netherlands is the starting point; the world is the direction.",
          nl: "Nederland is het beginpunt; de wereld is de richting.",
          ar: "هولندا نقطة البداية… والعالم هو الاتجاه.",
        },
      },
      {
        kind: "facts",
        label: { en: "Anno 2018", nl: "Anno 2018", ar: "منذ 2018" },
        heading: {
          en: "Dutch in origin, *built to connect.*",
          nl: "Nederlands van oorsprong, *gebouwd om te verbinden.*",
          ar: "هولنديّ النشأة، *صُمّم ليربط.*",
        },
        intro: {
          en: "The Netherlands is one of Europe’s key gateways for trade; the Arab world spans markets of great variety. DUKAAT was built from the start to connect the two: the Netherlands and Europe with the Arab world.",
          nl: "Nederland is een van de belangrijkste handelspoorten van Europa; de Arabische wereld omvat zeer uiteenlopende markten. DUKAAT is vanaf het begin gebouwd om die twee te verbinden: Nederland en Europa met de Arabische wereld.",
          ar: "هولندا واحدة من أهم بوابات التجارة الأوروبية، والعالم العربي يضمّ أسواقاً شديدة التنوّع. وقد صُمّم DUKAAT منذ البداية ليربط بينهما: هولندا وأوروبا من جهة، والعالم العربي من جهة أخرى.",
        },
        items: [
          {
            term: { en: "Legal entity", nl: "Rechtspersoon", ar: "الكيان القانوني" },
            value: {
              en: "Stichting Nederlands–Arabische Handelskamer, a Dutch foundation",
              nl: "Stichting Nederlands–Arabische Handelskamer",
              ar: "Stichting Nederlands–Arabische Handelskamer، مؤسسة هولندية",
            },
          },
          {
            term: { en: "Founded", nl: "Opgericht", ar: "التأسيس" },
            value: {
              en: "2018, Rotterdam",
              nl: "2018, Rotterdam",
              ar: "2018، روتردام",
            },
          },
          {
            term: { en: "The club", nl: "De club", ar: "النادي" },
            value: {
              en: "DUKAAT — Dutch–Arab Business Club",
              nl: "DUKAAT — Dutch–Arab Business Club",
              ar: "DUKAAT — نادي الأعمال الهولندي العربي",
            },
          },
          {
            term: { en: "Languages", nl: "Talen", ar: "اللغات" },
            value: { en: "Arabic, Dutch, English", nl: "Arabisch, Nederlands, Engels", ar: "العربية، والهولندية، والإنجليزية" },
          },
          {
            term: { en: "Admission", nl: "Toelating", ar: "القبول" },
            value: { en: "By nomination or invitation, after review", nl: "Op voordracht of uitnodiging, na beoordeling", ar: "بالترشيح أو الدعوة، بعد المراجعة" },
          },
        ],
      },
      {
        kind: "index",
        label: { en: "Read on", nl: "Lees verder", ar: "تابع القراءة" },
        heading: {
          en: "The name, the reasons, the values, *the people.*",
          nl: "De naam, de redenen, de waarden, *de mensen.*",
          ar: "الاسم، والدوافع، والقيم، *والأشخاص.*",
        },
      },
      {
        kind: "next",
        heading: { en: "Begin with *the name.*", nl: "Begin bij *de naam.*", ar: "ابدأ *بالاسم.*" },
        body: {
          en: "Or go straight to the five steps between a need and a first deal.",
          nl: "Of ga direct naar de vijf stappen tussen een behoefte en een eerste deal.",
          ar: "أو انتقل مباشرةً إلى الخطوات الخمس التي تقود من الحاجة إلى الصفقة الأولى.",
        },
        links: [
          { href: "about/story", label: { en: "The name", nl: "De naam", ar: "الاسم" } },
          { href: "how-we-work", label: { en: "How we work", nl: "Zo werken wij", ar: "كيف نعمل" } },
        ],
      },
    ],
  },

  "about/story": {
    masthead: { variant: "portrait", photo: "story-balance" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "DUKAAT takes its name from the Dutch gold ducat: a coin made for trade, whose worth a merchant knew the moment he saw it.",
          nl: "DUKAAT ontleent zijn naam aan de Nederlandse gouden dukaat: een munt gemaakt voor de handel, waarvan een koopman de waarde kende zodra hij hem zag.",
          ar: "يستمدّ DUKAAT اسمه من الدوقات الذهبي الهولندي: عملةٌ سُكّت للتجارة، كان التاجر يعرف قيمتها بمجرد أن يراها.",
        },
      },
      {
        kind: "facts",
        media: "film",
        label: { en: "The coin", nl: "De munt", ar: "العملة" },
        heading: { en: "A known *weight.*", nl: "Een bekend *gewicht.*", ar: "وزنٌ *معروف.*" },
        items: [
          {
            term: { en: "Trade coin since", nl: "Handelsmunt sinds", ar: "عملة تجارية منذ" },
            value: { en: "4 August 1586, under the Dutch Mint Act", nl: "4 augustus 1586, onder de Muntwet", ar: "4 أغسطس 1586، بموجب قانون السكّ الهولندي" },
          },
          {
            term: { en: "Weight", nl: "Gewicht", ar: "الوزن" },
            value: { en: "3.494 grams", nl: "3,494 gram", ar: "3.494 غرام" },
          },
          {
            term: { en: "Fineness", nl: "Gehalte", ar: "العيار" },
            value: { en: "983/1000 gold", nl: "983/1000 goud", ar: "ذهب بعيار 983/1000" },
          },
          {
            term: { en: "Struck today by", nl: "Vandaag geslagen door", ar: "تسكّه اليوم" },
            value: { en: "The Royal Dutch Mint, Utrecht", nl: "De Koninklijke Nederlandse Munt, Utrecht", ar: "دار السكّ الملكية الهولندية، أوتريخت" },
          },
          {
            term: { en: "Ottoman sultani", nl: "Ottomaanse sultani", ar: "السلطاني العثماني" },
            value: {
              en: "First struck 1477–78 under Mehmed II, on the ducat standard",
              nl: "Voor het eerst geslagen in 1477–78 onder Mehmed II, op de dukaatstandaard",
              ar: "سُكّ لأول مرة عام 1477–78 في عهد محمد الثاني، على معيار الدوقات",
            },
          },
          {
            term: { en: "Bunduqi", nl: "Bunduqi", ar: "البندقي" },
            value: {
              en: "The name of Moroccan gold dinars — after al-Bunduqiyya, Venice",
              nl: "De naam van Marokkaanse gouden dinars — naar al-Bunduqiyya, Venetië",
              ar: "اسم الدنانير الذهبية المغربية — نسبةً إلى البندقية",
            },
          },
        ],
      },
      {
        kind: "prose",
        heading: { en: "Never the gold *alone.*", nl: "Nooit het goud *alleen.*", ar: "لم يكن الذهب *وحده.*" },
        body: [
          {
            en: "Its strength never came from the gold alone. It came from the fact that a merchant who saw it knew exactly what it represented: a known value, a trusted weight, a standard people could deal in across borders.",
            nl: "Zijn kracht kwam nooit van het goud alleen. Hij kwam van het feit dat een koopman die hem zag precies wist waar hij voor stond: een bekende waarde, een vertrouwd gewicht, een standaard waarmee over grenzen heen werd gehandeld.",
            ar: "لم تأتِ قوته يوماً من الذهب وحده، بل من أن التاجر الذي كان يراه يعرف تماماً ما يمثّله: قيمةٌ معروفة، ووزنٌ موثوق، ومعيارٌ يتعامل به الناس عبر الحدود.",
          },
          {
            en: "That standard was not only European. The Ottoman sultani was struck on it. In Morocco, gold dinars were called bunduqi — after the Arabic name for Venice, whose ducat had travelled that far.",
            nl: "Die standaard was niet alleen Europees. De Ottomaanse sultani werd erop geslagen. In Marokko heetten gouden dinars bunduqi — naar de Arabische naam voor Venetië, waarvan de dukaat tot daar was gereisd.",
            ar: "ولم يكن ذلك المعيار أوروبياً فحسب. فعليه سُكّ السلطاني العثماني، وفي المغرب سُمّيت الدنانير الذهبية «بندقي» نسبةً إلى البندقية، التي بلغ دوقاتها ذلك المدى.",
          },
          {
            en: "The Royal Dutch Mint in Utrecht still strikes the ducat today — in its own words, “to keep the memory of our rich trading past alive”.",
            nl: "De Koninklijke Nederlandse Munt in Utrecht slaat de dukaat vandaag nog — in haar eigen woorden “om de herinnering aan ons rijke handelsverleden levend te houden”.",
            ar: "ولا تزال دار السكّ الملكية الهولندية في أوتريخت تسكّ الدوقات حتى اليوم — على حدّ تعبيرها: «لإبقاء ذكرى ماضينا التجاري الغني حيّة».",
          },
        ],
      },
      {
        kind: "statement",
        text: {
          en: "The ducat was a language both sides already spoke.",
          nl: "De dukaat was een taal die beide kanten al spraken.",
          ar: "كان الدوقات لغةً يعرفها الطرفان أصلاً.",
        },
      },
      {
        kind: "prose",
        photo: "story-tulip",
        size: "half",
        side: "start",
        label: { en: "The mark", nl: "Het beeldmerk", ar: "الشعار" },
        heading: { en: "A tulip that *crossed* as well.", nl: "Een tulp die ook *overstak.*", ar: "زهرةُ توليبٍ *عبرت* هي الأخرى." },
        body: [
          {
            en: "The tulip in our mark is a crossing of its own. It reached the Netherlands from the Ottoman world in the sixteenth century, and became as Dutch as anything the country grows.",
            nl: "Ook de tulp in ons beeldmerk heeft een oversteek achter de rug. Hij kwam in de zestiende eeuw uit de Ottomaanse wereld naar Nederland, en werd zo Hollands als alles wat het land voortbrengt.",
            ar: "لزهرة التوليب في شعارنا عبورُها الخاص. فقد وصلت إلى هولندا من العالم العثماني في القرن السادس عشر، ثم غدت هولنديةً كأيّ شيء تُنبته أرضها.",
          },
          {
            en: "The mark holds more than a flower. Its lines are people who have found each other: two gold strands rise, cross and hold, and between the petals, at the very centre, a head can be made out — the member, at the heart of everything DUKAAT does.",
            nl: "Het beeldmerk is meer dan een bloem. Zijn lijnen zijn mensen die elkaar hebben gevonden: twee gouden banen rijzen op, kruisen elkaar en houden elkaar vast, en tussen de bloembladen, precies in het midden, is een hoofd te zien — het lid, in het hart van alles wat DUKAAT doet.",
            ar: "والشعار أكثر من زهرة. فخطوطه أشخاصٌ وجد بعضهم بعضاً: خيطان ذهبيان يرتفعان ويتقاطعان ويتماسكان، وبين البتلات، في المركز تماماً، تظهر هيئة رأس — العضو، في قلب كل ما يقوم به DUKAAT.",
          },
          {
            en: "Beneath it, a gold line runs through the two A’s of DUKAAT like a bridge: the one we build between two worlds.",
            nl: "Daaronder loopt een gouden lijn als een brug door de twee A’s van DUKAAT: de brug die wij bouwen tussen twee werelden.",
            ar: "وتحتها يمتدّ خطٌّ ذهبي عبر حرفَي A في اسم DUKAAT كأنه جسر: الجسر الذي نبنيه بين عالمين.",
          },
        ],
      },
      {
        kind: "prose",
        label: { en: "Value, today", nl: "Waarde, vandaag", ar: "القيمة اليوم" },
        heading: { en: "More than *money.*", nl: "Meer dan *geld.*", ar: "أكثر من *المال.*" },
        body: [
          {
            en: "In business today, value may be the right relationship, the right information, the right product, the right buyer or supplier, the right investment — or an opportunity two parties did not know existed.",
            nl: "In het zakenleven van nu kan waarde de juiste relatie zijn, de juiste informatie, het juiste product, de juiste koper of leverancier, de juiste investering — of een kans waarvan twee partijen niet wisten dat hij bestond.",
            ar: "في عالم الأعمال الحديث، قد تكون القيمة علاقةً صحيحة، أو معلومةً صحيحة، أو منتجاً مناسباً، أو مشترياً أو مورّداً موثوقاً، أو استثماراً جيداً — أو فرصةً لم يكن الطرفان يعرفان بوجودها.",
          },
        ],
      },
      {
        kind: "band",
        photo: "story-river",
        caption: {
          en: "The ducat carried value from market to market. DUKAAT carries it from person to person, company to company, market to market.",
          nl: "De dukaat bracht waarde van markt naar markt. DUKAAT brengt haar van mens tot mens, van bedrijf tot bedrijf, van markt tot markt.",
          ar: "حمل الدوقات القيمة من سوق إلى سوق. ويحملها DUKAAT من شخص إلى شخص، ومن شركة إلى شركة، ومن سوق إلى سوق.",
        },
      },
      {
        kind: "next",
        heading: { en: "What the name *commits us to.*", nl: "Waartoe de naam ons *verplicht.*", ar: "ما يُلزمنا به *الاسم.*" },
        links: [
          { href: "about/values", label: { en: "Vision, mission & values", nl: "Visie, missie & waarden", ar: "الرؤية والرسالة والقيم" } },
          { href: "about/why", label: { en: "Why DUKAAT", nl: "Waarom DUKAAT", ar: "لماذا DUKAAT" } },
        ],
      },
    ],
  },

  "about/why": {
    masthead: { variant: "plate", photo: "why-hero" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "Finding names has never been easier: thousands of companies are one search away. What no search returns is the relationship — the right introduction, the context around it and a reason to trust the other side.",
          nl: "Namen vinden was nooit eenvoudiger: één zoekopdracht levert duizenden bedrijven op. Wat geen zoekopdracht oplevert, is de relatie — de juiste introductie, de context eromheen en een reden om de andere kant te vertrouwen.",
          ar: "لم يكن العثور على الأسماء أسهل مما هو اليوم: آلاف الشركات على بُعد بحثٍ واحد. أما ما لا يأتيك به أي بحث فهو العلاقة: التعريف الصحيح، والسياق المحيط به، وسببٌ للثقة بالطرف الآخر.",
        },
      },
      {
        kind: "register",
        cols: 2,
        label: { en: "The real value", nl: "De werkelijke waarde", ar: "القيمة الحقيقية" },
        heading: {
          en: "What a search *cannot tell you.*",
          nl: "Wat een zoekopdracht *u niet vertelt.*",
          ar: "ما لا يخبرك به *البحث.*",
        },
        intro: {
          en: "The real value lies in knowing:",
          nl: "De werkelijke waarde is weten:",
          ar: "القيمة الحقيقية في أن تعرف:",
        },
        items: [
          {
            title: { en: "Who the right party is", nl: "Wie de juiste partij is", ar: "مَن هو الطرف المناسب" },
            body: {
              en: "Not the largest name or the first result, but the company whose product, volume and standards match your need — checked before you meet.",
              nl: "Niet de grootste naam of het eerste zoekresultaat, maar het bedrijf waarvan product, volume en normen passen bij uw behoefte — gecontroleerd voordat u elkaar ontmoet.",
              ar: "ليس الاسم الأكبر ولا النتيجة الأولى في البحث، بل الشركة التي يطابق منتجها وكمياتها ومعاييرها حاجتك — ويُتحقَّق منها قبل أن تلتقيا.",
            },
          },
          {
            title: { en: "Who makes the decision", nl: "Wie de beslissing neemt", ar: "مَن صاحب القرار" },
            body: {
              en: "The person who answers an enquiry is often not the person who signs. We establish who decides before we introduce you.",
              nl: "Wie een aanvraag beantwoordt, is vaak niet degene die tekent. Wij stellen vast wie beslist voordat wij u introduceren.",
              ar: "كثيراً ما يكون مَن يردّ على الاستفسار غيرَ مَن يوقّع. نتثبّت ممّن يملك القرار قبل أن نقدّمك.",
            },
          },
          {
            title: { en: "Whether the interest is mutual", nl: "Of de interesse wederzijds is", ar: "هل الاهتمام متبادل" },
            body: {
              en: "An introduction is only worth making when both sides stand to gain. We test the commercial interest on the other side before anyone’s time is spent.",
              nl: "Een introductie heeft alleen zin als beide kanten er beter van worden. Wij toetsen de commerciële interesse aan de andere kant voordat iemand er tijd in steekt.",
              ar: "لا قيمة للتعريف ما لم يكن للطرفين فيه مصلحة. نتحقق من الاهتمام التجاري لدى الطرف الآخر قبل أن يبذل أحدٌ وقته.",
            },
          },
          {
            title: { en: "How the conversation should begin", nl: "Hoe het gesprek moet beginnen", ar: "كيف ينبغي أن تبدأ المحادثة" },
            body: {
              en: "A written brief to both sides and, where needed, one of us on the first call — so the cultural gap is bridged before it becomes a misunderstanding.",
              nl: "Een schriftelijke briefing aan beide kanten en, waar nodig, een van ons bij het eerste gesprek — zodat het culturele verschil is overbrugd voordat het een misverstand wordt.",
              ar: "ملخّص مكتوب للطرفين، وأحدنا حاضرٌ في المكالمة الأولى عند الحاجة — كي تُردَم الفجوة الثقافية قبل أن تتحول إلى سوء فهم.",
            },
          },
          {
            title: { en: "How the market actually works", nl: "Hoe de markt werkelijk werkt", ar: "كيف تعمل السوق فعلاً" },
            body: {
              en: "Payment terms, certificates, customs, the pace of decisions, the way a price is negotiated: what differs between the Netherlands and the Arab world, explained by people who trade in both.",
              nl: "Betalingscondities, certificaten, douane, het tempo van beslissen, de manier waarop over een prijs wordt onderhandeld: wat verschilt tussen Nederland en de Arabische wereld, uitgelegd door mensen die op beide markten handelen.",
              ar: "شروط الدفع، والشهادات، والجمارك، وإيقاع اتخاذ القرار، وطريقة التفاوض على السعر: ما يختلف بين هولندا والعالم العربي يشرحه لك أناسٌ يتاجرون في السوقين.",
            },
          },
          {
            title: { en: "Who can help", nl: "Wie kan helpen", ar: "مَن يستطيع المساعدة" },
            body: {
              en: "A freight forwarder, a customs agent, a lawyer, a tax specialist: independent specialists from the network, introduced when the deal needs them.",
              nl: "Een expediteur, een douanedeclarant, een advocaat, een fiscalist: onafhankelijke specialisten uit het netwerk, geïntroduceerd wanneer de deal daarom vraagt.",
              ar: "وكيل شحن، ومخلّص جمركي، ومحامٍ، ومستشار ضريبي: مختصّون مستقلون من الشبكة، نعرّفك بهم حين تحتاج إليهم الصفقة.",
            },
          },
        ],
      },
      { kind: "home", section: "why" },
      {
        kind: "contrast",
        label: { en: "Our model", nl: "Ons model", ar: "نموذجنا" },
        heading: {
          en: "A community, *not only a platform.*",
          nl: "Een gemeenschap, *niet alleen een platform.*",
          ar: "مجتمع، *وليس مجرد منصة.*",
        },
        intro: {
          en: "DUKAAT brings connections, trade, investment, knowledge, access and support together in one place. Technology is an important part of that. But technology alone does not make business, so our model combines the two.",
          nl: "DUKAAT brengt relaties, handel, investeringen, kennis, toegang en ondersteuning samen op één plek. Technologie is daarvan een belangrijk deel. Maar technologie alleen maakt geen zaken; daarom verbindt ons model de twee.",
          ar: "يجمع DUKAAT في مكان واحد العلاقات، والتجارة، والاستثمار، والمعرفة، والوصول، والدعم. والتكنولوجيا جزءٌ مهمّ من ذلك، لكننا نؤمن بأن التكنولوجيا وحدها لا تصنع الأعمال؛ لذلك يقوم نموذجنا على الجمع بين الاثنين.",
        },
        a: {
          title: { en: "Technology", nl: "Technologie", ar: "التكنولوجيا" },
          items: [
            { en: "Search", nl: "Zoeken", ar: "البحث" },
            { en: "Data", nl: "Data", ar: "البيانات" },
            { en: "Matching between companies", nl: "Koppeling tussen bedrijven", ar: "المطابقة بين الشركات" },
            { en: "Alerts", nl: "Meldingen", ar: "التنبيهات" },
            { en: "Opportunities", nl: "Kansen", ar: "الفرص" },
          ],
        },
        b: {
          title: { en: "Human connection", nl: "Menselijk contact", ar: "التواصل الإنساني" },
          items: [
            { en: "Introductions", nl: "Introducties", ar: "التعارف" },
            { en: "Trust", nl: "Vertrouwen", ar: "الثقة" },
            { en: "Meetings", nl: "Ontmoetingen", ar: "اللقاءات" },
            { en: "Conversations", nl: "Gesprekken", ar: "المحادثات" },
            { en: "Trade missions", nl: "Handelsmissies", ar: "البعثات التجارية" },
            { en: "Long-term relationships", nl: "Langdurige relaties", ar: "العلاقات الطويلة الأمد" },
          ],
        },
        note: {
          en: "Technology narrows the search; people verify. Relationships create business.",
          nl: "Technologie verkleint het zoekveld; mensen verifiëren. Uit relaties ontstaan zaken.",
          ar: "التقنية تضيّق البحث؛ والبشر يتحققون. والعلاقات تصنع الأعمال.",
        },
      },
      {
        kind: "statement",
        text: {
          en: "The quality of a relationship matters more than the number of names, and the result more than the number of events.",
          nl: "De kwaliteit van een relatie weegt zwaarder dan het aantal namen, en het resultaat zwaarder dan het aantal evenementen.",
          ar: "جودة العلاقة أهم من عدد الأسماء، والنتيجة أهم من عدد الفعاليات.",
        },
      },
      {
        kind: "next",
        heading: { en: "How that works, *in practice.*", nl: "Hoe dat werkt, *in de praktijk.*", ar: "كيف يجري ذلك *على أرض الواقع.*" },
        links: [
          { href: "how-we-work", label: { en: "How we work", nl: "Zo werken wij", ar: "كيف نعمل" } },
          {
            href: "membership/who-for",
            label: { en: "Who it is for — and who not", nl: "Voor wie — en voor wie niet", ar: "لمن العضوية — ولمن لا" },
          },
        ],
      },
    ],
  },

  "about/values": {
    masthead: { variant: "band", photo: "values-court" },
    blocks: [
      {
        kind: "terms",
        label: { en: "Vision", nl: "Visie", ar: "رؤيتنا" },
        heading: { en: "What companies *come looking for.*", nl: "Waar bedrijven *naar zoeken.*", ar: "ما تأتي الشركات *بحثاً عنه.*" },
        intro: {
          en: "DUKAAT stands for a trusted business community connecting the Netherlands and Europe with the Arab world — a fixed point of reference for companies looking for:",
          nl: "DUKAAT staat voor een betrouwbare zakelijke gemeenschap die Nederland en Europa verbindt met de Arabische wereld — een vast ijkpunt voor bedrijven die op zoek zijn naar:",
          ar: "يمثّل DUKAAT مجتمع أعمال موثوقاً يربط هولندا وأوروبا بالعالم العربي، ومرجعاً ثابتاً تلجأ إليه الشركات حين تبحث عن:",
        },
        items: [
          { en: "New markets", nl: "Nieuwe markten", ar: "سوق جديدة" },
          { en: "Business partners", nl: "Zakenpartners", ar: "شريك موثوق" },
          { en: "Suppliers", nl: "Leveranciers", ar: "مورّد" },
          { en: "Buyers", nl: "Kopers", ar: "مشترٍ" },
          { en: "Distributors", nl: "Distributeurs", ar: "موزّع" },
          { en: "Investors", nl: "Investeerders", ar: "مستثمر" },
          { en: "Commercial opportunities", nl: "Commerciële kansen", ar: "فرصة تجارية" },
          { en: "Specialised knowledge", nl: "Specialistische kennis", ar: "معرفة متخصصة" },
          { en: "Valuable professional relationships", nl: "Waardevolle zakelijke relaties", ar: "شبكة علاقات ذات قيمة حقيقية" },
        ],
        note: {
          en: "The aim is simple: cross-border business that is easier, clearer and more effective.",
          nl: "Het doel is eenvoudig: grensoverschrijdend zakendoen dat makkelijker, overzichtelijker en doeltreffender is.",
          ar: "والغاية بسيطة: أن تصبح التجارة والتعاون عبر الحدود أكثر سهولة، وأكثر تنظيماً، وأكثر فاعلية.",
        },
      },
      {
        kind: "sequence",
        label: { en: "Mission", nl: "Missie", ar: "رسالتنا" },
        heading: { en: "Turning relationships *into value.*", nl: "Relaties omzetten *in waarde.*", ar: "تحويل العلاقات *إلى قيمة.*" },
        items: [
          { en: "Search", nl: "Zoeken", ar: "البحث" },
          { en: "Introduction", nl: "Introductie", ar: "التعارف" },
          { en: "Trust", nl: "Vertrouwen", ar: "الثقة" },
          { en: "Cooperation", nl: "Samenwerking", ar: "التعاون" },
          { en: "Business", nl: "Zaken", ar: "الأعمال" },
        ],
        body: {
          en: "We connect the right people with the right opportunities, and provide the knowledge, expertise and tools companies need to enter new markets and build long-term business relationships.",
          nl: "Wij verbinden de juiste mensen met de juiste kansen, en bieden de kennis, expertise en middelen die bedrijven nodig hebben om nieuwe markten te betreden en duurzame zakelijke relaties op te bouwen.",
          ar: "نربط الأشخاص المناسبين بالفرص المناسبة، ونوفّر المعلومات والخبرة والأدوات التي تساعد الشركات على دخول أسواق جديدة وبناء علاقات تجارية طويلة الأمد.",
        },
      },
      {
        kind: "chapter",
        label: { en: "Values", nl: "Waarden", ar: "قيمنا" },
        heading: { en: "Three values, *one measure.*", nl: "Drie waarden, *één maat.*", ar: "ثلاث قيم، *ومقياس واحد.*" },
        intro: {
          en: "Value, Trust and Access are the principles DUKAAT rests on — and the measure members may hold us to.",
          nl: "Value, Trust en Access zijn de beginselen waarop DUKAAT rust — en de maat waaraan leden ons mogen houden.",
          ar: "ترتكز فلسفة DUKAAT على ثلاثة مبادئ: القيمة والثقة والوصول — وهي المقياس الذي يحقّ للأعضاء أن يحاسبونا به.",
        },
        items: [
          {
            photo: "values-value",
            title: { en: "Value", nl: "Value", ar: "القيمة" },
            body: {
              en: "Every member should find real value in being part of the network. Not merely a membership card or an invitation to an event, but a relationship, information, an opportunity, a market, a partner — or knowledge that leads to a better decision.",
              nl: "Elk lid hoort werkelijke waarde te vinden in het netwerk. Niet alleen een lidmaatschapskaart of een uitnodiging voor een evenement, maar een relatie, informatie, een kans, een markt, een partner — of kennis die tot een betere beslissing leidt.",
              ar: "ينبغي أن يجد كل عضو قيمة حقيقية في وجوده ضمن الشبكة. ليس مجرد بطاقة عضوية أو دعوة إلى فعالية، بل علاقة، أو معلومة، أو فرصة، أو سوق، أو شريك — أو معرفة تساعده على اتخاذ قرار أفضل.",
            },
          },
          {
            photo: "values-trust",
            title: { en: "Trust", nl: "Trust", ar: "الثقة" },
            body: {
              en: "International business does not grow without trust. Members and companies are presented clearly and professionally, and their registration, activity and references are checked before parties meet. We do not promise to remove risk. We make dealing across borders clearer, better organised and easier to assess.",
              nl: "Internationaal zakendoen groeit niet zonder vertrouwen. Leden en bedrijven worden helder en professioneel gepresenteerd, en hun inschrijving, activiteit en referenties worden gecontroleerd voordat partijen elkaar ontmoeten. Wij beloven niet dat het risico verdwijnt. Wij maken zakendoen over grenzen heen duidelijker, beter georganiseerd en eenvoudiger te beoordelen.",
              ar: "الأعمال الدولية لا تنمو من دون ثقة. لذلك يُقدَّم الأعضاء والشركات بصورة واضحة واحترافية، ويُتحقَّق من سجلّهم التجاري ونشاطهم ومراجعهم قبل أن تلتقي الأطراف. نحن لا نَعِد بإلغاء المخاطر، لكننا نجعل التعامل عبر الحدود أوضح، وأكثر تنظيماً، وأسهل في التقييم.",
            },
          },
          {
            photo: "values-access",
            title: { en: "Access", nl: "Access", ar: "الوصول" },
            body: {
              en: "The right person, the right information, the right market, the right door — at the right time. Access is what is hard to build alone: an introduction to the one who decides, and the context to make good use of it.",
              nl: "De juiste persoon, de juiste informatie, de juiste markt, de juiste deur — op het juiste moment. Toegang is wat u alleen moeilijk opbouwt: een introductie bij degene die beslist, en de context om die goed te benutten.",
              ar: "الشخص المناسب، والمعلومة المناسبة، والسوق المناسبة، والباب المناسب — في الوقت المناسب. الوصول هو ما يصعب على المرء بناؤه بمفرده: تعريفٌ بصاحب القرار، والسياق الذي يمكّنه من حسن الاستفادة منه.",
            },
          },
        ],
      },
      {
        kind: "register",
        numbered: true,
        cols: 2,
        label: { en: "Objectives", nl: "Doelstellingen", ar: "أهدافنا" },
        heading: { en: "The work, *objective by objective.*", nl: "Het werk, *doel voor doel.*", ar: "العمل، *هدفاً هدفاً.*" },
        items: [
          {
            title: {
              en: "Connecting Dutch and Arab business communities",
              nl: "Nederlandse en Arabische zakenwerelden verbinden",
              ar: "ربط مجتمعَي الأعمال الهولندي والعربي",
            },
            body: {
              en: "A professional network of entrepreneurs, companies, investors, manufacturers, suppliers and buyers from the Netherlands and the Arab world.",
              nl: "Een professioneel netwerk van ondernemers, bedrijven, investeerders, fabrikanten, leveranciers en kopers uit Nederland en de Arabische wereld.",
              ar: "شبكة مهنية تجمع روّاد الأعمال والشركات والمستثمرين والمصنّعين والمورّدين والمشترين من هولندا والعالم العربي.",
            },
          },
          {
            title: { en: "Facilitating market entry", nl: "Markttoetreding vergemakkelijken", ar: "تسهيل دخول الأسواق" },
            body: {
              en: "Supporting European companies entering Arab markets, and Arab companies entering the Netherlands and Europe: structure, partner, first order.",
              nl: "Europese bedrijven ondersteunen bij de stap naar Arabische markten, en Arabische bedrijven bij de stap naar Nederland en Europa: structuur, partner, eerste order.",
              ar: "مساعدة الشركات الهولندية والأوروبية على دخول الأسواق العربية، والشركات العربية على دخول السوق الهولندية والأوروبية: الهيكل، والشريك، والطلبية الأولى.",
            },
          },
          {
            title: { en: "Creating commercial opportunities", nl: "Commerciële kansen creëren", ar: "خلق فرص تجارية حقيقية" },
            body: {
              en: "Practical opportunities in buying and selling, import and export, distribution, agencies, manufacturing, supply, investment, partnerships and joint ventures.",
              nl: "Concrete kansen in in- en verkoop, import en export, distributie, agentschappen, productie, toelevering, investeringen, partnerschappen en joint ventures.",
              ar: "التركيز على الفرص العملية: البيع والشراء، والاستيراد والتصدير، والتوزيع، والوكالات التجارية، والتصنيع، والتوريد، والاستثمار، والشراكات، والمشاريع المشتركة.",
            },
          },
          {
            title: { en: "Matchmaking on real needs", nl: "Koppelen op echte behoeften", ar: "مطابقة قائمة على احتياجات حقيقية" },
            body: {
              en: "Connecting companies on what they actually need: a company looking for a distributor, an importer for a factory, an investor for a project, a factory for a buyer.",
              nl: "Bedrijven koppelen op wat zij werkelijk nodig hebben: een bedrijf dat een distributeur zoekt, een importeur een fabriek, een investeerder een project, een fabriek een koper.",
              ar: "ربط الشركات بحسب ما تحتاج إليه فعلاً: شركة تبحث عن موزّع، ومستورد يبحث عن مصنع، ومستثمر يبحث عن مشروع، ومصنع يبحث عن مشترٍ.",
            },
          },
          {
            title: { en: "Building trust between parties", nl: "Vertrouwen tussen partijen opbouwen", ar: "بناء الثقة بين الأطراف" },
            body: {
              en: "Clear company profiles and practical verification, so that each side can assess the other before any cooperation begins.",
              nl: "Heldere bedrijfsprofielen en praktische verificatie, zodat elke kant de andere kan beoordelen voordat een samenwerking begint.",
              ar: "ملفات واضحة للشركات وتحقّقٌ عملي، كي يتمكّن كل طرف من تقييم الآخر قبل أن يبدأ أي تعاون.",
            },
          },
          {
            title: { en: "Showcasing products and opportunities", nl: "Producten en kansen tonen", ar: "عرض المنتجات والفرص" },
            body: {
              en: "DUKAAT Market: a professional marketplace for products, buyer requests and commercial opportunities, with specifications, quantities, quality certificates and private-label options.",
              nl: "DUKAAT Market: een professionele marktplaats voor producten, inkoopaanvragen en commerciële kansen, met specificaties, hoeveelheden, kwaliteitscertificaten en huismerkmogelijkheden.",
              ar: "سوق DUKAAT: سوقٌ احترافية للمنتجات وطلبات الشراء والفرص التجارية، مع المواصفات والكميات وشهادات الجودة وخيارات العلامة الخاصة (Private Label).",
            },
          },
          {
            title: { en: "Stocklots and liquidations", nl: "Partijen en liquidaties", ar: "دفعات المخزون والتصفيات" },
            body: {
              en: "A dedicated channel for surplus stock, overstock, factory and warehouse clearances, used machinery and industrial equipment.",
              nl: "Een eigen kanaal voor restvoorraden, overtollige voorraad, fabrieks- en magazijnopruimingen, gebruikte machines en industriële uitrusting.",
              ar: "قناة مخصّصة لفائض المخزون والبضائع الزائدة عن الحاجة، وتصفيات المصانع والمستودعات، والآلات المستعملة، والمعدات الصناعية.",
            },
          },
          {
            title: { en: "Supporting investment", nl: "Investeringen ondersteunen", ar: "دعم الاستثمار" },
            body: {
              en: "Presenting the projects of owners and developers to relevant investors in Europe and the Arab world. DUKAAT does not provide investment advice, does not arrange or broker investments, and does not offer securities. Opportunities are presented for information only. Independent legal, financial and technical due diligence remains essential before any investment decision.",
              nl: "De projecten van eigenaren en ontwikkelaars presenteren aan relevante investeerders in Europa en de Arabische wereld. DUKAAT geeft geen beleggingsadvies, bemiddelt niet bij investeringen en biedt geen effecten aan. Kansen worden uitsluitend ter informatie gepresenteerd. Onafhankelijk juridisch, financieel en technisch onderzoek blijft essentieel vóór elke investeringsbeslissing.",
              ar: "عرض مشاريع أصحابها ومطوّريها على المستثمرين المعنيين في أوروبا والعالم العربي. لا يقدّم DUKAAT استشارات استثمارية، ولا يرتّب الاستثمارات أو يتوسط فيها، ولا يعرض أوراقاً مالية. تُعرض الفرص للاطلاع فقط. ويبقى الفحص النافي للجهالة القانوني والمالي والفني المستقل ضرورياً قبل أي قرار استثماري.",
            },
          },
          {
            title: { en: "Building knowledge", nl: "Kennis opbouwen", ar: "بناء المعرفة" },
            body: {
              en: "Courses, seminars, workshops, masterclasses, market studies, economic reports and sessions with experts who know both sides.",
              nl: "Cursussen, seminars, workshops, masterclasses, marktstudies, economische rapporten en sessies met experts die beide kanten kennen.",
              ar: "دورات، وندوات، وورش عمل، وجلسات متقدّمة (Masterclasses)، ودراسات أسواق، وتقارير اقتصادية، وجلسات مع خبراء يعرفون الجانبين.",
            },
          },
          {
            title: { en: "Organising events and missions", nl: "Evenementen en missies organiseren", ar: "تنظيم الفعاليات والبعثات" },
            body: {
              en: "Not networking for its own sake: B2B meetings, business breakfasts, Executive Dinners, trade missions, exhibitions, conferences and sector meetings.",
              nl: "Geen netwerken om het netwerken: B2B-bijeenkomsten, zakenontbijten, Executive Dinners, handelsmissies, beurzen, conferenties en sectorbijeenkomsten.",
              ar: "ليس التعارف غايةً في ذاته: لقاءات B2B، ولقاءات فطور الأعمال، وExecutive Dinners، وبعثات تجارية، ومعارض، ومؤتمرات، ولقاءات قطاعية.",
            },
          },
        ],
      },
      {
        kind: "terms",
        label: { en: "Who we serve", nl: "Voor wie", ar: "من نخدم" },
        heading: { en: "Business on *both sides.*", nl: "Ondernemers aan *beide kanten.*", ar: "أصحاب الأعمال *على الضفتين.*" },
        intro: {
          en: "DUKAAT is meant for:",
          nl: "DUKAAT is er voor:",
          ar: "DUKAAT موجّه إلى:",
        },
        items: [
          { en: "Business people", nl: "Zakenmensen", ar: "رجال وسيدات الأعمال" },
          { en: "Company owners", nl: "Bedrijfseigenaren", ar: "أصحاب الشركات" },
          { en: "Investors", nl: "Investeerders", ar: "المستثمرين" },
          { en: "Manufacturers", nl: "Fabrikanten", ar: "المصنّعين" },
          { en: "Importers", nl: "Importeurs", ar: "المستوردين" },
          { en: "Exporters", nl: "Exporteurs", ar: "المصدّرين" },
          { en: "Wholesalers", nl: "Groothandelaren", ar: "تجّار الجملة" },
          { en: "Real-estate developers", nl: "Vastgoedontwikkelaars", ar: "المطوّرين العقاريين" },
          { en: "Project owners", nl: "Projecteigenaren", ar: "أصحاب المشاريع" },
          { en: "Entrepreneurs", nl: "Ondernemers", ar: "روّاد الأعمال" },
          { en: "Start-ups", nl: "Start-ups", ar: "الشركات الناشئة" },
          { en: "Professional service providers", nl: "Professionele dienstverleners", ar: "مقدّمي الخدمات المهنية" },
          { en: "Experts and advisers", nl: "Experts en adviseurs", ar: "الخبراء والمستشارين" },
          {
            en: "European companies entering Arab markets",
            nl: "Europese bedrijven richting Arabische markten",
            ar: "الشركات الأوروبية الساعية إلى دخول الأسواق العربية",
          },
          { en: "Arab companies entering Europe", nl: "Arabische bedrijven richting Europa", ar: "الشركات العربية الساعية إلى دخول أوروبا" },
        ],
        note: {
          en: "An activity requirement, not a size requirement — and every company is reviewed before admission.",
          nl: "Een activiteitseis, geen omvangseis — en elk bedrijf wordt vóór toelating beoordeeld.",
          ar: "شرط النشاط، لا شرط الحجم — وتخضع كل شركة للمراجعة قبل قبولها.",
        },
      },
      {
        kind: "next",
        heading: { en: "Values are kept *by people.*", nl: "Waarden worden gedragen *door mensen.*", ar: "القيم يحملها *أشخاص.*" },
        body: {
          en: "Meet the two founders, and the two trades they bring to the table.",
          nl: "Maak kennis met de twee oprichters, en de twee vakken die zij aan tafel brengen.",
          ar: "تعرّف إلى المؤسسَين، وإلى المهنتين اللتين يحملانهما إلى الطاولة.",
        },
        links: [
          { href: "about/founders", label: { en: "Behind DUKAAT", nl: "Achter DUKAAT", ar: "خلف DUKAAT" } },
          {
            href: "membership/who-for",
            label: { en: "Who it is for — and who not", nl: "Voor wie — en voor wie niet", ar: "لمن العضوية — ولمن لا" },
          },
        ],
      },
    ],
  },

  "about/founders": {
    masthead: { variant: "band", photo: "founders-table" },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "DUKAAT was founded by two people whose trades meet at the same table: one moves goods between the Arab world and Europe, the other brings experience in fiscal law to the structure beneath a deal — contract, tax, customs and verification.",
          nl: "DUKAAT is opgericht door twee mensen wier vakken aan dezelfde tafel samenkomen: de een brengt goederen van de Arabische wereld naar Europa, de ander brengt ervaring in het fiscale recht mee voor de structuur onder een deal — contract, belasting, douane en verificatie.",
          ar: "أسّس DUKAAT شخصان تلتقي مهنتاهما على الطاولة نفسها: أحدهما ينقل البضائع بين العالم العربي وأوروبا، والآخر يحمل خبرته في القانون الضريبي إلى الهيكل الذي تقوم عليه الصفقة — العقد، والضرائب، والجمارك، والتحقق.",
        },
      },
      { kind: "home", section: "behind" },
      {
        kind: "quote",
        photo: "founders-store",
        text: [
          {
            en: "DUKAAT did not start as a business plan. It started as a problem I kept running into myself. I run a contract-packing business in the Netherlands, working with legumes and nuts. I buy from suppliers in the Arab world and sell into the European market.",
            nl: "DUKAAT begon niet als businessplan. Het begon als een probleem waar ik zelf steeds tegenaan liep. Ik heb een loonverpakkingsbedrijf in Nederland, in peulvruchten en noten. Ik koop in bij leveranciers in de Arabische wereld en verkoop op de Europese markt.",
            ar: "لم يبدأ DUKAAT خطةَ عمل، بل بدأ مشكلةً ظللتُ أصطدم بها بنفسي. أدير في هولندا شركة تعبئة تعاقدية للبقوليات والمكسرات؛ أشتري من مورّدين في العالم العربي، وأبيع في السوق الأوروبية.",
          },
          {
            en: "And again and again I saw the same thing. On one side, a factory that could deliver exactly what a European buyer needed. On the other, a buyer who would never find it. Neither side lacked capability. They lacked a way to reach each other — and a reason to trust each other when they did.",
            nl: "En keer op keer zag ik hetzelfde. Aan de ene kant een fabriek die precies kon leveren wat een Europese koper nodig had. Aan de andere kant een koper die haar nooit zou vinden. Het ontbrak geen van beide kanten aan kunnen. Het ontbrak hun aan een manier om elkaar te bereiken — en aan een reden om elkaar te vertrouwen als dat lukte.",
            ar: "ومرةً بعد مرة كنت أرى الأمر نفسه: في جهةٍ مصنعٌ يستطيع أن يورّد بالضبط ما يحتاج إليه مشترٍ أوروبي، وفي الجهة الأخرى مشترٍ لن يجده أبداً. لم تكن القدرة تنقص أيّاً من الطرفين، بل كان ينقصهما طريقٌ يصل به أحدهما إلى الآخر — وسببٌ ليثق كلٌّ منهما بالآخر حين يلتقيان.",
          },
          {
            en: "Over the years I found myself making those introductions informally, because I knew both sides and both sides trusted me. DUKAAT is what happens when you stop doing that as a favour and start doing it properly. I am not a consultant. I ship goods. I deal with customs, certificates, delays, and buyers who change their minds. That is exactly why I know what our members actually need.",
            nl: "In de loop der jaren merkte ik dat ik die introducties informeel deed, omdat ik beide kanten kende en beide kanten mij vertrouwden. DUKAAT is wat er gebeurt wanneer dat geen vriendendienst meer is, maar werk dat wordt gedaan zoals het hoort. Ik ben geen consultant. Ik verscheep goederen. Ik heb te maken met douane, certificaten, vertragingen en kopers die van gedachten veranderen. Juist daarom weet ik wat onze leden werkelijk nodig hebben.",
            ar: "على مرّ السنين وجدت نفسي أقوم بتلك التعريفات بصورة غير رسمية، لأنني كنت أعرف الطرفين، وكان الطرفان يثقان بي. وDUKAAT هو ما يحدث حين تتوقف عن فعل ذلك مجاملةً وتبدأ بفعله كما ينبغي. لست مستشاراً؛ أنا أشحن البضائع. أتعامل مع الجمارك والشهادات والتأخير، ومع مشترين يغيّرون رأيهم. ولهذا بالتحديد أعرف ما يحتاج إليه أعضاؤنا فعلاً.",
          },
        ],
        by: { en: "[Founder 1 — trader]", nl: "[Oprichter 1 — handelaar]", ar: "[المؤسس الأول — التاجر]" },
        role: { en: "Founder · Trader", nl: "Oprichter · Handelaar", ar: "مؤسس · تاجر" },
      },
      {
        kind: "quote",
        photo: "founders-desk",
        text: [
          {
            en: "A good introduction fails on the paperwork more often than on the people. Two companies can like each other, agree on a price and still lose the deal to a question nobody asked in time: which entity signs, under which law, and who carries the tax and customs cost when the goods cross the border.",
            nl: "Een goede introductie strandt vaker op het papierwerk dan op de mensen. Twee bedrijven kunnen elkaar mogen, het eens worden over de prijs en de deal toch verliezen op een vraag die niemand op tijd stelde: welke entiteit tekent, onder welk recht, en wie de belasting- en douanekosten draagt als de goederen de grens overgaan.",
            ar: "التعريف الجيد يفشل بسبب الأوراق أكثر مما يفشل بسبب الأشخاص. قد تتفاهم شركتان وتتفقان على السعر، ثم تخسران الصفقة بسبب سؤال لم يطرحه أحد في وقته: أيّ كيان يوقّع، وبموجب أيّ قانون، ومَن يتحمّل الكلفة الضريبية والجمركية حين تعبر البضائع الحدود.",
          },
          {
            en: "My background is Dutch fiscal law, and my role at DUKAAT is an advisory one. I bring practical experience with contracts, tax and customs to the table, so that the right questions are asked in time: what the contract actually says, where the tax and customs questions lie, whether the payment terms are clear before anything ships, and whether the other party is who they say they are.",
            nl: "Mijn achtergrond is het Nederlandse fiscale recht, en mijn rol bij DUKAAT is adviserend. Ik breng praktijkervaring met contracten, belastingen en douane mee aan tafel, zodat de juiste vragen op tijd worden gesteld: wat er werkelijk in het contract staat, waar de fiscale en douanevragen liggen, of de betalingscondities helder zijn voordat er iets wordt verscheept, en of de tegenpartij is wie zij zegt te zijn.",
            ar: "خلفيتي القانون الضريبي الهولندي، ودوري في DUKAAT استشاري. أحمل إلى الطاولة خبرةً عملية في العقود والضرائب والجمارك، كي تُطرح الأسئلة الصحيحة في وقتها: ماذا يقول العقد فعلاً، وأين تكمن المسائل الضريبية والجمركية، وهل شروط الدفع واضحة قبل أن يُشحن أي شيء، وهل الطرف الآخر هو فعلاً مَن يقول إنه هو.",
          },
          {
            en: "That experience helps members see a deal more clearly. It is advice, not a guarantee, and it does not replace a member’s own advisers — the decision and the responsibility stay with the member. What it does is make the handshake worth something.",
            nl: "Die ervaring helpt leden een deal helderder te zien. Het is advies, geen garantie, en het vervangt de eigen adviseurs van een lid niet — de beslissing en de verantwoordelijkheid blijven bij het lid. Wat het wel doet: een handdruk waarde geven.",
            ar: "تساعد هذه الخبرة الأعضاء على رؤية الصفقة بوضوح أكبر. إنها مشورة لا ضمان، ولا تغني العضو عن مستشاريه — فالقرار يبقى بيده، والمسؤولية على عاتقه. أما ما تفعله فهو أن تجعل للمصافحة قيمة.",
          },
        ],
        by: { en: "[Founder 2 — fiscal law]", nl: "[Oprichter 2 — fiscaal recht]", ar: "[المؤسس الثاني — القانون الضريبي]" },
        role: { en: "Founder · Fiscal law", nl: "Oprichter · Fiscaal recht", ar: "مؤسس · القانون الضريبي" },
      },
      {
        kind: "facts",
        label: { en: "Where we sit", nl: "Waar wij zitten", ar: "أين نحن" },
        heading: { en: "Next to *Rotterdam.*", nl: "Naast *Rotterdam.*", ar: "بجوار *روتردام.*" },
        intro: {
          en: "We sit next to Rotterdam, Europe’s largest port: the gateway through which goods enter Europe is our neighbourhood. Meetings take place by appointment, in the language you prefer.",
          nl: "Wij zitten naast Rotterdam, de grootste haven van Europa: de toegangspoort waardoor goederen Europa binnenkomen is onze omgeving. Gesprekken vinden plaats op afspraak, in de taal van uw voorkeur.",
          ar: "نجلس بجوار روتردام، أكبر موانئ أوروبا: البوابة التي تدخل منها البضائع إلى أوروبا هي حيّنا. وتُعقد اللقاءات بموعد مسبق، باللغة التي تفضّلها.",
        },
        items: [
          {
            term: { en: "Region", nl: "Regio", ar: "المنطقة" },
            value: {
              en: "Rotterdam area, next to Europe’s largest port",
              nl: "Regio Rotterdam, naast de grootste haven van Europa",
              ar: "منطقة روتردام، بجوار أكبر موانئ أوروبا",
            },
          },
          {
            term: { en: "Address", nl: "Adres", ar: "العنوان" },
            value: { en: "[Address], the Netherlands", nl: "[Adres], Nederland", ar: "[العنوان]، هولندا" },
          },
          {
            term: { en: "Meetings", nl: "Gesprekken", ar: "اللقاءات" },
            value: { en: "By appointment", nl: "Op afspraak", ar: "بموعد مسبق" },
          },
          {
            term: { en: "Languages", nl: "Talen", ar: "اللغات" },
            value: { en: "Arabic, Dutch, English", nl: "Arabisch, Nederlands, Engels", ar: "العربية، والهولندية، والإنجليزية" },
          },
          {
            term: { en: "Anno", nl: "Anno", ar: "منذ" },
            value: {
              en: "2018 — Stichting Nederlands–Arabische Handelskamer",
              nl: "2018 — Stichting Nederlands–Arabische Handelskamer",
              ar: "2018 — Stichting Nederlands–Arabische Handelskamer",
            },
          },
        ],
      },
      {
        kind: "next",
        heading: { en: "Put your need *on the table.*", nl: "Leg uw behoefte *op tafel.*", ar: "ضع حاجتك *على الطاولة.*" },
        body: {
          en: "The intake asks for your commercial need: what you offer, what you look for, in which market. Membership is by nomination or invitation; applications are reviewed the same way.",
          nl: "De intake vraagt naar uw commerciële behoefte: wat u aanbiedt, wat u zoekt, in welke markt. Lidmaatschap is op voordracht of uitnodiging; aanmeldingen worden op dezelfde manier beoordeeld.",
          ar: "تسألك الاستمارة عن حاجتك التجارية: ما تقدّمه، وما تبحث عنه، وفي أي سوق. والعضوية بالترشيح أو الدعوة، وتُراجَع طلبات الانضمام بالطريقة نفسها.",
        },
        links: [
          { href: "contact", label: { en: "Contact", nl: "Contact", ar: "تواصل" } },
          {
            href: "contact?intent=nominated#intake",
            label: { en: "I have been nominated", nl: "Ik ben voorgedragen", ar: "تمّت تزكيتي" },
          },
          { href: "how-we-work", label: { en: "How we work", nl: "Zo werken wij", ar: "كيف نعمل" } },
        ],
      },
    ],
  },
};
