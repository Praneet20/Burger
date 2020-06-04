import React from 'react'
import Aux from "../../HighOrderComponent/Aux";
import "./Layout.css"

const Layout = (props) => {
    return (
        <Aux>
            <div>
                <h1>Toolbar, sidebar, Backdrop</h1>
            </div>
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout
