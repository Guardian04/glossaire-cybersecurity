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
};

function SearchBar({ dataDebutant, dataExpert, debutantIsHover, expertIsHover, openGestion } : Props) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setQuery(inputValue);

        const searchResultsDebutant = searchDebutant(inputValue, dataDebutant);
        const searchResultsExpert = searchExpert(inputValue, dataExpert);
        const searchResults = searchResultsDebutant.concat(searchResultsExpert);
        setResults(searchResults);
    };

    const searchDebutant = (query: string, data: TypeDebutant) => {
        if (query === "") {
            return [];
        }

        const results: any[] = [];

        for (const theme in data) {
            for (const defKey in data[theme]) {
                const definition = data[theme][defKey];
                if (definition.title.toLowerCase().includes(query.toLowerCase())) {
                    results.push(definition);
                }
            }
        }

        return results;
    };
    
    const searchExpert = (query: string, data: TypeExpert) => {
        if (query === "") {
            return [];
        }

        const results: any[] = [];

        for (const axe in data) {
            for (const theme in data[axe]) {
                for (const defKey in data[axe][theme]) {
                    const definition = data[axe][theme][defKey];
                    if (definition.title.toLowerCase().includes(query.toLowerCase())) {
                        results.push(definition);
                    }
                }
            }
        }

        return results;
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

    return (
        <div className={`search-bar ${openGestion ? "center" : ""}`} id={id()}>
            <input className="custom-input" type="text" placeholder="     Rechercher..." value={query} onChange={handleSearch} />
            {query !== "" && (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>{result.title} {result.level}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBar;
