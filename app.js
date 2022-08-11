const colors = {
	"latte-rosewater": "#de9584",
	"frappe-rosewater": "#f2d5cf",
	"macchiato-rosewater": "#f4dbd6",
	"mocha-rosewater": "#f5e0dc",
	"latte-flamingo": "#dd7878",
	"frappe-flamingo": "#eebebe",
	"macchiato-flamingo": "#f0c6c6",
	"mocha-flamingo": "#f2cdcd",
	"latte-pink": "#ec83d0",
	"frappe-pink": "#f4b8e4",
	"macchiato-pink": "#f5bde6",
	"mocha-pink": "#f5c2e7",
	"latte-mauve": "#8839ef",
	"frappe-mauve": "#ca9ee6",
	"macchiato-mauve": "#c6a0f6",
	"mocha-mauve": "#cba6f7",
	"latte-red": "#d20f39",
	"frappe-red": "#e78284",
	"macchiato-red": "#ed8796",
	"mocha-red": "#f38ba8",
	"latte-maroon": "#e64553",
	"frappe-maroon": "#ea999c",
	"macchiato-maroon": "#ee99a0",
	"mocha-maroon": "#eba0ac",
	"latte-peach": "#fe640b",
	"frappe-peach": "#ef9f76",
	"macchiato-peach": "#f5a97f",
	"mocha-peach": "#fab387",
	"latte-yellow": "#e49320",
	"frappe-yellow": "#e5c890",
	"macchiato-yellow": "#eed49f",
	"mocha-yellow": "#f9e2af",
	"latte-green": "#40a02b",
	"frappe-green": "#a6d189",
	"macchiato-green": "#a6da95",
	"mocha-green": "#a6e3a1",
	"latte-teal": "#179299",
	"frappe-teal": "#81c8be",
	"macchiato-teal": "#8bd5ca",
	"mocha-teal": "#94e2d5",
	"latte-sky": "#04a5e5",
	"frappe-sky": "#99d1db",
	"macchiato-sky": "#91d7e3",
	"mocha-sky": "#89dceb",
	"latte-sapphire": "#209fb5",
	"frappe-sapphire": "#85c1dc",
	"macchiato-sapphire": "#7dc4e4",
	"mocha-sapphire": "#74c7ec",
	"latte-blue": "#2a6ef5",
	"frappe-blue": "#8caaee",
	"macchiato-blue": "#8aadf4",
	"mocha-blue": "#87b0f9",
	"latte-lavender": "#7287fd",
	"frappe-lavender": "#babbf1",
	"macchiato-lavender": "#b7bdf8",
	"mocha-lavender": "#b4befe",
	"latte-text": "#4c4f69",
	"frappe-text": "#c6ceef",
	"macchiato-text": "#c5cff5",
	"mocha-text": "#c6d0f5",
	"latte-subtext1": "#5c5f77",
	"frappe-subtext1": "#b5bddc",
	"macchiato-subtext1": "#b3bce0",
	"mocha-subtext1": "#b3bcdf",
	"latte-subtext0": "#6c6f85",
	"frappe-subtext0": "#a5acc9",
	"macchiato-subtext0": "#a1aacb",
	"mocha-subtext0": "#a1a8c9",
	"latte-overlay2": "#7c7f93",
	"frappe-overlay2": "#949bb7",
	"macchiato-overlay2": "#8f97b7",
	"mocha-overlay2": "#8e95b3",
	"latte-overlay1": "#8c8fa1",
	"frappe-overlay1": "#838aa4",
	"macchiato-overlay1": "#7d84a2",
	"mocha-overlay1": "#7b819d",
	"latte-overlay0": "#9ca0b0",
	"frappe-overlay0": "#737891",
	"macchiato-overlay0": "#6c728d",
	"mocha-overlay0": "#696d86",
	"latte-surface2": "#acb0be",
	"frappe-surface2": "#62677e",
	"macchiato-surface2": "#5a5f78",
	"mocha-surface2": "#565970",
	"latte-surface1": "#bcc0cc",
	"frappe-surface1": "#51566c",
	"macchiato-surface1": "#484c64",
	"mocha-surface1": "#43465a",
	"latte-surface0": "#ccd0da",
	"frappe-surface0": "#414559",
	"macchiato-surface0": "#363a4f",
	"mocha-surface0": "#313244",
	"latte-base": "#eff1f5",
	"frappe-base": "#303446",
	"macchiato-base": "#24273a",
	"mocha-base": "#1e1e2e",
	"latte-mantle": "#e6e9ef",
	"frappe-mantle": "#292c3c",
	"macchiato-mantle": "#1e2030",
	"mocha-mantle": "#181825",
	"latte-crust": "#dce0e8",
	"frappe-crust": "#232634",
	"macchiato-crust": "#181926",
	"mocha-crust": "#11111b",
};

