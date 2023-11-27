import React, { ReactNode } from 'react';
import Sidebar_dpt from '../Sidebar/sidebar_opt';
import Header from '../header';

interface Props{
    children: ReactNode | ReactNode[]; // ReactNode is a type that represents anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
}

export default function BaseLayout({ children }: Props) {
    return (
        <div className='layout'>
            <Sidebar_dpt/> 
            <div className="basecontainer">
                <Header/>
                <div className="maincontainer">
                    {children}
                </div>
            </div>
        </div>
    );

}