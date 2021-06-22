import react from 'react';
const Header = (props) =>{
    return(
        // <div className="jumbotron mx-auto">
        //     <h1 className="display-1">Food Recipe App</h1>
        // </div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container-fluid">
                <h1 className="display-4">Food Recipe App</h1>
                <div className="input-group mb-3 w-25 mx-auto">
                    <input type="text" className="form-control" placeholder="Search Your Favourite Food Here..." aria-label="Recipient's username" aria-describedby="basic-addon2" value={props.search} onChange={props.onSearch}/>
                    <div className="input-group-append">
                        <span className="input-group-text" onClick={props.getRecipes} id="basic-addon2">Search</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;