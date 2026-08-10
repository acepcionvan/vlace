<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>VLACE Dashboard</title>

    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
        window.VLACE_AUTH_USER = @json(auth()->user()?->dashboardPayload());
    </script>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}?v=approval-request-review-button-20260810">
    <script src="{{ asset('js/app.js') }}?v=approval-request-review-button-20260810" defer></script>
</head>
<body>
    <main class="login-page" id="loginPage">
        <div class="premium-login-background" aria-hidden="true">
            <video class="premium-login-video" autoplay muted loop playsinline preload="auto">
                <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4" type="video/mp4">
            </video>
            <span class="premium-login-overlay"></span>
            <span class="premium-login-ambient"></span>
        </div>

        <section class="login-brand-panel">
            <div class="login-brand">
                <img src="{{ asset('images/vlace-logo.png') }}" alt="VLACE logo">
                <div>
                    <strong>VLACE</strong>
                    <small>ADMIN DASHBOARD</small>
                </div>
            </div>

            <div class="login-brand-copy">
                <p>SECURE OPERATIONS PORTAL</p>
                <h1>Your international education business, in one place.</h1>
                <span>Manage students, teachers, schedules, communication, finance, and analytics through one protected workspace.</span>

                <div class="vlace-values" aria-label="Meaning of VLACE">
                    <div><b>V</b><span>Vision</span></div>
                    <div><b>L</b><span>Learning</span></div>
                    <div><b>A</b><span>Achievement</span></div>
                    <div><b>C</b><span>Consistency</span></div>
                    <div><b>E</b><span>Excellence</span></div>
                </div>
            </div>

            <div class="login-security-note">
                <i data-lucide="shield"></i>
                <div>
                    <strong>Private access only</strong>
                    <span>Activity is monitored and recorded for account security.</span>
                </div>
            </div>
        </section>

        <section class="login-form-panel">
            <div class="login-mobile-brand"><img src="{{ asset('images/vlace-logo.png') }}" alt="VLACE logo"><strong>VLACE</strong></div>
            <form class="login-form-card" id="loginForm">
                <div class="login-welcome">
                    <span class="login-lock"><i data-lucide="lock"></i></span>
                    <p>WELCOME BACK</p>
                    <h2>Sign in to VLACE</h2>
                    <span>Use your approved dashboard account.</span>
                </div>

                <label>
                    Email address
                    <div class="login-input-wrap">
                        <i data-lucide="mail"></i>
                        <input type="email" autocomplete="username" placeholder="name@company.com">
                    </div>
                </label>

                <label>
                    Password
                    <div class="login-input-wrap">
                        <i data-lucide="lock"></i>
                        <input id="passwordInput" type="password" autocomplete="current-password" placeholder="Enter your password">
                        <button type="button" id="togglePassword">Show</button>
                    </div>
                </label>

                <div class="login-options">
                    <label><input type="checkbox" checked>Keep me signed in on this device</label>
                    <button type="button" id="forgotPassword">Forgot password?</button>
                </div>

                <div class="login-error" id="loginError" role="alert" hidden>Enter your approved email and password to continue.</div>
                <button class="login-submit" type="submit">Sign In <span>→</span></button>
                <p class="login-help">Having trouble signing in? Contact your VLACE Administrator.</p>
            </form>
            <footer>© 2026 VLACE · Authorized personnel only</footer>
        </section>

        <div class="modal-backdrop login-recovery-backdrop" id="recoveryModal" hidden>
            <section class="login-recovery-modal">
                <button class="login-recovery-close" type="button" id="closeRecovery">×</button>
                <span class="login-lock"><i data-lucide="mail"></i></span>
                <h2>Reset your password</h2>
                <p>For security, ask the VLACE Administrator to issue a password reset to your approved email address.</p>
                <button class="login-submit" type="button" id="understoodRecovery">Understood</button>
            </section>
        </div>
    </main>

    <div class="app-shell" id="dashboardApp" hidden>
        <aside class="sidebar" id="sidebar">
            <div class="brand">
                <img class="brand-logo" src="{{ asset('images/vlace-logo.png') }}" alt="VLACE logo">
                <div>
                    <strong>VLACE</strong>
                    <span>Admin Dashboard</span>
                </div>
            </div>

            <nav aria-label="Main navigation">
                <button class="active" data-section-target="overview"><i data-lucide="layout-dashboard"></i><span>Overview</span></button>
                <button data-section-target="analytics"><i data-lucide="line-chart"></i><span>Executive Analytics</span></button>
                <button data-section-target="ai"><i data-lucide="sparkles"></i><span>SPARK AI</span><b class="jarvis-online-dot" title="SPARK AI is active"></b></button>

                <div class="sidebar-divider" aria-hidden="true"></div>

                <button data-section-target="students"><i data-lucide="graduation-cap"></i><span>Students</span></button>
                <button data-section-target="teachers"><i data-lucide="users-round"></i><span>Teachers</span></button>
                <button data-section-target="staff"><i data-lucide="id-card"></i><span>Staff</span></button>

                <div class="sidebar-divider" aria-hidden="true"></div>

                <button data-section-target="lessons"><i data-lucide="book-open-check"></i><span>Lessons</span></button>

                <div class="sidebar-divider" aria-hidden="true"></div>

                <button data-section-target="packages"><i data-lucide="package"></i><span>Packages &amp; Prices</span></button>
                <button data-section-target="finance"><i data-lucide="wallet-cards"></i><span>Finance</span></button>
                <button data-section-target="approvals"><i data-lucide="clipboard-check"></i><span>Approval Requests</span><b class="nav-count" id="approvalRequestNavCount">5</b></button>

                <div class="sidebar-divider" aria-hidden="true"></div>

                <button class="nav-parent" data-section-target="inbox" data-group-toggle="communication" aria-expanded="false"><i data-lucide="inbox"></i><span>Communication</span><span class="nav-chevron">›</span></button>
                <div class="nav-submenu" id="communicationMenu" hidden>
                    <button data-section-target="inbox"><span>Unified Inbox</span><b class="nav-count">3</b></button>
                    <button data-section-target="email"><span>Email Inbox</span><b class="nav-count">5</b></button>
                    <button data-section-target="chatbot"><span>Chatbot</span><b class="nav-count chatbot-count">2</b></button>
                    <button data-section-target="slack"><span>Slack</span><b class="nav-count slack-count">4</b></button>
                    <button data-section-target="reminders"><span>Student Reminders</span><b class="nav-count">4</b></button>
                </div>

                <button data-section-target="marketing"><i data-lucide="megaphone"></i><span>Marketing</span></button>

                <div class="sidebar-divider" aria-hidden="true"></div>

                <button data-section-target="users"><i data-lucide="users"></i><span>User Management</span></button>
                <button data-section-target="policies"><i data-lucide="file-text"></i><span>Company Policy Manual</span></button>
                <button data-section-target="settings"><i data-lucide="settings"></i><span>Settings</span><b class="admin-only-nav-label">Admin</b></button>
            </nav>

            <button class="sidebar-logout" id="logoutButton" type="button">
                <i data-lucide="log-out"></i>
                <span>Log Out</span>
            </button>
        </aside>

        <main class="main">
            <header class="topbar">
                <button class="mobile-menu" id="mobileMenu" aria-label="Open menu">
                    <i data-lucide="menu"></i>
                </button>

                <div class="topbar-navigation">
                    <button class="global-back-button" id="backButton" hidden>
                        <span>←</span> Back
                    </button>
                    <nav class="page-breadcrumbs" id="pageBreadcrumbs" aria-label="Page trail">
                        <span>Dashboard</span>
                        <b>›</b>
                        <strong>Overview</strong>
                    </nav>
                </div>

                <div>
                    <p class="eyebrow">VLACE ESL COMPANY</p>
                    <h1 id="pageTitle">Admin Dashboard</h1>
                </div>

                <button class="admin-user dashboard-user-card" data-section-target="settings" aria-label="Open account settings">
                    <div class="dashboard-user-photo">
                        <span class="dashboard-face staff-face staff-face-0" id="adminUserPhoto" role="img" aria-label="Van Lester Acepcion mock profile photo"></span>
                        <span class="dashboard-user-initials">VA</span>
                        <span class="dashboard-user-online"></span>
                    </div>
                    <div class="dashboard-user-copy">
                        <small>Welcome back!</small>
                        <strong>Van Lester Acepcion</strong>
                        <span>Administrator</span>
                    </div>
                    <span class="dashboard-user-chevron">›</span>
                </button>
            </header>

            <section class="page-content dashboard-section active" data-section="overview">
                <div class="dashboard-filter-bar" aria-label="Dashboard country filter">
                    <div>
                        <span>COUNTRY / TIME-ZONE TEAM</span>
                        <strong id="dashboardCountryTitle">All Country Teams</strong>
                        <small>Updated <span id="dashboardUpdatedTime">Loading...</span> · Philippine Time (PHT) · Refreshes every 30 minutes</small>
                    </div>
                    <label>
                        <span>Filter dashboard by country</span>
                        <select id="dashboardCountry">
                            <option>All Countries</option>
                            <option>China</option>
                            <option>South Korea</option>
                            <option>Japan</option>
                            <option>UAE</option>
                            <option>Saudi Arabia</option>
                            <option>Dubai</option>
                            <option>Israel</option>
                        </select>
                    </label>
                </div>

                <section class="metrics" aria-label="Company summary">
                    <article class="metric-card"><div class="icon-box"><i data-lucide="graduation-cap"></i></div><div><p>Total Students</p><strong data-overview-stat="students">128</strong><span data-overview-note="students">Across all country teams</span></div></article>
                    <article class="metric-card"><div class="icon-box"><i data-lucide="users-round"></i></div><div><p>Active Teachers Today</p><strong data-overview-stat="activeTeachers">22</strong><span>Working or available today</span></div></article>
                    <article class="metric-card"><div class="icon-box"><i data-lucide="calendar-check"></i></div><div><p>Lessons Completed Today</p><strong data-overview-stat="finishedLessons">8</strong></div></article>
                </section>

                <section class="today-exceptions" aria-label="Today’s attendance and cancellations">
                    <div class="today-exceptions-heading">
                        <div><span>TODAY</span><h2>Attendance &amp; Cancellations</h2></div>
                        <small>As of <span data-dashboard-time>Loading...</span> PHT</small>
                    </div>
                    <div class="exception-metrics">
                        <article class="metric-card exception-card"><div class="icon-box"><i data-lucide="calendar-x"></i></div><div><p>Cancelled Lessons</p><strong data-overview-stat="cancelledLessons">4</strong><span>Lessons cancelled today</span></div></article>
                        <article class="metric-card exception-card"><div class="icon-box"><i data-lucide="user-x"></i></div><div><p>Absent Students</p><strong data-overview-stat="absentStudents">4</strong><span>Student no-shows today</span></div></article>
                        <article class="metric-card exception-card"><div class="icon-box"><i data-lucide="user-round-x"></i></div><div><p>Absent Teachers</p><strong data-overview-stat="absentTeachers">2</strong><span>Teacher absences today</span></div></article>
                    </div>
                </section>

                <section class="admin-country-coverage" aria-label="Country coverage by team">
                    <div class="admin-country-coverage-head">
                        <div>
                            <span>COUNTRY COVERAGE</span>
                            <h2>Country Team Coverage</h2>
                            <p>Teachers, students, managers, and staff assigned across every service country.</p>
                        </div>
                    </div>
                    <div class="admin-country-coverage-grid" id="adminCountryCoverageGrid"></div>
                </section>

                <section class="admin-payroll-approval-tasks" id="adminPayrollApprovalTasks" aria-label="Manager payroll flag approval tasks"></section>

                <section class="today-income" aria-label="Today’s calculated income">
                    <div class="today-income-heading">
                        <div>
                            <span>TODAY</span>
                            <h2>Income from Completed Lessons</h2>
                            <p>Calculated only after a lesson is marked Completed</p>
                        </div>
                        <div class="income-heading-tools">
                            <label class="exchange-rate-editor">
                                <span>USD → PHP exchange rate</span>
                                <span class="exchange-rate-input">
                                    <b>$1 = ₱</b>
                                    <input id="phpPerUsd" aria-label="USD to PHP exchange rate" type="number" min="1" step="0.01" value="58.5">
                                </span>
                                <small>Admin editable · Applied to all PHP amounts below</small>
                            </label>
                        </div>
                    </div>
                    <div class="income-metrics">
                        <article class="income-card gross">
                            <span>Gross Income</span>
                            <strong id="todayGrossUsd">$160.14</strong>
                            <div class="php-conversion-badge" id="todayGrossPhp">PHP ₱9,368.19</div>
                            <small id="todayGrossNote">8 completed lessons × lesson price</small>
                        </article>
                        <div class="income-operator">−</div>
                        <article class="income-card cost">
                            <span>Teacher Salary Cost</span>
                            <strong id="todayCostUsd">$24.96</strong>
                            <div class="php-conversion-badge" id="todayCostPhp">PHP ₱1,460.00</div>
                            <small>Calculated using each teacher’s rate</small>
                        </article>
                        <div class="income-operator">=</div>
                        <article class="income-card net">
                            <span>Net Income</span>
                            <strong id="todayNetUsd">$135.18</strong>
                            <div class="php-conversion-badge" id="todayNetPhp">PHP ₱7,908.19</div>
                            <small>Gross income minus teacher salaries</small>
                            <small class="income-refresh-note">As of <b data-dashboard-time>Loading...</b> PHT · Refreshes every 30 minutes</small>
                        </article>
                    </div>
                    <p class="income-formula-note" id="incomeFormulaNote">Teacher cost uses the assigned teacher’s hourly rate. A 25-minute class is paid as 30 minutes; a 50-minute class is paid as one hour. USD conversion shown at ₱58.50 per US dollar.</p>
                </section>

                <section class="country-exchange-card" aria-label="Country exchange rates">
                    <div class="country-exchange-head">
                        <div>
                            <span>HOURLY CURRENCY REFERENCE</span>
                            <h2>Country Exchange Rates</h2>
                            <p>Live currency reference for one US dollar across every enabled service country and Philippine peso.</p>
                        </div>
                        <div>
                            <small>Last updated <span id="exchangeRateTime">Loading...</span> PHT · Refreshes every 24 hours</small>
                            <button class="secondary-button" type="button" id="refreshRates">↻ Refresh Rates</button>
                        </div>
                    </div>
                    <div class="exchange-example" aria-label="Current live conversion rate">
                        <span>Live rate</span>
                        <strong>US $1.00</strong>
                        <b>→</b>
                        <strong>China CNY 7.18</strong>
                        <b>→</b>
                        <strong id="exchangeExamplePhp">Philippines PHP ₱58.50</strong>
                    </div>
                    <div class="country-rate-grid" id="countryRateGrid"></div>
                    <div class="country-exchange-foot">
                        <span>Automatically follows the countries enabled in dashboard settings. A new country appears after its currency is configured.</span>
                        <small>Reference rates only; payment-processor rates and fees may differ.</small>
                    </div>
                </section>

                <section class="monthly-income" aria-label="Current month income calculation">
                    <div class="monthly-income-heading">
                        <div>
                            <span>CURRENT MONTH</span>
                            <h2>Monthly Income Calculation</h2>
                            <p id="monthlyPeriod">Current month · All country teams</p>
                        </div>
                        <small>Month-to-date · Updated <span data-dashboard-time>Loading...</span> PHT</small>
                    </div>
                    <div class="monthly-income-grid">
                        <article>
                            <span>Completed Lessons</span>
                            <strong id="monthlyCompletedLessons">294</strong>
                            <small>Completed during this period</small>
                        </article>
                        <article class="monthly-usd">
                            <span>Gross Income</span>
                            <strong id="monthlyGrossUsd">$5,743.52</strong>
                            <div class="php-conversion-badge" id="monthlyGrossPhp">PHP ₱335,495.92</div>
                            <small>Revenue from completed lessons</small>
                        </article>
                        <article class="monthly-usd">
                            <span>Teacher Salary Cost</span>
                            <strong id="monthlyCostUsd">$1,012.99</strong>
                            <div class="php-conversion-badge" id="monthlyCostPhp">PHP ₱59,260.00</div>
                            <small>Using each teacher’s rate</small>
                        </article>
                        <article class="monthly-net monthly-usd">
                            <span>Net Income</span>
                            <strong id="monthlyNetUsd">$4,730.53</strong>
                            <div class="php-conversion-badge" id="monthlyNetPhp">PHP ₱276,235.92</div>
                            <small>Gross minus teacher salaries</small>
                        </article>
                    </div>
                    <p class="monthly-period-note">The monthly period always begins on the 1st and automatically ends on the correct final calendar day: the 28th, 29th, 30th, or 31st.</p>
                </section>

                <section class="completed-lessons-panel panel" aria-label="Completed lessons table">
                    <div class="panel-heading">
                        <div>
                            <span>TODAY</span>
                            <h2>Completed Lessons</h2>
                            <p>Lesson rows used by the income calculation above.</p>
                        </div>
                    </div>
                    <div class="table-wrap">
                        <table class="completed-lessons-table">
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Teacher</th>
                                    <th>Minutes</th>
                                    <th>Lesson Revenue</th>
                                    <th>Teacher Rate</th>
                                    <th>Paid Hours</th>
                                </tr>
                            </thead>
                            <tbody id="completedLessonsBody"></tbody>
                        </table>
                    </div>
                </section>
            </section>

            <section class="dashboard-section executive-page" data-section="analytics">
                <section class="executive-toolbar">
                    <div>
                        <p>EXECUTIVE COMMAND CENTER</p>
                        <h2>Business Performance</h2>
                        <span>Last refreshed <span id="analyticsRefreshTime">Loading...</span> PHT · Auto-refresh every 30 seconds</span>
                    </div>
                    <div class="executive-actions">
                        <label>Date Range
                            <select>
                                <option>Today</option>
                                <option>Yesterday</option>
                                <option>Last 7 Days</option>
                                <option selected>This Month</option>
                                <option>Last Month</option>
                                <option>This Year</option>
                                <option>Custom Date Range</option>
                            </select>
                        </label>
                        <button class="analytics-search" type="button">⌕ Search</button>
                        <button type="button" id="analyticsRefresh">↻ Refresh</button>
                    </div>
                </section>

                <section class="analytics-filters">
                    <label>Country<select><option>All Countries</option><option>China</option><option>South Korea</option><option>Japan</option><option>UAE</option><option>Saudi Arabia</option><option>Dubai</option><option>Israel</option></select></label>
                    <label>Teacher<select><option>All Teachers</option><option>Top Performing</option><option>Needs Attention</option></select></label>
                    <label>Program<select><option>All Programs</option><option>Top Performing</option><option>Needs Attention</option></select></label>
                    <label>Course<select><option>All Courses</option><option>Top Performing</option><option>Needs Attention</option></select></label>
                    <label>Student Type<select><option>All Student Types</option><option>Kids</option><option>Adults</option></select></label>
                    <label>Status<select><option>All Statuss</option><option>Active</option><option>Trial</option></select></label>
                </section>

                <section class="executive-kpis">
                    <article class="executive-kpi" style="--kpi-color:#2673e8"><div class="kpi-icon"><i data-lucide="calendar-days"></i></div><button class="box-help-button" type="button" title="Classes scheduled today">?</button><span>Classes Today</span><strong>36</strong><em class="up">▲ +8.2%</em><svg class="sparkline" viewBox="0 0 100 38" preserveAspectRatio="none"><path d="M0,34 L16,22 L33,26 L50,15 L66,19 L83,8 L100,4" fill="none" stroke="#2673e8" stroke-width="3" stroke-linecap="round"/></svg></article>
                    <article class="executive-kpi" style="--kpi-color:#16a36a"><div class="kpi-icon"><i data-lucide="wallet-cards"></i></div><button class="box-help-button" type="button" title="Gross class revenue today">?</button><span>Revenue Today</span><strong>$1,240</strong><small class="analytics-php-conversion">≈ PHP ₱72,540</small><em class="up">▲ +14.3%</em><svg class="sparkline" viewBox="0 0 100 38" preserveAspectRatio="none"><path d="M0,31 L16,27 L33,29 L50,20 L66,17 L83,10 L100,4" fill="none" stroke="#16a36a" stroke-width="3" stroke-linecap="round"/></svg></article>
                    <article class="executive-kpi" style="--kpi-color:#7758d9"><div class="kpi-icon"><i data-lucide="trending-up"></i></div><button class="box-help-button" type="button" title="Revenue after teacher pay">?</button><span>Profit Today</span><strong>$918</strong><small class="analytics-php-conversion">≈ PHP ₱53,703</small><em class="up">▲ +11.8%</em><svg class="sparkline" viewBox="0 0 100 38" preserveAspectRatio="none"><path d="M0,33 L16,29 L33,25 L50,19 L66,17 L83,10 L100,5" fill="none" stroke="#7758d9" stroke-width="3" stroke-linecap="round"/></svg></article>
                    <article class="executive-kpi" style="--kpi-color:#00a6a6"><div class="kpi-icon"><i data-lucide="check-circle-2"></i></div><button class="box-help-button" type="button" title="Lessons marked completed">?</button><span>Completed Lessons</span><strong>28</strong><em class="up">▲ +9.1%</em><svg class="sparkline" viewBox="0 0 100 38" preserveAspectRatio="none"><path d="M0,30 L16,25 L33,27 L50,18 L66,20 L83,12 L100,7" fill="none" stroke="#00a6a6" stroke-width="3" stroke-linecap="round"/></svg></article>
                    <article class="executive-kpi" style="--kpi-color:#e35d6a"><div class="kpi-icon"><i data-lucide="calendar-x"></i></div><button class="box-help-button" type="button" title="Lessons cancelled">?</button><span>Cancelled Lessons</span><strong>4</strong><em class="down">▼ −2.4%</em><svg class="sparkline" viewBox="0 0 100 38" preserveAspectRatio="none"><path d="M0,8 L16,14 L33,12 L50,20 L66,18 L83,22 L100,26" fill="none" stroke="#e35d6a" stroke-width="3" stroke-linecap="round"/></svg></article>
                    <article class="executive-kpi" style="--kpi-color:#e0942f"><div class="kpi-icon"><i data-lucide="clipboard-check"></i></div><button class="box-help-button" type="button" title="Trial lessons">?</button><span>Trial Classes</span><strong>7</strong><em class="up">▲ +16.7%</em><svg class="sparkline" viewBox="0 0 100 38" preserveAspectRatio="none"><path d="M0,33 L16,30 L33,24 L50,24 L66,18 L83,11 L100,5" fill="none" stroke="#e0942f" stroke-width="3" stroke-linecap="round"/></svg></article>
                    <article class="executive-kpi" style="--kpi-color:#2e87dc"><div class="kpi-icon"><i data-lucide="user-plus"></i></div><button class="box-help-button" type="button" title="Newly enrolled students">?</button><span>New Students</span><strong>6</strong><em class="up">▲ +20.0%</em><svg class="sparkline" viewBox="0 0 100 38" preserveAspectRatio="none"><path d="M0,34 L16,29 L33,29 L50,23 L66,17 L83,11 L100,5" fill="none" stroke="#2e87dc" stroke-width="3" stroke-linecap="round"/></svg></article>
                    <article class="executive-kpi" style="--kpi-color:#7158cc"><div class="kpi-icon"><i data-lucide="users-round"></i></div><button class="box-help-button" type="button" title="Teachers working today">?</button><span>Active Teachers</span><strong>22</strong><em class="up">▲ +4.8%</em><svg class="sparkline" viewBox="0 0 100 38" preserveAspectRatio="none"><path d="M0,25 L16,23 L33,19 L50,19 L66,15 L83,15 L100,10" fill="none" stroke="#7158cc" stroke-width="3" stroke-linecap="round"/></svg></article>
                    <article class="executive-kpi" style="--kpi-color:#18a56b"><div class="kpi-icon"><i data-lucide="graduation-cap"></i></div><button class="box-help-button" type="button" title="Student attendance rate">?</button><span>Student Attendance</span><strong>94.2%</strong><em class="up">▲ +1.6%</em><svg class="sparkline" viewBox="0 0 100 38" preserveAspectRatio="none"><path d="M0,26 L16,22 L33,24 L50,17 L66,19 L83,11 L100,10" fill="none" stroke="#18a56b" stroke-width="3" stroke-linecap="round"/></svg></article>
                    <article class="executive-kpi" style="--kpi-color:#1486a8"><div class="kpi-icon"><i data-lucide="user-check"></i></div><button class="box-help-button" type="button" title="Teacher attendance rate">?</button><span>Teacher Attendance</span><strong>96.8%</strong><em class="up">▲ +0.9%</em><svg class="sparkline" viewBox="0 0 100 38" preserveAspectRatio="none"><path d="M0,24 L16,20 L33,16 L50,20 L66,10 L83,9 L100,7" fill="none" stroke="#1486a8" stroke-width="3" stroke-linecap="round"/></svg></article>
                </section>

                <section class="weekly-performance">
                    <article class="executive-card"><div class="executive-card-head"><div><h3>Revenue (Last 7 Days)</h3><p>This Month</p></div><div class="card-tools"><button>?</button><button>⇩</button><button>⎙</button><button>−</button></div></div><div class="executive-card-body"><div class="weekly-value">$6,842 <span class="up">▲ 8.6%</span></div><small class="analytics-php-conversion">≈ PHP ₱400,257</small><div class="mini-line-chart blue"></div></div></article>
                    <article class="executive-card"><div class="executive-card-head"><div><h3>Completed Lessons</h3><p>This Month</p></div><div class="card-tools"><button>?</button><button>⇩</button><button>⎙</button><button>−</button></div></div><div class="executive-card-body"><div class="weekly-value">186 <span class="up">▲ 8.6%</span></div><div class="mini-line-chart teal"></div></div></article>
                    <article class="executive-card"><div class="executive-card-head"><div><h3>New Students</h3><p>This Month</p></div><div class="card-tools"><button>?</button><button>⇩</button><button>⎙</button><button>−</button></div></div><div class="executive-card-body"><div class="weekly-value">24 <span class="up">▲ 8.6%</span></div><div class="mini-line-chart purple"></div></div></article>
                    <article class="executive-card"><div class="executive-card-head"><div><h3>Trial Conversion Rate</h3><p>This Month</p></div><div class="card-tools"><button>?</button><button>⇩</button><button>⎙</button><button>−</button></div></div><div class="executive-card-body"><div class="weekly-value">68.4% <span class="up">▲ 4.2%</span></div><div class="mini-line-chart orange"></div></div></article>
                </section>

                <article class="executive-card large-performance">
                    <div class="executive-card-head"><div><h3>Monthly Business Performance</h3><p><span id="analyticsMetricLabel">Revenue</span> · All Countries</p></div><div class="card-tools"><button>?</button><button>⇩</button><button>⎙</button><button>−</button></div></div>
                    <div class="executive-card-body">
                        <div class="metric-switch" id="analyticsMetricSwitch">
                            <button class="active" data-analytics-metric="Revenue">Revenue</button>
                            <button data-analytics-metric="Profit">Profit</button>
                            <button data-analytics-metric="Expenses">Expenses</button>
                            <button data-analytics-metric="Payroll">Payroll</button>
                            <button data-analytics-metric="Lessons">Lessons</button>
                            <button data-analytics-metric="Students">Students</button>
                        </div>
                        <div class="chart-summary"><div><span id="analyticsMetricSummary">Revenue this month</span><strong id="analyticsMetricValue">$9,240</strong><small class="analytics-php-conversion" id="analyticsMetricPhp">≈ PHP ₱540,540</small><em>▲ 12.8% vs last month</em></div></div>
                        <div class="analytics-area-chart" id="analyticsAreaChart"></div>
                        <div class="month-labels"><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span></div>
                    </div>
                </article>

                <section class="analytics-two-column">
                    <article class="executive-card"><div class="executive-card-head"><div><h3>Sales Funnel</h3><p>Lead-to-retention conversion</p></div><div class="card-tools"><button>?</button><button>⇩</button><button>⎙</button><button>−</button></div></div><div class="executive-card-body"><div class="sales-funnel"><div style="width:100%"><span>Lead</span><strong>420</strong><em>100%</em></div><div style="width:89%"><span>Inquiry</span><strong>286</strong><em>68%</em></div><div style="width:78%"><span>Trial</span><strong>172</strong><em>41%</em></div><div style="width:67%"><span>Paid Student</span><strong>118</strong><em>28%</em></div><div style="width:56%"><span>Returning Student</span><strong>89</strong><em>21%</em></div></div></div></article>
                    <article class="executive-card"><div class="executive-card-head"><div><h3>Student Growth</h3><p>New, returning, and lost students</p></div><div class="card-tools"><button>?</button><button>⇩</button><button>⎙</button><button>−</button></div></div><div class="executive-card-body"><div class="stacked-legend"><span class="new">New</span><span class="returning">Returning</span><span class="lost">Lost</span></div><div class="stacked-bars"><div><span style="height:42%"></span><i style="height:14%"></i><em style="height:18%"></em><small>Jan</small></div><div><span style="height:55%"></span><i style="height:27%"></i><em style="height:15%"></em><small>Feb</small></div><div><span style="height:49%"></span><i style="height:21%"></i><em style="height:20%"></em><small>Mar</small></div><div><span style="height:68%"></span><i style="height:40%"></i><em style="height:12%"></em><small>Apr</small></div><div><span style="height:72%"></span><i style="height:44%"></i><em style="height:14%"></em><small>May</small></div><div><span style="height:81%"></span><i style="height:53%"></i><em style="height:10%"></em><small>Jun</small></div><div><span style="height:89%"></span><i style="height:61%"></i><em style="height:9%"></em><small>Jul</small></div></div></div></article>
                </section>

                <section class="business-overview-grid">
                    <article class="executive-card"><div class="executive-card-head"><div><h3>Revenue by Country</h3></div><div class="card-tools"><button>?</button><button>⇩</button><button>⎙</button><button>−</button></div></div><div class="executive-card-body"><div class="pie-layout"><div class="donut"></div><ul><li><span>China</span><strong>42%</strong></li><li><span>Israel</span><strong>18%</strong></li><li><span>Saudi Arabia</span><strong>14%</strong></li><li><span>Philippines</span><strong>10%</strong></li><li><span>Vietnam</span><strong>9%</strong></li><li><span>Thailand</span><strong>7%</strong></li></ul></div></div></article>
                    <article class="executive-card"><div class="executive-card-head"><div><h3>Top Courses</h3></div><div class="card-tools"><button>?</button><button>⇩</button><button>⎙</button><button>−</button></div></div><div class="executive-card-body"><div class="horizontal-bars"><div><span>Adult CEFR</span><i><b style="width:92%"></b></i><strong>92%</strong></div><div><span>Business English</span><i><b style="width:78%"></b></i><strong>78%</strong></div><div><span>IELTS</span><i><b style="width:64%"></b></i><strong>64%</strong></div><div><span>Kids Phonics</span><i><b style="width:58%"></b></i><strong>58%</strong></div><div><span>Kids Reading</span><i><b style="width:47%"></b></i><strong>47%</strong></div></div></div></article>
                    <article class="executive-card"><div class="executive-card-head"><div><h3>Teacher Utilization</h3></div><div class="card-tools"><button>?</button></div></div><div class="executive-card-body"><div class="gauge" style="--gauge:78%"><strong>78%</strong><span>Booked teaching hours</span></div></div></article>
                    <article class="executive-card"><div class="executive-card-head"><div><h3>Student Retention</h3></div><div class="card-tools"><button>?</button></div></div><div class="executive-card-body"><div class="gauge retention" style="--gauge:86%"><strong>86%</strong><span>Students retained</span></div></div></article>
                </section>

                <article class="executive-card"><div class="executive-card-head"><div><h3>Teacher Performance</h3><p>Filter by country and rank teachers from highest to lowest</p></div><div class="card-tools"><button>?</button><button>⇩</button><button>⎙</button><button>−</button></div></div><div class="executive-card-body"><div class="teacher-ranking-controls"><label>Country<select><option>All Countries</option><option>China</option><option>Japan</option><option>UAE</option></select></label><label>Rank by<select><option>Revenue Generated</option><option>Cancellation Rate</option><option>Student Rating</option><option>Attendance</option><option>Lessons</option></select></label><span>↓ Highest to lowest</span></div><div class="analytics-table-wrap"><table><thead><tr><th>Rank</th><th>Teacher</th><th>Country</th><th>Lessons</th><th>Attendance</th><th>Student Rating</th><th>Cancellation Rate</th><th>Revenue Generated</th><th>Status</th></tr></thead><tbody><tr><td><b class="teacher-rank">#1</b></td><td><strong>Maria Santos</strong><small>T-001</small></td><td>China</td><td>92</td><td>98%</td><td>★ 4.9</td><td>1.2%</td><td>$2,250</td><td><span class="status-pill positive">Active</span></td></tr><tr><td><b class="teacher-rank">#2</b></td><td><strong>David Lee</strong><small>T-002</small></td><td>South Korea</td><td>76</td><td>96%</td><td>★ 4.8</td><td>2.1%</td><td>$1,840</td><td><span class="status-pill positive">Active</span></td></tr><tr><td><b class="teacher-rank">#3</b></td><td><strong>Aya Nakamura</strong><small>T-003</small></td><td>Japan</td><td>68</td><td>97%</td><td>★ 4.9</td><td>1.5%</td><td>$1,610</td><td><span class="status-pill positive">Active</span></td></tr><tr><td><b class="teacher-rank">#4</b></td><td><strong>James Smith</strong><small>T-004</small></td><td>UAE</td><td>61</td><td>91%</td><td>★ 4.6</td><td>4.2%</td><td>$1,475</td><td><span class="status-pill neutral">Review</span></td></tr></tbody></table></div></div></article>

                <article class="executive-card"><div class="executive-card-head"><div><h3>Student Renewal Watch</h3><p>Students closest to finishing their package appear first</p></div><div class="card-tools"><button>?</button><button>⇩</button><button>⎙</button><button>−</button></div></div><div class="executive-card-body"><div class="renewal-watch-controls"><div><strong>2</strong><span>students need attention</span></div><label>Show students with<select><option>3 credits or fewer</option><option selected>5 credits or fewer</option><option>10 credits or fewer</option><option>All students</option></select></label><span>↑ Fewest credits left first</span></div><div class="analytics-table-wrap"><table><thead><tr><th>Priority</th><th>Student</th><th>Country</th><th>Teacher</th><th>Package Used</th><th>Credits Left</th><th>Attendance</th><th>Current Module</th><th>Referral Bonus</th><th>Renewal Probability</th><th>Follow Up</th></tr></thead><tbody><tr><td><b class="renewal-priority watch">#1</b></td><td><strong>Mira Wang</strong><small>S-004</small></td><td>China</td><td>Maria Santos</td><td><strong class="package-progress">11/15</strong><small>73% used</small></td><td><strong class="credits-left watch">4</strong></td><td>83%</td><td>Module 1</td><td><span class="no-referral">No bonus</span></td><td><span class="renewal-score">52%</span></td><td><button class="follow-up-btn">Follow Up</button></td></tr><tr><td><b class="renewal-priority normal">#2</b></td><td><strong>Eddie Zhang</strong><small>S-002</small></td><td>China</td><td>David Lee</td><td><strong class="package-progress">8/15</strong><small>53% used</small></td><td><strong class="credits-left">7</strong></td><td>94%</td><td>Module 2</td><td><span class="no-referral">No bonus</span></td><td><span class="renewal-score">74%</span></td><td><button class="follow-up-btn">Follow Up</button></td></tr></tbody></table></div></div></article>

                <section class="finance-kpis">
                    <article><button class="box-help-button" type="button">?</button><span>Gross Revenue</span><strong>$9,240</strong><small class="analytics-php-conversion">≈ PHP ₱540,540</small><em class="up">+14.2%</em><svg class="sparkline" viewBox="0 0 100 38"><path d="M0,30 L16,25 L33,28 L50,18 L66,15 L83,10 L100,5" fill="none" stroke="#2673e8" stroke-width="3"/></svg></article>
                    <article><button class="box-help-button" type="button">?</button><span>Net Profit</span><strong>$6,810</strong><small class="analytics-php-conversion">≈ PHP ₱398,385</small><em class="up">+12.8%</em><svg class="sparkline" viewBox="0 0 100 38"><path d="M0,32 L16,27 L33,29 L50,22 L66,17 L83,12 L100,6" fill="none" stroke="#16a36a" stroke-width="3"/></svg></article>
                    <article><button class="box-help-button" type="button">?</button><span>Payroll Due</span><strong>$1,410</strong><small class="analytics-php-conversion">≈ PHP ₱82,485</small><em class="up">+4.1%</em><svg class="sparkline" viewBox="0 0 100 38"><path d="M0,28 L16,25 L33,26 L50,21 L66,20 L83,17 L100,15" fill="none" stroke="#7758d9" stroke-width="3"/></svg></article>
                    <article><button class="box-help-button" type="button">?</button><span>Outstanding Payments</span><strong>$1,020</strong><small class="analytics-php-conversion">≈ PHP ₱59,670</small><em class="down">−8.6%</em><svg class="sparkline" viewBox="0 0 100 38"><path d="M0,9 L16,12 L33,11 L50,18 L66,22 L83,25 L100,29" fill="none" stroke="#e35d6a" stroke-width="3"/></svg></article>
                </section>
            </section>

            <section class="page-content dashboard-section teacher-page" data-section="teachers">
                <div class="section-intro student-intro">
                    <div>
                        <span>TEACHER OPERATIONS</span>
                        <h2>Teacher Management</h2>
                        <p>Manage teacher assignments, availability, rates, and meeting links used by student classrooms.</p>
                    </div>
                </div>

                <section class="student-summary-grid teacher-summary-grid" aria-label="Teacher summary">
                    <article><span>Total Teachers</span><strong id="teacherTotalCount">8</strong><small>Across service countries</small></article>
                    <article><span>Available Today</span><strong id="teacherAvailableCount">5</strong><small>Has matching schedule slots</small></article>
                    <article><span>Classes Today</span><strong id="teacherClassesToday">28</strong><small>Assigned classes today</small></article>
                    <article><span>Missing Links</span><strong id="teacherMissingLinks">1</strong><small>Needs meeting URL / ID</small></article>
                </section>

                <section class="teacher-workspace" id="teacherDirectoryWorkspace">
                    <article class="panel teacher-directory-panel">
                        <div class="student-directory-head">
                            <div>
                                <span>DIRECTORY</span>
                                <h3>Teacher Directory</h3>
                                <p><b id="teacherVisibleCount">8</b> visible teachers · Filter by country and availability</p>
                            </div>
                            <div class="student-filters">
                                <label>Country
                                    <select id="teacherCountryFilter">
                                        <option>All Countries</option>
                                        <option>China</option>
                                        <option>South Korea</option>
                                        <option>Japan</option>
                                        <option>UAE</option>
                                        <option>Saudi Arabia</option>
                                        <option>Israel</option>
                                    </select>
                                </label>
                                <label>Status
                                    <select id="teacherStatusFilter">
                                        <option>All Statuses</option>
                                        <option>Active</option>
                                        <option>On leave</option>
                                    </select>
                                </label>
                                <label class="student-search"><i data-lucide="search"></i><input id="teacherSearch" type="search" placeholder="Search teachers..."></label>
                            </div>
                        </div>
                        <div class="table-wrap">
                            <table class="student-table teacher-table">
                                <thead>
                                    <tr>
                                        <th>Teacher</th>
                                        <th>Country</th>
                                        <th>Student Type</th>
                                        <th>Students</th>
                                        <th>Classes Today</th>
                                        <th>Rate</th>
                                        <th>Status</th>
                                        <th>Meeting Link / ID</th>
                                    </tr>
                                </thead>
                                <tbody id="teacherTableBody"></tbody>
                            </table>
                        </div>
                    </article>

                </section>

                <article class="panel teacher-detail-panel student-profile-panel" id="teacherDetailPanel" hidden>
                    <header class="student-profile-header teacher-detail-header">
                        <div class="student-profile-identity">
                            <span class="student-avatar teacher-profile-photo-avatar teacher-face teacher-photo-0" id="teacherDetailPhoto" role="img" aria-label="Maria Santos mock profile photo"></span>
                            <div>
                                <span>TEACHER PROFILE</span>
                                <h3 id="teacherDetailName">Maria Santos</h3>
                                <p id="teacherDetailMeta">T1-001 · China · Kids &amp; Adults</p>
                            </div>
                        </div>
                    </header>

                    <div class="student-profile-tabs teacher-profile-tabs" role="tablist">
                        <button class="active" type="button" data-teacher-tab="profile">Profile</button>
                        <button type="button" data-teacher-tab="weekly">Weekly Schedule</button>
                        <button type="button" data-teacher-tab="payroll">Payroll</button>
                        <button type="button" data-teacher-tab="documents">Documents</button>
                        <button type="button" data-teacher-tab="feedback">Feedback</button>
                        <button type="button" data-teacher-tab="policy">Company Policy Manual</button>
                    </div>

                    <div class="teacher-tab-panel active" data-teacher-tab-panel="profile">
                        <section class="teacher-profile-overview admin-teacher-profile-overview">
                            <article class="teacher-profile-info-card">
                                <div class="teacher-links-card-head">
                                    <div>
                                        <h4>Teacher Information</h4>
                                        <p>Individual employment record</p>
                                    </div>
                                    <button class="secondary-button" type="button" id="teacherInfoPanelEdit">Edit</button>
                                </div>
                                <dl>
                                    <div><dt>Teacher ID</dt><dd id="teacherDetailId">T1-001</dd></div>
                                    <div><dt>Teacher Name</dt><dd id="teacherProfileRecordName">Maria Santos</dd></div>
                                    <div><dt>Assigned Country</dt><dd id="teacherDetailCountry">China</dd></div>
                                    <div><dt>Student Type</dt><dd id="teacherDetailType">Kids &amp; Adults</dd></div>
                                    <div><dt>Account Status</dt><dd><span class="status-pill positive" id="teacherDetailStatusValue">Active</span></dd></div>
                                </dl>
                            </article>

                            <article class="teacher-profile-info-card">
                                <div class="teacher-links-card-head">
                                    <div>
                                        <h4>Teaching Assignment</h4>
                                        <p>Current workload and payroll rate</p>
                                    </div>
                                    <button class="secondary-button" type="button" id="teacherAssignmentPanelEdit">Edit</button>
                                </div>
                                <dl>
                                    <div><dt>Assigned Students</dt><dd id="teacherDetailStudents">14</dd></div>
                                    <div><dt>Classes Today</dt><dd id="teacherDetailToday">6</dd></div>
                                    <div><dt>Hourly Rate</dt><dd id="teacherDetailRate">₱230/hr</dd></div>
                                </dl>
                            </article>

                            <article class="teacher-profile-info-card admin-teacher-links-card">
                                <div class="teacher-links-card-head">
                                    <div>
                                        <h4>Meeting Links</h4>
                                        <p>Classroom URLs and IDs used by assigned students</p>
                                    </div>
                                    <button class="secondary-button" type="button" id="teacherLinksPanelEdit">Edit</button>
                                </div>
                                <dl>
                                    <div><dt>Voov</dt><dd id="teacherLinksPanelVoov">voov-8831-CHN</dd></div>
                                    <div><dt>Google Meet</dt><dd id="teacherLinksPanelMeet">meet.google.com/ms-china</dd></div>
                                    <div><dt>Microsoft Teams</dt><dd id="teacherLinksPanelTeams">teams.msantos.vlace</dd></div>
                                    <div><dt>Zoom</dt><dd id="teacherLinksPanelZoom">zoom.us/j/88310022</dd></div>
                                </dl>
                            </article>

                            <article class="teacher-profile-info-card admin-teacher-supervisor-card">
                                <button class="secondary-button admin-teacher-supervisor-edit" type="button" id="teacherSupervisorPanelEdit">Edit</button>
                                <span>ASSIGNED SUPERVISOR</span>
                                <span class="admin-teacher-supervisor-photo staff-face staff-face-1" id="teacherDetailSupervisorPhoto" role="img" aria-label="Angela Reyes mock profile photo"></span>
                                <h4 id="teacherDetailSupervisorName">Angela Reyes</h4>
                                <p id="teacherDetailSupervisorRole">Academic Supervisor</p>
                                <small>Primary supervisor for teacher support, schedule coordination, and performance review.</small>
                            </article>
                        </section>

                        <section class="teacher-profile-overview admin-teacher-profile-overview admin-teacher-equipment-bank-overview">
                            <article class="teacher-profile-info-card">
                                <div class="teacher-links-card-head">
                                    <div>
                                        <h4>Computer Specs</h4>
                                        <p>Workstation, internet, and continuity readiness</p>
                                    </div>
                                    <button class="secondary-button" type="button" id="teacherComputerPanelEdit">Edit</button>
                                </div>
                                <dl>
                                    <div><dt>Computer Specs</dt><dd id="teacherComputerSpecs">MacBook Air M1 / 8GB RAM / 256GB SSD / HD webcam</dd></div>
                                    <div><dt>Main Internet &amp; Speed</dt><dd id="teacherMainInternet">Fiber broadband · 200 Mbps</dd></div>
                                    <div><dt>Dual Monitor?</dt><dd id="teacherDualMonitor">Yes</dd></div>
                                    <div><dt>Backup Internet &amp; Speed</dt><dd id="teacherBackupInternet">5G mobile hotspot · 80 Mbps</dd></div>
                                    <div><dt>Backup Electricity</dt><dd id="teacherBackupElectricity">UPS · 4 hours backup</dd></div>
                                </dl>
                            </article>

                            <article class="teacher-profile-info-card">
                                <div class="teacher-links-card-head">
                                    <div>
                                        <h4>Bank Information</h4>
                                        <p>Payroll account details on file</p>
                                    </div>
                                    <button class="secondary-button" type="button" id="teacherBankPanelEdit">Edit</button>
                                </div>
                                <dl>
                                    <div><dt>Complete Name</dt><dd id="teacherBankCompleteName">Maria Santos</dd></div>
                                    <div><dt>Bank Name</dt><dd id="teacherBankName">BDO Unibank</dd></div>
                                    <div><dt>Bank Account Number</dt><dd id="teacherBankAccountNumber">0088-1234-5678</dd></div>
                                </dl>
                            </article>
                        </section>

                        <section class="teacher-contact-card">
                            <div class="student-sensitive-head teacher-contact-head">
                                <div class="student-sensitive-title">
                                    <span class="student-sensitive-icon teacher-contact-icon"><i data-lucide="shield-check"></i></span>
                                    <div>
                                        <span>CONTACT INFORMATION</span>
                                        <h4>Teacher Contact Details</h4>
                                        <p>Standard employment contact information available to authorized dashboard users.</p>
                                    </div>
                                </div>
                                <b>Not Sensitive</b>
                            </div>
                            <dl class="student-sensitive-list teacher-contact-list">
                                <div><dt>Primary Phone Number</dt><dd id="teacherPrimaryPhone">+63 917 555 0142</dd></div>
                                <div><dt>Secondary Phone Number</dt><dd id="teacherSecondaryPhone">+63 945 555 0274</dd></div>
                                <div><dt>Email Address</dt><dd id="teacherEmailAddress">maria@vlace.com</dd></div>
                                <div><dt>Emergency Contact Name</dt><dd id="teacherEmergencyName">Andrea Santos (Sister)</dd></div>
                                <div><dt>Emergency Contact Number</dt><dd id="teacherEmergencyPhone">+63 918 555 0391</dd></div>
                            </dl>
                            <footer>
                                <span>Used for work-related and emergency communication only.</span>
                                <button class="secondary-button" type="button" id="teacherEditContactDetails">Edit Contact Details</button>
                            </footer>
                        </section>

                        <section class="student-activity-card teacher-activity-card">
                            <div class="student-activity-head">
                                <div class="student-activity-title">
                                    <span class="student-activity-icon"><i data-lucide="clipboard-list"></i></span>
                                    <div>
                                        <span>INTERNAL · NON-SENSITIVE</span>
                                        <h4>Profile Activity &amp; Notes</h4>
                                        <p>Track profile changes and internal notes. Payroll, passwords, and private account credentials are never shown here.</p>
                                    </div>
                                </div>
                                <div class="student-activity-actions">
                                    <b>Internal use only</b>
                                    <button class="primary-button" type="button" id="teacherAddNote">+ Add Note</button>
                                </div>
                            </div>
                            <ul id="teacherActivityList">
                                <li>
                                    <span></span>
                                    <div><strong>Meeting link verified</strong><p>Voov and Google Meet links were checked for classroom access.</p></div>
                                    <div><strong>Van A.</strong><small>Admin</small></div>
                                    <div><strong>Aug 2, 2026</strong><small>9:42 PM PHT</small></div>
                                </li>
                                <li>
                                    <span></span>
                                    <div><strong>Weekly availability updated</strong><p>Preferred teaching blocks were updated for this teacher.</p></div>
                                    <div><strong>Ana Cruz</strong><small>Manager</small></div>
                                    <div><strong>Aug 1, 2026</strong><small>6:15 PM PHT</small></div>
                                </li>
                            </ul>
                            <footer>
                                <span>Visibility controlled by: User Management → Roles &amp; Permissions → Teacher Profile Activity &amp; Notes</span>
                                <b>Newest activity shown first</b>
                            </footer>
                        </section>
                    </div>

                    <section class="teacher-tab-panel teacher-detail-records" data-teacher-tab-panel="weekly">
                        <article>
                            <div class="student-record-head">
                                <div>
                                    <h3>Weekly Schedule</h3>
                                    <p>Availability, assigned classes, and meeting links used when scheduling students.</p>
                                </div>
                            </div>

                            <section class="teacher-weekly-status-grid">
                                <article>
                                    <span>Teaching Days</span>
                                    <strong id="teacherWeeklyDaysCount">6</strong>
                                    <small>Days available this week</small>
                                </article>
                                <article>
                                    <span>Available Slots</span>
                                    <strong id="teacherWeeklySlotCount">14</strong>
                                    <small>Open lesson start times</small>
                                </article>
                                <article>
                                    <span>Classes Today</span>
                                    <strong id="teacherWeeklyClassesToday">6</strong>
                                    <small>Assigned to this teacher</small>
                                </article>
                                <article>
                                    <span>Meeting Source</span>
                                    <strong id="teacherWeeklyMeetingSource">Teacher profile</strong>
                                    <small>Used by Enter Classroom</small>
                                </article>
                            </section>

                            <section class="teacher-week-card">
                                <div class="schedule-week-head">
                                    <div>
                                        <span>WEEKLY AVAILABILITY</span>
                                        <h4>Teaching Pattern</h4>
                                    </div>
                                    <b>Asia/Manila · PHT</b>
                                </div>
                                <div class="teacher-week-grid" id="teacherWeeklyDays">
                                    <article data-teacher-weekday="Monday"><strong>Mon</strong><span>No slots</span></article>
                                    <article data-teacher-weekday="Tuesday"><strong>Tue</strong><span>No slots</span></article>
                                    <article data-teacher-weekday="Wednesday"><strong>Wed</strong><span>No slots</span></article>
                                    <article data-teacher-weekday="Thursday"><strong>Thu</strong><span>No slots</span></article>
                                    <article data-teacher-weekday="Friday"><strong>Fri</strong><span>No slots</span></article>
                                    <article data-teacher-weekday="Saturday"><strong>Sat</strong><span>No slots</span></article>
                                    <article data-teacher-weekday="Sunday"><strong>Sun</strong><span>No slots</span></article>
                                </div>
                            </section>

                            <div class="teacher-schedule-grid">
                                <section>
                                    <div class="profile-card-head"><i data-lucide="calendar-clock"></i><div><h4>Available Teaching Blocks</h4><p>Reference for Add Class teacher filtering</p></div></div>
                                    <ul class="teacher-detail-availability" id="teacherScheduleAvailability"></ul>
                                </section>
                                <section>
                                    <div class="profile-card-head"><i data-lucide="video"></i><div><h4>Meeting Link / ID Source</h4><p>Auto-used by student Enter Classroom</p></div></div>
                                    <dl class="teacher-weekly-links">
                                        <div><dt>Voov</dt><dd id="teacherWeeklyVoov">voov-8831-CHN</dd></div>
                                        <div><dt>Google Meet</dt><dd id="teacherWeeklyMeet">meet.google.com/ms-china</dd></div>
                                        <div><dt>Teams</dt><dd id="teacherWeeklyTeams">teams.msantos.vlace</dd></div>
                                        <div><dt>Zoom</dt><dd id="teacherWeeklyZoom">zoom.us/j/88310022</dd></div>
                                    </dl>
                                </section>
                            </div>

                            <section class="teacher-today-card">
                                <div class="lesson-access-banner teacher-lesson-access-banner">
                                    <div class="lesson-access-icon"><i data-lucide="video"></i></div>
                                    <div>
                                        <strong>Secure lesson access</strong>
                                        <span>Lesson rows are created automatically when a class is scheduled. Teacher profile meeting IDs will populate the classroom link.</span>
                                    </div>
                                    <span class="status-pill positive">Admin view</span>
                                </div>
                                <div class="table-wrap">
                                    <table class="student-lessons-table teacher-today-lessons-table">
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
                                                <th>Feedback Approval</th>
                                            </tr>
                                        </thead>
                                        <tbody id="teacherScheduleBody"></tbody>
                                    </table>
                                </div>
                                <footer class="payment-history-foot">
                                    Lesson records are generated automatically when a scheduled class is created. Student-facing feedback requires Admin or Manager approval before publishing.
                                </footer>
                            </section>

                            <section class="teacher-weekly-calendar-card">
                                <div class="teacher-weekly-calendar-head">
                                    <div>
                                        <h3>Teacher Weekly Schedule</h3>
                                        <p>Admin, Manager, and Staff can click any slot to manage its availability.</p>
                                    </div>
                                    <div class="teacher-week-range">
                                        <button type="button" id="teacherWeekPrevious" aria-label="Previous week"><i data-lucide="chevron-left"></i></button>
                                        <strong id="teacherWeekRange">July 27 – August 2</strong>
                                        <button type="button" id="teacherWeekNext" aria-label="Next week"><i data-lucide="chevron-right"></i></button>
                                    </div>
                                </div>

                                <div class="teacher-schedule-control-note">
                                    <strong>Admin · Manager · Staff Controls</strong>
                                    <span>Click a schedule slot to manage its class and availability.</span>
                                </div>

                                <div class="teacher-open-slots-bar">
                                    <div>
                                        <strong id="teacherOpenSlotCount">0 open time slots</strong>
                                        <span>30-minute increments · 6:00 AM to 12:00 midnight</span>
                                    </div>
                                </div>

                                <div class="teacher-weekly-calendar-wrap">
                                    <table class="teacher-weekly-calendar">
                                        <thead id="teacherWeeklyCalendarHead"></thead>
                                        <tbody id="teacherWeeklyCalendarBody"></tbody>
                                    </table>
                                </div>
                            </section>
                        </article>
                    </section>

                    <section class="teacher-tab-panel teacher-detail-records" data-teacher-tab-panel="payroll">
                        <article class="teacher-payroll-workspace">
                            <div class="student-record-head payroll-toolbar">
                                <div>
                                    <span class="detail-kicker">PAYROLL HISTORY</span>
                                    <h3>Teacher Payroll</h3>
                                    <p>Select any payroll period to view its complete daily calculation.</p>
                                </div>
                                <label class="payroll-period-picker">
                                    <span>Payroll period</span>
                                    <select id="teacherPayrollPeriodSelect" aria-label="Select payroll period"></select>
                                </label>
                            </div>

                            <div class="table-wrap payroll-history-wrap">
                                <table class="student-table payroll-history-table">
                                    <thead>
                                        <tr>
                                            <th>Payroll Period</th>
                                            <th>Lessons</th>
                                            <th>Hours</th>
                                            <th>Gross Pay</th>
                                            <th>Deductions</th>
                                            <th>Net Payroll</th>
                                            <th>Status</th>
                                            <th>Payslip</th>
                                            <th>Upload Receipt</th>
                                            <th>View Receipt</th>
                                        </tr>
                                    </thead>
                                    <tbody id="teacherPayrollHistoryBody"></tbody>
                                </table>
                            </div>

                            <div class="payroll-policy">
                                <i data-lucide="banknote"></i>
                                <div>
                                    <strong>Automatic pay rules</strong>
                                    <p>25-minute class = 30 minutes of pay · 50-minute class = 1 hour of pay · The 31st carries over to the next 1st–15th payroll.</p>
                                </div>
                            </div>

                            <div class="payroll-summary payroll-summary-five">
                                <article><span>Hourly Rate</span><strong id="teacherPayrollRate">₱230.00</strong><small>Allowed range: ₱150–₱250</small></article>
                                <article><span>Completed Lessons</span><strong id="teacherPayrollCompleted">0</strong><small id="teacherPayrollHours">0 payable hours</small></article>
                                <article><span>Gross Lesson Pay</span><strong id="teacherPayrollGross">₱0.00</strong><small>Before deductions</small></article>
                                <article class="deduction-summary-card"><span>Deductions</span><strong id="teacherPayrollDeductions">− ₱0.00</strong><small id="teacherPayrollDeductionCount">0 recorded adjustments</small></article>
                                <article class="total-card"><span>Net Payroll</span><strong id="teacherPayrollNet">₱0.00</strong><small>Gross pay minus deductions</small></article>
                            </div>

                            <article class="payroll-table-panel">
                                <div class="directory-tools">
                                    <div>
                                        <span class="detail-kicker">SELECTED PAYROLL PERIOD</span>
                                        <h3 id="teacherPayrollSelectedTitle">Detailed Calculation</h3>
                                        <p id="teacherPayrollSelectedHelp">Each class is converted to payable hours and multiplied by the teacher hourly rate.</p>
                                    </div>
                                    <button type="button" class="secondary-button" id="teacherPayrollDownload">Download Payroll</button>
                                </div>
                                <div class="table-wrap">
                                    <table class="student-table payroll-table payroll-table-with-deductions">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Student</th>
                                                <th>Lesson / Reason</th>
                                                <th>Actual Class</th>
                                                <th>Payable Time</th>
                                                <th>Rate</th>
                                                <th>Calculation</th>
                                                <th>Gross Amount</th>
                                                <th>Deduction</th>
                                                <th>Net</th>
                                            </tr>
                                        </thead>
                                        <tbody id="teacherPayrollDetailBody"></tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="4">Payroll Period Total</td>
                                                <td id="teacherPayrollTotalHours">0 hours</td>
                                                <td colspan="2" id="teacherPayrollTotalLessons">0 completed lessons</td>
                                                <td id="teacherPayrollTotalGross">₱0.00</td>
                                                <td id="teacherPayrollTotalDeductions">− ₱0.00</td>
                                                <td id="teacherPayrollTotalNet">₱0.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </article>

                            <article class="payroll-deductions-panel">
                                <div class="directory-tools">
                                    <div>
                                        <span class="detail-kicker">AUTOMATIC · APPROVAL CONTROLLED</span>
                                        <h3>Deductions</h3>
                                        <p>Absence deductions are created automatically. Managers can request a correction or waiver, and Admin approval keeps the audit trail clean.</p>
                                    </div>
                                    <button type="button" class="primary-button" id="teacherPayrollAddDeduction">+ Manual Adjustment</button>
                                </div>
                                <div class="deduction-workflow-note">
                                    <strong>Nothing is deleted.</strong>
                                    <span>Approved waivers remain visible for auditing, but are excluded from the net payroll calculation.</span>
                                </div>
                                <div class="table-wrap">
                                    <table class="student-table payroll-deductions-table">
                                        <thead>
                                            <tr>
                                                <th>Date Added</th>
                                                <th>Reason</th>
                                                <th>Explanation</th>
                                                <th>Related Date</th>
                                                <th>Source</th>
                                                <th>Amount</th>
                                                <th>Status & Approval</th>
                                            </tr>
                                        </thead>
                                        <tbody id="teacherPayrollDeductionsBody"></tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="5">Net Payroll Calculation</td>
                                                <td colspan="2" id="teacherPayrollNetFormula">₱0.00 − ₱0.00 = ₱0.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </article>
                        </article>
                    </section>

                    <section class="teacher-tab-panel teacher-detail-records" data-teacher-tab-panel="documents">
                        <article class="employee-records-module">
                            <div class="student-record-head directory-tools">
                                <div>
                                    <h3>Teacher Documents</h3>
                                    <p>Contracts, identification, certificates, and required teacher files.</p>
                                </div>
                                <button class="primary-button" type="button" id="teacherUploadDocument">+ Upload Document</button>
                            </div>
                            <div class="table-wrap">
                                <table class="student-table employee-documents-table">
                                    <thead>
                                        <tr>
                                            <th>Document</th>
                                            <th>Category</th>
                                            <th>File Type</th>
                                            <th>Updated</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="teacherDocumentsBody"></tbody>
                                </table>
                            </div>
                        </article>
                    </section>

                    <section class="teacher-tab-panel teacher-detail-records" data-teacher-tab-panel="feedback">
                        <article class="employee-records-module">
                            <div class="student-record-head directory-tools">
                                <div>
                                    <h3>Teacher Feedback</h3>
                                    <p>Performance reviews, coaching records, and feedback history for this teacher.</p>
                                </div>
                                <button class="primary-button" type="button" id="teacherAddFeedbackRecord">+ Add Feedback</button>
                            </div>
                            <div class="table-wrap">
                                <table class="student-table employee-feedback-table">
                                    <thead>
                                        <tr>
                                            <th>Period</th>
                                            <th>Feedback Type</th>
                                            <th>Reviewed By</th>
                                            <th>Result</th>
                                            <th>Visibility</th>
                                            <th>Acknowledgment</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="teacherFeedbackRecordsBody"></tbody>
                                </table>
                            </div>
                        </article>
                    </section>

                    <section class="teacher-tab-panel teacher-detail-records" data-teacher-tab-panel="policy">
                        <section class="employee-policy-library">
                            <section class="employee-policy-heading panel">
                                <div>
                                    <p>EMPLOYEE COMPLIANCE</p>
                                    <h2>Company Policy Manual</h2>
                                    <span>Review and acknowledge every published VLACE policy individually.</span>
                                </div>
                                <div class="employee-policy-progress" aria-label="Policy acknowledgement progress">
                                    <div><strong id="teacherPolicyProgressCount">0 of 8</strong><span>Acknowledged</span></div>
                                    <div class="employee-policy-progress-track"><i id="teacherPolicyProgressBar"></i></div>
                                    <small id="teacherPolicyProgressRemaining">8 policies require review</small>
                                </div>
                            </section>

                            <article class="panel directory-panel employee-policy-table-panel">
                                <div class="directory-tools">
                                    <div>
                                        <h3>Policy Library</h3>
                                        <p><span id="teacherPolicyEmployeeKind">Teacher</span> record · <span id="teacherPolicyEmployeeName">Maria Santos</span> · <span id="teacherPolicyEmployeeId">T1-001</span></p>
                                    </div>
                                    <div class="directory-filters">
                                        <label class="country-filter"><span>Category</span>
                                            <select id="teacherPolicyCategoryFilter"></select>
                                        </label>
                                        <label class="search"><span>⌕</span><input id="teacherPolicySearch" placeholder="Search policies…"></label>
                                    </div>
                                </div>
                                <div class="table-wrap">
                                    <table class="student-table employee-policy-table">
                                        <thead>
                                            <tr>
                                                <th>Policy</th>
                                                <th>Category</th>
                                                <th>Effective Date</th>
                                                <th>Acknowledgment</th>
                                                <th>Confirmed On</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody id="teacherPolicyTableBody"></tbody>
                                    </table>
                                </div>
                                <footer class="employee-policy-lock-note"><span>🔒</span><p><strong>Acknowledgements are permanent.</strong> Once submitted, an acknowledgement cannot be reversed or removed. Every record is tied to the employee ID, policy version, date, and time.</p></footer>
                            </article>
                        </section>
                    </section>

                    <div class="modal-backdrop" id="teacherPolicyModal" hidden>
                        <section class="modal employee-policy-modal" role="dialog" aria-modal="true" aria-labelledby="teacherPolicyModalTitle">
                            <div class="modal-head">
                                <div>
                                    <p id="teacherPolicyModalKicker">POL-001 · VERSION 2.1</p>
                                    <h3 id="teacherPolicyModalTitle">Code of Conduct</h3>
                                </div>
                                <button type="button" id="teacherPolicyModalClose" aria-label="Close policy">×</button>
                            </div>
                            <div class="employee-policy-modal-meta">
                                <div><span>Category</span><strong id="teacherPolicyModalCategory">Workplace Standards</strong></div>
                                <div><span>Effective date</span><strong id="teacherPolicyModalEffective">August 1, 2026</strong></div>
                                <div><span>Applies to</span><strong>All VLACE employees</strong></div>
                            </div>
                            <section><h4>Purpose and scope</h4><p id="teacherPolicyModalSummary"></p></section>
                            <section><h4>Policy requirements</h4><ol id="teacherPolicyModalRequirements"></ol></section>
                            <div id="teacherPolicyAcknowledgeState"></div>
                            <div class="modal-actions">
                                <button class="secondary-button" type="button" id="teacherPolicyModalDone">Close</button>
                                <button class="primary-button" type="button" id="teacherPolicySubmitAck">Submit Permanent Acknowledgement</button>
                            </div>
                        </section>
                    </div>
                </article>
            </section>

            <section class="page-content dashboard-section student-page" data-section="students">
                <div class="section-intro student-intro">
                    <div>
                        <span>STUDENT OPERATIONS</span>
                        <h2>Student Management</h2>
                        <p>View student records, lessons, payments, teachers, referrals, and schedule preferences.</p>
                    </div>
                </div>

                <section class="student-summary-grid" aria-label="Student summary">
                    <article><span>Total Students</span><strong>128</strong><small>Across all country teams</small></article>
                    <article><span>Active Students</span><strong>121</strong><small>Currently enrolled</small></article>
                    <article><span>Low Credits</span><strong>2</strong><small>5 lessons or fewer</small></article>
                    <article><span>Pending Payments</span><strong>8</strong><small>Need finance follow-up</small></article>
                </section>

                <article class="panel student-directory-panel" id="studentDirectoryPanel">
                    <div class="student-directory-head">
                        <div>
                            <span>DIRECTORY</span>
                            <h3>Student Directory</h3>
                            <p><b id="studentVisibleCount">5</b> visible students · Click a student to open profile details</p>
                        </div>
                        <div class="student-filters">
                            <label>Country
                                <select id="studentCountryFilter">
                                    <option>All Countries</option>
                                    <option>China</option>
                                    <option>South Korea</option>
                                    <option>UAE</option>
                                    <option>Israel</option>
                                </select>
                            </label>
                            <label>Assigned Teacher
                                <select id="studentTeacherFilter">
                                    <option>All Teachers</option>
                                    <option>Maria Santos</option>
                                    <option>David Lee</option>
                                    <option>Emma Wilson</option>
                                    <option>James Smith</option>
                                </select>
                            </label>
                            <label class="student-search"><i data-lucide="search"></i><input id="studentSearch" type="search" placeholder="Search students..."></label>
                        </div>
                    </div>
                    <div class="table-wrap">
                        <table class="student-table student-directory-table">
                            <thead>
                                <tr>
                                    <th>Student</th>
                                    <th>Country</th>
                                    <th>Student Type</th>
                                    <th>Age</th>
                                    <th>Level</th>
                                    <th>Assigned Teacher</th>
                                    <th>Lessons</th>
                                    <th>Payment</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody id="studentTableBody"></tbody>
                        </table>
                    </div>
                </article>

                <article class="panel student-profile-panel" id="studentProfilePanel" hidden>
                    <header class="student-profile-header">
                        <div class="student-profile-identity">
                            <span class="student-avatar student-face student-face-0" id="studentProfileAvatar" role="img" aria-label="Liam Chen mock profile photo"></span>
                            <div>
                                <span>STUDENT PROFILE</span>
                                <h3 id="studentProfileName">Liam Chen</h3>
                                <p id="studentProfileMeta">S1-001 · Kid · A2 English</p>
                            </div>
                        </div>
                        <div class="student-profile-actions">
                            <button class="primary-button" type="button" id="studentEditProfile"><i data-lucide="pencil"></i> Edit Profile</button>
                        </div>
                    </header>

                    <div class="student-profile-tabs" role="tablist">
                        <button class="active" type="button" data-student-tab="profile">Profile</button>
                        <button type="button" data-student-tab="payments">Payment History</button>
                        <button type="button" data-student-tab="lessons">Lessons</button>
                        <button type="button" data-student-tab="referrals">Referrals</button>
                        <button type="button" data-student-tab="schedule">Schedule</button>
                    </div>

                    <section class="student-package-booking-card">
                        <div class="profile-card-head">
                            <i data-lucide="calendar-check"></i>
                            <div>
                                <h4>Package Booking Status</h4>
                                <p>Shows whether purchased lessons have already been assigned to class slots.</p>
                            </div>
                        </div>
                        <div class="student-package-booking-metrics">
                            <article>
                                <span>Lessons Purchased</span>
                                <strong id="studentPurchasedLessons">30</strong>
                            </article>
                            <article>
                                <span>Assigned Classes</span>
                                <strong id="studentAssignedClasses">20</strong>
                            </article>
                            <article>
                                <span>Not Yet Booked</span>
                                <strong id="studentUnbookedLessons">10</strong>
                            </article>
                            <article>
                                <span>Status</span>
                                <strong id="studentBookingStatus">Needs booking</strong>
                            </article>
                        </div>
                        <div class="student-booking-progress" aria-hidden="true"><span id="studentBookingProgressBar"></span></div>
                        <p id="studentBookingNote">20 of 30 purchased lessons have assigned class slots.</p>
                    </section>

                    <div class="student-tab-panel active" data-student-tab-panel="profile">
                        <section class="student-profile-grid">
                            <article>
                                <div class="profile-card-head"><i data-lucide="id-card"></i><div><h4>Personal Information</h4><p>Basic student record</p></div></div>
                                <dl>
                                    <div><dt>Student ID</dt><dd id="studentProfileId">S1-001</dd></div>
                                    <div><dt>Country / Market</dt><dd id="studentProfileCountry">China</dd></div>
                                    <div><dt>Student Type</dt><dd id="studentProfileType">Kid</dd></div>
                                    <div><dt>Age</dt><dd id="studentProfileAge">9</dd></div>
                                    <div><dt>English Level</dt><dd id="studentProfileLevel">A2</dd></div>
                                    <div><dt>Account Status</dt><dd id="studentProfileStatus">Active</dd></div>
                                </dl>
                            </article>
                            <article>
                                <div class="profile-card-head"><i data-lucide="book-open-check"></i><div><h4>Learning Assignment</h4><p>Teacher, package, and balance</p></div></div>
                                <dl>
                                    <div><dt>Assigned Teacher</dt><dd id="studentProfileTeacher">Maria Santos</dd></div>
                                    <div><dt>Lessons Used</dt><dd id="studentProfileUsed">18</dd></div>
                                    <div><dt>Package Lessons</dt><dd id="studentProfilePackage">30</dd></div>
                                    <div><dt>Payment Status</dt><dd id="studentProfilePayment">Paid</dd></div>
                                </dl>
                            </article>
                            <article class="student-schedule-card">
                                <div class="profile-card-head"><i data-lucide="calendar-days"></i><div><h4>Preferred Class Schedule</h4><p>Use this when assigning available slots</p></div></div>
                                <dl>
                                    <div><dt>Preferred Day</dt><dd id="studentProfileDay">Wednesday &amp; Sunday</dd></div>
                                    <div><dt>Preferred Time</dt><dd id="studentProfileTime">7:00 PM</dd></div>
                                </dl>
                            </article>
                        </section>

                        <section class="student-sensitive-grid">
                            <article class="student-sensitive-card">
                                <div class="student-sensitive-head">
                                    <div class="student-sensitive-title">
                                        <span class="student-sensitive-icon"><i data-lucide="shield-check"></i></span>
                                        <div>
                                            <span>ADMIN · RESTRICTED INFORMATION</span>
                                            <h4>Sensitive Contact Information</h4>
                                            <p>Hidden from all roles unless access is explicitly allowed in User Management.</p>
                                        </div>
                                    </div>
                                    <b>Highly Sensitive</b>
                                </div>
                                <dl class="student-sensitive-list">
                                    <div><dt>WeChat Number / ID</dt><dd id="studentProfileWechat">liamchen_parent</dd></div>
                                    <div><dt>WhatsApp Number</dt><dd id="studentProfileWhatsapp">+86 138 0013 8000</dd></div>
                                    <div><dt>Email Address</dt><dd id="studentProfileEmail">liam.guardian@example.com</dd></div>
                                    <div><dt>Guardian</dt><dd id="studentProfileGuardian">Grace Chen (Mother)</dd></div>
                                    <div><dt>Customer Phone Number</dt><dd id="studentProfilePhone">+86 138 0013 8000</dd></div>
                                </dl>
                                <footer>
                                    <span>Access controlled by: User Management → Roles &amp; Permissions → Student Contact Details</span>
                                    <button class="secondary-button" type="button" id="studentEditContactDetails">Edit Contact Details</button>
                                </footer>
                            </article>
                            <article class="student-activity-card">
                                <div class="student-activity-head">
                                    <div class="student-activity-title">
                                        <span class="student-activity-icon"><i data-lucide="clipboard-list"></i></span>
                                        <div>
                                            <span>INTERNAL · NON-SENSITIVE</span>
                                            <h4>Profile Activity &amp; Notes</h4>
                                            <p>Track account changes and internal notes. Payment, pricing, and private contact information are never shown here.</p>
                                        </div>
                                    </div>
                                    <div class="student-activity-actions">
                                        <b>Hidden from students</b>
                                        <button class="primary-button" type="button" id="studentAddActivityNote" data-student-action="add-note">+ Add Note</button>
                                    </div>
                                </div>
                                <ul id="studentActivityList">
                                    <li>
                                        <span></span>
                                        <div><strong>Preferred schedule updated</strong><p>Preferred days changed to Wednesday and Sunday.</p></div>
                                        <div><strong>Van A.</strong><small>Admin</small></div>
                                        <div><strong>Aug 2, 2026</strong><small>9:42 PM PHT</small></div>
                                    </li>
                                    <li>
                                        <span></span>
                                        <div><strong>Learning assignment edited</strong><p>Assigned teacher changed from David Lee to Maria Santos.</p></div>
                                        <div><strong>Ana Cruz</strong><small>Manager</small></div>
                                        <div><strong>Aug 1, 2026</strong><small>6:15 PM PHT</small></div>
                                    </li>
                                    <li>
                                        <span></span>
                                        <div><strong>Profile created</strong><p>Student learning profile was added to VLACE.</p></div>
                                        <div><strong>Van A.</strong><small>Admin</small></div>
                                        <div><strong>Jul 10, 2026</strong><small>10:08 AM PHT</small></div>
                                    </li>
                                </ul>
                                <footer>
                                    <span>Visibility controlled by: User Management → Roles &amp; Permissions → Student Profile Activity &amp; Notes</span>
                                    <b>Newest activity shown first</b>
                                </footer>
                            </article>
                        </section>
                    </div>

                    <div class="student-tab-panel" data-student-tab-panel="payments">
                        <article class="panel student-record-panel">
                            <div class="student-record-head">
                                <div>
                                    <h3 id="studentPaymentTitle">Liam Chen’s Payment History</h3>
                                    <p>Verified payments, discounts, and package credits synchronized from connected payment processors.</p>
                                </div>
                                <button class="primary-button" type="button" id="studentManualPayment">+ Manual Record</button>
                            </div>
                            <div class="payment-sync-banner">
                                <div class="payment-sync-pulse"></div>
                                <div>
                                    <strong>Automatic Payment Sync</strong>
                                    <span>PayPal and NihaoPay/Alipay payments appear here after the processor confirms payment.</span>
                                </div>
                                <div>
                                    <span class="status-pill positive">Connected</span>
                                    <small>Webhook updates · usually within seconds</small>
                                </div>
                            </div>
                            <div class="table-wrap">
                                <table class="student-payment-table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Package</th>
                                            <th>Original Amount</th>
                                            <th>Discount</th>
                                            <th>Referral Discount</th>
                                            <th>Net Amount Paid</th>
                                            <th>Processor</th>
                                            <th>Reference</th>
                                            <th>Status</th>
                                            <th>Synchronized</th>
                                            <th>Receipt</th>
                                        </tr>
                                    </thead>
                                    <tbody id="studentPaymentBody">
                                        <tr>
                                            <td>Jul 10, 2026</td>
                                            <td><strong>30 Lessons</strong></td>
                                            <td>$300.00</td>
                                            <td>5%</td>
                                            <td>8%</td>
                                            <td><strong class="payment-net">$261.00</strong></td>
                                            <td>PayPal</td>
                                            <td>PP-7K24-9021</td>
                                            <td><span class="status-pill positive">Paid</span></td>
                                            <td><span class="payment-sync-time">✓ Automatic · 10:32 AM</span></td>
                                            <td><button class="secondary-button receipt-view-button" type="button" data-payment-receipt>View Receipt</button></td>
                                        </tr>
                                        <tr>
                                            <td>Apr 4, 2026</td>
                                            <td><strong>15 Lessons</strong></td>
                                            <td>$160.00</td>
                                            <td>0%</td>
                                            <td>8%</td>
                                            <td><strong class="payment-net">$147.20</strong></td>
                                            <td>NihaoPay · Alipay</td>
                                            <td>NHP-481952</td>
                                            <td><span class="status-pill positive">Paid</span></td>
                                            <td><span class="payment-sync-time">✓ Automatic · 8:14 PM</span></td>
                                            <td><button class="secondary-button receipt-view-button" type="button" data-payment-receipt>View Receipt</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <footer class="payment-history-foot">
                                Manual records are intended for bank transfers, cash payments, legacy records, and verified offline payments.
                            </footer>
                        </article>
                    </div>

                    <div class="student-tab-panel" data-student-tab-panel="lessons">
                        <article class="panel student-record-panel">
                            <div class="student-record-head">
                                <div>
                                    <h3 id="studentLessonsTitle">Liam Chen’s Lessons</h3>
                                    <p>Completed, scheduled, and remaining lessons with student-facing teacher feedback.</p>
                                </div>
                            </div>
                            <div class="lesson-access-banner">
                                <div class="lesson-access-icon"><i data-lucide="video"></i></div>
                                <div>
                                    <strong>Secure lesson access</strong>
                                    <!-- Teacher profile must later store admin-only Voov, Google Meet, Teams, and Zoom meeting IDs. Those IDs should auto-populate the student lesson meeting room and stay hidden from teachers. -->
                                    <span>Lesson rows are created automatically when a class is scheduled. Teacher profile meeting IDs will populate the room link.</span>
                                </div>
                                <span class="status-pill positive">Admin view</span>
                            </div>
                            <div class="table-wrap">
                                <table class="student-lessons-table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Topic</th>
                                            <th>Teacher</th>
                                            <th>Duration</th>
                                            <th>Lesson Status</th>
                                            <th>Student Classroom</th>
                                            <th>Class Recording</th>
                                            <th>Teacher Feedback</th>
                                            <th>Video URL</th>
                                            <th>Action</th>
                                            <th>Feedback Approval</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr data-meeting-submitted="true" data-feedback-submitted="true">
                                            <td>Jul 30, 2026</td>
                                            <td><button class="lesson-pdf-link" type="button"><span>PDF</span>Past Tense Review</button></td>
                                            <td data-student-lesson-teacher>Maria Santos</td>
                                            <td>25 min</td>
                                            <td><span class="status-pill positive" data-lesson-status>Completed</span></td>
                                            <td><button class="enter-classroom-button" type="button" data-lesson-action="classroom" data-lesson-topic="Past Tense Review">Enter Classroom</button></td>
                                            <td><button class="feedback-button recording-view-button" type="button" data-lesson-action="recording" data-lesson-topic="Past Tense Review">▶ View Recording</button></td>
                                            <td><div class="teacher-feedback-actions"><button class="feedback-button" type="button" data-lesson-action="feedback" data-lesson-topic="Past Tense Review">View</button><button class="feedback-button add-feedback-button" type="button" data-lesson-action="add-feedback" data-lesson-topic="Past Tense Review">Add</button></div></td>
                                            <td><button class="feedback-button meeting-link-button" type="button" data-lesson-action="meeting-url" data-lesson-topic="Past Tense Review">Update Video</button></td>
                                            <td>
                                                <select class="lesson-action-select" data-lesson-row-action>
                                                    <option value="">Select action</option>
                                                    <option value="student-absent">Student absent</option>
                                                    <option value="completed">Completed</option>
                                                </select>
                                            </td>
                                            <td>
                                                <div class="feedback-approval-actions">
                                                    <button class="reject-feedback" type="button" data-feedback-decision="Rejected">Reject</button>
                                                    <button class="approve-feedback" type="button" data-feedback-decision="Approved">✓ Approve</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-meeting-submitted="false" data-feedback-submitted="false">
                                            <td>Aug 1, 2026</td>
                                            <td><button class="lesson-pdf-link" type="button"><span>PDF</span>Free Conversation</button></td>
                                            <td data-student-lesson-teacher>Maria Santos</td>
                                            <td>25 min</td>
                                            <td><span class="status-pill neutral" data-lesson-status>Scheduled</span></td>
                                            <td><span class="lesson-link-unavailable">Not ready</span></td>
                                            <td><span class="lesson-link-unavailable">Not available</span></td>
                                            <td><div class="teacher-feedback-actions"><button class="feedback-button" type="button" data-lesson-action="feedback" data-lesson-topic="Free Conversation">View</button><button class="feedback-button add-feedback-button" type="button" data-lesson-action="add-feedback" data-lesson-topic="Free Conversation">Add</button></div></td>
                                            <td><button class="feedback-button meeting-link-button" type="button" data-lesson-action="meeting-url" data-lesson-topic="Free Conversation">Add Video</button></td>
                                            <td>
                                                <select class="lesson-action-select" data-lesson-row-action>
                                                    <option value="">Select action</option>
                                                    <option value="student-absent">Student absent</option>
                                                    <option value="completed">Completed</option>
                                                </select>
                                            </td>
                                            <td><span class="feedback-decision-note">Awaiting teacher feedback</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <footer class="payment-history-foot">
                                Lesson records are generated automatically when a scheduled class is created. Student-facing feedback requires Admin or Manager approval before publishing.
                            </footer>
                        </article>
                        <section id="studentPreviousPackageLessons"></section>
                    </div>

                    <div class="student-tab-panel" data-student-tab-panel="referrals">
                        <article class="panel student-record-panel student-referrals-panel">
                            <div class="student-record-head">
                                <div>
                                    <h3 id="studentReferralTitle">Liam Chen's Referrals</h3>
                                    <p>Track referred students, approval status, earned lesson credits, and referral discounts.</p>
                                </div>
                                <button class="primary-button" type="button" id="studentAddReferral">+ Add Referral</button>
                            </div>

                            <section class="referral-summary-grid">
                                <article>
                                    <span>Total Referrals</span>
                                    <strong id="studentReferralTotal">3</strong>
                                    <small>All submitted referrals</small>
                                </article>
                                <article>
                                    <span>Converted</span>
                                    <strong id="studentReferralConverted">2</strong>
                                    <small>Enrolled and verified</small>
                                </article>
                                <article>
                                    <span>Credits Earned</span>
                                    <strong id="studentReferralCredits">4</strong>
                                    <small>Bonus lessons applied</small>
                                </article>
                                <article>
                                    <span>Discount Given</span>
                                    <strong id="studentReferralDiscount">8%</strong>
                                    <small>Used in payment history</small>
                                </article>
                            </section>

                            <section class="referral-code-card">
                                <div class="referral-code-icon"><i data-lucide="share-2"></i></div>
                                <div>
                                    <span>Student Referral Code</span>
                                    <strong id="studentReferralCode">LIAM-CHEN-2026</strong>
                                    <p id="studentReferralLink">https://vlace.example/ref/liam-chen-2026</p>
                                </div>
                                <button class="secondary-button" type="button" id="copyReferralLink">Copy Link</button>
                            </section>

                            <section class="referral-policy-grid">
                                <article>
                                    <span>Reward Rule</span>
                                    <strong>2 bonus lessons</strong>
                                    <p>Applied after the referred student completes their first paid package.</p>
                                </article>
                                <article>
                                    <span>Payment Discount</span>
                                    <strong>Referral discount</strong>
                                    <p>Finance can apply the approved referral discount during payment recording.</p>
                                </article>
                            </section>

                            <div class="table-wrap">
                                <table class="student-referral-table">
                                    <thead>
                                        <tr>
                                            <th>Referral Date</th>
                                            <th>Referred Student</th>
                                            <th>Country</th>
                                            <th>Package</th>
                                            <th>Status</th>
                                            <th>Reward</th>
                                            <th>Discount</th>
                                            <th>Owner</th>
                                            <th>Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody id="studentReferralBody">
                                        <tr>
                                            <td>Jul 18, 2026</td>
                                            <td><strong>Emily Chen</strong><small>Family referral</small></td>
                                            <td>China</td>
                                            <td>30 Lessons</td>
                                            <td><span class="status-pill positive">Converted</span></td>
                                            <td><strong class="referral-reward">+2 lessons</strong></td>
                                            <td>8%</td>
                                            <td>Grace Chen</td>
                                            <td>Reward applied to next renewal.</td>
                                        </tr>
                                        <tr>
                                            <td>Aug 2, 2026</td>
                                            <td><strong>Kevin Li</strong><small>Parent referral</small></td>
                                            <td>China</td>
                                            <td>Trial</td>
                                            <td><span class="status-pill warning">Pending Trial</span></td>
                                            <td><span class="lesson-link-unavailable">Pending</span></td>
                                            <td>0%</td>
                                            <td>Grace Chen</td>
                                            <td>Trial scheduled this week.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <footer class="payment-history-foot">
                                Referral rewards are approved by Admin or Manager before credits or payment discounts are applied.
                            </footer>
                        </article>
                    </div>

                    <div class="student-tab-panel" data-student-tab-panel="schedule">
                        <article class="panel student-record-panel student-schedule-panel">
                            <div class="student-record-head">
                                <div>
                                    <h3 id="studentScheduleTitle">Liam Chen's Schedule</h3>
                                    <p>Manage preferred class days, teacher availability, and scheduled classes.</p>
                                </div>
                                <div class="student-record-actions">
                                    <button class="secondary-button" type="button" id="studentAddClass">+ Add Class</button>
                                    <button class="primary-button" type="button" id="studentEditSchedule">Edit Schedule</button>
                                </div>
                            </div>

                            <section class="schedule-overview-grid">
                                <article class="schedule-preference-card">
                                    <span>Preferred Days</span>
                                    <strong id="studentSchedulePreferredDay">Wednesday &amp; Sunday</strong>
                                    <small>Student-facing preference</small>
                                </article>
                                <article class="schedule-preference-card">
                                    <span>Preferred Time</span>
                                    <strong id="studentSchedulePreferredTime">7:00 PM</strong>
                                    <small>Philippine Time</small>
                                </article>
                                <article class="schedule-preference-card">
                                    <span>Assigned Teacher</span>
                                    <strong id="studentScheduleTeacher">Maria Santos</strong>
                                    <small>Uses teacher availability</small>
                                </article>
                            </section>

                            <section class="schedule-week-card">
                                <div class="schedule-week-head">
                                    <div>
                                        <span>WEEKLY PATTERN</span>
                                        <h4>Preferred Availability</h4>
                                    </div>
                                    <b>Asia/Manila · PHT</b>
                                </div>
                                <div class="schedule-day-grid" id="studentScheduleDays">
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span class="active">Wed</span>
                                    <span>Thu</span>
                                    <span>Fri</span>
                                    <span>Sat</span>
                                    <span class="active">Sun</span>
                                </div>
                            </section>

                            <section class="schedule-detail-grid">
                                <article>
                                    <div class="profile-card-head"><i data-lucide="clock-3"></i><div><h4>Time &amp; Duration</h4><p>Default class block</p></div></div>
                                    <dl>
                                        <div><dt>Class Time</dt><dd id="studentScheduleClassTime">7:00 PM PHT</dd></div>
                                        <div><dt>Duration</dt><dd id="studentScheduleDuration">25 minutes</dd></div>
                                        <div><dt>Frequency</dt><dd id="studentScheduleFrequency">2x weekly</dd></div>
                                    </dl>
                                </article>
                                <article>
                                    <div class="profile-card-head"><i data-lucide="video"></i><div><h4>Meeting Link / ID</h4><p>Auto-filled from teacher profile</p></div></div>
                                    <dl>
                                        <div><dt>Platform</dt><dd id="studentSchedulePlatform">Voov</dd></div>
                                        <div><dt>URL / Meeting ID Source</dt><dd>Teacher profile</dd></div>
                                        <div><dt>Enter Classroom</dt><dd>Uses saved teacher link</dd></div>
                                    </dl>
                                </article>
                            </section>

                            <div class="table-wrap">
                                <table class="student-schedule-table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Day</th>
                                            <th>Time</th>
                                            <th>Teacher</th>
                                            <th>Topic</th>
                                            <th>Meeting Link / ID</th>
                                        </tr>
                                    </thead>
                                    <tbody id="studentScheduleBody">
                                        <tr>
                                            <td>Aug 6, 2026</td>
                                            <td>Wednesday</td>
                                            <td>7:00 PM PHT</td>
                                            <td data-student-schedule-teacher>Maria Santos</td>
                                            <td>Free Conversation</td>
                                            <td><span class="status-pill positive">From teacher profile</span></td>
                                        </tr>
                                        <tr>
                                            <td>Aug 10, 2026</td>
                                            <td>Sunday</td>
                                            <td>7:00 PM PHT</td>
                                            <td data-student-schedule-teacher>Maria Santos</td>
                                            <td>Grammar Practice</td>
                                            <td><span class="status-pill positive">From teacher profile</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <footer class="payment-history-foot">
                                Scheduled classes create lesson records automatically. Enter Classroom uses the assigned teacher's saved URL or meeting ID from their admin-only profile settings.
                            </footer>
                        </article>
                    </div>
                </article>
            </section>

            <section class="page-content dashboard-section jarvis-page" data-section="ai">
                <section class="jarvis-header">
                    <div class="jarvis-orb">
                        <span>S</span>
                        <i></i>
                    </div>
                    <div>
                        <p class="eyebrow">VLACE INTELLIGENCE · PROTOTYPE</p>
                        <h2>SPARK</h2>
                        <p>Your AI operations assistant for schedules, data interpretation, tasks, records, messages, reminders, and business decisions.</p>
                    </div>
                    <div class="jarvis-status">
                        <i></i> Available<span>Full access · approval required</span>
                    </div>
                </section>

                <section class="jarvis-layout">
                    <aside class="panel jarvis-sidebar">
                        <h3>What SPARK can help with</h3>
                        <div class="spark-access-card">
                            <span>Dashboard Access</span>
                            <strong>Full Dashboard Access</strong>
                            <label>
                                Action mode
                                <select id="sparkAccessMode">
                                    <option>Ask permission first</option>
                                    <option>Read-only mode</option>
                                </select>
                            </label>
                            <small>SPARK can review all authorized modules. Any change, message, payment, or schedule action requires your approval.</small>
                        </div>

                        <button type="button" data-spark-preset="Help me with today’s priorities"><strong>Today’s priorities</strong><span>Review payments, campaigns, attendance, and approvals</span></button>
                        <button type="button" data-spark-preset="Help me with students"><strong>Students</strong><span>Find low credits, schedules, and follow-ups</span></button>
                        <button type="button" data-spark-preset="Help me with teachers"><strong>Teachers</strong><span>Check absences, payroll, and transfers</span></button>
                        <button type="button" data-spark-preset="Help me with communication"><strong>Communication</strong><span>Draft replies, emails, and reminders</span></button>
                        <button type="button" data-spark-preset="Help me with finance"><strong>Finance</strong><span>Review income, payments, and reconciliation</span></button>
                        <button type="button" data-spark-preset="Help me with marketing"><strong>Marketing</strong><span>Analyze leads, campaigns, and spending</span></button>

                        <div class="jarvis-guardrail">
                            <b>Confirmation required</b>
                            <p>SPARK can analyze and prepare actions. Sending messages, changing schedules, approving payments, or editing records always requires your confirmation.</p>
                        </div>
                    </aside>

                    <article class="panel jarvis-chat">
                        <header>
                            <div>
                                <span class="mini-jarvis">S</span>
                                <div>
                                    <strong>SPARK AI Assistant</strong>
                                    <small><span id="sparkModeLabel">Ask permission first</span> · Uses mock dashboard data</small>
                                </div>
                            </div>
                            <button type="button" id="sparkNewChat" title="Start a new conversation">New Chat</button>
                        </header>

                        <div class="jarvis-messages" id="sparkMessages"></div>

                        <div class="jarvis-suggestions">
                            <button type="button" data-spark-preset="What needs my attention today?">What needs my attention today?</button>
                            <button type="button" data-spark-preset="Show students with low credits">Show students with low credits</button>
                            <button type="button" data-spark-preset="Which campaigns need review?">Which campaigns need review?</button>
                            <button type="button" data-spark-preset="Check absent teachers">Check absent teachers</button>
                            <button type="button" data-spark-preset="Draft a payment follow-up">Draft a payment follow-up</button>
                        </div>

                        <form class="jarvis-composer" id="sparkForm">
                            <textarea id="sparkInput" placeholder="Ask SPARK anything about your VLACE operations…"></textarea>
                            <div>
                                <span>Enter to send · Shift + Enter for a new line</span>
                                <button type="submit" id="sparkSend" disabled>Send to SPARK</button>
                            </div>
                        </form>
                    </article>

                    <aside class="panel jarvis-activity">
                        <h3>SPARK Workspace</h3>
                        <div><span>Open approvals</span><strong>1</strong></div>
                        <div><span>Follow-ups needed</span><strong>18</strong></div>
                        <div><span>Finance alerts</span><strong>3</strong></div>
                        <div><span>Teacher absences</span><strong>2</strong></div>
                        <h4>Recent AI activity</h4>
                        <ul>
                            <li>Reviewed low-credit students<small>Today, 8:42 PM</small></li>
                            <li>Prepared campaign summary<small>Today, 7:15 PM</small></li>
                            <li>Drafted parent reminder<small>Today, 6:50 PM</small></li>
                        </ul>
                        <div class="jarvis-api-note">
                            <b>AI connection required</b>
                            <p>A real OpenAI API and secure backend will be connected later. No business data is currently sent to an AI service.</p>
                        </div>
                    </aside>
                </section>
            </section>

            <section class="page-content dashboard-section staff-page" data-section="staff">
                <section class="staff-module-intro">
                    <div>
                        <h2>Staff Management</h2>
                        <p>Manage non-teaching managers and customer service employees.</p>
                    </div>
                </section>

                <section class="metric-grid staff-metrics">
                    <article>
                        <span>Total Staff</span>
                        <strong id="staffTotalCount">3</strong>
                        <small>Across operations teams</small>
                    </article>
                    <article>
                        <span>Active Today</span>
                        <strong id="staffActiveToday">3</strong>
                        <small>Scheduled or logged in</small>
                    </article>
                    <article>
                        <span>Customer Support</span>
                        <strong id="staffSupportCount">2</strong>
                        <small>Frontline service team</small>
                    </article>
                    <article>
                        <span>Pending Reviews</span>
                        <strong id="staffPendingReviews">2</strong>
                        <small>Feedback or policy follow-up</small>
                    </article>
                </section>

                <section class="staff-workspace" id="staffDirectoryWorkspace">
                    <article class="panel staff-directory-panel">
                        <div class="student-directory-head">
                            <div>
                                <h3>Staff Directory</h3>
                                <span><span id="staffVisibleCount">3</span> non-teaching employees</span>
                            </div>
                            <div class="student-filters">
                                <label>Staff Role
                                    <select id="staffRoleFilter">
                                        <option>All Roles</option>
                                        <option>Manager</option>
                                        <option>Customer Service / Staff</option>
                                    </select>
                                </label>
                                <label class="search-label">
                                    <i data-lucide="search"></i>
                                    <input type="search" id="staffSearch" placeholder="Search staff...">
                                </label>
                            </div>
                        </div>

                        <div class="table-wrap">
                            <table class="staff-table">
                                <thead>
                                    <tr>
                                        <th>Staff Member</th>
                                        <th>Role</th>
                                        <th>Department</th>
                                        <th>Assigned Operation</th>
                                        <th>Supervisor</th>
                                        <th>Work Schedule</th>
                                        <th>Pay Rate</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody id="staffTableBody"></tbody>
                            </table>
                        </div>
                    </article>
                </section>

                <article class="panel staff-detail-panel" id="staffDetailPanel" hidden>
                    <header class="staff-detail-hero">
                        <div class="staff-detail-identity">
                            <span class="staff-detail-avatar staff-face staff-face-1" id="staffDetailAvatar" role="img" aria-label="Angela Reyes mock profile photo"></span>
                            <div>
                                <p class="eyebrow">NON-TEACHING STAFF PROFILE</p>
                                <h3 id="staffDetailName">Angela Reyes</h3>
                                <small><span id="staffDetailMeta">ST-001 · Manager</span> · <b class="status-pill positive" id="staffHeroStatus">Active</b></small>
                            </div>
                        </div>
                        <div class="staff-detail-summary">
                            <dl>
                                <div>
                                    <dt>Department</dt>
                                    <dd id="staffHeroDepartment">Operations</dd>
                                </div>
                                <div>
                                    <dt>Pay Rate</dt>
                                    <dd id="staffHeroPay">₱28,000/month</dd>
                                </div>
                            </dl>
                            <button class="secondary-button" type="button" id="staffEditProfile">Edit Profile</button>
                        </div>
                    </header>

                    <nav class="student-profile-tabs teacher-profile-tabs">
                        <button class="active" type="button" data-staff-tab="profile">Profile</button>
                        <button type="button" data-staff-tab="schedule">Work Schedule</button>
                        <button type="button" data-staff-tab="payroll">Payroll</button>
                        <button type="button" data-staff-tab="documents">Documents</button>
                        <button type="button" data-staff-tab="feedback">Feedback</button>
                        <button type="button" data-staff-tab="policy">Company Policy Manual</button>
                    </nav>

                    <div class="teacher-tab-panel active" data-staff-tab-panel="profile">
                        <section class="teacher-profile-overview staff-profile-overview">
                            <article class="teacher-profile-info-card">
                                <h4>Staff Information</h4>
                                <p>Individual employment record</p>
                                <dl>
                                    <div><dt>Staff ID</dt><dd id="staffInfoId">ST-001</dd></div>
                                    <div><dt>Full Name</dt><dd id="staffInfoName">Angela Reyes</dd></div>
                                    <div><dt>Role</dt><dd id="staffInfoRole">Manager</dd></div>
                                    <div><dt>Department</dt><dd id="staffInfoDepartment">Operations</dd></div>
                                    <div><dt>Employment Status</dt><dd><span class="status-pill positive" id="staffInfoStatus">Active</span></dd></div>
                                </dl>
                            </article>
                            <article class="teacher-profile-info-card">
                                <h4>Work Assignment</h4>
                                <p>Current workload and payroll rate</p>
                                <dl>
                                    <div><dt>Assigned Operation</dt><dd id="staffInfoMarket">Central Operations</dd></div>
                                    <div><dt>Supervisor</dt><dd id="staffInfoSupervisor">Van Acepcion</dd></div>
                                    <div><dt>Work Schedule</dt><dd id="staffInfoSchedule">Mon-Fri · 9:00 AM-6:00 PM</dd></div>
                                    <div><dt>Pay Rate</dt><dd id="staffInfoPay">₱28,000/month</dd></div>
                                </dl>
                            </article>
                        </section>

                        <article class="employee-contact-card staff-contact-card">
                            <header>
                                <span><i data-lucide="shield-check"></i></span>
                                <div>
                                    <p class="eyebrow">CONTACT INFORMATION</p>
                                    <h3>Staff Contact Details</h3>
                                    <small>Standard employment contact information available to authorized dashboard users.</small>
                                </div>
                                <b>NOT SENSITIVE</b>
                            </header>
                            <div class="employee-contact-grid">
                                <div><span>Primary Phone Number</span><strong id="staffPrimaryPhone">+63 917 555 2110</strong></div>
                                <div><span>Secondary Phone Number</span><strong id="staffSecondaryPhone">+63 945 555 2111</strong></div>
                                <div><span>Email Address</span><strong id="staffEmailAddress">angela@vlace.com</strong></div>
                                <div><span>Emergency Contact Name</span><strong id="staffEmergencyName">Marco Reyes (Brother)</strong></div>
                                <div><span>Emergency Contact Number</span><strong id="staffEmergencyPhone">+63 918 555 2112</strong></div>
                            </div>
                            <footer>
                                <span>Used for work-related and emergency communication only.</span>
                                <button class="secondary-button" type="button" id="staffEditContactDetails">Edit Contact Details</button>
                            </footer>
                        </article>

                        <article class="student-activity-card staff-activity-card">
                            <div class="student-activity-head">
                                <div>
                                    <span><i data-lucide="clipboard-list"></i></span>
                                    <div>
                                        <p class="eyebrow">INTERNAL · NON-SENSITIVE</p>
                                        <h3>Profile Activity &amp; Notes</h3>
                                        <small>Track profile changes and internal notes. Payroll, passwords, and private account credentials are never shown here.</small>
                                    </div>
                                </div>
                                <div class="student-activity-actions">
                                    <b>Internal use only</b>
                                    <button class="primary-button" type="button" id="staffAddNote">+ Add Note</button>
                                </div>
                            </div>
                            <ul id="staffActivityList"></ul>
                            <footer>
                                <span>Visibility controlled by: User Management → Roles &amp; Permissions → Staff Profile Activity &amp; Notes</span>
                                <b>Newest activity shown first</b>
                            </footer>
                        </article>
                    </div>

                    <section class="teacher-tab-panel teacher-detail-records staff-schedule-tab" data-staff-tab-panel="schedule">
                        <article class="panel student-record-panel">
                            <div class="student-record-head">
                                <div>
                                    <h3>Staff Work Schedule</h3>
                                    <p>Weekly work pattern, attendance records, and approved operational hours.</p>
                                </div>
                                <button class="primary-button" type="button" id="staffEditSchedule">Edit Schedule</button>
                            </div>
                            <section class="staff-week-grid" id="staffWeekGrid"></section>
                            <section class="staff-attendance-summary">
                                <article><span>Present</span><strong>4</strong><small>This cutoff</small></article>
                                <article><span>Late</span><strong>1</strong><small>Needs review</small></article>
                                <article><span>Absent</span><strong>1</strong><small>Recorded absence</small></article>
                                <article><span>Approved Hours</span><strong>39.8</strong><small>Payroll-ready</small></article>
                            </section>
                            <div class="table-wrap">
                                <table class="staff-attendance-table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Day</th>
                                            <th>Scheduled Hours</th>
                                            <th>Time In</th>
                                            <th>Time Out</th>
                                            <th>Approved Hours</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody id="staffAttendanceBody"></tbody>
                                </table>
                            </div>
                            <section class="staff-calendar-panel">
                                <div class="staff-calendar-head">
                                    <div>
                                        <h4 id="staffCalendarTitle">August 2026 Attendance Calendar</h4>
                                        <p>Scan the month quickly. Select any date to view or edit its attendance record.</p>
                                    </div>
                                    <div class="staff-calendar-tools">
                                        <label>Month
                                            <input type="search" id="staffAttendanceMonthFilter" list="staffAttendanceMonths" value="August 2026" placeholder="Search month...">
                                            <datalist id="staffAttendanceMonths">
                                                <option value="August 2026"></option>
                                                <option value="July 2026"></option>
                                                <option value="June 2026"></option>
                                            </datalist>
                                        </label>
                                        <label>Filter Status
                                            <select id="staffAttendanceStatusFilter">
                                                <option value="All">All records</option>
                                                <option value="Issues">Attendance issues</option>
                                                <option value="P">P - Present</option>
                                                <option value="A">A - Absent</option>
                                                <option value="L">L - Approved Leave</option>
                                                <option value="LT">LT - Late</option>
                                                <option value="HD">HD - Half Day</option>
                                                <option value="DO">DO - Day Off</option>
                                                <option value="H">H - Holiday</option>
                                                <option value="OT">OT - Overtime</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div class="staff-calendar-legend" aria-label="Attendance code legend">
                                    <span><b class="present">P</b> Present</span>
                                    <span><b class="absent">A</b> Absent</span>
                                    <span><b class="leave">L</b> Approved Leave</span>
                                    <span><b class="late">LT</b> Late</span>
                                    <span><b class="half-day">HD</b> Half Day</span>
                                    <span><b class="off">DO</b> Day off</span>
                                    <span><b class="holiday">H</b> Holiday</span>
                                    <span><b class="overtime">OT</b> Overtime</span>
                                </div>
                                <div class="staff-calendar-grid" id="staffCalendarGrid" aria-label="August 2026 monthly attendance calendar"></div>
                                <footer class="staff-calendar-footer">
                                    <span>- means no attendance record yet. Edits are recorded in Profile Activity &amp; Notes with the employee ID of the person who changed them.</span>
                                    <button class="secondary-button" type="button" id="staffCalendarClearFilter">Clear Filter</button>
                                </footer>
                            </section>
                        </article>
                    </section>

                    <section class="teacher-tab-panel teacher-detail-records" data-staff-tab-panel="payroll">
                        <article class="panel student-record-panel">
                            <div class="student-record-head">
                                <div>
                                    <h3 id="staffPayrollTitle">Staff Payroll</h3>
                                    <p>Cutoff history, approved work hours, adjustments, payslips, and receipt uploads.</p>
                                </div>
                            </div>
                            <section class="staff-payroll-summary">
                                <article><span>Current Cutoff</span><strong>Jan 16-30, 2026</strong><small>For review</small></article>
                                <article><span>Approved Hours</span><strong>80</strong><small>10 work days</small></article>
                                <article><span>Gross Pay</span><strong>₱14,000.00</strong><small>Before adjustments</small></article>
                                <article><span>Net Payroll</span><strong>₱14,000.00</strong><small>Ready for approval</small></article>
                            </section>
                            <div class="table-wrap">
                                <table class="staff-payroll-table">
                                    <thead>
                                        <tr>
                                            <th>Payroll Cutoff</th>
                                            <th>Days Worked</th>
                                            <th>Approved Hours</th>
                                            <th>Gross Pay</th>
                                            <th>Adjustments</th>
                                            <th>Net Payroll</th>
                                            <th>Status</th>
                                            <th>Payslip</th>
                                            <th>Receipt</th>
                                        </tr>
                                    </thead>
                                    <tbody id="staffPayrollBody"></tbody>
                                </table>
                            </div>
                        </article>
                    </section>

                    <section class="teacher-tab-panel teacher-detail-records" data-staff-tab-panel="documents">
                        <article class="panel employee-records-panel">
                            <div class="student-record-head">
                                <div>
                                    <h3>Staff Documents</h3>
                                    <p>Employment documents, IDs, clearances, and HR records for this staff member.</p>
                                </div>
                                <button class="primary-button" type="button" id="staffUploadDocument">+ Upload Document</button>
                            </div>
                            <div class="table-wrap">
                                <table class="employee-record-table">
                                    <thead>
                                        <tr><th>Document</th><th>Category</th><th>File Type</th><th>Updated</th><th>Status</th><th>Action</th></tr>
                                    </thead>
                                    <tbody id="staffDocumentsBody"></tbody>
                                </table>
                            </div>
                        </article>
                    </section>

                    <section class="teacher-tab-panel teacher-detail-records" data-staff-tab-panel="feedback">
                        <article class="panel employee-records-panel">
                            <div class="student-record-head">
                                <div>
                                    <h3>Staff Feedback</h3>
                                    <p>Performance reviews, coaching records, and feedback history for this staff member.</p>
                                </div>
                                <button class="primary-button" type="button" id="staffAddFeedback">+ Add Feedback</button>
                            </div>
                            <div class="table-wrap">
                                <table class="employee-record-table">
                                    <thead>
                                        <tr><th>Period</th><th>Feedback Type</th><th>Reviewed By</th><th>Result</th><th>Visibility</th><th>Acknowledgement</th><th>Action</th></tr>
                                    </thead>
                                    <tbody id="staffFeedbackBody"></tbody>
                                </table>
                            </div>
                        </article>
                    </section>

                    <section class="teacher-tab-panel teacher-detail-records" data-staff-tab-panel="policy">
                        <article class="panel employee-policy-panel staff-policy-panel">
                            <div class="student-record-head">
                                <div>
                                    <p class="eyebrow">EMPLOYEE COMPLIANCE</p>
                                    <h3>Company Policy Manual</h3>
                                    <p>Review and acknowledge every published VLACE policy individually.</p>
                                </div>
                                <div class="policy-progress">
                                    <strong id="staffPolicyProgressCount">0 of 8</strong>
                                    <span>Acknowledged</span>
                                    <i><b id="staffPolicyProgressBar"></b></i>
                                    <small id="staffPolicyRequiredCount">8 policies require review</small>
                                </div>
                            </div>
                            <div class="employee-record-toolbar">
                                <label>Category
                                    <select id="staffPolicyCategoryFilter">
                                        <option>All categories</option>
                                        <option>Workplace Standards</option>
                                        <option>Employment</option>
                                        <option>Teaching &amp; Students</option>
                                        <option>Security &amp; Privacy</option>
                                    </select>
                                </label>
                                <label class="search-label">
                                    <i data-lucide="search"></i>
                                    <input type="search" id="staffPolicySearch" placeholder="Search policies...">
                                </label>
                            </div>
                            <div class="table-wrap">
                                <table class="employee-record-table policy-table">
                                    <thead>
                                        <tr><th>Policy</th><th>Category</th><th>Effective Date</th><th>Acknowledgement</th><th>Confirmed On</th><th>Action</th></tr>
                                    </thead>
                                    <tbody id="staffPolicyBody"></tbody>
                                </table>
                            </div>
                            <footer class="policy-footnote">Acknowledgements are permanent. Every record is tied to the employee ID, policy version, date, and time.</footer>
                        </article>
                    </section>
                </article>
            </section>

            <section class="page-content dashboard-section lesson-library-page" data-section="lessons">
                <div class="section-intro curriculum-title">
                    <div>
                        <p class="eyebrow">CURRICULUM OPERATIONS</p>
                        <h2>Curriculum Management</h2>
                        <p>Organize programs, modules, and lesson materials in one clear workspace.</p>
                    </div>
                    <div class="curriculum-top-actions">
                        <button class="outline-blue" type="button" id="lessonImportButton">Import Curriculum</button>
                        <button class="outline-green" type="button" id="lessonExportButton">Export Program</button>
                        <button type="button" id="lessonBackupButton" aria-label="Backup and restore curriculum">•••</button>
                    </div>
                </div>

                <div class="curriculum-security">
                    <span><i data-lucide="shield-check"></i></span>
                    <div>
                        <strong>Protected curriculum · Admin-controlled</strong>
                        <p>Admin can add, edit, export, and download. Other roles receive view-only access inside the dashboard; direct lesson-file URLs are not shown.</p>
                    </div>
                    <b>ADMIN ACCESS</b>
                </div>

                <div class="lesson-category-tabs" id="lessonCategoryTabs" role="tablist" aria-label="Lesson age groups"></div>

                <div class="curriculum-workspace lesson-library-layout">
                    <aside class="panel curriculum-tree lesson-navigation" id="lessonNavigation">
                        <div class="tree-title">
                            <div>
                                <strong>Programs</strong>
                                <span>Choose a program to view its modules</span>
                            </div>
                        </div>
                        <label class="tree-search">
                            <i data-lucide="search"></i>
                            <input type="search" id="lessonProgramSearch" placeholder="Search programs...">
                        </label>
                        <div class="program-button-section">
                            <div class="program-button-section-head">
                                <span id="lessonGroupIcon">T</span>
                                <strong id="lessonGroupTitle">Teenagers Programs</strong>
                                <small id="lessonProgramCount">6 available</small>
                            </div>
                            <div class="program-button-grid" id="lessonProgramList"></div>
                        </div>
                        <div class="tree-add-actions">
                            <button class="tree-add-program" type="button" id="lessonAddProgram">+ Add Program</button>
                        </div>
                    </aside>

                    <main class="curriculum-main">
                        <article class="panel prototype-lessons" id="lessonMainPanel">
                            <div class="module-table-selector">
                                <div class="cefr-category-selector">
                                    <div>
                                        <span>ENGLISH LEVEL</span>
                                        <strong>Select A1, A2, B1, or B2 for this program</strong>
                                    </div>
                                    <div class="cefr-category-tabs" id="lessonLevelTabs" role="tablist" aria-label="English levels"></div>
                                </div>

                                <div class="module-selector-heading">
                                    <div>
                                        <span>MODULES</span>
                                        <strong id="lessonModuleHeading">A1 · CEFR English</strong>
                                    </div>
                                    <button type="button" class="section-add-button" id="lessonAddModule">+ Add Module</button>
                                </div>

                                <div class="module-selector-tabs" id="lessonModuleTabs" role="tablist" aria-label="Program modules"></div>

                                <div class="selected-module-summary" aria-live="polite">
                                    <div>
                                        <span>NOW VIEWING</span>
                                        <strong id="lessonViewingSummary">CEFR English · A1 · Module 1</strong>
                                    </div>
                                    <b id="lessonViewingCount">30 PDF lessons shown below</b>
                                </div>
                            </div>

                            <div class="lesson-table-heading">
                                <div>
                                    <span>LESSONS</span>
                                    <strong id="lessonTableTitle">Module 1 · 30 PDF lessons</strong>
                                </div>
                                <button type="button" class="section-add-button" id="lessonAddLesson">+ Add Lesson</button>
                            </div>

                            <div class="prototype-filters lesson-filters">
                                <label class="search">
                                    <i data-lucide="search"></i>
                                    <input type="search" id="lessonSearch" placeholder="Search lessons...">
                                </label>
                                <select id="lessonStatusFilter" aria-label="Filter lessons by status">
                                    <option>All</option>
                                    <option>Published</option>
                                    <option>Draft</option>
                                    <option>Scheduled</option>
                                    <option>Archived</option>
                                </select>
                                <select id="lessonFileTypeFilter" aria-label="Filter lessons by file type">
                                    <option>All</option>
                                    <option>PDF</option>
                                    <option>PowerPoint</option>
                                    <option>Images</option>
                                    <option>Video</option>
                                    <option>Audio</option>
                                </select>
                                <select id="lessonSortFilter" aria-label="Sort lessons">
                                    <option>Curriculum Order</option>
                                    <option>Recently Updated</option>
                                    <option>Oldest Updated</option>
                                    <option>Title A-Z</option>
                                    <option>Title Z-A</option>
                                </select>
                                <div class="view-toggle">
                                    <button type="button" class="active" data-lesson-view="Table">Table</button>
                                    <button type="button" data-lesson-view="Cards">Cards</button>
                                </div>
                            </div>

                            <div class="table-wrap" id="lessonTableWrap">
                                <table class="prototype-lesson-table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Order</th>
                                            <th>Lesson Code</th>
                                            <th>Lesson</th>
                                            <th>Level</th>
                                            <th>File Type</th>
                                            <th>Duration</th>
                                            <th>Status</th>
                                            <th>Updated</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody id="lessonTableBody"></tbody>
                                </table>
                            </div>
                            <div class="lesson-card-grid" id="lessonCardGrid" hidden></div>
                            <div class="prototype-empty" id="lessonEmptyState" hidden>
                                <strong>No lessons match your current search or filters.</strong>
                                <button type="button" id="lessonClearFilters">Clear Filters</button>
                            </div>
                        </article>
                    </main>
                </div>
            </section>

            <section class="page-content dashboard-section packages-page" data-section="packages">
                <div class="section-intro">
                    <div>
                        <h2>Website Services &amp; Pricing</h2>
                        <p>Control each country’s lesson packages, names, and website prices.</p>
                    </div>
                    <div class="section-actions">
                        <button class="secondary-button" type="button" id="manageServiceCountries">Manage Service Countries</button>
                        <button class="primary-button" type="button" id="addPackageButton">+ Add Package</button>
                    </div>
                </div>

                <div class="pricing-warning">
                    <i data-lucide="users"></i>
                    <div>
                        <strong>Confidential pricing</strong>
                        <p>Only authorized Admin and Finance roles can view or edit this section. Teachers cannot see package prices.</p>
                    </div>
                </div>

                <div class="pricing-source-note">
                    <div>
                        <strong>China pricing matched to your live website</strong>
                        <p>Adults: 50-minute lessons · Kids: 25-minute lessons · Prices shown in USD.</p>
                    </div>
                    <a href="https://china.speakryt.com/pricing/" target="_blank" rel="noreferrer">View China pricing page ↗</a>
                </div>

                <section class="pricing-kpis" aria-label="Package pricing summary">
                    <article>
                        <span>Published Packages</span>
                        <strong>6</strong>
                        <small>China website plans</small>
                    </article>
                    <article>
                        <span>Service Markets</span>
                        <strong>6</strong>
                        <small>1 priced · 5 pending</small>
                    </article>
                    <article>
                        <span>Pricing Currency</span>
                        <strong>USD</strong>
                        <small>Website display default</small>
                    </article>
                </section>

                <section class="market-cards" id="marketCards" aria-label="Service country pricing markets"></section>

                <article class="panel directory-panel">
                    <div class="directory-tools">
                        <div>
                            <h3 id="packageTableTitle">All Country Packages</h3>
                            <p>Select a country, then click Edit beside any package to change its name or price.</p>
                        </div>
                        <label class="country-filter">
                            <span>Country</span>
                            <select id="packageMarketFilter" aria-label="Filter packages by market"></select>
                        </label>
                    </div>

                    <div class="table-wrap package-table-wrap">
                        <table class="package-pricing-table">
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Student Type</th>
                                    <th>Class Time</th>
                                    <th>Package Name</th>
                                    <th>Lessons</th>
                                    <th>Website Price</th>
                                    <th>Visibility</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="packageTableBody"></tbody>
                        </table>
                    </div>
                </article>
            </section>

            <section class="page-content dashboard-section finance-module" data-section="finance">
                <section class="finance-hero">
                    <div>
                        <p class="eyebrow">FINANCIAL OPERATIONS · PROTOTYPE</p>
                        <h2 id="financePageHeading">Overview</h2>
                        <p>Monitor payments, lesson credits, settlements, refunds, and financial records.</p>
                    </div>
                    <div class="finance-hero-actions">
                        <button class="secondary-button" type="button" data-finance-modal="rates">Exchange Rates</button>
                        <button class="secondary-button" type="button" data-finance-modal="settings">Finance Settings</button>
                        <button class="primary-button" type="button" data-finance-modal="manual">+ Record Manual Payment</button>
                    </div>
                </section>
                <div class="finance-page-tabs" id="financePageTabs" role="tablist" aria-label="Finance pages"></div>
                <div id="financePageContent"></div>
            </section>

            <section class="page-content dashboard-section approval-requests-page" data-section="approvals">
                <div id="adminApprovalRequests"></div>
            </section>

            <section class="page-content dashboard-section communication-page" data-section="inbox">
                <div id="communicationWorkspace"></div>
            </section>

            <section class="page-content dashboard-section marketing-module" data-section="marketing">
                <div id="marketingWorkspace"></div>
            </section>

            <section class="page-content dashboard-section user-management-page" data-section="users">
                <div class="section-intro">
                    <div>
                        <h2>Access Control</h2>
                        <p>Create users, revoke access, assign roles, and control which information each role can use.</p>
                    </div>
                    <button class="primary-button" type="button" id="createUserButton">+ Create User</button>
                </div>
                <div class="security-banner">
                    <div class="security-icon">
                        <i data-lucide="users"></i>
                    </div>
                    <div>
                        <strong>You are the only Admin</strong>
                        <p>Only the Admin can create accounts, change permissions, or restore revoked access.</p>
                    </div>
                    <span class="status-pill positive">Protected</span>
                </div>
                <div class="tabs user-management-tabs" id="userManagementTabs" role="tablist" aria-label="User management tabs"></div>
                <div class="success-notice user-success-notice" id="userManagementNotice" hidden>
                    <span></span>
                    <button type="button" aria-label="Dismiss notice">×</button>
                </div>
                <div id="userManagementContent"></div>
            </section>

            <section class="page-content dashboard-section policy-manual-page" data-section="policies">
                <div id="companyPolicyManual"></div>
            </section>

            <section class="page-content dashboard-section admin-security-page" data-section="settings">
                <div id="adminSecuritySettings"></div>
            </section>

            <section class="page-content dashboard-section" data-section="placeholder">
                <div class="prototype-panel">
                    <p class="eyebrow">NEXT STEP</p>
                    <h2 id="placeholderTitle">Module placeholder</h2>
                    <p>We will rebuild this section exactly from your original dashboard in the next pass.</p>
                </div>
            </section>
        </main>
    </div>

    <div class="teacher-app-shell" id="teacherDashboardApp" hidden>
        <aside class="teacher-sidebar" id="teacherSidebar">
            <div class="brand teacher-brand">
                <img class="brand-logo" src="{{ asset('images/vlace-logo.png') }}" alt="VLACE logo">
                <div>
                    <strong>VLACE</strong>
                    <span>Teacher Portal</span>
                </div>
            </div>

            <nav aria-label="Teacher navigation">
                <button class="active" data-teacher-portal-target="teacher-schedule"><i data-lucide="calendar-days"></i><span>My Schedule</span></button>
                <button data-teacher-portal-target="teacher-students"><i data-lucide="graduation-cap"></i><span>My Classes</span></button>
                <button data-teacher-portal-target="teacher-payroll"><i data-lucide="wallet"></i><span>Payroll</span></button>
                <button data-teacher-portal-target="teacher-feedback"><i data-lucide="message-square-text"></i><span>Feedback</span></button>
                <button data-teacher-portal-target="teacher-documents"><i data-lucide="folder-check"></i><span>Documents</span></button>
                <button data-teacher-portal-target="teacher-policies"><i data-lucide="file-check-2"></i><span>Policies</span></button>
                <button data-teacher-portal-target="teacher-profile"><i data-lucide="user-round"></i><span>Profile</span></button>
            </nav>

            <button class="sidebar-logout teacher-logout-button" id="teacherPortalLogoutButton">
                <i data-lucide="log-out"></i>
                <span>Log Out</span>
            </button>
        </aside>

        <main class="teacher-main">
            <header class="teacher-topbar">
                <button class="mobile-menu" id="teacherMobileMenu" aria-label="Open teacher menu">
                    <i data-lucide="menu"></i>
                </button>
                <div>
                    <p class="eyebrow">VLACE TEACHER PORTAL</p>
                    <h1 id="teacherPortalTitle">Teacher Dashboard</h1>
                </div>
                <button class="admin-user teacher-user-card" data-teacher-portal-target="teacher-profile" aria-label="Open teacher profile">
                    <div class="dashboard-user-photo">
                        <span class="dashboard-face teacher-face teacher-photo-0" id="teacherPortalPhoto" role="img" aria-label="Maria Santos mock profile photo"></span>
                        <span class="dashboard-user-initials" id="teacherPortalInitials">MS</span>
                        <span class="dashboard-user-online"></span>
                    </div>
                    <div class="dashboard-user-copy">
                        <small>Welcome back!</small>
                        <strong id="teacherPortalName">Maria Santos</strong>
                        <span>Teacher</span>
                    </div>
                    <span class="dashboard-user-chevron">›</span>
                </button>
            </header>

            <section class="teacher-portal-content" id="teacherPortalContent"></section>
        </main>
    </div>

    <div class="teacher-app-shell manager-app-shell" id="managerDashboardApp" hidden>
        <aside class="teacher-sidebar manager-sidebar" id="managerSidebar">
            <div class="brand teacher-brand">
                <img class="brand-logo" src="{{ asset('images/vlace-logo.png') }}" alt="VLACE logo">
                <div>
                    <strong>VLACE</strong>
                    <span>Manager Portal</span>
                </div>
            </div>

            <nav aria-label="Manager navigation">
                <button class="active" data-manager-portal-target="manager-teachers"><i data-lucide="layout-dashboard"></i><span>Overview</span></button>
                <button data-manager-portal-target="manager-schedule"><i data-lucide="calendar-days"></i><span>Schedule</span></button>
                <button data-manager-portal-target="manager-overview"><i data-lucide="users-round"></i><span>Teachers</span></button>
                <button data-manager-portal-target="manager-students"><i data-lucide="graduation-cap"></i><span>Students</span></button>
                <button data-manager-portal-target="manager-feedback"><i data-lucide="message-square-text"></i><span>Feedback</span></button>
                <button data-manager-portal-target="manager-communication"><i data-lucide="inbox"></i><span>Communication</span></button>
                <button data-manager-portal-target="manager-payroll"><i data-lucide="wallet"></i><span>Payroll Review</span></button>
                <button data-manager-portal-target="manager-documents"><i data-lucide="folder-check"></i><span>Documents</span></button>
                <button data-manager-portal-target="manager-policies"><i data-lucide="file-check-2"></i><span>Policies</span></button>
                <button data-manager-portal-target="manager-profile"><i data-lucide="user-round"></i><span>Profile</span></button>
            </nav>

            <button class="sidebar-logout manager-logout-button" id="managerPortalLogoutButton">
                <i data-lucide="log-out"></i>
                <span>Log Out</span>
            </button>
        </aside>

        <main class="teacher-main manager-main">
            <header class="teacher-topbar manager-topbar">
                <button class="mobile-menu" id="managerMobileMenu" aria-label="Open manager menu">
                    <i data-lucide="menu"></i>
                </button>
                <div>
                    <p class="eyebrow">VLACE MANAGER PORTAL</p>
                    <h1 id="managerPortalTitle">Manager Dashboard</h1>
                </div>
                <button class="admin-user teacher-user-card" data-manager-portal-target="manager-profile" aria-label="Open manager profile">
                    <div class="dashboard-user-photo">
                        <span class="dashboard-face staff-face staff-face-1" id="managerPortalPhoto" role="img" aria-label="Angela Reyes mock profile photo"></span>
                        <span class="dashboard-user-initials" id="managerPortalInitials">AR</span>
                        <span class="dashboard-user-online"></span>
                    </div>
                    <div class="dashboard-user-copy">
                        <small>Welcome back!</small>
                        <strong id="managerPortalName">Angela Reyes</strong>
                        <span>Manager</span>
                    </div>
                    <span class="dashboard-user-chevron">›</span>
                </button>
            </header>

            <section class="teacher-portal-content manager-portal-content" id="managerPortalContent"></section>
        </main>
    </div>

    <div class="modal-backdrop" id="referralModal" hidden>
        <div class="modal referral-entry-modal" role="dialog" aria-modal="true" aria-labelledby="referralModalTitle">
            <div class="modal-head">
                <div>
                    <p>STUDENT REFERRAL</p>
                    <h3 id="referralModalTitle">Add Referral</h3>
                </div>
                <button type="button" id="referralModalClose" aria-label="Close referral form">×</button>
            </div>

            <div class="referral-modal-note">
                <span><i data-lucide="gift"></i></span>
                <div>
                    <strong>Referral reward tracking</strong>
                    <p>Converted referrals can create bonus lessons and payment discounts after admin approval.</p>
                </div>
            </div>

            <form class="referral-entry-form" id="referralForm">
                <label class="full">Referred student name
                    <input type="text" id="referralStudentName" placeholder="Example: Emily Chen" required>
                </label>
                <label>Country
                    <select id="referralCountry">
                        <option>China</option>
                        <option>South Korea</option>
                        <option>Japan</option>
                        <option>UAE</option>
                        <option>Saudi Arabia</option>
                        <option>Dubai</option>
                        <option>Israel</option>
                    </select>
                </label>
                <label>Package / stage
                    <select id="referralPackage">
                        <option>Trial</option>
                        <option>15 Lessons</option>
                        <option>30 Lessons</option>
                    </select>
                </label>
                <label>Status
                    <select id="referralStatus">
                        <option>Pending Trial</option>
                        <option>Converted</option>
                        <option>Not Converted</option>
                    </select>
                </label>
                <label>Referral discount %
                    <input type="number" min="0" max="100" step="0.01" id="referralDiscount" value="0">
                </label>
                <label>Notes
                    <input type="text" id="referralNotes" placeholder="Short internal note">
                </label>
            </form>

            <div class="modal-actions">
                <button class="secondary-button" type="button" id="referralCancel">Cancel</button>
                <button class="primary-button" type="submit" form="referralForm">Save Referral</button>
            </div>
        </div>
    </div>

    <div class="modal-backdrop" id="scheduleModal" hidden>
        <div class="modal referral-entry-modal schedule-entry-modal" role="dialog" aria-modal="true" aria-labelledby="scheduleModalTitle">
            <div class="modal-head">
                <div>
                    <p>STUDENT SCHEDULE</p>
                    <h3 id="scheduleModalTitle">Edit Schedule</h3>
                </div>
                <button type="button" id="scheduleModalClose" aria-label="Close schedule form">×</button>
            </div>

            <div class="referral-modal-note schedule-modal-note">
                <span><i data-lucide="calendar-clock"></i></span>
                <div>
                    <strong>Schedule changes create lesson records</strong>
                    <p>Saved classes will automatically appear in the student Lessons tab for attendance, recording, and feedback tracking.</p>
                </div>
            </div>

            <form class="referral-entry-form schedule-entry-form" id="scheduleForm">
                <label class="full">Preferred days
                    <input type="text" id="schedulePreferredDays" placeholder="Example: Wednesday & Sunday" required>
                </label>
                <label>Preferred time
                    <input type="time" id="schedulePreferredTime" required>
                </label>
                <label>Duration
                    <select id="scheduleDuration">
                        <option>25 minutes</option>
                        <option>50 minutes</option>
                    </select>
                </label>
                <label>Frequency
                    <input type="text" id="scheduleFrequency" placeholder="Example: 2x weekly" required>
                </label>
                <label>Meeting platform
                    <select id="schedulePlatform">
                        <option>Voov</option>
                        <option>Google Meet</option>
                        <option>Microsoft Teams</option>
                        <option>Zoom</option>
                    </select>
                </label>
                <label class="full">Schedule note
                    <input type="text" id="scheduleNote" placeholder="Optional internal scheduling note">
                </label>
            </form>

            <div class="modal-actions">
                <button class="secondary-button" type="button" id="scheduleCancel">Cancel</button>
                <button class="primary-button" type="submit" form="scheduleForm">Save Schedule</button>
            </div>
        </div>
    </div>

    <div class="modal-backdrop" id="classScheduleModal" hidden>
        <div class="modal referral-entry-modal schedule-entry-modal" role="dialog" aria-modal="true" aria-labelledby="classScheduleTitle">
            <div class="modal-head">
                <div>
                    <p>SCHEDULED CLASS</p>
                    <h3 id="classScheduleTitle">Add Class</h3>
                </div>
                <button type="button" id="classScheduleClose" aria-label="Close add class form">×</button>
            </div>

            <div class="referral-modal-note schedule-modal-note">
                <span><i data-lucide="calendar-plus"></i></span>
                <div>
                    <strong>Add a specific class to the student schedule</strong>
                    <p>This creates a scheduled class row for the student. A lesson record can be generated from this schedule later.</p>
                </div>
            </div>

            <form class="referral-entry-form schedule-entry-form" id="classScheduleForm">
                <label>Date
                    <input type="date" id="classScheduleDate" required>
                </label>
                <label>Time
                    <input type="time" id="classScheduleTime" required>
                </label>
                <label>Teacher country
                    <select id="classScheduleCountry">
                        <option>China</option>
                        <option>South Korea</option>
                        <option>Japan</option>
                        <option>UAE</option>
                        <option>Saudi Arabia</option>
                        <option>Dubai</option>
                        <option>Israel</option>
                    </select>
                </label>
                <label>Teacher
                    <select id="classScheduleTeacher"></select>
                    <small id="classTeacherAvailabilityHint">Only teachers available for this country, date, and time are shown.</small>
                </label>
                <label>Duration
                    <select id="classScheduleDuration">
                        <option>25 minutes</option>
                        <option>50 minutes</option>
                    </select>
                </label>
                <label>Category
                    <select id="classScheduleCategory"></select>
                </label>
                <label>Program
                    <select id="classScheduleProgram"></select>
                </label>
                <label>Module
                    <select id="classScheduleModule"></select>
                </label>
                <label class="full">Lesson topic
                    <select id="classScheduleTopic"></select>
                </label>
            </form>

            <div class="modal-actions">
                <button class="secondary-button" type="button" id="classScheduleCancel">Cancel</button>
                <button class="primary-button" type="submit" form="classScheduleForm">Add to Schedule</button>
            </div>
        </div>
    </div>

    <div class="modal-backdrop" id="teacherSlotModal" hidden>
        <div class="modal referral-entry-modal schedule-entry-modal teacher-slot-modal" role="dialog" aria-modal="true" aria-labelledby="teacherSlotTitle">
            <div class="modal-head">
                <div>
                    <p>TEACHER WEEKLY SCHEDULE</p>
                    <h3 id="teacherSlotTitle">Manage Schedule Slot</h3>
                </div>
                <button type="button" id="teacherSlotClose" aria-label="Close teacher slot form">×</button>
            </div>

            <div class="referral-modal-note schedule-modal-note">
                <span><i data-lucide="calendar-clock"></i></span>
                <div>
                    <strong id="teacherSlotSummary">Monday · 7:00 AM - 7:30 AM</strong>
                    <p id="teacherSlotGuidance">Assign, cancel, or transfer a class for this teacher schedule slot.</p>
                </div>
            </div>

            <form class="referral-entry-form schedule-entry-form" id="teacherSlotForm">
                <label>Action
                    <select id="teacherSlotAction">
                        <option value="assign">Assign class</option>
                        <option value="cancel">Cancel class</option>
                        <option value="transfer">Transfer class</option>
                    </select>
                </label>
                <label>Student country
                    <select id="teacherSlotStudentCountry"></select>
                </label>
                <label>Primary student
                    <select id="teacherSlotStudent"></select>
                </label>
                <div class="teacher-slot-students full" id="teacherSlotStudentsWrap">
                    <div>
                        <strong>Additional students</strong>
                        <small>Add more students when this lesson should be assigned to a group.</small>
                    </div>
                    <div class="teacher-slot-student-rows" id="teacherSlotStudentRows"></div>
                    <button class="secondary-button" type="button" id="teacherSlotAddStudent">+ Add Student</button>
                </div>
                <label>Teacher
                    <select id="teacherSlotTeacher"></select>
                    <small id="teacherSlotTeacherHint">Only available teachers for the same country and time are shown.</small>
                </label>
                <label>Duration
                    <select id="teacherSlotDuration">
                        <option>25 minutes</option>
                        <option>50 minutes</option>
                    </select>
                </label>
                <label>Category
                    <select id="teacherSlotCategory"></select>
                </label>
                <label>Program
                    <select id="teacherSlotProgram"></select>
                </label>
                <label>Module
                    <select id="teacherSlotModule"></select>
                </label>
                <label class="full">Lesson to assign
                    <select id="teacherSlotTopic"></select>
                </label>
                <label class="full">Internal note
                    <input id="teacherSlotNote" placeholder="Optional reason or scheduling note">
                </label>
            </form>

            <div class="teacher-slot-current" id="teacherSlotCurrent" hidden>
                <span>Current class</span>
                <strong id="teacherSlotCurrentClass">Liam Chen · Free Conversation</strong>
                <small id="teacherSlotCurrentMeta">Voov · From teacher profile</small>
            </div>

            <div class="modal-actions teacher-slot-actions">
                <button class="secondary-button" type="button" id="teacherSlotCancel">Close</button>
                <button class="danger-button" type="button" id="teacherSlotCancelClass">Cancel Class</button>
                <button class="secondary-button" type="button" id="teacherSlotTransferClass">Transfer Class</button>
                <button class="primary-button" type="submit" form="teacherSlotForm" id="teacherSlotSave">Assign Class</button>
            </div>
        </div>
    </div>

    <div class="profile-drawer-overlay" id="studentEditOverlay" hidden>
        <aside id="student-profile-editor" class="student-edit-drawer" role="dialog" aria-modal="true" aria-labelledby="student-edit-title">
            <header class="student-edit-head">
                <div>
                    <span>ADMIN &amp; MANAGER</span>
                    <h2 id="student-edit-title">Edit Student Profile</h2>
                    <p id="studentEditMeta">Liam Chen · S1-001</p>
                </div>
                <button type="button" id="studentEditClose" aria-label="Close profile editor">×</button>
            </header>

            <form class="student-edit-body" id="studentEditForm">
                <div class="drawer-info-banner">
                    <b>Profile information only</b>
                    <span>Sensitive contacts, payments, and prices are managed separately and are not shown here.</span>
                </div>

                <section class="drawer-form-section">
                    <div class="drawer-section-title">
                        <span>1</span>
                        <div>
                            <h3>Personal Information</h3>
                            <p>Basic details used throughout the dashboard.</p>
                        </div>
                    </div>
                    <div class="drawer-form-grid">
                        <label class="full">Student name
                            <input id="studentEditName" required>
                        </label>
                        <label>Student age
                            <input id="studentEditAge" type="number" min="1" max="100" placeholder="e.g. 9">
                        </label>
                        <label>Country / Market
                            <select id="studentEditCountry">
                                <option>China</option>
                                <option>South Korea</option>
                                <option>Japan</option>
                                <option>UAE</option>
                                <option>Saudi Arabia</option>
                                <option>Dubai</option>
                                <option>Israel</option>
                            </select>
                        </label>
                        <label>Student type
                            <select id="studentEditType">
                                <option>Kid</option>
                                <option>Teenager</option>
                                <option>Adult</option>
                            </select>
                        </label>
                        <label>English level
                            <select id="studentEditLevel">
                                <option>Starter</option>
                                <option>Pre-A1</option>
                                <option>A1</option>
                                <option>A2</option>
                                <option>B1</option>
                                <option>B2</option>
                                <option>C1</option>
                            </select>
                        </label>
                        <label>Account status
                            <select id="studentEditStatus">
                                <option>Active</option>
                                <option>On hold</option>
                                <option>Inactive</option>
                            </select>
                        </label>
                    </div>
                </section>

                <section class="drawer-form-section">
                    <div class="drawer-section-title">
                        <span>2</span>
                        <div>
                            <h3>Learning Assignment</h3>
                            <p>Update the teacher and lesson package assignment.</p>
                        </div>
                    </div>
                    <div class="drawer-form-grid">
                        <label class="full">Assigned teacher
                            <select id="studentEditTeacher">
                                <option>Maria Santos</option>
                                <option>David Lee</option>
                                <option>Emma Wilson</option>
                                <option>James Smith</option>
                            </select>
                            <small>Teachers should match the student’s country and time zone.</small>
                        </label>
                        <label>Package lessons
                            <input id="studentEditPackage" type="number" min="1">
                        </label>
                        <label>Lessons already used
                            <input id="studentEditUsed" readonly>
                            <small>Adjusted through lesson records only.</small>
                        </label>
                    </div>
                </section>

                <section class="drawer-form-section">
                    <div class="drawer-section-title">
                        <span>3</span>
                        <div>
                            <h3>Schedule Preference</h3>
                            <p>Preferred day and Philippine-time schedule.</p>
                        </div>
                    </div>
                    <div class="drawer-form-grid">
                        <label>Preferred day
                            <input id="studentEditDay" placeholder="e.g. Wednesday & Sunday">
                        </label>
                        <label>Preferred time
                            <input id="studentEditTime" placeholder="e.g. 7:00 PM">
                        </label>
                    </div>
                </section>

                <div class="drawer-audit-note">
                    <i data-lucide="clipboard-list"></i>
                    <div>
                        <strong>Changes are recorded automatically</strong>
                        <p>Saving records the date, Philippine time, edited fields, and the staff member in Profile Activity &amp; Notes.</p>
                    </div>
                </div>
            </form>

            <footer class="student-edit-footer">
                <button class="secondary-button" type="button" id="studentEditCancel">Cancel</button>
                <button class="primary-button" type="submit" form="studentEditForm" id="studentEditSave">Save Profile Changes</button>
            </footer>
        </aside>
    </div>

    <div class="profile-drawer-overlay" id="studentPaymentOverlay" hidden>
        <aside class="student-edit-drawer record-drawer" role="dialog" aria-modal="true" aria-labelledby="student-payment-record-title">
            <header class="student-edit-head">
                <div>
                    <span>ADMIN &amp; AUTHORIZED STAFF</span>
                    <h2 id="student-payment-record-title">Add Payment Record</h2>
                    <p id="studentPaymentRecordMeta">Liam Chen · S1-001</p>
                </div>
                <button type="button" id="studentPaymentClose" aria-label="Close payment record drawer">×</button>
            </header>

            <form class="student-edit-body" id="studentPaymentForm">
                <div class="record-context">
                    <div class="record-context-avatar student-face student-face-0" id="studentPaymentRecordAvatar" role="img" aria-label="Liam Chen mock profile photo"></div>
                    <div>
                        <span>ADDING TO</span>
                        <strong id="studentPaymentRecordName">Liam Chen</strong>
                        <small id="studentPaymentRecordContext">Payment History · China</small>
                    </div>
                </div>

                <div class="drawer-info-banner">
                    <b>Record a verified payment</b>
                    <span>Enter transaction details only. Never enter card numbers, bank credentials, passwords, or payment account login details.</span>
                </div>

                <section class="drawer-form-section">
                    <div class="drawer-section-title">
                        <span>1</span>
                        <div>
                            <h3>Payment Details</h3>
                            <p>The amount received, discounts, and package purchased.</p>
                        </div>
                    </div>
                    <div class="drawer-form-grid">
                        <label>Payment date
                            <input type="date" id="manualPaymentDate" value="2026-08-02" required>
                        </label>
                        <label>Package
                            <select id="manualPaymentPackage">
                                <option>10 Lessons</option>
                                <option selected>15 Lessons</option>
                                <option>20 Lessons</option>
                                <option>30 Lessons</option>
                                <option>Custom Package</option>
                            </select>
                        </label>
                        <label>Original amount
                            <input type="number" min="0" step="0.01" id="manualPaymentAmount" placeholder="0.00" required>
                        </label>
                        <label>Currency
                            <select id="manualPaymentCurrency">
                                <option selected>USD</option>
                                <option>CNY</option>
                                <option>JPY</option>
                                <option>KRW</option>
                                <option>AED</option>
                                <option>SAR</option>
                                <option>ILS</option>
                                <option>PHP</option>
                            </select>
                        </label>
                        <label>Discount %
                            <input type="number" min="0" max="100" step="0.01" id="manualPaymentDiscount" value="0">
                        </label>
                        <label>Referral discount %
                            <input type="number" min="0" max="100" step="0.01" id="manualPaymentReferralDiscount" value="0">
                        </label>
                        <label class="full">Net amount paid
                            <input id="manualPaymentNet" readonly value="$0.00">
                            <small>Calculated from original amount minus discount and referral discount.</small>
                        </label>
                    </div>
                </section>

                <section class="drawer-form-section">
                    <div class="drawer-section-title">
                        <span>2</span>
                        <div>
                            <h3>Transaction Verification</h3>
                            <p>Identify how the payment was processed.</p>
                        </div>
                    </div>
                    <div class="drawer-form-grid">
                        <label>Payment processor
                            <select id="manualPaymentProcessor">
                                <option>PayPal</option>
                                <option>NihaoPay · Alipay</option>
                                <option selected>Manual Payment</option>
                                <option>Bank Transfer</option>
                                <option>Cash Payment</option>
                            </select>
                        </label>
                        <label>Payment status
                            <select id="manualPaymentStatus">
                                <option selected>Paid</option>
                                <option>Pending</option>
                                <option>Failed</option>
                                <option>Refunded</option>
                            </select>
                        </label>
                        <label class="full">Transaction / reference number
                            <input id="manualPaymentReference" placeholder="Enter processor reference" required>
                        </label>
                    </div>
                </section>

                <section class="drawer-form-section">
                    <div class="drawer-section-title">
                        <span>3</span>
                        <div>
                            <h3>Receipt Documentation</h3>
                            <p>Optional proof-of-payment label for this prototype.</p>
                        </div>
                    </div>
                    <div class="drawer-form-grid">
                        <label class="full">Receipt file name
                            <input id="manualPaymentReceipt" placeholder="receipt-liam-august.pdf">
                            <small>Mock upload only. No file is sent anywhere.</small>
                        </label>
                    </div>
                </section>
            </form>

            <footer class="student-edit-footer">
                <button class="secondary-button" type="button" id="studentPaymentCancel">Cancel</button>
                <button class="primary-button" type="submit" form="studentPaymentForm" id="studentPaymentSave">Save Payment Record</button>
            </footer>
        </aside>
    </div>

    <div class="profile-drawer-overlay" id="studentContactOverlay" hidden>
        <aside class="student-edit-drawer record-drawer contact-drawer" role="dialog" aria-modal="true" aria-labelledby="student-contact-edit-title">
            <header class="student-edit-head restricted-edit-head">
                <div>
                    <span>ADMIN · RESTRICTED INFORMATION</span>
                    <h2 id="student-contact-edit-title">Edit Contact Details</h2>
                    <p id="studentContactRecordMeta">Liam Chen · S1-001</p>
                </div>
                <button type="button" id="studentContactClose" aria-label="Close contact details drawer">×</button>
            </header>

            <form class="student-edit-body" id="studentContactForm">
                <div class="drawer-warning-banner">
                    <i data-lucide="shield-alert"></i>
                    <div>
                        <b>Sensitive contact information</b>
                        <span>Visible only to authorized admin roles. Changes should be made from verified parent or guardian instructions.</span>
                    </div>
                </div>

                <section class="drawer-form-section">
                    <div class="drawer-section-title">
                        <span>1</span>
                        <div>
                            <h3>Parent / Guardian Contact</h3>
                            <p>Primary contact channels for billing, schedule reminders, and emergency updates.</p>
                        </div>
                    </div>
                    <div class="drawer-form-grid">
                        <label>WeChat Number / ID
                            <input id="studentContactWechat" placeholder="wechat_id">
                        </label>
                        <label>WhatsApp Number
                            <input id="studentContactWhatsapp" placeholder="+86 138 0013 8000">
                        </label>
                        <label class="full">Email Address
                            <input type="email" id="studentContactEmail" placeholder="guardian@example.com">
                        </label>
                        <label>Guardian
                            <input id="studentContactGuardian" placeholder="Guardian name and relationship">
                        </label>
                        <label>Customer Phone Number
                            <input id="studentContactPhone" placeholder="+86 138 0013 8000">
                        </label>
                    </div>
                </section>

                <section class="drawer-form-section">
                    <div class="drawer-section-title">
                        <span>2</span>
                        <div>
                            <h3>Change Reason</h3>
                            <p>This note is saved to internal Profile Activity &amp; Notes.</p>
                        </div>
                    </div>
                    <div class="drawer-form-grid">
                        <label class="full">Internal note
                            <textarea id="studentContactReason" rows="3" placeholder="Example: Parent requested updated WhatsApp number."></textarea>
                        </label>
                    </div>
                </section>

                <div class="drawer-audit-note">
                    <i data-lucide="clipboard-check"></i>
                    <div>
                        <strong>Audit trail required</strong>
                        <p>Saving updates the restricted contact box and records the change in internal activity notes.</p>
                    </div>
                </div>
            </form>

            <footer class="student-edit-footer">
                <button class="secondary-button" type="button" id="studentContactCancel">Cancel</button>
                <button class="primary-button" type="submit" form="studentContactForm" id="studentContactSave">Save Contact Details</button>
            </footer>
        </aside>
    </div>

    <div class="profile-drawer-overlay" id="teacherLinksOverlay" hidden>
        <aside class="student-edit-drawer record-drawer teacher-links-drawer" role="dialog" aria-modal="true" aria-labelledby="teacher-links-edit-title">
            <header class="student-edit-head">
                <div>
                    <span>ADMIN · TEACHER PROFILE</span>
                    <h2 id="teacher-links-edit-title">Edit Meeting Links</h2>
                    <p id="teacherLinksRecordMeta">Maria Santos · T1-001</p>
                </div>
                <button type="button" id="teacherLinksClose" aria-label="Close meeting links drawer">×</button>
            </header>

            <form class="student-edit-body" id="teacherLinksForm">
                <div class="drawer-info-banner">
                    <b>Classroom access source</b>
                    <span>These meeting URLs or IDs are stored on the teacher profile and automatically populate student classroom access. Teachers do not edit this admin-only setup.</span>
                </div>

                <section class="drawer-form-section">
                    <div class="drawer-section-title">
                        <span>1</span>
                        <div>
                            <h3>Meeting Platforms</h3>
                            <p>Enter the permanent meeting link or meeting ID for each platform this teacher uses.</p>
                        </div>
                    </div>
                    <div class="drawer-form-grid">
                        <label>Voov Meeting ID
                            <input id="teacherLinksVoov" placeholder="voov-8831-CHN">
                        </label>
                        <label>Google Meet Link
                            <input id="teacherLinksMeet" placeholder="meet.google.com/abc-defg-hij">
                        </label>
                        <label>Microsoft Teams Link / ID
                            <input id="teacherLinksTeams" placeholder="teams.teacher.vlace">
                        </label>
                        <label>Zoom Meeting Link / ID
                            <input id="teacherLinksZoom" placeholder="zoom.us/j/88310022">
                        </label>
                    </div>
                </section>

                <section class="drawer-form-section">
                    <div class="drawer-section-title">
                        <span>2</span>
                        <div>
                            <h3>Admin Note</h3>
                            <p>Optional context for why these links were updated.</p>
                        </div>
                    </div>
                    <div class="drawer-form-grid">
                        <label class="full">Internal note
                            <textarea id="teacherLinksNote" rows="3" placeholder="Example: Updated Voov ID after teacher changed account."></textarea>
                        </label>
                    </div>
                </section>

                <div class="drawer-audit-note">
                    <i data-lucide="clipboard-check"></i>
                    <div>
                        <strong>Used by student classroom access</strong>
                        <p>After saving, the meeting link status and teacher profile details update immediately in this prototype.</p>
                    </div>
                </div>
            </form>

            <footer class="student-edit-footer">
                <button class="secondary-button" type="button" id="teacherLinksCancel">Cancel</button>
                <button class="primary-button" type="submit" form="teacherLinksForm" id="teacherLinksSave">Save Meeting Links</button>
            </footer>
        </aside>
    </div>

    <div class="profile-drawer-overlay" id="staffScheduleOverlay" hidden>
        <aside class="student-edit-drawer staff-schedule-drawer" role="dialog" aria-modal="true" aria-labelledby="staff-schedule-title">
            <header class="student-edit-head">
                <div>
                    <span>ADMIN &amp; MANAGER · STAFF DIRECTORY</span>
                    <h2 id="staff-schedule-title">Edit Work Schedule</h2>
                    <p id="staffScheduleSubtitle">Update Angela Reyes's regular non-teaching hours.</p>
                </div>
                <button type="button" id="staffScheduleClose" aria-label="Close schedule editor">×</button>
            </header>

            <form class="student-edit-body" id="staffScheduleForm">
                <div class="schedule-staff-card">
                    <span class="staff-face staff-face-1" id="staffScheduleAvatar" role="img" aria-label="Angela Reyes mock profile photo"></span>
                    <div>
                        <small>STAFF MEMBER</small>
                        <strong id="staffScheduleName">Angela Reyes</strong>
                        <p id="staffScheduleMeta">Manager · Operations</p>
                    </div>
                    <b>Philippine Time</b>
                </div>

                <div class="drawer-info-banner">
                    <b>Schedule time zone: Asia/Manila (PHT)</b>
                    <span>All work hours and attendance records will use Philippine time.</span>
                </div>

                <section class="drawer-form-section">
                    <div class="drawer-section-title">
                        <span>1</span>
                        <div>
                            <h3>Working Days</h3>
                            <p>Select every regular workday.</p>
                        </div>
                    </div>
                    <div class="schedule-day-list" id="staffScheduleDays">
                        <button type="button" data-staff-schedule-day="Monday"><i></i><span>Monday</span><small>Day off</small></button>
                        <button type="button" data-staff-schedule-day="Tuesday"><i></i><span>Tuesday</span><small>Day off</small></button>
                        <button type="button" data-staff-schedule-day="Wednesday"><i></i><span>Wednesday</span><small>Day off</small></button>
                        <button type="button" data-staff-schedule-day="Thursday"><i></i><span>Thursday</span><small>Day off</small></button>
                        <button type="button" data-staff-schedule-day="Friday"><i></i><span>Friday</span><small>Day off</small></button>
                        <button type="button" data-staff-schedule-day="Saturday"><i></i><span>Saturday</span><small>Day off</small></button>
                        <button type="button" data-staff-schedule-day="Sunday"><i></i><span>Sunday</span><small>Day off</small></button>
                    </div>
                </section>

                <section class="drawer-form-section">
                    <div class="drawer-section-title">
                        <span>2</span>
                        <div>
                            <h3>Regular Work Hours</h3>
                            <p>Applied to all selected working days.</p>
                        </div>
                    </div>
                    <div class="drawer-form-grid">
                        <label>Start time
                            <input type="time" id="staffScheduleStart" value="09:00">
                        </label>
                        <label>End time
                            <input type="time" id="staffScheduleEnd" value="18:00">
                        </label>
                    </div>
                    <p class="schedule-error" id="staffScheduleError" hidden>End time must be later than the start time.</p>
                    <label class="schedule-switch">
                        <input type="checkbox" id="staffScheduleBreakEnabled" checked>
                        <span>
                            <strong>Include unpaid meal break</strong>
                            <small>Deduct this break from approved work hours.</small>
                        </span>
                    </label>
                    <div class="drawer-form-grid schedule-break-grid" id="staffScheduleBreakGrid">
                        <label>Break starts
                            <input type="time" id="staffScheduleBreakStart" value="12:00">
                        </label>
                        <label>Break duration
                            <select id="staffScheduleBreakDuration">
                                <option value="30">30 minutes</option>
                                <option value="45">45 minutes</option>
                                <option value="60" selected>1 hour</option>
                            </select>
                        </label>
                    </div>
                </section>

                <section class="drawer-form-section">
                    <div class="drawer-section-title">
                        <span>3</span>
                        <div>
                            <h3>Effective Date &amp; Note</h3>
                            <p>Keep a clear record of why the schedule changed.</p>
                        </div>
                    </div>
                    <div class="drawer-form-grid">
                        <label>Effective date
                            <input type="date" id="staffScheduleEffectiveDate" value="2026-08-03">
                        </label>
                        <label>Schedule status
                            <select id="staffScheduleStatus">
                                <option selected>Active</option>
                                <option>Temporary</option>
                                <option>On hold</option>
                            </select>
                        </label>
                        <label class="full">Change note
                            <textarea id="staffScheduleNote" rows="3" placeholder="Example: Approved shift adjustment for operations coverage."></textarea>
                        </label>
                    </div>
                </section>

                <div class="schedule-summary">
                    <span>NEW WEEKLY SCHEDULE</span>
                    <strong id="staffScheduleSummary">5 working days · 09:00-18:00</strong>
                    <small id="staffScheduleSummaryDetail">Includes an unpaid meal break · Philippine Time</small>
                </div>

                <div class="drawer-audit-note">
                    <i data-lucide="clipboard-check"></i>
                    <div>
                        <strong>This change will be recorded</strong>
                        <p>The activity log will include the old schedule, new schedule, date, Philippine time, and the person who updated it.</p>
                    </div>
                </div>
            </form>

            <footer class="student-edit-footer">
                <button class="secondary-button" type="button" id="staffScheduleCancel">Cancel</button>
                <button class="primary-button" type="submit" form="staffScheduleForm" id="staffScheduleSave">Save Work Schedule</button>
            </footer>
        </aside>
    </div>

    <div class="profile-drawer-overlay" id="staffProfileOverlay" hidden>
        <aside class="student-edit-drawer employee-contact-drawer" role="dialog" aria-modal="true" aria-labelledby="staffProfileDrawerTitle">
            <header class="student-edit-head">
                <div>
                    <span id="staffProfileDrawerKicker">ADMIN &amp; MANAGER · STAFF DIRECTORY</span>
                    <h2 id="staffProfileDrawerTitle">Edit Staff Profile</h2>
                    <p id="staffProfileDrawerSubtitle">Update employment assignment details.</p>
                </div>
                <button type="button" id="staffProfileClose" aria-label="Close staff profile editor">×</button>
            </header>

            <form class="student-edit-body" id="staffProfileForm">
                <div class="feedback-recipient-card">
                    <span class="staff-face staff-face-1" id="staffProfileInitials" role="img" aria-label="Angela Reyes mock profile photo"></span>
                    <div><small>STAFF MEMBER</small><strong id="staffProfileDrawerName">Angela Reyes</strong><p id="staffProfileDrawerMeta">ST-001 · Operations</p></div>
                </div>

                <section class="drawer-form-section">
                    <div class="drawer-section-title"><span>1</span><div><h3>Employment Details</h3><p>Core staff profile information used across the dashboard.</p></div></div>
                    <div class="drawer-form-grid">
                        <label>Staff ID<input id="staffProfileId" required></label>
                        <label>Full Name<input id="staffProfileName" required></label>
                        <label>Role
                            <select id="staffProfileRole">
                                <option>Manager</option>
                                <option>Customer Service / Staff</option>
                                <option>Operations Assistant</option>
                                <option>Finance Staff</option>
                            </select>
                        </label>
                        <label>Department<input id="staffProfileDepartment" required></label>
                        <label>Assigned Operation<input id="staffProfileMarket" required></label>
                        <label>Supervisor<input id="staffProfileSupervisor" required></label>
                        <label>Pay Rate<input id="staffProfilePay" required></label>
                        <label>Status
                            <select id="staffProfileStatus">
                                <option>Active</option>
                                <option>On leave</option>
                                <option>Inactive</option>
                            </select>
                        </label>
                    </div>
                </section>

                <section class="drawer-form-section">
                    <div class="drawer-section-title"><span>2</span><div><h3>Admin Note</h3><p>Optional explanation saved to Profile Activity &amp; Notes.</p></div></div>
                    <div class="drawer-form-grid">
                        <label class="full">Internal note<textarea id="staffProfileNote" rows="3" placeholder="Example: Updated department and supervisor after operations review."></textarea></label>
                    </div>
                </section>
            </form>

            <footer class="student-edit-footer">
                <button class="secondary-button" type="button" id="staffProfileCancel">Cancel</button>
                <button class="primary-button" type="submit" form="staffProfileForm" id="staffProfileSave">Save Staff Profile</button>
            </footer>
        </aside>
    </div>

    <div class="profile-drawer-overlay" id="staffContactOverlay" hidden>
        <aside class="student-edit-drawer employee-contact-drawer" role="dialog" aria-modal="true" aria-labelledby="staffContactDrawerTitle">
            <header class="student-edit-head">
                <div>
                    <span>ADMIN &amp; MANAGER · STAFF PROFILE</span>
                    <h2 id="staffContactDrawerTitle">Edit Contact Details</h2>
                    <p id="staffContactDrawerSubtitle">Angela Reyes · ST-001</p>
                </div>
                <button type="button" id="staffContactClose" aria-label="Close staff contact editor">×</button>
            </header>

            <form class="student-edit-body" id="staffContactForm">
                <div class="feedback-recipient-card">
                    <span class="staff-face staff-face-1" id="staffContactInitials" role="img" aria-label="Angela Reyes mock profile photo"></span>
                    <div><small>STAFF</small><strong id="staffContactName">Angela Reyes</strong><p>Work-related and emergency communication only</p></div>
                </div>
                <div class="drawer-info-banner contact-info-banner">
                    <b>Employment contact information</b>
                    <span>These details are available to authorized dashboard users and are recorded in the activity log when changed.</span>
                </div>
                <section class="drawer-form-section">
                    <div class="drawer-section-title"><span>1</span><div><h3>Contact Information</h3><p>Enter phone numbers with the country code.</p></div></div>
                    <div class="drawer-form-grid">
                        <label class="full">Primary phone number<input type="tel" id="staffContactPrimary" required></label>
                        <label class="full">Secondary phone number<input type="tel" id="staffContactSecondary"></label>
                        <label class="full">Email address<input type="email" id="staffContactEmail" required></label>
                    </div>
                </section>
                <section class="drawer-form-section">
                    <div class="drawer-section-title"><span>2</span><div><h3>Emergency Contact</h3><p>Person to contact if the staff member cannot be reached.</p></div></div>
                    <div class="drawer-form-grid">
                        <label class="full">Emergency contact name<input id="staffContactEmergencyName" required></label>
                        <label class="full">Emergency contact number<input type="tel" id="staffContactEmergencyPhone" required></label>
                    </div>
                </section>
                <section class="drawer-form-section">
                    <div class="drawer-section-title"><span>3</span><div><h3>Change Note</h3><p>Optional explanation for the activity history.</p></div></div>
                    <div class="drawer-form-grid">
                        <label class="full">Internal note<textarea id="staffContactNote" rows="3" placeholder="Example: Staff confirmed new emergency contact number."></textarea></label>
                    </div>
                </section>
            </form>

            <footer class="student-edit-footer">
                <button class="secondary-button" type="button" id="staffContactCancel">Cancel</button>
                <button class="primary-button" type="submit" form="staffContactForm">Save Contact Details</button>
            </footer>
        </aside>
    </div>

    <div class="profile-drawer-overlay" id="teacherDocumentViewerOverlay" hidden>
        <aside class="student-edit-drawer document-viewer-drawer" role="dialog" aria-modal="true" aria-labelledby="document-view-title">
            <header class="student-edit-head document-viewer-head">
                <div>
                    <span>VIEW-ONLY · EMPLOYEE DOCUMENT</span>
                    <h2 id="documentViewTitle">Teaching Contract</h2>
                    <p>Review the document information and PDF file inside VLACE.</p>
                </div>
                <button type="button" id="teacherDocumentViewerClose" aria-label="Close document viewer">×</button>
            </header>
            <div class="student-edit-body document-viewer-body">
                <section class="document-information-card">
                    <div><small>Employee</small><strong id="documentViewEmployee">Maria Santos</strong><span>Teacher</span></div>
                    <div><small>Category</small><strong id="documentViewCategory">Contract</strong></div>
                    <div><small>Updated</small><strong id="documentViewUpdated">Jul 10, 2026</strong></div>
                    <div><small>Status</small><span class="status-pill positive" id="documentViewStatus">Approved</span></div>
                </section>
                <section class="document-security-strip">
                    <span>◉</span>
                    <div>
                        <strong>Protected view-only document</strong>
                        <p>Downloading, copying, printing, and public file links are unavailable.</p>
                    </div>
                </section>
                <section class="pdf-viewer-shell">
                    <header>
                        <div><span class="document-file-badge">PDF</span><strong id="documentViewFileName">teaching-contract.pdf</strong></div>
                        <div class="pdf-page-controls">
                            <button type="button" id="documentPagePrevious">‹</button>
                            <span id="documentPageStatus">Page 1 of 4</span>
                            <button type="button" id="documentPageNext">›</button>
                        </div>
                    </header>
                    <div class="pdf-canvas" aria-label="PDF preview">
                        <article class="mock-pdf-page">
                            <div class="mock-pdf-brand"><span>V</span><div><strong>VLACE</strong><small>EMPLOYEE RECORD</small></div></div>
                            <p class="mock-pdf-label" id="documentPdfLabel">CONTRACT · PAGE 1</p>
                            <h3 id="documentPdfHeading">Teacher Service Agreement</h3>
                            <p class="mock-pdf-intro">This protected record is issued to <strong id="documentPdfEmployee">Maria Santos</strong> and is maintained within the VLACE employee document system.</p>
                            <div class="mock-pdf-lines"><span></span><span></span><span></span><span class="short"></span></div>
                            <h4 id="documentPdfSubheading">Terms and information</h4>
                            <div class="mock-pdf-lines"><span></span><span></span><span></span><span></span><span class="short"></span></div>
                            <div class="mock-pdf-detail-grid">
                                <div><small>Employee</small><strong id="documentPdfDetailEmployee">Maria Santos</strong></div>
                                <div><small>Status</small><strong id="documentPdfDetailStatus">Approved</strong></div>
                                <div><small>Updated</small><strong id="documentPdfDetailUpdated">Jul 10, 2026</strong></div>
                                <div><small>Record type</small><strong id="documentPdfDetailType">Contract</strong></div>
                            </div>
                            <div class="mock-pdf-signatures"><div><span></span><small>Authorized Representative</small></div><div><span></span><small id="documentPdfSignature">Maria Santos</small></div></div>
                            <footer id="documentPdfFooter">VLACE protected preview · Page 1 of 4</footer>
                        </article>
                    </div>
                </section>
                <div class="feedback-audit-note">This is a visual prototype of the secure PDF viewer. The actual uploaded PDF will appear in this area after document storage is connected.</div>
            </div>
            <footer class="student-edit-footer document-viewer-footer">
                <span>Last viewed just now · Philippine Time</span>
                <button class="primary-button" type="button" id="teacherDocumentViewerDone">Close Viewer</button>
            </footer>
        </aside>
    </div>

    <div class="profile-drawer-overlay" id="teacherDocumentUploadOverlay" hidden>
        <aside class="student-edit-drawer upload-document-drawer" role="dialog" aria-modal="true" aria-labelledby="upload-document-title">
            <header class="student-edit-head upload-document-head">
                <div>
                    <span>ADMIN &amp; MANAGER · DOCUMENT MANAGEMENT</span>
                    <h2 id="upload-document-title">Upload Document</h2>
                    <p>Add a secure, view-only file to this employee record.</p>
                </div>
                <button type="button" id="teacherDocumentUploadClose" aria-label="Close upload document">×</button>
            </header>
            <form class="student-edit-body" id="teacherDocumentUploadForm">
                <div class="feedback-recipient-card">
                    <span class="teacher-face teacher-photo-0" id="teacherDocumentUploadInitials" role="img" aria-label="Maria Santos mock profile photo"></span>
                    <div><small>Document for</small><strong id="teacherDocumentUploadName">Maria Santos</strong><p>Teacher · Employee record</p></div>
                </div>
                <section class="drawer-form-section">
                    <div class="drawer-section-title"><span>1</span><div><h3>Document details</h3><p>Name and classify the employee file</p></div></div>
                    <div class="upload-document-grid">
                        <label class="wide">Document Title<input id="teacherDocumentTitle" placeholder="e.g. Employment Contract 2026" required></label>
                        <label>Category<select id="teacherDocumentCategory"><option>Contract</option><option>Identification</option><option>Certification</option><option>Clearance</option><option>Company Record</option><option>Other</option></select></label>
                        <label>Status<select id="teacherDocumentStatus"><option>Pending Review</option><option>Approved</option><option>Verified</option><option>Signed</option><option>Expiring Soon</option></select></label>
                        <label>Issue Date<input id="teacherDocumentIssueDate" type="date"></label>
                        <label>Expiry Date <small>Optional</small><input id="teacherDocumentExpiryDate" type="date"></label>
                    </div>
                </section>
                <section class="drawer-form-section">
                    <div class="drawer-section-title"><span>2</span><div><h3>Select file</h3><p>PDF, PNG, or JPG · maximum 10 MB</p></div></div>
                    <label class="secure-file-drop" id="teacherDocumentDrop">
                        <input id="teacherDocumentFile" type="file" accept=".pdf,.png,.jpg,.jpeg">
                        <span class="secure-file-icon">↑</span>
                        <strong id="teacherDocumentFileName">Choose a file to upload</strong>
                        <p id="teacherDocumentFileMeta">Click to browse your computer</p>
                    </label>
                    <div class="view-only-protection"><span>◉</span><div><strong>View-only protection</strong><p>Authorized users can open this document inside VLACE. Download controls and shareable file URLs are not provided.</p></div></div>
                </section>
                <section class="drawer-form-section">
                    <div class="drawer-section-title"><span>3</span><div><h3>Access and notes</h3><p>Choose who can view this record</p></div></div>
                    <div class="upload-document-grid">
                        <label class="wide">Visibility<select id="teacherDocumentVisibility"><option>Admin &amp; Manager Only</option><option>Employee &amp; Management</option></select></label>
                        <label class="wide">Internal Notes <small>Optional</small><textarea id="teacherDocumentNotes" placeholder="Add a short note for authorized reviewers…"></textarea></label>
                    </div>
                </section>
                <section class="feedback-publish-setting">
                    <div><strong>Notify employee</strong><p>Let this teacher know that a new document is available to view.</p></div>
                    <button type="button" id="teacherDocumentNotify" role="switch" aria-checked="false"><span></span></button>
                </section>
                <div class="feedback-audit-note">Prototype note: the interface is ready. Secure storage and virus scanning must be connected before real employee files are uploaded.</div>
            </form>
            <footer class="student-edit-footer upload-document-footer">
                <button class="secondary-button" type="button" id="teacherDocumentUploadCancel">Cancel</button>
                <button class="primary-button" type="submit" form="teacherDocumentUploadForm">Upload Document</button>
            </footer>
        </aside>
    </div>

    <div class="profile-drawer-overlay" id="teacherFeedbackDetailsOverlay" hidden>
        <aside class="student-edit-drawer feedback-details-drawer" role="dialog" aria-modal="true" aria-labelledby="teacherFeedbackDetailsTitle">
            <header class="student-edit-head feedback-drawer-head">
                <div>
                    <span id="teacherFeedbackDetailsKicker">ADMIN FEEDBACK MANAGEMENT · JUL 2026</span>
                    <h2 id="teacherFeedbackDetailsTitle">View Feedback</h2>
                    <p id="teacherFeedbackDetailsSubtitle">Classroom Performance Review · Reviewed by Angela Reyes</p>
                </div>
                <div class="feedback-drawer-head-actions">
                    <button class="feedback-admin-edit" type="button" id="teacherFeedbackDetailsEdit">Edit Feedback</button>
                    <button type="button" id="teacherFeedbackDetailsClose" aria-label="Close feedback details">×</button>
                </div>
            </header>
            <div class="student-edit-body">
                <section class="feedback-result-summary">
                    <div>
                        <span>Overall Result</span>
                        <strong id="teacherFeedbackDetailsResult">4.8 / 5</strong>
                    </div>
                    <span class="status-pill positive" id="teacherFeedbackDetailsVisibility">Published</span>
                </section>

                <div class="feedback-admin-control-note" id="teacherFeedbackAdminNote">
                    <strong>Admin access</strong>
                    <p>You can review or edit this published feedback. Employee acknowledgment remains separate and cannot be completed by Admin.</p>
                </div>

                <section class="feedback-line-list" id="teacherFeedbackDetailsItems"></section>

                <section class="drawer-form-section feedback-employee-response">
                    <div class="drawer-section-title">
                        <span>✓</span>
                        <div>
                            <h3>Teacher response</h3>
                            <p>Required before completing acknowledgment</p>
                        </div>
                    </div>
                    <textarea id="teacherFeedbackEmployeeNote" placeholder="Add a comment, clarification, or commitment…" required></textarea>
                </section>

                <div class="feedback-audit-note">The final acknowledgment records the teacher’s name, date, Philippine time, and required response in the activity log.</div>
            </div>
            <footer class="student-edit-footer feedback-drawer-footer">
                <div><strong id="teacherFeedbackAckProgress">0 of 5</strong><span> items acknowledged</span></div>
                <button class="secondary-button" type="button" id="teacherFeedbackDetailsDone">Close</button>
                <button class="primary-button" type="button" id="teacherFeedbackAcknowledge">Complete Acknowledgment</button>
            </footer>
        </aside>
    </div>

    <div class="profile-drawer-overlay" id="teacherAddFeedbackOverlay" hidden>
        <aside class="student-edit-drawer add-feedback-drawer" role="dialog" aria-modal="true" aria-labelledby="teacherAddFeedbackTitle">
            <header class="student-edit-head add-feedback-head">
                <div>
                    <span>ADMIN &amp; MANAGER · TEACHER FEEDBACK</span>
                    <h2 id="teacherAddFeedbackTitle">Add Feedback</h2>
                    <p id="teacherAddFeedbackSubtitle">Create a documented review for Maria Santos.</p>
                </div>
                <button type="button" id="teacherAddFeedbackClose" aria-label="Close add feedback">×</button>
            </header>
            <form class="student-edit-body" id="teacherAddFeedbackForm">
                <div class="feedback-recipient-card">
                    <span class="teacher-face teacher-photo-0" id="teacherAddFeedbackInitials" role="img" aria-label="Maria Santos mock profile photo"></span>
                    <div><small>Feedback for</small><strong id="teacherAddFeedbackName">Maria Santos</strong><p>Teacher · Reviewed by Van A.</p></div>
                </div>
                <section class="drawer-form-section">
                    <div class="drawer-section-title"><span>1</span><div><h3>Review information</h3><p>Choose the review type, period, and result</p></div></div>
                    <div class="add-feedback-grid">
                        <label class="feedback-type-field">Feedback Type
                            <select id="teacherFeedbackType">
                                <option>Teaching Quality &amp; Classroom Performance</option>
                                <option>Lesson Delivery &amp; Student Engagement</option>
                                <option>Student Progress &amp; Learning Outcomes</option>
                                <option>Language Accuracy &amp; Pronunciation</option>
                                <option>Classroom Management &amp; Professionalism</option>
                                <option>Teaching Observation &amp; Coaching</option>
                                <option>Attendance &amp; Reliability</option>
                                <option>Recognition</option>
                                <option>Corrective Feedback</option>
                            </select>
                        </label>
                        <label>Review Period<input id="teacherFeedbackPeriod" value="August 2026"></label>
                        <label>Overall Result
                            <select id="teacherFeedbackOverallResult">
                                <option>Exceeds Expectations</option>
                                <option selected>Meets Expectations</option>
                                <option>Needs Improvement</option>
                                <option>Coaching Required</option>
                                <option>Completed</option>
                            </select>
                        </label>
                        <label>Visibility
                            <select id="teacherFeedbackVisibility">
                                <option>Employee &amp; Management</option>
                                <option>Management Only</option>
                            </select>
                        </label>
                    </div>
                </section>
                <section class="drawer-form-section">
                    <div class="drawer-section-title"><span>2</span><div><h3>Overall summary</h3><p>Explain the main outcome of this review</p></div></div>
                    <label class="feedback-summary-field">Review Summary
                        <textarea id="teacherFeedbackSummary" placeholder="Write a clear, respectful summary of the teacher’s performance…"></textarea>
                        <small id="teacherFeedbackSummaryCount">0 characters</small>
                    </label>
                </section>
                <section class="drawer-form-section">
                    <div class="drawer-section-title"><span>3</span><div><h3>Individual feedback items</h3><p>The teacher can acknowledge each item separately</p></div></div>
                    <div class="feedback-builder-list" id="teacherFeedbackBuilder"></div>
                    <button class="add-feedback-item" type="button" id="teacherFeedbackAddItem">+ Add Another Feedback Item</button>
                </section>
                <section class="feedback-publish-setting">
                    <div><strong>Require teacher acknowledgment</strong><p>Each published feedback item must be individually acknowledged by the teacher.</p></div>
                    <button class="on" type="button" id="teacherFeedbackRequireAck" role="switch" aria-checked="true"><span></span></button>
                </section>
                <div class="feedback-audit-note">Publishing records the reviewer, publication date, Philippine time, visibility, and all future teacher acknowledgments.</div>
            </form>
            <footer class="student-edit-footer add-feedback-footer">
                <button class="secondary-button" type="button" id="teacherAddFeedbackCancel">Cancel</button>
                <button class="secondary-button" type="button" id="teacherFeedbackSaveDraft">Save Private Draft</button>
                <button class="primary-button" type="submit" form="teacherAddFeedbackForm" id="teacherFeedbackPublish">Publish for Acknowledgment</button>
            </footer>
        </aside>
    </div>

    <div class="modal-backdrop" id="studentNoteModal" hidden>
        <div class="modal referral-entry-modal activity-note-modal" role="dialog" aria-modal="true" aria-labelledby="studentNoteTitle">
            <div class="modal-head">
                <div>
                    <p>INTERNAL · NON-SENSITIVE</p>
                    <h3 id="studentNoteTitle">Add Profile Note</h3>
                </div>
                <button type="button" id="studentNoteClose" aria-label="Close note modal">×</button>
            </div>

            <div class="referral-modal-note activity-note-guidance">
                <span><i data-lucide="clipboard-list"></i></span>
                <div>
                    <strong>Internal activity only</strong>
                    <p>Use this for account updates, learning notes, schedule context, and admin reminders. Do not enter payment, pricing, passwords, or private contact details here.</p>
                </div>
            </div>

            <form class="referral-entry-form activity-note-form" id="studentNoteForm">
                <label class="full">Note title
                    <input id="studentNoteTitleInput" placeholder="Example: Parent requested schedule follow-up" required>
                </label>
                <label class="full">Note details
                    <textarea id="studentNoteDescription" rows="5" placeholder="Write a short internal note..." required></textarea>
                </label>
                <label>Visibility
                    <select id="studentNoteVisibility">
                        <option selected>Hidden from students</option>
                        <option>Admin only</option>
                        <option>Manager review</option>
                    </select>
                </label>
                <label>Category
                    <select id="studentNoteCategory">
                        <option selected>General note</option>
                        <option>Schedule</option>
                        <option>Learning progress</option>
                        <option>Follow-up</option>
                    </select>
                </label>
            </form>

            <div class="modal-actions">
                <button class="secondary-button" type="button" id="studentNoteCancel">Cancel</button>
                <button class="primary-button" type="submit" form="studentNoteForm">Save Note</button>
            </div>
        </div>
    </div>

    <div class="modal-backdrop" id="staffNoteModal" hidden>
        <div class="modal referral-entry-modal activity-note-modal" role="dialog" aria-modal="true" aria-labelledby="staffNoteTitle">
            <div class="modal-head">
                <div>
                    <p>INTERNAL · NON-SENSITIVE</p>
                    <h3 id="staffNoteTitle">Add Staff Note</h3>
                </div>
                <button type="button" id="staffNoteClose" aria-label="Close staff note modal">×</button>
            </div>

            <div class="referral-modal-note activity-note-guidance">
                <span><i data-lucide="clipboard-list"></i></span>
                <div>
                    <strong>Internal staff activity</strong>
                    <p>Use this for HR updates, schedule context, coaching reminders, and manager notes. Do not enter payroll account details, passwords, or private credentials here.</p>
                </div>
            </div>

            <form class="referral-entry-form activity-note-form" id="staffNoteForm">
                <label class="full">Note title
                    <input id="staffNoteTitleInput" placeholder="Example: Follow up on work schedule request" required>
                </label>
                <label class="full">Note details
                    <textarea id="staffNoteDescription" rows="5" placeholder="Write a short internal staff note..." required></textarea>
                </label>
                <label>Visibility
                    <select id="staffNoteVisibility">
                        <option selected>Internal use only</option>
                        <option>Admin only</option>
                        <option>Manager review</option>
                    </select>
                </label>
                <label>Category
                    <select id="staffNoteCategory">
                        <option selected>General note</option>
                        <option>Schedule</option>
                        <option>HR follow-up</option>
                        <option>Performance</option>
                    </select>
                </label>
            </form>

            <div class="modal-actions">
                <button class="secondary-button" type="button" id="staffNoteCancel">Cancel</button>
                <button class="primary-button" type="submit" form="staffNoteForm">Save Note</button>
            </div>
        </div>
    </div>

    <div class="modal-backdrop" id="staffAttendanceModal" hidden>
        <div class="modal referral-entry-modal attendance-edit-modal" role="dialog" aria-modal="true" aria-labelledby="staffAttendanceModalTitle">
            <div class="modal-head">
                <div>
                    <p>ATTENDANCE RECORD</p>
                    <h3 id="staffAttendanceModalTitle">August 1, 2026</h3>
                </div>
                <button type="button" id="staffAttendanceClose" aria-label="Close attendance record">×</button>
            </div>

            <div class="referral-modal-note activity-note-guidance">
                <span><i data-lucide="calendar-check"></i></span>
                <div>
                    <strong id="staffAttendanceModalSummary">No attendance record yet</strong>
                    <p>Attendance edits are admin-controlled and are recorded in Profile Activity &amp; Notes.</p>
                </div>
            </div>

            <form class="referral-entry-form activity-note-form" id="staffAttendanceForm">
                <label>Status
                    <select id="staffAttendanceStatus">
                        <option value="P">P - Present</option>
                        <option value="A">A - Absent</option>
                        <option value="L">L - Approved Leave</option>
                        <option value="LT">LT - Late</option>
                        <option value="HD">HD - Half Day</option>
                        <option value="DO">DO - Day Off</option>
                        <option value="H">H - Holiday</option>
                        <option value="OT">OT - Overtime</option>
                    </select>
                </label>
                <label>Time In
                    <input type="time" id="staffAttendanceTimeIn">
                </label>
                <label>Time Out
                    <input type="time" id="staffAttendanceTimeOut">
                </label>
                <label>Approved Hours
                    <input type="number" min="0" max="24" step="0.1" id="staffAttendanceHours">
                </label>
                <label class="full">Internal Note
                    <textarea id="staffAttendanceNote" rows="4" placeholder="State why this attendance record was changed."></textarea>
                </label>
            </form>

            <div class="modal-actions">
                <button class="secondary-button" type="button" id="staffAttendanceCancel">Cancel</button>
                <button class="primary-button" type="submit" form="staffAttendanceForm">Save Attendance</button>
            </div>
        </div>
    </div>

    <div class="modal-backdrop" id="paymentReceiptModal" hidden>
        <div class="modal payment-receipt-modal" role="dialog" aria-modal="true" aria-labelledby="paymentReceiptTitle">
            <div class="receipt-paper">
                <header class="receipt-header">
                    <div class="receipt-brand">
                        <span class="receipt-logo">S</span>
                        <div>
                            <strong>SPEAKRYT</strong>
                            <small>English Learning Services</small>
                        </div>
                    </div>
                    <div class="receipt-status">
                        <span>Official Receipt</span>
                        <b id="receiptStatus">Paid</b>
                    </div>
                </header>

                <section class="receipt-title-row">
                    <div>
                        <p>Receipt issued to</p>
                        <h3 id="paymentReceiptTitle">Liam Chen</h3>
                        <span id="receiptStudentMeta">S1-001 · China</span>
                    </div>
                    <dl>
                        <div><dt>Receipt No.</dt><dd id="receiptNumber">RCPT-PP-7K24-9021</dd></div>
                        <div><dt>Payment Date</dt><dd id="receiptDate">Jul 10, 2026</dd></div>
                        <div><dt>Reference</dt><dd id="receiptReference">PP-7K24-9021</dd></div>
                    </dl>
                </section>

                <section class="receipt-details-grid">
                    <article>
                        <span>Package</span>
                        <strong id="receiptPackage">30 Lessons</strong>
                    </article>
                    <article>
                        <span>Processor</span>
                        <strong id="receiptProcessor">PayPal</strong>
                    </article>
                    <article>
                        <span>Synchronized</span>
                        <strong id="receiptSynchronized">Automatic · 10:32 AM</strong>
                    </article>
                </section>

                <section class="receipt-breakdown">
                    <div><span>Original Amount</span><strong id="receiptOriginalAmount">$300.00</strong></div>
                    <div><span>Discount</span><strong id="receiptDiscount">5%</strong></div>
                    <div><span>Referral Discount</span><strong id="receiptReferralDiscount">8%</strong></div>
                    <div class="receipt-total"><span>Net Amount Paid</span><strong id="receiptNetAmount">$261.00</strong></div>
                </section>

                <footer class="receipt-footer">
                    <div>
                        <strong>Thank you for your payment.</strong>
                        <span>This receipt confirms payment recorded in SPEAKRYT's student billing history.</span>
                    </div>
                    <div>
                        <span>Generated by</span>
                        <b>VLACE Admin Dashboard</b>
                    </div>
                </footer>
            </div>

            <div class="receipt-actions">
                <button class="secondary-button" type="button" id="paymentReceiptClose">Close</button>
                <button class="primary-button" type="button" id="paymentReceiptPrint"><i data-lucide="printer"></i> Print Receipt</button>
            </div>
        </div>
    </div>

    <div class="modal-backdrop" id="lessonFeedbackModal" hidden>
        <div class="modal feedback-modal feedback-review-modal" role="dialog" aria-modal="true" aria-labelledby="lessonFeedbackTitle">
            <div class="modal-head">
                <div>
                    <p>ADMIN &amp; MANAGER REVIEW</p>
                    <h3 id="lessonFeedbackTitle">Teacher Feedback</h3>
                </div>
                <button type="button" id="lessonFeedbackClose" aria-label="Close feedback view">×</button>
            </div>

            <div class="feedback-context">
                <div>
                    <span>Student</span>
                    <strong id="lessonFeedbackStudent">Liam Chen</strong>
                </div>
                <div>
                    <span>Lesson</span>
                    <strong id="lessonFeedbackLesson">Past Tense Review</strong>
                </div>
                <div>
                    <span>Teacher</span>
                    <strong id="lessonFeedbackTeacher">Maria Santos</strong>
                </div>
            </div>

            <div class="feedback-review-status">
                <span>Publication status</span>
                <span class="status-pill warning" id="lessonFeedbackStatus">Pending Approval</span>
            </div>

            <div class="feedback-review-content" id="lessonFeedbackSubmitted">
                <section>
                    <span>Corrections</span>
                    <p id="lessonFeedbackCorrectionsText">Use “went” when talking about yesterday instead of “go.”</p>
                </section>
                <section>
                    <span>What the student did well</span>
                    <p id="lessonFeedbackStrengthsText"><span id="lessonFeedbackStudentInline">Liam Chen</span> answered in complete sentences and participated confidently.</p>
                </section>
                <section>
                    <span>What to improve next</span>
                    <p id="lessonFeedbackImprovementText">Practice common past-tense verbs and use them in short daily sentences.</p>
                </section>
                <section>
                    <span>Teacher’s message</span>
                    <p id="lessonFeedbackNoteText">Great effort today. Keep practicing and see you in the next class!</p>
                </section>
                <div class="feedback-visibility">
                    <strong>Approval required before publishing</strong>
                    <span>The student cannot see this feedback until a Manager or Admin approves it.</span>
                </div>
            </div>

            <div class="feedback-empty-review" id="lessonFeedbackEmpty" hidden>
                <strong>No feedback submitted yet</strong>
                <p>The teacher can add feedback after the lesson is completed. Admin and Manager can view it here once submitted.</p>
            </div>

            <div class="modal-actions">
                <button class="secondary-button" type="button" id="lessonFeedbackDismiss">Close</button>
                <button class="secondary-button" type="button" id="lessonFeedbackRevision">Request Revision</button>
                <button class="primary-button" type="button" id="lessonFeedbackApprove">Approve Feedback</button>
            </div>
        </div>
    </div>

    <div class="modal-backdrop" id="teacherFeedbackModal" hidden>
        <div class="modal feedback-modal teacher-feedback-modal" role="dialog" aria-modal="true" aria-labelledby="teacherFeedbackTitle">
            <div class="modal-head">
                <div>
                    <p>TEACHER VIEW ONLY</p>
                    <h3 id="teacherFeedbackTitle">Add Teacher Feedback</h3>
                </div>
                <button type="button" id="teacherFeedbackClose" aria-label="Close teacher feedback form">×</button>
            </div>

            <div class="feedback-context">
                <div>
                    <span>Student</span>
                    <strong id="teacherFeedbackStudent">Liam Chen</strong>
                </div>
                <div>
                    <span>Lesson</span>
                    <strong id="teacherFeedbackLesson">Free Conversation</strong>
                </div>
                <div>
                    <span>Teacher</span>
                    <strong id="teacherFeedbackTeacher">Maria Santos</strong>
                </div>
            </div>

            <form id="teacherFeedbackForm" class="teacher-feedback-form">
                <label>Corrections
                    <textarea id="teacherFeedbackCorrections" placeholder="Example: Say “I went” instead of “I go” when talking about yesterday."></textarea>
                </label>
                <label>What the student did well
                    <textarea id="teacherFeedbackStrengths" placeholder="Write a short, encouraging strength."></textarea>
                </label>
                <label>What to improve next
                    <textarea id="teacherFeedbackImprovement" placeholder="Write one clear and achievable next step."></textarea>
                </label>
                <label>Teacher’s message to the student
                    <textarea id="teacherFeedbackNote" placeholder="Add a friendly final note for the student."></textarea>
                </label>
                <div class="feedback-visibility">
                    <strong>Approval required</strong>
                    <span>The student cannot see this until a Manager or Admin approves it.</span>
                </div>
            </form>

            <div class="modal-actions">
                <button class="secondary-button" type="button" id="teacherFeedbackCancel">Cancel</button>
                <button class="primary-button" type="submit" form="teacherFeedbackForm" id="teacherFeedbackSubmit">Submit for Approval</button>
            </div>
        </div>
    </div>

    <div class="modal-backdrop" id="videoUrlModal" hidden>
        <div class="modal feedback-modal teacher-feedback-modal" role="dialog" aria-modal="true" aria-labelledby="videoUrlTitle">
            <div class="modal-head">
                <div>
                    <p>TEACHER VIEW ONLY</p>
                    <h3 id="videoUrlTitle">Add Video Recording URL</h3>
                </div>
                <button type="button" id="videoUrlClose" aria-label="Close video recording URL form">×</button>
            </div>

            <div class="feedback-context">
                <div>
                    <span>Student</span>
                    <strong id="videoUrlStudent">Liam Chen</strong>
                </div>
                <div>
                    <span>Lesson</span>
                    <strong id="videoUrlLesson">Free Conversation</strong>
                </div>
                <div>
                    <span>Teacher</span>
                    <strong id="videoUrlTeacher">Maria Santos</strong>
                </div>
            </div>

            <form id="videoUrlForm" class="teacher-feedback-form">
                <label>Video recording URL
                    <input id="videoRecordingUrl" type="url" placeholder="https://drive.google.com/file/..." required>
                </label>
                <div class="feedback-visibility">
                    <strong>Recording access</strong>
                    <span>Paste the class recording link here after the lesson. Admin and Manager can review access before it is shared.</span>
                </div>
            </form>

            <div class="modal-actions">
                <button class="secondary-button" type="button" id="videoUrlCancel">Cancel</button>
                <button class="primary-button" type="submit" form="videoUrlForm" id="videoUrlSubmit">Save Video URL</button>
            </div>
        </div>
    </div>

    <div class="modal-backdrop" id="teacherPayslipModal" hidden>
        <section class="modal payslip-modal" role="dialog" aria-modal="true" aria-labelledby="teacherPayslipTitle">
            <header class="payslip-modal-head">
                <div class="payslip-brand">
                    <img data-payslip-logo-holder src="{{ asset('images/vlace-logo.png') }}" alt="VLACE logo">
                    <div>
                        <strong data-payslip-brand-name>VLACE</strong>
                        <small data-payslip-document-label>Teacher Payroll Payslip</small>
                    </div>
                </div>
                <button type="button" id="teacherPayslipClose" aria-label="Close payslip">×</button>
            </header>

            <div class="payslip-title-row">
                <div>
                    <p>PAYROLL STATEMENT</p>
                    <h3 id="teacherPayslipTitle">Payslip</h3>
                    <span id="teacherPayslipPeriod">January 16–30, 2026</span>
                </div>
                <b id="teacherPayslipStatus">For Review</b>
            </div>

            <section class="payslip-info-grid">
                <article>
                    <span>Teacher</span>
                    <strong id="teacherPayslipName">Maria Santos</strong>
                    <small id="teacherPayslipMeta">T1-001 · China · Kids & Adults</small>
                </article>
                <article>
                    <span>Payment Method</span>
                    <strong>Bank Transfer</strong>
                    <small id="teacherPayslipBank">BDO Unibank · **** 4821</small>
                </article>
                <article>
                    <span>Prepared By</span>
                    <strong>VLACE Admin</strong>
                    <small id="teacherPayslipIssued">Issued Aug 6, 2026 · PHT</small>
                </article>
            </section>

            <section class="payslip-summary-strip">
                <article><span>Completed Lessons</span><strong id="payslipLessons">0</strong></article>
                <article><span>Payable Hours</span><strong id="payslipHours">0</strong></article>
                <article><span>Hourly Rate</span><strong id="payslipRate">₱0.00</strong></article>
            </section>

            <section class="payslip-breakdown">
                <div><span>Gross Lesson Pay</span><strong id="payslipGross">₱0.00</strong></div>
                <div><span>Deductions</span><strong class="payslip-deduction" id="payslipDeductions">− ₱0.00</strong></div>
                <div class="payslip-net"><span>Net Payroll</span><strong id="payslipNet">₱0.00</strong></div>
            </section>

            <section class="payslip-detail-table-wrap">
                <table class="payslip-detail-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Student / Item</th>
                            <th>Details</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody id="teacherPayslipLineItems"></tbody>
                </table>
            </section>

            <footer class="payslip-footer">
                <p>This payslip is generated from completed lesson records and approved payroll adjustments. Final release is subject to Admin payroll confirmation.</p>
                <div>
                    <button type="button" class="secondary-button" id="teacherPayslipPrint">Print</button>
                    <button type="button" class="primary-button" id="teacherPayslipDownload">Download PDF</button>
                </div>
            </footer>
        </section>
    </div>

    <div class="modal-backdrop" id="payrollReceiptUploadModal" hidden>
        <section class="modal payroll-receipt-modal" role="dialog" aria-modal="true" aria-labelledby="payrollReceiptUploadTitle">
            <div class="modal-head">
                <div>
                    <p>VLACE PAYROLL RECEIPT</p>
                    <h3 id="payrollReceiptUploadTitle">Upload Payment Receipt</h3>
                </div>
                <button type="button" id="payrollReceiptUploadClose" aria-label="Close upload receipt modal">×</button>
            </div>

            <div class="payroll-receipt-context">
                <article><span>Teacher</span><strong id="payrollReceiptUploadTeacher">Maria Santos</strong></article>
                <article><span>Payroll Period</span><strong id="payrollReceiptUploadPeriod">January 16–30, 2026</strong></article>
                <article><span>Net Payroll</span><strong id="payrollReceiptUploadAmount">₱0.00</strong></article>
            </div>

            <form id="payrollReceiptUploadForm" class="payroll-receipt-form">
                <label class="payroll-receipt-dropzone">
                    <input id="payrollReceiptFile" type="file" accept="image/*" required>
                    <span><i data-lucide="upload-cloud"></i></span>
                    <strong>Choose receipt image</strong>
                    <small>Accepted: PNG, JPG, JPEG, WEBP. The preview will be saved in this prototype session.</small>
                </label>
                <figure class="payroll-receipt-preview" id="payrollReceiptUploadPreview" hidden>
                    <img id="payrollReceiptUploadImage" alt="Uploaded payroll receipt preview">
                    <figcaption id="payrollReceiptUploadFileName">No file selected</figcaption>
                </figure>
            </form>

            <div class="modal-actions">
                <button class="secondary-button" type="button" id="payrollReceiptUploadCancel">Cancel</button>
                <button class="primary-button" type="submit" form="payrollReceiptUploadForm">Save Receipt</button>
            </div>
        </section>
    </div>

    <div class="modal-backdrop" id="payrollReceiptViewModal" hidden>
        <section class="modal payroll-receipt-modal payroll-receipt-view-modal" role="dialog" aria-modal="true" aria-labelledby="payrollReceiptViewTitle">
            <div class="modal-head">
                <div>
                    <p>VLACE PAYMENT RECEIPT</p>
                    <h3 id="payrollReceiptViewTitle">Payroll Receipt</h3>
                </div>
                <button type="button" id="payrollReceiptViewClose" aria-label="Close receipt preview">×</button>
            </div>

            <div class="payroll-receipt-context">
                <article><span>Teacher</span><strong id="payrollReceiptViewTeacher">Maria Santos</strong></article>
                <article><span>Payroll Period</span><strong id="payrollReceiptViewPeriod">January 16–30, 2026</strong></article>
                <article><span>Uploaded</span><strong id="payrollReceiptViewUploaded">Uploaded receipt</strong></article>
            </div>

            <figure class="payroll-receipt-image-frame">
                <img id="payrollReceiptViewImage" alt="Payroll receipt preview">
                <figcaption id="payrollReceiptViewFileName">receipt.png</figcaption>
            </figure>

            <div class="modal-actions">
                <button class="secondary-button" type="button" id="payrollReceiptViewCancel">Close</button>
                <a class="primary-button payroll-receipt-download" id="payrollReceiptDownload" href="#" download>Download Receipt</a>
            </div>
        </section>
    </div>

    <div class="modal-backdrop logout-confirm-backdrop" id="logoutConfirmModal" hidden>
        <section class="modal logout-confirm-modal" role="dialog" aria-modal="true" aria-labelledby="logoutConfirmTitle">
            <button class="logout-confirm-close" type="button" id="logoutModalClose" aria-label="Close">×</button>
            <span class="logout-confirm-icon"><img src="{{ asset('images/vlace-logo.png') }}" alt="VLACE"></span>
            <h3 id="logoutConfirmTitle">Log out?</h3>
            <div class="logout-confirm-actions">
                <button class="secondary-button" type="button" id="logoutStayButton">Cancel</button>
                <button class="danger-button" type="button" id="logoutConfirmButton">Log Out</button>
            </div>
        </section>
    </div>

    <div class="modal-backdrop" id="sparkConfirmBackdrop" hidden>
        <div class="modal jarvis-confirm">
            <div class="modal-head">
                <div>
                    <p>SPARK · CONFIRM ACTION</p>
                    <h3 id="sparkConfirmTitle">Confirm Action</h3>
                </div>
                <button type="button" id="sparkConfirmClose">×</button>
            </div>
            <div class="jarvis-confirm-copy">
                <span>SPARK prepared this action:</span>
                <p id="sparkConfirmDetail"></p>
                <b>No sensitive action happens until you confirm.</b>
            </div>
            <div class="modal-actions">
                <button class="secondary-button" type="button" id="sparkConfirmCancel">Cancel</button>
                <button class="primary-button" type="button" id="sparkConfirmAction">Confirm Action</button>
            </div>
        </div>
    </div>

    <div class="prototype-toast" id="sparkToast" hidden>✓ Reminder task created in prototype mode.</div>
</body>
</html>
