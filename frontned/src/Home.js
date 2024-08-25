import {
    MapIcon,
    SearchIcon,
    HomeIcon,
    BuildingIcon,
    BedDoubleIcon,
    HeartIcon,
    CalendarIcon,
    MapPinIcon,
    MenuIcon,
} from "lucide-react";
import React from "react";
import { render } from "react-dom";
const Home = () => {
    return (
        <div className="max-w-full bg-gray-100 min-h-screen" data-id="element-0">
            <main className="pb-16" data-id="element-1">
                <div className="relative" data-id="element-2">
                    <div className="h-64 bg-gray-300" data-id="element-3">
                        {/* Placeholder for map */}
                        <div
                            className="absolute inset-0 flex items-center justify-center"
                            data-id="element-4"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.639370974179!2d-99.16315968459547!3d19.4169914868924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff362839db47%3A0x3b02efedbc6baf2d!2sRoma%20Norte%2C%20Cuauht%C3%A9moc%2C%2006700%20Mexico%20City%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1692871422307!5m2!1sen!2sus"
                                className="w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                                data-id="element-5"
                                title="Roma Norte, Mexico City"
                            ></iframe>
                        </div>
                    </div>
                    <div
                        className="absolute top-4 left-4 right-4 flex justify-between items-center"
                        data-id="element-6"
                    >
                        <div
                            className="flex items-center bg-white rounded-full px-4 py-2 shadow"
                            data-id="element-7"
                        >
                            <MapPinIcon
                                className="w-5 h-5 text-gray-500 mr-2"
                                data-id="element-8"
                            />
                            <span className="text-sm" data-id="element-9">
                Warsawa, Provinci Mazowsze
              </span>
                        </div>
                        <button
                            className="bg-white p-2 rounded-full shadow"
                            data-id="element-10"
                        >
                            <MenuIcon
                                className="w-6 h-6 text-gray-700"
                                data-id="element-11"
                            />
                        </button>
                    </div>
                </div>

                <div className="px-4 -mt-6 relative z-10" data-id="element-12">
                    <div
                        className="bg-white rounded-lg shadow-lg p-4 flex items-center"
                        data-id="element-13"
                    >
                        <SearchIcon
                            className="w-5 h-5 text-gray-400 mr-3"
                            data-id="element-14"
                        />
                        <input
                            type="text"
                            placeholder="Where do you wanna go?"
                            className="flex-grow text-gray-700 outline-none"
                            data-id="element-15"
                        />
                        <button className="ml-3" data-id="element-16">
                            <MenuIcon
                                className="w-5 h-5 text-gray-400"
                                data-id="element-17"
                            />
                        </button>
                    </div>
                </div>

                <div className="flex justify-between px-4 mt-6" data-id="element-18">
                    <button
                        className="flex-1 bg-green-500 text-white py-2 rounded-lg mr-2 flex items-center justify-center"
                        data-id="element-19"
                    >
                        <HomeIcon className="w-5 h-5 mr-2" data-id="element-20" />
                        House
                    </button>
                    <button
                        className="flex-1 bg-white text-gray-700 py-2 rounded-lg mx-2 flex items-center justify-center border"
                        data-id="element-21"
                    >
                        <BuildingIcon className="w-5 h-5 mr-2" data-id="element-22" />
                        Apartment
                    </button>
                    <button
                        className="flex-1 bg-white text-gray-700 py-2 rounded-lg ml-2 flex items-center justify-center border"
                        data-id="element-23"
                    >
                        <BedDoubleIcon className="w-5 h-5 mr-2" data-id="element-24" />
                        Other
                    </button>
                </div>

                <div className="mt-6 px-4" data-id="element-25" onClick={() => {
                    window.location.replace('/detail')
                }}>
                    <div
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                        data-id="element-26"
                    >
                        <img
                            src="https://img10.naventcdn.com/avisos/18/01/44/32/74/76/360x266/1482440621.jpg?isFirstImage=true"
                            alt="Golwen Centre Place"
                            className="w-full h-48 object-cover"
                            data-id="element-27"
                        />
                        <div className="p-4" data-id="element-28">
                            <h3
                                className="text-lg font-semibold text-gray-800"
                                data-id="element-29"
                            >
                                Golwen Centre Place
                            </h3>
                            <p className="text-gray-600 text-sm mt-1" data-id="element-30">
                                This home also comes equipped with modern amenities.
                            </p>
                            <div
                                className="flex justify-between items-center mt-4"
                                data-id="element-31"
                            >
                                <div className="flex items-center" data-id="element-32">
                                    <HomeIcon
                                        className="w-5 h-5 text-green-500 mr-2"
                                        data-id="element-33"
                                    />
                                    <span className="text-sm text-gray-700" data-id="element-34">
                    Home
                  </span>
                                </div>
                                <HeartIcon
                                    className="w-6 h-6 text-gray-400"
                                    data-id="element-35"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 px-4" data-id="element-53">
                    <div
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                        data-id="element-54"
                    >
                        <img
                            src="https://img10.naventcdn.com/avisos/18/01/43/73/71/21/360x266/1466511132.jpg?isFirstImage=true"
                            alt="Sunny Meadows Villa"
                            className="w-full h-48 object-cover"
                            data-id="element-55"
                        />
                        <div className="p-4" data-id="element-56">
                            <h3
                                className="text-lg font-semibold text-gray-800"
                                data-id="element-57"
                            >
                                Sunny Meadows Villa
                            </h3>
                            <p className="text-gray-600 text-sm mt-1" data-id="element-58">
                                A beautiful villa with a spacious garden and modern interiors.
                            </p>
                            <div
                                className="flex justify-between items-center mt-4"
                                data-id="element-59"
                            >
                                <div className="flex items-center" data-id="element-60">
                                    <HomeIcon
                                        className="w-5 h-5 text-green-500 mr-2"
                                        data-id="element-61"
                                    />
                                    <span className="text-sm text-gray-700" data-id="element-62">
                    Home
                  </span>
                                </div>
                                <HeartIcon
                                    className="w-6 h-6 text-gray-400"
                                    data-id="element-63"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer
                className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2"
                data-id="element-36"
            >
                <button className="flex flex-col items-center" data-id="element-37">
                    <HomeIcon className="w-6 h-6 text-green-500" data-id="element-38" />
                    <span className="text-xs mt-1 text-green-500" data-id="element-39">
            Home
          </span>
                </button>
                <button className="flex flex-col items-center" data-id="element-40">
                    <CalendarIcon
                        className="w-6 h-6 text-gray-400"
                        data-id="element-41"
                    />
                    <span className="text-xs mt-1 text-gray-400" data-id="element-42">
            Book
          </span>
                </button>
                <button className="flex flex-col items-center" data-id="element-43">
                    <MapIcon className="w-6 h-6 text-gray-400" data-id="element-44" />
                    <span className="text-xs mt-1 text-gray-400" data-id="element-45">
            Trips
          </span>
                </button>
                <button className="flex flex-col items-center" data-id="element-46">
                    <HeartIcon className="w-6 h-6 text-gray-400" data-id="element-47" />
                    <span className="text-xs mt-1 text-gray-400" data-id="element-48">
            Wishlist
          </span>
                </button>
                <button className="flex flex-col items-center" data-id="element-49">
                    <MenuIcon className="w-6 h-6 text-gray-400" data-id="element-50" />
                    <span className="text-xs mt-1 text-gray-400" data-id="element-51">
            Account
          </span>
                </button>
            </footer>
        </div>
    );
};
export default Home;

