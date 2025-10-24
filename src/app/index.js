'use client';
import React from 'react';
import i18n from '@/i18n/index';
import { I18nextProvider } from 'react-i18next';
import App from '@/app/App';

export default function Index(){
    return <I18nextProvider i18n={i18n} defaultNS={["wallet"]}>
        <App/>
    </I18nextProvider>;
}