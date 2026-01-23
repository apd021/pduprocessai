// Lista krajów Unii Europejskiej
const euCountries = [
    { code: 'AT', name: 'Austria', namePl: 'Austria' },
    { code: 'BE', name: 'Belgium', namePl: 'Belgia' },
    { code: 'BG', name: 'Bulgaria', namePl: 'Bułgaria' },
    { code: 'HR', name: 'Croatia', namePl: 'Chorwacja' },
    { code: 'CY', name: 'Cyprus', namePl: 'Cypr' },
    { code: 'CZ', name: 'Czech Republic', namePl: 'Czechy' },
    { code: 'DK', name: 'Denmark', namePl: 'Dania' },
    { code: 'EE', name: 'Estonia', namePl: 'Estonia' },
    { code: 'FI', name: 'Finland', namePl: 'Finlandia' },
    { code: 'FR', name: 'France', namePl: 'Francja' },
    { code: 'DE', name: 'Germany', namePl: 'Niemcy' },
    { code: 'GR', name: 'Greece', namePl: 'Grecja' },
    { code: 'HU', name: 'Hungary', namePl: 'Węgry' },
    { code: 'IE', name: 'Ireland', namePl: 'Irlandia' },
    { code: 'IT', name: 'Italy', namePl: 'Włochy' },
    { code: 'LV', name: 'Latvia', namePl: 'Łotwa' },
    { code: 'LT', name: 'Lithuania', namePl: 'Litwa' },
    { code: 'LU', name: 'Luxembourg', namePl: 'Luksemburg' },
    { code: 'MT', name: 'Malta', namePl: 'Malta' },
    { code: 'NL', name: 'Netherlands', namePl: 'Holandia' },
    { code: 'PL', name: 'Poland', namePl: 'Polska' },
    { code: 'PT', name: 'Portugal', namePl: 'Portugalia' },
    { code: 'RO', name: 'Romania', namePl: 'Rumunia' },
    { code: 'SK', name: 'Slovakia', namePl: 'Słowacja' },
    { code: 'SI', name: 'Slovenia', namePl: 'Słowenia' },
    { code: 'ES', name: 'Spain', namePl: 'Hiszpania' },
    { code: 'SE', name: 'Sweden', namePl: 'Szwecja' }
];

