<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="SpeakRyt online English lessons for kids, adults, professionals, IELTS, TOEFL, interviews, and business communication.">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>SpeakRyt | Online English Lessons</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
        window.SPEAKRYT_AUTH_USER = @json(auth()->user()?->dashboardPayload());
        window.SPEAKRYT_DASHBOARD_URL = 'https://mydashboard.speakryt.com';
    </script>
    <link rel="stylesheet" href="{{ asset('css/speakryt.css') }}?v=china-commerce-20260811">
    <script src="{{ asset('js/speakryt-commerce.js') }}?v=china-commerce-20260811"></script>
</head>
<body>
    <header class="site-header">
        <a class="brand" href="#top" aria-label="SpeakRyt home">
            <img src="{{ asset('images/speakryt-logo.png') }}" alt="SpeakRyt">
        </a>
        <nav aria-label="Main navigation">
            <a href="#programs">Programs</a>
            <a href="#teachers">Teachers</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
        </nav>
        <a class="header-cta" href="#student-login">Student Login</a>
    </header>

    <main id="top">
        <section class="hero-section">
            <img class="hero-media" src="{{ asset('images/teacher-mock-portraits.png') }}" alt="">
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <p class="eyebrow">1-on-1 online ESL lessons</p>
                <h1>Master English without the premium price.</h1>
                <p class="hero-copy">Practical English coaching for kids, adults, and professionals who want stronger speaking, clearer writing, and more confidence in real conversations.</p>
                <div class="hero-actions">
                    <a href="#pricing">View Plans</a>
                    <a href="#programs">Explore Programs</a>
                </div>
                <dl class="hero-stats" aria-label="SpeakRyt highlights">
                    <div><dt>1-on-1</dt><dd>private classes</dd></div>
                    <div><dt>8</dt><dd>learning tracks</dd></div>
                    <div><dt>Asia</dt><dd>friendly schedules</dd></div>
                </dl>
            </div>
        </section>

        <section class="section-shell promise-section" aria-labelledby="promise-title">
            <div class="section-heading">
                <p class="eyebrow">Why SpeakRyt</p>
                <h2 id="promise-title">Premium ESL support that stays personal.</h2>
                <p>Students get focused coaching, flexible learning tracks, and teachers who understand how to make English useful for school, work, travel, and daily life.</p>
            </div>
            <div class="promise-grid">
                <article><i data-lucide="user-round-check"></i><h3>Private attention</h3><p>Each student works with a teacher who can adjust pacing, correction style, and lesson focus.</p></article>
                <article><i data-lucide="badge-check"></i><h3>Professional classes</h3><p>Lessons are structured, practical, and designed to build confidence without premium-platform pricing.</p></article>
                <article><i data-lucide="messages-square"></i><h3>Confident speaking</h3><p>Students practice real answers, clear pronunciation, and natural responses they can use immediately.</p></article>
                <article><i data-lucide="globe-2"></i><h3>Built for Asia</h3><p>Scheduling, support channels, and payment choices are shaped around Asian families and professionals.</p></article>
            </div>
        </section>

        <section class="section-shell student-login-section" id="student-login" aria-labelledby="student-login-title">
            <div class="section-heading compact">
                <p class="eyebrow">Student access</p>
                <h2 id="student-login-title">Sign in to your SpeakRyt student account.</h2>
                <p>Students use the main SpeakRyt website. Admins, teachers, and managers use the private dashboard domain.</p>
            </div>
            <div class="student-login-grid">
                <form class="student-login-card" id="studentLoginForm">
                    <label>Email address
                        <input type="email" autocomplete="username" placeholder="student@vlace.com">
                    </label>
                    <label>Password
                        <input id="studentPasswordInput" type="password" autocomplete="current-password" placeholder="Enter your password">
                    </label>
                    <div class="student-login-error" id="studentLoginError" role="alert" hidden>Enter your student email and password to continue.</div>
                    <button class="commerce-primary" type="submit">Sign In</button>
                </form>
                <article class="student-account-card" id="studentAccountCard" hidden>
                    <span><i data-lucide="badge-check"></i></span>
                    <div>
                        <p class="eyebrow">Signed in</p>
                        <h3 id="studentAccountName">Student Account</h3>
                        <p id="studentAccountEmail">student@vlace.com</p>
                    </div>
                    <button type="button" id="studentLogoutButton">Log Out</button>
                </article>
                <article class="staff-login-note">
                    <span><i data-lucide="shield-check"></i></span>
                    <div>
                        <h3>Staff portal</h3>
                        <p>Admin, teacher, and manager accounts should sign in at mydashboard.speakryt.com.</p>
                    </div>
                    <a href="https://mydashboard.speakryt.com">Open Dashboard</a>
                </article>
            </div>
        </section>

        <section class="mission-band">
            <div>
                <p class="eyebrow">Mission</p>
                <h2>Make English feel practical, affordable, and possible.</h2>
            </div>
            <p>SpeakRyt helps learners turn English into a daily advantage: better meetings, better interviews, better school performance, and more confidence in global conversations.</p>
        </section>

        <section class="section-shell" id="programs" aria-labelledby="programs-title">
            <div class="section-heading compact">
                <p class="eyebrow">Personalized English lessons</p>
                <h2 id="programs-title">Choose the track that matches the goal.</h2>
            </div>
            <div class="program-grid">
                <article><span>01</span><h3>CEFR for Adults</h3><p>Structured speaking, grammar, vocabulary, and fluency growth by level.</p></article>
                <article><span>02</span><h3>Business English</h3><p>Meetings, emails, presentations, and workplace communication.</p></article>
                <article><span>03</span><h3>Sales English</h3><p>Persuasion, negotiation, objections, and buyer conversations.</p></article>
                <article><span>04</span><h3>IELTS Preparation</h3><p>Speaking, writing, reading, listening, and test confidence.</p></article>
                <article><span>05</span><h3>TOEFL Preparation</h3><p>Academic English practice with exam-focused coaching.</p></article>
                <article><span>06</span><h3>Grammar Workshop</h3><p>Clear explanations and guided practice for accurate English.</p></article>
                <article><span>07</span><h3>Interview Preparation</h3><p>Practical answer structure, confidence, and interview vocabulary.</p></article>
                <article><span>08</span><h3>Conversational English</h3><p>Natural everyday speaking practice for real conversations.</p></article>
            </div>
        </section>

        <section class="teacher-section" id="teachers" aria-labelledby="teachers-title">
            <div class="section-shell teacher-layout">
                <div class="section-heading">
                    <p class="eyebrow">The heart of the company</p>
                    <h2 id="teachers-title">Friendly teachers with practical ESL experience.</h2>
                    <p>SpeakRyt teachers focus on correction that feels useful, lessons that feel human, and progress that students can feel after class.</p>
                </div>
                <div class="teacher-card-grid">
                    <article><span class="portrait teacher-one"></span><h3>Teacher Van</h3><p>Founder and academic lead</p></article>
                    <article><span class="portrait teacher-two"></span><h3>Teacher Jay</h3><p>Senior English coach</p></article>
                    <article><span class="portrait teacher-three"></span><h3>Teacher Jane</h3><p>Kids and adults specialist</p></article>
                    <article><span class="portrait teacher-four"></span><h3>Teacher Jeff</h3><p>Business communication coach</p></article>
                </div>
            </div>
        </section>

        <section class="section-shell" id="pricing" aria-labelledby="pricing-title">
            <div class="section-heading compact">
                <p class="eyebrow">China pricing</p>
                <h2 id="pricing-title">Packages matched to the dashboard.</h2>
                <p>These China packages, coupons, and payment records use the same prototype commerce data shown inside Admin Packages &amp; Prices.</p>
            </div>
            <div class="pricing-toolbar" aria-label="Pricing market controls">
                <label>
                    <span>Country</span>
                    <select id="pricingCountrySelect">
                        <option selected>China</option>
                    </select>
                </label>
                <div>
                    <strong id="pricingPublishedCount">6 published packages</strong>
                    <span>Adults: 50-minute lessons · Kids: 25-minute lessons</span>
                </div>
            </div>
            <div class="pricing-grid commerce-pricing-grid" id="chinaPricingGrid"></div>

            <div class="commerce-layout" aria-label="Website checkout and coupon synchronization">
                <article class="checkout-panel">
                    <div>
                        <p class="eyebrow">Website checkout</p>
                        <h3>Apply a dashboard coupon</h3>
                        <p>Choose a China package, apply an active coupon, and record a prototype payment that appears in the dashboard payment history.</p>
                    </div>
                    <label>Student
                        <select id="checkoutStudent">
                            <option value="S1-001">Liam Chen · S1-001</option>
                            <option value="S1-003">Eddie Zhang · S1-003</option>
                            <option value="S1-006">Grace Liu · S1-006</option>
                            <option value="S1-011">Soo-jin Kim · S1-011</option>
                        </select>
                    </label>
                    <label>Authorized phone number
                        <input id="checkoutPhone" inputmode="tel" autocomplete="tel" placeholder="+639273028515">
                    </label>
                    <label>Package
                        <select id="checkoutPackage"></select>
                    </label>
                    <label>Coupon code
                        <input id="checkoutCoupon" placeholder="Try WELCOME10 or KIDS15">
                    </label>
                    <div class="checkout-total">
                        <span>Estimated total</span>
                        <strong id="checkoutTotal">$0.00</strong>
                        <small id="checkoutDiscountNote">No coupon applied</small>
                    </div>
                    <button class="commerce-primary" type="button" id="recordWebsitePayment" disabled>Record Website Payment</button>
                    <p class="sync-note" id="checkoutSyncNote">Enter the authorized phone number to continue.</p>
                </article>

                <article class="coupon-panel">
                    <div>
                        <p class="eyebrow">Active coupons</p>
                        <h3>Dashboard-controlled discounts</h3>
                    </div>
                    <div class="coupon-list" id="websiteCouponList"></div>
                    <div class="payment-feed">
                        <h4>Recent website payments</h4>
                        <div id="websitePaymentFeed"></div>
                    </div>
                </article>
            </div>
        </section>

        <section class="testimonial-section">
            <div class="section-shell">
                <div class="section-heading compact">
                    <p class="eyebrow">Student voices</p>
                    <h2>Lessons that teach English and real confidence.</h2>
                </div>
                <div class="testimonial-grid">
                    <figure><blockquote>My teacher guides me through English while helping me understand real topics I can use at work.</blockquote><figcaption>Chen Wei <span>Guangzhou</span></figcaption></figure>
                    <figure><blockquote>I practiced interview answers in a clear way and felt more confident speaking professionally.</blockquote><figcaption>Dong Wook <span>Incheon</span></figcaption></figure>
                    <figure><blockquote>The classes are friendly, practical, and priced fairly compared with other ESL platforms.</blockquote><figcaption>Niran <span>Ayutthaya</span></figcaption></figure>
                </div>
            </div>
        </section>

        <section class="section-shell faq-section" id="faq" aria-labelledby="faq-title">
            <div class="section-heading compact">
                <p class="eyebrow">FAQ</p>
                <h2 id="faq-title">Clear answers before you book.</h2>
            </div>
            <div class="faq-grid">
                <details open><summary>What is SpeakRyt?</summary><p>An online English learning platform for kids, adults, and professionals who want practical, confidence-building ESL lessons.</p></details>
                <details><summary>How do I book a lesson?</summary><p>Send a message through the contact options and the team will help you choose a teacher, schedule, and package.</p></details>
                <details><summary>What payment methods are supported?</summary><p>PayPal is the main payment option, with selected local e-wallet options available depending on the student's country.</p></details>
                <details><summary>Can I reschedule?</summary><p>Students can request schedule changes in advance. Short-notice cancellations may still be charged because the teacher reserved that time.</p></details>
                <details><summary>What app do classes use?</summary><p>Classes are usually held through Voov Meeting using the teacher's assigned classroom link.</p></details>
            </div>
        </section>

        <section class="contact-section" id="contact">
            <div>
                <p class="eyebrow">Ready to start?</p>
                <h2>Book a trial lesson and get a practical English plan.</h2>
                <p>Tell us the learner's age, country, English level, and preferred schedule. The SpeakRyt team will recommend the next step.</p>
            </div>
            <a href="mailto:support@speakryt.com">Contact SpeakRyt</a>
        </section>
    </main>

    <footer class="site-footer">
        <img src="{{ asset('images/speakryt-logo.png') }}" alt="SpeakRyt">
        <p>© 2024-2027 SpeakRyt. All rights reserved.</p>
        <nav aria-label="Footer navigation">
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
            <a href="#faq">FAQ</a>
        </nav>
    </footer>

    <script>
        lucide.createIcons();
    </script>
    <script src="{{ asset('js/speakryt-site.js') }}?v=china-commerce-20260811"></script>
</body>
</html>
