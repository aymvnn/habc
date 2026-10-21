import type { PageSet } from "./types";

/**
 * Legal — terms & conditions, disclaimer, publication of member data.
 * Drafts under Dutch law; the Dutch text prevails. Have them reviewed by a Dutch lawyer before publication.
 * Verbatim lines: the legal line (footer.legal), the investment notice (contact.investNotice), the charging model
 * (membership.charge) and the verification disclaimer (EN verbatim, NL/AR faithful).
 * Owner's decisions of 29 Sep 2026: seat given as the Rotterdam region; admission by nomination or invitation, applications
 * possible; no statutory interest; no remedy "if we fall short"; fees stated clearly, arrangements kept open.
 * Name, address and KvK number as in the Handelsregister (KvK 73318205, 21 Oct 2026); no VAT number on the site.
 * Filled in by the owner on 22 Oct 2026: notice periods (termination one month, rate change two months, force majeure two
 * months, change of terms one month), correction or removal of member data within one month, e-mail contact@dukaatbusinessclub.com
 * (content/contact-details.ts). Liability: no liability is accepted and there is no damage cap or claims period ("never
 * acknowledge liability, remove everything about damage claims"); the exclusion applies as far as mandatory law permits.
 * Articles are numbered by the legal block in order (1, 2, 3 …); cross-references below rely on that order.
 */
