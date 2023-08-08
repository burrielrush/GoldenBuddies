import React from 'react';

const Navbar = () => {  
    return (
<nav class="navbar">
         <form class="search-box">
         <img src="img/logo.png" class="logo" alt=""/>
             <input type="text" placeholder="search" name="search-query" id="search-input"/>
             <button class="search-btn" type="submit"><img src="img/icon/search.png" class="search-icon" alt=""/></button>
         </form>
         <div class="nav-links">
        <a href="#" class="nav-links"><img src="img/icon/home-fill.png" class="nav-icon" alt=""/></a>
        
        <a href="#" class="nav-links"><img src="img/icon/add-nofill.png" class="nav-icon" alt=""/></a>
        <a href="#" class="nav-links"><img src="img/profile-img.png" class="nav-icon user-profile" alt=""/></a>
    </div>
</nav>
    );
}

export default Navbar;