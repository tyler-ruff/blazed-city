const siteConfig = {
    siteTitle: "Blazed City",
    website: 'www.blazed.city', 
    icon: 'https://blazed.sirv.com/logo/Beaker-White.png', 
    twitter: 'BlazedLabs',
    fbAppId: '503698127531557',
    theme: '0040bf',
    company: 'Blazed Labs LLC',
    motto: 'We turn Dreams into Reality.',
    nav: [{
        text: "Home",
        url: "https://blazed.world/"
    },
    {
        text: "User Portal",
        url: "https://blazed.monster/"
    },
    {
        text: "Cities",
        url: "https://blazed.city/"
    }],
    footer: [{
        text: "Home",
        url: "https://blazed.world/"
    },
    {
        text: "User Portal",
        url: "https://blazed.monster/"
    },
    {
        text: "Cities",
        url: "https://blazed.city/"
    }]
};

const firebaseConfig = {
    apiKey: "AIzaSyDk16j5v4q7-jzUaDVQFY_5i4Ssy9LCjbY",
    authDomain: "blazed-city.firebaseapp.com",
    projectId: "blazed-city",
    storageBucket: "blazed-city.appspot.com",
    messagingSenderId: "58777314507",
    appId: "1:58777314507:web:c46d8ba32b81215beb274e"
};

function show_burger(event){
    document.getElementById('header-mobile').classList.remove('hidden');
}

function hide_burger(event){
    document.getElementById('header-mobile').classList.add('hidden');
}

function hide_user_panel(event = null){
	document.getElementById('user-panel').classList.add('hidden');
	document.getElementById('toggle-user-bar').innerHTML = "My Blazed";
	document.getElementById('user-bar-icon').innerHTML = `<svg fill="#ffffff" class="inline-flex w-4 h-4" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512.02 319.26"><path d="M5.9 48.96 48.97 5.89c7.86-7.86 20.73-7.84 28.56 0l178.48 178.48L434.5 5.89c7.86-7.86 20.74-7.82 28.56 0l43.07 43.07c7.83 7.84 7.83 20.72 0 28.56l-192.41 192.4-.36.37-43.07 43.07c-7.83 7.82-20.7 7.86-28.56 0l-43.07-43.07-.36-.37L5.9 77.52c-7.87-7.86-7.87-20.7 0-28.56z"/></svg>`;
}

function toggle_user_panel(event = null){
	if(document.getElementById('user-panel').classList.contains('hidden')){
		document.getElementById('user-panel').classList.remove('hidden');
		document.getElementById('toggle-user-bar').innerHTML = "Close";
		document.getElementById('user-bar-icon').innerHTML = `<svg fill="#ffffff" class="inline-flex w-4 h-4" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>`;
		document.getElementById('main-content').addEventListener('mouseup', hide_user_panel);
	} else {
		hide_user_panel();
	}
}

function  build_user_bar(){
	const userBar = f('div');
	userBar.id = "user-panel";
    userBar.classList.add('hidden', 'justify-between', 'flex', 'bg-gray-400', 'border-b', 'border-gray-800', 'py-5', 'pl-3', 'md:px-10');
    const authStatus = f('span');
    authStatus.classList.add('justify-start', 'inline-flex');
    authStatus.innerHTML = 'Not logged in.';
    const authWrapper = f('div');
    authWrapper.classList.add('justify-end', 'inline-flex');
    const login = f('a');
    login.href = "/login";
    login.innerHTML = "Login";
    login.classList.add('px-3', 'hover:underline');
    const register = f('a');
    register.href = "/register";
    register.innerHTML = "Register";
    register.classList.add('px-3', 'hover:underline');
    authWrapper.appendChild(login);
    authWrapper.appendChild(register);
    userBar.appendChild(authStatus);
    userBar.appendChild(authWrapper);
    return userBar;
}

