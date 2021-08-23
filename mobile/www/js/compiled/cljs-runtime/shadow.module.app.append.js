
shadow.cljs.devtools.client.env.module_loaded('app');

try { city_encounters.core.init(); } catch (e) { console.error("An error occurred when calling (city-encounters.core/init)"); throw(e); }