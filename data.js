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
            '11: Children of Bethlehem',
            '12: St. John the Apostle',
            '14: Circumcision / St. Basil the Great',
            '18: Paramouni of Theophany',
            '19: Theophany',
            '21: Miracle at Cana / St. Demiana & 40 Virgins',
            '22: St. Maximus',
            '25: St. Domadius',
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
            { day: 11, type: 'c', name: 'Children of Bethlehem', icon: 'children_bethlehem' },
            { day: 12, type: 'c', name: 'St. John the Apostle', icon: 'st_john_apostle' },
            { day: 14, type: 'm', name: 'Circumcision', icon: 'feast_circumcision' },
            { day: 19, type: 'M', name: 'Theophany', icon: 'feast_theophany' },
            { day: 18, type: 'f', name: 'Paramouni of Theophany' },
            { day: 21, type: 'm', name: 'Miracle at Cana', icon: 'feast_cana' },
            { day: 21, type: 'c', name: 'St. Demiana & the 40 Virgins', icon: 'st_demiana' },
            { day: 22, type: 'c', name: 'St. Maximus', icon: 'st_maximus' },
            { day: 25, type: 'c', name: 'St. Domadius', icon: 'st_domadius' },
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
            '01: St. Mary the Ascetic',
            '02: Jonah\'s Fast Begins',
            '04: Jonah\'s Fast Ends',
            '05: Feast of Jonah',
            '08: Council of Constantinople (381 AD)',
            '09: St. Paul the First Hermit',
            '15: Presentation into the Temple',
            '15: 21 Coptic Martyrs of Libya',
            '16: Great Lent Begins',
            '17: St. James son of Alphaeus',
            '21: St. Severus of Antioch',
            '23: St. Elizabeth / Hegumen Michael El Behairy',
            '24: St. Mina the Monk'
        ],
        quote: 'Fasting is the sacrifice of distancing from sins.',
        quoteAuthor: 'St. John Chrysostom',
        scripture: '"Create in me a clean heart, O God, and renew a steadfast spirit within me." — Psalm 51:10',
        fastingTip: 'Jonah\'s Fast (Feb 2–4) prepares us. Great Lent begins Feb 16 — fast from all animal products.',
        feasts: [
            { day: 1, type: 'c', name: 'St. Mary the Ascetic', icon: 'st_mary_ascetic' },
            { day: 2, type: 'f', name: 'Jonah\'s Fast Begins' },
            { day: 4, type: 'e', name: 'Jonah\'s Fast Ends' },
            { day: 5, type: 'm', name: 'Feast of Jonah', icon: 'feast_jonah' },
            { day: 8, type: 'c', name: 'Council of Constantinople (381 AD)', icon: 'council_constantinople' },
            { day: 9, type: 'c', name: 'St. Paul the First Hermit', icon: 'st_paul_hermit' },
            { day: 15, type: 'm', name: 'Presentation into the Temple', icon: 'feast_presentation' },
            { day: 15, type: 'c', name: '21 Coptic Martyrs of Libya', icon: 'coptic_martyrs_libya' },
            { day: 16, type: 'f', name: 'Great Lent Begins' },
            { day: 17, type: 'c', name: 'St. James son of Alphaeus', icon: 'st_james_alphaeus' },
            { day: 21, type: 'c', name: 'St. Severus of Antioch', icon: 'st_severus' },
            { day: 23, type: 'c', name: 'St. Elizabeth', icon: 'st_elizabeth' },
            { day: 24, type: 'c', name: 'St. Mina the Monk', icon: 'st_mina' },
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
            '02: St. Eusebius of Caesarea',
            '08: St. Polycarp of Smyrna',
            '09: Pope Cyril VI',
            '14: St. Sarapamon the Archpriest',
            '17: St. Matthias the Apostle',
            '17: Pope Shenouda III',
            '19: Feast of the Holy Cross',
            '26: St. Sidhom Bishay'
        ],
        quote: 'Let yourself be persecuted, but do not persecute.',
        quoteAuthor: 'St. Isaac the Syrian',
        scripture: '"The Lord is my light and my salvation; whom shall I fear?" — Psalm 27:1',
        fastingTip: 'Great Lent continues — deepen your prayer, fasting, and almsgiving.',
        feasts: [
            { day: 2, type: 'c', name: 'St. Eusebius of Caesarea', icon: 'st_eusebius' },
            { day: 8, type: 'c', name: 'St. Polycarp of Smyrna', icon: 'st_polycarp' },
            { day: 9, type: 'c', name: 'Pope Cyril VI', icon: 'st_cyril_vi' },
            { day: 14, type: 'c', name: 'St. Sarapamon', icon: 'st_sarapamon' },
            { day: 17, type: 'c', name: 'St. Matthias the Apostle', icon: 'st_matthias' },
            { day: 19, type: 'm', name: 'Feast of the Holy Cross', icon: 'feast_cross' },
            { day: 26, type: 'c', name: 'St. Sidhom Bishay', icon: 'st_sidhom_bishay' },
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
            '05: St. Macarius the Great / Palm Sunday',
            '06: Emperor Constantine the Great',
            '07: Annunciation',
            '09: Covenant Thursday',
            '10: Good Friday',
            '12: Glorious Resurrection',
            '14: St. Mary of Egypt',
            '19: Thomas Sunday',
            '25: St. James the Apostle'
        ],
        quote: 'Yesterday I was crucified with Him; today I am glorified with Him.',
        quoteAuthor: 'St. Gregory the Theologian',
        scripture: '"I am the resurrection and the life. He who believes in Me, though he may die, he shall live." — John 11:25',
        fastingTip: 'Holy Week (Apr 5–11): the most intense fast of the year. No food until sunset, if possible.',
        feasts: [
            { day: 2, type: 'c', name: 'Apparition at Zeitoun', icon: 'apparition_zeitoun' },
            { day: 3, type: 'e', name: 'Last Friday of Lent' },
            { day: 4, type: 'm', name: 'Lazarus Saturday', icon: 'feast_lazarus' },
            { day: 5, type: 'c', name: 'St. Macarius the Great', icon: 'st_macarius' },
            { day: 5, type: 'M', name: 'Palm Sunday', icon: 'feast_palm_sunday' },
            { day: 6, type: 'c', name: 'Emperor Constantine', icon: 'emperor_constantine' },
            { day: 7, type: 'M', name: 'Annunciation', icon: 'feast_annunciation' },
            { day: 9, type: 'm', name: 'Covenant Thursday', icon: 'feast_covenant' },
            { day: 10, type: 'f', name: 'Good Friday' },
            { day: 12, type: 'M', name: 'Resurrection', icon: 'feast_resurrection' },
            { day: 14, type: 'c', name: 'St. Mary of Egypt', icon: 'st_mary_egypt' },
            { day: 19, type: 'm', name: 'Thomas Sunday', icon: 'feast_thomas' },
            { day: 25, type: 'c', name: 'St. James the Apostle', icon: 'st_james_apostle' },
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
            '23: St. Simon the Zealot',
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
            { day: 23, type: 'c', name: 'St. Simon the Zealot', icon: 'st_simon_zealot' },
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
            '03: St. Thomas the Apostle',
            '07: Pope Mikhail I',
            '10: Anba Abraam, Bishop of Fayoum',
            '13: St. Didymus the Blind',
            '13: Sts. Apakir & John',
            '14: St. Abaskhiroun the Soldier',
            '21: Pope Yoannis XIX',
            '23: St. Onuphrius (Anba Noufer)',
            '27: Pope Cyril of Alexandria / Prophet Elisha',
            '28: St. Timothy of Memphis'
        ],
        quote: 'Christ is the vine and we are the branches.',
        quoteAuthor: 'St. Cyril of Alexandria',
        scripture: '"I am the vine, you are the branches. He who abides in Me, and I in him, bears much fruit." — John 15:5',
        fastingTip: 'Apostles\' Fast begins June 1 — vegan fast (no animal products). Honor the apostles\' missionary zeal.',
        feasts: [
            { day: 1, type: 'P', name: 'Holy Family to Egypt', icon: 'feast_holy_family' },
            { day: 3, type: 'c', name: 'St. Thomas the Apostle', icon: 'st_thomas' },
            { day: 7, type: 'c', name: 'Pope Mikhail I', icon: 'pope_mikhail_i' },
            { day: 10, type: 'c', name: 'Anba Abraam', icon: 'anba_abraam' },
            { day: 13, type: 'c', name: 'St. Didymus the Blind', icon: 'st_didymus' },
            { day: 14, type: 'c', name: 'St. Abaskhiroun the Soldier', icon: 'st_abaskhiroun' },
            { day: 21, type: 'c', name: 'Pope Yoannis XIX', icon: 'pope_yoannis_xix' },
            { day: 23, type: 'c', name: 'St. Onuphrius', icon: 'st_onuphrius' },
            { day: 27, type: 'c', name: 'Pope Cyril of Alexandria', icon: 'st_cyril_alexandria' },
            { day: 28, type: 'c', name: 'St. Timothy of Memphis', icon: 'st_timothy_memphis' },
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
            '01: St. Moses the Strong',
            '05: Pope Theodosius',
            '09: St. Jude Thaddaeus',
            '11: Apostles\' Fast Ends',
            '12: Sts. Peter and Paul',
            '14: St. Shenouda the Archimandrite',
            '15: St. Bishoy / St. Karas the Anchorite',
            '22: St. Ephrem the Syrian',
            '26: St. Bidaba, Bishop of Qift',
            '27: St. Theodore the General',
            '30: St. Marina / St. Longinus',
            '31: St. Abanoub'
        ],
        quote: 'If we gain our brother, we have gained God.',
        quoteAuthor: 'St. Anthony the Great',
        scripture: '"Be strong and of good courage; do not be afraid, for the Lord your God is with you." — Joshua 1:9',
        fastingTip: 'Apostles\' Fast ends July 11. Feast of Sts. Peter & Paul on July 12!',
        feasts: [
            { day: 1, type: 'c', name: 'St. Moses the Strong', icon: 'st_moses_black' },
            { day: 5, type: 'c', name: 'Pope Theodosius', icon: 'pope_theodosius' },
            { day: 9, type: 'c', name: 'St. Jude Thaddaeus', icon: 'st_jude_thaddaeus' },
            { day: 11, type: 'e', name: 'Apostles\' Fast Ends' },
            { day: 12, type: 'm', name: 'Sts. Peter and Paul', icon: 'feast_peter_paul' },
            { day: 14, type: 'c', name: 'St. Shenouda', icon: 'st_shenouda' },
            { day: 15, type: 'c', name: 'St. Bishoy', icon: 'st_bishoy' },
            { day: 22, type: 'c', name: 'St. Ephrem the Syrian', icon: 'st_ephrem_syrian' },
            { day: 26, type: 'c', name: 'St. Bidaba', icon: 'st_bidaba' },
            { day: 27, type: 'c', name: 'St. Theodore the General', icon: 'st_theodore' },
            { day: 30, type: 'c', name: 'St. Marina', icon: 'st_marina' },
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
            '09: St. Simon Stylite',
            '13: Pope Timothy II',
            '16: St. Matra',
            '19: The Transfiguration',
            '21: Habib Guirguis / St. Mary\'s Fast Ends',
            '22: Assumption of St. Mary',
            '23: St. James the Soldier',
            '28: St. Augustine of Hippo',
            '28: Micah the Prophet',
            '30: St. Takla Haymanot'
        ],
        quote: 'Hail Mary, Mother of God, Treasure of the whole world.',
        quoteAuthor: 'St. Cyril of Alexandria',
        scripture: '"My soul magnifies the Lord, and my spirit has rejoiced in God my Savior." — Luke 1:46–47',
        fastingTip: 'St. Mary\'s Fast (Aug 7–21): 15 days vegan fast in honour of the Theotokos.',
        feasts: [
            { day: 2, type: 'c', name: 'St. Joseph the Carpenter', icon: 'st_joseph' },
            { day: 7, type: 'f', name: 'St. Mary\'s Fast Begins' },
            { day: 9, type: 'c', name: 'St. Simon Stylite', icon: 'st_simon_stylite' },
            { day: 13, type: 'c', name: 'Pope Timothy II', icon: 'pope_timothy_ii' },
            { day: 16, type: 'c', name: 'St. Matra', icon: 'st_matra' },
            { day: 19, type: 'm', name: 'Transfiguration', icon: 'feast_transfiguration' },
            { day: 21, type: 'c', name: 'Habib Guirguis', icon: 'habib_guirguis' },
            { day: 21, type: 'e', name: 'St. Mary\'s Fast Ends' },
            { day: 22, type: 'm', name: 'Assumption of St. Mary', icon: 'feast_assumption' },
            { day: 23, type: 'c', name: 'St. James the Soldier', icon: 'st_james_soldier' },
            { day: 28, type: 'c', name: 'St. Augustine of Hippo', icon: 'st_augustine' },
            { day: 30, type: 'c', name: 'St. Takla Haymanot', icon: 'st_takla_haymanot' },
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
            '03: St. Habakkuk the Prophet',
            '06: St. Eutychus',
            '11: Nayrouz — Coptic New Year 1743 AM',
            '12: St. John the Baptist',
            '13: Council of Alexandria',
            '14: St. Verena',
            '14: Joshua son of Nun',
            '17: St. Rebecca and her 5 Children',
            '17: St. Dioscorus of Alexandria',
            '20: St. Matruna',
            '27–29: Feast of the Cross (3 days)'
        ],
        quote: 'I am the wheat of God, ground for the bread of Christ.',
        quoteAuthor: 'St. Ignatius of Antioch',
        scripture: '"Behold, I make all things new." — Revelation 21:5',
        fastingTip: null,
        feasts: [
            { day: 3, type: 'c', name: 'St. Habakkuk the Prophet', icon: 'st_habakkuk' },
            { day: 6, type: 'c', name: 'St. Eutychus', icon: 'st_eutychus' },
            { day: 11, type: 'm', name: 'Nayrouz', icon: 'feast_nayrouz' },
            { day: 12, type: 'c', name: 'St. John the Baptist', icon: 'st_john_baptist' },
            { day: 13, type: 'c', name: 'Council of Alexandria', icon: 'council_alexandria' },
            { day: 14, type: 'c', name: 'St. Verena', icon: 'st_verena' },
            { day: 17, type: 'c', name: 'St. Rebecca & Children', icon: 'st_rebecca' },
            { day: 20, type: 'c', name: 'St. Matruna', icon: 'st_matruna' },
            { day: 22, type: 'c', name: 'Council of Ephesus', icon: 'council_ephesus' },
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
            '04: St. Gregory the Ascetic',
            '05: St. Maurice / Jonah the Prophet',
            '11: St. Anastasia',
            '14: St. Bacchus',
            '17: St. Paul the Simple',
            '18: St. Abba Hor',
            '20: St. Sergius',
            '22: St. Matthew the Evangelist',
            '25: St. Panteleimon',
            '26: Pope Agathon',
            '31: St. Reweis'
        ],
        quote: 'To fall in love with God is the greatest romance.',
        quoteAuthor: 'St. Augustine of Hippo',
        scripture: '"I have been crucified with Christ; it is no longer I who live, but Christ lives in me." — Galatians 2:20',
        fastingTip: null,
        feasts: [
            { day: 4, type: 'c', name: 'St. Gregory the Ascetic', icon: 'st_gregory_ascetic' },
            { day: 5, type: 'c', name: 'St. Maurice', icon: 'st_maurice' },
            { day: 11, type: 'c', name: 'St. Anastasia', icon: 'st_anastasia' },
            { day: 14, type: 'c', name: 'St. Bacchus', icon: 'sts_sergius_bacchus' },
            { day: 17, type: 'c', name: 'St. Paul the Simple', icon: 'st_paul_simple' },
            { day: 18, type: 'c', name: 'St. Abba Hor', icon: 'st_abba_hor' },
            { day: 20, type: 'c', name: 'St. Sergius', icon: 'sts_sergius_bacchus' },
            { day: 22, type: 'c', name: 'St. Matthew the Evangelist', icon: 'st_matthew_evan' },
            { day: 25, type: 'c', name: 'St. Panteleimon', icon: 'st_panteleimon' },
            { day: 26, type: 'c', name: 'Pope Agathon', icon: 'pope_agathon' },
            { day: 31, type: 'c', name: 'St. Reweis', icon: 'st_reweis' },
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
            '01: St. Luke the Evangelist',
            '08: St. Demetrius of Thessalonica',
            '14: St. Simon the Tanner',
            '14: St. Timothy, Martyr',
            '15: St. Felix, Pope of Rome',
            '18: Council of Nicaea (325 AD)',
            '22: St. Timothy, Bishop of Ansena',
            '24: St. Mina the Wonderworker',
            '25: Nativity Fast Begins',
            '26: St. John Chrysostom',
            '27: St. Philip the Apostle',
            '29: St. Anianus, 2nd Pope'
        ],
        quote: 'Repentance is the renewal of baptism.',
        quoteAuthor: 'St. John Climacus',
        scripture: '"Prepare the way of the Lord; make His paths straight." — Mark 1:3',
        fastingTip: 'Nativity Fast begins Nov 25 — 43 days of vegan fasting anticipating the Incarnation.',
        feasts: [
            { day: 1, type: 'c', name: 'St. Luke the Evangelist', icon: 'st_luke' },
            { day: 8, type: 'c', name: 'St. Demetrius of Thessalonica', icon: 'st_demetrius_thessalonica' },
            { day: 14, type: 'c', name: 'St. Simon the Tanner', icon: 'st_simon_tanner' },
            { day: 15, type: 'c', name: 'St. Felix, Pope of Rome', icon: 'st_felix_rome' },
            { day: 18, type: 'c', name: 'Council of Nicaea (325 AD)', icon: 'council_nicaea' },
            { day: 22, type: 'c', name: 'St. Timothy, Bishop of Ansena', icon: 'st_timothy_ansena' },
            { day: 24, type: 'c', name: 'St. Mina the Wonderworker', icon: 'st_mina' },
            { day: 25, type: 'f', name: 'Nativity Fast Begins' },
            { day: 26, type: 'c', name: 'St. John Chrysostom', icon: 'st_chrysostom' },
            { day: 27, type: 'c', name: 'St. Philip the Apostle', icon: 'st_philip_apostle' },
            { day: 29, type: 'c', name: 'St. Anianus, 2nd Pope', icon: 'st_anianus' },
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
            '01: Cosmas & Damian',
            '04: Philopater Mercurius (Abu Sefein)',
            '05: St. Gregory of Nyssa',
            '06: St. James the Mangled',
            '08: St. Peter Seal of Martyrs',
            '13: St. Andrew the Apostle',
            '19: St. Nicholas of Myra',
            '17: Sts. Barbara \u0026 Juliana',
            '17: St. Samuel the Confessor',
            '25: Gideon the Judge'
        ],
        quote: 'The Sun of Righteousness has risen from the Virgin\'s womb.',
        quoteAuthor: 'St. Ephrem the Syrian',
        scripture: '"The people who walked in darkness have seen a great light." — Isaiah 9:2',
        fastingTip: 'Nativity Fast continues — we await Emmanuel. Increase your prayers and hymns of Kiahk.',
        feasts: [
            { day: 1, type: 'c', name: 'Cosmas & Damian', icon: 'sts_cosmas_damian' },
            { day: 4, type: 'c', name: 'Philopater Mercurius', icon: 'st_mercurius' },
            { day: 5, type: 'c', name: 'St. Gregory of Nyssa', icon: 'st_gregory_nyssa' },
            { day: 6, type: 'c', name: 'St. James the Mangled', icon: 'st_james_mangled' },
            { day: 8, type: 'c', name: 'St. Peter Seal of Martyrs', icon: 'st_peter_seal' },
            { day: 13, type: 'c', name: 'St. Andrew the Apostle', icon: 'st_andrew' },
            { day: 19, type: 'c', name: 'St. Nicholas', icon: 'st_nicholas' },
            { day: 17, type: 'c', name: 'Sts. Barbara & Juliana', icon: 'st_barbara' },
            { day: 25, type: 'c', name: 'Gideon the Judge', icon: 'gideon_judge' },
        ],
        excludeMonthly: 0
    }
];

// Monthly recurring commemorations (by Coptic day)
const MONTHLY_COMMEMORATIONS = {
    12: { name: 'Archangel Michael', icon: 'archangel_michael' },
    21: { name: 'Saint Mary', icon: 'st_mary_theotokos' },
    29: { name: 'Annunciation, Nativity, Resurrection', icon: 'feast_monthly_29' }
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

'15: Antigravity Test'