function build_menu(config, page){
    const header = f('header');
    header.classList.add('header', 'bg-gradient-to-t', 'from-blue-900', 'to-blue-800');
    header.id = "Top";
    const innerWrapper = f('div');
    innerWrapper.classList.add('max-w-screen-xl', 'px-4', 'mx-auto', 'sm:px-6', 'lg:px-8');
    const innerMoreWrapper = f('div');
    innerMoreWrapper.classList.add('flex', 'items-center', 'justify-between', 'h-16');
    const logoWrapper = f('div');
    logoWrapper.classList.add('flex-1', 'md:flex', 'md:items-center', 'md:gap-12')
    const logoLink = f('a');
    logoLink.classList.add('block', 'text-teal-300', 'hover:opacity-75');
    logoLink.title = config.siteTitle;
    logoLink.href = 'https://' + config.website;
    const logo = f('img');
    logo.src = config.icon + "?w=50&h=50";
    logo.width = "50";
    logo.height = "50";
    logoLink.appendChild(logo);
    logoWrapper.appendChild(logoLink);
    innerMoreWrapper.appendChild(logoWrapper);
    const menuWrapper = f('div');
    menuWrapper.classList.add('md:flex', 'md:items-center', 'md:gap-12');
    const menu = f('nav');
    menu.classList.add('hidden', 'md:block');
    const menuList = f('ul');
    menuList.classList.add('flex', 'items-center', 'gap-6', 'text-sm');
    for(let i = 0; i < config.menu.length; i++){
        const listElement = f('li');
        const menuItem = f('a');
        menuItem.classList.add('text-white', 'transition', 'hover:text-white/75', 'hover:underline');
        if(i === page){
            menuItem.classList.add('underline');
        }
        menuItem.href = config.menu[i].url;
        menuItem.innerHTML = config.menu[i].text;
        listElement.appendChild(menuItem);
        menuList.appendChild(listElement);
    }
    const userButtonListElement = f('li');
    const userButton = f('a');
    userButton.classList.add('cursor-pointer', 'text-white', 'transition', 'hover:text-white/75', 'group');
    userButton.innerHTML = `
		<span class="inline-flex text-white">
	    	<i id="user-bar-icon" class="inline-flex text-white">
	    		<svg fill="#ffffff" class="inline-flex w-4 h-4" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512.02 319.26"><path d="M5.9 48.96 48.97 5.89c7.86-7.86 20.73-7.84 28.56 0l178.48 178.48L434.5 5.89c7.86-7.86 20.74-7.82 28.56 0l43.07 43.07c7.83 7.84 7.83 20.72 0 28.56l-192.41 192.4-.36.37-43.07 43.07c-7.83 7.82-20.7 7.86-28.56 0l-43.07-43.07-.36-.37L5.9 77.52c-7.87-7.86-7.87-20.7 0-28.56z"/></svg>
	    	</i>
	    	&nbsp; &nbsp;
	    	<span id="toggle-user-bar" class="group-hover:underline">My Blazed</span>
    	</spam>
    `;
    userButton.addEventListener('mouseup', toggle_user_panel);
    userButtonListElement.appendChild(userButton);
    menuList.appendChild(userButtonListElement);
    menu.appendChild(menuList);
    menuWrapper.appendChild(menu);
    innerMoreWrapper.appendChild(menuWrapper);

    const closeButtonWrapper = f('div');
    closeButtonWrapper.classList.add('block', 'md:hidden');
    const closeButton = f('button');
    closeButton.classList.add('p-2', 'text-white', 'transition', 'bg-gray-800', 'rounded', 'hover:text-white/75');
    closeButton.addEventListener('mouseup', show_burger);
    closeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    `;
    closeButtonWrapper.appendChild(closeButton);
    innerMoreWrapper.appendChild(closeButtonWrapper);
    innerWrapper.appendChild(innerMoreWrapper);
    header.appendChild(innerWrapper);
    const userBar = build_user_bar();
    header.appendChild(userBar);
    return header;
}

function build_mobile_menu(config, page){
    const section = f('section');
    section.classList.add('md:hidden');
    const menuWrapper = f('div');
    menuWrapper.classList.add('hidden', 'fixed', 'inset-y-0', 'right-0', 'z-50', 'flex');
    menuWrapper.id = "header-mobile";
    const innerWrapper = f('div');
    innerWrapper.classList.add('w-screen');
    const innerWrapperColor = f('div');
    innerWrapperColor.classList.add('flex', 'flex-col', 'h-full', 'divide-y', 'divide-gray-200', 'bg-gray-50');
    const inmostWrapper = f('div');
    const header = f('header');
    header.classList.add('flex', 'items-center', 'justify-between', 'h-16', 'pl-6');
    const menuLabel = f('span');
    menuLabel.classList.add('text-sm', 'font-medium', 'tracking-widest', 'uppercase');
    menuLabel.innerHTML = 'Menu';
    const burgerButton = f('button');
    burgerButton.classList.add('w-16', 'h-16', 'border-l', 'border-gray-200')
    burgerButton.type = "button";
    burgerButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
    `;
    burgerButton.addEventListener('mouseup', hide_burger);

    
    header.appendChild(menuLabel);
    header.appendChild(burgerButton);
    inmostWrapper.appendChild(header);
    innerWrapperColor.appendChild(inmostWrapper);
    innerWrapper.appendChild(innerWrapperColor);
    menuWrapper.appendChild(innerWrapper);

    const nav = f('nav');
    nav.classList.add('flex', 'flex-col', 'text-sm', 'font-medium', 'text-gray-500', 'border-t', 'border-b', 'border-gray-200', 'divide-y', 'divide-gray-200');

    for(let i = 0; i < config.menu.length; i++){
        const menuItem = f('a');
        menuItem.href = config.menu[i].url;
        menuItem.innerHTML = config.menu[i].text;
        menuItem.classList.add('px-6', 'py-3', 'hover:bg-gray-200');
        if(page === i){
            menuItem.classList.remove('hover:bg-gray-200')
            menuItem.classList.add('bg-gray-100', 'hover:bg-gray-100');
        }
        nav.appendChild(menuItem);
    }
    inmostWrapper.appendChild(nav);

    section.appendChild(menuWrapper);
    return section;
}

