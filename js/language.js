// Language configuration
import { products as skProducts } from '../data/products.js';
import { products as enProducts } from '../data/products.en.js';
import { displayProducts } from '../script.js';

export const translations = {
    en: {
        // Page Title
        'page-title': 'Orieshock - Premium Nut Products',

        // Navigation
        'about': 'About Us',
        'history': 'History',
        'products': 'Products',
        'reviews': 'Reviews',
        'contact': 'Contact',

        // Slide Navigation
        'slide-prev': '❮',
        'slide-next': '❯',

        // Hero Section
        'hero-title': 'Premium Nut Products',
        'hero-subtitle': 'Discover our handcrafted selection of premium nut butters and snacks',
        'hero-cta': 'Explore Products',
        'hero-title2': '100% Natural Ingredients',
        'hero-subtitle2': 'Made with the finest quality nuts, nothing else',
        'hero-cta2': 'Learn More',
        'hero-title3': 'Handcrafted Excellence',
        'hero-subtitle3': 'Small batch production for the perfect taste',
        'hero-cta3': 'Our Story',
        'hero-title4': 'Local Production',
        'hero-subtitle4': 'Made in Slovakia with love',
        'hero-cta4': 'Contact Us',

        // About Section
        'about-title': 'ABOUT US',
        'about-who': 'WHO WE ARE',
        'about-who-text': 'A company from Trnava, whose history dates back to 2020. In our offer you will find nut creams, packaged nuts, packaged chocolates, granola, oatmeal, coffee and freeze-dried fruit. We are constantly working on new things, so you can expect new products soon :)',
        'about-goal': 'OUR GOAL',
        'about-goal-text': 'The goal of ORIESHOCK is to produce products that have quality composition and amazing taste. We follow the motto: "Don\'t make what you wouldn\'t put in your mouth yourself."',
        'about-values': 'OUR VALUES',
        'about-values-text': 'Our values are not just clichés for us. QUALITY, RESPECT AND SUSTAINABILITY are our top priorities and we follow them in all areas of our business.',
        'about-team': 'OUR TEAM',
        'about-team-text': 'Currently, our in-house team consists of amazing people who are on the same wavelength and share a common passion for Orieshock. David and Martin - executives and bosses in one, who are responsible for the development of our company and its strategic direction. Our Pali, who is in charge of production. This person creates our products and is responsible for the entire production process of our Orieshock products. Dominika is in charge of social media and marketing and is willing to help anyone with any questions about our products.',

        // History Section
        'history-title': 'HISTORY',
        'history-2020': 'The Beginning',
        'history-2020-text': 'We officially founded Orieshock in 2021, when we sat down and agreed that it was time to make nut butters according to our taste. The carousel of arrangements, planning, brainstorming and ideas began. After several months, we managed to produce our first product Orieshock Peanut.',
        'history-2021': 'First Product Launch',
        'history-2021-text': 'We had a clear concept in mind of what direction we wanted to take and what products we wanted to add to our portfolio. Orieshock peanut started the series of 100% versions of nut butters. Gradually, we added Orieshock almond, Orieshock cashew, Orieshock hazelnut, Orieshock pistachio and Orieshock pecan.',
        'history-2022': 'Expansion',
        'history-2022-text': 'After the success of 100% nut butters, we realized our next step - the production of chocolate versions. We chose quality Belgian chocolate (white and dark), which we mixed with nuts and created highly popular and addictive products.',
        'history-2023': 'Innovation',
        'history-2023-text': 'Our next step is the production of specialties that customers are asking for more and more and at the same time are exceptional in their taste and composition. We are still working and coming up with new things, you have something to look forward to :).',

        // Products Section
        'products-title': 'OUR PRODUCTS',
        'filter-all': 'All',
        'filter-butters': 'Butters',
        'filter-nuts': 'Nuts',
        'filter-other': 'Fruits, Granola, Chocolate, Coffee',
        'search-placeholder': 'Search products...',
        'buy': 'Buy',
        'viewDetails': 'Read More',
        'show-more-btn': 'Show More',
        '1': {
            'description': 'I am another specialty from the Orieshock workshop. I am a very sweet treat suitable for both adults and children. You don\'t have to avoid me even if you\'re vegan. I am a gluten-free and vegan product. If you need to satisfy your sweet tooth, I\'ll be happy to help. If you have nothing to spread on your Christmas cake, roll, pancake or waffle, I am at your disposal. I am here for you and ready to make your life happy and sweet.'
        },
        '2': {
            'description': 'I am a specific Orieshock product. With my taste, I am suitable for every coffee and chocolate lover. After the first spoonful, you\'ll feel a pleasantly sweet taste, followed by a calming coffee flavor roasted in the Trnava roastery. I am your pleasant start to the day or sweet ending to lunch. I am unique, I am Orieshock coffee.'
        },
        '3': {
            'description': 'I am an Orieshock specialty and with my amazing and balanced taste, I can satisfy more than one taste bud. If you love coconut, white chocolate, almonds and mango, definitely don\'t pass me by. All you need is a spoon and after the first bite, I\'ll evoke a feeling of happiness in you. I am simply TOP, I am Orieshock coconut.'
        },
        '4': {
            'description': 'If you love the true taste of almonds, definitely try me. I promise you that on your tongue you\'ll feel only almonds. I contain a lot of protein. My consistency is thinner and therefore I am suitable for example for pancakes, bread or just on a spoon. I am 100% pure nut butter, I am Orieshock Almond.'
        },
        '5': {
            'description': 'If you prefer the taste of cashew nuts, choose me. I am thicker than my brothers because I contain less fat. You can add me to porridge, cake, yogurt or you can just eat me by the spoonful. I am also pure 100% nut butter and contain only cashew nuts. I am highly addictive, I am Orieshock Cashew.'
        },
        '6': {
            'description': 'I am defined by the true, authentic taste of hazelnuts. I am more bitter and thinner because the hazelnuts I am made from contain a lot of natural fat. This makes my consistency thinner. You can use me as a filling for pancakes, spread on bread, add to yogurt or porridge, or just eat me. I am a delicacy, I am Orieshock Hazelnut.'
        },
        '7': {
            'description': 'We are one of the healthiest nuts and bring you several benefits, not only for your body but also for your mind. We positively affect the brain, taste excellent, are quality and healthy. If you want to please your body and soul, you are in the right place.'
        },
        '8': {
            'description': 'If you\'re tired of classic peanut butter, love crunching and prefer healthy fats, don\'t hesitate and add us to your cart. We come from Argentina, have lots of protein and are full of healthy fats.'
        },
        '9': {
            'description': 'We are unsalted, air-roasted almonds from California that will please any almond lover. We contain lots of healthy fats and protein.'
        },
        '10': {
            'description': 'Orieshock Pecan Granola with a high proportion of quality and healthy ingredients is the ideal choice for breakfast. In combination with Orieshock nut butter and Orieshock freeze-dried fruit, you can make a powerful healthy meal that will start your day.'
        },
        '11': {
            'description': 'If you are a chocolate lover and can\'t control yourself at the first bite, we\'ll solve your dilemma. We are small medallions of quality white Belgian chocolate, so you can dose us according to your needs. Whether you eat 3 medallions or 50, we leave it up to you. The most important thing is to be happy, and chocolate will definitely guarantee that.'
        },
        '12': {
            'description': 'Do you love fruit but don\'t always find the right, fresh and tasty one? This product will solve your dilemma. Raspberries can be added to any meal, for example to yogurt or porridge for breakfast. After soaking, they regain their original volume without losing taste and original nutrients. In combination with granola and Orieshock nut creams, you\'ll get a tasty and healthy meal in no time.'
        },

        // Reviews Section
        'reviews-title': 'CUSTOMER REVIEWS',
        'swipe-instruction': 'Swipe to see more reviews',

        // Contact Section
        'contact-title': 'CONTACT US',
        'contact-subtitle': 'Get in touch with us',
        'contact-phone': '+421 902 144 556',
        'contact-phone2': '+421 948 308 126',
        'contact-email': 'INFO@ORIESHOCK.EU',
        'contact-address': 'HALENÁRSKA 9380/18A, TRNAVA 917 01',

        // Footer
        'footer-follow': 'Follow Us',
        'footer-quick-links': 'Quick Links',
        'footer-about': 'About Us',
        'footer-products': 'Products',
        'footer-contact': 'Contact',
        'footer-copyright': '© Orieshock s.r.o. All rights reserved.',
        'footer-facebook': 'Facebook',
        'footer-instagram': 'Instagram',
        'footer-twitter': 'Twitter',
        'footer-linkedin': 'LinkedIn',

        // Cookie Consent
        'cookie-message': 'We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
        'cookie-accept': 'Accept All',
        'cookie-reject': 'Reject All',
        'cookie-customize': 'Customize',
        'cookie-settings': 'Cookie Settings',
        'cookie-manage': 'Manage your cookie preferences below.',
        'cookie-necessary': 'Necessary Cookies',
        'cookie-necessary-desc': 'Required for the website to function properly.',
        'cookie-analytics': 'Analytics Cookies',
        'cookie-analytics-desc': 'Help us understand how visitors interact with our website.',
        'cookie-marketing': 'Marketing Cookies',
        'cookie-marketing-desc': 'Used to deliver personalized advertisements.',
        'cookie-save': 'Save Preferences',
        'cookie-close': 'Close',

        // Rating
        'rating': 'Rating',

        'nav-about': 'About Us',
        'nav-history': 'History',
        'nav-products': 'Products',
        'nav-reviews': 'Reviews',
        'nav-contact': 'Contact',
        'viewMore': 'Show More'
    },
    sk: {
        // Page Title
        'page-title': 'Orieshock - Prémiové Orieškové Produkty',

        // Navigation
        'about': 'O nás',
        'history': 'História',
        'products': 'Produkty',
        'reviews': 'Recenzie',
        'contact': 'Kontakt',

        // Slide Navigation
        'slide-prev': '❮',
        'slide-next': '❯',

        // Hero Section
        'hero-title': 'Prémiové Orieškové Produkty',
        'hero-subtitle': 'Objavte našu ručne vyrábanú selekciu prémiových orechových masiel a pochúťok',
        'hero-cta': 'Preskúmať Produkty',
        'hero-title2': '100% Prírodné Suroviny',
        'hero-subtitle2': 'Vyrobené z najkvalitnejších orechov, nič iné',
        'hero-cta2': 'Dozvedieť sa Viac',
        'hero-title3': 'Ručne Vyrábaná Dokonalosť',
        'hero-subtitle3': 'Malovýroba pre dokonalú chuť',
        'hero-cta3': 'Naša História',
        'hero-title4': 'Lokálna Výroba',
        'hero-subtitle4': 'Vyrobené na Slovensku s láskou',
        'hero-cta4': 'Kontaktujte Nás',

        // About Section
        'about-title': 'O NÁS',
        'about-who': 'KTO SME',
        'about-who-text': 'Trnavská firma, ktorej história sa datuje od roku 2020. V našej ponuke nájdeš orechové krémy, balené orechy, balené čokoládky, granoly, ovsené vločky, kávu či lyofilizované ovocie. Stále pracujeme na nových veciach takže čoskoro môžeš očakávať nové produkty :)',
        'about-goal': 'NÁŠ CIEĽ',
        'about-goal-text': 'Cieľom firmy ORIESHOCK je vyrábať výrobky, ktoré majú kvalitné zloženie a úžasnú chuť. Riadime sa heslom: "Nevyrábaj to, čo by si sám nedal do úst".',
        'about-values': 'NAŠE HODNOTY',
        'about-values-text': 'Naše hodnoty nie sú pre nás iba také klišé. KVALITA, REŠPEKT A UDRŽATEĽNOSŤ sú u nás na prvom mieste a riadime sa nimi vo všetkých oblastiach nášho podnikania.',
        'about-team': 'NÁŠ TÍM',
        'about-team-text': 'V súčasnosti tvoria náš in house tím úžasní ľudia, ktorí sú na rovnakej vlne a majú spoločnú vášeň pre Orieshock. David a Martin - konatelia a šéfovia v jednom, ktorí majú na starosti rozvoj našej firmy a jej strategické smerovanie. Náš Pali, ktorý ma na starosti výrobu. Tento človek tvorí naše produkty a je zodpovedný za celý chod výroby našich produktov Orieshock. Dominika má na starosti sociálne siete a marketing a je ochotná pomôcť každému, kto má akékoľvek otázky ohľadom našich produktov.',

        // History Section
        'history-title': 'HISTÓRIA',
        'history-2020': 'Začiatok',
        'history-2020-text': 'Orieshock sme oficiálne založili v roku 2021, kedy sme si sadli a zhodli sme sa, že je na čase vyrábať orechové maslá podľa nášho gusta. Začal sa kolotoč vybavovačiek, plánovania, brainstormingov a vymýšľačiek. Po niekoľkých mesiacoch sa nám podarilo vyrobiť náš prvý produkt Orieshock Arašidový.',
        'history-2021': 'Prvý Produkt',
        'history-2021-text': 'V hlave sme mali jasný koncept, ktorým sa chceme uberať a aké produkty chceme do portfólia pridať. Orieshock arašidový zahájil sériu 100% verzií orechových masiel. Postupne sme pridali Orieshock mandľový, Orieshock kešu, Orieshock lieskový, Orieshock pistáciový a Orieshock pekanový.',
        'history-2022': 'Rozšírenie',
        'history-2022-text': 'Po úspechu 100% orechových masiel sme realizovali náš ďalší krok - výrobu čokoládových verzií. Zvolili sme kvalitnú belgickú čokoládu (bielu a horkú), ktorú sme zmiešali s orechmi a vznikli vysoko obľúbené a prudko návykové produkty.',
        'history-2023': 'Inovácie',
        'history-2023-text': 'Našim ďalším krokom je výroba špecialít, ktoré si zákazníci stále viac a viac pýtajú a zároveň sú výnimočné svojou chuťou a zložením. Stále pracujeme a vymýšľame nové veci, máte sa na čo tešiť :).',

        // Products Section
        'products-title': 'NAŠE PRODUKTY',
        'filter-all': 'Všetko',
        'filter-butters': 'Maslá',
        'filter-nuts': 'Orechy',
        'filter-other': 'Ovocie, Granola, Čokoláda, Káva',
        'search-placeholder': 'Hľadať produkty...',
        'buy': 'Nakupuj',
        'viewDetails': 'Zobraziť viac',
        'show-more-btn': 'Zobraziť viac',
        '1': {
            'description': 'Som ďalšia špecialitka z dielne Orieshock. Som veľmi sladučká pochúťka vhodná ako pre dospelákov tak aj pre deti. Nemusíš ma obchádzať ani keď si vegán. Som bezlepkový a vegánsky produkt. Ak budeš potrebovať utíšiť chuť na sladké, s radosťou ti pomôžem. Ak nebudeš mat čo natrieť na vianočku, rožok, palacinku či lievance, som ti k dispozícii. Som tu pre teba a som pripravená spraviť tvoj život šťastným a sladkým.'
        },
        '2': {
            'description': 'Som špecifický Orieshock produkt. Svojou chuťou som vhodný pre každého milovníka kávy a čokolády. Po prvej lyžičke pocítiš príjemne sladučkú chuť, ktorú vystrieda ukludňujúca chuť kávy upraženej v trnavskej pražiarni. Som tvoj príjemný štart do dňa či sladká bodka za obedom. Som jedinečný, som Orieshock kávový.'
        },
        '3': {
            'description': 'Som Orieshock špecialitka a svojou úžasnou a vyváženou chuťou dokážem uspokojiť nejeden chuťový pohár. Ak miluješ kokos, bielu čokoládu, mandle a mango, určite ma neobíď. Stačí ti len lyžička a po prvom súste v tebe vyvolám pocit šťastia. Som proste TOP, som Orieshock kokosový.'
        },
        '4': {
            'description': 'Ak miluješ pravú chuť mandlí, určite ma vyskúšaj. Sľubujem ti, že na tvojom jazyku pocítiš len mandle. Obsahujem veľa proteínov. Moja konzistencia je redšia a preto som vhodný napríklad na palacinky, chlieb či len na lyžičku. Som 100% čisté orechové maslo, som Orieshock mandľový.'
        },
        '5': {
            'description': 'Ak preferuješ chuť kešu orechov, vyber si ma. Som hustejší ako moji bratia, pretože obsahujem menej tuku. Môžeš ma pridať do kaše, koláča, jogurtu alebo ma môžeš len jesť lyžičkou. Som tiež čisté 100% orechové maslo a obsahujem len kešu orechy. Som vysoko návykový, som Orieshock kešu.'
        },
        '6': {
            'description': 'Som definovaný pravou, autentickou chuťou lieskových orechov. Som horkejší a redší, pretože lieskové orechy, z ktorých som vyrobený, obsahujú veľa prirodzeného tuku. To robí moju konzistenciu redšou. Môžeš ma použiť ako náplň do palaciniek, natrieť na chlieb, pridať do jogurtu či kaše, alebo ma len jesť. Som pochúťka, som Orieshock lieskový.'
        },
        '7': {
            'description': 'Sme jeden z najzdravších orechov a prinášame ti niekoľko benefitov, nielen pre tvoje telo, ale aj pre tvoju myseľ. Pozitívne ovplyvňujeme mozog, chutíme výborne, sme kvalitní a zdraví. Ak chceš potešiť svoje telo aj dušu, si na správnom mieste.'
        },
        '8': {
            'description': 'Ak si unavený z klasického arašidového masla, miluješ chrumkanie a preferuješ zdravé tuky, neváhaj a pridaj nás do košíka. Pochádzame z Argentíny, obsahujeme veľa proteínov a sme plní zdravých tukov.'
        },
        '9': {
            'description': 'Sme nesolené, vzduchom pražené mandle z Kalifornie, ktoré potešia každého milovníka mandlí. Obsahujeme veľa zdravých tukov a proteínov.'
        },
        '10': {
            'description': 'Orieshock pekanová granola s vysokým podielom kvalitných a zdravých surovín je ideálna voľba na raňajky. V kombinácii s Orieshock orechovým maslom a Orieshock lyofilizovaným ovocím môžeš vytvoriť silný zdravý pokrm, ktorý ti začne deň.'
        },
        '11': {
            'description': 'Ak si milovník čokolády a pri prvom kúsku sa nevieš ovládať, vyriešime tvoj dilema. Sme malé medailónky kvalitnej belgickej bielej čokolády, takže nás môžeš dávkovať podľa svojich potrieb. Či zješ 3 medailónky alebo 50, nechávame na tebe. Najdôležitejšie je byť šťastný a čokoláda ti to určite zabezpečí.'
        },
        '12': {
            'description': 'Miluješ ovocie ale nie vždy nájdeš to správne, čerstvé a chutné? Tento produkt vyrieši tvoj dilema. Maliny môžeš pridať do akéhokoľvek jedla, napríklad do jogurtu či kaše na raňajky. Po namočení získajú svoj pôvodný objem bez straty chuti a pôvodných živín. V kombinácii s granolou a Orieshock orechovými krémmi máš za chvíľu chutný a zdravý pokrm.'
        },

        // Reviews Section
        'reviews-title': 'RECENZIE NAŠICH KLIENTOV',
        'swipe-instruction': 'Potiahnite pre viac recenzií',

        // Contact Section
        'contact-title': 'KONTAKTUJTE NÁS',
        'contact-subtitle': 'Ozvite sa nám',
        'contact-phone': '+421 902 144 556',
        'contact-phone2': '+421 948 308 126',
        'contact-email': 'INFO@ORIESHOCK.EU',
        'contact-address': 'HALENÁRSKA 9380/18A, TRNAVA 917 01',
        'contact-form-name': 'Meno',
        'contact-form-email': 'Email',
        'contact-form-message': 'Správa',
        'contact-form-submit': 'Odoslať Správu',

        // Footer
        'footer-follow': 'Sledujte Nás',
        'footer-quick-links': 'Rýchle Odkazy',
        'footer-about': 'O nás',
        'footer-products': 'Produkty',
        'footer-contact': 'Kontakt',
        'footer-copyright': '© Orieshock s.r.o. Všetky práva vyhradené.',
        'footer-facebook': 'Facebook',
        'footer-instagram': 'Instagram',
        'footer-twitter': 'Twitter',
        'footer-linkedin': 'LinkedIn',

        // Cookie Consent
        'cookie-message': 'Používame cookies na zlepšenie vášho prehliadania a analýzu nášho návštevníctva. Kliknutím na "Prijať všetko" súhlasíte s používaním cookies.',
        'cookie-accept': 'Prijať všetko',
        'cookie-reject': 'Odmietnuť všetko',
        'cookie-customize': 'Prispôsobiť',
        'cookie-settings': 'Nastavenia Cookies',
        'cookie-manage': 'Spravujte svoje preferencie cookies nižšie.',
        'cookie-necessary': 'Nevyhnutné Cookies',
        'cookie-necessary-desc': 'Potrebné pre správne fungovanie webovej stránky.',
        'cookie-analytics': 'Analytické Cookies',
        'cookie-analytics-desc': 'Pomáhajú nám pochopiť, ako návštevníci interagujú s našou webovou stránkou.',
        'cookie-marketing': 'Marketingové Cookies',
        'cookie-marketing-desc': 'Používané na poskytovanie personalizovaných reklám.',
        'cookie-save': 'Uložiť preferencie',
        'cookie-close': 'Zavrieť',

        // Rating
        'rating': 'Hodnotenie',

        'nav-about': 'O nás',
        'nav-history': 'História',
        'nav-products': 'Produkty',
        'nav-reviews': 'Recenzie',
        'nav-contact': 'Kontakt',
        'viewMore': 'Zobraziť viac'
    }
};

