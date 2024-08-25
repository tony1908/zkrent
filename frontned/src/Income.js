import {
    ArrowLeftIcon,
} from "lucide-react";
import React, {useEffect} from "react";

const Income = () => {
    // Hook to load external scripts
    function useScript(src) {
        useEffect(() => {
            const node = document.createElement('script');
            node.src = src;
            node.type = 'text/javascript';
            node.async = true;
            node.onload = createWidget;
            document.body.appendChild(node);
            return () => {
                document.body.removeChild(node);
            };
        }, [src]);
    }

    // Function to create and open the Belvo widget
    async function createWidget() {
        const successCallbackFunction = (link, institution) => {
            // Handle success case
            console.log('Link:', link, 'Institution:', institution);
            // Redirect to '/income' after success
            window.location.replace('/identity');
        };

        const onExitCallbackFunction = (data) => {
            // Handle exit case
            console.log('Exit:', data);
            // Redirect to '/income' after exit
            window.location.replace('/identity');
        };

        const onEventCallbackFunction = (data) => {
            // Handle event case
            console.log('Event:', data);
        };

        const config = {
            callback: (link, institution) => successCallbackFunction(link, institution),
            onExit: (data) => onExitCallbackFunction(data),
            onEvent: (data) => onEventCallbackFunction(data),
        };

        window.belvoSDK.createWidget("", config).build();
    }

    useScript('https://cdn.belvo.io/belvo-widget-1-stable.js');
    return (
        <div>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <header className="flex items-center justify-between p-4">
                    <button className="text-gray-600">
                        <ArrowLeftIcon size={24}/>
                    </button>
                    <h1 className="text-lg font-semibold">Application Steps</h1>
                    <button className="text-gray-600"></button>
                </header>
            </div>
            <div className="p-6 flex justify-center">
                <div className="flex justify-center items-center">
                    <div id="belvo"></div>
                </div>
            </div>
        </div>
    );
};

export default Income;
