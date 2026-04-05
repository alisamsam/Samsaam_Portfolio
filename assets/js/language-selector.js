// Multi-language selector with automatic detection and storage
(function() {
    'use strict';
    
    const LANGUAGE_KEY = 'portfolio-language';
    const SUPPORTED_LANGUAGES = ['en', 'fr', 'de'];
    const LANGUAGE_NAMES = {
        'en': 'English',
        'fr': 'Français',
        'de': 'Deutsch'
    };
    
    const LANGUAGE_FLAGS = {
        'en': '🇬🇧',
        'fr': '🇫🇷',
        'de': '🇩🇪'
    };
    
    // Get the current page URL to determine current language
    function getCurrentLanguage() {
        const url = window.location.pathname;
        if (url.includes('-fr')) return 'fr';
        if (url.includes('-de')) return 'de';
        return 'en';
    }
    
    // Get stored language preference or browser language
    function getPreferredLanguage() {
        // Check localStorage first
        const stored = localStorage.getItem(LANGUAGE_KEY);
        if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
            return stored;
        }
        
        // Check browser language
        const browserLang = navigator.language.split('-')[0].toLowerCase();
        if (SUPPORTED_LANGUAGES.includes(browserLang)) {
            return browserLang;
        }
        
        return 'en';
    }
    
    // Convert URL to different language
    function getLanguageUrl(lang) {
        const url = window.location.pathname;
        const currentLang = getCurrentLanguage();
        
        if (currentLang === lang) return url;
        
        let newUrl = url;
        if (currentLang === 'en') {
            if (url.includes('.html')) {
                newUrl = url.replace('.html', `-${lang}.html`);
            }
        } else {
            newUrl = url.replace(`-${currentLang}.html`, lang === 'en' ? '.html' : `-${lang}.html`);
        }
        
        return newUrl;
    }
    
    // Create language selector
    function createLanguageSelector() {
        const currentLang = getCurrentLanguage();
        const langs = SUPPORTED_LANGUAGES.filter(l => l !== currentLang);
        
        let selector = '<div class="language-selector" style="display: inline-flex; gap: 0.8em;">';
        
        langs.forEach(lang => {
            const flag = LANGUAGE_FLAGS[lang];
            const name = LANGUAGE_NAMES[lang];
            const url = getLanguageUrl(lang);
            selector += `<a href="${url}" title="${name}" class="lang-button" style="text-decoration: none; cursor: pointer;">${flag} ${name}</a>`;
        });
        
        selector += '</div>';
        return selector;
    }
    
    // Initialize language detection and redirect if needed
    function initializeLanguageDetection() {
        const current = getCurrentLanguage();
        const preferred = getPreferredLanguage();
        
        // Store the current language as preference
        localStorage.setItem(LANGUAGE_KEY, current);
        
        // Only redirect on first visit if language preference differs
        if (current === 'en' && preferred !== 'en' && !sessionStorage.getItem('language-redirected')) {
            sessionStorage.setItem('language-redirected', 'true');
            // Optionally redirect to preferred language
            // const url = getLanguageUrl(preferred);
            // window.location.href = url;
        }
    }
    
    // Expose functions globally
    window.LanguageSelector = {
        getCurrentLanguage: getCurrentLanguage,
        getPreferredLanguage: getPreferredLanguage,
        getLanguageUrl: getLanguageUrl,
        createSelector: createLanguageSelector,
        initialize: initializeLanguageDetection
    };
    
    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeLanguageDetection);
    } else {
        initializeLanguageDetection();
    }
})();