import { useState } from 'react';
function Searchcard({ listCard }) {
    const [search, setSearch] = useState("");

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };
    const filteredProjects = listCard.filter(project =>
        project.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="slideshow-wrap">
            <div className="search-card">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={search}
                    onChange={handleSearchChange}
                />
                <div className="search-result">
                    {filteredProjects.map((project, index) => (
                        <div key={index}>
                            <img src={project.gif} alt="" />
                            <p>{project.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Searchcard
