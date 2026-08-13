(function () {
    const commerce = window.SPEAKRYT_COMMERCE || {};
    const packages = commerce.packages || [];
    const coupons = commerce.coupons || [];
    const basePayments = commerce.studentPayments || [];
    const students = {
        'S1-001': 'Liam Chen',
        'S1-003': 'Eddie Zhang',
        'S1-006': 'Grace Liu',
        'S1-011': 'Soo-jin Kim',
    };

    const storageKeys = {
        payments: 'speakrytWebsitePayments',
        couponUsage: 'speakrytCouponUsage',
    };
    const authorizedCheckoutPhone = '+639273028515';

    function getCsrfToken() {
        return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
    }

    function money(value) {
        return `$${Number(value || 0).toFixed(2)}`;
    }

    function readStored(key) {
        try {
            return JSON.parse(window.localStorage.getItem(key) || '[]');
        } catch (error) {
            return [];
        }
    }

    function writeStored(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    function activeChinaPackages() {
        return packages.filter((item) => item.market === 'China' && item.visibility === 'Published');
    }

    function activeCoupons() {
        return coupons.filter((item) => item.status === 'Active' && item.websiteSync !== 'Disabled');
    }

    function getSelectedPackage() {
        const select = document.getElementById('checkoutPackage');
        return activeChinaPackages().find((item) => item.id === select?.value) || activeChinaPackages()[0];
    }

    function normalizePhone(value) {
        const cleaned = String(value || '').replace(/[^\d+]/g, '');
        if (cleaned.startsWith('+')) return `+${cleaned.slice(1).replace(/\D/g, '')}`;
        return cleaned.replace(/\D/g, '');
    }

    function isAuthorizedPhone() {
        return normalizePhone(document.getElementById('checkoutPhone')?.value) === authorizedCheckoutPhone;
    }

    function getCouponByCode() {
        const code = document.getElementById('checkoutCoupon')?.value.trim().toUpperCase();
        if (!code) return null;
        return activeCoupons().find((item) => item.code === code) || null;
    }

    function renderPackages() {
        const grid = document.getElementById('chinaPricingGrid');
        const select = document.getElementById('checkoutPackage');
        const count = document.getElementById('pricingPublishedCount');
        const rows = activeChinaPackages();

        if (count) count.textContent = `${rows.length} published China packages`;
        if (select) {
            select.innerHTML = rows.map((item) => `<option value="${item.id}">${item.audience} ${item.name} · ${item.lessons} lessons · $${item.price}</option>`).join('');
        }
        if (!grid) return;

        grid.innerHTML = rows.map((item) => `
            <article class="${item.name === 'Gold' ? 'featured-plan' : ''}">
                <p>${item.audience} · ${item.duration}</p>
                <h3>${item.name}</h3>
                <strong>$${item.price}</strong>
                <ul>
                    <li>${item.lessons} private lessons</li>
                    <li>Teacher continuity and progress notes</li>
                    <li>Dashboard-synced package record</li>
                </ul>
                <button type="button" data-select-package="${item.id}">Choose package</button>
            </article>
        `).join('');

        grid.querySelectorAll('[data-select-package]').forEach((button) => {
            button.addEventListener('click', () => {
                if (select) select.value = button.dataset.selectPackage;
                updateCheckoutTotal();
                document.getElementById('checkoutPackage')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        });
    }

    function renderCoupons() {
        const list = document.getElementById('websiteCouponList');
        if (!list) return;

        list.innerHTML = activeCoupons().map((coupon) => `
            <button type="button" data-coupon-code="${coupon.code}">
                <span>${coupon.code}</span>
                <strong>${coupon.discount}% off</strong>
                <small>${coupon.validFrom} - ${coupon.validUntil} · ${coupon.used}/${coupon.usageLimit} used</small>
            </button>
        `).join('');

        list.querySelectorAll('[data-coupon-code]').forEach((button) => {
            button.addEventListener('click', () => {
                const input = document.getElementById('checkoutCoupon');
                if (input) input.value = button.dataset.couponCode;
                updateCheckoutTotal();
            });
        });
    }

    function updateCheckoutTotal() {
        const selected = getSelectedPackage();
        const coupon = getCouponByCode();
        const total = document.getElementById('checkoutTotal');
        const note = document.getElementById('checkoutDiscountNote');
        if (!selected || !total || !note) return;

        const price = Number(selected.price);
        const discount = coupon ? Number(coupon.discount) : 0;
        const net = Math.max(0, price - (price * discount / 100));
        total.textContent = money(net);
        note.textContent = coupon ? `${coupon.code} applied · ${coupon.discount}% discount` : 'No coupon applied';
        updateCheckoutAccess();
    }

    function updateCheckoutAccess() {
        const button = document.getElementById('recordWebsitePayment');
        const note = document.getElementById('checkoutSyncNote');
        const phone = document.getElementById('checkoutPhone');
        const authorized = isAuthorizedPhone();

        if (button) button.disabled = !authorized;
        if (phone) phone.classList.toggle('is-invalid', Boolean(phone.value.trim()) && !authorized);
        if (note && !note.dataset.lockedMessage) {
            note.textContent = authorized
                ? 'Authorized number confirmed. Payment sync is ready.'
                : 'Enter the authorized phone number to continue.';
        }
    }

    function renderPaymentFeed() {
        const feed = document.getElementById('websitePaymentFeed');
        if (!feed) return;
        const records = [...readStored(storageKeys.payments), ...basePayments]
            .filter((record) => record.packageName?.includes('Kids') || record.packageName?.includes('Adults'))
            .slice(0, 5);

        feed.innerHTML = records.length ? records.map((record) => `
            <div>
                <strong>${record.student}</strong>
                <span>${record.packageName}</span>
                <small>${record.netAmount} · ${record.processor} · ${record.date}</small>
            </div>
        `).join('') : '<p>No website payments recorded yet.</p>';
    }

    function recordWebsitePayment() {
        if (!isAuthorizedPhone()) {
            const note = document.getElementById('checkoutSyncNote');
            if (note) note.textContent = 'This checkout can only be used with the authorized phone number.';
            document.getElementById('checkoutPhone')?.focus();
            return;
        }

        const selected = getSelectedPackage();
        if (!selected) return;

        const studentId = document.getElementById('checkoutStudent')?.value || 'S1-001';
        const coupon = getCouponByCode();
        const price = Number(selected.price);
        const discount = coupon ? Number(coupon.discount) : 0;
        const net = Math.max(0, price - (price * discount / 100));
        const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const payment = {
            student: students[studentId] || 'Website Student',
            studentId,
            date: today,
            packageName: `${selected.audience} ${selected.name} · ${selected.lessons} Lessons`,
            originalAmount: money(price),
            discount: `${discount}%`,
            referralDiscount: '0%',
            netAmount: money(net),
            processor: 'Website Checkout · Prototype',
            reference: `WEB-${Date.now().toString().slice(-6)}`,
            status: 'Paid',
            synchronized: 'Website checkout · just now',
        };

        const payments = readStored(storageKeys.payments);
        payments.unshift(payment);
        writeStored(storageKeys.payments, payments);

        if (coupon) {
            const usage = readStored(storageKeys.couponUsage);
            usage.unshift({
                student: payment.student,
                studentId,
                coupon: coupon.code,
                timesUsed: 1,
                appliedAt: today,
                packageName: payment.packageName,
                discountApplied: `${coupon.discount}%`,
                status: 'Applied',
            });
            writeStored(storageKeys.couponUsage, usage);
        }

        const note = document.getElementById('checkoutSyncNote');
        if (note) {
            note.dataset.lockedMessage = '1';
            note.textContent = `${payment.reference} recorded. Open the dashboard student payment history to see the synced record.`;
            window.setTimeout(() => {
                delete note.dataset.lockedMessage;
                updateCheckoutAccess();
            }, 4000);
        }
        renderPaymentFeed();
    }

    function showStudentAccount(user) {
        const loginForm = document.getElementById('studentLoginForm');
        const accountCard = document.getElementById('studentAccountCard');
        if (!loginForm || !accountCard || user?.role !== 'student') return;

        loginForm.setAttribute('hidden', '');
        accountCard.removeAttribute('hidden');
        document.getElementById('studentLoginError')?.setAttribute('hidden', '');
        const name = document.getElementById('studentAccountName');
        const email = document.getElementById('studentAccountEmail');
        if (name) name.textContent = user.name || 'Student Account';
        if (email) email.textContent = user.email || '';
        window.lucide?.createIcons();
    }

    function showStudentLogin() {
        document.getElementById('studentAccountCard')?.setAttribute('hidden', '');
        document.getElementById('studentLoginForm')?.removeAttribute('hidden');
    }

    async function submitStudentLogin(email, password) {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': getCsrfToken(),
            },
            body: JSON.stringify({ email, password, portal: 'website' }),
        });

        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
            throw new Error(data?.message || data?.errors?.email?.[0] || 'Login failed');
        }

        return data;
    }

    async function submitStudentLogout() {
        await fetch('/logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': getCsrfToken(),
            },
        });
    }

    function initStudentLogin() {
        const loginForm = document.getElementById('studentLoginForm');
        const loginError = document.getElementById('studentLoginError');
        const passwordInput = document.getElementById('studentPasswordInput');
        const currentUser = window.SPEAKRYT_AUTH_USER;

        if (currentUser?.role === 'student') {
            showStudentAccount(currentUser);
        } else {
            showStudentLogin();
        }

        loginForm?.addEventListener('submit', async (event) => {
            event.preventDefault();
            const email = loginForm.querySelector('input[type="email"]');
            if (!email?.value.trim() || !passwordInput?.value.trim()) {
                if (loginError) loginError.textContent = 'Enter your student email and password to continue.';
                loginError?.removeAttribute('hidden');
                return;
            }

            loginError?.setAttribute('hidden', '');
            const button = loginForm.querySelector('button[type="submit"]');

            try {
                if (button) {
                    button.disabled = true;
                    button.textContent = 'Signing In...';
                }
                const data = await submitStudentLogin(email.value.trim(), passwordInput.value);
                passwordInput.value = '';
                showStudentAccount(data.user);
            } catch (error) {
                if (loginError) loginError.textContent = error.message || 'Use a student account on the SpeakRyt website.';
                loginError?.removeAttribute('hidden');
            } finally {
                if (button) {
                    button.disabled = false;
                    button.textContent = 'Sign In';
                }
            }
        });

        document.getElementById('studentLogoutButton')?.addEventListener('click', async () => {
            await submitStudentLogout().catch(() => undefined);
            showStudentLogin();
        });
    }

    function init() {
        if (!document.getElementById('chinaPricingGrid')) return;
        renderPackages();
        renderCoupons();
        updateCheckoutTotal();
        renderPaymentFeed();

        document.getElementById('checkoutPackage')?.addEventListener('change', updateCheckoutTotal);
        document.getElementById('checkoutCoupon')?.addEventListener('input', updateCheckoutTotal);
        document.getElementById('checkoutPhone')?.addEventListener('input', updateCheckoutAccess);
        document.getElementById('recordWebsitePayment')?.addEventListener('click', recordWebsitePayment);
        updateCheckoutAccess();
        initStudentLogin();
    }

    init();
}());