// Function to update text content based on selected language
function updateLanguage(lang) {
    // Update HTML lang attribute and page title
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    document.title = translations[lang]['page-title'];
    
    // Dispatch language change event
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));

    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'stores.html') {
            link.textContent = translations[lang]['nav-stores'];
        } else if (href.includes('index.html')) {
            const key = href.split('#')[1] || 'about';
            if (translations[lang][`nav-${key}`]) {
                link.textContent = translations[lang][`nav-${key}`];
            }
        } else if (href.startsWith('#')) {
            const key = href.substring(1);
            if (translations[lang][`nav-${key}`]) {
                link.textContent = translations[lang][`nav-${key}`];
            }
        }
    });

    // Update slide navigation buttons
    const prevBtn = document.querySelector('.slide-btn.prev');
    const nextBtn = document.querySelector('.slide-btn.next');
    if (prevBtn) prevBtn.textContent = translations[lang]['slide-prev'];
    if (nextBtn) nextBtn.textContent = translations[lang]['slide-next'];

    // Update hero section
    const heroTitles = document.querySelectorAll('.hero-content h1');
    const heroSubtitles = document.querySelectorAll('.hero-content p');
    const heroCtas = document.querySelectorAll('.hero-content .cta-button');

    if (heroTitles[0]) heroTitles[0].textContent = translations[lang]['hero-title'];
    if (heroSubtitles[0]) heroSubtitles[0].textContent = translations[lang]['hero-subtitle'];
    if (heroCtas[0]) heroCtas[0].textContent = translations[lang]['hero-cta'];
    if (heroTitles[1]) heroTitles[1].textContent = translations[lang]['hero-title2'];
    if (heroSubtitles[1]) heroSubtitles[1].textContent = translations[lang]['hero-subtitle2'];
    if (heroCtas[1]) heroCtas[1].textContent = translations[lang]['hero-cta2'];
    if (heroTitles[2]) heroTitles[2].textContent = translations[lang]['hero-title3'];
    if (heroSubtitles[2]) heroSubtitles[2].textContent = translations[lang]['hero-subtitle3'];
    if (heroCtas[2]) heroCtas[2].textContent = translations[lang]['hero-cta3'];
    if (heroTitles[3]) heroTitles[3].textContent = translations[lang]['hero-title4'];
    if (heroSubtitles[3]) heroSubtitles[3].textContent = translations[lang]['hero-subtitle4'];
    if (heroCtas[3]) heroCtas[3].textContent = translations[lang]['hero-cta4'];

    // Update about section
    const aboutTitle = document.querySelector('#about h2');
    if (aboutTitle) aboutTitle.textContent = translations[lang]['about-title'];

    const aboutSections = document.querySelectorAll('.about-content > div');
    aboutSections.forEach(section => {
        const heading = section.querySelector('h3');
        const paragraph = section.querySelector('p');
        if (heading && paragraph) {
            const sectionType = section.className.split(' ')[0].replace('about-', '');
            if (sectionType === 'text') {
                heading.textContent = translations[lang]['about-who'];
                paragraph.textContent = translations[lang]['about-who-text'];
            } else {
                heading.textContent = translations[lang][`about-${sectionType}`];
                paragraph.textContent = translations[lang][`about-${sectionType}-text`];
            }
        }
    });

    // Update history section
    const historyTitle = document.querySelector('#history h2');
    if (historyTitle) historyTitle.textContent = translations[lang]['history-title'];

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const year = item.querySelector('.year');
        const heading = item.querySelector('.content h3');
        const paragraph = item.querySelector('.content p');
        if (year && heading && paragraph) {
            const yearKey = year.textContent.trim();
            heading.textContent = translations[lang][`history-${yearKey}`];
            paragraph.textContent = translations[lang][`history-${yearKey}-text`];
        }
    });

    // Update products section
    const productsTitle = document.querySelector('#products h2');
    if (productsTitle) productsTitle.textContent = translations[lang]['products-title'];

    // Update search placeholder
    const searchInput = document.querySelector('[data-translate="searchPlaceholder"]');
    if (searchInput) {
        searchInput.placeholder = translations[lang]['search-placeholder'];
    }

    const showMoreBtn = document.getElementById('showMoreBtn');
    if (showMoreBtn) {
        showMoreBtn.textContent = translations[lang]['show-more-btn'];
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        if (filter === 'all') {
            btn.textContent = translations[lang]['filter-all'];
        } else if (filter === 'butters') {
            btn.textContent = translations[lang]['filter-butters'];
        } else if (filter === 'nuts') {
            btn.textContent = translations[lang]['filter-nuts'];
        } else if (filter === 'granola') {
            btn.textContent = translations[lang]['filter-other'];
        }
    });

    // Update reviews section
    const reviewsTitle = document.querySelector('#reviews h2');
    if (reviewsTitle) reviewsTitle.textContent = translations[lang]['reviews-title'];

    // Update contact section
    const contactTitle = document.querySelector('#contact h2');
    if (contactTitle) contactTitle.textContent = translations[lang]['contact-title'];

    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        const subtitle = contactInfo.querySelector('h3');
        const phone = contactInfo.querySelector('p:nth-child(2)');
        const phone2 = contactInfo.querySelector('p:nth-child(3)');
        const email = contactInfo.querySelector('p:nth-child(4)');
        const address = contactInfo.querySelector('p:nth-child(5)');
        
        if (subtitle) subtitle.textContent = translations[lang]['contact-subtitle'];
        if (phone) phone.innerHTML = `<i class="fas fa-phone"></i> ${translations[lang]['contact-phone']}`;
        if (phone2) phone2.innerHTML = `<i class="fas fa-phone"></i> ${translations[lang]['contact-phone2']}`;
        if (email) email.innerHTML = `<i class="fas fa-envelope"></i> ${translations[lang]['contact-email']}`;
        if (address) address.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${translations[lang]['contact-address']}`;
    }

    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            const type = input.getAttribute('type') || 'message';
            input.setAttribute('placeholder', translations[lang][`contact-form-${type}`]);
        });
        const submitButton = contactForm.querySelector('button[type="submit"]');
        if (submitButton) submitButton.textContent = translations[lang]['contact-form-submit'];
    }

    // Update footer
    const footerElements = document.querySelectorAll('[data-translate^="footer-"]');
    footerElements.forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        if (translationKey) {
            const keys = translationKey.split('.');
            let translation = translations[lang];
            for (const key of keys) {
                translation = translation[key];
            }
            if (translation) {
                element.textContent = translation;
            }
        }
    });

    // Update social media titles
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        const platform = link.querySelector('i').className.split('-')[1];
        const titleKey = `footer-${platform}`;
        if (translations[lang][titleKey]) {
            link.setAttribute('title', translations[lang][titleKey]);
        }
    });

    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) copyright.textContent = translations[lang]['footer-copyright'];

    // Update cookie consent
    const cookieContent = document.querySelector('.cookie-content p');
    if (cookieContent) cookieContent.textContent = translations[lang]['cookie-message'];

    const cookieButtons = document.querySelectorAll('.cookie-btn');
    cookieButtons.forEach(btn => {
        const type = btn.classList.contains('accept') ? 'accept' : 
                    btn.classList.contains('reject') ? 'reject' : 'customize';
        btn.textContent = translations[lang][`cookie-${type}`];
    });

    const cookieSettings = document.querySelector('.cookie-settings-content');
    if (cookieSettings) {
        const heading = cookieSettings.querySelector('h2');
        const description = cookieSettings.querySelector('p');
        if (heading) heading.textContent = translations[lang]['cookie-settings'];
        if (description) description.textContent = translations[lang]['cookie-manage'];
    }

    // Update cookie settings
    const cookieOptions = document.querySelectorAll('.cookie-option');
    cookieOptions.forEach(option => {
        const label = option.querySelector('span[data-translate]');
        const description = option.querySelector('p[data-translate]');
        if (label) {
            const labelKey = label.getAttribute('data-translate');
            label.textContent = translations[lang][labelKey];
        }
        if (description) {
            const descKey = description.getAttribute('data-translate');
            description.textContent = translations[lang][descKey];
        }
    });

    // Update cookie settings buttons
    const cookieSettingsButtons = document.querySelectorAll('.cookie-settings-buttons button');
    cookieSettingsButtons.forEach(btn => {
        const translationKey = btn.getAttribute('data-translate');
        if (translationKey) {
            btn.textContent = translations[lang][translationKey];
        }
    });

    // Update cookie consent buttons
    const cookieConsentButtons = document.querySelectorAll('.cookie-buttons button');
    cookieConsentButtons.forEach(btn => {
        const translationKey = btn.getAttribute('data-translate');
        if (translationKey) {
            btn.textContent = translations[lang][translationKey];
        }
    });

    // Update cookie settings modal title and description
    const cookieSettingsTitle = document.querySelector('.cookie-settings-content h2[data-translate]');
    const cookieSettingsDesc = document.querySelector('.cookie-settings-content > p[data-translate]');
    if (cookieSettingsTitle) {
        cookieSettingsTitle.textContent = translations[lang][cookieSettingsTitle.getAttribute('data-translate')];
    }
    if (cookieSettingsDesc) {
        cookieSettingsDesc.textContent = translations[lang][cookieSettingsDesc.getAttribute('data-translate')];
    }

    // Update cookie consent message
    const cookieMessage = document.querySelector('.cookie-content p[data-translate]');
    if (cookieMessage) {
        cookieMessage.textContent = translations[lang][cookieMessage.getAttribute('data-translate')];
    }

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Save language preference
    localStorage.setItem('preferredLanguage', lang);

    // Update read more buttons
    const readMoreTexts = document.querySelectorAll('[data-translate="viewDetails"]');
    readMoreTexts.forEach(text => {
        text.textContent = translations[lang]['viewDetails'];
    });

    // Update buy buttons
    const buyButtons = document.querySelectorAll('[data-translate="buy"]');
    buyButtons.forEach(button => {
        button.textContent = translations[lang]['buy'];
    });

    // Update input placeholders
    const inputs = document.querySelectorAll('input[data-translate], textarea[data-translate]');
    inputs.forEach(input => {
        const translationKey = input.getAttribute('data-translate');
        if (translationKey) {
            const keys = translationKey.split('.');
            let translation = translations[lang];
            for (const key of keys) {
                translation = translation[key];
            }
            if (translation) {
                input.placeholder = translation;
            }
        }
    });

    // Update product descriptions and names
    const productCards = document.querySelectorAll('.product-card');
    const products = lang === 'en' ? enProducts : skProducts;
    
    productCards.forEach(card => {
        const productId = card.getAttribute('data-product-id');
        if (productId) {
            const product = products.find(p => p.id === parseInt(productId));
            if (product) {
                const nameElement = card.querySelector('.product-name');
                const descriptionElement = card.querySelector('.product-description');
                if (nameElement) nameElement.textContent = product.name;
                if (descriptionElement) descriptionElement.textContent = product.description;
            }
        }
    });

    // Update rating text
    const ratingElements = document.querySelectorAll('div.rating p');
    ratingElements.forEach(element => {
        element.textContent = translations[lang]['rating'];
    });
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    const storedLang = localStorage.getItem('preferredLanguage') || 'sk'; // Default to SK if no preference stored
    
    // Set initial language
    updateLanguage(storedLang);
    
    // Update button states
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === storedLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Add click handlers
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default behavior
            const lang = btn.getAttribute('data-lang');
            localStorage.setItem('preferredLanguage', lang);
            
            // Update button states
            langButtons.forEach(b => {
                if (b.getAttribute('data-lang') === lang) {
                    b.classList.add('active');
                } else {
                    b.classList.remove('active');
                }
            });

            // Update all translatable elements immediately
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[lang] && translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });

            // Update input placeholders
            document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
                const key = element.getAttribute('data-translate-placeholder');
                if (translations[lang] && translations[lang][key]) {
                    element.placeholder = translations[lang][key];
                }
            });

            // Update read more and buy buttons immediately
            document.querySelectorAll('.read-more-text').forEach(element => {
                element.textContent = translations[lang]['viewDetails'];
            });
            document.querySelectorAll('.buy-btn').forEach(element => {
                element.textContent = translations[lang]['buy'];
            });

            // Update language and re-display products
            updateLanguage(lang);
            const currentCategory = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
            const searchQuery = document.querySelector('.search-input')?.value || '';
            displayProducts(currentCategory, searchQuery);
        });
    });

    // Ensure language is applied when navigating back to the page
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            const currentLang = localStorage.getItem('preferredLanguage') || 'sk';
            updateLanguage(currentLang);
            
            // Update button states
            langButtons.forEach(btn => {
                if (btn.getAttribute('data-lang') === currentLang) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }
    });
}); 