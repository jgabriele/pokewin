const fs = require('fs');
const path = require('path');

const pokemons = [{"key":"POKE_001","types":[12,4],"id":1,"moves":{"quick":[14,21],"special":[100,75,122]}},{"key":"POKE_002","types":[12,4],"id":2,"moves":{"quick":[15,14],"special":[100,120,122]}},{"key":"POKE_003","types":[12,4],"id":3,"moves":{"quick":[15,14],"special":[100,65,120]}},{"key":"POKE_004","types":[10],"id":4,"moves":{"quick":[9,20],"special":[108,109,49]}},{"key":"POKE_005","types":[10],"id":5,"moves":{"quick":[9,20],"special":[119,109,49]}},{"key":"POKE_006","types":[10,3],"id":6,"moves":{"quick":[9,10],"special":[110,93,49]}},{"key":"POKE_007","types":[11],"id":7,"moves":{"quick":[37,21],"special":[73,74,112]}},{"key":"POKE_008","types":[11],"id":8,"moves":{"quick":[30,1],"special":[73,60,114]}},{"key":"POKE_009","types":[11],"id":9,"moves":{"quick":[30,1],"special":[58,60,114]}},{"key":"POKE_010","types":[7],"id":10,"moves":{"quick":[1,21],"special":[132]}},{"key":"POKE_011","types":[7],"id":11,"moves":{"quick":[1,21],"special":[132]}},{"key":"POKE_012","types":[7,3],"id":12,"moves":{"quick":[1,35],"special":[67,115,106]}},{"key":"POKE_013","types":[7,4],"id":13,"moves":{"quick":[1,36],"special":[132]}},{"key":"POKE_014","types":[7,4],"id":14,"moves":{"quick":[1,36],"special":[132]}},{"key":"POKE_015","types":[7,4],"id":15,"moves":{"quick":[1,24],"special":[100,63,107]}},{"key":"POKE_016","types":[1,3],"id":16,"moves":{"quick":[19,21],"special":[91,63,123]}},{"key":"POKE_017","types":[1,3],"id":17,"moves":{"quick":[10,39],"special":[91,63,123]}},{"key":"POKE_018","types":[1,3],"id":18,"moves":{"quick":[10,39],"special":[124,63,123]}},{"key":"POKE_019","types":[1],"id":19,"moves":{"quick":[21,19],"special":[50,129,130]}},{"key":"POKE_020","types":[1],"id":20,"moves":{"quick":[1,19],"special":[50,129,43]}},{"key":"POKE_021","types":[1,3],"id":21,"moves":{"quick":[11,19],"special":[63,59,91]}},{"key":"POKE_022","types":[1,3],"id":22,"moves":{"quick":[11,39],"special":[63,64,91]}},{"key":"POKE_023","types":[4],"id":23,"moves":{"quick":[36,25],"special":[42,100,102]}},{"key":"POKE_024","types":[4],"id":24,"moves":{"quick":[1,25],"special":[44,101,102]}},{"key":"POKE_025","types":[13],"id":25,"moves":{"quick":[5,19],"special":[57,90,5]}},{"key":"POKE_026","types":[13],"id":26,"moves":{"quick":[5,6],"special":[125,88,5]}},{"key":"POKE_027","types":[5],"id":27,"moves":{"quick":[20,16],"special":[50,79,78]}},{"key":"POKE_028","types":[5],"id":28,"moves":{"quick":[28,16],"special":[53,78,104]}},{"key":"POKE_029","types":[4],"id":29,"moves":{"quick":[1,36],"special":[68,130,100]}},{"key":"POKE_030","types":[4],"id":30,"moves":{"quick":[1,36],"special":[68,50,100]}},{"key":"POKE_031","types":[4,5],"id":31,"moves":{"quick":[24,1],"special":[53,101,54]}},{"key":"POKE_032","types":[4],"id":32,"moves":{"quick":[11,36],"special":[127,130,100]}},{"key":"POKE_033","types":[4],"id":33,"moves":{"quick":[24,36],"special":[127,50,100]}},{"key":"POKE_034","types":[4,5],"id":34,"moves":{"quick":[24],"special":[53,101,48]}},{"key":"POKE_035","types":[18],"id":35,"moves":{"quick":[22,34],"special":[94,130,97]}},{"key":"POKE_036","types":[18],"id":36,"moves":{"quick":[22,34],"special":[96,115,97]}},{"key":"POKE_037","types":[10],"id":37,"moves":{"quick":[19,9],"special":[130,49,108]}},{"key":"POKE_038","types":[10],"id":38,"moves":{"quick":[38,9],"special":[62,49,110]}},{"key":"POKE_039","types":[1,18],"id":39,"moves":{"quick":[22,38],"special":[94,130,98]}},{"key":"POKE_040","types":[1,18],"id":40,"moves":{"quick":[22,38],"special":[96,43,98]}},{"key":"POKE_041","types":[4,3],"id":41,"moves":{"quick":[19,1],"special":[68,123,100]}},{"key":"POKE_042","types":[4,3],"id":42,"moves":{"quick":[10,1],"special":[68,123,83]}},{"key":"POKE_043","types":[12,4],"id":43,"moves":{"quick":[15,25],"special":[75,100,97]}},{"key":"POKE_044","types":[12,4],"id":44,"moves":{"quick":[15,25],"special":[65,100,97]}},{"key":"POKE_045","types":[12,4],"id":45,"moves":{"quick":[15,25],"special":[65,120,97]}},{"key":"POKE_046","types":[7,12],"id":46,"moves":{"quick":[20,1],"special":[99,107,75]}},{"key":"POKE_047","types":[7,12],"id":47,"moves":{"quick":[1],"special":[99,107,120]}},{"key":"POKE_048","types":[7,4],"id":48,"moves":{"quick":[1,35],"special":[68,52,106]}},{"key":"POKE_049","types":[7,4],"id":49,"moves":{"quick":[1,35],"special":[68,115,67]}},{"key":"POKE_050","types":[5],"id":50,"moves":{"quick":[16,20],"special":[50,105,78]}},{"key":"POKE_051","types":[5],"id":51,"moves":{"quick":[3,16],"special":[53,105,54]}},{"key":"POKE_052","types":[1],"id":52,"moves":{"quick":[20,1],"special":[69,44,130]}},{"key":"POKE_053","types":[1],"id":53,"moves":{"quick":[20,38],"special":[69,80,98]}},{"key":"POKE_054","types":[11],"id":54,"moves":{"quick":[30,34],"special":[52,74,51]}},{"key":"POKE_055","types":[11],"id":55,"moves":{"quick":[30,35],"special":[115,114,60]}},{"key":"POKE_056","types":[2],"id":56,"moves":{"quick":[8,20],"special":[51,72,125]}},{"key":"POKE_057","types":[2],"id":57,"moves":{"quick":[7,8],"special":[51,72,69]}},{"key":"POKE_058","types":[10],"id":58,"moves":{"quick":[9,1],"special":[47,130,49]}},{"key":"POKE_059","types":[10],"id":59,"moves":{"quick":[40,1],"special":[110,49,104]}},{"key":"POKE_060","types":[11],"id":60,"moves":{"quick":[37,16],"special":[70,105,130]}},{"key":"POKE_061","types":[11],"id":61,"moves":{"quick":[37,16],"special":[113,105,70]}},{"key":"POKE_062","types":[11,2],"id":62,"moves":{"quick":[37,16],"special":[114,71,55]}},{"key":"POKE_063","types":[14],"id":63,"moves":{"quick":[34],"special":[76,106,84]}},{"key":"POKE_064","types":[14],"id":64,"moves":{"quick":[26,35],"special":[52,96,84]}},{"key":"POKE_065","types":[14],"id":65,"moves":{"quick":[26,35],"special":[115,96,84]}},{"key":"POKE_066","types":[2],"id":66,"moves":{"quick":[7,8],"special":[72,125,51]}},{"key":"POKE_067","types":[2],"id":67,"moves":{"quick":[7,8],"special":[71,125,51]}},{"key":"POKE_068","types":[2],"id":68,"moves":{"quick":[29,8],"special":[54,71,51]}},{"key":"POKE_069","types":[12,4],"id":69,"moves":{"quick":[14,25],"special":[122,100,42]}},{"key":"POKE_070","types":[12,4],"id":70,"moves":{"quick":[15,25],"special":[122,100,75]}},{"key":"POKE_071","types":[12,4],"id":71,"moves":{"quick":[15,25],"special":[121,100,120]}},{"key":"POKE_072","types":[11,4],"id":72,"moves":{"quick":[37,36],"special":[70,112,42]}},{"key":"POKE_073","types":[11,4],"id":73,"moves":{"quick":[25,24],"special":[114,101,61]}},{"key":"POKE_074","types":[6,5],"id":74,"moves":{"quick":[27,21],"special":[79,78,50]}},{"key":"POKE_075","types":[6,5],"id":75,"moves":{"quick":[27,16],"special":[50,54,79]}},{"key":"POKE_076","types":[6,5],"id":76,"moves":{"quick":[27,16],"special":[54,77,53]}},{"key":"POKE_077","types":[10],"id":77,"moves":{"quick":[21,9],"special":[108,47,110]}},{"key":"POKE_078","types":[10],"id":78,"moves":{"quick":[7,9],"special":[110,64,62]}},{"key":"POKE_079","types":[11,14],"id":79,"moves":{"quick":[30,35],"special":[112,76,115]}},{"key":"POKE_080","types":[11,14],"id":80,"moves":{"quick":[30,35],"special":[112,115,60]}},{"key":"POKE_081","types":[13,9],"id":81,"moves":{"quick":[6,5],"special":[57,85,90]}},{"key":"POKE_082","types":[13,9],"id":82,"moves":{"quick":[6,5],"special":[57,85,58]}},{"key":"POKE_083","types":[1,3],"id":83,"moves":{"quick":[],"special":[63,123,121]}},{"key":"POKE_084","types":[1,3],"id":84,"moves":{"quick":[11,19],"special":[59,63,126]}},{"key":"POKE_085","types":[1,3],"id":85,"moves":{"quick":[38,39],"special":[59,63,123]}},{"key":"POKE_086","types":[11],"id":86,"moves":{"quick":[17,30],"special":[73,117,74]}},{"key":"POKE_087","types":[11,15],"id":87,"moves":{"quick":[18,17],"special":[117,73,61]}},{"key":"POKE_088","types":[4],"id":88,"moves":{"quick":[25,33],"special":[45,105,100]}},{"key":"POKE_089","types":[4],"id":89,"moves":{"quick":[25,24],"special":[44,102,101]}},{"key":"POKE_090","types":[11],"id":90,"moves":{"quick":[17,21],"special":[70,112,117]}},{"key":"POKE_091","types":[11,15],"id":91,"moves":{"quick":[18,17],"special":[117,114,61]}},{"key":"POKE_092","types":[8,4],"id":92,"moves":{"quick":[12,3],"special":[83,44,100]}},{"key":"POKE_093","types":[8,4],"id":93,"moves":{"quick":[13,12],"special":[84,44,100]}},{"key":"POKE_094","types":[8,4],"id":94,"moves":{"quick":[3,13],"special":[84,44,101]}},{"key":"POKE_095","types":[6,5],"id":95,"moves":{"quick":[27,21],"special":[79,54,86]}},{"key":"POKE_096","types":[14],"id":96,"moves":{"quick":[22,35],"special":[52,76,115]}},{"key":"POKE_097","types":[14],"id":97,"moves":{"quick":[34,35],"special":[76,115,84]}},{"key":"POKE_098","types":[11],"id":98,"moves":{"quick":[37,16],"special":[46,70,112]}},{"key":"POKE_099","types":[11],"id":99,"moves":{"quick":[28,16],"special":[46,107,112]}},{"key":"POKE_100","types":[13],"id":100,"moves":{"quick":[6,21],"special":[57,90,106]}},{"key":"POKE_101","types":[13],"id":101,"moves":{"quick":[6,21],"special":[57,90,43]}},{"key":"POKE_102","types":[12,14],"id":102,"moves":{"quick":[35],"special":[75,115,77]}},{"key":"POKE_103","types":[12,14],"id":103,"moves":{"quick":[35,34],"special":[75,115,120]}},{"key":"POKE_104","types":[5],"id":104,"moves":{"quick":[33,41],"special":[103,50,104]}},{"key":"POKE_105","types":[5],"id":105,"moves":{"quick":[33,41],"special":[103,50,53]}},{"key":"POKE_106","types":[2],"id":106,"moves":{"quick":[7,41],"special":[128,72,54]}},{"key":"POKE_107","types":[2],"id":107,"moves":{"quick":[29,41],"special":[119,55,88]}},{"key":"POKE_108","types":[1],"id":108,"moves":{"quick":[12,34],"special":[43,128,122]}},{"key":"POKE_109","types":[4],"id":109,"moves":{"quick":[25,21],"special":[45,100,44]}},{"key":"POKE_110","types":[4],"id":110,"moves":{"quick":[25,21],"special":[100,84,44]}},{"key":"POKE_111","types":[5,6],"id":111,"moves":{"quick":[33,41],"special":[104,127,128]}},{"key":"POKE_112","types":[5,6],"id":112,"moves":{"quick":[33,41],"special":[48,53,54]}},{"key":"POKE_113","types":[1],"id":113,"moves":{"quick":[22,34],"special":[115,52,96]}},{"key":"POKE_114","types":[12],"id":114,"moves":{"quick":[14],"special":[122,100,120]}},{"key":"POKE_115","types":[1],"id":115,"moves":{"quick":[33,7],"special":[125,53,128]}},{"key":"POKE_116","types":[11],"id":116,"moves":{"quick":[30,37],"special":[70,92,58]}},{"key":"POKE_117","types":[11],"id":117,"moves":{"quick":[30,4],"special":[61,92,114]}},{"key":"POKE_118","types":[11],"id":118,"moves":{"quick":[11,16],"special":[112,127,74]}},{"key":"POKE_119","types":[11],"id":119,"moves":{"quick":[11,24],"special":[117,64,48]}},{"key":"POKE_120","types":[11],"id":120,"moves":{"quick":[19,30],"special":[126,70,80]}},{"key":"POKE_121","types":[11,14],"id":121,"moves":{"quick":[19,30],"special":[114,80,52]}},{"key":"POKE_122","types":[14,18],"id":122,"moves":{"quick":[35,34],"special":[52,115,84]}},{"key":"POKE_123","types":[7,3],"id":123,"moves":{"quick":[39],"special":[69,107,67]}},{"key":"POKE_124","types":[15,14],"id":124,"moves":{"quick":[18,22],"special":[95,55,76]}},{"key":"POKE_125","types":[13],"id":125,"moves":{"quick":[5,7],"special":[88,90,5]}},{"key":"POKE_126","types":[10],"id":126,"moves":{"quick":[9,8],"special":[110,119,49]}},{"key":"POKE_127","types":[7],"id":127,"moves":{"quick":[41],"special":[46,107,71]}},{"key":"POKE_128","types":[1],"id":128,"moves":{"quick":[21,34],"special":[127,86,53]}},{"key":"POKE_129","types":[11],"id":129,"moves":{"quick":[31],"special":[132]}},{"key":"POKE_130","types":[11,3],"id":130,"moves":{"quick":[4,1],"special":[114,91,92]}},{"key":"POKE_131","types":[11,15],"id":131,"moves":{"quick":[18,17],"special":[92,60,61]}},{"key":"POKE_132","types":[1],"id":132,"moves":{"quick":[22],"special":[132]}},{"key":"POKE_133","types":[1],"id":133,"moves":{"quick":[19,21],"special":[50,126,130]}},{"key":"POKE_134","types":[11],"id":134,"moves":{"quick":[30],"special":[112,114,74]}},{"key":"POKE_135","types":[13],"id":135,"moves":{"quick":[5],"special":[57,90,5]}},{"key":"POKE_136","types":[10],"id":136,"moves":{"quick":[9],"special":[110,49,62]}},{"key":"POKE_137","types":[1],"id":137,"moves":{"quick":[19,21],"special":[52,106,57]}},{"key":"POKE_138","types":[6,11],"id":138,"moves":{"quick":[30,16],"special":[77,111,78]}},{"key":"POKE_139","types":[6,11],"id":139,"moves":{"quick":[27,30],"special":[77,114,79]}},{"key":"POKE_140","types":[6,11],"id":140,"moves":{"quick":[20,16],"special":[77,73,78]}},{"key":"POKE_141","types":[6,11],"id":141,"moves":{"quick":[16],"special":[77,112,54]}},{"key":"POKE_142","types":[6,3],"id":142,"moves":{"quick":[39,1],"special":[77,86,43]}},{"key":"POKE_143","types":[1],"id":143,"moves":{"quick":[34,12],"special":[130,43,53]}},{"key":"POKE_144","types":[15,3],"id":144,"moves":{"quick":[18],"special":[60,117,61]}},{"key":"POKE_145","types":[13,3],"id":145,"moves":{"quick":[5],"special":[57,90,5]}},{"key":"POKE_146","types":[10,3],"id":146,"moves":{"quick":[9],"special":[110,62,49]}},{"key":"POKE_147","types":[16],"id":147,"moves":{"quick":[4],"special":[42,91,74]}},{"key":"POKE_148","types":[16],"id":148,"moves":{"quick":[4],"special":[42,74,92]}},{"key":"POKE_149","types":[16,3],"id":149,"moves":{"quick":[4,39],"special":[92,43,93]}},{"key":"POKE_150","types":[14],"id":150,"moves":{"quick":[26,35],"special":[115,84,43]}},{"key":"POKE_151","types":[14],"id":151,"moves":{"quick":[22],"special":[115]}}];
const types = [{"damages":{"half":{"from":[],"to":[6,9]},"no":{"from":[8],"to":[8]},"double":{"from":[2],"to":[]}},"id":1,"key":"TYPE_NORMAL"},{"damages":{"half":{"from":[6,7,17],"to":[3,4,7,14,18]},"no":{"from":[],"to":[8]},"double":{"from":[3,14,18],"to":[1,6,9,15,17]}},"id":2,"key":"TYPE_FIGHTING"},{"damages":{"half":{"from":[2,7,12],"to":[6,9,13]},"no":{"from":[5],"to":[]},"double":{"from":[6,13,15],"to":[2,7,12]}},"id":3,"key":"TYPE_FLYING"},{"damages":{"half":{"from":[2,4,7,12,18],"to":[4,5,6,8]},"no":{"from":[],"to":[9]},"double":{"from":[5,14],"to":[12,18]}},"id":4,"key":"TYPE_POISON"},{"damages":{"half":{"from":[4,6],"to":[7,12]},"no":{"from":[13],"to":[3]},"double":{"from":[11,12,15],"to":[4,6,9,10,13]}},"id":5,"key":"TYPE_GROUND"},{"damages":{"half":{"from":[1,3,4,10],"to":[2,5,9]},"no":{"from":[],"to":[]},"double":{"from":[2,5,9,11,12],"to":[3,7,10,15]}},"id":6,"key":"TYPE_ROCK"},{"damages":{"half":{"from":[2,5,12],"to":[2,3,4,8,9,10,18]},"no":{"from":[],"to":[]},"double":{"from":[3,6,10],"to":[12,14,17]}},"id":7,"key":"TYPE_BUG"},{"damages":{"half":{"from":[4,7],"to":[17]},"no":{"from":[1,2],"to":[1]},"double":{"from":[8,17],"to":[8,14]}},"id":8,"key":"TYPE_GHOST"},{"damages":{"half":{"from":[1,3,6,7,9,12,14,15,16,18],"to":[9,10,11,13]},"no":{"from":[4],"to":[]},"double":{"from":[2,5,10],"to":[6,15,18]}},"id":9,"key":"TYPE_STEEL"},{"damages":{"half":{"from":[7,9,10,12,15,18],"to":[6,10,11,16]},"no":{"from":[],"to":[]},"double":{"from":[5,6,11],"to":[7,9,12,15]}},"id":10,"key":"TYPE_FIRE"},{"damages":{"half":{"from":[9,10,11,15],"to":[11,12,16]},"no":{"from":[],"to":[]},"double":{"from":[12,13],"to":[5,6,10]}},"id":11,"key":"TYPE_WATER"},{"damages":{"half":{"from":[5,11,12,13],"to":[3,4,7,9,10,12,16]},"no":{"from":[],"to":[]},"double":{"from":[3,4,7,10,15],"to":[5,6,11]}},"id":12,"key":"TYPE_GRASS"},{"damages":{"half":{"from":[3,9,13],"to":[12,13,16]},"no":{"from":[],"to":[5]},"double":{"from":[5],"to":[3,11]}},"id":13,"key":"TYPE_ELECTRIC"},{"damages":{"half":{"from":[2,14],"to":[9,14]},"no":{"from":[],"to":[17]},"double":{"from":[7,8,17],"to":[2,4]}},"id":14,"key":"TYPE_PSYCHIC"},{"damages":{"half":{"from":[15],"to":[9,10,11,15]},"no":{"from":[],"to":[]},"double":{"from":[2,6,9,10],"to":[3,5,12,16]}},"id":15,"key":"TYPE_ICE"},{"damages":{"half":{"from":[10,11,12,13],"to":[9]},"no":{"from":[],"to":[18]},"double":{"from":[15,16,18],"to":[16]}},"id":16,"key":"TYPE_DRAGON"},{"damages":{"half":{"from":[8,17],"to":[2,17,18]},"no":{"from":[14],"to":[]},"double":{"from":[2,7,18],"to":[8,14]}},"id":17,"key":"TYPE_DARK"},{"damages":{"half":{"from":[2,7,17],"to":[4,9,10]},"no":{"from":[16],"to":[]},"double":{"from":[4,9],"to":[2,16,17]}},"id":18,"key":"TYPE_FAIRY"},{"damages":{"half":{"from":[],"to":[]},"no":{"from":[],"to":[]},"double":{"from":[],"to":[]}},"id":19,"key":"TYPE_UNKNOWN"},{"damages":{"half":{"from":[],"to":[]},"no":{"from":[],"to":[]},"double":{"from":[],"to":[]}},"id":20,"key":"TYPE_SHADOW"}];
const moves = [{"type":7,"power":3,"key":"MOVE_FURY_CUTTER","id":0},{"type":7,"power":5,"key":"MOVE_BUG_BITE","id":1},{"type":17,"power":6,"key":"MOVE_BITE","id":2},{"type":17,"power":7,"key":"MOVE_SUCKER_PUNCH","id":3},{"type":16,"power":6,"key":"MOVE_DRAGON_BREATH","id":4},{"type":13,"power":5,"key":"MOVE_THUNDER_SHOCK","id":5},{"type":13,"power":7,"key":"MOVE_SPARK","id":6},{"type":2,"power":5,"key":"MOVE_LOW_KICK","id":7},{"type":2,"power":6,"key":"MOVE_KARATE_CHOP","id":8},{"type":10,"power":0,"key":"MOVE_EMBER","id":9},{"type":3,"power":9,"key":"MOVE_WING_ATTACK","id":10},{"type":3,"power":0,"key":"MOVE_PECK","id":11},{"type":8,"power":5,"key":"MOVE_LICK","id":12},{"type":8,"power":1,"key":"MOVE_SHADOW_CLAW","id":13},{"type":12,"power":7,"key":"MOVE_VINE_WHIP","id":14},{"type":12,"power":5,"key":"MOVE_RAZOR_LEAF","id":15},{"type":5,"power":6,"key":"MOVE_MUD_SHOT","id":16},{"type":15,"power":5,"key":"MOVE_ICE_SHARD","id":17},{"type":15,"power":9,"key":"MOVE_FROST_BREATH","id":18},{"type":1,"power":0,"key":"MOVE_QUICK_ATTACK","id":19},{"type":1,"power":6,"key":"MOVE_SCRATCH","id":20},{"type":1,"power":2,"key":"MOVE_TACKLE","id":21},{"type":1,"power":7,"key":"MOVE_POUND","id":22},{"type":1,"power":2,"key":"MOVE_CUT","id":23},{"type":4,"power":2,"key":"MOVE_POISON_JAB","id":24},{"type":4,"power":0,"key":"MOVE_ACID","id":25},{"type":14,"power":7,"key":"MOVE_PSYCHO_CUT","id":26},{"type":6,"power":2,"key":"MOVE_ROCK_THROW","id":27},{"type":9,"power":8,"key":"MOVE_METAL_CLAW","id":28},{"type":9,"power":0,"key":"MOVE_BULLET_PUNCH","id":29},{"type":11,"power":6,"key":"MOVE_WATER_GUN","id":30},{"type":11,"power":0,"key":"MOVE_SPLASH","id":31},{"type":11,"power":0,"key":"MOVE_WATER_GUN","id":32},{"type":5,"power":5,"key":"MOVE_MUD_SLAP","id":33},{"type":14,"power":2,"key":"MOVE_ZEN_HEADBUTT","id":34},{"type":14,"power":5,"key":"MOVE_CONFUSION","id":35},{"type":4,"power":6,"key":"MOVE_POISON_STING","id":36},{"type":11,"power":5,"key":"MOVE_BUBBLE","id":37},{"type":17,"power":2,"key":"MOVE_FEINT_ATTACK","id":38},{"type":9,"power":5,"key":"MOVE_STEEL_WING","id":39},{"type":10,"power":0,"key":"MOVE_FIRE_FANG","id":40},{"type":2,"power":5,"key":"MOVE_ROCK_SMASH","id":41},{"type":1,"power":25,"charge":5,"key":"MOVE_WRAP","id":42},{"type":1,"power":120,"charge":1,"key":"MOVE_HYPER_BEAM","id":43},{"type":17,"power":45,"charge":3,"key":"MOVE_DARK_PULSE","id":44},{"type":4,"power":30,"charge":4,"key":"MOVE_SLUDGE","id":45},{"type":1,"power":25,"charge":5,"key":"MOVE_VICE_GRIP","id":46},{"type":10,"power":40,"charge":4,"key":"MOVE_FLAME_WHEEL","id":47},{"type":7,"power":80,"charge":1,"key":"MOVE_MEGAHORN","id":48},{"type":10,"power":55,"charge":2,"key":"MOVE_FLAMETHROWER","id":49},{"type":5,"power":70,"charge":3,"key":"MOVE_DIG","id":50},{"type":2,"power":60,"charge":1,"key":"MOVE_CROSS_CHOP","id":51},{"type":14,"power":40,"charge":4,"key":"MOVE_PSYBEAM","id":52},{"type":5,"power":100,"charge":1,"key":"MOVE_EARTHQUAKE","id":53},{"type":6,"power":80,"charge":1,"key":"MOVE_STONE_EDGE","id":54},{"type":15,"power":45,"charge":3,"key":"MOVE_ICE_PUNCH","id":55},{"type":14,"power":20,"charge":4,"key":"MOVE_HEART_STAMP","id":56},{"type":13,"power":35,"charge":3,"key":"MOVE_DISCHARGE","id":57},{"type":9,"power":60,"charge":3,"key":"MOVE_FLASH_CANNON","id":58},{"type":3,"power":40,"charge":3,"key":"MOVE_DRILL_PECK","id":59},{"type":15,"power":65,"charge":2,"key":"MOVE_ICE_BEAM","id":60},{"type":15,"power":100,"charge":1,"key":"MOVE_BLIZZARD","id":61},{"type":10,"power":80,"charge":1,"key":"MOVE_HEAT_WAVE","id":62},{"type":3,"power":30,"charge":4,"key":"MOVE_AERIAL_ACE","id":63},{"type":5,"power":50,"charge":3,"key":"MOVE_DRILL_RUN","id":64},{"type":12,"power":65,"charge":2,"key":"MOVE_PETAL_BLIZZARD","id":65},{"type":12,"power":15,"charge":5,"key":"MOVE_MEGA_DRAIN","id":66},{"type":7,"power":75,"charge":2,"key":"MOVE_BUG_BUZZ","id":67},{"type":4,"power":25,"charge":5,"key":"MOVE_POISON_FANG","id":68},{"type":17,"power":30,"charge":4,"key":"MOVE_NIGHT_SLASH","id":69},{"type":11,"power":30,"charge":4,"key":"MOVE_BUBBLE_BEAM","id":70},{"type":2,"power":30,"charge":3,"key":"MOVE_SUBMISSION","id":71},{"type":2,"power":30,"charge":4,"key":"MOVE_LOW_SWEEP","id":72},{"type":11,"power":25,"charge":5,"key":"MOVE_AQUA_JET","id":73},{"type":11,"power":45,"charge":2,"key":"MOVE_AQUA_TAIL","id":74},{"type":12,"power":40,"charge":3,"key":"MOVE_SEED_BOMB","id":75},{"type":14,"power":40,"charge":3,"key":"MOVE_PSYSHOCK","id":76},{"type":6,"power":35,"charge":4,"key":"MOVE_ANCIENT_POWER","id":77},{"type":6,"power":30,"charge":4,"key":"MOVE_ROCK_TOMB","id":78},{"type":6,"power":50,"charge":3,"key":"MOVE_ROCK_SLIDE","id":79},{"type":6,"power":40,"charge":3,"key":"MOVE_POWER_GEM","id":80},{"type":8,"power":15,"charge":5,"key":"MOVE_SHADOW_SNEAK","id":81},{"type":8,"power":20,"charge":4,"key":"MOVE_SHADOW_PUNCH","id":82},{"type":8,"power":30,"charge":4,"key":"MOVE_OMINOUS_WIND","id":83},{"type":8,"power":45,"charge":3,"key":"MOVE_SHADOW_BALL","id":84},{"type":9,"power":30,"charge":4,"key":"MOVE_MAGNET_BOMB","id":85},{"type":9,"power":30,"charge":3,"key":"MOVE_IRON_HEAD","id":86},{"type":13,"power":15,"charge":5,"key":"MOVE_PARABOLIC_CHARGE","id":87},{"type":13,"power":40,"charge":3,"key":"MOVE_THUNDER_PUNCH","id":88},{"type":13,"power":100,"charge":1,"key":"MOVE_THUNDER","id":89},{"type":13,"power":55,"charge":2,"key":"MOVE_THUNDERBOLT","id":90},{"type":16,"power":25,"charge":5,"key":"MOVE_TWISTER","id":91},{"type":16,"power":65,"charge":2,"key":"MOVE_DRAGON_PULSE","id":92},{"type":16,"power":35,"charge":2,"key":"MOVE_DRAGON_CLAW","id":93},{"type":18,"power":25,"charge":5,"key":"MOVE_DISARMING_VOICE","id":94},{"type":18,"power":25,"charge":5,"key":"MOVE_DRAINING_KISS","id":95},{"type":18,"power":55,"charge":3,"key":"MOVE_DAZZLING_GLEAM","id":96},{"type":18,"power":85,"charge":1,"key":"MOVE_MOONBLAST","id":97},{"type":18,"power":55,"charge":2,"key":"MOVE_PLAY_ROUGH","id":98},{"type":4,"power":25,"charge":4,"key":"MOVE_CROSS_POISON","id":99},{"type":4,"power":55,"charge":2,"key":"MOVE_SLUDGE_BOMB","id":100},{"type":4,"power":70,"charge":1,"key":"MOVE_SLUDGE_WAVE","id":101},{"type":4,"power":65,"charge":1,"key":"MOVE_GUNK_SHOT","id":102},{"type":5,"power":25,"charge":4,"key":"MOVE_BONE_CLUB","id":103},{"type":5,"power":35,"charge":4,"key":"MOVE_BULLDOZE","id":104},{"type":5,"power":30,"charge":4,"key":"MOVE_MUD_BOMB","id":105},{"type":7,"power":45,"charge":3,"key":"MOVE_SIGNAL_BEAM","id":106},{"type":7,"power":35,"charge":3,"key":"MOVE_X_SCISSOR","id":107},{"type":10,"power":25,"charge":5,"key":"MOVE_FLAME_CHARGE","id":108},{"type":10,"power":30,"charge":4,"key":"MOVE_FLAME_BURST","id":109},{"type":10,"power":100,"charge":1,"key":"MOVE_FIRE_BLAST","id":110},{"type":11,"power":25,"charge":4,"key":"MOVE_BRINE","id":111},{"type":11,"power":35,"charge":4,"key":"MOVE_WATER_PULSE","id":112},{"type":11,"power":55,"charge":3,"key":"MOVE_SCALD","id":113},{"type":11,"power":90,"charge":1,"key":"MOVE_HYDRO_PUMP","id":114},{"type":14,"power":55,"charge":2,"key":"MOVE_PSYCHIC","id":115},{"type":14,"power":70,"charge":1,"key":"MOVE_PSYSTRIKE","id":116},{"type":15,"power":25,"charge":5,"key":"MOVE_ICY_WIND","id":117},{"type":12,"power":35,"charge":3,"key":"MOVE_GIGA_DRAIN","id":118},{"type":10,"power":40,"charge":3,"key":"MOVE_FIRE_PUNCH","id":119},{"type":12,"power":120,"charge":1,"key":"MOVE_SOLAR_BEAM","id":120},{"type":12,"power":45,"charge":2,"key":"MOVE_LEAF_BLADE","id":121},{"type":12,"power":70,"charge":1,"key":"MOVE_POWER_WHIP","id":122},{"type":3,"power":30,"charge":4,"key":"MOVE_AIR_CUTTER","id":123},{"type":3,"power":80,"charge":1,"key":"MOVE_HURRICANE","id":124},{"type":2,"power":30,"charge":3,"key":"MOVE_BRICK_BREAK","id":125},{"type":1,"power":30,"charge":4,"key":"MOVE_SWIFT","id":126},{"type":1,"power":25,"charge":4,"key":"MOVE_HORN_ATTACK","id":127},{"type":1,"power":30,"charge":4,"key":"MOVE_STOMP","id":128},{"type":1,"power":35,"charge":3,"key":"MOVE_HYPER_FANG","id":129},{"type":1,"power":40,"charge":2,"key":"MOVE_BODY_SLAM","id":130},{"type":1,"power":35,"charge":3,"key":"MOVE_REST","id":131},{"type":1,"power":15,"charge":5,"key":"MOVE_STRUGGLE","id":132}];

