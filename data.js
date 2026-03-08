// ============================================================
// COPTIC ORTHODOX CALENDAR 2026 — DATA
// ============================================================

const CALENDAR_DATA = [
    // ============================================================
    // JANUARY — Kiahk 23 to Tobe 23
    // ============================================================
    {
        month: 'January',
        year: 2026,
        firstWeekday: 4, // Thursday (0=Sun)
        days: 31,
        copticStart: { month: 'Kiahk', day: 23 },
        copticTransitionDay: 9,
        copticNext: 'Tobe',
        synaxarium: [
            '02: St. Ignatius of Antioch',
            '06: Nativity Fast Ends',
            '07: Feast of the Nativity',
            '12: St. John the Apostle',
            '14: Circumcision / St. Basil the Great',
            '19: Theophany',
            '21: Miracle at Cana / St. Demiana & 40 Virgins',
            '22: St. Maximus',
            '25: St. Domadius / St. Gregory the Theologian',
            '30: St. Anthony the Great'
        ],
        quote: 'He became man that we might become divine.',
        quoteAuthor: 'St. Athanasius the Apostolic',
        scripture: '"For unto us a Child is born, unto us a Son is given." — Isaiah 9:6',
        fastingTip: 'The Nativity Fast ends January 6. Rejoice in the Incarnation!',
        feasts: [
            { day: 2, type: 'c', name: 'St. Ignatius of Antioch', icon: 'st_ignatius_antioch' },
            { day: 6, type: 'e', name: 'Nativity Fast Ends' },
            { day: 7, type: 'M', name: 'Feast of Nativity', icon: 'feast_nativity' },
            { day: 12, type: 'c', name: 'St. John the Apostle', icon: 'st_john_apostle' },
            { day: 14, type: 'm', name: 'Circumcision', icon: 'feast_circumcision' },
            { day: 19, type: 'M', name: 'Theophany', icon: 'feast_theophany' },
            { day: 21, type: 'm', name: 'Miracle at Cana', icon: 'feast_cana' },
            { day: 21, type: 'c', name: 'St. Demiana & the 40 Virgins', icon: 'st_demiana' },
            { day: 22, type: 'c', name: 'St. Maximus', icon: 'st_maximus' },
            { day: 25, type: 'c', name: 'St. Domadius', icon: 'st_domadius' },
            { day: 25, type: 'c', name: 'St. Gregory the Theologian', icon: 'st_gregory_theologian' },
            { day: 30, type: 'c', name: 'St. Anthony the Great', icon: 'st_anthony' },
        ],
        excludeMonthly: 0
    },
    // ============================================================
    // FEBRUARY — Tobe 24 to Meshir 21
    // ============================================================
    {
        month: 'February',
        year: 2026,
        firstWeekday: 0, // Sunday
        days: 28,
        copticStart: { month: 'Tobe', day: 24 },
        copticTransitionDay: 8,
        copticNext: 'Meshir',
        synaxarium: [
            '02: Jonah\'s Fast Begins',
            '04: Jonah\'s Fast Ends',
            '05: Feast of Jonah',
            '09: St. Paul the First Hermit',
            '15: Presentation into the Temple',
            '15: 21 Coptic Martyrs of Libya',
            '16: Great Lent Begins',
            '21: St. Severus of Antioch'
        ],
        quote: 'Fasting is the sacrifice of distancing from sins.',
        quoteAuthor: 'St. John Chrysostom',
        scripture: '"Create in me a clean heart, O God, and renew a steadfast spirit within me." — Psalm 51:10',
        fastingTip: 'Jonah\'s Fast (Feb 2–4) prepares us. Great Lent begins Feb 16 — fast from all animal products.',
        feasts: [
            { day: 2, type: 'f', name: 'Jonah\'s Fast Begins' },
            { day: 4, type: 'e', name: 'Jonah\'s Fast Ends' },
            { day: 5, type: 'm', name: 'Feast of Jonah', icon: 'feast_jonah' },
            { day: 9, type: 'c', name: 'St. Paul the First Hermit', icon: 'st_paul_hermit' },
            { day: 15, type: 'm', name: 'Presentation into the Temple', icon: 'feast_presentation' },
            { day: 16, type: 'f', name: 'Great Lent Begins' },
            { day: 21, type: 'c', name: 'St. Severus of Antioch', icon: 'st_severus' },
        ],
        excludeMonthly: 0
    },
    // ============================================================
    // MARCH — Meshir 22 to Paremhotep 21
    // ============================================================
    {
        month: 'March',
        year: 2026,
        firstWeekday: 0, // Sunday
        days: 31,
        copticStart: { month: 'Meshir', day: 22 },
        copticTransitionDay: 10,
        copticNext: 'Paremhotep',
        synaxarium: [
            '08: St. Polycarp of Smyrna',
            '09: Pope Cyril VI',
            '14: St. Sarapamon the Archpriest',
            '19: Feast of the Holy Cross'
        ],
        quote: 'Let yourself be persecuted, but do not persecute.',
        quoteAuthor: 'St. Isaac the Syrian',
        scripture: '"The Lord is my light and my salvation; whom shall I fear?" — Psalm 27:1',
        fastingTip: 'Great Lent continues — deepen your prayer, fasting, and almsgiving.',
        feasts: [
            { day: 8, type: 'c', name: 'St. Polycarp of Smyrna', icon: 'st_polycarp' },
            { day: 9, type: 'c', name: 'Pope Cyril VI', icon: 'st_cyril_vi' },
            { day: 14, type: 'c', name: 'St. Sarapamon', icon: 'st_sarapamon' },
            { day: 19, type: 'm', name: 'Feast of the Holy Cross', icon: 'feast_cross' },
        ],
        excludeMonthly: 0
    },
    // ============================================================
    // APRIL — Paremhotep 23 to Parmoute 22
    // ============================================================
    {
        month: 'April',
        year: 2026,
        firstWeekday: 3, // Wednesday
        days: 30,
        copticStart: { month: 'Paremhotep', day: 23 },
        copticTransitionDay: 9,
        copticNext: 'Parmoute',
        synaxarium: [
            '02: Apparition at Zeitoun',
            '03: Last Friday of Lent',
            '04: Lazarus Saturday',
            '05: Palm Sunday',
            '07: Annunciation',
            '09: Covenant Thursday',
            '10: Good Friday',
            '12: Glorious Resurrection',
            '19: Thomas Sunday'
        ],
        quote: 'Yesterday I was crucified with Him; today I am glorified with Him.',
        quoteAuthor: 'St. Gregory the Theologian',
        scripture: '"I am the resurrection and the life. He who believes in Me, though he may die, he shall live." — John 11:25',
        fastingTip: 'Holy Week (Apr 5–11): the most intense fast of the year. No food until sunset, if possible.',
        feasts: [
            { day: 2, type: 'c', name: 'Apparition at Zeitoun' },
            { day: 3, type: 'e', name: 'Last Friday of Lent' },
            { day: 4, type: 'm', name: 'Lazarus Saturday', icon: 'feast_lazarus' },
            { day: 5, type: 'M', name: 'Palm Sunday', icon: 'feast_palm_sunday' },
            { day: 7, type: 'M', name: 'Annunciation', icon: 'feast_annunciation' },
            { day: 9, type: 'm', name: 'Covenant Thursday', icon: 'feast_covenant' },
            { day: 10, type: 'f', name: 'Good Friday' },
            { day: 12, type: 'M', name: 'Resurrection', icon: 'feast_resurrection' },
            { day: 19, type: 'm', name: 'Thomas Sunday', icon: 'feast_thomas' },
        ],
        excludeMonthly: 7
    },
    // ============================================================
    // MAY — Parmoute 23 to Pashons 23
    // ============================================================
    {
        month: 'May',
        year: 2026,
        firstWeekday: 5, // Friday
        days: 31,
        copticStart: { month: 'Parmoute', day: 23 },
        copticTransitionDay: 9,
        copticNext: 'Pashons',
        synaxarium: [
            '01: St. George the Martyr',
            '08: St. Mark the Evangelist',
            '15: St. Athanasius the Apostolic',
            '21: Feast of Ascension',
            '22: St. Pachomius',
            '31: Feast of Pentecost'
        ],
        quote: 'The Holy Spirit is the source of holiness.',
        quoteAuthor: 'St. Basil the Great',
        scripture: '"But you shall receive power when the Holy Spirit has come upon you." — Acts 1:8',
        fastingTip: null,
        feasts: [
            { day: 1, type: 'c', name: 'St. George', icon: 'st_george' },
            { day: 8, type: 'c', name: 'St. Mark the Evangelist', icon: 'st_mark' },
            { day: 15, type: 'c', name: 'St. Athanasius', icon: 'st_athanasius' },
            { day: 21, type: 'M', name: 'Feast of Ascension', icon: 'feast_ascension' },
            { day: 22, type: 'c', name: 'St. Pachomius', icon: 'st_pachomius' },
            { day: 31, type: 'M', name: 'Feast of Pentecost', icon: 'feast_pentecost' },
        ],
        excludeMonthly: 0
    },
    // ============================================================
    // JUNE — Pashons 24 to Paone 23
    // ============================================================
    {
        month: 'June',
        year: 2026,
        firstWeekday: 1, // Monday
        days: 30,
        copticStart: { month: 'Pashons', day: 24 },
        copticTransitionDay: 8,
        copticNext: 'Paone',
        synaxarium: [
            '01: Holy Family to Egypt',
            '01: Apostles\' Fast Begins',
            '23: St. Onuphrius (Anba Noufer)',
            '27: St. Cyril of Alexandria'
        ],
        quote: 'Christ is the vine and we are the branches.',
        quoteAuthor: 'St. Cyril of Alexandria',
        scripture: '"I am the vine, you are the branches. He who abides in Me, and I in him, bears much fruit." — John 15:5',
        fastingTip: 'Apostles\' Fast begins June 1 — vegan fast (no animal products). Honor the apostles\' missionary zeal.',
        feasts: [
            { day: 1, type: 'P', name: 'Holy Family to Egypt', icon: 'feast_holy_family' },
            { day: 23, type: 'c', name: 'St. Onuphrius', icon: 'st_onuphrius' },
        ],
        excludeMonthly: 0
    },
    // ============================================================
    // JULY — Paone 24 to Epep 24
    // ============================================================
    {
        month: 'July',
        year: 2026,
        firstWeekday: 3, // Wednesday
        days: 31,
        copticStart: { month: 'Paone', day: 24 },
        copticTransitionDay: 8,
        copticNext: 'Epep',
        synaxarium: [
            '01: St. Moses the Black',
            '11: Apostles\' Fast Ends',
            '12: Sts. Peter and Paul',
            '14: St. Shenouda the Archimandrite',
            '15: St. Bishoy the Beloved',
            '23: St. Marina the Martyr',
            '27: St. Theodore the General',
            '31: St. Abanoub'
        ],
        quote: 'If we gain our brother, we have gained God.',
        quoteAuthor: 'St. Anthony the Great',
        scripture: '"Be strong and of good courage; do not be afraid, for the Lord your God is with you." — Joshua 1:9',
        fastingTip: 'Apostles\' Fast ends July 11. Feast of Sts. Peter & Paul on July 12!',
        feasts: [
            { day: 1, type: 'c', name: 'St. Moses the Black', icon: 'st_moses_black' },
            { day: 11, type: 'e', name: 'Apostles\' Fast Ends' },
            { day: 12, type: 'm', name: 'Sts. Peter and Paul', icon: 'feast_peter_paul' },
            { day: 14, type: 'c', name: 'St. Shenouda', icon: 'st_shenouda' },
            { day: 15, type: 'c', name: 'St. Bishoy', icon: 'st_bishoy' },
            { day: 23, type: 'c', name: 'St. Marina', icon: 'st_marina' },
            { day: 27, type: 'c', name: 'St. Theodore the General', icon: 'st_theodore' },
            { day: 31, type: 'c', name: 'St. Abanoub', icon: 'st_abanoub' },
        ],
        excludeMonthly: 0
    },
    // ============================================================
    // AUGUST — Epep 25 to Mesore 25
    // ============================================================
    {
        month: 'August',
        year: 2026,
        firstWeekday: 6, // Saturday
        days: 31,
        copticStart: { month: 'Epep', day: 25 },
        copticTransitionDay: 7,
        copticNext: 'Mesore',
        synaxarium: [
            '02: St. Joseph the Carpenter',
            '07: St. Mary\'s Fast Begins',
            '19: The Transfiguration',
            '21: St. Mary\'s Fast Ends',
            '22: Assumption of St. Mary',
            '25: St. Macarius the Great'
        ],
        quote: 'Hail Mary, Mother of God, Treasure of the whole world.',
        quoteAuthor: 'St. Cyril of Alexandria',
        scripture: '"My soul magnifies the Lord, and my spirit has rejoiced in God my Savior." — Luke 1:46–47',
        fastingTip: 'St. Mary\'s Fast (Aug 7–21): 15 days vegan fast in honour of the Theotokos.',
        feasts: [
            { day: 2, type: 'c', name: 'St. Joseph the Carpenter', icon: 'st_joseph' },
            { day: 7, type: 'f', name: 'St. Mary\'s Fast Begins' },
            { day: 19, type: 'm', name: 'Transfiguration', icon: 'feast_transfiguration' },
            { day: 21, type: 'e', name: 'St. Mary\'s Fast Ends' },
            { day: 22, type: 'm', name: 'Assumption of St. Mary', icon: 'feast_assumption' },
            { day: 25, type: 'c', name: 'St. Macarius the Great', icon: 'st_macarius' },
        ],
        excludeMonthly: 0
    },
    // ============================================================
    // SEPTEMBER — Mesore 26 -> Nesi -> Thoout 20
    // ============================================================
    {
        month: 'September',
        year: 2026,
        firstWeekday: 2, // Tuesday
        days: 30,
        copticStart: { month: 'Mesore', day: 26 },
        copticTransitionDay: 11,
        copticNext: 'Thoout',
        isSeptember: true,
        synaxarium: [
            '11: Nayrouz — Coptic New Year 1743 AM',
            '12: St. John the Baptist',
            '14: St. Verena',
            '17: St. Rebecca and her 5 Children',
            '27–29: Feast of the Cross (3 days)'
        ],
        quote: 'I am the wheat of God, ground for the bread of Christ.',
        quoteAuthor: 'St. Ignatius of Antioch',
        scripture: '"Behold, I make all things new." — Revelation 21:5',
        fastingTip: null,
        feasts: [
            { day: 11, type: 'm', name: 'Nayrouz', icon: 'feast_nayrouz' },
            { day: 12, type: 'c', name: 'St. John the Baptist', icon: 'st_john_baptist' },
            { day: 14, type: 'c', name: 'St. Verena', icon: 'st_verena' },
            { day: 17, type: 'c', name: 'St. Rebecca & Children', icon: 'st_rebecca' },
            { day: 22, type: 'c', name: 'St. Maurice & Theban Legion', icon: 'st_maurice' },
            { day: 27, type: 'm', name: 'Feast of the Cross (Day 1)', icon: 'feast_cross' },
            { day: 28, type: 'm', name: 'Feast of the Cross (Day 2)', icon: 'feast_cross' },
            { day: 29, type: 'm', name: 'Feast of the Cross (Day 3)', icon: 'feast_cross' },
        ],
        excludeMonthly: 0
    },
    // ============================================================
    // OCTOBER — Thoout 21 to Paope 21
    // ============================================================
    {
        month: 'October',
        year: 2026,
        firstWeekday: 4, // Thursday
        days: 31,
        copticStart: { month: 'Thoout', day: 21 },
        copticTransitionDay: 11,
        copticNext: 'Paope',
        synaxarium: [
            '02: St. Thekla the Martyr',
            '14: Sts. Sergius and Bacchus',
            '17: St. Paul the Simple',
            '31: St. Reweis'
        ],
        quote: 'To fall in love with God is the greatest romance.',
        quoteAuthor: 'St. Augustine of Hippo',
        scripture: '"I have been crucified with Christ; it is no longer I who live, but Christ lives in me." — Galatians 2:20',
        fastingTip: null,
        feasts: [
            { day: 2, type: 'c', name: 'St. Thekla', icon: 'st_thekla' },
            { day: 14, type: 'c', name: 'Sts. Sergius & Bacchus', icon: 'sts_sergius_bacchus' },
            { day: 17, type: 'c', name: 'St. Paul the Simple' },
            { day: 31, type: 'c', name: 'St. Reweis' },
        ],
        excludeMonthly: 0
    },
    // ============================================================
    // NOVEMBER — Paope 22 to Hator 21
    // ============================================================
    {
        month: 'November',
        year: 2026,
        firstWeekday: 0, // Sunday
        days: 30,
        copticStart: { month: 'Paope', day: 22 },
        copticTransitionDay: 10,
        copticNext: 'Hator',
        synaxarium: [
            '14: Sts. Cosmas and Damian',
            '24: St. Mina the Miraculous',
            '25: Nativity Fast Begins',
            '26: St. John Chrysostom',
            '27: St. Simon the Tanner'
        ],
        quote: 'Repentance is the renewal of baptism.',
        quoteAuthor: 'St. John Climacus',
        scripture: '"Prepare the way of the Lord; make His paths straight." — Mark 1:3',
        fastingTip: 'Nativity Fast begins Nov 25 — 43 days of vegan fasting anticipating the Incarnation.',
        feasts: [
            { day: 14, type: 'c', name: 'Cosmas & Damian', icon: 'sts_cosmas_damian' },
            { day: 24, type: 'c', name: 'St. Mina', icon: 'st_mina' },
            { day: 25, type: 'f', name: 'Nativity Fast Begins' },
            { day: 26, type: 'c', name: 'St. John Chrysostom', icon: 'st_chrysostom' },
            { day: 27, type: 'c', name: 'St. Simon the Tanner', icon: 'st_simon_tanner' },
        ],
        excludeMonthly: 0
    },
    // ============================================================
    // DECEMBER — Hator 22 to Kiahk 22
    // ============================================================
    {
        month: 'December',
        year: 2026,
        firstWeekday: 2, // Tuesday
        days: 31,
        copticStart: { month: 'Hator', day: 22 },
        copticTransitionDay: 10,
        copticNext: 'Kiahk',
        synaxarium: [
            '04: Philopater Mercurius (Abu Sefein)',
            '05: St. Gregory of Nyssa',
            '08: St. Clement of Rome',
            '10: St. Nicholas of Myra',
            '17: St. Barbara the Martyr',
            '17: St. Samuel the Confessor'
        ],
        quote: 'The Sun of Righteousness has risen from the Virgin\'s womb.',
        quoteAuthor: 'St. Ephrem the Syrian',
        scripture: '"The people who walked in darkness have seen a great light." — Isaiah 9:2',
        fastingTip: 'Nativity Fast continues — we await Emmanuel. Increase your prayers and hymns of Kiahk.',
        feasts: [
            { day: 4, type: 'c', name: 'Philopater Mercurius', icon: 'st_mercurius' },
            { day: 5, type: 'c', name: 'St. Gregory of Nyssa', icon: 'st_gregory_nyssa' },
            { day: 8, type: 'c', name: 'St. Clement of Rome', icon: 'st_clement_rome' },
            { day: 10, type: 'c', name: 'St. Nicholas', icon: 'st_nicholas' },
            { day: 17, type: 'c', name: 'St. Barbara', icon: 'st_barbara' },
        ],
        excludeMonthly: 0
    }
];

