/**
 * V debugovacim rezimu clanky nezmizi, pouze se zvyrazni rameckem.
 */
var isDebugMode = false;

/**
 * Pokud text obsahuje aspon jeden vyraz z pole expressions, clanek bude
 * skryty.
 *
 * Retezce se prevadi na regularni vyrazy, zpetne lomitko je tedy nutne
 * escapovat: vyrazu /slovo\W/ odpovida retezec "slovo\\W".
 *
 * Ukazka:
 *
 * var expressions = [
 *     "Praha", // Obsahuje velke pismeno, hledani je case-sensitive
 *     "banan", // hledani neni case-sensitive
 *     [ "Frantisek", "Voprsalek" ] // Text musi obsahovat oba vyrazy
 * ];
 */
var expressions = [
	/* Obecne */
	"Zeman",
	"Lán",
	"Hrad(u|ě|em|ní)?\\W", /* Hrad ne, Hradec Králové ano */
	"Ovčáč",

	/* Navsteva dalajlamy (rijen 2016) */
	"dalajlám",
	[ "Herman", "strýc" ],
	[ "Jiří|vyznam", "Brady" ]
];

/* Pomocnik pro pridani noveho webu (detekuje vsechny clanky): */
//expressions = [ "(.*)" ];
