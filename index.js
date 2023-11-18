// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

// sample data array
var town_data = [
  {
    town: 'Willington',
    avg_assessed_value: 157155.9246190858,
    avg_sale_amount: 4673023.786688051,
    sales_ratio: 29.734951437653507,
    RowCount: 1247,
  },
  {
    town: 'Greenwich',
    avg_assessed_value: 2508378.797709036,
    avg_sale_amount: 2078026.9177974183,
    sales_ratio: 0.8284342539074765,
    RowCount: 17198,
  },
  {
    town: 'Darien',
    avg_assessed_value: 957772.0075003827,
    avg_sale_amount: 1536616.9793356804,
    sales_ratio: 1.6043661406914385,
    RowCount: 6533,
  },
  {
    town: 'New Canaan',
    avg_assessed_value: 1111066.5071029528,
    avg_sale_amount: 1509626.6421388667,
    sales_ratio: 1.3587185217878077,
    RowCount: 6265,
  },
  {
    town: 'Westport',
    avg_assessed_value: 864784.3038335158,
    avg_sale_amount: 1395793.0734775467,
    sales_ratio: 1.6140360865595198,
    RowCount: 9130,
  },
  {
    town: 'Weston',
    avg_assessed_value: 609057.8094067015,
    avg_sale_amount: 933133.2047340916,
    sales_ratio: 1.5320929972855617,
    RowCount: 3253,
  },
  {
    town: 'Wilton',
    avg_assessed_value: 560559.4099609738,
    avg_sale_amount: 894689.8267273741,
    sales_ratio: 1.596066020530567,
    RowCount: 5381,
  },
  {
    town: 'Stamford',
    avg_assessed_value: 490172.6801305338,
    avg_sale_amount: 877067.721692014,
    sales_ratio: 1.789303560244217,
    RowCount: 32482,
  },
  {
    town: 'Washington',
    avg_assessed_value: 493381.68665850675,
    avg_sale_amount: 854923.7365361077,
    sales_ratio: 1.7327836838172748,
    RowCount: 1634,
  },
  {
    town: 'Ridgefield',
    avg_assessed_value: 486578.8307327425,
    avg_sale_amount: 736072.0471851204,
    sales_ratio: 1.5127498376299362,
    RowCount: 8011,
  },
  {
    town: 'Roxbury',
    avg_assessed_value: 519926.0639470783,
    avg_sale_amount: 729656.7409040794,
    sales_ratio: 1.4033855801819333,
    RowCount: 907,
  },
  {
    town: 'Fairfield',
    avg_assessed_value: 463993.39015485335,
    avg_sale_amount: 700828.173883923,
    sales_ratio: 1.5104270637347406,
    RowCount: 15886,
  },
  {
    town: 'Rocky Hill',
    avg_assessed_value: 192659.2456486632,
    avg_sale_amount: 695321.0842275256,
    sales_ratio: 3.6090719751676255,
    RowCount: 5573,
  },
  {
    town: 'Easton',
    avg_assessed_value: 429130.6556873079,
    avg_sale_amount: 639743.586644708,
    sales_ratio: 1.490789758704319,
    RowCount: 2277,
  },
  {
    town: 'Redding',
    avg_assessed_value: 410127.3193946635,
    avg_sale_amount: 627674.8948626046,
    sales_ratio: 1.5304391226340035,
    RowCount: 2511,
  },
  {
    town: 'Norwalk',
    avg_assessed_value: 474705.0915711057,
    avg_sale_amount: 599249.9811668202,
    sales_ratio: 1.262362658010503,
    RowCount: 23894,
  },
  {
    town: 'Bridgewater',
    avg_assessed_value: 369570.7811934901,
    avg_sale_amount: 583289.8394755877,
    sales_ratio: 1.5782899221413402,
    RowCount: 553,
  },
  {
    town: 'Salisbury',
    avg_assessed_value: 372232.3610747051,
    avg_sale_amount: 556336.7306684142,
    sales_ratio: 1.4945952819958077,
    RowCount: 1526,
  },
  {
    town: 'Warren',
    avg_assessed_value: 259634.8006430868,
    avg_sale_amount: 541401.5573472669,
    sales_ratio: 2.0852426408411926,
    RowCount: 622,
  },
  {
    town: 'Orange',
    avg_assessed_value: 329822.10923863976,
    avg_sale_amount: 539219.4243153777,
    sales_ratio: 1.6348795584386686,
    RowCount: 3323,
  },
];
// instantiate d3plus
var visualization = d3plus
  .viz()
  .container('#viz') // container DIV to hold the visualization
  .data(town_data) // data to use with the visualization
  .type('tree_map') // visualization type
  .id('town') // key for which our data is unique on
  .size('avg_sale_amount') // sizing of blocks
  .color('sales_ratio')
  .draw(); // finally, draw the visualization!
