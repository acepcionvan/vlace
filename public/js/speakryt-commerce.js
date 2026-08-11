window.SPEAKRYT_COMMERCE = {
    serviceCountries: [
        { name: 'China', currency: 'CNY', status: 'Active', serviceArea: 'Nationwide' },
        { name: 'South Korea', currency: 'KRW', status: 'Active', serviceArea: 'Nationwide' },
        { name: 'Japan', currency: 'JPY', status: 'Active', serviceArea: 'Nationwide' },
        { name: 'United Arab Emirates', currency: 'AED', status: 'Active', serviceArea: 'Includes Dubai' },
        { name: 'Saudi Arabia', currency: 'SAR', status: 'Active', serviceArea: 'Nationwide' },
        { name: 'Israel', currency: 'ILS', status: 'Active', serviceArea: 'Nationwide' },
    ],
    packages: [
        { id: 'CN-A-S', market: 'China', audience: 'Adults', duration: '50 minutes', name: 'Silver', lessons: '15', price: '165', visibility: 'Published' },
        { id: 'CN-A-G', market: 'China', audience: 'Adults', duration: '50 minutes', name: 'Gold', lessons: '30', price: '314', visibility: 'Published' },
        { id: 'CN-A-B', market: 'China', audience: 'Adults', duration: '50 minutes', name: 'Black Diamond', lessons: '45', price: '456', visibility: 'Published' },
        { id: 'CN-K-S', market: 'China', audience: 'Kids', duration: '25 minutes', name: 'Silver', lessons: '15', price: '90', visibility: 'Published' },
        { id: 'CN-K-G', market: 'China', audience: 'Kids', duration: '25 minutes', name: 'Gold', lessons: '30', price: '171', visibility: 'Published' },
        { id: 'CN-K-P', market: 'China', audience: 'Kids', duration: '25 minutes', name: 'Platinum', lessons: '45', price: '249', visibility: 'Published' },
    ],
    coupons: [
        { id: 'CPN-001', code: 'WELCOME10', discount: 10, validFrom: 'Aug 1, 2026', validUntil: 'Sep 30, 2026', usageLimit: 100, used: 18, status: 'Active', websiteSync: 'Ready for checkout' },
        { id: 'CPN-002', code: 'KIDS15', discount: 15, validFrom: 'Aug 10, 2026', validUntil: 'Oct 15, 2026', usageLimit: 50, used: 7, status: 'Active', websiteSync: 'Ready for checkout' },
        { id: 'CPN-003', code: 'RENEWAL5', discount: 5, validFrom: 'Jul 1, 2026', validUntil: 'Dec 31, 2026', usageLimit: 200, used: 42, status: 'Active', websiteSync: 'Renewal only' },
        { id: 'CPN-004', code: 'SUMMER20', discount: 20, validFrom: 'Jun 1, 2026', validUntil: 'Jul 31, 2026', usageLimit: 40, used: 40, status: 'Expired', websiteSync: 'Disabled' },
    ],
    couponUsage: [
        { student: 'Liam Chen', studentId: 'S1-001', coupon: 'WELCOME10', timesUsed: 1, appliedAt: 'Aug 8, 2026', packageName: 'Kids Gold · 30 lessons', discountApplied: '10%', status: 'Applied' },
        { student: 'Eddie Zhang', studentId: 'S1-003', coupon: 'KIDS15', timesUsed: 1, appliedAt: 'Aug 6, 2026', packageName: 'Kids Silver · 15 lessons', discountApplied: '15%', status: 'Applied' },
        { student: 'Grace Liu', studentId: 'S1-006', coupon: 'RENEWAL5', timesUsed: 2, appliedAt: 'Aug 5, 2026', packageName: 'Adults Gold · 30 lessons', discountApplied: '5%', status: 'Renewal' },
        { student: 'Soo-jin Kim', studentId: 'S1-011', coupon: 'WELCOME10', timesUsed: 1, appliedAt: 'Aug 2, 2026', packageName: 'Adults Silver · 15 lessons', discountApplied: '10%', status: 'Applied' },
    ],
    studentPayments: [
        { student: 'Liam Chen', studentId: 'S1-001', date: 'Jul 10, 2026', packageName: 'Kids Gold · 30 Lessons', originalAmount: '$300.00', discount: '5%', referralDiscount: '8%', netAmount: '$261.00', processor: 'PayPal', reference: 'PP-7K24-9021', status: 'Paid', synchronized: 'Automatic · 10:32 AM' },
        { student: 'Liam Chen', studentId: 'S1-001', date: 'Apr 4, 2026', packageName: 'Kids Silver · 15 Lessons', originalAmount: '$160.00', discount: '0%', referralDiscount: '8%', netAmount: '$147.20', processor: 'NihaoPay · Alipay', reference: 'NHP-481952', status: 'Paid', synchronized: 'Automatic · 8:14 PM' },
        { student: 'Eddie Zhang', studentId: 'S1-003', date: 'Aug 6, 2026', packageName: 'Kids Silver · 15 Lessons', originalAmount: '$90.00', discount: '15%', referralDiscount: '0%', netAmount: '$76.50', processor: 'NihaoPay · Alipay', reference: 'NHP-820144', status: 'Paid', synchronized: 'Website checkout · 9:22 AM' },
        { student: 'Grace Liu', studentId: 'S1-006', date: 'Aug 5, 2026', packageName: 'Adults Gold · 30 Lessons', originalAmount: '$314.00', discount: '5%', referralDiscount: '0%', netAmount: '$298.30', processor: 'PayPal', reference: 'PP-6127-GLIU', status: 'Paid', synchronized: 'Website checkout · 2:18 PM' },
    ],
};
