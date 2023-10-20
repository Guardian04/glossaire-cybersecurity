import React, { useState } from 'react';
import "./SearchBar.css";

interface TypeDebutant {
    [key: string]: {
        [key: string]: {
            title: string;
            description: string;
            source: string[];
            level: string;
        };
    };
};

interface TypeExpert {
    [key : string]: {
        [key: string]: {
            [key: string]: {
                title: string;
                description: string;
                source: string[];
                level: string;
            };
        };
    };
};

interface Props {
    dataDebutant: TypeDebutant;
    dataExpert: TypeExpert;
    debutantIsHover: boolean;
    expertIsHover: boolean;
    openGestion: boolean;
    indexMenuDebutant: number | null;
    setIndexMenuDebutant: (index: number | null) => void;
    indexMenuExpert: number | null;
    toggleLevel: () => void;
    setIndexDefinition: (index: number | null) => void;
};

function SearchBar({ dataDebutant, dataExpert, debutantIsHover, expertIsHover, openGestion, indexMenuDebutant, setIndexMenuDebutant, indexMenuExpert, toggleLevel, setIndexDefinition } : Props) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [position, setPosition] = useState<any[]>([]);

    const MenuSelectedOrNot = indexMenuDebutant !== null || indexMenuExpert!== null ? "selected" : "";

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setQuery(inputValue);

        const searchResultsDebutant = searchDebutant(inputValue, dataDebutant)[0];
        const searchResultsExpert = searchExpert(inputValue, dataExpert)[0];

        const positionSearchDebutant = searchDebutant(inputValue, dataDebutant)[1];
        const positionSearchExpert = searchExpert(inputValue, dataExpert)[1];

        if (debutantIsHover) {
            setResults(searchResultsDebutant);
            setPosition(positionSearchDebutant);
        } else {
            setResults(searchResultsExpert);
            setPosition(positionSearchExpert);
        }
    };

    const searchDebutant = (query: string, data: TypeDebutant) => {
        if (query === "") {
            return [];
        }

        const results: any[] = [];
        const position: any[] = [];

        for (const [index1, theme] of Object.entries(data)) {
            for (const [index2, definition] of Object.entries(theme)) {

                if (definition.title.toLowerCase().includes(query.toLowerCase())) {
                    results.push({ title: definition.title, description: definition.description, source: definition.source });
                    position.push([Object.keys(data).indexOf(index1), Object.keys(theme).indexOf(index2)]);
                }
            }
        }

        return [results, position];
    };
    
    const searchExpert = (query: string, data: TypeExpert) => {
        if (query === "") {
            return [];
        }

        const results: any[] = [];
        const position: any[] = [];

        for (const [index1, axe] of Object.entries(data)) {
            for (const [index2, theme] of Object.entries(axe)) {
                for (const [index3, def] of Object.entries(theme)) {
                    const definition = def;
                    if (definition.title.toLowerCase().includes(query.toLowerCase())) {
                        results.push(definition);
                        position.push([Object.keys(data).indexOf(index1), Object.keys(axe).indexOf(index2), Object.keys(theme).indexOf(index3)]);
                    }
                }
            }
        }

        return [results, position];
    };

    const id = () => {
        if (debutantIsHover) {
            return "debutant";
        } else if (expertIsHover) {
            return "expert";
        } else {
            return "";
        }
    };

    const handleClickLi = (title: string, pos: any) => {
        if (!openGestion) {
            toggleLevel();
        }
        setIndexMenuDebutant(pos[0]);
        setIndexDefinition(pos[1]);
        setQuery(title);
        setResults([]);
        setPosition([]);
    };

    return (
        <div className={`search-bar ${openGestion ? "center" : ""} ${MenuSelectedOrNot}`} id={id()}>
            <input className="custom-input" type="text" placeholder="     Rechercher..." value={query} onChange={handleSearch} />
            <div className="list-search">
                <div className="list-content">
                    {query !== "" && (
                        <ul>
                            {results.map((result, index) => {
                                const pos = position[index];
                                console.log(result.level);
                                return (
                                    <li key={index} onClick={() => handleClickLi(result.title, pos)}>{result.title} {result.level}</li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
