import {
    ArrowLeftIcon,
    BedDoubleIcon,
    BathIcon,
    CarIcon,
    CalendarIcon,
    SquareIcon,
    ShieldIcon,
    MapPinIcon,
    ShareIcon,
} from "lucide-react";
import { render } from "react-dom";
import React from "react";

const Detail = () => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <header className="flex items-center justify-between p-4 bg-gray-100">
                <button className="text-gray-600">
                    <ArrowLeftIcon size={24} />
                </button>
                <h1 className="text-lg font-semibold">Details</h1>
                <button className="text-gray-600"></button>
            </header>

            <div className="relative">
                <img
                    src="https://img10.naventcdn.com/avisos/18/01/44/32/74/76/360x266/1482440621.jpg?isFirstImage=true"
                    alt="House"
                    className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    12
                </div>
            </div>

            <div className="p-4">
                <h2 className="text-xl font-bold">Golwen Centre Place</h2>
                <div className="flex items-center text-gray-600 mt-1">
                    <MapPinIcon size={16} className="mr-1" />
                    <p className="text-sm">Emilii Plater 669 Warszawa</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="flex items-center">
                        <BedDoubleIcon size={20} className="mr-2 text-gray-500" />
                        <span>3 Beds</span>
                    </div>
                    <div className="flex items-center">
                        <BathIcon size={20} className="mr-2 text-gray-500" />
                        <span>3 Baths</span>
                    </div>
                    <div className="flex items-center">
                        <CarIcon size={20} className="mr-2 text-gray-500" />
                        <span>2 Cars</span>
                    </div>
                    <div className="flex items-center">
                        <CalendarIcon size={20} className="mr-2 text-gray-500" />
                        <span>2012</span>
                    </div>
                    <div className="flex items-center">
                        <SquareIcon size={20} className="mr-2 text-gray-500" />
                        <span>145 m²</span>
                    </div>
                    <div className="flex items-center">
                        <ShieldIcon size={20} className="mr-2 text-gray-500" />
                        <span>3 CCTV</span>
                    </div>
                </div>

                <p className="mt-4 text-gray-600 text-sm">
                    This home site comes equipped with modern amenities, including central
                    heating and air conditioning, ensuring a comfortable environment
                    year-round.
                </p>

                <div className="mt-4">
                    <h3 className="font-semibold mb-2">Location</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.639370974179!2d-99.16315968459547!3d19.4169914868924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff362839db47%3A0x3b02efedbc6baf2d!2sRoma%20Norte%2C%20Cuauht%C3%A9moc%2C%2006700%20Mexico%20City%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1692871422307!5m2!1sen!2sus"
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                        data-id="element-38"
                        title="Roma Norte, Mexico City"
                    ></iframe>
                </div>

                {/* Requirements to Apply Section */}
                <div className="mt-6">
                    <h3 className="font-semibold mb-2">Requirements to Apply</h3>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                        <li>Income greater than $50,000</li>
                        <li>Identity verification</li>
                        <li>Job validation</li>
                    </ul>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Total price</p>
                        <p className="text-xl font-bold">
                            $1,720
                            <span className="text-sm font-normal text-gray-500">
                                /month
                            </span>
                        </p>
                    </div>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold" onClick={() => {
                        window.location.replace('/steps')
                    }}>
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Detail;