// Monthly recurring commemorations (by Coptic day)
const MONTHLY_COMMEMORATIONS = {
    12: 'Archangel Michael',
    21: 'Saint Mary',
    29: 'Annunciation, Nativity, Resurrection'
};

// Feast type labels and colors
const FEAST_STYLES = {
    'M': { bg: 'rgba(178, 34, 34, 0.12)', text: '#B22222', label: 'Major Feast' },
    'm': { bg: 'rgba(135, 190, 230, 0.15)', text: '#4a90c4', label: 'Minor Feast' },
    'f': { bg: 'rgba(109, 40, 217, 0.10)', text: '#6D28D9', label: 'Fast Period' },
    'e': { bg: 'rgba(109, 40, 217, 0.06)', text: '#6D28D9', label: 'Fast End' },
    'c': { bg: 'rgba(243, 244, 246, 0.8)', text: '#4B5563', label: 'Commemoration' },
    's': { bg: 'rgba(243, 244, 246, 0.8)', text: '#4B5563', label: 'Saint' },
    'P': { bg: 'rgba(109, 40, 217, 0.12)', text: '#D97706', label: 'Fast + Feast' },
};

// Monthly prayers
const MONTHLY_PRAYERS = {
    'January': 'Lord, as You were baptised in the Jordan, wash us clean and make us new.',
    'February': 'Lord, grant us repentance like the Ninevites and strength for this holy fast.',
    'March': 'By Your Holy Cross, O Lord, protect us and keep us steadfast in faith.',
    'April': 'Christos Anesti! Lord of Life, raise us with You into newness of life.',
    'May': 'Come, Holy Spirit, fill us with Your gifts and send us as witnesses.',
    'June': 'O Holy Family, who sanctified Egypt, bless our homes and families.',
    'July': 'Holy Apostles, intercede for us that we may be bold in proclaiming the Gospel.',
    'August': 'O Theotokos, ever-virgin Mary, cover us with your intercessions.',
    'September': 'Lord of the Martyrs, grant us courage to live faithfully in this new year.',
    'October': 'Lord, teach us through Your saints to love You above all things.',
    'November': 'Prepare our hearts, O Lord, to receive You at Your glorious Nativity.',
    'December': 'O Emmanuel, God with us, come and dwell among us. Maranatha!'
};