const MINIUM_MOVE_EFFICIENCY_REQUIRED = 1.3;

function _findById(list, id) {
  if (typeof(id) === 'string') {
    id = Number(id);
  }
  const results = list.filter((item) => item.id === id);
  return results && results[0];
}

function _findTypeById(id) {
  return _findById(types, id);
}

function _findMoveById(id) {
  const move = Object.assign({}, _findById(moves, id));
  move.type = _findTypeById(move.type);
  return move;
}

function _augmentPokemonData(pokemon) {
  return {
    id: pokemon.id,
    key: pokemon.key,
    types: pokemon.types.map(_findTypeById),
    moves: {
      quick: pokemon.moves.quick.map(_findMoveById),
      charge: pokemon.moves.special.map(_findMoveById)
    }
  }
}

function _flattenReducer(state, item) {
  return state.concat(item);
}

function _getIdMapper(item) {
  return item.id;
}

function _hasPokemonMoveOfType(pokemon, types) {
  return !!pokemon.moves.quick.concat(pokemon.moves.charge)
        .filter((move) => types.indexOf(move.type) !== -1)
        .length;
}

function _getTypesWithDoubleEfficiencyFrom(typeToCounter) {
  return types.reduce((state, type) => {
    if (type.damages.double.from.indexOf(typeToCounter) !== -1) {
      return state.concat(type);
    }
    return state;
  }, [])
}