function build_header(config, page){
    const blz_header = f('blz-header');
    const mobile_menu = build_mobile_menu(config, page);
    const menu = build_menu(config, page);
    blz_header.appendChild(mobile_menu);
    blz_header.appendChild(menu);
    document.body.appendChild(blz_header);
}

function build_content(config, content){
    const main = f('main');
    const article = f('article');
    article.classList.add('bg-gray-50');
    article.innerHTML = content;
    main.appendChild(article);
    document.body.appendChild(main);
}

function build_footer(config){
    const blz_footer = f('blz-footer');
    const footer = f('footer');
    footer.classList.add('bg-gray-900');
    const innerWrapper = f('div');
    innerWrapper.classList.add('relative', 'max-w-screen-xl', 'px-4', 'py-16', 'mx-auto', 'sm:px-6', 'lg:px-8', 'lg:pt-24');
    const toTopWrapper = f('div');
    toTopWrapper.classList.add('absolute', 'top-4', 'sm:top-6', 'lg:top-8', 'right-4', 'sm:right-6', 'lg:right-8');
    const toTopLink = f('a');
    toTopLink.classList.add('inline-block', 'p-2', 'text-teal-300', 'transition', 'bg-gray-700', 'rounded-full', 'sm:p-3', 'lg:p-4', 'hover:bg-gray-600');
    toTopLink.href = "#Top";
    toTopLink.innerHTML = `
        <span class="sr-only">Back to top</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
        </svg>
    `;
    toTopWrapper.appendChild(toTopLink);
    innerWrapper.appendChild(toTopWrapper);

    const logoWrapper = f('div');
    logoWrapper.classList.add('lg:flex', 'lg:items-end', 'lg:justify-between');
    const logoInnerWrapper = f('div');
    const logoInnermostWrapper = f('div');
    logoInnermostWrapper.classList.add('flex', 'justify-center', 'text-teal-300', 'lg:justify-start'); 
    const logo = f('img');
    logo.src = config.icon + "?w=50&h=50";

    logoInnermostWrapper.appendChild(logo);
    logoInnerWrapper.appendChild(logoInnermostWrapper);
    logoWrapper.appendChild(logoInnerWrapper);
    innerWrapper.appendChild(logoWrapper);
    

    const motto = f('p');
    motto.classList.add('max-w-md', 'mx-auto', 'mt-6', 'leading-relaxed', 'text-center', 'text-gray-400', 'lg:text-left')
    logoInnerWrapper.appendChild(motto);

    const menu = f('nav');
    menu.classList.add('mt-12', 'lg:mt-0');
    
    const menuList = f('ul');
    menuList.classList.add('flex', 'flex-wrap', 'justify-center', 'gap-6', 'lg:justify-end', 'md:gap-8', 'lg:gap-12');

    for(let i = 0; i < config.footer.length; i++){
        const listItem = f('li');
        const linkItem = f('a');
        linkItem.classList.add('text-white', 'transition', 'hover:text-white/75');
        linkItem.href = config.footer[i].url;
        linkItem.innerHTML = config.footer[i].text;
        listItem.appendChild(linkItem);
        menuList.appendChild(listItem);
    }
    menu.appendChild(menuList);
    logoWrapper.appendChild(menu);
    const year = new Date().getFullYear();
    const copyright = f('p');
    copyright.classList.add('mt-12', 'text-sm', 'text-center', 'text-gray-400', 'lg:text-right');
    copyright.innerHTML = `Copyright &copy; ${year}, Blazed Labs LLC. All rights reserved.`;
    logoInnerWrapper.appendChild(logoInnermostWrapper);
    logoInnerWrapper.appendChild(copyright);
    footer.appendChild(innerWrapper);
    blz_footer.appendChild(footer);
    document.body.appendChild(blz_footer);
}
