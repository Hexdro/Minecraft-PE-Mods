//Pokemon CENTER
var iii = 0;
var j = 0;
var xx;
var yy=80;
var zz;
var timetospawn = 12000;

//Blocks & Items
Block.defineBlock(200, "Healing Table", [["piston_side", 0],["piston_top_sticky", 0]], true, 5, 0);
Block.setDestroyTime(200, 0.5);

Block.defineBlock(201, "PC", [["piston_top_normal", 0],["piston_bottom", 0],["piston_inner", 0],["brewing_stand", 0],["brewing_stand", 0],["brewing_stand", 0]], true, 5, 0);
Block.setDestroyTime(201, 0.5);
Block.defineBlock(202, "PC", [["piston_top_normal", 0],["piston_bottom", 0],["brewing_stand", 0],["brewing_stand", 0],["brewing_stand", 0],["brewing_stand", 0]], true, 5, 0);
Block.setDestroyTime(202, 0.5);

ModPE.setItem(460, "slimeball", 0, "Pokeball 1");
ModPE.setItem(461, "slimeball", 0, "Pokeball 2");
ModPE.setItem(462, "slimeball", 0, "Pokeball 3");
ModPE.setItem(463, "slimeball", 0, "Pokeball 4");
ModPE.setItem(464, "slimeball", 0, "Pokeball 5");
ModPE.setItem(465, "slimeball", 0, "Pokeball 6");
ModPE.setItem(466, "ender_eye", 0, "Rare Candy");
ModPE.setItem(467, "record_11", 0, "Potion");
ModPE.setItem(468, "record_13", 0, "Super Potion");
ModPE.setItem(469, "record_blocks", 0, "Hyper Potion");
ModPE.setItem(470, "record_cat", 0, "Max Potion");
ModPE.setItem(471, "record_chirp", 0, "Pokedex");

Item.addShapedRecipe(200, 1, 0, ["iii","srs","sms"], ["i", 265, 0,"s", 1, 0,"r", 331, 0,"m", 325, 0]);
Item.addShapedRecipe(460, 1, 0, ["rrr","csc","iii"], ["i", 265, 0,"s", 1, 0,"r", 331, 0,"c", 263, 0]);
Item.addShapedRecipe(461, 1, 0, ["rrr","csc","iii"], ["i", 265, 0,"s", 1, 0,"r", 331, 0,"c", 263, 0]);
Item.addShapedRecipe(462, 1, 0, ["rrr","csc","iii"], ["i", 265, 0,"s", 1, 0,"r", 331, 0,"c", 263, 0]);
Item.addShapedRecipe(463, 1, 0, ["rrr","csc","iii"], ["i", 265, 0,"s", 1, 0,"r", 331, 0,"c", 263, 0]);
Item.addShapedRecipe(464, 1, 0, ["rrr","csc","iii"], ["i", 265, 0,"s", 1, 0,"r", 331, 0,"c", 263, 0]);
Item.addShapedRecipe(465, 1, 0, ["rrr","csc","iii"], ["i", 265, 0,"s", 1, 0,"r", 331, 0,"c", 263, 0]);
Item.addShapedRecipe(466, 1, 0, ["   ","sgz","   "], ["s", 348, 0,"g", 266, 0,"z", 353, 0]);
Item.addShapedRecipe(467, 4, 0, ["   "," a "," b "], ["a", 260, 0,"b", 325, 0]);

Item.addShapedRecipe(468, 4, 0, ["   "," a "," b "], ["a", 263, 0,"b", 325, 0]);
Item.addShapedRecipe(469, 4, 0, ["   "," a "," b "], ["a", 265, 0,"b", 325, 0]);
Item.addShapedRecipe(470, 4, 0, ["   "," a "," b "], ["a", 266, 0,"b", 325, 0]);
Item.addShapedRecipe(471, 1, 0, ["iri","igi","iri"], ["i", 265, 0,"g", 20, 0,"r", 331, 0]);
Item.addShapedRecipe(201, 1, 0, ["iii","igi","iri"], ["i", 265, 0,"g", 20, 0,"r", 331, 0]);

//Trainer
var TrainerType = 0;
var TrainerMobs = 0;
var TrainerMob = null;
var TrainerX = 0;
var TrainerY = 0;
var TrainerZ = 0;
var TrainerText = ["You can't beat me, my Pokemon are too strong for you!", "I cought a new Pokemon, let's check it's power!", "ARHG! Surprise! Let's Battle!", "I can't lose on my birthday!", "Check my new Pokemon!", "How about a battle?", "ATTACK!", "You'll never guess my Pokemon's nickname!", "I've already more than 20 Pokemon!", "I'll be a legend when I finish you off!", "Look! I have a badge!", "Once I've beaten the Pokemon Champion, you can be my assistant!", "I love catching Pokemon while I listen to the radio!", "I got my first Pokemon from Prof. Hexdro!", "How strong are your Pokemon?", "I found a Stone on the ground... BUT THEY ARE EVERYWHERE!", "I never lost!", "I'm not a Hunter, I'm a trainer!", "Are you kidding me?", "Can I test my Pokemon on you?"];

//Starter
var gotit = false;

//Battle Items
var potionshow = false;
var superpotionshow = false;
var hyperpotionshow = false;
var maxpotionshow = false;

//Attack
var Attacker;
var Attacked;
var healthAttacker;
var healthAttacked;
var damageAttacker;
var damageAttacked;
var maxhealthAttacker;
var maxhealthAttacked;
var healthBarAttacker;
var healthBarAttacked;
var ctx = null;
var simpleGUI = null;
var simpleGUI2 = null;

//Evolution
var PokeLevel;
var Evolver;

//Pokemon
var Pokemon1;
var Pokemon2;
var Pokemon3;
var Pokemon4;
var Pokemon5;
var Pokemon6;
var Charmander;
var Charmeleon;

//Texture animation-related Variables
var charmanderticks = 4;
var animationofcharmander = 0;
var charmeleonticks = 4;
var animationofcharmeleon = 0;

//Summon

var summon = false;
var summon2 = false;
var summon3 = false;
var summon4 = false;
var summon5 = false;
var summon6 = false;
var summoned = false;
var summoned2 = false;
var summoned3 = false;
var summoned4 = false;
var summoned5 = false;
var summoned6 = false;
var PokeballSummon;
var PokeballSummon2;
var PokeballSummon3;
var PokeballSummon4;
var PokeballSummon5;
var PokeballSummon6;

//Capture

var PokeballCapture;
var captured = false;
var captured2 = false;
var captured3 = false;
var captured4 = false;
var captured5 = false;
var captured6 = false;
var cap;
var cap2;
var cap3;
var cap4;
var cap5;
var cap6;
var killball = false;
var killballtick = 20;

//Getting informations

var Rendertype;
var Rendertype2;
var Rendertype3;
var Rendertype4;
var Rendertype5;
var Rendertype6;
var Mobskin;
var Mobskin2;
var Mobskin3;
var Mobskin4;
var Mobskin5;
var Mobskin6;
var Nametag;
var Nametag2;
var Nametag3;
var Nametag4;
var Nametag5;
var Nametag6;

//Level
var AerodactylLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var AerodactylNT = "Aerodactyl (Lvl " + AerodactylLVL + ")";

var BayleefLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var BayleefNT = "Bayleef (Lvl " + BayleefLVL + ")";

var BeedrillLVL = Math.floor(Math.random() * (18 - 14 + 1)) + 14;
var BeedrillNT = "Beedrill (Lvl " + BeedrillLVL + ")";

var BlastoiseLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
var BlastoiseNT = "Blastoise (Lvl " + BlastoiseLVL + ")";

var BlazikenLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
var BlazikenNT = "Blaziken (Lvl " + BlazikenLVL + ")";

var BulbasaurLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var BulbasaurNT = "Bulbasaur (Lvl " + BulbasaurLVL + ")";

var ButterfreeLVL = Math.floor(Math.random() * (18 - 14 + 1)) + 14;
var ButterfreeNT = "Butterfree (Lvl " + ButterfreeLVL + ")";

var CaterpieLVL = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
var CaterpieNT = "Caterpie (Lvl " + CaterpieLVL + ")";

var CharizardLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
var CharizardNT = "Charizard (Lvl " + CharizardLVL + ")";

var CharmanderLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var CharmanderNT = "Charmander (Lvl " + CharmanderLVL + ")";

var CharmeleonLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var CharmeleonNT = "Charmeleon (Lvl " + CharmeleonLVL + ")";

var CombuskenLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var CombuskenNT = "Combusken (Lvl " + CombuskenLVL + ")";

var CroconawLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var CroconawNT = "Croconaw (Lvl " + CroconawLVL + ")";

var DodrioLVL = Math.floor(Math.random() * (28 - 22 + 1)) + 22;
var DodrioNT = "Dodrio (Lvl " + DodrioLVL + ")";

var DoduoLVL = Math.floor(Math.random() * (20 - 14 + 1)) + 14;
var DoduoNT = "Doduo (Lvl " + DoduoLVL + ")";

var DunsparceLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var DunsparceNT = "Dunsparce (Lvl " + DunsparceLVL + ")";

var EeveeLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var EeveeNT = "Eevee (Lvl " + EeveeLVL + ")";

var ElectrodeLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var ElectrodeNT = "Electrode (Lvl " + ElectrodeLVL + ")";

var EspeonLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var EspeonNT = "Espeon (Lvl " + EspeonLVL + ")";

var FeraligatrLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
var FeraligatrNT = "Feraligatr (Lvl " + FeraligatrLVL + ")";

var FlareonLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var FlareonNT = "Flareon (Lvl " + FlareonLVL + ")";

var GastlyLVL = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
var GastlyNT = "Gastly (Lvl " + GastlyLVL + ")";

var GengarLVL = Math.floor(Math.random() * (36 - 30 + 1)) + 30;
var GengarNT = "Gengar (Lvl " + GengarLVL + ")";

var GolbatLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var GolbatNT = "Golbat (Lvl " + GolbatLVL + ")";

var GolemLVL = Math.floor(Math.random() * (36 - 30 + 1)) + 30;
var GolemNT = "Golem (Lvl " + GolemLVL + ")";

var GravelerLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var GravelerNT = "Graveler (Lvl " + GravelerLVL + ")";

var GrovyleLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var GrovyleNT = "Grovyle (Lvl " + GrovyleLVL + ")";

var HaunterLVL = Math.floor(Math.random() * (28 - 20 + 1)) + 20;
var HaunterNT = "Haunter (Lvl " + HaunterLVL + ")";

var IvysaurLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 20;
var IvysaurNT = "Ivysaur (Lvl " + IvysaurLVL + ")";

var JolteonLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var JolteonNT = "Jolteon (Lvl " + JolteonLVL + ")";

var KakunaLVL = Math.floor(Math.random() * (9 - 7 + 1)) + 7;
var KakunaNT = "Kakuna (Lvl " + KakunaLVL + ")";

var KoffingLVL = Math.floor(Math.random() * (16 - 12 + 1)) + 12;
var KoffingNT = "Koffing (Lvl " + KoffingLVL + ")";

var MagikarpLVL = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
var MagikarpNT = "Magikarp (Lvl " + MagikarpLVL + ")";

var MagnemiteLVL = Math.floor(Math.random() * (16 - 12 + 1)) + 12;
var MagnemiteNT = "Magnemite (Lvl " + MagnemiteLVL + ")";

var MankeyLVL = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
var MankeyNT = "Mankey (Lvl " + MankeyLVL + ")";

var MareepLVL = Math.floor(Math.random() * (16 - 12 + 1)) + 12;
var MareepNT = "Mareep (Lvl " + MareepLVL + ")";

var MarshtompLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var MarshtompNT = "Marshtomp (Lvl " + MarshtompLVL + ")";

var MeganiumLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
var MeganiumNT = "Meganium (Lvl " + MeganiumLVL + ")";

var MetapodLVL = Math.floor(Math.random() * (9 - 7 + 1)) + 7;
var MetapodNT = "Metapod (Lvl " + MetapodLVL + ")";

var MudkipLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var MudkipNT = "Mudkip (Lvl " + MudkipLVL + ")";

var CelebiLVL = Math.floor(Math.random() * (50 - 50 + 1)) + 50;
var CelebiNT = "Celebi (Lvl " + CelebiLVL + ")";

var EnteiLVL = Math.floor(Math.random() * (50 - 50 + 1)) + 50;
var EnteiNT = "Entei (Lvl " + EnteiLVL + ")";

var MewtwoLVL = Math.floor(Math.random() * (50 - 50 + 1)) + 50;
var MewtwoNT = "Mewtwo (Lvl " + MewtwoLVL + ")";

var NidoranFLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var NidoranFNT = "NidoranF (Lvl " + NidoranFLVL + ")";

var NidoranMLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var NidoranMNT = "NidoranM (Lvl " + NidoranMLVL + ")";

var NidorinaLVL = Math.floor(Math.random() * (20 - 16 + 1)) + 16;
var NidorinaNT = "Nidorina (Lvl " + NidorinaLVL + ")";

var NidorinoLVL = Math.floor(Math.random() * (20 - 16 + 1)) + 16;
var NidorinoNT = "Nidorino (Lvl " + NidorinoLVL + ")";

var PichuLVL = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
var PichuNT = "Pichu (Lvl " + PichuLVL + ")";

var PidgeotLVL = Math.floor(Math.random() * (32 - 28 + 1)) + 28;
var PidgeotNT = "Pidgeot (Lvl " + PidgeotLVL + ")";

var PidgeottoLVL = Math.floor(Math.random() * (24 - 20 + 1)) + 20;
var PidgeottoNT = "Pidgeotto (Lvl " + PidgeottoLVL + ")";

var PidgeyLVL = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
var PidgeyNT = "Pidgey (Lvl " + PidgeyLVL + ")";

var PikachuLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var PikachuNT = "Pikachu (Lvl " + PikachuLVL + ")";

var QuilavaLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var QuilavaNT = "Quilava (Lvl " + QuilavaLVL + ")";

var RaichuLVL = Math.floor(Math.random() * (30 - 22 + 1)) + 22;
var RaichuNT = "Raichu (Lvl " + RaichuLVL + ")";

var RattataLVL = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
var RattataNT = "Rattata (Lvl " + RattataLVL + ")";

var ShellderLVL = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
var ShellderNT = "Shellder (Lvl " + ShellderLVL + ")";

var SlowpokeLVL = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
var SlowpokeNT = "Slowpoke (Lvl " + SlowpokeLVL + ")";

var SpearowLVL = Math.floor(Math.random() * (12 - 6 + 1)) + 6;
var SpearowNT = "Spearow (Lvl " + SpearowLVL + ")";

var SquirtleLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var SquirtleNT = "Squirtle (Lvl " + SquirtleLVL + ")";

var SudowoodoLVL = Math.floor(Math.random() * (30 - 25 + 1)) + 25;
var SudowoodoNT = "Sudowoodo (Lvl " + SudowoodoLVL + ")";

var SunfloraLVL = Math.floor(Math.random() * (20 - 12 + 1)) + 12;
var SunfloraNT = "Sunflora (Lvl " + SunfloraLVL + ")";

var SunkernLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var SunkernNT = "Sunkern (Lvl " + SunkernLVL + ")";

var SwellowLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var SwellowNT = "Swellow (Lvl " + SwellowLVL + ")";

var TaillowLVL = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
var TaillowNT = "Taillow (Lvl " + TaillowLVL + ")";

var TentacoolLVL = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
var TentacoolNT = "Tentacool (Lvl " + TentacoolLVL + ")";

var TentacruelLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var TentacruelNT = "Tentacruel (Lvl " + TentacruelLVL + ")";

var TogepiLVL = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
var TogepiNT = "Togepi (Lvl " + TogepiLVL + ")";

var TorchicLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var TorchicNT = "Torchic (Lvl " + TorchicLVL + ")";

var TreeckoLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var TreeckoNT = "Treecko (Lvl " + TreeckoLVL + ")";

var TyphlosionLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
var TyphlosionNT = "Typhlosion (Lvl " + TyphlosionLVL + ")";

var UmbreonLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var UmbreonNT = "Umbreon (Lvl " + UmbreonLVL + ")";

var VaporeonLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var VaporeonNT = "Vaporeon (Lvl " + VaporeonLVL + ")";

var VenusaurLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
var VenusaurNT = "Venusaur (Lvl " + VenusaurLVL + ")";

var VoltorbLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var VoltorbNT = "Voltorb (Lvl " + VoltorbLVL + ")";

var WailmerLVL = Math.floor(Math.random() * (20 - 16 + 1)) + 16;
var WailmerNT = "Wailmer (Lvl " + WailmerLVL + ")";

var WailordLVL = Math.floor(Math.random() * (36 - 32 + 1)) + 32;
var WailordNT = "Wailord (Lvl " + WailordLVL + ")";

var WartortleLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var WartortleNT = "Wartortle (Lvl " + WartortleLVL + ")";

var WeedleLVL = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
var WeedleNT = "Weedle (Lvl " + WeedleLVL + ")";

var WeezingLVL = Math.floor(Math.random() * (36 - 32 + 1)) + 32;
var WeezingNT = "Weezing (Lvl " + WeezingLVL + ")";

var WobbuffetLVL = Math.floor(Math.random() * (24 - 22 + 1)) + 22;
var WobbuffetNT = "Wobbuffet (Lvl " + WobbuffetLVL + ")";

var ZubatLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var ZubatNT = "Zubat (Lvl " + ZubatLVL + ")";

function mix() {
var AerodactylLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var AerodactylNT = "Aerodactyl (Lvl " + AerodactylLVL + ")";

var BayleefLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var BayleefNT = "Bayleef (Lvl " + BayleefLVL + ")";

var BeedrillLVL = Math.floor(Math.random() * (18 - 14 + 1)) + 14;
var BeedrillNT = "Beedrill (Lvl " + BeedrillLVL + ")";

var BlastoiseLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
var BlastoiseNT = "Blastoise (Lvl " + BlastoiseLVL + ")";

var BlazikenLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
var BlazikenNT = "Blaziken (Lvl " + BlazikenLVL + ")";

var BulbasaurLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var BulbasaurNT = "Bulbasaur (Lvl " + BulbasaurLVL + ")";

var ButterfreeLVL = Math.floor(Math.random() * (18 - 14 + 1)) + 14;
var ButterfreeNT = "Butterfree (Lvl " + ButterfreeLVL + ")";

var CaterpieLVL = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
var CaterpieNT = "Caterpie (Lvl " + CaterpieLVL + ")";

var CharizardLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
var CharizardNT = "Charizard (Lvl " + CharizardLVL + ")";

var CharmanderLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var CharmanderNT = "Charmander (Lvl " + CharmanderLVL + ")";

var CharmeleonLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var CharmeleonNT = "Charmeleon (Lvl " + CharmeleonLVL + ")";

var CombuskenLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var CombuskenNT = "Combusken (Lvl " + CombuskenLVL + ")";

var CroconawLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var CroconawNT = "Croconaw (Lvl " + CroconawLVL + ")";

var DodrioLVL = Math.floor(Math.random() * (28 - 22 + 1)) + 22;
var DodrioNT = "Dodrio (Lvl " + DodrioLVL + ")";

var DoduoLVL = Math.floor(Math.random() * (20 - 14 + 1)) + 14;
var DoduoNT = "Doduo (Lvl " + DoduoLVL + ")";

var DunsparceLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var DunsparceNT = "Dunsparce (Lvl " + DunsparceLVL + ")";

var EeveeLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var EeveeNT = "Eevee (Lvl " + EeveeLVL + ")";

var ElectrodeLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var ElectrodeNT = "Electrode (Lvl " + ElectrodeLVL + ")";

var EspeonLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var EspeonNT = "Espeon (Lvl " + EspeonLVL + ")";

var FeraligatrLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
var FeraligatrNT = "Feraligatr (Lvl " + FeraligatrLVL + ")";

var FlareonLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var FlareonNT = "Flareon (Lvl " + FlareonLVL + ")";

var GastlyLVL = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
var GastlyNT = "Gastly (Lvl " + GastlyLVL + ")";

var GengarLVL = Math.floor(Math.random() * (36 - 30 + 1)) + 30;
var GengarNT = "Gengar (Lvl " + GengarLVL + ")";

var GolbatLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var GolbatNT = "Golbat (Lvl " + GolbatLVL + ")";

var GolemLVL = Math.floor(Math.random() * (36 - 30 + 1)) + 30;
var GolemNT = "Golem (Lvl " + GolemLVL + ")";

var GravelerLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var GravelerNT = "Graveler (Lvl " + GravelerLVL + ")";

var GrovyleLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var GrovyleNT = "Grovyle (Lvl " + GrovyleLVL + ")";

var HaunterLVL = Math.floor(Math.random() * (28 - 20 + 1)) + 20;
var HaunterNT = "Haunter (Lvl " + HaunterLVL + ")";

var IvysaurLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 20;
var IvysaurNT = "Ivysaur (Lvl " + IvysaurLVL + ")";

var JolteonLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var JolteonNT = "Jolteon (Lvl " + JolteonLVL + ")";

var KakunaLVL = Math.floor(Math.random() * (9 - 7 + 1)) + 7;
var KakunaNT = "Kakuna (Lvl " + KakunaLVL + ")";

var KoffingLVL = Math.floor(Math.random() * (16 - 12 + 1)) + 12;
var KoffingNT = "Koffing (Lvl " + KoffingLVL + ")";

var MagikarpLVL = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
var MagikarpNT = "Magikarp (Lvl " + MagikarpLVL + ")";

var MagnemiteLVL = Math.floor(Math.random() * (16 - 12 + 1)) + 12;
var MagnemiteNT = "Magnemite (Lvl " + MagnemiteLVL + ")";

var MankeyLVL = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
var MankeyNT = "Mankey (Lvl " + MankeyLVL + ")";

var MareepLVL = Math.floor(Math.random() * (16 - 12 + 1)) + 12;
var MareepNT = "Mareep (Lvl " + MareepLVL + ")";

var MarshtompLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var MarshtompNT = "Marshtomp (Lvl " + MarshtompLVL + ")";

var MeganiumLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
var MeganiumNT = "Meganium (Lvl " + MeganiumLVL + ")";

var MetapodLVL = Math.floor(Math.random() * (9 - 7 + 1)) + 7;
var MetapodNT = "Metapod (Lvl " + MetapodLVL + ")";

var MudkipLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var MudkipNT = "Mudkip (Lvl " + MudkipLVL + ")";

var CelebiLVL = Math.floor(Math.random() * (50 - 50 + 1)) + 50;
var CelebiNT = "Celebi (Lvl " + CelebiLVL + ")";

var EnteiLVL = Math.floor(Math.random() * (50 - 50 + 1)) + 50;
var EnteiNT = "Entei (Lvl " + EnteiLVL + ")";

var MewtwoLVL = Math.floor(Math.random() * (50 - 50 + 1)) + 50;
var MewtwoNT = "Mewtwo (Lvl " + MewtwoLVL + ")";

var NidoranFLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var NidoranFNT = "NidoranF (Lvl " + NidoranFLVL + ")";

var NidoranMLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var NidoranMNT = "NidoranM (Lvl " + NidoranMLVL + ")";

var NidorinaLVL = Math.floor(Math.random() * (20 - 16 + 1)) + 16;
var NidorinaNT = "Nidorina (Lvl " + NidorinaLVL + ")";

var NidorinoLVL = Math.floor(Math.random() * (20 - 16 + 1)) + 16;
var NidorinoNT = "Nidorino (Lvl " + NidorinoLVL + ")";

var PichuLVL = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
var PichuNT = "Pichu (Lvl " + PichuLVL + ")";

var PidgeotLVL = Math.floor(Math.random() * (32 - 28 + 1)) + 28;
var PidgeotNT = "Pidgeot (Lvl " + PidgeotLVL + ")";

var PidgeottoLVL = Math.floor(Math.random() * (24 - 20 + 1)) + 20;
var PidgeottoNT = "Pidgeotto (Lvl " + PidgeottoLVL + ")";

var PidgeyLVL = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
var PidgeyNT = "Pidgey (Lvl " + PidgeyLVL + ")";

var PikachuLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var PikachuNT = "Pikachu (Lvl " + PikachuLVL + ")";

var QuilavaLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var QuilavaNT = "Quilava (Lvl " + QuilavaLVL + ")";

var RaichuLVL = Math.floor(Math.random() * (30 - 22 + 1)) + 22;
var RaichuNT = "Raichu (Lvl " + RaichuLVL + ")";

var RattataLVL = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
var RattataNT = "Rattata (Lvl " + RattataLVL + ")";

var ShellderLVL = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
var ShellderNT = "Shellder (Lvl " + ShellderLVL + ")";

var SlowpokeLVL = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
var SlowpokeNT = "Slowpoke (Lvl " + SlowpokeLVL + ")";

var SpearowLVL = Math.floor(Math.random() * (12 - 6 + 1)) + 6;
var SpearowNT = "Spearow (Lvl " + SpearowLVL + ")";

var SquirtleLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var SquirtleNT = "Squirtle (Lvl " + SquirtleLVL + ")";

var SudowoodoLVL = Math.floor(Math.random() * (30 - 25 + 1)) + 25;
var SudowoodoNT = "Sudowoodo (Lvl " + SudowoodoLVL + ")";

var SunfloraLVL = Math.floor(Math.random() * (20 - 12 + 1)) + 12;
var SunfloraNT = "Sunflora (Lvl " + SunfloraLVL + ")";

var SunkernLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var SunkernNT = "Sunkern (Lvl " + SunkernLVL + ")";

var SwellowLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var SwellowNT = "Swellow (Lvl " + SwellowLVL + ")";

var TaillowLVL = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
var TaillowNT = "Taillow (Lvl " + TaillowLVL + ")";

var TentacoolLVL = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
var TentacoolNT = "Tentacool (Lvl " + TentacoolLVL + ")";

var TentacruelLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var TentacruelNT = "Tentacruel (Lvl " + TentacruelLVL + ")";

var TogepiLVL = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
var TogepiNT = "Togepi (Lvl " + TogepiLVL + ")";

var TorchicLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var TorchicNT = "Torchic (Lvl " + TorchicLVL + ")";

var TreeckoLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var TreeckoNT = "Treecko (Lvl " + TreeckoLVL + ")";

var TyphlosionLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
var TyphlosionNT = "Typhlosion (Lvl " + TyphlosionLVL + ")";

var UmbreonLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var UmbreonNT = "Umbreon (Lvl " + UmbreonLVL + ")";

var VaporeonLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
var VaporeonNT = "Vaporeon (Lvl " + VaporeonLVL + ")";

var VenusaurLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
var VenusaurNT = "Venusaur (Lvl " + VenusaurLVL + ")";

var VoltorbLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var VoltorbNT = "Voltorb (Lvl " + VoltorbLVL + ")";

var WailmerLVL = Math.floor(Math.random() * (20 - 16 + 1)) + 16;
var WailmerNT = "Wailmer (Lvl " + WailmerLVL + ")";

var WailordLVL = Math.floor(Math.random() * (36 - 32 + 1)) + 32;
var WailordNT = "Wailord (Lvl " + WailordLVL + ")";

var WartortleLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
var WartortleNT = "Wartortle (Lvl " + WartortleLVL + ")";

var WeedleLVL = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
var WeedleNT = "Weedle (Lvl " + WeedleLVL + ")";

var WeezingLVL = Math.floor(Math.random() * (36 - 32 + 1)) + 32;
var WeezingNT = "Weezing (Lvl " + WeezingLVL + ")";

var WobbuffetLVL = Math.floor(Math.random() * (24 - 22 + 1)) + 22;
var WobbuffetNT = "Wobbuffet (Lvl " + WobbuffetLVL + ")";

var ZubatLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
var ZubatNT = "Zubat (Lvl " + ZubatLVL + ")";
}

/*#######################################################################*/
/*#################################MODELS################################*/
/*#######################################################################*/

function addTotodileRenderType(renderer) {
var var2 = 0;
var model = renderer.getModel();
var bipedBody = model.getPart("body").clear();
bipedBody.addBox(0.0, 11.0, 0.0, 6, 10, 6);
//head
bipedBody.setTextureOffset(0, 14);
bipedBody.addBox(0.0, 6.0, 0.0, 6, 5, 6);
bipedBody.setTextureOffset(26, 0);
bipedBody.addBox(0.0, 7.5, -4.0, 6, 4, 4);
//tail
bipedBody.setTextureOffset(21, 18);
bipedBody.addBox(1.5, 18.0, 6.0, 3, 3, 6.5);
//scales
bipedBody.setTextureOffset(55, 0);
bipedBody.addBox(3.0, 17.0, 9.0, 0, 1, 3);
bipedBody.addBox(3.0, 16.0, 9.5, 0, 1, 2);
bipedBody.addBox(3.0, 15.0, 10.0, 0, 1, 1);
bipedBody.addBox(3.0, 8.0, 6.0, 0, 8, 1);
bipedBody.addBox(3.0, 8.5, 7.0, 0, 2, 1);
bipedBody.addBox(3.0, 11.0, 7.0, 0, 2, 1);
bipedBody.addBox(3.0, 13.5, 7.0, 0, 2, 1);
bipedBody.addBox(3.0, 9.0, 8.0, 0, 1, 1);
bipedBody.addBox(3.0, 11.5, 8.0, 0, 1, 1);
bipedBody.addBox(3.0, 14.0, 8.0, 0, 1, 1);
var bipedHead = model.getPart("head").clear();
var bipedLeg = model.getPart("rightLeg").clear();
bipedLeg.setTextureOffset(54, 10);
bipedLeg.addBox(0.0, 4.0, 0.0, 2, 4, 5);
bipedLeg.addBox(0.0, 8.0, 0.0, 2, 4, 3);
bipedLeg.addBox(-1.0, 11.0, -3.0, 4, 1, 4);
var bipedLeg2 = model.getPart("leftLeg").clear();
bipedLeg2.setTextureOffset(54, 10);
bipedLeg2.addBox(4.0, 4.0, 0.0, 2, 4, 5);
bipedLeg2.addBox(4.0, 8.0, 0.0, 2, 4, 3);
bipedLeg2.addBox(3.0, 11.0, -3.0, 4, 1, 4);
var bipedArm = model.getPart("rightArm").clear();
bipedArm.setTextureOffset(54, 10);
bipedArm.addBox(4.0, 9.5, -2.0, 2, 4, 2);
var bipedArm2 = model.getPart("leftArm").clear();
bipedArm2.setTextureOffset(54, 10);
bipedArm2.addBox(0.0, 9.5, -2.0, 2, 4, 2);
}

var TotodileRenderType = Renderer.createHumanoidRenderer();
addTotodileRenderType(TotodileRenderType);


function addCyndaquilRenderType(renderer) {
var model = renderer.getModel();
var bipedBody = model.getPart("body").clear();
bipedBody.setTextureOffset(79, 0);
bipedBody.addBox(0.0, 16.0, -4.0, 5, 5, 10);
var bipedHead = model.getPart("head").clear();
bipedHead.setTextureOffset(0, 1);
bipedHead.setRotationPoint(0.0, 11.0, -1.0);
bipedHead.addBox(0.0, 11.0, -4.0, 5, 5, 5);
bipedHead.setTextureOffset(1, 12);
bipedHead.addBox(0.5, 13.0, -7.0, 4, 2, 3);
var bipedLeg = model.getPart("rightLeg").clear();
bipedLeg.setRotationPoint(3.0, 4.0, 0.0);
bipedLeg.setTextureOffset(0, 27);
bipedLeg.addBox(-5.0, 8.0, -3.0, 2, 3, 2);
bipedLeg.setRotationPoint(3.0, 4.0, 6.0);
bipedLeg.addBox(-5.0, 8.0, 3.0, 2, 3, 2);
bipedLeg.setTextureOffset(32, 0);
bipedLeg.addBox(-5.0, 4.0, 2.0, 2, 4, 4);
var bipedLeg2 = model.getPart("leftLeg").clear();
bipedLeg2.setTextureOffset(0, 27);
bipedLeg2.setRotationPoint(1.0, 4.0, 0.0);
bipedLeg2.addBox(3.0, 8.0, -3.0, 2, 3, 2);
bipedLeg2.setRotationPoint(1.0, 4.0, 0.0);
bipedLeg2.addBox(3.0, 8.0, 3.0, 2, 3, 2);
bipedLeg2.setTextureOffset(32, 0);
bipedLeg2.addBox(3.0, 4.0, 2.0, 2, 4, 4);
var bipedarm = model.getPart("rightArm").clear();
var bipedarm2 = model.getPart("leftArm").clear();
}

var CyndaquilRenderType = Renderer.createHumanoidRenderer();
addCyndaquilRenderType(CyndaquilRenderType);


function addChikoritaRenderType(renderer) {
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear()

body.clear();
body.setTextureOffset(14, 0);
body.addBox(0, 19, 0, 4, 3, 8);
body.setTextureOffset(0, 0);
body.addBox(0, 14, 0, 4, 5, 3);
body.setTextureOffset(60, 0);
body.addBox(1.5, 18.5, 7.5, 1, 1, 1);
body.setTextureOffset(50, 6);
body.addBox(0.5, 11, 2, 3, 1, 4);
body.setTextureOffset(60, 3);
body.addBox(1.5, 12, 2, 1, 2, 1);
body.setTextureOffset(60, 3);
body.addBox(-0.5, 18.5, -0.5, 1, 1, 1);
body.setTextureOffset(60, 3);
body.addBox(3.5, 18.5, -0.5, 1, 1, 1);
body.setTextureOffset(60, 3);
body.addBox(1.5, 18.5, -0.5, 1, 1, 1);
body.setTextureOffset(60, 3);
body.addBox(-0.5, 18.5, 1.5, 1, 1, 1);
body.setTextureOffset(60, 3);
body.addBox(3.5, 18.5, 1.5, 1, 1, 1);
rArm.setTextureOffset(60, 0);
rArm.addBox(6, 20, 0, 1, 2, 1);
lArm.setTextureOffset(60, 0);
lArm.addBox(-3, 20, 0, 1, 2, 1)
rLeg.setTextureOffset(60, 0);
rLeg.addBox(2, 10, 7, 1, 2, 1)
lLeg.setTextureOffset(60, 0);
lLeg.addBox(1, 10, 7, 1, 2, 1)
}

var ChikoritaRenderType = Renderer.createHumanoidRenderer();
addChikoritaRenderType(ChikoritaRenderType);

function addAerodactylRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(0, 0, 0, 5, 5, 5);
head.setTextureOffset(40, 0);
head.addBox(0, -3, 3, 0, 3, 2);
head.setTextureOffset(40, 0);
head.addBox(0, -4, 4, 0, 4, 1);
head.setTextureOffset(40, 0);
head.addBox(5, -3, 3, 0, 3, 2);
head.setTextureOffset(40, 0);
head.addBox(5, -4, 4, 0, 4, 1);
head.setTextureOffset(20, 0);
head.addBox(0, 1, -5, 5, 4, 5);
body.clear();
body.setTextureOffset(40, 0);
body.addBox(0, 1, 5, 5, 4, 3);
body.setTextureOffset(40, 0);
body.addBox(-1, 0, 8, 7, 7, 5);
body.setTextureOffset(40, 0);
body.addBox(-1, 0, 13, 7, 7, 5);
body.setTextureOffset(40, 0);
body.addBox(-1, 0, 18, 7, 7, 5);
body.setTextureOffset(40, 0);
body.addBox(-1, 0, 23, 7, 7, 5);
body.setTextureOffset(40, 0);
body.addBox(-1, 2, 28, 7, 5, 5);
body.setTextureOffset(40, 0);
body.addBox(0, 3, 33, 5, 4, 4);
body.setTextureOffset(40, 0);
body.addBox(-1, -3, 8, 1, 3, 3);
body.setTextureOffset(40, 0);
body.addBox(5, -3, 8, 1, 3, 3);
body.setTextureOffset(40, 0);
body.addBox(-3, 3, 18, 4, 6, 6);
body.setTextureOffset(40, 0);
body.addBox(-5, 3, 24, 2, 8, 2);
body.setTextureOffset(40, 0);
body.addBox(4, 3, 18, 4, 6, 6);
body.setTextureOffset(40, 0);
body.addBox(8, 3, 24, 2, 8, 2);
body.setTextureOffset(0, 22, true);
body.addBox(-25, 2, 13, 24, 0, 10);
body.setTextureOffset(24, 22, true);
body.addBox(6, 2, 13, 24, 0, 10);
lArm.clear();
rArm.clear();
lLeg.clear();
rLeg.clear();

}

var AerodactylRenderType = Renderer.createHumanoidRenderer();
addAerodactylRenderType(AerodactylRenderType);

function addBayleefRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

head.setTextureOffset(0, 0);
head.addBox(-2, 3, -7, 6, 5, 7);

head.setTextureOffset(0, 30, true);
head.addBox(1, -4, -4, 0, 7, 14);

body.clear();

body.setTextureOffset(28, 14);
body.addBox(-2, 11, 0, 7, 7, 11);

body.setTextureOffset(38, 0);
body.addBox(0, 13, 11, 3, 2, 6);

body.setTextureOffset(0, 19);
body.addBox(-1, 5, 0, 5, 8, 5);

rArm.clear();
rArm.setTextureOffset(26, 0);
rArm.addBox(4, 16, 8, 3, 7, 3);

lArm.clear();
lArm.setTextureOffset(26, 0);
lArm.addBox(-4, 16, 8, 3, 7, 3);

rLeg.clear();
rLeg.setTextureOffset(26, 0);
rLeg.addBox(0, 6, 0, 3, 7, 3);

lLeg.clear();
lLeg.setTextureOffset(26, 0);
lLeg.addBox(0, 6, 0, 3, 7, 3);

}

var BayleefRenderType = Renderer.createHumanoidRenderer();
addBayleefRenderType(BayleefRenderType);

function addBeedrillRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(0, -8, 0, 5, 5, 5);
body.setTextureOffset(38, 0);
body.addBox(0.5, -13, 2, 1, 5, 1);
body.setTextureOffset(38, 0);
body.addBox(3.5, -13, 2, 1, 5, 1);
body.setTextureOffset(42, 0);
body.addBox(1, -3, 1, 3, 3, 4);
body.setTextureOffset(20, 0);
body.addBox(0, 0, 1, 5, 6, 4);

body.setTextureOffset(42, 0);
body.addBox(-6, 3, 2, 6, 1, 1);
body.setTextureOffset(42, 0);
body.addBox(-6, 3, -3, 1, 1, 5);
body.setTextureOffset(24, 10);
body.addBox(-8, 1, -5, 5, 5, 2);
body.setTextureOffset(24, 10);
body.addBox(-7, 2, -10, 3, 3, 5);
body.setTextureOffset(24, 10);
body.addBox(-6, 3, -15, 1, 1, 5);

body.setTextureOffset(42, 0);
body.addBox(5, 3, 2, 6, 1, 1);
body.setTextureOffset(42, 0);
body.addBox(11, 3, -3, 1, 1, 5);
body.setTextureOffset(24, 10);
body.addBox(9, 1, -5, 5, 5, 2);
body.setTextureOffset(24, 10);
body.addBox(10, 2, -10, 3, 3, 5);
body.setTextureOffset(24, 10);
body.addBox(11, 3, -15, 1, 1, 5);

body.setTextureOffset(42, 0);
body.addBox(2, 6, 2, 1, 5, 1);

body.setTextureOffset(0, 12, true);
body.addBox(-8, -13, 5, 12, 20, 0);
body.setTextureOffset(40, 12, true);
body.addBox(2, -13, 5, 12, 20, 0);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var BeedrillRenderType = Renderer.createHumanoidRenderer();
addBeedrillRenderType(BeedrillRenderType);

function addBlastoiseRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, -5, -2, 6, 6, 6);
head.setTextureOffset(20, 2);
head.addBox(-2, -2.5, -3, 6, 3, 1);

body.clear();
body.setTextureOffset(16, 8, true);
body.addBox(-5, 2, 2, 12, 16, 8, 1);
body.setTextureOffset(56, 22, true);
body.addBox(-4, -2, 4, 1, 4, 1);
body.setTextureOffset(56, 22, true);
body.addBox(5, -2, 4, 1, 4, 1);
body.setTextureOffset(56, 27, true);
body.addBox(-4.5, -4, 3.5, 2, 3, 2);
body.setTextureOffset(56, 27, true);
body.addBox(4.5, -4, 3.5, 2, 3, 2);

rArm.clear();
rArm.setTextureOffset(52, 0);
rArm.addBox(-2, 2, -2, 3, 5, 3);

lArm.clear();
lArm.setTextureOffset(52, 0);
lArm.addBox(1, 2, -2, 3, 5, 3);

rLeg.clear();
rLeg.setTextureOffset(0, 12);
rLeg.addBox(-3.5, 6, 0, 4, 6, 4);

lLeg.clear();
lLeg.setTextureOffset(0, 22);
lLeg.addBox(1.5, 6, 0, 4, 6, 4);

}

var BlastoiseRenderType = Renderer.createHumanoidRenderer();
addBlastoiseRenderType(BlastoiseRenderType);

function addBlazikenRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, -11, -2, 6, 5, 7);
head.setTextureOffset(19, 8);
head.addBox(-1, -11, 5, 4, 1, 1);
head.setTextureOffset(19, 8);
head.addBox(-1, -10, 6, 4, 1, 1);
head.setTextureOffset(19, 8);
head.addBox(-1, -9, 7, 4, 1, 1);
head.setTextureOffset(19, 8);
head.addBox(-1, -8, 8, 4, 1, 1);
head.setTextureOffset(19, 8);
head.addBox(-1, -7, 9, 4, 1, 1);
head.setTextureOffset(19, 8);
head.addBox(-1, -6, 10, 4, 1, 1);


body.clear();
body.setTextureOffset(0, 12);
body.addBox(-2, -6, -1, 6, 13, 6);

rArm.clear();
rArm.setTextureOffset(41, 0);
rArm.addBox(1, -5, 1, 2, 8, 2);
rArm.setTextureOffset(49, 4);
rArm.addBox(1, 3, 1, 2, 4, 2);

lArm.clear();
lArm.setTextureOffset(41, 0);
lArm.addBox(-1, -5, 1, 2, 8, 2);

lArm.setTextureOffset(49, 4);
lArm.addBox(-1, 3, 1, 2, 4, 2);

rLeg.clear();
rLeg.setTextureOffset(44, 10);
rLeg.addBox(-3, -5, 0, 5, 17, 5);

lLeg.clear();
lLeg.setTextureOffset(44, 10);
lLeg.addBox(0, -5, 0, 5, 17, 5);

}

var BlazikenRenderType = Renderer.createHumanoidRenderer();
addBlazikenRenderType(BlazikenRenderType);

function addBulbasaurRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, 10, -8, 8, 8, 8);

body.clear();
body.setTextureOffset(24, 12);
body.addBox(-2, 10, 0, 8, 8, 12);
body.setTextureOffset(32, 0);
body.addBox(-2, 6, 2, 8, 4, 8);

rArm.clear();
rArm.setTextureOffset(0, 22);
rArm.addBox(0, 14, 8, 4, 6, 4);

lArm.clear();
lArm.setTextureOffset(0, 22);
lArm.addBox(0, 14, 8, 4, 6, 4);

rLeg.clear();
rLeg.setTextureOffset(0, 22);
rLeg.addBox(-4, 4, 0, 4, 6, 4);

lLeg.clear();
lLeg.setTextureOffset(0, 22);
lLeg.addBox(4, 4, 0, 4, 6, 4);

}

var BulbasaurRenderType = Renderer.createHumanoidRenderer();
addBulbasaurRenderType(BulbasaurRenderType);

function addButterfreeRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(0, -8, 0, 8, 6, 5);
body.setTextureOffset(46, 0);
body.addBox(2, -15, 2, 1, 7, 1);
body.setTextureOffset(46, 0);
body.addBox(5, -15, 2, 1, 7, 1);
body.setTextureOffset(26, 0);
body.addBox(1.5, -2, 0, 5, 7, 5);
body.setTextureOffset(52, 0);
body.addBox(1.5, 5, -2, 2, 2, 4);
body.setTextureOffset(52, 0);
body.addBox(5, 5, -2, 2, 2, 4);
body.setTextureOffset(0, 12, true);
body.addBox(-8, -13, 5, 12, 20, 0);
body.setTextureOffset(40, 12, true);
body.addBox(5, -13, 5, 12, 20, 0);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var ButterfreeRenderType = Renderer.createHumanoidRenderer();
addButterfreeRenderType(ButterfreeRenderType);

function addCaterpieRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(-2, 16, 0, 5, 5, 5);
body.setTextureOffset(46, 0);
body.addBox(-2, 18, 5, 5, 4, 4);
body.setTextureOffset(0, 26);
body.addBox(-1, 19, 9, 3, 3, 3);
body.setTextureOffset(56, 28);
body.addBox(-0.5, 18, 12, 2, 2, 2);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var CaterpieRenderType = Renderer.createHumanoidRenderer();
addCaterpieRenderType(CaterpieRenderType);

function addCharizardRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, -2, 7, 4, 3, 5, 1);
head.setTextureOffset(13, 0);
head.addBox(-1.5, -1, 4, 3, 2, 3, 1);
head.setTextureOffset(25, 15);
head.addBox(-2.5, -3.5, 10, 1, 1, 7);
head.setTextureOffset(25, 15);
head.addBox(1.5, -3.5, 10, 1, 1, 7);

body.clear();
body.setTextureOffset(12, 9);
body.addBox(-3.5, 7, 6, 7, 12, 6, 1);
body.setTextureOffset(36, 24, true);
body.addBox(-20, 2, 12.1, 15, 8, 0, 3);
body.setTextureOffset(36, 16, true);
body.addBox(2, 2, 12.1, 15, 8, 0, 3);

rArm.clear();
rArm.setTextureOffset(25, 15);
rArm.addBox(-0.5, 8, 8, 2, 6, 2);

lArm.clear();
lArm.setTextureOffset(25, 15);
lArm.addBox(-1.5, 8, 8, 2, 6, 2);

rLeg.clear();
rLeg.setTextureOffset(0, 8);
rLeg.addBox(-4, 6, 5, 3, 6, 3);

lLeg.clear();
lLeg.setTextureOffset(0, 17);
lLeg.addBox(1, 6, 5, 3, 6, 3);

}

var CharizardRenderType = Renderer.createHumanoidRenderer();
addCharizardRenderType(CharizardRenderType);

function addCharmanderRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, 5, -2, 6, 8, 5);
head.setTextureOffset(38, 17);
head.addBox(-2.5, 10, -3.5, 7, 3, 4);


body.clear();
body.setTextureOffset(16, 16, true);
body.addBox(-2, 13, -2, 6, 8, 5);
body.setTextureOffset(22, 0, true);
body.addBox(0, 18, 3, 2, 2, 4);
body.setTextureOffset(22, 6, true);
body.addBox(0.5, 18.5, 7, 1, 1, 4);
body.setTextureOffset(35, 0, true);
body.addBox(1, 15, 9, 0, 4, 3);

rArm.clear();
rArm.setTextureOffset(56, 0);
rArm.addBox(2, 10, -1, 2, 5, 2);

lArm.clear();
lArm.setTextureOffset(56, 0);
lArm.addBox(-2, 10, -1, 2, 5, 2);

rLeg.clear();
rLeg.setTextureOffset(0, 13);
rLeg.addBox(-1, 7, -1, 3, 5, 3);

lLeg.clear();
lLeg.setTextureOffset(0, 21);
lLeg.addBox(0, 7, -1, 3, 5, 3);

}

var CharmanderRenderType = Renderer.createHumanoidRenderer();
addCharmanderRenderType(CharmanderRenderType);

function addCharmeleonRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, 4, -2, 6, 6, 5);
head.setTextureOffset(38, 17);
head.addBox(-1, 7, -5, 4, 3, 3);
head.setTextureOffset(38, 24);
head.addBox(0, 3, 0, 2, 1, 6);


body.clear();
body.setTextureOffset(16, 16, true);
body.addBox(-2, 10, -2, 6, 10, 5);
body.setTextureOffset(22, 0, true);
body.addBox(0, 18, 3, 2, 2, 4);
body.setTextureOffset(22, 6, true);
body.addBox(0.5, 18.5, 7, 1, 1, 4);
body.setTextureOffset(35, 0, true);
body.addBox(1, 12, 8, 0, 6, 4);

rArm.clear();
rArm.setTextureOffset(56, 0);
rArm.addBox(2, 10, -1, 2, 5, 2);

lArm.clear();
lArm.setTextureOffset(56, 0);
lArm.addBox(-2, 10, -1, 2, 5, 2);

rLeg.clear();
rLeg.setTextureOffset(0, 13);
rLeg.addBox(-1, 7, -1, 3, 5, 3);

lLeg.clear();
lLeg.setTextureOffset(0, 22);
lLeg.addBox(0, 7, -1, 3, 5, 3);

}

var CharmeleonRenderType = Renderer.createHumanoidRenderer();
addCharmeleonRenderType(CharmeleonRenderType);

function addCombuskenRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(0, -4, -0.5, 7, 7, 7);
head.setTextureOffset(0, 14);
head.addBox(2, -0, -1.5, 3, 1, 1);
head.setTextureOffset(29, 9, true);
head.addBox(0, -9, 3, 7, 5, 0);

body.clear();
body.setTextureOffset(40, 10);
body.addBox(0.5, 3, 0, 6, 14, 6);

rArm.clear();
rArm.setTextureOffset(29, 0);
rArm.addBox(-6, 5, 1, 13, 1, 4);

lArm.clear();
lArm.setTextureOffset(29, 0);
lArm.addBox(-1, 5, 1, 13, 1, 4);

rLeg.clear();
rLeg.setTextureOffset(0, 20);
rLeg.addBox(-2, -1, 0, 5, 6, 6);
rLeg.setTextureOffset(22, 24);
rLeg.addBox(0.5, 5, 2, 2, 6, 2);
rLeg.setTextureOffset(17, 17);
rLeg.addBox(-1, 11, -2, 5, 1, 6);

lLeg.clear();
lLeg.setTextureOffset(0, 20);
lLeg.addBox(3, -1, 0, 5, 6, 6);
lLeg.setTextureOffset(22, 24);
lLeg.addBox(4.5, 5, 2, 2, 6, 2);
lLeg.setTextureOffset(17, 17);
lLeg.addBox(3, 11, -2, 5, 1, 6);

}

var CombuskenRenderType = Renderer.createHumanoidRenderer();
addCombuskenRenderType(CombuskenRenderType);

function addCroconawRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(0, 1, 0, 8, 7, 8);
head.setTextureOffset(24, 0);
head.addBox(1, 4, -5, 6, 2, 5);
head.setTextureOffset(0, 15);
head.addBox(1, 6, -5, 6, 3, 5);
head.setTextureOffset(0, 14, true);
head.addBox(4, -3, 0, 0, 8, 10);

body.clear();
body.setTextureOffset(32, 12);
body.addBox(0, 8, 0, 8, 12, 8);

rArm.clear();
rArm.setTextureOffset(0, 0);
rArm.addBox(2, 8, 1, 4, 2, 2);

lArm.clear();
lArm.setTextureOffset(0, 0);
lArm.addBox(2, 8, 1, 4, 2, 2);

rLeg.clear();
rLeg.setTextureOffset(40, 0);
rLeg.addBox(1, 6, 2, 2, 4, 4);
rLeg.addBox(1, 10, 3, 2, 2, 2);

lLeg.clear();
lLeg.setTextureOffset(40, 0);
lLeg.addBox(5, 6, 2, 2, 4, 4);
lLeg.addBox(5, 10, 3, 2, 2, 2);

}

var CroconawRenderType = Renderer.createHumanoidRenderer();
addCroconawRenderType(CroconawRenderType);

function addDodrioRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();


body.clear();
body.setTextureOffset(5, 20);
body.addBox(-5, -11, 0, 6, 6, 6);
body.setTextureOffset(5, 20);
body.addBox(2, -11, -1, 6, 6, 6);
body.setTextureOffset(5, 20);
body.addBox(9, -11, 0, 6, 6, 6);
body.setTextureOffset(30, 25);
body.addBox(-2.5, -8, -6, 1, 1, 6);
body.setTextureOffset(30, 25);
body.addBox(4.5, -8, -7, 1, 1, 6);
body.setTextureOffset(30, 25);
body.addBox(11.5, -8, -6, 1, 1, 6);
body.setTextureOffset(0, 21);
body.addBox(0, -5, 2, 1, 8, 1);
body.setTextureOffset(0, 21);
body.addBox(4.5, -5, 1, 1, 8, 1);
body.setTextureOffset(0, 21);
body.addBox(9, -5, 2, 1, 8, 1);
body.setTextureOffset(24, 0);
body.addBox(0, 2, -1, 10, 10, 10);
body.setTextureOffset(44, 22);
body.addBox(-1, 4, 9, 4, 1, 6);
body.setTextureOffset(44, 22);
body.addBox(3, 4, 9, 4, 1, 6);
body.setTextureOffset(44, 22);
body.addBox(7, 4, 9, 4, 1, 6);

rArm.clear();

lArm.clear();

rLeg.clear();
rLeg.setTextureOffset(0, 6);
rLeg.addBox(4, -1, 3, 1, 12, 1);
rLeg.setTextureOffset(0, 0);
rLeg.addBox(3, 11, 0, 3, 1, 5);

lLeg.clear();
lLeg.setTextureOffset(0, 6);
lLeg.addBox(5, -1, 3, 1, 12, 1);
lLeg.setTextureOffset(0, 0);
lLeg.addBox(4, 11, 0, 3, 1, 5);

}

var DodrioRenderType = Renderer.createHumanoidRenderer();
addDodrioRenderType(DodrioRenderType);

function addDoduoRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();


body.clear();
body.setTextureOffset(5, 20);
body.addBox(-2, -11, 0, 6, 6, 6);
body.setTextureOffset(5, 20);
body.addBox(6, -11, 0, 6, 6, 6);
body.setTextureOffset(30, 25);
body.addBox(0.5, -8, -6, 1, 1, 6);
body.setTextureOffset(30, 25);
body.addBox(8.5, -8, -6, 1, 1, 6);
body.setTextureOffset(0, 21);
body.addBox(1, -5, 2, 1, 8, 1);
body.setTextureOffset(0, 21);
body.addBox(8, -5, 2, 1, 8, 1);
body.setTextureOffset(24, 0);
body.addBox(0, 2, -1, 10, 10, 10);

rArm.clear();

lArm.clear();

rLeg.clear();
rLeg.setTextureOffset(0, 6);
rLeg.addBox(4, -1, 3, 1, 12, 1);
rLeg.setTextureOffset(0, 0);
rLeg.addBox(3, 11, 0, 3, 1, 5);

lLeg.clear();
lLeg.setTextureOffset(0, 6);
lLeg.addBox(5, -1, 3, 1, 12, 1);
lLeg.setTextureOffset(0, 0);
lLeg.addBox(4, 11, 0, 3, 1, 5);

}

var DoduoRenderType = Renderer.createHumanoidRenderer();
addDoduoRenderType(DoduoRenderType);

function addDunsparceRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(-2, 16, 0, 8, 8, 8);
body.setTextureOffset(20, 14);
body.addBox(-3, 18, 8, 10, 6, 12);
body.setTextureOffset(52, 0);
body.addBox(-6.5, 19, 9, 4, 0, 4);
body.setTextureOffset(52, 0);
body.addBox(6.5, 19, 9, 4, 0, 4);
body.setTextureOffset(0, 16);
body.addBox(0.5, 19.5, 20, 3, 3, 4);
body.setTextureOffset(0, 23);
body.addBox(0, 19, 24, 4, 4, 5);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var DunsparceRenderType = Renderer.createHumanoidRenderer();
addDunsparceRenderType(DunsparceRenderType);

function addEeveeRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

head.setTextureOffset(28, 6);
head.addBox(-2, 10, -2, 5, 5, 4);
head.setTextureOffset(28, 15);
head.addBox(-1.5, 13, -3, 4, 2, 2);
head.setTextureOffset(28, 0);
head.addBox(-3, 6, -1, 2, 4, 1);
head.setTextureOffset(28, 0);
head.addBox(2, 6, -1, 2, 4, 1);


body.clear();
1
body.setTextureOffset(0, 1);
body.addBox(-3, 15, -1, 7, 4, 4);
2
body.setTextureOffset(0, 20);
body.addBox(-2.5, 15, 3, 6, 4, 6);

body.setTextureOffset(28, 22);
body.addBox(0, 13, 7, 1, 4, 6);

rArm.clear();
rArm.setTextureOffset(48, 0);
rArm.addBox(3.5, 17, 0, 2, 5, 2);

lArm.clear();
lArm.setTextureOffset(56, 0);
lArm.addBox(-4.5, 17, 0, 2, 5, 2);

rLeg.clear();
rLeg.setTextureOffset(48, 0);
rLeg.addBox(-0.5, 7, 6, 2, 5, 2);

lLeg.clear();
lLeg.setTextureOffset(56, 0);
lLeg.addBox(-0.5, 7, 6, 2, 5, 2);

}

var EeveeRenderType = Renderer.createHumanoidRenderer();
addEeveeRenderType(EeveeRenderType);

function addElectrodeRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(-2, 13, 0, 11, 11, 11);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var ElectrodeRenderType = Renderer.createHumanoidRenderer();
addElectrodeRenderType(ElectrodeRenderType);

function addEspeonRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

head.setTextureOffset(28, 6);
head.addBox(-2, 10, -2, 5, 5, 4);
1
head.setTextureOffset(0, 0, true);
head.addBox(-7, 9, -1, 5, 3, 0);
1
head.setTextureOffset(10, 0, true);
head.addBox(3, 9, -1, 5, 3, 0);

2
head.setTextureOffset(0, 6, true);
head.addBox(-6, 12, -1, 4, 2, 0);
2
head.setTextureOffset(10, 6, true);
head.addBox(3, 12, -1, 4, 2, 0);

body.clear();

body.setTextureOffset(0, 18);
body.addBox(-2.5, 15, 0, 6, 4, 8);
1
body.setTextureOffset(8, 21);
body.addBox(0, 16, 8, 1, 1, 6);
2
body.setTextureOffset(8, 18);
body.addBox(0, 11, 13, 1, 5, 1);

rArm.clear();
rArm.setTextureOffset(48, 0);
rArm.addBox(3.5, 17, 0, 2, 5, 2);

lArm.clear();
lArm.setTextureOffset(56, 0);
lArm.addBox(-4.5, 17, 0, 2, 5, 2);

rLeg.clear();
rLeg.setTextureOffset(48, 0);
rLeg.addBox(-0.5, 7, 6, 2, 5, 2);

lLeg.clear();
lLeg.setTextureOffset(56, 0);
lLeg.addBox(-0.5, 7, 6, 2, 5, 2);

}

var EspeonRenderType = Renderer.createHumanoidRenderer();
addEspeonRenderType(EspeonRenderType);

function addFeraligatrRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0, true);
head.addBox(1, -10, -3, 8, 8, 9);
head.setTextureOffset(40, 10, true);
head.addBox(2, -7, -9, 6, 2, 6);
head.setTextureOffset(38, 0, true);
head.addBox(2, -5, -10, 6, 3, 7);
head.setTextureOffset(48, 18, true);
head.addBox(5, -16, -1, 0, 6, 8);
head.setTextureOffset(48, 18, true);
head.addBox(6, -16, -1, 0, 6, 8);

body.clear();
body.setTextureOffset(0, 17);
body.addBox(0, -2, -3, 5, 6, 9);
body.setTextureOffset(0, 17);
body.addBox(0, 4, -3, 5, 6, 9);
body.setTextureOffset(0, 17);
body.addBox(0, 10, -3, 5, 6, 9);
body.setTextureOffset(0, 17);
body.addBox(5, -2, -3, 5, 6, 9);
body.setTextureOffset(0, 17);
body.addBox(5, 4, -3, 5, 6, 9);
body.setTextureOffset(0, 17);
body.addBox(5, 10, -3, 5, 6, 9);
body.setTextureOffset(0, 17);
body.addBox(2, 10, 6, 6, 5, 4);
body.setTextureOffset(0, 17);
body.addBox(2, 10, 10, 6, 5, 4);
body.setTextureOffset(0, 17);
body.addBox(3, 10, 10, 4, 5, 6);
body.setTextureOffset(48, 18, true);
body.addBox(5, 5, 8, 0, 5, 6);

rArm.clear();
rArm.setTextureOffset(0, 17);
rArm.addBox(-1, 0, 0, 7, 4, 4);
rArm.setTextureOffset(0, 17);
rArm.addBox(-1, 0, -7, 4, 4, 7);

lArm.clear();
lArm.setTextureOffset(0, 17);
lArm.addBox(4, 0, 0, 7, 4, 4);
lArm.setTextureOffset(0, 17);
lArm.addBox(7, 0, -7, 4, 4, 7);

rLeg.clear();
rLeg.setTextureOffset(0, 17);
rLeg.addBox(-2, 2, 0, 4, 6, 6);
rLeg.setTextureOffset(0, 17);
rLeg.addBox(-2, 8, -2, 4, 2, 6);

lLeg.clear();
lLeg.setTextureOffset(0, 17);
lLeg.addBox(8, 2, 0, 4, 6, 6);
lLeg.setTextureOffset(0, 17);
lLeg.addBox(8, 8, -2, 4, 2, 6);

}

var FeraligatrRenderType = Renderer.createHumanoidRenderer();
addFeraligatrRenderType(FeraligatrRenderType);

function addFlareonRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

head.setTextureOffset(28, 6);
head.addBox(-2, 10, -2, 5, 5, 4);

head.setTextureOffset(28, 15);
head.addBox(-1.5, 13, -3, 4, 2, 2);

head.setTextureOffset(28, 0);
head.addBox(-3, 6, -1, 2, 4, 1);

head.setTextureOffset(28, 0);
head.addBox(2, 6, -1, 2, 4, 1);


body.clear();
1
body.setTextureOffset(0, 1, true);
body.addBox(-3, 15, -1, 7, 4, 4);
2
body.setTextureOffset(0, 22, true);
body.addBox(-2.5, 15, 3, 6, 4, 6);

body.setTextureOffset(28, 22, true);
body.addBox(0, 13, 7, 1, 4, 6);

rArm.clear();
rArm.setTextureOffset(48, 0);
rArm.addBox(3.5, 17, 0, 2, 5, 2);

lArm.clear();
lArm.setTextureOffset(56, 0);
lArm.addBox(-4.5, 17, 0, 2, 5, 2);

rLeg.clear();
rLeg.setTextureOffset(48, 0);
rLeg.addBox(-0.5, 7, 6, 2, 5, 2);

lLeg.clear();
lLeg.setTextureOffset(56, 0);
lLeg.addBox(-0.5, 7, 6, 2, 5, 2);

}

var FlareonRenderType = Renderer.createHumanoidRenderer();
addFlareonRenderType(FlareonRenderType);

function addGastlyRenderType(renderer) {
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

body.clear();
body.setTextureOffset(0, 0);
body.addBox(0, 0, -1, 11, 11, 11);
body.setTextureOffset(44, 0);
body.addBox(0, 0, 10, 1, 11, 3);
body.setTextureOffset(44, 0);
body.addBox(10, 0, 10, 1, 11, 3);
body.setTextureOffset(40, 28);
body.addBox(1, 0, 10, 9, 1, 3);
body.setTextureOffset(40, 28);
body.addBox(1, 10, 10, 9, 1, 3);
body.setTextureOffset(56, 28);
body.addBox(0, 0, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(2, 0, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(4, 0, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(6, 0, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(8, 0, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(10, 0, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(0, 10, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(2, 10, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(4, 10, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(6, 10, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(8, 10, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(10, 10, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(0, 2, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(0, 4, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(0, 6, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(0, 8, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(10, 2, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(10, 4, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(10, 6, 13, 1, 1, 1);
body.setTextureOffset(56, 28);
body.addBox(10, 8, 13, 1, 1, 1);

head.clear();
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
}

var GastlyRenderType = Renderer.createHumanoidRenderer();
addGastlyRenderType(GastlyRenderType);

function addGengarRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(0, 0, 0, 7, 8, 6, 2);
body.setTextureOffset(8, 14);
body.addBox(8, 3, 2, 3.5, 2, 2, 0.8);
body.setTextureOffset(8, 18);
body.addBox(-4, 3, 2, 3.5, 2, 2, 0.8);
body.setTextureOffset(0, 0);
body.addBox(-1, -6, 2, 1, 4, 2, 0.5);
body.setTextureOffset(0, 0);
body.addBox(7, -6, 2, 1, 4, 2, 0.5);
body.setTextureOffset(0, 14);
body.addBox(-1.5, 9, 2, 2, 4, 2, 1);
body.setTextureOffset(0, 14);
body.addBox(6.5, 9, 2, 2, 4, 2, 1);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var GengarRenderType = Renderer.createHumanoidRenderer();
addGengarRenderType(GengarRenderType);

function addGolbatRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(32, 0);
body.addBox(0, -2, 0, 10, 12, 6);

body.setTextureOffset(0, 0);
body.addBox(0, -5, 1, 3, 3, 1);
body.setTextureOffset(0, 0);
body.addBox(7, -5, 1, 3, 3, 1);

body.setTextureOffset(48, 6);
body.addBox(0, 10, 2, 1, 4, 1);
body.setTextureOffset(0, 0);
body.addBox(0, 14, -2, 1, 1, 10);

body.setTextureOffset(48, 6);
body.addBox(9, 10, 2, 1, 4, 1);
body.setTextureOffset(0, 0);
body.addBox(9, 14, -2, 1, 1, 10);

body.setTextureOffset(0, 25, true);
body.addBox(-16, 1, 2, 16, 7, 0);

body.setTextureOffset(0, 18, true);
body.addBox(10, 1, 2, 16, 7, 0);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var GolbatRenderType = Renderer.createHumanoidRenderer();
addGolbatRenderType(GolbatRenderType);

function addGolemRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 5);
body.addBox(2, 12, -5.5, 3, 1, 3);
body.setTextureOffset(10, 5);
body.addBox(2, 13, -6, 3, 2, 3);
body.setTextureOffset(0, 10);
body.addBox(-2, 7, 0, 11, 11, 11, 3);
body.setTextureOffset(0, 0);
body.addBox(-8, 13, 3, 2, 2, 4, 1);
body.setTextureOffset(44, 18);
body.addBox(13, 13, 3, 2, 2, 4, 1);

rArm.clear();

lArm.clear();

rLeg.clear();
rLeg.setTextureOffset(44, 24);
rLeg.addBox(1, 7, 4, 3, 5, 3);

lLeg.clear();
lLeg.setTextureOffset(44, 24);
lLeg.addBox(3, 7, 4, 3, 5, 3);

}

var GolemRenderType = Renderer.createHumanoidRenderer();
addGolemRenderType(GolemRenderType);

function addGravelerRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();


body.clear();
body.setTextureOffset(4, 2);
body.addBox(-2, 5, 0, 15, 15, 15);
body.setTextureOffset(19, 2);
body.addBox(-10, 8, 4, 10, 3, 3);
body.setTextureOffset(19, 2);
body.addBox(-10, 14, 4, 10, 3, 3);
body.setTextureOffset(19, 2);
body.addBox(13, 8, 4, 10, 3, 3);
body.setTextureOffset(19, 2);
body.addBox(13, 14, 4, 10, 3, 3);

rArm.clear();

lArm.clear();

rLeg.clear();
rLeg.setTextureOffset(19, 2);
rLeg.addBox(2, 8, 6, 3, 4, 3);

lLeg.clear();
lLeg.setTextureOffset(19, 2);
lLeg.addBox(6, 8, 6, 3, 4, 3);

}

var GravelerRenderType = Renderer.createHumanoidRenderer();
addGravelerRenderType(GravelerRenderType);

function addGrovyleRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, 0, -2, 5, 4, 8);
head.setTextureOffset(15, 0, true);
head.addBox(0, -0.1, 2, 1, 0, 11);

body.clear();
body.setTextureOffset(48, 23);
body.addBox(-1.5, 4, 1, 4, 3, 4);
body.setTextureOffset(23, 15);
body.addBox(-2.5, 7, 0, 6, 11, 6);

rArm.clear();
rArm.setTextureOffset(34, 0);
rArm.addBox(-2, 6, 2, 6, 2, 2);
rArm.setTextureOffset(34, 0);
rArm.addBox(-2, 6.5, -4, 1, 1, 6);
rArm.setTextureOffset(51, 9, true);
rArm.addBox(-6, 7, -5, 5, 0, 5);

lArm.clear();
lArm.setTextureOffset(34, 0);
lArm.addBox(-2.5, 6, 2, 6, 2, 2);
lArm.setTextureOffset(34, 0);
lArm.addBox(2.5, 6.5, -4, 1, 1, 6);
lArm.setTextureOffset(51, 9, true);
lArm.addBox(2.5, 7, -5, 5, 0, 5);

rLeg.clear();
rLeg.setTextureOffset(34, 0);
rLeg.addBox(0, 6, 3, 1, 6, 1);
rLeg.setTextureOffset(34, 0);
rLeg.addBox(0, 11, 0, 1, 1, 6);

lLeg.clear();
lLeg.setTextureOffset(34, 0);
lLeg.addBox(0, 6, 3, 1, 6, 1);
lLeg.setTextureOffset(34, 0);
lLeg.addBox(0, 11, 0, 1, 1, 6);

}

var GrovyleRenderType = Renderer.createHumanoidRenderer();
addGrovyleRenderType(GrovyleRenderType);

function addHaunterRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(0, -2, 0, 8, 3, 7);
body.setTextureOffset(30, 12);
body.addBox(-1, -4, 0, 1, 2, 10);
body.setTextureOffset(30, 12);
body.addBox(8, -4, 0, 1, 2, 10);
body.setTextureOffset(0, 10);
body.addBox(0, 2, 0, 8, 3, 7);
body.setTextureOffset(0, 27);
body.addBox(-6, 5, 0, 4, 1, 4);
body.setTextureOffset(0, 27);
body.addBox(10, 5, 0, 4, 1, 4);

body.setTextureOffset(30, 12);
body.addBox(0, -2, 7, 8, 7, 3);

body.setTextureOffset(30, 12);
body.addBox(0, 5, 5, 8, 3, 4);
body.setTextureOffset(30, 12);
body.addBox(0, 7, 7, 8, 3, 4);
body.setTextureOffset(30, 12);
body.addBox(0, 8, 9, 8, 3, 4);
body.setTextureOffset(30, 12);
body.addBox(1, 8, 13, 6, 3, 2);
body.setTextureOffset(30, 12);
body.addBox(2, 7, 15, 4, 3, 2);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var HaunterRenderType = Renderer.createHumanoidRenderer();
addHaunterRenderType(HaunterRenderType);

function addIvysaurRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, 10, -8, 8, 8, 8);

body.clear();
body.setTextureOffset(24, 12);
body.addBox(-2, 10, 0, 8, 8, 12);
body.setTextureOffset(32, 0);
body.addBox(-2, 6, 2, 8, 4, 8);
body.setTextureOffset(12, 16);
body.addBox(-6, 8, 4, 4, 1, 4);
body.addBox(0, 8, -2, 4, 1, 4);
body.addBox(6, 8, 4, 4, 1, 4);
body.addBox(0, 8, 10, 4, 1, 4);
body.addBox(-8, 8, 5, 2, 1, 2);
body.addBox(1, 8, -4, 2, 1, 2);
body.addBox(10, 8, 5, 2, 1, 2);
body.addBox(1, 8, 14, 2, 1, 2);

rArm.clear();
rArm.setTextureOffset(0, 22);
rArm.addBox(0, 14, 8, 4, 6, 4);

lArm.clear();
lArm.setTextureOffset(0, 22);
lArm.addBox(0, 14, 8, 4, 6, 4);

rLeg.clear();
rLeg.setTextureOffset(0, 22);
rLeg.addBox(-4, 4, 0, 4, 6, 4);

lLeg.clear();
lLeg.setTextureOffset(0, 22);
lLeg.addBox(4, 4, 0, 4, 6, 4);

}

var IvysaurRenderType = Renderer.createHumanoidRenderer();
addIvysaurRenderType(IvysaurRenderType);

function addJolteonRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

head.setTextureOffset(28, 6);
head.addBox(-2, 10, -2, 5, 5, 4);

head.setTextureOffset(28, 15);
head.addBox(-1.5, 13, -3, 4, 2, 2);

head.setTextureOffset(28, 0);
head.addBox(-2, 5, -1, 2, 5, 1);

head.setTextureOffset(28, 0);
head.addBox(1, 5, -1, 2, 5, 1);

body.clear();

body.setTextureOffset(0, 18);
body.addBox(-2.5, 15, 0, 6, 4, 8);
body.setTextureOffset(40, 15, true);
body.addBox(-3, 14, -1, 7, 4, 6);

body.setTextureOffset(28, 24, true);
body.addBox(-1, 13, 7, 3, 4, 4);

rArm.clear();
rArm.setTextureOffset(48, 0);
rArm.addBox(3.5, 17, 0, 2, 5, 2);

lArm.clear();
lArm.setTextureOffset(56, 0);
lArm.addBox(-4.5, 17, 0, 2, 5, 2);

rLeg.clear();
rLeg.setTextureOffset(48, 0);
rLeg.addBox(-0.5, 7, 6, 2, 5, 2);

lLeg.clear();
lLeg.setTextureOffset(56, 0);
lLeg.addBox(-0.5, 7, 6, 2, 5, 2);

}

var JolteonRenderType = Renderer.createHumanoidRenderer();
addJolteonRenderType(JolteonRenderType);

function addKakunaRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(-2, 6, 0, 7, 10, 7);
body.setTextureOffset(44, 20);
body.addBox(-1, 16, 1, 5, 7, 5);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var KakunaRenderType = Renderer.createHumanoidRenderer();
addKakunaRenderType(KakunaRenderType);

function addKoffingRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(0, -2, 0, 16, 16, 16, -3);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var KoffingRenderType = Renderer.createHumanoidRenderer();
addKoffingRenderType(KoffingRenderType);

function addMareepRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(0, 15, -8, 5, 4, 5);
head.setTextureOffset(0, 9);
head.addBox(0.5, 13, -6, 4, 2, 3);
head.setTextureOffset(17, 0);
head.addBox(-2, 14, -6, 3, 2, 2);
head.setTextureOffset(17, 0);
head.addBox(4, 14, -6, 3, 2, 2);

body.clear();
body.setTextureOffset(30, 0);
body.addBox(-1, 13, -3, 7, 7, 10);
body.setTextureOffset(0, 14);
body.addBox(1.5, 15, 7, 2, 2, 4);
body.setTextureOffset(0, 25);
body.addBox(1, 14.5, 11, 3, 3, 3);

rArm.clear();
rArm.setTextureOffset(20, 16);
rArm.addBox(5.5, 18, -2, 2, 4, 2);

lArm.clear();
lArm.setTextureOffset(20, 16);
lArm.addBox(-2.5, 18, -2, 2, 4, 2);

rLeg.clear();
rLeg.setTextureOffset(20, 16);
rLeg.addBox(1.5, 8, 4, 2, 4, 2);

lLeg.clear();
lLeg.setTextureOffset(20, 16);
lLeg.addBox(1.5, 8, 4, 2, 4, 2);

}

var MareepRenderType = Renderer.createHumanoidRenderer();
addMareepRenderType(MareepRenderType);

function addMetapodRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(-2, 6, 0, 7, 10, 7);
body.setTextureOffset(44, 20);
body.addBox(-1, 16, 1, 5, 7, 5);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var MetapodRenderType = Renderer.createHumanoidRenderer();
addMetapodRenderType(MetapodRenderType);

function addMagnemiteRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(0, 0, 0, 7, 7, 7);

body.setTextureOffset(0, 14);
body.addBox(2.5, -2, 2.5, 2, 2, 2);

body.setTextureOffset(8, 14);
body.addBox(2, -3, 2, 3, 1, 3);

body.setTextureOffset(0, 18);
body.addBox(1, 5, -2, 1, 1, 2);

body.setTextureOffset(0, 18);
body.addBox(5, 5, -2, 1, 1, 2);

body.setTextureOffset(0, 21);
body.addBox(0.5, 4.5, -3, 2, 2, 1);

body.setTextureOffset(0, 21);
body.addBox(4.5, 4.5, -3, 2, 2, 1);

body.setTextureOffset(28, 0);
body.addBox(-2, 1, 3, 2, 5, 1);

body.setTextureOffset(28, 0);
body.addBox(7, 1, 3, 2, 5, 1);

body.setTextureOffset(34, 0);
body.addBox(-7, 1, 3, 5, 2, 1);

body.setTextureOffset(34, 3);
body.addBox(-7, 4, 3, 5, 2, 1);

body.setTextureOffset(46, 0);
body.addBox(9, 1, 3, 5, 2, 1);

body.setTextureOffset(46, 3);
body.addBox(9, 4, 3, 5, 2, 1);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var MagnemiteRenderType = Renderer.createHumanoidRenderer();
addMagnemiteRenderType(MagnemiteRenderType);

function addMarshtompRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, 4, -2, 7, 7, 7);
head.setTextureOffset(23, 0);
head.addBox(-5, 9, -1, 3, 1, 1);
head.setTextureOffset(23, 0);
head.addBox(5, 9, -1, 3, 1, 1);
head.setTextureOffset(50, 0, true);
head.addBox(1.5, -1, 0, 0, 10, 7);

body.clear();
body.setTextureOffset(0, 14);
body.addBox(-1.5, 11, -1.5, 6, 8, 6);

rArm.clear();
rArm.setTextureOffset(27, 27);
rArm.addBox(-3, 10, 0, 9, 1, 4);

lArm.clear();
lArm.setTextureOffset(27, 27);
lArm.addBox(-3, 10, 0, 9, 1, 4);

rLeg.clear();
rLeg.setTextureOffset(30, 15);
rLeg.addBox(-1, 6, 0, 3, 6, 3);

lLeg.clear();
lLeg.setTextureOffset(30, 15);
lLeg.addBox(1, 6, 0, 3, 6, 3);

}

var MarshtompRenderType = Renderer.createHumanoidRenderer();
addMarshtompRenderType(MarshtompRenderType);

function addMankeyRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(0, 10, 0, 9, 9, 9);
body.setTextureOffset(0, 0);
body.addBox(0, 7, 4, 3, 3, 1);
body.setTextureOffset(0, 0);
body.addBox(6, 7, 4, 3, 3, 1);
body.setTextureOffset(0, 5);
body.addBox(3, 14, -0.5, 3, 3, 1);

rArm.clear();
rArm.setTextureOffset(44, 0);
rArm.addBox(3.5, 10, 3, 2, 6, 2);
rArm.setTextureOffset(52, 0);
rArm.addBox(4, 16, 3.5, 1, 4, 1);
rArm.setTextureOffset(56, 0);
rArm.addBox(3.5, 20, 3, 2, 3, 2);

lArm.clear();
lArm.setTextureOffset(44, 0);
lArm.addBox(3.5, 10, 3, 2, 6, 2);
lArm.setTextureOffset(52, 0);
lArm.addBox(4, 16, 3.5, 1, 4, 1);
lArm.setTextureOffset(56, 0);
lArm.addBox(3.5, 20, 3, 2, 3, 2);

rLeg.clear();
rLeg.setTextureOffset(56, 18);
rLeg.addBox(2, 7, 3, 2, 4, 2);
rLeg.setTextureOffset(48, 25);
rLeg.addBox(1.5, 11, 0, 3, 2, 5);

lLeg.clear();
lLeg.setTextureOffset(56, 18);
lLeg.addBox(4, 7, 3, 2, 4, 2);
lLeg.setTextureOffset(48, 25);
lLeg.addBox(3.5, 11, 0, 3, 2, 5);

}

var MankeyRenderType = Renderer.createHumanoidRenderer();
addMankeyRenderType(MankeyRenderType);

function addMagikarpRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0, true);
body.addBox(-2, 12, 0, 8, 12, 14);
body.setTextureOffset(56, 0, true);
body.addBox(-3, 19, 0, 1, 7, 1);
body.setTextureOffset(56, 0, true);
body.addBox(6, 19, 0, 1, 7, 1);
body.setTextureOffset(0, 0, true);
body.addBox(-3, 14, 7, 1, 8, 6);
body.setTextureOffset(0, 0, true);
body.addBox(6, 14, 7, 1, 8, 6);
body.setTextureOffset(44, 11, true);
body.addBox(2, 5, 3, 0, 7, 8);
body.setTextureOffset(30, -9, true);
body.addBox(1.5, 11, 14, 1, 14, 9);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var MagikarpRenderType = Renderer.createHumanoidRenderer();
addMagikarpRenderType(MagikarpRenderType);

function addMudkipRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, 10, -8, 6, 6, 6);
head.setTextureOffset(0, 13);
head.addBox(0.5, 5, -7, 1, 5, 4);

head.setTextureOffset(0, 23);
head.addBox(-3, 11.5, -6.5, 2, 3, 3);
head.setTextureOffset(0, 30);
head.addBox(-5, 12.5, -6.5, 2, 1, 1);
head.setTextureOffset(0, 30);
head.addBox(-5, 12.5, -4.5, 2, 1, 1);

head.setTextureOffset(0, 23);
head.addBox(3, 11.5, -6.5, 2, 3, 3);
head.setTextureOffset(0, 30);
head.addBox(5, 12.5, -6.5, 2, 1, 1);
head.setTextureOffset(0, 30);
head.addBox(5, 12.5, -4.5, 2, 1, 1);

body.clear();
body.setTextureOffset(25, 0);
body.addBox(-1.5, 15, -4, 5, 5, 7);
body.setTextureOffset(54, 24);
body.addBox(0, 13, 2, 2, 5, 3);

rArm.clear();
rArm.setTextureOffset(18, 26);
rArm.addBox(4, 17, 1, 2, 4, 2);

lArm.clear();
lArm.setTextureOffset(18, 26);
lArm.addBox(-4, 17, 1, 2, 4, 2);

rLeg.clear();
rLeg.setTextureOffset(18, 26);
rLeg.addBox(0, 7, -4, 2, 4, 2);

lLeg.clear();
lLeg.setTextureOffset(18, 26);
lLeg.addBox(0, 7, -4, 2, 4, 2);

}

var MudkipRenderType = Renderer.createHumanoidRenderer();
addMudkipRenderType(MudkipRenderType);

function addMeganiumRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
//head
head.setTextureOffset(0, 0);
head.addBox(-2, 3, -7, 6, 5, 7);
//yellow part left
head.setTextureOffset(49, 14);
head.addBox(3, 2, -7, 1, 1, 6);
//yellow part right
head.setTextureOffset(49, 14);
head.addBox(-2, 2, -7, 1, 1, 6);

body.clear();
//body
body.setTextureOffset(24, 14);
body.addBox(-2, 11, 0, 7, 7, 11);
//tail
body.setTextureOffset(38, 0);
body.addBox(0, 13, 11, 3, 2, 6);
//neck
body.setTextureOffset(34, 21);
body.addBox(-1, 5, 0, 5, 8, 5);
//flower on the neck
body.setTextureOffset(-12, 20, true);
body.addBox(-5, 10, -4, 12, 0, 12);

rArm.clear();
rArm.setTextureOffset(26, 0);
rArm.addBox(4, 16, 8, 3, 7, 3);

lArm.clear();
lArm.setTextureOffset(26, 0);
lArm.addBox(-4, 16, 8, 3, 7, 3);

rLeg.clear();
rLeg.setTextureOffset(26, 0);
rLeg.addBox(0, 6, 0, 3, 7, 3);

lLeg.clear();
lLeg.setTextureOffset(26, 0);
lLeg.addBox(0, 6, 0, 3, 7, 3);

}

var MeganiumRenderType = Renderer.createHumanoidRenderer();
addMeganiumRenderType(MeganiumRenderType);

function addVoltorbRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(-2, 14, 0, 10, 10, 10);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var VoltorbRenderType = Renderer.createHumanoidRenderer();
addVoltorbRenderType(VoltorbRenderType);

function addWailmerRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(0, 20, 0, 10, 10, 10);
body.setTextureOffset(0, 20);
body.addBox(10, 24, 3, 4, 1, 5);
body.setTextureOffset(0, 20);
body.addBox(-4, 24, 3, 4, 1, 5);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var WailmerRenderType = Renderer.createHumanoidRenderer();
addWailmerRenderType(WailmerRenderType);

function addWailordRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0, true);
body.addBox(0, 16, 0, 7, 3, 24, 16);
body.setTextureOffset(0, 0, true);
body.addBox(-25, 20, 9, 5, 1, 3, 4);
body.setTextureOffset(0, 0, true);
body.addBox(-25, 20, 12, 5, 1, 3, 4);
body.setTextureOffset(0, 0, true);
body.addBox(27, 20, 9, 5, 1, 3, 4);
body.setTextureOffset(0, 0, true);
body.addBox(27, 20, 12, 5, 1, 3, 4);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var WailordRenderType = Renderer.createHumanoidRenderer();
addWailordRenderType(WailordRenderType);

function addWartortleRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0, true);
head.addBox(-2, 4, -2, 7, 7, 7);
head.setTextureOffset(33, 6, true);
head.addBox(-5, -2, 0, 4, 6, 0);
head.setTextureOffset(33, 0, true);
head.addBox(4, -2, 0, 4, 6, 0);

body.clear();
body.setTextureOffset(16, 15, true);
body.addBox(-2, 11, -1, 7, 10, 7);
body.setTextureOffset(43, 1, true);
body.addBox(1.5, 14, 6, 0, 7, 9);

rArm.clear();
rArm.setTextureOffset(52, 0);
rArm.addBox(2, 11, 0, 2, 5, 3);

lArm.clear();
lArm.setTextureOffset(52, 0);
lArm.addBox(-1, 11, 0, 2, 5, 3);

rLeg.clear();
rLeg.setTextureOffset(0, 16);
rLeg.addBox(-1, 7, 0, 3, 5, 3);

lLeg.clear();
lLeg.setTextureOffset(0, 24);
lLeg.addBox(1, 7, 0, 3, 5, 3);

}

var WartortleRenderType = Renderer.createHumanoidRenderer();
addWartortleRenderType(WartortleRenderType);

function addWeedleRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(-2, 16, 0, 5, 5, 5);
body.setTextureOffset(46, 0);
body.addBox(-2, 18, 5, 5, 4, 4);
body.setTextureOffset(0, 26);
body.addBox(-1, 19, 9, 3, 3, 3);
body.setTextureOffset(56, 28);
body.addBox(-0.5, 18, 12, 2, 2, 2);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var WeedleRenderType = Renderer.createHumanoidRenderer();
addWeedleRenderType(WeedleRenderType);

function addWeezingRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(0, -2, 0, 10, 10, 10);
body.setTextureOffset(36, 18);
body.addBox(10, -2, 8, 7, 7, 7);
body.setTextureOffset(0, 24);
body.addBox(10, 4, 4, 4, 4, 4);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var WeezingRenderType = Renderer.createHumanoidRenderer();
addWeezingRenderType(WeezingRenderType);

function addWobbuffetRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(0, -2, -1, 8, 8, 6);

body.clear();
body.setTextureOffset(40, 16);
body.addBox(0, 6, 0, 8, 12, 4);

rArm.clear();
rArm.setTextureOffset(0, 25);
rArm.addBox(4, 16, 4, 4, 3, 4);

lArm.clear();
lArm.setTextureOffset(0, 25);
lArm.addBox(0, 16, 4, 4, 3, 4);

rLeg.clear();
rLeg.setTextureOffset(0, 25);
rLeg.addBox(1, 6, -4, 4, 3, 4);

lLeg.clear();
lLeg.setTextureOffset(0, 25);
lLeg.addBox(3, 6, -4, 4, 3, 4);

}

var WobbuffetRenderType = Renderer.createHumanoidRenderer();
addWobbuffetRenderType(WobbuffetRenderType);

function addZubatRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(0, -2, 0, 6, 6, 6);
body.setTextureOffset(25, 0);
body.addBox(0, -6, 3, 1, 4, 3);
body.setTextureOffset(25, 0);
body.addBox(5, -6, 3, 1, 4, 3);
body.setTextureOffset(0, 13);
body.addBox(0, -1, 6, 6, 5, 8);
body.setTextureOffset(50, 0);
body.addBox(0, 0, 14, 1, 1, 6);
body.setTextureOffset(50, 0);
body.addBox(5, 0, 14, 1, 1, 6);
body.setTextureOffset(22, 20, true);
body.addBox(-12, 0, 7, 12, 0, 6);
body.setTextureOffset(22, 26, true);
body.addBox(6, 0, 7, 12, 0, 6);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var ZubatRenderType = Renderer.createHumanoidRenderer();
addZubatRenderType(ZubatRenderType);

function addCelebiRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(-2, 0, 0, 8, 8, 8);

body.setTextureOffset(0, 16);
body.addBox(-0.5, 8, 1.5, 5, 7, 5);

body.setTextureOffset(44, 22);
body.addBox(-1, -1, 1, 1, 1, 9);

body.setTextureOffset(44, 22);
body.addBox(4, -1, 1, 1, 1, 9);

rArm.clear();
rArm.setTextureOffset(0, 28);
rArm.addBox(-2, 8, 2.5, 8, 1, 3);

lArm.clear();
lArm.setTextureOffset(0, 28);
lArm.addBox(-2, 8, 2.5, 8, 1, 3);

rLeg.clear();
rLeg.setTextureOffset(28, 22);
rLeg.addBox(2, 2, 4, 1, 4, 1);

lLeg.clear();
lLeg.setTextureOffset(28, 22);
lLeg.addBox(1, 2, 4, 1, 4, 1);

}

var CelebiRenderType = Renderer.createHumanoidRenderer();
addCelebiRenderType(CelebiRenderType);

function addEnteiRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();


body.clear();
body.setTextureOffset(0, 0, true);
body.addBox(-2, 1, -4, 5, 5, 5, 2);
body.setTextureOffset(20, 0, true);
body.addBox(-2.5, -4.5, -5.5, 6, 4, 0);
body.setTextureOffset(11, 13, true);
body.addBox(-7.5, 1.5, -5.5, 4, 5, 0);
body.setTextureOffset(0, 13, true);
body.addBox(4.5, 1.5, -5.5, 4, 5, 0);
body.setTextureOffset(41, 16, true);
body.addBox(-2.5, 10, -3, 6, 6, 4, 2);
body.setTextureOffset(32, 0, true);
body.addBox(-2.5, 11, 5, 6, 5, 10, 2);
body.setTextureOffset(12, 21, true);
body.addBox(-2, 7, 5, 5, 3, 5, 2);
body.setTextureOffset(12, 21, true);
body.addBox(-2, 7, 8, 5, 3, 5, 2);
body.setTextureOffset(12, 21, true);
body.addBox(-1.5, 7, 13, 4, 3, 6, 2);

rArm.clear();
rArm.setTextureOffset(0, 22);
rArm.addBox(1, 15.5, -2, 3, 7, 3);

lArm.clear();
lArm.setTextureOffset(0, 22);
lArm.addBox(-3, 15.5, -2, 3, 7, 3);

rLeg.clear();
rLeg.setTextureOffset(0, 22);
rLeg.addBox(-3, 5.5, 11, 3, 7, 3);

lLeg.clear();
lLeg.setTextureOffset(0, 22);
lLeg.addBox(1, 5.5, 11, 3, 7, 3);

}

var EnteiRenderType = Renderer.createHumanoidRenderer();
addEnteiRenderType(EnteiRenderType);

function addMewtwoRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, -4, -2, 6, 6, 5);
head.setTextureOffset(50, 0);
head.addBox(-2, -6, 0, 2, 2, 2);
head.setTextureOffset(50, 0);
head.addBox(2, -6, 0, 2, 2, 2);

body.clear();
body.setTextureOffset(0, 11);
body.addBox(0.5, 0, 1, 1, 5, 1);
body.setTextureOffset(0, 20);
body.addBox(-1.5, 3, 1, 5, 9, 3);
body.setTextureOffset(22, 0);
body.addBox(-0.5, 7, -0.5, 3, 5, 3);
body.setTextureOffset(22, 9);
body.addBox(-0.5, 7.5, 2, 3, 4, 5);
body.setTextureOffset(34, 0);
body.addBox(-0.5, 8, 7, 3, 3, 5);
body.setTextureOffset(38, 9);
body.addBox(0, 8.5, 12, 2, 2, 5);

rArm.clear();
rArm.setTextureOffset(60, 0);
rArm.addBox(2.5, 2, 1, 1, 8, 1);
rArm.setTextureOffset(56, 9);
rArm.addBox(1, 8, 0, 2, 2, 2);

lArm.clear();
lArm.setTextureOffset(60, 0);
lArm.addBox(-1.5, 2, 1, 1, 8, 1);
lArm.setTextureOffset(56, 9);
lArm.addBox(-3, 8, 0, 2, 2, 2);

rLeg.clear();
rLeg.setTextureOffset(22, 23);
rLeg.addBox(-1, 0, -0.5, 3, 5, 4);
rLeg.setTextureOffset(48, 23);
rLeg.addBox(-0.5, 5, 0.5, 2, 7, 2);

lLeg.clear();
lLeg.setTextureOffset(22, 23);
lLeg.addBox(0, 0, -0.5, 3, 5, 4);
lLeg.setTextureOffset(48, 23);
lLeg.addBox(0.5, 5, 0.5, 2, 7, 2);

}

var MewtwoRenderType = Renderer.createHumanoidRenderer();
addMewtwoRenderType(MewtwoRenderType);

function addNidoranFRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(0, 14, 0, 6, 6, 5);
head.setTextureOffset(22, 0);
head.addBox(1.5, 16, -2, 3, 3, 2);
head.setTextureOffset(32, 0);
head.addBox(0, 10, 1, 1, 4, 4);
head.setTextureOffset(32, 0);
head.addBox(5, 10, 1, 1, 4, 4);

body.clear();
body.setTextureOffset(32, 16);
body.addBox(0, 16, 5, 6, 6, 10);

rArm.clear();
rArm.setTextureOffset(0, 26);
rArm.addBox(4, 17, 13, 2, 4, 2);

lArm.clear();
lArm.setTextureOffset(0, 26);
lArm.addBox(0, 17, 13, 2, 4, 2);

rLeg.clear();
rLeg.setTextureOffset(0, 26);
rLeg.addBox(0, 7, 5, 2, 4, 2);

lLeg.clear();
lLeg.setTextureOffset(0, 26);
lLeg.addBox(4, 7, 5, 2, 4, 2);

}

var NidoranFRenderType = Renderer.createHumanoidRenderer();
addNidoranFRenderType(NidoranFRenderType);

function addNidoranMRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(0, 14, 0, 6, 6, 5);
head.setTextureOffset(22, 0);
head.addBox(1.5, 16, -2, 3, 3, 2);
head.setTextureOffset(32, 0);
head.addBox(0, 10, 1, 1, 4, 4);
head.setTextureOffset(32, 0);
head.addBox(5, 10, 1, 1, 4, 4);

body.clear();
body.setTextureOffset(32, 20);
body.addBox(0, 16, 5, 6, 6, 10);

rArm.clear();
rArm.setTextureOffset(0, 26);
rArm.addBox(6, 17, 9, 2, 4, 2);

lArm.clear();
lArm.setTextureOffset(0, 26);
lArm.addBox(-2, 17, 9, 2, 4, 2);

rLeg.clear();
rLeg.setTextureOffset(0, 26);
rLeg.addBox(2, 7, 4, 2, 4, 2);

lLeg.clear();
lLeg.setTextureOffset(0, 26);
lLeg.addBox(2, 7, 4, 2, 4, 2);

}

var NidoranMRenderType = Renderer.createHumanoidRenderer();
addNidoranMRenderType(NidoranMRenderType);

function addNidorinaRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(0, 14, 0, 8, 8, 7);
head.setTextureOffset(30, 0);
head.addBox(1, 18, -2, 6, 4, 4);
head.setTextureOffset(0, 15);
head.addBox(0, 8, 1, 1, 6, 6);
head.setTextureOffset(0, 15);
head.addBox(7, 8, 1, 1, 6, 6);

body.clear();
body.setTextureOffset(26, 8);
body.addBox(0, 14, 7, 8, 8, 10);

rArm.clear();
rArm.setTextureOffset(14, 15);
rArm.addBox(4, 18, 14, 3, 7, 3);

lArm.clear();
lArm.setTextureOffset(14, 15);
lArm.addBox(1, 18, 14, 3, 7, 3);

rLeg.clear();
rLeg.setTextureOffset(14, 15);
rLeg.addBox(0, 8, 6, 3, 7, 3);

lLeg.clear();
lLeg.setTextureOffset(14, 15);
lLeg.addBox(5, 8, 6, 3, 7, 3);

}

var NidorinaRenderType = Renderer.createHumanoidRenderer();
addNidorinaRenderType(NidorinaRenderType);

function addNidorinoRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(0, 14, 0, 8, 8, 7);
head.setTextureOffset(30, 0);
head.addBox(1, 18, -2, 6, 4, 4);
head.setTextureOffset(0, 15);
head.addBox(0, 8, 1, 1, 6, 6);
head.setTextureOffset(0, 15);
head.addBox(7, 8, 1, 1, 6, 6);

body.clear();
body.setTextureOffset(26, 8);
body.addBox(0, 14, 7, 8, 8, 10);

rArm.clear();
rArm.setTextureOffset(14, 15);
rArm.addBox(4, 18, 14, 3, 7, 3);

lArm.clear();
lArm.setTextureOffset(14, 15);
lArm.addBox(1, 18, 14, 3, 7, 3);

rLeg.clear();
rLeg.setTextureOffset(14, 15);
rLeg.addBox(0, 8, 6, 3, 7, 3);

lLeg.clear();
lLeg.setTextureOffset(14, 15);
lLeg.addBox(5, 8, 6, 3, 7, 3);

}

var NidorinoRenderType = Renderer.createHumanoidRenderer();
addNidorinoRenderType(NidorinoRenderType);

function addPichuRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0, true);
head.addBox(-2, 11, -2, 8, 6, 6);
head.setTextureOffset(49, 2, true);
head.addBox(-4, 5, 0, 5, 6, 0);
head.setTextureOffset(49, 2, true);
head.addBox(2, 5, 0, 5, 6, 0);

body.clear();
body.setTextureOffset(0, 12, true);
body.addBox(-0.5, 17, -1, 5, 6, 5);

rArm.clear();
rArm.setTextureOffset(28, 0);
rArm.addBox(5, 16, -2, 1, 4, 1);

lArm.clear();
lArm.setTextureOffset(28, 0);
lArm.addBox(-2, 16, -2, 1, 4, 1);

rLeg.clear();
rLeg.setTextureOffset(52, 26);
rLeg.addBox(1.5, 11, -3, 2, 1, 4);

lLeg.clear();
lLeg.setTextureOffset(52, 26);
lLeg.addBox(0.5, 11, -3, 2, 1, 4);

}

var PichuRenderType = Renderer.createHumanoidRenderer();
addPichuRenderType(PichuRenderType);

function addPidgeotRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, 9, -2, 4, 6, 3);
head.setTextureOffset(14, 0);
head.addBox(-1.5, 11, -4, 3, 2, 2);


body.clear();
body.setTextureOffset(0, 18, true);
body.addBox(-3, 14, 0, 6, 6, 8);
body.setTextureOffset(46, 0, true);
body.addBox(-3, 14, 8, 6, 0, 6);

rArm.clear();
rArm.setTextureOffset(28, 16, true);
rArm.addBox(2, 11, 1, 1, 6, 10);

lArm.clear();
lArm.setTextureOffset(28, 16, true);
lArm.addBox(-3, 11, 1, 1, 6, 10);

rLeg.clear();
rLeg.setTextureOffset(36, 3, true);
rLeg.addBox(0, 7, 4, 1, 5, 0);
rLeg.setTextureOffset(29, 0, true);
rLeg.addBox(-1, 11.9, 1, 3, 0, 3);

lLeg.clear();
lLeg.setTextureOffset(36, 3, true);
lLeg.addBox(-1, 7, 4, 1, 5, 0);
lLeg.setTextureOffset(29, 0, true);
lLeg.addBox(-2, 11.9, 1, 3, 0, 3);

}

var PidgeotRenderType = Renderer.createHumanoidRenderer();
addPidgeotRenderType(PidgeotRenderType);

function addPidgeottoRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, 10, -2, 4, 6, 3);
head.setTextureOffset(14, 0);
head.addBox(-1.5, 12, -4, 3, 2, 2);


body.clear();
body.setTextureOffset(0, 18, true);
body.addBox(-3, 14, 0, 6, 6, 8);
body.setTextureOffset(46, 0, true);
body.addBox(-3, 14, 8, 6, 0, 6);

rArm.clear();
rArm.setTextureOffset(28, 18, true);
rArm.addBox(2, 13, 1, 1, 4, 10);

lArm.clear();
lArm.setTextureOffset(28, 18, true);
lArm.addBox(-3, 13, 1, 1, 4, 10);

rLeg.clear();
rLeg.setTextureOffset(36, 3, true);
rLeg.addBox(0, 7, 4, 1, 5, 0);
rLeg.setTextureOffset(29, 0, true);
rLeg.addBox(-1, 11.9, 1, 3, 0, 3);

lLeg.clear();
lLeg.setTextureOffset(36, 3, true);
lLeg.addBox(-1, 7, 4, 1, 5, 0);
lLeg.setTextureOffset(29, 0, true);
lLeg.addBox(-2, 11.9, 1, 3, 0, 3);

}

var PidgeottoRenderType = Renderer.createHumanoidRenderer();
addPidgeottoRenderType(PidgeottoRenderType);

function addPidgeyRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, 10, -2, 4, 6, 3);
head.setTextureOffset(14, 0);
head.addBox(-1.5, 12, -4, 3, 2, 2);


body.clear();
body.setTextureOffset(0, 18);
body.addBox(-3, 14, 0, 6, 6, 8);

rArm.clear();
rArm.setTextureOffset(24, 13, true);
rArm.addBox(2, 13, 1, 1, 4, 6);

lArm.clear();
lArm.setTextureOffset(38, 13, true);
lArm.addBox(-3, 13, 1, 1, 4, 6);

rLeg.clear();
rLeg.setTextureOffset(36, 3, true);
rLeg.addBox(0, 7, 4, 1, 5, 0);
rLeg.setTextureOffset(29, 0, true);
rLeg.addBox(-1, 11.9, 1, 3, 0, 3);

lLeg.clear();
lLeg.setTextureOffset(36, 3, true);
lLeg.addBox(-1, 7, 4, 1, 5, 0);
lLeg.setTextureOffset(29, 0, true);
lLeg.addBox(-2, 11.9, 1, 3, 0, 3);

}

var PidgeyRenderType = Renderer.createHumanoidRenderer();
addPidgeyRenderType(PidgeyRenderType);

function addPikachuRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, 8, -2, 8, 6, 6);
head.setTextureOffset(28, 26);
head.addBox(-2, 11, -2.5, 8, 3, 1);
head.setTextureOffset(56, 0);
head.addBox(-2, 2, 0, 2, 6, 2);
head.setTextureOffset(48, 0);
head.addBox(3, 2, 0, 2, 6, 2);

body.clear();
body.setTextureOffset(0, 12, true);
body.addBox(-2, 14, -1, 8, 10, 6);
body.setTextureOffset(28, 4, true);
body.addBox(2, 16, 1, 0, 6, 16);

rArm.clear();
rArm.setTextureOffset(28, 0);
rArm.addBox(4, 13, -3, 2, 4, 2);

lArm.clear();
lArm.setTextureOffset(28, 0);
lArm.addBox(-2, 13, -3, 2, 4, 2);

rLeg.clear();
rLeg.setTextureOffset(52, 26);
rLeg.addBox(0, 10, -4, 2, 2, 4);

lLeg.clear();
lLeg.setTextureOffset(52, 26);
lLeg.addBox(2, 10, -4, 2, 2, 4);

}

var PikachuRenderType = Renderer.createHumanoidRenderer();
addPikachuRenderType(PikachuRenderType);

function addQuilavaRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
//head
head.setTextureOffset(0, 0);
head.addBox(0, 15, -6, 5, 5, 6);

body.clear();
//body
body.setTextureOffset(0, 16);
body.addBox(0, 15, 0, 6, 5, 11);
//fire on the body
body.setTextureOffset(37, 0, true);
body.addBox(-1, 9, 11, 8, 6, 0);

rArm.clear();
//arm
rArm.setTextureOffset(37, 24);
rArm.addBox(6, 18, 9, 2, 4, 2);

lArm.clear();
//arm
lArm.setTextureOffset(37, 24);
lArm.addBox(-2, 18, 9, 2, 4, 2);

rLeg.clear();
//leg
rLeg.setTextureOffset(37, 24);
rLeg.addBox(2, 8, 0, 2, 4, 2);

lLeg.clear();
//leg
lLeg.setTextureOffset(37, 24);
lLeg.addBox(2, 8, 0, 2, 4, 2);

}

var QuilavaRenderType = Renderer.createHumanoidRenderer();
addQuilavaRenderType(QuilavaRenderType);

function addRaichuRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0, true);
head.addBox(-2, 6, -2, 8, 6, 6);
head.setTextureOffset(28, 26, true);
head.addBox(-2, 9, -2.5, 8, 3, 1);
head.setTextureOffset(46, 10, true);
head.addBox(-7, 2, 0, 6, 4, 0);
head.setTextureOffset(52, 10, true);
head.addBox(4, 2, 0, 6, 4, 0);

body.clear();
body.setTextureOffset(0, 12, true);
body.addBox(-2, 12, -1, 8, 12, 6);
body.setTextureOffset(28, 9, true);
body.addBox(2, 15, 4, 0, 7, 10);

rArm.clear();
rArm.setTextureOffset(28, 0);
rArm.addBox(4, 13, -3, 2, 4, 2);

lArm.clear();
lArm.setTextureOffset(28, 0);
lArm.addBox(-2, 13, -3, 2, 4, 2);

rLeg.clear();
rLeg.setTextureOffset(52, 26);
rLeg.addBox(0, 10, -6, 2, 2, 7);

lLeg.clear();
lLeg.setTextureOffset(52, 26);
lLeg.addBox(2, 10, -6, 2, 2, 7);

}

var RaichuRenderType = Renderer.createHumanoidRenderer();
addRaichuRenderType(RaichuRenderType);

function addRattataRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

head.setTextureOffset(0, 0);
head.addBox(-2, 14, -6, 6, 6, 6);

head.setTextureOffset(55, 4);
head.addBox(-0.5, 17, -8, 3, 2, 3);

head.setTextureOffset(54, 0);
head.addBox(-4, 12, -3, 4, 3, 1);

head.setTextureOffset(54, 0);
head.addBox(2, 12, -3, 4, 3, 1);

body.clear();

body.setTextureOffset(4, 12);
body.addBox(-2, 14, -2, 6, 6, 14);

body.setTextureOffset(37, 17);
body.addBox(0, 16, 6, 2, 1, 5);

rArm.clear();
rArm.setTextureOffset(56, 19);
rArm.addBox(4, 17, 9, 2, 4, 2);

lArm.clear();
lArm.setTextureOffset(56, 19);
lArm.addBox(-4, 17, 9, 2, 4, 2);

rLeg.clear();
rLeg.setTextureOffset(56, 19);
rLeg.addBox(0, 7, 0, 2, 4, 2);

lLeg.clear();
lLeg.setTextureOffset(56, 19);
lLeg.addBox(0, 7, 0, 2, 4, 2);

}

var RattataRenderType = Renderer.createHumanoidRenderer();
addRattataRenderType(RattataRenderType);

function addShellderRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0, true);
body.addBox(-2, 19, 0, 6, 5, 4);
body.setTextureOffset(0, 10, true);
body.addBox(-0.5, 22, -4, 3, 1, 5);
body.setTextureOffset(20, 0, true);
body.addBox(-3, 18, -4, 8, 3, 9);
body.setTextureOffset(20, 20, true);
body.addBox(-3, 21, -4, 8, 3, 9);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var ShellderRenderType = Renderer.createHumanoidRenderer();
addShellderRenderType(ShellderRenderType);

function addSlowpokeRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, 10, -2, 8, 8, 8);

body.clear();
body.setTextureOffset(12, 8);
body.addBox(-3, 12, 4, 10, 8, 16);
body.setTextureOffset(18, 14);
body.addBox(0.5, 12, 18, 3, 3, 10);

rArm.clear();
rArm.setTextureOffset(0, 16);
rArm.addBox(3, 18, 4, 4, 4, 4);

lArm.clear();
lArm.setTextureOffset(0, 16);
lArm.addBox(-3, 18, 4, 4, 4, 4);

rLeg.clear();
rLeg.setTextureOffset(0, 16);
rLeg.addBox(-1, 8, 16, 4, 4, 4);

lLeg.clear();
lLeg.setTextureOffset(0, 16);
lLeg.addBox(1, 8, 16, 4, 4, 4);

}

var SlowpokeRenderType = Renderer.createHumanoidRenderer();
addSlowpokeRenderType(SlowpokeRenderType);

function addSpearowRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0, true);
head.addBox(-2, 10, -2, 4, 6, 3);
head.setTextureOffset(14, 0, true);
head.addBox(-1.5, 12, -4, 3, 2, 2);
head.setTextureOffset(50, 0, true);
head.addBox(-2, 10, 1, 4, 6, 3);


body.clear();
body.setTextureOffset(0, 18);
body.addBox(-3, 14, 0, 6, 6, 8);

rArm.clear();
rArm.setTextureOffset(24, 13, true);
rArm.addBox(1.5, 13, 1, 1, 4, 6);

lArm.clear();
lArm.setTextureOffset(38, 13, true);
lArm.addBox(-2.5, 13, 1, 1, 4, 6);

rLeg.clear();
rLeg.setTextureOffset(36, 3, true);
rLeg.addBox(0, 7, 4, 1, 5, 0);
rLeg.setTextureOffset(29, 0, true);
rLeg.addBox(-1, 11.9, 1, 3, 0, 3);

lLeg.clear();
lLeg.setTextureOffset(36, 3, true);
lLeg.addBox(-1, 7, 4, 1, 5, 0);
lLeg.setTextureOffset(29, 0, true);
lLeg.addBox(-2, 11.9, 1, 3, 0, 3);

}

var SpearowRenderType = Renderer.createHumanoidRenderer();
addSpearowRenderType(SpearowRenderType);

function addSquirtleRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, 3, -2, 7, 8, 7);

body.clear();
body.setTextureOffset(16, 15, true);
body.addBox(-2, 11, -1, 7, 10, 7);
body.setTextureOffset(28, 0, true);
body.addBox(1.5, 16, 6, 0, 5, 9);

rArm.clear();
rArm.setTextureOffset(52, 0);
rArm.addBox(2, 11, 0, 2, 5, 3);

lArm.clear();
lArm.setTextureOffset(52, 0);
lArm.addBox(-1, 11, 0, 2, 5, 3);

rLeg.clear();
rLeg.setTextureOffset(0, 16);
rLeg.addBox(-1, 7, 0, 3, 5, 3);

lLeg.clear();
lLeg.setTextureOffset(0, 24);
lLeg.addBox(1, 7, 0, 3, 5, 3);

}

var SquirtleRenderType = Renderer.createHumanoidRenderer();
addSquirtleRenderType(SquirtleRenderType);

function addSudowoodoRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();


body.clear();
body.setTextureOffset(0, 0);
body.addBox(-2, 0.5, 0, 7, 20, 5);
body.setTextureOffset(25, 0);
body.addBox(0.5, -4, 1.5, 2, 5, 2);
body.setTextureOffset(34, 0);
body.addBox(-3.5, -6, 1.5, 5, 2, 2);
body.setTextureOffset(34, 0);
body.addBox(1.5, -6, 1.5, 5, 2, 2);
body.setTextureOffset(24, 12);
body.addBox(-11, 8, 1, 9, 2, 2);
body.setTextureOffset(24, 12);
body.addBox(5, 8, 1, 9, 2, 2);
body.setTextureOffset(47, 11);
body.addBox(-11, 5, 0.5, 3, 3, 3);
body.setTextureOffset(47, 11);
body.addBox(11, 5, 0.5, 3, 3, 3);
body.setTextureOffset(47, 11);
body.addBox(-14, 7.5, 0.5, 3, 3, 3);
body.setTextureOffset(47, 11);
body.addBox(14, 7.5, 0.5, 3, 3, 3);
body.setTextureOffset(47, 11);
body.addBox(-11, 10, 0.5, 3, 3, 3);
body.setTextureOffset(47, 11);
body.addBox(11, 10, 0.5, 3, 3, 3);


rArm.clear();

lArm.clear();

rLeg.clear();
rLeg.setTextureOffset(26, 25);
rLeg.addBox(0, 8, 1.5, 2, 3, 2);
rLeg.setTextureOffset(35, 25);
rLeg.addBox(-0.5, 11, 0, 3, 1, 4);

lLeg.clear();
lLeg.setTextureOffset(26, 25);
lLeg.addBox(1, 8, 1.5, 2, 3, 2);
lLeg.setTextureOffset(35, 25);
lLeg.addBox(0.5, 11, 0, 3, 1, 4);

}

var SudowoodoRenderType = Renderer.createHumanoidRenderer();
addSudowoodoRenderType(SudowoodoRenderType);

function addSunfloraRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0, true);
head.addBox(-2, 3, -2, 7, 7, 5);
head.setTextureOffset(24, 0, true);
head.addBox(-4, 1, 1, 11, 11, 0);

body.clear();
body.setTextureOffset(0, 19);
body.addBox(-1.5, 10, -1, 6, 8, 5);

rArm.clear();
rArm.setTextureOffset(44, 20, true);
rArm.addBox(-4, 10, 0, 10, 4, 0);

lArm.clear();
lArm.setTextureOffset(44, 16, true);
lArm.addBox(-3, 10, 0, 10, 4, 0);

rLeg.clear();
rLeg.setTextureOffset(20, 17, true);
rLeg.addBox(1, 6, 0, 2, 5, 2);
rLeg.setTextureOffset(22, 22, true);
rLeg.addBox(0, 11, -4, 3, 1, 6);

lLeg.clear();
lLeg.setTextureOffset(20, 17, true);
lLeg.addBox(0, 6, 0, 2, 5, 2);
lLeg.setTextureOffset(22, 22, true);
lLeg.addBox(0, 11, -4, 3, 1, 6);

}

var SunfloraRenderType = Renderer.createHumanoidRenderer();
addSunfloraRenderType(SunfloraRenderType);


function addSunkernRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();


body.clear();
body.setTextureOffset(0, 0, true);
body.addBox(-2, 14, 0, 8, 10, 7);
body.setTextureOffset(0, 0, true);
body.addBox(1.5, 11, 3, 1, 3, 1);
body.setTextureOffset(-14, 17, true);
body.addBox(-7, 11, 1.5, 9, 0, 5);
body.setTextureOffset(-14, 22, true);
body.addBox(2, 11, 1.5, 9, 0, 5);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var SunkernRenderType = Renderer.createHumanoidRenderer();
addSunkernRenderType(SunkernRenderType);

function addSwellowRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, -4, -2, 6, 5, 5);
head.setTextureOffset(0, 10);
head.addBox(-1, -4, 2, 4, 4, 5);
head.setTextureOffset(16, 22);
head.addBox(-0.5, -2, -5, 3, 1, 3);
head.setTextureOffset(20, 19);
head.addBox(0, -1, -4, 2, 1, 2);

body.clear();
body.setTextureOffset(0, 22, true);
body.addBox(-2, 1, 0, 6, 6, 4);
body.setTextureOffset(22, 0, true);
body.addBox(-2.5, 2, 4, 7, 5, 10);
body.setTextureOffset(46, 15, true);
body.addBox(-2, 2, 14, 1, 1, 8);
body.setTextureOffset(46, 15, true);
body.addBox(3, 2, 14, 1, 1, 8);
body.setTextureOffset(23, 22, true);
body.addBox(-15, 3, 6, 13, 0, 5);
body.setTextureOffset(23, 27, true);
body.addBox(4, 3, 6, 13, 0, 5);

rArm.clear();

lArm.clear();

rLeg.clear();
rLeg.setTextureOffset(22, 28);
rLeg.addBox(0, -5, 6, 2, 3, 1);

lLeg.clear();
lLeg.setTextureOffset(22, 28);
lLeg.addBox(0, -5, 6, 2, 3, 1);

}

var SwellowRenderType = Renderer.createHumanoidRenderer();
addSwellowRenderType(SwellowRenderType);

function addTaillowRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, -4, -2, 3, 3, 3);
head.setTextureOffset(0, 6);
head.addBox(-2, -2, -3, 3, 1, 1);

body.clear();
body.setTextureOffset(0, 8, true);
body.addBox(-2, -3, 1, 3, 3, 5);
body.setTextureOffset(-3, 16, true);
body.addBox(-9, -3, 2, 7, 0, 3);
body.setTextureOffset(-3, 19, true);
body.addBox(1, -3, 2, 7, 0, 3);
body.setTextureOffset(21, 0, true);
body.addBox(-2, -3, 6, 1, 1, 5);
body.setTextureOffset(21, 0, true);
body.addBox(0, -3, 6, 1, 1, 5);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var TaillowRenderType = Renderer.createHumanoidRenderer();
addTaillowRenderType(TaillowRenderType);

function addTentacoolRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0);
body.addBox(0, 6, 0, 12, 16, 12);
body.setTextureOffset(56, 0);
body.addBox(0, 22, 6, 2, 18, 2);
body.setTextureOffset(56, 0);
body.addBox(10, 22, 6, 2, 18, 2);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var TentacoolRenderType = Renderer.createHumanoidRenderer();
addTentacoolRenderType(TentacoolRenderType);

function addTentacruelRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();

body.clear();
body.setTextureOffset(0, 0, true);
body.addBox(0, 5, 0, 6, 12, 6);
body.setTextureOffset(24, 10, true);
body.addBox(-1.5, 6, -1.5, 9, 10, 9);
body.setTextureOffset(52, 0, true);
body.addBox(0, 17, 1, 1, 9, 1);
body.setTextureOffset(52, 0, true);
body.addBox(2, 17, 0, 1, 9, 1);
body.setTextureOffset(52, 0, true);
body.addBox(4, 17, 1, 1, 9, 1);
body.setTextureOffset(52, 0, true);
body.addBox(5, 17, 2, 1, 9, 1);
body.setTextureOffset(52, 0, true);
body.addBox(5, 17, 4, 1, 9, 1);
body.setTextureOffset(52, 0, true);
body.addBox(3, 17, 5, 1, 9, 1);
body.setTextureOffset(52, 0, true);
body.addBox(1, 17, 5, 1, 9, 1);
body.setTextureOffset(52, 0, true);
body.addBox(0, 17, 3, 1, 9, 1);

rArm.clear();

lArm.clear();

rLeg.clear();

lLeg.clear();

}

var TentacruelRenderType = Renderer.createHumanoidRenderer();
addTentacruelRenderType(TentacruelRenderType);

function addTogepiRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();


body.clear();
body.setTextureOffset(0, 0);
body.addBox(0, 8, 0, 7, 4, 7);
body.setTextureOffset(0, 18);
body.addBox(0, 12, 0, 7, 7, 7);
body.setTextureOffset(34, 10, true);
body.addBox(0, 6, 0, 7, 2, 0);

rArm.clear();
rArm.setTextureOffset(33, 27);
rArm.addBox(3, 10, 2, 4, 2, 3);

lArm.clear();
lArm.setTextureOffset(33, 27);
lArm.addBox(0, 10, 2, 4, 2, 3);

rLeg.clear();
rLeg.setTextureOffset(33, 20);
rLeg.addBox(2, 6, 2, 2, 3, 2);

lLeg.clear();
lLeg.setTextureOffset(33, 20);
lLeg.addBox(3, 6, 2, 2, 3, 2);

}

var TogepiRenderType = Renderer.createHumanoidRenderer();
addTogepiRenderType(TogepiRenderType);

function addTorchicRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-0.5, 3, 0, 7, 7, 7);
head.setTextureOffset(0, 15);
head.addBox(1, 7, -2, 4, 1, 2);
head.setTextureOffset(34, 16, true);
head.addBox(0, -1, 4, 6, 4, 0);

body.clear();
body.setTextureOffset(30, 0);
body.addBox(0, 10, 0, 6, 7, 6);
body.setTextureOffset(46, 23, true);
body.addBox(-1.5, 9.9, -1.5, 9, 0, 9);

rArm.clear();

lArm.clear();

rLeg.clear();
rLeg.setTextureOffset(0, 20);
rLeg.addBox(2, 5, 3, 1, 5, 1);
rLeg.setTextureOffset(0, 26);
rLeg.addBox(1, 10, 0, 3, 1, 4);

lLeg.clear();
lLeg.setTextureOffset(0, 20);
lLeg.addBox(3, 5, 3, 1, 5, 1);
lLeg.setTextureOffset(0, 26);
lLeg.addBox(2, 10, 0, 3, 1, 4);

}

var TorchicRenderType = Renderer.createHumanoidRenderer();
addTorchicRenderType(TorchicRenderType);

function addTreeckoRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(0, 5, 0, 5, 6, 5);
head.setTextureOffset(20, 0);
head.addBox(1, 8, -4, 3, 3, 4);

body.clear();
body.setTextureOffset(29, 9);
body.addBox(0, 11, 0.5, 5, 7, 4);
body.setTextureOffset(4, 16);
body.addBox(2, 15, 4.5, 2, 3, 7);

body.setTextureOffset(0, 24);
body.addBox(-1, 13, 2.5, 1, 5, 1);
body.setTextureOffset(40, 13);
body.addBox(-2, 18, 1.5, 2, 2, 2);

body.setTextureOffset(0, 24);
body.addBox(5, 13, 2.5, 1, 5, 1);
body.setTextureOffset(40, 13);
body.addBox(5, 18, 1.5, 2, 2, 2);

rArm.clear();

lArm.clear();

rLeg.clear();
rLeg.setTextureOffset(0, 24);
rLeg.addBox(2, 5, 2, 1, 5, 1);
rLeg.setTextureOffset(1, 27);
rLeg.addBox(1, 10, -1, 3, 1, 4);

lLeg.clear();
lLeg.setTextureOffset(0, 24);
lLeg.addBox(2, 5, 2, 1, 5, 1);
lLeg.setTextureOffset(1, 27);
lLeg.addBox(1, 10, -1, 3, 1, 4);

}

var TreeckoRenderType = Renderer.createHumanoidRenderer();
addTreeckoRenderType(TreeckoRenderType);

function addTyphlosionRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0, true);
head.addBox(1, 0, -3, 6, 5, 8);
head.setTextureOffset(38, 21, true);
head.addBox(-1, 5, 3, 10, 0, 8);
head.setTextureOffset(26, 0, true);
head.addBox(1, -2, 3, 1, 2, 3);
head.addBox(6, -2, 3, 1, 2, 3);

body.clear();
body.setTextureOffset(34, 0);
body.addBox(0, 5, 0, 8, 14, 7);

rArm.clear();
rArm.setTextureOffset(0, 14);
rArm.addBox(3, 7, 1, 2, 2, 5);

lArm.clear();
lArm.setTextureOffset(0, 14);
lArm.addBox(2, 7, 1, 2, 2, 5);

rLeg.clear();
rLeg.setTextureOffset(0, 14);
rLeg.addBox(1, 5, 2, 2, 6, 4);
rLeg.addBox(1, 9, 3, 2, 3, 2);

lLeg.clear();
lLeg.setTextureOffset(0, 14);
lLeg.addBox(5, 5, 2, 2, 6, 4);
lLeg.addBox(5, 9, 3, 2, 3, 2);

}

var TyphlosionRenderType = Renderer.createHumanoidRenderer();
addTyphlosionRenderType(TyphlosionRenderType);

function addUmbreonRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
//head
head.setTextureOffset(28, 6);
head.addBox(-2, 10, -2, 5, 5, 4);
//mouth
head.setTextureOffset(28, 15);
head.addBox(-1.5, 13, -3, 4, 2, 2);
//right ear
head.setTextureOffset(2, 14);
head.addBox(-2, 6, -1, 1, 4, 1);
//left ear
head.setTextureOffset(2, 14);
head.addBox(2, 6, -1, 1, 4, 1);

body.clear();
//body
body.setTextureOffset(0, 18);
body.addBox(-2.5, 15, 0, 6, 4, 8);
//tail
body.setTextureOffset(29, 22);
body.addBox(0, 13, 7, 1, 3, 7);

rArm.clear();
rArm.setTextureOffset(48, 0);
rArm.addBox(3.5, 17, 0, 2, 5, 2);

lArm.clear();
lArm.setTextureOffset(56, 0);
lArm.addBox(-4.5, 17, 0, 2, 5, 2);

rLeg.clear();
rLeg.setTextureOffset(48, 0);
rLeg.addBox(-0.5, 7, 6, 2, 5, 2);

lLeg.clear();
lLeg.setTextureOffset(56, 0);
lLeg.addBox(-0.5, 7, 6, 2, 5, 2);

}

var UmbreonRenderType = Renderer.createHumanoidRenderer();
addUmbreonRenderType(UmbreonRenderType);

function addVaporeonRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
//head
head.setTextureOffset(28, 6);
head.addBox(-2, 12, -4, 5, 5, 4);
//mouth
head.setTextureOffset(28, 15);
head.addBox(-1.5, 15, -5, 4, 2, 2);
//right ear
head.setTextureOffset(0, 0, true);
head.addBox(-8, 11, -3, 6, 3, 0);
//left ear
head.setTextureOffset(12, 0, true);
head.addBox(3, 11, -3, 6, 3, 0);

body.clear();
//body 1
body.setTextureOffset(0, 18);
body.addBox(-2.5, 15, 0, 6, 4, 8);
//body 2
body.setTextureOffset(28, 24, true);
body.addBox(-3.5, 12, -0.1, 8, 8, 0);
//tail 1
body.setTextureOffset(6, 18);
body.addBox(0, 16, 8, 1, 1, 10);
//tail 2
body.setTextureOffset(0, 8);
body.addBox(0.5, 14, 9, 0, 2, 8);

rArm.clear();
rArm.setTextureOffset(48, 0);
rArm.addBox(3.5, 17, 0, 2, 5, 2);

lArm.clear();
lArm.setTextureOffset(56, 0);
lArm.addBox(-4.5, 17, 0, 2, 5, 2);

rLeg.clear();
rLeg.setTextureOffset(48, 0);
rLeg.addBox(-0.5, 7, 6, 2, 5, 2);

lLeg.clear();
lLeg.setTextureOffset(56, 0);
lLeg.addBox(-0.5, 7, 6, 2, 5, 2);

}

var VaporeonRenderType = Renderer.createHumanoidRenderer();
addVaporeonRenderType(VaporeonRenderType);

function addVenusaurRenderType(renderer)

{

var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-2, 10, -8, 8, 8, 8, 3);

body.clear();
body.setTextureOffset(24, 12);
body.addBox(-2, 10, 0, 8, 8, 12, 4);
body.setTextureOffset(32, 0);
body.addBox(-2, 6, 2, 8, 4, 8, 1);
body.addBox(-2, 2, 2, 8, 4, 8, 1);
body.addBox(-2, -2, 2, 8, 4, 8, 1);
body.addBox(-2, -6, 2, 8, 4, 8, 1);
body.setTextureOffset(12, 16);
body.addBox(-6, -4, 4, 4, 0, 4, 1);
body.addBox(0, -4, -2, 4, 0, 4, 1);
body.addBox(6, -4, 4, 4, 0, 4, 1);
body.addBox(0, -4, 10, 4, 0, 4, 1);
body.addBox(-10, -4, 4, 4, 0, 4, 1);
body.addBox(-10, -4, 10, 4, 0, 4, 1);
body.addBox(-10, -4, -2, 4, 0, 4, 1);
body.addBox(0, -4, -6, 4, 0, 4, 1);
body.addBox(6, -4, -6, 4, 0, 4, 1);
body.addBox(-6, -4, -6, 4, 0, 4, 1);
body.addBox(10, -4, 4, 4, 0, 4, 1);
body.addBox(10, -4, 10, 4, 0, 4, 1);
body.addBox(10, -4, -2, 4, 0, 4, 1);
body.addBox(0, -4, 14, 4, 0, 4, 1);
body.addBox(6, -4, 14, 4, 0, 4, 1);
body.addBox(-6, -4, 14, 4, 0, 4, 1);

rArm.clear();
rArm.setTextureOffset(0, 22);
rArm.addBox(0, 14, 8, 4, 6, 4, 1);

lArm.clear();
lArm.setTextureOffset(0, 22);
lArm.addBox(0, 14, 8, 4, 6, 4, 1);

rLeg.clear();
rLeg.setTextureOffset(0, 22);
rLeg.addBox(-4, 4, -2, 4, 6, 4, 1);

lLeg.clear();
lLeg.setTextureOffset(0, 22);
lLeg.addBox(4, 4, -2, 4, 6, 4, 1);

}

var VenusaurRenderType = Renderer.createHumanoidRenderer();
addVenusaurRenderType(VenusaurRenderType);

function addPokeballRenderType(renderer) {
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
body.clear();
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();

body.setTextureOffset(0, 0);
body.addBox(-2, 19, 0, 4, 4, 4);
body.setTextureOffset(0, 16);
body.addBox(-1.5, 18.5, 0.5, 3, 1, 3);
body.setTextureOffset(39, 16);
body.addBox(-1.5, 22.5, 0.5, 3, 1, 3);
body.setTextureOffset(56, 0);
body.addBox(1.5, 19.5, 0.5, 1, 3, 3);
body.setTextureOffset(56, 0);
body.addBox(-2.5, 19.5, 0.5, 1, 3, 3);
body.setTextureOffset(56, 2);
body.addBox(-1.5, 19.5, -0.5, 3, 3, 1);
body.setTextureOffset(56, 2);
body.addBox(-1.5, 19.5, 3.5, 3, 3, 1);
body.setTextureOffset(52, 0);
body.addBox(-0.5, 20.8, -0.7, 1, 1, 1);
}

var PokeballRenderType = Renderer.createHumanoidRenderer();
addPokeballRenderType(PokeballRenderType);

function addTeenagerRenderType(renderer) {
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
body.clear();
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();

head.setTextureOffset(0, 0);
head.addBox(-1.5, 2, -1, 6, 6, 6);
head.setTextureOffset(42, 0);
head.addBox(-1.5, 3, 5, 6, 1, 3);

body.setTextureOffset(16, 16);
body.addBox(-1.5, 8, 0, 6, 8, 4);

rArm.setTextureOffset(40, 16);
rArm.addBox(2.5, 6, 1, 2, 8, 2);

lArm.setTextureOffset(40, 16);
lArm.addBox(-1.5, 6, 1, 2, 8, 2);

rLeg.setTextureOffset(0, 16);
rLeg.addBox(1, 4, 1, 2, 6, 2);
rLeg.setTextureOffset(30, 4);
rLeg.addBox(1, 10, -1, 2, 2, 4);

lLeg.setTextureOffset(0, 16);
lLeg.addBox(0, 4, 1, 2, 6, 2);
lLeg.setTextureOffset(30, 4);
lLeg.addBox(0, 10, -1, 2, 2, 4);
}

var TeenagerRenderType = Renderer.createHumanoidRenderer();
addTeenagerRenderType(TeenagerRenderType);

function addBugCatcherRenderType(renderer) {
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
body.clear();
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();

head.setTextureOffset(0, 0);
head.addBox(-1.5, 2, -1, 6, 6, 6);
head.setTextureOffset(32, 0);
head.addBox(-2.5, 4, -2, 8, 1, 8);

body.setTextureOffset(16, 16);
body.addBox(-1.5, 8, 0, 6, 8, 4);

rArm.setTextureOffset(40, 16);
rArm.addBox(2.5, 6, 1, 2, 8, 2);

lArm.setTextureOffset(40, 16);
lArm.addBox(-1.5, 6, 1, 2, 8, 2);

rLeg.setTextureOffset(0, 16);
rLeg.addBox(1, 4, 1, 2, 6, 2);
rLeg.setTextureOffset(30, 10);
rLeg.addBox(1, 10, -1, 2, 2, 4);

lLeg.setTextureOffset(0, 16);
lLeg.addBox(0, 4, 1, 2, 6, 2);
lLeg.setTextureOffset(30, 10);
lLeg.addBox(0, 10, -1, 2, 2, 4);
}

var BugCatcherRenderType = Renderer.createHumanoidRenderer();
addBugCatcherRenderType(BugCatcherRenderType);

function addFishermanRenderType(renderer) {
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

rArm.clear();
lArm.clear();

head.setTextureOffset(6, 6);
head.addBox(-4, -6, -6, 8, 1, 2);

rArm.setTextureOffset(40, 17);
rArm.addBox(-2, -2, -1.5, 3, 12, 3);
rArm.setTextureOffset(32, 0);
rArm.addBox(-1, 8, -15, 1, 1, 15);

lArm.setTextureOffset(40, 17);
lArm.addBox(-1, -2, -1.5, 3, 12, 3);
}

var FishermanRenderType = Renderer.createHumanoidRenderer();
addFishermanRenderType(FishermanRenderType);

function addBirdKeeperRenderType(renderer) {
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
body.clear();
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();

head.setTextureOffset(0, 0);
head.addBox(-1.5, 2, -1, 6, 6, 6);
head.setTextureOffset(42, 0);
head.addBox(-1.5, 3, -4, 6, 1, 3);

body.setTextureOffset(16, 16);
body.addBox(-1.5, 8, 0, 6, 8, 4);

rArm.setTextureOffset(40, 16);
rArm.addBox(2.5, 6, 1, 2, 8, 2);

lArm.setTextureOffset(40, 16);
lArm.addBox(-1.5, 6, 1, 2, 8, 2);

rLeg.setTextureOffset(0, 16);
rLeg.addBox(1, 4, 1, 2, 6, 2);
rLeg.setTextureOffset(30, 4);
rLeg.addBox(1, 10, -1, 2, 2, 4);

lLeg.setTextureOffset(0, 16);
lLeg.addBox(0, 4, 1, 2, 6, 2);
lLeg.setTextureOffset(30, 4);
lLeg.addBox(0, 10, -1, 2, 2, 4);
}

var BirdKeeperRenderType = Renderer.createHumanoidRenderer();
addBirdKeeperRenderType(BirdKeeperRenderType);

var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang";
var attackBase = " iVBORw0KGgoAAAANSUhEUgAAAGQAAAAoCAYAAAAIeF9DAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTFH80I3AAAH4ElEQVRoQ+3Yi4qUSRKGYS9Q0PGsIAiiqDOe0PGA9zMzjN5j7T4F7090WkX37OKuJQZ8ZGacv4ys6qIv/Vt2P/Fd4dLu77///gp//vnnmfNff/115nxI9+XLl01nPRQzMe3t17rhUD9//PHHGd2Kz58/H+xh1a1nPOSmP9ZP4BOc+UPx02/mUqN9+DmQI+f/+0Bevny5e/HixX4Nz58/371+/fqM7enTp/v11atXu99//32/slmL+e233/Z7aP/rr79uujdv3uxXvm/fvt3big/v3r3b+/Gp9uojtn11Tp3DmYHUuAQzsIbZ80EEMfoISpiPHE+ePNnb02uw5iY5Z41Z1Sof3/yrK85+9pdt7k+VwzYQBUvw6NGj3bNnz/ZJC2qSkvGxh+IUtCKZPrLZ8pWzvOlg5g3FPn78eHuVwFcvdB8+fNiffwQO20CaEMy9Yoh5GRILgopM1KA1e6sYF6L4tBXDPv29TOskkF1P/LsIOucfgcM2kBlgauu+1wUacM7mNaafhGoQ7Ok0UDPZ8ndpXuesX6NTx68Ya684O5wqhzMDqVhBs6AEBUNTT+fjaO8Vpgc55muFeXnZVnIuq16qZS1vftmKZztlDttAZrKKpbOWgG1toKIzR2Djb80vkl4Fm/0kXIMT8wJg9lSOWf9UOWwDySkHUMzHz6QF1NSnT5/2a18BNTpjYX5EQ4QOQXxwRqDzJJi+84ppOzUO20Dev3+/OfRK5poNoQr00YYZ6xdDeqi4WPuQvTrQL5z0yPvjKN4+X9/55UCU/kfgsA2EcjorXOMFWGfhY/Cq+Il3bgXNqmPPR0NrXa/anm3GZp89iNVbfZ46hzMDgZk0XVMMAvuof/z48QxhyTUsj302OfxRvagUl8ipJzn7hQJdSOd0Vv7JP+WQHOJgb2Bs5Zrrqge9XITDVwOZkLDkUBJJu/BsML9v2Z19LOWpuYtKl5p0AUEPSHiJbL3IFUnni3JIDnGA6vWpqxd7fs5xCBfhsA1kFpsQ1L5mp63JggbkWZul6zs0cZ655akHzc4X5Ow7vfr5qRdpudJPJJ0vyiE5xMEnSsy34LANpMCMAuxrqEvuY6dYSVu7lEgpvpJN0k3/fMTUuLMVIas+7PnojV1Pxc8YuqRY60U4JIc4TP/29Ons/1MO20AofTQ15CehoBwjUuKHDx9uNuf5itLL009NtnBMps8km3QpSKpxnsQhicMqK4djwhb4FtedrJgcwsrBmV+fJDm3gcyAIKgLzRYxiSSwlriYXgK077Uck5WAn6OIJ3TT5zxZ/ez1ucrK4ZiIjwM0QHw9PLZjHLp8utWnHxbgrs4MpMuXYAbWMHs+iBgOfUOSMB85fMeyp9dgMsnx0ZhVrfLJkVQ3mf1lm/Y4rFJ/fHFIVg7JIQ5d8EU55F9dcfaHOGwDUbAEvrp8jCQtqElKxsceilPQimR68fTZ6JLyFg8zb0j613XCVy90/et65o/DKnJODon95JAc4mDV/0U5FPtd/vs9yVYM+/T3Mq2J/Tzz7yLEOOs7iUNyjENS/vpJym8Vg4MLTGc9j8McQna98185bAOZAaa27vuEgAacs3mN6WvOWoNgT5dMW/4uzeuc9ZN0STHWXvF5/oc4JCuH5BAHl9iFZiv2EIcue+r4FWONw5mBVKygWVCCgqGpp7vov66TztlWci5LLwmdmuU9T8qT2B/ikDhPDskhDtADgPM42Hdfk0N+2cRvA5nJKpbOWgK2tYGKzhyBjb91XjBfr4LNfhKuQUjmBUz9Mck/OcYhWTkk9isHugZ1EQ5h5TB7Ksc2kJzm5BTz8TNpATX13/zrOln1ID44I5BMgvRrrZCs52MckmMckqnjN88Thzh0vgiHbSD/q39dJ3TZqwP9SkufiHcR+frOLwei9Dgk+SXO9Tg5JPTZ+cYhmRzsA59i2q8c9O0PvPjzOGwDoZzOCtd4AdZZ+Bh8MviJd24FzfbC+GhoreuTac82Y+E8OQUOzrMHsXrT55mBwEyarikGgX1d/dN/v9sjG6Hsrase9CKn9Tzh/71zYC8PqFN/Xw1kQsKSQ0kkrdlsMP9msDv7WMozm+v19GI1k46fc5cauoCgh+LYil9xahy2gcxiE4Laz2azSdhZA/KszdL1Hfot/3WdfsUpcdgGUmBGAfY1VIN97BQraSt9cVbFV7LTv33++Yip8WIQsurDno/e2PU0c8469qfEYRsIpY+mhr7lv9/5Fle+FZNs6FKQFOfMr1coJ/2pc9gGMgOCoJrJFjGJJLCWuJheArTvtUDk+SLMthLwk5pfjdOtPv1RhuqcOoczA6lxCWZgDbPngwhi9BGUMB85fMeyp9dgzU1yzhqzqjVfc/7VFWc/+8s296fKYRvIrVu39rh37962h+vXr2/rlStX9uuDBw92N2/e3N29e3d39erV3Z07d3Y3btzYn+n53L59e7OJt9LxS6cWf3pneyvwm6ua6tvPHi9fvryvl99qh1PisA2kAhPXrl3b63/55Zf9WrH79+/vzyDJbChECqZerpqCiKeP7JqPvsuKYKBDUNzUw6lx2AbCQWLTyqkpKmK69iWaCSOpgRI7R5bePp1XR6cef03yy1bTavJRv0tpDfOl/QgctoFQ1lRQYBabthqkV8zrqMF80s84dlhrdRGRAq+Yjd65V+7Vz1ig/xE4bAP5ie8Fl3b/AmgOFbVuhzPeAAAAAElFTkSuQmCC "
var runBase = " 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 "
var itemsBase = " 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 "
var potionBase = " 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 "
var superpotionBase = " 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 "
var hyperpotionBase = " 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 "
var maxpotionBase = " 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 "
var mainBase = " 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 "
var chooseBase = " iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTFH80I3AAAAJklEQVRoQ+3BMQEAAAzDoPk3nT2VARwAAAAAAAAAAAAAAAAAwFQ9QnID/c4uEksAAAAASUVORK5CYII= "

//Sounds

var pokecenterBase = " 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F//60voJrqbnQvxGyR/XWiKgABAACHX26ltHjQlPWphYb6NCAyeV6CbywxwANSJmhWLh9RxRkaHWMZZaapNukqtldxmCFY0X9tXX//qCgVM/////xa/////3xAX/////4ktVAgiO//uSZNgMA+1f0hsva3BDydrNIW1ek0F/Ni3lrcFDL+eliR24QCfnwjY6XHDMphAIayqNFGQ9kwVG2zM/gpgImIQEleTzHRHEwDOTEodt5I1TMZs2paiqRHxwmBp4jctOZIFdV5BII7zHfSYUmGurluwX36b5m18MznvReVMdPlNS/WcAjQBYMVGZ5ZpOY7dE/0Z4+dMmL84UZfZIAWRbt1oy51spPnp01W302iqHn//0P1P38OaWeik/6HqbUZ0gBMDCye83j8owZMP2zGWDsHUziHkyLUBNy0OJln6aDrQqkq8zfW9dVT6hGSC0/XfdDWv6av8qIX////+YhvH/57/3q/+c/////8TIsAgWgMCCrSYCPA4OBaOHCZnxOylPGHSUrFg9sMVUUFqUvA4meNdafBBKv2xWN2rkCYQzmjeUJx5Y9exllZuvbjherxfT6wYQRLooWvSx9bHJTqVWuz2e3Ut5my6qvuWgR6edBq6l59akOYywfURGYqOF5BmUGEh6+fnetlK5nMJw3+XWi7E4f/9zj/qZNNHw+Yluo0Tz/f/7kmTAjATzbE0LeWtwTGv582JNbhLViThN5k3A2i/rtJUdukQAVUwAFAdJtpX3kOW58OGxSKozBCJBi5B////fnt/9H///3///9TP+EL/////6DP////+4OSwBCBCBQwRXOMPgAXmNKCjhoIgztXtceFChDSVhoYDEnSqYS4zM3fqDllfRzU3A+Cx5VFJe6hW+SpXXrl3VrCi5SYx9j2ninDaEnLfazBFSz/7uXvbDb8srNpi10af1g8BdUJt96LnSWbUk6SBUSCCjxwmzs6BDkP1NN+o/fs6bnPzHJoLv//Pf13QW/SDmmuCD9PiACAAEQdGUk1MY8kEb8EkdQQ6NSNKQ6QRBsUFGTLZd0vSrarZveuaf9vz/3O/xLCJ/////8Khf/////KBb//8sAJhgCBig+wnMeDDyDcw4DNCD2uDpAGAxg0kDgIkB0xx0KB1cVCHFSrlMygl4JBNmgODWwtShgupggirpLkTqSow/S40+Meb28z6Tqdt9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f/a3WnOH483q6lqCLFn////15iHn/////YfHAQgAE0jFUcUgp1HQhxg4gYM9omGY+wGSzJv00sLHA4tFARWATDJKOXisSAphciq5AQwJhOoY22EVxGAJajOgKER4QwS0DOzpR57IMcX3QgXKnyvNgEZQL9ULrRmdv7y+co7T6T/pK5fYsrIn+6Ie0Co0m/y8/5F2OLWXS1mZIyHJmAFbC2GfONMes0+bnz39fgic////mXWfbNQ/RXnHPf4mANSqbshjWhAbuN9U8J1McswxFzGbTe3X//fUB0TzDAWxXMKD2RlmKh6//U38xCEb//6FajpQfUfrVGK3////+oWn/////Gt6EAIVTBYQ5cJCoWaIQAoBMtYCATNN1xwINGSgVrF1CIHullAuxnasgOADHChpQyePBLr9xoFIFAfJrV0KAaUPKvZi4v/7kmQhjASpYEuLe6N0RUvqvRVKb4+dgThtaa3BFa/rXFU1vth5bl/tNy7W3TykOB3N7Kak9P7qan6OzLqTi17mNaZY/dAMJgtTJNn/t/Re8mW2QsosgPEiit1VGb5098wdKpD1ti1hct////R51fcNnPag9/WQAAABWjkqU6hhw9HUu3dBp/kho+TCvt+/9AmE2IEeoULyE0xwuC//X/EgFLf//OaWIR4+59yFAoG/////xgGv////+wqAjAQkCxBCUN72HGKBruNAlpjdKEuR3cwJ4rL1RYQET/DmLCouooGxztuCH5l6m12pegOdwnM96ertex8o/d78Oooa/CdjcKwjOdi1m7lPjV+5r/UDSGhP/pGn5x03UZazhiovMoC8KDfpdl/Sc66k1+2I8Fl////79hwHugGCi6dalBCOnrCbW0N//2fsjHHJP/BaHMBwSjSMbyYVyMhNf/v/WI4wb/0/ztBpo1S0pddYSMbX///q/+VED/////SEvPUDDAJjAXZnZBKfImTWTcpGeHLXA4cZUsNXHCpoKDB4WTHKarP/+5JkEgwD+1/Nk1qLcEWr+pok6m+Q5X80be4NwNyv6rTyqbrAgS6MA5m7biTT7CIu6XGrbuQ/vm5JhXs/TX/5qvMCEwiRTy+AIxf13dreUavf9fN/6QkILk9/2PfvZUvvUo2nmQEmIT9aXU/rU9VJb9sXZE////of7izz2t39AAOIJioQpRpHBfw6nB02UZXwTvT/xu+zVMbb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lg2dEqW/yo66mf/9HvBwLtTfTr/7f5EG3//5u1NlOrhGS/////5ABb/////wuWBQKUUgCAMMgTfPkR1zXQh9eksEBSvqCHbQ//uSZFWAAspf1VGKU3Q3y+qsCOpvjb1/PGzSDcDcL+pcITW6sAnMBnMKKRQunXRN1pOV7JJmxTJpla1IWc4nPF8G7Q4M0OChx9vzZNygYN/1f5DAUW//9Zmyz6jNMzUkXp4+oPiKn////2xuixft//6m/uOS2r/RlBgCP2xwYpRB8E4PVMb//M3//3///v6/8zG///8wdR5ZggYLYuz7Jh5P/////5EEg/////+STQBgMSCgC/BRJQEnEHNNNALpGdRoZRL8rPw9AjwGqUABUQwUUrDmGzFZbLKlUh7SWrz5xGk6iupMjgaHhYqxZJBTJs8gkTxi3+yP9YaB3pf/+slUzNSZaWl1kR5ojuUdBPUf6P//rftiPE7/T////xxNqKAQYAgoAnukGCRuH3olC/7lf/7gyU/X/////iOJz///Opsx2ZNwHi3///6N3wYCy/0////yFgCIFDwSSxJBBgSQhkzDADdEv6peVitUrVBmxBgA9EYQypkQ40UfWbJHXTYXp5RnT2OKlnK2wYyGA6Y+CLFXWQ5mMTT/z/8xAWgLav/7kmR5iEOOX86bVGtwNkv63QhKbo29gT1MUa3A4q/qqHK1vv/zhpypy4WHTR0j0ynC6oKA0////v2w0kh+r//1t/SElPcgAcQKUylU2XXIuICXoL//9v//hB8OiILxFmUv/t/ULEJT//9dN1PvXWksa2////t3xcS/X////k5lADAoAHkIySEi6rwP+S7AWGKpLuSSv1izT8s+AONhDAAxr0fwwsTom8qmSSy8mT1Bgyc9J6YZikjNT1CUybAMCjtUYJEXLVUcL6H+tjT+xPAT8+3/ywa8voF41RGcZFCU1lJSwxWPP9///+2JWat///9v7Cem1IEgYEaAyk5R3xJwk3qH/Rv//v71YBQdhAFGnR49VKf//4m//1ftNyP0rgSN////98EQi/////9xehJIgEJKnE0TCUdNAqUmFtyK6aLH72D7iTDDAa5DyXkWK5k51CWmeKa/dqSaUsVPUoSwkHWPgZFFkTguI+4/k+v/r/qGsN5P/8qN+TXOnlGbVyQczKMPB7+////bGkOD///6v9xp6BCgxo/JKClmxNBIM8b/+5JkkQhDr1/NG1STcDjL6poU6m+MzX1BTFGt0Osv6ihSnbqBLf//73/wm2AQBLLZ3nFP9U/woGP/6tyjIXmPSPzCUC5b/////Cwa/////4WdAAAkgYDhAoAbGhcm4cRr2FBO1fO8KFJxVbDGxBYJ3AhIuDBSIwrMgs0UdoxaXW9HPHTS7qP3LoBJxszIWcRhryZegat/XNv6gwhSI//qS5IOVpuPr1LKZ5k1BaiN////6mxdB9/////2GZ9QICQDlAOBhSoLpfHQmO9AyMnytGuV///+JJfAmKU4jFo+Ny///4jEf//59ElPMeZC9b/////EYD7/////4vAgwChQVQLsJHAeWqIiP2xELdQLqGCXayHqzEfQWKsWgG5nYu71Y7rtB7438bH6y1Xoav87nJ86kTMCNRYPjFI+8rw//rd/Lvat9bmn9IUKFI3//zjT9T6zVqjoIKTv62////MQ0j///63/uLWf7v5UAQLDAEs3HjeSINGziHeoVgC4vFpkdK/r5kjLiUZO/GT////f/Mgf3//+Y1Hq21GzqWoK40////uSZKgIA11fztMza3A96+qtFOpvjgl/Mk1uLcEIL+jodTW6///0hbP/////REEZACAGBgAUcYSREKiRT0tL0UwoiZTDIg2tx0FBIJGgFipuNo8WUTOpJkGeXajXqNjpWmdZskiOoDBKgUBGrjGkVS+tH/0k/6YrgL4ef//ybYzLdDXJGkUTgYsKn////q5GCS/////6ItB/u/pAAC4AhLtN1DOQO8LCj1oFMFobxktJlI0V///+sct////X/x/Cyf//5ccwNXTeqQkUScsFGUf////9Y6/////7jHYQAFZUYTxZQegMCJrzqX88QGw7rT6BpIX6BTcREelu63UbTrGMyPTfWo8ifrbY3JgDBlg5hvIAWE+bUDi/+6X6lgfAkqH//ztF5Iap7SRAuyD////98aBQ/////3EnP9ByDQamlzFBhqo3SxQPcPUESAiDAbXR3rdu7f/33CqEJkBYifpdFRcJEvv//9A9L///lGTC7fl7moBQf////1bDME3/////sIB1AABlEQDhFKGOP60YHjzfiu4tmWSfleCER8hUE//7kmS5CoNaX807FJNwQcv6KgoNbov9gTZs0a3BIq/n3LapuuWkkElm6kmN6nJgtLS6je9W9kRN4mjrJQvNz1a0P9Vv8fgcz///MH1GhpXLdomP////74uF3/////YkD+sABH0hQaUkDJ24k8aJllqpXPVW5hjgJIolx8xdRxF6TlR6rqTUfq+sNJrjDC2PPkFkDM+n/2/rGoM7///Jj6i4aVqLdoyX////++Lg8f////9hPH5IiIlDpcoisarmeBeW3+C7WPa2KLohpgk5qMthjMo2W6yhyIWWqUpI43n7xyjbSIhqWaj7FtBD+k//PBW///xl4zLUtnoF83////3wwFH/////EG/QJAUCgAEqvGuWYBcrTrwIs5BCDGpZdDJBB4GwFAkTbprSlrjoJCa+kcVfP5sDbAl2lEgKXN5vof9P+xfCu///yl5TPVLbTQEFjT////74vDX/////cZf3f0ICwA4HABWFHItLSMFzKbbG9T1FWz0jiNgFygZNt/gT/GJ//I6/+f4sn+95n+dAw1TvKKUCzjyKiAyTtef6qX//+5JEzQiCyF/OUxFrcFTL6jo9rW6KhX07p7VNwWMv5tz5QbiLMC2f//+Tz3Jq/onFgwn/////vjMQ/////9iU6wAEIBFAwBKxZPPSj4coc2sHNIfRTV2kGELgCoAdxdUvSpMf5SLXWtTFBGut6ZcCw4YCaY6CAJ6i0pDT/6v6gewFI3//+Tz3Jq/ZZxYD6n////98RxD/////0Quj8ldAMCEkVlpz2DVu/CVlV/UmLnxyAXQS5io1c4ktSJg2PoeVHvdXreo6EBRb0I5ZfPc3zqH/t/QKoDDf//GPlS9ehCgEgp////++FYbf////8LttcLICAQEjazGXRC4EeEsRWdNPoOC+EAC0Ei43zyXWcRJzlAlv3V69R0IeX1RkxtHnyJ//7f0B0ED//8Y+Ly9dziFAkP////98Mgt/////7gU+ugAEIQDA4AKSKF+lgzlMdeQTiKUjKg8zJLlPGQqePupUxWtLYCsyre6Tkl/vzT26p/7rdzUm/fN8ynIsZ4oTOpyoo69OW/3h3+Zf76mK/7OKRAlBPP//4rxU1DKEkxYR//uQRN6IguBfzTsva3Bda+m6Yo1uCmF/OufNTdFEr+fo+Km6SRLpFkQbLTf////3rFOCgd/////7B6h7W7+kBGGSCCMknPv8rUB/O10CgM1I8xuMoBeo2jNSSjjrTf1/96t9AT83///2/yIFf//4gRvuIMs5U4044VUAECd/////iSCTf////zwv2AgjgPWwcUAn2AIov+4Y6XpS2JQOoHZZWiAYNQ500vCQoEgJG43ZuYzDaSaHr+Hx6K7i3/njDsdeX5jHVDHGljAAMOtQwMBGvxt+JZf5+8////db6ZOkA/QJsBxIFNBOG6H/+smz2ofDTql3PHwAnoUDnn////zqVEjgYVP/////qSAOHjE+Sq//+s2rAAgEAAmEl34UNCFyyYSGhzICeWhmDXAAszHpFNus+1rf6tdatMVqSbb//t66f9AUOBdJt//5gf1kqur3jFT/////4qv////+OyoAECkAwICRWZomChhR9LrrqbECGXggYHsWB2pGJ9FzhqaKpTN1oe6/vdhYxNHi8IsvoLah/r/8aBKf//ya/KZ6//uSZO4IA85fy9M6o3BMC/naPmpukYmxJC1yjdElL6ao+MW6r1qE+P/////5mK7/////1DwPawAAEC5gKBwAKzOW5F1rpSbOxa1AyZBfkAawOcO1IxSapA1NNRFSvLXutvekYhYmMF5DiLI9D1f9H+sPg5Vf//Jr8pnqvWoOV/////zMX/////+QG1gBQFAoIKBOVieDi07hXgvtei/KWNIAgI9w8d4s8cZskxogboqry3R60Dr1OtLMwKcSVCQ5zTnVm9L/XP/0BTAJMiZu///QP6yi3oJpICeSJm7////69yVIVN/////qkme1gOwIBwQljypbViy7Txessqx/zDgAhQ/FS4F3HOX3QZR80M9R8t/Ud9bzAuAAdDnusc5PTfO+j/XP/0AwAI8l03//1IFusdp7WkaF8vMDhL6f////spxnDiX////+qN57XQAAAAAACDFWp0Lgd+ArVmMyiUReOwwHEoLFYLjhh0A7xmA2AugaAjFUnNniyBziIPOu7PD5xZIsYsiskF6iDoS8WiJIp+tvpoJIJovSE8El6hXjTv/7kkTfAIKYX87R8Wt0VKv57T6NbgwxfzL1qIABgi/nKrLQAIJEaSzJ/yyMk/5RGgzoWTm44f/Io/+xDj3+5RKn/Of/5w0yR8CIHBIw3////xwAAAA4IAALUYOcyX2M7sTvSGX14wCSTYX/B4GCBfOF1BqDdpJK0sToQIlnrd9yfMT5pcTJVRKkCUyiNGRKpv9vugkgminUJ4NvjnFToJDklSv+dHc/5RIhdVk3MyC/+XH/2I5v9yyWv+c//zhp6bJ3aznDGRkSJIAPuXWOzfGY9VPVVKAQEsZjUSoIhoRA0/BUNYiBpeCoK0KBo9iVx7g0oGoKnSriwNKBqCobEowGir/1A1xKdEp0sDU9BU6VcWBr+oGnA1BUNgBELf/KUpeKFDK0JChwiAMAIJOASTkUQEdLA0/Ep0RcRBwRHioK5YGnpWGqgaDuDQdWCvER4seKgqPDQiPBv/6wVAoKjAaPFpUFeW/ywcLHlgqqTEFNRTMuOTguNKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JE6QAED1zOpmpgAHUsihjMRABKXDU/vDGAIUkGZhuSYACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq "
var pokecatchBase = " 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 "

Base64Decode(android.util.Base64.decode(attackBase, 0), path + "/attack.png");
Base64Decode(android.util.Base64.decode(runBase, 0), path + "/run.png");
Base64Decode(android.util.Base64.decode(itemsBase, 0), path + "/items.png");
Base64Decode(android.util.Base64.decode(potionBase, 0), path + "/potion.png");
Base64Decode(android.util.Base64.decode(superpotionBase, 0), path + "/superpotion.png");
Base64Decode(android.util.Base64.decode(hyperpotionBase, 0), path + "/hyperpotion.png");
Base64Decode(android.util.Base64.decode(maxpotionBase, 0), path + "/maxpotion.png");
Base64Decode(android.util.Base64.decode(mainBase, 0), path + "/main.png");
Base64Decode(android.util.Base64.decode(chooseBase, 0), path + "/choose.png");
Base64Decode(android.util.Base64.decode(pokecenterBase, 0), path + "/pokecenter.mp3");
Base64Decode(android.util.Base64.decode(pokecatchBase, 0), path + "/pokecatch.mp3");

/*#######################################################################*/
/*#######################################################################*/
/*#######################################################################*/

var img1 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/attack.png");
var img2 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/run.png");
var img3 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/items.png");
var img4 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/potion.png");
var img5 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/superpotion.png");
var img6 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/hyperpotion.png");
var img7 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/maxpotion.png");
var img10 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/main.png");
var img11 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/choose.png");

var attackimg = new android.graphics.drawable.BitmapDrawable(img1);
var runimg = new android.graphics.drawable.BitmapDrawable(img2);
var itemsimg = new android.graphics.drawable.BitmapDrawable(img3);
var potionimg = new android.graphics.drawable.BitmapDrawable(img4);
var superpotionimg = new android.graphics.drawable.BitmapDrawable(img5);
var hyperpotionimg = new android.graphics.drawable.BitmapDrawable(img6);
var maxpotionimg = new android.graphics.drawable.BitmapDrawable(img7);
var mainimg = new android.graphics.drawable.BitmapDrawable(img10);
var chooseimg = new android.graphics.drawable.BitmapDrawable(img11);

function recheckHealth() {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var metrics = new android.util.DisplayMetrics();
ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
var displayHeight = metrics.heightPixels;
var displayWidth = metrics.widthPixels;

dp = ctx.getResources().getDisplayMetrics().density
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
try {
simpleGUI2.dismiss();
simpleGUI2 = new android.widget.PopupWindow(ctx)
var layout2 = new android.widget.LinearLayout(ctx)
healthBarAttacked = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal)
healthBarAttacked.setLayoutParams(new android.widget.LinearLayout.LayoutParams(90 * dp, displayWidth/48))
healthBarAttacked.setVisibility(1)
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#58FA58"), android.graphics.PorterDuff.Mode.MULTIPLY);
layout2.setOrientation(1)
layout2.addView(healthBarAttacked)

simpleGUI2.setContentView(layout2);
simpleGUI2.setWidth(displayWidth/4.8);
simpleGUI2.setHeight(displayWidth/96);
simpleGUI2.setBackgroundDrawable(null)
simpleGUI2.setTouchable(false)
simpleGUI2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, displayWidth/8.72727, displayWidth/6);

healthBarAttacked.setMax(maxhealthAttacked);
healthBarAttacked.setProgress(healthAttacked);
} catch (err) {
clientMessage(err);
}
}
})
}

function checkHealth() {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var metrics = new android.util.DisplayMetrics();
ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
var displayHeight = metrics.heightPixels;
var displayWidth = metrics.widthPixels;

dp = ctx.getResources().getDisplayMetrics().density
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
try {
simpleGUI = new android.widget.PopupWindow(ctx)
simpleGUI2 = new android.widget.PopupWindow(ctx)
var layout = new android.widget.LinearLayout(ctx)
var layout2 = new android.widget.LinearLayout(ctx)

healthBarAttacker = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal)
healthBarAttacker.setLayoutParams(new android.widget.LinearLayout.LayoutParams(90 * dp, 40))

healthBarAttacked = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal)
healthBarAttacked.setLayoutParams(new android.widget.LinearLayout.LayoutParams(90 * dp, 40))

healthBarAttacker.setVisibility(1)

healthBarAttacked.setVisibility(1)
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#58FA58"), android.graphics.PorterDuff.Mode.MULTIPLY);
layout.setOrientation(1)
layout.addView(healthBarAttacker)
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#58FA58"), android.graphics.PorterDuff.Mode.MULTIPLY);
layout2.setOrientation(1)
layout2.addView(healthBarAttacked)


simpleGUI.setContentView(layout);
simpleGUI.setWidth(displayWidth/4.8);
simpleGUI.setHeight(displayWidth/96);
simpleGUI.setBackgroundDrawable(null)
simpleGUI.setTouchable(false)
simpleGUI2.setContentView(layout2);
simpleGUI2.setWidth(displayWidth/4.8);
simpleGUI2.setHeight(displayWidth/96);
simpleGUI2.setBackgroundDrawable(null)
simpleGUI2.setTouchable(false)
simpleGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, -(displayWidth/20.86956), displayWidth/6);

simpleGUI2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, displayWidth/8.72727, displayWidth/6);

healthBarAttacker.setMax(maxhealthAttacker);
healthBarAttacker.setProgress(healthAttacker);


healthBarAttacked.setMax(maxhealthAttacked);
healthBarAttacked.setProgress(healthAttacked);


} catch (err) {
clientMessage(err);
}

}
})
}

function attackOne() {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {

var metrics = new android.util.DisplayMetrics();
ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
var displayHeight = metrics.heightPixels;
var displayWidth = metrics.widthPixels;

GUIAttack = new android.widget.PopupWindow();
var layoutAttack = new android.widget.LinearLayout(ctx);
layoutAttack.setOrientation(android.widget.LinearLayout.VERTICAL);
GUIAttack.setContentView(layoutAttack);
GUIAttack.setWidth(displayWidth/6.4);
GUIAttack.setHeight(displayWidth/16);
var btnAttack = new android.widget.Button(ctx);
layoutAttack.addView(btnAttack);
btnAttack.setBackgroundDrawable(attackimg);
btnAttack.setText("\n\n\n\n\n\n\n\n\n");
btnAttack.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {

if (Entity.getHealth(Attacker) > 0 && Entity.getHealth(Attacked) > 0) {
Entity.setHealth(Attacked, Entity.getHealth(Attacked) - damageAttacker);
Entity.setHealth(Attacker, Entity.getHealth(Attacker) - damageAttacked);
clientMessage("Your Health: " + Entity.getHealth(Attacker));
clientMessage("Enemys Health: " + Entity.getHealth(Attacked));
healthBarAttacker.setProgress(Entity.getHealth(Attacker));
healthBarAttacked.setProgress(Entity.getHealth(Attacked));

if (Entity.getHealth(Attacker) < maxhealthAttacker / 2) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacker) < maxhealthAttacker / 8) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacked) < maxhealthAttacked / 2) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacked) < maxhealthAttacked / 8) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacker) <= 0 || Entity.getHealth(Attacked) <= 0) {
GUIRun.dismiss();
if (potionshow == true) {
GUIPotion.dismiss();
potionshow = false;
}
if (superpotionshow == true) {
GUISuperPotion.dismiss();
superpotionshow = false;
}
if (hyperpotionshow == true) {
GUIHyperPotion.dismiss();
hyperpotionshow = false;
}
if (maxpotionshow == true) {
GUIMaxPotion.dismiss();
maxpotionshow = false;
}
GUIAttack.dismiss();
GUIItems.dismiss();
simpleGUI.dismiss();
simpleGUI2.dismiss();
}
}
}
}));
GUIAttack.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, -(displayWidth/12), displayWidth/10.66666);

GUIRun = new android.widget.PopupWindow();
var layoutRun = new android.widget.LinearLayout(ctx);
layoutRun.setOrientation(android.widget.LinearLayout.VERTICAL);
GUIRun.setContentView(layoutRun);
GUIRun.setWidth(displayWidth/6.4);
GUIRun.setHeight(displayWidth/16);
var btnRun = new android.widget.Button(ctx);
layoutRun.addView(btnRun);
btnRun.setBackgroundDrawable(runimg);
btnRun.setText("\n\n\n\n\n\n\n\n\n");
btnRun.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
GUIRun.dismiss();
if (potionshow == true) {
GUIPotion.dismiss();
potionshow = false;
}

if (superpotionshow == true) {
GUISuperPotion.dismiss();
superpotionshow = false;
}
if (hyperpotionshow == true) {
GUIHyperPotion.dismiss();
hyperpotionshow = false;
}
if (maxpotionshow == true) {
GUIMaxPotion.dismiss();
maxpotionshow = false;
}
GUIAttack.dismiss();
GUIItems.dismiss();
simpleGUI.dismiss();
simpleGUI2.dismiss();
}
}));
GUIRun.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, displayWidth/12, displayWidth/48);

GUIItems = new android.widget.PopupWindow();
var layoutItems = new android.widget.LinearLayout(ctx);
layoutItems.setOrientation(android.widget.LinearLayout.VERTICAL);
GUIItems.setContentView(layoutItems);
GUIItems.setWidth(displayWidth/6.4);
GUIItems.setHeight(displayWidth/16);
var btnItems = new android.widget.Button(ctx);
layoutItems.addView(btnItems);
btnItems.setBackgroundDrawable(itemsimg);
btnItems.setText("\n\n\n\n\n\n\n\n\n");
btnItems.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
if (potionshow == false) {
GUIPotion = new android.widget.PopupWindow();
var layoutPotion = new android.widget.LinearLayout(ctx);
layoutPotion.setOrientation(android.widget.LinearLayout.VERTICAL);
GUIPotion.setContentView(layoutPotion);
GUIPotion.setWidth(displayWidth/16);
GUIPotion.setHeight(displayWidth/16);
var btnPotion = new android.widget.Button(ctx);
layoutPotion.addView(btnPotion);
btnPotion.setBackgroundDrawable(potionimg);
btnPotion.setText("\n\n\n\n\n\n\n\n\n");
potionshow = true;
btnPotion.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
if (Player.getInventorySlot(0) == 467 || Player.getInventorySlot(1) == 467 || Player.getInventorySlot(2) == 467 || Player.getInventorySlot(3) == 467 || Player.getInventorySlot(4) == 467 || Player.getInventorySlot(5) == 467 || Player.getInventorySlot(6) == 467 || Player.getInventorySlot(7) == 467 || Player.getInventorySlot(8) == 467 || Player.getInventorySlot(9) == 467 || Player.getInventorySlot(10) == 467 || Player.getInventorySlot(11) == 467 || Player.getInventorySlot(12) == 467 || Player.getInventorySlot(13) == 467 || Player.getInventorySlot(14) == 467 || Player.getInventorySlot(15) == 467 || Player.getInventorySlot(16) == 467 || Player.getInventorySlot(17) == 467 || Player.getInventorySlot(18) == 467 || Player.getInventorySlot(19) == 467 || Player.getInventorySlot(20) == 467 || Player.getInventorySlot(21) == 467 || Player.getInventorySlot(22) == 467 || Player.getInventorySlot(23) == 467 || Player.getInventorySlot(24) == 467 || Player.getInventorySlot(25) == 467 || Player.getInventorySlot(26) == 467 || Player.getInventorySlot(27) == 467 || Player.getInventorySlot(28) == 467 || Player.getInventorySlot(29) == 467 || Player.getInventorySlot(30) == 467 || Player.getInventorySlot(31) == 467 || Player.getInventorySlot(32) == 467 || Player.getInventorySlot(33) == 467 || Player.getInventorySlot(34) == 467 || Player.getInventorySlot(35) == 467 || Player.getInventorySlot(36) == 467 || Player.getInventorySlot(37) == 467 || Player.getInventorySlot(38) == 467 || Player.getInventorySlot(39) == 467 || Player.getInventorySlot(40) == 467 || Player.getInventorySlot(41) == 467 || Player.getInventorySlot(42) == 467 || Player.getInventorySlot(43) == 467 || Player.getInventorySlot(44) == 467 || Player.getInventorySlot(45) == 467) {
Entity.setHealth(Attacker, Entity.getHealth(Attacker) + 20);
Entity.setHealth(Attacker, Entity.getHealth(Attacker) - damageAttacked);
clientMessage("Your Health: " + Entity.getHealth(Attacker));
clientMessage("Enemys Health: " + Entity.getHealth(Attacked));
GUISuperPotion.dismiss();
GUIPotion.dismiss();
GUIHyperPotion.dismiss();
GUIMaxPotion.dismiss();
superpotionshow = false;
hyperpotionshow = false;
maxpotionshow = false;
potionshow = false;
healthBarAttacker.setProgress(Entity.getHealth(Attacker));
healthBarAttacked.setProgress(Entity.getHealth(Attacked));

if (Entity.getHealth(Attacker) < maxhealthAttacker / 2) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacker) < maxhealthAttacker / 8) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacked) < maxhealthAttacked / 2) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacked) < maxhealthAttacked / 8) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacker) <= 0 || Entity.getHealth(Attacked) <= 0) {
GUIRun.dismiss();
GUIAttack.dismiss();
GUIItems.dismiss();
if (potionshow == true) {
GUIPotion.dismiss();
potionshow = false;
}

if (superpotionshow == true) {
GUISuperPotion.dismiss();
superpotionshow = false;
}
if (hyperpotionshow == true) {
GUIHyperPotion.dismiss();
hyperpotionshow = false;
}
if (maxpotionshow == true) {
GUIMaxPotion.dismiss();
maxpotionshow = false;
}
simpleGUI.dismiss();
simpleGUI2.dismiss();
}

} else {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
android.widget.Toast.makeText(ctx, "You don't have this", 0).show();
}
})
}
}
}));
GUIPotion.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, -(displayWidth/8), displayWidth/5.33333);
}

if (superpotionshow == false) {
GUISuperPotion = new android.widget.PopupWindow();
var layoutSuperPotion = new android.widget.LinearLayout(ctx);
layoutSuperPotion.setOrientation(android.widget.LinearLayout.VERTICAL);
GUISuperPotion.setContentView(layoutSuperPotion);
GUISuperPotion.setWidth(displayWidth/16);
GUISuperPotion.setHeight(displayWidth/16);
var btnSuperPotion = new android.widget.Button(ctx);
layoutSuperPotion.addView(btnSuperPotion);
btnSuperPotion.setBackgroundDrawable(superpotionimg);
btnSuperPotion.setText("\n\n\n\n\n\n\n\n\n");
superpotionshow = true;
btnSuperPotion.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
if (Player.getInventorySlot(0) == 468 || Player.getInventorySlot(1) == 468 || Player.getInventorySlot(2) == 468 || Player.getInventorySlot(3) == 468 || Player.getInventorySlot(4) == 468 || Player.getInventorySlot(5) == 468 || Player.getInventorySlot(6) == 468 || Player.getInventorySlot(7) == 468 || Player.getInventorySlot(8) == 468 || Player.getInventorySlot(9) == 468 || Player.getInventorySlot(10) == 468 || Player.getInventorySlot(11) == 468 || Player.getInventorySlot(12) == 468 || Player.getInventorySlot(13) == 468 || Player.getInventorySlot(14) == 468 || Player.getInventorySlot(15) == 468 || Player.getInventorySlot(16) == 468 || Player.getInventorySlot(17) == 468 || Player.getInventorySlot(18) == 468 || Player.getInventorySlot(19) == 468 || Player.getInventorySlot(20) == 468 || Player.getInventorySlot(21) == 468 || Player.getInventorySlot(22) == 468 || Player.getInventorySlot(23) == 468 || Player.getInventorySlot(24) == 468 || Player.getInventorySlot(25) == 468 || Player.getInventorySlot(26) == 468 || Player.getInventorySlot(27) == 468 || Player.getInventorySlot(28) == 468 || Player.getInventorySlot(29) == 468 || Player.getInventorySlot(30) == 468 || Player.getInventorySlot(31) == 468 || Player.getInventorySlot(32) == 468 || Player.getInventorySlot(33) == 468 || Player.getInventorySlot(34) == 468 || Player.getInventorySlot(35) == 468 || Player.getInventorySlot(36) == 468 || Player.getInventorySlot(37) == 468 || Player.getInventorySlot(38) == 468 || Player.getInventorySlot(39) == 468 || Player.getInventorySlot(40) == 468 || Player.getInventorySlot(41) == 468 || Player.getInventorySlot(42) == 468 || Player.getInventorySlot(43) == 468 || Player.getInventorySlot(44) == 468 || Player.getInventorySlot(45) == 468) {
Entity.setHealth(Attacker, Entity.getHealth(Attacker) + 50);
Entity.setHealth(Attacker, Entity.getHealth(Attacker) - damageAttacked);
clientMessage("Your Health: " + Entity.getHealth(Attacker));
clientMessage("Enemys Health: " + Entity.getHealth(Attacked));
GUISuperPotion.dismiss();
GUIPotion.dismiss();
GUIHyperPotion.dismiss();
GUIMaxPotion.dismiss();
superpotionshow = false;
hyperpotionshow = false;
maxpotionshow = false;
potionshow = false;
healthBarAttacker.setProgress(Entity.getHealth(Attacker));
healthBarAttacked.setProgress(Entity.getHealth(Attacked));

if (Entity.getHealth(Attacker) < maxhealthAttacker / 2) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacker) < maxhealthAttacker / 8) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacked) < maxhealthAttacked / 2) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacked) < maxhealthAttacked / 8) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacker) <= 0 || Entity.getHealth(Attacked) <= 0) {
GUIRun.dismiss();
GUIAttack.dismiss();
GUIItems.dismiss();
if (superpotionshow == true) {
GUISuperPotion.dismiss();
superpotionshow = false;
}

if (potionshow == true) {
GUIPotion.dismiss();
potionshow = false;
}
if (hyperpotionshow == true) {
GUIHyperPotion.dismiss();
hyperpotionshow = false;
}
if (maxpotionshow == true) {
GUIMaxPotion.dismiss();
maxpotionshow = false;
}
simpleGUI.dismiss();
simpleGUI2.dismiss();
}

} else {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
android.widget.Toast.makeText(ctx, "You don't have this", 0).show();
}
})
}
}
}));
GUISuperPotion.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, -(displayWidth/16), displayWidth/5.33333);
}

if (hyperpotionshow == false) {
GUIHyperPotion = new android.widget.PopupWindow();
var layoutHyperPotion = new android.widget.LinearLayout(ctx);
layoutHyperPotion.setOrientation(android.widget.LinearLayout.VERTICAL);
GUIHyperPotion.setContentView(layoutHyperPotion);
GUIHyperPotion.setWidth(displayWidth/16);
GUIHyperPotion.setHeight(displayWidth/16);
var btnHyperPotion = new android.widget.Button(ctx);
layoutHyperPotion.addView(btnHyperPotion);
btnHyperPotion.setBackgroundDrawable(hyperpotionimg);
btnHyperPotion.setText("\n\n\n\n\n\n\n\n\n");
hyperpotionshow = true;
btnHyperPotion.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
if (Player.getInventorySlot(0) == 469 || Player.getInventorySlot(1) == 469 || Player.getInventorySlot(2) == 469 || Player.getInventorySlot(3) == 469 || Player.getInventorySlot(4) == 469 || Player.getInventorySlot(5) == 469 || Player.getInventorySlot(6) == 469 || Player.getInventorySlot(7) == 469 || Player.getInventorySlot(8) == 469 || Player.getInventorySlot(9) == 469 || Player.getInventorySlot(10) == 469 || Player.getInventorySlot(11) == 469 || Player.getInventorySlot(12) == 469 || Player.getInventorySlot(13) == 469 || Player.getInventorySlot(14) == 469 || Player.getInventorySlot(15) == 469 || Player.getInventorySlot(16) == 469 || Player.getInventorySlot(17) == 469 || Player.getInventorySlot(18) == 469 || Player.getInventorySlot(19) == 469 || Player.getInventorySlot(20) == 469 || Player.getInventorySlot(21) == 469 || Player.getInventorySlot(22) == 469 || Player.getInventorySlot(23) == 469 || Player.getInventorySlot(24) == 469 || Player.getInventorySlot(25) == 469 || Player.getInventorySlot(26) == 469 || Player.getInventorySlot(27) == 469 || Player.getInventorySlot(28) == 469 || Player.getInventorySlot(29) == 469 || Player.getInventorySlot(30) == 469 || Player.getInventorySlot(31) == 469 || Player.getInventorySlot(32) == 469 || Player.getInventorySlot(33) == 469 || Player.getInventorySlot(34) == 469 || Player.getInventorySlot(35) == 469 || Player.getInventorySlot(36) == 469 || Player.getInventorySlot(37) == 469 || Player.getInventorySlot(38) == 469 || Player.getInventorySlot(39) == 469 || Player.getInventorySlot(40) == 469 || Player.getInventorySlot(41) == 469 || Player.getInventorySlot(42) == 469 || Player.getInventorySlot(43) == 469 || Player.getInventorySlot(44) == 469 || Player.getInventorySlot(45) == 469) {
Entity.setHealth(Attacker, Entity.getHealth(Attacker) + 200);
Entity.setHealth(Attacker, Entity.getHealth(Attacker) - damageAttacked);
clientMessage("Your Health: " + Entity.getHealth(Attacker));
clientMessage("Enemys Health: " + Entity.getHealth(Attacked));
GUISuperPotion.dismiss();
GUIPotion.dismiss();
GUIHyperPotion.dismiss();
GUIMaxPotion.dismiss();
superpotionshow = false;
hyperpotionshow = false;
maxpotionshow = false;
potionshow = false;
healthBarAttacker.setProgress(Entity.getHealth(Attacker));
healthBarAttacked.setProgress(Entity.getHealth(Attacked));

if (Entity.getHealth(Attacker) < maxhealthAttacker / 2) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacker) < maxhealthAttacker / 8) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacked) < maxhealthAttacked / 2) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacked) < maxhealthAttacked / 8) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacker) <= 0 || Entity.getHealth(Attacked) <= 0) {
GUIRun.dismiss();
GUIAttack.dismiss();
GUIItems.dismiss();
if (superpotionshow == true) {
GUISuperPotion.dismiss();
superpotionshow = false;
}

if (potionshow == true) {
GUIPotion.dismiss();
potionshow = false;
}
if (hyperpotionshow == true) {
GUIHyperPotion.dismiss();
hyperpotionshow = false;
}
if (maxpotionshow == true) {
GUIMaxPotion.dismiss();
maxpotionshow = false;
}
simpleGUI.dismiss();
simpleGUI2.dismiss();
}

} else {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
android.widget.Toast.makeText(ctx, "You don't have this", 0).show();
}
})
}
}
}));
GUIHyperPotion.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, displayWidth/16, displayWidth/5.33333);
}

if (maxpotionshow == false) {
GUIMaxPotion = new android.widget.PopupWindow();
var layoutMaxPotion = new android.widget.LinearLayout(ctx);
layoutMaxPotion.setOrientation(android.widget.LinearLayout.VERTICAL);
GUIMaxPotion.setContentView(layoutMaxPotion);
GUIMaxPotion.setWidth(displayWidth/16);
GUIMaxPotion.setHeight(displayWidth/16);
var btnMaxPotion = new android.widget.Button(ctx);
layoutMaxPotion.addView(btnMaxPotion);
btnMaxPotion.setBackgroundDrawable(maxpotionimg);
btnMaxPotion.setText("\n\n\n\n\n\n\n\n\n");
maxpotionshow = true;
btnMaxPotion.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
if (Player.getInventorySlot(0) == 470 || Player.getInventorySlot(1) == 470 || Player.getInventorySlot(2) == 470 || Player.getInventorySlot(3) == 470 || Player.getInventorySlot(4) == 470 || Player.getInventorySlot(5) == 470 || Player.getInventorySlot(6) == 470 || Player.getInventorySlot(7) == 470 || Player.getInventorySlot(8) == 470 || Player.getInventorySlot(9) == 470 || Player.getInventorySlot(10) == 470 || Player.getInventorySlot(11) == 470 || Player.getInventorySlot(12) == 470 || Player.getInventorySlot(13) == 470 || Player.getInventorySlot(14) == 470 || Player.getInventorySlot(15) == 470 || Player.getInventorySlot(16) == 470 || Player.getInventorySlot(17) == 470 || Player.getInventorySlot(18) == 470 || Player.getInventorySlot(19) == 470 || Player.getInventorySlot(20) == 470 || Player.getInventorySlot(21) == 470 || Player.getInventorySlot(22) == 470 || Player.getInventorySlot(23) == 470 || Player.getInventorySlot(24) == 470 || Player.getInventorySlot(25) == 470 || Player.getInventorySlot(26) == 470 || Player.getInventorySlot(27) == 470 || Player.getInventorySlot(28) == 470 || Player.getInventorySlot(29) == 470 || Player.getInventorySlot(30) == 470 || Player.getInventorySlot(31) == 470 || Player.getInventorySlot(32) == 470 || Player.getInventorySlot(33) == 470 || Player.getInventorySlot(34) == 470 || Player.getInventorySlot(35) == 470 || Player.getInventorySlot(36) == 470 || Player.getInventorySlot(37) == 470 || Player.getInventorySlot(38) == 470 || Player.getInventorySlot(39) == 470 || Player.getInventorySlot(40) == 470 || Player.getInventorySlot(41) == 470 || Player.getInventorySlot(42) == 470 || Player.getInventorySlot(43) == 470 || Player.getInventorySlot(44) == 470 || Player.getInventorySlot(45) == 470) {
Entity.setHealth(Attacker, Entity.getHealth(Attacker) + 999);
Entity.setHealth(Attacker, Entity.getHealth(Attacker) - damageAttacked);
clientMessage("Your Health: " + Entity.getHealth(Attacker));
clientMessage("Enemys Health: " + Entity.getHealth(Attacked));
GUISuperPotion.dismiss();
GUIPotion.dismiss();
GUIMaxPotion.dismiss();
GUIMaxPotion.dismiss();
superpotionshow = false;
hyperpotionshow = false;
maxpotionshow = false;
potionshow = false;
healthBarAttacker.setProgress(Entity.getHealth(Attacker));
healthBarAttacked.setProgress(Entity.getHealth(Attacked));

if (Entity.getHealth(Attacker) < maxhealthAttacker / 2) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacker) < maxhealthAttacker / 8) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacked) < maxhealthAttacked / 2) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacked) < maxhealthAttacked / 8) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacker) <= 0 || Entity.getHealth(Attacked) <= 0) {
GUIRun.dismiss();
GUIAttack.dismiss();
GUIItems.dismiss();
if (superpotionshow == true) {
GUISuperPotion.dismiss();
superpotionshow = false;
}

if (potionshow == true) {
GUIPotion.dismiss();
potionshow = false;
}
if (hyperpotionshow == true) {
GUIHyperPotion.dismiss();
hyperpotionshow = false;
}
if (maxpotionshow == true) {
GUIMaxPotion.dismiss();
maxpotionshow = false;
}
simpleGUI.dismiss();
simpleGUI2.dismiss();
}

} else {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
android.widget.Toast.makeText(ctx, "You don't have this", 0).show();
}
})
}
}
}));
GUIMaxPotion.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, displayWidth/8, displayWidth/5.33333);
}
}
}));
GUIItems.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, displayWidth/12, displayWidth/10.66666);
}
})
}

function attackHook(attacker, victim) {

if (Player.getCarriedItem() == 460 && summon == true) {
preventDefault();
Attacker = Level.spawnMob(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 15, Mobskin);
Attacked = victim;
Entity.setRenderType(Attacker, Rendertype);
Entity.setNameTag(Attacker, Nametag);
summon = false;

if (Entity.getMobSkin(victim) != "mob/teenager.png" && Entity.getMobSkin(victim) != "mob/bugcatcher.png" && Entity.getMobSkin(victim) != "mob/fisherman.png" && Entity.getMobSkin(victim) != "mob/birdkeeper.png") {
dataAttacker = Entity.getNameTag(Attacker);
levelAttacker = parseInt(/Lvl (\d+)/.exec(dataAttacker)[1]);
healthAttacker = 15 + (levelAttacker * 3)
maxhealthAttacker = 15 + (levelAttacker * 3);
damageAttacker = (levelAttacker / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacker, healthAttacker);

dataAttacked = Entity.getNameTag(Attacked);
levelAttacked = parseInt(/Lvl (\d+)/.exec(dataAttacked)[1]);
healthAttacked = 15 + (levelAttacked * 3)
maxhealthAttacked = 15 + (levelAttacked * 3);
damageAttacked = (levelAttacked / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacked, healthAttacked);

attackOne()
checkHealth()
} else {
Entity.setRenderType(Attacker, Rendertype);
Entity.setNameTag(Attacker, Nametag);

dataAttacker = Entity.getNameTag(Attacker);
levelAttacker = parseInt(/Lvl (\d+)/.exec(dataAttacker)[1]);
healthAttacker = 15 + (levelAttacker * 3)
maxhealthAttacker = 15 + (levelAttacker * 3);
damageAttacker = (levelAttacker / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacker, healthAttacker);

if (Entity.getMobSkin(victim) == "mob/teenager.png") {
TrainerType = "Teenager";
} else if (Entity.getMobSkin(victim) == "mob/bugcatcher.png") {
TrainerType = "Bug Catcher";
} else if (Entity.getMobSkin(victim) == "mob/fisherman.png") {
TrainerType = "Fisherman";
} else if (Entity.getMobSkin(victim) == "mob/birdkeeper.png") {
TrainerType = "Bird Keeper";
}
tt = Math.floor(Math.random() * 20);
clientMessage(TrainerText[tt]);
TrainerMobs = Math.floor(Math.random() * 6) + 1;
TrainerX = Entity.getX(victim);
TrainerY = Entity.getY(victim);
TrainerZ = Entity.getZ(victim);
spawnRandomTrainerPokemon()
attackTwo()
checkHealth()
}


} else if (Player.getCarriedItem() == 461 && summon2 == true) {
preventDefault();
summon2 = false;
Attacker = Level.spawnMob(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 15, Mobskin2);
Attacked = victim;
Entity.setRenderType(Attacker, Rendertype2);
Entity.setNameTag(Attacker, Nametag2);

if (Entity.getMobSkin(victim) != "mob/teenager.png" && Entity.getMobSkin(victim) != "mob/bugcatcher.png" && Entity.getMobSkin(victim) != "mob/fisherman.png" && Entity.getMobSkin(victim) != "mob/birdkeeper.png") {
dataAttacker = Entity.getNameTag(Attacker);
levelAttacker = parseInt(/Lvl (\d+)/.exec(dataAttacker)[1]);
healthAttacker = 15 + (levelAttacker * 3)
maxhealthAttacker = 15 + (levelAttacker * 3);
damageAttacker = (levelAttacker / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacker, healthAttacker);

dataAttacked = Entity.getNameTag(Attacked);
levelAttacked = parseInt(/Lvl (\d+)/.exec(dataAttacked)[1]);
healthAttacked = 15 + (levelAttacked * 3)
maxhealthAttacked = 15 + (levelAttacked * 3);
damageAttacked = (levelAttacked / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacked, healthAttacked);

attackOne()
checkHealth()
} else {
Entity.setRenderType(Attacker, Rendertype);
Entity.setNameTag(Attacker, Nametag);

dataAttacker = Entity.getNameTag(Attacker);
levelAttacker = parseInt(/Lvl (\d+)/.exec(dataAttacker)[1]);
healthAttacker = 15 + (levelAttacker * 3)
maxhealthAttacker = 15 + (levelAttacker * 3);
damageAttacker = (levelAttacker / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacker, healthAttacker);

if (Entity.getMobSkin(victim) == "mob/teenager.png") {
TrainerType = "Teenager";
} else if (Entity.getMobSkin(victim) == "mob/bugcatcher.png") {
TrainerType = "Bug Catcher";
} else if (Entity.getMobSkin(victim) == "mob/fisherman.png") {
TrainerType = "Fisherman";
} else if (Entity.getMobSkin(victim) == "mob/birdkeeper.png") {
TrainerType = "Bird Keeper";
}
tt = Math.floor(Math.random() * 20);
clientMessage(TrainerText[tt]);
TrainerMobs = Math.floor(Math.random() * 6) + 1;
TrainerX = Entity.getX(victim);
TrainerY = Entity.getY(victim);
TrainerZ = Entity.getZ(victim);
spawnRandomTrainerPokemon()
attackTwo()
checkHealth()
}
} else if (Player.getCarriedItem() == 462 && summon3 == true) {
preventDefault();
summon3 = false;
Attacker = Level.spawnMob(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 15, Mobskin3);
Attacked = victim;
Entity.setRenderType(Attacker, Rendertype3);
Entity.setNameTag(Attacker, Nametag3);

if (Entity.getMobSkin(victim) != "mob/teenager.png" && Entity.getMobSkin(victim) != "mob/bugcatcher.png" && Entity.getMobSkin(victim) != "mob/fisherman.png"&& Entity.getMobSkin(victim) != "mob/birdkeeper.png") {
dataAttacker = Entity.getNameTag(Attacker);
levelAttacker = parseInt(/Lvl (\d+)/.exec(dataAttacker)[1]);
healthAttacker = 15 + (levelAttacker * 3)
maxhealthAttacker = 15 + (levelAttacker * 3);
damageAttacker = (levelAttacker / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacker, healthAttacker);

dataAttacked = Entity.getNameTag(Attacked);
levelAttacked = parseInt(/Lvl (\d+)/.exec(dataAttacked)[1]);
healthAttacked = 15 + (levelAttacked * 3)
maxhealthAttacked = 15 + (levelAttacked * 3);
damageAttacked = (levelAttacked / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacked, healthAttacked);

attackOne()
checkHealth()
} else {
Entity.setRenderType(Attacker, Rendertype);
Entity.setNameTag(Attacker, Nametag);

dataAttacker = Entity.getNameTag(Attacker);
levelAttacker = parseInt(/Lvl (\d+)/.exec(dataAttacker)[1]);
healthAttacker = 15 + (levelAttacker * 3)
maxhealthAttacker = 15 + (levelAttacker * 3);
damageAttacker = (levelAttacker / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacker, healthAttacker);

if (Entity.getMobSkin(victim) == "mob/teenager.png") {
TrainerType = "Teenager";
} else if (Entity.getMobSkin(victim) == "mob/bugcatcher.png") {
TrainerType = "Bug Catcher";
} else if (Entity.getMobSkin(victim) == "mob/fisherman.png") {
TrainerType = "Fisherman";
} else if (Entity.getMobSkin(victim) == "mob/birdkeeper.png") {
TrainerType = "Bird Keeper";
}
tt = Math.floor(Math.random() * 20);
clientMessage(TrainerText[tt]);
TrainerMobs = Math.floor(Math.random() * 6) + 1;
TrainerX = Entity.getX(victim);
TrainerY = Entity.getY(victim);
TrainerZ = Entity.getZ(victim);
spawnRandomTrainerPokemon()
attackTwo()
checkHealth()
}
} else if (Player.getCarriedItem() == 463 && summon4 == true) {
preventDefault();
summon4 = false;
Attacker = Level.spawnMob(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 15, Mobskin4);
Attacked = victim;
Entity.setRenderType(Attacker, Rendertype4);
Entity.setNameTag(Attacker, Nametag4);

if (Entity.getMobSkin(victim) != "mob/teenager.png" && Entity.getMobSkin(victim) != "mob/bugcatcher.png" && Entity.getMobSkin(victim) != "mob/fisherman.png"&& Entity.getMobSkin(victim) != "mob/birdkeeper.png") {
dataAttacker = Entity.getNameTag(Attacker);
levelAttacker = parseInt(/Lvl (\d+)/.exec(dataAttacker)[1]);
healthAttacker = 15 + (levelAttacker * 3)
maxhealthAttacker = 15 + (levelAttacker * 3);
damageAttacker = (levelAttacker / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacker, healthAttacker);

dataAttacked = Entity.getNameTag(Attacked);
levelAttacked = parseInt(/Lvl (\d+)/.exec(dataAttacked)[1]);
healthAttacked = 15 + (levelAttacked * 3)
maxhealthAttacked = 15 + (levelAttacked * 3);
damageAttacked = (levelAttacked / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacked, healthAttacked);

attackOne()
checkHealth()
} else {
Entity.setRenderType(Attacker, Rendertype);
Entity.setNameTag(Attacker, Nametag);

dataAttacker = Entity.getNameTag(Attacker);
levelAttacker = parseInt(/Lvl (\d+)/.exec(dataAttacker)[1]);
healthAttacker = 15 + (levelAttacker * 3)
maxhealthAttacker = 15 + (levelAttacker * 3);
damageAttacker = (levelAttacker / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacker, healthAttacker);

if (Entity.getMobSkin(victim) == "mob/teenager.png") {
TrainerType = "Teenager";
} else if (Entity.getMobSkin(victim) == "mob/bugcatcher.png") {
TrainerType = "Bug Catcher";
} else if (Entity.getMobSkin(victim) == "mob/fisherman.png") {
TrainerType = "Fisherman";
} else if (Entity.getMobSkin(victim) == "mob/birdkeeper.png") {
TrainerType = "Bird Keeper";
}
tt = Math.floor(Math.random() * 20);
clientMessage(TrainerText[tt]);
TrainerMobs = Math.floor(Math.random() * 6) + 1;
TrainerX = Entity.getX(victim);
TrainerY = Entity.getY(victim);
TrainerZ = Entity.getZ(victim);
spawnRandomTrainerPokemon()
attackTwo()
checkHealth()
}
} else if (Player.getCarriedItem() == 464 && summon5 == true) {
preventDefault();
summon5 = false;
Attacker = Level.spawnMob(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 15, Mobskin5);
Attacked = victim;
Entity.setRenderType(Attacker, Rendertype5);
Entity.setNameTag(Attacker, Nametag5);

if (Entity.getMobSkin(victim) != "mob/teenager.png" && Entity.getMobSkin(victim) != "mob/bugcatcher.png" && Entity.getMobSkin(victim) != "mob/fisherman.png"&& Entity.getMobSkin(victim) != "mob/birdkeeper.png") {
dataAttacker = Entity.getNameTag(Attacker);
levelAttacker = parseInt(/Lvl (\d+)/.exec(dataAttacker)[1]);
healthAttacker = 15 + (levelAttacker * 3)
maxhealthAttacker = 15 + (levelAttacker * 3);
damageAttacker = (levelAttacker / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacker, healthAttacker);

dataAttacked = Entity.getNameTag(Attacked);
levelAttacked = parseInt(/Lvl (\d+)/.exec(dataAttacked)[1]);
healthAttacked = 15 + (levelAttacked * 3)
maxhealthAttacked = 15 + (levelAttacked * 3);
damageAttacked = (levelAttacked / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacked, healthAttacked);

attackOne()
checkHealth()
} else {
Entity.setRenderType(Attacker, Rendertype);
Entity.setNameTag(Attacker, Nametag);

dataAttacker = Entity.getNameTag(Attacker);
levelAttacker = parseInt(/Lvl (\d+)/.exec(dataAttacker)[1]);
healthAttacker = 15 + (levelAttacker * 3)
maxhealthAttacker = 15 + (levelAttacker * 3);
damageAttacker = (levelAttacker / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacker, healthAttacker);

if (Entity.getMobSkin(victim) == "mob/teenager.png") {
TrainerType = "Teenager";
} else if (Entity.getMobSkin(victim) == "mob/bugcatcher.png") {
TrainerType = "Bug Catcher";
} else if (Entity.getMobSkin(victim) == "mob/fisherman.png") {
TrainerType = "Fisherman";
} else if (Entity.getMobSkin(victim) == "mob/birdkeeper.png") {
TrainerType = "Bird Keeper";
}
tt = Math.floor(Math.random() * 20);
clientMessage(TrainerText[tt]);
TrainerMobs = Math.floor(Math.random() * 6) + 1;
TrainerX = Entity.getX(victim);
TrainerY = Entity.getY(victim);
TrainerZ = Entity.getZ(victim);
spawnRandomTrainerPokemon()
attackTwo()
checkHealth()
}
} else if (Player.getCarriedItem() == 465 && summon6 == true) {
preventDefault();
summon6 = false;
Attacker = Level.spawnMob(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 15, Mobskin6);
Attacked = victim;
Entity.setRenderType(Attacker, Rendertype6);
Entity.setNameTag(Attacker, Nametag6);

if (Entity.getMobSkin(victim) != "mob/teenager.png" && Entity.getMobSkin(victim) != "mob/bugcatcher.png" && Entity.getMobSkin(victim) != "mob/fisherman.png"&& Entity.getMobSkin(victim) != "mob/birdkeeper.png") {
dataAttacker = Entity.getNameTag(Attacker);
levelAttacker = parseInt(/Lvl (\d+)/.exec(dataAttacker)[1]);
healthAttacker = 15 + (levelAttacker * 3)
maxhealthAttacker = 15 + (levelAttacker * 3);
damageAttacker = (levelAttacker / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacker, healthAttacker);

dataAttacked = Entity.getNameTag(Attacked);
levelAttacked = parseInt(/Lvl (\d+)/.exec(dataAttacked)[1]);
healthAttacked = 15 + (levelAttacked * 3)
maxhealthAttacked = 15 + (levelAttacked * 3);
damageAttacked = (levelAttacked / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacked, healthAttacked);

attackOne()
checkHealth()
} else {
Entity.setRenderType(Attacker, Rendertype);
Entity.setNameTag(Attacker, Nametag);

dataAttacker = Entity.getNameTag(Attacker);
levelAttacker = parseInt(/Lvl (\d+)/.exec(dataAttacker)[1]);
healthAttacker = 15 + (levelAttacker * 3)
maxhealthAttacker = 15 + (levelAttacker * 3);
damageAttacker = (levelAttacker / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacker, healthAttacker);

if (Entity.getMobSkin(victim) == "mob/teenager.png") {
TrainerType = "Teenager";
} else if (Entity.getMobSkin(victim) == "mob/bugcatcher.png") {
TrainerType = "Bug Catcher";
} else if (Entity.getMobSkin(victim) == "mob/fisherman.png") {
TrainerType = "Fisherman";
} else if (Entity.getMobSkin(victim) == "mob/birdkeeper.png") {
TrainerType = "Bird Keeper";
}
tt = Math.floor(Math.random() * 20);
clientMessage(TrainerText[tt]);
TrainerMobs = Math.floor(Math.random() * 6) + 1;
TrainerX = Entity.getX(victim);
TrainerY = Entity.getY(victim);
TrainerZ = Entity.getZ(victim);
spawnRandomTrainerPokemon()
attackTwo()
checkHealth()
}
}

if (Player.getCarriedItem() == 466) {
preventDefault();
var PokemonToLvlUp = Entity.getNameTag(victim);
var PokeName = /([^\s]+)/.exec(PokemonToLvlUp)[1];
var PokeLevel = parseInt(/Lvl (\d+)/.exec(PokemonToLvlUp)[1]);
if (PokeLevel < 100) {
PokeLevel++;
Player.addItemInventory(466, -1, 0);

} else {

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
android.widget.Toast.makeText(ctx, "Your Pokemon has reached Level 100 yet!", 0).show();
}
})


}
Entity.setNameTag(victim, PokeName + " (Lvl " + PokeLevel + ")");

if (victim == Pokemon1) {
Nametag = Entity.getNameTag(victim);
} else if (victim == Pokemon2) {
Nametag2 = Entity.getNameTag(victim);
} else if (victim == Pokemon3) {
Nametag3 = Entity.getNameTag(victim);
} else if (victim == Pokemon4) {
Nametag4 = Entity.getNameTag(victim);
} else if (victim == Pokemon5) {
Nametag5 = Entity.getNameTag(victim);
} else if (victim == Pokemon6) {
Nametag6 = Entity.getNameTag(victim);
}
}

if (captured == false && Player.getCarriedItem() == 460 && Entity.getMobSkin(victim) != "mob/teenager.png" && Entity.getMobSkin(victim) != "mob/bugcatcher.png" && Entity.getMobSkin(victim) != "mob/fisherman.png" && Entity.getMobSkin(victim) != "mob/birdkeeper.png") {
preventDefault();
playingSong("pokecatch.mp3",false);
clientMessage("You caught it!");
Rendertype = Entity.getRenderType(victim);
Mobskin = Entity.getMobSkin(victim);
Nametag = Entity.getNameTag(victim);
PokeballCapture = Level.spawnMob(Player.getX(), Player.getY() + 0.5, Player.getZ(), 15, "mob/pokeball.png");
Entity.setRenderType(PokeballCapture, PokeballRenderType.renderType);
var angle = Math.atan2((Entity.getZ(victim) - Entity.getZ(PokeballCapture)), (Entity.getX(victim) - Entity.getX(PokeballCapture)));
Entity.setVelX(PokeballCapture, (Math.cos(angle) * 0.3));
Entity.setVelZ(PokeballCapture, (Math.sin(angle) * 0.3));
killball = true;
Entity.setVelY(victim, 500);
Entity.setHealth(victim, 0);
summon = true;
captured = true;
cap = "true";
}
if (captured == true && summon == false && Entity.getRenderType(victim) == Rendertype) {
if (Player.getCarriedItem() == 460) {
preventDefault();

PokeballCapture = Level.spawnMob(Player.getX(), Player.getY() + 0.5, Player.getZ(), 15, "mob/pokeball.png");
Entity.setRenderType(PokeballCapture, PokeballRenderType.renderType);
var angle = Math.atan2((Entity.getZ(victim) - Entity.getZ(PokeballCapture)), (Entity.getX(victim) - Entity.getX(PokeballCapture)));
Entity.setVelX(PokeballCapture, (Math.cos(angle) * 0.3));
Entity.setVelZ(PokeballCapture, (Math.sin(angle) * 0.3));
killball = true;
Entity.setVelY(victim, 500);
Entity.setHealth(victim, 0);
summon = true;
}
}
if (captured2 == false && Player.getCarriedItem() == 461 && Entity.getMobSkin(victim) != "mob/teenager.png" && Entity.getMobSkin(victim) != "mob/bugcatcher.png" && Entity.getMobSkin(victim) != "mob/fisherman.png" && Entity.getMobSkin(victim) != "mob/birdkeeper.png") {
preventDefault();
playingSong("pokecatch.mp3",false);
clientMessage("You caught it!");
Rendertype2 = Entity.getRenderType(victim);
Mobskin2 = Entity.getMobSkin(victim);
Nametag2 = Entity.getNameTag(victim);
PokeballCapture = Level.spawnMob(Player.getX(), Player.getY() + 0.5, Player.getZ(), 15, "mob/pokeball.png");
Entity.setRenderType(PokeballCapture, PokeballRenderType.renderType);
var angle = Math.atan2((Entity.getZ(victim) - Entity.getZ(PokeballCapture)), (Entity.getX(victim) - Entity.getX(PokeballCapture)));
Entity.setVelX(PokeballCapture, (Math.cos(angle) * 0.3));
Entity.setVelZ(PokeballCapture, (Math.sin(angle) * 0.3));
killball = true;
Entity.setVelY(victim, 500);
Entity.setHealth(victim, 0);
summon2 = true;
captured2 = true;
cap2 = "true";
}
if (captured2 == true && summon2 == false && Entity.getRenderType(victim) == Rendertype2) {
if (Player.getCarriedItem() == 461) {
preventDefault();
PokeballCapture = Level.spawnMob(Player.getX(), Player.getY() + 0.5, Player.getZ(), 15, "mob/pokeball.png");
Entity.setRenderType(PokeballCapture, PokeballRenderType.renderType);
var angle = Math.atan2((Entity.getZ(victim) - Entity.getZ(PokeballCapture)), (Entity.getX(victim) - Entity.getX(PokeballCapture)));
Entity.setVelX(PokeballCapture, (Math.cos(angle) * 0.3));
Entity.setVelZ(PokeballCapture, (Math.sin(angle) * 0.3));
killball = true;
Entity.setVelY(victim, 500);
Entity.setHealth(victim, 0);
summon2 = true;
}
}
if (captured3 == false && Player.getCarriedItem() == 462 && Entity.getMobSkin(victim) != "mob/teenager.png" && Entity.getMobSkin(victim) != "mob/bugcatcher.png" && Entity.getMobSkin(victim) != "mob/fisherman.png" && Entity.getMobSkin(victim) != "mob/birdkeeper.png") {
preventDefault();
playingSong("pokecatch.mp3",false);
clientMessage("You caught it!");
Rendertype3 = Entity.getRenderType(victim);
Mobskin3 = Entity.getMobSkin(victim);
Nametag3 = Entity.getNameTag(victim);
PokeballCapture = Level.spawnMob(Player.getX(), Player.getY() + 0.5, Player.getZ(), 15, "mob/pokeball.png");
Entity.setRenderType(PokeballCapture, PokeballRenderType.renderType);
var angle = Math.atan2((Entity.getZ(victim) - Entity.getZ(PokeballCapture)), (Entity.getX(victim) - Entity.getX(PokeballCapture)));
Entity.setVelX(PokeballCapture, (Math.cos(angle) * 0.3));
Entity.setVelZ(PokeballCapture, (Math.sin(angle) * 0.3));
killball = true;
Entity.setVelY(victim, 500);
Entity.setHealth(victim, 0);
summon3 = true;
captured3 = true;
cap3 = "true";
}
if (captured3 == true && summon3 == false && Entity.getRenderType(victim) == Rendertype3) {
if (Player.getCarriedItem() == 462) {
preventDefault();

PokeballCapture = Level.spawnMob(Player.getX(), Player.getY() + 0.5, Player.getZ(), 15, "mob/pokeball.png");
Entity.setRenderType(PokeballCapture, PokeballRenderType.renderType);
var angle = Math.atan2((Entity.getZ(victim) - Entity.getZ(PokeballCapture)), (Entity.getX(victim) - Entity.getX(PokeballCapture)));
Entity.setVelX(PokeballCapture, (Math.cos(angle) * 0.3));
Entity.setVelZ(PokeballCapture, (Math.sin(angle) * 0.3));
killball = true;
Entity.setVelY(victim, 500);
Entity.setHealth(victim, 0);
summon3 = true;
}
}
if (captured4 == false && Player.getCarriedItem() == 463 && Entity.getMobSkin(victim) != "mob/teenager.png" && Entity.getMobSkin(victim) != "mob/bugcatcher.png" && Entity.getMobSkin(victim) != "mob/fisherman.png" && Entity.getMobSkin(victim) != "mob/birdkeeper.png") {
preventDefault();
playingSong("pokecatch.mp3",false);
clientMessage("You caught it!");
Rendertype4 = Entity.getRenderType(victim);
Mobskin4 = Entity.getMobSkin(victim);
Nametag4 = Entity.getNameTag(victim);
PokeballCapture = Level.spawnMob(Player.getX(), Player.getY() + 0.5, Player.getZ(), 15, "mob/pokeball.png");
Entity.setRenderType(PokeballCapture, PokeballRenderType.renderType);
var angle = Math.atan2((Entity.getZ(victim) - Entity.getZ(PokeballCapture)), (Entity.getX(victim) - Entity.getX(PokeballCapture)));
Entity.setVelX(PokeballCapture, (Math.cos(angle) * 0.3));
Entity.setVelZ(PokeballCapture, (Math.sin(angle) * 0.3));
killball = true;
Entity.setVelY(victim, 500);
Entity.setHealth(victim, 0);
summon4 = true;
captured4 = true;
cap4 = "true";
}
if (captured4 == true && summon4 == false && Entity.getRenderType(victim) == Rendertype4) {
if (Player.getCarriedItem() == 463) {
preventDefault();

PokeballCapture = Level.spawnMob(Player.getX(), Player.getY() + 0.5, Player.getZ(), 15, "mob/pokeball.png");
Entity.setRenderType(PokeballCapture, PokeballRenderType.renderType);
var angle = Math.atan2((Entity.getZ(victim) - Entity.getZ(PokeballCapture)), (Entity.getX(victim) - Entity.getX(PokeballCapture)));
Entity.setVelX(PokeballCapture, (Math.cos(angle) * 0.3));
Entity.setVelZ(PokeballCapture, (Math.sin(angle) * 0.3));
killball = true;
Entity.setVelY(victim, 500);
Entity.setHealth(victim, 0);
summon4 = true;
}
}
if (captured5 == false && Player.getCarriedItem() == 464 && Entity.getMobSkin(victim) != "mob/teenager.png" && Entity.getMobSkin(victim) != "mob/bugcatcher.png" && Entity.getMobSkin(victim) != "mob/fisherman.png" && Entity.getMobSkin(victim) != "mob/birdkeeper.png") {
preventDefault();
playingSong("pokecatch.mp3",false);
clientMessage("You caught it!");
Rendertype5 = Entity.getRenderType(victim);
Mobskin5 = Entity.getMobSkin(victim);
Nametag5 = Entity.getNameTag(victim);
PokeballCapture = Level.spawnMob(Player.getX(), Player.getY() + 0.5, Player.getZ(), 15, "mob/pokeball.png");
Entity.setRenderType(PokeballCapture, PokeballRenderType.renderType);
var angle = Math.atan2((Entity.getZ(victim) - Entity.getZ(PokeballCapture)), (Entity.getX(victim) - Entity.getX(PokeballCapture)));
Entity.setVelX(PokeballCapture, (Math.cos(angle) * 0.3));
Entity.setVelZ(PokeballCapture, (Math.sin(angle) * 0.3));
killball = true;
Entity.setVelY(victim, 500);
Entity.setHealth(victim, 0);
summon5 = true;
captured5 = true;
cap5 = "true";
}
if (captured5 == true && summon5 == false && Entity.getRenderType(victim) == Rendertype5) {
if (Player.getCarriedItem() == 464) {
preventDefault();

PokeballCapture = Level.spawnMob(Player.getX(), Player.getY() + 0.5, Player.getZ(), 15, "mob/pokeball.png");
Entity.setRenderType(PokeballCapture, PokeballRenderType.renderType);
var angle = Math.atan2((Entity.getZ(victim) - Entity.getZ(PokeballCapture)), (Entity.getX(victim) - Entity.getX(PokeballCapture)));
Entity.setVelX(PokeballCapture, (Math.cos(angle) * 0.3));
Entity.setVelZ(PokeballCapture, (Math.sin(angle) * 0.3));
killball = true;
Entity.setVelY(victim, 500);
Entity.setHealth(victim, 0);
summon5 = true;
}
}
if (captured6 == false && Player.getCarriedItem() == 465 && Entity.getMobSkin(victim) != "mob/teenager.png" && Entity.getMobSkin(victim) != "mob/bugcatcher.png" && Entity.getMobSkin(victim) != "mob/fisherman.png" && Entity.getMobSkin(victim) != "mob/birdkeeper.png") {
preventDefault();
playingSong("pokecatch.mp3",false);
clientMessage("You caught it!");
Rendertype6 = Entity.getRenderType(victim);
Mobskin6 = Entity.getMobSkin(victim);
Nametag6 = Entity.getNameTag(victim);
PokeballCapture = Level.spawnMob(Player.getX(), Player.getY() + 0.5, Player.getZ(), 15, "mob/pokeball.png");
Entity.setRenderType(PokeballCapture, PokeballRenderType.renderType);
var angle = Math.atan2((Entity.getZ(victim) - Entity.getZ(PokeballCapture)), (Entity.getX(victim) - Entity.getX(PokeballCapture)));
Entity.setVelX(PokeballCapture, (Math.cos(angle) * 0.3));
Entity.setVelZ(PokeballCapture, (Math.sin(angle) * 0.3));
killball = true;
Entity.setVelY(victim, 500);
Entity.setHealth(victim, 0);
summon6 = true;
captured6 = true;
cap6 = "true";
}
if (captured6 == true && summon6 == false && Entity.getRenderType(victim) == Rendertype6) {
if (Player.getCarriedItem() == 465) {
preventDefault();

PokeballCapture = Level.spawnMob(Player.getX(), Player.getY() + 0.5, Player.getZ(), 15, "mob/pokeball.png");
Entity.setRenderType(PokeballCapture, PokeballRenderType.renderType);
var angle = Math.atan2((Entity.getZ(victim) - Entity.getZ(PokeballCapture)), (Entity.getX(victim) - Entity.getX(PokeballCapture)));
Entity.setVelX(PokeballCapture, (Math.cos(angle) * 0.3));
Entity.setVelZ(PokeballCapture, (Math.sin(angle) * 0.3));
killball = true;
Entity.setVelY(victim, 500);
Entity.setHealth(victim, 0);
summon6 = true;
}
}
}

function useItem(x, y, z, i, b) {
if (i == 460 && b == 201) {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
try {
var layout1 = new android.widget.LinearLayout(ctx);
layout1.setOrientation(android.widget.LinearLayout.VERTICAL);
var popup1 = new android.app.AlertDialog.Builder(ctx);
popup1.setView(layout1);
popup1.setTitle("PC");
var Text1 = new android.widget.TextView(ctx);
Text1.setText("\nAre you sure that you want to release this Pokemon? You will lose it FOREVER! That's a long time!\n");
Text1.setTextColor(android.graphics.Color.WHITE);
Text1.setTextSize(18);
layout1.addView(Text1);

popup1.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener() {
onClick: function(viewarg) {
Pokemon1 = null;
Rendertype = null;
Nametag = null;
Mobskin = null;
captured = false;
summon = false;
summoned = false;
}
});
popup1.setNegativeButton("No", new android.content.DialogInterface.OnClickListener() {
onClick: function(viewarg) {}
});
popup1.show();
} catch (err) {
print(err);
}

}
})
}

if (i == 461 && b == 201) {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
try {
var layout1 = new android.widget.LinearLayout(ctx);
layout1.setOrientation(android.widget.LinearLayout.VERTICAL);
var popup1 = new android.app.AlertDialog.Builder(ctx);
popup1.setView(layout1);
popup1.setTitle("PC");
var Text1 = new android.widget.TextView(ctx);
Text1.setText("\nAre you sure that you want to release this Pokemon? You will lose it FOREVER! That's a long time!\n");
Text1.setTextColor(android.graphics.Color.WHITE);
Text1.setTextSize(18);
layout1.addView(Text1);

popup1.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener() {
onClick: function(viewarg) {
Pokemon2 = null;
Rendertype2 = null;
Nametag2 = null;
Mobskin2 = null;
captured2 = false;
summon2 = false;
summoned2 = false;
}
});
popup1.setNegativeButton("No", new android.content.DialogInterface.OnClickListener() {
onClick: function(viewarg) {}
});
popup1.show();
} catch (err) {
print(err);
}

}
})
}

if (i == 462 && b == 201) {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
try {
var layout1 = new android.widget.LinearLayout(ctx);
layout1.setOrientation(android.widget.LinearLayout.VERTICAL);
var popup1 = new android.app.AlertDialog.Builder(ctx);
popup1.setView(layout1);
popup1.setTitle("PC");
var Text1 = new android.widget.TextView(ctx);
Text1.setText("\nAre you sure that you want to release this Pokemon? You will lose it FOREVER! That's a long time!\n");
Text1.setTextColor(android.graphics.Color.WHITE);
Text1.setTextSize(18);
layout1.addView(Text1);

popup1.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener() {
onClick: function(viewarg) {
Pokemon3 = null;
Rendertype3 = null;
Nametag3 = null;
Mobskin3 = null;
captured3 = false;
summon3 = false;
summoned3 = false;
}
});
popup1.setNegativeButton("No", new android.content.DialogInterface.OnClickListener() {
onClick: function(viewarg) {}
});
popup1.show();
} catch (err) {
print(err);
}

}
})
}

if (i == 463 && b == 201) {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
try {
var layout1 = new android.widget.LinearLayout(ctx);
layout1.setOrientation(android.widget.LinearLayout.VERTICAL);
var popup1 = new android.app.AlertDialog.Builder(ctx);
popup1.setView(layout1);
popup1.setTitle("PC");
var Text1 = new android.widget.TextView(ctx);
Text1.setText("\nAre you sure that you want to release this Pokemon? You will lose it FOREVER! That's a long time!\n");
Text1.setTextColor(android.graphics.Color.WHITE);
Text1.setTextSize(18);
layout1.addView(Text1);

popup1.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener() {
onClick: function(viewarg) {
Pokemon4 = null;
Rendertype4 = null;
Nametag4 = null;
Mobskin4 = null;
captured4 = false;
summon4 = false;
summoned4 = false;
}
});
popup1.setNegativeButton("No", new android.content.DialogInterface.OnClickListener() {
onClick: function(viewarg) {}
});
popup1.show();
} catch (err) {
print(err);
}

}
})
}

if (i == 464 && b == 201) {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
try {
var layout1 = new android.widget.LinearLayout(ctx);
layout1.setOrientation(android.widget.LinearLayout.VERTICAL);
var popup1 = new android.app.AlertDialog.Builder(ctx);
popup1.setView(layout1);
popup1.setTitle("PC");
var Text1 = new android.widget.TextView(ctx);
Text1.setText("\nAre you sure that you want to release this Pokemon? You will lose it FOREVER! That's a long time!\n");
Text1.setTextColor(android.graphics.Color.WHITE);
Text1.setTextSize(18);
layout1.addView(Text1);

popup1.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener() {
onClick: function(viewarg) {
Pokemon5 = null;
Rendertype5 = null;
Nametag5 = null;
Mobskin5 = null;
captured5 = false;
summon5 = false;
summoned5 = false;
}
});
popup1.setNegativeButton("No", new android.content.DialogInterface.OnClickListener() {
onClick: function(viewarg) {}
});
popup1.show();
} catch (err) {
print(err);
}

}
})
}

if (i == 465 && b == 201) {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
try {
var layout1 = new android.widget.LinearLayout(ctx);
layout1.setOrientation(android.widget.LinearLayout.VERTICAL);
var popup1 = new android.app.AlertDialog.Builder(ctx);
popup1.setView(layout1);
popup1.setTitle("PC");
var Text1 = new android.widget.TextView(ctx);
Text1.setText("\nAre you sure that you want to release this Pokemon? You will lose it FOREVER! That's a long time!\n");
Text1.setTextColor(android.graphics.Color.WHITE);
Text1.setTextSize(18);
layout1.addView(Text1);

popup1.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener() {
onClick: function(viewarg) {
Pokemon6 = null;
Rendertype6 = null;
Nametag6 = null;
Mobskin6 = null;
captured6 = false;
summon6 = false;
summoned6 = false;
}
});
popup1.setNegativeButton("No", new android.content.DialogInterface.OnClickListener() {
onClick: function(viewarg) {}
});
popup1.show();
} catch (err) {
print(err);
}

}
})
}

if (i == 460 && b == 200 && summon == false) {

summon = true;
playingSong("pokecenter.mp3", false);
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
android.widget.Toast.makeText(ctx, "Healed!", 0).show();
}
})

}
if (i == 461 && b == 200 && summon2 == false) {
summon2 = true;
playingSong("pokecenter.mp3", false);
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
android.widget.Toast.makeText(ctx, "Healed!", 0).show();
}
})
}
if (i == 462 && b == 200 && summon3 == false) {
summon3 = true;
playingSong("pokecenter.mp3", false);
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
android.widget.Toast.makeText(ctx, "Healed!", 0).show();
}
})
}
if (i == 463 && b == 200 && summon4 == false) {
summon4 = true;
playingSong("pokecenter.mp3", false);
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
android.widget.Toast.makeText(ctx, "Healed!", 0).show();
}
})
}
if (i == 464 && b == 200 && summon5 == false) {
summon5 = true;
playingSong("pokecenter.mp3", false);
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
android.widget.Toast.makeText(ctx, "Healed!", 0).show();
}
})
}
if (i == 465 && b == 200 && summon6 == false) {
summon6 = true;
playingSong("pokecenter.mp3", false);
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
android.widget.Toast.makeText(ctx, "Healed!", 0).show();
}
})
}

if (i == 460 && summon == true || i == 461 && summon2 == true || i == 462 && summon3 == true || i == 463 && summon4 == true || i == 464 && summon5 == true || i == 465 && summon6 == true) {
if (b != 200) {
PokeballSummon = Level.spawnMob(Player.getX(), Player.getY() + 0.5, Player.getZ(), 15, "mob/pokeball.png");
Entity.setRenderType(PokeballSummon, PokeballRenderType.renderType);

setVelX(PokeballSummon, 0.7 * Math.cos((getYaw() + 90) * (Math.PI / 180)));
setVelZ(PokeballSummon, 0.7 * Math.sin((getYaw() + 90) * (Math.PI / 180)));
if (i == 460) {
summon = false;
summoned = true;
} else if (i == 461) {
summon2 = false;
summoned2 = true;
} else if (i == 462) {
summon3 = false;
summoned3 = true;
} else if (i == 463) {
summon4 = false;
summoned4 = true;
} else if (i == 464) {
summon5 = false;
summoned5 = true;
} else if (i == 465) {
summon6 = false;
summoned6 = true;
}
}
}
}

function modTick() {
timetospawn--;
if(timetospawn==0)
{
timetospawn=12000;
while(iii<1)
{
iii++;
xx = Player.getX() - 100 + Math.floor(Math.random()*200); //Area of spawning
zz = Player.getZ() - 100 + Math.floor(Math.random()*200); //Area of spawning
while(j<100) //Should be the same as aboth
{
if(Level.getTile(xx,yy-1,zz)!=0&&Level.getTile(xx,yy-1,zz)!=31) //If the block under the building is not air or tall grass, spawn it
{
PokeCenter();
yy=80;
break;
}
else
{
yy=yy-1;
}
}
}
iii=0;
j=0;
}

//Animation
if (animationofcharmander == 1) {
Entity.setMobSkin(Charmander, "mob/charmander1.png");
charmanderticks = 4;
animationofcharmander = 2;
}

if (animationofcharmander == 2) {
charmanderticks--;
}

if (charmanderticks == 0) {
animationofcharmander = 3;
}

if (animationofcharmander == 3) {
Entity.setMobSkin(Charmander, "mob/charmander2.png");
charmanderticks = 9;
animationofcharmander = 4;
}

if (animationofcharmander == 4) {
charmanderticks--;
}

if (charmanderticks == 5) {
animationofcharmander = 5;
}

if (animationofcharmander == 5) {
Entity.setMobSkin(Charmander, "mob/charmander3.png");
charmanderticks = 14;
animationofcharmander = 6;
}

if (animationofcharmander == 6) {
charmanderticks--;
}

if (charmanderticks == 10) {
animationofcharmander = 7;
}

if (animationofcharmander == 7) {
Entity.setMobSkin(Charmander, "mob/charmander4.png");
charmanderticks = 19;
animationofcharmander = 8;
}

if (animationofcharmander == 8) {
charmanderticks--;
}

if (charmanderticks == 15) {
animationofcharmander = 1;
}

if (animationofcharmeleon == 1) {
Entity.setMobSkin(Charmeleon, "mob/charmeleon1.png");
charmeleonticks = 4;
animationofcharmeleon = 2;
}

if (animationofcharmeleon == 2) {
charmeleonticks--;
}

if (charmeleonticks == 0) {
animationofcharmeleon = 3;
}

if (animationofcharmeleon == 3) {
Entity.setMobSkin(Charmeleon, "mob/charmeleon2.png");
charmeleonticks = 9;
animationofcharmeleon = 4;
}

if (animationofcharmeleon == 4) {
charmeleonticks--;
}

if (charmeleonticks == 5) {
animationofcharmeleon = 5;
}

if (animationofcharmeleon == 5) {
Entity.setMobSkin(Charmeleon, "mob/charmeleon3.png");
charmeleonticks = 14;
animationofcharmeleon = 6;
}

if (animationofcharmeleon == 6) {
charmeleonticks--;
}

if (charmeleonticks == 10) {
animationofcharmeleon = 7;
}

if (animationofcharmeleon == 7) {
Entity.setMobSkin(Charmeleon, "mob/charmeleon4.png");
charmeleonticks = 19;
animationofcharmeleon = 8;
}

if (animationofcharmeleon == 8) {
charmeleonticks--;
}

if (charmeleonticks == 15) {
animationofcharmeleon = 1;
}

if (killball == true) {
killballtick--;
}
if (killballtick == 0) {
if (summon == true) {
Entity.setVelY(PokeballCapture, 500);
Entity.setHealth(PokeballCapture, 0);
} else if (summon2 == true) {
Entity.setVelY(PokeballCapture, 500);
Entity.setHealth(PokeballCapture, 0);
} else if (summon3 == true) {
Entity.setVelY(PokeballCapture, 500);
Entity.setHealth(PokeballCapture, 0);
} else if (summon4 == true) {
Entity.setVelY(PokeballCapture, 500);
Entity.setHealth(PokeballCapture, 0);
} else if (summon5 == true) {
Entity.setVelY(PokeballCapture, 500);
Entity.setHealth(PokeballCapture, 0);
} else if (summon6 == true) {
Entity.setVelY(PokeballCapture, 500);
Entity.setHealth(PokeballCapture, 0);
}
killballtick = 20;
killball = false;
}

if (Level.getTile(Entity.getX(PokeballSummon), Entity.getY(PokeballSummon) - 1, Entity.getZ(PokeballSummon)) != 0 && Level.getTile(Entity.getX(PokeballSummon), Entity.getY(PokeballSummon) - 1, Entity.getZ(PokeballSummon)) != 31) {
setVelY(PokeballSummon, 0.5);
}
if (Level.getTile(Entity.getX(PokeballSummon), Entity.getY(PokeballSummon) - 2.5, Entity.getZ(PokeballSummon)) == 0 || Level.getTile(Entity.getX(PokeballSummon), Entity.getY(PokeballSummon) - 2.5, Entity.getZ(PokeballSummon)) == 31 || Level.getTile(Entity.getX(PokeballSummon), Entity.getY(PokeballSummon) - 2.5, Entity.getZ(PokeballSummon)) == 78) {
Entity.setHealth(PokeballSummon, 0);
}
}

var spawned = 0;

function entityAddedHook(added) {

for(i=0; i< 40; i++)
{
if (Entity.getEntityTypeId(added) == 10 || Entity.getEntityTypeId(added) == 11 && Entity.getMobSkin(added) == "mob/cow.png" || Entity.getEntityTypeId(added) == 12 || Entity.getEntityTypeId(added) == 13 || Entity.getEntityTypeId(added) == 14 || Entity.getEntityTypeId(added) == 16) {
var spawnLegendary = Math.floor((Math.random() * 10000) + 1);
switch (spawnLegendary) {
case 41:
Celebi = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/celebi.png");
Entity.setRenderType(Celebi, CelebiRenderType.renderType);
Entity.setNameTag(Celebi, CelebiNT);
mix();
break;

case 42:
Entei = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/entei.png");
Entity.setRenderType(Entei, EnteiRenderType.renderType);
Entity.setNameTag(Entei, EnteiNT);
mix();
break;

case 43:
Mewtwo = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/mewtwo.png");
Entity.setRenderType(Mewtwo, MewtwoRenderType.renderType);
Entity.setNameTag(Mewtwo, MewtwoNT);
mix();
break;
}

var spawnTrainer = Math.floor((Math.random() * 100) + 1);
switch (spawnTrainer) {
case 1:
Teenager = Level.spawnMob(Entity.getX(added), Entity.getY(added), Entity.getZ(added), 15, "mob/teenager.png");
Entity.setRenderType(Teenager, TeenagerRenderType.renderType);
break;

case 2:
BugCatcher = Level.spawnMob(Entity.getX(added), Entity.getY(added), Entity.getZ(added), 15, "mob/bugcatcher.png");
Entity.setRenderType(BugCatcher, BugCatcherRenderType.renderType);
break;

case 3:
Fisherman = Level.spawnMob(Entity.getX(added), Entity.getY(added), Entity.getZ(added), 15, "mob/fisherman.png");
Entity.setRenderType(Fisherman, FishermanRenderType.renderType);
break;

case 4:
BirdKeeper = Level.spawnMob(Entity.getX(added), Entity.getY(added), Entity.getZ(added), 15, "mob/birdkeeper.png");
Entity.setRenderType(BirdKeeper, BirdKeeperRenderType.renderType);
break;
}

var spawnNormal = Math.floor((Math.random() * 300) + 1);
switch (spawnNormal) {
case 1:
Aerodactyl = Level.spawnMob(Entity.getX(added), Entity.getY(added), Entity.getZ(added), 15, "mob/aerodactyl.png");
Entity.setRenderType(Aerodactyl, AerodactylRenderType.renderType);
Entity.setNameTag(Aerodactyl, AerodactylNT);
AerodactylLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
AerodactylNT = "Aerodactyl (Lvl " + AerodactylLVL + ")";
break;

case 2:
Bayleef = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/bayleef.png");
Entity.setRenderType(Bayleef, BayleefRenderType.renderType);
Entity.setNameTag(Bayleef, BayleefNT);
BayleefLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
BayleefNT = "Bayleef (Lvl " + BayleefLVL + ")";
break;

case 3:
Beedrill = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/beedrill.png");
Entity.setRenderType(Beedrill, BeedrillRenderType.renderType);
Entity.setNameTag(Beedrill, BeedrillNT);
BeedrillLVL = Math.floor(Math.random() * (18 - 14 + 1)) + 14;
BeedrillNT = "Beedrill (Lvl " + BeedrillLVL + ")";
break;

case 4:
Blastoise = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/blastoise.png");
Entity.setRenderType(Blastoise, BlastoiseRenderType.renderType);
Entity.setNameTag(Blastoise, BlastoiseNT);
BlastoiseLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
BlastoiseNT = "Blastoise (Lvl " + BlastoiseLVL + ")";
break;

case 5:
Blaziken = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/blaziken.png");
Entity.setRenderType(Blaziken, BlazikenRenderType.renderType);
Entity.setNameTag(Blaziken, BlazikenNT);
BlazikenLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
BlazikenNT = "Blaziken (Lvl " + BlazikenLVL + ")";
break;

case 6:
Bulbasaur = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/bulbasaur.png");
Entity.setRenderType(Bulbasaur, BulbasaurRenderType.renderType);
Entity.setNameTag(Bulbasaur, BulbasaurNT);
BulbasaurLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
BulbasaurNT = "Bulbasaur (Lvl " + BulbasaurLVL + ")";
break;

case 7:
Butterfree = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/butterfree.png");
Entity.setRenderType(Butterfree, ButterfreeRenderType.renderType);
Entity.setNameTag(Butterfree, ButterfreeNT);
ButterfreeLVL = Math.floor(Math.random() * (18 - 14 + 1)) + 14;
ButterfreeNT = "Butterfree (Lvl " + ButterfreeLVL + ")";
break;

case 8:
Caterpie = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/caterpie.png");
Entity.setRenderType(Caterpie, CaterpieRenderType.renderType);
Entity.setNameTag(Caterpie, CaterpieNT);
CaterpieLVL = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
CaterpieNT = "Caterpie (Lvl " + CaterpieLVL + ")";
break;

case 9:
Charizard = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/charizard.png");
Entity.setRenderType(Charizard, CharizardRenderType.renderType);
Entity.setNameTag(Charizard, CharizardNT);
CharizardLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
CharizardNT = "Charizard (Lvl " + CharizardLVL + ")";
break;

case 10:
Charmander = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/charmander.png");
Entity.setRenderType(Charmander, CharmanderRenderType.renderType);
Entity.setNameTag(Charmander, CharmanderNT);
CharmanderLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
CharmanderNT = "Charmander (Lvl " + CharmanderLVL + ")";
animationofcharmander = 1;
break;

case 11:
Charmeleon = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/charmeleon.png");
Entity.setRenderType(Charmeleon, CharmeleonRenderType.renderType);
Entity.setNameTag(Charmeleon, CharmeleonNT);
CharmeleonLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
CharmeleonNT = "Charmeleon (Lvl " + CharmeleonLVL + ")";
animationofcharmeleon = 1;
break;

case 12:
Combusken = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/combusken.png");
Entity.setRenderType(Combusken, CombuskenRenderType.renderType);
Entity.setNameTag(Combusken, CombuskenNT);
CombuskenLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
CombuskenNT = "Combusken (Lvl " + CombuskenLVL + ")";
break;

case 13:
Croconaw = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/croconaw.png");
Entity.setRenderType(Croconaw, CroconawRenderType.renderType);
Entity.setNameTag(Croconaw, CroconawNT);
CroconawLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
CroconawNT = "Croconaw (Lvl " + CroconawLVL + ")";
break;

case 14:
Dodrio = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/dodrio.png");
Entity.setRenderType(Dodrio, DodrioRenderType.renderType);
Entity.setNameTag(Dodrio, DodrioNT);
DodrioLVL = Math.floor(Math.random() * (28 - 22 + 1)) + 22;
DodrioNT = "Dodrio (Lvl " + DodrioLVL + ")";
break;

case 15:
Doduo = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/doduo.png");
Entity.setRenderType(Doduo, DoduoRenderType.renderType);
Entity.setNameTag(Doduo, DoduoNT);
DoduoLVL = Math.floor(Math.random() * (20 - 14 + 1)) + 14;
DoduoNT = "Doduo (Lvl " + DoduoLVL + ")";
break;

case 16:
Dunsparce = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/dunsparce.png");
Entity.setRenderType(Dunsparce, DunsparceRenderType.renderType);
Entity.setNameTag(Dunsparce, DunsparceNT);
DunsparceLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
DunsparceNT = "Dunsparce (Lvl " + DunsparceLVL + ")";
break;

case 17:
Eevee = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/eevee.png");
Entity.setRenderType(Eevee, EeveeRenderType.renderType);
Entity.setNameTag(Eevee, EeveeNT);
EeveeLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
EeveeNT = "Eevee (Lvl " + EeveeLVL + ")";
break;

case 18:
Electrode = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/electrode.png");
Entity.setRenderType(Electrode, ElectrodeRenderType.renderType);
Entity.setNameTag(Electrode, ElectrodeNT);
ElectrodeLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
ElectrodeNT = "Electrode (Lvl " + ElectrodeLVL + ")";
break;

case 19:
Espeon = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/espeon.png");
Entity.setRenderType(Espeon, EspeonRenderType.renderType);
Entity.setNameTag(Espeon, EspeonNT);
EspeonLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
EspeonNT = "Espeon (Lvl " + EspeonLVL + ")";
break;

case 20:
Feraligatr = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/feraligatr.png");
Entity.setRenderType(Feraligatr, FeraligatrRenderType.renderType);
Entity.setNameTag(Feraligatr, FeraligatrNT);
FeraligatrLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
FeraligatrNT = "Feraligatr (Lvl " + FeraligatrLVL + ")";
break;

case 21:
Flareon = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/flareon.png");
Entity.setRenderType(Flareon, FlareonRenderType.renderType);
Entity.setNameTag(Flareon, FlareonNT);
FlareonLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
FlareonNT = "Flareon (Lvl " + FlareonLVL + ")";
break;

case 27:
Grovyle = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/grovyle.png");
Entity.setRenderType(Grovyle, GrovyleRenderType.renderType);
Entity.setNameTag(Grovyle, GrovyleNT);
GrovyleLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
GrovyleNT = "Grovyle (Lvl " + GrovyleLVL + ")";
break;

case 29:
Ivysaur = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/ivysaur.png");
Entity.setRenderType(Ivysaur, IvysaurRenderType.renderType);
Entity.setNameTag(Ivysaur, IvysaurNT);
IvysaurLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 20;
IvysaurNT = "Ivysaur (Lvl " + IvysaurLVL + ")";
break;

case 30:
Jolteon = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/jolteon.png");
Entity.setRenderType(Jolteon, JolteonRenderType.renderType);
Entity.setNameTag(Jolteon, JolteonNT);
JolteonLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
JolteonNT = "Jolteon (Lvl " + JolteonLVL + ")";
break;

case 31:
Kakuna = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/kakuna.png");
Entity.setRenderType(Kakuna, KakunaRenderType.renderType);
Entity.setNameTag(Kakuna, KakunaNT);
KakunaLVL = Math.floor(Math.random() * (9 - 7 + 1)) + 7;
KakunaNT = "Kakuna (Lvl " + KakunaLVL + ")";
break;

case 33:
Magikarp = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/magikarp.png");
Entity.setRenderType(Magikarp, MagikarpRenderType.renderType);
Entity.setNameTag(Magikarp, MagikarpNT);
MagikarpLVL = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
MagikarpNT = "Magikarp (Lvl " + MagikarpLVL + ")";
break;

case 34:
Magnemite = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/magnemite.png");
Entity.setRenderType(Magnemite, MagnemiteRenderType.renderType);
Entity.setNameTag(Magnemite, MagnemiteNT);
MagnemiteLVL = Math.floor(Math.random() * (16 - 12 + 1)) + 12;
MagnemiteNT = "Magnemite (Lvl " + MagnemiteLVL + ")";
break;

case 35:
Mankey = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/mankey.png");
Entity.setRenderType(Mankey, MankeyRenderType.renderType);
Entity.setNameTag(Mankey, MankeyNT);
MankeyLVL = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
MankeyNT = "Mankey (Lvl " + MankeyLVL + ")";
break;

case 36:
Mareep = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/mareep.png");
Entity.setRenderType(Mareep, MareepRenderType.renderType);
Entity.setNameTag(Mareep, MareepNT);
MareepLVL = Math.floor(Math.random() * (16 - 12 + 1)) + 12;
MareepNT = "Mareep (Lvl " + MareepLVL + ")";
break;

case 37:
Marshtomp = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/marshtomp.png");
Entity.setRenderType(Marshtomp, MarshtompRenderType.renderType);
Entity.setNameTag(Marshtomp, MarshtompNT);
MarshtompLVL = Math.floor(Math.random() * (22 - 16 + 1)) + 16;
MarshtompNT = "Marshtomp (Lvl " + MarshtompLVL + ")";
break;

case 38:
Meganium = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/meganium.png");
Entity.setRenderType(Meganium, MeganiumRenderType.renderType);
Entity.setNameTag(Meganium, MeganiumNT);
MeganiumLVL = Math.floor(Math.random() * (44 - 36 + 1)) + 36;
MeganiumNT = "Meganium (Lvl " + MeganiumLVL + ")";
break;

case 39:
Metapod = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/metapod.png");
Entity.setRenderType(Metapod, MetapodRenderType.renderType);
Entity.setNameTag(Metapod, MetapodNT);
MetapodLVL = Math.floor(Math.random() * (9 - 7 + 1)) + 7;
MetapodNT = "Metapod (Lvl " + MetapodLVL + ")";
break;

case 40:
Mudkip = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/mudkip.png");
Entity.setRenderType(Mudkip, MudkipRenderType.renderType);
Entity.setNameTag(Mudkip, MudkipNT);
MudkipLVL = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
MudkipNT = "Mudkip (Lvl " + MudkipLVL + ")";
break;

case 44:
NidoranF = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/nidoranf.png");
Entity.setRenderType(NidoranF, NidoranFRenderType.renderType);
Entity.setNameTag(NidoranF, NidoranFNT);
mix();
break;

case 45:
NidoranM = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/nidoranm.png");
Entity.setRenderType(NidoranM, NidoranMRenderType.renderType);
Entity.setNameTag(NidoranM, NidoranMNT);
mix();
break;

case 46:
Nidorina = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/nidorina.png");
Entity.setRenderType(Nidorina, NidorinaRenderType.renderType);
Entity.setNameTag(Nidorina, NidorinaNT);
mix();
break;

case 47:
Nidorino = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/nidorino.png");
Entity.setRenderType(Nidorino, NidorinoRenderType.renderType);
Entity.setNameTag(Nidorino, NidorinoNT);
mix();
break;

case 48:
Pichu = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/pichu.png");
Entity.setRenderType(Pichu, PichuRenderType.renderType);
Entity.setNameTag(Pichu, PichuNT);
mix();
break;

case 49:
Pidgeot = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/pidgeot.png");
Entity.setRenderType(Pidgeot, PidgeotRenderType.renderType);
Entity.setNameTag(Pidgeot, PidgeotNT);
mix();
break;

case 50:
Pidgeotto = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/pidgeotto.png");
Entity.setRenderType(Pidgeotto, PidgeottoRenderType.renderType);
Entity.setNameTag(Pidgeotto, PidgeottoNT);
mix();
break;

case 51:
Pidgey = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/pidgey.png");
Entity.setRenderType(Pidgey, PidgeyRenderType.renderType);
Entity.setNameTag(Pidgey, PidgeyNT);
mix();
break;

case 52:
Pikachu = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/pikachu.png");
Entity.setRenderType(Pikachu, PikachuRenderType.renderType);
Entity.setNameTag(Pikachu, PikachuNT);
mix();
break;

case 53:
Quilava = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/quilava.png");
Entity.setRenderType(Quilava, QuilavaRenderType.renderType);
Entity.setNameTag(Quilava, QuilavaNT);
mix();
break;

case 54:
Raichu = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/raichu.png");
Entity.setRenderType(Raichu, RaichuRenderType.renderType);
Entity.setNameTag(Raichu, RaichuNT);
mix();
break;

case 56:
Shellder = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/shellder.png");
Entity.setRenderType(Shellder, ShellderRenderType.renderType);
Entity.setNameTag(Shellder, ShellderNT);
mix();
break;

case 57:
Slowpoke = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/slowpoke.png");
Entity.setRenderType(Slowpoke, SlowpokeRenderType.renderType);
Entity.setNameTag(Slowpoke, SlowpokeNT);
mix();
break;

case 58:
Spearow = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/spearow.png");
Entity.setRenderType(Spearow, SpearowRenderType.renderType);
Entity.setNameTag(Spearow, SpearowNT);
mix();
break;

case 59:
Squirtle = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/squirtle.png");
Entity.setRenderType(Squirtle, SquirtleRenderType.renderType);
Entity.setNameTag(Squirtle, SquirtleNT);
mix();
break;

case 60:
Sudowoodo = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/sudowoodo.png");
Entity.setRenderType(Sudowoodo, SudowoodoRenderType.renderType);
Entity.setNameTag(Sudowoodo, SudowoodoNT);
mix();
break;

case 61:
Sunflora = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/sunflora.png");
Entity.setRenderType(Sunflora, SunfloraRenderType.renderType);
Entity.setNameTag(Sunflora, SunfloraNT);
mix();
break;

case 62:
Sunkern = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/sunkern.png");
Entity.setRenderType(Sunkern, SunkernRenderType.renderType);
Entity.setNameTag(Sunkern, SunkernNT);
mix();
break;

case 63:
Swellow = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/swellow.png");
Entity.setRenderType(Swellow, SwellowRenderType.renderType);
Entity.setNameTag(Swellow, SwellowNT);
mix();
break;

case 64:
Taillow = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/taillow.png");
Entity.setRenderType(Taillow, TaillowRenderType.renderType);
Entity.setNameTag(Taillow, TaillowNT);
mix();
break;

case 65:
Tentacool = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/tentacool.png");
Entity.setRenderType(Tentacool, TentacoolRenderType.renderType);
Entity.setNameTag(Tentacool, TentacoolNT);
mix();
break;

case 66:
Tentacruel = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/tentacruel.png");
Entity.setRenderType(Tentacruel, TentacruelRenderType.renderType);
Entity.setNameTag(Tentacruel, TentacruelNT);
mix();
break;

case 67:
Togepi = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/togepi.png");
Entity.setRenderType(Togepi, TogepiRenderType.renderType);
Entity.setNameTag(Togepi, TogepiNT);
mix();
break;

case 68:
Torchic = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/torchic.png");
Entity.setRenderType(Torchic, TorchicRenderType.renderType);
Entity.setNameTag(Torchic, TorchicNT);
mix();
break;

case 69:
Treecko = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/treecko.png");
Entity.setRenderType(Treecko, TreeckoRenderType.renderType);
Entity.setNameTag(Treecko, TreeckoNT);
mix();
break;

case 70:
Typhlosion = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/typhlosion.png");
Entity.setRenderType(Typhlosion, TyphlosionRenderType.renderType);
Entity.setNameTag(Typhlosion, TyphlosionNT);
mix();
break;

case 72:
Vaporeon = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/vaporeon.png");
Entity.setRenderType(Vaporeon, VaporeonRenderType.renderType);
Entity.setNameTag(Vaporeon, VaporeonNT);
mix();
break;

case 73:
Venusaur = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/venusaur.png");
Entity.setRenderType(Venusaur, VenusaurRenderType.renderType);
Entity.setNameTag(Venusaur, VenusaurNT);
mix();
break;

case 74:
Voltorb = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/voltorb.png");
Entity.setRenderType(Voltorb, VoltorbRenderType.renderType);
Entity.setNameTag(Voltorb, VoltorbNT);
mix();
break;

case 75:
Wailmer = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/wailmer.png");
Entity.setRenderType(Wailmer, WailmerRenderType.renderType);
Entity.setNameTag(Wailmer, WailmerNT);
mix();
break;

case 76:
Wailord = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/wailord.png");
Entity.setRenderType(Wailord, WailordRenderType.renderType);
Entity.setNameTag(Wailord, WailordNT);
mix();
break;

case 77:
Wartortle = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/wartortle.png");
Entity.setRenderType(Wartortle, WartortleRenderType.renderType);
Entity.setNameTag(Wartortle, WartortleNT);
mix();
break;

case 78:
Weedle = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/weedle.png");
Entity.setRenderType(Weedle, WeedleRenderType.renderType);
Entity.setNameTag(Weedle, WeedleNT);
mix();
break;

case 80:
Wobbuffet = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/wobbuffet.png");
Entity.setRenderType(Wobbuffet, WobbuffetRenderType.renderType);
Entity.setNameTag(Wobbuffet, WobbuffetNT);
mix();
break;
}
Entity.remove(added);
}

if (Entity.getEntityTypeId(added) == 32 || Entity.getEntityTypeId(added) == 33 || Entity.getEntityTypeId(added) == 34 || Entity.getEntityTypeId(added) == 35 || Entity.getEntityTypeId(added) == 36 || Entity.getEntityTypeId(added) == 37 || Entity.getEntityTypeId(added) == 38 || Entity.getEntityTypeId(added) == 39) {
var spawnNight = Math.floor((Math.random() * 150) + 1);
switch (spawnNight) {
case 1:
Zubat = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/zubat.png");
Entity.setRenderType(Zubat, ZubatRenderType.renderType);
Entity.setNameTag(Zubat, ZubatNT);
mix();
break;

case 2:
Weezing = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/weezing.png");
Entity.setRenderType(Weezing, WeezingRenderType.renderType);
Entity.setNameTag(Weezing, WeezingNT);
mix();
break;

case 3:
Umbreon = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/umbreon.png");
Entity.setRenderType(Umbreon, UmbreonRenderType.renderType);
Entity.setNameTag(Umbreon, UmbreonNT);
mix();
break;

case 4:
Rattata = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/rattata.png");
Entity.setRenderType(Rattata, RattataRenderType.renderType);
Entity.setNameTag(Rattata, RattataNT);
mix();
break;

case 5:
Koffing = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/koffing.png");
Entity.setRenderType(Koffing, KoffingRenderType.renderType);
Entity.setNameTag(Koffing, KoffingNT);
KoffingLVL = Math.floor(Math.random() * (16 - 12 + 1)) + 12;
KoffingNT = "Koffing (Lvl " + KoffingLVL + ")";
break;

case 6:
Haunter = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/haunter.png");
Entity.setRenderType(Haunter, HaunterRenderType.renderType);
Entity.setNameTag(Haunter, HaunterNT);
HaunterLVL = Math.floor(Math.random() * (28 - 20 + 1)) + 20;
HaunterNT = "Haunter (Lvl " + HaunterLVL + ")";
break;

case 7:
Gastly = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/gastly.png");
Entity.setRenderType(Gastly, GastlyRenderType.renderType);
Entity.setNameTag(Gastly, GastlyNT);
GastlyLVL = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
GastlyNT = "Gastly (Lvl " + GastlyLVL + ")";
break;

case 8:
Gengar = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/gengar.png");
Entity.setRenderType(Gengar, GengarRenderType.renderType);
Entity.setNameTag(Gengar, GengarNT);
GengarLVL = Math.floor(Math.random() * (36 - 30 + 1)) + 30;
GengarNT = "Gengar (Lvl " + GengarLVL + ")";
break;

case 9:
Golbat = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/golbat.png");
Entity.setRenderType(Golbat, GolbatRenderType.renderType);
Entity.setNameTag(Golbat, GolbatNT);
GolbatLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
GolbatNT = "Golbat (Lvl " + GolbatLVL + ")";
break;

case 10:
Golem = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/golem.png");
Entity.setRenderType(Golem, GolemRenderType.renderType);
Entity.setNameTag(Golem, GolemNT);
GolemLVL = Math.floor(Math.random() * (36 - 30 + 1)) + 30;
GolemNT = "Golem (Lvl " + GolemLVL + ")";
break;

case 11:
Graveler = Level.spawnMob(Entity.getX(added), Entity.getY(added) + 1, Entity.getZ(added), 15, "mob/graveler.png");
Entity.setRenderType(Graveler, GravelerRenderType.renderType);
Entity.setNameTag(Graveler, GravelerNT);
GravelerLVL = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
GravelerNT = "Graveler (Lvl " + GravelerLVL + ")";
break;
}
Entity.remove(added);
}
}
}

function entityRemovedHook(removed) {
if (removed == PokeballSummon) {
if (summoned == true) {
Pokemon1 = Level.spawnMob(Entity.getX(removed), Entity.getY(removed), Entity.getZ(removed), 15, Mobskin);
Entity.setHealth(Pokemon1, 10);
Entity.setRenderType(Pokemon1, Rendertype);
Entity.setNameTag(Pokemon1, Nametag);
summoned = false;
} else if (summoned2 == true) {
Pokemon2 = Level.spawnMob(Entity.getX(removed), Entity.getY(removed), Entity.getZ(removed), 15, Mobskin2);
Entity.setHealth(Pokemon2, 10);
Entity.setRenderType(Pokemon2, Rendertype2);
Entity.setNameTag(Pokemon2, Nametag2);
summoned2 = false;
} else if (summoned3 == true) {
Pokemon3 = Level.spawnMob(Entity.getX(removed), Entity.getY(removed), Entity.getZ(removed), 15, Mobskin3);
Entity.setHealth(Pokemon3, 10);
Entity.setRenderType(Pokemon3, Rendertype3);
Entity.setNameTag(Pokemon3, Nametag3);
summoned3 = false;
} else if (summoned4 == true) {
Pokemon4 = Level.spawnMob(Entity.getX(removed), Entity.getY(removed), Entity.getZ(removed), 15, Mobskin4);
Entity.setHealth(Pokemon4, 10);
Entity.setRenderType(Pokemon4, Rendertype4);
Entity.setNameTag(Pokemon4, Nametag4);
summoned4 = false;
} else if (summoned5 == true) {
Pokemon5 = Level.spawnMob(Entity.getX(removed), Entity.getY(removed), Entity.getZ(removed), 15, Mobskin5);
Entity.setHealth(Pokemon5, 10);
Entity.setRenderType(Pokemon5, Rendertype5);
Entity.setNameTag(Pokemon5, Nametag5);
summoned5 = false;
} else if (summoned6 == true) {
Pokemon6 = Level.spawnMob(Entity.getX(removed), Entity.getY(removed), Entity.getZ(removed), 15, Mobskin6);
Entity.setHealth(Pokemon6, 10);
Entity.setRenderType(Pokemon6, Rendertype6);
Entity.setNameTag(Pokemon6, Nametag6);
summoned6 = false;
}
}
}

function leaveGame() {
Save();
stopSong();
}

function newLevel() {

gotit = false;
Load();


var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {

run: function() {

try {

var metrics = new android.util.DisplayMetrics();
ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
var displayHeight = metrics.heightPixels;
var displayWidth = metrics.widthPixels;

if (gotit == false) {
GUI = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI.setContentView(layout);
GUI.setWidth(displayWidth/2.66666);
GUI.setHeight(displayWidth/3.76471);
var btn = new android.widget.Button(ctx);
layout.addView(btn);
btn.setBackgroundDrawable(mainimg);
btn.setText("\n\n\n\n\n\n\n\n\n");
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);


GUI2 = new android.widget.PopupWindow();
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI2.setContentView(layout2);
GUI2.setWidth(displayWidth/16);
GUI2.setHeight(displayWidth/16);
var btn2 = new android.widget.Button(ctx);
layout2.addView(btn2);
btn2.setBackgroundDrawable(chooseimg);
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
capture = true;
captured = true;
summon = true;
Rendertype = CharmanderRenderType.renderType;
Mobskin = "mob/charmander1.png";
Nametag = "Charmander (Lvl 5)";
Player.addItemInventory(460, 1);
GUI.dismiss();
GUI2.dismiss();
GUI3.dismiss();
GUI4.dismiss();
GUI5.dismiss();
GUI6.dismiss();
GUI7.dismiss();
GUI8.dismiss();
GUI9.dismiss();
GUI10.dismiss();
}
}));
GUI2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, -displayWidth/6.4, -displayWidth/25.6);

GUI3 = new android.widget.PopupWindow();
var layout3 = new android.widget.LinearLayout(ctx);
layout3.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI3.setContentView(layout3);
GUI3.setWidth(displayWidth/16);
GUI3.setHeight(displayWidth/16);
var btn3 = new android.widget.Button(ctx);
layout3.addView(btn3);
btn3.setBackgroundDrawable(chooseimg);
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
capture = true;
captured = true;
summon = true;
Rendertype = CyndaquilRenderType.renderType;
Mobskin = "mob/cyndaquil.png";
Nametag = "Cyndaquil (Lvl 5)";
Player.addItemInventory(460, 1);
GUI.dismiss();
GUI2.dismiss();
GUI3.dismiss();
GUI4.dismiss();
GUI5.dismiss();
GUI6.dismiss();
GUI7.dismiss();
GUI8.dismiss();
GUI9.dismiss();
GUI10.dismiss();
}
}));
GUI3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, -displayWidth/6.4, displayWidth/25.6);

GUI4 = new android.widget.PopupWindow();
var layout4 = new android.widget.LinearLayout(ctx);
layout4.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI4.setContentView(layout4);
GUI4.setWidth(displayWidth/16);
GUI4.setHeight(displayWidth/16);
var btn4 = new android.widget.Button(ctx);
layout4.addView(btn4);
btn4.setBackgroundDrawable(chooseimg);
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
capture = true;
captured = true;
summon = true;
Rendertype = TorchicRenderType.renderType;
Mobskin = "mob/torchic.png";
Nametag = "Torchic (Lvl 5)";
Player.addItemInventory(460, 1);
GUI.dismiss();
GUI2.dismiss();
GUI3.dismiss();
GUI4.dismiss();
GUI5.dismiss();
GUI6.dismiss();
GUI7.dismiss();
GUI8.dismiss();
GUI9.dismiss();
GUI10.dismiss();
}
}));
GUI4.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, -displayWidth/6.4, displayWidth/10.25738);




GUI5 = new android.widget.PopupWindow();
var layout5 = new android.widget.LinearLayout(ctx);
layout5.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI5.setContentView(layout5);
GUI5.setWidth(displayWidth/16);
GUI5.setHeight(displayWidth/16);
var btn5 = new android.widget.Button(ctx);
layout5.addView(btn5);
btn5.setBackgroundDrawable(chooseimg);
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
capture = true;
captured = true;
summon = true;
Rendertype = BulbasaurRenderType.renderType;
Mobskin = "mob/bulbasaur.png";
Nametag = "Bulbasaur (Lvl 5)";
Player.addItemInventory(460, 1);
GUI.dismiss();
GUI2.dismiss();
GUI3.dismiss();
GUI4.dismiss();
GUI5.dismiss();
GUI6.dismiss();
GUI7.dismiss();
GUI8.dismiss();
GUI9.dismiss();
GUI10.dismiss();
}
}));
GUI5.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, -displayWidth/16, -displayWidth/25.6);

GUI6 = new android.widget.PopupWindow();
var layout6 = new android.widget.LinearLayout(ctx);
layout6.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI6.setContentView(layout6);
GUI6.setWidth(displayWidth/16);
GUI6.setHeight(displayWidth/16);
var btn6 = new android.widget.Button(ctx);
layout6.addView(btn6);
btn6.setBackgroundDrawable(chooseimg);
btn6.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
capture = true;
captured = true;
summon = true;
Rendertype = ChikoritaRenderType.renderType;
Mobskin = "mob/chikorita.png";
Nametag = "Chikorita (Lvl 5)";
Player.addItemInventory(460, 1);
GUI.dismiss();
GUI2.dismiss();
GUI3.dismiss();
GUI4.dismiss();
GUI5.dismiss();
GUI6.dismiss();
GUI7.dismiss();
GUI8.dismiss();
GUI9.dismiss();
GUI10.dismiss();
}
}));
GUI6.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, -displayWidth/16, displayWidth/25.6);

GUI7 = new android.widget.PopupWindow();
var layout7 = new android.widget.LinearLayout(ctx);
layout7.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI7.setContentView(layout7);
GUI7.setWidth(displayWidth/16);
GUI7.setHeight(displayWidth/16);
var btn7 = new android.widget.Button(ctx);
layout7.addView(btn7);
btn7.setBackgroundDrawable(chooseimg);
btn7.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
capture = true;
captured = true;
summon = true;
Rendertype = TreeckoRenderType.renderType;
Mobskin = "mob/treecko.png";
Nametag = "Treecko (Lvl 5)";
Player.addItemInventory(460, 1);
GUI.dismiss();
GUI2.dismiss();
GUI3.dismiss();
GUI4.dismiss();
GUI5.dismiss();
GUI6.dismiss();
GUI7.dismiss();
GUI8.dismiss();
GUI9.dismiss();
GUI10.dismiss();
}
}));
GUI7.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, -displayWidth/16, displayWidth/10.25738);

GUI8 = new android.widget.PopupWindow();
var layout8 = new android.widget.LinearLayout(ctx);
layout8.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI8.setContentView(layout8);
GUI8.setWidth(displayWidth/16);
GUI8.setHeight(displayWidth/16);
var btn8 = new android.widget.Button(ctx);
layout8.addView(btn8);
btn8.setBackgroundDrawable(chooseimg);
btn8.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
capture = true;
captured = true;
summon = true;
Rendertype = SquirtleRenderType.renderType;
Mobskin = "mob/squirtle.png";
Nametag = "Squirtle (Lvl 5)";
Player.addItemInventory(460, 1);
GUI.dismiss();
GUI2.dismiss();
GUI3.dismiss();
GUI4.dismiss();
GUI5.dismiss();
GUI6.dismiss();
GUI7.dismiss();
GUI8.dismiss();
GUI9.dismiss();
GUI10.dismiss();
}
}));
GUI8.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, displayWidth/32, -displayWidth/25.6);

GUI9 = new android.widget.PopupWindow();
var layout9 = new android.widget.LinearLayout(ctx);
layout9.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI9.setContentView(layout9);
GUI9.setWidth(displayWidth/16);
GUI9.setHeight(displayWidth/16);
var btn9 = new android.widget.Button(ctx);
layout9.addView(btn9);
btn9.setBackgroundDrawable(chooseimg);
btn9.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
capture = true;
captured = true;
summon = true;
Rendertype = TotodileRenderType.renderType;
Mobskin = "mob/totodile.png";
Nametag = "Totodile (Lvl 5)";
Player.addItemInventory(460, 1);
GUI.dismiss();
GUI2.dismiss();
GUI3.dismiss();
GUI4.dismiss();
GUI5.dismiss();
GUI6.dismiss();
GUI7.dismiss();
GUI8.dismiss();
GUI9.dismiss();
GUI10.dismiss();
}
}));
GUI9.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, displayWidth/32, displayWidth/25.6);

GUI10 = new android.widget.PopupWindow();
var layout10 = new android.widget.LinearLayout(ctx);
layout10.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI10.setContentView(layout10);
GUI10.setWidth(displayWidth/16);
GUI10.setHeight(displayWidth/16);
var btn10 = new android.widget.Button(ctx);
layout10.addView(btn10);
btn10.setBackgroundDrawable(chooseimg);
btn10.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
capture = true;
captured = true;
summon = true;
Rendertype = MudkipRenderType.renderType;
Mobskin = "mob/mudkip.png";
Nametag = "Mudkip (Lvl 5)";
Player.addItemInventory(460, 1);
GUI.dismiss();
GUI2.dismiss();
GUI3.dismiss();
GUI4.dismiss();
GUI5.dismiss();
GUI6.dismiss();
GUI7.dismiss();
GUI8.dismiss();
GUI9.dismiss();
GUI10.dismiss();
}
}));
GUI10.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, displayWidth/32, displayWidth/10.25738);

gotit = true;

}
} catch (e) {}
}
})

}

function Save() {
var pathsave = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftworlds/" + Level.getWorldName() + "/";

java.io.File(pathsave).mkdirs();

if (captured == true) {
var newFile = new java.io.File(pathsave, "rendertype.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Rendertype.toString());
outWrite.close();
}
if (captured2 == true) {
var newFile = new java.io.File(pathsave, "rendertype2.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Rendertype2.toString());
outWrite.close();
}
if (captured3 == true) {
var newFile = new java.io.File(pathsave, "rendertype3.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Rendertype3.toString());
outWrite.close();
}
if (captured4 == true) {
var newFile = new java.io.File(pathsave, "rendertype4.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Rendertype4.toString());
outWrite.close();
}
if (captured5 == true) {
var newFile = new java.io.File(pathsave, "rendertype5.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Rendertype5.toString());
outWrite.close();
}
if (captured6 == true) {
var newFile = new java.io.File(pathsave, "rendertype6.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Rendertype6.toString());
outWrite.close();
}

if (captured == true) {
var newFile = new java.io.File(pathsave, "mobskin.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Mobskin.toString());
outWrite.close();
}
if (captured2 == true) {
var newFile = new java.io.File(pathsave, "mobskin2.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Mobskin2.toString());
outWrite.close();
}
if (captured3 == true) {
var newFile = new java.io.File(pathsave, "mobskin3.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Mobskin3.toString());
outWrite.close();
}
if (captured4 == true) {
var newFile = new java.io.File(pathsave, "mobskin4.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Mobskin4.toString());
outWrite.close();
}
if (captured5 == true) {
var newFile = new java.io.File(pathsave, "mobskin5.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Mobskin5.toString());
outWrite.close();
}
if (captured6 == true) {
var newFile = new java.io.File(pathsave, "mobskin6.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Mobskin6.toString());
outWrite.close();
}

if (captured == true) {
var newFile = new java.io.File(pathsave, "nametag.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Nametag.toString());
outWrite.close();
}
if (captured2 == true) {
var newFile = new java.io.File(pathsave, "nametag2.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Nametag2.toString());
outWrite.close();
}
if (captured3 == true) {
var newFile = new java.io.File(pathsave, "nametag3.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Nametag3.toString());
outWrite.close();
}
if (captured4 == true) {
var newFile = new java.io.File(pathsave, "nametag4.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Nametag4.toString());
outWrite.close();
}
if (captured5 == true) {
var newFile = new java.io.File(pathsave, "nametag5.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Nametag5.toString());
outWrite.close();
}
if (captured6 == true) {
var newFile = new java.io.File(pathsave, "nametag6.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(Nametag6.toString());
outWrite.close();
}

if (gotit == true) {
var newFile = new java.io.File(pathsave, "gotit.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(gotit.toString());
outWrite.close();
}

if (captured == true) {
var newFile = new java.io.File(pathsave, "capture.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(cap.toString());
outWrite.close();
}

if (captured2 == true) {
var newFile = new java.io.File(pathsave, "capture2.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(cap2.toString());
outWrite.close();
}

if (captured3 == true) {
var newFile = new java.io.File(pathsave, "capture3.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(cap3.toString());
outWrite.close();
}

if (captured4 == true) {
var newFile = new java.io.File(pathsave, "capture4.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(cap4.toString());
outWrite.close();
}

if (captured5 == true) {
var newFile = new java.io.File(pathsave, "capture5.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(cap5.toString());
outWrite.close();
}

if (captured6 == true) {
var newFile = new java.io.File(pathsave, "capture6.txt");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(cap6.toString());
outWrite.close();
}
}


function Load() {
var pathsave = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftworlds/" + Level.getWorldName() + "/";

try {
var file = new java.io.File(pathsave + "gotit.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
var gottext = str.toString();
if (gottext == "true") {
gotit = true;
} else {
gotit = false;
}
fos.close();
} catch (err) {}

try {
var file = new java.io.File(pathsave + "rendertype.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Rendertype = parseInt(str.toString());
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "rendertype2.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Rendertype2 = parseInt(str.toString());
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "rendertype3.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Rendertype3 = parseInt(str.toString());
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "rendertype4.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Rendertype4 = parseInt(str.toString());
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "rendertype5.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Rendertype5 = parseInt(str.toString());
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "rendertype6.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Rendertype6 = parseInt(str.toString());
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "mobskin.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Mobskin = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "mobskin2.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Mobskin2 = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "mobskin3.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Mobskin3 = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "mobskin4.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Mobskin4 = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "mobskin5.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Mobskin5 = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "mobskin6.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Mobskin6 = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "nametag.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Nametag = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "nametag2.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Nametag2 = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "nametag3.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Nametag3 = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "nametag4.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Nametag4 = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "nametag5.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Nametag5 = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "nametag6.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
Nametag6 = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "capture.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
cap = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "capture2.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
cap2 = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "capture3.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
cap3 = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "capture4.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
cap4 = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "capture5.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
cap5 = str.toString();
fos.close();
} catch (err) {}
try {
var file = new java.io.File(pathsave + "capture6.txt");
var fos = new java.io.FileInputStream(file);
var str = new java.lang.StringBuilder();
var ch;
while ((ch = fos.read()) != -1)
str.append(java.lang.Character(ch));
cap6 = str.toString();
fos.close();
} catch (err) {}

if (cap == "true") {
captured = true;
summon = true;
summoned = true;
}
if (cap2 == "true") {
captured2 = true;
summon2 = true;
summoned2 = true;
}
if (cap3 == "true") {
captured3 = true;
summon3 = true;
summoned3 = true;
}
if (cap4 == "true") {
captured4 = true;
summon4 = true;
summoned4 = true;
}
if (cap5 == "true") {
captured5 = true;
summon5 = true;
summoned5 = true;
}
if (cap6 == "true") {
captured6 = true;
summon6 = true;
summoned6 = true;
}
}

function Base64Decode(byteArray, Path) {
try {
var File = new java.io.File(Path);
if (!File.exists()) {
File.createNewFile();
var Stream = new java.io.FileOutputStream(File);
Stream.write(byteArray);
Stream.close();
}
} catch (err) {
print(err);
}
}

function spawnRandomTrainerPokemon() {
if (TrainerType == "Teenager") {
var TrainerMobLevel = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
trainerPokemon = Math.floor(Math.random() * 5) + 1;
switch (trainerPokemon) {
case 1:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/rattata.png");
Entity.setRenderType(TrainerMob, RattataRenderType.renderType);
Entity.setNameTag(TrainerMob, "Rattata (Lvl " + TrainerMobLevel + ")");
break;
case 2:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/pidgey.png");
Entity.setRenderType(TrainerMob, PidgeyRenderType.renderType);
Entity.setNameTag(TrainerMob, "Pidgey (Lvl " + TrainerMobLevel + ")");
break;
case 3:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/spearow.png");
Entity.setRenderType(TrainerMob, SpearowRenderType.renderType);
Entity.setNameTag(TrainerMob, "Spearow (Lvl " + TrainerMobLevel + ")");
break;
case 4:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/nidoranm.png");
Entity.setRenderType(TrainerMob, NidoranMRenderType.renderType);
Entity.setNameTag(TrainerMob, "NidoranM (Lvl " + TrainerMobLevel + ")");
break;
case 5:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/nidoranf.png");
Entity.setRenderType(TrainerMob, NidoranFRenderType.renderType);
Entity.setNameTag(TrainerMob, "NidoranF (Lvl " + TrainerMobLevel + ")");
break;
}
} else if (TrainerType == "Bug Catcher") {
var TrainerMobLevel = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
trainerPokemon = Math.floor(Math.random() * 7) + 1;
switch (trainerPokemon) {
case 1:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/caterpie.png");
Entity.setRenderType(TrainerMob, CaterpieRenderType.renderType);
Entity.setNameTag(TrainerMob, "Caterpie (Lvl " + TrainerMobLevel + ")");
break;
case 2:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/weedle.png");
Entity.setRenderType(TrainerMob, WeedleRenderType.renderType);
Entity.setNameTag(TrainerMob, "Weedle (Lvl " + TrainerMobLevel + ")");
break;
case 3:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/kakuna.png");
Entity.setRenderType(TrainerMob, KakunaRenderType.renderType);
Entity.setNameTag(TrainerMob, "Kakuna (Lvl " + TrainerMobLevel + ")");
break;
case 4:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/metapod.png");
Entity.setRenderType(TrainerMob, MetapodRenderType.renderType);
Entity.setNameTag(TrainerMob, "Metapod (Lvl " + TrainerMobLevel + ")");
break;
case 5:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/butterfree.png");
Entity.setRenderType(TrainerMob, ButterfreeRenderType.renderType);
Entity.setNameTag(TrainerMob, "Butterfree (Lvl " + TrainerMobLevel + ")");
break;
case 6:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/beedrill.png");
Entity.setRenderType(TrainerMob, BeedrillRenderType.renderType);
Entity.setNameTag(TrainerMob, "Beedrill (Lvl " + TrainerMobLevel + ")");
break;
case 7:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/dunsparce.png");
Entity.setRenderType(TrainerMob, DunsparceRenderType.renderType);
Entity.setNameTag(TrainerMob, "Dunsparce (Lvl " + TrainerMobLevel + ")");
break;
}
} else if (TrainerType == "Fisherman") {
var TrainerMobLevel = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
trainerPokemon = Math.floor(Math.random() * 6) + 1;
switch (trainerPokemon) {
case 1:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/magikarp.png");
Entity.setRenderType(TrainerMob, MagikarpRenderType.renderType);
Entity.setNameTag(TrainerMob, "Magikarp (Lvl " + TrainerMobLevel + ")");
break;
case 2:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/tentacool.png");
Entity.setRenderType(TrainerMob, TentacoolRenderType.renderType);
Entity.setNameTag(TrainerMob, "Tentacool (Lvl " + TrainerMobLevel + ")");
break;
case 3:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/wailmer.png");
Entity.setRenderType(TrainerMob, WailmerRenderType.renderType);
Entity.setNameTag(TrainerMob, "Wailmer (Lvl " + TrainerMobLevel + ")");
break;
case 4:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/tentacruel.png");
Entity.setRenderType(TrainerMob, TentacruelRenderType.renderType);
Entity.setNameTag(TrainerMob, "Tentacruel (Lvl " + TrainerMobLevel + ")");
break;
case 5:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/shellder.png");
Entity.setRenderType(TrainerMob, ShellderRenderType.renderType);
Entity.setNameTag(TrainerMob, "Shellder (Lvl " + TrainerMobLevel + ")");
break;
case 6:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/slowpoke.png");
Entity.setRenderType(TrainerMob, SlowpokeRenderType.renderType);
Entity.setNameTag(TrainerMob, "Slowpoke (Lvl " + TrainerMobLevel + ")");
break;
}
} else if (TrainerType == "Bird Keeper") {
var TrainerMobLevel = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
trainerPokemon = Math.floor(Math.random() * 6) + 1;
switch (trainerPokemon) {
case 1:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/spearow.png");
Entity.setRenderType(TrainerMob, SpearowRenderType.renderType);
Entity.setNameTag(TrainerMob, "Spearow (Lvl " + TrainerMobLevel + ")");
break;
case 2:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/pidgeotto.png");
Entity.setRenderType(TrainerMob, PidgeottoRenderType.renderType);
Entity.setNameTag(TrainerMob, "Pidgeotto (Lvl " + TrainerMobLevel + ")");
break;
case 3:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/pidgey.png");
Entity.setRenderType(TrainerMob, PidgeyRenderType.renderType);
Entity.setNameTag(TrainerMob, "Pidgey (Lvl " + TrainerMobLevel + ")");
break;
case 4:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/taillow.png");
Entity.setRenderType(TrainerMob, TaillowRenderType.renderType);
Entity.setNameTag(TrainerMob, "Taillow (Lvl " + TrainerMobLevel + ")");
break;
case 5:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/swellow.png");
Entity.setRenderType(TrainerMob, SwellowRenderType.renderType);
Entity.setNameTag(TrainerMob, "Swellow (Lvl " + TrainerMobLevel + ")");
break;
case 6:
TrainerMob = Level.spawnMob(TrainerX, TrainerY, TrainerZ, 15, "mob/doduo.png");
Entity.setRenderType(TrainerMob, DoduoRenderType.renderType);
Entity.setNameTag(TrainerMob, "Doduo (Lvl " + TrainerMobLevel + ")");
break;
}
}

Attacked = TrainerMob;
dataAttacked = Entity.getNameTag(Attacked);
levelAttacked = parseInt(/Lvl (\d+)/.exec(dataAttacked)[1]);
healthAttacked = 15 + (levelAttacked * 3)
maxhealthAttacked = 15 + (levelAttacked * 3);
damageAttacked = (levelAttacked / 2) + Math.floor((Math.random() * 5) + 1);
Entity.setHealth(Attacked, healthAttacked);
}



function attackTwo() {

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {

var metrics = new android.util.DisplayMetrics();
ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
var displayHeight = metrics.heightPixels;
var displayWidth = metrics.widthPixels;

GUIAttack = new android.widget.PopupWindow();
var layoutAttack = new android.widget.LinearLayout(ctx);
layoutAttack.setOrientation(android.widget.LinearLayout.VERTICAL);
GUIAttack.setContentView(layoutAttack);
GUIAttack.setWidth(displayWidth/6.4);
GUIAttack.setHeight(displayWidth/16);
var btnAttack = new android.widget.Button(ctx);
layoutAttack.addView(btnAttack);
btnAttack.setBackgroundDrawable(attackimg);
btnAttack.setText("\n\n\n\n\n\n\n\n\n");
btnAttack.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {

if (Entity.getHealth(Attacker) > 0 && Entity.getHealth(Attacked) > 0) {
Entity.setHealth(Attacked, Entity.getHealth(Attacked) - damageAttacker);
Entity.setHealth(Attacker, Entity.getHealth(Attacker) - damageAttacked);
clientMessage("Your Health: " + Entity.getHealth(Attacker));
clientMessage("Enemys Health: " + Entity.getHealth(Attacked));
healthBarAttacker.setProgress(Entity.getHealth(Attacker));
healthBarAttacked.setProgress(Entity.getHealth(Attacked));

if (Entity.getHealth(Attacker) < maxhealthAttacker / 2) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacker) < maxhealthAttacker / 8) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacked) < maxhealthAttacked / 2) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacked) < maxhealthAttacked / 8) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacked) <= 0) {
TrainerMobs--;
if (TrainerMobs <= 0) {
clientMessage("Nooooo...");
GUIRun.dismiss();
if (potionshow == true) {
GUIPotion.dismiss();
potionshow = false;
}
if (superpotionshow == true) {
GUISuperPotion.dismiss();
superpotionshow = false;
}
if (hyperpotionshow == true) {
GUIHyperPotion.dismiss();
hyperpotionshow = false;
}
if (maxpotionshow == true) {
GUIMaxPotion.dismiss();
maxpotionshow = false;
}
GUIAttack.dismiss();
GUIItems.dismiss();
simpleGUI.dismiss();
simpleGUI2.dismiss();
} else if (TrainerMobs > 0) {
spawnRandomTrainerPokemon();
simpleGUI2.dismiss();
recheckHealth();
}
}
if (Entity.getHealth(Attacker) <= 0) {
GUIRun.dismiss();
if (potionshow == true) {
GUIPotion.dismiss();
potionshow = false;
}
if (superpotionshow == true) {
GUISuperPotion.dismiss();
superpotionshow = false;
}
if (hyperpotionshow == true) {
GUIHyperPotion.dismiss();
hyperpotionshow = false;
}
if (maxpotionshow == true) {
GUIMaxPotion.dismiss();
maxpotionshow = false;
}
GUIAttack.dismiss();
GUIItems.dismiss();
simpleGUI.dismiss();
simpleGUI2.dismiss();
Entity.remove(Attacked);
}
}
}
}));
GUIAttack.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, -(displayWidth/12), displayWidth/10.66666);

GUIRun = new android.widget.PopupWindow();
var layoutRun = new android.widget.LinearLayout(ctx);
layoutRun.setOrientation(android.widget.LinearLayout.VERTICAL);
GUIRun.setContentView(layoutRun);
GUIRun.setWidth(displayWidth/6.4);
GUIRun.setHeight(displayWidth/16);
var btnRun = new android.widget.Button(ctx);
layoutRun.addView(btnRun);
btnRun.setBackgroundDrawable(runimg);
btnRun.setText("\n\n\n\n\n\n\n\n\n");
btnRun.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
clientMessage("You can't escape from Trainer Battles!");
}
}));
GUIRun.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, displayWidth/12, displayWidth/48);

GUIItems = new android.widget.PopupWindow();
var layoutItems = new android.widget.LinearLayout(ctx);
layoutItems.setOrientation(android.widget.LinearLayout.VERTICAL);
GUIItems.setContentView(layoutItems);
GUIItems.setWidth(displayWidth/6.4);
GUIItems.setHeight(displayWidth/16);
var btnItems = new android.widget.Button(ctx);
layoutItems.addView(btnItems);
btnItems.setBackgroundDrawable(itemsimg);
btnItems.setText("\n\n\n\n\n\n\n\n\n");
btnItems.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
if (potionshow == false) {
GUIPotion = new android.widget.PopupWindow();
var layoutPotion = new android.widget.LinearLayout(ctx);
layoutPotion.setOrientation(android.widget.LinearLayout.VERTICAL);
GUIPotion.setContentView(layoutPotion);
GUIPotion.setWidth(displayWidth/16);
GUIPotion.setHeight(displayWidth/16);
var btnPotion = new android.widget.Button(ctx);
layoutPotion.addView(btnPotion);
btnPotion.setBackgroundDrawable(potionimg);
btnPotion.setText("\n\n\n\n\n\n\n\n\n");
potionshow = true;
btnPotion.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
if (Player.getInventorySlot(0) == 467 || Player.getInventorySlot(1) == 467 || Player.getInventorySlot(2) == 467 || Player.getInventorySlot(3) == 467 || Player.getInventorySlot(4) == 467 || Player.getInventorySlot(5) == 467 || Player.getInventorySlot(6) == 467 || Player.getInventorySlot(7) == 467 || Player.getInventorySlot(8) == 467 || Player.getInventorySlot(9) == 467 || Player.getInventorySlot(10) == 467 || Player.getInventorySlot(11) == 467 || Player.getInventorySlot(12) == 467 || Player.getInventorySlot(13) == 467 || Player.getInventorySlot(14) == 467 || Player.getInventorySlot(15) == 467 || Player.getInventorySlot(16) == 467 || Player.getInventorySlot(17) == 467 || Player.getInventorySlot(18) == 467 || Player.getInventorySlot(19) == 467 || Player.getInventorySlot(20) == 467 || Player.getInventorySlot(21) == 467 || Player.getInventorySlot(22) == 467 || Player.getInventorySlot(23) == 467 || Player.getInventorySlot(24) == 467 || Player.getInventorySlot(25) == 467 || Player.getInventorySlot(26) == 467 || Player.getInventorySlot(27) == 467 || Player.getInventorySlot(28) == 467 || Player.getInventorySlot(29) == 467 || Player.getInventorySlot(30) == 467 || Player.getInventorySlot(31) == 467 || Player.getInventorySlot(32) == 467 || Player.getInventorySlot(33) == 467 || Player.getInventorySlot(34) == 467 || Player.getInventorySlot(35) == 467 || Player.getInventorySlot(36) == 467 || Player.getInventorySlot(37) == 467 || Player.getInventorySlot(38) == 467 || Player.getInventorySlot(39) == 467 || Player.getInventorySlot(40) == 467 || Player.getInventorySlot(41) == 467 || Player.getInventorySlot(42) == 467 || Player.getInventorySlot(43) == 467 || Player.getInventorySlot(44) == 467 || Player.getInventorySlot(45) == 467) {
Entity.setHealth(Attacker, Entity.getHealth(Attacker) + 20);
Entity.setHealth(Attacker, Entity.getHealth(Attacker) - damageAttacked);
clientMessage("Your Health: " + Entity.getHealth(Attacker));
clientMessage("Enemys Health: " + Entity.getHealth(Attacked));
GUISuperPotion.dismiss();
GUIPotion.dismiss();
GUIHyperPotion.dismiss();
GUIMaxPotion.dismiss();
superpotionshow = false;
hyperpotionshow = false;
maxpotionshow = false;
potionshow = false;
healthBarAttacker.setProgress(Entity.getHealth(Attacker));
healthBarAttacked.setProgress(Entity.getHealth(Attacked));

if (Entity.getHealth(Attacker) < maxhealthAttacker / 2) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacker) < maxhealthAttacker / 8) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacked) < maxhealthAttacked / 2) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacked) < maxhealthAttacked / 8) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacker) <= 0 || Entity.getHealth(Attacked) <= 0) {
GUIRun.dismiss();
GUIAttack.dismiss();
GUIItems.dismiss();
if (potionshow == true) {
GUIPotion.dismiss();
potionshow = false;
}

if (superpotionshow == true) {
GUISuperPotion.dismiss();
superpotionshow = false;
}
if (hyperpotionshow == true) {
GUIHyperPotion.dismiss();
hyperpotionshow = false;
}
if (maxpotionshow == true) {
GUIMaxPotion.dismiss();
maxpotionshow = false;
}
simpleGUI.dismiss();
simpleGUI2.dismiss();
}

} else {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
android.widget.Toast.makeText(ctx, "You don't have this", 0).show();
}
})
}
}
}));
GUIPotion.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, -(displayWidth/8), displayWidth/5.33333);
}

if (superpotionshow == false) {
GUISuperPotion = new android.widget.PopupWindow();
var layoutSuperPotion = new android.widget.LinearLayout(ctx);
layoutSuperPotion.setOrientation(android.widget.LinearLayout.VERTICAL);
GUISuperPotion.setContentView(layoutSuperPotion);
GUISuperPotion.setWidth(displayWidth/16);
GUISuperPotion.setHeight(displayWidth/16);
var btnSuperPotion = new android.widget.Button(ctx);
layoutSuperPotion.addView(btnSuperPotion);
btnSuperPotion.setBackgroundDrawable(superpotionimg);
btnSuperPotion.setText("\n\n\n\n\n\n\n\n\n");
superpotionshow = true;
btnSuperPotion.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
if (Player.getInventorySlot(0) == 468 || Player.getInventorySlot(1) == 468 || Player.getInventorySlot(2) == 468 || Player.getInventorySlot(3) == 468 || Player.getInventorySlot(4) == 468 || Player.getInventorySlot(5) == 468 || Player.getInventorySlot(6) == 468 || Player.getInventorySlot(7) == 468 || Player.getInventorySlot(8) == 468 || Player.getInventorySlot(9) == 468 || Player.getInventorySlot(10) == 468 || Player.getInventorySlot(11) == 468 || Player.getInventorySlot(12) == 468 || Player.getInventorySlot(13) == 468 || Player.getInventorySlot(14) == 468 || Player.getInventorySlot(15) == 468 || Player.getInventorySlot(16) == 468 || Player.getInventorySlot(17) == 468 || Player.getInventorySlot(18) == 468 || Player.getInventorySlot(19) == 468 || Player.getInventorySlot(20) == 468 || Player.getInventorySlot(21) == 468 || Player.getInventorySlot(22) == 468 || Player.getInventorySlot(23) == 468 || Player.getInventorySlot(24) == 468 || Player.getInventorySlot(25) == 468 || Player.getInventorySlot(26) == 468 || Player.getInventorySlot(27) == 468 || Player.getInventorySlot(28) == 468 || Player.getInventorySlot(29) == 468 || Player.getInventorySlot(30) == 468 || Player.getInventorySlot(31) == 468 || Player.getInventorySlot(32) == 468 || Player.getInventorySlot(33) == 468 || Player.getInventorySlot(34) == 468 || Player.getInventorySlot(35) == 468 || Player.getInventorySlot(36) == 468 || Player.getInventorySlot(37) == 468 || Player.getInventorySlot(38) == 468 || Player.getInventorySlot(39) == 468 || Player.getInventorySlot(40) == 468 || Player.getInventorySlot(41) == 468 || Player.getInventorySlot(42) == 468 || Player.getInventorySlot(43) == 468 || Player.getInventorySlot(44) == 468 || Player.getInventorySlot(45) == 468) {
Entity.setHealth(Attacker, Entity.getHealth(Attacker) + 50);
Entity.setHealth(Attacker, Entity.getHealth(Attacker) - damageAttacked);
clientMessage("Your Health: " + Entity.getHealth(Attacker));
clientMessage("Enemys Health: " + Entity.getHealth(Attacked));
GUISuperPotion.dismiss();
GUIPotion.dismiss();
GUIHyperPotion.dismiss();
GUIMaxPotion.dismiss();
superpotionshow = false;
hyperpotionshow = false;
maxpotionshow = false;
potionshow = false;
healthBarAttacker.setProgress(Entity.getHealth(Attacker));
healthBarAttacked.setProgress(Entity.getHealth(Attacked));

if (Entity.getHealth(Attacker) < maxhealthAttacker / 2) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacker) < maxhealthAttacker / 8) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacked) < maxhealthAttacked / 2) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacked) < maxhealthAttacked / 8) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacker) <= 0 || Entity.getHealth(Attacked) <= 0) {
GUIRun.dismiss();
GUIAttack.dismiss();
GUIItems.dismiss();
if (superpotionshow == true) {
GUISuperPotion.dismiss();
superpotionshow = false;
}

if (potionshow == true) {
GUIPotion.dismiss();
potionshow = false;
}
if (hyperpotionshow == true) {
GUIHyperPotion.dismiss();
hyperpotionshow = false;
}
if (maxpotionshow == true) {
GUIMaxPotion.dismiss();
maxpotionshow = false;
}
simpleGUI.dismiss();
simpleGUI2.dismiss();
}

} else {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
android.widget.Toast.makeText(ctx, "You don't have this", 0).show();
}
})
}
}
}));
GUISuperPotion.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, -(displayWidth/16), displayWidth/5.33333);
}

if (hyperpotionshow == false) {
GUIHyperPotion = new android.widget.PopupWindow();
var layoutHyperPotion = new android.widget.LinearLayout(ctx);
layoutHyperPotion.setOrientation(android.widget.LinearLayout.VERTICAL);
GUIHyperPotion.setContentView(layoutHyperPotion);
GUIHyperPotion.setWidth(displayWidth/16);
GUIHyperPotion.setHeight(displayWidth/16);
var btnHyperPotion = new android.widget.Button(ctx);
layoutHyperPotion.addView(btnHyperPotion);
btnHyperPotion.setBackgroundDrawable(hyperpotionimg);
btnHyperPotion.setText("\n\n\n\n\n\n\n\n\n");
hyperpotionshow = true;
btnHyperPotion.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
if (Player.getInventorySlot(0) == 469 || Player.getInventorySlot(1) == 469 || Player.getInventorySlot(2) == 469 || Player.getInventorySlot(3) == 469 || Player.getInventorySlot(4) == 469 || Player.getInventorySlot(5) == 469 || Player.getInventorySlot(6) == 469 || Player.getInventorySlot(7) == 469 || Player.getInventorySlot(8) == 469 || Player.getInventorySlot(9) == 469 || Player.getInventorySlot(10) == 469 || Player.getInventorySlot(11) == 469 || Player.getInventorySlot(12) == 469 || Player.getInventorySlot(13) == 469 || Player.getInventorySlot(14) == 469 || Player.getInventorySlot(15) == 469 || Player.getInventorySlot(16) == 469 || Player.getInventorySlot(17) == 469 || Player.getInventorySlot(18) == 469 || Player.getInventorySlot(19) == 469 || Player.getInventorySlot(20) == 469 || Player.getInventorySlot(21) == 469 || Player.getInventorySlot(22) == 469 || Player.getInventorySlot(23) == 469 || Player.getInventorySlot(24) == 469 || Player.getInventorySlot(25) == 469 || Player.getInventorySlot(26) == 469 || Player.getInventorySlot(27) == 469 || Player.getInventorySlot(28) == 469 || Player.getInventorySlot(29) == 469 || Player.getInventorySlot(30) == 469 || Player.getInventorySlot(31) == 469 || Player.getInventorySlot(32) == 469 || Player.getInventorySlot(33) == 469 || Player.getInventorySlot(34) == 469 || Player.getInventorySlot(35) == 469 || Player.getInventorySlot(36) == 469 || Player.getInventorySlot(37) == 469 || Player.getInventorySlot(38) == 469 || Player.getInventorySlot(39) == 469 || Player.getInventorySlot(40) == 469 || Player.getInventorySlot(41) == 469 || Player.getInventorySlot(42) == 469 || Player.getInventorySlot(43) == 469 || Player.getInventorySlot(44) == 469 || Player.getInventorySlot(45) == 469) {
Entity.setHealth(Attacker, Entity.getHealth(Attacker) + 200);
Entity.setHealth(Attacker, Entity.getHealth(Attacker) - damageAttacked);
clientMessage("Your Health: " + Entity.getHealth(Attacker));
clientMessage("Enemys Health: " + Entity.getHealth(Attacked));
GUISuperPotion.dismiss();
GUIPotion.dismiss();
GUIHyperPotion.dismiss();
GUIMaxPotion.dismiss();
superpotionshow = false;
hyperpotionshow = false;
maxpotionshow = false;
potionshow = false;
healthBarAttacker.setProgress(Entity.getHealth(Attacker));
healthBarAttacked.setProgress(Entity.getHealth(Attacked));

if (Entity.getHealth(Attacker) < maxhealthAttacker / 2) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacker) < maxhealthAttacker / 8) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacked) < maxhealthAttacked / 2) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacked) < maxhealthAttacked / 8) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacker) <= 0 || Entity.getHealth(Attacked) <= 0) {
GUIRun.dismiss();
GUIAttack.dismiss();
GUIItems.dismiss();
if (superpotionshow == true) {
GUISuperPotion.dismiss();
superpotionshow = false;
}

if (potionshow == true) {
GUIPotion.dismiss();
potionshow = false;
}
if (hyperpotionshow == true) {
GUIHyperPotion.dismiss();
hyperpotionshow = false;
}
if (maxpotionshow == true) {
GUIMaxPotion.dismiss();
maxpotionshow = false;
}
simpleGUI.dismiss();
simpleGUI2.dismiss();
}

} else {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
android.widget.Toast.makeText(ctx, "You don't have this", 0).show();
}
})
}
}
}));
GUIHyperPotion.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, displayWidth/16, displayWidth/5.33333);
}

if (maxpotionshow == false) {
GUIMaxPotion = new android.widget.PopupWindow();
var layoutMaxPotion = new android.widget.LinearLayout(ctx);
layoutMaxPotion.setOrientation(android.widget.LinearLayout.VERTICAL);
GUIMaxPotion.setContentView(layoutMaxPotion);
GUIMaxPotion.setWidth(displayWidth/16);
GUIMaxPotion.setHeight(displayWidth/16);
var btnMaxPotion = new android.widget.Button(ctx);
layoutMaxPotion.addView(btnMaxPotion);
btnMaxPotion.setBackgroundDrawable(maxpotionimg);
btnMaxPotion.setText("\n\n\n\n\n\n\n\n\n");
maxpotionshow = true;
btnMaxPotion.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
if (Player.getInventorySlot(0) == 470 || Player.getInventorySlot(1) == 470 || Player.getInventorySlot(2) == 470 || Player.getInventorySlot(3) == 470 || Player.getInventorySlot(4) == 470 || Player.getInventorySlot(5) == 470 || Player.getInventorySlot(6) == 470 || Player.getInventorySlot(7) == 470 || Player.getInventorySlot(8) == 470 || Player.getInventorySlot(9) == 470 || Player.getInventorySlot(10) == 470 || Player.getInventorySlot(11) == 470 || Player.getInventorySlot(12) == 470 || Player.getInventorySlot(13) == 470 || Player.getInventorySlot(14) == 470 || Player.getInventorySlot(15) == 470 || Player.getInventorySlot(16) == 470 || Player.getInventorySlot(17) == 470 || Player.getInventorySlot(18) == 470 || Player.getInventorySlot(19) == 470 || Player.getInventorySlot(20) == 470 || Player.getInventorySlot(21) == 470 || Player.getInventorySlot(22) == 470 || Player.getInventorySlot(23) == 470 || Player.getInventorySlot(24) == 470 || Player.getInventorySlot(25) == 470 || Player.getInventorySlot(26) == 470 || Player.getInventorySlot(27) == 470 || Player.getInventorySlot(28) == 470 || Player.getInventorySlot(29) == 470 || Player.getInventorySlot(30) == 470 || Player.getInventorySlot(31) == 470 || Player.getInventorySlot(32) == 470 || Player.getInventorySlot(33) == 470 || Player.getInventorySlot(34) == 470 || Player.getInventorySlot(35) == 470 || Player.getInventorySlot(36) == 470 || Player.getInventorySlot(37) == 470 || Player.getInventorySlot(38) == 470 || Player.getInventorySlot(39) == 470 || Player.getInventorySlot(40) == 470 || Player.getInventorySlot(41) == 470 || Player.getInventorySlot(42) == 470 || Player.getInventorySlot(43) == 470 || Player.getInventorySlot(44) == 470 || Player.getInventorySlot(45) == 470) {
Entity.setHealth(Attacker, Entity.getHealth(Attacker) + 999);
Entity.setHealth(Attacker, Entity.getHealth(Attacker) - damageAttacked);
clientMessage("Your Health: " + Entity.getHealth(Attacker));
clientMessage("Enemys Health: " + Entity.getHealth(Attacked));
GUISuperPotion.dismiss();
GUIPotion.dismiss();
GUIMaxPotion.dismiss();
GUIMaxPotion.dismiss();
superpotionshow = false;
hyperpotionshow = false;
maxpotionshow = false;
potionshow = false;
healthBarAttacker.setProgress(Entity.getHealth(Attacker));
healthBarAttacked.setProgress(Entity.getHealth(Attacked));

if (Entity.getHealth(Attacker) < maxhealthAttacker / 2) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacker) < maxhealthAttacker / 8) {
healthBarAttacker.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacked) < maxhealthAttacked / 2) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#D7DF01"), android.graphics.PorterDuff.Mode.MULTIPLY);
}
if (Entity.getHealth(Attacked) < maxhealthAttacked / 8) {
healthBarAttacked.getProgressDrawable().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
}

if (Entity.getHealth(Attacker) <= 0 || Entity.getHealth(Attacked) <= 0) {
GUIRun.dismiss();
GUIAttack.dismiss();
GUIItems.dismiss();
if (superpotionshow == true) {
GUISuperPotion.dismiss();
superpotionshow = false;
}

if (potionshow == true) {
GUIPotion.dismiss();
potionshow = false;
}
if (hyperpotionshow == true) {
GUIHyperPotion.dismiss();
hyperpotionshow = false;
}
if (maxpotionshow == true) {
GUIMaxPotion.dismiss();
maxpotionshow = false;
}
simpleGUI.dismiss();
simpleGUI2.dismiss();
}

} else {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() {
android.widget.Toast.makeText(ctx, "You don't have this", 0).show();
}
})
}
}
}));
GUIMaxPotion.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, displayWidth/8, displayWidth/5.33333);
}
}
}));
GUIItems.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, displayWidth/12, displayWidth/10.66666);
}
})
}

var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang";
var ply = new android.media.MediaPlayer();

function playingSong(lagu, ulang) {
ply.stop();
ply.reset();
ply.setDataSource(path + "/" + lagu);
ply.prepare();
ply.setLooping(ulang);
ply.start()
}

function stopSong() {
ply.stop();
ply.reset();
}

function PokeCenter()
{
Level.setTile(xx,yy,zz,159)
Level.setTile(xx,yy,zz+1,159)
Level.setTile(xx,yy,zz+2,159)
Level.setTile(xx,yy,zz+3,159)
Level.setTile(xx,yy,zz+4,159)
Level.setTile(xx,yy,zz+5,159)
Level.setTile(xx,yy,zz+6,159)
Level.setTile(xx,yy,zz+7,159)
Level.setTile(xx,yy,zz+8,159)
Level.setTile(xx,yy,zz+9,159)
Level.setTile(xx+1,yy,zz+9,159)
Level.setTile(xx+2,yy,zz+9,159)
Level.setTile(xx+3,yy,zz+9,159)
Level.setTile(xx+4,yy,zz+9,159)
Level.setTile(xx+5,yy,zz+9,159)
Level.setTile(xx+6,yy,zz+9,159)
Level.setTile(xx+7,yy,zz+9,159)
Level.setTile(xx+8,yy,zz+9,159)
Level.setTile(xx+9,yy,zz+9,159)
Level.setTile(xx+10,yy,zz+9,159)
Level.setTile(xx+11,yy,zz+9,159)
Level.setTile(xx+12,yy,zz+9,159)
Level.setTile(xx+13,yy,zz+9,159)
Level.setTile(xx+13,yy,zz+8,159)
Level.setTile(xx+13,yy,zz+7,159)
Level.setTile(xx+13,yy,zz+6,159)
Level.setTile(xx+13,yy,zz+5,159)
Level.setTile(xx+13,yy,zz+4,159)
Level.setTile(xx+13,yy,zz+3,159)
Level.setTile(xx+13,yy,zz+2,159)
Level.setTile(xx+13,yy,zz+1,159)
Level.setTile(xx+13,yy,zz+0,159)
Level.setTile(xx+12,yy,zz+0,159)
Level.setTile(xx+11,yy,zz+0,159)
Level.setTile(xx+10,yy,zz+0,159)
Level.setTile(xx+9,yy,zz+0,159)
Level.setTile(xx+8,yy,zz+0,159)
Level.setTile(xx+5,yy,zz+0,159)
Level.setTile(xx+4,yy,zz+0,159)
Level.setTile(xx+3,yy,zz+0,159)
Level.setTile(xx+2,yy,zz+0,159)
Level.setTile(xx+1,yy,zz+0,159)
Level.setTile(xx+0,yy,zz+0,159)
Level.setTile(xx,yy+1,zz,159)
Level.setTile(xx,yy+1,zz+1,159)
Level.setTile(xx,yy+1,zz+2,159)
Level.setTile(xx,yy+1,zz+3,159)
Level.setTile(xx,yy+1,zz+4,159)
Level.setTile(xx,yy+1,zz+5,159)
Level.setTile(xx,yy+1,zz+6,159)
Level.setTile(xx,yy+1,zz+7,159)
Level.setTile(xx,yy+1,zz+8,159)
Level.setTile(xx,yy+1,zz+9,159)
Level.setTile(xx+1,yy+1,zz+9,159)
Level.setTile(xx+2,yy+1,zz+9,159)
Level.setTile(xx+3,yy+1,zz+9,159)
Level.setTile(xx+4,yy+1,zz+9,159)
Level.setTile(xx+5,yy+1,zz+9,159)
Level.setTile(xx+6,yy+1,zz+9,159)
Level.setTile(xx+7,yy+1,zz+9,159)
Level.setTile(xx+8,yy+1,zz+9,159)
Level.setTile(xx+9,yy+1,zz+9,159)
Level.setTile(xx+10,yy+1,zz+9,159)
Level.setTile(xx+11,yy+1,zz+9,159)
Level.setTile(xx+12,yy+1,zz+9,159)
Level.setTile(xx+13,yy+1,zz+9,159)
Level.setTile(xx+13,yy+1,zz+8,159)
Level.setTile(xx+13,yy+1,zz+7,159)
Level.setTile(xx+13,yy+1,zz+6,159)
Level.setTile(xx+13,yy+1,zz+5,159)
Level.setTile(xx+13,yy+1,zz+4,159)
Level.setTile(xx+13,yy+1,zz+3,159)
Level.setTile(xx+13,yy+1,zz+2,159)
Level.setTile(xx+13,yy+1,zz+1,159)
Level.setTile(xx+13,yy+1,zz+0,159)
Level.setTile(xx+12,yy+1,zz+0,159)
Level.setTile(xx+11,yy+1,zz+0,159)
Level.setTile(xx+10,yy+1,zz+0,159)
Level.setTile(xx+9,yy+1,zz+0,159)
Level.setTile(xx+8,yy+1,zz+0,159)
Level.setTile(xx+5,yy+1,zz+0,159)
Level.setTile(xx+4,yy+1,zz+0,159)
Level.setTile(xx+3,yy+1,zz+0,159)
Level.setTile(xx+2,yy+1,zz+0,159)
Level.setTile(xx+1,yy+1,zz+0,159)
Level.setTile(xx+0,yy+1,zz+0,159)
Level.setTile(xx,yy+2,zz,159)
Level.setTile(xx,yy+2,zz+1,159)
Level.setTile(xx,yy+2,zz+2,159)
Level.setTile(xx,yy+2,zz+3,159)
Level.setTile(xx,yy+2,zz+4,159)
Level.setTile(xx,yy+2,zz+5,159)
Level.setTile(xx,yy+2,zz+6,159)
Level.setTile(xx,yy+2,zz+7,159)
Level.setTile(xx,yy+2,zz+8,159)
Level.setTile(xx,yy+2,zz+9,159)
Level.setTile(xx+1,yy+2,zz+9,159)
Level.setTile(xx+2,yy+2,zz+9,159)
Level.setTile(xx+3,yy+2,zz+9,159)
Level.setTile(xx+4,yy+2,zz+9,159)
Level.setTile(xx+5,yy+2,zz+9,159)
Level.setTile(xx+6,yy+2,zz+9,159)
Level.setTile(xx+7,yy+2,zz+9,159)
Level.setTile(xx+8,yy+2,zz+9,159)
Level.setTile(xx+9,yy+2,zz+9,159)
Level.setTile(xx+10,yy+2,zz+9,159)
Level.setTile(xx+11,yy+2,zz+9,159)
Level.setTile(xx+12,yy+2,zz+9,159)
Level.setTile(xx+13,yy+2,zz+9,159)
Level.setTile(xx+13,yy+2,zz+8,159)
Level.setTile(xx+13,yy+2,zz+7,159)
Level.setTile(xx+13,yy+2,zz+6,159)
Level.setTile(xx+13,yy+2,zz+5,159)
Level.setTile(xx+13,yy+2,zz+4,159)
Level.setTile(xx+13,yy+2,zz+3,159)
Level.setTile(xx+13,yy+2,zz+2,159)
Level.setTile(xx+13,yy+2,zz+1,159)
Level.setTile(xx+13,yy+2,zz+0,159)
Level.setTile(xx+12,yy+2,zz+0,159)
Level.setTile(xx+11,yy+2,zz+0,159)
Level.setTile(xx+10,yy+2,zz+0,159)
Level.setTile(xx+9,yy+2,zz+0,159)
Level.setTile(xx+8,yy+2,zz+0,159)
Level.setTile(xx+7,yy+2,zz+0,159)
Level.setTile(xx+6,yy+2,zz+0,159)
Level.setTile(xx+5,yy+2,zz+0,159)
Level.setTile(xx+4,yy+2,zz+0,159)
Level.setTile(xx+3,yy+2,zz+0,159)
Level.setTile(xx+2,yy+2,zz+0,159)
Level.setTile(xx+1,yy+2,zz+0,159)
Level.setTile(xx+0,yy+2,zz+0,159)
Level.setTile(xx,yy+3,zz,159)
Level.setTile(xx,yy+3,zz+1,159)
Level.setTile(xx,yy+3,zz+2,159)
Level.setTile(xx,yy+3,zz+3,159)
Level.setTile(xx,yy+3,zz+4,159)
Level.setTile(xx,yy+3,zz+5,159)
Level.setTile(xx,yy+3,zz+6,159)
Level.setTile(xx,yy+3,zz+7,159)
Level.setTile(xx,yy+3,zz+8,159)
Level.setTile(xx,yy+3,zz+9,159)
Level.setTile(xx+1,yy+3,zz+9,159)
Level.setTile(xx+2,yy+3,zz+9,159)
Level.setTile(xx+3,yy+3,zz+9,159)
Level.setTile(xx+4,yy+3,zz+9,159)
Level.setTile(xx+5,yy+3,zz+9,159)
Level.setTile(xx+6,yy+3,zz+9,159)
Level.setTile(xx+7,yy+3,zz+9,159)
Level.setTile(xx+8,yy+3,zz+9,159)
Level.setTile(xx+9,yy+3,zz+9,159)
Level.setTile(xx+10,yy+3,zz+9,159)
Level.setTile(xx+11,yy+3,zz+9,159)
Level.setTile(xx+12,yy+3,zz+9,159)
Level.setTile(xx+13,yy+3,zz+9,159)
Level.setTile(xx+13,yy+3,zz+8,159)
Level.setTile(xx+13,yy+3,zz+7,159)
Level.setTile(xx+13,yy+3,zz+6,159)
Level.setTile(xx+13,yy+3,zz+5,159)
Level.setTile(xx+13,yy+3,zz+4,159)
Level.setTile(xx+13,yy+3,zz+3,159)
Level.setTile(xx+13,yy+3,zz+2,159)
Level.setTile(xx+13,yy+3,zz+1,159)
Level.setTile(xx+13,yy+3,zz+0,159)
Level.setTile(xx+12,yy+3,zz+0,159)
Level.setTile(xx+11,yy+3,zz+0,159)
Level.setTile(xx+10,yy+3,zz+0,159)
Level.setTile(xx+9,yy+3,zz+0,159)
Level.setTile(xx+8,yy+3,zz+0,159)
Level.setTile(xx+7,yy+3,zz+0,159)
Level.setTile(xx+6,yy+3,zz+0,159)
Level.setTile(xx+5,yy+3,zz+0,159)
Level.setTile(xx+4,yy+3,zz+0,159)
Level.setTile(xx+3,yy+3,zz+0,159)
Level.setTile(xx+2,yy+3,zz+0,159)
Level.setTile(xx+1,yy+3,zz+0,159)
Level.setTile(xx+0,yy+3,zz+0,159)
Level.setTile(xx,yy+4,zz,159)
Level.setTile(xx,yy+4,zz+1,159)
Level.setTile(xx,yy+4,zz+2,159)
Level.setTile(xx,yy+4,zz+3,159)
Level.setTile(xx,yy+4,zz+4,159)
Level.setTile(xx,yy+4,zz+5,159)
Level.setTile(xx,yy+4,zz+6,159)
Level.setTile(xx,yy+4,zz+7,159)
Level.setTile(xx,yy+4,zz+8,159)
Level.setTile(xx,yy+4,zz+9,159)
Level.setTile(xx+1,yy+4,zz+9,159)
Level.setTile(xx+2,yy+4,zz+9,159)
Level.setTile(xx+3,yy+4,zz+9,159)
Level.setTile(xx+4,yy+4,zz+9,159)
Level.setTile(xx+5,yy+4,zz+9,159)
Level.setTile(xx+6,yy+4,zz+9,159)
Level.setTile(xx+7,yy+4,zz+9,159)
Level.setTile(xx+8,yy+4,zz+9,159)
Level.setTile(xx+9,yy+4,zz+9,159)
Level.setTile(xx+10,yy+4,zz+9,159)
Level.setTile(xx+11,yy+4,zz+9,159)
Level.setTile(xx+12,yy+4,zz+9,159)
Level.setTile(xx+13,yy+4,zz+9,159)
Level.setTile(xx+13,yy+4,zz+8,159)
Level.setTile(xx+13,yy+4,zz+7,159)
Level.setTile(xx+13,yy+4,zz+6,159)
Level.setTile(xx+13,yy+4,zz+5,159)
Level.setTile(xx+13,yy+4,zz+4,159)
Level.setTile(xx+13,yy+4,zz+3,159)
Level.setTile(xx+13,yy+4,zz+2,159)
Level.setTile(xx+13,yy+4,zz+1,159)
Level.setTile(xx+13,yy+4,zz+0,159)
Level.setTile(xx+12,yy+4,zz+0,159)
Level.setTile(xx+11,yy+4,zz+0,159)
Level.setTile(xx+10,yy+4,zz+0,159)
Level.setTile(xx+9,yy+4,zz+0,159)
Level.setTile(xx+8,yy+4,zz+0,159)
Level.setTile(xx+7,yy+4,zz+0,159)
Level.setTile(xx+6,yy+4,zz+0,159)
Level.setTile(xx+5,yy+4,zz+0,159)
Level.setTile(xx+4,yy+4,zz+0,159)
Level.setTile(xx+3,yy+4,zz+0,159)
Level.setTile(xx+2,yy+4,zz+0,159)
Level.setTile(xx+1,yy+4,zz+0,159)
Level.setTile(xx+0,yy+4,zz+0,159)
Level.setTile(xx,yy+5,zz,159,14)
Level.setTile(xx,yy+5,zz+1,159,14)
Level.setTile(xx,yy+5,zz+2,159,14)
Level.setTile(xx,yy+5,zz+3,159,14)
Level.setTile(xx,yy+5,zz+4,159,14)
Level.setTile(xx,yy+5,zz+5,159,14)
Level.setTile(xx,yy+5,zz+6,159,14)
Level.setTile(xx,yy+5,zz+7,159,14)
Level.setTile(xx,yy+5,zz+8,159,14)
Level.setTile(xx+1,yy+5,zz+1,159,14)
Level.setTile(xx+1,yy+5,zz+2,159,14)
Level.setTile(xx+1,yy+5,zz+3,159,14)
Level.setTile(xx+1,yy+5,zz+4,159,14)
Level.setTile(xx+1,yy+5,zz+5,159,14)
Level.setTile(xx+1,yy+5,zz+6,159,14)
Level.setTile(xx+1,yy+5,zz+7,159,14)
Level.setTile(xx+1,yy+5,zz+8,159,14)
Level.setTile(xx+2,yy+5,zz+1,159,14)
Level.setTile(xx+2,yy+5,zz+2,159,14)
Level.setTile(xx+2,yy+5,zz+3,159,14)
Level.setTile(xx+2,yy+5,zz+4,159,14)
Level.setTile(xx+2,yy+5,zz+5,159,14)
Level.setTile(xx+2,yy+5,zz+6,159,14)
Level.setTile(xx+2,yy+5,zz+7,159,14)
Level.setTile(xx+2,yy+5,zz+8,159,14)
Level.setTile(xx+3,yy+5,zz+1,159,14)
Level.setTile(xx+3,yy+5,zz+2,159,14)
Level.setTile(xx+3,yy+5,zz+3,159,14)
Level.setTile(xx+3,yy+5,zz+4,159,14)
Level.setTile(xx+3,yy+5,zz+5,159,14)
Level.setTile(xx+3,yy+5,zz+6,159,14)
Level.setTile(xx+3,yy+5,zz+7,159,14)
Level.setTile(xx+3,yy+5,zz+8,159,14)
Level.setTile(xx+4,yy+5,zz+1,159,14)
Level.setTile(xx+4,yy+5,zz+2,159,14)
Level.setTile(xx+4,yy+5,zz+3,159,14)
Level.setTile(xx+4,yy+5,zz+4,159,14)
Level.setTile(xx+4,yy+5,zz+5,159,14)
Level.setTile(xx+4,yy+5,zz+6,159,14)
Level.setTile(xx+4,yy+5,zz+7,159,14)
Level.setTile(xx+4,yy+5,zz+8,159,14)
Level.setTile(xx+5,yy+5,zz+1,159,14)
Level.setTile(xx+5,yy+5,zz+2,159,14)
Level.setTile(xx+5,yy+5,zz+3,159,14)
Level.setTile(xx+5,yy+5,zz+4,159,14)
Level.setTile(xx+5,yy+5,zz+5,159,14)
Level.setTile(xx+5,yy+5,zz+6,159,14)
Level.setTile(xx+5,yy+5,zz+7,159,14)
Level.setTile(xx+5,yy+5,zz+8,159,14)
Level.setTile(xx+6,yy+5,zz+1,159,14)
Level.setTile(xx+6,yy+5,zz+2,159,14)
Level.setTile(xx+6,yy+5,zz+3,159,14)
Level.setTile(xx+6,yy+5,zz+4,159,14)
Level.setTile(xx+6,yy+5,zz+5,159,14)
Level.setTile(xx+6,yy+5,zz+6,159,14)
Level.setTile(xx+6,yy+5,zz+7,159,14)
Level.setTile(xx+6,yy+5,zz+8,159,14)
Level.setTile(xx+7,yy+5,zz+1,159,14)
Level.setTile(xx+7,yy+5,zz+2,159,14)
Level.setTile(xx+7,yy+5,zz+3,159,14)
Level.setTile(xx+7,yy+5,zz+4,159,14)
Level.setTile(xx+7,yy+5,zz+5,159,14)
Level.setTile(xx+7,yy+5,zz+6,159,14)
Level.setTile(xx+7,yy+5,zz+7,159,14)
Level.setTile(xx+7,yy+5,zz+8,159,14)
Level.setTile(xx+8,yy+5,zz+1,159,14)
Level.setTile(xx+8,yy+5,zz+2,159,14)
Level.setTile(xx+8,yy+5,zz+3,159,14)
Level.setTile(xx+8,yy+5,zz+4,159,14)
Level.setTile(xx+8,yy+5,zz+5,159,14)
Level.setTile(xx+8,yy+5,zz+6,159,14)
Level.setTile(xx+8,yy+5,zz+7,159,14)
Level.setTile(xx+8,yy+5,zz+8,159,14)
Level.setTile(xx+9,yy+5,zz+1,159,14)
Level.setTile(xx+9,yy+5,zz+2,159,14)
Level.setTile(xx+9,yy+5,zz+3,159,14)
Level.setTile(xx+9,yy+5,zz+4,159,14)
Level.setTile(xx+9,yy+5,zz+5,159,14)
Level.setTile(xx+9,yy+5,zz+6,159,14)
Level.setTile(xx+9,yy+5,zz+7,159,14)
Level.setTile(xx+9,yy+5,zz+8,159,14)
Level.setTile(xx+10,yy+5,zz+1,159,14)
Level.setTile(xx+10,yy+5,zz+2,159,14)
Level.setTile(xx+10,yy+5,zz+3,159,14)
Level.setTile(xx+10,yy+5,zz+4,159,14)
Level.setTile(xx+10,yy+5,zz+5,159,14)
Level.setTile(xx+10,yy+5,zz+6,159,14)
Level.setTile(xx+10,yy+5,zz+7,159,14)
Level.setTile(xx+10,yy+5,zz+8,159,14)
Level.setTile(xx+11,yy+5,zz+1,159,14)
Level.setTile(xx+11,yy+5,zz+2,159,14)
Level.setTile(xx+11,yy+5,zz+3,159,14)
Level.setTile(xx+11,yy+5,zz+4,159,14)
Level.setTile(xx+11,yy+5,zz+5,159,14)
Level.setTile(xx+11,yy+5,zz+6,159,14)
Level.setTile(xx+11,yy+5,zz+7,159,14)
Level.setTile(xx+11,yy+5,zz+8,159,14)
Level.setTile(xx+12,yy+5,zz+1,159,14)
Level.setTile(xx+12,yy+5,zz+2,159,14)
Level.setTile(xx+12,yy+5,zz+3,159,14)
Level.setTile(xx+12,yy+5,zz+4,159,14)
Level.setTile(xx+12,yy+5,zz+5,159,14)
Level.setTile(xx+12,yy+5,zz+6,159,14)
Level.setTile(xx+12,yy+5,zz+7,159,14)
Level.setTile(xx+12,yy+5,zz+8,159,14)
Level.setTile(xx,yy+5,zz+9,159,14)
Level.setTile(xx+1,yy+5,zz+9,159,14)
Level.setTile(xx+2,yy+5,zz+9,159,14)
Level.setTile(xx+3,yy+5,zz+9,159,14)
Level.setTile(xx+4,yy+5,zz+9,159,14)
Level.setTile(xx+5,yy+5,zz+9,159,14)
Level.setTile(xx+6,yy+5,zz+9,159,14)
Level.setTile(xx+7,yy+5,zz+9,159,14)
Level.setTile(xx+8,yy+5,zz+9,159,14)
Level.setTile(xx+9,yy+5,zz+9,159,14)
Level.setTile(xx+10,yy+5,zz+9,159,14)
Level.setTile(xx+11,yy+5,zz+9,159,14)
Level.setTile(xx+12,yy+5,zz+9,159,14)
Level.setTile(xx+13,yy+5,zz+9,159,14)
Level.setTile(xx+13,yy+5,zz+8,159,14)
Level.setTile(xx+13,yy+5,zz+7,159,14)
Level.setTile(xx+13,yy+5,zz+6,159,14)
Level.setTile(xx+13,yy+5,zz+5,159,14)
Level.setTile(xx+13,yy+5,zz+4,159,14)
Level.setTile(xx+13,yy+5,zz+3,159,14)
Level.setTile(xx+13,yy+5,zz+2,159,14)
Level.setTile(xx+13,yy+5,zz+1,159,14)
Level.setTile(xx+13,yy+5,zz+0,159,14)
Level.setTile(xx+12,yy+5,zz+0,159,14)
Level.setTile(xx+11,yy+5,zz+0,159,14)
Level.setTile(xx+10,yy+5,zz+0,159,14)
Level.setTile(xx+9,yy+5,zz+0,159,14)
Level.setTile(xx+8,yy+5,zz+0,159,14)
Level.setTile(xx+7,yy+5,zz+0,159,14)
Level.setTile(xx+6,yy+5,zz+0,159,14)
Level.setTile(xx+5,yy+5,zz+0,159,14)
Level.setTile(xx+4,yy+5,zz+0,159,14)
Level.setTile(xx+3,yy+5,zz+0,159,14)
Level.setTile(xx+2,yy+5,zz+0,159,14)
Level.setTile(xx+1,yy+5,zz+0,159,14)
Level.setTile(xx+0,yy+5,zz+0,159,14)
Level.setTile(xx+1,yy+6,zz+1,159,14)
Level.setTile(xx+1,yy+6,zz+2,159,14)
Level.setTile(xx+1,yy+6,zz+3,159,14)
Level.setTile(xx+1,yy+6,zz+4,159,14)
Level.setTile(xx+1,yy+6,zz+5,159,14)
Level.setTile(xx+1,yy+6,zz+6,159,14)
Level.setTile(xx+1,yy+6,zz+7,159,14)
Level.setTile(xx+1,yy+6,zz+8,159,14)
Level.setTile(xx+2,yy+6,zz+1,159,14)
Level.setTile(xx+2,yy+6,zz+2,159,14)
Level.setTile(xx+2,yy+6,zz+3,159,14)
Level.setTile(xx+2,yy+6,zz+4,159,14)
Level.setTile(xx+2,yy+6,zz+5,159,14)
Level.setTile(xx+2,yy+6,zz+6,159,14)
Level.setTile(xx+2,yy+6,zz+7,159,14)
Level.setTile(xx+2,yy+6,zz+8,159,14)
Level.setTile(xx+3,yy+6,zz+1,159,14)
Level.setTile(xx+3,yy+6,zz+2,159,14)
Level.setTile(xx+3,yy+6,zz+3,159,14)
Level.setTile(xx+3,yy+6,zz+4,159,14)
Level.setTile(xx+3,yy+6,zz+5,159,14)
Level.setTile(xx+3,yy+6,zz+6,159,14)
Level.setTile(xx+3,yy+6,zz+7,159,14)
Level.setTile(xx+3,yy+6,zz+8,159,14)
Level.setTile(xx+4,yy+6,zz+1,159,14)
Level.setTile(xx+4,yy+6,zz+2,159,14)
Level.setTile(xx+4,yy+6,zz+3,159,14)
Level.setTile(xx+4,yy+6,zz+4,159,14)
Level.setTile(xx+4,yy+6,zz+5,159,14)
Level.setTile(xx+4,yy+6,zz+6,159,14)
Level.setTile(xx+4,yy+6,zz+7,159,14)
Level.setTile(xx+4,yy+6,zz+8,159,14)
Level.setTile(xx+5,yy+6,zz+1,159,14)
Level.setTile(xx+5,yy+6,zz+2,159,14)
Level.setTile(xx+5,yy+6,zz+3,159,14)
Level.setTile(xx+5,yy+6,zz+4,159,14)
Level.setTile(xx+5,yy+6,zz+5,159,14)
Level.setTile(xx+5,yy+6,zz+6,159,14)
Level.setTile(xx+5,yy+6,zz+7,159,14)
Level.setTile(xx+5,yy+6,zz+8,159,14)
Level.setTile(xx+6,yy+6,zz+1,159,14)
Level.setTile(xx+6,yy+6,zz+2,159,14)
Level.setTile(xx+6,yy+6,zz+3,159,14)
Level.setTile(xx+6,yy+6,zz+4,159,14)
Level.setTile(xx+6,yy+6,zz+5,159,14)
Level.setTile(xx+6,yy+6,zz+6,159,14)
Level.setTile(xx+6,yy+6,zz+7,159,14)
Level.setTile(xx+6,yy+6,zz+8,159,14)
Level.setTile(xx+7,yy+6,zz+1,159,14)
Level.setTile(xx+7,yy+6,zz+2,159,14)
Level.setTile(xx+7,yy+6,zz+3,159,14)
Level.setTile(xx+7,yy+6,zz+4,159,14)
Level.setTile(xx+7,yy+6,zz+5,159,14)
Level.setTile(xx+7,yy+6,zz+6,159,14)
Level.setTile(xx+7,yy+6,zz+7,159,14)
Level.setTile(xx+7,yy+6,zz+8,159,14)
Level.setTile(xx+8,yy+6,zz+1,159,14)
Level.setTile(xx+8,yy+6,zz+2,159,14)
Level.setTile(xx+8,yy+6,zz+3,159,14)
Level.setTile(xx+8,yy+6,zz+4,159,14)
Level.setTile(xx+8,yy+6,zz+5,159,14)
Level.setTile(xx+8,yy+6,zz+6,159,14)
Level.setTile(xx+8,yy+6,zz+7,159,14)
Level.setTile(xx+8,yy+6,zz+8,159,14)
Level.setTile(xx+9,yy+6,zz+1,159,14)
Level.setTile(xx+9,yy+6,zz+2,159,14)
Level.setTile(xx+9,yy+6,zz+3,159,14)
Level.setTile(xx+9,yy+6,zz+4,159,14)
Level.setTile(xx+9,yy+6,zz+5,159,14)
Level.setTile(xx+9,yy+6,zz+6,159,14)
Level.setTile(xx+9,yy+6,zz+7,159,14)
Level.setTile(xx+9,yy+6,zz+8,159,14)
Level.setTile(xx+10,yy+6,zz+1,159,14)
Level.setTile(xx+10,yy+6,zz+2,159,14)
Level.setTile(xx+10,yy+6,zz+3,159,14)
Level.setTile(xx+10,yy+6,zz+4,159,14)
Level.setTile(xx+10,yy+6,zz+5,159,14)
Level.setTile(xx+10,yy+6,zz+6,159,14)
Level.setTile(xx+10,yy+6,zz+7,159,14)
Level.setTile(xx+10,yy+6,zz+8,159,14)
Level.setTile(xx+11,yy+6,zz+1,159,14)
Level.setTile(xx+11,yy+6,zz+2,159,14)
Level.setTile(xx+11,yy+6,zz+3,159,14)
Level.setTile(xx+11,yy+6,zz+4,159,14)
Level.setTile(xx+11,yy+6,zz+5,159,14)
Level.setTile(xx+11,yy+6,zz+6,159,14)
Level.setTile(xx+11,yy+6,zz+7,159,14)
Level.setTile(xx+11,yy+6,zz+8,159,14)
Level.setTile(xx+12,yy+6,zz+1,159,14)
Level.setTile(xx+12,yy+6,zz+2,159,14)
Level.setTile(xx+12,yy+6,zz+3,159,14)
Level.setTile(xx+12,yy+6,zz+4,159,14)
Level.setTile(xx+12,yy+6,zz+5,159,14)
Level.setTile(xx+12,yy+6,zz+6,159,14)
Level.setTile(xx+12,yy+6,zz+7,159,14)
Level.setTile(xx+12,yy+6,zz+8,159,14)
Level.setTile(xx+1,yy-1,zz+1,159,4)
Level.setTile(xx+1,yy-1,zz+2,159,4)
Level.setTile(xx+1,yy-1,zz+3,159,4)
Level.setTile(xx+1,yy-1,zz+4,159,4)
Level.setTile(xx+1,yy-1,zz+5,159,4)
Level.setTile(xx+1,yy-1,zz+6,159,4)
Level.setTile(xx+1,yy-1,zz+7,159,4)
Level.setTile(xx+1,yy-1,zz+8,159,4)
Level.setTile(xx+2,yy-1,zz+1,159,4)
Level.setTile(xx+2,yy-1,zz+2,159,4)
Level.setTile(xx+2,yy-1,zz+3,159,4)
Level.setTile(xx+2,yy-1,zz+4,159,4)
Level.setTile(xx+2,yy-1,zz+5,159,4)
Level.setTile(xx+2,yy-1,zz+6,159,4)
Level.setTile(xx+2,yy-1,zz+7,159,4)
Level.setTile(xx+2,yy-1,zz+8,159,4)
Level.setTile(xx+3,yy-1,zz+1,159,4)
Level.setTile(xx+3,yy-1,zz+2,159,4)
Level.setTile(xx+3,yy-1,zz+3,159,4)
Level.setTile(xx+3,yy-1,zz+4,159,4)
Level.setTile(xx+3,yy-1,zz+5,159,4)
Level.setTile(xx+3,yy-1,zz+6,159,4)
Level.setTile(xx+3,yy-1,zz+7,159,4)
Level.setTile(xx+3,yy-1,zz+8,159,4)
Level.setTile(xx+4,yy-1,zz+1,159,4)
Level.setTile(xx+4,yy-1,zz+2,159,4)
Level.setTile(xx+4,yy-1,zz+3,159,4)
Level.setTile(xx+4,yy-1,zz+4,159,4)
Level.setTile(xx+4,yy-1,zz+5,159,4)
Level.setTile(xx+4,yy-1,zz+6,159,4)
Level.setTile(xx+4,yy-1,zz+7,159,4)
Level.setTile(xx+4,yy-1,zz+8,159,4)
Level.setTile(xx+5,yy-1,zz+1,159,4)
Level.setTile(xx+5,yy-1,zz+2,159,4)
Level.setTile(xx+5,yy-1,zz+3,159,4)
Level.setTile(xx+5,yy-1,zz+4,159,4)
Level.setTile(xx+5,yy-1,zz+5,159,4)
Level.setTile(xx+5,yy-1,zz+6,159,4)
Level.setTile(xx+5,yy-1,zz+7,159,4)
Level.setTile(xx+5,yy-1,zz+8,159,4)
Level.setTile(xx+6,yy-1,zz+1,159,4)
Level.setTile(xx+6,yy-1,zz+2,159,4)
Level.setTile(xx+6,yy-1,zz+3,159,4)
Level.setTile(xx+6,yy-1,zz+4,159,4)
Level.setTile(xx+6,yy-1,zz+5,159,4)
Level.setTile(xx+6,yy-1,zz+6,159,4)
Level.setTile(xx+6,yy-1,zz+7,159,4)
Level.setTile(xx+6,yy-1,zz+8,159,4)
Level.setTile(xx+7,yy-1,zz+1,159,4)
Level.setTile(xx+7,yy-1,zz+2,159,4)
Level.setTile(xx+7,yy-1,zz+3,159,4)
Level.setTile(xx+7,yy-1,zz+4,159,4)
Level.setTile(xx+7,yy-1,zz+5,159,4)
Level.setTile(xx+7,yy-1,zz+6,159,4)
Level.setTile(xx+7,yy-1,zz+7,159,4)
Level.setTile(xx+7,yy-1,zz+8,159,4)
Level.setTile(xx+8,yy-1,zz+1,159,4)
Level.setTile(xx+8,yy-1,zz+2,159,4)
Level.setTile(xx+8,yy-1,zz+3,159,4)
Level.setTile(xx+8,yy-1,zz+4,159,4)
Level.setTile(xx+8,yy-1,zz+5,159,4)
Level.setTile(xx+8,yy-1,zz+6,159,4)
Level.setTile(xx+8,yy-1,zz+7,159,4)
Level.setTile(xx+8,yy-1,zz+8,159,4)
Level.setTile(xx+9,yy-1,zz+1,159,4)
Level.setTile(xx+9,yy-1,zz+2,159,4)
Level.setTile(xx+9,yy-1,zz+3,159,4)
Level.setTile(xx+9,yy-1,zz+4,159,4)
Level.setTile(xx+9,yy-1,zz+5,159,4)
Level.setTile(xx+9,yy-1,zz+6,159,4)
Level.setTile(xx+9,yy-1,zz+7,159,4)
Level.setTile(xx+9,yy-1,zz+8,159,4)
Level.setTile(xx+10,yy-1,zz+1,159,4)
Level.setTile(xx+10,yy-1,zz+2,159,4)
Level.setTile(xx+10,yy-1,zz+3,159,4)
Level.setTile(xx+10,yy-1,zz+4,159,4)
Level.setTile(xx+10,yy-1,zz+5,159,4)
Level.setTile(xx+10,yy-1,zz+6,159,4)
Level.setTile(xx+10,yy-1,zz+7,159,4)
Level.setTile(xx+10,yy-1,zz+8,159,4)
Level.setTile(xx+11,yy-1,zz+1,159,4)
Level.setTile(xx+11,yy-1,zz+2,159,4)
Level.setTile(xx+11,yy-1,zz+3,159,4)
Level.setTile(xx+11,yy-1,zz+4,159,4)
Level.setTile(xx+11,yy-1,zz+5,159,4)
Level.setTile(xx+11,yy-1,zz+6,159,4)
Level.setTile(xx+11,yy-1,zz+7,159,4)
Level.setTile(xx+11,yy-1,zz+8,159,4)
Level.setTile(xx+12,yy-1,zz+1,159,4)
Level.setTile(xx+12,yy-1,zz+2,159,4)
Level.setTile(xx+12,yy-1,zz+3,159,4)
Level.setTile(xx+12,yy-1,zz+4,159,4)
Level.setTile(xx+12,yy-1,zz+5,159,4)
Level.setTile(xx+12,yy-1,zz+6,159,4)
Level.setTile(xx+12,yy-1,zz+7,159,4)
Level.setTile(xx+12,yy-1,zz+8,159,4)
Level.setTile(xx+1,yy,zz+1,0)
Level.setTile(xx+1,yy,zz+2,0)
Level.setTile(xx+1,yy,zz+3,0)
Level.setTile(xx+1,yy,zz+4,0)
Level.setTile(xx+1,yy,zz+5,0)
Level.setTile(xx+1,yy,zz+6,0)
Level.setTile(xx+1,yy,zz+7,0)
Level.setTile(xx+1,yy,zz+8,202)
Level.setTile(xx+2,yy,zz+1,0)
Level.setTile(xx+2,yy,zz+2,0)
Level.setTile(xx+2,yy,zz+3,0)
Level.setTile(xx+2,yy,zz+4,0)
Level.setTile(xx+2,yy,zz+5,0)
Level.setTile(xx+2,yy,zz+6,0)
Level.setTile(xx+2,yy,zz+7,0)
Level.setTile(xx+2,yy,zz+8,0)
Level.setTile(xx+3,yy,zz+1,0)
Level.setTile(xx+3,yy,zz+2,0)
Level.setTile(xx+3,yy,zz+3,0)
Level.setTile(xx+3,yy,zz+4,0)
Level.setTile(xx+3,yy,zz+5,0)
Level.setTile(xx+3,yy,zz+6,0)
Level.setTile(xx+3,yy,zz+7,0)
Level.setTile(xx+3,yy,zz+8,0)
Level.setTile(xx+4,yy,zz+1,0)
Level.setTile(xx+4,yy,zz+2,0)
Level.setTile(xx+4,yy,zz+3,0)
Level.setTile(xx+4,yy,zz+4,0)
Level.setTile(xx+4,yy,zz+5,0)
Level.setTile(xx+4,yy,zz+6,0)
Level.setTile(xx+4,yy,zz+7,0)
Level.setTile(xx+4,yy,zz+8,0)
Level.setTile(xx+5,yy,zz+1,0)
Level.setTile(xx+5,yy,zz+2,0)
Level.setTile(xx+5,yy,zz+3,0)
Level.setTile(xx+5,yy,zz+4,0)
Level.setTile(xx+5,yy,zz+5,0)
Level.setTile(xx+5,yy,zz+6,0)
Level.setTile(xx+5,yy,zz+7,0)
Level.setTile(xx+5,yy,zz+8,0)
Level.setTile(xx+6,yy,zz+1,0)
Level.setTile(xx+6,yy,zz+2,0)
Level.setTile(xx+6,yy,zz+3,0)
Level.setTile(xx+6,yy,zz+4,0)
Level.setTile(xx+6,yy,zz+5,0)
Level.setTile(xx+6,yy,zz+6,0)
Level.setTile(xx+6,yy,zz+7,0)
Level.setTile(xx+6,yy,zz+8,200)
Level.setTile(xx+7,yy,zz+1,0)
Level.setTile(xx+7,yy,zz+2,0)
Level.setTile(xx+7,yy,zz+3,0)
Level.setTile(xx+7,yy,zz+4,0)
Level.setTile(xx+7,yy,zz+5,0)
Level.setTile(xx+7,yy,zz+6,0)
Level.setTile(xx+7,yy,zz+7,0)
Level.setTile(xx+7,yy,zz+8,200)
Level.setTile(xx+8,yy,zz+1,0)
Level.setTile(xx+8,yy,zz+2,0)
Level.setTile(xx+8,yy,zz+3,0)
Level.setTile(xx+8,yy,zz+4,0)
Level.setTile(xx+8,yy,zz+5,0)
Level.setTile(xx+8,yy,zz+6,0)
Level.setTile(xx+8,yy,zz+7,0)
Level.setTile(xx+8,yy,zz+8,0)
Level.setTile(xx+9,yy,zz+1,0)
Level.setTile(xx+9,yy,zz+2,0)
Level.setTile(xx+9,yy,zz+3,0)
Level.setTile(xx+9,yy,zz+4,0)
Level.setTile(xx+9,yy,zz+5,0)
Level.setTile(xx+9,yy,zz+6,0)
Level.setTile(xx+9,yy,zz+7,0)
Level.setTile(xx+9,yy,zz+8,0)
Level.setTile(xx+10,yy,zz+1,0)
Level.setTile(xx+10,yy,zz+2,0)
Level.setTile(xx+10,yy,zz+3,0)
Level.setTile(xx+10,yy,zz+4,0)
Level.setTile(xx+10,yy,zz+5,0)
Level.setTile(xx+10,yy,zz+6,0)
Level.setTile(xx+10,yy,zz+7,0)
Level.setTile(xx+10,yy,zz+8,0)
Level.setTile(xx+11,yy,zz+1,0)
Level.setTile(xx+11,yy,zz+2,0)
Level.setTile(xx+11,yy,zz+3,0)
Level.setTile(xx+11,yy,zz+4,0)
Level.setTile(xx+11,yy,zz+5,0)
Level.setTile(xx+11,yy,zz+6,0)
Level.setTile(xx+11,yy,zz+7,0)
Level.setTile(xx+11,yy,zz+8,0)
Level.setTile(xx+12,yy,zz+1,0)
Level.setTile(xx+12,yy,zz+2,0)
Level.setTile(xx+12,yy,zz+3,0)
Level.setTile(xx+12,yy,zz+4,0)
Level.setTile(xx+12,yy,zz+5,0)
Level.setTile(xx+12,yy,zz+6,0)
Level.setTile(xx+12,yy,zz+7,0)
Level.setTile(xx+12,yy,zz+8,202)
Level.setTile(xx+1,yy+1,zz+1,0)
Level.setTile(xx+1,yy+1,zz+2,0)
Level.setTile(xx+1,yy+1,zz+3,0)
Level.setTile(xx+1,yy+1,zz+4,0)
Level.setTile(xx+1,yy+1,zz+5,0)
Level.setTile(xx+1,yy+1,zz+6,0)
Level.setTile(xx+1,yy+1,zz+7,0)
Level.setTile(xx+1,yy+1,zz+8,201)
Level.setTile(xx+2,yy+1,zz+1,0)
Level.setTile(xx+2,yy+1,zz+2,0)
Level.setTile(xx+2,yy+1,zz+3,0)
Level.setTile(xx+2,yy+1,zz+4,0)
Level.setTile(xx+2,yy+1,zz+5,0)
Level.setTile(xx+2,yy+1,zz+6,0)
Level.setTile(xx+2,yy+1,zz+7,0)
Level.setTile(xx+2,yy+1,zz+8,0)
Level.setTile(xx+3,yy+1,zz+1,0)
Level.setTile(xx+3,yy+1,zz+2,0)
Level.setTile(xx+3,yy+1,zz+3,0)
Level.setTile(xx+3,yy+1,zz+4,0)
Level.setTile(xx+3,yy+1,zz+5,0)
Level.setTile(xx+3,yy+1,zz+6,0)
Level.setTile(xx+3,yy+1,zz+7,0)
Level.setTile(xx+3,yy+1,zz+8,0)
Level.setTile(xx+4,yy+1,zz+1,0)
Level.setTile(xx+4,yy+1,zz+2,0)
Level.setTile(xx+4,yy+1,zz+3,0)
Level.setTile(xx+4,yy+1,zz+4,0)
Level.setTile(xx+4,yy+1,zz+5,0)
Level.setTile(xx+4,yy+1,zz+6,0)
Level.setTile(xx+4,yy+1,zz+7,0)
Level.setTile(xx+4,yy+1,zz+8,0)
Level.setTile(xx+5,yy+1,zz+1,0)
Level.setTile(xx+5,yy+1,zz+2,0)
Level.setTile(xx+5,yy+1,zz+3,0)
Level.setTile(xx+5,yy+1,zz+4,0)
Level.setTile(xx+5,yy+1,zz+5,0)
Level.setTile(xx+5,yy+1,zz+6,0)
Level.setTile(xx+5,yy+1,zz+7,0)
Level.setTile(xx+5,yy+1,zz+8,0)
Level.setTile(xx+6,yy+1,zz+1,0)
Level.setTile(xx+6,yy+1,zz+2,0)
Level.setTile(xx+6,yy+1,zz+3,0)
Level.setTile(xx+6,yy+1,zz+4,0)
Level.setTile(xx+6,yy+1,zz+5,0)
Level.setTile(xx+6,yy+1,zz+6,0)
Level.setTile(xx+6,yy+1,zz+7,0)
Level.setTile(xx+6,yy+1,zz+8,0)
Level.setTile(xx+7,yy+1,zz+1,0)
Level.setTile(xx+7,yy+1,zz+2,0)
Level.setTile(xx+7,yy+1,zz+3,0)
Level.setTile(xx+7,yy+1,zz+4,0)
Level.setTile(xx+7,yy+1,zz+5,0)
Level.setTile(xx+7,yy+1,zz+6,0)
Level.setTile(xx+7,yy+1,zz+7,0)
Level.setTile(xx+7,yy+1,zz+8,0)
Level.setTile(xx+8,yy+1,zz+1,0)
Level.setTile(xx+8,yy+1,zz+2,0)
Level.setTile(xx+8,yy+1,zz+3,0)
Level.setTile(xx+8,yy+1,zz+4,0)
Level.setTile(xx+8,yy+1,zz+5,0)
Level.setTile(xx+8,yy+1,zz+6,0)
Level.setTile(xx+8,yy+1,zz+7,0)
Level.setTile(xx+8,yy+1,zz+8,0)
Level.setTile(xx+9,yy+1,zz+1,0)
Level.setTile(xx+9,yy+1,zz+2,0)
Level.setTile(xx+9,yy+1,zz+3,0)
Level.setTile(xx+9,yy+1,zz+4,0)
Level.setTile(xx+9,yy+1,zz+5,0)
Level.setTile(xx+9,yy+1,zz+6,0)
Level.setTile(xx+9,yy+1,zz+7,0)
Level.setTile(xx+9,yy+1,zz+8,0)
Level.setTile(xx+10,yy+1,zz+1,0)
Level.setTile(xx+10,yy+1,zz+2,0)
Level.setTile(xx+10,yy+1,zz+3,0)
Level.setTile(xx+10,yy+1,zz+4,0)
Level.setTile(xx+10,yy+1,zz+5,0)
Level.setTile(xx+10,yy+1,zz+6,0)
Level.setTile(xx+10,yy+1,zz+7,0)
Level.setTile(xx+10,yy+1,zz+8,0)
Level.setTile(xx+11,yy+1,zz+1,0)
Level.setTile(xx+11,yy+1,zz+2,0)
Level.setTile(xx+11,yy+1,zz+3,0)
Level.setTile(xx+11,yy+1,zz+4,0)
Level.setTile(xx+11,yy+1,zz+5,0)
Level.setTile(xx+11,yy+1,zz+6,0)
Level.setTile(xx+11,yy+1,zz+7,0)
Level.setTile(xx+11,yy+1,zz+8,0)
Level.setTile(xx+12,yy+1,zz+1,0)
Level.setTile(xx+12,yy+1,zz+2,0)
Level.setTile(xx+12,yy+1,zz+3,0)
Level.setTile(xx+12,yy+1,zz+4,0)
Level.setTile(xx+12,yy+1,zz+5,0)
Level.setTile(xx+12,yy+1,zz+6,0)
Level.setTile(xx+12,yy+1,zz+7,0)
Level.setTile(xx+12,yy+1,zz+8,201)
Level.setTile(xx+1,yy+2,zz+1,0)
Level.setTile(xx+1,yy+2,zz+2,0)
Level.setTile(xx+1,yy+2,zz+3,0)
Level.setTile(xx+1,yy+2,zz+4,0)
Level.setTile(xx+1,yy+2,zz+5,0)
Level.setTile(xx+1,yy+2,zz+6,0)
Level.setTile(xx+1,yy+2,zz+7,0)
Level.setTile(xx+1,yy+2,zz+8,0)
Level.setTile(xx+2,yy+2,zz+1,0)
Level.setTile(xx+2,yy+2,zz+2,0)
Level.setTile(xx+2,yy+2,zz+3,0)
Level.setTile(xx+2,yy+2,zz+4,0)
Level.setTile(xx+2,yy+2,zz+5,0)
Level.setTile(xx+2,yy+2,zz+6,0)
Level.setTile(xx+2,yy+2,zz+7,0)
Level.setTile(xx+2,yy+2,zz+8,0)
Level.setTile(xx+3,yy+2,zz+1,0)
Level.setTile(xx+3,yy+2,zz+2,0)
Level.setTile(xx+3,yy+2,zz+3,0)
Level.setTile(xx+3,yy+2,zz+4,0)
Level.setTile(xx+3,yy+2,zz+5,0)
Level.setTile(xx+3,yy+2,zz+6,0)
Level.setTile(xx+3,yy+2,zz+7,0)
Level.setTile(xx+3,yy+2,zz+8,0)
Level.setTile(xx+4,yy+2,zz+1,0)
Level.setTile(xx+4,yy+2,zz+2,0)
Level.setTile(xx+4,yy+2,zz+3,0)
Level.setTile(xx+4,yy+2,zz+4,0)
Level.setTile(xx+4,yy+2,zz+5,0)
Level.setTile(xx+4,yy+2,zz+6,0)
Level.setTile(xx+4,yy+2,zz+7,0)
Level.setTile(xx+4,yy+2,zz+8,0)
Level.setTile(xx+5,yy+2,zz+1,0)
Level.setTile(xx+5,yy+2,zz+2,0)
Level.setTile(xx+5,yy+2,zz+3,0)
Level.setTile(xx+5,yy+2,zz+4,0)
Level.setTile(xx+5,yy+2,zz+5,0)
Level.setTile(xx+5,yy+2,zz+6,0)
Level.setTile(xx+5,yy+2,zz+7,0)
Level.setTile(xx+5,yy+2,zz+8,0)
Level.setTile(xx+6,yy+2,zz+1,0)
Level.setTile(xx+6,yy+2,zz+2,0)
Level.setTile(xx+6,yy+2,zz+3,0)
Level.setTile(xx+6,yy+2,zz+4,0)
Level.setTile(xx+6,yy+2,zz+5,0)
Level.setTile(xx+6,yy+2,zz+6,0)
Level.setTile(xx+6,yy+2,zz+7,0)
Level.setTile(xx+6,yy+2,zz+8,0)
Level.setTile(xx+7,yy+2,zz+1,0)
Level.setTile(xx+7,yy+2,zz+2,0)
Level.setTile(xx+7,yy+2,zz+3,0)
Level.setTile(xx+7,yy+2,zz+4,0)
Level.setTile(xx+7,yy+2,zz+5,0)
Level.setTile(xx+7,yy+2,zz+6,0)
Level.setTile(xx+7,yy+2,zz+7,0)
Level.setTile(xx+7,yy+2,zz+8,0)
Level.setTile(xx+8,yy+2,zz+1,0)
Level.setTile(xx+8,yy+2,zz+2,0)
Level.setTile(xx+8,yy+2,zz+3,0)
Level.setTile(xx+8,yy+2,zz+4,0)
Level.setTile(xx+8,yy+2,zz+5,0)
Level.setTile(xx+8,yy+2,zz+6,0)
Level.setTile(xx+8,yy+2,zz+7,0)
Level.setTile(xx+8,yy+2,zz+8,0)
Level.setTile(xx+9,yy+2,zz+1,0)
Level.setTile(xx+9,yy+2,zz+2,0)
Level.setTile(xx+9,yy+2,zz+3,0)
Level.setTile(xx+9,yy+2,zz+4,0)
Level.setTile(xx+9,yy+2,zz+5,0)
Level.setTile(xx+9,yy+2,zz+6,0)
Level.setTile(xx+9,yy+2,zz+7,0)
Level.setTile(xx+9,yy+2,zz+8,0)
Level.setTile(xx+10,yy+2,zz+1,0)
Level.setTile(xx+10,yy+2,zz+2,0)
Level.setTile(xx+10,yy+2,zz+3,0)
Level.setTile(xx+10,yy+2,zz+4,0)
Level.setTile(xx+10,yy+2,zz+5,0)
Level.setTile(xx+10,yy+2,zz+6,0)
Level.setTile(xx+10,yy+2,zz+7,0)
Level.setTile(xx+10,yy+2,zz+8,0)
Level.setTile(xx+11,yy+2,zz+1,0)
Level.setTile(xx+11,yy+2,zz+2,0)
Level.setTile(xx+11,yy+2,zz+3,0)
Level.setTile(xx+11,yy+2,zz+4,0)
Level.setTile(xx+11,yy+2,zz+5,0)
Level.setTile(xx+11,yy+2,zz+6,0)
Level.setTile(xx+11,yy+2,zz+7,0)
Level.setTile(xx+11,yy+2,zz+8,0)
Level.setTile(xx+12,yy+2,zz+1,0)
Level.setTile(xx+12,yy+2,zz+2,0)
Level.setTile(xx+12,yy+2,zz+3,0)
Level.setTile(xx+12,yy+2,zz+4,0)
Level.setTile(xx+12,yy+2,zz+5,0)
Level.setTile(xx+12,yy+2,zz+6,0)
Level.setTile(xx+12,yy+2,zz+7,0)
Level.setTile(xx+12,yy+2,zz+8,0)
Level.setTile(xx+12,yy+4,zz+8,89)
Level.setTile(xx+1,yy+4,zz+8,89)
Level.setTile(xx+12,yy+4,zz+1,89)
Level.setTile(xx+1,yy+4,zz+1,89)
Level.setTile(xx+5,yy+4,zz-1,159,15);
Level.setTile(xx+6,yy+4,zz-1,159,15);
Level.setTile(xx+7,yy+4,zz-1,159,15);
Level.setTile(xx+8,yy+4,zz-1,159,15);
Level.setTile(xx+4,yy+5,zz-1,159,15);
Level.setTile(xx+5,yy+5,zz-1,159,15);
Level.setTile(xx+6,yy+5,zz-1,159,15);
Level.setTile(xx+7,yy+5,zz-1,159,15);
Level.setTile(xx+8,yy+5,zz-1,159,15);
Level.setTile(xx+9,yy+5,zz-1,159,15);
Level.setTile(xx+3,yy+6,zz-1,159,15);
Level.setTile(xx+4,yy+6,zz-1,159,15);
Level.setTile(xx+5,yy+6,zz-1,159,15);
Level.setTile(xx+6,yy+6,zz-1,159,15);
Level.setTile(xx+7,yy+6,zz-1,159,15);
Level.setTile(xx+8,yy+6,zz-1,159,15);
Level.setTile(xx+9,yy+6,zz-1,159,15);
Level.setTile(xx+10,yy+6,zz-1,159,15);
Level.setTile(xx+3,yy+7,zz-1,159,15);
Level.setTile(xx+4,yy+7,zz-1,159,15);
Level.setTile(xx+5,yy+7,zz-1,159,15);
Level.setTile(xx+6,yy+7,zz-1,159,15);
Level.setTile(xx+7,yy+7,zz-1,159,15);
Level.setTile(xx+8,yy+7,zz-1,159,15);
Level.setTile(xx+9,yy+7,zz-1,159,15);
Level.setTile(xx+10,yy+7,zz-1,159,15);
Level.setTile(xx+3,yy+8,zz-1,159,15);
Level.setTile(xx+4,yy+8,zz-1,159,15);
Level.setTile(xx+5,yy+8,zz-1,159,15);
Level.setTile(xx+6,yy+8,zz-1,159,15);
Level.setTile(xx+7,yy+8,zz-1,159,15);
Level.setTile(xx+8,yy+8,zz-1,159,15);
Level.setTile(xx+9,yy+8,zz-1,159,15);
Level.setTile(xx+10,yy+8,zz-1,159,15);
Level.setTile(xx+4,yy+9,zz-1,159,15);
Level.setTile(xx+5,yy+9,zz-1,159,15);
Level.setTile(xx+6,yy+9,zz-1,159,15);
Level.setTile(xx+7,yy+9,zz-1,159,15);
Level.setTile(xx+8,yy+9,zz-1,159,15);
Level.setTile(xx+9,yy+9,zz-1,159,15);
Level.setTile(xx+5,yy+10,zz-1,159,15);
Level.setTile(xx+6,yy+10,zz-1,159,15);
Level.setTile(xx+7,yy+10,zz-1,159,15);
Level.setTile(xx+8,yy+10,zz-1,159,15);
Level.setTile(xx+5,yy+9,zz-1,159,14);
Level.setTile(xx+6,yy+9,zz-1,159,14);
Level.setTile(xx+7,yy+9,zz-1,159,14);
Level.setTile(xx+8,yy+9,zz-1,159,14);
Level.setTile(xx+4,yy+8,zz-1,159,14);
Level.setTile(xx+5,yy+8,zz-1,159,14);
Level.setTile(xx+6,yy+8,zz-1,159,15);
Level.setTile(xx+7,yy+8,zz-1,159,15);
Level.setTile(xx+8,yy+8,zz-1,159,14);
Level.setTile(xx+9,yy+8,zz-1,159,14);
Level.setTile(xx+4,yy+7,zz-1,159,15);
Level.setTile(xx+5,yy+7,zz-1,159,15);
Level.setTile(xx+6,yy+7,zz-1,159,15);
Level.setTile(xx+7,yy+7,zz-1,159,15);
Level.setTile(xx+8,yy+7,zz-1,159,15);
Level.setTile(xx+9,yy+7,zz-1,159,15);
Level.setTile(xx+4,yy+6,zz-1,159);
Level.setTile(xx+5,yy+6,zz-1,159);
Level.setTile(xx+6,yy+6,zz-1,159,15);
Level.setTile(xx+7,yy+6,zz-1,159,15);
Level.setTile(xx+8,yy+6,zz-1,159);
Level.setTile(xx+9,yy+6,zz-1,159);
Level.setTile(xx+5,yy+5,zz-1,159);
Level.setTile(xx+6,yy+5,zz-1,159);
Level.setTile(xx+7,yy+5,zz-1,159);
Level.setTile(xx+8,yy+5,zz-1,159);
}