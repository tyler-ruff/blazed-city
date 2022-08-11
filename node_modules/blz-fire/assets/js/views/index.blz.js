/*
    Blazed Fire for HTML5 Framework Example
    > Views in the "Index" namespace
*/

function build_routes(page){
    let data = {};
    switch(page){
        case 'about':
            data = {
                pageNum: 1,
                content: about()
            };
            break;
        case 'home':
        default:
            data = {
                pageNum: 0,
                content: home()
            };
            break;
        }
    return data;
}

function home(){
    return `
        <div class="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
            <div class="max-w-xl mx-auto text-center">
                <h1 class="text-3xl font-extrabold sm:text-5xl">
                We turn Dreams
                <strong class="font-extrabold text-red-700 sm:block">
                    into Reality.
                </strong>
                </h1>
        
                <p class="mt-4 sm:leading-relaxed sm:text-xl">
                Discover the amazing Blazed Fire!
                </p>
        
                <div class="flex flex-wrap justify-center gap-4 mt-8">
                <a href="https://github.com/blazed-space/fire" class="block w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow sm:w-auto active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring" href="/get-started">
                    Repo
                </a>
        
                <a href="https://www.blazedlabs.com/fire-and-ice-solution/" class="block w-full px-12 py-3 text-sm font-medium text-red-600 rounded shadow sm:w-auto hover:text-red-700 active:text-red-500 focus:outline-none focus:ring" href="/about">
                    Learn More
                </a>
                </div>
            </div>
        </div>
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