// Lista pozostałych krajów świata (wszystkie kraje)
const otherCountries = [
    // Ameryka Północna
    { code: 'US', name: 'United States', namePl: 'Stany Zjednoczone' },
    { code: 'CA', name: 'Canada', namePl: 'Kanada' },
    { code: 'MX', name: 'Mexico', namePl: 'Meksyk' },
    { code: 'GT', name: 'Guatemala', namePl: 'Gwatemala' },
    { code: 'BZ', name: 'Belize', namePl: 'Belize' },
    { code: 'SV', name: 'El Salvador', namePl: 'Salwador' },
    { code: 'HN', name: 'Honduras', namePl: 'Honduras' },
    { code: 'NI', name: 'Nicaragua', namePl: 'Nikaragua' },
    { code: 'CR', name: 'Costa Rica', namePl: 'Kostaryka' },
    { code: 'PA', name: 'Panama', namePl: 'Panama' },
    { code: 'CU', name: 'Cuba', namePl: 'Kuba' },
    { code: 'JM', name: 'Jamaica', namePl: 'Jamajka' },
    { code: 'HT', name: 'Haiti', namePl: 'Haiti' },
    { code: 'DO', name: 'Dominican Republic', namePl: 'Dominikana' },
    { code: 'BS', name: 'Bahamas', namePl: 'Bahamy' },
    { code: 'BB', name: 'Barbados', namePl: 'Barbados' },
    { code: 'TT', name: 'Trinidad and Tobago', namePl: 'Trynidad i Tobago' },
    { code: 'GD', name: 'Grenada', namePl: 'Grenada' },
    { code: 'LC', name: 'Saint Lucia', namePl: 'Saint Lucia' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines', namePl: 'Saint Vincent i Grenadyny' },
    { code: 'AG', name: 'Antigua and Barbuda', namePl: 'Antigua i Barbuda' },
    { code: 'KN', name: 'Saint Kitts and Nevis', namePl: 'Saint Kitts i Nevis' },
    { code: 'DM', name: 'Dominica', namePl: 'Dominika' },
    
    // Ameryka Południowa
    { code: 'BR', name: 'Brazil', namePl: 'Brazylia' },
    { code: 'AR', name: 'Argentina', namePl: 'Argentyna' },
    { code: 'CL', name: 'Chile', namePl: 'Chile' },
    { code: 'CO', name: 'Colombia', namePl: 'Kolumbia' },
    { code: 'PE', name: 'Peru', namePl: 'Peru' },
    { code: 'VE', name: 'Venezuela', namePl: 'Wenezuela' },
    { code: 'EC', name: 'Ecuador', namePl: 'Ekwador' },
    { code: 'BO', name: 'Bolivia', namePl: 'Boliwia' },
    { code: 'PY', name: 'Paraguay', namePl: 'Paragwaj' },
    { code: 'UY', name: 'Uruguay', namePl: 'Urugwaj' },
    { code: 'GY', name: 'Guyana', namePl: 'Gujana' },
    { code: 'SR', name: 'Suriname', namePl: 'Surinam' },
    { code: 'GF', name: 'French Guiana', namePl: 'Gujana Francuska' },
    
    // Europa (poza UE)
    { code: 'GB', name: 'United Kingdom', namePl: 'Wielka Brytania' },
    { code: 'NO', name: 'Norway', namePl: 'Norwegia' },
    { code: 'CH', name: 'Switzerland', namePl: 'Szwajcaria' },
    { code: 'IS', name: 'Iceland', namePl: 'Islandia' },
    { code: 'UA', name: 'Ukraine', namePl: 'Ukraina' },
    { code: 'BY', name: 'Belarus', namePl: 'Białoruś' },
    { code: 'RS', name: 'Serbia', namePl: 'Serbia' },
    { code: 'BA', name: 'Bosnia and Herzegovina', namePl: 'Bośnia i Hercegowina' },
    { code: 'ME', name: 'Montenegro', namePl: 'Czarnogóra' },
    { code: 'MK', name: 'North Macedonia', namePl: 'Macedonia Północna' },
    { code: 'AL', name: 'Albania', namePl: 'Albania' },
    { code: 'XK', name: 'Kosovo', namePl: 'Kosowo' },
    { code: 'MD', name: 'Moldova', namePl: 'Mołdawia' },
    { code: 'LI', name: 'Liechtenstein', namePl: 'Liechtenstein' },
    { code: 'MC', name: 'Monaco', namePl: 'Monako' },
    { code: 'SM', name: 'San Marino', namePl: 'San Marino' },
    { code: 'VA', name: 'Vatican City', namePl: 'Watykan' },
    { code: 'AD', name: 'Andorra', namePl: 'Andora' },
    
    // Azja
    { code: 'CN', name: 'China', namePl: 'Chiny' },
    { code: 'IN', name: 'India', namePl: 'Indie' },
    { code: 'JP', name: 'Japan', namePl: 'Japonia' },
    { code: 'KR', name: 'South Korea', namePl: 'Korea Południowa' },
    { code: 'KP', name: 'North Korea', namePl: 'Korea Północna' },
    { code: 'TH', name: 'Thailand', namePl: 'Tajlandia' },
    { code: 'VN', name: 'Vietnam', namePl: 'Wietnam' },
    { code: 'ID', name: 'Indonesia', namePl: 'Indonezja' },
    { code: 'MY', name: 'Malaysia', namePl: 'Malezja' },
    { code: 'SG', name: 'Singapore', namePl: 'Singapur' },
    { code: 'PH', name: 'Philippines', namePl: 'Filipiny' },
    { code: 'MM', name: 'Myanmar', namePl: 'Mjanma' },
    { code: 'LA', name: 'Laos', namePl: 'Laos' },
    { code: 'KH', name: 'Cambodia', namePl: 'Kambodża' },
    { code: 'BN', name: 'Brunei', namePl: 'Brunei' },
    { code: 'TL', name: 'East Timor', namePl: 'Timor Wschodni' },
    { code: 'BD', name: 'Bangladesh', namePl: 'Bangladesz' },
    { code: 'PK', name: 'Pakistan', namePl: 'Pakistan' },
    { code: 'AF', name: 'Afghanistan', namePl: 'Afganistan' },
    { code: 'IR', name: 'Iran', namePl: 'Iran' },
    { code: 'IQ', name: 'Iraq', namePl: 'Irak' },
    { code: 'SY', name: 'Syria', namePl: 'Syria' },
    { code: 'LB', name: 'Lebanon', namePl: 'Liban' },
    { code: 'JO', name: 'Jordan', namePl: 'Jordania' },
    { code: 'IL', name: 'Israel', namePl: 'Izrael' },
    { code: 'PS', name: 'Palestine', namePl: 'Palestyna' },
    { code: 'SA', name: 'Saudi Arabia', namePl: 'Arabia Saudyjska' },
    { code: 'AE', name: 'United Arab Emirates', namePl: 'Zjednoczone Emiraty Arabskie' },
    { code: 'QA', name: 'Qatar', namePl: 'Katar' },
    { code: 'KW', name: 'Kuwait', namePl: 'Kuwejt' },
    { code: 'BH', name: 'Bahrain', namePl: 'Bahrajn' },
    { code: 'OM', name: 'Oman', namePl: 'Oman' },
    { code: 'YE', name: 'Yemen', namePl: 'Jemen' },
    { code: 'KZ', name: 'Kazakhstan', namePl: 'Kazachstan' },
    { code: 'UZ', name: 'Uzbekistan', namePl: 'Uzbekistan' },
    { code: 'TM', name: 'Turkmenistan', namePl: 'Turkmenistan' },
    { code: 'TJ', name: 'Tajikistan', namePl: 'Tadżykistan' },
    { code: 'KG', name: 'Kyrgyzstan', namePl: 'Kirgistan' },
    { code: 'MN', name: 'Mongolia', namePl: 'Mongolia' },
    { code: 'NP', name: 'Nepal', namePl: 'Nepal' },
    { code: 'BT', name: 'Bhutan', namePl: 'Bhutan' },
    { code: 'LK', name: 'Sri Lanka', namePl: 'Sri Lanka' },
    { code: 'MV', name: 'Maldives', namePl: 'Malediwy' },
    { code: 'GE', name: 'Georgia', namePl: 'Gruzja' },
    { code: 'AM', name: 'Armenia', namePl: 'Armenia' },
    { code: 'AZ', name: 'Azerbaijan', namePl: 'Azerbejdżan' },
    { code: 'RU', name: 'Russia', namePl: 'Rosja' },
    { code: 'TR', name: 'Turkey', namePl: 'Turcja' },
    
    // Afryka
    { code: 'ZA', name: 'South Africa', namePl: 'Republika Południowej Afryki' },
    { code: 'EG', name: 'Egypt', namePl: 'Egipt' },
    { code: 'NG', name: 'Nigeria', namePl: 'Nigeria' },
    { code: 'KE', name: 'Kenya', namePl: 'Kenia' },
    { code: 'ET', name: 'Ethiopia', namePl: 'Etiopia' },
    { code: 'TZ', name: 'Tanzania', namePl: 'Tanzania' },
    { code: 'UG', name: 'Uganda', namePl: 'Uganda' },
    { code: 'RW', name: 'Rwanda', namePl: 'Rwanda' },
    { code: 'BI', name: 'Burundi', namePl: 'Burundi' },
    { code: 'SO', name: 'Somalia', namePl: 'Somalia' },
    { code: 'DJ', name: 'Djibouti', namePl: 'Dżibuti' },
    { code: 'ER', name: 'Eritrea', namePl: 'Erytrea' },
    { code: 'SD', name: 'Sudan', namePl: 'Sudan' },
    { code: 'SS', name: 'South Sudan', namePl: 'Sudan Południowy' },
    { code: 'LY', name: 'Libya', namePl: 'Libia' },
    { code: 'TN', name: 'Tunisia', namePl: 'Tunezja' },
    { code: 'DZ', name: 'Algeria', namePl: 'Algieria' },
    { code: 'MA', name: 'Morocco', namePl: 'Maroko' },
    { code: 'EH', name: 'Western Sahara', namePl: 'Sahara Zachodnia' },
    { code: 'MR', name: 'Mauritania', namePl: 'Mauretania' },
    { code: 'ML', name: 'Mali', namePl: 'Mali' },
    { code: 'NE', name: 'Niger', namePl: 'Niger' },
    { code: 'TD', name: 'Chad', namePl: 'Czad' },
    { code: 'SN', name: 'Senegal', namePl: 'Senegal' },
    { code: 'GM', name: 'Gambia', namePl: 'Gambia' },
    { code: 'GW', name: 'Guinea-Bissau', namePl: 'Gwinea Bissau' },
    { code: 'GN', name: 'Guinea', namePl: 'Gwinea' },
    { code: 'SL', name: 'Sierra Leone', namePl: 'Sierra Leone' },
    { code: 'LR', name: 'Liberia', namePl: 'Liberia' },
    { code: 'CI', name: 'Ivory Coast', namePl: 'Wybrzeże Kości Słoniowej' },
    { code: 'GH', name: 'Ghana', namePl: 'Ghana' },
    { code: 'TG', name: 'Togo', namePl: 'Togo' },
    { code: 'BJ', name: 'Benin', namePl: 'Benin' },
    { code: 'BF', name: 'Burkina Faso', namePl: 'Burkina Faso' },
    { code: 'CM', name: 'Cameroon', namePl: 'Kamerun' },
    { code: 'CF', name: 'Central African Republic', namePl: 'Republika Środkowoafrykańska' },
    { code: 'CG', name: 'Republic of the Congo', namePl: 'Kongo' },
    { code: 'CD', name: 'Democratic Republic of the Congo', namePl: 'Demokratyczna Republika Konga' },
    { code: 'GA', name: 'Gabon', namePl: 'Gabon' },
    { code: 'GQ', name: 'Equatorial Guinea', namePl: 'Gwinea Równikowa' },
    { code: 'ST', name: 'São Tomé and Príncipe', namePl: 'Wyspy Świętego Tomasza i Książęca' },
    { code: 'AO', name: 'Angola', namePl: 'Angola' },
    { code: 'ZM', name: 'Zambia', namePl: 'Zambia' },
    { code: 'ZW', name: 'Zimbabwe', namePl: 'Zimbabwe' },
    { code: 'BW', name: 'Botswana', namePl: 'Botswana' },
    { code: 'NA', name: 'Namibia', namePl: 'Namibia' },
    { code: 'SZ', name: 'Eswatini', namePl: 'Eswatini' },
    { code: 'LS', name: 'Lesotho', namePl: 'Lesotho' },
    { code: 'MW', name: 'Malawi', namePl: 'Malawi' },
    { code: 'MZ', name: 'Mozambique', namePl: 'Mozambik' },
    { code: 'MG', name: 'Madagascar', namePl: 'Madagaskar' },
    { code: 'MU', name: 'Mauritius', namePl: 'Mauritius' },
    { code: 'SC', name: 'Seychelles', namePl: 'Seszele' },
    { code: 'KM', name: 'Comoros', namePl: 'Komory' },
    { code: 'CV', name: 'Cape Verde', namePl: 'Republika Zielonego Przylądka' },
    
    // Oceania
    { code: 'AU', name: 'Australia', namePl: 'Australia' },
    { code: 'NZ', name: 'New Zealand', namePl: 'Nowa Zelandia' },
    { code: 'PG', name: 'Papua New Guinea', namePl: 'Papua Nowa Gwinea' },
    { code: 'FJ', name: 'Fiji', namePl: 'Fidżi' },
    { code: 'SB', name: 'Solomon Islands', namePl: 'Wyspy Salomona' },
    { code: 'VU', name: 'Vanuatu', namePl: 'Vanuatu' },
    { code: 'NC', name: 'New Caledonia', namePl: 'Nowa Kaledonia' },
    { code: 'PF', name: 'French Polynesia', namePl: 'Polinezja Francuska' },
    { code: 'WS', name: 'Samoa', namePl: 'Samoa' },
    { code: 'TO', name: 'Tonga', namePl: 'Tonga' },
    { code: 'KI', name: 'Kiribati', namePl: 'Kiribati' },
    { code: 'TV', name: 'Tuvalu', namePl: 'Tuvalu' },
    { code: 'NR', name: 'Nauru', namePl: 'Nauru' },
    { code: 'PW', name: 'Palau', namePl: 'Palau' },
    { code: 'FM', name: 'Micronesia', namePl: 'Mikronezja' },
    { code: 'MH', name: 'Marshall Islands', namePl: 'Wyspy Marshalla' }
];

// Funkcja do wyboru najlepszego głosu dla języka
function getBestVoice(lang) {
    const voices = window.speechSynthesis.getVoices();
    
    if (lang.startsWith('en')) {
        // Preferowane głosy angielskie (bardziej naturalne)
        const preferredEnglishVoices = [
            'Alex', 'Samantha', 'Karen', 'Victoria', 'Daniel', 'Kate',
            'Oliver', 'Serena', 'Moira', 'Tessa', 'Fiona', 'Veena',
            'Google UK English Female', 'Google UK English Male',
            'Microsoft Zira', 'Microsoft David'
        ];
        
        // Szukaj preferowanego głosu
        for (const preferredName of preferredEnglishVoices) {
            const voice = voices.find(v => 
                v.lang.startsWith('en') && 
                (v.name.includes(preferredName) || v.name === preferredName)
            );
            if (voice) return voice;
        }
        
        // Szukaj głosu angielskiego z lokalnym serwisem
        let preferredVoice = voices.find(voice => 
            voice.lang.startsWith('en') && voice.localService
        );
        
        // Jeśli nie znaleziono lokalnego, szukaj dowolnego angielskiego
        if (!preferredVoice) {
            preferredVoice = voices.find(voice => voice.lang.startsWith('en'));
        }
        
        return preferredVoice || null;
    } else if (lang.startsWith('pl')) {
        // Szukaj głosu w preferowanym języku
        let preferredVoice = voices.find(voice => 
            voice.lang.startsWith(lang) && voice.localService
        );
        
        // Jeśli nie znaleziono lokalnego, szukaj dowolnego w języku
        if (!preferredVoice) {
            preferredVoice = voices.find(voice => voice.lang.startsWith(lang));
        }
        
        // Jeśli nadal nie znaleziono, szukaj podobnego języka
        if (!preferredVoice) {
            preferredVoice = voices.find(voice => 
                voice.lang.includes('pl') || voice.name.toLowerCase().includes('polish')
            );
        }
        
        return preferredVoice || null;
    }
    
    // Dla innych języków
    let preferredVoice = voices.find(voice => 
        voice.lang.startsWith(lang) && voice.localService
    );
    
    if (!preferredVoice) {
        preferredVoice = voices.find(voice => voice.lang.startsWith(lang));
    }
    
    return preferredVoice || null;
}

// Funkcja do wymowy tekstu z lepszą jakością
function speakText(text, lang) {
    // Najpierw spróbuj użyć natywnego iOS message handler
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.speakText) {
        const rate = lang.startsWith('pl') ? 0.85 : (lang.startsWith('en') ? 0.88 : 0.9);
        const pitch = 1.0;
        
        window.webkit.messageHandlers.speakText.postMessage({
            text: text,
            lang: lang,
            rate: rate,
            pitch: pitch
        });
        
        // Zwróć obiekt z onend dla kompatybilności
        return {
            onend: null,
            cancel: function() {}
        };
    }
    
    // Fallback do Web Speech API
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        
        // Wybierz najlepszy głos dla języka
        const voice = getBestVoice(lang);
        if (voice) {
            utterance.voice = voice;
        }
        
        // Parametry dla bardziej naturalnej wymowy
        if (lang.startsWith('pl')) {
            // Dla polskiego: wolniejsza, bardziej naturalna wymowa
            utterance.rate = 0.85;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;
        } else if (lang.startsWith('en')) {
            // Dla angielskiego: bardziej naturalna wymowa
            utterance.rate = 0.88;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;
        } else {
            // Dla innych języków
            utterance.rate = 0.9;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;
        }
        
        window.speechSynthesis.speak(utterance);
        return utterance;
    }
    return null;
}

