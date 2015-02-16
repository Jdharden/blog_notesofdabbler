// Copyright 2008 Google Inc.
// All Rights Reserved.

(function() {
  var results = {"east timor": "TP", "samoa": "WS", "japan": "JP", "french southern territories": "TF", "tokelau": "TK", "cayman islands": "KY", "azerbaijan": "AZ", "north korea": "KP", "djibouti": "DJ", "french guiana": "GF", "malta": "MT", "guinea-bissau": "GW", "hungary": "HU", "taiwan": "TW", "cyprus": "CY", "haiti": "HT", "barbados": "BB", "eastern asia": "UN030", "bhutan": "BT", "yugoslavia": "YU", "lithuania": "LT", "congo - kinshasa": "CD", "micronesia": "UN057", "andorra": "AD", "union of soviet socialist republics": "SU", "rwanda": "RW", "aruba": "AW", "liberia": "LR", "argentina": "AR", "norway": "NO", "sierra leone": "SL", "somalia": "SO", "ghana": "GH", "falkland islands": "FK", "belarus": "BY", "saint helena": "SH", "cuba": "CU", "middle africa": "UN017", "central asia": "UN143", "french polynesia": "PF", "southern europe": "UN039", "guatemala": "GT", "isle of man": "IM", "belgium": "BE", "world": "UN001", "congo - brazzaville": "CG", "southern asia": "UN034", "kazakhstan": "KZ", "burkina faso": "BF", "aland islands": "AX", "kyrgyzstan": "KG", "netherlands": "NL", "portugal": "PT", "central america": "UN013", "denmark": "DK", "philippines": "PH", "montserrat": "MS", "senegal": "SN", "moldova": "MD", "latvia": "LV", "croatia": "HR", "bosnia and herzegovina": "BA", "chad": "TD", "switzerland": "CH", "western europe": "UN155", "mali": "ML", "bulgaria": "BG", "jamaica": "JM", "albania": "AL", "angola": "AO", "colombia": "CO", "serbia and montenegro": "CS", "northern america": "UN021", "palestinian territory": "PS", "lebanon": "LB", "malaysia": "MY", "christmas island": "CX", "mozambique": "MZ", "greece": "GR", "zaire": "ZR", "nicaragua": "NI", "new zealand": "NZ", "southern africa": "UN018", "canada": "CA", "afghanistan": "AF", "qatar": "QA", "oceania": "UN009", "palau": "PW", "turkmenistan": "TM", "equatorial guinea": "GQ", "pitcairn": "PN", "guinea": "GN", "panama": "PA", "nepal": "NP", "central african republic": "CF", "luxembourg": "LU", "solomon islands": "SB", "south america": "UN005", "swaziland": "SZ", "cook islands": "CK", "tuvalu": "TV", "netherlands antilles": "AN", "namibia": "NA", "nauru": "NR", "venezuela": "VE", "australia and new zealand": "UN053", "outlying oceania": "QO", "europe": "UN150", "brunei": "BN", "iran": "IR", "british indian ocean territory": "IO", "united arab emirates": "AE", "south georgia and the south sandwich islands": "GS", "saint kitts and nevis": "KN", "sri lanka": "LK", "paraguay": "PY", "china": "CN", "armenia": "AM", "western asia": "UN145", "kiribati": "KI", "belize": "BZ", "tunisia": "TN", "ukraine": "UA", "melanesia": "UN054", "yemen": "YE", "northern mariana islands": "MP", "libya": "LY", "trinidad and tobago": "TT", "mayotte": "YT", "gambia": "GM", "finland": "FI", "macedonia": "MK", "americas": "UN019", "mauritius": "MU", "antigua and barbuda": "AG", "niue": "NU", "syria": "SY", "dominican republic": "DO", "people's democratic republic of yemen": "YD", "jersey": "JE", "burma": "BU", "pakistan": "PK", "romania": "RO", "seychelles": "SC", "metropolitan france": "FX", "czech republic": "CZ", "myanmar": "MM", "el salvador": "SV", "egypt": "EG", "neutral zone": "NT", "guam": "GU", "africa": "UN002", "papua new guinea": "PG", "wallis and futuna": "WF", "united states": "US", "austria": "AT", "greenland": "GL", "mongolia": "MN", "ivory coast": "CI", "thailand": "TH", "honduras": "HN", "niger": "NE", "fiji": "FJ", "comoros": "KM", "turkey": "TR", "united kingdom": "GB", "madagascar": "MG", "iraq": "IQ", "bangladesh": "BD", "mauritania": "MR", "eastern europe": "UN151", "bolivia": "BO", "uruguay": "UY", "france": "FR", "bahamas": "BS", "vatican": "VA", "slovakia": "SK", "gibraltar": "GI", "ireland": "IE", "laos": "LA", "british virgin islands": "VG", "south korea": "KR", "anguilla": "AI", "malawi": "MW", "ecuador": "EC", "israel": "IL", "peru": "PE", "algeria": "DZ", "serbia": "RS", "tanzania": "TZ", "puerto rico": "PR", "montenegro": "ME", "tajikistan": "TJ", "svalbard and jan mayen": "SJ", "togo": "TG", "jordan": "JO", "chile": "CL", "martinique": "MQ", "oman": "OM", "turks and caicos islands": "TC", "nigeria": "NG", "spain": "ES", "sao tome and principe": "ST", "georgia": "GE", "eastern africa": "UN014", "bouvet island": "BV", "asia": "UN142", "northern europe": "UN154", "american samoa": "AS", "polynesia": "UN061", "morocco": "MA", "sweden": "SE", "heard island and mcdonald islands": "HM", "gabon": "GA", "guyana": "GY", "western africa": "UN011", "grenada": "GD", "guadeloupe": "GP", "hong kong": "HK", "russia": "RU", "u.s. virgin islands": "VI", "cocos islands": "CC", "bahrain": "BH", "zimbabwe": "ZW", "estonia": "EE", "mexico": "MX", "reunion": "RE", "india": "IN", "new caledonia": "NC", "lesotho": "LS", "antarctica": "AQ", "australia": "AU", "saint vincent and the grenadines": "VC", "saint pierre and miquelon": "PM", "uganda": "UG", "burundi": "BI", "kenya": "KE", "macao": "MO", "botswana": "BW", "italy": "IT", "western sahara": "EH", "south africa": "ZA", "east germany": "DD", "cambodia": "KH", "ethiopia": "ET", "bermuda": "BM", "vanuatu": "VU", "marshall islands": "MH", "cameroon": "CM", "zambia": "ZM", "benin": "BJ", "brazil": "BR", "saudi arabia": "SA", "singapore": "SG", "faroe islands": "FO", "iceland": "IS", "saint lucia": "LC", "monaco": "MC", "costa rica": "CR", "united states minor outlying islands": "UM", "slovenia": "SI", "germany": "DE", "caribbean": "UN029", "san marino": "SM", "dominica": "DM", "suriname": "SR", "eritrea": "ER", "tonga": "TO", "maldives": "MV", "south-eastern asia": "UN035", "uzbekistan": "UZ", "northern africa": "UN015", "norfolk island": "NF", "poland": "PL", "indonesia": "ID", "cape verde": "CV", "sudan": "SD", "liechtenstein": "LI", "vietnam": "VN", "guernsey": "GG", "kuwait": "KW"};
  gviz.util.RegionCoder.dictionaryReady('countries_en', results);
})();