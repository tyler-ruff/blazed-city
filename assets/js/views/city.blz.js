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

function expandMenu(){
    document.getElementById('city-titlebar-menu').classList.remove('hidden');
    document.getElementById('view-dstricts').classList.add('hidden');
    document.getElementById('close-dstricts').classList.remove('hidden');
}

function closeMenu(){
    document.getElementById('city-titlebar-menu').classList.add('hidden');
    document.getElementById('view-dstricts').classList.remove('hidden');
    document.getElementById('close-dstricts').classList.add('hidden');
}

function single(){
    return `
            <h1 id="city-title" class="text-4xl my-10 text-center font-bold"></h1>
            <div id="city-titlebar" class="px-8 py-2 bg-purple-800 text-white dark:bg-gray-900 dark:text-gray-100 mb-5">
            <div class="flex items-center mx-auto container justify-center md:justify-between py-2">
                <div class="hidden md:flex">
                    <span>
                        <a href="https://www.blazed.city/" class="text-white hover:underline">Cities</a>
                        <span id="city-breadcrumb" class="underline"></span>
                    </span>
                </div>
                <a onmousedown="expandMenu();" rel="noopener noreferrer" class="items-center flex gap-2 cursor-pointer" id="view-dstricts">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-6 w-6" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 497.35"><path d="M265.27 59.18c49.11 0 93.84 18.81 127.36 49.61l24.57-13.96-13.84 24.64c31.17 33.6 50.22 78.59 50.22 128.02 0 48.77-18.54 93.22-48.96 126.66l13.8 24.27-24.25-13.65c-33.69 31.64-79.04 51.03-128.9 51.03-49.35 0-94.26-18.98-127.84-50.05l-25.32 14.41 14.28-25.49c-30.7-33.51-49.43-78.16-49.43-127.18 0-49.92 19.43-95.3 51.14-129l-13.4-23.55 23.74 13.36c33.46-30.51 77.98-49.12 126.83-49.12zM258.1 0l21.88 27.53V8.45c0-2.7-.38-4.5-1.15-5.45-1.05-1.29-2.81-1.9-5.28-1.86V0h14.68v1.14c-1.88.25-3.14.56-3.79.94-.63.39-1.14 1.01-1.51 1.89-.36.87-.53 2.37-.53 4.48v37h-1.11l-30-37.05v28.34c0 2.57.58 4.31 1.75 5.22 1.18.9 2.53 1.35 4.04 1.35h1.05v1.14h-15.82v-1.14c2.46-.02 4.16-.53 5.12-1.52.97-1 1.45-2.67 1.45-5.05V5.31l-.93-1.15c-.94-1.21-1.77-2-2.49-2.38-.72-.38-1.76-.6-3.11-.64V0h15.75zm19.64 450.89.33 14.82h-1.34c-.63-3.71-2.18-6.69-4.67-8.95-2.49-2.26-5.17-3.39-8.05-3.39-2.24 0-4 .59-5.3 1.79-1.3 1.18-1.95 2.56-1.95 4.1 0 .98.23 1.85.69 2.62.63 1.02 1.64 2.04 3.05 3.04 1.03.72 3.4 2 7.11 3.84 5.2 2.54 8.71 4.96 10.52 7.22 1.8 2.27 2.69 4.87 2.69 7.79 0 3.71-1.45 6.9-4.34 9.57-2.9 2.67-6.57 4.01-11.03 4.01-1.4 0-2.73-.15-3.97-.43-1.25-.28-2.81-.81-4.69-1.61-1.05-.43-1.91-.64-2.59-.64-.57 0-1.17.22-1.8.66-.64.44-1.15 1.11-1.54 2.02h-1.14v-16.76h1.14c.96 4.7 2.81 8.3 5.55 10.77 2.75 2.47 5.7 3.71 8.87 3.71 2.45 0 4.4-.67 5.86-2 1.45-1.33 2.17-2.87 2.17-4.65 0-1.04-.27-2.05-.83-3.04-.56-.98-1.4-1.91-2.54-2.8-1.14-.88-3.15-2.03-6.03-3.45-4.05-1.98-6.95-3.68-8.72-5.08-1.75-1.39-3.1-2.96-4.05-4.68-.95-1.73-1.42-3.63-1.42-5.7 0-3.54 1.29-6.55 3.9-9.05 2.59-2.49 5.86-3.73 9.82-3.73 1.44 0 2.84.17 4.19.51 1.02.27 2.28.75 3.75 1.46 1.48.7 2.5 1.05 3.1 1.05.57 0 1.01-.17 1.34-.52.32-.34.64-1.18.91-2.5h1.01zm210.79-223.07v18.1h.89c2.83 0 4.87-.89 6.14-2.65 1.27-1.77 2.08-4.37 2.43-7.81h1.27v23.26h-1.27c-.26-2.53-.82-4.61-1.65-6.22-.85-1.62-1.83-2.71-2.94-3.27-1.12-.55-2.74-.83-4.87-.83v12.49c0 2.45.11 3.93.32 4.48.2.55.59 1 1.16 1.34.57.35 1.49.53 2.75.53h2.66c4.14 0 7.47-.97 9.98-2.88 2.5-1.91 4.3-4.82 5.38-8.76H512l-2 14.12h-38.36v-1.14h1.46c1.29 0 2.33-.24 3.11-.7.57-.31 1.01-.83 1.31-1.58.23-.53.36-1.91.36-4.16v-29.3c0-2.02-.06-3.26-.17-3.73-.21-.77-.61-1.36-1.21-1.77-.82-.62-1.95-.93-3.4-.93h-1.46v-1.14h37.14v13.14h-1.27c-.63-3.22-1.52-5.52-2.66-6.92-1.14-1.4-2.75-2.42-4.84-3.08-1.22-.39-3.5-.59-6.85-.59h-4.63zm-422.69-3.06v1.14c-.82.07-1.53.31-2.1.71-.57.41-1.07 1.03-1.52 1.85-.12.27-.8 1.97-2.03 5.1l-13.91 36.66h-1.2l-10.99-28.93-12.18 28.93h-1.16L6.09 233.94c-1.49-3.68-2.52-5.91-3.11-6.68-.59-.77-1.58-1.22-2.98-1.36v-1.14h19.25v1.14c-1.55.05-2.58.28-3.09.72-.52.43-.78.96-.78 1.6 0 .84.54 2.61 1.61 5.33l8.71 21.56 7.05-17.03-1.77-4.59c-1-2.58-1.78-4.31-2.32-5.17-.55-.86-1.18-1.49-1.89-1.85-.7-.38-1.74-.57-3.12-.57v-1.14h21.34v1.14c-1.5.03-2.58.15-3.24.38-.46.14-.81.41-1.07.77-.27.36-.39.78-.39 1.24 0 .51.48 2.06 1.46 4.67l8.08 21.03 7.23-19.03c.76-1.98 1.23-3.34 1.41-4.07.18-.73.26-1.4.26-2.01 0-.91-.31-1.61-.92-2.14-.6-.51-1.78-.79-3.5-.84v-1.14h11.53zm160.82 85.13-56.83 32.33 33.24-59.05 17.57 4.83-122.08-33.56c1.77 43.32 20.05 82.38 48.72 111.04 28.1 28.11 66.21 46.23 108.52 48.6l-29.14-104.19zm-23.29-101.85-31.93-56.13 56.1 31.58 28.2-102.58c-42.29 2.38-80.37 20.5-108.46 48.59-27.95 27.95-46.03 65.78-48.56 107.81l123.52-34.54-18.87 5.27zm99.06-23.43 57.62-32.78-32.02 56.9-20.43-5.62 124.21 34.14c-2.55-42.01-20.61-79.81-48.55-107.75-28.4-28.4-67.01-46.61-109.85-48.66l29.02 103.77zm25.58 98.85 32.81 57.67-58.27-32.8-29.08 105.82c42.82-2.08 81.4-20.28 109.79-48.67 28.68-28.68 46.96-67.76 48.72-111.1l-103.97 29.08zm-63.79-37.51.39.41-36.72 39.27-144.36-39.68h180.69zm2.1-.17-.4-.4 11.49-12.29-13.29 12.78-39.27-36.72 39.68-144.36v180.63l13.19-12.65 24.92-26.66L447 245.78H266.32zm-1.22 3.33 39.27 36.72-35.31 128.47-4.37 15.89V249.56l.41-.45z"/></svg>
                <span class="hover:underline hover:underline focus-visible:underline">
                    Explore
                </span>
                </a>
                <a onmousedown="closeMenu();" rel="noopener noreferrer" class="hidden flex items-center gap-2 hidden cursor-pointer" id="close-dstricts">
                <?xml version="1.0" encoding="utf-8"?><svg class="fill-current h-6 w-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.881px" height="122.88px" viewBox="0 0 122.881 122.88" enable-background="new 0 0 122.881 122.88" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M61.44,0c33.933,0,61.441,27.507,61.441,61.439 c0,33.933-27.508,61.44-61.441,61.44C27.508,122.88,0,95.372,0,61.439C0,27.507,27.508,0,61.44,0L61.44,0z M81.719,36.226 c1.363-1.363,3.572-1.363,4.936,0c1.363,1.363,1.363,3.573,0,4.936L66.375,61.439l20.279,20.278c1.363,1.363,1.363,3.573,0,4.937 c-1.363,1.362-3.572,1.362-4.936,0L61.44,66.376L41.162,86.654c-1.362,1.362-3.573,1.362-4.936,0c-1.363-1.363-1.363-3.573,0-4.937 l20.278-20.278L36.226,41.162c-1.363-1.363-1.363-3.573,0-4.936c1.363-1.363,3.573-1.363,4.936,0L61.44,56.504L81.719,36.226 L81.719,36.226z"/></g></svg>
                <span class="hover:underline hover:underline focus-visible:underline">
                    Close
                </span>
                </a>
            </div>
            </div>
            <div id="city-titlebar-menu" style="z-index:9999; margin-top:-20px; height:980px;" class="hidden absolute bg-purple-800 w-full py-10 text-center">
            <h3 class="text-center text-3xl py-5 font-bold text-white mt-20">
                Districts
            </h3>
            <ul id="city-districts" class="mb-20"></ul>
            </div>
            <div id="loading-spinner" class="relative mx-auto mb-10 w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
            <img id="city-map" class="hidden relative mx-auto" height="900" width="900"/>
        </div>

    `;
}

