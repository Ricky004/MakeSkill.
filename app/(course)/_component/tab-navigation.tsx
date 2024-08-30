"use client"

import { useState } from "react";
import StarRating from "./star-rating";


const TabNavigation = () => {
    const [activeTab, setActiveTab] = useState("description")

    const Content = () => {
        switch (activeTab) {
            case 'description':
                return (
                    <div className="flex flex-row gap-3">
                      <p className="text-slate-600">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type 
                      specimen book. It has survived not only five centuries, but also the leap into 
                      electronic typesetting, remaining essentially unchanged. It was popularised in 
                      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                      and more recently with desktop publishing software like Aldus PageMaker including 
                      versions of Lorem Ipsum.
                      </p>
                      <StarRating />
                    </div>
                );
            case 'discussion':
                return <p>This is the discussion content.</p>;
            case 'reviews':
                return <p>This is the reviews content.</p>;
            case 'resources':
                return <p>This is the resources content.</p>;
            case 'instructor':
                return <p>This is the instructor content.</p>;
            default:
                return null;
        }
    }

    return (
        <>
            <div className="p-3 w-full">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                        <button
                            onClick={() => setActiveTab('description')}
                            className={`${activeTab === 'description'
                                    ? 'border-sky-600 text-sky-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap pb-4 px-1 border-b-4 font-medium text-sm`}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setActiveTab('discussion')}
                            className={`${activeTab === 'discussion'
                                    ? 'border-sky-600 text-sky-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap pb-4 px-1 border-b-4 font-medium text-sm`}
                        >
                            Reviews
                        </button>
                        <button
                            onClick={() => setActiveTab('reviews')}
                            className={`${activeTab === 'reviews'
                                    ? 'border-sky-600 text-sky-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap pb-4 px-1 border-b-4 font-medium text-sm`}
                        >
                            Discussion
                        </button>
                        <button
                            onClick={() => setActiveTab('resources')}
                            className={`${activeTab === 'resources'
                                    ? 'border-sky-600 text-sky-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap pb-4 px-1 border-b-4 font-medium text-sm`}
                        >
                            Resources
                        </button>
                        <button
                            onClick={() => setActiveTab('instructor')}
                            className={`${activeTab === 'instructor'
                                    ? 'border-sky-600 text-sky-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap pb-4 px-1 border-b-4 font-medium text-sm`}
                        >
                            Instructor
                        </button>
                    </nav>
                </div>
                <div className="pt-5">{Content()}</div>
            </div>
        </>
    );
}

export default TabNavigation;