// Funkcja do wymowy nazwy kraju po polsku i angielsku
function pronounceCountry(country) {
    // Zatrzymaj poprzednie wymowy
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    
    // Sprawdź czy używamy natywnego iOS handlera
    const isNativeHandler = window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.speakText;
    
    if (isNativeHandler) {
        // Dla natywnego handlera - wymów po polsku, potem po angielsku z opóźnieniem
        speakText(country.namePl, 'pl-PL');
        
        // Szacunkowy czas wymowy (około 1 sekunda na słowo)
        const estimatedTime = country.namePl.split(' ').length * 1000 + 500;
        setTimeout(() => {
            speakText(country.name, 'en-US');
        }, estimatedTime);
    } else {
        // Dla Web Speech API
        // Upewnij się, że głosy są załadowane
        if (window.speechSynthesis && window.speechSynthesis.getVoices().length === 0) {
            window.speechSynthesis.addEventListener('voiceschanged', () => {
                pronounceCountry(country);
            });
            return;
        }
        
        // Wymów po polsku
        const polishUtterance = speakText(country.namePl, 'pl-PL');
        
        if (polishUtterance) {
            polishUtterance.onend = () => {
                // Po zakończeniu polskiej wymowy, wymów po angielsku
                setTimeout(() => {
                    speakText(country.name, 'en-US');
                }, 400);
            };
        }
    }
}

