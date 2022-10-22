import React from 'react';

const Home = ({handleLogout}) => {
    return(
        <section className="home">
            <nav>
                <h2>Welcome</h2>
                <div>Profile</div>
                <div>My courses</div>
                <div>My certifications</div>
                <div>Recommended Courses</div>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    );
};

export default Home;