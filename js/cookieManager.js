// Cookie management functionality
export class CookieManager {
    constructor() {
        this.cookieConsent = document.getElementById('cookieConsent');
        this.cookieSettings = document.getElementById('cookieSettings');
        this.necessaryCookies = document.getElementById('necessaryCookies');
        this.analyticsCookies = document.getElementById('analyticsCookies');
        this.marketingCookies = document.getElementById('marketingCookies');
        
        this.initializeEventListeners();
        this.checkCookieConsent();
    }

    initializeEventListeners() {
        // Cookie consent buttons
        document.getElementById('acceptAllCookies').addEventListener('click', () => this.acceptAllCookies());
        document.getElementById('rejectAllCookies').addEventListener('click', () => this.rejectAllCookies());
        document.getElementById('customizeCookies').addEventListener('click', () => this.showCookieSettings());
        
        // Cookie settings buttons
        document.getElementById('saveCookieSettings').addEventListener('click', () => this.saveCookieSettings());
        document.getElementById('closeCookieSettings').addEventListener('click', () => this.hideCookieSettings());
    }

    checkCookieConsent() {
        const consent = this.getCookie('cookie_consent');
        if (!consent) {
            this.showCookieConsent();
        }
    }

    showCookieConsent() {
        this.cookieConsent.style.display = 'block';
    }

    hideCookieConsent() {
        this.cookieConsent.style.display = 'none';
    }

    showCookieSettings() {
        this.cookieSettings.style.display = 'flex';
        this.hideCookieConsent();
    }

    hideCookieSettings() {
        this.cookieSettings.style.display = 'none';
    }

    acceptAllCookies() {
        this.setCookie('cookie_consent', 'all', 365);
        this.setCookie('necessary_cookies', 'true', 365);
        this.setCookie('analytics_cookies', 'true', 365);
        this.setCookie('marketing_cookies', 'true', 365);
        this.hideCookieConsent();
    }

    rejectAllCookies() {
        this.setCookie('cookie_consent', 'necessary', 365);
        this.setCookie('necessary_cookies', 'true', 365);
        this.setCookie('analytics_cookies', 'false', 365);
        this.setCookie('marketing_cookies', 'false', 365);
        this.hideCookieConsent();
    }

    saveCookieSettings() {
        const analytics = this.analyticsCookies.checked;
        const marketing = this.marketingCookies.checked;
        
        this.setCookie('cookie_consent', 'custom', 365);
        this.setCookie('necessary_cookies', 'true', 365);
        this.setCookie('analytics_cookies', analytics.toString(), 365);
        this.setCookie('marketing_cookies', marketing.toString(), 365);
        
        this.hideCookieSettings();
    }

    setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/`;
    }

    getCookie(name) {
        const cookieName = `${name}=`;
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return null;
    }
} 