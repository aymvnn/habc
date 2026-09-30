import type { PageSet } from "./types";

/**
 * About DUKAAT — source section 2 (2.1 who we are, 2.2 the story of the name, 2.3 vision, 2.4 mission, 2.5 goals).
 * AR verbatim from owntext/DUKAAT_محتوى كتابة الموقع حديد _AR.md; NL and EN verbatim from owntext/vertalingen/.
 * Editorial labels (Titel, Subtitel, Knoppen, Afsluitende zin, Afsluitende knop) are not published; the text they label is.
 */
export const about: PageSet = {
  about: {
    masthead: { variant: "band", photo: "about-hero" },
    headline: {
      en: "A space where relationships meet knowledge and opportunities",
      nl: "Een ruimte waar relaties samenkomen met kennis en kansen",
      ar: "مساحة تلتقي فيها العلاقات بالمعرفة والفرص",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "DUKAAT is a business club and platform that connects companies, entrepreneurs, investors, manufacturers, suppliers, buyers and experts between the Netherlands and the Arab world. We are building a community that helps its members get to know one another, exchange expertise, understand markets and develop opportunities for commercial and professional cooperation.",
          nl: "DUKAAT is een businessclub en -platform dat bedrijven, ondernemers, investeerders, fabrikanten, leveranciers, kopers en experts tussen Nederland en de Arabische wereld met elkaar verbindt. Wij bouwen een community die haar leden helpt elkaar te leren kennen, ervaringen uit te wisselen, markten te begrijpen en kansen voor commerciële en professionele samenwerking te ontwikkelen.",
          ar: "دوكات نادٍ ومنصة أعمال تربط الشركات وروّاد الأعمال والمستثمرين والمصنّعين والمورّدين والمشترين والخبراء بين هولندا والعالم العربي. نبني مجتمعًا يساعد أفراده على التعارف، وتبادل الخبرات، وفهم الأسواق، وتطوير فرص التعاون التجاري والمهني.",
        },
      },
      {
        kind: "prose",
        photo: "about-room",
        size: "half",
        side: "end",
        body: [
          {
            en: "You may be a company looking for a distributor in a new market, an importer in need of a suitable supplier, or the owner of a venture looking for a partner. Or you may be a professional looking to develop your expertise, or a student preparing for the start of your working life. At DUKAAT, we begin by understanding what you need and what you can offer, and then help you choose the right path.",
            nl: "Misschien bent u een bedrijf dat op een nieuwe markt een distributeur zoekt, een importeur die een geschikte leverancier nodig heeft, of een projecteigenaar die een partner zoekt. Of misschien bent u professional en wilt u uw expertise ontwikkelen, of bent u student en bereidt u zich voor op de start van uw loopbaan. Bij DUKAAT beginnen wij met het begrijpen van wat u nodig heeft en wat u kunt bieden, en daarna helpen wij u de passende route te kiezen.",
            ar: "قد تكون شركة تبحث عن موزّع في سوق جديد، أو مستوردًا يحتاج إلى مورّد مناسب، أو صاحب مشروع يبحث عن شريك. وقد تكون مهنيًا يريد تطوير خبرته، أو طالبًا يستعد لبدايته العملية. في دوكات، نبدأ بفهم ما تحتاجه وما تستطيع تقديمه، ثم نساعدك على اختيار المسار المناسب.",
          },
          {
            en: "The DUKAAT ecosystem brings together business connections, training, meetings, consultancy and the showcasing of products and opportunities. We believe that a good relationship grows when clarity comes together with knowledge and mutual interest, and that cooperation between the Netherlands and the Arab world holds value in both directions.",
            nl: "Het DUKAAT-ecosysteem combineert zakelijke verbindingen, training, ontmoetingen, advies en het presenteren van producten en kansen. Wij geloven dat een goede relatie groeit wanneer duidelijkheid samenkomt met kennis en wederzijds belang, en dat samenwerking tussen Nederland en de Arabische wereld waarde heeft in beide richtingen.",
            ar: "تجمع منظومة دوكات بين ربط الأعمال، والتدريب، واللقاءات، والاستشارات، وعرض المنتجات والفرص. نؤمن بأن العلاقة الجيدة تنمو حين يجتمع الوضوح مع المعرفة والمصلحة المتبادلة، وأن التعاون بين هولندا والعالم العربي يحمل قيمة في الاتجاهين.",
          },
        ],
      },
      {
        kind: "prose",
        photo: "about-coffee",
        size: "tall",
        side: "start",
        heading: { en: "Why DUKAAT?", nl: "Waarom DUKAAT?", ar: "لماذا دوكات؟" },
        body: [
          {
            en: "Because finding a company's name is only the beginning of the search. After that, you need to understand how well it fits, know what you are looking for, and know how to begin a useful conversation with it. DUKAAT helps you structure your needs, develop your knowledge and build relationships tied to a clear goal.",
            nl: "Omdat het vinden van een bedrijfsnaam pas het begin van de zoektocht is. Daarna moet u begrijpen in hoeverre dat bedrijf geschikt is, weten wat u zoekt en hoe u er een nuttig gesprek mee begint. DUKAAT helpt u uw behoefte te ordenen, uw kennis te ontwikkelen en relaties op te bouwen die gekoppeld zijn aan een duidelijk doel.",
            ar: "لأن الوصول إلى اسم شركة هو بداية البحث فقط. تحتاج بعدها إلى فهم مدى ملاءمتها، ومعرفة ما تبحث عنه، وطريقة بدء حوار مفيد معها. تساعدك دوكات على ترتيب احتياجك، وتطوير معرفتك، وبناء علاقات مرتبطة بهدف واضح.",
          },
        ],
      },
      {
        kind: "actions",
        links: [
          { href: "services", label: { en: "Discover our services", nl: "Ontdek onze diensten", ar: "اكتشف خدماتنا" } },
          { href: "membership", label: { en: "Learn about membership", nl: "Maak kennis met het lidmaatschap", ar: "تعرّف إلى العضوية" } },
        ],
      },
    ],
  },

  "about/name": {
    masthead: { variant: "portrait", photo: "story-tulip" },
    headline: {
      en: "From value that crosses markets to relationships that cross borders",
      nl: "Van waarde die markten oversteekt naar relaties die grenzen oversteken",
      ar: "من قيمة تعبر الأسواق إلى علاقات تعبر الحدود",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "The name DUKAAT draws its inspiration from the Dutch ducat and its trading heritage: a symbol we reinterpret today through the value of people, their knowledge and their relationships.",
          nl: "De naam DUKAAT ontleent zijn idee aan de Nederlandse dukaat en het handelserfgoed daarvan; een symbool dat wij vandaag opnieuw duiden vanuit de waarde van de mens, zijn kennis en zijn relaties.",
          ar: "يستلهم اسم دوكات فكرته من الدوكات الهولندي وإرثه التجاري؛ رمزٌ نعيد قراءته اليوم من خلال قيمة الإنسان ومعرفته وعلاقاته.",
        },
      },
      {
        kind: "prose",
        photo: "story-balance",
        size: "tall",
        side: "end",
        body: [
          {
            en: "Value may be expertise shared by a specialist, a product that finds its market, or an idea that meets someone who helps it grow. And it may begin with a meeting that brings together two people who were each looking for the other.",
            nl: "Waarde kan immers expertise zijn die een specialist deelt, een product dat zijn markt vindt, of een idee dat iemand ontmoet die het helpt groeien. En waarde kan beginnen met een ontmoeting die twee mensen samenbrengt die naar elkaar op zoek waren.",
            ar: "فالقيمة قد تكون خبرة يشاركها مختص، أو منتجًا يجد سوقه، أو فكرة تلتقي بمن يساعدها على النمو. وقد تبدأ بلقاء يجمع شخصين كان كل منهما يبحث عن الآخر.",
          },
          {
            en: "This is where the DUKAAT story comes from: a community that carries value from person to person, from company to company and from market to market. At its heart are three values: value, trust and leadership.",
            nl: "Hier komt het verhaal van DUKAAT vandaan: een community die waarde overbrengt van persoon tot persoon, van bedrijf tot bedrijf en van markt tot markt. In het hart ervan staan drie waarden: waarde, vertrouwen en leiderschap.",
            ar: "من هنا تأتي قصة دوكات: مجتمع يحمل القيمة من شخص إلى شخص، ومن شركة إلى شركة، ومن سوق إلى سوق. وفي قلبه ثلاث قيم: القيمة، والثقة، والقيادة.",
          },
        ],
      },
      { kind: "band", photo: "story-river" },
      {
        kind: "prose",
        heading: {
          en: "Every member carries the meaning of nobility",
          nl: "Ieder lid draagt de betekenis van nobelheid in zich",
          ar: "كل عضو يحمل معنى النُبل",
        },
        body: [
          {
            en: "In DUKAAT's culture, we use ‘the Duke’ as a symbol of noble conduct and responsible leadership: someone who keeps their word, respects others, shares their knowledge and opens a door to a new opportunity. It is a symbolic identity of belonging within the club, not a formal aristocratic title.",
            nl: "In de cultuur van DUKAAT gebruiken wij de ‘Duke’ als symbool voor nobel handelen en verantwoordelijk leiderschap: iemand die zijn woord houdt, anderen respecteert, zijn kennis deelt en een deur opent naar een nieuwe kans. Het is een symbolische identiteit van verbondenheid binnen de club, en geen officiële adellijke titel.",
            ar: "نستخدم «الدوق» في ثقافة دوكات رمزًا لنُبل التعامل والقيادة المسؤولة: شخص يحفظ كلمته، ويحترم الآخرين، ويشارك معرفته، ويفتح بابًا لفرصة جديدة. إنها هوية انتماء رمزية داخل النادي، وليست لقبًا أرستقراطيًا رسميًا.",
          },
        ],
      },
      {
        kind: "statement",
        text: {
          en: "At DUKAAT, a member's nobility shows in the mark they leave: knowledge they share, a pledge they keep and an opportunity they open.",
          nl: "Bij DUKAAT toont de nobelheid van een lid zich in zijn impact: kennis die hij deelt, een belofte die hij houdt en een kans die hij opent.",
          ar: "في دوكات، نُبل العضو يظهر في أثره: معرفة يشاركها، وعهد يحفظه، وفرصة يفتحها.",
        },
      },
      /* Extra kept by the owner ("laat beiden"): the blocks of the former page "about/story" (commit 2336702), after the source blocks. */
      {
        kind: "lead",
        text: {
          en: "DUKAAT takes its name from the Dutch gold ducat: a coin made for trade, whose worth a merchant knew the moment he saw it.",
          nl: "DUKAAT ontleent zijn naam aan de Nederlandse gouden dukaat: een munt gemaakt voor de handel, waarvan een koopman de waarde kende zodra hij hem zag.",
          ar: "يستمدّ DUKAAT اسمه من الدوقات الذهبي الهولندي: عملةٌ سُكّت للتجارة، كان التاجر يعرف قيمتها بمجرد أن يراها.",
        },
      },
      {
        kind: "register",
        cols: 2,
        label: { en: "The coin", nl: "De munt", ar: "العملة" },
        heading: { en: "A known *weight.*", nl: "Een bekend *gewicht.*", ar: "وزنٌ *معروف.*" },
        items: [
          {
            title: { en: "Trade coin since", nl: "Handelsmunt sinds", ar: "عملة تجارية منذ" },
            body: { en: "4 August 1586, under the Dutch Mint Act", nl: "4 augustus 1586, onder de Muntwet", ar: "4 أغسطس 1586، بموجب قانون السكّ الهولندي" },
          },
          {
            title: { en: "Weight", nl: "Gewicht", ar: "الوزن" },
            body: { en: "3.494 grams", nl: "3,494 gram", ar: "3.494 غرام" },
          },
          {
            title: { en: "Fineness", nl: "Gehalte", ar: "العيار" },
            body: { en: "983/1000 gold", nl: "983/1000 goud", ar: "ذهب بعيار 983/1000" },
          },
          {
            title: { en: "Struck today by", nl: "Vandaag geslagen door", ar: "تسكّه اليوم" },
            body: { en: "The Royal Dutch Mint, Utrecht", nl: "De Koninklijke Nederlandse Munt, Utrecht", ar: "دار السكّ الملكية الهولندية، أوتريخت" },
          },
          {
            title: { en: "Ottoman sultani", nl: "Ottomaanse sultani", ar: "السلطاني العثماني" },
            body: {
              en: "First struck 1477–78 under Mehmed II, on the ducat standard",
              nl: "Voor het eerst geslagen in 1477–78 onder Mehmed II, op de dukaatstandaard",
              ar: "سُكّ لأول مرة عام 1477–78 في عهد محمد الثاني، على معيار الدوقات",
            },
          },
          {
            title: { en: "Bunduqi", nl: "Bunduqi", ar: "البندقي" },
            body: {
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
        photo: "about-port",
        caption: {
          en: "The ducat carried value from market to market. DUKAAT carries it from person to person, company to company, market to market.",
          nl: "De dukaat bracht waarde van markt naar markt. DUKAAT brengt haar van mens tot mens, van bedrijf tot bedrijf, van markt tot markt.",
          ar: "حمل الدوقات القيمة من سوق إلى سوق. ويحملها DUKAAT من شخص إلى شخص، ومن شركة إلى شركة، ومن سوق إلى سوق.",
        },
      },
      {
        kind: "actions",
        heading: { en: "What the name *commits us to.*", nl: "Waartoe de naam ons *verplicht.*", ar: "ما يُلزمنا به *الاسم.*" },
        links: [
          { href: "about/vision", label: { en: "Vision, mission & values", nl: "Visie, missie & waarden", ar: "الرؤية والرسالة والقيم" } },
          { href: "about/why", label: { en: "Why DUKAAT", nl: "Waarom DUKAAT", ar: "لماذا DUKAAT" } },
        ],
      },
    ],
  },

  "about/vision": {
    masthead: { variant: "band", photo: "values-court" },
    headline: {
      en: "A business community that opens horizons for cooperation across borders",
      nl: "Een zakelijke community die perspectieven opent voor samenwerking over grenzen heen",
      ar: "مجتمع أعمال يفتح آفاق التعاون عبر الحدود",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "For DUKAAT to become a point of reference for business and knowledge between the Netherlands and the Arab world, and a community that people with ambition turn to when they are looking for a partner, a market, expertise or an opportunity to grow.",
          nl: "Dat DUKAAT een referentiepunt wordt voor zakendoen en kennis tussen Nederland en de Arabische wereld, en een community waartoe mensen met ambitie zich wenden wanneer zij op zoek zijn naar een partner, een markt, expertise of een kans om te groeien.",
          ar: "أن تصبح دوكات مرجعًا للأعمال والمعرفة بين هولندا والعالم العربي، ومجتمعًا يلجأ إليه أصحاب الطموح عندما يبحثون عن شريك، أو سوق، أو خبرة، أو فرصة للنمو.",
        },
      },
      {
        kind: "prose",
        photo: "why-hero",
        size: "half",
        side: "end",
        body: [
          {
            en: "We aspire to build long-term relationships that make cooperation between companies and individuals clearer and more effective, and that allow expertise, products and ideas to reach those who need them, with scope to extend this connection to Europe and other markets.",
            nl: "Wij streven ernaar langdurige relaties op te bouwen die de samenwerking tussen bedrijven en individuen duidelijker en effectiever maken, en waardoor expertise, producten en ideeën terecht kunnen komen bij wie ze nodig heeft, met de mogelijkheid om dit contact uit te breiden naar Europa en andere markten.",
            ar: "نطمح إلى بناء علاقات طويلة الأمد تجعل التعاون بين الشركات والأفراد أكثر وضوحًا وفاعلية، وتتيح للخبرات والمنتجات والأفكار أن تصل إلى من يحتاجها، مع قابلية توسيع هذا التواصل إلى أوروبا وأسواق أخرى.",
          },
        ],
      },
    ],
  },

  "about/mission": {
    masthead: { variant: "portrait", photo: "how-hero" },
    headline: {
      en: "Turning relationships into value and business opportunities",
      nl: "Relaties omzetten in waarde en zakelijke kansen",
      ar: "تحويل العلاقات إلى قيمة وفرص أعمال",
    },
    blocks: [
      {
        kind: "lead",
        text: {
          en: "We connect companies and entrepreneurs with knowledge, partners and opportunities between the Netherlands and the Arab world, through guided professional introductions, practical training, specialised events, and information and services that support taking the next step.",
          nl: "Wij verbinden bedrijven en ondernemers met kennis, partners en kansen tussen Nederland en de Arabische wereld, door middel van gerichte professionele kennismaking, praktijkgerichte training, gespecialiseerde evenementen, en informatie en diensten die ondersteunen bij het zetten van de volgende stap.",
          ar: "نصل الشركات وروّاد الأعمال بالمعرفة والشركاء والفرص بين هولندا والعالم العربي، من خلال التعارف المهني الموجّه، والتدريب التطبيقي، والفعاليات المتخصصة، والمعلومات والخدمات التي تدعم اتخاذ الخطوة التالية.",
        },
      },
      {
        kind: "prose",
        body: [
          {
            en: "We start from a clear need and help turn it into a structured search, and then into dialogue and cooperation that can be built upon.",
            nl: "Wij beginnen bij een duidelijke behoefte en helpen die om te zetten in een gestructureerde zoektocht, en vervolgens in een gesprek en samenwerking waarop kan worden voortgebouwd.",
            ar: "نبدأ من حاجة واضحة، ونساعد على تحويلها إلى بحث منظم، ثم حوار وتعاون يمكن البناء عليه.",
          },
        ],
      },
    ],
  },

  /* 2.5 has no title line: the masthead shows the page title and blurb from content/site.*.ts */
  "about/goals": {
    masthead: { variant: "plate", photo: "values-value" },
    blocks: [
      {
        kind: "register",
        photo: "values-trust",
        items: [
          {
            title: { en: "Connecting the business community", nl: "De zakelijke community verbinden", ar: "ربط مجتمع الأعمال" },
            body: {
              en: "bringing companies, entrepreneurs and experts together around shared needs and interests.",
              nl: "bedrijven, ondernemers en experts samenbrengen rond gemeenschappelijke behoeften en belangen.",
              ar: "جمع الشركات وروّاد الأعمال والخبراء حول احتياجات ومصالح مشتركة.",
            },
          },
          {
            title: { en: "Exchanging knowledge", nl: "Kennis uitwisselen", ar: "تبادل المعرفة" },
            body: {
              en: "offering courses, workshops and meetings that turn expertise into practical application.",
              nl: "cursussen, workshops en ontmoetingen aanbieden die expertise vertalen naar praktische toepassing.",
              ar: "تقديم دورات وورش ولقاءات تنقل الخبرة إلى تطبيق عملي.",
            },
          },
          {
            title: { en: "Facilitating market entry", nl: "Markttoetreding vergemakkelijken", ar: "تسهيل دخول الأسواق" },
            body: {
              en: "helping companies understand the target market and prepare to engage with it.",
              nl: "bedrijven helpen de doelmarkt te begrijpen en zich voor te bereiden op zakendoen op die markt.",
              ar: "مساعدة الشركات على فهم السوق المستهدف والاستعداد للتعامل معه.",
            },
          },
          {
            title: { en: "Growing trade", nl: "Handel laten groeien", ar: "تنمية التجارة" },
            body: {
              en: "supporting introductions in supply, purchasing, distribution, import, export and manufacturing.",
              nl: "kennismakingen ondersteunen op het gebied van levering, inkoop, distributie, import, export en productie.",
              ar: "دعم التعارف في التوريد والشراء والتوزيع والاستيراد والتصدير والتصنيع.",
            },
          },
          {
            title: { en: "Showcasing products and opportunities", nl: "Producten en kansen zichtbaar maken", ar: "إبراز المنتجات والفرص" },
            body: {
              en: "providing an organised space for trade offers, purchase requests, clearance stock and equipment.",
              nl: "een gestructureerde ruimte bieden voor commerciële aanbiedingen, inkoopaanvragen, restpartijen en materieel.",
              ar: "توفير مساحة منظمة للعروض التجارية وطلبات الشراء والتصفيات والمعدات.",
            },
          },
          {
            title: { en: "Supporting investment connections", nl: "Contact rond investeringen ondersteunen", ar: "دعم التواصل الاستثماري" },
            body: {
              en: "enabling introductions between project owners and those interested in investing.",
              nl: "kennismaking mogelijk maken tussen projecteigenaren en mensen die geïnteresseerd zijn in investeren.",
              ar: "إتاحة التعارف بين أصحاب المشاريع والمهتمين بالاستثمار.",
            },
          },
          {
            title: { en: "Developing professional skills", nl: "Professionele vaardigheden ontwikkelen", ar: "تطوير المهارات المهنية" },
            body: {
              en: "serving professionals, university students and those about to enter the job market.",
              nl: "van dienst zijn aan professionals, universiteitsstudenten en mensen die op het punt staan de arbeidsmarkt te betreden.",
              ar: "خدمة المهنيين وطلاب الجامعات والمقبلين على سوق العمل.",
            },
          },
          {
            title: { en: "Strengthening trust", nl: "Vertrouwen versterken", ar: "تعزيز الثقة" },
            body: {
              en: "encouraging clear information and respect for commitments, privacy and mutual interests.",
              nl: "duidelijke informatie en respect voor toezeggingen, privacy en wederzijdse belangen stimuleren.",
              ar: "تشجيع المعلومات الواضحة واحترام الالتزامات والخصوصية والمصالح المتبادلة.",
            },
          },
          {
            title: { en: "Organising purposeful meetings", nl: "Ontmoetingen met een doel organiseren", ar: "تنظيم لقاءات ذات هدف" },
            body: {
              en: "linking workshops, exhibitions and delegations to the needs of participants.",
              nl: "workshops, beurzen en delegaties koppelen aan de behoeften van de deelnemers.",
              ar: "ربط ورش العمل والمعارض والوفود باحتياجات المشاركين.",
            },
          },
        ],
      },
      {
        kind: "actions",
        links: [
          {
            href: "contact#contact-form",
            label: { en: "Tell us what you want to achieve", nl: "Vertel ons wat u wilt bereiken", ar: "أخبرنا بما تريد تحقيقه" },
          },
        ],
      },
    ],
  },

  /* Extra page kept by the owner: "about/why" from commit 2336702. */
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
      // the three claims of the homepage "Why DUKAAT" (extra x-8, kept by the owner; claim I reworded per the owner's note)
      {
        kind: "register",
        label: { en: "Why DUKAAT", nl: "Waarom DUKAAT", ar: "لماذا DUKAAT" },
        heading: { en: "Three things are *ours alone.*", nl: "Drie dingen zijn *alleen van ons.*", ar: "ثلاثة أشياء *لنا وحدنا.*" },
        intro: { en: "A search engine gives you names. It does not build the relationship.", nl: "Een zoekmachine geeft u namen. Een relatie bouwt zij niet.", ar: "محرك البحث يعطيك أسماء. لكنه لا يبني العلاقة." },
        numbered: true,
        items: [
          { title: { en: "We are *entrepreneurs,* not consultants.", nl: "Wij zijn *ondernemers,* geen consultants.", ar: "نحن *روّاد أعمال،* لا مستشارون." }, body: { en: "DUKAAT was founded by an entrepreneur who imports, packs and ships goods himself, and who knows trade between both sides from the inside.", nl: "DUKAAT is opgericht door een ondernemer die zelf importeert, verpakt en verscheept, en die de handel tussen beide kanten van binnenuit kent.", ar: "أسّس DUKAAT رائدُ أعمال يستورد ويعبّئ ويشحن البضائع بنفسه، ويعرف التجارة بين الضفتين من الداخل." } },
          { title: { en: "We sit next to *Rotterdam,* Europe’s largest port.", nl: "Wij zitten naast *Rotterdam,* de grootste haven van Europa.", ar: "نجلس بجوار *روتردام،* أكبر موانئ أوروبا." }, body: { en: "The gateway through which goods enter Europe is our neighbourhood, not a reference on a map. One hour from the market our members want to reach.", nl: "De toegangspoort waardoor goederen Europa binnenkomen is onze omgeving, geen stip op de kaart. Eén uur van de markt die onze leden willen bereiken.", ar: "البوابة التي تدخل منها البضائع إلى أوروبا هي حيّنا، لا نقطة على خريطة. على بُعد ساعة من السوق التي يريد أعضاؤنا الوصول إليها." } },
          { title: { en: "We are trusted on *both sides,* in both languages.", nl: "Wij worden aan *beide kanten* vertrouwd, in beide talen.", ar: "موثوقون على *الضفتين،* وباللغتين." }, body: { en: "Our network did not start with a database. It started with people who already knew us — in Arabic and in Dutch.", nl: "Ons netwerk begon niet met een database. Het begon met mensen die ons al kenden — in het Arabisch en in het Nederlands.", ar: "لم تبدأ شبكتنا بقاعدة بيانات. بدأت بأشخاص يعرفوننا أصلاً — بالعربية وبالهولندية." } },
        ],
      },
      { kind: "notice", body: [{ en: "Members’ current requests circulate inside the network, verified and matched by a person. They are not published on this page.", nl: "De actuele aanvragen van leden circuleren binnen het netwerk, geverifieerd en gekoppeld door een mens. Zij worden niet op deze pagina gepubliceerd.", ar: "طلبات الأعضاء الحالية تُتداول داخل الشبكة، يتحقق منها إنسان ويطابقها. ولا تُنشر على هذه الصفحة." }] },
      // "Our model" (technology and human connection) left out: the owner, 30 Sep 2026 — no mention of technology or AI for now
      {
        kind: "statement",
        text: {
          en: "The quality of a relationship matters more than the number of names, and the result more than the number of events.",
          nl: "De kwaliteit van een relatie weegt zwaarder dan het aantal namen, en het resultaat zwaarder dan het aantal evenementen.",
          ar: "جودة العلاقة أهم من عدد الأسماء، والنتيجة أهم من عدد الفعاليات.",
        },
      },
    ],
  },

  /* Extra page kept by the owner: "about/founders" from commit 2336702. */
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
      {
        kind: "prose",
        photo: "founders-store",
        body: [
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
          {
            en: "— [Founder 1 — entrepreneur], Founder · Entrepreneur",
            nl: "— [Oprichter 1 — ondernemer], Oprichter · Ondernemer",
            ar: "— [المؤسس الأول — رائد الأعمال]، مؤسس · رائد أعمال",
          },
        ],
      },
      {
        kind: "prose",
        photo: "founders-desk",
        body: [
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
          {
            en: "— [Founder 2 — fiscal law], Founder · Fiscal law",
            nl: "— [Oprichter 2 — fiscaal recht], Oprichter · Fiscaal recht",
            ar: "— [المؤسس الثاني — القانون الضريبي]، مؤسس · القانون الضريبي",
          },
        ],
      },
      {
        kind: "register",
        cols: 2,
        label: { en: "Where we sit", nl: "Waar wij zitten", ar: "أين نحن" },
        heading: { en: "Next to *Rotterdam.*", nl: "Naast *Rotterdam.*", ar: "بجوار *روتردام.*" },
        intro: {
          en: "We sit next to Rotterdam, Europe’s largest port: the gateway through which goods enter Europe is our neighbourhood. Meetings take place by appointment, in the language you prefer.",
          nl: "Wij zitten naast Rotterdam, de grootste haven van Europa: de toegangspoort waardoor goederen Europa binnenkomen is onze omgeving. Gesprekken vinden plaats op afspraak, in de taal van uw voorkeur.",
          ar: "نجلس بجوار روتردام، أكبر موانئ أوروبا: البوابة التي تدخل منها البضائع إلى أوروبا هي حيّنا. وتُعقد اللقاءات بموعد مسبق، باللغة التي تفضّلها.",
        },
        items: [
          {
            title: { en: "Region", nl: "Regio", ar: "المنطقة" },
            body: {
              en: "Rotterdam area, next to Europe’s largest port",
              nl: "Regio Rotterdam, naast de grootste haven van Europa",
              ar: "منطقة روتردام، بجوار أكبر موانئ أوروبا",
            },
          },
          {
            title: { en: "Address", nl: "Adres", ar: "العنوان" },
            body: { en: "[Address], the Netherlands", nl: "[Adres], Nederland", ar: "[العنوان]، هولندا" },
          },
          {
            title: { en: "Meetings", nl: "Gesprekken", ar: "اللقاءات" },
            body: { en: "By appointment", nl: "Op afspraak", ar: "بموعد مسبق" },
          },
          {
            title: { en: "Languages", nl: "Talen", ar: "اللغات" },
            body: { en: "Arabic, Dutch, English", nl: "Arabisch, Nederlands, Engels", ar: "العربية، والهولندية، والإنجليزية" },
          },
          {
            title: { en: "Anno", nl: "Anno", ar: "منذ" },
            body: {
              en: "2018 — Stichting Nederlands–Arabische Handelskamer",
              nl: "2018 — Stichting Nederlands–Arabische Handelskamer",
              ar: "2018 — Stichting Nederlands–Arabische Handelskamer",
            },
          },
        ],
      },
      {
        kind: "actions",
        heading: { en: "Put your need *on the table.*", nl: "Leg uw behoefte *op tafel.*", ar: "ضع حاجتك *على الطاولة.*" },
        body: {
          en: "The intake asks for your commercial need: what you offer, what you look for, in which market. Membership is by nomination or invitation; applications are reviewed the same way.",
          nl: "De intake vraagt naar uw commerciële behoefte: wat u aanbiedt, wat u zoekt, in welke markt. Lidmaatschap is op voordracht of uitnodiging; aanmeldingen worden op dezelfde manier beoordeeld.",
          ar: "تسألك الاستمارة عن حاجتك التجارية: ما تقدّمه، وما تبحث عنه، وفي أي سوق. والعضوية بالترشيح أو الدعوة، وتُراجَع طلبات الانضمام بالطريقة نفسها.",
        },
        links: [
          { href: "contact", label: { en: "Contact", nl: "Contact", ar: "تواصل" } },
          {
            href: "contact?subject=nominated#contact-form",
            label: { en: "I have been nominated", nl: "Ik ben voorgedragen", ar: "تمّت تزكيتي" },
          },
        ],
      },
    ],
  },
};
