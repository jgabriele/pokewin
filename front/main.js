const pokemons = [{"key":"POKE_001","types":[12,4],"id":1,"moves":{"quick":[14,21],"special":[100,75,122]}},{"key":"POKE_002","types":[12,4],"id":2,"moves":{"quick":[15,14],"special":[100,120,122]}},{"key":"POKE_003","types":[12,4],"id":3,"moves":{"quick":[15,14],"special":[100,65,120]}},{"key":"POKE_004","types":[10],"id":4,"moves":{"quick":[9,20],"special":[108,109,49]}},{"key":"POKE_005","types":[10],"id":5,"moves":{"quick":[9,20],"special":[119,109,49]}},{"key":"POKE_006","types":[10,3],"id":6,"moves":{"quick":[9,10],"special":[110,93,49]}},{"key":"POKE_007","types":[11],"id":7,"moves":{"quick":[37,21],"special":[73,74,112]}},{"key":"POKE_008","types":[11],"id":8,"moves":{"quick":[30,1],"special":[73,60,114]}},{"key":"POKE_009","types":[11],"id":9,"moves":{"quick":[30,1],"special":[58,60,114]}},{"key":"POKE_010","types":[7],"id":10,"moves":{"quick":[1,21],"special":[132]}},{"key":"POKE_011","types":[7],"id":11,"moves":{"quick":[1,21],"special":[132]}},{"key":"POKE_012","types":[7,3],"id":12,"moves":{"quick":[1,35],"special":[67,115,106]}},{"key":"POKE_013","types":[7,4],"id":13,"moves":{"quick":[1,36],"special":[132]}},{"key":"POKE_014","types":[7,4],"id":14,"moves":{"quick":[1,36],"special":[132]}},{"key":"POKE_015","types":[7,4],"id":15,"moves":{"quick":[1,24],"special":[100,63,107]}},{"key":"POKE_016","types":[1,3],"id":16,"moves":{"quick":[19,21],"special":[91,63,123]}},{"key":"POKE_017","types":[1,3],"id":17,"moves":{"quick":[10,39],"special":[91,63,123]}},{"key":"POKE_018","types":[1,3],"id":18,"moves":{"quick":[10,39],"special":[124,63,123]}},{"key":"POKE_019","types":[1],"id":19,"moves":{"quick":[21,19],"special":[50,129,130]}},{"key":"POKE_020","types":[1],"id":20,"moves":{"quick":[1,19],"special":[50,129,43]}},{"key":"POKE_021","types":[1,3],"id":21,"moves":{"quick":[11,19],"special":[63,59,91]}},{"key":"POKE_022","types":[1,3],"id":22,"moves":{"quick":[11,39],"special":[63,64,91]}},{"key":"POKE_023","types":[4],"id":23,"moves":{"quick":[36,25],"special":[42,100,102]}},{"key":"POKE_024","types":[4],"id":24,"moves":{"quick":[1,25],"special":[44,101,102]}},{"key":"POKE_025","types":[13],"id":25,"moves":{"quick":[5,19],"special":[57,90,5]}},{"key":"POKE_026","types":[13],"id":26,"moves":{"quick":[5,6],"special":[125,88,5]}},{"key":"POKE_027","types":[5],"id":27,"moves":{"quick":[20,16],"special":[50,79,78]}},{"key":"POKE_028","types":[5],"id":28,"moves":{"quick":[28,16],"special":[53,78,104]}},{"key":"POKE_029","types":[4],"id":29,"moves":{"quick":[1,36],"special":[68,130,100]}},{"key":"POKE_030","types":[4],"id":30,"moves":{"quick":[1,36],"special":[68,50,100]}},{"key":"POKE_031","types":[4,5],"id":31,"moves":{"quick":[24,1],"special":[53,101,54]}},{"key":"POKE_032","types":[4],"id":32,"moves":{"quick":[11,36],"special":[127,130,100]}},{"key":"POKE_033","types":[4],"id":33,"moves":{"quick":[24,36],"special":[127,50,100]}},{"key":"POKE_034","types":[4,5],"id":34,"moves":{"quick":[24],"special":[53,101,48]}},{"key":"POKE_035","types":[18],"id":35,"moves":{"quick":[22,34],"special":[94,130,97]}},{"key":"POKE_036","types":[18],"id":36,"moves":{"quick":[22,34],"special":[96,115,97]}},{"key":"POKE_037","types":[10],"id":37,"moves":{"quick":[19,9],"special":[130,49,108]}},{"key":"POKE_038","types":[10],"id":38,"moves":{"quick":[38,9],"special":[62,49,110]}},{"key":"POKE_039","types":[1,18],"id":39,"moves":{"quick":[22,38],"special":[94,130,98]}},{"key":"POKE_040","types":[1,18],"id":40,"moves":{"quick":[22,38],"special":[96,43,98]}},{"key":"POKE_041","types":[4,3],"id":41,"moves":{"quick":[19,1],"special":[68,123,100]}},{"key":"POKE_042","types":[4,3],"id":42,"moves":{"quick":[10,1],"special":[68,123,83]}},{"key":"POKE_043","types":[12,4],"id":43,"moves":{"quick":[15,25],"special":[75,100,97]}},{"key":"POKE_044","types":[12,4],"id":44,"moves":{"quick":[15,25],"special":[65,100,97]}},{"key":"POKE_045","types":[12,4],"id":45,"moves":{"quick":[15,25],"special":[65,120,97]}},{"key":"POKE_046","types":[7,12],"id":46,"moves":{"quick":[20,1],"special":[99,107,75]}},{"key":"POKE_047","types":[7,12],"id":47,"moves":{"quick":[1],"special":[99,107,120]}},{"key":"POKE_048","types":[7,4],"id":48,"moves":{"quick":[1,35],"special":[68,52,106]}},{"key":"POKE_049","types":[7,4],"id":49,"moves":{"quick":[1,35],"special":[68,115,67]}},{"key":"POKE_050","types":[5],"id":50,"moves":{"quick":[16,20],"special":[50,105,78]}},{"key":"POKE_051","types":[5],"id":51,"moves":{"quick":[3,16],"special":[53,105,54]}},{"key":"POKE_052","types":[1],"id":52,"moves":{"quick":[20,1],"special":[69,44,130]}},{"key":"POKE_053","types":[1],"id":53,"moves":{"quick":[20,38],"special":[69,80,98]}},{"key":"POKE_054","types":[11],"id":54,"moves":{"quick":[30,34],"special":[52,74,51]}},{"key":"POKE_055","types":[11],"id":55,"moves":{"quick":[30,35],"special":[115,114,60]}},{"key":"POKE_056","types":[2],"id":56,"moves":{"quick":[8,20],"special":[51,72,125]}},{"key":"POKE_057","types":[2],"id":57,"moves":{"quick":[7,8],"special":[51,72,69]}},{"key":"POKE_058","types":[10],"id":58,"moves":{"quick":[9,1],"special":[47,130,49]}},{"key":"POKE_059","types":[10],"id":59,"moves":{"quick":[40,1],"special":[110,49,104]}},{"key":"POKE_060","types":[11],"id":60,"moves":{"quick":[37,16],"special":[70,105,130]}},{"key":"POKE_061","types":[11],"id":61,"moves":{"quick":[37,16],"special":[113,105,70]}},{"key":"POKE_062","types":[11,2],"id":62,"moves":{"quick":[37,16],"special":[114,71,55]}},{"key":"POKE_063","types":[14],"id":63,"moves":{"quick":[34],"special":[76,106,84]}},{"key":"POKE_064","types":[14],"id":64,"moves":{"quick":[26,35],"special":[52,96,84]}},{"key":"POKE_065","types":[14],"id":65,"moves":{"quick":[26,35],"special":[115,96,84]}},{"key":"POKE_066","types":[2],"id":66,"moves":{"quick":[7,8],"special":[72,125,51]}},{"key":"POKE_067","types":[2],"id":67,"moves":{"quick":[7,8],"special":[71,125,51]}},{"key":"POKE_068","types":[2],"id":68,"moves":{"quick":[29,8],"special":[54,71,51]}},{"key":"POKE_069","types":[12,4],"id":69,"moves":{"quick":[14,25],"special":[122,100,42]}},{"key":"POKE_070","types":[12,4],"id":70,"moves":{"quick":[15,25],"special":[122,100,75]}},{"key":"POKE_071","types":[12,4],"id":71,"moves":{"quick":[15,25],"special":[121,100,120]}},{"key":"POKE_072","types":[11,4],"id":72,"moves":{"quick":[37,36],"special":[70,112,42]}},{"key":"POKE_073","types":[11,4],"id":73,"moves":{"quick":[25,24],"special":[114,101,61]}},{"key":"POKE_074","types":[6,5],"id":74,"moves":{"quick":[27,21],"special":[79,78,50]}},{"key":"POKE_075","types":[6,5],"id":75,"moves":{"quick":[27,16],"special":[50,54,79]}},{"key":"POKE_076","types":[6,5],"id":76,"moves":{"quick":[27,16],"special":[54,77,53]}},{"key":"POKE_077","types":[10],"id":77,"moves":{"quick":[21,9],"special":[108,47,110]}},{"key":"POKE_078","types":[10],"id":78,"moves":{"quick":[7,9],"special":[110,64,62]}},{"key":"POKE_079","types":[11,14],"id":79,"moves":{"quick":[30,35],"special":[112,76,115]}},{"key":"POKE_080","types":[11,14],"id":80,"moves":{"quick":[30,35],"special":[112,115,60]}},{"key":"POKE_081","types":[13,9],"id":81,"moves":{"quick":[6,5],"special":[57,85,90]}},{"key":"POKE_082","types":[13,9],"id":82,"moves":{"quick":[6,5],"special":[57,85,58]}},{"key":"POKE_083","types":[1,3],"id":83,"moves":{"quick":[],"special":[63,123,121]}},{"key":"POKE_084","types":[1,3],"id":84,"moves":{"quick":[11,19],"special":[59,63,126]}},{"key":"POKE_085","types":[1,3],"id":85,"moves":{"quick":[38,39],"special":[59,63,123]}},{"key":"POKE_086","types":[11],"id":86,"moves":{"quick":[17,30],"special":[73,117,74]}},{"key":"POKE_087","types":[11,15],"id":87,"moves":{"quick":[18,17],"special":[117,73,61]}},{"key":"POKE_088","types":[4],"id":88,"moves":{"quick":[25,33],"special":[45,105,100]}},{"key":"POKE_089","types":[4],"id":89,"moves":{"quick":[25,24],"special":[44,102,101]}},{"key":"POKE_090","types":[11],"id":90,"moves":{"quick":[17,21],"special":[70,112,117]}},{"key":"POKE_091","types":[11,15],"id":91,"moves":{"quick":[18,17],"special":[117,114,61]}},{"key":"POKE_092","types":[8,4],"id":92,"moves":{"quick":[12,3],"special":[83,44,100]}},{"key":"POKE_093","types":[8,4],"id":93,"moves":{"quick":[13,12],"special":[84,44,100]}},{"key":"POKE_094","types":[8,4],"id":94,"moves":{"quick":[3,13],"special":[84,44,101]}},{"key":"POKE_095","types":[6,5],"id":95,"moves":{"quick":[27,21],"special":[79,54,86]}},{"key":"POKE_096","types":[14],"id":96,"moves":{"quick":[22,35],"special":[52,76,115]}},{"key":"POKE_097","types":[14],"id":97,"moves":{"quick":[34,35],"special":[76,115,84]}},{"key":"POKE_098","types":[11],"id":98,"moves":{"quick":[37,16],"special":[46,70,112]}},{"key":"POKE_099","types":[11],"id":99,"moves":{"quick":[28,16],"special":[46,107,112]}},{"key":"POKE_100","types":[13],"id":100,"moves":{"quick":[6,21],"special":[57,90,106]}},{"key":"POKE_101","types":[13],"id":101,"moves":{"quick":[6,21],"special":[57,90,43]}},{"key":"POKE_102","types":[12,14],"id":102,"moves":{"quick":[35],"special":[75,115,77]}},{"key":"POKE_103","types":[12,14],"id":103,"moves":{"quick":[35,34],"special":[75,115,120]}},{"key":"POKE_104","types":[5],"id":104,"moves":{"quick":[33,41],"special":[103,50,104]}},{"key":"POKE_105","types":[5],"id":105,"moves":{"quick":[33,41],"special":[103,50,53]}},{"key":"POKE_106","types":[2],"id":106,"moves":{"quick":[7,41],"special":[128,72,54]}},{"key":"POKE_107","types":[2],"id":107,"moves":{"quick":[29,41],"special":[119,55,88]}},{"key":"POKE_108","types":[1],"id":108,"moves":{"quick":[12,34],"special":[43,128,122]}},{"key":"POKE_109","types":[4],"id":109,"moves":{"quick":[25,21],"special":[45,100,44]}},{"key":"POKE_110","types":[4],"id":110,"moves":{"quick":[25,21],"special":[100,84,44]}},{"key":"POKE_111","types":[5,6],"id":111,"moves":{"quick":[33,41],"special":[104,127,128]}},{"key":"POKE_112","types":[5,6],"id":112,"moves":{"quick":[33,41],"special":[48,53,54]}},{"key":"POKE_113","types":[1],"id":113,"moves":{"quick":[22,34],"special":[115,52,96]}},{"key":"POKE_114","types":[12],"id":114,"moves":{"quick":[14],"special":[122,100,120]}},{"key":"POKE_115","types":[1],"id":115,"moves":{"quick":[33,7],"special":[125,53,128]}},{"key":"POKE_116","types":[11],"id":116,"moves":{"quick":[30,37],"special":[70,92,58]}},{"key":"POKE_117","types":[11],"id":117,"moves":{"quick":[30,4],"special":[61,92,114]}},{"key":"POKE_118","types":[11],"id":118,"moves":{"quick":[11,16],"special":[112,127,74]}},{"key":"POKE_119","types":[11],"id":119,"moves":{"quick":[11,24],"special":[117,64,48]}},{"key":"POKE_120","types":[11],"id":120,"moves":{"quick":[19,30],"special":[126,70,80]}},{"key":"POKE_121","types":[11,14],"id":121,"moves":{"quick":[19,30],"special":[114,80,52]}},{"key":"POKE_122","types":[14,18],"id":122,"moves":{"quick":[35,34],"special":[52,115,84]}},{"key":"POKE_123","types":[7,3],"id":123,"moves":{"quick":[39],"special":[69,107,67]}},{"key":"POKE_124","types":[15,14],"id":124,"moves":{"quick":[18,22],"special":[95,55,76]}},{"key":"POKE_125","types":[13],"id":125,"moves":{"quick":[5,7],"special":[88,90,5]}},{"key":"POKE_126","types":[10],"id":126,"moves":{"quick":[9,8],"special":[110,119,49]}},{"key":"POKE_127","types":[7],"id":127,"moves":{"quick":[41],"special":[46,107,71]}},{"key":"POKE_128","types":[1],"id":128,"moves":{"quick":[21,34],"special":[127,86,53]}},{"key":"POKE_129","types":[11],"id":129,"moves":{"quick":[31],"special":[132]}},{"key":"POKE_130","types":[11,3],"id":130,"moves":{"quick":[4,1],"special":[114,91,92]}},{"key":"POKE_131","types":[11,15],"id":131,"moves":{"quick":[18,17],"special":[92,60,61]}},{"key":"POKE_132","types":[1],"id":132,"moves":{"quick":[22],"special":[132]}},{"key":"POKE_133","types":[1],"id":133,"moves":{"quick":[19,21],"special":[50,126,130]}},{"key":"POKE_134","types":[11],"id":134,"moves":{"quick":[30],"special":[112,114,74]}},{"key":"POKE_135","types":[13],"id":135,"moves":{"quick":[5],"special":[57,90,5]}},{"key":"POKE_136","types":[10],"id":136,"moves":{"quick":[9],"special":[110,49,62]}},{"key":"POKE_137","types":[1],"id":137,"moves":{"quick":[19,21],"special":[52,106,57]}},{"key":"POKE_138","types":[6,11],"id":138,"moves":{"quick":[30,16],"special":[77,111,78]}},{"key":"POKE_139","types":[6,11],"id":139,"moves":{"quick":[27,30],"special":[77,114,79]}},{"key":"POKE_140","types":[6,11],"id":140,"moves":{"quick":[20,16],"special":[77,73,78]}},{"key":"POKE_141","types":[6,11],"id":141,"moves":{"quick":[16],"special":[77,112,54]}},{"key":"POKE_142","types":[6,3],"id":142,"moves":{"quick":[39,1],"special":[77,86,43]}},{"key":"POKE_143","types":[1],"id":143,"moves":{"quick":[34,12],"special":[130,43,53]}},{"key":"POKE_144","types":[15,3],"id":144,"moves":{"quick":[18],"special":[60,117,61]}},{"key":"POKE_145","types":[13,3],"id":145,"moves":{"quick":[5],"special":[57,90,5]}},{"key":"POKE_146","types":[10,3],"id":146,"moves":{"quick":[9],"special":[110,62,49]}},{"key":"POKE_147","types":[16],"id":147,"moves":{"quick":[4],"special":[42,91,74]}},{"key":"POKE_148","types":[16],"id":148,"moves":{"quick":[4],"special":[42,74,92]}},{"key":"POKE_149","types":[16,3],"id":149,"moves":{"quick":[4,39],"special":[92,43,93]}},{"key":"POKE_150","types":[14],"id":150,"moves":{"quick":[26,35],"special":[115,84,43]}},{"key":"POKE_151","types":[14],"id":151,"moves":{"quick":[22],"special":[115]}}];
const types = [{"damages":{"half":{"from":[],"to":[6,9]},"no":{"from":[8],"to":[8]},"double":{"from":[2],"to":[]}},"id":1,"key":"TYPE_NORMAL"},{"damages":{"half":{"from":[6,7,17],"to":[3,4,7,14,18]},"no":{"from":[],"to":[8]},"double":{"from":[3,14,18],"to":[1,6,9,15,17]}},"id":2,"key":"TYPE_FIGHTING"},{"damages":{"half":{"from":[2,7,12],"to":[6,9,13]},"no":{"from":[5],"to":[]},"double":{"from":[6,13,15],"to":[2,7,12]}},"id":3,"key":"TYPE_FLYING"},{"damages":{"half":{"from":[2,4,7,12,18],"to":[4,5,6,8]},"no":{"from":[],"to":[9]},"double":{"from":[5,14],"to":[12,18]}},"id":4,"key":"TYPE_POISON"},{"damages":{"half":{"from":[4,6],"to":[7,12]},"no":{"from":[13],"to":[3]},"double":{"from":[11,12,15],"to":[4,6,9,10,13]}},"id":5,"key":"TYPE_GROUND"},{"damages":{"half":{"from":[1,3,4,10],"to":[2,5,9]},"no":{"from":[],"to":[]},"double":{"from":[2,5,9,11,12],"to":[3,7,10,15]}},"id":6,"key":"TYPE_ROCK"},{"damages":{"half":{"from":[2,5,12],"to":[2,3,4,8,9,10,18]},"no":{"from":[],"to":[]},"double":{"from":[3,6,10],"to":[12,14,17]}},"id":7,"key":"TYPE_BUG"},{"damages":{"half":{"from":[4,7],"to":[17]},"no":{"from":[1,2],"to":[1]},"double":{"from":[8,17],"to":[8,14]}},"id":8,"key":"TYPE_GHOST"},{"damages":{"half":{"from":[1,3,6,7,9,12,14,15,16,18],"to":[9,10,11,13]},"no":{"from":[4],"to":[]},"double":{"from":[2,5,10],"to":[6,15,18]}},"id":9,"key":"TYPE_STEEL"},{"damages":{"half":{"from":[7,9,10,12,15,18],"to":[6,10,11,16]},"no":{"from":[],"to":[]},"double":{"from":[5,6,11],"to":[7,9,12,15]}},"id":10,"key":"TYPE_FIRE"},{"damages":{"half":{"from":[9,10,11,15],"to":[11,12,16]},"no":{"from":[],"to":[]},"double":{"from":[12,13],"to":[5,6,10]}},"id":11,"key":"TYPE_WATER"},{"damages":{"half":{"from":[5,11,12,13],"to":[3,4,7,9,10,12,16]},"no":{"from":[],"to":[]},"double":{"from":[3,4,7,10,15],"to":[5,6,11]}},"id":12,"key":"TYPE_GRASS"},{"damages":{"half":{"from":[3,9,13],"to":[12,13,16]},"no":{"from":[],"to":[5]},"double":{"from":[5],"to":[3,11]}},"id":13,"key":"TYPE_ELECTRIC"},{"damages":{"half":{"from":[2,14],"to":[9,14]},"no":{"from":[],"to":[17]},"double":{"from":[7,8,17],"to":[2,4]}},"id":14,"key":"TYPE_PSYCHIC"},{"damages":{"half":{"from":[15],"to":[9,10,11,15]},"no":{"from":[],"to":[]},"double":{"from":[2,6,9,10],"to":[3,5,12,16]}},"id":15,"key":"TYPE_ICE"},{"damages":{"half":{"from":[10,11,12,13],"to":[9]},"no":{"from":[],"to":[18]},"double":{"from":[15,16,18],"to":[16]}},"id":16,"key":"TYPE_DRAGON"},{"damages":{"half":{"from":[8,17],"to":[2,17,18]},"no":{"from":[14],"to":[]},"double":{"from":[2,7,18],"to":[8,14]}},"id":17,"key":"TYPE_DARK"},{"damages":{"half":{"from":[2,7,17],"to":[4,9,10]},"no":{"from":[16],"to":[]},"double":{"from":[4,9],"to":[2,16,17]}},"id":18,"key":"TYPE_FAIRY"},{"damages":{"half":{"from":[],"to":[]},"no":{"from":[],"to":[]},"double":{"from":[],"to":[]}},"id":19,"key":"TYPE_UNKNOWN"},{"damages":{"half":{"from":[],"to":[]},"no":{"from":[],"to":[]},"double":{"from":[],"to":[]}},"id":20,"key":"TYPE_SHADOW"}];
const moves = [{"type":7,"power":3,"key":"MOVE_FURY_CUTTER","id":0},{"type":7,"power":5,"key":"MOVE_BUG_BITE","id":1},{"type":17,"power":6,"key":"MOVE_BITE","id":2},{"type":17,"power":7,"key":"MOVE_SUCKER_PUNCH","id":3},{"type":16,"power":6,"key":"MOVE_DRAGON_BREATH","id":4},{"type":13,"power":5,"key":"MOVE_THUNDER_SHOCK","id":5},{"type":13,"power":7,"key":"MOVE_SPARK","id":6},{"type":2,"power":5,"key":"MOVE_LOW_KICK","id":7},{"type":2,"power":6,"key":"MOVE_KARATE_CHOP","id":8},{"type":10,"power":0,"key":"MOVE_EMBER","id":9},{"type":3,"power":9,"key":"MOVE_WING_ATTACK","id":10},{"type":3,"power":0,"key":"MOVE_PECK","id":11},{"type":8,"power":5,"key":"MOVE_LICK","id":12},{"type":8,"power":1,"key":"MOVE_SHADOW_CLAW","id":13},{"type":12,"power":7,"key":"MOVE_VINE_WHIP","id":14},{"type":12,"power":5,"key":"MOVE_RAZOR_LEAF","id":15},{"type":5,"power":6,"key":"MOVE_MUD_SHOT","id":16},{"type":15,"power":5,"key":"MOVE_ICE_SHARD","id":17},{"type":15,"power":9,"key":"MOVE_FROST_BREATH","id":18},{"type":1,"power":0,"key":"MOVE_QUICK_ATTACK","id":19},{"type":1,"power":6,"key":"MOVE_SCRATCH","id":20},{"type":1,"power":2,"key":"MOVE_TACKLE","id":21},{"type":1,"power":7,"key":"MOVE_POUND","id":22},{"type":1,"power":2,"key":"MOVE_CUT","id":23},{"type":4,"power":2,"key":"MOVE_POISON_JAB","id":24},{"type":4,"power":0,"key":"MOVE_ACID","id":25},{"type":14,"power":7,"key":"MOVE_PSYCHO_CUT","id":26},{"type":6,"power":2,"key":"MOVE_ROCK_THROW","id":27},{"type":9,"power":8,"key":"MOVE_METAL_CLAW","id":28},{"type":9,"power":0,"key":"MOVE_BULLET_PUNCH","id":29},{"type":11,"power":6,"key":"MOVE_WATER_GUN","id":30},{"type":11,"power":0,"key":"MOVE_SPLASH","id":31},{"type":11,"power":0,"key":"MOVE_WATER_GUN","id":32},{"type":5,"power":5,"key":"MOVE_MUD_SLAP","id":33},{"type":14,"power":2,"key":"MOVE_ZEN_HEADBUTT","id":34},{"type":14,"power":5,"key":"MOVE_CONFUSION","id":35},{"type":4,"power":6,"key":"MOVE_POISON_STING","id":36},{"type":11,"power":5,"key":"MOVE_BUBBLE","id":37},{"type":17,"power":2,"key":"MOVE_FEINT_ATTACK","id":38},{"type":9,"power":5,"key":"MOVE_STEEL_WING","id":39},{"type":10,"power":0,"key":"MOVE_FIRE_FANG","id":40},{"type":2,"power":5,"key":"MOVE_ROCK_SMASH","id":41},{"type":1,"power":25,"charge":5,"key":"MOVE_WRAP","id":42},{"type":1,"power":120,"charge":1,"key":"MOVE_HYPER_BEAM","id":43},{"type":17,"power":45,"charge":3,"key":"MOVE_DARK_PULSE","id":44},{"type":4,"power":30,"charge":4,"key":"MOVE_SLUDGE","id":45},{"type":1,"power":25,"charge":5,"key":"MOVE_VICE_GRIP","id":46},{"type":10,"power":40,"charge":4,"key":"MOVE_FLAME_WHEEL","id":47},{"type":7,"power":80,"charge":1,"key":"MOVE_MEGAHORN","id":48},{"type":10,"power":55,"charge":2,"key":"MOVE_FLAMETHROWER","id":49},{"type":5,"power":70,"charge":3,"key":"MOVE_DIG","id":50},{"type":2,"power":60,"charge":1,"key":"MOVE_CROSS_CHOP","id":51},{"type":14,"power":40,"charge":4,"key":"MOVE_PSYBEAM","id":52},{"type":5,"power":100,"charge":1,"key":"MOVE_EARTHQUAKE","id":53},{"type":6,"power":80,"charge":1,"key":"MOVE_STONE_EDGE","id":54},{"type":15,"power":45,"charge":3,"key":"MOVE_ICE_PUNCH","id":55},{"type":14,"power":20,"charge":4,"key":"MOVE_HEART_STAMP","id":56},{"type":13,"power":35,"charge":3,"key":"MOVE_DISCHARGE","id":57},{"type":9,"power":60,"charge":3,"key":"MOVE_FLASH_CANNON","id":58},{"type":3,"power":40,"charge":3,"key":"MOVE_DRILL_PECK","id":59},{"type":15,"power":65,"charge":2,"key":"MOVE_ICE_BEAM","id":60},{"type":15,"power":100,"charge":1,"key":"MOVE_BLIZZARD","id":61},{"type":10,"power":80,"charge":1,"key":"MOVE_HEAT_WAVE","id":62},{"type":3,"power":30,"charge":4,"key":"MOVE_AERIAL_ACE","id":63},{"type":5,"power":50,"charge":3,"key":"MOVE_DRILL_RUN","id":64},{"type":12,"power":65,"charge":2,"key":"MOVE_PETAL_BLIZZARD","id":65},{"type":12,"power":15,"charge":5,"key":"MOVE_MEGA_DRAIN","id":66},{"type":7,"power":75,"charge":2,"key":"MOVE_BUG_BUZZ","id":67},{"type":4,"power":25,"charge":5,"key":"MOVE_POISON_FANG","id":68},{"type":17,"power":30,"charge":4,"key":"MOVE_NIGHT_SLASH","id":69},{"type":11,"power":30,"charge":4,"key":"MOVE_BUBBLE_BEAM","id":70},{"type":2,"power":30,"charge":3,"key":"MOVE_SUBMISSION","id":71},{"type":2,"power":30,"charge":4,"key":"MOVE_LOW_SWEEP","id":72},{"type":11,"power":25,"charge":5,"key":"MOVE_AQUA_JET","id":73},{"type":11,"power":45,"charge":2,"key":"MOVE_AQUA_TAIL","id":74},{"type":12,"power":40,"charge":3,"key":"MOVE_SEED_BOMB","id":75},{"type":14,"power":40,"charge":3,"key":"MOVE_PSYSHOCK","id":76},{"type":6,"power":35,"charge":4,"key":"MOVE_ANCIENT_POWER","id":77},{"type":6,"power":30,"charge":4,"key":"MOVE_ROCK_TOMB","id":78},{"type":6,"power":50,"charge":3,"key":"MOVE_ROCK_SLIDE","id":79},{"type":6,"power":40,"charge":3,"key":"MOVE_POWER_GEM","id":80},{"type":8,"power":15,"charge":5,"key":"MOVE_SHADOW_SNEAK","id":81},{"type":8,"power":20,"charge":4,"key":"MOVE_SHADOW_PUNCH","id":82},{"type":8,"power":30,"charge":4,"key":"MOVE_OMINOUS_WIND","id":83},{"type":8,"power":45,"charge":3,"key":"MOVE_SHADOW_BALL","id":84},{"type":9,"power":30,"charge":4,"key":"MOVE_MAGNET_BOMB","id":85},{"type":9,"power":30,"charge":3,"key":"MOVE_IRON_HEAD","id":86},{"type":13,"power":15,"charge":5,"key":"MOVE_PARABOLIC_CHARGE","id":87},{"type":13,"power":40,"charge":3,"key":"MOVE_THUNDER_PUNCH","id":88},{"type":13,"power":100,"charge":1,"key":"MOVE_THUNDER","id":89},{"type":13,"power":55,"charge":2,"key":"MOVE_THUNDERBOLT","id":90},{"type":16,"power":25,"charge":5,"key":"MOVE_TWISTER","id":91},{"type":16,"power":65,"charge":2,"key":"MOVE_DRAGON_PULSE","id":92},{"type":16,"power":35,"charge":2,"key":"MOVE_DRAGON_CLAW","id":93},{"type":18,"power":25,"charge":5,"key":"MOVE_DISARMING_VOICE","id":94},{"type":18,"power":25,"charge":5,"key":"MOVE_DRAINING_KISS","id":95},{"type":18,"power":55,"charge":3,"key":"MOVE_DAZZLING_GLEAM","id":96},{"type":18,"power":85,"charge":1,"key":"MOVE_MOONBLAST","id":97},{"type":18,"power":55,"charge":2,"key":"MOVE_PLAY_ROUGH","id":98},{"type":4,"power":25,"charge":4,"key":"MOVE_CROSS_POISON","id":99},{"type":4,"power":55,"charge":2,"key":"MOVE_SLUDGE_BOMB","id":100},{"type":4,"power":70,"charge":1,"key":"MOVE_SLUDGE_WAVE","id":101},{"type":4,"power":65,"charge":1,"key":"MOVE_GUNK_SHOT","id":102},{"type":5,"power":25,"charge":4,"key":"MOVE_BONE_CLUB","id":103},{"type":5,"power":35,"charge":4,"key":"MOVE_BULLDOZE","id":104},{"type":5,"power":30,"charge":4,"key":"MOVE_MUD_BOMB","id":105},{"type":7,"power":45,"charge":3,"key":"MOVE_SIGNAL_BEAM","id":106},{"type":7,"power":35,"charge":3,"key":"MOVE_X_SCISSOR","id":107},{"type":10,"power":25,"charge":5,"key":"MOVE_FLAME_CHARGE","id":108},{"type":10,"power":30,"charge":4,"key":"MOVE_FLAME_BURST","id":109},{"type":10,"power":100,"charge":1,"key":"MOVE_FIRE_BLAST","id":110},{"type":11,"power":25,"charge":4,"key":"MOVE_BRINE","id":111},{"type":11,"power":35,"charge":4,"key":"MOVE_WATER_PULSE","id":112},{"type":11,"power":55,"charge":3,"key":"MOVE_SCALD","id":113},{"type":11,"power":90,"charge":1,"key":"MOVE_HYDRO_PUMP","id":114},{"type":14,"power":55,"charge":2,"key":"MOVE_PSYCHIC","id":115},{"type":14,"power":70,"charge":1,"key":"MOVE_PSYSTRIKE","id":116},{"type":15,"power":25,"charge":5,"key":"MOVE_ICY_WIND","id":117},{"type":12,"power":35,"charge":3,"key":"MOVE_GIGA_DRAIN","id":118},{"type":10,"power":40,"charge":3,"key":"MOVE_FIRE_PUNCH","id":119},{"type":12,"power":120,"charge":1,"key":"MOVE_SOLAR_BEAM","id":120},{"type":12,"power":45,"charge":2,"key":"MOVE_LEAF_BLADE","id":121},{"type":12,"power":70,"charge":1,"key":"MOVE_POWER_WHIP","id":122},{"type":3,"power":30,"charge":4,"key":"MOVE_AIR_CUTTER","id":123},{"type":3,"power":80,"charge":1,"key":"MOVE_HURRICANE","id":124},{"type":2,"power":30,"charge":3,"key":"MOVE_BRICK_BREAK","id":125},{"type":1,"power":30,"charge":4,"key":"MOVE_SWIFT","id":126},{"type":1,"power":25,"charge":4,"key":"MOVE_HORN_ATTACK","id":127},{"type":1,"power":30,"charge":4,"key":"MOVE_STOMP","id":128},{"type":1,"power":35,"charge":3,"key":"MOVE_HYPER_FANG","id":129},{"type":1,"power":40,"charge":2,"key":"MOVE_BODY_SLAM","id":130},{"type":1,"power":35,"charge":3,"key":"MOVE_REST","id":131},{"type":1,"power":15,"charge":5,"key":"MOVE_STRUGGLE","id":132}];
const dictionary = {"TEXT_APP_TITLE":{"de":"Gym Advisor","en":"Gym Advisor","fr":"Arène Master","jp":"Gym Advisor","ko":"Gym Advisor","it":"Gym Advisor","es":"Gym Advisor"},"TEXT_MOST_SEEN":{"de":"Most Seen","en":"Most Seen","fr":"Les plus rencontrés","jp":"Most Seen","ko":"Most Seen","it":"Most Seen","es":"Most Seen"},"TEXT_CAN_BE_BEATEN_BY":{"de":"Can be beaten by","en":"Can be beaten by","fr":"Faible contre","jp":"Can be beaten by","ko":"Can be beaten by","it":"Can be beaten by","es":"Can be beaten by"},"TEXT_INTRO_1":{"de":"Type matching counts for more than 70% in the determination of the winner in a Gym battle","en":"Type matching counts for more than 70% in the determination of the winner in a Gym battle","fr":"Contrer un pokémon par le type opposé compte pour plus de 70% dans la détermination du vainqueur lors d'un combat d'arène","jp":"Type matching counts for more than 70% in the determination of the winner in a Gym battle","ko":"Type matching counts for more than 70% in the determination of the winner in a Gym battle","it":"Type matching counts for more than 70% in the determination of the winner in a Gym battle","es":"Type matching counts for more than 70% in the determination of the winner in a Gym battle"},"TEXT_INTRO_2":{"de":"This tool computes counters for each pokemon so you can win gym battle easier!","en":"This tool computes counters for each pokemon so you can win gym battle easier!","fr":"Cet outil calcule les contres pour chaque pokémon pour que tu puisses conquérir les arènes comme un thug","jp":"This tool computes counters for each pokemon so you can win gym battle easier!","ko":"This tool computes counters for each pokemon so you can win gym battle easier!","it":"This tool computes counters for each pokemon so you can win gym battle easier!","es":"This tool computes counters for each pokemon so you can win gym battle easier!"},"TEXT_INTRO_3":{"de":"Select a pokemon in the below list to see which pokemon counters it","en":"Select a pokemon in the below list to see which pokemon counters it","fr":"Choisis un pokémon dans la liste ci-dessous pour savoir comment le contrer","jp":"Select a pokemon in the below list to see which pokemon counters it","ko":"Select a pokemon in the below list to see which pokemon counters it","it":"Select a pokemon in the below list to see which pokemon counters it","es":"Select a pokemon in the below list to see which pokemon counters it"},"POKE_001":{"de":"Bisasam","en":"Bulbasaur","fr":"Bulbizarre","jp":"フシギダネ","jp_lat":"Fushigidane","ko":"이상해씨","ko_lat":"Isanghaessi"},"POKE_002":{"de":"Bisaknosp","en":"Ivysaur","fr":"Herbizarre","jp":"フシギソウ","jp_lat":"Fushigisou","ko":"이상해풀","ko_lat":"Isanghaepul"},"POKE_003":{"de":"Bisaflor","en":"Venusaur","fr":"Florizarre","jp":"フシギバナ","jp_lat":"Fushigibana","ko":"이상해꽃","ko_lat":"Isanghaekkot"},"POKE_004":{"de":"Glumanda","en":"Charmander","fr":"Salamèche","jp":"ヒトカゲ","jp_lat":"Hitokage","ko":"파이리","ko_lat":"Pairi"},"POKE_005":{"de":"Glutexo","en":"Charmeleon","fr":"Reptincel","jp":"リザード","jp_lat":"Lizardo","ko":"리자드","ko_lat":"Rijadeu"},"POKE_006":{"de":"Glurak","en":"Charizard","fr":"Dracaufeu","jp":"リザードン","jp_lat":"Lizardon","ko":"리자몽","ko_lat":"Rijamong"},"POKE_007":{"de":"Schiggy","en":"Squirtle","fr":"Carapuce","jp":"ゼニガメ","jp_lat":"Zenigame","ko":"꼬부기","ko_lat":"Kkobugi"},"POKE_008":{"de":"Schillok","en":"Wartortle","fr":"Carabaffe","jp":"カメール","jp_lat":"Kameil","ko":"어니부기","ko_lat":"Eonibugi"},"POKE_009":{"de":"Turtok","en":"Blastoise","fr":"Tortank","jp":"カメックス","jp_lat":"Kamex","ko":"거북왕","ko_lat":"Geobukwang"},"POKE_010":{"de":"Raupy","en":"Caterpie","fr":"Chenipan","jp":"キャタピー","jp_lat":"Caterpie","ko":"캐터피","ko_lat":"Kaeteopi"},"POKE_011":{"de":"Safcon","en":"Metapod","fr":"Chrysacier","jp":"トランセル","jp_lat":"Trancell","ko":"단데기","ko_lat":"Dandegi"},"POKE_012":{"de":"Smettbo","en":"Butterfree","fr":"Papilusion","jp":"バタフリー","jp_lat":"Butterfree","ko":"버터플","ko_lat":"Beoteopeul"},"POKE_013":{"de":"Hornliu","en":"Weedle","fr":"Aspicot","jp":"ビードル","jp_lat":"Beedle","ko":"뿔충이","ko_lat":"Ppulchungi"},"POKE_014":{"de":"Kokuna","en":"Kakuna","fr":"Coconfort","jp":"コクーン","jp_lat":"Cocoon","ko":"딱충이","ko_lat":"Ttakchungi"},"POKE_015":{"de":"Bibor","en":"Beedrill","fr":"Dardargnan","jp":"スピアー","jp_lat":"Spear","ko":"독침붕","ko_lat":"Dokchimbung"},"POKE_016":{"de":"Taubsi","en":"Pidgey","fr":"Roucool","jp":"ポッポ","jp_lat":"Poppo","ko":"구구","ko_lat":"Gugu"},"POKE_017":{"de":"Tauboga","en":"Pidgeotto","fr":"Roucoups","jp":"ピジョン","jp_lat":"Pigeon","ko":"피죤","ko_lat":"Pijyon"},"POKE_018":{"de":"Tauboss","en":"Pidgeot","fr":"Roucarnage","jp":"ピジョット","jp_lat":"Pigeot","ko":"피죤투","ko_lat":"Pijyontu"},"POKE_019":{"de":"Rattfratz","en":"Rattata","fr":"Rattata","jp":"コラッタ","jp_lat":"Koratta","ko":"꼬렛","ko_lat":"Kkoret"},"POKE_020":{"de":"Rattikarl","en":"Raticate","fr":"Rattatac","jp":"ラッタ","jp_lat":"Ratta","ko":"레트라","ko_lat":"Reteura"},"POKE_021":{"de":"Habitak","en":"Spearow","fr":"Piafabec","jp":"オニスズメ","jp_lat":"Onisuzume","ko":"깨비참","ko_lat":"Kkaebicham"},"POKE_022":{"de":"Ibitak","en":"Fearow","fr":"Rapasdepic","jp":"オニドリル","jp_lat":"Onidrill","ko":"깨비드릴조","ko_lat":"Kkaebideuriljo"},"POKE_023":{"de":"Rettan","en":"Ekans","fr":"Abo","jp":"アーボ","jp_lat":"Arbo","ko":"아보","ko_lat":"Abo"},"POKE_024":{"de":"Arbok","en":"Arbok","fr":"Arbok","jp":"アーボック","jp_lat":"Arbok","ko":"아보크","ko_lat":"Abokeu"},"POKE_025":{"de":"Pikachu","en":"Pikachu","fr":"Pikachu","jp":"ピカチュウ","jp_lat":"Pikachu","ko":"피카츄","ko_lat":"Pikachyu"},"POKE_026":{"de":"Raichu","en":"Raichu","fr":"Raichu","jp":"ライチュウ","jp_lat":"Raichu","ko":"라이츄","ko_lat":"Raichyu"},"POKE_027":{"de":"Sandan","en":"Sandshrew","fr":"Sabelette","jp":"サンド","jp_lat":"Sand","ko":"모래두지","ko_lat":"Moraeduji"},"POKE_028":{"de":"Sandamer","en":"Sandslash","fr":"Sablaireau","jp":"サンドパン","jp_lat":"Sandpan","ko":"고지","ko_lat":"Goji"},"POKE_029":{"de":"Nidoran♀","en":"Nidoran♀","fr":"Nidoran♀","jp":"ニドラン♀","jp_lat":"Nidoran♀","ko":"니드런♀","ko_lat":"Nideureon♀"},"POKE_030":{"de":"Nidorina","en":"Nidorina","fr":"Nidorina","jp":"ニドリーナ","jp_lat":"Nidorina","ko":"니드리나","ko_lat":"Nideurina"},"POKE_031":{"de":"Nidoqueen","en":"Nidoqueen","fr":"Nidoqueen","jp":"ニドクイン","jp_lat":"Nidoqueen","ko":"니드퀸","ko_lat":"Nideukwin"},"POKE_032":{"de":"Nidoran♂","en":"Nidoran♂","fr":"Nidoran♂","jp":"ニドラン♂","jp_lat":"Nidoran♂","ko":"니드런♂","ko_lat":"Nideureon♂"},"POKE_033":{"de":"Nidorino","en":"Nidorino","fr":"Nidorino","jp":"ニドリーノ","jp_lat":"Nidorino","ko":"니드리노","ko_lat":"Nideurino"},"POKE_034":{"de":"Nidoking","en":"Nidoking","fr":"Nidoking","jp":"ニドキング","jp_lat":"Nidoking","ko":"니드킹","ko_lat":"Nideuking"},"POKE_035":{"de":"Piepi","en":"Clefairy","fr":"Mélofée","jp":"ピッピ","jp_lat":"Pippi","ko":"삐삐","ko_lat":"Ppippi"},"POKE_036":{"de":"Pixi","en":"Clefable","fr":"Mélodelfe","jp":"ピクシー","jp_lat":"Pixy","ko":"픽시","ko_lat":"Piksi"},"POKE_037":{"de":"Vulpix","en":"Vulpix","fr":"Goupix","jp":"ロコン","jp_lat":"Rokon","ko":"식스테일","ko_lat":"Sikseuteil"},"POKE_038":{"de":"Vulnona","en":"Ninetales","fr":"Feunard","jp":"キュウコン","jp_lat":"Kyukon","ko":"나인테일","ko_lat":"Nainteil"},"POKE_039":{"de":"Pummeluff","en":"Jigglypuff","fr":"Rondoudou","jp":"プリン","jp_lat":"Purin","ko":"푸린","ko_lat":"Purin"},"POKE_040":{"de":"Knuddeluff","en":"Wigglytuff","fr":"Grodoudou","jp":"プクリン","jp_lat":"Pukurin","ko":"푸크린","ko_lat":"Pukeurin"},"POKE_041":{"de":"Zubat","en":"Zubat","fr":"Nosferapti","jp":"ズバット","jp_lat":"Zubat","ko":"주뱃","ko_lat":"Jubaet"},"POKE_042":{"de":"Golbat","en":"Golbat","fr":"Nosferalto","jp":"ゴルバット","jp_lat":"Golbat","ko":"골뱃","ko_lat":"Golbaet"},"POKE_043":{"de":"Myrapla","en":"Oddish","fr":"Mystherbe","jp":"ナゾノクサ","jp_lat":"Nazonokusa","ko":"뚜벅쵸","ko_lat":"Ttubeokchyo"},"POKE_044":{"de":"Duflor","en":"Gloom","fr":"Ortide","jp":"クサイハナ","jp_lat":"Kusaihana","ko":"냄새꼬","ko_lat":"Naemsaekko"},"POKE_045":{"de":"Giflor","en":"Vileplume","fr":"Rafflesia","jp":"ラフレシア","jp_lat":"Ruffresia","ko":"라플레시아","ko_lat":"Rapeullesia"},"POKE_046":{"de":"Paras","en":"Paras","fr":"Paras","jp":"パラス","jp_lat":"Paras","ko":"파라스","ko_lat":"Paraseu"},"POKE_047":{"de":"Parasek","en":"Parasect","fr":"Parasect","jp":"パラセクト","jp_lat":"Parasect","ko":"파라섹트","ko_lat":"Parasekteu"},"POKE_048":{"de":"Bluzuk","en":"Venonat","fr":"Mimitoss","jp":"コンパン","jp_lat":"Kongpang","ko":"콘팡","ko_lat":"Konpang"},"POKE_049":{"de":"Omot","en":"Venomoth","fr":"Aéromite","jp":"モルフォン","jp_lat":"Morphon","ko":"도나리","ko_lat":"Donari"},"POKE_050":{"de":"Digda","en":"Diglett","fr":"Taupiqueur","jp":"ディグダ","jp_lat":"Digda","ko":"디그다","ko_lat":"Digeuda"},"POKE_051":{"de":"Digdri","en":"Dugtrio","fr":"Triopikeur","jp":"ダグトリオ","jp_lat":"Dugtrio","ko":"닥트리오","ko_lat":"Dakteurio"},"POKE_052":{"de":"Mauzi","en":"Meowth","fr":"Miaouss","jp":"ニャース","jp_lat":"Nyarth","ko":"나옹","ko_lat":"Naong"},"POKE_053":{"de":"Snobilikat","en":"Persian","fr":"Persian","jp":"ペルシアン","jp_lat":"Persian","ko":"페르시온","ko_lat":"Pereusion"},"POKE_054":{"de":"Enton","en":"Psyduck","fr":"Psykokwak","jp":"コダック","jp_lat":"Koduck","ko":"고라파덕","ko_lat":"Gorapadeok"},"POKE_055":{"de":"Entoron","en":"Golduck","fr":"Akwakwak","jp":"ゴルダック","jp_lat":"Golduck","ko":"골덕","ko_lat":"Goldeok"},"POKE_056":{"de":"Menki","en":"Mankey","fr":"Férosinge","jp":"マンキー","jp_lat":"Mankey","ko":"망키","ko_lat":"Mangki"},"POKE_057":{"de":"Rasaff","en":"Primeape","fr":"Colossinge","jp":"オコリザル","jp_lat":"Okorizaru","ko":"성원숭","ko_lat":"Seongwonsung"},"POKE_058":{"de":"Fukano","en":"Growlithe","fr":"Caninos","jp":"ガーディ","jp_lat":"Gardie","ko":"가디","ko_lat":"Gadi"},"POKE_059":{"de":"Arkani","en":"Arcanine","fr":"Arcanin","jp":"ウインディ","jp_lat":"Windie","ko":"윈디","ko_lat":"Windi"},"POKE_060":{"de":"Quapsel","en":"Poliwag","fr":"Ptitard","jp":"ニョロモ","jp_lat":"Nyoromo","ko":"발챙이","ko_lat":"Balchaengi"},"POKE_061":{"de":"Quaputzi","en":"Poliwhirl","fr":"Têtarte","jp":"ニョロゾ","jp_lat":"Nyorozo","ko":"슈륙챙이","ko_lat":"Suryukchaengi"},"POKE_062":{"de":"Quappo","en":"Poliwrath","fr":"Tartard","jp":"ニョロボン","jp_lat":"Nyorobon","ko":"강챙이","ko_lat":"Gangchaengi"},"POKE_063":{"de":"Abra","en":"Abra","fr":"Abra","jp":"ケーシィ","jp_lat":"Casey","ko":"캐이시","ko_lat":"Kaeisi"},"POKE_064":{"de":"Kadabra","en":"Kadabra","fr":"Kadabra","jp":"ユンゲラー","jp_lat":"Yungerer","ko":"윤겔라","ko_lat":"Yun-gella"},"POKE_065":{"de":"Simsala","en":"Alakazam","fr":"Alakazam","jp":"フーディン","jp_lat":"Foodin","ko":"후딘","ko_lat":"Hudin"},"POKE_066":{"de":"Machollo","en":"Machop","fr":"Machoc","jp":"ワンリキー","jp_lat":"Wanriky","ko":"알통몬","ko_lat":"Altongmon"},"POKE_067":{"de":"Maschock","en":"Machoke","fr":"Machopeur","jp":"ゴーリキー","jp_lat":"Goriky","ko":"근육몬","ko_lat":"Geunyungmon"},"POKE_068":{"de":"Machomei","en":"Machamp","fr":"Mackogneur","jp":"カイリキー","jp_lat":"Kairiky","ko":"괴력몬","ko_lat":"Goeryeokmon"},"POKE_069":{"de":"Knofensa","en":"Bellsprout","fr":"Chétiflor","jp":"マダツボミ","jp_lat":"Madatsubomi","ko":"모다피","ko_lat":"Modapi"},"POKE_070":{"de":"Ultrigaria","en":"Weepinbell","fr":"Boustiflor","jp":"ウツドン","jp_lat":"Utsudon","ko":"우츠동","ko_lat":"Ucheudong"},"POKE_071":{"de":"Sarzenia","en":"Victreebel","fr":"Empiflor","jp":"ウツボット","jp_lat":"Utsubot","ko":"우츠보트","ko_lat":"Ucheuboteu"},"POKE_072":{"de":"Tentacha","en":"Tentacool","fr":"Tentacool","jp":"メノクラゲ","jp_lat":"Menokurage","ko":"왕눈해","ko_lat":"Wangnunhae"},"POKE_073":{"de":"Tentoxa","en":"Tentacruel","fr":"Tentacruel","jp":"ドククラゲ","jp_lat":"Dokukurage","ko":"독파리","ko_lat":"Dokpari"},"POKE_074":{"de":"Kleinstein","en":"Geodude","fr":"Racaillou","jp":"イシツブテ","jp_lat":"Ishitsubute","ko":"꼬마돌","ko_lat":"Kkomadol"},"POKE_075":{"de":"Georok","en":"Graveler","fr":"Gravalanch","jp":"ゴローン","jp_lat":"Golone","ko":"데구리","ko_lat":"Deguri"},"POKE_076":{"de":"Geowaz","en":"Golem","fr":"Grolem","jp":"ゴローニャ","jp_lat":"Golonya","ko":"딱구리","ko_lat":"Ttakguri"},"POKE_077":{"de":"Ponita","en":"Ponyta","fr":"Ponyta","jp":"ポニータ","jp_lat":"Ponyta","ko":"포니타","ko_lat":"Ponita"},"POKE_078":{"de":"Gallopa","en":"Rapidash","fr":"Galopa","jp":"ギャロップ","jp_lat":"Gallop","ko":"날쌩마","ko_lat":"Nalssaengma"},"POKE_079":{"de":"Flegmon","en":"Slowpoke","fr":"Ramoloss","jp":"ヤドン","jp_lat":"Yadon","ko":"야돈","ko_lat":"Yadon"},"POKE_080":{"de":"Lahmus","en":"Slowbro","fr":"Flagadoss","jp":"ヤドラン","jp_lat":"Yadoran","ko":"야도란","ko_lat":"Yadoran"},"POKE_081":{"de":"Magnetilo","en":"Magnemite","fr":"Magnéti","jp":"コイル","jp_lat":"Coil","ko":"코일","ko_lat":"Koil"},"POKE_082":{"de":"Magneton","en":"Magneton","fr":"Magnéton","jp":"レアコイル","jp_lat":"Rarecoil","ko":"레어코일","ko_lat":"Reeokoil"},"POKE_083":{"de":"Porenta","en":"Farfetch'd","fr":"Canarticho","jp":"カモネギ","jp_lat":"Kamonegi","ko":"파오리","ko_lat":"Paori"},"POKE_084":{"de":"Dodu","en":"Doduo","fr":"Doduo","jp":"ドードー","jp_lat":"Dodo","ko":"두두","ko_lat":"Dudu"},"POKE_085":{"de":"Dodri","en":"Dodrio","fr":"Dodrio","jp":"ドードリオ","jp_lat":"Dodorio","ko":"두트리오","ko_lat":"Duteurio"},"POKE_086":{"de":"Jurob","en":"Seel","fr":"Otaria","jp":"パウワウ","jp_lat":"Pawou","ko":"쥬쥬","ko_lat":"Jyujyu"},"POKE_087":{"de":"Jugong","en":"Dewgong","fr":"Lamantine","jp":"ジュゴン","jp_lat":"Jugon","ko":"쥬레곤","ko_lat":"Jyuregon"},"POKE_088":{"de":"Sleima","en":"Grimer","fr":"Tadmorv","jp":"ベトベター","jp_lat":"Betbeter","ko":"질퍽이","ko_lat":"Jilpeogi"},"POKE_089":{"de":"Sleimok","en":"Muk","fr":"Grotadmorv","jp":"ベトベトン","jp_lat":"Betbeton","ko":"질뻐기","ko_lat":"Jilppeogi"},"POKE_090":{"de":"Muschas","en":"Shellder","fr":"Kokiyas","jp":"シェルダー","jp_lat":"Shellder","ko":"셀러","ko_lat":"Selleo"},"POKE_091":{"de":"Austos","en":"Cloyster","fr":"Crustabri","jp":"パルシェン","jp_lat":"Parshen","ko":"파르셀","ko_lat":"Pareusel"},"POKE_092":{"de":"Nebulak","en":"Gastly","fr":"Fantominus","jp":"ゴース","jp_lat":"Ghos","ko":"고오스","ko_lat":"Gooseu"},"POKE_093":{"de":"Alpollo","en":"Haunter","fr":"Spectrum","jp":"ゴースト","jp_lat":"Ghost","ko":"고우스트","ko_lat":"Gouseuteu"},"POKE_094":{"de":"Gengar","en":"Gengar","fr":"Ectoplasma","jp":"ゲンガー","jp_lat":"Gangar","ko":"팬텀","ko_lat":"Paenteom"},"POKE_095":{"de":"Onix","en":"Onix","fr":"Onix","jp":"イワーク","jp_lat":"Iwark","ko":"롱스톤","ko_lat":"Rongseuton"},"POKE_096":{"de":"Traumato","en":"Drowzee","fr":"Soporifik","jp":"スリープ","jp_lat":"Sleepe","ko":"슬리프","ko_lat":"Seullipeu"},"POKE_097":{"de":"Hypno","en":"Hypno","fr":"Hypnomade","jp":"スリーパー","jp_lat":"Sleeper","ko":"슬리퍼","ko_lat":"Seullipeo"},"POKE_098":{"de":"Krabby","en":"Krabby","fr":"Krabby","jp":"クラブ","jp_lat":"Crab","ko":"크랩","ko_lat":"Keuraep"},"POKE_099":{"de":"Kingler","en":"Kingler","fr":"Krabboss","jp":"キングラー","jp_lat":"Kingler","ko":"킹크랩","ko_lat":"Kingkeuraep"},"POKE_100":{"de":"Voltobal","en":"Voltorb","fr":"Voltorbe","jp":"ビリリダマ","jp_lat":"Biriridama","ko":"찌리리공","ko_lat":"Jjiririgong"},"POKE_101":{"de":"Lektrobal","en":"Electrode","fr":"Électrode","jp":"マルマイン","jp_lat":"Marumine","ko":"붐볼","ko_lat":"Bumbol"},"POKE_102":{"de":"Owei","en":"Exeggcute","fr":"Noeunoeuf","jp":"タマタマ","jp_lat":"Tamatama","ko":"아라리","ko_lat":"Arari"},"POKE_103":{"de":"Kokowei","en":"Exeggutor","fr":"Noadkoko","jp":"ナッシー","jp_lat":"Nassy","ko":"나시","ko_lat":"Nasi"},"POKE_104":{"de":"Tragosso","en":"Cubone","fr":"Osselait","jp":"カラカラ","jp_lat":"Karakara","ko":"탕구리","ko_lat":"Tangguri"},"POKE_105":{"de":"Knogga","en":"Marowak","fr":"Ossatueur","jp":"ガラガラ","jp_lat":"Garagara","ko":"텅구리","ko_lat":"Teongguri"},"POKE_106":{"de":"Kicklee","en":"Hitmonlee","fr":"Kicklee","jp":"サワムラー","jp_lat":"Sawamular","ko":"시라소몬","ko_lat":"Sirasomon"},"POKE_107":{"de":"Nockchan","en":"Hitmonchan","fr":"Tygnon","jp":"エビワラー","jp_lat":"Ebiwalar","ko":"홍수몬","ko_lat":"Hongsumon"},"POKE_108":{"de":"Schlurp","en":"Lickitung","fr":"Excelangue","jp":"ベロリンガ","jp_lat":"Beroringa","ko":"내루미","ko_lat":"Naerumi"},"POKE_109":{"de":"Smogon","en":"Koffing","fr":"Smogo","jp":"ドガース","jp_lat":"Dogars","ko":"또가스","ko_lat":"Ttogaseu"},"POKE_110":{"de":"Smogmog","en":"Weezing","fr":"Smogogo","jp":"マタドガス","jp_lat":"Matadogas","ko":"또도가스","ko_lat":"Ttodogaseu"},"POKE_111":{"de":"Rihorn","en":"Rhyhorn","fr":"Rhinocorne","jp":"サイホーン","jp_lat":"Sihorn","ko":"뿔카노","ko_lat":"Ppulkano"},"POKE_112":{"de":"Rizeros","en":"Rhydon","fr":"Rhinoféros","jp":"サイドン","jp_lat":"Sidon","ko":"코뿌리","ko_lat":"Koppuri"},"POKE_113":{"de":"Chaneira","en":"Chansey","fr":"Leveinard","jp":"ラッキー","jp_lat":"Lucky","ko":"럭키","ko_lat":"Reokki"},"POKE_114":{"de":"Tangela","en":"Tangela","fr":"Saquedeneu","jp":"モンジャラ","jp_lat":"Monjara","ko":"덩쿠리","ko_lat":"Deongguri"},"POKE_115":{"de":"Kangama","en":"Kangaskhan","fr":"Kangourex","jp":"ガルーラ","jp_lat":"Garura","ko":"캥카","ko_lat":"Kaengka"},"POKE_116":{"de":"Seeper","en":"Horsea","fr":"Hypotrempe","jp":"タッツー","jp_lat":"Tattu","ko":"쏘드라","ko_lat":"Ssodeura"},"POKE_117":{"de":"Seemon","en":"Seadra","fr":"Hypocéan","jp":"シードラ","jp_lat":"Seadra","ko":"시드라","ko_lat":"Sideura"},"POKE_118":{"de":"Goldini","en":"Goldeen","fr":"Poissirène","jp":"トサキント","jp_lat":"Tosakinto","ko":"콘치","ko_lat":"Konchi"},"POKE_119":{"de":"Golking","en":"Seaking","fr":"Poissoroy","jp":"アズマオウ","jp_lat":"Azumao","ko":"왕콘치","ko_lat":"Wangkonchi"},"POKE_120":{"de":"Sterndu","en":"Staryu","fr":"Stari","jp":"ヒトデマン","jp_lat":"Hitodeman","ko":"별가사리","ko_lat":"Byeolgasari"},"POKE_121":{"de":"Starmie","en":"Starmie","fr":"Staross","jp":"スターミー","jp_lat":"Starmie","ko":"아쿠스타","ko_lat":"Akuseuta"},"POKE_122":{"de":"Pantimos","en":"Mr. Mime","fr":"M.","jp":"Mime","jp_lat":"バリヤード","ko":"Barrierd","ko_lat":"마임맨"},"POKE_123":{"de":"Sichlor","en":"Scyther","fr":"Insécateur","jp":"ストライク","jp_lat":"Strike","ko":"스라크","ko_lat":"Seurakeu"},"POKE_124":{"de":"Rossana","en":"Jynx","fr":"Lippoutou","jp":"ルージュラ","jp_lat":"Rougela","ko":"루주라","ko_lat":"Rujura"},"POKE_125":{"de":"Elektek","en":"Electabuzz","fr":"Élektek","jp":"エレブー","jp_lat":"Eleboo","ko":"에레브","ko_lat":"Erebeu"},"POKE_126":{"de":"Magmar","en":"Magmar","fr":"Magmar","jp":"ブーバー","jp_lat":"Boober","ko":"마그마","ko_lat":"Mageuma"},"POKE_127":{"de":"Pinsir","en":"Pinsir","fr":"Scarabrute","jp":"カイロス","jp_lat":"Kailios","ko":"쁘사이저","ko_lat":"Ppeusaijeo"},"POKE_128":{"de":"Tauros","en":"Tauros","fr":"Tauros","jp":"ケンタロス","jp_lat":"Kentauros","ko":"켄타로스","ko_lat":"Kentaroseu"},"POKE_129":{"de":"Karpador","en":"Magikarp","fr":"Magicarpe","jp":"コイキング","jp_lat":"Koiking","ko":"잉어킹","ko_lat":"Ingeoking"},"POKE_130":{"de":"Garados","en":"Gyarados","fr":"Léviator","jp":"ギャラドス","jp_lat":"Gyarados","ko":"갸라도스","ko_lat":"Gyaradoseu"},"POKE_131":{"de":"Lapras","en":"Lapras","fr":"Lokhlass","jp":"ラプラス","jp_lat":"Laplace","ko":"라프라스","ko_lat":"Rapeuraseu"},"POKE_132":{"de":"Ditto","en":"Ditto","fr":"Métamorph","jp":"メタモン","jp_lat":"Metamon","ko":"메타몽","ko_lat":"Metamong"},"POKE_133":{"de":"Evoli","en":"Eevee","fr":"Évoli","jp":"イーブイ","jp_lat":"Eievui","ko":"이브이","ko_lat":"Ibeui"},"POKE_134":{"de":"Aquana","en":"Vaporeon","fr":"Aquali","jp":"シャワーズ","jp_lat":"Showers","ko":"샤미드","ko_lat":"Syamideu"},"POKE_135":{"de":"Blitza","en":"Jolteon","fr":"Voltali","jp":"サンダース","jp_lat":"Thunders","ko":"쥬피썬더","ko_lat":"Jyupisseondeo"},"POKE_136":{"de":"Flamara","en":"Flareon","fr":"Pyroli","jp":"ブースター","jp_lat":"Booster","ko":"부스터","ko_lat":"Buseuteo"},"POKE_137":{"de":"Porygon","en":"Porygon","fr":"Porygon","jp":"ポリゴン","jp_lat":"Porygon","ko":"폴리곤","ko_lat":"Polligon"},"POKE_138":{"de":"Amonitas","en":"Omanyte","fr":"Amonita","jp":"オムナイト","jp_lat":"Omnite","ko":"암나이트","ko_lat":"Amnaiteu"},"POKE_139":{"de":"Amoroso","en":"Omastar","fr":"Amonistar","jp":"オムスター","jp_lat":"Omstar","ko":"암스타","ko_lat":"Amseuta"},"POKE_140":{"de":"Kabuto","en":"Kabuto","fr":"Kabuto","jp":"カブト","jp_lat":"Kabuto","ko":"투구","ko_lat":"Tugu"},"POKE_141":{"de":"Kabutops","en":"Kabutops","fr":"Kabutops","jp":"カブトプス","jp_lat":"Kabutops","ko":"투구푸스","ko_lat":"Tugupuseu"},"POKE_142":{"de":"Aerodactyl","en":"Aerodactyl","fr":"Ptéra","jp":"プテラ","jp_lat":"Ptera","ko":"프테라","ko_lat":"Peutera"},"POKE_143":{"de":"Relaxo","en":"Snorlax","fr":"Ronflex","jp":"カビゴン","jp_lat":"Kabigon","ko":"잠만보","ko_lat":"Jammanbo"},"POKE_144":{"de":"Arktos","en":"Articuno","fr":"Artikodin","jp":"フリーザー","jp_lat":"Freezer","ko":"프리져","ko_lat":"Peurijyeo"},"POKE_145":{"de":"Zapdos","en":"Zapdos","fr":"Électhor","jp":"サンダー","jp_lat":"Thunder","ko":"썬더","ko_lat":"Sseondeo"},"POKE_146":{"de":"Lavados","en":"Moltres","fr":"Sulfura","jp":"ファイヤー","jp_lat":"Fire","ko":"파이어","ko_lat":"Paieo"},"POKE_147":{"de":"Dratini","en":"Dratini","fr":"Minidraco","jp":"ミニリュウ","jp_lat":"Miniryu","ko":"미뇽","ko_lat":"Minyong"},"POKE_148":{"de":"Dragonir","en":"Dragonair","fr":"Draco","jp":"ハクリュー","jp_lat":"Hakuryu","ko":"신뇽","ko_lat":"Sinnyong"},"POKE_149":{"de":"Dragoran","en":"Dragonite","fr":"Dracolosse","jp":"カイリュー","jp_lat":"Kairyu","ko":"망나뇽","ko_lat":"Mangnanyong"},"POKE_150":{"de":"Mewtu","en":"Mewtwo","fr":"Mewtwo","jp":"ミュウツー","jp_lat":"Mewtwo","ko":"뮤츠","ko_lat":"Myucheu"},"POKE_151":{"de":"Mew","en":"Mew","fr":"Mew","jp":"ミュウ","jp_lat":"Mew","ko":"뮤","ko_lat":"Myu"},"TYPE_NORMAL":{"ja":"ノーマル","ko":"노말","fr":"Normal","de":"Normal","es":"Normal","it":"Normale","en":"Normal"},"TYPE_FIGHTING":{"ja":"かくとう","ko":"격투","fr":"Combat","de":"Kampf","es":"Lucha","it":"Lotta","en":"Fighting"},"TYPE_FLYING":{"ja":"ひこう","ko":"비행","fr":"Vol","de":"Flug","es":"Volador","it":"Volante","en":"Flying"},"TYPE_POISON":{"ja":"どく","ko":"독","fr":"Poison","de":"Gift","es":"Veneno","it":"Veleno","en":"Poison"},"TYPE_GROUND":{"ja":"じめん","ko":"땅","fr":"Sol","de":"Boden","es":"Tierra","it":"Terra","en":"Ground"},"TYPE_ROCK":{"ja":"いわ","ko":"바위","fr":"Roche","de":"Gestein","es":"Roca","it":"Roccia","en":"Rock"},"TYPE_BUG":{"ja":"むし","ko":"벌레","fr":"Insecte","de":"Käfer","es":"Bicho","it":"Coleottero","en":"Bug"},"TYPE_GHOST":{"ja":"ゴースト","ko":"고스트","fr":"Spectre","de":"Geist","es":"Fantasma","it":"Spettro","en":"Ghost"},"TYPE_STEEL":{"ja":"はがね","ko":"강철","fr":"Acier","de":"Stahl","es":"Acero","it":"Acciaio","en":"Steel"},"TYPE_FIRE":{"ja":"ほのお","ko":"불꽃","fr":"Feu","de":"Feuer","es":"Fuego","it":"Fuoco","en":"Fire"},"TYPE_WATER":{"ja":"みず","ko":"물","fr":"Eau","de":"Wasser","es":"Agua","it":"Acqua","en":"Water"},"TYPE_GRASS":{"ja":"くさ","ko":"풀","fr":"Plante","de":"Pflanze","es":"Planta","it":"Erba","en":"Grass"},"TYPE_ELECTRIC":{"ja":"でんき","ko":"전기","fr":"Électrik","de":"Elektro","es":"Eléctrico","it":"Elettro","en":"Electric"},"TYPE_PSYCHIC":{"ja":"エスパー","ko":"에스퍼","fr":"Psy","de":"Psycho","es":"Psíquico","it":"Psico","en":"Psychic"},"TYPE_ICE":{"ja":"こおり","ko":"얼음","fr":"Glace","de":"Eis","es":"Hielo","it":"Ghiaccio","en":"Ice"},"TYPE_DRAGON":{"ja":"ドラゴン","ko":"드래곤","fr":"Dragon","de":"Drache","es":"Dragón","it":"Drago","en":"Dragon"},"TYPE_DARK":{"ja":"あく","ko":"악","fr":"Ténèbres","de":"Unlicht","es":"Siniestro","it":"Buio","en":"Dark"},"TYPE_FAIRY":{"ja":"フェアリー","ko":"페어리","fr":"Fée","de":"Fee","es":"Hada","it":"Folletto","en":"Fairy"},"TYPE_UNKNOWN":{"ja":"？？？","fr":"???","de":"???","es":"???","it":"???","en":"???"},"TYPE_SHADOW":{"ja":"ダーク","fr":"Obscur","de":"Crypto","it":"Ombra","en":"Shadow"},"MOVE_POUND":{"en":"Pound","jp":"はたく","jp_lat":"Hataku","fr":"Écras'Face","de":"Pfund","it":"Botta","es":"Destructor","ko":"막치기","ko_lat":"Makchigi"},"MOVE_KARATE_CHOP":{"en":"Karate Chop","jp":"からてチョップ","jp_lat":"Karate Chop","fr":"Poing-Karaté","de":"Karateschlag","it":"Colpokarate","es":"Golpe Karate","ko":"태권당수","ko_lat":"Taegweon Dangsu"},"MOVE_FIRE_PUNCH":{"en":"Fire Punch","jp":"ほのおのパンチ","jp_lat":"Honō no Punch","fr":"Poing de Feu","de":"Feuerschlag","it":"Fuocopugno","es":"Puño Fuego","ko":"불꽃펀치","ko_lat":"Bulkkot Punch"},"MOVE_ICE_PUNCH":{"en":"Ice Punch","jp":"れいとうパンチ","jp_lat":"Reitō Punch","fr":"Poing-Glace","de":"Eishieb","it":"Gelopugno","es":"Puño Hielo","ko":"냉동펀치","ko_lat":"Naengdong Punch"},"MOVE_THUNDER_PUNCH":{"en":"Thunder Punch","jp":"かみなりパンチ","jp_lat":"Kaminari Punch","fr":"Poing-Éclair","de":"Donnerschlag","it":"Tuonopugno","es":"Puño Trueno","ko":"번개펀치","ko_lat":"Beongae Punch"},"MOVE_SCRATCH":{"en":"Scratch","jp":"ひっかく","jp_lat":"Hikkaku","fr":"Griffe","de":"Kratzer","it":"Graffio","es":"Arañazo","ko":"할퀴기","ko_lat":"Halkwigi"},"MOVE_VICE_GRIP":{"en":"Vice Grip","jp":"はさむ","jp_lat":"Hasamu","fr":"Force Poigne","de":"Klammer","it":"Presa","es":"Agarre","ko":"찝기","ko_lat":"Jjipgi"},"MOVE_CUT":{"en":"Cut","jp":"いあいぎり","jp_lat":"Iaigiri","fr":"Coupe","de":"Zerschneider","it":"Taglio","es":"Corte","ko":"풀베기","ko_lat":"Pul Begi"},"MOVE_WING_ATTACK":{"en":"Wing Attack","jp":"つばさでうつ","jp_lat":"Tsubasa de Utsu","fr":"Cru-Aile","de":"Flügelschlag","it":"Attacco d'Ala","es":"Ataque Ala","ko":"날개치기","ko_lat":"Nalgae Chigi"},"MOVE_VINE_WHIP":{"en":"Vine Whip","jp":"つるのムチ","jp_lat":"Tsuru no Muchi","fr":"Fouet Lianes","de":"Rankenhieb","it":"Frustata","es":"Látigo Cepa","ko":"덩굴채찍","ko_lat":"Deonggul Chaejjik"},"MOVE_STOMP":{"en":"Stomp","jp":"ふみつけ","jp_lat":"Fumitsuke","fr":"Écrasement","de":"Stampfer","it":"Pestone","es":"Pisotón","ko":"짓밟기","ko_lat":"Jitbalgi"},"MOVE_HORN_ATTACK":{"en":"Horn Attack","jp":"つのでつく","jp_lat":"Tsuno de Tsuku","fr":"Koud'Korne","de":"Hornattacke","it":"Incornata","es":"Cornada","ko":"뿔찌르기","ko_lat":"Ppul Jjireugi"},"MOVE_TACKLE":{"en":"Tackle","jp":"たいあたり","jp_lat":"Taiatari","fr":"Charge","de":"Tackle","it":"Azione","es":"Placaje","ko":"몸통박치기","ko_lat":"Momtong Bakchigi"},"MOVE_BODY_SLAM":{"en":"Body Slam","jp":"のしかかり","jp_lat":"Noshikakari","fr":"Plaquage","de":"Bodyslam","it":"Corposcontro","es":"Golpe Cuerpo","ko":"누르기","ko_lat":"Nureugi"},"MOVE_WRAP":{"en":"Wrap","jp":"まきつく","jp_lat":"Makitsuku","fr":"Ligotage","de":"Wickel","it":"Avvolgibotta","es":"Constricción","ko":"김밥말이","ko_lat":"Gimbapmal'i"},"MOVE_POISON_STING":{"en":"Poison Sting","jp":"どくばり","jp_lat":"Doku Bari","fr":"Dard-Venin","de":"Giftstachel","it":"Velenospina","es":"Picotazo Ven","ko":"독침","ko_lat":"Dokchim"},"MOVE_BITE":{"en":"Bite","jp":"かみつく","jp_lat":"Kamitsuku","fr":"Morsure","de":"Biss","it":"Morso","es":"Mordisco","ko":"물기","ko_lat":"Mulgi"},"MOVE_ACID":{"en":"Acid","jp":"ようかいえき","jp_lat":"Yōkaieki","fr":"Acide","de":"Säure","it":"Acido","es":"Ácido","ko":"용해액","ko_lat":"Yonghae Aek"},"MOVE_EMBER":{"en":"Ember","jp":"ひのこ","jp_lat":"Hinoko","fr":"Flammèche","de":"Glut","it":"Braciere","es":"Ascuas","ko":"불꽃세례","ko_lat":"Bulkkot Serye"},"MOVE_FLAMETHROWER":{"en":"Flamethrower","jp":"かえんほうしゃ","jp_lat":"Kaenhōsha","fr":"Lance-Flammes","de":"Flammenwurf","it":"Lanciafiamme","es":"Lanzallamas","ko":"화염방사","ko_lat":"Hwayeom Bangsa"},"MOVE_WATER_GUN":{"en":"Water Gun","jp":"みずでっぽう","jp_lat":"Mizu Deppō","fr":"Pistolet à O","de":"Aquaknarre","it":"Pistolacqua","es":"Pistola Agua","ko":"물대포","ko_lat":"Mul Daepo"},"MOVE_HYDRO_PUMP":{"en":"Hydro Pump","jp":"ハイドロポンプ","jp_lat":"Hydro Pomp","fr":"Hydrocanon","de":"Hydropumpe","it":"Idropompa","es":"Hidrobomba","ko":"하이드로펌프","ko_lat":"Hydro Pump"},"MOVE_ICE_BEAM":{"en":"Ice Beam","jp":"れいとうビーム","jp_lat":"Reitō Beam","fr":"Laser Glace","de":"Eisstrahl","it":"Geloraggio","es":"Rayo Hielo","ko":"냉동빔","ko_lat":"Naengdong Beam"},"MOVE_BLIZZARD":{"en":"Blizzard","jp":"ふぶき","jp_lat":"Fubuki","fr":"Blizzard","de":"Blizzard","it":"Bora","es":"Ventisca","ko":"눈보라","ko_lat":"Nunbora"},"MOVE_PSYBEAM":{"en":"Psybeam","jp":"サイケこうせん","jp_lat":"Psych Kōsen","fr":"Rafale Psy","de":"Psystrahl","it":"Psicoraggio","es":"Psicorrayo","ko":"환상빔","ko_lat":"Hwansang Beam"},"MOVE_BUBBLE_BEAM":{"en":"Bubble Beam","jp":"バブルこうせん","jp_lat":"Bubble Kōsen","fr":"Bulles d’O","de":"Blubbstrahl","it":"Bollaraggio","es":"Rayo Barbuja","ko":"거품광선","ko_lat":"Geopum Gwangseon"},"MOVE_HYPER_BEAM":{"en":"Hyper Beam","jp":"はかいこうせん","jp_lat":"Hakai Kōsen","fr":"Ultralaser","de":"Hyperstrahl","it":"Iper Raggio","es":"Hiperrayo","ko":"파괴광선","ko_lat":"Pagoe Gwangseon"},"MOVE_PECK":{"en":"Peck","jp":"つつく","jp_lat":"Tsutsuku","fr":"Picpic","de":"Schnabel","it":"Beccata","es":"Picotazo","ko":"쪼기","ko_lat":"Jjogi"},"MOVE_DRILL_PECK":{"en":"Drill Peck","jp":"ドリルくちばし","jp_lat":"Drill Kuchibashi","fr":"Bec Vrille","de":"Bohrschnabel","it":"Perforbecco","es":"Pico Taladro","ko":"회전부리","ko_lat":"Hoejeon Buri"},"MOVE_SUBMISSION":{"en":"Submission","jp":"じごくぐるま","jp_lat":"Jigoku Guruma","fr":"Sacrifice","de":"Überroller","it":"Sottomissione","es":"Sumisión","ko":"지옥의바퀴","ko_lat":"Jiok-yi Bakwi"},"MOVE_LOW_KICK":{"en":"Low Kick","jp":"けたぐり","jp_lat":"Ketaguri","fr":"Balayage","de":"Fußkick","it":"Colpo Basso","es":"Patada Baja","ko":"잡치기","ko_lat":"Japchigi"},"MOVE_MEGA_DRAIN":{"en":"Mega Drain","jp":"メガドレイン","jp_lat":"Mega Drain","fr":"Méga-Sangsue","de":"Megasauger","it":"Megassorbimento","es":"Megaagotar","ko":"메가드레인","ko_lat":"Mega Drain"},"MOVE_RAZOR_LEAF":{"en":"Razor Leaf","jp":"はっぱカッター","jp_lat":"Happa Cutter","fr":"Tranch'Herbe","de":"Rasierblatt","it":"Foglielama","es":"Hoja Afilada","ko":"잎날가르기","ko_lat":"Ipnal Gareugi"},"MOVE_SOLAR_BEAM":{"en":"Solar Beam","jp":"ソーラービーム","jp_lat":"Solar Beam","fr":"Lance-Soleil","de":"Solarstrahl","it":"Solarraggio","es":"Rayo Solar","ko":"솔라빔","ko_lat":"Solar Beam"},"MOVE_THUNDER_SHOCK":{"en":"Thunder Shock","jp":"でんきショック","jp_lat":"Denki Shock","fr":"Éclair","de":"Donnerschock","it":"Tuonoshock","es":"Impactrueno","ko":"전기쇼크","ko_lat":"Jeongi Shock"},"MOVE_THUNDERBOLT":{"en":"Thunderbolt","jp":"１０まんボルト","jp_lat":"Jūman Volt","fr":"Tonnerre","de":"Donnerblitz","it":"Fulmine","es":"Rayo","ko":"１０만볼트","ko_lat":"Sipman Volt"},"MOVE_THUNDER":{"en":"Thunder","jp":"かみなり","jp_lat":"Kaminari","fr":"Fatal-Foudre","de":"Donner","it":"Tuono","es":"Trueno","ko":"번개","ko_lat":"Beongae"},"MOVE_ROCK_THROW":{"en":"Rock Throw","jp":"いわおとし","jp_lat":"Iwa Otoshi","fr":"Jet-Pierres","de":"Steinwurf","it":"Sassata","es":"Lanzarrocas","ko":"돌떨구기","ko_lat":"Dol Tteolgugi"},"MOVE_EARTHQUAKE":{"en":"Earthquake","jp":"じしん","jp_lat":"Jishin","fr":"Séisme","de":"Erdbeben","it":"Terremoto","es":"Terremoto","ko":"지진","ko_lat":"Jijin"},"MOVE_DIG":{"en":"Dig","jp":"あなをほる","jp_lat":"Ana wo Horu","fr":"Tunnel","de":"Schaufler","it":"Fossa","es":"Excavar","ko":"구멍파기","ko_lat":"Gumeong Pagi"},"MOVE_CONFUSION":{"en":"Confusion","jp":"ねんりき","jp_lat":"Nenriki","fr":"Choc Mental","de":"Konfusion","it":"Confusione","es":"Confusión","ko":"염동력","ko_lat":"Yeomdongryeok"},"MOVE_PSYCHIC":{"en":"Psychic","jp":"サイコキネシス","jp_lat":"Psychokinesis","fr":"Psyko","de":"Psychokinese","it":"Psichico","es":"Psíquico","ko":"사이코키네시스","ko_lat":"Psychokinesis"},"MOVE_QUICK_ATTACK":{"en":"Quick Attack","jp":"でんこうせっか","jp_lat":"Denkō Sekka","fr":"Vive-Attaque","de":"Ruckzuckhieb","it":"Attacco Rapido","es":"Ataque Rápido","ko":"전광석화","ko_lat":"Jeongwang Seokhwa"},"MOVE_LICK":{"en":"Lick","jp":"したでなめる","jp_lat":"Shita de Nameru","fr":"Léchouille","de":"Schlecker","it":"Leccata","es":"Lengüetazo","ko":"핥기","ko_lat":"Hatgi"},"MOVE_SLUDGE":{"en":"Sludge","jp":"ヘドロこうげき","jp_lat":"Hedoro Kōgeki","fr":"Détritus","de":"Schlammbad","it":"Fango","es":"Residuos","ko":"오물공격","ko_lat":"Omul Gonggyeok"},"MOVE_BONE_CLUB":{"en":"Bone Club","jp":"ホネこんぼう","jp_lat":"Hone Konbō","fr":"Massd'Os","de":"Knochenkeule","it":"Ossoclava","es":"Hueso Palo","ko":"뼈다귀치기","ko_lat":"Ppyeo Dagwichigi"},"MOVE_FIRE_BLAST":{"en":"Fire Blast","jp":"だいもんじ","jp_lat":"Dai Monji","fr":"Déflagration","de":"Feuersturm","it":"Fuocobomba","es":"Llamarada","ko":"불대문자","ko_lat":"Bul Daemunja"},"MOVE_SWIFT":{"en":"Swift","jp":"スピードスター","jp_lat":"Speed Star","fr":"Météores","de":"Sternschauer","it":"Comete","es":"Rapidez","ko":"스피드스타","ko_lat":"Speed Star"},"MOVE_BUBBLE":{"en":"Bubble","jp":"あわ","jp_lat":"Awa","fr":"Écume","de":"Blubber","it":"Bolla","es":"Burbuja","ko":"거품","ko_lat":"Geopum"},"MOVE_SPLASH":{"en":"Splash","jp":"はねる","jp_lat":"Haneru","fr":"Trempette","de":"Platscher","it":"Splash","es":"Salpicadura","ko":"튀어오르기","ko_lat":"Twieo Oreugi"},"MOVE_REST":{"en":"Rest","jp":"ねむる","jp_lat":"Nemuru","fr":"Repos","de":"Erholung","it":"Riposo","es":"Descanso","ko":"잠자기","ko_lat":"Jamjagi"},"MOVE_ROCK_SLIDE":{"en":"Rock Slide","jp":"いわなだれ","jp_lat":"Iwa Nadare","fr":"Éboulement","de":"Steinhagel","it":"Frana","es":"Avalancha","ko":"스톤샤워","ko_lat":"Stone Shower"},"MOVE_HYPER_FANG":{"en":"Hyper Fang","jp":"ひっさつまえば","jp_lat":"Hissatsu Maeba","fr":"Croc de Mort","de":"Hyperzahn","it":"Iperzanna","es":"Hiper Colmillo","ko":"필살앞니","ko_lat":"Pilsal Apni"},"MOVE_STRUGGLE":{"en":"Struggle","jp":"わるあがき","jp_lat":"Waruagaki","fr":"Lutte","de":"Verzweifler","it":"Scontro","es":"Combate","ko":"발버둥","ko_lat":"Balbeodung"},"MOVE_FLAME_WHEEL":{"en":"Flame Wheel","jp":"かえんぐるま","jp_lat":"Kaenguruma","fr":"Roue de Feu","de":"Flammenrad","it":"Ruotafuoco","es":"Rueda Fuego","ko":"화염자동차","ko_lat":"Hwayeom Jadongcha"},"MOVE_FEINT_ATTACK":{"en":"Feint Attack","jp":"だましうち","jp_lat":"Damashiuchi","fr":"Feinte","de":"Finte","it":"Finta","es":"Finta","ko":"속여때리기","ko_lat":"Sok'yeo Ttaerigi"},"MOVE_SLUDGE_BOMB":{"en":"Sludge Bomb","jp":"ヘドロばくだん","jp_lat":"Hedoro Bakudan","fr":"Bomb-Beurk","de":"Matschbombe","it":"Fangobomba","es":"Bomba Lodo","ko":"오물폭탄","ko_lat":"Omul Poktan"},"MOVE_ICY_WIND":{"en":"Icy Wind","jp":"こごえるかぜ","jp_lat":"Kogoeru Kaze","fr":"Vent Glace","de":"Eissturm","it":"Ventogelato","es":"Viento Hielo","ko":"얼다바람","ko_lat":"Eolda Baram"},"MOVE_GIGA_DRAIN":{"en":"Giga Drain","jp":"ギガドレイン","jp_lat":"Giga Drain","fr":"Giga-Sangsue","de":"Gigasauger","it":"Gigassorbimento","es":"Gigadrenado","ko":"기가드레인","ko_lat":"Giga Drain"},"MOVE_SPARK":{"en":"Spark","jp":"スパーク","jp_lat":"Spark","fr":"Étincelle","de":"Funkensprung","it":"Scintilla","es":"Chispa","ko":"스파크","ko_lat":"Spark"},"MOVE_FURY_CUTTER":{"en":"Fury Cutter","jp":"れんぞくぎり","jp_lat":"Renzoku Giri","fr":"Taillade","de":"Zornklinge","it":"Tagliofuria","es":"Cortefuria","ko":"연속자르기","ko_lat":"Yeonsok Jareugi"},"MOVE_STEEL_WING":{"en":"Steel Wing","jp":"はがねのつばさ","jp_lat":"Hagane no Tsubasa","fr":"Aile d’Acier","de":"Stahlflügel","it":"Alacciaio","es":"Ala De Acero","ko":"강철날개","ko_lat":"Gangcheol Nalgae"},"MOVE_MEGAHORN":{"en":"Megahorn","jp":"メガホーン","jp_lat":"Megahorn","fr":"Mégacorne","de":"Vielender","it":"Megacorno","es":"Megacuerno","ko":"메가폰","ko_lat":"Megapon"},"MOVE_DRAGON_BREATH":{"en":"Dragon Breath","jp":"りゅうのいぶき","jp_lat":"Ryū no Ibuki","fr":"Dracosouffle","de":"Feuerodem","it":"Dragospiro","es":"Dragoaliento","ko":"용의숨결","ko_lat":"Yong-yi Sumgyeol"},"MOVE_METAL_CLAW":{"en":"Metal Claw","jp":"メタルクロー","jp_lat":"Metal Claw","fr":"Griffe Acier","de":"Metallklaue","it":"Ferrartigli","es":"Garra Metal","ko":"메탈크로우","ko_lat":"Metal Claw"},"MOVE_CROSS_CHOP":{"en":"Cross Chop","jp":"クロスチョップ","jp_lat":"Cross Chop","fr":"Coup-Croix","de":"Kreuzhieb","it":"Incrocolpo","es":"Tajo Cruzado","ko":"크로스촙","ko_lat":"Cross Chop"},"MOVE_TWISTER":{"en":"Twister","jp":"たつまき","jp_lat":"Tatsumaki","fr":"Ouragan","de":"Windhose","it":"Tornado","es":"Ciclón","ko":"회오리","ko_lat":"Hoe'ori"},"MOVE_ANCIENT_POWER":{"en":"Ancient Power","jp":"げんしのちから","jp_lat":"Genshi no Chikara","fr":"Pouvoir Antique","de":"Antik-Kraft","it":"Forzantica","es":"Poder Pasado","ko":"원시의힘","ko_lat":"Weonsa-yi Him"},"MOVE_SHADOW_BALL":{"en":"Shadow Ball","jp":"シャドーボール","jp_lat":"Shadow Ball","fr":"Ball'Ombre","de":"Spukball","it":"Palla Ombra","es":"Bola Sombra","ko":"섀도볼","ko_lat":"Shadow Ball"},"MOVE_ROCK_SMASH":{"en":"Rock Smash","jp":"いわくだき","jp_lat":"Iwakudaki","fr":"Éclate-Roc","de":"Zertrümmerer","it":"Spaccaroccia","es":"Golpe Roca","ko":"바위깨기","ko_lat":"Bawi Kkaegi"},"MOVE_HEAT_WAVE":{"en":"Heat Wave","jp":"ねっぷう","jp_lat":"Neppū","fr":"Canicule","de":"Hitzewelle","it":"Ondacalda","es":"Onda Ígnea","ko":"열풍","ko_lat":"Yeolpung"},"MOVE_BRICK_BREAK":{"en":"Brick Break","jp":"かわらわり","jp_lat":"Kawarawari","fr":"Casse-Brique","de":"Durchbruch","it":"Breccia","es":"Demolición","ko":"깨트리다","ko_lat":"Kkaeteurida"},"MOVE_POISON_FANG":{"en":"Poison Fang","jp":"どくどくのキバ","jp_lat":"Dokudoku no Kiba","fr":"Crochet Venin","de":"Giftzahn","it":"Velenodenti","es":"Colmillo Ven","ko":"독엄니","ko_lat":"Dok Eomni"},"MOVE_AIR_CUTTER":{"en":"Air Cutter","jp":"エアカッター","jp_lat":"Air Cutter","fr":"Tranch'Air","de":"Windschnitt","it":"Aerasoio","es":"Aire Afilado","ko":"에어컷터","ko_lat":"Air Cutter"},"MOVE_ROCK_TOMB":{"en":"Rock Tomb","jp":"がんせきふうじ","jp_lat":"Ganseki Fūji","fr":"Tomberoche","de":"Felsgrab","it":"Rocciotomba","es":"Tumba Rocas","ko":"암석봉인","ko_lat":"Amseok Bong'in"},"MOVE_SIGNAL_BEAM":{"en":"Signal Beam","jp":"シグナルビーム","jp_lat":"Signal Beam","fr":"Rayon Signal","de":"Ampelleuchte","it":"Segnoraggio","es":"Doble Rayo","ko":"시그널빔","ko_lat":"Signal Beam"},"MOVE_SHADOW_PUNCH":{"en":"Shadow Punch","jp":"シャドーパンチ","jp_lat":"Shadow Punch","fr":"Poing Ombre","de":"Finsterfaust","it":"Pugnodombra","es":"Puño Sombra","ko":"섀도펀치","ko_lat":"Shadow Punch"},"MOVE_AERIAL_ACE":{"en":"Aerial Ace","jp":"つばめがえし","jp_lat":"Tsubame Gaeshi","fr":"Aéropique","de":"Aero-Ass","it":"Aeroassalto","es":"Golpe Aéreo","ko":"제비반환","ko_lat":"Jebi Banhwan"},"MOVE_DRAGON_CLAW":{"en":"Dragon Claw","jp":"ドラゴンクロー","jp_lat":"Dragon Claw","fr":"Dracogriffe","de":"Drachenklaue","it":"Dragartigli","es":"Garra Dragón","ko":"드래곤크루","ko_lat":"Dragon Claw"},"MOVE_MUD_SHOT":{"en":"Mud Shot","jp":"マッドショット","jp_lat":"Mud Shot","fr":"Tir de Boue","de":"Lehmschuss","it":"Colpodifango","es":"Disparo Lodo","ko":"머드숏","ko_lat":"Mud Shot"},"MOVE_LEAF_BLADE":{"en":"Leaf Blade","jp":"リーフブレード","jp_lat":"Leaf Blade","fr":"Lame-Feuille","de":"Laubklinge","it":"Fendifoglia","es":"Hoja Aguda","ko":"리프블레이드","ko_lat":"Leaf Blade"},"MOVE_WATER_PULSE":{"en":"Water Pulse","jp":"みずのはどう","jp_lat":"Mizu no Hadō","fr":"Vibraqua","de":"Aquawelle","it":"Idropulsar","es":"Hidropulso","ko":"물의파동","ko_lat":"Mul-yi Padong"},"MOVE_BRINE":{"en":"Brine","jp":"しおみず","jp_lat":"Shiomizu","fr":"Saumure","de":"Lake","it":"Acquadisale","es":"Salmuera","ko":"소금물","ko_lat":"Sogeummul"},"MOVE_SUCKER_PUNCH":{"en":"Sucker Punch","jp":"ふいうち","jp_lat":"Fuiuchi","fr":"Coup Bas","de":"Tiefschlag","it":"Sbigoattacco","es":"Golpe Bajo","ko":"기습","ko_lat":"Giseup"},"MOVE_POISON_JAB":{"en":"Poison Jab","jp":"どくづき","jp_lat":"Dokudzuki","fr":"Direct Toxik","de":"Gifthieb","it":"Velenpuntura","es":"Puya Nociva","ko":"독찌르기","ko_lat":"Dok Jjareugi"},"MOVE_DARK_PULSE":{"en":"Dark Pulse","jp":"あくのはどう","jp_lat":"Aku no Hadou","fr":"Vibrobscur","de":"Finsteraura","it":"Neropulsar","es":"Pulso Umbrío","ko":"악의파동","ko_lat":"Ak-yi Padong"},"MOVE_NIGHT_SLASH":{"en":"Night Slash","jp":"つじぎり","jp_lat":"Tsujigiri","fr":"Tranche-Nuit","de":"Nachthieb","it":"Nottesferza","es":"Tajo Umbrío","ko":"깜짝베기","ko_lat":"Kkamjjakbegi"},"MOVE_AQUA_TAIL":{"en":"Aqua Tail","jp":"アクアテール","jp_lat":"Aqua Tail","fr":"Hydroqueue","de":"Nassschweif","it":"Idrondata","es":"Acua Cola","ko":"아쿠아테일","ko_lat":"Aqua Tail"},"MOVE_SEED_BOMB":{"en":"Seed Bomb","jp":"タネばくだん","jp_lat":"Tane Bakudan","fr":"Canon Graine","de":"Samenbomben","it":"Semebomba","es":"Bomba Germen","ko":"씨폭탄","ko_lat":"Ssi Poktan"},"MOVE_X_SCISSOR":{"en":"X-Scissor","jp":"シザークロス","jp_lat":"Scissor Cross","fr":"Plaie-Croix","de":"Kreuzschere","it":"Forbice X","es":"Tijera X","ko":"시저크로스","ko_lat":"Scissor Cross"},"MOVE_BUG_BUZZ":{"en":"Bug Buzz","jp":"むしのさざめき","jp_lat":"Mushi no Sazameki","fr":"Bourdon","de":"Käfergebrumm","it":"Ronzio","es":"Zumbido","ko":"벌레의야단법석","ko_lat":"Beolle-yi Yadanbeopseok"},"MOVE_DRAGON_PULSE":{"en":"Dragon Pulse","jp":"りゅうのはどう","jp_lat":"Ryū no Hadō","fr":"Dracochoc","de":"Drachenpuls","it":"Dragopulsar","es":"Pulso Dragón","ko":"용의파동","ko_lat":"Yong-yi Padong"},"MOVE_POWER_GEM":{"en":"Power Gem","jp":"パワージェム","jp_lat":"Power Gem","fr":"Rayon Gemme","de":"Juwelenkraft","it":"Gemmoforza","es":"Joya de Luz","ko":"파워젬","ko_lat":"Power Gem"},"MOVE_BULLET_PUNCH":{"en":"Bullet Punch","jp":"バレットパンチ","jp_lat":"Bullet Punch","fr":"Pisto-Poing","de":"Patronenhieb","it":"Pugnoscarica","es":"Puño Bala","ko":"불릿펀치","ko_lat":"Bullet Punch"},"MOVE_ICE_SHARD":{"en":"Ice Shard","jp":"こおりのつぶて","jp_lat":"Koori no Tsubute","fr":"Éclats Glace","de":"Eissplitter","it":"Geloscheggia","es":"Canto Helado","ko":"얼음뭉치","ko_lat":"Eol'eum Mungchi"},"MOVE_SHADOW_CLAW":{"en":"Shadow Claw","jp":"シャドークロー","jp_lat":"Shadow Claw","fr":"Griffe Ombre","de":"Dunkelklaue","it":"Ombrartigli","es":"Garra Umbría","ko":"섀도크루","ko_lat":"Shadow Claw"},"MOVE_FIRE_FANG":{"en":"Fire Fang","jp":"ほのおのキバ","jp_lat":"Honoo no Kiba","fr":"Crocs Feu","de":"Feuerzahn","it":"Rogodenti","es":"Colmillo Ígneo","ko":"불꽃엄니","ko_lat":"Bulkkot Eomni"},"MOVE_SHADOW_SNEAK":{"en":"Shadow Sneak","jp":"かげうち","jp_lat":"Kageuchi","fr":"Ombre Portée","de":"Schattenstoß","it":"Furtivombra","es":"Sombra Vil","ko":"야습","ko_lat":"Yaseup"},"MOVE_MUD_BOMB":{"en":"Mud Bomb","jp":"どろばくだん","jp_lat":"Doro Bakudan","fr":"Boue-Bombe","de":"Schlammbombe","it":"Pantanobomba","es":"Bomba Fango","ko":"진흙폭탄","ko_lat":"Jinheulk Poktan"},"MOVE_PSYCHO_CUT":{"en":"Psycho Cut","jp":"サイコカッター","jp_lat":"Psycho Cutter","fr":"Coupe Psycho","de":"Psychoklinge","it":"Psicotaglio","es":"Psico-corte","ko":"사이코커터","ko_lat":"Psycho Cutter"},"MOVE_ZEN_HEADBUTT":{"en":"Zen Headbutt","jp":"しねんのずつき","jp_lat":"Shinen no Zutsuki","fr":"Psykoud'Boul","de":"Zen-Kopfstoß","it":"Cozzata Zen","es":"Cabezazo Zen","ko":"사념의박치기","ko_lat":"Sanyeom-yi Bakchigi"},"MOVE_FLASH_CANNON":{"en":"Flash Cannon","jp":"ラスターカノン","jp_lat":"Luster Cannon","fr":"Luminocanon","de":"Lichtkanone","it":"Cannonflash","es":"Foco Resplandor","ko":"러스터캐논","ko_lat":"Luster Cannon"},"MOVE_DISCHARGE":{"en":"Discharge","jp":"ほうでん","jp_lat":"Hōden","fr":"Coup d'Jus","de":"Ladungsstoß","it":"Scarica","es":"Chispazo","ko":"방전","ko_lat":"Bangjeon"},"MOVE_POWER_WHIP":{"en":"Power Whip","jp":"パワーウィップ","jp_lat":"Power Whip","fr":"Mégafouet","de":"Blattgeißel","it":"Vigorcolpo","es":"Latigazo","ko":"파워휩","ko_lat":"Power Whip"},"MOVE_CROSS_POISON":{"en":"Cross Poison","jp":"クロスポイズン","jp_lat":"Cross Poison","fr":"Poison-Croix","de":"Giftstreich","it":"Velenocroce","es":"Veneno X","ko":"크로스포이즌","ko_lat":"Cross Poison"},"MOVE_GUNK_SHOT":{"en":"Gunk Shot","jp":"ダストシュート","jp_lat":"Dust Shoot","fr":"Détricanon","de":"Mülltreffer","it":"Sporcolancio","es":"Lanza Mugre","ko":"더스트슈트","ko_lat":"Dust Shoot"},"MOVE_IRON_HEAD":{"en":"Iron Head","jp":"アイアンヘッド","jp_lat":"Iron Head","fr":"Tête de Fer","de":"Eisenschädel","it":"Metaltestata","es":"Cabeza de Hierro","ko":"아이언헤드","ko_lat":"Iron Head"},"MOVE_MAGNET_BOMB":{"en":"Magnet Bomb","jp":"マグネットボム","jp_lat":"Magnet Bomb","fr":"Bombaimant","de":"Magnetbombe","it":"Bombagnete","es":"Bomba Imán","ko":"마그넷봄","ko_lat":"Magnet Bomb"},"MOVE_STONE_EDGE":{"en":"Stone Edge","jp":"ストーンエッジ","jp_lat":"Stone Edge","fr":"Lame de Roc","de":"Steinkante","it":"Pietrataglio","es":"Roca Afilada","ko":"스톤에지","ko_lat":"Stone Edge"},"MOVE_BUG_BITE":{"en":"Bug Bite","jp":"むしくい","jp_lat":"Mushi Kui","fr":"Piqûre","de":"Käferbiss","it":"Coleomorso","es":"Picadura","ko":"벌레먹음","ko_lat":"Beolle Meok'eum"},"MOVE_AQUA_JET":{"en":"Aqua Jet","jp":"アクアジェット","jp_lat":"Aqua Jet","fr":"Aqua-Jet","de":"Wasserdüse","it":"Acquagetto","es":"Acua Jet","ko":"아쿠아제트","ko_lat":"Aqua Jet"},"MOVE_OMINOUS_WIND":{"en":"Ominous Wind","jp":"あやしいかぜ","jp_lat":"Ayashii Kaze","fr":"Vent Mauvais","de":"Unheilböen","it":"Funestovento","es":"Viento Aciago","ko":"괴상한바람","ko_lat":"Goesanghan Baram"},"MOVE_PSYSHOCK":{"en":"Psyshock","jp":"サイコショック","jp_lat":"Psycho Shock","fr":"Choc Psy","de":"Psychoschock","it":"Psicoshock","es":"Psicocarga","ko":"사이코쇼크","ko_lat":"Psycho Shock"},"MOVE_FLAME_BURST":{"en":"Flame Burst","jp":"はじけるほのお","jp_lat":"Hajikeru Honō","fr":"Rebondifeu","de":"Funkenflug","it":"Pirolancio","es":"Pirotecnia","ko":"불꽃튀기기","ko_lat":"Bulkot Twigigi"},"MOVE_SLUDGE_WAVE":{"en":"Sludge Wave","jp":"ヘドロウェーブ","jp_lat":"Herodo Wave","fr":"Cradovague","de":"Schlammwoge","it":"Fangonda","es":"Onda Tóxica","ko":"오물웨이브","ko_lat":"Omul Wave"},"MOVE_FLAME_CHARGE":{"en":"Flame Charge","jp":"ニトロチャージ","jp_lat":"Nitro Charge","fr":"Nitrocharge","de":"Nitroladung","it":"Nitrocarica","es":"Nitrocarga","ko":"니트로차지","ko_lat":"Nitro Charge"},"MOVE_LOW_SWEEP":{"en":"Low Sweep","jp":"ローキック","jp_lat":"Low Kick","fr":"Balayette","de":"Fußtritt","it":"Calciobasso","es":"Puntapié","ko":"로킥","ko_lat":"Low Kick"},"MOVE_SCALD":{"en":"Scald","jp":"ねっとう","jp_lat":"Nettō","fr":"Ébullition","de":"Siedewasser","it":"Idrovampata","es":"Escaldar","ko":"열탕","ko_lat":"Yultang"},"MOVE_BULLDOZE":{"en":"Bulldoze","jp":"じならし","jp_lat":"Jinarashi","fr":"Piétisol","de":"Dampfwalze","it":"Battiterra","es":"Terratemblor","ko":"땅고르기","ko_lat":"Thang Gorugi"},"MOVE_FROST_BREATH":{"en":"Frost Breath","jp":"こおりのいぶき","jp_lat":"Kōri no Ibuki","fr":"Souffle Glacé","de":"Eisesodem","it":"Alitogelido","es":"Vaho Gélido","ko":"얼음숨결","ko_lat":"Eureum Soomgyul"},"MOVE_DRILL_RUN":{"en":"Drill Run","jp":"ドリルライナー","jp_lat":"Drill Liner","fr":"Tunnelier","de":"Schlagbohrer","it":"Giravvita","es":"Taladradora","ko":"드릴라이너","ko_lat":"Drill Liner"},"MOVE_HEART_STAMP":{"en":"Heart Stamp","jp":"ハートスタンプ","jp_lat":"Heart Stamp","fr":"Crèvecœur","de":"Herzstempel","it":"Cuorestampo","es":"Arrumaco","ko":"하트스탬프","ko_lat":"Heart Stamp"},"MOVE_PSYSTRIKE":{"en":"Psystrike","jp":"サイコブレイク","jp_lat":"Psycho Break","fr":"Frappe Psy","de":"Psychostoß","it":"Psicobotta","es":"Onda Mental","ko":"사이코브레이크","ko_lat":"Psycho Break"},"MOVE_HURRICANE":{"en":"Hurricane","jp":"ぼうふう","jp_lat":"Bōfū","fr":"Vent Violent","de":"Orkan","it":"Tifone","es":"Vendaval","ko":"폭풍","ko_lat":"Pohkpoong"},"MOVE_PARABOLIC_CHARGE":{"en":"Parabolic Charge","jp":"パラボラチャージ","jp_lat":"Parabola Charge","fr":"Parabocharge","de":"Parabolladung","it":"Caricaparabola","es":"Carga Parábola","ko":"파라볼라차지","ko_lat":"Parabola Charge"},"MOVE_PETAL_BLIZZARD":{"en":"Petal Blizzard","jp":"はなふぶき","jp_lat":"Hana Fubuki","fr":"Tempête Florale","de":"Blütenwirbel","it":"Fiortempesta","es":"Tormenta Floral","ko":"꽃보라","ko_lat":"Kkotbora"},"MOVE_DISARMING_VOICE":{"en":"Disarming Voice","jp":"チャームボイス","jp_lat":"Charm Voice","fr":"Voix Enjôleuse","de":"Säuselstimme","it":"Incantavoce","es":"Voz Cautivadora","ko":"차밍보이스","ko_lat":"Charming Voice"},"MOVE_DRAINING_KISS":{"en":"Draining Kiss","jp":"ドレインキッス","jp_lat":"Drain Kiss","fr":"Vampibaiser","de":"Diebeskuss","it":"Assorbibacio","es":"Beso Drenaje","ko":"드게인키스","ko_lat":"Drain Kiss"},"MOVE_PLAY_ROUGH":{"en":"Play Rough","jp":"じゃれつく","jp_lat":"Jaretsuku","fr":"Câlinerie","de":"Knuddler","it":"Carineria","es":"Carantoña","ko":"치근거리기","ko_lat":"Chigeungeorigi"},"MOVE_MOONBLAST":{"en":"Moonblast","jp":"ムーンフォース","jp_lat":"Moon Force","fr":"Pouvoir Lunaire","de":"Mondgewalt","it":"Forza Lunare","es":"Fuerza Lunar","ko":"문포스","ko_lat":"Moon Force"},"MOVE_DAZZLING_GLEAM":{"en":"Dazzling Gleam","jp":"マジカルシャイン","jp_lat":"Magical Shine","fr":"Éclat Magique","de":"Zauberschein","it":"Magibrillio","es":"Brillo Mágico","ko":"매지컬샤인","ko_lat":"Magical Shine"},"MOVE_MUD_SLAP":{"en":"Mud Slap","jp":"どろかけ","jp_lat":"Dorokake","fr":"Coud'Boue","de":"Lehmschelle","it":"Fangosberla","es":"Bofetón Lodo","ko":"진흙뿌리기","ko_lat":"Jinheuk Ppurigi"}};

