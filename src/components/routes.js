


export function Routes({ path, NavMenu, Footer, BodyElement }){
    if(NavMenu === undefined) return null
    return (
        <div>
            <NavMenu />
            <BodyElement />
            <Footer />
        </div>
    )
}