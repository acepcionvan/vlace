document.documentElement.classList.add('js');

const sectionTitles = {
    overview: 'Admin Dashboard',
    analytics: 'Executive Analytics',
    ai: 'SPARK AI Assistant',
    students: 'Students',
    teachers: 'Teachers',
    staff: 'Staff',
    lessons: 'Lessons',
    packages: 'Packages & Prices',
    finance: 'Finance',
    inbox: 'Communication',
    email: 'Email Inbox',
    chatbot: 'Chatbot',
    slack: 'Slack',
    reminders: 'Student Reminders',
    marketing: 'Marketing',
    campaigns: 'Campaigns',
    adsets: 'Ad Sets',
    ads: 'Ads',
    audiences: 'Audiences',
    leads: 'Leads',
    creative: 'Creative Library',
    budget: 'Budget & Spending',
    performance: 'Performance Reports',
    integrations: 'Integrations',
    users: 'User Management',
    policies: 'Company Policy Manual',
    settings: 'Settings',
    logout: 'Log Out',
};

const DEFAULT_PHP_PER_USD = 58.5;

const dashboardStats = {
    'All Countries': { students: 128, activeTeachers: 22, finishedLessons: 8, cancelledLessons: 4, absentStudents: 4, absentTeachers: 2, pendingPayments: 8 },
    China: { students: 46, activeTeachers: 7, finishedLessons: 3, cancelledLessons: 1, absentStudents: 1, absentTeachers: 0, pendingPayments: 2 },
    'South Korea': { students: 14, activeTeachers: 3, finishedLessons: 1, cancelledLessons: 0, absentStudents: 1, absentTeachers: 0, pendingPayments: 1 },
    Japan: { students: 12, activeTeachers: 2, finishedLessons: 1, cancelledLessons: 1, absentStudents: 0, absentTeachers: 1, pendingPayments: 1 },
    UAE: { students: 18, activeTeachers: 3, finishedLessons: 1, cancelledLessons: 0, absentStudents: 1, absentTeachers: 0, pendingPayments: 1 },
    'Saudi Arabia': { students: 13, activeTeachers: 2, finishedLessons: 1, cancelledLessons: 1, absentStudents: 0, absentTeachers: 0, pendingPayments: 1 },
    Dubai: { students: 10, activeTeachers: 2, finishedLessons: 0, cancelledLessons: 0, absentStudents: 1, absentTeachers: 0, pendingPayments: 1 },
    Israel: { students: 15, activeTeachers: 3, finishedLessons: 1, cancelledLessons: 1, absentStudents: 0, absentTeachers: 1, pendingPayments: 1 },
};

const serviceCountryRates = {
    China: { currency: 'CNY', currencyName: 'Chinese Yuan', perUsd: 7.18, decimals: 2 },
    'South Korea': { currency: 'KRW', currencyName: 'South Korean Won', perUsd: 1390.4, decimals: 1 },
    Japan: { currency: 'JPY', currencyName: 'Japanese Yen', perUsd: 149.25, decimals: 2 },
    UAE: { currency: 'AED', currencyName: 'UAE Dirham', perUsd: 3.6725, decimals: 4 },
    'Saudi Arabia': { currency: 'SAR', currencyName: 'Saudi Riyal', perUsd: 3.75, decimals: 2 },
    Dubai: { currency: 'AED', currencyName: 'UAE Dirham', perUsd: 3.6725, decimals: 4 },
    Israel: { currency: 'ILS', currencyName: 'Israeli New Shekel', perUsd: 3.34, decimals: 2 },
};

const completedLessonsToday = [
    { country: 'China', teacher: 'Maria Santos', minutes: 25, lessonRevenueUsd: 14.53, teacherRatePhp: 230 },
    { country: 'China', teacher: 'Maria Santos', minutes: 25, lessonRevenueUsd: 14.53, teacherRatePhp: 230 },
    { country: 'China', teacher: 'Maria Santos', minutes: 50, lessonRevenueUsd: 23.07, teacherRatePhp: 230 },
    { country: 'South Korea', teacher: 'David Lee', minutes: 50, lessonRevenueUsd: 23.07, teacherRatePhp: 250 },
    { country: 'Japan', teacher: 'Aya Nakamura', minutes: 50, lessonRevenueUsd: 23.07, teacherRatePhp: 240 },
    { country: 'UAE', teacher: 'James Smith', minutes: 50, lessonRevenueUsd: 24.27, teacherRatePhp: 220 },
    { country: 'Saudi Arabia', teacher: 'Omar Reyes', minutes: 25, lessonRevenueUsd: 14.53, teacherRatePhp: 200 },
    { country: 'Israel', teacher: 'Emma Wilson', minutes: 50, lessonRevenueUsd: 23.07, teacherRatePhp: 230 },
];

const monthlyFinancialsByCountry = {
    China: { completedLessons: 92, grossIncomeUsd: 1450.24, teacherCostPhp: 18200 },
    'South Korea': { completedLessons: 40, grossIncomeUsd: 922.8, teacherCostPhp: 10000 },
    Japan: { completedLessons: 32, grossIncomeUsd: 738.24, teacherCostPhp: 7680 },
    UAE: { completedLessons: 43, grossIncomeUsd: 1043.61, teacherCostPhp: 9460 },
    'Saudi Arabia': { completedLessons: 28, grossIncomeUsd: 406.84, teacherCostPhp: 2800 },
    Dubai: { completedLessons: 21, grossIncomeUsd: 305.13, teacherCostPhp: 2310 },
    Israel: { completedLessons: 38, grossIncomeUsd: 876.66, teacherCostPhp: 8740 },
};

const analyticsMetricValues = {
    Revenue: { value: '$9,240', php: '≈ PHP ₱540,540' },
    Profit: { value: '$6,810', php: '≈ PHP ₱398,385' },
    Expenses: { value: '$2,430', php: '≈ PHP ₱142,155' },
    Payroll: { value: '$1,410', php: '≈ PHP ₱82,485' },
    Lessons: { value: '294', php: '' },
    Students: { value: '138', php: '' },
};

const students = [
    {
        id: 'S1-001',
        name: 'Liam Chen',
        country: 'China',
        type: 'Kid',
        level: 'A2',
        teacher: 'Maria Santos',
        lessons: '18 / 30',
        payment: 'Paid',
        status: 'Active',
        preferredDay: 'Wednesday & Sunday',
        preferredTime: '7:00 PM',
        wechat: 'liamchen_parent',
        whatsapp: '+86 138 0013 8000',
        email: 'liam.guardian@example.com',
        guardian: 'Grace Chen (Mother)',
        phone: '+86 138 0013 8000',
        referralCode: 'LIAM-CHEN-2026',
        referralLink: 'https://vlace.example/ref/liam-chen-2026',
        referrals: { total: 3, converted: 2, credits: 4, discount: '8%' },
        schedule: { duration: '25 minutes', frequency: '2x weekly', platform: 'Voov' },
    },
    {
        id: 'S1-002',
        name: 'Sophia Kim',
        country: 'South Korea',
        type: 'Adult',
        level: 'B1',
        teacher: 'David Lee',
        lessons: '8 / 15',
        payment: 'Due Aug 3',
        status: 'Active',
        preferredDay: 'Tuesday & Thursday',
        preferredTime: '8:00 PM',
        wechat: 'Not provided',
        whatsapp: '+82 10-2345-7788',
        email: 'sophia.kim@example.com',
        guardian: 'Not applicable',
        phone: '+82 10-2345-7788',
        referralCode: 'SOPHIA-KIM-2026',
        referralLink: 'https://vlace.example/ref/sophia-kim-2026',
        referrals: { total: 1, converted: 1, credits: 2, discount: '5%' },
        schedule: { duration: '50 minutes', frequency: '2x weekly', platform: 'Google Meet' },
    },
    {
        id: 'S1-003',
        name: 'Eddie Zhang',
        country: 'China',
        type: 'Kid',
        level: 'Starter',
        teacher: 'Maria Santos',
        lessons: '24 / 30',
        payment: 'Paid',
        status: 'Active',
        preferredDay: 'Saturday & Sunday',
        preferredTime: '9:00 PM',
        wechat: 'eddie_mom88',
        whatsapp: 'Not provided',
        email: 'eddie.guardian@example.com',
        guardian: 'Mei Zhang (Mother)',
        phone: '+86 139 5566 2180',
        referralCode: 'EDDIE-ZHANG-2026',
        referralLink: 'https://vlace.example/ref/eddie-zhang-2026',
        referrals: { total: 0, converted: 0, credits: 0, discount: '0%' },
        schedule: { duration: '25 minutes', frequency: '2x weekly', platform: 'Voov' },
    },
    {
        id: 'S1-004',
        name: 'Noah Brown',
        country: 'Israel',
        type: 'Kid',
        level: 'A1',
        teacher: 'Emma Wilson',
        lessons: '4 / 15',
        payment: 'Pending',
        status: 'On hold',
        preferredDay: 'Sunday',
        preferredTime: '5:00 PM',
        wechat: 'Not provided',
        whatsapp: '+972 50-555-0148',
        email: 'noah.parent@example.com',
        guardian: 'Daniel Brown (Father)',
        phone: '+972 50-555-0148',
        referralCode: 'NOAH-BROWN-2026',
        referralLink: 'https://vlace.example/ref/noah-brown-2026',
        referrals: { total: 1, converted: 0, credits: 0, discount: '0%' },
        schedule: { duration: '25 minutes', frequency: '1x weekly', platform: 'Zoom' },
    },
    {
        id: 'S1-005',
        name: 'Mira Wang',
        country: 'UAE',
        type: 'Adult',
        level: 'A2',
        teacher: 'James Smith',
        lessons: '11 / 15',
        payment: 'Paid',
        status: 'Active',
        preferredDay: 'Monday & Friday',
        preferredTime: '6:30 PM',
        wechat: 'mira_wang',
        whatsapp: '+971 50 123 8877',
        email: 'mira.wang@example.com',
        guardian: 'Not applicable',
        phone: '+971 50 123 8877',
        referralCode: 'MIRA-WANG-2026',
        referralLink: 'https://vlace.example/ref/mira-wang-2026',
        referrals: { total: 2, converted: 1, credits: 2, discount: '6%' },
        schedule: { duration: '50 minutes', frequency: '2x weekly', platform: 'Microsoft Teams' },
    },
];

const teachersByCountry = {
    China: ['Maria Santos', 'David Lee', 'Ana Cruz'],
    'South Korea': ['David Lee', 'Hannah Park'],
    Japan: ['Aya Nakamura', 'Maria Santos'],
    UAE: ['James Smith', 'Omar Reyes'],
    'Saudi Arabia': ['Omar Reyes', 'James Smith'],
    Dubai: ['James Smith', 'Omar Reyes'],
    Israel: ['Emma Wilson', 'David Lee'],
};

const teachers = [
    {
        id: 'T1-001',
        name: 'Maria Santos',
        country: 'China',
        type: 'Kids & Adults',
        students: 14,
        today: 6,
        rate: '₱230/hr',
        status: 'Active',
        loginStatus: 'Logged in',
        links: {
            voov: 'voov-8831-CHN',
            meet: 'meet.google.com/ms-china',
            teams: 'teams.msantos.vlace',
            zoom: 'zoom.us/j/88310022',
        },
    },
    {
        id: 'T1-002',
        name: 'David Lee',
        country: 'South Korea',
        type: 'Adults',
        students: 10,
        today: 5,
        rate: '₱250/hr',
        status: 'Active',
        loginStatus: 'Logged out',
        links: {
            voov: 'voov-2190-KR',
            meet: 'meet.google.com/dlee-korea',
            teams: 'teams.dlee.vlace',
            zoom: 'zoom.us/j/21900044',
        },
    },
    {
        id: 'T1-003',
        name: 'Emma Wilson',
        country: 'Israel',
        type: 'Kids',
        students: 12,
        today: 4,
        rate: '₱230/hr',
        status: 'Active',
        loginStatus: 'Logged in',
        links: {
            voov: 'voov-7742-ISR',
            meet: 'meet.google.com/ewilson-israel',
            teams: 'teams.ewilson.vlace',
            zoom: 'zoom.us/j/77420018',
        },
    },
    {
        id: 'T1-004',
        name: 'James Smith',
        country: 'UAE',
        type: 'Kids & Adults',
        students: 8,
        today: 3,
        rate: '₱220/hr',
        status: 'On leave',
        loginStatus: 'Logged out',
        links: {
            voov: '',
            meet: 'meet.google.com/jsmith-uae',
            teams: '',
            zoom: 'zoom.us/j/55210090',
        },
    },
    {
        id: 'T1-005',
        name: 'Ana Cruz',
        country: 'China',
        type: 'Kids',
        students: 9,
        today: 3,
        rate: '₱225/hr',
        status: 'Active',
        loginStatus: 'Logged in',
        links: {
            voov: 'voov-3312-CHN',
            meet: 'meet.google.com/acruz-china',
            teams: 'teams.acruz.vlace',
            zoom: 'zoom.us/j/33120088',
        },
    },
    {
        id: 'T1-006',
        name: 'Hannah Park',
        country: 'South Korea',
        type: 'Adults',
        students: 7,
        today: 2,
        rate: '₱245/hr',
        status: 'Active',
        loginStatus: 'Logged in',
        links: {
            voov: 'voov-9021-KR',
            meet: 'meet.google.com/hpark-korea',
            teams: 'teams.hpark.vlace',
            zoom: 'zoom.us/j/90217701',
        },
    },
    {
        id: 'T1-007',
        name: 'Aya Nakamura',
        country: 'Japan',
        type: 'Kids & Adults',
        students: 6,
        today: 2,
        rate: '₱240/hr',
        status: 'Active',
        loginStatus: 'Logged out',
        links: {
            voov: 'voov-4512-JPN',
            meet: 'meet.google.com/aya-japan',
            teams: 'teams.anakamura.vlace',
            zoom: 'zoom.us/j/45124411',
        },
    },
    {
        id: 'T1-008',
        name: 'Omar Reyes',
        country: 'Saudi Arabia',
        type: 'Adults',
        students: 5,
        today: 3,
        rate: '₱200/hr',
        status: 'Active',
        loginStatus: 'Logged in',
        links: {
            voov: 'voov-6722-KSA',
            meet: 'meet.google.com/oreyes-ksa',
            teams: 'teams.oreyes.vlace',
            zoom: 'zoom.us/j/67223390',
        },
    },
];

const teacherContacts = {
    'Maria Santos': {
        primary: '+63 917 555 0142',
        secondary: '+63 945 555 0274',
        email: 'maria@vlace.com',
        emergencyName: 'Andrea Santos (Sister)',
        emergencyPhone: '+63 918 555 0391',
    },
    'David Lee': {
        primary: '+82 10 5555 2180',
        secondary: '+82 10 5555 2181',
        email: 'david@vlace.com',
        emergencyName: 'Min Lee (Brother)',
        emergencyPhone: '+82 10 5555 2199',
    },
    'Emma Wilson': {
        primary: '+972 52 555 7742',
        secondary: '+972 54 555 7743',
        email: 'emma@vlace.com',
        emergencyName: 'Rachel Wilson (Sister)',
        emergencyPhone: '+972 52 555 7711',
    },
    'James Smith': {
        primary: '+971 50 555 5521',
        secondary: '+971 55 555 5522',
        email: 'james@vlace.com',
        emergencyName: 'Olivia Smith (Spouse)',
        emergencyPhone: '+971 50 555 5599',
    },
    'Ana Cruz': {
        primary: '+63 917 555 3312',
        secondary: '+63 945 555 3313',
        email: 'ana@vlace.com',
        emergencyName: 'Paolo Cruz (Brother)',
        emergencyPhone: '+63 918 555 3300',
    },
    'Hannah Park': {
        primary: '+82 10 5555 9021',
        secondary: '+82 10 5555 9022',
        email: 'hannah@vlace.com',
        emergencyName: 'Jisoo Park (Sister)',
        emergencyPhone: '+82 10 5555 9001',
    },
    'Aya Nakamura': {
        primary: '+81 90 5555 4512',
        secondary: '+81 80 5555 4513',
        email: 'aya@vlace.com',
        emergencyName: 'Ken Nakamura (Brother)',
        emergencyPhone: '+81 90 5555 4500',
    },
    'Omar Reyes': {
        primary: '+966 50 555 6722',
        secondary: '+966 55 555 6723',
        email: 'omar@vlace.com',
        emergencyName: 'Lina Reyes (Spouse)',
        emergencyPhone: '+966 50 555 6700',
    },
};

const teacherAvailability = {
    'Maria Santos': {
        country: 'China',
        slots: [
            { days: ['Monday', 'Wednesday', 'Friday', 'Sunday'], times: ['19:00', '19:30', '20:00'] },
            { days: ['Tuesday', 'Thursday'], times: ['18:30', '19:00'] },
        ],
    },
    'David Lee': {
        country: 'South Korea',
        slots: [
            { days: ['Tuesday', 'Thursday'], times: ['20:00', '20:30'] },
            { days: ['Saturday'], times: ['19:00', '20:00'] },
        ],
    },
    'Ana Cruz': {
        country: 'China',
        slots: [
            { days: ['Wednesday', 'Sunday'], times: ['19:00', '20:00'] },
        ],
    },
    'Hannah Park': {
        country: 'South Korea',
        slots: [
            { days: ['Monday', 'Thursday'], times: ['20:00', '21:00'] },
        ],
    },
    'Aya Nakamura': {
        country: 'Japan',
        slots: [
            { days: ['Tuesday', 'Friday'], times: ['19:00', '20:00'] },
        ],
    },
    'James Smith': {
        country: 'UAE',
        slots: [
            { days: ['Monday', 'Friday'], times: ['18:30', '19:30'] },
            { days: ['Sunday'], times: ['20:00'] },
        ],
    },
    'Omar Reyes': {
        country: 'Saudi Arabia',
        slots: [
            { days: ['Wednesday', 'Sunday'], times: ['19:00', '20:00'] },
        ],
    },
    'Emma Wilson': {
        country: 'Israel',
        slots: [
            { days: ['Sunday'], times: ['17:00', '18:00'] },
            { days: ['Thursday'], times: ['19:00'] },
        ],
    },
};

const teacherWeeklyCalendarDays = [
    { day: 'Monday', short: 'Mon', date: 'Jul 27' },
    { day: 'Tuesday', short: 'Tue', date: 'Jul 28' },
    { day: 'Wednesday', short: 'Wed', date: 'Jul 29' },
    { day: 'Thursday', short: 'Thu', date: 'Jul 30' },
    { day: 'Friday', short: 'Fri', date: 'Jul 31' },
    { day: 'Saturday', short: 'Sat', date: 'Aug 1' },
    { day: 'Sunday', short: 'Sun', date: 'Aug 2' },
];

const teacherWeeklyCalendarTimes = [
    '06:30', '07:00', '07:30', '08:00', '08:30', '09:00',
    '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
    '12:30', '13:00', '13:30', '14:00', '14:30', '15:00',
    '15:30', '16:00', '16:30', '17:00', '17:30', '18:00',
    '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
    '21:30', '22:00', '22:30', '23:00', '23:30',
];

const teacherPayrollPeriodNames = [
    'January 16–30, 2026',
    'January 1–15, 2026',
    'December 16–30, 2025',
    'December 1–15, 2025',
];

const teacherPayrollRecords = {
    'December 1–15, 2025': [
        { date: 'Dec 2, 2025', student: 'Liam Chen', lesson: 'Grammar Review', actualMinutes: 50, status: 'Completed' },
        { date: 'Dec 4, 2025', student: 'Eddie Zhang', lesson: 'Reading Practice', actualMinutes: 25, status: 'Completed' },
        { date: 'Dec 6, 2025', student: 'Mira Wang', lesson: 'Free Conversation', actualMinutes: 25, status: 'Completed' },
        { date: 'Dec 9, 2025', student: 'Sophia Kim', lesson: 'Speaking Practice', actualMinutes: 50, status: 'Completed' },
        { date: 'Dec 12, 2025', student: 'Liam Chen', lesson: 'Past Tense', actualMinutes: 50, status: 'Completed' },
        { date: 'Dec 15, 2025', student: 'Eddie Zhang', lesson: 'New Words', actualMinutes: 25, status: 'Completed' },
    ],
    'December 16–30, 2025': [
        { date: 'Dec 16, 2025', student: 'Mira Wang', lesson: 'Pronunciation', actualMinutes: 25, status: 'Completed' },
        { date: 'Dec 18, 2025', student: 'Liam Chen', lesson: 'Future Tense', actualMinutes: 50, status: 'Completed' },
        { date: 'Dec 20, 2025', student: 'Eddie Zhang', lesson: 'Story Reading', actualMinutes: 25, status: 'Completed' },
        { date: 'Dec 23, 2025', student: 'Sophia Kim', lesson: 'Conversation', actualMinutes: 50, status: 'Completed' },
        { date: 'Dec 27, 2025', student: 'Mira Wang', lesson: 'Vocabulary', actualMinutes: 25, status: 'Completed' },
        { date: 'Dec 30, 2025', student: 'Liam Chen', lesson: 'Monthly Review', actualMinutes: 50, status: 'Completed' },
    ],
    'January 1–15, 2026': [
        { date: 'Dec 31, 2025', student: 'Eddie Zhang', lesson: 'Vocabulary Builder', actualMinutes: 25, status: 'Completed' },
        { date: 'Jan 2, 2026', student: 'Liam Chen', lesson: 'Simple Past Tense', actualMinutes: 50, status: 'Completed' },
        { date: 'Jan 2, 2026', student: 'Mira Wang', lesson: 'Free Conversation', actualMinutes: 25, status: 'Completed' },
        { date: 'Jan 3, 2026', student: 'Eddie Zhang', lesson: 'Reading Practice', actualMinutes: 25, status: 'Completed' },
        { date: 'Jan 5, 2026', student: 'Sophia Kim', lesson: 'Daily Routines', actualMinutes: 50, status: 'Completed' },
        { date: 'Jan 5, 2026', student: 'Liam Chen', lesson: 'Grammar Review', actualMinutes: 25, status: 'Completed' },
        { date: 'Jan 8, 2026', student: 'Mira Wang', lesson: 'Pronunciation', actualMinutes: 25, status: 'Completed' },
        { date: 'Jan 10, 2026', student: 'Eddie Zhang', lesson: 'At the Supermarket', actualMinutes: 25, status: 'Completed' },
        { date: 'Jan 12, 2026', student: 'Sophia Kim', lesson: 'Speaking Practice', actualMinutes: 50, status: 'Completed' },
        { date: 'Jan 15, 2026', student: 'Liam Chen', lesson: 'Progress Review', actualMinutes: 50, status: 'Completed' },
    ],
    'January 16–30, 2026': [
        { date: 'Jan 16, 2026', student: 'Eddie Zhang', lesson: 'New Words', actualMinutes: 25, status: 'Completed' },
        { date: 'Jan 17, 2026', student: 'Mira Wang', lesson: 'Storytelling', actualMinutes: 50, status: 'Completed' },
        { date: 'Jan 20, 2026', student: 'Liam Chen', lesson: 'Future Tense', actualMinutes: 50, status: 'Completed' },
        { date: 'Jan 20, 2026', student: 'Sophia Kim', lesson: 'Conversation', actualMinutes: 25, status: 'Completed' },
        { date: 'Jan 23, 2026', student: 'Eddie Zhang', lesson: 'Reading Practice', actualMinutes: 25, status: 'Completed' },
        { date: 'Jan 26, 2026', student: 'Mira Wang', lesson: 'Grammar Practice', actualMinutes: 50, status: 'Completed' },
        { date: 'Jan 28, 2026', student: 'Liam Chen', lesson: 'Speaking Assessment', actualMinutes: 25, status: 'Completed' },
        { date: 'Jan 30, 2026', student: 'Sophia Kim', lesson: 'Monthly Review', actualMinutes: 50, status: 'Completed' },
    ],
};

const teacherPayrollDeductions = [
    {
        id: 'DED-001',
        period: 'January 1–15, 2026',
        reason: 'Absent',
        amount: 115,
        note: 'Created automatically when the January 7 class was tagged Teacher Absent.',
        relatedDate: 'Jan 7, 2026',
        addedBy: 'VLACE System',
        addedAt: 'Jan 7, 2026 · 7:05 PM PHT',
        source: 'Automatic',
        status: 'Applied',
    },
];

const teacherDocuments = [
    { title: 'Teaching Contract', category: 'Contract', type: 'PDF', updated: 'Jul 10, 2026', status: 'Approved' },
    { title: 'TESOL Certificate', category: 'Certification', type: 'PDF', updated: 'Jul 12, 2026', status: 'Verified' },
    { title: 'Government ID', category: 'Identification', type: 'PDF', updated: 'Jul 12, 2026', status: 'Approved' },
    { title: 'NBI Clearance', category: 'Clearance', type: 'PDF', updated: 'Jul 18, 2026', status: 'Expiring Soon' },
];

const teacherFeedbackRecords = [
    {
        period: 'Jul 2026',
        type: 'Classroom Performance Review',
        reviewedBy: 'Angela Reyes',
        result: '4.8 / 5',
        visibility: 'Published',
        acknowledged: false,
        summary: 'Maria continues to deliver clear, well-paced lessons and maintains a strong learning environment for assigned students.',
        items: [
            { area: 'Lesson Delivery & Clarity', rating: 'Excellent', comment: 'Explains target language clearly and uses examples that match the student level.' },
            { area: 'Student Engagement', rating: 'Very Good', comment: 'Keeps students active through guided questions, checks for understanding, and warm correction.' },
            { area: 'Language Accuracy & Pronunciation', rating: 'Very Good', comment: 'Models pronunciation consistently and gives practical corrections during class.' },
            { area: 'Student Progress & Adaptability', rating: 'Meets Expectations', comment: 'Adapts pacing when students need extra support and documents progress after lessons.' },
            { area: 'Classroom Management & Professionalism', rating: 'Excellent', comment: 'Starts on time, follows class procedures, and keeps a professional teaching presence.' },
        ],
    },
    {
        period: 'Jun 2026',
        type: 'Student Feedback Summary',
        reviewedBy: 'Van A.',
        result: '4.9 / 5',
        visibility: 'Published',
        acknowledged: true,
        summary: 'Student and guardian feedback remained highly positive, with particular strength in rapport and lesson clarity.',
        items: [
            { area: 'Student Satisfaction', rating: 'Excellent', comment: 'Students reported feeling comfortable speaking and asking questions during lessons.' },
            { area: 'Guardian Communication', rating: 'Very Good', comment: 'Feedback notes were clear, timely, and easy for guardians to understand.' },
            { area: 'Learning Outcomes', rating: 'Excellent', comment: 'Assigned students showed steady completion of goals for the period.' },
        ],
    },
    {
        period: 'May 2026',
        type: 'Coaching: Lesson Pacing',
        reviewedBy: 'Angela Reyes',
        result: 'Completed',
        visibility: 'Private',
        acknowledged: false,
        summary: 'Coaching focused on balancing correction time with student speaking time in short class blocks.',
        items: [
            { area: 'Pacing', rating: 'Development Goal', comment: 'Use shorter explanations before practice activities during 25-minute classes.' },
            { area: 'Follow-through', rating: 'Completed', comment: 'Follow-up observation showed improved pacing and cleaner transitions.' },
        ],
    },
];

const teacherFeedbackDefaultItems = [
    { area: 'Lesson Delivery & Clarity', rating: 'Meets Expectations', comment: '' },
    { area: 'Student Engagement', rating: 'Meets Expectations', comment: '' },
    { area: 'Language Accuracy & Pronunciation', rating: 'Meets Expectations', comment: '' },
    { area: 'Student Progress & Adaptability', rating: 'Meets Expectations', comment: '' },
    { area: 'Classroom Management & Professionalism', rating: 'Meets Expectations', comment: '' },
];

let teacherFeedbackDraftItems = teacherFeedbackDefaultItems.map((item) => ({ ...item }));

const employeePolicyLibrary = [
    {
        id: 'POL-001',
        title: 'Code of Conduct',
        category: 'Workplace Standards',
        version: '2.1',
        effective: 'August 1, 2026',
        summary: 'Professional and ethical standards expected from every VLACE employee.',
        requirements: [
            'Act honestly, respectfully, and professionally in every work interaction.',
            'Avoid harassment, discrimination, retaliation, conflicts of interest, and abusive conduct.',
            'Report suspected violations through the approved manager or administrator channel.',
        ],
    },
    {
        id: 'POL-002',
        title: 'Attendance & Timekeeping',
        category: 'Employment',
        version: '1.4',
        effective: 'July 16, 2026',
        summary: 'Attendance, punctuality, time-in, time-out, and absence reporting requirements.',
        requirements: [
            'Record time-in and time-out accurately using the VLACE dashboard.',
            'Notify the assigned supervisor as early as possible when late or absent.',
            'Provide a reason for every correction; the change remains in Profile Activity & Notes.',
        ],
    },
    {
        id: 'POL-003',
        title: 'Leave Policy',
        category: 'Employment',
        version: '1.2',
        effective: 'July 1, 2026',
        summary: 'Leave request, review, approval, and documentation procedures.',
        requirements: [
            'Submit planned leave before the affected schedule whenever reasonably possible.',
            'Report emergency leave directly to the assigned supervisor.',
            'Treat leave as approved only after its status is updated in VLACE.',
        ],
    },
    {
        id: 'POL-004',
        title: 'Student Interaction Guidelines',
        category: 'Teaching & Students',
        version: '3.0',
        effective: 'August 1, 2026',
        summary: 'Safe, respectful, age-appropriate communication and interaction with students.',
        requirements: [
            'Use only approved platforms and professional language.',
            'Never disclose confidential student, guardian, payment, or contact information.',
            'Escalate safeguarding, welfare, or conduct concerns immediately.',
        ],
    },
    {
        id: 'POL-005',
        title: 'Data Privacy & Confidentiality',
        category: 'Security & Privacy',
        version: '2.3',
        effective: 'August 1, 2026',
        summary: 'Required handling of confidential business, student, employee, and payment data.',
        requirements: [
            'Access information only when required for assigned duties.',
            'Do not copy, forward, download, or disclose protected records without authorization.',
            'Report suspected data loss or unauthorized access immediately.',
        ],
    },
    {
        id: 'POL-006',
        title: 'Acceptable Use of Company Systems',
        category: 'Security & Privacy',
        version: '1.6',
        effective: 'June 16, 2026',
        summary: 'Appropriate use of VLACE accounts, devices, integrations, and communication tools.',
        requirements: [
            'Keep passwords private and use multi-factor authentication when enabled.',
            'Do not share login access or bypass role permissions.',
            'Use company systems only for approved operational purposes.',
        ],
    },
    {
        id: 'POL-007',
        title: 'Remote Work Policy',
        category: 'Employment',
        version: '1.1',
        effective: 'June 1, 2026',
        summary: 'Availability, workspace readiness, connectivity, and remote performance expectations.',
        requirements: [
            'Maintain a quiet, professional, and reliable remote workspace.',
            'Remain reachable during assigned working hours and scheduled classes.',
            'Report equipment or connection problems before they affect service whenever possible.',
        ],
    },
    {
        id: 'POL-008',
        title: 'Communication Guidelines',
        category: 'Workplace Standards',
        version: '1.8',
        effective: 'July 1, 2026',
        summary: 'Standards for internal, student, guardian, and customer communication.',
        requirements: [
            'Use clear, courteous, accurate, and timely messages.',
            'Keep operational decisions in approved company channels for traceability.',
            'Do not send confidential data through personal or unapproved accounts.',
        ],
    },
];

let teacherPolicyAcknowledgements = {};

const curriculumGroups = [
    {
        name: 'Kids',
        programs: [
            'Beginner English (Zero English)',
            'CEFR English',
            'Phonics & Pronunciation',
            'Reading & Vocabulary',
            'Speaking & Conversation',
            'Grammar & Writing',
        ],
    },
    {
        name: 'Teenagers',
        programs: [
            'CEFR English',
            'Speaking & Conversation',
            'Grammar & Writing',
            'Reading & Vocabulary',
            'Presentation & Public Speaking',
            'Exam Preparation',
        ],
    },
    {
        name: 'Adults',
        programs: [
            'General English (CEFR)',
            'Business & Workplace English',
            'Sales & Customer Service English',
            'Interview Preparation',
            'IELTS & TOEFL Preparation',
            'Speaking & Pronunciation',
        ],
    },
];

const curriculumModuleCatalog = {
    'Beginner English (Zero English)': [
        'Module 1 · Foundations',
        'Module 2 · Skills Practice',
        'Module 3 · Applied English',
    ],
    'CEFR English': Array.from({ length: 15 }, (_, index) => `Module ${index + 1}`),
    'Phonics & Pronunciation': [
        'Alphabet Sounds',
        'Short Vowel Sounds',
        'Long Vowel Sounds',
        'Consonant Sounds',
        'Blending Words',
        'Beginning Pronunciation',
    ],
    'Reading & Vocabulary': [
        'First Words',
        'Picture Vocabulary',
        'Simple Sentences',
        'Short Stories',
        'Reading Comprehension',
        'Vocabulary Builder',
    ],
    'Speaking & Conversation': [
        'Introducing Myself',
        'Talking About Family',
        'Likes and Dislikes',
        'Everyday Questions',
        'Describing Things',
        'Speaking Practice',
    ],
    'Grammar & Writing': [
        'Sentence Structure',
        'Verb Tenses',
        'Paragraph Writing',
        'Emails and Messages',
        'Essays and Opinions',
        'Editing and Correction',
    ],
    'Presentation & Public Speaking': [
        'Presentation Foundations',
        'Organizing Ideas',
        'Visual Aids',
        'Speaking with Confidence',
        'Audience Questions',
        'Final Presentation',
    ],
    'Exam Preparation': [
        'Exam Skills Foundation',
        'Reading Practice',
        'Listening Practice',
        'Writing Practice',
        'Speaking Practice',
        'Mock Exams and Review',
    ],
    'General English (CEFR)': [
        'Beginner Foundations',
        'Everyday Communication',
        'Grammar Development',
        'Reading and Listening',
        'Speaking and Writing',
        'Advanced Communication',
    ],
    'Business & Workplace English': [
        'Workplace Communication',
        'Business Emails',
        'Meetings',
        'Presentations',
        'Reports and Proposals',
        'Professional Communication',
    ],
    'Sales & Customer Service English': [
        'Understanding Customers',
        'Product and Service Language',
        'Sales Conversations',
        'Handling Questions',
        'Resolving Complaints',
        'Customer Follow-Up',
    ],
    'Interview Preparation': [
        'Resume and Application Language',
        'Professional Introductions',
        'Common Interview Questions',
        'Behavioral Questions',
        'Interview Confidence',
        'Follow-Up Communication',
    ],
    'IELTS & TOEFL Preparation': [
        'Exam Overview',
        'Reading',
        'Listening',
        'Writing',
        'Speaking',
        'Mock Tests and Review',
    ],
    'Speaking & Pronunciation': [
        'Everyday Speaking',
        'Clear Sounds',
        'Word Stress',
        'Sentence Rhythm',
        'Conversation Fluency',
        'Advanced Pronunciation',
    ],
};

const curriculumLessons = [
    { title: 'Alphabet and Classroom Words', group: 'Kids', program: 'Beginner English (Zero English)', module: 'Module 1 · Foundations' },
    { title: 'Greetings and Introductions', group: 'Kids', program: 'Beginner English (Zero English)', module: 'Module 1 · Foundations' },
    { title: 'Colors and Shapes', group: 'Kids', program: 'Beginner English (Zero English)', module: 'Module 1 · Foundations' },
    { title: 'My Family', group: 'Kids', program: 'Beginner English (Zero English)', module: 'Module 1 · Foundations' },
    { title: 'Numbers 1-20', group: 'Kids', program: 'Beginner English (Zero English)', module: 'Module 1 · Foundations' },
    { title: 'Classroom Instructions', group: 'Kids', program: 'Beginner English (Zero English)', module: 'Module 1 · Foundations' },
    { title: 'Asking Simple Questions', group: 'Kids', program: 'Beginner English (Zero English)', module: 'Module 2 · Skills Practice' },
    { title: 'Everyday Objects', group: 'Kids', program: 'Beginner English (Zero English)', module: 'Module 2 · Skills Practice' },
    { title: 'Listen and Repeat', group: 'Kids', program: 'Beginner English (Zero English)', module: 'Module 2 · Skills Practice' },
    { title: 'My Daily Routine', group: 'Kids', program: 'Beginner English (Zero English)', module: 'Module 3 · Applied English' },
    { title: 'At School', group: 'Kids', program: 'Beginner English (Zero English)', module: 'Module 3 · Applied English' },
    { title: 'Mini Conversation Practice', group: 'Kids', program: 'Beginner English (Zero English)', module: 'Module 3 · Applied English' },
    { title: 'At the Supermarket', group: 'Kids', program: 'Speaking & Conversation', module: 'Module 2 · Skills Practice' },
    { title: 'Dealing with Stress', group: 'Teenagers', program: 'Speaking & Conversation', module: 'Module 3 · Applied English' },
    { title: 'Handling Customer Concerns', group: 'Adults', program: 'Sales & Customer Service English', module: 'Module 2 · Skills Practice' },
];

const lessonGroupDetails = {
    Kids: { icon: 'K', ages: 'Ages 4-12', color: 'kids' },
    Teenagers: { icon: 'T', ages: 'Ages 13-17', color: 'teens' },
    Adults: { icon: 'A', ages: 'Ages 18+', color: 'adults' },
};

const lessonProgramCodes = {
    'Beginner English (Zero English)': 'BEG',
    'CEFR English': 'CEF',
    'Phonics & Pronunciation': 'PHO',
    'Reading & Vocabulary': 'RDG',
    'Speaking & Conversation': 'SPK',
    'Grammar & Writing': 'GRW',
    'Presentation & Public Speaking': 'PRS',
    'Exam Preparation': 'EXM',
    'General English (CEFR)': 'GEN',
    'Business & Workplace English': 'BUS',
    'Sales & Customer Service English': 'SCS',
    'Interview Preparation': 'INT',
    'IELTS & TOEFL Preparation': 'IEL',
    'Speaking & Pronunciation': 'SPR',
};

let lessonLibraryState = {
    group: 'Teenagers',
    program: 'CEFR English',
    level: 'A1',
    module: 'Module 1',
    search: '',
    programSearch: '',
    status: 'All',
    fileType: 'All',
    sort: 'Curriculum Order',
    view: 'Table',
    lessons: [],
};

const staffMembers = [
    {
        id: 'ST-001',
        name: 'Angela Reyes',
        role: 'Manager',
        department: 'Operations',
        market: 'Central Operations',
        supervisor: 'Van Acepcion',
        schedule: 'Mon-Fri · 9:00 AM-6:00 PM',
        pay: '₱28,000/month',
        status: 'Active',
        loginStatus: 'Logged in',
    },
    {
        id: 'ST-002',
        name: 'Carlo Mendoza',
        role: 'Customer Service / Staff',
        department: 'Customer Support',
        market: 'Greater China Operations',
        supervisor: 'Angela Reyes',
        schedule: 'Mon-Fri · 1:00 PM-10:00 PM',
        pay: '₱180/hour',
        status: 'Active',
        loginStatus: 'Logged out',
    },
    {
        id: 'ST-003',
        name: 'Nina Flores',
        role: 'Customer Service / Staff',
        department: 'Customer Support',
        market: 'Israel Operations',
        supervisor: 'Angela Reyes',
        schedule: 'Tue-Sat · 3:00 PM-12:00 AM',
        pay: '₱180/hour',
        status: 'Active',
        loginStatus: 'Logged in',
    },
];

const staffContacts = {
    'Angela Reyes': {
        primary: '+63 917 555 2110',
        secondary: '+63 945 555 2111',
        email: 'angela@vlace.com',
        emergencyName: 'Marco Reyes (Brother)',
        emergencyPhone: '+63 918 555 2112',
    },
    'Carlo Mendoza': {
        primary: '+63 917 555 3201',
        secondary: '+63 945 555 3202',
        email: 'carlo@vlace.com',
        emergencyName: 'Mia Mendoza (Sister)',
        emergencyPhone: '+63 918 555 3203',
    },
    'Nina Flores': {
        primary: '+63 917 555 4201',
        secondary: '+63 945 555 4202',
        email: 'nina@vlace.com',
        emergencyName: 'Paula Flores (Mother)',
        emergencyPhone: '+63 918 555 4203',
    },
};

const staffWorkDays = {
    'Angela Reyes': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    'Carlo Mendoza': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    'Nina Flores': ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};

const staffAttendanceRecords = [
    { date: 'Aug 3, 2026', day: 'Monday', scheduled: '9:00 AM-6:00 PM', in: '8:58 AM', out: '6:03 PM', hours: '8.0', status: 'Present' },
    { date: 'Aug 4, 2026', day: 'Tuesday', scheduled: '9:00 AM-6:00 PM', in: '9:18 AM', out: '6:02 PM', hours: '7.7', status: 'Late' },
    { date: 'Aug 5, 2026', day: 'Wednesday', scheduled: '9:00 AM-6:00 PM', in: '9:00 AM', out: '6:00 PM', hours: '8.0', status: 'Present' },
    { date: 'Aug 6, 2026', day: 'Thursday', scheduled: '9:00 AM-6:00 PM', in: '-', out: '-', hours: '0.0', status: 'Absent' },
    { date: 'Aug 7, 2026', day: 'Friday', scheduled: '9:00 AM-6:00 PM', in: '8:55 AM', out: '6:01 PM', hours: '8.0', status: 'Present' },
];

const attendanceStatusOptions = [
    { code: 'P', label: 'Present' },
    { code: 'A', label: 'Absent' },
    { code: 'L', label: 'Approved Leave' },
    { code: 'LT', label: 'Late' },
    { code: 'HD', label: 'Half Day' },
    { code: 'DO', label: 'Day Off' },
    { code: 'H', label: 'Holiday' },
    { code: 'OT', label: 'Overtime' },
];

const staffCalendarMonths = {
    'August 2026': {
        year: 2026,
        monthIndex: 7,
        days: 31,
        leadingBlanks: 5,
        records: {
            3: { code: 'P', timeIn: '08:54', timeOut: '18:03', hours: '8.0', note: '' },
            4: { code: 'P', timeIn: '08:58', timeOut: '18:01', hours: '8.0', note: '' },
            5: { code: 'LT', timeIn: '09:12', timeOut: '18:05', hours: '7.8', note: 'Late arrival recorded.' },
            6: { code: 'P', timeIn: '08:55', timeOut: '18:00', hours: '8.0', note: '' },
            7: { code: 'A', timeIn: '', timeOut: '', hours: '0', note: 'No approved time-in record.' },
            8: { code: 'DO', timeIn: '', timeOut: '', hours: '', note: 'Regular day off.' },
            9: { code: 'DO', timeIn: '', timeOut: '', hours: '', note: 'Regular day off.' },
        },
    },
    'July 2026': {
        year: 2026,
        monthIndex: 6,
        days: 31,
        leadingBlanks: 2,
        records: {
            1: { code: 'P', timeIn: '08:57', timeOut: '18:00', hours: '8.0', note: '' },
            2: { code: 'P', timeIn: '08:59', timeOut: '18:01', hours: '8.0', note: '' },
            3: { code: 'P', timeIn: '08:56', timeOut: '18:04', hours: '8.0', note: '' },
            6: { code: 'L', timeIn: '', timeOut: '', hours: '0', note: 'Approved leave.' },
        },
    },
    'June 2026': {
        year: 2026,
        monthIndex: 5,
        days: 30,
        leadingBlanks: 0,
        records: {
            1: { code: 'P', timeIn: '08:55', timeOut: '18:00', hours: '8.0', note: '' },
            2: { code: 'HD', timeIn: '09:00', timeOut: '13:00', hours: '4.0', note: 'Approved half-day schedule.' },
            5: { code: 'OT', timeIn: '08:52', timeOut: '19:15', hours: '9.0', note: 'Approved overtime.' },
        },
    },
};

let selectedStaffCalendarDay = null;

const staffDocuments = [
    { title: 'Employment Contract', category: 'Contract', type: 'PDF', updated: 'Jul 3, 2026', status: 'Approved' },
    { title: 'Government ID', category: 'Identification', type: 'PDF', updated: 'Jul 4, 2026', status: 'Approved' },
    { title: 'Confidentiality Agreement', category: 'Compliance', type: 'PDF', updated: 'Jul 8, 2026', status: 'Verified' },
    { title: 'Background Check', category: 'Clearance', type: 'PDF', updated: 'Jul 18, 2026', status: 'Pending Review' },
];

const staffFeedbackRecords = [
    { period: 'Jul 2026', type: 'Operations Performance Review', reviewedBy: 'Van A.', result: '4.7 / 5', visibility: 'Published', acknowledged: false },
    { period: 'Jun 2026', type: 'Customer Response Quality', reviewedBy: 'Angela Reyes', result: '4.8 / 5', visibility: 'Published', acknowledged: true },
    { period: 'May 2026', type: 'Coaching: Escalation Handling', reviewedBy: 'Van A.', result: 'Completed', visibility: 'Private', acknowledged: false },
];

const staffPayrollRows = [
    { cutoff: 'Jan 16-30, 2026', days: '10', hours: '80', gross: '₱14,000.00', adjustment: '—', net: '₱14,000.00', status: 'For Review' },
    { cutoff: 'Jan 1-15, 2026', days: '11', hours: '88', gross: '₱14,000.00', adjustment: '—', net: '₱14,000.00', status: 'For Review' },
    { cutoff: 'Dec 16-30, 2025', days: '10', hours: '80', gross: '₱14,000.00', adjustment: '—', net: '₱14,000.00', status: 'Paid' },
    { cutoff: 'Dec 1-15, 2025', days: '11', hours: '88', gross: '₱14,000.00', adjustment: '—', net: '₱14,000.00', status: 'Paid' },
];

const sparkInitialMessages = [
    {
        role: 'jarvis',
        text: 'Good evening, Van. I’m SPARK, your VLACE AI Assistant. I can help you manage schedules, interpret data, prepare messages, create tasks, find records, and suggest actions across the dashboard.',
        time: 'Now',
    },
    {
        role: 'jarvis',
        text: 'I found 3 areas that may need your attention today: 2 campaigns need review, 3 payments are pending or failed, and 18 marketing leads require follow-up.',
        time: 'Now',
    },
];

let sparkMessages = [...sparkInitialMessages];
let pendingSparkAction = null;
let selectedStudentId = 'S1-001';
let selectedTeacherId = 'T1-001';
let selectedStaffId = 'ST-001';
let activeFeedbackRow = null;
let activeTeacherFeedbackRow = null;
let activeVideoUrlRow = null;
let activeTeacherSlotCell = null;
let activePayrollReceiptContext = null;
let activeEmployeeDocumentKind = 'teacher';
let activeEmployeeFeedbackKind = 'teacher';
let activeEmployeeNoteKind = 'staff';
let activeStaffContactKind = 'staff';
let teacherWeekOffset = 0;
const payrollReceiptUploads = {};

const usdFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const phpFormatter = new Intl.NumberFormat('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function refreshIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function formatPhtTime(date = new Date()) {
    return date.toLocaleTimeString('en-PH', {
        timeZone: 'Asia/Manila',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });
}

function getMonthlyPeriod(country) {
    const now = new Date();
    const phMonthName = now.toLocaleDateString('en-US', { timeZone: 'Asia/Manila', month: 'long' });
    const phYear = Number(now.toLocaleDateString('en-US', { timeZone: 'Asia/Manila', year: 'numeric' }));
    const phMonthNumber = Number(now.toLocaleDateString('en-US', { timeZone: 'Asia/Manila', month: 'numeric' }));
    const monthlyPeriodEnd = new Date(Date.UTC(phYear, phMonthNumber, 0)).getUTCDate();
    const team = country === 'All Countries' ? 'All country teams' : `${country} team`;
    return `${phMonthName} 1-${monthlyPeriodEnd}, ${phYear} · ${team}`;
}

function getMonthlyFinancials(country) {
    if (country !== 'All Countries') return monthlyFinancialsByCountry[country];

    return Object.values(monthlyFinancialsByCountry).reduce((total, item) => ({
        completedLessons: total.completedLessons + item.completedLessons,
        grossIncomeUsd: total.grossIncomeUsd + item.grossIncomeUsd,
        teacherCostPhp: total.teacherCostPhp + item.teacherCostPhp,
    }), { completedLessons: 0, grossIncomeUsd: 0, teacherCostPhp: 0 });
}

function setText(selector, value) {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
}

function normalizeBreadcrumbPart(part) {
    return typeof part === 'string' ? { label: part } : part;
}

function setBreadcrumbs(parts = ['Dashboard', 'Overview']) {
    const breadcrumbs = document.getElementById('pageBreadcrumbs');
    if (!breadcrumbs) return;

    const normalizedParts = parts.map(normalizeBreadcrumbPart);
    breadcrumbs.innerHTML = normalizedParts.map((part, index) => {
        const label = escapeHtml(part.label);
        const isCurrent = index === normalizedParts.length - 1;
        const divider = index < parts.length - 1 ? '<b>›</b>' : '';
        const control = isCurrent || !part.action
            ? `<strong>${label}</strong>`
            : `<button type="button" data-breadcrumb-action="${escapeHtml(part.action)}">${label}</button>`;
        return `${control}${divider}`;
    }).join('');
}

function getSectionBreadcrumb(section) {
    const title = sectionTitles[section] || 'Admin Dashboard';
    if (section === 'overview') return [{ label: 'Dashboard', action: 'overview' }, { label: 'Overview' }];
    if (section === 'students') return [{ label: 'Students', action: 'students' }, { label: 'Directory' }];
    if (section === 'teachers') return [{ label: 'Teachers', action: 'teachers' }, { label: 'Directory' }];
    if (section === 'staff') return [{ label: 'Staff', action: 'staff' }, { label: 'Directory' }];
    if (section === 'inbox') return [{ label: 'Dashboard', action: 'overview' }, { label: 'Communication' }];
    if (['email', 'chatbot', 'slack', 'reminders'].includes(section)) return [{ label: 'Communication' }, { label: title }];
    if (['campaigns', 'adsets', 'ads', 'audiences', 'leads', 'creative', 'budget', 'performance', 'integrations'].includes(section)) return [{ label: 'Marketing' }, { label: title }];
    return [{ label: 'Dashboard', action: 'overview' }, { label: title }];
}

let activeTeacherPortalSection = 'teacher-overview';
let activeTeacherPortalTeacherId = 'T1-001';
const teacherPortalSlotOverrides = {};
const teacherPortalScheduleCounts = {};
const teacherPortalVideoUrls = {};
const teacherPortalLessonStatuses = {};

const teacherPortalTitles = {
    'teacher-overview': 'Teacher Dashboard',
    'teacher-schedule': 'My Schedule',
    'teacher-students': 'My Students',
    'teacher-lessons': 'Lessons',
    'teacher-feedback': 'Feedback',
    'teacher-policies': 'Company Policies',
    'teacher-profile': 'My Profile',
};

function getTeacherPortalTeacher() {
    return teachers.find((teacher) => teacher.id === activeTeacherPortalTeacherId) || teachers[0];
}

function getTeacherPortalStudents() {
    const teacher = getTeacherPortalTeacher();
    return students.filter((student) => student.teacher === teacher.name);
}

function getTeacherPortalLessons() {
    const teacher = getTeacherPortalTeacher();
    const assignedStudents = getTeacherPortalStudents();
    return assignedStudents.slice(0, 6).map((student, index) => ({
        student,
        date: ['Today', 'Today', 'Tomorrow', 'Aug 10, 2026', 'Aug 11, 2026', 'Aug 12, 2026'][index] || 'This week',
        time: student.preferredTime,
        duration: student.schedule.duration,
        platform: student.schedule.platform,
        topic: ['Free Conversation', 'Alphabet and Classroom Words', 'Past Tense Review', 'Speaking Confidence', 'Grammar Practice', 'Reading Fluency'][index % 6],
        status: index < 2 ? 'Scheduled' : index === 2 ? 'Pending Prep' : 'Upcoming',
    }));
}

function activateTeacherPortal(section) {
    activeTeacherPortalSection = section;
    document.querySelectorAll('[data-teacher-portal-target]').forEach((button) => {
        button.classList.toggle('active', button.dataset.teacherPortalTarget === section);
    });
    document.getElementById('teacherSidebar')?.classList.remove('open');
    renderTeacherPortal();
}

function renderTeacherPortal() {
    const root = document.getElementById('teacherPortalContent');
    const teacher = getTeacherPortalTeacher();
    if (!root || !teacher) return;

    setText('#teacherPortalTitle', teacherPortalTitles[activeTeacherPortalSection] || 'Teacher Dashboard');
    setText('#teacherPortalName', teacher.name);
    setText('#teacherPortalInitials', getInitials(teacher.name));

    root.innerHTML = `
        ${activeTeacherPortalSection === 'teacher-overview' ? renderTeacherPortalOverview(teacher) : ''}
        ${activeTeacherPortalSection === 'teacher-schedule' ? renderTeacherPortalSchedule(teacher) : ''}
        ${activeTeacherPortalSection === 'teacher-students' ? renderTeacherPortalStudents(teacher) : ''}
        ${activeTeacherPortalSection === 'teacher-lessons' ? renderTeacherPortalLessons(teacher) : ''}
        ${activeTeacherPortalSection === 'teacher-feedback' ? renderTeacherPortalFeedback(teacher) : ''}
        ${activeTeacherPortalSection === 'teacher-policies' ? renderTeacherPortalPolicies(teacher) : ''}
        ${activeTeacherPortalSection === 'teacher-profile' ? renderTeacherPortalProfile(teacher) : ''}
    `;
    bindTeacherPortalEvents(root);
    refreshIcons();
}

function renderTeacherPortalHero(teacher, title, subtitle) {
    return `<section class="teacher-portal-hero"><div><p class="eyebrow">TEACHER WORKSPACE</p><h2>${escapeHtml(title)}</h2><small>${escapeHtml(subtitle)}</small></div><span class="status status-active">${escapeHtml(teacher.status)}</span></section>`;
}

function renderTeacherPortalOverview(teacher) {
    const myStudents = getTeacherPortalStudents();
    const lessons = getTeacherPortalLessons();
    return `
        ${renderTeacherPortalHero(teacher, `Welcome, ${teacher.name}`, 'View today’s classes, assigned students, classroom links, feedback, and policy acknowledgements.')}
        <section class="teacher-portal-kpis">
            <article><span>Classes Today</span><strong>${teacher.today}</strong><small>Scheduled through VLACE</small></article>
            <article><span>My Students</span><strong>${myStudents.length}</strong><small>${teacher.country} team</small></article>
            <article><span>Attendance</span><strong>98%</strong><small>This month</small></article>
            <article><span>Pending Feedback</span><strong>2</strong><small>Submit after completed lessons</small></article>
        </section>
        <section class="teacher-portal-grid">
            <article class="teacher-portal-panel"><div class="teacher-panel-head"><div><h3>Today’s Classes</h3><p>Upcoming lessons and classroom access</p></div><button type="button" data-teacher-portal-target="teacher-schedule">View Schedule</button></div>${renderTeacherPortalLessonList(lessons.slice(0, 3))}</article>
            <article class="teacher-portal-panel"><div class="teacher-panel-head"><div><h3>Quick Actions</h3><p>Teacher-safe actions only</p></div></div><div class="teacher-quick-actions"><button type="button" data-teacher-action="availability">Update Availability</button><button type="button" data-teacher-action="feedback">Submit Feedback</button><button type="button" data-teacher-protected-lesson="Lesson Materials">Open Lesson Materials</button><button type="button" data-teacher-portal-target="teacher-policies">Review Policies</button></div></article>
        </section>
    `;
}

function renderTeacherPortalSchedule(teacher) {
    const stats = getTeacherPortalScheduleStats(teacher);
    const payStats = getTeacherPortalPayStats(teacher);
    return `
        ${renderTeacherPortalHero(teacher, 'My Schedule', 'Classes assigned to you by the admin team. Teacher view is read-only except feedback and availability requests.')}
        <section class="teacher-portal-kpis teacher-pay-kpis">
            <article><span>Lessons Completed Today</span><strong>${payStats.completedToday}</strong><small>Finished classes for today</small></article>
            <article><span>Classes Completed This Month</span><strong>${payStats.completedThisMonth}</strong><small>${payStats.monthLabel} payroll count</small></article>
            <article><span>Estimated Monthly Salary</span><strong>${formatPeso(payStats.monthlySalary)}</strong><small>${formatPeso(payStats.rate)}/hr after completed lessons</small></article>
        </section>
        <section class="teacher-portal-kpis teacher-schedule-kpis">
            <article><span>Opened Availability</span><strong>${stats.opened}</strong><small>Open time plus assigned classes</small></article>
            <article><span>Available to Assign</span><strong>${stats.open}</strong><small>Open and not yet assigned</small></article>
            <article><span>Assigned Slots</span><strong>${stats.assigned}</strong><small>Locked by Admin</small></article>
            <article><span>Cancelled</span><strong>${stats.cancelled}</strong><small>This portal session</small></article>
            <article><span>Reassigned to me</span><strong>${stats.reassignedToMe}</strong><small>Moved from another teacher</small></article>
            <article><span>Reassigned from me</span><strong>${stats.reassignedFromMe}</strong><small>No salary for original teacher</small></article>
        </section>
        <section class="teacher-weekly-calendar-card teacher-portal-weekly-card">
            <div class="teacher-weekly-calendar-head">
                <div>
                    <h3>Teacher Weekly Schedule</h3>
                    <p>30-minute weekly view · Philippine Time · classroom links are prepared by Admin.</p>
                </div>
                <div class="teacher-week-range">
                    <button type="button" data-teacher-action="availability" aria-label="Previous week"><i data-lucide="chevron-left"></i></button>
                    <strong>July 27 – August 2</strong>
                    <button type="button" data-teacher-action="availability" aria-label="Next week"><i data-lucide="chevron-right"></i></button>
                </div>
            </div>
            <div class="teacher-schedule-control-note teacher-portal-note">
                <strong>Teacher View</strong>
                <span>Opened Availability means every teacher-open slot. Available to Assign means open slots that do not have a student yet.</span>
            </div>
            <div class="teacher-slot-legend teacher-portal-note">
                <span><i class="legend-open"></i>Available to Assign</span>
                <span><i class="legend-booked"></i>Assigned and Locked</span>
                <span><i class="legend-closed"></i>Closed</span>
            </div>
            <div class="teacher-open-slots-bar">
                <div>
                    <strong>${stats.opened} opened availability slots · ${stats.open} available to assign · ${stats.assigned} assigned</strong>
                    <span>Click available or closed cells to update availability. Assigned slots are locked.</span>
                </div>
                <button type="button" data-teacher-action="availability">Request Availability Update</button>
            </div>
            <div class="teacher-weekly-calendar-wrap">
                <table class="teacher-weekly-calendar teacher-portal-weekly-calendar">
                    ${renderTeacherPortalWeeklyCalendar(teacher)}
                </table>
            </div>
        </section>
    `;
}

function getTeacherPortalBookings(teacher) {
    const lessons = getTeacherPortalLessons();
    const preferred = lessons.reduce((map, lesson, index) => {
        const day = ['Monday', 'Wednesday', 'Friday', 'Sunday'][index % 4];
        const time = lesson.time.includes('9:00') ? '21:00' : lesson.time.includes('8:') ? '20:00' : lesson.time.includes('7:') ? '19:00' : '18:30';
        map[`${day}-${time}`] = lesson;
        return map;
    }, {});
    const adminBookings = buildTeacherBookedSlots(teacher);
    Object.entries(adminBookings).forEach(([key, booking]) => {
        preferred[key] = {
            student: booking.student,
            date: 'Admin assigned',
            time: inputTimeToDisplay(key.split('-').at(-1)),
            duration: booking.student.schedule?.duration || '25 minutes',
            platform: booking.platform,
            topic: booking.topic,
            status: 'Scheduled',
        };
    });
    return preferred;
}

function getTeacherPortalSlotKey(teacher, day, time) {
    return `${teacher.id}:${day}:${time}`;
}

function getTeacherPortalSlotState(teacher, day, time, dayMap) {
    return teacherPortalSlotOverrides[getTeacherPortalSlotKey(teacher, day, time)] || (dayMap[day]?.includes(time) ? 'open' : 'closed');
}

function getTeacherPortalScheduleStats(teacher) {
    const availability = teacherAvailability[teacher.name]?.slots || [];
    const dayMap = getTeacherWeeklyDayMap(availability);
    const bookings = getTeacherPortalBookings(teacher);
    const totals = teacherWeeklyCalendarDays.reduce((stats, { day }) => {
        teacherWeeklyCalendarTimes.forEach((time) => {
            if (bookings[`${day}-${time}`]) {
                stats.assigned += 1;
            } else if (getTeacherPortalSlotState(teacher, day, time, dayMap) === 'open') {
                stats.open += 1;
            }
        });
        return stats;
    }, { open: 0, assigned: 0 });
    const activity = teacherPortalScheduleCounts[teacher.id] || { cancelled: 0 };
    const lessonRows = getTeacherPortalStudentLessonRows(teacher);
    return {
        ...totals,
        opened: totals.open + totals.assigned,
        cancelled: activity.cancelled || lessonRows.filter((row) => row.status === 'Cancelled').length,
        reassignedToMe: lessonRows.filter((row) => row.status === 'Reassigned to me').length,
        reassignedFromMe: lessonRows.filter((row) => row.status === 'Reassigned from me').length,
    };
}

function getTeacherPortalOpenSlotCount(teacher) {
    return getTeacherPortalScheduleStats(teacher).open;
}

function getTeacherPortalPayStats(teacher) {
    const rate = getTeacherHourlyRate(teacher);
    const rows = getTeacherPortalStudentLessonRows(teacher);
    const completedMonthlyRecords = rows.filter((row) => ['Completed', 'Student is late'].includes(row.status));
    const salaryRows = rows.filter(isTeacherPortalLessonPayable);
    const monthlySalary = salaryRows.reduce((sum, row) => sum + (getPayableHours(parseInt(row.duration, 10)) * rate), 0);
    const completedToday = completedMonthlyRecords.filter((row) => row.date === 'Jul 30, 2026').length;

    return {
        rate,
        completedToday,
        completedThisMonth: completedMonthlyRecords.length,
        monthlySalary,
        monthLabel: 'January 2026',
    };
}

function renderTeacherPortalWeeklyCalendar(teacher) {
    const availability = teacherAvailability[teacher.name]?.slots || [];
    const dayMap = getTeacherWeeklyDayMap(availability);
    const bookings = getTeacherPortalBookings(teacher);
    return `
        <thead>
            <tr>
                <th>Time</th>
                ${teacherWeeklyCalendarDays.map((day) => `<th><strong>${day.short}</strong><span>${day.date}</span></th>`).join('')}
            </tr>
        </thead>
        <tbody>
            ${teacherWeeklyCalendarTimes.map((time) => `
                <tr>
                    <th>${inputTimeToRange(time)}</th>
                    ${teacherWeeklyCalendarDays.map(({ day }) => {
                        const booking = bookings[`${day}-${time}`];
                        const state = getTeacherPortalSlotState(teacher, day, time, dayMap);
                        const isOpen = state === 'open';
                        if (booking) {
                            return `<td class="teacher-calendar-slot booked teacher-portal-class-slot" data-teacher-locked-slot="${escapeHtml(`${day}-${time}`)}"><strong>Assigned · ${escapeHtml(booking.student.name)}</strong><span>${escapeHtml(booking.topic)} · ${escapeHtml(booking.platform)}</span><button type="button" data-teacher-classroom-day="${escapeHtml(day)}" data-teacher-classroom-time="${escapeHtml(time)}">Enter</button></td>`;
                        }
                        return `<td class="teacher-calendar-slot ${isOpen ? 'open' : 'closed'} teacher-portal-toggle-slot" data-teacher-slot-day="${escapeHtml(day)}" data-teacher-slot-time="${escapeHtml(time)}"><strong>${isOpen ? 'Available' : 'Closed'}</strong><span>${isOpen ? 'Admin can assign' : 'Teacher is not available'}</span></td>`;
                    }).join('')}
                </tr>
            `).join('')}
        </tbody>
    `;
}

function renderTeacherPortalStudents(teacher) {
    const rows = getTeacherPortalStudentLessonRows(teacher);
    return `
        ${renderTeacherPortalHero(teacher, 'My Students', 'Assigned students and their lesson access details.')}
        <article class="teacher-portal-panel">
            <div class="teacher-panel-head">
                <div>
                    <h3>Student Lessons</h3>
                    <p>${getTeacherPortalStudents().length} assigned students · classroom links use the teacher meeting URLs prepared by Admin.</p>
                </div>
            </div>
            <div class="teacher-schedule-control-note teacher-portal-note">
                <strong>Teacher View</strong>
                <span>Use Enter Classroom when a meeting URL is available. Salary is counted only for payable completed lessons with an uploaded video URL.</span>
            </div>
            <div class="table-wrap">
                <table class="teacher-portal-table teacher-student-lessons-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Topic</th>
                            <th>Student</th>
                            <th>Duration</th>
                            <th>Lesson Status</th>
                            <th>Student Classroom</th>
                            <th>Class Recording</th>
                            <th>Teacher Feedback</th>
                            <th>Video URL</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows.map((row) => {
                            const classroomButton = row.hasClassroom
                                ? `<button class="enter-classroom-button" type="button" data-teacher-lesson-room="${escapeHtml(row.id)}">Enter Classroom</button>`
                                : '<span class="lesson-link-unavailable">Not ready</span>';
                            const savedVideoUrl = getTeacherPortalVideoUrl(row);
                            const payWarning = isTeacherPortalLessonPayable(row) ? 'Payable' : getTeacherPortalPayWarning(row);
                            return `
                                <tr>
                                    <td>${escapeHtml(row.date)}</td>
                                    <td><button class="lesson-pdf-link" type="button" data-teacher-protected-lesson="${escapeHtml(row.topic)}"><span>PDF</span>${escapeHtml(row.topic)}</button></td>
                                    <td><strong>${escapeHtml(row.student.name)}</strong><small>${escapeHtml(row.student.id)} · ${escapeHtml(row.student.country)}</small></td>
                                    <td>${escapeHtml(row.duration)}</td>
                                    <td>${renderTeacherPortalStatusControl(row)}</td>
                                    <td>${classroomButton}</td>
                                    <td>${row.status === 'Completed' ? `<button class="feedback-button recording-view-button" type="button" data-teacher-video-view="${escapeHtml(row.id)}">▶ View Recording</button>` : '<span class="lesson-link-unavailable">Not available</span>'}</td>
                                    <td><div class="teacher-feedback-actions"><button class="feedback-button" type="button" data-teacher-action="feedback">View</button><button class="feedback-button add-feedback-button" type="button" data-teacher-action="feedback">Add</button></div></td>
                                    <td>${savedVideoUrl ? `<button class="feedback-button meeting-link-button" type="button" data-teacher-video-view="${escapeHtml(row.id)}">View Video</button>` : '<span class="lesson-link-unavailable">No URL yet</span>'}<small class="teacher-pay-warning">${escapeHtml(payWarning)}</small></td>
                                    <td><button class="feedback-button meeting-link-button" type="button" data-teacher-video-upload="${escapeHtml(row.id)}">${savedVideoUrl ? 'Update Video URL' : 'Upload Video URL'}</button></td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </article>
    `;
}

function getTeacherPortalStudentLessonRows(teacher) {
    const [meetingPlatform, meetingValue] = getTeacherMeetingSource(teacher);
    const hasClassroom = meetingPlatform !== 'Missing' && Boolean(meetingValue);
    const topics = ['Past Tense Review', 'Free Conversation', 'Alphabet and Classroom Words', 'Grammar Practice', 'Speaking Confidence', 'Reading Fluency', 'Monthly Review'];
    const dates = ['Jul 30, 2026', 'Aug 1, 2026', 'Aug 3, 2026', 'Aug 5, 2026', 'Aug 7, 2026', 'Aug 6, 2026', 'Aug 10, 2026'];
    const statuses = ['Completed', 'Cancelled', 'Student is absent', 'Student is late', 'Reassigned to me', 'Reassigned from me', 'Completed'];
    return getTeacherPortalStudents().flatMap((student, studentIndex) => {
        const lessonCount = 4;
        return Array.from({ length: lessonCount }, (_, lessonIndex) => {
            const index = (studentIndex * lessonCount) + lessonIndex;
            const id = `${student.id}-${lessonIndex}`;
            const date = dates[index % dates.length];
            const isDue = isTeacherPortalLessonDue(date);
            const baseStatus = statuses[index % statuses.length];
            const status = isDue ? (teacherPortalLessonStatuses[id] || baseStatus) : 'Pending';
            return {
                id,
                student,
                date,
                day: student.preferredDay.split('&')[0].trim() || 'Monday',
                time: student.preferredTime.includes('9:00') ? '21:00' : student.preferredTime.includes('8:') ? '20:00' : student.preferredTime.includes('7:') ? '19:00' : '18:30',
                topic: topics[index % topics.length],
                duration: student.schedule.duration,
                platform: student.schedule.platform,
                status,
                baseStatus,
                isDue,
                hasClassroom,
                videoUrl: status === 'Completed' ? `https://vlace.example/recordings/${student.id.toLowerCase()}-${lessonIndex + 1}` : '',
            };
        });
    }).sort((a, b) => {
        const dateDifference = parseTeacherPortalLessonDate(a.date) - parseTeacherPortalLessonDate(b.date);
        if (dateDifference !== 0) return dateDifference;
        return a.student.name.localeCompare(b.student.name) || a.topic.localeCompare(b.topic);
    });
}

function parseTeacherPortalLessonDate(dateLabel) {
    const parsedDate = Date.parse(dateLabel);
    return Number.isNaN(parsedDate) ? 0 : parsedDate;
}

function renderTeacherPortalStatusControl(row) {
    const status = marketingStatus(row.status);
    const lockedReason = getTeacherPortalStatusLockedReason(row);
    if (lockedReason) {
        return `<button class="teacher-status-button locked" type="button" data-teacher-status-locked="${escapeHtml(row.id)}">${status}<small>${escapeHtml(lockedReason)}</small></button>`;
    }
    return `<button class="teacher-status-button" type="button" data-teacher-status-edit="${escapeHtml(row.id)}">${status}<small>Click to update</small></button>`;
}

function getTeacherPortalStatusLockedReason(row) {
    if (!row.isDue) return 'Pending until class time';
    if (row.status === 'Reassigned from me') return 'Locked by reassignment';
    return '';
}

function isTeacherPortalLessonDue(dateLabel) {
    const lessonDate = new Date(`${dateLabel} 23:59:59 GMT+0800`);
    const currentDate = new Date('Aug 8, 2026 23:59:59 GMT+0800');
    return lessonDate <= currentDate;
}

function getTeacherPortalVideoUrl(row) {
    return teacherPortalVideoUrls[row.id] || row.videoUrl || '';
}

function isTeacherPortalLessonPayable(row) {
    return ['Completed', 'Student is late'].includes(row.status) && Boolean(getTeacherPortalVideoUrl(row));
}

function getTeacherPortalPayWarning(row) {
    if (row.status === 'Reassigned from me') return 'No salary: reassigned from this teacher';
    if (['Completed', 'Student is late'].includes(row.status) && !getTeacherPortalVideoUrl(row)) return 'No salary until video URL is uploaded';
    if (row.status === 'Student is late') return 'Payable';
    if (row.status !== 'Completed') return 'Not counted for salary';
    return 'Not counted for salary';
}

function renderTeacherPortalLessons(teacher) {
    return `${renderTeacherPortalHero(teacher, 'Lessons', 'Approved lesson materials and assigned topics for upcoming classes.')}<section class="teacher-lesson-library">${['Alphabet and Classroom Words', 'Free Conversation', 'Past Tense Review', 'Speaking Confidence', 'Grammar Practice', 'Reading Fluency'].map((lesson, index) => `<article><span>${index < 2 ? 'Today' : 'Library'}</span><h3>${lesson}</h3><p>${['Kids', 'Adults', 'Grammar', 'Conversation', 'Review', 'Reading'][index]} · Protected viewer only</p><button type="button" data-teacher-protected-lesson="${escapeHtml(lesson)}">Open Material</button></article>`).join('')}</section>`;
}

function renderTeacherPortalFeedback(teacher) {
    return `${renderTeacherPortalHero(teacher, 'Feedback', 'Submit class notes after lessons and review admin feedback.')}<article class="teacher-portal-panel"><div class="teacher-panel-head"><div><h3>Feedback Queue</h3><p>Student-facing feedback is reviewed by Admin or Manager before publishing.</p></div><button type="button" data-teacher-action="feedback">+ Submit Feedback</button></div>${renderTeacherPortalLessonList(getTeacherPortalLessons().slice(0, 4), true)}</article>`;
}

function renderTeacherPortalPolicies(teacher) {
    return `${renderTeacherPortalHero(teacher, 'Company Policies', 'Read and acknowledge policies assigned to teachers.')}<section class="teacher-policy-list">${companyPolicies.filter((policy) => policy.status === 'Published').slice(0, 6).map((policy, index) => `<article><div><strong>${escapeHtml(policy.title)}</strong><small>${escapeHtml(policy.category)} · Version ${escapeHtml(policy.version)}</small></div>${marketingStatus(index < 4 ? 'Acknowledged' : 'Pending')}<button type="button" data-teacher-policy="${escapeHtml(policy.id)}">${index < 4 ? 'View' : 'Acknowledge'}</button></article>`).join('')}</section>`;
}

function renderTeacherPortalProfile(teacher) {
    return `${renderTeacherPortalHero(teacher, 'My Profile', 'Teacher account information visible to you. Contact Admin for changes.')}<section class="teacher-profile-grid"><article><span>Name</span><strong>${escapeHtml(teacher.name)}</strong><small>${escapeHtml(teacher.id)}</small></article><article><span>Country Team</span><strong>${escapeHtml(teacher.country)}</strong><small>${escapeHtml(teacher.type)}</small></article><article><span>Rate</span><strong>${escapeHtml(teacher.rate)}</strong><small>Payroll managed by Admin</small></article><article><span>Meeting Setup</span><strong>${hasCompleteMeetingLinks(teacher) ? 'Complete' : 'Needs review'}</strong><small>Links are hidden from students until assigned</small></article></section><article class="teacher-portal-panel"><div class="teacher-panel-head"><div><h3>Account Requests</h3><p>Ask Admin to update profile, schedule preferences, or login access.</p></div><button type="button" data-teacher-action="profile">Request Profile Update</button></div></article>`;
}

function renderTeacherPortalLessonList(lessons, feedback = false) {
    return `<div class="teacher-lesson-list">${lessons.map((lesson) => `<article><div><strong>${escapeHtml(lesson.date)} · ${escapeHtml(lesson.time)}</strong><small>${escapeHtml(lesson.student.name)} · ${escapeHtml(lesson.duration)} · ${escapeHtml(lesson.platform)}</small></div><span>${escapeHtml(lesson.topic)}</span>${marketingStatus(lesson.status)}<button type="button" data-teacher-action="${feedback ? 'feedback' : 'classroom'}">${feedback ? 'Add Feedback' : 'Enter Classroom'}</button></article>`).join('')}</div>`;
}

function bindTeacherPortalEvents(root) {
    root.querySelectorAll('[data-teacher-portal-target]').forEach((button) => {
        button.addEventListener('click', () => activateTeacherPortal(button.dataset.teacherPortalTarget));
    });
    root.querySelectorAll('[data-teacher-action]').forEach((button) => {
        button.addEventListener('click', () => openTeacherPortalAction(button.dataset.teacherAction));
    });
    root.querySelectorAll('[data-teacher-protected-lesson]').forEach((button) => {
        button.addEventListener('click', () => openTeacherProtectedLesson(button.dataset.teacherProtectedLesson));
    });
    root.querySelectorAll('[data-teacher-lesson-room]').forEach((button) => {
        button.addEventListener('click', () => openTeacherPortalStudentLessonClassroom(button.dataset.teacherLessonRoom));
    });
    root.querySelectorAll('[data-teacher-video-upload]').forEach((button) => {
        button.addEventListener('click', () => openTeacherPortalVideoUrlModal(button.dataset.teacherVideoUpload));
    });
    root.querySelectorAll('[data-teacher-video-view]').forEach((button) => {
        button.addEventListener('click', () => openTeacherPortalVideoUrl(button.dataset.teacherVideoView));
    });
    root.querySelectorAll('[data-teacher-status-edit]').forEach((button) => {
        button.addEventListener('click', () => openTeacherPortalStatusModal(button.dataset.teacherStatusEdit));
    });
    root.querySelectorAll('[data-teacher-status-locked]').forEach((button) => {
        button.addEventListener('click', () => openTeacherPortalLockedStatusInfo(button.dataset.teacherStatusLocked));
    });
    root.querySelectorAll('[data-teacher-classroom-day][data-teacher-classroom-time]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            openTeacherPortalClassroomModal(button.dataset.teacherClassroomDay, button.dataset.teacherClassroomTime);
        });
    });
    root.querySelectorAll('[data-teacher-slot-day][data-teacher-slot-time]').forEach((slot) => {
        slot.addEventListener('click', () => openTeacherPortalSlotModal(slot.dataset.teacherSlotDay, slot.dataset.teacherSlotTime));
    });
    root.querySelectorAll('[data-teacher-locked-slot]').forEach((slot) => {
        slot.addEventListener('click', (event) => {
            if (event.target.closest('button')) return;
            openTeacherPortalInfo('Assigned Slot Locked', getTeacherPortalTeacher().name, 'This class has already been assigned by Admin and cannot be opened, closed, cancelled, or reassigned from the teacher portal.');
        });
    });
    root.querySelectorAll('[data-teacher-student]').forEach((button) => {
        const student = students.find((item) => item.id === button.dataset.teacherStudent);
        button.addEventListener('click', () => openTeacherPortalInfo('Student Profile', student?.name || 'Student', `${student?.level || 'Level'} · ${student?.country || 'Country'} · ${student?.schedule?.platform || 'Classroom'}`));
    });
    root.querySelectorAll('[data-teacher-policy]').forEach((button) => {
        const policy = companyPolicies.find((item) => item.id === button.dataset.teacherPolicy);
        button.addEventListener('click', () => openTeacherPortalInfo('Company Policy', policy?.title || 'Policy', policy?.purpose || 'Policy details'));
    });
}

function openTeacherPortalSlotModal(day, time) {
    const teacher = getTeacherPortalTeacher();
    const availability = teacherAvailability[teacher.name]?.slots || [];
    const dayMap = getTeacherWeeklyDayMap(availability);
    const current = getTeacherPortalSlotState(teacher, day, time, dayMap);
    const nextState = current === 'open' ? 'closed' : 'open';
    const currentLabel = formatTeacherPortalSlotStatus(current);
    const nextStateLabel = formatTeacherPortalSlotStatus(nextState);
    const actionLabel = nextState === 'open' ? 'Make Available' : 'Close Slot';
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop teacher-portal-modal-backdrop';
    overlay.innerHTML = `
        <div class="modal teacher-portal-modal teacher-slot-confirm-modal" role="dialog" aria-modal="true">
            <div class="modal-head">
                <div>
                    <p>TEACHER WEEKLY SCHEDULE</p>
                    <h3>${nextState === 'open' ? 'Make Slot Available to Assign' : 'Close Availability Slot'}</h3>
                </div>
                <button type="button" data-teacher-modal-close aria-label="Close">×</button>
            </div>
            <div class="teacher-portal-modal-body">
                <div class="slot-change-summary">
                    <div>
                        <span>Time slot</span>
                        <strong>${escapeHtml(day)} · ${escapeHtml(inputTimeToRange(time))}</strong>
                    </div>
                    <div>
                        <span>Current status</span>
                        <strong class="slot-state-pill ${escapeHtml(current)}">${escapeHtml(currentLabel)}</strong>
                    </div>
                    <div>
                        <span>Change to</span>
                        <strong class="slot-state-pill ${escapeHtml(nextState)}">${escapeHtml(nextStateLabel)}</strong>
                    </div>
                </div>
                <p>${nextState === 'open' ? 'This slot will become available for Admin to assign a student.' : 'This slot will be removed from the available-to-assign list. Assigned classes remain locked and cannot be changed here.'}</p>
                <label>Optional note
                    <textarea data-teacher-slot-note placeholder="${nextState === 'open' ? 'Example: Available for trial classes or regular students.' : 'Example: Personal appointment or unavailable this week.'}"></textarea>
                </label>
            </div>
            <div class="modal-actions">
                <button class="secondary-button" type="button" data-teacher-modal-close>Cancel</button>
                <button class="primary-button" type="button" data-teacher-slot-confirm>${actionLabel}</button>
            </div>
        </div>`;
    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.querySelectorAll('[data-teacher-modal-close]').forEach((button) => button.addEventListener('click', close));
    overlay.querySelector('[data-teacher-slot-confirm]')?.addEventListener('click', () => {
        applyTeacherPortalSlotChange(day, time, nextState, overlay.querySelector('[data-teacher-slot-note]')?.value || '');
        close();
    });
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
}

function applyTeacherPortalSlotChange(day, time, nextState, note = '') {
    const teacher = getTeacherPortalTeacher();
    const key = getTeacherPortalSlotKey(teacher, day, time);
    teacherPortalSlotOverrides[key] = nextState;
    showSparkToast(`${day} ${inputTimeToRange(time)} marked ${formatTeacherPortalSlotStatus(nextState).toLowerCase()}${note.trim() ? ' with note' : ''}.`);
    renderTeacherPortal();
}

function formatTeacherPortalSlotStatus(status) {
    return status === 'open' ? 'Available to Assign' : 'Closed';
}

function openTeacherPortalClassroomModal(day, time) {
    const teacher = getTeacherPortalTeacher();
    const booking = getTeacherPortalBookings(teacher)[`${day}-${time}`];
    if (!booking) {
        openTeacherPortalInfo('Classroom Access', teacher.name, 'No assigned class was found for this slot.');
        return;
    }
    openTeacherPortalClassroomDetails({
        student: booking.student,
        day,
        time,
        duration: booking.duration,
        status: booking.status,
        platform: booking.platform,
        topic: booking.topic,
    });
}

function openTeacherPortalStudentLessonClassroom(rowId) {
    const teacher = getTeacherPortalTeacher();
    const row = getTeacherPortalStudentLessonRows(teacher).find((item) => item.id === rowId);
    if (!row) {
        openTeacherPortalInfo('Classroom Access', teacher.name, 'No assigned student lesson was found.');
        return;
    }
    openTeacherPortalClassroomDetails({
        student: row.student,
        day: row.day,
        time: row.time,
        duration: row.duration,
        status: row.status,
        platform: row.platform,
        topic: row.topic,
    });
}

function openTeacherPortalVideoUrl(rowId) {
    const teacher = getTeacherPortalTeacher();
    const row = getTeacherPortalStudentLessonRows(teacher).find((item) => item.id === rowId);
    const videoUrl = teacherPortalVideoUrls[rowId] || row?.videoUrl;
    if (!videoUrl) {
        openTeacherPortalVideoUrlModal(rowId);
        return;
    }
    window.open(videoUrl, '_blank', 'noopener');
    showSparkToast('Lesson video URL opened.');
}

function openTeacherPortalLockedStatusInfo(rowId) {
    const teacher = getTeacherPortalTeacher();
    const row = getTeacherPortalStudentLessonRows(teacher).find((item) => item.id === rowId);
    if (!row) return;
    const message = row.status === 'Reassigned from me'
        ? 'This class was reassigned away from you by Admin. It is automatically marked as Reassigned from me and is not included in your salary.'
        : 'This class is not due yet. Lesson status will stay Pending until the scheduled class time has passed.';
    openTeacherPortalInfo('Lesson Status Locked', row.student.name, message);
}

function openTeacherPortalStatusModal(rowId) {
    const teacher = getTeacherPortalTeacher();
    const row = getTeacherPortalStudentLessonRows(teacher).find((item) => item.id === rowId);
    if (!row) return;
    const lockedReason = getTeacherPortalStatusLockedReason(row);
    if (lockedReason) {
        openTeacherPortalLockedStatusInfo(rowId);
        return;
    }
    const options = ['Completed', 'Cancelled', 'Student is absent', 'Student is late', 'Reassigned to me'];
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop teacher-portal-modal-backdrop';
    overlay.innerHTML = `
        <div class="modal teacher-portal-modal teacher-status-modal" role="dialog" aria-modal="true">
            <div class="modal-head">
                <div>
                    <p>TEACHER PORTAL · LESSON STATUS</p>
                    <h3>Update Lesson Status</h3>
                </div>
                <button type="button" data-teacher-modal-close aria-label="Close">×</button>
            </div>
            <div class="teacher-portal-modal-body">
                <div class="classroom-detail-hero">
                    <div>
                        <span>Student</span>
                        <strong>${escapeHtml(row.student.name)}</strong>
                        <small>${escapeHtml(row.student.id)} · ${escapeHtml(row.student.country)}</small>
                    </div>
                    <div>
                        <span>Lesson</span>
                        <strong>${escapeHtml(row.topic)}</strong>
                        <small>${escapeHtml(row.date)} · Current: ${escapeHtml(row.status)}</small>
                    </div>
                </div>
                <div class="teacher-status-choice-list">
                    ${options.map((option) => `
                        <button type="button" class="${option === row.status ? 'selected' : ''}" data-teacher-status-option="${escapeHtml(option)}">
                            ${marketingStatus(option)}
                            <span>${escapeHtml(getTeacherPortalStatusHelp(option))}</span>
                        </button>
                    `).join('')}
                </div>
                <label>Internal note
                    <textarea data-teacher-status-note placeholder="Optional note for Admin"></textarea>
                </label>
            </div>
            <div class="modal-actions">
                <button class="secondary-button" type="button" data-teacher-modal-close>Cancel</button>
                <button class="primary-button" type="button" data-teacher-status-save ${options.includes(row.status) ? '' : 'disabled'}>Save Status</button>
            </div>
        </div>`;
    document.body.appendChild(overlay);
    let selectedStatus = options.includes(row.status) ? row.status : '';
    const close = () => overlay.remove();
    overlay.querySelectorAll('[data-teacher-modal-close]').forEach((button) => button.addEventListener('click', close));
    overlay.querySelectorAll('[data-teacher-status-option]').forEach((button) => {
        button.addEventListener('click', () => {
            selectedStatus = button.dataset.teacherStatusOption;
            overlay.querySelectorAll('[data-teacher-status-option]').forEach((option) => {
                option.classList.toggle('selected', option.dataset.teacherStatusOption === selectedStatus);
            });
            overlay.querySelector('[data-teacher-status-save]')?.removeAttribute('disabled');
        });
    });
    overlay.querySelector('[data-teacher-status-save]')?.addEventListener('click', () => {
        if (!selectedStatus) return;
        teacherPortalLessonStatuses[rowId] = selectedStatus;
        close();
        renderTeacherPortal();
        const reassignedMessage = selectedStatus === 'Reassigned to me'
            ? ' Original teacher record is automatically shown as Reassigned from me and will not receive salary for this class.'
            : '';
        showSparkToast(`Lesson status updated to ${selectedStatus}.${reassignedMessage}`);
    });
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
}

function getTeacherPortalStatusHelp(status) {
    return {
        Completed: 'Class finished. Salary requires a video URL.',
        Cancelled: 'Class did not happen and is not payable.',
        'Student is absent': 'Student did not attend and this is not payable.',
        'Student is late': 'Student arrived late. This is payable when the video URL is uploaded.',
        'Reassigned to me': 'Class was moved to you. Original teacher becomes Reassigned from me.',
    }[status] || 'Update this lesson status.';
}

function openTeacherProtectedLesson(lessonTitle = 'Lesson Material') {
    const teacher = getTeacherPortalTeacher();
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop teacher-portal-modal-backdrop';
    overlay.tabIndex = -1;
    overlay.innerHTML = `
        <div class="modal teacher-portal-modal teacher-protected-lesson-modal" role="dialog" aria-modal="true" aria-label="Protected PDF lesson viewer">
            <div class="modal-head">
                <div>
                    <p>TEACHER PORTAL · PROTECTED PDF VIEWER</p>
                    <h3>${escapeHtml(lessonTitle)}</h3>
                </div>
                <button type="button" data-teacher-modal-close aria-label="Close">×</button>
            </div>
            <div class="teacher-protected-notice">
                <strong>Protected material</strong>
                <span>PDF view only. Downloading, right-clicking, copying, printing, and URL sharing are disabled for teacher accounts.</span>
            </div>
            <div class="teacher-protected-viewer" data-protected-viewer tabindex="0" aria-label="Protected lesson preview">
                <div class="teacher-protected-pdf-shell">
                    <span>VLACE lesson PDF</span>
                    <strong>View-only preview</strong>
                    <button class="teacher-pdf-expand-button" type="button" data-protected-expand aria-pressed="false">Expand</button>
                    <b>Page 1 of 1</b>
                </div>
                <article class="teacher-protected-pdf-page">
                    <div class="protected-watermark">VLACE</div>
                    <header>
                        <span>VLACE English Learning</span>
                        <strong>Protected Lesson Material</strong>
                    </header>
                    <section>
                        <span>Lesson Objective</span>
                        <h4>${escapeHtml(lessonTitle)}</h4>
                        <p>Guide the student through the target language using approved VLACE classroom prompts, correction patterns, and speaking practice.</p>
                    </section>
                    <section>
                        <span>Warm Up</span>
                        <p>Ask short questions, review prior vocabulary, and confirm the student can answer in complete sentences.</p>
                    </section>
                    <section>
                        <span>Practice Flow</span>
                        <ol>
                            <li>Model the sentence pattern clearly.</li>
                            <li>Let the student repeat and personalize the answer.</li>
                            <li>Correct pronunciation and grammar gently.</li>
                            <li>Finish with a short independent speaking task.</li>
                        </ol>
                    </section>
                    <section>
                        <span>Teacher Reminder</span>
                        <p>Submit feedback and upload the video URL after class so payroll can include the completed lesson.</p>
                    </section>
                    <footer>VLACE protected PDF preview · Teacher account: ${escapeHtml(teacher.name)}</footer>
                </article>
            </div>
            <div class="modal-actions">
                <button class="secondary-button" type="button" data-teacher-modal-close>Close Viewer</button>
            </div>
        </div>`;
    document.body.appendChild(overlay);
    overlay.focus({ preventScroll: true });
    const close = () => {
        document.removeEventListener('keydown', blockProtectedShortcut, true);
        overlay.remove();
    };
    const modal = overlay.querySelector('.teacher-protected-lesson-modal');
    const expandButton = overlay.querySelector('[data-protected-expand]');
    const blockProtectedAction = (event) => {
        if (event.target.closest('.teacher-protected-lesson-modal')) {
            event.preventDefault();
            showSparkToast('Protected lesson material is view-only.');
        }
    };
    const blockProtectedShortcut = (event) => {
        if (!overlay.isConnected) return;
        const key = event.key.toLowerCase();
        const protectedCombo = (event.metaKey || event.ctrlKey) && ['a', 'c', 'p', 's', 'u'].includes(key);
        if (protectedCombo || key === 'printscreen') {
            event.preventDefault();
            event.stopPropagation();
            showSparkToast('Protected lesson material is view-only.');
        }
    };
    overlay.querySelectorAll('[data-teacher-modal-close]').forEach((button) => button.addEventListener('click', close));
    expandButton?.addEventListener('click', () => {
        const expanded = !modal?.classList.contains('is-expanded');
        modal?.classList.toggle('is-expanded', expanded);
        expandButton.textContent = expanded ? 'Exit Full Screen' : 'Expand';
        expandButton.setAttribute('aria-pressed', String(expanded));
    });
    ['contextmenu', 'copy', 'cut', 'dragstart', 'selectstart'].forEach((eventName) => {
        overlay.addEventListener(eventName, blockProtectedAction);
    });
    document.addEventListener('keydown', blockProtectedShortcut, true);
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
}

function openTeacherPortalVideoUrlModal(rowId) {
    const teacher = getTeacherPortalTeacher();
    const row = getTeacherPortalStudentLessonRows(teacher).find((item) => item.id === rowId);
    if (!row) {
        openTeacherPortalInfo('Upload Video URL', teacher.name, 'No lesson row was found for this video URL.');
        return;
    }
    const currentUrl = teacherPortalVideoUrls[rowId] || row.videoUrl || '';
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop teacher-portal-modal-backdrop';
    overlay.innerHTML = `
        <div class="modal teacher-portal-modal teacher-video-url-modal" role="dialog" aria-modal="true">
            <div class="modal-head">
                <div>
                    <p>TEACHER PORTAL · LESSON RECORDING</p>
                    <h3>Upload Video URL</h3>
                </div>
                <button type="button" data-teacher-modal-close aria-label="Close">×</button>
            </div>
            <form class="teacher-portal-modal-body" data-teacher-video-form>
                <div class="classroom-detail-hero">
                    <div>
                        <span>Student</span>
                        <strong>${escapeHtml(row.student.name)}</strong>
                        <small>${escapeHtml(row.student.id)} · ${escapeHtml(row.student.country)}</small>
                    </div>
                    <div>
                        <span>Lesson</span>
                        <strong>${escapeHtml(row.topic)}</strong>
                        <small>${escapeHtml(row.date)} · ${escapeHtml(row.duration)} · ${escapeHtml(row.status)}</small>
                    </div>
                </div>
                <label>Video recording URL
                    <input data-teacher-video-url type="url" placeholder="https://..." value="${escapeHtml(currentUrl)}" required>
                </label>
                <label>Teacher note
                    <textarea data-teacher-video-note placeholder="Optional note about the class recording"></textarea>
                </label>
                <div class="modal-actions">
                    <button class="secondary-button" type="button" data-teacher-modal-close>Cancel</button>
                    <button class="primary-button" type="submit">Save Video URL</button>
                </div>
            </form>
        </div>`;
    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.querySelectorAll('[data-teacher-modal-close]').forEach((button) => button.addEventListener('click', close));
    overlay.querySelector('[data-teacher-video-form]')?.addEventListener('submit', (event) => {
        event.preventDefault();
        teacherPortalVideoUrls[rowId] = overlay.querySelector('[data-teacher-video-url]')?.value.trim() || '';
        close();
        renderTeacherPortal();
        showSparkToast(`Video URL saved for ${row.student.name}.`);
    });
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
}

function openTeacherPortalClassroomDetails(details) {
    const teacher = getTeacherPortalTeacher();
    const meeting = getTeacherPortalMeetingDetails(teacher, details.platform);
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop teacher-portal-modal-backdrop';
    overlay.innerHTML = `
        <div class="modal teacher-portal-modal teacher-classroom-modal" role="dialog" aria-modal="true">
            <div class="modal-head">
                <div>
                    <p>TEACHER PORTAL · CLASSROOM ACCESS</p>
                    <h3>${escapeHtml(details.topic)}</h3>
                </div>
                <button type="button" data-teacher-modal-close aria-label="Close">×</button>
            </div>
            <div class="teacher-portal-modal-body">
                <div class="classroom-detail-hero">
                    <div>
                        <span>Student</span>
                        <strong>${escapeHtml(details.student.name)}</strong>
                        <small>${escapeHtml(details.student.id)} · ${escapeHtml(details.student.country)} · ${escapeHtml(details.student.level)}</small>
                    </div>
                    <div>
                        <span>Schedule</span>
                        <strong>${escapeHtml(details.day)} · ${escapeHtml(inputTimeToRange(details.time))}</strong>
                        <small>${escapeHtml(details.duration)} · ${escapeHtml(details.status)}</small>
                    </div>
                </div>
                <dl class="classroom-detail-list">
                    <div><dt>Teacher</dt><dd>${escapeHtml(teacher.name)}</dd></div>
                    <div><dt>Platform</dt><dd>${escapeHtml(details.platform)}</dd></div>
                    <div><dt>Meeting ID / Link</dt><dd>${escapeHtml(meeting.display)}</dd></div>
                    <div><dt>Lesson</dt><dd>${escapeHtml(details.topic)}</dd></div>
                </dl>
                <div class="classroom-link-box">
                    <span>Pre-recorded classroom URL</span>
                    <a href="${escapeHtml(meeting.url)}" target="_blank" rel="noopener">${escapeHtml(meeting.url)}</a>
                </div>
            </div>
            <div class="modal-actions">
                <button class="secondary-button" type="button" data-teacher-modal-close>Close</button>
                <button class="primary-button" type="button" data-teacher-enter-classroom>Enter Classroom</button>
            </div>
        </div>`;
    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.querySelectorAll('[data-teacher-modal-close]').forEach((button) => button.addEventListener('click', close));
    overlay.querySelector('[data-teacher-enter-classroom]')?.addEventListener('click', () => {
        window.open(meeting.url, '_blank', 'noopener');
        showSparkToast(`${details.platform} classroom opened for ${details.student.name}.`);
    });
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
}

function getTeacherPortalMeetingDetails(teacher, platform) {
    const platformKey = String(platform || '').toLowerCase();
    const links = teacher.links || {};
    let raw = links.voov || links.meet || links.teams || links.zoom || 'vlace-classroom';
    if (platformKey.includes('google')) raw = links.meet || raw;
    if (platformKey.includes('team')) raw = links.teams || raw;
    if (platformKey.includes('zoom')) raw = links.zoom || raw;
    if (platformKey.includes('voov')) raw = links.voov || raw;

    return {
        display: raw,
        url: normalizeTeacherMeetingUrl(raw, platform),
    };
}

function normalizeTeacherMeetingUrl(raw, platform) {
    const value = String(raw || '').trim();
    if (/^https?:\/\//i.test(value)) return value;
    const platformKey = String(platform || '').toLowerCase();
    if (platformKey.includes('voov')) return `https://meeting.tencent.com/dm/${encodeURIComponent(value)}`;
    if (platformKey.includes('google') || value.includes('meet.google.com')) return `https://${value}`;
    if (platformKey.includes('team')) return `https://teams.microsoft.com/l/meetup-join/${encodeURIComponent(value)}`;
    if (platformKey.includes('zoom') || value.includes('zoom.us')) return `https://${value}`;
    return `https://${value}`;
}

function openTeacherPortalAction(kind) {
    const content = {
        availability: ['Availability Request', 'Send a schedule availability update request to Admin.'],
        feedback: ['Submit Feedback', 'Create lesson feedback for Admin or Manager review.'],
        materials: ['Lesson Material', 'Open the approved PDF/material for this lesson.'],
        classroom: ['Classroom Access', 'Open the assigned classroom link prepared by Admin.'],
        profile: ['Profile Update Request', 'Ask Admin to update your profile or login details.'],
    }[kind] || ['Teacher Action', 'This teacher action is prepared in prototype mode.'];
    openTeacherPortalInfo(content[0], getTeacherPortalTeacher().name, content[1], kind);
}

function openTeacherPortalInfo(title, subject, detail, kind = '') {
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop teacher-portal-modal-backdrop';
    overlay.innerHTML = `<div class="modal teacher-portal-modal" role="dialog" aria-modal="true"><div class="modal-head"><div><p>TEACHER PORTAL</p><h3>${escapeHtml(title)}</h3></div><button type="button" data-teacher-modal-close aria-label="Close">×</button></div><div class="teacher-portal-modal-body"><strong>${escapeHtml(subject)}</strong><p>${escapeHtml(detail)}</p>${kind === 'feedback' ? '<label>Feedback note<textarea placeholder="Write lesson feedback for admin review"></textarea></label>' : kind === 'availability' ? '<label>Availability note<textarea placeholder="Example: I can open Tuesday and Thursday 7 PM slots next week."></textarea></label>' : kind === 'profile' ? '<label>Request details<textarea placeholder="Describe what needs to be updated"></textarea></label>' : ''}</div><div class="modal-actions"><button class="secondary-button" type="button" data-teacher-modal-close>Close</button><button class="primary-button" type="button" data-teacher-modal-save>${kind ? 'Submit' : 'Done'}</button></div></div>`;
    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.querySelectorAll('[data-teacher-modal-close]').forEach((button) => button.addEventListener('click', close));
    overlay.querySelector('[data-teacher-modal-save]')?.addEventListener('click', () => {
        close();
        showSparkToast('Teacher portal action saved in prototype mode.');
    });
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
}

function setFieldValue(selector, value) {
    const field = document.querySelector(selector);
    if (field) field.value = value;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function updateOverviewTimes(date = new Date()) {
    const time = formatPhtTime(date);
    setText('#dashboardUpdatedTime', time);
    document.querySelectorAll('[data-dashboard-time]').forEach((node) => {
        node.textContent = time;
    });
}

function updateExchangeRateTime(date = new Date()) {
    setText('#exchangeRateTime', formatPhtTime(date));
}

function updateAnalyticsRefreshTime(date = new Date()) {
    setText('#analyticsRefreshTime', date.toLocaleTimeString('en-PH', {
        timeZone: 'Asia/Manila',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    }));
}

function setAnalyticsMetric(metric) {
    const data = analyticsMetricValues[metric] || analyticsMetricValues.Revenue;
    setText('#analyticsMetricLabel', metric);
    setText('#analyticsMetricSummary', `${metric} this month`);
    setText('#analyticsMetricValue', data.value);
    setText('#analyticsMetricPhp', data.php);
    document.getElementById('analyticsMetricPhp')?.toggleAttribute('hidden', !data.php);

    document.querySelectorAll('[data-analytics-metric]').forEach((button) => {
        button.classList.toggle('active', button.dataset.analyticsMetric === metric);
    });

    const chart = document.getElementById('analyticsAreaChart');
    if (chart) {
        chart.style.setProperty('--chart-shift', `${Object.keys(analyticsMetricValues).indexOf(metric) * 7}%`);
    }
}

function updateOverview() {
    const country = document.getElementById('dashboardCountry')?.value || 'All Countries';
    const phpPerUsdInput = document.getElementById('phpPerUsd');
    const phpPerUsd = Math.max(1, Number(phpPerUsdInput?.value || DEFAULT_PHP_PER_USD));
    const stats = dashboardStats[country];
    const lessons = country === 'All Countries'
        ? completedLessonsToday
        : completedLessonsToday.filter((lesson) => lesson.country === country);

    const financials = lessons.reduce((totals, lesson) => {
        const paidHours = lesson.minutes === 25 ? 0.5 : 1;
        totals.grossIncomeUsd += lesson.lessonRevenueUsd;
        totals.teacherCostPhp += lesson.teacherRatePhp * paidHours;
        return totals;
    }, { grossIncomeUsd: 0, teacherCostPhp: 0 });

    const teacherCostUsd = financials.teacherCostPhp / DEFAULT_PHP_PER_USD;
    const netIncomeUsd = financials.grossIncomeUsd - teacherCostUsd;
    const monthly = getMonthlyFinancials(country);
    const monthlyTeacherCostUsd = monthly.teacherCostPhp / DEFAULT_PHP_PER_USD;
    const monthlyNetIncomeUsd = monthly.grossIncomeUsd - monthlyTeacherCostUsd;

    setText('#dashboardCountryTitle', country === 'All Countries' ? 'All Country Teams' : `${country} Team`);
    setText('[data-overview-stat="students"]', String(stats.students));
    setText('[data-overview-stat="activeTeachers"]', String(stats.activeTeachers));
    setText('[data-overview-stat="finishedLessons"]', String(stats.finishedLessons));
    setText('[data-overview-stat="cancelledLessons"]', String(stats.cancelledLessons));
    setText('[data-overview-stat="absentStudents"]', String(stats.absentStudents));
    setText('[data-overview-stat="absentTeachers"]', String(stats.absentTeachers));
    setText('[data-overview-note="students"]', country === 'All Countries' ? 'Across all country teams' : `Assigned to ${country}`);

    setText('#todayGrossUsd', usdFormatter.format(financials.grossIncomeUsd));
    setText('#todayGrossPhp', `PHP ₱${phpFormatter.format(financials.grossIncomeUsd * phpPerUsd)}`);
    setText('#todayGrossNote', `${lessons.length} completed lesson${lessons.length === 1 ? '' : 's'} × lesson price`);
    setText('#todayCostUsd', usdFormatter.format(teacherCostUsd));
    setText('#todayCostPhp', `PHP ₱${phpFormatter.format(teacherCostUsd * phpPerUsd)}`);
    setText('#todayNetUsd', usdFormatter.format(netIncomeUsd));
    setText('#todayNetPhp', `PHP ₱${phpFormatter.format(netIncomeUsd * phpPerUsd)}`);
    setText('#incomeFormulaNote', `Teacher cost uses the assigned teacher’s hourly rate. A 25-minute class is paid as 30 minutes; a 50-minute class is paid as one hour. USD conversion shown at ₱${phpPerUsd.toFixed(2)} per US dollar.`);

    setText('#exchangeExamplePhp', `Philippines PHP ₱${phpPerUsd.toFixed(2)}`);
    setText('#monthlyPeriod', getMonthlyPeriod(country));
    setText('#monthlyCompletedLessons', String(monthly.completedLessons));
    setText('#monthlyGrossUsd', usdFormatter.format(monthly.grossIncomeUsd));
    setText('#monthlyGrossPhp', `PHP ₱${phpFormatter.format(monthly.grossIncomeUsd * phpPerUsd)}`);
    setText('#monthlyCostUsd', usdFormatter.format(monthlyTeacherCostUsd));
    setText('#monthlyCostPhp', `PHP ₱${phpFormatter.format(monthlyTeacherCostUsd * phpPerUsd)}`);
    setText('#monthlyNetUsd', usdFormatter.format(monthlyNetIncomeUsd));
    setText('#monthlyNetPhp', `PHP ₱${phpFormatter.format(monthlyNetIncomeUsd * phpPerUsd)}`);

    renderCountryRates(country, phpPerUsd);
    renderCompletedLessons(lessons);
}

function renderCountryRates(country, phpPerUsd) {
    const grid = document.getElementById('countryRateGrid');
    if (!grid) return;

    const countries = Object.keys(serviceCountryRates)
        .filter((rateCountry) => country === 'All Countries' || rateCountry === country);

    grid.innerHTML = countries.map((rateCountry) => {
        const rate = serviceCountryRates[rateCountry];
        const localValue = rate.perUsd.toLocaleString('en-US', {
            minimumFractionDigits: rate.decimals,
            maximumFractionDigits: rate.decimals,
        });

        return `
            <article>
                <div>
                    <span>${rateCountry}</span>
                    <small>${rate.currencyName}</small>
                </div>
                <div class="rate-path">
                    <strong>USD $1.00</strong>
                    <b>→</b>
                    <strong>${rate.currency} ${localValue}</strong>
                    <b>→</b>
                    <strong>PHP ₱${phpPerUsd.toFixed(2)}</strong>
                </div>
            </article>
        `;
    }).join('');
}

function renderCompletedLessons(lessons) {
    const body = document.getElementById('completedLessonsBody');
    if (!body) return;

    if (!lessons.length) {
        body.innerHTML = '<tr><td colspan="6">No completed lessons for this country today.</td></tr>';
        return;
    }

    body.innerHTML = lessons.map((lesson) => {
        const paidHours = lesson.minutes === 25 ? 0.5 : 1;
        return `
            <tr>
                <td>${lesson.country}</td>
                <td>${lesson.teacher}</td>
                <td>${lesson.minutes} minutes</td>
                <td>${usdFormatter.format(lesson.lessonRevenueUsd)}</td>
                <td>₱${phpFormatter.format(lesson.teacherRatePhp)} / hour</td>
                <td>${paidHours}</td>
            </tr>
        `;
    }).join('');
}

function getLessonGroup(groupName = lessonLibraryState.group) {
    return curriculumGroups.find((group) => group.name === groupName) || curriculumGroups[1];
}

function getLessonPrograms(groupName = lessonLibraryState.group) {
    return getLessonGroup(groupName).programs;
}

function getLessonModules(program = lessonLibraryState.program) {
    return curriculumModuleCatalog[program] || ['Module 1'];
}

function getLessonCode(group, program, level, moduleIndex, lessonIndex) {
    const groupCode = group === 'Kids' ? 'K' : group === 'Adults' ? 'A' : 'T';
    const programCode = lessonProgramCodes[program] || program
        .replace(/[^A-Za-z ]/g, '')
        .trim()
        .split(/\s+/)
        .slice(0, 3)
        .map((word) => word[0])
        .join('')
        .toUpperCase() || 'PRG';
    return `${groupCode}-${programCode}-${level}-M${String(moduleIndex).padStart(2, '0')}-L${String(lessonIndex).padStart(2, '0')}`;
}

function createLessonRows(group, program, level, moduleName) {
    const moduleIndex = Math.max(1, getLessonModules(program).indexOf(moduleName) + 1);
    const seedTopics = curriculumLessons
        .filter((lesson) => lesson.group === group && lesson.program === program)
        .map((lesson) => lesson.title);
    const topicCycle = ['Vocabulary', 'Speaking', 'Grammar'];

    return Array.from({ length: 30 }, (_, index) => {
        const title = seedTopics[index % seedTopics.length] || `${level} ${moduleName} · Lesson ${String(index + 1).padStart(2, '0')}`;
        return {
            id: `${group}-${program}-${level}-${moduleName}-${index + 1}`,
            code: getLessonCode(group, program, level, moduleIndex, index + 1),
            title: seedTopics.length ? `${title} · Lesson ${String(index + 1).padStart(2, '0')}` : title,
            topic: topicCycle[index % topicCycle.length],
            level,
            type: index % 10 === 7 ? 'PowerPoint' : index % 10 === 8 ? 'Images' : index % 10 === 9 ? 'Video' : 'PDF',
            size: `${(2.1 + (index % 7) * 0.3).toFixed(1)} MB`,
            duration: index % 2 === 0 ? '25 min' : '50 min',
            status: index % 11 === 0 ? 'Draft' : 'Published',
            updated: 'Aug 3, 2026',
            by: 'Admin',
        };
    });
}

function resetLessonRows() {
    lessonLibraryState.lessons = createLessonRows(
        lessonLibraryState.group,
        lessonLibraryState.program,
        lessonLibraryState.level,
        lessonLibraryState.module,
    );
}

function getFilteredLessonRows() {
    const search = lessonLibraryState.search.toLowerCase();
    const filtered = lessonLibraryState.lessons.filter((lesson) => {
        const matchesSearch = !search || `${lesson.code} ${lesson.title} ${lesson.topic} ${lesson.type}`.toLowerCase().includes(search);
        const matchesStatus = lessonLibraryState.status === 'All' || lesson.status === lessonLibraryState.status;
        const matchesType = lessonLibraryState.fileType === 'All' || lesson.type === lessonLibraryState.fileType;
        return matchesSearch && matchesStatus && matchesType;
    });

    return [...filtered].sort((a, b) => {
        if (lessonLibraryState.sort === 'Title A-Z') return a.title.localeCompare(b.title);
        if (lessonLibraryState.sort === 'Title Z-A') return b.title.localeCompare(a.title);
        if (lessonLibraryState.sort === 'Oldest Updated') return a.id.localeCompare(b.id);
        if (lessonLibraryState.sort === 'Recently Updated') return b.id.localeCompare(a.id);
        return 0;
    });
}

function renderLessonLibrary() {
    if (!document.getElementById('lessonCategoryTabs')) return;
    if (!lessonLibraryState.lessons.length) resetLessonRows();

    const groupDetail = lessonGroupDetails[lessonLibraryState.group];
    const programs = getLessonPrograms().filter((program) => (
        !lessonLibraryState.programSearch || program.toLowerCase().includes(lessonLibraryState.programSearch.toLowerCase())
    ));
    const modules = getLessonModules();
    const filteredRows = getFilteredLessonRows();
    const panel = document.getElementById('lessonMainPanel');
    const navigation = document.getElementById('lessonNavigation');

    panel?.classList.remove('kids', 'teens', 'adults');
    panel?.classList.add(groupDetail.color);
    navigation?.classList.remove('kids', 'teens', 'adults');
    navigation?.classList.add(groupDetail.color);

    document.getElementById('lessonCategoryTabs').innerHTML = curriculumGroups.map((group) => {
        const detail = lessonGroupDetails[group.name];
        return `
            <button type="button" role="tab" aria-selected="${group.name === lessonLibraryState.group}" class="${detail.color} ${group.name === lessonLibraryState.group ? 'selected' : ''}" data-lesson-group="${group.name}">
                <strong><span class="age-tab-icon">${detail.icon}</span>${group.name}</strong>
                <span>${detail.ages}</span>
                <small>${group.programs.length} programs</small>
            </button>
        `;
    }).join('');

    setText('#lessonGroupIcon', groupDetail.icon);
    setText('#lessonGroupTitle', `${lessonLibraryState.group} Programs`);
    setText('#lessonProgramCount', `${getLessonPrograms().length} available`);
    document.getElementById('lessonProgramList').innerHTML = programs.length ? programs.map((program) => `
        <button type="button" class="program-button-card ${program === lessonLibraryState.program ? 'selected' : ''}" data-lesson-program="${escapeHtml(program)}">
            <span class="program-button-copy">
                <b>${escapeHtml(program)}</b>
                <small>${getLessonModules(program).length} Modules</small>
            </span>
            <span class="program-button-state">${program === lessonLibraryState.program ? '✓' : '›'}</span>
        </button>
    `).join('') : '<div class="tree-empty">No matching programs found.</div>';

    document.getElementById('lessonLevelTabs').innerHTML = ['A1', 'A2', 'B1', 'B2'].map((level) => `
        <button type="button" role="tab" aria-selected="${level === lessonLibraryState.level}" class="${level === lessonLibraryState.level ? 'selected' : ''}" data-lesson-level="${level}">
            <strong>${level}</strong>
            <span>${modules.length} Modules</span>
        </button>
    `).join('');

    setText('#lessonModuleHeading', `${lessonLibraryState.level} · ${lessonLibraryState.program}`);
    document.getElementById('lessonModuleTabs').innerHTML = modules.map((moduleName, index) => `
        <button type="button" role="tab" aria-selected="${moduleName === lessonLibraryState.module}" class="${moduleName === lessonLibraryState.module ? 'selected' : ''}" data-lesson-module="${escapeHtml(moduleName)}">
            <span>Module ${index + 1}</span>
            <strong>${escapeHtml(lessonLibraryState.level)} · ${escapeHtml(moduleName)}</strong>
            <small>30 PDF lessons</small>
        </button>
    `).join('');

    setText('#lessonViewingSummary', `${lessonLibraryState.program} · ${lessonLibraryState.level} · ${lessonLibraryState.module}`);
    setText('#lessonViewingCount', `${filteredRows.length} lesson${filteredRows.length === 1 ? '' : 's'} shown below`);
    setText('#lessonTableTitle', `${lessonLibraryState.module} · 30 PDF lessons`);

    const tableWrap = document.getElementById('lessonTableWrap');
    const cardGrid = document.getElementById('lessonCardGrid');
    const emptyState = document.getElementById('lessonEmptyState');
    tableWrap?.toggleAttribute('hidden', lessonLibraryState.view !== 'Table' || !filteredRows.length);
    cardGrid?.toggleAttribute('hidden', lessonLibraryState.view !== 'Cards' || !filteredRows.length);
    emptyState?.toggleAttribute('hidden', Boolean(filteredRows.length));

    document.querySelectorAll('[data-lesson-view]').forEach((button) => {
        button.classList.toggle('active', button.dataset.lessonView === lessonLibraryState.view);
    });

    renderLessonRows(filteredRows);
    bindLessonLibraryControls();
    refreshIcons();
}

function renderLessonRows(rows) {
    const body = document.getElementById('lessonTableBody');
    const cards = document.getElementById('lessonCardGrid');
    if (body) {
        body.innerHTML = rows.map((lesson, index) => `
            <tr>
                <td><button class="row-drag" type="button" aria-label="Drag lesson ${index + 1}">☰</button></td>
                <td><b>${index + 1}</b></td>
                <td><code class="lesson-code">${escapeHtml(lesson.code)}</code></td>
                <td><strong>${escapeHtml(lesson.title)}</strong><small>${escapeHtml(lesson.topic)} · ESL Basics</small></td>
                <td>${escapeHtml(lesson.level)}</td>
                <td><strong>${escapeHtml(lesson.type)}</strong><small>${escapeHtml(lesson.size)}</small></td>
                <td>${escapeHtml(lesson.duration)}</td>
                <td><span class="status-pill ${lesson.status === 'Published' ? 'positive' : lesson.status === 'Archived' ? 'neutral' : 'warning'}">${escapeHtml(lesson.status)}</span></td>
                <td>${escapeHtml(lesson.updated)}<small>${escapeHtml(lesson.by)}</small></td>
                <td>
                    <select class="lesson-action-select" data-lesson-action="${escapeHtml(lesson.id)}" aria-label="Choose an action for ${escapeHtml(lesson.title)}">
                        <option value="" selected disabled>Choose action...</option>
                        <option value="assign">Assign to scheduled class</option>
                        <option value="delete">Delete lesson</option>
                    </select>
                </td>
            </tr>
        `).join('');
    }

    if (cards) {
        cards.innerHTML = rows.map((lesson) => `
            <article>
                <div class="lesson-card-cover ${escapeHtml(lesson.type.toLowerCase())}">
                    <code class="lesson-code">${escapeHtml(lesson.code)}</code>
                    <strong>${escapeHtml(lesson.type)}</strong>
                </div>
                <h4>${escapeHtml(lesson.title)}</h4>
                <p>${escapeHtml(lesson.topic)} · ${escapeHtml(lesson.level)}</p>
                <div><span class="status-pill ${lesson.status === 'Published' ? 'positive' : 'warning'}">${escapeHtml(lesson.status)}</span><span>${escapeHtml(lesson.duration)}</span></div>
                <select class="lesson-action-select card-action-select" data-lesson-action="${escapeHtml(lesson.id)}" aria-label="Choose an action for ${escapeHtml(lesson.title)}">
                    <option value="" selected disabled>Choose action...</option>
                    <option value="assign">Assign to scheduled class</option>
                    <option value="delete">Delete lesson</option>
                </select>
            </article>
        `).join('');
    }
}

function bindLessonLibraryControls() {
    document.querySelectorAll('[data-lesson-group]').forEach((button) => {
        button.onclick = () => {
            lessonLibraryState.group = button.dataset.lessonGroup;
            lessonLibraryState.program = getLessonPrograms()[0];
            lessonLibraryState.module = getLessonModules(lessonLibraryState.program)[0];
            lessonLibraryState.level = 'A1';
            lessonLibraryState.programSearch = '';
            lessonLibraryState.search = '';
            resetLessonRows();
            setFieldValue('#lessonProgramSearch', '');
            setFieldValue('#lessonSearch', '');
            renderLessonLibrary();
            showSparkToast(`${lessonLibraryState.group} curriculum loaded.`);
        };
    });

    document.querySelectorAll('[data-lesson-program]').forEach((button) => {
        button.onclick = () => {
            lessonLibraryState.program = button.dataset.lessonProgram;
            lessonLibraryState.module = getLessonModules(lessonLibraryState.program)[0];
            lessonLibraryState.level = 'A1';
            lessonLibraryState.search = '';
            resetLessonRows();
            setFieldValue('#lessonSearch', '');
            renderLessonLibrary();
            showSparkToast(`${lessonLibraryState.program} modules loaded.`);
        };
    });

    document.querySelectorAll('[data-lesson-level]').forEach((button) => {
        button.onclick = () => {
            lessonLibraryState.level = button.dataset.lessonLevel;
            lessonLibraryState.module = getLessonModules()[0];
            lessonLibraryState.search = '';
            resetLessonRows();
            setFieldValue('#lessonSearch', '');
            renderLessonLibrary();
            showSparkToast(`${lessonLibraryState.level} Module 1: 30 PDF lessons loaded.`);
        };
    });

    document.querySelectorAll('[data-lesson-module]').forEach((button) => {
        button.onclick = () => {
            lessonLibraryState.module = button.dataset.lessonModule;
            lessonLibraryState.search = '';
            resetLessonRows();
            setFieldValue('#lessonSearch', '');
            renderLessonLibrary();
            showSparkToast(`${lessonLibraryState.level} ${lessonLibraryState.module}: 30 PDF lessons loaded.`);
        };
    });

    document.querySelectorAll('[data-lesson-action]').forEach((select) => {
        select.onchange = () => {
            handleLessonLibraryAction(select.value, select.dataset.lessonAction);
            select.value = '';
        };
    });
}

function handleLessonLibraryAction(action, lessonId) {
    const lesson = lessonLibraryState.lessons.find((item) => item.id === lessonId);
    if (!lesson) return;

    if (action === 'preview') {
        openLessonLibraryPreview(lesson);
        return;
    }

    if (action === 'edit') {
        const title = window.prompt('Edit lesson title', lesson.title);
        if (!title) return;
        lesson.title = title.trim();
        lesson.updated = 'Today';
        renderLessonLibrary();
        showSparkToast('Lesson details updated in prototype mode.');
        return;
    }

    if (action === 'assign') {
        openLessonAssignmentModal(lesson);
        return;
    }

    if (action === 'download') {
        showSparkToast(`${lesson.code} PDF download prepared for Admin.`);
        return;
    }

    if (action === 'archive') {
        lesson.status = 'Archived';
        renderLessonLibrary();
        showSparkToast(`${lesson.title} was archived.`);
        return;
    }

    if (action === 'delete') {
        openLessonDeleteModal(lesson);
    }
}

function openLessonDeleteModal(lesson) {
    document.getElementById('lessonDeleteModal')?.remove();
    const groupDetail = lessonGroupDetails[lessonLibraryState.group];
    const overlay = document.createElement('div');
    overlay.className = `modal-backdrop curriculum-modal-backdrop ${groupDetail.color}`;
    overlay.id = 'lessonDeleteModal';
    overlay.innerHTML = `
        <div class="modal lesson-delete-modal curriculum-entry-modal" role="dialog" aria-modal="true" aria-labelledby="deleteLessonTitle">
            <div class="modal-head curriculum-modal-head lesson-delete-head">
                <div>
                    <p>ADMIN DELETE ACTION</p>
                    <h3 id="deleteLessonTitle">Delete Lesson</h3>
                </div>
                <button type="button" data-close-delete-modal aria-label="Close Delete Lesson">×</button>
            </div>
            <div class="lesson-delete-warning">
                <div class="lesson-delete-icon">
                    <i data-lucide="trash-2"></i>
                </div>
                <div>
                    <span>Lesson selected for deletion</span>
                    <strong>${escapeHtml(lesson.title)}</strong>
                    <small>${escapeHtml(lesson.code)} · ${escapeHtml(lessonLibraryState.program)} · ${escapeHtml(lessonLibraryState.module)}</small>
                </div>
            </div>
            <div class="lesson-delete-copy">
                <p>This will remove the lesson from the current module in this prototype. Assigned class records should be reviewed before deleting curriculum material.</p>
            </div>
            <div class="modal-actions curriculum-modal-actions">
                <button class="secondary-button" type="button" data-close-delete-modal>Cancel</button>
                <button class="danger-button" type="button" id="confirmLessonDelete">Delete Lesson</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    refreshIcons();

    const close = () => overlay.remove();
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
    overlay.querySelectorAll('[data-close-delete-modal]').forEach((button) => button.addEventListener('click', close));
    overlay.querySelector('#confirmLessonDelete')?.addEventListener('click', () => {
        lessonLibraryState.lessons = lessonLibraryState.lessons.filter((item) => item.id !== lesson.id);
        renderLessonLibrary();
        close();
        showSparkToast(`${lesson.title} was removed from this module.`);
    });
}

function openLessonLibraryPreview(lesson) {
    const existing = document.getElementById('lessonLibraryPreview');
    existing?.remove();
    const overlay = document.createElement('div');
    overlay.className = 'preview-overlay';
    overlay.id = 'lessonLibraryPreview';
    overlay.innerHTML = `
        <aside class="lesson-preview-panel">
            <div class="preview-head">
                <div>
                    <code class="lesson-code">${escapeHtml(lesson.code)}</code>
                    <h3>${escapeHtml(lesson.title)}</h3>
                </div>
                <span class="status-pill ${lesson.status === 'Published' ? 'positive' : 'warning'}">${escapeHtml(lesson.status)}</span>
                <button type="button" data-close-preview aria-label="Close preview">×</button>
            </div>
            <div class="mock-preview ${escapeHtml(lesson.type.toLowerCase())}">
                <div class="mock-pdf">
                    <small>VLACE · ${escapeHtml(lesson.level)}</small>
                    <h2>${escapeHtml(lesson.title)}</h2>
                    <p>Today we will learn useful English words and simple sentences.</p>
                    <div>1. Listen &nbsp; 2. Repeat &nbsp; 3. Practice</div>
                </div>
                <div class="preview-controls">- Zoom <b>Page 1 of 12</b> Zoom +</div>
            </div>
            <div class="preview-meta">
                <div><span>Lesson Code</span><strong>${escapeHtml(lesson.code)}</strong></div>
                <div><span>Program</span><strong>${escapeHtml(lessonLibraryState.program)}</strong></div>
                <div><span>Module</span><strong>${escapeHtml(lessonLibraryState.module)}</strong></div>
                <div><span>Level</span><strong>${escapeHtml(lesson.level)}</strong></div>
                <div><span>Duration</span><strong>${escapeHtml(lesson.duration)}</strong></div>
                <div><span>File Type</span><strong>${escapeHtml(lesson.type)}</strong></div>
                <div><span>File Size</span><strong>${escapeHtml(lesson.size)}</strong></div>
                <div><span>Uploaded By</span><strong>${escapeHtml(lesson.by)}</strong></div>
                <div><span>Last Updated</span><strong>${escapeHtml(lesson.updated)}</strong></div>
            </div>
            <div class="preview-footer">
                <button class="secondary-button" type="button" data-preview-toast="Edit Lesson">Edit Lesson</button>
                <button class="secondary-button" type="button" data-preview-toast="Assign Lesson">Assign Lesson</button>
                <button class="secondary-button" type="button" data-preview-toast="Download">Download</button>
                <button class="primary-button" type="button" data-close-preview>Close</button>
            </div>
        </aside>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay || event.target.closest('[data-close-preview]')) overlay.remove();
        const toastButton = event.target.closest('[data-preview-toast]');
        if (toastButton) showSparkToast(`${toastButton.dataset.previewToast} prepared for ${lesson.title}.`);
    });
}

function openLessonLibraryModal(type) {
    document.getElementById('lessonLibraryModal')?.remove();
    const groupDetail = lessonGroupDetails[lessonLibraryState.group];
    const isModule = type === 'module';
    const title = isModule ? 'Add Module' : 'Add Lesson';
    const nextModuleNumber = getLessonModules().length + 1;
    const currentModuleNumber = Math.max(1, getLessonModules().indexOf(lessonLibraryState.module) + 1);
    const nextLessonNumber = lessonLibraryState.lessons.length + 1;
    const overlay = document.createElement('div');
    overlay.className = `modal-backdrop curriculum-modal-backdrop ${groupDetail.color}`;
    overlay.id = 'lessonLibraryModal';
    overlay.innerHTML = `
        <div class="modal prototype-modal curriculum-entry-modal" role="dialog" aria-modal="true" aria-labelledby="lessonLibraryModalTitle">
            <div class="modal-head curriculum-modal-head">
                <div>
                    <p>FRONTEND PROTOTYPE</p>
                    <h3 id="lessonLibraryModalTitle">${title}</h3>
                </div>
                <button type="button" data-close-lesson-modal aria-label="Close ${title}">×</button>
            </div>
            <div class="curriculum-modal-context">
                <span>${escapeHtml(lessonLibraryState.group)} Curriculum</span>
                <strong>${escapeHtml(lessonLibraryState.program)} · ${escapeHtml(lessonLibraryState.level)} · ${escapeHtml(lessonLibraryState.module)}</strong>
                <small>${isModule ? 'Create a new module inside the selected program and level.' : 'Upload or record a new lesson inside the selected module.'}</small>
            </div>
            ${isModule ? `
                <form class="prototype-form-grid curriculum-modal-form" id="lessonModuleForm">
                    <label class="full">
                        Module Title
                        <input id="lessonModalModuleTitle" value="Module ${nextModuleNumber}" placeholder="Example: Advanced Practice" required>
                    </label>
                    <label class="full">
                        Module Subtitle
                        <input id="lessonModalModuleSubtitle" placeholder="Short description">
                    </label>
                    <label>
                        Level
                        <select id="lessonModalModuleLevel">
                            ${['A1', 'A2', 'B1', 'B2'].map((level) => `<option ${level === lessonLibraryState.level ? 'selected' : ''}>CEFR ${level}</option>`).join('')}
                        </select>
                    </label>
                    <label>
                        Status
                        <select id="lessonModalModuleStatus">
                            <option>Draft</option>
                            <option selected>Published</option>
                        </select>
                    </label>
                </form>
                <div class="modal-actions curriculum-modal-actions">
                    <button class="secondary-button" type="button" data-close-lesson-modal>Cancel</button>
                    <button class="primary-button" type="submit" form="lessonModuleForm">Add Module</button>
                </div>
            ` : `
                <form class="prototype-form-grid curriculum-modal-form" id="lessonEntryForm">
                    <label>
                        Lesson Title
                        <input id="lessonModalTitle" value="${escapeHtml(`${lessonLibraryState.module} · Lesson ${String(nextLessonNumber).padStart(2, '0')}`)}" placeholder="Example: Free Conversation" required>
                    </label>
                    <label>
                        Topic
                        <input id="lessonModalTopic" value="Vocabulary" placeholder="Example: Speaking">
                    </label>
                    <label>
                        Level
                        <select id="lessonModalLevel">
                            ${['A1', 'A2', 'B1', 'B2'].map((level) => `<option ${level === lessonLibraryState.level ? 'selected' : ''}>${level}</option>`).join('')}
                        </select>
                    </label>
                    <label>
                        Duration
                        <input id="lessonModalDuration" value="25 min" placeholder="Example: 25 min">
                    </label>
                    <label>
                        File Type
                        <select id="lessonModalType">
                            <option selected>PDF</option>
                            <option>PowerPoint</option>
                            <option>Images</option>
                            <option>Video</option>
                            <option>Audio</option>
                        </select>
                    </label>
                    <label>
                        Status
                        <select id="lessonModalStatus">
                            <option selected>Draft</option>
                            <option>Published</option>
                        </select>
                    </label>
                    <label class="full lesson-file-input">
                        Lesson File
                        <input id="lessonModalFile" type="file" accept=".pdf,.ppt,.pptx,image/*,video/*,audio/*">
                        <span><i data-lucide="upload-cloud"></i> Mock file upload and thumbnail preview</span>
                    </label>
                </form>
                <div class="curriculum-lesson-preview">
                    <span>Lesson code preview</span>
                    <strong>${escapeHtml(getLessonCode(lessonLibraryState.group, lessonLibraryState.program, lessonLibraryState.level, currentModuleNumber, nextLessonNumber))}</strong>
                    <small>${escapeHtml(lessonLibraryState.program)} · ${escapeHtml(lessonLibraryState.module)}</small>
                </div>
                <div class="modal-actions curriculum-modal-actions">
                    <button class="secondary-button" type="button" data-close-lesson-modal>Cancel</button>
                    <button class="secondary-button" type="button" id="lessonSaveDraft">Save as Draft</button>
                    <button class="primary-button" type="submit" form="lessonEntryForm">Add Lesson</button>
                </div>
            `}
        </div>
    `;
    document.body.appendChild(overlay);
    refreshIcons();

    const close = () => overlay.remove();
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
    overlay.querySelectorAll('[data-close-lesson-modal]').forEach((button) => button.addEventListener('click', close));

    if (isModule) {
        overlay.querySelector('#lessonModuleForm')?.addEventListener('submit', (event) => {
            event.preventDefault();
            const titleField = overlay.querySelector('#lessonModalModuleTitle');
            const titleValue = titleField?.value.trim();
            if (!titleValue) {
                titleField?.focus();
                return;
            }
            getLessonModules().push(titleValue);
            lessonLibraryState.module = titleValue;
            resetLessonRows();
            renderLessonLibrary();
            close();
            showSparkToast('Module added successfully.');
        });
        return;
    }

    const saveLesson = (forcedStatus) => {
        const titleField = overlay.querySelector('#lessonModalTitle');
        const titleValue = titleField?.value.trim();
        if (!titleValue) {
            titleField?.focus();
            return;
        }
        const lessonLevel = overlay.querySelector('#lessonModalLevel')?.value || lessonLibraryState.level;
        const lessonType = overlay.querySelector('#lessonModalType')?.value || 'PDF';
        const file = overlay.querySelector('#lessonModalFile')?.files?.[0];
        lessonLibraryState.lessons.push({
            id: `custom-${Date.now()}`,
            code: getLessonCode(lessonLibraryState.group, lessonLibraryState.program, lessonLevel, currentModuleNumber, nextLessonNumber),
            title: titleValue,
            topic: overlay.querySelector('#lessonModalTopic')?.value.trim() || 'Vocabulary',
            level: lessonLevel,
            type: lessonType,
            size: file ? `${Math.max(0.1, file.size / 1024 / 1024).toFixed(1)} MB` : '2.1 MB',
            duration: overlay.querySelector('#lessonModalDuration')?.value.trim() || '25 min',
            status: forcedStatus || overlay.querySelector('#lessonModalStatus')?.value || 'Draft',
            updated: 'Today',
            by: 'Admin',
        });
        renderLessonLibrary();
        close();
        showSparkToast(forcedStatus === 'Draft' ? 'Lesson draft saved.' : 'Lesson added successfully.');
    };

    overlay.querySelector('#lessonEntryForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveLesson();
    });
    overlay.querySelector('#lessonSaveDraft')?.addEventListener('click', () => saveLesson('Draft'));
}

function getLessonAssignmentClassOptions(student) {
    const days = (student.preferredDay || 'Wednesday & Sunday')
        .split(/&|,/)
        .map((day) => day.trim())
        .filter(Boolean);
    const dateMap = {
        Monday: 'August 3',
        Tuesday: 'August 4',
        Wednesday: 'August 5',
        Thursday: 'August 6',
        Friday: 'August 7',
        Saturday: 'August 1',
        Sunday: 'August 2',
    };
    return days.slice(0, 3).map((day) => `${day}, ${dateMap[day] || 'August 6'} · ${student.preferredTime || '7:00 PM'}`);
}

function openLessonAssignmentModal(lesson) {
    document.getElementById('lessonAssignmentModal')?.remove();
    const groupDetail = lessonGroupDetails[lessonLibraryState.group];
    const defaultStudent = students.find((student) => (
        student.type === lessonLibraryState.group.slice(0, -1)
        || getDefaultCurriculumGroup(student) === lessonLibraryState.group
    )) || students[0];
    const overlay = document.createElement('div');
    overlay.className = `modal-backdrop curriculum-modal-backdrop ${groupDetail.color}`;
    overlay.id = 'lessonAssignmentModal';

    const renderAssignmentBody = (student = defaultStudent) => {
        const classOptions = getLessonAssignmentClassOptions(student);
        return `
            <div class="modal-head curriculum-modal-head">
                <div>
                    <p>SCHEDULED CLASS MATERIAL</p>
                    <h3 id="assignLessonTitle">Assign Lesson</h3>
                </div>
                <button type="button" data-close-assignment-modal aria-label="Close Assign Lesson">×</button>
            </div>
            <div class="selected-lesson-box">
                <span>Selected lesson</span>
                <strong>${escapeHtml(lesson.title)}</strong>
                <small>${escapeHtml(lessonLibraryState.program)} · ${escapeHtml(lessonLibraryState.module)}</small>
            </div>
            <form id="lessonAssignmentForm" class="lesson-assignment-form">
                <label>
                    Student
                    <select id="lessonAssignStudent">
                        ${students.map((studentOption) => `<option value="${escapeHtml(studentOption.id)}" ${studentOption.id === student.id ? 'selected' : ''}>${escapeHtml(studentOption.name)}</option>`).join('')}
                    </select>
                </label>
                <label>
                    Assigned Teacher
                    <input id="lessonAssignTeacher" value="${escapeHtml(student.teacher)}" readonly>
                </label>
                <label>
                    Scheduled Class
                    <select id="lessonAssignClass">
                        ${classOptions.map((option) => `<option>${escapeHtml(option)}</option>`).join('')}
                    </select>
                </label>
                <div class="class-assignment-preview">
                    <div>
                        <span>Student</span>
                        <strong id="lessonAssignPreviewStudent">${escapeHtml(student.name)}</strong>
                    </div>
                    <div>
                        <span>Teacher</span>
                        <strong id="lessonAssignPreviewTeacher">${escapeHtml(student.teacher)}</strong>
                    </div>
                    <div>
                        <span>Lesson</span>
                        <strong>${escapeHtml(lesson.title)}</strong>
                    </div>
                </div>
            </form>
            <div class="modal-actions curriculum-modal-actions">
                <button class="secondary-button" type="button" data-close-assignment-modal>Cancel</button>
                <button class="primary-button" type="submit" form="lessonAssignmentForm">Assign to Class</button>
            </div>
        `;
    };

    overlay.innerHTML = `
        <div class="modal lesson-assignment-modal curriculum-entry-modal" role="dialog" aria-modal="true" aria-labelledby="assignLessonTitle">
            ${renderAssignmentBody()}
        </div>
    `;
    document.body.appendChild(overlay);
    refreshIcons();

    const close = () => overlay.remove();
    const bindAssignmentEvents = () => {
        overlay.querySelectorAll('[data-close-assignment-modal]').forEach((button) => button.addEventListener('click', close));
        overlay.querySelector('#lessonAssignStudent')?.addEventListener('change', (event) => {
            const student = students.find((item) => item.id === event.target.value) || defaultStudent;
            overlay.querySelector('.lesson-assignment-modal').innerHTML = renderAssignmentBody(student);
            bindAssignmentEvents();
        });
        overlay.querySelector('#lessonAssignmentForm')?.addEventListener('submit', (event) => {
            event.preventDefault();
            const student = students.find((item) => item.id === overlay.querySelector('#lessonAssignStudent')?.value) || defaultStudent;
            const schedule = overlay.querySelector('#lessonAssignClass')?.value || 'Next scheduled class';
            lesson.status = 'Scheduled';
            lesson.updated = 'Today';
            lesson.assignedTo = student.name;
            renderLessonLibrary();
            close();
            showSparkToast(`${lesson.title} assigned to ${student.name} · ${schedule}.`);
        });
    };

    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
    bindAssignmentEvents();
}

function setupLessonLibrary() {
    if (!document.getElementById('lessonCategoryTabs')) return;
    resetLessonRows();
    renderLessonLibrary();

    document.getElementById('lessonProgramSearch')?.addEventListener('input', (event) => {
        lessonLibraryState.programSearch = event.target.value;
        renderLessonLibrary();
    });
    document.getElementById('lessonSearch')?.addEventListener('input', (event) => {
        lessonLibraryState.search = event.target.value;
        renderLessonLibrary();
    });
    document.getElementById('lessonStatusFilter')?.addEventListener('change', (event) => {
        lessonLibraryState.status = event.target.value;
        renderLessonLibrary();
    });
    document.getElementById('lessonFileTypeFilter')?.addEventListener('change', (event) => {
        lessonLibraryState.fileType = event.target.value;
        renderLessonLibrary();
    });
    document.getElementById('lessonSortFilter')?.addEventListener('change', (event) => {
        lessonLibraryState.sort = event.target.value;
        renderLessonLibrary();
    });
    document.querySelectorAll('[data-lesson-view]').forEach((button) => {
        button.addEventListener('click', () => {
            lessonLibraryState.view = button.dataset.lessonView;
            renderLessonLibrary();
        });
    });
    document.getElementById('lessonClearFilters')?.addEventListener('click', () => {
        lessonLibraryState.search = '';
        lessonLibraryState.status = 'All';
        lessonLibraryState.fileType = 'All';
        setFieldValue('#lessonSearch', '');
        setFieldValue('#lessonStatusFilter', 'All');
        setFieldValue('#lessonFileTypeFilter', 'All');
        renderLessonLibrary();
    });
    document.getElementById('lessonAddProgram')?.addEventListener('click', () => {
        const name = window.prompt('Program name');
        if (!name) return;
        getLessonPrograms().push(name.trim());
        curriculumModuleCatalog[name.trim()] = ['Module 1'];
        lessonProgramCodes[name.trim()] = name.trim().slice(0, 3).toUpperCase();
        lessonLibraryState.program = name.trim();
        lessonLibraryState.module = 'Module 1';
        resetLessonRows();
        renderLessonLibrary();
        showSparkToast('Program added successfully.');
    });
    document.getElementById('lessonAddModule')?.addEventListener('click', () => {
        openLessonLibraryModal('module');
    });
    document.getElementById('lessonAddLesson')?.addEventListener('click', () => {
        openLessonLibraryModal('lesson');
    });
    document.getElementById('lessonImportButton')?.addEventListener('click', () => showSparkToast('Import Curriculum wizard prepared in prototype mode.'));
    document.getElementById('lessonExportButton')?.addEventListener('click', () => showSparkToast(`${lessonLibraryState.program} export prepared.`));
    document.getElementById('lessonBackupButton')?.addEventListener('click', () => showSparkToast('Backup and restore tools prepared in prototype mode.'));
}

function setupPremiumLoginMotion() {
    const background = document.querySelector('.premium-login-background');
    const video = document.querySelector('.premium-login-video');
    if (!background || !video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
        currentX += (targetX - currentX) * 0.045;
        currentY += (targetY - currentY) * 0.045;
        background.style.setProperty('--login-parallax-x', `${currentX.toFixed(2)}px`);
        background.style.setProperty('--login-parallax-y', `${currentY.toFixed(2)}px`);

        if (!document.hidden && !document.getElementById('loginPage')?.hasAttribute('hidden')) {
            frame = window.requestAnimationFrame(render);
        }
    };

    const start = () => {
        window.cancelAnimationFrame(frame);
        if (!reducedMotion && !document.hidden) {
            frame = window.requestAnimationFrame(render);
        }
    };

    const stop = () => {
        window.cancelAnimationFrame(frame);
    };

    window.addEventListener('mousemove', (event) => {
        targetX = (event.clientX / window.innerWidth - 0.5) * 18;
        targetY = (event.clientY / window.innerHeight - 0.5) * 18;
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            video.pause();
            stop();
            return;
        }

        if (!document.getElementById('loginPage')?.hasAttribute('hidden')) {
            video.play().catch(() => undefined);
            start();
        }
    });

    window.vlaceLoginMotion = { start, stop };
    start();
}

function showDashboard() {
    document.getElementById('loginPage')?.setAttribute('hidden', '');
    document.getElementById('dashboardApp')?.removeAttribute('hidden');
    document.getElementById('teacherDashboardApp')?.setAttribute('hidden', '');
    window.vlaceLoginMotion?.stop();
    refreshIcons();
}

function showAuthenticatedDashboard(user) {
    if (!user) return;

    if (user?.role === 'teacher') {
        showTeacherDashboard(user.email || user.name || '');
        return;
    }

    showDashboard();
}

function showTeacherDashboard(email = '') {
    const normalizedEmail = String(email).toLowerCase();
    const matchedTeacher = teachers.find((teacher) => normalizedEmail.includes(teacher.name.split(' ')[0].toLowerCase())) || teachers[0];
    activeTeacherPortalTeacherId = matchedTeacher.id;
    activeTeacherPortalSection = 'teacher-overview';
    document.getElementById('loginPage')?.setAttribute('hidden', '');
    document.getElementById('dashboardApp')?.setAttribute('hidden', '');
    document.getElementById('teacherDashboardApp')?.removeAttribute('hidden');
    window.vlaceLoginMotion?.stop();
    renderTeacherPortal();
    refreshIcons();
}

function showLogin() {
    document.getElementById('dashboardApp')?.setAttribute('hidden', '');
    document.getElementById('teacherDashboardApp')?.setAttribute('hidden', '');
    document.getElementById('loginPage')?.removeAttribute('hidden');
    document.querySelector('.premium-login-video')?.play().catch(() => undefined);
    window.vlaceLoginMotion?.start();
    refreshIcons();
}

function getCsrfToken() {
    return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
}

async function submitLogin(email, password, remember) {
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': getCsrfToken(),
        },
        body: JSON.stringify({ email, password, remember }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return response.json();
}

async function submitLogout() {
    await fetch('/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'X-CSRF-TOKEN': getCsrfToken(),
        },
    });
}

function activateSection(section) {
    if (section === 'ai' && typeof adminSecurityState !== 'undefined' && !adminSecurityState.aiControls.sparkEnabled) {
        section = 'settings';
    }

    const requestedSection = section;
    if (marketingSectionMap?.[section]) {
        activeMarketingPage = marketingSectionMap[section];
        section = 'marketing';
    }

    const title = document.getElementById('pageTitle');
    const backButton = document.getElementById('backButton');
    const sidebar = document.getElementById('sidebar');
    const targetPanel = document.querySelector(`[data-section="${section}"]`);
    const placeholder = document.querySelector('[data-section="placeholder"]');
    const placeholderTitle = document.getElementById('placeholderTitle');

    document.querySelectorAll('.dashboard-section').forEach((panel) => {
        panel.classList.remove('active');
    });

    document.querySelectorAll('[data-section-target]').forEach((button) => {
        const target = button.dataset.sectionTarget;
        button.classList.toggle('active', target === section || target === requestedSection || (section === 'marketing' && marketingSectionMap?.[target] === activeMarketingPage));
    });

    if (section !== 'students') {
        document.getElementById('studentProfilePanel')?.setAttribute('hidden', '');
        document.getElementById('studentDirectoryPanel')?.removeAttribute('hidden');
    }

    if (section !== 'teachers') {
        document.getElementById('teacherDetailPanel')?.setAttribute('hidden', '');
        document.getElementById('teacherDirectoryWorkspace')?.removeAttribute('hidden');
    }

    if (section !== 'staff') {
        document.getElementById('staffDetailPanel')?.setAttribute('hidden', '');
        document.getElementById('staffDirectoryWorkspace')?.removeAttribute('hidden');
    }

    if (targetPanel && section !== 'placeholder') {
        targetPanel.classList.add('active');
        placeholder?.classList.remove('active');
        if (section === 'overview') backButton?.setAttribute('hidden', '');
        else backButton?.removeAttribute('hidden');
    } else {
        placeholder?.classList.add('active');
        backButton?.removeAttribute('hidden');
        if (placeholderTitle) {
            placeholderTitle.textContent = sectionTitles[section] || 'Module placeholder';
        }
    }

    if (title) {
        title.textContent = sectionTitles[section] || 'Admin Dashboard';
    }

    if (section === 'lessons') {
        renderLessonLibrary();
    }

    if (section === 'packages') {
        renderPackagesAndPrices();
    }

    if (section === 'finance') {
        renderFinanceModule();
    }

    if (section === 'marketing') {
        renderMarketingWorkspace();
    }

    if (section === 'inbox') {
        renderCommunicationWorkspace();
    }

    if (section === 'users') {
        renderUserManagement();
    }

    if (section === 'policies') {
        renderCompanyPolicyManual();
    }

    if (section === 'settings') {
        renderAdminSecuritySettings();
    }

    setBreadcrumbs(getSectionBreadcrumb(section));
    sidebar?.classList.remove('open');
}

function getInitials(name) {
    return name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
}

function getLessonParts(lessons) {
    const [used = '0', total = '0'] = lessons.split('/').map((part) => part.trim());
    return { used, total };
}

function getStudentAssignedClassCount(student) {
    const { used, total } = getLessonParts(student.lessons);
    const purchased = Number(total) || 0;
    const completed = Number(used) || 0;
    const frequencyMatch = student.schedule?.frequency?.match(/\d+/);
    const upcomingClasses = Number(student.assignedClasses ?? frequencyMatch?.[0] ?? 0);
    return Math.min(purchased, completed + upcomingClasses);
}

function updateStudentPackageBookingStatus(student = getSelectedStudent()) {
    if (!student) return;

    const { total } = getLessonParts(student.lessons);
    const purchased = Number(total) || 0;
    const assigned = getStudentAssignedClassCount(student);
    const unbooked = Math.max(0, purchased - assigned);
    const percent = purchased ? Math.min(100, Math.round((assigned / purchased) * 100)) : 0;
    const status = purchased && unbooked === 0 ? 'Fully booked' : 'Needs booking';

    setText('#studentPurchasedLessons', String(purchased));
    setText('#studentAssignedClasses', String(assigned));
    setText('#studentUnbookedLessons', String(unbooked));
    setText('#studentBookingStatus', status);
    setText('#studentBookingNote', purchased
        ? `${assigned} of ${purchased} purchased lessons have assigned class slots.`
        : 'No active lesson package is recorded for this student.');

    const bar = document.getElementById('studentBookingProgressBar');
    if (bar) bar.style.width = `${percent}%`;

    const statusNode = document.getElementById('studentBookingStatus');
    if (statusNode) statusNode.className = unbooked === 0 && purchased ? 'is-complete' : 'needs-booking';
}

const serviceCountries = [
    { name: 'China', currency: 'CNY', status: 'Active', serviceArea: 'Nationwide' },
    { name: 'South Korea', currency: 'KRW', status: 'Active', serviceArea: 'Nationwide' },
    { name: 'Japan', currency: 'JPY', status: 'Active', serviceArea: 'Nationwide' },
    { name: 'United Arab Emirates', currency: 'AED', status: 'Active', serviceArea: 'Includes Dubai' },
    { name: 'Saudi Arabia', currency: 'SAR', status: 'Active', serviceArea: 'Nationwide' },
    { name: 'Israel', currency: 'ILS', status: 'Active', serviceArea: 'Nationwide' },
];

const websitePackages = [
    { id: 'CN-A-S', market: 'China', audience: 'Adults', duration: '50 minutes', name: 'Silver', lessons: '15', price: '165', visibility: 'Published' },
    { id: 'CN-A-G', market: 'China', audience: 'Adults', duration: '50 minutes', name: 'Gold', lessons: '30', price: '314', visibility: 'Published' },
    { id: 'CN-A-B', market: 'China', audience: 'Adults', duration: '50 minutes', name: 'Black Diamond', lessons: '45', price: '456', visibility: 'Published' },
    { id: 'CN-K-S', market: 'China', audience: 'Kids', duration: '25 minutes', name: 'Silver', lessons: '15', price: '90', visibility: 'Published' },
    { id: 'CN-K-G', market: 'China', audience: 'Kids', duration: '25 minutes', name: 'Gold', lessons: '30', price: '171', visibility: 'Published' },
    { id: 'CN-K-P', market: 'China', audience: 'Kids', duration: '25 minutes', name: 'Platinum', lessons: '45', price: '249', visibility: 'Published' },
];

let activePackageMarket = 'All Markets';

function packageStatus(value) {
    const statusClass = String(value).toLowerCase().replaceAll(' ', '-');
    return `<span class="status status-${statusClass}">${value}</span>`;
}

function renderPackageMarketOptions() {
    const filter = document.getElementById('packageMarketFilter');
    if (!filter) return;
    filter.innerHTML = [
        '<option>All Markets</option>',
        ...serviceCountries.map((item) => `<option>${item.name}</option>`),
    ].join('');
    filter.value = activePackageMarket;
}

function renderPackagesAndPrices() {
    const cards = document.getElementById('marketCards');
    const body = document.getElementById('packageTableBody');
    const title = document.getElementById('packageTableTitle');
    if (!cards || !body || !title) return;

    renderPackageMarketOptions();
    cards.innerHTML = serviceCountries.map((item) => {
        const count = websitePackages.filter((pkg) => pkg.market === item.name).length;
        return `
            <button type="button" class="${activePackageMarket === item.name ? 'selected' : ''}" data-package-market="${item.name}">
                <span>${item.name}</span>
                <strong>${count ? `${count} package${count > 1 ? 's' : ''}` : 'No package yet'}</strong>
                <small>USD / ${item.currency} · ${item.status} · ${item.serviceArea}</small>
            </button>
        `;
    }).join('');

    title.textContent = activePackageMarket === 'All Markets' ? 'All Country Packages' : `${activePackageMarket} Packages`;
    const rows = websitePackages.filter((item) => activePackageMarket === 'All Markets' || item.market === activePackageMarket);
    body.innerHTML = rows.length ? rows.map((row) => `
        <tr class="package-row package-row-${row.audience.toLowerCase()}">
            <td><span class="country-badge">${row.market}</span></td>
            <td><span class="audience-highlight">${row.audience}</span></td>
            <td>${row.duration}</td>
            <td class="strong">${row.name}</td>
            <td>${row.lessons}</td>
            <td><span class="package-price">$${row.price} USD</span></td>
            <td>${packageStatus(row.visibility)}</td>
            <td><button class="edit-price-button" type="button" data-package-edit="${row.id}">Edit Name &amp; Price</button></td>
        </tr>
    `).join('') : '<tr><td colspan="8" class="empty-row">No package has been created for this country yet. Click “Add Package” to create one.</td></tr>';

    cards.querySelectorAll('[data-package-market]').forEach((button) => {
        button.addEventListener('click', () => {
            activePackageMarket = button.dataset.packageMarket;
            renderPackagesAndPrices();
        });
    });

    body.querySelectorAll('[data-package-edit]').forEach((button) => {
        button.addEventListener('click', () => {
            const pkg = websitePackages.find((item) => item.id === button.dataset.packageEdit);
            if (pkg) openPackageEditor({ ...pkg });
        });
    });
}

function openPackageEditor(pkg = null) {
    const editing = pkg || {
        id: `PKG-${Date.now()}`,
        market: activePackageMarket === 'All Markets' ? 'China' : activePackageMarket,
        audience: 'Adults',
        duration: '50 minutes',
        name: '',
        lessons: '15',
        price: '',
        visibility: 'Draft',
    };
    const existing = websitePackages.some((item) => item.id === editing.id);
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop package-prices-backdrop';
    overlay.setAttribute('role', 'presentation');
    overlay.innerHTML = `
        <div class="modal package-editor-modal" role="dialog" aria-modal="true" aria-labelledby="package-editor-title">
            <div class="modal-head">
                <div>
                    <p>COUNTRY-SPECIFIC PRICING · USD</p>
                    <h3 id="package-editor-title">${existing ? 'Edit Package' : 'Add Package'}</h3>
                </div>
                <button type="button" data-package-close aria-label="Close">×</button>
            </div>
            <p class="modal-intro">Choose the country first. All website prices use US dollars by default, and changes apply only to the selected country.</p>
            <div class="package-editor-grid">
                <label>Country<select id="packageEditMarket">${serviceCountries.map((item) => `<option>${item.name}</option>`).join('')}</select></label>
                <label>Student Type<select id="packageEditAudience"><option>Adults</option><option>Kids</option></select></label>
                <label>Class Time<select id="packageEditDuration"><option>25 minutes</option><option>50 minutes</option></select></label>
                <label>Number of Lessons<input id="packageEditLessons" type="number" min="1"></label>
                <label>Package Name<input id="packageEditName" placeholder="Example: Silver" autofocus></label>
                <label>Website Price (USD)<div class="price-input"><span>$</span><input id="packageEditPrice" type="number" min="0" step="1" placeholder="0"></div></label>
                <label>Visibility<select id="packageEditVisibility"><option>Published</option><option>Draft</option></select></label>
            </div>
            <div class="package-save-preview">
                <span>Website display</span>
                <strong id="packageSavePreview"></strong>
                <small id="packageSaveMarket"></small>
            </div>
            <div class="modal-actions">
                <button class="secondary-button" type="button" data-package-close>Cancel</button>
                <button class="primary-button" type="button" id="savePackageButton">Save Package</button>
            </div>
            <div class="enter-hint">Press Enter or click “Save Package” to confirm.</div>
        </div>
    `;
    document.body.appendChild(overlay);

    const fields = {
        market: overlay.querySelector('#packageEditMarket'),
        audience: overlay.querySelector('#packageEditAudience'),
        duration: overlay.querySelector('#packageEditDuration'),
        lessons: overlay.querySelector('#packageEditLessons'),
        name: overlay.querySelector('#packageEditName'),
        price: overlay.querySelector('#packageEditPrice'),
        visibility: overlay.querySelector('#packageEditVisibility'),
    };

    Object.entries(fields).forEach(([key, field]) => {
        field.value = editing[key];
        field.addEventListener('input', updatePreview);
        field.addEventListener('change', updatePreview);
    });

    function close() {
        overlay.remove();
    }

    function updatePreview() {
        overlay.querySelector('#packageSavePreview').textContent = `${fields.name.value || 'Package name'} · ${fields.lessons.value || '0'} lessons · $${fields.price.value || '0'} USD`;
        overlay.querySelector('#packageSaveMarket').textContent = `${fields.market.value} only`;
        overlay.querySelector('#savePackageButton').disabled = !fields.name.value.trim() || !fields.price.value.trim();
    }

    function save() {
        if (!fields.name.value.trim() || !fields.price.value.trim()) return;
        const nextPackage = {
            id: editing.id,
            market: fields.market.value,
            audience: fields.audience.value,
            duration: fields.duration.value,
            name: fields.name.value.trim(),
            lessons: fields.lessons.value || '0',
            price: fields.price.value || '0',
            visibility: fields.visibility.value,
        };
        const index = websitePackages.findIndex((item) => item.id === editing.id);
        if (index >= 0) websitePackages[index] = nextPackage;
        else websitePackages.push(nextPackage);
        activePackageMarket = nextPackage.market;
        close();
        renderPackagesAndPrices();
    }

    overlay.querySelectorAll('[data-package-close]').forEach((button) => button.addEventListener('click', close));
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
    overlay.querySelector('#savePackageButton').addEventListener('click', save);
    overlay.querySelector('.package-editor-modal').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            save();
        }
    });
    updatePreview();
    refreshIcons();
}

function openServiceCountriesModal() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop package-prices-backdrop';
    overlay.setAttribute('role', 'presentation');
    overlay.innerHTML = `
        <div class="modal countries-modal" role="dialog" aria-modal="true" aria-labelledby="countries-title">
            <div class="modal-head">
                <div>
                    <p>COUNTRY MARKET CONTROL</p>
                    <h3 id="countries-title">Manage Service Countries</h3>
                </div>
                <button type="button" data-country-close aria-label="Close">×</button>
            </div>
            <p class="modal-intro">These are the countries where VLACE currently provides services. Dubai is included as a service area under the United Arab Emirates.</p>
            <div class="country-list" id="serviceCountryList"></div>
            <div class="add-country-form">
                <h4>Add a New Service Country</h4>
                <div>
                    <label>Country<input id="newCountryName" placeholder="Example: Thailand"></label>
                    <label>Currency code<input id="newCountryCurrency" maxlength="3" placeholder="THB"></label>
                </div>
                <button class="primary-button" type="button" id="addServiceCountry" disabled>+ Add Country</button>
            </div>
            <div class="modal-actions">
                <button class="primary-button" type="button" data-country-close>Done</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    function renderCountries() {
        overlay.querySelector('#serviceCountryList').innerHTML = serviceCountries.map((item, index) => `
            <div>
                <span class="country-badge">${item.name}</span>
                <small>${item.currency} · ${item.serviceArea}</small>
                ${packageStatus(item.status)}
                <button type="button" data-toggle-country="${index}">${item.status === 'Active' ? 'Pause' : 'Activate'}</button>
            </div>
        `).join('');
        overlay.querySelectorAll('[data-toggle-country]').forEach((button) => {
            button.addEventListener('click', () => {
                const country = serviceCountries[Number(button.dataset.toggleCountry)];
                country.status = country.status === 'Active' ? 'Paused' : 'Active';
                renderCountries();
                renderPackagesAndPrices();
            });
        });
    }

    function close() {
        overlay.remove();
        renderPackagesAndPrices();
    }

    function updateAddCountryState() {
        const name = overlay.querySelector('#newCountryName').value.trim();
        const currency = overlay.querySelector('#newCountryCurrency').value.trim();
        const duplicate = serviceCountries.some((item) => item.name.toLowerCase() === name.toLowerCase());
        overlay.querySelector('#addServiceCountry').disabled = !name || currency.length !== 3 || duplicate;
    }

    overlay.querySelectorAll('[data-country-close]').forEach((button) => button.addEventListener('click', close));
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
    overlay.querySelector('#newCountryName').addEventListener('input', updateAddCountryState);
    overlay.querySelector('#newCountryCurrency').addEventListener('input', (event) => {
        event.target.value = event.target.value.toUpperCase();
        updateAddCountryState();
    });
    overlay.querySelector('#addServiceCountry').addEventListener('click', () => {
        const name = overlay.querySelector('#newCountryName').value.trim();
        const currency = overlay.querySelector('#newCountryCurrency').value.trim().toUpperCase();
        if (!name || currency.length !== 3 || serviceCountries.some((item) => item.name.toLowerCase() === name.toLowerCase())) return;
        serviceCountries.push({ name, currency, status: 'Active', serviceArea: 'Nationwide' });
        overlay.querySelector('#newCountryName').value = '';
        overlay.querySelector('#newCountryCurrency').value = '';
        updateAddCountryState();
        renderCountries();
    });
    renderCountries();
    updateAddCountryState();
    refreshIcons();
}

const financeTabs = [
    'Overview',
    'Transactions',
    'Payment Channels',
    'Settlements',
    'Refunds',
    'Invoices & Receipts',
    'Reconciliation',
    'Financial Reports',
];

const financeTransactions = [
    { id: 'NHP-20260801-001', student: 'Hetao Zhang', provider: 'NihaoPay · Alipay', amount: '$394', php: '₱23,040', discount: 10, referralDiscount: 5, netPhp: '₱19,584', status: 'Paid', date: 'Aug 1, 2:50 AM', credits: '30 added' },
    { id: 'NHP-20260801-002', student: 'Liam Chen', provider: 'NihaoPay · Alipay', amount: '$263', php: '₱15,360', discount: 5, referralDiscount: 0, netPhp: '₱14,592', status: 'Paid', date: 'Aug 1, 1:18 AM', credits: '20 added' },
    { id: 'PAY-80491', student: 'Sophia Kim', provider: 'PayPal · Credit Card', amount: '$340', php: '₱19,890', discount: 0, referralDiscount: 10, netPhp: '₱17,901', status: 'Pending', date: 'Jul 31, 10:42 PM', credits: 'Waiting' },
    { id: 'NHP-20260731-118', student: 'Eddie Zhang', provider: 'NihaoPay · Alipay', amount: '$197', php: '₱11,520', discount: 0, referralDiscount: 0, netPhp: '₱11,520', status: 'Failed', date: 'Jul 31, 8:10 PM', credits: 'Not added' },
    { id: 'MAN-20260731-021', student: 'Mira Wang', provider: 'Manual · Bank Transfer', amount: '$510', php: '₱29,835', discount: 10, referralDiscount: 5, netPhp: '₱25,360', status: 'Unverified', date: 'Jul 31, 5:35 PM', credits: 'Approval needed' },
];

const financeKpis = [
    ['Total Received Today', '$1,151', '≈ ₱67,360', '+14.3%'],
    ['Total Received This Month', '$17,593', '≈ ₱1,029,200', '+9.8%'],
    ['Pending Payments', '$585', '≈ ₱34,240', '3 payments'],
    ['Pending Settlements', '$3,227', '≈ ₱188,800', '2 batches'],
    ['Refunds This Month', '$171', '≈ ₱10,000', '2 approved'],
    ['Failed Payments', '3', 'Requires attention', 'Today'],
];

let financePaymentGateways = [
    {
        id: 'nihao',
        name: 'NihaoPay',
        state: 'Active',
        copy: 'NihaoPay is the payment processor for your students who pay using Alipay.',
        methods: 'Processes Alipay · USD payments',
        mode: 'Test Mode',
        merchantId: '••••••••4821',
        apiKey: '••••••••••••',
        webhookUrl: 'https://vlace.example/mock-webhook',
    },
    {
        id: 'paypal',
        name: 'PayPal',
        state: 'Active',
        copy: 'PayPal is the payment processor for PayPal balance, debit card, and credit card payments.',
        methods: 'PayPal · Debit Card · Credit Card',
        mode: 'Test Mode',
        merchantId: '••••••••7130',
        apiKey: '••••••••••••',
        webhookUrl: 'https://vlace.example/mock-webhook',
    },
];

const financeSectionPages = {
    Settlements: {
        title: 'Settlements',
        copy: 'Review provider batches without exposing complete account numbers.',
        stats: [['Pending', '$3,227'], ['This Month', '$16,300'], ['Average Delay', '1.2 days']],
        columns: ['Batch', 'Provider', 'Period', 'Gross', 'Fees', 'Net', 'Status'],
        rows: [
            ['SET-0801-A', 'NihaoPay', 'Jul 30–31', '$3,227', '$65', '$3,162', 'Pending'],
            ['SET-0730-A', 'NihaoPay', 'Jul 28–29', '$2,588', '$52', '$2,536', 'Settled'],
            ['SET-0728-B', 'Manual Banking', 'Jul 25–27', '$1,020', '$0', '$1,020', 'Verified'],
        ],
    },
    Refunds: {
        title: 'Refund Requests',
        copy: 'Refunds require Admin approval and never happen automatically in this prototype.',
        stats: [['Awaiting Approval', '1'], ['Approved This Month', '2'], ['Refunded', '$171']],
        columns: ['Request', 'Student', 'Transaction', 'Amount', 'Reason', 'Status', 'Action'],
        rows: [
            ['RF-081', 'Noah Brown', 'NHP-20260729-081', '$88', 'Cancelled package', 'Pending', 'Review'],
            ['RF-079', 'Mira Wang', 'MAN-20260725-014', '$85', 'Duplicate payment', 'Approved', 'View'],
            ['RF-074', 'Sophia Kim', 'PAY-80112', '$120', 'Schedule issue', 'Completed', 'View'],
        ],
    },
    'Invoices & Receipts': {
        title: 'Payment Receipts',
        copy: 'Receipts document confirmed payments; they are not tax invoices.',
        stats: [['Issued This Month', '86'], ['Awaiting Payment', '3'], ['Voided', '1']],
        columns: ['Receipt', 'Student', 'Payment Source', 'Original Amount', 'Converted', 'Issued', 'Status'],
        rows: [
            ['RCP-2026-081', 'Hetao Zhang', 'NihaoPay · Alipay', '$394', '₱23,040', 'Aug 1', 'Issued'],
            ['RCP-2026-080', 'Liam Chen', 'NihaoPay · Alipay', '$263', '₱15,360', 'Aug 1', 'Issued'],
            ['RCP-2026-079', 'Mira Wang', 'Manual Payment', '$510', '₱29,835', 'Jul 31', 'Pending Review'],
        ],
    },
    Reconciliation: {
        title: 'Reconciliation',
        copy: 'Match provider totals, recorded payments, lesson credits, refunds, and settlement batches.',
        stats: [['Matched', '84'], ['Needs Review', '2'], ['Difference', '₱1,240']],
        columns: ['Record', 'Provider Amount', 'VLACE Record', 'Difference', 'Issue', 'Status', 'Action'],
        rows: [
            ['NHP-20260731-118', '$197', '$0', '$197', 'Failed payment recorded', 'Review', 'Resolve'],
            ['MAN-20260731-021', '$510', '$510', '$0', 'Proof unverified', 'Review', 'Verify'],
            ['SET-0730-A', '$2,588', '$2,588', '$0', 'Matched', 'Complete', 'View'],
        ],
    },
};

let activeFinancePage = 'Overview';

function financeStatus(value) {
    const statusClass = String(value).toLowerCase().replaceAll(' ', '-');
    return `<span class="status status-${statusClass}">${escapeHtml(value)}</span>`;
}

function normalizeGatewayState(state) {
    const value = String(state || '').toLowerCase();
    if (value.includes('disabled')) return 'Disabled';
    if (value.includes('setup') || value.includes('planned')) return 'Setup Required';
    if (value.includes('active') || value.includes('connected') || value.includes('enabled')) return 'Active';
    return 'Setup Required';
}

function gatewayStateDisplay(gateway) {
    return `${normalizeGatewayState(gateway.state)} · ${gateway.mode || 'Test Mode'}`;
}

function sparklineSvg(points, color = '#2673e8') {
    const max = Math.max(...points);
    const min = Math.min(...points);
    const range = max - min || 1;
    const path = points.map((value, index) => {
        const x = (index * 100) / (points.length - 1);
        const y = 34 - ((value - min) / range) * 27;
        return `${index ? 'L' : 'M'}${x},${y}`;
    }).join(' ');
    return `<svg class="sparkline" viewBox="0 0 100 38" preserveAspectRatio="none" aria-label="Trend graph"><path d="${path}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function renderFinanceTabs() {
    const tabs = document.getElementById('financePageTabs');
    if (!tabs) return;
    tabs.innerHTML = financeTabs.map((tab) => `
        <button type="button" class="${activeFinancePage === tab ? 'active' : ''}" data-finance-page="${escapeHtml(tab)}">
            ${escapeHtml(tab)}
            ${tab === 'Transactions' ? '<b>3</b>' : ''}
            ${tab === 'Reconciliation' ? '<b>2</b>' : ''}
        </button>
    `).join('');

    tabs.querySelectorAll('[data-finance-page]').forEach((button) => {
        button.addEventListener('click', () => {
            activeFinancePage = button.dataset.financePage;
            renderFinanceModule();
        });
    });
}

function renderFinanceTable(rows = financeTransactions) {
    return `
        <div class="table-wrap">
            <table class="finance-table transaction-table">
                <thead>
                    <tr>
                        <th>Transaction</th>
                        <th>Student</th>
                        <th>Payment Source</th>
                        <th>Original Amount</th>
                        <th>PHP Gross</th>
                        <th>Discount</th>
                        <th>Referral Discount</th>
                        <th>Net Total</th>
                        <th>Lesson Credits</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${rows.map((row) => `
                        <tr>
                            <td data-label="Transaction"><strong>${escapeHtml(row.id)}</strong><small>${escapeHtml(row.date)}</small></td>
                            <td data-label="Student">${escapeHtml(row.student)}</td>
                            <td data-label="Payment Source">${escapeHtml(row.provider)}</td>
                            <td data-label="Original Amount">${escapeHtml(row.amount)}</td>
                            <td data-label="PHP Gross">${escapeHtml(row.php)}</td>
                            <td data-label="Discount"><span class="discount-badge">${row.discount}%</span></td>
                            <td data-label="Referral Discount"><span class="referral-discount-badge">${row.referralDiscount}%</span></td>
                            <td data-label="Net Total"><strong class="net-transaction-total">${escapeHtml(row.netPhp)}</strong></td>
                            <td data-label="Lesson Credits">${escapeHtml(row.credits)}</td>
                            <td data-label="Status">${financeStatus(row.status)}</td>
                            <td data-label="Action"><button class="table-link" type="button" data-finance-transaction="${escapeHtml(row.id)}">View</button></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function renderProviderCard(gateway) {
    const { id, name, copy, methods } = gateway;
    const status = normalizeGatewayState(gateway.state);
    return `
        <article class="panel provider-card">
            <div class="provider-card-top">
                <span class="provider-logo ${name === 'PayPal' ? 'paypal' : ''}">${escapeHtml(name[0])}</span>
                ${financeStatus(status)}
            </div>
            <h3>${escapeHtml(name)}</h3>
            <strong>${escapeHtml(gatewayStateDisplay(gateway))}</strong>
            <p>${escapeHtml(copy)}</p>
            <small>${escapeHtml(methods)} · Prototype Only</small>
            <div class="provider-card-actions">
                <button type="button" data-payment-gateway-edit="${escapeHtml(id)}">Configure / Edit</button>
            </div>
        </article>
    `;
}

function renderFinanceOverview() {
    return `
        <div class="finance-kpis">
            ${financeKpis.map((item, index) => `
                <article class="finance-kpi f${index}">
                    <div>
                        <span>${escapeHtml(item[0])}</span>
                        <button type="button" title="Shows ${escapeHtml(item[0].toLowerCase())} using confirmed mock records.">?</button>
                    </div>
                    <strong>${escapeHtml(item[1])}</strong>
                    <small>${escapeHtml(item[2])}</small>
                    <em>${escapeHtml(item[3])}</em>
                    ${sparklineSvg([8 + index, 12, 10 + index, 16, 14 + index, 20], index === 5 ? '#d05656' : '#2776d9')}
                </article>
            `).join('')}
        </div>
        <section class="panel finance-panel">
            <div class="finance-panel-head">
                <div>
                    <h3>Payment Channel Summary</h3>
                    <p>${financePaymentGateways.length} payment processors handle supported payment methods.</p>
                </div>
                <button type="button" data-finance-page-jump="Payment Channels">Manage Channels →</button>
            </div>
            <div class="channel-map processor-map">
                ${financePaymentGateways.map((gateway, index) => `
                    <article>
                        <span class="provider-logo ${gateway.name === 'PayPal' ? 'paypal' : ''}">${escapeHtml(gateway.name[0])}</span>
                        <div>
                            <strong>${escapeHtml(gateway.name)}</strong>
                            <small>${escapeHtml(gatewayStateDisplay(gateway))} · ${escapeHtml(gateway.methods)}</small>
                            <p>${index === 0 ? '$2,162' : index === 1 ? '$18,420' : 'Mock totals'} received this month</p>
                        </div>
                        ${financeStatus(normalizeGatewayState(gateway.state))}
                    </article>
                `).join('')}
            </div>
        </section>
        <section class="finance-overview-grid">
            <article class="panel finance-panel">
                <div class="finance-panel-head">
                    <div>
                        <h3>Recent Transactions</h3>
                        <p>Newest provider and manual payments.</p>
                    </div>
                    <button type="button" data-finance-page-jump="Transactions">View All</button>
                </div>
                ${renderFinanceTable(financeTransactions.slice(0, 4))}
            </article>
        </section>
    `;
}

function renderFinanceTransactionsPage() {
    return `
        <section class="panel finance-panel">
            <div class="finance-panel-head">
                <div>
                    <h3>All Transactions</h3>
                    <p>See the converted gross amount, discounts applied, and final net total.</p>
                </div>
            </div>
            <div class="finance-filters">
                <input placeholder="Search student or transaction ID…">
                <select><option>All providers</option><option>NihaoPay</option><option>Manual</option></select>
                <select><option>All statuses</option><option>Paid</option><option>Pending</option><option>Failed</option></select>
                <select><option>This month</option><option>Today</option><option>Last month</option></select>
            </div>
            ${renderFinanceTable(financeTransactions)}
        </section>
    `;
}

function renderFinanceSectionPage(page) {
    const data = financeSectionPages[page];
    return `
        <div class="finance-mini-stats">
            ${data.stats.map((stat) => `<article><span>${escapeHtml(stat[0])}</span><strong>${escapeHtml(stat[1])}</strong></article>`).join('')}
        </div>
        <section class="panel finance-panel">
            <div class="finance-panel-head">
                <div>
                    <h3>${escapeHtml(data.title)}</h3>
                    <p>${escapeHtml(data.copy)}</p>
                </div>
                <button type="button">Filter</button>
            </div>
            <div class="table-wrap">
                <table class="finance-table">
                    <thead><tr>${data.columns.map((column) => `<th>${escapeHtml(column)}</th>`).join('')}</tr></thead>
                    <tbody>
                        ${data.rows.map((row) => `
                            <tr>
                                ${row.map((cell, index) => {
                                    const isStatus = index === row.length - 2 && ['Pending', 'Approved', 'Completed', 'Settled', 'Verified', 'Review', 'Complete'].includes(cell);
                                    return `<td>${isStatus ? financeStatus(cell) : escapeHtml(cell)}</td>`;
                                }).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderFinanceReportsPage() {
    return `
        <section class="panel finance-panel">
            <div class="finance-panel-head">
                <div>
                    <h3>Financial Reports</h3>
                    <p>Cached mock summaries for July 2026. No tax calculations are included.</p>
                </div>
                <button type="button" data-finance-toast="Mock report prepared. No real file was downloaded.">Export Mock Report</button>
            </div>
            <div class="report-filter">
                <select><option>July 2026</option><option>June 2026</option></select>
                <select><option>All countries</option><option>China</option><option>Israel</option><option>UAE</option></select>
                <select><option>PHP display</option><option>Original currencies</option></select>
            </div>
            <div class="report-cards">
                ${[
                    ['Gross Revenue', '₱1,029,200'],
                    ['Processing Fees', '₱19,480'],
                    ['Teacher Salaries', '₱69,190'],
                    ['Refunds', '₱10,000'],
                    ['Operating Expenses', '₱84,300'],
                    ['Net Operating Income', '₱846,230'],
                ].map((item) => `<article><span>${item[0]}</span><strong>${item[1]}</strong></article>`).join('')}
            </div>
            <div class="mock-report-chart">
                <div style="height:72%"><b>Revenue</b></div>
                <div style="height:34%"><b>Costs</b></div>
                <div style="height:60%"><b>Net Income</b></div>
            </div>
        </section>
    `;
}

function renderFinanceContent() {
    if (activeFinancePage === 'Overview') return renderFinanceOverview();
    if (activeFinancePage === 'Transactions') return renderFinanceTransactionsPage();
    if (activeFinancePage === 'Payment Channels') {
        return `
            <section class="payment-channel-toolbar">
                <div>
                    <h3>Gateway Management</h3>
                    <p>Add another processor or edit an existing payment gateway.</p>
                </div>
                <button class="primary-button" type="button" data-payment-gateway-add>+ Add Payment Gateway</button>
            </section>
            <section class="channel-cards two-processors">
                ${financePaymentGateways.map(renderProviderCard).join('')}
            </section>
        `;
    }
    if (financeSectionPages[activeFinancePage]) return renderFinanceSectionPage(activeFinancePage);
    if (activeFinancePage === 'Financial Reports') return renderFinanceReportsPage();
    return '';
}

function renderFinanceModule() {
    const heading = document.getElementById('financePageHeading');
    const content = document.getElementById('financePageContent');
    if (!heading || !content) return;

    heading.textContent = activeFinancePage;
    renderFinanceTabs();
    content.innerHTML = renderFinanceContent();
    bindFinanceControls(content);
}

function bindFinanceControls(root = document) {
    root.querySelectorAll('[data-finance-page-jump]').forEach((button) => {
        button.addEventListener('click', () => {
            activeFinancePage = button.dataset.financePageJump;
            renderFinanceModule();
        });
    });

    root.querySelectorAll('[data-finance-transaction]').forEach((button) => {
        button.addEventListener('click', () => {
            const transaction = financeTransactions.find((row) => row.id === button.dataset.financeTransaction);
            if (transaction) openFinanceTransactionDetail(transaction);
        });
    });

    root.querySelectorAll('[data-finance-modal]').forEach((button) => {
        button.addEventListener('click', () => openFinanceModal(button.dataset.financeModal));
    });

    root.querySelectorAll('[data-payment-gateway-add]').forEach((button) => {
        button.addEventListener('click', () => openPaymentGatewayModal());
    });

    root.querySelectorAll('[data-payment-gateway-edit]').forEach((button) => {
        button.addEventListener('click', () => openPaymentGatewayModal(button.dataset.paymentGatewayEdit));
    });

    root.querySelectorAll('[data-finance-toast]').forEach((button) => {
        button.addEventListener('click', () => showSparkToast(button.dataset.financeToast));
    });
}

function openFinanceTransactionDetail(selected) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop finance-operation-backdrop';
    overlay.innerHTML = `
        <div class="modal transaction-detail" role="dialog" aria-modal="true" aria-labelledby="finance-transaction-title">
            <div class="modal-head">
                <div>
                    <p>TRANSACTION DETAIL</p>
                    <h3 id="finance-transaction-title">${escapeHtml(selected.id)}</h3>
                </div>
                <button type="button" data-finance-close aria-label="Close">×</button>
            </div>
            <div class="transaction-summary">
                ${financeStatus(selected.status)}
                <strong>${escapeHtml(selected.netPhp)}</strong>
                <span>Net total after ${selected.discount}% discount and ${selected.referralDiscount}% referral discount</span>
            </div>
            <dl>
                <div><dt>Student</dt><dd>${escapeHtml(selected.student)}</dd></div>
                <div><dt>Payment Source</dt><dd>${escapeHtml(selected.provider)}</dd></div>
                <div><dt>Original Amount</dt><dd>${escapeHtml(selected.amount)} · ${escapeHtml(selected.php)} converted</dd></div>
                <div><dt>Regular Discount</dt><dd>${selected.discount}%</dd></div>
                <div><dt>Referral Discount</dt><dd>${selected.referralDiscount}%</dd></div>
                <div><dt>Lesson Credits</dt><dd>${escapeHtml(selected.credits)}</dd></div>
            </dl>
            <div class="audit-timeline">
                <b>Payment created</b><span>${escapeHtml(selected.date)}</span>
                <b>Provider status received</b><span>Mock webhook event</span>
                <b>Lesson credit allocation</b><span>${escapeHtml(selected.credits)}</span>
            </div>
            <div class="modal-actions">
                <button class="secondary-button" type="button" data-finance-close>Close</button>
                <button class="primary-button" type="button" data-finance-reminder>Send Reminder</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelectorAll('[data-finance-close]').forEach((button) => button.addEventListener('click', () => overlay.remove()));
    overlay.querySelector('[data-finance-reminder]')?.addEventListener('click', () => showSparkToast('Mock payment reminder queued.'));
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) overlay.remove();
    });
}

function getFinanceModalBody(kind) {
    if (kind === 'manual') {
        return `
            <div class="secure-notice warning">Verify the payment before adding lesson credits.</div>
            <div class="finance-form">
                <label>Student<select><option>Hetao Zhang</option><option>Liam Chen</option><option>Sophia Kim</option></select></label>
                <label>Package<select><option>30 Lessons · Kids CEFR</option><option>20 Lessons · General English</option></select></label>
                <label>Payment date<input type="date" value="2026-08-01"></label>
                <label>Payment method<select><option>Bank Transfer</option><option>Cash</option><option>Alipay Manual Transfer</option><option>Other Approved Method</option></select></label>
                <label>Reference number<input placeholder="Masked after saving"></label>
                <label>Currency<select><option>USD</option><option>PHP</option></select></label>
                <label>Amount<input placeholder="0.00"></label>
                <label>Exchange rate<input value="Mock Rate"></label>
            </div>
            <div class="mock-upload">Proof of payment · Mock upload only</div>
        `;
    }

    if (kind === 'rates') {
        return `
            <div class="secure-notice">Conversions are estimates and do not change the original payment amount.</div>
            <table class="finance-table">
                <thead><tr><th>Currency</th><th>Dashboard Rate</th><th>Updated</th><th>Method</th></tr></thead>
                <tbody>
                    ${[['USD', '₱58.50'], ['PHP', '₱1.00']].map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>Aug 1, 3:00 AM</td><td>Manual · Mock Rate</td></tr>`).join('')}
                </tbody>
            </table>
        `;
    }

    if (kind === 'settings') {
        return `
            <div class="settings-list">
                <label>Default dashboard currency<select><option>PHP — Philippine Peso</option><option>USD — US Dollar</option></select></label>
                <label><input type="checkbox" checked> Show original payment currency</label>
                <label><input type="checkbox" checked> Show converted dashboard currency</label>
                <label><input type="checkbox" checked> Require approval for manual payments</label>
                <label><input type="checkbox" checked> Require approval for refunds</label>
                <label><input type="checkbox" checked> Hide sensitive payment identifiers</label>
            </div>
            <div class="secure-notice disabled">Tax Features — Not Enabled<br><small>Tax-related calculations and reports are disabled and are not included in VLACE financial records.</small></div>
        `;
    }

    return `
        <div class="secure-notice">Prototype Only · Never enter real merchant credentials.</div>
        <div class="channel-relation">
            <b>${kind === 'nihao' ? 'NihaoPay processes Alipay' : 'PayPal processes PayPal, debit cards, and credit cards'}</b>
            <span>${kind === 'nihao' ? 'Alipay is a payment method—not a separate VLACE processor.' : 'All three methods are managed through one PayPal connection.'}</span>
        </div>
        <div class="finance-form">
            <label>Connection Mode<select><option>Test Mode</option><option disabled>Live Mode · Future</option></select></label>
            <label>Merchant ID<input value="••••••••4821" readonly></label>
            <label>API Key<input value="••••••••••••" readonly></label>
            <label>Webhook URL<input value="https://vlace.example/mock-webhook" readonly></label>
        </div>
    `;
}

function paymentGatewayFormBody(gateway = {}) {
    const selectedMode = gateway.mode || 'Test Mode';
    const state = normalizeGatewayState(gateway.state || 'Active');
    return `
        <div class="secure-notice">Prototype Only · Save the gateway profile here before connecting real merchant credentials.</div>
        <div class="finance-form gateway-form">
            <label>Gateway name<input data-gateway-field="name" value="${escapeHtml(gateway.name || '')}" placeholder="Stripe, PayMongo, Bank Transfer"></label>
            <label>Status<select data-gateway-field="state">
                ${['Active', 'Setup Required', 'Disabled'].map((option) => `<option ${state === option ? 'selected' : ''}>${option}</option>`).join('')}
            </select><small class="gateway-field-note">Choose whether this gateway is usable in VLACE right now.</small></label>
            <label>Connection mode<select data-gateway-field="mode">
                ${['Test Mode', 'Live Mode · Future'].map((option) => `<option ${selectedMode === option ? 'selected' : ''}>${option}</option>`).join('')}
            </select><small class="gateway-field-note">Choose how the gateway connection behaves: test now, live later.</small></label>
            <label>Supported methods<input data-gateway-field="methods" value="${escapeHtml(gateway.methods || '')}" placeholder="Cards · Wallet · Bank Transfer"></label>
            <label class="span-2">Description<textarea data-gateway-field="copy" rows="3" placeholder="What this gateway processes for students">${escapeHtml(gateway.copy || '')}</textarea></label>
            <label>Merchant ID<input data-gateway-field="merchantId" value="${escapeHtml(gateway.merchantId || '')}" placeholder="Masked or test merchant ID"></label>
            <label>API Key<input data-gateway-field="apiKey" value="${escapeHtml(gateway.apiKey || '')}" placeholder="Masked test API key"></label>
            <label class="span-2">Webhook URL<input data-gateway-field="webhookUrl" value="${escapeHtml(gateway.webhookUrl || 'https://vlace.example/mock-webhook')}"></label>
        </div>
    `;
}

function openPaymentGatewayModal(gatewayId = null) {
    const existingGateway = financePaymentGateways.find((gateway) => gateway.id === gatewayId);
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop finance-operation-backdrop';
    overlay.innerHTML = `
        <div class="modal finance-modal" role="dialog" aria-modal="true" aria-labelledby="gateway-modal-title">
            <div class="modal-head">
                <div>
                    <p>ADMIN ONLY · PAYMENT GATEWAY</p>
                    <h3 id="gateway-modal-title">${existingGateway ? `Edit ${escapeHtml(existingGateway.name)}` : 'Add Payment Gateway'}</h3>
                </div>
                <button type="button" data-finance-close aria-label="Close">×</button>
            </div>
            ${paymentGatewayFormBody(existingGateway)}
            <div class="modal-actions">
                <button class="secondary-button" type="button" data-finance-close>Cancel</button>
                <button class="primary-button" type="button" data-gateway-save>${existingGateway ? 'Save Gateway Changes' : 'Add Gateway'}</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    function close() {
        overlay.remove();
    }

    function readField(name) {
        return overlay.querySelector(`[data-gateway-field="${name}"]`)?.value.trim() || '';
    }

    overlay.querySelectorAll('[data-finance-close]').forEach((button) => button.addEventListener('click', close));
    overlay.querySelector('[data-gateway-save]')?.addEventListener('click', () => {
        const name = readField('name');
        if (!name) {
            showSparkToast('Gateway name is required.');
            return;
        }

        const nextGateway = {
            id: existingGateway?.id || `gateway-${Date.now()}`,
            name,
            state: readField('state'),
            mode: readField('mode'),
            methods: readField('methods') || 'Custom payment method',
            copy: readField('copy') || `${name} is a custom payment gateway for student payments.`,
            merchantId: readField('merchantId') || 'Prototype merchant ID',
            apiKey: readField('apiKey') || 'Prototype API key',
            webhookUrl: readField('webhookUrl') || 'https://vlace.example/mock-webhook',
        };

        if (existingGateway) {
            financePaymentGateways = financePaymentGateways.map((gateway) => gateway.id === existingGateway.id ? nextGateway : gateway);
        } else {
            financePaymentGateways.push(nextGateway);
        }

        close();
        renderFinanceModule();
        showSparkToast(existingGateway ? `${name} gateway updated.` : `${name} gateway added.`);
    });
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
}

function openFinanceModal(kind) {
    const titles = {
        nihao: 'NihaoPay Configuration',
        paypal: 'PayPal Configuration',
        manual: 'Record Manual Payment',
        rates: 'Exchange Rates',
        settings: 'Finance Settings',
    };
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop finance-operation-backdrop';
    overlay.innerHTML = `
        <div class="modal finance-modal" role="dialog" aria-modal="true" aria-labelledby="finance-modal-title">
            <div class="modal-head">
                <div>
                    <p>ADMIN ONLY · PROTOTYPE</p>
                    <h3 id="finance-modal-title">${titles[kind] || 'Finance'}</h3>
                </div>
                <button type="button" data-finance-close aria-label="Close">×</button>
            </div>
            ${getFinanceModalBody(kind)}
            <div class="modal-actions">
                <button class="secondary-button" type="button" data-finance-close>Cancel</button>
                <button class="primary-button" type="button" data-finance-save>${kind === 'manual' ? 'Save as Unverified' : 'Save Prototype Settings'}</button>
                ${kind === 'manual' ? '<button class="primary-button" type="button" data-finance-confirm>Confirm Payment</button>' : ''}
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    function close() {
        overlay.remove();
    }

    overlay.querySelectorAll('[data-finance-close]').forEach((button) => button.addEventListener('click', close));
    overlay.querySelector('[data-finance-save]')?.addEventListener('click', () => {
        close();
        showSparkToast(kind === 'manual' ? 'Manual payment saved as unverified.' : 'Prototype finance settings saved.');
    });
    overlay.querySelector('[data-finance-confirm]')?.addEventListener('click', () => {
        close();
        showSparkToast('Manual payment confirmed and lesson credits added.');
    });
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
}

const communicationChannels = ['All', 'Facebook Messenger', 'WhatsApp', 'Website Chat', 'LINE', 'KakaoTalk'];
let activeCommunicationTab = 'Unified Inbox';
let activeCommunicationChannel = 'All';
let communicationNotice = '';
let selectedConversationId = 1;
let selectedEmailId = 1;
let communicationEmailFolder = 'Inbox';

let communicationConnections = {
    facebook: true,
    whatsapp: true,
    website: true,
};

let communicationConversations = [
    { id: 1, name: 'Rose Zhang', channel: 'Facebook Messenger', preview: 'Hi, I want to ask about your kids’ lessons.', time: '4:18 PM', unread: 2, country: 'China', status: 'Open', assignedRole: 'Admin', assignedTo: 'Van Acepcion', messages: [['customer', 'Hi! I saw VLACE on Facebook.', '4:16 PM'], ['customer', 'I want to ask about your English lessons for kids.', '4:18 PM']] },
    { id: 2, name: 'David Cohen', channel: 'WhatsApp', preview: 'Can I book a trial lesson this weekend?', time: '3:42 PM', unread: 1, country: 'Israel', status: 'Open', assignedRole: 'Staff', assignedTo: 'Carlo Mendoza', messages: [['customer', 'Hello, can I book a trial lesson this weekend?', '3:42 PM']] },
    { id: 3, name: 'Fatima Al Mansoori', channel: 'Website Chat', preview: 'Thank you. I will check the packages.', time: '1:05 PM', unread: 0, country: 'UAE', status: 'Open', assignedRole: 'Manager', assignedTo: 'Angela Reyes', messages: [['customer', 'Do you have evening classes for adults?', '12:58 PM'], ['vlace', 'Yes, we have evening schedules. You may choose a package that works for you.', '1:02 PM'], ['customer', 'Thank you. I will check the packages.', '1:05 PM']] },
    { id: 4, name: 'Min-jun Park', channel: 'Facebook Messenger', preview: 'What documents are needed to enroll?', time: 'Yesterday', unread: 0, country: 'South Korea', status: 'Resolved', assignedRole: 'Staff', assignedTo: 'Nina Flores', messages: [['customer', 'What documents are needed to enroll?', 'Yesterday'], ['vlace', 'We only need the student’s basic information and preferred schedule to get started.', 'Yesterday']] },
    { id: 5, name: 'Yuki Lee', channel: 'LINE', preview: 'The lesson reminder was delivered.', time: '34 min', unread: 1, country: 'Japan', status: 'Open', assignedRole: 'Staff', assignedTo: 'Carlo Mendoza', messages: [['customer', 'Hello, I received the lesson reminder on LINE.', '34 min'], ['vlace', 'Thank you for confirming. We will see you at the scheduled time.', '30 min']] },
    { id: 6, name: 'Seo-jun Kim', channel: 'KakaoTalk', preview: 'The trial lesson time is confirmed.', time: '22 min', unread: 1, country: 'South Korea', status: 'Open', assignedRole: 'Manager', assignedTo: 'Angela Reyes', messages: [['customer', 'Can we confirm the trial lesson for Saturday?', '28 min'], ['vlace', 'Yes, your Saturday trial lesson is confirmed.', '22 min']] },
];

let communicationEmails = [
    { id: 1, sender: 'Grace Liu', address: 'grace.liu@example.com', subject: 'Inquiry about kids’ English packages', preview: 'Hello VLACE, I would like to know which package is best for my 9-year-old daughter…', date: '4:32 PM', unread: true, starred: true, archived: false, country: 'China', assignedRole: 'Admin', assignedTo: 'Van Acepcion', body: 'Hello VLACE,\n\nI would like to know which package is best for my 9-year-old daughter. She is a beginner and is available after 6 PM on weekdays.\n\nThank you,\nGrace' },
    { id: 2, sender: 'Yossi Ben-David', address: 'yossi.bd@example.com', subject: 'Trial lesson schedule', preview: 'Can we move our trial lesson to Sunday morning instead?', date: '3:15 PM', unread: true, starred: false, archived: false, country: 'Israel', assignedRole: 'Staff', assignedTo: 'Nina Flores', body: 'Hi,\n\nCan we move our trial lesson to Sunday morning instead? Please let me know which teachers are available.\n\nRegards,\nYossi' },
    { id: 3, sender: 'Ahmed Al Nuaimi', address: 'ahmed.n@example.com', subject: 'Corporate English classes', preview: 'We are looking for online English classes for a team of twelve employees…', date: '11:08 AM', unread: true, starred: true, archived: false, country: 'UAE', assignedRole: 'Manager', assignedTo: 'Angela Reyes', body: 'Good day,\n\nWe are looking for online English classes for a team of twelve employees. Could you send information about your corporate packages and available schedules?\n\nAhmed' },
    { id: 4, sender: 'Soo-jin Kim', address: 'soojin.k@example.com', subject: 'Payment confirmation', preview: 'I have completed the payment for the 30-lesson package.', date: 'Yesterday', unread: true, starred: false, archived: false, country: 'South Korea', assignedRole: 'Staff', assignedTo: 'Carlo Mendoza', body: 'Hello,\n\nI have completed the payment for the 30-lesson package. I attached the receipt for your reference.\n\nThank you.' },
    { id: 5, sender: 'Daniel Wong', address: 'daniel.w@example.com', subject: 'Teacher availability', preview: 'Is Teacher Maria available on Tuesday and Thursday evenings?', date: 'Yesterday', unread: true, starred: false, archived: false, country: 'China', assignedRole: 'Staff', assignedTo: 'Carlo Mendoza', body: 'Hi VLACE,\n\nIs Teacher Maria available on Tuesday and Thursday evenings? We would like to keep the same teacher for all lessons.\n\nDaniel' },
    { id: 6, sender: 'Noura Hassan', address: 'noura.h@example.com', subject: 'Re: Welcome to VLACE', preview: 'Thank you for helping me complete the enrollment.', date: 'Jul 29', unread: false, starred: false, archived: false, country: 'UAE', assignedRole: 'Manager', assignedTo: 'Angela Reyes', body: 'Thank you for helping me complete the enrollment. I am looking forward to starting my lessons next week.' },
];

function communicationInitials(name) {
    return name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();
}

function communicationStatus(value) {
    return `<span class="status status-${String(value).toLowerCase().replaceAll(' ', '-')}">${escapeHtml(value)}</span>`;
}

function renderCommunicationWorkspace() {
    const root = document.getElementById('communicationWorkspace');
    if (!root) return;
    const unread = communicationConversations.reduce((sum, item) => sum + item.unread, 0);
    root.innerHTML = `
        <section class="communication-hero">
            <div>
                <p class="eyebrow">COMMUNICATION CENTER</p>
                <h2>Communication</h2>
                <p>Read and reply to Facebook Messenger, WhatsApp, Website Chat, LINE, KakaoTalk, and company email in one protected workspace.</p>
            </div>
            <div class="communication-total"><strong>${unread}</strong><span>Unread messages</span></div>
        </section>
        ${communicationNotice ? `<div class="communication-notice"><span>✓</span>${escapeHtml(communicationNotice)}<button type="button" data-communication-notice-close aria-label="Dismiss">×</button></div>` : ''}
        <nav class="communication-tabs" aria-label="Communication sections">
            ${['Unified Inbox', 'Email Inbox', 'Chatbot', 'Slack', 'Student Reminders'].map((tab) => `<button type="button" class="${activeCommunicationTab === tab ? 'active' : ''}" data-communication-tab="${tab}">${tab}${tab === 'Unified Inbox' ? `<b>${unread}</b>` : tab === 'Email Inbox' ? '<b>5</b>' : tab === 'Chatbot' ? '<b>2</b>' : tab === 'Slack' ? '<b>4</b>' : ''}</button>`).join('')}
        </nav>
        <div class="communication-tab-content">
            ${activeCommunicationTab === 'Unified Inbox' ? renderUnifiedInboxPanel() : ''}
            ${activeCommunicationTab === 'Email Inbox' ? renderEmailInboxPanel() : ''}
            ${activeCommunicationTab === 'Chatbot' ? renderChatbotPanel() : ''}
            ${activeCommunicationTab === 'Slack' ? renderSlackPanel() : ''}
            ${activeCommunicationTab === 'Student Reminders' ? renderStudentRemindersPanel() : ''}
        </div>
    `;
    bindCommunicationEvents(root);
    refreshIcons();
}

function renderUnifiedInboxPanel() {
    const visibleConversations = communicationConversations.filter((item) => activeCommunicationChannel === 'All' || item.channel === activeCommunicationChannel);
    const selected = visibleConversations.find((item) => item.id === selectedConversationId) || visibleConversations[0] || communicationConversations[0];
    const connectionsCount = Object.values(communicationConnections).filter(Boolean).length;
    return `
        <div class="inbox-connection-note">
            <span class="communication-note-icon"><i data-lucide="inbox"></i></span>
            <div><strong>One inbox for every customer channel</strong><p>Connect official accounts to receive live conversations here.</p></div>
            <span class="status status-active">${connectionsCount} of 3 connected</span>
            <button class="secondary-button" type="button" data-open-channel-drawer>Manage Channels</button>
        </div>
        <div class="channel-filters" role="tablist">
            ${communicationChannels.map((channel) => `<button type="button" class="${activeCommunicationChannel === channel ? 'active' : ''}" data-communication-channel="${channel}" role="tab" aria-selected="${activeCommunicationChannel === channel ? 'true' : 'false'}"><span class="channel-dot"></span>${channel}<b>${channel === 'All' ? communicationConversations.length : communicationConversations.filter((item) => item.channel === channel).length}</b></button>`).join('')}
        </div>
        <section class="inbox-shell">
            <aside class="conversation-list">
                <label class="conversation-search"><span>⌕</span><input placeholder="Search conversations"></label>
                <div class="conversation-scroll">
                    ${visibleConversations.map((item) => `
                        <button type="button" class="${selected.id === item.id ? 'selected' : ''}" data-conversation-select="${item.id}">
                            <span class="conversation-avatar">${communicationInitials(item.name)}</span>
                            <span class="conversation-copy"><span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.time)}</small></span><em>${escapeHtml(item.channel)} · Assigned to ${escapeHtml(item.assignedTo)}</em><p>${escapeHtml(item.preview)}</p></span>
                            ${item.unread ? `<b class="message-count">${item.unread}</b>` : ''}
                        </button>
                    `).join('') || '<div class="conversation-empty">No conversations in this channel.</div>'}
                </div>
            </aside>
            <article class="chat-panel">
                <header class="chat-head">
                    <span class="conversation-avatar">${communicationInitials(selected.name)}</span>
                    <div><strong>${escapeHtml(selected.name)}</strong><span>${escapeHtml(selected.channel)} · ${escapeHtml(selected.country)}</span></div>
                    <button class="assignment-button" type="button" data-assign-conversation><span>Assigned to</span><strong>${escapeHtml(selected.assignedTo)}</strong><small>${escapeHtml(selected.assignedRole)} · Change assignment</small></button>
                    <button class="${selected.status === 'Resolved' ? 'reopen-button' : 'resolve-button'}" type="button" data-resolve-conversation>${selected.status === 'Resolved' ? 'Reopen' : '✓ Resolve'}</button>
                </header>
                <div class="message-history">
                    <div class="message-date">Today</div>
                    ${selected.messages.map((message) => `<div class="message-row ${message[0] === 'vlace' ? 'outgoing' : 'incoming'}"><div><p>${escapeHtml(message[1])}</p><span>${escapeHtml(message[2])}${message[0] === 'vlace' ? ' · VLACE Admin' : ''}</span></div></div>`).join('')}
                </div>
                <footer class="reply-box">
                    <div class="translation-service-off"><strong>OpenAI Translation is off</strong><span>An Administrator can enable it in Settings → AI Controls.</span></div>
                    <textarea aria-label="Reply message" placeholder="Reply to ${escapeHtml(selected.name)}..." data-conversation-reply></textarea>
                    <div><span>Replying through <strong>${escapeHtml(selected.channel)}</strong></span><button class="primary-button" type="button" data-send-conversation-reply>Send Reply</button></div>
                </footer>
            </article>
        </section>
    `;
}

function renderEmailInboxPanel() {
    const selected = communicationEmails.find((item) => item.id === selectedEmailId) || communicationEmails[0];
    const folders = [
        ['Inbox', communicationEmails.filter((email) => !email.archived).length],
        ['Unread', communicationEmails.filter((email) => email.unread && !email.archived).length],
        ['Starred', communicationEmails.filter((email) => email.starred && !email.archived).length],
        ['Archived', communicationEmails.filter((email) => email.archived).length],
    ];
    const visible = communicationEmails.filter((email) => communicationEmailFolder === 'Inbox' ? !email.archived : communicationEmailFolder === 'Unread' ? email.unread && !email.archived : communicationEmailFolder === 'Starred' ? email.starred && !email.archived : email.archived);
    return `
        <div class="section-intro communication-section-intro"><div><h2>Company Email</h2><p>Read, organize, assign, and reply to emails received by VLACE.</p></div><button class="primary-button" type="button" data-communication-toast="Email composer opened in prototype mode.">+ Compose Email</button></div>
        <div class="inbox-connection-note email-connection-note"><span class="communication-note-icon"><i data-lucide="mail"></i></span><div><strong>VLACE email account</strong><p>Connect your company mailbox to receive and send live email from this dashboard.</p></div><button class="secondary-button" type="button" data-communication-toast="Connect Email drawer prepared in prototype mode.">Connect Email</button></div>
        <section class="email-shell">
            <aside class="email-folders">
                <button class="compose-email" type="button" data-communication-toast="Email composer opened in prototype mode.">+ Compose</button>
                ${folders.map(([name, count]) => `<button type="button" class="${communicationEmailFolder === name ? 'active' : ''}" data-email-folder="${name}"><span>${name === 'Inbox' ? '✉' : name === 'Unread' ? '●' : name === 'Starred' ? '★' : '□'}</span>${name}<b>${count}</b></button>`).join('')}
                <div class="email-access-note"><strong>Private information</strong><p>Email access is controlled under User Management → Roles & Permissions.</p></div>
            </aside>
            <div class="email-list">
                <label class="email-search"><span>⌕</span><input placeholder="Search mail"></label>
                <div class="email-list-head"><strong>${escapeHtml(communicationEmailFolder)}</strong><span>${visible.length} emails</span></div>
                <div class="email-scroll">
                    ${visible.map((email) => `<button type="button" class="${selected.id === email.id ? 'selected' : ''} ${email.unread ? 'unread' : ''}" data-email-select="${email.id}"><span class="email-avatar">${communicationInitials(email.sender)}</span><span class="email-copy"><span><strong>${escapeHtml(email.sender)}</strong><small>${escapeHtml(email.date)}</small></span><em>${escapeHtml(email.subject)}</em><p>${escapeHtml(email.preview)}</p><small class="email-assignee">Assigned to ${escapeHtml(email.assignedTo)}</small></span>${email.starred ? '<b class="email-star">★</b>' : ''}</button>`).join('')}
                </div>
            </div>
            <article class="email-reader">
                <header><div class="email-reader-actions"><button class="email-assignment-button" type="button" data-assign-email><span>Assigned to</span><strong>${escapeHtml(selected.assignedTo)}</strong><small>${escapeHtml(selected.assignedRole)} · Change</small></button><button type="button" data-toggle-email-star>${selected.starred ? '★ Starred' : '☆ Star'}</button><button class="${selected.unread ? 'email-read-toggle unread' : 'email-read-toggle'}" type="button" data-toggle-email-read>${selected.unread ? 'Mark Read' : 'Mark Unread'}</button><button type="button" data-toggle-email-archive>${selected.archived ? 'Move to Inbox' : 'Archive'}</button></div><h3>${escapeHtml(selected.subject)}</h3><div class="email-sender"><span class="email-avatar">${communicationInitials(selected.sender)}</span><div><strong>${escapeHtml(selected.sender)}</strong><span>${escapeHtml(selected.address)} · ${escapeHtml(selected.country)}</span></div><small>${escapeHtml(selected.date)}</small></div></header>
                <div class="email-body">${selected.body.split('\n').map((line) => `<p>${escapeHtml(line || ' ')}</p>`).join('')}</div>
                <footer class="email-reply"><div><strong>Reply to ${escapeHtml(selected.sender)}</strong><span>Handled by <b>${escapeHtml(selected.assignedTo)}</b></span></div><textarea aria-label="Email reply" placeholder="Write your reply..." data-email-reply></textarea><button class="primary-button" type="button" data-send-email-reply>Send Email</button></footer>
            </article>
        </section>
    `;
}

function renderChatbotPanel() {
    return `<section class="chatbot-workspace"><div class="chatbot-hero"><div><p>VLACE AUTOMATED SUPPORT</p><h2>Chatbot Control Center</h2><small>Edit chatbot behavior, monitor conversations, and review when staff assistance is needed.</small></div><span class="status status-active">Chatbot online</span></div><div class="chatbot-overview-grid"><article class="chatbot-card"><header><div><h3>Recent Chatbot Activity</h3><p>Live operational events and customer activity</p></div></header>${[['New inquiry','Rose Zhang asked about a trial lesson.','2 min'],['Staff handoff','Conversation transferred after an unanswered scheduling question.','9 min'],['Reply matched','Package information sent to David Cohen.','18 min'],['Conversation resolved','The visitor confirmed that the answer was helpful.','34 min']].map((item) => `<div class="chatbot-activity"><span>•</span><div><strong>${item[0]}</strong><p>${item[1]}</p></div><time>${item[2]}</time></div>`).join('')}</article><article class="chatbot-card"><header><div><h3>Attention Required</h3><p>Items that may affect chatbot accuracy</p></div></header><div class="chatbot-alert"><b>2</b><div><strong>Conversations need staff</strong><p>Visitors asked questions outside the current knowledge base.</p></div></div><div class="chatbot-alert"><b>3</b><div><strong>Replies need review</strong><p>Improve low-confidence answers before publishing.</p></div></div><button class="primary-button" type="button" data-communication-toast="Chatbot knowledge review opened in prototype mode.">Review Knowledge</button></article></div></section>`;
}

function renderSlackPanel() {
    return `<section class="slack-workspace-page"><div class="slack-hero"><div class="slack-title"><span>#</span><div><p>COMMUNICATION PLATFORM</p><h2>Slack Workspace</h2><small>Internal collaboration and automated VLACE updates in one protected view.</small></div></div><div class="slack-hero-actions"><span class="slack-connection connected">● Bot connected</span><button type="button" data-communication-toast="Slack display mode changed in prototype mode.">☾ Dark</button></div></div><nav class="slack-tabs"><button class="active">Channels</button><button>Direct Messages</button><button>Notifications <b>4</b></button><button>Settings</button></nav><div class="slack-channel-workspace"><article class="slack-list-card"><header><div><h3>Channels</h3><p>Team spaces</p></div></header>${['#vlace-notifications','#operations','#student-support','#teacher-updates'].map((item, index) => `<button class="slack-list-row ${index === 0 ? 'active' : ''}" type="button"><span class="slack-channel-symbol">#</span><div><strong>${item}</strong><p>${index === 0 ? 'System reminders and alerts' : 'Team communication'}</p></div><span class="slack-row-meta"><small>${index + 1}m</small></span></button>`).join('')}</article><article class="slack-channel-detail"><header><div><h3>#vlace-notifications</h3><p>Automated dashboard events, payment alerts, and schedule updates.</p></div><button type="button">Settings</button></header><div class="slack-channel-summary"><span><b>Integration</b> Connected</span><span><b>Members</b> 12</span><span><b>Messages</b> 4 today</span></div><div class="slack-message-stream"><article><span class="slack-message-avatar">VA</span><div><header><strong>Van Acepcion</strong><time>9:18 AM</time></header><p>Morning operations check complete.</p></div></article><article class="own-message"><span class="slack-message-avatar">AI</span><div><header><strong>VLACE Bot</strong><time>9:24 AM</time></header><p>3 student reminders are scheduled for today.</p></div></article></div><footer class="slack-message-composer"><input placeholder="Message #vlace-notifications"><button type="button">Send</button></footer></article></div></section>`;
}

function renderStudentRemindersPanel() {
    return `<section class="reminders-page"><div class="reminder-hero"><div><p class="eyebrow">COMMUNICATION · STUDENT CARE</p><h2>Student Reminders</h2><p>Create editable templates for manual messages or scheduled automatic delivery.</p></div><div class="delivery-mode-card"><span>Delivery Mode</span><div class="delivery-mode-switch"><button class="active" type="button">Manual</button><button type="button">Automatic</button></div><strong>Manual Send Mode</strong></div></div><div class="reminder-workspace"><article class="reminder-card"><header><h3>Recipients</h3><p>Selected Students · China</p></header>${['Liam Chen','Eddie Zhang','Aya Mori','Sophia Kim','Mira Wang'].map((name, index) => `<label class="reminder-recipient"><input type="checkbox" ${index < 2 ? 'checked' : ''}><span><strong>${name}</strong><small>${index < 2 ? 'China' : index === 2 ? 'Japan' : index === 3 ? 'South Korea' : 'UAE'}</small></span></label>`).join('')}</article><article class="reminder-card"><header><h3>Message Template</h3><p>Class in 1 hour</p></header><textarea>Hello {student_name}! This is a friendly reminder that your English class starts in 1 hour. Please prepare your lesson materials and open {meeting_platform} a few minutes early. See you soon!</textarea><div class="modal-actions"><button class="secondary-button" type="button" data-communication-toast="Personalized reminders copied.">Copy Messages</button><button class="primary-button" type="button" data-communication-toast="WhatsApp opened with reminders ready to send.">Send via WhatsApp</button></div></article></div></section>`;
}

function bindCommunicationEvents(root) {
    root.querySelectorAll('[data-communication-tab]').forEach((button) => button.addEventListener('click', () => {
        activeCommunicationTab = button.dataset.communicationTab;
        renderCommunicationWorkspace();
    }));
    root.querySelectorAll('[data-communication-channel]').forEach((button) => button.addEventListener('click', () => {
        activeCommunicationChannel = button.dataset.communicationChannel;
        const firstMatchingConversation = communicationConversations.find((item) => activeCommunicationChannel === 'All' || item.channel === activeCommunicationChannel);
        if (firstMatchingConversation) {
            selectedConversationId = firstMatchingConversation.id;
        }
        communicationNotice = '';
        renderCommunicationWorkspace();
    }));
    root.querySelector('[data-communication-notice-close]')?.addEventListener('click', () => {
        communicationNotice = '';
        renderCommunicationWorkspace();
    });
    root.querySelectorAll('[data-communication-toast]').forEach((button) => button.addEventListener('click', () => showSparkToast(button.dataset.communicationToast)));
    root.querySelectorAll('[data-conversation-select]').forEach((button) => button.addEventListener('click', () => {
        selectedConversationId = Number(button.dataset.conversationSelect);
        communicationConversations = communicationConversations.map((item) => item.id === selectedConversationId ? { ...item, unread: 0 } : item);
        renderCommunicationWorkspace();
    }));
    root.querySelector('[data-send-conversation-reply]')?.addEventListener('click', () => {
        const field = root.querySelector('[data-conversation-reply]');
        const value = field?.value.trim();
        if (!value) return;
        communicationConversations = communicationConversations.map((item) => item.id === selectedConversationId ? { ...item, preview: value, time: 'Just now', status: 'Open', messages: [...item.messages, ['vlace', value, 'Just now']] } : item);
        renderCommunicationWorkspace();
        showSparkToast('Reply sent in prototype mode.');
    });
    root.querySelector('[data-resolve-conversation]')?.addEventListener('click', () => {
        communicationConversations = communicationConversations.map((item) => item.id === selectedConversationId ? { ...item, status: item.status === 'Open' ? 'Resolved' : 'Open' } : item);
        renderCommunicationWorkspace();
    });
    root.querySelector('[data-open-channel-drawer]')?.addEventListener('click', openCommunicationChannelDrawer);
    root.querySelector('[data-assign-conversation]')?.addEventListener('click', () => openCommunicationAssignmentModal('conversation'));
    root.querySelector('[data-assign-email]')?.addEventListener('click', () => openCommunicationAssignmentModal('email'));
    root.querySelectorAll('[data-email-folder]').forEach((button) => button.addEventListener('click', () => {
        communicationEmailFolder = button.dataset.emailFolder;
        renderCommunicationWorkspace();
    }));
    root.querySelectorAll('[data-email-select]').forEach((button) => button.addEventListener('click', () => {
        selectedEmailId = Number(button.dataset.emailSelect);
        communicationEmails = communicationEmails.map((email) => email.id === selectedEmailId ? { ...email, unread: false } : email);
        renderCommunicationWorkspace();
    }));
    root.querySelector('[data-toggle-email-star]')?.addEventListener('click', () => {
        communicationEmails = communicationEmails.map((email) => email.id === selectedEmailId ? { ...email, starred: !email.starred } : email);
        renderCommunicationWorkspace();
    });
    root.querySelector('[data-toggle-email-read]')?.addEventListener('click', () => {
        communicationEmails = communicationEmails.map((email) => email.id === selectedEmailId ? { ...email, unread: !email.unread } : email);
        renderCommunicationWorkspace();
    });
    root.querySelector('[data-toggle-email-archive]')?.addEventListener('click', () => {
        communicationEmails = communicationEmails.map((email) => email.id === selectedEmailId ? { ...email, archived: !email.archived } : email);
        renderCommunicationWorkspace();
    });
    root.querySelector('[data-send-email-reply]')?.addEventListener('click', () => {
        const value = root.querySelector('[data-email-reply]')?.value.trim();
        if (!value) return;
        showSparkToast('Email reply prepared for sending.');
    });
}

function openCommunicationAssignmentModal(kind) {
    const selected = kind === 'email'
        ? communicationEmails.find((email) => email.id === selectedEmailId)
        : communicationConversations.find((item) => item.id === selectedConversationId);
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop';
    overlay.innerHTML = `<div class="modal assignment-modal" role="dialog" aria-modal="true"><div class="modal-head"><div><p>${kind === 'email' ? 'EMAIL' : 'CONVERSATION'} OWNERSHIP</p><h3>Assign ${kind === 'email' ? 'Email' : 'Conversation'}</h3></div><button type="button" data-communication-close aria-label="Close">×</button></div><p class="assignment-intro">Choose the role first, then select the specific team member responsible for this ${kind}.</p><label>Assign to Role<select data-assign-role><option>Admin</option><option>Manager</option><option>Staff</option></select></label><label>Assign to Team Member<select data-assign-person><option>Van Acepcion</option><option>Angela Reyes</option><option>Carlo Mendoza</option><option>Nina Flores</option></select></label><div class="assignment-preview"><span>Current assignment</span><strong>${escapeHtml(selected?.assignedTo || 'Van Acepcion')}</strong><small>${escapeHtml(selected?.assignedRole || 'Admin')}</small></div><div class="modal-actions"><button class="secondary-button" type="button" data-communication-close>Cancel</button><button class="primary-button" type="button" data-communication-assign>Assign</button></div></div>`;
    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.querySelectorAll('[data-communication-close]').forEach((button) => button.addEventListener('click', close));
    overlay.querySelector('[data-communication-assign]')?.addEventListener('click', () => {
        const role = overlay.querySelector('[data-assign-role]')?.value || 'Admin';
        const person = overlay.querySelector('[data-assign-person]')?.value || 'Van Acepcion';
        if (kind === 'email') communicationEmails = communicationEmails.map((email) => email.id === selectedEmailId ? { ...email, assignedRole: role, assignedTo: person } : email);
        else communicationConversations = communicationConversations.map((item) => item.id === selectedConversationId ? { ...item, assignedRole: role, assignedTo: person } : item);
        communicationNotice = `${kind === 'email' ? 'Email' : 'Conversation'} assigned to ${person}.`;
        close();
        renderCommunicationWorkspace();
    });
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
}

function openCommunicationChannelDrawer() {
    const overlay = document.createElement('div');
    overlay.className = 'profile-drawer-overlay';
    const connected = Object.values(communicationConnections).filter(Boolean).length;
    overlay.innerHTML = `<aside class="student-edit-drawer channel-management-drawer" role="dialog" aria-modal="true"><div class="student-edit-head"><div><span>COMMUNICATION · ADMIN ONLY</span><h2>Manage Channels</h2><p>Control which official accounts feed the Unified Inbox.</p></div><button type="button" data-channel-close aria-label="Close">×</button></div><div class="student-edit-body"><div class="channel-drawer-summary"><div><strong>${connected} of 3 channels connected</strong><span>New messages appear automatically in the Unified Inbox.</span></div>${communicationStatus('Healthy')}</div><nav class="channel-drawer-tabs">${[['facebook','Facebook Messenger','f'],['whatsapp','WhatsApp','w'],['website','Website Chat','⌁']].map(([key, name, icon]) => `<button type="button" data-channel-toggle="${key}"><i>${icon}</i><span>${name}</span><b class="${communicationConnections[key] ? 'connected' : 'disconnected'}">${communicationConnections[key] ? 'On' : 'Off'}</b></button>`).join('')}</nav><section class="drawer-form-section channel-account-card"><div class="channel-account-head"><span>f</span><div><h3>Facebook Messenger</h3><p>VLACE English</p></div>${communicationStatus('Connected')}</div><dl><div><dt>Connection</dt><dd>Meta Business Page · Connected</dd></div><div><dt>Activity</dt><dd>2 conversations today</dd></div><div><dt>Last synchronized</dt><dd>Just now · Philippine Time</dd></div><div><dt>Message direction</dt><dd>Receive and reply</dd></div></dl></section><section class="drawer-form-section"><div class="drawer-section-title"><span>1</span><div><h3>Routing & Notifications</h3><p>Choose how new conversations enter the team workflow.</p></div></div>${['Automatically assign new conversations','Notify assigned person','Allow replies from Unified Inbox'].map((label) => `<label class="channel-setting-row"><span><strong>${label}</strong><small>Prepared for the live communication integration.</small></span><input type="checkbox" checked></label>`).join('')}</section><div class="prototype-security-note"><strong>Official API connection required</strong><p>This drawer demonstrates channel administration. Live Facebook, WhatsApp, and website messaging requires verified provider accounts, secure tokens, webhooks, and a backend connection.</p></div></div><div class="student-edit-footer"><button class="secondary-button" type="button" data-channel-close>Cancel</button><button class="primary-button" type="button" data-channel-save>Save Channel Settings</button></div></aside>`;
    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.querySelectorAll('[data-channel-close]').forEach((button) => button.addEventListener('click', close));
    overlay.querySelectorAll('[data-channel-toggle]').forEach((button) => button.addEventListener('click', () => {
        const key = button.dataset.channelToggle;
        communicationConnections[key] = !communicationConnections[key];
        close();
        openCommunicationChannelDrawer();
    }));
    overlay.querySelector('[data-channel-save]')?.addEventListener('click', () => {
        communicationNotice = 'Channel settings saved.';
        close();
        renderCommunicationWorkspace();
    });
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
}

const marketingPages = ['Overview', 'Campaigns', 'Ad Sets', 'Ads', 'Audiences', 'Leads', 'Creative Library', 'Budget & Spending', 'Performance Reports', 'Integrations'];
const marketingSectionMap = {
    marketing: 'Overview',
    campaigns: 'Campaigns',
    adsets: 'Ad Sets',
    ads: 'Ads',
    audiences: 'Audiences',
    leads: 'Leads',
    creative: 'Creative Library',
    budget: 'Budget & Spending',
    performance: 'Performance Reports',
    integrations: 'Integrations',
};
let activeMarketingPage = 'Overview';
let marketingSearch = '';
let marketingDefaultAdAccount = 'SpeakRyt Ads Account';
let marketingAdAccounts = [
    { name: 'SpeakRyt Ads Account', id: 'act_001_mock', platform: 'Meta Ads', status: 'Connected' },
];

const marketingCampaigns = [
    { name: 'China Kids English Leads', objective: 'Lead Generation', country: 'China', audience: 'Parents of children ages 6–12', budget: '₱2,000/day', spend: '₱18,450', leads: 92, cpl: '₱200.54', enrollments: 14, revenue: '₱82,600', status: 'Active' },
    { name: 'Teen English Trial Classes', objective: 'Messages', country: 'China, Philippines', audience: 'Parents of teenagers ages 13–17', budget: '₱1,200/day', spend: '₱9,860', leads: 41, cpl: '₱240.49', enrollments: 6, revenue: '₱36,500', status: 'Active' },
    { name: 'Business English for Adults', objective: 'Website Traffic', country: 'UAE, Saudi Arabia', audience: 'Working professionals ages 24–45', budget: '₱900/day', spend: '₱6,200', leads: 22, cpl: '₱281.82', enrollments: 4, revenue: '₱26,800', status: 'Paused' },
    { name: 'IELTS Preparation Israel', objective: 'Lead Generation', country: 'Israel', audience: 'IELTS students and professionals', budget: '₱1,000/day', spend: '₱5,480', leads: 18, cpl: '₱304.44', enrollments: 3, revenue: '₱22,500', status: 'Needs Review' },
];

const marketingLeads = [
    ['Lin Wei', 'China', 'Kid · 9', 'Grace Lin (Parent)', 'WeChat', 'China Kids English Leads', 'Angela Reyes', 'New', 'Today, 9:12 AM'],
    ['Yuna Park', 'South Korea', 'Teen · 15', 'Parent', 'WhatsApp', 'Teen English Trial Classes', 'Carlo Mendoza', 'Follow-Up', 'Today, 8:44 AM'],
    ['Omar Hassan', 'Saudi Arabia', 'Adult · 31', 'Student', 'Email', 'Business English for Adults', 'Nina Flores', 'Trial Scheduled', 'Yesterday'],
    ['Noa Cohen', 'Israel', 'Adult · 24', 'Student', 'WhatsApp', 'IELTS Preparation Israel', 'Angela Reyes', 'Payment Pending', 'Jul 30'],
];

function marketingStatus(value) {
    return `<span class="status status-${String(value).toLowerCase().replaceAll(' ', '-')}">${escapeHtml(value)}</span>`;
}

function renderMarketingWorkspace() {
    const root = document.getElementById('marketingWorkspace');
    if (!root) return;
    root.innerHTML = `
        <section class="marketing-hero">
            <div>
                <p class="eyebrow">META ADVERTISING · MOCK DATA</p>
                <h2>${escapeHtml(activeMarketingPage)}</h2>
                <p>Manage Facebook and Instagram advertising, leads, audiences, creative assets, budgets, and campaign performance.</p>
            </div>
            <div class="marketing-actions">
                <button class="primary-button" type="button" data-marketing-modal="campaign">+ Create Campaign</button>
                <button class="secondary-button" type="button" data-marketing-modal="import">Import Leads</button>
                <button class="secondary-button" type="button" data-marketing-modal="report">Export Report</button>
                <button class="secondary-button" type="button" data-marketing-modal="settings">More Actions</button>
            </div>
        </section>
        <nav class="marketing-tabs" aria-label="Marketing pages">
            ${marketingPages.map((page) => `<button type="button" class="${activeMarketingPage === page ? 'active' : ''}" data-marketing-page="${page}">${page}${page === 'Campaigns' ? '<b>2</b>' : page === 'Leads' ? '<b>8</b>' : page === 'Integrations' ? '<b>1</b>' : ''}</button>`).join('')}
        </nav>
        ${renderMarketingPage()}
    `;
    bindMarketingEvents(root);
}

function renderMarketingPage() {
    if (activeMarketingPage === 'Overview') return renderMarketingOverview();
    if (activeMarketingPage === 'Campaigns') return renderMarketingCampaigns();
    if (activeMarketingPage === 'Ad Sets') return renderMarketingDataPage('Ad Sets', 'One campaign can divide audiences, countries, placements, and budget across multiple ad sets.', ['Ad Set', 'Campaign', 'Audience', 'Countries', 'Age', 'Placement', 'Daily Budget', 'Spend', 'Leads', 'CPL', 'Status', 'Actions'], [
        ['Parents Ages 25–34', 'China Kids English Leads', 'Young parents', 'China', '25–34', 'Feeds + Stories', '₱700', '₱6,240', '31', '₱201.29', 'Active', 'View · Edit'],
        ['Parents Ages 35–44', 'China Kids English Leads', 'Established parents', 'China', '35–44', 'Facebook Feed', '₱650', '₱5,890', '28', '₱210.36', 'Active', 'View · Edit'],
        ['Shanghai and Beijing', 'China Kids English Leads', 'Metro parents', 'China', '25–44', 'Instagram + Facebook', '₱650', '₱6,320', '33', '₱191.52', 'Active', 'View · Edit'],
    ]);
    if (activeMarketingPage === 'Ads') return renderMarketingAds();
    if (activeMarketingPage === 'Audiences') return renderMarketingDataPage('Audiences', 'Saved, custom, lookalike, and excluded audiences using mock estimates.', ['Audience', 'Type', 'Countries', 'Age', 'Languages', 'Interests', 'Estimated Size', 'Used By', 'Status', 'Actions'], [
        ['China Parents — Kids English', 'Saved Audience', 'China', '25–44', 'Mandarin', 'Parenting, English learning', '1.2M–1.8M', '2 campaigns', 'Active', 'View · Edit'],
        ['Teen English Parents', 'Saved Audience', 'China', '30–50', 'Mandarin', 'Study abroad, education', '860K–1.1M', '1 campaign', 'Active', 'View · Edit'],
        ['Website Visitors — 180 Days', 'Custom Audience', 'Multiple', 'All', 'Multiple', 'Website visitors', 'Mock only', '0 campaigns', 'Prototype Only', 'View'],
        ['Leads Who Did Not Enroll', 'Custom Audience', 'Multiple', 'All', 'Multiple', 'Past leads', 'Mock only', '1 campaign', 'Prototype Only', 'View'],
        ['Lookalike — Enrolled Students', 'Lookalike', 'Future', 'All', 'Multiple', 'Enrollment source', 'Future', '0 campaigns', 'Planned', 'View'],
    ]);
    if (activeMarketingPage === 'Leads') return renderMarketingLeads();
    if (activeMarketingPage === 'Creative Library') return renderMarketingCreative();
    if (activeMarketingPage === 'Budget & Spending') return renderMarketingBudget();
    if (activeMarketingPage === 'Performance Reports') return renderMarketingReports();
    if (activeMarketingPage === 'Integrations') return renderMarketingIntegrations();
    return '';
}

function renderMarketingOverview() {
    return `
        <div class="marketing-kpis">
            ${[
                ['Active Campaigns', '6', 'Up 12% from last month'],
                ['Ad Spend This Month', '₱42,850.00', 'Down 8% from last month'],
                ['Leads This Month', '186', 'Target achieved'],
                ['Cost per Lead', '₱230.38', 'Down 8% from last month'],
                ['New Enrollments from Ads', '28', 'Up 12% from last month'],
                ['Estimated Revenue from Ads', '₱168,400.00', 'Estimated'],
                ['Return on Ad Spend', '3.9x', 'Estimated'],
                ['Campaigns Needing Attention', '2', 'Needs review'],
            ].map((item, index) => `<article class="${index === 7 ? 'warn' : ''}"><span>${item[0]}</span><strong>${item[1]}</strong><small>${item[2]}</small>${sparklineSvg([7 + index, 9, 8 + index, 12, 11 + index, 14], index === 7 ? '#d28a25' : index === 3 ? '#22a06b' : '#7357c8')}</article>`).join('')}
        </div>
        <section class="panel meta-summary">
            <div class="marketing-panel-head"><div><h3>Advertising Integrations</h3><p>Frontend simulation of the future Meta connection.</p></div>${marketingStatus('Prototype Connection')}</div>
            <div class="meta-connection">
                <div class="meta-card"><span class="meta-logo">M</span><div><h3>Meta Ads</h3><p>Facebook + Instagram · VLACE Education</p><small>SpeakRyt Ads Account · Test Data · Last sync Today, 9:30 AM</small></div><div><button type="button" data-marketing-page-jump="Campaigns">View Campaigns</button><button type="button" data-marketing-toast="Mock connection test successful.">Test Connection</button></div></div>
                <div class="connection-tree"><strong>Meta Business Portfolio</strong>${[['Facebook Page', 'Connected'], ['Instagram Account', 'Connected'], ['Ad Account', 'Connected'], ['Meta Pixel', 'Not Configured']].map((item) => `<div>├── <span>${item[0]}</span>${marketingStatus(item[1])}</div>`).join('')}</div>
            </div>
        </section>
        <section class="marketing-overview-grid">
            <article class="panel"><div class="marketing-panel-head"><div><h3>Campaign Performance</h3><p>Spend, leads, and estimated enrollment revenue.</p></div><button type="button" data-marketing-page-jump="Campaigns">View All</button></div>${renderCampaignTable(marketingCampaigns.slice(0, 3))}</article>
            <article class="panel marketing-alerts"><h3>Campaign Alerts</h3>${[['Critical', 'IELTS Preparation Israel', 'Cost per lead is above target.'], ['Warning', 'Teen English Trial Classes', 'Campaign ends in 3 days.'], ['Information', 'China Kids English Leads', '88% of monthly budget used.']].map((item) => `<button type="button" data-marketing-alert="${escapeHtml(item[1])}">${marketingStatus(item[0])}<span><b>${item[1]}</b><small>${item[2]}</small></span>›</button>`).join('')}</article>
        </section>
    `;
}

function renderMarketingCampaigns() {
    const rows = marketingCampaigns.filter((campaign) => campaign.name.toLowerCase().includes(marketingSearch.toLowerCase()));
    return `<section class="panel marketing-panel"><div class="marketing-panel-head"><div><h3>Campaigns</h3><p>Mock campaign management. Nothing is published to Meta.</p></div><button class="primary-button" type="button" data-marketing-modal="campaign">+ Create Campaign</button></div>${renderMarketingFilters()}${renderCampaignTable(rows)}</section>`;
}

function renderMarketingFilters() {
    return `<div class="marketing-filters"><input value="${escapeHtml(marketingSearch)}" data-marketing-search placeholder="Search campaigns..."><select data-marketing-filter-select><option>All statuses</option><option>Active</option><option>Draft</option><option>Paused</option><option>Needs Review</option></select><select data-marketing-filter-select><option>All objectives</option><option>Lead Generation</option><option>Messages</option><option>Website Traffic</option></select><select data-marketing-filter-select><option>All countries</option><option>China</option><option>Japan</option><option>South Korea</option><option>Israel</option><option>UAE</option></select><select data-marketing-filter-select><option>Facebook and Instagram</option><option>Facebook</option><option>Instagram</option></select></div>`;
}

function renderCampaignTable(rows) {
    return `<div class="table-wrap"><table class="marketing-table"><thead><tr><th>Campaign</th><th>Objective</th><th>Country</th><th>Budget</th><th>Spend</th><th>Leads</th><th>CPL</th><th>Enrollments</th><th>Estimated Revenue</th><th>Status</th><th>Actions</th></tr></thead><tbody>${rows.map((campaign) => `<tr><td><strong>${escapeHtml(campaign.name)}</strong><small>${escapeHtml(campaign.audience)}</small></td><td>${escapeHtml(campaign.objective)}</td><td>${escapeHtml(campaign.country)}</td><td>${escapeHtml(campaign.budget)}</td><td>${escapeHtml(campaign.spend)}</td><td>${campaign.leads}</td><td>${escapeHtml(campaign.cpl)}</td><td>${campaign.enrollments}</td><td><strong>${escapeHtml(campaign.revenue)}</strong><small>Estimated</small></td><td>${marketingStatus(campaign.status)}</td><td><div class="table-action-group"><button class="table-link" type="button" data-marketing-detail="${escapeHtml(campaign.name)}">View</button><button class="table-link" type="button" data-marketing-modal="campaign">Edit</button></div></td></tr>`).join('')}</tbody></table></div>`;
}

function renderMarketingDataPage(title, subtitle, columns, rows) {
    return `<section class="panel marketing-panel"><div class="marketing-panel-head"><div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(subtitle)}</p></div><button type="button" data-marketing-modal="filter">Filter</button></div><div class="table-wrap"><table class="marketing-table"><thead><tr>${columns.map((column) => `<th>${escapeHtml(column)}</th>`).join('')}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell, index) => `<td>${index === row.length - 1 && columns[index] === 'Actions' ? renderMarketingActionButtons(row[0], cell) : index === row.length - 2 ? marketingStatus(cell) : escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section>`;
}

function renderMarketingActionButtons(subject, actions) {
    return `<div class="table-action-group">${String(actions).split('·').map((action) => {
        const label = action.trim();
        if (!label) return '';
        const kind = label.toLowerCase();
        return `<button class="table-link" type="button" data-marketing-row-action="${escapeHtml(kind)}" data-marketing-row-subject="${escapeHtml(subject)}">${escapeHtml(label)}</button>`;
    }).join('')}</div>`;
}

function renderMarketingAds() {
    return `<section class="marketing-card-grid">${[
        ['Kids English Trial Class', 'Image', 'Book a Trial English Class', 'Facebook + Instagram', '₱7,840', '44', 'Active'],
        ['Improve Your Child’s Speaking', 'Video', 'Build English Confidence', 'Facebook', '₱6,210', '31', 'Active'],
        ['Teen English Confidence', 'Carousel', 'Speak With Confidence', 'Instagram', '₱4,950', '22', 'Paused'],
        ['Business English Career Growth', 'Reel', 'Grow Your Career', 'Instagram', '₱3,480', '14', 'Active'],
    ].map((ad, index) => `<article class="panel ad-card"><div class="ad-thumb ad-${index}">VLACE<small>${ad[1]} Creative · Mock</small></div>${marketingStatus(ad[6])}<h3>${ad[0]}</h3><p>${ad[2]}</p><dl><div><dt>Platform</dt><dd>${ad[3]}</dd></div><div><dt>Spend</dt><dd>${ad[4]}</dd></div><div><dt>Leads</dt><dd>${ad[5]}</dd></div></dl><div><button type="button" data-marketing-modal="preview">Preview</button><button type="button" data-marketing-toast="Ad duplicated in mock state.">Duplicate</button></div></article>`).join('')}</section>`;
}

function renderMarketingLeads() {
    return `<div class="lead-kpis">${[['New Leads Today', '14'], ['Uncontacted Leads', '22'], ['Follow-Up Required', '18'], ['Trial Classes Booked', '9'], ['Converted to Student', '6'], ['Lost Leads', '4']].map((item) => `<article><span>${item[0]}</span><strong>${item[1]}</strong></article>`).join('')}</div>${renderMarketingDataPage('Marketing Leads', 'People who contacted VLACE or submitted a mock Facebook lead form.', ['Lead', 'Country', 'Age Group', 'Parent/Student', 'Contact', 'Campaign', 'Assigned To', 'Status', 'Received', 'Actions'], marketingLeads.map((lead) => [...lead, 'View · Assign']))}`;
}

function renderMarketingCreative() {
    return `<section class="panel marketing-panel"><div class="marketing-panel-head"><div><h3>Creative Library</h3><p>Images, videos, carousels, and reusable ad copy.</p></div><div><button type="button" data-marketing-toast="Creative upload simulated.">+ Upload Creative</button><button type="button" data-marketing-modal="copy">+ Create Ad Copy</button></div></div><div class="creative-tabs">${['All Creatives', 'Images', 'Videos', 'Carousels', 'Copy'].map((item, index) => `<button type="button" class="${index === 0 ? 'active' : ''}" data-marketing-creative-filter="${item}">${item}</button>`).join('')}</div><div class="creative-grid">${[['Kids Trial — China', 'Image', 'Kids · China', 'High Performer'], ['Teen Confidence', 'Video', 'Teenagers', 'Average'], ['Business Career', 'Reel', 'Adults · UAE', 'Needs Review'], ['IELTS Israel', 'Carousel', 'IELTS · Israel', 'Not Yet Used']].map((creative, index) => `<article><div class="creative-cover creative-${index}">VLACE<small>Mock Creative</small></div>${marketingStatus(creative[3])}<h4>${creative[0]}</h4><p>${creative[1]} · ${creative[2]}</p><button type="button" data-marketing-modal="preview">Preview</button></article>`).join('')}</div></section>`;
}

function renderMarketingBudget() {
    return `<div class="budget-kpis">${[['Monthly Marketing Budget', '₱60,000.00'], ['Spent This Month', '₱42,850.00'], ['Remaining Budget', '₱17,150.00'], ['Average Daily Spend', '₱1,382.26'], ['Projected Month-End', '₱58,400.00']].map((item) => `<article><span>${item[0]}</span><strong>${item[1]}</strong></article>`).join('')}</div><section class="panel marketing-panel"><div class="marketing-panel-head"><div><h3>Budget Allocation</h3><p>China Kids English Leads has used 88% of its monthly budget.</p></div><button type="button" data-marketing-modal="budget">Adjust Budget</button></div><div class="budget-list">${marketingCampaigns.map((campaign, index) => { const pct = [88, 67, 52, 61][index]; return `<div><span>${campaign.country}<b>${campaign.name}</b></span><div><i style="width:${pct}%"></i></div><strong>${pct}%</strong><small>${campaign.spend} spent · ${campaign.cpl} CPL</small></div>`; }).join('')}</div></section>`;
}

function renderMarketingReports() {
    return `<section class="panel marketing-panel"><div class="marketing-panel-head"><div><h3>Performance Reports</h3><p>Compare Ad Platform Data with VLACE Enrollment Data.</p></div><button type="button" data-marketing-toast="Mock performance report exported.">Export Report</button></div>${renderMarketingFilters()}<div class="report-source-labels"><span>Ad Platform Data</span><b>+</b><span>VLACE Enrollment Data</span></div><div class="marketing-report-kpis">${[['Spend', '₱42,850'], ['Impressions', '481,200'], ['CTR', '2.8%'], ['Leads', '186'], ['Trial Bookings', '39'], ['Enrollments', '28'], ['Estimated Revenue', '₱168,400'], ['Estimated ROAS', '3.9x']].map((item) => `<article><span>${item[0]}</span><strong>${item[1]}</strong></article>`).join('')}</div><div class="marketing-chart">${[44, 68, 57, 82, 74, 91, 86].map((height, index) => `<div style="height:${height}%"><span>${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span></div>`).join('')}</div><h3 class="attribution-title">Enrollment Attribution</h3>${renderMarketingDataPage('', 'Campaign-to-student attribution is simulated.', ['Student', 'Country', 'Campaign', 'Ad Set', 'Ad', 'Trial', 'Package', 'Payment', 'Attribution'], [['Lin Wei', 'China', 'China Kids English Leads', 'Parents 25–34', 'Kids Trial Image', 'Aug 2', '30 Lessons', '₱24,900', 'Fully Matched'], ['Noa Cohen', 'Israel', 'IELTS Preparation Israel', 'IELTS Adults', 'IELTS Carousel', 'Aug 3', '15 Lessons', '₱21,300', 'Partially Matched']])}</section>`;
}

function renderMarketingIntegrations() {
    return `<section class="integration-grid">${[['Meta Ads', 'Connected', 'Campaigns and performance'], ['Facebook Page', 'Connected', 'VLACE English Learning'], ['Instagram Account', 'Connected', 'Feed, Story, and Reel previews'], ['Facebook Lead Forms', 'Needs Attention', 'Future leads → Marketing Leads'], ['Meta Pixel', 'Not Connected', 'Future website conversion tracking'], ['WhatsApp Business', 'Prototype Only', 'Lead contact workflow'], ['VLACE Student Management', 'Prototype Only', 'Converted lead → Student Profile'], ['VLACE Finance', 'Prototype Only', 'Payment → Campaign Attribution']].map((item) => `<article class="panel"><div><span class="integration-icon">${item[0][0]}</span>${marketingStatus(item[1])}</div><h3>${item[0]}</h3><p>${item[2]}</p><small>Prototype Only</small><div><button type="button" data-marketing-integration-config="${escapeHtml(item[0])}">Configure</button><button type="button" data-marketing-integration-test="${escapeHtml(item[0])}">Test</button></div></article>`).join('')}</section>`;
}

function bindMarketingEvents(root) {
    root.querySelectorAll('[data-marketing-page]').forEach((button) => button.addEventListener('click', () => {
        activeMarketingPage = button.dataset.marketingPage;
        renderMarketingWorkspace();
    }));
    root.querySelectorAll('[data-marketing-page-jump]').forEach((button) => button.addEventListener('click', () => {
        activeMarketingPage = button.dataset.marketingPageJump;
        renderMarketingWorkspace();
    }));
    root.querySelector('[data-marketing-search]')?.addEventListener('input', (event) => {
        marketingSearch = event.target.value;
        renderMarketingWorkspace();
    });
    root.querySelectorAll('[data-marketing-filter-select]').forEach((field) => field.addEventListener('change', () => showSparkToast(`Filter set to ${field.value}.`)));
    root.querySelectorAll('[data-marketing-toast]').forEach((button) => button.addEventListener('click', () => showSparkToast(button.dataset.marketingToast)));
    root.querySelectorAll('[data-marketing-modal]').forEach((button) => button.addEventListener('click', () => openMarketingModal(button.dataset.marketingModal)));
    root.querySelectorAll('[data-marketing-alert]').forEach((button) => button.addEventListener('click', () => openMarketingInfoModal('Campaign Alert', button.dataset.marketingAlert, 'Review the campaign, adjust budget or audience, then record a follow-up note before publishing changes.')));
    root.querySelectorAll('[data-marketing-detail]').forEach((button) => button.addEventListener('click', () => openMarketingInfoModal('Campaign Details', button.dataset.marketingDetail, 'This mock detail view shows campaign performance, audience notes, budget status, and next recommended action.')));
    root.querySelectorAll('[data-marketing-row-action]').forEach((button) => button.addEventListener('click', () => openMarketingInfoModal(`${button.textContent.trim()} ${activeMarketingPage}`, button.dataset.marketingRowSubject, 'This action is prepared for the live marketing workflow and is functional in prototype mode.')));
    root.querySelectorAll('[data-marketing-creative-filter]').forEach((button) => button.addEventListener('click', () => {
        root.querySelectorAll('[data-marketing-creative-filter]').forEach((item) => item.classList.remove('active'));
        button.classList.add('active');
        showSparkToast(`${button.dataset.marketingCreativeFilter} filter applied.`);
    }));
    root.querySelectorAll('[data-marketing-integration-config]').forEach((button) => button.addEventListener('click', () => openMarketingModal('integration', button.dataset.marketingIntegrationConfig)));
    root.querySelectorAll('[data-marketing-integration-test]').forEach((button) => button.addEventListener('click', () => openMarketingInfoModal('Connection Test', button.dataset.marketingIntegrationTest, 'Mock test completed successfully. Live tests will verify tokens, permissions, webhooks, and account access.')));
}

function openMarketingModal(kind, context = '') {
    if (kind === 'preview') return openMarketingPreview();
    const titles = { campaign: 'Create Campaign', settings: 'Marketing Settings', budget: 'Adjust Campaign Budget', import: 'Import Leads', report: 'Export Report', filter: 'Filter Marketing Data', copy: 'Create Ad Copy', integration: `Configure ${context}` };
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop';
    overlay.innerHTML = `<div class="modal marketing-modal" role="dialog" aria-modal="true"><div class="modal-head"><div><p>ADMIN · PROTOTYPE ONLY</p><h3>${titles[kind] || 'Marketing'}</h3></div><button type="button" data-marketing-close aria-label="Close">×</button></div>${renderMarketingModalBody(kind, context)}<div class="modal-actions"><button class="secondary-button" type="button" data-marketing-close>Cancel</button><button class="primary-button" type="button" data-marketing-save>${kind === 'report' ? 'Export Report' : kind === 'import' ? 'Import Leads' : 'Save Changes'}</button></div></div>`;
    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.querySelectorAll('[data-marketing-close]').forEach((button) => button.addEventListener('click', close));
    if (kind === 'settings') bindMarketingAdAccountControls(overlay);
    overlay.querySelector('[data-marketing-save]')?.addEventListener('click', () => {
        if (kind === 'settings') {
            marketingDefaultAdAccount = overlay.querySelector('[data-default-ad-account]')?.value || marketingDefaultAdAccount;
        }
        close();
        showSparkToast(kind === 'campaign' ? 'Campaign submitted for approval in mock state.' : 'Marketing change saved in temporary mock state.');
    });
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
}

function renderMarketingModalBody(kind, context = '') {
    if (kind === 'campaign') return renderMarketingCampaignForm();
    if (kind === 'budget') return renderMarketingBudgetForm();
    if (kind === 'import') return renderMarketingImportForm();
    if (kind === 'report') return renderMarketingReportForm();
    if (kind === 'filter') return renderMarketingFilterForm();
    if (kind === 'copy') return renderMarketingCopyForm();
    if (kind === 'integration') return renderMarketingIntegrationForm(context);
    return renderMarketingSettingsForm();
}

function renderMarketingCampaignForm() {
    return `<div class="wizard-steps">${[1, 2, 3, 4, 5, 6].map((step) => `<span class="${step === 1 ? 'active' : ''}">${step}</span>`).join('')}</div><div class="marketing-form"><label>Campaign Name<input placeholder="Campaign name"></label><label>Objective<select><option>Lead Generation</option><option>Messages</option><option>Website Traffic</option><option>Conversions</option><option>Brand Awareness</option></select></label><label>Platforms<select><option>Facebook and Instagram</option><option>Facebook</option><option>Instagram</option></select></label><label>Countries<select><option>China</option><option>Japan</option><option>South Korea</option><option>Israel</option><option>UAE</option><option>Saudi Arabia</option></select></label><label>Start Date<input type="date"></label><label>End Date<input type="date"></label><label class="full">Primary Text<textarea>Help your child speak English with confidence through personalized online lessons.</textarea></label></div><div class="estimate-box"><b>Estimated Daily Reach</b><strong>8,000–12,000 people</strong><span>8–15 leads/day · ₱180–₱280 CPL</span><small>Estimates only</small></div>`;
}

function renderMarketingBudgetForm() {
    return `<label>Campaign<select><option>China Kids English Leads</option><option>IELTS Preparation Israel</option></select></label><label>New Daily Budget<input value="2000"></label><div class="marketing-warning">Budget increases require approval before they can become active.</div>`;
}

function renderMarketingSettingsForm() {
    return `<div class="marketing-form"><label>Default Ad Account<select data-default-ad-account>${marketingAdAccounts.map((account) => `<option value="${escapeHtml(account.name)}" ${marketingDefaultAdAccount === account.name ? 'selected' : ''}>${escapeHtml(account.name)}</option>`).join('')}</select></label><label>Default Time Zone<select><option>Asia/Manila</option></select></label><label>Default Currency<select><option>PHP</option><option>USD</option></select></label><label>Lead Response Target<select><option>Within 15 minutes</option><option>Within 1 hour</option></select></label></div>${renderMarketingAdAccountManager()}<div class="settings-list marketing-settings-options">${['Require approval before publishing', 'Require approval before budget increases', 'Notify staff of new leads', 'Keep original campaign source'].map((label) => `<label><input type="checkbox" checked><span><strong>${label}</strong><small>Prepared for the live marketing workflow.</small></span></label>`).join('')}</div>`;
}

function renderMarketingAdAccountManager() {
    return `<section class="ad-account-manager"><div class="ad-account-manager-head"><div><strong>Default ad account management</strong><small>Add, edit, remove, and choose which ad account is used by default.</small></div><button type="button" data-ad-account-add>+ Add Account</button></div><div class="ad-account-editor"><label>Account name<input data-ad-account-name placeholder="Example: VLACE Meta Ads Account"></label><label>Account ID<input data-ad-account-id placeholder="act_000000000"></label><label>Platform<select data-ad-account-platform><option>Meta Ads</option><option>Facebook Page</option><option>Instagram Account</option><option>Google Ads · Future</option></select></label><label>Status<select data-ad-account-status><option>Connected</option><option>Needs Attention</option><option>Not Connected</option><option>Prototype Only</option></select></label></div><div class="ad-account-list" data-ad-account-list>${renderMarketingAdAccountList()}</div></section>`;
}

function renderMarketingAdAccountList() {
    return marketingAdAccounts.map((account) => `<article class="${marketingDefaultAdAccount === account.name ? 'selected' : ''}" data-ad-account-row="${escapeHtml(account.name)}"><div><strong>${escapeHtml(account.name)}</strong><small>${escapeHtml(account.id)} · ${escapeHtml(account.platform)}</small></div>${marketingStatus(account.status)}<div><button type="button" data-ad-account-use="${escapeHtml(account.name)}">Set Default</button><button type="button" data-ad-account-edit="${escapeHtml(account.name)}">Edit</button><button type="button" data-ad-account-remove="${escapeHtml(account.name)}" ${marketingAdAccounts.length === 1 ? 'disabled' : ''}>Remove</button></div></article>`).join('');
}

function refreshMarketingAdAccountControls(overlay) {
    const select = overlay.querySelector('[data-default-ad-account]');
    if (select) {
        select.innerHTML = marketingAdAccounts.map((account) => `<option value="${escapeHtml(account.name)}" ${marketingDefaultAdAccount === account.name ? 'selected' : ''}>${escapeHtml(account.name)}</option>`).join('');
    }
    const list = overlay.querySelector('[data-ad-account-list]');
    if (list) list.innerHTML = renderMarketingAdAccountList();
    bindMarketingAdAccountListControls(overlay);
}

function clearMarketingAdAccountEditor(overlay) {
    overlay.querySelector('[data-ad-account-name]').value = '';
    overlay.querySelector('[data-ad-account-id]').value = '';
    overlay.querySelector('[data-ad-account-platform]').value = 'Meta Ads';
    overlay.querySelector('[data-ad-account-status]').value = 'Connected';
    delete overlay.querySelector('[data-ad-account-name]').dataset.editingAccount;
}

function upsertMarketingAdAccount(overlay) {
    const nameField = overlay.querySelector('[data-ad-account-name]');
    const idField = overlay.querySelector('[data-ad-account-id]');
    const name = nameField?.value.trim();
    const id = idField?.value.trim();
    if (!name || !id) {
        showSparkToast('Enter an ad account name and account ID.');
        return;
    }
    const editingName = nameField.dataset.editingAccount;
    const nextAccount = {
        name,
        id,
        platform: overlay.querySelector('[data-ad-account-platform]')?.value || 'Meta Ads',
        status: overlay.querySelector('[data-ad-account-status]')?.value || 'Connected',
    };
    marketingAdAccounts = editingName
        ? marketingAdAccounts.map((account) => account.name === editingName ? nextAccount : account)
        : [...marketingAdAccounts, nextAccount];
    if (!marketingDefaultAdAccount || marketingDefaultAdAccount === editingName) marketingDefaultAdAccount = name;
    clearMarketingAdAccountEditor(overlay);
    refreshMarketingAdAccountControls(overlay);
    showSparkToast(editingName ? 'Default ad account updated.' : 'Default ad account added.');
}

function bindMarketingAdAccountListControls(overlay) {
    overlay.querySelectorAll('[data-ad-account-use]').forEach((button) => button.addEventListener('click', () => {
        marketingDefaultAdAccount = button.dataset.adAccountUse;
        refreshMarketingAdAccountControls(overlay);
        showSparkToast(`${marketingDefaultAdAccount} is now the default ad account.`);
    }));
    overlay.querySelectorAll('[data-ad-account-edit]').forEach((button) => button.addEventListener('click', () => {
        const account = marketingAdAccounts.find((item) => item.name === button.dataset.adAccountEdit);
        if (!account) return;
        overlay.querySelector('[data-ad-account-name]').value = account.name;
        overlay.querySelector('[data-ad-account-name]').dataset.editingAccount = account.name;
        overlay.querySelector('[data-ad-account-id]').value = account.id;
        overlay.querySelector('[data-ad-account-platform]').value = account.platform;
        overlay.querySelector('[data-ad-account-status]').value = account.status;
    }));
    overlay.querySelectorAll('[data-ad-account-remove]').forEach((button) => button.addEventListener('click', () => {
        if (marketingAdAccounts.length <= 1) {
            showSparkToast('At least one default ad account is required.');
            return;
        }
        const name = button.dataset.adAccountRemove;
        marketingAdAccounts = marketingAdAccounts.filter((account) => account.name !== name);
        if (marketingDefaultAdAccount === name) marketingDefaultAdAccount = marketingAdAccounts[0]?.name || '';
        clearMarketingAdAccountEditor(overlay);
        refreshMarketingAdAccountControls(overlay);
        showSparkToast(`${name} removed from default ad accounts.`);
    }));
}

function bindMarketingAdAccountControls(overlay) {
    overlay.querySelector('[data-ad-account-add]')?.addEventListener('click', () => upsertMarketingAdAccount(overlay));
    bindMarketingAdAccountListControls(overlay);
}

function renderMarketingImportForm() {
    return `<div class="marketing-form"><label>Lead source<select><option>Facebook Lead Forms</option><option>CSV Upload</option><option>WhatsApp Business</option><option>Manual Entry</option></select></label><label>Assign new leads to<select><option>Angela Reyes</option><option>Carlo Mendoza</option><option>Nina Flores</option><option>Van Acepcion</option></select></label><label>Default status<select><option>New</option><option>Follow-Up</option><option>Trial Scheduled</option></select></label><label>Duplicate rule<select><option>Match by phone or email</option><option>Match by name only</option></select></label><label class="full">Import notes<textarea placeholder="Notes for this import batch"></textarea></label></div><div class="estimate-box"><b>Ready to import</b><strong>8 mock leads</strong><span>No live Meta account will be changed in prototype mode.</span></div>`;
}

function renderMarketingReportForm() {
    return `<div class="marketing-form"><label>Report type<select><option>Campaign Performance</option><option>Lead Attribution</option><option>Budget & Spending</option><option>Creative Performance</option></select></label><label>Date range<select><option>This Month</option><option>Last 7 Days</option><option>Last Month</option><option>Custom Range</option></select></label><label>Format<select><option>PDF Summary</option><option>CSV Export</option><option>Excel Workbook</option></select></label><label>Include<select><option>Spend, leads, enrollments, revenue</option><option>Summary only</option><option>Full details</option></select></label></div><div class="estimate-box"><b>Export preview</b><strong>Campaign Performance · This Month</strong><span>The report is generated as mock dashboard data.</span></div>`;
}

function renderMarketingFilterForm() {
    return `<div class="marketing-form"><label>Status<select><option>All statuses</option><option>Active</option><option>Draft</option><option>Paused</option><option>Needs Review</option></select></label><label>Objective<select><option>All objectives</option><option>Lead Generation</option><option>Messages</option><option>Website Traffic</option></select></label><label>Country<select><option>All countries</option><option>China</option><option>Japan</option><option>South Korea</option><option>Israel</option><option>UAE</option></select></label><label>Platform<select><option>Facebook and Instagram</option><option>Facebook</option><option>Instagram</option></select></label></div>`;
}

function renderMarketingCopyForm() {
    return `<div class="marketing-form"><label>Copy name<input placeholder="Kids Trial Lead Ad Copy"></label><label>Tone<select><option>Friendly and parent-focused</option><option>Professional</option><option>Urgent promo</option></select></label><label class="full">Primary text<textarea>Help your child speak English with confidence through personalized online lessons.</textarea></label><label>Call to action<select><option>Sign Up</option><option>Send Message</option><option>Learn More</option></select></label><label>Target audience<select><option>Parents of young learners</option><option>Teen students</option><option>Adult professionals</option></select></label></div>`;
}

function renderMarketingIntegrationForm(context = 'Integration') {
    return `<div class="marketing-form"><label>Integration<input value="${escapeHtml(context)}"></label><label>Status<select><option>Connected</option><option>Needs Attention</option><option>Not Connected</option><option>Prototype Only</option></select></label><label>Account name<input value="VLACE English Learning"></label><label>Sync frequency<select><option>Every 15 minutes</option><option>Hourly</option><option>Manual only</option></select></label><label class="full">Admin notes<textarea>${escapeHtml(context)} is configured in prototype mode. Live setup requires verified credentials and secure webhooks.</textarea></label></div><div class="settings-list marketing-settings-options">${['Receive data from provider', 'Allow dashboard actions', 'Notify admin when disconnected', 'Log every sync event'].map((label) => `<label><input type="checkbox" checked><span><strong>${label}</strong><small>Prepared for live integration controls.</small></span></label>`).join('')}</div>`;
}

function openMarketingInfoModal(title, subject, detail) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop';
    overlay.innerHTML = `<div class="modal marketing-modal" role="dialog" aria-modal="true"><div class="modal-head"><div><p>MARKETING · PROTOTYPE ONLY</p><h3>${escapeHtml(title)}</h3></div><button type="button" data-marketing-close aria-label="Close">×</button></div><div class="marketing-info-modal"><strong>${escapeHtml(subject)}</strong><p>${escapeHtml(detail)}</p><div class="estimate-box"><b>Available actions</b><span>Review details, assign a staff owner, save a note, or continue working in the current Marketing tab.</span></div><label>Follow-up note<textarea placeholder="Add a short internal note"></textarea></label></div><div class="modal-actions"><button class="secondary-button" type="button" data-marketing-close>Close</button><button class="primary-button" type="button" data-marketing-save>Save Note</button></div></div>`;
    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.querySelectorAll('[data-marketing-close]').forEach((button) => button.addEventListener('click', close));
    overlay.querySelector('[data-marketing-save]')?.addEventListener('click', () => {
        close();
        showSparkToast('Marketing note saved in mock state.');
    });
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
}

function openMarketingPreview() {
    const overlay = document.createElement('div');
    overlay.className = 'preview-overlay';
    overlay.innerHTML = `<aside class="ad-preview-panel"><div class="modal-head"><div><p>AD PREVIEW · MOCK DATA</p><h3>Facebook Feed</h3></div><button type="button" data-marketing-close aria-label="Close">×</button></div><div class="preview-tabs">${['Facebook Feed', 'Instagram Feed', 'Story', 'Reel', 'Mobile', 'Desktop'].map((item, index) => `<button type="button" class="${index === 0 ? 'active' : ''}" data-marketing-preview-tab="${item}">${item}</button>`).join('')}</div><article class="social-ad"><header><span>V</span><div><strong>VLACE English Learning</strong><small>Sponsored · Mock Preview</small></div></header><p>Help your child speak English with confidence through personalized online lessons.</p><div class="social-creative">VLACE<small>PERSONALIZED ONLINE ENGLISH</small><b>Book a Trial English Class</b></div><footer><div><strong>Professional one-on-one lessons for children.</strong><button type="button" data-marketing-preview-cta>Sign Up</button></div><p>👍 124 reactions · 18 comments · 9 shares</p></footer></article></aside>`;
    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.querySelector('[data-marketing-close]')?.addEventListener('click', close);
    overlay.querySelectorAll('[data-marketing-preview-tab]').forEach((button) => button.addEventListener('click', () => {
        overlay.querySelectorAll('[data-marketing-preview-tab]').forEach((item) => item.classList.remove('active'));
        button.classList.add('active');
        overlay.querySelector('.modal-head h3').textContent = button.dataset.marketingPreviewTab;
    }));
    overlay.querySelector('[data-marketing-preview-cta]')?.addEventListener('click', () => showSparkToast('Preview call-to-action clicked in mock state.'));
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
}

let companyPolicySearch = '';
let companyPolicyCategory = 'All categories';
let companyPolicyStatus = 'All statuses';
let selectedCompanyPolicyId = 'POL-001';
let companyPolicyNotice = '';

let companyPolicies = [
    { id: 'POL-001', title: 'Code of Conduct', category: 'Workplace Standards', version: '2.1', effective: 'August 1, 2026', owner: 'Human Resources', status: 'Published', acknowledgement: 92, acknowledgementRequired: true, purpose: 'Sets the professional and ethical standards expected from every VLACE employee.', rules: ['Act honestly, respectfully, and professionally in every work interaction.', 'Avoid harassment, discrimination, retaliation, conflicts of interest, and abusive conduct.', 'Report suspected violations through the approved manager or administrator channel.'] },
    { id: 'POL-002', title: 'Attendance & Timekeeping', category: 'Employment', version: '1.4', effective: 'July 16, 2026', owner: 'Operations', status: 'Published', acknowledgement: 88, acknowledgementRequired: true, purpose: 'Explains attendance, punctuality, time-in, time-out, and absence reporting requirements.', rules: ['Record time-in and time-out accurately using the VLACE dashboard.', 'Notify the assigned supervisor as early as possible when late or absent.', 'Corrections require a reason and remain recorded in Profile Activity & Notes.'] },
    { id: 'POL-003', title: 'Leave Policy', category: 'Employment', version: '1.2', effective: 'July 1, 2026', owner: 'Human Resources', status: 'Published', acknowledgement: 85, acknowledgementRequired: true, purpose: 'Defines leave request, review, approval, and documentation procedures.', rules: ['Submit planned leave before the affected schedule whenever reasonably possible.', 'Emergency leave must be reported directly to the supervisor.', 'Leave is approved only after the request status is updated in VLACE.'] },
    { id: 'POL-004', title: 'Student Interaction Guidelines', category: 'Teaching & Students', version: '3.0', effective: 'August 1, 2026', owner: 'Academic Operations', status: 'Published', acknowledgement: 95, acknowledgementRequired: true, purpose: 'Protects students and establishes safe, respectful, age-appropriate communication standards.', rules: ['Use only approved platforms and professional language when communicating with students.', 'Never disclose confidential student, guardian, payment, or contact information.', 'Escalate safeguarding, welfare, or conduct concerns immediately.'] },
    { id: 'POL-005', title: 'Data Privacy & Confidentiality', category: 'Security & Privacy', version: '2.3', effective: 'August 1, 2026', owner: 'Administration', status: 'Published', acknowledgement: 90, acknowledgementRequired: true, purpose: 'Explains how confidential business, student, employee, and payment data must be handled.', rules: ['Access information only when required for assigned duties.', 'Do not copy, forward, download, or disclose protected records without authorization.', 'Report suspected data loss or unauthorized access immediately.'] },
    { id: 'POL-006', title: 'Acceptable Use of Company Systems', category: 'Security & Privacy', version: '1.6', effective: 'June 16, 2026', owner: 'Administration', status: 'Published', acknowledgement: 87, acknowledgementRequired: true, purpose: 'Defines appropriate use of VLACE accounts, devices, integrations, and company communication tools.', rules: ['Keep passwords private and use multi-factor authentication when enabled.', 'Do not share login access or bypass role permissions.', 'Company systems may be monitored for security and operational compliance.'] },
    { id: 'POL-007', title: 'Remote Work Policy', category: 'Employment', version: '1.1', effective: 'June 1, 2026', owner: 'Operations', status: 'Published', acknowledgement: 82, acknowledgementRequired: true, purpose: 'Sets expectations for availability, workspace readiness, connectivity, and remote performance.', rules: ['Maintain a quiet, professional, and reliable remote workspace.', 'Remain reachable during assigned working hours and scheduled classes.', 'Report equipment or connection problems before they affect service whenever possible.'] },
    { id: 'POL-008', title: 'Communication Guidelines', category: 'Workplace Standards', version: '1.8', effective: 'July 1, 2026', owner: 'Operations', status: 'Published', acknowledgement: 86, acknowledgementRequired: true, purpose: 'Creates consistent standards for internal, student, guardian, and customer communication.', rules: ['Use clear, courteous, accurate, and timely messages.', 'Keep operational decisions in approved company channels for traceability.', 'Do not send confidential data through personal or unapproved accounts.'] },
    { id: 'POL-009', title: 'Performance Expectations', category: 'Performance', version: '1.0', effective: 'August 16, 2026', owner: 'Human Resources', status: 'Draft', acknowledgement: 0, acknowledgementRequired: true, purpose: 'Defines quality, reliability, productivity, feedback, and improvement expectations.', rules: ['Complete assigned duties accurately and within agreed deadlines.', 'Participate in coaching and documented performance reviews.', 'Follow approved improvement plans and provide requested progress updates.'] },
    { id: 'POL-010', title: 'Disciplinary Procedures', category: 'Performance', version: '1.0', effective: 'September 1, 2026', owner: 'Human Resources', status: 'Draft', acknowledgement: 0, acknowledgementRequired: true, purpose: 'Provides a fair and documented process for investigating and addressing policy violations.', rules: ['Employees will be informed of the concern and allowed to provide an explanation.', 'Actions may include coaching, written warning, suspension, or termination depending on severity.', 'Every formal decision must identify the approver and be recorded in the employee profile notes.'] },
];

function getCompanyPolicyCategories() {
    return ['All categories', ...new Set(companyPolicies.map((policy) => policy.category))];
}

function getVisibleCompanyPolicies() {
    const search = companyPolicySearch.toLowerCase();
    return companyPolicies.filter((policy) => (
        (companyPolicyCategory === 'All categories' || policy.category === companyPolicyCategory) &&
        (companyPolicyStatus === 'All statuses' || policy.status === companyPolicyStatus) &&
        `${policy.title} ${policy.category} ${policy.id}`.toLowerCase().includes(search)
    ));
}

function getSelectedCompanyPolicy() {
    return companyPolicies.find((policy) => policy.id === selectedCompanyPolicyId) || companyPolicies[0];
}

function getNextCompanyPolicyId() {
    const nextNumber = Math.max(...companyPolicies.map((policy) => Number(policy.id.replace('POL-', '')))) + 1;
    return `POL-${String(nextNumber).padStart(3, '0')}`;
}

function bumpPolicyVersion(version) {
    const [major, minor = '0'] = String(version).split('.');
    return `${major}.${Number(minor) + 1}`;
}

function renderCompanyPolicyManual() {
    const root = document.getElementById('companyPolicyManual');
    if (!root) return;

    const categories = getCompanyPolicyCategories();
    const visiblePolicies = getVisibleCompanyPolicies();
    if (!visiblePolicies.some((policy) => policy.id === selectedCompanyPolicyId) && visiblePolicies.length) {
        selectedCompanyPolicyId = visiblePolicies[0].id;
    }
    const selected = getSelectedCompanyPolicy();
    const publishedCount = companyPolicies.filter((policy) => policy.status === 'Published').length;
    const draftCount = companyPolicies.filter((policy) => policy.status === 'Draft').length;
    const acknowledgementRequired = selected.acknowledgementRequired ?? true;

    root.innerHTML = `
        <section class="policy-hero">
            <div class="policy-hero-copy">
                <span><i data-lucide="book-open-check"></i></span>
                <div>
                    <p>VLACE GOVERNANCE</p>
                    <h2>Company Policy Manual</h2>
                    <small>Controlled policies, employee guidance, revision history, and acknowledgement tracking.</small>
                </div>
            </div>
            <div class="policy-hero-actions">
                <span>Administrator access</span>
                <button class="secondary-button" type="button" data-policy-export>↓ Export Manual</button>
                <button class="primary-button" type="button" data-policy-add>+ Add Policy</button>
            </div>
        </section>
        ${companyPolicyNotice ? `<div class="policy-notice"><span>✓</span>${escapeHtml(companyPolicyNotice)}<button type="button" data-policy-notice-close aria-label="Dismiss">×</button></div>` : ''}
        <section class="policy-summary" aria-label="Policy summary">
            <article><span>Published policies</span><strong>${publishedCount}</strong><small>Currently in force</small></article>
            <article><span>Draft policies</span><strong>${draftCount}</strong><small>Awaiting publication</small></article>
            <article><span>Average acknowledgement</span><strong>88%</strong><small>Published policies</small></article>
            <article><span>Next scheduled review</span><strong>Sep 1</strong><small>Annual compliance review</small></article>
        </section>
        <section class="policy-toolbar">
            <label class="policy-search"><span>⌕</span><input value="${escapeHtml(companyPolicySearch)}" placeholder="Search policies by title, category, or ID…" data-policy-search></label>
            <select aria-label="Filter policies by category" data-policy-category>
                ${categories.map((category) => `<option ${companyPolicyCategory === category ? 'selected' : ''}>${escapeHtml(category)}</option>`).join('')}
            </select>
            <select aria-label="Filter policies by status" data-policy-status>
                ${['All statuses', 'Published', 'Draft'].map((status) => `<option ${companyPolicyStatus === status ? 'selected' : ''}>${escapeHtml(status)}</option>`).join('')}
            </select>
        </section>
        <section class="policy-workspace">
            <aside class="policy-list">
                <header><div><h3>Policy Library</h3><p>${visiblePolicies.length} policies shown</p></div><span>Latest versions</span></header>
                <div class="policy-list-scroll">
                    ${visiblePolicies.length ? visiblePolicies.map((policy) => `
                        <button type="button" class="${selected.id === policy.id ? 'active' : ''}" data-policy-select="${escapeHtml(policy.id)}">
                            <span class="policy-doc-icon">▤</span>
                            <span class="policy-list-copy">
                                <strong>${escapeHtml(policy.title)}</strong>
                                <small>${escapeHtml(policy.id)} · ${escapeHtml(policy.category)}</small>
                                <em>Version ${escapeHtml(policy.version)} · ${escapeHtml(policy.effective)}</em>
                            </span>
                            <b class="${policy.status.toLowerCase()}">${escapeHtml(policy.status)}</b>
                        </button>
                    `).join('') : '<div class="policy-empty-state">No policies match the selected filters.</div>'}
                </div>
            </aside>
            <article class="policy-detail">
                <header>
                    <div><p>${escapeHtml(selected.id)} · VERSION ${escapeHtml(selected.version)}</p><h2>${escapeHtml(selected.title)}</h2><small>${escapeHtml(selected.category)}</small></div>
                    <div class="policy-detail-actions"><span class="${selected.status.toLowerCase()}">${escapeHtml(selected.status)}</span><button class="secondary-button" type="button" data-policy-edit>Edit Policy</button></div>
                </header>
                <div class="policy-metadata">
                    <div><span>Policy owner</span><strong>${escapeHtml(selected.owner)}</strong></div>
                    <div><span>Effective date</span><strong>${escapeHtml(selected.effective)}</strong></div>
                    <div><span>Applies to</span><strong>All VLACE employees</strong></div>
                    <div><span>Acknowledged</span><strong>${selected.acknowledgement}%</strong></div>
                </div>
                <section class="policy-content-block"><h3>1. Purpose and scope</h3><p>${escapeHtml(selected.purpose)}</p></section>
                <section class="policy-content-block"><h3>2. Policy requirements</h3><ol>${selected.rules.map((rule, index) => `<li><span>${index + 1}</span><p>${escapeHtml(rule)}</p></li>`).join('')}</ol></section>
                <section class="policy-acknowledgement ${acknowledgementRequired ? 'required' : 'optional'}">
                    <div><span>✓</span><div><strong>Require employee acknowledgment</strong><p>${acknowledgementRequired ? 'Each teacher and staff member must individually acknowledge this published policy.' : 'Acknowledgement is not required for this policy.'}</p></div></div>
                    <button type="button" role="switch" aria-checked="${acknowledgementRequired ? 'true' : 'false'}" class="policy-ack-switch ${acknowledgementRequired ? 'on' : ''}" data-policy-ack-switch><span></span></button>
                </section>
                <footer><span>Last updated by Van Acepcion · Administrator</span><span>Changes are recorded in the policy revision history.</span></footer>
            </article>
        </section>
    `;

    bindCompanyPolicyControls(root);
    refreshIcons();
}

function bindCompanyPolicyControls(root) {
    root.querySelector('[data-policy-export]')?.addEventListener('click', () => {
        companyPolicyNotice = 'The current published manual is ready for PDF export.';
        renderCompanyPolicyManual();
    });

    root.querySelector('[data-policy-add]')?.addEventListener('click', () => openPolicyEditorModal());
    root.querySelector('[data-policy-edit]')?.addEventListener('click', () => openPolicyEditorModal(getSelectedCompanyPolicy()));

    root.querySelector('[data-policy-notice-close]')?.addEventListener('click', () => {
        companyPolicyNotice = '';
        renderCompanyPolicyManual();
    });

    root.querySelector('[data-policy-search]')?.addEventListener('input', (event) => {
        companyPolicySearch = event.target.value;
        renderCompanyPolicyManual();
    });

    root.querySelector('[data-policy-category]')?.addEventListener('change', (event) => {
        companyPolicyCategory = event.target.value;
        renderCompanyPolicyManual();
    });

    root.querySelector('[data-policy-status]')?.addEventListener('change', (event) => {
        companyPolicyStatus = event.target.value;
        renderCompanyPolicyManual();
    });

    root.querySelectorAll('[data-policy-select]').forEach((button) => {
        button.addEventListener('click', () => {
            selectedCompanyPolicyId = button.dataset.policySelect;
            renderCompanyPolicyManual();
        });
    });

    root.querySelector('[data-policy-ack-switch]')?.addEventListener('click', () => {
        const selected = getSelectedCompanyPolicy();
        const nextRequired = !(selected.acknowledgementRequired ?? true);
        companyPolicies = companyPolicies.map((policy) => policy.id === selected.id ? {
            ...policy,
            acknowledgementRequired: nextRequired,
            acknowledgement: nextRequired ? policy.acknowledgement : 0,
        } : policy);
        companyPolicyNotice = nextRequired ? `Employee acknowledgement is now required for ${selected.title}.` : `Employee acknowledgement is no longer required for ${selected.title}.`;
        renderCompanyPolicyManual();
    });
}

function openPolicyEditorModal(policy = null) {
    const isNew = !policy;
    const categories = getCompanyPolicyCategories().filter((category) => category !== 'All categories');
    const nextId = getNextCompanyPolicyId();
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop policy-editor-backdrop';
    overlay.innerHTML = `
        <section class="modal policy-editor-modal" role="dialog" aria-modal="true" aria-labelledby="policy-editor-title">
            <div class="modal-head">
                <div><p>ADMINISTRATOR CONTROL · ${isNew ? nextId : `NEXT VERSION ${bumpPolicyVersion(policy.version)}`}</p><h3 id="policy-editor-title">${isNew ? 'Add Company Policy' : `Edit ${escapeHtml(policy.title)}`}</h3></div>
                <button type="button" data-policy-editor-close aria-label="Close">×</button>
            </div>
            <label>Policy title<input data-policy-editor-field="title" value="${escapeHtml(policy?.title || '')}" placeholder="Enter a clear policy title"></label>
            <div class="policy-editor-grid">
                <label>Category<select data-policy-editor-field="category">${categories.map((category) => `<option ${category === (policy?.category || categories[0]) ? 'selected' : ''}>${escapeHtml(category)}</option>`).join('')}</select></label>
                <label>Status<select data-policy-editor-field="status">${['Draft', 'Published'].map((status) => `<option ${status === (policy?.status || 'Draft') ? 'selected' : ''}>${status}</option>`).join('')}</select></label>
                <label>Policy owner<input data-policy-editor-field="owner" value="${escapeHtml(policy?.owner || 'Human Resources')}"></label>
                <label>Effective date<input data-policy-editor-field="effective" value="${escapeHtml(policy?.effective || 'August 8, 2026')}" placeholder="September 1, 2026"></label>
            </div>
            <label>Purpose and scope<textarea data-policy-editor-field="purpose" placeholder="Explain why this policy exists and who it applies to.">${escapeHtml(policy?.purpose || '')}</textarea></label>
            <div class="policy-requirements-editor">
                <div class="policy-requirements-heading">
                    <div><strong>Policy requirements</strong><small>Add specific, actionable requirements. Employees will acknowledge this policy as one controlled document.</small></div>
                    <button type="button" class="secondary-button" data-policy-requirement-add>+ Add Requirement</button>
                </div>
                <div data-policy-requirements>
                    ${(policy?.rules?.length ? policy.rules : ['']).map((requirement, index) => renderPolicyRequirementEditorRow(requirement, index, policy?.rules?.length || 1)).join('')}
                </div>
            </div>
            <section class="policy-editor-acknowledgement ${(policy?.acknowledgementRequired ?? true) ? 'required' : 'optional'}">
                <div><strong>Require employee acknowledgment</strong><small>${(policy?.acknowledgementRequired ?? true) ? 'Each published policy must be individually acknowledged by every assigned teacher and staff member.' : 'Employees can read this policy without submitting an acknowledgement.'}</small></div>
                <button type="button" role="switch" aria-checked="${(policy?.acknowledgementRequired ?? true) ? 'true' : 'false'}" class="policy-ack-switch ${(policy?.acknowledgementRequired ?? true) ? 'on' : ''}" data-policy-editor-ack><span></span></button>
            </section>
            <p class="modal-warning">Saving creates a permanent revision record. When acknowledgement is required, publishing the revision resets completion to 0% and employees must acknowledge the updated policy again.</p>
            <div class="modal-actions"><button class="secondary-button" type="button" data-policy-editor-close>Cancel</button><button class="primary-button" type="button" data-policy-editor-save>${isNew ? 'Add Policy' : 'Save New Revision'}</button></div>
        </section>
    `;
    document.body.appendChild(overlay);

    function close() {
        overlay.remove();
    }

    function renderRequirementRows() {
        const wrap = overlay.querySelector('[data-policy-requirements]');
        const values = [...wrap.querySelectorAll('[data-policy-requirement]')].map((field) => field.value);
        wrap.innerHTML = values.map((value, index) => renderPolicyRequirementEditorRow(value, index, values.length)).join('');
        bindRequirementRows();
    }

    function bindRequirementRows() {
        overlay.querySelectorAll('[data-policy-requirement-remove]').forEach((button) => {
            button.addEventListener('click', () => {
                const rows = [...overlay.querySelectorAll('.policy-requirement-row')];
                if (rows.length <= 1) return;
                rows[Number(button.dataset.policyRequirementRemove)]?.remove();
                renderRequirementRows();
            });
        });
    }

    function readEditorField(name) {
        return overlay.querySelector(`[data-policy-editor-field="${name}"]`)?.value.trim() || '';
    }

    overlay.querySelectorAll('[data-policy-editor-close]').forEach((button) => button.addEventListener('click', close));
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });

    overlay.querySelector('[data-policy-requirement-add]')?.addEventListener('click', () => {
        const wrap = overlay.querySelector('[data-policy-requirements]');
        const count = wrap.querySelectorAll('[data-policy-requirement]').length;
        wrap.insertAdjacentHTML('beforeend', renderPolicyRequirementEditorRow('', count, count + 1));
        renderRequirementRows();
    });

    overlay.querySelector('[data-policy-editor-ack]')?.addEventListener('click', (event) => {
        const button = event.currentTarget;
        const isOn = button.classList.toggle('on');
        button.setAttribute('aria-checked', isOn ? 'true' : 'false');
        const section = overlay.querySelector('.policy-editor-acknowledgement');
        section.classList.toggle('required', isOn);
        section.classList.toggle('optional', !isOn);
        section.querySelector('small').textContent = isOn ? 'Each published policy must be individually acknowledged by every assigned teacher and staff member.' : 'Employees can read this policy without submitting an acknowledgement.';
    });

    overlay.querySelector('[data-policy-editor-save]')?.addEventListener('click', () => {
        const requirements = [...overlay.querySelectorAll('[data-policy-requirement]')].map((field) => field.value.trim()).filter(Boolean);
        const title = readEditorField('title');
        const purpose = readEditorField('purpose');
        const owner = readEditorField('owner');
        const effective = readEditorField('effective');
        if (!title || !purpose || !owner || !effective || !requirements.length) {
            showSparkToast('Complete the policy title, owner, effective date, purpose, and requirements.');
            return;
        }

        const nextPolicy = {
            id: policy?.id || nextId,
            title,
            category: readEditorField('category'),
            version: policy ? bumpPolicyVersion(policy.version) : '1.0',
            effective,
            owner,
            status: readEditorField('status'),
            acknowledgement: 0,
            acknowledgementRequired: overlay.querySelector('[data-policy-editor-ack]')?.classList.contains('on') || false,
            purpose,
            rules: requirements,
        };

        companyPolicies = policy
            ? companyPolicies.map((item) => item.id === policy.id ? nextPolicy : item)
            : [...companyPolicies, nextPolicy];
        selectedCompanyPolicyId = nextPolicy.id;
        companyPolicyNotice = policy ? `${nextPolicy.title} was saved as version ${nextPolicy.version}. Employee acknowledgement was reset for the updated revision.` : `${nextPolicy.title} was added to the policy library.`;
        close();
        renderCompanyPolicyManual();
    });

    bindRequirementRows();
}

function renderPolicyRequirementEditorRow(requirement, index, total) {
    return `
        <div class="policy-requirement-row">
            <span>${index + 1}</span>
            <textarea data-policy-requirement placeholder="Requirement ${index + 1}: state the expected action or standard.">${escapeHtml(requirement)}</textarea>
            <button type="button" data-policy-requirement-remove="${index}" ${total === 1 ? 'disabled' : ''}>Remove</button>
        </div>
    `;
}

const adminSecurityState = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    showPasswords: false,
    linkedEmail: 'van@vlace.com',
    emailVerified: true,
    twoFactorSetup: false,
    twoFactorEnabled: false,
    authCode: '',
    notice: '',
    aiControls: {
        sparkEnabled: true,
        translationEnabled: true,
        chatbotEnabled: true,
    },
};

const companyBrandingStorageKey = 'vlace.companyBranding';
const defaultCompanyLogoUrl = '/images/vlace-logo.png';

function loadCompanyBrandingState() {
    const defaults = {
        companyName: 'VLACE',
        logoUrl: '',
        logoName: '',
        updatedAt: '',
    };

    try {
        return { ...defaults, ...(JSON.parse(window.localStorage.getItem(companyBrandingStorageKey) || '{}')) };
    } catch {
        return defaults;
    }
}

const companyBrandingState = loadCompanyBrandingState();

function saveCompanyBrandingState() {
    try {
        window.localStorage.setItem(companyBrandingStorageKey, JSON.stringify(companyBrandingState));
    } catch {
        adminSecurityState.notice = 'Logo preview updated, but browser storage is unavailable in this session.';
    }
}

function getCompanyBrandName() {
    return companyBrandingState.companyName.trim() || 'VLACE';
}

function renderCompanyLogoMark(className = '') {
    const safeClass = className ? ` class="${escapeHtml(className)}"` : '';
    return `<img${safeClass} src="${escapeHtml(companyBrandingState.logoUrl || defaultCompanyLogoUrl)}" alt="${escapeHtml(getCompanyBrandName())} logo">`;
}

function getCompanyBrandingMetaText() {
    if (!companyBrandingState.logoName) return 'Default VLACE gold logo is currently used.';
    return `${companyBrandingState.logoName}${companyBrandingState.updatedAt ? ` · Updated ${companyBrandingState.updatedAt}` : ''}`;
}

function adminSettingsStatus(value) {
    const statusClass = String(value).toLowerCase().replaceAll(' ', '-');
    return `<span class="status status-${statusClass}">${escapeHtml(value)}</span>`;
}

function isAdminPasswordStrong(password) {
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password);
}

function isAdminPasswordReady() {
    return Boolean(adminSecurityState.currentPassword && isAdminPasswordStrong(adminSecurityState.newPassword) && adminSecurityState.newPassword === adminSecurityState.confirmPassword);
}

function renderAdminSecuritySettings() {
    const root = document.getElementById('adminSecuritySettings');
    if (!root) return;

    const protections = (adminSecurityState.emailVerified ? 1 : 0) + (adminSecurityState.twoFactorEnabled ? 1 : 0) + 1;
    const securityStatus = adminSecurityState.twoFactorEnabled && adminSecurityState.emailVerified ? 'Strong' : 'Needs Attention';

    root.innerHTML = `
        <section class="settings-hero">
            <div>
                <span>ADMIN ONLY · ACCOUNT SECURITY</span>
                <h2>Dashboard Settings</h2>
                <p>Manage the Administrator login, recovery email, and two-factor authentication.</p>
            </div>
            <div class="settings-security-score">
                <span>Security status</span>
                <strong>${securityStatus}</strong>
                <small>${protections} of 3 protections active</small>
            </div>
        </section>
        ${adminSecurityState.notice ? `<div class="success-notice settings-notice">${escapeHtml(adminSecurityState.notice)}<button type="button" data-settings-notice-close>×</button></div>` : ''}
        <section class="security-overview-row">
            <article><span>●</span><div><strong>Password</strong><small>Configured</small></div>${adminSettingsStatus('Active')}</article>
            <article><span>✉</span><div><strong>Login & Recovery Email</strong><small>${escapeHtml(adminSecurityState.linkedEmail)}</small></div>${adminSettingsStatus(adminSecurityState.emailVerified ? 'Verified' : 'Pending')}</article>
            <article><span>⌁</span><div><strong>Google Authenticator</strong><small>${adminSecurityState.twoFactorEnabled ? 'Required at sign-in' : 'Not yet enabled'}</small></div>${adminSettingsStatus(adminSecurityState.twoFactorEnabled ? 'Active' : 'Setup Required')}</article>
        </section>
        <section class="admin-settings-layout">
            <div class="admin-settings-main">
                <article class="panel company-branding-card">
                    <div class="admin-settings-head">
                        <div class="admin-lock-icon">◆</div>
                        <div><span>ADMIN ONLY · COMPANY BRANDING</span><h2>Logo & Payroll Branding</h2><p>Change the company logo used in payroll PDFs, teacher payslips, staff payslips, and receipt previews.</p></div>
                        <small>Admin Only</small>
                    </div>
                    <div class="company-branding-body">
                        <div class="company-logo-preview">
                            <div class="company-logo-frame">${renderCompanyLogoMark('company-logo-image')}</div>
                            <div>
                                <strong>${escapeHtml(getCompanyBrandName())}</strong>
                                <span>${escapeHtml(getCompanyBrandingMetaText())}</span>
                            </div>
                        </div>
                        <div class="company-branding-form">
                            <label>Company name
                                <input type="text" value="${escapeHtml(companyBrandingState.companyName)}" data-company-brand-name placeholder="VLACE">
                            </label>
                            <label class="company-logo-upload">Company logo
                                <input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" data-company-logo-input>
                                <small>Recommended: PNG, JPG, WebP, or SVG with a transparent background.</small>
                            </label>
                        </div>
                    </div>
                    <div class="admin-settings-foot">
                        <div><strong>Used on payroll documents</strong><span>This logo appears on teacher and staff payslips and payroll receipt previews in this prototype.</span></div>
                        <div class="company-branding-actions">
                            <button class="secondary-button" type="button" data-company-logo-reset ${companyBrandingState.logoUrl ? '' : 'disabled'}>Use Default Logo</button>
                        </div>
                    </div>
                </article>
                <article class="panel ai-controls-card">
                    <div class="ai-controls-heading">
                        <div class="admin-lock-icon">✦</div>
                        <div><span>ADMIN ONLY · AI SERVICES</span><h2>AI Controls</h2><p>Turn dashboard AI services on or off independently.</p></div>
                        <small>Admin Only</small>
                    </div>
                    <div class="ai-control-list">
                        ${renderAiControlRow('sparkEnabled', 'SPARK AI', 'Controls access to the SPARK assistant and its dashboard analysis tools.')}
                        ${renderAiControlRow('translationEnabled', 'OpenAI Translation', 'Controls incoming-to-English and outgoing customer-message translation in Unified Inbox.')}
                        ${renderAiControlRow('chatbotEnabled', 'Chatbot', 'Controls automated customer replies, chatbot conversations, and knowledge-based responses.')}
                    </div>
                    <div class="ai-controls-foot">These controls stop new AI requests. Existing conversations and audit history remain unchanged.</div>
                </article>
                <article class="panel admin-password-card">
                    <div class="admin-settings-head">
                        <div class="admin-lock-icon">🔑</div>
                        <div><span>1 · PASSWORD</span><h2>Change Admin Password</h2><p>Use a strong, unique password for the Administrator account.</p></div>
                        <small>Admin Only</small>
                    </div>
                    <div class="admin-settings-body">
                        <div class="admin-account-summary">
                            <span class="avatar">VA</span>
                            <div><strong>Van A.</strong><small>van@vlace.com · Administrator</small></div>
                            ${adminSettingsStatus('Admin Only')}
                        </div>
                        <div class="admin-password-form">
                            <label>Current password<input type="${adminSecurityState.showPasswords ? 'text' : 'password'}" value="${escapeHtml(adminSecurityState.currentPassword)}" autocomplete="current-password" placeholder="Enter current password" data-admin-password-field="currentPassword"></label>
                            <label>New password<input type="${adminSecurityState.showPasswords ? 'text' : 'password'}" value="${escapeHtml(adminSecurityState.newPassword)}" autocomplete="new-password" placeholder="At least 8 characters" data-admin-password-field="newPassword"></label>
                            <label>Confirm new password<input type="${adminSecurityState.showPasswords ? 'text' : 'password'}" value="${escapeHtml(adminSecurityState.confirmPassword)}" autocomplete="new-password" placeholder="Enter the new password again" data-admin-password-field="confirmPassword"><small id="adminPasswordHint">Use a unique password that is not used on another account.</small></label>
                            <label class="show-password-toggle"><input type="checkbox" ${adminSecurityState.showPasswords ? 'checked' : ''} data-admin-show-passwords> Show passwords while typing</label>
                        </div>
                        <div class="password-requirements">
                            <strong>Password requirements</strong>
                            <ul>
                                <li data-password-rule="length">At least 8 characters</li>
                                <li data-password-rule="uppercase">One uppercase letter</li>
                                <li data-password-rule="number">One number</li>
                                <li data-password-rule="special">One special character</li>
                            </ul>
                        </div>
                    </div>
                    <div class="admin-settings-foot">
                        <div><strong>Security action</strong><span>A successful password change will sign out all other dashboard sessions.</span></div>
                        <button class="primary-button" type="button" data-admin-save-password>Update Admin Password</button>
                    </div>
                </article>
                <article class="panel security-setting-card">
                    <div class="security-setting-head">
                        <span class="security-step">2</span>
                        <div><h2>Login & Recovery Email</h2><p>Link an email for sign-in alerts, password recovery, and security confirmations.</p></div>
                        ${adminSettingsStatus(adminSecurityState.emailVerified ? 'Verified' : 'Pending')}
                    </div>
                    <div class="security-setting-body">
                        <label>Email address<input type="email" value="${escapeHtml(adminSecurityState.linkedEmail)}" placeholder="admin@example.com" data-admin-email></label>
                        <div class="email-security-note"><strong>What this email is used for</strong><span>Password recovery · New-login alerts · Two-factor recovery · Security notices</span></div>
                    </div>
                    <div class="security-setting-foot">
                        <small>Changing the email requires password confirmation and email verification.</small>
                        <button class="secondary-button" type="button" data-admin-verify-email ${adminSecurityState.linkedEmail.includes('@') ? '' : 'disabled'}>Link & Verify Email</button>
                    </div>
                </article>
                <article class="panel security-setting-card two-factor-card ${adminSecurityState.twoFactorEnabled ? 'enabled' : ''}">
                    <div class="security-setting-head">
                        <span class="security-step">3</span>
                        <div><h2>Two-Factor Authentication</h2><p>Protect the Admin login using time-based codes from Google Authenticator.</p></div>
                        ${adminSettingsStatus(adminSecurityState.twoFactorEnabled ? 'Active' : 'Recommended')}
                    </div>
                    ${adminSecurityState.twoFactorSetup ? renderAuthenticatorSetup() : renderAuthenticatorSummary()}
                </article>
            </div>
            <aside class="panel admin-access-rule">
                <span>🔒</span>
                <h3>Unavailable to other roles</h3>
                <p>Manager, Teacher, and Staff accounts cannot see Settings or change Admin security.</p>
                <ul><li>Admin: Allowed</li><li>Manager: Hidden</li><li>Teacher: Hidden</li><li>Staff: Hidden</li></ul>
                <div class="prototype-security-note"><strong>Security backend required</strong><p>This screen safely demonstrates the complete workflow. Real password updates, email verification, encrypted 2FA secrets, recovery codes, and server-side role checks must be connected before launch.</p></div>
            </aside>
        </section>
    `;

    bindAdminSecuritySettings(root);
    updateAdminPasswordUi(root);
    updateAdminAiNavigationState();
}

function renderAiControlRow(key, title, copy) {
    const enabled = adminSecurityState.aiControls[key];
    return `
        <div class="ai-control-row">
            <div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(copy)}</p></div>
            <span class="${enabled ? 'ai-status-on' : 'ai-status-off'}">${enabled ? 'Active' : 'Off'}</span>
            <label class="ai-toggle">
                <input type="checkbox" ${enabled ? 'checked' : ''} data-ai-control="${key}">
                <span aria-hidden="true"></span>
                <b>${enabled ? 'On' : 'Off'}</b>
            </label>
        </div>
    `;
}

function renderAuthenticatorSummary() {
    return `
        <div class="two-factor-summary">
            <div class="authenticator-mark">G</div>
            <div><strong>Google Authenticator</strong><span>${adminSecurityState.twoFactorEnabled ? 'A verification code is required whenever the Admin signs in.' : 'Add a second security step after entering your password.'}</span></div>
            <button class="${adminSecurityState.twoFactorEnabled ? 'secondary-button' : 'primary-button'}" type="button" data-admin-setup-2fa>${adminSecurityState.twoFactorEnabled ? 'Manage 2FA' : 'Set Up Authenticator'}</button>
        </div>
    `;
}

function renderAuthenticatorSetup() {
    return `
        <div class="authenticator-setup">
            <div class="authenticator-steps"><span class="active">1 Install app</span><span class="active">2 Scan QR</span><span>3 Verify code</span></div>
            <div class="authenticator-setup-grid">
                <div class="mock-qr" aria-label="Google Authenticator QR code placeholder"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                <div>
                    <strong>Scan using Google Authenticator</strong>
                    <ol><li>Open Google Authenticator on your phone.</li><li>Tap the plus button, then select “Scan a QR code.”</li><li>Enter the six-digit code shown in the app.</li></ol>
                    <label>6-digit verification code<input inputmode="numeric" maxlength="6" value="${escapeHtml(adminSecurityState.authCode)}" placeholder="000000" data-admin-auth-code></label>
                </div>
            </div>
            <div class="authenticator-actions"><button class="secondary-button" type="button" data-admin-cancel-2fa>Cancel</button><button class="primary-button" type="button" data-admin-verify-2fa ${/^\d{6}$/.test(adminSecurityState.authCode) ? '' : 'disabled'}>Verify & Activate</button></div>
        </div>
    `;
}

function bindAdminSecuritySettings(root) {
    root.querySelector('[data-settings-notice-close]')?.addEventListener('click', () => {
        adminSecurityState.notice = '';
        renderAdminSecuritySettings();
    });

    root.querySelector('[data-company-brand-name]')?.addEventListener('input', (event) => {
        companyBrandingState.companyName = event.target.value || 'VLACE';
        saveCompanyBrandingState();
        root.querySelector('.company-logo-preview strong').textContent = getCompanyBrandName();
    });

    root.querySelector('[data-company-logo-input]')?.addEventListener('change', (event) => {
        const file = event.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            window.alert('Please choose an image file for the company logo.');
            event.target.value = '';
            return;
        }
        if (file.size > 1024 * 1024) {
            window.alert('Please choose a logo image under 1 MB for this prototype.');
            event.target.value = '';
            return;
        }

        const reader = new FileReader();
        reader.addEventListener('load', () => {
            companyBrandingState.logoUrl = String(reader.result || '');
            companyBrandingState.logoName = file.name;
            companyBrandingState.updatedAt = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            adminSecurityState.notice = 'Company logo updated for payroll payslips and receipt previews.';
            saveCompanyBrandingState();
            renderAdminSecuritySettings();
        });
        reader.readAsDataURL(file);
    });

    root.querySelector('[data-company-logo-reset]')?.addEventListener('click', () => {
        companyBrandingState.logoUrl = '';
        companyBrandingState.logoName = '';
        companyBrandingState.updatedAt = '';
        adminSecurityState.notice = 'Default VLACE logo restored for payroll documents.';
        saveCompanyBrandingState();
        renderAdminSecuritySettings();
    });

    root.querySelectorAll('[data-ai-control]').forEach((input) => {
        input.addEventListener('change', (event) => {
            const key = event.target.dataset.aiControl;
            const enabled = event.target.checked;
            const confirmMessage = {
                sparkEnabled: 'Turn off SPARK AI? Users will not be able to open the assistant until it is enabled again.',
                translationEnabled: 'Turn off OpenAI Translation? New messages and replies will no longer be translated.',
                chatbotEnabled: 'Deactivate the Chatbot? Automated customer replies will stop until it is activated again.',
            }[key];
            if (!enabled && !window.confirm(confirmMessage)) {
                event.target.checked = true;
                return;
            }
            adminSecurityState.aiControls[key] = enabled;
            updateAdminAiNavigationState();
            renderAdminSecuritySettings();
        });
    });

    root.querySelectorAll('[data-admin-password-field]').forEach((input) => {
        input.addEventListener('input', (event) => {
            adminSecurityState[event.target.dataset.adminPasswordField] = event.target.value;
            updateAdminPasswordUi(root);
        });
    });

    root.querySelector('[data-admin-show-passwords]')?.addEventListener('change', (event) => {
        adminSecurityState.showPasswords = event.target.checked;
        renderAdminSecuritySettings();
    });

    root.querySelector('[data-admin-save-password]')?.addEventListener('click', () => {
        if (!isAdminPasswordReady()) return;
        adminSecurityState.currentPassword = '';
        adminSecurityState.newPassword = '';
        adminSecurityState.confirmPassword = '';
        adminSecurityState.notice = 'Password change prepared. Connect the authentication backend to apply it and sign out other sessions.';
        renderAdminSecuritySettings();
    });

    root.querySelector('[data-admin-email]')?.addEventListener('input', (event) => {
        adminSecurityState.linkedEmail = event.target.value;
        adminSecurityState.emailVerified = false;
        const button = root.querySelector('[data-admin-verify-email]');
        if (button) button.disabled = !adminSecurityState.linkedEmail.includes('@');
    });

    root.querySelector('[data-admin-verify-email]')?.addEventListener('click', () => {
        if (!adminSecurityState.linkedEmail.includes('@')) return;
        adminSecurityState.emailVerified = true;
        adminSecurityState.notice = `Verification workflow prepared for ${adminSecurityState.linkedEmail}.`;
        renderAdminSecuritySettings();
    });

    root.querySelector('[data-admin-setup-2fa]')?.addEventListener('click', () => {
        adminSecurityState.twoFactorSetup = true;
        adminSecurityState.authCode = '';
        renderAdminSecuritySettings();
    });

    root.querySelector('[data-admin-cancel-2fa]')?.addEventListener('click', () => {
        adminSecurityState.twoFactorSetup = false;
        adminSecurityState.authCode = '';
        renderAdminSecuritySettings();
    });

    root.querySelector('[data-admin-auth-code]')?.addEventListener('input', (event) => {
        adminSecurityState.authCode = event.target.value.replace(/\D/g, '').slice(0, 6);
        event.target.value = adminSecurityState.authCode;
        const button = root.querySelector('[data-admin-verify-2fa]');
        if (button) button.disabled = !/^\d{6}$/.test(adminSecurityState.authCode);
    });

    root.querySelector('[data-admin-verify-2fa]')?.addEventListener('click', () => {
        if (!/^\d{6}$/.test(adminSecurityState.authCode)) return;
        adminSecurityState.twoFactorEnabled = true;
        adminSecurityState.twoFactorSetup = false;
        adminSecurityState.authCode = '';
        adminSecurityState.notice = 'Google Authenticator setup completed in the prototype. Backend verification is required before real enforcement.';
        renderAdminSecuritySettings();
    });
}

function updateAdminPasswordUi(root) {
    const password = adminSecurityState.newPassword;
    const passwordMatches = isAdminPasswordStrong(password) && password === adminSecurityState.confirmPassword;
    root.querySelector('[data-password-rule="length"]')?.classList.toggle('met', password.length >= 8);
    root.querySelector('[data-password-rule="uppercase"]')?.classList.toggle('met', /[A-Z]/.test(password));
    root.querySelector('[data-password-rule="number"]')?.classList.toggle('met', /[0-9]/.test(password));
    root.querySelector('[data-password-rule="special"]')?.classList.toggle('met', /[^A-Za-z0-9]/.test(password));
    const hint = root.querySelector('#adminPasswordHint');
    if (hint) {
        const showError = adminSecurityState.confirmPassword && !passwordMatches;
        hint.className = showError ? 'password-error' : '';
        hint.textContent = showError ? 'Passwords must match and contain at least 8 characters.' : 'Use a unique password that is not used on another account.';
    }
    const saveButton = root.querySelector('[data-admin-save-password]');
    if (saveButton) saveButton.disabled = !isAdminPasswordReady();
}

function updateAdminAiNavigationState() {
    const aiButton = document.querySelector('[data-section-target="ai"]');
    if (!aiButton) return;
    aiButton.classList.toggle('ai-service-disabled', !adminSecurityState.aiControls.sparkEnabled);
    aiButton.title = adminSecurityState.aiControls.sparkEnabled ? 'Open SPARK AI' : 'SPARK AI is off. Open Settings to enable it.';
    aiButton.querySelector('.jarvis-online-dot')?.classList.toggle('is-off', !adminSecurityState.aiControls.sparkEnabled);
}

const userManagementTabs = ['Users', 'Roles & Permissions', 'Access Activity'];
let activeUserManagementTab = 'Users';
let userManagementNotice = '';
let userLoginSettingsUserId = null;
let editingUserId = null;

let dashboardUsers = [
    {
        id: 'AD-001',
        name: 'Van Acepcion',
        email: 'van@vlace.com',
        role: 'Admin',
        access: 'Full access',
        status: 'Active',
        lastLogin: 'Today, 4:42 AM',
        canViewStudentContacts: true,
    },
    {
        id: 'MG-001',
        name: 'Angela Reyes',
        email: 'angela@vlace.com',
        role: 'Manager',
        access: 'Operations and approvals',
        status: 'Active',
        lastLogin: 'Yesterday, 8:10 PM',
        canViewStudentContacts: false,
    },
    {
        id: 'T1-001',
        name: 'Maria Santos',
        email: 'maria@vlace.com',
        role: 'Teacher',
        teacherTitle: 'Senior ESL Teacher',
        specialTask: 'Support new-teacher lesson observations',
        access: 'Assigned students only',
        status: 'Active',
        lastLogin: 'Jul 29, 6:35 PM',
        canViewStudentContacts: false,
    },
    {
        id: 'ST-002',
        name: 'Carlo Mendoza',
        email: 'carlo@vlace.com',
        role: 'Staff',
        staffTitle: 'Customer Service Representative',
        specialTask: 'Greater China customer follow-up',
        access: 'Limited records',
        status: 'Revoked',
        lastLogin: 'Jul 25, 9:15 PM',
        canViewStudentContacts: false,
    },
];

const userPermissionModules = [
    'Student Directory',
    'Student Profile Activity & Notes',
    'Student Contact Details',
    'Student Payments',
    'Teacher Directory',
    'Teacher Profile Activity & Notes',
    'Teacher Contact Details',
    'Teacher Payroll',
    'Staff Directory',
    'Staff Profile Activity & Notes',
    'Staff Contact Details',
    'Schedules',
    'Teacher Documents',
    'Manager Feedback',
    'Pending Approvals',
    'Unified Inbox',
    'Email Inbox',
    'Packages & Prices',
    'Curriculum View',
    'Curriculum Edit & Download',
];
const userPermissionRoles = ['Admin', 'Manager', 'Teacher', 'Staff'];
const userPermissionDefaults = {
    Admin: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    Manager: [true, true, false, false, true, false, true, true, true, true, true, true, false, true, false],
    Teacher: [true, true, false, false, false, false, true, false, false, false, false, false, false, true, false],
    Staff: [true, false, false, false, true, false, true, false, false, false, true, true, false, true, false],
};
let userPermissions = Object.fromEntries(
    Object.entries(userPermissionDefaults).map(([role, values]) => [
        role,
        userPermissionModules.map((_, index) => Boolean(values[index])),
    ]),
);

function getUserStatus(value) {
    const normalized = String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const tone = ['active', 'successful', 'allowed', 'protected'].includes(normalized)
        ? 'positive'
        : ['blocked', 'revoked'].includes(normalized)
            ? 'warning'
            : 'neutral';
    return `<span class="status-pill ${tone}">${escapeHtml(value)}</span>`;
}

function renderUserManagementTabs() {
    const tabs = document.getElementById('userManagementTabs');
    if (!tabs) return;
    tabs.innerHTML = userManagementTabs.map((tab) => `
        <button type="button" role="tab" aria-selected="${activeUserManagementTab === tab}" class="${activeUserManagementTab === tab ? 'active' : ''}" data-user-tab="${escapeHtml(tab)}">${escapeHtml(tab)}</button>
    `).join('');
    tabs.querySelectorAll('[data-user-tab]').forEach((button) => {
        button.addEventListener('click', () => {
            activeUserManagementTab = button.dataset.userTab;
            renderUserManagement();
        });
    });
}

function renderUserManagementNotice() {
    const notice = document.getElementById('userManagementNotice');
    if (!notice) return;
    const text = notice.querySelector('span');
    if (userManagementNotice) {
        if (text) text.textContent = userManagementNotice;
        notice.removeAttribute('hidden');
    } else {
        notice.setAttribute('hidden', '');
    }
    notice.querySelector('button')?.addEventListener('click', () => {
        userManagementNotice = '';
        renderUserManagementNotice();
    });
}

function renderSystemUsers() {
    const activeCount = dashboardUsers.filter((user) => user.status === 'Active').length;
    const revokedCount = dashboardUsers.filter((user) => user.status === 'Revoked').length;
    return `
        <article class="panel directory-panel user-directory-panel">
            <div class="directory-tools">
                <div>
                    <h3>System Users</h3>
                    <p>${activeCount} active users · ${revokedCount} revoked</p>
                </div>
                <div class="access-key">Login by approved email only</div>
            </div>
            <div class="table-wrap user-table-wrap">
                <table class="user-management-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Role</th>
                            <th>Information Access</th>
                            <th>Last Login</th>
                            <th>Status</th>
                            <th>Profile</th>
                            <th>Login Settings</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dashboardUsers.map((user) => `
                            <tr>
                                <td>
                                    <div class="person">
                                        <span>${escapeHtml(getInitials(user.name))}</span>
                                        <div>
                                            <strong>${escapeHtml(user.name)}</strong>
                                            <small>${escapeHtml(user.email)} · ${escapeHtml(user.id)}</small>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="role-badge">${escapeHtml(user.role)}</span>
                                    ${user.role === 'Staff' && user.staffTitle ? `<small class="staff-subrole-label">${escapeHtml(user.staffTitle)}</small>` : ''}
                                    ${user.role === 'Teacher' && user.teacherTitle ? `<small class="staff-subrole-label">${escapeHtml(user.teacherTitle)}</small>` : ''}
                                    ${(user.role === 'Staff' || user.role === 'Teacher') && user.specialTask ? `<small class="staff-task-label">Task: ${escapeHtml(user.specialTask)}</small>` : ''}
                                </td>
                                <td>
                                    <span>${escapeHtml(user.access)}</span>
                                    <small class="contact-access ${user.canViewStudentContacts ? 'allowed' : 'hidden'}">${user.canViewStudentContacts ? 'Sensitive contacts allowed' : 'Sensitive contacts hidden'}</small>
                                </td>
                                <td>${escapeHtml(user.lastLogin)}</td>
                                <td>${getUserStatus(user.status)}</td>
                                <td><div class="user-actions"><button type="button" data-edit-user="${escapeHtml(user.id)}">Edit User</button></div></td>
                                <td><button type="button" class="login-settings-button" data-login-user="${escapeHtml(user.id)}"><span>⚙</span> Manage Login</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </article>
    `;
}

function renderPermissionMatrix() {
    return `
        <article class="panel permission-panel">
            <div class="panel-heading">
                <div>
                    <h2>Role Permissions</h2>
                    <p>Choose what each role is allowed to see. Changes never remove your Admin access.</p>
                </div>
                <button class="primary-button" type="button" data-user-toast="Permissions saved in prototype.">Save Permissions</button>
            </div>
            <div class="table-wrap">
                <table class="permission-table">
                    <thead>
                        <tr>
                            <th>Information / Module</th>
                            ${userPermissionRoles.map((role) => `<th>${escapeHtml(role)}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${userPermissionModules.map((module, moduleIndex) => `
                            <tr>
                                <td>
                                    <strong>${escapeHtml(module)}</strong>
                                    ${module.includes('Activity & Notes') || module.includes('Contact') || module.includes('Payments') || module.includes('Payroll') || module.includes('Edit & Download') ? '<small class="sensitive-label">Restricted</small>' : ''}
                                </td>
                                ${userPermissionRoles.map((role) => {
                                    const locked = role === 'Admin' || module === 'Curriculum Edit & Download';
                                    const allowed = Boolean(userPermissions[role]?.[moduleIndex]);
                                    return `
                                        <td>
                                            <label class="permission-check ${locked ? 'locked' : ''}">
                                                <input type="checkbox" ${allowed ? 'checked' : ''} ${locked ? 'disabled' : ''} data-permission-role="${escapeHtml(role)}" data-permission-index="${moduleIndex}">
                                                <span>${allowed ? 'Allowed' : module === 'Curriculum Edit & Download' ? 'Admin only' : 'Hidden'}</span>
                                            </label>
                                        </td>
                                    `;
                                }).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            <div class="permission-foot">
                <strong>Important:</strong> Teachers can only see students assigned to them. Profile Activity & Notes access can be enabled or hidden separately. Student/guardian contact information, pricing, payments, company finances, and payroll remain hidden by default.
            </div>
        </article>
    `;
}

function renderAccessActivity() {
    const items = [
        ['Today, 4:42 AM', 'Van Acepcion', 'Signed in', 'Successful'],
        ['Yesterday, 8:10 PM', 'Maria Santos', 'Viewed Student Directory', 'Allowed'],
        ['Jul 30, 7:03 PM', 'David Lee', 'Updated a class schedule', 'Allowed'],
        ['Jul 29, 6:50 PM', 'Emma Wilson', 'Tried to open Student Payments', 'Blocked'],
    ];
    return `
        <article class="panel directory-panel user-directory-panel">
            <div class="directory-tools">
                <div>
                    <h3>Access Activity</h3>
                    <p>Review sign-ins, permission changes, and blocked attempts.</p>
                </div>
                <button class="secondary-button" type="button" data-user-toast="Activity export prepared in prototype.">Export activity</button>
            </div>
            <div class="table-wrap user-table-wrap">
                <table class="user-management-table">
                    <thead><tr><th>Date & Time</th><th>User</th><th>Activity</th><th>Result</th></tr></thead>
                    <tbody>
                        ${items.map((item) => `
                            <tr>
                                <td>${escapeHtml(item[0])}</td>
                                <td class="strong">${escapeHtml(item[1])}</td>
                                <td>${escapeHtml(item[2])}</td>
                                <td>${getUserStatus(item[3])}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </article>
    `;
}

function renderUserManagementContent() {
    if (activeUserManagementTab === 'Roles & Permissions') return renderPermissionMatrix();
    if (activeUserManagementTab === 'Access Activity') return renderAccessActivity();
    return renderSystemUsers();
}

function renderUserManagement() {
    const content = document.getElementById('userManagementContent');
    if (!content) return;
    renderUserManagementTabs();
    renderUserManagementNotice();
    content.innerHTML = renderUserManagementContent();
    bindUserManagementControls(content);
    if (window.lucide) lucide.createIcons();
}

function bindUserManagementControls(root = document) {
    root.querySelectorAll('[data-edit-user]').forEach((button) => {
        button.addEventListener('click', () => openUserForm(button.dataset.editUser));
    });
    root.querySelectorAll('[data-login-user]').forEach((button) => {
        button.addEventListener('click', () => openUserLoginSettings(button.dataset.loginUser));
    });
    root.querySelectorAll('[data-permission-role]').forEach((input) => {
        input.addEventListener('change', () => {
            const role = input.dataset.permissionRole;
            const index = Number(input.dataset.permissionIndex);
            if (role === 'Admin' || userPermissionModules[index] === 'Curriculum Edit & Download') return;
            userPermissions[role][index] = input.checked;
            renderUserManagement();
        });
    });
    root.querySelectorAll('[data-user-toast]').forEach((button) => {
        button.addEventListener('click', () => showUserManagementNotice(button.dataset.userToast));
    });
}

function showUserManagementNotice(message) {
    userManagementNotice = message;
    renderUserManagementNotice();
}

function roleAccessLabel(role) {
    return {
        Admin: 'Full access',
        Manager: 'Operations and approvals',
        Teacher: 'Assigned students only',
        Staff: 'Limited records',
    }[role] || 'Limited records';
}

function openUserForm(userId = null) {
    const user = dashboardUsers.find((record) => record.id === userId) || null;
    editingUserId = user?.id || null;
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop user-management-backdrop';
    overlay.innerHTML = `
        <div class="modal user-form-modal" role="dialog" aria-modal="true" aria-labelledby="user-form-title">
            <div class="modal-head">
                <div>
                    <p>USER ACCESS</p>
                    <h3 id="user-form-title">${user ? 'Edit User' : 'Create New User'}</h3>
                </div>
                <button type="button" data-user-close aria-label="Close">×</button>
            </div>
            <label>Full name<input id="userFormName" value="${escapeHtml(user?.name || '')}" placeholder="Enter user’s name"></label>
            <label>Login email<input id="userFormEmail" type="email" value="${escapeHtml(user?.email || '')}" placeholder="name@vlace.com"></label>
            <label>Role<select id="userFormRole">${['Admin', 'Manager', 'Teacher', 'Staff'].map((role) => `<option ${role === (user?.role || 'Staff') ? 'selected' : ''}>${role}</option>`).join('')}</select></label>
            <div id="userRoleExtraFields"></div>
            <div class="role-summary"><strong>Default access</strong><span id="userRoleSummary"></span></div>
            <label class="sensitive-access-toggle">
                <input id="userFormContacts" type="checkbox" ${user?.canViewStudentContacts ? 'checked' : ''}>
                <span>
                    <strong>Allow Sensitive Student Contact Information</strong>
                    <small>WeChat, WhatsApp, email address, guardian details, and customer phone number.</small>
                </span>
            </label>
            <div class="modal-warning">Permissions can be customized under Roles & Permissions. Financial information and private contact details remain restricted unless you explicitly allow them.</div>
            <div class="modal-actions">
                <button class="secondary-button" type="button" data-user-close>Cancel</button>
                <button class="primary-button" type="button" id="saveUserForm">${user ? 'Save Changes' : 'Create Login'}</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    const roleInput = overlay.querySelector('#userFormRole');
    const contactsInput = overlay.querySelector('#userFormContacts');
    const extraFields = overlay.querySelector('#userRoleExtraFields');
    const summary = overlay.querySelector('#userRoleSummary');
    const staffTitles = ['Customer Service Representative', 'Student Support Coordinator', 'Scheduling Coordinator', 'Marketing Coordinator', 'Finance Assistant', 'Academic Support Staff', 'Content & Curriculum Assistant', 'IT Support Staff', 'Administrative Assistant'];
    const teacherTitles = ['ESL Teacher', 'Senior ESL Teacher', 'Lead Teacher', 'Kids English Specialist', 'Adult English Specialist', 'IELTS Preparation Teacher', 'Business English Teacher', 'Pronunciation Coach', 'Teacher Mentor', 'Curriculum Support Teacher', 'Substitute Teacher'];

    function renderRoleExtras() {
        const role = roleInput.value;
        if (contactsInput) {
            contactsInput.checked = role === 'Admin' || contactsInput.checked;
            contactsInput.disabled = role === 'Admin';
        }
        if (role === 'Staff') {
            extraFields.innerHTML = `
                <section class="staff-specialization-fields">
                    <div class="staff-specialization-head"><div><strong>Staff specialization</strong><small>The account remains under the main Staff role and its Staff permissions.</small></div><span>Staff</span></div>
                    <label>Specific staff role / job title<select id="userStaffTitle">${staffTitles.map((title) => `<option ${title === (user?.staffTitle || staffTitles[0]) ? 'selected' : ''}>${escapeHtml(title)}</option>`).join('')}<option>Add another role…</option></select></label>
                    <label>Special task allocation <span class="optional-label">Optional</span><input id="userSpecialTask" value="${escapeHtml(user?.specialTask || '')}" placeholder="Example: Monitor China student follow-ups"></label>
                </section>
            `;
        } else if (role === 'Teacher') {
            extraFields.innerHTML = `
                <section class="staff-specialization-fields teacher-specialization-fields">
                    <div class="staff-specialization-head"><div><strong>Teacher specialization</strong><small>The account remains under the main Teacher role and its Teacher permissions.</small></div><span>Teacher</span></div>
                    <label>Specific teacher role / specialization<select id="userTeacherTitle">${teacherTitles.map((title) => `<option ${title === (user?.teacherTitle || 'ESL Teacher') ? 'selected' : ''}>${escapeHtml(title)}</option>`).join('')}<option>Add another role…</option></select></label>
                    <label>Special task allocation <span class="optional-label">Optional</span><input id="userSpecialTask" value="${escapeHtml(user?.specialTask || '')}" placeholder="Example: Mentor new China-team teachers"></label>
                </section>
            `;
        } else {
            extraFields.innerHTML = '';
        }
        if (summary) summary.textContent = roleAccessLabel(role);
    }

    function close() {
        overlay.remove();
        editingUserId = null;
    }

    renderRoleExtras();
    roleInput?.addEventListener('change', renderRoleExtras);
    overlay.querySelectorAll('[data-user-close]').forEach((button) => button.addEventListener('click', close));
    overlay.querySelector('#saveUserForm')?.addEventListener('click', () => {
        const role = roleInput.value;
        const name = overlay.querySelector('#userFormName')?.value.trim();
        const email = overlay.querySelector('#userFormEmail')?.value.trim();
        if (!name || !email) return;
        const next = {
            name,
            email,
            role,
            access: roleAccessLabel(role),
            canViewStudentContacts: role === 'Admin' || Boolean(contactsInput?.checked),
            staffTitle: role === 'Staff' ? overlay.querySelector('#userStaffTitle')?.value : undefined,
            teacherTitle: role === 'Teacher' ? overlay.querySelector('#userTeacherTitle')?.value : undefined,
            specialTask: ['Staff', 'Teacher'].includes(role) ? overlay.querySelector('#userSpecialTask')?.value.trim() : undefined,
        };
        if (editingUserId) {
            dashboardUsers = dashboardUsers.map((record) => record.id === editingUserId ? { ...record, ...next } : record);
            showUserManagementNotice('User details and permissions saved.');
        } else {
            dashboardUsers = [...dashboardUsers, { ...next, id: `ST-${String(dashboardUsers.length + 1).padStart(3, '0')}`, status: 'Active', lastLogin: 'Not yet logged in' }];
            showUserManagementNotice('User login created and invitation prepared.');
        }
        close();
        renderUserManagement();
    });
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
}

function openUserLoginSettings(userId) {
    const user = dashboardUsers.find((record) => record.id === userId);
    if (!user) return;
    userLoginSettingsUserId = user.id;
    const isAdmin = user.role === 'Admin';
    const overlay = document.createElement('div');
    overlay.className = 'profile-drawer-overlay user-login-overlay';
    overlay.innerHTML = `
        <aside class="student-edit-drawer login-control-drawer" role="dialog" aria-modal="true" aria-labelledby="login-control-title">
            <div class="student-edit-head">
                <div>
                    <span>ADMIN ONLY · USER ACCESS</span>
                    <h2 id="login-control-title">Login Settings</h2>
                    <p>Control authentication for ${escapeHtml(user.name)}.</p>
                </div>
                <button type="button" data-login-close aria-label="Close login settings">×</button>
            </div>
            <div class="student-edit-body">
                <div class="login-user-summary">
                    <span>${escapeHtml(getInitials(user.name))}</span>
                    <div>
                        <strong>${escapeHtml(user.name)}</strong>
                        <small>${escapeHtml(user.email)} · ${escapeHtml(user.role)}</small>
                    </div>
                    ${getUserStatus(user.status)}
                </div>
                <section class="login-access-card ${user.status === 'Active' ? 'active' : 'suspended'}">
                    <div>
                        <span class="login-state-dot"></span>
                        <div>
                            <strong>${user.status === 'Active' ? 'Login is active' : 'Login is temporarily suspended'}</strong>
                            <small>${user.status === 'Active' ? 'This user can sign in using the current password.' : 'The password is preserved, but sign-in is blocked until access is restored.'}</small>
                        </div>
                    </div>
                    ${isAdmin ? '<p class="admin-lockout-warning">The primary Admin account cannot be suspended here. Use Dashboard Settings to manage your own password and two-factor authentication.</p>' : user.status === 'Active' ? '<button class="suspend-login-button" type="button" data-login-status="Revoked">Temporarily Suspend Login</button>' : '<button class="restore-login-button" type="button" data-login-status="Active">Reactivate Login</button>'}
                    ${!isAdmin ? '<small class="preserve-password-note">Reactivating access does not change the user’s existing password.</small>' : ''}
                </section>
                <section class="drawer-form-section">
                    <div class="drawer-section-title"><span>1</span><div><h3>Change User Password</h3><p>Create a replacement password and invalidate the previous one.</p></div></div>
                    <div class="drawer-form-grid">
                        <label class="full">New password<input id="loginNewPassword" type="password" placeholder="At least 8 characters" autocomplete="new-password"></label>
                        <label class="full">Confirm new password<input id="loginConfirmPassword" type="password" placeholder="Enter the new password again" autocomplete="new-password"><small id="loginPasswordHint">Must include an uppercase letter, number, and special character.</small></label>
                    </div>
                    <label class="login-option"><input type="checkbox" id="loginShowPassword"><span>Show password</span></label>
                    <label class="login-option"><input type="checkbox" checked><span><strong>Require password change at next login</strong><small>Recommended when the Admin creates a temporary password.</small></span></label>
                    <button class="primary-button reset-user-password" id="loginResetPassword" disabled>Save New Password & Sign Out Sessions</button>
                </section>
                <section class="drawer-form-section login-session-card">
                    <div class="drawer-section-title"><span>2</span><div><h3>Session Control</h3><p>Review and end access on other devices.</p></div></div>
                    <div class="session-row"><div><strong>Last login</strong><small>${escapeHtml(user.lastLogin)}</small></div><button class="secondary-button" type="button" data-user-toast="All sessions sign-out prepared in prototype.">Sign Out All Sessions</button></div>
                </section>
                <div class="drawer-audit-note"><i data-lucide="users"></i><div><strong>Security audit trail</strong><p>Password changes, login suspensions, reactivations, and forced sign-outs will record the Admin’s name, date, time, and affected user.</p></div></div>
                <div class="prototype-security-note"><strong>Secure authentication backend required</strong><p>This interface demonstrates the complete Admin workflow. Real password hashing, session invalidation, login blocking, and server-side Admin authorization must be connected before production use.</p></div>
            </div>
            <div class="student-edit-footer"><button class="secondary-button" type="button" data-login-close>Close</button></div>
        </aside>
    `;
    document.body.appendChild(overlay);
    if (window.lucide) lucide.createIcons();

    const newPassword = overlay.querySelector('#loginNewPassword');
    const confirmPassword = overlay.querySelector('#loginConfirmPassword');
    const resetButton = overlay.querySelector('#loginResetPassword');
    const hint = overlay.querySelector('#loginPasswordHint');
    const showPassword = overlay.querySelector('#loginShowPassword');

    function validatePassword() {
        const ready = newPassword.value.length >= 8 && /[A-Z]/.test(newPassword.value) && /[0-9]/.test(newPassword.value) && /[^A-Za-z0-9]/.test(newPassword.value) && newPassword.value === confirmPassword.value;
        resetButton.disabled = !ready;
        hint.className = confirmPassword.value && !ready ? 'password-error' : '';
        hint.textContent = confirmPassword.value && !ready ? 'Passwords must match and meet all requirements.' : 'Must include an uppercase letter, number, and special character.';
    }

    function close() {
        overlay.remove();
        userLoginSettingsUserId = null;
    }

    newPassword?.addEventListener('input', validatePassword);
    confirmPassword?.addEventListener('input', validatePassword);
    showPassword?.addEventListener('change', () => {
        const type = showPassword.checked ? 'text' : 'password';
        newPassword.type = type;
        confirmPassword.type = type;
    });
    overlay.querySelectorAll('[data-login-close]').forEach((button) => button.addEventListener('click', close));
    overlay.querySelectorAll('[data-login-status]').forEach((button) => {
        button.addEventListener('click', () => {
            dashboardUsers = dashboardUsers.map((record) => record.id === user.id ? { ...record, status: button.dataset.loginStatus } : record);
            showUserManagementNotice(button.dataset.loginStatus === 'Revoked' ? `${user.name}'s login has been temporarily suspended.` : `${user.name}'s login has been reactivated without changing the password.`);
            close();
            renderUserManagement();
        });
    });
    resetButton?.addEventListener('click', () => {
        showUserManagementNotice(`A new password was prepared for ${user.name}. All existing sessions will be signed out when the secure authentication backend is connected.`);
        close();
    });
    overlay.addEventListener('mousedown', (event) => {
        if (event.target === overlay) close();
    });
}

function hasPrimaryMeetingLink(teacher) {
    return Boolean(teacher.links?.voov || teacher.links?.meet || teacher.links?.teams || teacher.links?.zoom);
}

function hasCompleteMeetingLinks(teacher) {
    return Boolean(teacher.links?.voov && teacher.links?.meet && teacher.links?.teams && teacher.links?.zoom);
}

function getTeacherRows() {
    const search = document.getElementById('teacherSearch')?.value.trim().toLowerCase() || '';
    const country = document.getElementById('teacherCountryFilter')?.value || 'All Countries';
    const status = document.getElementById('teacherStatusFilter')?.value || 'All Statuses';

    return teachers.filter((teacher) => {
        const matchesSearch = `${teacher.name} ${teacher.id} ${teacher.country}`.toLowerCase().includes(search);
        const matchesCountry = country === 'All Countries' || teacher.country === country;
        const matchesStatus = status === 'All Statuses' || teacher.status === status;
        return matchesSearch && matchesCountry && matchesStatus;
    });
}

function renderTeacherTable() {
    const body = document.getElementById('teacherTableBody');
    if (!body) return;

    const rows = getTeacherRows();
    setText('#teacherVisibleCount', String(rows.length));
    setText('#teacherTotalCount', String(teachers.length));
    setText('#teacherAvailableCount', String(teachers.filter((teacher) => teacher.status === 'Active').length));
    setText('#teacherClassesToday', String(teachers.reduce((total, teacher) => total + teacher.today, 0)));
    setText('#teacherMissingLinks', String(teachers.filter((teacher) => !hasCompleteMeetingLinks(teacher)).length));

    if (!rows.length) {
        body.innerHTML = '<tr><td colspan="8" class="empty-row">No teachers match the selected filters.</td></tr>';
        return;
    }

    body.innerHTML = rows.map((teacher) => `
        <tr class="${teacher.id === selectedTeacherId ? 'selected' : ''}" data-teacher-row="${teacher.id}" tabindex="0" aria-label="Open ${teacher.name} teacher profile">
            <td>
                <button class="student-person teacher-person" type="button" data-teacher-id="${teacher.id}">
                    <span>${getInitials(teacher.name)}<i class="employee-login-dot ${teacher.loginStatus === 'Logged in' ? 'is-online' : 'is-offline'}"></i></span>
                    <div><strong>${teacher.name}</strong><small>${teacher.id}</small></div>
                </button>
            </td>
            <td><span class="country-badge">${teacher.country}</span></td>
            <td>${teacher.type}</td>
            <td>${teacher.students}</td>
            <td>${teacher.today}</td>
            <td>${teacher.rate}</td>
            <td><span class="status-pill ${teacher.status === 'Active' ? 'positive' : 'warning'}">${teacher.status}</span></td>
            <td><span class="status-pill ${hasCompleteMeetingLinks(teacher) ? 'positive' : 'warning'}">${hasCompleteMeetingLinks(teacher) ? 'Complete' : 'Needs review'}</span></td>
        </tr>
    `).join('');

    body.querySelectorAll('[data-teacher-row]').forEach((row) => {
        row.addEventListener('click', () => openTeacherDetail(row.dataset.teacherRow));
        row.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openTeacherDetail(row.dataset.teacherRow);
            }
        });
    });
}

function openTeacherProfile(teacherId) {
    const teacher = teachers.find((item) => item.id === teacherId) || teachers[0];
    if (!teacher) return;

    selectedTeacherId = teacher.id;
    setText('#teacherProfileAvatar', getInitials(teacher.name));
    setText('#teacherProfileName', teacher.name);
    setText('#teacherProfileMeta', `${teacher.id} · ${teacher.country} · ${teacher.type}`);
    setText('#teacherProfileStudents', String(teacher.students));
    setText('#teacherProfileToday', String(teacher.today));
    setText('#teacherProfileRate', teacher.rate);
    setText('#teacherProfileVoov', teacher.links.voov || 'Missing');
    setText('#teacherProfileMeet', teacher.links.meet || 'Missing');
    setText('#teacherProfileTeams', teacher.links.teams || 'Missing');
    setText('#teacherProfileZoom', teacher.links.zoom || 'Missing');
    setText('#teacherDetailAvatar', getInitials(teacher.name));
    setText('#teacherDetailName', teacher.name);
    setText('#teacherDetailMeta', `${teacher.id} · ${teacher.country} · ${teacher.type}`);
    setText('#teacherDetailStudents', String(teacher.students));
    setText('#teacherDetailToday', String(teacher.today));
    setText('#teacherDetailRate', teacher.rate);
    setText('#teacherDetailStatus', teacher.status);
    setText('#teacherDetailLogin', teacher.loginStatus);
    setText('#teacherDetailId', teacher.id);
    setText('#teacherProfileRecordName', teacher.name);
    setText('#teacherDetailCountry', teacher.country);
    setText('#teacherDetailType', teacher.type);
    setText('#teacherDetailStatusValue', teacher.status);
    const teacherStatusValue = document.getElementById('teacherDetailStatusValue');
    if (teacherStatusValue) {
        teacherStatusValue.className = `status-pill ${teacher.status === 'Active' ? 'positive' : 'warning'}`;
    }
    setText('#teacherDetailVoov', teacher.links.voov || 'Missing');
    setText('#teacherDetailMeet', teacher.links.meet || 'Missing');
    setText('#teacherDetailTeams', teacher.links.teams || 'Missing');
    setText('#teacherDetailZoom', teacher.links.zoom || 'Missing');
    setText('#teacherLinksPanelVoov', teacher.links.voov || 'Missing');
    setText('#teacherLinksPanelMeet', teacher.links.meet || 'Missing');
    setText('#teacherLinksPanelTeams', teacher.links.teams || 'Missing');
    setText('#teacherLinksPanelZoom', teacher.links.zoom || 'Missing');

    const contact = teacherContacts[teacher.name] || {};
    setText('#teacherPrimaryPhone', contact.primary || 'Not provided');
    setText('#teacherSecondaryPhone', contact.secondary || 'Not provided');
    setText('#teacherEmailAddress', contact.email || 'Not provided');
    setText('#teacherEmergencyName', contact.emergencyName || 'Not provided');
    setText('#teacherEmergencyPhone', contact.emergencyPhone || 'Not provided');

    const availability = teacherAvailability[teacher.name]?.slots || [];
    const list = document.getElementById('teacherAvailabilityList');
    if (list) {
        list.innerHTML = availability.length
            ? availability.map((slot) => `<li><strong>${slot.days.join(', ')}</strong><span>${slot.times.map(inputTimeToDisplay).join(' · ')} PHT</span></li>`).join('')
            : '<li><strong>No weekly slots saved</strong><span>Add teacher availability later.</span></li>';
    }

    const detailAvailability = document.getElementById('teacherDetailAvailability');
    if (detailAvailability) {
        detailAvailability.innerHTML = availability.length
            ? availability.map((slot) => `<li><strong>${slot.days.join(', ')}</strong><span>${slot.times.map(inputTimeToDisplay).join(' · ')} PHT</span></li>`).join('')
            : '<li><strong>No weekly slots saved</strong><span>Add teacher availability later.</span></li>';
    }

    const scheduleAvailability = document.getElementById('teacherScheduleAvailability');
    if (scheduleAvailability) {
        scheduleAvailability.innerHTML = availability.length
            ? availability.map((slot) => `<li><strong>${slot.days.join(', ')}</strong><span>${slot.times.map(inputTimeToDisplay).join(' · ')} PHT</span></li>`).join('')
            : '<li><strong>No weekly slots saved</strong><span>Add teacher availability later.</span></li>';
    }

    updateTeacherWeeklySchedule(teacher, availability);
    renderTeacherAssignedStudents(teacher);
    renderTeacherDocuments(teacher);
    renderTeacherFeedbackRecords(teacher);
    renderTeacherPolicyLibrary(teacher);
    renderTeacherScheduleRows(teacher);
    renderTeacherWeeklyCalendar(teacher, availability);
    renderTeacherPayroll(teacher);

    document.querySelectorAll('[data-teacher-row]').forEach((row) => {
        row.classList.toggle('selected', row.dataset.teacherRow === teacher.id);
    });
}

function setTeacherProfileTab(tabName) {
    document.querySelectorAll('[data-teacher-tab]').forEach((button) => {
        button.classList.toggle('active', button.dataset.teacherTab === tabName);
    });

    document.querySelectorAll('[data-teacher-tab-panel]').forEach((panel) => {
        panel.classList.toggle('active', panel.dataset.teacherTabPanel === tabName);
    });

    document.querySelectorAll('[data-teacher-profile-only-actions]').forEach((actions) => {
        actions.hidden = tabName !== 'profile';
    });

    refreshIcons();
}

function renderTeacherAssignedStudents(teacher) {
    const body = document.getElementById('teacherDetailStudentBody');
    if (!body) return;

    const assignedStudents = students.filter((student) => student.teacher === teacher.name);
    if (!assignedStudents.length) {
        body.innerHTML = '<tr><td colspan="5" class="empty-row">No students are assigned to this teacher yet.</td></tr>';
        return;
    }

    body.innerHTML = assignedStudents.map((student) => `
        <tr>
            <td><strong>${student.name}</strong><small>${student.id}</small></td>
            <td><span class="country-badge">${student.country}</span></td>
            <td>${student.level}</td>
            <td>${student.lessons}</td>
            <td><span class="status-pill ${statusClass(student.status)}">${student.status}</span></td>
        </tr>
    `).join('');
}

function renderTeacherDocuments(teacher = getSelectedTeacher()) {
    const body = document.getElementById('teacherDocumentsBody');
    if (!body) return;

    body.innerHTML = teacherDocuments.map((documentRecord, index) => `
        <tr>
            <td class="strong">${escapeHtml(documentRecord.title)}</td>
            <td>${escapeHtml(documentRecord.category)}</td>
            <td><span class="document-file-badge">${escapeHtml(documentRecord.type)}</span></td>
            <td>${escapeHtml(documentRecord.updated)}</td>
            <td><span class="status-pill ${documentRecord.status === 'Expiring Soon' ? 'warning' : 'positive'}">${escapeHtml(documentRecord.status)}</span></td>
            <td><div class="employee-record-actions"><button type="button" data-teacher-document-view="${index}">View</button></div></td>
        </tr>
    `).join('');

    body.querySelectorAll('[data-teacher-document-view]').forEach((button) => {
        button.addEventListener('click', () => openTeacherDocumentViewer(Number(button.dataset.teacherDocumentView), teacher));
    });
}

function getEmployeeDocuments(kind) {
    return kind === 'staff' ? staffDocuments : teacherDocuments;
}

function getEmployeeDocumentOwner(kind) {
    return kind === 'staff' ? getSelectedStaff() : getSelectedTeacher();
}

function getEmployeeKindLabel(kind) {
    return kind === 'staff' ? 'Staff' : 'Teacher';
}

function getDocumentPageHeading(documentRecord, page, totalPages) {
    if (documentRecord.category === 'Contract') {
        return page === 1
            ? 'Teacher Service Agreement'
            : page === 2
                ? 'Role and Responsibilities'
                : page === 3
                    ? 'Confidentiality and Conduct'
                    : 'Acknowledgment and Signatures';
    }
    return page === totalPages ? 'Verification and Approval' : documentRecord.title;
}

function updateTeacherDocumentPage() {
    const overlay = document.getElementById('teacherDocumentViewerOverlay');
    if (!overlay) return;

    const index = Number(overlay.dataset.documentIndex || 0);
    const page = Number(overlay.dataset.documentPage || 1);
    const kind = overlay.dataset.documentKind || activeEmployeeDocumentKind || 'teacher';
    const documents = getEmployeeDocuments(kind);
    const documentRecord = documents[index] || documents[0];
    const totalPages = documentRecord.category === 'Contract' ? 4 : 2;
    const employee = getEmployeeDocumentOwner(kind);

    setText('#documentPageStatus', `Page ${page} of ${totalPages}`);
    setText('#documentPdfLabel', `${documentRecord.category.toUpperCase()} · PAGE ${page}`);
    setText('#documentPdfHeading', getDocumentPageHeading(documentRecord, page, totalPages));
    setText('#documentPdfSubheading', documentRecord.category === 'Contract' ? 'Terms and information' : 'Verified document information');
    setText('#documentPdfFooter', `VLACE protected preview · Page ${page} of ${totalPages}`);
    setText('#documentPdfEmployee', employee?.name || 'Maria Santos');
    setText('#documentPdfDetailEmployee', employee?.name || 'Maria Santos');
    setText('#documentPdfSignature', employee?.name || 'Maria Santos');

    const previous = document.getElementById('documentPagePrevious');
    const next = document.getElementById('documentPageNext');
    if (previous) previous.disabled = page === 1;
    if (next) next.disabled = page === totalPages;
}

function openTeacherDocumentViewer(index, teacher = getSelectedTeacher()) {
    openEmployeeDocumentViewer('teacher', index, teacher);
}

function openEmployeeDocumentViewer(kind, index, employee = getEmployeeDocumentOwner(kind)) {
    const documents = getEmployeeDocuments(kind);
    const documentRecord = documents[index] || documents[0];
    const overlay = document.getElementById('teacherDocumentViewerOverlay');
    if (!overlay || !documentRecord) return;

    activeEmployeeDocumentKind = kind;
    overlay.dataset.documentKind = kind;
    overlay.dataset.documentIndex = String(index);
    overlay.dataset.documentPage = '1';
    const fileName = `${documentRecord.title.toLowerCase().replaceAll(' ', '-')}.pdf`;
    setText('#documentViewTitle', documentRecord.title);
    setText('#documentViewEmployee', employee?.name || 'Maria Santos');
    setText('#documentPdfDetailEmployee', employee?.name || 'Maria Santos');
    const kindNode = document.querySelector('#documentViewEmployee')?.nextElementSibling;
    if (kindNode) kindNode.textContent = getEmployeeKindLabel(kind);
    setText('#documentViewCategory', documentRecord.category);
    setText('#documentViewUpdated', documentRecord.updated);
    setText('#documentViewStatus', documentRecord.status);
    setText('#documentViewFileName', fileName);
    setText('#documentPdfDetailStatus', documentRecord.status);
    setText('#documentPdfDetailUpdated', documentRecord.updated);
    setText('#documentPdfDetailType', documentRecord.category);
    const status = document.getElementById('documentViewStatus');
    if (status) status.className = `status-pill ${documentRecord.status === 'Expiring Soon' ? 'warning' : 'positive'}`;

    updateTeacherDocumentPage();
    overlay.removeAttribute('hidden');
    document.body.classList.add('drawer-open');
    refreshIcons();
}

function closeTeacherDocumentViewer() {
    document.getElementById('teacherDocumentViewerOverlay')?.setAttribute('hidden', '');
    document.body.classList.remove('drawer-open');
}

function openTeacherDocumentUpload() {
    openEmployeeDocumentUpload('teacher');
}

function openEmployeeDocumentUpload(kind) {
    const employee = getEmployeeDocumentOwner(kind);
    activeEmployeeDocumentKind = kind;
    setText('#teacherDocumentUploadInitials', getInitials(employee?.name || 'Maria Santos'));
    setText('#teacherDocumentUploadName', employee?.name || 'Maria Santos');
    const employeeMeta = document.querySelector('#teacherDocumentUploadName')?.nextElementSibling;
    if (employeeMeta) employeeMeta.textContent = `${getEmployeeKindLabel(kind)} · Employee record`;
    setFieldValue('#teacherDocumentTitle', '');
    setFieldValue('#teacherDocumentCategory', 'Contract');
    setFieldValue('#teacherDocumentStatus', 'Pending Review');
    setFieldValue('#teacherDocumentIssueDate', '');
    setFieldValue('#teacherDocumentExpiryDate', '');
    setFieldValue('#teacherDocumentVisibility', 'Admin & Manager Only');
    setFieldValue('#teacherDocumentNotes', '');
    setFieldValue('#teacherDocumentFile', '');
    setText('#teacherDocumentFileName', 'Choose a file to upload');
    setText('#teacherDocumentFileMeta', 'Click to browse your computer');
    document.getElementById('teacherDocumentDrop')?.classList.remove('has-file');
    document.getElementById('teacherDocumentNotify')?.classList.remove('on');
    document.getElementById('teacherDocumentNotify')?.setAttribute('aria-checked', 'false');
    document.getElementById('teacherDocumentUploadOverlay')?.removeAttribute('hidden');
    document.body.classList.add('drawer-open');
}

function closeTeacherDocumentUpload() {
    document.getElementById('teacherDocumentUploadOverlay')?.setAttribute('hidden', '');
    document.body.classList.remove('drawer-open');
}

function updateTeacherDocumentFileLabel() {
    const file = document.getElementById('teacherDocumentFile')?.files?.[0];
    const drop = document.getElementById('teacherDocumentDrop');
    if (!file) {
        setText('#teacherDocumentFileName', 'Choose a file to upload');
        setText('#teacherDocumentFileMeta', 'Click to browse your computer');
        drop?.classList.remove('has-file');
        return;
    }

    setText('#teacherDocumentFileName', file.name);
    setText('#teacherDocumentFileMeta', `${(file.size / 1024 / 1024).toFixed(2)} MB · Ready to add`);
    drop?.classList.add('has-file');
}

function saveTeacherDocumentUpload() {
    const title = document.getElementById('teacherDocumentTitle')?.value.trim();
    if (!title) return;

    const documents = getEmployeeDocuments(activeEmployeeDocumentKind);
    documents.unshift({
        title,
        category: document.getElementById('teacherDocumentCategory')?.value || 'Contract',
        type: 'PDF',
        updated: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        status: document.getElementById('teacherDocumentStatus')?.value || 'Pending Review',
    });
    if (activeEmployeeDocumentKind === 'staff') {
        renderStaffDocuments();
        addStaffActivity('Document uploaded', `${title} was added to the staff document record.`);
    } else {
        renderTeacherDocuments();
    }
    closeTeacherDocumentUpload();
    showSparkToast(`${title} was added as a view-only document.`);
}

function getFeedbackVisibilityLabel(visibility) {
    return visibility === 'Employee & Management' ? 'Published' : visibility;
}

function getEmployeeFeedbackRecords(kind) {
    return kind === 'staff' ? staffFeedbackRecords : teacherFeedbackRecords;
}

function getEmployeeFeedbackOwner(kind) {
    return kind === 'staff' ? getSelectedStaff() : getSelectedTeacher();
}

function getEmployeeDefaultFeedbackItems(kind) {
    return kind === 'staff'
        ? [
            { area: 'Quality of Work', rating: 'Excellent', comment: 'Produces accurate work and follows the approved operating process.' },
            { area: 'Communication', rating: 'Very Good', comment: 'Communicates clearly with students, guardians, teachers, and operations.' },
            { area: 'Reliability & Attendance', rating: 'Excellent', comment: 'Reports on time and completes assigned shifts consistently.' },
            { area: 'Customer Care', rating: 'Very Good', comment: 'Handles concerns professionally and documents follow-ups.' },
        ]
        : teacherFeedbackDefaultItems.map((item) => ({ ...item, comment: item.comment || 'Review item prepared for the teacher.' }));
}

function getTeacherFeedbackRecord(index) {
    return teacherFeedbackRecords[index] || teacherFeedbackRecords[0];
}

function getEmployeeFeedbackRecord(kind, index) {
    const records = getEmployeeFeedbackRecords(kind);
    const record = records[index] || records[0];
    if (!record) return null;
    if (!record.items) {
        record.summary = record.summary || `${record.type} for ${getEmployeeFeedbackOwner(kind)?.name || 'employee'}.`;
        record.items = getEmployeeDefaultFeedbackItems(kind);
    }
    return record;
}

function renderTeacherFeedbackRecords(teacher = getSelectedTeacher()) {
    const body = document.getElementById('teacherFeedbackRecordsBody');
    if (!body) return;

    body.innerHTML = teacherFeedbackRecords.map((record, index) => `
        <tr>
            <td>${escapeHtml(record.period)}</td>
            <td><button class="feedback-type-link" type="button" data-teacher-feedback-view="${index}" aria-label="View ${escapeHtml(record.type)} feedback">${escapeHtml(record.type)}</button></td>
            <td>${escapeHtml(record.reviewedBy)}</td>
            <td>${escapeHtml(record.result)}</td>
            <td><span class="status-pill ${record.visibility === 'Private' || record.visibility === 'Management Only' ? 'neutral' : 'positive'}">${escapeHtml(getFeedbackVisibilityLabel(record.visibility))}</span></td>
            <td><span class="acknowledgment-status ${record.acknowledged ? 'is-acknowledged' : 'is-pending'}">${record.acknowledged ? '✓ Acknowledged' : 'Pending'}</span></td>
            <td><div class="employee-record-actions"><button type="button" data-teacher-feedback-view="${index}">View</button></div></td>
        </tr>
    `).join('');

    body.querySelectorAll('[data-teacher-feedback-view]').forEach((button) => {
        button.addEventListener('click', () => openTeacherFeedbackDetails(Number(button.dataset.teacherFeedbackView), teacher));
    });
}

function renderTeacherFeedbackDetailsItems(record) {
    const list = document.getElementById('teacherFeedbackDetailsItems');
    if (!list) return;

    list.innerHTML = record.items.map((item, index) => `
        <article class="${record.acknowledged ? 'acknowledged' : ''}">
            <div class="feedback-line-number">${index + 1}</div>
            <div class="feedback-line-content">
                <div class="feedback-line-title">
                    <h3>${escapeHtml(item.area)}</h3>
                    <span>${escapeHtml(item.rating)}</span>
                </div>
                <p>${escapeHtml(item.comment)}</p>
                <button class="${record.acknowledged ? 'acknowledged' : ''}" type="button" data-teacher-feedback-ack="${index}">${record.acknowledged ? '✓ Acknowledged' : 'Acknowledge this item'}</button>
                ${record.acknowledged ? '<small>Acknowledged by Maria Santos · Recorded in employee activity log</small>' : ''}
            </div>
        </article>
    `).join('');

    list.querySelectorAll('[data-teacher-feedback-ack]').forEach((button) => {
        button.addEventListener('click', () => {
            button.classList.toggle('acknowledged', true);
            button.textContent = '✓ Acknowledged';
            updateTeacherFeedbackAckProgress();
        });
    });
}

function updateTeacherFeedbackAckProgress() {
    const buttons = Array.from(document.querySelectorAll('#teacherFeedbackDetailsItems [data-teacher-feedback-ack]'));
    const acknowledgedCount = buttons.filter((button) => button.classList.contains('acknowledged')).length;
    setText('#teacherFeedbackAckProgress', `${acknowledgedCount} of ${buttons.length}`);
    const complete = document.getElementById('teacherFeedbackAcknowledge');
    if (complete) complete.disabled = buttons.length > 0 && acknowledgedCount !== buttons.length;
}

function openTeacherFeedbackDetails(index, teacher = getSelectedTeacher()) {
    openEmployeeFeedbackDetails('teacher', index, teacher);
}

function openEmployeeFeedbackDetails(kind, index, employee = getEmployeeFeedbackOwner(kind)) {
    const record = getEmployeeFeedbackRecord(kind, index);
    const overlay = document.getElementById('teacherFeedbackDetailsOverlay');
    if (!record || !overlay) return;

    activeEmployeeFeedbackKind = kind;
    overlay.dataset.feedbackIndex = String(index);
    overlay.dataset.feedbackKind = kind;
    setText('#teacherFeedbackDetailsKicker', `ADMIN FEEDBACK MANAGEMENT · ${record.period.toUpperCase()}`);
    setText('#teacherFeedbackDetailsTitle', 'View Feedback');
    setText('#teacherFeedbackDetailsSubtitle', `${record.type} · Reviewed by ${record.reviewedBy}`);
    setText('#teacherFeedbackDetailsResult', record.result);
    setText('#teacherFeedbackDetailsVisibility', getFeedbackVisibilityLabel(record.visibility));
    setFieldValue('#teacherFeedbackEmployeeNote', '');
    const visibility = document.getElementById('teacherFeedbackDetailsVisibility');
    if (visibility) visibility.className = `status-pill ${record.visibility === 'Private' || record.visibility === 'Management Only' ? 'neutral' : 'positive'}`;
    renderTeacherFeedbackDetailsItems(record);
    updateTeacherFeedbackAckProgress();
    overlay.removeAttribute('hidden');
    document.body.classList.add('drawer-open');
    refreshIcons();
}

function closeTeacherFeedbackDetails() {
    document.getElementById('teacherFeedbackDetailsOverlay')?.setAttribute('hidden', '');
    document.body.classList.remove('drawer-open');
}

function completeTeacherFeedbackAcknowledgment() {
    const overlay = document.getElementById('teacherFeedbackDetailsOverlay');
    const index = Number(overlay?.dataset.feedbackIndex || 0);
    const kind = overlay?.dataset.feedbackKind || activeEmployeeFeedbackKind || 'teacher';
    const record = getEmployeeFeedbackRecord(kind, index);
    const buttons = Array.from(document.querySelectorAll('#teacherFeedbackDetailsItems [data-teacher-feedback-ack]'));
    if (buttons.some((button) => !button.classList.contains('acknowledged'))) {
        showSparkToast('Please acknowledge each feedback item before completing.');
        return;
    }

    record.acknowledged = true;
    if (kind === 'staff') renderStaffFeedback();
    else renderTeacherFeedbackRecords();
    closeTeacherFeedbackDetails();
    showSparkToast(`${record.type} was acknowledged by the ${kind === 'staff' ? 'staff member' : 'teacher'}.`);
}

function renderTeacherFeedbackBuilder() {
    const builder = document.getElementById('teacherFeedbackBuilder');
    if (!builder) return;

    builder.innerHTML = teacherFeedbackDraftItems.map((item, index) => `
        <article>
            <div class="feedback-builder-top">
                <strong>Item ${index + 1}</strong>
                ${teacherFeedbackDraftItems.length > 1 ? `<button type="button" data-remove-feedback-item="${index}">Remove</button>` : ''}
            </div>
            <div class="add-feedback-grid">
                <label>Performance Area<input data-feedback-item-area="${index}" value="${escapeHtml(item.area)}"></label>
                <label>Rating
                    <select data-feedback-item-rating="${index}">
                        ${['Excellent', 'Very Good', 'Exceeds Expectations', 'Meets Expectations', 'Needs Improvement', 'Development Goal'].map((rating) => `<option ${rating === item.rating ? 'selected' : ''}>${rating}</option>`).join('')}
                    </select>
                </label>
            </div>
            <label>Feedback Comment<textarea data-feedback-item-comment="${index}" placeholder="Describe the observation, impact, and expected next step…">${escapeHtml(item.comment)}</textarea></label>
        </article>
    `).join('');

    builder.querySelectorAll('[data-remove-feedback-item]').forEach((button) => {
        button.addEventListener('click', () => {
            syncTeacherFeedbackDraftItems();
            teacherFeedbackDraftItems.splice(Number(button.dataset.removeFeedbackItem), 1);
            renderTeacherFeedbackBuilder();
        });
    });
}

function syncTeacherFeedbackDraftItems() {
    teacherFeedbackDraftItems = teacherFeedbackDraftItems.map((item, index) => ({
        area: document.querySelector(`[data-feedback-item-area="${index}"]`)?.value.trim() || item.area,
        rating: document.querySelector(`[data-feedback-item-rating="${index}"]`)?.value || item.rating,
        comment: document.querySelector(`[data-feedback-item-comment="${index}"]`)?.value.trim() || '',
    }));
}

function openTeacherAddFeedback() {
    openEmployeeAddFeedback('teacher');
}

function openEmployeeAddFeedback(kind) {
    const employee = getEmployeeFeedbackOwner(kind);
    activeEmployeeFeedbackKind = kind;
    teacherFeedbackDraftItems = getEmployeeDefaultFeedbackItems(kind);
    setText('#teacherAddFeedbackInitials', getInitials(employee?.name || 'Maria Santos'));
    setText('#teacherAddFeedbackName', employee?.name || 'Maria Santos');
    const meta = document.querySelector('#teacherAddFeedbackName')?.nextElementSibling;
    if (meta) meta.textContent = `${getEmployeeKindLabel(kind)} · Reviewed by Van A.`;
    setText('#teacherAddFeedbackSubtitle', `Create a documented review for ${employee?.name || 'Maria Santos'}.`);
    setFieldValue('#teacherFeedbackType', kind === 'staff' ? 'Monthly Performance Review' : 'Teaching Quality & Classroom Performance');
    setFieldValue('#teacherFeedbackPeriod', 'August 2026');
    setFieldValue('#teacherFeedbackOverallResult', 'Meets Expectations');
    setFieldValue('#teacherFeedbackVisibility', 'Employee & Management');
    setFieldValue('#teacherFeedbackSummary', '');
    setText('#teacherFeedbackSummaryCount', '0 characters');
    document.getElementById('teacherFeedbackRequireAck')?.classList.add('on');
    document.getElementById('teacherFeedbackRequireAck')?.setAttribute('aria-checked', 'true');
    renderTeacherFeedbackBuilder();
    document.getElementById('teacherAddFeedbackOverlay')?.removeAttribute('hidden');
    document.body.classList.add('drawer-open');
}

function closeTeacherAddFeedback() {
    document.getElementById('teacherAddFeedbackOverlay')?.setAttribute('hidden', '');
    document.body.classList.remove('drawer-open');
}

function saveTeacherFeedback(mode = 'publish') {
    syncTeacherFeedbackDraftItems();
    const summary = document.getElementById('teacherFeedbackSummary')?.value.trim() || '';
    const period = document.getElementById('teacherFeedbackPeriod')?.value.trim() || 'August 2026';
    const type = document.getElementById('teacherFeedbackType')?.value || 'Teaching Quality & Classroom Performance';
    const result = document.getElementById('teacherFeedbackOverallResult')?.value || 'Meets Expectations';
    const visibility = mode === 'draft' ? 'Private' : (document.getElementById('teacherFeedbackVisibility')?.value || 'Employee & Management');
    const readyToPublish = summary && teacherFeedbackDraftItems.every((item) => item.comment.trim());

    if (mode === 'publish' && !readyToPublish) {
        showSparkToast('Please add a summary and comment for every feedback item before publishing.');
        return false;
    }

    const records = getEmployeeFeedbackRecords(activeEmployeeFeedbackKind);
    records.unshift({
        period,
        type,
        reviewedBy: 'Van A.',
        result,
        visibility,
        acknowledged: false,
        summary: summary || 'Private draft saved for management review.',
        items: teacherFeedbackDraftItems.map((item) => ({ ...item })),
    });
    if (activeEmployeeFeedbackKind === 'staff') {
        renderStaffFeedback();
        addStaffActivity('Feedback added', `${type} was saved for staff review.`);
    } else {
        renderTeacherFeedbackRecords();
    }
    closeTeacherAddFeedback();
    showSparkToast(mode === 'publish' ? 'Feedback published for acknowledgment.' : 'Feedback saved privately as a draft.');
    return true;
}

function getTeacherPolicyStorageKey(teacher = getSelectedTeacher()) {
    return `vlace-policy-acknowledgements-${teacher?.id || 'T1-001'}`;
}

function loadTeacherPolicyAcknowledgements(teacher = getSelectedTeacher()) {
    try {
        teacherPolicyAcknowledgements = JSON.parse(localStorage.getItem(getTeacherPolicyStorageKey(teacher)) || '{}');
    } catch {
        teacherPolicyAcknowledgements = {};
    }
}

function saveTeacherPolicyAcknowledgements(teacher = getSelectedTeacher()) {
    try {
        localStorage.setItem(getTeacherPolicyStorageKey(teacher), JSON.stringify(teacherPolicyAcknowledgements));
    } catch {
        // The prototype remains usable if local storage is unavailable.
    }
}

function renderTeacherPolicyFilters() {
    const filter = document.getElementById('teacherPolicyCategoryFilter');
    if (!filter || filter.dataset.ready === 'true') return;

    const categories = ['All categories', ...new Set(employeePolicyLibrary.map((policy) => policy.category))];
    filter.innerHTML = categories.map((category) => `<option>${escapeHtml(category)}</option>`).join('');
    filter.dataset.ready = 'true';
}

function getVisibleTeacherPolicies() {
    const category = document.getElementById('teacherPolicyCategoryFilter')?.value || 'All categories';
    const search = (document.getElementById('teacherPolicySearch')?.value || '').trim().toLowerCase();
    return employeePolicyLibrary.filter((policy) => {
        const matchesCategory = category === 'All categories' || policy.category === category;
        const matchesSearch = !search || `${policy.id} ${policy.title} ${policy.category}`.toLowerCase().includes(search);
        return matchesCategory && matchesSearch;
    });
}

function renderTeacherPolicyProgress() {
    const acknowledgedCount = Object.keys(teacherPolicyAcknowledgements).filter((id) => employeePolicyLibrary.some((policy) => policy.id === id)).length;
    const total = employeePolicyLibrary.length;
    setText('#teacherPolicyProgressCount', `${acknowledgedCount} of ${total}`);
    setText('#teacherPolicyProgressRemaining', `${total - acknowledgedCount} policies require review`);
    const bar = document.getElementById('teacherPolicyProgressBar');
    if (bar) bar.style.width = `${total ? (acknowledgedCount / total) * 100 : 0}%`;
}

function renderTeacherPolicyLibrary(teacher = getSelectedTeacher()) {
    const body = document.getElementById('teacherPolicyTableBody');
    if (!body) return;

    loadTeacherPolicyAcknowledgements(teacher);
    renderTeacherPolicyFilters();
    setText('#teacherPolicyEmployeeName', teacher?.name || 'Maria Santos');
    setText('#teacherPolicyEmployeeId', teacher?.id || 'T1-001');
    renderTeacherPolicyProgress();

    const visiblePolicies = getVisibleTeacherPolicies();
    body.innerHTML = visiblePolicies.map((policy) => {
        const date = teacherPolicyAcknowledgements[policy.id];
        return `
            <tr>
                <td>
                    <button class="policy-title-link" type="button" data-teacher-policy="${policy.id}">
                        <span>▤</span>
                        <div><strong>${escapeHtml(policy.title)}</strong><small>${escapeHtml(policy.id)}</small></div>
                    </button>
                </td>
                <td>${escapeHtml(policy.category)}</td>
                <td>${escapeHtml(policy.effective)}</td>
                <td><span class="acknowledgment-status ${date ? 'is-acknowledged' : 'is-pending'}">${date ? '✓ Acknowledged' : 'Pending'}</span></td>
                <td>${date ? `<span class="policy-ack-date">${escapeHtml(date)}</span>` : '<span class="policy-not-yet">—</span>'}</td>
                <td><button class="row-action" type="button" data-teacher-policy="${policy.id}">${date ? 'View' : 'Review & Acknowledge'}</button></td>
            </tr>
        `;
    }).join('');

    if (!visiblePolicies.length) {
        body.innerHTML = '<tr><td colspan="6" class="empty-row">No policies match the current search.</td></tr>';
    }

    body.querySelectorAll('[data-teacher-policy]').forEach((button) => {
        button.addEventListener('click', () => openTeacherPolicyModal(button.dataset.teacherPolicy));
    });
}

function openTeacherPolicyModal(policyId) {
    const policy = employeePolicyLibrary.find((item) => item.id === policyId) || employeePolicyLibrary[0];
    const teacher = getSelectedTeacher();
    const overlay = document.getElementById('teacherPolicyModal');
    if (!policy || !overlay) return;

    overlay.dataset.policyId = policy.id;
    setText('#teacherPolicyModalKicker', `${policy.id} · VERSION ${policy.version}`);
    setText('#teacherPolicyModalTitle', policy.title);
    setText('#teacherPolicyModalCategory', policy.category);
    setText('#teacherPolicyModalEffective', policy.effective);
    setText('#teacherPolicyModalSummary', policy.summary);
    const requirements = document.getElementById('teacherPolicyModalRequirements');
    if (requirements) {
        requirements.innerHTML = policy.requirements.map((requirement, index) => `<li><span>${index + 1}</span><p>${escapeHtml(requirement)}</p></li>`).join('');
    }

    const ackState = document.getElementById('teacherPolicyAcknowledgeState');
    const submit = document.getElementById('teacherPolicySubmitAck');
    const date = teacherPolicyAcknowledgements[policy.id];
    if (ackState) {
        ackState.innerHTML = date
            ? `<div class="employee-policy-complete"><span>✓</span><div><strong>Permanently acknowledged</strong><p>${escapeHtml(teacher?.name || 'Maria Santos')} · ${escapeHtml(teacher?.id || 'T1-001')} · ${escapeHtml(date)}</p></div></div>`
            : `<label class="employee-policy-confirm"><input type="checkbox" id="teacherPolicyConfirmAck"><span><strong>I acknowledge this policy</strong><small>I confirm that I have received, read, and understood this policy. I understand that this acknowledgement is permanent and cannot be reversed.</small></span></label>`;
    }
    if (submit) {
        submit.hidden = Boolean(date);
        submit.disabled = true;
    }
    document.getElementById('teacherPolicyConfirmAck')?.addEventListener('change', (event) => {
        const button = document.getElementById('teacherPolicySubmitAck');
        if (button) button.disabled = !event.target.checked;
    });

    overlay.removeAttribute('hidden');
}

function closeTeacherPolicyModal() {
    document.getElementById('teacherPolicyModal')?.setAttribute('hidden', '');
}

function acknowledgeTeacherPolicy() {
    const overlay = document.getElementById('teacherPolicyModal');
    const policyId = overlay?.dataset.policyId;
    const teacher = getSelectedTeacher();
    if (!policyId || !document.getElementById('teacherPolicyConfirmAck')?.checked) return;

    teacherPolicyAcknowledgements[policyId] = 'August 4, 2026 · 4:40 PM PHT';
    saveTeacherPolicyAcknowledgements(teacher);
    closeTeacherPolicyModal();
    renderTeacherPolicyLibrary(teacher);
    const policy = employeePolicyLibrary.find((item) => item.id === policyId);
    showSparkToast(`${policy?.title || 'Policy'} was permanently acknowledged by ${teacher?.name || 'the teacher'}.`);
}

function formatPeso(amount) {
    return `₱${phpFormatter.format(amount)}`;
}

function getTeacherHourlyRate(teacher) {
    return Number(String(teacher.rate).replace(/[^\d.]/g, '')) || 0;
}

function getPayableHours(minutes) {
    return Number(minutes) === 25 ? 0.5 : 1;
}

function getTeacherPayrollPeriod() {
    const select = document.getElementById('teacherPayrollPeriodSelect');
    return select?.value || teacherPayrollPeriodNames[0];
}

function getTeacherPayrollSummary(teacher, period) {
    const rate = getTeacherHourlyRate(teacher);
    const records = teacherPayrollRecords[period] || [];
    const deductions = teacherPayrollDeductions.filter((item) => item.period === period);
    const appliedDeductions = deductions.filter((item) => item.status !== 'Waived');
    const hours = records.reduce((sum, lesson) => sum + getPayableHours(lesson.actualMinutes), 0);
    const gross = records.reduce((sum, lesson) => (
        lesson.status === 'Completed' ? sum + (getPayableHours(lesson.actualMinutes) * rate) : sum
    ), 0);
    const deductionTotal = appliedDeductions.reduce((sum, item) => sum + item.amount, 0);

    return {
        rate,
        records,
        deductions,
        appliedDeductions,
        hours,
        gross,
        deductionTotal,
        net: Math.max(0, gross - deductionTotal),
    };
}

function getPayrollReceiptKey(teacher, period) {
    return `${teacher.id}|${period}`;
}

function getStaffPayrollReceiptKey(staff, cutoff) {
    return `${staff.id}|staff|${cutoff}`;
}

function getPayrollReceiptBrandSvg(documentLabel) {
    const brandName = escapeHtml(getCompanyBrandName());
    const label = escapeHtml(documentLabel);
    const logoUrl = companyBrandingState.logoUrl || new URL(defaultCompanyLogoUrl, window.location.href).href;
    const logo = `<image x="115" y="92" width="92" height="92" href="${escapeHtml(logoUrl)}" preserveAspectRatio="xMidYMid meet"/>`;

    return `
        ${logo}
        <text x="215" y="145" fill="#ffffff" font-family="Arial, sans-serif" font-size="42" font-weight="800">${brandName}</text>
        <text x="215" y="182" fill="#c8d8e8" font-family="Arial, sans-serif" font-size="20" font-weight="700">${label}</text>
    `;
}

function applyPayslipBranding(documentLabel) {
    const logoHolder = document.querySelector('[data-payslip-logo-holder]');
    const brandName = document.querySelector('[data-payslip-brand-name]');
    const label = document.querySelector('[data-payslip-document-label]');

    if (logoHolder) logoHolder.outerHTML = renderCompanyLogoMark('payslip-logo-mark').replace('<span', '<span data-payslip-logo-holder').replace('<img', '<img data-payslip-logo-holder');
    if (brandName) brandName.textContent = getCompanyBrandName();
    if (label) label.textContent = documentLabel;
}

function getDefaultPayrollReceipt(teacher, period, summary) {
    const status = period.startsWith('January') ? 'For Review' : 'Paid';
    if (status !== 'Paid') return null;

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1180" viewBox="0 0 900 1180">
            <rect width="900" height="1180" fill="#f7fbff"/>
            <rect x="70" y="70" width="760" height="1040" rx="28" fill="#ffffff" stroke="#d9e5f2" stroke-width="3"/>
            <rect x="70" y="70" width="760" height="150" rx="28" fill="#0f3158"/>
            ${getPayrollReceiptBrandSvg('Teacher Payroll Payment Receipt')}
            <text x="115" y="290" fill="#6d86a3" font-family="Arial, sans-serif" font-size="18" font-weight="800">TEACHER</text>
            <text x="115" y="330" fill="#102b4d" font-family="Arial, sans-serif" font-size="32" font-weight="800">${escapeHtml(teacher.name)}</text>
            <text x="115" y="365" fill="#607891" font-family="Arial, sans-serif" font-size="20">${escapeHtml(teacher.id)} · ${escapeHtml(teacher.country)} · ${escapeHtml(teacher.type)}</text>
            <text x="115" y="450" fill="#6d86a3" font-family="Arial, sans-serif" font-size="18" font-weight="800">PAYROLL PERIOD</text>
            <text x="115" y="490" fill="#102b4d" font-family="Arial, sans-serif" font-size="28" font-weight="800">${escapeHtml(period)}</text>
            <text x="115" y="575" fill="#6d86a3" font-family="Arial, sans-serif" font-size="18" font-weight="800">GROSS PAY</text>
            <text x="115" y="615" fill="#102b4d" font-family="Arial, sans-serif" font-size="30" font-weight="800">${formatPeso(summary.gross)}</text>
            <text x="115" y="700" fill="#6d86a3" font-family="Arial, sans-serif" font-size="18" font-weight="800">DEDUCTIONS</text>
            <text x="115" y="740" fill="#b43d38" font-family="Arial, sans-serif" font-size="30" font-weight="800">− ${formatPeso(summary.deductionTotal)}</text>
            <rect x="115" y="810" width="670" height="130" rx="18" fill="#f0faf5" stroke="#abd1bd" stroke-width="2"/>
            <text x="145" y="860" fill="#16764b" font-family="Arial, sans-serif" font-size="18" font-weight="800">NET PAYROLL PAID</text>
            <text x="145" y="910" fill="#16764b" font-family="Arial, sans-serif" font-size="42" font-weight="900">${formatPeso(summary.net)}</text>
            <text x="115" y="1015" fill="#607891" font-family="Arial, sans-serif" font-size="18">Generated by ${escapeHtml(getCompanyBrandName())} Admin Dashboard</text>
            <text x="115" y="1050" fill="#607891" font-family="Arial, sans-serif" font-size="18">Receipt No. VLACE-${escapeHtml(teacher.id.replace(/[^A-Z0-9]/gi, ''))}-${escapeHtml(period.replace(/[^A-Z0-9]/gi, '').slice(0, 10))}</text>
        </svg>
    `;

    return {
        url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
        name: `VLACE Payroll Receipt - ${teacher.name} - ${period}.svg`,
        uploadedAt: 'System receipt',
        isDefault: true,
    };
}

function getPayrollReceipt(teacher, period) {
    const key = getPayrollReceiptKey(teacher, period);
    return payrollReceiptUploads[key] || getDefaultPayrollReceipt(teacher, period, getTeacherPayrollSummary(teacher, period));
}

function renderTeacherPayroll(teacher) {
    const select = document.getElementById('teacherPayrollPeriodSelect');
    if (!select) return;

    const previousPeriod = select.value || teacherPayrollPeriodNames[0];
    select.innerHTML = teacherPayrollPeriodNames.map((period) => `<option value="${escapeHtml(period)}">${escapeHtml(period)}</option>`).join('');
    select.value = teacherPayrollPeriodNames.includes(previousPeriod) ? previousPeriod : teacherPayrollPeriodNames[0];

    const period = getTeacherPayrollPeriod();
    const summary = getTeacherPayrollSummary(teacher, period);

    renderTeacherPayrollHistory(teacher, period);
    renderTeacherPayrollDetails(teacher, period, summary);
    renderTeacherPayrollDeductions(teacher, summary);

    setText('#teacherPayrollRate', formatPeso(summary.rate));
    setText('#teacherPayrollCompleted', String(summary.records.length));
    setText('#teacherPayrollHours', `${summary.hours} payable hour${summary.hours === 1 ? '' : 's'}`);
    setText('#teacherPayrollGross', formatPeso(summary.gross));
    setText('#teacherPayrollDeductions', `− ${formatPeso(summary.deductionTotal)}`);
    setText('#teacherPayrollDeductionCount', `${summary.deductions.length} recorded adjustment${summary.deductions.length === 1 ? '' : 's'}`);
    setText('#teacherPayrollNet', formatPeso(summary.net));
    setText('#teacherPayrollSelectedTitle', `${period} — Detailed Calculation`);
    setText('#teacherPayrollSelectedHelp', `Each class is converted to payable hours and multiplied by ${formatPeso(summary.rate)} per hour.`);
    setText('#teacherPayrollTotalHours', `${summary.hours} hour${summary.hours === 1 ? '' : 's'}`);
    setText('#teacherPayrollTotalLessons', `${summary.records.length} completed lesson${summary.records.length === 1 ? '' : 's'}`);
    setText('#teacherPayrollTotalGross', formatPeso(summary.gross));
    setText('#teacherPayrollTotalDeductions', `− ${formatPeso(summary.deductionTotal)}`);
    setText('#teacherPayrollTotalNet', formatPeso(summary.net));
    setText('#teacherPayrollNetFormula', `${formatPeso(summary.gross)} − ${formatPeso(summary.deductionTotal)} = ${formatPeso(summary.net)}`);

    refreshIcons();
}

function renderTeacherPayrollHistory(teacher, selectedPeriod) {
    const body = document.getElementById('teacherPayrollHistoryBody');
    if (!body) return;

    body.innerHTML = teacherPayrollPeriodNames.map((period, periodIndex) => {
        const summary = getTeacherPayrollSummary(teacher, period);
        const status = period.startsWith('January') ? 'For Review' : 'Paid';
        const deduction = summary.deductionTotal ? `− ${formatPeso(summary.deductionTotal)}` : '—';
        const receipt = getPayrollReceipt(teacher, period);
        const receiptUploaded = Boolean(receipt);

        return `
            <tr class="${period === selectedPeriod ? 'selected-payroll-period' : ''}">
                <td>
                    <button type="button" class="payroll-period-link" data-payroll-period-index="${periodIndex}">
                        <strong>${escapeHtml(period)}</strong>
                        <small>${period.includes('1–15') ? '1st–15th payroll' : '16th–30th payroll'}</small>
                    </button>
                </td>
                <td>${summary.records.length}</td>
                <td>${summary.hours} hrs</td>
                <td>${formatPeso(summary.gross)}</td>
                <td class="${summary.deductionTotal ? 'deduction-amount' : ''}">${deduction}</td>
                <td class="pay-amount">${formatPeso(summary.net)}</td>
                <td><span class="status-pill ${status === 'Paid' ? 'positive' : 'warning'}">${status}</span></td>
                <td><button type="button" class="row-action" data-payroll-action="payslip" data-payroll-period-index="${periodIndex}">View</button></td>
                <td><button type="button" class="row-action" data-payroll-action="upload-receipt" data-payroll-period-index="${periodIndex}">${receiptUploaded ? 'Replace Receipt' : 'Upload Receipt'}</button></td>
                <td><button type="button" class="row-action" data-payroll-action="view-receipt" data-payroll-period-index="${periodIndex}" ${receiptUploaded ? '' : 'disabled'}>${receiptUploaded ? 'View Receipt' : 'No Receipt'}</button></td>
            </tr>
        `;
    }).join('');

    body.querySelectorAll('.payroll-period-link[data-payroll-period-index]').forEach((button) => {
        button.addEventListener('click', () => {
            const select = document.getElementById('teacherPayrollPeriodSelect');
            const period = teacherPayrollPeriodNames[Number(button.dataset.payrollPeriodIndex)] || selectedPeriod;
            if (select) select.value = period;
            renderTeacherPayroll(teacher);
        });
    });

    body.querySelectorAll('[data-payroll-action]').forEach((button) => {
        button.addEventListener('click', () => {
            const action = button.dataset.payrollAction;
            const period = teacherPayrollPeriodNames[Number(button.dataset.payrollPeriodIndex)] || selectedPeriod;
            if (action === 'payslip') openTeacherPayslip(teacher, period);
            if (action === 'upload-receipt') openPayrollReceiptUpload(teacher, period);
            if (action === 'view-receipt') openPayrollReceiptView(teacher, period);
        });
    });
}

function openTeacherPayslip(teacher, period) {
    const summary = getTeacherPayrollSummary(teacher, period);
    const status = period.startsWith('January') ? 'For Review' : 'Paid';
    const modal = document.getElementById('teacherPayslipModal');
    const lineItems = document.getElementById('teacherPayslipLineItems');
    if (!modal || !lineItems) return;

    applyPayslipBranding('Teacher Payroll Payslip');
    setText('#teacherPayslipTitle', `${teacher.name} Payslip`);
    setText('#teacherPayslipPeriod', period);
    setText('#teacherPayslipStatus', status);
    setText('#teacherPayslipName', teacher.name);
    setText('#teacherPayslipMeta', `${teacher.id} · ${teacher.country} · ${teacher.type}`);
    setText('#teacherPayslipIssued', `Issued ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · PHT`);
    setText('#payslipLessons', String(summary.records.length));
    setText('#payslipHours', `${summary.hours}`);
    setText('#payslipRate', `${formatPeso(summary.rate)}/hr`);
    setText('#payslipGross', formatPeso(summary.gross));
    setText('#payslipDeductions', `− ${formatPeso(summary.deductionTotal)}`);
    setText('#payslipNet', formatPeso(summary.net));

    const lessonRows = summary.records.map((lesson) => {
        const hours = getPayableHours(lesson.actualMinutes);
        const amount = hours * summary.rate;
        return `
            <tr>
                <td>${escapeHtml(lesson.date)}</td>
                <td><strong>${escapeHtml(lesson.student)}</strong><small>${escapeHtml(lesson.lesson)}</small></td>
                <td>${lesson.actualMinutes} min class · ${hours === 0.5 ? '30 min' : '1 hour'} payable</td>
                <td class="pay-amount">${formatPeso(amount)}</td>
            </tr>
        `;
    });

    const deductionRows = summary.deductions.map((item) => {
        const waived = item.status === 'Waived';
        return `
            <tr class="payslip-adjustment-row">
                <td>${escapeHtml(item.relatedDate || item.addedAt)}</td>
                <td><strong>${escapeHtml(item.reason)}</strong><small>${escapeHtml(item.id)} · ${escapeHtml(item.source)}</small></td>
                <td>${escapeHtml(item.note)} · ${escapeHtml(item.status)}</td>
                <td class="${waived ? 'waived-amount' : 'deduction-amount'}">${waived ? 'Waived' : `− ${formatPeso(item.amount)}`}</td>
            </tr>
        `;
    });

    lineItems.innerHTML = [...lessonRows, ...deductionRows].join('') || `
        <tr><td colspan="4" class="empty-row">No payroll records found for this period.</td></tr>
    `;

    modal.removeAttribute('hidden');
    refreshIcons();
}

function closeTeacherPayslip() {
    document.getElementById('teacherPayslipModal')?.setAttribute('hidden', '');
}

function openPayrollReceiptUpload(teacher, period) {
    const summary = getTeacherPayrollSummary(teacher, period);
    const receipt = getPayrollReceipt(teacher, period);
    activePayrollReceiptContext = { teacherId: teacher.id, period };

    setText('#payrollReceiptUploadTeacher', teacher.name);
    setText('#payrollReceiptUploadPeriod', period);
    setText('#payrollReceiptUploadAmount', formatPeso(summary.net));
    setFieldValue('#payrollReceiptFile', '');
    setText('#payrollReceiptUploadFileName', receipt ? receipt.name : 'No file selected');

    const preview = document.getElementById('payrollReceiptUploadPreview');
    const image = document.getElementById('payrollReceiptUploadImage');
    if (preview && image) {
        if (receipt) {
            image.src = receipt.url;
            preview.removeAttribute('hidden');
        } else {
            image.removeAttribute('src');
            preview.setAttribute('hidden', '');
        }
    }

    document.getElementById('payrollReceiptUploadModal')?.removeAttribute('hidden');
    refreshIcons();
}

function closePayrollReceiptUpload() {
    activePayrollReceiptContext = null;
    document.getElementById('payrollReceiptUploadModal')?.setAttribute('hidden', '');
}

function previewPayrollReceiptFile() {
    const file = document.getElementById('payrollReceiptFile')?.files?.[0];
    const preview = document.getElementById('payrollReceiptUploadPreview');
    const image = document.getElementById('payrollReceiptUploadImage');
    if (!file || !preview || !image) return;

    if (!file.type.startsWith('image/')) {
        showSparkToast('Please upload an image receipt file.');
        setFieldValue('#payrollReceiptFile', '');
        return;
    }

    const url = URL.createObjectURL(file);
    image.src = url;
    preview.dataset.previewUrl = url;
    preview.removeAttribute('hidden');
    setText('#payrollReceiptUploadFileName', file.name);
}

function savePayrollReceiptUpload() {
    const context = activePayrollReceiptContext;
    const file = document.getElementById('payrollReceiptFile')?.files?.[0];
    if (!context || !file) return;

    if (!file.type.startsWith('image/')) {
        showSparkToast('Please upload an image receipt file.');
        return;
    }

    if (context.kind === 'staff') {
        const staff = staffMembers.find((item) => item.id === context.staffId) || getSelectedStaff();
        const row = staffPayrollRows[context.rowIndex] || staffPayrollRows[0];
        if (!staff || !row) return;

        const key = getStaffPayrollReceiptKey(staff, row.cutoff);
        if (payrollReceiptUploads[key]?.url?.startsWith('blob:')) {
            URL.revokeObjectURL(payrollReceiptUploads[key].url);
        }

        payrollReceiptUploads[key] = {
            url: URL.createObjectURL(file),
            name: file.name,
            uploadedAt: `Uploaded ${formatPhtTime()} PHT`,
            isDefault: false,
        };

        closePayrollReceiptUpload();
        renderStaffPayroll();
        showSparkToast(`Payroll receipt uploaded for ${staff.name} · ${row.cutoff}.`);
        return;
    }

    const teacher = teachers.find((item) => item.id === context.teacherId) || getSelectedTeacher();
    if (!teacher) return;

    const key = getPayrollReceiptKey(teacher, context.period);
    if (payrollReceiptUploads[key]?.url?.startsWith('blob:')) {
        URL.revokeObjectURL(payrollReceiptUploads[key].url);
    }

    payrollReceiptUploads[key] = {
        url: URL.createObjectURL(file),
        name: file.name,
        uploadedAt: `Uploaded ${formatPhtTime()} PHT`,
        isDefault: false,
    };

    closePayrollReceiptUpload();
    renderTeacherPayroll(teacher);
    showSparkToast(`Payroll receipt saved for ${teacher.name} · ${context.period}.`);
}

function openPayrollReceiptView(teacher, period) {
    const receipt = getPayrollReceipt(teacher, period);
    if (!receipt) {
        showSparkToast(`No payroll receipt has been uploaded for ${period}.`);
        return;
    }

    setText('#payrollReceiptViewTitle', `${teacher.name} Payroll Receipt`);
    setText('#payrollReceiptViewTeacher', teacher.name);
    setText('#payrollReceiptViewPeriod', period);
    setText('#payrollReceiptViewUploaded', receipt.uploadedAt);
    setText('#payrollReceiptViewFileName', receipt.name);

    const image = document.getElementById('payrollReceiptViewImage');
    if (image) image.src = receipt.url;

    const download = document.getElementById('payrollReceiptDownload');
    if (download) {
        download.href = receipt.url;
        download.download = receipt.name;
    }

    document.getElementById('payrollReceiptViewModal')?.removeAttribute('hidden');
}

function closePayrollReceiptView() {
    document.getElementById('payrollReceiptViewModal')?.setAttribute('hidden', '');
}

function renderTeacherPayrollDetails(teacher, period, summary) {
    const body = document.getElementById('teacherPayrollDetailBody');
    if (!body) return;

    const dates = [...new Set([
        ...summary.records.map((record) => record.date),
        ...summary.deductions.map((item) => item.relatedDate).filter(Boolean),
    ])].sort((first, second) => new Date(first).getTime() - new Date(second).getTime());

    body.innerHTML = dates.flatMap((date) => {
        const dailyRecords = summary.records.filter((record) => record.date === date);
        const dailyDeductions = summary.deductions.filter((item) => item.relatedDate === date);
        const dailyHours = dailyRecords.reduce((sum, lesson) => sum + getPayableHours(lesson.actualMinutes), 0);
        const dailyGross = dailyRecords.reduce((sum, lesson) => sum + (getPayableHours(lesson.actualMinutes) * summary.rate), 0);
        const dailyDeductionTotal = dailyDeductions
            .filter((item) => item.status !== 'Waived')
            .reduce((sum, item) => sum + item.amount, 0);
        const rows = dailyRecords.map((lesson, index) => {
            const hours = getPayableHours(lesson.actualMinutes);
            const amount = lesson.status === 'Completed' ? hours * summary.rate : 0;
            return `
                <tr class="payroll-lesson-row ${date.startsWith('Dec 31') ? 'carryover-row' : ''}">
                    <td>${index === 0 ? `<strong>${escapeHtml(date)}</strong>${date.startsWith('Dec 31') ? '<small class="carryover-label">31ST CARRYOVER</small>' : ''}` : ''}</td>
                    <td>${escapeHtml(lesson.student)}</td>
                    <td>${escapeHtml(lesson.lesson)}</td>
                    <td>${lesson.actualMinutes} min</td>
                    <td>${hours === 0.5 ? '30 min' : '1 hour'}</td>
                    <td>${formatPeso(summary.rate)}/hr</td>
                    <td class="calculation">${hours} × ${formatPeso(summary.rate)}</td>
                    <td class="pay-amount">${formatPeso(amount)}</td>
                    <td>—</td>
                    <td class="pay-amount">${formatPeso(amount)}</td>
                </tr>
            `;
        });

        dailyDeductions.forEach((item, index) => {
            const waived = item.status === 'Waived';
            rows.push(`
                <tr class="payroll-deduction-row ${waived ? 'waived-deduction-row' : ''}">
                    <td>${!dailyRecords.length && index === 0 ? `<strong>${escapeHtml(date)}</strong>` : ''}</td>
                    <td>${escapeHtml(teacher.name)}</td>
                    <td><span class="deduction-reason">${escapeHtml(item.reason)}</span></td>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                    <td class="calculation">${escapeHtml(item.source)} attendance rule</td>
                    <td>—</td>
                    <td class="${waived ? 'waived-amount' : 'deduction-amount'}">${waived ? `Waived · ${formatPeso(item.amount)}` : `− ${formatPeso(item.amount)}`}</td>
                    <td class="${waived ? 'waived-amount' : 'deduction-amount'}">${waived ? 'Not applied' : `− ${formatPeso(item.amount)}`}</td>
                </tr>
            `);
        });

        rows.push(`
            <tr class="daily-total">
                <td colspan="4">Daily Total — ${escapeHtml(date)}</td>
                <td>${dailyHours} ${dailyHours === 1 ? 'hour' : 'hours'}</td>
                <td colspan="2">${dailyRecords.length} ${dailyRecords.length === 1 ? 'lesson' : 'lessons'}${dailyDeductions.length ? ` · ${dailyDeductions.length} deduction` : ''}</td>
                <td>${formatPeso(dailyGross)}</td>
                <td class="${dailyDeductionTotal ? 'deduction-amount' : ''}">${dailyDeductionTotal ? `− ${formatPeso(dailyDeductionTotal)}` : '—'}</td>
                <td>${formatPeso(Math.max(0, dailyGross - dailyDeductionTotal))}</td>
            </tr>
        `);

        return rows;
    }).join('');
}

function renderTeacherPayrollDeductions(teacher, summary) {
    const body = document.getElementById('teacherPayrollDeductionsBody');
    if (!body) return;

    if (!summary.deductions.length) {
        body.innerHTML = `
            <tr>
                <td colspan="7">
                    <div class="empty-deductions">
                        <strong>No deductions for this payroll period</strong>
                        <span>Gross lesson pay and net payroll are currently the same.</span>
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    body.innerHTML = summary.deductions.map((item) => {
        const waived = item.status === 'Waived';
        return `
            <tr class="${waived ? 'waived-deduction-row' : ''}">
                <td><strong>${escapeHtml(item.addedAt)}</strong><small class="deduction-id">${escapeHtml(item.id)}</small></td>
                <td><span class="deduction-reason">${escapeHtml(item.reason)}</span></td>
                <td>${escapeHtml(item.note)}<small class="manager-request-note">Visible to payroll audit only.</small></td>
                <td>${escapeHtml(item.relatedDate || '—')}</td>
                <td><strong>${escapeHtml(item.source)}</strong><small>${escapeHtml(item.addedBy)}</small></td>
                <td class="${waived ? 'waived-amount' : 'deduction-amount'}">${waived ? `<s>${formatPeso(item.amount)}</s><small>Not applied</small>` : `− ${formatPeso(item.amount)}`}</td>
                <td>
                    <span class="status-pill ${item.status === 'Applied' ? 'warning' : 'neutral'}">${escapeHtml(item.status)}</span>
                    <div class="deduction-actions">
                        <button type="button" data-deduction-action="waiver">Manager: Request Edit / Waiver</button>
                        <button type="button" class="approve-deduction" data-deduction-action="approve">Admin: Approve Waiver</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    body.querySelectorAll('[data-deduction-action]').forEach((button) => {
        button.addEventListener('click', () => showSparkToast(`${button.textContent.trim()} noted for ${teacher.name}.`));
    });
}

function getTeacherWeeklyDayMap(availability) {
    return availability.reduce((map, slot) => {
        slot.days.forEach((day) => {
            if (!map[day]) map[day] = [];
            slot.times.forEach((time) => {
                if (!map[day].includes(time)) map[day].push(time);
            });
            map[day].sort();
        });
        return map;
    }, {});
}

function getTeacherMeetingSource(teacher) {
    const platformOrder = [
        ['Voov', teacher.links.voov],
        ['Google Meet', teacher.links.meet],
        ['Teams', teacher.links.teams],
        ['Zoom', teacher.links.zoom],
    ];
    return platformOrder.find(([, value]) => Boolean(value)) || ['Missing', 'Needs URL / ID'];
}

function updateTeacherWeeklySchedule(teacher, availability) {
    const dayMap = getTeacherWeeklyDayMap(availability);
    const activeDays = Object.keys(dayMap);
    const slotCount = activeDays.reduce((total, day) => total + dayMap[day].length, 0);
    const [meetingPlatform] = getTeacherMeetingSource(teacher);

    setText('#teacherWeeklyDaysCount', String(activeDays.length));
    setText('#teacherWeeklySlotCount', String(slotCount));
    setText('#teacherWeeklyClassesToday', String(teacher.today));
    setText('#teacherWeeklyMeetingSource', meetingPlatform === 'Missing' ? 'Missing link' : 'Teacher profile');
    setText('#teacherWeeklyVoov', teacher.links.voov || 'Missing');
    setText('#teacherWeeklyMeet', teacher.links.meet || 'Missing');
    setText('#teacherWeeklyTeams', teacher.links.teams || 'Missing');
    setText('#teacherWeeklyZoom', teacher.links.zoom || 'Missing');

    document.querySelectorAll('[data-teacher-weekday]').forEach((card) => {
        const day = card.dataset.teacherWeekday;
        const times = dayMap[day] || [];
        card.classList.toggle('active', times.length > 0);
        card.querySelector('span').textContent = times.length
            ? times.map(inputTimeToDisplay).join(' · ')
            : 'No slots';
    });
}

function renderTeacherScheduleRows(teacher) {
    const body = document.getElementById('teacherScheduleBody');
    if (!body) return;

    const assignedStudents = students.filter((student) => student.teacher === teacher.name);
    const topics = ['Past Tense Review', 'Free Conversation', 'Grammar Practice', 'Speaking Fluency'];
    const dates = ['Jul 30, 2026', 'Aug 1, 2026', 'Aug 2, 2026', 'Aug 3, 2026'];
    const rows = assignedStudents.slice(0, Math.max(1, Math.min(teacher.today, 4)));
    const [meetingPlatform, meetingValue] = getTeacherMeetingSource(teacher);

    if (!rows.length) {
        body.innerHTML = '<tr><td colspan="10" class="empty-row">No classes are scheduled for this teacher today.</td></tr>';
        return;
    }

    body.innerHTML = rows.map((student, index) => {
        const topic = topics[index % topics.length];
        const isCompleted = index === 0;
        const hasAccess = meetingPlatform !== 'Missing' && isCompleted;
        const duration = (student.schedule?.duration || '25 minutes').replace('utes', '');
        return `
        <tr data-meeting-submitted="${isCompleted}" data-feedback-submitted="${isCompleted}">
            <td>${dates[index % dates.length]}</td>
            <td><button class="lesson-pdf-link" type="button"><span>PDF</span>${topic}</button></td>
            <td><strong>${student.name}</strong><small>${student.id} · ${student.country}</small></td>
            <td>${duration}</td>
            <td><span class="status-pill ${isCompleted ? 'positive' : 'neutral'}" data-lesson-status>${isCompleted ? 'Completed' : 'Scheduled'}</span></td>
            <td>${hasAccess ? `<button class="enter-classroom-button" type="button" data-lesson-action="classroom" data-lesson-topic="${topic}">Enter Classroom</button>` : '<span class="lesson-link-unavailable">Not ready</span>'}</td>
            <td>${isCompleted ? `<button class="feedback-button recording-view-button" type="button" data-lesson-action="recording" data-lesson-topic="${topic}">▶ View Recording</button>` : '<span class="lesson-link-unavailable">Not available</span>'}</td>
            <td><div class="teacher-feedback-actions"><button class="feedback-button" type="button" data-lesson-action="feedback" data-lesson-topic="${topic}">View</button><button class="feedback-button add-feedback-button" type="button" data-lesson-action="add-feedback" data-lesson-topic="${topic}">Add</button></div></td>
            <td><button class="feedback-button meeting-link-button" type="button" data-lesson-action="meeting-url" data-lesson-topic="${topic}">${isCompleted ? 'Update Video' : 'Add Video'}</button></td>
            <td>
                <select class="lesson-action-select" data-lesson-row-action>
                    <option value="">Select action</option>
                    <option value="student-absent">Student absent</option>
                    <option value="completed">Completed</option>
                </select>
            </td>
            <td>${isCompleted
                ? '<div class="feedback-approval-actions"><button class="reject-feedback" type="button" data-feedback-decision="Rejected">Reject</button><button class="approve-feedback" type="button" data-feedback-decision="Approved">✓ Approve</button></div>'
                : '<span class="feedback-decision-note">Awaiting teacher feedback</span>'}
            </td>
        </tr>
    `;
    }).join('');

    attachLessonActionHandlers();
}

function buildTeacherBookedSlots(teacher) {
    const assignedStudents = students.filter((student) => student.teacher === teacher.name);
    const topics = ['Free Conversation', 'Grammar Practice', 'Reading Review', 'Speaking Fluency'];
    const bookedTimes = ['19:00', '19:30', '20:00', '20:30', '18:30', '21:00'];
    const bookedDays = ['Wednesday', 'Sunday', 'Monday', 'Friday', 'Tuesday', 'Thursday'];

    return assignedStudents.slice(0, Math.max(1, Math.min(teacher.today, 6))).reduce((map, student, index) => {
        const day = bookedDays[index % bookedDays.length];
        const time = bookedTimes[index % bookedTimes.length];
        map[`${day}-${time}`] = {
            student,
            topic: topics[index % topics.length],
            platform: getTeacherMeetingSource(teacher)[0],
        };
        return map;
    }, {});
}

function renderTeacherWeeklyCalendar(teacher, availability) {
    const head = document.getElementById('teacherWeeklyCalendarHead');
    const body = document.getElementById('teacherWeeklyCalendarBody');
    if (!head || !body) return;

    const dayMap = getTeacherWeeklyDayMap(availability);
    const bookedSlots = buildTeacherBookedSlots(teacher);

    head.innerHTML = `
        <tr>
            <th>Time</th>
            ${teacherWeeklyCalendarDays.map((day) => `<th><strong>${day.short}</strong><span>${day.date}</span></th>`).join('')}
        </tr>
    `;

    body.innerHTML = teacherWeeklyCalendarTimes.map((time) => `
        <tr>
            <th>${inputTimeToRange(time)}</th>
            ${teacherWeeklyCalendarDays.map(({ day }) => {
                const booked = bookedSlots[`${day}-${time}`];
                const isOpen = Boolean(dayMap[day]?.includes(time));
                if (booked) {
                    return `
                        <td class="teacher-calendar-slot booked" data-slot-state="booked" data-slot-day="${day}" data-slot-time="${time}" data-slot-student="${booked.student.id}" data-slot-topic="${booked.topic}" data-slot-platform="${booked.platform}">
                            <strong>${booked.student.name}</strong>
                            <span>${booked.topic} · ${booked.platform}</span>
                        </td>
                    `;
                }

                return `
                    <td class="teacher-calendar-slot ${isOpen ? 'open' : 'closed'}" data-slot-state="${isOpen ? 'open' : 'closed'}" data-slot-day="${day}" data-slot-time="${time}">
                        <strong>${isOpen ? 'Open' : 'Closed'}</strong>
                        <span>${isOpen ? 'Teacher is available' : 'Teacher is not available'}</span>
                    </td>
                `;
            }).join('')}
        </tr>
    `).join('');

    updateTeacherOpenSlotCount();
}

function updateTeacherOpenSlotCount() {
    const openSlots = document.querySelectorAll('#teacherWeeklyCalendarBody .teacher-calendar-slot.open').length;
    setText('#teacherOpenSlotCount', `${openSlots} open time slot${openSlots === 1 ? '' : 's'}`);
}

function getTeacherSlotAvailableTeachers(country, day, time, currentTeacherName = '') {
    return teachers
        .filter((teacher) => teacher.country === country)
        .filter((teacher) => {
            const availability = teacherAvailability[teacher.name];
            return availability?.slots.some((slot) => slot.days.includes(day) && slot.times.includes(time));
        })
        .map((teacher) => teacher.name)
        .sort((first, second) => {
            if (first === currentTeacherName) return -1;
            if (second === currentTeacherName) return 1;
            return first.localeCompare(second);
        });
}

function updateTeacherSlotTeacherOptions(selectedTeacher = '') {
    const teacher = getSelectedTeacher();
    if (!teacher || !activeTeacherSlotCell) return;

    const day = activeTeacherSlotCell.dataset.slotDay;
    const time = activeTeacherSlotCell.dataset.slotTime;
    const studentId = document.getElementById('teacherSlotStudent')?.value;
    const student = students.find((item) => item.id === studentId);
    const country = student?.country || teacher.country;
    const options = getTeacherSlotAvailableTeachers(country, day, time, teacher.name);
    const select = document.getElementById('teacherSlotTeacher');
    const hint = document.getElementById('teacherSlotTeacherHint');
    if (!select) return;

    if (!options.length) {
        select.innerHTML = '<option>No available teachers</option>';
        select.disabled = true;
        if (hint) hint.textContent = `No ${country} teachers are available on ${day} at ${inputTimeToRange(time)}.`;
        return;
    }

    select.disabled = false;
    setSelectOptions('#teacherSlotTeacher', options, selectedTeacher && options.includes(selectedTeacher) ? selectedTeacher : options[0]);
    if (hint) hint.textContent = `${options.length} available teacher${options.length === 1 ? '' : 's'} for ${country} on ${day} at ${inputTimeToRange(time)}.`;
}

function updateTeacherSlotProgramOptions(selectedProgram = '') {
    const group = document.getElementById('teacherSlotCategory')?.value || getDefaultCurriculumGroup();
    const programs = getCurriculumPrograms(group);
    const program = selectedProgram && programs.includes(selectedProgram) ? selectedProgram : programs[0];
    setSelectOptions('#teacherSlotProgram', programs, program);
    updateTeacherSlotModuleOptions();
}

function updateTeacherSlotModuleOptions(selectedModule = '') {
    const program = document.getElementById('teacherSlotProgram')?.value || getCurriculumPrograms(getDefaultCurriculumGroup())[0];
    const modules = getCurriculumModules(program);
    const module = selectedModule && modules.includes(selectedModule) ? selectedModule : modules[0];
    setSelectOptions('#teacherSlotModule', modules, module);
    updateTeacherSlotLessonOptions();
}

function updateTeacherSlotLessonOptions(selectedLesson = '') {
    const group = document.getElementById('teacherSlotCategory')?.value || getDefaultCurriculumGroup();
    const program = document.getElementById('teacherSlotProgram')?.value || getCurriculumPrograms(group)[0];
    const module = document.getElementById('teacherSlotModule')?.value || getCurriculumModules(program)[0];
    const lessons = getCurriculumLessons(group, program, module);
    const lesson = selectedLesson && lessons.includes(selectedLesson) ? selectedLesson : lessons[0];
    setSelectOptions('#teacherSlotTopic', lessons, lesson);
}

function setTeacherSlotAction(action) {
    const isAssign = action === 'assign';
    const isTransfer = action === 'transfer';
    const isCancel = action === 'cancel';
    const isAvailability = action === 'open-slot' || action === 'close-slot';
    const form = document.getElementById('teacherSlotForm');
    if (form) form.dataset.action = action;

    document.getElementById('teacherSlotStudent')?.closest('label')?.toggleAttribute('hidden', isCancel || isAvailability);
    document.getElementById('teacherSlotStudentCountry')?.closest('label')?.toggleAttribute('hidden', isCancel || isAvailability);
    document.getElementById('teacherSlotStudentsWrap')?.toggleAttribute('hidden', isCancel || isAvailability);
    document.getElementById('teacherSlotTeacher')?.closest('label')?.toggleAttribute('hidden', isCancel || isAvailability);
    document.getElementById('teacherSlotDuration')?.closest('label')?.toggleAttribute('hidden', isCancel || isAvailability);
    document.getElementById('teacherSlotCategory')?.closest('label')?.toggleAttribute('hidden', !isAssign);
    document.getElementById('teacherSlotProgram')?.closest('label')?.toggleAttribute('hidden', !isAssign);
    document.getElementById('teacherSlotModule')?.closest('label')?.toggleAttribute('hidden', !isAssign);
    document.getElementById('teacherSlotTopic')?.closest('label')?.toggleAttribute('hidden', isCancel || isAvailability);

    const save = document.getElementById('teacherSlotSave');
    if (save) {
        save.textContent = isTransfer
            ? 'Transfer Class'
            : isCancel
                ? 'Confirm Cancellation'
                : action === 'open-slot'
                    ? 'Open Slot'
                    : action === 'close-slot'
                        ? 'Close Slot'
                        : 'Assign Class';
    }
}

function getTeacherSlotStudentIds() {
    const ids = [
        document.getElementById('teacherSlotStudent')?.value,
        ...Array.from(document.querySelectorAll('[data-teacher-slot-extra-student]')).map((field) => field.value),
    ];
    return [...new Set(ids.filter(Boolean))];
}

function getTeacherSlotCountryOptions() {
    return ['All Countries', ...new Set(students.map((student) => student.country))];
}

function getTeacherSlotFilteredStudents() {
    const country = document.getElementById('teacherSlotStudentCountry')?.value || 'All Countries';
    return students.filter((student) => country === 'All Countries' || student.country === country);
}

function renderTeacherSlotStudentOption(student, selectedId = '') {
    return `<option value="${escapeHtml(student.id)}" ${student.id === selectedId ? 'selected' : ''}>${escapeHtml(`${student.id} · ${student.name} · ${student.country}`)}</option>`;
}

function updateTeacherSlotStudentOptions(selectedIds = []) {
    const options = getTeacherSlotFilteredStudents();
    const primary = document.getElementById('teacherSlotStudent');
    if (!primary) return;

    const preferredPrimary = selectedIds[0] || primary.value;
    const primarySelection = options.some((student) => student.id === preferredPrimary)
        ? preferredPrimary
        : options[0]?.id || '';

    primary.innerHTML = options.length
        ? options.map((student) => renderTeacherSlotStudentOption(student, primarySelection)).join('')
        : '<option value="">No students in this country</option>';

    const extraSelections = selectedIds.length
        ? selectedIds.slice(1)
        : Array.from(document.querySelectorAll('[data-teacher-slot-extra-student]')).map((field) => field.value);
    resetTeacherSlotStudentRows(extraSelections.filter((id) => options.some((student) => student.id === id)));
    updateTeacherSlotTeacherOptions();
}

function getTeacherSlotStudentOptionsMarkup(selectedId = '') {
    return getTeacherSlotFilteredStudents().map((student) => renderTeacherSlotStudentOption(student, selectedId)).join('');
}

function addTeacherSlotStudentRow(selectedId = '') {
    const rows = document.getElementById('teacherSlotStudentRows');
    if (!rows) return;
    const existingIds = getTeacherSlotStudentIds();
    const fallbackId = getTeacherSlotFilteredStudents().find((student) => !existingIds.includes(student.id))?.id || getTeacherSlotFilteredStudents()[0]?.id || '';
    const rowSelection = selectedId || fallbackId;
    const row = document.createElement('div');
    row.className = 'teacher-slot-student-row';
    row.innerHTML = `
        <select data-teacher-slot-extra-student aria-label="Additional student">
            ${getTeacherSlotStudentOptionsMarkup(rowSelection)}
        </select>
        <button type="button" data-teacher-slot-remove-student>Remove</button>
    `;
    row.querySelector('[data-teacher-slot-remove-student]')?.addEventListener('click', () => row.remove());
    rows.appendChild(row);
}

function resetTeacherSlotStudentRows(selectedIds = []) {
    const rows = document.getElementById('teacherSlotStudentRows');
    if (!rows) return;
    rows.innerHTML = '';
    selectedIds.forEach((id) => addTeacherSlotStudentRow(id));
}

function openTeacherSlotModal(slot) {
    const teacher = getSelectedTeacher();
    if (!teacher || !slot) return;

    activeTeacherSlotCell = slot;
    const day = slot.dataset.slotDay;
    const time = slot.dataset.slotTime;
    const state = slot.dataset.slotState;
    const isBooked = state === 'booked';
    const bookedStudentIds = (slot.dataset.slotStudents || slot.dataset.slotStudent || '').split(',').filter(Boolean);
    const bookedStudent = students.find((student) => student.id === (bookedStudentIds[0] || slot.dataset.slotStudent));
    const defaultCountry = bookedStudent?.country || teacher.country || 'All Countries';

    setText('#teacherSlotTitle', isBooked ? 'Manage Scheduled Class' : 'Manage Availability Slot');
    setText('#teacherSlotSummary', `${day} · ${inputTimeToRange(time)}`);
    setText('#teacherSlotGuidance', isBooked
        ? 'Cancel the assigned class or transfer it to another available teacher. This does not close teacher availability.'
        : 'Open or close this time slot so Admin can see the teacher’s availability.');

    document.getElementById('teacherSlotAction').innerHTML = isBooked
        ? '<option value="assign">View / update class</option><option value="cancel">Cancel class</option><option value="transfer">Transfer class</option>'
        : slot.dataset.slotState === 'open'
            ? '<option value="close-slot">Close availability</option><option value="assign">Assign class</option>'
            : '<option value="open-slot">Open availability</option><option value="assign">Assign class</option>';

    setSelectOptions('#teacherSlotStudentCountry', getTeacherSlotCountryOptions(), defaultCountry);
    updateTeacherSlotStudentOptions(bookedStudentIds);
    setFieldValue('#teacherSlotDuration', bookedStudent?.schedule?.duration || '25 minutes');
    updateTeacherSlotTeacherOptions(teacher.name);

    const defaultGroup = getDefaultCurriculumGroup(bookedStudent || getTeacherSlotFilteredStudents()[0] || getSelectedStudent());
    setSelectOptions('#teacherSlotCategory', curriculumGroups.map((group) => group.name), defaultGroup);
    updateTeacherSlotProgramOptions();
    if (slot.dataset.slotTopic) setSelectOptions('#teacherSlotTopic', [slot.dataset.slotTopic, ...Array.from(document.getElementById('teacherSlotTopic')?.options || []).map((option) => option.value)].filter((value, index, array) => array.indexOf(value) === index), slot.dataset.slotTopic);
    setFieldValue('#teacherSlotNote', '');

    const current = document.getElementById('teacherSlotCurrent');
    if (current) current.toggleAttribute('hidden', !isBooked);
    const bookedStudentNames = bookedStudentIds.map((id) => students.find((student) => student.id === id)?.name).filter(Boolean);
    setText('#teacherSlotCurrentClass', bookedStudentNames.length ? `${bookedStudentNames.join(', ')} · ${slot.dataset.slotTopic || 'Scheduled lesson'}` : 'No class assigned');
    setText('#teacherSlotCurrentMeta', `${slot.dataset.slotPlatform || getTeacherMeetingSource(teacher)[0]} · From teacher profile`);

    document.getElementById('teacherSlotTransferClass')?.toggleAttribute('hidden', !isBooked);
    document.getElementById('teacherSlotCancelClass')?.toggleAttribute('hidden', !isBooked);
    setTeacherSlotAction(isBooked ? 'assign' : slot.dataset.slotState === 'open' ? 'close-slot' : 'open-slot');

    document.getElementById('teacherSlotModal')?.removeAttribute('hidden');
    refreshIcons();
}

function closeTeacherSlotModal() {
    document.getElementById('teacherSlotModal')?.setAttribute('hidden', '');
    activeTeacherSlotCell = null;
}

function applyTeacherSlotAction(action) {
    if (!activeTeacherSlotCell) return;

    if (action === 'open-slot' || action === 'close-slot') {
        if (activeTeacherSlotCell.dataset.slotState === 'booked') {
            window.alert('This class is already assigned and cannot be closed as availability.');
            return;
        }
        const isOpening = action === 'open-slot';
        activeTeacherSlotCell.className = `teacher-calendar-slot ${isOpening ? 'open' : 'closed'}`;
        activeTeacherSlotCell.dataset.slotState = isOpening ? 'open' : 'closed';
        delete activeTeacherSlotCell.dataset.slotStudent;
        delete activeTeacherSlotCell.dataset.slotStudents;
        delete activeTeacherSlotCell.dataset.slotTopic;
        delete activeTeacherSlotCell.dataset.slotPlatform;
        activeTeacherSlotCell.innerHTML = isOpening
            ? '<strong>Open</strong><span>Teacher is available</span>'
            : '<strong>Closed</strong><span>Teacher is not available</span>';
        closeTeacherSlotModal();
        updateTeacherOpenSlotCount();
        showSparkToast(isOpening ? 'Teacher availability slot opened.' : 'Teacher availability slot closed.');
        return;
    }

    const teacherName = document.getElementById('teacherSlotTeacher')?.value || getSelectedTeacher()?.name || 'Teacher';
    const studentIds = getTeacherSlotStudentIds();
    const assignedStudents = studentIds.map((id) => students.find((item) => item.id === id)).filter(Boolean);
    const student = assignedStudents[0] || students.find((item) => item.teacher === teacherName) || students[0];
    const topic = document.getElementById('teacherSlotTopic')?.value || activeTeacherSlotCell.dataset.slotTopic || 'Scheduled lesson';

    if (action === 'cancel') {
        activeTeacherSlotCell.className = 'teacher-calendar-slot open';
        activeTeacherSlotCell.dataset.slotState = 'open';
        delete activeTeacherSlotCell.dataset.slotStudent;
        delete activeTeacherSlotCell.dataset.slotStudents;
        delete activeTeacherSlotCell.dataset.slotTopic;
        delete activeTeacherSlotCell.dataset.slotPlatform;
        activeTeacherSlotCell.innerHTML = '<strong>Open</strong><span>Teacher is available</span>';
        closeTeacherSlotModal();
        updateTeacherOpenSlotCount();
        showSparkToast('Assigned class cancelled. The teacher slot remains open.');
        return;
    }

    if (document.getElementById('teacherSlotTeacher')?.disabled) {
        window.alert('No available teacher is available for this class time. Please choose another slot.');
        return;
    }

    activeTeacherSlotCell.className = 'teacher-calendar-slot booked';
    activeTeacherSlotCell.dataset.slotState = 'booked';
    activeTeacherSlotCell.dataset.slotStudent = student.id;
    activeTeacherSlotCell.dataset.slotStudents = assignedStudents.length ? assignedStudents.map((item) => item.id).join(',') : student.id;
    activeTeacherSlotCell.dataset.slotTopic = topic;
    activeTeacherSlotCell.dataset.slotPlatform = getTeacherMeetingSource(teachers.find((item) => item.name === teacherName) || getSelectedTeacher())[0];
    const studentNames = assignedStudents.length ? assignedStudents.map((item) => item.name) : [student.name];
    activeTeacherSlotCell.innerHTML = `<strong>${studentNames.join(', ')}</strong><span>${topic} · ${teacherName}</span>`;

    closeTeacherSlotModal();
    updateTeacherOpenSlotCount();
    showSparkToast(action === 'transfer' ? `Class transferred to ${teacherName}.` : `Lesson assigned to ${studentNames.length} student${studentNames.length === 1 ? '' : 's'}.`);
}

function getSelectedTeacher() {
    return teachers.find((teacher) => teacher.id === selectedTeacherId) || teachers[0];
}

function openTeacherLinksDrawer() {
    const teacher = getSelectedTeacher();
    if (!teacher) return;

    setText('#teacherLinksRecordMeta', `${teacher.name} · ${teacher.id}`);
    setFieldValue('#teacherLinksVoov', teacher.links.voov || '');
    setFieldValue('#teacherLinksMeet', teacher.links.meet || '');
    setFieldValue('#teacherLinksTeams', teacher.links.teams || '');
    setFieldValue('#teacherLinksZoom', teacher.links.zoom || '');
    setFieldValue('#teacherLinksNote', '');

    document.getElementById('teacherLinksOverlay')?.removeAttribute('hidden');
    document.body.classList.add('drawer-open');
    refreshIcons();
}

function closeTeacherLinksDrawer() {
    document.getElementById('teacherLinksOverlay')?.setAttribute('hidden', '');
    document.body.classList.remove('drawer-open');
}

function saveTeacherMeetingLinks() {
    const teacher = getSelectedTeacher();
    if (!teacher) return;

    teacher.links.voov = document.getElementById('teacherLinksVoov')?.value.trim() || '';
    teacher.links.meet = document.getElementById('teacherLinksMeet')?.value.trim() || '';
    teacher.links.teams = document.getElementById('teacherLinksTeams')?.value.trim() || '';
    teacher.links.zoom = document.getElementById('teacherLinksZoom')?.value.trim() || '';

    openTeacherProfile(teacher.id);
    renderTeacherTable();
    closeTeacherLinksDrawer();

    const note = document.getElementById('teacherLinksNote')?.value.trim();
    showSparkToast(note ? 'Teacher meeting links saved with admin note.' : 'Teacher meeting links saved in prototype mode.');
}

function openTeacherDetail(teacherId) {
    const teacher = teachers.find((item) => item.id === teacherId) || teachers[0];
    openTeacherProfile(teacherId);
    setTeacherProfileTab('profile');
    document.getElementById('teacherDirectoryWorkspace')?.setAttribute('hidden', '');
    document.getElementById('teacherDetailPanel')?.removeAttribute('hidden');
    if (teacher) setBreadcrumbs([
        { label: 'Teachers', action: 'teachers' },
        { label: 'Directory', action: 'teacher-directory' },
        { label: teacher.name },
    ]);
    refreshIcons();
}

function closeTeacherDetail() {
    document.getElementById('teacherDetailPanel')?.setAttribute('hidden', '');
    document.getElementById('teacherDirectoryWorkspace')?.removeAttribute('hidden');
    setBreadcrumbs(getSectionBreadcrumb('teachers'));
    refreshIcons();
}

function addTeacherFromPrompt() {
    const name = window.prompt('Enter the teacher full name');
    if (!name?.trim()) return;
    const country = window.prompt('Assigned country / market', 'China') || 'China';
    const id = `T1-${String(teachers.length + 1).padStart(3, '0')}`;
    teachers.push({
        id,
        name: name.trim(),
        country: country.trim(),
        type: 'Kids & Adults',
        students: 0,
        today: 0,
        rate: '₱230/hr',
        status: 'Active',
        loginStatus: 'Logged out',
        links: { voov: '', meet: '', teams: '', zoom: '' },
    });
    teacherContacts[name.trim()] = {
        primary: 'Not provided',
        secondary: 'Not provided',
        email: `${name.trim().split(' ')[0].toLowerCase()}@vlace.com`,
        emergencyName: 'Not provided',
        emergencyPhone: 'Not provided',
    };
    teacherAvailability[name.trim()] = { country: country.trim(), slots: [] };
    selectedTeacherId = id;
    renderTeacherTable();
    openTeacherDetail(id);
    showSparkToast('Teacher added. Use Edit Meeting Links and Weekly Schedule to complete the profile.');
}

function addTeacherPayrollAdjustment() {
    const teacher = getSelectedTeacher();
    if (!teacher) return;
    const amount = Number(window.prompt('Adjustment amount in PHP', '115'));
    if (!amount || amount < 0) return;
    const note = window.prompt('Reason / internal payroll note', 'Manual payroll adjustment') || 'Manual payroll adjustment';
    teacherPayrollDeductions.push({
        id: `DED-${String(teacherPayrollDeductions.length + 1).padStart(3, '0')}`,
        period: getTeacherPayrollPeriod(),
        reason: 'Duplicate or incorrect payroll entry',
        amount,
        note,
        relatedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        addedBy: 'Van A.',
        addedAt: `${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · ${formatPhtTime()} PHT`,
        source: 'Manual',
        status: 'Applied',
    });
    renderTeacherPayroll(teacher);
    showSparkToast(`Manual payroll adjustment added for ${teacher.name}.`);
}

function moveTeacherWeek(direction) {
    teacherWeekOffset += direction;
    const ranges = [
        'July 13 – July 19',
        'July 20 – July 26',
        'July 27 – August 2',
        'August 3 – August 9',
        'August 10 – August 16',
    ];
    const index = Math.max(0, Math.min(ranges.length - 1, 2 + teacherWeekOffset));
    teacherWeekOffset = index - 2;
    setText('#teacherWeekRange', ranges[index]);
    renderTeacherWeeklyCalendar(getSelectedTeacher(), teacherAvailability[getSelectedTeacher()?.name]?.slots || []);
}

function getSelectedStaff() {
    return staffMembers.find((staff) => staff.id === selectedStaffId) || staffMembers[0];
}

function getStaffRows() {
    const search = document.getElementById('staffSearch')?.value.trim().toLowerCase() || '';
    const role = document.getElementById('staffRoleFilter')?.value || 'All Roles';
    const status = document.getElementById('staffStatusFilter')?.value || 'All Statuses';

    return staffMembers.filter((staff) => {
        const searchable = `${staff.name} ${staff.id} ${staff.role} ${staff.department} ${staff.market}`.toLowerCase();
        const matchesSearch = !search || searchable.includes(search);
        const matchesRole = role === 'All Roles' || staff.role === role;
        const matchesStatus = status === 'All Statuses' || staff.status === status;
        return matchesSearch && matchesRole && matchesStatus;
    });
}

function renderStaffTable() {
    const body = document.getElementById('staffTableBody');
    if (!body) return;

    const rows = getStaffRows();
    setText('#staffVisibleCount', String(rows.length));
    setText('#staffTotalCount', String(staffMembers.length));
    setText('#staffActiveToday', String(staffMembers.filter((staff) => staff.status === 'Active').length));
    setText('#staffSupportCount', String(staffMembers.filter((staff) => staff.department === 'Customer Support').length));
    setText('#staffPendingReviews', '2');

    if (!rows.length) {
        body.innerHTML = '<tr><td colspan="8" class="empty-row">No staff members match the selected filters.</td></tr>';
        return;
    }

    body.innerHTML = rows.map((staff) => `
        <tr class="${staff.id === selectedStaffId ? 'selected' : ''}" data-staff-row="${staff.id}" tabindex="0" aria-label="Open ${escapeHtml(staff.name)} staff profile">
            <td>
                <button class="student-person teacher-person" type="button" data-staff-id="${escapeHtml(staff.id)}">
                    <span>${getInitials(staff.name)}<i class="employee-login-dot ${staff.loginStatus === 'Logged in' ? 'is-online' : 'is-away'}"></i></span>
                    <div><strong>${escapeHtml(staff.name)}</strong><small>${escapeHtml(staff.id)}</small></div>
                </button>
            </td>
            <td><span class="staff-role-badge">${escapeHtml(staff.role)}</span></td>
            <td>${escapeHtml(staff.department)}</td>
            <td><span class="country-badge">${escapeHtml(staff.market)}</span></td>
            <td>${escapeHtml(staff.supervisor)}</td>
            <td>${escapeHtml(staff.schedule)}</td>
            <td>${escapeHtml(staff.pay)}</td>
            <td><span class="status-pill ${staff.status === 'Active' ? 'positive' : 'neutral'}">${escapeHtml(staff.status)}</span></td>
        </tr>
    `).join('');

    body.querySelectorAll('[data-staff-row]').forEach((row) => {
        row.addEventListener('click', () => openStaffDetail(row.dataset.staffRow));
        row.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openStaffDetail(row.dataset.staffRow);
            }
        });
    });
}

function openStaffDetail(staffId) {
    openStaffProfile(staffId);
    setStaffProfileTab('profile');
    document.getElementById('staffDirectoryWorkspace')?.setAttribute('hidden', '');
    document.getElementById('staffDetailPanel')?.removeAttribute('hidden');
    const staff = getSelectedStaff();
    setBreadcrumbs([
        { label: 'Staff', action: 'staff' },
        { label: 'Directory', action: 'staff-directory' },
        { label: staff.name },
    ]);
    refreshIcons();
}

function closeStaffDetail() {
    document.getElementById('staffDetailPanel')?.setAttribute('hidden', '');
    document.getElementById('staffDirectoryWorkspace')?.removeAttribute('hidden');
    setBreadcrumbs(getSectionBreadcrumb('staff'));
    refreshIcons();
}

function openStaffProfile(staffId) {
    const staff = staffMembers.find((item) => item.id === staffId) || staffMembers[0];
    if (!staff) return;

    selectedStaffId = staff.id;
    const contact = staffContacts[staff.name] || {};

    setText('#staffDetailAvatar', getInitials(staff.name));
    setText('#staffDetailName', staff.name);
    setText('#staffDetailMeta', `${staff.id} · ${staff.role}`);
    setText('#staffHeroStatus', staff.status);
    setText('#staffHeroDepartment', staff.department);
    setText('#staffHeroPay', staff.pay);
    setText('#staffInfoId', staff.id);
    setText('#staffInfoName', staff.name);
    setText('#staffInfoRole', staff.role);
    setText('#staffInfoDepartment', staff.department);
    setText('#staffInfoStatus', staff.status);
    setText('#staffInfoMarket', staff.market);
    setText('#staffInfoSupervisor', staff.supervisor);
    setText('#staffInfoSchedule', staff.schedule);
    setText('#staffInfoPay', staff.pay);
    setText('#staffPrimaryPhone', contact.primary || 'Not provided');
    setText('#staffSecondaryPhone', contact.secondary || 'Not provided');
    setText('#staffEmailAddress', contact.email || 'Not provided');
    setText('#staffEmergencyName', contact.emergencyName || 'Not provided');
    setText('#staffEmergencyPhone', contact.emergencyPhone || 'Not provided');
    setText('#staffPayrollTitle', `${staff.name}'s Payroll`);

    renderStaffActivity(staff);
    renderStaffWorkSchedule(staff);
    renderStaffAttendance();
    renderStaffCalendar();
    renderStaffPayroll();
    renderStaffDocuments();
    renderStaffFeedback();
    renderStaffPolicyLibrary(staff);

    document.querySelectorAll('[data-staff-row]').forEach((row) => {
        row.classList.toggle('selected', row.dataset.staffRow === staff.id);
    });
}

function setStaffProfileTab(tabName) {
    document.querySelectorAll('[data-staff-tab]').forEach((button) => {
        button.classList.toggle('active', button.dataset.staffTab === tabName);
    });

    document.querySelectorAll('[data-staff-tab-panel]').forEach((panel) => {
        panel.classList.toggle('active', panel.dataset.staffTabPanel === tabName);
    });

    refreshIcons();
}

function renderStaffActivity(staff) {
    const list = document.getElementById('staffActivityList');
    if (!list) return;

    const managerName = staff.supervisor || 'Van A.';
    list.innerHTML = [
        { title: 'Work schedule updated', body: `${staff.name}'s schedule was confirmed for this cutoff.`, author: managerName, role: 'Manager', date: 'Aug 2, 2026', time: '5:42 PM PHT' },
        { title: 'Profile reviewed', body: 'Employment details and role assignment were reviewed.', author: 'Van A.', role: 'Admin', date: 'Jul 28, 2026', time: '2:15 PM PHT' },
        { title: 'Profile created', body: 'Staff employment profile was added to VLACE.', author: 'Van A.', role: 'Admin', date: 'Jul 10, 2026', time: '10:08 AM PHT' },
    ].map(renderStaffActivityItem).join('');
}

function renderStaffActivityItem(item) {
    return `
        <li>
            <span></span>
            <div><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.body)}</p></div>
            <div><strong>${escapeHtml(item.author)}</strong><small>${escapeHtml(item.role)}</small></div>
            <div class="staff-note-meta">
                <strong>${escapeHtml(item.date)}</strong>
                <small>${escapeHtml(item.time)}</small>
                <button class="staff-note-delete" type="button" data-staff-note-delete title="Admin only: delete this note" aria-label="Delete staff note">Delete</button>
            </div>
        </li>
    `;
}

function openStaffNoteModal() {
    const staff = getSelectedStaff();
    if (!staff) return;

    activeEmployeeNoteKind = 'staff';
    setText('#staffNoteTitle', `Add Staff Note for ${staff.name}`);
    setFieldValue('#staffNoteTitleInput', '');
    setFieldValue('#staffNoteDescription', '');
    setFieldValue('#staffNoteVisibility', 'Internal use only');
    setFieldValue('#staffNoteCategory', 'General note');
    document.getElementById('staffNoteModal')?.removeAttribute('hidden');
    document.getElementById('staffNoteTitleInput')?.focus();
    refreshIcons();
}

function closeStaffNoteModal() {
    document.getElementById('staffNoteModal')?.setAttribute('hidden', '');
}

function addStaffActivity(title, description) {
    const list = document.getElementById('staffActivityList');
    if (!list) return;

    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    list.insertAdjacentHTML('afterbegin', renderStaffActivityItem({
        title,
        body: description,
        author: 'Van A.',
        role: 'Admin',
        date: formattedDate,
        time: `${formatPhtTime(date)} PHT`,
    }));
}

function deleteStaffActivityNote(button) {
    const item = button?.closest('li');
    if (!item) return;

    const title = item.querySelector('strong')?.textContent || 'this note';
    const confirmed = window.confirm(`Delete "${title}" from staff activity notes?\n\nAdmin only action.`);
    if (!confirmed) return;

    item.remove();
    showSparkToast('Staff note deleted in prototype mode.');
}

function saveStaffActivityNote() {
    const title = document.getElementById('staffNoteTitleInput')?.value.trim();
    const description = document.getElementById('staffNoteDescription')?.value.trim();
    const category = document.getElementById('staffNoteCategory')?.value || 'General note';
    const visibility = document.getElementById('staffNoteVisibility')?.value || 'Internal use only';
    if (!title || !description) return;

    if (activeEmployeeNoteKind === 'teacher') {
        addTeacherActivity(title, `${description} · ${category} · ${visibility}`);
    } else {
        addStaffActivity(title, `${description} · ${category} · ${visibility}`);
    }
    closeStaffNoteModal();
    showSparkToast(`${activeEmployeeNoteKind === 'teacher' ? 'Teacher' : 'Staff'} profile note added.`);
}

function addTeacherActivity(title, description) {
    const list = document.getElementById('teacherActivityList');
    if (!list) return;
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    list.insertAdjacentHTML('afterbegin', `
        <li>
            <span></span>
            <div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(description)}</p></div>
            <div><strong>Van A.</strong><small>Admin</small></div>
            <div><strong>${escapeHtml(formattedDate)}</strong><small>${escapeHtml(formatPhtTime(date))} PHT</small></div>
        </li>
    `);
}

function openTeacherNoteModal() {
    const teacher = getSelectedTeacher();
    if (!teacher) return;
    activeEmployeeNoteKind = 'teacher';
    setText('#staffNoteTitle', `Add Teacher Note for ${teacher.name}`);
    setFieldValue('#staffNoteTitleInput', '');
    setFieldValue('#staffNoteDescription', '');
    setFieldValue('#staffNoteVisibility', 'Internal use only');
    setFieldValue('#staffNoteCategory', 'General note');
    document.getElementById('staffNoteModal')?.removeAttribute('hidden');
    document.getElementById('staffNoteTitleInput')?.focus();
    refreshIcons();
}

function renderStaffWorkSchedule(staff) {
    const grid = document.getElementById('staffWeekGrid');
    if (!grid) return;

    const workDays = staffWorkDays[staff.name] || [];
    const scheduleTime = staff.schedule.split('·')[1]?.trim() || '9:00 AM-6:00 PM';
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    grid.innerHTML = days.map((day) => {
        const active = workDays.includes(day);
        return `
            <article class="${active ? 'is-working' : 'is-off'}">
                <span>${day.slice(0, 3)}</span>
                <strong>${active ? 'Working' : 'Day off'}</strong>
                <small>${active ? escapeHtml(scheduleTime) : 'No scheduled work'}</small>
            </article>
        `;
    }).join('');
}

function timeLabelToInput(value) {
    const match = String(value).trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return '09:00';

    let hour = Number(match[1]);
    const minute = match[2];
    const meridiem = match[3].toUpperCase();
    if (meridiem === 'PM' && hour !== 12) hour += 12;
    if (meridiem === 'AM' && hour === 12) hour = 0;
    return `${String(hour).padStart(2, '0')}:${minute}`;
}

function timeInputToLabel(value) {
    const [rawHour, minute = '00'] = String(value || '09:00').split(':');
    let hour = Number(rawHour);
    const meridiem = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${meridiem}`;
}

function getScheduleMinutes(value) {
    const [hour = '0', minute = '0'] = String(value || '00:00').split(':');
    return (Number(hour) * 60) + Number(minute);
}

function getStaffScheduleTimes(staff) {
    const range = staff.schedule.split('·')[1]?.trim() || '9:00 AM-6:00 PM';
    const [start = '9:00 AM', end = '6:00 PM'] = range.split('-').map((part) => part.trim());
    return {
        start: timeLabelToInput(start),
        end: timeLabelToInput(end),
    };
}

function getStaffDayRangeLabel(days) {
    const order = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const short = {
        Monday: 'Mon',
        Tuesday: 'Tue',
        Wednesday: 'Wed',
        Thursday: 'Thu',
        Friday: 'Fri',
        Saturday: 'Sat',
        Sunday: 'Sun',
    };
    const indexes = days.map((day) => order.indexOf(day)).filter((index) => index >= 0).sort((a, b) => a - b);
    const contiguous = indexes.every((index, position) => position === 0 || index === indexes[position - 1] + 1);

    if (!indexes.length) return 'No working days';
    if (contiguous && indexes.length > 1) return `${short[order[indexes[0]]]}-${short[order[indexes[indexes.length - 1]]]}`;
    return indexes.map((index) => short[order[index]]).join(', ');
}

function getSelectedStaffScheduleDays() {
    return Array.from(document.querySelectorAll('[data-staff-schedule-day].selected'))
        .map((button) => button.dataset.staffScheduleDay);
}

function openStaffProfileDrawer(mode = 'edit') {
    const staff = mode === 'add' ? null : getSelectedStaff();
    const nextId = `ST-${String(staffMembers.length + 1).padStart(3, '0')}`;
    const name = staff?.name || '';

    document.getElementById('staffProfileOverlay').dataset.mode = mode;
    setText('#staffProfileDrawerKicker', mode === 'add' ? 'ADMIN & MANAGER · NEW STAFF RECORD' : 'ADMIN & MANAGER · STAFF DIRECTORY');
    setText('#staffProfileDrawerTitle', mode === 'add' ? 'Add Staff Member' : 'Edit Staff Profile');
    setText('#staffProfileDrawerSubtitle', mode === 'add' ? 'Create a non-teaching staff profile.' : `Update ${staff.name}'s employment assignment details.`);
    setText('#staffProfileInitials', staff ? getInitials(staff.name) : 'NS');
    setText('#staffProfileDrawerName', staff?.name || 'New Staff Member');
    setText('#staffProfileDrawerMeta', staff ? `${staff.id} · ${staff.department}` : `${nextId} · Staff directory`);
    setFieldValue('#staffProfileId', staff?.id || nextId);
    setFieldValue('#staffProfileName', name);
    setFieldValue('#staffProfileRole', staff?.role || 'Customer Service / Staff');
    setFieldValue('#staffProfileDepartment', staff?.department || 'Customer Support');
    setFieldValue('#staffProfileMarket', staff?.market || 'Central Operations');
    setFieldValue('#staffProfileSupervisor', staff?.supervisor || 'Van Acepcion');
    setFieldValue('#staffProfilePay', staff?.pay || '₱180/hour');
    setFieldValue('#staffProfileStatus', staff?.status || 'Active');
    setFieldValue('#staffProfileNote', '');
    document.getElementById('staffProfileOverlay')?.removeAttribute('hidden');
    document.body.classList.add('drawer-open');
    refreshIcons();
}

function closeStaffProfileDrawer() {
    document.getElementById('staffProfileOverlay')?.setAttribute('hidden', '');
    document.body.classList.remove('drawer-open');
}

function saveStaffProfileDrawer() {
    const overlay = document.getElementById('staffProfileOverlay');
    const mode = overlay?.dataset.mode || 'edit';
    const id = document.getElementById('staffProfileId')?.value.trim();
    const name = document.getElementById('staffProfileName')?.value.trim();
    if (!id || !name) return;

    const payload = {
        id,
        name,
        role: document.getElementById('staffProfileRole')?.value || 'Customer Service / Staff',
        department: document.getElementById('staffProfileDepartment')?.value.trim() || 'Customer Support',
        market: document.getElementById('staffProfileMarket')?.value.trim() || 'Central Operations',
        supervisor: document.getElementById('staffProfileSupervisor')?.value.trim() || 'Van Acepcion',
        schedule: mode === 'add' ? 'Mon-Fri · 9:00 AM-6:00 PM' : getSelectedStaff().schedule,
        pay: document.getElementById('staffProfilePay')?.value.trim() || '₱180/hour',
        status: document.getElementById('staffProfileStatus')?.value || 'Active',
        loginStatus: mode === 'add' ? 'Logged out' : getSelectedStaff().loginStatus,
    };

    if (mode === 'add') {
        staffMembers.push(payload);
        staffContacts[payload.name] = {
            primary: 'Not provided',
            secondary: 'Not provided',
            email: `${payload.name.split(' ')[0].toLowerCase()}@vlace.com`,
            emergencyName: 'Not provided',
            emergencyPhone: 'Not provided',
        };
        staffWorkDays[payload.name] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        selectedStaffId = payload.id;
        renderStaffTable();
        openStaffDetail(payload.id);
    } else {
        const staff = getSelectedStaff();
        const oldName = staff.name;
        Object.assign(staff, payload);
        if (oldName !== payload.name) {
            staffContacts[payload.name] = staffContacts[oldName] || {};
            staffWorkDays[payload.name] = staffWorkDays[oldName] || [];
            delete staffContacts[oldName];
            delete staffWorkDays[oldName];
        }
        openStaffProfile(staff.id);
        renderStaffTable();
    }

    const note = document.getElementById('staffProfileNote')?.value.trim();
    addStaffActivity(mode === 'add' ? 'Staff profile created' : 'Staff profile updated', note || `${payload.name}'s staff profile details were saved.`);
    closeStaffProfileDrawer();
    showSparkToast(mode === 'add' ? 'Staff member added to the directory.' : 'Staff profile saved.');
}

function openStaffContactDrawer() {
    const staff = getSelectedStaff();
    const contact = staffContacts[staff.name] || {};
    activeStaffContactKind = 'staff';
    document.getElementById('staffContactOverlay').dataset.kind = 'staff';
    setText('#staffContactDrawerSubtitle', `${staff.name} · ${staff.id}`);
    setText('#staffContactDrawerTitle', 'Edit Contact Details');
    setText('#staffContactInitials', getInitials(staff.name));
    setText('#staffContactName', staff.name);
    setFieldValue('#staffContactPrimary', contact.primary || '');
    setFieldValue('#staffContactSecondary', contact.secondary || '');
    setFieldValue('#staffContactEmail', contact.email || '');
    setFieldValue('#staffContactEmergencyName', contact.emergencyName || '');
    setFieldValue('#staffContactEmergencyPhone', contact.emergencyPhone || '');
    setFieldValue('#staffContactNote', '');
    document.getElementById('staffContactOverlay')?.removeAttribute('hidden');
    document.body.classList.add('drawer-open');
    refreshIcons();
}

function openTeacherContactDrawer() {
    const teacher = getSelectedTeacher();
    const contact = teacherContacts[teacher.name] || {};
    activeStaffContactKind = 'teacher';
    document.getElementById('staffContactOverlay').dataset.kind = 'teacher';
    setText('#staffContactDrawerTitle', 'Edit Teacher Contact Details');
    setText('#staffContactDrawerSubtitle', `${teacher.name} · ${teacher.id}`);
    setText('#staffContactInitials', getInitials(teacher.name));
    setText('#staffContactName', teacher.name);
    setFieldValue('#staffContactPrimary', contact.primary || '');
    setFieldValue('#staffContactSecondary', contact.secondary || '');
    setFieldValue('#staffContactEmail', contact.email || '');
    setFieldValue('#staffContactEmergencyName', contact.emergencyName || '');
    setFieldValue('#staffContactEmergencyPhone', contact.emergencyPhone || '');
    setFieldValue('#staffContactNote', '');
    document.getElementById('staffContactOverlay')?.removeAttribute('hidden');
    document.body.classList.add('drawer-open');
    refreshIcons();
}

function closeStaffContactDrawer() {
    document.getElementById('staffContactOverlay')?.setAttribute('hidden', '');
    document.body.classList.remove('drawer-open');
}

function saveStaffContactDrawer() {
    if (activeStaffContactKind === 'teacher') {
        const teacher = getSelectedTeacher();
        teacherContacts[teacher.name] = {
            primary: document.getElementById('staffContactPrimary')?.value.trim() || 'Not provided',
            secondary: document.getElementById('staffContactSecondary')?.value.trim() || 'Not provided',
            email: document.getElementById('staffContactEmail')?.value.trim() || 'Not provided',
            emergencyName: document.getElementById('staffContactEmergencyName')?.value.trim() || 'Not provided',
            emergencyPhone: document.getElementById('staffContactEmergencyPhone')?.value.trim() || 'Not provided',
        };
        openTeacherProfile(teacher.id);
        addTeacherActivity('Contact information updated', document.getElementById('staffContactNote')?.value.trim() || 'Primary, secondary, and emergency contact details were updated.');
        closeStaffContactDrawer();
        showSparkToast('Teacher contact details saved.');
        return;
    }

    const staff = getSelectedStaff();
    staffContacts[staff.name] = {
        primary: document.getElementById('staffContactPrimary')?.value.trim() || 'Not provided',
        secondary: document.getElementById('staffContactSecondary')?.value.trim() || 'Not provided',
        email: document.getElementById('staffContactEmail')?.value.trim() || 'Not provided',
        emergencyName: document.getElementById('staffContactEmergencyName')?.value.trim() || 'Not provided',
        emergencyPhone: document.getElementById('staffContactEmergencyPhone')?.value.trim() || 'Not provided',
    };
    openStaffProfile(staff.id);
    const note = document.getElementById('staffContactNote')?.value.trim();
    addStaffActivity('Contact information updated', note || 'Primary, secondary, and emergency contact details were updated.');
    closeStaffContactDrawer();
    showSparkToast('Staff contact details saved.');
}

function updateStaffScheduleDayButtons(days) {
    document.querySelectorAll('[data-staff-schedule-day]').forEach((button) => {
        const selected = days.includes(button.dataset.staffScheduleDay);
        button.classList.toggle('selected', selected);
        const check = button.querySelector('i');
        const status = button.querySelector('small');
        if (check) check.textContent = selected ? '✓' : '';
        if (status) status.textContent = selected ? 'Working day' : 'Day off';
    });
}

function updateStaffScheduleSummary() {
    const days = getSelectedStaffScheduleDays();
    const start = document.getElementById('staffScheduleStart')?.value || '09:00';
    const end = document.getElementById('staffScheduleEnd')?.value || '18:00';
    const startMinutes = getScheduleMinutes(start);
    const endMinutes = getScheduleMinutes(end);
    const validTime = endMinutes === 0 ? startMinutes < 1440 : startMinutes < endMinutes;
    const valid = days.length > 0 && validTime;
    const breakEnabled = Boolean(document.getElementById('staffScheduleBreakEnabled')?.checked);

    setText('#staffScheduleSummary', `${days.length} working days · ${timeInputToLabel(start)}-${timeInputToLabel(end)}`);
    setText('#staffScheduleSummaryDetail', `${breakEnabled ? 'Includes an unpaid meal break' : 'No meal break deduction'} · Philippine Time`);
    document.getElementById('staffScheduleError')?.toggleAttribute('hidden', validTime);
    document.getElementById('staffScheduleSave')?.toggleAttribute('disabled', !valid);
    document.getElementById('staffScheduleBreakGrid')?.toggleAttribute('hidden', !breakEnabled);
}

function openStaffScheduleDrawer() {
    const staff = getSelectedStaff();
    if (!staff) return;

    const times = getStaffScheduleTimes(staff);
    const workingDays = staffWorkDays[staff.name] || [];
    setText('#staffScheduleSubtitle', `Update ${staff.name}'s regular non-teaching hours.`);
    setText('#staffScheduleAvatar', getInitials(staff.name));
    setText('#staffScheduleName', staff.name);
    setText('#staffScheduleMeta', `${staff.role} · ${staff.department}`);
    setFieldValue('#staffScheduleStart', times.start);
    setFieldValue('#staffScheduleEnd', times.end);
    setFieldValue('#staffScheduleBreakStart', '12:00');
    setFieldValue('#staffScheduleBreakDuration', '60');
    setFieldValue('#staffScheduleEffectiveDate', '2026-08-03');
    setFieldValue('#staffScheduleStatus', 'Active');
    setFieldValue('#staffScheduleNote', '');
    const breakEnabled = document.getElementById('staffScheduleBreakEnabled');
    if (breakEnabled) breakEnabled.checked = true;
    updateStaffScheduleDayButtons(workingDays);
    updateStaffScheduleSummary();
    document.getElementById('staffScheduleOverlay')?.removeAttribute('hidden');
    refreshIcons();
}

function closeStaffScheduleDrawer() {
    document.getElementById('staffScheduleOverlay')?.setAttribute('hidden', '');
}

function saveStaffSchedule() {
    const staff = getSelectedStaff();
    if (!staff) return;

    const oldSchedule = staff.schedule;
    const days = getSelectedStaffScheduleDays();
    const start = document.getElementById('staffScheduleStart')?.value || '09:00';
    const end = document.getElementById('staffScheduleEnd')?.value || '18:00';
    const startMinutes = getScheduleMinutes(start);
    const endMinutes = getScheduleMinutes(end);
    const validTime = endMinutes === 0 ? startMinutes < 1440 : startMinutes < endMinutes;
    if (!days.length || !validTime) {
        updateStaffScheduleSummary();
        return;
    }

    const dayRange = getStaffDayRangeLabel(days);
    const newSchedule = `${dayRange} · ${timeInputToLabel(start)}-${timeInputToLabel(end)}`;
    staffWorkDays[staff.name] = days;
    staff.schedule = newSchedule;
    setText('#staffInfoSchedule', newSchedule);
    renderStaffWorkSchedule(staff);
    renderStaffTable();
    addStaffActivity(
        'Work schedule updated',
        `${oldSchedule} changed to ${newSchedule}. Effective ${document.getElementById('staffScheduleEffectiveDate')?.value || '2026-08-03'}.`
    );
    closeStaffScheduleDrawer();
    showSparkToast('Staff work schedule saved in prototype mode.');
}

function renderStaffAttendance() {
    const body = document.getElementById('staffAttendanceBody');
    if (!body) return;

    body.innerHTML = staffAttendanceRecords.map((record) => {
        const status = record.status === 'Present' ? 'positive' : record.status === 'Late' ? 'warning' : 'neutral';
        return `
            <tr>
                <td>${record.date}</td>
                <td>${record.day}</td>
                <td>${record.scheduled}</td>
                <td>${record.in}</td>
                <td>${record.out}</td>
                <td>${record.hours}</td>
                <td><span class="status-pill ${status}">${record.status}</span></td>
            </tr>
        `;
    }).join('');
}

function renderStaffCalendar() {
    const grid = document.getElementById('staffCalendarGrid');
    if (!grid) return;

    const monthName = getStaffCalendarMonthName();
    const month = staffCalendarMonths[monthName] || staffCalendarMonths['August 2026'];
    const statusFilter = document.getElementById('staffAttendanceStatusFilter')?.value || 'All';
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    setText('#staffCalendarTitle', `${monthName} Attendance Calendar`);
    grid.setAttribute('aria-label', `${monthName} monthly attendance calendar`);

    const weekdayCells = weekdays.map((day) => `<strong class="calendar-weekday">${day}</strong>`).join('');
    const emptyCells = Array.from({ length: month.leadingBlanks }, (_, index) => `<span class="calendar-empty" aria-hidden="true" data-calendar-empty="${index}"></span>`).join('');
    const dayCells = Array.from({ length: month.days }, (_, index) => {
        const day = index + 1;
        const record = month.records[day];
        const status = attendanceStatusOptions.find((item) => item.code === record?.code);
        const matches = statusFilter === 'All'
            || (statusFilter === 'Issues' ? ['A', 'LT', 'HD'].includes(record?.code || '') : record?.code === statusFilter);
        const codeClass = record ? `code-${record.code.toLowerCase()}` : '';
        return `
            <button type="button" class="attendance-calendar-day ${record ? 'has-record' : ''} ${matches ? 'matches-filter' : 'filtered-out'}" data-staff-calendar-day="${day}" aria-label="${monthName.split(' ')[0]} ${day}${status ? `, ${status.label}` : ', no attendance record'}">
                <span>${day}</span>
                ${record ? `<b class="attendance-code ${codeClass}">${escapeHtml(record.code)}</b>` : '<small>-</small>'}
            </button>
        `;
    }).join('');

    grid.innerHTML = `${weekdayCells}${emptyCells}${dayCells}`;
}

function getStaffCalendarMonthName() {
    const input = document.getElementById('staffAttendanceMonthFilter');
    const value = input?.value.trim();
    if (value && staffCalendarMonths[value]) return value;
    return 'August 2026';
}

function getStaffCalendarDateLabel(monthName, day) {
    const month = staffCalendarMonths[monthName] || staffCalendarMonths['August 2026'];
    return new Date(month.year, month.monthIndex, day).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

function openStaffAttendanceModal(day) {
    const monthName = getStaffCalendarMonthName();
    const month = staffCalendarMonths[monthName] || staffCalendarMonths['August 2026'];
    const record = month.records[day] || { code: 'P', timeIn: '09:00', timeOut: '18:00', hours: '8.0', note: '' };
    const status = attendanceStatusOptions.find((item) => item.code === record.code);

    selectedStaffCalendarDay = { monthName, day };
    setText('#staffAttendanceModalTitle', getStaffCalendarDateLabel(monthName, day));
    setText('#staffAttendanceModalSummary', status ? `${record.code} - ${status.label}` : 'No attendance record yet');
    setFieldValue('#staffAttendanceStatus', record.code);
    setFieldValue('#staffAttendanceTimeIn', record.timeIn || '');
    setFieldValue('#staffAttendanceTimeOut', record.timeOut || '');
    setFieldValue('#staffAttendanceHours', record.hours || '');
    setFieldValue('#staffAttendanceNote', record.note || '');
    document.getElementById('staffAttendanceModal')?.removeAttribute('hidden');
    refreshIcons();
}

function closeStaffAttendanceModal() {
    selectedStaffCalendarDay = null;
    document.getElementById('staffAttendanceModal')?.setAttribute('hidden', '');
}

function saveStaffAttendanceRecord() {
    if (!selectedStaffCalendarDay) return;

    const month = staffCalendarMonths[selectedStaffCalendarDay.monthName];
    if (!month) return;

    month.records[selectedStaffCalendarDay.day] = {
        code: document.getElementById('staffAttendanceStatus')?.value || 'P',
        timeIn: document.getElementById('staffAttendanceTimeIn')?.value || '',
        timeOut: document.getElementById('staffAttendanceTimeOut')?.value || '',
        hours: document.getElementById('staffAttendanceHours')?.value || '',
        note: document.getElementById('staffAttendanceNote')?.value.trim() || '',
    };

    renderStaffCalendar();
    closeStaffAttendanceModal();
    showSparkToast('Staff attendance record saved in prototype mode.');
}

function renderStaffPayroll() {
    const body = document.getElementById('staffPayrollBody');
    if (!body) return;

    const staff = getSelectedStaff();

    body.innerHTML = staffPayrollRows.map((row, index) => {
        const receiptKey = staff ? getStaffPayrollReceiptKey(staff, row.cutoff) : '';
        const hasUploadedReceipt = Boolean(receiptKey && payrollReceiptUploads[receiptKey]);
        const uploadLabel = hasUploadedReceipt ? 'Replace Receipt' : 'Upload Receipt';

        return `
            <tr>
                <td><strong>${row.cutoff}</strong></td>
                <td>${row.days}</td>
                <td>${row.hours}</td>
                <td>${row.gross}</td>
                <td>${row.adjustment}</td>
                <td><strong class="payroll-positive">${row.net}</strong></td>
                <td><span class="status-pill ${row.status === 'Paid' ? 'positive' : 'warning'}">${row.status}</span></td>
                <td><button class="secondary-button" type="button" data-staff-payslip="${index}">View Payslip</button></td>
                <td>
                    <div class="employee-record-actions payroll-receipt-actions">
                        <button class="secondary-button" type="button" data-staff-upload-receipt="${index}">${uploadLabel}</button>
                        <button class="secondary-button" type="button" data-staff-receipt="${index}">View Receipt</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    body.querySelectorAll('[data-staff-payslip]').forEach((button) => {
        button.addEventListener('click', () => openStaffPayslip(Number(button.dataset.staffPayslip)));
    });
    body.querySelectorAll('[data-staff-receipt]').forEach((button) => {
        button.addEventListener('click', () => openStaffPayrollReceipt(Number(button.dataset.staffReceipt)));
    });
    body.querySelectorAll('[data-staff-upload-receipt]').forEach((button) => {
        button.addEventListener('click', () => openStaffPayrollReceiptUpload(Number(button.dataset.staffUploadReceipt)));
    });
}

function parsePesoAmount(value) {
    return Number(String(value || '').replace(/[^\d.]/g, '')) || 0;
}

function openStaffPayslip(index) {
    const staff = getSelectedStaff();
    const row = staffPayrollRows[index] || staffPayrollRows[0];
    const modal = document.getElementById('teacherPayslipModal');
    const lineItems = document.getElementById('teacherPayslipLineItems');
    if (!staff || !row || !modal || !lineItems) return;

    applyPayslipBranding('Staff Payroll Payslip');
    setText('#teacherPayslipTitle', `${staff.name} Payslip`);
    setText('#teacherPayslipPeriod', row.cutoff);
    setText('#teacherPayslipStatus', row.status);
    setText('#teacherPayslipName', staff.name);
    setText('#teacherPayslipMeta', `${staff.id} · ${staff.department} · ${staff.role}`);
    setText('#teacherPayslipIssued', `Issued ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · PHT`);
    setText('#payslipLessons', `${row.days} days`);
    setText('#payslipHours', `${row.hours} hours`);
    setText('#payslipRate', staff.pay);
    setText('#payslipGross', row.gross);
    setText('#payslipDeductions', row.adjustment === '—' ? '− ₱0.00' : row.adjustment);
    setText('#payslipNet', row.net);
    lineItems.innerHTML = `
        <tr>
            <td>${escapeHtml(row.cutoff)}</td>
            <td><strong>Approved work hours</strong><small>${escapeHtml(staff.schedule)}</small></td>
            <td>${escapeHtml(row.days)} days · ${escapeHtml(row.hours)} approved hours</td>
            <td class="pay-amount">${escapeHtml(row.gross)}</td>
        </tr>
        <tr class="payslip-adjustment-row">
            <td>${escapeHtml(row.cutoff)}</td>
            <td><strong>Adjustments</strong><small>Admin payroll review</small></td>
            <td>${row.adjustment === '—' ? 'No deductions or additions recorded.' : escapeHtml(row.adjustment)}</td>
            <td>${escapeHtml(row.net)}</td>
        </tr>
    `;
    modal.removeAttribute('hidden');
    refreshIcons();
}

function getStaffReceipt(row, staff) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1180" viewBox="0 0 900 1180">
            <rect width="900" height="1180" fill="#f7fbff"/>
            <rect x="70" y="70" width="760" height="1040" rx="28" fill="#ffffff" stroke="#d9e5f2" stroke-width="3"/>
            <rect x="70" y="70" width="760" height="150" rx="28" fill="#0f3158"/>
            ${getPayrollReceiptBrandSvg('Staff Payroll Payment Receipt')}
            <text x="115" y="290" fill="#6d86a3" font-family="Arial, sans-serif" font-size="18" font-weight="800">STAFF MEMBER</text>
            <text x="115" y="330" fill="#102b4d" font-family="Arial, sans-serif" font-size="32" font-weight="800">${escapeHtml(staff.name)}</text>
            <text x="115" y="365" fill="#607891" font-family="Arial, sans-serif" font-size="20">${escapeHtml(staff.id)} · ${escapeHtml(staff.department)} · ${escapeHtml(staff.role)}</text>
            <text x="115" y="450" fill="#6d86a3" font-family="Arial, sans-serif" font-size="18" font-weight="800">PAYROLL CUTOFF</text>
            <text x="115" y="490" fill="#102b4d" font-family="Arial, sans-serif" font-size="28" font-weight="800">${escapeHtml(row.cutoff)}</text>
            <text x="115" y="575" fill="#6d86a3" font-family="Arial, sans-serif" font-size="18" font-weight="800">APPROVED HOURS</text>
            <text x="115" y="615" fill="#102b4d" font-family="Arial, sans-serif" font-size="30" font-weight="800">${escapeHtml(row.hours)} hours</text>
            <rect x="115" y="720" width="670" height="130" rx="18" fill="#f0faf5" stroke="#abd1bd" stroke-width="2"/>
            <text x="145" y="770" fill="#16764b" font-family="Arial, sans-serif" font-size="18" font-weight="800">NET PAYROLL PAID</text>
            <text x="145" y="820" fill="#16764b" font-family="Arial, sans-serif" font-size="42" font-weight="900">${escapeHtml(row.net)}</text>
            <text x="115" y="1015" fill="#607891" font-family="Arial, sans-serif" font-size="18">Generated by ${escapeHtml(getCompanyBrandName())} Admin Dashboard</text>
            <text x="115" y="1050" fill="#607891" font-family="Arial, sans-serif" font-size="18">Receipt No. VLACE-${escapeHtml(staff.id.replace(/[^A-Z0-9]/gi, ''))}-${escapeHtml(row.cutoff.replace(/[^A-Z0-9]/gi, '').slice(0, 10))}</text>
        </svg>
    `;

    return {
        url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
        name: `VLACE Staff Payroll Receipt - ${staff.name} - ${row.cutoff}.svg`,
        uploadedAt: row.status === 'Paid' ? 'System receipt' : 'Preview pending payroll release',
    };
}

function getStaffPayrollReceipt(row, staff) {
    const key = getStaffPayrollReceiptKey(staff, row.cutoff);
    return payrollReceiptUploads[key] || getStaffReceipt(row, staff);
}

function openStaffPayrollReceiptUpload(index) {
    const staff = getSelectedStaff();
    const row = staffPayrollRows[index] || staffPayrollRows[0];
    if (!staff || !row) return;

    const key = getStaffPayrollReceiptKey(staff, row.cutoff);
    const receipt = payrollReceiptUploads[key] || null;
    activePayrollReceiptContext = { kind: 'staff', staffId: staff.id, rowIndex: index };

    setText('#payrollReceiptUploadTeacher', staff.name);
    setText('#payrollReceiptUploadPeriod', row.cutoff);
    setText('#payrollReceiptUploadAmount', row.net);
    setFieldValue('#payrollReceiptFile', '');
    setText('#payrollReceiptUploadFileName', receipt ? receipt.name : 'No file selected');

    const preview = document.getElementById('payrollReceiptUploadPreview');
    const image = document.getElementById('payrollReceiptUploadImage');
    if (preview && image) {
        if (receipt) {
            image.src = receipt.url;
            preview.removeAttribute('hidden');
        } else {
            image.removeAttribute('src');
            preview.setAttribute('hidden', '');
        }
    }

    document.getElementById('payrollReceiptUploadModal')?.removeAttribute('hidden');
    refreshIcons();
}

function openStaffPayrollReceipt(index) {
    const staff = getSelectedStaff();
    const row = staffPayrollRows[index] || staffPayrollRows[0];
    if (!staff || !row) return;

    const receipt = getStaffPayrollReceipt(row, staff);
    setText('#payrollReceiptViewTitle', `${staff.name} Payroll Receipt`);
    setText('#payrollReceiptViewTeacher', staff.name);
    setText('#payrollReceiptViewPeriod', row.cutoff);
    setText('#payrollReceiptViewUploaded', receipt.uploadedAt);
    setText('#payrollReceiptViewFileName', receipt.name);
    const image = document.getElementById('payrollReceiptViewImage');
    if (image) image.src = receipt.url;
    const download = document.getElementById('payrollReceiptDownload');
    if (download) {
        download.href = receipt.url;
        download.download = receipt.name;
    }
    document.getElementById('payrollReceiptViewModal')?.removeAttribute('hidden');
    refreshIcons();
}

function renderStaffDocuments() {
    const body = document.getElementById('staffDocumentsBody');
    if (!body) return;

    if (!staffDocuments.length) {
        body.innerHTML = '<tr><td colspan="6" class="empty-row">No staff documents are currently on file.</td></tr>';
        return;
    }

    body.innerHTML = staffDocuments.map((documentRecord, index) => `
        <tr>
            <td class="strong">${escapeHtml(documentRecord.title)}</td>
            <td>${escapeHtml(documentRecord.category)}</td>
            <td><span class="document-file-badge">${escapeHtml(documentRecord.type)}</span></td>
            <td>${escapeHtml(documentRecord.updated)}</td>
            <td><span class="status-pill ${documentRecord.status === 'Pending Review' ? 'warning' : 'positive'}">${escapeHtml(documentRecord.status)}</span></td>
            <td>
                <div class="employee-record-actions">
                    <button type="button" data-staff-document-view="${index}">View</button>
                    <button class="document-delete-button" type="button" data-staff-document-delete="${index}">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');

    body.querySelectorAll('[data-staff-document-view]').forEach((button) => {
        button.addEventListener('click', () => openEmployeeDocumentViewer('staff', Number(button.dataset.staffDocumentView), getSelectedStaff()));
    });
    body.querySelectorAll('[data-staff-document-delete]').forEach((button) => {
        button.addEventListener('click', () => deleteStaffDocument(Number(button.dataset.staffDocumentDelete)));
    });
}

function deleteStaffDocument(index) {
    const documentRecord = staffDocuments[index];
    const staff = getSelectedStaff();
    if (!documentRecord) return;

    const confirmed = window.confirm(`Delete "${documentRecord.title}" from ${staff?.name || 'this staff member'}'s documents?\n\nAdmin only action.`);
    if (!confirmed) return;

    staffDocuments.splice(index, 1);
    renderStaffDocuments();
    showSparkToast(`${documentRecord.title} deleted from staff documents.`);
}

function renderStaffFeedback() {
    const body = document.getElementById('staffFeedbackBody');
    if (!body) return;

    if (!staffFeedbackRecords.length) {
        body.innerHTML = '<tr><td colspan="7" class="empty-row">No staff feedback records are currently on file.</td></tr>';
        return;
    }

    body.innerHTML = staffFeedbackRecords.map((record, index) => `
        <tr>
            <td>${escapeHtml(record.period)}</td>
            <td><strong class="link-like">${escapeHtml(record.type)}</strong></td>
            <td>${escapeHtml(record.reviewedBy)}</td>
            <td>${escapeHtml(record.result)}</td>
            <td><span class="status-pill ${record.visibility === 'Published' ? 'positive' : 'neutral'}">${escapeHtml(record.visibility)}</span></td>
            <td><span class="status-pill ${record.acknowledged ? 'positive' : 'warning'}">${record.acknowledged ? '✓ Acknowledged' : 'Pending'}</span></td>
            <td>
                <div class="employee-record-actions">
                    <button type="button" data-staff-feedback-view="${index}">View</button>
                    <button class="document-delete-button" type="button" data-staff-feedback-delete="${index}">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');

    body.querySelectorAll('[data-staff-feedback-view]').forEach((button) => {
        button.addEventListener('click', () => openEmployeeFeedbackDetails('staff', Number(button.dataset.staffFeedbackView), getSelectedStaff()));
    });
    body.querySelectorAll('[data-staff-feedback-delete]').forEach((button) => {
        button.addEventListener('click', () => deleteStaffFeedback(Number(button.dataset.staffFeedbackDelete)));
    });
}

function deleteStaffFeedback(index) {
    const record = staffFeedbackRecords[index];
    const staff = getSelectedStaff();
    if (!record) return;

    const confirmed = window.confirm(`Delete "${record.type}" from ${staff?.name || 'this staff member'}'s feedback?\n\nAdmin only action.`);
    if (!confirmed) return;

    staffFeedbackRecords.splice(index, 1);
    renderStaffFeedback();
    showSparkToast(`${record.type} deleted from staff feedback.`);
}

function renderStaffPolicyLibrary(staff = getSelectedStaff()) {
    const body = document.getElementById('staffPolicyBody');
    if (!body) return;

    const category = document.getElementById('staffPolicyCategoryFilter')?.value || 'All categories';
    const search = document.getElementById('staffPolicySearch')?.value.trim().toLowerCase() || '';
    const acknowledgedKeyPrefix = `staff-policy:${staff.id}:`;
    const acknowledgedCount = employeePolicyLibrary.filter((policy) => localStorage.getItem(`${acknowledgedKeyPrefix}${policy.id}`)).length;
    const filtered = employeePolicyLibrary.filter((policy) => {
        const matchesCategory = category === 'All categories' || policy.category === category;
        const matchesSearch = !search || `${policy.title} ${policy.id} ${policy.category}`.toLowerCase().includes(search);
        return matchesCategory && matchesSearch;
    });

    setText('#staffPolicyProgressCount', `${acknowledgedCount} of ${employeePolicyLibrary.length}`);
    setText('#staffPolicyRequiredCount', `${employeePolicyLibrary.length - acknowledgedCount} policies require review`);
    const bar = document.getElementById('staffPolicyProgressBar');
    if (bar) bar.style.width = `${Math.round((acknowledgedCount / employeePolicyLibrary.length) * 100)}%`;

    if (!filtered.length) {
        body.innerHTML = '<tr><td colspan="6" class="empty-row">No policies match the selected filters.</td></tr>';
        return;
    }

    body.innerHTML = filtered.map((policy) => {
        const confirmedOn = localStorage.getItem(`${acknowledgedKeyPrefix}${policy.id}`);
        return `
            <tr>
                <td><strong class="link-like">${escapeHtml(policy.title)}</strong><small>${escapeHtml(policy.id)}</small></td>
                <td>${escapeHtml(policy.category)}</td>
                <td>${escapeHtml(policy.effective)}</td>
                <td><span class="status-pill ${confirmedOn ? 'positive' : 'warning'}">${confirmedOn ? '✓ Acknowledged' : 'Pending'}</span></td>
                <td>${confirmedOn || '—'}</td>
                <td><button class="secondary-button" type="button" data-staff-policy="${escapeHtml(policy.id)}">${confirmedOn ? 'Reviewed' : 'Review & Acknowledge'}</button></td>
            </tr>
        `;
    }).join('');

    body.querySelectorAll('[data-staff-policy]').forEach((button) => {
        button.addEventListener('click', () => {
            const policy = employeePolicyLibrary.find((item) => item.id === button.dataset.staffPolicy);
            if (!policy) return;
            localStorage.setItem(`${acknowledgedKeyPrefix}${policy.id}`, new Date().toLocaleString('en-PH', {
                timeZone: 'Asia/Manila',
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
            }));
            renderStaffPolicyLibrary(staff);
            showSparkToast(`${policy.title} acknowledged for ${staff.name}.`);
        });
    });
}

function getStudentRows() {
    const search = document.getElementById('studentSearch')?.value.trim().toLowerCase() || '';
    const country = document.getElementById('studentCountryFilter')?.value || 'All Countries';
    const teacher = document.getElementById('studentTeacherFilter')?.value || 'All Teachers';

    return students.filter((student) => {
        const matchesSearch = !search || student.name.toLowerCase().includes(search) || student.id.toLowerCase().includes(search);
        const matchesCountry = country === 'All Countries' || student.country === country;
        const matchesTeacher = teacher === 'All Teachers' || student.teacher === teacher;
        return matchesSearch && matchesCountry && matchesTeacher;
    });
}

function statusClass(status) {
    if (status === 'Active') return 'positive';
    if (status === 'On hold') return 'warning';
    return 'neutral';
}

function renderStudentTable() {
    const body = document.getElementById('studentTableBody');
    if (!body) return;

    const rows = getStudentRows();
    setText('#studentVisibleCount', String(rows.length));

    if (!rows.length) {
        body.innerHTML = '<tr><td colspan="8" class="empty-row">No students match the selected filters.</td></tr>';
        return;
    }

    body.innerHTML = rows.map((student) => {
        const { used, total } = getLessonParts(student.lessons);
        const percent = Math.min(100, Math.round((Number(used) / Number(total)) * 100));
        const remaining = Number(total) - Number(used);
        const creditClass = remaining <= 5 ? 'low' : '';

        return `
            <tr class="${student.id === selectedStudentId ? 'selected' : ''}" data-student-row="${student.id}" tabindex="0" aria-label="Open ${student.name} student profile">
                <td>
                    <button class="student-person" type="button" data-student-id="${student.id}">
                        <span>${getInitials(student.name)}</span>
                        <div><strong>${student.name}</strong><small>${student.id}</small></div>
                    </button>
                </td>
                <td><span class="country-badge">${student.country}</span></td>
                <td><span class="student-type type-${student.type.toLowerCase()}">${student.type}</span></td>
                <td>${student.level}</td>
                <td>${student.teacher}</td>
                <td>
                    <div class="student-lesson-cell">
                        <strong>${student.lessons}</strong>
                        <span><b style="width:${percent}%"></b></span>
                        <small class="${creditClass}">${remaining} lessons left</small>
                    </div>
                </td>
                <td><span class="payment-pill ${student.payment === 'Paid' ? 'paid' : 'due'}">${student.payment}</span></td>
                <td><span class="status-pill ${statusClass(student.status)}">${student.status}</span></td>
            </tr>
        `;
    }).join('');

    body.querySelectorAll('[data-student-row]').forEach((row) => {
        row.addEventListener('click', () => openStudentProfile(row.dataset.studentRow));
        row.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openStudentProfile(row.dataset.studentRow);
            }
        });
    });
}

function openStudentProfile(studentId) {
    const student = students.find((item) => item.id === studentId) || students[0];
    if (!student) return;

    selectedStudentId = student.id;
    const { used, total } = getLessonParts(student.lessons);
    const meta = `${student.id} · ${student.type} · ${student.level} English`;

    setText('#studentProfileAvatar', getInitials(student.name));
    setText('#studentProfileName', student.name);
    setText('#studentProfileMeta', meta);
    setText('#studentPaymentTitle', `${student.name}’s Payment History`);
    setText('#studentLessonsTitle', `${student.name}’s Lessons`);
    setText('#studentProfileId', student.id);
    setText('#studentProfileCountry', student.country);
    setText('#studentProfileType', student.type);
    setText('#studentProfileLevel', student.level);
    setText('#studentProfileStatus', student.status);
    setText('#studentProfileTeacher', student.teacher);
    setText('#studentProfileUsed', used);
    setText('#studentProfilePackage', total);
    setText('#studentProfilePayment', student.payment);
    setText('#studentProfileDay', student.preferredDay);
    setText('#studentProfileTime', student.preferredTime);
    setText('#studentProfileWechat', student.wechat);
    setText('#studentProfileWhatsapp', student.whatsapp);
    setText('#studentProfileEmail', student.email);
    setText('#studentProfileGuardian', student.guardian);
    setText('#studentProfilePhone', student.phone);
    setText('#studentReferralTitle', `${student.name}'s Referrals`);
    setText('#studentReferralCode', student.referralCode);
    setText('#studentReferralLink', student.referralLink);
    updateReferralSummary(student);
    updateStudentScheduleView(student);
    updateStudentPackageBookingStatus(student);
    document.querySelectorAll('[data-student-lesson-teacher]').forEach((node) => {
        node.textContent = student.teacher;
    });
    document.querySelectorAll('[data-student-schedule-teacher]').forEach((node) => {
        node.textContent = student.teacher;
    });

    document.getElementById('studentDirectoryPanel')?.setAttribute('hidden', '');
    document.getElementById('studentProfilePanel')?.removeAttribute('hidden');
    setBreadcrumbs([
        { label: 'Students', action: 'students' },
        { label: 'Directory', action: 'student-directory' },
        { label: student.name },
    ]);
    document.querySelectorAll('[data-student-row]').forEach((row) => {
        row.classList.toggle('selected', row.dataset.studentRow === student.id);
    });
    refreshIcons();
}

function setStudentProfileTab(tabName) {
    document.querySelectorAll('[data-student-tab]').forEach((button) => {
        button.classList.toggle('active', button.dataset.studentTab === tabName);
    });

    document.querySelectorAll('[data-student-tab-panel]').forEach((panel) => {
        panel.classList.toggle('active', panel.dataset.studentTabPanel === tabName);
    });

    refreshIcons();
}

function getSelectedStudent() {
    return students.find((student) => student.id === selectedStudentId) || students[0];
}

function updateReferralSummary(student = getSelectedStudent()) {
    const referrals = student?.referrals || { total: 0, converted: 0, credits: 0, discount: '0%' };
    setText('#studentReferralTotal', String(referrals.total));
    setText('#studentReferralConverted', String(referrals.converted));
    setText('#studentReferralCredits', String(referrals.credits));
    setText('#studentReferralDiscount', referrals.discount);
}

function updateStudentScheduleView(student = getSelectedStudent()) {
    if (!student) return;

    const schedule = student.schedule || { duration: '25 minutes', frequency: '2x weekly', platform: 'Voov' };
    setText('#studentScheduleTitle', `${student.name}'s Schedule`);
    setText('#studentSchedulePreferredDay', student.preferredDay);
    setText('#studentSchedulePreferredTime', student.preferredTime);
    setText('#studentScheduleTeacher', student.teacher);
    setText('#studentScheduleClassTime', `${student.preferredTime} PHT`);
    setText('#studentScheduleDuration', schedule.duration);
    setText('#studentScheduleFrequency', schedule.frequency);
    setText('#studentSchedulePlatform', schedule.platform);

    const preferred = student.preferredDay.toLowerCase();
    document.querySelectorAll('#studentScheduleDays span').forEach((node) => {
        node.classList.toggle('active', preferred.includes(node.textContent.toLowerCase()));
    });

    document.querySelectorAll('[data-student-schedule-teacher]').forEach((node) => {
        node.textContent = student.teacher;
    });
}

function closeStudentProfile() {
    document.getElementById('studentProfilePanel')?.setAttribute('hidden', '');
    document.getElementById('studentDirectoryPanel')?.removeAttribute('hidden');
    setBreadcrumbs(getSectionBreadcrumb('students'));
    refreshIcons();
}

function openStudentEditDrawer() {
    const student = getSelectedStudent();
    if (!student) return;

    const { used, total } = getLessonParts(student.lessons);
    setText('#studentEditMeta', `${student.name} · ${student.id}`);
    setFieldValue('#studentEditName', student.name);
    setFieldValue('#studentEditCountry', student.country);
    setFieldValue('#studentEditType', student.type);
    setFieldValue('#studentEditLevel', student.level);
    setFieldValue('#studentEditStatus', student.status);
    setFieldValue('#studentEditTeacher', student.teacher);
    setFieldValue('#studentEditPackage', total);
    setFieldValue('#studentEditUsed', used);
    setFieldValue('#studentEditDay', student.preferredDay);
    setFieldValue('#studentEditTime', student.preferredTime);

    document.getElementById('studentEditOverlay')?.removeAttribute('hidden');
    document.body.classList.add('drawer-open');
    refreshIcons();
}

function closeStudentEditDrawer() {
    document.getElementById('studentEditOverlay')?.setAttribute('hidden', '');
    document.body.classList.remove('drawer-open');
}

function openStudentContactDrawer() {
    const student = getSelectedStudent();
    if (!student) return;

    setText('#studentContactRecordMeta', `${student.name} · ${student.id}`);
    setFieldValue('#studentContactWechat', student.wechat);
    setFieldValue('#studentContactWhatsapp', student.whatsapp);
    setFieldValue('#studentContactEmail', student.email);
    setFieldValue('#studentContactGuardian', student.guardian);
    setFieldValue('#studentContactPhone', student.phone);
    setFieldValue('#studentContactReason', '');

    document.getElementById('studentContactOverlay')?.removeAttribute('hidden');
    document.body.classList.add('drawer-open');
    refreshIcons();
}

function closeStudentContactDrawer() {
    document.getElementById('studentContactOverlay')?.setAttribute('hidden', '');
    document.body.classList.remove('drawer-open');
}

function openStudentNoteModal() {
    const student = getSelectedStudent();
    if (!student) return;

    setText('#studentNoteTitle', `Add Profile Note for ${student.name}`);
    setFieldValue('#studentNoteTitleInput', '');
    setFieldValue('#studentNoteDescription', '');
    setFieldValue('#studentNoteVisibility', 'Hidden from students');
    setFieldValue('#studentNoteCategory', 'General note');
    document.getElementById('studentNoteModal')?.removeAttribute('hidden');
    document.getElementById('studentNoteTitleInput')?.focus();
    refreshIcons();
}

function closeStudentNoteModal() {
    document.getElementById('studentNoteModal')?.setAttribute('hidden', '');
}

function addStudentActivity(title, description) {
    const list = document.getElementById('studentActivityList');
    if (!list) return;

    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    list.insertAdjacentHTML('afterbegin', `
        <li>
            <span></span>
            <div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(description)}</p></div>
            <div><strong>Van A.</strong><small>Admin</small></div>
            <div><strong>${formattedDate}</strong><small>${formatPhtTime(date)} PHT</small></div>
        </li>
    `);
}

function saveStudentActivityNote() {
    const title = document.getElementById('studentNoteTitleInput')?.value.trim();
    const description = document.getElementById('studentNoteDescription')?.value.trim();
    const category = document.getElementById('studentNoteCategory')?.value || 'General note';
    const visibility = document.getElementById('studentNoteVisibility')?.value || 'Hidden from students';
    if (!title || !description) return;

    addStudentActivity(title, `${description} · ${category} · ${visibility}`);
    closeStudentNoteModal();
    showSparkToast('Profile note added in prototype mode.');
}

function saveStudentContactDetails() {
    const student = getSelectedStudent();
    if (!student) return;

    student.wechat = document.getElementById('studentContactWechat')?.value.trim() || 'Not provided';
    student.whatsapp = document.getElementById('studentContactWhatsapp')?.value.trim() || 'Not provided';
    student.email = document.getElementById('studentContactEmail')?.value.trim() || 'Not provided';
    student.guardian = document.getElementById('studentContactGuardian')?.value.trim() || 'Not provided';
    student.phone = document.getElementById('studentContactPhone')?.value.trim() || 'Not provided';

    setText('#studentProfileWechat', student.wechat);
    setText('#studentProfileWhatsapp', student.whatsapp);
    setText('#studentProfileEmail', student.email);
    setText('#studentProfileGuardian', student.guardian);
    setText('#studentProfilePhone', student.phone);

    const reason = document.getElementById('studentContactReason')?.value.trim();
    addStudentActivity(
        'Sensitive contact details updated',
        reason || 'Restricted parent and guardian contact information was updated by an authorized admin.'
    );

    closeStudentContactDrawer();
    showSparkToast('Sensitive contact details saved in prototype mode.');
}

function saveStudentProfileEdit() {
    const student = getSelectedStudent();
    if (!student) return;

    const cleanName = document.getElementById('studentEditName')?.value.trim();
    if (!cleanName) return;

    const used = document.getElementById('studentEditUsed')?.value || getLessonParts(student.lessons).used;
    const total = document.getElementById('studentEditPackage')?.value || getLessonParts(student.lessons).total;

    student.name = cleanName;
    student.country = document.getElementById('studentEditCountry')?.value || student.country;
    student.type = document.getElementById('studentEditType')?.value || student.type;
    student.level = document.getElementById('studentEditLevel')?.value || student.level;
    student.status = document.getElementById('studentEditStatus')?.value || student.status;
    student.teacher = document.getElementById('studentEditTeacher')?.value || student.teacher;
    student.lessons = `${used} / ${total}`;
    student.preferredDay = document.getElementById('studentEditDay')?.value.trim() || student.preferredDay;
    student.preferredTime = document.getElementById('studentEditTime')?.value.trim() || student.preferredTime;

    openStudentProfile(student.id);
    renderStudentTable();
    closeStudentEditDrawer();
    showSparkToast('Student profile changes saved in prototype mode.');
}

function formatManualPaymentDate(value) {
    if (!value) return 'Today';
    const date = new Date(`${value}T00:00:00`);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getCurrencySymbol(currency) {
    return {
        USD: '$',
        CNY: '¥',
        JPY: '¥',
        KRW: '₩',
        AED: 'AED ',
        SAR: 'SAR ',
        ILS: '₪',
        PHP: '₱',
    }[currency] || '';
}

function calculateManualPaymentNet() {
    const amount = Number(document.getElementById('manualPaymentAmount')?.value || 0);
    const discount = Number(document.getElementById('manualPaymentDiscount')?.value || 0);
    const referralDiscount = Number(document.getElementById('manualPaymentReferralDiscount')?.value || 0);
    const currency = document.getElementById('manualPaymentCurrency')?.value || 'USD';
    const net = Math.max(0, amount - (amount * discount / 100) - (amount * referralDiscount / 100));
    setFieldValue('#manualPaymentNet', `${getCurrencySymbol(currency)}${net.toFixed(2)}`);
    return net;
}

function openManualPaymentDrawer() {
    const student = getSelectedStudent();
    if (!student) return;

    setText('#studentPaymentRecordMeta', `${student.name} · ${student.id}`);
    setText('#studentPaymentRecordAvatar', getInitials(student.name));
    setText('#studentPaymentRecordName', student.name);
    setText('#studentPaymentRecordContext', `Payment History · ${student.country}`);
    setFieldValue('#manualPaymentDate', new Date().toISOString().slice(0, 10));
    setFieldValue('#manualPaymentPackage', '15 Lessons');
    setFieldValue('#manualPaymentAmount', '');
    setFieldValue('#manualPaymentCurrency', 'USD');
    setFieldValue('#manualPaymentDiscount', '0');
    setFieldValue('#manualPaymentReferralDiscount', '0');
    setFieldValue('#manualPaymentReference', `MAN-${Date.now().toString().slice(-6)}`);
    setFieldValue('#manualPaymentReceipt', '');
    calculateManualPaymentNet();

    document.getElementById('studentPaymentOverlay')?.removeAttribute('hidden');
    document.body.classList.add('drawer-open');
    refreshIcons();
}

function closeManualPaymentDrawer() {
    document.getElementById('studentPaymentOverlay')?.setAttribute('hidden', '');
    document.body.classList.remove('drawer-open');
}

function getStatusPillClass(status) {
    if (status === 'Paid') return 'positive';
    if (status === 'Pending') return 'warning';
    return 'neutral';
}

function cleanReceiptText(value) {
    return (value || '').replace('✓', '').trim();
}

function openPaymentReceipt(button) {
    const row = button.closest('tr');
    const student = getSelectedStudent();
    if (!row || !student) return;

    const cells = Array.from(row.children).map((cell) => cleanReceiptText(cell.innerText));
    const [
        date,
        packageName,
        originalAmount,
        discount,
        referralDiscount,
        netAmount,
        processor,
        reference,
        status,
        synchronized,
    ] = cells;

    setText('#paymentReceiptTitle', student.name);
    setText('#receiptStudentMeta', `${student.id} · ${student.country} · ${student.type} · ${student.level} English`);
    setText('#receiptNumber', `RCPT-${reference || Date.now().toString().slice(-6)}`);
    setText('#receiptDate', date || 'Today');
    setText('#receiptReference', reference || 'Manual record');
    setText('#receiptStatus', status || 'Paid');
    setText('#receiptPackage', packageName || 'Lesson Package');
    setText('#receiptProcessor', processor || 'Manual Payment');
    setText('#receiptSynchronized', synchronized || 'Manual record');
    setText('#receiptOriginalAmount', originalAmount || '$0.00');
    setText('#receiptDiscount', discount || '0%');
    setText('#receiptReferralDiscount', referralDiscount || '0%');
    setText('#receiptNetAmount', netAmount || '$0.00');

    document.getElementById('paymentReceiptModal')?.removeAttribute('hidden');
    refreshIcons();
}

function closePaymentReceipt() {
    document.getElementById('paymentReceiptModal')?.setAttribute('hidden', '');
}

function saveManualPaymentRecord() {
    const amount = Number(document.getElementById('manualPaymentAmount')?.value || 0);
    const reference = document.getElementById('manualPaymentReference')?.value.trim();
    if (!amount || !reference) return;

    const currency = document.getElementById('manualPaymentCurrency')?.value || 'USD';
    const symbol = getCurrencySymbol(currency);
    const net = calculateManualPaymentNet();
    const status = document.getElementById('manualPaymentStatus')?.value || 'Paid';
    const time = formatPhtTime();
    const body = document.getElementById('studentPaymentBody');
    if (!body) return;

    body.insertAdjacentHTML('afterbegin', `
        <tr>
            <td>${formatManualPaymentDate(document.getElementById('manualPaymentDate')?.value)}</td>
            <td><strong>${document.getElementById('manualPaymentPackage')?.value || 'Custom Package'}</strong></td>
            <td>${symbol}${amount.toFixed(2)}</td>
            <td>${Number(document.getElementById('manualPaymentDiscount')?.value || 0)}%</td>
            <td>${Number(document.getElementById('manualPaymentReferralDiscount')?.value || 0)}%</td>
            <td><strong class="payment-net">${symbol}${net.toFixed(2)}</strong></td>
            <td>${document.getElementById('manualPaymentProcessor')?.value || 'Manual Payment'}</td>
            <td>${reference}</td>
            <td><span class="status-pill ${getStatusPillClass(status)}">${status}</span></td>
            <td><span class="payment-sync-time">✓ Manual · ${time}</span></td>
            <td><button class="secondary-button receipt-view-button" type="button" data-payment-receipt>${document.getElementById('manualPaymentReceipt')?.value.trim() ? 'View Receipt' : 'View Receipt'}</button></td>
        </tr>
    `);

    closeManualPaymentDrawer();
    showSparkToast('Manual payment record added in prototype mode.');
}

function openReferralModal() {
    const student = getSelectedStudent();
    if (!student) return;

    setText('#referralModalTitle', `Add Referral for ${student.name}`);
    setFieldValue('#referralStudentName', '');
    setFieldValue('#referralCountry', student.country);
    setFieldValue('#referralPackage', 'Trial');
    setFieldValue('#referralStatus', 'Pending Trial');
    setFieldValue('#referralDiscount', '0');
    setFieldValue('#referralNotes', '');
    document.getElementById('referralModal')?.removeAttribute('hidden');
    document.getElementById('referralStudentName')?.focus();
}

function closeReferralModal() {
    document.getElementById('referralModal')?.setAttribute('hidden', '');
}

function getReferralStatusClass(status) {
    if (status === 'Converted') return 'positive';
    if (status === 'Pending Trial') return 'warning';
    return 'neutral';
}

function saveReferralRecord() {
    const name = document.getElementById('referralStudentName')?.value.trim();
    if (!name) return;

    const student = getSelectedStudent();
    const status = document.getElementById('referralStatus')?.value || 'Pending Trial';
    const discount = Number(document.getElementById('referralDiscount')?.value || 0);
    const reward = status === 'Converted' ? '+2 lessons' : 'Pending';
    const rewardMarkup = status === 'Converted'
        ? `<strong class="referral-reward">${reward}</strong>`
        : '<span class="lesson-link-unavailable">Pending</span>';
    const body = document.getElementById('studentReferralBody');
    if (!body || !student) return;

    body.insertAdjacentHTML('afterbegin', `
        <tr>
            <td>${formatManualPaymentDate(new Date().toISOString().slice(0, 10))}</td>
            <td><strong>${name}</strong><small>Manual referral</small></td>
            <td>${document.getElementById('referralCountry')?.value || student.country}</td>
            <td>${document.getElementById('referralPackage')?.value || 'Trial'}</td>
            <td><span class="status-pill ${getReferralStatusClass(status)}">${status}</span></td>
            <td>${rewardMarkup}</td>
            <td>${discount}%</td>
            <td>${student.guardian || student.name}</td>
            <td>${document.getElementById('referralNotes')?.value.trim() || 'Added manually.'}</td>
        </tr>
    `);

    student.referrals.total += 1;
    if (status === 'Converted') {
        student.referrals.converted += 1;
        student.referrals.credits += 2;
    }
    if (discount > 0) student.referrals.discount = `${discount}%`;
    updateReferralSummary(student);
    closeReferralModal();
    showSparkToast('Referral record added in prototype mode.');
}

function displayTimeToInput(value) {
    const match = value.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return '19:00';

    let hour = Number(match[1]);
    const minute = match[2];
    const period = match[3].toUpperCase();
    if (period === 'PM' && hour < 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;
    return `${String(hour).padStart(2, '0')}:${minute}`;
}

function inputTimeToDisplay(value) {
    if (!value) return '7:00 PM';
    const [hourValue, minute = '00'] = value.split(':');
    const hour = Number(hourValue);
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minute} ${period}`;
}

function addMinutesToTime(value, minutesToAdd) {
    const [hourValue, minuteValue = '00'] = value.split(':').map(Number);
    const totalMinutes = hourValue * 60 + minuteValue + minutesToAdd;
    const normalized = ((totalMinutes % 1440) + 1440) % 1440;
    const hour = Math.floor(normalized / 60);
    const minute = normalized % 60;
    return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

function inputTimeToRange(value, minutes = 30) {
    return `${inputTimeToDisplay(value)} - ${inputTimeToDisplay(addMinutesToTime(value, minutes))}`;
}

function formatScheduleDate(value) {
    if (!value) return 'Today';
    const date = new Date(`${value}T00:00:00`);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatScheduleDay(value) {
    if (!value) return 'Today';
    const date = new Date(`${value}T00:00:00`);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}

function setSelectOptions(selector, options, selectedValue) {
    const select = document.querySelector(selector);
    if (!select) return;

    select.innerHTML = options.map((option) => `<option>${option}</option>`).join('');
    if (selectedValue && options.includes(selectedValue)) {
        select.value = selectedValue;
    }
}

function updateClassTeacherOptions(selectedTeacher = '') {
    const country = document.getElementById('classScheduleCountry')?.value || getSelectedStudent()?.country || 'China';
    const date = document.getElementById('classScheduleDate')?.value || '';
    const time = document.getElementById('classScheduleTime')?.value || '';
    const day = date ? formatScheduleDay(date) : '';
    const countryTeachers = teachersByCountry[country] || [];
    const options = countryTeachers.filter((teacher) => {
        const availability = teacherAvailability[teacher];
        if (!availability || availability.country !== country || !day || !time) return false;
        return availability.slots.some((slot) => slot.days.includes(day) && slot.times.includes(time));
    });
    const select = document.querySelector('#classScheduleTeacher');
    const hint = document.getElementById('classTeacherAvailabilityHint');

    if (!select) return;

    if (!options.length) {
        select.innerHTML = '<option>No available teachers</option>';
        select.disabled = true;
        if (hint) hint.textContent = `No ${country} teachers are available on ${day || 'this date'} at ${time ? inputTimeToDisplay(time) : 'this time'}.`;
        return;
    }

    select.disabled = false;
    setSelectOptions('#classScheduleTeacher', options, selectedTeacher && options.includes(selectedTeacher) ? selectedTeacher : options[0]);
    if (hint) hint.textContent = `${options.length} available teacher${options.length === 1 ? '' : 's'} for ${country} on ${day} at ${inputTimeToDisplay(time)}.`;
}

function getDefaultCurriculumGroup(student = getSelectedStudent()) {
    if (student?.type === 'Adult') return 'Adults';
    if (student?.type === 'Teenager') return 'Teenagers';
    return 'Kids';
}

function getCurriculumPrograms(groupName) {
    return curriculumGroups.find((group) => group.name === groupName)?.programs || [];
}

function getCurriculumModules(program) {
    const catalogModules = curriculumModuleCatalog[program] || [
        'Module 1 · Foundations',
        'Module 2 · Skills Practice',
        'Module 3 · Applied English',
    ];
    const fileModules = curriculumLessons
        .filter((lesson) => lesson.program === program)
        .map((lesson) => lesson.module);

    return Array.from(new Set([...fileModules, ...catalogModules]));
}

function getCurriculumLessons(group, program, module) {
    const fileLessons = curriculumLessons
        .filter((lesson) => lesson.group === group && lesson.program === program && lesson.module === module)
        .map((lesson) => lesson.title);

    if (fileLessons.length) return fileLessons;

    return Array.from({ length: 30 }, (_, index) => `${module} · Lesson ${String(index + 1).padStart(2, '0')}`);
}

function updateClassProgramOptions(selectedProgram = '') {
    const group = document.getElementById('classScheduleCategory')?.value || getDefaultCurriculumGroup();
    const programs = getCurriculumPrograms(group);
    const program = selectedProgram && programs.includes(selectedProgram) ? selectedProgram : programs[0];
    setSelectOptions('#classScheduleProgram', programs, program);
    updateClassModuleOptions();
}

function updateClassModuleOptions(selectedModule = '') {
    const program = document.getElementById('classScheduleProgram')?.value || getCurriculumPrograms(getDefaultCurriculumGroup())[0];
    const modules = getCurriculumModules(program);
    const module = selectedModule && modules.includes(selectedModule) ? selectedModule : modules[0];
    setSelectOptions('#classScheduleModule', modules, module);
    updateClassLessonOptions();
}

function updateClassLessonOptions(selectedLesson = '') {
    const group = document.getElementById('classScheduleCategory')?.value || getDefaultCurriculumGroup();
    const program = document.getElementById('classScheduleProgram')?.value || getCurriculumPrograms(group)[0];
    const module = document.getElementById('classScheduleModule')?.value || getCurriculumModules(program)[0];
    const lessons = getCurriculumLessons(group, program, module);
    const lesson = selectedLesson && lessons.includes(selectedLesson) ? selectedLesson : lessons[0];
    setSelectOptions('#classScheduleTopic', lessons, lesson);
}

function openScheduleModal() {
    const student = getSelectedStudent();
    if (!student) return;

    const schedule = student.schedule || { duration: '25 minutes', frequency: '2x weekly', platform: 'Voov' };
    setText('#scheduleModalTitle', `Edit Schedule for ${student.name}`);
    setFieldValue('#schedulePreferredDays', student.preferredDay);
    setFieldValue('#schedulePreferredTime', displayTimeToInput(student.preferredTime));
    setFieldValue('#scheduleDuration', schedule.duration);
    setFieldValue('#scheduleFrequency', schedule.frequency);
    setFieldValue('#schedulePlatform', schedule.platform);
    setFieldValue('#scheduleNote', '');
    document.getElementById('scheduleModal')?.removeAttribute('hidden');
    document.getElementById('schedulePreferredDays')?.focus();
    refreshIcons();
}

function closeScheduleModal() {
    document.getElementById('scheduleModal')?.setAttribute('hidden', '');
}

function saveScheduleRecord() {
    const student = getSelectedStudent();
    if (!student) return;

    const preferredDays = document.getElementById('schedulePreferredDays')?.value.trim();
    if (!preferredDays) return;

    student.preferredDay = preferredDays;
    student.preferredTime = inputTimeToDisplay(document.getElementById('schedulePreferredTime')?.value || '');
    student.schedule = {
        duration: document.getElementById('scheduleDuration')?.value || '25 minutes',
        frequency: document.getElementById('scheduleFrequency')?.value || '2x weekly',
        platform: document.getElementById('schedulePlatform')?.value || 'Voov',
    };

    setText('#studentProfileDay', student.preferredDay);
    setText('#studentProfileTime', student.preferredTime);
    updateStudentScheduleView(student);
    closeScheduleModal();
    showSparkToast('Student schedule saved in prototype mode.');
}

function openClassScheduleModal() {
    const student = getSelectedStudent();
    if (!student) return;

    const today = '2026-08-06';
    const schedule = student.schedule || { duration: '25 minutes' };
    setText('#classScheduleTitle', `Add Class for ${student.name}`);
    setFieldValue('#classScheduleDate', today);
    setFieldValue('#classScheduleTime', displayTimeToInput(student.preferredTime));
    setFieldValue('#classScheduleCountry', student.country);
    updateClassTeacherOptions(student.teacher);
    setFieldValue('#classScheduleDuration', schedule.duration || '25 minutes');
    const defaultGroup = getDefaultCurriculumGroup(student);
    setSelectOptions('#classScheduleCategory', curriculumGroups.map((group) => group.name), defaultGroup);
    updateClassProgramOptions();
    document.getElementById('classScheduleModal')?.removeAttribute('hidden');
    document.getElementById('classScheduleDate')?.focus();
    refreshIcons();
}

function closeClassScheduleModal() {
    document.getElementById('classScheduleModal')?.setAttribute('hidden', '');
}

function saveClassScheduleRecord() {
    const date = document.getElementById('classScheduleDate')?.value;
    const topic = document.getElementById('classScheduleTopic')?.value;
    if (!date || !topic) return;

    const time = inputTimeToDisplay(document.getElementById('classScheduleTime')?.value || '');
    const teacherSelect = document.getElementById('classScheduleTeacher');
    if (!teacherSelect || teacherSelect.disabled || teacherSelect.value === 'No available teachers') {
        window.alert('No teacher is available for the selected country, date, and time. Please change the time or country.');
        return;
    }

    const teacher = teacherSelect.value || getSelectedStudent()?.teacher || 'Teacher';
    const body = document.getElementById('studentScheduleBody');
    if (!body) return;

    body.insertAdjacentHTML('afterbegin', `
        <tr>
            <td>${formatScheduleDate(date)}</td>
            <td>${formatScheduleDay(date)}</td>
            <td>${time} PHT</td>
            <td data-student-schedule-teacher>${teacher}</td>
            <td>${topic}</td>
            <td><span class="status-pill positive">From teacher profile</span></td>
        </tr>
    `);

    const student = getSelectedStudent();
    if (student) {
        student.assignedClasses = (student.assignedClasses ?? Number(student.schedule?.frequency?.match(/\d+/)?.[0] || 0)) + 1;
        updateStudentPackageBookingStatus(student);
    }

    closeClassScheduleModal();
    showSparkToast('Class added to student schedule.');
}

function handleLessonAction(button) {
    const topic = button.dataset.lessonTopic || 'this lesson';
    const action = button.dataset.lessonAction;
    const row = button.closest('tr');

    if (action === 'classroom') {
        showSparkToast(`Secure classroom opened for ${topic}.`);
    } else if (action === 'recording') {
        showSparkToast(`Recording viewer opened for ${topic}.`);
    } else if (action === 'feedback') {
        openLessonFeedbackModal(row, topic);
    } else if (action === 'add-feedback') {
        openTeacherFeedbackModal(row, topic);
    } else if (action === 'meeting-url') {
        openVideoUrlModal(row, topic);
    }
}

function attachLessonActionHandlers(scope = document) {
    scope.querySelectorAll('[data-lesson-action]').forEach((button) => {
        const freshButton = button.cloneNode(true);
        button.replaceWith(freshButton);
        freshButton.addEventListener('click', () => handleLessonAction(freshButton));
    });
    scope.querySelectorAll('[data-feedback-decision]').forEach((button) => {
        const freshButton = button.cloneNode(true);
        button.replaceWith(freshButton);
        freshButton.addEventListener('click', () => handleFeedbackDecision(freshButton));
    });
    scope.querySelectorAll('[data-lesson-row-action]').forEach((select) => {
        const freshSelect = select.cloneNode(true);
        select.replaceWith(freshSelect);
        freshSelect.addEventListener('change', () => handleLessonRowAction(freshSelect));
    });
}

function openVideoUrlModal(row, topic) {
    const student = getSelectedStudent();
    activeVideoUrlRow = row;
    const teacher = row?.querySelector('[data-student-lesson-teacher]')?.textContent || student.teacher;

    setText('#videoUrlStudent', student.name);
    setText('#videoUrlLesson', topic);
    setText('#videoUrlTeacher', teacher);
    setFieldValue('#videoRecordingUrl', row?.dataset.videoUrl || '');
    document.getElementById('videoUrlModal')?.removeAttribute('hidden');
    document.getElementById('videoRecordingUrl')?.focus();
}

function closeVideoUrlModal() {
    document.getElementById('videoUrlModal')?.setAttribute('hidden', '');
    activeVideoUrlRow = null;
}

function submitVideoUrl() {
    const input = document.getElementById('videoRecordingUrl');
    const value = input?.value.trim() || '';

    if (!value) {
        window.alert('Please paste the video recording URL before saving.');
        return;
    }

    try {
        new URL(value);
    } catch {
        window.alert('Please enter a valid video recording URL.');
        input?.focus();
        return;
    }

    if (activeVideoUrlRow) {
        const topic = document.getElementById('videoUrlLesson')?.textContent || 'this lesson';
        activeVideoUrlRow.dataset.meetingSubmitted = 'true';
        activeVideoUrlRow.dataset.videoUrl = value;

        const recordingCell = activeVideoUrlRow.children[6];
        if (recordingCell) {
            recordingCell.innerHTML = `<button class="feedback-button recording-view-button" type="button" data-lesson-action="recording" data-lesson-topic="${topic}">▶ View Recording</button>`;
            recordingCell.querySelector('[data-lesson-action="recording"]')?.addEventListener('click', (event) => handleLessonAction(event.currentTarget));
        }

        const urlButton = activeVideoUrlRow.querySelector('[data-lesson-action="meeting-url"]');
        if (urlButton) urlButton.textContent = 'Update Video';
    }

    closeVideoUrlModal();
    showSparkToast('Video recording URL saved.');
}

function openLessonFeedbackModal(row, topic) {
    const student = getSelectedStudent();
    activeFeedbackRow = row;
    const submitted = row?.dataset.feedbackSubmitted === 'true';
    const teacher = row?.querySelector('[data-student-lesson-teacher]')?.textContent || student.teacher;
    const status = row?.querySelector('.feedback-decision-note')?.textContent.trim().split(/\s{2,}/)[0]
        || (submitted ? 'Pending Approval' : 'Not Submitted');

    setText('#lessonFeedbackStudent', student.name);
    setText('#lessonFeedbackStudentInline', student.name);
    setText('#lessonFeedbackLesson', topic);
    setText('#lessonFeedbackTeacher', teacher);
    setText('#lessonFeedbackStatus', status);
    setText('#lessonFeedbackCorrectionsText', row?.dataset.feedbackCorrections || 'Use “went” when talking about yesterday instead of “go.”');
    setText('#lessonFeedbackStrengthsText', row?.dataset.feedbackStrengths || `${student.name} answered in complete sentences and participated confidently.`);
    setText('#lessonFeedbackImprovementText', row?.dataset.feedbackImprovement || 'Practice common past-tense verbs and use them in short daily sentences.');
    setText('#lessonFeedbackNoteText', row?.dataset.feedbackNote || 'Great effort today. Keep practicing and see you in the next class!');

    const statusNode = document.getElementById('lessonFeedbackStatus');
    if (statusNode) {
        statusNode.className = `status-pill ${status.includes('Approved') ? 'positive' : status.includes('Rejected') ? 'warning' : submitted ? 'warning' : 'neutral'}`;
    }

    document.getElementById('lessonFeedbackSubmitted')?.toggleAttribute('hidden', !submitted);
    document.getElementById('lessonFeedbackEmpty')?.toggleAttribute('hidden', submitted);
    document.getElementById('lessonFeedbackRevision')?.toggleAttribute('hidden', !submitted);
    document.getElementById('lessonFeedbackApprove')?.toggleAttribute('hidden', !submitted);
    document.getElementById('lessonFeedbackModal')?.removeAttribute('hidden');
}

function openTeacherFeedbackModal(row, topic) {
    const student = getSelectedStudent();
    activeTeacherFeedbackRow = row;
    const teacher = row?.querySelector('[data-student-lesson-teacher]')?.textContent || student.teacher;

    setText('#teacherFeedbackStudent', student.name);
    setText('#teacherFeedbackLesson', topic);
    setText('#teacherFeedbackTeacher', teacher);
    setFieldValue('#teacherFeedbackCorrections', row?.dataset.feedbackCorrections || '');
    setFieldValue('#teacherFeedbackStrengths', row?.dataset.feedbackStrengths || '');
    setFieldValue('#teacherFeedbackImprovement', row?.dataset.feedbackImprovement || '');
    setFieldValue('#teacherFeedbackNote', row?.dataset.feedbackNote || '');
    document.getElementById('teacherFeedbackModal')?.removeAttribute('hidden');
}

function closeTeacherFeedbackModal() {
    document.getElementById('teacherFeedbackModal')?.setAttribute('hidden', '');
    activeTeacherFeedbackRow = null;
}

function submitTeacherFeedback() {
    const hasFeedback = [
        'teacherFeedbackCorrections',
        'teacherFeedbackStrengths',
        'teacherFeedbackImprovement',
        'teacherFeedbackNote',
    ].some((id) => document.getElementById(id)?.value.trim());

    if (!hasFeedback) {
        window.alert('Please add at least one feedback field before submitting.');
        return;
    }

    if (activeTeacherFeedbackRow) {
        activeTeacherFeedbackRow.dataset.feedbackCorrections = document.getElementById('teacherFeedbackCorrections')?.value.trim() || '';
        activeTeacherFeedbackRow.dataset.feedbackStrengths = document.getElementById('teacherFeedbackStrengths')?.value.trim() || '';
        activeTeacherFeedbackRow.dataset.feedbackImprovement = document.getElementById('teacherFeedbackImprovement')?.value.trim() || '';
        activeTeacherFeedbackRow.dataset.feedbackNote = document.getElementById('teacherFeedbackNote')?.value.trim() || '';
        activeTeacherFeedbackRow.dataset.feedbackSubmitted = 'true';
        const approvalCell = activeTeacherFeedbackRow.lastElementChild;
        if (approvalCell && !approvalCell.querySelector('.feedback-approval-actions')) {
            approvalCell.innerHTML = `
                <div class="feedback-approval-actions">
                    <button class="reject-feedback" type="button" data-feedback-decision="Rejected">Reject</button>
                    <button class="approve-feedback" type="button" data-feedback-decision="Approved">✓ Approve</button>
                </div>
            `;
            approvalCell.querySelectorAll('[data-feedback-decision]').forEach((button) => {
                button.addEventListener('click', () => handleFeedbackDecision(button));
            });
        }
    }

    closeTeacherFeedbackModal();
    showSparkToast('Teacher feedback submitted for approval.');
}

function closeLessonFeedbackModal() {
    document.getElementById('lessonFeedbackModal')?.setAttribute('hidden', '');
    activeFeedbackRow = null;
}

function setFeedbackDecisionFromModal(status) {
    if (!activeFeedbackRow) return;
    const actions = activeFeedbackRow.querySelector('.feedback-approval-actions');

    if (actions) {
        actions.outerHTML = `
            <span class="feedback-decision-note ${status === 'Approved' ? 'approved' : 'rejected'}">
                ${status} by Admin
                <small>ADM-001</small>
            </span>
        `;
    }

    setText('#lessonFeedbackStatus', status);
    const statusNode = document.getElementById('lessonFeedbackStatus');
    if (statusNode) statusNode.className = `status-pill ${status === 'Approved' ? 'positive' : 'warning'}`;
    showSparkToast(`Teacher feedback ${status.toLowerCase()} in prototype mode.`);
    closeLessonFeedbackModal();
}

function handleFeedbackDecision(button) {
    const row = button.closest('tr');
    const status = button.dataset.feedbackDecision || 'Approved';
    const actions = row?.querySelector('.feedback-approval-actions');

    if (actions) {
        actions.outerHTML = `
            <span class="feedback-decision-note ${status === 'Approved' ? 'approved' : 'rejected'}">
                ${status} by Admin
                <small>ADM-001</small>
            </span>
        `;
    }

    showSparkToast(`Teacher feedback ${status.toLowerCase()} in prototype mode.`);
}

function handleLessonRowAction(select) {
    const row = select.closest('tr');
    if (!row || !select.value) return;

    const statusNode = row.querySelector('[data-lesson-status]');

    if (select.value === 'student-absent') {
        if (statusNode) {
            statusNode.textContent = 'Student Absent';
            statusNode.className = 'status-pill warning';
        }
        showSparkToast('Lesson marked as student absent in prototype mode.');
        return;
    }

    if (select.value === 'completed') {
        const missing = [];
        if (row.dataset.meetingSubmitted !== 'true') missing.push('Meeting URL');
        if (row.dataset.feedbackSubmitted !== 'true') missing.push('Teacher feedback');

        if (missing.length) {
            window.alert(`Cannot mark this lesson completed yet.\n\nPlease complete: ${missing.join(' and ')}.`);
            select.value = '';
            return;
        }

        if (statusNode) {
            statusNode.textContent = 'Completed';
            statusNode.className = 'status-pill positive';
        }
        showSparkToast('Lesson marked completed in prototype mode.');
    }
}

function handleGlobalBack() {
    const activeSection = document.querySelector('.dashboard-section.active');
    const studentProfile = document.getElementById('studentProfilePanel');
    const teacherDetail = document.getElementById('teacherDetailPanel');
    const staffDetail = document.getElementById('staffDetailPanel');

    if (activeSection?.dataset.section === 'students' && studentProfile && !studentProfile.hasAttribute('hidden')) {
        closeStudentProfile();
        return;
    }

    if (activeSection?.dataset.section === 'teachers' && teacherDetail && !teacherDetail.hasAttribute('hidden')) {
        closeTeacherDetail();
        return;
    }

    if (activeSection?.dataset.section === 'staff' && staffDetail && !staffDetail.hasAttribute('hidden')) {
        closeStaffDetail();
        return;
    }

    activateSection('overview');
}

function handleBreadcrumbAction(action) {
    if (!action) return;

    if (action === 'student-directory') {
        activateSection('students');
        closeStudentProfile();
        return;
    }

    if (action === 'teacher-directory') {
        activateSection('teachers');
        closeTeacherDetail();
        return;
    }

    if (action === 'staff-directory') {
        activateSection('staff');
        closeStaffDetail();
        return;
    }

    activateSection(action);
}

function renderSparkMessages() {
    const messagesNode = document.getElementById('sparkMessages');
    if (!messagesNode) return;

    messagesNode.innerHTML = sparkMessages.map((message, index) => `
        <div class="jarvis-message ${message.role}">
            <span>${message.role === 'jarvis' ? 'S' : 'VA'}</span>
            <div>
                <p>${message.text}</p>
                ${message.action ? `<button type="button" data-spark-action-index="${index}">${message.action.label} →</button>` : ''}
                <small>${message.time}</small>
            </div>
        </div>
    `).join('');

    messagesNode.querySelectorAll('[data-spark-action-index]').forEach((button) => {
        button.addEventListener('click', () => {
            const message = sparkMessages[Number(button.dataset.sparkActionIndex)];
            openSparkConfirm(message.action);
        });
    });

    messagesNode.scrollTop = messagesNode.scrollHeight;
}

function getSparkResponse(value) {
    const lower = value.toLowerCase();
    let answer = 'I can help with that. In the connected version, I would search your VLACE records and prepare the result for your approval.';
    let action = null;

    if (lower.includes('payment') || lower.includes('finance')) {
        answer = 'I found 3 finance items needing attention: one failed NihaoPay payment, one pending PayPal payment, and one unverified manual payment.';
        action = {
            label: 'Open Finance Transactions',
            detail: 'Navigate to Finance so you can review the affected payment records.',
            target: 'finance',
        };
    } else if (lower.includes('lead') || lower.includes('campaign') || lower.includes('marketing')) {
        answer = 'There are 18 leads marked Follow-Up and 2 campaigns needing review. IELTS Preparation Israel currently has the highest cost per lead.';
        action = {
            label: 'Open Marketing',
            detail: 'Review campaign alerts and assign follow-ups to staff.',
            target: 'marketing',
        };
    } else if (lower.includes('teacher') || lower.includes('absent')) {
        answer = 'Two teachers are marked absent today. I can prepare transfer recommendations using country team, availability, and student schedule.';
        action = {
            label: 'Review Teachers',
            detail: 'Open the Teacher Directory and review today’s schedules.',
            target: 'teachers',
        };
    } else if (lower.includes('student') || lower.includes('credit') || lower.includes('package')) {
        answer = 'I found students with low lesson balances. Eddie Zhang has 6 lessons remaining and Mira Wang has 4. I can prepare a follow-up list for renewal.';
        action = {
            label: 'Review Students',
            detail: 'Open the student list to review packages and assigned teachers.',
            target: 'students',
        };
    } else if (lower.includes('remind') || lower.includes('task')) {
        answer = 'I prepared a reminder task. Because this changes dashboard records, I need your confirmation before saving it.';
        action = { label: 'Create Reminder Task', detail: value };
    } else if (lower.includes('message') || lower.includes('email') || lower.includes('communication')) {
        answer = 'I prepared a professional message draft. You can review and edit it before anything is sent. SPARK will never send a message without your confirmation.';
        action = {
            label: 'Review Draft in Communication',
            detail: value,
            target: 'inbox',
        };
    }

    return { answer, action };
}

function submitSparkMessage(preset) {
    const input = document.getElementById('sparkInput');
    const value = (preset || input?.value || '').trim();
    if (!value) return;

    const now = formatPhtTime();
    const response = getSparkResponse(value);
    sparkMessages = [
        ...sparkMessages,
        { role: 'user', text: value, time: now },
        { role: 'jarvis', text: response.answer, time: now, action: response.action },
    ];

    if (input) input.value = '';
    document.getElementById('sparkSend')?.setAttribute('disabled', '');
    renderSparkMessages();
}

function openSparkConfirm(action) {
    if (!action) return;
    pendingSparkAction = action;
    setText('#sparkConfirmTitle', action.label);
    setText('#sparkConfirmDetail', action.detail);
    document.getElementById('sparkConfirmBackdrop')?.removeAttribute('hidden');
}

function closeSparkConfirm() {
    pendingSparkAction = null;
    document.getElementById('sparkConfirmBackdrop')?.setAttribute('hidden', '');
}

function showSparkToast(message) {
    const toast = document.getElementById('sparkToast');
    if (!toast) return;
    toast.textContent = `✓ ${message}`;
    toast.removeAttribute('hidden');
    window.setTimeout(() => toast.setAttribute('hidden', ''), 2500);
}

function confirmSparkAction() {
    if (!pendingSparkAction) return;
    const action = pendingSparkAction;
    closeSparkConfirm();

    if (action.target) {
        activateSection(action.target);
        return;
    }

    showSparkToast('Reminder task created in prototype mode.');
}

function toggleMenu(groupName) {
    if (groupName === 'marketing') {
        activateSection('marketing');
    }

    const menu = document.getElementById(`${groupName}Menu`);
    const trigger = document.querySelector(`[data-group-toggle="${groupName}"]`);
    if (!menu || !trigger) return;

    const isOpen = !menu.hasAttribute('hidden');
    if (isOpen) {
        menu.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.querySelector('.nav-chevron').textContent = '›';
        window.setTimeout(() => {
            if (!menu.classList.contains('open')) {
                menu.setAttribute('hidden', '');
            }
        }, 240);
    } else {
        menu.removeAttribute('hidden');
        window.requestAnimationFrame(() => menu.classList.add('open'));
        trigger.setAttribute('aria-expanded', 'true');
        trigger.querySelector('.nav-chevron').textContent = '⌄';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    refreshIcons();
    setupPremiumLoginMotion();
    updateOverviewTimes();
    updateExchangeRateTime();
    updateAnalyticsRefreshTime();
    updateOverview();
    renderTeacherTable();
    openTeacherProfile(teachers[0]?.id);
    renderStudentTable();
    renderStaffTable();
    openStaffProfile(staffMembers[0]?.id);
    setupLessonLibrary();
    showAuthenticatedDashboard(window.VLACE_AUTH_USER);

    document.getElementById('dashboardCountry')?.addEventListener('change', updateOverview);
    document.getElementById('phpPerUsd')?.addEventListener('input', updateOverview);
    document.getElementById('refreshRates')?.addEventListener('click', () => {
        updateExchangeRateTime();
        updateOverview();
    });

    document.getElementById('analyticsRefresh')?.addEventListener('click', () => {
        updateAnalyticsRefreshTime();
    });

    document.querySelectorAll('[data-analytics-metric]').forEach((button) => {
        button.addEventListener('click', () => setAnalyticsMetric(button.dataset.analyticsMetric));
    });

    document.querySelectorAll('.box-help-button').forEach((button) => {
        button.addEventListener('click', () => {
            window.alert(button.getAttribute('title') || 'This card explains the selected executive analytics metric.');
        });
    });

    document.getElementById('studentCountryFilter')?.addEventListener('change', renderStudentTable);
    document.getElementById('studentTeacherFilter')?.addEventListener('change', renderStudentTable);
    document.getElementById('studentSearch')?.addEventListener('input', renderStudentTable);
    document.getElementById('teacherCountryFilter')?.addEventListener('change', renderTeacherTable);
    document.getElementById('teacherStatusFilter')?.addEventListener('change', renderTeacherTable);
    document.getElementById('teacherSearch')?.addEventListener('input', renderTeacherTable);
    document.getElementById('staffRoleFilter')?.addEventListener('change', renderStaffTable);
    document.getElementById('staffStatusFilter')?.addEventListener('change', renderStaffTable);
    document.getElementById('staffSearch')?.addEventListener('input', renderStaffTable);
    document.getElementById('addStaffButton')?.addEventListener('click', () => openStaffProfileDrawer('add'));
    document.getElementById('staffEditProfile')?.addEventListener('click', () => openStaffProfileDrawer('edit'));
    document.getElementById('staffProfileClose')?.addEventListener('click', closeStaffProfileDrawer);
    document.getElementById('staffProfileCancel')?.addEventListener('click', closeStaffProfileDrawer);
    document.getElementById('staffProfileOverlay')?.addEventListener('click', (event) => {
        if (event.target.id === 'staffProfileOverlay') closeStaffProfileDrawer();
    });
    document.getElementById('staffProfileForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveStaffProfileDrawer();
    });
    document.getElementById('staffEditContactDetails')?.addEventListener('click', openStaffContactDrawer);
    document.getElementById('staffContactClose')?.addEventListener('click', closeStaffContactDrawer);
    document.getElementById('staffContactCancel')?.addEventListener('click', closeStaffContactDrawer);
    document.getElementById('staffContactOverlay')?.addEventListener('click', (event) => {
        if (event.target.id === 'staffContactOverlay') closeStaffContactDrawer();
    });
    document.getElementById('staffContactForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveStaffContactDrawer();
    });
    document.getElementById('staffAddNote')?.addEventListener('click', openStaffNoteModal);
    document.getElementById('staffNoteClose')?.addEventListener('click', closeStaffNoteModal);
    document.getElementById('staffNoteCancel')?.addEventListener('click', closeStaffNoteModal);
    document.getElementById('staffNoteModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'staffNoteModal') closeStaffNoteModal();
    });
    document.getElementById('staffNoteForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveStaffActivityNote();
    });
    document.getElementById('staffActivityList')?.addEventListener('click', (event) => {
        const deleteButton = event.target.closest('[data-staff-note-delete]');
        if (deleteButton) deleteStaffActivityNote(deleteButton);
    });
    document.getElementById('staffEditSchedule')?.addEventListener('click', openStaffScheduleDrawer);
    document.getElementById('staffScheduleClose')?.addEventListener('click', closeStaffScheduleDrawer);
    document.getElementById('staffScheduleCancel')?.addEventListener('click', closeStaffScheduleDrawer);
    document.getElementById('staffScheduleOverlay')?.addEventListener('click', (event) => {
        if (event.target.id === 'staffScheduleOverlay') closeStaffScheduleDrawer();
    });
    document.getElementById('staffScheduleDays')?.addEventListener('click', (event) => {
        const button = event.target.closest('[data-staff-schedule-day]');
        if (!button) return;
        button.classList.toggle('selected');
        updateStaffScheduleDayButtons(getSelectedStaffScheduleDays());
        updateStaffScheduleSummary();
    });
    document.getElementById('staffScheduleStart')?.addEventListener('input', updateStaffScheduleSummary);
    document.getElementById('staffScheduleEnd')?.addEventListener('input', updateStaffScheduleSummary);
    document.getElementById('staffScheduleBreakEnabled')?.addEventListener('change', updateStaffScheduleSummary);
    document.getElementById('staffScheduleForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveStaffSchedule();
    });
    document.getElementById('staffUploadDocument')?.addEventListener('click', () => openEmployeeDocumentUpload('staff'));
    document.getElementById('staffAddFeedback')?.addEventListener('click', () => openEmployeeAddFeedback('staff'));
    document.getElementById('staffPolicyCategoryFilter')?.addEventListener('change', () => renderStaffPolicyLibrary(getSelectedStaff()));
    document.getElementById('staffPolicySearch')?.addEventListener('input', () => renderStaffPolicyLibrary(getSelectedStaff()));
    document.getElementById('staffAttendanceMonthFilter')?.addEventListener('input', renderStaffCalendar);
    document.getElementById('staffAttendanceStatusFilter')?.addEventListener('change', renderStaffCalendar);
    document.getElementById('staffCalendarClearFilter')?.addEventListener('click', () => {
        setFieldValue('#staffAttendanceMonthFilter', 'August 2026');
        setFieldValue('#staffAttendanceStatusFilter', 'All');
        renderStaffCalendar();
    });
    document.getElementById('staffCalendarGrid')?.addEventListener('click', (event) => {
        const dayButton = event.target.closest('[data-staff-calendar-day]');
        if (!dayButton) return;
        openStaffAttendanceModal(Number(dayButton.dataset.staffCalendarDay));
    });
    document.getElementById('staffAttendanceClose')?.addEventListener('click', closeStaffAttendanceModal);
    document.getElementById('staffAttendanceCancel')?.addEventListener('click', closeStaffAttendanceModal);
    document.getElementById('staffAttendanceModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'staffAttendanceModal') closeStaffAttendanceModal();
    });
    document.getElementById('staffAttendanceForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveStaffAttendanceRecord();
    });
    document.querySelectorAll('[data-staff-tab]').forEach((button) => {
        button.addEventListener('click', () => setStaffProfileTab(button.dataset.staffTab));
    });
    document.getElementById('addTeacherButton')?.addEventListener('click', addTeacherFromPrompt);
    document.getElementById('editTeacherLinks')?.addEventListener('click', openTeacherLinksDrawer);
    document.getElementById('teacherDetailEditLinks')?.addEventListener('click', openTeacherLinksDrawer);
    document.getElementById('teacherLinksClose')?.addEventListener('click', closeTeacherLinksDrawer);
    document.getElementById('teacherLinksCancel')?.addEventListener('click', closeTeacherLinksDrawer);
    document.getElementById('teacherLinksOverlay')?.addEventListener('click', (event) => {
        if (event.target.id === 'teacherLinksOverlay') closeTeacherLinksDrawer();
    });
    document.getElementById('teacherLinksForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveTeacherMeetingLinks();
    });
    document.querySelectorAll('[data-teacher-tab]').forEach((button) => {
        button.addEventListener('click', () => setTeacherProfileTab(button.dataset.teacherTab));
    });
    document.getElementById('teacherLinksPanelEdit')?.addEventListener('click', openTeacherLinksDrawer);
    document.getElementById('teacherEditContactDetails')?.addEventListener('click', openTeacherContactDrawer);
    document.getElementById('teacherAddNote')?.addEventListener('click', openTeacherNoteModal);
    document.getElementById('teacherUploadDocument')?.addEventListener('click', openTeacherDocumentUpload);
    document.getElementById('teacherDocumentViewerClose')?.addEventListener('click', closeTeacherDocumentViewer);
    document.getElementById('teacherDocumentViewerDone')?.addEventListener('click', closeTeacherDocumentViewer);
    document.getElementById('teacherDocumentViewerOverlay')?.addEventListener('click', (event) => {
        if (event.target.id === 'teacherDocumentViewerOverlay') closeTeacherDocumentViewer();
    });
    document.getElementById('documentPagePrevious')?.addEventListener('click', () => {
        const overlay = document.getElementById('teacherDocumentViewerOverlay');
        if (!overlay) return;
        overlay.dataset.documentPage = String(Math.max(1, Number(overlay.dataset.documentPage || 1) - 1));
        updateTeacherDocumentPage();
    });
    document.getElementById('documentPageNext')?.addEventListener('click', () => {
        const overlay = document.getElementById('teacherDocumentViewerOverlay');
        if (!overlay) return;
        const index = Number(overlay.dataset.documentIndex || 0);
        const documentRecord = teacherDocuments[index] || teacherDocuments[0];
        const totalPages = documentRecord.category === 'Contract' ? 4 : 2;
        overlay.dataset.documentPage = String(Math.min(totalPages, Number(overlay.dataset.documentPage || 1) + 1));
        updateTeacherDocumentPage();
    });
    document.getElementById('teacherDocumentUploadClose')?.addEventListener('click', closeTeacherDocumentUpload);
    document.getElementById('teacherDocumentUploadCancel')?.addEventListener('click', closeTeacherDocumentUpload);
    document.getElementById('teacherDocumentUploadOverlay')?.addEventListener('click', (event) => {
        if (event.target.id === 'teacherDocumentUploadOverlay') closeTeacherDocumentUpload();
    });
    document.getElementById('teacherDocumentFile')?.addEventListener('change', updateTeacherDocumentFileLabel);
    document.getElementById('teacherDocumentNotify')?.addEventListener('click', (event) => {
        const button = event.currentTarget;
        const next = !button.classList.contains('on');
        button.classList.toggle('on', next);
        button.setAttribute('aria-checked', String(next));
    });
    document.getElementById('teacherDocumentUploadForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveTeacherDocumentUpload();
    });
    document.getElementById('teacherAddFeedbackRecord')?.addEventListener('click', openTeacherAddFeedback);
    document.getElementById('teacherFeedbackDetailsClose')?.addEventListener('click', closeTeacherFeedbackDetails);
    document.getElementById('teacherFeedbackDetailsDone')?.addEventListener('click', closeTeacherFeedbackDetails);
    document.getElementById('teacherFeedbackDetailsOverlay')?.addEventListener('click', (event) => {
        if (event.target.id === 'teacherFeedbackDetailsOverlay') closeTeacherFeedbackDetails();
    });
    document.getElementById('teacherFeedbackDetailsEdit')?.addEventListener('click', () => {
        showSparkToast('Admin edit controls are represented in this prototype. The saved record remains audit-protected.');
    });
    document.getElementById('teacherFeedbackAcknowledge')?.addEventListener('click', completeTeacherFeedbackAcknowledgment);
    document.getElementById('teacherAddFeedbackClose')?.addEventListener('click', closeTeacherAddFeedback);
    document.getElementById('teacherAddFeedbackCancel')?.addEventListener('click', closeTeacherAddFeedback);
    document.getElementById('teacherAddFeedbackOverlay')?.addEventListener('click', (event) => {
        if (event.target.id === 'teacherAddFeedbackOverlay') closeTeacherAddFeedback();
    });
    document.getElementById('teacherFeedbackSummary')?.addEventListener('input', (event) => {
        setText('#teacherFeedbackSummaryCount', `${event.target.value.length} characters`);
    });
    document.getElementById('teacherFeedbackAddItem')?.addEventListener('click', () => {
        syncTeacherFeedbackDraftItems();
        teacherFeedbackDraftItems.push({ area: 'New Performance Area', rating: 'Meets Expectations', comment: '' });
        renderTeacherFeedbackBuilder();
    });
    document.getElementById('teacherFeedbackRequireAck')?.addEventListener('click', (event) => {
        const button = event.currentTarget;
        const next = !button.classList.contains('on');
        button.classList.toggle('on', next);
        button.setAttribute('aria-checked', String(next));
    });
    document.getElementById('teacherFeedbackSaveDraft')?.addEventListener('click', () => saveTeacherFeedback('draft'));
    document.getElementById('teacherAddFeedbackForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveTeacherFeedback('publish');
    });
    document.getElementById('teacherPolicyCategoryFilter')?.addEventListener('change', () => renderTeacherPolicyLibrary());
    document.getElementById('teacherPolicySearch')?.addEventListener('input', () => renderTeacherPolicyLibrary());
    document.getElementById('teacherPolicyModalClose')?.addEventListener('click', closeTeacherPolicyModal);
    document.getElementById('teacherPolicyModalDone')?.addEventListener('click', closeTeacherPolicyModal);
    document.getElementById('teacherPolicyModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'teacherPolicyModal') closeTeacherPolicyModal();
    });
    document.getElementById('teacherPolicySubmitAck')?.addEventListener('click', acknowledgeTeacherPolicy);
    document.getElementById('teacherPayrollPeriodSelect')?.addEventListener('change', () => {
        const teacher = getSelectedTeacher();
        if (teacher) renderTeacherPayroll(teacher);
    });
    document.getElementById('teacherPayrollDownload')?.addEventListener('click', () => {
        const teacher = getSelectedTeacher();
        showSparkToast(`Payroll download prepared for ${teacher?.name || 'selected teacher'} · ${getTeacherPayrollPeriod()}.`);
    });
    document.getElementById('teacherPayrollAddDeduction')?.addEventListener('click', addTeacherPayrollAdjustment);
    document.getElementById('teacherWeekPrevious')?.addEventListener('click', () => moveTeacherWeek(-1));
    document.getElementById('teacherWeekNext')?.addEventListener('click', () => moveTeacherWeek(1));
    document.getElementById('teacherCloseAllSlots')?.addEventListener('click', () => {
        document.querySelectorAll('#teacherWeeklyCalendarBody .teacher-calendar-slot.open').forEach((slot) => {
            slot.classList.remove('open');
            slot.classList.add('closed');
            slot.dataset.slotState = 'closed';
            slot.querySelector('strong').textContent = 'Closed';
            slot.querySelector('span').textContent = 'Teacher is not available';
        });
        updateTeacherOpenSlotCount();
        showSparkToast('All unbooked weekly slots closed in prototype mode.');
    });
    document.getElementById('teacherWeeklyCalendarBody')?.addEventListener('click', (event) => {
        const slot = event.target.closest('.teacher-calendar-slot');
        if (!slot) return;
        openTeacherSlotModal(slot);
    });
    document.getElementById('teacherSlotClose')?.addEventListener('click', closeTeacherSlotModal);
    document.getElementById('teacherSlotCancel')?.addEventListener('click', closeTeacherSlotModal);
    document.getElementById('teacherSlotModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'teacherSlotModal') closeTeacherSlotModal();
    });
    document.getElementById('teacherSlotStudent')?.addEventListener('change', () => updateTeacherSlotTeacherOptions());
    document.getElementById('teacherSlotStudentCountry')?.addEventListener('change', () => updateTeacherSlotStudentOptions());
    document.getElementById('teacherSlotAddStudent')?.addEventListener('click', () => addTeacherSlotStudentRow());
    document.getElementById('teacherSlotCategory')?.addEventListener('change', () => updateTeacherSlotProgramOptions());
    document.getElementById('teacherSlotProgram')?.addEventListener('change', () => updateTeacherSlotModuleOptions());
    document.getElementById('teacherSlotModule')?.addEventListener('change', () => updateTeacherSlotLessonOptions());
    document.getElementById('teacherSlotAction')?.addEventListener('change', (event) => setTeacherSlotAction(event.target.value));
    document.getElementById('teacherSlotCancelClass')?.addEventListener('click', () => {
        document.getElementById('teacherSlotAction').value = 'cancel';
        setTeacherSlotAction('cancel');
    });
    document.getElementById('teacherSlotTransferClass')?.addEventListener('click', () => {
        document.getElementById('teacherSlotAction').value = 'transfer';
        setTeacherSlotAction('transfer');
    });
    document.getElementById('teacherSlotForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        applyTeacherSlotAction(document.getElementById('teacherSlotAction')?.value || 'assign');
    });
    document.getElementById('studentEditProfile')?.addEventListener('click', openStudentEditDrawer);
    document.getElementById('studentEditClose')?.addEventListener('click', closeStudentEditDrawer);
    document.getElementById('studentEditCancel')?.addEventListener('click', closeStudentEditDrawer);
    document.getElementById('studentEditOverlay')?.addEventListener('click', (event) => {
        if (event.target.id === 'studentEditOverlay') closeStudentEditDrawer();
    });
    document.getElementById('studentEditForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveStudentProfileEdit();
    });
    document.getElementById('studentEditContactDetails')?.addEventListener('click', openStudentContactDrawer);
    document.getElementById('studentContactClose')?.addEventListener('click', closeStudentContactDrawer);
    document.getElementById('studentContactCancel')?.addEventListener('click', closeStudentContactDrawer);
    document.getElementById('studentContactOverlay')?.addEventListener('click', (event) => {
        if (event.target.id === 'studentContactOverlay') closeStudentContactDrawer();
    });
    document.getElementById('studentContactForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveStudentContactDetails();
    });
    document.addEventListener('click', (event) => {
        if (event.target.closest('[data-student-action="add-note"]')) {
            openStudentNoteModal();
        }
    });
    document.getElementById('studentNoteClose')?.addEventListener('click', closeStudentNoteModal);
    document.getElementById('studentNoteCancel')?.addEventListener('click', closeStudentNoteModal);
    document.getElementById('studentNoteModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'studentNoteModal') closeStudentNoteModal();
    });
    document.getElementById('studentNoteForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveStudentActivityNote();
    });
    document.getElementById('studentManualPayment')?.addEventListener('click', openManualPaymentDrawer);
    document.getElementById('studentPaymentClose')?.addEventListener('click', closeManualPaymentDrawer);
    document.getElementById('studentPaymentCancel')?.addEventListener('click', closeManualPaymentDrawer);
    document.getElementById('studentPaymentOverlay')?.addEventListener('click', (event) => {
        if (event.target.id === 'studentPaymentOverlay') closeManualPaymentDrawer();
    });
    document.getElementById('studentPaymentForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveManualPaymentRecord();
    });
    document.getElementById('studentPaymentBody')?.addEventListener('click', (event) => {
        const receiptButton = event.target.closest('[data-payment-receipt]');
        if (receiptButton) openPaymentReceipt(receiptButton);
    });
    document.getElementById('paymentReceiptClose')?.addEventListener('click', closePaymentReceipt);
    document.getElementById('paymentReceiptModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'paymentReceiptModal') closePaymentReceipt();
    });
    document.getElementById('paymentReceiptPrint')?.addEventListener('click', () => window.print());
    document.getElementById('studentAddReferral')?.addEventListener('click', openReferralModal);
    document.getElementById('referralModalClose')?.addEventListener('click', closeReferralModal);
    document.getElementById('referralCancel')?.addEventListener('click', closeReferralModal);
    document.getElementById('referralModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'referralModal') closeReferralModal();
    });
    document.getElementById('referralForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveReferralRecord();
    });
    document.getElementById('copyReferralLink')?.addEventListener('click', async () => {
        const link = document.getElementById('studentReferralLink')?.textContent || '';
        if (navigator.clipboard && link) {
            await navigator.clipboard.writeText(link).catch(() => undefined);
        }
        showSparkToast('Referral link copied in prototype mode.');
    });
    document.getElementById('studentEditSchedule')?.addEventListener('click', openScheduleModal);
    document.getElementById('scheduleModalClose')?.addEventListener('click', closeScheduleModal);
    document.getElementById('scheduleCancel')?.addEventListener('click', closeScheduleModal);
    document.getElementById('scheduleModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'scheduleModal') closeScheduleModal();
    });
    document.getElementById('scheduleForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveScheduleRecord();
    });
    document.getElementById('studentAddClass')?.addEventListener('click', openClassScheduleModal);
    document.getElementById('classScheduleClose')?.addEventListener('click', closeClassScheduleModal);
    document.getElementById('classScheduleCancel')?.addEventListener('click', closeClassScheduleModal);
    document.getElementById('classScheduleModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'classScheduleModal') closeClassScheduleModal();
    });
    document.getElementById('classScheduleForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        saveClassScheduleRecord();
    });
    document.getElementById('classScheduleCountry')?.addEventListener('change', () => updateClassTeacherOptions());
    document.getElementById('classScheduleDate')?.addEventListener('change', () => updateClassTeacherOptions());
    document.getElementById('classScheduleTime')?.addEventListener('change', () => updateClassTeacherOptions());
    document.getElementById('classScheduleCategory')?.addEventListener('change', () => updateClassProgramOptions());
    document.getElementById('classScheduleProgram')?.addEventListener('change', () => updateClassModuleOptions());
    document.getElementById('classScheduleModule')?.addEventListener('change', () => updateClassLessonOptions());
    ['manualPaymentAmount', 'manualPaymentDiscount', 'manualPaymentReferralDiscount', 'manualPaymentCurrency'].forEach((id) => {
        document.getElementById(id)?.addEventListener('input', calculateManualPaymentNet);
        document.getElementById(id)?.addEventListener('change', calculateManualPaymentNet);
    });
    document.querySelectorAll('[data-student-tab]').forEach((button) => {
        button.addEventListener('click', () => setStudentProfileTab(button.dataset.studentTab));
    });
    attachLessonActionHandlers();
    document.getElementById('lessonFeedbackClose')?.addEventListener('click', closeLessonFeedbackModal);
    document.getElementById('lessonFeedbackDismiss')?.addEventListener('click', closeLessonFeedbackModal);
    document.getElementById('lessonFeedbackModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'lessonFeedbackModal') closeLessonFeedbackModal();
    });
    document.getElementById('lessonFeedbackApprove')?.addEventListener('click', () => setFeedbackDecisionFromModal('Approved'));
    document.getElementById('lessonFeedbackRevision')?.addEventListener('click', () => setFeedbackDecisionFromModal('Rejected'));
    document.getElementById('teacherFeedbackClose')?.addEventListener('click', closeTeacherFeedbackModal);
    document.getElementById('teacherFeedbackCancel')?.addEventListener('click', closeTeacherFeedbackModal);
    document.getElementById('teacherFeedbackModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'teacherFeedbackModal') closeTeacherFeedbackModal();
    });
    document.getElementById('teacherFeedbackForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        submitTeacherFeedback();
    });
    document.getElementById('videoUrlClose')?.addEventListener('click', closeVideoUrlModal);
    document.getElementById('videoUrlCancel')?.addEventListener('click', closeVideoUrlModal);
    document.getElementById('videoUrlModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'videoUrlModal') closeVideoUrlModal();
    });
    document.getElementById('videoUrlForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        submitVideoUrl();
    });
    document.getElementById('teacherPayslipClose')?.addEventListener('click', closeTeacherPayslip);
    document.getElementById('teacherPayslipModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'teacherPayslipModal') closeTeacherPayslip();
    });
    document.getElementById('teacherPayslipPrint')?.addEventListener('click', () => window.print());
    document.getElementById('teacherPayslipDownload')?.addEventListener('click', () => {
        const teacher = getSelectedTeacher();
        showSparkToast(`VLACE payslip PDF prepared for ${teacher?.name || 'selected teacher'} in prototype mode.`);
    });
    document.getElementById('payrollReceiptUploadClose')?.addEventListener('click', closePayrollReceiptUpload);
    document.getElementById('payrollReceiptUploadCancel')?.addEventListener('click', closePayrollReceiptUpload);
    document.getElementById('payrollReceiptUploadModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'payrollReceiptUploadModal') closePayrollReceiptUpload();
    });
    document.getElementById('payrollReceiptFile')?.addEventListener('change', previewPayrollReceiptFile);
    document.getElementById('payrollReceiptUploadForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        savePayrollReceiptUpload();
    });
    document.getElementById('payrollReceiptViewClose')?.addEventListener('click', closePayrollReceiptView);
    document.getElementById('payrollReceiptViewCancel')?.addEventListener('click', closePayrollReceiptView);
    document.getElementById('payrollReceiptViewModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'payrollReceiptViewModal') closePayrollReceiptView();
    });

    renderSparkMessages();

    const sparkInput = document.getElementById('sparkInput');
    const sparkSend = document.getElementById('sparkSend');

    sparkInput?.addEventListener('input', () => {
        if (sparkInput.value.trim()) {
            sparkSend?.removeAttribute('disabled');
        } else {
            sparkSend?.setAttribute('disabled', '');
        }
    });

    sparkInput?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            submitSparkMessage();
        }
    });

    document.getElementById('sparkForm')?.addEventListener('submit', (event) => {
        event.preventDefault();
        submitSparkMessage();
    });

    document.querySelectorAll('[data-spark-preset]').forEach((button) => {
        button.addEventListener('click', () => submitSparkMessage(button.dataset.sparkPreset));
    });

    document.getElementById('sparkNewChat')?.addEventListener('click', () => {
        sparkMessages = [...sparkInitialMessages];
        renderSparkMessages();
    });

    document.getElementById('sparkAccessMode')?.addEventListener('change', (event) => {
        setText('#sparkModeLabel', event.target.value);
    });

    document.getElementById('sparkConfirmClose')?.addEventListener('click', closeSparkConfirm);
    document.getElementById('sparkConfirmCancel')?.addEventListener('click', closeSparkConfirm);
    document.getElementById('sparkConfirmAction')?.addEventListener('click', confirmSparkAction);
    document.getElementById('sparkConfirmBackdrop')?.addEventListener('click', (event) => {
        if (event.target.id === 'sparkConfirmBackdrop') closeSparkConfirm();
    });

    window.setInterval(() => {
        updateOverviewTimes();
        updateOverview();
    }, 30 * 60 * 1000);

    window.setInterval(updateAnalyticsRefreshTime, 30 * 1000);

    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    const passwordInput = document.getElementById('passwordInput');
    const togglePassword = document.getElementById('togglePassword');
    const recoveryModal = document.getElementById('recoveryModal');

    loginForm?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = loginForm.querySelector('input[type="email"]');
        const remember = loginForm.querySelector('.login-options input[type="checkbox"]')?.checked ?? false;
        const submitButton = loginForm.querySelector('.login-submit');
        if (!email.value.trim() || !passwordInput.value.trim()) {
            if (loginError) loginError.textContent = 'Enter your approved email and password to continue.';
            loginError?.removeAttribute('hidden');
            return;
        }
        loginError?.setAttribute('hidden', '');

        try {
            submitButton.disabled = true;
            submitButton.textContent = 'Signing In...';
            const data = await submitLogin(email.value.trim(), passwordInput.value, remember);
            passwordInput.value = '';
            showAuthenticatedDashboard(data.user);
        } catch (error) {
            if (loginError) loginError.textContent = 'This email or password is not registered as an approved VLACE account.';
            loginError?.removeAttribute('hidden');
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = 'Sign In <span>→</span>';
        }
    });

    togglePassword?.addEventListener('click', () => {
        const visible = passwordInput.type === 'text';
        passwordInput.type = visible ? 'password' : 'text';
        togglePassword.textContent = visible ? 'Show' : 'Hide';
    });

    document.getElementById('forgotPassword')?.addEventListener('click', () => {
        recoveryModal?.removeAttribute('hidden');
    });

    document.getElementById('closeRecovery')?.addEventListener('click', () => {
        recoveryModal?.setAttribute('hidden', '');
    });

    document.getElementById('understoodRecovery')?.addEventListener('click', () => {
        recoveryModal?.setAttribute('hidden', '');
    });

    recoveryModal?.addEventListener('click', (event) => {
        if (event.target === recoveryModal) {
            recoveryModal.setAttribute('hidden', '');
        }
    });

    document.getElementById('logoutConfirmButton')?.addEventListener('click', async () => {
        await submitLogout().catch(() => undefined);
        showLogin();
    });
    document.getElementById('logoutStayButton')?.addEventListener('click', () => activateSection('overview'));
    document.getElementById('teacherPortalLogoutButton')?.addEventListener('click', async () => {
        await submitLogout().catch(() => undefined);
        showLogin();
    });
    document.getElementById('teacherMobileMenu')?.addEventListener('click', () => {
        document.getElementById('teacherSidebar')?.classList.toggle('open');
    });
    document.querySelectorAll('[data-teacher-portal-target]').forEach((button) => {
        button.addEventListener('click', () => activateTeacherPortal(button.dataset.teacherPortalTarget));
    });

    document.getElementById('mobileMenu')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.toggle('open');
    });

    document.getElementById('backButton')?.addEventListener('click', handleGlobalBack);
    document.getElementById('pageBreadcrumbs')?.addEventListener('click', (event) => {
        const button = event.target.closest('[data-breadcrumb-action]');
        if (!button) return;
        handleBreadcrumbAction(button.dataset.breadcrumbAction);
    });

    document.querySelectorAll('[data-section-target]').forEach((button) => {
        button.addEventListener('click', () => activateSection(button.dataset.sectionTarget));
    });

    document.getElementById('packageMarketFilter')?.addEventListener('change', (event) => {
        activePackageMarket = event.target.value;
        renderPackagesAndPrices();
    });

    document.getElementById('addPackageButton')?.addEventListener('click', () => openPackageEditor());
    document.getElementById('manageServiceCountries')?.addEventListener('click', openServiceCountriesModal);
    renderPackagesAndPrices();

    document.querySelectorAll('.finance-hero [data-finance-modal]').forEach((button) => {
        button.addEventListener('click', () => openFinanceModal(button.dataset.financeModal));
    });
    renderFinanceModule();

    document.getElementById('createUserButton')?.addEventListener('click', () => openUserForm());
    renderCommunicationWorkspace();
    renderMarketingWorkspace();
    renderUserManagement();
    renderCompanyPolicyManual();
    renderAdminSecuritySettings();

    document.querySelectorAll('[data-group-toggle]').forEach((button) => {
        button.addEventListener('click', () => toggleMenu(button.dataset.groupToggle));
    });
});
