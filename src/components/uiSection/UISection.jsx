import React, { useRef, useEffect, useState } from 'react';
import "./uiSection.css";
import { useTranslation } from 'react-i18next';




const UISection = () => {
    const [t, i18next] = useTranslation();


    return (
        <div className="ui-section-container">
            <div className='ui-inner-container'>
                <div className='enumerator-container'>
                    <div className='horizontal-line'>

                    </div>
                    <p className='p2 off-black-800 bolden'>Bonus</p>
                </div>
                <h2 className='off-black-800'>UI Design</h2>
                <p >Want to see more work? You can explore my UI conceptual shots</p>
                <div className='space-16'></div>
                <button id="new-main-btn-ui" onClick={() => { window.open("https://www.behance.net/felipeandrade27") }}>
                    View UI work
                </button>
            </div>
        </div>
    )
}

export default UISection