export const legalTerms: PageSet = {
  "legal/terms": {
    masthead: { variant: "plate", photo: "leg-terms" },
    blocks: [
      {
        kind: "legal",
        updated: { en: "Version: September 2026", nl: "Versie: september 2026", ar: "الإصدار: سبتمبر 2026" },
        intro: [
          {
            en: "These terms govern membership of DUKAAT and the project services we provide. They form part of every membership agreement and every written quotation, and are provided with them. Read them together with our Privacy statement and our terms for the publication of member data, both published on this website.",
            nl: "Deze voorwaarden zijn van toepassing op het lidmaatschap van DUKAAT en op de projectdiensten die wij verlenen. Zij maken deel uit van elke lidmaatschapsovereenkomst en elke schriftelijke offerte en worden daarbij verstrekt. Lees ze samen met onze privacyverklaring en onze voorwaarden voor de publicatie van ledengegevens, die beide op deze website staan.",
            ar: "تنظّم هذه الشروط العضوية في DUKAAT وخدمات المشاريع التي نقدّمها. وهي جزء من كل اتفاقية عضوية ومن كل عرض أسعار مكتوب، وتُرفَق بكلٍّ منهما. ويُرجى قراءتها مع بيان الخصوصية وشروط نشر بيانات الأعضاء، وكلاهما منشور على هذا الموقع.",
          },
        ],
        articles: [
          {
            title: { en: "Definitions", nl: "Definities", ar: "التعريفات" },
            body: [
              {
                en: "In these terms, the words below have the following meaning.",
                nl: "In deze voorwaarden hebben de onderstaande begrippen de volgende betekenis.",
                ar: "يكون للكلمات والعبارات الآتية، حيثما وردت في هذه الشروط، المعاني المبيّنة إزاء كلٍّ منها.",
              },
              {
                en: "DUKAAT, we, us: Stichting Nederlands-Arabische Handelskamer, trading as DUKAAT, as described in article 2.",
                nl: "DUKAAT, wij, ons: Stichting Nederlands-Arabische Handelskamer, handelend onder de naam DUKAAT, zoals omschreven in artikel 2.",
                ar: "DUKAAT أو «نحن»: Stichting Nederlands-Arabische Handelskamer، التي تمارس نشاطها تحت الاسم التجاري DUKAAT، على النحو المبيّن في المادة 2.",
              },
              {
                en: "Member, you: the company, or the person acting in the course of a business or profession, with whom we have concluded a membership agreement. Where these terms refer to members, they also cover a client to whom we provide project services without membership.",
                nl: "Lid, u: de onderneming, of de persoon die handelt in de uitoefening van een beroep of bedrijf, met wie wij een lidmaatschapsovereenkomst hebben gesloten. Waar deze voorwaarden over leden spreken, gelden zij ook voor een opdrachtgever aan wie wij projectdiensten verlenen zonder lidmaatschap.",
                ar: "العضو أو «أنت»: كل من أبرمنا معه اتفاقية عضوية، سواء أكان شركةً أم شخصاً يتصرّف في إطار نشاط تجاري أو مهني. وحيثما تشير هذه الشروط إلى الأعضاء، فإنها تشمل كذلك العميل الذي نقدّم له خدمات المشاريع دون أن يكون عضواً.",
              },
              {
                en: "Membership agreement: the written agreement by which we admit a member, recording at least the level, the start date of the membership year and the subscription.",
                nl: "Lidmaatschapsovereenkomst: de schriftelijke overeenkomst waarmee wij een lid toelaten, waarin ten minste het niveau, de ingangsdatum van het lidmaatschapsjaar en het abonnement zijn vastgelegd.",
                ar: "اتفاقية العضوية: الاتفاقية المكتوبة التي نقبل بموجبها العضو، ويُثبَّت فيها، على الأقل، مستوى العضوية، وتاريخ بدء سنة العضوية، والاشتراك.",
              },
              {
                en: "Membership year: the period of twelve months beginning on the start date recorded in the membership agreement, and each following period of twelve months.",
                nl: "Lidmaatschapsjaar: de periode van twaalf maanden die ingaat op de in de lidmaatschapsovereenkomst vastgelegde datum, en elke daaropvolgende periode van twaalf maanden.",
                ar: "سنة العضوية: مدة اثني عشر شهراً تبدأ من تاريخ البدء المثبت في اتفاقية العضوية، وكل مدة تالية من اثني عشر شهراً.",
              },
              {
                en: "Level: Member, Professional or Executive.",
                nl: "Niveau: Member, Professional of Executive.",
                ar: "المستوى: Member أو Professional أو Executive.",
              },
              {
                en: "Project services: work outside the subscription, such as market entry, supplier search and representation, quoted per engagement in writing.",
                nl: "Projectdiensten: werkzaamheden buiten het abonnement, zoals markttoetreding, leverancierszoektocht en vertegenwoordiging, die per opdracht schriftelijk worden geoffreerd.",
                ar: "خدمات المشاريع: الأعمال التي لا يشملها الاشتراك، كدخول الأسواق والبحث عن مورّدين والتمثيل، وتُعرض أسعارها كتابةً لكل مهمة على حدة.",
              },
              {
                en: "Introduction (qualified introduction): putting a member in contact with another member or a third party whom we have checked and whose interest we have tested, with a written brief to both sides.",
                nl: "Introductie (gekwalificeerde introductie): het in contact brengen van een lid met een ander lid of een derde die wij hebben gecontroleerd en van wie wij de interesse hebben getoetst, met een schriftelijke briefing aan beide kanten.",
                ar: "التعريف (التعريف المؤهَّل): الربط بين العضو وعضو آخر أو طرف ثالث تحقّقنا منه واختبرنا اهتمامه، مع ملخّص مكتوب يُرسَل إلى الطرفين.",
              },
              {
                en: "The club: the members, the persons and organisations who work with us, such as ambassadors, partners and specialists, and every channel in which information is shared among them, including the member directory, DUKAAT Market, events and meetings.",
                nl: "De club: de leden, de personen en organisaties die met ons samenwerken, zoals ambassadeurs, partners en specialisten, en elk kanaal waarin tussen hen informatie wordt gedeeld, waaronder het Ledenregister, DUKAAT Market, evenementen en bijeenkomsten.",
                ar: "النادي: الأعضاء، والأشخاص والجهات الذين يعملون معنا كالسفراء والشركاء والمختصين، وكل قناة تُتداول فيها المعلومات بينهم، بما في ذلك دليل الأعضاء وسوق DUKAAT والفعاليات واللقاءات.",
              },
              {
                en: "In writing: on paper or by e-mail.",
                nl: "Schriftelijk: op papier of per e-mail.",
                ar: "كتابةً: على الورق أو بالبريد الإلكتروني.",
              },
            ],
          },
          {
            title: { en: "DUKAAT and these terms", nl: "DUKAAT en deze voorwaarden", ar: "DUKAAT وهذه الشروط" },
            body: [
              {
                en: "DUKAAT is the trading name of Stichting Nederlands-Arabische Handelskamer, a foundation under Dutch law established in 2018 and based in the Rotterdam region, the Netherlands. Chamber of Commerce (KvK) number 73318205, address Kelvinring 11, 2952 BG Alblasserdam.",
                nl: "DUKAAT is de handelsnaam van Stichting Nederlands-Arabische Handelskamer, een stichting naar Nederlands recht, opgericht in 2018 en gevestigd in de regio Rotterdam. KvK-nummer 73318205, adres Kelvinring 11, 2952 BG Alblasserdam.",
                ar: "DUKAAT هو الاسم التجاري لـ Stichting Nederlands-Arabische Handelskamer، وهي مؤسسة (Stichting) خاضعة للقانون الهولندي، تأسست عام 2018، ومقرّها في منطقة روتردام بهولندا. رقم السجل لدى غرفة التجارة الهولندية (KvK): 73318205؛ العنوان: Kelvinring 11, 2952 BG Alblasserdam.",
              },
              {
                en: "DUKAAT is a private business club. It is not a public body, does not represent any government and does not issue official documents. The name of the foundation reflects the purpose for which it was established; it confers no public-law status.",
                nl: "DUKAAT is een besloten businessclub. Zij is geen publiekrechtelijk orgaan, vertegenwoordigt geen overheid en geeft geen officiële documenten af. De naam van de stichting weerspiegelt het doel waarvoor zij is opgericht; daaraan is geen publiekrechtelijke status verbonden.",
                ar: "DUKAAT نادٍ خاص للأعمال، وليس هيئةً عامة، ولا يمثّل أي حكومة، ولا يُصدر وثائق رسمية. ويعكس اسم المؤسسة الغرض الذي أُسّست من أجله، ولا يجعل منها شخصاً من أشخاص القانون العام.",
              },
              {
                en: "Membership is a contract for the services of the club. A foundation has no members in the sense of Book 2 of the Dutch Civil Code; membership therefore gives no rights in the governance or the assets of the foundation.",
                nl: "Het lidmaatschap is een overeenkomst tot het verlenen van de diensten van de club. Een stichting heeft geen leden in de zin van Boek 2 van het Burgerlijk Wetboek; het lidmaatschap geeft daarom geen rechten in het bestuur of het vermogen van de stichting.",
                ar: "العضوية عقدٌ لتقديم خدمات النادي. ولا يكون للمؤسسة من نوع Stichting أعضاء بالمعنى المقصود في الكتاب الثاني من القانون المدني الهولندي؛ ولذلك لا ترتّب العضوية أي حقوق في إدارة المؤسسة أو في أموالها.",
              },
              {
                en: "These terms form part of every membership agreement and every quotation for project services. General terms of a member are expressly rejected. Where the membership agreement or a written quotation departs from these terms, the membership agreement or the quotation prevails.",
                nl: "Deze voorwaarden maken deel uit van elke lidmaatschapsovereenkomst en elke offerte voor projectdiensten. De toepasselijkheid van algemene voorwaarden van een lid wordt uitdrukkelijk van de hand gewezen. Wijkt de lidmaatschapsovereenkomst of een schriftelijke offerte af van deze voorwaarden, dan gaat de lidmaatschapsovereenkomst of de offerte voor.",
                ar: "تُعدّ هذه الشروط جزءاً من كل اتفاقية عضوية ومن كل عرض أسعار لخدمات المشاريع. ونرفض صراحةً سريان أي شروط عامة يعتمدها العضو. وإذا تضمّنت اتفاقيةُ العضوية أو عرضُ أسعار مكتوب ما يخالف هذه الشروط، فالعبرة باتفاقية العضوية أو بعرض الأسعار.",
              },
            ],
          },
          {
            title: { en: "Admission", nl: "Toelating", ar: "القبول" },
            body: [
              {
                en: "Membership is by nomination or invitation: a member puts forward the name of a company, or we invite a company ourselves. A company may also apply. Membership is open only to companies and to persons acting in the course of a business or profession; we do not conclude membership agreements with consumers.",
                nl: "Het lidmaatschap is op voordracht of uitnodiging: een lid draagt een onderneming voor, of wij nodigen zelf een onderneming uit. Een onderneming kan zich ook aanmelden. Het lidmaatschap staat alleen open voor ondernemingen en voor personen die handelen in de uitoefening van een beroep of bedrijf; met consumenten sluiten wij geen lidmaatschapsovereenkomst.",
                ar: "العضوية بالترشيح أو الدعوة: يرشّح أحد الأعضاء شركةً ما، أو ندعو نحن شركةً ما. ويجوز للشركة أيضاً أن تتقدّم بطلب انضمام. وتقتصر العضوية على الشركات وعلى الأشخاص الذين يتصرّفون في إطار نشاط تجاري أو مهني؛ ولا نبرم اتفاقيات عضوية مع المستهلكين.",
              },
              {
                en: "Before admission we verify the company: company registration, activity and references, and any further information or documents we reasonably ask for, including information on the persons who own or control the company.",
                nl: "Vóór toelating verifiëren wij de onderneming: inschrijving in het handelsregister, activiteit en referenties, en alle verdere informatie of documenten waarom wij redelijkerwijs vragen, waaronder gegevens over de personen die de onderneming bezitten of er zeggenschap over hebben.",
                ar: "ونتحقّق قبل القبول من الشركة: قيدها في السجل التجاري، ونشاطها، ومراجعها، وأي معلومات أو مستندات إضافية نطلبها في حدود المعقول، بما في ذلك المعلومات المتعلقة بالأشخاص الذين يملكون الشركة أو يسيطرون عليها.",
              },
              {
                en: "Admission is at our discretion. Neither a nomination nor an application gives a right to admission, and we are not obliged to give reasons for our decision. We inform the company of our decision in writing within 10 working days after we have received the information we asked for.",
                nl: "Over toelating beslissen wij naar eigen oordeel. Een voordracht of aanmelding geeft geen recht op toelating, en wij zijn niet verplicht onze beslissing te motiveren. Wij delen de onderneming onze beslissing schriftelijk mee binnen 10 werkdagen nadat wij de gevraagde informatie hebben ontvangen.",
                ar: "القبول متروك لتقديرنا. ولا يمنح الترشيح ولا طلب الانضمام حقاً في القبول، ولسنا ملزمين بتعليل قرارنا. ونُبلغ الشركة بقرارنا كتابةً خلال 10 أيام عمل من تاريخ تسلّمنا المعلومات التي طلبناها.",
              },
              {
                en: "The membership agreement is concluded when we have confirmed admission in writing and the member has signed the membership agreement. On admission we issue a membership number and a membership card.",
                nl: "De lidmaatschapsovereenkomst komt tot stand wanneer wij de toelating schriftelijk hebben bevestigd en het lid de lidmaatschapsovereenkomst heeft ondertekend. Bij toelating geven wij een lidnummer en een lidmaatschapskaart uit.",
                ar: "تنعقد اتفاقية العضوية متى أكّدنا القبول كتابةً ووقّع العضو عليها. وعند القبول نُصدر للعضو رقم عضوية وبطاقة عضوية.",
              },
            ],
          },
          {
            title: { en: "Membership levels", nl: "Lidmaatschapsniveaus", ar: "مستويات العضوية" },
            body: [
              {
                en: "Membership has three levels: Member, Professional and Executive. Descriptions on this website are a summary; where they differ, the membership agreement prevails.",
                nl: "Het lidmaatschap kent drie niveaus: Member, Professional en Executive. De omschrijvingen op deze website zijn een samenvatting; bij verschil gaat de lidmaatschapsovereenkomst voor.",
                ar: "للعضوية ثلاثة مستويات: Member وProfessional وExecutive. أما الأوصاف الواردة في هذا الموقع فهي ملخّص؛ وعند الاختلاف، فالعبرة باتفاقية العضوية.",
              },
              {
                en: "We set the programme of events, trade missions, courses and reports: their content, their dates and, where relevant, their places. Where a level includes access, priority or a discount, it relates to the programmes we organise during the membership year, within the capacity of each programme.",
                nl: "Wij bepalen het programma van evenementen, handelsmissies, cursussen en rapporten: de inhoud, de data en, waar van toepassing, de locaties. Omvat een niveau toegang, voorrang of korting, dan heeft dat betrekking op de programma’s die wij in het lidmaatschapsjaar organiseren, binnen de capaciteit van elk programma.",
                ar: "نحدّد نحن برنامج الفعاليات والبعثات التجارية والدورات والتقارير: مضمونها ومواعيدها، وأماكنها حيثما ينطبق ذلك. وحيثما يشمل المستوى حقَّ الوصول أو الأولوية أو الخصم، فإن ذلك يتعلّق بالبرامج التي ننظّمها خلال سنة العضوية، في حدود الطاقة الاستيعابية لكل برنامج.",
              },
              {
                en: "A member may move to a higher level during the membership year; the difference in subscription is then charged pro rata. A move to a lower level takes effect from the next membership year.",
                nl: "Een lid kan in de loop van het lidmaatschapsjaar overstappen naar een hoger niveau; het verschil in abonnement wordt dan naar rato in rekening gebracht. Een overstap naar een lager niveau gaat in bij het volgende lidmaatschapsjaar.",
                ar: "يجوز للعضو الانتقال إلى مستوى أعلى خلال سنة العضوية، ويُستحق فرق الاشتراك حينئذٍ بالتناسب مع المدة المتبقية منها. أما الانتقال إلى مستوى أدنى فيسري اعتباراً من سنة العضوية التالية.",
              },
              {
                en: "Membership is personal to the member and cannot be transferred without our written consent. The member names the persons who represent it within the club and is responsible for their conduct.",
                nl: "Het lidmaatschap is gebonden aan het lid en niet overdraagbaar zonder onze schriftelijke toestemming. Het lid wijst de personen aan die het binnen de club vertegenwoordigen en is verantwoordelijk voor hun gedrag.",
                ar: "العضوية حقٌّ شخصي للعضو، ولا يجوز نقلها إلى الغير دون موافقتنا الكتابية. ويسمّي العضو الأشخاص الذين يمثّلونه داخل النادي، ويكون مسؤولاً عن تصرّفاتهم.",
              },
            ],
          },
          {
            title: { en: "Term, renewal and notice", nl: "Duur, verlenging en opzegging", ar: "المدة والتجديد والإنهاء" },
            body: [
              {
                en: "Membership is concluded for one membership year and renews each time for a further membership year, unless the member or we give written notice of termination no later than one month before the end of the current membership year. Notice given later takes effect at the end of the following membership year.",
                nl: "Het lidmaatschap wordt aangegaan voor één lidmaatschapsjaar en wordt telkens stilzwijgend verlengd met een volgend lidmaatschapsjaar, tenzij het lid of wij uiterlijk één maand vóór het einde van het lopende lidmaatschapsjaar schriftelijk opzeggen. Een latere opzegging werkt tegen het einde van het daaropvolgende lidmaatschapsjaar.",
                ar: "تُبرم العضوية لسنة عضوية واحدة، وتتجدّد تلقائياً في كل مرة لسنة عضوية أخرى، ما لم يُخطر أحد الطرفين الآخرَ كتابةً بالإنهاء قبل شهر واحد على الأقل من نهاية سنة العضوية الجارية. أما الإخطار الذي يرد بعد هذا الموعد فيسري في نهاية سنة العضوية التالية.",
              },
              {
                en: "During a membership year, membership can be ended early only as provided in articles 12, 15 and 16 or by law.",
                nl: "Tussentijdse beëindiging tijdens een lidmaatschapsjaar is alleen mogelijk zoals bepaald in de artikelen 12, 15 en 16 of op grond van de wet.",
                ar: "ولا يجوز إنهاء العضوية قبل انقضاء سنة العضوية إلا وفقاً لأحكام المواد 12 و15 و16 أو بموجب القانون.",
              },
              {
                en: "A project engagement runs for the period and scope set out in the written quotation, and ends when the agreed work is completed, unless the quotation provides otherwise. The end of a membership does not end a running project engagement, nor the other way round.",
                nl: "Een projectopdracht loopt voor de duur en omvang die in de schriftelijke offerte zijn vastgelegd, en eindigt wanneer het overeengekomen werk is voltooid, tenzij de offerte anders bepaalt. Het einde van een lidmaatschap beëindigt geen lopende projectopdracht, en omgekeerd.",
                ar: "تسري مهمة المشروع للمدة وفي النطاق المحدّدين في عرض الأسعار المكتوب، وتنتهي بإنجاز العمل المتفق عليه، ما لم ينصّ العرض على غير ذلك. ولا يترتب على انتهاء العضوية انتهاءُ مهمة مشروع جارية، ولا على انتهاء مهمة المشروع انتهاءُ العضوية.",
              },
            ],
          },
          {
            title: { en: "Fees and payment", nl: "Tarieven en betaling", ar: "الرسوم والدفع" },
            body: [
              {
                en: "Membership is an annual subscription. Project services (market entry, supplier search, representation) are quoted per engagement in writing. No hidden commissions.",
                nl: "Het lidmaatschap is een jaarabonnement. Projectdiensten (markttoetreding, leverancierszoektocht, vertegenwoordiging) worden per opdracht schriftelijk geoffreerd. Geen verborgen commissies.",
                ar: "العضوية اشتراك سنوي. خدمات المشاريع (دخول الأسواق، البحث عن مورّدين، التمثيل) تُعرض أسعارها كتابةً لكل مهمة على حدة. لا عمولات خفية.",
              },
              {
                en: "The subscription is invoiced in advance for each membership year. A quotation for project services states the scope, the fee and any costs; the work begins once the quotation has been accepted in writing. All amounts are exclusive of VAT unless stated otherwise.",
                nl: "Het abonnement wordt per lidmaatschapsjaar vooraf gefactureerd. Een offerte voor projectdiensten vermeldt de omvang, het honorarium en eventuele kosten; het werk begint zodra de offerte schriftelijk is aanvaard. Alle bedragen zijn exclusief btw, tenzij anders vermeld.",
                ar: "يُفوتَر الاشتراك مقدّماً عن كل سنة عضوية. ويبيّن عرض الأسعار لخدمات المشاريع نطاق العمل والأتعاب وما قد يترتب من تكاليف، ويبدأ العمل بمجرد قبول العرض كتابةً. وجميع المبالغ غير شاملة لضريبة القيمة المضافة ما لم يُنصّ على خلاف ذلك.",
              },
              {
                en: "Any commission or fee in connection with a transaction between members, or with a transaction that results from an introduction, is communicated clearly and agreed in advance, in writing, with every party concerned.",
                nl: "Elke commissie of vergoeding in verband met een transactie tussen leden, of met een transactie die uit een introductie voortvloeit, wordt helder gecommuniceerd en vooraf schriftelijk overeengekomen met iedere betrokken partij.",
                ar: "أي عمولة أو مقابل يتصل بمعاملة بين الأعضاء، أو بمعاملة تنشأ عن تعريف، يُبلَّغ بوضوح ويُتّفق عليه مسبقاً وكتابةً مع كل طرف معنيّ.",
              },
              {
                en: "Invoices are payable within the term stated on them. If payment is late, we may, after a written reminder, suspend our services until the invoice has been paid; reasonable collection costs are then payable by the member.",
                nl: "Facturen zijn betaalbaar binnen de daarop vermelde termijn. Bij te late betaling mogen wij na een schriftelijke herinnering onze dienstverlening opschorten totdat de factuur is voldaan; redelijke incassokosten komen dan voor rekening van het lid.",
                ar: "تُسدَّد الفواتير خلال المهلة المبيّنة فيها. وفي حال التأخر في السداد، يجوز لنا بعد توجيه تذكير كتابي تعليق خدماتنا إلى حين سداد الفاتورة، ويتحمّل العضو حينئذٍ تكاليف التحصيل المعقولة.",
              },
              {
                en: "We may change the subscription rate for a following membership year. We announce such a change in writing no later than two months before the end of the current membership year, so that the member can give notice in time.",
                nl: "Wij kunnen het abonnementstarief voor een volgend lidmaatschapsjaar wijzigen. Een dergelijke wijziging maken wij uiterlijk twee maanden vóór het einde van het lopende lidmaatschapsjaar schriftelijk bekend, zodat het lid tijdig kan opzeggen.",
                ar: "يجوز لنا تعديل قيمة الاشتراك لسنة عضوية تالية، على أن نُعلن هذا التعديل كتابةً قبل شهرين على الأقل من نهاية سنة العضوية الجارية، ليتمكّن العضو من الإخطار بالإنهاء في الوقت المناسب.",
              },
            ],
          },
          {
            title: { en: "Your obligations", nl: "Uw verplichtingen", ar: "التزاماتك" },
            body: [
              {
                en: "You provide us with accurate, complete and current information, and tell us without delay of any change that matters for your membership, such as a change in ownership, management or registration.",
                nl: "U verstrekt ons juiste, volledige en actuele informatie en meldt ons onverwijld elke wijziging die voor uw lidmaatschap van belang is, zoals een wijziging in eigendom, bestuur of inschrijving.",
                ar: "تلتزم بتزويدنا بمعلومات صحيحة وكاملة ومحدّثة، وبإبلاغنا دون تأخير بأي تغيير ذي صلة بعضويتك، كتغيّر الملكية أو الإدارة أو بيانات القيد في السجل التجاري.",
              },
              {
                en: "You act lawfully in everything you do through the club, including under the rules on bribery, money laundering, competition, customs and export control.",
                nl: "U handelt rechtmatig in alles wat u via de club doet, waaronder met inachtneming van de regels over omkoping, witwassen, mededinging, douane en exportcontrole.",
                ar: "وتلتزم بأحكام القانون في كل ما تقوم به عبر النادي، بما في ذلك القواعد المتعلقة بمكافحة الرشوة وغسل الأموال، والمنافسة، والجمارك، والرقابة على الصادرات.",
              },
              {
                en: "You comply with the sanctions that bind you and us, including those of the European Union, the United Nations and the Netherlands. You warrant that neither your company nor the persons who own or control it are subject to such sanctions, and you tell us at once if that changes. You do not use the club for any transaction that would breach sanctions or export controls.",
                nl: "U leeft de sancties na die u en ons binden, waaronder die van de Europese Unie, de Verenigde Naties en Nederland. U staat ervoor in dat noch uw onderneming, noch de personen die haar bezitten of er zeggenschap over hebben, onder zulke sancties vallen, en u meldt ons direct als dat verandert. U gebruikt de club niet voor een transactie die in strijd zou zijn met sancties of exportcontroles.",
                ar: "وتتقيّد بالعقوبات الملزِمة لك ولنا، ومنها عقوبات الاتحاد الأوروبي والأمم المتحدة وهولندا. وتضمن ألا تكون شركتك، ولا الأشخاص الذين يملكونها أو يسيطرون عليها، خاضعين لمثل هذه العقوبات، وتُبلغنا فوراً إن تغيّر ذلك. ولا تستخدم النادي في أي معاملة من شأنها مخالفة العقوبات أو قواعد الرقابة على الصادرات.",
              },
              {
                en: "You treat as confidential every introduction, request, offer, document and conversation shared within the club, and use it only for the purpose for which it was shared. You do not pass it on without the consent of the party who shared it.",
                nl: "U behandelt elke introductie, aanvraag, aanbieding, elk document en elk gesprek dat binnen de club wordt gedeeld als vertrouwelijk, en gebruikt het alleen voor het doel waarvoor het is gedeeld. U geeft het niet door zonder toestemming van de partij die het heeft gedeeld.",
                ar: "وتلتزم بالحفاظ على سرّية كل تعريف وطلب وعرض ومستند ومحادثة مما يُتداول داخل النادي، وبعدم استخدامه إلا للغرض الذي أُفصح عنه من أجله، وبعدم نقله إلى الغير دون موافقة الطرف الذي أفصح عنه.",
              },
              {
                en: "You use the member directory and DUKAAT Market only to make contact for genuine business purposes. You do not copy, collect or resell their data, use it for bulk or unsolicited messages, or use it to build another network.",
                nl: "U gebruikt het Ledenregister en DUKAAT Market uitsluitend om voor werkelijke zakelijke doeleinden contact te leggen. U kopieert of verzamelt de gegevens daaruit niet, verkoopt ze niet door, en gebruikt ze niet voor massale of ongevraagde berichten of om een ander netwerk op te bouwen.",
                ar: "ولا تستخدم دليل الأعضاء وسوق DUKAAT إلا للتواصل لأغراض تجارية حقيقية. ويُحظر عليك نسخ بياناتهما أو جمعها أو إعادة بيعها، أو استخدامها في رسائل جماعية أو غير مرغوب فيها، أو في بناء شبكة أخرى.",
              },
              {
                en: "You do not state or suggest that DUKAAT endorses, certifies or guarantees you, your products or your transactions. When you nominate someone, you do so in good faith and on the basis of your own knowledge of them.",
                nl: "U stelt of suggereert niet dat DUKAAT u, uw producten of uw transacties aanbeveelt, certificeert of garandeert. Wanneer u iemand voordraagt, doet u dat te goeder trouw en op basis van uw eigen kennis van die persoon of onderneming.",
                ar: "ولا تصرّح ولا تلمّح بأن DUKAAT يوصي بك أو يعتمدك أو يضمنك، أو بأنه يفعل ذلك بشأن منتجاتك أو معاملاتك. وحين ترشّح أحداً، فعليك أن تفعل ذلك بحسن نية وبناءً على معرفتك أنت به.",
              },
              {
                en: "You indemnify us against claims by third parties that result from a breach of these obligations by you or by the persons who represent you.",
                nl: "U vrijwaart ons voor aanspraken van derden die voortvloeien uit een schending van deze verplichtingen door u of door de personen die u vertegenwoordigen.",
                ar: "وتلتزم بتعويضنا وحمايتنا من أي مطالبات يوجّهها إلينا الغير نتيجةَ إخلالك، أو إخلال من يمثّلك، بهذه الالتزامات.",
              },
            ],
          },
          {
            title: { en: "Introductions, not transactions", nl: "Introducties, geen transacties", ar: "التعريف، لا المعاملة" },
            body: [
              {
                en: "We introduce, verify basic information and support. We are not a party to any agreement that results from an introduction, whether between members or between a member and a third party, unless we have expressly agreed so in writing.",
                nl: "Wij introduceren, verifiëren basisgegevens en ondersteunen. Wij zijn geen partij bij een overeenkomst die uit een introductie voortvloeit, tussen leden of tussen een lid en een derde, tenzij wij dat uitdrukkelijk schriftelijk zijn overeengekomen.",
                ar: "نحن نعرّف الأطراف بعضها ببعض، ونتحقّق من المعلومات الأساسية، ونقدّم الدعم. ولسنا طرفاً في أي اتفاق ينشأ عن تعريف، سواء أكان بين الأعضاء أم بين عضو وطرف ثالث، ما لم نتفق على ذلك صراحةً وكتابةً.",
              },
              {
                en: "Members negotiate, contract and perform at their own risk and under their own responsibility, including for their own due diligence and for the quality, delivery, payment and lawfulness of what they agree. Our verification is a check of basic information at a given moment; it is not an audit and not a guarantee.",
                nl: "Leden onderhandelen, sluiten overeenkomsten en voeren die uit voor eigen risico en onder eigen verantwoordelijkheid. Dat geldt ook voor hun eigen due diligence en voor de kwaliteit, levering, betaling en rechtmatigheid van wat zij overeenkomen. Onze verificatie is een controle van basisgegevens op een bepaald moment; zij is geen audit en geen garantie.",
                ar: "يتفاوض الأعضاء ويتعاقدون وينفّذون التزاماتهم على مخاطرتهم وتحت مسؤوليتهم الخاصة. وتشمل هذه المسؤولية الفحصَ النافي للجهالة الذي يجرونه بأنفسهم، وجودةَ ما يتفقون عليه، وتسليمَه، وسدادَ ثمنه، ومشروعيتَه. أما تحقّقنا فهو فحص للمعلومات الأساسية في وقت معيّن، وليس تدقيقاً ولا ضماناً.",
              },
              {
                en: "We do not take custody of members’ funds, we do not act as a bank or payment provider, and we do not guarantee any transaction between members. Payments between members are made directly between them, or through the bank, notary or licensed escrow provider they choose, on the terms they agree.",
                nl: "Wij nemen geen gelden van leden in bewaring, wij treden niet op als bank of betaaldienstverlener, en wij garanderen geen enkele transactie tussen leden. Betalingen tussen leden lopen rechtstreeks tussen hen, of via de bank, de notaris of de escrowdienst met vergunning die zij kiezen, op de voorwaarden die zij zelf overeenkomen.",
                ar: "نحن لا نحتفظ بأموال الأعضاء، ولا نعمل كمصرف أو مزوّد خدمات دفع، ولا نضمن أي معاملة بين الأعضاء. وتجري المدفوعات بين الأعضاء مباشرةً، أو عبر المصرف أو كاتب العدل أو مزوّد خدمات حساب الضمان المرخّص الذي يختارونه، وبالشروط التي يتفقون عليها فيما بينهم.",
              },
              {
                en: "We do not act as agent, broker or commercial agent for any member, except where a written engagement for representation says so, and then only within the scope set out in it. We cannot bind a member, and a member cannot bind us.",
                nl: "Wij treden voor geen enkel lid op als vertegenwoordiger, makelaar of handelsagent, behalve wanneer een schriftelijke opdracht tot vertegenwoordiging dat bepaalt, en dan alleen binnen de daarin vastgelegde reikwijdte. Wij kunnen een lid niet binden, en een lid kan ons niet binden.",
                ar: "لا نعمل ممثّلاً أو سمساراً أو وكيلاً تجارياً لأي عضو، إلا إذا نصّ على ذلك تكليفٌ مكتوب بالتمثيل، وعندئذٍ في حدود النطاق المحدّد فيه فقط. ولا نملك إلزام أي عضو، ولا يملك أي عضو إلزامنا.",
              },
            ],
          },
          {
            title: { en: "Investment information", nl: "Informatie over investeringen", ar: "المعلومات الاستثمارية" },
            body: [
              {
                en: "DUKAAT does not provide investment advice, does not arrange or broker investments, and does not offer securities. Opportunities are presented for information only. Independent legal, financial and technical due diligence remains essential before any investment decision.",
                nl: "DUKAAT geeft geen beleggingsadvies, bemiddelt niet bij investeringen en biedt geen effecten aan. Kansen worden uitsluitend ter informatie gepresenteerd. Onafhankelijk juridisch, financieel en technisch onderzoek blijft essentieel vóór elke investeringsbeslissing.",
                ar: "لا يقدّم DUKAAT استشارات استثمارية، ولا يرتّب الاستثمارات أو يتوسط فيها، ولا يعرض أوراقاً مالية. تُعرض الفرص للاطلاع فقط. ويبقى الفحص النافي للجهالة القانوني والمالي والفني المستقل ضرورياً قبل أي قرار استثماري.",
              },
              {
                en: "This covers every opportunity presented through the club, including in the formats Meet the Developer and Meet the Project Owner. Information about an opportunity comes from the party presenting it, which is responsible for that information and for complying with the rules on offering investments. We accept no liability for that information or for any investment decision.",
                nl: "Dit geldt voor elke kans die via de club wordt gepresenteerd, ook in de vormen Meet the Developer en Meet the Project Owner. De informatie over een kans is afkomstig van de partij die haar presenteert; die partij is verantwoordelijk voor die informatie en voor de naleving van de regels over het aanbieden van investeringen. Wij aanvaarden geen aansprakelijkheid voor die informatie of voor enige investeringsbeslissing.",
                ar: "ويسري ذلك على كل فرصة تُعرض عبر النادي، بما في ذلك الفرص المعروضة في صيغتَي Meet the Developer وMeet the Project Owner. وتصدر المعلومات المتعلقة بأي فرصة عن الطرف الذي يعرضها، وهو المسؤول عنها وعن الالتزام بالقواعد المنظِّمة لطرح الاستثمارات. ولا نتحمّل أي مسؤولية عن تلك المعلومات أو عن أي قرار استثماري.",
              },
            ],
          },
          {
            title: { en: "Our advice and specialist advice", nl: "Ons advies en specialistisch advies", ar: "مشورتنا والاستشارات المتخصصة" },
            body: [
              {
                en: "We advise members ourselves, from practical experience, as part of membership or a project. Specialist legal, tax, financial, marketing, PR and structuring advice is given by independent specialists from our network. They advise in their own name and under their own terms and professional rules. The engagement, and the responsibility for the advice, lie between the member and the specialist.",
                nl: "Wij adviseren leden zelf, vanuit praktijkervaring, in het kader van het lidmaatschap of een project. Specialistisch juridisch, fiscaal, financieel, marketing-, pr- en structureringsadvies wordt gegeven door onafhankelijke specialisten uit ons netwerk. Zij adviseren op eigen naam en onder hun eigen voorwaarden en beroepsregels. De opdracht, en de verantwoordelijkheid voor het advies, liggen tussen het lid en de specialist.",
                ar: "نقدّم المشورة للأعضاء بأنفسنا، انطلاقاً من خبرتنا العملية، في إطار العضوية أو المشروع. أما الاستشارات المتخصصة القانونية والضريبية والمالية والتسويقية، واستشارات العلاقات العامة والهيكلة، فيقدّمها مختصون مستقلون من شبكتنا، ويعملون في ذلك بأسمائهم ووفق شروطهم وقواعدهم المهنية. وتقوم علاقة التكليف، ومعها المسؤولية عن المشورة، بين العضو والمختص.",
              },
              {
                en: "We introduce the specialist and, where a level includes advisory hours, arrange those hours. We are not responsible for the content of a specialist’s advice or for how it is carried out. Work beyond the included hours is charged as agreed in advance and in writing; any fee connected with a specialist engagement is communicated clearly before the work begins.",
                nl: "Wij introduceren de specialist en regelen, waar een niveau adviesuren omvat, die uren. Wij zijn niet verantwoordelijk voor de inhoud van het advies van een specialist of voor de uitvoering ervan. Werk buiten de inbegrepen uren wordt in rekening gebracht zoals vooraf schriftelijk afgesproken; elke vergoeding die verband houdt met een specialistische opdracht wordt helder gecommuniceerd voordat het werk begint.",
                ar: "نعرّفك بالمختص، ونرتّب ساعات الاستشارة حيثما يشملها مستوى العضوية. ولسنا مسؤولين عن مضمون مشورة المختص ولا عن طريقة تنفيذها. ويُحتسب العمل الذي يتجاوز الساعات المشمولة وفق ما يُتّفق عليه مسبقاً وكتابةً؛ وأي مقابل يتصل بتكليف مختصٍّ يُبلَّغ بوضوح قبل بدء العمل.",
              },
              {
                en: "Our own advice and guidance, in the course of membership or a project, support your own decisions. They are general business advice based on practical experience — not a guarantee, and not legal, tax, financial or investment advice, unless a written engagement expressly says otherwise.",
                nl: "Ons eigen advies en onze begeleiding, in het kader van het lidmaatschap of een project, ondersteunen uw eigen beslissingen. Het is algemeen zakelijk advies op basis van praktijkervaring — geen garantie, en geen juridisch, fiscaal, financieel of beleggingsadvies, tenzij een schriftelijke opdracht uitdrukkelijk anders bepaalt.",
                ar: "أما مشورتنا وتوجيهنا، في إطار العضوية أو المشروع، فغايتهما دعم قراراتك أنت. وهي مشورة تجارية عامة قائمة على الخبرة العملية — ليست ضماناً، ولا تُعدّ استشارة قانونية أو ضريبية أو مالية أو استثمارية، ما لم ينصّ تكليفٌ مكتوب صراحةً على خلاف ذلك.",
              },
            ],
          },
          {
            title: { en: "Liability", nl: "Aansprakelijkheid", ar: "المسؤولية" },
            body: [
              {
                en: "We accept no liability for damage arising from membership, from any introduction we make or from our services, on whatever ground.",
                nl: "Wij aanvaarden geen aansprakelijkheid voor schade die voortvloeit uit het lidmaatschap, uit een introductie die wij doen of uit onze dienstverlening, op welke grond ook.",
                ar: "لا نتحمّل أي مسؤولية عن الأضرار الناشئة عن العضوية أو عن أي تعريف نُجريه أو عن خدماتنا، أيّاً كان أساسها.",
              },
              {
                en: "We are not liable for indirect damage, including loss of profit or turnover, lost savings, loss of reputation, business interruption, and damage arising from a transaction that is delayed, not concluded or not performed.",
                nl: "Wij zijn niet aansprakelijk voor indirecte schade, waaronder gederfde winst of omzet, gemiste besparingen, reputatieschade, bedrijfsstagnatie en schade doordat een transactie wordt vertraagd, niet tot stand komt of niet wordt uitgevoerd.",
                ar: "ولا نُسأل عن الأضرار غير المباشرة، ومنها فوات الربح أو الإيرادات، والوفورات الضائعة، والمساس بالسمعة، وتوقّف الأعمال، والأضرار الناشئة عن تأخّر معاملة أو عدم إبرامها أو عدم تنفيذها.",
              },
              {
                en: "We are not liable for the acts, omissions or information of members, counterparties, specialists, ambassadors, partners, carriers, banks, authorities or other third parties.",
                nl: "Wij zijn niet aansprakelijk voor handelen, nalaten of informatie van leden, tegenpartijen, specialisten, ambassadeurs, partners, vervoerders, banken, autoriteiten of andere derden.",
                ar: "ولا نُسأل عمّا يصدر عن الأعضاء أو الأطراف المقابلة أو المختصين أو السفراء أو الشركاء أو الناقلين أو المصارف أو السلطات أو غيرهم من الأطراف الثالثة، من أفعال أو امتناع أو معلومات.",
              },
              {
                en: "These exclusions apply to the fullest extent mandatory law permits.",
                nl: "Deze uitsluitingen gelden voor zover het dwingend recht dit toestaat.",
                ar: "ويسري هذا الإخلاء من المسؤولية بالقدر الذي يجيزه القانون الآمر.",
              },
              {
                en: "These exclusions also protect our board members, staff and the persons we engage in providing our services, who may invoke them directly.",
                nl: "Deze uitsluitingen gelden ook ten gunste van onze bestuurders, medewerkers en de personen die wij bij onze dienstverlening inschakelen; zij kunnen zich er rechtstreeks op beroepen.",
                ar: "ويسري هذا الإخلاء من المسؤولية كذلك لمصلحة أعضاء مجلس إدارتنا والعاملين لدينا والأشخاص الذين نستعين بهم في تقديم خدماتنا، ويحقّ لهم التمسّك به مباشرةً.",
              },
            ],
          },
          {
            title: { en: "Force majeure and changes to programmes", nl: "Overmacht en wijzigingen in programma’s", ar: "القوة القاهرة وتعديل البرامج" },
            body: [
              {
                en: "We are not liable for a failure caused by circumstances beyond our control, such as war, unrest, terrorism, epidemics, natural disasters, government measures, sanctions, travel advice, strikes, disruptions of transport, energy or the internet, and failures of venues, carriers or other suppliers.",
                nl: "Wij zijn niet aansprakelijk voor een tekortkoming die het gevolg is van omstandigheden buiten onze invloed, zoals oorlog, onlusten, terrorisme, epidemieën, natuurrampen, overheidsmaatregelen, sancties, reisadviezen, stakingen, storingen in vervoer, energievoorziening of internet, en tekortkomingen van locaties, vervoerders of andere leveranciers.",
                ar: "لا نُسأل عن أي إخلال ناجم عن ظروف خارجة عن سيطرتنا، كالحرب والاضطرابات والإرهاب والأوبئة والكوارث الطبيعية والإجراءات الحكومية والعقوبات وتحذيرات السفر والإضرابات وتعطّل النقل أو إمدادات الطاقة أو الإنترنت، وتقصير مزوّدي أماكن الفعاليات أو الناقلين أو غيرهم من المورّدين.",
              },
              {
                en: "During force majeure our obligations are suspended. If it lasts longer than two months, either party may terminate the affected part of the agreement in writing, without any obligation to pay damages.",
                nl: "Tijdens overmacht worden onze verplichtingen opgeschort. Duurt de overmacht langer dan twee maanden, dan kan elk van de partijen het getroffen deel van de overeenkomst schriftelijk ontbinden, zonder tot schadevergoeding gehouden te zijn.",
                ar: "وتُعلَّق التزاماتنا طوال مدة القوة القاهرة. فإن استمرت أكثر من شهرين، جاز لكلٍّ من الطرفين فسخ الجزء المتأثر من الاتفاق كتابةً، دون أن يلتزم بأي تعويض.",
              },
              {
                en: "We may change the programme, date or place of an event or trade mission, or cancel it, where travel advice, security, legal or insurance conditions, government measures or circumstances at the destination require it. We inform participants as early as we can. What happens to amounts already paid for that event or mission is set out in its invitation or confirmation.",
                nl: "Wij kunnen het programma, de datum of de plaats van een evenement of handelsmissie wijzigen, of het annuleren, wanneer reisadviezen, de veiligheid, juridische of verzekeringsvoorwaarden, overheidsmaatregelen of omstandigheden ter plaatse dat vereisen. Wij informeren deelnemers zo vroeg als wij kunnen. Wat er gebeurt met bedragen die al voor dat evenement of die missie zijn betaald, staat in de uitnodiging of bevestiging.",
                ar: "ويجوز لنا تعديل برنامج الفعالية أو البعثة التجارية أو موعدها أو مكانها، أو إلغاؤها، متى اقتضت ذلك تحذيرات السفر أو الاعتبارات الأمنية أو القانونية أو شروط التأمين أو الإجراءات الحكومية أو الأوضاع في الوجهة. ونُبلغ المشاركين بذلك في أقرب وقت ممكن. وتبيّن دعوة الفعالية أو البعثة، أو تأكيد المشاركة فيها، مصيرَ المبالغ المدفوعة عنها مسبقاً.",
              },
            ],
          },
          {
            title: { en: "Intellectual property", nl: "Intellectuele eigendom", ar: "الملكية الفكرية" },
            body: [
              {
                en: "All rights in the content of this website and of the club’s publications — texts, photographs, design, reports, course materials, the name DUKAAT and the tulip mark — belong to us or to our licensors. Nothing may be reproduced, published or used commercially without our prior written consent.",
                nl: "Alle rechten op de inhoud van deze website en van de publicaties van de club — teksten, foto’s, vormgeving, rapporten, cursusmateriaal, de naam DUKAAT en het beeldmerk met de tulp — berusten bij ons of bij onze licentiegevers. Niets daarvan mag zonder onze voorafgaande schriftelijke toestemming worden verveelvoudigd, openbaar gemaakt of commercieel gebruikt.",
                ar: "جميع الحقوق في محتوى هذا الموقع وفي منشورات النادي — النصوص والصور والتصميم والتقارير والمواد التدريبية واسم DUKAAT وشعار التوليب — مملوكة لنا أو للجهات المرخِّصة لنا. ولا يجوز نسخ أي منها أو نشره أو استخدامه تجارياً دون موافقتنا الكتابية المسبقة.",
              },
              {
                en: "Members may use the DUKAAT Member badge and the membership certificate we issue, as issued and only while the membership lasts. Reports and market information are for the member’s own internal use and may not be passed on.",
                nl: "Leden mogen het DUKAAT Member-embleem en het lidmaatschapscertificaat die wij uitgeven gebruiken zoals uitgegeven, en alleen zolang het lidmaatschap duurt. Rapporten en marktinformatie zijn bestemd voor intern gebruik door het lid en mogen niet worden doorgegeven.",
                ar: "يجوز للأعضاء استخدام شارة DUKAAT Member وشهادة العضوية اللتين نُصدرهما، بالصيغة التي صدرتا بها، وطوال مدة العضوية فقط. والتقارير ومعلومات الأسواق مخصّصة للاستخدام الداخلي للعضو، ولا يجوز نقلها إلى الغير.",
              },
              {
                en: "You keep the rights in what you supply to us, such as profile texts, logos, photographs and product information. You grant us a non-exclusive, royalty-free licence to use it for the purposes of your membership, within the limits of our terms for the publication of member data, and you warrant that you are entitled to grant this licence.",
                nl: "U behoudt de rechten op wat u ons aanlevert, zoals profielteksten, logo’s, foto’s en productinformatie. U verleent ons een niet-exclusieve, kosteloze licentie om dit te gebruiken voor de doeleinden van uw lidmaatschap, binnen de grenzen van onze voorwaarden voor de publicatie van ledengegevens, en u staat ervoor in dat u gerechtigd bent die licentie te verlenen.",
                ar: "وتحتفظ بحقوقك فيما تزوّدنا به، كنصوص الملف التعريفي والشعارات والصور ومعلومات المنتجات. وتمنحنا ترخيصاً غير حصري ودون مقابل لاستخدامه لأغراض عضويتك، في حدود شروط نشر بيانات الأعضاء، وتضمن أنك مخوَّل بمنح هذا الترخيص.",
              },
            ],
          },
          {
            title: { en: "Confidentiality and privacy", nl: "Vertrouwelijkheid en privacy", ar: "السرّية والخصوصية" },
            body: [
              {
                en: "We treat the non-public information you share with us as confidential. We share it with a proposed counterparty, ambassador or specialist only as far as an introduction, a search or a project engagement for you requires, or where the law obliges us to.",
                nl: "Wij behandelen de niet-openbare informatie die u met ons deelt als vertrouwelijk. Wij delen die met een beoogde tegenpartij, ambassadeur of specialist alleen voor zover een introductie, zoekopdracht of projectopdracht voor u dat vereist, of wanneer de wet ons daartoe verplicht.",
                ar: "نحافظ على سرّية المعلومات غير المعلنة التي تُطلعنا عليها. ولا نُطلع عليها طرفاً مقابلاً مقترحاً أو سفيراً أو مختصاً إلا بالقدر الذي يقتضيه تعريفٌ أو بحثٌ أو مهمة مشروع لصالحك، أو حين يُلزمنا القانون بذلك.",
              },
              {
                en: "We process personal data in accordance with the General Data Protection Regulation (GDPR), as described in our Privacy statement on this website. What we publish about members, and how to correct or withdraw it, is set out in our terms for the publication of member data. Verification data and documents are never published.",
                nl: "Wij verwerken persoonsgegevens in overeenstemming met de Algemene verordening gegevensbescherming (AVG), zoals beschreven in onze privacyverklaring op deze website. Wat wij over leden publiceren, en hoe u dat corrigeert of intrekt, staat in onze voorwaarden voor de publicatie van ledengegevens. Verificatiegegevens en -documenten worden nooit gepubliceerd.",
                ar: "نعالج البيانات الشخصية وفقاً للائحة العامة لحماية البيانات (GDPR)، على النحو المبيّن في بيان الخصوصية المنشور على هذا الموقع. أما ما ننشره عن الأعضاء، وكيف يمكن تصحيحه أو سحبه، فتبيّنه شروط نشر بيانات الأعضاء. ولا تُنشر بيانات التحقق ومستنداته أبداً.",
              },
            ],
          },
          {
            title: { en: "Suspension and termination", nl: "Opschorting en beëindiging", ar: "التعليق والإنهاء" },
            body: [
              {
                en: "We may suspend a membership in whole or in part, or terminate it with immediate effect by written notice, if the member materially breaches these terms or the membership agreement and has not remedied the breach within a reasonable period after written notice, or at once where remedy is not possible.",
                nl: "Wij kunnen een lidmaatschap geheel of gedeeltelijk opschorten, of het met onmiddellijke ingang schriftelijk beëindigen, als het lid deze voorwaarden of de lidmaatschapsovereenkomst wezenlijk schendt en de schending niet binnen een redelijke termijn na schriftelijke ingebrekestelling heeft hersteld, of direct wanneer herstel niet mogelijk is.",
                ar: "يجوز لنا تعليق العضوية كلياً أو جزئياً، أو إنهاؤها بأثر فوري بإخطار كتابي، إذا أخلّ العضو إخلالاً جوهرياً بهذه الشروط أو باتفاقية العضوية ولم يتدارك الإخلال خلال مهلة معقولة من تاريخ إنذاره كتابةً، أو على الفور إذا تعذّر تداركه.",
              },
              {
                en: "We may do the same if the member has given false or misleading information; becomes subject to sanctions; is involved in, or reasonably suspected of, fraud, money laundering, corruption or another serious offence; is declared bankrupt or granted a suspension of payments; fails to pay an invoice after a written reminder; or behaves in a way that harms the club, its members or its reputation.",
                nl: "Hetzelfde geldt als het lid onjuiste of misleidende informatie heeft verstrekt; onder sancties komt te vallen; betrokken is bij, of redelijkerwijs wordt verdacht van, fraude, witwassen, corruptie of een ander ernstig strafbaar feit; failliet wordt verklaard of surseance van betaling verkrijgt; een factuur na schriftelijke herinnering niet betaalt; of zich zo gedraagt dat de club, haar leden of haar reputatie worden geschaad.",
                ar: "ولنا الحق نفسه إذا قدّم العضو معلومات غير صحيحة أو مضلِّلة؛ أو أصبح خاضعاً لعقوبات؛ أو تورّط في احتيال أو غسل أموال أو فساد أو جريمة جسيمة أخرى، أو قامت شبهة معقولة على تورّطه فيها؛ أو أُشهر إفلاسه أو حصل على تأجيل قضائي لسداد ديونه (surseance van betaling)؛ أو لم يسدّد فاتورة بعد تذكير كتابي؛ أو صدر عنه سلوك يضرّ بالنادي أو بأعضائه أو بسمعته.",
              },
              {
                en: "Termination under this article gives no right to a refund of the subscription already paid and does not affect our right to payment for work already done. The membership number and access to the club end with the membership.",
                nl: "Beëindiging op grond van dit artikel geeft geen recht op terugbetaling van het reeds betaalde abonnement en laat ons recht op betaling voor reeds verricht werk onverlet. Het lidnummer en de toegang tot de club eindigen met het lidmaatschap.",
                ar: "ولا يرتّب الإنهاء بموجب هذه المادة حقاً في استرداد الاشتراك المدفوع سلفاً، ولا يمسّ حقّنا في تقاضي مقابل العمل المنجز. وينتهي رقم العضوية والوصول إلى النادي بانتهاء العضوية.",
              },
              {
                en: "Each party keeps its statutory rights, including the right to dissolve the agreement if the other party fails seriously in its obligations. Provisions that by their nature continue — on confidentiality, intellectual property and liability — remain in force after the membership has ended.",
                nl: "Elke partij behoudt haar wettelijke rechten, waaronder het recht de overeenkomst te ontbinden als de andere partij ernstig tekortschiet. Bepalingen die naar hun aard doorlopen — over vertrouwelijkheid, intellectuele eigendom en aansprakelijkheid — blijven na het einde van het lidmaatschap van kracht.",
                ar: "ويحتفظ كل طرف بحقوقه المقرّرة قانوناً، ومنها حق فسخ الاتفاق إذا أخلّ الطرف الآخر إخلالاً جسيماً بالتزاماته. وتظل الأحكام التي تستمر بطبيعتها — أي المتعلقة بالسرّية والملكية الفكرية والمسؤولية — ساريةً بعد انتهاء العضوية.",
              },
            ],
          },
          {
            title: { en: "Changes to these terms", nl: "Wijziging van deze voorwaarden", ar: "تعديل هذه الشروط" },
            body: [
              {
                en: "We may change these terms. We announce a change in writing at least one month before it takes effect, and publish the new version on this website with its date.",
                nl: "Wij kunnen deze voorwaarden wijzigen. Een wijziging maken wij ten minste één maand voordat zij ingaat schriftelijk bekend, en wij publiceren de nieuwe versie met haar datum op deze website.",
                ar: "يجوز لنا تعديل هذه الشروط، على أن نُعلن التعديل كتابةً قبل شهر واحد على الأقل من سريانه، وننشر الصيغة الجديدة بتاريخها على هذا الموقع.",
              },
              {
                en: "If a change materially limits your rights, you may terminate your membership in writing with effect from the date on which the change takes effect. A change required by law takes effect when the law requires it.",
                nl: "Beperkt een wijziging uw rechten wezenlijk, dan kunt u uw lidmaatschap schriftelijk opzeggen met ingang van de datum waarop de wijziging ingaat. Een wijziging die de wet voorschrijft, gaat in op het moment dat de wet dat vereist.",
                ar: "وإذا قيّد التعديل حقوقك تقييداً جوهرياً، جاز لك إنهاء عضويتك كتابةً اعتباراً من تاريخ سريان التعديل. أما التعديل الذي يفرضه القانون فيسري في الموعد الذي يقتضيه القانون.",
              },
            ],
          },
          {
            title: { en: "Governing law, disputes and language", nl: "Toepasselijk recht, geschillen en taal", ar: "القانون الواجب التطبيق والنزاعات واللغة" },
            body: [
              {
                en: "These terms, and every agreement to which they relate, are governed by Dutch law.",
                nl: "Op deze voorwaarden en op elke overeenkomst waarop zij betrekking hebben, is Nederlands recht van toepassing.",
                ar: "تخضع هذه الشروط، وكل اتفاق تتصل به، للقانون الهولندي.",
              },
              {
                en: "We first seek to resolve any dispute through consultation. A dispute that cannot be resolved in this way is submitted exclusively to the competent court for the place where DUKAAT has its statutory seat, without prejudice to mandatory rules of jurisdiction. We may also bring a claim before the competent court at the member’s place of business.",
                nl: "Wij proberen elk geschil eerst in overleg op te lossen. Een geschil dat zo niet kan worden opgelost, wordt uitsluitend voorgelegd aan de bevoegde rechter in het arrondissement waar DUKAAT statutair is gevestigd, onverminderd dwingende bevoegdheidsregels. Wij kunnen een vordering ook instellen bij de bevoegde rechter van de plaats van vestiging van het lid.",
                ar: "نسعى أولاً إلى تسوية أي نزاع بالتشاور. وما يتعذّر حلّه على هذا النحو يُحال حصراً إلى المحكمة المختصة في الدائرة القضائية التي يقع فيها المقرّ القانوني لـ DUKAAT، مع عدم الإخلال بقواعد الاختصاص الآمرة. ويجوز لنا كذلك رفع دعوى أمام المحكمة المختصة في مكان مزاولة العضو لنشاطه.",
              },
              {
                en: "These terms are published in Dutch, English and Arabic. Where the versions differ, or where the meaning of a provision is in doubt, the Dutch text prevails.",
                nl: "Deze voorwaarden zijn gepubliceerd in het Nederlands, Engels en Arabisch. Bij verschil tussen de versies, of bij twijfel over de betekenis van een bepaling, is de Nederlandse tekst beslissend.",
                ar: "تُنشر هذه الشروط بالهولندية والإنجليزية والعربية. وعند وجود أي اختلاف بين النسخ اللغوية، أو أي لبس في معنى حكم من أحكامها، يكون النص الهولندي هو المرجع.",
              },
            ],
          },
        ],
      },
    ],
  },

  "legal/disclaimer": {
    masthead: { variant: "plate", photo: "leg-disclaimer" },
    blocks: [
      {
        kind: "legal",
        updated: { en: "Version: September 2026", nl: "Versie: september 2026", ar: "الإصدار: سبتمبر 2026" },
        intro: [
          {
            en: "This disclaimer covers the use of this website and of all information on it. DUKAAT is the trading name of Stichting Nederlands-Arabische Handelskamer; its details are on the Company details page.",
            nl: "Deze disclaimer is van toepassing op het gebruik van deze website en van alle informatie daarop. DUKAAT is de handelsnaam van Stichting Nederlands-Arabische Handelskamer; haar gegevens staan op de pagina Bedrijfsgegevens.",
            ar: "يسري إخلاء المسؤولية هذا على استخدام الموقع وعلى جميع المعلومات الواردة فيه. وDUKAAT هو الاسم التجاري لـ Stichting Nederlands-Arabische Handelskamer، وترد بياناتها في صفحة «بيانات الشركة».",
          },
        ],
        articles: [
          {
            title: { en: "General information", nl: "Algemene informatie", ar: "معلومات عامة" },
            body: [
              {
                en: "The information on this website is general and intended to inform. It describes DUKAAT, the club and its services. It is not an offer: membership is by nomination or invitation, and our services are provided only under a membership agreement or a written quotation, on our terms and conditions.",
                nl: "De informatie op deze website is algemeen van aard en bedoeld om te informeren. Zij beschrijft DUKAAT, de club en haar diensten. Zij is geen aanbod: het lidmaatschap is op voordracht of uitnodiging, en onze diensten worden alleen verleend op grond van een lidmaatschapsovereenkomst of een schriftelijke offerte, onder onze algemene voorwaarden.",
                ar: "المعلومات الواردة في هذا الموقع ذات طابع عام، والغرض منها الإعلام. وهي تصف DUKAAT والنادي وخدماته، ولا تُعدّ عرضاً تعاقدياً: فالعضوية بالترشيح أو الدعوة، ولا نقدّم خدماتنا إلا بموجب اتفاقية عضوية أو عرض أسعار مكتوب، ووفق شروطنا وأحكامنا.",
              },
              {
                en: "We may change or remove information on this website at any time, without prior notice.",
                nl: "Wij kunnen informatie op deze website op elk moment wijzigen of verwijderen, zonder voorafgaande aankondiging.",
                ar: "ويجوز لنا تعديل المعلومات الواردة في هذا الموقع أو حذفها في أي وقت، دون إشعار مسبق.",
              },
            ],
          },
          {
            title: { en: "No advice", nl: "Geen advies", ar: "لا استشارة" },
            body: [
              {
                en: "Nothing on this website is legal, tax, financial or investment advice, or advice of any other kind. The information does not take account of your circumstances. Before you act on it, seek advice from a qualified professional who knows your situation.",
                nl: "Niets op deze website is juridisch, fiscaal, financieel of beleggingsadvies, of advies van welke andere aard ook. De informatie houdt geen rekening met uw omstandigheden. Win, voordat u erop handelt, advies in bij een deskundige die uw situatie kent.",
                ar: "ليس في هذا الموقع ما يُعدّ استشارةً قانونية أو ضريبية أو مالية أو استثمارية، أو استشارةً من أي نوع آخر. ولا تراعي معلوماته ظروفك الخاصة. فقبل أن تتصرّف بناءً عليها، استشر مختصاً مؤهلاً مطّلعاً على وضعك.",
              },
            ],
          },
          {
            title: { en: "Accuracy and completeness", nl: "Juistheid en volledigheid", ar: "الدقة والاكتمال" },
            body: [
              {
                en: "We take care in compiling this website, but we do not guarantee that its information is accurate, complete or current, or that the website is available without interruption and free of errors or viruses.",
                nl: "Wij stellen deze website met zorg samen, maar garanderen niet dat de informatie erop juist, volledig of actueel is, of dat de website zonder onderbreking beschikbaar en vrij van fouten of virussen is.",
                ar: "نُعِدّ هذا الموقع بعناية، لكننا لا نضمن أن تكون معلوماته صحيحة أو كاملة أو محدّثة، ولا أن يكون الموقع متاحاً دون انقطاع وخالياً من الأخطاء أو الفيروسات.",
              },
              {
                en: "Descriptions of programmes, events and trade missions set out what they are and how they work. The content, dates and places of a particular event or mission are those stated in its invitation.",
                nl: "Beschrijvingen van programma’s, evenementen en handelsmissies geven weer wat die inhouden en hoe zij werken. Voor een bepaald evenement of een bepaalde missie gelden de inhoud, data en plaatsen die in de uitnodiging staan.",
                ar: "وتبيّن أوصاف البرامج والفعاليات والبعثات التجارية ماهيّتها وطريقة عملها. أما مضمون فعالية أو بعثة بعينها ومواعيدها وأماكنها، فالعبرة فيها بما تذكره الدعوة الخاصة بها.",
              },
            ],
          },
          {
            title: { en: "Companies, products and opportunities", nl: "Bedrijven, producten en kansen", ar: "الشركات والمنتجات والفرص" },
            body: [
              {
                en: "Companies, products, requests and opportunities shown to members — in the member directory, in DUKAAT Market, in DUKAAT Deal Alert or in stories — are described on the basis of information supplied by the members concerned. We do not endorse them.",
                nl: "Bedrijven, producten, aanvragen en kansen die aan leden worden getoond — in het Ledenregister, in DUKAAT Market, in DUKAAT Deal Alert of in verhalen — worden beschreven op basis van informatie van de betrokken leden. Wij bevelen ze niet aan.",
                ar: "تُوصف الشركات والمنتجات والطلبات والفرص التي تُعرض على الأعضاء — في دليل الأعضاء، أو في سوق DUKAAT، أو في DUKAAT Deal Alert، أو في القصص — استناداً إلى المعلومات التي يقدّمها الأعضاء المعنيون. ونحن لا نوصي بها.",
              },
              {
                en: "This information does not constitute a guarantee, endorsement or warranty by DUKAAT regarding any company, product or transaction. It is provided to support more informed business decisions. Members remain fully responsible for their own due diligence.",
                nl: "Deze informatie vormt geen garantie, aanbeveling of waarborg van DUKAAT ten aanzien van enig bedrijf, product of enige transactie. Zij wordt verstrekt om beter geïnformeerde zakelijke beslissingen te ondersteunen. Leden blijven volledig verantwoordelijk voor hun eigen due diligence.",
                ar: "لا تُشكّل هذه المعلومات ضماناً أو تأييداً أو كفالةً من DUKAAT بشأن أي شركة أو منتج أو معاملة، وإنما تُقدَّم لدعم اتخاذ قراراتٍ تجارية أكثر وعياً. ويبقى الأعضاء مسؤولين مسؤوليةً كاملة عن إجراء الفحص النافي للجهالة بأنفسهم.",
              },
              {
                en: "Where this website shows how a profile or request is set out, the sample lines illustrate the format. They do not describe real companies or real requests.",
                nl: "Waar deze website laat zien hoe een profiel of aanvraag is opgebouwd, tonen de voorbeeldregels de vorm. Zij beschrijven geen bestaande bedrijven of werkelijke aanvragen.",
                ar: "وحيثما يعرض هذا الموقع كيف يُصاغ ملف أو طلب، فإن الأسطر النموذجية توضّح الصيغة فحسب، ولا تصف شركات قائمة ولا طلبات فعلية.",
              },
            ],
          },
          {
            title: { en: "Investment notice", nl: "Mededeling over investeringen", ar: "تنبيه بشأن الاستثمار" },
            body: [
              {
                en: "DUKAAT does not provide investment advice, does not arrange or broker investments, and does not offer securities. Opportunities are presented for information only. Independent legal, financial and technical due diligence remains essential before any investment decision.",
                nl: "DUKAAT geeft geen beleggingsadvies, bemiddelt niet bij investeringen en biedt geen effecten aan. Kansen worden uitsluitend ter informatie gepresenteerd. Onafhankelijk juridisch, financieel en technisch onderzoek blijft essentieel vóór elke investeringsbeslissing.",
                ar: "لا يقدّم DUKAAT استشارات استثمارية، ولا يرتّب الاستثمارات أو يتوسط فيها، ولا يعرض أوراقاً مالية. تُعرض الفرص للاطلاع فقط. ويبقى الفحص النافي للجهالة القانوني والمالي والفني المستقل ضرورياً قبل أي قرار استثماري.",
              },
              {
                en: "This covers every opportunity mentioned on this website or presented through the club, including in the formats Meet the Developer and Meet the Project Owner.",
                nl: "Dit geldt voor elke kans die op deze website wordt genoemd of via de club wordt gepresenteerd, ook in de vormen Meet the Developer en Meet the Project Owner.",
                ar: "ويسري ذلك على كل فرصة تُذكر في هذا الموقع أو تُعرض عبر النادي، بما في ذلك الفرص المعروضة في صيغتَي Meet the Developer وMeet the Project Owner.",
              },
            ],
          },
          {
            title: { en: "External links", nl: "Externe links", ar: "الروابط الخارجية" },
            body: [
              {
                en: "This website may link to websites of third parties. We have no control over them and are not responsible for their content, their availability or their handling of personal data. A link is not an endorsement.",
                nl: "Deze website kan verwijzen naar websites van derden. Wij hebben daarover geen zeggenschap en zijn niet verantwoordelijk voor hun inhoud, beschikbaarheid of omgang met persoonsgegevens. Een link is geen aanbeveling.",
                ar: "قد يتضمّن هذا الموقع روابط إلى مواقع أطراف ثالثة لا سيطرة لنا عليها، ولسنا مسؤولين عن محتواها أو مدى إتاحتها أو طريقة تعاملها مع البيانات الشخصية. ولا يعني وجود الرابط أننا نوصي بالموقع الذي يحيل إليه.",
              },
            ],
          },
          {
            title: { en: "Liability", nl: "Aansprakelijkheid", ar: "المسؤولية" },
            body: [
              {
                en: "We accept no liability for damage arising from the use of this website, from reliance on its information, or from its temporary unavailability, except in the case of intent or gross negligence on our part. For members, the liability provisions of our terms and conditions govern our relationship.",
                nl: "Wij aanvaarden geen aansprakelijkheid voor schade die voortvloeit uit het gebruik van deze website, uit het vertrouwen op de informatie erop of uit tijdelijke onbeschikbaarheid ervan, behalve bij opzet of grove schuld aan onze kant. Voor leden bepalen de aansprakelijkheidsbepalingen in onze algemene voorwaarden onze verhouding.",
                ar: "لا نتحمّل أي مسؤولية عن الأضرار الناشئة عن استخدام هذا الموقع، أو عن الاعتماد على معلوماته، أو عن تعذّر الوصول إليه مؤقتاً، إلا في حالة العمد أو الخطأ الجسيم من جانبنا. أما الأعضاء، فتحكم علاقتَنا بهم أحكامُ المسؤولية الواردة في شروطنا وأحكامنا.",
              },
            ],
          },
          {
            title: { en: "Intellectual property", nl: "Intellectuele eigendom", ar: "الملكية الفكرية" },
            body: [
              {
                en: "All rights in this website — texts, photographs, design, the name DUKAAT and the tulip mark — belong to Stichting Nederlands-Arabische Handelskamer or its licensors. You may view the website and quote short passages with a clear reference to the source. Any other reproduction, publication or commercial use requires our prior written consent.",
                nl: "Alle rechten op deze website — teksten, foto’s, vormgeving, de naam DUKAAT en het beeldmerk met de tulp — berusten bij Stichting Nederlands-Arabische Handelskamer of haar licentiegevers. U mag de website bekijken en korte passages citeren met een duidelijke bronvermelding. Elke andere verveelvoudiging, openbaarmaking of commercieel gebruik vereist onze voorafgaande schriftelijke toestemming.",
                ar: "جميع الحقوق في هذا الموقع — النصوص والصور والتصميم واسم DUKAAT وشعار التوليب — مملوكة لـ Stichting Nederlands-Arabische Handelskamer أو للجهات المرخِّصة لها. ويجوز لك تصفّح الموقع واقتباس مقاطع قصيرة منه مع الإشارة الواضحة إلى المصدر. ويتطلب أي نسخ أو نشر أو استخدام تجاري آخر موافقتَنا الكتابية المسبقة.",
              },
            ],
          },
          {
            title: { en: "Law and language", nl: "Recht en taal", ar: "القانون واللغة" },
            body: [
              {
                en: "This disclaimer is governed by Dutch law. It is published in Dutch, English and Arabic; where the versions differ, the Dutch text prevails.",
                nl: "Op deze disclaimer is Nederlands recht van toepassing. Zij is gepubliceerd in het Nederlands, Engels en Arabisch; bij verschil tussen de versies is de Nederlandse tekst beslissend.",
                ar: "يخضع إخلاء المسؤولية هذا للقانون الهولندي. ويُنشر بالهولندية والإنجليزية والعربية، وعند وجود أي اختلاف بين النسخ اللغوية يكون النص الهولندي هو المرجع.",
              },
            ],
          },
        ],
      },
    ],
  },

  "legal/member-data": {
    masthead: { variant: "plate", photo: "leg-member-data" },
    blocks: [
      {
        kind: "legal",
        updated: { en: "Version: September 2026", nl: "Versie: september 2026", ar: "الإصدار: سبتمبر 2026" },
        intro: [
          {
            en: "These terms set out what DUKAAT publishes about members, where, and on what conditions. They supplement our terms and conditions and our Privacy statement.",
            nl: "Deze voorwaarden regelen wat DUKAAT over leden publiceert, waar, en onder welke voorwaarden. Zij vullen onze algemene voorwaarden en onze privacyverklaring aan.",
            ar: "تحدّد هذه الشروط ما ينشره DUKAAT عن الأعضاء، وأين ينشره، والضوابط التي يخضع لها النشر. وهي مكمّلة لشروطنا وأحكامنا ولبيان الخصوصية.",
          },
          {
            en: "The principle throughout: we publish only what you have approved in writing, and you can correct or withdraw it at any time.",
            nl: "Het uitgangspunt: wij publiceren alleen wat u schriftelijk hebt goedgekeurd, en u kunt het op elk moment corrigeren of intrekken.",
            ar: "والمبدأ الذي يحكمها كلّها: لا ننشر إلا ما وافقت عليه كتابةً، ويمكنك تصحيحه أو سحبه في أي وقت.",
          },
        ],
        articles: [
          {
            title: { en: "Scope", nl: "Reikwijdte", ar: "النطاق" },
            body: [
              {
                en: "These terms cover every publication of member data by DUKAAT: the profile in the member directory, listings in DUKAAT Market (products, buyer requests, stocklots and machinery), DUKAAT Deal Alert, stories such as Member Spotlight and Deal of the Month, the portraits of the Golden Ten, and any other publication about a member on this website.",
                nl: "Deze voorwaarden gelden voor elke publicatie van ledengegevens door DUKAAT: het profiel in het Ledenregister, vermeldingen in DUKAAT Market (producten, inkoopaanvragen, partijen en machines), DUKAAT Deal Alert, verhalen zoals Member Spotlight en Deal of the Month, de portretten van de Golden Ten, en elke andere publicatie over een lid op deze website.",
                ar: "تسري هذه الشروط على كل ما ينشره DUKAAT من بيانات الأعضاء: الملف في دليل الأعضاء، وما يُدرج في سوق DUKAAT (المنتجات وطلبات الشراء ودفعات المخزون والآلات)، وDUKAAT Deal Alert، والقصص مثل Member Spotlight وDeal of the Month، والتعريف بشركات Golden Ten، وأي مادة أخرى تُنشر عن عضو على هذا الموقع.",
              },
              {
                en: "In these terms, to publish means to make information visible to anyone other than DUKAAT, whether to admitted members only or to the public.",
                nl: "Onder publiceren verstaan wij in deze voorwaarden: informatie zichtbaar maken voor anderen dan DUKAAT, of dat nu alleen toegelaten leden zijn of het publiek.",
                ar: "ويُقصد بالنشر في هذه الشروط: إتاحة المعلومات لغير DUKAAT، سواء أكانت الإتاحة مقصورة على الأعضاء المقبولين أم شاملة للجمهور.",
              },
            ],
          },
          {
            title: { en: "What can be published", nl: "Wat gepubliceerd kan worden", ar: "ما يجوز نشره" },
            body: [
              {
                en: "We publish only what the member has approved in writing. Before anything is published, we send the member the text and images as they will appear; publication follows approval. An e-mail counts as written approval.",
                nl: "Wij publiceren alleen wat het lid schriftelijk heeft goedgekeurd. Voordat iets wordt gepubliceerd, sturen wij het lid de tekst en de beelden zoals zij zullen verschijnen; publicatie volgt op goedkeuring. Een e-mail geldt als schriftelijke goedkeuring.",
                ar: "لا ننشر إلا ما وافق عليه العضو كتابةً. فقبل نشر أي شيء، نرسل إلى العضو النص والصور بالشكل الذي ستظهر به، ولا يكون النشر إلا بعد موافقته. وتُعدّ الموافقة بالبريد الإلكتروني موافقةً كتابية.",
              },
              {
                en: "A profile or listing may contain the company name and logo, sector, country and markets, products and services, what the company offers and what it looks for, images and video, and the names and business contact details of contact persons who have agreed to be named.",
                nl: "Een profiel of vermelding kan bevatten: bedrijfsnaam en logo, sector, land en markten, producten en diensten, wat het bedrijf aanbiedt en wat het zoekt, beelden en video, en de namen en zakelijke contactgegevens van contactpersonen die ermee hebben ingestemd te worden genoemd.",
                ar: "ويجوز أن يتضمّن الملف أو المادة المدرجة: اسم الشركة وشعارها، والقطاع، والبلد والأسواق، والمنتجات والخدمات، وما تقدّمه الشركة وما تبحث عنه، والصور ومقاطع الفيديو، وأسماء مسؤولي الاتصال الذين وافقوا على ذكر أسمائهم، وبيانات الاتصال المهنية الخاصة بهم.",
              },
              {
                en: "We publish an approved directory profile within 10 working days of admission, or of approval if that comes later. We may translate an approved text into Dutch, English and Arabic; the member may review the translations, and where they differ, the text the member approved prevails.",
                nl: "Een goedgekeurd profiel in het Ledenregister publiceren wij binnen 10 werkdagen na toelating, of na goedkeuring als die later volgt. Wij kunnen een goedgekeurde tekst vertalen in het Nederlands, Engels en Arabisch; het lid kan de vertalingen inzien, en bij verschil gaat de door het lid goedgekeurde tekst voor.",
                ar: "ننشر الملف الذي وافق عليه العضو في دليل الأعضاء خلال 10 أيام عمل من تاريخ قبوله، أو من تاريخ موافقته إن جاءت بعد القبول. ويجوز لنا ترجمة النص الموافق عليه إلى الهولندية والإنجليزية والعربية، ويحقّ للعضو مراجعة الترجمات؛ وعند الاختلاف، فالعبرة بالنص الذي وافق عليه العضو.",
              },
            ],
          },
          {
            title: { en: "What is never published", nl: "Wat nooit wordt gepubliceerd", ar: "ما لا يُنشر أبداً" },
            body: [
              {
                en: "Verification data and documents are never published. This includes extracts from company registers, identity documents, information on owners and controlling persons, bank details, financial statements, references, contracts, correspondence, and the content of intakes and introductions.",
                nl: "Verificatiegegevens en -documenten worden nooit gepubliceerd. Daaronder vallen uittreksels uit handelsregisters, identiteitsbewijzen, gegevens over eigenaren en zeggenschapshouders, bankgegevens, jaarrekeningen, referenties, contracten, correspondentie en de inhoud van intakes en introducties.",
                ar: "لا تُنشر بيانات التحقق ومستنداته أبداً. ويشمل ذلك المستخرجات من السجلات التجارية، ووثائق الهوية، والمعلومات المتعلقة بالمالكين والأشخاص المسيطرين، والبيانات المصرفية، والقوائم المالية، والمراجع، والعقود، والمراسلات، ومضمون استمارات التعارف وعمليات التعريف.",
              },
            ],
          },
          {
            title: { en: "Stories", nl: "Verhalen", ar: "القصص" },
            body: [
              {
                en: "A story about a member, a transaction or a cooperation is published only with the written approval of every party named in it or recognisable from it. Figures — volumes, values, prices or margins — are published only when every party has approved them.",
                nl: "Een verhaal over een lid, een transactie of een samenwerking wordt alleen gepubliceerd met schriftelijke goedkeuring van iedere partij die erin wordt genoemd of eruit herkenbaar is. Cijfers — volumes, waarden, prijzen of marges — worden alleen gepubliceerd wanneer iedere partij ze heeft goedgekeurd.",
                ar: "لا تُنشر قصة عن عضو أو معاملة أو تعاون إلا بموافقة كتابية من كل طرف يُذكر فيها أو يمكن التعرّف عليه منها. ولا تُنشر الأرقام — الكميات أو القيم المالية أو الأسعار أو هوامش الربح — إلا إذا وافقت عليها الأطراف كافة.",
              },
              {
                en: "The final text is submitted to every party for approval before publication. A party may later withdraw its approval; the story is then removed or adjusted as described in article 5.",
                nl: "De definitieve tekst wordt vóór publicatie aan iedere partij ter goedkeuring voorgelegd. Een partij kan haar goedkeuring later intrekken; het verhaal wordt dan verwijderd of aangepast zoals beschreven in artikel 5.",
                ar: "ويُعرض النص النهائي على كل طرف للموافقة عليه قبل النشر. ويجوز لأي طرف سحب موافقته لاحقاً، فتُحذف القصة أو تُعدَّل على النحو المبيّن في المادة 5.",
              },
            ],
          },
          {
            title: { en: "Correction and withdrawal", nl: "Correctie en intrekking", ar: "التصحيح والسحب" },
            body: [
              {
                en: "A member may correct or withdraw any published information at any time, without giving reasons, by writing to us. We carry out the correction or removal without undue delay, and at the latest within one month.",
                nl: "Een lid kan gepubliceerde informatie op elk moment en zonder opgave van redenen corrigeren of intrekken door ons te schrijven. Wij voeren de correctie of verwijdering zonder onnodige vertraging uit, en uiterlijk binnen één maand.",
                ar: "يجوز للعضو، في أي وقت ودون إبداء أسباب، تصحيح أي معلومات منشورة أو سحبها بمراسلتنا كتابةً. وننفّذ التصحيح أو الحذف دون تأخير لا مبرر له، وفي موعد أقصاه شهر واحد.",
              },
              {
                en: "Withdrawing a publication does not end the membership. We remove the information from every place under our control. Information already sent to members, for instance in DUKAAT Deal Alert, cannot be recalled, and copies held by third parties, such as search engines, are outside our control.",
                nl: "Het intrekken van een publicatie beëindigt het lidmaatschap niet. Wij verwijderen de informatie overal waar wij daarover zeggenschap hebben. Informatie die al aan leden is verzonden, bijvoorbeeld in DUKAAT Deal Alert, kan niet worden teruggehaald, en kopieën bij derden, zoals zoekmachines, vallen buiten onze invloed.",
                ar: "ولا يترتب على سحب المادة المنشورة انتهاءُ العضوية. ونحذف المعلومات من كل موضع يخضع لسيطرتنا. أما المعلومات التي أُرسلت إلى الأعضاء، في DUKAAT Deal Alert مثلاً، فلا يمكن استرجاعها، كما أن النسخ التي يحتفظ بها الغير، كمحركات البحث، خارجة عن سيطرتنا.",
              },
            ],
          },
          {
            title: { en: "Who can see what", nl: "Wie wat kan zien", ar: "حدود الاطلاع على البيانات" },
            body: [
              {
                en: "Published member data is visible only to admitted members, in the member directory, DUKAAT Market and the club’s members-only channels. It is shown outside the club only where the member has approved that in writing, such as for a story on this website, and only as far as the member has approved it for that purpose.",
                nl: "Gepubliceerde ledengegevens zijn alleen zichtbaar voor toegelaten leden, in het Ledenregister, DUKAAT Market en de besloten kanalen van de club. Buiten de club worden zij alleen getoond wanneer het lid daarmee schriftelijk heeft ingestemd, zoals bij een verhaal op deze website, en alleen voor zover het lid ze daarvoor heeft goedgekeurd.",
                ar: "لا يطّلع على بيانات الأعضاء المنشورة إلا الأعضاء المقبولون، في دليل الأعضاء وسوق DUKAAT وقنوات النادي المقصورة على أعضائه. ولا تُعرض خارج النادي إلا إذا وافق العضو على ذلك كتابةً، كما في قصة تُنشر على هذا الموقع، وفي حدود ما وافق عليه لهذا الغرض.",
              },
              {
                en: "Within the club, the level of membership can determine how prominently a profile is shown and when members see certain opportunities. It never makes data visible beyond the circle the member has approved.",
                nl: "Binnen de club kan het lidmaatschapsniveau bepalen hoe prominent een profiel wordt getoond en wanneer leden bepaalde kansen zien. Het maakt gegevens nooit zichtbaar buiten de kring die het lid heeft goedgekeurd.",
                ar: "وداخل النادي، قد يحدّد مستوى العضوية مدى بروز الملف وتوقيت اطّلاع الأعضاء على فرص معيّنة، لكنه لا يُتيح البيانات أبداً خارج الدائرة التي وافق عليها العضو.",
              },
              {
                en: "Members who see published data are bound to treat it confidentially and to use it only for genuine business contact, as set out in our terms and conditions.",
                nl: "Leden die gepubliceerde gegevens zien, zijn gehouden die vertrouwelijk te behandelen en alleen te gebruiken voor werkelijk zakelijk contact, zoals bepaald in onze algemene voorwaarden.",
                ar: "ويلتزم الأعضاء الذين يطّلعون على البيانات المنشورة بالتعامل معها بسرّية، وبعدم استخدامها إلا للتواصل التجاري الحقيقي، وفق ما تنصّ عليه شروطنا وأحكامنا.",
              },
            ],
          },
          {
            title: { en: "Accuracy and responsibility", nl: "Juistheid en verantwoordelijkheid", ar: "الدقة والمسؤولية" },
            body: [
              {
                en: "The member is responsible for the accuracy, completeness and lawfulness of the information it supplies for publication, and for holding the rights to it, including the consent of persons named or shown in images. The member keeps its information current and tells us of changes.",
                nl: "Het lid is verantwoordelijk voor de juistheid, volledigheid en rechtmatigheid van de informatie die het voor publicatie aanlevert, en voor de rechten daarop, waaronder de toestemming van personen die worden genoemd of in beeld zijn. Het lid houdt zijn informatie actueel en meldt ons wijzigingen.",
                ar: "يتحمّل العضو المسؤولية عن صحة المعلومات التي يقدّمها للنشر واكتمالها ومشروعيتها، وعن حيازته الحقوق فيها، بما في ذلك موافقة الأشخاص الذين يُذكرون فيها أو يظهرون في الصور. ويُبقي العضو معلوماته محدّثة ويُبلغنا بأي تغيير فيها.",
              },
              {
                en: "We may edit a text for length, form and language, and submit the result for approval. We may refuse or remove information that is inaccurate, misleading or unlawful, that infringes the rights of others, or that could harm the club or its members.",
                nl: "Wij kunnen een tekst inkorten of redigeren naar vorm en taal, en leggen het resultaat ter goedkeuring voor. Wij kunnen informatie weigeren of verwijderen die onjuist, misleidend of onrechtmatig is, die inbreuk maakt op rechten van anderen, of die de club of haar leden kan schaden.",
                ar: "ويجوز لنا أن نحرّر النص من حيث الطول والشكل واللغة، على أن نعرض الصيغة المحرَّرة للموافقة عليها. كما يجوز لنا رفض أي معلومات أو حذفها إذا كانت غير صحيحة أو مضلِّلة أو غير مشروعة، أو تنتهك حقوق الغير، أو قد تضرّ بالنادي أو بأعضائه.",
              },
              {
                en: "Publication does not in itself mean that DUKAAT has verified or endorses the information.",
                nl: "Publicatie betekent op zichzelf niet dat DUKAAT de informatie heeft geverifieerd of aanbeveelt.",
                ar: "ولا يعني النشر بذاته أن DUKAAT قد تحقّق من المعلومات أو أنه يوصي بها.",
              },
            ],
          },
          {
            title: { en: "Personal data and contact", nl: "Persoonsgegevens en contact", ar: "البيانات الشخصية والتواصل" },
            body: [
              {
                en: "Personal data of contact persons is processed in accordance with the GDPR, as described in our Privacy statement. Contact persons may also exercise their own rights with us directly.",
                nl: "Persoonsgegevens van contactpersonen worden verwerkt in overeenstemming met de AVG, zoals beschreven in onze privacyverklaring. Contactpersonen kunnen hun eigen rechten ook rechtstreeks bij ons uitoefenen.",
                ar: "تُعالَج البيانات الشخصية لمسؤولي الاتصال وفقاً للائحة العامة لحماية البيانات (GDPR)، على النحو المبيّن في بيان الخصوصية. ويحقّ لمسؤولي الاتصال كذلك ممارسة حقوقهم لدينا مباشرةً.",
              },
              {
                en: "For corrections, withdrawals and questions about these terms, write to contact@dukaatbusinessclub.com, to your contact at DUKAAT, or by post to Stichting Nederlands-Arabische Handelskamer, trading as DUKAAT, Kelvinring 11, 2952 BG Alblasserdam, the Netherlands.",
                nl: "Voor correcties, intrekkingen en vragen over deze voorwaarden schrijft u naar contact@dukaatbusinessclub.com, naar uw contactpersoon bij DUKAAT, of per post naar Stichting Nederlands-Arabische Handelskamer, handelend onder de naam DUKAAT, Kelvinring 11, 2952 BG Alblasserdam, Nederland.",
                ar: "للتصحيح أو السحب أو الاستفسار عن هذه الشروط، راسلنا على contact@dukaatbusinessclub.com، أو راسل الشخص الذي تتواصل معه لدى DUKAAT، أو اكتب إلينا بالبريد العادي على العنوان: Stichting Nederlands-Arabische Handelskamer، التي تمارس نشاطها تحت الاسم التجاري DUKAAT، Kelvinring 11, 2952 BG Alblasserdam، هولندا.",
              },
              {
                en: "These terms are published in Dutch, English and Arabic. Where the versions differ, the Dutch text prevails.",
                nl: "Deze voorwaarden zijn gepubliceerd in het Nederlands, Engels en Arabisch. Bij verschil tussen de versies is de Nederlandse tekst beslissend.",
                ar: "تُنشر هذه الشروط بالهولندية والإنجليزية والعربية، وعند وجود أي اختلاف بين النسخ اللغوية يكون النص الهولندي هو المرجع.",
              },
            ],
          },
        ],
      },
    ],
  },
};