const NB_VISITS_KEY = 'number-of-visits';

// Polyfills

if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}

// Platform detect

/**
 * Checks if the browser supports CSS viewport height (vw) units
 *
 * See this issue: https://github.com/Modernizr/Modernizr/issues/1805
 *
 * Basically vh detection is super shit so we use vw. Thanks iOS!
 * @return {Boolean}
 */
const supportsViewportUnits = (function () {
    if (document.readyState !== 'complete' && document.readyState !== 'loaded') {
        window.console.warn('testing viewport support before dom is ready');
    }

    const element = document.createElement('div');
    element.setAttribute('style', 'height:10px;width:100vw;position:fixed;left:-105%;top:-105%;');
    document.body.appendChild(element);

    const elementWidth = element.clientWidth;

    document.body.removeChild(element);

    return elementWidth === document.body.clientWidth;
})();

const supportsInlineSVG = (function () {
    // It's not possible to emulate this method via URL properly. It
    // relies in legacy browser behavior and some JS DOM manipulation
    // will be required to implement it properly.

    const div = document.createElement('div');
    div.innerHTML = '<svg/>';
    return (typeof SVGRect !== 'undefined' && div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg';
})()

const supportsBorderRadius = (function () {
    const propList = ['borderRadius', 'BorderRadius', 'MozBorderRadius', 'WebkitBorderRadius', 'OBorderRadius', 'KhtmlBorderRadius'];

    for (let i = 0; i < propList.length; i++) {
        if (document.body.style[propList[i]] !== undefined) {
            return true;
        }
    }

    return false;
})()


const isAndroid = /(Android)\s+([\d.]+)/.test(window.navigator.userAgent);

/**
 * Checks if the browser is an old android webkit
 * @return {Boolean}
 */
const isOldAndroidWebkit = isAndroid && !supportsViewportUnits;

/**
 * Checks if the browser is so old
 * @return {Boolean}
 */
const isLegacyBrowser = !supportsBorderRadius || !supportsInlineSVG;






const _state = {};




const TYPE_TO_CSS_CLASS = [
  'normal',   // 1
  'fighting', // 2
  'flying',   // 3
  'poison',   // 4
  'ground',   // 5
  'rock',     // 6
  'bug',      // 7
  'ghost',    // 8
  'steel',    // 9
  'fire',     // 10
  'water',    // 11
  'grass',    // 12
  'electric', // 13
  'psychic',  // 14
  'ice',      // 15
  'dragon',   // 16
  'dark',     // 17
  'fairy',    // 18
  'unknown',  // 19
  'shadow'    // 20
];

const NAVIGATOR_LANG_TO_LANG = {
  'en-US': 'en',
  'fr-fr': 'fr',
  'fr': 'fr'
};

const MINIUM_MOVE_EFFICIENCY_REQUIRED = 1.25;

const RATIO_EFFICIENT = 1.25;
const RATIO_WEAK = 0.8;

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

function _intersect(array1, array2, predicate) {
  return array1.filter(function(item) {
      return predicate(array2, item);
  });
}

function _decreaseFontSize(el, unit) {
  const currentValue = Number(el.style.fontSize.substring(0, el.style.fontSize.indexOf(unit)));
  el.style.fontSize = currentValue - 1 + unit;
}

function _getFontSize(moveName, maxSize) {
  maxSize = maxSize * 0.95; // We want to fit in 95% of the size;

  const calculationDiv = document.getElementsByClassName('font-size-calculation')[0];
  calculationDiv.innerText = moveName.toUpperCase();
  calculationDiv.style.fontSize = '10px';
  while(calculationDiv.offsetWidth > maxSize) {
    _decreaseFontSize(calculationDiv, 'px');
  }
  return calculationDiv.style.fontSize;
}

function _getTypeClass(typeId) {
  return TYPE_TO_CSS_CLASS[typeId-1];
}

function _getImagePath(pokemon) {
  const imageName = localeManager.translate(pokemon.key, 'en')
    .toLowerCase()
    .replace(/ /g, '_')
    .replace(/♀/g, '_f')
    .replace(/♂/g, '_m')
    .replace(/\./g, '')
    .replace(/'/g, '')
    .replace(/-/g, '_')
  return `images/${imageName}.png`;
}




// Pokemon counters

// Is type1 efficient against type2
function _isTypeEfficient(type1, type2) {
  return type1.damages.double.to.indexOf(type2.id) !== -1; // type1 does 1.25 damages on type2
}

function _isTypeWeak(type1, type2) {
  return type1.damages.half.to.indexOf(type2.id) !== -1 || // type1 does 0.8 damages on type2
    type1.damages.no.to.indexOf(type2.id) !== -1; // no === half in PokeGo
}

function _isSTAB(move, pokemon) {
  return (pokemon.types.map(t => t.id).indexOf(move.type.id) !== -1);
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
      return moveEfficiency.efficiency >= MINIUM_MOVE_EFFICIENCY_REQUIRED;
    });
}







