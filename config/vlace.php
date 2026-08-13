<?php

return [
    'setup_key' => env('VLACE_SETUP_KEY', ''),
    'admin_name' => env('VLACE_ADMIN_NAME', 'VLACE Administrator'),
    'admin_email' => env('VLACE_ADMIN_EMAIL', ''),
    'admin_password' => env('VLACE_ADMIN_PASSWORD', ''),
    'dashboard_host' => env('VLACE_DASHBOARD_HOST', 'mydashboard.speakryt.com'),
    'website_hosts' => array_values(array_filter(array_map(
        'trim',
        explode(',', env('VLACE_WEBSITE_HOSTS', 'speakryt.com,www.speakryt.com'))
    ))),
];
