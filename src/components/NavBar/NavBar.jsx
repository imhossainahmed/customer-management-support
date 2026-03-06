import React from 'react';

const NavBar = () => {
    return (
    <div className='bg-base-100 shadow-sm top-0 z-50 sticky'>
    <div className="navbar container mx-auto">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li>
                <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
    </div>
    </div>
    );
};

export default NavBar;