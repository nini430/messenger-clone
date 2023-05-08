import React from "react";
import SideBar from "../components/sidebar/SideBar";

interface ILayoutProps {
    children:React.ReactNode
}

export default async function UserLayout({children}:ILayoutProps) {

    return (
        <SideBar>
            {children}
        </SideBar>
    )
}