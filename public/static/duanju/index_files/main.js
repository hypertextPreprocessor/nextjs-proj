/**
 * Playback History Management
 * Handles storing and retrieving video playback history from localStorage
 */

function setLang(newLang) {
    //获取当前的url，然后替换lang
    const url = new URL(window.location.href);
    console.log(url);
    //获取path
    const path = url.pathname;
    console.log(path);
    //zh_CN/play/64049.html
    //获取path的第1个
    const lang = path.split('/')[1] ?? '';
    console.log(lang);
    //如何path是在 'en' 'zh_CN' 'zh_TW'
    if(['en', 'zh_CN', 'zh_TW'].includes(lang)) {
        url.pathname = path.replace(lang, newLang);
    } else {
        url.pathname = '/' + newLang +  path;
    }
    console.log(url.pathname);
    window.location.href = url.toString();
    return false;
}

/**
 * Playback History Management
 * Handles storing and retrieving video playback history from localStorage
 */

// Function to save current video to playback history
function saveToPlaybackHistory(videoId, videoTitle, videoAvatar) {
    // Get current video data
    const videoData = {
        id: videoId,
        title: videoTitle,
        avatar: videoAvatar,
        timestamp: new Date().getTime()
    };
    
    // Get existing history or create new array
    let playbackHistory = localStorage.getItem('playbackHistory');
    playbackHistory = playbackHistory ? JSON.parse(playbackHistory) : [];
    
    // Remove this video if it already exists in history (to avoid duplicates)
    playbackHistory = playbackHistory.filter(item => item.id !== videoData.id);
    
    // Add current video to the beginning of the array
    playbackHistory.unshift(videoData);
    
    // Keep only the most recent 10 videos
    if (playbackHistory.length > 10) {
        playbackHistory = playbackHistory.slice(0, 10);
    }
    
    // Save back to localStorage
    localStorage.setItem('playbackHistory', JSON.stringify(playbackHistory));
}

// Function to get playback history
function getPlaybackHistory() {
    const history = localStorage.getItem('playbackHistory');
    return history ? JSON.parse(history) : [];
}

// Function to clear playback history
function clearPlaybackHistory() {
    localStorage.removeItem('playbackHistory');
    return [];
}

const isNumber = (val) => {
    return typeof val !== 'boolean' && !isNaN(val) && val !== '' && val !== null;
  }

// Function to navigate to a video from history
function navigateToVideo(videoId) {
    const lang = document.documentElement.getAttribute('lang') || 'en';
    //判断是否为数字
    let url = "/";
    if(isNumber(videoId)) {
        url = `/${lang}/play/${videoId}.html`;
    } else {
        url = `/${lang}/play/${videoId}`;
    }
    window.location.href = url;
}

// Function to format time difference
function formatTimeDiff(timestamp) {
    const now = new Date().getTime();
    const diff = now - timestamp;
    
    // Convert to seconds, minutes, hours, days
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const lang = document.documentElement.getAttribute('lang') || 'en';
    
    if (days > 0) {
        return days + (days === 1 ? translate('day ago', lang) : translate('days ago', lang));
    } else if (hours > 0) {
        return hours + (hours === 1 ? translate('hour ago', lang) : translate('hours ago', lang));
    } else if (minutes > 0) {
        return minutes + (minutes === 1 ? translate('minute ago', lang) : translate('minutes ago', lang));
    } else {
        return translate('just now', lang);
    }
}

function translate(key, lang) {
    const translations = {
        'en': {
            'day ago': 'day ago',
            'days ago': 'days ago',
            'hour ago': 'hour ago',
            'hours ago': 'hours ago',
            'minute ago': 'minute ago',
            'minutes ago': 'minutes ago',
            'just now': 'just now',
            'Playback History is empty.': 'Playback History is empty.',
        },
        'zh_CN': {
            'day ago': '天前',
            'days ago': '天前',
            'hour ago': '小时前',
            'hours ago': '小时前',
            'minute ago': '分钟前',
            'minutes ago': '分钟前',
            'just now': '刚刚',
            'Playback History is empty.': '播放历史为空',
        },
        'zh_TW': {
            'day ago': '天前',
            'days ago': '天前',
            'hour ago': '小时前',
            'hours ago': '小时前',
            'minute ago': '分鐘前',
            'minutes ago': '分鐘前',
            'just now': '剛剛',
            'Playback History is empty.': '播放歷史為空',
        },
    };
    return translations[lang][key] || key;
}