function _getCounters(pokemon, otherPokemon) {
  const moves = _getMovesEfficiency(otherPokemon, pokemon);

  if (!moves.length) {
    return null;
  }

  return {
    id: otherPokemon.id,
    image: _getImagePath(_findById(pokemons, otherPokemon.id)),
    move: _findMoveById(moves[0].move),
    efficiency: moves[0].efficiency
  };
}






function _augmentPokemonsData(pokemons) {
  return pokemons
    .map((pokemon) => {
      return {
        id: pokemon.id,
        name: localeManager.translate(pokemon.key),
        image: _getImagePath(_findById(pokemons, pokemon.id)),
        types: pokemon.types
          .map((typeId) => _findById(types, typeId))
          .map((type) => Object.assign({}, type, {
              name: localeManager.translate(type.key),
              cssClass: _getTypeClass(type.id)
          })),
        moves: {
          quick: pokemon.moves.quick.map(_findMoveById),
          charge: pokemon.moves.special.map(_findMoveById)
        }
      }
    });
}

function updateList(pokemons) {
  const fragment = document.createDocumentFragment();

  var i = 0;
  pokemons.forEach((pokemon) => {
    let htmlString = `<div class="pokemon js-pokemon" data-id="${pokemon.id}">
      <div class="picture">
        <img src="${pokemon.image}">
      </div>
      <div class="name">
        ${pokemon.name}
      </div>
    </div>`;

    fragment.appendChild(_DOMElementFromString(htmlString));
  });

  document.querySelector('.pokedex').appendChild(fragment);
}

