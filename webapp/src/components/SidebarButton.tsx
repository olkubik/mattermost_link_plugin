import React from 'react';
import {Tooltip} from 'react-bootstrap';
import {Components} from 'mattermost-webapp/types';
import logo from '../assets/a2b_logo.jpg';

type Props = {
    theme: Components.Theme;
}

const SidebarButton = ({theme}: Props) => {
    const handleClick = () => {
        window.open('https://a2b.su', '_blank');
    };

    return (
        <Tooltip id='external-link-tooltip' placement='right' content='Открыть сайт'>
            <button
                className='icon-btn'
                onClick={handleClick}
                style={{
                    color: theme.sidebarHeaderTextColor,
                    margin: '0 10px',
                    fontSize: '20px',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                }}
            >
                <img 
                    src={logo}
                    alt="A2B Logo"
                    style={{
                        width: '24px',
                        height: '24px',
                        objectFit: 'contain',
                    }}
                />
            </button>
        </Tooltip>
    );
};

export default SidebarButton;