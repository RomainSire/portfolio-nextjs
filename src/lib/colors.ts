/**
 * Convert hex color to RGB
 * @param hex - Hex color
 * @returns RGB color in an array
 */
function hexToRgb(hex: string): [number, number, number] {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	if (!result || !result[1] || !result[2] || !result[3]) throw new Error("Invalid hex color");
	return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}

/**
 * Convert RGB color to hex
 * @param r - Red
 * @param g - Green
 * @param b - Blue
 * @returns Hex color
 */
function rgbToHex(r: number, g: number, b: number): string {
	r = Math.max(0, Math.min(255, r));
	g = Math.max(0, Math.min(255, g));
	b = Math.max(0, Math.min(255, b));

	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

/**
 * Calculate luminance of a color
 * @param rgbColor - RGB color in an array
 * @returns Luminance
 */
function luminance(rgbColor: [number, number, number]): number {
	const a = rgbColor.map((v) => {
		v /= 255;
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	}) as [number, number, number];
	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

/**
 * Calculate contrast ratio between two colors
 * @param hexcolor1 - Hex color 1
 * @param hexcolor2 - Hex color 2
 * @returns Contrast ratio
 */
export function contrast(hexcolor1: string, hexcolor2: string): number {
	const rgb1 = hexToRgb(hexcolor1);
	const rgb2 = hexToRgb(hexcolor2);

	const lum1 = luminance(rgb1);
	const lum2 = luminance(rgb2);
	const brightest = Math.max(lum1, lum2);
	const darkest = Math.min(lum1, lum2);

	return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Lighten a color
 * @param hex - Hex color
 * @param percent - Percentage to lighten
 * @returns Lightened color
 */
export function lightenColor(hex: string, percent: number): string {
	let [r, g, b] = hexToRgb(hex);

	r = Math.round(r * (1 + percent / 100));
	g = Math.round(g * (1 + percent / 100));
	b = Math.round(b * (1 + percent / 100));

	r = Math.min(255, r);
	g = Math.min(255, g);
	b = Math.min(255, b);

	return rgbToHex(r, g, b);
}
