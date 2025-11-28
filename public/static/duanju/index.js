
var popText = [

];
if (/zh/i.test(navigator.language)) {
    popText = [
        '爆款短剧免费读档继续！为你解锁全部剧集，随时追随时停。点击立即观看完整剧情，越到后面越精彩！',
        '高能情节即将出现！本剧正在限时免费中，所有剧集均可无限观看。点击即可继续，不花钱不受限，马上爽看！',
        '热门短剧为你推荐！已自动开启全程免费模式，每一集都能看。点击即可继续观看，不花钱也能追到爽！'
    ]
} else if (/en/i.test(navigator.language)) {
    popText = [
        'Hot short dramas are free to watch! Unlocked all episodes, watch anytime, anywhere. Click to watch the full plot, the later the better!',
        'High-energy plot is about to appear! This drama is currently free, all episodes can be watched unlimitedly. Click to continue, no money, no limit, watch now!',
        'Hot short dramas recommended for you! Automatically opened the full free mode, watch every episode. Click to continue watching, no money, no limit, watch now!'
    ]
} else if (/es/i.test(navigator.language)) {
    popText = [
        '¡Drama de éxito gratuito! Todos los episodios pueden verse sin límites. Haz clic para continuar, sin dinero, sin límites, ¡ver ahora!',
        '¡Un nuevo capítulo emocionante está por venir! Este drama está actualmente gratuito, todos los episodios pueden verse sin límites. Haz clic para continuar, sin dinero, sin límites, ¡ver ahora!',
        '¡Drama popular recomendado para ti! Se ha abierto automáticamente el modo gratuito completo, todos los episodios pueden verse. Haz clic para continuar viendo, sin dinero, sin límites, ¡ver ahora!'
    ]
} else if (/id/i.test(navigator.language)) {
    popText = [
        'Drama pendek terpopuler bisa lanjut gratis! Semua episode sudah terbuka untukmu—bebas tonton kapan saja. Klik untuk menonton cerita lengkap, makin lama makin seru!',
        'Adegan penuh aksi sebentar lagi muncul! Drama ini sedang gratis untuk waktu terbatas, semua episode bisa ditonton tanpa batas. Klik untuk lanjut, tanpa bayar dan tanpa batasan, langsung nonton puas!',
        'Drama pendek populer direkomendasikan untukmu! Mode gratis penuh sudah aktif—semua episode bisa ditonton. Klik untuk lanjut menonton, tanpa bayar tetap bisa nonton puas!'
    ]
} else if (/hi-in/i.test(navigator.language)) {
    popText = [
        'हिट शॉर्ट ड्रामा मुफ्त में आगे बढ़ाएँ! आपके लिए सभी एपिसोड अनलॉक हैं—कभी भी देखें, कभी भी रोकें। क्लिक करें और पूरी कहानी अभी देखें, आगे और भी रोमांचक है!',
        'हाई-एनर्जी सीन आने वाले हैं! यह ड्रामा सीमित समय के लिए मुफ्त है, सभी एपिसोड बिना सीमा देखे जा सकते हैं। क्लिक करें और बिना खर्च, बिना रुकावट तुरंत देखें!',
        'हॉट शॉर्ट ड्रामा लामों के लिए मुफ्त! सभी एपिसोड अनलॉक हैं—कभी भी देखें, कभी भी रोकें। क्लिक करें और पूरी कहानी अभी देखें, आगे और भी रोमांचक है!'
    ]
} else if (/tr/i.test(navigator.language)) {
    popText = [
        'Popüler mini dizi ücretsiz olarak devam ediyor! Tüm bölümler senin için kilitsiz—istediğin zaman izle, istediğin zaman durdur. Hemen tıkla ve tüm hikâyeyi izle; ilerledikçe daha da heyecanlı oluyor!',
        'Yüksek enerjili sahneler geliyor! Bu dizi sınırlı süreliğine ücretsiz ve tüm bölümler sınırsız izlenebilir. Devam etmek için tıkla; ücret yok, sınır yok, hemen keyifle izle!',
        'Popüler mini dizi sana öneriliyor! Tam kapsamlı ücretsiz mod aktif—tüm bölümleri izleyebilirsin. Devam etmek için tıkla; ücretsiz olsa da izlerken keyif alacaksın!'
    ]
}
function startDownLoad() {
    var a = document.createElement('a');
    a.href = '/api/download';
    a.click();
}
document.querySelectorAll('a').forEach(a => {
    a.target = '_self';
    a.href = "#";
    a.onclick = function () {
        document.querySelector("#tipPop").classList.remove("hidden");
        document.querySelector("#tipPop p").textContent = popText[Math.floor(Math.random() * 3)]
    }
});

document.querySelector("#tipPop button").onclick = function () {
    document.querySelector("#tipPop").classList.add("hidden");
    //startDownLoad();
    window.parent.postMessage({ signal: "download" });
}