function updateDetail(pokemon) {
  // Get counters for current pokemon
  const counters = pokemonsFull
    .map(_getCounters.bind(null, pokemon))
    .filter(p => p); // Filter null efficiencies

  const typesHTML = pokemon.types
            .map((type) => `<div class="type ${type.cssClass}"><span class="name">${type.name}</span></div>`)
            .join('');

  _state.counters = counters.map((counter) => {
    const moveName = localeManager.translate(counter.move.key);
    const moveType = counter.move.type;
    const fontSize = _getFontSize(moveName, 70);
    const cp = Math.round(2400 / counter.efficiency);

    return {
      id: counter.id,
      image: counter.image,
      moveType,
      moveName,
      fontSize,
      efficiency: counter.efficiency,
      cp
    };
  })
  .sort((item1, item2) => item1.cp - item2.cp);

  const imageHTML = `<img src="${pokemon.image}" />`;
  const counterTitle = localeManager.translate('TEXT_CAN_BE_BEATEN_BY');

  document.querySelector('.overlay__data .js-name').innerText = pokemon.name;
  document.querySelector('.overlay__data .js-picture').innerHTML = imageHTML;
  document.querySelector('.overlay__data .js-types').innerHTML = typesHTML;

  document.querySelector('.overlay__data .counters .js-counters-title').innerHTML = counterTitle;

  _renderCounters(_state.counters);
}

