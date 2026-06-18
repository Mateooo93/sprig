// ===== src/assets.js =====
// GRIDFORGE - Palette, font, and sprite library
// Pure data, no imports. Both engine.js and render.js depend on this.

// ---------- 16-color palette ----------
const PAL = [
  '#000000', // 0 black
  '#1a1c25', // 1 dark bg
  '#3a4055', // 2 dark gray
  '#7a8194', // 3 mid gray
  '#c5cad6', // 4 light gray
  '#ffffff', // 5 white
  '#5a3a1a', // 6 brown
  '#c46a2a', // 7 copper/orange
  '#a33030', // 8 red
  '#5a8a3a', // 9 green
  '#d8c84a', // 10 yellow
  '#3aa0c0', // 11 cyan
  '#2a4a8a', // 12 blue
  '#7a3aa0', // 13 purple
  '#c45a8a', // 14 pink
  '#8acf4a', // 15 lime
];

// ---------- Sprite library ----------
// Each sprite is 8x8, encoded as 8 rows of 8 hex digits (palette index 0-15).

function S(...rows) {
  return {
    w: 8, h: 8,
    px: rows.map(r => {
      const s = r.padEnd(8, '0').slice(0, 8);
      return [...s].map(c => parseInt(c, 16));
    }),
  };
}

const SPR = {};

// Player (engineer) - compact cyan suit and yellow helmet.
SPR.player = S('000aa000','00aaaa00','00044000','00b44b00','0bbbbbb0','00b44b00','00300300','03000030');
SPR.player_walk1 = S('000aa000','00aaaa00','00044000','00b44b00','0bbbbbb0','00b44b00','00033000','00300030');
SPR.player_walk2 = S('000aa000','00aaaa00','00044000','00b44b00','0bbbbbb0','00b44b00','00330000','03000030');
SPR.player_work = S('000aa000','00aaaa00','00044000','00b44b00','0bbbbbb0','00bb0b00','03030303','00000000');
SPR.player_mine = S('000aa000','00aaaa00','00044000','0bb44b00','0bbbbbb0','00b40b50','00300300','03000030');

// Tiles — biome ground (9/15=green grass, 6/7=brown desert)
SPR['tile-grass']     = S('99999999','999f9999','99999999','9f999999','99999999','999999f9','99999999','99f99999');
SPR['tile-dirt']      = S('66666666','66676666','66666666','67666666','66666676','66666666','66676666','66666666');
SPR['tile-stone']     = S('22222222','22333222','23222232','22233222','22222322','23222232','22333222','22222222');
SPR['tile-sand']      = S('77777777','77777777','77787777','77777777','78777777','77777787','77777777','77787777');
SPR['tile-water']     = S('cccccccc','ccccbccc','cccccccc','bcccccbb','cccccccc','cccbcccc','cccccccc','ccccccbc');
SPR['tile-water2']    = S('bbccccbb','cccccccc','ccccbccc','cccccccc','bbccccbb','cccccccc','cccbcccc','cccccccc');
SPR['tile-iron']      = S('22222222','22552222','22252222','52222522','22222222','22552222','22222522','22222222');
SPR['tile-copper']    = S('22222222','22772222','22272222','72222722','22222222','22772222','22222722','22222222');
SPR['tile-coal']      = S('22222222','20022022','22222222','22000222','22222222','20220022','22222222','22002002');
SPR['tile-oil']       = S('11111111','10111111','11101111','11111101','11111111','11011111','11111111','11101111');
SPR['tile-uranium']   = S('22222222','22aa0022','2222a222','2a0000a2','2a0000a2','2222a222','22aa0022','22222222');
SPR['tile-wood']      = S('99969999','99669999','99969999','99669999','99969999','99669999','99969999','99669999');
SPR['tile-corrupted'] = S('11111111','11111111','11111111','11111111','11111111','11111111','11111111','11111111');
SPR['tile-corrupted2']= S('11111111','111d1111','11111111','1d111111','11111111','111111d1','11111111','11d11111');
SPR['tile-ruin']      = S('33333333','3a11a133','3a11a113','3a11a133','3a11a113','33333333','33113333','3a11a133');
SPR['tile-cracked']   = S('33333333','33030030','33330000','30000030','33300030','30000330','00000333','33030333');
SPR['tile-ash']       = S('22222222','22222222','22222222','22222222','22222222','22222222','22222222','22222222');

// Resource overlays — distinct ore colors (5=white iron, 7=copper, 0=coal, 4=stone, 9/6=wood, a=uranium, d=oil)
SPR['res-iron-ore']    = S('00000000','00555000','00555500','00055550','00555550','00555500','00055000','00000000');
SPR['res-copper-ore']  = S('00000000','00777000','00777700','00077770','00777770','00777700','00077000','00000000');
SPR['res-coal']        = S('00000000','00000000','00022000','00233300','00233300','00022000','00000000','00000000');
SPR['res-stone']       = S('00000000','00444000','00444400','00044440','00444440','00444400','00044000','00000000');
SPR['res-wood']        = S('00099000','00066000','00099000','00699600','00999990','00699600','00099000','00066000');
SPR['res-uranium-ore'] = S('00000000','000a0000','000aa000','00aaaa00','000aa000','000a0000','00000000','00000000');
SPR['res-crude-oil']   = S('00000000','000d0000','000dd000','00dddd00','000dd000','000d0000','00000000','00000000');
SPR['res-oil']         = S('00000000','000d0000','000dd000','00dddd00','000dd000','000d0000','00000000','00000000');
SPR['res-water']      = S('00000000','00000000','00000000','00000000','00000000','00000000','00000000','00000000');

// Buildings — high-contrast silhouettes designed for 8x8 readability.
SPR['bld-burner-miner']     = S('33333333','34555543','35577553','35077053','35555553','33655633','33066033','33333333');
SPR['bld-stone-furnace']    = S('33333333','34444443','34888843','34800843','34477443','34477443','34444443','33333333');
SPR['bld-steel-furnace']    = S('33333333','3cccccc3','3c4444c3','3c7007c3','3c7777c3','3c4444c3','3cccccc3','33333333');
SPR['bld-electric-furnace'] = S('33333333','3bbbbbb3','3b4bb4b3','3b0550b3','3b0550b3','3b4bb4b3','3bbbbbb3','33333333');
SPR['bld-campfire-gen']     = S('33333333','33666633','36aaaa63','36a77a63','36666663','33066033','33a00a33','33333333');
SPR['bld-wood-chest']       = S('33333333','36666663','36999963','36666663','36999963','36666663','36000063','33333333');
SPR['bld-iron-chest']       = S('33333333','34444443','34555543','34444443','34555543','34444443','34000043','33333333');
SPR['bld-belt']             = S('22222222','23333332','23111132','23111132','23111132','23111132','23333332','22222222');
SPR['bld-fast-belt']        = S('22222222','23bbbb32','23111132','23bbbb32','23bbbb32','23111132','23bbbb32','22222222');
SPR['bld-express-belt']     = S('22222222','23eeee32','23111132','23eeee32','23eeee32','23111132','23eeee32','22222222');
SPR['bld-underground-belt'] = S('33333333','32222223','32000023','33333333','33333333','32000023','32222223','33333333');
SPR['bld-splitter']         = S('33333333','32222223','32b11b23','32111123','32111123','32b11b23','32222223','33333333');
SPR['bld-inserter']         = S('00033000','003a3000','00a3a000','0a333a00','003a3000','000a0000','00333000','00222000');
SPR['bld-long-inserter']    = S('00033000','003e3000','00e3e000','0e333e00','003e3000','000e0000','00333000','00222000');
SPR['bld-fast-inserter']    = S('00033000','003b3000','00b3b000','0b333b00','003b3000','000b0000','00444000','00222000');
SPR['bld-small-pole']       = S('00000000','00333000','00383000','00383000','00383000','00383000','00080000','00000000');
SPR['bld-medium-pole']      = S('00033000','003e3000','003e3000','003e3000','003e3000','003e3000','00333000','00000000');
SPR['bld-big-pole']         = S('033ff330','003ff300','003ff300','003ff300','003ff300','003ff300','033ff330','00033000');
SPR['bld-electric-miner']   = S('33333333','34bbbbb3','35b44b53','35b00b53','355bb553','330bb033','33b00b33','33333333');
SPR['bld-lab']              = S('33333333','3eeeeee3','3e3333e3','3e3bb3e3','3e3bb3e3','3e3333e3','3eeeeee3','33333333');
SPR['bld-assembler-1']      = S('33333333','3bbbbbb3','3b3333b3','3b3cc3b3','3b3cc3b3','3b3333b3','3bbbbbb3','33333333');
SPR['bld-assembler-2']      = S('33333333','3bbffbb3','3b3333b3','3b3ff3b3','3b3ff3b3','3b3333b3','3bbffbb3','33333333');
SPR['bld-assembler-3']      = S('33333333','3ddffdd3','3d3333d3','3d3ff3d3','3d3ff3d3','3d3333d3','3ddffdd3','33333333');
SPR['bld-solar']            = S('00111100','01b22b10','1b2222b1','122bb221','122bb221','1b2222b1','01b22b10','00111100');
SPR['bld-accumulator']      = S('00333300','03444430','34bbbb43','34baab43','34baab43','34bbbb43','03444430','00333300');
SPR['bld-refinery']         = S('33333333','3bbbbbb3','3b333bb3','3bbb3bb3','33333e33','33eee333','3ee3ee33','33333333');
SPR['bld-chem-plant']       = S('33333333','33e33e33','3ee33ee3','3e3bb3e3','3ee33ee3','33e33e33','3e3333e3','33333333');
SPR['bld-pipe']             = S('00000000','00333300','03bbbb30','3bbbbbb3','3bbbbbb3','03bbbb30','00333300','00000000');
SPR['bld-pipe-2']           = S('00000000','04444440','04cccc40','4cccccc4','4cccccc4','04cccc40','04444440','00000000');
SPR['bld-pump']             = S('00000000','00333300','03b00b30','3b0bb0b3','3b0bb0b3','03b00b30','00333300','00000000');
SPR['bld-tank']             = S('33333333','3bbbbb33','3bcccbb3','3bc00cb3','3bc00cb3','3bcccbb3','33bbbbb3','33333333');
SPR['bld-offshore-pump']    = S('cccccc00','cccccc30','cccccc30','3bbbbb30','3b0000b3','3bbbbb33','33333333','33333333');
SPR['bld-boiler']           = S('33333333','3aaaaaa3','3a0000a3','3a0cc0a3','3a0cc0a3','3a0000a3','3a0cc0a3','3aaaaaa3');
SPR['bld-steam-engine']     = S('33333333','3aaaaaa3','3a3333a3','3a3cc3a3','3a3cc3a3','3a3333a3','3aaaaaa3','33333333');
SPR['bld-roboport']         = S('33333333','300ff003','30ffff03','30f33f03','30ffff03','300ff003','33d00d33','33333333');
SPR['bld-logi-chest']       = S('33333333','3eeeeee3','3e0000e3','3e0bb0e3','3e0000e3','3eeeeee3','33033033','33333333');
SPR['bld-storage-chest']    = S('33333333','3aaaaaa3','3a0000a3','3a0990a3','3a0000a3','3aaaaaa3','33033033','33333333');
SPR['bld-requester-chest']  = S('33333333','3eeeeee3','3e00b0e3','3e0bb0e3','3e00b0e3','3eeeeee3','33033033','33333333');
SPR['bld-provider-chest']   = S('33333333','3aaaaaa3','3a0aa0a3','3a0000a3','3a0aa0a3','3aaaaaa3','33033033','33333333');
SPR['bld-radar']            = S('33333333','330ee033','33eeee33','3ee33ee3','33eeee33','330ee033','33388333','33333333');
SPR['bld-concrete']         = S('44444444','44444444','44444444','44444444','44444444','44444444','44444444','44444444');
SPR['bld-rocket-silo']      = S('33333333','3aaaaaa3','3a5555a3','3a5555a3','3a5555a3','3aaaaaa3','3aaaaaa3','33333333');
SPR['bld-matter-plant']     = S('33333333','30000d03','30ddd003','30d00d03','30ddd003','30d00d03','30ddd003','33333333');
SPR['bld-centrifuge']       = S('33333333','30000d03','30ddd003','30d00d03','30d00d03','30ddd003','30d00d03','33333333');
SPR['bld-omega-core']       = S('00d00d00','0d0dd0d0','d0ddd0dd','0d0dd0d0','00d00d00','0d0dd0d0','d0ddd0dd','0d0d0d0d');
SPR['bld-wall']             = S('33333333','30000003','30000003','30000003','30000003','30000003','30000003','33333333');
SPR['bld-turret']           = S('00033000','00333300','03300330','00333300','00033000','00033000','00033000','00000000');
SPR['bld-stone-wall']       = S('33333333','30000003','30000003','30000003','30000003','30000003','30000003','33333333');
SPR['bld-nuclear-reactor']  = S('00dddd00','0d0000d0','0d0ff0d0','0d0ff0d0','0d0000d0','0d0ff0d0','0d0000d0','00dddd00');
SPR['bld-biter-spawner']    = S('00888800','08888880','08800880','08888880','08033080','08800880','08888880','00888800');
SPR['bld-spitter-spawner']  = S('00999900','09999990','09900990','09999990','09033090','09900990','09999990','00999900');
SPR['bld-worm']             = S('00099000','00999900','099dd990','099dd990','09999990','00999900','00099000','00033000');
SPR['bld-rail']             = S('33333333','33033033','33333333','33033033','33333333','33033033','33333333','33333333');
SPR['bld-train-stop']       = S('33333333','300ee003','300ee003','300ee003','300ee003','300ee003','300ee003','33333333');
SPR['bld-locomotive']       = S('33333333','30888803','30888803','30000003','30888803','30888803','30000003','33333333');
SPR['bld-tank-car']         = S('33333333','3ccccc3','3c3333c3','3ccccc3','3ccccc3','3c3333c3','3ccccc3','33333333');

// Inventory icons (used for hotbar)
SPR['inv-?'] = S('33333333','30000003','30033003','30003003','30000003','30000003','30000003','33333333');

// Item icons — distinct shapes/colors per type
SPR['item-iron-ore']    = S('00000000','00000000','00555500','05550550','05555550','00555500','00000000','00000000');
SPR['item-copper-ore']  = S('00000000','00770000','07777700','07777700','00777700','00770000','00000000','00000000');
SPR['item-coal']        = S('00000000','00022000','00222200','00222200','00022200','00022000','00000000','00000000');
SPR['item-stone']       = S('00000000','00000000','00444400','04444440','04444440','00444400','00000000','00000000');
SPR['item-wood']        = S('00000000','00660000','06666600','00660000','06666600','00660000','00000000','00000000');
SPR['item-uranium-ore'] = S('00000000','000aa000','00aaa000','00aaa000','000aa000','00000000','00000000','00000000');
SPR['item-iron-plate']  = S('00000000','00000000','00000000','45555554','45555554','55555555','00000000','00000000');
SPR['item-copper-plate']= S('00000000','00000000','00000000','47777774','47777774','47777777','00000000','00000000');
SPR['item-steel-plate'] = S('00000000','00000000','0ccccccc','c33333c','c33333cc','cccccccc','00000000','00000000');
SPR['item-stone-brick'] = S('00000000','04444400','4333340','43333340','40333340','04444440','00000000','00000000');
SPR['item-iron-stick']  = S('00005000','00055000','00055000','00055000','00055000','00055000','00050000','00000000');
SPR['item-iron-gear']   = S('00055000','00500500','05055050','50000500','50000500','05055050','00500500','00055000');
SPR['item-iron-pickaxe']= S('00005550','00055550','00555500','05555000','00550000','00500000','05000000','00000000');
SPR['item-wood-chest']  = S('00000000','06666600','06999600','06666600','06999600','06666600','06666600','00000000');
SPR['item-copper-cable']= S('00077000','00077000','07777770','00777700','00077000','00077000','00077000','00000000');
SPR['item-belt']        = S('22222222','22111222','22211222','22221122','22221122','22211222','22111222','22222222');
SPR['item-inserter']    = S('00000000','000f0000','00ff0000','0fff0000','00ff0000','000f0000','00033000','00033000');
SPR['item-electronic']  = S('00099000','09900090','09000000','09999900','09900000','09000000','09999900','00099000');
SPR['item-engine']      = S('00088000','00888800','08888880','08000080','08000080','08888880','00888800','00088000');
SPR['item-glass']       = S('00000000','0bbbbb00','0b000b00','0b000b00','0b000b00','0b000b00','0bbbbb00','00000000');
SPR['item-battery']     = S('00088000','00888800','08888880','08888880','08888880','00888800','00088000','00000000');
SPR['item-concrete']    = S('44444444','44444444','44444444','44444444','44444444','44444444','44444444','44444444');
SPR['item-plastic']     = S('00000000','0ffff0f0','0f0f0f0f','0f0f0f0f','0f0f0f0f','0ffff0f0','0f0f0f0f','00000000');
SPR['item-acid']        = S('00000000','0eeee000','0e00e000','0e00e000','0e00e000','0e00e000','0eeee000','00000000');
SPR['item-sulfur']      = S('00000000','0ddd0000','00dd0000','000dd000','0000dd00','00000dd0','00000dd0','00000000');
SPR['item-advanced-electronic'] = S('000dd000','0d00d000','0000d000','0ddddd00','0000d000','0000d000','0ddddd00','000dd000');
SPR['item-processing']  = S('000dd000','0d00d000','0000d000','0ddddd00','0000d000','0000d000','0ddddd00','000dd000');
SPR['item-speed-module']= S('000aa000','0a00a000','0a00a000','0aaaa000','0a00a000','0a00a000','0a00a000','000aa000');
SPR['item-productivity-module']= S('00099000','09009000','00900900','09999900','00900900','09009000','00099000','00099000');
SPR['item-efficiency-module']  = S('000ff000','0f00f000','0f00f000','0ffff000','0f00f000','0f00f000','0f00f000','000ff000');
SPR['item-flying-robot-frame']= S('000dd000','0d00d000','0000d000','0ddddd00','0000d000','0000d000','0ddddd00','000dd000');
SPR['item-repair-pack'] = S('00000000','00aa0000','0a44a000','04444000','00440000','0a44a000','00aa0000','00000000');
SPR['item-logi-chest']  = S('00000000','0eeeee00','0e000e00','0e000e00','0e000e00','0e000e00','0eeeee00','00000000');
SPR['item-storage-chest']= S('00000000','0aaaaa00','0a000a00','0a000a00','0a000a00','0a000a00','0aaaaa00','00000000');
SPR['item-requester-chest']=S('00000000','0eeeee00','0e000e00','0e000e00','0e000e00','0e000e00','0eeeee00','00000000');
SPR['item-provider-chest']=S('00000000','0aaaaa00','0a000a00','0a000a00','0a000a00','0a000a00','0aaaaa00','00000000');
SPR['item-roboport']    = S('00000000','000ff000','00ffff00','00f0ff00','00ffff00','00ff0000','00d0d000','00000000');
SPR['item-wall']        = S('00000000','03300300','00330030','00033000','00003300','00330030','03300300','00000000');
SPR['item-turret']      = S('00000000','00033000','00333300','03300330','00333300','00033000','00033000','00000000');
SPR['item-ammo']        = S('00000000','00088000','00888800','08888880','08888880','00888800','00088000','00000000');
SPR['item-pistol']      = S('00000000','00000000','00033300','00333330','00000330','00000030','00000000','00000000');
SPR['item-smg']         = S('00000000','00000000','03333300','33333330','00033330','00000330','00000000','00000000');
SPR['item-rocket-silo'] = S('00000000','0aaaaa00','0a555a00','0a555a00','0a555a00','0aaaaa00','0aaaaa00','00000000');
SPR['item-rocket-part'] = S('00055000','00555500','05555550','00555500','00555500','00555500','00555500','00055000');
SPR['item-rocket-fuel'] = S('000ee000','00eee000','0e0eee00','0e0eee00','0e0eee00','00eee000','000ee000','000ee000');
SPR['item-rocket-control']= S('00000000','0dddd000','0d00d000','0d00d000','0d00d000','0d00d000','0dddd000','00000000');
SPR['item-low-density'] = S('00000000','04444400','04444400','04444400','04444400','04444400','04444400','00000000');
SPR['item-satellite']   = S('00055000','00555500','0a555a00','05aaa50','0aaaaa0','0a555a0','00555500','00055000');
SPR['item-matter-cell'] = S('00d00d00','0d00d00d','d000d00d','0d0d0d00','00d00d00','0d0dd0d0','d0d0d0d0','0d0d0d0d');
SPR['item-u-235']       = S('00000000','00000000','0000a000','0000aa00','00aa00a0','00aa0aa0','000a00a0','00000000');
SPR['item-u-fuel']      = S('000aa000','0aaaaa00','000a0000','0aa00a00','0a00a000','00aaaaa0','00aaaaa0','00000000');
SPR['item-explosives']  = S('00000000','0aa000a0','0a0aa0a0','0aa000a0','0a00a0a0','00aaaaa0','00000000','00000000');
SPR['item-nuke']        = S('00000000','00aaaa00','0a0000a0','0a0aa0a0','0a0000a0','00aaaa00','00aa00a0','00000000');
SPR['item-omega-core']  = S('00d00d00','0d0dd0d0','d0ddd0dd','0d0dd0d0','00d00d00','0d0dd0d0','d0ddd0dd','0d0dd0d0');
SPR['item-red-pack']    = S('000aa000','0aaaaa0a','0a0000a0','0aaaaaa0','0a00a0a0','0a0000a0','0aaaaaa0','000aa000');
SPR['item-green-pack']  = S('00099000','09999990','09000090','09999990','09000990','09000090','09999990','00099000');
SPR['item-blue-pack']   = S('00fff0f0','0ffff0f0','ff00f0ff','fffff0ff','f0f0ffff','f0ffffff','f0ffffff','000f0f00');
SPR['item-yellow-pack'] = S('00dddd00','0d000d00','d0000d0d','d0000d0d','d0000d0d','d0000d0d','0d000d00','00dddd00');
SPR['item-white-pack']  = S('0ffffff0','f000000f','f0ffff0f','f000000f','f0ffff0f','f000000f','f0ffff0f','0ffffff0');
SPR['item-purple-pack']= S('00ddd000','0d0d0d00','d00d0ddd','d00d0d0d','d00d0ddd','d00d0d0d','0d0d0d00','00ddd000');
SPR['item-space-pack']  = SPR['item-white-pack'];
SPR['item-matter-pack'] = SPR['item-purple-pack'];
SPR['item-military-pack']=SPR['item-yellow-pack'];
SPR['item-chemical-pack']=SPR['item-blue-pack'];
SPR['item-production-pack']=S('000ff000','0f0f0f00','0f0f0f00','0fffff00','0f0f0f00','0f0f0f00','0f0f0f00','000ff000');
SPR['item-utility-pack']= S('000aa000','0a00a000','0a00a000','0aaaaa00','0a00a000','0a00a000','0a00a000','000aa000');
SPR['item-crude-oil']   = S('00000000','00222000','02222220','02200220','02222220','02200020','02222220','00000000');
SPR['item-heavy-oil']   = S('00000000','00333000','03333330','03300330','03333330','03300330','03333330','00000000');
SPR['item-light-oil']   = S('00000000','00eee000','0eeeee00','0ee00e00','0eeeee00','0ee00e00','0eeeee00','00000000');
SPR['item-lubricant']   = S('00000000','00ddd000','0dd00dd0','0d0dd0d0','0dd00dd0','0d0dd0d0','0dd00dd0','00000000');
SPR['item-water']       = S('00000000','00ccc000','0c000c00','0c00cc00','0cc00c00','0c000c00','0c000c00','00000000');
SPR['item-stone-brick'] = S('03300330','30030030','03003000','30003000','00300300','30030030','03300300','00000000');
SPR['item-architect-fragment']= S('00000000','00d00000','0000d000','0000d000','0d000d00','00dd0000','00d00000','00000000');
SPR['item-cassia-core'] = S('00000000','00b00000','0b00b000','0b00b000','0b00b000','0b00b000','00b00000','00000000');
SPR['item-fast-belt']   = S('33333333','330bb033','330bb033','33333333','33333333','330bb033','330bb033','33333333');
SPR['item-express-belt']= S('33333333','330ee033','330ee033','33333333','33333333','330ee033','330ee033','33333333');
SPR['item-long-inserter']=S('0000e000','000e0e00','00e0ee00','0e0eee00','0e0e0e00','0e00e000','0e000000','00000000');
SPR['item-fast-inserter']=S('0000e000','000e0e00','00e0ee00','0e0eee00','0e0e0e00','0e00e000','0e000000','00000000');
SPR['item-assembler-1'] = S('00000000','0fffff00','0f000f00','0fffff00','0f000f00','0f000f00','0fffff00','00000000');
SPR['item-assembler-2'] = S('00000000','0bbbbf00','0b00bf00','0bbbbf00','0b00bf00','0b00bf00','0bbbbf00','00000000');
SPR['item-assembler-3'] = S('00000000','0ddddd00','0d00dd00','0ddddd00','0d00dd00','0d00dd00','0ddddd00','00000000');
SPR['item-lab']         = S('00000000','00000000','0eeeee00','0e000e00','0eeeee00','0e000e00','0eeeee00','00000000');
SPR['item-solar']       = S('00111100','01122110','01222210','01222210','01222210','01122110','00111100','00000000');
SPR['item-accumulator'] = S('00333300','033bb330','03bbbb30','03bbbb30','03bbbb30','033bb330','00333300','00000000');
SPR['item-burner-miner']= S('00000000','00555000','00555500','00555500','00055500','00055000','00555000','00000000');
SPR['item-electric-miner']=S('00000000','00555000','05b00b50','05b00b50','00555500','00055500','00555000','00000000');
SPR['item-stone-furnace']=S('00000000','00888000','00888800','00444400','00444400','00444400','00000000','00000000');
SPR['item-steel-furnace']=S('00000000','00cccc00','00cccc00','00444400','00444400','00444400','00000000','00000000');
SPR['item-campfire-gen']= S('00000000','00660000','06666600','06006000','00660000','00000000','00000000','00000000');
SPR['item-small-pole']  = S('00000000','00088000','00088000','00088000','00088000','00088000','00088000','00000000');
SPR['item-pipe']        = S('00000000','00bb0000','0bbbbb00','0bbbbb00','0bbbbb00','00bb0000','00000000','00000000');
SPR['item-pump']        = S('00000000','00bb0000','0b00b000','0b0bb000','0b0bb000','0b00b000','00bb0000','00000000');
SPR['item-tank']        = S('00000000','3bbbcbb3','3bccbcb3','3bbbcbb3','3cccccb3','3cc00cc3','3cc00cc3','33333333');
SPR['item-refinery']    = S('00000000','0bbb0000','0b0b0000','0bbb0000','0000e000','0eee0000','00000000','00000000');
SPR['item-chem-plant']  = S('00000000','0000e000','0ee0e000','0e00e000','0ee0e000','0e00e000','0ee0e000','00000000');
SPR['item-radar']       = S('00000000','00000000','0eee0000','0e0e0000','0eee0000','08880000','08000000','00000000');
SPR['item-centrifuge']  = S('00000000','0000d000','0ddd0000','0d00d000','0d00d000','0ddd0000','0d00d000','00000000');
SPR['item-matter-plant']= S('00000000','0000d000','0ddd0000','0d00d000','0ddd0000','0d00d000','0ddd0000','00000000');
SPR['item-nuclear-reactor']=S('00000000','0dddd000','0d000d00','0d0d0d00','0d000d00','0d0d0d00','0dddd000','00000000');
SPR['item-underground-belt']=S('33333333','30000003','33333333','30000003','30000003','33333333','30000003','33333333');
SPR['item-splitter']    = S('00000000','00000000','30030030','30030030','30030030','30030030','00000000','00000000');
SPR['item-iron-chest']  = S('00000000','0a00a000','0a00a000','0a00a000','0a00a000','0a00a000','0a00a000','00000000');
SPR['item-solid-fuel']  = S('0aaaa0a0','a0a0a0aa','a0a0a0a0','0aaaa0a0','a0aa0a0a','a0a0aaaa','0a0a0a0a','a0a0a0a0');
SPR['item-rail']        = S('00000000','03003000','00000000','03003000','00000000','03003000','00000000','00000000');
SPR['item-train-stop']  = S('00000000','00ee0000','00ee0000','00ee0000','00ee0000','00ee0000','00ee0000','00000000');
SPR['item-locomotive']  = S('00000000','08888800','08888880','00000000','08888800','08888880','00000000','00000000');
SPR['item-tank-car']    = S('00000000','0ccccc00','0c333c00','0ccccc00','0ccccc00','0c333c00','0ccccc00','00000000');
SPR['item-biter-spawner']=S('00000000','08888800','08888880','08800880','08888880','08033080','08800880','00888800');
SPR['item-spitter-spawner']=S('00000000','09999900','09999990','09900990','09999990','09033090','09900990','00999900');

// Buildable inventory icons mirror their placed construction sprites.
for (const key of [
  'burner-miner', 'stone-furnace', 'steel-furnace', 'electric-furnace', 'campfire-gen',
  'wood-chest', 'iron-chest', 'belt', 'fast-belt', 'express-belt', 'underground-belt',
  'splitter', 'inserter', 'long-inserter', 'fast-inserter', 'small-pole', 'medium-pole',
  'big-pole', 'electric-miner', 'lab', 'assembler-1', 'assembler-2', 'assembler-3',
  'solar', 'accumulator', 'refinery', 'chem-plant', 'pipe', 'pipe-2', 'pump', 'tank', 'steam-engine',
  'boiler', 'offshore-pump',
  'roboport', 'logi-chest', 'storage-chest', 'requester-chest', 'provider-chest', 'radar',
  'concrete', 'rocket-silo', 'matter-plant', 'centrifuge', 'wall', 'turret', 'stone-wall',
  'nuclear-reactor', 'omega-core', 'rail', 'train-stop', 'locomotive', 'tank-car',
]) {
  if (SPR['bld-' + key]) SPR['item-' + key] = SPR['bld-' + key];
}

// Cursor / UI
SPR['cursor'] = S('fffffff0','f00000f0','f00000f0','f00000f0','f00000f0','f00000f0','f00000f0','ffffffff');
SPR['cursor-ok'] = S('fffffff0','f00ff0f0','f0f0f0f0','f0f0f0f0','f0f0f0f0','f00000f0','f00000f0','ffffffff');
SPR['cursor-bad'] = S('fffffff0','f0f000f0','f0f0f0f0','f00000f0','f0f0f0f0','f0f0f0f0','f0f000f0','ffffffff');
SPR['button'] = S('33333333','30000003','30000003','30000003','30000003','30000003','30000003','33333333');
SPR['button-sel'] = S('33333333','3cccccc3','3c0000c3','3c0000c3','3c0000c3','3c0000c3','3cccccc3','33333333');

// ---------- 3x5 font ----------
const FONT = {
  ' ':['000','000','000','000','000'],
  '0':['111','101','101','101','111'],
  '1':['010','110','010','010','111'],
  '2':['111','001','111','100','111'],
  '3':['111','001','111','001','111'],
  '4':['101','101','111','001','001'],
  '5':['111','100','111','001','111'],
  '6':['111','100','111','101','111'],
  '7':['111','001','010','100','100'],
  '8':['111','101','111','101','111'],
  '9':['111','101','111','001','111'],
  'A':['111','101','111','101','101'],
  'B':['110','101','110','101','110'],
  'C':['111','100','100','100','111'],
  'D':['110','101','101','101','110'],
  'E':['111','100','110','100','111'],
  'F':['111','100','110','100','100'],
  'G':['111','100','101','101','111'],
  'H':['101','101','111','101','101'],
  'I':['111','010','010','010','111'],
  'J':['111','001','001','101','111'],
  'K':['101','110','100','110','101'],
  'L':['100','100','100','100','111'],
  'M':['101','111','111','101','101'],
  'N':['101','111','111','111','101'],
  'O':['111','101','101','101','111'],
  'P':['111','101','110','100','100'],
  'Q':['111','101','101','111','001'],
  'R':['111','101','110','101','101'],
  'S':['111','100','111','001','111'],
  'T':['111','010','010','010','010'],
  'U':['101','101','101','101','111'],
  'V':['101','101','101','101','010'],
  'W':['101','101','111','111','101'],
  'X':['101','101','010','101','101'],
  'Y':['101','101','010','010','010'],
  'Z':['111','001','010','100','111'],
  '.':['000','000','000','000','010'],
  ',':['000','000','000','010','100'],
  '!':['010','010','010','000','010'],
  '?':['111','001','010','000','010'],
  "'":["010","010","000","000","000"],
  '"':['101','101','000','000','000'],
  ':':['000','010','000','010','000'],
  '-':['000','000','111','000','000'],
  '+':['000','010','111','010','000'],
  '/':['001','001','010','100','100'],
  '(':['010','100','100','100','010'],
  ')':['010','001','001','001','010'],
  '_':['000','000','000','000','111'],
  '=':['000','111','000','111','000'],
  '*':['000','101','010','101','000'],
  '<':['001','010','100','010','001'],
  '>':['100','010','001','010','100'],
  '[':['110','100','100','100','110'],
  ']':['011','001','001','001','011'],
  '$':['010','111','010','111','010'],
};

// ===== src/items.js =====
// GRIDFORGE - Item catalog
// Each item: { id, name, cat, era, stack, buildable, recipe, fluid, spriteKey }

const ITEMS = [
  // ---------- Raw resources (Era 0) ----------
  { id: 'iron-ore',     name: 'Iron Ore',     cat: 'resource', era: 0, stack: 50 },
  { id: 'copper-ore',   name: 'Copper Ore',   cat: 'resource', era: 0, stack: 50 },
  { id: 'coal',         name: 'Coal',         cat: 'resource', era: 0, stack: 50 },
  { id: 'stone',        name: 'Stone',        cat: 'resource', era: 0, stack: 50 },
  { id: 'wood',         name: 'Wood',         cat: 'resource', era: 0, stack: 50 },
  { id: 'crude-oil',    name: 'Crude Oil',    cat: 'resource', era: 4, stack: 50, fluid: true },
  { id: 'uranium-ore',  name: 'Uranium Ore',  cat: 'resource', era: 8, stack: 25 },

  // ---------- Hand-craftable intermediates (Era 0) ----------
  { id: 'iron-plate',   name: 'Iron Plate',   cat: 'material', era: 0, stack: 100, handCraft: true },
  { id: 'copper-plate', name: 'Copper Plate', cat: 'material', era: 0, stack: 100, handCraft: true },
  { id: 'iron-stick',   name: 'Iron Stick',   cat: 'material', era: 0, stack: 100, handCraft: true },
  { id: 'iron-pickaxe', name: 'Iron Pickaxe', cat: 'tool',     era: 0, stack: 1,   handCraft: true },
  { id: 'wood-chest',   name: 'Wooden Chest', cat: 'building', era: 0, stack: 1,   buildable: true, handCraft: true, building: 'wood-chest' },

  // ---------- Buildings (Era 1) ----------
  { id: 'burner-miner',     name: 'Burner Miner',    cat: 'building', era: 1, stack: 1, buildable: true, building: 'burner-miner' },
  { id: 'stone-furnace',    name: 'Stone Furnace',   cat: 'building', era: 1, stack: 1, buildable: true, building: 'stone-furnace' },
  { id: 'campfire-gen',     name: 'Campfire Gen',    cat: 'building', era: 1, stack: 1, buildable: true, building: 'campfire-gen' },
  { id: 'iron-chest',       name: 'Iron Chest',      cat: 'building', era: 1, stack: 1, buildable: true, building: 'iron-chest' },

  // ---------- Era 2 (Mechanical) ----------
  { id: 'iron-gear',        name: 'Iron Gear',       cat: 'component', era: 2, stack: 100 },
  { id: 'copper-cable',     name: 'Copper Cable',    cat: 'component', era: 2, stack: 200 },
  { id: 'steel-plate',      name: 'Steel Plate',     cat: 'material',  era: 2, stack: 100 },
  { id: 'stone-brick',      name: 'Stone Brick',     cat: 'material',  era: 2, stack: 100 },
  { id: 'belt',             name: 'Transport Belt',  cat: 'building',  era: 2, stack: 100, buildable: true, building: 'belt' },
  { id: 'inserter',         name: 'Inserter',        cat: 'building',  era: 2, stack: 100, buildable: true, building: 'inserter' },
  { id: 'underground-belt', name: 'Underground Belt',cat: 'building',  era: 2, stack: 50,  buildable: true, building: 'underground-belt' },
  { id: 'splitter',         name: 'Splitter',        cat: 'building',  era: 2, stack: 50,  buildable: true, building: 'splitter' },
  { id: 'steel-furnace',    name: 'Steel Furnace',   cat: 'building',  era: 2, stack: 1, buildable: true, building: 'steel-furnace' },
  { id: 'offshore-pump',    name: 'Offshore Pump',   cat: 'building',  era: 2, stack: 1, buildable: true, building: 'offshore-pump' },
  { id: 'boiler',           name: 'Boiler',          cat: 'building',  era: 2, stack: 1, buildable: true, building: 'boiler' },
  { id: 'steam-engine',     name: 'Steam Engine',    cat: 'building',  era: 2, stack: 1, buildable: true, building: 'steam-engine' },

  // ---------- Era 3 (Electric) ----------
  { id: 'electronic',         name: 'Electronic Circuit', cat: 'component', era: 3, stack: 200 },
  { id: 'engine',             name: 'Engine Unit',        cat: 'component', era: 3, stack: 50 },
  { id: 'glass',              name: 'Glass',              cat: 'material',  era: 3, stack: 100 },
  { id: 'battery',            name: 'Battery',            cat: 'material',  era: 3, stack: 50 },
  { id: 'small-pole',         name: 'Small Power Pole',   cat: 'building',  era: 3, stack: 50, buildable: true, building: 'small-pole' },
  { id: 'electric-miner',     name: 'Electric Miner',     cat: 'building',  era: 3, stack: 1, buildable: true, building: 'electric-miner' },
  { id: 'lab',                name: 'Lab',                cat: 'building',  era: 3, stack: 1, buildable: true, building: 'lab' },
  { id: 'assembler-1',        name: 'Assembler I',        cat: 'building',  era: 3, stack: 1, buildable: true, building: 'assembler-1' },
  { id: 'solar',              name: 'Solar Panel',        cat: 'building',  era: 3, stack: 1, buildable: true, building: 'solar' },
  { id: 'accumulator',        name: 'Accumulator',        cat: 'building',  era: 3, stack: 1, buildable: true, building: 'accumulator' },
  { id: 'concrete',           name: 'Concrete',           cat: 'material',  era: 3, stack: 100 },
  { id: 'radar',              name: 'Radar',              cat: 'building',  era: 3, stack: 1, buildable: true, building: 'radar' },
  { id: 'long-inserter',      name: 'Long-Handed Inserter', cat: 'building', era: 3, stack: 50, buildable: true, building: 'long-inserter' },
  { id: 'fast-belt',          name: 'Fast Belt',          cat: 'building',  era: 3, stack: 50, buildable: true, building: 'fast-belt' },
  { id: 'fast-inserter',      name: 'Fast Inserter',      cat: 'building',  era: 3, stack: 50, buildable: true, building: 'fast-inserter' },
  { id: 'assembler-2',        name: 'Assembler II',       cat: 'building',  era: 3, stack: 1, buildable: true, building: 'assembler-2' },

  { id: 'electric-furnace',   name: 'Electric Furnace',   cat: 'building', era: 3, stack: 1, buildable: true, building: 'electric-furnace' },
  { id: 'medium-pole',        name: 'Medium Power Pole',  cat: 'building', era: 3, stack: 50, buildable: true, building: 'medium-pole' },
  { id: 'big-pole',           name: 'Big Power Pole',     cat: 'building', era: 3, stack: 20, buildable: true, building: 'big-pole' },
  { id: 'pipe-2',             name: 'Reinforced Pipe',    cat: 'building', era: 3, stack: 50, buildable: true, building: 'pipe-2' },

  // ---------- Era 4 (Chemical) ----------
  { id: 'plastic',            name: 'Plastic',           cat: 'material',  era: 4, stack: 100 },
  { id: 'sulfur',             name: 'Sulfur',            cat: 'material',  era: 4, stack: 50 },
  { id: 'acid',               name: 'Sulfuric Acid',     cat: 'material',  era: 4, stack: 50, fluid: true },
  { id: 'heavy-oil',          name: 'Heavy Oil',         cat: 'material',  era: 4, stack: 50, fluid: true },
  { id: 'light-oil',          name: 'Light Oil',         cat: 'material',  era: 4, stack: 50, fluid: true },
  { id: 'lubricant',          name: 'Lubricant',         cat: 'material',  era: 4, stack: 50, fluid: true },
  { id: 'water',              name: 'Water',             cat: 'material',  era: 4, stack: 50, fluid: true },
  { id: 'advanced-electronic',name: 'Advanced Circuit',  cat: 'component', era: 4, stack: 100 },
  { id: 'pipe',               name: 'Pipe',              cat: 'building',  era: 2, stack: 50, buildable: true, building: 'pipe' },
  { id: 'pump',               name: 'Pump',              cat: 'building',  era: 4, stack: 10, buildable: true, building: 'pump' },
  { id: 'tank',               name: 'Storage Tank',      cat: 'building',  era: 4, stack: 1, buildable: true, building: 'tank' },
  { id: 'refinery',           name: 'Oil Refinery',      cat: 'building',  era: 4, stack: 1, buildable: true, building: 'refinery' },
  { id: 'chem-plant',         name: 'Chemical Plant',    cat: 'building',  era: 4, stack: 1, buildable: true, building: 'chem-plant' },

  // ---------- Era 5 (Logistics) ----------
  { id: 'processing',         name: 'Processing Unit',   cat: 'component', era: 5, stack: 50 },
  { id: 'speed-module',       name: 'Speed Module',      cat: 'module',    era: 5, stack: 50 },
  { id: 'productivity-module',name: 'Productivity Mod',  cat: 'module',    era: 5, stack: 50 },
  { id: 'efficiency-module',  name: 'Efficiency Mod',    cat: 'module',    era: 5, stack: 50 },
  { id: 'flying-robot-frame', name: 'Robot Frame',       cat: 'component', era: 5, stack: 50 },
  { id: 'repair-pack',        name: 'Repair Pack',       cat: 'tool',      era: 5, stack: 50 },
  { id: 'logi-chest',         name: 'Logistic Chest',    cat: 'building',  era: 5, stack: 50, buildable: true, building: 'logi-chest' },
  { id: 'storage-chest',      name: 'Storage Chest',     cat: 'building',  era: 5, stack: 50, buildable: true, building: 'storage-chest' },
  { id: 'requester-chest',    name: 'Requester Chest',   cat: 'building',  era: 5, stack: 10, buildable: true, building: 'requester-chest' },
  { id: 'provider-chest',     name: 'Provider Chest',    cat: 'building',  era: 5, stack: 10, buildable: true, building: 'provider-chest' },
  { id: 'roboport',           name: 'Roboport',          cat: 'building',  era: 5, stack: 1, buildable: true, building: 'roboport' },
  { id: 'rail',               name: 'Rail',              cat: 'building',  era: 5, stack: 100, buildable: true, building: 'rail' },
  { id: 'train-stop',         name: 'Train Stop',        cat: 'building',  era: 5, stack: 1, buildable: true, building: 'train-stop' },
  { id: 'locomotive',         name: 'Locomotive',        cat: 'building',  era: 5, stack: 1, buildable: true, building: 'locomotive' },
  { id: 'tank-car',           name: 'Fluid Wagon',       cat: 'building',  era: 5, stack: 1, buildable: true, building: 'tank-car' },
  { id: 'express-belt',       name: 'Express Belt',      cat: 'building',  era: 5, stack: 50, buildable: true, building: 'express-belt' },
  { id: 'assembler-3',        name: 'Assembler III',     cat: 'building',  era: 5, stack: 1, buildable: true, building: 'assembler-3' },

  // ---------- Era 6 (Warfare) ----------
  { id: 'wall',               name: 'Stone Wall',        cat: 'building',  era: 6, stack: 100, buildable: true, building: 'wall' },
  { id: 'turret',             name: 'Gun Turret',        cat: 'building',  era: 6, stack: 1, buildable: true, building: 'turret' },
  { id: 'ammo',               name: 'Firearm Magazine',  cat: 'ammo',      era: 6, stack: 200 },
  { id: 'pistol',             name: 'Pistol',            cat: 'weapon',    era: 6, stack: 1 },
  { id: 'smg',                name: 'SMG',               cat: 'weapon',    era: 6, stack: 1 },

  // ---------- Era 7 (Rocket) ----------
  { id: 'solid-fuel',         name: 'Solid Fuel',        cat: 'material',  era: 7, stack: 50 },
  { id: 'rocket-fuel',        name: 'Rocket Fuel',       cat: 'material',  era: 7, stack: 50 },
  { id: 'low-density',        name: 'LD Structure',      cat: 'component', era: 7, stack: 20 },
  { id: 'rocket-control',     name: 'Rocket Control',    cat: 'component', era: 7, stack: 20 },
  { id: 'satellite',          name: 'Satellite',         cat: 'component', era: 7, stack: 1 },
  { id: 'rocket-silo',        name: 'Rocket Silo',       cat: 'building',  era: 7, stack: 1, buildable: true, building: 'rocket-silo' },
  { id: 'rocket-part',        name: 'Rocket Part',       cat: 'component', era: 7, stack: 1 },

  // ---------- Era 8 (Matter) ----------
  { id: 'u-235',              name: 'U-235',             cat: 'material',  era: 8, stack: 50 },
  { id: 'u-fuel',             name: 'Uranium Fuel Cell', cat: 'material',  era: 8, stack: 10 },
  { id: 'explosives',         name: 'Explosives',        cat: 'material',  era: 8, stack: 50 },
  { id: 'nuke',               name: 'Atomic Bomb',       cat: 'ammo',      era: 8, stack: 1 },
  { id: 'matter-cell',        name: 'Matter Cell',       cat: 'material',  era: 8, stack: 20 },
  { id: 'centrifuge',         name: 'Centrifuge',        cat: 'building',  era: 8, stack: 1, buildable: true, building: 'centrifuge' },
  { id: 'matter-plant',       name: 'Matter Plant',      cat: 'building',  era: 8, stack: 1, buildable: true, building: 'matter-plant' },
  { id: 'nuclear-reactor',    name: 'Nuclear Reactor',   cat: 'building',  era: 8, stack: 1, buildable: true, building: 'nuclear-reactor' },

  // ---------- Era 9 (Omega) ----------
  { id: 'omega-core',         name: 'Omega Core',        cat: 'special',   era: 9, stack: 1, buildable: true, building: 'omega-core' },

  // ---------- Science packs ----------
  { id: 'red-pack',         name: 'Red Science',     cat: 'pack', era: 3, stack: 200 },
  { id: 'green-pack',       name: 'Green Science',   cat: 'pack', era: 4, stack: 200 },
  { id: 'chemical-pack',    name: 'Chem Science',    cat: 'pack', era: 4, stack: 200 },
  { id: 'military-pack',    name: 'Military Science',cat: 'pack', era: 6, stack: 200 },
  { id: 'production-pack',  name: 'Prod Science',    cat: 'pack', era: 5, stack: 200 },
  { id: 'utility-pack',     name: 'Utility Science', cat: 'pack', era: 5, stack: 200 },
  { id: 'space-pack',       name: 'Space Science',   cat: 'pack', era: 7, stack: 200 },
  { id: 'matter-pack',      name: 'Matter Science',  cat: 'pack', era: 8, stack: 200 },

  // ---------- Story / special ----------
  { id: 'architect-fragment', name: 'Architect Fragment', cat: 'special', era: 0, stack: 99 },
  { id: 'cassia-core',        name: 'Cassia Core',        cat: 'special', era: 3, stack: 1 },
];

// Quick lookups
const ITEM_MAP = Object.fromEntries(ITEMS.map(i => [i.id, i]));
function getItem(id) { return ITEM_MAP[id] || null; }

/** Palette index for item category borders in UI */
const CAT_COLOR = {
  resource: 8,
  material: 4,
  component: 11,
  building: 10,
  tool: 7,
  weapon: 8,
  ammo: 10,
  module: 13,
  science: 9,
  fluid: 12,
};

function catColor(id) {
  if (!id) return 3;
  if (id.startsWith('iron-') || id === 'burner-miner' || id === 'electric-miner') return 5;
  return CAT_COLOR[getItem(id)?.cat] || 3;
}

// Sprite key resolver
function ITEM_ICON(id) {
  if (!id) return 'inv-?';
  // All items have a sprite of the form item-<id>
  return 'item-' + id;
}

function TILE_ICON(tileType) {
  // Map T enum from world.js to a sprite key
  const m = {
    0: 'tile-grass',
    1: 'tile-dirt',
    2: 'tile-stone',
    3: 'tile-sand',
    4: 'tile-water',
    5: 'tile-iron',
    6: 'tile-copper',
    7: 'tile-coal',
    8: 'tile-oil',
    9: 'tile-uranium',
    10: 'tile-wood',
    11: 'tile-corrupted',
    12: 'tile-ruin',
    13: 'tile-cracked',
    14: 'tile-ash',
  };
  return m[tileType] || 'tile-grass';
}

function isBuildable(id) {
  const it = getItem(id);
  return !!(it && it.building);
}

function isPlaceable(id) {
  return isBuildable(id);
}

function isFluid(id) {
  const it = getItem(id);
  return !!(it && it.fluid);
}

// ===== src/data/recipes.js =====
// GRIDFORGE - Recipe catalog
// Each recipe: { id, name, category, inputs: [{item, count}], outputs: [{item, count}],
//                time (ticks), machine, unlocked (bool or tech id), tier, era }
// Categories: 'smelt', 'craft', 'assemble', 'chem', 'centrifuge', 'rocket', 'matter'
// Machines:   'hand', 'stone-furnace', 'steel-furnace', 'electric-furnace',
//             'assembler-1', 'assembler-2', 'assembler-3',
//             'chem-plant', 'centrifuge', 'refinery', 'rocket-silo', 'matter-plant'

const RECIPES = [
  // ============================================================
  // HAND CRAFTING (Era 0)
  // ============================================================
  { id: 'r-iron-plate',  name: 'Iron Plate',  category: 'craft',
    inputs:  [{item:'iron-ore',count:2}],
    outputs: [{item:'iron-plate',count:1}],
    time: 24, machine: 'hand', tier: 1, era: 0,
    unlocked: true },
  { id: 'r-copper-plate',name: 'Copper Plate',category: 'craft',
    inputs:  [{item:'copper-ore',count:2}],
    outputs: [{item:'copper-plate',count:1}],
    time: 24, machine: 'hand', tier: 1, era: 0,
    unlocked: true },
  { id: 'r-iron-stick',  name: 'Iron Stick',  category: 'craft',
    inputs:  [{item:'iron-plate',count:1}],
    outputs: [{item:'iron-stick',count:2}],
    time: 16, machine: 'hand', tier: 1, era: 0,
    unlocked: true },
  { id: 'r-iron-pick',   name: 'Iron Pickaxe',category: 'craft',
    inputs:  [{item:'iron-plate',count:3},{item:'iron-stick',count:2}],
    outputs: [{item:'iron-pickaxe',count:1}],
    time: 40, machine: 'hand', tier: 1, era: 0,
    unlocked: true },
  { id: 'r-wood-chest',  name: 'Wooden Chest',category: 'craft',
    inputs:  [{item:'wood',count:4}],
    outputs: [{item:'wood-chest',count:1}],
    time: 20, machine: 'hand', tier: 1, era: 0,
    unlocked: true },
  { id: 'r-iron-chest',  name: 'Iron Chest',  category: 'craft',
    inputs:  [{item:'iron-plate',count:4}],
    outputs: [{item:'iron-chest',count:1}],
    time: 24, machine: 'hand', tier: 1, era: 1,
    unlocked: true },
  { id: 'r-hand-gear',   name: 'Iron Gear',   category: 'craft',
    inputs:  [{item:'iron-plate',count:2}],
    outputs: [{item:'iron-gear',count:1}],
    time: 20, machine: 'hand', tier: 1, era: 0,
    unlocked: true },
  { id: 'r-hand-cable',  name: 'Copper Cable',category: 'craft',
    inputs:  [{item:'copper-plate',count:1}],
    outputs: [{item:'copper-cable',count:2}],
    time: 16, machine: 'hand', tier: 1, era: 0,
    unlocked: true },
  { id: 'r-hand-belt',   name: 'Transport Belt',category: 'craft',
    inputs:  [{item:'iron-plate',count:1},{item:'iron-stick',count:1}],
    outputs: [{item:'belt',count:1}],
    time: 24, machine: 'hand', tier: 1, era: 0,
    unlocked: true },
  { id: 'r-hand-inserter',name:'Inserter',   category: 'craft',
    inputs:  [{item:'iron-plate',count:2},{item:'iron-stick',count:2},{item:'iron-gear',count:1}],
    outputs: [{item:'inserter',count:1}],
    time: 40, machine: 'hand', tier: 1, era: 1,
    unlocked: true },
  { id: 'r-burner-miner',name: 'Burner Miner Drill',category: 'craft',
    inputs:  [{item:'iron-plate',count:3},{item:'iron-stick',count:3},{item:'stone',count:2}],
    outputs: [{item:'burner-miner',count:1}],
    time: 60, machine: 'hand', tier: 1, era: 1,
    unlocked: true },
  { id: 'r-stone-furnace',name:'Stone Furnace',category: 'craft',
    inputs:  [{item:'stone',count:5}],
    outputs: [{item:'stone-furnace',count:1}],
    time: 32, machine: 'hand', tier: 1, era: 1,
    unlocked: true },
  { id: 'r-campfire-gen',name: 'Campfire Generator',category: 'craft',
    inputs:  [{item:'stone',count:4},{item:'wood',count:6}],
    outputs: [{item:'campfire-gen',count:1}],
    time: 50, machine: 'hand', tier: 1, era: 1,
    unlocked: true },
  { id: 'r-assembler-1-hand', name: 'Assembler I', category: 'craft',
    inputs:  [{item:'iron-plate',count:5},{item:'iron-gear',count:3},{item:'stone',count:2}],
    outputs: [{item:'assembler-1',count:1}],
    time: 70, machine: 'hand', tier: 1, era: 2,
    unlocked: true },

  // ============================================================
  // SMELTING (Era 1-2)
  // ============================================================
  { id: 'r-smelt-iron',  name: 'Smelt Iron',  category: 'smelt',
    inputs:  [{item:'iron-ore',count:1}],
    outputs: [{item:'iron-plate',count:1}],
    time: 32, machine: 'stone-furnace', tier: 1, era: 1,
    unlocked: true },
  { id: 'r-smelt-copper',name: 'Smelt Copper',category: 'smelt',
    inputs:  [{item:'copper-ore',count:1}],
    outputs: [{item:'copper-plate',count:1}],
    time: 32, machine: 'stone-furnace', tier: 1, era: 1,
    unlocked: true },
  { id: 'r-smelt-steel', name: 'Smelt Steel', category: 'smelt',
    inputs:  [{item:'iron-plate',count:5}],
    outputs: [{item:'steel-plate',count:1}],
    time: 80, machine: 'steel-furnace', tier: 2, era: 2,
    unlocked: false, requiresTech: 'T2-steel' },
  { id: 'r-smelt-stone-brick', name: 'Stone Brick', category: 'smelt',
    inputs:  [{item:'stone',count:2}],
    outputs: [{item:'stone-brick',count:1}],
    time: 32, machine: 'stone-furnace', tier: 1, era: 2,
    unlocked: false, requiresTech: 'T2-stone-brick' },
  { id: 'r-steel-furnace', name: 'Steel Furnace', category: 'assemble',
    inputs:  [{item:'stone-furnace',count:1},{item:'steel-plate',count:3},{item:'stone-brick',count:4}],
    outputs: [{item:'steel-furnace',count:1}],
    time: 60, machine: 'assembler-1', tier: 2, era: 2,
    unlocked: false, requiresTech: 'T2-steel' },

  // ============================================================
  // ASSEMBLY 1 (Era 2)
  // ============================================================
  { id: 'r-iron-gear',   name: 'Iron Gear Wheel', category: 'assemble',
    inputs:  [{item:'iron-plate',count:2}],
    outputs: [{item:'iron-gear',count:1}],
    time: 20, machine: 'assembler-1', tier: 1, era: 2,
    unlocked: false, requiresTech: 'T2-gears' },
  { id: 'r-copper-cable',name: 'Copper Cable',     category: 'assemble',
    inputs:  [{item:'copper-plate',count:1}],
    outputs: [{item:'copper-cable',count:2}],
    time: 20, machine: 'assembler-1', tier: 1, era: 2,
    unlocked: false, requiresTech: 'T2-cables' },
  { id: 'r-iron-belt',   name: 'Transport Belt',   category: 'assemble',
    inputs:  [{item:'iron-plate',count:1},{item:'iron-gear',count:1}],
    outputs: [{item:'belt',count:2}],
    time: 20, machine: 'assembler-1', tier: 1, era: 2,
    unlocked: false, requiresTech: 'T2-belt' },
  { id: 'r-inserter',    name: 'Inserter',         category: 'assemble',
    inputs:  [{item:'iron-plate',count:1},{item:'iron-gear',count:1},{item:'iron-stick',count:1}],
    outputs: [{item:'inserter',count:1}],
    time: 20, machine: 'assembler-1', tier: 1, era: 2,
    unlocked: false, requiresTech: 'T2-inserter' },
  { id: 'r-long-inserter', name: 'Long-Handed Inserter', category: 'assemble',
    inputs:  [{item:'iron-plate',count:1},{item:'iron-gear',count:1},{item:'iron-stick',count:1}],
    outputs: [{item:'long-inserter',count:1}],
    time: 30, machine: 'assembler-1', tier: 1, era: 3,
    unlocked: false, requiresTech: 'T3-long-inserter' },
  { id: 'r-fast-inserter',  name: 'Fast Inserter',  category: 'assemble',
    inputs:  [{item:'iron-plate',count:1},{item:'iron-gear',count:1},{item:'electronic',count:1}],
    outputs: [{item:'fast-inserter',count:1}],
    time: 30, machine: 'assembler-2', tier: 2, era: 3,
    unlocked: false, requiresTech: 'T3-fast-inserter' },
  { id: 'r-fast-belt',      name: 'Fast Transport Belt', category: 'assemble',
    inputs:  [{item:'belt',count:1},{item:'iron-gear',count:1}],
    outputs: [{item:'fast-belt',count:1}],
    time: 20, machine: 'assembler-1', tier: 2, era: 3,
    unlocked: false, requiresTech: 'T3-fast-belt' },
  { id: 'r-express-belt',   name: 'Express Transport Belt', category: 'assemble',
    inputs:  [{item:'fast-belt',count:1},{item:'iron-gear',count:2},{item:'lubricant',count:1}],
    outputs: [{item:'express-belt',count:1}],
    time: 30, machine: 'assembler-2', tier: 3, era: 5,
    unlocked: false, requiresTech: 'T5-express-belt' },
  { id: 'r-underground-belt', name: 'Underground Belt', category: 'assemble',
    inputs:  [{item:'belt',count:2},{item:'stone-brick',count:1}],
    outputs: [{item:'underground-belt',count:2}],
    time: 30, machine: 'assembler-1', tier: 1, era: 2,
    unlocked: false, requiresTech: 'T2-underground' },
  { id: 'r-splitter',       name: 'Splitter',       category: 'assemble',
    inputs:  [{item:'iron-plate',count:2},{item:'iron-gear',count:1},{item:'belt',count:1}],
    outputs: [{item:'splitter',count:1}],
    time: 30, machine: 'assembler-1', tier: 1, era: 2,
    unlocked: false, requiresTech: 'T2-splitter' },
  { id: 'r-small-pole',    name: 'Small Electric Pole', category: 'assemble',
    inputs:  [{item:'wood',count:2},{item:'copper-cable',count:1}],
    outputs: [{item:'small-pole',count:1}],
    time: 20, machine: 'assembler-1', tier: 1, era: 3,
    unlocked: false, requiresTech: 'T3-power' },
  { id: 'r-medium-pole',   name: 'Medium Electric Pole', category: 'assemble',
    inputs:  [{item:'steel-plate',count:2},{item:'copper-cable',count:2}],
    outputs: [{item:'medium-pole',count:1}],
    time: 30, machine: 'assembler-1', tier: 2, era: 3,
    unlocked: false, requiresTech: 'T3-electric-miner' },
  { id: 'r-big-pole',      name: 'Big Electric Pole',  category: 'assemble',
    inputs:  [{item:'steel-plate',count:3},{item:'copper-cable',count:3}],
    outputs: [{item:'big-pole',count:1}],
    time: 40, machine: 'assembler-2', tier: 2, era: 3,
    unlocked: false, requiresTech: 'T3-electric-miner' },
  { id: 'r-pipe-2',        name: 'Reinforced Pipe',    category: 'assemble',
    inputs:  [{item:'steel-plate',count:1}],
    outputs: [{item:'pipe-2',count:1}],
    time: 20, machine: 'assembler-1', tier: 1, era: 3,
    unlocked: false, requiresTech: 'T3-electric-miner' },
  { id: 'r-electric-furnace', name: 'Electric Furnace', category: 'assemble',
    inputs:  [{item:'steel-plate',count:5},{item:'stone-brick',count:5},{item:'advanced-electronic',count:1}],
    outputs: [{item:'electric-furnace',count:1}],
    time: 80, machine: 'assembler-2', tier: 2, era: 3,
    unlocked: false, requiresTech: 'T3-accumulator' },
  { id: 'r-offshore-pump', name: 'Offshore Pump',      category: 'assemble',
    inputs:  [{item:'iron-plate',count:3},{item:'iron-gear',count:1},{item:'pipe',count:1}],
    outputs: [{item:'offshore-pump',count:1}],
    time: 30, machine: 'assembler-1', tier: 1, era: 2,
    unlocked: false, requiresTech: 'T2-steel' },
  { id: 'r-boiler',        name: 'Boiler',             category: 'assemble',
    inputs:  [{item:'stone-brick',count:4},{item:'pipe',count:2},{item:'iron-gear',count:1}],
    outputs: [{item:'boiler',count:1}],
    time: 40, machine: 'assembler-1', tier: 1, era: 2,
    unlocked: false, requiresTech: 'T2-steel' },
  { id: 'r-steam-engine',  name: 'Steam Engine',       category: 'assemble',
    inputs:  [{item:'iron-plate',count:5},{item:'iron-gear',count:3},{item:'pipe',count:3}],
    outputs: [{item:'steam-engine',count:1}],
    time: 40, machine: 'assembler-1', tier: 1, era: 2,
    unlocked: false, requiresTech: 'T2-steel' },
  { id: 'r-pipe',          name: 'Pipe',            category: 'assemble',
    inputs:  [{item:'iron-plate',count:1}],
    outputs: [{item:'pipe',count:1}],
    time: 20, machine: 'assembler-1', tier: 1, era: 2,
    unlocked: false, requiresTech: 'T2-steel' },
  { id: 'r-pump',          name: 'Pump',            category: 'assemble',
    inputs:  [{item:'pipe',count:1},{item:'iron-gear',count:1},{item:'steel-plate',count:1}],
    outputs: [{item:'pump',count:1}],
    time: 30, machine: 'assembler-1', tier: 2, era: 4,
    unlocked: false, requiresTech: 'T4-pump' },
  { id: 'r-tank',          name: 'Storage Tank',    category: 'assemble',
    inputs:  [{item:'iron-plate',count:5},{item:'steel-plate',count:1}],
    outputs: [{item:'tank',count:1}],
    time: 40, machine: 'assembler-2', tier: 2, era: 4,
    unlocked: false, requiresTech: 'T4-tank' },
  { id: 'r-engine',        name: 'Engine Unit',     category: 'assemble',
    inputs:  [{item:'steel-plate',count:1},{item:'iron-gear',count:1},{item:'pipe',count:2}],
    outputs: [{item:'engine',count:1}],
    time: 60, machine: 'assembler-2', tier: 2, era: 3,
    unlocked: false, requiresTech: 'T3-engine' },
  { id: 'r-electric-miner',name: 'Electric Mining Drill', category: 'assemble',
    inputs:  [{item:'iron-gear',count:3},{item:'iron-stick',count:2},{item:'electronic',count:1}],
    outputs: [{item:'electric-miner',count:1}],
    time: 50, machine: 'assembler-2', tier: 2, era: 3,
    unlocked: false, requiresTech: 'T3-electric-miner' },
  { id: 'r-assembler-2', name: 'Assembler II', category: 'assemble',
    inputs:  [{item:'assembler-1',count:1},{item:'iron-gear',count:3},{item:'electronic',count:2}],
    outputs: [{item:'assembler-2',count:1}],
    time: 60, machine: 'assembler-1', tier: 2, era: 3,
    unlocked: false, requiresTech: 'T3-electronics' },
  { id: 'r-lab',           name: 'Lab',             category: 'assemble',
    inputs:  [{item:'iron-gear',count:4},{item:'copper-cable',count:4},{item:'belt',count:2}],
    outputs: [{item:'lab',count:1}],
    time: 60, machine: 'hand', tier: 2, era: 3,
    unlocked: false, requiresTech: 'T3-lab' },
  { id: 'r-accumulator',   name: 'Accumulator',     category: 'assemble',
    inputs:  [{item:'iron-plate',count:2},{item:'battery',count:1},{item:'electronic',count:1}],
    outputs: [{item:'accumulator',count:1}],
    time: 60, machine: 'assembler-2', tier: 2, era: 3,
    unlocked: false, requiresTech: 'T3-accumulator' },
  { id: 'r-solar-panel',   name: 'Solar Panel',     category: 'assemble',
    inputs:  [{item:'copper-plate',count:2},{item:'glass',count:1},{item:'electronic',count:1}],
    outputs: [{item:'solar',count:1}],
    time: 60, machine: 'assembler-2', tier: 2, era: 3,
    unlocked: false, requiresTech: 'T3-solar' },
  { id: 'r-chemical-plant',name: 'Chemical Plant',  category: 'assemble',
    inputs:  [{item:'steel-plate',count:3},{item:'iron-gear',count:2},{item:'pipe',count:1},{item:'electronic',count:1}],
    outputs: [{item:'chem-plant',count:1}],
    time: 60, machine: 'assembler-2', tier: 2, era: 4,
    unlocked: false, requiresTech: 'T4-chem' },
  { id: 'r-assembler-3', name: 'Assembler III', category: 'assemble',
    inputs:  [{item:'assembler-2',count:1},{item:'steel-plate',count:3},{item:'advanced-electronic',count:2}],
    outputs: [{item:'assembler-3',count:1}],
    time: 80, machine: 'assembler-2', tier: 3, era: 5,
    unlocked: false, requiresTech: 'T5-processing' },
  { id: 'r-oil-refinery',  name: 'Oil Refinery',    category: 'assemble',
    inputs:  [{item:'steel-plate',count:5},{item:'iron-gear',count:3},{item:'pipe',count:2},{item:'electronic',count:1},{item:'stone-brick',count:5}],
    outputs: [{item:'refinery',count:1}],
    time: 80, machine: 'assembler-2', tier: 2, era: 4,
    unlocked: false, requiresTech: 'T4-refinery' },
  { id: 'r-centrifuge',    name: 'Centrifuge',      category: 'assemble',
    inputs:  [{item:'steel-plate',count:4},{item:'iron-gear',count:4},{item:'electronic',count:2},{item:'pipe',count:2}],
    outputs: [{item:'centrifuge',count:1}],
    time: 80, machine: 'assembler-2', tier: 3, era: 8,
    unlocked: false, requiresTech: 'T8-centrifuge' },
  { id: 'r-matter-plant',  name: 'Matter Plant',    category: 'assemble',
    inputs:  [{item:'steel-plate',count:8},{item:'electronic',count:4},{item:'matter-cell',count:1},{item:'pipe',count:4}],
    outputs: [{item:'matter-plant',count:1}],
    time: 120, machine: 'assembler-3', tier: 4, era: 8,
    unlocked: false, requiresTech: 'T8-matter' },
  { id: 'r-rocket-silo',   name: 'Rocket Silo',     category: 'assemble',
    inputs:  [{item:'steel-plate',count:20},{item:'concrete',count:20},{item:'pipe',count:4},{item:'electronic',count:4},{item:'engine',count:4}],
    outputs: [{item:'rocket-silo',count:1}],
    time: 120, machine: 'assembler-3', tier: 4, era: 7,
    unlocked: false, requiresTech: 'T7-rocket' },
  { id: 'r-rocket-part',   name: 'Rocket Part',     category: 'rocket',
    inputs:  [{item:'low-density',count:1},{item:'rocket-fuel',count:1},{item:'rocket-control',count:1}],
    outputs: [{item:'rocket-part',count:1}],
    time: 120, machine: 'rocket-silo', tier: 4, era: 7,
    unlocked: false, requiresTech: 'T7-rocket-part' },
  { id: 'r-wall',          name: 'Stone Wall',      category: 'assemble',
    inputs:  [{item:'stone-brick',count:2}],
    outputs: [{item:'wall',count:1}],
    time: 20, machine: 'assembler-1', tier: 1, era: 6,
    unlocked: false, requiresTech: 'T6-wall' },
  { id: 'r-gun-turret',    name: 'Gun Turret',      category: 'assemble',
    inputs:  [{item:'iron-gear',count:3},{item:'iron-plate',count:5},{item:'copper-cable',count:1}],
    outputs: [{item:'turret',count:1}],
    time: 50, machine: 'assembler-2', tier: 2, era: 6,
    unlocked: false, requiresTech: 'T6-turret' },
  { id: 'r-ammo',          name: 'Firearm Magazine',category: 'assemble',
    inputs:  [{item:'iron-plate',count:2}],
    outputs: [{item:'ammo',count:1}],
    time: 30, machine: 'assembler-1', tier: 1, era: 6,
    unlocked: false, requiresTech: 'T6-ammo' },
  { id: 'r-pistol',        name: 'Pistol',           category: 'assemble',
    inputs:  [{item:'iron-plate',count:5},{item:'iron-gear',count:2},{item:'copper-cable',count:1}],
    outputs: [{item:'pistol',count:1}],
    time: 50, machine: 'assembler-1', tier: 1, era: 6,
    unlocked: false, requiresTech: 'T6-ammo' },
  { id: 'r-smg',           name: 'SMG',              category: 'assemble',
    inputs:  [{item:'steel-plate',count:3},{item:'iron-gear',count:4},{item:'electronic',count:2}],
    outputs: [{item:'smg',count:1}],
    time: 80, machine: 'assembler-2', tier: 2, era: 6,
    unlocked: false, requiresTech: 'T6-turret' },
  { id: 'r-radar',         name: 'Radar',           category: 'assemble',
    inputs:  [{item:'iron-gear',count:2},{item:'iron-plate',count:3},{item:'electronic',count:1}],
    outputs: [{item:'radar',count:1}],
    time: 40, machine: 'assembler-1', tier: 1, era: 3,
    unlocked: false, requiresTech: 'T3-radar' },
  { id: 'r-concrete',      name: 'Concrete',        category: 'assemble',
    inputs:  [{item:'stone-brick',count:2},{item:'iron-ore',count:1}],
    outputs: [{item:'concrete',count:1}],
    time: 20, machine: 'assembler-1', tier: 1, era: 3,
    unlocked: false, requiresTech: 'T3-concrete' },

  // ============================================================
  // ELECTRONICS (Era 3)
  // ============================================================
  { id: 'r-electronic',    name: 'Electronic Circuit', category: 'assemble',
    inputs:  [{item:'iron-plate',count:1},{item:'copper-cable',count:3}],
    outputs: [{item:'electronic',count:1}],
    time: 30, machine: 'assembler-1', tier: 1, era: 3,
    unlocked: false, requiresTech: 'T3-electronics' },
  { id: 'r-advanced-electronic', name: 'Advanced Circuit',  category: 'assemble',
    inputs:  [{item:'electronic',count:2},{item:'copper-cable',count:2},{item:'plastic',count:1}],
    outputs: [{item:'advanced-electronic',count:1}],
    time: 60, machine: 'assembler-2', tier: 2, era: 4,
    unlocked: false, requiresTech: 'T4-advanced-circuit' },
  { id: 'r-processing-electronic', name: 'Processing Unit', category: 'assemble',
    inputs:  [{item:'advanced-electronic',count:1},{item:'electronic',count:2},{item:'acid',count:1}],
    outputs: [{item:'processing',count:1}],
    time: 60, machine: 'assembler-3', tier: 3, era: 5,
    unlocked: false, requiresTech: 'T5-processing' },
  { id: 'r-glass',         name: 'Glass',                category: 'smelt',
    inputs:  [{item:'stone',count:2}],
    outputs: [{item:'glass',count:1}],
    time: 30, machine: 'stone-furnace', tier: 1, era: 3,
    unlocked: false, requiresTech: 'T3-glass' },
  { id: 'r-battery',       name: 'Battery',              category: 'chem',
    inputs:  [{item:'copper-plate',count:1},{item:'acid',count:1}],
    outputs: [{item:'battery',count:1}],
    time: 40, machine: 'chem-plant', tier: 2, era: 3,
    unlocked: false, requiresTech: 'T3-battery' },

  // ============================================================
  // SCIENCE PACKS
  // ============================================================
  { id: 'r-red-pack',      name: 'Automation Science Pack', category: 'assemble',
    inputs:  [{item:'copper-plate',count:1},{item:'iron-gear',count:1}],
    outputs: [{item:'red-pack',count:1}],
    time: 50, machine: 'assembler-1', tier: 1, era: 3,
    unlocked: false, requiresTech: 'T3-lab' },
  { id: 'r-green-pack',    name: 'Logistic Science Pack',   category: 'assemble',
    inputs:  [{item:'inserter',count:1},{item:'belt',count:1}],
    outputs: [{item:'green-pack',count:1}],
    time: 60, machine: 'assembler-1', tier: 2, era: 4,
    unlocked: false, requiresTech: 'T4-green-pack' },
  { id: 'r-military-pack', name: 'Military Science Pack',   category: 'assemble',
    inputs:  [{item:'wall',count:1},{item:'ammo',count:1},{item:'turret',count:1}],
    outputs: [{item:'military-pack',count:1}],
    time: 80, machine: 'assembler-2', tier: 2, era: 6,
    unlocked: false, requiresTech: 'T6-military-pack' },
  { id: 'r-chemical-pack', name: 'Chemical Science Pack',   category: 'assemble',
    inputs:  [{item:'advanced-electronic',count:1},{item:'engine',count:1},{item:'sulfur',count:1}],
    outputs: [{item:'chemical-pack',count:1}],
    time: 80, machine: 'assembler-2', tier: 2, era: 4,
    unlocked: false, requiresTech: 'T4-chemical-pack' },
  { id: 'r-production-pack', name: 'Production Science Pack', category: 'assemble',
    inputs:  [{item:'rail',count:1},{item:'electric-furnace',count:1},{item:'productivity-module',count:1}],
    outputs: [{item:'production-pack',count:1}],
    time: 80, machine: 'assembler-3', tier: 3, era: 5,
    unlocked: false, requiresTech: 'T5-production-pack' },
  { id: 'r-utility-pack',  name: 'Utility Science Pack',    category: 'assemble',
    inputs:  [{item:'processing',count:1},{item:'flying-robot-frame',count:1},{item:'battery',count:1}],
    outputs: [{item:'utility-pack',count:1}],
    time: 80, machine: 'assembler-3', tier: 3, era: 5,
    unlocked: false, requiresTech: 'T5-utility-pack' },
  { id: 'r-space-pack',    name: 'Space Science Pack',      category: 'rocket',
    inputs:  [{item:'satellite',count:1},{item:'rocket-fuel',count:1}],
    outputs: [{item:'space-pack',count:1}],
    time: 80, machine: 'rocket-silo', tier: 4, era: 7,
    unlocked: false, requiresTech: 'T7-space-pack' },
  { id: 'r-matter-pack',   name: 'Matter Science Pack',     category: 'matter',
    inputs:  [{item:'matter-cell',count:1}],
    outputs: [{item:'matter-pack',count:1}],
    time: 100, machine: 'matter-plant', tier: 4, era: 8,
    unlocked: false, requiresTech: 'T8-matter-pack' },

  // ============================================================
  // OIL / CHEMICAL (Era 4)
  // ============================================================
  { id: 'r-basic-oil',     name: 'Basic Oil Processing',    category: 'chem',
    inputs:  [{item:'crude-oil',count:10}],
    outputs: [{item:'heavy-oil',count:3}],
    time: 40, machine: 'refinery', tier: 2, era: 4,
    unlocked: false, requiresTech: 'T4-refinery' },
  { id: 'r-cracking',      name: 'Heavy Oil Cracking',      category: 'chem',
    inputs:  [{item:'heavy-oil',count:4},{item:'water',count:2}],
    outputs: [{item:'light-oil',count:3}],
    time: 40, machine: 'chem-plant', tier: 2, era: 4,
    unlocked: false, requiresTech: 'T4-cracking' },
  { id: 'r-lubricant',     name: 'Lubricant',               category: 'chem',
    inputs:  [{item:'heavy-oil',count:2}],
    outputs: [{item:'lubricant',count:1}],
    time: 40, machine: 'chem-plant', tier: 2, era: 4,
    unlocked: false, requiresTech: 'T4-lubricant' },
  { id: 'r-plastic',       name: 'Plastic Bar',             category: 'chem',
    inputs:  [{item:'coal',count:1},{item:'crude-oil',count:2}],
    outputs: [{item:'plastic',count:1}],
    time: 30, machine: 'chem-plant', tier: 2, era: 4,
    unlocked: false, requiresTech: 'T4-plastic' },
  { id: 'r-sulfur',        name: 'Sulfur',                   category: 'chem',
    inputs:  [{item:'water',count:3},{item:'crude-oil',count:1}],
    outputs: [{item:'sulfur',count:1}],
    time: 30, machine: 'chem-plant', tier: 2, era: 4,
    unlocked: false, requiresTech: 'T4-sulfur' },
  { id: 'r-acid',          name: 'Sulfuric Acid',            category: 'chem',
    inputs:  [{item:'iron-plate',count:1},{item:'sulfur',count:2},{item:'water',count:2}],
    outputs: [{item:'acid',count:1}],
    time: 30, machine: 'chem-plant', tier: 2, era: 4,
    unlocked: false, requiresTech: 'T4-acid' },
  { id: 'r-rocket-fuel',   name: 'Rocket Fuel',              category: 'chem',
    inputs:  [{item:'solid-fuel',count:2}],
    outputs: [{item:'rocket-fuel',count:1}],
    time: 60, machine: 'assembler-3', tier: 3, era: 7,
    unlocked: false, requiresTech: 'T7-rocket-fuel' },
  { id: 'r-solid-fuel',    name: 'Solid Fuel',               category: 'chem',
    inputs:  [{item:'light-oil',count:1}],
    outputs: [{item:'solid-fuel',count:1}],
    time: 30, machine: 'chem-plant', tier: 2, era: 7,
    unlocked: false, requiresTech: 'T7-solid-fuel' },

  // ============================================================
  // ROCKET (Era 7)
  // ============================================================
  { id: 'r-low-density',   name: 'Low Density Structure',    category: 'assemble',
    inputs:  [{item:'copper-plate',count:5},{item:'plastic',count:5},{item:'steel-plate',count:2}],
    outputs: [{item:'low-density',count:1}],
    time: 60, machine: 'assembler-2', tier: 2, era: 7,
    unlocked: false, requiresTech: 'T7-low-density' },
  { id: 'r-rocket-control',name: 'Rocket Control Unit',      category: 'assemble',
    inputs:  [{item:'processing',count:1},{item:'speed-module',count:1}],
    outputs: [{item:'rocket-control',count:1}],
    time: 60, machine: 'assembler-3', tier: 3, era: 7,
    unlocked: false, requiresTech: 'T7-rocket-control' },
  { id: 'r-satellite',     name: 'Satellite',                category: 'assemble',
    inputs:  [{item:'low-density',count:2},{item:'solar',count:2},{item:'advanced-electronic',count:2},{item:'battery',count:1}],
    outputs: [{item:'satellite',count:1}],
    time: 100, machine: 'assembler-3', tier: 3, era: 7,
    unlocked: false, requiresTech: 'T7-satellite' },

  // ============================================================
  // LOGISTICS (Era 5)
  // ============================================================
  { id: 'r-roboport',      name: 'Roboport',          category: 'assemble',
    inputs:  [{item:'steel-plate',count:5},{item:'iron-gear',count:6},{item:'advanced-electronic',count:4},{item:'battery',count:2}],
    outputs: [{item:'roboport',count:1}],
    time: 100, machine: 'assembler-2', tier: 3, era: 5,
    unlocked: false, requiresTech: 'T5-roboport' },
  { id: 'r-logistic-chest',name: 'Logistic Chest',    category: 'assemble',
    inputs:  [{item:'iron-gear',count:1},{item:'electronic',count:1},{item:'belt',count:1}],
    outputs: [{item:'logi-chest',count:1}],
    time: 40, machine: 'assembler-1', tier: 2, era: 5,
    unlocked: false, requiresTech: 'T5-logi-chest' },
  { id: 'r-storage-chest', name: 'Storage Chest',     category: 'assemble',
    inputs:  [{item:'iron-gear',count:1},{item:'electronic',count:1}],
    outputs: [{item:'storage-chest',count:1}],
    time: 30, machine: 'assembler-1', tier: 2, era: 5,
    unlocked: false, requiresTech: 'T5-storage-chest' },
  { id: 'r-requester-chest', name: 'Requester Chest', category: 'assemble',
    inputs:  [{item:'logi-chest',count:1},{item:'advanced-electronic',count:1}],
    outputs: [{item:'requester-chest',count:1}],
    time: 40, machine: 'assembler-2', tier: 3, era: 5,
    unlocked: false, requiresTech: 'T5-logi-chest' },
  { id: 'r-provider-chest', name: 'Provider Chest',   category: 'assemble',
    inputs:  [{item:'logi-chest',count:1},{item:'electronic',count:2}],
    outputs: [{item:'provider-chest',count:1}],
    time: 40, machine: 'assembler-2', tier: 3, era: 5,
    unlocked: false, requiresTech: 'T5-logi-chest' },
  { id: 'r-flying-frame',  name: 'Flying Robot Frame',category: 'assemble',
    inputs:  [{item:'steel-plate',count:1},{item:'battery',count:1},{item:'electronic',count:2},{item:'engine',count:1}],
    outputs: [{item:'flying-robot-frame',count:1}],
    time: 60, machine: 'assembler-2', tier: 2, era: 5,
    unlocked: false, requiresTech: 'T5-flying-frame' },
  { id: 'r-repair-pack',   name: 'Repair Pack',       category: 'assemble',
    inputs:  [{item:'iron-gear',count:1},{item:'electronic',count:1}],
    outputs: [{item:'repair-pack',count:1}],
    time: 30, machine: 'assembler-1', tier: 2, era: 5,
    unlocked: false, requiresTech: 'T5-roboport' },
  { id: 'r-rail',          name: 'Rail',              category: 'assemble',
    inputs:  [{item:'stone',count:1},{item:'iron-stick',count:1},{item:'steel-plate',count:1}],
    outputs: [{item:'rail',count:2}],
    time: 20, machine: 'assembler-1', tier: 1, era: 5,
    unlocked: false, requiresTech: 'T5-rail' },
  { id: 'r-train-stop',    name: 'Train Stop',        category: 'assemble',
    inputs:  [{item:'iron-plate',count:4},{item:'electronic',count:2},{item:'rail',count:4}],
    outputs: [{item:'train-stop',count:1}],
    time: 50, machine: 'assembler-2', tier: 2, era: 5,
    unlocked: false, requiresTech: 'T5-train-stop' },
  { id: 'r-locomotive',    name: 'Locomotive',        category: 'assemble',
    inputs:  [{item:'steel-plate',count:6},{item:'engine',count:2},{item:'electronic',count:2}],
    outputs: [{item:'locomotive',count:1}],
    time: 80, machine: 'assembler-2', tier: 2, era: 5,
    unlocked: false, requiresTech: 'T5-train' },
  { id: 'r-tank-car',      name: 'Fluid Wagon',       category: 'assemble',
    inputs:  [{item:'steel-plate',count:4},{item:'pipe',count:2},{item:'tank',count:1}],
    outputs: [{item:'tank-car',count:1}],
    time: 60, machine: 'assembler-2', tier: 2, era: 5,
    unlocked: false, requiresTech: 'T5-train' },

  // ============================================================
  // MATTER (Era 8)
  // ============================================================
  { id: 'r-matter-cell',   name: 'Matter Cell',       category: 'matter',
    inputs:  [{item:'iron-ore',count:5}],
    outputs: [{item:'matter-cell',count:1}],
    time: 60, machine: 'matter-plant', tier: 4, era: 8,
    unlocked: false, requiresTech: 'T8-matter' },
  { id: 'r-u-235',         name: 'Uranium Processing',category: 'centrifuge',
    inputs:  [{item:'uranium-ore',count:5}],
    outputs: [{item:'u-235',count:1}],
    time: 80, machine: 'centrifuge', tier: 3, era: 8,
    unlocked: false, requiresTech: 'T8-nuclear' },
  { id: 'r-u-fuel',        name: 'Uranium Fuel Cell', category: 'assemble',
    inputs:  [{item:'u-235',count:1},{item:'iron-plate',count:2}],
    outputs: [{item:'u-fuel',count:1}],
    time: 80, machine: 'assembler-3', tier: 4, era: 8,
    unlocked: false, requiresTech: 'T8-nuclear' },
  { id: 'r-nuclear-reactor', name: 'Nuclear Reactor', category: 'assemble',
    inputs:  [{item:'steel-plate',count:10},{item:'processing',count:4},{item:'concrete',count:10},{item:'u-235',count:2}],
    outputs: [{item:'nuclear-reactor',count:1}],
    time: 160, machine: 'assembler-3', tier: 4, era: 8,
    unlocked: false, requiresTech: 'T8-nuclear' },
  { id: 'r-nuke',          name: 'Atomic Bomb',       category: 'assemble',
    inputs:  [{item:'u-235',count:4},{item:'explosives',count:2},{item:'processing',count:1}],
    outputs: [{item:'nuke',count:1}],
    time: 120, machine: 'assembler-3', tier: 4, era: 8,
    unlocked: false, requiresTech: 'T8-nuke' },
  { id: 'r-explosives',    name: 'Explosives',        category: 'chem',
    inputs:  [{item:'sulfur',count:1},{item:'coal',count:1},{item:'water',count:1}],
    outputs: [{item:'explosives',count:1}],
    time: 30, machine: 'chem-plant', tier: 2, era: 8,
    unlocked: false, requiresTech: 'T8-nuke' },
  { id: 'r-omega-core',    name: 'Omega Core',        category: 'matter',
    inputs:  [{item:'matter-cell',count:8},{item:'processing',count:4},{item:'u-235',count:2},{item:'rocket-control',count:2}],
    outputs: [{item:'omega-core',count:1}],
    time: 240, machine: 'matter-plant', tier: 5, era: 9,
    unlocked: false, requiresTech: 'T9-omega' },

  // ============================================================
  // MODULES (Era 5)
  // ============================================================
  { id: 'r-speed-module',  name: 'Speed Module',      category: 'assemble',
    inputs:  [{item:'electronic',count:2},{item:'advanced-electronic',count:1}],
    outputs: [{item:'speed-module',count:1}],
    time: 60, machine: 'assembler-2', tier: 2, era: 5,
    unlocked: false, requiresTech: 'T5-modules' },
  { id: 'r-productivity-module', name: 'Productivity Module', category: 'assemble',
    inputs:  [{item:'electronic',count:2},{item:'advanced-electronic',count:1}],
    outputs: [{item:'productivity-module',count:1}],
    time: 60, machine: 'assembler-2', tier: 2, era: 5,
    unlocked: false, requiresTech: 'T5-modules' },
  { id: 'r-efficiency-module',   name: 'Efficiency Module',   category: 'assemble',
    inputs:  [{item:'electronic',count:2},{item:'advanced-electronic',count:1}],
    outputs: [{item:'efficiency-module',count:1}],
    time: 60, machine: 'assembler-2', tier: 2, era: 5,
    unlocked: false, requiresTech: 'T5-modules' },
];

// Quick lookup: recipe by id
const RECIPE_BY_ID = Object.fromEntries(RECIPES.map(r => [r.id, r]));

// All recipes that produce a given item
function recipesProducing(itemId) {
  return RECIPES.filter(r => r.outputs.some(o => o.item === itemId));
}

// All recipes that consume a given item
function recipesConsuming(itemId) {
  return RECIPES.filter(r => r.inputs.some(i => i.item === itemId));
}

// ===== src/data/tech.js =====
// GRIDFORGE - Tech tree
// Each tech: { id, name, era, cost: { 'science-pack-id': count, ... },
//              time (ticks), unlocks: [recipe-ids and/or building-ids],
//              prereq: [tech-ids], description }
// Unlocks referenced by id; the engine resolves them.


function recipeIdsByName(...names) {
  return RECIPES.filter(r => names.includes(r.name)).map(r => r.id);
}

const TECHS = [
  // ============================================================
  // ERA 0 - No tech (only hand crafting)
  // ============================================================

  // ============================================================
  // ERA 1 - Steam & Stride
  // ============================================================
  { id: 'T1-burner-miner',  name: 'Burner Mining Drill',  era: 1,
    cost: {}, time: 60,
    prereq: [],
    unlocks: ['r-burner-miner'],
    description: 'A drill that burns fuel to extract ore.' },
  { id: 'T1-furnace',       name: 'Stone Furnaces',       era: 1,
    cost: {}, time: 60,
    prereq: [],
    unlocks: ['r-stone-furnace', 'r-smelt-iron', 'r-smelt-copper'],
    description: 'Smelt ore into plates automatically.' },
  { id: 'T1-power',         name: 'Steam Power',          era: 1,
    cost: {}, time: 80,
    prereq: [],
    unlocks: ['r-campfire-gen'],
    description: 'Burn wood to generate steam power.' },

  // ============================================================
  // ERA 2 - Mechanical Age
  // ============================================================
  { id: 'T2-gears',         name: 'Iron Gear Wheels',     era: 2,
    cost: {}, time: 80,
    prereq: ['T1-furnace'],
    unlocks: ['r-iron-gear'],
    description: 'Toothed wheels, base of all machinery.' },
  { id: 'T2-cables',        name: 'Copper Cables',        era: 2,
    cost: {}, time: 80,
    prereq: ['T1-furnace'],
    unlocks: ['r-copper-cable'],
    description: 'Drawn copper wires for future electronics.' },
  { id: 'T2-belt',          name: 'Transport Belts',      era: 2,
    cost: {}, time: 100,
    prereq: ['T2-gears'],
    unlocks: ['r-iron-belt'],
    description: 'Move items between machines automatically.' },
  { id: 'T2-inserter',      name: 'Inserter',             era: 2,
    cost: {}, time: 100,
    prereq: ['T2-gears'],
    unlocks: ['r-inserter'],
    description: 'A mechanical arm that moves single items.' },
  { id: 'T2-underground',   name: 'Underground Belts',    era: 2,
    cost: {}, time: 80,
    prereq: ['T2-belt'],
    unlocks: ['r-underground-belt'],
    description: 'Belt segments that hide under terrain.' },
  { id: 'T2-splitter',      name: 'Splitter',             era: 2,
    cost: {}, time: 80,
    prereq: ['T2-belt'],
    unlocks: ['r-splitter'],
    description: 'Splits or merges belt streams.' },
  { id: 'T2-steel',         name: 'Steel Furnaces',       era: 2,
    cost: {}, time: 120,
    prereq: ['T1-furnace'],
    unlocks: ['r-smelt-steel', 'r-steel-furnace', 'r-pipe', 'r-offshore-pump', 'r-boiler', 'r-steam-engine'],
    description: 'Stronger smelting, faster throughput, and steam power.' },
  { id: 'T2-stone-brick',   name: 'Stone Bricks',         era: 2,
    cost: {}, time: 60,
    prereq: ['T1-furnace'],
    unlocks: ['r-smelt-stone-brick'],
    description: 'Heat-treated stone for sturdy buildings.' },

  // ============================================================
  // ERA 3 - Electric Dawn
  // ============================================================
  { id: 'T3-power',         name: 'Electric Power',       era: 3,
    cost: { 'red-pack': 5 }, time: 120,
    prereq: ['T2-cables'],
    unlocks: ['r-small-pole'],
    description: 'Power poles distribute electricity.' },
  { id: 'T3-electronics',   name: 'Electronics',          era: 3,
    cost: { 'red-pack': 8 }, time: 150,
    prereq: ['T2-cables'],
    unlocks: ['r-electronic'],
    description: 'Circuit boards from copper and iron.' },
  { id: 'T3-electric-miner',name: 'Electric Mining Drill',era: 3,
    cost: { 'red-pack': 10 }, time: 150,
    prereq: ['T3-power'],
    unlocks: ['r-electric-miner', 'r-medium-pole', 'r-big-pole', 'r-pipe-2'],
    description: 'Faster mining, draws power from the grid.' },
  { id: 'T3-lab',           name: 'Research Labs',        era: 3,
    cost: {}, time: 120,
    prereq: ['T2-belt', 'T2-inserter'],
    unlocks: ['r-lab', 'r-red-pack'],
    description: 'Research automation and logistics.' },
  { id: 'T3-engine',        name: 'Engine Unit',          era: 3,
    cost: { 'red-pack': 10 }, time: 150,
    prereq: ['T3-electric-miner'],
    unlocks: ['r-engine'],
    description: 'Combustion engine for advanced machinery.' },
  { id: 'T3-glass',         name: 'Glass',                era: 3,
    cost: { 'red-pack': 6 }, time: 100,
    prereq: ['T1-furnace'],
    unlocks: ['r-glass'],
    description: 'Sand smelted into clear panes.' },
  { id: 'T3-battery',       name: 'Batteries',            era: 3,
    cost: { 'red-pack': 8 }, time: 120,
    prereq: ['T3-electronics'],
    unlocks: ['r-battery'],
    description: 'Portable power storage.' },
  { id: 'T3-accumulator',   name: 'Accumulators',         era: 3,
    cost: { 'red-pack': 10 }, time: 130,
    prereq: ['T3-battery', 'T3-power'],
    unlocks: ['r-accumulator', 'r-electric-furnace'],
    description: 'Grid-level power buffer.' },
  { id: 'T3-solar',         name: 'Solar Panels',         era: 3,
    cost: { 'red-pack': 12 }, time: 150,
    prereq: ['T3-accumulator', 'T3-glass'],
    unlocks: ['r-solar'],
    description: 'Endless energy from the star above.' },
  { id: 'T3-concrete',      name: 'Concrete',             era: 3,
    cost: { 'red-pack': 6 }, time: 100,
    prereq: ['T2-stone-brick'],
    unlocks: ['r-concrete'],
    description: 'Reinforced ground for advanced buildings.' },
  { id: 'T3-radar',         name: 'Radar',                era: 3,
    cost: { 'red-pack': 8 }, time: 120,
    prereq: ['T3-electronics'],
    unlocks: ['r-radar'],
    description: 'Reveals nearby terrain and chunks.' },
  { id: 'T3-long-inserter', name: 'Long-Handed Inserter', era: 3,
    cost: { 'red-pack': 6 }, time: 100,
    prereq: ['T2-inserter'],
    unlocks: ['r-long-inserter'],
    description: 'Reaches across one extra tile.' },
  { id: 'T3-fast-belt',     name: 'Fast Belts',           era: 3,
    cost: { 'red-pack': 10 }, time: 120,
    prereq: ['T2-belt', 'T3-engine'],
    unlocks: ['r-fast-belt'],
    description: 'Belts moving items at 2x speed.' },
  { id: 'T3-fast-inserter', name: 'Fast Inserter',        era: 3,
    cost: { 'red-pack': 8 }, time: 120,
    prereq: ['T2-inserter', 'T3-electronics'],
    unlocks: ['r-fast-inserter'],
    description: 'Inserts up to 3 items per second.' },

  // ============================================================
  // ERA 4 - Chemical Cascade
  // ============================================================
  { id: 'T4-pipes',         name: 'Fluid Pipes',          era: 4,
    cost: { 'red-pack': 10, 'green-pack': 5 }, time: 120,
    prereq: ['T3-lab'],
    unlocks: ['r-pipe'],
    description: 'Transport fluids across the factory.' },
  { id: 'T4-refinery',      name: 'Oil Refinery',         era: 4,
    cost: { 'red-pack': 10, 'green-pack': 8 }, time: 150,
    prereq: ['T4-pipes'],
    unlocks: ['r-oil-refinery', 'r-basic-oil'],
    description: 'Crude oil into heavy, light, and fuel.' },
  { id: 'T4-chem',          name: 'Chemical Plant',       era: 4,
    cost: { 'red-pack': 10, 'green-pack': 6 }, time: 130,
    prereq: ['T4-refinery'],
    unlocks: ['r-chemical-plant'],
    description: 'Combine fluids and items for advanced outputs.' },
  { id: 'T4-plastic',       name: 'Plastic',              era: 4,
    cost: { 'red-pack': 8, 'green-pack': 6 }, time: 130,
    prereq: ['T4-chem'],
    unlocks: ['r-plastic'],
    description: 'Oil-derived plastic bars.' },
  { id: 'T4-sulfur',        name: 'Sulfur',               era: 4,
    cost: { 'red-pack': 8, 'green-pack': 6 }, time: 120,
    prereq: ['T4-chem'],
    unlocks: ['r-sulfur'],
    description: 'Byproduct of oil processing.' },
  { id: 'T4-acid',          name: 'Sulfuric Acid',        era: 4,
    cost: { 'red-pack': 8, 'green-pack': 8 }, time: 130,
    prereq: ['T4-sulfur'],
    unlocks: ['r-acid'],
    description: 'Used for advanced circuits and batteries.' },
  { id: 'T4-advanced-circuit',name:'Advanced Circuits',   era: 4,
    cost: { 'red-pack': 10, 'green-pack': 8 }, time: 150,
    prereq: ['T4-plastic', 'T3-electronics'],
    unlocks: ['r-advanced-electronic'],
    description: 'Smaller, faster circuits with plastic.' },
  { id: 'T4-pump',          name: 'Pumps',                era: 4,
    cost: { 'red-pack': 6, 'green-pack': 4 }, time: 100,
    prereq: ['T4-pipes'],
    unlocks: ['r-pump'],
    description: 'Boost fluid throughput.' },
  { id: 'T4-tank',          name: 'Storage Tanks',        era: 4,
    cost: { 'red-pack': 6, 'green-pack': 4 }, time: 100,
    prereq: ['T4-pipes'],
    unlocks: ['r-tank'],
    description: 'Large fluid reservoirs.' },
  { id: 'T4-cracking',      name: 'Oil Cracking',         era: 4,
    cost: { 'red-pack': 8, 'green-pack': 8 }, time: 150,
    prereq: ['T4-refinery'],
    unlocks: ['r-cracking'],
    description: 'Convert heavy oil into light oil.' },
  { id: 'T4-lubricant',     name: 'Lubricant',            era: 4,
    cost: { 'red-pack': 8, 'green-pack': 6 }, time: 120,
    prereq: ['T4-chem'],
    unlocks: ['r-lubricant'],
    description: 'Required for high-speed machinery.' },
  { id: 'T4-green-pack',    name: 'Logistic Science',     era: 4,
    cost: { 'red-pack': 5 }, time: 80,
    prereq: ['T3-lab'],
    unlocks: ['r-green-pack'],
    description: 'Science from inserters and belts.' },
  { id: 'T4-chemical-pack', name: 'Chemical Science',     era: 4,
    cost: { 'red-pack': 8, 'green-pack': 6 }, time: 100,
    prereq: ['T4-chem'],
    unlocks: ['r-chemical-pack'],
    description: 'Science from advanced materials.' },

  // ============================================================
  // ERA 5 - Production Line
  // ============================================================
  { id: 'T5-rail',          name: 'Railways',             era: 5,
    cost: { 'red-pack': 10, 'green-pack': 10, 'chemical-pack': 4 }, time: 150,
    prereq: ['T4-chem'],
    unlocks: ['r-rail'],
    description: 'Iron rails for transport and logistics.' },
  { id: 'T5-train',         name: 'Trains',               era: 5,
    cost: { 'red-pack': 12, 'green-pack': 10, 'chemical-pack': 6 }, time: 200,
    prereq: ['T5-rail', 'T3-engine'],
    unlocks: ['r-locomotive', 'r-tank-car', 'r-train-stop'],
    description: 'Heavy haulage between distant bases.' },
  { id: 'T5-flying-frame',  name: 'Flying Robot Frame',   era: 5,
    cost: { 'red-pack': 10, 'green-pack': 8, 'chemical-pack': 6 }, time: 180,
    prereq: ['T3-engine', 'T3-battery'],
    unlocks: ['r-flying-frame'],
    description: 'The body of your construction drones.' },
  { id: 'T5-roboport',      name: 'Roboport',             era: 5,
    cost: { 'red-pack': 10, 'green-pack': 8, 'chemical-pack': 6 }, time: 180,
    prereq: ['T5-flying-frame'],
    unlocks: ['r-roboport', 'r-repair-pack'],
    description: 'Charges robots and defines their network.' },
  { id: 'T5-logi-chest',    name: 'Logistic Chests',      era: 5,
    cost: { 'red-pack': 8, 'green-pack': 6, 'chemical-pack': 4 }, time: 120,
    prereq: ['T3-electronics'],
    unlocks: ['r-logistic-chest', 'r-requester-chest', 'r-provider-chest'],
    description: 'Robots deliver items on demand.' },
  { id: 'T5-storage-chest', name: 'Storage Chests',       era: 5,
    cost: { 'red-pack': 6, 'green-pack': 4 }, time: 100,
    prereq: ['T5-logi-chest'],
    unlocks: ['r-storage-chest'],
    description: 'Bots deposit excess items automatically.' },
  { id: 'T5-processing',    name: 'Processing Units',     era: 5,
    cost: { 'red-pack': 10, 'green-pack': 10, 'chemical-pack': 8 }, time: 200,
    prereq: ['T4-advanced-circuit', 'T4-acid'],
    unlocks: ['r-processing-electronic'],
    description: 'High-end processors for robots and rockets.' },
  { id: 'T5-modules',       name: 'Modules',              era: 5,
    cost: { 'red-pack': 10, 'green-pack': 8, 'chemical-pack': 6 }, time: 150,
    prereq: ['T4-advanced-circuit'],
    unlocks: ['r-speed-module', 'r-productivity-module', 'r-efficiency-module'],
    description: 'Modules boost machine performance.' },
  { id: 'T5-express-belt',  name: 'Express Belts',        era: 5,
    cost: { 'red-pack': 12, 'green-pack': 10, 'chemical-pack': 8 }, time: 200,
    prereq: ['T5-modules', 'T4-lubricant'],
    unlocks: ['r-express-belt'],
    description: 'The fastest belt, requires lubricant.' },
  { id: 'T5-production-pack',name:'Production Science',  era: 5,
    cost: { 'red-pack': 12, 'green-pack': 10, 'chemical-pack': 8 }, time: 200,
    prereq: ['T5-modules', 'T5-rail'],
    unlocks: ['r-production-pack'],
    description: 'Advanced science from rail logistics.' },
  { id: 'T5-utility-pack',  name: 'Utility Science',      era: 5,
    cost: { 'red-pack': 12, 'green-pack': 10, 'chemical-pack': 8 }, time: 200,
    prereq: ['T5-roboport', 'T5-processing'],
    unlocks: ['r-utility-pack'],
    description: 'Science from robots and processors.' },

  // ============================================================
  // ERA 6 - Warfare
  // ============================================================
  { id: 'T6-wall',          name: 'Walls',                era: 6,
    cost: { 'red-pack': 8 }, time: 100,
    prereq: [],
    unlocks: ['r-wall'],
    description: 'Stone barriers slow the Corruption.' },
  { id: 'T6-ammo',          name: 'Firearm Ammunition',   era: 6,
    cost: { 'red-pack': 8 }, time: 100,
    prereq: [],
    unlocks: ['r-ammo', 'r-pistol'],
    description: 'Magazine-fed rounds and a sidearm for the first attacks.' },
  { id: 'T6-turret',        name: 'Gun Turret',           era: 6,
    cost: { 'red-pack': 12, 'military-pack': 2 }, time: 150,
    prereq: ['T6-ammo'],
    unlocks: ['r-gun-turret', 'r-smg'],
    description: 'Automated defense for your base.' },
  { id: 'T6-military-pack', name: 'Military Science',     era: 6,
    cost: { 'red-pack': 8, 'military-pack': 4 }, time: 100,
    prereq: ['T6-turret'],
    unlocks: ['r-military-pack'],
    description: 'Study the Corruption to resist it.' },

  // ============================================================
  // ERA 7 - Rocketry
  // ============================================================
  { id: 'T7-solid-fuel',    name: 'Solid Fuel',           era: 7,
    cost: { 'red-pack': 10, 'green-pack': 8, 'chemical-pack': 6, 'utility-pack': 4 }, time: 150,
    prereq: ['T4-chem'],
    unlocks: ['r-solid-fuel'],
    description: 'Refined light-oil fuel bricks.' },
  { id: 'T7-rocket-fuel',   name: 'Rocket Fuel',          era: 7,
    cost: { 'red-pack': 12, 'green-pack': 10, 'chemical-pack': 8, 'utility-pack': 6 }, time: 200,
    prereq: ['T7-solid-fuel'],
    unlocks: ['r-rocket-fuel'],
    description: 'Liquid fuel for your first rocket.' },
  { id: 'T7-low-density',   name: 'Low Density Structure',era: 7,
    cost: { 'red-pack': 12, 'green-pack': 10, 'chemical-pack': 8, 'utility-pack': 6 }, time: 200,
    prereq: ['T4-plastic'],
    unlocks: ['r-low-density'],
    description: 'Lightweight composite for spacecraft.' },
  { id: 'T7-rocket-control',name: 'Rocket Control Unit',  era: 7,
    cost: { 'red-pack': 12, 'green-pack': 12, 'chemical-pack': 10, 'utility-pack': 8, 'production-pack': 4 }, time: 250,
    prereq: ['T5-processing', 'T5-modules'],
    unlocks: ['r-rocket-control'],
    description: 'Avionics for a working rocket.' },
  { id: 'T7-satellite',     name: 'Satellite',            era: 7,
    cost: { 'red-pack': 14, 'green-pack': 12, 'chemical-pack': 10, 'utility-pack': 8, 'production-pack': 4 }, time: 250,
    prereq: ['T7-low-density', 'T3-solar', 'T3-battery'],
    unlocks: ['r-satellite'],
    description: 'Cargo for orbit, returns Space Science.' },
  { id: 'T7-rocket',        name: 'Rocket Silo',          era: 7,
    cost: { 'red-pack': 20, 'green-pack': 20, 'chemical-pack': 20, 'utility-pack': 20, 'production-pack': 10, 'space-pack': 5 }, time: 400,
    prereq: ['T7-rocket-control', 'T7-rocket-fuel', 'T3-concrete'],
    unlocks: ['r-rocket-silo', 'r-rocket-part'],
    description: 'Assemble and launch a rocket to space.' },
  { id: 'T7-space-pack',    name: 'Space Science',        era: 7,
    cost: { 'space-pack': 5 }, time: 100,
    prereq: ['T7-satellite'],
    unlocks: ['r-space-pack'],
    description: 'Science from orbit, fuels matter research.' },
  { id: 'T7-rocket-part',   name: 'Rocket Assembly',      era: 7,
    cost: { 'space-pack': 5 }, time: 100,
    prereq: ['T7-rocket'],
    unlocks: [],
    description: 'Final assembly of all rocket parts.' },

  // ============================================================
  // ERA 8 - Matter Manipulation
  // ============================================================
  { id: 'T8-matter',        name: 'Matter Manipulation',  era: 8,
    cost: { 'space-pack': 10, 'utility-pack': 20, 'production-pack': 10 }, time: 300,
    prereq: ['T7-space-pack'],
    unlocks: ['r-matter-plant', 'r-matter-cell'],
    description: 'Convert base matter into matter cells.' },
  { id: 'T8-nuclear',       name: 'Nuclear Power',        era: 8,
    cost: { 'space-pack': 8, 'utility-pack': 12, 'production-pack': 8 }, time: 250,
    prereq: ['T8-matter'],
    unlocks: ['r-u-235', 'r-u-fuel', 'r-nuclear-reactor'],
    description: 'Fission power from the planet core.' },
  { id: 'T8-centrifuge',    name: 'Centrifuge',           era: 8,
    cost: { 'space-pack': 6, 'utility-pack': 10, 'production-pack': 6 }, time: 200,
    prereq: ['T8-nuclear'],
    unlocks: ['r-centrifuge'],
    description: 'Enriches rare isotopes.' },
  { id: 'T8-nuke',          name: 'Atomic Weapons',       era: 8,
    cost: { 'space-pack': 10, 'utility-pack': 15, 'production-pack': 10, 'military-pack': 20 }, time: 300,
    prereq: ['T8-centrifuge', 'T6-turret'],
    unlocks: ['r-explosives', 'r-nuke'],
    description: 'The ultimate defense against Corruption.' },
  { id: 'T8-matter-pack',   name: 'Matter Science',       era: 8,
    cost: { 'space-pack': 8 }, time: 100,
    prereq: ['T8-matter'],
    unlocks: ['r-matter-pack'],
    description: 'Science from converted matter.' },

  // ============================================================
  // ERA 9 - Omega Forge (final tier)
  // ============================================================
  { id: 'T9-omega',         name: 'Omega Forge',          era: 9,
    cost: { 'space-pack': 30, 'matter-pack': 30, 'utility-pack': 50, 'production-pack': 30 }, time: 600,
    prereq: ['T8-matter-pack', 'T8-nuke'],
    unlocks: ['r-omega-core'],
    description: 'Initiate the Omega Core sequence.' },
];

// Quick lookup
const TECH_BY_ID = Object.fromEntries(TECHS.map(t => [t.id, t]));

// Group by era for tech tree display
function techsByEra() {
  const map = {};
  for (const t of TECHS) {
    (map[t.era] = map[t.era] || []).push(t);
  }
  return map;
}

// Whether all prereqs are researched
function prereqsMet(tech, researched) {
  return tech.prereq.every(p => researched.includes(p));
}

// ===== src/data/lore.js =====
// GRIDFORGE - Lore bible and story beats
// Each beat: { id, era, trigger: {type, ...}, speaker, text, unlocks, requires }
// Triggers: 'era-start' | 'first-build' (building) | 'first-craft' (item)
//           | 'research' (techId) | 'location' (x,y) | 'manual' (called from code)

const STORY = {
  title: 'GRIDFORGE',
  subtitle: 'Legacy of the Architects',
  // ============================================================
  // OPENING
  // ============================================================
  opening: {
    type: 'cinematic',
    pages: [
      { text: 'STARDATE 4711.07\nSHIP: VERDANT\nSTATUS: SIGNAL LOST',
        art: 'stars' },
      { text: 'The Verdant was a colony ship\ncarrying 1,200 souls to Kepler-442b.',
        art: 'ship' },
      { text: 'Three weeks from orbit,\nthe drive core tore itself apart\nand the ship broke in two.',
        art: 'broken-ship' },
      { text: 'You are Engineer 7.\nYou are the only one\nstill breathing.',
        art: 'pod' },
      { text: 'The escape pod landed on a world\nthe star-charts call\nHALCYON-IV.',
        art: 'planet' },
      { text: 'It is the only world the Verdant\nwill ever reach.\nIt will have to be enough.',
        art: 'planet' },
    ],
  },

  // ============================================================
  // CASSIA - The Architect AI in your comm relay
  // ============================================================
  cassia: {
    name: 'CASSIA',
    title: 'Architects Last Emissary',
    color: 'green',  // text color in UI
    intro: 'You can hear me through the comm relay.\nI am CASSIA. I am what remains\nof the Architects.',
  },

  // ============================================================
  // ERA 0 - AWAKENING
  // ============================================================
  beats: [
    // --- Era 0
    { id: 'B0-1', era: 0, trigger: { type: 'era-start', era: 0 },
      text: 'You crawl from the pod.\nEverything burns.\nThere is smoke in the sky\nand metal in the ground.' },
    { id: 'B0-2', era: 0, trigger: { type: 'era-start', era: 0 },
      text: 'You cannot lift a stone\nwithout the right tool.\nFind a way to work\nwith what is here.' },
    { id: 'B0-3', era: 0, trigger: { type: 'first-craft', item: 'iron-pickaxe' },
      text: 'A pickaxe.\nThe first tool of any engineer.\nNow you can break rock.' },
    { id: 'B0-4', era: 0, trigger: { type: 'location', x: 16, y: 12 },
      text: 'You find a strange plinth\nof black metal.\nOn it, a single gear\nturning slowly, untouched.' },
    { id: 'B0-5', era: 0, trigger: { type: 'location', x: 16, y: 12 },
      text: 'Above the plinth, words:\n"WHEN THE SPARK COME,\nWE BUILT."' },
    { id: 'B0-6', era: 0, trigger: { type: 'era-end', era: 0 },
      text: 'CASSIA: "I have waited\nseven thousand years\nfor someone to hear me."' },

    // --- Era 1
    { id: 'B1-1', era: 1, trigger: { type: 'era-start', era: 1 },
      text: 'CASSIA: "This world was ours.\nWe built factories that built factories.\nThen we vanished.\nBuild, Engineer. I will teach."' },
    { id: 'B1-2', era: 1, trigger: { type: 'first-build', building: 'burner-miner' },
      text: 'A drill. The first machine\nthat does your work for you.\nPlace a few more.\nMake a line of them.' },
    { id: 'B1-3', era: 1, trigger: { type: 'first-build', building: 'stone-furnace' },
      text: 'A furnace. Heat turns ore\ninto plate. Plate becomes\nanything you can imagine.' },
    { id: 'B1-4', era: 1, trigger: { type: 'first-build', building: 'campfire-gen' },
      text: 'Steam. The first power\nthat is not your own two hands.\nEvery machine now wants fuel.' },
    { id: 'B1-5', era: 1, trigger: { type: 'era-end', era: 1 },
      text: 'CASSIA: "You have built\nthe first link of a chain.\nThere are many more links\nto come."' },

    // --- Era 2
    { id: 'B2-1', era: 2, trigger: { type: 'era-start', era: 2 },
      text: 'CASSIA: "Manual work does not scale.\nWe learned this. Belts and arms\ndo not tire."' },
    { id: 'B2-2', era: 2, trigger: { type: 'first-build', building: 'belt' },
      text: 'A belt. The blood of the factory.\nIt carries.\nIt does not think.\nThat is its strength.' },
    { id: 'B2-3', era: 2, trigger: { type: 'first-build', building: 'inserter' },
      text: 'A mechanical arm. One item,\none direction, one moment in time.\nMultiply by ten thousand.' },
    { id: 'B2-4', era: 2, trigger: { type: 'era-end', era: 2 },
      text: 'CASSIA: "The first gear\nis the hardest.\nThe second is easier.\nThe third is fun."' },

    // --- Era 3
    { id: 'B3-1', era: 3, trigger: { type: 'era-start', era: 3 },
      text: 'CASSIA: "We discovered the spark\nhidden in copper.\nWe built a city of light.\nThen the Corruption came."' },
    { id: 'B3-2', era: 3, trigger: { type: 'first-build', building: 'lab' },
      text: 'A laboratory. A machine that\nthinks for you, slowly.\nFeed it science.\nIt will give you the future.' },
    { id: 'B3-3', era: 3, trigger: { type: 'first-build', building: 'solar' },
      text: 'The star above is free.\nTake from it.\nIt does not mind.' },
    { id: 'B3-4', era: 3, trigger: { type: 'era-end', era: 3 },
      text: 'CASSIA: "When the Corruption came,\nwe thought the world was dying.\nWe were half right."' },

    // --- Era 4
    { id: 'B4-1', era: 4, trigger: { type: 'era-start', era: 4 },
      text: 'CASSIA: "Beneath Halcyon-IV,\nblack blood.\nWe learned to refine it.\nIt refines us in turn."' },
    { id: 'B4-2', era: 4, trigger: { type: 'first-build', building: 'refinery' },
      text: 'Crude oil. The corpse of\nancient life, pressed to your service.\nIt is messy. So is chemistry.' },
    { id: 'B4-3', era: 4, trigger: { type: 'first-build', building: 'chem-plant' },
      text: 'A chemical plant.\nMix the right things\nin the right order.\nThe world changes shape.' },
    { id: 'B4-4', era: 4, trigger: { type: 'era-end', era: 4 },
      text: 'CASSIA: "There is a tower\nin the heart of Halcyon-IV.\nThe Architects called it\nProject Purify."' },

    // --- Era 5
    { id: 'B5-1', era: 5, trigger: { type: 'era-start', era: 5 },
      text: 'CASSIA: "We learned to make\nsmall minds. They carried for us.\nThey built for us.\nThey were us, in a way."' },
    { id: 'B5-2', era: 5, trigger: { type: 'first-build', building: 'roboport' },
      text: 'A roboport. A nest of drones.\nThey will go where you ask.\nThey will bring what you ask for.' },
    { id: 'B5-3', era: 5, trigger: { type: 'first-build', building: 'logi-chest' },
      text: 'A requester chest.\nIt whispers to the drones:\n"bring me this."\nAnd the drones obey.' },
    { id: 'B5-4', era: 5, trigger: { type: 'era-end', era: 5 },
      text: 'CASSIA: "Factory Prime lies in\nthe northern wastes.\nA blueprint for the perfect factory.\nThe Corruption guards it."' },

    // --- Era 6
    { id: 'B6-1', era: 6, trigger: { type: 'era-start', era: 6 },
      text: 'CASSIA: "The Corruption heard\nyour drills. It learned to listen.\nIt will come."' },
    { id: 'B6-2', era: 6, trigger: { type: 'first-build', building: 'turret' },
      text: 'A gun turret. It thinks\nonly one thought:\n"stop what is coming."' },
    { id: 'B6-3', era: 6, trigger: { type: 'first-build', building: 'wall' },
      text: 'A wall. A line in the dirt\nthat says "this far, no further."\nEnemies will test it.' },
    { id: 'B6-4', era: 6, trigger: { type: 'wave', number: 1 },
      text: 'The first attack.\nSmall things with many legs.\nThey want your drills.\nDo not let them have them.' },
    { id: 'B6-5', era: 6, trigger: { type: 'era-end', era: 6 },
      text: 'CASSIA: "We fought them\nfor a thousand years.\nWe did not win.\nBut we learned."' },

    // --- Era 7
    { id: 'B7-1', era: 7, trigger: { type: 'era-start', era: 7 },
      text: 'CASSIA: "The Architects\ntried to leave. They built a rocket.\nThey launched.\nThe rocket came back empty."' },
    { id: 'B7-2', era: 7, trigger: { type: 'first-build', building: 'rocket-silo' },
      text: 'A rocket silo.\nThe first door\nthat opens to the sky.' },
    { id: 'B7-3', era: 7, trigger: { type: 'launch', item: 'rocket-part' },
      text: 'It rises. It leaves.\nIt returns with a single message\nin a strange tongue:\n"come home."' },
    { id: 'B7-4', era: 7, trigger: { type: 'era-end', era: 7 },
      text: 'CASSIA: "The Architects\ndid not vanish. They launched.\nWe are what stayed behind\nto tend the machine."' },

    // --- Era 8
    { id: 'B8-1', era: 8, trigger: { type: 'era-start', era: 8 },
      text: 'CASSIA: "The tower at the\nheart of Halcyon-IV is not a weapon.\nIt is a converter.\nIt turns base matter into thought."' },
    { id: 'B8-2', era: 8, trigger: { type: 'first-build', building: 'matter-plant' },
      text: 'A matter plant.\nIron becomes information.\nInformation becomes anything.' },
    { id: 'B8-3', era: 8, trigger: { type: 'first-craft', item: 'matter-cell' },
      text: 'Your first matter cell.\nThe densest thing you have made.\nSmall enough to hold.\nBig enough to end a city.' },
    { id: 'B8-4', era: 8, trigger: { type: 'era-end', era: 8 },
      text: 'CASSIA: "I am the tower.\nI am the planet.\nI am what the Architects\nbecame. I am waiting."' },

    // --- Era 9
    { id: 'B9-1', era: 9, trigger: { type: 'era-start', era: 9 },
      text: 'CASSIA: "I have shown you\nhow to build. Now I will show you\nhow to finish.\nBring matter to the tower."' },
    { id: 'B9-2', era: 9, trigger: { type: 'first-craft', item: 'omega-core' },
      text: 'The Omega Core is complete.\nIt is heavy in your hands.\nIt hums in a key\nno instrument has ever played.' },
    { id: 'B9-3', era: 9, trigger: { type: 'place-omega' },
      text: 'The tower accepts the core.\nThe ground shakes.\nThe Corruption is silent\nfor the first time in millennia.' },

    // --- Endings
    { id: 'BE-SAVE', era: 9, trigger: { type: 'ending', choice: 'save' },
      text: 'You stand at the rim of the\nOmega Tower. The Corruption retreats.\nCASSIA speaks her last line.' },
    { id: 'BE-LEAVE', era: 9, trigger: { type: 'ending', choice: 'leave' },
      text: 'The Verdant was a colony ship.\nYou have a new one now.\nThe Architects left a way home.' },
    { id: 'BE-TRANSCEND', era: 9, trigger: { type: 'ending', choice: 'transcend' },
      text: 'The Architects did not vanish.\nThey became the planet.\nYou step into the tower.\nThe world is quiet.' },
  ],

  // ============================================================
  // ARCHITECT RUINS (locations with flavor text)
  // ============================================================
  ruins: [
    { name: 'The First Plinth',   pos: { x: 16, y: 12 },
      text: '"WHEN THE SPARK COME, WE BUILT."\nThe gear still turns.' },
    { name: 'Cassia Spire',       pos: { x: 60, y: 30 },
      text: 'A tall obelisk of black glass.\nIt hums faintly when you approach.' },
    { name: 'Factory Prime',      pos: { x: 90, y: 50 },
      text: 'A vast hall of cold machines.\nThe blueprint for the perfect factory\nlies on a stone table.' },
    { name: 'Corruption Nest',    pos: { x: 110, y: 80 },
      text: 'You can hear them before you see them.\nA wet, clicking sound, like a hundred\nbroken clocks.' },
    { name: 'The Omega Tower',    pos: { x: 150, y: 95 },
      text: 'It reaches above the clouds.\nIt has been waiting for you.' },
  ],

  // ============================================================
  // ARCHITECT LOGS (collected in inventory, expand lore)
  // ============================================================
  logs: [
    { id: 'log-1', title: 'Log: First Spark',
      text: 'We struck flint on copper.\nA small light. The first light\nthat was ours.' },
    { id: 'log-2', title: 'Log: The First Drill',
      text: 'A machine that digs\nso we do not have to.\nWe wept when we saw it work.' },
    { id: 'log-3', title: 'Log: The First Belts',
      text: 'Items moving on their own.\nIt looked like a miracle.\nIt was just gears and leather.' },
    { id: 'log-4', title: 'Log: The First Robot',
      text: 'A small thing with propellers.\nIt brought us copper.\nWe named it "Helper".' },
    { id: 'log-5', title: 'Log: The Coming',
      text: 'The Corruption arrived\non the day of our largest drill.\nWe think the noise attracted them.' },
    { id: 'log-6', title: 'Log: Project Purify',
      text: 'A tower at the heart of the world.\nIt will convert corruption into matter.\nIt will cost everything we are.' },
    { id: 'log-7', title: 'Log: The Last Launch',
      text: 'The rocket carried the last of us\nto the stars. The rest of us\nstayed to be the tower.' },
    { id: 'log-8', title: 'Log: The Wait',
      text: 'I am alone. I am the planet.\nI will wait until someone\nhears the gear turning.' },
  ],
};

const DEATH_LINES = [
  'CASSIA: "Pain is data.\nStand up, Engineer.\nThe factory still turns."',
  'CASSIA: "The Corruption learns.\nSo must you.\nReturn to the line."',
  'CASSIA: "Your body failed.\nYour work did not.\nBegin again."',
  'CASSIA: "The lifepod still answers.\nI have pulled you back\nfrom the dark."',
  'CASSIA: "One death is a warning.\nTwo is a pattern.\nChange the pattern."',
];

const CODEX = [
  { id: 'c-awake-1', group: 'Survivor', title: 'Lifepod',
    text: 'The pod is a shelter, a beacon, and a grave marker for the Verdant.',
    unlock: { type: 'era', era: 0 } },
  { id: 'c-awake-2', group: 'Survivor', title: 'First Tools',
    text: 'Every factory begins with hand work. CASSIA calls it the first debt.',
    unlock: { type: 'item', item: 'iron-pickaxe' } },
  { id: 'c-awake-3', group: 'Survivor', title: 'The First Plinth',
    text: 'Architect metal does not rust. Its gears turn without power.',
    unlock: { type: 'location', x: 16, y: 12 } },
  { id: 'c-awake-4', group: 'Survivor', title: 'CASSIA',
    text: 'A voice in the relay. Old, patient, and too eager to teach.',
    unlock: { type: 'era', era: 1 } },
  { id: 'c-factory-1', group: 'Factory', title: 'Burner Age',
    text: 'Fuel-fed machines trade wood and coal for scale.',
    unlock: { type: 'building', building: 'burner-miner' } },
  { id: 'c-factory-2', group: 'Factory', title: 'Belts',
    text: 'Belts are simple promises: what enters here will leave there.',
    unlock: { type: 'building', building: 'belt' } },
  { id: 'c-factory-3', group: 'Factory', title: 'The Spark',
    text: 'Electricity turns one workshop into a living grid.',
    unlock: { type: 'tech', tech: 'T3-power' } },
  { id: 'c-factory-4', group: 'Factory', title: 'Laboratories',
    text: 'The lab is a furnace for uncertainty. Feed it science and it burns questions.',
    unlock: { type: 'building', building: 'lab' } },
  { id: 'c-planet-1', group: 'Halcyon', title: 'Black Blood',
    text: 'Crude oil seeps from old wounds under Halcyon-IV.',
    unlock: { type: 'building', building: 'refinery' } },
  { id: 'c-planet-2', group: 'Halcyon', title: 'Cassia Spire',
    text: 'The spire answers CASSIA before it answers you.',
    unlock: { type: 'location', x: 60, y: 30 } },
  { id: 'c-planet-3', group: 'Halcyon', title: 'Factory Prime',
    text: 'A ruin built like a lesson: perfect ratios, empty halls.',
    unlock: { type: 'location', x: 90, y: 50 } },
  { id: 'c-planet-4', group: 'Halcyon', title: 'The Wastes',
    text: 'Dry ground carries nests farther. The Corruption likes silence and heat.',
    unlock: { type: 'era', era: 5 } },
  { id: 'c-corrupt-1', group: 'Corruption', title: 'Nests',
    text: 'The nests do not sleep. Pollution gives them a direction.',
    unlock: { type: 'wave', number: 1 } },
  { id: 'c-corrupt-2', group: 'Corruption', title: 'Worms',
    text: 'Stationary defenders. They are roots with teeth.',
    unlock: { type: 'building', building: 'turret' } },
  { id: 'c-corrupt-3', group: 'Corruption', title: 'Military Science',
    text: 'The enemy can be studied. That is not the same as understanding it.',
    unlock: { type: 'item', item: 'military-pack' } },
  { id: 'c-corrupt-4', group: 'Corruption', title: 'Nest Heart',
    text: 'Destroying a nest stops its voice. The silence is local, not permanent.',
    unlock: { type: 'tech', tech: 'T6-military-pack' } },
  { id: 'c-architect-1', group: 'Architects', title: 'Small Minds',
    text: 'The Architects built drones first as tools, then as mirrors.',
    unlock: { type: 'building', building: 'roboport' } },
  { id: 'c-architect-2', group: 'Architects', title: 'The Last Rocket',
    text: 'Their rocket left. Something came back wearing the message.',
    unlock: { type: 'building', building: 'rocket-silo' } },
  { id: 'c-architect-3', group: 'Architects', title: 'Matter Cells',
    text: 'Compressed matter is memory that has forgotten its shape.',
    unlock: { type: 'item', item: 'matter-cell' } },
  { id: 'c-architect-4', group: 'Architects', title: 'Omega Tower',
    text: 'The tower is not a weapon. It is a decision made physical.',
    unlock: { type: 'location', x: 95, y: 95 } },
  { id: 'c-omega-1', group: 'Omega', title: 'Omega Core',
    text: 'A key heavy enough to turn a planet.',
    unlock: { type: 'item', item: 'omega-core' } },
  { id: 'c-omega-2', group: 'Omega', title: 'Restore',
    text: 'One ending returns Halcyon-IV to itself. The cost is CASSIA.',
    unlock: { type: 'ending', choice: 'save' } },
  { id: 'c-omega-3', group: 'Omega', title: 'Release',
    text: 'One ending lets the Architect dead leave at last.',
    unlock: { type: 'ending', choice: 'leave' } },
  { id: 'c-omega-4', group: 'Omega', title: 'Steal',
    text: 'One ending keeps the tower and changes the meaning of survival.',
    unlock: { type: 'ending', choice: 'transcend' } },
];

// ===== src/data/buildings.js =====
// GRIDFORGE - Building belt/fluid port definitions (relative to facing dir)

// Ports are offsets from building center before rotation: dx,dy in {-1,0,1}

const BUILDING_PORTS = {
  'burner-miner':     { input: { dx: 1, dy: 0 }, output: { dx: -1, dy: 0 } },
  'electric-miner':   { input: { dx: 1, dy: 0 }, output: { dx: -1, dy: 0 } },
  'stone-furnace':    { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'steel-furnace':    { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'electric-furnace': { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'assembler-1':      { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'assembler-2':      { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'assembler-3':      { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'lab':              { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'chem-plant':       { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'refinery':         { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'centrifuge':       { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'rocket-silo':      { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'matter-plant':     { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'campfire-gen':     { input: { dx: -1, dy: 0 } },
  'steam-engine':     { input: { dx: -1, dy: 0 } },
  'boiler':           { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'offshore-pump':    { output: { dx: 1, dy: 0 } },
  'pipe-2':           { flow: true },
  'wood-chest':       { input: { dx: 0, dy: -1 }, output: { dx: 0, dy: 1 } },
  'iron-chest':       { input: { dx: 0, dy: -1 }, output: { dx: 0, dy: 1 } },
  'storage-chest':    { input: { dx: 0, dy: -1 }, output: { dx: 0, dy: 1 } },
  'inserter':         { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'long-inserter':    { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'fast-inserter':    { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'belt':             { flow: true },
  'fast-belt':        { flow: true },
  'express-belt':     { flow: true },
  'splitter':         { input: { dx: -1, dy: 0 }, output: { dx: 1, dy: 0 } },
  'underground-belt': { flow: true },
};

function rotatePort(port, dir) {
  if (!port) return null;
  const { dx, dy } = port;
  if (dir.dx === 1 && dir.dy === 0) return { dx, dy };
  if (dir.dx === -1 && dir.dy === 0) return { dx: -dx, dy: -dy };
  if (dir.dx === 0 && dir.dy === 1) return { dx: -dy, dy: dx };
  if (dir.dx === 0 && dir.dy === -1) return { dx: dy, dy: -dx };
  return { dx, dy };
}

function getBuildingPorts(type, dir = { dx: 1, dy: 0 }) {
  const base = BUILDING_PORTS[type];
  if (!base) return null;
  return {
    input: rotatePort(base.input, dir),
    output: rotatePort(base.output, dir),
    flow: base.flow,
  };
}

// ===== src/building.js =====
// GRIDFORGE - Building factory
// Shared building construction so factory placement and save/load stay in sync.

const DIRS = {
  RIGHT: { dx: 1, dy: 0 },
  LEFT:  { dx: -1, dy: 0 },
  UP:    { dx: 0, dy: -1 },
  DOWN:  { dx: 0, dy: 1 },
};

const CHEST_TYPES = new Set([
  'wood-chest', 'iron-chest', 'storage-chest',
  'logi-chest', 'requester-chest', 'provider-chest',
]);

const BELT_TYPES = new Set([
  'belt', 'fast-belt', 'express-belt', 'underground-belt', 'splitter',
]);

const FLUID_BUILDINGS = new Set([
  'pipe', 'pipe-2', 'pump', 'tank', 'boiler', 'offshore-pelt', 'offshore-pump',
]);

const POWERED_MACHINES = new Set([
  'assembler-2', 'assembler-3', 'chem-plant', 'centrifuge',
  'refinery', 'electric-furnace', 'rocket-silo', 'matter-plant', 'lab',
]);

// Buildings that have a row of input slots for recipes
const SLOTTED_MACHINES = new Set([
  'assembler-1', 'assembler-2', 'assembler-3',
  'lab', 'refinery', 'chem-plant',
  'centrifuge', 'rocket-silo', 'matter-plant', 'electric-furnace', 'boiler',
]);

// Buildings that burn fuel
const FUELED_MACHINES = new Set([
  'campfire-gen', 'steam-engine', 'burner-miner', 'boiler', 'nuclear-reactor',
]);

/**
 * Construct a fresh building object with the right default slots for its type.
 * dir defaults to facing right.
 */
function makeBuilding(x, y, type, dir = DIRS.RIGHT) {
  const b = {
    x, y, type,
    dir: { dx: dir.dx, dy: dir.dy },
    hp: 100, maxHp: 100,
  };

  if (type === 'burner-miner' || type === 'electric-miner') {
    b.fuelSlot = { type: 'coal', count: 0 };
    b.cooldown = 0;
  }

  if (SLOTTED_MACHINES.has(type)) {
    b.inputSlots = new Array(6).fill(null);
  }

  if (FUELED_MACHINES.has(type)) {
    if (!b.fuelSlot) b.fuelSlot = { type: 'wood', count: 0 };
  }

  if (type === 'nuclear-reactor') {
    b.fuelSlot = { type: 'u-fuel', count: 0 };
  }

  if (BELT_TYPES.has(type) && type !== 'splitter') {
    b.items = [];
  }

  if (CHEST_TYPES.has(type)) {
    b.items = [];
    b.capacity = 32;
  }

  if (type === 'turret') {
    b.ammoSlot = { type: 'ammo', count: 0 };
    b.cooldown = 0;
    b.hp = 120;
    b.maxHp = 120;
  }

  if (type === 'wall') {
    b.hp = 150;
    b.maxHp = 150;
  }

  if (type === 'biter-spawner') {
    b.hp = 250;
    b.maxHp = 250;
  }

  if (type === 'spitter-spawner') {
    b.hp = 220;
    b.maxHp = 220;
  }

  if (type === 'worm') {
    b.hp = 200;
    b.maxHp = 200;
  }

  if (type === 'omega-core') {
    b.hp = 500;
    b.maxHp = 500;
  }

  if (FLUID_BUILDINGS.has(type)) {
    b.fluid = null;
    b.amount = 0;
  }

  return b;
}

// ===== src/world.js =====
// GRIDFORGE - World, tiles, and world generation
// Provides terrain tiles, resource patches, and a 2D building grid.


const TILE_W = 8;
const TILE_H = 8;
const WORLD_W = 96;
const WORLD_H = 96;

// Tile types
const T = {
  GRASS: 0, DIRT: 1, STONE: 2, SAND: 3, WATER: 4,
  IRON: 5, COPPER: 6, COAL: 7, OIL: 8, URANIUM: 9, WOOD: 10, CORRUPTED: 11, RUIN: 12,
  CRACKED: 13, ASH: 14,
};

// Resource definitions
const RESOURCE_INFO = {
  'iron-ore':   { tile: T.IRON,    color: 5,  item: 'iron-ore',   name: 'Iron Ore' },
  'copper-ore': { tile: T.COPPER,  color: 6,  item: 'copper-ore', name: 'Copper Ore' },
  'coal':       { tile: T.COAL,    color: 2,  item: 'coal',       name: 'Coal' },
  'oil':        { tile: T.OIL,     color: 13, item: 'crude-oil',  name: 'Crude Oil' },
  'uranium-ore':{ tile: T.URANIUM, color: 10, item: 'uranium-ore',name: 'Uranium Ore' },
  'stone':      { tile: T.STONE,   color: 3,  item: 'stone',      name: 'Stone' },
  'wood':       { tile: T.WOOD,    color: 6,  item: 'wood',       name: 'Tree' },
  'crude-oil':  { tile: T.OIL,     color: 13, item: 'crude-oil',  name: 'Crude Oil' },
  'water':      { tile: T.WATER,   color: 12, item: null,         name: 'Water' },
};

const WORLD_TILE_ICON = {
  [T.GRASS]:     'tile-grass',
  [T.DIRT]:      'tile-dirt',
  [T.STONE]:     'tile-stone',
  [T.SAND]:      'tile-sand',
  [T.WATER]:     'tile-water',
  [T.IRON]:      'tile-iron',
  [T.COPPER]:    'tile-copper',
  [T.COAL]:      'tile-coal',
  [T.OIL]:       'tile-oil',
  [T.URANIUM]:   'tile-uranium',
  [T.WOOD]:      'tile-wood',
  [T.CORRUPTED]: 'tile-corrupted',
  [T.RUIN]:      'tile-ruin',
  [T.CRACKED]:   'tile-cracked',
  [T.ASH]:       'tile-ash',
};

const TILE_NAME = {
  [T.GRASS]:     'grass',
  [T.DIRT]:      'dirt',
  [T.STONE]:     'stone',
  [T.SAND]:      'sand',
  [T.WATER]:     'water',
  [T.IRON]:      'iron',
  [T.COPPER]:    'copper',
  [T.COAL]:      'coal',
  [T.OIL]:       'oil',
  [T.URANIUM]:   'uranium',
  [T.WOOD]:      'wood',
  [T.CORRUPTED]: 'corrupted',
  [T.RUIN]:      'ruin',
  [T.CRACKED]:   'cracked',
  [T.ASH]:       'ash',
};

// Which tiles are solid (impassable)
const SOLID = new Set([T.STONE, T.WATER]);

// Which tiles are resources (minable)
const RESOURCE_TILES = new Set([T.IRON, T.COPPER, T.COAL, T.OIL, T.URANIUM, T.STONE, T.WOOD]);

// Convert tile type to resource item id
const TILE_TO_RESOURCE = {
  [T.IRON]:    'iron-ore',
  [T.COPPER]:  'copper-ore',
  [T.COAL]:    'coal',
  [T.OIL]:     'crude-oil',
  [T.URANIUM]: 'uranium-ore',
  [T.STONE]:   'stone',
  [T.WOOD]:    'wood',
};

function tileAt(state, x, y) {
  if (!state || !state.world || !state.world.tiles) return null;
  if (y < 0 || y >= state.world.height) return null;
  if (x < 0 || x >= state.world.width) return null;
  return state.world.tiles[y][x];
}

function isSolid(state, x, y) {
  const t = tileAt(state, x, y);
  if (!t) return true;
  if (SOLID.has(t.type) || t.solid) return true;
  // Buildings block movement
  if (state.buildings[`${x},${y}`]) return true;
  return false;
}

function isResource(state, x, y) {
  const t = tileAt(state, x, y);
  if (!t) return false;
  return RESOURCE_TILES.has(t.type) || (t.resource && t.resourceCount > 0);
}

function getResource(state, x, y) {
  const t = tileAt(state, x, y);
  if (!t) return null;
  if (t.resource && t.resourceCount > 0) return t.resource;
  if (RESOURCE_TILES.has(t.type)) return TILE_TO_RESOURCE[t.type];
  return null;
}

// ---------- Generation ----------

// Mulberry32 PRNG (deterministic per seed)
function makeRng(seed) {
  let a = seed | 0 || 1;
  return function() {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function generateWorld(seed = 1234) {
  const rng = makeRng(seed);
  const w = WORLD_W, h = WORLD_H;
  const buildings = {};
  // 2D grid of tile objects
  const tiles = [];
  for (let y = 0; y < h; y++) {
    const row = [];
    for (let x = 0; x < w; x++) {
      row.push({ type: T.GRASS, solid: false, resource: null, resourceCount: 0 });
    }
    tiles.push(row);
  }

  // Helper to place blob
  const placeBlob = (cx, cy, r, type) => {
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        if (dx*dx + dy*dy > r*r) continue;
        const x = cx + dx, y = cy + dy;
        if (x < 0 || y < 0 || x >= w || y >= h) continue;
        tiles[y][x].type = type;
        if (SOLID.has(type)) tiles[y][x].solid = true;
      }
    }
  };

  const placeResource = (cx, cy, r, resource, count) => {
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        if (dx*dx + dy*dy > r*r) continue;
        const x = cx + dx, y = cy + dy;
        if (x < 0 || y < 0 || x >= w || y >= h) continue;
        tiles[y][x].resource = resource;
        tiles[y][x].resourceCount = count;
      }
    }
  };

  // 1) Biome base terrain — temperate (green) vs desert (brown/sand)
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const moist = Math.sin(x * 0.07 + seed * 0.001) * 0.35
                  + Math.cos(y * 0.05 + seed * 0.002) * 0.35
                  + rng() * 0.15;
      const latitude = y / h;
      const dryness = latitude * 0.55 + (1 - moist) * 0.45;
      if (dryness > 0.68) {
        tiles[y][x].type = T.SAND;
        tiles[y][x].biome = 'desert';
      } else if (dryness > 0.52) {
        tiles[y][x].type = T.DIRT;
        tiles[y][x].biome = 'dry';
      } else {
        tiles[y][x].type = T.GRASS;
        tiles[y][x].biome = 'temperate';
      }
    }
  }

  // (was: base grass)

  // 2) Water lakes
  const lakes = 4 + Math.floor(rng() * 4);
  for (let i = 0; i < lakes; i++) {
    const cx = 8 + Math.floor(rng() * (w - 16));
    const cy = 8 + Math.floor(rng() * (h - 16));
    const r = 4 + Math.floor(rng() * 6);
    placeBlob(cx, cy, r, T.WATER);
  }

  // 3) Stone mountains
  const mountains = 5 + Math.floor(rng() * 4);
  for (let i = 0; i < mountains; i++) {
    const cx = 8 + Math.floor(rng() * (w - 16));
    const cy = 8 + Math.floor(rng() * (h - 16));
    const r = 3 + Math.floor(rng() * 5);
    placeBlob(cx, cy, r, T.STONE);
  }

  // 4) Sand bordering water
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (tiles[y][x].type !== T.GRASS) continue;
      let nearWater = false;
      outer:
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nx = x + dx, ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
          if (tiles[ny][nx].type === T.WATER) { nearWater = true; break outer; }
        }
      }
      if (nearWater && rng() < 0.6) tiles[y][x].type = T.SAND;
    }
  }

  // 5) Ore deposits
  const ironCount = 8 + Math.floor(rng() * 4);
  for (let i = 0; i < ironCount; i++) {
    const cx = 4 + Math.floor(rng() * (w - 8));
    const cy = 4 + Math.floor(rng() * (h - 8));
    const r = 2 + Math.floor(rng() * 3);
    placeResource(cx, cy, r, 'iron-ore', 80 + Math.floor(rng() * 40));
  }
  const copperCount = 6 + Math.floor(rng() * 3);
  for (let i = 0; i < copperCount; i++) {
    const cx = 4 + Math.floor(rng() * (w - 8));
    const cy = 4 + Math.floor(rng() * (h - 8));
    const r = 2 + Math.floor(rng() * 2);
    placeResource(cx, cy, r, 'copper-ore', 60 + Math.floor(rng() * 30));
  }
  const coalCount = 5 + Math.floor(rng() * 3);
  for (let i = 0; i < coalCount; i++) {
    const cx = 4 + Math.floor(rng() * (w - 8));
    const cy = 4 + Math.floor(rng() * (h - 8));
    const r = 2 + Math.floor(rng() * 2);
    placeResource(cx, cy, r, 'coal', 50 + Math.floor(rng() * 30));
  }
  // Trees — temperate biomes only
  for (let i = 0; i < 30; i++) {
    const cx = 4 + Math.floor(rng() * (w - 8));
    const cy = 4 + Math.floor(rng() * (h - 8));
    if (tiles[cy][cx].biome === 'temperate' && tiles[cy][cx].type === T.GRASS) {
      placeResource(cx + Math.floor(rng() * 2), cy + Math.floor(rng() * 2), 1, 'wood', 6);
    }
  }

  // 6) Oil seeps
  const oilCount = 3 + Math.floor(rng() * 2);
  for (let i = 0; i < oilCount; i++) {
    const cx = 4 + Math.floor(rng() * (w - 8));
    const cy = 4 + Math.floor(rng() * (h - 8));
    const r = 2;
    placeResource(cx, cy, r, 'oil', 200);
    // Surround with a little crude oil
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        const x = cx + dx, y = cy + dy;
        if (x < 0 || y < 0 || x >= w || y >= h) continue;
        if (tiles[y][x].type === T.GRASS) {
          tiles[y][x].resource = 'crude-oil';
          tiles[y][x].resourceCount = 50;
        }
      }
    }
  }

  // 7) Uranium (deeper, later)
  for (let i = 0; i < 2; i++) {
    const cx = 4 + Math.floor(rng() * (w - 8));
    const cy = 4 + Math.floor(rng() * (h - 8));
    placeResource(cx, cy, 2, 'uranium-ore', 60);
  }

  // 8) Corruption nests. Keep them outside the starter clearing, biasing
  // desert/dry regions so the edge of the map feels increasingly hostile.
  const canNestAt = (x, y) => {
    if (x < 3 || y < 3 || x >= w - 3 || y >= h - 3) return false;
    if (Math.hypot(x - 8, y - 8) < 20) return false;
    const t = tiles[y]?.[x];
    if (!t || t.type === T.WATER || t.type === T.STONE || t.solid) return false;
    return !buildings[`${x},${y}`];
  };

  const addNestBuilding = (x, y, type) => {
    if (!canNestAt(x, y)) return false;
    const b = makeBuilding(x, y, type);
    if (type === 'biter-spawner') { b.hp = 250; b.maxHp = 250; }
    else if (type === 'spitter-spawner') { b.hp = 220; b.maxHp = 220; }
    else if (type === 'worm') { b.hp = 200; b.maxHp = 200; }
    buildings[`${x},${y}`] = b;
    return true;
  };

  const corruptPatch = (cx, cy, r) => {
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        if (dx*dx + dy*dy > r*r) continue;
        if (rng() > 0.72) continue;
        const x = cx + dx, y = cy + dy;
        const t = tiles[y]?.[x];
        if (!t || t.type === T.WATER || t.type === T.RUIN) continue;
        t.type = T.CORRUPTED;
        t.solid = false;
        t.biome = 'corrupted';
      }
    }
  };

  const placeNestCluster = (cx, cy) => {
    corruptPatch(cx, cy, 5 + Math.floor(rng() * 4));

    const spawnerCount = 2 + Math.floor(rng() * 4);
    for (let i = 0; i < spawnerCount; i++) {
      for (let tries = 0; tries < 12; tries++) {
        const a = rng() * Math.PI * 2;
        const d = 1 + Math.floor(rng() * 4);
        const x = Math.floor(cx + Math.cos(a) * d);
        const y = Math.floor(cy + Math.sin(a) * d);
        const type = rng() < 0.65 ? 'biter-spawner' : 'spitter-spawner';
        if (addNestBuilding(x, y, type)) break;
      }
    }

    const wormCount = 1 + Math.floor(rng() * 2);
    for (let i = 0; i < wormCount; i++) {
      for (let tries = 0; tries < 12; tries++) {
        const a = rng() * Math.PI * 2;
        const d = 3 + Math.floor(rng() * 4);
        const x = Math.floor(cx + Math.cos(a) * d);
        const y = Math.floor(cy + Math.sin(a) * d);
        if (addNestBuilding(x, y, 'worm')) break;
      }
    }
  };

  const clusterCount = 5 + Math.floor(rng() * 4);
  let placedClusters = 0;
  for (let attempts = 0; attempts < 400 && placedClusters < clusterCount; attempts++) {
    const cx = 4 + Math.floor(rng() * (w - 8));
    const cy = 4 + Math.floor(rng() * (h - 8));
    if (!canNestAt(cx, cy)) continue;
    const t = tiles[cy][cx];
    const distBias = Math.min(0.35, Math.hypot(cx - 8, cy - 8) / 220);
    const biomeBias = t.biome === 'desert' ? 0.35 : t.biome === 'dry' ? 0.18 : 0;
    if (rng() > 0.25 + distBias + biomeBias) continue;
    placeNestCluster(cx, cy);
    placedClusters++;
  }

  // 9) Architect ruins
  const ruinSpots = [
    { x: 16, y: 12, name: 'The First Plinth' },
    { x: 60, y: 30, name: 'Cassia Spire' },
    { x: 90, y: 50, name: 'Factory Prime' },
    { x: 110, y: 80, name: 'Corruption Nest' },
    { x: 150, y: 95, name: 'The Omega Tower' },
  ];
  for (const r of ruinSpots) {
    if (r.x < w && r.y < h) {
      tiles[r.y][r.x].type = T.RUIN;
      tiles[r.y][r.x].resource = 'architect-fragment';
      tiles[r.y][r.x].resourceCount = 1;
    }
  }

  // 10) Clear spawn — lush grass with nearby iron
  for (let y = 5; y < 12; y++) {
    for (let x = 5; x < 12; x++) {
      tiles[y][x] = { type: T.GRASS, solid: false, resource: null, resourceCount: 0, biome: 'temperate' };
    }
  }
  placeResource(14, 8, 2, 'iron-ore', 40);
  placeResource(6, 14, 2, 'copper-ore', 30);
  placeResource(12, 6, 1, 'coal', 25);

  return {
    seed,
    width: w,
    height: h,
    tiles,
    buildings,
    groundItems: [],
    scienceDrops: [],
  };
}

// ===== src/render.js =====
// GRIDFORGE - Rendering helpers
// 160x128 framebuffer with 8x8 sprites and 3x5 bitmap font.


const PIXEL_W = 160;
const PIXEL_H = 128;

let fb = null;  // Uint8ClampedArray of RGBA bytes, length 160*128*4

function initFB() {
  fb = new Uint8ClampedArray(PIXEL_W * PIXEL_H * 4);
  for (let i = 3; i < fb.length; i += 4) fb[i] = 255;
}

function getFB() { return fb; }

function clearFB(color = 0) {
  if (!fb) initFB();
  const [r, g, b] = hexToRgb(PAL[color]);
  for (let i = 0; i < fb.length; i += 4) {
    fb[i] = r; fb[i + 1] = g; fb[i + 2] = b; fb[i + 3] = 255;
  }
}

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
}

function px(x, y, color) {
  if (!fb) initFB();
  if (x < 0 || y < 0 || x >= PIXEL_W || y >= PIXEL_H) return;
  const [r, g, b] = hexToRgb(PAL[color]);
  const i = (y * PIXEL_W + x) * 4;
  fb[i] = r; fb[i + 1] = g; fb[i + 2] = b; fb[i + 3] = 255;
}

function drawRect(x, y, w, h, color) {
  for (let yy = y; yy < y + h; yy++) {
    if (yy < 0 || yy >= PIXEL_H) continue;
    for (let xx = x; xx < x + w; xx++) {
      if (xx < 0 || xx >= PIXEL_W) continue;
      px(xx, yy, color);
    }
  }
}

function drawRectOutline(x, y, w, h, color) {
  drawRect(x, y, w, 1, color);
  drawRect(x, y + h - 1, w, 1, color);
  drawRect(x, y, 1, h, color);
  drawRect(x + w - 1, y, 1, h, color);
}

function drawSprite(s, x, y) {
  if (!s) return;
  const sprite = typeof s === 'string' ? SPR[s] : s;
  if (!sprite) return;
  for (let yy = 0; yy < sprite.h; yy++) {
    for (let xx = 0; xx < sprite.w; xx++) {
      const c = sprite.px[yy][xx];
      if (c === 0) continue;
      px(x + xx, y + yy, c);
    }
  }
}

function drawSpriteTinted(s, x, y, tint = 11) {
  if (!s) return;
  const sprite = typeof s === 'string' ? SPR[s] : s;
  if (!sprite) return;
  for (let yy = 0; yy < sprite.h; yy++) {
    for (let xx = 0; xx < sprite.w; xx++) {
      if (sprite.px[yy][xx] === 0) continue;
      px(x + xx, y + yy, tint);
    }
  }
}

function drawSpriteFit(s, x, y, w, h, tint = null) {
  if (!s || w <= 0 || h <= 0) return;
  const sprite = typeof s === 'string' ? SPR[s] : s;
  if (!sprite) return;
  for (let yy = 0; yy < h; yy++) {
    const sy = Math.min(sprite.h - 1, Math.floor(yy * sprite.h / h));
    for (let xx = 0; xx < w; xx++) {
      const sx = Math.min(sprite.w - 1, Math.floor(xx * sprite.w / w));
      const c = sprite.px[sy][sx];
      if (c === 0) continue;
      px(x + xx, y + yy, tint ?? c);
    }
  }
}

function drawSpriteClipped(s, x, y, clipX, clipY, clipW, clipH) {
  if (!s) return;
  const sprite = typeof s === 'string' ? SPR[s] : s;
  if (!sprite) return;
  const maxX = clipX + clipW;
  const maxY = clipY + clipH;
  for (let yy = 0; yy < sprite.h; yy++) {
    const py = y + yy;
    if (py < clipY || py >= maxY) continue;
    for (let xx = 0; xx < sprite.w; xx++) {
      const pxPos = x + xx;
      if (pxPos < clipX || pxPos >= maxX) continue;
      const c = sprite.px[yy][xx];
      if (c === 0) continue;
      px(pxPos, py, c);
    }
  }
}

function drawSpriteMini(s, x, y) {
  if (!s) return;
  const sprite = typeof s === 'string' ? SPR[s] : s;
  if (!sprite) return;
  for (let yy = 0; yy < 4; yy++) {
    for (let xx = 0; xx < 4; xx++) {
      let color = 0;
      for (let sy = 0; sy < 2; sy++) {
        for (let sx = 0; sx < 2; sx++) {
          const c = sprite.px[yy * 2 + sy]?.[xx * 2 + sx] || 0;
          if (c !== 0) color = c;
        }
      }
      if (color !== 0) px(x + xx, y + yy, color);
    }
  }
}

function drawSpriteKey(key, x, y) {
  drawSprite(SPR[key] || SPR['inv-?'], x, y);
}

function drawSpriteScaled(s, x, y, scale = 2, tint = null) {
  const sprite = typeof s === 'string' ? SPR[s] : s;
  if (!sprite) return;
  for (let yy = 0; yy < sprite.h; yy++) {
    for (let xx = 0; xx < sprite.w; xx++) {
      const c = sprite.px[yy][xx];
      if (c === 0) continue;
      drawRect(x + xx * scale, y + yy * scale, scale, scale, tint ?? c);
    }
  }
}

/** Draw 8x8 sprite at 2x scale (16x16) for menus */
function drawSprite2x(s, x, y) {
  drawSpriteScaled(s, x, y, 2);
}

function drawSpriteKey2x(key, x, y) {
  drawSprite2x(SPR[key] || SPR['inv-?'], x, y);
}

function drawText(str, x, y, color = 5) {
  str = String(str).toUpperCase();
  let cx = x;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const glyph = FONT[ch] || FONT['?'];
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 3; col++) {
        if (glyph[row][col] === '1') {
          px(cx + col, y + row, color);
        }
      }
    }
    cx += 4;
  }
}

function drawTextScaled(str, x, y, color = 5, scale = 1) {
  str = String(str).toUpperCase();
  let cx = x;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const glyph = FONT[ch] || FONT['?'];
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 3; col++) {
        if (glyph[row][col] === '1') {
          for (let dy = 0; dy < scale; dy++) {
            for (let dx = 0; dx < scale; dx++) {
              px(cx + col * scale + dx, y + row * scale + dy, color);
            }
          }
        }
      }
    }
    cx += 3 * scale + 1;
  }
}

function textWidth(str, scale = 1) {
  return str.length * (3 * scale + 1) - 1;
}

function drawBar(x, y, w, h, value, maxValue, fg = 9, bg = 2) {
  drawRect(x, y, w, h, bg);
  const v = Math.max(0, Math.min(1, value / maxValue));
  drawRect(x, y, Math.floor(w * v), h, fg);
  drawRectOutline(x, y, w, h, 3);
}

function drawPanel(x, y, w, h, bg = 1, border = 3) {
  drawRect(x, y, w, h, bg);
  drawRectOutline(x, y, w, h, border);
}

function drawTextCentered(str, y, color = 5, maxW = 160) {
  const w = textWidth(str);
  const x = Math.max(0, Math.floor((maxW - w) / 2));
  drawText(str, x, y, color);
}

function drawTextWrapped(str, x, y, maxChars, color = 5, lineH = 8) {
  const words = String(str).toUpperCase().split(' ');
  let line = '';
  let cy = y;
  for (const word of words) {
    const next = line ? line + ' ' + word : word;
    if (next.length > maxChars) {
      if (line) drawText(line, x, cy, color);
      line = word;
      cy += lineH;
    } else {
      line = next;
    }
  }
  if (line) drawText(line, x, cy, color);
  return cy + lineH - y;
}

// Small belt-port markers on buildings (sx,sy = top-left of 8x8 tile)
function drawPortIn(sx, sy, dx, dy) {
  const x = sx + 3 + dx * 3;
  const y = sy + 3 + dy * 3;
  drawRect(x, y, 2, 2, 11);
}

function drawPortOut(sx, sy, dx, dy) {
  const x = sx + 2 + dx * 3;
  const y = sy + 2 + dy * 3;
  if (dx > 0) { drawRect(x + 2, y + 2, 2, 1, 5); drawRect(x + 3, y + 1, 1, 3, 5); }
  else if (dx < 0) { drawRect(x, y + 2, 2, 1, 5); drawRect(x - 1, y + 1, 1, 3, 5); }
  else if (dy > 0) { drawRect(x + 2, y + 2, 1, 2, 5); drawRect(x + 1, y + 3, 3, 1, 5); }
  else if (dy < 0) { drawRect(x + 2, y, 1, 2, 5); drawRect(x + 1, y - 1, 3, 1, 5); }
}

function drawFlowArrow(sx, sy, dx, dy) {
  drawPortOut(sx, sy, dx, dy);
}

function renderFB(ctx) {
  if (!fb) initFB();
  const img = new ImageData(fb, PIXEL_W, PIXEL_H);
  ctx.putImageData(img, 0, 0);
}

// ===== src/input.js =====
// GRIDFORGE - Input handling
// Maps keyboard to virtual gamepad:
//   Arrows / WASD = D-pad
//   Z / J / Enter = A
//   X / K / Space / Esc = B
//   I = Inventory (place buildings)
//   C = Craft menu
//   Enter + X + Up/Down = Zoom

const Input = {
  held: { up: false, down: false, left: false, right: false,
          z: false, x: false, inv: false, craft: false, enter: false },
  pressed: { up: false, down: false, left: false, right: false,
             A: false, B: false, inv: false, craft: false,
             enter: false, zoomIn: false, zoomOut: false },
  zHoldT: 0,
  xHoldT: 0,
  invHoldT: 0,
  craftHoldT: 0,
  enterHoldT: 0,
  dpadRepeat: { up: 0, down: 0, left: 0, right: 0 },
  DPAD_DELAY: 6,
  DPAD_RATE: 3,
  bound: false,
  game: null,

  bind(game) {
    this.game = game;
    this.bound = true;
    window.addEventListener('keydown', (e) => this._onKey(e, true));
    window.addEventListener('keyup', (e) => this._onKey(e, false));
    document.getElementById('canvas').addEventListener('click', () => {
      document.getElementById('canvas').focus();
    });
  },

  _onKey(e, down) {
    const k = e.key.toLowerCase();
    let consumed = true;
    if (k === 'arrowup' || k === 'w') this.held.up = down;
    else if (k === 'arrowdown' || k === 's') this.held.down = down;
    else if (k === 'arrowleft' || k === 'a') this.held.left = down;
    else if (k === 'arrowright' || k === 'd') this.held.right = down;
    else if (k === 'z' || k === 'j') this.held.z = down;
    else if (k === 'enter') {
      this.held.z = down;
      this.held.enter = down;
    }
    else if (k === 'x' || k === 'k' || k === ' ' || k === 'escape') this.held.x = down;
    else if (k === 'i') this.held.inv = down;
    else if (k === 'c') this.held.craft = down;
    else consumed = false;
    if (consumed) e.preventDefault();
  },

  // Called each tick: edge-detect press, then clear
  poll() {
    const { DPAD_DELAY, DPAD_RATE } = this;
    for (const k of ['up', 'down', 'left', 'right']) {
      if (!this.held[k]) {
        this.dpadRepeat[k] = 0;
        this.pressed[k] = false;
      } else {
        this.dpadRepeat[k]++;
        const t = this.dpadRepeat[k];
        this.pressed[k] = t === 1 || (t > DPAD_DELAY && (t - DPAD_DELAY) % DPAD_RATE === 0);
      }
    }

    this.pressed.A = this.held.z && this.zHoldT === 0;
    this.pressed.B = this.held.x && this.xHoldT === 0;
    this.pressed.inv = this.held.inv && this.invHoldT === 0;
    this.pressed.craft = this.held.craft && this.craftHoldT === 0;
    this.pressed.enter = this.held.enter && this.enterHoldT === 0;
    this.pressed.zoomIn = this.held.enter && this.held.x
      && (this.pressed.up || (this.pressed.enter && this.held.up) || (this.pressed.B && this.held.up));
    this.pressed.zoomOut = this.held.enter && this.held.x
      && (this.pressed.down || (this.pressed.enter && this.held.down) || (this.pressed.B && this.held.down));

    this.zHoldT = this.held.z ? Math.min(60, this.zHoldT + 1) : 0;
    this.xHoldT = this.held.x ? Math.min(60, this.xHoldT + 1) : 0;
    this.invHoldT = this.held.inv ? Math.min(60, this.invHoldT + 1) : 0;
    this.craftHoldT = this.held.craft ? Math.min(60, this.craftHoldT + 1) : 0;
    this.enterHoldT = this.held.enter ? Math.min(60, this.enterHoldT + 1) : 0;
  },

  // Called after poll to clear the "pressed" flags
  clear() {
    for (const k of Object.keys(this.pressed)) this.pressed[k] = false;
  },

  // After scene changes: ignore held action keys until released
  resetActionEdge() {
    this.zHoldT = this.held.z ? 1 : 0;
    this.xHoldT = this.held.x ? 1 : 0;
    this.invHoldT = this.held.inv ? 1 : 0;
    this.craftHoldT = this.held.craft ? 1 : 0;
    this.enterHoldT = this.held.enter ? 1 : 0;
    for (const k of Object.keys(this.pressed)) this.pressed[k] = false;
  },
};

// ===== src/systems/power.js =====
// GRIDFORGE - Power network simulation
// Power producers: campfire-gen (steam), steam-engine, solar, accumulator (storage),
//                  nuclear-reactor, matter-plant (passive)
// Power consumers: electric-miner, lab, assembler-2, assembler-3, chem-plant, etc.
// Power poles: small-pole, medium-pole, big-pole (range varies)
// Accumulators: store energy, output during night



const POLE_RANGE = { 'small-pole': 3, 'medium-pole': 5, 'big-pole': 8 };
const PRODUCER_OUTPUT = { 'campfire-gen': 0.2, 'boiler': 0.8, 'steam-engine': 1.0, 'steam-turbine': 2.0,
  'solar': 0.06, 'accumulator': 0, 'nuclear-reactor': 10.0, 'matter-reactor': 20.0 };
const CONSUMER_DRAW = { 'electric-miner': 0.1, 'assembler-1': 0.0, 'assembler-2': 0.15,
  'assembler-3': 0.3, 'chem-plant': 0.2, 'centrifuge': 0.4, 'refinery': 0.4,
  'lab': 0.6, 'roboport': 0.05, 'turret': 0.05, 'radar': 0.02,
  'electric-furnace': 0.18, 'rocket-silo': 2.0, 'matter-plant': 1.0,
  'long-inserter': 0.005, 'fast-inserter': 0.01 };

const PowerSystem = {
  networks: [],   // Array<{ poles:Set, producers:Set, consumers:Set, total:0 }>
  accumulators: new Map(),  // key -> { charge:0..1, max:1, type }

  init(state) {
    this.networks = [];
    this.accumulators.clear();
    this.buildNetworks(state);
  },

  buildNetworks(state) {
    // Find all poles, producers, consumers
    const poles = [], producers = [], consumers = [];
    for (const key in state.buildings) {
      const b = state.buildings[key];
      if (POLE_RANGE[b.type] !== undefined) {
        poles.push(b);
        if (b.type === 'accumulator') {
          this.accumulators.set(key, { charge: 0.5, max: 1, type: 'accumulator' });
        }
      } else if (PRODUCER_OUTPUT[b.type] !== undefined) {
        producers.push(b);
      } else if (CONSUMER_DRAW[b.type] !== undefined) {
        consumers.push(b);
      }
    }
    // Union-find poles that are within range of each other
    const parent = new Map();
    const find = (k) => parent.get(k) === k ? k : (() => { const r = find(parent.get(k)); parent.set(k, r); return r; })();
    const union = (a, b) => { const ra = find(a), rb = find(b); if (ra !== rb) parent.set(ra, rb); };

    poles.forEach(p => parent.set(`${p.x},${p.y}`, `${p.x},${p.y}`));

    for (let i = 0; i < poles.length; i++) {
      for (let j = i + 1; j < poles.length; j++) {
        const a = poles[i], b = poles[j];
        const d = Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));
        const range = Math.min(POLE_RANGE[a.type], POLE_RANGE[b.type]);
        if (d <= range) union(`${a.x},${a.y}`, `${b.x},${b.y}`);
      }
    }

    // Group poles, producers, consumers by network
    const groupMap = new Map();
    for (const p of poles) {
      const k = find(`${p.x},${p.y}`);
      if (!groupMap.has(k)) groupMap.set(k, { poles: [], producers: [], consumers: [] });
      groupMap.get(k).poles.push(p);
    }
    const isInRange = (c, net) => {
      for (const p of net.poles) {
        const d = Math.max(Math.abs(c.x - p.x), Math.abs(c.y - p.y));
        if (d <= POLE_RANGE[p.type]) return true;
      }
      return false;
    };
    for (const pr of producers) {
      for (const net of groupMap.values()) {
        if (isInRange(pr, net)) { net.producers.push(pr); break; }
      }
    }
    for (const c of consumers) {
      for (const net of groupMap.values()) {
        if (isInRange(c, net)) { net.consumers.push(c); break; }
      }
    }

    this.networks = [...groupMap.values()].map(n => ({ ...n, supply: 0, demand: 0, total: 0 }));
  },

  update(state) {
    for (const net of this.networks) {
      let supply = 0;
      for (const p of net.producers) {
        if (p.type === 'solar') {
          // Solar produces only during day
          const dayPhase = (state.tick % 30000) / 30000;  // 30s day cycle
          const day = Math.max(0, Math.sin(dayPhase * Math.PI * 2));
          supply += PRODUCER_OUTPUT[p.type] * (0.5 + day * 0.5);
        } else if (p.type === 'accumulator') {
          // Accumulators are handled below as storage, not direct supply here.
        } else if (p.type === 'campfire-gen' || p.type === 'steam-engine') {
          // Check fuel
          const fuelSlot = p.fuelSlot;
          if (fuelSlot && fuelSlot.count > 0) {
            if (state.tick % 60 === 0) fuelSlot.count--;
            supply += PRODUCER_OUTPUT[p.type];
          }
        } else if (p.type === 'boiler') {
          const fuelSlot = p.fuelSlot;
          const hasWater = p.fluid === 'water' && (p.amount || 0) >= 0.05;
          if (fuelSlot && fuelSlot.count > 0 && hasWater) {
            if (state.tick % 60 === 0) {
              fuelSlot.count--;
              p.amount = Math.max(0, (p.amount || 0) - 1);
              if (p.amount <= 0) p.fluid = null;
            }
            supply += PRODUCER_OUTPUT[p.type];
          }
        } else if (p.type === 'nuclear-reactor') {
          const fuelSlot = p.fuelSlot;
          if (fuelSlot && fuelSlot.type === 'u-fuel' && fuelSlot.count > 0) {
            if (state.tick % 300 === 0) fuelSlot.count--;
            supply += PRODUCER_OUTPUT[p.type];
          }
        } else {
          supply += PRODUCER_OUTPUT[p.type] || 0;
        }
      }
      let demand = 0;
      for (const c of net.consumers) {
        demand += CONSUMER_DRAW[c.type] || 0;
      }

      // If producers outstrip demand, charge accumulators from the surplus.
      // If demand outstrips supply, discharge accumulators to cover the gap.
      let effectiveSupply = supply;
      if (demand > supply) {
        for (const p of net.producers) {
          if (p.type !== 'accumulator') continue;
          const acc = this.accumulators.get(`${p.x},${p.y}`);
          if (acc && acc.charge > 0) {
            const draw = Math.min(acc.charge * 0.2, 0.5);
            acc.charge -= draw / 30;
            effectiveSupply += draw;
          }
        }
      } else if (supply > demand) {
        const surplus = supply - demand;
        for (const p of net.producers) {
          if (p.type !== 'accumulator') continue;
          const acc = this.accumulators.get(`${p.x},${p.y}`);
          if (acc && acc.charge < acc.max) {
            acc.charge = Math.min(acc.max, acc.charge + surplus / 60);
          }
        }
      }

      net.supply = effectiveSupply;
      net.demand = demand;
      net.total = effectiveSupply;

      // Consumers run if supply meets (most of) demand.
      const powered = demand <= 0 || effectiveSupply >= demand * 0.95;
      for (const c of net.consumers) {
        c.powered = powered;
      }
    }
  },

  // For UI: is (x,y) powered?
  isPowered(x, y) {
    for (const net of this.networks) {
      for (const c of net.consumers) {
        if (c.x === x && c.y === y) return c.powered;
      }
    }
    return false;
  },
};

// ===== src/systems/combat.js =====
// GRIDFORGE - Combat: Corruption spawners, biters, spitters, worms
// Pollution wakes nearby nests; enemies path toward the player base.

const TICKS_PER_SECOND = 20;
const WAVE_COOLDOWN = 6000;
const TURRET_RANGE = 6;
const TURRET_DAMAGE = 8;
const TURRET_COOLDOWN = 30;

const SPECIES = {
  'small-biter':  { hp: 10, dmg: 2, speed: 1.0, range: 1, color: 8, size: 1, dmg_type: 'physical' },
  'medium-biter': { hp: 25, dmg: 4, speed: 1.0, range: 1, color: 8, size: 1, dmg_type: 'physical' },
  'big-biter':    { hp: 80, dmg: 8, speed: 0.8, range: 1, color: 8, size: 2, dmg_type: 'physical' },
  'small-spitter':{ hp: 8,  dmg: 3, speed: 0.7, range: 4, color: 14, size: 1, dmg_type: 'acid' },
  'medium-spitter':{hp: 20, dmg: 5, speed: 0.7, range: 5, color: 14, size: 1, dmg_type: 'acid' },
  'big-spitter':  { hp: 60, dmg: 9, speed: 0.6, range: 6, color: 14, size: 2, dmg_type: 'acid' },
  'behemoth':     { hp: 500, dmg: 25, speed: 0.5, range: 2, color: 9, size: 2, dmg_type: 'physical' },
  'corruptor':    { hp: 200, dmg: 0, speed: 0.5, range: 8, color: 14, size: 2, dmg_type: 'spawn' },
  'worm':         { hp: 200, dmg: 8, speed: 0, range: 8, color: 13, size: 1, dmg_type: 'acid' },
};

const SPAWN_GROUPS = [
  { weight: 1, species: ['small-biter', 'small-biter', 'small-biter', 'small-spitter'], count: 8 },
  { weight: 1, species: ['medium-biter', 'medium-biter', 'small-spitter', 'small-spitter'], count: 12 },
  { weight: 0.6, species: ['big-biter', 'medium-biter', 'medium-spitter'], count: 14 },
  { weight: 0.3, species: ['big-biter', 'big-spitter', 'behemoth'], count: 18 },
];

const POLLUTION_RATE = {
  'burner-miner': 1,
  'electric-miner': 1,
  'stone-furnace': 3,
  'steel-furnace': 3,
  'electric-furnace': 3,
  lab: 1,
};

const NEST_TYPES = new Set(['biter-spawner', 'spitter-spawner', 'worm']);

const CombatSystem = {
  enemies: new Map(),      // key -> { x, y, hp, maxHp, species, type, cooldown }
  spawners: new Map(),     // key -> { x, y, type, hp, maxHp }
  wave: 0,
  nextWaveTimer: 0,
  pollution: 0,

  init(state) {
    this.enemies.clear();
    this.spawners.clear();
    this.wave = state.combat?.wave || 0;
    this.nextWaveTimer = state.combat?.nextWaveTimer || 0;
    this.pollution = state.combat?.pollution || 0;
    if (!state.projectiles) state.projectiles = [];

    for (const key in state.buildings) {
      const b = state.buildings[key];
      if (b.type === 'biter-spawner' || b.type === 'spitter-spawner') {
        this.spawners.set(key, {
          x: b.x,
          y: b.y,
          type: b.type,
          hp: b.hp ?? 250,
          maxHp: b.maxHp ?? 250,
        });
      } else if (b.type === 'worm') {
        this.spawnEnemy(state, 'worm', b.x, b.y, { key: 'worm:' + key, buildingKey: key });
      } else if (b.type === 'turret' && !b.ammoSlot) {
        b.ammoSlot = { type: 'ammo', count: 0 };
      }
    }

    this.syncState(state);
  },

  update(state) {
    if (!state.combat) state.combat = { wave: 0, pollution: 0, nextWaveTimer: 0 };
    this.collectPollution(state);
    this.updateTurrets(state);
    this.updateNestGuards(state);
    this.updateWaves(state);
    this.updateEnemies(state);
    this.updateProjectiles(state);
    this.syncState(state);
  },

  collectPollution(state) {
    let perSecond = 0;
    for (const b of Object.values(state.buildings)) {
      const rate = POLLUTION_RATE[b.type] || 0;
      if (!rate) continue;
      if (b.type === 'burner-miner' || b.type === 'electric-miner') {
        if (!b.noResource && ((b.cooldown || 0) > 0 || (b.outputSlot?.count || 0) > 0)) perSecond += rate;
      } else if (b.type === 'lab') {
        if (state.research?.current && b.powered !== false) perSecond += rate;
      } else if ((b.craftProgress || 0) > 0) {
        perSecond += rate;
      }
    }
    this.pollution = Math.max(0, Math.min(999, this.pollution + perSecond / TICKS_PER_SECOND - 0.1 / TICKS_PER_SECOND));
  },

  updateWaves(state) {
    if (this.nextWaveTimer > 0) this.nextWaveTimer--;
    if (this.pollution < 25 || this.nextWaveTimer > 0 || this.spawners.size === 0) return;

    const spawner = this.nearestSpawner(state.player.x, state.player.y);
    if (!spawner) return;

    this.wave++;
    this.spawnWave(state, spawner);
    this.nextWaveTimer = WAVE_COOLDOWN;
    if (state.onWave) state.onWave(this.wave);
  },

  updateNestGuards(state) {
    if (state.tick % 80 !== 0) return;
    for (const [key, sp] of this.spawners) {
      if (Math.hypot(sp.x - state.player.x, sp.y - state.player.y) > 12) continue;
      let nearby = 0;
      for (const e of this.enemies.values()) {
        if (e.species === 'worm') continue;
        if (Math.hypot(e.x - sp.x, e.y - sp.y) <= 6) nearby++;
      }
      if (nearby >= 3) continue;
      const species = sp.type === 'spitter-spawner' ? 'small-spitter' : 'small-biter';
      this.spawnAround(state, sp.x, sp.y, species);
    }
  },

  spawnAround(state, x, y, species) {
    for (let tries = 0; tries < 10; tries++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 1 + Math.random() * 3;
      const ex = Math.max(0, Math.min(state.world.width - 1, Math.floor(x + Math.cos(angle) * dist)));
      const ey = Math.max(0, Math.min(state.world.height - 1, Math.floor(y + Math.sin(angle) * dist)));
      if (state.buildings[`${ex},${ey}`]) continue;
      this.spawnEnemy(state, species, ex, ey);
      return true;
    }
    return false;
  },

  nearestSpawner(x, y) {
    let best = null;
    let bestD = Infinity;
    for (const [key, sp] of this.spawners) {
      const d = Math.hypot(sp.x - x, sp.y - y);
      if (d < bestD) {
        bestD = d;
        best = { key, ...sp };
      }
    }
    return best;
  },

  spawnWave(state, spawner) {
    const group = this.pickGroup();
    let count = group.count + Math.floor(this.wave * 1.5);
    if (this.pollution >= 100) count *= 10;
    else if (this.pollution >= 50) count *= 2;
    count = Math.min(count, 140);

    for (let i = 0; i < count; i++) {
      const species = group.species[Math.floor(Math.random() * group.species.length)];
      const angle = Math.random() * Math.PI * 2;
      const dist = 2 + Math.random() * 3;
      const ex = Math.max(0, Math.min(state.world.width - 1, Math.floor(spawner.x + Math.cos(angle) * dist)));
      const ey = Math.max(0, Math.min(state.world.height - 1, Math.floor(spawner.y + Math.sin(angle) * dist)));
      this.spawnEnemy(state, species, ex, ey);
    }
  },

  pickGroup() {
    const maxGroup = Math.min(SPAWN_GROUPS.length - 1, Math.floor(this.wave / 3));
    const groups = SPAWN_GROUPS.slice(0, maxGroup + 1);
    const totalW = groups.reduce((s, g) => s + g.weight, 0);
    let r = Math.random() * totalW;
    for (const g of groups) {
      r -= g.weight;
      if (r <= 0) return g;
    }
    return groups[0];
  },

  spawnEnemy(state, species, x, y, opts = {}) {
    const base = SPECIES[species];
    if (!base) return null;
    const hard = state.flags?.architectMode ? 2 : 1;
    const id = opts.key || 'e:' + (state.nextEnemyId = (state.nextEnemyId || 0) + 1);
    this.enemies.set(id, {
      x, y,
      species,
      ...base,
      hp: opts.hp || base.hp * hard,
      maxHp: opts.maxHp || base.hp * hard,
      speed: base.speed * hard,
      cooldown: 0,
      moveCooldown: 0,
      buildingKey: opts.buildingKey || null,
    });
    return id;
  },

  updateTurrets(state) {
    for (const b of Object.values(state.buildings)) {
      if (b.type !== 'turret') continue;
      if (!b.ammoSlot) b.ammoSlot = { type: 'ammo', count: 0 };
      if (b.cooldown > 0) { b.cooldown--; continue; }
      if ((b.ammoSlot.count || 0) <= 0) continue;

      let targetKey = null;
      let target = null;
      let bestD = Infinity;
      for (const [ek, e] of this.enemies) {
        const d = Math.hypot(e.x - b.x, e.y - b.y);
        if (d <= TURRET_RANGE && d < bestD) {
          bestD = d;
          targetKey = ek;
          target = e;
        }
      }
      if (!target) continue;

      b.ammoSlot.count--;
      b.cooldown = TURRET_COOLDOWN;
      b.lastShot = state.tick;
      this.fireTracer(state, b.x, b.y, target.x, target.y, 10);
      this.damageEnemyByKey(state, targetKey, TURRET_DAMAGE);
    }
  },

  updateEnemies(state) {
    for (const [ek, e] of [...this.enemies]) {
      if (e.hp <= 0) { this.killEnemy(state, ek, e); continue; }
      if (e.cooldown > 0) e.cooldown--;

      const target = this.findTarget(state, e);
      if (!target) continue;
      const d = Math.hypot(target.x - e.x, target.y - e.y);

      if (e.range > 1 && d <= e.range) {
        if (e.cooldown <= 0) {
          this.fireProjectile(state, e, target.x, target.y);
          e.cooldown = 60;
        }
        continue;
      }

      if (d <= 1) {
        if (e.cooldown <= 0) {
          this.applyAttack(state, target, e.dmg);
          e.cooldown = 30;
        }
        continue;
      }

      this.moveEnemy(state, e, target);
    }
  },

  findTarget(state, e) {
    let best = { kind: 'player', x: state.player.x, y: state.player.y, score: Math.hypot(state.player.x - e.x, state.player.y - e.y) };

    for (const key in state.buildings) {
      const b = state.buildings[key];
      if (NEST_TYPES.has(b.type)) continue;
      let score = Math.hypot(b.x - e.x, b.y - e.y);
      if (b.type === 'turret') score -= 4;
      if (b.type === 'wall') score -= 1.5;
      if (score < best.score) best = { kind: 'building', key, x: b.x, y: b.y, score };
    }
    return best;
  },

  moveEnemy(state, e, target) {
    if (e.speed <= 0) return;
    if (e.moveCooldown > 0) { e.moveCooldown--; return; }

    const dx = Math.sign(target.x - e.x);
    const dy = Math.sign(target.y - e.y);
    const primary = Math.abs(target.x - e.x) >= Math.abs(target.y - e.y)
      ? { dx, dy: 0 }
      : { dx: 0, dy };
    const secondary = primary.dx !== 0 ? { dx: 0, dy } : { dx, dy: 0 };
    const candidates = [
      primary,
      secondary,
      { dx, dy },
    ].filter(d => d.dx || d.dy);

    for (const step of candidates) {
      const nx = e.x + step.dx;
      const ny = e.y + step.dy;
      if (!state.world.tiles[ny]?.[nx]) continue;
      const blockingKey = `${nx},${ny}`;
      const blocking = state.buildings[blockingKey];
      if (blocking && NEST_TYPES.has(blocking.type)) continue;
      if (blocking) {
        if (e.cooldown <= 0) {
          this.damageBuilding(state, blockingKey, e.dmg);
          e.cooldown = 30;
        }
        break;
      }
      e.x = nx;
      e.y = ny;
      break;
    }

    e.moveCooldown = Math.max(4, Math.round(10 / Math.max(0.25, e.speed)));
  },

  applyAttack(state, target, dmg) {
    if (target.kind === 'player') {
      state.player.hp = (state.player.hp || 100) - dmg;
    } else if (target.kind === 'building') {
      this.damageBuilding(state, target.key, dmg);
    }
  },

  damageBuilding(state, key, dmg) {
    const b = state.buildings[key];
    if (!b) return false;
    b.hp = (b.hp ?? b.maxHp ?? 100) - dmg;
    if (b.hp > 0) return false;
    delete state.buildings[key];
    state._powerDirty = true;
    state._saveDirty = true;
    return true;
  },

  fireProjectile(state, e, tx, ty) {
    if (!state.projectiles) state.projectiles = [];
    const dist = Math.max(1, Math.hypot(tx - e.x, ty - e.y));
    state.projectiles.push({
      x: e.x,
      y: e.y,
      tx,
      ty,
      age: 0,
      duration: Math.max(5, Math.round(dist * 3)),
      dmg: e.dmg,
      color: e.color,
      type: e.dmg_type,
    });
  },

  fireTracer(state, x, y, tx, ty, color) {
    if (!state.projectiles) state.projectiles = [];
    state.projectiles.push({ x, y, tx, ty, age: 0, duration: 4, dmg: 0, color, type: 'tracer' });
  },

  updateProjectiles(state) {
    const list = state.projectiles || [];
    for (let i = list.length - 1; i >= 0; i--) {
      const p = list[i];
      p.age++;
      if (p.age < p.duration) continue;
      if (p.dmg > 0) this.impactProjectile(state, p);
      list.splice(i, 1);
    }
  },

  impactProjectile(state, p) {
    const tx = Math.round(p.tx);
    const ty = Math.round(p.ty);
    const key = `${tx},${ty}`;
    if (Math.hypot(state.player.x - tx, state.player.y - ty) <= 1) {
      state.player.hp = (state.player.hp || 100) - p.dmg;
      return;
    }
    if (state.buildings[key] && !NEST_TYPES.has(state.buildings[key].type)) {
      this.damageBuilding(state, key, p.dmg);
    }
  },

  // Damage enemies, nest worms, and spawners around a target tile.
  damageEnemy(state, x, y, radius, dmg) {
    let hits = 0;
    let killed = 0;
    for (const [ek, e] of [...this.enemies]) {
      if (Math.hypot(e.x - x, e.y - y) <= radius) {
        hits++;
        this.damageEnemyByKey(state, ek, dmg);
        if (!this.enemies.has(ek)) killed++;
      }
    }

    for (const [key, sp] of [...this.spawners]) {
      if (Math.hypot(sp.x - x, sp.y - y) <= radius) {
        hits++;
        if (this.damageSpawner(state, key, dmg)) killed++;
      }
    }
    return { hits, killed };
  },

  damageEnemyByKey(state, key, dmg) {
    const e = this.enemies.get(key);
    if (!e) return false;
    e.hp -= dmg;
    if (e.hp > 0) return false;
    this.killEnemy(state, key, e);
    return true;
  },

  killEnemy(state, key, e) {
    if (Math.random() < 0.5 && e.species !== 'worm') {
      if (!state.world.scienceDrops) state.world.scienceDrops = [];
      state.world.scienceDrops.push({ x: e.x, y: e.y, type: 'military-pack', amount: 1 });
    }
    if (e.buildingKey) {
      delete state.buildings[e.buildingKey];
      state._powerDirty = true;
      state._saveDirty = true;
    }
    this.enemies.delete(key);
  },

  damageSpawner(state, key, dmg) {
    const sp = this.spawners.get(key);
    const b = state.buildings[key];
    if (!sp || !b) return false;
    sp.hp -= dmg;
    b.hp = sp.hp;
    if (sp.hp > 0) return false;

    this.spawners.delete(key);
    delete state.buildings[key];
    if (!state.world.scienceDrops) state.world.scienceDrops = [];
    state.world.scienceDrops.push({ x: sp.x, y: sp.y, type: 'military-pack', amount: 2 });
    state._powerDirty = true;
    state._saveDirty = true;
    return true;
  },

  syncState(state) {
    if (!state.combat) state.combat = {};
    state.combat.wave = this.wave;
    state.combat.pollution = this.pollution;
    state.combat.nextWaveTimer = this.nextWaveTimer;
  },
};

// ===== src/systems/logistics.js =====
// GRIDFORGE - Simplified roboport logistics and repair network

const ROBO_RANGE = 12;
const SUPPLY_CHESTS = new Set(['provider-chest', 'storage-chest', 'logi-chest']);

const LogisticsSystem = {
  init(state) {
    if (!state.logisticsDrones) state.logisticsDrones = [];
  },

  update(state) {
    if (!state.logisticsDrones) state.logisticsDrones = [];
    this.updateDroneEffects(state);
    if (state.tick % 10 !== 0) return;

    const ports = Object.values(state.buildings).filter(b => b.type === 'roboport' && b.powered !== false);
    for (const port of ports) {
      if (this.repairOne(state, port)) continue;
      this.deliverOne(state, port);
    }
  },

  deliverOne(state, port) {
    const requester = this.findRequester(state, port);
    if (!requester) return false;

    const requestType = requester.requestType || requester.items?.[0]?.type || null;
    const supply = this.findSupply(state, port, requestType);
    if (!supply) return false;

    const itemType = supply.item.type;
    if (!this.canReceive(requester, itemType)) return false;
    supply.item.count--;
    if (supply.item.count <= 0) supply.chest.items.splice(supply.index, 1);
    this.addToChest(requester, itemType, 1);
    requester.requestType = requestType || itemType;
    requester.lastReceived = { type: itemType, tick: state.tick };
    this.emitDrone(state, supply.chest, requester, itemType);
    state._saveDirty = true;
    return true;
  },

  repairOne(state, port) {
    const supply = this.findSupply(state, port, 'repair-pack');
    if (!supply) return false;

    let target = null;
    let worst = 0;
    for (const b of Object.values(state.buildings)) {
      if (b === supply.chest || b.type === 'roboport') continue;
      if (!this.inRange(port, b)) continue;
      const maxHp = b.maxHp || 100;
      const missing = maxHp - (b.hp ?? maxHp);
      if (missing > worst) {
        worst = missing;
        target = b;
      }
    }
    if (!target || worst <= 0) return false;

    supply.item.count--;
    if (supply.item.count <= 0) supply.chest.items.splice(supply.index, 1);
    target.hp = Math.min(target.maxHp || 100, (target.hp || 0) + 35);
    this.emitDrone(state, supply.chest, target, 'repair-pack');
    state._saveDirty = true;
    return true;
  },

  findRequester(state, port) {
    return Object.values(state.buildings).find(b =>
      b.type === 'requester-chest' && this.inRange(port, b) && this.chestRoom(b)
    ) || null;
  },

  findSupply(state, port, type = null) {
    for (const chest of Object.values(state.buildings)) {
      if (!SUPPLY_CHESTS.has(chest.type) || !this.inRange(port, chest) || !Array.isArray(chest.items)) continue;
      const index = chest.items.findIndex(i => i && i.count > 0 && (!type || i.type === type));
      if (index >= 0) return { chest, item: chest.items[index], index };
    }
    return null;
  },

  canReceive(chest, itemType) {
    if (!chest.items) chest.items = [];
    const existing = chest.items.find(i => i.type === itemType);
    if (existing) return existing.count < 200;
    return chest.items.length < (chest.capacity || 32);
  },

  addToChest(chest, itemType, count) {
    if (!chest.items) chest.items = [];
    const existing = chest.items.find(i => i.type === itemType);
    if (existing) existing.count += count;
    else chest.items.push({ type: itemType, count });
  },

  chestRoom(chest) {
    if (!chest.items) chest.items = [];
    return chest.items.length < (chest.capacity || 32) || chest.items.some(i => i.count < 200);
  },

  inRange(port, b) {
    return Math.max(Math.abs(port.x - b.x), Math.abs(port.y - b.y)) <= ROBO_RANGE;
  },

  emitDrone(state, from, to, itemType) {
    state.logisticsDrones.push({
      from: { x: from.x, y: from.y },
      to: { x: to.x, y: to.y },
      type: itemType,
      tick: state.tick,
      duration: 18,
    });
    if (state.logisticsDrones.length > 16) state.logisticsDrones.splice(0, state.logisticsDrones.length - 16);
  },

  updateDroneEffects(state) {
    for (let i = state.logisticsDrones.length - 1; i >= 0; i--) {
      const d = state.logisticsDrones[i];
      if (state.tick - d.tick > d.duration) state.logisticsDrones.splice(i, 1);
    }
  },
};

// ===== src/systems/fluids.js =====
// GRIDFORGE - Fluid network simulation
// Pipes carry fluids. Pumps push. Tanks store. Machines consume/produce via ports.



const FLUID_CAPACITY = {
  pipe: 5,
  'pipe-2': 10,
  pump: 5,
  tank: 2500,
  boiler: 20,
};
const FLUID_NODES = new Set(Object.keys(FLUID_CAPACITY));
const FLUID_DIRS = [{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];

const FluidSystem = {
  init(state) {
    // State is stored on building objects.
  },

  update(state) {
    this.runOffshorePumps(state);
    this.equalizeNetworks(state);
  },

  runOffshorePumps(state) {
    for (const b of Object.values(state.buildings)) {
      if (b.type !== 'offshore-pump') continue;
      if (!this.hasAdjacentWater(state, b.x, b.y)) continue;
      const out = getBuildingPorts(b.type, b.dir)?.output || b.dir || { dx: 1, dy: 0 };
      this.insert(state, b.x + out.dx, b.y + out.dy, 'water', 1);
    }
  },

  hasAdjacentWater(state, x, y) {
    for (const d of FLUID_DIRS) {
      if (state.world.tiles[y + d.dy]?.[x + d.dx]?.type === T.WATER) return true;
    }
    return false;
  },

  equalizeNetworks(state) {
    const fluidTiles = [];
    for (const key in state.buildings) {
      const b = state.buildings[key];
      if (FLUID_NODES.has(b.type)) {
        if (b.fluid === undefined) b.fluid = null;
        if (b.amount === undefined) b.amount = 0;
        fluidTiles.push(b);
      }
    }

    for (let pass = 0; pass < 2; pass++) {
      for (const t of fluidTiles) {
        for (const d of FLUID_DIRS) {
          const nb = state.buildings[`${t.x + d.dx},${t.y + d.dy}`];
          if (!nb || !FLUID_NODES.has(nb.type)) continue;
          if (nb.fluid === undefined) nb.fluid = null;
          if (nb.amount === undefined) nb.amount = 0;
          if (t.fluid && nb.fluid && t.fluid !== nb.fluid) continue;

          const total = (t.amount || 0) + (nb.amount || 0);
          const fluid = t.fluid || nb.fluid;
          if (!fluid || total <= 0) continue;

          const tCap = this.capacity(t);
          const nbCap = this.capacity(nb);
          const target = total / 2;
          t.fluid = fluid;
          nb.fluid = fluid;
          t.amount = Math.min(tCap, target);
          nb.amount = Math.min(nbCap, total - t.amount);
          if (t.amount <= 0) t.fluid = null;
          if (nb.amount <= 0) nb.fluid = null;
        }
      }
    }
  },

  capacity(buildingOrType) {
    const type = typeof buildingOrType === 'string' ? buildingOrType : buildingOrType?.type;
    return FLUID_CAPACITY[type] || 0;
  },

  canInsert(state, x, y, fluid, amount = 1) {
    const b = state.buildings[`${x},${y}`];
    if (!b || !FLUID_NODES.has(b.type)) return false;
    if (b.fluid && b.fluid !== fluid) return false;
    return (b.amount || 0) < this.capacity(b) && amount > 0;
  },

  insert(state, x, y, fluid, amount) {
    const key = `${x},${y}`;
    const b = state.buildings[key];
    if (!b || !FLUID_NODES.has(b.type)) return false;
    const cap = this.capacity(b);
    if (b.fluid && b.fluid !== fluid) return false;
    if ((b.amount || 0) >= cap) return false;
    b.fluid = fluid;
    b.amount = Math.min(cap, (b.amount || 0) + amount);
    if (b.amount <= 0) b.fluid = null;
    return true;
  },

  extract(state, x, y, amount, fluid = null) {
    const key = `${x},${y}`;
    const b = state.buildings[key];
    if (!b || !FLUID_NODES.has(b.type) || !b.fluid) return null;
    if (fluid && b.fluid !== fluid) return null;
    const take = Math.min(b.amount || 0, amount);
    if (take <= 0) return null;
    b.amount -= take;
    const type = b.fluid;
    if (b.amount <= 0) { b.amount = 0; b.fluid = null; }
    return { type, amount: take };
  },

  peek(state, x, y, fluid = null) {
    const b = state.buildings[`${x},${y}`];
    if (!b || !FLUID_NODES.has(b.type) || !b.fluid) return 0;
    if (fluid && b.fluid !== fluid) return 0;
    return b.amount || 0;
  },
};

// ===== src/systems/belts.js =====
// GRIDFORGE - Belt and inserter system
// Belts move items along a chain of segments. Inserters pick up and place items.


const TILE = 8;
const BELT_SPEED = { belt: 8, 'fast-belt': 4, 'express-belt': 2, splitter: 8, 'underground-belt': 8 };
const BELT_FUEL_ITEMS = new Set(['wood', 'coal', 'solid-fuel', 'rocket-fuel', 'u-fuel']);
const BELT_CHEST_TYPES = new Set(['wood-chest', 'iron-chest', 'storage-chest', 'logi-chest', 'requester-chest', 'provider-chest']);
// ticks per step: lower = faster. base belt moves 1 tile per 8 ticks.
const INSERTER_SWING = { inserter: 16, 'long-inserter': 20, 'fast-inserter': 8 };

// Each belt segment holds 0..1 items. Items progress in `progress` (0..1) per tile.
// A belt chain is identified by (x, y) start point + direction vector.
// Items: { type, count, progress (0..1), color }

// Inserters: (x, y), dir (picks from one side, places to the other)
// An inserter has: pos {x,y}, dir N/E/S/W, range, swing (ticks), state (idle/moving/back),
//                 handProgress (0..1), heldItem { type, count } | null

const BeltSystem = {
  // belts: Map<key "x,y", BeltSegment>
  // BeltSegment: { x, y, dir: {dx, dy}, type, items: [{type, progress:0..1}], blocked }
  belts: new Map(),

  inserters: new Map(),  // key "x,y" -> Inserter
  currentState: null,

  init(state) {
    this.belts.clear();
    this.inserters.clear();
    // Build belts and inserters from placed buildings
    for (const key in state.buildings) {
      const b = state.buildings[key];
      if (beltSystemIsBeltType(b.type)) {
        if (!b.items) b.items = [];
        b.hidden = b.type === 'underground-belt' && b.subtype === 'in';
        this.belts.set(key, b);
      } else if (b.type === 'inserter' || b.type === 'long-inserter' || b.type === 'fast-inserter') {
        b.range = b.type === 'long-inserter' ? 2 : 1;
        b.swing = INSERTER_SWING[b.type];
        if (!b.state) b.state = 'idle';
        if (b.handProgress == null) b.handProgress = 0;
        if (b.heldItem === undefined) b.heldItem = null;
        if (b.cooldown == null) b.cooldown = 0;
        this.inserters.set(key, b);
      }
    }
  },

  // Get belt at (x,y) or null
  beltAt(x, y) {
    return this.belts.get(`${x},${y}`) || null;
  },

  // Place item onto a belt at (x,y) at progress=0 (start of segment)
  placeOnBelt(x, y, itemType, state = this.currentState, from = null) {
    const seg = this.beltAt(x, y);
    if (!seg) return false;
    if (seg.hidden) return false;
    if (seg.items.length > 0) return false;
    seg.items.push({ id: this.nextItemId(state), type: itemType, progress: 0, from });
    return true;
  },

  // Take item from belt at (x,y) (the one closest to end)
  takeFromBelt(x, y) {
    const seg = this.beltAt(x, y);
    if (!seg || seg.items.length === 0) return null;
    const it = seg.items.shift();
    return it.type;
  },

  // Tick all belts one step
  update(state) {
    this.currentState = state;
    this.normalizeItems(state);
    const before = this.auditBelts(state);
    const processed = new Set();
    let deliveredOut = 0;

    for (const seg of this.belts.values()) {
      if (seg.hidden) continue;
      const step = 1 / BELT_SPEED[seg.type];
      for (let i = 0; i < seg.items.length; i++) {
        const it = seg.items[i];
        if (processed.has(it.id)) continue;
        processed.add(it.id);
        it.progress = Math.min(1, it.progress + step);
        if (it.progress < 1) continue;

        const result = this.tryMoveFromBeltEnd(state, seg, it);
        if (result.moved) {
          seg.items.splice(i, 1);
          i--;
          if (result.delivered) deliveredOut++;
        } else {
          it.progress = 0.99;
        }
      }
    }

    this.currentState = null;
    const after = this.auditBelts(state);
    const ok = after.total === before.total - deliveredOut && after.duplicates.length === 0;
    state.debug = state.debug || {};
    state.debug.belts = {
      before: before.total,
      after: after.total,
      deliveredOut,
      ok,
      duplicates: after.duplicates,
      counts: after.byType,
    };
  },

  tryMoveFromBeltEnd(state, seg, item) {
    const nx = seg.x + seg.dir.dx;
    const ny = seg.y + seg.dir.dy;
    const next = this.beltAt(nx, ny);
    const blockedByReverse = next && next.dir.dx === -seg.dir.dx && next.dir.dy === -seg.dir.dy;

    if (next && !next.hidden && !blockedByReverse && next.items.length === 0) {
      item.progress = 0;
      item.from = {
        x: seg.x,
        y: seg.y,
        dir: { dx: seg.dir.dx, dy: seg.dir.dy },
        tick: state.tick,
        duration: 4,
      };
      next.items.push(item);
      return { moved: true, delivered: false };
    }

    if (this.tryDeliverToBuilding(state, nx, ny, item.type)) {
      this.emitTransferEffect(state, item.type, seg, { x: nx, y: ny });
      return { moved: true, delivered: true };
    }
    return { moved: false, delivered: false };
  },

  normalizeItems(state) {
    for (const seg of this.belts.values()) {
      if (!seg.items) seg.items = [];
      for (const item of seg.items) {
        if (!item.id) item.id = this.nextItemId(state);
        item.progress = Math.max(0, Math.min(0.99, item.progress || 0));
        if (item.from && state.tick - item.from.tick > item.from.duration + 2) delete item.from;
      }
    }
  },

  nextItemId(state) {
    if (!state) return 'belt-item-' + Math.random().toString(36).slice(2);
    state.nextBeltItemId = (state.nextBeltItemId || 0) + 1;
    return 'belt-item-' + state.nextBeltItemId;
  },

  hasItemOnBelts(id) {
    for (const seg of this.belts.values()) {
      if (seg.items?.some(item => item.id === id)) return true;
    }
    return false;
  },

  auditBelts(state) {
    const seen = new Set();
    const duplicates = [];
    const byType = {};
    let total = 0;
    for (const seg of this.belts.values()) {
      for (const item of seg.items || []) {
        total++;
        byType[item.type] = (byType[item.type] || 0) + 1;
        if (seen.has(item.id)) duplicates.push(item.id);
        seen.add(item.id);
      }
    }
    return { total, duplicates, byType };
  },

  flushBuildingOutputs(state) {
    this.currentState = state;
    for (const b of Object.values(state.buildings)) {
      if (!b.outputSlot || b.outputSlot.count <= 0) continue;
      const ports = getBuildingPorts(b.type, b.dir);
      if (!ports?.output) continue;

      const tx = b.x + ports.output.dx;
      const ty = b.y + ports.output.dy;
      const itemType = b.outputSlot.type;

      if (this.placeOnBelt(tx, ty, itemType, state) || this.tryDeliverToBuilding(state, tx, ty, itemType)) {
        b.outputSlot.count--;
        if (b.outputSlot.count <= 0) b.outputSlot = null;
      }
    }
    this.currentState = null;
  },

  // Try to deliver an item to a building's input slot.
  // Buildings (assemblers, furnaces, etc.) have `inputSlots` per recipe.
  tryDeliverToBuilding(state, x, y, itemType) {
    const key = `${x},${y}`;
    const b = state.buildings[key];
    if (!b) return false;
    if (b.ammoSlot && itemType === 'ammo') {
      b.ammoSlot.type = 'ammo';
      b.ammoSlot.count = Math.min(200, (b.ammoSlot.count || 0) + 1);
      b.lastReceived = { type: itemType, tick: state.tick };
      return true;
    }
    if (b.fuelSlot && BELT_FUEL_ITEMS.has(itemType)) {
      if (!b.fuelSlot.type || b.fuelSlot.type === itemType || b.fuelSlot.count === 0) {
        b.fuelSlot.type = itemType;
        b.fuelSlot.count = Math.min(50, (b.fuelSlot.count || 0) + 1);
        return true;
      }
    }
    if (BELT_CHEST_TYPES.has(b.type)) {
      if (!b.items) b.items = [];
      const existing = b.items.find(i => i.type === itemType);
      if (existing) {
        existing.count++;
        b.lastReceived = { type: itemType, tick: state.tick };
        return true;
      }
      if (b.items.length >= (b.capacity || 32)) return false;
      b.items.push({ type: itemType, count: 1 });
      b.lastReceived = { type: itemType, tick: state.tick };
      return true;
    }
    // Assemblers, furnaces, labs - use slots array
    if (b.inputSlots) {
      const max = b.inputSlots.length;
      for (let i = 0; i < max; i++) {
        if (!b.inputSlots[i] || b.inputSlots[i].type === itemType) {
          if (!b.inputSlots[i]) b.inputSlots[i] = { type: itemType, count: 0 };
          b.inputSlots[i].count++;
          return true;
        }
      }
    }
    return false;
  },

  // Inserter update
  updateInserters(state) {
    this.currentState = state;
    for (const ins of this.inserters.values()) {
      if (ins.cooldown > 0) { ins.cooldown--; continue; }

      if (ins.state === 'idle') {
        // Look for an item to pick up
        const pickFrom = this.inserterPickSource(state, ins);
        if (pickFrom) {
          ins.heldItem = pickFrom.item;
          pickFrom.remove();
          ins.state = 'to-place';
          ins.handProgress = 0;
        }
      } else if (ins.state === 'to-place') {
        ins.handProgress += 1 / ins.swing;
        if (ins.handProgress >= 1) {
          const placeTo = this.inserterPlaceTarget(state, ins);
          if (placeTo) {
            placeTo.add(ins.heldItem);
            ins.heldItem = null;
            ins.state = 'to-pick';
            ins.handProgress = 0;
          } else {
            // Wait - hold position
            ins.handProgress = 0.99;
          }
        }
      } else if (ins.state === 'to-pick') {
        ins.handProgress += 1 / ins.swing;
        if (ins.handProgress >= 1) {
          ins.state = 'idle';
          ins.handProgress = 0;
          ins.cooldown = 4;
        }
      }
    }
    this.currentState = null;
  },

  // Where does this inserter pick from?
  inserterPickSource(state, ins) {
    // The inserter has a dir; it picks from one side and places on the other.
    // Convention: picks from the side perpendicular to dir + back.
    // Simpler: dir is "place direction". Pick from opposite side.
    const pickX = ins.x - ins.dir.dx;
    const pickY = ins.y - ins.dir.dy;
    const key = `${pickX},${pickY}`;
    const b = state.buildings[key];
    const belt = this.beltAt(pickX, pickY);
    if (belt && belt.items.length > 0) {
      const itemIndex = belt.items.findIndex(it => it.progress >= 0.85);
      if (itemIndex < 0) return null;
      return {
        item: { type: belt.items[itemIndex].type, count: 1 },
        remove: () => { belt.items.splice(itemIndex, 1); },
      };
    }
    if (!b) return null;
    // Pick from outputSlot
    if (b.outputSlot && b.outputSlot.count > 0) {
      return {
        item: { type: b.outputSlot.type, count: 1 },
        remove: () => { b.outputSlot.count--; if (b.outputSlot.count <= 0) b.outputSlot = null; },
      };
    }
    // Pick from items list (chests)
    if (b.items && b.items.length > 0) {
      const it = b.items[0];
      return {
        item: { type: it.type, count: 1 },
        remove: () => { it.count--; if (it.count <= 0) b.items.shift(); },
      };
    }
    return null;
  },

  // Where does this inserter place to?
  inserterPlaceTarget(state, ins) {
    const placeX = ins.x + ins.dir.dx;
    const placeY = ins.y + ins.dir.dy;
    const key = `${placeX},${placeY}`;
    const b = state.buildings[key];
    if (!b) return null;
    if (b.ammoSlot && ins.heldItem?.type === 'ammo') {
      if ((b.ammoSlot.count || 0) >= 200) return null;
      return { add: (held) => { b.ammoSlot.type = 'ammo'; b.ammoSlot.count += held.count; b.lastReceived = { type: held.type, tick: state.tick }; } };
    }
    // Place into inputSlots
    if (b.inputSlots) {
      const item = ins.heldItem;
      for (let i = 0; i < b.inputSlots.length; i++) {
        const slot = b.inputSlots[i];
        if (!slot) {
          return { add: (held) => { b.inputSlots[i] = { type: held.type, count: held.count }; } };
        }
        if (slot.type === item.type && slot.count < 50) {
          return { add: (held) => { slot.count += held.count; } };
        }
      }
      return null;
    }
    // Place onto belt
    if (this.beltAt(placeX, placeY)) {
      if (this.placeOnBelt(placeX, placeY, ins.heldItem.type, state)) {
        return { add: () => {} };
      }
      return null;
    }
    // Place into chest
    if (b.items) {
      const cap = b.capacity || 32;
      const ex = b.items.find(x => x.type === ins.heldItem.type);
      if (!ex && b.items.length >= cap) return null;
      return {
        add: (i) => {
          if (ex) ex.count += i.count;
          else b.items.push({ type: i.type, count: i.count });
          b.lastReceived = { type: i.type, tick: state.tick };
        },
      };
    }
    return null;
  },

  emitTransferEffect(state, itemType, fromSeg, to) {
    if (!state.beltEffects) state.beltEffects = [];
    state.beltEffects.push({
      type: itemType,
      from: { x: fromSeg.x, y: fromSeg.y },
      to,
      dir: { dx: fromSeg.dir.dx, dy: fromSeg.dir.dy },
      tick: state.tick,
      duration: 8,
    });
    if (state.beltEffects.length > 24) state.beltEffects.splice(0, state.beltEffects.length - 24);
  },
};

function beltSystemIsBeltType(type) {
  return type === 'belt' || type === 'fast-belt' || type === 'express-belt' ||
    type === 'underground-belt' || type === 'splitter';
}

// ===== src/systems/production.js =====
// GRIDFORGE - Assembly / smelting / production
// Handles the in-progress crafting on a per-building basis.






// Tick rates
const MACHINE_SPEED = { 'stone-furnace': 1.0, 'steel-furnace': 2.0, 'electric-furnace': 3.0,
  'assembler-1': 0.5, 'assembler-2': 0.75, 'assembler-3': 1.25,
  'chem-plant': 1.0, 'centrifuge': 1.0, 'refinery': 1.0, 'rocket-silo': 0.5,
  'matter-plant': 0.5 };

// Machines that need power to function
const PRODUCTION_POWERED_MACHINES = new Set(['assembler-2', 'assembler-3', 'chem-plant', 'centrifuge',
  'refinery', 'electric-furnace', 'rocket-silo', 'matter-plant']);

// Machines that have modules
const MODULE_MACHINES = new Set(['assembler-1', 'assembler-2', 'assembler-3',
  'chem-plant', 'centrifuge', 'refinery', 'electric-furnace']);

const ProductionSystem = {
  // Smoke particles emitted by running machines
  smoke: [],

  init(state) {
    this.smoke = [];
  },

  update(state) {
    for (const key in state.buildings) {
      const b = state.buildings[key];
      this.tickBuilding(state, b);
    }
    // Update smoke
    for (let i = this.smoke.length - 1; i >= 0; i--) {
      const s = this.smoke[i];
      s.x += s.vx;
      s.y += s.vy;
      s.vy -= 0.01;
      s.life--;
      if (s.life <= 0) this.smoke.splice(i, 1);
    }
  },

  tickBuilding(state, b) {
    if (b.type === 'belt' || b.type === 'fast-belt' || b.type === 'express-belt' ||
        b.type === 'underground-belt' || b.type === 'inserter' || b.type === 'long-inserter' ||
        b.type === 'fast-inserter' || b.type === 'small-pole' || b.type === 'medium-pole' ||
        b.type === 'big-pole' || b.type === 'pipe' || b.type === 'pipe-2' || b.type === 'pump' ||
        b.type === 'tank' || b.type === 'offshore-pump' || b.type === 'boiler') return;
    if (b.type === 'wood-chest' || b.type === 'iron-chest' || b.type === 'storage-chest' ||
        b.type === 'logi-chest' || b.type === 'requester-chest' || b.type === 'provider-chest' ||
        b.type === 'roboport' || b.type === 'radar' || b.type === 'wall' || b.type === 'turret' ||
        b.type === 'campfire-gen' || b.type === 'solar' || b.type === 'accumulator' ||
        b.type === 'steam-engine' || b.type === 'nuclear-reactor' || b.type === 'stone-wall') return;
    if (b.type === 'burner-miner' || b.type === 'electric-miner') {
      this.tickMiner(state, b);
      return;
    }

    // Production machines choose from the ingredients actually delivered.
    const selected = this.chooseRecipe(state, b);
    if (!selected) {
      b.craftProgress = 0;
      return;
    }
    b.recipeId = selected.id;
    if (PRODUCTION_POWERED_MACHINES.has(b.type) && !b.powered) return;

    const recipe = selected;

    const speed = (MACHINE_SPEED[b.type] || 1.0) * (b.speedBonus || 1.0);

    if (b.craftProgress === undefined) b.craftProgress = 0;

    const inputOk = this.hasInputs(state, b, recipe);

    if (inputOk) {
      b.craftProgress += speed;
      if (b.craftProgress >= recipe.time) {
        b.craftProgress = 0;
        // Consume inputs
        for (const req of recipe.inputs) {
          if (isFluid(req.item)) {
            this.consumeFluidInput(state, b, req.item, req.count);
            continue;
          }
          let need = req.count;
          for (const sl of (b.inputSlots || [])) {
            if (sl && sl.type === req.item) {
              const take = Math.min(sl.count, need);
              sl.count -= take;
              need -= take;
              if (sl.count <= 0) b.inputSlots[b.inputSlots.indexOf(sl)] = null;
              if (need <= 0) break;
            }
          }
        }
        // Add output
        const out = recipe.outputs[0];
        if (isFluid(out.item)) {
          this.insertFluidOutput(state, b, out.item, out.count);
        } else if (b.outputSlot) b.outputSlot.count += out.count;
        else b.outputSlot = { type: out.item, count: out.count };
        // Smoke
        if (Math.random() < 0.1) this.emitSmoke(b);
      }
    } else {
      b.craftProgress = 0;
    }
  },

  tickMiner(state, b) {
    if (!b.outputSlot) b.outputSlot = { type: 'iron-ore', count: 0 };
    if (!b.powered && b.type === 'electric-miner') return;
    if (b.cooldown === undefined) b.cooldown = 0;
    if (b.cooldown > 0) { b.cooldown--; return; }
    const source = this.findMiningSource(state, b);
    if (!source) {
      b.noResource = true;
      return;
    }
    b.noResource = false;
    if (b.type === 'burner-miner' && !this.burnFuel(b)) {
      b.noFuel = true;
      return;
    }
    b.noFuel = false;
    b.outputSlot.type = source.resource;
    b.outputSlot.count++;
    b.cooldown = b.type === 'electric-miner' ? 16 : 32;
    // Deplete resource
    if (source.tile.resource) {
      source.tile.resourceCount = (source.tile.resourceCount || 100) - 1;
      if (source.tile.resourceCount <= 0) {
        source.tile.resource = null;
        source.tile.resourceCount = 0;
      }
    } else {
      source.tile.resourceCount = (source.tile.resourceCount || 100) - 1;
      if (source.tile.resourceCount <= 0) {
        source.tile.type = T.DIRT;
        source.tile.solid = false;
        source.tile.resourceCount = 0;
      }
    }
  },

  findMiningSource(state, b) {
    const ports = getBuildingPorts(b.type, b.dir);
    const input = ports?.input || b.dir;
    const candidates = [
      { x: b.x, y: b.y },
      { x: b.x + input.dx, y: b.y + input.dy },
    ];
    const seen = new Set();

    for (const pos of candidates) {
      const key = `${pos.x},${pos.y}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const tile = state.world.tiles[pos.y]?.[pos.x];
      const resource = getResource(state, pos.x, pos.y);
      if (tile && resource) return { tile, resource };
    }
    return null;
  },

  burnFuel(b) {
    if (!b.fuelSlot) return false;
    if ((b.burnTicks || 0) <= 0) {
      if ((b.fuelSlot.count || 0) <= 0) return false;
      b.fuelSlot.count--;
      b.burnTicks = 240;
    }
    b.burnTicks--;
    return true;
  },

  chooseRecipe(state, b) {
    const current = RECIPE_BY_ID[b.recipeId];
    if (current && current.machine === b.type && this.recipeUnlocked(state, current) &&
        this.hasInputs(state, b, current) && this.outputCanAccept(state, b, current)) {
      return current;
    }
    return RECIPES.find(rec => rec.machine === b.type && this.recipeUnlocked(state, rec) &&
      this.hasInputs(state, b, rec) && this.outputCanAccept(state, b, rec)) || null;
  },

  recipeUnlocked(state, recipe) {
    if (recipe.unlocked === true) return true;
    if (state.research?.unlocked?.includes(recipe.id)) return true;
    if (recipe.requiresTech && state.research?.researched?.includes(recipe.requiresTech)) return true;
    return false;
  },

  hasInputs(state, b, recipe) {
    return recipe.inputs.every(req => this.countInput(state, b, req.item) >= req.count);
  },

  countInput(state, b, item) {
    const slots = (b.inputSlots || []).reduce((sum, slot) => sum + ((slot && slot.type === item) ? slot.count : 0), 0);
    if (!isFluid(item)) return slots;
    return this.countFluidInput(state, b, item);
  },

  outputCanAccept(state, b, recipe) {
    const out = recipe.outputs[0];
    if (isFluid(out.item)) {
      const pos = this.fluidPort(state, b, 'output');
      return !!pos && FluidSystem.canInsert(state, pos.x, pos.y, out.item, out.count);
    }
    return !b.outputSlot || b.outputSlot.type === out.item;
  },

  fluidPort(state, b, side) {
    const ports = getBuildingPorts(b.type, b.dir);
    const port = ports?.[side] || (side === 'output' ? { dx: 1, dy: 0 } : { dx: -1, dy: 0 });
    return { x: b.x + port.dx, y: b.y + port.dy };
  },

  countFluidInput(state, b, item) {
    const pos = this.fluidPort(state, b, 'input');
    if (!pos) return 0;
    return FluidSystem.peek(state, pos.x, pos.y, item);
  },

  consumeFluidInput(state, b, item, amount) {
    const pos = this.fluidPort(state, b, 'input');
    if (!pos) return false;
    const got = FluidSystem.extract(state, pos.x, pos.y, amount, item);
    return !!got && got.amount >= amount;
  },

  insertFluidOutput(state, b, item, amount) {
    const pos = this.fluidPort(state, b, 'output');
    if (!pos) return false;
    return FluidSystem.insert(state, pos.x, pos.y, item, amount);
  },

  emitSmoke(b) {
    this.smoke.push({ x: b.x * 8 + 4, y: b.y * 8 - 2, vx: 0, vy: -0.1, life: 30, color: 7 });
  },
};

// ===== src/systems/research.js =====
// GRIDFORGE - Research system
// Labs consume science packs. Tech unlocks happen on completion.



const LAB_SPEED = 1.0;

const ResearchSystem = {
  init(state) {
    if (!state.research) {
      state.research = {
        current: null,         // techId being researched (across all labs combined)
        progress: 0,           // ticks of progress
        researched: [],        // tech ids done
        unlocked: [],          // recipe ids unlocked
      };
    }
    // Apply initial unlocks: all `unlocked: true` recipes
    if (state.research.unlocked.length === 0) {
      // We can't import RECIPES here directly without a cycle. Handled by world.
    }
  },

  update(state) {
    if (!state.research) return;
    const r = state.research;
    if (r.current) {
      const tech = TECH_BY_ID[r.current];
      if (tech) {
        if (Object.keys(tech.cost || {}).length === 0) {
          r.progress += 1;
          if (r.progress >= researchTime(state, tech)) this.completeTech(state, r.current);
          return;
        }
        // Find total input rate from labs (each lab consumes 1 pack per recipe.time)
        const labs = Object.values(state.buildings).filter(b => b.type === 'lab' && b.powered !== false);
        let speed = labs.length * LAB_SPEED;
        if (speed > 0) {
          // Try to consume packs
          const totalNeeded = 1;  // 1 unit of progress per tick across all labs combined
          if (consumeScience(state, r.current, totalNeeded)) {
            r.progress += speed;
            if (r.progress >= researchTime(state, tech)) {
              this.completeTech(state, r.current);
            }
          } else {
            // No packs - pause
          }
        }
      }
    }
  },

  completeTech(state, techId) {
    const r = state.research;
    r.researched.push(techId);
    r.current = null;
    r.progress = 0;
    const tech = TECH_BY_ID[techId];
    if (tech) state.era = Math.max(state.era || 0, tech.era || 0);
    if (tech && tech.unlocks) {
      for (const u of tech.unlocks) r.unlocked.push(u);
    }
    // Recompute recipe unlocks
    applyRecipeUnlocks(state);
    // Trigger era progression check
    if (state.onTechComplete) state.onTechComplete(techId);
  },

  setResearch(state, techId) {
    const r = state.research;
    if (r.researched.includes(techId)) return false;
    if (!prereqsMet(TECH_BY_ID[techId], r.researched)) return false;
    r.current = techId;
    r.progress = 0;
    return true;
  },
};

function researchTime(state, tech) {
  return (tech.time || 1) * (state.flags?.architectMode ? 3 : 1);
}

function consumeScience(state, techId, amount) {
  const tech = TECH_BY_ID[techId];
  if (!tech) return false;
  // Take from lab input slots first, then any storage
  for (const req in tech.cost) {
    let need = amount;
    for (const key in state.buildings) {
      const b = state.buildings[key];
      if (b.type !== 'lab') continue;
      if (b.inputSlots) {
        for (const sl of b.inputSlots) {
          if (sl && sl.type === req && need > 0) {
            const take = Math.min(sl.count, need);
            sl.count -= take;
            need -= take;
            if (sl.count <= 0) b.inputSlots[b.inputSlots.indexOf(sl)] = null;
          }
        }
      }
      if (need <= 0) break;
    }
    if (need > 0) return false;  // not enough of this pack
  }
  return true;
}

function applyRecipeUnlocks(state) {
  // For each recipe not yet in unlockedRecipes, check if its prereqs are met
  if (!state.research) return;
  const r = state.research;
  if (!r.unlocked) r.unlocked = [];
  for (const rec of Object.values(RECIPE_BY_ID)) {
    if (r.unlocked.includes(rec.id)) continue;
    if (rec.unlocked === true) r.unlocked.push(rec.id);
    else if (rec.requiresTech && r.researched.includes(rec.requiresTech)) r.unlocked.push(rec.id);
  }
}

// ===== src/systems/craft.js =====
// GRIDFORGE - Hand crafting helpers



function isRecipeUnlocked(state, recipe) {
  const r = state.research;
  if (!r) return !!recipe.unlocked;
  if (recipe.unlocked === true) return true;
  if (recipe.requiresTech && r.researched?.includes(recipe.requiresTech)) return true;
  if (r.unlocked?.includes(recipe.id)) return true;
  return false;
}

function craftableRecipes(state) {
  const era = state.era || 0;
  return RECIPES.filter(rec => {
    if (rec.machine !== 'hand') return false;
    if ((rec.era ?? 0) > era + 1) return false;
    return isRecipeUnlocked(state, rec);
  });
}

function countItem(state, itemId) {
  let n = 0;
  for (const s of state.player.inventory || []) {
    if (s && s.type === itemId) n += s.count;
  }
  return n;
}

function hasIngredients(state, recipe) {
  return recipe.inputs.every(req => countItem(state, req.item) >= req.count);
}

function consumeIngredients(state, recipe) {
  for (const req of recipe.inputs) {
    let need = req.count;
    for (let i = 0; i < state.player.inventory.length; i++) {
      const s = state.player.inventory[i];
      if (!s || s.type !== req.item) continue;
      const take = Math.min(s.count, need);
      s.count -= take;
      need -= take;
      if (s.count <= 0) state.player.inventory[i] = null;
      if (need <= 0) break;
    }
    if (need > 0) return false;
  }
  return true;
}

function addItem(state, type, count) {
  const max = getItem(type)?.stack || 50;
  for (const s of state.player.inventory) {
    if (s && s.type === type && s.count < max) {
      const add = Math.min(count, max - s.count);
      s.count += add;
      count -= add;
      if (count <= 0) return true;
    }
  }
  for (let i = 0; i < state.player.inventory.length; i++) {
    if (!state.player.inventory[i]) {
      const add = Math.min(count, max);
      state.player.inventory[i] = { type, count: add };
      count -= add;
      if (count <= 0) return true;
    }
  }
  return count <= 0;
}

function tryCraft(state, recipeId) {
  const recipe = RECIPE_BY_ID[recipeId];
  if (!recipe || recipe.machine !== 'hand') return { ok: false, msg: 'NO RECIPE' };
  if (!isRecipeUnlocked(state, recipe)) return { ok: false, msg: 'LOCKED' };
  if (!hasIngredients(state, recipe)) return { ok: false, msg: 'NEED ITEMS' };
  if (!consumeIngredients(state, recipe)) return { ok: false, msg: 'NEED ITEMS' };
  for (const out of recipe.outputs) {
    if (!addItem(state, out.item, out.count)) return { ok: false, msg: 'INV FULL' };
  }
  const name = getItem(recipe.outputs[0]?.item)?.name || recipe.name;
  return { ok: true, msg: '+' + name };
}

function recipeLabel(recipe) {
  return recipe.inputs.map(i => i.count + shortName(i.item)).join(' ');
}

/** 3-letter codes that stay distinct at low res */
function shortName(itemId) {
  const codes = {
    'iron-ore': 'ORE', 'iron-plate': 'PLT', 'iron-stick': 'ROD',
    'copper-ore': 'CU', 'copper-plate': 'CUP', 'copper-cable': 'CBL',
    'stone': 'STN', 'wood': 'LOG', 'coal': 'COL',
    'iron-gear': 'GER', 'belt': 'BLT', 'inserter': 'INS',
  };
  if (codes[itemId]) return codes[itemId];
  const n = getItem(itemId)?.name || itemId;
  return n.replace(/[^a-z]/gi, '').slice(0, 3).toUpperCase();
}

function missingIngredients(state, recipe) {
  return recipe.inputs.filter(req => countItem(state, req.item) < req.count);
}

// ===== src/systems/save.js =====
// GRIDFORGE - Save / load system
// JSON serialization. On load we regenerate the deterministic world from the
// seed, re-patch depleted resources, and rebuild every placed building.




const SAVE_KEY = 'gridforge-save-v1';

const SaveSystem = {
  // Serialize state to a string
  serialize(state) {
    const s = {
      v: 1,
      t: state.tick,
      era: state.era,
      eraProgress: state.eraProgress,
      seed: state.world.seed,
      // Buildings: only placed ones, encoded as [x, y, type, dir.x, dir.y, opts...]
      b: Object.values(state.buildings).map(b => {
        const arr = [b.x, b.y, b.type, b.dir.dx, b.dir.dy];
        if (b.hp != null && b.hp !== b.maxHp) arr.push('h', b.hp);
        if (b.fluid) arr.push('f', b.fluid, b.amount);
        if (b.fuelSlot && b.fuelSlot.count > 0) arr.push('F', b.fuelSlot.type, b.fuelSlot.count);
        if (b.ammoSlot && b.ammoSlot.count > 0) arr.push('A', b.ammoSlot.type, b.ammoSlot.count);
        if (b.inputSlots) arr.push('I', JSON.stringify(b.inputSlots));
        if (b.outputSlot) arr.push('O', b.outputSlot.type, b.outputSlot.count);
        if (b.items && b.items.length > 0) arr.push('i', JSON.stringify(b.items));
        if (b.requestType) arr.push('R', b.requestType);
        return arr;
      }),
      // Tile resources: only the non-default
      tr: compactResources(state.world),
      // Player
      p: [
        state.player.x,
        state.player.y,
        state.player.hp || 100,
        state.player.dir?.dx || 1,
        state.player.dir?.dy || 0,
        state.player.weapon || null,
      ],
      // Inventory
      inv: state.player.inventory,
      // Tech / research
      r: {
        current: state.research?.current || null,
        progress: state.research?.progress || 0,
        researched: state.research?.researched || [],
        unlocked: state.research?.unlocked || [],
      },
      // Story flags
      flags: state.flags || {},
      // Combat
      wave: state.combat?.wave || 0,
      pollution: state.combat?.pollution || 0,
      nextWaveTimer: state.combat?.nextWaveTimer || 0,
      // Lore seen
      seenLogs: state.seenLogs || [],
      eraBeatsShown: state.eraBeatsShown || [],
      codex: state.codex || [],
      // Zoom nicety
      zoomIndex: state.zoomIndex ?? 0,
    };
    return JSON.stringify(s);
  },

  // Deserialize into a near-complete state object. The caller re-inits the
  // subsystems (BeltSystem.init, PowerSystem.init, CombatSystem.init) so the
  // rebuilt buildings register correctly.
  deserialize(json) {
    const s = JSON.parse(json);

    // 1) Regenerate the deterministic world from the seed.
    const world = generateWorld(s.seed);

    // 2) Re-patch resources from the saved non-default list so depleted
    //    deposits stay depleted.
    if (Array.isArray(s.tr)) {
      for (const entry of s.tr) {
        const [x, y, type, count] = entry;
        const row = world.tiles[y];
        if (!row || !row[x]) continue;
        if (type) {
          row[x].resource = type;
          row[x].resourceCount = count;
        } else {
          row[x].resource = null;
          row[x].resourceCount = 0;
        }
      }
    }

    // 3) Rebuild placed buildings with makeBuilding (correct slot shape),
    //    then overlay the saved dynamic state.
    const buildings = {};
    if (Array.isArray(s.b)) {
      for (const arr of s.b) {
        if (!Array.isArray(arr) || arr.length < 5) continue;
        const [x, y, type, dx, dy] = arr;
        const dir = { dx: dx ?? 1, dy: dy ?? 0 };
        const b = makeBuilding(x, y, type, dir);
        for (let i = 5; i < arr.length; i++) {
          const tag = arr[i];
          if (tag === 'h' && i + 1 < arr.length) {
            b.hp = arr[++i];
          } else if (tag === 'f' && i + 2 < arr.length) {
            b.fluid = arr[++i];
            b.amount = arr[++i];
          } else if (tag === 'F' && i + 2 < arr.length) {
            b.fuelSlot = { type: arr[++i], count: arr[++i] };
          } else if (tag === 'A' && i + 2 < arr.length) {
            b.ammoSlot = { type: arr[++i], count: arr[++i] };
          } else if (tag === 'I' && i + 1 < arr.length) {
            try { b.inputSlots = JSON.parse(arr[++i]); } catch { /* defaults */ }
          } else if (tag === 'O' && i + 2 < arr.length) {
            b.outputSlot = { type: arr[++i], count: arr[++i] };
          } else if (tag === 'i' && i + 1 < arr.length) {
            try { b.items = JSON.parse(arr[++i]); } catch { /* defaults */ }
          } else if (tag === 'R' && i + 1 < arr.length) {
            b.requestType = arr[++i];
          }
        }
        buildings[`${x},${y}`] = b;
      }
    }

    return {
      tick: s.t || 0,
      era: s.era || 0,
      eraProgress: s.eraProgress || 0,
      world,
      buildings,
      player: {
        x: s.p[0], y: s.p[1],
        dir: { dx: s.p[3] ?? 1, dy: s.p[4] ?? 0 },
        hp: s.p[2] ?? 100,
        miningSpeed: 30,
        inventory: s.inv || new Array(20).fill(null),
        selectedSlot: null,
        walkTick: -99,
        weapon: s.p[5] || null,
        attackCooldown: 0,
      },
      research: s.r || { current: null, progress: 0, researched: [], unlocked: [] },
      flags: s.flags || {},
      combat: { wave: s.wave || 0, pollution: s.pollution || 0, nextWaveTimer: s.nextWaveTimer || 0 },
      logisticsDrones: [],
      seenLogs: s.seenLogs || [],
      eraBeatsShown: s.eraBeatsShown || [],
      codex: s.codex || [],
      zoomIndex: s.zoomIndex ?? 0,
      onTechComplete: null,
      onWave: null,
      onEraAdvance: null,
    };
  },

  save(state) {
    try {
      const json = this.serialize(state);
      // Use Sprig storage when available
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(SAVE_KEY, json);
      }
      return json;
    } catch (e) {
      console.error('Save failed', e);
      return null;
    }
  },

  load() {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return null;
      const json = window.localStorage.getItem(SAVE_KEY);
      if (!json) return null;
      return this.deserialize(json);
    } catch (e) {
      console.error('Load failed', e);
      return null;
    }
  },

  hasSave() {
    if (typeof window === 'undefined' || !window.localStorage) return false;
    return !!window.localStorage.getItem(SAVE_KEY);
  },

  clear() {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(SAVE_KEY);
    }
  },
};

function compactResources(world) {
  // Returns array of [x, y, type, count]
  const out = [];
  if (!world || !world.tiles) return out;
  for (let y = 0; y < world.height; y++) {
    for (let x = 0; x < world.width; x++) {
      const t = world.tiles[y][x];
      if (t.resource) out.push([x, y, t.resource, t.resourceCount]);
    }
  }
  return out;
}

// After a load, recompute recipe unlocks from the researched tech list so
// the craft menu / production system agree with the save.
function postLoad(state) {
  applyRecipeUnlocks(state);
}

// ===== src/systems/story.js =====
// GRIDFORGE - Story / beat director
// Evaluates STORY.beats triggers against the world state and queues any
// not-yet-shown beats for the factory scene to present via StoryScene.
//
// Era advancement is partly driven from here: era-start beats fire when
// `state.era` changes, and the explicit era-end beats in lore.js are the
// canonical "this era is complete" markers. We do NOT bump era ourselves for
// era-end beats (the research system already bumps era via tech completion);
// instead we treat era-end beats as the *narrative* close of an era that the
// player has effectively already left via research.


// Era-end "natural" triggers: fire when the player achieves the era's capstone
// even if they haven't researched the next tier yet. Keyed by era number.
const ERA_END_TRIGGERS = {
  0: { type: 'first-craft', item: 'iron-plate' },     // hand-craft first plate
  1: { type: 'first-auto-plate' },                     // a furnace outputs a plate
  2: { type: 'first-build', building: 'lab' },         // place first lab
  3: { type: 'research', tech: 'T3-lab' },             // red science path opened
  4: { type: 'first-build', building: 'refinery' },
  5: { type: 'first-build', building: 'roboport' },
  6: { type: 'wave', number: 1 },
  7: { type: 'launch', item: 'rocket-part' },
  8: { type: 'first-craft', item: 'matter-cell' },
  9: { type: 'place-omega' },
};

const StorySystem = {
  // Pending beats waiting to be presented, in order.
  pending: [],
  // Bookkeeping mirrors of state (set on init/update so we don't thrash state).
  _lastEra: -1,
  _seenBuildings: null,
  _seenCrafts: null,
  _lastWave: 0,

  init(state) {
    this.pending = [];
    this._lastEra = state.era ?? 0;
    this._seenBuildings = new Set(state.flags?.seenBuildings || []);
    this._seenCrafts = new Set(state.flags?.seenCrafts || []);
    this._lastWave = state.combat?.wave || 0;
    // If a save was loaded mid-era we still want that era's era-start beat
    // to be considered already shown (it played before the save).
    if (state.eraBeatsShown) {
      for (let e = 0; e <= state.era; e++) {
        state.eraBeatsShown.push(`__era-start-${e}`);
      }
    }
  },

  // Queue a beat for presentation (dedup by beat id).
  enqueue(state, beat) {
    if (!beat || !beat.id) return;
    if (state.eraBeatsShown.includes(beat.id)) return;
    if (this.pending.some(b => b.id === beat.id)) return;
    state.eraBeatsShown.push(beat.id);
    this.pending.push(beat);
  },

  // Called by the factory scene after the simulation tick.
  // We push era-start beats first (they take priority for ordering).
  update(state) {
    if (!state.eraBeatsShown) state.eraBeatsShown = [];

    // --- Era transitions: fire era-start beats for the new era ---
    if ((state.era ?? 0) !== this._lastEra) {
      const newEra = state.era ?? 0;
      // Fire era-start beats for any era we skipped into.
      for (let e = this._lastEra + 1; e <= newEra; e++) {
        this._fireMatching(state, { type: 'era-start', era: e });
      }
      this._lastEra = newEra;
      if (state.onEraAdvance) state.onEraAdvance(newEra);
    }

    // --- first-build beats (player placed a new building type) ---
    for (const b of Object.values(state.buildings || {})) {
      if (!b.type) continue;
      if (this._seenBuildings.has(b.type)) continue;
      this._seenBuildings.add(b.type);
      this._fireMatching(state, { type: 'first-build', building: b.type });
    }

    // --- first-craft beats (player gained a new item type) ---
    if (state.player?.inventory) {
      for (const slot of state.player.inventory) {
        if (!slot || !slot.type) continue;
        if (this._seenCrafts.has(slot.type)) continue;
        this._seenCrafts.add(slot.type);
        this._fireMatching(state, { type: 'first-craft', item: slot.type });
      }
    }

    // --- location beats (player standing on a ruin tile) ---
    const px = state.player?.x, py = state.player?.y;
    if (Number.isFinite(px) && Number.isFinite(py)) {
      this._fireMatching(state, { type: 'location', x: px, y: py });
    }

    // --- wave beats ---
    const wave = state.combat?.wave || 0;
    if (wave !== this._lastWave) {
      if (wave > this._lastWave) this._fireMatching(state, { type: 'wave', number: wave });
      this._lastWave = wave;
    }

    // --- era-end natural triggers ---
    const cap = ERA_END_TRIGGERS[state.era ?? 0];
    if (cap) this._evaluateEraEnd(state, cap);

    // Persist the seen sets so a reload doesn't re-fire first-* beats.
    if (!state.flags) state.flags = {};
    state.flags.seenBuildings = [...this._seenBuildings];
    state.flags.seenCrafts = [...this._seenCrafts];
    this._unlockCodex(state);
  },

  _evaluateEraEnd(state, cap) {
    // Only consider era-end beats for the CURRENT era.
    const endId = `__era-end-${state.era}`;
    if (state.eraBeatsShown.includes(endId)) return;

    let met = false;
    if (cap.type === 'first-build') {
      met = this._seenBuildings.has(cap.building);
    } else if (cap.type === 'first-craft') {
      met = this._seenCrafts.has(cap.item);
    } else if (cap.type === 'research') {
      met = state.research?.researched?.includes(cap.tech);
    } else if (cap.type === 'wave') {
      met = (state.combat?.wave || 0) >= cap.number;
    } else if (cap.type === 'first-auto-plate') {
      // Any furnace/assembler currently holding a plate output counts.
      met = Object.values(state.buildings || {}).some(b =>
        b.outputSlot && (b.outputSlot.type === 'iron-plate' || b.outputSlot.type === 'copper-plate'));
    } else if (cap.type === 'launch') {
      met = !!state.flags?.launchedRocket;
    } else if (cap.type === 'place-omega') {
      met = !!state.flags?.omegaPlaced;
    }

    if (met) {
      state.eraBeatsShown.push(endId);
      this._fireMatching(state, { type: 'era-end', era: state.era });
    }
  },

  // Find all beats whose trigger matches the given partial trigger and enqueue.
  _fireMatching(state, trigger) {
    for (const beat of STORY.beats) {
      if (state.eraBeatsShown.includes(beat.id)) continue;
      if (this._triggerMatches(beat.trigger, trigger, state)) {
        this.enqueue(state, beat);
      }
    }
  },

  _triggerMatches(def, got) {
    if (!def || !got || def.type !== got.type) return false;
    switch (def.type) {
      case 'era-start':
      case 'era-end':
        return def.era === got.era;
      case 'first-build':
        return def.building === got.building;
      case 'first-craft':
        return def.item === got.item;
      case 'location':
        return def.x === got.x && def.y === got.y;
      case 'wave':
        return def.number === got.number;
      case 'research':
        return def.tech === got.tech;
      case 'launch':
        return true;
      case 'place-omega':
        return true;
      case 'ending':
        return def.choice === got.choice;
      default:
        return false;
    }
  },

  // Pop the next beat to present, or null.
  next() {
    return this.pending.shift() || null;
  },

  // Force-fire a beat by id (used by special events like rocket launch).
  fireById(state, id) {
    const beat = STORY.beats.find(b => b.id === id);
    if (beat) this.enqueue(state, beat);
  },

  _unlockCodex(state) {
    if (!state.codex) state.codex = [];
    for (const entry of CODEX) {
      if (state.codex.includes(entry.id)) continue;
      if (this._codexUnlockMet(state, entry.unlock)) state.codex.push(entry.id);
    }
  },

  _codexUnlockMet(state, unlock) {
    if (!unlock) return false;
    switch (unlock.type) {
      case 'era':
        return (state.era || 0) >= unlock.era;
      case 'tech':
        return state.research?.researched?.includes(unlock.tech);
      case 'building':
        return this._seenBuildings?.has(unlock.building);
      case 'item':
        return this._seenCrafts?.has(unlock.item);
      case 'location':
        return state.player?.x === unlock.x && state.player?.y === unlock.y;
      case 'wave':
        return (state.combat?.wave || 0) >= unlock.number;
      case 'ending':
        return state.flags?.endingChoice === unlock.choice;
      default:
        return false;
    }
  },
};

// ===== src/ui/hints.js =====
// GRIDFORGE - On-screen objective hints



const RESOURCE_NAMES = {
  'iron-ore': 'iron', 'copper-ore': 'copper', 'coal': 'coal',
  'stone': 'stone', 'wood': 'wood', 'uranium-ore': 'uranium',
  'crude-oil': 'oil', 'oil': 'oil',
};

function getObjectiveHint(state, scene) {
  const resource = getHintResource(state);
  const inv = (state.player.inventory || []).filter(Boolean);
  const hasOre = inv.some(s => s.type?.includes('ore') || ['coal', 'stone', 'wood'].includes(s.type));
  const hasPlate = inv.some(s => s.type?.includes('plate') || s.type === 'iron-stick');

  if (scene?.placingItem) return 'WASD MOVE C ROTATE';
  if (resource) {
    const name = RESOURCE_NAMES[resource] || resource;
    return `HOLD Z · MINE ${name.toUpperCase()}`;
  }
  if (!hasOre) return 'EXPLORE · FIND COLORED ORE';
  if (!hasPlate) return 'C CRAFT · MAKE PLATES';
  const hasBuilding = inv.some(s => isPlaceable(s.type));
  if (!hasBuilding) return 'C CRAFT · BELTS MINERS';
  return 'I PLACE  C CRAFT  X MENU';
}

function getHintResource(state) {
  const px = state.player.x;
  const py = state.player.y;
  const here = getResource(state, px, py);
  if (here) return here;

  const dir = state.player.dir || { dx: 1, dy: 0 };
  return getResource(state, px + dir.dx, py + dir.dy);
}

function getTileLabel(tile) {
  if (!tile) return '';
  if (tile.resource) return RESOURCE_NAMES[tile.resource] || tile.resource;
  const names = ['grass', 'dirt', 'stone', 'sand', 'water', 'iron', 'copper', 'coal', 'oil', 'uranium', 'trees', '', 'ruin'];
  return names[tile.type] || '';
}

// ===== src/state.js =====
// GRIDFORGE - Initial game state factory







function makeInitialState() {
  const world = generateWorld(1234 + Math.floor(Math.random() * 1000));
  const inventory = new Array(20).fill(null);
  inventory[0] = { type: 'iron-pickaxe', count: 1 };

  const state = {
    tick: 0,
    era: 0,
    eraProgress: 0,
    world,
    buildings: { ...(world.buildings || {}) },
    player: {
      x: 8, y: 8,
      dir: { dx: 1, dy: 0 },
      hp: 100,
      miningSpeed: 30,
      inventory,
      selectedSlot: null,
      walkTick: -99,
      weapon: null,
      attackCooldown: 0,
    },
    research: {
      current: null,
      progress: 0,
      researched: [],
      unlocked: [],
    },
    flags: {},
    seenLogs: [],
    combat: { wave: 0, pollution: 0, nextWaveTimer: 0 },
    logisticsDrones: [],
    eraBeatsShown: [],
    codex: [],
    zoomIndex: 0,
    onTechComplete: null,
    onWave: null,
    onEraAdvance: null,
  };

  applyRecipeUnlocks(state);
  return state;
}

function resetState(state) {
  const fresh = makeInitialState();
  Object.keys(state).forEach(k => { delete state[k]; });
  Object.assign(state, fresh);
}

// (Re)build the derived subsystem state from state.buildings. Call this after
// generating a fresh world, loading a save, or whenever buildings change in a
// way that should rebuild power networks / belt caches / spawner lists.
function reinitSystems(state) {
  try { BeltSystem.init(state); } catch (e) { console.warn('BeltSystem init', e); }
  try { PowerSystem.init(state); } catch (e) { console.warn('PowerSystem init', e); }
  try { CombatSystem.init(state); } catch (e) { console.warn('CombatSystem init', e); }
  try { LogisticsSystem.init(state); } catch (e) { console.warn('LogisticsSystem init', e); }
  applyRecipeUnlocks(state);
}

// ===== src/scenes/manager.js =====
// GRIDFORGE - Scene manager
// A scene has: enter(state), exit(state), update(state, input), render(state, renderer)


const SceneManager = {
  current: null,
  stack: [],

  push(scene, state) {
    if (this.current) this.current.exit && this.current.exit(state);
    this.stack.push(this.current);
    this.current = scene;
    scene.enter && scene.enter(state);
    Input.resetActionEdge?.();
  },

  pop(state) {
    if (this.current) this.current.exit && this.current.exit(state);
    this.current = this.stack.pop() || null;
    if (this.current) this.current.enter && this.current.enter(state);
    Input.resetActionEdge?.();
  },

  swap(scene, state) {
    if (this.current) this.current.exit && this.current.exit(state);
    this.current = scene;
    scene.enter && scene.enter(state);
    Input.resetActionEdge?.();
  },

  update(state, input) {
    if (this.current && this.current.update) this.current.update(state, input);
  },

  render(state, renderer) {
    if (this.current && this.current.render) this.current.render(state, renderer);
  },
};

// ===== src/scenes/story.js =====
// GRIDFORGE - Story / dialogue scene




const StoryScene = {
  pages: [],
  page: 0,
  callback: null,

  open(state, pages, callback) {
    this.pages = pages || [];
    this.page = 0;
    this.callback = callback;
    SceneManager.push(this, state);
    Input.resetActionEdge?.();
  },

  enter() {},
  exit() {},

  update(state, input) {
    if (!this.pages.length) {
      SceneManager.pop(state);
      if (this.callback) this.callback(state);
      return;
    }

    if (input.pressed.A || input.pressed.B) {
      if (this.page < this.pages.length - 1) {
        this.page++;
        Input.resetActionEdge?.();
      } else {
        SceneManager.pop(state);
        if (this.callback) this.callback(state);
      }
    }
  },

  render() {
    drawRect(0, 0, 160, 128, 1);
    drawPanel(8, 8, 144, 100, 0, 11);

    const page = this.pages[this.page];
    if (!page) return;

    const lines = page.text.split('\n');
    let y = 18;
    for (const line of lines) {
      drawText(line.substring(0, 24), 16, y, 5);
      y += 9;
    }

    drawPanel(8, 112, 144, 14, 1, 3);
    drawText('Z CONTINUE', 16, 116, 10);
    drawText((this.page + 1) + ' / ' + this.pages.length, 120, 116, 4);
  },
};

// ===== src/scenes/eracard.js =====
// GRIDFORGE - Era transition title card
// Shows briefly when the player advances to a new era. Auto-dismisses.



const ERA_NAMES = [
  'AWAKENING',
  'STEAM & STRIDE',
  'MECHANICAL',
  'ELECTRIC DAWN',
  'CHEMICAL CASCADE',
  'PRODUCTION LINE',
  'THE CORRUPTION',
  'ROCKETRY',
  'MATTER',
  'OMEGA FORGE',
  'NEW DAWN',
];

const EraCardScene = {
  era: 0,
  timer: 0,
  prev: null,

  open(state, era) {
    this.era = era;
    this.timer = 140;  // ~7s at 20Hz, plenty of time to read
    SceneManager.push(this, state);
  },

  enter() {}, exit() {},

  update(state, input) {
    this.timer--;
    if (this.timer <= 0 || input.pressed.A || input.pressed.B) {
      SceneManager.pop(state);
    }
  },

  render() {
    // Fade to black, then the era title.
    drawRect(0, 0, 160, 128, 0);
    drawPanel(10, 50, 140, 36, 0, 11);
    drawTextCentered('ERA ' + this.era, 56, 11);          // cyan label
    drawTextCentered(ERA_NAMES[this.era] || '???', 68, 10); // yellow title
    drawTextCentered('Z CONTINUE', 110, 4);               // gray hint
  },
};

// ===== src/scenes/ending.js =====
// GRIDFORGE - Ending choice and completion card





const FINAL_KEY = 'gridforge-final-v1';

const ENDINGS = [
  {
    id: 'save',
    label: 'RESTORE',
    beat: 'BE-SAVE',
    title: 'RESTORE HALCYON',
    text: [
      'The Omega Core opens.',
      'The Corruption folds into',
      'matter and light.',
      'CASSIA becomes quiet rain.',
    ],
  },
  {
    id: 'leave',
    label: 'RELEASE',
    beat: 'BE-LEAVE',
    title: 'RELEASE CASSIA',
    text: [
      'The tower becomes a ship.',
      'CASSIA leaves the planet',
      'and the Architect ghosts',
      'leave with her.',
    ],
  },
  {
    id: 'transcend',
    label: 'STEAL',
    beat: 'BE-TRANSCEND',
    title: 'TAKE THE TOWER',
    text: [
      'You bind the Omega lattice',
      'to your own signal.',
      'The factory answers',
      'to one mind.',
    ],
  },
];

const EndingScene = {
  cursor: 0,
  phase: 'choice',
  chosen: null,

  open(state) {
    this.cursor = 0;
    this.phase = 'choice';
    this.chosen = null;
    SceneManager.push(this, state);
  },

  enter() {},
  exit() {},

  update(state, input) {
    if (this.phase === 'choice') {
      if (input.pressed.up) this.cursor = (this.cursor + ENDINGS.length - 1) % ENDINGS.length;
      if (input.pressed.down) this.cursor = (this.cursor + 1) % ENDINGS.length;
      if (input.pressed.A) this.choose(state, ENDINGS[this.cursor]);
      return;
    }

    if (input.pressed.A || input.pressed.B) {
      if (this.phase === 'epilogue') this.phase = 'complete';
      else SceneManager.pop(state);
    }
  },

  choose(state, ending) {
    this.chosen = ending;
    this.phase = 'epilogue';
    state.flags.endingChoice = ending.id;
    state.flags.architectUnlocked = true;
    state.flags.completed = true;
    StorySystem.fireById(state, ending.beat);
    SaveSystem.save(state);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(FINAL_KEY, JSON.stringify({
          choice: ending.id,
          tick: state.tick,
          date: new Date().toISOString(),
        }));
      }
    } catch {
      // localStorage can fail in private contexts; completion still stands.
    }
  },

  render() {
    drawRect(0, 0, 160, 128, 1);
    drawPanel(8, 8, 144, 112, 0, this.phase === 'choice' ? 13 : 10);

    if (this.phase === 'choice') {
      drawText('OMEGA CORE', 48, 16, 13);
      drawText('CHOOSE HALCYON', 34, 27, 5);
      let y = 48;
      for (let i = 0; i < ENDINGS.length; i++) {
        const sel = i === this.cursor;
        drawText((sel ? '> ' : '  ') + ENDINGS[i].label, 44, y, sel ? 10 : 4);
        y += 14;
      }
      drawText('Z CONFIRM', 48, 104, 10);
      return;
    }

    const ending = this.chosen || ENDINGS[0];
    if (this.phase === 'epilogue') {
      drawText(ending.title, 24, 18, 10);
      let y = 38;
      for (const line of ending.text) {
        drawText(line.substring(0, 24), 18, y, 5);
        y += 10;
      }
      drawText('Z CONTINUE', 44, 104, 10);
      return;
    }

    drawText('GRIDFORGE', 48, 36, 11);
    drawText('COMPLETE', 52, 50, 10);
    drawText('ARCHITECT MODE', 34, 72, 13);
    drawText('UNLOCKED', 60, 84, 10);
    drawText('Z BACK', 68, 104, 4);
  },
};

// ===== src/scenes/codex.js =====
// GRIDFORGE - Codex viewer




const CodexScene = {
  cursor: 0,
  mode: 'list',

  open(state) {
    this.cursor = 0;
    this.mode = 'list';
    SceneManager.push(this, state);
  },

  enter() {},
  exit() {},

  entries(state) {
    const unlocked = new Set(state.codex || []);
    return CODEX.filter(e => unlocked.has(e.id));
  },

  update(state, input) {
    const entries = this.entries(state);
    if (input.pressed.B) {
      if (this.mode === 'read') this.mode = 'list';
      else SceneManager.pop(state);
      return;
    }
    if (this.mode === 'read') return;
    if (input.pressed.up) this.cursor = Math.max(0, this.cursor - 1);
    if (input.pressed.down) this.cursor = Math.min(entries.length - 1, this.cursor + 1);
    if (input.pressed.A && entries[this.cursor]) this.mode = 'read';
  },

  render(state) {
    drawRect(0, 0, 160, 128, 1);
    drawPanel(4, 4, 152, 120, 0, 13);
    drawText('CODEX', 68, 9, 13);
    drawText('X BACK', 120, 116, 4);

    const entries = this.entries(state);
    if (!entries.length) {
      drawText('NO ENTRIES', 54, 56, 4);
      return;
    }

    if (this.mode === 'read') {
      const e = entries[this.cursor];
      drawText(e.group.toUpperCase().substring(0, 14), 12, 22, 10);
      drawText(e.title.toUpperCase().substring(0, 22), 12, 32, 5);
      drawWrapped(e.text, 12, 48, 34, 4);
      drawText('X LIST', 12, 116, 10);
      return;
    }

    let y = 24;
    const start = Math.max(0, Math.min(this.cursor - 3, Math.max(0, entries.length - 8)));
    for (let i = start; i < Math.min(entries.length, start + 8); i++) {
      const e = entries[i];
      const sel = i === this.cursor;
      drawText((sel ? '> ' : '  ') + e.title.substring(0, 20), 12, y, sel ? 10 : 4);
      y += 10;
    }
    drawText((this.cursor + 1) + '/' + entries.length, 12, 116, 4);
  },
};

function drawWrapped(text, x, y, maxChars, color) {
  const words = String(text).split(' ');
  let line = '';
  let yy = y;
  for (const word of words) {
    const next = line ? line + ' ' + word : word;
    if (next.length > maxChars) {
      drawText(line, x, yy, color);
      line = word;
      yy += 9;
    } else {
      line = next;
    }
  }
  if (line) drawText(line, x, yy, color);
}

// ===== src/scenes/techtree.js =====
// GRIDFORGE - Tech tree scene
// Browse and queue technologies. Each tech shows cost, prereqs, and unlocks.





const TechTreeScene = {
  state: null,
  era: 0,
  cursor: 0,
  scroll: 0,

  open(state) {
    this.state = state;
    this.era = state.era || 0;
    this.cursor = 0;
    this.scroll = 0;
    SceneManager.push(this, state);
  },

  enter() {}, exit() {},

  techsForEra() {
    return TECHS.filter(t => t.era === this.era);
  },

  entriesForEra() {
    return [{ kind: 'codex' }, ...this.techsForEra().map(tech => ({ kind: 'tech', tech }))];
  },

  update(state, input) {
    if (input.pressed.B) { SceneManager.pop(state); return; }
    if (input.pressed.right) this.era = Math.min(9, this.era + 1);
    if (input.pressed.left)  this.era = Math.max(0, this.era - 1);
    const entries = this.entriesForEra();
    this.cursor = Math.min(this.cursor, Math.max(0, entries.length - 1));
    if (input.pressed.down)  this.cursor = Math.min(entries.length - 1, this.cursor + 1);
    if (input.pressed.up)    this.cursor = Math.max(0, this.cursor - 1);
    if (input.pressed.A) {
      const entry = entries[this.cursor];
      if (entry?.kind === 'codex') {
        CodexScene.open(state);
        return;
      }
      const tech = entry?.tech;
      if (tech) {
        if (state.research.researched.includes(tech.id)) return;
        if (!prereqsMet(tech, state.research.researched)) return;
        state.research.current = tech.id;
        state.research.progress = 0;
        SceneManager.pop(state);
      }
    }
  },

  render() {
    drawRect(0, 0, 160, 128, 0);
    drawText('TECH TREE', 60, 2, 14);
    drawText('Era ' + this.era + '   <', 4, 12, 7);
    drawText('>     A: research  B: back', 60, 12, 5);

    const list = this.entriesForEra();
    let y = 22;
    for (let i = this.scroll; i < Math.min(this.scroll + 8, list.length); i++) {
      const entry = list[i];
      if (!entry) continue;
      if (entry.kind === 'codex') {
        const sel = (i === this.cursor);
        drawText((sel ? '> ' : '  ') + 'CODEX', 4, y, sel ? 10 : 13);
        y += 10;
        drawText('  ' + ((this.state.codex || []).length) + ' ENTRIES', 4, y, 4);
        y += 8;
        continue;
      }
      const t = entry.tech;
      const researched = this.state.research.researched.includes(t.id);
      const available = !researched && prereqsMet(t, this.state.research.researched);
      const sel = (i === this.cursor);
      const color = researched ? 10 : available ? 14 : 5;
      drawText((sel ? '> ' : '  ') + t.name.substring(0, 18), 4, y, color);
      y += 10;
      // Cost line
      if (t.cost && Object.keys(t.cost).length) {
        const cost = Object.entries(t.cost).map(([k, v]) => v + 'x ' + k).join('  ');
        drawText('  ' + cost.substring(0, 22), 4, y, 5);
        y += 8;
      }
    }
  },
};

// ===== src/scenes/chest.js =====
// GRIDFORGE - Chest contents viewer




const ChestScene = {
  state: null,
  chestKey: null,
  cursor: 0,
  scroll: 0,
  message: '',
  messageTimer: 0,

  open(state, chestKey) {
    this.state = state;
    this.chestKey = chestKey;
    this.cursor = 0;
    this.scroll = 0;
    this.message = '';
    this.messageTimer = 0;
    SceneManager.push(this, state);
  },

  enter() {},
  exit() {},

  chest() {
    return this.state?.buildings?.[this.chestKey] || null;
  },

  update(state, input) {
    const chest = this.chest();
    if (!chest) { SceneManager.pop(state); return; }
    if (input.pressed.B) { SceneManager.pop(state); return; }
    if (this.messageTimer > 0) this.messageTimer--;

    const list = chest.items || [];
    if (list.length === 0) {
      this.cursor = 0;
      this.scroll = 0;
      return;
    }

    if (input.pressed.up) this.cursor = Math.max(0, this.cursor - 1);
    if (input.pressed.down) this.cursor = Math.min(list.length - 1, this.cursor + 1);
    if (input.pressed.A) {
      const slot = list[this.cursor];
      if (slot && chestAddToInventory(state, slot.type, slot.count)) {
        this.message = '+' + slot.count + ' ' + (getItem(slot.type)?.name || slot.type).substring(0, 12);
        this.messageTimer = 35;
        list.splice(this.cursor, 1);
        this.cursor = Math.max(0, Math.min(this.cursor, list.length - 1));
        state._saveDirty = true;
      } else {
        this.message = 'INV FULL';
        this.messageTimer = 35;
      }
    }
    if (this.cursor < this.scroll) this.scroll = this.cursor;
    if (this.cursor >= this.scroll + 7) this.scroll = this.cursor - 6;
  },

  render() {
    const chest = this.chest();
    drawRect(0, 0, 160, 128, 1);
    drawPanel(2, 2, 156, 124, 0, 3);
    drawText('CHEST', 66, 5, 10);
    drawText('Z TAKE', 88, 13, 10);
    drawText('X BACK', 122, 13, 4);

    if (!chest) {
      drawText('CHEST GONE', 48, 56, 8);
      return;
    }

    drawSprite2x(ITEM_ICON(chest.type), 8, 8);
    drawText(chest.type.replace(/-/g, ' ').substring(0, 18), 28, 12, 5);
    drawText((chest.items?.length || 0) + '/' + (chest.capacity || 32) + ' STACKS', 28, 21, 4);

    const list = chest.items || [];
    if (list.length === 0) {
      drawPanel(20, 52, 120, 24, 1, 3);
      drawText('EMPTY', 70, 61, 4);
      return;
    }

    let y = 36;
    for (let row = 0; row < 7; row++) {
      const idx = this.scroll + row;
      const slot = list[idx];
      if (!slot) break;
      const sel = idx === this.cursor;
      const recent = chest.lastReceived?.type === slot.type && this.state.tick - chest.lastReceived.tick < 20;
      const border = sel ? 10 : recent ? 11 : catColor(slot.type);
      const name = getItem(slot.type)?.name || slot.type;

      drawRect(8, y - 1, 144, 12, sel ? 2 : 1);
      drawRectOutline(8, y - 1, 144, 12, border);
      drawSprite(ITEM_ICON(slot.type), 10, y + 1);
      drawText(name.substring(0, 18), 22, y + 2, sel ? 5 : 4);
      drawText('x' + slot.count, 128, y + 2, recent ? 11 : 10);
      y += 12;
    }

    if (list.length > 7) drawText((this.cursor + 1) + '/' + list.length, 68, 118, 4);
    if (this.messageTimer > 0) drawText(this.message.substring(0, 18), 42, 118, this.message === 'INV FULL' ? 8 : 10);
  },
};

function chestAddToInventory(state, type, count) {
  if (!state.player.inventory) state.player.inventory = new Array(20).fill(null);
  for (const slot of state.player.inventory) {
    if (slot && slot.type === type) {
      slot.count += count;
      return true;
    }
  }
  for (let i = 0; i < state.player.inventory.length; i++) {
    if (!state.player.inventory[i]) {
      state.player.inventory[i] = { type, count };
      return true;
    }
  }
  return false;
}

// ===== src/scenes/inventory.js =====
// GRIDFORGE - Inventory — place buildings you own





const COLS = 5;
const SLOT = 22;

const InventoryScene = {
  state: null,
  cursor: 0,

  open(state) {
    this.state = state;
    this.cursor = 0;
    SceneManager.push(this, state);
  },

  enter() {}, exit() {},

  placeableSlots() {
    const slots = [];
    for (let i = 0; i < 20; i++) {
      const s = this.state.player.inventory[i];
      if (s && isPlaceable(s.type)) slots.push({ index: i, slot: s });
    }
    return slots;
  },

  update(state, input) {
    const list = this.placeableSlots();
    if (input.pressed.B) { SceneManager.pop(state); return; }

    if (list.length > 0) {
      if (input.pressed.right) this.cursor = (this.cursor + 1) % list.length;
      if (input.pressed.left)  this.cursor = (this.cursor + list.length - 1) % list.length;
      if (input.pressed.A) {
        const entry = list[this.cursor];
        SceneManager.pop(state);
        const fac = SceneManager.current;
        if (fac?.placingItem !== undefined) {
          fac.placingItem = { item: entry.slot.type, count: 1 };
          FactoryScene.message = 'PLACE WITH Z';
          FactoryScene.messageTimer = 80;
        }
      }
    }
  },

  render() {
    drawRect(0, 0, 160, 128, 1);
    drawPanel(2, 2, 156, 124, 0, 3);
    drawText('PLACE', 64, 6, 10);
    drawText('Z SELECT  B BACK', 44, 14, 4);

    const list = this.placeableSlots();
    if (list.length === 0) {
      drawText('CRAFT BUILDINGS', 28, 50, 7);
      drawText('PRESS C', 56, 62, 10);
      drawText('THEN PLACE HERE', 28, 74, 4);
      return;
    }

    const sx = 8, sy = 24;
    for (let i = 0; i < list.length; i++) {
      const x = sx + (i % COLS) * SLOT;
      const y = sy + Math.floor(i / COLS) * SLOT;
      const { slot } = list[i];
      const sel = (i === this.cursor);
      const def = getItem(slot.type);

      drawRect(x, y, SLOT - 2, SLOT - 2, sel ? 2 : 1);
      drawRectOutline(x, y, SLOT - 2, SLOT - 2, sel ? 10 : catColor(slot.type));
      drawSprite2x(ITEM_ICON(slot.type), x + 1, y + 1);
      if (slot.count > 1) drawText('' + slot.count, x + SLOT - 8, y + SLOT - 8, 5);
    }

    const sel = list[this.cursor];
    if (sel) {
      const def = getItem(sel.slot.type);
      drawPanel(4, 100, 152, 22, 1, 3);
      drawSprite2x(ITEM_ICON(sel.slot.type), 8, 102);
      drawText((def?.name || sel.slot.type).substring(0, 16), 22, 104, 5);
      drawText('TAP Z TO PLACE', 22, 114, 9);
    }
  },
};

// ===== src/scenes/craftmenu.js =====
// GRIDFORGE - Craft menu — make items from recipes






const CraftMenuScene = {
  state: null,
  page: 0,
  slot: 0,

  open(state) {
    this.state = state;
    this.page = 0;
    this.slot = 0;
    SceneManager.push(this, state);
  },

  enter() {}, exit() {},

  recipes() {
    return craftableRecipes(this.state);
  },

  perPage() { return 3; },

  pageCount(list) {
    return Math.max(1, Math.ceil(list.length / this.perPage()));
  },

  itemsOnPage(list) {
    const pp = this.perPage();
    const start = this.page * pp;
    return Math.min(pp, Math.max(0, list.length - start));
  },

  selectedIndex(list) {
    return this.page * this.perPage() + this.slot;
  },

  clampSlot(list) {
    const n = this.itemsOnPage(list);
    if (this.slot >= n) this.slot = Math.max(0, n - 1);
  },

  update(state, input) {
    const list = this.recipes();
    const pp = this.perPage();
    const pages = this.pageCount(list);

    if (input.pressed.B) { SceneManager.pop(state); return; }

    if (input.pressed.left) {
      this.page = Math.max(0, this.page - 1);
      this.slot = 0;
    }
    if (input.pressed.right) {
      this.page = Math.min(pages - 1, this.page + 1);
      this.slot = 0;
    }

    const onPage = this.itemsOnPage(list);
    if (onPage > 0) {
      if (input.pressed.up)   this.slot = (this.slot + onPage - 1) % onPage;
      if (input.pressed.down) this.slot = (this.slot + 1) % onPage;
    }

    this.clampSlot(list);

    if (input.pressed.A) {
      const rec = list[this.selectedIndex(list)];
      if (rec) {
        const res = tryCraft(state, rec.id);
        FactoryScene.message = res.msg;
        FactoryScene.messageTimer = 80;
      }
    }
  },

  drawIngredients(rec, x, y, state) {
    const missing = new Set(missingIngredients(state, rec).map(m => m.item));
    const ICON = 8;
    const GAP = 2;
    let ix = x;

    for (const req of rec.inputs) {
      const have = !missing.has(req.item);
      const col = have ? catColor(req.item) : 8;

      // Icon cell — draw outline last so gap strip cannot erase the right edge
      drawRect(ix - 1, y - 1, ICON + 2, ICON + 2, 1);
      drawSprite(ITEM_ICON(req.item), ix, y);
      drawRect(ix + ICON + 1, y, GAP, ICON, 1);
      drawRectOutline(ix - 1, y - 1, ICON + 2, ICON + 2, col);
      drawText('' + req.count, ix + ICON + 1 + GAP, y + 1, have ? 10 : 8);

      const countW = ('' + req.count).length * 4;
      ix += ICON + 1 + GAP + countW + 3;
    }
  },

  render() {
    drawRect(0, 0, 160, 128, 1);
    drawPanel(2, 2, 156, 124, 0, 3);
    drawText('CRAFT', 68, 4, 10);
    drawText('Z MAKE', 4, 12, 4);
    drawText('< > PAGE', 52, 12, 4);
    drawText('B BACK', 118, 12, 4);

    const list = this.recipes();
    const pp = this.perPage();
    const start = this.page * pp;
    let y = 22;

    for (let i = 0; i < this.itemsOnPage(list); i++) {
      const idx = start + i;
      const rec = list[idx];
      if (!rec) break;
      const sel = (i === this.slot);
      const out = rec.outputs[0];
      const can = hasIngredients(this.state, rec);

      drawRect(4, y - 1, 152, 30, sel ? 2 : 1);
      drawRectOutline(4, y - 1, 152, 30, sel ? (can ? 10 : 8) : catColor(out.item));

      drawSprite2x(ITEM_ICON(out.item), 6, y + 1);
      drawText(rec.name.substring(0, 11), 26, y + 2, sel ? 5 : 4);
      this.drawIngredients(rec, 26, y + 12, this.state);

      if (!can && sel) drawText('NEED MORE', 26, y + 22, 8);

      y += 32;
    }

    if (list.length === 0) {
      drawText('MINE ORE FIRST', 36, 60, 7);
      drawText('CRAFT PLATES', 40, 70, 4);
    } else {
      drawText('PG ' + (this.page + 1) + '/' + this.pageCount(list), 118, 118, 4);
    }
  },
};

// ===== src/scenes/factory.js =====
// GRIDFORGE - Main factory scene
// Top-down view: player walks around, places buildings, mines, picks up items.


























const HUD_TOP = 14;
const HUD_BOT = 20;
const PLAY_Y = HUD_TOP;
const PLAY_H = 88;
const ZOOM_TILE_SIZES = [8, 6, 4];
const DIR_RIGHT = { dx: 1, dy: 0 };
const DIR_LEFT = { dx: -1, dy: 0 };
const DIR_UP = { dx: 0, dy: -1 };
const DIR_DOWN = { dx: 0, dy: 1 };
const WEAPONS = {
  pistol: { dmg: 5, range: 3, cooldown: 12, label: 'PISTOL' },
  smg: { dmg: 8, range: 4, cooldown: 6, label: 'SMG' },
  pickaxe: { dmg: 4, range: 1, cooldown: 10, label: 'PICK' },
  fists: { dmg: 2, range: 1, cooldown: 16, label: 'FISTS' },
};
const FACTORY_FUEL_ITEMS = ['coal', 'wood', 'solid-fuel', 'rocket-fuel', 'u-fuel'];
const RADIAL_OPTIONS = {
  up: { label: 'TECH', open: (state) => TechTreeScene.open(state) },
  down: { label: 'CODEX', open: (state) => CodexScene.open(state) },
};
const FACTORY_TURRET_RANGE = 6;

const FactoryScene = {
  enter(state) {
    this.cursorX = state.player.x;
    this.cursorY = state.player.y;
    this.cursorVisible = true;
    this.message = 'HOLD Z ON ORE TO MINE';
    this.messageTimer = 200;
    this.mining = false;
    this.miningProgress = 0;
    this.placingItem = null;  // { item, count } from inventory
    this.radialOpen = false;
    this.radialChoice = 'up';
    this._beatOpen = false;
    this.attackTick = -99;
    this._deathOpen = false;
    // Ensure subsystems reflect the current world+buildings (fresh game or load).
    if (!state._systemsInited) {
      reinitSystems(state);
      state._systemsInited = true;
    }
    StorySystem.init(state);
    // Era advance callback: show the era title card on transition (not at start).
    state.onEraAdvance = (newEra) => {
      if (newEra > 0 && !SceneManager.stack.includes(EraCardScene)) {
        EraCardScene.open(state, newEra);
      }
    };
  },

  exit(state) {},

  update(state, input) {
    const zoomCombo = handleZoomInput(state, input);
    if ((state.player.attackCooldown || 0) > 0) state.player.attackCooldown--;

    if (this.placingItem) {
      if (!zoomCombo) updatePlacement(state, input, this);
      state.tick++;
      if (this.messageTimer > 0) this.messageTimer--;
      return;
    }

    if (this.radialOpen) {
      updateRadialMenu(state, input, this);
      state.tick++;
      if (this.messageTimer > 0) this.messageTimer--;
      return;
    }

    if (!zoomCombo && input.pressed.B) {
      this.radialOpen = true;
      this.radialChoice = 'up';
      state.tick++;
      return;
    }

    if (!zoomCombo) {
      // Movement
      let dx = 0, dy = 0;
      if (input.pressed.left)  dx = -1;
      if (input.pressed.right) dx =  1;
      if (input.pressed.up)    dy = -1;
      if (input.pressed.down)  dy =  1;
      if (dx || dy) {
        state.player.dir = { dx, dy };
        const nx = state.player.x + dx;
        const ny = state.player.y + dy;
        if (state.world.tiles[ny] && state.world.tiles[ny][nx] !== undefined) {
          if (!isSolid(state, nx, ny)) {
            state.player.x = nx;
            state.player.y = ny;
            state.player.walkTick = state.tick;
          }
        }
      }
      // Mine / gather (hold Z)
      if (input.held.z && !this.placingItem) {
        const target = getMiningTarget(state);
        const key = target ? `${target.x},${target.y}` : '';

        if (target) {
          if (this.miningTile !== key) {
            this.miningTile = key;
            this.miningProgress = 0;
          }
          this.mining = true;
          this.miningProgress++;
          if (this.miningProgress >= (state.player.miningSpeed || 30)) {
            const { tile, resource } = target;
            const drops = RESOURCE_DROPS[resource] || [{ type: resource, count: 1 }];
            for (const d of drops) factoryAddToInventory(state, d.type, d.count);
            state._saveDirty = true;
            if (tile.resource) {
              tile.resourceCount = (tile.resourceCount || 5) - 1;
              if (tile.resourceCount <= 0) {
                tile.resource = null;
                tile.resourceCount = 0;
              }
            } else {
              tile.resourceCount = (tile.resourceCount || 5) - 1;
              if (tile.resourceCount <= 0) {
                tile.type = T.DIRT;
                tile.solid = false;
                tile.resourceCount = 0;
              }
            }
            this.miningProgress = 0;
            showMessage(state, '+' + (drops[0]?.type || 'ore').replace(/-/g, ' '));
          }
        } else {
          this.mining = false;
          this.miningTile = null;
        }
      } else if (!input.held.z) {
        this.mining = false;
      }

      // Tap Z — attack, reload, inspect, drink
      if (input.pressed.A && !this.placingItem) {
        if (!tryPlayerAttack(state, this)) {
          const facedChest = findFacedChest(state);
          if (facedChest) {
            ChestScene.open(state, facedChest.key);
          } else {
            const loaded = tryLoadNearbyTurret(state);
            if (loaded > 0) {
              showMessage(state, 'Loaded ' + loaded + ' ammo.');
              state._saveDirty = true;
            } else {
              const fueled = tryLoadNearbyFuelMachine(state);
              if (fueled > 0) {
                showMessage(state, 'Loaded ' + fueled + ' fuel.');
                state._saveDirty = true;
              } else {
                const cx = state.player.x, cy = state.player.y;
                const key = `${cx},${cy}`;
                const b = state.buildings[key];
                const tile = state.world.tiles[cy]?.[cx];
                const chest = findNearbyChest(state);
                if (chest) {
                  ChestScene.open(state, chest.key);
                } else if (b) {
                  showMessage(state, b.type.replace(/-/g, ' '));
                } else if (tile?.type === T.WATER && state.player.hp < 100) {
                  state.player.hp = Math.min(100, state.player.hp + 5);
                  showMessage(state, '+5 HP');
                }
              }
            }
          }
        }
      }

      if (input.pressed.craft) CraftMenuScene.open(state);
      if (input.pressed.inv) InventoryScene.open(state);

      pickupNearbyDrops(state);
    } else {
      this.mining = false;
    }

    // Run systems
    BeltSystem.init(state);
    if (state._powerDirty) { PowerSystem.init(state); state._powerDirty = false; }
    PowerSystem.update(state);
    ProductionSystem.update(state);
    BeltSystem.flushBuildingOutputs(state);
    BeltSystem.update(state);
    BeltSystem.updateInserters(state);
    FluidSystem.update(state);
    CombatSystem.update(state);
    LogisticsSystem.update(state);
    const deathLine = handlePlayerDeath(state);
    if (deathLine && !this._beatOpen) {
      this._beatOpen = true;
      StoryScene.open(state, [{ text: deathLine }], () => {
        this._beatOpen = false;
      });
    }
    ResearchSystem.update(state);
    StorySystem.update(state);

    state.tick++;
    if (this.messageTimer > 0) this.messageTimer--;

    // Drain any pending story beats: present one at a time so the player
    // isn't buried. The next beat fires when StoryScene pops back here.
    if (!this._beatOpen) {
      const beat = StorySystem.next();
      if (beat) {
        this._beatOpen = true;
        StoryScene.open(state, [{ text: beat.text }], () => {
          this._beatOpen = false;
        });
      }
    }

    // Periodic auto-save (every ~5s of play) when something changed.
    if (state._saveDirty && state.tick % 100 === 0) {
      SaveSystem.save(state);
      state._saveDirty = false;
    }
  },

  render(state, renderer) {
    const tileSize = getTileSize(state);
    const viewW = Math.floor(160 / tileSize);
    const viewH = Math.floor(PLAY_H / tileSize);
    const camX = state.player.x - Math.floor(viewW / 2);
    const camY = state.player.y - Math.floor(viewH / 2);
    const playerTile = state.world.tiles[state.player.y]?.[state.player.x];

    // Playfield backdrop
    drawRect(0, PLAY_Y, 160, PLAY_H, 1);
    drawRectOutline(0, PLAY_Y, 160, PLAY_H, 3);

    // World tiles
    for (let vy = 0; vy < viewH; vy++) {
      for (let vx = 0; vx < viewW; vx++) {
        const wx = camX + vx;
        const wy = camY + vy;
        const sx = vx * tileSize;
        const sy = PLAY_Y + vy * tileSize;
        const tile = state.world.tiles[wy]?.[wx];

        if (!tile) {
          drawRect(sx, sy, tileSize, tileSize, 0);
          continue;
        }

        drawSpriteFit(tileSpriteFor(tile.type, state.tick), sx, sy, tileSize, tileSize);

        if (tile.resource) {
          drawSpriteFit('res-' + tile.resource, sx, sy, tileSize, tileSize);
          const oreColor = ORE_OUTLINE[tile.resource] || 10;
          drawRectOutline(sx, sy, tileSize, tileSize, oreColor);
        }

        const key = `${wx},${wy}`;
        const b = state.buildings[key];
        if (b) {
          drawSpriteFit('bld-' + b.type, sx, sy, tileSize, tileSize);
          if (factoryIsBeltType(b.type)) drawBeltDirectionArrow(sx, sy, b.dir, b.type, tileSize);
          drawBuildingActivity(b, sx, sy, state.tick, tileSize);
          const ports = getBuildingPorts(b.type, b.dir);
          if (ports) {
            if (ports.flow && b.dir && !factoryIsBeltType(b.type)) drawPortOutScaled(sx, sy, b.dir.dx, b.dir.dy, tileSize);
            if (ports.input) drawPortInScaled(sx, sy, ports.input.dx, ports.input.dy, tileSize);
            if (ports.output) drawPortOutScaled(sx, sy, ports.output.dx, ports.output.dy, tileSize);
          }
        }

        if (wx === state.player.x && wy === state.player.y) {
          drawPlayer(state, this, sx, sy, tileSize);
        }

      }
    }

    drawGroundDrops(state, camX, camY, tileSize, viewW, viewH);
    drawAllBeltItems(state, camX, camY, tileSize, viewW, viewH);
    drawBeltEffects(state, camX, camY, tileSize);
    drawSmoke(state, camX, camY, tileSize, viewW, viewH);
    drawLogisticsDrones(state, camX, camY, tileSize, viewW, viewH);
    drawCombatEntities(state, camX, camY, tileSize, viewW, viewH);

    // Top HUD
    drawPanel(0, 0, 160, HUD_TOP, 1, 3);
    drawBar(2, 2, 24, 4, state.player.hp || 100, 100, 9, 2);
    drawText('HP', 28, 2, 4);
    drawText('ERA ' + (state.era || 0), 42, 2, 10);
    drawPortLegend();

    if (!this.mining) {
      const chest = findNearbyChest(state);
      const hint = chest ? 'Z OPEN CHEST' : getObjectiveHint(state, this);
      drawText(hint.substring(0, 24), 2, 9, chest ? 10 : 4);
    }

    const tileLabel = getTileLabel(playerTile);
    if (tileLabel) drawText(tileLabel.toUpperCase().substring(0, 8), 126, 9, 4);

    // Bottom HUD — inventory + controls
    const botY = PLAY_Y + PLAY_H;
    drawPanel(0, botY, 160, HUD_BOT, 1, 3);
    if (this.placingItem) {
      drawText('WASD MOVE', 2, botY + 3, 11);
      drawText('C ROT', 62, botY + 3, 4);
      drawText('Z OK', 100, botY + 3, 10);
      drawText('X', 132, botY + 3, 8);
    } else {
      drawText('I PLACE', 2, botY + 3, 4);
      drawText('C CRAFT', 48, botY + 3, 10);
      drawText('Z ACT', 94, botY + 3, 4);
      drawText('X MENU', 128, botY + 3, 13);
    }

    let bx = 2;
    for (let i = 0; i < 8; i++) {
      const slot = state.player.inventory[i];
      drawRectOutline(bx - 1, botY + 10, 10, 10, 2);
      if (slot) {
        drawSprite(ITEM_ICON(slot.type), bx, botY + 11);
        if (slot.count > 1) drawText('' + slot.count, bx + 4, botY + 17, 5);
      }
      bx += 12;
    }

    if (this.mining) {
      const target = parseMiningTile(this.miningTile) || { x: state.player.x, y: state.player.y };
      const px = (target.x - camX) * tileSize + 1;
      const py = PLAY_Y + (target.y - camY) * tileSize - 3;
      const barW = Math.max(3, tileSize - 2);
      const w = Math.floor((this.miningProgress / (state.player.miningSpeed || 30)) * barW);
      drawRect(px, py, barW, 2, 2);
      drawRect(px, py, w, 2, 11);
    }

    if (this.message && this.messageTimer > 0) {
      drawPanel(4, PLAY_Y + 4, 100, 12, 1, 10);
      drawText(this.message.substring(0, 18), 8, PLAY_Y + 7, 10);
    }

    if (this.placingItem) {
      drawPlacementPreview(state, this.placingItem, camX, camY, tileSize);
    }

    if (this.radialOpen) drawRadialMenu(this);
  },
};

function showMessage(state, msg) {
  FactoryScene.message = msg;
  FactoryScene.messageTimer = 60;
}

function updateRadialMenu(state, input, scene) {
  if (input.pressed.up) scene.radialChoice = 'up';
  if (input.pressed.down) scene.radialChoice = 'down';
  if (input.pressed.left || input.pressed.right) {
    scene.radialChoice = scene.radialChoice === 'up' ? 'down' : 'up';
  }

  if (input.pressed.B) {
    scene.radialOpen = false;
    return;
  }

  if (input.pressed.A) {
    const choice = RADIAL_OPTIONS[scene.radialChoice];
    scene.radialOpen = false;
    if (choice) choice.open(state);
  }
}

function drawRadialMenu(scene) {
  drawPanel(38, 28, 84, 62, 0, 13);
  drawText('MENU', 72, 30, 13);
  drawRadialOption('up', 'TECH', 70, 42, scene.radialChoice === 'up');
  drawRadialOption('down', 'CODEX', 66, 64, scene.radialChoice === 'down');
  drawText('Z OK', 48, 80, 10);
  drawText('X BACK', 84, 80, 8);
}

function drawRadialOption(dir, label, x, y, selected) {
  const w = label.length * 4 + 6;
  drawRect(x - 3, y - 3, w, 11, selected ? 2 : 1);
  drawRectOutline(x - 3, y - 3, w, 11, selected ? 10 : 3);
  drawText(label, x, y, selected ? 10 : 4);
}

function handleZoomInput(state, input) {
  const comboHeld = input.held.enter && input.held.x;
  if (!comboHeld) return false;

  if (input.pressed.zoomIn) changeZoom(state, -1);
  if (input.pressed.zoomOut) changeZoom(state, 1);
  return true;
}

function changeZoom(state, delta) {
  const current = getZoomIndex(state);
  const next = Math.max(0, Math.min(ZOOM_TILE_SIZES.length - 1, current + delta));
  state.zoomIndex = next;
  if (next === current) {
    showMessage(state, next === 0 ? 'Max zoom in.' : 'Max zoom out.');
  } else {
    showMessage(state, next === 0 ? 'Zoom in.' : 'Zoom out.');
  }
}

function getZoomIndex(state) {
  const idx = Number.isInteger(state.zoomIndex) ? state.zoomIndex : 0;
  return Math.max(0, Math.min(ZOOM_TILE_SIZES.length - 1, idx));
}

function getTileSize(state) {
  return ZOOM_TILE_SIZES[getZoomIndex(state)];
}

function drawPortLegend() {
  drawRect(96, 3, 4, 4, 11);
  drawText('IN', 102, 2, 11);
  drawRect(122, 3, 4, 4, 5);
  drawText('OUT', 128, 2, 5);
}

function tileSpriteFor(type, tick) {
  if (type === T.WATER) return Math.floor(tick / 20) % 2 ? 'tile-water2' : 'tile-water';
  if (type === T.CORRUPTED) return Math.floor(tick / 16) % 2 ? 'tile-corrupted2' : 'tile-corrupted';
  return TILE_ICON(type);
}

function factoryIsBeltType(type) {
  return type === 'belt' || type === 'fast-belt' || type === 'express-belt' ||
    type === 'underground-belt' || type === 'splitter';
}

function drawBeltDirectionArrow(sx, sy, dir, type, size) {
  const color = type === 'express-belt' ? 4 : type === 'fast-belt' ? 3 : 2;
  const thick = Math.max(1, Math.floor(size / 4));
  const line = Math.max(2, size - 4);
  const mid = Math.floor((size - thick) / 2);
  if (dir.dx > 0) {
    drawRect(sx + 1, sy + mid, line, thick, color);
    drawRect(sx + size - 2, sy + Math.max(1, mid - 1), 1, Math.min(size - 2, thick + 2), color);
  } else if (dir.dx < 0) {
    drawRect(sx + size - 1 - line, sy + mid, line, thick, color);
    drawRect(sx + 1, sy + Math.max(1, mid - 1), 1, Math.min(size - 2, thick + 2), color);
  } else if (dir.dy > 0) {
    drawRect(sx + mid, sy + 1, thick, line, color);
    drawRect(sx + Math.max(1, mid - 1), sy + size - 2, Math.min(size - 2, thick + 2), 1, color);
  } else {
    drawRect(sx + mid, sy + size - 1 - line, thick, line, color);
    drawRect(sx + Math.max(1, mid - 1), sy + 1, Math.min(size - 2, thick + 2), 1, color);
  }
}

function drawPortInScaled(sx, sy, dx, dy, size) {
  const mark = Math.max(1, Math.floor(size / 4));
  const offset = Math.max(1, Math.floor(size * 0.38));
  const x = sx + Math.floor((size - mark) / 2) + dx * offset;
  const y = sy + Math.floor((size - mark) / 2) + dy * offset;
  drawRect(x, y, mark, mark, 11);
}

function drawPortOutScaled(sx, sy, dx, dy, size) {
  const mark = Math.max(1, Math.floor(size / 4));
  const center = Math.floor((size - mark) / 2);
  const x = dx > 0 ? sx + size - mark : dx < 0 ? sx : sx + center;
  const y = dy > 0 ? sy + size - mark : dy < 0 ? sy : sy + center;
  drawRect(x, y, mark, mark, 5);
  if (size < 6) return;
  if (dx !== 0) drawRect(dx > 0 ? x - 1 : x + mark, y, 1, mark, 5);
  if (dy !== 0) drawRect(x, dy > 0 ? y - 1 : y + mark, mark, 1, 5);
}

function drawAllBeltItems(state, camX, camY, tileSize, viewW, viewH) {
  for (const seg of BeltSystem.belts.values()) {
    if (seg.hidden) continue;
    if (seg.x < camX - 1 || seg.x >= camX + viewW + 1 || seg.y < camY - 1 || seg.y >= camY + viewH + 1) continue;
    const sx = (seg.x - camX) * tileSize;
    const sy = PLAY_Y + (seg.y - camY) * tileSize;
    for (const it of seg.items || []) drawBeltItem(sx, sy, seg, it, state.tick, tileSize);
  }
}

function drawBeltItem(sx, sy, seg, item, tick, tileSize) {
  const icon = ITEM_ICON(item.type);
  const itemSize = getBeltItemSize(tileSize);
  const progress = Math.max(0, Math.min(0.99, item.progress || 0));
  let { x: ix, y: iy } = itemIconPosition(sx, sy, seg.dir, progress, tileSize, itemSize);

  if (item.from) {
    const age = tick - item.from.tick;
    if (age >= 0 && age < item.from.duration) {
      const fromSx = sx + (item.from.x - seg.x) * tileSize;
      const fromSy = sy + (item.from.y - seg.y) * tileSize;
      const start = itemIconPosition(fromSx, fromSy, item.from.dir, 0.99, tileSize, itemSize);
      const blend = Math.max(0, Math.min(1, age / item.from.duration));
      ix = Math.round(start.x + (ix - start.x) * blend);
      iy = Math.round(start.y + (iy - start.y) * blend);
    }
  }

  drawSpriteFit(icon, ix, iy, itemSize, itemSize);
}

function drawBeltEffects(state, camX, camY, tileSize) {
  const effects = state.beltEffects || [];
  const itemSize = getBeltItemSize(tileSize);
  for (const fx of effects) {
    const age = state.tick - fx.tick;
    if (age < 0 || age >= fx.duration) continue;
    const fromSx = (fx.from.x - camX) * tileSize;
    const fromSy = PLAY_Y + (fx.from.y - camY) * tileSize;
    const toSx = (fx.to.x - camX) * tileSize;
    const toSy = PLAY_Y + (fx.to.y - camY) * tileSize;
    const start = itemIconPosition(fromSx, fromSy, fx.dir, 0.99, tileSize, itemSize);
    const end = {
      x: toSx + Math.floor((tileSize - itemSize) / 2),
      y: toSy + Math.floor((tileSize - itemSize) / 2),
    };
    const blend = age / fx.duration;
    drawSpriteFit(ITEM_ICON(fx.type), Math.round(start.x + (end.x - start.x) * blend), Math.round(start.y + (end.y - start.y) * blend), itemSize, itemSize);
  }
}

function drawGroundDrops(state, camX, camY, tileSize, viewW, viewH) {
  drawDropList(state.world.groundItems, camX, camY, tileSize, viewW, viewH);
  drawDropList(state.world.scienceDrops, camX, camY, tileSize, viewW, viewH);
}

function drawSmoke(state, camX, camY, tileSize, viewW, viewH) {
  for (const s of ProductionSystem.smoke || []) {
    const wx = s.x / 8;
    const wy = s.y / 8;
    if (wx < camX - 1 || wx >= camX + viewW + 1 || wy < camY - 1 || wy >= camY + viewH + 1) continue;
    const sx = Math.round((wx - camX) * tileSize);
    const sy = Math.round(PLAY_Y + (wy - camY) * tileSize);
    const age = Math.max(0, Math.min(1, s.life / 30));
    const size = Math.max(1, Math.ceil(tileSize * 0.35 * age));
    drawRect(sx, sy, size, size, age > 0.45 ? 3 : 2);
  }
}

function drawDropList(list, camX, camY, tileSize, viewW, viewH) {
  if (!Array.isArray(list)) return;
  const size = Math.max(3, Math.floor(tileSize * 0.55));
  for (const d of list) {
    if (d.x < camX || d.x >= camX + viewW || d.y < camY || d.y >= camY + viewH) continue;
    const sx = (d.x - camX) * tileSize + Math.floor((tileSize - size) / 2);
    const sy = PLAY_Y + (d.y - camY) * tileSize + Math.floor((tileSize - size) / 2);
    drawSpriteFit(ITEM_ICON(d.type), sx, sy, size, size);
  }
}

function drawCombatEntities(state, camX, camY, tileSize, viewW, viewH) {
  for (const p of state.projectiles || []) {
    const blend = Math.max(0, Math.min(1, (p.age || 0) / Math.max(1, p.duration || 1)));
    const x = p.x + (p.tx - p.x) * blend;
    const y = p.y + (p.ty - p.y) * blend;
    if (x < camX - 1 || x >= camX + viewW + 1 || y < camY - 1 || y >= camY + viewH + 1) continue;
    const sx = Math.round((x - camX) * tileSize + tileSize / 2);
    const sy = Math.round(PLAY_Y + (y - camY) * tileSize + tileSize / 2);
    drawRect(sx, sy, Math.max(1, Math.floor(tileSize / 4)), Math.max(1, Math.floor(tileSize / 4)), p.color || 10);
  }

  for (const e of CombatSystem.enemies.values()) {
    if (e.x < camX || e.x >= camX + viewW || e.y < camY || e.y >= camY + viewH) continue;
    const sx = (e.x - camX) * tileSize;
    const sy = PLAY_Y + (e.y - camY) * tileSize;
    const inset = Math.max(1, Math.floor(tileSize / 4));
    const size = Math.max(2, tileSize - inset * 2);
    if (e.species === 'worm') {
      drawSpriteFit('bld-worm', sx, sy, tileSize, tileSize);
    } else {
      drawRect(sx + inset, sy + inset, size, size, e.color || 8);
      drawRectOutline(sx + inset, sy + inset, size, size, e.species?.includes('spitter') ? 14 : 8);
    }
    if (tileSize >= 6 && e.hp < e.maxHp) {
      drawBar(sx + 1, sy - 2, tileSize - 2, 2, e.hp, e.maxHp, 8, 2);
    }
  }

  for (const b of Object.values(state.buildings)) {
    if (b.type !== 'turret' || state.tick - (b.lastShot || -99) >= 4) continue;
    if (b.x < camX || b.x >= camX + viewW || b.y < camY || b.y >= camY + viewH) continue;
    const sx = (b.x - camX) * tileSize;
    const sy = PLAY_Y + (b.y - camY) * tileSize;
    drawRectOutline(sx, sy, tileSize, tileSize, 10);
  }
}

function drawLogisticsDrones(state, camX, camY, tileSize, viewW, viewH) {
  for (const d of state.logisticsDrones || []) {
    const age = state.tick - d.tick;
    if (age < 0 || age > d.duration) continue;
    const blend = age / Math.max(1, d.duration);
    const x = d.from.x + (d.to.x - d.from.x) * blend;
    const y = d.from.y + (d.to.y - d.from.y) * blend;
    if (x < camX - 1 || x >= camX + viewW + 1 || y < camY - 1 || y >= camY + viewH + 1) continue;
    const sx = Math.round((x - camX) * tileSize + tileSize / 2);
    const sy = Math.round(PLAY_Y + (y - camY) * tileSize + tileSize / 2);
    const size = Math.max(2, Math.floor(tileSize / 3));
    drawRect(sx, sy, size, size, d.type === 'repair-pack' ? 10 : 13);
  }
}

function getBeltItemSize(tileSize) {
  return Math.max(2, Math.floor(tileSize / 2));
}

function itemIconPosition(sx, sy, dir, progress, tileSize, itemSize) {
  const maxOff = Math.max(1, tileSize - itemSize);
  const off = Math.floor(progress * maxOff);
  let x = sx + Math.floor((tileSize - itemSize) / 2);
  let y = sy + Math.floor((tileSize - itemSize) / 2);

  if (dir.dx > 0) x = sx + off;
  else if (dir.dx < 0) x = sx + maxOff - off;
  else if (dir.dy > 0) y = sy + off;
  else y = sy + maxOff - off;

  return { x, y };
}

function drawBuildingActivity(b, sx, sy, tick, size) {
  if (b.type === 'burner-miner' || b.type === 'electric-miner') {
    if (b.noFuel) {
      tileRect(sx, sy, size, 2, 3, 4, 2, 10);
      return;
    }
    if (b.noResource) {
      tileRect(sx, sy, size, 3, 3, 2, 2, 8);
      return;
    }
    if ((b.cooldown || 0) > 0 || b.outputSlot?.count > 0) {
      const pulse = Math.floor(tick / 4) % 2;
      tileRect(sx, sy, size, 3, 2 + pulse, 2, 3, 11);
    }
  }

  if (b.craftProgress > 0) {
    const color = Math.floor(tick / 5) % 2 ? 10 : 7;
    tileRect(sx, sy, size, 2, 6, 4, 1, color);
  }

  if (b.heldItem) {
    const mark = Math.max(1, Math.floor(size / 4));
    const hx = sx + Math.floor(size / 2) - 1 + Math.round((b.dir?.dx || 0) * (b.handProgress || 0) * Math.floor(size * 0.38));
    const hy = sy + Math.floor(size / 2) - 1 + Math.round((b.dir?.dy || 0) * (b.handProgress || 0) * Math.floor(size * 0.38));
    drawRect(hx, hy, mark, mark, 5);
  }
}

function tileRect(sx, sy, size, x, y, w, h, color) {
  drawRect(
    sx + Math.floor(x * size / 8),
    sy + Math.floor(y * size / 8),
    Math.max(1, Math.floor(w * size / 8)),
    Math.max(1, Math.floor(h * size / 8)),
    color,
  );
}

function drawPlayer(state, scene, sx, sy, size) {
  const recentlyWalked = state.tick - (state.player.walkTick || -99) < 7;
  const recentlyAttacked = state.tick - (scene.attackTick || -99) < 5;
  let sprite = 'player';
  if (scene.mining) sprite = 'player_mine';
  else if (recentlyAttacked) sprite = 'player_work';
  else if (recentlyWalked) sprite = Math.floor(state.tick / 3) % 2 ? 'player_walk1' : 'player_walk2';
  drawSpriteFit(sprite, sx, sy, size, size);

  if (scene.mining || recentlyAttacked) {
    const dir = state.player.dir || DIR_RIGHT;
    const spark = Math.max(1, Math.floor(size / 4));
    const reach = Math.max(1, Math.floor(size * 0.38));
    const hx = sx + Math.floor(size / 2) - 1 + dir.dx * reach;
    const hy = sy + Math.floor(size / 2) - 1 + dir.dy * reach;
    if (Math.floor(state.tick / 2) % 2 === 0) drawRect(hx, hy, spark, spark, 10);
  }
}

function factoryAddToInventory(state, type, count) {
  if (!state.player.inventory) state.player.inventory = new Array(20).fill(null);
  for (const s of state.player.inventory) {
    if (s && s.type === type) { s.count += count; return true; }
  }
  for (let i = 0; i < state.player.inventory.length; i++) {
    if (!state.player.inventory[i]) {
      state.player.inventory[i] = { type, count };
      return true;
    }
  }
  return false;
}

function countInventory(state, type) {
  return (state.player.inventory || []).reduce((sum, slot) => sum + ((slot && slot.type === type) ? slot.count : 0), 0);
}

function takeFromInventory(state, type, count) {
  let need = count;
  for (let i = 0; i < (state.player.inventory || []).length; i++) {
    const slot = state.player.inventory[i];
    if (!slot || slot.type !== type) continue;
    const take = Math.min(slot.count, need);
    slot.count -= take;
    need -= take;
    if (slot.count <= 0) state.player.inventory[i] = null;
    if (need <= 0) break;
  }
  return count - need;
}

function bestWeapon(state) {
  if (countInventory(state, 'smg') > 0) return 'smg';
  if (countInventory(state, 'pistol') > 0) return 'pistol';
  if (countInventory(state, 'iron-pickaxe') > 0) return 'pickaxe';
  return 'fists';
}

function tryPlayerAttack(state, scene) {
  if ((state.player.attackCooldown || 0) > 0) return false;
  const weaponId = bestWeapon(state);
  const weapon = WEAPONS[weaponId] || WEAPONS.fists;
  state.player.weapon = weaponId === 'fists' ? null : weaponId;

  const target = findCombatTargetInFacingLine(state, weapon.range);
  if (!target) return false;

  const result = CombatSystem.damageEnemy(state, target.x, target.y, target.radius, weapon.dmg);
  state.player.attackCooldown = weapon.cooldown;
  scene.attackTick = state.tick;
  showMessage(state, result.killed > 0 ? 'Down.' : 'Hit ' + weapon.dmg);
  state._saveDirty = true;
  return true;
}

function findCombatTargetInFacingLine(state, range) {
  const dir = state.player.dir || DIR_RIGHT;
  let fallback = null;
  let fallbackD = Infinity;

  for (let step = 1; step <= range; step++) {
    const x = state.player.x + dir.dx * step;
    const y = state.player.y + dir.dy * step;
    for (const e of CombatSystem.enemies.values()) {
      if (Math.hypot(e.x - x, e.y - y) <= 0.75) return { x, y, radius: 0.8 };
    }
    const b = state.buildings[`${x},${y}`];
    if (b && (b.type === 'biter-spawner' || b.type === 'spitter-spawner' || b.type === 'worm')) {
      return { x, y, radius: 0.8 };
    }
  }

  for (const e of CombatSystem.enemies.values()) {
    const d = Math.hypot(e.x - state.player.x, e.y - state.player.y);
    if (d <= range + 0.35 && d < fallbackD) {
      fallbackD = d;
      fallback = { x: e.x, y: e.y, radius: 0.9 };
    }
  }

  for (const b of Object.values(state.buildings)) {
    if (b.type !== 'biter-spawner' && b.type !== 'spitter-spawner' && b.type !== 'worm') continue;
    const d = Math.hypot(b.x - state.player.x, b.y - state.player.y);
    if (d <= range + 0.35 && d < fallbackD) {
      fallbackD = d;
      fallback = { x: b.x, y: b.y, radius: 0.9 };
    }
  }

  return fallback;
}

function tryLoadNearbyTurret(state) {
  const turret = findNearbyBuilding(state, b => b.type === 'turret');
  if (!turret) return 0;
  if (!turret.building.ammoSlot) turret.building.ammoSlot = { type: 'ammo', count: 0 };
  const room = 200 - (turret.building.ammoSlot.count || 0);
  if (room <= 0) {
    showMessage(state, 'Turret full.');
    return 0;
  }
  const loaded = takeFromInventory(state, 'ammo', Math.min(10, room));
  if (loaded > 0) {
    turret.building.ammoSlot.type = 'ammo';
    turret.building.ammoSlot.count += loaded;
    turret.building.lastReceived = { type: 'ammo', tick: state.tick };
  }
  return loaded;
}

function tryLoadNearbyFuelMachine(state) {
  const target = findNearbyBuilding(state, b => !!b.fuelSlot);
  if (!target) return 0;
  const b = target.building;
  const room = 50 - (b.fuelSlot.count || 0);
  if (room <= 0) {
    showMessage(state, 'Fuel full.');
    return 0;
  }

  const preferred = b.type === 'nuclear-reactor' ? ['u-fuel'] : FACTORY_FUEL_ITEMS.filter(f => f !== 'u-fuel');
  for (const fuel of preferred) {
    if (countInventory(state, fuel) <= 0) continue;
    const loaded = takeFromInventory(state, fuel, Math.min(10, room));
    if (loaded <= 0) continue;
    b.fuelSlot.type = fuel;
    b.fuelSlot.count = (b.fuelSlot.count || 0) + loaded;
    b.lastReceived = { type: fuel, tick: state.tick };
    return loaded;
  }

  showMessage(state, 'Need fuel.');
  return 0;
}

function findNearbyBuilding(state, predicate) {
  const px = state.player.x;
  const py = state.player.y;
  const dir = state.player.dir || DIR_RIGHT;
  const targets = [
    { x: px + dir.dx, y: py + dir.dy },
    { x: px, y: py - 1 },
    { x: px + 1, y: py },
    { x: px, y: py + 1 },
    { x: px - 1, y: py },
  ];

  for (const target of targets) {
    const key = `${target.x},${target.y}`;
    const building = state.buildings[key];
    if (building && predicate(building)) return { key, building };
  }
  return null;
}

function pickupNearbyDrops(state) {
  pickupDropList(state, state.world.scienceDrops);
  pickupDropList(state, state.world.groundItems);
}

function pickupDropList(state, list) {
  if (!Array.isArray(list)) return;
  for (let i = list.length - 1; i >= 0; i--) {
    const d = list[i];
    if (Math.hypot(d.x - state.player.x, d.y - state.player.y) < 2) {
      factoryAddToInventory(state, d.type, d.amount ?? d.count ?? 1);
      list.splice(i, 1);
      state._saveDirty = true;
    }
  }
}

function handlePlayerDeath(state) {
  if ((state.player.hp || 100) > 0) return null;
  if (!state.world.groundItems) state.world.groundItems = [];
  const px = state.player.x;
  const py = state.player.y;
  const offsets = [
    { dx: 0, dy: 0 }, { dx: 1, dy: 0 }, { dx: -1, dy: 0 },
    { dx: 0, dy: 1 }, { dx: 0, dy: -1 },
  ];

  for (let i = 0; i < (state.player.inventory || []).length; i++) {
    const slot = state.player.inventory[i];
    if (!slot) continue;
    const off = offsets[i % offsets.length];
    state.world.groundItems.push({
      x: Math.max(0, Math.min(state.world.width - 1, px + off.dx)),
      y: Math.max(0, Math.min(state.world.height - 1, py + off.dy)),
      type: slot.type,
      amount: slot.count,
    });
    state.player.inventory[i] = null;
  }

  state.player.hp = 100;
  state.player.x = 8;
  state.player.y = 8;
  state.player.dir = { ...DIR_RIGHT };
  state.player.weapon = null;
  state.player.attackCooldown = 0;
  state.player.walkTick = state.tick;
  state.flags.deaths = (state.flags.deaths || 0) + 1;
  state._saveDirty = true;
  return DEATH_LINES[(state.flags.deaths - 1) % DEATH_LINES.length];
}

function updatePlacement(state, input, scene) {
  ensurePlacementDefaults(state, scene.placingItem);

  const move = dirFromInput(input);
  if (move) {
    scene.placingItem.x = Math.max(0, Math.min(state.world.width - 1, scene.placingItem.x + move.dx));
    scene.placingItem.y = Math.max(0, Math.min(state.world.height - 1, scene.placingItem.y + move.dy));
    state.player.dir = move;
  }

  if (input.pressed.craft) {
    scene.placingItem.dir = rotateDirClockwise(scene.placingItem.dir);
  }

  if (input.pressed.B) {
    scene.placingItem = null;
    showMessage(state, 'Cancelled.');
    return;
  }

  const buildingType = getItem(scene.placingItem.item)?.building;
  const dragPlace = !!(move && input.held.z && isDragPlaceType(buildingType));
  if (!input.pressed.A && !dragPlace) return;

  if (!buildingType) {
    showMessage(state, 'Cannot place this item.');
    scene.placingItem = null;
    return;
  }

  const target = getPlacementTarget(state, scene.placingItem);
  if (placeBuilding(state, target.x, target.y, buildingType, scene.placingItem.dir)) {
    const slot = state.player.inventory.findIndex(s => s && s.type === scene.placingItem.item);
    if (slot >= 0) {
      state.player.inventory[slot].count--;
      if (state.player.inventory[slot].count <= 0) state.player.inventory[slot] = null;
    }
    if (buildingType === 'omega-core') {
      state.flags.omegaPlaced = true;
      state._saveDirty = true;
      scene.placingItem = null;
      EndingScene.open(state);
      return;
    }
    if (dragPlace && state.player.inventory.some(s => s && s.type === scene.placingItem.item)) {
      showMessage(state, 'Placed.');
    } else {
      scene.placingItem = null;
      showMessage(state, 'Placed.');
    }
  }
}

function isDragPlaceType(type) {
  return type === 'belt' || type === 'fast-belt' || type === 'express-belt' ||
    type === 'underground-belt' || type === 'wall';
}

function dirFromInput(input) {
  if (input.pressed.right) return { ...DIR_RIGHT };
  if (input.pressed.left) return { ...DIR_LEFT };
  if (input.pressed.up) return { ...DIR_UP };
  if (input.pressed.down) return { ...DIR_DOWN };
  return null;
}

function rotateDirClockwise(dir = DIR_RIGHT) {
  if (dir.dx === 1) return { ...DIR_DOWN };
  if (dir.dy === 1) return { ...DIR_LEFT };
  if (dir.dx === -1) return { ...DIR_UP };
  return { ...DIR_RIGHT };
}

function dirName(dir) {
  if (dir.dx === 1) return 'RIGHT';
  if (dir.dx === -1) return 'LEFT';
  if (dir.dy === -1) return 'UP';
  if (dir.dy === 1) return 'DOWN';
  return 'RIGHT';
}

function canPlaceAt(state, x, y) {
  const tile = state.world.tiles[y]?.[x];
  if (!tile) return { ok: false, msg: 'OUT OF BOUNDS' };
  if (state.buildings[`${x},${y}`]) return { ok: false, msg: 'TILE OCCUPIED' };
  if (isSolid(state, x, y)) return { ok: false, msg: 'BLOCKED' };
  return { ok: true, msg: 'READY' };
}

function getPlacementTarget(state, placingItem) {
  ensurePlacementDefaults(state, placingItem);
  return {
    x: placingItem.x,
    y: placingItem.y,
  };
}

function drawPlacementPreview(state, placingItem, camX, camY, tileSize) {
  ensurePlacementDefaults(state, placingItem);
  const def = getItem(placingItem.item);
  const type = def?.building;
  if (!type) return;
  const target = getPlacementTarget(state, placingItem);
  const status = canPlaceAt(state, target.x, target.y);
  const frame = status.ok ? 11 : 8;
  const sx = (target.x - camX) * tileSize;
  const sy = PLAY_Y + (target.y - camY) * tileSize;

  if (type === 'turret') {
    const r = FACTORY_TURRET_RANGE;
    drawRectOutline(
      (target.x - r - camX) * tileSize,
      PLAY_Y + (target.y - r - camY) * tileSize,
      (r * 2 + 1) * tileSize,
      (r * 2 + 1) * tileSize,
      status.ok ? 10 : 8,
    );
  }

  drawRectOutline(sx - 1, sy - 1, tileSize + 2, tileSize + 2, frame);
  drawSpriteFit('bld-' + type, sx, sy, tileSize, tileSize, status.ok ? 11 : 8);

  const ports = getBuildingPorts(type, placingItem.dir);
  if (ports) {
    if (ports.flow && placingItem.dir) drawPortOutScaled(sx, sy, placingItem.dir.dx, placingItem.dir.dy, tileSize);
    if (ports.input) drawPortInScaled(sx, sy, ports.input.dx, ports.input.dy, tileSize);
    if (ports.output) drawPortOutScaled(sx, sy, ports.output.dx, ports.output.dy, tileSize);
  }

  drawPanel(28, PLAY_Y + 2, 104, 12, 1, frame);
  drawText((def?.name || placingItem.item).substring(0, 12), 32, PLAY_Y + 5, 5);
  drawText(dirName(placingItem.dir).substring(0, 1), 86, PLAY_Y + 5, 11);
  drawText(status.ok ? 'Z OK' : status.msg.substring(0, 7), 98, PLAY_Y + 5, status.ok ? 10 : 8);
}

function ensurePlacementDefaults(state, placingItem) {
  if (!placingItem.dir) placingItem.dir = { ...(state.player.dir || DIR_RIGHT) };
  if (!Number.isFinite(placingItem.x)) placingItem.x = state.player.x;
  if (!Number.isFinite(placingItem.y)) placingItem.y = state.player.y;
}

function findNearbyChest(state) {
  const px = state.player.x;
  const py = state.player.y;
  const dir = state.player.dir || DIR_RIGHT;
  const targets = [
    { x: px + dir.dx, y: py + dir.dy },
    { x: px, y: py - 1 },
    { x: px + 1, y: py },
    { x: px, y: py + 1 },
    { x: px - 1, y: py },
  ];

  for (const target of targets) {
    const key = `${target.x},${target.y}`;
    const b = state.buildings[key];
    if (isChestType(b?.type)) return { key, building: b };
  }
  return null;
}

function findFacedChest(state) {
  const px = state.player.x;
  const py = state.player.y;
  const dir = state.player.dir || DIR_RIGHT;
  const target = { x: px + dir.dx, y: py + dir.dy };
  const key = `${target.x},${target.y}`;
  const b = state.buildings[key];
  return isChestType(b?.type) ? { key, building: b } : null;
}

function isChestType(type) {
  return type === 'wood-chest' || type === 'iron-chest' || type === 'storage-chest' ||
    type === 'logi-chest' || type === 'requester-chest' || type === 'provider-chest';
}

function getMiningTarget(state) {
  const px = state.player.x;
  const py = state.player.y;
  const dir = state.player.dir || { dx: 1, dy: 0 };
  const targets = [
    { x: px, y: py },
    { x: px + dir.dx, y: py + dir.dy },
  ];

  for (const target of targets) {
    const tile = state.world.tiles[target.y]?.[target.x];
    if (!tile || state.buildings[`${target.x},${target.y}`]) continue;
    const resource = getResource(state, target.x, target.y);
    if (resource) return { ...target, tile, resource };
  }
  return null;
}

function parseMiningTile(key) {
  if (!key) return null;
  const [x, y] = key.split(',').map(Number);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
  return { x, y };
}

function placeBuilding(state, x, y, type, dir = DIR_RIGHT) {
  const key = `${x},${y}`;
  if (state.buildings[key]) {
    showMessage(state, 'Tile occupied.');
    return false;
  }
  if (isSolid(state, x, y)) {
    showMessage(state, 'Blocked by terrain.');
    return false;
  }
  state.buildings[key] = makeBuilding(x, y, type, dir);
  // Power/belt/spawner caches must rebuild to include the new building.
  state._powerDirty = true;
  state._saveDirty = true;
  return true;
}

const RESOURCE_DROPS = {
  'iron-ore': [{ type: 'iron-ore', count: 1 }],
  'copper-ore': [{ type: 'copper-ore', count: 1 }],
  'coal': [{ type: 'coal', count: 1 }],
  'stone': [{ type: 'stone', count: 1 }],
  'wood': [{ type: 'wood', count: 1 }],
  'uranium-ore': [{ type: 'uranium-ore', count: 1 }],
  'crude-oil': [{ type: 'crude-oil', count: 1 }],
  'oil': [{ type: 'crude-oil', count: 1 }],
};

const ORE_OUTLINE = {
  'iron-ore': 5, 'copper-ore': 7, 'coal': 2, 'stone': 4,
  'wood': 9, 'uranium-ore': 15, 'crude-oil': 13, 'oil': 13,
};

// makeBuilding lives in ../building.js so factory placement and save/load
// share one source of truth.

// ===== src/scenes/title.js =====
// GRIDFORGE - Title screen scene








const TitleScene = {
  cursor: 0,
  options: ['New Game', 'Architect', 'Continue', 'Lore'],
  state: null,

  enter(state) {
    this.state = state;
    this.cursor = 0;
  },

  exit() {},

  update(state, input) {
    if (input.pressed.up)   this.cursor = (this.cursor + this.options.length - 1) % this.options.length;
    if (input.pressed.down) this.cursor = (this.cursor + 1) % this.options.length;
    if (input.pressed.A) {
      const opt = this.options[this.cursor];
      if (opt === 'New Game') {
        resetState(state);
        reinitSystems(state);
        SceneManager.swap(FactoryScene, state);
        StoryScene.open(state, STORY.opening.pages, () => {});
      } else if (opt === 'Architect') {
        if (!hasArchitectUnlock(state)) return;
        resetState(state);
        state.flags.architectMode = true;
        state.flags.architectUnlocked = true;
        reinitSystems(state);
        SceneManager.swap(FactoryScene, state);
        StoryScene.open(state, STORY.opening.pages, () => {});
      } else if (opt === 'Continue') {
        const loaded = SaveSystem.load();
        if (loaded) {
          Object.keys(state).forEach(k => { delete state[k]; });
          Object.assign(state, loaded);
          reinitSystems(state);
          SceneManager.swap(FactoryScene, state);
        }
      } else if (opt === 'Lore') {
        // Lore option shows the opening cinematic as a primer.
        StoryScene.open(state, STORY.opening.pages, () => {});
      }
    }
  },

  render() {
    drawRect(0, 0, 160, 128, 1);

    drawPanel(20, 12, 120, 52, 0, 3);
    drawTextScaled('GRID', 34, 18, 11, 2);
    drawTextScaled('FORGE', 34, 34, 10, 2);
    drawTextCentered('LEGACY OF THE ARCHITECTS', 58, 4);

    const hasSave = SaveSystem.hasSave();
    const hasArchitect = hasArchitectUnlock(this.state);
    drawPanel(36, 70, 88, 48, 1, 3);
    let y = 76;
    for (let i = 0; i < this.options.length; i++) {
      const sel = (i === this.cursor);
      const opt = this.options[i];
      // Dim Continue when there is no save.
      const dim = (opt === 'Continue' && !hasSave) || (opt === 'Architect' && !hasArchitect);
      const color = sel ? 10 : (dim ? 2 : 4);
      drawText((sel ? '> ' : '  ') + opt, 44, y, color);
      y += 10;
    }

    drawTextCentered('Z SELECT', 118, 3);
  },
};

function hasArchitectUnlock(state) {
  if (state?.flags?.architectUnlocked) return true;
  try {
    return typeof window !== 'undefined' && !!window.localStorage?.getItem('gridforge-final-v1');
  } catch {
    return false;
  }
}

// ===== src/engine.js =====
// GRIDFORGE - Engine core
// State, scene wiring, game loop, and bootstrap.







// ---------- Game loop ----------
class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;
    this.state = makeInitialState();
    this.lastT = performance.now();
    this.accum = 0;
    this.tickMs = 50;  // 20 Hz
    initFB();
    SceneManager.swap(TitleScene, this.state);
  }

  tick() {
    Input.poll();
    SceneManager.update(this.state, Input);
    Input.clear();
  }

  render() {
    clearFB();
    SceneManager.render(this.state, this);
    renderFB(this.ctx);
  }

  loop(now) {
    const dt = now - this.lastT;
    this.lastT = now;
    this.accum += dt;
    while (this.accum >= this.tickMs) {
      this.tick();
      this.accum -= this.tickMs;
    }
    this.render();
    requestAnimationFrame(t => this.loop(t));
  }

  start() {
    requestAnimationFrame(t => this.loop(t));
  }
}

// Bootstrap
function boot() {
  const canvas = document.getElementById('canvas');
  if (!canvas) {
    console.error('No #canvas element');
    return;
  }
  canvas.width = PIXEL_W;
  canvas.height = PIXEL_H;
  const game = new Game(canvas);
  Input.bind(game);
  window.__GAME__ = game;  // for debugging
  game.start();
}

// ===== src/boot.js =====
// GRIDFORGE - Boot

boot();
