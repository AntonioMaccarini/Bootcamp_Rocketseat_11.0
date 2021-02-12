import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpg';
import Header from './components/Header';

function App(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('http://localhost:3333/projects').then(response => {
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject(){
        // projects.push(`Novo projeto ${Date.now()}`);

        //setProjects([...projects,`Novo projeto ${Date.now()}`]);

        const response = await api.post('projects', {
            title: `Mobile com REact  ${Date.now()}`,
            owner: "Antonio Maccarini"
        });

        const project = response.data;

        setProjects([... projects, project]);
    }

    return (
    <>
    
    <Header title = "Projects"/>

    <img width= {300} src={backgroundImage}/>

    <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
    </ul>
    <button type="button" onClick ={handleAddProject}>Adicionar projeto</button>
    
    </>
    );
}

export default App;