function _renderCounters(counters) {
  const beatenByHTML = counters.map((counterData) => `<div class="other-pokemon js-pokemon" data-id="${counterData.id}">
      <div class="picture">
        <img src="${counterData.image}" />
      </div>
      <div class="type ${_getTypeClass(counterData.moveType.id).toLowerCase()}" style="font-size: ${counterData.fontSize}">
        <span class="name">${counterData.moveName}</span>
      </div>
      <div class="cp-value">CP ${counterData.cp}</div>
    </div>`)
  .join('');

  document.querySelector('.overlay__data .counters .js-beaten-by').innerHTML = beatenByHTML;
}

function showDetail() {
  window.scroll(0, 0);
  document.querySelector('.overlay').classList.remove('is-hidden')
  // document.querySelector('.pokedex').classList.add('is-blur')
}

function hideDetail() {
  document.querySelector('.overlay').classList.add('is-hidden')
  // document.querySelector('.pokedex').classList.remove('is-blur')
}

function toggleIntro() {
  document.querySelector('.intro').classList.toggle('is-collapsed');
}

function _DOMElementFromString(htmlString) {
  const div = document.createElement('div');
  div.innerHTML = htmlString;
  return div.firstChild;
}

//===== Locale Manager =====//

function LocaleManager(dictionary) {
  this._dictionary = dictionary;
  this._lang = 'en';
}