const RATIO_EFFICIENT = 1.25;
const RATIO_WEAK = 0.8;

// Is type1 efficient against type2
function _isTypeEfficient(type1, type2) {
  return type1.damages.double.to.indexOf(type2.id) !== -1; // type1 does 1.25 damages on type2
}

function _isTypeWeak(type1, type2) {
  return type1.damages.half.to.indexOf(type2.id) !== -1 || // type1 does 0.8 damages on type2
    type1.damages.no.to.indexOf(type2.id) !== -1; // no === half in PokeGo
}

function _isSTAB(move, pokemon) {
  return (pokemon.types.map(_getIdMapper).indexOf(move.type.id) !== -1);
}

function _calculateMoveEfficiency(attackPokemon, attackMove, defenseTypes) {
  // Efficiency of attack pokemon move against defensePokemon
  let attackEfficiency = 1;

  // STAB
  if (_isSTAB(attackMove, attackPokemon)) {
    attackEfficiency *= 1.25;
  }

  defenseTypes.forEach((defenseType) => {
    if (_isTypeEfficient(attackMove.type, defenseType)) {
      attackEfficiency *= RATIO_EFFICIENT;
    } else if (_isTypeWeak(attackMove.type, defenseType)) {
      attackEfficiency *= RATIO_WEAK;
    }
  });

  return attackEfficiency;
}

