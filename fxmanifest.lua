fx_version 'cerulean'
games { 'gta5', 'rdr3' }

author 'Elena Winters'
description 'Dev hud'
version '0.1.0+24.7.18'

rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'

ui_page 'html/index.html'

dependencies {
    'twiliCore'
}
files {
    'html/index.html',
    'html/script.js',
    'html/style.css',
}

shared_scripts {
    '@twiliCore/shared/u_common.js'
}

client_scripts {
    '@twiliCore/client/c_globals.js',
    'client/c_func.js',
    'client/c_hud.js',
    'client/c_tests.js',
}

-- server_scripts {
--     'server/s_damage.js'
-- }