LocaleManager.prototype.setLanguage = function(lang) {
  this._lang = lang || 'en';
}

LocaleManager.prototype.translate = function(key, lang) {
  const translations = this._dictionary[key];
  if (!translations) {
    console.error('No translation at all for', key);
    return;
  }

  return translations[lang || this._lang];
}

var localeManager = new LocaleManager(dictionary);
const browserLang = navigator.language || navigator.userLanguage || 'en';
localeManager.setLanguage(NAVIGATOR_LANG_TO_LANG[browserLang]);
localeManager.setLanguage('fr');

// Localisations
const localisables = document.querySelectorAll('[data-localisable-key]');
Array.prototype.forEach.call(localisables, (localisableElement) => {
  const key = localisableElement.dataset.localisableKey;
  localisableElement.innerText = localeManager.translate(key);
});

//===== Startup =====//

// Check in localStorage whether we need to show the intro collapsed on start
let nbVisits = localStorage && localStorage.getItem(NB_VISITS_KEY);
if (nbVisits && nbVisits >= 3) {
  toggleIntro();
} else {
  localStorage.setItem(NB_VISITS_KEY, ++nbVisits);
}


const pokemonsFull = _augmentPokemonsData(pokemons);
addKeyboardListener();
updateList(pokemonsFull);

