export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/backgrounds/coffee.jpg","images/clown-nose.png","images/emojis/angry-face.png","images/emojis/angry-red-face.png","images/emojis/grinning-face.png","images/emojis/hand-point-up.png","images/emojis/sad-face.png","images/emojis/sad-releived-face.png","images/emojis/smiling-face.png","images/gifs/Background.gif","images/gifs/Clapping.gif","images/gifs/drawx.gif","images/gifs/Shouting.gif","images/gifs/Snapping.gif","images/logos/pokemon-logo.png","Model/metadata.json","Model/model.json","Model/weights.bin"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif",".json":"application/json",".bin":"application/octet-stream"},
	_: {
		client: {"start":"_app/immutable/entry/start.712e50e6.js","app":"_app/immutable/entry/app.8e043149.js","imports":["_app/immutable/entry/start.712e50e6.js","_app/immutable/chunks/index.9e75a08f.js","_app/immutable/chunks/singletons.4fb24f19.js","_app/immutable/chunks/index.b22759f5.js","_app/immutable/entry/app.8e043149.js","_app/immutable/chunks/index.9e75a08f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects/Drawx",
				pattern: /^\/projects\/Drawx\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects/Face Filters",
				pattern: /^\/projects\/Face Filters\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects/Pokédex",
				pattern: /^\/projects\/Pokédex\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects/Sound Identifier",
				pattern: /^\/projects\/Sound Identifier\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
