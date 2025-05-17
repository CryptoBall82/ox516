'use client';

import React, { useState, useEffect } from 'react';
import { DefaultHeader } from '@/components/DefaultHeader'; // Assuming this is your fixed main app header
import { NavbarLeagues } from '@/components/NavbarLeagues'; // Assuming this is your fixed bottom navbar
import { useRouter } from 'next/navigation';

// Define TypeScript Interfaces
interface Field {
    name: string;
    status: "Open" | "Closed" | "Unknown";
    updateTime: string;
    message?: string;
}

interface Park {
    name: string;
    address: string;
    overallStatus: "Open" | "Closed" | "Unknown";
    fields: Field[];
}

// This is the "Park Field Status" title bar.
// It will now scroll with the page, appearing below your main DefaultHeader.
const PageTitleBar: React.FC = () => {
    return (
        // Removed: fixed, top-[80px], left-0, right-0, z-10
        // Added: py-4 (original p-4 included horizontal padding, retaining vertical)
        // Retained: bg-blue-600, text-white, shadow-md, h-[60px], flex, items-center, justify-center
        <header className="bg-blue-600 text-white py-4 shadow-md h-[60px] flex items-center justify-center">
            <h1 className="text-2xl font-bold text-center leading-[28px]">AYBA Field Statuses</h1>
        </header>
    );
};

// Main FieldStatusDisplay Component
const FieldStatusDisplay: React.FC = () => {
    const [parksData, setParksData] = useState<Park[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('https://raw.githubusercontent.com/CryptoBall82/umpire-scraper/main/field_statuses.json');
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data: Park[] = await response.json();
                setParksData(data);
            } catch (e: any) {
                console.error("Fetch error:", e);
                setError(e.message || 'Failed to fetch field status data.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const displayParks = parksData;

    const getStatusColor = (status: "Open" | "Closed" | "Unknown") => {
        switch (status) {
            case "Open": return "bg-green-100 text-green-700 border-green-500";
            case "Closed": return "bg-red-100 text-red-700 border-red-500";
            case "Unknown": return "bg-yellow-100 text-yellow-700 border-yellow-500";
            default: return "bg-gray-100 text-gray-700 border-gray-500";
        }
    };

    // Base class for the content area of loading/error/no-data states
    const statusMessageWrapperClass = "p-6 text-center text-gray-700 text-xl";

    return (
        <div className="min-h-screen bg-gray-100"> 
            <DefaultHeader /> {/* Your application's main header (assumed fixed, 80px tall) */}
            
            {/* Wrapper for all scrollable content below DefaultHeader and above NavbarLeagues */}
            {/* pt-[80px] to clear fixed DefaultHeader. */}
            {/* pb-[60px] to clear fixed NavbarLeagues (assumed 60px tall). */}
            <div className="pt-[80px] pb-[60px]">
                <PageTitleBar />   {/* The "Park Field Status" bar, now scrolls */}

                {loading && (
                    <div className={statusMessageWrapperClass}>Loading field statuses...</div>
                )}
                {error && (
                    <div className={`${statusMessageWrapperClass} bg-red-100 border border-red-400 text-red-700 rounded-lg`}>
                        Error loading data: {error}
                    </div>
                )}
                {!loading && !error && (!displayParks || displayParks.length === 0) && (
                    <div className={statusMessageWrapperClass}>No field status data available.</div>
                )}

                {!loading && !error && displayParks && displayParks.length > 0 && (
                    <main className="p-4 md:p-6 lg:p-8"> {/* No extra pt/pb needed here as parent handles it */}
                        <div className="space-y-6">
                            {displayParks.map((park) => (
                                <div key={park.name} className={`p-4 md:p-6 rounded-lg bg-white shadow-lg border-l-4 ${getStatusColor(park.overallStatus).split(' ')[2]}`}>
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3">
                                        <h2 className="text-2xl font-semibold text-blue-700">{park.name}</h2>
                                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(park.overallStatus)}`}>
                                            Overall: {park.overallStatus}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">{park.address}</p>
                                    <p className="text-xs text-gray-500 mb-4">Last Updated: {park.fields[0]?.updateTime || 'N/A'}</p>
                                    {park.fields && park.fields.length > 0 && (
                                        <div className="mt-4 space-y-3">
                                            <h3 className="text-md font-semibold text-gray-800">Field Details:</h3>
                                            {park.fields.map((field, index) => (
                                                <div key={index} className={`p-3 rounded-md border ${getStatusColor(field.status)}`}>
                                                    <div className="flex justify-between items-center">
                                                        <p className="font-medium text-gray-800">{field.name}</p>
                                                        <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(field.status)}`}>{field.status}</span>
                                                    </div>
                                                    {field.message && <p className="text-xs text-gray-600 mt-1"><em>Note: {field.message}</em></p>}
                                                    <p className="text-xs text-gray-500 mt-1">Updated: {field.updateTime}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </main>
                )}
            </div>
            <NavbarLeagues /> {/* Your application's navigation bar (assumed fixed, 60px tall) */}
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div className="App">
            <FieldStatusDisplay />
        </div>
    );
};

// If this file IS `src/app/leagues/ayba/fieldstatus/page.tsx`, 
// then `FieldStatusDisplay` should be the default export.
export default FieldStatusDisplay; 
// Changed default export to FieldStatusDisplay as it's likely the page component.