// Listeners

function addKeyboardListener() {
  window.addEventListener('keyup', (e) => {
    if (e.keyCode === 27) {
      hideDetail();
    }
  })
}

function _openPokemonDetail(event) {
  const pokemonId = event.currentTarget.dataset.id;
  updateDetail(_findById(pokemonsFull, pokemonId));
  showDetail();
  _addPokemonClickEventListeners();
}

function _addPokemonClickEventListeners() {
  Array.prototype.forEach.call(document.querySelectorAll('.js-pokemon'), (el) => {
    el.removeEventListener('click', _openPokemonDetail);
    el.addEventListener('click', _openPokemonDetail);
  });
}

function _addInputChangeClick() {
  document.querySelector('.js-cp-input').addEventListener('change', _recomputeMoves)
}

function _recomputeMoves(e) {
  const newValue = e.target.value;
  _state.counters = _state.counters.map((counter) => Object.assign({}, counter, {
    cp: Math.round(Number(newValue) / counter.efficiency)
  }));

  _renderCounters(_state.counters);
}

_addPokemonClickEventListeners();
_addInputChangeClick();

document.querySelector('.js-background').addEventListener('click', hideDetail);
document.querySelector('.js-close').addEventListener('click', hideDetail);
document.querySelector('.js-intro').addEventListener('click', toggleIntro);
