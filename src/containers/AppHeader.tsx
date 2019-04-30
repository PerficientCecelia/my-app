import React from 'react';
import photo from '../static/img/photo.jpg';
const AppHeader = () => {
    return (
        <div className='fixed-header-container'>
            <header>
                <span className='proverb'> keep up the good work </span>
                <div className='info-meta'>
                    <img className='header-img' alt='photo' src={photo} />
                    <span className='my-info'>
                        <span className='name'>Cecelia</span>
                        <span className='level'>III</span>
                    </span>
                </div>
            </header>
        </div>
    );
}

export default AppHeader;