// Tell the type efficiency of one attack with one move against a defense Pokemon
// Average is made against all possible defense pokemon moves as we never
// know which move a defense pokemon has
function _calculatePokemonEfficiency(attackPokemon, attackPokemonMove, defensePokemon, defensePokemonMoves) {
  const attackEfficiency = _calculateMoveEfficiency(
    attackPokemon,
    attackPokemonMove,
    defensePokemon.types
  );

  // Efficiency of defense pokemon moves against attackPokemon
  let index = 0; // Used to calculate average on the fly
  const defenseEfficiency = defensePokemonMoves.reduce((state, defensePokemonMove) => {
    const oldIndex = index++;
    const currentMoveEfficiency = _calculateMoveEfficiency(
      defensePokemon,
      defensePokemonMove,
      attackPokemon.types
    );
    return (state * oldIndex + currentMoveEfficiency) / index;
  }, 1);

  return {
    move: attackPokemonMove.id,
    efficiency: (attackEfficiency / defenseEfficiency).toFixed(3)
  };
}

// Return list of tuples { move, efficiency } where efficiency is attackEff / defenseEff
// attackEff is efficiency of attackPokemon's move against defensePokemon type
// defenseEff is efficiency of each defensePokemon moveS against attackPokemon type
function _getMovesEfficiency(attackPokemon, defensePokemon) {
  const attackPokemonMoves = attackPokemon.moves.quick.concat(attackPokemon.moves.charge);
  const defensePokemonMoves = defensePokemon.moves.quick.concat(defensePokemon.moves.charge);

  return attackPokemonMoves
    .map((move) => {
      return _calculatePokemonEfficiency(
        attackPokemon,
        move,
        defensePokemon,
        defensePokemonMoves
      );
    })
    .filter((moveEfficiency) => {
      return moveEfficiency.efficiency > MINIUM_MOVE_EFFICIENCY_REQUIRED;
    });
}


const augmentedPokemons = pokemons.map(_augmentPokemonData);

const finalPokemonData = pokemons.map((pokemon, i) => {
  const counters = augmentedPokemons
    .map((attackPokemon) => {
        const moves = _getMovesEfficiency(attackPokemon, augmentedPokemons[i]);

        if (!moves.length) {
          return null;
        }

        return {
          pokemonId: attackPokemon.id,
          moves
        };
      }
    )
    .filter(p => p); // Filter null efficiencies
  return Object.assign({}, pokemon, {
      counters
    });
});

const finalData = {
  pokemons: finalPokemonData,
  moves: moves,
  types: types
}

fs.writeFile(path.join(__dirname, '../front/data/data.json'), JSON.stringify(finalData));