module.exports.themes = [
	{
		name: "catppuccin-mocha", // theme name in kebab-case
		displayName: "Catppuccin Mocha", // formatted theme name
		theme: {
			// Background, foreground, and highlight values nested directly in the theme
			// object will serve as the default overwrites for all properties you add.
			background: {
				default: colors["mocha-base"], // primary background color: ;
				success: colors["mocha-green"], // POST request, 200 OK, parameter names
				notice: colors["mocha-yellow"], // PATCH request
				warning: colors["mocha-mauve"], // PUT request
				danger: colors["mocha-red"], // DELETE request
				surprise: colors["mocha-peach"], // accent (Dashboard link, GET request,
				// SEND button, branch button, add plugin button)
				info: colors["mocha-sapphire"], // OPTIONS AND HEAD request
			},
			foreground: {
				default: colors["mocha-text"], // primary font color
				success: colors["mocha-surface0"], // secondary font color for success background: ;
				notice: colors["mocha-text"], // secondary font color for notice background
				warning: colors["mocha-surface0"], // secondary font color for warning background
				danger: colors["mocha-surface0"], // secondary font color for danger background
				surprise: colors["mocha-text"], // secondary font color for surprise background
				info: colors["mocha-red"], // secondary font color for info background
			},
			highlight: {
				default: colors["mocha-overlay2"], // sidebar highlight color: ;
			},
			// The styles object targets sub-components of the Insomnia application.
			styles: {
				sidebar: {
					background: {
						default: colors["mocha-base"],
					},
				},
				appHeader: {
					foreground: {
						surprise: colors["mocha-surface0"], // header branch button font color
					},
				},
				paneHeader: {
					foreground: {
						surprise: colors["mocha-base"], // pane accent font color
						info: colors["mocha-text"], // pane response font color
					},
				},
				editor: {
					foreground: {
						success: colors["mocha-surface0"], // secondary font color for success background: ;
						notice: colors["mocha-text"], // secondary font color for notice background
						warning: colors["mocha-surface0"], // secondary font color for warning background
						danger: colors["mocha-surface0"], // secondary font color for danger background
						surprise: colors["mocha-text"], // secondary font color for surprise background
						info: colors["mocha-text"], // secondary font color for info background
					},
				},
				dialog: {
					background: {
						default: colors["mocha-base"], // modal primary background color
					},
					foreground: {
						default: colors["mocha-text"], // modal primary font color
						success: colors["mocha-surface0"], // secondary font color for success background: ;
						notice: colors["mocha-red"], // secondary font color for notice background
						warning: colors["mocha-surface0"], // secondary font color for warning background
						danger: colors["mocha-surface0"], // secondary font color for danger background
						surprise: colors["mocha-surface0"], // secondary font color for surprise background
						info: colors["mocha-text"], // secondary font color for info background
					},
				},
				tooltip: {
					background: {
						default: colors["mocha-base"], // modal primary background color
					},
					foreground: {
						default: colors["mocha-text"], // modal primary font color
						success: colors["mocha-surface0"], // secondary font color for success background: ;
						notice: colors["mocha-text"], // secondary font color for notice background
						warning: colors["mocha-surface0"], // secondary font color for warning background
						danger: colors["mocha-surface0"], // secondary font color for danger background
						surprise: colors["mocha-text"], // secondary font color for surprise background
						info: colors["mocha-text"], // secondary font color for info background
					},
				}
			},
		},
	},
];