// Funkcja do tworzenia elementu flagi
function createFlagElement(country) {
    const flagItem = document.createElement('div');
    flagItem.className = 'flag-item';
    
    const img = document.createElement('img');
    img.src = `https://flagcdn.com/w160/${country.code.toLowerCase()}.png`;
    img.alt = country.name;
    img.loading = 'lazy';
    
    const nameDiv = document.createElement('div');
    nameDiv.className = 'country-name';
    nameDiv.textContent = country.namePl;
    
    flagItem.appendChild(img);
    flagItem.appendChild(nameDiv);
    
    flagItem.addEventListener('click', () => {
        flagItem.classList.add('clicked');
        pronounceCountry(country);
        setTimeout(() => {
            flagItem.classList.remove('clicked');
        }, 1000);
    });
    
    return flagItem;
}

// Funkcja do tworzenia elementu flagi z możliwością własnego URL
function createFlagElementWithUrl(country, flagUrl) {
    const flagItem = document.createElement('div');
    flagItem.className = 'flag-item';
    
    const img = document.createElement('img');
    img.src = flagUrl;
    img.alt = country.name;
    img.loading = 'lazy';
    
    const nameDiv = document.createElement('div');
    nameDiv.className = 'country-name';
    nameDiv.textContent = country.namePl;
    
    flagItem.appendChild(img);
    flagItem.appendChild(nameDiv);
    
    flagItem.addEventListener('click', () => {
        flagItem.classList.add('clicked');
        pronounceCountry(country);
        setTimeout(() => {
            flagItem.classList.remove('clicked');
        }, 1000);
    });
    
    return flagItem;
}

// Funkcja do wyświetlania flag
function displayFlags() {
    // Flaga Unii Europejskiej
    const euFlagsContainer = document.getElementById('eu-flags');
    const euFlag = {
        code: 'EU',
        name: 'European Union',
        namePl: 'Unia Europejska'
    };
    // Używamy specjalnego URL dla flagi UE
    const euFlagUrl = 'https://flagcdn.com/w160/eu.png';
    euFlagsContainer.appendChild(createFlagElementWithUrl(euFlag, euFlagUrl));
    
    // Kraje UE
    const euCountriesContainer = document.getElementById('eu-countries');
    euCountries.forEach(country => {
        euCountriesContainer.appendChild(createFlagElement(country));
    });
    
    // Pozostałe kraje
    const otherCountriesContainer = document.getElementById('other-countries');
    otherCountries.forEach(country => {
        otherCountriesContainer.appendChild(createFlagElement(country));
    });
}

// Inicjalizacja po załadowaniu strony
document.addEventListener('DOMContentLoaded', displayFlags);

