const autoprefixer = require('autoprefixer')
const StyleLintPlugin = require('stylelint-webpack-plugin')

export default {
    mode: 'spa',
    head: {
        htmlAttrs: {
            lang: 'en',
        },
        title: 'XXXXXXXOOO — 𝐕𝐈𝐍𝐆𝐓-𝐕𝐈𝐍𝐆𝐓',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, height=device-height, user-scalable=no, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'QWxzbyBLbm93biBhcyBHdWlsaGVybWUgUGFuZ25vdHRh' },

            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:title', property: 'og:title', content: 'XXXXXXXOOO — 𝐕𝐈𝐍𝐆𝐓-𝐕𝐈𝐍𝐆𝐓' },
            { hid: 'og:description', property: 'og:description', content: 'QWxzbyBLbm93biBhcyBHdWlsaGVybWUgUGFuZ25vdHRh' },
            { hid: 'og:image', property: 'og:image', content: 'https://xxxxxxx.ooo/images/share.png' },
            { hid: 'og:url', property: 'og:url', content: 'https://xxxxxxx.ooo' },

            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:title', name: 'twitter:title', content: 'XXXXXXXOOO — 𝐕𝐈𝐍𝐆𝐓-𝐕𝐈𝐍𝐆𝐓' },
            { hid: 'twitter:description', name: 'twitter:description', content: 'QWxzbyBLbm93biBhcyBHdWlsaGVybWUgUGFuZ25vdHRh' },
            { hid: 'twitter:image', name: 'twitter:image', content: 'https://xxxxxxx.ooo/images/share.png' }
        ],
        link: [
            { rel: 'canonical', href: 'https://xxxxxxx.ooo' },
            { rel: 'icon', href: '/favicon.svg' }
        ]
    },
    css: [
        '@/node_modules/normalize.css/normalize.css',
        '@/assets/application.scss'
    ],
    loading: {
        color: '#000000',
        height: '100%',
        failedColor: '#e02020',
        throttle: 0
    },
    plugins: [
        {
            src: '~/plugins/ga.js',
            mode: 'client'
        }
    ],
    modules: [
        '@nuxtjs/axios'
    ],
    build: {
        postcss: {
            autoprefixer
        },
        plugins: [
            new StyleLintPlugin({
                files: [
                    '/assets/**/*.scss'
                ],
                configFile: 'stylelintrc.json'
            })
        ],
        extend(config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
