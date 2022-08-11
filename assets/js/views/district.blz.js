/*
    Blazed Fire for HTML5 Framework Example
    > Views in the "Index" namespace
*/

function build_routes(page){
    let data = {};
    switch(page){
        case 'home':
        default:
            data = {
                pageNum: 3,
                content: single()
            };
            break;
        }
    return data;
}

function single(){
    return `
        <div class="flex items-center py-4 mt-1 overflow-y-auto whitespace-nowrap">
            <a href="https://www.blazed.city/" class="text-gray-600 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            </a>
            <span class="mx-5 text-gray-500 dark:text-gray-300">
                /
            </span>
            <a href="" id="city-breadcrumb" class="text-gray-600 dark:text-gray-200 hover:underline"></a>
            <span class="mx-5 text-gray-500 dark:text-gray-300">
                /
            </span>
            <span id="district-breadcrumb" class="text-gray-600 dark:text-gray-200">
                Profile
            </span>
        </div>
        <hr />
        <h1 class="text-center text-3xl py-10 font-bold" id="page-title">
            View District
        </h1>
        <hr />
        <h2 id="district-nickname" class="text-center text-2xl py-5"></h2>
        <h3 class="text-xl py-5 pb-10 text-center">
            City: <span id="district-city"></span>
        </h3>
        <hr />
        <div class=" girid grid-col-1 md:grid-col-2 lg:grid-col-3 mt-5 py-10" id="district-places"></div>
        <!--
        Pagination,
        TODO: build pagination based on total pages of buildings
        <div class="flex mb-10">
            <a href="#" class="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-not-allowed dark:bg-gray-900 dark:text-gray-600">
                previous
            </a>

            <a href="#" class="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:flex dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                1
            </a>

            <a href="#" class="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:flex dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                2
            </a>

            <a href="#" class="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:flex dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                3
            </a>

            <a href="#" class="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                Next
            </a>
        </div>
        -->

    `;
}

function about(){
    return `
        <h1 class="text-3xl text-center font-bold">
            About Fire for HTML5
        </h1>
        <p>
            Fire is an HTML5 and javascript framework. It is very simple and very fast.
        </p>
    `;
}
