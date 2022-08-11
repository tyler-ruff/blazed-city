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
                pageNum: 2,
                content: home()
            };
            break;
        }
    return data;
}

function home(){
    return `
        <h1 class="text-center text-3xl py-10 pt-20 font-bold">
        Explore Cities
        </h1>
        <div id="loading-spinner" class="relative mx-auto mb-10 w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        <div class="py-16">  
            <div class="container m-auto px-6 text-gray-500 xl:px-0">
                <div id="city-list" class="mx-auto grid gap-6 w-full lg:grid-cols-3"></div>
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

